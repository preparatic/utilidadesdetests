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

//  Id pregunta: 111 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  Cuando una certificaci&oacute;n es realizada por un organismo de la Administraci&oacute;n, aquella se denomina:";
 choices[0]= new Array();
 choices[0][0] = "Prueba de conformidad";
 choices[0][1] = "Normalizaci&oacute;n";
 choices[0][2] = "Homologaci&oacute;n";
 choices[0][3] = "Especificaci&oacute;n";
 answers[0] = choices[0][2];
 units[0] = "42";
 comments[0] = "Id Pregunta: 111. ";


//  Id pregunta: 275 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  Indique cu&aacute;l de los siguientes datos sensibles no est&aacute; especialmente protegido por la LOPD 15/99:";
 choices[1]= new Array();
 choices[1][0] = "De salud";
 choices[1][1] = "Administrativos";
 choices[1][2] = "De religi&oacute;n";
 choices[1][3] = "De origen racial";
 answers[1] = choices[1][1];
 units[1] = "29";
 comments[1] = "Id Pregunta: 275. ";


//  Id pregunta: 299 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  La duraci&oacute;n de la protecci&oacute;n otorgada por el Texto Refundido de la Ley de Propiedad Intelectual, aprobada por Real Decreto Legislativo 1/1996, a los programas de ordenador es de:";
 choices[2]= new Array();
 choices[2][0] = "50 a&ntilde;os";
 choices[2][1] = "30 a&ntilde;os";
 choices[2][2] = "70 a&ntilde;os desde el fallecimiento del creador, si es una persona f&iacute;sica";
 choices[2][3] = "60 a&ntilde;os en todo caso";
 answers[2] = choices[2][2];
 units[2] = "37";
 comments[2] = "Id Pregunta: 299. ";


//  Id pregunta: 434 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  Seg&uacute;n la Ley 1/1996 de Propiedad Intelectual, la obra nueva que incorpore una obra existente sin la colaboraci&oacute;n del autor de esta &uacute;ltima se denomina:";
 choices[3]= new Array();
 choices[3][0] = "Obra colectiva";
 choices[3][1] = "Obra compuesta";
 choices[3][2] = "Obra en semi-colaboraci&oacute;n";
 choices[3][3] = "Obra replicada";
 answers[3] = choices[3][1];
 units[3] = "36";
 comments[3] = "Id Pregunta: 434. ";


//  Id pregunta: 437 AÃ±o de creación de pregunta: 2009-01-01
 questions[4]= "5)  Seg&uacute;n la LOPD, los datos de car&aacute;cter personal que revelan la ideolog&iacute;a, religi&oacute;n y creencias podr&aacute;n ser objeto de tratamiento automatizado:";
 choices[4]= new Array();
 choices[4][0] = "Con consentimiento expreso del afectado";
 choices[4][1] = "Con consentimiento expreso y por escrito del afectado";
 choices[4][2] = "Nunca podr&aacute; ser objeto de tratamiento automatizado";
 choices[4][3] = "Cuando por razones de inter&eacute;s general as&iacute; lo disponga una Ley o el afectado consienta expresamente";
 answers[4] = choices[4][1];
 units[4] = "29";
 comments[4] = "Id Pregunta: 437. ";


//  Id pregunta: 668 AÃ±o de creación de pregunta: 2006-01-01
 questions[5]= "6)  En un fichero que contenga datos de car&aacute;cter personal con medidas de seguridad de nivel alto, &iquest;cu&aacute;l de las siguientes afirmaciones relativas al acceso a datos es incorrecta?";
 choices[5]= new Array();
 choices[5][0] = "De cada acceso se guardar&aacute;n, como m&iacute;nimo, la identificaci&oacute;n del usuario, la fecha y hora en que se realiz&oacute;, el fichero accedido, el tipo de acceso y el objeto del mismo y si ha sido autorizado o denegado";
 choices[5][1] = "El per&iacute;odo m&iacute;nimo de conservaci&oacute;n de los datos de acceso registrados ser&aacute; de dos a&ntilde;os";
 choices[5][2] = "En el caso de que el acceso a un fichero haya sido autorizado, ser&aacute; preciso guardar la informaci&oacute;n que permita identificar el registro accedido";
 choices[5][3] = "El responsable de seguridad competente se encargar&aacute; de revisar peri&oacute;dicamente la informaci&oacute;n de control registrada y elaborar&aacute; un informe de las revisiones realizadas y los problemas detectados al menos una vez al mes";
 answers[5] = choices[5][0];
 units[5] = "29";
 comments[5] = "Id Pregunta: 668. ";


//  Id pregunta: 752 AÃ±o de creación de pregunta: 2004-01-01
 questions[6]= "7)  A finales del a&ntilde;o 2003, la industria lanz&oacute; un est&aacute;ndar H.350 de videoconferencia con el fin de impulsar el despliegue de este tipo de sistemas. &iquest;Sabr&iacute;a indicar en qu&eacute; consiste fundamentalmente?";
 choices[6]= new Array();
 choices[6][0] = "Permite una conversaci&oacute;n y negociaci&oacute;n sobre la calidad de los terminales sobre un protocolo HTTP entre dos extremos remotos ";
 choices[6][1] = "Complementa el est&aacute;ndar H.323 para soportar transmisi&oacute;n por l&iacute;neas ADSL";
 choices[6][2] = "Define un servicio de directorio basado en LDAP para usuarios y equipos de videoconferencia.";
 choices[6][3] = "Todas las anteriores";
 answers[6] = choices[6][2];
 units[6] = "117";
 comments[6] = "Id Pregunta: 752. ";


//  Id pregunta: 893 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Cu&aacute;ntos s&iacute;mbolos diferentes pueden representarse en EBCDIC?";
 choices[7]= new Array();
 choices[7][0] = "128.";
 choices[7][1] = "64.";
 choices[7][2] = "256.";
 choices[7][3] = "512.";
 answers[7] = choices[7][2];
 units[7] = "";
 comments[7] = "Id Pregunta: 893. ";


//  Id pregunta: 1061 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  El test de rachas utilizado en criptograf&iacute;a se basa en:";
 choices[8]= new Array();
 choices[8][0] = "El an&aacute;lisis de la independencia de los elementos de un criptograma";
 choices[8][1] = "La b&uacute;squeda de las posibles dependencias o recursiones de un criptograma";
 choices[8][2] = "La b&uacute;squeda de independencia entre s&iacute;mbolos de un criptograma";
 choices[8][3] = "El an&aacute;lisis de la dependencia entre s&iacute;mbolos de un criptograma";
 answers[8] = choices[8][0];
 units[8] = "72";
 comments[8] = "Id Pregunta: 1061. ";


//  Id pregunta: 1165 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  Entre las caracter&iacute;sticas de JAVA que se describen a continuaci&oacute;n s&oacute;lo una es cierta. Se&ntilde;&aacute;lela:";
 choices[9]= new Array();
 choices[9][0] = "JAVA es similar a C++ pero m&aacute;s complejo que &eacute;ste";
 choices[9][1] = "La portabilidad de los programas JAVA no requiere recompilar.";
 choices[9][2] = "JAVA es del orden de 10 veces m&aacute;s r&aacute;pido que C++";
 choices[9][3] = "Todas las anteriores son ciertas";
 answers[9] = choices[9][1];
 units[9] = "60";
 comments[9] = "Id Pregunta: 1165. JCED - Preparatic XVII";


//  Id pregunta: 1190 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  Indique cu&aacute;l de las siguientes es una caracter&iacute;stica exclusiva del software libre frente a otros tipos de licencias de software:";
 choices[10]= new Array();
 choices[10][0] = "Fuentes abiertas";
 choices[10][1] = "Gratuidad";
 choices[10][2] = "Libre copia y distribuci&oacute;n del c&oacute;digo fuente";
 choices[10][3] = "Todas las caracteristicas anteriores son exclusivas del software libre";
 answers[10] = choices[10][2];
 units[10] = "61";
 comments[10] = "Id Pregunta: 1190. ";


//  Id pregunta: 1298 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Para especificar localizadores en XML se usa:";
 choices[11]= new Array();
 choices[11][0] = "s&oacute;lo el est&aacute;ndar Xlink";
 choices[11][1] = "s&oacute;lo el est&aacute;ndar Xpointer";
 choices[11][2] = "los est&aacute;ndares Xlink y Xpointer";
 choices[11][3] = "ninguno de los anteriores";
 answers[11] = choices[11][2];
 units[11] = "69";
 comments[11] = "Id Pregunta: 1298. NULL";


//  Id pregunta: 1450 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  &iquest;Cu&aacute;l de las siguientes no es una herramienta caracter&iacute;stica de un SGBDD?:";
 choices[12]= new Array();
 choices[12][0] = "Diccionario de palabras vac&iacute;as";
 choices[12][1] = "Diccionario de sin&oacute;nimos, acr&oacute;nimos, abreviaturas, etc.";
 choices[12][2] = "Tesauro";
 choices[12][3] = "Corrector sem&aacute;ntico y gramatical";
 answers[12] = choices[12][3];
 units[12] = "58";
 comments[12] = "Id Pregunta: 1450. NULL";


