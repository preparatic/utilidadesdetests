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
/* Esta función rellena el combo para seleccionar un test. Se genera de forma automática durante la construcción de los test. Se genera
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
			 addOption (box, 'test_0101.html', 'Test 0101');
			 addOption (box, 'test_0102.html', 'Test 0102');
			 addOption (box, 'test_0103.html', 'Test 0103');
			 addOption (box, 'test_0104.html', 'Test 0104');
			 addOption (box, 'test_0105.html', 'Test 0105');
			 addOption (box, 'test_0106.html', 'Test 0106');
			 addOption (box, 'test_0107.html', 'Test 0107');
			 addOption (box, 'test_0108.html', 'Test 0108');
			 addOption (box, 'test_0109.html', 'Test 0109');
			 addOption (box, 'test_0110.html', 'Test 0110');
			 addOption (box, 'test_0111.html', 'Test 0111');
			 addOption (box, 'test_0112.html', 'Test 0112');
			 addOption (box, 'test_0113.html', 'Test 0113');
			 addOption (box, 'test_0114.html', 'Test 0114');
			 addOption (box, 'test_0115.html', 'Test 0115');
			 addOption (box, 'test_0116.html', 'Test 0116');
			 addOption (box, 'test_0117.html', 'Test 0117');
			 addOption (box, 'test_0118.html', 'Test 0118');
			 addOption (box, 'test_0119.html', 'Test 0119');
			 addOption (box, 'test_0120.html', 'Test 0120');
			 addOption (box, 'test_0121.html', 'Test 0121');
			 addOption (box, 'test_0122.html', 'Test 0122');
			 addOption (box, 'test_0123.html', 'Test 0123');
			 addOption (box, 'test_0124.html', 'Test 0124');
			 addOption (box, 'test_0125.html', 'Test 0125');
			 addOption (box, 'test_0126.html', 'Test 0126');
			 addOption (box, 'test_0127.html', 'Test 0127');
			 addOption (box, 'test_0128.html', 'Test 0128');
			 addOption (box, 'test_0129.html', 'Test 0129');
			 addOption (box, 'test_0130.html', 'Test 0130');
			 addOption (box, 'test_0131.html', 'Test 0131');
			 addOption (box, 'test_0132.html', 'Test 0132');
			 addOption (box, 'test_0133.html', 'Test 0133');
			 addOption (box, 'test_0134.html', 'Test 0134');
			 addOption (box, 'test_0135.html', 'Test 0135');
			 addOption (box, 'test_0136.html', 'Test 0136');
			 addOption (box, 'test_0137.html', 'Test 0137');
			 addOption (box, 'test_0138.html', 'Test 0138');
			 addOption (box, 'test_0139.html', 'Test 0139');
			 addOption (box, 'test_0140.html', 'Test 0140');
			 addOption (box, 'test_0141.html', 'Test 0141');
			 addOption (box, 'test_0142.html', 'Test 0142');
			 addOption (box, 'test_0143.html', 'Test 0143');
			 addOption (box, 'test_0144.html', 'Test 0144');
			 addOption (box, 'test_0145.html', 'Test 0145');
			 addOption (box, 'test_0146.html', 'Test 0146');
			 addOption (box, 'test_0147.html', 'Test 0147');
			 addOption (box, 'test_0148.html', 'Test 0148');
			 addOption (box, 'test_0149.html', 'Test 0149');
			 addOption (box, 'test_0150.html', 'Test 0150');
			 addOption (box, 'test_0151.html', 'Test 0151');
}


function renderTestSelectorBloque(bloque){

	var box = document.getElementById('test_navigation');

	if (bloque == 'A1'){
			 addOption (box, 'test_bloque_A1_0001.html', 'Test 0001');
			 addOption (box, 'test_bloque_A1_0002.html', 'Test 0002');
			 addOption (box, 'test_bloque_A1_0003.html', 'Test 0003');
			 addOption (box, 'test_bloque_A1_0004.html', 'Test 0004');
	}
	if (bloque == 'A2'){
			 addOption (box, 'test_bloque_A2_0001.html', 'Test 0001');
			 addOption (box, 'test_bloque_A2_0002.html', 'Test 0002');
			 addOption (box, 'test_bloque_A2_0003.html', 'Test 0003');
			 addOption (box, 'test_bloque_A2_0004.html', 'Test 0004');
			 addOption (box, 'test_bloque_A2_0005.html', 'Test 0005');
	}
	if (bloque == 'A3'){
			 addOption (box, 'test_bloque_A3_0001.html', 'Test 0001');
			 addOption (box, 'test_bloque_A3_0002.html', 'Test 0002');
	}
	if (bloque == 'A4'){
			 addOption (box, 'test_bloque_A4_0001.html', 'Test 0001');
			 addOption (box, 'test_bloque_A4_0002.html', 'Test 0002');
			 addOption (box, 'test_bloque_A4_0003.html', 'Test 0003');
			 addOption (box, 'test_bloque_A4_0004.html', 'Test 0004');
	}
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
			 addOption (box, 'test_bloque_B1_0013.html', 'Test 0013');
			 addOption (box, 'test_bloque_B1_0014.html', 'Test 0014');
			 addOption (box, 'test_bloque_B1_0015.html', 'Test 0015');
			 addOption (box, 'test_bloque_B1_0016.html', 'Test 0016');
			 addOption (box, 'test_bloque_B1_0017.html', 'Test 0017');
			 addOption (box, 'test_bloque_B1_0018.html', 'Test 0018');
			 addOption (box, 'test_bloque_B1_0019.html', 'Test 0019');
			 addOption (box, 'test_bloque_B1_0020.html', 'Test 0020');
			 addOption (box, 'test_bloque_B1_0021.html', 'Test 0021');
			 addOption (box, 'test_bloque_B1_0022.html', 'Test 0022');
			 addOption (box, 'test_bloque_B1_0023.html', 'Test 0023');
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
			 addOption (box, 'test_bloque_B2_0021.html', 'Test 0021');
			 addOption (box, 'test_bloque_B2_0022.html', 'Test 0022');
			 addOption (box, 'test_bloque_B2_0023.html', 'Test 0023');
			 addOption (box, 'test_bloque_B2_0024.html', 'Test 0024');
			 addOption (box, 'test_bloque_B2_0025.html', 'Test 0025');
			 addOption (box, 'test_bloque_B2_0026.html', 'Test 0026');
			 addOption (box, 'test_bloque_B2_0027.html', 'Test 0027');
			 addOption (box, 'test_bloque_B2_0028.html', 'Test 0028');
			 addOption (box, 'test_bloque_B2_0029.html', 'Test 0029');
			 addOption (box, 'test_bloque_B2_0030.html', 'Test 0030');
			 addOption (box, 'test_bloque_B2_0031.html', 'Test 0031');
			 addOption (box, 'test_bloque_B2_0032.html', 'Test 0032');
			 addOption (box, 'test_bloque_B2_0033.html', 'Test 0033');
			 addOption (box, 'test_bloque_B2_0034.html', 'Test 0034');
			 addOption (box, 'test_bloque_B2_0035.html', 'Test 0035');
			 addOption (box, 'test_bloque_B2_0036.html', 'Test 0036');
			 addOption (box, 'test_bloque_B2_0037.html', 'Test 0037');
			 addOption (box, 'test_bloque_B2_0038.html', 'Test 0038');
			 addOption (box, 'test_bloque_B2_0039.html', 'Test 0039');
			 addOption (box, 'test_bloque_B2_0040.html', 'Test 0040');
			 addOption (box, 'test_bloque_B2_0041.html', 'Test 0041');
			 addOption (box, 'test_bloque_B2_0042.html', 'Test 0042');
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
			 addOption (box, 'test_bloque_B3_0016.html', 'Test 0016');
			 addOption (box, 'test_bloque_B3_0017.html', 'Test 0017');
			 addOption (box, 'test_bloque_B3_0018.html', 'Test 0018');
			 addOption (box, 'test_bloque_B3_0019.html', 'Test 0019');
			 addOption (box, 'test_bloque_B3_0020.html', 'Test 0020');
			 addOption (box, 'test_bloque_B3_0021.html', 'Test 0021');
			 addOption (box, 'test_bloque_B3_0022.html', 'Test 0022');
			 addOption (box, 'test_bloque_B3_0023.html', 'Test 0023');
			 addOption (box, 'test_bloque_B3_0024.html', 'Test 0024');
			 addOption (box, 'test_bloque_B3_0025.html', 'Test 0025');
			 addOption (box, 'test_bloque_B3_0026.html', 'Test 0026');
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
			 addOption (box, 'test_bloque_B4_0021.html', 'Test 0021');
			 addOption (box, 'test_bloque_B4_0022.html', 'Test 0022');
			 addOption (box, 'test_bloque_B4_0023.html', 'Test 0023');
			 addOption (box, 'test_bloque_B4_0024.html', 'Test 0024');
			 addOption (box, 'test_bloque_B4_0025.html', 'Test 0025');
			 addOption (box, 'test_bloque_B4_0026.html', 'Test 0026');
			 addOption (box, 'test_bloque_B4_0027.html', 'Test 0027');
			 addOption (box, 'test_bloque_B4_0028.html', 'Test 0028');
			 addOption (box, 'test_bloque_B4_0029.html', 'Test 0029');
			 addOption (box, 'test_bloque_B4_0030.html', 'Test 0030');
			 addOption (box, 'test_bloque_B4_0031.html', 'Test 0031');
			 addOption (box, 'test_bloque_B4_0032.html', 'Test 0032');
			 addOption (box, 'test_bloque_B4_0033.html', 'Test 0033');
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


	// Cargamos los valores de cada temática

}

function renderTemas() {
		var box = document.getElementById('tema_navigation');

			 addOption (box, 1, 'La Constituci&oacute;n espa&ntilde;ola de 1978 (I).');
			 addOption (box, 2, 'La constituci&oacute;n espa&ntilde;ola de 1978 (II).');
			 addOption (box, 3, 'La constituci&oacute;n espa&ntilde;ola de 1978 (III).');
			 addOption (box, 4, 'La constituci&oacute;n espa&ntilde;ola de 1978 (IV).');
			 addOption (box, 5, 'La Uni&oacute;n Europea: antecedentes, evoluci&oacute;n y objetivos.');
			 addOption (box, 6, 'Las Instituciones de la Uni&oacute;n Europea.');
			 addOption (box, 7, 'Procedimiento administrativo presencial y telem&aacute;tico.');
			 addOption (box, 8, 'La revisi&oacute;n de los actos en v&iacute;a administrativa.');
			 addOption (box, 9, 'La responsabilidad patrimonial de las Administraciones P&uacute;blicas.');
			 addOption (box, 10, 'Los contratos de las Administraciones P&uacute;blicas.');
			 addOption (box, 11, 'Los presupuestos generales del Estado.');
			 addOption (box, 12, 'El modelo econ&oacute;mico espa&ntilde;ol.');
			 addOption (box, 13, 'Los sectores de la econom&iacute;a.');
			 addOption (box, 14, 'Estructura social y pol&iacute;ticas de igualdad.');
			 addOption (box, 15, 'El mercado de trabajo.');
			 addOption (box, 16, 'TIC y sociedad.');
			 addOption (box, 17, 'TIC y mercado de trabajo.');
			 addOption (box, 18, 'La funci&oacute;n gerencial de las AAPP.');
			 addOption (box, 19, 'La calidad en los servicios p&uacute;blicos.');
			 addOption (box, 20, 'Modelo burocr&aacute;tico, management y gobernanza.');
			 addOption (box, 21, 'Gesti&oacute;n del conocimiento.');
			 addOption (box, 22, '&Eacute;tica p&uacute;blica y transparencia.');
			 addOption (box, 23, 'Emprendimiento y unidad de mercado.');
			 addOption (box, 24, 'Conceptos de sistemas de informaci&oacute;n.');
			 addOption (box, 25, 'La informaci&oacute;n en las organizaciones.');
			 addOption (box, 26, 'Gobernanza TIC.');
			 addOption (box, 27, 'Reutilizaci&oacute;n de la informaci&oacute;n del sector p&uacute;blico.');
			 addOption (box, 28, 'Directivo TIC.');
			 addOption (box, 29, 'Herramientas para el directivo TIC.');
			 addOption (box, 30, 'Centro de sistemas de informaci&oacute;n.');
			 addOption (box, 31, 'Direcci&oacute;n y gesti&oacute;n de proyectos TIC.');
			 addOption (box, 32, 'Gesti&oacute;n de equipos.');
			 addOption (box, 33, 'Metodolog&iacute;as predictivas para la gesti&oacute;n de proyectos.');
			 addOption (box, 34, 'Metodolog&iacute;as lean.');
			 addOption (box, 35, 'LOPD');
			 addOption (box, 36, 'Auditor&iacute;a inform&aacute;tica.');
			 addOption (box, 37, 'Ley de contratos.');
			 addOption (box, 38, 'Adquisici&oacute;n de sistemas.');
			 addOption (box, 39, 'Alternativas de decisi&oacute;n.');
			 addOption (box, 40, 'Rentabilidad de las inversiones.');
			 addOption (box, 41, 'Protecci&oacute;n jur&iacute;dica del software.');
			 addOption (box, 42, 'Accesibilidad y usabilidad.');
			 addOption (box, 43, 'ENI');
			 addOption (box, 44, 'NTI');
			 addOption (box, 45, 'An&aacute;lisis y gesti&oacute;n de riesgos.');
			 addOption (box, 46, 'ENS.');
			 addOption (box, 47, 'Infraestructuras y servicios comunes.');
			 addOption (box, 48, 'Organizaci&oacute;nes de normalizaci&oacute;n.');
			 addOption (box, 49, 'Sistemas de altas prestaciones.');
			 addOption (box, 50, 'Equipos departamentales y servidores.');
			 addOption (box, 51, 'Dispositivos personales y m&oacute;viles.');
			 addOption (box, 52, 'Cloud computing.');
			 addOption (box, 53, 'Sistemas de almacenamiento.');
			 addOption (box, 54, 'Sistemas de informaci&oacute;n multiusuario.');
			 addOption (box, 55, 'Arquitectura SOA.');
			 addOption (box, 56, 'Sistemas Operativos.');
			 addOption (box, 57, 'UNIX-LINUX.');
			 addOption (box, 58, 'Microsoft.');
			 addOption (box, 59, 'Sistemas Operativos para m&oacute;viles.');
			 addOption (box, 60, 'Sistemas de gesti&oacute;n de bases de datos.');
			 addOption (box, 61, 'El modelo relacional.');
			 addOption (box, 62, 'Arquitectura de desarrollo en la web.');
			 addOption (box, 63, 'Entorno de desarrollo Microsoft.NET.');
			 addOption (box, 64, 'Entorno de desarrollo JAVA.');
			 addOption (box, 65, 'Entorno de desarrollo PHP.');
			 addOption (box, 66, 'Software de c&oacute;digo abierto y libre.');
			 addOption (box, 67, 'Inteligencia artificial.');
			 addOption (box, 68, 'Gesti&oacute;n del conocimiento.');
			 addOption (box, 69, 'Sistemas CRM y ERP.');
			 addOption (box, 70, 'E-learning.');
			 addOption (box, 71, 'Los sistemas GIS.');
			 addOption (box, 72, 'Datawarehouse y miner&iacute;a de datos.');
			 addOption (box, 73, 'Big Data.');
			 addOption (box, 74, 'Lenguajes de marcado.');
			 addOption (box, 75, 'Comercio electr&oacute;nico.');
			 addOption (box, 76, 'El cifrado.');
			 addOption (box, 77, 'Identificaci&oacute;n y firma electr&oacute;nica I.');
			 addOption (box, 78, 'Identificaci&oacute;n y firma electr&oacute;nica II.');
			 addOption (box, 79, 'Adaptaci&oacute;n LOPD.');
			 addOption (box, 80, 'El tratamiento de im&aacute;genes.');
			 addOption (box, 81, 'Reconocimiento &oacute;ptico de caracteres.');
			 addOption (box, 82, 'Modelos de ciclo de vida.');
			 addOption (box, 83, 'Plan de sistemas de informaci&oacute;n.');
			 addOption (box, 84, 'An&aacute;lisis de sistemas y metodolog&iacute;as &aacute;giles.');
			 addOption (box, 85, 'An&aacute;lisis del dominio de los sistemas.');
			 addOption (box, 86, 'An&aacute;lisis din&aacute;mico de sistemas.');
			 addOption (box, 87, 'An&aacute;lisis de aspectos no funcionales.');
			 addOption (box, 88, 'Dise&ntilde;o arquitect&oacute;nico de sistemas.');
			 addOption (box, 89, 'T&eacute;cnicas de dise&ntilde;o de software.');
			 addOption (box, 90, 'Prototipos en el desarrollo de sistemas.');
			 addOption (box, 91, 'Metrica');
			 addOption (box, 92, 'Pruebas de software.');
			 addOption (box, 93, 'Evaluaci&oacute;n de la calidad del software.');
			 addOption (box, 94, 'Estimaci&oacute;n de recursos.');
			 addOption (box, 95, 'Migraci&oacute;n de aplicaciones y ajuste dimensional.');
			 addOption (box, 96, 'Mantenimiento de sistemas.');
			 addOption (box, 97, 'Reingenier&iacute;a de sistemas.');
			 addOption (box, 98, 'Calidad de los servicios.');
			 addOption (box, 99, 'Gesti&oacute;n documental.');
			 addOption (box, 100, 'Sistemas de recuperaci&oacute;n de la informaci&oacute;n.');
			 addOption (box, 101, 'ITIL y COBIT.');
			 addOption (box, 102, 'Redes de telecomunicaciones.');
			 addOption (box, 103, 'Internet.');
			 addOption (box, 104, 'Cableado.');
			 addOption (box, 105, 'Modelo OSI.');
			 addOption (box, 106, 'Tecnolog&iacute;as de acceso.');
			 addOption (box, 107, 'Redes de transporte.');
			 addOption (box, 108, 'Redes inal&aacute;mbricas.');
			 addOption (box, 109, 'Redes IP.');
			 addOption (box, 110, 'Redes de nueva generaci&oacute;n.');
			 addOption (box, 111, 'Transformaci&oacute;n digital.');
			 addOption (box, 112, 'Redes de &aacute;rea local.');
			 addOption (box, 113, 'Intranet y extranet.');
			 addOption (box, 114, 'Redes p&uacute;blicas.');
			 addOption (box, 115, 'CATV.');
			 addOption (box, 116, 'Correo electr&oacute;nico.');
			 addOption (box, 117, 'Comunicaciones m&oacute;viles.');
			 addOption (box, 118, 'Aplicaciones m&oacute;viles.');
			 addOption (box, 119, 'Seguridad en redes.');
			 addOption (box, 120, 'Seguridad en el nivel de aplicaci&oacute;n.');
			 addOption (box, 121, 'Regulaci&oacute;n de las telecomunicaciones.');
			 addOption (box, 122, 'Videoconferencia.');
			 addOption (box, 123, 'Single sign-on.');
			 addOption (box, 124, 'Virtualizaci&oacute;n de sistemas.');
			 addOption (box, 125, 'Trabajo colaborativo y redes sociales.');

}

function renderTestSelectorAnhos(anho){

	var box = document.getElementById('test_navigation');

	if (anho == '2016'){
			 addOption (box, 'test_anho_2016_0001.html', 'Test 0001');
			 addOption (box, 'test_anho_2016_0002.html', 'Test 0002');
			 addOption (box, 'test_anho_2016_0003.html', 'Test 0003');
			 addOption (box, 'test_anho_2016_0004.html', 'Test 0004');
			 addOption (box, 'test_anho_2016_0005.html', 'Test 0005');
			 addOption (box, 'test_anho_2016_0006.html', 'Test 0006');
			 addOption (box, 'test_anho_2016_0007.html', 'Test 0007');
			 addOption (box, 'test_anho_2016_0008.html', 'Test 0008');
			 addOption (box, 'test_anho_2016_0009.html', 'Test 0009');
			 addOption (box, 'test_anho_2016_0010.html', 'Test 0010');
			 addOption (box, 'test_anho_2016_0011.html', 'Test 0011');
			 addOption (box, 'test_anho_2016_0012.html', 'Test 0012');
			 addOption (box, 'test_anho_2016_0013.html', 'Test 0013');
			 addOption (box, 'test_anho_2016_0014.html', 'Test 0014');
	}
	if (anho == '2015'){
			 addOption (box, 'test_anho_2015_0001.html', 'Test 0001');
			 addOption (box, 'test_anho_2015_0002.html', 'Test 0002');
			 addOption (box, 'test_anho_2015_0003.html', 'Test 0003');
			 addOption (box, 'test_anho_2015_0004.html', 'Test 0004');
			 addOption (box, 'test_anho_2015_0005.html', 'Test 0005');
			 addOption (box, 'test_anho_2015_0006.html', 'Test 0006');
			 addOption (box, 'test_anho_2015_0007.html', 'Test 0007');
			 addOption (box, 'test_anho_2015_0008.html', 'Test 0008');
			 addOption (box, 'test_anho_2015_0009.html', 'Test 0009');
			 addOption (box, 'test_anho_2015_0010.html', 'Test 0010');
			 addOption (box, 'test_anho_2015_0011.html', 'Test 0011');
			 addOption (box, 'test_anho_2015_0012.html', 'Test 0012');
			 addOption (box, 'test_anho_2015_0013.html', 'Test 0013');
			 addOption (box, 'test_anho_2015_0014.html', 'Test 0014');
			 addOption (box, 'test_anho_2015_0015.html', 'Test 0015');
			 addOption (box, 'test_anho_2015_0016.html', 'Test 0016');
	}
	if (anho == '2014'){
			 addOption (box, 'test_anho_2014_0001.html', 'Test 0001');
			 addOption (box, 'test_anho_2014_0002.html', 'Test 0002');
			 addOption (box, 'test_anho_2014_0003.html', 'Test 0003');
			 addOption (box, 'test_anho_2014_0004.html', 'Test 0004');
			 addOption (box, 'test_anho_2014_0005.html', 'Test 0005');
			 addOption (box, 'test_anho_2014_0006.html', 'Test 0006');
			 addOption (box, 'test_anho_2014_0007.html', 'Test 0007');
			 addOption (box, 'test_anho_2014_0008.html', 'Test 0008');
			 addOption (box, 'test_anho_2014_0009.html', 'Test 0009');
			 addOption (box, 'test_anho_2014_0010.html', 'Test 0010');
			 addOption (box, 'test_anho_2014_0011.html', 'Test 0011');
	}

}

//////// Menú de navegación.

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


			 addElement (list, 'Test Preguntas 2014', 'test_anho_2014_0001.html', tipoTest=='anho' && id=='2014');
			 addElement (list, 'Test Preguntas 2015', 'test_anho_2015_0001.html', tipoTest=='anho' && id=='2015');
			 addElement (list, 'Test Preguntas 2016', 'test_anho_2016_0001.html', tipoTest=='anho' && id=='2016');
			 addElement (list, 'Test por temas', 'test_tema_T1_0001.html', tipoTest=='tema' );
			 addElement (list, 'Test bloqueB4', 'test_bloque_B4_0001.html', tipoTest=='bloque' && id=='B4');
			 addElement (list, 'Test bloqueB3', 'test_bloque_B3_0001.html', tipoTest=='bloque' && id=='B3');
			 addElement (list, 'Test bloqueB2', 'test_bloque_B2_0001.html', tipoTest=='bloque' && id=='B2');
			 addElement (list, 'Test bloqueB1', 'test_bloque_B1_0001.html', tipoTest=='bloque' && id=='B1');
			 addElement (list, 'Test bloqueA4', 'test_bloque_A4_0001.html', tipoTest=='bloque' && id=='A4');
			 addElement (list, 'Test bloqueA3', 'test_bloque_A3_0001.html', tipoTest=='bloque' && id=='A3');
			 addElement (list, 'Test bloqueA2', 'test_bloque_A2_0001.html', tipoTest=='bloque' && id=='A2');
			 addElement (list, 'Test bloqueA1', 'test_bloque_A1_0001.html', tipoTest=='bloque' && id=='A1');
			 addElement (list, 'Test de examen', 'test_0000.html', tipoTest=='aleatorio' );
			 addElement (list, 'Inicio', '../index.html', 0);

}

function renderMenuIndex (tipoTest,id){

	var list = document.getElementById('menuTest');


			 addElement (list, 'Test Preguntas 2014', 'pages/test_anho_2014_0001.html', tipoTest=='anho' && id=='2014');
			 addElement (list, 'Test Preguntas 2015', 'pages/test_anho_2015_0001.html', tipoTest=='anho' && id=='2015');
			 addElement (list, 'Test Preguntas 2016', 'pages/test_anho_2016_0001.html', tipoTest=='anho' && id=='2016');
			 addElement (list, 'Test por temas', 'pages/test_tema_T1_0001.html', tipoTest=='tema' );
			 addElement (list, 'Test bloqueB4', 'pages/test_bloque_B4_0001.html', tipoTest=='bloque' && id=='B4');
			 addElement (list, 'Test bloqueB3', 'pages/test_bloque_B3_0001.html', tipoTest=='bloque' && id=='B3');
			 addElement (list, 'Test bloqueB2', 'pages/test_bloque_B2_0001.html', tipoTest=='bloque' && id=='B2');
			 addElement (list, 'Test bloqueB1', 'pages/test_bloque_B1_0001.html', tipoTest=='bloque' && id=='B1');
			 addElement (list, 'Test bloqueA4', 'pages/test_bloque_A4_0001.html', tipoTest=='bloque' && id=='A4');
			 addElement (list, 'Test bloqueA3', 'pages/test_bloque_A3_0001.html', tipoTest=='bloque' && id=='A3');
			 addElement (list, 'Test bloqueA2', 'pages/test_bloque_A2_0001.html', tipoTest=='bloque' && id=='A2');
			 addElement (list, 'Test bloqueA1', 'pages/test_bloque_A1_0001.html', tipoTest=='bloque' && id=='A1');
			 addElement (list, 'Test de examen', 'pages/test_0000.html', 0);
			 addElement (list, 'Inicio', '../index.html', tipoTest=='aleatorio' );

}
