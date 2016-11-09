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

//  Id pregunta: 40 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de las siguientes respuestas referidas a las auditor&iacute;as de control de calidad es cierta?:";
 choices[0]= new Array();
 choices[0][0] = "Es un procedimiento habitual de control de calidad del software";
 choices[0][1] = "Es un procedimiento extraordinario al que se pueden someter los proyectos que tengan especial magnitud";
 choices[0][2] = "Su objetivo es proceder al refinamiento sucesivo en la definici&oacute;n de las especificaciones finales del proyecto";
 choices[0][3] = "Ninguna de las respuestas anteriores es cierta";
 answers[0] = choices[0][1];
 units[0] = "31,32,33";
 comments[0] = "Id Pregunta: 40. ";


//  Id pregunta: 86 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Qu&eacute; tipos de miembros forman X/OPEN (actual Open Group)?:";
 choices[1]= new Array();
 choices[1][0] = "Distintas compa&ntilde;&iacute;as que desarrollan sistemas operativos y hardware";
 choices[1][1] = "Organizaciones de estandarizaci&oacute;n";
 choices[1][2] = "Grupos de usuarios y diversos grupos de inter&eacute;s en tecnolog&iacute;as de la informaci&oacute;n";
 choices[1][3] = "Todos los anteriores";
 answers[1] = choices[1][3];
 units[1] = "42";
 comments[1] = "Id Pregunta: 86. ";


//  Id pregunta: 270 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  Indicar la respuesta verdadera respecto al concepto de un sistema de informaci&oacute;n:";
 choices[2]= new Array();
 choices[2][0] = "Es el conjunto de procedimientos, manuales y automatizados dirigidos a la recogida, elaboraci&oacute;n, evaluaci&oacute;n, almacenamiento, recuperaci&oacute;n y distribuci&oacute;n de informaciones dentro de una organizaci&oacute;n";
 choices[2][1] = "Es el conjunto de procedimientos, manuales y automatizados dirigidos a la recogida, elaboraci&oacute;n, almacenamiento, recuperaci&oacute;n, condensaci&oacute;n y distribuci&oacute;n de informaciones dentro de una organizaci&oacute;n";
 choices[2][2] = "Es el conjunto de procedimientos, manuales y automatizados y de funciones dirigidas a la recogida, elaboraci&oacute;n, almacenamiento, recuperaci&oacute;n  y distribuci&oacute;n de informaciones dentro de una organizaci&oacute;n";
 choices[2][3] = "Es el conjunto de procedimientos, manuales y automatizados y de funciones dirigidas a la recogida, elaboraci&oacute;n, evaluaci&oacute;n, almacenamiento, recuperaci&oacute;n, condensaci&oacute;n y distribuci&oacute;n de informaciones dentro de una organizaci&oacute;n";
 answers[2] = choices[2][3];
 units[2] = "21";
 comments[2] = "Id Pregunta: 270. ";


//  Id pregunta: 308 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  La gu&iacute;a de portabilidad de X/OPEN actualmente en vigor es:";
 choices[3]= new Array();
 choices[3][0] = "XGP3";
 choices[3][1] = "XGP4";
 choices[3][2] = "XGP5";
 choices[3][3] = "Todas las respuestas anteriores son correctas";
 answers[3] = choices[3][1];
 units[3] = "40";
 comments[3] = "Id Pregunta: 308. XPG";


//  Id pregunta: 354 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  Las actuales teor&iacute;as del conflicto en las organizaciones parten de:";
 choices[4]= new Array();
 choices[4][0] = "Peter Drucker";
 choices[4][1] = "Mary Parker Follet";
 choices[4][2] = "John Simpson";
 choices[4][3] = "Adam Smith";
 answers[4] = choices[4][1];
 units[4] = "22";
 comments[4] = "Id Pregunta: 354. ";


//  Id pregunta: 480 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;De qu&eacute; depende el canon de compensacion equitativa por copia privada establecido con la orden PRE/1743/2008 de 18 de junio?";
 choices[5]= new Array();
 choices[5][0] = "Del tipo de equipo (anal&oacute;gico o digital)";
 choices[5][1] = "Del destino del soporte";
 choices[5][2] = "De la categoria del equipo";
 choices[5][3] = "Todas son ciertas";
 answers[5] = choices[5][3];
 units[5] = "36,37";
 comments[5] = "Id Pregunta: 480. ";


//  Id pregunta: 524 AÃ±o de creación de pregunta: 2004-01-01
 questions[6]= "7)  La implantaci&oacute;n de un sistema de single sign-on (SSO) implica que el riesgo de un acceso no autorizado:";
 choices[6]= new Array();
 choices[6][0] = "Tendr&aacute; un mayor impacto";
 choices[6][1] = "Tendr&aacute; un menor impacto";
 choices[6][2] = "Tendr&aacute; una probabilidad mayor";
 choices[6][3] = "Tendr&aacute; una probabilidad menor";
 answers[6] = choices[6][0];
 units[6] = "31, 32, 33";
 comments[6] = "Id Pregunta: 524. Auditor&iacute;a Inform&aacute;tica";


//  Id pregunta: 578 AÃ±o de creación de pregunta: 2006-01-01
 questions[7]= "8)  La empresa Du Pont inici&oacute; un estudio sobre t&eacute;cnicas de aplicaci&oacute;n de ordenadores a la planificaci&oacute;n y programaci&oacute;n de proyectos, que recibi&oacute; el nombre de:";
 choices[7]= new Array();
 choices[7][0] = "CPM (Critical Path Method).";
 choices[7][1] = "PERT.";
 choices[7][2] = "Diagrama de Gant.";
 choices[7][3] = "PROPS.";
 answers[7] = choices[7][0];
 units[7] = "27";
 comments[7] = "Id Pregunta: 578. ";


//  Id pregunta: 593 AÃ±o de creación de pregunta: 2006-01-01
 questions[8]= "9)  La duraci&oacute;n total de un proyecto es:";
 choices[8]= new Array();
 choices[8][0] = "La del camino del gr&aacute;fico de Pert que m&aacute;s tareas realiza";
 choices[8][1] = "La de la tarea cr&iacute;tica";
 choices[8][2] = "La suma de la duraci&oacute;n de todas las tareas de un proyecto";
 choices[8][3] = "la del camino critico en el gr&aacute;fico de Pert";
 answers[8] = choices[8][3];
 units[8] = "28";
 comments[8] = "Id Pregunta: 593. ";


//  Id pregunta: 644 AÃ±o de creación de pregunta: 2006-01-01
 questions[9]= "10)  Cu&aacute;l de las siguientes afirmaciones sobre la Decisi&oacute;n 87/95/CEE es incorrecta:";
 choices[9]= new Array();
 choices[9][0] = "La Decisi&oacute;n 87/95/CEE obliga a la utilizaci&oacute;n de normas europeas e internacionales en las actividades de adquisici&oacute;n de bienes y servicios relativos a la tecnolog&iacute;a de la Informaci&oacute;n, realizadas por el sector p&uacute;blico.";
 choices[9][1] = "La Decisi&oacute;n 87/95/CEE fue transcrita a la legislaci&oacute;n espa&ntilde;ola, tras lo cual entr&oacute; en vigor en Espa&ntilde;a el 8 de febrero de 1988.";
 choices[9][2] = "La Decisi&oacute;n se refiere a normas relativas a redes, a OSI, a juegos de caracteres, a la representaci&oacute;n de la informaci&oacute;n, interoperabilidad, etc.";
 choices[9][3] = "Seg&uacute;n la Decisi&oacute;n las normas europeas y las normas previas europeas (borradores en fase experimental), del CEN/CENELEC y del CEPT, deben tener el mismo nivel que las normas ISO aceptadas por el pa&iacute;s al que pertenece el poder adjudicador";
 answers[9] = choices[9][1];
 units[9] = "40";
 comments[9] = "Id Pregunta: 644. ";


//  Id pregunta: 939 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Qu&eacute; se entiende por autoridad de certificaci&oacute;n?:";
 choices[10]= new Array();
 choices[10][0] = "Un juez";
 choices[10][1] = "Una compa&ntilde;&iacute;a que certifica la seguridad de sus sistemas En la actualidad s&oacute;lo puede considerarse a Microsoft como tal,";
 choices[10][2] = "Son &oacute;rganos administrativos dependientes del Consejo Superior de Inform&aacute;tica que dictan las normas de certificaci&oacute;n digital, de acuerdo a las Directivas de la Uni&oacute;n Europea";
 choices[10][3] = "Son entidades que expiden certificados digitales de manera que garantizan la correspondencia entre la identidad de un usuario y su par de claves";
 answers[10] = choices[10][3];
 units[10] = "74";
 comments[10] = "Id Pregunta: 939. NULL";


//  Id pregunta: 1003 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  El CLR de Microsoft.net es:";
 choices[11]= new Array();
 choices[11][0] = "Una librer&iacute;a para acceso a base de datos heterogeneas, empleando ADO.NET";
 choices[11][1] = "El encargado de compilar a un CIL (Common Intermediate Language)";
 choices[11][2] = "Una nueva estrategia de Microsoft, que defiende &quot;cero fallos&quot; en sus pr&oacute;ximos desarrollos software";
 choices[11][3] = "El mecanismo que se utiliza para enviar las peticiones SOAP a los servidores de aplicaciones remotos";
 answers[11] = choices[11][1];
 units[11] = "59";
 comments[11] = "Id Pregunta: 1003. ";


