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

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();

//  Id pregunta: 747 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  La criptograf&iacute;a sirve para codificar:";
 choices[0]= new Array();
 choices[0][0] = "Lenguaje manuscrito";
 choices[0][1] = "Lenguaje manuscrito y datos";
 choices[0][2] = "Datos exclusivamente, al no poder aplicar t&eacute;cnicas inform&aacute;ticas al lenguaje manuscrito.";
 choices[0][3] = "La criptograf&iacute;a no se usa para codificar, sino s&oacute;lo para decodificar";
 answers[0] = choices[0][1];
 units[0] = "72";
 comments[0] = "Id Pregunta: 747. Similar a examen TIC SS A 2003";


//  Id pregunta: 748 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  En relaci&oacute;n con la huella digital y las funciones hash, se&ntilde;alar la opci&oacute;n falsa:";
 choices[1]= new Array();
 choices[1][0] = "Dos mensajes id&eacute;nticos, producen la misma huella";
 choices[1][1] = "Dada una huella es computacionalmente imposible encontrar un mensaje que produzca esa huella";
 choices[1][2] = "Si dos huellas son id&eacute;nticas, s&oacute;lo pueden haber sido originadas con el mismo mensaje";
 choices[1][3] = "Si dos huellas son id&eacute;nticas, pueden haber sido originadas por distintos mensajes con muy poca probabilidad";
 answers[1] = choices[1][2];
 units[1] = "72";
 comments[1] = "Id Pregunta: 748. Similar a examen TIC SS A 2003";


//  Id pregunta: 757 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  &iquest;De las siguientes API's cual no es un API de desarrollo de tarjetas inteligentes?";
 choices[2]= new Array();
 choices[2][0] = "CryptoAPI";
 choices[2][1] = "PKCS#7";
 choices[2][2] = "PKCS#11";
 choices[2][3] = "JCE/JCA";
 answers[2] = choices[2][1];
 units[2] = "74";
 comments[2] = "Id Pregunta: 757. NULL";


//  Id pregunta: 848 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;Cu&aacute;l de las siguientes no es una caracter&iacute;stica de una funci&oacute;n Hash?:";
 choices[3]= new Array();
 choices[3][0] = "Obtiene un resultado unidireccional e irreversible";
 choices[3][1] = "No hace falta una clave pues el texto cifrado depende exclusivamente del texto claro original";
 choices[3][2] = "Se trata de una funci&oacute;n libre de colisiones en sentido estricto";
 choices[3][3] = "La seguridad de la funci&oacute;n Hash radica en su car&aacute;cter bidireccional";
 answers[3] = choices[3][3];
 units[3] = "72";
 comments[3] = "Id Pregunta: 848. ";


//  Id pregunta: 874 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;Cu&aacute;l de los siguientes sistemas de cifrado no es una alternativa aceptable para DES (Data Encryption Standard)?:";
 choices[4]= new Array();
 choices[4][0] = "RC-4";
 choices[4][1] = "IDEA";
 choices[4][2] = "Triple DES";
 choices[4][3] = "RSA";
 answers[4] = choices[4][3];
 units[4] = "72";
 comments[4] = "Id Pregunta: 874. ";


//  Id pregunta: 889 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;C&uacute;al o c&uacute;ales de los siguientes sistemas de criptograf&iacute;a pueden encontrarse dentro de la criptograf&iacute;a sim&eacute;trica?:";
 choices[5]= new Array();
 choices[5][0] = "De bloques (block cipher),  de flujos (stream cipher) y de res&uacute;men (hash function)";
 choices[5][1] = "De flujos (stream cipher), de res&uacute;men (hash function) y de sigilo (stealth cipher)";
 choices[5][2] = "De bloques (block cipher),  de ocultamiento (conceal cipher) y de sellado de tiempo (time stamping cipher)";
 choices[5][3] = "Las respuestas &lsquo;b&rsquo; y &lsquo;c&rsquo; son correctas";
 answers[5] = choices[5][0];
 units[5] = "72";
 comments[5] = "Id Pregunta: 889. ";


//  Id pregunta: 943 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Qu&eacute; servicio proporciona a los usuarios el servicio de directorio X.500?:";
 choices[6]= new Array();
 choices[6][0] = "Dar facilidades para consultar informaci&oacute;n acerca de objetos accesibles en una red";
 choices[6][1] = "Facilitar direcciones y nombre de usuarios accesibles en una red";
 choices[6][2] = "Realizar las funciones de direccionamiento y nomenclatura de usuarios de un sistema de tratamiento de mensajes seg&uacute;n la norma X.400";
 choices[6][3] = "Controlar las peticiones de registro de usuario por medio de agentes de sistema (DSA) y mantenimiento de la base de informaci&oacute;n de directorio (DIB)";
 answers[6] = choices[6][0];
 units[6] = "72";
 comments[6] = "Id Pregunta: 943. ";


//  Id pregunta: 991 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  Dentro del proyecto CERES, es posible disponer de tarjetas criptogr&aacute;ficas para entregar a los ciudadanos &iquest;Qu&eacute; funcionalidades proporcionan dichas tarjetas desde el punto de vista de la seguridad?:";
 choices[7]= new Array();
 choices[7][0] = "Autenticaci&oacute;n e integridad, &uacute;nicamente";
 choices[7][1] = "Autenticaci&oacute;n, integridad y confidencialidad, &uacute;nicamente";
 choices[7][2] = "Autenticaci&oacute;n, integridad y confidencialidad y no repudio en origen";
 choices[7][3] = "Autenticaci&oacute;n, integridad y confidencialidad y no repudio en destino";
 answers[7] = choices[7][2];
 units[7] = "74";
 comments[7] = "Id Pregunta: 991. NULL";


//  Id pregunta: 1000 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  El &aacute;rbol formado por las entradas del directorio, en LDAP, se llama:";
 choices[8]= new Array();
 choices[8][0] = "Ltree";
 choices[8][1] = "LDS";
 choices[8][2] = "DIT";
 choices[8][3] = "Todas son falsas";
 answers[8] = choices[8][2];
 units[8] = "74";
 comments[8] = "Id Pregunta: 1000. NULL";


//  Id pregunta: 1153 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  En una operaci&oacute;n de resumen o hash, con h = H(M) :";
 choices[9]= new Array();
 choices[9][0] = "M debe ser de longitud fija";
 choices[9][1] = "no tiene por qu&eacute; conocerse H";
 choices[9][2] = "h debe ser de longitud fija";
 choices[9][3] = "dado M, no siempre se va a poder calcular H(M)";
 answers[9] = choices[9][2];
 units[9] = "72";
 comments[9] = "Id Pregunta: 1153. ";


//  Id pregunta: 1189 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  Indique cu&aacute;l de las siguientes afirmaciones sobre directorios no es correcta:";
 choices[10]= new Array();
 choices[10][0] = "La arquitectura X.500 se basa en la r&eacute;plica de bases de datos distribuidas";
 choices[10][1] = "El DAP es el protocolo de acceso al directorio X.500";
 choices[10][2] = "X.500 fue dise&ntilde;ado como una versi&oacute;n simplificada de LDAP";
 choices[10][3] = "Los programas acceden al directorio usando las APIs del X/Open Directory Service";
 answers[10] = choices[10][2];
 units[10] = "73";
 comments[10] = "Id Pregunta: 1189. ";


//  Id pregunta: 1203 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Kerberos utiliza algoritmos de cifrado:";
 choices[11]= new Array();
 choices[11][0] = "No utiliza algoritmos de cifrado, porque no cifra nada";
 choices[11][1] = "Utiliza algoritmos de cifrado RSA";
 choices[11][2] = "Utiliza algoritmos de cifrado tipo DES";
 choices[11][3] = "Lo &uacute;nico que utiliza es firma electr&oacute;nica";
 answers[11] = choices[11][2];
 units[11] = "72";
 comments[11] = "Id Pregunta: 1203. ";


//  Id pregunta: 1271 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Los certificados digitales o 'digital IDs' est&aacute;n definidos en:";
 choices[12]= new Array();
 choices[12][0] = "RSA Public Key Structure";
 choices[12][1] = "X.509v3 de ITU";
 choices[12][2] = "RFC 1661 de IAB";
 choices[12][3] = "Verisign doc 1992/21";
 answers[12] = choices[12][1];
 units[12] = "73";
 comments[12] = "Id Pregunta: 1271. ";


//  Id pregunta: 1309 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Pilar quier enviar un mensaje confidencial a Antonio, en un sistema de clave p&uacute;blica, por lo tanto existen las claves Pilar-privada / Pilar p&uacute;blica y Antonio privada / Antonio p&uacute;blica.  Pilar genera su mensaje, &iquest;con qu&eacute; clave de las cuatro lo cifrar&aacute;?:";
 choices[13]= new Array();
 choices[13][0] = "Pilar-privada";
 choices[13][1] = "Pilar-p&uacute;blica";
 choices[13][2] = "Antonio-privada";
 choices[13][3] = "Antonio-p&uacute;blica";
 answers[13] = choices[13][3];
 units[13] = "72";
 comments[13] = "Id Pregunta: 1309. ";


