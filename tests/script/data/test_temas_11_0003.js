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

//  Id pregunta: 94 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  A la ley org&aacute;nica que en Espa&ntilde;a regula el uso de la inform&aacute;tica para garantizar la intimidad personal de las personas, se le conoce como la:";
 choices[0]= new Array();
 choices[0][0] = "LOGSE";
 choices[0][1] = "LOPD";
 choices[0][2] = "LOT";
 choices[0][3] = "LOSDAT";
 answers[0] = choices[0][1];
 units[0] = "29";
 comments[0] = "Id Pregunta: 94. ";


//  Id pregunta: 95 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  A los efectos de la Ley Org&aacute;nica de Protecci&oacute;n de Datos (LOPD), se entienden por datos de car&aacute;cter personal:";
 choices[1]= new Array();
 choices[1][0] = "Cualquier informaci&oacute;n concerniente a personas f&iacute;sicas o jur&iacute;dicas identificadas";
 choices[1][1] = "Cualquier informaci&oacute;n relativa a la salud, ideolog&iacute;a, religi&oacute;n, creencias, origen racial o vida sexual de las personas";
 choices[1][2] = "Cualquier informaci&oacute;n concerniente a personas f&iacute;sicas identificadas o identificables";
 choices[1][3] = "Cualquier informaci&oacute;n sobre las personas, excluidas las de car&aacute;cter pol&iacute;tico, sindical o religioso";
 answers[1] = choices[1][2];
 units[1] = "29";
 comments[1] = "Id Pregunta: 95. ";


//  Id pregunta: 113 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  De acuerdo con la Ley de Protecci&oacute;n de Datos, el Registro General de Protecci&oacute;n de Datos es un &oacute;rgano integrado en la Agencia de Protecci&oacute;n de Datos y ser&aacute;n objeto de inscripci&oacute;n en &eacute;l:";
 choices[2]= new Array();
 choices[2][0] = "Los ficheros de los que sean titulares las Administraciones P&uacute;blicas";
 choices[2][1] = "Los ficheros de titularidad privada";
 choices[2][2] = "Los datos relativos a los ficheros que sean necesarios para el ejercicio de los derechos de informaci&oacute;n, acceso, rectificaci&oacute;n, cancelaci&oacute;n y oposici&oacute;n";
 choices[2][3] = "Todas las afirmaciones son correctas";
 answers[2] = choices[2][3];
 units[2] = "29";
 comments[2] = "Id Pregunta: 113. ";


//  Id pregunta: 137 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  El Consejo Consultivo de la Agencia de Protecci&oacute;n de Datos:";
 choices[3]= new Array();
 choices[3][0] = "Es un &oacute;rgano colegiado de asesoramiento del Director de la Agencia";
 choices[3][1] = "Emite informes en todas las cuestiones que le somete el Director";
 choices[3][2] = "Formula propuestas en temas relacionados con las competencias de la Agencia";
 choices[3][3] = "Todas son correctas";
 answers[3] = choices[3][3];
 units[3] = "29";
 comments[3] = "Id Pregunta: 137. ";


//  Id pregunta: 140 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  El director de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos tiene la consideraci&oacute;n de alto cargo. Se nombra mediante Real Decreto por un periodo de:";
 choices[4]= new Array();
 choices[4][0] = "4 a&ntilde;os";
 choices[4][1] = "5 a&ntilde;os";
 choices[4][2] = "6 a&ntilde;os";
 choices[4][3] = "Ninguno de los anteriores";
 answers[4] = choices[4][0];
 units[4] = "29";
 comments[4] = "Id Pregunta: 140. ";


//  Id pregunta: 314 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  La Ley Org&aacute;nica 15/1999, de Protecci&oacute;n de Datos de Car&aacute;cter Personal (LOPD) tiene por objeto:";
 choices[5]= new Array();
 choices[5][0] = "Garantizar y proteger, en lo que concierne al tratamiento de los datos personales, las libertades p&uacute;blicas y los derechos fundamentales de las personas f&iacute;sicas";
 choices[5][1] = "Proteger el honor y la intimidad personal y familiar";
 choices[5][2] = "Proteger todas las libertades p&uacute;blicas y derechos fundamentales reconocidos en la Constituci&oacute;n espa&ntilde;ola";
 choices[5][3] = "Hacer frente a las amenazas o agresiones contra los derechos y libertades  p&uacute;blicas, provenientes del tratamiento automatizado de datos personales";
 answers[5] = choices[5][0];
 units[5] = "29";
 comments[5] = "Id Pregunta: 314. ";


//  Id pregunta: 329 AÃ±o de creación de pregunta: 2009-01-01
 questions[6]= "7)  Las medidas de seguridad b&aacute;sicas para datos automatizados de car&aacute;cter personal:";
 choices[6]= new Array();
 choices[6][0] = "Requieren la existencia de registros de los accesos a los ficheros o tablas que contienen la informaci&oacute;n.";
 choices[6][1] = "La responsabilidad de los registros de acceso est&aacute; bajo control del Responsable de seguridad y existen mecanismos de control para verificar que el registro est&aacute; activo y que no haya saltos temporales.";
 choices[6][2] = "No se utilizan cuentas gen&eacute;ricas para entrar al sistema.";
 choices[6][3] = "Utiliza t&eacute;cnicas de encriptaci&oacute;n en las comunicaciones de datos";
 answers[6] = choices[6][2];
 units[6] = "29";
 comments[6] = "Id Pregunta: 329. NULL";


