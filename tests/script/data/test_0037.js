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

//  Id pregunta: 89 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Qui&eacute;nes son miembros del comit&eacute; JTC-1, responsable de la elaboraci&oacute;n de normas de Tratamiento de la Informaci&oacute;n excepto de los servicios p&uacute;blicos de comunicaciones?:";
 choices[0]= new Array();
 choices[0][0] = "Los pa&iacute;ses pertenecientes a la Uni&oacute;n Europea";
 choices[0][1] = "Las instituciones nacionales de normalizaci&oacute;n y la Comisi&oacute;n de la Uni&oacute;n Europea";
 choices[0][2] = "Una representaci&oacute;n del comit&eacute; directivo de la ISO";
 choices[0][3] = "El JTC-1 es una asociaci&oacute;n abierta, no un comit&eacute; de elaboraci&oacute;n de normas";
 answers[0] = choices[0][1];
 units[0] = "42";
 comments[0] = "Id Pregunta: 89. ";


//  Id pregunta: 101 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  En relaci&oacute;n con los sistemas abiertos, indique la afirmaci&oacute;n que no es correcta:";
 choices[1]= new Array();
 choices[1][0] = "Los sistemas abiertos son aqu&eacute;llos cuyas especificaciones est&aacute;n aprobadas por organismos independientes de normalizaci&oacute;n";
 choices[1][1] = "En lo tocante a sistemas operativos, sistema abierto es sin&oacute;nimo de Unix";
 choices[1][2] = "Sistemas abiertos son aqu&eacute;llos que pueden ser adquiridos de fuentes distintas en un mercado competitivo";
 choices[1][3] = "Un sistema definido como abierto es capaz de interconectarse con otro de acuerdo con unas normas establecidas";
 answers[1] = choices[1][1];
 units[1] = "40";
 comments[1] = "Id Pregunta: 101. ";


//  Id pregunta: 173 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  En cuanto al control de proyectos:";
 choices[2]= new Array();
 choices[2][0] = "El gr&aacute;fico de PERT est&aacute; basado en la representaci&oacute;n gr&aacute;fica de las duraciones de las etapas.";
 choices[2][1] = "El gr&aacute;fico de GANTT est&aacute; basado en la representaci&oacute;n gr&aacute;fica de las duraciones de las etapas.";
 choices[2][2] = "El gr&aacute;fico de Gantt consiste en una visualizaci&oacute;n del proyecto basada en las restricciones.";
 choices[2][3] = "Las respuestas 'a' y 'c' son correctas.";
 answers[2] = choices[2][1];
 units[2] = "27";
 comments[2] = "Id Pregunta: 173. ";


//  Id pregunta: 207 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  En esencia, la partici&oacute;n descompone un problema en sus partes constituyentes:";
 choices[3]= new Array();
 choices[3][0] = "Incrementando los detalles, movi&eacute;ndonos verticalmente en la jerarqu&iacute;a";
 choices[3][1] = "Descomponiendo funcionalmente el problema, movi&eacute;ndonos horizontalmente en la jerarqu&iacute;a";
 choices[3][2] = "Las dos primeras respuestas son ciertas";
 choices[3][3] = "Las dos primeras respuestas son falsas";
 answers[3] = choices[3][2];
 units[3] = "28";
 comments[3] = "Id Pregunta: 207. ";


//  Id pregunta: 236 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  En su dimensi&oacute;n vertical, el sistema de informaci&oacute;n tiene tres niveles jer&aacute;rquicos:";
 choices[4]= new Array();
 choices[4][0] = "Entradas, procesos y salidas";
 choices[4][1] = "Operacional, t&aacute;ctico y estrat&eacute;gico";
 choices[4][2] = "De an&aacute;lisis, de construcci&oacute;n y de implantaci&oacute;n";
 choices[4][3] = "Jer&aacute;rquico, de gesti&oacute;n y operativo";
 answers[4] = choices[4][1];
 units[4] = "21";
 comments[4] = "Id Pregunta: 236. ";


//  Id pregunta: 426 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  Seg&uacute;n el modelo de Nolan en cuatro etapas sobre la evoluci&oacute;n de la inform&aacute;tica en las organizaciones, las t&eacute;cnicas de direcci&oacute;n que se aplican en la fase de expansi&oacute;n son:";
 choices[5]= new Array();
 choices[5][0] = "Orientadas a ventas";
 choices[5][1] = "Orientadas al control";
 choices[5][2] = "Orientadas a los recursos";
 choices[5][3] = "Informales";
 answers[5] = choices[5][0];
 units[5] = "22";
 comments[5] = "Id Pregunta: 426. nolan";


//  Id pregunta: 502 AÃ±o de creación de pregunta: 2003-01-01
 questions[6]= "7)  En la decisi&oacute;n de alternativas para la adquisici&oacute;n de sistemas de tecnolog&iacute;as de la informaci&oacute;n no se usa ";
 choices[6]= new Array();
 choices[6][0] = "Las cadenas de Petri ";
 choices[6][1] = "Ponderaci&oacute;n lineal";
 choices[6][2] = "M&eacute;todo lexicogr&aacute;fico";
 choices[6][3] = "Gr&aacute;ficos R&aacute;dar";
 answers[6] = choices[6][0];
 units[6] = "34";
 comments[6] = "Id Pregunta: 502. Modificada por JCED Preparatic XVII";


//  Id pregunta: 503 AÃ±o de creación de pregunta: 2003-01-01
 questions[7]= "8)  En la metodolog&iacute;a MAGERIT la definici&oacute;n &quot;eventos que pueden desencadenar un incidente en la organizaci&oacute;n&quot; corresponde a:";
 choices[7]= new Array();
 choices[7][0] = "Riesgo";
 choices[7][1] = "Impacto";
 choices[7][2] = "Amenaza";
 choices[7][3] = "Vulnerabilidad";
 answers[7] = choices[7][2];
 units[7] = "31, 32, 33";
 comments[7] = "Id Pregunta: 503. ";


//  Id pregunta: 568 AÃ±o de creación de pregunta: 2006-01-01
 questions[8]= "9)  El t&eacute;rmino &quot;organizaci&oacute;n aprendiente&quot; se debe a:";
 choices[8]= new Array();
 choices[8][0] = "Peter Drucker";
 choices[8][1] = "Davenport";
 choices[8][2] = "C. Rami&oacute;";
 choices[8][3] = "Linda Applegate";
 answers[8] = choices[8][0];
 units[8] = "22";
 comments[8] = "Id Pregunta: 568. ";


//  Id pregunta: 602 AÃ±o de creación de pregunta: 2006-01-01
 questions[9]= "10)  &iquest;Las cesiones de datos personales entre Administraciones P&uacute;blicas, para el ejercicio de competencias distintas pueden realizarse?";
 choices[9]= new Array();
 choices[9][0] = "En todo caso";
 choices[9][1] = "Cuando lo habilite una norma con rango formal de Ley";
 choices[9][2] = "Basta una autorizaci&oacute;n en una norma reglamentaria";
 choices[9][3] = "Nunca";
 answers[9] = choices[9][1];
 units[9] = "29";
 comments[9] = "Id Pregunta: 602. ";


//  Id pregunta: 634 AÃ±o de creación de pregunta: 2006-01-01
 questions[10]= "11)  &iquest;C&oacute;mo se llama el lenguaje de definici&oacute;n de la protecci&oacute;n de derechos en DRM?";
 choices[10]= new Array();
 choices[10][0] = "XrSL (Extensible Rights Specification Language).";
 choices[10][1] = "CPL (Content Protection Language).";
 choices[10][2] = "XrML (Extensible Rights Markup Language XrML)";
 choices[10][3] = "DRML (Digital Rights Management Language).";
 answers[10] = choices[10][2];
 units[10] = "37";
 comments[10] = "Id Pregunta: 634. ";


//  Id pregunta: 700 AÃ±o de creación de pregunta: 2009-01-01
 questions[11]= "12)  Respecto a la LSSI puede decirse que:";
 choices[11]= new Array();
 choices[11][0] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico";
 choices[11][1] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico u otro medio de comunicaci&oacute;n electr&oacute;nica equivalente";
 choices[11][2] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico u otro medio de comunicaci&oacute;n electr&oacute;nica equivalente que previamente no hubieran sido solicitadas o expresamente autorizadas por los remitentes de las misma";
 choices[11][3] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico u otro medio de comunicaci&oacute;n electr&oacute;nica equivalente que previamente no hubieran sido solicitadas o expresamente autorizadas por los destinatarios de las misma";
 answers[11] = choices[11][3];
 units[11] = "30";
 comments[11] = "Id Pregunta: 700. Ley 34/2002, art&iacute;culo 21";


