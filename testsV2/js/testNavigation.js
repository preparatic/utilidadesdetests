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
/* Esta funci&oacute;n rellena el combo para seleccionar un test. Se genera de forma autom&aacute;tica durante la construcci&oacute;n de los test. Se genera
con enlaces a los test que se han generado.

* Una vez generados todos los tests, se generan las funciones de navegaci&oacute;n, poniendo enlaces a todos los 
* los test que se hayan generado en el &aacute;rbol de directorios.
*/



function addOption(theSel, theValue, theText)
{
		  var newOpt = new Option(theText, theValue);
		  var selLength = theSel.length;
		  theSel.options[selLength] = newOpt;
}

function deleteOption(theSel, theIndex)
{ 
		 var selLength = theSel.length;
		  	if(selLength>0)
		  	{
		  	  theSel.options[theIndex] = null;
		  }
}


function renderTestSelector(){

	var box = document.getElementById('test_navigation');
	
			 addOption (box, 'test_0000.html', 'Test 0000');
			 addOption (box, 'test_0001.html', 'Test 0001');
			 addOption (box, 'test_0002.html', 'Test 0002');
			 addOption (box, 'test_0003.html', 'Test 0003');
			 addOption (box, 'test_0004.html', 'Test 0004');
			 addOption (box, 'test_0005.html', 'Test 0005');
			 addOption (box, 'test_0006.html', 'Test 0006');
			 addOption (box, 'test_0007.html', 'Test 0007');
			 addOption (box, 'test_0008.html', 'Test 0008');
			 addOption (box, 'test_0009.html', 'Test 0009');
			 addOption (box, 'test_0010.html', 'Test 0010');
			 addOption (box, 'test_0011.html', 'Test 0011');
			 addOption (box, 'test_0012.html', 'Test 0012');
			 addOption (box, 'test_0013.html', 'Test 0013');
			 addOption (box, 'test_0014.html', 'Test 0014');
			 addOption (box, 'test_0015.html', 'Test 0015');
			 addOption (box, 'test_0016.html', 'Test 0016');
			 addOption (box, 'test_0017.html', 'Test 0017');
			 addOption (box, 'test_0018.html', 'Test 0018');
			 addOption (box, 'test_0019.html', 'Test 0019');
			 addOption (box, 'test_0020.html', 'Test 0020');
			 addOption (box, 'test_0021.html', 'Test 0021');
			 addOption (box, 'test_0022.html', 'Test 0022');
			 addOption (box, 'test_0023.html', 'Test 0023');
			 addOption (box, 'test_0024.html', 'Test 0024');
			 addOption (box, 'test_0025.html', 'Test 0025');
			 addOption (box, 'test_0026.html', 'Test 0026');
			 addOption (box, 'test_0027.html', 'Test 0027');
			 addOption (box, 'test_0028.html', 'Test 0028');
			 addOption (box, 'test_0029.html', 'Test 0029');
			 addOption (box, 'test_0030.html', 'Test 0030');
			 addOption (box, 'test_0031.html', 'Test 0031');
			 addOption (box, 'test_0032.html', 'Test 0032');
			 addOption (box, 'test_0033.html', 'Test 0033');
			 addOption (box, 'test_0034.html', 'Test 0034');
			 addOption (box, 'test_0035.html', 'Test 0035');
			 addOption (box, 'test_0036.html', 'Test 0036');
			 addOption (box, 'test_0037.html', 'Test 0037');
			 addOption (box, 'test_0038.html', 'Test 0038');
			 addOption (box, 'test_0039.html', 'Test 0039');
			 addOption (box, 'test_0040.html', 'Test 0040');
			 addOption (box, 'test_0041.html', 'Test 0041');
			 addOption (box, 'test_0042.html', 'Test 0042');
			 addOption (box, 'test_0043.html', 'Test 0043');
			 addOption (box, 'test_0044.html', 'Test 0044');
			 addOption (box, 'test_0045.html', 'Test 0045');
			 addOption (box, 'test_0046.html', 'Test 0046');
			 addOption (box, 'test_0047.html', 'Test 0047');
			 addOption (box, 'test_0048.html', 'Test 0048');
			 addOption (box, 'test_0049.html', 'Test 0049');
			 addOption (box, 'test_0050.html', 'Test 0050');
			 addOption (box, 'test_0051.html', 'Test 0051');
			 addOption (box, 'test_0052.html', 'Test 0052');
			 addOption (box, 'test_0053.html', 'Test 0053');
			 addOption (box, 'test_0054.html', 'Test 0054');
			 addOption (box, 'test_0055.html', 'Test 0055');
			 addOption (box, 'test_0056.html', 'Test 0056');
			 addOption (box, 'test_0057.html', 'Test 0057');
			 addOption (box, 'test_0058.html', 'Test 0058');
			 addOption (box, 'test_0059.html', 'Test 0059');
			 addOption (box, 'test_0060.html', 'Test 0060');
			 addOption (box, 'test_0061.html', 'Test 0061');
			 addOption (box, 'test_0062.html', 'Test 0062');
			 addOption (box, 'test_0063.html', 'Test 0063');
			 addOption (box, 'test_0064.html', 'Test 0064');
			 addOption (box, 'test_0065.html', 'Test 0065');
			 addOption (box, 'test_0066.html', 'Test 0066');
			 addOption (box, 'test_0067.html', 'Test 0067');
			 addOption (box, 'test_0068.html', 'Test 0068');
			 addOption (box, 'test_0069.html', 'Test 0069');
			 addOption (box, 'test_0070.html', 'Test 0070');
			 addOption (box, 'test_0071.html', 'Test 0071');
			 addOption (box, 'test_0072.html', 'Test 0072');
			 addOption (box, 'test_0073.html', 'Test 0073');
			 addOption (box, 'test_0074.html', 'Test 0074');
			 addOption (box, 'test_0075.html', 'Test 0075');
			 addOption (box, 'test_0076.html', 'Test 0076');
			 addOption (box, 'test_0077.html', 'Test 0077');
			 addOption (box, 'test_0078.html', 'Test 0078');
			 addOption (box, 'test_0079.html', 'Test 0079');
			 addOption (box, 'test_0080.html', 'Test 0080');
			 addOption (box, 'test_0081.html', 'Test 0081');
			 addOption (box, 'test_0082.html', 'Test 0082');
			 addOption (box, 'test_0083.html', 'Test 0083');
			 addOption (box, 'test_0084.html', 'Test 0084');
			 addOption (box, 'test_0085.html', 'Test 0085');
			 addOption (box, 'test_0086.html', 'Test 0086');
			 addOption (box, 'test_0087.html', 'Test 0087');
			 addOption (box, 'test_0088.html', 'Test 0088');
			 addOption (box, 'test_0089.html', 'Test 0089');
			 addOption (box, 'test_0090.html', 'Test 0090');
			 addOption (box, 'test_0091.html', 'Test 0091');
			 addOption (box, 'test_0092.html', 'Test 0092');
			 addOption (box, 'test_0093.html', 'Test 0093');
			 addOption (box, 'test_0094.html', 'Test 0094');
			 addOption (box, 'test_0095.html', 'Test 0095');
			 addOption (box, 'test_0096.html', 'Test 0096');
			 addOption (box, 'test_0097.html', 'Test 0097');
			 addOption (box, 'test_0098.html', 'Test 0098');
			 addOption (box, 'test_0099.html', 'Test 0099');
			 addOption (box, 'test_0100.html', 'Test 0100');
}