//  Id pregunta: 338 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  La rectificaci&oacute;n o cancelaci&oacute;n de datos de car&aacute;cter personal se har&aacute; efectiva por el responsable del fichero en un periodo de tiempo siguiente al de recepci&oacute;n de la solicitud. Dicho periodo es de:";
 choices[7]= new Array();
 choices[7][0] = "5 d&iacute;as";
 choices[7][1] = "10 d&iacute;as";
 choices[7][2] = "15 d&iacute;as";
 choices[7][3] = "1 mes";
 answers[7] = choices[7][1];
 units[7] = "29";
 comments[7] = "Id Pregunta: 338. ";


//  Id pregunta: 348 AÃ±o de creación de pregunta: 2009-01-01
 questions[8]= "9)  La transferencia internacional de datos de car&aacute;cter personal con destino a pa&iacute;ses que no proporcionen un nivel de protecci&oacute;n equiparable sin autorizaci&oacute;n del Director de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos salvo en los supuestos en los que conforme a la LOPD y sus disposiciones de desarrollo dicha autorizaci&oacute;n no resulta necesaria, es una infracci&oacute;n:";
 choices[8]= new Array();
 choices[8][0] = "Leve";
 choices[8][1] = "Grave";
 choices[8][2] = "Muy grave ";
 choices[8][3] = "No es infracci&oacute;n";
 answers[8] = choices[8][2];
 units[8] = "29";
 comments[8] = "Id Pregunta: 348. ";


//  Id pregunta: 355 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  Las Comunidades Aut&oacute;nomas pueden crear organismos similares a la Agencia de Protecci&oacute;n de Datos que:";
 choices[9]= new Array();
 choices[9][0] = "Tendr&aacute;n competencias &uacute;nicamente sobre los ficheros de datos de car&aacute;cter personal, creados o gestionados por las CC.AA.";
 choices[9][1] = "Tendr&aacute;n competencias sobre los ficheros de datos de car&aacute;cter personal creados o gestionados por las CCAA y por la Administraci&oacute;n local de su &aacute;mbito territorial";
 choices[9][2] = "S&oacute;lo tendr&aacute;n competencias sobre los ficheros de datos de car&aacute;cter personal creados por la Administraci&oacute;n local de su &aacute;mbito territorial si lo autoriza el Director de la Agencia de Protecci&oacute;n de Datos";
 choices[9][3] = "Las CCAA no pueden crear organismos similares a la Agencia de Protecci&oacute;n de Datos";
 answers[9] = choices[9][1];
 units[9] = "29";
 comments[9] = "Id Pregunta: 355. ";


//  Id pregunta: 366 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  Los datos de car&aacute;cter personal que hagan referencia al origen racial, a la salud y a la vida sexual s&oacute;lo podr&aacute;n ser recabados, tratados y cedidos cuando:";
 choices[10]= new Array();
 choices[10][0] = "Cuando lo disponga una Ley";
 choices[10][1] = "Si el afectado consiente expresamente.";
 choices[10][2] = "En los supuestos 'a' o 'b' o por razones de inter&eacute;s general.";
 choices[10][3] = "Nunca";
 answers[10] = choices[10][2];
 units[10] = "29";
 comments[10] = "Id Pregunta: 366. NULL";


//  Id pregunta: 369 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Los ficheros automatizados cuyo objeto sea el almacenamiento de los datos contenidos en los informes personales de calificaci&oacute;n del personal militar profesional , seg&uacute;n la LOPD:";
 choices[11]= new Array();
 choices[11][0] = "No caen dentro del &aacute;mbito de aplicaci&oacute;n de la misma";
 choices[11][1] = "Caen dentro del &aacute;mbito de aplicaci&oacute;n de la misma";
 choices[11][2] = "Caen dentro del &aacute;mbito de aplicaci&oacute;n de la misma, pero no les ser&aacute; de aplicaci&oacute;n el r&eacute;gimen de protecci&oacute;n de datos";
 choices[11][3] = "Se regir&aacute;n por sus disposiciones espec&iacute;ficas";
 answers[11] = choices[11][3];
 units[11] = "29";
 comments[11] = "Id Pregunta: 369. ";


//  Id pregunta: 399 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Quienes se dediquen a la prestaci&oacute;n de servicios de informaci&oacute;n sobre solvencia patrimonial y el cr&eacute;dito:";
 choices[12]= new Array();
 choices[12][0] = "Podr&aacute;n tratar datos de car&aacute;cter personal relativos al cumplimiento o inclumplimiento de obligaciones dinerarias facilitados por el acreedor o por quien act&uacute;e por su cuenta o inter&eacute;s";
 choices[12][1] = "S&oacute;lo podr&aacute;n tratar datos de car&aacute;cter personal obtenidos de los registros y las fuentes accesibles al p&uacute;blico";
 choices[12][2] = "S&oacute;lo podr&aacute;n tratar datos de car&aacute;cter personal procedentes de informaciones facilitadas por el interesado o con su consentimiento";
 choices[12][3] = "No podr&aacute;n registrar o ceder datos de car&aacute;cter personal que sean determinantes para enjuiciar la solvencia econ&oacute;mica de los interesados";
 answers[12] = choices[12][0];
 units[12] = "29";
 comments[12] = "Id Pregunta: 399. ";


//  Id pregunta: 400 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Referente a la Agencia de Protecci&oacute;n de Datos, no es falso que:";
 choices[13]= new Array();
 choices[13][0] = "El Gobierno pueda cesar discrecionalmente a su Director";
 choices[13][1] = "El Director sea nombrado por su Consejo Consultivo";
 choices[13][2] = "Pueda imponer sanciones civiles o penales";
 choices[13][3] = "Se caracteriza por su independencia respecto de la Administraci&oacute;n";
 answers[13] = choices[13][3];
 units[13] = "29";
 comments[13] = "Id Pregunta: 400. ";