//  Id pregunta: 1540 AÃ±o de creación de pregunta: 2003-01-01
 questions[13]= "14)  &iquest;Qu&eacute; es MOSIX?";
 choices[13]= new Array();
 choices[13][0] = "MOSIX  es un conjunto de herramientas especialmentedesarrolladas para la construcci&oacute;n de clusters Linux basados en el procesador x86";
 choices[13][1] = "MOSIX  es un conjunto de herramientas especialmentedesarrolladas para la construcci&oacute;n de clusters Unix";
 choices[13][2] = "MOSIX  es un conjunto de herramientas especialmentedesarrolladas para la construcci&oacute;n de clusters Linux";
 choices[13][3] = "MOSIX es un conjunto de herramientas especialmentedesarrolladas para la construcci&oacute;n de clusters Unix basados en el procesador x86";
 answers[13] = choices[13][0];
 units[13] = "55";
 comments[13] = "Id Pregunta: 1540. ";


//  Id pregunta: 1841 AÃ±o de creación de pregunta: 2006-01-01
 questions[14]= "15)  Se&ntilde;ale  la correcta:";
 choices[14]= new Array();
 choices[14][0] = "El protocolo de seguridad en comercio electr&oacute;nico  3D Secure es utilizado por Visa y MarterCard";
 choices[14][1] = "Visa utiliza el protocolo Verified by Visa";
 choices[14][2] = "MasterCard Secure Code es el protocolo utilizado por Master Card";
 choices[14][3] = "Todas las anteriores";
 answers[14] = choices[14][3];
 units[14] = "70";
 comments[14] = "Id Pregunta: 1841. NULL";


//  Id pregunta: 1921 AÃ±o de creación de pregunta: 2006-01-01
 questions[15]= "16)  &iquest; Cu&aacute;l de las siguientes funciones no es compatible con un lenguaje de programamci&oacute;n orientado a objetos?";
 choices[15]= new Array();
 choices[15][0] = "Encapsulaci&oacute;n";
 choices[15][1] = "Herencia";
 choices[15][2] = "Polimorfismo";
 choices[15][3] = "Historicismo";
 answers[15] = choices[15][3];
 units[15] = "82";
 comments[15] = "Id Pregunta: 1921. ";


//  Id pregunta: 2220 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  &iquest;Qu&eacute; tipo de organizaci&oacute;n es tambi&eacute;n conocida por &quot;organizaci&oacute;n matricial&quot;?:";
 choices[16]= new Array();
 choices[16][0] = "Organizaci&oacute;n proyecto-funcional";
 choices[16][1] = "Organizaci&oacute;n funcional";
 choices[16][2] = "Organizaci&oacute;n proyecto-staff";
 choices[16][3] = "Organizaci&oacute;n por aplicaciones";
 answers[16] = choices[16][0];
 units[16] = "26";
 comments[16] = "Id Pregunta: 2220. ";


//  Id pregunta: 2246 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Del modelo de ciclo de vida en cascada se puede decir:";
 choices[17]= new Array();
 choices[17][0] = "Es un modelo que evoluciona en funci&oacute;n del grado de terminaci&oacute;n del proceso";
 choices[17][1] = "Es un modelo te&oacute;rico, dif&iacute;cil de cumplir porque necesita terminar una fase antes de comenzar la siguiente";
 choices[17][2] = "Es una particularizaci&oacute;n del ciclo de vida en espiral";
 choices[17][3] = "Normalmente va ligado al uso de prototipos";
 answers[17] = choices[17][1];
 units[17] = "76";
 comments[17] = "Id Pregunta: 2246. ";


//  Id pregunta: 2352 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  En una planificaci&oacute;n de un proyecto, una situaci&oacute;n que se da normalmente es que:";
 choices[18]= new Array();
 choices[18][0] = "Al inicio del proyecto se consuman m&aacute;s recursos que al final";
 choices[18][1] = "Al principio los recursos precisos van creciendo y al final decreciendo";
 choices[18][2] = "Al final del proyecto se consumen m&aacute;s recursos que en toda su vida anterior";
 choices[18][3] = "Ninguna de las anteriores";
 answers[18] = choices[18][1];
 units[18] = "77";
 comments[18] = "Id Pregunta: 2352. ";


//  Id pregunta: 2467 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  No es un &quot;agente&quot; en el modelo EFQM:";
 choices[19]= new Array();
 choices[19][0] = "Liderazgo";
 choices[19][1] = "Gesti&oacute;n de recursos humanos";
 choices[19][2] = "Pol&iacute;ticas y estrategias";
 choices[19][3] = "Satisfacci&oacute;n del cliente";
 answers[19] = choices[19][3];
 units[19] = "92";
 comments[19] = "Id Pregunta: 2467. NULL";


//  Id pregunta: 2571 AÃ±o de creación de pregunta: 2004-01-01
 questions[20]= "21)  El m&eacute;todo de los puntos de funci&oacute;n es una m&eacute;trica de evaluaci&oacute;n de la calidad del software del tipo: ";
 choices[20]= new Array();
 choices[20][0] = "Metrica de Fiabilidad";
 choices[20][1] = "Metrica de los Factores de calidad";
 choices[20][2] = "Metrica de Complejidad";
 choices[20][3] = "Ninguna de ellas";
 answers[20] = choices[20][3];
 units[20] = "89";
 comments[20] = "Id Pregunta: 2571. NULL";


//  Id pregunta: 2614 AÃ±o de creación de pregunta: 2003-01-01
 questions[21]= "22)  &iquest;C&uacute;al de los siguientes lenguajes no es Orientado a Objetos?";
 choices[21]= new Array();
 choices[21][0] = "Smalltalk";
 choices[21][1] = "C++";
 choices[21][2] = "Eiffel";
 choices[21][3] = "ACTOR";
 answers[21] = choices[21][3];
 units[21] = "82";
 comments[21] = "Id Pregunta: 2614. ";


//  Id pregunta: 2674 AÃ±o de creación de pregunta: 2003-01-01
 questions[22]= "23)  En los Sistemas de Recuperaci&oacute;n de Informaci&oacute;n la t&eacute;cnica de Sistemas Expertos consiste en:";
 choices[22]= new Array();
 choices[22][0] = "Expresar las consultas como solicitudes de textos relevantes con relaci&oacute;n a un t&oacute;pico particular, produci&eacute;ndose a continuaci&oacute;n la b&uacute;squeda en la base de conocimientos mediante activaci&oacute;n de reglas, que producen finalmente una relaci&oacute;n clasificada de texto";
 choices[22][1] = "Expresar las consultas como solicitudes de textos relevantes con relaci&oacute;n a varios t&oacute;picos, produci&eacute;ndose a continuaci&oacute;n la b&uacute;squeda en la base de conocimientos mediante activaci&oacute;n de reglas, que producen finalmente una relaci&oacute;n clasificada de textos pote";
 choices[22][2] = "Expresar las consultas como solicitudes de textos relevantes con relaci&oacute;n a un t&oacute;pico particular, produci&eacute;ndose a continuaci&oacute;n la b&uacute;squeda en la base de conocimientos mediante consulta de &iacute;ndices invertidos, que producen finalmente una relaci&oacute;n clasificad";
 choices[22][3] = "Expresar las consultas como solicitudes de textos relevantes con relaci&oacute;n a un t&oacute;pico particular, produci&eacute;ndose a continuaci&oacute;n la b&uacute;squeda en la base de conocimientos mediante activaci&oacute;n de reglas, que producen finalmente una relaci&oacute;n de textos presentes ";
 answers[22] = choices[22][0];
 units[22] = "96";
 comments[22] = "Id Pregunta: 2674. NULL";


//  Id pregunta: 2780 AÃ±o de creación de pregunta: 2006-01-01
 questions[23]= "24)  &iquest;Cu&aacute;ndo aplicar&iacute;a usted un ciclo de vida basado en prototipos?";
 choices[23]= new Array();
 choices[23][0] = "Cuando los requisitios son dif&iacute;ciles de revisar";
 choices[23][1] = "Cuando el sistema es cr&iacute;tico";
 choices[23][2] = "Para desarrollos de larga duraci&oacute;n";
 choices[23][3] = "Se aplicar&iacute;a en todos los casos anteriores";
 answers[23] = choices[23][0];
 units[23] = "85";
 comments[23] = "Id Pregunta: 2780. ";


//  Id pregunta: 2808 AÃ±o de creación de pregunta: 2006-01-01
 questions[24]= "25)  La Precisi&oacute;n es un criterio relacionado con:";
 choices[24]= new Array();
 choices[24][0] = "La Usabilidad.";
 choices[24][1] = "La Correcci&oacute;n.";
 choices[24][2] = "La Eficiencia.";
 choices[24][3] = "La Fiabilidad.";
 answers[24] = choices[24][3];
 units[24] = "88";
 comments[24] = "Id Pregunta: 2808. NULL";


//  Id pregunta: 2950 AÃ±o de creación de pregunta: 2004-01-01
 questions[25]= "26)  &iquest;Cu&aacute;l es el primer nivel OSI en el que se produce comunicaci&oacute;n extremo-extremo?";
 choices[25]= new Array();
 choices[25][0] = "Red";
 choices[25][1] = "Transporte";
 choices[25][2] = "Sesi&oacute;n";
 choices[25][3] = "Presentaci&oacute;n";
 answers[25] = choices[25][1];
 units[25] = "100";
 comments[25] = "Id Pregunta: 2950. Similar a examen TIC SS A 2003";