//  Id pregunta: 1306 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Peque&ntilde;as aplicaciones que pueden formar parte de la p&aacute;gina Web, y que pueden viajar a trav&eacute;s de Intenet para ejecutarse en el ordenador que las reciba se denominan:";
 choices[12]= new Array();
 choices[12][0] = "Controles Java";
 choices[12][1] = "Applets";
 choices[12][2] = "Servlets";
 choices[12][3] = "Aplicaciones CGI";
 answers[12] = choices[12][1];
 units[12] = "60";
 comments[12] = "Id Pregunta: 1306. NULL";


//  Id pregunta: 1673 AÃ±o de creación de pregunta: 2004-01-01
 questions[13]= "14)  &iquest;Qu&eacute; se conoce como grado de una relaci&oacute;n?";
 choices[13]= new Array();
 choices[13][0] = "Un conjunto de valores";
 choices[13][1] = "El n&uacute;mero de tuplas";
 choices[13][2] = "El n&uacute;mero de atributos";
 choices[13][3] = "El n&uacute;mero de vistas";
 answers[13] = choices[13][2];
 units[13] = "58";
 comments[13] = "Id Pregunta: 1673. ";


//  Id pregunta: 1847 AÃ±o de creación de pregunta: 2006-01-01
 questions[14]= "15)  Se&ntilde;ale la falsa:";
 choices[14]= new Array();
 choices[14][0] = "Bonita es un motor de workflow de sw libre que implementa las especificaciones de la WfMC.";
 choices[14][1] = "Evolution es un cliente para correo electr&oacute;nico y workgroup para sistemas Linux.";
 choices[14][2] = "JoNAS es un servidor de aplicaciones de SW libre";
 choices[14][3] = "Todas son incorrectas";
 answers[14] = choices[14][3];
 units[14] = "71";
 comments[14] = "Id Pregunta: 1847. ";


//  Id pregunta: 1860 AÃ±o de creación de pregunta: 2006-01-01
 questions[15]= "16)  Se&ntilde;ale la falsa:";
 choices[15]= new Array();
 choices[15][0] = "XML Signature asegura la integridad de partes de documentos XML transportados";
 choices[15][1] = "XML Signature puede aplicarse a cualquier contenido digital (objeto de datos), incluyendo XML";
 choices[15][2] = "XML Key Management es un protocolo para distribuir y registrar claves p&uacute;blicas. Lo que hace es ocultar la parte compleja que surge con PKI. Est&aacute; compuesto de: el registro de la clave p&uacute;blica (X-KRSS) y la informaci&oacute;n de clave p&uacute;blica (X-KISS).";
 choices[15][3] = "Todas las anteriores son falsas";
 answers[15] = choices[15][3];
 units[15] = "74";
 comments[15] = "Id Pregunta: 1860. NULL";


//  Id pregunta: 1944 AÃ±o de creación de pregunta: 2006-01-01
 questions[16]= "17)  Cuando se habla de SAX en el &aacute;mbito del lenguaje XML, se hace referencia a:";
 choices[16]= new Array();
 choices[16][0] = "Una API que define un modelo basado en eventos, y que trabaja invocando las respuestas de las interfaces a medida que van apareciendo estos eventos durante el proceso de an&aacute;lisis del documento";
 choices[16][1] = "Una API que proporciona una representaci&oacute;n de los documentos XML en forma de &aacute;rbol, permitiendo el recorrido y manipulaci&oacute;n de los datos";
 choices[16][2] = "Un lenguaje para establecer restricciones en los documentos XML";
 choices[16][3] = "Un mecanismo para invocaci&oacute;n remota de procedimientos (m&eacute;todos) utilizando XML como forma de comunicaci&oacute;n";
 answers[16] = choices[16][0];
 units[16] = "69";
 comments[16] = "Id Pregunta: 1944. NULL";


//  Id pregunta: 2257 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Dentro del Plan General de Calidad para el desarrollo de aplicaciones inform&aacute;ticas se distinguen dos bloques tem&aacute;ticos, con un contenido diferente pero complementario, a saber:";
 choices[17]= new Array();
 choices[17][0] = "Bloque metodol&oacute;gico y Bloque procedimental";
 choices[17][1] = "Bloque metodol&oacute;gico y Bloque instrumental";
 choices[17][2] = "Bloque l&oacute;gico y Bloque procedimental";
 choices[17][3] = "Bloque l&oacute;gico y Bloque instrumental";
 answers[17] = choices[17][1];
 units[17] = "92";
 comments[17] = "Id Pregunta: 2257. NULL";


//  Id pregunta: 2730 AÃ±o de creación de pregunta: 2006-01-01
 questions[18]= "19)  &iquest;Cu&aacute;l de los siguientes no es un objetivo del Plan de Sistemas de Informaci&oacute;n en una organizaci&oacute;n?";
 choices[18]= new Array();
 choices[18][0] = "Establecer pol&iacute;ticas y objetivos coherentes";
 choices[18][1] = "Definir los requerimientos t&eacute;cnicos necesarios y suficientes";
 choices[18][2] = "Seleccionar los suministradores de las distintos elementos";
 choices[18][3] = "Conocer con cierta aproximaci&oacute;n y de forma anticipada las inversiones, los costes de funcionamiento y los resultados esperados";
 answers[18] = choices[18][2];
 units[18] = "77";
 comments[18] = "Id Pregunta: 2730. ";


//  Id pregunta: 2847 AÃ±o de creación de pregunta: 2006-01-01
 questions[19]= "20)  &iquest;El m&eacute;todo de interpolaci&oacute;n por el vecino m&aacute;s pr&oacute;ximo se emplea en?";
 choices[19]= new Array();
 choices[19][0] = "la correcci&oacute;n geom&eacute;trica";
 choices[19][1] = "la correcci&oacute;n radiom&eacute;trica";
 choices[19][2] = "el realce geom&eacute;trico";
 choices[19][3] = "el realce radiom&eacute;trico";
 answers[19] = choices[19][0];
 units[19] = "93";
 comments[19] = "Id Pregunta: 2847. NULL";


//  Id pregunta: 2987 AÃ±o de creación de pregunta: 2004-01-01
 questions[20]= "21)  Un spanning tree es";
 choices[20]= new Array();
 choices[20][0] = "Un &aacute;rbol de recubrimiento de una red";
 choices[20][1] = "Un arbol de decisi&oacute;n para algoritmos de inteligencia artificial como id3";
 choices[20][2] = "Un &aacute;rbol de resoluci&oacute;n en l&oacute;gica";
 choices[20][3] = "Un &aacute;rbol de perif&eacute;ricos de un puerto USB";
 answers[20] = choices[20][0];
 units[20] = "101, 102";
 comments[20] = "Id Pregunta: 2987. ";


//  Id pregunta: 3263 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  &iquest;D&oacute;nde se define el punto de referencia R en RDSI?:";
 choices[21]= new Array();
 choices[21][0] = "Entre el ET2 (Equipo terminal de tipo 2) y el adaptador de terminales";
 choices[21][1] = "Entre el ET1 (Equipo terminal de tipo 1) y el adaptador de terminales";
 choices[21][2] = "Entre el TR1 y el TR2";
 choices[21][3] = "Entre el equipo de usaurio y el TR2 o TR1 cuando no hay TR2";
 answers[21] = choices[21][0];
 units[21] = "103";
 comments[21] = "Id Pregunta: 3263. ";


//  Id pregunta: 3625 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  La normativa referente a la Red Digital de Servicios Integrados para el uso por el usuario de los canales de 64 kbps, &iquest;a qu&eacute; nivel del modelo de referencia OSI corresponder&iacute;a?:";
 choices[22]= new Array();
 choices[22][0] = "Al nivel 8 : Administraci&oacute;n";
 choices[22][1] = "Al nivel 1 : F&iacute;sico";
 choices[22][2] = "Al nivel 3 : Red";
 choices[22][3] = "Al nivel 5 : Enlace";
 answers[22] = choices[22][1];
 units[22] = "102,104,109";
 comments[22] = "Id Pregunta: 3625. ";


//  Id pregunta: 3816 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Se&ntilde;ale cu&aacute;l de los siguientes protocolos realiza asignaci&oacute;n din&aacute;mica de direcciones IP:";
 choices[23]= new Array();
 choices[23][0] = "TCP";
 choices[23][1] = "DNS";
 choices[23][2] = "WINS";
 choices[23][3] = "DHCP";
 answers[23] = choices[23][3];
 units[23] = "113";
 comments[23] = "Id Pregunta: 3816. ";


//  Id pregunta: 3948 AÃ±o de creación de pregunta: 2003-01-01
 questions[24]= "25)  En la clasificaci&oacute;n de las redes de comunicaci&oacute;n por su extensi&oacute;n no se incluye:";
 choices[24]= new Array();
 choices[24][0] = "MAN (Metropolitan Area Network";
 choices[24][1] = "LAN (Local Area Network)";
 choices[24][2] = "SAN (State Areal Network)";
 choices[24][3] = "WAN (Wide Area Network)";
 answers[24] = choices[24][2];
 units[24] = "113,101";
 comments[24] = "Id Pregunta: 3948. ";