//  Id pregunta: 409 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  Respecto al derecho de rectificaci&oacute;n y cancelaci&oacute;n es falso que:";
 choices[14]= new Array();
 choices[14][0] = "Si los datos rectificados o cancelados hubiesen sido previamente cedidos, el responsable del fichero deber&aacute; notificar la rectificaci&oacute;n o cancelaci&oacute;n efectiva al cesionario";
 choices[14][1] = "Que se podr&aacute;, en las circunstancias que se establezcan reglamentariamente, exigir una m&iacute;nima contraprestaci&oacute;n por los gastos de gesti&oacute;n que dicha rectificaci&oacute;n ocasione justificadamente";
 choices[14][2] = "Es un derecho, recogido en la LOPD, de todos los ciudadanos";
 choices[14][3] = "Que se pueda reclamar ante la Agencia de Protecci&oacute;n de Datos en el caso de que no se facilite el libre ejercicio de este derecho";
 answers[14] = choices[14][1];
 units[14] = "29";
 comments[14] = "Id Pregunta: 409. ";


//  Id pregunta: 437 AÃ±o de creación de pregunta: 2009-01-01
 questions[15]= "16)  Seg&uacute;n la LOPD, los datos de car&aacute;cter personal que revelan la ideolog&iacute;a, religi&oacute;n y creencias podr&aacute;n ser objeto de tratamiento automatizado:";
 choices[15]= new Array();
 choices[15][0] = "Con consentimiento expreso del afectado";
 choices[15][1] = "Con consentimiento expreso y por escrito del afectado";
 choices[15][2] = "Nunca podr&aacute; ser objeto de tratamiento automatizado";
 choices[15][3] = "Cuando por razones de inter&eacute;s general as&iacute; lo disponga una Ley o el afectado consienta expresamente";
 answers[15] = choices[15][1];
 units[15] = "29";
 comments[15] = "Id Pregunta: 437. ";


//  Id pregunta: 444 AÃ±o de creación de pregunta: 2009-01-01
 questions[16]= "17)  Seg&uacute;n la Ley Org&aacute;nica 15/99 de Protecci&oacute;n de Datos de Car&aacute;cter Personal y el RD 1720/2007, y en relaci&oacute;n con los ficheros de titularidad privada que contengan datos de car&aacute;cter personal:";
 choices[16]= new Array();
 choices[16][0] = "Los ficheros de datos de car&aacute;cter personal de titularidad privada ser&aacute;n notificados a la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos por la persona o entidad privada que pretenda crearlos, con car&aacute;cter previo a su creaci&oacute;n";
 choices[16][1] = "La notificaci&oacute;n de un fichero de datos de car&aacute;cter personal es independiente del sistema de tratamiento empleado en su organizaci&oacute;n y del soporte o soportes empleados para el tratamiento de los datos";
 choices[16][2] = "Deber&aacute; notificarse a la Agencia de Protecci&oacute;n de Datos las variaciones que se produzcan con posterioridad a la notificaci&oacute;n de inscripci&oacute;n";
 choices[16][3] = "Todas las respuestas anteriores son correctas";
 answers[16] = choices[16][3];
 units[16] = "29";
 comments[16] = "Id Pregunta: 444. ";


//  Id pregunta: 453 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Se&ntilde;ale la opci&oacute;n incorrecta entre las siguientes: la Agencia de Protecci&oacute;n de Datos es:";
 choices[17]= new Array();
 choices[17][0] = "Un Ente de Derecho P&uacute;blico con personalidad jur&iacute;dica propia";
 choices[17][1] = "Se relaciona con el Gobierno a trav&eacute;s del Ministerio de Administraciones P&uacute;blicas";
 choices[17][2] = "Ejerce sus funciones a trav&eacute;s del Director, cuyos actos ponen fin a la v&iacute;a administrativa";
 choices[17][3] = "Act&uacute;a con plena independencia de las AA.PP.";
 answers[17] = choices[17][1];
 units[17] = "29";
 comments[17] = "Id Pregunta: 453. ";


//  Id pregunta: 455 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Ser&aacute; necesario el consentimiento del afectado cuando se trate de datos:";
 choices[18]= new Array();
 choices[18][0] = "Recogidos por las Administraciones P&uacute;blicas en el ejercicio de sus funciones";
 choices[18][1] = "Cuando el tratamiento tenga por finalidad proteger un inter&eacute;s vital del interesado del art&iacute;culo 7, apartado 6 de la LOPD";
 choices[18][2] = "Que figuren en fuentes accesibles al p&uacute;blico";
 choices[18][3] = "Ninguna es correcta";
 answers[18] = choices[18][3];
 units[18] = "29";
 comments[18] = "Id Pregunta: 455. ";


//  Id pregunta: 495 AÃ±o de creación de pregunta: 2003-01-01
 questions[19]= "20)  &iquest;Qui&eacute;n es responsable de editar el repertorio de los ficheros inscritos en el registro de protecci&oacute;n de datos?";
 choices[19]= new Array();
 choices[19][0] = "Registro General de Protecci&oacute;n de Datos";
 choices[19][1] = "Inspecci&oacute;n de Datos";
 choices[19][2] = "Secretar&iacute;a General";
 choices[19][3] = "Ninguno de los anteriores";
 answers[19] = choices[19][2];
 units[19] = "29";
 comments[19] = "Id Pregunta: 495. Pregunta similar a la del ex&aacute;men de SS del 2003";


