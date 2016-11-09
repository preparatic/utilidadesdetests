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

//  Id pregunta: 687 AÃ±o de creación de pregunta: 2005-01-01
 questions[0]= "1)  La &uacute;nica empresa u organismo en Espa&ntilde;a que proporciona certificados digitales es la FNMT:";
 choices[0]= new Array();
 choices[0][0] = "Es completamente cierto";
 choices[0][1] = "Es cierto para certificados servidor";
 choices[0][2] = "Es completamente falso";
 choices[0][3] = "Es cierto s&oacute;lo para certificados de empleado p&uacute;blico, sede electr&oacute;nica y sello electr&oacute;nico";
 answers[0] = choices[0][2];
 units[0] = "73";
 comments[0] = "Id Pregunta: 687. ";


//  Id pregunta: 708 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  Cu&aacute;l de las siguientes tecnolog&iacute;as no est&aacute; relacionada con la identificaci&oacute;n y autentificaci&oacute;n:";
 choices[1]= new Array();
 choices[1][0] = "Certificados";
 choices[1][1] = "Single Sign On";
 choices[1][2] = "Kerberos";
 choices[1][3] = "NetBios";
 answers[1] = choices[1][3];
 units[1] = "73";
 comments[1] = "Id Pregunta: 708. Similar a examen TIC SS A 2004";


//  Id pregunta: 762 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  La orden chmod";
 choices[2]= new Array();
 choices[2][0] = "bloquea un archivo en windows";
 choices[2][1] = "cambia los permisos de un achivo en linux - unix";
 choices[2][2] = "crea un directorio modificable en unix";
 choices[2][3] = "Ninguna de las anteriores";
 answers[2] = choices[2][1];
 units[2] = "52,53";
 comments[2] = "Id Pregunta: 762. ";


//  Id pregunta: 785 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  &iquest;En qu&eacute; forma normal est&aacute; una tabla que no tiene grupos repetitivos,  en la que los atributos no principales dependan completamente de la clave principal, y dependan de otros atributos adem&aacute;s de la clave principal?:";
 choices[3]= new Array();
 choices[3][0] = "1FN";
 choices[3][1] = "2FN";
 choices[3][2] = "3FN";
 choices[3][3] = "Boyce-Cood";
 answers[3] = choices[3][1];
 units[3] = "58";
 comments[3] = "Id Pregunta: 785. SS-A 2004";


//  Id pregunta: 833 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta respecto a la ejecuci&oacute;n de programas en una m&aacute;quina?:";
 choices[4]= new Array();
 choices[4][0] = "Los programas de proceso forman el grueso del sistema operativo ";
 choices[4][1] = "Los programas de control funcionan en modo usuario";
 choices[4][2] = "Los programas de control funcionan en modo kernel";
 choices[4][3] = "Ninguna de las anteriores";
 answers[4] = choices[4][2];
 units[4] = "52";
 comments[4] = "Id Pregunta: 833. ";


//  Id pregunta: 933 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;Qu&eacute; es una tarjeta PCMCIA (tambi&eacute;n conocida PC Card)?:";
 choices[5]= new Array();
 choices[5][0] = "El nombre comercial que recibe la tarjeta de comunicaciones de los m&oacute;dems as&iacute;ncronos";
 choices[5][1] = "Una tarjeta de seguridad que consta de un microchip en el que se ha almacenado informaci&oacute;n referente a la identidad personal del usuario y a las autorizaciones de acceso que tiene al sistema inform&aacute;tico";
 choices[5][2] = "El nombre comercial que reciben las placas de comunicaciones Ethernet que se conectan al puerto paralelo";
 choices[5][3] = "Un conjunto de dispositivos de peque&ntilde;o tama&ntilde;o (ancho similar al de una tarjeta de cr&eacute;dito) y diferentes alturas que pueden contener desde tarjetas de comunicaciones, modems, disco duro, etc";
 answers[5] = choices[5][3];
 units[5] = "47";
 comments[5] = "Id Pregunta: 933. ";


//  Id pregunta: 946 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Cada vez que un ciudadano utilice su tarjeta criptogr&aacute;fica CERES para firmar documentos que debe entregar a la Administraci&oacute;n, se&ntilde;ale qu&eacute; utilizaci&oacute;n estar&aacute; haciendo de las claves de cifrado:";
 choices[6]= new Array();
 choices[6][0] = "Cifrar&aacute; con su clave p&uacute;blica";
 choices[6][1] = "Cifrar&aacute; con la clave p&uacute;blica de la Administraci&oacute;n";
 choices[6][2] = "Cifrara con el certificado ra&iacute;z de la FNMT";
 choices[6][3] = "Cifrar&aacute; con su clave privada";
 answers[6] = choices[6][3];
 units[6] = "74";
 comments[6] = "Id Pregunta: 946. NULL";


//  Id pregunta: 967 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  Cuando empleamos el t&eacute;mino &lsquo;overlay&rsquo; en relaci&oacute;n con los sistemas de  informaci&oacute;n geogr&aacute;fica, nos estamos refiriendo a:";
 choices[7]= new Array();
 choices[7][0] = "Aquella operaci&oacute;n geogr&aacute;fica que se usa cuando el an&aacute;lisis de la informaci&oacute;n requiere que se identifique el &aacute;rea que rodea a cualquiera de las entidades: nodo, l&iacute;nea o superficie.";
 choices[7][1] = "Al trazado de caminos con distintas condiciones de comienzo, intermedias y finales.";
 choices[7][2] = "Aquella operaci&oacute;n espacial que consiste en obtener el pol&iacute;gono intersecci&oacute;n de dos &aacute;reas o pol&iacute;gonos.";
 choices[7][3] = "Este t&eacute;rmino no se empleaa nunca en relaci&oacute;n con los S.I.G.";
 answers[7] = choices[7][2];
 units[7] = "67";
 comments[7] = "Id Pregunta: 967. NULL";


//  Id pregunta: 975 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Dado x [ 4 ] = { 1, 0, 1, 0 },  &iquest;cu&aacute;l ser&aacute; su contenido despu&eacute;s de ejecutar la siguiente instrucci&oacute;n en lenguaje C?: &ldquo;for ( i=0; i&lt;4; i++ ) for ( j=0; j&lt; 3 ; j++ )  x [ i ] = x [ j ] + 1&rdquo;:";
 choices[8]= new Array();
 choices[8][0] = "{ 1, 1, 2, 3 }";
 choices[8][1] = "{ 2, 2, 2, 2 }";
 choices[8][2] = "{ 2, 2, 4, 5 }";
 choices[8][3] = "Otros valores.";
 answers[8] = choices[8][2];
 units[8] = "NULL";
 comments[8] = "Id Pregunta: 975. NULL";


//  Id pregunta: 976 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  De acuerdo al modelo vectorial, &iquest;cu&aacute;l de los siguientes datos no se representa en un sistema de informaci&oacute;n geogr&aacute;fica?:";
 choices[9]= new Array();
 choices[9][0] = "Arcos circulares.";
 choices[9][1] = "Pol&iacute;gonos.";
 choices[9][2] = "L&iacute;neas.";
 choices[9][3] = "Matrices de celdas.";
 answers[9] = choices[9][3];
 units[9] = "67";
 comments[9] = "Id Pregunta: 976. NULL";


//  Id pregunta: 996 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  Disponemos de un multiplexor por divisi&oacute;n en el tiempo (TDM) al que se conectan 8 terminales utilizando enlaces de 1200 bps. &iquest;Cu&aacute;l deber&aacute; ser la velocidad de la l&iacute;nea de salida del multiplexor?:";
 choices[10]= new Array();
 choices[10][0] = "Inferior a 9.600 bps";
 choices[10][1] = "Igual o superior a 9.600 bpos";
 choices[10][2] = "Superior a 19.200 bps";
 choices[10][3] = "Igual a 1.200 bps";
 answers[10] = choices[10][1];
 units[10] = "102";
 comments[10] = "Id Pregunta: 996. ";


//  Id pregunta: 1005 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  El componente central de los sistemas operativos sencillos de proceso por lotes (batch) es el:";
 choices[11]= new Array();
 choices[11][0] = "Monitor";
 choices[11][1] = "Compilador";
 choices[11][2] = "Int&eacute;rprete";
 choices[11][3] = "Proceso en serie";
 answers[11] = choices[11][0];
 units[11] = "52";
 comments[11] = "Id Pregunta: 1005. ";