//  Id pregunta: 2958 AÃ±o de creación de pregunta: 2004-01-01
 questions[26]= "27)  TCP es un protocolo";
 choices[26]= new Array();
 choices[26][0] = "Orientado a conexi&oacute;n";
 choices[26][1] = "Orientado a conexi&oacute;n y no orientado a conexi&oacute;n";
 choices[26][2] = "Orientado a conexi&oacute;n y con control de errores";
 choices[26][3] = "Orientado a conexi&oacute;n y no orientado a conexi&oacute;n y con control de errores";
 answers[26] = choices[26][2];
 units[26] = "100";
 comments[26] = "Id Pregunta: 2958. Tanenbaum";


//  Id pregunta: 2988 AÃ±o de creación de pregunta: 2004-01-01
 questions[27]= "28)  &iquest;Cu&aacute;l de los siguientes protocolos de la familia TCP/IP no pertenece al grupo de protocolos de la capa de aplicaci&oacute;n?";
 choices[27]= new Array();
 choices[27][0] = "DNS: Sistema de nombres de dominio";
 choices[27][1] = "SNMP: Protocolo de gesti&oacute;n simple de red";
 choices[27][2] = "FTP: Protocolo de transferencia de archivos";
 choices[27][3] = "ARP: Protocolo de determinaci&oacute;n de direcciones";
 answers[27] = choices[27][3];
 units[27] = "100";
 comments[27] = "Id Pregunta: 2988. NULL";


//  Id pregunta: 3099 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  Una transmisi&oacute;n half duplex describe:";
 choices[28]= new Array();
 choices[28][0] = "Un circuito de cuatro hilos";
 choices[28][1] = "Un cable con doble malla";
 choices[28][2] = "Una comunicaci&oacute;n alternativa en dos sentidos";
 choices[28][3] = "Todas las respuestas anteriores son ciertas";
 answers[28] = choices[28][2];
 units[28] = "100";
 comments[28] = "Id Pregunta: 3099. NULL";


//  Id pregunta: 3132 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  &iquest;Cu&aacute;l de estas afirmaciones es cierta para una red de conmutaci&oacute;n de paquetes?:";
 choices[29]= new Array();
 choices[29][0] = "Una vez establecida la llamada es posible establecer otra llamada por el mismo circuito";
 choices[29][1] = "Una vez establecida la llamada no es posible establecer otra llamada por el mismo circuito";
 choices[29][2] = "No existe ning&uacute;n tipo de encaminamiento";
 choices[29][3] = "Todos los  paquetes siguen el mismo camino por la red";
 answers[29] = choices[29][0];
 units[29] = "101";
 comments[29] = "Id Pregunta: 3132. ";


//  Id pregunta: 3197 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  Dentro del modelo OSI, podemos afirmar que:";
 choices[30]= new Array();
 choices[30][0] = "El nivel 2 no hay control de flujo";
 choices[30][1] = "El nivel 3 se enfrenta a problemas de encaminamiento";
 choices[30][2] = "El nivel 4 se encarga de los problemas de interconexi&oacute;n de redes";
 choices[30][3] = "En el nivel 5 se tratan los aspectos sint&aacute;ctico y sem&aacute;ntico de la informaci&oacute;n";
 answers[30] = choices[30][1];
 units[30] = "100";
 comments[30] = "Id Pregunta: 3197. NULL";


//  Id pregunta: 3263 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  &iquest;D&oacute;nde se define el punto de referencia R en RDSI?:";
 choices[31]= new Array();
 choices[31][0] = "Entre el ET2 (Equipo terminal de tipo 2) y el adaptador de terminales";
 choices[31][1] = "Entre el ET1 (Equipo terminal de tipo 1) y el adaptador de terminales";
 choices[31][2] = "Entre el TR1 y el TR2";
 choices[31][3] = "Entre el equipo de usaurio y el TR2 o TR1 cuando no hay TR2";
 answers[31] = choices[31][0];
 units[31] = "103";
 comments[31] = "Id Pregunta: 3263. ";


//  Id pregunta: 3292 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  &iquest;Qu&eacute; funci&oacute;n cumple el punto de referencia S en RDSI?:";
 choices[32]= new Array();
 choices[32][0] = "Conexi&oacute;n de un TR1 a un TR2";
 choices[32][1] = "Conexi&oacute;n de un TE1 o un TA a un TR2";
 choices[32][2] = "Conexi&oacute;n de un TE2 a un TR2";
 choices[32][3] = "Conexi&oacute;n de un TE1 a un TE2";
 answers[32] = choices[32][1];
 units[32] = "103";
 comments[32] = "Id Pregunta: 3292. ";


//  Id pregunta: 3298 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  &iquest;Qu&eacute; nivel del modelo OSI se encarga del enrutamiento de la informaci&oacute;n?:";
 choices[33]= new Array();
 choices[33][0] = "El nivel de red";
 choices[33][1] = "El nivel de enlace";
 choices[33][2] = "El nivel de transporte";
 choices[33][3] = "Se realiza conjuntamente entre el nivel de red y el nivel de transporte, a trav&eacute;s del interfaz entre estos niveles adyacentes";
 answers[33] = choices[33][0];
 units[33] = "100";
 comments[33] = "Id Pregunta: 3298. NULL";


//  Id pregunta: 3370 AÃ±o de creación de pregunta: 2002-01-01
 questions[34]= "35)  Dentro de los sistemas m&oacute;viles celulares el t&eacute;rmino 'handover' hace referencia a los problemas relativos a:";
 choices[34]= new Array();
 choices[34][0] = "Traspaso del m&oacute;vil de una c&eacute;lula a otra";
 choices[34][1] = "La incompatibilidad entre sistemas";
 choices[34][2] = "Los sistemas de directorio X.500";
 choices[34][3] = "Los problemas debidos a la saturaci&oacute;n del espectro radioel&eacute;ctrico";
 answers[34] = choices[34][0];
 units[34] = "108";
 comments[34] = "Id Pregunta: 3370. ";


//  Id pregunta: 3489 AÃ±o de creación de pregunta: 2002-01-01
 questions[35]= "36)  En conmutaci&oacute;n de paquetes es falso que:";
 choices[35]= new Array();
 choices[35][0] = "la transmisi&oacute;n es por r&aacute;fagas";
 choices[35][1] = "la ruta origen-&gt;destino puede ser variable";
 choices[35][2] = "no hay ning&uacute;n circuito f&iacute;sico dedicado en la comunicaci&oacute;n";
 choices[35][3] = "todas las anteriores son caracter&iacute;sticas de la conmutaci&oacute;n de paquetes";
 answers[35] = choices[35][3];
 units[35] = "101";
 comments[35] = "Id Pregunta: 3489. ";


//  Id pregunta: 3504 AÃ±o de creación de pregunta: 2002-01-01
 questions[36]= "37)  En el modelo de referencia para interconexi&oacute;n de sistemas abiertos (ISO OSI) indicar cu&aacute;l de las siguientes respuestas es verdadera:";
 choices[36]= new Array();
 choices[36][0] = "El est&aacute;ndar RS-232-C se ha desarrollado para las l&iacute;neas de comunicaci&oacute;n de la capa f&iacute;sica";
 choices[36][1] = "El nivel de enlace corresponde a la l&iacute;nea 4";
 choices[36][2] = "El protocolo de enlace de datos se ocupa de la estandarizaci&oacute;n de las interfaces el&eacute;ctricas, mec&aacute;nicas y de se&ntilde;alizaci&oacute;n";
 choices[36][3] = "Es un modelo de 9 capas";
 answers[36] = choices[36][0];
 units[36] = "100";
 comments[36] = "Id Pregunta: 3504. NULL";


//  Id pregunta: 3701 AÃ±o de creación de pregunta: 2002-01-01
 questions[37]= "38)  Las funciones del modelo OSI siguientes: criptograf&iacute;a, gesti&oacute;n de conversaciones, detecci&oacute;n de errores extremo a extremo, validaciones de tensiones el&eacute;ctricas, garantizar la conexi&oacute;n punto a punto; corresponden, por este orden, a los niveles OSI:";
 choices[37]= new Array();
 choices[37][0] = "Presentaci&oacute;n, aplicaci&oacute;n, transporte, f&iacute;sico, red";
 choices[37][1] = "Presentaci&oacute;n, sesi&oacute;n, transporte, f&iacute;sico, enlace";
 choices[37][2] = "Aplicaci&oacute;n, sesi&oacute;n, transporte, f&iacute;sico, red";
 choices[37][3] = "Aplicaci&oacute;n, sesi&oacute;n, red, enlace, transporte";
 answers[37] = choices[37][1];
 units[37] = "100";
 comments[37] = "Id Pregunta: 3701. NULL";