//  Id pregunta: 752 AÃ±o de creación de pregunta: 2004-01-01
 questions[12]= "13)  A finales del a&ntilde;o 2003, la industria lanz&oacute; un est&aacute;ndar H.350 de videoconferencia con el fin de impulsar el despliegue de este tipo de sistemas. &iquest;Sabr&iacute;a indicar en qu&eacute; consiste fundamentalmente?";
 choices[12]= new Array();
 choices[12][0] = "Permite una conversaci&oacute;n y negociaci&oacute;n sobre la calidad de los terminales sobre un protocolo HTTP entre dos extremos remotos ";
 choices[12][1] = "Complementa el est&aacute;ndar H.323 para soportar transmisi&oacute;n por l&iacute;neas ADSL";
 choices[12][2] = "Define un servicio de directorio basado en LDAP para usuarios y equipos de videoconferencia.";
 choices[12][3] = "Todas las anteriores";
 answers[12] = choices[12][2];
 units[12] = "117";
 comments[12] = "Id Pregunta: 752. ";


//  Id pregunta: 757 AÃ±o de creación de pregunta: 2004-01-01
 questions[13]= "14)  &iquest;De las siguientes API's cual no es un API de desarrollo de tarjetas inteligentes?";
 choices[13]= new Array();
 choices[13][0] = "CryptoAPI";
 choices[13][1] = "PKCS#7";
 choices[13][2] = "PKCS#11";
 choices[13][3] = "JCE/JCA";
 answers[13] = choices[13][1];
 units[13] = "74";
 comments[13] = "Id Pregunta: 757. NULL";


//  Id pregunta: 884 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  &iquest;Cu&aacute;l es la diferencia b&aacute;sica entre C y C++?";
 choices[14]= new Array();
 choices[14][0] = "C++ es la versi&oacute;n de C estandarizada por ANSI (tambi&eacute;n se le conoce como ANSI-C).";
 choices[14][1] = "C++ es un superconjunto de instrucciones de C para soportar programaci&oacute;n orientada a objetos.";
 choices[14][2] = "C++ es la versi&oacute;n de C preparada por los laboratorios Bell de ATT que permite embeber sentencias SQL.";
 choices[14][3] = "C++ es una versi&oacute;n 4GL del C est&aacute;ndar (lenguaje de 4&ordf; generaci&oacute;n) mientras que C es un lenguaje de 3&ordf; generaci&oacute;n.";
 answers[14] = choices[14][1];
 units[14] = "82, 84";
 comments[14] = "Id Pregunta: 884. ";


//  Id pregunta: 1261 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  Las redes neuronales son:";
 choices[15]= new Array();
 choices[15][0] = "Redes de comunicaciones controladas por inteligencia artificial";
 choices[15][1] = "Redes de ordenadores que piensan";
 choices[15][2] = "Una tecnolog&iacute;a que emula el funcionamiento del cerebro humano";
 choices[15][3] = "Nada de lo anterior";
 answers[15] = choices[15][2];
 units[15] = "63";
 comments[15] = "Id Pregunta: 1261. ";


//  Id pregunta: 1517 AÃ±o de creación de pregunta: 2003-01-01
 questions[16]= "17)  Al bloque de sentencias PL/SQL almacenado en el diccionario de datos, para ser invocado desde las aplicaciones, se denomina:";
 choices[16]= new Array();
 choices[16][0] = "Procedimiento";
 choices[16][1] = "Producto.";
 choices[16][2] = "Secuencia.";
 choices[16][3] = "Segmento.";
 answers[16] = choices[16][0];
 units[16] = "58";
 comments[16] = "Id Pregunta: 1517. Junta Andaluc&iacute;a";


//  Id pregunta: 1649 AÃ±o de creación de pregunta: 2004-01-01
 questions[17]= "18)  &iquest;Cu&aacute;l de los siguientes t&eacute;rminos no tienen relaci&oacute;n con el elearning?";
 choices[17]= new Array();
 choices[17][0] = "IMS";
 choices[17][1] = "SCORM";
 choices[17][2] = "Moodle";
 choices[17][3] = "ePupil";
 answers[17] = choices[17][3];
 units[17] = "66";
 comments[17] = "Id Pregunta: 1649. ";


//  Id pregunta: 1762 AÃ±o de creación de pregunta: 2006-01-01
 questions[18]= "19)  Se&ntilde;alar la afirmaci&oacute;n FALSA sobre los APPLETS de Java";
 choices[18]= new Array();
 choices[18][0] = "Programa Java que proporciona funcionalidad avanzada a una p&aacute;gina web";
 choices[18][1] = "S&oacute;lo utiliza recursos del cliente, no interviene nada el servidor.";
 choices[18][2] = "No puede leer o escribir ficheros en la m&aacute;quina local en la que se ejecute";
 choices[18][3] = "Todas las afirmaciones anteriores son verdaderas";
 answers[18] = choices[18][3];
 units[18] = "60";
 comments[18] = "Id Pregunta: 1762. B es falsa. Usa recursos del servidor para descargar el propio Applet y, en su caso, hacer consultas.";


//  Id pregunta: 1781 AÃ±o de creación de pregunta: 2006-01-01
 questions[19]= "20)  Cual de los siguientes no forma parte del paquete Open Office";
 choices[19]= new Array();
 choices[19][0] = "Impress";
 choices[19][1] = "Calc";
 choices[19][2] = "Math";
 choices[19][3] = "Text";
 answers[19] = choices[19][3];
 units[19] = "61,62";
 comments[19] = "Id Pregunta: 1781. ";


//  Id pregunta: 1931 AÃ±o de creación de pregunta: 2006-01-01
 questions[20]= "21)  Seleccione la afirmaci&oacute;n incorrecta sobre la relaci&oacute;n de la especificaci&oacute;n Learning Design con otras especificaciones";
 choices[20]= new Array();
 choices[20][0] = "IMS DR puede ser transformado a las caracter&iacute;sticas de Learning Design, particularmente con la clase &quot;abstract person&quot;";
 choices[20][1] = "Learning Design puede ser integrado dentro la estructura de IMS Content Package en la secci&oacute;n de &lt;organization&gt;";
 choices[20][2] = "Learning Design puede incorporar preguntas y test definidos con IMS QTI";
 choices[20][3] = "Learning Design incluye expresiones, metadatos y vocabularios de IMS y IEEE metadata";
 answers[20] = choices[20][0];
 units[20] = "66";
 comments[20] = "Id Pregunta: 1931. ";


//  Id pregunta: 2700 AÃ±o de creación de pregunta: 2003-01-01
 questions[21]= "22)  Principal inconveniente del teletexto:";
 choices[21]= new Array();
 choices[21][0] = "El juego de colores es reducido.";
 choices[21][1] = "Carece de interactividad real.";
 choices[21][2] = "La resoluci&oacute;n gr&aacute;fica no es buena.";
 choices[21][3] = "Necesita un decodificador caro y voluminoso.";
 answers[21] = choices[21][1];
 units[21] = "93";
 comments[21] = "Id Pregunta: 2700. NULL";


//  Id pregunta: 2779 AÃ±o de creación de pregunta: 2006-01-01
 questions[22]= "23)  El modelo de ciclo de vida R.A.D se basa en:";
 choices[22]= new Array();
 choices[22][0] = "El modelo de desarrollo incremental";
 choices[22][1] = "El modelo en espiral";
 choices[22][2] = "El prototipado evolutivo";
 choices[22][3] = "Ninguno de los anteriores";
 answers[22] = choices[22][2];
 units[22] = "85";
 comments[22] = "Id Pregunta: 2779. ";


//  Id pregunta: 2807 AÃ±o de creación de pregunta: 2006-01-01
 questions[23]= "24)  El modelo de Jelinsi-Moranda se encuadra dentro de las m&eacute;tricas de:";
 choices[23]= new Array();
 choices[23][0] = "Productividad";
 choices[23][1] = "Fiabilidad";
 choices[23][2] = "Factores de calidad";
 choices[23][3] = "Complejidad";
 answers[23] = choices[23][1];
 units[23] = "88";
 comments[23] = "Id Pregunta: 2807. NULL";


//  Id pregunta: 2841 AÃ±o de creación de pregunta: 2006-01-01
 questions[24]= "25)  &iquest;En el modelo EFQM qu&eacute; porcentaje se da a los procesos?";
 choices[24]= new Array();
 choices[24][0] = "14";
 choices[24][1] = "15";
 choices[24][2] = "10";
 choices[24][3] = "20";
 answers[24] = choices[24][2];
 units[24] = "92";
 comments[24] = "Id Pregunta: 2841. NULL";


//  Id pregunta: 2848 AÃ±o de creación de pregunta: 2006-01-01
 questions[25]= "26)  El nivel que determina la precisa pronunciaci&oacute;n de las letras, s&iacute;labas y palabras es el";
 choices[25]= new Array();
 choices[25][0] = "fonol&oacute;gico";
 choices[25][1] = "pros&oacute;dico";
 choices[25][2] = "fon&eacute;tico";
 choices[25][3] = "ninguno de los anteriores";
 answers[25] = choices[25][1];
 units[25] = "94";
 comments[25] = "Id Pregunta: 2848. ";


