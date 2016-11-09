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

//  Id pregunta: 34 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de las siguientes gu&iacute;as no forma parte de los est&aacute;ndares EDIFACT?:";
 choices[0]= new Array();
 choices[0][0] = "Directorio de registro de datos";
 choices[0][1] = "Directorio de segmentos";
 choices[0][2] = "Directorio de mensajes";
 choices[0][3] = "Conjunto de c&oacute;digos";
 answers[0] = choices[0][0];
 units[0] = "42";
 comments[0] = "Id Pregunta: 34. ";


//  Id pregunta: 63 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Qu&eacute; es la WAI?";
 choices[1]= new Array();
 choices[1][0] = "una asociaci&oacute;n mundial de defensa de los internautas";
 choices[1][1] = "una iniciativa para la automatizaci&oacute;n de las tareas de organizaci&oacute;n web";
 choices[1][2] = "una iniciativa para facilitar el acceso a la web de los discapacitados";
 choices[1][3] = "una iniciativa para el desarrollo de aplicaciones inal&aacute;mbricas";
 answers[1] = choices[1][2];
 units[1] = "39";
 comments[1] = "Id Pregunta: 63. ";


//  Id pregunta: 66 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;Qu&eacute; indica un nivel de prioridad 3 en la norma WCAG 1.0 del WAI sobre un punto de verificaci&oacute;n?";
 choices[2]= new Array();
 choices[2][0] = "Un desarrollador de contenidos de p&aacute;ginas web tiene que satisfacer el punto de verificaci&oacute;n ";
 choices[2][1] = "Un desarrollador de contenidos de p&aacute;ginas web debe satisfacer el punto de verificaci&oacute;n";
 choices[2][2] = "Un desarrollador de contenidos de p&aacute;ginas web puede satisfacer el punto de verificaci&oacute;n";
 choices[2][3] = "Ninguna de las opciones anteriores es correcta";
 answers[2] = choices[2][2];
 units[2] = "39";
 comments[2] = "Id Pregunta: 66. ";


//  Id pregunta: 84 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;Qu&eacute; se establece en la Decisi&oacute;n del Consejo 93/465/CEE?:";
 choices[3]= new Array();
 choices[3][0] = "El desarrollo de la Directiva 87/95/EEC de armonizaci&oacute;n t&eacute;cnica de productos software en la Uni&oacute;n Europea";
 choices[3][1] = "La creaci&oacute;n de una serie de laboratorios de evaluaci&oacute;n de la conformidad de productos en el &aacute;mbito de la Uni&oacute;n Europea";
 choices[3][2] = "El planteamiento global en materia de evaluaci&oacute;n de conformidad y armonizaci&oacute;n t&eacute;cnica en la Uni&oacute;n Europea";
 choices[3][3] = "El r&eacute;gimen de colocaci&oacute;n del marcado &quot;CE&quot; de conformidad con la normativa comunitaria referente al dise&ntilde;o, fabricaci&oacute;n, comercializaci&oacute;n, puesta en servicio y utilizaci&oacute;n de los productos industriales";
 answers[3] = choices[3][3];
 units[3] = "42";
 comments[3] = "Id Pregunta: 84. ";


//  Id pregunta: 90 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &ldquo;Aqu&eacute;l equipo de inform&aacute;tica que se adapta perfectamente a las capacidades y condiciones de quienes lo usan, permitiendo su uso de manera eficiente y sin riesgo para la salud ni la seguridad&rdquo; es la definici&oacute;n para:";
 choices[4]= new Array();
 choices[4][0] = "Ordenador adaptable";
 choices[4][1] = "Ordenador, seg&uacute;n la WAI (Web Accesibility Initiative)";
 choices[4][2] = "Ordenador ecol&oacute;gico";
 choices[4][3] = "Ordenador ergon&oacute;mico";
 answers[4] = choices[4][3];
 units[4] = "39";
 comments[4] = "Id Pregunta: 90. ";


