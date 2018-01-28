/*******************************************************************************
 * Copyright (c) 2013, 2016 Prepartic and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *******************************************************************************/
/* Esta funci�n rellena el combo para seleccionar un test. Se genera de forma autom�tica durante la construcci�n de los test. Se genera
con enlaces a los test que se han generado.

* Una vez generados todos los tests, se generan las funciones de navegación, poniendo enlaces a todos los 
* los test que se hayan generado en el �rbol de directorios.
*/



const DB_NAME = 'preparatic24-tests-db';
const DB_VERSION = 1; // Use a long long for this value (don't use a float)
const DB_STORE_NAME = 'testsrealizados';

var db;
var refreshFunction;
var clearFunction;

// Used to keep track of which view is displayed to avoid uselessly reloading it
var current_view_pub_key;

function openDb(clearDataList, refreshDataList) {
    console.log("openDb ...");

    clearFunction = clearDataList;
    refreshFunction = refreshDataList;

    window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    if (!window.indexedDB) {
        console.log("Your browser doesn't support a stable version of IndexedDB.");
        return;
    }
    var req = window.indexedDB.open(DB_NAME, DB_VERSION);
    req.onsuccess = function (evt) {
        // Better use "this" than "req" to get the result to avoid problems with
        // garbage collection.
        // db = req.result;
        db = this.result;
        console.log("openDb DONE");

        refreshData();
    };
    req.onerror = function (evt) {
        console.error("openDb:", evt.target.errorCode);
    };

    req.onupgradeneeded = function (evt) {
        console.log("openDb.onupgradeneeded");
        var store = evt.currentTarget.result.createObjectStore(
          DB_STORE_NAME, { keyPath: 'id', autoIncrement: true });

        //store.createIndex('testid', 'testid', { unique: false });
        //store.createIndex('fecha', 'fecha', { unique: false });
    };
}

/**
 * @param {string} store_name
 * @param {string} mode either "readonly" or "readwrite"
 */
function getObjectStore(store_name, mode) {
    var tx = db.transaction(store_name, mode);
    return tx.objectStore(store_name);
}

function clearObjectStore(store_name) {
    var store = getObjectStore(DB_STORE_NAME, 'readwrite');
    var req = store.clear();
    req.onsuccess = function (evt) {
        displayActionSuccess("Store cleared");
        displayTestList(store);
    };
    req.onerror = function (evt) {
        console.error("clearObjectStore:", evt.target.errorCode);
        displayActionFailure(this.error);
    };
}

/**
 * @param {IDBObjectStore=} store
 */
function displayTestList(store) {
    console.log("displayTestList");

    if (typeof store == 'undefined')
        store = getObjectStore(DB_STORE_NAME, 'readonly');

    var req;
    req = store.count();
    // Requests are executed in the order in which they were made against the
    // transaction, and their results are returned in the same order.
    // Thus the count text below will be displayed before the actual pub list
    // (not that it is algorithmically important in this case).
    req.onsuccess = function (evt) {
        console.log("Record(s) in the object store: " + evt.target.result);
    };
    req.onerror = function (evt) {
        console.error("add error", this.error);
        displayActionFailure(this.error);
    };

    var i = 0;
    clearFunction();
    req = store.openCursor();
    req.onsuccess = function (evt) {
        var cursor = evt.target.result;

        // If the cursor is pointing at something, ask for the data
        if (cursor) {
            console.log("displayTestList cursor:", cursor);

            req = store.get(cursor.key);
            req.onsuccess = function (evt) {
                var value = evt.target.result;

                var obj = [cursor.key, value.testID, value.fecha, value.aciertos, value.fallos, value.nc];
                refreshFunction(obj);
            };

            // Move on to the next object in store
            cursor.continue();

            // This counter serves only to create distinct ids
            i++;
        } else {
            console.log("No more entries");
        }
    };
}

/**
 * @param {string} testID
 * @param {string} fecha
 * @param {string} aciertos
 * @param {string} fallos.
 * @param {string} nc.
 */
function addTestRealization(obj) {
    console.log("addTestRealization:", arguments);
    window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    if (!window.indexedDB) {
        console.log("Your browser doesn't support a stable version of IndexedDB.");
        return;
    }
    //var obj = {
    //    testID: testID,
    //    fecha: fecha,
    //    aciertos: aciertos.length,
    //    fallos: fallos.length,
    //    nc: nc.length,
    //    score: score,
    //    listaAciertos: aciertos,
    //    listaFallos: fallos,
    //    listaNC: nc,
    //    listaAciertosPorBloque: aciertosPorBloque,
    //    listaFallosPorBloque: fallosPorBloque,
    //    listaNCPorBloque: ncPorBloque,
    //    listaAciertosPorTema: aciertosPorTema,
    //    listaFallosPorTema: fallosPorTema,
    //    listaNCPorTema: ncPorTema,
    //};
    console.log("addTestRealization, Insertando :", obj);

    var store = getObjectStore(DB_STORE_NAME, 'readwrite');
    var req;
    try {
        req = store.add(obj);
    } catch (e) {
        if (e.name == 'DataCloneError')
            displayActionFailure("This engine doesn't know how to clone a Blob, " +
                                 "use Firefox");
        throw e;
    }
    req.onsuccess = function (evt) {
        console.log("Insertion in DB successful");
        displayActionSuccess();
        refreshData();
    };
    req.onerror = function () {
        console.error("addPublication error", this.error);
        displayActionFailure(this.error);
    };
}

/**
 * @param {number} key
 */
function deleteTest(key) {
    console.log("deleteTest:", arguments);

    store = getObjectStore(DB_STORE_NAME, 'readwrite');

    // As per spec http://www.w3.org/TR/IndexedDB/#object-store-deletion-operation
    // the result of the Object Store Deletion Operation algorithm is
    // undefined, so it's not possible to know if some records were actually
    // deleted by looking at the request result.
    var req = store.get(key);
    req.onsuccess = function (evt) {
        var record = evt.target.result;
        console.log("record:", record);
        if (typeof record == 'undefined') {
            displayActionFailure("No matching record found");
            return;
        }
        // Warning: The exact same key used for creation needs to be passed for
        // the deletion. If the key was a Number for creation, then it needs to
        // be a Number for deletion.
        req = store.delete(key);
        req.onsuccess = function (evt) {
            console.log("evt:", evt);
            console.log("evt.target:", evt.target);
            console.log("evt.target.result:", evt.target.result);
            console.log("delete successful");
            displayActionSuccess("Deletion successful");
            displayTestList(store);
        };
        req.onerror = function (evt) {
            console.error("deleteTest:", evt.target.errorCode);
        };
    };
    req.onerror = function (evt) {
        console.error("deleteTest:", evt.target.errorCode);
    };
}

function displayActionSuccess(msg) {
    msg = typeof msg != 'undefined' ? "Success: " + msg : "Success";
    console.log(msg);
    //$('#msg').empty();
    //$('#msg').html('<span class="action-success">' + msg + '</span>');
}
function displayActionFailure(msg) {
    msg = typeof msg != 'undefined' ? "Failure: " + msg : "Failure";
    console.log(msg);
    //$('#msg').empty();
    //$('#msg').html('<span class="action-failure">' + msg + '</span>');
}
function resetActionStatus() {
    console.log("resetActionStatus ...");
    //$('#msg').empty();
    console.log("resetActionStatus DONE");
}

function refreshData() {
    console.log("refreshData:", arguments);
    var store = getObjectStore(DB_STORE_NAME, 'readonly');
    displayTestList(store);
}