//  Id pregunta: 2940 AÃ±o de creación de pregunta: 2004-01-01
 questions[26]= "27)  El protocolo que permite llevar peticiones para bloques de dispositivos SCSI sobre una red IP es:";
 choices[26]= new Array();
 choices[26][0] = "uSCSI";
 choices[26][1] = "FCP";
 choices[26][2] = "iSCSI";
 choices[26][3] = "FCIP";
 answers[26] = choices[26][2];
 units[26] = "48,96,97";
 comments[26] = "Id Pregunta: 2940. Similar a examen TIC SS A 2004";


//  Id pregunta: 3154 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa si nos referimos a la modulaci&oacute;n?:";
 choices[27]= new Array();
 choices[27][0] = "La modulaci&oacute;n/desmodulaci&oacute;n se realiza asociando los s&iacute;mbolos de un alfabeto a distintas se&ntilde;ales anal&oacute;gicas";
 choices[27][1] = "La modulaci&oacute;n FSK no afecta a la amplitud de la se&ntilde;al anal&oacute;gica";
 choices[27][2] = "La modulaci&oacute;n QPSK act&uacute;a sobre la amplitud de la se&ntilde;al anal&oacute;gica";
 choices[27][3] = "La modulaci&oacute;n QAM act&uacute;a sobre la fase y la amplitud de la se&ntilde;al anal&oacute;gica";
 answers[27] = choices[27][2];
 units[27] = "97";
 comments[27] = "Id Pregunta: 3154. NULL";


//  Id pregunta: 3248 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  &iquest;Cu&aacute;l es la velocidad del canal D en un acceso primario RDSI en Europa?:";
 choices[28]= new Array();
 choices[28][0] = "16 kbps";
 choices[28][1] = "32 kbps";
 choices[28][2] = "64 kbps";
 choices[28][3] = "128 kbps";
 answers[28] = choices[28][2];
 units[28] = "103";
 comments[28] = "Id Pregunta: 3248. ";


//  Id pregunta: 3534 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  En las redes locales, &iquest;qu&eacute; funciones tienen los repetidores?:";
 choices[29]= new Array();
 choices[29][0] = "Repiten los paquetes como se&ntilde;ales el&eacute;ctricas de una red a otra";
 choices[29][1] = "Repiten los paquetes incompletos para que sean reenviados completos";
 choices[29][2] = "Eliminan el ruido de las se&ntilde;ales en la l&iacute;nea y emiten los paquetes regenerados";
 choices[29][3] = "Repiten y ampl&iacute;an las se&ntilde;ales el&eacute;ctricas, incluyendo el ruido";
 answers[29] = choices[29][2];
 units[29] = "102";
 comments[29] = "Id Pregunta: 3534. ";


//  Id pregunta: 3566 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  En un protocolo de nivel de enlace se denomina ventana a:";
 choices[30]= new Array();
 choices[30][0] = "Al env&iacute;o de una trama de control que indica al emisor que la trama de informaci&oacute;n ha llegado correctamente";
 choices[30][1] = "Al envio por el emisor de las tramas de informaci&oacute;n numeradas secuencialmente";
 choices[30][2] = "Al envio de los asentimientos numerados por cada una de las tramas de informaci&oacute;n recibidas";
 choices[30][3] = "Al n&uacute;mero m&aacute;ximo de tramas que en un momento dado pueden estar pendientes de confirmaci&oacute;n";
 answers[30] = choices[30][3];
 units[30] = "101";
 comments[30] = "Id Pregunta: 3566. ";


//  Id pregunta: 3718 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  Los conceptos de arquitecturas de niveles est&aacute;n especificados en la siguiente norma de la ITU-T:";
 choices[31]= new Array();
 choices[31][0] = "X.400";
 choices[31][1] = "I.200";
 choices[31][2] = "X.500";
 choices[31][3] = "X.200";
 answers[31] = choices[31][3];
 units[31] = "113";
 comments[31] = "Id Pregunta: 3718. ";


//  Id pregunta: 3975 AÃ±o de creación de pregunta: 2006-01-01
 questions[32]= "33)  El est&aacute;ndar EIA/TIA 568, aprobado en Julio de 1991,esta en conformidad con lo dispuesto por:";
 choices[32]= new Array();
 choices[32][0] = "CEN";
 choices[32][1] = "ISO";
 choices[32][2] = "ITU-T";
 choices[32][3] = "ANSI";
 answers[32] = choices[32][3];
 units[32] = "99";
 comments[32] = "Id Pregunta: 3975. ";


//  Id pregunta: 4226 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  Identifique el rango de frecuencias que se utiliza en el canal ascendente o de retorno en una red HFC (Hybrid Fiber Coaxial):";
 choices[33]= new Array();
 choices[33][0] = "De 50 a 550 Mhz";
 choices[33][1] = "De 5 a 50 MHz";
 choices[33][2] = "De 550 a 860 MHz";
 choices[33][3] = "De 5 a 860 MHz";
 answers[33] = choices[33][1];
 units[33] = "99";
 comments[33] = "Id Pregunta: 4226. ";


//  Id pregunta: 4349 AÃ±o de creación de pregunta: 2007-01-01
 questions[34]= "35)  La red de investigaci&oacute;n espa&ntilde;ola encargada de dar servicio Internet a universidades y centros de investigaci&oacute;n es:";
 choices[34]= new Array();
 choices[34][0] = "La intranet del CSIC";
 choices[34][1] = "No existe una red propia de investigaci&oacute;n, utilizando los servicios que ofrece Internet.";
 choices[34][2] = "RedIRIS.";
 choices[34][3] = "La Intranet Administrativa.";
 answers[34] = choices[34][2];
 units[34] = "103";
 comments[34] = "Id Pregunta: 4349. ";


//  Id pregunta: 4493 AÃ±o de creación de pregunta: 2007-01-01
 questions[35]= "36)  La conexi&oacute;n de una red privada a Internet por medio de una pasarela (o &quot;gateway&quot;) NAT permite:";
 choices[35]= new Array();
 choices[35][0] = "Asignar din&aacute;micamente direcciones IP publicas a un ordenador";
 choices[35][1] = "Actuar como cortafuegos filtrando los paquetes de datos recibidos.";
 choices[35][2] = "Asignar din&aacute;micamente direcciones IP privadas dentro de una red privada.";
 choices[35][3] = "Que varios ordenadores accedan a Internet al mismo tiempo por medio de una &uacute;nica direcci&oacute;n IP publica.";
 answers[35] = choices[35][3];
 units[35] = "112";
 comments[35] = "Id Pregunta: 4493. ";


//  Id pregunta: 4700 AÃ±o de creación de pregunta: 2007-01-01
 questions[36]= "37)  IESG (Internet Engineering Steering Group) se encarga de:";
 choices[36]= new Array();
 choices[36][0] = "Coordinaci&oacute;n entre organizaciones.";
 choices[36][1] = "Asignaci&oacute;n de recursos.";
 choices[36][2] = "La supervisi&oacute;n y aprobaci&oacute;n de normas";
 choices[36][3] = "Especificaci&oacute;n de est&aacute;ndares";
 answers[36] = choices[36][0];
 units[36] = "42";
 comments[36] = "Id Pregunta: 4700. Examen 2006 JCYL";


//  Id pregunta: 5184 AÃ±o de creación de pregunta: 2003-01-01
 questions[37]= "38)  Se&ntilde;ale la respuesta verdadera con respecto a los atributos en el modelo E/R:";
 choices[37]= new Array();
 choices[37][0] = "Cada atributo toma valores de un dominio diferenciado y no compartido";
 choices[37][1] = "Al atributo que identifica un&iacute;vocamente cada una de las ocurrencias de la entidad principal se le denomina atributo fuerte";
 choices[37][2] = "Existen atributos simples, mixtos y compuestos";
 choices[37][3] = "Existen atributos monovalorados y multivalorados";
 answers[37] = choices[37][3];
 units[37] = "80";
 comments[37] = "Id Pregunta: 5184. ";


//  Id pregunta: 5245 AÃ±o de creación de pregunta: 2003-01-01
 questions[38]= "39)  Un Plan de sistemas de Informaci&oacute;n y Comunicaciones se elabora (se&ntilde;ale la falsa):";
 choices[38]= new Array();
 choices[38][0] = "Se elabora a partir de los objetivos estrat&eacute;gicos de la organizaci&oacute;n";
 choices[38][1] = "Se recogen las necesidades y requerimientos de los usuarios, en base a procesos de negocio";
 choices[38][2] = "No implica necesariamente el liderazgo del equipo directivo para su &eacute;xito";
 choices[38][3] = "Se valoran los escenarios tecnol&oacute;gicos que aporten el menor riesgo, la mayor protecci&oacute;n de inversiones y los m&aacute;ximos beneficios";
 answers[38] = choices[38][2];
 units[38] = "77";
 comments[38] = "Id Pregunta: 5245. ";


//  Id pregunta: 5505 AÃ±o de creación de pregunta: 2003-01-01
 questions[39]= "40)  C&uacute;al es la respuesta correcta respecto a XBRL (eXtensible Business Reporting Language)?:";
 choices[39]= new Array();
 choices[39][0] = "Es un lenguaje basado en XML";
 choices[39][1] = "Permite el intercambio de informaci&oacute;n financiera de las empresas";
 choices[39][2] = "Es posible establecer taxonom&iacute;as que clasifiquen los datos seg&uacute;n etiquetas definidas";
 choices[39][3] = "Todas son correctas";
 answers[39] = choices[39][3];
 units[39] = "69";
 comments[39] = "Id Pregunta: 5505. NULL";