//  Id pregunta: 4417 AÃ±o de creación de pregunta: 2007-01-01
 questions[25]= "26)  &iquest;Cu&aacute;l de las siguientes no es una desventaja del cable coaxial frente a otros medios de transmisi&oacute;n";
 choices[25]= new Array();
 choices[25][0] = "Diafon&iacute;a.";
 choices[25][1] = "Ruido t&eacute;rmico.";
 choices[25][2] = "Ruido de intermodulaci&oacute;n.";
 choices[25][3] = "Atenuaci&oacute;n";
 answers[25] = choices[25][0];
 units[25] = "99";
 comments[25] = "Id Pregunta: 4417. ";


//  Id pregunta: 4484 AÃ±o de creación de pregunta: 2007-01-01
 questions[26]= "27)  El protocolo SSL (Secure Sockets Layer):";
 choices[26]= new Array();
 choices[26][0] = "Es una capa de seguridad que opera siempre sobre el protocolo UDP.";
 choices[26][1] = "No garantiza la integridad de Ia informaci&oacute;n intercambiada entre el cliente y el servidor.";
 choices[26][2] = "Proporciona conexiones seguras solo en redes privadas y siempre que el cliente y el servidor pertenezcan a la misma subred IP.";
 choices[26][3] = "Proporciona conexiones seguras sobre una red insegura garantizando, entre otros aspectos, integridad de datos transmitidos, privacidad de Ia conexi&oacute;n y autentificaci&oacute;n del cliente y del servidor.";
 answers[26] = choices[26][3];
 units[26] = "72";
 comments[26] = "Id Pregunta: 4484. ";


//  Id pregunta: 4573 AÃ±o de creación de pregunta: 2007-01-01
 questions[27]= "28)  Indica cual de las siguientes expresiones NO es correcta en un entorno de e-Learning:";
 choices[27]= new Array();
 choices[27][0] = "el LMS se encarga de gestionar los usuarios, los cursos y as herramientas de comunicaci&oacute;n.";
 choices[27][1] = "dos componentes fundamentales en este tipo de ense&ntilde;anza son el LMS y el courseware.";
 choices[27][2] = "se pueden establecer comunicaciones tanto s&iacute;ncronas como as&iacute;ncronas.";
 choices[27][3] = "para compatibilizar LMS y courseware de distintos fabricantes se utilizan los est&aacute;ndares ADL SCORM y UDDI.";
 answers[27] = choices[27][3];
 units[27] = "66";
 comments[27] = "Id Pregunta: 4573. ";


//  Id pregunta: 4703 AÃ±o de creación de pregunta: 2007-01-01
 questions[28]= "29)  Un programa escrito Java puede ejecutarse en cualquier plataforma porque &hellip;";
 choices[28]= new Array();
 choices[28][0] = "el lenguaje Java se deriva de C++.";
 choices[28][1] = "la m&aacute;quina virtual de Java (JVM) interpreta el programa para cada sistema operativo";
 choices[28][2] = "el compilador es id&eacute;ntico al de C++.";
 choices[28][3] = "porque la APIs de Java han sido dise&ntilde;adas con ese fin.";
 answers[28] = choices[28][1];
 units[28] = "60";
 comments[28] = "Id Pregunta: 4703. Examen 2006 JCYL";


//  Id pregunta: 4869 AÃ±o de creación de pregunta: 2007-01-01
 questions[29]= "30)  En un sistema basado en el conocimiento, &iquest;qu&eacute; diferencia hay entre el conocimiento inferencial y el conocimiento estrat&eacute;gico o de control?";
 choices[29]= new Array();
 choices[29][0] = "El conocimiento inferencial est&aacute; contenido en la base de hechos y el de control es el que se obtiene mediante inferencia";
 choices[29][1] = "Los dos son equivalentes";
 choices[29][2] = "Los sistemas basados en el conocimiento no utilizan conocimiento estrat&eacute;gico";
 choices[29][3] = "El conocimiento inferencial procede de razonamientos y el estrat&eacute;gico permite decidir qu&eacute; regla se aplica en cada momento";
 answers[29] = choices[29][3];
 units[29] = "63";
 comments[29] = "Id Pregunta: 4869. ";


//  Id pregunta: 4976 AÃ±o de creación de pregunta: 2003-01-01
 questions[30]= "31)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares no ha sido elaborado por W3C (World Wide Web Consortium)?";
 choices[30]= new Array();
 choices[30][0] = "XML (Extensible Markup Language).";
 choices[30][1] = "SOAP (Simple Object Access Protocol).";
 choices[30][2] = "WAI (Web Accessibility Initiative).";
 choices[30][3] = "SSL (Secure Sockets Layer).";
 answers[30] = choices[30][3];
 units[30] = "39";
 comments[30] = "Id Pregunta: 4976. Examen TIC B 2007";


//  Id pregunta: 5079 AÃ±o de creación de pregunta: 2003-01-01
 questions[31]= "32)  En la estructura de la trama del protocolo HDLC (&quot;High level Data Link Control&quot;) el n&uacute;mero de bits del delimitadordel comienzo de la trama es:";
 choices[31]= new Array();
 choices[31][0] = "Variable";
 choices[31][1] = "8";
 choices[31][2] = "16";
 choices[31][3] = "32";
 answers[31] = choices[31][1];
 units[31] = "101";
 comments[31] = "Id Pregunta: 5079. Examen TIC A 2007";


//  Id pregunta: 5144 AÃ±o de creación de pregunta: 2003-01-01
 questions[32]= "33)  &iquest;Cu&aacute;l es el orden correcto en el que se realizan los pasos en un proceso de reingenier&iacute;a?";
 choices[32]= new Array();
 choices[32][0] = "Ingenier&iacute;a directa, ingenier&iacute;a inversa, an&aacute;lisis de c&oacute;digo, redise&ntilde;o y restructuraci&oacute;n.";
 choices[32][1] = "An&aacute;lisis de c&oacute;digo, redise&ntilde;o, ingenier&iacute;a inversa, reestructuraci&oacute;n e ingenier&iacute;a directa.";
 choices[32][2] = "An&aacute;lisis de c&oacute;digo, ingenier&iacute;a inversa, redise&ntilde;o, reestructuraci&oacute;n e ingenier&iacute;a directa.";
 choices[32][3] = "An&aacute;lisis de c&oacute;digo, reestructuraci&oacute;n, ingenier&iacute;a inversa, redise&ntilde;o e ingenier&iacute;a directa.";
 answers[32] = choices[32][3];
 units[32] = "91";
 comments[32] = "Id Pregunta: 5144. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5152 AÃ±o de creación de pregunta: 2003-01-01
 questions[33]= "34)  &iquest;Cu&aacute;l de las siguientes NO es un tipo de asociaci&oacute;n de un diagrama de clases?";
 choices[33]= new Array();
 choices[33][0] = "Interrelaciones";
 choices[33][1] = "Sometimiento";
 choices[33][2] = "Generalizaci&oacute;n";
 choices[33][3] = "Agregaci&oacute;n";
 answers[33] = choices[33][1];
 units[33] = "82";
 comments[33] = "Id Pregunta: 5152. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5305 AÃ±o de creación de pregunta: 2003-01-01
 questions[34]= "35)  Seg&uacute;n la Ley 9/2014, la aprobaci&oacute;n de los planes nacionales de numeraci&oacute;n corresponde a:";
 choices[34]= new Array();
 choices[34][0] = "Ministerio de Industria";
 choices[34][1] = "Gobierno";
 choices[34][2] = "Comisi&oacute;n Nacional de los Mercados y la Competencia";
 choices[34][3] = "Ninguno de los anteriores";
 answers[34] = choices[34][1];
 units[34] = "110";
 comments[34] = "Id Pregunta: 5305. ";


//  Id pregunta: 5800 AÃ±o de creación de pregunta: 2009-01-01
 questions[35]= "36)  En base a la ley 59/2003, en que se diferencia la firma electr&oacute;nica reconocida de la firma electr&oacute;nica avanzada?";
 choices[35]= new Array();
 choices[35][0] = "En la clase de certificado electr&oacute;nico en que se basa.";
 choices[35][1] = "En el tipo de dispositivo criptogr&aacute;fico utilizado para la custodia de la clave privada.";
 choices[35][2] = "En la duracion maxima de su validez. La validez de la firma electr&oacute;nica reconocida nunca podra exceder de 4 a&ntilde;os.";
 choices[35][3] = "Las respuestas A y B son correctas.";
 answers[35] = choices[35][3];
 units[35] = "30";
 comments[35] = "Id Pregunta: 5800. Ley 59/2003, art&iacute;culo 3";


//  Id pregunta: 5886 AÃ±o de creación de pregunta: 2009-01-01
 questions[36]= "37)  El m&eacute;todo de Saaty &oacute; AHP:";
 choices[36]= new Array();
 choices[36][0] = "Es relativo a accesibilidad web";
 choices[36][1] = "Es relativo a la decisi&oacute;n multicriterio";
 choices[36][2] = "Es relativo a la comunicaci&oacute;n en la organizaci&oacute;n";
 choices[36][3] = "Se refiere al env&iacute;o de datos a un centro de respaldo";
 answers[36] = choices[36][1];
 units[36] = "34";
 comments[36] = "Id Pregunta: 5886. MAP 2008 A1";