//  Id pregunta: 3872 AÃ±o de creación de pregunta: 2003-01-01
 questions[38]= "39)  &iquest;Cu&aacute;l de las siguientes series no es congruente?:";
 choices[38]= new Array();
 choices[38][0] = "http, https.";
 choices[38][1] = "smtp, pop-3, mime.";
 choices[38][2] = "xml, xsl, xjar.";
 choices[38][3] = "direcci&oacute;n IP, m&aacute;scara, dominio.";
 answers[38] = choices[38][2];
 units[38] = "106";
 comments[38] = "Id Pregunta: 3872. Junta Andaluc&iacute;a";


//  Id pregunta: 4144 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  Un programa aparentemente in&oacute;cuo y &uacute;til que al instalarlo el usuario, es utilizado por un tercero para realizar acciones no autorizadas sobre el sistema se llama";
 choices[39]= new Array();
 choices[39][0] = "honeypot";
 choices[39][1] = "bomba l&oacute;gica";
 choices[39][2] = "virus";
 choices[39][3] = "troyano";
 answers[39] = choices[39][3];
 units[39] = "111";
 comments[39] = "Id Pregunta: 4144. NULL";


//  Id pregunta: 4203 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  El MTBF asociado a la disponibilidad de un sistema formado por dos equipos id&eacute;nticos con reparto balanceado de la carga de trabajo";
 choices[40]= new Array();
 choices[40][0] = "Es mayor que el de cualquiera de ellos individualmente";
 choices[40][1] = "Es menor que el de cualquiera de ellos individualmente";
 choices[40][2] = "Es igual al de cualquiera de ellos individualmente";
 choices[40][3] = "No puede ser conocido a priori";
 answers[40] = choices[40][0];
 units[40] = "104";
 comments[40] = "Id Pregunta: 4203. ";


//  Id pregunta: 4253 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  Como parte de la legislaci&oacute;n y normativa espa&ntilde;ola para el impulso de la administraci&oacute;n electr&oacute;nica se incluye:";
 choices[41]= new Array();
 choices[41][0] = "La Ley 30/1992 de 26 de R&eacute;gimen Jur&iacute;dico de las Administraciones P&uacute;blicas y del Procedimiento Administrativo Com&uacute;n, que dedica un art&iacute;culo al impulso del empleo y aplicaci&oacute;n de las t&eacute;cnicas y medios electr&oacute;nicos, inform&aacute;ticos y telem&aacute;ticos, por parte de la Administraci&oacute;n";
 choices[41][1] = "El Real Decreto 1553/2005 por el que se regula la expedici&oacute;n del Documento Nacional de Identidad y sus certificados de firma electr&oacute;nica";
 choices[41][2] = "La Ley 24/2001, de 27 de diciembre, de Medidas Fiscales, Administrativas y del Orden Social, que regula el establecimiento de registros telem&aacute;ticos y  notificaciones telem&aacute;ticas";
 choices[41][3] = "Todas las anteriores";
 answers[41] = choices[41][3];
 units[41] = "30";
 comments[41] = "Id Pregunta: 4253. NULL";


//  Id pregunta: 4341 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares de comunicaciones fue originalmente concebido como el est&aacute;ndar militar MIL-STD-1778?:";
 choices[42]= new Array();
 choices[42][0] = "IEEE 802.3.";
 choices[42][1] = "IEEE 802.11b.";
 choices[42][2] = "CCITT X 25.";
 choices[42][3] = "TCP.";
 answers[42] = choices[42][3];
 units[42] = "99";
 comments[42] = "Id Pregunta: 4341. ";


//  Id pregunta: 4400 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  La gesti&oacute;n proactiva de un sistema permite";
 choices[43]= new Array();
 choices[43][0] = "Solucionar todas las posibles incidencias.";
 choices[43][1] = "Detectar los problemas con anterioridad a la percepci&oacute;n de los mismos por parte del usuario.";
 choices[43][2] = "Corregir los problemas antes de que estos se produzcan.";
 choices[43][3] = "Mantener a todos los usuarios informados del estado de los sistemas.";
 answers[43] = choices[43][1];
 units[43] = "24";
 comments[43] = "Id Pregunta: 4400. ";


//  Id pregunta: 4481 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  &iquest;Cual de los siguientes paquetes de Java contiene las clases b&aacute;sicas utilizadas habitualmente en la mayor&iacute;a de los programas Java?";
 choices[44]= new Array();
 choices[44][0] = "java.lang";
 choices[44][1] = "java.beans";
 choices[44][2] = "java.sql";
 choices[44][3] = "java.util";
 answers[44] = choices[44][0];
 units[44] = "60";
 comments[44] = "Id Pregunta: 4481. JCED - Preparatic XVII";


//  Id pregunta: 4630 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  NO es una autoridad de certificaci&oacute;n electr&oacute;nica en Espa&ntilde;a";
 choices[45]= new Array();
 choices[45][0] = "IDCAT";
 choices[45][1] = "CAMERFIRMA";
 choices[45][2] = "CATCERT";
 choices[45][3] = "IZEMPE";
 answers[45] = choices[45][0];
 units[45] = "";
 comments[45] = "Id Pregunta: 4630. ";


//  Id pregunta: 4727 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  Los resultados del modelo EFQM se eval&uacute;an:";
 choices[46]= new Array();
 choices[46][0] = "Respecto a los clientes";
 choices[46][1] = "Respecto a la sociedad";
 choices[46][2] = "Respecto al personal de la empresa";
 choices[46][3] = "Todas las respuestas son correctas";
 answers[46] = choices[46][3];
 units[46] = "92";
 comments[46] = "Id Pregunta: 4727. Examen 2006 JCYL";


//  Id pregunta: 4792 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  Seg&uacute;n establece la Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica, los certificados electr&oacute;nicos reconocidospueden tener un periodo m&aacute;ximo de validez de:";
 choices[47]= new Array();
 choices[47][0] = "Dos a&ntilde;os";
 choices[47][1] = "Tres a&ntilde;os";
 choices[47][2] = "Cuatro a&ntilde;os";
 choices[47][3] = "Cinco a&ntilde;os";
 answers[47] = choices[47][3];
 units[47] = "74";
 comments[47] = "Id Pregunta: 4792. NULL";


//  Id pregunta: 4952 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  &iquest;Qu&eacute; proporciona el proyecto MONO?:";
 choices[48]= new Array();
 choices[48][0] = "Software libre para desarrollar y ejecutar aplicaciones .NET.";
 choices[48][1] = "Un entorno de desarrollo integrado de software libre para aplicaciones J2EE 5.0.";
 choices[48][2] = "Software libre para una soluci&oacute;n integrada de movilidad para correo electr&oacute;nico y agendas.";
 choices[48][3] = "Un ESB (Entreprise Service Bus) y plataforma de integraci&oacute;n de software libre para la constituci&oacute;n de arquitectura. SOA.";
 answers[48] = choices[48][0];
 units[48] = "62";
 comments[48] = "Id Pregunta: 4952. Examen TIC B 2007";


//  Id pregunta: 4985 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  Seg&uacute;n la ley 9/2014, General de Telecomunicaciones, la competencia de control e inspecci&oacute;n del dominio p&uacute;blico radioel&eacute;ctrico corresponde a:";
 choices[49]= new Array();
 choices[49][0] = "El Ministerio de Industria, Energ&iacute;a y Turismo";
 choices[49][1] = "El Consejo Asesor de las Telecomunicaciones y de la Sociedad de la Informaci&oacute;n.";
 choices[49][2] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia.";
 choices[49][3] = "La Sociedad Estatal de Control e Inspecci&oacute;n Radioel&eacute;ctrica.";
 answers[49] = choices[49][0];
 units[49] = "110";
 comments[49] = "Id Pregunta: 4985. Examen TIC B 2007";


//  Id pregunta: 5025 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  El CMM-CMMI es:";
 choices[50]= new Array();
 choices[50][0] = "Un conjunto de normas de seguridad f&iacute;sica (perimetral), antiintrusivas (firewall) y antiincendios de aplicaci&oacute;nen centros de proceso de datos";
 choices[50][1] = "Un modelo de desarrollo de software jer&aacute;rquico orientado a objetos";
 choices[50][2] = "Un modelo de calidad del software que clasifica en cinco los niveles de madurez.";
 choices[50][3] = "Un modelo est&aacute;ndar de seguridad ante ataques por Internet.";
 answers[50] = choices[50][2];
 units[50] = "98";
 comments[50] = "Id Pregunta: 5025. Examen TIC A 2007";


//  Id pregunta: 5030 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  Los sistemas de almacenes de bases de datos pueden implementarse utilizando diferentes tipos de esquemas f&iacute;sicos : ROLAP, MOLAP, HOLAP,etc. &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[51]= new Array();
 choices[51][0] = "En ROLAP, f&iacute;sicamente el almac&eacute;n de datos se construye sobre estructuras basadas en matrices multidimensionales.";
 choices[51][1] = "Ejemplos de sistemas MOLAP son: Informix Metacube u Oracle Discover.";
 choices[51][2] = "Ejemplos de sistema ROLAP son: Oracle Express o el Hyperion Enterprise.";
 choices[51][3] = "En MOLAP, f&iacute;sicamente el almac&eacute;n de datos se construye sobre estructuras basadas en matrices multidimensionales, produci&eacute;ndose correspondencia entre el nivel l&oacute;gico y el nivel f&iacute;sico lo que en general aporta especializaci&oacute;n que se traduce generalmente en mayor eficiencia.";
 answers[51] = choices[51][3];
 units[51] = "68";
 comments[51] = "Id Pregunta: 5030. Examen TIC A 2007";