//  Id pregunta: 509 AÃ±o de creación de pregunta: 2003-01-01
 questions[20]= "21)  La LOPD, en su art 5 sobre el Derecho de Informaci&oacute;n en la recogida de datos, indica que los interesados han de estar informados de la posibilidad de ejercitar varios derechos sobre sus datos. Indicar la falsa:";
 choices[20]= new Array();
 choices[20][0] = "Acceso";
 choices[20][1] = "Certificaci&oacute;n";
 choices[20][2] = "Rectificaci&oacute;n";
 choices[20][3] = "Cancelaci&oacute;n";
 answers[20] = choices[20][1];
 units[20] = "29";
 comments[20] = "Id Pregunta: 509. ";


//  Id pregunta: 548 AÃ±o de creación de pregunta: 2004-01-01
 questions[21]= "22)  La LOPD es FALSO que NO es de aplicaci&oacute;n a:";
 choices[21]= new Array();
 choices[21][0] = "Ficheros sometidos a la normativa sobre protecci&oacute;n de materias clasificadas";
 choices[21][1] = "Ficheros establecidos para la investigaci&oacute;n del terrorismo y de formas graves de delincuencia organizada";
 choices[21][2] = "Los ficheros regulados por la legislaci&oacute;n de r&eacute;gimen electoral";
 choices[21][3] = "Los ficheros mantenidos por personas f&iacute;sicas en el ejercicio de actividades exclusivamente personales o dom&eacute;sticas.";
 answers[21] = choices[21][2];
 units[21] = "29";
 comments[21] = "Id Pregunta: 548. ";


//  Id pregunta: 555 AÃ±o de creación de pregunta: 2004-01-01
 questions[22]= "23)  Un fichero automatizado con  (DNI, Nombre, Apellidos, Domicilio, Titulaci&oacute;n Acad&eacute;mica, Grado y Tipo de Minusval&iacute;a) requiere medidas de tipo:";
 choices[22]= new Array();
 choices[22][0] = "B&aacute;sico";
 choices[22][1] = "Medio";
 choices[22][2] = "Alto";
 choices[22][3] = "Cr&iacute;tico";
 answers[22] = choices[22][2];
 units[22] = "29";
 comments[22] = "Id Pregunta: 555. Junta Andaluc&iacute;a 2002";


//  Id pregunta: 604 AÃ±o de creación de pregunta: 2006-01-01
 questions[23]= "24)  La Agencia de Protecci&oacute;n de Datos se rige:";
 choices[23]= new Array();
 choices[23][0] = "Por el T&iacute;tulo V de la LOPD y por el Real Decreto 156/1999, por el que se aprueba el Estatuto de la Agencia de Protecci&oacute;n de Datos.";
 choices[23][1] = "Por el T&iacute;tulo VI de la LOPD y por el Real Decreto 428/1993 por el que se aprueba el Estatuto de la Agencia de Protecci&oacute;n de Datos.";
 choices[23][2] = "Por el T&iacute;tulo V de la LOPD y por el Real Decreto 994/1999 por el que se aprueba el Estatuto de la Agencia de Protecci&oacute;n de Datos.";
 choices[23][3] = "Por el T&iacute;tulo VI de la LOPD y por el Real Decreto 994/1999, por el que se aprueba el Estatuto de la Agencia de Protecci&oacute;n de Datos.";
 answers[23] = choices[23][1];
 units[23] = "29";
 comments[23] = "Id Pregunta: 604. ";


//  Id pregunta: 605 AÃ±o de creación de pregunta: 2006-01-01
 questions[24]= "25)  El art. 11 del Estatuto establece la estructura org&aacute;nica de la Agencia enumerando los siguientes &oacute;rganos:";
 choices[24]= new Array();
 choices[24][0] = "El Director de la Agencia de Protecci&oacute;n de Datos,el Consejo Consultivo, el Registro General de Protecci&oacute;n de Datos, la Inspecci&oacute;n de Datos y la Secretar&iacute;a General.";
 choices[24][1] = "El Director de la Agencia de Protecci&oacute;n de Datos,el Comite Consultivo, el Registro General de Protecci&oacute;n de Datos, la Inspecci&oacute;n de Datos y la Subsecretar&iacute;a General.";
 choices[24][2] = "El Director de la Agencia de Protecci&oacute;n de Datos,el Comite Consultivo, el Registro General de Protecci&oacute;n de Datos, la Inspecci&oacute;n de Datos y la Secretar&iacute;a General.";
 choices[24][3] = "El Director de la Agencia de Protecci&oacute;n de Datos,el Consejo Consultivo, el Registro General de Protecci&oacute;n de Datos, la Inspecci&oacute;n de Datos y la Subsecretar&iacute;a General.";
 answers[24] = choices[24][0];
 units[24] = "29";
 comments[24] = "Id Pregunta: 605. ";


//  Id pregunta: 607 AÃ±o de creación de pregunta: 2006-01-01
 questions[25]= "26)  La aprobaci&oacute;n del Estatuto de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos se realiz&oacute; a trav&eacute;s de:";
 choices[25]= new Array();
 choices[25][0] = "R.D. 156/1996 de 2 de Febrero .";
 choices[25][1] = "R.D. 428/1993 de 26 de Marzo .";
 choices[25][2] = "La LOFAGE.";
 choices[25][3] = "La Ley 30/1992 de 26 de Noviembre.";
 answers[25] = choices[25][1];
 units[25] = "29";
 comments[25] = "Id Pregunta: 607. ";