//  Id pregunta: 5703 AÃ±o de creación de pregunta: 2003-01-01
 questions[40]= "41)  Se&ntilde;ale la afirmaci&oacute;n falsa sobre SOAP:";
 choices[40]= new Array();
 choices[40][0] = "Funciona s&oacute;lo sobre HTTP";
 choices[40][1] = "Tiene como base XML";
 choices[40][2] = "La cabecera header es opcional";
 choices[40][3] = "El desarrollo body contiene la informaci&oacute;n principal";
 answers[40] = choices[40][0];
 units[40] = "51";
 comments[40] = "Id Pregunta: 5703. NULL";


//  Id pregunta: 5708 AÃ±o de creación de pregunta: 2009-01-01
 questions[41]= "42)  Seleccione la opci&oacute;n correcta:";
 choices[41]= new Array();
 choices[41][0] = "SOAP es un protocolo para el intercambio de mensajes SOA";
 choices[41][1] = "Dos aplicaciones que se comunican mediante SOAP deben estar escritas en el mismo lenguaje de programaci&oacute;n";
 choices[41][2] = "Los mensajes SOAP se pueden transportar, entre otros medios, sobre HTTP, SMTP o palomas mensajeras";
 choices[41][3] = "Para que dos aplicaciones se comuniquen mediante SOAP siempre ser&aacute; necesario alterar las configuraciones de los posibles firewalls entre ellas";
 answers[41] = choices[41][2];
 units[41] = "51";
 comments[41] = "Id Pregunta: 5708. MAP 2008 A2";


//  Id pregunta: 5734 AÃ±o de creación de pregunta: 2003-01-01
 questions[42]= "43)  &iquest;Cu&aacute;ntos interfaces tiene el modelo de referencia de workflow de WfMC?";
 choices[42]= new Array();
 choices[42][0] = "1";
 choices[42][1] = "3";
 choices[42][2] = "5";
 choices[42][3] = "7";
 answers[42] = choices[42][2];
 units[42] = "71";
 comments[42] = "Id Pregunta: 5734. ";


//  Id pregunta: 5864 AÃ±o de creación de pregunta: 2009-01-01
 questions[43]= "44)  Indique la respuesta INCORRECTA:";
 choices[43]= new Array();
 choices[43][0] = "Las herramientas PILAR soportan el an&aacute;lisis y la gesti&oacute;n de riesgos de un sistema de informaci&oacute;n siguiendo la metodolog&iacute;a Magerit.";
 choices[43][1] = "El acr&oacute;nimo PILAR significa: Procedimiento Integral L&oacute;gico para el An&aacute;lisis de Riesgos";
 choices[43][2] = "Las herramientas PILAR disponen de una biblioteca est&aacute;ndar de prop&oacute;sito general";
 choices[43][3] = "Las herramientas PILAR son capaces de realizar calificaciones de seguridad respecto a ISO/IEC 27002:2005 - C&oacute;digo de buenas pr&aacute;cticas para la Gesti&oacute;n de la Seguridad de la Informaci&oacute;n -";
 answers[43] = choices[43][1];
 units[43] = "33";
 comments[43] = "Id Pregunta: 5864. MAP 2008 A1";


//  Id pregunta: 5877 AÃ±o de creación de pregunta: 2009-01-01
 questions[44]= "45)  &iquest;Cu&aacute;l de las siguientes afirmaciones es CIERTA para los sistemas de comunicaciones m&oacute;viles?:";
 choices[44]= new Array();
 choices[44][0] = "La implementaci&oacute;n de Clase 1 de WTLS para WAP proporciona autenticaci&oacute;n terminal-servidor";
 choices[44][1] = "Con WTLS la negociaci&oacute;n de los datagramas se hace mediante UDP";
 choices[44][2] = "WTLS no admite la utilizaci&oacute;n de algoritmos criptogr&aacute;ficos basados en curvas el&iacute;pticas";
 choices[44][3] = "WML es el lenguaje de navegaci&oacute;n para terminales m&oacute;viles WAP";
 answers[44] = choices[44][3];
 units[44] = "108";
 comments[44] = "Id Pregunta: 5877. MAP 2008 A1";


//  Id pregunta: 5971 AÃ±o de creación de pregunta: 2010-01-01
 questions[45]= "46)  Cu&aacute;l de las siguientes opciones NO es un principio de la protecci&oacute;n de datos seg&uacute;n la Ley Org&aacute;nica 15/1999:";
 choices[45]= new Array();
 choices[45][0] = "Datos relativos a las personas";
 choices[45][1] = "Calidad de los datos";
 choices[45][2] = "Consentimiento del afectado";
 choices[45][3] = "Seguridad de los datos";
 answers[45] = choices[45][0];
 units[45] = "29";
 comments[45] = "Id Pregunta: 5971. Castilla La Mancha 2009";


//  Id pregunta: 5991 AÃ±o de creación de pregunta: 2010-01-01
 questions[46]= "47)  Para eliminar una tabla de una base de datos relacional, se utiliza la sentencia DDL:";
 choices[46]= new Array();
 choices[46][0] = "Delete table.";
 choices[46][1] = "rm table.";
 choices[46][2] = "Delete table now.";
 choices[46][3] = "DROP TABLE.";
 answers[46] = choices[46][3];
 units[46] = "58";
 comments[46] = "Id Pregunta: 5991. TIC A 2009";


//  Id pregunta: 6051 AÃ±o de creación de pregunta: 2010-01-01
 questions[47]= "48)  &iquest;Qu&eacute; es CMOT?";
 choices[47]= new Array();
 choices[47][0] = "Significa Common Management Over TCP/IP y es una extensi&oacute;n de los est&aacute;ndares de gesti&oacute;n OSI para Internet";
 choices[47][1] = "Significa Common Mobile Online Trespassing y es un protocolo para realizar el traspaso de llamadas entre sistemas de telefon&iacute;a m&oacute;vil sobre VSAT ";
 choices[47][2] = "Significa Critical Mode Online Testing y es una herramienta para la realizaci&oacute;n de pruebas de rendimiento no intrusivas en aplicaciones de misi&oacute;n cr&iacute;tica ";
 choices[47][3] = "Ninguna de las respuestas anteriores es correcta ";
 answers[47] = choices[47][0];
 units[47] = "104";
 comments[47] = "Id Pregunta: 6051. ";


//  Id pregunta: 6056 AÃ±o de creación de pregunta: 2010-01-01
 questions[48]= "49)  La norma ISO/IEC 15408 Evaluation Criteria for IT Security (informalmente conocida como Common Criteria):";
 choices[48]= new Array();
 choices[48][0] = "Establece una escala creciente de confianza en la seguridad del producto evaluado, que va desde el Evaluation Assurement Level (EAL) 0 al EAL 7.";
 choices[48][1] = "Establece perfiles de protecci&oacute;n, que deben ser elaborados por ISO/IEC.";
 choices[48][2] = "Permite certificar sistemas, productos y algoritmos criptogr&aacute;ficos.";
 choices[48][3] = "Figura como criterio de evaluaci&oacute;n en la Orden PRE/2740/2007 por la que se aprueba el Reglamento de evaluaci&oacute;n y certificaci&oacute;n de la seguridad de las TI.";
 answers[48] = choices[48][3];
 units[48] = "74";
 comments[48] = "Id Pregunta: 6056. TIC A 2009";


//  Id pregunta: 6079 AÃ±o de creación de pregunta: 2010-01-01
 questions[49]= "50)  &iquest;Cu&aacute;l de las siguientes NO es una salida del proceso de Selecci&oacute;n de Vendedores dentro de la Gesti&oacute;n de las Adquisiciones del Proyecto?";
 choices[49]= new Array();
 choices[49][0] = "Contrato.";
 choices[49][1] = "Plan de gesti&oacute;n del contrato.";
 choices[49][2] = "Disponibilidad de recursos.";
 choices[49][3] = "Lista de vendedores calificados.";
 answers[49] = choices[49][3];
 units[49] = "27";
 comments[49] = "Id Pregunta: 6079. ";


//  Id pregunta: 6112 AÃ±o de creación de pregunta: 2010-01-01
 questions[50]= "51)  Un diagrama de transici&oacute;n de estados:";
 choices[50]= new Array();
 choices[50][0] = "Describe el comportamiento din&aacute;mico del sistema de informaci&oacute;n mostrando c&oacute;mo interact&uacute;an los objetos entre s&iacute;.";
 choices[50][1] = "Es un tipo de diagrama de interacci&oacute;n cuyo objetivo es describir el comportamiento din&aacute;mico del sistema de informaci&oacute;n haciendo &eacute;nfasis en la secuencia de los mensajes intercambiados por los objetos.";
 choices[50][2] = "Consiste en la descomposici&oacute;n sucesiva de los procesos, desde un nivel general, hasta llegar al nivel de detalle necesario para reflejar toda la sem&aacute;ntica que debe soportar el sistema en estudio.";
 choices[50][3] = "Representa los estados que puede tomar un componente o un sistema y muestra los eventos que implican el cambio de un estado a otro.";
 answers[50] = choices[50][3];
 units[50] = "82";
 comments[50] = "Id Pregunta: 6112. TIC A 2009";