//  Id pregunta: 5056 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  Indique qu&eacute; informaci&oacute;n de las siguientes NO aporta un URL (Localizador Universal de Recurso) para identificar unrecurso de la web:";
 choices[52]= new Array();
 choices[52][0] = "El nombre del recurso";
 choices[52][1] = "El tipo del recurso";
 choices[52][2] = "Donde se encuentra el recurso";
 choices[52][3] = "El protocolo que hay que usar para obtener el recurso";
 answers[52] = choices[52][1];
 units[52] = "112";
 comments[52] = "Id Pregunta: 5056. Examen TIC A 2007";


//  Id pregunta: 5060 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  &iquest;C&oacute;mo se denominan los servidores que se implementan en un formato de tarjeta/bandeja en la que se integranmemoria, procesadores y almacenamiento interno, que pueden ser insertados en chasis/bastidores especialessobre los que se comparten elementos comunes (habitualmente conexiones el&eacute;ctricas, conexiones de red de datosfuentes de alimentaci&oacute;n y ventiladores) y que normalmente comparten un sistema de gesti&oacute;n y administraci&oacute;ncom&uacute;n?:";
 choices[53]= new Array();
 choices[53][0] = "Clusters";
 choices[53][1] = "Servidores Grid";
 choices[53][2] = "Servidores Blades";
 choices[53][3] = "Ninguno de los anteriores";
 answers[53] = choices[53][2];
 units[53] = "48";
 comments[53] = "Id Pregunta: 5060. Examen TIC A 2007";


//  Id pregunta: 5240 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  Para el desarrollo de una planificaci&oacute;n estrat&eacute;gica se necesita conocer:";
 choices[54]= new Array();
 choices[54][0] = "La misi&oacute;n de la organizaci&oacute;n";
 choices[54][1] = "Puntos d&eacute;biles y fuertes de la organizaci&oacute;n para sacar partido de ello";
 choices[54][2] = "Los clientes, competidores y accionistas";
 choices[54][3] = "Todas las anteriores.";
 answers[54] = choices[54][3];
 units[54] = "77";
 comments[54] = "Id Pregunta: 5240. ";


//  Id pregunta: 5479 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  &iquest;Cual es el primer criterio de calidad del Modelo EFQM?";
 choices[55]= new Array();
 choices[55][0] = "Liderazgo";
 choices[55][1] = "Oportunidad";
 choices[55][2] = "Satisfacci&oacute;n del cliente";
 choices[55][3] = "Satisfacer los requisitos";
 answers[55] = choices[55][0];
 units[55] = "88";
 comments[55] = "Id Pregunta: 5479. Castilla y Le&oacute;n";


//  Id pregunta: 5501 AÃ±o de creación de pregunta: 2003-01-01
 questions[56]= "57)  &iquest;Cu&aacute;l no es una caracter&iacute;stica b&aacute;sica de los sistemas OLAP?";
 choices[56]= new Array();
 choices[56][0] = "Utilizan t&eacute;cnicas multidimensionales para la extracci&oacute;n y el an&aacute;lisis de los datos.";
 choices[56][1] = "Permiten ahondar en la jerarqu&iacute;a de los datos para acceder a los de m&aacute;s bajo nivel.";
 choices[56][2] = "Ofrecen una visi&oacute;n m&uacute;ltidimensional y jerarquizada de los datos.";
 choices[56][3] = "Est&aacute;n pensados para el an&aacute;lisis y actualizaci&oacute;n de los datos de forma r&aacute;pida y jerarquizada.";
 answers[56] = choices[56][3];
 units[56] = "68";
 comments[56] = "Id Pregunta: 5501. ";


//  Id pregunta: 5522 AÃ±o de creación de pregunta: 2003-01-01
 questions[57]= "58)  La medida del n&uacute;mero de bits utilizados para definir cada p&iacute;xel es";
 choices[57]= new Array();
 choices[57][0] = "Resoluci&oacute;n";
 choices[57][1] = "&Aacute;rea de imagen";
 choices[57][2] = "Profundidad de bit o de color";
 choices[57][3] = "Ninguna es verdadera";
 answers[57] = choices[57][2];
 units[57] = "93";
 comments[57] = "Id Pregunta: 5522. NULL";


//  Id pregunta: 5546 AÃ±o de creación de pregunta: 2003-01-01
 questions[58]= "59)  La ley 11/2007 que regula el acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos:";
 choices[58]= new Array();
 choices[58][0] = "Establece que la utilizaci&oacute;n de las tecnolog&iacute;as de la informaci&oacute;n se har&aacute; de forma que no conlleve la existencia de restricciones o discriminaciones para los ciudadanos que se relacionen con las Administraciones P&uacute;blicas por medios no electr&oacute;nicos.";
 choices[58][1] = "Permite la obtenci&oacute;n de copias electr&oacute;nicas de los documentos electr&oacute;nicos de cualquier expediente electr&oacute;nico, sin restricci&oacute;n alguna.";
 choices[58][2] = "Crea la figura del Defensor del Usuario de la Administraci&oacute;n Electr&oacute;nica, encargado de inspeccionar la actuaci&oacute;n v&iacute;a medios electr&oacute;nicos, de las Administraciones P&uacute;blicas.";
 choices[58][3] = "La publicaci&oacute;n de actos y comunicaciones, que deban publicarse en tabl&oacute;n de anuncios &oacute; edictos, se realizar&aacute; &uacute;nicamente en la sede electr&oacute;nica correspondiente.";
 answers[58] = choices[58][0];
 units[58] = "43";
 comments[58] = "Id Pregunta: 5546. NULL";


//  Id pregunta: 5595 AÃ±o de creación de pregunta: 2003-01-01
 questions[59]= "60)  Los sistemas din&aacute;micos de contrataci&oacute;n incluidos en la ley 30/2007...";
 choices[59]= new Array();
 choices[59][0] = "Son solo para contratos de obras";
 choices[59][1] = "Se desarrollar&aacute; el sistema y la adjudicaci&oacute;n por medios telem&aacute;ticos, inform&aacute;ticos y electr&oacute;nicos, exclusivamente";
 choices[59][2] = "La duraci&oacute;n de un sistema de contrataci&oacute;n din&aacute;mico no podr&aacute; exceder, en t&eacute;rminos generales, los 2 a&ntilde;os";
 choices[59][3] = "Se podr&aacute; cargar a las empresas un 0.5% del montante total del contrato, en concepto de participaci&oacute;n";
 answers[59] = choices[59][1];
 units[59] = "41";
 comments[59] = "Id Pregunta: 5595. ";


//  Id pregunta: 5612 AÃ±o de creación de pregunta: 2003-01-01
 questions[60]= "61)  Alguno de los &oacute;rganos a trav&eacute;s del cu&aacute;l ISOC ejerce sus funciones son:";
 choices[60]= new Array();
 choices[60][0] = "IAB para la asignaci&oacute;n de recursos. IEFT para la especificaci&oacute;n de est&aacute;ndares.";
 choices[60][1] = "IEFT para la especificaci&oacute;n de est&aacute;ndares. IESG para la supervisi&oacute;n y aprobaci&oacute;n de normas";
 choices[60][2] = "IAB para la supervisi&oacute;n y aprobaci&oacute;n de normas. IESG para la coordinaci&oacute;n";
 choices[60][3] = "IEFT para la coordinaci&oacute;n. IANA para la asignaci&oacute;n de recursos";
 answers[60] = choices[60][2];
 units[60] = "112";
 comments[60] = "Id Pregunta: 5612. ";


//  Id pregunta: 5757 AÃ±o de creación de pregunta: 2001-01-01
 questions[61]= "62)  Los objetivos generales que debe cumplir el Plan de Sistemas de Informaci&oacute;n y Comunicaciones son:";
 choices[61]= new Array();
 choices[61][0] = " Establecer pol&iacute;ticas y objetivos coherentes";
 choices[61][1] = "Planificar y controlar con eficacia el proceso de mecanizaci&oacute;n y as&iacute; como definir los requerimientos t&eacute;cnicos necesarios y suficientes ";
 choices[61][2] = "Conocer con cierta aproximaci&oacute;n y de forma anticipada las inversiones, los costes de funcionamiento, los resulta-dos esperados, etc";
 choices[61][3] = "Todas las anteriores";
 answers[61] = choices[61][3];
 units[61] = "77";
 comments[61] = "Id Pregunta: 5757. ";


//  Id pregunta: 5758 AÃ±o de creación de pregunta: 2009-01-01
 questions[62]= "63)  En cuanto a la licencia LGPL, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[62]= new Array();
 choices[62][0] = "Un software con licencia LGPL puede ser modificado y redistribuido como software propietario siempre que se trate del driver de un dispositivo.";
 choices[62][1] = "Un software con licencia LGPL puede ser modificado y redistribuido como software propietario siempre que se trate de una librer&iacute;a sin interfaz con el usuario.";
 choices[62][2] = "Un software con licencia LGPL puede utilizar librer&iacute;as propietarias, y el conjunto tener la licencia LGPL.";
 choices[62][3] = "Un software propietario puede utilizar librer&iacute;as LGPL sin dejar de ser propietario.";
 answers[62] = choices[62][3];
 units[62] = "61";
 comments[62] = "Id Pregunta: 5758. ";