function renderTestSelectorBloque(bloque){

	var box = document.getElementById('test_navigation');


}


function renderTestSelectorTematica(){

	var boxTema = document.getElementById('tema_navigation');
	var tema = boxTema.options[boxTema.selectedIndex].value;
	var box = document.getElementById('test_navigation');


	// Borramos lo que hubiera de antes
	for (i = box.length - 1; i>=0; i--) {
		deleteOption(box, i);
	    }


	// Cargamos los valores de cada tem&aacute;tica

}

function renderTemas() {
		var box = document.getElementById('tema_navigation');


}

function renderTestSelectorAnhos(anho){

	var box = document.getElementById('test_navigation');


}

//////// Men&uacute; de navegaci&oacute;n.

function addElement(theList, theText, theHref, selected){


	// Create a new <li> element for to insert inside <ul id="myList">
	var new_element = document.createElement('li');
	//new_element.innerHTML = 'jkf';
	if (selected == 1) 
		new_element.setAttribute ('class', 'current_page_item')
	new_element.innerHTML = '<a href="' + theHref  +'">' + theText + '</a>';

	// Add new listItem to List
	theList.insertBefore(new_element, theList.firstChild);
}



function renderMenuTest (tipoTest,id){

	var list = document.getElementById('menuTest');



}

function renderMenuIndex (tipoTest,id){

	var list = document.getElementById('menuTest');



}


function renderTestSelector3(tests) {
    //var option = '';

    document.writeln('<ul class="dropdown-menu" >');
    for (var i = 0; i < tests.length; i++) {
        //option += '<option value="' + numbers[i] + '">' + numbers[i] + '</option>';
        document.writeln('<li><a href="../' + tests[i][0] + '">' + tests[i][1] + '</a></li>');
    }
    // $('#items').append(option);
    document.writeln('</ul>');
}