//  Id pregunta: 4448 AÃ±o de creación de pregunta: 2007-01-01
 questions[26]= "27)  Seg&uacute;n la Ley Org&aacute;nica de Protecci&oacute;n de Datos, las medidas de &iacute;ndole t&eacute;cnica y organizativas necesarias que garanticen la seguridad de los datos de car&aacute;cter personal, deben ser adoptadas por:";
 choices[26]= new Array();
 choices[26][0] = "&Uacute;nicamente el encargado del tratamiento.";
 choices[26][1] = "El afectado de com&uacute;n acuerdo con el encargado del tratamiento.";
 choices[26][2] = "El responsable del fichero y, en su caso, el encargado del tratamiento.";
 choices[26][3] = "&Uacute;nicamente el responsable del fichero";
 answers[26] = choices[26][2];
 units[26] = "29";
 comments[26] = "Id Pregunta: 4448. ";


//  Id pregunta: 5043 AÃ±o de creación de pregunta: 2003-01-01
 questions[27]= "28)  &iquest;Cu&aacute;l es la naturaleza j&uacute;ridica de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos?";
 choices[27]= new Array();
 choices[27][0] = "Organismo aut&oacute;nomo";
 choices[27][1] = "Entidad P&uacute;blica Empresarial";
 choices[27][2] = "Ente de Derecho p&uacute;blico regulado por su legislaci&oacute;n espec&iacute;fica";
 choices[27][3] = "Agencia Estatal de las previstas en la Ley 28/2006, de 18 de julio. (Art. 35 LO 13/1999 y Disposici&oacute;nadicional d&eacute;cima de la LOFAGE)";
 answers[27] = choices[27][2];
 units[27] = "29";
 comments[27] = "Id Pregunta: 5043. Examen TIC A 2007";


//  Id pregunta: 5112 AÃ±o de creación de pregunta: 2003-01-01
 questions[28]= "29)  Seg&uacute;n la LOPD, la persona f&iacute;sica o jur&iacute;dica, de naturaleza p&uacute;blica o privada, u &oacute;rgano administrativo, que decida sobre la finalidad, contenido y uso del tratamiento es:";
 choices[28]= new Array();
 choices[28][0] = "Encargado del tratamiento.";
 choices[28][1] = "Afectado o interesado.";
 choices[28][2] = "Cesionario de datos.";
 choices[28][3] = "Responsable del fichero.";
 answers[28] = choices[28][3];
 units[28] = "29";
 comments[28] = "Id Pregunta: 5112. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5654 AÃ±o de creación de pregunta: 2003-01-01
 questions[29]= "30)  Seg&uacute;n el RD 1720/2007, a partir de que nivel de seguridad deber&aacute; conservarse una copia de respaldo de los datos y de los procedimientos de recuperaci&oacute;n, en un lugar diferente de aquel en que se encuentran los equipos inform&aacute;ticas que los tratan:";
 choices[29]= new Array();
 choices[29][0] = "nivel b&aacute;sico";
 choices[29][1] = "nivel medio";
 choices[29][2] = "nivel alto";
 choices[29][3] = "En ningun caso";
 answers[29] = choices[29][2];
 units[29] = "29";
 comments[29] = "Id Pregunta: 5654. ";


//  Id pregunta: 5769 AÃ±o de creación de pregunta: 2009-01-01
 questions[30]= "31)  De acuerdo al RD 1720/2007, cuando los ficheros contengan un conjunto de datos de car&aacute;cter personal suficientes que permitan obtener una evaluaci&oacute;n de la personalidad del individuo, deber&aacute;:";
 choices[30]= new Array();
 choices[30][0] = "Adoptarse las medidas de seguridad calificadas de nivel b&aacute;sico";
 choices[30][1] = "Adoptarse las medidas de seguridad calificadas de nivel medio";
 choices[30][2] = "Adoptarse las medidas de seguridad calificadas de nivel alto";
 choices[30][3] = "No adoptarse ninguna medidas de seguridad prevista";
 answers[30] = choices[30][1];
 units[30] = "29";
 comments[30] = "Id Pregunta: 5769. ";


//  Id pregunta: 5773 AÃ±o de creación de pregunta: 2009-01-01
 questions[31]= "32)  De acuerdo con la LOPD, se&ntilde;ale el tipo de fichero que se incluye en el alcance de la Ley";
 choices[31]= new Array();
 choices[31][0] = "Ficheros realizados o mantenidos por personas f&iacute;sicas en el ejercicio de actividades exclusivamente personales o dom&eacute;sticas.";
 choices[31][1] = "Ficheros sometidos a la normativa sobre protecci&oacute;n de materias clasificadas";
 choices[31][2] = "Ficheros establecidos para la investigaci&oacute;n del terrorismo y de formas graves de delincuencia organizada. No obstante el responsable del fichero comunicar&aacute; previamente la existencia del mismo, sus caracter&iacute;sticas generales y su finalidad a la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 choices[31][3] = "Ficheros de titularidad p&uacute;blica, con la publicaci&oacute;n de la disposici&oacute;n de regulaci&oacute;n correspondiente";
 answers[31] = choices[31][3];
 units[31] = "29";
 comments[31] = "Id Pregunta: 5773. MAP 2008 A2";


//  Id pregunta: 5775 AÃ±o de creación de pregunta: 2009-01-01
 questions[32]= "33)  Seg&uacute;n el RD 1720/2007 cuando la obligaci&oacute;n de notificar afecte a ficheros sujetos a la competencia de la autoridad de control de una Comunidad Aut&oacute;noma que haya creado su propio registro de ficheros, la notificaci&oacute;n se realizar&aacute; a:";
 choices[32]= new Array();
 choices[32][0] = "la autoridad auton&oacute;mica competente, que dar&aacute; traslado de la inscripci&oacute;n  al Registro General de Protecci&oacute;n de  Datos";
 choices[32][1] = "la autoridad auton&oacute;mica competente y al Registro General de Protecci&oacute;n de  Datos";
 choices[32][2] = "al Registro General de Protecci&oacute;n de  Datos, que dar&aacute; traslado de la inscripci&oacute;n a la la autoridad auton&oacute;mica competente";
 choices[32][3] = "la autoridad auton&oacute;mica competente o al Registro General de Protecci&oacute;n de  Datos. El receptor de la notificaci&oacute;n dar&aacute; traslado de la inscripci&oacute;n al otro ente";
 answers[32] = choices[32][0];
 units[32] = "29";
 comments[32] = "Id Pregunta: 5775. MAP 2008 A2";


