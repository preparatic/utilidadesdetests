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

//  Id pregunta: 8 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de los siguientes puntos de verificaci&oacute;n de WAI (en la norma WCAG 1.0) no es de prioridad 1?";
 choices[0]= new Array();
 choices[0][0] = "&quot;Titule cada marco para facilitar la identificaci&oacute;n y navegaci&oacute;n de los mismos&quot;";
 choices[0][1] = "&quot;En las tablas de datos, identifique los encabezamientos de fila y columna&quot;";
 choices[0][2] = "&quot;Asegure que toda la informaci&oacute;n transmitida a trav&eacute;s de los colores tambi&eacute;n est&eacute; disponible sin color, por ejemplo mediante el contexto o por marcadores&quot;";
 choices[0][3] = "&quot;Utilice hojas de estilo para controlar la maquetaci&oacute;n y la presentaci&oacute;n&quot;";
 answers[0] = choices[0][3];
 units[0] = "39";
 comments[0] = "Id Pregunta: 8. ";


//  Id pregunta: 10 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Cu&aacute;l es la decisi&oacute;n del Consejo de las Comunidades Europeas que fija la pol&iacute;tica comunitaria sobre las compras p&uacute;blicas en el sector de la tecnolog&iacute;a de la informaci&oacute;n y de las comunicaciones?:";
 choices[1]= new Array();
 choices[1][0] = "Decisi&oacute;n 87-95-CEE";
 choices[1][1] = "Decreto 88-91-CEE";
 choices[1][2] = "Decreto 88-90-CEE";
 choices[1][3] = "Decisi&oacute;n 91-88-CEE";
 answers[1] = choices[1][0];
 units[1] = "40";
 comments[1] = "Id Pregunta: 10. ";


//  Id pregunta: 20 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;Cu&aacute;les de los siguientes son objetivos importantes que persigue la pol&iacute;tica comunitaria en materia de normalizaci&oacute;n?:";
 choices[2]= new Array();
 choices[2][0] = "Crear un entorno competitivo y defender y proteger la inversi&oacute;n de los usuarios en las tecnolog&iacute;as de la informaci&oacute;n";
 choices[2][1] = "Crear un entorno de trabajo uniforme y normalizado en todas las administraciones europeas y conseguir la plena movilidad de funcionarios a trav&eacute;s de las distintas instituciones de toda la UE";
 choices[2][2] = "Suprimir las barreras de comercio en el sector de tecnolog&iacute;as de informaci&oacute;n en el mercado &uacute;nico con vistas a proteger la industria europea de la materia";
 choices[2][3] = "Las respuestas a) y b) en conjunto";
 answers[2] = choices[2][3];
 units[2] = "40";
 comments[2] = "Id Pregunta: 20. ";


//  Id pregunta: 24 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;C&oacute;mo se denomina la posibilidad de funcionamiento en distintas plataformas sin necesidad de cambios  en el aplicativo?:";
 choices[3]= new Array();
 choices[3][0] = "Interoperatividad";
 choices[3][1] = "Compatibilidad";
 choices[3][2] = "Portabilidad";
 choices[3][3] = "Normalizaci&oacute;n";
 answers[3] = choices[3][2];
 units[3] = "40";
 comments[3] = "Id Pregunta: 24. ";


//  Id pregunta: 36 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;Cu&aacute;l de las siguientes no es una implementaci&oacute;n de POSIX (IEEE 1003)?:";
 choices[4]= new Array();
 choices[4][0] = "HP-UX";
 choices[4][1] = "MINIX";
 choices[4][2] = "Solaris";
 choices[4][3] = "Las 3 anteriores son implementaciones de POSIX";
 answers[4] = choices[4][3];
 units[4] = "40";
 comments[4] = "Id Pregunta: 36. ";


//  Id pregunta: 41 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;Cu&aacute;l de las siguientes respuestas sobre el sistema operativo Unix es falsa?:";
 choices[5]= new Array();
 choices[5][0] = "Fue escrito en los laboratorios Bell de ATT por Ken Thompson en 1969";
 choices[5][1] = "Ultrix es una versi&oacute;n modificada del Unix comercializada por un determinado fabricante de sistemas inform&aacute;ticos ";
 choices[5][2] = "Es el sistema operativo con mayor cantidad de software ofim&aacute;tico desarrollado para &eacute;l";
 choices[5][3] = "La Universidad de Berkeley adapt&oacute; una versi&oacute;n ampliamente utilizada en los primeros a&ntilde;os en los ambientes universitarios";
 answers[5] = choices[5][2];
 units[5] = "40";
 comments[5] = "Id Pregunta: 41. ";


//  Id pregunta: 43 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Cu&aacute;l de los siguientes componentes, incluido en la guia de portabilidad XPG4 est&aacute; tambi&eacute;n en la XPG3?:";
 choices[6]= new Array();
 choices[6][0] = "Servicio de directorio X.500";
 choices[6][1] = "X Window System Application Interface";
 choices[6][2] = "Gateway X.400";
 choices[6][3] = "Servidor NFS";
 answers[6] = choices[6][1];
 units[6] = "40";
 comments[6] = "Id Pregunta: 43. ";


//  Id pregunta: 50 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l de los siguientes no es un organismo nacional para la formulaci&oacute;n de est&aacute;ndares?:";
 choices[7]= new Array();
 choices[7][0] = "ANSI";
 choices[7][1] = "JIS";
 choices[7][2] = "DIN";
 choices[7][3] = "CEN";
 answers[7] = choices[7][3];
 units[7] = "42";
 comments[7] = "Id Pregunta: 50. ";


//  Id pregunta: 55 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Cu&aacute;ntos niveles de adecuaci&oacute;n hay en WAI?";
 choices[8]= new Array();
 choices[8][0] = "3";
 choices[8][1] = "4";
 choices[8][2] = "5";
 choices[8][3] = "6";
 answers[8] = choices[8][0];
 units[8] = "39";
 comments[8] = "Id Pregunta: 55. ";


//  Id pregunta: 56 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Cu&aacute;ntos niveles de prioridad hay definidos en WAI?";
 choices[9]= new Array();
 choices[9][0] = "2";
 choices[9][1] = "3";
 choices[9][2] = "4";
 choices[9][3] = "5";
 answers[9] = choices[9][1];
 units[9] = "39";
 comments[9] = "Id Pregunta: 56. ";


//  Id pregunta: 59 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Existe en Espa&ntilde;a alg&uacute;n centro operativo para realizar Pruebas de Conformidad de acuerdo con el plan CTS de la Uni&oacute;n Europea?:";
 choices[10]= new Array();
 choices[10][0] = "S&iacute;, ya existen varios en funcionamiento en Espa&ntilde;a";
 choices[10][1] = "No, por no haberse implantado este plan en Espa&ntilde;a";
 choices[10][2] = "No, s&oacute;lo existe un centro experimental creado en Bruselas desde 1993";
 choices[10][3] = "No, el plan CTS no se ha puesto todav&iacute;a en pr&aacute;ctica";
 answers[10] = choices[10][0];
 units[10] = "42";
 comments[10] = "Id Pregunta: 59. ";


//  Id pregunta: 61 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Qu&eacute; es ECMA?:";
 choices[11]= new Array();
 choices[11][0] = "La red de correo electr&oacute;nico de la Uni&oacute;n Europea";
 choices[11][1] = "La asociaci&oacute;n europea de fabricantes de ordenadores";
 choices[11][2] = "La entidad europea de desarrollo de est&aacute;ndares de electr&oacute;nica y comunicaciones";
 choices[11][3] = "Nada de lo anterior";
 answers[11] = choices[11][1];
 units[11] = "42";
 comments[11] = "Id Pregunta: 61. ";


//  Id pregunta: 86 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  &iquest;Qu&eacute; tipos de miembros forman X/OPEN (actual Open Group)?:";
 choices[12]= new Array();
 choices[12][0] = "Distintas compa&ntilde;&iacute;as que desarrollan sistemas operativos y hardware";
 choices[12][1] = "Organizaciones de estandarizaci&oacute;n";
 choices[12][2] = "Grupos de usuarios y diversos grupos de inter&eacute;s en tecnolog&iacute;as de la informaci&oacute;n";
 choices[12][3] = "Todos los anteriores";
 answers[12] = choices[12][3];
 units[12] = "42";
 comments[12] = "Id Pregunta: 86. ";


