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

//  Id pregunta: 26 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;C&oacute;mo se llama la licencia bajo la que se distribuye el software del proyecto GNU?:";
 choices[0]= new Array();
 choices[0][0] = "MPL";
 choices[0][1] = "BSD";
 choices[0][2] = "GPL";
 choices[0][3] = "PPL";
 answers[0] = choices[0][2];
 units[0] = "61";
 comments[0] = "Id Pregunta: 26. ";


//  Id pregunta: 201 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  &iquest;Cu&aacute;l de los siguientes estandares de directorios guarda relaci&oacute;n con la descripci&oacute;n de servicios de usuario?";
 choices[1]= new Array();
 choices[1][0] = "x.500";
 choices[1][1] = "x.501";
 choices[1][2] = "x.509";
 choices[1][3] = "x.511";
 answers[1] = choices[1][3];
 units[1] = "42";
 comments[1] = "Id Pregunta: 201. Examen Julio 2003";


//  Id pregunta: 340 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  La red de comunicaci&oacute;n en c&iacute;rculo de una organizaci&oacute;n es:";
 choices[2]= new Array();
 choices[2][0] = "Comunicaci&oacute;n ascendente donde dos subordinados reportan a su jefe sobre un asunto";
 choices[2][1] = "Esquema descendente en jerarqu&iacute;a absoluta";
 choices[2][2] = "Cada sujeto se comunica con todos los restantes";
 choices[2][3] = "Se establece con dos interlocutores en cada caso, interactuando con los m&aacute;s cercanos a uno";
 answers[2] = choices[2][3];
 units[2] = "23";
 comments[2] = "Id Pregunta: 340. ";


//  Id pregunta: 515 AÃ±o de creación de pregunta: 2003-01-01
 questions[3]= "4)  Seg&uacute;n la Ley de propiedad intelectual, cuando el propietario de un programa de ordenador es una persona jur&iacute;dica, puede ejercer derechos de explotaci&oacute;n:";
 choices[3]= new Array();
 choices[3][0] = "de setenta a&ntilde;os desde el 1 de enero del a&ntilde;o siguiente al de la divulgaci&oacute;n l&iacute;cita del programa o, si no, al de su creaci&oacute;n";
 choices[3][1] = "de sesenta a&ntilde;os desde el 1 de enero del a&ntilde;o siguiente al de la divulgaci&oacute;n l&iacute;cita o il&iacute;cita del programa o, si no, al de su creaci&oacute;n. En caso de divulgaci&oacute;n il&iacute;cita se considerar&aacute; el de creaci&oacute;n ";
 choices[3][2] = "de 5 a&ntilde;os desde el 1 de enero del a&ntilde;o siguiente al de la divulgaci&oacute;n l&iacute;cita del programa, si no al de su creaci&oacute;n";
 choices[3][3] = "Ninguna de las respuestas anteriores es cierta";
 answers[3] = choices[3][0];
 units[3] = "36";
 comments[3] = "Id Pregunta: 515. ";


//  Id pregunta: 529 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  &iquest;Cual de los siguientes es un control de acceso f&iacute;sico?";
 choices[4]= new Array();
 choices[4][0] = "Etiquetado de soportes en cinta";
 choices[4][1] = "Uso de clave de por teclado para entrar al CPD";
 choices[4][2] = "Contrase&ntilde;as para uso de aplicaciones, renovadas peri&oacute;dicamente";
 choices[4][3] = "Todas";
 answers[4] = choices[4][1];
 units[4] = "31, 32, 33";
 comments[4] = "Id Pregunta: 529. Auditor&iacute;a Inform&aacute;tica";


//  Id pregunta: 563 AÃ±o de creación de pregunta: 2006-01-01
 questions[5]= "6)  La organizaciones dentro de las administraciones p&uacute;blicas necesitan directivos que";
 choices[5]= new Array();
 choices[5][0] = "Sean ante todo jefes que se sustenten en la legalidad estatutaria";
 choices[5][1] = "Sean l&iacute;deres que se sustenten en la legalidad estatutaria";
 choices[5][2] = "Lideres que permitan el desarrollo de la misi&oacute;n  y visi&oacute;n de la administraci&oacute;n";
 choices[5][3] = "Jefes que en periodo de cambio sean coherentes con el prop&oacute;sito de la organizaci&oacute;n";
 answers[5] = choices[5][2];
 units[5] = "22";
 comments[5] = "Id Pregunta: 563. ";


//  Id pregunta: 760 AÃ±o de creación de pregunta: 2004-01-01
 questions[6]= "7)  En tecnolog&iacute;a microsoft, para trabajar con bases de datos,utilizaremos";
 choices[6]= new Array();
 choices[6][0] = "ODBC";
 choices[6][1] = "ADO";
 choices[6][2] = "OLE DB";
 choices[6][3] = "Cualquiera de los anteriores";
 answers[6] = choices[6][3];
 units[6] = "59";
 comments[6] = "Id Pregunta: 760. ";


//  Id pregunta: 1326 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  Se define Autoridad de certificaci&oacute;n como aquella en la conf&iacute;an uno o m&aacute;s usuarios y cuya actividad principal es la certificaci&oacute;n de la autenticidad de:";
 choices[7]= new Array();
 choices[7][0] = "Los usuarios";
 choices[7][1] = "Los datos";
 choices[7][2] = "Los documentos";
 choices[7][3] = "Los mensajes";
 answers[7] = choices[7][0];
 units[7] = "74";
 comments[7] = "Id Pregunta: 1326. NULL";


//  Id pregunta: 2028 AÃ±o de creación de pregunta: 2004-01-01
 questions[8]= "9)  &iquest;Cu&aacute;l de los siguientes lenguajes no es orientado a objetos?";
 choices[8]= new Array();
 choices[8][0] = "C.";
 choices[8][1] = "Smalltalk.";
 choices[8][2] = "Eiffel.";
 choices[8][3] = "ACTOR.";
 answers[8] = choices[8][0];
 units[8] = "82,84";
 comments[8] = "Id Pregunta: 2028. Similar a examen TIC SS A 2003";


//  Id pregunta: 2130 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto de UML?";
 choices[9]= new Array();
 choices[9][0] = "Los diagramas de secuencia muestran interacciones entre elementos desde el punto de vista temporal";
 choices[9][1] = "Los diagramas de estados-transiciones visualizan aut&oacute;matas de estados finitos";
 choices[9][2] = "La notaci&oacute;n UML proviene de la fusi&oacute;n de las notaciones Booch, OMT, OOSE y otras";
 choices[9][3] = "Todas las anteriores respuestas son ciertas";
 answers[9] = choices[9][3];
 units[9] = "82";
 comments[9] = "Id Pregunta: 2130. ";