//  Id pregunta: 5882 AÃ±o de creación de pregunta: 2009-01-01
 questions[33]= "34)  &iquest;Cu&aacute;ndo deber&aacute;n tener implantadas la totalidad de las medidas de seguridad los ficheros, tanto automatizados como no automatizados, creados con posterioridad a la fecha de entrada en vigor del RD 1720/2007, de 21 de diciembre, por el que se aprueba el Reglamento de Desarrollo de la LOPD?:";
 choices[33]= new Array();
 choices[33][0] = "En el plazo de un a&ntilde;o desde su creaci&oacute;n";
 choices[33][1] = "En el plazo de seis meses desde su creaci&oacute;n";
 choices[33][2] = "En el momento de su creaci&oacute;n";
 choices[33][3] = "Depender&aacute; del tama&ntilde;o del fichero";
 answers[33] = choices[33][2];
 units[33] = "29";
 comments[33] = "Id Pregunta: 5882. MAP 2008 A1";


//  Id pregunta: 5969 AÃ±o de creación de pregunta: 2010-01-01
 questions[34]= "35)  A efectos de la Ley Org&aacute;nica 15/1999, se define dato de car&aacute;cter personal como:";
 choices[34]= new Array();
 choices[34][0] = "Cualquier informaci&oacute;n relativa a una persona f&iacute;sica o jur&iacute;dica";
 choices[34][1] = "Cualquier informaci&oacute;n sobre personas";
 choices[34][2] = "Todos los datos relativos a una persona";
 choices[34][3] = "Cualquier informaci&oacute;n concerniente a personas f&iacute;sicas identificadas o identificables";
 answers[34] = choices[34][3];
 units[34] = "29";
 comments[34] = "Id Pregunta: 5969. Castilla La Mancha 2009";


//  Id pregunta: 5970 AÃ±o de creación de pregunta: 2010-01-01
 questions[35]= "36)  Las medidas de seguridad exigibles a los ficheros y tratamientos se clasifican en:";
 choices[35]= new Array();
 choices[35][0] = "Bajo, medio y alto";
 choices[35][1] = "B&aacute;sico, medio y alto";
 choices[35][2] = "Bajo, aquellos que eval&uacute;an la personalidad, medio y alto";
 choices[35][3] = "Bajo, medio, alto y especialmente protegidos";
 answers[35] = choices[35][1];
 units[35] = "29";
 comments[35] = "Id Pregunta: 5970. Castilla La Mancha 2009";


//  Id pregunta: 6588 AÃ±o de creación de pregunta: 2010-01-01
 questions[36]= "37)  En el caso de ficheros no automatizados a los que aplican medidas de seguridad de nivel alto, entre otras debe implementarse:";
 choices[36]= new Array();
 choices[36][0] = "Control de accesos autorizados";
 choices[36][1] = "Identificaci&oacute;n de accesos para documentos accesibles por m&uacute;ltiples usuarios";
 choices[36][2] = "No es necesaria identificaci&oacute;n de acceso para ficheros accesibles por una &uacute;nica persona";
 choices[36][3] = "Todas las respuestas anteriores son correctas";
 answers[36] = choices[36][3];
 units[36] = "29";
 comments[36] = "Id Pregunta: 6588. NULL";


//  Id pregunta: 6589 AÃ±o de creación de pregunta: 2010-01-01
 questions[37]= "38)  Para ficheros a los que aplican las medidas de seguridad de nivel medio debe llevarse a cabo una auditor&iacute;a, al menos";
 choices[37]= new Array();
 choices[37][0] = "Debe ser externa";
 choices[37][1] = "Bianual";
 choices[37][2] = "Bienal";
 choices[37][3] = "Todas las respuestas anteriores son incorrectas";
 answers[37] = choices[37][2];
 units[37] = "29";
 comments[37] = "Id Pregunta: 6589. NULL";


//  Id pregunta: 6599 AÃ±o de creación de pregunta: 2010-01-01
 questions[38]= "39)  En cuanto al acceso a datos personales a trav&eacute;s de redes de comunicaciones:";
 choices[38]= new Array();
 choices[38][0] = "Debe llevarse a cabo a trav&eacute;s de t&eacute;cnicas de cifrado";
 choices[38][1] = "Deber&aacute;n garantizar un nivel de seguridad equivalente al correspondiente a los accesos en modo local";
 choices[38][2] = "Debe permitir el registro de todos los accesos a los datos, guardando, hora, fecha, usuario y fichero accedido.";
 choices[38][3] = "Todas las respuestas anteriores son correctas";
 answers[38] = choices[38][1];
 units[38] = "75";
 comments[38] = "Id Pregunta: 6599. NULL";