//  Id pregunta: 5943 AÃ±o de creación de pregunta: 2009-01-01
 questions[63]= "64)  En el contexto de la virtualizaci&oacute;n, &iquest;qu&eacute; es el hypervisor?";
 choices[63]= new Array();
 choices[63][0] = "Un m&oacute;dulo en el sistema operativo hu&eacute;sped que monitoriza el uso de recursos del mismo";
 choices[63][1] = "La extensi&oacute;n del gestor de procesos del sistema operativo anfitri&oacute;n que permite compartir memoria a los procesos de distintos sistemas operativos hu&eacute;spedes";
 choices[63][2] = "Es la plataforma que permite ejecutar concurrentemente varios sistemas operativos en una m&aacute;quina";
 choices[63][3] = "Es un m&oacute;dulo en el sistema operativo anfitri&oacute;n que monitoriza el uso de la Virtualization API Standard que realizan los sistemas operativos hu&eacute;spedes";
 answers[63] = choices[63][2];
 units[63] = "119";
 comments[63] = "Id Pregunta: 5943. ";


//  Id pregunta: 6052 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  &iquest;Cu&aacute;l es una infraestructura de integraci&oacute;n para la construcci&oacute;n de arquitecturas SOA?";
 choices[64]= new Array();
 choices[64][0] = "SAML";
 choices[64][1] = "UDDI (Universal Description, Discovery and Integration)";
 choices[64][2] = "CASE (Computer-Aided Software Engineering)";
 choices[64][3] = "ESB (Enterprise Service Bus)";
 answers[64] = choices[64][3];
 units[64] = "51";
 comments[64] = "Id Pregunta: 6052. TIC A 2009";


//  Id pregunta: 6130 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  Cuando puntuamos criterios de diferentes alternativas y nos referimos al umbral de saciedad, entendemos por tal:";
 choices[65]= new Array();
 choices[65][0] = "El valor que debe cumplir la puntuaci&oacute;n de un criterio para ser considerado aceptable. por tanto es el m&iacute;nimo exigido.";
 choices[65][1] = "El valor de un criterio a partir del cual no se obtiene una utilidad adicional, por lo que su exceso no es tenido en cuenta.";
 choices[65][2] = "Un valor ordinal definido por el evaluador conforme a una escala subjetiva.";
 choices[65][3] = "Un m&eacute;todo de limitaci&oacute;n de la asignaci&oacute;n de puntuaciones mediante entrop&iacute;a. Se dice entonces que el criterio est&aacute; saciado.";
 answers[65] = choices[65][1];
 units[65] = "34";
 comments[65] = "Id Pregunta: 6130. TIC A 2009";


//  Id pregunta: 6283 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  &iquest;Qu&eacute; &oacute;rganos no suelen ser necesarios a la hora de realizar una planificaci&oacute;n y direcci&oacute;n estrat&eacute;gica?";
 choices[66]= new Array();
 choices[66][0] = "Los proveedores";
 choices[66][1] = "El equipo de proyecto";
 choices[66][2] = "El comit&eacute; de direcci&oacute;n";
 choices[66][3] = "Un grupo de usuarios";
 answers[66] = choices[66][0];
 units[66] = "77";
 comments[66] = "Id Pregunta: 6283. ";


//  Id pregunta: 6545 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  La autenticaci&oacute;n fuerte requiere dos de los tres atributos de autenticaci&oacute;n, de entre los que se encuentran";
 choices[67]= new Array();
 choices[67][0] = "Algo que alguien sabe";
 choices[67][1] = "Algo que alguien tiene";
 choices[67][2] = "A y B son correctas";
 choices[67][3] = "A y B son incorrectas";
 answers[67] = choices[67][2];
 units[67] = "111";
 comments[67] = "Id Pregunta: 6545. NULL";


//  Id pregunta: 6564 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)  GPRS no se caracteriza por";
 choices[68]= new Array();
 choices[68][0] = "Servicio simult&aacute;neo de voz y datos";
 choices[68][1] = "No existe multiplexaci&oacute;n de voz y datos";
 choices[68][2] = "Servicio no orientado a conexi&oacute;n";
 choices[68][3] = "Tarificaci&oacute;n por volumen de datos intercambiado";
 answers[68] = choices[68][1];
 units[68] = "108";
 comments[68] = "Id Pregunta: 6564. NULL";


//  Id pregunta: 7156 AÃ±o de creación de pregunta: 2010-01-01
 questions[69]= "70)  &iquest;Cu&aacute;l de las siguientes afirmaciones es INCORRECTA?";
 choices[69]= new Array();
 choices[69][0] = "Los protocolos de comunicaciones NAS est&aacute;n basados en ficheros";
 choices[69][1] = "Los dispositivos NAS tienen mayor rendimiento y fiabilidad que los DAS";
 choices[69][2] = "En una red SAN el modo de acceso es a m&aacute;s bajo nivel que en NAS y DAS";
 choices[69][3] = "La mayor&iacute;a de las SAN usan el protocolo SCSI para la comunicaci&oacute;n entre servidores";
 answers[69] = choices[69][1];
 units[69] = "48";
 comments[69] = "Id Pregunta: 7156. Examen TIC B 2009";


//  Id pregunta: 7298 AÃ±o de creación de pregunta: 2010-01-01
 questions[70]= "71)  SQL*Loader es una herramienta utilizada para qu&eacute; servidor de bases de datos:";
 choices[70]= new Array();
 choices[70][0] = "MySQL";
 choices[70][1] = "Oracle";
 choices[70][2] = "SQL Server";
 choices[70][3] = "Todas las opciones son correctas";
 answers[70] = choices[70][1];
 units[70] = "57";
 comments[70] = "Id Pregunta: 7298. NULL";


//  Id pregunta: 7337 AÃ±o de creación de pregunta: 2010-01-01
 questions[71]= "72)  &iquest;Qui&eacute;n es el creador del software de cifrado PGP (Pretty Good Privacy)?";
 choices[71]= new Array();
 choices[71][0] = "Richard Stallman";
 choices[71][1] = "Phil Zimmermann";
 choices[71][2] = "Konrad Zuse";
 choices[71][3] = "Alan Turing";
 answers[71] = choices[71][1];
 units[71] = "72";
 comments[71] = "Id Pregunta: 7337. NULL";


//  Id pregunta: 7784 AÃ±o de creación de pregunta: 2010-01-01
 questions[72]= "73)   &iquest;Cu&aacute;l de los siguientes modelos de ciclo de vida del software favorece la reutilizaci&oacute;n del software existente?";
 choices[72]= new Array();
 choices[72][0] = " Modelo en cascada.";
 choices[72][1] = " Modelo de prototipado.";
 choices[72][2] = " Modelo de transformaci&oacute;n.";
 choices[72][3] = " Modelo en espiral.";
 answers[72] = choices[72][3];
 units[72] = "NULL";
 comments[72] = "Id Pregunta: 7784. Map 2005";


//  Id pregunta: 8135 AÃ±o de creación de pregunta: 2010-01-01
 questions[73]= "74)   Por IP-SPOOFING entendemos:";
 choices[73]= new Array();
 choices[73][0] = " Captura de passwords.";
 choices[73][1] = " Uso fraudulento de direcciones de enlace.";
 choices[73][2] = " Suplantaci&oacute;n de direcciones de red.";
 choices[73][3] = " Propagaci&oacute;n de virus.";
 answers[73] = choices[73][2];
 units[73] = "NULL";
 comments[73] = "Id Pregunta: 8135. Map 2008";


//  Id pregunta: 8171 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  Respecto a AJAX. &iquest;Cu&aacute;l de las siguientes afirmaciones NO es cierta?:";
 choices[74]= new Array();
 choices[74][0] = "En lo referente a &quot;cross-scripting&quot; (ejecuci&oacute;n de c&oacute;digo de diferente dominio), est&aacute; sujeto a la pol&iacute;tica &quot;same origin&quot; implementada en la sandbox del navegador.";
 choices[74][1] = "Realizar una petici&oacute;n v&iacute;a XMLHttpRequest (XHR) no modifica el historial del navegador.";
 choices[74][2] = "No ha sido estandarizado por una Recomendaci&oacute;n del World Wide Web Consortium (W3C).";
 choices[74][3] = "Su uso obliga a refrescar una parte de la p&aacute;gina del navegador.";
 answers[74] = choices[74][3];
 units[74] = "69";
 comments[74] = "Id Pregunta: 8171. Examen TIC A1 2010";


//  Id pregunta: 8424 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  &iquest;Cu&aacute;l de los siguientes grupos de medidas de seguridad no se define en el anexo II del Esquema Nacional de Seguridad, Real Decreto 3/2010 del 8 de enero?";
 choices[75]= new Array();
 choices[75][0] = "Medidas de protecci&oacute;n";
 choices[75][1] = "Marco organizativo";
 choices[75][2] = "Marco operacional";
 choices[75][3] = "Marco tecnol&oacute;gico";
 answers[75] = choices[75][3];
 units[75] = "43";
 comments[75] = "Id Pregunta: 8424. NULL";