//  Id pregunta: 2287 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  El modelo EFQM, desde el punto de vista de su &aacute;mbito, podr&iacute;a calificarse como:";
 choices[10]= new Array();
 choices[10][0] = "Certificaci&oacute;n de producto";
 choices[10][1] = "Certificaci&oacute;n de proceso (sistema de calidad)";
 choices[10][2] = "Total Quality Management";
 choices[10][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[10] = choices[10][2];
 units[10] = "92";
 comments[10] = "Id Pregunta: 2287. NULL";


//  Id pregunta: 2737 AÃ±o de creación de pregunta: 2006-01-01
 questions[11]= "12)  &iquest;Cuando decimos que una entidad est&aacute; en 3FN?";
 choices[11]= new Array();
 choices[11][0] = "Si est&aacute; en 2FN y cada atributo que no pertenezca a la clave tiene una dependencia funcional completa de la clave.";
 choices[11][1] = "Si est&aacute; en 2FN y no contiene grupos repetitivos.";
 choices[11][2] = "Si est&aacute; en 2FN y no contiene atributos multivaluados.";
 choices[11][3] = "Si est&aacute; en 2FN y cada atributo que no pertenezca a la clave no depende transitivamente de dicha clave.";
 answers[11] = choices[11][3];
 units[11] = "58";
 comments[11] = "Id Pregunta: 2737. ";


//  Id pregunta: 2987 AÃ±o de creación de pregunta: 2004-01-01
 questions[12]= "13)  Un spanning tree es";
 choices[12]= new Array();
 choices[12][0] = "Un &aacute;rbol de recubrimiento de una red";
 choices[12][1] = "Un arbol de decisi&oacute;n para algoritmos de inteligencia artificial como id3";
 choices[12][2] = "Un &aacute;rbol de resoluci&oacute;n en l&oacute;gica";
 choices[12][3] = "Un &aacute;rbol de perif&eacute;ricos de un puerto USB";
 answers[12] = choices[12][0];
 units[12] = "101, 102";
 comments[12] = "Id Pregunta: 2987. ";


//  Id pregunta: 3592 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  La conocida norma de m&oacute;dems V.90 lleva por t&iacute;tulo:";
 choices[13]= new Array();
 choices[13][0] = "&quot;Par constituido por un m&oacute;dem digital y un m&oacute;dem anal&oacute;gico para uso en la red telef&oacute;nica p&uacute;blica conmutada (RTPC) a velocidades de se&ntilde;alizaci&oacute;n de datos de hasta 56000 bps en sentido descendente y hasta 33000 bps en sentido ascendente&quot;";
 choices[13][1] = "&quot;M&oacute;dem digital que funciona a velocidades de se&ntilde;alizaci&oacute;n de datos de hasta 64000 bps para uso en una conexi&oacute;n con conmutaci&oacute;n de circuitos a 4 hilos y en circuitos digitales arrendados punto a punto a 4 hilos&quot;";
 choices[13][2] = "&quot;M&oacute;dem para voz y datos simult&aacute;neos que funciona a una velocidad de se&ntilde;alizaci&oacute;n de voz m&aacute;s datos de 4800 bps, con conmutaci&oacute;n autom&aacute;tica opcional a velocidades de se&ntilde;alizaci&oacute;n de hasta 14400 bps para datos solamente, destinado al uso de la red telef&oacute;nica";
 choices[13][3] = "&quot;Familia de m&oacute;dems d&uacute;plex a 2 hilos que funcionan a velocidades binarias de hasta 9600 bps para uso en la red telef&oacute;nica general conmutada y en circuitos arrendados de tipo telef&oacute;nico&quot;";
 answers[13] = choices[13][0];
 units[13] = "103";
 comments[13] = "Id Pregunta: 3592. modems";


//  Id pregunta: 3656 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  Un applet de Java es:";
 choices[14]= new Array();
 choices[14][0] = "Un int&eacute;rprete del lenguaje Java";
 choices[14][1] = "Una rutina Java que se ejecuta en el servidor recibiendo datos del browser o navegador";
 choices[14][2] = "Un programa Java, generalmente referenciado en una p&aacute;gina HTML, que se ejecuta en el cliente";
 choices[14][3] = "Un programa Java que accede a una base de datos relacional";
 answers[14] = choices[14][2];
 units[14] = "60";
 comments[14] = "Id Pregunta: 3656. NULL";


//  Id pregunta: 3712 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  Los agentes SNMP son:";
 choices[15]= new Array();
 choices[15][0] = "M&oacute;dulos de software que se ejecutan en los dispositivos gestionados y cuya funci&oacute;n es que la informaci&oacute;n acerca del dispositivo est&eacute; disponible para los sistemas de gesti&oacute;n ";
 choices[15][1] = "Ordenadores dedicados a la tarea de preguntar a los dispositvos SNMP por la informaci&oacute;n relevante y catalogarla en una base de datos";
 choices[15][2] = "Oficiales de ISO que realizan peri&oacute;dicamente auditor&iacute;as en compa&ntilde;&iacute;as que tienen grandes redes gestionadas por SNMP";
 choices[15][3] = "Aplicaciones dise&ntilde;adas para monitorizar la actividad de sistemas gestionados SNMP y alertar al usuario en caso de alg&uacute;n problema";
 answers[15] = choices[15][0];
 units[15] = "104";
 comments[15] = "Id Pregunta: 3712. ";


//  Id pregunta: 3986 AÃ±o de creación de pregunta: 2006-01-01
 questions[16]= "17)  En relaci&oacute;n a los switches, se&ntilde;ale la respuesta falsa:";
 choices[16]= new Array();
 choices[16][0] = "Tienen mayor rendimiento que los puentes, y pueden trabajar a la velocidad nominal (wire speed) de la interfaz.";
 choices[16][1] = "En la conmutaci&oacute;n &quot;store-and-forward&quot; recibe la trama y la retransmite si es correcta, tras haber comprobado el CRC.";
 choices[16][2] = "En la conmutaci&oacute;n &quot;cut-throutgh&quot; si el CRC es err&oacute;neo la trama no se retransmite";
 choices[16][3] = "Mediante &quot;cut-through libre de fragmentos&quot; se reciben 64 bytes antes de retransmitir.";
 answers[16] = choices[16][2];
 units[16] = "102";
 comments[16] = "Id Pregunta: 3986. ";


//  Id pregunta: 4076 AÃ±o de creación de pregunta: 2006-01-01
 questions[17]= "18)  &iquest;Cu&aacute;l de las siguientes afirmaciones no es cierta?";
 choices[17]= new Array();
 choices[17][0] = "El modelo en dos capas no permite la distribuci&oacute;n en dos capas diferentes el interfaz de usuario y la l&oacute;gica de negocio";
 choices[17][1] = "El modelo en 3 capas permite situar en una capa separada los datos";
 choices[17][2] = "El modelo en 3 capas permite una mayor seguridad que el modelo en 2 capas";
 choices[17][3] = "El modelo en 2 capas permite separar en una capa separada los datos";
 answers[17] = choices[17][0];
 units[17] = "113";
 comments[17] = "Id Pregunta: 4076. ";


//  Id pregunta: 4280 AÃ±o de creación de pregunta: 2007-01-01
 questions[18]= "19)  Un sistema ERP (Enterprise Resource Planning) b&aacute;sicamente act&uacute;a sobre:";
 choices[18]= new Array();
 choices[18][0] = "La capa de datos (SGBD).";
 choices[18][1] = "La capa de l&oacute;gica de negocio.";
 choices[18][2] = "La capa de presentaci&oacute;n.";
 choices[18][3] = "La capa de comunicaci&oacute;n";
 answers[18] = choices[18][1];
 units[18] = "65";
 comments[18] = "Id Pregunta: 4280. ";


//  Id pregunta: 4572 AÃ±o de creación de pregunta: 2007-01-01
 questions[19]= "20)  Si exportamos un certificado incluyendo su clave privada desde el navegador MS Internet Explorer 6, que extensi&oacute;n tendr&aacute; el fichero resultante?:";
 choices[19]= new Array();
 choices[19][0] = "p12";
 choices[19][1] = ".cer";
 choices[19][2] = ".jks";
 choices[19][3] = ".pfx";
 answers[19] = choices[19][3];
 units[19] = "74";
 comments[19] = "Id Pregunta: 4572. NULL";


//  Id pregunta: 4624 AÃ±o de creación de pregunta: 2007-01-01
 questions[20]= "21)  &iquest;En que lenguaje esta basado XML? ";
 choices[20]= new Array();
 choices[20][0] = "HTML";
 choices[20][1] = "XSL";
 choices[20][2] = "SGML";
 choices[20][3] = "XTML";
 answers[20] = choices[20][2];
 units[20] = "69";
 comments[20] = "Id Pregunta: 4624. ";


//  Id pregunta: 4789 AÃ±o de creación de pregunta: 2007-01-01
 questions[21]= "22)  &iquest;Qu&eacute; principio de los que se indican a continuaci&oacute;n NO est&aacute; recogido en el Marco Europeo de Interoperabilidad?";
 choices[21]= new Array();
 choices[21][0] = "Multiling&uuml;ismo";
 choices[21][1] = "Subsidiariedad";
 choices[21][2] = "Eficiencia";
 choices[21][3] = "Accesibilidad";
 answers[21] = choices[21][2];
 units[21] = "40";
 comments[21] = "Id Pregunta: 4789. ";


//  Id pregunta: 4846 AÃ±o de creación de pregunta: 2007-01-01
 questions[22]= "23)  &iquest;Cu&aacute;l de los siguientes NO es un formato v&aacute;lido para el empaquetamiento de aplicaciones en Java EE (Java Enterprise Edition)?";
 choices[22]= new Array();
 choices[22][0] = "WAR (Web Archive)";
 choices[22][1] = "EAR (Enterprise Archive)";
 choices[22][2] = "BAR (Bean Archive)";
 choices[22][3] = "JAR (Java Archive)";
 answers[22] = choices[22][2];
 units[22] = "60";
 comments[22] = "Id Pregunta: 4846. NULL";


//  Id pregunta: 4876 AÃ±o de creación de pregunta: 2007-01-01
 questions[23]= "24)  En el modelo de procesos de Reingenier&iacute;a del Software propuesto por Pressman, la actividad de modificaci&oacute;n del c&oacute;digo fuente de un m&oacute;dulo con la finalidad de adecuarlo para futuros cambios, recibe la denominaci&oacute;n de:";
 choices[23]= new Array();
 choices[23][0] = "Ingenier&iacute;a inversa de procesos.";
 choices[23][1] = "Reestructuraci&oacute;n del software.";
 choices[23][2] = "Ingenier&iacute;a de la integraci&oacute;n de m&oacute;dulos.";
 choices[23][3] = "Ingenier&iacute;a avanzada.";
 answers[23] = choices[23][1];
 units[23] = "91";
 comments[23] = "Id Pregunta: 4876. examen TIC 2006";


//  Id pregunta: 5004 AÃ±o de creación de pregunta: 2003-01-01
 questions[24]= "25)  &iquest;Cu&aacute;l de estas afirmaciones sobre accesibilidad es cierta de acuerdo con las gu&iacute;as del W3C?";
 choices[24]= new Array();
 choices[24][0] = "Una p&aacute;gina web accesible debe tener textos equivalentes para cualquier elemento no textual";
 choices[24][1] = "Un p&aacute;gina web accesible debe contener solo texto";
 choices[24][2] = "Una p&aacute;gina web accesible no debe utilizar colores";
 choices[24][3] = "Una p&aacute;gina web accesible debe utilizar un &uacute;nico tipo de letra establecido en estas gu&iacute;as";
 answers[24] = choices[24][0];
 units[24] = "39";
 comments[24] = "Id Pregunta: 5004. Examen TIC A 2007";


//  Id pregunta: 5117 AÃ±o de creación de pregunta: 2003-01-01
 questions[25]= "26)  Las normas internacionales en materia de Seguridad de la informaci&oacute;n las publica:";
 choices[25]= new Array();
 choices[25][0] = "AENOR";
 choices[25][1] = "ISO";
 choices[25][2] = "EIC";
 choices[25][3] = "NIS";
 answers[25] = choices[25][1];
 units[25] = "42";
 comments[25] = "Id Pregunta: 5117. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5439 AÃ±o de creación de pregunta: 2003-01-01
 questions[26]= "27)  Una de las primeras personas en desarrollar un concepto de la sociedad de la informaci&oacute;n fue el economista";
 choices[26]= new Array();
 choices[26][0] = "Fritz Machlup";
 choices[26][1] = "Charles Babbage";
 choices[26][2] = "Herman Hollerith";
 choices[26][3] = "Howard Aiken";
 answers[26] = choices[26][0];
 units[26] = "21";
 comments[26] = "Id Pregunta: 5439. Castilla y Le&oacute;n";


//  Id pregunta: 5515 AÃ±o de creación de pregunta: 2003-01-01
 questions[27]= "28)  Indique cu&aacute;l de los siguientes no es un servidor de aplicaciones para servicios web:";
 choices[27]= new Array();
 choices[27][0] = "JONAS";
 choices[27][1] = "XIMDEX";
 choices[27][2] = "WEBSPHERE";
 choices[27][3] = "WEBLOGIC";
 answers[27] = choices[27][1];
 units[27] = "115,116";
 comments[27] = "Id Pregunta: 5515. ";


//  Id pregunta: 6075 AÃ±o de creación de pregunta: 2010-01-01
 questions[28]= "29)  &iquest;Cu&aacute;les son los subsistemas que integran fundamentalmente la direcci&oacute;n de proyectos?";
 choices[28]= new Array();
 choices[28][0] = "Planificaci&oacute;n, organizaci&oacute;n, control, informaci&oacute;n, tecnolog&iacute;a, y cultura de la empresa.";
 choices[28][1] = "Planificaci&oacute;n, Organizaci&oacute;n, Control, Documentaci&oacute;n, Tecnolog&iacute;a y Cultura de la Empresa.";
 choices[28][2] = "Planificaci&oacute;n, gesti&oacute;n, control, informaci&oacute;n, tecnolog&iacute;a y documentaci&oacute;n.";
 choices[28][3] = "Planificaci&oacute;n, organizaci&oacute;n, control, informaci&oacute;n, tecnolog&iacute;a y documentaci&oacute;n.";
 answers[28] = choices[28][0];
 units[28] = "27";
 comments[28] = "Id Pregunta: 6075. ";


//  Id pregunta: 6217 AÃ±o de creación de pregunta: 2010-01-01
 questions[29]= "30)  En el desarrollo de un sistema &iquest;En qu&eacute; casos de los siguientes es adecuado el uso de un 'modelo en espiral'?";
 choices[29]= new Array();
 choices[29][0] = "Sistemas de peque&ntilde;o tama&ntilde;o";
 choices[29][1] = "Cuando los requisitos est&eacute;n bien definidos desde un principio";
 choices[29][2] = "Proyectos donde sea importante el factor riesgo";
 choices[29][3] = "El producto a desarrollar no es novedoso";
 answers[29] = choices[29][2];
 units[29] = "76";
 comments[29] = "Id Pregunta: 6217. TICB-2009, bloque desarrollo";


//  Id pregunta: 6283 AÃ±o de creación de pregunta: 2010-01-01
 questions[30]= "31)  &iquest;Qu&eacute; &oacute;rganos no suelen ser necesarios a la hora de realizar una planificaci&oacute;n y direcci&oacute;n estrat&eacute;gica?";
 choices[30]= new Array();
 choices[30][0] = "Los proveedores";
 choices[30][1] = "El equipo de proyecto";
 choices[30][2] = "El comit&eacute; de direcci&oacute;n";
 choices[30][3] = "Un grupo de usuarios";
 answers[30] = choices[30][0];
 units[30] = "77";
 comments[30] = "Id Pregunta: 6283. ";


//  Id pregunta: 6399 AÃ±o de creación de pregunta: 2010-01-01
 questions[31]= "32)  De acuerdo a lo dispuesto en la ley 59/2003, se&ntilde;ale la respuesta correcta";
 choices[31]= new Array();
 choices[31][0] = "Firma electr&oacute;nica, es el conjunto de datos en forma electr&oacute;nica, consignados junto a otros o asociados con ellos, que pueden ser utilizados como medio de identificaci&oacute;n del firmante.";
 choices[31][1] = "La firma electr&oacute;nica avanzada tendr&aacute; respecto de los datos consignados en forma electr&oacute;nica el mismo valor que la firma manuscrita en relaci&oacute;n con los consignados en papel.";
 choices[31][2] = "La firma electronica avanzada es la firma electr&oacute;nica reconocida basada en un certificado reconocido y generada mediante un dispositivo seguro de creaci&oacute;n de firma.";
 choices[31][3] = "La firma electr&oacute;nica reconocida es la firma electr&oacute;nica avanzada que permite identificar al firmante, as&iacute; como el momento de creaci&oacute;n y detectar cualquier cambio ulterior de los datos firmados, que est&aacute; vinculada al firmante de manera &uacute;nica y a los datos a que se refiere y que ha sido creada por medios que el firmante puede mantener bajo su exclusivo control.";
 answers[31] = choices[31][0];
 units[31] = "30";
 comments[31] = "Id Pregunta: 6399. Ley 59/2003, art&iacute;culo 3";


//  Id pregunta: 6463 AÃ±o de creación de pregunta: 2010-01-01
 questions[32]= "33)  Indique cu&aacute;l NO es una t&eacute;cnica de planificaci&oacute;n temporal:";
 choices[32]= new Array();
 choices[32][0] = "WBS (Work Breakdown Structure)";
 choices[32][1] = "PERT (Program Evaluation and Review Technique)";
 choices[32][2] = "Diagrama de Gantt";
 choices[32][3] = "CPM (Critical Path Method)";
 answers[32] = choices[32][0];
 units[32] = "28";
 comments[32] = "Id Pregunta: 6463. Castilla La Mancha 2009";


//  Id pregunta: 6467 AÃ±o de creación de pregunta: 2010-01-01
 questions[33]= "34)  &iquest;En que t&eacute;cnica  de pruebas del software se utiliza la complejidad ciclom&aacute;tica?";
 choices[33]= new Array();
 choices[33][0] = "Prueba de caja negra";
 choices[33][1] = "Prueba del camino b&aacute;sico";
 choices[33][2] = "Prueba de la partici&oacute;n equivalente";
 choices[33][3] = "Ninguna de las anteriores";
 answers[33] = choices[33][1];
 units[33] = "88";
 comments[33] = "Id Pregunta: 6467. Castilla La Mancha 2009";


//  Id pregunta: 6485 AÃ±o de creación de pregunta: 2010-01-01
 questions[34]= "35)  En relaci&oacute;n con la transmisi&oacute;n en frecuencias radioel&eacute;ctricas, el medio de transmisi&oacute;n influye en la propagaci&oacute;n a trav&eacute;s de un conjunto de fen&oacute;menos f&iacute;sicos &iquest;Cu&aacute;l NO es uno de ellos?";
 choices[34]= new Array();
 choices[34][0] = "Reflexi&oacute;n";
 choices[34][1] = "Dispersi&oacute;n crom&aacute;tica";
 choices[34][2] = "Difracci&oacute;n";
 choices[34][3] = "Absorci&oacute;n";
 answers[34] = choices[34][1];
 units[34] = "99";
 comments[34] = "Id Pregunta: 6485. Castilla La Mancha 2009";


//  Id pregunta: 6563 AÃ±o de creación de pregunta: 2010-01-01
 questions[35]= "36)  GPRS no se caracteriza por";
 choices[35]= new Array();
 choices[35][0] = "Los paquetes se envian a intervalos de tiempo irregulares";
 choices[35][1] = "El nodo GGSN es el nodo pasarela que realiza la interfaz con las redes de datos externas";
 choices[35][2] = "No requiere gesti&oacute;n de movilidad";
 choices[35][3] = "Todas las respuestas anteriores son correctas";
 answers[35] = choices[35][2];
 units[35] = "108";
 comments[35] = "Id Pregunta: 6563. NULL";


//  Id pregunta: 6608 AÃ±o de creación de pregunta: 2010-01-01
 questions[36]= "37)  En el an&aacute;lisis estructurado, al hablar de diccionario de datos se puede diferenciar entre:";
 choices[36]= new Array();
 choices[36][0] = "Diccionarios Activos y Pasivos";
 choices[36][1] = "Diccionario de Datos y de Procesos";
 choices[36][2] = "Diccionarios Funcionales y Descriptivos";
 choices[36][3] = "En el an&aacute;lisis estructurado no se diferencian tipos de diccionarios";
 answers[36] = choices[36][0];
 units[36] = "81";
 comments[36] = "Id Pregunta: 6608. NULL";


//  Id pregunta: 7273 AÃ±o de creación de pregunta: 2010-01-01
 questions[37]= "38)  Se&ntilde;ale  la opci&oacute;n que no corresponde a un  tipo de virtualizaci&oacute;n";
 choices[37]= new Array();
 choices[37][0] = "Virtualizaci&oacute;n de Sistema Operativo";
 choices[37][1] = "Paravirtualizaci&oacute;n";
 choices[37][2] = "Virtualizaci&oacute;n de datos";
 choices[37][3] = "Virtualizaci&oacute;n de red";
 answers[37] = choices[37][2];
 units[37] = "119";
 comments[37] = "Id Pregunta: 7273. NULL";


//  Id pregunta: 7352 AÃ±o de creación de pregunta: 2010-01-01
 questions[38]= "39)  En la teor&iacute;a de la Decisi&oacute;n Multicriterio Discreta &iquest;Cu&aacute;l de los siguientes es un m&eacute;todo de asignaci&oacute;n de pesos?";
 choices[38]= new Array();
 choices[38][0] = "Delphi";
 choices[38][1] = "Promethee";
 choices[38][2] = "Electre";
 choices[38][3] = "Qualiflex";
 answers[38] = choices[38][0];
 units[38] = "34";
 comments[38] = "Id Pregunta: 7352. NULL";


//  Id pregunta: 8170 AÃ±o de creación de pregunta: 2011-01-01
 questions[39]= "40)  Entre los lenguajes de especificaci&oacute;n de workflows, NO se encuentra:";
 choices[39]= new Array();
 choices[39][0] = "YAWL.";
 choices[39][1] = "ETL.";
 choices[39][2] = "XPDL.";
 choices[39][3] = "BPEL.";
 answers[39] = choices[39][1];
 units[39] = "71";
 comments[39] = "Id Pregunta: 8170. Examen TIC A1 2010";


//  Id pregunta: 8283 AÃ±o de creación de pregunta: 2011-01-01
 questions[40]= "41)  El formato de direcci&oacute;n EUI-64 es un formato est&aacute;ndar del IEEE, que permite a un nodo autoconfigurar o asignarse autom&aacute;ticamente su propia direcci&oacute;n IPv6 de nodo, a partir de la direcci&oacute;n IEEE 802 MAC de la tarjeta de red del:";
 choices[40]= new Array();
 choices[40][0] = "Router vecino y del prefijo de la direcci&oacute;n de red (/64) a la que est&aacute; conectado dicho nodo.";
 choices[40][1] = "Propio nodo y del prefijo de la direcci&oacute;n de red (/48) del router vecino al que est&aacute; conectado dicho nodo.";
 choices[40][2] = "Router vecino y del prefijo de la direcci&oacute;n de red (/48) a la que est&aacute; conectado dicho nodo.";
 choices[40][3] = "Propio nodo y del prefijo de la direcci&oacute;n de red (/64) a la que est&aacute; conectado dicho nodo.";
 answers[40] = choices[40][3];
 units[40] = "100";
 comments[40] = "Id Pregunta: 8283. Examen TIC A1 2010";


//  Id pregunta: 8310 AÃ±o de creación de pregunta: 2011-01-01
 questions[41]= "42)  La autoridad encargada de la asignaci&oacute;n de nombres de dominio de primer nivel gen&eacute;ricos (gTLD) y de c&oacute;digos de pa&iacute;ses (ocTLD) &uacute;nicos en lnternet es:";
 choices[41]= new Array();
 choices[41][0] = "IANA. ";
 choices[41][1] = "NIST.";
 choices[41][2] = "ICANN.";
 choices[41][3] = "IETF.";
 answers[41] = choices[41][2];
 units[41] = "112,42";
 comments[41] = "Id Pregunta: 8310. Examen TIC A2 2010";


//  Id pregunta: 8342 AÃ±o de creación de pregunta: 2011-01-01
 questions[42]= "43)  &iquest;Qu&eacute; se intenta conseguir al aplicar t&eacute;cnicas de desnormalizaci&oacute;n en algunas tablas en una base de datos que fue normalizada previamente?";
 choices[42]= new Array();
 choices[42][0] = "Optimizar el desempe&ntilde;o de la base de datos.";
 choices[42][1] = "Evitar datos redundantes.";
 choices[42][2] = "Proteger la integridad de los datos.";
 choices[42][3] = "Facilitar el uso al usuano final.";
 answers[42] = choices[42][0];
 units[42] = "86";
 comments[42] = "Id Pregunta: 8342. Examen TIC A2 2010";


//  Id pregunta: 8509 AÃ±o de creación de pregunta: 2011-01-01
 questions[43]= "44)  Actualmente, el World Wide Web Consortium (W3C) trabaja en los siguientes est&aacute;ndares y herramientas de integraci&oacute;n de datos de entrada. Seleccionar la respuesta ERR&Oacute;NEA: ";
 choices[43]= new Array();
 choices[43][0] = "SRGS tiene corno funci&oacute;n principal permitir que una aplicaci&oacute;n de voz indique a un reconocedor qu&eacute; es lo que tiene que escuchar, es decir, palabras, modelos en los que estas palabras surgen, lenguaje hablado de cada palabra, etc. ";
 choices[43][1] = " SSML, lenguaje de marcado de S&iacute;ntesis del Habla, basado en XML, forma parte del proceso de salida de informaci&oacute;n y funciona como componente de conversi&oacute;n ayudando a generar habla sint&eacute;tica. ";
 choices[43][2] = "SlSR permite describir anotaciones sobre reglas gramaticales para extraer resultados sem&aacute;nticos a trav&eacute;s del reconocimiento del habla. El resultado obtenido puede expresarse en formato XML, usando el lenguaje EMMA. ";
 choices[43][3] = "EMMA es un lenguaje de etiquetado que permite crear di&aacute;logos con los que se puede interactuar escuchando comandos hablados, controlables a trav&eacute;s de entradas de voz";
 answers[43] = choices[43][3];
 units[43] = "94";
 comments[43] = "Id Pregunta: 8509. Examen TIC A2 2010";


//  Id pregunta: 8529 AÃ±o de creación de pregunta: 2011-01-01
 questions[44]= "45)  En el contexto de la Web 2.0, el conjunto formado por una colecci&oacute;n extensible de p&aacute;ginas web entrelazadas, un sistema hipertextual para almacenar y modificar informaci&oacute;n y una base de datos donde cada p&aacute;gina puede ser f&aacute;cilmente modificada por cualquier usuario que disponga de un navegador web est&aacute;ndar que admita la utilizaci&oacute;n de formularios, corresponde al concepto de:";
 choices[44]= new Array();
 choices[44][0] = "Wiki.";
 choices[44][1] = "Mashup.";
 choices[44][2] = "Blog.";
 choices[44][3] = "Agregador o feeder. ";
 answers[44] = choices[44][0];
 units[44] = "120";
 comments[44] = "Id Pregunta: 8529. Examen TIC A2 2010 interna";


//  Id pregunta: 8808 AÃ±o de creación de pregunta: 2011-01-01
 questions[45]= "46)  El est&aacute;ndar de e-learning participado por el IEEE, que incluye un modelo de referencia para objetos software educativos compartibles, un entorno de ejecuci&oacute;n y un modelo de agregaci&oacute;n de contenido es:";
 choices[45]= new Array();
 choices[45][0] = "AEIC.";
 choices[45][1] = "LOM.";
 choices[45][2] = "LCMS.";
 choices[45][3] = "SCORM.";
 answers[45] = choices[45][3];
 units[45] = "66";
 comments[45] = "Id Pregunta: 8808. Examen UPM A2 2011";


//  Id pregunta: 8885 AÃ±o de creación de pregunta: 2011-01-01
 questions[46]= "47)  &iquest;Cu&aacute;l de las siguientes no es una tecnolog&iacute;a de elementos fotosensibles?";
 choices[46]= new Array();
 choices[46][0] = "CCD";
 choices[46][1] = "PTN";
 choices[46][2] = "CIS";
 choices[46][3] = "CMOS";
 answers[46] = choices[46][1];
 units[46] = "93";
 comments[46] = "Id Pregunta: 8885. NULL";


//  Id pregunta: 8921 AÃ±o de creación de pregunta: 2011-01-01
 questions[47]= "48)  El proceso de normalizaci&oacute;n tiene por objeto";
 choices[47]= new Array();
 choices[47][0] = "Establecer reglas de nombrado uniformes para las entidades, los atributos y las relaciones";
 choices[47][1] = "Obtener el dise&ntilde;o f&iacute;sico del modelo de datos";
 choices[47][2] = "Eliminar las dependencias entre atributos que originen anomal&iacute;as en el tratamiento de los datos";
 choices[47][3] = "Homogeneizar el n&uacute;mero de dimensiones de las tablas de la base de datos";
 answers[47] = choices[47][2];
 units[47] = "58";
 comments[47] = "Id Pregunta: 8921. Operador Ayto. Madrid 2010";


//  Id pregunta: 8958 AÃ±o de creación de pregunta: 2011-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l de los siguientes conceptos no aplica a la Ingenier&iacute;a del conocimiento?";
 choices[48]= new Array();
 choices[48][0] = "No utiliza enfoques algor&iacute;tmicos";
 choices[48][1] = "Utiliza una estructura eminentemente procedural";
 choices[48][2] = "Utiliza una estructura eminentemente declarativa";
 choices[48][3] = "Resuelve problemas heur&iacute;sticos";
 answers[48] = choices[48][1];
 units[48] = "63";
 comments[48] = "Id Pregunta: 8958. ";


//  Id pregunta: 8970 AÃ±o de creación de pregunta: 2011-01-01
 questions[49]= "50)  Entre los agentes del Plan General de Garant&iacute;a de la Calidad no figura:";
 choices[49]= new Array();
 choices[49][0] = "EGC (Eq garant&iacute;a calidad)";
 choices[49][1] = "EDS (Equipo de desarrollo)";
 choices[49][2] = "DIR (Director de proyecto)";
 choices[49][3] = "CDC (Comit&eacute; directivo de calidad)";
 answers[49] = choices[49][3];
 units[49] = "87,88,92";
 comments[49] = "Id Pregunta: 8970. ";


//  Id pregunta: 8995 AÃ±o de creación de pregunta: 2011-01-01
 questions[50]= "51)  El protocolo SSL (Secure Sockets Layer)";
 choices[50]= new Array();
 choices[50][0] = "Proporciona conexiones seguras s&oacute;lo en redes privadas y siempre que el cliente y el servidor pertenezcan a la misma subred IP.";
 choices[50][1] = "No garantiza la integridad de la informaci&oacute;n intercambiada entre el cliente y el servidor.";
 choices[50][2] = "Es una capa de seguridad que opera siempre sobre protocolo UDP.";
 choices[50][3] = "Proporciona conexiones seguras sobre una red insegura garantizando la integridad de los datos transmitidos, privacidad de la conexi&oacute;n y autentificaci&oacute;n del cliente y servidor.";
 answers[50] = choices[50][3];
 units[50] = "111";
 comments[50] = "Id Pregunta: 8995. Examen UPM A2 2011";


//  Id pregunta: 9063 AÃ±o de creación de pregunta: 2011-01-01
 questions[51]= "52)  De acuedo a la ley 15/1999, la transmisi&oacute;n de los datos a un encargado del tratamiento sin dar cumplimiento a los deberes formales establecidos en el art&iacute;culo 12 de la ley (Acceso a los datos por cuenta de terceros) se considerar&aacute;:";
 choices[51]= new Array();
 choices[51][0] = "Infracci&oacute;n leve";
 choices[51][1] = "Infracci&oacute;n grave";
 choices[51][2] = "Infracci&oacute;n muy grave";
 choices[51][3] = "No se considerar&aacute; infracci&oacute;n";
 answers[51] = choices[51][0];
 units[51] = "29";
 comments[51] = "Id Pregunta: 9063. NULL";


//  Id pregunta: 9185 AÃ±o de creación de pregunta: 2013-01-01
 questions[52]= "53)  &iquest;Cu&aacute;l de los siguientes NO es un Proceso Principal de M&eacute;trica 3?";
 choices[52]= new Array();
 choices[52][0] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[52][1] = "Mantenimiento de Sistemas de Informaci&oacute;n";
 choices[52][2] = "Dise&ntilde;o de Sistemas de Informaci&oacute;n";
 choices[52][3] = "Todos son Procesos Principales";
 answers[52] = choices[52][2];
 units[52] = "86";
 comments[52] = "Id Pregunta: 9185. NULL";


//  Id pregunta: 9200 AÃ±o de creación de pregunta: 2013-01-01
 questions[53]= "54)  &iquest;Cu&aacute;ntas copias de seguridad de un programa de ordenador se pueden realizar seg&uacute;n la legislaci&oacute;n vigente en materia de propiedad intelectual?";
 choices[53]= new Array();
 choices[53][0] = "No se pueden realizar copias de seguridad.";
 choices[53][1] = "La ley permite siempre la realizaci&oacute;n de una copia de seguridad.";
 choices[53][2] = "Una copia de seguridad, siempre que el titular no se oponga expresamente.";
 choices[53][3] = "Una copia de seguridad, pero lo tiene que autorizar expresamente el titular.";
 answers[53] = choices[53][1];
 units[53] = "36";
 comments[53] = "Id Pregunta: 9200. ";


//  Id pregunta: 9205 AÃ±o de creación de pregunta: 2013-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l de los siguientes es un tipo de huella digital?";
 choices[54]= new Array();
 choices[54][0] = "Huella sim&eacute;trica.";
 choices[54][1] = "Huella asim&eacute;trica.";
 choices[54][2] = "Huella an&oacute;nima.";
 choices[54][3] = "Todas las anteriores son verdaderas.";
 answers[54] = choices[54][3];
 units[54] = "37";
 comments[54] = "Id Pregunta: 9205. ";


//  Id pregunta: 9342 AÃ±o de creación de pregunta: 2013-01-01
 questions[55]= "56)  &iquest;Qu&eacute; afirmaci&oacute;n es falsa sobre Garant&iacute;a de Calidad?";
 choices[55]= new Array();
 choices[55][0] = "Est&aacute; delineada en un documento de estructura.";
 choices[55][1] = "El objetivo es asegurarle al cliente la calidad de un producto.";
 choices[55][2] = "La estructura se presenta en un manual de garant&iacute;a de calidad";
 choices[55][3] = "La garant&iacute;a de calidad no se extiende a problemas de seguridad";
 answers[55] = choices[55][3];
 units[55] = "87";
 comments[55] = "Id Pregunta: 9342. NULL";


//  Id pregunta: 9355 AÃ±o de creación de pregunta: 2013-01-01
 questions[56]= "57)  Indica cual de estas afirmaciones es cierta";
 choices[56]= new Array();
 choices[56][0] = "En RDSI igual que en RTB el descolgado del tel&eacute;fono produce un &quot;corto&quot; de tal forma que la corriente que pasa por el bucle indica a la central que el abonado ha descolgado.";
 choices[56][1] = "En RDSI el terminador de red aun siendo activo en caso de ca&iacute;da de la alimentaci&oacute;n local es capaz de establecer/mantener la conversaci&oacute;n.";
 choices[56][2] = "Los terminales que cuelgan de la RTB (Red Telef&oacute;nica B&aacute;sica) no pueden establecer ning&uacute;n tipo de comunicaci&oacute;n con los que cuelgan de la RDSI (Red Digital de Servicios Integrados).";
 choices[56][3] = "Todas las respuestas son correctas.";
 answers[56] = choices[56][1];
 units[56] = "103";
 comments[56] = "Id Pregunta: 9355. Pruebas selectivas Ingeniero de Telecomunicaci&oacute;n Ayto de Madrid 2010";


//  Id pregunta: 9523 AÃ±o de creación de pregunta: 2013-01-01
 questions[57]= "58)  Se&ntilde;ale la afirmaci&oacute;n falsa con respecto al est&aacute;ndar H.320:";
 choices[57]= new Array();
 choices[57][0] = "Es un est&aacute;ndar para videoconferencia sobre RDSI";
 choices[57][1] = "Utiliza como est&aacute;ndares de cifrado H.233 y H.244";
 choices[57][2] = "Uno de los tama&ntilde;os de cuadro es CIF (352x288) ";
 choices[57][3] = "Uno de los tama&ntilde;os de cuadro es QCIF (176x144) ";
 answers[57] = choices[57][1];
 units[57] = "117";
 comments[57] = "Id Pregunta: 9523. NULL";


//  Id pregunta: 9615 AÃ±o de creación de pregunta: 2014-01-01
 questions[58]= "59)  &iquest;C&oacute;mo se llama la interfaz gr&aacute;fica del sistema operativo Mac OS X?";
 choices[58]= new Array();
 choices[58][0] = "Safari";
 choices[58][1] = "Lion";
 choices[58][2] = "Aqua";
 choices[58][3] = "Terra";
 answers[58] = choices[58][2];
 units[58] = "52";
 comments[58] = "Id Pregunta: 9615. ";


//  Id pregunta: 9945 AÃ±o de creación de pregunta: 2014-01-01
 questions[59]= "60)  El modelo de desarrollo RAD (Rapid Application Development) fue descrito inicialmente por:";
 choices[59]= new Array();
 choices[59][0] = "Codd ";
 choices[59][1] = "Boehm ";
 choices[59][2] = "Chen ";
 choices[59][3] = "James Marti";
 answers[59] = choices[59][3];
 units[59] = "76";
 comments[59] = "Id Pregunta: 9945. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 9965 AÃ±o de creación de pregunta: 2014-01-01
 questions[60]= "61)  &iquest;Cu&aacute;l de las siguientes afirmaciones es FALSA respecto al lenguaje de programaci&oacute;n C# de la  plataforma .NET?";
 choices[60]= new Array();
 choices[60][0] = "En C# una clase puede heredar directamente de una sola clase primaria pero puede implementar cualquier n&uacute;mero de interfaces.";
 choices[60][1] = "C# no admite la aritm&eacute;tica con punteros de manera predeterminada, sin embargo, si utiliza la palabra clave unsafe, puede definir un contexto no seguro en el que se pueden utilizar punteros";
 choices[60][2] = "Los programas en C# pueden constar de uno o varios archivos, y cada archivo puede contener cero o varios espacios de nombres (namespaces).";
 choices[60][3] = "Un espacio de nombres (namespace) puede contener tipos tales como clases (classes), estructuras (structs), interfaces (interfaces), enumeraciones (enumerations) y delegados (delegates), pero no puede contener otros espacios de nombres (namespaces).";
 answers[60] = choices[60][3];
 units[60] = "59,115";
 comments[60] = "Id Pregunta: 9965. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";


//  Id pregunta: 9981 AÃ±o de creación de pregunta: 2014-01-01
 questions[61]= "62)  &iquest;Con qu&eacute; siglas se identifica el Common Language Runtime de la plataforma .NET?";
 choices[61]= new Array();
 choices[61][0] = "CLRUN";
 choices[61][1] = "CLRNET";
 choices[61][2] = "COLR";
 choices[61][3] = "CLR";
 answers[61] = choices[61][3];
 units[61] = "59,115";
 comments[61] = "Id Pregunta: 9981. TIC A2, UPM, Examen 2010";


//  Id pregunta: 10002 AÃ±o de creación de pregunta: 2014-01-01
 questions[62]= "63)  En el sistema operativo UNIX la expresi&oacute;n &ldquo;daemon&rdquo; se refiere a un proceso delsistema que";
 choices[62]= new Array();
 choices[62][0] = "siempre se ejecuta en segundo plano (background).";
 choices[62][1] = "siempre es de corta duraci&oacute;n.";
 choices[62][2] = "est&aacute; siempre ejecut&aacute;ndose.";
 choices[62][3] = "nunca se ejecuta bajo control de los subsistemas de temporarizaci&oacute;n.";
 answers[62] = choices[62][0];
 units[62] = "53";
 comments[62] = "Id Pregunta: 10002. ";


//  Id pregunta: 10038 AÃ±o de creación de pregunta: 2014-01-01
 questions[63]= "64)  Un equipo con la direcci&oacute;n IP 128.0.235.56/27 &iquest;Qu&eacute; m&aacute;scara de red, direcci&oacute;n de red y direcci&oacute;n de broadcast tiene?";
 choices[63]= new Array();
 choices[63][0] = "M&aacute;scara 255.255.255.224, red 128.0.235.32, broadcast 128.0.235.63";
 choices[63][1] = "M&aacute;scara 255.255.255.0, red 128.0.235.0, broadcast 128.0.235.255";
 choices[63][2] = "M&aacute;scara 255.255.255.192, red 128.0.235.0, broadcast 128.0.235.63";
 choices[63][3] = "M&aacute;scara 255.255.255.128, red 128.0.235.0, broadcast 128.0.235.127";
 answers[63] = choices[63][0];
 units[63] = "100";
 comments[63] = "Id Pregunta: 10038. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10047 AÃ±o de creación de pregunta: 2014-01-01
 questions[64]= "65)  Con respecto al campo Data Link Connection Identifier (DLCI) de Frame Relay se&ntilde;ale la respuesta correcta:";
 choices[64]= new Array();
 choices[64][0] = "Debe ser &uacute;nico en toda la red.";
 choices[64][1] = "Tiene una longitud total de 10 bits por defecto.";
 choices[64][2] = "Controla los mecanismos de notificaci&oacute;n de congesti&oacute;n.";
 choices[64][3] = "Los valores 0 a 128 del mismo est&aacute;n reservados para funciones especiales.";
 answers[64] = choices[64][1];
 units[64] = "109";
 comments[64] = "Id Pregunta: 10047. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10075 AÃ±o de creación de pregunta: 2014-01-01
 questions[65]= "66)  La tecnolog&iacute;a WiMAX 2 es conocida formalmente como:";
 choices[65]= new Array();
 choices[65][0] = "802.16m ";
 choices[65][1] = "802.16a";
 choices[65][2] = "802.11x ";
 choices[65][3] = "802.11n";
 answers[65] = choices[65][0];
 units[65] = "101";
 comments[65] = "Id Pregunta: 10075. TIC A2, libre, Examen 2013";


//  Id pregunta: 10095 AÃ±o de creación de pregunta: 2014-01-01
 questions[66]= "67)  En relaci&oacute;n con el producto ERS en METRICA v.3:";
 choices[66]= new Array();
 choices[66][0] = "La ERS la obtienen los analistas en ASI 9.";
 choices[66][1] = "La ERS la obtienen los analistas en ASI 2.";
 choices[66][2] = "La ERS la obtienen los analistas y usuarios expertos en ASI 9.";
 choices[66][3] = "La ERS la obtienen los analistas y usuarios expertos en ASI 2.";
 answers[66] = choices[66][0];
 units[66] = "78";
 comments[66] = "Id Pregunta: 10095. NULL";


//  Id pregunta: 10102 AÃ±o de creación de pregunta: 2014-01-01
 questions[67]= "68)  En el diagrama SADT, &iquest;qu&eacute; interconexi&oacute;n NO existe?";
 choices[67]= new Array();
 choices[67][0] = "salida-mecanismo";
 choices[67][1] = "salida-realimentaci&oacute;n";
 choices[67][2] = "control-relaimentaci&oacute;n";
 choices[67][3] = "entrada-realimentaci&oacute;n";
 answers[67] = choices[67][1];
 units[67] = "81";
 comments[67] = "Id Pregunta: 10102. NULL";


//  Id pregunta: 10130 AÃ±o de creación de pregunta: 2014-01-01
 questions[68]= "69)  SNMPv3 est&aacute; definido en:";
 choices[68]= new Array();
 choices[68][0] = "RFC 3500";
 choices[68][1] = "RFC 3100";
 choices[68][2] = "RFC 3120-3125";
 choices[68][3] = "RFC 3410-3418";
 answers[68] = choices[68][3];
 units[68] = "104";
 comments[68] = "Id Pregunta: 10130. ";


//  Id pregunta: 10178 AÃ±o de creación de pregunta: 2014-01-01
 questions[69]= "70)  Determine la afirmaci&oacute;n cierta en relaci&oacute;n con los diagramas UML&hellip;";
 choices[69]= new Array();
 choices[69][0] = "El diagrama de Comunicaci&oacute;n que introdujo UML2.0, constituye una versi&oacute;n modificada del anterior diagrama de Colaboraci&oacute;n";
 choices[69][1] = "UML tipifica como diagramas de comportamiento los siguientes: diagramas de Actividad, diagramas de Estado, diagramas de Caso de Uso y los diagramas de Interacci&oacute;n.";
 choices[69][2] = "Los denominados diagramas globales de interacci&oacute;n ofrecen una visi&oacute;n de conjunto de las rutas de acceso de ejecuci&oacute;n de toda la aplicaci&oacute;n, utilizando elementos de diagramas de actividades y diagramas de secuencia.";
 choices[69][3] = "Todas las anteriores";
 answers[69] = choices[69][3];
 units[69] = "82";
 comments[69] = "Id Pregunta: 10178. ";


//  Id pregunta: 10182 AÃ±o de creación de pregunta: 2014-01-01
 questions[70]= "71)  Se califican como entidades d&eacute;biles aquellas cuya existencia no tiene sentido sin la existencia de la entidad regular de la que dependen. En relaci&oacute;n con las entidades d&eacute;biles y regulares, es falso que:";
 choices[70]= new Array();
 choices[70][0] = "La dependencia en existencia implica a su vez dependencia en identificaci&oacute;n";
 choices[70][1] = "La dependencia en existencia de una entidad d&eacute;bil respecto de una entidad regular supone que la entidad d&eacute;bil no dispone de suficientes atributos para formar su clave primaria. La entidad regular aporta la parte de clave que le falta a la entidad d&eacute;bil.";
 choices[70][2] = "Las relaciones de dependencia pueden surgir en interrelaciones con tipo de correspondencia 1:N o N:M";
 choices[70][3] = "Todas las anteriores";
 answers[70] = choices[70][3];
 units[70] = "80";
 comments[70] = "Id Pregunta: 10182. ";


//  Id pregunta: 10251 AÃ±o de creación de pregunta: 2014-01-01
 questions[71]= "72)  FooCorp distribuye un software propietario que enlaza con una librer&iacute;a no modificada que se distribuye mediante la licencia LGPL. &iquest;Obliga LGPL a FooCorp a permitir la ingenier&iacute;a inversa de su software propietario para el uso exclusivo del usuario?";
 choices[71]= new Array();
 choices[71][0] = "Si";
 choices[71][1] = "Si, aunque s&oacute;lo si distribuye el software mediante licencia LGPL";
 choices[71][2] = "No";
 choices[71][3] = "No, LGPL no permite este tipo de usos";
 answers[71] = choices[71][0];
 units[71] = "61";
 comments[71] = "Id Pregunta: 10251. ";


//  Id pregunta: 10313 AÃ±o de creación de pregunta: 2014-01-01
 questions[72]= "73)  Comparando NAS (Network-attached Storage) con SAN (Storage Area Network):";
 choices[72]= new Array();
 choices[72][0] = "NAS opera a nivel de fichero y SAN a nivel de bloque.";
 choices[72][1] = "NAS opera a nivel de bloque y SAN a nivel de fichero.";
 choices[72][2] = "Ambos operan a nivel de bloque.";
 choices[72][3] = "Ambos operan a nivel de fichero.";
 answers[72] = choices[72][0];
 units[72] = "48";
 comments[72] = "Id Pregunta: 10313. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10354 AÃ±o de creación de pregunta: 2014-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l es el &oacute;rgano encargado de supervisar y mejorar la accesibilidad de los portales web de la Administraci&oacute;n?";
 choices[73]= new Array();
 choices[73][0] = "Ministerio de Industria, Energ&iacute;a y Turismo";
 choices[73][1] = "Ministerio de la Presidencia";
 choices[73][2] = "El Observatorio de Accesibilidad, iniciativa del Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[73][3] = "El Observatorio Estatal de la Discapacidad (OED), iniciativa del Ministerio de Sanidad, Servicios Sociales e Igualdad";
 answers[73] = choices[73][2];
 units[73] = "39";
 comments[73] = "Id Pregunta: 10354. http://administracionelectronica.gob.es/pae_Home/pae_Estrategias/pae_Accesibilidad/pae_Observatorio_de_Accesibilidad.html";


//  Id pregunta: 10361 AÃ±o de creación de pregunta: 2014-01-01
 questions[74]= "75)  Dentro de las recomendaciones de la UIT-T (Uni&oacute;n Internacional de Telecomunicaciones), se&ntilde;ale la correspondencia incorrecta:";
 choices[74]= new Array();
 choices[74][0] = "Serie V: Comunicaci&oacute;n de datos por la red telef&oacute;nica";
 choices[74][1] = "Serie X: Redes de datos, comunicaciones de sistemas abiertos y seguridad";
 choices[74][2] = "Serie E: Sistemas y medios de transmisi&oacute;n, sistemas y redes digitales";
 choices[74][3] = "Serie I: Red digital de servicios integrados";
 answers[74] = choices[74][2];
 units[74] = "42";
 comments[74] = "Id Pregunta: 10361. Serie E: Explotaci&oacute;n general de la red, servicio telef&oacute;nico, explotaci&oacute;n del servicio y factores humanos";


//  Id pregunta: 10463 AÃ±o de creación de pregunta: 2014-01-01
 questions[75]= "76)  Respecto a REST, indique la respuesta correcta:";
 choices[75]= new Array();
 choices[75][0] = "Los m&eacute;todos HEAD, POST, PUT y DELETE definen la interfaz de los recursos.";
 choices[75][1] = "Al igual que SOAP est&aacute; basado en verbos u operaciones para definir la funcionalidad de las aplicaciones.";
 choices[75][2] = "Los servicios web tipo REST permiten el uso de WS-Security.";
 choices[75][3] = "Permiten mayor escalabilidad al no requerir mantenimiento del estado.";
 answers[75] = choices[75][3];
 units[75] = "51";
 comments[75] = "Id Pregunta: 10463. ";


//  Id pregunta: 10528 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  Se&ntilde;ale la respuesta correcta relacionada con las arquitecturas RISC y CISC de procesadores";
 choices[76]= new Array();
 choices[76][0] = "Las fases t&iacute;picas de ejecuci&oacute;n de una instrucci&oacute;n en un procesador RISC son, en orden: carga de la instrucci&oacute;n, decodificaci&oacute;n de la instrucci&oacute;n, ejecuci&oacute;n de la instrucci&oacute;n, acceso a memoria, escritura a registro";
 choices[76][1] = "CISC es un modelo m&aacute;s moderno que RISC y redujo el conjunto de instrucciones y sus modos de direccionamiento";
 choices[76][2] = "RISC es un modelo m&aacute;s moderno que CISC y redujo el conjunto de instrucciones y sus modos de direccionamiento";
 choices[76][3] = "Las fases t&iacute;picas de ejecuci&oacute;n de una instrucci&oacute;n en un procesador RISC son, en orden: carga de la instrucci&oacute;n, decodificaci&oacute;n de la instrucci&oacute;n, acceso a memoria, ejecuci&oacute;n de la instrucci&oacute;n, escritura a registro";
 answers[76] = choices[76][0];
 units[76] = "45";
 comments[76] = "Id Pregunta: 10528. NULL";


//  Id pregunta: 10559 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  Cual de los siguientes no es un principio de COBIT5";
 choices[77]= new Array();
 choices[77][0] = "Satisfacer las necesidades de las partes interesadas";
 choices[77][1] = "Unificar el Gobierno con la administraci&oacute;n";
 choices[77][2] = "Habilitar un enfoque hol&iacute;stico";
 choices[77][3] = "Aplicar un solo marco integrado";
 answers[77] = choices[77][1];
 units[77] = "31, 32, 33";
 comments[77] = "Id Pregunta: 10559. Uno de los principios es Separar el Gobierno de la Administraci&oacute;n";


//  Id pregunta: 10652 AÃ±o de creación de pregunta: 2015-01-01
 questions[78]= "79)  Indique cu&aacute;l de &eacute;stos no es un m&eacute;todo EAP:";
 choices[78]= new Array();
 choices[78][0] = "PEAP";
 choices[78][1] = "EAP-PSK";
 choices[78][2] = "EAP-PAP";
 choices[78][3] = "EAP-TTLS";
 answers[78] = choices[78][2];
 units[78] = "111";
 comments[78] = "Id Pregunta: 10652. ";


//  Id pregunta: 10694 AÃ±o de creación de pregunta: 2015-01-01
 questions[79]= "80)  Seg&uacute;n la Ley 39/2015 son interesados:";
 choices[79]= new Array();
 choices[79][0] = "Quienes lo promuevan como titulares de derechos o intereses leg&iacute;timos individuales o colectivos.";
 choices[79][1] = "Los que, sin haber iniciado el procedimiento, tengan derechos que puedan resultar afectados por la decisi&oacute;n que en el mismo se adopte.";
 choices[79][2] = "Aquellos cuyos intereses leg&iacute;timos, individuales o colectivos, puedan resultar afectados por la resoluci&oacute;n y se personen en el procedimiento en tanto no haya reca&iacute;do resoluci&oacute;n definitiva.";
 choices[79][3] = "Todas las anteriores.";
 answers[79] = choices[79][3];
 units[79] = "30";
 comments[79] = "Id Pregunta: 10694. ";


//  Id pregunta: 10826 AÃ±o de creación de pregunta: 2015-01-01
 questions[80]= "81)  Se&ntilde;ale en qu&eacute; nivel de aislamiento, definido en ANSI/ISO SQL, puede ocurrir el problema de lecturas sucias en un sistema gestor de bases de datos relacional (SGDBR):";
 choices[80]= new Array();
 choices[80][0] = "Serializable.";
 choices[80][1] = "Repeatable Read (lecturas repetibles).";
 choices[80][2] = "Read Committed (lecturas comprometidas).";
 choices[80][3] = "Read Uncommitted (lecturas no comprometidas).";
 answers[80] = choices[80][3];
 units[80] = "57, 58";
 comments[80] = "Id Pregunta: 10826. Examen GSI 2014";


//  Id pregunta: 10849 AÃ±o de creación de pregunta: 2015-01-01
 questions[81]= "82)  Al conjunto de documentos que definen patrones de dise&ntilde;o y pr&aacute;cticas recomendadas en la creaci&oacute;n de aplicaciones utilizando Java Enterprise Edition se denomina:";
 choices[81]= new Array();
 choices[81][0] = "Java BluePrints.";
 choices[81][1] = "Java Specification Request.";
 choices[81][2] = "Java Community Process.";
 choices[81][3] = "Java Pattern Spec.";
 answers[81] = choices[81][0];
 units[81] = "60, 116";
 comments[81] = "Id Pregunta: 10849. Examen GSI 2014";


//  Id pregunta: 10889 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  Se&ntilde;ale cu&aacute;l de las siguientes direcciones IP puede ser asignada a un host en la siguiente subred 132.26.41.90/26:";
 choices[82]= new Array();
 choices[82][0] = "132.26.41.128";
 choices[82][1] = "132.26.41.127";
 choices[82][2] = "132.26.41.124";
 choices[82][3] = "132.26.41.55";
 answers[82] = choices[82][2];
 units[82] = "100";
 comments[82] = "Id Pregunta: 10889. Examen GSI 2014";


//  Id pregunta: 10894 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  En el protocolo RIP Version 2 (Routing Information Protocol), cuyo algoritmo est&aacute; basado en vector distancia, el l&iacute;mite m&aacute;ximo de saltos a partir del cual se considera una ruta como inalcanzable es:";
 choices[83]= new Array();
 choices[83][0] = "15 saltos.";
 choices[83][1] = "9 saltos.";
 choices[83][2] = "16 saltos.";
 choices[83][3] = "7 saltos.";
 answers[83] = choices[83][0];
 units[83] = "102";
 comments[83] = "Id Pregunta: 10894. Examen GSI 2014";


//  Id pregunta: 10909 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  Uno de los problemas en cuanto a la calidad del servicio (QoS) de una red VoIP es la latencia, se&ntilde;ale su definici&oacute;n correcta:";
 choices[84]= new Array();
 choices[84][0] = "Variaci&oacute;n en el tiempo de llegada de los paquetes, causada por congesti&oacute;n de red, p&eacute;rdida de sincronizaci&oacute;n o por las diferentes rutas seguidas.";
 choices[84][1] = "Es una reflexi&oacute;n retardada de la se&ntilde;al ac&uacute;stica original.";
 choices[84][2] = "El tiempo que tarda un paquete en llegar desde la fuente al destino.";
 choices[84][3] = "P&eacute;rdida que se produce al usar protocolos no orientados a conexi&oacute;n que no reenv&iacute;an paquetes perdidos. Adem&aacute;s tambi&eacute;n se produce por descartes de paquetes que no llegan a tiempo al receptor.";
 answers[84] = choices[84][2];
 units[84] = "108, 109";
 comments[84] = "Id Pregunta: 10909. Examen GSI 2014";


//  Id pregunta: 10926 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  En el &aacute;mbito de los Contratos del Sector P&uacute;blico y, en particular, en los contratos de servicios &iquest;cu&aacute;l es la cuant&iacute;a m&aacute;xima, IVA excluido, del presupuesto de licitaci&oacute;n de los contratos dirigidos al desarrollo de la Administraci&oacute;n Electr&oacute;nica que se declaran de contrataci&oacute;n centralizada?";
 choices[85]= new Array();
 choices[85][0] = "862.000 euros.";
 choices[85][1] = "300.000 euros.";
 choices[85][2] = "500.000 euros.";
 choices[85][3] = "1.152.000 euros.";
 answers[85] = choices[85][0];
 units[85] = "41";
 comments[85] = "Id Pregunta: 10926. TIC A1 AGE 2014";


//  Id pregunta: 10962 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  Respecto al formato de factura electr&oacute;nica Facturae 3.2, se&ntilde;ale la respuesta correcta:";
 choices[86]= new Array();
 choices[86][0] = "Es de tipo PDF-A, para facilitar su impresi&oacute;n.";
 choices[86][1] = "Es un formato certificado con la Norma SICRES 3.0, para la compatibilidad e interconexi&oacute;n de los Registros Contables de Facturas.";
 choices[86][2] = "Es un formato no estructurado compuesto por dos bloques obligatorios y cuatro opcionales.";
 choices[86][3] = "Incluye firma Electr&oacute;nica en XML Advanced Electronic Signature (XADES)";
 answers[86] = choices[86][3];
 units[86] = "70";
 comments[86] = "Id Pregunta: 10962. TIC A1 AGE 2014";


//  Id pregunta: 11042 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  &iquest;Cu&aacute;l de las siguientes afirmaciones acerca de los compiladores es correcta?";
 choices[87]= new Array();
 choices[87][0] = "Los compiladores AOT (Ahead-Of-Time) compilan a c&oacute;digo m&aacute;quina nativo antes de la ejecuci&oacute;n de la aplicaci&oacute;n";
 choices[87][1] = "Los compiladores JIT (Just in Time) compilan durante la ejecuci&oacute;n";
 choices[87][2] = "Los 2 respuestas anteriores son correctas";
 choices[87][3] = "Ninguna de las anteriores es correcta";
 answers[87] = choices[87][2];
 units[87] = "60";
 comments[87] = "Id Pregunta: 11042. ";


//  Id pregunta: 11077 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  &iquest;Qu&eacute; representa el Modelo de Servicio en V?";
 choices[88]= new Array();
 choices[88][0] = "Una estrategia para la realizaci&oacute;n con &eacute;xito de todos los proyectos de gesti&oacute;n de servicios";
 choices[88][1] = "La ruta de acceso para la Entrega y Soporte del Servicio para una eficiente y eficaz utilizaci&oacute;n de los recursos";
 choices[88][2] = "Los niveles de pruebas requeridos para la entrega del servicio";
 choices[88][3] = "La perspectiva empresarial que tienen los Clientes y Usuarios de los servicios";
 answers[88] = choices[88][2];
 units[88] = "98";
 comments[88] = "Id Pregunta: 11077. ";


//  Id pregunta: 11196 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  &iquest;Cu&aacute;l de las siguientes iniciativas de la Estrategia Europa 2020 hace referencia al objetivo de crecimiento integrador?";
 choices[89]= new Array();
 choices[89][0] = "Agenda de nuevas cualificaciones y empleo";
 choices[89][1] = "Agenda Digital para Europa";
 choices[89][2] = "Todas las anteriores";
 choices[89][3] = "Ninguna de las Anteriores";
 answers[89] = choices[89][0];
 units[89] = "30";
 comments[89] = "Id Pregunta: 11196. ";


//  Id pregunta: 11302 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  Se&ntilde;ale la norma que no est&aacute; asociada correctamente a su contenido";
 choices[90]= new Array();
 choices[90][0] = "ISO 15408 - Common criteria";
 choices[90][1] = "RFC 2527 - DPC (Declaraci&oacute;n de Pr&aacute;cticas de Certificaci&oacute;n)";
 choices[90][2] = "CWA 14890 - Protocolo de autenticaci&oacute;n mutua, usado para el certificado de componente del DNI";
 choices[90][3] = "RFC 5246 - IPSEC";
 answers[90] = choices[90][3];
 units[90] = "33,74,111";
 comments[90] = "Id Pregunta: 11302. El RFC 5246 describe TLS. IPSEC es descrito en RFC 4305";


//  Id pregunta: 11304 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Seg&uacute;n se define en M&eacute;trica, la t&eacute;cnica de reglas de transformaci&oacute;n, permite transformar cada elemento del modelo de clases en un elemento del modelo f&iacute;sico. Se&ntilde;ale de los indicados a continuaci&oacute;n cu&aacute;l no es una regla de transformaci&oacute;n contemplada";
 choices[91]= new Array();
 choices[91][0] = "Transformaci&oacute;n de clases";
 choices[91][1] = "Transformaci&oacute;n de atributos de clases";
 choices[91][2] = "Transformaci&oacute;n de relaciones inclusivas";
 choices[91][3] = "Transformaci&oacute;n de la herencia";
 answers[91] = choices[91][2];
 units[91] = "86";
 comments[91] = "Id Pregunta: 11304. No existe. S&iacute; existe la transformaci&oacute;n de relaciones exclusivas. ";


//  Id pregunta: 11339 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Indique la falsa en relaci&oacute;n con la familia de normas ISO 9000:2000";
 choices[92]= new Array();
 choices[92][0] = "ISO 19011 no pertenece a esta familia de normas";
 choices[92][1] = "ISO 9004 establece la gu&iacute;a para la mejora continua";
 choices[92][2] = "ISO 9001 consta de ocho secciones";
 choices[92][3] = "ISO 9000 habla de fundamentos y vocabulario";
 answers[92] = choices[92][0];
 units[92] = "92";
 comments[92] = "Id Pregunta: 11339. ";


//  Id pregunta: 11349 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Cu&aacute;les son los casos en los que no es necesario el derecho de informaci&oacute;n en la recogida de datos";
 choices[93]= new Array();
 choices[93][0] = "Datos con fines hist&oacute;ricos, estad&iacute;sticos o cient&iacute;ficos.";
 choices[93][1] = "No existen excepciones al derecho de informaci&oacute;n de recogida de datos.";
 choices[93][2] = "La Administraci&oacute;n en el desempe&ntilde;o de sus funciones y las fuentes accesibles al p&uacute;blico.";
 choices[93][3] = "Datos sobre Sindicaci&oacute;n, Ideolog&iacute;a y Religi&oacute;n.";
 answers[93] = choices[93][0];
 units[93] = "29";
 comments[93] = "Id Pregunta: 11349. ";


//  Id pregunta: 11385 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Seg&uacute;n ITIL v3, &iquest;qu&eacute; proceso asistir&iacute;a en la identificaci&oacute;n y resoluci&oacute;n de incidencias y problemas, asociados con el rendimiento de un servicio o componente?";
 choices[94]= new Array();
 choices[94][0] = "Gesti&oacute;n de la capacidad";
 choices[94][1] = "Gesti&oacute;n de suministradores";
 choices[94][2] = "Gesti&oacute;n de la tecnolog&iacute;a";
 choices[94][3] = "Gesti&oacute;n de cambios";
 answers[94] = choices[94][0];
 units[94] = "98";
 comments[94] = "Id Pregunta: 11385. ";


//  Id pregunta: 11418 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Seg&uacute;n la Ley 9/2014, las decisiones de otorgamiento de uso de numeraci&oacute;n, direccionamiento y denominaci&oacute;n se adoptar&aacute;n y comunicar&aacute;n en un plazo m&aacute;ximo de:";
 choices[95]= new Array();
 choices[95][0] = "15 d&iacute;as.";
 choices[95][1] = "10 d&iacute;as.";
 choices[95][2] = "3 semanas cuando se apliquen procedimientos de selecci&oacute;n comparativa.";
 choices[95][3] = "6 semanas cuando se apliquen procedimientos de selecci&oacute;n comparativa.";
 answers[95] = choices[95][3];
 units[95] = "110";
 comments[95] = "Id Pregunta: 11418. ";


//  Id pregunta: 11557 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Seg&uacute;n la metodolog&iacute;a &aacute;gil SCRUM, el documento de alto nivel con todos los requerimientos del proyectos priorizados seg&uacute;n retorno de inversi&oacute;n (ROI), se denomina:";
 choices[96]= new Array();
 choices[96][0] = "Sprint Backlog";
 choices[96][1] = "Sprint Chart";
 choices[96][2] = "Product Backlog";
 choices[96][3] = "Burn Down Chart";
 answers[96] = choices[96][2];
 units[96] = "79";
 comments[96] = "Id Pregunta: 11557. NULL";


//  Id pregunta: 11578 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Cu&aacute;l es la velocidad, el ancho de banda y la banda de frecuencias en las que operan las especificaciones 80211.ac?";
 choices[97]= new Array();
 choices[97][0] = "11 Mbps, 22 Mhz, 2.4 Ghz";
 choices[97][1] = "54 Mbps, 20 Mhz, 2.4 Ghz";
 choices[97][2] = "160 Mbps, 80Mhz o 60 Mhz, 5Ghz";
 choices[97][3] = "108Mbps, 40Mhz, 2.4Ghz y 5Ghz";
 answers[97] = choices[97][2];
 units[97] = "107";
 comments[97] = "Id Pregunta: 11578. NULL";


//  Id pregunta: 11624 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Se&ntilde;ale la respuesta incorrecta con respecto al procesado de documentos XML:";
 choices[98]= new Array();
 choices[98][0] = "Los parsers DOM consumen mucha memoria.";
 choices[98][1] = "Los parsers DOM facilitan el acceso a toda la informaci&oacute;n del documento XML.";
 choices[98][2] = "Los parsers SAX permiten la modificaci&oacute;n de datos en memoria.";
 choices[98][3] = "Para los parsers SAX el tama&ntilde;o del documento XML es irrelevante.";
 answers[98] = choices[98][2];
 units[98] = "69";
 comments[98] = "Id Pregunta: 11624. ";


//  Id pregunta: 11686 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Al conectar un PC a un switch se debe usar;";
 choices[99]= new Array();
 choices[99][0] = "Straight-through cable";
 choices[99][1] = "Consola";
 choices[99][2] = "Crossover cable";
 choices[99][3] = "RJ 11";
 answers[99] = choices[99][0];
 units[99] = "99";
 comments[99] = "Id Pregunta: 11686. NULL";