//  Id pregunta: 8739 AÃ±o de creación de pregunta: 2011-01-01
 questions[39]= "40)  En el &aacute;mbito de la Ley Org&aacute;nica 15/1999 de Protecci&oacute;n de Datos de Car&aacute;cter Personal, los denominados derechos &quot;ARCO&quot; corresponden a los derechos de:";
 choices[39]= new Array();
 choices[39][0] = "Acceso, Rectificaci&oacute;n, Cancelaci&oacute;n y Oposici&oacute;n";
 choices[39][1] = "Acceso. Rectificaci&oacute;n, Coordinaci&oacute;n y Oposici&oacute;n";
 choices[39][2] = "Activaci&oacute;n. Rectificaci&oacute;n. Cancelaci&oacute;n y Oposici&oacute;n.";
 choices[39][3] = "Acceso. Repudio. Cancelaci&oacute;n y Oposici&oacute;n.";
 answers[39] = choices[39][0];
 units[39] = "29";
 comments[39] = "Id Pregunta: 8739. Examen TIC A2 2010 interna";


//  Id pregunta: 8897 AÃ±o de creación de pregunta: 2011-01-01
 questions[40]= "41)  &iquest;Cu&aacute;l es la directiva europea vigente relativa al tratamiento de los datos personales?";
 choices[40]= new Array();
 choices[40][0] = "Directiva 95/46/CE";
 choices[40][1] = "Directiva 2006/24/CE";
 choices[40][2] = "Directiva 2002/58/CE";
 choices[40][3] = "Directiva 97/66/CE";
 answers[40] = choices[40][0];
 units[40] = "29";
 comments[40] = "Id Pregunta: 8897. ";


//  Id pregunta: 9047 AÃ±o de creación de pregunta: 2011-01-01
 questions[41]= "42)  Cu&aacute;l no es un derecho de las personas seg&uacute;n la LOPD";
 choices[41]= new Array();
 choices[41][0] = "Impugnaci&oacute;n de valoraciones";
 choices[41][1] = "Derecho de acceso";
 choices[41][2] = "Derecho a cobrar dinero por el tratamiento de sus datos";
 choices[41][3] = "Derecho de rectificaci&oacute;n";
 answers[41] = choices[41][2];
 units[41] = "29";
 comments[41] = "Id Pregunta: 9047. ";


//  Id pregunta: 9735 AÃ±o de creación de pregunta: 2014-01-01
 questions[42]= "43)  Seg&uacute;n el Real Decreto 1720/2007, &iquest;cu&aacute;l de las siguientes declaraciones es correcta respecto a pruebas en sistemas con datos de car&aacute;cter personal?";
 choices[42]= new Array();
 choices[42][0] = "Queda terminantemente prohibida la realizaci&oacute;n de pruebas en los sistemas de informaci&oacute;n que traten datos reales en ficheros con datos de car&aacute;cter personal.";
 choices[42][1] = "No existen limitaciones para usar datos reales en ficheros de car&aacute;cter personal si se utilizan para las pruebas anteriores a la implantaci&oacute;n o modificaci&oacute;n de los sistemas de informaci&oacute;n.";
 choices[42][2] = "Las pruebas anteriores a la implantaci&oacute;n o modificaci&oacute;n de los sistemas de informaci&oacute;n que traten ficheros con datos de car&aacute;cter personal no se realizar&aacute;n con datos reales, salvo que se asegure el nivel de seguridad correspondiente al tratamiento realizado y se anote su realizaci&oacute;n en el documento de seguridad.";
 choices[42][3] = "Si para la validaci&oacute;n de un sistema de informaci&oacute;n, es necesario realizar pruebas que traten ficheros con datos de car&aacute;cter personal reales, se proceder&aacute; posteriormente al borrado de dichos ficheros para cumplir la normativa legal vigente.";
 answers[42] = choices[42][2];
 units[42] = "29";
 comments[42] = "Id Pregunta: 9735. Examen TIC-A2 2013-Libre";


//  Id pregunta: 10256 AÃ±o de creación de pregunta: 2014-01-01
 questions[43]= "44)  La comunicaci&oacute;n de datos de car&aacute;cter personal al Miniterio Fiscal";
 choices[43]= new Array();
 choices[43][0] = "Puede hacerse en cualquier caso, sin consentimiento del interesado";
 choices[43][1] = "Puede hacerse sin consentimiento del interesado cuando sea en el ejercicio de las competencias propias del Ministerio Fiscal";
 choices[43][2] = "Puede hacerse sin consentimiento del afectado s&oacute;lo en los casos especificados en el reglamento de desarrollo de la Ley";
 choices[43][3] = "No puede hacerse en ning&uacute;n caso sin consentimiento del interesado";
 answers[43] = choices[43][1];
 units[43] = "29";
 comments[43] = "Id Pregunta: 10256. Art&iacute;culo 11.2 d) de la Ley 15/1999";


//  Id pregunta: 10259 AÃ±o de creación de pregunta: 2014-01-01
 questions[44]= "45)  El derecho de oposici&oacute;n al tratamiento de datos de car&aacute;cter personal tiene sentido:";
 choices[44]= new Array();
 choices[44][0] = "Para los ficheros mencionados en b) y c)";
 choices[44][1] = "Para ficheros que recojan datos de car&aacute;cter personal y no sea preciso el consentimiento del afectado para realizar el tratamiento";
 choices[44][2] = "Para ficheros que recojan datos de car&aacute;cter personal y tengan por objeto realizar actividades de prospecci&oacute;n comercial";
 choices[44][3] = "Para todo tipo de ficheros que recojan datos de car&aacute;cter personal";
 answers[44] = choices[44][0];
 units[44] = "29";
 comments[44] = "Id Pregunta: 10259. Art&iacute;culo 34 a) y b) del RD 1720/2007";