//  Id pregunta: 6154 AÃ±o de creación de pregunta: 2010-01-01
 questions[37]= "38)  &iquest;Cu&aacute;ntas versiones de NFS hay actualmente en uso?";
 choices[37]= new Array();
 choices[37][0] = "Tres: NFSv2, NFSv3 y NFSv4.";
 choices[37][1] = "Dos: NFSv3 y NFSv4.";
 choices[37][2] = "Tres: NFSv3, NFSv4 y NFSv5.";
 choices[37][3] = "Tres: NFSv1, NFSv2 y NFSv3.";
 answers[37] = choices[37][0];
 units[37] = "112";
 comments[37] = "Id Pregunta: 6154. ";


//  Id pregunta: 6211 AÃ±o de creación de pregunta: 2010-01-01
 questions[38]= "39)  En M&eacute;trica versi&oacute;n 3, el proceso de Planificaci&oacute;n de Sistemas de Informaci&oacute;n, incluye la tarea de:";
 choices[38]= new Array();
 choices[38][0] = "Definici&oacute;n de la Arquitectura Tecnol&oacute;gica";
 choices[38][1] = "Estudio de la situaci&oacute;n actual";
 choices[38][2] = "Selecci&oacute;n de la Soluci&oacute;n";
 choices[38][3] = "Definici&oacute;n del Sistema";
 answers[38] = choices[38][0];
 units[38] = "86";
 comments[38] = "Id Pregunta: 6211. TICB-2009, bloque desarrollo";


//  Id pregunta: 6394 AÃ±o de creación de pregunta: 2010-01-01
 questions[39]= "40)  &iquest;Es posible establecer la obligaci&oacute;n de comunicarse electr&oacute;nicamente con los &oacute;rganos de la Administraci&oacute;n General del Estado o sus organismos p&uacute;blicos vinculados o dependientes?";
 choices[39]= new Array();
 choices[39][0] = "S&iacute;, en cualquier caso";
 choices[39][1] = "No, en ning&uacute;n caso";
 choices[39][2] = "S&iacute;, en determinados casos previstos y mediante orden ministerial";
 choices[39][3] = "S&iacute;, en determinados casos previstos y mediante resoluci&oacute;n de la Subsecretar&iacute;a del Ministerio o titular del organismo p&uacute;blico competente";
 answers[39] = choices[39][2];
 units[39] = "43";
 comments[39] = "Id Pregunta: 6394. Art&iacute;culo 32 RD 1671/2009";


//  Id pregunta: 6436 AÃ±o de creación de pregunta: 2010-01-01
 questions[40]= "41)  Cuando se pasa a tablas una relaci&oacute;n n:m";
 choices[40]= new Array();
 choices[40][0] = "Se generan restricciones de integridad referencial.";
 choices[40][1] = "No hay que preocuparse por la integridad referencial.";
 choices[40][2] = "hay que modificar las claves ajenas de las entidades participantes en la relaci&oacute;n.";
 choices[40][3] = "No se generan claves ajenas nada m&aacute;s que para los atributos propios de la relaci&oacute;n.";
 answers[40] = choices[40][0];
 units[40] = "80";
 comments[40] = "Id Pregunta: 6436. NULL";


//  Id pregunta: 6492 AÃ±o de creación de pregunta: 2010-01-01
 questions[41]= "42)  Para los servicios de telefon&iacute;a m&oacute;vil, el modo de propagaci&oacute;n de la se&ntilde;al radioel&eacute;ctrica es:";
 choices[41]= new Array();
 choices[41][0] = "Onda de superficie";
 choices[41][1] = "Onda ionosf&eacute;rica";
 choices[41][2] = "Onda espacial";
 choices[41][3] = "Onda de dispersi&oacute;n troposf&eacute;rica";
 answers[41] = choices[41][2];
 units[41] = "108";
 comments[41] = "Id Pregunta: 6492. Castilla La Mancha 2009";


//  Id pregunta: 6502 AÃ±o de creación de pregunta: 2010-01-01
 questions[42]= "43)  Es una licencia compatible con GPL:";
 choices[42]= new Array();
 choices[42][0] = "NPL";
 choices[42][1] = "MPL";
 choices[42][2] = "BSD Original";
 choices[42][3] = "Ninguna de las anteriores";
 answers[42] = choices[42][3];
 units[42] = "61";
 comments[42] = "Id Pregunta: 6502. ";


//  Id pregunta: 6533 AÃ±o de creación de pregunta: 2010-01-01
 questions[43]= "44)  Los desajustes en los cumplimientos de las expectativas y especificaciones de los servicios determinan";
 choices[43]= new Array();
 choices[43][0] = "El grado de satisfacci&oacute;n de los usuarios";
 choices[43][1] = "Percepci&oacute;n del servicio y expectativas previas de los usuarios";
 choices[43][2] = "A y B son correctas";
 choices[43][3] = "A y B son incorrectas";
 answers[43] = choices[43][2];
 units[43] = "92";
 comments[43] = "Id Pregunta: 6533. NULL";


//  Id pregunta: 6642 AÃ±o de creación de pregunta: 2010-01-01
 questions[44]= "45)  En un sistema Orientado a Objetos, cu&aacute;l de las siguientes NO es una m&eacute;trica para evaluar la calidad del dise&ntilde;o?";
 choices[44]= new Array();
 choices[44][0] = "M&eacute;tricas de Booch";
 choices[44][1] = "M&eacute;tricas MDOO";
 choices[44][2] = "M&eacute;tricas de Lorenz y Kidd";
 choices[44][3] = "M&eacute;tricas de Chidamber y Kemerer";
 answers[44] = choices[44][0];
 units[44] = "88";
 comments[44] = "Id Pregunta: 6642. NULL";


//  Id pregunta: 7247 AÃ±o de creación de pregunta: 2010-01-01
 questions[45]= "46)  &iquest;Cu&aacute;ntas direcciones IP ser&aacute;n asignadas en la subred 220.8.7.0/28, sin considerar las direcciones de subred y de broadcast?";
 choices[45]= new Array();
 choices[45][0] = "256";
 choices[45][1] = "254";
 choices[45][2] = "14";
 choices[45][3] = "28";
 answers[45] = choices[45][2];
 units[45] = "100";
 comments[45] = "Id Pregunta: 7247. Examen TIC B 2009";


//  Id pregunta: 7275 AÃ±o de creación de pregunta: 2010-01-01
 questions[46]= "47)  &iquest;Cu&aacute;l de las siguientes no es una ventaja de las m&aacute;quinas virtuales con respecto al hardware f&iacute;sico?";
 choices[46]= new Array();
 choices[46][0] = "Aislamiento";
 choices[46][1] = "Independencia  del software";
 choices[46][2] = "Encapsulamiento";
 choices[46][3] = "Compatibilidad";
 answers[46] = choices[46][1];
 units[46] = "119";
 comments[46] = "Id Pregunta: 7275. NULL";


//  Id pregunta: 7286 AÃ±o de creación de pregunta: 2010-01-01
 questions[47]= "48)  &iquest;Cu&aacute;l de los siguientes elementos se puede decir que genuinamente forma parte de la web 2.0?";
 choices[47]= new Array();
 choices[47][0] = "Sindicaci&oacute;n de contenidos";
 choices[47][1] = "Sistemas de administraci&oacute;n de contenidos (CMS)";
 choices[47][2] = "P&aacute;ginas personales";
 choices[47][3] = "Directorios (taxonom&iacute;as)";
 answers[47] = choices[47][0];
 units[47] = "120";
 comments[47] = "Id Pregunta: 7286. Examen TIC B 2009";


//  Id pregunta: 7302 AÃ±o de creación de pregunta: 2010-01-01
 questions[48]= "49)  Indique cu&aacute;l de las siguientes NO es una t&eacute;cnica de modelado ac&uacute;stico empleada para reconocimiento habla: ";
 choices[48]= new Array();
 choices[48][0] = "Redes de Markov";
 choices[48][1] = "Modelos ocultos de Markov";
 choices[48][2] = "Redes neuronales";
 choices[48][3] = "Todas se emplean en reconocimiento autom&aacute;tico del habla";
 answers[48] = choices[48][0];
 units[48] = "94";
 comments[48] = "Id Pregunta: 7302. NULL";


//  Id pregunta: 7330 AÃ±o de creación de pregunta: 2010-01-01
 questions[49]= "50)  &iquest;Qu&eacute; tipos de miembro tiene AENOR?";
 choices[49]= new Array();
 choices[49][0] = "Natos, Corporativos, Adheridos y de Honor";
 choices[49][1] = "Adheridos, de Pleno Derecho y Suscritos";
 choices[49][2] = "Correspondientes, Individuales, Corporativos y de Honor";
 choices[49][3] = "Corporativos, Adheridos, Individuales y de Honor";
 answers[49] = choices[49][3];
 units[49] = "42";
 comments[49] = "Id Pregunta: 7330. www.aenor.es";