//  Id pregunta: 6143 AÃ±o de creación de pregunta: 2010-01-01
 questions[51]= "52)  En relaci&oacute;n con los c&oacute;decs que se utilizan en sistemas de telefon&iacute;a:";
 choices[51]= new Array();
 choices[51][0] = "G.711 utiliza el algoritmo PCM y es el c&oacute;dec que garantiza la mayor calidad de sonido por lo que se suele utilizar en entornos LAN de VoIP";
 choices[51][1] = "G.729 es el algoritmo m&aacute;s extendido en sistemas de VoIP sobre WAN, ya que aunque tiene p&eacute;rdida por compresi&oacute;n la calidad de sonido (MOS) es buena";
 choices[51][2] = "El c&oacute;dec que se utiliza en GSM (GSM 06.10) proporciona una calidad de sonido peor que G.711 y G.729";
 choices[51][3] = "Todas las respuestas anteriores son correctas";
 answers[51] = choices[51][3];
 units[51] = "100, 109";
 comments[51] = "Id Pregunta: 6143. ";


//  Id pregunta: 6216 AÃ±o de creación de pregunta: 2010-01-01
 questions[52]= "53)  &iquest;Cu&aacute;l de los siguientes no es un tipo de ramas o m&oacute;dulos subordinados del an&aacute;lisis de transformaci&oacute;n?";
 choices[52]= new Array();
 choices[52][0] = "Aferentes";
 choices[52][1] = "de Transformaci&oacute;n";
 choices[52][2] = "Diferentes";
 choices[52][3] = "Eferentes";
 answers[52] = choices[52][2];
 units[52] = "81";
 comments[52] = "Id Pregunta: 6216. TICB-2009, bloque desarrollo";


//  Id pregunta: 6217 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)  En el desarrollo de un sistema &iquest;En qu&eacute; casos de los siguientes es adecuado el uso de un 'modelo en espiral'?";
 choices[53]= new Array();
 choices[53][0] = "Sistemas de peque&ntilde;o tama&ntilde;o";
 choices[53][1] = "Cuando los requisitos est&eacute;n bien definidos desde un principio";
 choices[53][2] = "Proyectos donde sea importante el factor riesgo";
 choices[53][3] = "El producto a desarrollar no es novedoso";
 answers[53] = choices[53][2];
 units[53] = "76";
 comments[53] = "Id Pregunta: 6217. TICB-2009, bloque desarrollo";


//  Id pregunta: 6221 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  Respecto a los diagramas de flujo de datos &iquest;Cu&aacute;l de las siguientes es falsa?";
 choices[54]= new Array();
 choices[54][0] = "Un diagrama de flujo de datos se compone de los siguientes elementos: entidad externa, proceso, almac&eacute;n de datos y flujo de datos";
 choices[54][1] = "Un proceso como origen de datos puede hacer las funciones de un almacen de datos";
 choices[54][2] = "Los flujos de datos que comunican procesos con almacenes pueden ser de los tipos: consulta, actualizaci&oacute;n y di&aacute;logo";
 choices[54][3] = "Elementos a&ntilde;adidos al diagrama de flujo de datos para sistemas especiales: proceso de control y flujo de control";
 answers[54] = choices[54][1];
 units[54] = "81";
 comments[54] = "Id Pregunta: 6221. TICB-2009, bloque desarrollo";


//  Id pregunta: 6236 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  &iquest;C&oacute;mo se denominan las interfaces de servicio de la implementaci&oacute;n del servicio de directorio de Microsoft en una red distribuida de computadores?";
 choices[55]= new Array();
 choices[55][0] = "ADSI";
 choices[55][1] = "LDAP";
 choices[55][2] = "AD";
 choices[55][3] = "ADIS";
 answers[55] = choices[55][0];
 units[55] = "115";
 comments[55] = "Id Pregunta: 6236. ";


//  Id pregunta: 6239 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  A qu&eacute; proceso principal de M&eacute;trica pertenece la tarea &quot;Determinaci&oacute;n del Acuerdo de Nivel de Servicio&quot;";
 choices[56]= new Array();
 choices[56][0] = "Dise&ntilde;o del Sistema de Informaci&oacute;n";
 choices[56][1] = "Construcci&oacute;n del Sistema de Informaci&oacute;n";
 choices[56][2] = "Mantenimiento del Sistema de Informaci&oacute;n";
 choices[56][3] = "Implantaci&oacute;n y Aceptaci&oacute;n del Sistema de Informaci&oacute;n";
 answers[56] = choices[56][3];
 units[56] = "86";
 comments[56] = "Id Pregunta: 6239. TICB-2009, bloque desarrollo";


//  Id pregunta: 6245 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  El modelo CMMI est&aacute; enfocado en tres &aacute;reas: &iquest;Cu&aacute;l de las siguientes no es una de ellas?";
 choices[57]= new Array();
 choices[57][0] = "Desarrollo de servicios y productos - CMMI para el desarrollo (CMMI - DEV)";
 choices[57][1] = "Adquisici&oacute;n de productos y servicios - CMMI para la adquisici&oacute;n (CMMI - ACQ)";
 choices[57][2] = "Establecimiento de Servicios, Gesti&oacute;n y entrega - CMMI para los servicios (CMMI - SVC)";
 choices[57][3] = "Establecimiento de la calidad de servicios y productos - CMMI para la calidad (CMMI - QUA)";
 answers[57] = choices[57][3];
 units[57] = "79";
 comments[57] = "Id Pregunta: 6245. TICB-2009, bloque desarrollo";


//  Id pregunta: 6295 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  &iquest;Cu&aacute;l de las siguientes no es una t&eacute;cnica de bajo nivel de obtenci&oacute;n de requisitos en el an&aacute;lisis de los sistemas de Informaci&oacute;n?";
 choices[58]= new Array();
 choices[58][0] = "Entrevistas";
 choices[58][1] = "An&aacute;lisis de Mercado";
 choices[58][2] = "Entorno de Bucles Adaptativo";
 choices[58][3] = "Brainstorming";
 answers[58] = choices[58][2];
 units[58] = "78";
 comments[58] = "Id Pregunta: 6295. ";


//  Id pregunta: 6417 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  El reglamento sobre las condiciones b&aacute;sicas para el acceso de las personas con discapacidad a las tecnolog&iacute;as, productos y servicios relacionados con la sociedad de la informaci&oacute;n y medios de comunicaci&oacute;n social es el:";
 choices[59]= new Array();
 choices[59][0] = "RD 1494/2007";
 choices[59][1] = "RD 1497/2004";
 choices[59][2] = "RD 1449/2007";
 choices[59][3] = "RD 1479/2007";
 answers[59] = choices[59][0];
 units[59] = "39";
 comments[59] = "Id Pregunta: 6417. NULL";


//  Id pregunta: 6444 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  ETSI NO publica:";
 choices[60]= new Array();
 choices[60][0] = "Normas europeas";
 choices[60][1] = "Normas espa&ntilde;olas";
 choices[60][2] = "Normas armonizadas";
 choices[60][3] = "Publica todas las anteriores";
 answers[60] = choices[60][1];
 units[60] = "42";
 comments[60] = "Id Pregunta: 6444. Similar a Castilla La Mancha 2009";


//  Id pregunta: 6448 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  En un sistema de almacenamiento en RAID 5:";
 choices[61]= new Array();
 choices[61][0] = "Se guardan dos paridades para cada bloque de informaci&oacute;n, cada una de ellas alojada en un disco diferente";
 choices[61][1] = "Se asigna un bloque de paridad por cada bloque de informaci&oacute;n, asignando un bloque alternativo de cada disco para almacenar esa paridad";
 choices[61][2] = "Se usa una divisi&oacute;n de datos a nivel de bloques con un disco de paridad dedicado";
 choices[61][3] = "Los datos se dividen a nivel de bits, en lugar de a nivel de bloques";
 answers[61] = choices[61][1];
 units[61] = "48";
 comments[61] = "Id Pregunta: 6448. Castilla La Mancha 2009";


//  Id pregunta: 6572 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta respecto al modelo OSI?";
 choices[62]= new Array();
 choices[62][0] = "La capa 5 establece, mantiene y cierra el di&aacute;logo entre dos aplicaciones. Controla la organizaci&oacute;n del di&aacute;logo y su sincronizaci&oacute;n";
 choices[62][1] = "La capa 4 proporciona enrutamiento, direccionamiento y fragmentaci&oacute;n de paquetes. Esta capa determina rutas alternativas para evitar congesti&oacute;n de red.";
 choices[62][2] = "La capa 3 proporciona transmisiones extremo a extremo";
 choices[62][3] = "La capa 2 proporciona enrutamiento, direccionamiento y fragmentaci&oacute;n de paquetes. Esta capa determina rutas alternativas para evitar congesti&oacute;n de red.";
 answers[62] = choices[62][0];
 units[62] = "100";
 comments[62] = "Id Pregunta: 6572. NULL";