//  Id pregunta: 89 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  &iquest;Qui&eacute;nes son miembros del comit&eacute; JTC-1, responsable de la elaboraci&oacute;n de normas de Tratamiento de la Informaci&oacute;n excepto de los servicios p&uacute;blicos de comunicaciones?:";
 choices[13]= new Array();
 choices[13][0] = "Los pa&iacute;ses pertenecientes a la Uni&oacute;n Europea";
 choices[13][1] = "Las instituciones nacionales de normalizaci&oacute;n y la Comisi&oacute;n de la Uni&oacute;n Europea";
 choices[13][2] = "Una representaci&oacute;n del comit&eacute; directivo de la ISO";
 choices[13][3] = "El JTC-1 es una asociaci&oacute;n abierta, no un comit&eacute; de elaboraci&oacute;n de normas";
 answers[13] = choices[13][1];
 units[13] = "42";
 comments[13] = "Id Pregunta: 89. ";


//  Id pregunta: 96 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  A todos los efectos se consideraran normas europeas las producidas por los organismos:";
 choices[14]= new Array();
 choices[14][0] = "CEN, CENELEC o CEPT/ETSI";
 choices[14][1] = "CENELEC, ETSI o IEC";
 choices[14][2] = "ISO, CEPT o CENELEC";
 choices[14][3] = "AENOR, CEPT o CEN";
 answers[14] = choices[14][0];
 units[14] = "42";
 comments[14] = "Id Pregunta: 96. ";


//  Id pregunta: 102 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  En relaci&oacute;n con los sistemas abiertos, las caracter&iacute;sticas t&eacute;cnicas m&aacute;s comunmente citadas son:";
 choices[15]= new Array();
 choices[15][0] = "Interoperabilidad, consistencia y escalabilidad";
 choices[15][1] = "Interoperabilidad, conectividad e  integrabilidad";
 choices[15][2] = "Consistencia, portabilidad e integrabilidad";
 choices[15][3] = "Interoperabilidad, portabilidad y escalabilidad";
 answers[15] = choices[15][3];
 units[15] = "40";
 comments[15] = "Id Pregunta: 102. ";


//  Id pregunta: 117 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  Dentro de la estructura administrativa de normalizaci&oacute;n comunitaria, el organismo responsable para las telecomunicaciones es:";
 choices[16]= new Array();
 choices[16][0] = "CEN";
 choices[16][1] = "CENELEC";
 choices[16][2] = "ETSI";
 choices[16][3] = "ECMA";
 answers[16] = choices[16][2];
 units[16] = "42";
 comments[16] = "Id Pregunta: 117. ";