//  Id pregunta: 1033 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  El middleware es un software que proporciona un conjunto de servicios para conseguir:";
 choices[12]= new Array();
 choices[12][0] = "Independencia respecto al lenguaje de programaci&oacute;n";
 choices[12][1] = "Transparencia de ubicaci&oacute;n de los recursos distribuidos";
 choices[12][2] = "Ubicar los datos a conveniencia del usuario para conseguir en cada caso los mejores rendimientos";
 choices[12][3] = "Reducir la complejidad de los desarrollos";
 answers[12] = choices[12][1];
 units[12] = "50";
 comments[12] = "Id Pregunta: 1033. ";


//  Id pregunta: 1052 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  El servicio de seguridad que garantiza que la informaci&oacute;n no ha sido mutilada o alterada de manera no autorizada se denomina:";
 choices[13]= new Array();
 choices[13][0] = "Autentificaci&oacute;n";
 choices[13][1] = "Confidencialidad";
 choices[13][2] = "Integridad";
 choices[13][3] = "No repudio";
 answers[13] = choices[13][2];
 units[13] = "72";
 comments[13] = "Id Pregunta: 1052. ";


//  Id pregunta: 1061 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  El test de rachas utilizado en criptograf&iacute;a se basa en:";
 choices[14]= new Array();
 choices[14][0] = "El an&aacute;lisis de la independencia de los elementos de un criptograma";
 choices[14][1] = "La b&uacute;squeda de las posibles dependencias o recursiones de un criptograma";
 choices[14][2] = "La b&uacute;squeda de independencia entre s&iacute;mbolos de un criptograma";
 choices[14][3] = "El an&aacute;lisis de la dependencia entre s&iacute;mbolos de un criptograma";
 answers[14] = choices[14][0];
 units[14] = "72";
 comments[14] = "Id Pregunta: 1061. ";


//  Id pregunta: 1068 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  Elija la respuesta falsa. Las siguientes funciones pueden ser llevadas a cabo por un sistema windows 200x:";
 choices[15]= new Array();
 choices[15][0] = "Enrutamiento Ip";
 choices[15][1] = "Servidor de telefonia";
 choices[15][2] = "Servidor NFS";
 choices[15][3] = "Servidor NIS+";
 answers[15] = choices[15][3];
 units[15] = "56";
 comments[15] = "Id Pregunta: 1068. ";


//  Id pregunta: 1092 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  En el sector de los procesadores cient&iacute;ficos:";
 choices[16]= new Array();
 choices[16][0] = "Los modelos de procesadores paralelos utilizan chips convencionales, por lo que resultan siempre m&aacute;s econ&oacute;micos que los superordenadores de gran escala.";
 choices[16][1] = "Se utilizan sistemas operativos propietarios.";
 choices[16][2] = "Se emplea el proceso paralelo masivo (MPP).";
 choices[16][3] = "Los procesadores incorporados de terceras partes proporcionan capacidades de proceso en coma flotante y matricial para entornos de mainframe tradicional.";
 answers[16] = choices[16][3];
 units[16] = "45, 46";
 comments[16] = "Id Pregunta: 1092. ";


//  Id pregunta: 1107 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  En la extracci&oacute;n del conocimiento en la miner&iacute;a de datos, &iquest;qu&eacute; ejemplo de los siguientes no se corresponde con aprendizaje supervisado?";
 choices[17]= new Array();
 choices[17][0] = "Sistemas de clasificaci&oacute;n.";
 choices[17][1] = "Patrones de comportamiento.";
 choices[17][2] = "Sistemas de predicci&oacute;n.";
 choices[17][3] = "Modelado y control.";
 answers[17] = choices[17][1];
 units[17] = "68";
 comments[17] = "Id Pregunta: 1107. ";


//  Id pregunta: 1130 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  En relaci&oacute;n con la teor&iacute;a de la normalizaci&oacute;n, que nos permite asegurar que un esquema relacional cumple unas ciertas propiedades, indicar cu&aacute;l de las siguientes corresponde a la definici&oacute;n de segunda forma normal:";
 choices[18]= new Array();
 choices[18][0] = "Si y s&oacute;lo si todo determinante es una clave candidata";
 choices[18][1] = "Si no existe ning&uacute;n atributo no principal que dependa transitivamente de alguna de las claves de relaci&oacute;n";
 choices[18][2] = "Cada atributo no principal tiene dependencia funcional completa respecto de cada una de las claves";
 choices[18][3] = "Si no existen grupos repetitivos";
 answers[18] = choices[18][2];
 units[18] = "58";
 comments[18] = "Id Pregunta: 1130. ";


//  Id pregunta: 1141 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  En un sistema de informaci&oacute;n geogr&aacute;fica tipo r&aacute;ster, indique cu&aacute;l de las siguientes es una operaci&oacute;n con varias capas:";
 choices[19]= new Array();
 choices[19][0] = "Vectorizaci&oacute;n.";
 choices[19][1] = "Filtrado.";
 choices[19][2] = "Scanning.";
 choices[19][3] = "Overlay.";
 answers[19] = choices[19][3];
 units[19] = "67";
 comments[19] = "Id Pregunta: 1141. NULL";


//  Id pregunta: 1145 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  En un sistema operativo Linux, &iquest;cu&aacute;l es el &uacute;ltimo script que se ejecuta antes de iniciarse el proceso 'login'?:";
 choices[20]= new Array();
 choices[20][0] = "rc.local";
 choices[20][1] = "autoexec.bat";
 choices[20][2] = "rc4";
 choices[20][3] = "prelogin";
 answers[20] = choices[20][0];
 units[20] = "54";
 comments[20] = "Id Pregunta: 1145. NULL";


//  Id pregunta: 1206 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  La arquitectura centralizada tiene como ventaja respecto a la arquitectura distribuida:";
 choices[21]= new Array();
 choices[21][0] = "Que aporta unas posibilidades de trabajo mucho m&aacute;s flexibles y potentes";
 choices[21][1] = "Una m&iacute;nima dependencia de las comunicaciones";
 choices[21][2] = "Una menor complejidad";
 choices[21][3] = "Todas las anteriores";
 answers[21] = choices[21][2];
 units[21] = "50";
 comments[21] = "Id Pregunta: 1206. ";


//  Id pregunta: 1273 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Los documentos &quot;bien formados&quot; en XML:";
 choices[22]= new Array();
 choices[22][0] = "no siguen las reglas de etiquetado de XML pero s&iacute; del DTD";
 choices[22][1] = "siguen las reglas de etiquetado de XML y del DTD";
 choices[22][2] = "no siguen las reglas de etiquetado del DTD pero s&iacute; de XML";
 choices[22][3] = "ninguno de los anteriores";
 answers[22] = choices[22][2];
 units[22] = "69";
 comments[22] = "Id Pregunta: 1273. NULL";


//  Id pregunta: 1295 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  P2P:";
 choices[23]= new Array();
 choices[23][0] = "Puede usarse para transferir archivos";
 choices[23][1] = "Simboliza un tipo de protocolos o sistemas que hacen uso de todos los recursos presentes en una red entre iguales (peers), haciendola parecer al usuario como un &uacute;nico sistema.";
 choices[23][2] = "Puede usarse para computaci&oacute;n distribuida";
 choices[23][3] = "Todas son ciertas";
 answers[23] = choices[23][3];
 units[23] = "50";
 comments[23] = "Id Pregunta: 1295. ";