//  Id pregunta: 8242 AÃ±o de creación de pregunta: 2011-01-01
 questions[50]= "51)  De acuerdo al Est&aacute;ndar ISO 12207 de procesos del ciclo de vida del software:";
 choices[50]= new Array();
 choices[50][0] = "Existe un proceso espec&iacute;fico para la adaptaci&oacute;n del resto de procesos.";
 choices[50][1] = "Para cumplir con el estandar es necesario adaptar los procesos a las circunstancias particulares de cada organizaci&oacute;n o proyecto.";
 choices[50][2] = "Se puede utilizar cualquier proceso de adaptaci&oacute;n, siempre y cuando est&eacute; justificado y documentado.";
 choices[50][3] = "No hay una categor&iacute;a espec&iacute;fica de &quot;cumplimiento adaptado&quot;.";
 answers[50] = choices[50][0];
 units[50] = "76";
 comments[50] = "Id Pregunta: 8242. Examen TIC A1 2010";


//  Id pregunta: 8245 AÃ±o de creación de pregunta: 2011-01-01
 questions[51]= "52)  El Texto Refundido de la Ley de Propiedad Intelectual, modificado por la ley 23/2006, define los siguientes derechos de explotaci&oacute;n:";
 choices[51]= new Array();
 choices[51][0] = "Reproducci&oacute;n, Distribuci&oacute;n, Duplicaci&oacute;n y Transformaci&oacute;n.";
 choices[51][1] = "Distribuci&oacute;n, Duplicaci&oacute;n, Comunicaci&oacute;n P&uacute;blica y Transformaci&oacute;n.";
 choices[51][2] = "Reproducci&oacute;n, Duplicaci&oacute;n, Comunicaci&oacute;n P&uacute;blica y Transformaci&oacute;n.";
 choices[51][3] = "Reproducci&oacute;n, Distribuci&oacute;n, Comunicaci&oacute;n P&uacute;blica y Transformaci&oacute;n.";
 answers[51] = choices[51][3];
 units[51] = "36,37";
 comments[51] = "Id Pregunta: 8245. Examen TIC A1 2010";


//  Id pregunta: 8346 AÃ±o de creación de pregunta: 2011-01-01
 questions[52]= "53)  &iquest;Qu&eacute; pruebas tienen como objetivo comprobar que los cambios sobre un componente de un sistema de informaci&oacute;n no introducen un comportamiento no deseado o errores adicionales en otros componentes no modificados?";
 choices[52]= new Array();
 choices[52][0] = "Pruebas unitarias.";
 choices[52][1] = "Pruebas del Sistema.";
 choices[52][2] = "Pruebas de Implantaci&oacute;n.";
 choices[52][3] = "Pruebas de Regresi&oacute;n.";
 answers[52] = choices[52][3];
 units[52] = "86";
 comments[52] = "Id Pregunta: 8346. Examen TIC A2 2010";


//  Id pregunta: 8348 AÃ±o de creación de pregunta: 2011-01-01
 questions[53]= "54)  &iquest;Cu&aacute;l de los siguientes mecanismos NO se utiliza para definir un perfil (profile) en UML 2.0?";
 choices[53]= new Array();
 choices[53][0] = "Estereotipos.";
 choices[53][1] = "Valores etiquetados.";
 choices[53][2] = "Artefactos.";
 choices[53][3] = "Restricciones.";
 answers[53] = choices[53][2];
 units[53] = "80,81,82";
 comments[53] = "Id Pregunta: 8348. Examen TIC A2 2010";


//  Id pregunta: 8371 AÃ±o de creación de pregunta: 2011-01-01
 questions[54]= "55)  Una de las funciones primordiales del Sistema Operativo es:";
 choices[54]= new Array();
 choices[54][0] = "Gestionar la comunicaci&oacute;n con los servidores de correo.";
 choices[54][1] = "Proporcionar las herramientas ofim&aacute;ticas b&aacute;sicas.";
 choices[54][2] = "Facilitar, al menos, un navegador.";
 choices[54][3] = "Crear la interfaz del hardware con el usuario.";
 answers[54] = choices[54][3];
 units[54] = "52";
 comments[54] = "Id Pregunta: 8371. Examen TIC A2 2010";


//  Id pregunta: 8418 AÃ±o de creación de pregunta: 2011-01-01
 questions[55]= "56)  Dentro de las arquitecturas orientadas a servicios, &iquest;cu&aacute;l de las siguientes definiciones se ajusta mejor a lo que es un ESB (Enterprise Service Bus)? ";
 choices[55]= new Array();
 choices[55][0] = "Es el encargado de definir y verificar el cumplimiento de los acuerdos de nivel de servicio";
 choices[55][1] = "Es una infraestructura y un sistema de eventos que permiten conectar cualquier recurso de tecnolog&iacute;as de la informaci&oacute;n sin importar la tecnolog&iacute;a que utiliza el recurso";
 choices[55][2] = "Es el repositorio de datos donde est&aacute; almacenada la informaci&oacute;n que quiere ser compartida a trav&eacute;s de los web services";
 choices[55][3] = "Es el registro y repositorio de los web services";
 answers[55] = choices[55][1];
 units[55] = "51";
 comments[55] = "Id Pregunta: 8418. Examen TIC A2 2010";


//  Id pregunta: 8533 AÃ±o de creación de pregunta: 2011-01-01
 questions[56]= "57)  &iquest;Qu&eacute; m&eacute;todo de codificaci&oacute;n de la voz NO realiza compresi&oacute;n?";
 choices[56]= new Array();
 choices[56][0] = "LD-CELP (Low-Delay Code-Excited Linear Prediction).";
 choices[56][1] = "CS-ACELP (Conjugate-Structured Algebraic Code-Excited Linear Prediction)";
 choices[56][2] = "PCM (Pulse-Code Modulation).";
 choices[56][3] = "ADPCM (Adaptative Differential Pulse Code Modulation)";
 answers[56] = choices[56][2];
 units[56] = "117";
 comments[56] = "Id Pregunta: 8533. Examen TIC A2 2010 interna";


//  Id pregunta: 8598 AÃ±o de creación de pregunta: 2011-01-01
 questions[57]= "58)  Indique cual de las siguientes definiciones se corresponde con Biztalk:";
 choices[57]= new Array();
 choices[57][0] = "Es un servidor que permite gestionar procesos de negocio por medio de adaptadores dise&ntilde;ados al efecto, capacit&aacute;ndolo para operar diferentes tipos de software";
 choices[57][1] = "Es una librer&iacute;a de .NET que permite la comunicaci&oacute;n por IRC facilitando la implementaci&oacute;n de chats.";
 choices[57][2] = "Es un servidor web de NET especialmente adaptado para tecnolog&iacute;as m&oacute;viles";
 choices[57][3] = "Es un componente que pertenece a! CLR de NET que facilita la ejecuci&oacute;n de la aplicaci&oacute;n.";
 answers[57] = choices[57][0];
 units[57] = "115";
 comments[57] = "Id Pregunta: 8598. Examen TIC A2 2010 interna";


//  Id pregunta: 8668 AÃ±o de creación de pregunta: 2011-01-01
 questions[58]= "59)  Los cortafuegos de filtrado de paquetes &iquest;en qu&eacute; capa TCP/IP act&uacute;an?";
 choices[58]= new Array();
 choices[58][0] = "Capa IP";
 choices[58][1] = "Capa de Aplicaci&oacute;n";
 choices[58][2] = "Capa de Sesi&oacute;n";
 choices[58][3] = "Capa de Transporte";
 answers[58] = choices[58][0];
 units[58] = "111";
 comments[58] = "Id Pregunta: 8668. Examen UPM A2 2011";


//  Id pregunta: 8733 AÃ±o de creación de pregunta: 2011-01-01
 questions[59]= "60)  Elija la afirmaci&oacute;n correcta, en relaci&oacute;n con el contenido de la tarjeta chip del DNI electr&oacute;nico:";
 choices[59]= new Array();
 choices[59][0] = "Se incluye un certificado electr&oacute;nico &uacute;nico, personal e intransferible, con la doble funcionalidad de firma electr&oacute;nica y de autenticaci&oacute;n.";
 choices[59][1] = "Se incluyen, entre otros los datos de filiaci&oacute;n del ciudadano (los mismos que est&aacute;n impresos en el soporte f&iacute;sico del DNI), junto con una imagen de la fotograf&iacute;a";
 choices[59][2] = "Los datos contenidos, en todo caso, s&oacute;lo son accesibles en lectura por el ciudadano, mediante la utilizaci&oacute;n de la Clave Personal de Acceso o PIN. como garant&iacute;a de confidencialidad";
 choices[59][3] = "No se incluye una imagen de la fotograf&iacute;a";
 answers[59] = choices[59][1];
 units[59] = "74";
 comments[59] = "Id Pregunta: 8733. Examen TIC A2 2010 interna";