//  Id pregunta: 6626 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  El modelo CMM de Ingenier&iacute;a de Software consta de:";
 choices[63]= new Array();
 choices[63][0] = "5 niveles, de los cuales todos se descomponen en &aacute;reas de procesos clave";
 choices[63][1] = "5 niveles, de los cuales todos excepto el nivel 1 se descomponen en &aacute;reas de procesos clave";
 choices[63][2] = "5 niveles, de los cuales todos excepto el nivel 5 se descomponen en &aacute;reas de procesos clave";
 choices[63][3] = "6 niveles que se descomponen en &aacute;reas de procesos clave y estas a su vez se organizan seg&uacute;n caracter&iacute;sticas comunes";
 answers[63] = choices[63][1];
 units[63] = "87";
 comments[63] = "Id Pregunta: 6626. NULL";


//  Id pregunta: 7268 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  Un programa que se aloja en el ordenador y permite el acceso a usuarios externos, con el fin de obtener informaci&oacute;n o controlar la m&aacute;quina de forma remota, se denomina:";
 choices[64]= new Array();
 choices[64][0] = "Bot";
 choices[64][1] = "Virus";
 choices[64][2] = "Troyano";
 choices[64][3] = "Gusano";
 answers[64] = choices[64][2];
 units[64] = "111";
 comments[64] = "Id Pregunta: 7268. Examen TIC B 2009";


//  Id pregunta: 7325 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones no es correcta respecto a 'facturae':";
 choices[65]= new Array();
 choices[65][0] = "Es el formato a utilizar para la facturaci&oacute;n electr&oacute;nica a las Administraciones P&uacute;blicas";
 choices[65][1] = "Se trata de un formato basado en el est&aacute;ndar XML (Extensible Markup Language)";
 choices[65][2] = "Puede hacer uso de firma electr&oacute;nica avanzada para garantizar la autenticidad e integridad";
 choices[65][3] = "No permite el uso de XADES para la firma electr&oacute;nica avanzada";
 answers[65] = choices[65][3];
 units[65] = "70";
 comments[65] = "Id Pregunta: 7325. NULL";


//  Id pregunta: 8001 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)   &iquest;Cu&aacute;l de las siguientes afirmaciones sobre ITIL (Information Technology Infrastructure Library) es cierta?";
 choices[66]= new Array();
 choices[66][0] = " ITIL es una Biblioteca de Infraestructura de Tecnolog&iacute;as de la Informaci&oacute;n que se ha convertido en el est&aacute;ndar mundial de facto en la Gesti&oacute;n de Servicios Inform&aacute;ticos.";
 choices[66][1] = " ITIL es una iniciativa de la Comisi&oacute;n Europea cuyo objetivo es la elaboraci&oacute;n de una definici&oacute;n de la estructura organizacional de una organizaci&oacute;n de tecnolog&iacute;as de la informaci&oacute;n.";
 choices[66][2] = " La fundaci&oacute;n holandesa &laquo;Exameninstituut voor Informatica&raquo; (EXIN) y la inglesa &laquo;Information Systems Examination Board&raquo; (ISEB) han desarrollado juntas la &uacute;ltima versi&oacute;n de ITIL.";
 choices[66][3] = " ITIL es una metodolog&iacute;a para la Gesti&oacute;n de Servicios Inform&aacute;ticos que no tiene aplicaci&oacute;n en la Administraci&oacute;n P&uacute;blica.";
 answers[66] = choices[66][0];
 units[66] = "NULL";
 comments[66] = "Id Pregunta: 8001. Map 2007";


//  Id pregunta: 8248 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  Indique la afirmaci&oacute;n FALSA. De acuerdo a la ley 30/2007, el sistema de determinaci&oacute;n del precio de los contratos para el desarrollo de programas inform&aacute;ticos:";
 choices[67]= new Array();
 choices[67][0] = "Puede ser a tanto alzado.";
 choices[67][1] = "Puede resultar de la aplicaci&oacute;n de honorarios por tarifas.";
 choices[67][2] = "Se debe establecer en el Pliego de Prescripciones T&eacute;cnicas.";
 choices[67][3] = "Puede resultar de la combinaci&oacute;n de varias modalidades de c&aacute;lculo.";
 answers[67] = choices[67][2];
 units[67] = "36,37";
 comments[67] = "Id Pregunta: 8248. Examen TIC A1 2010";


//  Id pregunta: 8351 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  &iquest;Qu&eacute; librer&iacute;a de .Net permite aplicar el patr&oacute;n &quot;Inversion of Control&quot;?";
 choices[68]= new Array();
 choices[68][0] = "Unity Application Block,";
 choices[68][1] = "Logging Application Block.";
 choices[68][2] = "Ajax Control Toolkit";
 choices[68][3] = "Cached XML Data Mapper";
 answers[68] = choices[68][0];
 units[68] = "59,115";
 comments[68] = "Id Pregunta: 8351. Examen TIC A2 2010";


//  Id pregunta: 8387 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  &iquest;Cu&aacute;l de los siguientes productos resultan del proceso de Construcci&oacute;n del SI seg&uacute;n M&eacute;trica v3?";
 choices[69]= new Array();
 choices[69][0] = "Cat&aacute;logo de Requisitos.";
 choices[69][1] = "Especificaciones de Construcci&oacute;n del Sistema.";
 choices[69][2] = "Modelo de Datos.";
 choices[69][3] = "Manuales de Usuario.";
 answers[69] = choices[69][3];
 units[69] = "86";
 comments[69] = "Id Pregunta: 8387. Examen TIC A2 2010";


//  Id pregunta: 8450 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  La T&eacute;cnica de accesos CDMA se caracteriza entre otras porque:";
 choices[70]= new Array();
 choices[70][0] = "Varios usuarios comparten una misma portadora en intervalos diferentes de tiempo";
 choices[70][1] = "Varios Usuarios comparten la misma banda";
 choices[70][2] = "Requiere filtros muy selectivos para evitar las interferencias de canal adyacente";
 choices[70][3] = "Ninguna de las anteriores.";
 answers[70] = choices[70][1];
 units[70] = "101";
 comments[70] = "Id Pregunta: 8450. Analista Ayto. Madrid 2010";


//  Id pregunta: 8761 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  Sean dos procesos: P1, con tiempo de ejecuci&oacute;n de 20ms, y P2, con 15ms. El planificador a corto plazo act&uacute;a seg&uacute;n un Round Robin con cuanto de 10ms y tiempo de conmutaci&oacute;n de tarea de 5ms Marcar el tiempo de retorno (regreso) de P2, teniendo en cuenta que se empieza ejecutando P1.";
 choices[71]= new Array();
 choices[71][0] = "35";
 choices[71][1] = "40";
 choices[71][2] = "50";
 choices[71][3] = "55";
 answers[71] = choices[71][2];
 units[71] = "52";
 comments[71] = "Id Pregunta: 8761. Examen TIC A2 2010 interna";


//  Id pregunta: 8791 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  La longitud m&aacute;xima de un datagrama IP es";
 choices[72]= new Array();
 choices[72][0] = "32 KB";
 choices[72][1] = "64 KB";
 choices[72][2] = "128 KB";
 choices[72][3] = "512 KB";
 answers[72] = choices[72][1];
 units[72] = "100";
 comments[72] = "Id Pregunta: 8791. Examen UPM A2 2011";


//  Id pregunta: 8792 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  El listado que resulta de ejecutar en un sistema GNU/Linux el comando &quot;cat /etc/passwd | cut -d: -f3,7&quot; contendr&aacute; los campos:";
 choices[73]= new Array();
 choices[73][0] = "Nombre de usuario y shell";
 choices[73][1] = "Contrase&ntilde;a de usuario y home";
 choices[73][2] = "uid y shell";
 choices[73][3] = "gid y home";
 answers[73] = choices[73][2];
 units[73] = "53, 54";
 comments[73] = "Id Pregunta: 8792. Examen UPM A2 2011";


//  Id pregunta: 8900 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  Se&ntilde;ale la respuesta correcta";
 choices[74]= new Array();
 choices[74][0] = "XML fue dise&ntilde;ado para transportar datos, no para mostrarlos";
 choices[74][1] = "Las etiquetas de XML son todas predefinidas";
 choices[74][2] = "XML es una recomendaci&oacute;n del UIT";
 choices[74][3] = "XML significa Extralarge Markup Language";
 answers[74] = choices[74][0];
 units[74] = "69";
 comments[74] = "Id Pregunta: 8900. NULL";


//  Id pregunta: 9031 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  &iquest;Qu&eacute; tecnolog&iacute;a utiliza en exclusiva una modulacu&oacute;n DSSS?";
 choices[75]= new Array();
 choices[75][0] = "802.11a";
 choices[75][1] = "802.11b";
 choices[75][2] = "802.11g";
 choices[75][3] = "802.11n";
 answers[75] = choices[75][1];
 units[75] = "107";
 comments[75] = "Id Pregunta: 9031. NULL";