//  Id pregunta: 1308 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  PGP son una siglas muy conocidad dentro del mundo del cifrado y de la seguridad. &iquest;A qu&eacute; corresponden?:";
 choices[24]= new Array();
 choices[24][0] = "Pretty Good Privacy";
 choices[24][1] = "Personal General Privacity";
 choices[24][2] = "Privacity Generator Program";
 choices[24][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[24] = choices[24][0];
 units[24] = "72";
 comments[24] = "Id Pregunta: 1308. ";


//  Id pregunta: 1327 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Se define como criptosistema asim&eacute;trico lo siguiente:";
 choices[25]= new Array();
 choices[25][0] = "algoritmo basado en clave &uacute;nica";
 choices[25][1] = "algoritmo basado en 2 claves, una de cifrado y otra de descifrado, siendo una p&uacute;blica y otra privada";
 choices[25][2] = "algoritmo basado en 2 claves, una de cifrado y otra de descifrado, siendo ambas privadas";
 choices[25][3] = "Ninguna de las anteriores";
 answers[25] = choices[25][1];
 units[25] = "72";
 comments[25] = "Id Pregunta: 1327. ";


//  Id pregunta: 1413 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  Una de las posibilidades clave de la estrategia .NET de Microsoft es el acceso remoto a objetos utilizando, entre otros protocolos, SOAP sobre HTTP. &iquest;Podr&iacute;a comentar qu&eacute; tecnolog&iacute;a de Microsoft, si bien no sobre HTTP, es la antecesora a .Net en este aspecto?:";
 choices[26]= new Array();
 choices[26][0] = "ODBC";
 choices[26][1] = "Visual Basic";
 choices[26][2] = "DCOM";
 choices[26][3] = "DNA";
 answers[26] = choices[26][2];
 units[26] = "59";
 comments[26] = "Id Pregunta: 1413. ";


//  Id pregunta: 1422 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  Una relaci&oacute;n est&aacute; en primera forma normal si:";
 choices[27]= new Array();
 choices[27][0] = "La clave &uacute;nica permite la dependencia funcional";
 choices[27][1] = "No contiene claves dependientes de otra extranjera";
 choices[27][2] = "La clave extranjera est&aacute; normalizada";
 choices[27][3] = "No contiene grupos repetitivos";
 answers[27] = choices[27][3];
 units[27] = "58";
 comments[27] = "Id Pregunta: 1422. ";


//  Id pregunta: 1468 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  La ley de Fitt, en el contexto del dise&ntilde;o de interfaces de usuario, nos dice que:";
 choices[28]= new Array();
 choices[28][0] = "si algo del interfaz puede dise&ntilde;arse mal, se dise&ntilde;ar&aacute; mal y el usuario lo rechazar&aacute;";
 choices[28][1] = "con el 20% del trabajo se realiza el 80% de la interfaz";
 choices[28][2] = "con el 80% del dise&ntilde;o se ocupa el 20% del trabajo";
 choices[28][3] = "el tiempo en localizar un objetivo visual en el interfaz es una funci&oacute;n de la distancia y el tama&ntilde;o del objetivo";
 answers[28] = choices[28][3];
 units[28] = "52";
 comments[28] = "Id Pregunta: 1468. ";


//  Id pregunta: 1541 AÃ±o de creación de pregunta: 2003-01-01
 questions[29]= "30)  &iquest;Qu&eacute; es NUMA?";
 choices[29]= new Array();
 choices[29][0] = "Non-Uniform Memory Access";
 choices[29][1] = "Un nuevo procesador RISC";
 choices[29][2] = "Un nuevo procesador CISC";
 choices[29][3] = "Tipo de arquitectura de proceso paralelo en el que cada procesador comparte una zona de memoria";
 answers[29] = choices[29][0];
 units[29] = "45";
 comments[29] = "Id Pregunta: 1541. ";


//  Id pregunta: 1551 AÃ±o de creación de pregunta: 2003-01-01
 questions[30]= "31)  &iquest;Cu&aacute;l de estos tipos NO es un tipo de middleware?";
 choices[30]= new Array();
 choices[30][0] = "RPC.";
 choices[30][1] = "X-500.";
 choices[30][2] = "ORB.";
 choices[30][3] = "Conversaciones o di&aacute;logos continuos entre dos o m&aacute;s sistemas sobre una conexi&oacute;n l&oacute;gica.";
 answers[30] = choices[30][1];
 units[30] = "73";
 comments[30] = "Id Pregunta: 1551. ";


//  Id pregunta: 1620 AÃ±o de creación de pregunta: 2003-01-01
 questions[31]= "32)  Que caracter&iacute;stica de Java no es completamente cierta";
 choices[31]= new Array();
 choices[31][0] = "Es independiente del SO";
 choices[31][1] = "Es independiente de la plataforma";
 choices[31][2] = "Es independiente del HW";
 choices[31][3] = "Write once run everywhere ";
 answers[31] = choices[31][3];
 units[31] = "60";
 comments[31] = "Id Pregunta: 1620. El c&oacute;digo puede requerir alguna personalizaci&oacute;n para entorno en que se ejecute.";


//  Id pregunta: 1628 AÃ±o de creación de pregunta: 2003-01-01
 questions[32]= "33)  Si utilizamos los t&eacute;rminos IceWM, Fluxbox, fvwm, nos estamos refiriendo a:";
 choices[32]= new Array();
 choices[32][0] = "Sistemas de ayuda de KDE.";
 choices[32][1] = "Interfaz gr&aacute;fica del usuario.";
 choices[32][2] = "Entorno de escritorio.";
 choices[32][3] = "Administradores de ventanas en LINUX.";
 answers[32] = choices[32][3];
 units[32] = "62";
 comments[32] = "Id Pregunta: 1628. Junta Andaluc&iacute;a";


//  Id pregunta: 1643 AÃ±o de creación de pregunta: 2003-01-01
 questions[33]= "34)  Indicar cu&aacute;l es la afirmaci&oacute;n correcta en torno a las matrices de discos RAID:";
 choices[33]= new Array();
 choices[33][0] = "RAID-0. Tambi&eacute;n llamado modo &quot;stripe'' o distribuci&oacute;n por bandas. Las lecturas y escrituras se realizan en serie en los dispositivos.";
 choices[33][1] = "RAID-1. Se mantiene en un disco un duplicado exacto de la informaci&oacute;n del otro disco.";
 choices[33][2] = "RAID-5. Se guarda la informaci&oacute;n de paridad en un &uacute;nico disco y escribe los datos a los otros discos de forma parecida a un RAID-0.";
 choices[33][3] = "RAID-4. La informaci&oacute;n de paridad se distribuye uniformemente entre los discos participantes,";
 answers[33] = choices[33][1];
 units[33] = "48";
 comments[33] = "Id Pregunta: 1643. ";


//  Id pregunta: 1681 AÃ±o de creación de pregunta: 2004-01-01
 questions[34]= "35)  Respecto a los cuatro tipos de drivers de JDBC, &iquest;Cu&aacute;l de ellos requiere la existencia de un servidor intermedio o middleware?";
 choices[34]= new Array();
 choices[34][0] = "Driver de tipo I";
 choices[34][1] = "Driver de tipo II";
 choices[34][2] = "Driver de tipo III";
 choices[34][3] = "Driver de tipo IV";
 answers[34] = choices[34][2];
 units[34] = "58";
 comments[34] = "Id Pregunta: 1681. ";


//  Id pregunta: 1688 AÃ±o de creación de pregunta: 2004-01-01
 questions[35]= "36)  &iquest;Qu&eacute; es FALSO respecto al NRC?";
 choices[35]= new Array();
 choices[35][0] = "Es un elemento utilizado en la pasarela de pago PISTA";
 choices[35][1] = "Sus siglas significan: N&uacute;mero de Referencia Completo";
 choices[35][2] = "Se compone del n&uacute;mero de justificante m&aacute;s unos caracteres de control";
 choices[35][3] = "Para obtener los caracteres de control se aplica la funci&oacute;n MAC del algoritmo DES a los datos de la operaci&oacute;n, mediante la clave privada de la entidad";
 answers[35] = choices[35][0];
 units[35] = "70";
 comments[35] = "Id Pregunta: 1688. NULL";


//  Id pregunta: 1690 AÃ±o de creación de pregunta: 2004-01-01
 questions[36]= "37)  Seg&uacute;n la Ley de Servicios de la Siciedad d ela Informaci&oacute;n y Comercio electr&oacute;nico, la resistencia a la inspecci&oacute;n de los funcionarios, &iquest;c&oacute;mo est&aacute; considerada?";
 choices[36]= new Array();
 choices[36][0] = "Infracci&oacute;n muy grave";
 choices[36][1] = "Infracci&oacute;n grave";
 choices[36][2] = "Infracci&oacute;n leve";
 choices[36][3] = "No se considera infracci&oacute;n";
 answers[36] = choices[36][1];
 units[36] = "30";
 comments[36] = "Id Pregunta: 1690. Ley 34/2002, art&iacute;culo 38";


//  Id pregunta: 1695 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  En la clasificaci&oacute;n de arquitectura de ordenadores de Flynn, los procesadores vectoriales corresponden a la clase de ordenadores:";
 choices[37]= new Array();
 choices[37][0] = "SISD ( Single Instruction Single Data)";
 choices[37][1] = "SIMD ( Single Instruction Multiple Data)";
 choices[37][2] = "MIMD (Multiple Instruction Multiple Data)";
 choices[37][3] = "MISD ( Multiple Instruction Single Data)";
 answers[37] = choices[37][1];
 units[37] = "45";
 comments[37] = "Id Pregunta: 1695. ";


//  Id pregunta: 1741 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  En Windows 2000/2003, el EFS utiliza un algoritmo de encriptaci&oacute;n basado en:";
 choices[38]= new Array();
 choices[38][0] = "ARS.";
 choices[38][1] = "NFS.";
 choices[38][2] = "DES.";
 choices[38][3] = "SED.";
 answers[38] = choices[38][2];
 units[38] = "56";
 comments[38] = "Id Pregunta: 1741. ";


//  Id pregunta: 1797 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  Se&ntilde;ale qu&eacute; opci&oacute;n contiene los distintos mecanismos de inferencia utilizando la representaci&oacute;n del conocimiento basada en marcos (frameworks):";
 choices[39]= new Array();
 choices[39][0] = "deducci&oacute;n de valores de slots; actualizaci&oacute;n de valores de slots; y herencia de marcos";
 choices[39][1] = "deducci&oacute;n de valores de slots; actualizaci&oacute;n de valores de slots; y equiparaci&oacute;n de marcos";
 choices[39][2] = "deducci&oacute;n de valores de slots; herencia de slots; y equiparaci&oacute;n de marcos";
 choices[39][3] = "reducci&oacute;n de valores de slots; actualizaci&oacute;n de valores de slots; y equiparaci&oacute;n de marcos";
 answers[39] = choices[39][1];
 units[39] = "64";
 comments[39] = "Id Pregunta: 1797. ";


//  Id pregunta: 1820 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  El termino ETL se refiere a: ";
 choices[40]= new Array();
 choices[40][0] = "Extraction, Transfer &amp; Labeling.";
 choices[40][1] = "Explanation, Transformation &amp; Loading.";
 choices[40][2] = "Extraction, Transformation &amp; Loading.";
 choices[40][3] = "Extraction, Transfer &amp; Loading.";
 answers[40] = choices[40][2];
 units[40] = "68";
 comments[40] = "Id Pregunta: 1820. ";


//  Id pregunta: 1822 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  Entre los modelos t&iacute;picos de bases de datos multidimensionales se encuentra:";
 choices[41]= new Array();
 choices[41][0] = "Modelo en estrella.";
 choices[41][1] = "El modelo de copo de nieve.";
 choices[41][2] = "Modelo constelaci&oacute;n.";
 choices[41][3] = "Todos los anteriores son correctos.";
 answers[41] = choices[41][3];
 units[41] = "68";
 comments[41] = "Id Pregunta: 1822. ";


//  Id pregunta: 1924 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  Respecto a los servicios de Directorio Electr&oacute;nico, la norma X-500 de la UIT-T define cuatro tipos de clases de objeto de acuerdo a su funcionalidad:";
 choices[42]= new Array();
 choices[42][0] = "Auxiliar, Estructural, Simplificada, Alias";
 choices[42][1] = "Estructural, Simplificada, Auxiliar, Alias";
 choices[42][2] = "Abstracta, Esquem&aacute;tica, Estructural, Alias";
 choices[42][3] = "Abstracta, Estructural, Auxiliar, Alias";
 answers[42] = choices[42][3];
 units[42] = "73";
 comments[42] = "Id Pregunta: 1924. ";


//  Id pregunta: 3084 AÃ±o de creación de pregunta: 2002-01-01
 questions[43]= "44)  Los web services:";
 choices[43]= new Array();
 choices[43][0] = "Permiten la ejecuci&oacute;n de procedimientos remotos y devoluci&oacute;n de los resultados a trav&eacute;s de redes ip, basandose en el protocolo HTTP";
 choices[43][1] = "Permiten a los usuarios devolver cualquier tipo de informaci&oacute;n con un navegador y el protocolo HTTP";
 choices[43][2] = "Son una mera especificaci&oacute;n y a&uacute;n no se han puesto en pr&aacute;ctica";
 choices[43][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[43] = choices[43][0];
 units[43] = "51";
 comments[43] = "Id Pregunta: 3084.  Nuevo tema: Arquitectura SOA";


//  Id pregunta: 4281 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  Los sistemas conocidos como OLTP son utilizados para:";
 choices[44]= new Array();
 choices[44][0] = "Hacer consultas complejas sobre distintas Bases de Datos que se han consolidado en una central.";
 choices[44][1] = "Poder realizar informes a la Direcci&oacute;n.";
 choices[44][2] = "Son sistemas t&iacute;picamente utilizados como Sistemas de Informaci&oacute;n Geogr&aacute;fica.";
 choices[44][3] = "Captura de datos a partir de las operaciones diarias de una organizaci&oacute;n.";
 answers[44] = choices[44][3];
 units[44] = "68";
 comments[44] = "Id Pregunta: 4281. ";


//  Id pregunta: 4366 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  La etiqueta en HTML para indicar el comienzo de una celda con datos en una tabla es:";
 choices[45]= new Array();
 choices[45][0] = "&lt;table&gt;";
 choices[45][1] = "&lt;tr&gt;";
 choices[45][2] = "&lt;th&gt;";
 choices[45][3] = "&lt;td&gt;";
 answers[45] = choices[45][3];
 units[45] = "69";
 comments[45] = "Id Pregunta: 4366. NULL";


//  Id pregunta: 4396 AÃ±o de creación de pregunta: 2009-01-01
 questions[46]= "47)  En GNU/Linux se utilizan diversos programas para la gesti&oacute;n de versiones, &iquest;cu&aacute;l de los siguientes no es uno de ellos?";
 choices[46]= new Array();
 choices[46][0] = "mercurial";
 choices[46][1] = "ksafe";
 choices[46][2] = "git";
 choices[46][3] = "bazaar";
 answers[46] = choices[46][1];
 units[46] = "54";
 comments[46] = "Id Pregunta: 4396. ";


//  Id pregunta: 4464 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  Indique cu&aacute;l de las siguientes afirmaciones sobre una base de datos OLAP es cierta:";
 choices[47]= new Array();
 choices[47][0] = "Cada datamart podr&aacute; tener unas medidas y dimensiones propias y diferentes a los dem&aacute;s.";
 choices[47][1] = "Todos los datamart deber&aacute;n tener las mismas medidas y dimensiones.";
 choices[47][2] = "Los datamart no tienen dimensiones.";
 choices[47][3] = "La dimensi&oacute;n de los datamart debe ser &uacute;nica, aunque las medidas pueden variar de unos datamart a otros.";
 answers[47] = choices[47][0];
 units[47] = "68";
 comments[47] = "Id Pregunta: 4464. ";


//  Id pregunta: 4793 AÃ±o de creación de pregunta: 2007-01-01
 questions[48]= "49)  Dada una jerarqu&iacute;a total con solapamiento en el modelo E/R (Entidad / Relaci&oacute;n), &iquest;cu&aacute;l de las siguientesafirmaciones es cierta?";
 choices[48]= new Array();
 choices[48][0] = "No es necesario que toda ocurrencia del supertipo se encuentre en alguno de los subtipos";
 choices[48][1] = "Cuando se borra una ocurrencia de un subtipo hay que borrarla tambi&eacute;n del supertipo";
 choices[48][2] = "Cuando se borra una ocurrencia de un subtipo se borra del supertipo si s&oacute;lo pertenece a ese subtipo";
 choices[48][3] = "Si se borra una ocurrencia del supertipo no siempre hay que eliminarla de los subtipos a los que pertenece";
 answers[48] = choices[48][2];
 units[48] = "80";
 comments[48] = "Id Pregunta: 4793. ";


//  Id pregunta: 4840 AÃ±o de creación de pregunta: 2007-01-01
 questions[49]= "50)  &iquest;Cu&aacute;l de las siguientes afirmaciones en relaci&oacute;n a la firma digital es cierta?";
 choices[49]= new Array();
 choices[49][0] = "Ofrece plenas garant&iacute;as de la integridad, confidencialidad y no repudio del documento firmado";
 choices[49][1] = "Se puede conseguir mediante protocolos de cifrado de clave secreta";
 choices[49][2] = "El DSS (Digital Signature Standard) est&aacute; adoptado como una norma por ISO/IEC (International StandardsOrganization / International Electrotechnical Commission)";
 choices[49][3] = "La firma ciega (Blind signature) se obtiene firmando directamente el correspondiente mensaje, en vez delresumen de &eacute;ste";
 answers[49] = choices[49][1];
 units[49] = "74";
 comments[49] = "Id Pregunta: 4840. ";


//  Id pregunta: 4963 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  El lenguaje de control de trabajos JCL se utiliza para:";
 choices[50]= new Array();
 choices[50][0] = "Definir las sentencias de control de los procedimientos almacenados en una tabla de base de datos.";
 choices[50][1] = "Definir listas de acceso de usuarios a un sistema de informaci&oacute;n.";
 choices[50][2] = "Indicar al sistema operativo como arrancar un programa por lotes y qu&eacute; recursos va a necesitar.";
 choices[50][3] = "Controlar las excepciones en el lenguaje de programaci&oacute;n Java.";
 answers[50] = choices[50][2];
 units[50] = "";
 comments[50] = "Id Pregunta: 4963. Examen TIC B 2007";


//  Id pregunta: 5008 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  Indique cu&aacute;l de las siguientes afirmaciones sobre JDBC es incorrecta:";
 choices[51]= new Array();
 choices[51][0] = "Es independiente del lenguaje de programaci&oacute;n";
 choices[51][1] = "Es independiente del sistema operativo";
 choices[51][2] = "Es independiente de la base de datos";
 choices[51][3] = "Es un tipo de API";
 answers[51] = choices[51][0];
 units[51] = "58";
 comments[51] = "Id Pregunta: 5008. Examen TIC A 2007";


//  Id pregunta: 5424 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  En la arquitectura ANSI/X3 SPARC a tres niveles de BD, indicar cu&aacute;l de los esquemas citados acontinuaci&oacute;n no corresponde a dicha arquitectura";
 choices[52]= new Array();
 choices[52][0] = "Esquema externo";
 choices[52][1] = "Esquema legal";
 choices[52][2] = "Esquema conceptual";
 choices[52][3] = "Esquema interno";
 answers[52] = choices[52][1];
 units[52] = "57";
 comments[52] = "Id Pregunta: 5424. Castilla y Le&oacute;n";


//  Id pregunta: 5495 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  Los archivos EAR, seg&uacute;n la tecnolog&iacute;a Java EE:";
 choices[53]= new Array();
 choices[53][0] = "C&oacute;mprime s&oacute;lo archivos .class ";
 choices[53][1] = "Son un tipo de archivo JAR";
 choices[53][2] = "No existen tales archivos. S&oacute;lo hay archivos WAR";
 choices[53][3] = "Es un empaquetado de archivos XML";
 answers[53] = choices[53][1];
 units[53] = "60";
 comments[53] = "Id Pregunta: 5495. NULL";


//  Id pregunta: 5635 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  La velocidad de transmisi&oacute;n seg&uacute;n la Recomendaci&oacute;n V.34 de la UIT-T es:";
 choices[54]= new Array();
 choices[54][0] = "33,2 Kbps";
 choices[54][1] = "33,4 Kbps";
 choices[54][2] = "33,6 Kbps";
 choices[54][3] = "33,8 Kbps";
 answers[54] = choices[54][2];
 units[54] = "47";
 comments[54] = "Id Pregunta: 5635. ";


//  Id pregunta: 5726 AÃ±o de creación de pregunta: 2009-01-01
 questions[55]= "56)  Indique la afirmaci&oacute;n correcta. Seg&uacute;n M&eacute;trica v 3, en las Relaciones 1:N se propaga el identificador de la entidad de cardinalidad m&aacute;xima 1 a la que es N, teniendo en cuenta que:";
 choices[55]= new Array();
 choices[55][0] = "Si la relaci&oacute;n es de asociaci&oacute;n, la clave propagada es clave ajena en la tabla a la que se ha propagado.";
 choices[55][1] = "Si la relaci&oacute;n es de asociaci&oacute;n, la clave propagada es la clave primaria en la tabla a la que se ha propagado.";
 choices[55][2] = "Si la relaci&oacute;n es de dependencia, la clave propagada es la clave ajena.";
 choices[55][3] = "Si la relaci&oacute;n es de dependencia la clave propagada es la clave primaria.";
 answers[55] = choices[55][0];
 units[55] = "58";
 comments[55] = "Id Pregunta: 5726. MAP 2008 A2";


//  Id pregunta: 5778 AÃ±o de creación de pregunta: 2009-01-01
 questions[56]= "57)  En referencia a la arquitectura .NET, seleccione cu&aacute;l de las expresiones siguientes es FALSA:";
 choices[56]= new Array();
 choices[56][0] = "Las versiones 1.0, 1.1 y 2.0. de .NET Framework son totalmente independientes unas de otras, por lo que se pueden instalar en cualquier orden";
 choices[56][1] = "Cuando las versiones 1.0, 1.1 y 2.0 est&aacute;n en el mismo equipo, comparten un &uacute;nico Common Language Runtime";
 choices[56][2] = ".NET Framework 4.5 es la &uacute;ltima versi&oacute;n disponible del framework .NET";
 choices[56][3] = "Common Language Specification (CLS) es un conjunto de reglas pensado para promover la interoperabilidad entre los lenguajes";
 answers[56] = choices[56][1];
 units[56] = "59";
 comments[56] = "Id Pregunta: 5778. MAP 2008 A1";


//  Id pregunta: 5883 AÃ±o de creación de pregunta: 2009-01-01
 questions[57]= "58)  &iquest;Qu&eacute; es WebDAV?";
 choices[57]= new Array();
 choices[57][0] = "Protocolo de acceso y edici&oacute;n de carpetas mediante HTTP";
 choices[57][1] = "Sistema web de creaci&oacute;n de formularios";
 choices[57][2] = "Sistema web seguro de compartici&oacute;n de procesamiento";
 choices[57][3] = "Sistema web de mensajer&iacute;a y alertas";
 answers[57] = choices[57][0];
 units[57] = "73";
 comments[57] = "Id Pregunta: 5883. MAP 2008 A1";


//  Id pregunta: 6111 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  &iquest;Cu&aacute;les de los siguientes son los perfiles WS-I?:";
 choices[58]= new Array();
 choices[58][0] = "WS-I Basic Profile, WS-I Basic Infrastructure Profile, WS-I Basic Security Profile (BSP), WS-I Reliable Secure Profile.";
 choices[58][1] = "WS-I Basic Profile, WS-I Basic Infrastructure Profile (BIP) y WS-I Reliable Secure Profile.";
 choices[58][2] = "WS-I Basic Infrastructure Profile (BIP), WS-I Basic Security Profile (BSP) y  WS-I Reliable Secure Profile.";
 choices[58][3] = "WS-I Basic Profile, WS-I Basic Security Profile (BSP) y WS-I Reliable Secure Profile.";
 answers[58] = choices[58][3];
 units[58] = "51";
 comments[58] = "Id Pregunta: 6111. NULL";


//  Id pregunta: 6451 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  &iquest;Cu&aacute;l de los siguientes es un JFS (Journaling File System)?";
 choices[59]= new Array();
 choices[59][0] = "FAT16";
 choices[59][1] = "ReiserFS";
 choices[59][2] = "ext32";
 choices[59][3] = "Linux extended";
 answers[59] = choices[59][1];
 units[59] = "52";
 comments[59] = "Id Pregunta: 6451. Castilla La Mancha 2009";


//  Id pregunta: 6452 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  &iquest;C&oacute;mo se denomina la herramienta de presentaciones de Open Office 3.0?";
 choices[60]= new Array();
 choices[60][0] = "DRAW";
 choices[60][1] = "IMPRESS";
 choices[60][2] = "POWEPOINT";
 choices[60][3] = "IMAGE";
 answers[60] = choices[60][1];
 units[60] = "62";
 comments[60] = "Id Pregunta: 6452. Castilla La Mancha 2009";


//  Id pregunta: 6499 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  GPL es el acr&oacute;nimo de:";
 choices[61]= new Array();
 choices[61][0] = "GNU Public License";
 choices[61][1] = "Geek Public License";
 choices[61][2] = "General Propietary License";
 choices[61][3] = "General Public License";
 answers[61] = choices[61][3];
 units[61] = "61";
 comments[61] = "Id Pregunta: 6499. ";


//  Id pregunta: 6519 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  NO es un framework de desarrollo en Java";
 choices[62]= new Array();
 choices[62][0] = "JavaServer Faces";
 choices[62][1] = "Spring";
 choices[62][2] = "Ruby on Rails";
 choices[62][3] = "Maverick ";
 answers[62] = choices[62][2];
 units[62] = "116";
 comments[62] = "Id Pregunta: 6519. NULL";


//  Id pregunta: 6521 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  JME es la plataforma dirigida al desarrollo de aplicaciones para dispositivos como tel&eacute;fonos m&oacute;viles o PDAs, y es el acr&oacute;nimo de:";
 choices[63]= new Array();
 choices[63][0] = "Java Mobile Edition";
 choices[63][1] = "Java Micro Edition";
 choices[63][2] = "Java Mobility Edition";
 choices[63][3] = "Java Mobile Enterprise";
 answers[63] = choices[63][1];
 units[63] = "116";
 comments[63] = "Id Pregunta: 6521. NULL";


//  Id pregunta: 6581 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  &iquest;Cu&aacute;l es el Reglamento de desarrollo de la LOPD actualmente vigente?";
 choices[64]= new Array();
 choices[64][0] = "RD 994/1999";
 choices[64][1] = "RD 1720/2007";
 choices[64][2] = "A y B son correctas";
 choices[64][3] = "A y B son incorrectas";
 answers[64] = choices[64][1];
 units[64] = "29";
 comments[64] = "Id Pregunta: 6581. NULL";


//  Id pregunta: 7162 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  La copia de seguridad incremental en Linux:";
 choices[65]= new Array();
 choices[65][0] = "Consiste en copiar todos los elementos que han sido modificados desde la &uacute;ltima copia de seguridad completa o incremental";
 choices[65][1] = "Se centra espec&iacute;ficamente en las carpetas y archivos que han sido modificados desde la &uacute;ltima copia de seguridad completa";
 choices[65][2] = "Consiste en crear una copia de seguridad de todas las carpetas y archivos que se deseen copiar";
 choices[65][3] = "Es implementada habitualmente mediante el comando ntbackup";
 answers[65] = choices[65][0];
 units[65] = "53";
 comments[65] = "Id Pregunta: 7162. Examen TIC B 2009";


//  Id pregunta: 7172 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  En un documento XML, la parte donde se definen los enlaces a otros documentos, a c&oacute;digo ejecutable, etc. Es:";
 choices[66]= new Array();
 choices[66][0] = "DTD";
 choices[66][1] = "XSL";
 choices[66][2] = "XLL";
 choices[66][3] = "DHTML";
 answers[66] = choices[66][2];
 units[66] = "69";
 comments[66] = "Id Pregunta: 7172. Examen TIC B 2009";


//  Id pregunta: 7177 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  El n&uacute;mero m&aacute;ximo de certificados que se pueden almacenar en una  tarjeta criptogr&aacute;fica CERES es:";
 choices[67]= new Array();
 choices[67][0] = "4";
 choices[67][1] = "5";
 choices[67][2] = "10";
 choices[67][3] = "7";
 answers[67] = choices[67][2];
 units[67] = "74";
 comments[67] = "Id Pregunta: 7177. Examen TIC B 2009. Seg&uacute;n Proyecto CERES actualizado al a&ntilde;o 2015";


//  Id pregunta: 7325 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones no es correcta respecto a 'facturae':";
 choices[68]= new Array();
 choices[68][0] = "Es el formato a utilizar para la facturaci&oacute;n electr&oacute;nica a las Administraciones P&uacute;blicas";
 choices[68][1] = "Se trata de un formato basado en el est&aacute;ndar XML (Extensible Markup Language)";
 choices[68][2] = "Puede hacer uso de firma electr&oacute;nica avanzada para garantizar la autenticidad e integridad";
 choices[68][3] = "No permite el uso de XADES para la firma electr&oacute;nica avanzada";
 answers[68] = choices[68][3];
 units[68] = "70";
 comments[68] = "Id Pregunta: 7325. NULL";


//  Id pregunta: 8208 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  En una tabla de una base de datos relacional:";
 choices[69]= new Array();
 choices[69][0] = "La definici&oacute;n de un mayor n&uacute;mero de &iacute;ndices siempre supone mejora en el rendimiento de las operaciones de consulta.";
 choices[69][1] = "La definici&oacute;n de un mayor n&uacute;mero de &iacute;ndices siempre mejora el rendimiento de las operaciones de inserci&oacute;n.";
 choices[69][2] = "Nunca deben incluirse en los &iacute;ndices atributos que no forman parte de la cl&aacute;usula WHERE.";
 choices[69][3] = "Si las filas de un &iacute;ndice contienen todas las columnas referenciadas en el SELECT, se elimina la necesidad de acceder ala tabla.";
 answers[69] = choices[69][3];
 units[69] = "57, 58";
 comments[69] = "Id Pregunta: 8208. Examen TIC A1 2010";


//  Id pregunta: 8273 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  En general, al pasar una relaci&oacute;n 1:N con atributos propios, del modelo entidad - relaci&oacute;n al modelo relacional:";
 choices[70]= new Array();
 choices[70][0] = "Se crea una nueva tabla cuya clave principal es el atributo de la relaci&oacute;n.";
 choices[70][1] = "Se crea una nueva tabla cuya clave es la concatenaci&oacute;n de las claves de las dos entidades y tiene un campo adicional para el atributo de la relaci&oacute;n.";
 choices[70][2] = "La clave de la entidad que participa con cardinalidad N y el atributo de la relaci&oacute;n, pasan a la tabla de cardinalidad 1.";
 choices[70][3] = "La clave de la entidad que participa con cardinalidad 1 y el atributo de la relaci&oacute;n, pasan a la tabla de cardinalidad N.";
 answers[70] = choices[70][3];
 units[70] = "58";
 comments[70] = "Id Pregunta: 8273. Examen TIC A1 2010";


//  Id pregunta: 8345 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  Dado un grafo G = (V, E) donde V es el conjunto de v&eacute;rtices y E es conjunto de aristas. Diremos que es hamiltoniano si:";
 choices[71]= new Array();
 choices[71][0] = "Todos los v&eacute;rtices tienen el mismo grado.";
 choices[71][1] = "Contiene un ciclo que pasa por todos los v&eacute;rtices del grafo.";
 choices[71][2] = "No contiene ciclos.";
 choices[71][3] = "Es conexo y contiene un ciclo.";
 answers[71] = choices[71][1];
 units[71] = "64";
 comments[71] = "Id Pregunta: 8345. Examen TIC A2 2010";


//  Id pregunta: 8753 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  Los actuales dise&ntilde;os l&oacute;gicos de los chipset para la arquitectura x86 se estructuran en dos bloques funcionales: el Northbridge y el Southbridge. Indique cu&aacute;l de los siguientes subsistemas son competencia del Northbridge.";
 choices[72]= new Array();
 choices[72][0] = "Acceso a la RAM y controlador AGP.";
 choices[72][1] = "Controladores IDE y SATA";
 choices[72][2] = "Controladores USB y FIREWIRE";
 choices[72][3] = "Super I/O (Puerto serie, paralelo), audio y LAN";
 answers[72] = choices[72][0];
 units[72] = "47";
 comments[72] = "Id Pregunta: 8753. Examen TIC A2 2010 interna";


//  Id pregunta: 8801 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  Con relaci&oacute;n a la programaci&oacute;n en java, &iquest;como se denomina el paquete que comprende una serie de clases que permiten crear y organizar ventanas, implementar componentes gr&aacute;ficas de la interfaz, mediante eventos, dibujar textos y gr&aacute;ficos, procesar im&aacute;genes y acceder a cada sistema nativo de ventanas?";
 choices[73]= new Array();
 choices[73][0] = "WT (Window Toolkit)";
 choices[73][1] = "AWT (Abstract Window Toolkit)";
 choices[73][2] = "JWS (Java Window Set)";
 choices[73][3] = "WS (Windows Set)";
 answers[73] = choices[73][1];
 units[73] = "60";
 comments[73] = "Id Pregunta: 8801. Examen UPM A2 2011";


//  Id pregunta: 8861 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  El lenguaje Java Script:";
 choices[74]= new Array();
 choices[74][0] = "Permite escribir c&oacute;digo que se compila en el servidor para su ejecuci&oacute;n en el cliente";
 choices[74][1] = "Es interpretado por el navegador cuando se abre un fichero virtual en el que se encuentra c&oacute;digo javascript embebido";
 choices[74][2] = "S&oacute;lo puede ser compilado si el cliente tiene instalada una m&aacute;quina virtual java (JVM)";
 choices[74][3] = "Solamente puede ser compilado si el servidor tiene instalada una m&aacute;quina virtual java (JVM)";
 answers[74] = choices[74][1];
 units[74] = "69";
 comments[74] = "Id Pregunta: 8861. Analista Ayto. Madrid 2010";


//  Id pregunta: 8900 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  Se&ntilde;ale la respuesta correcta";
 choices[75]= new Array();
 choices[75][0] = "XML fue dise&ntilde;ado para transportar datos, no para mostrarlos";
 choices[75][1] = "Las etiquetas de XML son todas predefinidas";
 choices[75][2] = "XML es una recomendaci&oacute;n del UIT";
 choices[75][3] = "XML significa Extralarge Markup Language";
 answers[75] = choices[75][0];
 units[75] = "69";
 comments[75] = "Id Pregunta: 8900. NULL";


//  Id pregunta: 8958 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  &iquest;Cu&aacute;l de los siguientes conceptos no aplica a la Ingenier&iacute;a del conocimiento?";
 choices[76]= new Array();
 choices[76][0] = "No utiliza enfoques algor&iacute;tmicos";
 choices[76][1] = "Utiliza una estructura eminentemente procedural";
 choices[76][2] = "Utiliza una estructura eminentemente declarativa";
 choices[76][3] = "Resuelve problemas heur&iacute;sticos";
 answers[76] = choices[76][1];
 units[76] = "63";
 comments[76] = "Id Pregunta: 8958. ";


//  Id pregunta: 8984 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  &iquest;Cu&aacute;l de las siguientes no es una edici&oacute;n de Windows 7?";
 choices[77]= new Array();
 choices[77][0] = "Starter";
 choices[77][1] = "Home Premium";
 choices[77][2] = "Ultimate";
 choices[77][3] = "Business";
 answers[77] = choices[77][3];
 units[77] = "56";
 comments[77] = "Id Pregunta: 8984. ";


//  Id pregunta: 8986 AÃ±o de creación de pregunta: 2011-01-01
 questions[78]= "79)  &iquest;Cu&aacute;l de las siguientes es una recomendaci&oacute;n del formato Facturae";
 choices[78]= new Array();
 choices[78][0] = "Formato de firma XMLDSig ENVELOPED";
 choices[78][1] = "Algoritmo de canonicalizaci&oacute;n C14N";
 choices[78][2] = "Algoritmo de firma RSA sobre SHA1";
 choices[78][3] = "Todas las anteriores";
 answers[78] = choices[78][3];
 units[78] = "70";
 comments[78] = "Id Pregunta: 8986. NULL";


//  Id pregunta: 9096 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  &iquest;Cu&aacute;l no es un derecho de explotaci&oacute;n de un programa de ordenador?";
 choices[79]= new Array();
 choices[79][0] = "La reproducci&oacute;n del programa de ordenador.";
 choices[79][1] = "La transformaci&oacute;n del programa de ordenador.";
 choices[79][2] = "La distribuci&oacute;n p&uacute;blica del programa de ordenador.";
 choices[79][3] = "Todas las anteriores son verdaderas.";
 answers[79] = choices[79][3];
 units[79] = "36";
 comments[79] = "Id Pregunta: 9096. ";


//  Id pregunta: 9216 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  Para extender las redes SAN qu&eacute; tipo de interconexiones se suelen utilizar:";
 choices[80]= new Array();
 choices[80][0] = "Sonet/SDH, WDM, ATM";
 choices[80][1] = "Sonet/SDH, WDM, ATM, iSCSI, FCIP, iFCP";
 choices[80][2] = "CWDM, DWDM, ATM, iSCSCI, FCIP, iFCP";
 choices[80][3] = "Sonet/SDN, WDM, ATM, iSCSI";
 answers[80] = choices[80][1];
 units[80] = "48";
 comments[80] = "Id Pregunta: 9216. ";


//  Id pregunta: 9217 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  &iquest;Qu&eacute; es iSCSI?";
 choices[81]= new Array();
 choices[81][0] = "Protocolo que permite establecer t&uacute;neles TCP/IP por el que se env&iacute;an tramas FC sin modificar.";
 choices[81][1] = "No transporta las tramas FC entre sedes remotas sino que transporta s&oacute;lo las capas superiores.";
 choices[81][2] = "Utiliza TCP/IP como red de transporte utilizando la misma infraestructura que se utilice para redes de comunicaciones.";
 choices[81][3] = "Ninguna es correcta.";
 answers[81] = choices[81][2];
 units[81] = "48";
 comments[81] = "Id Pregunta: 9217. ";


//  Id pregunta: 9220 AÃ±o de creación de pregunta: 2013-01-01
 questions[82]= "83)  &iquest;Qu&eacute; es Zoning?";
 choices[82]= new Array();
 choices[82][0] = "Es un concepto perteneciente a las redes SAN de FC";
 choices[82][1] = "Cada zona se comporta como si en la red SAN solo existienen los dispositivos que forman parte de ella.";
 choices[82][2] = "El servidor y la cabina debe estar en la misma zona y adicionalmente la cabina debe permitir el acceso del servicio a dicha LUN.";
 choices[82][3] = "Todas son v&aacute;lidas";
 answers[82] = choices[82][3];
 units[82] = "48";
 comments[82] = "Id Pregunta: 9220. ";


//  Id pregunta: 9595 AÃ±o de creación de pregunta: 2013-01-01
 questions[83]= "84)  Para el concepto de struts, indique cu&aacute;l de las siguientes opciones es correcta:";
 choices[83]= new Array();
 choices[83][0] = "Struts es un framework que se basa en el patr&oacute;n MVC (Model View Controller) ";
 choices[83][1] = "Struts es un framework que se basa en la tecnolog&iacute;a JSF (Java Server Faces)";
 choices[83][2] = "Struts es un patr&oacute;n de dise&ntilde;o para plataformas .NET";
 choices[83][3] = "Struts es un patr&oacute;n de dise&ntilde;o para plataformas JEE ";
 answers[83] = choices[83][0];
 units[83] = "60";
 comments[83] = "Id Pregunta: 9595. Xunta Libre 2011";


//  Id pregunta: 9611 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  &iquest;Qu&eacute; es el FSQL?";
 choices[84]= new Array();
 choices[84][0] = "Una versi&oacute;n de SQL que se usa en la ingenier&iacute;a hacia adelante.";
 choices[84][1] = "Una versi&oacute;n de SQL que se usa para l&oacute;gica difusa";
 choices[84][2] = "Una versi&oacute;n de SQL que se usa para memorias asociativas";
 choices[84][3] = "Una versi&oacute;n de SQL que se usa en sistemas distribuidos";
 answers[84] = choices[84][1];
 units[84] = "58";
 comments[84] = "Id Pregunta: 9611. NULL";


//  Id pregunta: 9692 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Un problema del modelo dimensional es:";
 choices[85]= new Array();
 choices[85][0] = "Data Expression.";
 choices[85][1] = "Data Complexity.";
 choices[85][2] = "Data Sparsity.";
 choices[85][3] = "Data Compression.";
 answers[85] = choices[85][2];
 units[85] = "68";
 comments[85] = "Id Pregunta: 9692. ";


//  Id pregunta: 10164 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  &iquest;En qu&eacute; consiste la regla de Independencia de Integridad establecida por Codd?";
 choices[86]= new Array();
 choices[86][0] = "Los programas de aplicaci&oacute;n y actividades del terminal permanecer&aacute;n inalterados a nivel l&oacute;gico cuando se realicen cambios sobre las tablas base que preservan la informaci&oacute;n";
 choices[86][1] = "Los limitantes de integridad han de poder ser definidos utilizando el sublenguaje de datos relacional y almacenables en el cat&aacute;logo din&aacute;mico";
 choices[86][2] = "La independencia de integridad requiere la definici&oacute;n de claves ajenas con la opci&oacute;n &quot;CASCADE&quot;, a fin que se propaguen a la clave ajena los cambios realizados sobre la clave primaria referenciada";
 choices[86][3] = "Si en una relaci&oacute;n hay una clave ajena, sus valores deben coincidir con los valores de la clave primaria a que se refiere, o deben ser completamente nulos";
 answers[86] = choices[86][1];
 units[86] = "58";
 comments[86] = "Id Pregunta: 10164. ";


//  Id pregunta: 10171 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  En el lenguaje SQL, la funci&oacute;n de agregado COUNT, aplicada sobre una columna, contabiliza&hellip;";
 choices[87]= new Array();
 choices[87][0] = "N&ordm; de filas recuperadas por la consulta ";
 choices[87][1] = "N&ordm; de filas recuperadas por la consulta, exceptuando aquellas en que la columna referenciada tenga valor nulo";
 choices[87][2] = "N&ordm; de filas recuperadas por la consulta, incluyendo valores duplicados o nulos en la columna";
 choices[87][3] = "Si la columna sobre la que se aplica tiene valor nulo en todas las filas, la funci&oacute;n COUNT devolver&aacute; &quot;nulo&quot;";
 answers[87] = choices[87][1];
 units[87] = "58";
 comments[87] = "Id Pregunta: 10171. ";


//  Id pregunta: 10274 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre comunicaci&oacute;n entre agentes inteligentes  mediante sistema de pizarra es cierta?";
 choices[88]= new Array();
 choices[88][0] = "Los agentes reciben se&ntilde;ales de la pizarra cuando &eacute;sta se actualiza";
 choices[88][1] = "Cuando un agente puede contribuir a la soluci&oacute;n del problema lo 'escribe' inmediatamente en la pizarra";
 choices[88][2] = "Ambas son ciertas";
 choices[88][3] = "Ninguna es cierta";
 answers[88] = choices[88][3];
 units[88] = "63";
 comments[88] = "Id Pregunta: 10274. NULL";


//  Id pregunta: 10612 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  El DNIe 3.0:";
 choices[89]= new Array();
 choices[89][0] = "Permite la lectura sin PIN del certificado de firma.";
 choices[89][1] = "Incorpora tecnolog&iacute;a de lectura sin contacto.";
 choices[89][2] = "Reduce la vigencia de los certificados de identificaci&oacute;n y firma a 5 a&ntilde;os.";
 choices[89][3] = "Todas las anteriores.";
 answers[89] = choices[89][1];
 units[89] = "74";
 comments[89] = "Id Pregunta: 10612. A. Permite la lectura sin PIN del certificado de identificaci&oacute;n, no de firma.C. Amplia la vigencia de los certificados (antes 30 meses).";


//  Id pregunta: 10627 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  &iquest;Qu&eacute; tres niveles debe tener una base de datos seg&uacute;n la arquitectura propuesta por la normativa ANSI?";
 choices[90]= new Array();
 choices[90][0] = "Abstracto, concreto y l&oacute;gico.";
 choices[90][1] = "L&oacute;gico, sem&aacute;ntico y conceptual.";
 choices[90][2] = "Externo, interno y conceptual.";
 choices[90][3] = "Externo, interno y l&oacute;gico.";
 answers[90] = choices[90][2];
 units[90] = "57";
 comments[90] = "Id Pregunta: 10627. ";


//  Id pregunta: 10774 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Seg&uacute;n se establece en la pol&iacute;tica de certificaci&oacute;n de la DGP para el DNI electr&oacute;nico (DNIe) en lo relativo a las autoridades de certificaci&oacute;n (AC) ra&iacute;z y subordinadas, &iquest;cu&aacute;l es el tama&ntilde;o de esas claves?";
 choices[91]= new Array();
 choices[91][0] = "El tama&ntilde;o de las claves de la AC Ra&iacute;z es de 2048 bits y el de claves de las AC subordinadas ser&aacute; de 4096 bits.";
 choices[91][1] = "Las claves de la AC Ra&iacute;z y de las AC subordinadas ser&aacute;n de 2048 bits.";
 choices[91][2] = "El tama&ntilde;o de las claves es: 4096 bits para la AC Ra&iacute;z y 2048 bits para las AC Subordinadas.";
 choices[91][3] = "El tama&ntilde;o de las claves de la AC Ra&iacute;z es 8192 bits para la ra&iacute;z y 4096 bits para las AC subordinadas.";
 answers[91] = choices[91][2];
 units[91] = "74";
 comments[91] = "Id Pregunta: 10774. Examen GSI 2014";


//  Id pregunta: 10904 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;A qu&eacute; se refiere el t&eacute;rmino mashup?";
 choices[92]= new Array();
 choices[92][0] = "Plataforma de desarrollo Web que define la base de datos (MySQL), el servidor Web (Apache), el sistema operativo (Solaris), y el lenguaje de programaci&oacute;n (Haskell).";
 choices[92][1] = "Peque&ntilde;a secci&oacute;n de la ventana del navegador que muestra un mensaje de texto que se desplaza a trav&eacute;s de la pantalla.";
 choices[92][2] = "Conjunto de t&eacute;cnicas y recomendaciones para conseguir que una p&aacute;gina web aparezca en los primeros resultados de los buscadores para unas determinadas palabras clave (keywords).";
 choices[92][3] = "Aplicaciones web que combinan datos y contenido de distintas fuentes para dar una experiencia de usuario integrada.";
 answers[92] = choices[92][3];
 units[92] = "0";
 comments[92] = "Id Pregunta: 10904. Examen GSI 2014";


//  Id pregunta: 10956 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Un agente inteligente es un programa inform&aacute;tico que:";
 choices[93]= new Array();
 choices[93][0] = "Por encargo de un usuario u otro programa realiza sugerencias determin&iacute;sticas predeterminadas.";
 choices[93][1] = "Por encargo de un usuario realiza sugerencias que requieren cierto grado de aprendizaje, sin llegar a ejecutar tareas.";
 choices[93][2] = "Por encargo de un usuario u otro programa, realiza de forma aut&oacute;noma tareas que requieren cierto grado de inteligencia y aprendizaje.";
 choices[93][3] = "Por encargo de un usuario realiza sugerencias que deben ser evaluadas por el usuario que las encarga antes de ser ejecutadas.";
 answers[93] = choices[93][2];
 units[93] = "63";
 comments[93] = "Id Pregunta: 10956. TIC A1 AGE 2014";


//  Id pregunta: 10970 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Respecto a las tarjetas de identificaci&oacute;n con circuitos integrados, la norma ISO/IEC 7816-4:2013 NO especifica:";
 choices[94]= new Array();
 choices[94][0] = "Las dimensiones y tolerancias de la tarjeta de identificaci&oacute;n.";
 choices[94][1] = "M&eacute;todos de acceso a los ficheros e informaci&oacute;n.";
 choices[94][2] = "M&eacute;todos para la securizaci&oacute;n de los mensajes.";
 choices[94][3] = "M&eacute;todos para la recuperaci&oacute;n de informaci&oacute;n.";
 answers[94] = choices[94][0];
 units[94] = "74";
 comments[94] = "Id Pregunta: 10970. TIC A1 AGE 2014";


//  Id pregunta: 11032 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Cu&aacute;l es una biblioteca de render avanzado de controles de aplicaci&oacute;n en GNOME?";
 choices[95]= new Array();
 choices[95][0] = "Metacity";
 choices[95][1] = "Pango";
 choices[95][2] = "Cairo";
 choices[95][3] = "Gconf";
 answers[95] = choices[95][2];
 units[95] = "54";
 comments[95] = "Id Pregunta: 11032. ";


//  Id pregunta: 11049 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Cu&aacute;l es una plataforma electr&oacute;nica de contrataci&oacute;n que permite la contrataci&oacute;n de todos los valores en circulaci&oacute;n del Tesoro P&uacute;blico?";
 choices[96]= new Array();
 choices[96][0] = "SEND";
 choices[96][1] = "FACTURAE";
 choices[96][2] = "COMPRAE";
 choices[96][3] = "TESORO-E";
 answers[96] = choices[96][0];
 units[96] = "70";
 comments[96] = "Id Pregunta: 11049. ";


//  Id pregunta: 11050 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Cu&aacute;l es un algoritmo de criptograf&iacute;a sim&eacute;trica de flujo?";
 choices[97]= new Array();
 choices[97][0] = "DES";
 choices[97][1] = "Blowfish";
 choices[97][2] = "SNOW";
 choices[97][3] = "IDEA";
 answers[97] = choices[97][2];
 units[97] = "72";
 comments[97] = "Id Pregunta: 11050. El resto son algoritmos de bloque";


//  Id pregunta: 11505 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Seg&uacute;n Popek y Goldberg, &iquest;Qu&eacute; caracteristicas debe de tener un sistema para que sea virtualizable?";
 choices[98]= new Array();
 choices[98][0] = "Equivalencia.";
 choices[98][1] = "Control de Recursos.";
 choices[98][2] = "Eficiencia.";
 choices[98][3] = "Todos los anteriores.";
 answers[98] = choices[98][3];
 units[98] = "47";
 comments[98] = "Id Pregunta: 11505. NULL";


//  Id pregunta: 11680 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Se&ntilde;ale la falsa con respecto al usuario root del sistema operativo UNIX:";
 choices[99]= new Array();
 choices[99][0] = "Su UID es el 0.";
 choices[99][1] = "Recibe el nombre de superusuario.";
 choices[99][2] = "Puede eliminarse por medio del comando rmuser, con los permisos adecuados.";
 choices[99][3] = "Puede fijar prioridades a los procesos.";
 answers[99] = choices[99][2];
 units[99] = "53, 54";
 comments[99] = "Id Pregunta: 11680. ";