//  Id pregunta: 8741 AÃ±o de creación de pregunta: 2011-01-01
 questions[60]= "61)  En un organismo p&uacute;blico se gestionan datos personales relativos a la comisi&oacute;n de infracciones administrativas, pero, en ning&uacute;n caso, infracciones penales, &iquest;deben cifrar las transmisiones que puedan hacer de esos datos, a trav&eacute;s de redes p&uacute;blicas?";
 choices[60]= new Array();
 choices[60][0] = "NO en todos los casos. Como no se trata de infracciones penales las medidas de seguridad requeridas son las de nivel bajo, siempre que esos datos queden en el &aacute;mbito de la Administraci&oacute;n";
 choices[60][1] = "Si, se trata de datos de infracciones, que requieren por tanto medidas de nivel alto, aunque el cifrado se puede sustituir por cualquier otro mecanismo que garantice que la informaci&oacute;n no sea inteligible ni manipulada por terceros";
 choices[60][2] = "NO se requiere tal cifrado, pues las medidas que requieren ese tipo de datos son las de nivel medio y el mencionado cifrado es una medida de seguridad de nivel alto.";
 choices[60][3] = "Si. El cifrado a trav&eacute;s de redes p&uacute;blicas, a diferencia del realizado a trav&eacute;s de redes inal&aacute;mbricas es una medida de nivel medio, requerida en el caso planteado.";
 answers[60] = choices[60][2];
 units[60] = "29";
 comments[60] = "Id Pregunta: 8741. Examen TIC A2 2010 interna";


//  Id pregunta: 8819 AÃ±o de creación de pregunta: 2011-01-01
 questions[61]= "62)  &iquest;Cu&aacute;l de estas normas especifica los requisitos para un buen sistema de gesti&oacute;n de calidad?";
 choices[61]= new Array();
 choices[61][0] = "ISO 9001";
 choices[61][1] = "ISO 9000";
 choices[61][2] = "ISO 9004";
 choices[61][3] = "ISO 19011";
 answers[61] = choices[61][0];
 units[61] = "87, 92";
 comments[61] = "Id Pregunta: 8819. Examen UPM A2 2011";


//  Id pregunta: 8854 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  La vulneraci&oacute;n de una restricci&oacute;n de integridad referencial es detectada por el servidor de base de datos de acuerdo a la declaraci&oacute;n de la:";
 choices[62]= new Array();
 choices[62][0] = "PRIMARY KEY";
 choices[62][1] = "FOREIGN KEY";
 choices[62][2] = "CANDIDATE KEY";
 choices[62][3] = "SUPERKEY";
 answers[62] = choices[62][1];
 units[62] = "58";
 comments[62] = "Id Pregunta: 8854. Analista Ayto. Madrid 2010";


//  Id pregunta: 8877 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  En un DFD es falso que:";
 choices[63]= new Array();
 choices[63][0] = "Los flujos de datos no puede conectar dos almacenes directamente.";
 choices[63][1] = "Los flujos de datos no pueden ser continuos.";
 choices[63][2] = "Los flujos de datos de di&aacute;logo pueden comunicar procesos.";
 choices[63][3] = "Los flujos de datos de consulta parten de almacenes de datos.";
 answers[63] = choices[63][1];
 units[63] = "81";
 comments[63] = "Id Pregunta: 8877. Examen UPM A2 2011";


//  Id pregunta: 9023 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  Para dimensionar los Centros de Atenci&oacute;n de Llamadas (Call Center) hay que tener en cuenta, a la hora de determinar el n&uacute;mero de operadores en una franja horaria:";
 choices[64]= new Array();
 choices[64][0] = "El n&uacute;mero de llamadas entrantes, y utilizar la f&oacute;rmula Erlang B.";
 choices[64][1] = "El n&uacute;mero de llamadas entrantes y su duraci&oacute;n, y utilizar la f&oacute;rmula Erlang C.";
 choices[64][2] = "En un Centro de Atenci&oacute;n de Llamadas el n&uacute;mero de enlaces es igual que el de agentes.";
 choices[64][3] = "Ninguna de las anteriores";
 answers[64] = choices[64][1];
 units[64] = "104";
 comments[64] = "Id Pregunta: 9023. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9027 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  Las centralitas MD-110 del servicio Ibercom que constituyen una RAI";
 choices[65]= new Array();
 choices[65][0] = "Se interconectan mediante una RPV (red privada virtual) establecida por el operador en sus centrales p&uacute;blicas.";
 choices[65][1] = "Necesariamente se conectan mediante un CF (centro frontal).";
 choices[65][2] = "Se interconectan entre si mediante un bus compartido.";
 choices[65][3] = "Ninguna de las anteriores";
 answers[65] = choices[65][1];
 units[65] = "103";
 comments[65] = "Id Pregunta: 9027. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9070 AÃ±o de creación de pregunta: 2013-01-01
 questions[66]= "67)  &iquest;Cu&aacute;ntas gu&iacute;as de accesibilidad del WAI existen actualmente (abril de 2013)?";
 choices[66]= new Array();
 choices[66][0] = "Tres: ATAG, WCAG y UUAG. ";
 choices[66][1] = "Seis: ATAG, WCAG, UAAG, XAG, FCAG y WAI-RIA. ";
 choices[66][2] = "Cuatro: ATAG, WCAG, UAAG y XAG. ";
 choices[66][3] = "Cinco: ATAG, WCAG, UAAG, XAG y WAI-RIA. ";
 answers[66] = choices[66][3];
 units[66] = "39";
 comments[66] = "Id Pregunta: 9070. ";


//  Id pregunta: 9088 AÃ±o de creación de pregunta: 2013-01-01
 questions[67]= "68)  Indicar el requisito imprescindible para que un programa de ordenador sea protegible.";
 choices[67]= new Array();
 choices[67][0] = "Estar documentado correctamente";
 choices[67][1] = "Estar desarrollado por una persona f&iacute;sica";
 choices[67][2] = "Ser la primera versi&oacute;n de un programa, ya que las sucesivas no est&aacute;n protegidas";
 choices[67][3] = "Ser original";
 answers[67] = choices[67][3];
 units[67] = "36";
 comments[67] = "Id Pregunta: 9088. ";


//  Id pregunta: 9168 AÃ±o de creación de pregunta: 2013-01-01
 questions[68]= "69)  Modos de funcionamiento de la tecnolog&iacute;a NFC(near field communicator):";
 choices[68]= new Array();
 choices[68][0] = "Independiente/Infraestructura";
 choices[68][1] = "Activo/Pasivo";
 choices[68][2] = "Manual/Continuo";
 choices[68][3] = "Modo voz/Modo voz + datos";
 answers[68] = choices[68][1];
 units[68] = "70";
 comments[68] = "Id Pregunta: 9168. Examen TIC A2 2011";


//  Id pregunta: 9237 AÃ±o de creación de pregunta: 2013-01-01
 questions[69]= "70)  &iquest;Qu&eacute; es el n&uacute;cleo denominado &ldquo;vanilla&rdquo;?";
 choices[69]= new Array();
 choices[69][0] = "Kernel sin alteraciones suministrado por Linus Torvalds";
 choices[69][1] = "S&oacute;lo se puede descargar de su sitio oficial en http://www.kernel.org";
 choices[69][2] = "Las distintas distribuciones no se basan en el n&uacute;cleo &ldquo;vanilla&rdquo;";
 choices[69][3] = "Todas las anteriores son correctas.";
 answers[69] = choices[69][0];
 units[69] = "53";
 comments[69] = "Id Pregunta: 9237. ";


//  Id pregunta: 9366 AÃ±o de creación de pregunta: 2013-01-01
 questions[70]= "71)  Resilient Packet Ring";
 choices[70]= new Array();
 choices[70][0] = "Es una tecnolog&iacute;a de nivel 3.";
 choices[70][1] = "Es una tecnolog&iacute;a obsoleta.";
 choices[70][2] = "Es incompatible con Ethernet.";
 choices[70][3] = "Es una tecnolog&iacute;a de nivel 2.";
 answers[70] = choices[70][3];
 units[70] = "101";
 comments[70] = "Id Pregunta: 9366. ";


//  Id pregunta: 9403 AÃ±o de creación de pregunta: 2013-01-01
 questions[71]= "72)  RTP (Real time protocol) se utiliza en ToIP (telefon&iacute;a IP) para";
 choices[71]= new Array();
 choices[71][0] = "Mantener sincronizados los relojes de los tel&eacute;fonos.";
 choices[71][1] = "Nada. Lo que se utiliza es RTCP (real time control protocol)";
 choices[71][2] = "Transmitir la voz: una vez codificada se encapsula como payload de RTP en datagramas UDP.";
 choices[71][3] = "Ninguna de las anteriores";
 answers[71] = choices[71][2];
 units[71] = "109";
 comments[71] = "Id Pregunta: 9403. T&eacute;cnico Teleco Ayto Madrid 2010";


//  Id pregunta: 9490 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  Seg&uacute;n M&eacute;tricav3, &iquest;qu&eacute; verificaciones no se llevan a cabo durante la validaci&oacute;n de requisitos?";
 choices[72]= new Array();
 choices[72][0] = "Verificaciones de integridad";
 choices[72][1] = "Verificaciones de consistencia";
 choices[72][2] = "Verificaciones de completitud";
 choices[72][3] = "Verificaciones de realismo";
 answers[72] = choices[72][0];
 units[72] = "78";
 comments[72] = "Id Pregunta: 9490. ";