//  Id pregunta: 100 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  En relaci&oacute;n con las pruebas de conformidad,  si la comprobaci&oacute;n de que el producto satisface o no los requerimientos t&eacute;cnicos definidos en una norma es realizada por el consumidor, nos estamos refiriendo a:";
 choices[5]= new Array();
 choices[5][0] = "Comprobaci&oacute;n de pimera parte o &ldquo;first party testing&rdquo;";
 choices[5][1] = "Comprobaci&oacute;n de segunda parte o &ldquo; second party testing&rdquo;";
 choices[5][2] = "Comprobaci&oacute;n de tercera parte  o &ldquo; third party testing&rdquo;";
 choices[5][3] = "Las pruebas de conformidad no pueden ser realizadas por los consumidores";
 answers[5] = choices[5][1];
 units[5] = "42";
 comments[5] = "Id Pregunta: 100. ";


//  Id pregunta: 111 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Cuando una certificaci&oacute;n es realizada por un organismo de la Administraci&oacute;n, aquella se denomina:";
 choices[6]= new Array();
 choices[6][0] = "Prueba de conformidad";
 choices[6][1] = "Normalizaci&oacute;n";
 choices[6][2] = "Homologaci&oacute;n";
 choices[6][3] = "Especificaci&oacute;n";
 answers[6] = choices[6][2];
 units[6] = "42";
 comments[6] = "Id Pregunta: 111. ";


//  Id pregunta: 123 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  EIA es una organizaci&oacute;n que:";
 choices[7]= new Array();
 choices[7][0] = "Elabor&oacute; el est&aacute;ndar EIA232 (o RS-232)";
 choices[7][1] = "Es una asociaci&oacute;n europea de industrias electr&oacute;nicas";
 choices[7][2] = "Significa Electronic International Association";
 choices[7][3] = "Est&aacute; dedicada al desarrollo de est&aacute;ndares en Europa que se aplican a las tecnolog&iacute;as de ordenadores y telecomunicaciones";
 answers[7] = choices[7][0];
 units[7] = "42";
 comments[7] = "Id Pregunta: 123. ";


//  Id pregunta: 146 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  El instituto ANSI tiene homologados, desde hace tiempo, diversos lenguajes, entre los que no se encuentra el:";
 choices[8]= new Array();
 choices[8][0] = "COBOL";
 choices[8][1] = "PROLOG";
 choices[8][2] = "FORTRAN";
 choices[8][3] = "C";
 answers[8] = choices[8][2];
 units[8] = "42";
 comments[8] = "Id Pregunta: 146. Todos estan ya hologados, pero FORTRAN fue el ultimo en 2007";


//  Id pregunta: 201 AÃ±o de creación de pregunta: 2004-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l de los siguientes estandares de directorios guarda relaci&oacute;n con la descripci&oacute;n de servicios de usuario?";
 choices[9]= new Array();
 choices[9][0] = "x.500";
 choices[9][1] = "x.501";
 choices[9][2] = "x.509";
 choices[9][3] = "x.511";
 answers[9] = choices[9][3];
 units[9] = "42";
 comments[9] = "Id Pregunta: 201. Examen Julio 2003";