//  Id pregunta: 125 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  El American National Standard Institute (ANSI):";
 choices[17]= new Array();
 choices[17][0] = "Es el representante en EE.UU. de la ISO";
 choices[17][1] = "Ha desarrollado el est&aacute;ndar FDDI";
 choices[17][2] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son falsas";
 choices[17][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son verdaderas";
 answers[17] = choices[17][0];
 units[17] = "42";
 comments[17] = "Id Pregunta: 125. ";


//  Id pregunta: 162 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  El representante de Estados Unidos en la ISO es:";
 choices[18]= new Array();
 choices[18][0] = "AENOR";
 choices[18][1] = "BSI";
 choices[18][2] = "IEEE";
 choices[18][3] = "ANSI";
 answers[18] = choices[18][3];
 units[18] = "42";
 comments[18] = "Id Pregunta: 162. ";


//  Id pregunta: 179 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  En el contexto de la normalizaci&oacute;n, pruebas de conformidad y certificaciones, determine cu&aacute;l de las siguientes sentencias es falsa:";
 choices[19]= new Array();
 choices[19][0] = "Las pruebas de conformidad tienen que ser realizadas por un laboratorio independiente";
 choices[19][1] = "Certificaci&oacute;n y homologaci&oacute;n son conceptos equivalentes";
 choices[19][2] = "Una norma es una especificaci&oacute;n t&eacute;cnica aprobada por un organismo autorizado de normalizaci&oacute;n y cuyo cumplimiento no es obligatorio";
 choices[19][3] = "Normalizaci&oacute;n es un conjunto de actividades entre las que se incluyen los m&eacute;todos de medida relativos a las normas";
 answers[19] = choices[19][0];
 units[19] = "42";
 comments[19] = "Id Pregunta: 179. ";


//  Id pregunta: 203 AÃ±o de creación de pregunta: 2004-01-01
 questions[20]= "21)  Organismos de normalizaci&oacute;n europeos son";
 choices[20]= new Array();
 choices[20][0] = "CEN";
 choices[20][1] = "OSI";
 choices[20][2] = "IEEE";
 choices[20][3] = "Ninguna de las anteriores";
 answers[20] = choices[20][0];
 units[20] = "42";
 comments[20] = "Id Pregunta: 203. ";


//  Id pregunta: 208 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  En general la portabilidad de aplicaciones no exige:";
 choices[21]= new Array();
 choices[21][0] = "Utilizaci&oacute;n de lenguajes de programaci&oacute;n estandarizados";
 choices[21][1] = "Limitaci&oacute;n de las llamadas al S.O. desde el marco de una API estandarizada";
 choices[21][2] = "Limitaci&oacute;n de la interacci&oacute;n directa entre los programas y los componentes f&iacute;sicos";
 choices[21][3] = "Utilizaci&oacute;n de microprocesadores de similares caracter&iacute;sticas";
 answers[21] = choices[21][3];
 units[21] = "40";
 comments[21] = "Id Pregunta: 208. ";


//  Id pregunta: 235 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  En relaci&oacute;n con la gu&iacute;a de portabilidad X/Open XPG4, el perfil XPG4 Base:";
 choices[22]= new Array();
 choices[22][0] = "No existe";
 choices[22][1] = "Supone la base de un servidor de base de datos";
 choices[22][2] = "Es equivalente al XPG3 y la base para el resto de los perfiles";
 choices[22][3] = "Para obtenerlo, es necesario certificar el componente XPG4 BSFT";
 answers[22] = choices[22][2];
 units[22] = "40";
 comments[22] = "Id Pregunta: 235. XPG";


//  Id pregunta: 260 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Hay muchas organizaciones diferentes de normalizaci&oacute;n, pero una de las siguientes no est&aacute; entre ellas. &iquest;Cu&aacute;l?:";
 choices[23]= new Array();
 choices[23][0] = "ISO ";
 choices[23][1] = "ANSI  ";
 choices[23][2] = "CEPT";
 choices[23][3] = "OSI";
 answers[23] = choices[23][3];
 units[23] = "42";
 comments[23] = "Id Pregunta: 260. ";


//  Id pregunta: 284 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  La caracter&iacute;stica que poseen los sistemas abiertos de permitir la utilizaci&oacute;n del mismo entorno de &quot;software&quot; en diferentes equipos f&iacute;sicos, desde ordenadores personales hasta grandes ordenadores, se denomina:";
 choices[24]= new Array();
 choices[24][0] = "Conectividad";
 choices[24][1] = "Integrabilidad";
 choices[24][2] = "Escalabilidad";
 choices[24][3] = "Interoperabilidad";
 answers[24] = choices[24][2];
 units[24] = "40";
 comments[24] = "Id Pregunta: 284. ";


//  Id pregunta: 291 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  La Decisi&oacute;n del Consejo 87/95/CEE:";
 choices[25]= new Array();
 choices[25][0] = "Se refiere a normas de tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones relativas al intercambio de informaci&oacute;n y de datos y a la interoperabilidad de los sistemas";
 choices[25][1] = "Ha sido derogada por la Ley de Contratos de las Administraciones P&uacute;blicas";
 choices[25][2] = "Afecta a todas las Administraciones P&uacute;blicas";
 choices[25][3] = "No puede aplicarse directamente por los poderes adjudicadores, siendo necesario su trasposici&oacute;n al ordenamiento jur&iacute;dico espa&ntilde;ol";
 answers[25] = choices[25][0];
 units[25] = "40";
 comments[25] = "Id Pregunta: 291. ";


//  Id pregunta: 294 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  La definici&oacute;n de un entorno com&uacute;n para portabilidad de Aplicaciones fuente (Homogeneidad de Compiladores, APIs&hellip;) es una de las preocupaciones fundamentales del X/Open (actualmente Open Group) que se conoce como:";
 choices[26]= new Array();
 choices[26][0] = "XTI";
 choices[26][1] = "CAE";
 choices[26][2] = "APA";
 choices[26][3] = "GOSIP";
 answers[26] = choices[26][1];
 units[26] = "40";
 comments[26] = "Id Pregunta: 294. ";


//  Id pregunta: 301 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  La escalabilidad es:";
 choices[27]= new Array();
 choices[27][0] = "Un caso particular de la portabilidad";
 choices[27][1] = "La capacidad de utilizar el mismo entorno de software en diferentes clases de ordenadores";
 choices[27][2] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son correctas";
 choices[27][3] = "Una propiedad que se da &uacute;nicamente en el mundo Unix";
 answers[27] = choices[27][2];
 units[27] = "40";
 comments[27] = "Id Pregunta: 301. ";


//  Id pregunta: 336 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  La primera fase a la hora de seleccionar un paquete o aplicaci&oacute;n est&aacute;ndar es:";
 choices[28]= new Array();
 choices[28][0] = "Llevar a cabo una investigaci&oacute;n preliminar";
 choices[28][1] = "Entrar en contacto con los suministradores";
 choices[28][2] = "Definir los requisitos del usuario";
 choices[28][3] = "Personalizar e implantar el paquete";
 answers[28] = choices[28][2];
 units[28] = "40";
 comments[28] = "Id Pregunta: 336. ";


//  Id pregunta: 351 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  La utilizaci&oacute;n de sistemas abiertos permite una serie de ventajas. Se&ntilde;ale cual de las siguientes no es una de ellas:";
 choices[29]= new Array();
 choices[29][0] = "Mejorar, en general, precio/rendimiento";
 choices[29][1] = "Simplificar el mantenimiento debido al reducido n&uacute;mero de posibles proveedores";
 choices[29][2] = "Garantizar la libertad de elecci&oacute;n";
 choices[29][3] = "Proteger la inversi&oacute;n realizada en equipo f&iacute;sico";
 answers[29] = choices[29][1];
 units[29] = "40";
 comments[29] = "Id Pregunta: 351. ";


//  Id pregunta: 359 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  Las normas b&aacute;sicas para constituir un interfaz com&uacute;n de todos los sistemas Unix con las aplicaciones se denominan:";
 choices[30]= new Array();
 choices[30][0] = "OSI";
 choices[30][1] = "ISO";
 choices[30][2] = "POSIX";
 choices[30][3] = "XENIX";
 answers[30] = choices[30][2];
 units[30] = "40";
 comments[30] = "Id Pregunta: 359. ";


//  Id pregunta: 367 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  Los dominios de c&oacute;digo de pa&iacute;s en Internet est&aacute;n establecidos en la norma ISO:";
 choices[31]= new Array();
 choices[31][0] = "9735";
 choices[31][1] = "9075";
 choices[31][2] = "3166";
 choices[31][3] = "8422";
 answers[31] = choices[31][2];
 units[31] = "42";
 comments[31] = "Id Pregunta: 367. ";


//  Id pregunta: 403 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  Respecto a las caracter&iacute;sticas de un sistema abierto (es decir, aqu&eacute;l que cumple con las especificaciones de OSI), podemos decir que:";
 choices[32]= new Array();
 choices[32][0] = "Interoperabilidad es la posibilidad de enlazar ordenadores de distintas marcas con la seguridad de que han de trabajar conjuntamente, dando la sensaci&oacute;n de que funcionan como un &uacute;nico sistema";
 choices[32][1] = "Portabilidad es la posibilidad de que aplicaciones de distintos desarrolladores de software funcionen en m&aacute;quinas de diversos fabricantes";
 choices[32][2] = "Escalabilidad o capacidad de crecimiento es la posibilidad de utilizar el mismo entorno de software en diferentes gamas de ordenadores, desde ordenadores de sobremesa hasta mainframes";
 choices[32][3] = "Todas las respuestas anteriores son correctas";
 answers[32] = choices[32][3];
 units[32] = "40";
 comments[32] = "Id Pregunta: 403. ";


//  Id pregunta: 490 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  Las normas de V.61 a V.92 de la serie V de la ITU-T tratan de:";
 choices[33]= new Array();
 choices[33][0] = "control de errores de transmisi&oacute;n";
 choices[33][1] = "interfaces y m&oacute;dems para la banda vocal";
 choices[33][2] = "transmisi&oacute;n simult&aacute;nea de datos y otras se&ntilde;ales";
 choices[33][3] = "calidad de transmisi&oacute;n y mantenimiento";
 answers[33] = choices[33][2];
 units[33] = "42";
 comments[33] = "Id Pregunta: 490. ";


//  Id pregunta: 501 AÃ±o de creación de pregunta: 2003-01-01
 questions[34]= "35)  En cuanto a la pol&iacute;tica ergon&oacute;mica y medioambiental:";
 choices[34]= new Array();
 choices[34][0] = "Se aplica resoluci&oacute;n del CSAE de 2004";
 choices[34][1] = "No hay nada indicado al respecto";
 choices[34][2] = "Las partes aprobadas de la NORMA ISO 9241 (asumida como norma EN29241 y como norma UNE-EN29241)";
 choices[34][3] = "La decisi&oacute;n 87/95/CEE";
 answers[34] = choices[34][2];
 units[34] = "39";
 comments[34] = "Id Pregunta: 501. ";


//  Id pregunta: 506 AÃ±o de creación de pregunta: 2003-01-01
 questions[35]= "36)  La Decisi&oacute;n 87/95 /CEE cubre:";
 choices[35]= new Array();
 choices[35][0] = "Las especificaciones t&eacute;cnicas para equipos terminales conectados a redes p&uacute;blicas de tlecomunicaci&oacute;n";
 choices[35][1] = "Las especificaciones funcionales de los servicios ofrecidos sobre redes p&uacute;blicas de telecomunicaci&oacute;n";
 choices[35][2] = "Las especificaciones de los equipos que formen parte de las redes de telecomunicaci&oacute;n en s&iacute; mismas";
 choices[35][3] = "Ninguna de las repuestas anteriores es cierta";
 answers[35] = choices[35][1];
 units[35] = "40";
 comments[35] = "Id Pregunta: 506. ";


//  Id pregunta: 639 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  Cu&aacute;l de las siguientes frases es cierta sobre las pautas de accesibilidad WAI en la versi&oacute;n WCAG 2.0:";
 choices[36]= new Array();
 choices[36][0] = "La Prioridad 1 es para los puntos de verificaci&oacute;n que el desarrollador debe satisfacer.";
 choices[36][1] = "Las pautas WAI son una especificaci&oacute;n de W3C, al igual que HTML, CSS, XML y SGML";
 choices[36][2] = "La Prioridad 3 el desarrollador puede satisfacerla; de lo contrario, algunas personas hallar&aacute;n dificultades para acceder a la informaci&oacute;n.";
 choices[36][3] = "El nivel de adecuaci&oacute;n &quot;Doble A&quot; (AA) incluye los puntos de verificaci&oacute;n de prioridad 1 y al menos uno de prioridad 2.";
 answers[36] = choices[36][2];
 units[36] = "39";
 comments[36] = "Id Pregunta: 639. ";


//  Id pregunta: 641 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  Cu&aacute;l de las siguientes afirmaciones sobre sistemas abiertos es incorrecta:";
 choices[37]= new Array();
 choices[37][0] = "Portabilidad consiste en la posibilidad de utilizar el mismo entorno de software en diferentes gamas de ordenadores, desde ordenadores de sobremesa hasta mainframes.";
 choices[37][1] = "lnteroperabilidad consiste en la posibilidad de enlazar distintos ordenadores.";
 choices[37][2] = "Una de las principales ventajas de usar sistemas abiertos consiste en proteger la inversi&oacute;n en equipos f&iacute;sicos, software, formaci&oacute;n y usuarios.";
 choices[37][3] = "Con la utilizaci&oacute;n de sistemas abiertos se persigue evitar el 's&iacute;ndrome de cliente cautivo'.";
 answers[37] = choices[37][0];
 units[37] = "40";
 comments[37] = "Id Pregunta: 641. ";


//  Id pregunta: 642 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  Cu&aacute;l de las siguientes afirmaciones sobre sistemas abiertos es incorrecta:";
 choices[38]= new Array();
 choices[38][0] = "El modelo b&aacute;sico de referencia para la Interconexi&oacute;n de Sistemas Abiertos de ISO consiste en la arquitectura OSI, que se basa en las especificaciones de IEEE.";
 choices[38][1] = "La instituci&oacute;n p&uacute;blica IEEE genera las normas m&aacute;s avanzados dentro del campo de estandarizaci&oacute;n de redes locales.";
 choices[38][2] = "El programa IDABC tiene como uno de sus fines promover la colaboraci&oacute;n entre las administraciones p&uacute;blicas de los distintos pa&iacute;ses europeos.";
 choices[38][3] = "NIST fija los est&aacute;ndares federales de tratamiento de la informaci&oacute;n que las agencias gubernamentales deben seguir en la contrataci&oacute;n de software y hardware.";
 answers[38] = choices[38][1];
 units[38] = "40";
 comments[38] = "Id Pregunta: 642. ";


//  Id pregunta: 645 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  Cu&aacute;l de las siguientes no es una excepci&oacute;n admitida por la Decisi&oacute;n 87/95/CEE para la utilizaci&oacute;n de especificaciones no normalizadas:";
 choices[39]= new Array();
 choices[39][0] = "Por cuestiones de continuidad de funcionamiento, pero con la existencia de un plan estrat&eacute;gico de transici&oacute;n.";
 choices[39][1] = "Por la existencia de una norma 'de facto' ampliamente aceptada.";
 choices[39][2] = "Si se demuestra que la satisfacci&oacute;n de la norma tiene un coste excesivo.";
 choices[39][3] = "Por cuestiones de Innovaci&oacute;n.";
 answers[39] = choices[39][1];
 units[39] = "40";
 comments[39] = "Id Pregunta: 645. ";


//  Id pregunta: 647 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  Cu&aacute;l de las siguientes afirmaciones sobre AENOR es incorrecta:";
 choices[40]= new Array();
 choices[40][0] = "Mediante un Real Decreto AENOR fue reconocida como la &uacute;nica entidad aprobada para desarrollar las tareas de normalizaci&oacute;n y certificaci&oacute;n en nuestro pa&iacute;s.";
 choices[40][1] = "Las normas espa&ntilde;olas que genera AENOR se denominan Normas UNE.";
 choices[40][2] = "AENOR es miembro de pleno derecho, y representa a nuestro pa&iacute;s en los Organismos Internacionales, europeos y regionales de Normalizaci&oacute;n (ISO, IEC, CEN, CENELEC, ETSI, COPANT).";
 choices[40][3] = "AENOR est&aacute; acreditada por la Entidad Nacional de Acreditaci&oacute;n (ENAC) como la &uacute;nica entidad capaz de certificar ISO 9000 en Espa&ntilde;a.";
 answers[40] = choices[40][3];
 units[40] = "42";
 comments[40] = "Id Pregunta: 647. ";


//  Id pregunta: 650 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  Para que la certificaci&oacute;n ofrezca garant&iacute;as de imparcialidad resulta esencial:";
 choices[41]= new Array();
 choices[41][0] = "Que est&eacute; homologada";
 choices[41][1] = "Que la expida o la controle un organismo independiente";
 choices[41][2] = "Que la controle un organismo administrativo";
 choices[41][3] = "Que la expida AENOR";
 answers[41] = choices[41][1];
 units[41] = "42";
 comments[41] = "Id Pregunta: 650. ";


//  Id pregunta: 660 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  Se&ntilde;ale cual de las siguientes normas se debe tener en cuenta en el Area de Seguridad de una organizaci&oacute;n:";
 choices[42]= new Array();
 choices[42][0] = "ISO 27002";
 choices[42][1] = "ISO 14508 sobre perfiles de protecci&oacute;n";
 choices[42][2] = "ISO 14848";
 choices[42][3] = "UNE-ISO 17799";
 answers[42] = choices[42][0];
 units[42] = "42";
 comments[42] = "Id Pregunta: 660. ";


//  Id pregunta: 663 AÃ±o de creación de pregunta: 2006-01-01
 questions[43]= "44)  Qu&eacute; organizaci&oacute;n normalizadora se dedica a trabajar en la extensi&oacute;n del est&aacute;ndar POSIX (Portable Operating System Interface for Computer Environments):";
 choices[43]= new Array();
 choices[43][0] = "X/OPEN";
 choices[43][1] = "ACE";
 choices[43][2] = "OSF";
 choices[43][3] = "IEEE";
 answers[43] = choices[43][3];
 units[43] = "40";
 comments[43] = "Id Pregunta: 663. ";


//  Id pregunta: 2989 AÃ±o de creación de pregunta: 2004-01-01
 questions[44]= "45)  &iquest;Qu&eacute; norma se encargaga de la estabdarizaci&oacute;n de redes inal&aacute;mbricas de &aacute;rea personal?";
 choices[44]= new Array();
 choices[44][0] = "El IEEE 802.11";
 choices[44][1] = "El IEEE 802.15";
 choices[44][2] = "El AUT-C";
 choices[44][3] = "El UIT-T E-164";
 answers[44] = choices[44][1];
 units[44] = "42";
 comments[44] = "Id Pregunta: 2989. ";


//  Id pregunta: 3210 AÃ±o de creación de pregunta: 2002-01-01
 questions[45]= "46)  El control de errores en la serie V de la ITU-T se trata en:";
 choices[45]= new Array();
 choices[45][0] = "V.1-V.8";
 choices[45][1] = "V.50-V.59";
 choices[45][2] = "V.100-V.140";
 choices[45][3] = "V.40-V.44";
 answers[45] = choices[45][3];
 units[45] = "42";
 comments[45] = "Id Pregunta: 3210. ";


//  Id pregunta: 4452 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  &iquest;Cual es el miembro espa&ntilde;ol de ISO?";
 choices[46]= new Array();
 choices[46][0] = "IRANOR";
 choices[46][1] = "AENOR";
 choices[46][2] = "UNE";
 choices[46][3] = "CSl";
 answers[46] = choices[46][1];
 units[46] = "42";
 comments[46] = "Id Pregunta: 4452. ";


//  Id pregunta: 4508 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  Un organismo europeo de normalizaci&oacute;n, tiene como misi&oacute;n producir normas de telecomunicaciones para hoy y para el futuro. Sus siglas son:";
 choices[47]= new Array();
 choices[47][0] = "ETSI.";
 choices[47][1] = "CEN";
 choices[47][2] = "CENELEC";
 choices[47][3] = "CEPT";
 answers[47] = choices[47][0];
 units[47] = "42";
 comments[47] = "Id Pregunta: 4508. ";


//  Id pregunta: 4692 AÃ±o de creación de pregunta: 2007-01-01
 questions[48]= "49)  &iquest;Qu&eacute; no es una ventaja de los sistemas abiertos seg&uacute;n la Estrategia de Sistemas Abiertos de la Administraci&oacute;n del Estado?";
 choices[48]= new Array();
 choices[48][0] = "Libertad de elecci&oacute;n";
 choices[48][1] = "Protecci&oacute;n de la inversi&oacute;n";
 choices[48][2] = "Mejor relaci&oacute;n calidad/precio";
 choices[48][3] = "Garant&iacute;a de comunicaci&oacute;n e interoperabilidad de los sistemas";
 answers[48] = choices[48][2];
 units[48] = "40";
 comments[48] = "Id Pregunta: 4692. Examen 2006 JCYL";


//  Id pregunta: 4756 AÃ±o de creación de pregunta: 2007-01-01
 questions[49]= "50)  &iquest;Cu&aacute;l de las siguientes no es una directriz de Accesibilidad para el Contenido Web (WCAG 1.0) del W3C?";
 choices[49]= new Array();
 choices[49][0] = "Asegure el control del usuario de los cambios de contenido que dependen del tiempo";
 choices[49][1] = "Utilice soluciones provisionales";
 choices[49][2] = "Aseg&uacute;rese de que los documentos son claros y simples";
 choices[49][3] = "Todas lo son";
 answers[49] = choices[49][3];
 units[49] = "39";
 comments[49] = "Id Pregunta: 4756. ";


//  Id pregunta: 4817 AÃ±o de creación de pregunta: 2007-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos de ISOC (Internet Society) tiene la responsabilidad de desarrollar lasespecificaciones de est&aacute;ndares en Internet?";
 choices[50]= new Array();
 choices[50][0] = "IESG (Internet Engineering Steering Group)";
 choices[50][1] = "IETF (Internet Engineering Task Force)";
 choices[50][2] = "IAB (Internet Architecture Board)";
 choices[50][3] = "IANA (Internet Assigned Number Authority)";
 answers[50] = choices[50][1];
 units[50] = "112,42";
 comments[50] = "Id Pregunta: 4817. ";


//  Id pregunta: 4877 AÃ±o de creación de pregunta: 2007-01-01
 questions[51]= "52)  Una Directiva comunitaria que, en materia de salud en el trabajo, es aplicable directamente a los productosinform&aacute;ticos y establece disposiciones m&iacute;nimas de seguridad y salud relativas al trabajo con equipos que incluyenpantallas de visualizaci&oacute;n, es la:";
 choices[51]= new Array();
 choices[51][0] = "Directiva 90/270/CEE, de 29 de mayo";
 choices[51][1] = "Directiva 95/220/CEE, de 14 de abril";
 choices[51][2] = "Directiva 198/130/CEE, de 30 de octubre";
 choices[51][3] = "Ninguna de las anteriores";
 answers[51] = choices[51][0];
 units[51] = "39";
 comments[51] = "Id Pregunta: 4877. ";


//  Id pregunta: 4954 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  &iquest;Qu&eacute; t&eacute;cnica no es aplicable para dise&ntilde;ar un producto web usable y centrado en el usuario?:";
 choices[52]= new Array();
 choices[52][0] = "Card Sorting.";
 choices[52][1] = "L&oacute;gica Fuzzy.";
 choices[52][2] = "Eye Tracking.";
 choices[52][3] = "An&aacute;lisis de Secuencia.";
 answers[52] = choices[52][1];
 units[52] = "39";
 comments[52] = "Id Pregunta: 4954. Examen TIC B 2007";


//  Id pregunta: 5004 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  &iquest;Cu&aacute;l de estas afirmaciones sobre accesibilidad es cierta de acuerdo con las gu&iacute;as del W3C?";
 choices[53]= new Array();
 choices[53][0] = "Una p&aacute;gina web accesible debe tener textos equivalentes para cualquier elemento no textual";
 choices[53][1] = "Un p&aacute;gina web accesible debe contener solo texto";
 choices[53][2] = "Una p&aacute;gina web accesible no debe utilizar colores";
 choices[53][3] = "Una p&aacute;gina web accesible debe utilizar un &uacute;nico tipo de letra establecido en estas gu&iacute;as";
 answers[53] = choices[53][0];
 units[53] = "39";
 comments[53] = "Id Pregunta: 5004. Examen TIC A 2007";


//  Id pregunta: 5074 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa?:";
 choices[54]= new Array();
 choices[54][0] = "El W3C tiene una sede en Espa&ntilde;a";
 choices[54][1] = "W3C es un organismo estadounidense";
 choices[54][2] = "El Ministerio de Administraciones P&uacute;blicas es miembro del W3C";
 choices[54][3] = "W3C ha desarrollado mecanismos para evaluar el nivel de accesibilidad de los sitios Web";
 answers[54] = choices[54][1];
 units[54] = "39";
 comments[54] = "Id Pregunta: 5074. Examen TIC A 2007";


//  Id pregunta: 5117 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  Las normas internacionales en materia de Seguridad de la informaci&oacute;n las publica:";
 choices[55]= new Array();
 choices[55][0] = "AENOR";
 choices[55][1] = "ISO";
 choices[55][2] = "EIC";
 choices[55][3] = "NIS";
 answers[55] = choices[55][1];
 units[55] = "42";
 comments[55] = "Id Pregunta: 5117. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5175 AÃ±o de creación de pregunta: 2003-01-01
 questions[56]= "57)  Respecto a los organismos y procesos de normalizaci&oacute;n podemos afirmar:";
 choices[56]= new Array();
 choices[56][0] = "La adopci&oacute;n de las normas internacionales elaboradas en ISO e EIC es obligatoria para los pa&iacute;ses miembros de la UE.";
 choices[56][1] = "Los organismos europeos de normalizaci&oacute;n obligan a sus miembros a adoptar las normas europeas que ellos elaboren.";
 choices[56][2] = "AENOR es una entidad p&uacute;blica empresarial dependiente del Ministerio de Industria.";
 choices[56][3] = "Las normas publicadas por AENOR se conocen como normas IEC.";
 answers[56] = choices[56][1];
 units[56] = "42";
 comments[56] = "Id Pregunta: 5175. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5462 AÃ±o de creación de pregunta: 2003-01-01
 questions[57]= "58)  La gesti&oacute;n de nombres de dominio bajo el c&oacute;digo correspondientes a Espa&ntilde;a &quot;.es&quot; la tiene legalmente encomendada";
 choices[57]= new Array();
 choices[57][0] = "Internic.es";
 choices[57][1] = "Red.es";
 choices[57][2] = "Mityc.es";
 choices[57][3] = "Netsol.es";
 answers[57] = choices[57][1];
 units[57] = "42";
 comments[57] = "Id Pregunta: 5462. Castilla y Le&oacute;n";


//  Id pregunta: 5551 AÃ±o de creación de pregunta: 2003-01-01
 questions[58]= "59)  &iquest;Qu&eacute; considera que NO es una ventaja de la construcci&oacute;n de portales accesibles?";
 choices[58]= new Array();
 choices[58][0] = "Aumento de la usabilidad";
 choices[58][1] = "Facilita la independencia de dispositivo";
 choices[58][2] = "Simplifica el desarrollo";
 choices[58][3] = "Todas las anteriores son correctas.";
 answers[58] = choices[58][3];
 units[58] = "39";
 comments[58] = "Id Pregunta: 5551. ";


//  Id pregunta: 5710 AÃ±o de creación de pregunta: 2009-01-01
 questions[59]= "60)  En las iniciales IDABC, la &quot;I&quot; y la &quot;D&quot; corresonden a:";
 choices[59]= new Array();
 choices[59][0] = "Innovative y Delivery";
 choices[59][1] = "Interoperable y Delivery";
 choices[59][2] = "Innovative y Development";
 choices[59][3] = "Interoperable y Development";
 answers[59] = choices[59][1];
 units[59] = "40";
 comments[59] = "Id Pregunta: 5710. ";


//  Id pregunta: 5925 AÃ±o de creación de pregunta: 2009-01-01
 questions[60]= "61)  &iquest;Cu&aacute;l de las siguientes NO es una pauta WAI de accesibilidad para diferentes componentes?";
 choices[60]= new Array();
 choices[60][0] = "ATAG";
 choices[60][1] = "UAAG";
 choices[60][2] = "WCED";
 choices[60][3] = "WCAG";
 answers[60] = choices[60][2];
 units[60] = "39";
 comments[60] = "Id Pregunta: 5925. MAP 2008 A1";


//  Id pregunta: 5946 AÃ±o de creación de pregunta: 2009-01-01
 questions[61]= "62)  &iquest;qu&eacute; est&aacute;ndar define usuabilidad como &ldquo;La efectividad, eficiencia y satisfacci&oacute;n con la que un producto permite alcanzar objetivos espec&iacute;ficos a usuarios espec&iacute;ficos en un contexto de uso espec&iacute;fico&rdquo;?";
 choices[61]= new Array();
 choices[61][0] = "ISO/IEC 9241-5";
 choices[61][1] = "ISO/IEC 9241-11";
 choices[61][2] = "ISO/IEC 9243-5";
 choices[61][3] = "ISO/IEC 9243-11";
 answers[61] = choices[61][1];
 units[61] = "39";
 comments[61] = "Id Pregunta: 5946. ";


//  Id pregunta: 6098 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  &iquest;Cu&aacute;les son las dimensiones de la interoperabilidad seg&uacute;n el Marco Europeo de Interoperabilidad?";
 choices[62]= new Array();
 choices[62][0] = "Organizativa, sem&aacute;ntica y t&eacute;cnica.";
 choices[62][1] = "Legal, sem&aacute;ntica y econ&oacute;mica.";
 choices[62][2] = "Organizativa, ling&uuml;&iacute;stica e inform&aacute;tica.";
 choices[62][3] = "Ninguna, porque el Marco Europeo de Interoperabilidad no est&aacute; todav&iacute;a adoptado por la Comisi&oacute;n Europea.";
 answers[62] = choices[62][0];
 units[62] = "40";
 comments[62] = "Id Pregunta: 6098. TIC A 2009";


//  Id pregunta: 6415 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  De los siguientes, &iquest;Cu&aacute;l no es un estandar del W3C?";
 choices[63]= new Array();
 choices[63][0] = "DOM";
 choices[63][1] = "P3P";
 choices[63][2] = "PVG";
 choices[63][3] = "HTML";
 answers[63] = choices[63][2];
 units[63] = "39";
 comments[63] = "Id Pregunta: 6415. NULL";


//  Id pregunta: 6419 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  Las pautas de accesibilidad de agentes de usuario WAI-W3C, se conocen como:";
 choices[64]= new Array();
 choices[64][0] = "WCAG";
 choices[64][1] = "UAAG";
 choices[64][2] = "ATAG";
 choices[64][3] = "TAW";
 answers[64] = choices[64][1];
 units[64] = "39";
 comments[64] = "Id Pregunta: 6419. NULL";


//  Id pregunta: 6443 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  La posibilidad de que las aplicaciones software puedan funcionar en m&aacute;quinas de distintos fabricantes y arquitecturas se denomina:";
 choices[65]= new Array();
 choices[65][0] = "Adaptabilidad";
 choices[65][1] = "Portabilidad";
 choices[65][2] = "Interoperabilidad";
 choices[65][3] = "Escalabilidad";
 answers[65] = choices[65][1];
 units[65] = "40";
 comments[65] = "Id Pregunta: 6443. Castilla La Mancha 2009";


//  Id pregunta: 6445 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  La organizaci&oacute;n intergubernamental cuyo objetivo es coordinar el desarrollo y operabilidad de las redes y servicios de telecomunicaciones, se denomina:";
 choices[66]= new Array();
 choices[66][0] = "ITU";
 choices[66][1] = "IEC";
 choices[66][2] = "ETSI";
 choices[66][3] = "Ninguna de las anteriores";
 answers[66] = choices[66][0];
 units[66] = "42";
 comments[66] = "Id Pregunta: 6445. Castilla La Mancha 2009";


//  Id pregunta: 7326 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  &iquest;Cu&aacute;l de los siguientes no es un organismo europeo de normalizaci&oacute;n?";
 choices[67]= new Array();
 choices[67][0] = "CEN";
 choices[67][1] = "SETSI";
 choices[67][2] = "CENELEC";
 choices[67][3] = "Todos los anteriores son organismos europeos de normalizaci&oacute;n";
 answers[67] = choices[67][1];
 units[67] = "42";
 comments[67] = "Id Pregunta: 7326. NULL";


//  Id pregunta: 7331 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)  Entre los documentos publicados por ISO NO se encuentra:";
 choices[68]= new Array();
 choices[68][0] = "Est&aacute;ndares Internacionales";
 choices[68][1] = "Informes T&eacute;cnicos";
 choices[68][2] = "Recomendaciones";
 choices[68][3] = "Gu&iacute;as ISO";
 answers[68] = choices[68][2];
 units[68] = "42";
 comments[68] = "Id Pregunta: 7331. NULL";


//  Id pregunta: 7334 AÃ±o de creación de pregunta: 2010-01-01
 questions[69]= "70)  Las RFC (Request for Comments) son publicadas por";
 choices[69]= new Array();
 choices[69][0] = "W3C";
 choices[69][1] = "IEEE";
 choices[69][2] = "IETF";
 choices[69][3] = "IEC";
 answers[69] = choices[69][2];
 units[69] = "42";
 comments[69] = "Id Pregunta: 7334. NULL";


//  Id pregunta: 7335 AÃ±o de creación de pregunta: 2010-01-01
 questions[70]= "71)  &iquest;Cu&aacute;l de las siguientes organizaciones espa&ntilde;olas no es miembro de ETSI?";
 choices[70]= new Array();
 choices[70][0] = "AENOR";
 choices[70][1] = "TELEFONICA S.A.";
 choices[70][2] = "UNIVERSIDAD AUT&Oacute;NOMA DE MADRID";
 choices[70][3] = "MINISTERIO DE INDUSTRIA, TURISMO y COMERCIO";
 answers[70] = choices[70][0];
 units[70] = "42";
 comments[70] = "Id Pregunta: 7335. http://portal.etsi.org/Portal_IntegrateAppli/QueryResult.asp?Alone=1&amp;SortBy=&amp;SortDirection=&amp;Param=#";


//  Id pregunta: 8229 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  &iquest;Cu&aacute;l de los siguientes principios NO est&aacute; definido en el Marco Europeo de Interoperabilidad?:";
 choices[71]= new Array();
 choices[71][0] = "Seguridad.";
 choices[71][1] = "Subsidiariedad.";
 choices[71][2] = "Compatibilidad del hardware.";
 choices[71][3] = "Protecci&oacute;n de datos de car&aacute;cter personal.";
 answers[71] = choices[71][2];
 units[71] = "40";
 comments[71] = "Id Pregunta: 8229. Examen TIC A1 2010";


//  Id pregunta: 8361 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  En el contexto de herramientas de evaluaci&oacute;n de la accesibilidad web, se&ntilde;ale la herramienta INCORRECTA: ";
 choices[72]= new Array();
 choices[72][0] = "WAVE.";
 choices[72][1] = "TrueCrypt.";
 choices[72][2] = "CSS Analyser.";
 choices[72][3] = "TAW.";
 answers[72] = choices[72][1];
 units[72] = "39";
 comments[72] = "Id Pregunta: 8361. Examen TIC A2 2010";


//  Id pregunta: 8370 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  La norma UNE 139802:2003 establece requisitos de accesibilidad del software de los ordenadores para !as personas con discapacidad, agrupados en:";
 choices[73]= new Array();
 choices[73][0] = "7 categor&iacute;as: Teclado, dispositivos apuntadores, pantalla, sonido y rnultimedia, notificaci&oacute;n al usuario, informaci&oacute;n de objetos, tiempo.";
 choices[73][1] = "8 categor&iacute;as: Teclado, dispositivos apuntadores, pantalla, sonido y rnultimedia, notificaci&oacute;n al usuario, informaci&oacute;n de objetos, tiempo, documentaci&oacute;n.";
 choices[73][2] = "11 categor&iacute;as: Principios generales, teclado, dispositivos apuntadores, pantalla, sonido, multimedia, notificaci&oacute;n al usuario, informaci&oacute;n de objetos, tiempo, documentaci&oacute;n, otros";
 choices[73][3] = "10 categor&iacute;as: Principios generales, teclado, dispositivos apuntadores, pantalla, sonido y multimedia, notificaci&oacute;n al usuario, informaci&oacute;n de objetos, tiempo, documentaci&oacute;n, otros.";
 answers[73] = choices[73][3];
 units[73] = "39";
 comments[73] = "Id Pregunta: 8370. Examen TIC A2 2010";


//  Id pregunta: 8804 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  &iquest;Cu&aacute;l es el comit&eacute; del W3C encargado de promover y estandarizar la accesibilidad Web?";
 choices[74]= new Array();
 choices[74][0] = "WAI";
 choices[74][1] = "WCAG";
 choices[74][2] = "ATAG";
 choices[74][3] = "UAAG";
 answers[74] = choices[74][0];
 units[74] = "39";
 comments[74] = "Id Pregunta: 8804. Examen UPM A2 2011";


//  Id pregunta: 8848 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  &iquest;Cu&aacute;l de las siguientes organizaciones de estandarizaci&oacute;n NO es internacional?";
 choices[75]= new Array();
 choices[75][0] = "IEEE";
 choices[75][1] = "ISO";
 choices[75][2] = "IEC";
 choices[75][3] = "ANSI";
 answers[75] = choices[75][3];
 units[75] = "42";
 comments[75] = "Id Pregunta: 8848. Examen UC3M 2010";


//  Id pregunta: 9038 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  Indique la pauta de accesibilidad correcta seg&uacute;n la norma WCAG 1.0";
 choices[76]= new Array();
 choices[76][0] = "Dise&ntilde;o dependiente del dispositivo";
 choices[76][1] = "Evite parpadeos en la pantalla";
 choices[76][2] = "Utilice siempre CSS";
 choices[76][3] = "No se base s&oacute;lo en el color";
 answers[76] = choices[76][3];
 units[76] = "39";
 comments[76] = "Id Pregunta: 9038. ";


//  Id pregunta: 9054 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  &iquest;Cual de las siguientes NO es una actividad del estadard ISO 13407?";
 choices[77]= new Array();
 choices[77][0] = "Generaci&oacute;n de las soluciones de dise&ntilde;o";
 choices[77][1] = "Di&aacute;logo simple y natural";
 choices[77][2] = "Producci&oacute;n de soluciones de dise&ntilde;o";
 choices[77][3] = "Entender y especificar el contexto de uso.";
 answers[77] = choices[77][0];
 units[77] = "39";
 comments[77] = "Id Pregunta: 9054. NULL";


//  Id pregunta: 9057 AÃ±o de creación de pregunta: 2011-01-01
 questions[78]= "79)  &iquest;Cual de las siguientes NO es una herramienta de revisi&oacute;n de la usabilidad ?";
 choices[78]= new Array();
 choices[78][0] = "ACCWarning";
 choices[78][1] = "A-PRompt";
 choices[78][2] = "HiCaption";
 choices[78][3] = "MAGPie";
 answers[78] = choices[78][0];
 units[78] = "39";
 comments[78] = "Id Pregunta: 9057. NULL";


//  Id pregunta: 9078 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  &quot;Ayuda a la entrada de datos&quot; es una pauta enmarcada en el principio:";
 choices[79]= new Array();
 choices[79][0] = "Perceptible. ";
 choices[79][1] = "Operable. ";
 choices[79][2] = "Comprensible.";
 choices[79][3] = "Robusto.";
 answers[79] = choices[79][2];
 units[79] = "39";
 comments[79] = "Id Pregunta: 9078. ";


//  Id pregunta: 9280 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  Se&ntilde;ale la FALSA respecto a los criterios de seguridad, normalizaci&oacute;n y conservaci&oacute;n.";
 choices[80]= new Array();
 choices[80][0] = "Son las recomendaciones sobre normalizaci&oacute;n e interoperabilidad seguidas por la administraci&oacute;n.";
 choices[80][1] = "Fueron elaboradas por el Consejo Superior de Inform&aacute;tica a ra&iacute;z del RD 209/2003.";
 choices[80][2] = "Consta de tres libros o gu&iacute;as: criterios de seguridad, de normalizaci&oacute;n y de conservaci&oacute;n.";
 choices[80][3] = "Todas son verdaderas. ";
 answers[80] = choices[80][3];
 units[80] = "40";
 comments[80] = "Id Pregunta: 9280. ";


//  Id pregunta: 9290 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  &iquest;A qu&eacute; norma ISO corresponde el est&aacute;ndar del ITU X.200? ";
 choices[81]= new Array();
 choices[81][0] = "ISO 9945";
 choices[81][1] = "ISO 7498";
 choices[81][2] = "ISO 9126";
 choices[81][3] = "ISO 15408";
 answers[81] = choices[81][1];
 units[81] = "42";
 comments[81] = "Id Pregunta: 9290. ";


//  Id pregunta: 9748 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  &iquest;Cu&aacute;l de las siguientes pautas est&aacute; asociada al principio &quot;comprensible&quot; de la WCAG 2.0?";
 choices[82]= new Array();
 choices[82][0] = "Alternativas textuales.";
 choices[82][1] = "Distinguible.";
 choices[82][2] = "Predecible.";
 choices[82][3] = "Compatible.";
 answers[82] = choices[82][2];
 units[82] = "39";
 comments[82] = "Id Pregunta: 9748. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9939 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  De acuerdo con el programa IDABC, entre los principios que define el Marco Europeo de Interoperabilidad NO se encuentra:";
 choices[83]= new Array();
 choices[83][0] = "el multiling&uuml;ismo.";
 choices[83][1] = "la accesibilidad.";
 choices[83][2] = "el procedimiento compartido.";
 choices[83][3] = "la subsidiaridad.";
 answers[83] = choices[83][2];
 units[83] = "40";
 comments[83] = "Id Pregunta: 9939. TIC A1, Examen 2013";


//  Id pregunta: 10351 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  En relaci&oacute;n con las pautas de accesibilidad WCAG 2.0, indique la respuesta correcta:";
 choices[84]= new Array();
 choices[84][0] = "Para cumplir nivel AA, la presentaci&oacute;n visual de texto e im&aacute;genes de texto debe tener una relaci&oacute;n de contraste de, al menos, 4.5:1";
 choices[84][1] = "Lo anterior es cierto, pero para nivel A";
 choices[84][2] = "Lo anterior es cierto, pero para nivel AAA";
 choices[84][3] = "Lo anterior es cierto, pero a&ntilde;adiendo que no aplica a logotipos, textos grandes y textos incidentales";
 answers[84] = choices[84][3];
 units[84] = "39";
 comments[84] = "Id Pregunta: 10351. Consultar WCAG Pauta 1.4.3 Contraste (m&iacute;nimo)";


//  Id pregunta: 10354 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  &iquest;Cu&aacute;l es el &oacute;rgano encargado de supervisar y mejorar la accesibilidad de los portales web de la Administraci&oacute;n?";
 choices[85]= new Array();
 choices[85][0] = "Ministerio de Industria, Energ&iacute;a y Turismo";
 choices[85][1] = "Ministerio de la Presidencia";
 choices[85][2] = "El Observatorio de Accesibilidad, iniciativa del Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[85][3] = "El Observatorio Estatal de la Discapacidad (OED), iniciativa del Ministerio de Sanidad, Servicios Sociales e Igualdad";
 answers[85] = choices[85][2];
 units[85] = "39";
 comments[85] = "Id Pregunta: 10354. http://administracionelectronica.gob.es/pae_Home/pae_Estrategias/pae_Accesibilidad/pae_Observatorio_de_Accesibilidad.html";


//  Id pregunta: 10355 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  En relaci&oacute;n con el programa ISA (soluciones de interoperabilidad para las administraciones p&uacute;blicas europeas), se&ntilde;ale la respuesta err&oacute;nea:";
 choices[86]= new Array();
 choices[86][0] = "Abarca el per&iacute;odo 2010-2020";
 choices[86][1] = "Actuaciones destacadas dentro del marco del programa ISA son la red transeuropea sTESTA o el apoyo al proyecto STORK";
 choices[86][2] = "Tiene como &aacute;mbito las administraciones p&uacute;blicas europeas, incluidas las administraciones regionales y locales y las instituciones y &oacute;rganos comunitarios";
 choices[86][3] = "Su base legal se recoge en la Decisi&oacute;n 922/2009/CE";
 answers[86] = choices[86][0];
 units[86] = "40";
 comments[86] = "Id Pregunta: 10355. El programa ISA abarca el per&iacute;odo 2010-2015";


//  Id pregunta: 10356 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  &iquest;C&uacute;al de los siguientes no es un principio del programa ISA (soluciones de interoperabilidad para las administraciones p&uacute;blicas europeas)?";
 choices[87]= new Array();
 choices[87][0] = "Neutralidad con respecto a la tecnolog&iacute;a y adaptabilidad";
 choices[87][1] = "Reutilizaci&oacute;n";
 choices[87][2] = "Privacidad y protecci&oacute;n de los datos personales";
 choices[87][3] = "Fomento del uso de software libre y sistemas abiertos";
 answers[87] = choices[87][3];
 units[87] = "40";
 comments[87] = "Id Pregunta: 10356. El programa ISA se basa en los siguientes principios: neutralidad con respecto a la tecnolog&iacute;a y adaptabilidad, apertura, reutilizaci&oacute;n, privacidad y protecci&oacute;n de los datos personales, seguridad";


//  Id pregunta: 10360 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  &iquest;Qu&eacute; organismos pueden participar en la ETSI?";
 choices[88]= new Array();
 choices[88][0] = "&Uacute;nicamente los Estados Miembros a trav&eacute;s del organismo p&uacute;blico que designen. En el caso de Espa&ntilde;a ser&iacute;a a trav&eacute;s de la SETSI.";
 choices[88][1] = "Pueden participar tanto las Administraciones P&uacute;blicas como operadores de red, la industria, centros de investigaci&oacute;n o los usuarios de los servicios de telecomunicaci&oacute;n";
 choices[88][2] = "&Uacute;nicamente los organismos nacionales de certificaci&oacute;n m&aacute;s representativos. En el caso de Espa&ntilde;a ser&iacute;a AENOR";
 choices[88][3] = "En el caso de Espa&ntilde;a, &uacute;nicamente la SETSI y AENOR";
 answers[88] = choices[88][1];
 units[88] = "42";
 comments[88] = "Id Pregunta: 10360. ETSI es un organismo sin &aacute;nimo de lucro creado al objeto de disponer del foro adecuado para la elaboraci&oacute;n de las normas de telecomunicaci&oacute;n que faciliten la estandarizaci&oacute;n del sector, y por lo tanto el avance hacia el Mercado &Uacute;nico Europeo";


//  Id pregunta: 10361 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  Dentro de las recomendaciones de la UIT-T (Uni&oacute;n Internacional de Telecomunicaciones), se&ntilde;ale la correspondencia incorrecta:";
 choices[89]= new Array();
 choices[89][0] = "Serie V: Comunicaci&oacute;n de datos por la red telef&oacute;nica";
 choices[89][1] = "Serie X: Redes de datos, comunicaciones de sistemas abiertos y seguridad";
 choices[89][2] = "Serie E: Sistemas y medios de transmisi&oacute;n, sistemas y redes digitales";
 choices[89][3] = "Serie I: Red digital de servicios integrados";
 answers[89] = choices[89][2];
 units[89] = "42";
 comments[89] = "Id Pregunta: 10361. Serie E: Explotaci&oacute;n general de la red, servicio telef&oacute;nico, explotaci&oacute;n del servicio y factores humanos";


//  Id pregunta: 10363 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  En relaci&oacute;n con la SETSI, se&ntilde;ale la respuesta incorrecta:";
 choices[90]= new Array();
 choices[90][0] = "Sus siglas corresponden a la Secretar&iacute;a de Estado de Telecomunicaciones y Sistemas de la Informaci&oacute;n";
 choices[90][1] = "Est&aacute; integrada dentro del Ministerio de Industria, Energ&iacute;a y Turismo";
 choices[90][2] = "Desarrolla, entre otras funciones, la realizaci&oacute;n de estudios y propuestas de normas t&eacute;cnicas de equipos e instalaciones del sector de las telecomunicaciones";
 choices[90][3] = "El Ministerio de Industria, Energ&iacute;a y Turismo es miembro de la ETSI a trav&eacute;s de la SETSI";
 answers[90] = choices[90][0];
 units[90] = "42";
 comments[90] = "Id Pregunta: 10363. SETSI: Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n";


//  Id pregunta: 10861 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Indique el principio de la WCAG 2.0 asociado a la pauta &quot;maximizar la compatibilidad&quot;:";
 choices[91]= new Array();
 choices[91][0] = "Operable.";
 choices[91][1] = "Perceptible.";
 choices[91][2] = "Robustez.";
 choices[91][3] = "Comprensible.";
 answers[91] = choices[91][2];
 units[91] = "39";
 comments[91] = "Id Pregunta: 10861. Examen GSI 2014";


//  Id pregunta: 10946 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  La Entidad AENOR:";
 choices[92]= new Array();
 choices[92][0] = "Es una entidad p&uacute;blica que elabora normas t&eacute;cnicas espa&ntilde;olas, impulsando la aportaci&oacute;n nacional en la elaboraci&oacute;n de normas europeas e internacionales.";
 choices[92][1] = "Desarrolla actividades de normalizaci&oacute;n y certificaci&oacute;n (N+C) exclusivamente en el &aacute;mbito del sector p&uacute;blico.";
 choices[92][2] = "Es una entidad espa&ntilde;ola, privada, independiente, sin &aacute;nimo de lucro, que certifica productos, servicios y empresas (sistemas).";
 choices[92][3] = "Es la entidad p&uacute;blica internacional responsable de la elaboraci&oacute;n de los est&aacute;ndares ISO/IEC.";
 answers[92] = choices[92][2];
 units[92] = "42";
 comments[92] = "Id Pregunta: 10946. TIC A1 AGE 2014";


//  Id pregunta: 11021 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Cu&aacute;l de las siguientes afirmaciones acerca de las WCAG 2.0 NO es cierta?";
 choices[93]= new Array();
 choices[93][0] = "Est&aacute;n organizadas en 4 principios";
 choices[93][1] = "Dentro de cada principio se encuentran las pautas de accesibilidad";
 choices[93][2] = "Cada pauta contiene una serie de criterios de conformidad";
 choices[93][3] = "Se definen niveles de prioridad para los diferentes criterios";
 answers[93] = choices[93][3];
 units[93] = "39";
 comments[93] = "Id Pregunta: 11021. En las WCAG 2.0 se habla de niveles de conformidad y no de niveles de prioridad";


//  Id pregunta: 11022 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l es la &uacute;nica pauta definida dentro del principio de robustez de las WCAG 2.0? ";
 choices[94]= new Array();
 choices[94][0] = "Alternativas textuales";
 choices[94][1] = "Accesible a trav&eacute;s de teclado";
 choices[94][2] = "Compatible";
 choices[94][3] = "Ayuda a la entrada de datos";
 answers[94] = choices[94][2];
 units[94] = "39";
 comments[94] = "Id Pregunta: 11022. ";


//  Id pregunta: 11025 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Es AENOR un miembro de ISO?";
 choices[95]= new Array();
 choices[95][0] = "No";
 choices[95][1] = "S&iacute;, es miembro nato";
 choices[95][2] = "Si, es miembro suscrito";
 choices[95][3] = "No, pero tiene previsto incorporarse en 2016";
 answers[95] = choices[95][1];
 units[95] = "42";
 comments[95] = "Id Pregunta: 11025. ";


//  Id pregunta: 11026 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Cu&aacute;l de los siguientes se corresponde con el Comit&eacute; T&eacute;cnico en el &aacute;mbito de las Tecnolog&iacute;as de la Informaci&oacute;n dentro de ISO?";
 choices[96]= new Array();
 choices[96][0] = "ISO/TC 1";
 choices[96][1] = "ISO/TC 2";
 choices[96][2] = "ISO/IEC JTC 1";
 choices[96][3] = "ISO/IEC JPC 2";
 answers[96] = choices[96][2];
 units[96] = "42";
 comments[96] = "Id Pregunta: 11026. ";


//  Id pregunta: 11027 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Cu&aacute;l es la Asociaci&oacute;n Europea de Fabricantes de Ordenadores?";
 choices[97]= new Array();
 choices[97][0] = "ETSI";
 choices[97][1] = "CECUA";
 choices[97][2] = "ECMA";
 choices[97][3] = "ECTA";
 answers[97] = choices[97][2];
 units[97] = "42";
 comments[97] = "Id Pregunta: 11027. ";


//  Id pregunta: 11125 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Cu&aacute;l de los siguientes no es un organismo europeo de normalizaci&oacute;n?";
 choices[98]= new Array();
 choices[98][0] = "CEN";
 choices[98][1] = "UNE";
 choices[98][2] = "CENELEC";
 choices[98][3] = "ETSI";
 answers[98] = choices[98][1];
 units[98] = "42";
 comments[98] = "Id Pregunta: 11125. ";


//  Id pregunta: 11503 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Cu&aacute;l de los siguientes NO es un Comit&eacute; creado en el seno de la International Standards Organization (ISO)?";
 choices[99]= new Array();
 choices[99][0] = "DEVCO, Comit&eacute; de Desarrollo";
 choices[99][1] = "COPOLCO, Comit&eacute; de pol&iacute;ticas en materia de consumo";
 choices[99][2] = "QUALCO, Comit&eacute; de calidad";
 choices[99][3] = "CASCO, Comit&eacute; de evaluaci&oacute;n de la conformidad";
 answers[99] = choices[99][2];
 units[99] = "42";
 comments[99] = "Id Pregunta: 11503. NULL";