//  Id pregunta: 8729 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  Un servidor DHCP no puede proveer a un equipo cliente de la configuraci&oacute;n de";
 choices[76]= new Array();
 choices[76][0] = "M&aacute;scara de subred";
 choices[76][1] = "Tiempo m&aacute;ximo de espera del ARP";
 choices[76][2] = "Servidor SMTP";
 choices[76][3] = "Software antivirus";
 answers[76] = choices[76][3];
 units[76] = "100";
 comments[76] = "Id Pregunta: 8729. Examen UPM A2 2011";


//  Id pregunta: 9002 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  Seg&uacute;n la LOPD &iquest;cu&aacute;l de los siguientes no es un criterio conforme al cu&aacute;l se grad&uacute;e  la cuant&iacute;a de las sanciones?";
 choices[77]= new Array();
 choices[77][0] = "El grado de intencionalidad.";
 choices[77][1] = "El volumen de negocio o actividad del infractor.";
 choices[77][2] = "La vinculaci&oacute;n de la actividad del infractor con la realizaci&oacute;n de tratamientos de datos de car&aacute;cter personal.";
 choices[77][3] = "La acreditaci&oacute;n de que con anterioridad a los hechos constitutivos de infracci&oacute;n la entidad imputada no ten&iacute;a implantados procedimientos adecuados de actuaci&oacute;n en la recogida y tratamiento de los datos de car&aacute;cter personal.";
 answers[77] = choices[77][3];
 units[77] = "29";
 comments[77] = "Id Pregunta: 9002. ";


//  Id pregunta: 9006 AÃ±o de creación de pregunta: 2011-01-01
 questions[78]= "79)  Entre las competencias que la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, atribuye a la Comisi&oacute;n Nacional de los Mercados y la Competencia, est&aacute; analizar la competencia efectiva en los mercados de referencia que defina y determinar los operadores que en esos mercados se consideren:";
 choices[78]= new Array();
 choices[78][0] = "Dominantes.";
 choices[78][1] = "Con poder significativo en el mercado.";
 choices[78][2] = "Anticompetitivos.";
 choices[78][3] = "Incumbentes";
 answers[78] = choices[78][1];
 units[78] = "110";
 comments[78] = "Id Pregunta: 9006. Teleco Ayto. Madrid 2010. Modificada seg&uacute;n Ley 9/2014";


//  Id pregunta: 9118 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  &iquest;C&oacute;mo se pueden clasificar los sistemas SIMD?";
 choices[79]= new Array();
 choices[79][0] = "Con CPU particionada";
 choices[79][1] = "Con m&uacute;ltiples ALUS";
 choices[79][2] = "Como A) y como B)";
 choices[79][3] = "Ninguna respuesta es correcta";
 answers[79] = choices[79][2];
 units[79] = "45";
 comments[79] = "Id Pregunta: 9118. ";


//  Id pregunta: 9322 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  Se&ntilde;ale la afirmaci&oacute;n verdadera sobre las pruebas de cumplimiento";
 choices[80]= new Array();
 choices[80][0] = "Son aquellas que se aplican para detectar la presencia o ausencia de errores en los procesos o controles, bas&aacute;ndose en muestreos estad&iacute;sticos o buscando espec&iacute;ficamente las operaciones de mayor riesgo";
 choices[80][1] = "Son aquellas orientadas a comprobar que se cumplen determinados procedimientos de control o procesos establecidos";
 choices[80][2] = "Son aquellas dedicadas exclusivamente a probar la existencia de controles";
 choices[80][3] = "Un ejemplo de pruebas de cumplimiento es la observaci&oacute;n de la ejecuci&oacute;n de los procesos";
 answers[80] = choices[80][1];
 units[80] = "31";
 comments[80] = "Id Pregunta: 9322. ";


//  Id pregunta: 9502 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  Cosmoplayer de Platinum:";
 choices[81]= new Array();
 choices[81][0] = "Es un plugin que reproduce sonidos";
 choices[81][1] = "Es un plugin que reproduce pel&iacute;culas";
 choices[81][2] = "Es un plugin que reproduce documentos VRML (formato de realidad virtual)";
 choices[81][3] = "Ninguna de las anteriores es correcta";
 answers[81] = choices[81][2];
 units[81] = "114";
 comments[81] = "Id Pregunta: 9502. NULL";


//  Id pregunta: 9730 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  &iquest;Cu&aacute;l de estas aseveraciones es INCORRECTA? En programaci&oacute;n, la ofuscaci&oacute;n del c&oacute;digo fuente";
 choices[82]= new Array();
 choices[82][0] = "dificulta la legilibilidad del c&oacute;digo fuente, pudiendo usar cifrado.";
 choices[82][1] = "impide la ingenier&iacute;a inversa.";
 choices[82][2] = "es un ejemplo de seguridad a trav&eacute;s de la oscuridad.";
 choices[82][3] = "es aplicable a lenguajes compilados directamente a c&oacute;digo m&aacute;quina como C o C++.";
 answers[82] = choices[82][1];
 units[82] = "91";
 comments[82] = "Id Pregunta: 9730. Examen TIC-A1 2013";


//  Id pregunta: 9924 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  En una base de datos relacional en la que se tiene informaci&oacute;n guardada en una tabla de provincias y adem&aacute;s se dispone de una tabla de municipios donde parte de la clave es la provincia, &iquest;se puede borrar un elemento de la tabla de provincias manteniendo la integridad del sistema?";
 choices[83]= new Array();
 choices[83][0] = "Si, una vez que los municipios ya existen no hay ning&uacute;n problema.";
 choices[83][1] = "Si, aunque no podr&iacute;a dar de alta nuevos municipios de esa provincia.";
 choices[83][2] = "S&oacute;lo si no hay ninguna poblaci&oacute;n perteneciente a esa provincia.";
 choices[83][3] = "No, la tabla de provincias no puede cambiar ya que son un elemento estable.";
 answers[83] = choices[83][2];
 units[83] = "58";
 comments[83] = "Id Pregunta: 9924. TIC A2, Examen 2013";


//  Id pregunta: 9951 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  &iquest;Qu&eacute; practicas, seg&uacute;n M&eacute;trica v3, tienen como objetivo potenciar la participaci&oacute;nactiva de la alta direcci&oacute;n como medio para obtener los mejores resultados en elmenor tiempo posible y con una mayor calidad de los productos?";
 choices[84]= new Array();
 choices[84][0] = "Sesiones JAD. ";
 choices[84][1] = "Sesiones JRP.";
 choices[84][2] = "Entrevistas";
 choices[84][3] = "Reuniones";
 answers[84] = choices[84][1];
 units[84] = "86";
 comments[84] = "Id Pregunta: 9951. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 9958 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  &iquest;Cu&aacute;l de los siguientes conceptos NO se puede representar a trav&eacute;s de un diagrama de flujo de datos?";
 choices[85]= new Array();
 choices[85][0] = "La persistencia";
 choices[85][1] = "Los procesos de transformaci&oacute;n.";
 choices[85][2] = "El flujo de la informaci&oacute;n.";
 choices[85][3] = "La herencia";
 answers[85] = choices[85][3];
 units[85] = "81";
 comments[85] = "Id Pregunta: 9958. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 9991 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  &iquest;Cu&aacute;l es el formato al que se tienen que ajustar las facturas electr&oacute;nicas que se remitan a las Administraciones P&uacute;blicas, de acuerdo con la ley 25/2013, de 27 de diciembre, de impulso de la factura electr&oacute;nica y creaci&oacute;n del registro contable de facturas en el Sector P&uacute;blico?";
 choices[86]= new Array();
 choices[86][0] = "e-Factura, versi&oacute;n 2.3";
 choices[86][1] = "Facturae, versi&oacute;n 3.2, y versiones sucesivas que publique el Ministerio de Industria, Turismo y Comercio.";
 choices[86][2] = "Facturae, versi&oacute;n 3.2 y 3.2.1, seg&uacute;n resoluci&oacute;n 21 de marzo de 2014";
 choices[86][3] = "ebXML, versi&oacute;n 2.0, hasta que se apruebe la Ley que transpone la Directiva 2006/123/CE sobre actividades de servicio en el mercado interior.";
 answers[86] = choices[86][2];
 units[86] = "70";
 comments[86] = "Id Pregunta: 9991. NULL";


//  Id pregunta: 10188 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  Entre los modelos de bases de datos prerelacionales, se verifica que:";
 choices[87]= new Array();
 choices[87][0] = "El modelo jer&aacute;rquico es incapaz de representar las relaciones reflexivas o las relaciones N:M";
 choices[87][1] = "Los modelos jer&aacute;rquico y CODASYL son en esencia modelos de datos en red, que aplican ciertas restricciones";
 choices[87][2] = "El Conjunto o SET es uno de los elementos m&aacute;s importantes del modelo CODASYL, como elemento b&aacute;sico para la representaci&oacute;n de interrelaciones 1:N y por tanto 1:1.";
 choices[87][3] = "Todas las anteriores";
 answers[87] = choices[87][3];
 units[87] = "57";
 comments[87] = "Id Pregunta: 10188. ";