//  Id pregunta: 252 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  Entre las organizaciones cuya misi&oacute;n es alertar frente a las diferentes vulnerabilidades que presenten los productos de tecnolog&iacute;as de la informaci&oacute;n, se encuentra:";
 choices[10]= new Array();
 choices[10][0] = "CNN-CERT";
 choices[10][1] = "SANS";
 choices[10][2] = "W3C";
 choices[10][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son correctas";
 answers[10] = choices[10][3];
 units[10] = "42";
 comments[10] = "Id Pregunta: 252. ";


//  Id pregunta: 257 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Entre otras, la ventaja principal de los sistemas abiertos para los usuarios es:";
 choices[11]= new Array();
 choices[11][0] = "Aseguran la conversi&oacute;n de datos entre sistemas";
 choices[11][1] = "Protegen la inversi&oacute;n realizada en los equipos f&iacute;sicos y en los programas";
 choices[11][2] = "Mejoran la calidad de los productos que se fabrican";
 choices[11][3] = "Los fabricantes tienen m&aacute;s en cuenta las opiniones de los usuarios";
 answers[11] = choices[11][1];
 units[11] = "40";
 comments[11] = "Id Pregunta: 257. ";


//  Id pregunta: 308 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  La gu&iacute;a de portabilidad de X/OPEN actualmente en vigor es:";
 choices[12]= new Array();
 choices[12][0] = "XGP3";
 choices[12][1] = "XGP4";
 choices[12][2] = "XGP5";
 choices[12][3] = "Todas las respuestas anteriores son correctas";
 answers[12] = choices[12][1];
 units[12] = "40";
 comments[12] = "Id Pregunta: 308. XPG";


//  Id pregunta: 335 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  La posibilidad de que aplicaciones de distintos desarrolladores de software funcionen en m&aacute;quinas de diversos fabricantes, se conoce como:";
 choices[13]= new Array();
 choices[13][0] = "Interoperabilidad";
 choices[13][1] = "Escalabilidad";
 choices[13][2] = "Portabilidad";
 choices[13][3] = "Integrabilidad";
 answers[13] = choices[13][2];
 units[13] = "40";
 comments[13] = "Id Pregunta: 335. ";


//  Id pregunta: 343 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  La tarea de conceder a un producto o servicio un certificado indicando que se ha comprobado que cumple unas determinadas normas o especificaciones t&eacute;cnicas se denomina:";
 choices[14]= new Array();
 choices[14][0] = "Certificaci&oacute;n";
 choices[14][1] = "Homologaci&oacute;n";
 choices[14][2] = "Normalizaci&oacute;n";
 choices[14][3] = "Estandarizaci&oacute;n";
 answers[14] = choices[14][0];
 units[14] = "42";
 comments[14] = "Id Pregunta: 343. ";


//  Id pregunta: 415 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  Se define como interoperabilidad la posibilidad de:";
 choices[15]= new Array();
 choices[15][0] = "Manejar un ordenador desde cualquier puesto de trabajo de la red";
 choices[15][1] = "Transmitir datos entre dos ordenadores distintos";
 choices[15][2] = "Compartir procesos y datos entre distintos procesadores";
 choices[15][3] = "Ejecutar la misma aplicaci&oacute;n en plataformas de diferentes fabricantes";
 answers[15] = choices[15][2];
 units[15] = "40";
 comments[15] = "Id Pregunta: 415. ";


//  Id pregunta: 416 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  Se define la escalabilidad como:";
 choices[16]= new Array();
 choices[16][0] = "La posibilidad de que aplicaciones de distintos desarrolladores funcionen en m&aacute;quinas de distintos fabricantes";
 choices[16][1] = "La posibilidad de ampliar la capacidad de almacenamiento de un equipo sin necesidad de recurrir a piezas del fabricante que lo construy&oacute;";
 choices[16][2] = "La posibilidad de enlazar en una red, ordenadores de la misma gama, con la seguridad de que funcionar&aacute;n como un &uacute;nico sistema";
 choices[16][3] = "La posibilidad de utilizar el mismo entorno se software en diferentes gamas de ordenadores, desde ordenadores de sobremesa hasta mainframes";
 answers[16] = choices[16][3];
 units[16] = "40";
 comments[16] = "Id Pregunta: 416. ";


//  Id pregunta: 423 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Seg&uacute;n el Consejo Superior de Administraci&oacute;n Electr&oacute;nica, &iquest;cu&aacute;les son las principales fuentes de normas de sistemas abiertos que se deben aplicar?:";
 choices[17]= new Array();
 choices[17][0] = "ISO, POSIX y est&aacute;ndares de facto";
 choices[17][1] = "ISO, X/OPEN (gu&iacute;as XPG) y est&aacute;ndares de facto";
 choices[17][2] = "ISO, X/OPEN (gu&iacute;as XPG) y EPHOS";
 choices[17][3] = "ISO, POSIX y X/OPEN (gu&iacute;as XPG)";
 answers[17] = choices[17][2];
 units[17] = "40";
 comments[17] = "Id Pregunta: 423. ";


//  Id pregunta: 433 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Seg&uacute;n la ISO se entiende como Sistema abierto:";
 choices[18]= new Array();
 choices[18][0] = "Un sistema inform&aacute;tico conectado de alguna manera con otros sistemas";
 choices[18][1] = "Un sistema inform&aacute;tico capaz de dialogar con el resto de su entorno seg&uacute;n las normas definidas por su fabricante";
 choices[18][2] = "Un sistema inform&aacute;tico capaz de interconectarse con otros de acuerdo con unas normas establecidas";
 choices[18][3] = "Un sistema al cual se pueden incorporar sucesivos m&oacute;dulos de ampliaci&oacute;n sin que su estructura se vea afectada";
 answers[18] = choices[18][2];
 units[18] = "40";
 comments[18] = "Id Pregunta: 433. ";


//  Id pregunta: 464 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  Todo sistema etiquetado como X/Open implementa como m&iacute;nimo:";
 choices[19]= new Array();
 choices[19][0] = "Lenguajes COBOL, FORTRAN, PASCAL, C e interoperatividad de PC";
 choices[19][1] = "POSIX y comunicaciones entre procesos";
 choices[19][2] = "Lenguajes C y ADA, junto con gesti&oacute;n de datos ISAM y SQL";
 choices[19][3] = "POSIX y lenguaje C";
 answers[19] = choices[19][3];
 units[19] = "40";
 comments[19] = "Id Pregunta: 464. ";


//  Id pregunta: 479 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Las caracter&iacute;sticas fundamentales que se buscan con los sistemas abiertos son :";
 choices[20]= new Array();
 choices[20][0] = "Interoperabilidad, escalabilidad y portabilidad";
 choices[20][1] = "Sistemas multiproceso, multiusuario y multitarea compuestos por componentes de diversos fabricantes";
 choices[20][2] = "Poder pasar de un ordenador de sobremesa a un gran mainframe sin tener que cambiar de entorno de trabajo";
 choices[20][3] = "Interconexi&oacute;n de sistemas bajo un mismo sistema operativo, conectividad de perif&eacute;ricos, un entorno consistente en productos y tecnolog&iacute;as y un mejor posicionamiento desde el punto de vista econ&oacute;mico";
 answers[20] = choices[20][0];
 units[20] = "40";
 comments[20] = "Id Pregunta: 479. ";


//  Id pregunta: 486 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  La ITU-T realiza series de recomendaciones sobre diversos temas, Las recomendaciones sobre multiplexaci&oacute;n digital, estructura de las tramas, interfaces el&eacute;ctricos y funcionales entre dispositivos digitales de transmisi&oacute;n, y jerarqu&iacute;a de frecuencia pertence a:";
 choices[21]= new Array();
 choices[21][0] = "Serie V de la ITU-T";
 choices[21][1] = "Serie G de la ITU-T";
 choices[21][2] = "Serie D de la ITU-T";
 choices[21][3] = "Serie M de la ITU-T";
 answers[21] = choices[21][1];
 units[21] = "42";
 comments[21] = "Id Pregunta: 486. ";


//  Id pregunta: 646 AÃ±o de creación de pregunta: 2006-01-01
 questions[22]= "23)  Cu&aacute;l de los siguientes grupos no forma parte de la estructura del Sistema Europeo de Normalizaci&oacute;n:";
 choices[22]= new Array();
 choices[22][0] = "El Consejo europeo de Normalizaci&oacute;n.";
 choices[22][1] = "El Comit&eacute; europeo de Normalizaci&oacute;n.";
 choices[22][2] = "Los &Oacute;rganos internacionales de Normalizaci&oacute;n.";
 choices[22][3] = "Los &Oacute;rganos europeos de Normalizaci&oacute;n.";
 answers[22] = choices[22][2];
 units[22] = "40";
 comments[22] = "Id Pregunta: 646. ";


//  Id pregunta: 661 AÃ±o de creación de pregunta: 2006-01-01
 questions[23]= "24)  &iquest;Cu&aacute;l de los siguientes componentes de los que se indican a continuaci&oacute;n no es necesario certificar para obtener el perfil XPG4 Base de la Gu&iacute;a de Portabilidad X/Open?";
 choices[23]= new Array();
 choices[23][0] = "XPG4 Base";
 choices[23][1] = "XPG4 Commands and Utilities";
 choices[23][2] = "XPG4 Language";
 choices[23][3] = "XPG4 Internationalised System Calls and Libraries";
 answers[23] = choices[23][2];
 units[23] = "40";
 comments[23] = "Id Pregunta: 661. ";


//  Id pregunta: 2936 AÃ±o de creación de pregunta: 2004-01-01
 questions[24]= "25)  &iquest;Cu&aacute;l de los siguientes no es uno de los estadios en la estandarizaci&oacute;n del IAB?";
 choices[24]= new Array();
 choices[24][0] = "Borrador de Internet";
 choices[24][1] = "Est&aacute;ndar propuesto";
 choices[24][2] = "Borrador de est&aacute;ndar";
 choices[24][3] = "Est&aacute;ndar temporal";
 answers[24] = choices[24][3];
 units[24] = "112,42";
 comments[24] = "Id Pregunta: 2936. Similar a examen TIC MAP A 2004";


//  Id pregunta: 4562 AÃ±o de creación de pregunta: 2007-01-01
 questions[25]= "26)  En el contexto de Normas UNE, las siglas UNE significan";
 choices[25]= new Array();
 choices[25][0] = "Unidad de Normalizaci&oacute;n Espa&ntilde;ola";
 choices[25][1] = "Uni&oacute;n de Normas Espa&ntilde;olas";
 choices[25][2] = "Una Norma Espa&ntilde;ola";
 choices[25][3] = "Usuarios de Normas Espa&ntilde;olas";
 answers[25] = choices[25][2];
 units[25] = "42";
 comments[25] = "Id Pregunta: 4562. ";


//  Id pregunta: 4699 AÃ±o de creación de pregunta: 2007-01-01
 questions[26]= "27)  IEFT (Internet Engineering Task Force) se encarga de:";
 choices[26]= new Array();
 choices[26][0] = "Coordinaci&oacute;n entre organizaciones como IEFT, IANA, etc.";
 choices[26][1] = "Asignaci&oacute;n de recursos";
 choices[26][2] = "La supervisi&oacute;n y aprobaci&oacute;n de normas";
 choices[26][3] = "Especificaci&oacute;n de est&aacute;ndares.";
 answers[26] = choices[26][3];
 units[26] = "42";
 comments[26] = "Id Pregunta: 4699. Examen 2006 JCYL";


//  Id pregunta: 4722 AÃ±o de creación de pregunta: 2007-01-01
 questions[27]= "28)  El uso de Sistemas Abiertos permite una serie de ventajas, indique cual de ellas no lo es.";
 choices[27]= new Array();
 choices[27][0] = "Mejorar, en general, la relaci&oacute;n precio/rendimiento.";
 choices[27][1] = "Garantiza la libertad de elecci&oacute;n.";
 choices[27][2] = "Facilita la gesti&oacute;n del sistema frente a los complejos sistemas propietarios";
 choices[27][3] = "Protege la inversi&oacute;n realizada en el equipo f&iacute;sico";
 answers[27] = choices[27][2];
 units[27] = "40";
 comments[27] = "Id Pregunta: 4722. Examen 2006 JCYL";


//  Id pregunta: 4757 AÃ±o de creación de pregunta: 2007-01-01
 questions[28]= "29)  &iquest;Cu&aacute;l de los siguientes no es un control de prioridad 1 de las directrices de Accesibilidad para el Contenido Web (WCAG 1.0) del W3C?";
 choices[28]= new Array();
 choices[28][0] = "Para cualquier presentaci&oacute;n multimedia basada en tiempo (p.ej., una pel&iacute;cula o animaci&oacute;n), sincronice alternativas equivalentes (p.ej., subt&iacute;tulos o descripciones auditivas de la pista visual) con la presentaci&oacute;n";
 choices[28][1] = "Use hojas de estilo para controlar la composici&oacute;n y la presentaci&oacute;n.";
 choices[28][2] = "Identifique claramente los cambios en el lenguaje natural del texto de un documento y de cualquier equivalente de texto (p.ej., subt&iacute;tulos).";
 choices[28][3] = "Para tablas de datos, identifique encabezados de fila y columna.";
 answers[28] = choices[28][1];
 units[28] = "39";
 comments[28] = "Id Pregunta: 4757. ";


//  Id pregunta: 4976 AÃ±o de creación de pregunta: 2003-01-01
 questions[29]= "30)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares no ha sido elaborado por W3C (World Wide Web Consortium)?";
 choices[29]= new Array();
 choices[29][0] = "XML (Extensible Markup Language).";
 choices[29][1] = "SOAP (Simple Object Access Protocol).";
 choices[29][2] = "WAI (Web Accessibility Initiative).";
 choices[29][3] = "SSL (Secure Sockets Layer).";
 answers[29] = choices[29][3];
 units[29] = "39";
 comments[29] = "Id Pregunta: 4976. Examen TIC B 2007";


//  Id pregunta: 5553 AÃ±o de creación de pregunta: 2003-01-01
 questions[30]= "31)  La clara identificaci&oacute;n de cualquier cambio de idioma que se pueda producir en el texto de un documento, ser&iacute;a un ejemplo de punto de verificaci&oacute;n de accesibilidad de prioridad: ";
 choices[30]= new Array();
 choices[30][0] = "1";
 choices[30][1] = "2";
 choices[30][2] = "3";
 choices[30][3] = "4";
 answers[30] = choices[30][0];
 units[30] = "39";
 comments[30] = "Id Pregunta: 5553. ";


//  Id pregunta: 5554 AÃ±o de creación de pregunta: 2003-01-01
 questions[31]= "32)  Los documentos ATAG:";
 choices[31]= new Array();
 choices[31][0] = "Muestran c&oacute;mo hacer que las herramientas de autor sean accesibles para personas con discapacidad.";
 choices[31][1] = "Muestran c&oacute;mo hacer  que los reproductores multimedia sean accesibles a personas con discapacidad.";
 choices[31][2] = "Est&aacute;n pensados para el contenido web.";
 choices[31][3] = "Todas las anteriores son correctas.";
 answers[31] = choices[31][0];
 units[31] = "39";
 comments[31] = "Id Pregunta: 5554. ";


//  Id pregunta: 5825 AÃ±o de creación de pregunta: 2009-01-01
 questions[32]= "33)  &iquest;Cu&aacute;l de las siguientes afirmaciones es INCORRECTA para el programa IDABC?";
 choices[32]= new Array();
 choices[32][0] = "Es gestionado por el Comit&eacute; de Servicios Paneuropeos de Administraci&oacute;n Electr&oacute;nica (CSPAE)";
 choices[32][1] = "Se configura como el instrumento clave para llevar a cabo lo previsto en el Plan de Acci&oacute;n eEurope 2005 y sucesivos sobre el desarrollo de servicios paneuropeos";
 choices[32][2] = "Ejecuta lo previsto en la Decisi&oacute;n 2004/387/CE del Consejo UE y PE";
 choices[32][3] = "El proyecto complementario IDABD extiende esta normativa a particulares y empresas";
 answers[32] = choices[32][3];
 units[32] = "40";
 comments[32] = "Id Pregunta: 5825. MAP 2008 A1";


//  Id pregunta: 5838 AÃ±o de creación de pregunta: 2009-01-01
 questions[33]= "34)  &iquest;Cu&aacute;l de las siguientes NO es una herramienta TAW (Test de Accesibilidad Web)?";
 choices[33]= new Array();
 choices[33][0] = "TAW3 Online";
 choices[33][1] = "TAW3 Web Start";
 choices[33][2] = "TAW3 Onsite";
 choices[33][3] = "TAW3 en un clic";
 answers[33] = choices[33][2];
 units[33] = "39";
 comments[33] = "Id Pregunta: 5838. MAP 2008 A1";


//  Id pregunta: 5869 AÃ±o de creación de pregunta: 2009-01-01
 questions[34]= "35)  Las p&aacute;ginas de internet de las administraciones p&uacute;blicas o con financiaci&oacute;n p&uacute;blica existentes a la entrada en vigor del RD 1494/2007 por el que se aprueba el Reglamento sobre las condiciones b&aacute;sicas para el acceso de las personas con discapacidad a las tecnolog&iacute;as de la informaci&oacute;n, deben adaptarse a la norma:";
 choices[34]= new Array();
 choices[34][0] = "Tres meses desde la entrada en vigor del RD.";
 choices[34][1] = "Seis meses desde la entrada en vigor del RD.";
 choices[34][2] = "El d&iacute;a de entrada en vigor del RD.";
 choices[34][3] = "Antes del 31 de diciembre de 2008";
 answers[34] = choices[34][1];
 units[34] = "39";
 comments[34] = "Id Pregunta: 5869. MAP 2008 A1";


//  Id pregunta: 5965 AÃ±o de creación de pregunta: 2010-01-01
 questions[35]= "36)  &iquest;Qu&eacute; norma espa&ntilde;ola es la vigente de &quot;Tecnolog&iacute;as de la Informaci&oacute;n. T&eacute;cnicas de seguridad. Sistema de Gesti&oacute;n de la Seguridad de la Informaci&oacute;n (SGSI). Requisitos&quot;?";
 choices[35]= new Array();
 choices[35][0] = "UNE 71502:2004";
 choices[35][1] = "UNE-ISO/IEC 27001:2007";
 choices[35][2] = "UNE 17799:2000";
 choices[35][3] = "Ninguna de las anteriores";
 answers[35] = choices[35][1];
 units[35] = "42";
 comments[35] = "Id Pregunta: 5965. Castilla La Mancha 2009";


//  Id pregunta: 6417 AÃ±o de creación de pregunta: 2010-01-01
 questions[36]= "37)  El reglamento sobre las condiciones b&aacute;sicas para el acceso de las personas con discapacidad a las tecnolog&iacute;as, productos y servicios relacionados con la sociedad de la informaci&oacute;n y medios de comunicaci&oacute;n social es el:";
 choices[36]= new Array();
 choices[36][0] = "RD 1494/2007";
 choices[36][1] = "RD 1497/2004";
 choices[36][2] = "RD 1449/2007";
 choices[36][3] = "RD 1479/2007";
 answers[36] = choices[36][0];
 units[36] = "39";
 comments[36] = "Id Pregunta: 6417. NULL";


//  Id pregunta: 6418 AÃ±o de creación de pregunta: 2010-01-01
 questions[37]= "38)  &iquest;Cu&aacute;l es la norma que supone la base de la certificaci&oacute;n europea en Accesibilidad Web?";
 choices[37]= new Array();
 choices[37][0] = "CWA 139803:2004";
 choices[37][1] = "CWA 15554:2006";
 choices[37][2] = "CWA 4568:2007";
 choices[37][3] = "CWA 17002:2005";
 answers[37] = choices[37][1];
 units[37] = "39";
 comments[37] = "Id Pregunta: 6418. NULL";


//  Id pregunta: 6444 AÃ±o de creación de pregunta: 2010-01-01
 questions[38]= "39)  ETSI NO publica:";
 choices[38]= new Array();
 choices[38][0] = "Normas europeas";
 choices[38][1] = "Normas espa&ntilde;olas";
 choices[38][2] = "Normas armonizadas";
 choices[38][3] = "Publica todas las anteriores";
 answers[38] = choices[38][1];
 units[38] = "42";
 comments[38] = "Id Pregunta: 6444. Similar a Castilla La Mancha 2009";


//  Id pregunta: 7332 AÃ±o de creación de pregunta: 2010-01-01
 questions[39]= "40)  El WSC (World Standards Cooperation) est&aacute; formado por";
 choices[39]= new Array();
 choices[39][0] = "ISO/IEC/W3C";
 choices[39][1] = "ISO/CEN";
 choices[39][2] = "CEN/CENELEC/ETSI";
 choices[39][3] = "ISO/IEC/ITU-T";
 answers[39] = choices[39][3];
 units[39] = "42";
 comments[39] = "Id Pregunta: 7332. NULL";


//  Id pregunta: 9053 AÃ±o de creación de pregunta: 2016-01-01
 questions[40]= "41)  &iquest;Cual de las siguientes NO es un fase de desarrollo web?";
 choices[40]= new Array();
 choices[40][0] = "An&aacute;lisis de requisitos";
 choices[40][1] = "Finalizaci&oacute;n";
 choices[40][2] = "Lanzamiento";
 choices[40][3] = "Desarrollo";
 answers[40] = choices[40][1];
 units[40] = "39";
 comments[40] = "Id Pregunta: 9053. ";


//  Id pregunta: 9079 AÃ±o de creación de pregunta: 2013-01-01
 questions[41]= "42)  Para cumplir el nivel AA en la pauta &quot;Ayuda a la entrada de datos&quot;, respecto a los formularios de entrada de datos que tengan consecuencias legales, cu&aacute;l de las siguientes opciones NO se exige:";
 choices[41]= new Array();
 choices[41][0] = "Tipograf&iacute;a clara y legible. ";
 choices[41][1] = "Verificaci&oacute;n por parte del usuario.";
 choices[41][2] = "Reversibilidad. ";
 choices[41][3] = "Confirmaci&oacute;n.";
 answers[41] = choices[41][0];
 units[41] = "39";
 comments[41] = "Id Pregunta: 9079. ";


//  Id pregunta: 10350 AÃ±o de creación de pregunta: 2014-01-01
 questions[42]= "43)  En relaci&oacute;n con las pautas de accesibilidad WCAG 2.0, indique la respuesta correcta:";
 choices[42]= new Array();
 choices[42][0] = "Para cumplir nivel A, las p&aacute;ginas no pueden contener ning&uacute;n elemento que destelle m&aacute;s de 3 veces por segundo";
 choices[42][1] = "Lo anterior es cierto, pero para nivel AA";
 choices[42][2] = "Lo anterior es cierto, pero para nivel AAA";
 choices[42][3] = "Lo anterior es cierto, pero a&ntilde;adiendo que adem&aacute;s el destello debe estar por debajo del umbral de destello general y de rojo";
 answers[42] = choices[42][2];
 units[42] = "39";
 comments[42] = "Id Pregunta: 10350. Consultar WCAG Pauta 2.3 Convulsiones";


//  Id pregunta: 10352 AÃ±o de creación de pregunta: 2014-01-01
 questions[43]= "44)  &iquest;Cu&aacute;l de las siguientes no es una herramienta de evaluaci&oacute;n autom&aacute;tica de la accesibilidad de p&aacute;ginas web?";
 choices[43]= new Array();
 choices[43][0] = "ZEUS";
 choices[43][1] = "HERA";
 choices[43][2] = "BOBBY";
 choices[43][3] = "TAW";
 answers[43] = choices[43][0];
 units[43] = "39";
 comments[43] = "Id Pregunta: 10352. Otras herramientas pueden ser eXaminator, Wave o EvalAccess";


//  Id pregunta: 10357 AÃ±o de creación de pregunta: 2014-01-01
 questions[44]= "45)  Ordene en sentido cronol&oacute;gico ascendente los siguientes programas europeos relacionados con la administraci&oacute;n electr&oacute;nica:";
 choices[44]= new Array();
 choices[44][0] = "IDA I, IDA II, ISA, IDABC";
 choices[44][1] = "IDA I, IDA II, IDABC, ISA";
 choices[44][2] = "IDA, IDABC I, IDABC II, ISA";
 choices[44][3] = "IDA, ISA, IDABC I, IDABC II";
 answers[44] = choices[44][1];
 units[44] = "40";
 comments[44] = "Id Pregunta: 10357. IDA I (1995-1998), IDA II (1999-2004), IDABC (2005-2009), ISA (2010-2015)";


//  Id pregunta: 10597 AÃ±o de creación de pregunta: 2015-01-01
 questions[45]= "46)  La ISO publica:";
 choices[45]= new Array();
 choices[45][0] = "Informes T&eacute;cnicos y Gu&iacute;as ISO.";
 choices[45][1] = "Especificaciones Internacionales y Memor&aacute;ndum de errores.";
 choices[45][2] = "A y B son correctas.";
 choices[45][3] = "La ISO no publica ning&uacute;n documento, s&oacute;lo certifica est&aacute;ndares de otras organizaciones.";
 answers[45] = choices[45][0];
 units[45] = "42";
 comments[45] = "Id Pregunta: 10597. S&iacute; publica Technical Reports e ISO Guides. Pero no publica Especificaciones Internacionales sino Technical Specifications o Publicly Available Specifications. Tampoco publica Memor&aacute;ndums de Errores sino Correcciones T&eacute;cnicas (Technical Corrigendum).";


//  Id pregunta: 11586 AÃ±o de creación de pregunta: 2015-01-01
 questions[46]= "47)  La pauta WCAG 2.0 de ayuda a la entrada de datos se relaciona con el principio de: ";
 choices[46]= new Array();
 choices[46][0] = "Operabilidad";
 choices[46][1] = "Robustez";
 choices[46][2] = "Perceptibilidad";
 choices[46][3] = "Comprensibilidad";
 answers[46] = choices[46][3];
 units[46] = "39";
 comments[46] = "Id Pregunta: 11586. ";


//  Id pregunta: 11745 AÃ±o de creación de pregunta: 2015-01-01
 questions[47]= "48)  como se puede asegurar la accesibilidad en los m&oacute;viles?";
 choices[47]= new Array();
 choices[47][0] = "web responsive";
 choices[47][1] = "WPA";
 choices[47][2] = "Web accesibility";
 choices[47][3] = "WSUS";
 answers[47] = choices[47][0];
 units[47] = "39";
 comments[47] = "Id Pregunta: 11745. ";


