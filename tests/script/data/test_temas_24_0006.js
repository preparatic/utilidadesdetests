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

//  Id pregunta: 273 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  Indique cu&aacute;l de las siguientes afirmaciones sobre la Agencia de Protecci&oacute;n de Datos es falsa de acuerdo con lo establecido en el real Decreto 428/93, de 26 de marzo, por el que se aprueba su Estatuto:";
 choices[0]= new Array();
 choices[0][0] = "Vela por el cumplimiento de la Ley Org&aacute;nica 5/92, de 29 de octubre, de regulaci&oacute;n del tratamiento automatizado de datos de car&aacute;cter personal (hoy d&iacute;a sustituida por la LOPD)";
 choices[0][1] = "Se relaciona con el Gobierno a trav&eacute;s del Ministerio de Justicia";
 choices[0][2] = "Dictar&aacute; recomendaciones sobre seguridad y control de acceso a ficheros";
 choices[0][3] = "Su Consejo Consultivo es un &oacute;rgano colegiado compuesto por doce miembros que asesora al Director de la Agencia de Protecci&oacute;n de  Datos";
 answers[0] = choices[0][3];
 units[0] = "29";
 comments[0] = "Id Pregunta: 273. ";


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


//  Id pregunta: 278 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  La Agencia de Protecci&oacute;n de Datos:";
 choices[2]= new Array();
 choices[2][0] = "Es un ente de derecho p&uacute;blico que act&uacute;a con dependencia del Ministerio de Justicia en el ejercicio de sus funciones";
 choices[2][1] = "Es un ente de derecho privado que act&uacute;a en el ejercicio de sus funciones seg&uacute;n lo dispuesto por el Ministerio de Justicia ";
 choices[2][2] = "Es un ente de derecho p&uacute;blico que act&uacute;a con plena independencia de las Administraciones P&uacute;blicas en el ejercicio de sus funciones";
 choices[2][3] = "Ninguna de las anteriores es correcta";
 answers[2] = choices[2][2];
 units[2] = "29";
 comments[2] = "Id Pregunta: 278. ";


//  Id pregunta: 328 AÃ±o de creación de pregunta: 2009-01-01
 questions[3]= "4)  Los ficheros con datos de car&aacute;cter personal de &aacute;mbito departamental, usualmente soportados por herramientas ofim&aacute;ticas de usuario final:";
 choices[3]= new Array();
 choices[3][0] = "Precisan ser declarados por el organismo pero no inscritos en el registro de ficheros de la agencia de protecci&oacute;n de datos.";
 choices[3][1] = "No precisan ser declarados pero s&iacute; ser inscritos en el registro de la agencia de protecci&oacute;n de datos.";
 choices[3][2] = "Se caracterizan como de nivel b&aacute;sico en el RD 1720/2007 por las plataformas en las que se soportan.";
 choices[3][3] = "Se tratan a todos los efectos como el resto de ficheros de datos de car&aacute;cter personal con las consideraciones introducidas por el RD 1720/2007.";
 answers[3] = choices[3][3];
 units[3] = "29";
 comments[3] = "Id Pregunta: 328. NULL";


//  Id pregunta: 347 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  Con car&aacute;cter general, la transferencia de ficheros con datos de car&aacute;cter personal se puede hacer:";
 choices[4]= new Array();
 choices[4][0] = "A cualquier pa&iacute;s europeo y africano";
 choices[4][1] = "S&oacute;lo a Europa y Asia";
 choices[4][2] = "S&oacute;lo dentro de UE";
 choices[4][3] = "Con destino a pa&iacute;ses que proporcionen un nivel de protecci&oacute;n equiparable al que presta la LOPD";
 answers[4] = choices[4][3];
 units[4] = "29";
 comments[4] = "Id Pregunta: 347. ";


//  Id pregunta: 348 AÃ±o de creación de pregunta: 2009-01-01
 questions[5]= "6)  La transferencia internacional de datos de car&aacute;cter personal con destino a pa&iacute;ses que no proporcionen un nivel de protecci&oacute;n equiparable sin autorizaci&oacute;n del Director de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos salvo en los supuestos en los que conforme a la LOPD y sus disposiciones de desarrollo dicha autorizaci&oacute;n no resulta necesaria, es una infracci&oacute;n:";
 choices[5]= new Array();
 choices[5][0] = "Leve";
 choices[5][1] = "Grave";
 choices[5][2] = "Muy grave ";
 choices[5][3] = "No es infracci&oacute;n";
 answers[5] = choices[5][2];
 units[5] = "29";
 comments[5] = "Id Pregunta: 348. ";


//  Id pregunta: 404 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Respecto a los derechos de rectificaci&oacute;n y cancelaci&oacute;n:";
 choices[6]= new Array();
 choices[6][0] = "El plazo para hacer efectiva la rectificaci&oacute;n o cancelaci&oacute;n solicitada por el afectado, es de 1 a&ntilde;o";
 choices[6][1] = "La cancelaci&oacute;n se ejecutar&aacute; mediante supresi&oacute;n de los datos";
 choices[6][2] = "Los datos cancelados no podr&aacute;n ser conservados en ning&uacute;n caso";
 choices[6][3] = "La cancelaci&oacute;n de los datos se ejecutar&aacute; mediante bloqueo de los datos, conserv&aacute;ndose los mismos &uacute;nicamente a disposici&oacute;n de los Tribunales o de las AAPP";
 answers[6] = choices[6][3];
 units[6] = "29";
 comments[6] = "Id Pregunta: 404. ";


//  Id pregunta: 437 AÃ±o de creación de pregunta: 2009-01-01
 questions[7]= "8)  Seg&uacute;n la LOPD, los datos de car&aacute;cter personal que revelan la ideolog&iacute;a, religi&oacute;n y creencias podr&aacute;n ser objeto de tratamiento automatizado:";
 choices[7]= new Array();
 choices[7][0] = "Con consentimiento expreso del afectado";
 choices[7][1] = "Con consentimiento expreso y por escrito del afectado";
 choices[7][2] = "Nunca podr&aacute; ser objeto de tratamiento automatizado";
 choices[7][3] = "Cuando por razones de inter&eacute;s general as&iacute; lo disponga una Ley o el afectado consienta expresamente";
 answers[7] = choices[7][1];
 units[7] = "29";
 comments[7] = "Id Pregunta: 437. ";


//  Id pregunta: 441 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Seg&uacute;n la Ley Org&aacute;nica 15/99 de Protecci&oacute;n de Datos de car&aacute;cter personal, no ser&aacute; preciso el consentimiento del interesado en la comunicaci&oacute;n de datos a un tercero cuando:";
 choices[8]= new Array();
 choices[8][0] = "Cuando la cesi&oacute;n est&aacute; autorizada por una Ley";
 choices[8][1] = "Cuando la cesi&oacute;n est&aacute; autorizada por un Real Decreto";
 choices[8][2] = "Cuando la comunicaci&oacute;n tenga por destinatario al Presidente del Gobierno";
 choices[8][3] = "Cuando se realice para garantizar el inter&eacute;s general";
 answers[8] = choices[8][0];
 units[8] = "29";
 comments[8] = "Id Pregunta: 441. ";


//  Id pregunta: 496 AÃ±o de creación de pregunta: 2003-01-01
 questions[9]= "10)  De acuerdo con la Ley Org&aacute;nica de Protecci&oacute;n de Datos Personales (LOPD), c&uacute;al de los siguientes datos es un dato especialmente protegido";
 choices[9]= new Array();
 choices[9][0] = "Sexo";
 choices[9][1] = "Nombre";
 choices[9][2] = "Raza";
 choices[9][3] = "Direcci&oacute;n";
 answers[9] = choices[9][2];
 units[9] = "29";
 comments[9] = "Id Pregunta: 496. ";


//  Id pregunta: 548 AÃ±o de creación de pregunta: 2004-01-01
 questions[10]= "11)  La LOPD es FALSO que NO es de aplicaci&oacute;n a:";
 choices[10]= new Array();
 choices[10][0] = "Ficheros sometidos a la normativa sobre protecci&oacute;n de materias clasificadas";
 choices[10][1] = "Ficheros establecidos para la investigaci&oacute;n del terrorismo y de formas graves de delincuencia organizada";
 choices[10][2] = "Los ficheros regulados por la legislaci&oacute;n de r&eacute;gimen electoral";
 choices[10][3] = "Los ficheros mantenidos por personas f&iacute;sicas en el ejercicio de actividades exclusivamente personales o dom&eacute;sticas.";
 answers[10] = choices[10][2];
 units[10] = "29";
 comments[10] = "Id Pregunta: 548. ";