//  Id pregunta: 9674 AÃ±o de creación de pregunta: 2014-01-01
 questions[73]= "74)  La arquitectura del Grid se compone de las siguientes capas:";
 choices[73]= new Array();
 choices[73][0] = "Capa de red, de &ldquo;middleware&rdquo; y de aplicaci&oacute;n.";
 choices[73][1] = "Capa de red, de &ldquo;middleware&rdquo;, de recursos y de aplicaci&oacute;n.";
 choices[73][2] = "Capa de recursos, de &ldquo;middleware&rdquo; y de aplicaci&oacute;n.";
 choices[73][3] = "Ninguna de las anteriores.";
 answers[73] = choices[73][1];
 units[73] = "45";
 comments[73] = "Id Pregunta: 9674. ";


//  Id pregunta: 9724 AÃ±o de creación de pregunta: 2014-01-01
 questions[74]= "75)  El sistema de redundancia que consiste en la divisi&oacute;n a nivel de bloques m&aacute;s un disco de paridad dedicado se denomina";
 choices[74]= new Array();
 choices[74][0] = "RAID 1";
 choices[74][1] = "RAID 3";
 choices[74][2] = "RAID 4";
 choices[74][3] = "RAID 6";
 answers[74] = choices[74][2];
 units[74] = "48";
 comments[74] = "Id Pregunta: 9724. Examen TIC-A1 2013";


//  Id pregunta: 9877 AÃ±o de creación de pregunta: 2014-01-01
 questions[75]= "76)  La norma ISO 27002";
 choices[75]= new Array();
 choices[75][0] = "es un est&aacute;ndar de facto para la prestaci&oacute;n de servicios de seguridad de la Tecnolog&iacute;a de la Informaci&oacute;n";
 choices[75][1] = "tiene como objetivo proporcionar una base com&uacute;n para la gesti&oacute;n de la seguridad dentro de las organizaciones.";
 choices[75][2] = "establece 36 dominios de control para la gesti&oacute;n de la seguridad.";
 choices[75][3] = "establece un sistema de certificaci&oacute;n adecuado a la norma.";
 answers[75] = choices[75][1];
 units[75] = "107";
 comments[75] = "Id Pregunta: 9877. TIC A1, Examen 2013";


//  Id pregunta: 9881 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  Se dispone de dos centros de proceso de datos (CPDs) separados una distancia de 80 km entre s&iacute;. En ambos CPDs se dispone de cabinas de almacenamiento SAN (Storage Area Network) que conforman un cluster geogr&aacute;fico entre s&iacute;. &iquest;Qu&eacute; tecnolog&iacute;a utilizar&iacute;a para unir ambas cabinas?";
 choices[76]= new Array();
 choices[76][0] = "CWDM, Coarse Wavelength Division Multiplexing.";
 choices[76][1] = "DWDM, Dense Wavelength Division Multiplexing.";
 choices[76][2] = "EWDM, Enhanced Wavelength Division Multiplexing.";
 choices[76][3] = "FWDM, Far Wavelength Division Multiplexing.";
 answers[76] = choices[76][1];
 units[76] = "99, 102";
 comments[76] = "Id Pregunta: 9881. TIC A1, Examen 2013";


//  Id pregunta: 9909 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  Entre los aspectos fundamentales de la Programaci&oacute;n Extrema NO se encuentra:";
 choices[77]= new Array();
 choices[77][0] = "Desarrollo iterativo e incremental.";
 choices[77][1] = "Basada en la planificaci&oacute;n previa.";
 choices[77][2] = "El cliente est&aacute; integrado en el proyecto.";
 choices[77][3] = "Simplicidad en el dise&ntilde;o para agilizar el desarrollo y facilitar el mantenimiento.";
 answers[77] = choices[77][1];
 units[77] = "79";
 comments[77] = "Id Pregunta: 9909. TIC A2, Examen 2013";


//  Id pregunta: 9964 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  En la plataforma .NET, &iquest;cu&aacute;l es el est&aacute;ndar que define como se declaran, usan y administran los tipos de datos en el Common Language Runtime (CLR) y que es una parte importante para que m&uacute;ltiples lenguajes sean soportados?";
 choices[78]= new Array();
 choices[78][0] = "System Data Type (SDT)";
 choices[78][1] = "Common Type System (CTS)";
 choices[78][2] = "Common Data Integration (CDI)";
 choices[78][3] = "Data Type Core (DTC)";
 answers[78] = choices[78][1];
 units[78] = "59,115";
 comments[78] = "Id Pregunta: 9964. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";


//  Id pregunta: 10039 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  &iquest;De qu&eacute; tipo es la direcci&oacute;n de IPv6 ff00::/8?";
 choices[79]= new Array();
 choices[79][0] = "No es v&aacute;lida.";
 choices[79][1] = "Unicast.";
 choices[79][2] = "Multicast. ";
 choices[79][3] = "Loopback.";
 answers[79] = choices[79][2];
 units[79] = "100";
 comments[79] = "Id Pregunta: 10039. TIC A2, promoci&oacute;n interna y libre, examen 2013";


//  Id pregunta: 10162 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  Un dominio en un modelo relacional&hellip;";
 choices[80]= new Array();
 choices[80][0] = "Puede definirse por intensi&oacute;n, es decir, especificando tipo de datos y restricciones";
 choices[80][1] = "Es un conjunto nominado, infinito y homog&eacute;neo de valores at&oacute;micos";
 choices[80][2] = "S&oacute;lo puede definirse por extensi&oacute;n o enumeraci&oacute;n de los posibles valores del dominio";
 choices[80][3] = "Todas las anteriores";
 answers[80] = choices[80][0];
 units[80] = "58";
 comments[80] = "Id Pregunta: 10162. ";


//  Id pregunta: 10201 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  &iquest;Cual de las siguientes afirmaciones es correcta respecto a la tecnolog&iacute;a 4G de comunicaciones m&oacute;viles?";
 choices[81]= new Array();
 choices[81][0] = "Corresponde a la release 7 del 3GPP (3rd Generation Partnership Project)";
 choices[81][1] = "Usa una nueva interfaz aire basada en OFDMA (Orthogonal Frequency Division Multiple Access)";
 choices[81][2] = "Reutiliza los RNC (Radio Network Controller) de la red 3G incorporando las funciones de los nodos B";
 choices[81][3] = "El ancho de banda de los canales pasa de los 5 MHz de 3G a los 20MHz";
 answers[81] = choices[81][1];
 units[81] = "108";
 comments[81] = "Id Pregunta: 10201. Se trata de la release 8. Desaparece el RNC y sus funciones se incorporan al eNode B (Evolved Node B). El ancho de banda no es fijo sino variable entre 1,25MHz y 20MHz.";


//  Id pregunta: 10223 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  Teniendo las siguientes sentencias, el resultado ser&aacute;:byte b1 = 126, b2 = 1;byte b3 = b1 + b2;System.out.println(&quot;b3 vale: &quot; + b3);";
 choices[82]= new Array();
 choices[82][0] = "127";
 choices[82][1] = "Da error, ya que se supera el valor m&aacute;ximo que admite un dato de tipo byte";
 choices[82][2] = "Da error y no compila ya que b3 deber&iacute;a ser de tipo int";
 choices[82][3] = "Da error ya que las variables est&aacute;n mal declaradas";
 answers[82] = choices[82][2];
 units[82] = "60";
 comments[82] = "Id Pregunta: 10223. La suma de la segunda l&iacute;nea solo acepta int. Si se suman bytes debe hacerse casting.";


//  Id pregunta: 10242 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  En una aplicaci&oacute;n basada en Struts las solicitudes del cliente son interceptadas en primer lugar por:";
 choices[83]= new Array();
 choices[83][0] = "Un servlet que actua como controlador denominado ActionServlet";
 choices[83][1] = "Un JavaBean encargado de procesar la informaci&oacute;n denominado ActionForm";
 choices[83][2] = "Los objetos ActionMapping que analizan la direcci&oacute;n url y procesar la solicitud";
 choices[83][3] = "Un objeto ActionForward que renderiza una p&aacute;gina JSP";
 answers[83] = choices[83][0];
 units[83] = "116";
 comments[83] = "Id Pregunta: 10242. NULL";


//  Id pregunta: 10270 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  &iquest;En cu&aacute;l de los siguientes casos no es necesaria autorizaci&oacute;n del director de la AEPD para hacer una transferencia internacional de datos personales?";
 choices[84]= new Array();
 choices[84][0] = "Cuando se refiera a transferencias dinerarias conforme a su legislaci&oacute;n espec&iacute;fica ";
 choices[84][1] = "Cuando la transferencia sea precisa para el reconocimiento, ejercicio o defensa de un derecho en un proceso judicial ";
 choices[84][2] = "Cuando la transferencia se haga a efectos de prestar o solicitar auxilio judicial internacional ";
 choices[84][3] = "En los tres casos anteriores";
 answers[84] = choices[84][3];
 units[84] = "29";
 comments[84] = "Id Pregunta: 10270. Art&iacute;culo 34 de la Ley 15/1999";


//  Id pregunta: 10501 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  &iquest;Cual de las siguientes etiquetas fue introducida en HTML5?";
 choices[85]= new Array();
 choices[85][0] = "&lt;head&gt;";
 choices[85][1] = "&lt;video&gt;";
 choices[85][2] = "&lt;music&gt;";
 choices[85][3] = "&lt;background&gt;";
 answers[85] = choices[85][1];
 units[85] = "69";
 comments[85] = "Id Pregunta: 10501. http://es.wikipedia.org/wiki/HTML5";


