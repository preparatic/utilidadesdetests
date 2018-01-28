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
* los test que se hayan generado en el árbol de directorios.
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
			 addOption (box, 'test_2005.html', 'Test 2005');
			 addOption (box, 'test_2006.html', 'Test 2006');
			 addOption (box, 'test_2007.html', 'Test 2007');
			 addOption (box, 'test_2008.html', 'Test 2008');
}


function renderTestSelectorBloque(bloque){

	var box = document.getElementById('test_navigation');

	if (bloque == 'B1'){
			 addOption (box, 'test_bloque_B1_0001.html', 'Test 0001');
			 addOption (box, 'test_bloque_B1_0002.html', 'Test 0002');
			 addOption (box, 'test_bloque_B1_0003.html', 'Test 0003');
			 addOption (box, 'test_bloque_B1_0004.html', 'Test 0004');
			 addOption (box, 'test_bloque_B1_0005.html', 'Test 0005');
			 addOption (box, 'test_bloque_B1_0006.html', 'Test 0006');
			 addOption (box, 'test_bloque_B1_0007.html', 'Test 0007');
			 addOption (box, 'test_bloque_B1_0008.html', 'Test 0008');
			 addOption (box, 'test_bloque_B1_0009.html', 'Test 0009');
			 addOption (box, 'test_bloque_B1_0010.html', 'Test 0010');
			 addOption (box, 'test_bloque_B1_0011.html', 'Test 0011');
			 addOption (box, 'test_bloque_B1_0012.html', 'Test 0012');
	}
	if (bloque == 'B2'){
			 addOption (box, 'test_bloque_B2_0001.html', 'Test 0001');
			 addOption (box, 'test_bloque_B2_0002.html', 'Test 0002');
			 addOption (box, 'test_bloque_B2_0003.html', 'Test 0003');
			 addOption (box, 'test_bloque_B2_0004.html', 'Test 0004');
			 addOption (box, 'test_bloque_B2_0005.html', 'Test 0005');
			 addOption (box, 'test_bloque_B2_0006.html', 'Test 0006');
			 addOption (box, 'test_bloque_B2_0007.html', 'Test 0007');
			 addOption (box, 'test_bloque_B2_0008.html', 'Test 0008');
			 addOption (box, 'test_bloque_B2_0009.html', 'Test 0009');
			 addOption (box, 'test_bloque_B2_0010.html', 'Test 0010');
			 addOption (box, 'test_bloque_B2_0011.html', 'Test 0011');
			 addOption (box, 'test_bloque_B2_0012.html', 'Test 0012');
			 addOption (box, 'test_bloque_B2_0013.html', 'Test 0013');
			 addOption (box, 'test_bloque_B2_0014.html', 'Test 0014');
			 addOption (box, 'test_bloque_B2_0015.html', 'Test 0015');
			 addOption (box, 'test_bloque_B2_0016.html', 'Test 0016');
			 addOption (box, 'test_bloque_B2_0017.html', 'Test 0017');
			 addOption (box, 'test_bloque_B2_0018.html', 'Test 0018');
			 addOption (box, 'test_bloque_B2_0019.html', 'Test 0019');
			 addOption (box, 'test_bloque_B2_0020.html', 'Test 0020');
	}
	if (bloque == 'B3'){
			 addOption (box, 'test_bloque_B3_0001.html', 'Test 0001');
			 addOption (box, 'test_bloque_B3_0002.html', 'Test 0002');
			 addOption (box, 'test_bloque_B3_0003.html', 'Test 0003');
			 addOption (box, 'test_bloque_B3_0004.html', 'Test 0004');
			 addOption (box, 'test_bloque_B3_0005.html', 'Test 0005');
			 addOption (box, 'test_bloque_B3_0006.html', 'Test 0006');
			 addOption (box, 'test_bloque_B3_0007.html', 'Test 0007');
			 addOption (box, 'test_bloque_B3_0008.html', 'Test 0008');
			 addOption (box, 'test_bloque_B3_0009.html', 'Test 0009');
			 addOption (box, 'test_bloque_B3_0010.html', 'Test 0010');
			 addOption (box, 'test_bloque_B3_0011.html', 'Test 0011');
			 addOption (box, 'test_bloque_B3_0012.html', 'Test 0012');
			 addOption (box, 'test_bloque_B3_0013.html', 'Test 0013');
			 addOption (box, 'test_bloque_B3_0014.html', 'Test 0014');
			 addOption (box, 'test_bloque_B3_0015.html', 'Test 0015');
	}
	if (bloque == 'B4'){
			 addOption (box, 'test_bloque_B4_0001.html', 'Test 0001');
			 addOption (box, 'test_bloque_B4_0002.html', 'Test 0002');
			 addOption (box, 'test_bloque_B4_0003.html', 'Test 0003');
			 addOption (box, 'test_bloque_B4_0004.html', 'Test 0004');
			 addOption (box, 'test_bloque_B4_0005.html', 'Test 0005');
			 addOption (box, 'test_bloque_B4_0006.html', 'Test 0006');
			 addOption (box, 'test_bloque_B4_0007.html', 'Test 0007');
			 addOption (box, 'test_bloque_B4_0008.html', 'Test 0008');
			 addOption (box, 'test_bloque_B4_0009.html', 'Test 0009');
			 addOption (box, 'test_bloque_B4_0010.html', 'Test 0010');
			 addOption (box, 'test_bloque_B4_0011.html', 'Test 0011');
			 addOption (box, 'test_bloque_B4_0012.html', 'Test 0012');
			 addOption (box, 'test_bloque_B4_0013.html', 'Test 0013');
			 addOption (box, 'test_bloque_B4_0014.html', 'Test 0014');
			 addOption (box, 'test_bloque_B4_0015.html', 'Test 0015');
			 addOption (box, 'test_bloque_B4_0016.html', 'Test 0016');
			 addOption (box, 'test_bloque_B4_0017.html', 'Test 0017');
			 addOption (box, 'test_bloque_B4_0018.html', 'Test 0018');
			 addOption (box, 'test_bloque_B4_0019.html', 'Test 0019');
			 addOption (box, 'test_bloque_B4_0020.html', 'Test 0020');
	}

}