//  Id pregunta: 10266 AÃ±o de creación de pregunta: 2014-01-01
 questions[45]= "46)  Respecto del tratamiento de datos de car&aacute;cter personal, el censo promocional";
 choices[45]= new Array();
 choices[45][0] = "Tendr&aacute; vigencia indefinida";
 choices[45][1] = "Tendr&aacute; vigencia de un a&ntilde;o, actualiz&aacute;ndose en ese plazo para excluir la informaci&oacute;n de quienes as&iacute; lo hayan solicitado";
 choices[45][2] = "Tendr&aacute; vigencia trimestral, actualiz&aacute;ndose en ese plazo para excluir la informaci&oacute;n de quienes as&iacute; lo hayan solicitado";
 choices[45][3] = "Tendr&aacute; vigencia de un a&ntilde;o, actualiz&aacute;ndose trimestralmente para excluir la informaci&oacute;n de quienes as&iacute; lo hayan solicitado";
 answers[45] = choices[45][3];
 units[45] = "29";
 comments[45] = "Id Pregunta: 10266. Art&iacute;culo 31.2 y 31.3 de la Ley 15/1999";


//  Id pregunta: 10267 AÃ±o de creación de pregunta: 2014-01-01
 questions[46]= "47)  &iquest;Es posible denegar temporalmente una transfferencia internacional de datos personales previamente autorizada?";
 choices[46]= new Array();
 choices[46][0] = "Puede hacerlo el Director de la AEPD bajo determinadas circunstancias especificadas en la Ley";
 choices[46][1] = "Puede hacerlo el Consejo Consultivo de la AEPD bajo determinadas circunstancias especificadas en la Ley";
 choices[46][2] = "Puede hacerlo la Secretar&iacute;a de la AEPD bajo determinadas circunstancias especificadas en la Ley";
 choices[46][3] = "Una vez autorizada la transferencia s&oacute;lo es posible denegarla por indicaci&oacute;n espec&iacute;fica de la Comisi&oacute;n Europea";
 answers[46] = choices[46][0];
 units[46] = "29";
 comments[46] = "Id Pregunta: 10267. Art&iacute;culo 70.3 del RD 1720/2007";


//  Id pregunta: 10271 AÃ±o de creación de pregunta: 2014-01-01
 questions[47]= "48)  La Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos";
 choices[47]= new Array();
 choices[47][0] = "Est&aacute; sometida a control por parte de la IGAE y del Tribunal de Cuentas";
 choices[47][1] = "Est&aacute; sujeta a la LOFAGE en todos sus preceptos";
 choices[47][2] = "Frente a sus resoluciones puede presentarse recurso de alzada";
 choices[47][3] = "Sus competencias son exclusivas, no pudiendo crearse &oacute;rganos similares en las Comunidades Aut&oacute;nomas";
 answers[47] = choices[47][0];
 units[47] = "29";
 comments[47] = "Id Pregunta: 10271. Art&iacute;culos 2 y 33 del RD 428/1993";


//  Id pregunta: 10593 AÃ±o de creación de pregunta: 2015-01-01
 questions[48]= "49)  Seg&uacute;n la LOPD, indique la opci&oacute;n err&oacute;nea:";
 choices[48]= new Array();
 choices[48][0] = "No es necesario informar de la posibilidad de ejercitar los derechos de acceso, rectificaci&oacute;n, cancelaci&oacute;n y oposici&oacute;n, si esta posibilidad se deduce de la naturaleza de los datos.";
 choices[48][1] = "Si los datos de car&aacute;cter personal no han sido recabados del interesado, &eacute;ste debe ser informado durante los tres meses siguientes al registro.";
 choices[48][2] = "No ser&aacute; necesario informar al interesado si esto exige, a criterio del responsable del tratamiento, esfuerzos desproporcionados.";
 choices[48][3] = "Por regla general, los interesados deben ser informados de la identidad del responsable del tratamiento.";
 answers[48] = choices[48][2];
 units[48] = "29";
 comments[48] = "Id Pregunta: 10593. ";


//  Id pregunta: 10778 AÃ±o de creación de pregunta: 2015-01-01
 questions[49]= "50)  Seg&uacute;n se establece en la Ley 15/1999, en su art&iacute;culo 31 acerca del censo promocional, indique cu&aacute;l es el plazo de vigencia del uso de cada lista del censo promocional tal que concluido dicho plazo la lista perder&aacute; su car&aacute;cter de fuente de acceso p&uacute;blico:";
 choices[49]= new Array();
 choices[49][0] = "6 meses.";
 choices[49][1] = "1 a&ntilde;o.";
 choices[49][2] = "2 a&ntilde;os.";
 choices[49][3] = "5 a&ntilde;os.";
 answers[49] = choices[49][1];
 units[49] = "29";
 comments[49] = "Id Pregunta: 10778. Examen GSI 2014";


//  Id pregunta: 11297 AÃ±o de creación de pregunta: 2015-01-01
 questions[50]= "51)  En qu&eacute; casos no es necesario el consentimiento del usuario en el tratamiento de datos seg&uacute;n la Ley Org&aacute;nica de Protecci&oacute;n de Datos";
 choices[50]= new Array();
 choices[50][0] = "Datos con fines hist&oacute;ricos, estad&iacute;sticos o cient&iacute;ficos.";
 choices[50][1] = "No existen excepciones al consentimiento de tratamiento de los datos.";
 choices[50][2] = "La Administraci&oacute;n en el desempe&ntilde;o de sus funciones y las fuentes accesibles al p&uacute;blico.";
 choices[50][3] = "Datos sobre Sindicaci&oacute;n, Ideolog&iacute;a y Religi&oacute;n.";
 answers[50] = choices[50][2];
 units[50] = "29";
 comments[50] = "Id Pregunta: 11297. ";