//  Id pregunta: 1318 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  Respecto al algoritmo RSA:";
 choices[14]= new Array();
 choices[14][0] = "Reduce el problema de la distribuci&oacute;n de claves respecto a los criptosistemas cl&aacute;sicos";
 choices[14][1] = "Pertenece a la categor&iacute;a de criptosistemas sim&eacute;tricos";
 choices[14][2] = "Se basa en la utilizaci&oacute;n de grandes series de n&uacute;meros primos de tama&ntilde;o peque&ntilde;o  ";
 choices[14][3] = "Se basa en la transposici&oacute;n y sustituci&oacute;n de s&iacute;mbolos a trav&eacute;s de m&uacute;ltiples iteraciones";
 answers[14] = choices[14][0];
 units[14] = "72";
 comments[14] = "Id Pregunta: 1318. ";


//  Id pregunta: 1326 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  Se define Autoridad de certificaci&oacute;n como aquella en la conf&iacute;an uno o m&aacute;s usuarios y cuya actividad principal es la certificaci&oacute;n de la autenticidad de:";
 choices[15]= new Array();
 choices[15][0] = "Los usuarios";
 choices[15][1] = "Los datos";
 choices[15][2] = "Los documentos";
 choices[15][3] = "Los mensajes";
 answers[15] = choices[15][0];
 units[15] = "74";
 comments[15] = "Id Pregunta: 1326. NULL";


//  Id pregunta: 1345 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  Se&ntilde;ale la afirmaci&oacute;n err&oacute;nea respecto a los algoritmos de cifrado:";
 choices[16]= new Array();
 choices[16][0] = "Si utilizamos el sistema de cifrado mediante clave p&uacute;blica en una red local de N nodos, para poder comunicarse con todos los dem&aacute;s, cada nodo deber&aacute; conocer N - 1 claves, y ser&aacute;n necesarias un total de N! / 2 x (N - 2)! parejas de claves";
 choices[16][1] = "Si utilizamos el sistema de cifrado mediante clave sim&eacute;trica en una red local de N nodos, para poder comunicarse con todos los dem&aacute;s, cada nodo deber&aacute; conocer N - 1 claves, y ser&aacute;n necesarias un total de N*(N-1)/2 claves";
 choices[16][2] = "Si utilizamos el sistema de cifrado mediante clave sim&eacute;trica en una red local de 10 nodos, para poder comunicarse con todos los dem&aacute;s, cada nodo deber&aacute; conocer 9 claves, y ser&aacute;n necesarias un total de 45 claves";
 choices[16][3] = "Los algoritmos de cifrado mediante clave sim&eacute;trica DES, RC-2 y RC-4 son p&uacute;blicos.  A partir de un bloque de caracteres &ldquo;en claro&rdquo;, estos algoritmos generan un bloque de caracteres ininteligible (cifrado) mediante un n&uacute;mero de sustituciones y permutaciones";
 answers[16] = choices[16][0];
 units[16] = "72";
 comments[16] = "Id Pregunta: 1345. ";


//  Id pregunta: 1358 AÃ±o de creación de pregunta: 2005-01-01
 questions[17]= "18)  &iquest;Qu&eacute; se conoce por SHA-2?:";
 choices[17]= new Array();
 choices[17][0] = "Una funci&oacute;n de compresi&oacute;n";
 choices[17][1] = "Un mecanismo de intercambio de claves";
 choices[17][2] = "Una infraestructura de clave p&uacute;blica (PKI))";
 choices[17][3] = "Un conjunto de funciones resumen";
 answers[17] = choices[17][3];
 units[17] = "72";
 comments[17] = "Id Pregunta: 1358. ";