function renderTestSelectorTematica(){

	var boxTema = document.getElementById('tema_navigation');
	var tema = boxTema.options[boxTema.selectedIndex].value;
	var box = document.getElementById('test_navigation');


	// Borramos lo que hubiera de antes
	for (i = box.length - 1; i>=0; i--) {
		deleteOption(box, i);
	    }


	// Cargamos los valores de cada tem�tica
	if (tema == '1'){
			 addOption (box, 'test_temas_1_0001.html', 'Test 0001');
			 addOption (box, 'test_temas_1_0002.html', 'Test 0002');
	}
	if (tema == '2'){
			 addOption (box, 'test_temas_2_0001.html', 'Test 0001');
			 addOption (box, 'test_temas_2_0002.html', 'Test 0002');
			 addOption (box, 'test_temas_2_0003.html', 'Test 0003');
			 addOption (box, 'test_temas_2_0004.html', 'Test 0004');
	}
	if (tema == '3'){
			 addOption (box, 'test_temas_3_0001.html', 'Test 0001');
	}
	if (tema == '4'){
			 addOption (box, 'test_temas_4_0001.html', 'Test 0001');
			 addOption (box, 'test_temas_4_0002.html', 'Test 0002');
	}
	if (tema == '5'){
			 addOption (box, 'test_temas_5_0001.html', 'Test 0001');
			 addOption (box, 'test_temas_5_0002.html', 'Test 0002');
			 addOption (box, 'test_temas_5_0003.html', 'Test 0003');
	}
	if (tema == '6'){
			 addOption (box, 'test_temas_6_0001.html', 'Test 0001');
			 addOption (box, 'test_temas_6_0002.html', 'Test 0002');
			 addOption (box, 'test_temas_6_0003.html', 'Test 0003');
			 addOption (box, 'test_temas_6_0004.html', 'Test 0004');
	}
	if (tema == '7'){
			 addOption (box, 'test_temas_7_0001.html', 'Test 0001');
	}
	if (tema == '8'){
			 addOption (box, 'test_temas_8_0001.html', 'Test 0001');
			 addOption (box, 'test_temas_8_0002.html', 'Test 0002');
			 addOption (box, 'test_temas_8_0003.html', 'Test 0003');
			 addOption (box, 'test_temas_8_0004.html', 'Test 0004');
			 addOption (box, 'test_temas_8_0005.html', 'Test 0005');
			 addOption (box, 'test_temas_8_0006.html', 'Test 0006');
			 addOption (box, 'test_temas_8_0007.html', 'Test 0007');
	}
	if (tema == '9'){
			 addOption (box, 'test_temas_9_0001.html', 'Test 0001');
			 addOption (box, 'test_temas_9_0002.html', 'Test 0002');
	}
	if (tema == '10'){
			 addOption (box, 'test_temas_10_0001.html', 'Test 0001');
			 addOption (box, 'test_temas_10_0002.html', 'Test 0002');
			 addOption (box, 'test_temas_10_0003.html', 'Test 0003');
	}
	if (tema == '11'){
			 addOption (box, 'test_temas_11_0001.html', 'Test 0001');
			 addOption (box, 'test_temas_11_0002.html', 'Test 0002');
			 addOption (box, 'test_temas_11_0003.html', 'Test 0003');
	}
	if (tema == '12'){
			 addOption (box, 'test_temas_12_0001.html', 'Test 0001');
			 addOption (box, 'test_temas_12_0002.html', 'Test 0002');
			 addOption (box, 'test_temas_12_0003.html', 'Test 0003');
			 addOption (box, 'test_temas_12_0004.html', 'Test 0004');
	}
	if (tema == '13'){
			 addOption (box, 'test_temas_13_0001.html', 'Test 0001');
			 addOption (box, 'test_temas_13_0002.html', 'Test 0002');
	}
	if (tema == '13'){
			 addOption (box, 'test_temas_13_0001.html', 'Test 0001');
			 addOption (box, 'test_temas_13_0002.html', 'Test 0002');
	}
	if (tema == '14'){
			 addOption (box, 'test_temas_14_0001.html', 'Test 0001');
			 addOption (box, 'test_temas_14_0002.html', 'Test 0002');
			 addOption (box, 'test_temas_14_0003.html', 'Test 0003');
	}
	if (tema == '15'){
			 addOption (box, 'test_temas_15_0001.html', 'Test 0001');
			 addOption (box, 'test_temas_15_0002.html', 'Test 0002');
			 addOption (box, 'test_temas_15_0003.html', 'Test 0003');
	}
	if (tema == '16'){
			 addOption (box, 'test_temas_16_0001.html', 'Test 0001');
			 addOption (box, 'test_temas_16_0002.html', 'Test 0002');
			 addOption (box, 'test_temas_16_0003.html', 'Test 0003');
	}
	if (tema == '17'){
			 addOption (box, 'test_temas_17_0001.html', 'Test 0001');
			 addOption (box, 'test_temas_17_0002.html', 'Test 0002');
			 addOption (box, 'test_temas_17_0003.html', 'Test 0003');
	}
	if (tema == '18'){
			 addOption (box, 'test_temas_18_0001.html', 'Test 0001');
			 addOption (box, 'test_temas_18_0002.html', 'Test 0002');
			 addOption (box, 'test_temas_18_0003.html', 'Test 0003');
			 addOption (box, 'test_temas_18_0004.html', 'Test 0004');
	}
	if (tema == '18'){
			 addOption (box, 'test_temas_18_0001.html', 'Test 0001');
			 addOption (box, 'test_temas_18_0002.html', 'Test 0002');
			 addOption (box, 'test_temas_18_0003.html', 'Test 0003');
			 addOption (box, 'test_temas_18_0004.html', 'Test 0004');
	}
	if (tema == '19'){
			 addOption (box, 'test_temas_19_0001.html', 'Test 0001');
			 addOption (box, 'test_temas_19_0002.html', 'Test 0002');
			 addOption (box, 'test_temas_19_0003.html', 'Test 0003');
			 addOption (box, 'test_temas_19_0004.html', 'Test 0004');
			 addOption (box, 'test_temas_19_0005.html', 'Test 0005');
			 addOption (box, 'test_temas_19_0006.html', 'Test 0006');
			 addOption (box, 'test_temas_19_0007.html', 'Test 0007');
			 addOption (box, 'test_temas_19_0008.html', 'Test 0008');
			 addOption (box, 'test_temas_19_0009.html', 'Test 0009');
	}
	if (tema == '20'){
			 addOption (box, 'test_temas_20_0001.html', 'Test 0001');
			 addOption (box, 'test_temas_20_0002.html', 'Test 0002');
			 addOption (box, 'test_temas_20_0003.html', 'Test 0003');
			 addOption (box, 'test_temas_20_0004.html', 'Test 0004');
			 addOption (box, 'test_temas_20_0005.html', 'Test 0005');
	}
	if (tema == '21'){
			 addOption (box, 'test_temas_21_0001.html', 'Test 0001');
	}
	if (tema == '22'){
			 addOption (box, 'test_temas_22_0001.html', 'Test 0001');
			 addOption (box, 'test_temas_22_0002.html', 'Test 0002');
			 addOption (box, 'test_temas_22_0003.html', 'Test 0003');
			 addOption (box, 'test_temas_22_0004.html', 'Test 0004');
			 addOption (box, 'test_temas_22_0005.html', 'Test 0005');
			 addOption (box, 'test_temas_22_0006.html', 'Test 0006');
			 addOption (box, 'test_temas_22_0007.html', 'Test 0007');
	}
	if (tema == '23'){
			 addOption (box, 'test_temas_23_0001.html', 'Test 0001');
			 addOption (box, 'test_temas_23_0002.html', 'Test 0002');
			 addOption (box, 'test_temas_23_0003.html', 'Test 0003');
			 addOption (box, 'test_temas_23_0004.html', 'Test 0004');
			 addOption (box, 'test_temas_23_0005.html', 'Test 0005');
	}
	if (tema == '24'){
			 addOption (box, 'test_temas_24_0001.html', 'Test 0001');
			 addOption (box, 'test_temas_24_0002.html', 'Test 0002');
			 addOption (box, 'test_temas_24_0003.html', 'Test 0003');
			 addOption (box, 'test_temas_24_0004.html', 'Test 0004');
			 addOption (box, 'test_temas_24_0005.html', 'Test 0005');
			 addOption (box, 'test_temas_24_0006.html', 'Test 0006');
	}
	if (tema == '25'){
			 addOption (box, 'test_temas_25_0001.html', 'Test 0001');
			 addOption (box, 'test_temas_25_0002.html', 'Test 0002');
			 addOption (box, 'test_temas_25_0003.html', 'Test 0003');
			 addOption (box, 'test_temas_25_0004.html', 'Test 0004');
			 addOption (box, 'test_temas_25_0005.html', 'Test 0005');
			 addOption (box, 'test_temas_25_0006.html', 'Test 0006');
	}
	if (tema == '26'){
			 addOption (box, 'test_temas_26_0001.html', 'Test 0001');
			 addOption (box, 'test_temas_26_0002.html', 'Test 0002');
			 addOption (box, 'test_temas_26_0003.html', 'Test 0003');
			 addOption (box, 'test_temas_26_0004.html', 'Test 0004');
			 addOption (box, 'test_temas_26_0005.html', 'Test 0005');
			 addOption (box, 'test_temas_26_0006.html', 'Test 0006');
	}
	if (tema == '27'){
			 addOption (box, 'test_temas_27_0001.html', 'Test 0001');
			 addOption (box, 'test_temas_27_0002.html', 'Test 0002');
			 addOption (box, 'test_temas_27_0003.html', 'Test 0003');
			 addOption (box, 'test_temas_27_0004.html', 'Test 0004');
	}
	if (tema == '28'){
			 addOption (box, 'test_temas_28_0001.html', 'Test 0001');
			 addOption (box, 'test_temas_28_0002.html', 'Test 0002');
			 addOption (box, 'test_temas_28_0003.html', 'Test 0003');
	}

}