//  Id pregunta: 9039 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  &iquest;Qu&eacute; es en java una inner class?";
 choices[76]= new Array();
 choices[76][0] = "Es lo mismo que una clase abstracta";
 choices[76][1] = "Una clase declarada dentro de otra";
 choices[76][2] = "Una clase que no puede ser heredada";
 choices[76][3] = "Ninguno de los anteriores";
 answers[76] = choices[76][1];
 units[76] = "60";
 comments[76] = "Id Pregunta: 9039. NULL";


//  Id pregunta: 9115 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  &iquest;Qu&eacute; no presentan las soluciones SISD (Single Instruction stream, Single Data stream)";
 choices[77]= new Array();
 choices[77][0] = "Concurrencia y paralelizaci&oacute;n.";
 choices[77][1] = "S&oacute;lo concurrencia.";
 choices[77][2] = "&Uacute;nicamente paralelizaci&oacute;n.";
 choices[77][3] = "No existe SISD";
 answers[77] = choices[77][0];
 units[77] = "45";
 comments[77] = "Id Pregunta: 9115. ";


//  Id pregunta: 9134 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  &iquest;Cu&aacute;l no se considera una arquitectura de un sistema f&iacute;sico?";
 choices[78]= new Array();
 choices[78][0] = "de bus m&uacute;ltiple";
 choices[78][1] = "paralela";
 choices[78][2] = "Pipeline";
 choices[78][3] = "Fault Tolerant";
 answers[78] = choices[78][0];
 units[78] = "47";
 comments[78] = "Id Pregunta: 9134. ";


//  Id pregunta: 9208 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  &iquest;Qu&eacute; es CAS?";
 choices[79]= new Array();
 choices[79][0] = "Content Address Storage";
 choices[79][1] = "Permiten almacenar una &uacute;nica copia de la informaci&oacute;n duplicada.";
 choices[79][2] = "Permiten reducir el espacio de almacenamiento requerido.";
 choices[79][3] = "Todas son correctas.";
 answers[79] = choices[79][3];
 units[79] = "48";
 comments[79] = "Id Pregunta: 9208. ";


//  Id pregunta: 9327 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  El efecto de la diafon&iacute;a en un cable se define como:";
 choices[80]= new Array();
 choices[80][0] = "La p&eacute;rdida de potencia en la se&ntilde;al debido a la emisi&oacute;n electromagnetica al ambiente.";
 choices[80][1] = "La variacion de la velocidad de propagacion de la se&ntilde;al en funcion de la frecuencia";
 choices[80][2] = "La interferencia electromagnetica producida entre se&ntilde;ales que discurren simultaneamente entre pares paralelos.";
 choices[80][3] = "Es la distorsion de la se&ntilde;al por la influencia de se&ntilde;ales espureas del ambiente.";
 answers[80] = choices[80][2];
 units[80] = "99";
 comments[80] = "Id Pregunta: 9327. NULL";


//  Id pregunta: 9386 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  Sobre el interfaz radio de LTE, se puede afirmar";
 choices[81]= new Array();
 choices[81][0] = "Utiliza WCDMA";
 choices[81][1] = "Utiliza unicamente FDD para la duplexaci&oacute;n.";
 choices[81][2] = "Utiliza OFDM para la bajada y FDMA de portadora simple en la subida";
 choices[81][3] = "Combina TDMA y FDMA";
 answers[81] = choices[81][2];
 units[81] = "108";
 comments[81] = "Id Pregunta: 9386. NULL";


//  Id pregunta: 9800 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  Seg&uacute;n la Ley 59/2003 de Firma electr&oacute;nica, los prestadores de servicios de certificaci&oacute;n que expidan certificados reconocidos deber&aacute;n conservar registrada por cualquier medio seguro toda la informaci&oacute;n y documentaci&oacute;n relativa a un certificado reconocido al menos durante:";
 choices[82]= new Array();
 choices[82][0] = "5 a&ntilde;os.";
 choices[82][1] = "10 a&ntilde;os.";
 choices[82][2] = "Permanentemente.";
 choices[82][3] = "15 a&ntilde;os.";
 answers[82] = choices[82][3];
 units[82] = "30";
 comments[82] = "Id Pregunta: 9800. Examen TIC-A2 2013-Libre (Ley 59/2003, art&iacute;culo 20.f)";


//  Id pregunta: 9856 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  Un programa malicioso capaz de alojarse en computadoras y permitir el acceso a usuarios externos, a trav&eacute;s de una red local o de Internet, con el fin de recabar informaci&oacute;n o controlar remotamente a la m&aacute;quina anfitriona, se denomina: ";
 choices[83]= new Array();
 choices[83][0] = "Un caballo de Troya.";
 choices[83][1] = "Un virus.";
 choices[83][2] = "Un gusano.";
 choices[83][3] = "El tal&oacute;n de Aquiles.";
 answers[83] = choices[83][0];
 units[83] = "111";
 comments[83] = "Id Pregunta: 9856. Examen Gesti&oacute;n de Inform&aacute;tica Universidad de Granada 2012";


//  Id pregunta: 9905 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  La finalidad principal de la Gesti&oacute;n de Proyectos seg&uacute;n M&eacute;trica v3 es la planificaci&oacute;n, el seguimiento y control de:";
 choices[84]= new Array();
 choices[84][0] = "Las actividades y de los recursos humanos que intervienen en el desarrollo de un Sistema de Informaci&oacute;n (S.I).";
 choices[84][1] = "Las actividades que intervienen en el desarrollo de un S.I.";
 choices[84][2] = "Las actividades y de los recursos humanos y materiales que intervienen en el desarrollo de un S.I.";
 choices[84][3] = "Los recursos humanos y materiales que intervienen en el desarrollo de un S.I.";
 answers[84] = choices[84][2];
 units[84] = "86";
 comments[84] = "Id Pregunta: 9905. TIC A2, Examen 2013";


//  Id pregunta: 9930 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  &iquest;Qu&eacute; ASE (Elemento de Servicio de Aplicaci&oacute;n) usan todas las aplicaciones?";
 choices[85]= new Array();
 choices[85][0] = "ACSE (Association Control Service Element).";
 choices[85][1] = "RTSE (Reliable Transfer Service Element).";
 choices[85][2] = "ROSE (Remote Operation Service Element).";
 choices[85][3] = "ATSE (Application Transfer Service Element).";
 answers[85] = choices[85][0];
 units[85] = "100";
 comments[85] = "Id Pregunta: 9930. NULL";


//  Id pregunta: 10059 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Seg&uacute;n la ANSI/TIA-942 el porcentaje de disponibilidad de 99.982% en un CPD corresponde a:";
 choices[86]= new Array();
 choices[86][0] = "TIER I ";
 choices[86][1] = "TIER II";
 choices[86][2] = "TIER III ";
 choices[86][3] = "TIER IV";
 answers[86] = choices[86][2];
 units[86] = "99";
 comments[86] = "Id Pregunta: 10059. TIC A2, libre, Examen 2013";


//  Id pregunta: 10121 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  En el encaminamiento por vector-distancia cada router:";
 choices[87]= new Array();
 choices[87][0] = "Env&iacute;a una tabla a sus routers vecinos con la distancia de &eacute;l a todos los destinos. ";
 choices[87][1] = "Env&iacute;a una tabla a todos los routers con la distancia de &eacute;l a todos los destinos.";
 choices[87][2] = "Env&iacute;a una tabla a sus routers vecinos con la distancia de &eacute;l a todos sus vecinos.";
 choices[87][3] = "Env&iacute;a una tabla a todos los routers con la distancia de &eacute;l a todos sus vecinos.";
 answers[87] = choices[87][0];
 units[87] = "102";
 comments[87] = "Id Pregunta: 10121. ";


//  Id pregunta: 10169 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  En una base de datos Oracle, &iquest;qu&eacute; afirmaci&oacute;n es correcta en relaci&oacute;n con las vistas materializadas?";
 choices[88]= new Array();
 choices[88][0] = "La materializaci&oacute;n de una vista es llevada a cabo por el usuario mediante la exportaci&oacute;n a disco de los datos devueltos por la vista";
 choices[88][1] = "Oracle no utiliza el t&eacute;rmino de &quot;vista materializada&quot;, si no el de &quot;snapshot&quot;";
 choices[88][2] = "Se define de manera similar a una vista com&uacute;n pero, en lugar de almacenar s&oacute;lo la definici&oacute;n de la vista, almacena el resultado de la consulta";
 choices[88][3] = "Desde la versi&oacute;n 8i, la nueva caracter&iacute;stica &quot;QUERY REWRITE&quot; otorga mayor funcionalidad a las snapshots frente a las vistas materializadas";
 answers[88] = choices[88][2];
 units[88] = "58";
 comments[88] = "Id Pregunta: 10169. ";


