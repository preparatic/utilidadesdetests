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

var randomTestsSet = [
         ["0000", "Test Completo", "tests/test_0000.html", ""],
         ["0001", "Test Aleatorio 0001", "tests/test_0001.html", ""],
         ["0002", "Test Aleatorio 0002", "tests/test_0002.html", ""],
         ["0003", "Test Aleatorio 0003", "tests/test_0003.html", ""],
         ["0004", "Test Aleatorio 0004", "tests/test_0004.html", ""],
         ["0005", "Test Aleatorio 0005", "tests/test_0005.html", ""],
         ["0006", "Test Aleatorio 0006", "tests/test_0006.html", ""],
         ["0007", "Test Aleatorio 0007", "tests/test_0007.html", ""],
         ["0008", "Test Aleatorio 0008", "tests/test_0008.html", ""],
         ["0009", "Test Aleatorio 0009", "tests/test_0009.html", ""],
         ["0010", "Test Aleatorio 0010", "tests/test_0010.html", ""],
         ["0011", "Test Aleatorio 0011", "tests/test_0011.html", ""],
         ["0012", "Test Aleatorio 0012", "tests/test_0012.html", ""],
         ["0013", "Test Aleatorio 0013", "tests/test_0013.html", ""],
         ["0014", "Test Aleatorio 0014", "tests/test_0014.html", ""],
         ["0015", "Test Aleatorio 0015", "tests/test_0015.html", ""],
         ["0016", "Test Aleatorio 0016", "tests/test_0016.html", ""],
         ["0017", "Test Aleatorio 0017", "tests/test_0017.html", ""],
         ["0018", "Test Aleatorio 0018", "tests/test_0018.html", ""],
         ["0019", "Test Aleatorio 0019", "tests/test_0019.html", ""],
];

var blockTestsSet = [
        ["0001", "Test del bloque A1 - 0001", "tests/test_0001.html", "A1", ""],
        ["0002", "Test del bloque A1 - 0002", "tests/test_0002.html", "A1", ""],
        ["0003", "Test del bloque A1 - 0003", "tests/test_0003.html", "A1", ""],
        ["0004", "Test del bloque A1 - 0004", "tests/test_0004.html", "A1", ""],
        ["0005", "Test del bloque A1 - 0005", "tests/test_0005.html", "A1", ""],
        ["0006", "Test del bloque A1 - 0006", "tests/test_0006.html", "A1", ""],
        ["0007", "Test del bloque A2 - 0001", "tests/test_0007.html", "A2", ""],
        ["0008", "Test del bloque A2 - 0002", "tests/test_0008.html", "A2", ""],
        ["0009", "Test del bloque A3 - 0001", "tests/test_0009.html", "A3", ""],
        ["0010", "Test del bloque A3 - 0003", "tests/test_0010.html", "A3", ""],
        ["0011", "Test del bloque B1 - 0001", "tests/test_0011.html", "B1", ""],
        ["0012", "Test del bloque B1 - 0002", "tests/test_0012.html", "B1", ""],
        ["0013", "Test del bloque B1 - 0003", "tests/test_0013.html", "B1", ""],
        ["0014", "Test del bloque B1 - 0004", "tests/test_0014.html", "B1", ""],
        ["0015", "Test del bloque B2 - 0001", "tests/test_0015.html", "B2", ""],
        ["0016", "Test del bloque B3 - 0001", "tests/test_0016.html", "B3", ""],
        ["0017", "Test del bloque B4 - 0001", "tests/test_0017.html", "B4", ""],
        ["0018", "Test del bloque B4 - 0002", "tests/test_0018.html", "B4", ""],
        ["0019", "Test del bloque B4 - 0003", "tests/test_0019.html", "B4", ""],
];

var themeTestsSet = [
        ["0001", "Test del tema 1 - 0001", "tests/test_0001.html", "T1", ""],
        ["0002", "Test del tema 1 - 0002", "tests/test_0002.html", "T1", ""],
        ["0003", "Test del tema 1 - 0003", "tests/test_0003.html", "T1", ""],
        ["0004", "Test del tema 1 - 0004", "tests/test_0004.html", "T1", ""],
        ["0005", "Test del tema 1 - 0005", "tests/test_0005.html", "T1", ""],
        ["0006", "Test del tema 1 - 0006", "tests/test_0006.html", "T1", ""],
        ["0007", "Test del tema 2 - 0001", "tests/test_0007.html", "T2", ""],
        ["0008", "Test del tema 2 - 0002", "tests/test_0008.html", "T2", ""],
        ["0009", "Test del tema 3 - 0001", "tests/test_0009.html", "T3", ""],
        ["0010", "Test del tema 3 - 0003", "tests/test_0010.html", "T3", ""],
        ["0011", "Test del tema 4 - 0001", "tests/test_0011.html", "T4", ""],
        ["0012", "Test del tema 4 - 0002", "tests/test_0012.html", "T4", ""],
        ["0013", "Test del tema 4 - 0003", "tests/test_0013.html", "T4", ""],
        ["0014", "Test del tema 4 - 0004", "tests/test_0014.html", "T4", ""],
        ["0015", "Test del tema 5 - 0001", "tests/test_0015.html", "T5", ""],
        ["0016", "Test del tema 6 - 0001", "tests/test_0016.html", "T6", ""],
        ["0017", "Test del tema 7 - 0001", "tests/test_0017.html", "T7", ""],
        ["0018", "Test del tema 7 - 0002", "tests/test_0018.html", "T7", ""],
        ["0019", "Test del tema 7 - 0003", "tests/test_0019.html", "T7", ""],
];

var annosTestsSet = [
        ["0001", "Test del 2013 - 0001", "tests/test_0001.html", "2013", ""],
        ["0002", "Test del 2013 - 0002", "tests/test_0002.html", "2013", ""],
        ["0003", "Test del 2013 - 0003", "tests/test_0003.html", "2013", ""],
        ["0004", "Test del 2013 - 0004", "tests/test_0004.html", "2013", ""],
        ["0005", "Test del 2013 - 0005", "tests/test_0005.html", "2013", ""],
        ["0006", "Test del 2013 - 0006", "tests/test_0006.html", "2013", ""],
        ["0007", "Test del 2014 - 0001", "tests/test_0007.html", "2014", ""],
        ["0008", "Test del 2014 - 0002", "tests/test_0008.html", "2014", ""],
        ["0009", "Test del 2015 - 0001", "tests/test_0009.html", "2015", ""],
        ["0010", "Test del 2015 - 0002", "tests/test_0010.html", "2015", ""],
        ["0011", "Test del 2010 - 0001", "tests/test_0011.html", "2010", ""],
        ["0012", "Test del 2010 - 0002", "tests/test_0012.html", "2010", ""],
        ["0013", "Test del 2010 - 0003", "tests/test_0013.html", "2010", ""],
        ["0014", "Test del 2010 - 0004", "tests/test_0014.html", "2010", ""],
        ["0015", "Test del 2011 - 0001", "tests/test_0015.html", "2011", ""],
        ["0016", "Test del 2011 - 0001", "tests/test_0016.html", "2011", ""],
        ["0017", "Test del 2012 - 0001", "tests/test_0017.html", "2012", ""],
        ["0018", "Test del 2012 - 0002", "tests/test_0018.html", "2012", ""],
        ["0019", "Test del 2012 - 0003", "tests/test_0019.html", "2012", ""],
];