//  Id pregunta: 1374 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  SSL:";
 choices[18]= new Array();
 choices[18][0] = "Permite a un comercio en internet cobrar a sus clientes, efectuando la transacci&oacute;n por medio de un tercero de confianza (banco)";
 choices[18][1] = "Permite que un tercero cn acceso al tr&aacute;fico entre el servidor y el cliente no pueda romper la confidencialidad";
 choices[18][2] = "Es un algoritmo de cifrado, de un n&uacute;mero de bits variable";
 choices[18][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[18] = choices[18][1];
 units[18] = "72";
 comments[18] = "Id Pregunta: 1374. ";


//  Id pregunta: 1512 AÃ±o de creación de pregunta: 2003-01-01
 questions[19]= "20)  &iquest;Qu&eacute; tecnolog&iacute;a sustituy&oacute; a DES tras su ruptura?";
 choices[19]= new Array();
 choices[19][0] = "Rijndael";
 choices[19][1] = "RC-4";
 choices[19][2] = "MD5 ";
 choices[19][3] = "SEAL";
 answers[19] = choices[19][0];
 units[19] = "72";
 comments[19] = "Id Pregunta: 1512. ";


//  Id pregunta: 1551 AÃ±o de creación de pregunta: 2003-01-01
 questions[20]= "21)  &iquest;Cu&aacute;l de estos tipos NO es un tipo de middleware?";
 choices[20]= new Array();
 choices[20][0] = "RPC.";
 choices[20][1] = "X-500.";
 choices[20][2] = "ORB.";
 choices[20][3] = "Conversaciones o di&aacute;logos continuos entre dos o m&aacute;s sistemas sobre una conexi&oacute;n l&oacute;gica.";
 answers[20] = choices[20][1];
 units[20] = "73";
 comments[20] = "Id Pregunta: 1551. ";


//  Id pregunta: 1555 AÃ±o de creación de pregunta: 2003-01-01
 questions[21]= "22)  &iquest;Cu&aacute;l de las siguientes no es una propiedad que debe cumplir una funci&oacute;n resumen (hash) ?";
 choices[21]= new Array();
 choices[21][0] = "Resistencia a la preimagen";
 choices[21][1] = "Resistencia a la colisi&oacute;n Fuerte";
 choices[21][2] = "Resistencia a la colisi&oacute;n Suave";
 choices[21][3] = "Resistencia a la no colisi&oacute;n";
 answers[21] = choices[21][3];
 units[21] = "72";
 comments[21] = "Id Pregunta: 1555. ";


//  Id pregunta: 1561 AÃ±o de creación de pregunta: 2003-01-01
 questions[22]= "23)  &iquest;Cu&aacute;l de los siguientes no es un SO para tarjetas?";
 choices[22]= new Array();
 choices[22][0] = " Scfw";
 choices[22][1] = "MultOs";
 choices[22][2] = "Java Card";
 choices[22][3] = " Open Card ";
 answers[22] = choices[22][3];
 units[22] = "74";
 comments[22] = "Id Pregunta: 1561. ";


//  Id pregunta: 1566 AÃ±o de creación de pregunta: 2003-01-01
 questions[23]= "24)  &iquest;Cu&aacute;l no es una caracter&iacute;stica de la Huella Digital?";
 choices[23]= new Array();
 choices[23][0] = "Dos mensajes iguales producen la misma huella digital";
 choices[23][1] = "Conocido un mensaje M1 y su resumen R, ser&aacute; computacionalmente imposible encontrar otro mensaje M2 cuyo resumen sea tambi&eacute;n R";
 choices[23][2] = " Dos mensajes parecidos producen huellas digitales diferentes";
 choices[23][3] = " La funci&oacute;n hash es reversible";
 answers[23] = choices[23][3];
 units[23] = "73";
 comments[23] = "Id Pregunta: 1566. ";


//  Id pregunta: 1575 AÃ±o de creación de pregunta: 2003-01-01
 questions[24]= "25)  &iquest;Qu&eacute; es lo que la Firma Digital no garantiza por si sola?";
 choices[24]= new Array();
 choices[24][0] = "Autenticaci&oacute;n";
 choices[24][1] = "Integridad";
 choices[24][2] = "Disponibilidad";
 choices[24][3] = "No repudio";
 answers[24] = choices[24][2];
 units[24] = "72";
 comments[24] = "Id Pregunta: 1575. ";


//  Id pregunta: 1581 AÃ±o de creación de pregunta: 2004-01-01
 questions[25]= "26)  El algoritmo de cifrado Rijndael";
 choices[25]= new Array();
 choices[25][0] = "Compite con AES por ser el est&aacute;ndar de criptograf&iacute;a dominante";
 choices[25][1] = "Es un algoritmo de clave p&uacute;blica";
 choices[25][2] = "Es un desarrollo propietario de IBM";
 choices[25][3] = "Se basa en la teor&iacute;a de campos de Galois";
 answers[25] = choices[25][3];
 units[25] = "72";
 comments[25] = "Id Pregunta: 1581. Tanenbaum";


//  Id pregunta: 1655 AÃ±o de creación de pregunta: 2004-01-01
 questions[26]= "27)  &iquest;Cu&aacute;les de los siguientes no son modos de operaci&oacute;n para algoritmos de cifrado por bloques?";
 choices[26]= new Array();
 choices[26][0] = "CTR";
 choices[26][1] = "CBC";
 choices[26][2] = "CFB";
 choices[26][3] = "DFB";
 answers[26] = choices[26][3];
 units[26] = "72";
 comments[26] = "Id Pregunta: 1655. ";


//  Id pregunta: 1851 AÃ±o de creación de pregunta: 2006-01-01
 questions[27]= "28)  Indicar la respuesta falsa:";
 choices[27]= new Array();
 choices[27][0] = "IDEA es un algoritmo de clave sim&eacute;trica";
 choices[27][1] = "RIPMED utiliza claves de 128 bits";
 choices[27][2] = "SHA-1 utiliza claves de 160 bits";
 choices[27][3] = "La seguridad de una funci&oacute;n hash radica en su car&aacute;cter unidireccional";
 answers[27] = choices[27][1];
 units[27] = "72";
 comments[27] = "Id Pregunta: 1851. ";


//  Id pregunta: 1854 AÃ±o de creación de pregunta: 2006-01-01
 questions[28]= "29)  Las aplicaciones fundamentales de la criptograf&iacute;a asim&eacute;trica son:";
 choices[28]= new Array();
 choices[28][0] = "El cifrado eficiente y la firma digital";
 choices[28][1] = "El intercambio seguro  de claves privadas o de sesi&oacute;n y la firma digital";
 choices[28][2] = "El intercambio seguro de claves  privadas o de sesi&oacute;n y el cifrado eficiente";
 choices[28][3] = "Todas las anteriores";
 answers[28] = choices[28][1];
 units[28] = "72";
 comments[28] = "Id Pregunta: 1854. ";


//  Id pregunta: 1863 AÃ±o de creación de pregunta: 2006-01-01
 questions[29]= "30)  &iquest;Cu&aacute;l de los siguientes no es un sistema operativo utilizado en la arquitectura de un sistema de tarjeta inteligente?";
 choices[29]= new Array();
 choices[29][0] = "MultOS";
 choices[29][1] = "Jini";
 choices[29][2] = "Java Card";
 choices[29][3] = "SCfW";
 answers[29] = choices[29][1];
 units[29] = "74";
 comments[29] = "Id Pregunta: 1863. NULL";


//  Id pregunta: 1866 AÃ±o de creación de pregunta: 2006-01-01
 questions[30]= "31)  Los documentos de la serie PKCS son especificaciones producidas por los Laboratorios RSA. Se&ntilde;ale la falsa: ";
 choices[30]= new Array();
 choices[30][0] = "PKCS#3 Protocolo de acuerdo de claves  Diffie-Hellman";
 choices[30][1] = "PKCS#11 Cryptoki";
 choices[30][2] = "PKCS#1 Standard de encriptaci&oacute;n RSA";
 choices[30][3] = "La primera es falsa";
 answers[30] = choices[30][3];
 units[30] = "74";
 comments[30] = "Id Pregunta: 1866. NULL";


//  Id pregunta: 1868 AÃ±o de creación de pregunta: 2006-01-01
 questions[31]= "32)  &iquest;D&oacute;nde se recoge la posici&oacute;n de los contactos del chip enuna tarjetainteligente?";
 choices[31]= new Array();
 choices[31][0] = "ISO 7816-1";
 choices[31][1] = "ISO 7816-2";
 choices[31][2] = "ISO 7816-3";
 choices[31][3] = "ISO 7816-4";
 answers[31] = choices[31][1];
 units[31] = "74";
 comments[31] = "Id Pregunta: 1868. NULL";


//  Id pregunta: 1894 AÃ±o de creación de pregunta: 2006-01-01
 questions[32]= "33)  La tecnolog&iacute;a utilizada para medir y analizar caracter&iacute;sticas del cuerpo humano con prop&oacute;sitos de autenticaci&oacute;n se llama";
 choices[32]= new Array();
 choices[32][0] = "huella";
 choices[32][1] = "biom&eacute;trica";
 choices[32][2] = "JBOD";
 choices[32][3] = "antropomorfismo";
 answers[32] = choices[32][1];
 units[32] = "74";
 comments[32] = "Id Pregunta: 1894. NULL";


//  Id pregunta: 1924 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  Respecto a los servicios de Directorio Electr&oacute;nico, la norma X-500 de la UIT-T define cuatro tipos de clases de objeto de acuerdo a su funcionalidad:";
 choices[33]= new Array();
 choices[33][0] = "Auxiliar, Estructural, Simplificada, Alias";
 choices[33][1] = "Estructural, Simplificada, Auxiliar, Alias";
 choices[33][2] = "Abstracta, Esquem&aacute;tica, Estructural, Alias";
 choices[33][3] = "Abstracta, Estructural, Auxiliar, Alias";
 answers[33] = choices[33][3];
 units[33] = "73";
 comments[33] = "Id Pregunta: 1924. ";


//  Id pregunta: 1928 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  En el &aacute;mbito de las tarjetas con chip integrado, &iquest;cu&aacute;l es el apartado de la norma ISO 7816 que recoge las especificaciones el&eacute;ctricas y los protocolos de comunicaci&oacute;n?";
 choices[34]= new Array();
 choices[34][0] = "ISO 7816-1";
 choices[34][1] = "ISO 7816-2";
 choices[34][2] = "ISO 7816-3";
 choices[34][3] = "ISO 7816-4";
 answers[34] = choices[34][2];
 units[34] = "74";
 comments[34] = "Id Pregunta: 1928. NULL";


//  Id pregunta: 1946 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  Sean en una comunicaci&oacute;n: m=mensaje a transmitir; y=h(m) el c&oacute;digo hash del mensaje m calculado en origen; m&rsquo;=mensaje recibido; y&rsquo;=h(m&acute;) el c&oacute;digo hash del mensaje m&acute; recibido, calculado en destino. Se&ntilde;alar cual de las siguientes afirmaciones es cierta:";
 choices[35]= new Array();
 choices[35][0] = "Si y = y&acute; entonces se puede afirmar que la integridad de m est&aacute; garantizada en m&acute;";
 choices[35][1] = "Si y != y&acute; entonces se puede afirmar que la clave privada ha sido alterada";
 choices[35][2] = "Si m = m&acute; entonces se puede afirmar que la confidencialidad de y est&aacute; garantizada en y&acute;";
 choices[35][3] = "Si y = y&acute; entonces se puede afirmar que la confidencialidad de m est&aacute; garantizada en m&acute;";
 answers[35] = choices[35][0];
 units[35] = "72";
 comments[35] = "Id Pregunta: 1946. ";


//  Id pregunta: 1954 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  En lo que concierne a los algoritmos de cifrado, la recomendaci&oacute;n PKCS#7 de la compa&ntilde;&iacute;a RSA se refiere a:";
 choices[36]= new Array();
 choices[36][0] = "Formato del sobre digital";
 choices[36][1] = "Formato del certificado digital";
 choices[36][2] = "Sintaxis de la clave privada";
 choices[36][3] = "Algoritmo Diffie-Hellman";
 answers[36] = choices[36][0];
 units[36] = "72";
 comments[36] = "Id Pregunta: 1954. ";


//  Id pregunta: 4344 AÃ±o de creación de pregunta: 2007-01-01
 questions[37]= "38)  De entre los siguientes, &iquest;cu&aacute;l no es uno de los servicios de certificaci&oacute;n ofrecidos actualmente por la F&aacute;brica Nacional de Moneda y Timbre?:";
 choices[37]= new Array();
 choices[37][0] = "Fechado digital.";
 choices[37][1] = "Validaci&oacute;n on-line de certificados.";
 choices[37][2] = "Voto electr&oacute;nico en Juntas Generales de Sociedades";
 choices[37][3] = "Login &uacute;nico en sistemas Windows, Linux y Unix";
 answers[37] = choices[37][3];
 units[37] = "74";
 comments[37] = "Id Pregunta: 4344. NULL";


//  Id pregunta: 4348 AÃ±o de creación de pregunta: 2007-01-01
 questions[38]= "39)  El protocolo de comunicaciones seguras en que el cliente genera aleatoriamente una clave sim&eacute;trica, y la cifra con la clave p&uacute;blica del servidor receptor de la informaci&oacute;n, envi&aacute;ndosela cifrada a &eacute;ste, y posteriormente el servidor la descifra, con lo cual ambas partes ya poseen la clave sim&eacute;trica y se pueden comunicar con confidencialidad, es:";
 choices[38]= new Array();
 choices[38][0] = "IPSec (IP Security).";
 choices[38][1] = "SSL/TSL (Secure sockets Layer/Transport Layer Security).";
 choices[38][2] = "RSA (Rivest-Shamir-Adleman).";
 choices[38][3] = "WEP (Wired Equivalent Privacy).";
 answers[38] = choices[38][1];
 units[38] = "73";
 comments[38] = "Id Pregunta: 4348. ";


//  Id pregunta: 4632 AÃ±o de creación de pregunta: 2007-01-01
 questions[39]= "40)  Con el cifrado se asegura";
 choices[39]= new Array();
 choices[39][0] = "la autenticidad";
 choices[39][1] = "la confidencialidad";
 choices[39][2] = "la integridad, la autenticidad y el no repudio en destino";
 choices[39][3] = "la integridad, la autenticidad y el no repudio en origen";
 answers[39] = choices[39][1];
 units[39] = "72";
 comments[39] = "Id Pregunta: 4632. ";


//  Id pregunta: 4740 AÃ±o de creación de pregunta: 2007-01-01
 questions[40]= "41)  Firmar un mensaje electr&oacute;nico";
 choices[40]= new Array();
 choices[40][0] = "Es lo mismo que cifrarlo";
 choices[40][1] = "Garantiza la confidencialidad";
 choices[40][2] = "Es lo mismo que codificarlo";
 choices[40][3] = "Garantiza la integridad, autenticaci&oacute;n y no repudio";
 answers[40] = choices[40][3];
 units[40] = "72";
 comments[40] = "Id Pregunta: 4740. Examen 2006 JCYL";


//  Id pregunta: 4748 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  Indique la afirmaci&oacute;n cierta.";
 choices[41]= new Array();
 choices[41][0] = "El resultado de cifrar de nuevo un texto cifrado con otro algoritmo aporta una seguridad adicional, eso s&iacute;, implicando una carga extra de trabajo tanto para cifrar como para luego descifrar el texto";
 choices[41][1] = "Los cifradores de flujo no aportan informaci&oacute;n alguna al criptoanalista que observa el texto cifrado";
 choices[41][2] = "La calidad del algoritmo HASH es independiente de la calidad de la dispersi&oacute;n obtenida en dicho algoritmo";
 choices[41][3] = "El ataque del cumplea&ntilde;os no es aplicable a las funciones HASH, ya que no son reversibles";
 answers[41] = choices[41][1];
 units[41] = "72";
 comments[41] = "Id Pregunta: 4748. ";


//  Id pregunta: 4750 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  Se&ntilde;ale la opci&oacute;n verdadera en relaci&oacute;n a las infraestructura de clave p&uacute;blica&hellip;";
 choices[42]= new Array();
 choices[42][0] = "Se ha de garantizar que ning&uacute;n usuario, salvo aquel para quien se ha generado una pareja de claves de un certificado, pueda jam&aacute;s llegar a disponer de ellas.";
 choices[42][1] = "La utilizaci&oacute;n de hardware criptogr&aacute;fico (HSM) tiene sentido en las Autoridades de Certificaci&oacute;n (CA) pero no as&iacute; en las Autoridades de Registro (RA)";
 choices[42][2] = "Es importante que la CA disponga de certificaci&oacute;n FIPS 140-2";
 choices[42][3] = "EMV es un tipo de certificado que no responde al est&aacute;ndar X.509";
 answers[42] = choices[42][3];
 units[42] = "74";
 comments[42] = "Id Pregunta: 4750. NULL";


//  Id pregunta: 4792 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  Seg&uacute;n establece la Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica, los certificados electr&oacute;nicos reconocidospueden tener un periodo m&aacute;ximo de validez de:";
 choices[43]= new Array();
 choices[43][0] = "Dos a&ntilde;os";
 choices[43][1] = "Tres a&ntilde;os";
 choices[43][2] = "Cuatro a&ntilde;os";
 choices[43][3] = "Cinco a&ntilde;os";
 answers[43] = choices[43][3];
 units[43] = "74";
 comments[43] = "Id Pregunta: 4792. NULL";


//  Id pregunta: 4840 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  &iquest;Cu&aacute;l de las siguientes afirmaciones en relaci&oacute;n a la firma digital es cierta?";
 choices[44]= new Array();
 choices[44][0] = "Ofrece plenas garant&iacute;as de la integridad, confidencialidad y no repudio del documento firmado";
 choices[44][1] = "Se puede conseguir mediante protocolos de cifrado de clave secreta";
 choices[44][2] = "El DSS (Digital Signature Standard) est&aacute; adoptado como una norma por ISO/IEC (International StandardsOrganization / International Electrotechnical Commission)";
 choices[44][3] = "La firma ciega (Blind signature) se obtiene firmando directamente el correspondiente mensaje, en vez delresumen de &eacute;ste";
 answers[44] = choices[44][1];
 units[44] = "74";
 comments[44] = "Id Pregunta: 4840. ";


//  Id pregunta: 4850 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  &iquest;Cu&aacute;l de los siguientes NO es un modo de operaci&oacute;n del algoritmo de cifrado DES (Data Encryption Standard)?";
 choices[45]= new Array();
 choices[45][0] = "Modo ECB (Electronic Code Book Mode)";
 choices[45][1] = "Modo CFB (Cipher Feedback Mode)";
 choices[45][2] = "Modo BBM (Bit Block Mode)";
 choices[45][3] = "Modo CBC (Cipher Block Chaining Mode)";
 answers[45] = choices[45][2];
 units[45] = "72";
 comments[45] = "Id Pregunta: 4850. ";


//  Id pregunta: 4860 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  Los certificados de clave p&uacute;blica:";
 choices[46]= new Array();
 choices[46][0] = "Que se ajustan a la recomendaci&oacute;n X.509 v.2 no admiten extensiones";
 choices[46][1] = "Ocupan m&aacute;s de 100 kbytes";
 choices[46][2] = "Que se ajustan a la recomendaci&oacute;n X.509 v.3 s&oacute;lo admiten como algoritmo de cifrado el RSA (Rivest ShamirAdleman)";
 choices[46][3] = "Fueron propuestos por Diffie y Hellman en su art&iacute;culo en que establecieron las bases de los criptosistemasde clave p&uacute;blica";
 answers[46] = choices[46][0];
 units[46] = "73";
 comments[46] = "Id Pregunta: 4860. ";


//  Id pregunta: 4885 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  En el establecimiento de una comunicaci&oacute;n mediante SSL (Secure Sockets Layer), &iquest;cu&aacute;l es el protocolo queespecifica la forma de encapsular los datos que se van a intercambiar?";
 choices[47]= new Array();
 choices[47][0] = "SSL Handshake";
 choices[47][1] = "SSL Record";
 choices[47][2] = "Cipher Secure Layer";
 choices[47][3] = "Secure Stocker Layer";
 answers[47] = choices[47][1];
 units[47] = "73";
 comments[47] = "Id Pregunta: 4885. ";


//  Id pregunta: 4997 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[48]= new Array();
 choices[48][0] = "El sistema de autenticaci&oacute;n &quot;Kerberos&quot;, utiliza exclusivamente mecanismos de criptograf&iacute;a asim&eacute;trica";
 choices[48][1] = "Para la autenticaci&oacute;n &quot;Kerberos&quot; utiliza mecanismos basados en criptograf&iacute;a sim&eacute;trica y en criptograf&iacute;aasim&eacute;trica";
 choices[48][2] = "Para la autenticaci&oacute;n &quot;Kerberos&quot; utiliza exclusivamente mecanismos basados en critograf&iacute;a sim&eacute;trica";
 choices[48][3] = "Para la autenticaci&oacute;n &quot;Kerberos&quot; utiliza mecanismos de identificaci&oacute;n/password y de criptograf&iacute;a sim&eacute;trica";
 answers[48] = choices[48][3];
 units[48] = "73";
 comments[48] = "Id Pregunta: 4997. Examen TIC A 2007";


//  Id pregunta: 5088 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  Un servicio de directorio electr&oacute;nico NO se caracteriza por ";
 choices[49]= new Array();
 choices[49][0] = "ser flexible";
 choices[49][1] = "Aceptar cierta inconsistencia temporal de la informaci&oacute;n en su replicaci&oacute;n";
 choices[49][2] = "Ser est&aacute;tico";
 choices[49][3] = "Poder ser consultado y actualizado en l&iacute;nea";
 answers[49] = choices[49][2];
 units[49] = "73";
 comments[49] = "Id Pregunta: 5088. ";


//  Id pregunta: 5094 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  El &quot;modelo de informaci&oacute;n&quot; del directorio LDAP:";
 choices[50]= new Array();
 choices[50][0] = "Describe c&oacute;mo puede protegerse la informaci&oacute;n contenida en el directorio LDAP frente a accesos no autorizados";
 choices[50][1] = "Describe qu&eacute; operaciones pueden ser realizadas sobre la informaci&oacute;n almacenada en el directorio LDAP";
 choices[50][2] = "Define la estructura de la inforrmaci&oacute;n almacenada en el directorio LDAP";
 choices[50][3] = "Describe c&oacute;mo se organizan y referencian los datos";
 answers[50] = choices[50][2];
 units[50] = "74";
 comments[50] = "Id Pregunta: 5094. NULL";


//  Id pregunta: 5693 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  Dentro del chip criptogr&aacute;fico del DNI electr&oacute;nico podemos encontrar tres zonas de datos diferenciadas. Se&ntilde;ale cu&aacute;l de las siguientes no es una de ellas:";
 choices[51]= new Array();
 choices[51][0] = "Zona p&uacute;blica";
 choices[51][1] = " Zona de seguridad";
 choices[51][2] = "Zona privada";
 choices[51][3] = "Zona confidencial";
 answers[51] = choices[51][3];
 units[51] = "74";
 comments[51] = "Id Pregunta: 5693. NULL";


//  Id pregunta: 5695 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  La firma realizada a trav&eacute;s del DNI electr&oacute;nico:";
 choices[52]= new Array();
 choices[52][0] = "Tiene valor jur&iacute;dico, pero no equivale a la firma manuscrita";
 choices[52][1] = " Tiene el mismo valor jur&iacute;dico que la firma manuscrita";
 choices[52][2] = "No tiene valor jur&iacute;dico";
 choices[52][3] = "Su valor jur&iacute;dico queda a discreci&oacute;n de un juez";
 answers[52] = choices[52][1];
 units[52] = "74";
 comments[52] = "Id Pregunta: 5695. NULL";


//  Id pregunta: 5696 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  Los certificados del DNI electr&oacute;nico:";
 choices[53]= new Array();
 choices[53][0] = "Se expiden voluntariamente a petici&oacute;n del ciudadano";
 choices[53][1] = " Se expiden siempre y vienen activados";
 choices[53][2] = "S&oacute;lo se expiden a quien autorice la Direcci&oacute;n General de la Polic&iacute;a";
 choices[53][3] = "Se expiden siempre, pero se activan voluntariamente con el consentimiento del ciudadano";
 answers[53] = choices[53][3];
 units[53] = "74";
 comments[53] = "Id Pregunta: 5696. NULL";


//  Id pregunta: 5698 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  Respecto a la validez de los certificados del DNI electr&oacute;nico, se&ntilde;ale la falsa:";
 choices[54]= new Array();
 choices[54][0] = "La p&eacute;rdida de validez del DNI implica su p&eacute;rdida de validez";
 choices[54][1] = " La renovaci&oacute;n implica la expedici&oacute;n de nuevos certificados";
 choices[54][2] = "La expedici&oacute;n de duplicados implica la expedici&oacute;n de nuevos certificados";
 choices[54][3] = "La caducidad de los certificados implica la renovaci&oacute;n del DNI";
 answers[54] = choices[54][3];
 units[54] = "74";
 comments[54] = "Id Pregunta: 5698. NULL";


//  Id pregunta: 5744 AÃ±o de creación de pregunta: 2009-01-01
 questions[55]= "56)  En criptograf&iacute;a sim&eacute;trica, &iquest;qu&eacute; es una sustituci&oacute;n monogr&aacute;mica?";
 choices[55]= new Array();
 choices[55][0] = "La que cifra los caracteres de uno en uno";
 choices[55][1] = "La que sustituye cada letra por varias letras";
 choices[55][2] = "Aquella en que cada letra es sustituidad siempre por la misma dentro de un mismo mensaje";
 choices[55][3] = "La que sustituye las letras en grupos de longitud variable, dependiendo de su posici&oacute;n dentro del mensaje";
 answers[55] = choices[55][0];
 units[55] = "72";
 comments[55] = "Id Pregunta: 5744. ";


//  Id pregunta: 5749 AÃ±o de creación de pregunta: 2009-01-01
 questions[56]= "57)  &iquest;Cu&aacute;l de los siguientes elementos no es obligatorio en una firma CAdES-BES?";
 choices[56]= new Array();
 choices[56][0] = "Definici&oacute;n del tipo de contenido";
 choices[56][1] = "Resumen del mensaje";
 choices[56][2] = "Sello de tiempo";
 choices[56][3] = "Atributos identificativos del certificado del firmante";
 answers[56] = choices[56][2];
 units[56] = "73";
 comments[56] = "Id Pregunta: 5749. ";


//  Id pregunta: 5752 AÃ±o de creación de pregunta: 2009-01-01
 questions[57]= "58)  &iquest;Qu&eacute; longitudes de clave tienen las diferentes versiones del algoritmo AES reconocidas oficialmente por el NIST?";
 choices[57]= new Array();
 choices[57][0] = "64, 128, 256 bits";
 choices[57][1] = "128, 192, 256 bits";
 choices[57][2] = "128, 256, 512 bits";
 choices[57][3] = "128, 256, 384 bits";
 answers[57] = choices[57][1];
 units[57] = "72";
 comments[57] = "Id Pregunta: 5752. ";


//  Id pregunta: 5859 AÃ±o de creación de pregunta: 2009-01-01
 questions[58]= "59)  Indique la ventaja de los sistemas RFID (Radio Frecuency Identification) de baja frecuencia:";
 choices[58]= new Array();
 choices[58][0] = "Soportan la lectura simult&aacute;nea de varias etiquetas";
 choices[58][1] = "El coste de las etiquetas es bajo debido al peque&ntilde;o tama&ntilde;o de su antena";
 choices[58][2] = "Poseen alta tasas de transmisi&oacute;n";
 choices[58][3] = "Su se&ntilde;al atraviesa materiales tales como el agua, la madera y el aluminio";
 answers[58] = choices[58][3];
 units[58] = "74";
 comments[58] = "Id Pregunta: 5859. Pregunta 39";


//  Id pregunta: 5883 AÃ±o de creación de pregunta: 2009-01-01
 questions[59]= "60)  &iquest;Qu&eacute; es WebDAV?";
 choices[59]= new Array();
 choices[59][0] = "Protocolo de acceso y edici&oacute;n de carpetas mediante HTTP";
 choices[59][1] = "Sistema web de creaci&oacute;n de formularios";
 choices[59][2] = "Sistema web seguro de compartici&oacute;n de procesamiento";
 choices[59][3] = "Sistema web de mensajer&iacute;a y alertas";
 answers[59] = choices[59][0];
 units[59] = "73";
 comments[59] = "Id Pregunta: 5883. MAP 2008 A1";


//  Id pregunta: 5887 AÃ±o de creación de pregunta: 2009-01-01
 questions[60]= "61)  Los cifrados de clave p&uacute;blica:";
 choices[60]= new Array();
 choices[60][0] = "De Diffie-Hellman basan su fortaleza en la dificultad de resolver el problema de los logaritmos discretos";
 choices[60][1] = "A igualdad de longitud de clave los basados en curvas el&iacute;pticas son tan robustos como los basados en la aritm&eacute;tica modular";
 choices[60][2] = "La llegada de los ordenadores cu&aacute;nticos no los har&aacute; m&aacute;s vulnerables a los m&eacute;todos criptoanal&iacute;ticos empleados ahora";
 choices[60][3] = "Basados en el RSA requieren m&aacute;s tiempo para descifrar que para generar sus pares de claves";
 answers[60] = choices[60][0];
 units[60] = "72";
 comments[60] = "Id Pregunta: 5887. MAP 2008 A1";


//  Id pregunta: 6056 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  La norma ISO/IEC 15408 Evaluation Criteria for IT Security (informalmente conocida como Common Criteria):";
 choices[61]= new Array();
 choices[61][0] = "Establece una escala creciente de confianza en la seguridad del producto evaluado, que va desde el Evaluation Assurement Level (EAL) 0 al EAL 7.";
 choices[61][1] = "Establece perfiles de protecci&oacute;n, que deben ser elaborados por ISO/IEC.";
 choices[61][2] = "Permite certificar sistemas, productos y algoritmos criptogr&aacute;ficos.";
 choices[61][3] = "Figura como criterio de evaluaci&oacute;n en la Orden PRE/2740/2007 por la que se aprueba el Reglamento de evaluaci&oacute;n y certificaci&oacute;n de la seguridad de las TI.";
 answers[61] = choices[61][3];
 units[61] = "74";
 comments[61] = "Id Pregunta: 6056. TIC A 2009";


//  Id pregunta: 6115 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  Indique cu&aacute;l de las siguientes clasificaciones NO es aplicable a las etiquetas RFID (Radio Frecuency Identification):";
 choices[62]= new Array();
 choices[62][0] = "Activas.";
 choices[62][1] = "Pasivas.";
 choices[62][2] = "Hiperactivas.";
 choices[62][3] = "Semipasivas.";
 answers[62] = choices[62][2];
 units[62] = "74";
 comments[62] = "Id Pregunta: 6115. TIC A 2009";


//  Id pregunta: 6554 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  PKCS#12";
 choices[63]= new Array();
 choices[63][0] = "Especifica un formato portable para almacenar o transportar las claves privadas de un usuario";
 choices[63][1] = "Especifica una API, por la que los dispositivos que contienen informaci&oacute;n criptogr&aacute;fica realizan funciones criptogr&aacute;ficas";
 choices[63][2] = "El formato del sobre digital";
 choices[63][3] = "La especificaci&oacute;n de un interfaz de acceso a dispositivos que almacenan informaci&oacute;n";
 answers[63] = choices[63][0];
 units[63] = "74";
 comments[63] = "Id Pregunta: 6554. NULL";


//  Id pregunta: 6556 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  El est&aacute;ndar X.509 v3 define los distintos elementos que debe contener un certificado, entre los que destacan:";
 choices[64]= new Array();
 choices[64][0] = "N&uacute;mero de serie del certificado";
 choices[64][1] = "Nombre de la autoridad de certificaci&oacute;n";
 choices[64][2] = "Firma digital de la autoridad  certificadora";
 choices[64][3] = "Todas las respuestas anteriores son correctas";
 answers[64] = choices[64][3];
 units[64] = "74";
 comments[64] = "Id Pregunta: 6556. NULL";


//  Id pregunta: 6569 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  El certificado X.509 no";
 choices[65]= new Array();
 choices[65][0] = "Fue definido por el antes denominado CCITT (actualmente ITU) en la recomendaci&oacute;n X.509";
 choices[65][1] = "En esta recomendaci&oacute;n se define un modelo seguro para suministrar el servicio de autenticaci&oacute;n a los usuarios del Directorio X.500 basado en criptograf&iacute;a de clave p&uacute;blica";
 choices[65][2] = "La recomendaci&oacute;n X.509 [CCI88] define un modelo de certificado en sintaxis ASN.1";
 choices[65][3] = "Todas las respuestas anteriores son ciertas";
 answers[65] = choices[65][3];
 units[65] = "73";
 comments[65] = "Id Pregunta: 6569. NULL";


//  Id pregunta: 6590 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  La realizaci&oacute;n de la auditor&iacute;a, dentro de las medidas de seguridad de nivel medio, de acuerdo al RD 1720/2007 debe llevarse a cabo:";
 choices[66]= new Array();
 choices[66][0] = "Por personal externo";
 choices[66][1] = "Por personal interno a la organizaci&oacute;n";
 choices[66][2] = "Por profesionales en materia de protecci&oacute;n de datos";
 choices[66][3] = "Todas las respuestas anteriores son incorrectas";
 answers[66] = choices[66][2];
 units[66] = "75";
 comments[66] = "Id Pregunta: 6590. NULL";


//  Id pregunta: 6595 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  El RD 1720/2007 indica que deben aplicarse t&eacute;cnicas de cifrado";
 choices[67]= new Array();
 choices[67][0] = "En todos los datos personales";
 choices[67][1] = "En los datos personales a los que aplican las medidas de seguridad de nivel b&aacute;sico";
 choices[67][2] = "En los datos personales a los que aplican las medidas de seguridad de nivel medio";
 choices[67][3] = "En los datos personales a los que aplican las medidas de seguridad de nivel alto";
 answers[67] = choices[67][3];
 units[67] = "75";
 comments[67] = "Id Pregunta: 6595. NULL";


//  Id pregunta: 7173 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)  &iquest;Qu&eacute; algoritmo de cifrado fue designado por la Administraci&oacute;n Federal Americana como est&aacute;ndar de cifrado sucesor del algoritmo DES?";
 choices[68]= new Array();
 choices[68][0] = "Triple DES";
 choices[68][1] = "AES";
 choices[68][2] = "IDEA";
 choices[68][3] = "Blowfish";
 answers[68] = choices[68][1];
 units[68] = "72";
 comments[68] = "Id Pregunta: 7173. Examen TIC B 2009";


//  Id pregunta: 7174 AÃ±o de creación de pregunta: 2010-01-01
 questions[69]= "70)  A la hora de atacar un texto cifrado, el m&eacute;todo que explota las debilidades del algoritmo de cifrado o sus puntos menos fuertes para intentar deducir un texto nativo o deducir la clave de cifrado se denomina:";
 choices[69]= new Array();
 choices[69][0] = "Ataque por Fuerza Bruta";
 choices[69][1] = "CriptoAn&aacute;lisis";
 choices[69][2] = "An&aacute;lisis Diferencia de Cifrado";
 choices[69][3] = "CriptoCifrado";
 answers[69] = choices[69][1];
 units[69] = "72";
 comments[69] = "Id Pregunta: 7174. Examen TIC B 2009";


//  Id pregunta: 7179 AÃ±o de creación de pregunta: 2010-01-01
 questions[70]= "71)  Revocar un certificado electr&oacute;nico significa:";
 choices[70]= new Array();
 choices[70][0] = "Extender su validez m&aacute;s all&aacute; del tiempo l&iacute;mite inicialmente establecido";
 choices[70][1] = "Anular su validez antes de la fecha de caducidad que consta en el mismo";
 choices[70][2] = "Agotar su vida &uacute;til al haberse llegado al l&iacute;mite de vigencia del mismo";
 choices[70][3] = "Desacoplar un certificado de la tarjeta criptogr&aacute;fica en la que reside";
 answers[70] = choices[70][1];
 units[70] = "74";
 comments[70] = "Id Pregunta: 7179. Examen TIC B 2009";


//  Id pregunta: 7342 AÃ±o de creación de pregunta: 2010-01-01
 questions[71]= "72)  &iquest;Cu&aacute;l de los siguientes NO es un modo de operaci&oacute;n del algoritmo DES?";
 choices[71]= new Array();
 choices[71][0] = "ECB";
 choices[71][1] = "OCB";
 choices[71][2] = "CBC";
 choices[71][3] = "OFB";
 answers[71] = choices[71][1];
 units[71] = "72";
 comments[71] = "Id Pregunta: 7342. NULL";


//  Id pregunta: 8290 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  Respecto al protocolo ligero de acceso a directorios (LDAPv3):";
 choices[72]= new Array();
 choices[72][0] = "No admite TCP/IP.";
 choices[72][1] = "No es un protocolo abierto.";
 choices[72][2] = "No requiere X.500.";
 choices[72][3] = "Ninguna de las anteriores es correcta.";
 answers[72] = choices[72][2];
 units[72] = "74";
 comments[72] = "Id Pregunta: 8290. Examen TIC A2 2010";


//  Id pregunta: 8305 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l de los siguientes perfiles de XAdES incluye los certificados y listas de revocaci&oacute;n (consultas OCSP o CRLs) para poder verificar el documento firmado en el futuro incluso si las fuentes originales no estuvieran disponibles?";
 choices[73]= new Array();
 choices[73][0] = "XAdES-X.";
 choices[73][1] = "XAdES-X-L.";
 choices[73][2] = "XAdES-C. ";
 choices[73][3] = "Esta funcionalidad no se soporta en XAdES.";
 answers[73] = choices[73][1];
 units[73] = "72, 73, 74";
 comments[73] = "Id Pregunta: 8305. Examen TIC A2 2010";


//  Id pregunta: 8684 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  Indique el puerto utilizado por el protocolo ldap sobre SSL:";
 choices[74]= new Array();
 choices[74][0] = "563";
 choices[74][1] = "443";
 choices[74][2] = "336";
 choices[74][3] = "636";
 answers[74] = choices[74][3];
 units[74] = "74";
 comments[74] = "Id Pregunta: 8684. Examen UPM A2 2011";


//  Id pregunta: 8733 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  Elija la afirmaci&oacute;n correcta, en relaci&oacute;n con el contenido de la tarjeta chip del DNI electr&oacute;nico:";
 choices[75]= new Array();
 choices[75][0] = "Se incluye un certificado electr&oacute;nico &uacute;nico, personal e intransferible, con la doble funcionalidad de firma electr&oacute;nica y de autenticaci&oacute;n.";
 choices[75][1] = "Se incluyen, entre otros los datos de filiaci&oacute;n del ciudadano (los mismos que est&aacute;n impresos en el soporte f&iacute;sico del DNI), junto con una imagen de la fotograf&iacute;a";
 choices[75][2] = "Los datos contenidos, en todo caso, s&oacute;lo son accesibles en lectura por el ciudadano, mediante la utilizaci&oacute;n de la Clave Personal de Acceso o PIN. como garant&iacute;a de confidencialidad";
 choices[75][3] = "No se incluye una imagen de la fotograf&iacute;a";
 answers[75] = choices[75][1];
 units[75] = "74";
 comments[75] = "Id Pregunta: 8733. Examen TIC A2 2010 interna";


//  Id pregunta: 8789 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  Al aplicar el algoritmo SHA-1 sobre una cadena de texto inicial obtendremos siempre un resultado:";
 choices[76]= new Array();
 choices[76][0] = "De menor longitud que la cadena inicial";
 choices[76][1] = "De la misma longitud que la cadena inicial";
 choices[76][2] = "De mayor longitud que la cadena inicial";
 choices[76][3] = "Ninguna de las anteriores";
 answers[76] = choices[76][3];
 units[76] = "72";
 comments[76] = "Id Pregunta: 8789. Examen UPM A2 2011";


//  Id pregunta: 9582 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  En el contexto de la firma electr&oacute;nica y su regulaci&oacute;n en Espa&ntilde;a se&ntilde;ale la afirmaci&oacute;n FALSA.";
 choices[77]= new Array();
 choices[77][0] = "Los funcionarios al servicio de las administraciones p&uacute;blicas espa&ntilde;olas pueden firmar en el ejercicio de su cargo utilizando su DNI electr&oacute;nico.";
 choices[77][1] = "Los c&oacute;digos de verificaci&oacute;n segura (CSV) junto con los sellos de &oacute;rgano sirven para dotar de firma electr&oacute;nica reconocida a la actuaci&oacute;n administrativa automatizada.";
 choices[77][2] = "Un dispositivo seguro de creaci&oacute;n de firma debe garantizar que los datos usados para generar la firma pueden producirse s&oacute;lo una vez.";
 choices[77][3] = "Un certificado electr&oacute;nico reconocido ha de incluir la firma electr&oacute;nica avanzada del prestador de servicios de certificaci&oacute;n que lo expide.";
 answers[77] = choices[77][1];
 units[77] = "43, 74";
 comments[77] = "Id Pregunta: 9582. Examen TIC A1 2011";


//  Id pregunta: 10057 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  El algoritmo SHA-1 (RFC 3174) produce un resumen de salida de:";
 choices[78]= new Array();
 choices[78][0] = "128 bits ";
 choices[78][1] = "160 bits";
 choices[78][2] = "224 bits ";
 choices[78][3] = "256 bits";
 answers[78] = choices[78][1];
 units[78] = "72";
 comments[78] = "Id Pregunta: 10057. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10373 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  El ataque criptogr&aacute;fico llamado &quot;birthday attack&quot; est&aacute; basado en la paradoja del cumplea&ntilde;os. &iquest;Cu&aacute;l es su objetivo?";
 choices[79]= new Array();
 choices[79][0] = "Capturar pares de claves de funciones resumen (hash) con el mismo resultado, ya que es estad&iacute;sticamente m&aacute;s probable el ataque probando de dos en dos.";
 choices[79][1] = "Robar la clave privada del dni electr&oacute;nico del usuario cuando est&aacute; realizando alguna gesti&oacute;n con el mismo, ya que se extrae dicha clave conociendo parte de la informaci&oacute;n contenida, como la fecha de nacimiento del sujeto.";
 choices[79][2] = "Averiguar la clave de acceso al facebook de un usuario sabiendo cu&aacute;ndo cumple a&ntilde;os ya que la gente es muy descuidada y usa esa informaci&oacute;n como pregunta secreta.";
 choices[79][3] = "Encontrar una clave en toda las aplicaciones que usa generalmente un usuario (correo, facebook, twitter, etc.) que coincida con su fecha de cumplea&ntilde;os y a partir de ah&iacute; hacerse con el resto de contrase&ntilde;as.";
 answers[79] = choices[79][0];
 units[79] = "72";
 comments[79] = "Id Pregunta: 10373. ";


//  Id pregunta: 10471 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  En una PKI:";
 choices[80]= new Array();
 choices[80][0] = "Un certificado se a&ntilde;ade a una CRL en cuanto se tiene conocimiento de que hay motivos para su revocaci&oacute;n.";
 choices[80][1] = "Las CRLs incluyen todos los certificados emitidos por una CA.";
 choices[80][2] = "Un certificado revocado es eliminado de una CRL en cuanto se emite un nuevo certificado de las mismas caracter&iacute;sticas para el titular del certificado revocado. ";
 choices[80][3] = "No es obligatorio que una CA emita CRLs si proporciona otro mecanismo de consulta del estado de los certificados.";
 answers[80] = choices[80][3];
 units[80] = "73";
 comments[80] = "Id Pregunta: 10471. ";


//  Id pregunta: 10473 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  Una CRL completa:";
 choices[81]= new Array();
 choices[81][0] = "Lista todos los certificados no expirados emitidos por la CA revocados por cualquier raz&oacute;n.";
 choices[81][1] = "Lista los certificados cuyo estado de revocaci&oacute;n ha cambiado desde la anterior CRL completa.";
 choices[81][2] = "Se emite con la periodicidad definida en la politica de actualizaciones, pero siempre que hayan transcurrido menos de 24 horas desde la &uacute;ltima emisi&oacute;n.";
 choices[81][3] = "Lista todos los certificados no expirados revocados por los motivos de revocaci&oacute;n dentro del alcance de la CRL.";
 answers[81] = choices[81][3];
 units[81] = "73";
 comments[81] = "Id Pregunta: 10473. ";


//  Id pregunta: 10474 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  En el &aacute;mbito de los certificados X.509:";
 choices[82]= new Array();
 choices[82][0] = "La CA de la PKI debe proporcional protocolos de gesti&oacute;n de certificados (registro, recuperaci&oacute;n de claves, etc) dsiponibles online.";
 choices[82][1] = "Una CRL es una lista de certificados revocados con un timestamp que determina su fecha de emisi&oacute;n y firmada en todo caso por la CA que emite los certificados.";
 choices[82][2] = "Una CRL tiene un alcance que define el tipo de certificados que incluir&aacute; dicha lista.";
 choices[82][3] = "Un certificado se a&ntilde;ade a la CRL en la siguiente actualizaci&oacute;n seg&uacute;n la pol&iacute;tica de actualizaciones definida.";
 answers[82] = choices[82][3];
 units[82] = "73";
 comments[82] = "Id Pregunta: 10474. ";


//  Id pregunta: 10475 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  Si usamos el m&eacute;todo de comprobaci&oacute;n de la validez de un certificado mediante CRL en vez de OCSP puede ocurrir que (marcar la correcta respecto a CRL que no ocurrir&iacute;a usando OCSP)&hellip;";
 choices[83]= new Array();
 choices[83][0] = "El certificado que estamos validando est&eacute; malformado";
 choices[83][1] = "La autoridad de certificaci&oacute;n que emiti&oacute; el certificado sea incorrecta";
 choices[83][2] = "El certificado haya sido revocado desde la anterior emisi&oacute;n de CRL pero la consulta lo d&eacute; por v&aacute;lido";
 choices[83][3] = "El certificado haya expirado pero no se pueda verificar  la fecha de fin de validez y la comprobaci&oacute;n lo d&eacute; por v&aacute;lido cuando est&aacute; expirado.";
 answers[83] = choices[83][2];
 units[83] = "73";
 comments[83] = "Id Pregunta: 10475. ";


//  Id pregunta: 10481 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  El certificado de firma del DNI electr&oacute;nico es un certificado (seg&uacute;n la ley de Firma Electr&oacute;nica):";
 choices[84]= new Array();
 choices[84][0] = "Avanzado";
 choices[84][1] = "Reconocido";
 choices[84][2] = "Seguro";
 choices[84][3] = "Exportable";
 answers[84] = choices[84][1];
 units[84] = "74";
 comments[84] = "Id Pregunta: 10481. NULL";


//  Id pregunta: 10611 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  En una arquitectura PKI, la Autoridad de Validaci&oacute;n:";
 choices[85]= new Array();
 choices[85][0] = "Verifica la identidad del titular antes de la expedici&oacute;n del certificado.";
 choices[85][1] = "Comprueba si un certificado ha sido revocado mediante servicios de directorio, CRL y OCSP.";
 choices[85][2] = "Expide, gestiona y revoca certificados digitales.";
 choices[85][3] = "Procesa solicitudes de revocaci&oacute;n de certificados.";
 answers[85] = choices[85][1];
 units[85] = "74";
 comments[85] = "Id Pregunta: 10611. ";


//  Id pregunta: 10616 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  El algoritmo Rijndael:";
 choices[86]= new Array();
 choices[86][0] = "Tiene un tama&ntilde;o de clave fijo de 128 bits.";
 choices[86][1] = "Tiene un tama&ntilde;o de bloque fijo de 256 bits.";
 choices[86][2] = "Tiene un tama&ntilde;o de clave de 128, 192 o 256 bits.";
 choices[86][3] = "Tiene un tama&ntilde;o de clave m&uacute;ltiplo de 32 bits.";
 answers[86] = choices[86][3];
 units[86] = "72";
 comments[86] = "Id Pregunta: 10616. AES tiene un tama&ntilde;o de clave de 128, 192 o 256 bits. Rijndael, en el que est&aacute; basado, tiene un tama&ntilde;o de clave m&uacute;ltiplo de 32 bits (m&iacute;nimo 128 bits y m&aacute;ximo 256 bits).";


//  Id pregunta: 10887 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  &iquest;Cu&aacute;l de los siguientes protocolos permite conocer en tiempo real si un certificado ha sido o no revocado?";
 choices[87]= new Array();
 choices[87][0] = "OCSP";
 choices[87][1] = "CRL";
 choices[87][2] = "PKCS#10";
 choices[87][3] = "HTTPS";
 answers[87] = choices[87][0];
 units[87] = "73, 74";
 comments[87] = "Id Pregunta: 10887. Examen GSI 2014";


//  Id pregunta: 10900 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  Atendiendo &uacute;nicamente a criterios de eficiencia en tiempo, &iquest;cu&aacute;l de los siguientes m&eacute;todos ser&iacute;a el m&aacute;s eficiente para securizar las comunicaciones entre usuarios dentro de una red?";
 choices[88]= new Array();
 choices[88][0] = "Mediante claves sim&eacute;tricas.";
 choices[88][1] = "Mediante claves asim&eacute;tricas.";
 choices[88][2] = "Mediante claves sim&eacute;tricas compartidas peri&oacute;dicamente con claves asim&eacute;tricas.";
 choices[88][3] = "Mediante claves asim&eacute;tricas compartidas peri&oacute;dicamente con claves sim&eacute;tricas.";
 answers[88] = choices[88][0];
 units[88] = "73, 74";
 comments[88] = "Id Pregunta: 10900. Examen GSI 2014";


//  Id pregunta: 10957 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  Los certificados electr&oacute;nicos contenidos en el DNI electr&oacute;nico tienen una vigencia de:";
 choices[89]= new Array();
 choices[89][0] = "30 meses.";
 choices[89][1] = "48 meses.";
 choices[89][2] = "24 meses.";
 choices[89][3] = "36 meses.";
 answers[89] = choices[89][0];
 units[89] = "74";
 comments[89] = "Id Pregunta: 10957. TIC A1 AGE 2014";


//  Id pregunta: 10978 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  Respecto al algoritmo de cifrado RC5, se&ntilde;ale la respuesta correcta:";
 choices[90]= new Array();
 choices[90][0] = "Se trata de un algoritmo de cifrado asim&eacute;trico.";
 choices[90][1] = "No utiliza rotaciones dependientes de los datos para su proceso.";
 choices[90][2] = "Posee un n&uacute;mero fijo de rotaciones para su proceso.";
 choices[90][3] = "Posee tama&ntilde;o variable de clave.";
 answers[90] = choices[90][3];
 units[90] = "72";
 comments[90] = "Id Pregunta: 10978. TIC A1 AGE 2014";


//  Id pregunta: 11050 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;Cu&aacute;l es un algoritmo de criptograf&iacute;a sim&eacute;trica de flujo?";
 choices[91]= new Array();
 choices[91][0] = "DES";
 choices[91][1] = "Blowfish";
 choices[91][2] = "SNOW";
 choices[91][3] = "IDEA";
 answers[91] = choices[91][2];
 units[91] = "72";
 comments[91] = "Id Pregunta: 11050. El resto son algoritmos de bloque";


//  Id pregunta: 11087 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Indique la afirmaci&oacute;n INCORRECTA sobre el algoritmo DES (Data Encryption Standard)";
 choices[92]= new Array();
 choices[92][0] = "Est&aacute; basado en las redes de Feistel";
 choices[92][1] = "Usa una clave de 56 bits";
 choices[92][2] = "Roto en 1997 mediante b&uacute;squeda exhaustiva";
 choices[92][3] = "Para hacerlo m&aacute;s robusto se utiliza el doble DES 2-DES";
 answers[92] = choices[92][3];
 units[92] = "72";
 comments[92] = "Id Pregunta: 11087. ";


//  Id pregunta: 11252 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Seg&uacute;n el Principio de Reconocimiento Mutuo que establece el Reglamento 910/2014, se reconocer&aacute; en un Estado miembro, a efectos de la autenticaci&oacute;n transfronteriza para un servicio en l&iacute;nea, el medio de identificaci&oacute;n electr&oacute;nica expedido en otro Estado miembro, siempre que:";
 choices[93]= new Array();
 choices[93][0] = "El nivel de seguridad de este medio de identificaci&oacute;n electr&oacute;nica corresponda a un nivel igual o superior al requerido por el organismo del sector p&uacute;blico para acceder a dicho servicio en l&iacute;nea, independientemente del nivel de seguridad del medio de identificaci&oacute;n.";
 choices[93][1] = "El medio de identificaci&oacute;n est&eacute; expedido seg&uacute;n los incluidos en la lista publicada por la Comisi&oacute;n.";
 choices[93][2] = "Las respuestas A) y B) son correctas.";
 choices[93][3] = "Este reconocimiento se producir&aacute; a m&aacute;s tardar 6 meses despu&eacute;s de que la Comisi&oacute;n publique la lista.";
 answers[93] = choices[93][1];
 units[93] = "73";
 comments[93] = "Id Pregunta: 11252. ";


//  Id pregunta: 11253 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Entre los requisitos de la firma electr&oacute;nica avanzada no se encuentra:";
 choices[94]= new Array();
 choices[94][0] = "Que est&eacute; vinculada al firmante de manera &uacute;nica y permita su identificaci&oacute;n.";
 choices[94][1] = "Que haya sido creada utilizando datos de creaci&oacute;n de la firma electr&oacute;nica que el firmante puede utilizar, con un alto nivel de confianza, bajo su control exclusivo.";
 choices[94][2] = "Que haya sido creada utilizando datos de creaci&oacute;n de la firma electr&oacute;nica que el firmante puede utilizar, siempre bajo su control exclusivo.";
 choices[94][3] = "Que est&eacute; vinculada con los datos firmados de modo que detecte cualquier modificaci&oacute;n ulterior.";
 answers[94] = choices[94][2];
 units[94] = "73";
 comments[94] = "Id Pregunta: 11253. ";


//  Id pregunta: 11261 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Cu&aacute;les son los niveles de seguridad de los sistemas de autenticaci&oacute;n que define el Reglamento 910/2014?";
 choices[95]= new Array();
 choices[95][0] = "Bajo, medio y alto.";
 choices[95][1] = "B&aacute;sico, medio y alto.";
 choices[95][2] = "B&aacute;sico, sustancial y alto.";
 choices[95][3] = "Bajo, sustancial y alto.";
 answers[95] = choices[95][3];
 units[95] = "73";
 comments[95] = "Id Pregunta: 11261. ";


//  Id pregunta: 11300 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  En relaci&oacute;n con un Prestador de Servicios de Certificaci&oacute;n (PSC) es cierto que";
 choices[96]= new Array();
 choices[96][0] = "Es una persona jur&iacute;dica que expide certificados";
 choices[96][1] = "Es una persona f&iacute;sica o jur&iacute;dica que expide certificados";
 choices[96][2] = "Es una persona f&iacute;sica o jur&iacute;dica que expide certificados u otros servicios relacionados con la firma electr&oacute;nica";
 choices[96][3] = "Es una persona jur&iacute;dica que expide certificados u otros servicios relacionados con la firma electr&oacute;nica";
 answers[96] = choices[96][2];
 units[96] = "74";
 comments[96] = "Id Pregunta: 11300. ";


//  Id pregunta: 11508 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  El tipo de control de acceso a usuarios que establece que todo recurso del sistema tiene una etiqueta de seguridad compuesta por el nivel de seguridad y el recurso al que se quiere acceder, se denomina.";
 choices[97]= new Array();
 choices[97][0] = "DAC";
 choices[97][1] = "RBAC";
 choices[97][2] = "MAC";
 choices[97][3] = "Ninguno de los anteriores.";
 answers[97] = choices[97][2];
 units[97] = "72";
 comments[97] = "Id Pregunta: 11508. NULL";


//  Id pregunta: 11513 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Indique cu&aacute;l de los siguientes algoritmos criptogr&aacute;ficos NO ha sido autorizado para uso en el Esquema Nacional de Seguridad seg&uacute;n la gu&iacute;a CCN-STIC 807.";
 choices[98]= new Array();
 choices[98][0] = "MD5";
 choices[98][1] = "TDEA";
 choices[98][2] = "AES";
 choices[98][3] = "RSA";
 answers[98] = choices[98][0];
 units[98] = "72";
 comments[98] = "Id Pregunta: 11513. NULL";


//  Id pregunta: 11520 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Al instalar un cortafuegos en un servidor web, a&ntilde;adimos un mecanismo de salvaguarda que incrementa los niveles de:";
 choices[99]= new Array();
 choices[99][0] = "Confidencialidad.";
 choices[99][1] = "Disponibilidad.";
 choices[99][2] = "Integridad.";
 choices[99][3] = "Todas las anteriores.";
 answers[99] = choices[99][3];
 units[99] = "72";
 comments[99] = "Id Pregunta: 11520. NULL";