//  Id pregunta: 10231 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  Un servlet encuentra una excepci&oacute;n mientras procesa una petici&oacute;n. &iquest;Qu&eacute; m&eacute;todo usar&aacute;s para enviar una respuesta de error al navegador?:";
 choices[89]= new Array();
 choices[89][0] = "sendError(int errorCode) de HttpServlet";
 choices[89][1] = "sendError(int errorCode) de HttpServletRequest";
 choices[89][2] = "sendError(int errorCode) de HttpServletResponse";
 choices[89][3] = "sendError(String errorMsg) de HttpServletRequest";
 answers[89] = choices[89][2];
 units[89] = "116";
 comments[89] = "Id Pregunta: 10231. NULL";


//  Id pregunta: 10269 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  En el contexto de la protecci&oacute;n de datos de car&aacute;cter personal, la figura del responsable de seguridad";
 choices[90]= new Array();
 choices[90][0] = "Es obligatorio que exista s&oacute;lo si se trata de ficheros de nivel alto, no suponiendo su existencia exoneraci&oacute;n de las responsabilidades que corresponden al responsable del fichero";
 choices[90][1] = "Es obligatorio que exista s&oacute;lo si se trata de ficheros de nivel alto, en cuyo caso las obligaciones del responsable del fichero pasan al responsable de seguridad";
 choices[90][2] = "Es obligatorio que exista s&oacute;lo si se trata de ficheros de nivel medio o alto, no suponiendo su existencia exoneraci&oacute;n de las responsabilidades que corresponden al responsable del fichero";
 choices[90][3] = "Es obligatorio que exista s&oacute;lo si se trata de ficheros de nivel medio o alto, en cuyo caso las obligaciones del responsable del fichero pasan al responsable de seguridad";
 answers[90] = choices[90][2];
 units[90] = "29";
 comments[90] = "Id Pregunta: 10269. Art&iacute;culo 95 del RD 1720/2007";


//  Id pregunta: 10570 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  La auditor&iacute;a bienal de cumplimiento de la LOPD y la realizaci&oacute;n de pruebas de hacking &eacute;tico tienen las siguientes similitudes y diferencias, marcar la respuesta verdadera";
 choices[91]= new Array();
 choices[91][0] = "El hacking &eacute;tico no es una herramienta de auditor&iacute;a ya que lo realizan los hackers solamente, mientras que la auditor&iacute;a LOPD lo realizan siempre juristas o personal de perfil TAC";
 choices[91][1] = "El hacking &eacute;tico es una t&eacute;cnica para probar los controles de seguridad de las aplicaciones y sirve para que un auditor de seguridad IT pueda encontrar deficiencias. Si la aplicaci&oacute;n maneja datos LOPD, la informaci&oacute;n del estado de estos controles puede servir de apoyo a la auditor&iacute;a de cumplimiento del reglamento asociado a la LOPD que tambi&eacute;n debe verificarse en la auditor&iacute;a bienal, que incluir&aacute; tanto aspectos organizativos como t&eacute;cnicos.";
 choices[91][2] = "La Auditor&iacute;a LOPD es una auditor&iacute;a IT estrictamente hablando, ya que no debe entrar a valorar aspectos organizativos y procedimientales mientras que el hacking &eacute;tico entra a valorar los valores &eacute;ticos de la empresa de cara al tratamiento de la informaci&oacute;n, en particular los datos de car&aacute;cter personal.";
 choices[91][3] = "El hacking &eacute;tico requiere de personal t&eacute;cnico exclusivamente (hackers o no) mientras que la auditor&iacute;a de cumplimiento de la LOPD s&oacute;lo debe contar con personal jurista y los responsables funcionales de las aplicaciones LOPD involucradas pero no a t&eacute;cnicos.";
 answers[91] = choices[91][1];
 units[91] = "31";
 comments[91] = "Id Pregunta: 10570. ";


//  Id pregunta: 10677 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  La Ley 39/2015 del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas establece la obligatoriedad de relaci&oacute;n con las AAPP a trav&eacute;s de medios electr&oacute;nicos para:";
 choices[92]= new Array();
 choices[92][0] = "Personas f&iacute;sicas.";
 choices[92][1] = "Personas jur&iacute;dicas.";
 choices[92][2] = "Personas f&iacute;sicas y jur&iacute;dicas.";
 choices[92][3] = "Ninguna de las anteriores.";
 answers[92] = choices[92][1];
 units[92] = "30";
 comments[92] = "Id Pregunta: 10677. ";


//  Id pregunta: 10921 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  SAML (Security Assertion Markup Language):";
 choices[93]= new Array();
 choices[93][0] = "Establece protocolos de seguridad para el intercambio de identidades.";
 choices[93][1] = "Establece protocolos de seguridad para el firmado de estructuras XML.";
 choices[93][2] = "Es un est&aacute;ndar establecido por IEEE como alternativa a WS-Security en sistemas de autenticaci&oacute;n Single Sign-On.";
 choices[93][3] = "Es un est&aacute;ndar establecido por OASIS como alternativa a WS-Security en sistemas de autenticaci&oacute;n Single Sign-On.";
 answers[93] = choices[93][0];
 units[93] = "118";
 comments[93] = "Id Pregunta: 10921. TIC A1 AGE 2014";


//  Id pregunta: 11074 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;A cual de las siguientes &aacute;reas debe la tecnolog&iacute;a ayudar a dar soporte durante la fase de Dise&ntilde;o del Servicio en el ciclo de Vida del Servicio?";
 choices[94]= new Array();
 choices[94][0] = "Dise&ntilde;o de hardware y software";
 choices[94][1] = "Dise&ntilde;o del entorno y dise&ntilde;o de los procesos";
 choices[94][2] = "Dise&ntilde;o de datos";
 choices[94][3] = "Todas ellas";
 answers[94] = choices[94][3];
 units[94] = "98";
 comments[94] = "Id Pregunta: 11074. ";


//  Id pregunta: 11289 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  En un gestor documental t&iacute;pico &iquest;d&oacute;nde se realiza el almacenamiento?";
 choices[95]= new Array();
 choices[95][0] = "Los metadatos en el Sistema de Ficheros, los documentos en Base de Datos";
 choices[95][1] = "Los metadatos en Base de Datos, los documentos en el Sistema de Ficheros";
 choices[95][2] = "Metadatos y documentos se almacenan en Base de Datos";
 choices[95][3] = "Ninguna de las anteriores";
 answers[95] = choices[95][1];
 units[95] = "95";
 comments[95] = "Id Pregunta: 11289. ";


//  Id pregunta: 11367 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes afirmaciones es la MEJOR descripci&oacute;n de un acuerdo de nivel operativo (OLA)?";
 choices[96]= new Array();
 choices[96][0] = "Un acuerdo entre un proveedor de servicios de TI y otra parte de la misma organizaci&oacute;n que colabora en la prestaci&oacute;n de servicios";
 choices[96][1] = "Un acuerdo escrito entre el proveedor de servicios de TI y sus clientes, el cual define las metas clave y responsabilidades de ambas partes";
 choices[96][2] = "Un acuerdo entre dos proveedores de servicios sobre los niveles de servicio requeridos por el cliente";
 choices[96][3] = "Un acuerdo entre un Centro de Servicios externo y el cliente de TI acerca de los tiempos de respuesta y de reparaci&oacute;n";
 answers[96] = choices[96][0];
 units[96] = "98";
 comments[96] = "Id Pregunta: 11367. ";


//  Id pregunta: 11415 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Seg&uacute;n la Ley 9/2014, es un derecho del usuario de teleco:";
 choices[97]= new Array();
 choices[97][0] = "La desconexi&oacute;n de cualquier servicio, previa solicitud.";
 choices[97][1] = "Disponer de un 902 o comunicaci&oacute;n electr&oacute;nica como servicio de atenci&oacute;n al cliente.";
 choices[97][2] = "La continuidad del servicio.";
 choices[97][3] = "A ser informado, pleno pago de la tasa correspondiente, de la inclusi&oacute;n de sus datos en las gu&iacute;as de abonados.";
 answers[97] = choices[97][2];
 units[97] = "110";
 comments[97] = "Id Pregunta: 11415. ";


//  Id pregunta: 11723 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Qu&eacute; mensaje DHCP se utiliza para localizar cualquier servidor DHCP disponible en la red?";
 choices[98]= new Array();
 choices[98][0] = "DHCPREQUEST";
 choices[98][1] = "DHCPACK";
 choices[98][2] = "DHCPDISCOVER";
 choices[98][3] = "DHCPOFFER";
 answers[98] = choices[98][2];
 units[98] = "102";
 comments[98] = "Id Pregunta: 11723. NULL";


//  Id pregunta: 11768 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Cu&aacute;l es la duraci&oacute;n m&aacute;xima que la ley permite a los acuerdos marco?";
 choices[99]= new Array();
 choices[99][0] = "2 a&ntilde;os";
 choices[99][1] = "1 a&ntilde;o";
 choices[99][2] = "4 a&ntilde;os";
 choices[99][3] = "3 a&ntilde;os";
 answers[99] = choices[99][2];
 units[99] = "41";
 comments[99] = "Id Pregunta: 11768. ";