//  Id pregunta: 10224 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  Para que la siguiente sentencia compile:float a = 100.21;I)&nbsp; Necesita hacer un casting a float: float a = (float) 100.21;II)&nbsp; Hay que colocar una f tras el valor num&eacute;rico: float a = 100.21f;III)&nbsp; Hay que prescindir de la fracci&oacute;n decimal: float a = 100;";
 choices[88]= new Array();
 choices[88][0] = "Compila bien sin cambios";
 choices[88][1] = "No compila, pero ninguna de las anteriores permite compilar";
 choices[88][2] = "S&oacute;lo es v&aacute;lida I)";
 choices[88][3] = "I), II) y III) son v&aacute;lidas";
 answers[88] = choices[88][3];
 units[88] = "60";
 comments[88] = "Id Pregunta: 10224. NULL";


//  Id pregunta: 10360 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  &iquest;Qu&eacute; organismos pueden participar en la ETSI?";
 choices[89]= new Array();
 choices[89][0] = "&Uacute;nicamente los Estados Miembros a trav&eacute;s del organismo p&uacute;blico que designen. En el caso de Espa&ntilde;a ser&iacute;a a trav&eacute;s de la SETSI.";
 choices[89][1] = "Pueden participar tanto las Administraciones P&uacute;blicas como operadores de red, la industria, centros de investigaci&oacute;n o los usuarios de los servicios de telecomunicaci&oacute;n";
 choices[89][2] = "&Uacute;nicamente los organismos nacionales de certificaci&oacute;n m&aacute;s representativos. En el caso de Espa&ntilde;a ser&iacute;a AENOR";
 choices[89][3] = "En el caso de Espa&ntilde;a, &uacute;nicamente la SETSI y AENOR";
 answers[89] = choices[89][1];
 units[89] = "42";
 comments[89] = "Id Pregunta: 10360. ETSI es un organismo sin &aacute;nimo de lucro creado al objeto de disponer del foro adecuado para la elaboraci&oacute;n de las normas de telecomunicaci&oacute;n que faciliten la estandarizaci&oacute;n del sector, y por lo tanto el avance hacia el Mercado &Uacute;nico Europeo";


//  Id pregunta: 10366 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  Respecto al m&eacute;todo de crashing en la gesti&oacute;n de proyectos es cierto que:";
 choices[90]= new Array();
 choices[90][0] = "No sirve para acortar la duraci&oacute;n de los proyectos cuando es aplicado a las actividades del camino cr&iacute;tico";
 choices[90][1] = "S&oacute;lo sirve para acortar la duraci&oacute;n de los proyectos si lo aplicamos a alguna de las actividades del camino cr&iacute;tico";
 choices[90][2] = "Acorta el tiempo del proyecto tanto si se aplica a las actividades cr&iacute;ticas como a las que no lo son";
 choices[90][3] = "No tiene nada que ver con la duraci&oacute;n del proyecto sino con la inclusi&oacute;n de recursos por fases ";
 answers[90] = choices[90][1];
 units[90] = "27";
 comments[90] = "Id Pregunta: 10366. ";


//  Id pregunta: 10455 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  En el &aacute;mbito de la continuidad de negocio una operaci&oacute;n clasificada como vital:";
 choices[91]= new Array();
 choices[91][0] = "Puede realizarse manualmente por un periodo breve de tiempo.";
 choices[91][1] = "Tiene mayor tolerancia a las interrupciones que una clasificada como cr&iacute;tica.";
 choices[91][2] = "Ninguna de las anteriores.";
 choices[91][3] = "A y B.";
 answers[91] = choices[91][3];
 units[91] = "97";
 comments[91] = "Id Pregunta: 10455. NULL";


//  Id pregunta: 10659 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Se&ntilde;ale aquella opci&oacute;n que no es una WPAN:";
 choices[92]= new Array();
 choices[92][0] = "NFC";
 choices[92][1] = "IRDA";
 choices[92][2] = "Wibree";
 choices[92][3] = "CSMA";
 answers[92] = choices[92][3];
 units[92] = "107";
 comments[92] = "Id Pregunta: 10659. ";


//  Id pregunta: 10675 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  La Ley 39/2015 del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas establece su entrada en vigor para &quot;las previsiones relativas al registro electr&oacute;nico de apoderamientos, registro electr&oacute;nico, registro de empleados p&uacute;blicos habilitados, punto de acceso general electr&oacute;nico de la Administraci&oacute;n y archivo &uacute;nico electr&oacute;nico&quot; en un plazo de:";
 choices[93]= new Array();
 choices[93][0] = "2 a&ntilde;os despu&eacute;s de su entrada en vigor.";
 choices[93][1] = "1 a&ntilde;o despu&eacute;s de su publicaci&oacute;n.";
 choices[93][2] = "1 a&ntilde;o despu&eacute;s de su aprobaci&oacute;n.";
 choices[93][3] = "6 meses despu&eacute;s de su publicaci&oacute;n.";
 answers[93] = choices[93][0];
 units[93] = "30";
 comments[93] = "Id Pregunta: 10675. ";


//  Id pregunta: 10968 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Una de las siguientes opciones incluye tres herramientas de creaci&oacute;n de blogs. Se&ntilde;ale la respuesta correcta:";
 choices[94]= new Array();
 choices[94][0] = "Blogger, Tumblr y Pocket.";
 choices[94][1] = "Wordpress, Blogger y Pocket.";
 choices[94][2] = "Wordpress, Tumblr y Blogger.";
 choices[94][3] = "Blogger, Path y Wordpress.";
 answers[94] = choices[94][2];
 units[94] = "120";
 comments[94] = "Id Pregunta: 10968. TIC A1 AGE 2014";


//  Id pregunta: 11155 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  A la hora de tomar requisitos para dise&ntilde;ar un sistema de informaci&oacute;n &iquest;Qu&eacute; informaci&oacute;n debe registrarse obligatoriamente de cada requisito?";
 choices[95]= new Array();
 choices[95][0] = "C&oacute;digo &uacute;nico";
 choices[95][1] = "Nombre descriptivo del requisito";
 choices[95][2] = "Descripci&oacute;n detallada del requisito";
 choices[95][3] = "Todos los anteriores";
 answers[95] = choices[95][3];
 units[95] = "78";
 comments[95] = "Id Pregunta: 11155. ";


//  Id pregunta: 11192 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;A cu&aacute;l de las siguientes prioridades de la estrategia Europa 2020 se hace referencia con el objetivo de la b&uacute;squeda de un econom&iacute;a basada en el conocimiento y la innovaci&oacute;n?";
 choices[96]= new Array();
 choices[96][0] = "Crecimiento inteligente";
 choices[96][1] = "Crecimiento sostenible";
 choices[96][2] = "Crecimiento innovador";
 choices[96][3] = "Crecimiento integrador";
 answers[96] = choices[96][0];
 units[96] = "30";
 comments[96] = "Id Pregunta: 11192. ";


//  Id pregunta: 11455 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Seg&uacute;n la Ley 9/2014, indique cu&aacute;l de las siguientes afirmaciones sobre los derechos de los usuarios finales es incorrecta:";
 choices[97]= new Array();
 choices[97][0] = "Los usuarios finales tienen derecho a impedir la identificaci&oacute;n de su l&iacute;nea.";
 choices[97][1] = "Los usuarios finales tienen derecho a no recibir llamadas autom&aacute;ticas sin intervenci&oacute;n humana sin su consentimiento previo e informado.";
 choices[97][2] = "Los usuarios finales tienen derecho a la continuidad del servicio y a obtener una compensaci&oacute;n autom&aacute;tica por interrupci&oacute;n del mismo.";
 choices[97][3] = "Los usuarios finales tienen derecho a no figurar en las gu&iacute;as de abonados.";
 answers[97] = choices[97][0];
 units[97] = "110";
 comments[97] = "Id Pregunta: 11455. ";


//  Id pregunta: 11519 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Qu&eacute; es FALSO si hablamos de SET?";
 choices[98]= new Array();
 choices[98][0] = "Es una aplicaci&oacute;n distribuida que en particular usa canales virtuales seguros y sirve para pagos con tarjetas de cr&eacute;dito.";
 choices[98][1] = "Es un est&aacute;ndar privado propuesto por Visa-Microsoft, Mastercard-Netscape.";
 choices[98][2] = "Es m&aacute;s sencillo de implementar que SSL, lo que contribuye a su r&aacute;pida y progresiva implantaci&oacute;n en el mercado.";
 choices[98][3] = "Es el acr&oacute;nimo de Secure Electronic Transactions, Transacciones Electr&oacute;nicas Seguras";
 answers[98] = choices[98][2];
 units[98] = "72";
 comments[98] = "Id Pregunta: 11519. NULL";


//  Id pregunta: 11654 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Son protocolos de estado del enlace:";
 choices[99]= new Array();
 choices[99][0] = "OSPF y RIPv2";
 choices[99][1] = "IS-IS y OSPF";
 choices[99][2] = "IGRP y RIPv2";
 choices[99][3] = "RIPv2 e IS-IS";
 answers[99] = choices[99][1];
 units[99] = "102";
 comments[99] = "Id Pregunta: 11654. ";