//  Id pregunta: 670 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Seg&uacute;n el R.D. 209/2003:";
 choices[11]= new Array();
 choices[11][0] = "la Administraci&oacute;n P&uacute;blica proporcionar&aacute; al ciudadano una direcci&oacute;n &uacute;nica mediante la que &eacute;ste deber&aacute; realizar la tramitaci&oacute;n electr&oacute;nica pertinente una vez se disponga de los medios adecuados";
 choices[11][1] = "Se podr&aacute;n realizar por los organismos competentes copias firmadas de los documentos electr&oacute;nicos, de la misma manera que se pueden compulsar y sellar copias de los documentos en papel";
 choices[11][2] = "Los c&oacute;mputos de los plazos de entrega a efectos legales podr&aacute;n incluir d&iacute;as inh&aacute;biles, al estar los registros electr&oacute;nicos funcionando 24 horas al d&iacute;a y 7 d&iacute;as a la semana";
 choices[11][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[11] = choices[11][3];
 units[11] = "30";
 comments[11] = "Id Pregunta: 670. NULL";


//  Id pregunta: 672 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Teniendo en cuenta el RD 209/2003, indique cu&aacute;l de los siguientes requisitos no es preciso asegurar en la transmisi&oacute;n o recepci&oacute;n de comunicaciones entre la Administraci&oacute;n del Estado y cualquier persona f&iacute;sica o jur&iacute;dica?:";
 choices[12]= new Array();
 choices[12][0] = "Garant&iacute;a de disponibilidad y acceso";
 choices[12][1] = "Existencia de compatibilidad entre emisor y receptor";
 choices[12][2] = "Existencia de medidas de seguridad tendentes a evitar la interceptaci&oacute;n y alteraci&oacute;n de comunicaciones as&iacute; como los accesos no autorizados";
 choices[12][3] = "Garant&iacute;a de comunicaci&oacute;n multicanal entre emisor y receptor";
 answers[12] = choices[12][3];
 units[12] = "30";
 comments[12] = "Id Pregunta: 672. ";


//  Id pregunta: 689 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  De acuerdo con la Ley 34/2002 de servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico, la prestaci&oacute;n de servicios de la sociedad de la informaci&oacute;n:";
 choices[13]= new Array();
 choices[13][0] = "Estar&aacute; sujeta a autorizaci&oacute;n previa";
 choices[13][1] = "No estar&aacute; sujeta a autorizaci&oacute;n previa";
 choices[13][2] = "No estar&aacute; sujeta a autorizaci&oacute;n previa, salvo para servicios relacionados con la salud";
 choices[13][3] = "No estar&aacute; sujeta a autorizaci&oacute;n previa, salvo para servicios relacionados con la juventud y la infancia";
 answers[13] = choices[13][1];
 units[13] = "30";
 comments[13] = "Id Pregunta: 689. Ley 34/2002, art&iacute;culo 6";


//  Id pregunta: 691 AÃ±o de creación de pregunta: 2009-01-01
 questions[14]= "15)  De acuerdo con la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, se deber&aacute;n retener los datos de conexi&oacute;n y tr&aacute;fico por un periodo m&aacute;ximo de: ";
 choices[14]= new Array();
 choices[14][0] = "3 meses";
 choices[14][1] = "6 meses";
 choices[14][2] = "12 meses";
 choices[14][3] = "2 a&ntilde;os";
 answers[14] = choices[14][3];
 units[14] = "30";
 comments[14] = "Id Pregunta: 691. reglamentariamente se podr&aacute; reducir a seis meses o ampliar a dos a&ntilde;os, como permite la Directiva 2006/24/CE";


//  Id pregunta: 700 AÃ±o de creación de pregunta: 2009-01-01
 questions[15]= "16)  Respecto a la LSSI puede decirse que:";
 choices[15]= new Array();
 choices[15][0] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico";
 choices[15][1] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico u otro medio de comunicaci&oacute;n electr&oacute;nica equivalente";
 choices[15][2] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico u otro medio de comunicaci&oacute;n electr&oacute;nica equivalente que previamente no hubieran sido solicitadas o expresamente autorizadas por los remitentes de las misma";
 choices[15][3] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico u otro medio de comunicaci&oacute;n electr&oacute;nica equivalente que previamente no hubieran sido solicitadas o expresamente autorizadas por los destinatarios de las misma";
 answers[15] = choices[15][3];
 units[15] = "30";
 comments[15] = "Id Pregunta: 700. Ley 34/2002, art&iacute;culo 21";


//  Id pregunta: 711 AÃ±o de creación de pregunta: 2004-01-01
 questions[16]= "17)  Seg&uacute;n el RD 209/2003 por el que se regulan los registros y las notificaciones telem&aacute;ticas, as&iacute; como la utilizaci&oacute;n de medios telem&aacute;ticos para la sustituci&oacute;n de la aportaci&oacute;n de certificados por los ciudadanos";
 choices[16]= new Array();
 choices[16][0] = "La AGE pondr&aacute; a disposici&oacute;n del ciudadano un buz&oacute;n de correo electr&oacute;nico para notificaciones";
 choices[16][1] = "Dicho buz&oacute;n ser&aacute; v&aacute;lido para todas las notificaciones de la AGE ";
 choices[16][2] = "Cuando existiendo constancia de la recepci&oacute;n de la notificaci&oacute;n en la direcci&oacute;n electr&oacute;nica, transcurrieran diez d&iacute;as naturales sin que se lea a su contenido, se iniciar&aacute; el procedimiento administrativo.";
 choices[16][3] = "Cuando existiendo constancia de la recepci&oacute;n de la notificaci&oacute;n en la direcci&oacute;n electr&oacute;nica, transcurrieran diez d&iacute;as naturales sin que se acceda a su contenido, se entender&aacute; que la notificaci&oacute;n ha sido rechazada.";
 answers[16] = choices[16][3];
 units[16] = "30";
 comments[16] = "Id Pregunta: 711. Similar a examen TIC SS A 2003";


//  Id pregunta: 820 AÃ±o de creación de pregunta: 2009-01-01
 questions[17]= "18)  Seg&uacute;n la Ley 34/2002, podr&aacute;n adoptarse las medidas legales necesarias para que se interrumpa la prestaci&oacute;n de un servicio que atente contra los siguientes principios. Se&ntilde;alar la respuesta incorrecta:";
 choices[17]= new Array();
 choices[17][0] = "Salvaguarda del orden p&uacute;blico";
 choices[17][1] = "Salvaguarda del inter&eacute;s general";
 choices[17][2] = "Respeto a la dignidad de la persona";
 choices[17][3] = "Protecci&oacute;n de la salud p&uacute;blica";
 answers[17] = choices[17][1];
 units[17] = "30";
 comments[17] = "Id Pregunta: 820. Ley 34/2002, art&iacute;culo 8";


//  Id pregunta: 1513 AÃ±o de creación de pregunta: 2003-01-01
 questions[18]= "19)  &iquest;Qui&eacute;n puede relizar servicios de certificaci&oacute;n?";
 choices[18]= new Array();
 choices[18][0] = "Una persona f&iacute;sica";
 choices[18][1] = "Una persona jur&iacute;dica";
 choices[18][2] = "Ambas";
 choices[18][3] = "S&oacute;lo el Estado";
 answers[18] = choices[18][2];
 units[18] = "30";
 comments[18] = "Id Pregunta: 1513. Ley 59/2003, art&iacute;culo 2.2";


//  Id pregunta: 1871 AÃ±o de creación de pregunta: 2006-01-01
 questions[19]= "20)  &iquest;Qu&eacute; norma se utiliza para la certificaci&oacute;n de dispositivos seguros de creaci&oacute;n de firma?";
 choices[19]= new Array();
 choices[19][0] = "ISO 17799";
 choices[19][1] = "CWA 14169";
 choices[19][2] = "UNE 71502";
 choices[19][3] = "EIA 568 B2";
 answers[19] = choices[19][1];
 units[19] = "30";
 comments[19] = "Id Pregunta: 1871. Decisi&oacute;n de la Comisi&oacute;n de 14 de julio de 2003, Anexo B";


//  Id pregunta: 1874 AÃ±o de creación de pregunta: 2006-01-01
 questions[20]= "21)  De acuerdo con la normativa relativa sobre firma electr&oacute;nica, se&ntilde;ale la falsa:";
 choices[20]= new Array();
 choices[20][0] = "La prestaci&oacute;n de servicios de certificaci&oacute;n no est&aacute; sujeta a autorizaci&oacute;n previa y se realizar&aacute; en r&eacute;gimen de libre competencia";
 choices[20][1] = "El firmante es una persona que posee el dispositivo de creaci&oacute;n de firma y que act&uacute;a en nombre propio o de una persona f&iacute;sica o jur&iacute;dica a la que representa.";
 choices[20][2] = "En el caso de certificados reconocidos, el per&iacute;odo de validez no podr&aacute; ser superior a 4 a&ntilde;os";
 choices[20][3] = "En el caso de certificados reconocidos, el per&iacute;odo de validez no podr&aacute; ser superior a 5 a&ntilde;os";
 answers[20] = choices[20][2];
 units[20] = "30";
 comments[20] = "Id Pregunta: 1874. Ley 9/2014, Disposici&oacute;n Final Sexta";


//  Id pregunta: 2557 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  El programa IDABC:";
 choices[21]= new Array();
 choices[21][0] = "Pretende el Intercambio de Datos e interoperabilidad entre Adminsitraciones, Empresas y Ciudadanos";
 choices[21][1] = "Contiene tres directivas";
 choices[21][2] = "Financiaba tanto los proyectos horizontales como verticales en su totalidad";
 choices[21][3] = "Fue creado antes que el ENS";
 answers[21] = choices[21][0];
 units[21] = "30";
 comments[21] = "Id Pregunta: 2557. ";


//  Id pregunta: 4448 AÃ±o de creación de pregunta: 2007-01-01
 questions[22]= "23)  Seg&uacute;n la Ley Org&aacute;nica de Protecci&oacute;n de Datos, las medidas de &iacute;ndole t&eacute;cnica y organizativas necesarias que garanticen la seguridad de los datos de car&aacute;cter personal, deben ser adoptadas por:";
 choices[22]= new Array();
 choices[22][0] = "&Uacute;nicamente el encargado del tratamiento.";
 choices[22][1] = "El afectado de com&uacute;n acuerdo con el encargado del tratamiento.";
 choices[22][2] = "El responsable del fichero y, en su caso, el encargado del tratamiento.";
 choices[22][3] = "&Uacute;nicamente el responsable del fichero";
 answers[22] = choices[22][2];
 units[22] = "29";
 comments[22] = "Id Pregunta: 4448. ";


//  Id pregunta: 5271 AÃ±o de creación de pregunta: 2003-01-01
 questions[23]= "24)  El RD 1720/2007 deroga ..";
 choices[23]= new Array();
 choices[23][0] = "RD 994/1999";
 choices[23][1] = "RD 263/1996";
 choices[23][2] = "RD 1332/1994";
 choices[23][3] = "a y c";
 answers[23] = choices[23][3];
 units[23] = "29";
 comments[23] = "Id Pregunta: 5271. ";


//  Id pregunta: 5665 AÃ±o de creación de pregunta: 2003-01-01
 questions[24]= "25)  Seg&uacute;n el RD 1720/2007, &iquest;cual de los siguientes no es un derecho del afectado?";
 choices[24]= new Array();
 choices[24][0] = "Derecho de rectificacion";
 choices[24][1] = "Derecho de cancelacion";
 choices[24][2] = "Derecho de oposici&oacute;n";
 choices[24][3] = "Derecho de informaci&oacute;n";
 answers[24] = choices[24][3];
 units[24] = "29";
 comments[24] = "Id Pregunta: 5665. ";


//  Id pregunta: 5792 AÃ±o de creación de pregunta: 2009-01-01
 questions[25]= "26)  Indique cu&aacute;l de los siguientes derechos de los ciudadanos al relacionarse con las Administraciones P&uacute;blicas por medios electr&oacute;nicos NO est&aacute; reconocido por la ley 11/2007";
 choices[25]= new Array();
 choices[25][0] = "A la igualdad en el acceso electr&oacute;nico a los servicios de las Administraciones P&uacute;blicas.";
 choices[25][1] = "A conocer por medios electr&oacute;nicos el estado de tramitaci&oacute;n de cualquier procedimiento administrativo.";
 choices[25][2] = "A obtener copias electr&oacute;nicas de los documentos electr&oacute;nicos que formen parte de procedimientos en los que tengan la condici&oacute;n de interesado.";
 choices[25][3] = "A la conservaci&oacute;n en formato electr&oacute;nico por las Administraciones P&uacute;blicas de los documentos electr&oacute;nicos que formen parte de un expediente.";
 answers[25] = choices[25][1];
 units[25] = "43";
 comments[25] = "Id Pregunta: 5792. MAP 2008 A2";


//  Id pregunta: 5801 AÃ±o de creación de pregunta: 2009-01-01
 questions[26]= "27)  El Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica depende de:";
 choices[26]= new Array();
 choices[26][0] = "La Conferencia Sectorial de Administraci&oacute;n P&uacute;blica.";
 choices[26][1] = "La Comisi&oacute;n Permanente del Consejo Superior de Administraci&oacute;n Electr&oacute;nica.";
 choices[26][2] = "El Director General para el impulso de la Administraci&oacute;n electr&oacute;nica.";
 choices[26][3] = "Presidencia del Gobierno.";
 answers[26] = choices[26][0];
 units[26] = "30";
 comments[26] = "Id Pregunta: 5801. MAP 2008 A2";


//  Id pregunta: 5827 AÃ±o de creación de pregunta: 2009-01-01
 questions[27]= "28)  Suponga que recibe una firma electr&oacute;nica avanzada de tipo XAdES-T sin una asociaci&oacute;n espec&iacute;fica a ninguna pol&iacute;tica de firma concreta y que ha verificado con &eacute;xito el formato de la firma y su integridad. En esta situaci&oacute;n, la evaluaci&oacute;n de la validez de dicha firma electr&oacute;nica seg&uacute;n la norma ETSI TS 101 903 v1.3.2 da como resultado:";
 choices[27]= new Array();
 choices[27][0] = "Firma inv&aacute;lida";
 choices[27][1] = "Validaci&oacute;n incompleta de la firma";
 choices[27][2] = "Firma v&aacute;lida";
 choices[27][3] = "Firma suspendida";
 answers[27] = choices[27][1];
 units[27] = "30";
 comments[27] = "Id Pregunta: 5827. MAP 2008 A1";


//  Id pregunta: 5882 AÃ±o de creación de pregunta: 2009-01-01
 questions[28]= "29)  &iquest;Cu&aacute;ndo deber&aacute;n tener implantadas la totalidad de las medidas de seguridad los ficheros, tanto automatizados como no automatizados, creados con posterioridad a la fecha de entrada en vigor del RD 1720/2007, de 21 de diciembre, por el que se aprueba el Reglamento de Desarrollo de la LOPD?:";
 choices[28]= new Array();
 choices[28][0] = "En el plazo de un a&ntilde;o desde su creaci&oacute;n";
 choices[28][1] = "En el plazo de seis meses desde su creaci&oacute;n";
 choices[28][2] = "En el momento de su creaci&oacute;n";
 choices[28][3] = "Depender&aacute; del tama&ntilde;o del fichero";
 answers[28] = choices[28][2];
 units[28] = "29";
 comments[28] = "Id Pregunta: 5882. MAP 2008 A1";


//  Id pregunta: 5954 AÃ±o de creación de pregunta: 2009-01-01
 questions[29]= "30)  Respecto al uso de Lenguas Oficiales, la Ley 11/2007 de AECSP, especifica lo siguiente:";
 choices[29]= new Array();
 choices[29][0] = "Las sedes electr&oacute;nicas cuyo titular sit&uacute;e su domicilio social sobre territorios con r&eacute;gimen de cooficialidad ling&uuml;&iacute;stica posibilitar&aacute;n el acceso a sus contenidos y servicios en las lenguas correspondientes";
 choices[29][1] = "Se podr&aacute; permitir el uso de las lenguas oficiales del Estado en las relaciones por medios electr&oacute;nicos de los ciudadanos con las Administraciones P&uacute;blicas, en los t&eacute;rminos previstos en la Ley 30/1992, de R&eacute;gimen Jur&iacute;dico de las Administraciones P&uacute;blicas y del Procedimiento Administrativo Com&uacute;n y en la normativa que en cada caso resulte de aplicaci&oacute;n.";
 choices[29][2] = "Los sistemas y aplicaciones utilizados en la gesti&oacute;n electr&oacute;nica de los procedimientos se adaptar&aacute;n a lo dispuesto en cuanto al uso de lenguas cooficiales en el art&iacute;culo 36 de la Ley 30/1992, de R&eacute;gimen Jur&iacute;dico de las Administraciones P&uacute;blicas y el Procedimiento Administrativo Com&uacute;n.";
 choices[29][3] = "Cada Administraci&oacute;n P&uacute;blica afectada determinar&aacute; el calendario para el cumplimiento progresivo de lo previsto en la presente disposici&oacute;n, debiendo garantizar su cumplimiento total a partir del 31 de diciembre de 2009";
 answers[29] = choices[29][2];
 units[29] = "43";
 comments[29] = "Id Pregunta: 5954. Disposici&oacute;n Adicional sexta. ";


//  Id pregunta: 5969 AÃ±o de creación de pregunta: 2010-01-01
 questions[30]= "31)  A efectos de la Ley Org&aacute;nica 15/1999, se define dato de car&aacute;cter personal como:";
 choices[30]= new Array();
 choices[30][0] = "Cualquier informaci&oacute;n relativa a una persona f&iacute;sica o jur&iacute;dica";
 choices[30][1] = "Cualquier informaci&oacute;n sobre personas";
 choices[30][2] = "Todos los datos relativos a una persona";
 choices[30][3] = "Cualquier informaci&oacute;n concerniente a personas f&iacute;sicas identificadas o identificables";
 answers[30] = choices[30][3];
 units[30] = "29";
 comments[30] = "Id Pregunta: 5969. Castilla La Mancha 2009";


//  Id pregunta: 5987 AÃ±o de creación de pregunta: 2010-01-01
 questions[31]= "32)  De acuerdo con la normativa vigente en materia de protecci&oacute;n jur&iacute;dica de los programas de ordenador, &iquest;durante cu&aacute;nto tiempoestar&aacute;n protegidos los derechos de explotaci&oacute;n de un manual de uso de un programa obra de una persona natural?";
 choices[31]= new Array();
 choices[31][0] = "100 a&ntilde;os desde su publicaci&oacute;n, despu&eacute;s pasa a dominio p&uacute;blico.";
 choices[31][1] = "Como es una obra impresa, tiene la consideraci&oacute;n de obra literaria y se protege durante la vida del autor y 60 a&ntilde;os despu&eacute;s de su muerte o declaraci&oacute;n de fallecimiento.";
 choices[31][2] = "A estos efectos, el manual se considera parte del programa y se protege durante la vida del autor y 70 a&ntilde;os despu&eacute;s de su muerte o declaraci&oacute;n de fallecimiento.";
 choices[31][3] = "Depende, si el manual est&aacute; impreso, entonces la protecci&oacute;n es la vida del autor y 50 a&ntilde;os despu&eacute;s de su muerte y si es un tutorial no impreso, entonces es la vida del autor y 40 a&ntilde;os despu&eacute;s de su muerte.";
 answers[31] = choices[31][2];
 units[31] = "36";
 comments[31] = "Id Pregunta: 5987. TIC A 2009";


//  Id pregunta: 5997 AÃ±o de creación de pregunta: 2010-01-01
 questions[32]= "33)  El derecho moral sobre un programa de ordenador implica que:";
 choices[32]= new Array();
 choices[32][0] = "El que tiene este derecho lo puede ceder o transmitir, con o sin contraprestaci&oacute;n econ&oacute;mica.";
 choices[32][1] = "El que tiene este derecho tambi&eacute;n posee el derecho de explotaci&oacute;n, reproducci&oacute;n, distribuci&oacute;n, comunicaci&oacute;n p&uacute;blica ytransformaci&oacute;n.";
 choices[32][2] = "El que tiene este derecho no lo puede ceder, ni transmitir, ni siquiera renunciar a &eacute;l.";
 choices[32][3] = "El que tiene este derecho puede exigir el derecho de remuneraci&oacute;n por copia privada.";
 answers[32] = choices[32][2];
 units[32] = "36";
 comments[32] = "Id Pregunta: 5997. TIC A 2009";


//  Id pregunta: 6123 AÃ±o de creación de pregunta: 2010-01-01
 questions[33]= "34)  Por v&iacute;a electr&oacute;nica en Espa&ntilde;a, pueden celebrarse los siguientes tipos de contratos:";
 choices[33]= new Array();
 choices[33][0] = "Todos.";
 choices[33][1] = "Ninguno";
 choices[33][2] = "Todos excepto los relativos al derecho de familia y sucesiones (adopciones, matrimonio, testamento).";
 choices[33][3] = "S&oacute;lo los relativos a comercio electr&oacute;nico.";
 answers[33] = choices[33][2];
 units[33] = "30";
 comments[33] = "Id Pregunta: 6123. TIC A 2009 (Ley 34/2002, art&iacute;culo 23.4)";


//  Id pregunta: 6190 AÃ±o de creación de pregunta: 2010-01-01
 questions[34]= "35)  Seg&uacute;n el Esquema Nacional de Interoperabilidad, la interoperabilidad se entender&aacute; contemplando las dimensiones";
 choices[34]= new Array();
 choices[34][0] = "T&eacute;cnica, sem&aacute;ntica y organizativa";
 choices[34][1] = "T&eacute;cnica, sem&aacute;ntica y funcional";
 choices[34][2] = "Funcional, sem&aacute;ntica y organizativa";
 choices[34][3] = "T&eacute;cnica, funcional y organizativa";
 answers[34] = choices[34][0];
 units[34] = "43";
 comments[34] = "Id Pregunta: 6190. Art&iacute;culo 6";


//  Id pregunta: 6197 AÃ±o de creación de pregunta: 2010-01-01
 questions[35]= "36)  Para la firma electr&oacute;nica por parte de personal al servicio de las Administraciones P&uacute;blicas NO se contempla el uso de";
 choices[35]= new Array();
 choices[35][0] = "Sello electr&oacute;nico";
 choices[35][1] = "DNI electr&oacute;nico";
 choices[35][2] = "Certificado de empleado p&uacute;blico";
 choices[35][3] = "Sistemas de c&oacute;digo seguro de verificaci&oacute;n";
 answers[35] = choices[35][0];
 units[35] = "43";
 comments[35] = "Id Pregunta: 6197. Articulo 21 RD 1671/2009";


//  Id pregunta: 6367 AÃ±o de creación de pregunta: 2010-01-01
 questions[36]= "37)  Se&ntilde;ale la sentencia correcta, en relaci&oacute;n a la seguridad por defecto definida en el Esquema Nacional de Seguridad:";
 choices[36]= new Array();
 choices[36][0] = "En un sistema de explotaci&oacute;n se eliminar&aacute;n o desactivar&aacute;n, mediante el control de la configuraci&oacute;n, las funciones que no sean de inter&eacute;s, sean innecesarias e, incluso, aquellas que sean inadecuadas al fin que se persigue.";
 choices[36][1] = "El sistema proporcionar&aacute; la funcionalidad requerida para que la organizaci&oacute;n alcance sus objetivos, proveyendo toda funcionalidad adicional posible.";
 choices[36][2] = "Las funciones de operaci&oacute;n, administraci&oacute;n y registro de actividad ser&aacute;n las m&aacute;ximas posibles, y se asegurar&aacute; que s&oacute;lo son accesibles por las personas, o desde emplazamientos o equipos, autorizados, pudiendo exigirse en su caso restricciones de horario y puntos de acceso facultados.";
 choices[36][3] = "Todas las anteriores";
 answers[36] = choices[36][0];
 units[36] = "43";
 comments[36] = "Id Pregunta: 6367. Art&iacute;culo 19 ENS";


//  Id pregunta: 6379 AÃ±o de creación de pregunta: 2010-01-01
 questions[37]= "38)  &iquest;A qui&eacute;n corresponde aprobar el Plan de direccionamiento e interconexi&oacute;n de redes en la Administraci&oacute;n?";
 choices[37]= new Array();
 choices[37][0] = "A la Comisi&oacute;n de Estrategia TIC";
 choices[37][1] = "Al Centro Criptol&oacute;gico Nacional";
 choices[37][2] = "Al Gobierno";
 choices[37][3] = "A la Secretaria de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n";
 answers[37] = choices[37][0];
 units[37] = "43";
 comments[37] = "Id Pregunta: 6379. Art&iacute;culo 14 ENI, referencia actualizada de Consejo Superior Administraci&oacute;n Electr&oacute;nica a CETIC por Disp Adicional 2&ordf; del RD 806/2014.";


//  Id pregunta: 6402 AÃ±o de creación de pregunta: 2010-01-01
 questions[38]= "39)  Las Administraciones podr&aacute;n poner a disposici&oacute;n de todos los organismos las aplicaciones que decidan declarar de c&oacute;digo abierto, a trav&eacute;s de el&hellip;";
 choices[38]= new Array();
 choices[38][0] = "Centro de Transferencia de Tecnolog&iacute;a";
 choices[38][1] = "Centro de Compartici&oacute;n de Tecnolog&iacute;a";
 choices[38][2] = "Proyecto Aporta";
 choices[38][3] = "Proyecto Comparte";
 answers[38] = choices[38][0];
 units[38] = "30";
 comments[38] = "Id Pregunta: 6402. NULL";


//  Id pregunta: 6410 AÃ±o de creación de pregunta: 2010-01-01
 questions[39]= "40)  De acuerdo a lo dispuesto en la ley sobre reutilizaci&oacute;n de la informaci&oacute;n del sector p&uacute;blico, se considerar&aacute; infracci&oacute;n muy grave:";
 choices[39]= new Array();
 choices[39][0] = "La falta de menci&oacute;n de la fecha de la &uacute;ltima actualizaci&oacute;n de la informaci&oacute;n";
 choices[39][1] = "La ausencia de cita de la fuente";
 choices[39][2] = "La reutilizaci&oacute;n de documentaci&oacute;n sin haber obtenido la correspondiente licencia en los casos en que &eacute;sta sea requerida";
 choices[39][3] = "La desnaturalizaci&oacute;n del sentido de la informaci&oacute;n para cuya reutilizaci&oacute;n se haya concedido una licencia";
 answers[39] = choices[39][3];
 units[39] = "30";
 comments[39] = "Id Pregunta: 6410. Art&iacute;culo 11 Ley 37/2007";


//  Id pregunta: 6461 AÃ±o de creación de pregunta: 2010-01-01
 questions[40]= "41)  Seg&uacute;n la Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los Servicios P&uacute;blicos 'La publicaci&oacute;n de actos y comunicaciones que deban publicarse en tabl&oacute;n de anuncios o edictos':";
 choices[40]= new Array();
 choices[40][0] = "Deber&aacute; ser sustituida por su publicaci&oacute;n en la sede electr&oacute;nica del organismo correspondiente";
 choices[40][1] = "No podr&aacute; ser sustituida por su publicaci&oacute;n en la sede electr&oacute;nica del organismo correspondiente";
 choices[40][2] = "Podr&aacute; ser sustituida o complementada por su publicaci&oacute;n en la sede electr&oacute;nica del organismo correspondiente";
 choices[40][3] = "Deber&aacute; ser complementada con su publicaci&oacute;n en la sede electr&oacute;nica del organismo correspondiente";
 answers[40] = choices[40][2];
 units[40] = "43";
 comments[40] = "Id Pregunta: 6461. Castilla La Mancha 2009";


//  Id pregunta: 6494 AÃ±o de creación de pregunta: 2010-01-01
 questions[41]= "42)  Seg&uacute;n la Ley Org&aacute;nica 15/1999, el censo promocional es una fuente de acceso p&uacute;blico s&oacute;lo:";
 choices[41]= new Array();
 choices[41][0] = "Durante los cinco &uacute;ltimos a&ntilde;os de vigencia";
 choices[41][1] = "Durante el &uacute;ltimo a&ntilde;o de vigencia";
 choices[41][2] = "Nunca es fuente de acceso p&uacute;blico";
 choices[41][3] = "Siempre que no aparezca el DNI";
 answers[41] = choices[41][1];
 units[41] = "29";
 comments[41] = "Id Pregunta: 6494. Castilla La Mancha 2009";


//  Id pregunta: 7315 AÃ±o de creación de pregunta: 2010-01-01
 questions[42]= "43)  Entre los servicios comunes que se ofrecen en la plataforma de intermediaci&oacute;n de servicios se encuentran:";
 choices[42]= new Array();
 choices[42][0] = "Servicio de validaci&oacute;n de normas y est&aacute;ndares";
 choices[42][1] = "Servicio de autenticaci&oacute;n de informes";
 choices[42][2] = "Servicio de verificaci&oacute;n de Datos de Identidad y Residencia";
 choices[42][3] = "Todas las anteriores son correctas";
 answers[42] = choices[42][2];
 units[42] = "44";
 comments[42] = "Id Pregunta: 7315. NULL";


//  Id pregunta: 8731 AÃ±o de creación de pregunta: 2011-01-01
 questions[43]= "44)  Se considera documento electr&oacute;nico de acuerdo a la ley 11/2007 a:";
 choices[43]= new Array();
 choices[43][0] = "La informaci&oacute;n de naturaleza administrativa, &uacute;nicamente en forma electr&oacute;nica, archivada en soporte electr&oacute;nico seg&uacute;n un formato determinado y susceptible de identificaci&oacute;n y tratamiento diferenciado.";
 choices[43][1] = "La informaci&oacute;n de naturaleza administrativa, &uacute;nicamente en forma electr&oacute;nica, archivada en soporte electr&oacute;nico, o impresa en papel, siempre seg&uacute;n un formato determinado y susceptible de identificaci&oacute;n y tratamiento diferenciado.";
 choices[43][2] = "La informaci&oacute;n de cualquier naturaleza en forma electr&oacute;nica, archivada en soporte electr&oacute;nico o en formato papel, siempre que se haya firmado con un certificado electr&oacute;nico reconocido";
 choices[43][3] = "La informaci&oacute;n de cualquier naturaleza en forma electr&oacute;nica, archivada en un soporte electr&oacute;nico seg&uacute;n un formato determinado y susceptible de identificaci&oacute;n y tratamiento diferenciado.";
 answers[43] = choices[43][3];
 units[43] = "43";
 comments[43] = "Id Pregunta: 8731. Examen TIC A2 2010 interna";


//  Id pregunta: 8734 AÃ±o de creación de pregunta: 2011-01-01
 questions[44]= "45)  La protecci&oacute;n de datos personales encuentra una de sus bases en:";
 choices[44]= new Array();
 choices[44][0] = "&Uacute;nicamente en la legislaci&oacute;n espa&ntilde;ola, en concreto, en Ley Org&aacute;nica 15/1999 de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal (LOPD).";
 choices[44][1] = "&Uacute;nicamente en la legislaci&oacute;n espa&ntilde;ola, inici&aacute;ndose en la Ley Org&aacute;nica 5/1992, de 29 de octubre, de Regulaci&oacute;n del Tratamiento Automatizado de Datos de car&aacute;cter personal (LORTAD)";
 choices[44][2] = "La Carta Europea de Derechos Fundamentales de la Uni&oacute;n Europea, por la que se reconoce el derecho a la protecci&oacute;n de datos personales como un derecho fundamental.";
 choices[44][3] = "La protecci&oacute;n de los derechos de autor en el mundo digital, en tanto el autor sea una persona f&iacute;sica";
 answers[44] = choices[44][2];
 units[44] = "29";
 comments[44] = "Id Pregunta: 8734. Examen TIC A2 2010 interna";


//  Id pregunta: 8748 AÃ±o de creación de pregunta: 2011-01-01
 questions[45]= "46)  Un ciudadano quiere remitir un escrito con una sugerencia de servicio a un organismo con oficinas de atenci&oacute;n al p&uacute;blico, &iquest;est&aacute; contemplada en la Ley 11/2007, de Acceso Electr&oacute;nico de los Ciudadanos a los Servicios P&uacute;blicos, LAECSP, la posibilidad de que remita ese escrito, con un formato libre, a trav&eacute;s del registro electr&oacute;nico del organismo destinatario del mismo?";
 choices[45]= new Array();
 choices[45][0] = "Si, est&aacute; prevista tal posibilidad para cualquier solicitud, escrito o comunicaci&oacute;n dirigida a cualquier &oacute;rgano o entidad del &aacute;mbito de la administraci&oacute;n titular del registro";
 choices[45][1] = "No, porque s&oacute;lo se prev&eacute; la recepci&oacute;n de documentos normalizados, que est&eacute;n predeterminados en la normativa de creaci&oacute;n del registro, nunca un escrito no normalizado como el del enunciado";
 choices[45][2] = "Se prev&eacute; tal recepci&oacute;n, pero con car&aacute;cter informativo &uacute;nicamente, debiendo complementar el envi&oacute; con el escrito en papel, a trav&eacute;s de un registro f&iacute;sico, en un plazo definido en la normativa de desarrollo";
 choices[45][3] = "S&iacute;, porque cumple con el requisito indispensable de tratarse del registro del organismo destinatario del registro";
 answers[45] = choices[45][0];
 units[45] = "43";
 comments[45] = "Id Pregunta: 8748. Examen TIC A2 2010 interna";


//  Id pregunta: 8750 AÃ±o de creación de pregunta: 2011-01-01
 questions[46]= "47)  Dentro del contexto que marca la Ley 11/2007, un expediente electr&oacute;nico es:";
 choices[46]= new Array();
 choices[46][0] = "La copia electr&oacute;nica de un expediente en papel, que es el que conservar&aacute; la eficacia jur&iacute;dica, foliado mediante un &Iacute;ndice electr&oacute;nico y firmado electr&oacute;nicamente";
 choices[46][1] = "El conjunto de documentos electr&oacute;nicos correspondientes a alguno de los procedimientos administrativos incluidos en la normativa de creaci&oacute;n de la sede electr&oacute;nica";
 choices[46][2] = "El conjunto de documentos electr&oacute;nicos correspondientes a un procedimiento administrativo, cualquiera que sea el Upo de informaci&oacute;n que contengan";
 choices[46][3] = "Una aplicaci&oacute;n inform&aacute;tica para la gesti&oacute;n automatizada de expedientes en el &aacute;mbito de la Administraci&oacute;n General del Estado.";
 answers[46] = choices[46][2];
 units[46] = "43";
 comments[46] = "Id Pregunta: 8750. Examen TIC A2 2010 interna";


//  Id pregunta: 8779 AÃ±o de creación de pregunta: 2011-01-01
 questions[47]= "48)  El art&iacute;culo 3 de la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal, define como datos de car&aacute;cter personal:";
 choices[47]= new Array();
 choices[47][0] = "Cualquier informaci&oacute;n concerniente a personas f&iacute;sicas identificadas o no.";
 choices[47][1] = "Cualquier informaci&oacute;n concerniente a personas f&iacute;sicas y jur&iacute;dicas.";
 choices[47][2] = "Cualquier informaci&oacute;n concerniente a personas f&iacute;sicas identificadas o identificables.";
 choices[47][3] = "Cualquier informaci&oacute;n concerniente a personas identificadas.";
 answers[47] = choices[47][2];
 units[47] = "29";
 comments[47] = "Id Pregunta: 8779. Examen UPM A2 2011";


//  Id pregunta: 8782 AÃ±o de creación de pregunta: 2011-01-01
 questions[48]= "49)  Seg&uacute;n la Ley 11/2007, de 22 de junio, de Acceso Electr&oacute;nico de los Ciudadanos a los Servicios P&uacute;blicos, se entiende por documento electr&oacute;nico:";
 choices[48]= new Array();
 choices[48][0] = "El conjunto de datos en forma electr&oacute;nica, consignados junto a otros o asociados con ellos, que pueden ser utilizados como medio de identificaci&oacute;n del firmante.";
 choices[48][1] = "El conjunto de elementos intervinientes en la creaci&oacute;n de una firma electr&oacute;nica.";
 choices[48][2] = "La informaci&oacute;n de cualquier naturaleza en forma electr&oacute;nica, archivada en un soporte electr&oacute;nico seg&uacute;n un formato determinado y susceptible de identificaci&oacute;n y tratamiento diferenciado.";
 choices[48][3] = "El documento firmado electr&oacute;nicamente por un prestador de servicios de certificaci&oacute;n que vincula unos datos de verificaci&oacute;n de firma avanzada y confirma su identidad.";
 answers[48] = choices[48][2];
 units[48] = "43";
 comments[48] = "Id Pregunta: 8782. Examen UPM A2 2011";


//  Id pregunta: 8839 AÃ±o de creación de pregunta: 2011-01-01
 questions[49]= "50)  De acuerdo con la Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los Servicios P&uacute;blicos, son derechos de los ciudadanos en relaci&oacute;n con la utilizaci&oacute;n de los medios electr&oacute;nicos en la actividad administrativa:";
 choices[49]= new Array();
 choices[49][0] = "Que los servicios p&uacute;blicos se presten por medios electr&oacute;nicos, aunque sea con menor calidad que los medios presenciales ";
 choices[49][1] = "Que las personas jur&iacute;dicas puedan utilizar en todo caso los sistemas de firma electr&oacute;nica del Documento Nacional de Identidad para cualquier tr&aacute;mite electr&oacute;nico con cualquier Administraci&oacute;n P&uacute;blica, pero no as&iacute; las personas f&iacute;sicas.";
 choices[49][2] = "Que las personas f&iacute;sicas puedan utilizar en todo caso los sistemas de firma electr&oacute;nica del Documento Nacional de Identidad para cualquier tr&aacute;mite electr&oacute;nico con cualquier Administraci&oacute;n P&uacute;blica, excluy&eacute;ndose otros sistemas de firma";
 choices[49][3] = "Que puedan elegir, entre aquellos que en cada momento se encuentren disponibles, el canal a trav&eacute;s del cual relacionarse por medios electr&oacute;nicos con las Administraciones P&uacute;blicas";
 answers[49] = choices[49][3];
 units[49] = "43";
 comments[49] = "Id Pregunta: 8839. Examen UC3M 2010";


//  Id pregunta: 8942 AÃ±o de creación de pregunta: 2011-01-01
 questions[50]= "51)  &iquest;Cu&aacute;les de las siguientes no tendr&aacute;n la consideraci&oacute;n de copias aut&eacute;nticas seg&uacute;n la ley 18/2011?";
 choices[50]= new Array();
 choices[50][0] = "Las copias realizadas en soporte papel de documentos judiciales electr&oacute;nicos y firmados electr&oacute;nicamente por el secretario judicial que incluyan la impresi&oacute;n de un c&oacute;digo seguro de verificaci&oacute;n que permita contrastar su autenticidad";
 choices[50][1] = "Las copias realizadas por las oficinas judiciales, utilizando medios electr&oacute;nicos, de documentos emitidos originalmente por ellas en soporte papel";
 choices[50][2] = "Las copias realizadas por las oficinas judiciales, utilizando medios electr&oacute;nicos, de documentos emitidos por el interesado en soporte papel";
 choices[50][3] = "Las copias realizadas por medios electr&oacute;nicos de documentos electr&oacute;nicos emitidos por el propio interesado estando el documento electr&oacute;nico original en poder de la oficina judicial donde haya sido originado o incorporado y que la informaci&oacute;n de firma electr&oacute;nica y, en su caso, de sellado de tiempo permitan comprobar la coincidencia con dicho documento";
 answers[50] = choices[50][2];
 units[50] = "43";
 comments[50] = "Id Pregunta: 8942. ";


//  Id pregunta: 8947 AÃ±o de creación de pregunta: 2011-01-01
 questions[51]= "52)  Seg&uacute;n el Esquema Nacional de Seguridad, &iquest;cu&aacute;ndo se deben registrar todas las actividades de los usuarios en el sistema?";
 choices[51]= new Array();
 choices[51][0] = "Cuando la categor&iacute;a del sistema sea alta";
 choices[51][1] = "Cuando as&iacute; lo decida el responsable de los servidores";
 choices[51][2] = "Cuando la dimensi&oacute;n de trazabilidad sea de nivel alto";
 choices[51][3] = "En todos los casos anteriores";
 answers[51] = choices[51][2];
 units[51] = "43";
 comments[51] = "Id Pregunta: 8947. ";


//  Id pregunta: 9004 AÃ±o de creación de pregunta: 2011-01-01
 questions[52]= "53)  No es una infracci&oacute;n grave seg&uacute;n la LOPD:";
 choices[52]= new Array();
 choices[52][0] = "El incumplimiento de los restantes deberes de notificaci&oacute;n o requerimiento al afectado impuestos por esta Ley y sus disposiciones de desarrollo.";
 choices[52][1] = "Proceder a la creaci&oacute;n de ficheros de titularidad privada o iniciar la recogida de datos de car&aacute;cter personal para los mismos con finalidades distintas de las queconstituyen el objeto leg&iacute;timo de la empresa o entidad.";
 choices[52][2] = "Mantener los ficheros, locales, programas o equipos que contengan datos de car&aacute;cter personal sin las debidas condiciones de seguridad que por v&iacute;a reglamentaria se determinen.";
 choices[52][3] = "Tratar datos de car&aacute;cter personal sin recabar el consentimiento de las personas afectadas, cuando el mismo sea necesario conforme a lo dispuesto en esta Ley y sus disposiciones de desarrollo.";
 answers[52] = choices[52][1];
 units[52] = "29";
 comments[52] = "Id Pregunta: 9004. ";


//  Id pregunta: 9090 AÃ±o de creación de pregunta: 2013-01-01
 questions[53]= "54)  &iquest;Se pueden proteger las ideas que sirven de base a los programas de ordenador?";
 choices[53]= new Array();
 choices[53][0] = "S&oacute;lo las que sirvan de base para el desarrollo de interfaces";
 choices[53][1] = "S&oacute;lo las que sirvan de base para crear un nuevo programa";
 choices[53][2] = "S&oacute;lo las que sirvan de base para crear un nuevo programa y adem&aacute;s sean originales";
 choices[53][3] = "Todas las anteriores son falsas";
 answers[53] = choices[53][3];
 units[53] = "36";
 comments[53] = "Id Pregunta: 9090. ";


//  Id pregunta: 9092 AÃ±o de creación de pregunta: 2013-01-01
 questions[54]= "55)  El Texto Refundido de la Ley de Propiedad Intelectual establece que la duraci&oacute;n de la protecci&oacute;n de los derechos de explotaci&oacute;n sobre los programas de ordenador se extiende como m&aacute;ximo a:";
 choices[54]= new Array();
 choices[54][0] = "70 a&ntilde;os computados desde el d&iacute;a siguiente a la divulgaci&oacute;n l&iacute;cita del programa, si el autor es una persona jur&iacute;dica.";
 choices[54][1] = "40 a&ntilde;os desde el 1 de enero del a&ntilde;o siguiente a la divulgaci&oacute;n l&iacute;cita del programa o a su creaci&oacute;n si no se hubiera divulgado.";
 choices[54][2] = "Toda la vida del autor y 70 a&ntilde;os despu&eacute;s de su muerte, si el autor es una persona f&iacute;sica.";
 choices[54][3] = "40 a&ntilde;os desde el 1 de enero del a&ntilde;o siguiente a la divulgaci&oacute;n l&iacute;cita del programa, cualquiera que sea la presonalidad del autor.";
 answers[54] = choices[54][2];
 units[54] = "36";
 comments[54] = "Id Pregunta: 9092. ";


//  Id pregunta: 9095 AÃ±o de creación de pregunta: 2013-01-01
 questions[55]= "56)  Cuando un trabajador asalariado crea un programa de ordenador, en el ejercicio de sus funciones:";
 choices[55]= new Array();
 choices[55][0] = "Los derechos de explotaci&oacute;n pertenecen al trabajador salvo pacto en contrario";
 choices[55][1] = "Los derechos de explotaci&oacute;n pertenecen al empresario salvo pacto en contrario";
 choices[55][2] = "Los derechos morales pertenecen al trabajador salvo pacto en contrario";
 choices[55][3] = "Los derechos morales pertenecen al empresario salvo pacto en contrario";
 answers[55] = choices[55][1];
 units[55] = "36";
 comments[55] = "Id Pregunta: 9095. ";


//  Id pregunta: 9193 AÃ±o de creación de pregunta: 2013-01-01
 questions[56]= "57)  &iquest;Se pueden proteger las ideas que sirven de base a los programas de ordenador?";
 choices[56]= new Array();
 choices[56][0] = "S&oacute;lo las que sirvan de base para el desarrollo de interfaces";
 choices[56][1] = "S&oacute;lo las que sirvan de base para crear un nuevo programa";
 choices[56][2] = "S&oacute;lo las que sirvan de base para crear un nuevo programa y adem&aacute;s sean originales";
 choices[56][3] = "Todas las anteriores son falsas";
 answers[56] = choices[56][3];
 units[56] = "36";
 comments[56] = "Id Pregunta: 9193. ";


//  Id pregunta: 9545 AÃ±o de creación de pregunta: 2013-01-01
 questions[57]= "58)  Seg&uacute;n la LSSI, entre los elementos que los prestadores de servicios de la Sociedad de la Informaci&oacute;n est&aacute;n obligados a indicar en su p&aacute;gina web NO se encuentra:";
 choices[57]= new Array();
 choices[57][0] = "El nombre o denominiaci&oacute;n social";
 choices[57][1] = "Un n&uacute;mero de tel&eacute;fono de contacto";
 choices[57][2] = "Los datos de su inscripci&oacute;n en el registro mercantil u otro registro p&uacute;blico";
 choices[57][3] = "Los c&oacute;digos de conducta a los que est&eacute; adheridos.";
 answers[57] = choices[57][1];
 units[57] = "30";
 comments[57] = "Id Pregunta: 9545. Ley 34/2002, art&iacute;culo 10";


//  Id pregunta: 9571 AÃ±o de creación de pregunta: 2013-01-01
 questions[58]= "59)  En la pr&aacute;ctica de notificaciones por medios electr&oacute;nicos a que se refiere el art&iacute;culo 28 de la Ley 11/2007, de 22 de junio, de Acceso electr&oacute;nico de los ciudadanos a los Servicios p&uacute;blicos:";
 choices[58]= new Array();
 choices[58][0] = "Se requerir&aacute; en todo caso que el interesado lo haya solicitado previamente por escrito en el Registro del &oacute;rgano que ha de resolver.";
 choices[58][1] = "Cuando no pueda acreditarse por el sistema la fecha y hora en que se produzca, se entender&aacute;, a efectos de ulterior recurso, practicada el &uacute;ltimo d&iacute;a del plazo en que deb&iacute;a practicarse.";
 choices[58][2] = "Cuando, existiendo constancia de la puesta a disposici&oacute;n de la notificaci&oacute;n transcurrieran diez d&iacute;as naturales sin que se acceda a su contenido, se entender&aacute; que la notificaci&oacute;n ha sido rechazada con los efectos previstos en el art&iacute;culo 59.4 de la LRJPAC.";
 choices[58][3] = "Cuando, existiendo constancia de la puesta a disposici&oacute;n de la notificaci&oacute;n transcurrieran diez d&iacute;as h&aacute;biles sin que se acceda a su contenido, se entender&aacute; que la notificaci&oacute;n ha sido debidamente practicada y surtir&aacute; los efectos previstos en el art&iacute;culo 2.";
 answers[58] = choices[58][2];
 units[58] = "43";
 comments[58] = "Id Pregunta: 9571. Examen TIC A1 2011";


//  Id pregunta: 9577 AÃ±o de creación de pregunta: 2013-01-01
 questions[59]= "60)  La publicaci&oacute;n del BOE en su sede electr&oacute;nica:";
 choices[59]= new Array();
 choices[59][0] = "No tiene car&aacute;cter de oficial y aut&eacute;ntica, constituyendo lo publicado una mera manifestaci&oacute;n de servicio p&uacute;blico, ya que lo que tiene valor de oficial y aut&eacute;ntica es su edici&oacute;n impresa";
 choices[59][1] = "Tendr&aacute; car&aacute;cter de oficial y aut&eacute;ntica, al igual que la publicaci&oacute;n del resto de diarios oficiales de las CC.AA, a partir del 1 de enero de 2013.";
 choices[59][2] = "Tiene car&aacute;cter de oficial y aut&eacute;ntica, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil y en las restantes normas aplicables.";
 choices[59][3] = "Tiene car&aacute;cter de oficial y aut&eacute;ntica desde el d&iacute;a 1 de enero de 2011, excepto el contenido de la Secci&oacute;n de Anuncios, que se rige por su normativa espec&iacute;fica.";
 answers[59] = choices[59][2];
 units[59] = "43";
 comments[59] = "Id Pregunta: 9577. Examen TIC A1 2011";


//  Id pregunta: 9716 AÃ±o de creación de pregunta: 2014-01-01
 questions[60]= "61)  Dentro del Centro de Transferencia Tecnol&oacute;gica, el Servicio de Oficina Virtual de Registro que permite, entre otros, la remisi&oacute;n de los asientos registrales entre Administraciones P&uacute;blicas, se denomina";
 choices[60]= new Array();
 choices[60][0] = "SIR.";
 choices[60][1] = "ORVE.";
 choices[60][2] = "SICRES 3.0.";
 choices[60][3] = "SVDR.";
 answers[60] = choices[60][1];
 units[60] = "44";
 comments[60] = "Id Pregunta: 9716. Examen TIC-A1 2013";


//  Id pregunta: 9808 AÃ±o de creación de pregunta: 2014-01-01
 questions[61]= "62)  Se&ntilde;alar el nombre de la aplicaci&oacute;n de generaci&oacute;n de copia aut&eacute;ntica en papel de documentos con firma electr&oacute;nica y de justificantes de firma electr&oacute;nica, que el Ministerio de Hacienda y AAPP ofrece en modelo federado:";
 choices[61]= new Array();
 choices[61][0] = "STORK";
 choices[61][1] = "eDocument";
 choices[61][2] = "eSign";
 choices[61][3] = "eVisor";
 answers[61] = choices[61][3];
 units[61] = "44";
 comments[61] = "Id Pregunta: 9808. Examen TIC-A2 2013-Libre";


//  Id pregunta: 10003 AÃ±o de creación de pregunta: 2014-01-01
 questions[62]= "63)  El RD 1720/2007 de 21 de diciembre, por el que se aprueba el reglamento de desarrollo de la Ley Org&aacute;nica de Protecci&oacute;n de Datos, establece que ";
 choices[62]= new Array();
 choices[62][0] = "en ning&uacute;n caso, el encargado de tratamiento podr&aacute; subcontratar a un tercero la realizaci&oacute;n de un tratamiento que le hubiera encomendado el responsable del fichero.";
 choices[62][1] = "los ficheros de datos de car&aacute;cter personal de titularidad p&uacute;blica sujetos a la competencia de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos deber&aacute;n notificarse a &eacute;sta en el plazo de 30 d&iacute;as naturales desde la publicaci&oacute;n en el diario oficial correspondiente.";
 choices[62][2] = "el ejercicio del derecho de acceso por el afectado ser&aacute; resuelto por el Responsable del fichero en el plazo m&aacute;ximo de un mes a contar desde la recepci&oacute;n de la solicitud de acceso.";
 choices[62][3] = "los ficheros y los tratamientos de datos de car&aacute;cter personal se clasifican entres niveles: b&aacute;sico, medio y alto.";
 answers[62] = choices[62][2];
 units[62] = "29";
 comments[62] = "Id Pregunta: 10003. ";


//  Id pregunta: 10148 AÃ±o de creación de pregunta: 2014-01-01
 questions[63]= "64)  En relaci&oacute;n a las Comunicaciones comerciales por v&iacute;a electr&oacute;nica reguladas por la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico, Cu&aacute;l de las siguientes afirmaciones es incorrecta:";
 choices[63]= new Array();
 choices[63][0] = "Las comunicaciones comerciales realizadas por v&iacute;a electr&oacute;nica deber&aacute;n ser claramente identificables como tales y la persona f&iacute;sica o jur&iacute;dica en nombre de la cual se realizan tambi&eacute;n deber&aacute; ser claramente identificable.";
 choices[63][1] = "En el caso en el que tengan lugar a trav&eacute;s de correo electr&oacute;nico u otro medio de comunicaci&oacute;n electr&oacute;nica equivalente incluir&aacute;n al comienzo del mensaje la palabra ''publicidad'' o la abreviatura ''publi''";
 choices[63][2] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico u otro medio de comunicaci&oacute;n electr&oacute;nica equivalente que previamente no hubieran sido solicitadas o expresamente autorizadas por los destinatarios de las mismas.";
 choices[63][3] = "Lo dispuesto en el apartado anterior no ser&aacute; de aplicaci&oacute;n cuando exista una relaci&oacute;n contractual previa, siempre que el prestador hubiera obtenido de forma l&iacute;cita los datos de contacto del destinatario y los empleara para el env&iacute;o de comunicaciones comerciales referentes a productos o servicios de su propia empresa que sean similares a los que inicialmente fueron objeto de contrataci&oacute;n con el cliente.";
 answers[63] = choices[63][1];
 units[63] = "30";
 comments[63] = "Id Pregunta: 10148. ";


//  Id pregunta: 10154 AÃ±o de creación de pregunta: 2014-01-01
 questions[64]= "65)  Seg&uacute;n el Real Decreto 1671/2009";
 choices[64]= new Array();
 choices[64][0] = "Se puede someter a todos los ciudadanos al r&eacute;gimen de notificaci&oacute;n electr&oacute;nica obligatoria";
 choices[64][1] = "S&oacute;lo pueden someterse al r&eacute;gimen de notificaci&oacute;n electr&oacute;nica obligatoria a las personas jur&iacute;dicas o colectivos de personas f&iacute;sicas que por raz&oacute;n de su capacidad econ&oacute;mica o t&eacute;cnica, dedicaci&oacute;n profesional u otros motivos acreditados tengan garantizado el acceso y disponibilidad de los medios tecnol&oacute;gicos precisos";
 choices[64][2] = "En ning&uacute;n caso puede imponerse la obligaci&oacute;n de que la notificaci&oacute;n sea &uacute;nicamente por medios electr&oacute;nicos";
 choices[64][3] = "Para establecer la obligatoriedad de las notificaciones por medios electr&oacute;nicos ser&aacute; suficiente la publicaci&oacute;n de una circular en la sede electr&oacute;nica del &oacute;rgano u organismo p&uacute;blico de que se trate.";
 answers[64] = choices[64][1];
 units[64] = "43";
 comments[64] = "Id Pregunta: 10154. ";


//  Id pregunta: 10260 AÃ±o de creación de pregunta: 2014-01-01
 questions[65]= "66)  Si se deniega al interesado el ejercicio de su derecho de cancelaci&oacute;n de datos de car&aacute;cter personal, &eacute;ste puede:";
 choices[65]= new Array();
 choices[65][0] = "Ponerlo en conocimiento de la Agencia de Protecci&oacute;n de Datos y, si no est&aacute; de acuerdo con su resoluci&oacute;n, presentar recurso de alzada";
 choices[65][1] = "Ponerlo en conocimiento de la Agencia de Protecci&oacute;n de Datos y, si no est&aacute; de acuerdo con su resoluci&oacute;n, presentar recurso contencioso-administrativo";
 choices[65][2] = "Ponerlo en conocimiento de la Agencia de Protecci&oacute;n de Datos cuyos actos no son recurribles ni en v&iacute;a administrativa ni judicial";
 choices[65][3] = "Todas son incorrectas";
 answers[65] = choices[65][1];
 units[65] = "29";
 comments[65] = "Id Pregunta: 10260. Art&iacute;culo 18.2 y 18.4 de la Ley 15/1999";


//  Id pregunta: 10270 AÃ±o de creación de pregunta: 2014-01-01
 questions[66]= "67)  &iquest;En cu&aacute;l de los siguientes casos no es necesaria autorizaci&oacute;n del director de la AEPD para hacer una transferencia internacional de datos personales?";
 choices[66]= new Array();
 choices[66][0] = "Cuando se refiera a transferencias dinerarias conforme a su legislaci&oacute;n espec&iacute;fica ";
 choices[66][1] = "Cuando la transferencia sea precisa para el reconocimiento, ejercicio o defensa de un derecho en un proceso judicial ";
 choices[66][2] = "Cuando la transferencia se haga a efectos de prestar o solicitar auxilio judicial internacional ";
 choices[66][3] = "En los tres casos anteriores";
 answers[66] = choices[66][3];
 units[66] = "29";
 comments[66] = "Id Pregunta: 10270. Art&iacute;culo 34 de la Ley 15/1999";


//  Id pregunta: 10340 AÃ±o de creación de pregunta: 2014-01-01
 questions[67]= "68)  En relaci&oacute;n con la legislaci&oacute;n de propiedad intelectual, el canon por copia privada se encuentra actualmente regulado por:";
 choices[67]= new Array();
 choices[67][0] = "Ley 23/2006";
 choices[67][1] = "Real Decreto Legislativo 1/1996";
 choices[67][2] = "Ley 2/2011";
 choices[67][3] = "Real Decreto 1657/2012";
 answers[67] = choices[67][3];
 units[67] = "36";
 comments[67] = "Id Pregunta: 10340. Actualmente, el procedimiento de pago de la compensaci&oacute;n equitativa por copia privada se realiza con cargo a los Presupuestos Generales del Estado";


//  Id pregunta: 10592 AÃ±o de creación de pregunta: 2015-01-01
 questions[68]= "69)  La LOPD:";
 choices[68]= new Array();
 choices[68][0] = "Desarrolla el art&iacute;culo 17.4 de la Constituci&oacute;n Espa&ntilde;ola";
 choices[68][1] = "A y C son correctas";
 choices[68][2] = "Es la transposici&oacute;n de la Directiva 95/46/CE";
 choices[68][3] = "A y C son incorrectas.";
 answers[68] = choices[68][2];
 units[68] = "29";
 comments[68] = "Id Pregunta: 10592. ";


//  Id pregunta: 10672 AÃ±o de creación de pregunta: 2015-01-01
 questions[69]= "70)  Fecha de publicaci&oacute;n de la Ley 39/2015 del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas.";
 choices[69]= new Array();
 choices[69][0] = "1 de Junio de 2015";
 choices[69][1] = "1 de Julio de 2015";
 choices[69][2] = "2 de Octubre de 2015";
 choices[69][3] = "1 de Noviembre de 2015";
 answers[69] = choices[69][2];
 units[69] = "30";
 comments[69] = "Id Pregunta: 10672. ";


//  Id pregunta: 10692 AÃ±o de creación de pregunta: 2015-01-01
 questions[70]= "71)  La Ley 39/2015 es de aplicaci&oacute;n obligatoria:";
 choices[70]= new Array();
 choices[70][0] = "&Uacute;nicamente para la Administraci&oacute;n General del Estado.";
 choices[70][1] = "Para la Administraci&oacute;n General del Estado, Comunidades Aut&oacute;nomas y Administraci&oacute;n Local.";
 choices[70][2] = "Para la Administraci&oacute;n General del Estado, Comunidades Aut&oacute;nomas,  Administraci&oacute;n Local y Sector P&uacute;blico Institucional.";
 choices[70][3] = "Para la Administraci&oacute;n General del Estado, Comunidades Aut&oacute;nomas,  Administraci&oacute;n Local,  Sector P&uacute;blico Institucional y Corporaciones de Derecho P&uacute;blico.";
 answers[70] = choices[70][2];
 units[70] = "30";
 comments[70] = "Id Pregunta: 10692. ";


//  Id pregunta: 10710 AÃ±o de creación de pregunta: 2015-01-01
 questions[71]= "72)  &iquest;Cu&aacute;l es un contenido clave de la Norma T&eacute;cnica de Interoperabilidad de Modelo de Datos para el Intercambio de asientos entre las entidades registrales?";
 choices[71]= new Array();
 choices[71][0] = "SICRES";
 choices[71][1] = "Los metadatos";
 choices[71][2] = "ACCEDA";
 choices[71][3] = "HABILITA";
 answers[71] = choices[71][0];
 units[71] = "43";
 comments[71] = "Id Pregunta: 10710. ";


//  Id pregunta: 10723 AÃ±o de creación de pregunta: 2015-01-01
 questions[72]= "73)  Seg&uacute;n la NTI de Protocolos de intermediaci&oacute;n de datos, dentro del Rol de la Plataforma de intermediaci&oacute;n del Ministerio de Hacienda y Administraciones P&uacute;blicas no se contempla:";
 choices[72]= new Array();
 choices[72][0] = "Gestionar los Cesionarios y Requirentes seg&uacute;n las condiciones establecidas por cada Cedente.";
 choices[72][1] = "Almacenar la informaci&oacute;n personal de cualquier transacci&oacute;n de intercambio de datos.";
 choices[72][2] = "Asegurar la confidencialidad e integridad de la informaci&oacute;n intercambiada a trav&eacute;s de los mecanismos correspondientes.";
 choices[72][3] = "Mantener un portal web informativo con toda la documentaci&oacute;n relativa a la Plataforma.";
 answers[72] = choices[72][1];
 units[72] = "43";
 comments[72] = "Id Pregunta: 10723. ";


//  Id pregunta: 10729 AÃ±o de creación de pregunta: 2015-01-01
 questions[73]= "74)  Seg&uacute;n la NTI de requisitos de conexi&oacute;n a la red de comunicaciones de las Administraciones P&uacute;blicas espa&ntilde;olas &iquest;cual de los siguientes no es un tipo de Punto de Presencia (PdP) de la Red SARA?";
 choices[73]= new Array();
 choices[73][0] = "Centros externos de monitorizaci&oacute;n.";
 choices[73][1] = "Prestadores de servicios de certificaci&oacute;n.";
 choices[73][2] = "Otros: como son las Ventanillas &Uacute;nicas Empresariales.";
 choices[73][3] = "Todos los anteriores son tipos de PdP.";
 answers[73] = choices[73][3];
 units[73] = "43";
 comments[73] = "Id Pregunta: 10729. ";


//  Id pregunta: 10733 AÃ±o de creación de pregunta: 2015-01-01
 questions[74]= "75)  &iquest;Qu&eacute; Ley menciona en su pre&aacute;mbulo la Norma T&eacute;cnica de Interoperabilidad de Reutilizaci&oacute;n de recursos de la informaci&oacute;n?";
 choices[74]= new Array();
 choices[74][0] = "Ley 14/2007";
 choices[74][1] = "Ley 37/2007";
 choices[74][2] = "Ley 30/1992";
 choices[74][3] = "Ley 53/1999";
 answers[74] = choices[74][1];
 units[74] = "43";
 comments[74] = "Id Pregunta: 10733. ";


//  Id pregunta: 10751 AÃ±o de creación de pregunta: 2015-01-01
 questions[75]= "76)  &iquest;Cu&aacute;l de los siguientes no es un principio rector de la Estrategia de Ciberseguridad Nacional?";
 choices[75]= new Array();
 choices[75][0] = "Liderazgo internacional y coordinaci&oacute;n de esfuerzos";
 choices[75][1] = "Responsabilidad compartida";
 choices[75][2] = "Proporcionalidad racionalidad y eficacia";
 choices[75][3] = "Cooperaci&oacute;n Internacional";
 answers[75] = choices[75][0];
 units[75] = "43";
 comments[75] = "Id Pregunta: 10751. ";


//  Id pregunta: 10758 AÃ±o de creación de pregunta: 2015-01-01
 questions[76]= "77)  &iquest;Cu&aacute;l es la gu&iacute;a referente a &quot;Auditor&iacute;a del Esquema Nacional de Seguridad&quot;?";
 choices[76]= new Array();
 choices[76][0] = "CCN-STIC-801";
 choices[76][1] = "CCN-STIC-802";
 choices[76][2] = "CCN-STIC-803";
 choices[76][3] = "CCN-STIC-804";
 answers[76] = choices[76][1];
 units[76] = "43";
 comments[76] = "Id Pregunta: 10758. ";


//  Id pregunta: 10775 AÃ±o de creación de pregunta: 2015-01-01
 questions[77]= "78)  Se&ntilde;ale qu&eacute; medida es necesario adoptar en ficheros y tratamientos automatizados para establecer el nivel de seguridad medio seg&uacute;n se establece en el Real Decreto 1720/2007:";
 choices[77]= new Array();
 choices[77][0] = "Control de acceso: Los usuarios tendr&aacute;n acceso &uacute;nicamente a aquellos recursos que precisen para el desarrollo de sus funciones.";
 choices[77][1] = "Identificaci&oacute;n y autenticaci&oacute;n: El responsable del fichero o tratamiento establecer&aacute; un mecanismo que limite la posibilidad de intentar reiteradamente el acceso no autorizado al sistema de informaci&oacute;n.";
 choices[77][2] = "Telecomunicaciones: La transmisi&oacute;n de datos de car&aacute;cter personal a trav&eacute;s de redes p&uacute;blicas o redes inal&aacute;mbricas de comunicaciones electr&oacute;nicas se realizar&aacute; cifrando dichos datos o bien utilizando cualquier otro mecanismo que garantice que la informaci&oacute;n no sea inteligible ni manipulada por terceros.";
 choices[77][3] = "Registro de accesos: De cada intento de acceso se guardar&aacute;n, como m&iacute;nimo, la identificaci&oacute;n del usuario, la fecha y hora en que se realiz&oacute;, el fichero accedido, el tipo de acceso y si ha sido autorizado o denegado.";
 answers[77] = choices[77][1];
 units[77] = "29";
 comments[77] = "Id Pregunta: 10775. Examen GSI 2014";


//  Id pregunta: 10780 AÃ±o de creación de pregunta: 2015-01-01
 questions[78]= "79)  Seg&uacute;n el art&iacute;culo 18 del Real Decreto 1671/2009, sobre certificados de sede electr&oacute;nica de la Administraci&oacute;n General del Estado y de sus organismos p&uacute;blicos vinculados o dependientes, &iquest;cu&aacute;l de los siguientes NO es uno de los contenidos m&iacute;nimos a incluir en un certificado electr&oacute;nico de sede electr&oacute;nica?";
 choices[78]= new Array();
 choices[78][0] = "Nombre descriptivo de la sede electr&oacute;nica.";
 choices[78][1] = "N&uacute;mero de identificaci&oacute;n fiscal de la entidad suscriptora.";
 choices[78][2] = "Descripci&oacute;n del tipo de certificado, con la denominaci&oacute;n &laquo;sede electr&oacute;nica&raquo;.";
 choices[78][3] = "Direcci&oacute;n f&iacute;sica de la entidad suscriptora.";
 answers[78] = choices[78][3];
 units[78] = "43";
 comments[78] = "Id Pregunta: 10780. Examen GSI 2014";


//  Id pregunta: 10923 AÃ±o de creación de pregunta: 2015-01-01
 questions[79]= "80)  Respecto al Registro Electr&oacute;nico Com&uacute;n (REC), se&ntilde;ale la respuesta correcta:";
 choices[79]= new Array();
 choices[79][0] = "El REC debe admitir cualquier solicitud, escrito o comunicaci&oacute;n dirigida a cualquiera de las Administraciones P&uacute;blicas espa&ntilde;olas.";
 choices[79][1] = "La presentaci&oacute;n de solicitudes dirigidas a entidades que no hayan sido activadas en el REC se tendr&aacute; por no realizada.";
 choices[79][2] = "El REC podr&aacute; ser habilitado para la remisi&oacute;n, recepci&oacute;n e intercambio de solicitudes de la competencia de las Administraciones Auton&oacute;micas y Locales, en la forma que se determine en los correspondientes Convenios.";
 choices[79][3] = "En coordinaci&oacute;n con las Administraciones destinatarias, el Ministerio de Hacienda y Administraciones P&uacute;blicas ser&aacute; responsable de la custodia y manejo de todos los ficheros generados por el REC.";
 answers[79] = choices[79][2];
 units[79] = "44";
 comments[79] = "Id Pregunta: 10923. TIC A1 AGE 2014";


//  Id pregunta: 10929 AÃ±o de creación de pregunta: 2015-01-01
 questions[80]= "81)  La Comisi&oacute;n Europea establece una serie de prioridades y acciones para promover una administraci&oacute;n p&uacute;blica inteligente, sostenible e innovadora, enmarcadas en el Plan de Acci&oacute;n Europeo sobre Administraci&oacute;n Electr&oacute;nica 2011-2015. Entre estas prioridades y acciones se incluyen:";
 choices[80]= new Array();
 choices[80][0] = "Mejora de la transparencia, participaci&oacute;n de los ciudadanos y las empresas en los procesos de elaboraci&oacute;n de pol&iacute;ticas y sanidad en l&iacute;nea.";
 choices[80][1] = "Asesorar a los &oacute;rganos competentes en materia de contrataci&oacute;n, en los criterios y directrices para la agregaci&oacute;n y planificaci&oacute;n de la demanda TIC que dichos &oacute;rganos elaboren.";
 choices[80][2] = "Realizar las actuaciones necesarias para una mayor eficiencia econ&oacute;mica, normalizando una red de clientes de cada Departamento Ministerial frente a proveedores externos.";
 choices[80][3] = "Realizar el informe t&eacute;cnico preceptivo de la memoria y los pliegos de prescripciones t&eacute;cnicas de los convenios de colaboraci&oacute;n y encomiendas de gesti&oacute;n que incluyan la prestaci&oacute;n de servicios en materia de TIC de la AGE.";
 answers[80] = choices[80][3];
 units[80] = "30";
 comments[80] = "Id Pregunta: 10929. TIC A1 AGE 2014";


//  Id pregunta: 10936 AÃ±o de creación de pregunta: 2015-01-01
 questions[81]= "82)  Seg&uacute;n lo dispuesto en la Norma T&eacute;cnica de Interoperabilidad de Modelo de Datos para el Intercambio de asientos entre las entidades registrales (SICRES 3.0) es correcto que:";
 choices[81]= new Array();
 choices[81][0] = "El segmento &quot;de internos y control&quot; contiene informaci&oacute;n sobre si el asiento registral incluye documentaci&oacute;n f&iacute;sica requerida para el tr&aacute;mite del procedimiento.";
 choices[81][1] = "El c&oacute;digo de la Entidad Registral de Destino debe incluir un prefijo que identifique al Ministerio (MXX-YYYY), seg&uacute;n se establece en la codificaci&oacute;n de organismos del Directorio Com&uacute;n.";
 choices[81][2] = "El segmento &quot;de anexo&quot; es obligatorio y puede declararse de forma m&uacute;ltiple.";
 choices[81][3] = "En el segmento &quot;de internos y de control&quot; se incluye la firma del documento anexo, como un campo obligatorio.";
 answers[81] = choices[81][0];
 units[81] = "43";
 comments[81] = "Id Pregunta: 10936. TIC A1 AGE 2014";


//  Id pregunta: 10959 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  El Centro de Informaci&oacute;n y Red de Creaci&oacute;n de Empresas (CIRCE), gestionado por el Ministerio de Industria, Energ&iacute;a y Turismo:";
 choices[82]= new Array();
 choices[82][0] = "Permite realizar, de forma telem&aacute;tica, los tr&aacute;mites de constituci&oacute;n y puesta en marcha de todas las empresas que vayan a ejercer su actividad en el territorio nacional.";
 choices[82][1] = "Permite realizar, de forma telem&aacute;tica, los tr&aacute;mites de apoderamiento y gestiones notariales necesarias para la puesta en marcha de las empresas.";
 choices[82][2] = "Permite realizar de forma telem&aacute;tica, los tr&aacute;mites de constituci&oacute;n y puesta en marcha de Sociedades Limitada Nueva Empresa (SLNE), Sociedades de Responsabilidad Limitada (SRL o SL), o Empresarios Individuales (Aut&oacute;nomos).";
 choices[82][3] = "Es una plataforma para la informaci&oacute;n del emprendedor que se utiliza en los Puntos de Atenci&oacute;n al Emprendedor (PAEs), no permitiendo la realizaci&oacute;n de tr&aacute;mites online.";
 answers[82] = choices[82][2];
 units[82] = "30";
 comments[82] = "Id Pregunta: 10959. TIC A1 AGE 2014";


//  Id pregunta: 10996 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  En el caso de un fichero de datos relativo a la comisi&oacute;n de infracciones administrativas o penales, indique los niveles de seguridad que deber&aacute;n implantarse:";
 choices[83]= new Array();
 choices[83][0] = "S&oacute;lo las medidas de seguridad de nivel b&aacute;sico.";
 choices[83][1] = "Adem&aacute;s de las medidas de seguridad de nivel b&aacute;sico, las medidas de nivel medio y alto.";
 choices[83][2] = "Adem&aacute;s de las medidas de seguridad de nivel b&aacute;sico, las medidas de nivel medio.";
 choices[83][3] = "Adem&aacute;s de las medidas de seguridad de nivel b&aacute;sico, las medidas de nivel alto.";
 answers[83] = choices[83][2];
 units[83] = "29";
 comments[83] = "Id Pregunta: 10996. TIC A1 AGE 2014";


//  Id pregunta: 11015 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  &iquest;Cu&aacute;l de los siguientes no est&aacute; incluido dentro de la primera Declaraci&oacute;n de Servicios Compartidos realizada por la Comisi&oacute;n de Estrategia TIC en Septiembre de 2015?";
 choices[84]= new Array();
 choices[84][0] = "Servicio unificado de radiocomunicaciones";
 choices[84][1] = "Servicio de alojamiento de infraestructuras TIC";
 choices[84][2] = "Servicio de gesti&oacute;n de notificaciones";
 choices[84][3] = "Servicio de gesti&oacute;n de n&oacute;mina";
 answers[84] = choices[84][0];
 units[84] = "30";
 comments[84] = "Id Pregunta: 11015. El servicio incluido es el unificado de telecomunicaciones";


//  Id pregunta: 11098 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  De acuerdo con la LOPD, seleccione la respuesta verdadera";
 choices[85]= new Array();
 choices[85][0] = "Iniciar la recogida de datos de car&aacute;cter personal sin autorizaci&oacute;n de disposici&oacute;n general publicada en el BOE o diario oficial correspondiente es una infracci&oacute;n GRAVE.";
 choices[85][1] = "No atender, por motivos formales, la solicitud del interesado de rectificaci&oacute;n o cancelaci&oacute;n de los datos personales objeto de tratamiento cuando legalmente proceda es una infracci&oacute;n MUY GRAVE";
 choices[85][2] = "Las respuestas a) y b) son falsas";
 choices[85][3] = "Las respuestas a) y b) son verdaderas";
 answers[85] = choices[85][0];
 units[85] = "29";
 comments[85] = "Id Pregunta: 11098. ";


//  Id pregunta: 11107 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  Seleccione la respuesta correcta sobre los derechos morales irrenunciables de un autor de una obra:";
 choices[86]= new Array();
 choices[86][0] = "Derecho a decidir sobre la divulgaci&oacute;n o no de la obra";
 choices[86][1] = "Respeto a la integridad de la obra";
 choices[86][2] = "Derecho a exigir el reconocimiento de su condici&oacute;n de autor";
 choices[86][3] = "Todas las anteriores";
 answers[86] = choices[86][3];
 units[86] = "36";
 comments[86] = "Id Pregunta: 11107. ";


//  Id pregunta: 11120 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  &iquest;Cu&aacute;l de los siguientes no es un contenido m&iacute;nimo que deben tener las sedes electr&oacute;nicas de acuerdo con el art&iacute;culo 6 del RD 1671/2009?";
 choices[87]= new Array();
 choices[87][0] = "Sistema de verificaci&oacute;n de los certificados de la sede, accesible de forma directa y gratuita";
 choices[87][1] = "Informaci&oacute;n relacionada con la protecci&oacute;n de datos de car&aacute;cter personal, incluyendo un enlace con la sede electr&oacute;nica de la AEPD.";
 choices[87][2] = "Servicios de asesoramiento electr&oacute;nico al usuario para la correcta utilizaci&oacute;n de la sede";
 choices[87][3] = "Todos los anteriores son contenidos m&iacute;nimos de las sedes electr&oacute;nicas.";
 answers[87] = choices[87][3];
 units[87] = "43";
 comments[87] = "Id Pregunta: 11120. ";


//  Id pregunta: 11124 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  &iquest;Cu&aacute;l de lo siguientes no es un servicio horizontal de la red SARA?";
 choices[88]= new Array();
 choices[88][0] = "Plataforma  de validaci&oacute;n de firma electr&oacute;nica @firma";
 choices[88][1] = "Solicitud de cambio de domicilio";
 choices[88][2] = "Pasarela de pago";
 choices[88][3] = "Registro Central de Personal";
 answers[88] = choices[88][3];
 units[88] = "44";
 comments[88] = "Id Pregunta: 11124. ";


//  Id pregunta: 11192 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  &iquest;A cu&aacute;l de las siguientes prioridades de la estrategia Europa 2020 se hace referencia con el objetivo de la b&uacute;squeda de un econom&iacute;a basada en el conocimiento y la innovaci&oacute;n?";
 choices[89]= new Array();
 choices[89][0] = "Crecimiento inteligente";
 choices[89][1] = "Crecimiento sostenible";
 choices[89][2] = "Crecimiento innovador";
 choices[89][3] = "Crecimiento integrador";
 answers[89] = choices[89][0];
 units[89] = "30";
 comments[89] = "Id Pregunta: 11192. ";


//  Id pregunta: 11198 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  &iquest;Qu&eacute; tasa de abandono escolar marca la Estrategia Europa 2020 para la Uni&oacute;n Europea?";
 choices[90]= new Array();
 choices[90][0] = "0.05";
 choices[90][1] = "0.01";
 choices[90][2] = "0.1";
 choices[90][3] = "0.2";
 answers[90] = choices[90][2];
 units[90] = "30";
 comments[90] = "Id Pregunta: 11198. ";


//  Id pregunta: 11297 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  En qu&eacute; casos no es necesario el consentimiento del usuario en el tratamiento de datos seg&uacute;n la Ley Org&aacute;nica de Protecci&oacute;n de Datos";
 choices[91]= new Array();
 choices[91][0] = "Datos con fines hist&oacute;ricos, estad&iacute;sticos o cient&iacute;ficos.";
 choices[91][1] = "No existen excepciones al consentimiento de tratamiento de los datos.";
 choices[91][2] = "La Administraci&oacute;n en el desempe&ntilde;o de sus funciones y las fuentes accesibles al p&uacute;blico.";
 choices[91][3] = "Datos sobre Sindicaci&oacute;n, Ideolog&iacute;a y Religi&oacute;n.";
 answers[91] = choices[91][2];
 units[91] = "29";
 comments[91] = "Id Pregunta: 11297. ";


//  Id pregunta: 11319 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  En cuanto a las medidas de seguridad exigidas seg&uacute;n la Ley Org&aacute;nica de Protecci&oacute;n de Datos, una de las siguientes medidas no es exigible en el nivel b&aacute;sico.";
 choices[92]= new Array();
 choices[92][0] = "Registro de incidencias";
 choices[92][1] = "El documento de seguridad con indicaci&oacute;n de activos, medidas y responsable del fichero.";
 choices[92][2] = "Listado de personas autorizadas con acceso.";
 choices[92][3] = "El documento de seguridad.";
 answers[92] = choices[92][1];
 units[92] = "29";
 comments[92] = "Id Pregunta: 11319. En el nivel b&aacute;sico, el documento de seguridad, debe tener los recursos y las medidas. La indicaci&oacute;n del responsable es en el nivel medio.";


//  Id pregunta: 11325 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Qui&eacute;n tiene la competencia sancionadora en materia de protecci&oacute;n de datos?";
 choices[93]= new Array();
 choices[93][0] = "Ministro de Justicia";
 choices[93][1] = "Secretario de Estado de Justicia";
 choices[93][2] = "La Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos";
 choices[93][3] = "El registro de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos";
 answers[93] = choices[93][2];
 units[93] = "29";
 comments[93] = "Id Pregunta: 11325. ";


//  Id pregunta: 11326 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Seg&uacute;n la Ley Org&aacute;nica de Protecci&oacute;n de Datos, Ley 15/99, el encargado del tratamiento es:";
 choices[94]= new Array();
 choices[94][0] = "Persona f&iacute;sica o jur&iacute;dica, autoridad p&uacute;blica o privada previa certificaci&oacute;n por la AEPD";
 choices[94][1] = "Persona f&iacute;sica, ya sea trabajador de una entidad p&uacute;blica, en cuyo caso ser&aacute; un funcionario o privada";
 choices[94][2] = "Persona f&iacute;sica, jur&iacute;dica o  entidad sin personalidad jur&iacute;dica, p&uacute;blica o privada, servicio o cualquier otro organismo";
 choices[94][3] = "Persona f&iacute;sica o jur&iacute;dica, autoridad p&uacute;blica o privada, servicio o cualquier otro organismo";
 answers[94] = choices[94][3];
 units[94] = "29";
 comments[94] = "Id Pregunta: 11326. ";


//  Id pregunta: 11349 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Cu&aacute;les son los casos en los que no es necesario el derecho de informaci&oacute;n en la recogida de datos";
 choices[95]= new Array();
 choices[95][0] = "Datos con fines hist&oacute;ricos, estad&iacute;sticos o cient&iacute;ficos.";
 choices[95][1] = "No existen excepciones al derecho de informaci&oacute;n de recogida de datos.";
 choices[95][2] = "La Administraci&oacute;n en el desempe&ntilde;o de sus funciones y las fuentes accesibles al p&uacute;blico.";
 choices[95][3] = "Datos sobre Sindicaci&oacute;n, Ideolog&iacute;a y Religi&oacute;n.";
 answers[95] = choices[95][0];
 units[95] = "29";
 comments[95] = "Id Pregunta: 11349. ";


//  Id pregunta: 11484 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  El Derecho de Acceso a la Informaci&oacute;n P&uacute;blica, regulado en la Ley 19/2013 de Transparencia, acceso a la informaci&oacute;n p&uacute;blica y Buen Gobierno";
 choices[96]= new Array();
 choices[96][0] = "Ser&aacute; gratuito, y el plazo m&aacute;ximo de resoluci&oacute;n en el que se conceda o deniegue el acceso es de 1 mes.";
 choices[96][1] = "Ser&aacute; gratuito, y el plazo m&aacute;ximo de resoluci&oacute;n en el que se conceda o deniegue el acceso es de 30 d&iacute;as.";
 choices[96][2] = "Requiere pago de tasa p&uacute;blica, y el plazo m&aacute;ximo de resoluci&oacute;n en el que se conceda o deniegue el acceso es de 30 d&iacute;as.";
 choices[96][3] = "Ser&aacute; gratuito, y el plazo m&aacute;ximo de resoluci&oacute;n en el que se conceda o deniegue el acceso es de 15 d&iacute;as.";
 answers[96] = choices[96][0];
 units[96] = "43";
 comments[96] = "Id Pregunta: 11484. NULL";


//  Id pregunta: 11500 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Cu&aacute;l de los siguientes aspectos NO est&aacute; recogido como una Instrucci&oacute;n T&eacute;cnica de Seguridad seg&uacute;n el Esquema Nacional de Seguridad?";
 choices[97]= new Array();
 choices[97][0] = "Informe de Estado de Seguridad";
 choices[97][1] = "Auditor&iacute;a de Seguridad";
 choices[97][2] = "Interconexi&oacute;n en el Esquema Nacional de Seguridad";
 choices[97][3] = "Protocolo de Comunicaciones Seguras";
 answers[97] = choices[97][3];
 units[97] = "43";
 comments[97] = "Id Pregunta: 11500. Instrucci&oacute;n t&eacute;cnica de seguridad introducido por la disp. Adicional 4&ordf; RD 951/2015 que modifica el ENS.";


//  Id pregunta: 11583 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Se&ntilde;ale la opci&oacute;n incorrecta. Es posible la cesi&oacute;n de los datos de car&aacute;cter personal sin contar con el consentimiento del interesado cuando:";
 choices[98]= new Array();
 choices[98][0] = "La comunicaci&oacute;n que debe efectuarse tiene por destinatario el Tribunal de Cuentas y se realiza en el &aacute;mbito de las funciones que la ley le atribuya expresamente.";
 choices[98][1] = "Lo autoriza una norma de derecho comunitario.";
 choices[98][2] = "Es una cesi&oacute;n entre Administraciones p&uacute;blicas y tiene por objeto el tratamiento de los datos con fines cient&iacute;ficos.";
 choices[98][3] = "Todas las anteriores son correctas";
 answers[98] = choices[98][3];
 units[98] = "29";
 comments[98] = "Id Pregunta: 11583. ";


//  Id pregunta: 11599 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  La entrada en vigor de la Ley 39/2015 es:";
 choices[99]= new Array();
 choices[99][0] = "A los seis meses de su publicaci&oacute;n en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;.";
 choices[99][1] = "Al a&ntilde;o de su publicaci&oacute;n en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;.";
 choices[99][2] = "A los dieciocho meses de su publicaci&oacute;n en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;.";
 choices[99][3] = "A los dos a&ntilde;os de su publicaci&oacute;n en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;.";
 answers[99] = choices[99][1];
 units[99] = "43";
 comments[99] = "Id Pregunta: 11599. ";