//  Id pregunta: 10560 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Los controles compensatorios tienen como objetivo:";
 choices[86]= new Array();
 choices[86][0] = "reducir el riesgo ante una debilidad existente";
 choices[86][1] = "Predecir problemas potenciales antes de que ocurran";
 choices[86][2] = "Solucionar problemas detectados por controles detectivos";
 choices[86][3] = "Reportar errores";
 answers[86] = choices[86][0];
 units[86] = "31, 32, 33";
 comments[86] = "Id Pregunta: 10560. Las opciones B, C y D son caracter&iacute;sticas de  controles preventivo, correctivo y detectivo respectivamente.";


//  Id pregunta: 10687 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  La Ley 39/2015, cita expresamente en su pre&aacute;mbulo:";
 choices[87]= new Array();
 choices[87][0] = "La Comisi&oacute;n para la Reforma de las Administraciones P&uacute;blicas.";
 choices[87][1] = "El programa nacional de reformas de Espa&ntilde;a.";
 choices[87][2] = "Ambas.";
 choices[87][3] = "Ninguna de las anteriores.";
 answers[87] = choices[87][2];
 units[87] = "30";
 comments[87] = "Id Pregunta: 10687. ";


//  Id pregunta: 10907 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  Se&ntilde;ala la afirmaci&oacute;n INCORRECTA:";
 choices[88]= new Array();
 choices[88][0] = "La tecnolog&iacute;a VDSL permite transmisi&oacute;n asim&eacute;trica o sim&eacute;trica.";
 choices[88][1] = "VDSL utiliza 2 canales para transmisi&oacute;n de datos, uno para subida y el otro para descarga.";
 choices[88][2] = "La tecnolog&iacute;a HFC es una combinaci&oacute;n de cable y fibra &oacute;ptica.";
 choices[88][3] = "La tecnolog&iacute;a FTTH permite que la fibra &oacute;ptica llegue hasta la casa del cliente.";
 answers[88] = choices[88][1];
 units[88] = "107";
 comments[88] = "Id Pregunta: 10907. Examen GSI 2014";


//  Id pregunta: 10934 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  &iquest;Cu&aacute;l de estas afirmaciones NO corresponde al CCN-CERT?";
 choices[89]= new Array();
 choices[89][0] = "El CCN-CERT es la Capacidad de Respuesta a incidentes de Seguridad de la Informaci&oacute;n del Centro Criptol&oacute;gico Nacional.";
 choices[89][1] = "Los servicios del CCN-CERT est&aacute;n dirigidos exclusivamente a la Administraci&oacute;n General del Estado.";
 choices[89][2] = "CARMEN, LUCIA e IN&Eacute;S son herramientas desarrolladas por CCN-CERT.";
 choices[89][3] = "Las funciones del CCN-CERT quedan recogidas en el RD 3/2010, de 8 de enero, regulador del Esquema Nacional de Seguridad.";
 answers[89] = choices[89][1];
 units[89] = "111";
 comments[89] = "Id Pregunta: 10934. TIC A1 AGE 2014";


//  Id pregunta: 10955 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  En ITIL V3, &iquest;qu&eacute; es un OLA?";
 choices[90]= new Array();
 choices[90][0] = "Es un contrato entre un proveedor de servicios de TI con un &uacute;nico cliente externo a la organizaci&oacute;n.";
 choices[90][1] = "Es un contrato entre departamentos de una misma organizaci&oacute;n.";
 choices[90][2] = "Es un contrato entre un proveedor de servicios de TI que describe los servicios ofertados a varios clientes externos a la organizaci&oacute;n.";
 choices[90][3] = "Es un contrato entre la administraci&oacute;n y la empresa privada.";
 answers[90] = choices[90][1];
 units[90] = "98";
 comments[90] = "Id Pregunta: 10955. TIC A1 AGE 2014";


//  Id pregunta: 11013 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;Cu&aacute;l es el portal nacional que organiza y gestiona el Cat&aacute;logo de Informaci&oacute;n P&uacute;blica de la Administraci&oacute;n General del Estado?";
 choices[91]= new Array();
 choices[91][0] = "www.datos.gob.es";
 choices[91][1] = "www.rediris.es";
 choices[91][2] = "www.pae.es";
 choices[91][3] = "administracionelectronica.gob.es";
 answers[91] = choices[91][0];
 units[91] = "30";
 comments[91] = "Id Pregunta: 11013. ";


//  Id pregunta: 11084 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest; Para que es usado el modelo RACI?";
 choices[92]= new Array();
 choices[92][0] = "Documentar los roles y las relaciones de las partes interesadas (stakeholders) en un proceso o actividad";
 choices[92][1] = "Definir requerimientos para un nuevo servicio o proceso";
 choices[92][2] = "Analizar el impacto en el negocio de una incidencia";
 choices[92][3] = "Crear un Cuadro de Mando que muestre el estado general de los servicios gestionados";
 answers[92] = choices[92][0];
 units[92] = "98";
 comments[92] = "Id Pregunta: 11084. ";


//  Id pregunta: 11298 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  En relaci&oacute;n con la contrataci&oacute;n administrativa se&ntilde;ale la opci&oacute;n verdadera.";
 choices[93]= new Array();
 choices[93][0] = "Est&aacute; prohibido la realizaci&oacute;n de pactos en cualquier caso.";
 choices[93][1] = "Obliga a entes locales.";
 choices[93][2] = "La perfecci&oacute;n de un contrato, se produce en su adjudicaci&oacute;n provisional.";
 choices[93][3] = "La garant&iacute;a global, responde solamente ante un &oacute;rgano de contrataci&oacute;n.";
 answers[93] = choices[93][1];
 units[93] = "41";
 comments[93] = "Id Pregunta: 11298. Obliga a todas las AAPP";


//  Id pregunta: 11345 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  De los perfiles creados por WS-I indique cu&aacute;l no existe";
 choices[94]= new Array();
 choices[94][0] = "WS-I Basic security profile";
 choices[94][1] = "WS-I Reliable secure profile";
 choices[94][2] = "WS-I Extended Reliable profile";
 choices[94][3] = "WS-I Basic profile";
 answers[94] = choices[94][2];
 units[94] = "51";
 comments[94] = "Id Pregunta: 11345. ";


//  Id pregunta: 11424 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Se&ntilde;ale la falsa, en relaci&oacute;n a derechos de los usuarios, seg&uacute;n se indica en la Ley 9/2014:";
 choices[95]= new Array();
 choices[95][0] = "Derecho a resolver el contrato en cualquier momento.";
 choices[95][1] = "Derecho al cambio de operador con conservaci&oacute;n del n&uacute;mero.";
 choices[95][2] = "Derecho a la continuidad del servicio, sin indemnizaci&oacute;n por parte del operador si la interrupci&oacute;n es inferior a 60 minutos.";
 choices[95][3] = "Derecho a acceder gratuitamente a llamadas de emergencia.";
 answers[95] = choices[95][2];
 units[95] = "110";
 comments[95] = "Id Pregunta: 11424. ";


//  Id pregunta: 11617 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Se&ntilde;ale en qu&eacute; tipo de licencia Creative Commons se permite el uso comercial de la obra pero no la generaci&oacute;n de obras derivadas:";
 choices[96]= new Array();
 choices[96][0] = "by-nc";
 choices[96][1] = "by-nd";
 choices[96][2] = "by-sa";
 choices[96][3] = "by-nc-nd";
 answers[96] = choices[96][1];
 units[96] = "61";
 comments[96] = "Id Pregunta: 11617. ";


//  Id pregunta: 11637 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Seg&uacute;n M&eacute;trica v3, se&ntilde;ale qui&eacute;n no se encuentra entre los participantes de la actividad de Ejecuci&oacute;n de las pruebas de integraci&oacute;n:";
 choices[97]= new Array();
 choices[97][0] = "Equipo de seguridad";
 choices[97][1] = "Equipo de arquitectura";
 choices[97][2] = "Equipo de proyecto";
 choices[97][3] = "T&eacute;cnicos de comunicaciones";
 answers[97] = choices[97][0];
 units[97] = "86";
 comments[97] = "Id Pregunta: 11637. ";


//  Id pregunta: 11651 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  En IPv6, la etiqueta de flujo tiene una longitud de:";
 choices[98]= new Array();
 choices[98][0] = "8 bits";
 choices[98][1] = "16 bits";
 choices[98][2] = "20 bits";
 choices[98][3] = "No existe dicha etiqueta";
 answers[98] = choices[98][2];
 units[98] = "100";
 comments[98] = "Id Pregunta: 11651. ";


//  Id pregunta: 11695 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Los mensajes intercambiados entre Bridges en STP se denominan:";
 choices[99]= new Array();
 choices[99][0] = "PDUs";
 choices[99][1] = "PDIs";
 choices[99][2] = "BPDU";
 choices[99][3] = "SPDU";
 answers[99] = choices[99][2];
 units[99] = "102";
 comments[99] = "Id Pregunta: 11695. NULL";