function renderTemas() {
		var box = document.getElementById('tema_navigation');

			 addOption (box, 1, 'Auditoria');
			 addOption (box, 2, 'Calidad');
			 addOption (box, 3, 'ITIL y COBIT');
			 addOption (box, 4, 'Compra P�blica');
			 addOption (box, 5, 'CRM, e-learning, SIG, DW, Wf y OLAP');
			 addOption (box, 6, 'Hardware');
			 addOption (box, 7, 'HTML y XML');
			 addOption (box, 8, 'Ingenier�a del Sofware');
			 addOption (box, 9, 'Inteligencia Artificial y Gesti�n del Conocimiento');
			 addOption (box, 10, 'Internet');
			 addOption (box, 11, 'Legislaci�n (I) Protecci�n de Datos');
			 addOption (box, 12, 'Legislaci�n (II) Sociedad de la Informaci�n y Administraci�n Electr�nica ');
			 addOption (box, 13, 'Legislaci�n (III) Propiedad Intelectual');
			 addOption (box, 13, 'Legislaci�n(III) Ley General de Telecomunicaciones');
			 addOption (box, 14, 'M�todos de gesti�n y obtenci�n de la informaci�n');
			 addOption (box, 15, 'M�trica');
			 addOption (box, 16, 'Normalizaci�n, Interoperabilidad y Accesibilidad');
			 addOption (box, 17, 'Organizaci�n y Direcci�n');
			 addOption (box, 18, 'Plataformas de desarrollo y Lenguajes de Programaci�n');
			 addOption (box, 18, 'Plataformas de desarrollo, Lenguajes de Programaci�n y SOA');
			 addOption (box, 19, 'Redes');
			 addOption (box, 20, 'Seguridad y Firma Electr�nica');
			 addOption (box, 21, 'Software Libre');
			 addOption (box, 22, 'SSOO y BBDD');
			 addOption (box, 23, 'Tecnolog�as de Telecomunicaciones');
			 addOption (box, 24, 'Legislaci�n completa');
			 addOption (box, 25, 'Programaci�n Web e Internet');
			 addOption (box, 26, 'Desarrollo de aplicaciones con bases de datos');
			 addOption (box, 27, 'Software, IA, elearning, GIS, etc');
			 addOption (box, 28, 'Seguridad');

}


//////// menú de navegación.

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


			 addElement (list, 'Test por temas', 'test_temas_1_0001.html', tipoTest=='tematica' );
			 addElement (list, 'Test bloque 4', 'test_bloque_B4_0001.html', tipoTest=='bloque' && id=='B4');
			 addElement (list, 'Test bloque 3', 'test_bloque_B3_0001.html', tipoTest=='bloque' && id=='B3');
			 addElement (list, 'Test bloque 2', 'test_bloque_B2_0001.html', tipoTest=='bloque' && id=='B2');
			 addElement (list, 'Test bloque 1', 'test_bloque_B1_0001.html', tipoTest=='bloque' && id=='B1');
			 addElement (list, 'Test de examen', 'test_0001.html', tipoTest=='aleatorio' );
			 addElement (list, 'Inicio', '../index.html', 0);

}
