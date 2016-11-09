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

//  Id pregunta: 0 AÃ±o de creación de pregunta: 2011-01-01
 questions[0]= "1)  Identifique la infracci&oacute;n considerada como grave por la Ley de Protecci&oacute;n de Datos:";
 choices[0]= new Array();
 choices[0][0] = "No solicitar la inscripci&oacute;n del fichero de datos de car&aacute;cter personal en el Registro General de Protecci&oacute;n de Datos. ";
 choices[0][1] = "La recogida de datos en forma enga&ntilde;osa y fraudulenta";
 choices[0][2] = "El impedimento o la obstaculizaci&oacute;n del ejercicio de los derechos de acceso, rectificaci&oacute;n, cancelaci&oacute;n y oposici&oacute;n.";
 choices[0][3] = "No cesar en el tratamiento il&iacute;cito de datos de car&aacute;cter personal cuando existiese un previo requerimiento del Director en la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos para ello. ";
 answers[0] = choices[0][2];
 units[0] = "29";
 comments[0] = "Id Pregunta: 0. ";


//  Id pregunta: 44 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Cu&aacute;l de los siguientes datos no es necesario comunicar a la Agencia de Protecci&oacute;n de Datos para regular un fichero de titularidad privada?:";
 choices[1]= new Array();
 choices[1][0] = "Cesiones de datos de car&aacute;cter personal que se prev&eacute; realizar";
 choices[1][1] = "Sistema operativo y gestor de bases de datos de soporte";
 choices[1][2] = "Tipo de datos de car&aacute;cter personal que contiene";
 choices[1][3] = "Medidas de seguridad";
 answers[1] = choices[1][1];
 units[1] = "29";
 comments[1] = "Id Pregunta: 44. ";


//  Id pregunta: 53 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;Cuando entr&oacute; en vigor la LOPD?:";
 choices[2]= new Array();
 choices[2][0] = "Diciembre de 1999";
 choices[2][1] = "Enero de 2000";
 choices[2][2] = "Febrero de 1993";
 choices[2][3] = "Enero de 1999";
 answers[2] = choices[2][1];
 units[2] = "29";
 comments[2] = "Id Pregunta: 53. ";


//  Id pregunta: 99 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  En relaci&oacute;n con la impugnaci&oacute;n de valoraciones:";
 choices[3]= new Array();
 choices[3][0] = "Los ciudadanos tienen derecho a no verse sometidos a una decisi&oacute;n con efectos jur&iacute;dicos, sobre ellos o que les afecte de manera significativa, que se base &uacute;nicamente en un tratamiento de datos destinados a evaluar determinados aspectos de su personalidad";
 choices[3][1] = "El afectado podr&aacute; impugnar actos administrativos o decisiones privadas que impliquen una valoraci&oacute;n de su comportamiento, cuyo &uacute;nico fundamento sea un tratamiento de datos de car&aacute;cter personal que ofrezca una definici&oacute;n  de sus caracter&iacute;sticas o personalidad";
 choices[3][2] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son correctas";
 choices[3][3] = "Ninguna de las respuestas es correcta";
 answers[3] = choices[3][2];
 units[3] = "29";
 comments[3] = "Id Pregunta: 99. ";


//  Id pregunta: 109 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  Si la transmisi&oacute;n de datos de car. personal por una red tiene que cifrar los datos o utilizar  mecanismos para garantizar que dicha informaci&oacute;n no sea inteligible ni manipulable por terceros, estamos aplicando medidas de tipo:";
 choices[4]= new Array();
 choices[4][0] = "B&aacute;sico";
 choices[4][1] = "Medio";
 choices[4][2] = "Alto";
 choices[4][3] = "Ninguna de las anteriores";
 answers[4] = choices[4][2];
 units[4] = "29";
 comments[4] = "Id Pregunta: 109. ";


//  Id pregunta: 139 AÃ±o de creación de pregunta: 2009-01-01
 questions[5]= "6)  El derecho de informaci&oacute;n en la recogida de datos define la informaci&oacute;n que, obligatoriamente y con car&aacute;cter previo, se debe comunicar al afectado al que se le requiera para suministrar cualquier dato personal. Entre dicha informaci&oacute;n consta:";
 choices[5]= new Array();
 choices[5][0] = "El car&aacute;cter voluntario u obligatorio de las respuestas y de las consecuencias de la negativa a proporcionarlas";
 choices[5][1] = "El plazo de almacenamiento de la informaci&oacute;n";
 choices[5][2] = "El n&uacute;mero de cesiones que se van a realizar";
 choices[5][3] = "S&oacute;lo es necesario comunicar al afectado que se va a crear el fichero";
 answers[5] = choices[5][0];
 units[5] = "29";
 comments[5] = "Id Pregunta: 139. ";


//  Id pregunta: 141 AÃ±o de creación de pregunta: 2009-01-01
 questions[6]= "7)  El Director de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos:";
 choices[6]= new Array();
 choices[6][0] = "Es nombrado por las Cortes Generales";
 choices[6][1] = "No puede ser cesado antes de la finalizaci&oacute;n de su mandato";
 choices[6][2] = "Ostenta el rango de Subsecretario";
 choices[6][3] = "Tiene una mandato de 6 a&ntilde;os";
 answers[6] = choices[6][2];
 units[6] = "29";
 comments[6] = "Id Pregunta: 141. ";


//  Id pregunta: 143 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  El establecimiento de un mecanismo que permita la identificaci&oacute;n de forma inequ&iacute;voca y personalizada de todo aquel usuario que intente acceder al sistema de informaci&oacute;n y la verificaci&oacute;n de que est&aacute; autorizado, es una medida de nivel:";
 choices[7]= new Array();
 choices[7][0] = "B&aacute;sico";
 choices[7][1] = "Medio";
 choices[7][2] = "Alto";
 choices[7][3] = "Ninguna de las anteriores";
 answers[7] = choices[7][0];
 units[7] = "29";
 comments[7] = "Id Pregunta: 143. ";


//  Id pregunta: 263 AÃ±o de creación de pregunta: 2009-01-01
 questions[8]= "9)  Indicar cu&aacute;l de las siguientes afirmaciones es cierta en el &aacute;mbito de la LOPD:";
 choices[8]= new Array();
 choices[8][0] = "La normativa de protecci&oacute;n de datos es aplicable s&oacute;lo a ficheros automatizados que contengan datos personales de personas f&iacute;sicas";
 choices[8][1] = "La normativa de protecci&oacute;n de datos es aplicable tanto a ficheros automatizados como no automatizados que contengan datos de car&aacute;cter personal";
 choices[8][2] = "La normativa de protecci&oacute;n de datos no es aplicable a personas f&iacute;sicas ni jur&iacute;dicas";
 choices[8][3] = "&quot;b&quot; y &quot;c&quot; son ciertas";
 answers[8] = choices[8][1];
 units[8] = "29";
 comments[8] = "Id Pregunta: 263. ";


//  Id pregunta: 275 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  Indique cu&aacute;l de los siguientes datos sensibles no est&aacute; especialmente protegido por la LOPD 15/99:";
 choices[9]= new Array();
 choices[9][0] = "De salud";
 choices[9][1] = "Administrativos";
 choices[9][2] = "De religi&oacute;n";
 choices[9][3] = "De origen racial";
 answers[9] = choices[9][1];
 units[9] = "29";
 comments[9] = "Id Pregunta: 275. ";


//  Id pregunta: 278 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  La Agencia de Protecci&oacute;n de Datos:";
 choices[10]= new Array();
 choices[10][0] = "Es un ente de derecho p&uacute;blico que act&uacute;a con dependencia del Ministerio de Justicia en el ejercicio de sus funciones";
 choices[10][1] = "Es un ente de derecho privado que act&uacute;a en el ejercicio de sus funciones seg&uacute;n lo dispuesto por el Ministerio de Justicia ";
 choices[10][2] = "Es un ente de derecho p&uacute;blico que act&uacute;a con plena independencia de las Administraciones P&uacute;blicas en el ejercicio de sus funciones";
 choices[10][3] = "Ninguna de las anteriores es correcta";
 answers[10] = choices[10][2];
 units[10] = "29";
 comments[10] = "Id Pregunta: 278. ";


//  Id pregunta: 283 AÃ±o de creación de pregunta: 2009-01-01
 questions[11]= "12)  La calidad de los datos a la que hacen referencia las leyes de protecci&oacute;n de datos no incluye uno de los aspectos siguientes:";
 choices[11]= new Array();
 choices[11][0] = "Tipicidad";
 choices[11][1] = "Veracidad";
 choices[11][2] = "Finalidad";
 choices[11][3] = "Pertinencia";
 answers[11] = choices[11][0];
 units[11] = "29";
 comments[11] = "Id Pregunta: 283. ";


//  Id pregunta: 315 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  La Ley Org&aacute;nica 15/99 de Protecci&oacute;n de Datos de Car&aacute;cter Personal incluye como posibles sujetos del r&eacute;gimen sancionador:";
 choices[12]= new Array();
 choices[12][0] = "S&oacute;lo al responsable del fichero";
 choices[12][1] = "S&oacute;lo al encargado del tratamiento";
 choices[12][2] = "Al responsable del fichero y al encargado del tratamiento";
 choices[12][3] = "La Ley 15/99 no regula el r&eacute;gimen sancionador";
 answers[12] = choices[12][2];
 units[12] = "29";
 comments[12] = "Id Pregunta: 315. ";


//  Id pregunta: 317 AÃ±o de creación de pregunta: 2009-01-01
 questions[13]= "14)  La LOPD no es de aplicaci&oacute;n a:";
 choices[13]= new Array();
 choices[13][0] = "Los ficheros creados por las fuerzas y cuerpos de seguridad recogidos para fines administrativos";
 choices[13][1] = "Los datos recogidos o elaborados por las Administraciones P&uacute;blicas para el desempe&ntilde;o de sus atribuciones legalmente establecidas";
 choices[13][2] = "Los ficheros automatizados con datos personales de car&aacute;cter tributario";
 choices[13][3] = "Los ficheros sometidos a la normativa sobre protecci&oacute;n de materias clasificadas";
 answers[13] = choices[13][3];
 units[13] = "29";
 comments[13] = "Id Pregunta: 317. ";


//  Id pregunta: 318 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  La LOPD permite a los interesados a los que se soliciten datos personales:";
 choices[14]= new Array();
 choices[14][0] = "Solo consultar sus datos";
 choices[14][1] = "Ejercitar los derechos de acceso, rectificaci&oacute;n, cancelaci&oacute;n y oposici&oacute;n";
 choices[14][2] = "Ejercitar s&oacute;lo los derechos de rectificaci&oacute;n";
 choices[14][3] = "Ejercitar s&oacute;lo los derechos de cancelaci&oacute;n";
 answers[14] = choices[14][1];
 units[14] = "29";
 comments[14] = "Id Pregunta: 318. ";


//  Id pregunta: 319 AÃ±o de creación de pregunta: 2009-01-01
 questions[15]= "16)  La LOPD se aplicar&aacute; sin especialidad indicada a:";
 choices[15]= new Array();
 choices[15][0] = "Los ficheros que mantengan las personas f&iacute;sicas con fines exclusivamente dom&eacute;sticos o personales";
 choices[15][1] = "A todos aquellos datos de car&aacute;cter personal registrados en cualquier soporte que los haga susceptibles de tratamiento y cualquier modalidad de uso posterior de los mismos";
 choices[15][2] = "Los ficheros regulados por la legislaci&oacute;n electoral o sobre estad&iacute;stica p&uacute;blica";
 choices[15][3] = "Los ficheros derivados de los Registros Civiles";
 answers[15] = choices[15][1];
 units[15] = "29";
 comments[15] = "Id Pregunta: 319. ";


//  Id pregunta: 347 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  Con car&aacute;cter general, la transferencia de ficheros con datos de car&aacute;cter personal se puede hacer:";
 choices[16]= new Array();
 choices[16][0] = "A cualquier pa&iacute;s europeo y africano";
 choices[16][1] = "S&oacute;lo a Europa y Asia";
 choices[16][2] = "S&oacute;lo dentro de UE";
 choices[16][3] = "Con destino a pa&iacute;ses que proporcionen un nivel de protecci&oacute;n equiparable al que presta la LOPD";
 answers[16] = choices[16][3];
 units[16] = "29";
 comments[16] = "Id Pregunta: 347. ";


//  Id pregunta: 401 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Respecto a la LOPD, no es cierto que:";
 choices[17]= new Array();
 choices[17][0] = "se refiere a tratamiento de datos personales automatizados o no";
 choices[17][1] = "hay medidas de nivel b&aacute;sico, medio, alto y muy alto";
 choices[17][2] = "el cifrado y el mantenimiento de logs de acceso es necesario en el nivel alto";
 choices[17][3] = "debe informarse al ciudadano en la recogida de datos, tanto para formularios en papel como en web";
 answers[17] = choices[17][1];
 units[17] = "29";
 comments[17] = "Id Pregunta: 401. ";


//  Id pregunta: 406 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Respecto a los Ficheros y Registros de Poblaci&oacute;n de las Administraciones P&uacute;blicas, la Ley de Protecci&oacute;n de Datos se&ntilde;ala:";
 choices[18]= new Array();
 choices[18][0] = "Para su creaci&oacute;n es necesario el consentimiento del interesado";
 choices[18][1] = "Podr&aacute; solicitar su creaci&oacute;n cualquier persona interesada";
 choices[18][2] = "S&oacute;lo lo puede solicitar la Administraci&oacute;n General del Estado";
 choices[18][3] = "Estar&aacute;n formados con los datos del nombre, apellidos, domicilio, sexo y fecha de nacimiento";
 answers[18] = choices[18][3];
 units[18] = "29";
 comments[18] = "Id Pregunta: 406. ";


//  Id pregunta: 435 AÃ±o de creación de pregunta: 2009-01-01
 questions[19]= "20)  Seg&uacute;n la Ley org&aacute;nica 15/1999:";
 choices[19]= new Array();
 choices[19][0] = "existen derechos de cancelaci&oacute;n, rectificaci&oacute;n, acceso y oposici&oacute;n, sobre los que se podr&aacute; exigir contraprestaci&oacute;n en los casos que proceda";
 choices[19][1] = "los ficheros creados por las Fuerzas y Cuerpos de Seguridad que contengan datos de car&aacute;cter personal que, por haber sido recogidos para fines administrativos, deban ser objeto de registro permanente, estar&aacute;n sujetos al regimen general de la ley";
 choices[19][2] = "la Agencia de Protecci&oacute;n de Datos es un ente de derecho p&uacute;blico con personalidad jur&iacute;dica propia y que depende de las Administraciones P&uacute;blicas en el ejercicio de sus funciones";
 choices[19][3] = "Todas las respuestas anteriores son correctas";
 answers[19] = choices[19][1];
 units[19] = "29";
 comments[19] = "Id Pregunta: 435. ";


//  Id pregunta: 441 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Seg&uacute;n la Ley Org&aacute;nica 15/99 de Protecci&oacute;n de Datos de car&aacute;cter personal, no ser&aacute; preciso el consentimiento del interesado en la comunicaci&oacute;n de datos a un tercero cuando:";
 choices[20]= new Array();
 choices[20][0] = "Cuando la cesi&oacute;n est&aacute; autorizada por una Ley";
 choices[20][1] = "Cuando la cesi&oacute;n est&aacute; autorizada por un Real Decreto";
 choices[20][2] = "Cuando la comunicaci&oacute;n tenga por destinatario al Presidente del Gobierno";
 choices[20][3] = "Cuando se realice para garantizar el inter&eacute;s general";
 answers[20] = choices[20][0];
 units[20] = "29";
 comments[20] = "Id Pregunta: 441. ";


//  Id pregunta: 452 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  Se&ntilde;ale c&uacute;al no es una funci&oacute;n atribuida al Director de la Agencia de Protecci&oacute;n de Datos:";
 choices[21]= new Array();
 choices[21][0] = "Resuelve los expedientes disciplinarios cuando la infracci&oacute;n es cometida por los responsables de los ficheros p&uacute;blicos";
 choices[21][1] = "Requerir a los responsables de ficheros de titularidad privada a que subsanen deficiencias de los c&oacute;digos tipo";
 choices[21][2] = "Resolver sobre la validez de las notificaciones de inscripci&oacute;n en el Registro General de Protecci&oacute;n de Datos";
 choices[21][3] = "Adoptar medidas cautelares respecto de los tratamientos de datos personales cuando lo estima necesario";
 answers[21] = choices[21][0];
 units[21] = "29";
 comments[21] = "Id Pregunta: 452. ";


//  Id pregunta: 462 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Son fuentes accesibles al p&uacute;blico, seg&uacute;n la Ley Org&aacute;nica 15/99 de Protecci&oacute;n de Datos de Car&aacute;cter Personal:";
 choices[22]= new Array();
 choices[22][0] = "Aquellos ficheros cuya consulta puede ser realizada sin m&aacute;s exigencia que, en su caso, el abono de una contraprestaci&oacute;n";
 choices[22][1] = "El censo electoral";
 choices[22][2] = "Los diarios y boletines oficiales y los medios de comunicaci&oacute;n";
 choices[22][3] = "S&oacute;lo los boletines oficiales";
 answers[22] = choices[22][2];
 units[22] = "29";
 comments[22] = "Id Pregunta: 462. ";


//  Id pregunta: 468 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  En la LOPD, una infracci&oacute;n muy grave es:";
 choices[23]= new Array();
 choices[23][0] = "incumplir el deber de secreto establecido en el art&iacute;culo 10 de la ley";
 choices[23][1] = "el impedimento o la obstaculizaci&oacute;n del ejercicio de los derechos de acceso y oposici&oacute;n y la negativa a facilitar la informaci&oacute;n que sea solicitada";
 choices[23][2] = "proceder a la recogida de datos de car&aacute;cter personal sin el consentimiento expreso de las personas afectadas en los casos en que &eacute;ste sea exigible";
 choices[23][3] = "No cesar en el tratamiento il&iacute;cito de datos de car&aacute;cter personal cuando existiese un previo requerimiento del Director de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos para ello.";
 answers[23] = choices[23][3];
 units[23] = "29";
 comments[23] = "Id Pregunta: 468. ";


//  Id pregunta: 508 AÃ±o de creación de pregunta: 2003-01-01
 questions[24]= "25)  La Ley Org&aacute;nica 15/1999 establece, en el apartado 2 del art&iacute;culo 22, las condiciones bajo las que las Fuerzas y Cuerpos de Seguridad pueden tratar datos personales con fines policiales sin estar sujetos a la ley:";
 choices[24]= new Array();
 choices[24][0] = "Cuando cuenten con la preceptiva autorizaci&oacute;n del Ministerio del Interior";
 choices[24][1] = "No existen excepciones. Se requiere obligatoriamente el consentimiento expreso del afectado";
 choices[24][2] = "Cuando resulte necesario para la prevenci&oacute;n de un peligro real para la seguridad p&uacute;blica o para la represi&oacute;n de infracciones penales";
 choices[24][3] = "Cuando lo autorice un juez";
 answers[24] = choices[24][2];
 units[24] = "29";
 comments[24] = "Id Pregunta: 508. ";


//  Id pregunta: 511 AÃ±o de creación de pregunta: 2003-01-01
 questions[25]= "26)  No se except&uacute;an los derechos de informaci&oacute;n previa, de modo expreso, preciso e inequ&iacute;voco:";
 choices[25]= new Array();
 choices[25][0] = "Cuando afecte a la defensa nacional";
 choices[25][1] = "A  la seguridad p&uacute;blica";
 choices[25][2] = "A la persecuci&oacute;n de infracciones penales o administrativas";
 choices[25][3] = "Cuando no impida o dificulte gravemente el cumplimiento de las funciones de control y verificaci&oacute;n de las Administraciones P&uacute;blicas";
 answers[25] = choices[25][3];
 units[25] = "29";
 comments[25] = "Id Pregunta: 511. ";


//  Id pregunta: 596 AÃ±o de creación de pregunta: 2006-01-01
 questions[26]= "27)  Seg&uacute;n el art&iacute;culo 44.3 proceder a la creaci&oacute;n de ficheros de titularidad p&uacute;blica o iniciar la recogida de datos de car&aacute;cter personal para los mismos, sin autorizaci&oacute;n de disposici&oacute;n general publicada en el BOE o diario oficial correspondiente constituye:";
 choices[26]= new Array();
 choices[26][0] = "no se necesita esperar a dicha publicaci&oacute;n en el BOE";
 choices[26][1] = "una infracci&oacute;n muy grave.";
 choices[26][2] = "una infracci&oacute;n grave.";
 choices[26][3] = "una infracci&oacute;n leve.";
 answers[26] = choices[26][2];
 units[26] = "29";
 comments[26] = "Id Pregunta: 596. ";


//  Id pregunta: 598 AÃ±o de creación de pregunta: 2006-01-01
 questions[27]= "28)  Uno de estos datos personales no es de los denominados &ldquo;especialmente protegidos&rdquo;";
 choices[27]= new Array();
 choices[27][0] = "Origen racial o &eacute;tnico.";
 choices[27][1] = "Afiliaci&oacute;n sindical";
 choices[27][2] = "Infracciones penales .";
 choices[27][3] = "Vida sexual.";
 answers[27] = choices[27][2];
 units[27] = "29";
 comments[27] = "Id Pregunta: 598. ";


//  Id pregunta: 599 AÃ±o de creación de pregunta: 2006-01-01
 questions[28]= "29)  Seg&uacute;n lo establecido en la ley Org&aacute;nica 15/1999, de 13 de diciembre, de protecci&oacute;n de datos de car&aacute;cter personal (LOPD). &iquest;Cual de los siguientes son principios de protecci&oacute;n de datos?";
 choices[28]= new Array();
 choices[28][0] = "Calidad de datos y derecho de Informaci&oacute;n en la recogida ";
 choices[28][1] = "Acceso, rectificaci&oacute;n y cancelaci&oacute;n ";
 choices[28][2] = "Acceso y calidad de datos";
 choices[28][3] = "Notificaci&oacute;n de ficheros";
 answers[28] = choices[28][0];
 units[28] = "29";
 comments[28] = "Id Pregunta: 599. ";


//  Id pregunta: 601 AÃ±o de creación de pregunta: 2006-01-01
 questions[29]= "30)  &iquest;Se pueden tratar datos de fuentes accesibles al p&uacute;blico?";
 choices[29]= new Array();
 choices[29][0] = "Si, ya que as&iacute; lo establece la LOPD";
 choices[29][1] = "No, no est&aacute; permitido por la LOPD";
 choices[29][2] = "Si, cuando se publique el reglamento que lo desarrolle ";
 choices[29][3] = "No, ya que no es una fuente de recogida de datos";
 answers[29] = choices[29][0];
 units[29] = "29";
 comments[29] = "Id Pregunta: 601. ";


//  Id pregunta: 603 AÃ±o de creación de pregunta: 2006-01-01
 questions[30]= "31)  &iquest;La prestaci&oacute;n de servicios por parte de terceros a las Administraciones P&uacute;blicas, cuando implica un tratamiento de datos (Art. 12 LOPD), exige";
 choices[30]= new Array();
 choices[30][0] = "Cumplir lo dispuesto en la Ley de Contratos de las Administraciones P&uacute;blicas";
 choices[30][1] = "Adem&aacute;s de cumplir lo dispuesto en otras leyes, deber&aacute; incorporar los requisitos formales exigibles al encargado del tratamiento";
 choices[30][2] = "Crear una persona jur&iacute;dica distinta sujeto al derecho privado";
 choices[30][3] = "Realizar copias de seguridad de los datos";
 answers[30] = choices[30][1];
 units[30] = "29";
 comments[30] = "Id Pregunta: 603. ";


//  Id pregunta: 608 AÃ±o de creación de pregunta: 2006-01-01
 questions[31]= "32)  &iquest;De qu&eacute; Ministerio depende jer&aacute;rquicamente la Agencia de Protecci&oacute;n de Datos?";
 choices[31]= new Array();
 choices[31][0] = "Justicia";
 choices[31][1] = "Interior";
 choices[31][2] = "Asuntos Exteriores";
 choices[31][3] = "Ninguna de las anteriores es cierta";
 answers[31] = choices[31][3];
 units[31] = "29";
 comments[31] = "Id Pregunta: 608. ";


//  Id pregunta: 662 AÃ±o de creación de pregunta: 2006-01-01
 questions[32]= "33)  &iquest;Cu&aacute;les de los siguientes ficheros de datos personales se rigen por su legislaci&oacute;n espec&iacute;fica y no por la LOPD?:";
 choices[32]= new Array();
 choices[32][0] = "Los derivados del Registro Civil";
 choices[32][1] = "Los ficheros establecidos para la investigaci&oacute;n del terrorismo y de formas graves de la delincuencia organizada";
 choices[32][2] = "Los derivados de im&aacute;genes y sonidos obtenidos mediante la utilizaci&oacute;n de videoc&aacute;maras";
 choices[32][3] = "Los ficheros de las Grandes Compa&ntilde;&iacute;as de Seguros, cuando lo comuniquen previamente a la Agencia de Protecci&oacute;n de Datos";
 answers[32] = choices[32][0];
 units[32] = "29";
 comments[32] = "Id Pregunta: 662. ";


//  Id pregunta: 4558 AÃ±o de creación de pregunta: 2007-01-01
 questions[33]= "34)  Seg&uacute;n la LOPD de datos de car&aacute;cter personal, indicar cual de las siguientes infracciones es calificada como grave";
 choices[33]= new Array();
 choices[33][0] = "no atender los requerimientos o apercibimientos de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos o no proporcionar a aqu&eacute;lla cuantos documentos e informaciones sean solicitados por la misma.";
 choices[33][1] = "el impedimento del ejercicio de derechos de acceso y oposici&oacute;n y la negativa a facilitar informaci&oacute;n solicitada.";
 choices[33][2] = "no atender de forma sistem&aacute;tica el deber legal de notificaci&oacute;n de la inclusi&oacute;n de datos de car&aacute;cter personal en un fichero";
 choices[33][3] = "tratar los datos de car&aacute;cter personal de forma legitima";
 answers[33] = choices[33][0];
 units[33] = "29";
 comments[33] = "Id Pregunta: 4558. ";


//  Id pregunta: 4560 AÃ±o de creación de pregunta: 2007-01-01
 questions[34]= "35)  El Responsable de Seguridad de un fichero con datos de car&aacute;cter personal revisara el registro de accesos, al menos";
 choices[34]= new Array();
 choices[34][0] = "una vez al mes";
 choices[34][1] = "cada 45 d&iacute;as";
 choices[34][2] = "cuando ocurra una incidencia";
 choices[34][3] = "con anterioridad a la auditoria bienal";
 answers[34] = choices[34][0];
 units[34] = "29";
 comments[34] = "Id Pregunta: 4560. ";


//  Id pregunta: 4613 AÃ±o de creación de pregunta: 2009-01-01
 questions[35]= "36)  Un fichero que contiene el DNI y % de discapacidad con motivo del cumplimiento de deberes p&uacute;blicos, pero no el tipo de discapacidad del que se trata, debe tener implantadas medidas de seguridad de nivel";
 choices[35]= new Array();
 choices[35][0] = "b&aacute;sico";
 choices[35][1] = "medio";
 choices[35][2] = "alto";
 choices[35][3] = "muy alto";
 answers[35] = choices[35][0];
 units[35] = "29";
 comments[35] = "Id Pregunta: 4613. ";


//  Id pregunta: 4776 AÃ±o de creación de pregunta: 2007-01-01
 questions[36]= "37)  La Ley Org&aacute;nica 15/1999 que regula la Protecci&oacute;n de Datos de Car&aacute;cter Personal, ser&aacute; de aplicaci&oacute;n a los datos de car&aacute;cter personal registrados en soporte f&iacute;sico, que los haga susceptibles de tratamiento, y a toda modalidad de uso posterior de estos datos por";
 choices[36]= new Array();
 choices[36][0] = "El sector p&uacute;blico exclusivamente";
 choices[36][1] = "El sector privado exclusivamente";
 choices[36][2] = "Los sectores p&uacute;blico y privado";
 choices[36][3] = "El sector privado y, en situaciones muy limitadas, afecta tambi&eacute;n al sector p&uacute;blico";
 answers[36] = choices[36][2];
 units[36] = "29";
 comments[36] = "Id Pregunta: 4776. ";


//  Id pregunta: 4986 AÃ±o de creación de pregunta: 2003-01-01
 questions[37]= "38)  Se&ntilde;ale cu&aacute;l de los siguientes no es uno de los miembros del Consejo Consultivo de la Agencia de Protecci&oacute;n deDatos, de conformidad con el art&iacute;culo 38 de la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n deDatos de car&aacute;cter personal:";
 choices[37]= new Array();
 choices[37][0] = "Un magistrado del Tribunal Constitucional.";
 choices[37][1] = "Un senador.";
 choices[37][2] = "Un representante de los usuarios y consumidores.";
 choices[37][3] = "Un miembro de la Real Academia de la Historia.";
 answers[37] = choices[37][0];
 units[37] = "29";
 comments[37] = "Id Pregunta: 4986. Examen TIC B 2007";


//  Id pregunta: 5063 AÃ±o de creación de pregunta: 2003-01-01
 questions[38]= "39)  Se&ntilde;ale la respuesta correcta:";
 choices[38]= new Array();
 choices[38][0] = "Las resoluciones de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos son recurribles en alzada ante el Ministrode Industria, Turismo y Comercio";
 choices[38][1] = "Las resoluciones de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos no pueden ser objeto de recurso alguno";
 choices[38][2] = "Las resoluciones de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos agotan la via administrativa";
 choices[38][3] = "Por v&iacute;a reglamentaria se establecer&aacute; el sistema de recursos administrativos ante las resoluciones de laAgencia Espa&ntilde;ola de Protecci&oacute;n de Datos";
 answers[38] = choices[38][2];
 units[38] = "29";
 comments[38] = "Id Pregunta: 5063. Examen TIC A 2007";


//  Id pregunta: 5268 AÃ±o de creación de pregunta: 2003-01-01
 questions[39]= "40)  En un fichero que contiene datos de car&aacute;cter personal, la presencia de informaci&oacute;n relativa a la minusval&iacute;a de las personas &hellip;";
 choices[39]= new Array();
 choices[39][0] = "significa que ha de estar bajo medidas de seguridad de car&aacute;cter alto de modo general, aunque bajo ciertas circunstancias basta que contemple medidas de seguridad de car&aacute;cter b&aacute;sico";
 choices[39][1] = "al menos de car&aacute;cter medio";
 choices[39][2] = "de car&aacute;cter alto en todas las circunstancias";
 choices[39][3] = "de car&aacute;cter b&aacute;sico en todas las circunstancias";
 answers[39] = choices[39][0];
 units[39] = "29";
 comments[39] = "Id Pregunta: 5268. ";


//  Id pregunta: 5270 AÃ±o de creación de pregunta: 2003-01-01
 questions[40]= "41)  El RD 1720/2007 desarrolla ..";
 choices[40]= new Array();
 choices[40][0] = "la ley 11/2007";
 choices[40][1] = "la ley 56/2007";
 choices[40][2] = "ley org&aacute;nica 15/1999";
 choices[40][3] = "ley org&aacute;nica 5/1992";
 answers[40] = choices[40][2];
 units[40] = "29";
 comments[40] = "Id Pregunta: 5270. ";


//  Id pregunta: 5271 AÃ±o de creación de pregunta: 2003-01-01
 questions[41]= "42)  El RD 1720/2007 deroga ..";
 choices[41]= new Array();
 choices[41][0] = "RD 994/1999";
 choices[41][1] = "RD 263/1996";
 choices[41][2] = "RD 1332/1994";
 choices[41][3] = "a y c";
 answers[41] = choices[41][3];
 units[41] = "29";
 comments[41] = "Id Pregunta: 5271. ";


//  Id pregunta: 5649 AÃ±o de creación de pregunta: 2003-01-01
 questions[42]= "43)  El RD 1720/2007 trata sobre:";
 choices[42]= new Array();
 choices[42][0] = "Reglamento de desarrollo de la Ley del Estatuto B&aacute;sico del Empleado P&uacute;blico";
 choices[42][1] = "Reglamento sobre medidas de protecci&oacute;n contra radiaciones electromagn&eacute;ticas";
 choices[42][2] = "Reglamento sobre medidas que favorezcan la ergonom&iacute;a y ecolog&iacute;a en los puestos de trabajo";
 choices[42][3] = "Reglamento de desarrollo de la Ley Org&aacute;nica de protecci&oacute;n de datos de carater personal";
 answers[42] = choices[42][3];
 units[42] = "29";
 comments[42] = "Id Pregunta: 5649. ";


//  Id pregunta: 5653 AÃ±o de creación de pregunta: 2003-01-01
 questions[43]= "44)  Seg&uacute;n el RD 1720/2007, a partir de que nivel de seguridad los sistemas de informaci&oacute;n e instalaciones deber&aacute;n someterse a una auditor&iacute;a, al menos cada dos a&ntilde;os";
 choices[43]= new Array();
 choices[43][0] = "nivel b&aacute;sico";
 choices[43][1] = "nivel medio";
 choices[43][2] = "nivel alto";
 choices[43][3] = "En ningun caso";
 answers[43] = choices[43][1];
 units[43] = "29";
 comments[43] = "Id Pregunta: 5653. ";


//  Id pregunta: 5656 AÃ±o de creación de pregunta: 2003-01-01
 questions[44]= "45)  Seg&uacute;n el RD 1720/2007, se implantar&aacute;n, adem&aacute;s de las medidas de nivel medio, las de nivel alto, a los siguientes ficheros:";
 choices[44]= new Array();
 choices[44][0] = "Aquellos de los que sean responsables las entidades financieras, para finalidades relacionadas con la prestaci&oacute;n de servicios financieros";
 choices[44][1] = "Los que contengan o se refieran a datos recabados con fines policiales sin consentimiento de las personas afectadas";
 choices[44][2] = "Aquellos de los que sean responsables las Entidades Gestoras y Servicios Comunes de la Seguridad social y se relacionen con el ejercicio de sus competencias";
 choices[44][3] = "La a) y la b) son correctas";
 answers[44] = choices[44][1];
 units[44] = "29";
 comments[44] = "Id Pregunta: 5656. ";


//  Id pregunta: 5660 AÃ±o de creación de pregunta: 2003-01-01
 questions[45]= "46)  Seg&uacute;n el RD 1720/2007, &iquest;en que casos se necesita la autorizaci&oacute;n del responsable del fichero para la ejecucion de los procedimientos de recuperaci&oacute;n de los datos?";
 choices[45]= new Array();
 choices[45][0] = "nivel b&aacute;sico";
 choices[45][1] = "nivel medio";
 choices[45][2] = "nivel alto";
 choices[45][3] = "En ningun caso";
 answers[45] = choices[45][1];
 units[45] = "29";
 comments[45] = "Id Pregunta: 5660. ";


//  Id pregunta: 5663 AÃ±o de creación de pregunta: 2009-01-01
 questions[46]= "47)  Seg&uacute;n el RD 1720/2007, los derechos de acceso, rectificaci&oacute;n, cancelaci&oacute;n y oposici&oacute;n:";
 choices[46]= new Array();
 choices[46][0] = "son derechos independientes, de tal forma que no puede entenderse que el ejercicio de ninguno de ellos sea requisito previo para el ejercicio de otro";
 choices[46][1] = "son derechos dependientes, por lo que debe entenderse la necesidad de establecer un orden entre estos para su ejercicio";
 choices[46][2] = "son derechos dependientes, por lo que deben ejercerse es el oreden citado (acceso, rectificaci&oacute;n, cancelaci&oacute;n y oposici&oacute;n)";
 choices[46][3] = "El RD 1720/2007 no trata de estos derechos";
 answers[46] = choices[46][0];
 units[46] = "29";
 comments[46] = "Id Pregunta: 5663. ";


//  Id pregunta: 5664 AÃ±o de creación de pregunta: 2009-01-01
 questions[47]= "48)  Seg&uacute;n el RD 1720/2007, los derechos de acceso, rectificaci&oacute;n, cancelaci&oacute;n y oposici&oacute;n:";
 choices[47]= new Array();
 choices[47][0] = " son personal&iacute;simos y ser&aacute;n ejercidos por el afectado";
 choices[47][1] = " son personal&iacute;simos y ser&aacute;n ejercidos por el afectado o un familiar directo";
 choices[47][2] = " son universales y ser&aacute;n ejercidos por cualquier ciudadano";
 choices[47][3] = "no existen como tales derechos";
 answers[47] = choices[47][0];
 units[47] = "29";
 comments[47] = "Id Pregunta: 5664. ";


//  Id pregunta: 5665 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  Seg&uacute;n el RD 1720/2007, &iquest;cual de los siguientes no es un derecho del afectado?";
 choices[48]= new Array();
 choices[48][0] = "Derecho de rectificacion";
 choices[48][1] = "Derecho de cancelacion";
 choices[48][2] = "Derecho de oposici&oacute;n";
 choices[48][3] = "Derecho de informaci&oacute;n";
 answers[48] = choices[48][3];
 units[48] = "29";
 comments[48] = "Id Pregunta: 5665. ";


//  Id pregunta: 5770 AÃ±o de creación de pregunta: 2009-01-01
 questions[49]= "50)  El Titulo III de la LOPD se refiere a los &ldquo;derechos de las personas&rdquo;, sin embargo en el TITULO II se recoge otro derecho relacionado con los Principios de la Protecci&oacute;n de datos que es:";
 choices[49]= new Array();
 choices[49][0] = "Oposici&oacute;n";
 choices[49][1] = "Cancelaci&oacute;n";
 choices[49][2] = "Revisi&oacute;n";
 choices[49][3] = "Informaci&oacute;n";
 answers[49] = choices[49][3];
 units[49] = "29";
 comments[49] = "Id Pregunta: 5770. ";


//  Id pregunta: 5771 AÃ±o de creación de pregunta: 2009-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l de los siguientes miembros no forma parte el Consejo Consultivo de la A.E.P.D.?";
 choices[50]= new Array();
 choices[50][0] = "Un Diputado, propuesto por el Congreso de los Diputados";
 choices[50][1] = "Un Senador propuesto por el Senado";
 choices[50][2] = "Un miembro de la Real Academia de la Lengua propuesto por la misma";
 choices[50][3] = "Un miembro de la Real Academia de la Historia propuesto por la misma";
 answers[50] = choices[50][2];
 units[50] = "29";
 comments[50] = "Id Pregunta: 5771. ";


//  Id pregunta: 5772 AÃ±o de creación de pregunta: 2009-01-01
 questions[51]= "52)  El derecho de acceso al que se refiere el Art. 15 de la LOPD s&oacute;lo podr&aacute; ser ejercitado a intervalos de";
 choices[51]= new Array();
 choices[51][0] = "12 meses, salvo que el interesado acredite un inter&eacute;s leg&iacute;timo al efecto en cuyo caso podr&aacute; ejercerlo en el plazo de 6 meses";
 choices[51][1] = "12 meses, salvo que el interesado acredite un inter&eacute;s leg&iacute;timo al efecto en cuyo caso podr&aacute; ejercerlo antes";
 choices[51][2] = "6 meses, salvo que el interesado acredite un inter&eacute;s leg&iacute;timo al efecto en cuyo caso podr&aacute; ejercerlo en el plazo de 2 meses";
 choices[51][3] = "10 d&iacute;as";
 answers[51] = choices[51][1];
 units[51] = "29";
 comments[51] = "Id Pregunta: 5772. ";


//  Id pregunta: 5776 AÃ±o de creación de pregunta: 2009-01-01
 questions[52]= "53)  &iquest;Qu&eacute; car&aacute;cter tendr&aacute;n los C&oacute;digos Tipo descritos en el art&iacute;culo 32 de la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal?";
 choices[52]= new Array();
 choices[52][0] = "De legislaci&oacute;n de desarrollo de la Ley Org&aacute;nica 15/1999.";
 choices[52][1] = "Sustitutivo de las regulaciones legales sobre protecci&oacute;n de datos para aquellos sectores que los adopten.";
 choices[52][2] = "Obligatorio para todas aquellas administraciones P&uacute;blicas que prevean la realizaci&oacute;n de transferencias internacionales de datos personales a terceros pa&iacute;ses que no garanticen un nivel adecuado de protecci&oacute;n.";
 choices[52][3] = "C&oacute;digos deontol&oacute;gicos o de buena pr&aacute;ctica profesional.";
 answers[52] = choices[52][3];
 units[52] = "29";
 comments[52] = "Id Pregunta: 5776. ";


//  Id pregunta: 5822 AÃ±o de creación de pregunta: 2009-01-01
 questions[53]= "54)  El Reglamento de desarrollo de la Ley Org&aacute;nica de Protecci&oacute;n de Datos, aprobado por Rel Decreto 1720/2007 de 21 de diciembre, indica que el plazo m&aacute;ximo para dictar y notificar resoluci&oacute;n acerca de la inscripci&oacute;n, modificaci&oacute;n o cancelaci&oacute;n de ficheros ser&aacute; de:";
 choices[53]= new Array();
 choices[53][0] = "Un mes";
 choices[53][1] = "Dos meses";
 choices[53][2] = "Tres meses";
 choices[53][3] = "Seis meses";
 answers[53] = choices[53][0];
 units[53] = "29";
 comments[53] = "Id Pregunta: 5822. MAP 2008 A1";


//  Id pregunta: 6120 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  &iquest;Puede la Agencia de Protecci&oacute;n de Datos, en el ejercicio de sus competencias, inspeccionar un fichero de titularidad p&uacute;blica de un Ministerio, examinando adem&aacute;s el equipo o equipos f&iacute;sicos en el que se halle el fichero?";
 choices[54]= new Array();
 choices[54][0] = "No, porque carece de competencias sobre ficheros de titularidad p&uacute;blica, y s&oacute;lo puede inspeccionar los de titularidad privada.";
 choices[54][1] = "No, porque los Ministerios son autoridades p&uacute;blicas y solo pueden ser inspeccionados por la Inspecci&oacute;n General de Servicios del Ministerio de la Presidencia. ";
 choices[54][2] = "S&iacute;, puede hacer la inspecci&oacute;n, pero s&oacute;lo si lo solicita el Ministerio correspondiente, no siendo admisible una inspecci&oacute;n de oficio.";
 choices[54][3] = "S&iacute;, puede hacer la inspecci&oacute;n conforme a sus competencias.";
 answers[54] = choices[54][3];
 units[54] = "29";
 comments[54] = "Id Pregunta: 6120. TIC A 2009";


//  Id pregunta: 6494 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  Seg&uacute;n la Ley Org&aacute;nica 15/1999, el censo promocional es una fuente de acceso p&uacute;blico s&oacute;lo:";
 choices[55]= new Array();
 choices[55][0] = "Durante los cinco &uacute;ltimos a&ntilde;os de vigencia";
 choices[55][1] = "Durante el &uacute;ltimo a&ntilde;o de vigencia";
 choices[55][2] = "Nunca es fuente de acceso p&uacute;blico";
 choices[55][3] = "Siempre que no aparezca el DNI";
 answers[55] = choices[55][1];
 units[55] = "29";
 comments[55] = "Id Pregunta: 6494. Castilla La Mancha 2009";


//  Id pregunta: 6582 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  &iquest;A qu&eacute; ficheros de los enumerados a continuaci&oacute;n corresponde no aplicar las medidas de nivel medio?";
 choices[56]= new Array();
 choices[56][0] = "A los recabados con fines policiales sin consentimiento de las personas afectadas";
 choices[56][1] = "A los relativos a la comisi&oacute;n de infracciones administrativas y penales";
 choices[56][2] = "A los de las Administraciones tributarias y que se relacionen con el ejercicio de sus potestades tributarias";
 choices[56][3] = "Todos los ficheros mencionados anteriormente deben aplicar medidas de seguridad de nivel medio.";
 answers[56] = choices[56][3];
 units[56] = "29";
 comments[56] = "Id Pregunta: 6582. NULL";


//  Id pregunta: 6585 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  Un fichero de car&aacute;cter personal de entidades financieras para las finalidades relacionadas con la prestaci&oacute;n de servicios financieros de acuerdo a la regulaci&oacute;n de protecci&oacute;n de datos vigente, de las siguientes medidas de seguridad cu&aacute;l no es obligatorio que cumpla?";
 choices[57]= new Array();
 choices[57][0] = "Debe existir un responsable de seguridad encargado de coordinar y controlar las medidas del documento";
 choices[57][1] = "Debe llevarse a cabo al menos una copia de respaldo semanal";
 choices[57][2] = "Debe existir un registro de accesos: usuario, hora, fichero, tipo de acceso, autorizado o denegado";
 choices[57][3] = "Todas las respuestas anteriores son correctas";
 answers[57] = choices[57][2];
 units[57] = "29";
 comments[57] = "Id Pregunta: 6585. NULL";


//  Id pregunta: 6586 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  Los ficheros de los operadores de comunicaciones electr&oacute;nicas, respecto de los datos de tr&aacute;fico y localizaci&oacute;n, de acuerdo a la normativa vigente de protecci&oacute;n de datos deben aplicar:";
 choices[58]= new Array();
 choices[58][0] = "S&oacute;lo medidas de seguridad de nivel medio";
 choices[58][1] = "S&oacute;lo medidas de seguridad de nivel medio y b&aacute;sico";
 choices[58][2] = "Medidas de seguridad de nivel b&aacute;sico, medio y deben disponer de un registro de accesos";
 choices[58][3] = "Todas las respuestas anteriores son incorrectas";
 answers[58] = choices[58][2];
 units[58] = "29";
 comments[58] = "Id Pregunta: 6586. NULL";


//  Id pregunta: 6587 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  El RD 1720/2007 s&oacute;lo desarrolla las medidas de seguridad en el tratamiento de datos de car&aacute;cter personal para los ficheros";
 choices[59]= new Array();
 choices[59][0] = "automatizados";
 choices[59][1] = "no automatizados";
 choices[59][2] = "A y B son correctas";
 choices[59][3] = "A y B son incorrectas";
 answers[59] = choices[59][2];
 units[59] = "29";
 comments[59] = "Id Pregunta: 6587. NULL";


//  Id pregunta: 6591 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  Algunas de las ventajas a la hora de utilizar software general para la realizaci&oacute;n de las auditor&iacute;as son:";
 choices[60]= new Array();
 choices[60][0] = "Economicidad";
 choices[60][1] = "Coste inicial alto";
 choices[60][2] = "No se verifican procesos particulares sino gen&eacute;ricos";
 choices[60][3] = "Todas las respuestas anteriores son incorrectas";
 answers[60] = choices[60][0];
 units[60] = "75";
 comments[60] = "Id Pregunta: 6591. NULL";


//  Id pregunta: 6592 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  Un tipo de software que lleva al cabo una auditor&iacute;a de todo el software y hardware que se encuentra en una red de una manera sencilla, adem&aacute;s de eficiente es";
 choices[61]= new Array();
 choices[61][0] = "RFFLow Flowchart";
 choices[61][1] = "Network Inventory Advisor";
 choices[61][2] = "Tcpdump";
 choices[61][3] = "Todas las respuestas anteriores son incorrectas";
 answers[61] = choices[61][3];
 units[61] = "75";
 comments[61] = "Id Pregunta: 6592. NULL";


//  Id pregunta: 6593 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  Un tipo de software libre que lleva al cabo una auditor&iacute;a de todo el software y hardware que se encuentra en una red de una manera sencilla, adem&aacute;s de eficiente es";
 choices[62]= new Array();
 choices[62][0] = "MAPILab Reports:";
 choices[62][1] = "Network Inventory Advisor";
 choices[62][2] = "Visual audit. X4";
 choices[62][3] = "Todas las respuestas anteriores son correctas";
 answers[62] = choices[62][3];
 units[62] = "75";
 comments[62] = "Id Pregunta: 6593. NULL";


//  Id pregunta: 6594 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  En el trabajo de auditor:";
 choices[63]= new Array();
 choices[63][0] = "Se distinguen de forma general tres etapas";
 choices[63][1] = "Una de las etapas se denomina proceso, donde se realiza el an&aacute;lisis cuantitativo y cualitativo de la informaci&oacute;n recabada.";
 choices[63][2] = "A y B son correctas";
 choices[63][3] = "A y B son incorrectas";
 answers[63] = choices[63][2];
 units[63] = "75";
 comments[63] = "Id Pregunta: 6594. NULL";


//  Id pregunta: 6596 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  El RD 1720/2007 indica que deben aplicarse t&eacute;cnicas de cifrado";
 choices[64]= new Array();
 choices[64][0] = "En la distribuci&oacute;n de soportes para datos personales a los que corresponde aplicar medidas de seguridad de nivel alto";
 choices[64][1] = "Los datos personales en su transmisi&oacute;n a trav&eacute;s de las redes de telecomunicaciones";
 choices[64][2] = "A y B son correctas";
 choices[64][3] = "A y B son incorrectas";
 answers[64] = choices[64][0];
 units[64] = "75";
 comments[64] = "Id Pregunta: 6596. NULL";


//  Id pregunta: 6597 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  Una auditor&iacute;a de acuerdo al RD 1720/2007, implica el llevar a cabo:";
 choices[65]= new Array();
 choices[65][0] = "An&aacute;lisis de la red de comunicaciones";
 choices[65][1] = "An&aacute;lisis de los sistemas operativos";
 choices[65][2] = "An&aacute;lisis de los ficheros automatizados";
 choices[65][3] = "Todas las respuestas anteriores son correctas";
 answers[65] = choices[65][3];
 units[65] = "75";
 comments[65] = "Id Pregunta: 6597. NULL";


//  Id pregunta: 7139 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  La Ley Org&aacute;nica 15/1999 de Protecci&oacute;n de Datos de Car&aacute;cter Personal, marca el periodo de prescripci&oacute;n de una infracci&oacute;n grave en:";
 choices[66]= new Array();
 choices[66][0] = "1 a&ntilde;o";
 choices[66][1] = "2 a&ntilde;os";
 choices[66][2] = "6 meses";
 choices[66][3] = "10 meses";
 answers[66] = choices[66][1];
 units[66] = "29";
 comments[66] = "Id Pregunta: 7139. Examen TIC B 2009";


//  Id pregunta: 8224 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  De acuerdo con la normativa de protecci&oacute;n de datos de car&aacute;cter personal, proceder a la creaci&oacute;n de ficheros de titularidad p&uacute;blica o iniciar la recogida de datos de car&aacute;cter personal para los mismos, sin autorizaci&oacute;n de disposici&oacute;n general publicada en el BOE o Diario oficial correspondiente, se considerar&aacute;:";
 choices[67]= new Array();
 choices[67][0] = "Infracci&oacute;n leve.";
 choices[67][1] = "Infracci&oacute;n notable.";
 choices[67][2] = "Infracci&oacute;n grave.";
 choices[67][3] = "Infracci&oacute;n muy grave.";
 answers[67] = choices[67][2];
 units[67] = "29";
 comments[67] = "Id Pregunta: 8224. Examen TIC A1 2010";


//  Id pregunta: 8734 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  La protecci&oacute;n de datos personales encuentra una de sus bases en:";
 choices[68]= new Array();
 choices[68][0] = "&Uacute;nicamente en la legislaci&oacute;n espa&ntilde;ola, en concreto, en Ley Org&aacute;nica 15/1999 de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal (LOPD).";
 choices[68][1] = "&Uacute;nicamente en la legislaci&oacute;n espa&ntilde;ola, inici&aacute;ndose en la Ley Org&aacute;nica 5/1992, de 29 de octubre, de Regulaci&oacute;n del Tratamiento Automatizado de Datos de car&aacute;cter personal (LORTAD)";
 choices[68][2] = "La Carta Europea de Derechos Fundamentales de la Uni&oacute;n Europea, por la que se reconoce el derecho a la protecci&oacute;n de datos personales como un derecho fundamental.";
 choices[68][3] = "La protecci&oacute;n de los derechos de autor en el mundo digital, en tanto el autor sea una persona f&iacute;sica";
 answers[68] = choices[68][2];
 units[68] = "29";
 comments[68] = "Id Pregunta: 8734. Examen TIC A2 2010 interna";


//  Id pregunta: 8738 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  La Ley Org&aacute;nica 15/1999 de Protecci&oacute;n do Datos de Car&aacute;cter Personal (LOPD) ser&aacute; de aplicaci&oacute;n a:";
 choices[69]= new Array();
 choices[69][0] = "&Uacute;nicamente los datos almacenados electr&oacute;nicamente, susceptibles de tratamiento y a toda modalidad de uso posterior de estos datos por lo sectores p&uacute;blico y privado.";
 choices[69][1] = "Los datos de car&aacute;cter personal registrados en soporte f&iacute;sico, que los haga susceptibles de tratamiento, y a toda modalidad de uso posterior de estos datos por el sector p&uacute;blico, de forma obligatoria, y por el sector privado, como recomendaci&oacute;n.";
 choices[69][2] = "Los datos de car&aacute;cter personal registrados en soporte f&iacute;sico, que los haga susceptibles de tratamiento, almacenados tanto en el sector p&uacute;blico como el privado, quedando excluidos los posibles usos posteriores de tales datos";
 choices[69][3] = "Los datos de car&aacute;cter personal registrados en soporte f&iacute;sico, que los haga susceptibles do tratamiento y a toda modalidad de uso posterior de estos datos por los sectores p&uacute;blico y privado";
 answers[69] = choices[69][3];
 units[69] = "29";
 comments[69] = "Id Pregunta: 8738. Examen TIC A2 2010 interna";


//  Id pregunta: 8740 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  De acuerdo con la definici&oacute;n establecida en el Real Decreto 1720/2007, la persona f&iacute;sica o jur&iacute;dica, de naturaleza p&uacute;blica o privada, u &oacute;rgano administrativo, que s&oacute;lo o conjuntamente con otros decida sobre la finalidad, contenido y uso del tratamiento, aunque NO lo realizase materialmente es:";
 choices[70]= new Array();
 choices[70][0] = "El encargado del fichero o del tratamiento.";
 choices[70][1] = "El responsable del fichero o del tratamiento.";
 choices[70][2] = "El destinatario o cesionario del fichero o del tratamiento";
 choices[70][3] = "El propietario del fichero o del tratamiento.";
 answers[70] = choices[70][1];
 units[70] = "29";
 comments[70] = "Id Pregunta: 8740. Examen TIC A2 2010 interna";


//  Id pregunta: 8779 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  El art&iacute;culo 3 de la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal, define como datos de car&aacute;cter personal:";
 choices[71]= new Array();
 choices[71][0] = "Cualquier informaci&oacute;n concerniente a personas f&iacute;sicas identificadas o no.";
 choices[71][1] = "Cualquier informaci&oacute;n concerniente a personas f&iacute;sicas y jur&iacute;dicas.";
 choices[71][2] = "Cualquier informaci&oacute;n concerniente a personas f&iacute;sicas identificadas o identificables.";
 choices[71][3] = "Cualquier informaci&oacute;n concerniente a personas identificadas.";
 answers[71] = choices[71][2];
 units[71] = "29";
 comments[71] = "Id Pregunta: 8779. Examen UPM A2 2011";


//  Id pregunta: 8781 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  El Registro General de Protecci&oacute;n de Datos es un &Oacute;rgano integrado:";
 choices[72]= new Array();
 choices[72][0] = "En la Agencia de Protecci&oacute;n de Datos.";
 choices[72][1] = "En el Registro Civil.";
 choices[72][2] = "En el Registro Mercantil.";
 choices[72][3] = "En el Registro General del Ministerio de Justicia.";
 answers[72] = choices[72][0];
 units[72] = "29";
 comments[72] = "Id Pregunta: 8781. Examen UPM A2 2011";


//  Id pregunta: 8902 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  &iquest;Cu&aacute;les de los siguientes tipos de ficheros est&aacute;n amparados por la Ley Org&aacute;nica 15/1999, de Protecci&oacute;n de Datos de Car&aacute;cter Personal?:";
 choices[73]= new Array();
 choices[73][0] = "Los ficheros sometidos a la normativa sobre protecci&oacute;n de materias clasificadas.";
 choices[73][1] = "El fichero de clientes de una empresa de telecomunicaciones que da servicio de telefon&iacute;a y acceso a Internet.";
 choices[73][2] = "Los ficheros mantenidos por personas f&iacute;sicas a t&iacute;tulo exclusivamente personal o dom&eacute;stico.";
 choices[73][3] = "Ninguno de los anteriores";
 answers[73] = choices[73][1];
 units[73] = "29";
 comments[73] = "Id Pregunta: 8902. Operador Ayto. Madrid 2010";


//  Id pregunta: 8903 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  Seg&uacute;n la Ley Org&aacute;nica 15/1999, de Protecci&oacute;n de Datos de Car&aacute;cter Personal, no es una fuente accesible al p&uacute;blico:";
 choices[74]= new Array();
 choices[74][0] = "El padr&oacute;n municipal.";
 choices[74][1] = "Los diarios oficiales.";
 choices[74][2] = "El censo promocional.";
 choices[74][3] = "Los medios de comunicaci&oacute;n";
 answers[74] = choices[74][0];
 units[74] = "29";
 comments[74] = "Id Pregunta: 8903. Operador Ayto. Madrid 2010";


//  Id pregunta: 8974 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  Seg&uacute;n las definiciones incluidas en el art. 5 del R.D. 1720/2007, &ldquo;la persona f&iacute;sica o jur&iacute;dica, p&uacute;blica o privada u &oacute;rgano administrativo, al que se revelen los datos&rdquo; es:";
 choices[75]= new Array();
 choices[75][0] = "Encargado del tratamiento";
 choices[75][1] = "Destinatario o cesionario";
 choices[75][2] = "Afectado o interesado";
 choices[75][3] = "Tercero";
 answers[75] = choices[75][1];
 units[75] = "29";
 comments[75] = "Id Pregunta: 8974. ";


//  Id pregunta: 8992 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  La ley de econom&iacute;a sostenible ha modificado las cuant&iacute;as de las sanciones fijadas en la LOPD &iquest;C&oacute;mo?";
 choices[76]= new Array();
 choices[76][0] = "Ha aumentado todas";
 choices[76][1] = "Ha disminuido todas";
 choices[76][2] = "Ha disminuido la m&iacute;nima y aumentado la m&aacute;xima";
 choices[76][3] = "Ha aumentado la m&iacute;nima y disminuido la m&aacute;xima";
 answers[76] = choices[76][3];
 units[76] = "29";
 comments[76] = "Id Pregunta: 8992. ";


//  Id pregunta: 9003 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  Seg&uacute;n la LOPD, el &oacute;rgano sancionador establecer&aacute; la cuant&iacute;a de la sanci&oacute;n aplicando la escala relativa a la clase de infracciones que preceda inmediatamente en gravedad a aquella en que se integra la considerada en el caso de que se trate, en los siguientes supuestos:";
 choices[77]= new Array();
 choices[77][0] = "Cuando pueda apreciarse que la conducta del afectado ha podido inducir a la comisi&oacute;n de la infracci&oacute;n.";
 choices[77][1] = "Cuando se haya producido un proceso de fusi&oacute;n por absorci&oacute;n y la infracci&oacute;n fuese anterior a dicho proceso, no siendo imputable a la entidad absorbente.";
 choices[77][2] = "Cuando el infractor haya reconocido espont&aacute;neamente su culpabilidad.";
 choices[77][3] = "Todos los anteriores";
 answers[77] = choices[77][3];
 units[77] = "29";
 comments[77] = "Id Pregunta: 9003. ";


//  Id pregunta: 9004 AÃ±o de creación de pregunta: 2011-01-01
 questions[78]= "79)  No es una infracci&oacute;n grave seg&uacute;n la LOPD:";
 choices[78]= new Array();
 choices[78][0] = "El incumplimiento de los restantes deberes de notificaci&oacute;n o requerimiento al afectado impuestos por esta Ley y sus disposiciones de desarrollo.";
 choices[78][1] = "Proceder a la creaci&oacute;n de ficheros de titularidad privada o iniciar la recogida de datos de car&aacute;cter personal para los mismos con finalidades distintas de las queconstituyen el objeto leg&iacute;timo de la empresa o entidad.";
 choices[78][2] = "Mantener los ficheros, locales, programas o equipos que contengan datos de car&aacute;cter personal sin las debidas condiciones de seguridad que por v&iacute;a reglamentaria se determinen.";
 choices[78][3] = "Tratar datos de car&aacute;cter personal sin recabar el consentimiento de las personas afectadas, cuando el mismo sea necesario conforme a lo dispuesto en esta Ley y sus disposiciones de desarrollo.";
 answers[78] = choices[78][1];
 units[78] = "29";
 comments[78] = "Id Pregunta: 9004. ";


//  Id pregunta: 9061 AÃ±o de creación de pregunta: 2011-01-01
 questions[79]= "80)  &iquest;Cu&aacute;l de las siguientes no es una infracci&oacute;n grave seg&uacute;n la ley 15/1999 de protecci&oacute;n de datos de car&aacute;cter personal?";
 choices[79]= new Array();
 choices[79][0] = "No remitir a la Agencia de Protecci&oacute;n de Datos las notificaciones previstas en esta Ley o en sus disposiciones de desarrollo";
 choices[79][1] = "La vulneraci&oacute;n del deber de guardar secreto acerca del tratamiento de los datos de car&aacute;cter personal por parte del responsable del fichero";
 choices[79][2] = "La obstrucci&oacute;n al ejercicio de la funci&oacute;n inspectora";
 choices[79][3] = "El incumplimiento del deber de informaci&oacute;n al afectado acerca del tratamiento de sus datos de car&aacute;cter personal cuando los datos no hayan sido recabados del propio interesado";
 answers[79] = choices[79][0];
 units[79] = "29";
 comments[79] = "Id Pregunta: 9061. NULL";


//  Id pregunta: 9062 AÃ±o de creación de pregunta: 2011-01-01
 questions[80]= "81)  &iquest;Cu&aacute;l de las siguientes es una infracci&oacute;n muy grave seg&uacute;n la normativa de protecci&oacute;n de datos de car&aacute;cter personal?";
 choices[80]= new Array();
 choices[80][0] = "La vulneraci&oacute;n del deber de guardar secreto acerca del tratamiento de los datos de car&aacute;cter personal";
 choices[80][1] = "No atender, u obstaculizar de forma sistem&aacute;tica el ejercicio de los derechos de acceso, rectificaci&oacute;n, cancelaci&oacute;n u oposici&oacute;n";
 choices[80][2] = "No cesar en el tratamiento il&iacute;cito de datos de car&aacute;cter personal cuando existiese un previo requerimiento del Director de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos para ello";
 choices[80][3] = "No solicitar la inscripci&oacute;n del fichero de datos de car&aacute;cter personal en el Registro General de Protecci&oacute;n de Datos";
 answers[80] = choices[80][2];
 units[80] = "29";
 comments[80] = "Id Pregunta: 9062. NULL";


//  Id pregunta: 9065 AÃ±o de creación de pregunta: 2011-01-01
 questions[81]= "82)  De acuerdo a la normativa de protecci&oacute;n de datos de car&aacute;cter personal, la potestad del &oacute;rgano sancionador de inmovilizaci&oacute;n de ficheros  ";
 choices[81]= new Array();
 choices[81][0] = "Se podr&aacute; ejercer s&oacute;lo en supuestos constitutivos de infracci&oacute;n muy grave";
 choices[81][1] = "Se podr&aacute; ejercer en ciertos supuestos constitutivos de infracci&oacute;n grave o muy grave";
 choices[81][2] = "Siempre la puede ejercer el &oacute;rgano sancionador, mediante resoluci&oacute;n motivada";
 choices[81][3] = "La ley 2/2011 de Econom&iacute;a Sostenible elimina la potestad inmovilizadora";
 answers[81] = choices[81][1];
 units[81] = "29";
 comments[81] = "Id Pregunta: 9065. NULL";


//  Id pregunta: 10003 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  El RD 1720/2007 de 21 de diciembre, por el que se aprueba el reglamento de desarrollo de la Ley Org&aacute;nica de Protecci&oacute;n de Datos, establece que ";
 choices[82]= new Array();
 choices[82][0] = "en ning&uacute;n caso, el encargado de tratamiento podr&aacute; subcontratar a un tercero la realizaci&oacute;n de un tratamiento que le hubiera encomendado el responsable del fichero.";
 choices[82][1] = "los ficheros de datos de car&aacute;cter personal de titularidad p&uacute;blica sujetos a la competencia de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos deber&aacute;n notificarse a &eacute;sta en el plazo de 30 d&iacute;as naturales desde la publicaci&oacute;n en el diario oficial correspondiente.";
 choices[82][2] = "el ejercicio del derecho de acceso por el afectado ser&aacute; resuelto por el Responsable del fichero en el plazo m&aacute;ximo de un mes a contar desde la recepci&oacute;n de la solicitud de acceso.";
 choices[82][3] = "los ficheros y los tratamientos de datos de car&aacute;cter personal se clasifican entres niveles: b&aacute;sico, medio y alto.";
 answers[82] = choices[82][2];
 units[82] = "29";
 comments[82] = "Id Pregunta: 10003. ";


//  Id pregunta: 10253 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  Cuando sea preciso recabar el consentimiento del interesado para tratar sus datos personales:";
 choices[83]= new Array();
 choices[83][0] = "Ser&aacute; preciso que el responsable del tratamiento pueda probar la existencia de dicho consentimiento, s&oacute;lo en el caso de los datos especialmente protegidos";
 choices[83][1] = "Ser&aacute; preciso que el responsable del tratamiento pueda probar la existencia de dicho consentimiento, en todo caso y durante un periodo m&aacute;ximo de 12 meses";
 choices[83][2] = "Ser&aacute; preciso que el responsable del tratamiento pueda probar la existencia de dicho consentimiento, en todo caso y mientras dure dicho tratamiento";
 choices[83][3] = "No ser&aacute; necesario que el responsable del tratamiento pruebe la existencia del consentimiento para el mismo";
 answers[83] = choices[83][2];
 units[83] = "29";
 comments[83] = "Id Pregunta: 10253. Art&iacute;culo 12.3 del RD 1720/2007";


//  Id pregunta: 10261 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  En cuanto al registro de ficheros en el Registro General de Protecci&oacute;n de Datos";
 choices[84]= new Array();
 choices[84][0] = "S&oacute;lo es obligatorio en el caso de ficheros que contengan datos especialmente protegidos para ficheros de titularidad privada y en todo caso para los de titularidad p&uacute;blica";
 choices[84][1] = "S&oacute;lo es obligatorio en el caso de ficheros que contengan datos especialmente protegidos para ficheros de titularidad p&uacute;blica y en todo caso para los de titularidad privada";
 choices[84][2] = "Es obligatorio para todo fichero que contenga datos de car&aacute;cter personal";
 choices[84][3] = "No es obligatorio en ning&uacute;n caso";
 answers[84] = choices[84][2];
 units[84] = "29";
 comments[84] = "Id Pregunta: 10261. Art&iacute;culo 55.1 y 55.2 del RD 1720/2007";


//  Id pregunta: 10263 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  La inscripci&oacute;n de ficheros de titularidad p&uacute;blica en el Registro General de Protecci&oacute;n de Datos";
 choices[85]= new Array();
 choices[85][0] = "Puede hacerse de oficio por el propio registro, sin perjuicio de la obligaci&oacute;n de notificaci&oacute;n, si previamente se ha publicado en el diario oficial  correspondiente la norma o acuerdo que lo regule";
 choices[85][1] = "Puede hacerse de oficio por el propio registro, no siendo ya necesaria la notificaci&oacute;n, si previamente se ha publicado en el diario oficial  correspondiente la norma o acuerdo que lo regule";
 choices[85][2] = "Puede hacerse de oficio por el propio registro, sin perjuicio de la obligaci&oacute;n de notificaci&oacute;n, desde el momento en que se determina la necesidad de crear el fichero";
 choices[85][3] = "Puede hacerse de oficio por el propio registro, no siendo ya necesaria la notificaci&oacute;n, desde el momento en que se determina la necesidad de crear el fichero";
 answers[85] = choices[85][0];
 units[85] = "29";
 comments[85] = "Id Pregunta: 10263. Art&iacute;culo 63.1 y 63.2 del RD 1720/2007";


//  Id pregunta: 10264 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  En referencia al tratamiento de datos de car&aacute;cter personal recogidos en ficheros de las Fuerzas y Cuerpos de Seguridad, el ejercicio de los derechos de acceso, rectificaci&oacute;n, cancelaci&oacute;n y oposici&oacute;n";
 choices[86]= new Array();
 choices[86][0] = "Puede denegarse si afecta a la defensa del estado, no siendo posible en tal caso plantear ante la Agencia de Protecci&oacute;n de Datos la posible improcedencia de la denegaci&oacute;n";
 choices[86][1] = "Puede denegarse si afecta a la defensa del estado y el interesado plantear ante la Agencia de Protecci&oacute;n de Datos la posible improcedencia de la denegaci&oacute;n";
 choices[86][2] = "No puede denegarse si el fichero contiene datos especialmente protegidos";
 choices[86][3] = "No puede denegarse en ning&uacute;n caso";
 answers[86] = choices[86][1];
 units[86] = "29";
 comments[86] = "Id Pregunta: 10264. Art&iacute;culo 23.1 y 23.3 de la Ley 15/1999";


//  Id pregunta: 10265 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  	Podr&aacute;n tratarse datos personales relativos al cumplimiento o incumplimiento de obligaciones dinerarias";
 choices[87]= new Array();
 choices[87][0] = "Desde el momento en que se produce el impago de la obligaci&oacute;n contraida y por tiempo indefinido";
 choices[87][1] = "Desde el momento en que se adquiere el compromiso de pago y por tiempo indefinido";
 choices[87][2] = "Desde el momento en que se produce el impago de la obligaci&oacute;n contraida siempre que no hayan transcurrido seis a&ntilde;os de dicho impago";
 choices[87][3] = "Desde el momento en que se adquiere el compromiso de pago siempre que no hayan transcurrido seis a&ntilde;os de la adquisici&oacute;n de la deuda";
 answers[87] = choices[87][2];
 units[87] = "29";
 comments[87] = "Id Pregunta: 10265. Art&iacute;culo 38.1 a) y b) del RD 1720/2007";


//  Id pregunta: 10268 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  Las infracciones leves de la Ley 15/1999:";
 choices[88]= new Array();
 choices[88][0] = "Pueden no acarrear sanci&oacute;n econ&oacute;mica y prescriben al a&ntilde;o";
 choices[88][1] = "Acarrean una sanci&oacute;n econ&oacute;mica m&iacute;nima de 900 euros y prescriben al a&ntilde;o";
 choices[88][2] = "Pueden no acarrear sanci&oacute;n econ&oacute;mica y prescriben a los seis meses";
 choices[88][3] = "Acarrean una sanci&oacute;n econ&oacute;mica m&iacute;nima de 900 euros y prescriben a los seis meses";
 answers[88] = choices[88][1];
 units[88] = "29";
 comments[88] = "Id Pregunta: 10268. Art&iacute;culos 45.1 y 47.1 de la Ley 15/1999";


//  Id pregunta: 10270 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  &iquest;En cu&aacute;l de los siguientes casos no es necesaria autorizaci&oacute;n del director de la AEPD para hacer una transferencia internacional de datos personales?";
 choices[89]= new Array();
 choices[89][0] = "Cuando se refiera a transferencias dinerarias conforme a su legislaci&oacute;n espec&iacute;fica ";
 choices[89][1] = "Cuando la transferencia sea precisa para el reconocimiento, ejercicio o defensa de un derecho en un proceso judicial ";
 choices[89][2] = "Cuando la transferencia se haga a efectos de prestar o solicitar auxilio judicial internacional ";
 choices[89][3] = "En los tres casos anteriores";
 answers[89] = choices[89][3];
 units[89] = "29";
 comments[89] = "Id Pregunta: 10270. Art&iacute;culo 34 de la Ley 15/1999";


//  Id pregunta: 10775 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  Se&ntilde;ale qu&eacute; medida es necesario adoptar en ficheros y tratamientos automatizados para establecer el nivel de seguridad medio seg&uacute;n se establece en el Real Decreto 1720/2007:";
 choices[90]= new Array();
 choices[90][0] = "Control de acceso: Los usuarios tendr&aacute;n acceso &uacute;nicamente a aquellos recursos que precisen para el desarrollo de sus funciones.";
 choices[90][1] = "Identificaci&oacute;n y autenticaci&oacute;n: El responsable del fichero o tratamiento establecer&aacute; un mecanismo que limite la posibilidad de intentar reiteradamente el acceso no autorizado al sistema de informaci&oacute;n.";
 choices[90][2] = "Telecomunicaciones: La transmisi&oacute;n de datos de car&aacute;cter personal a trav&eacute;s de redes p&uacute;blicas o redes inal&aacute;mbricas de comunicaciones electr&oacute;nicas se realizar&aacute; cifrando dichos datos o bien utilizando cualquier otro mecanismo que garantice que la informaci&oacute;n no sea inteligible ni manipulada por terceros.";
 choices[90][3] = "Registro de accesos: De cada intento de acceso se guardar&aacute;n, como m&iacute;nimo, la identificaci&oacute;n del usuario, la fecha y hora en que se realiz&oacute;, el fichero accedido, el tipo de acceso y si ha sido autorizado o denegado.";
 answers[90] = choices[90][1];
 units[90] = "29";
 comments[90] = "Id Pregunta: 10775. Examen GSI 2014";


//  Id pregunta: 10931 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  En materia de protecci&oacute;n de datos, el ejercicio del derecho de cancelaci&oacute;n dar&aacute; lugar:";
 choices[91]= new Array();
 choices[91][0] = "A que se modifiquen los datos que resulten ser falsos o inexactos.";
 choices[91][1] = "A que se modifiquen los datos que resulten ser inadecuados o inexactos.";
 choices[91][2] = "A que se supriman los datos que resulten ser inadecuados o excesivos.";
 choices[91][3] = "A que se supriman los datos que resulten ser inexactos o excesivos.";
 answers[91] = choices[91][2];
 units[91] = "29";
 comments[91] = "Id Pregunta: 10931. TIC A1 AGE 2014";


//  Id pregunta: 11012 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola garantiza el secreto de las comunicaciones?";
 choices[92]= new Array();
 choices[92][0] = "Art&iacute;culo 15";
 choices[92][1] = "17";
 choices[92][2] = "Art&iacute;culo 18";
 choices[92][3] = "Art&iacute;culo 19";
 answers[92] = choices[92][2];
 units[92] = "29";
 comments[92] = "Id Pregunta: 11012. ";


//  Id pregunta: 11098 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  De acuerdo con la LOPD, seleccione la respuesta verdadera";
 choices[93]= new Array();
 choices[93][0] = "Iniciar la recogida de datos de car&aacute;cter personal sin autorizaci&oacute;n de disposici&oacute;n general publicada en el BOE o diario oficial correspondiente es una infracci&oacute;n GRAVE.";
 choices[93][1] = "No atender, por motivos formales, la solicitud del interesado de rectificaci&oacute;n o cancelaci&oacute;n de los datos personales objeto de tratamiento cuando legalmente proceda es una infracci&oacute;n MUY GRAVE";
 choices[93][2] = "Las respuestas a) y b) son falsas";
 choices[93][3] = "Las respuestas a) y b) son verdaderas";
 answers[93] = choices[93][0];
 units[93] = "29";
 comments[93] = "Id Pregunta: 11098. ";


//  Id pregunta: 11099 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Seleccione la respuesta verdadera sobre la Agencia de Protecci&oacute;n de Datos";
 choices[94]= new Array();
 choices[94][0] = "Se relaciona con el Gobierno a trav&eacute;s del Ministerio de Interior";
 choices[94][1] = "Est&aacute; adscrita a la Ley General Presupuestaria pero no tiene dotaci&oacute;n presupuestaria propia.";
 choices[94][2] = "El Director de la AEPD es nombrado por un periodo de cuatro a&ntilde;os";
 choices[94][3] = "Est&aacute; sometida &uacute;nicamente al control interno por el Tribunal de Cuentas.";
 answers[94] = choices[94][2];
 units[94] = "29";
 comments[94] = "Id Pregunta: 11099. ";


//  Id pregunta: 11319 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  En cuanto a las medidas de seguridad exigidas seg&uacute;n la Ley Org&aacute;nica de Protecci&oacute;n de Datos, una de las siguientes medidas no es exigible en el nivel b&aacute;sico.";
 choices[95]= new Array();
 choices[95][0] = "Registro de incidencias";
 choices[95][1] = "El documento de seguridad con indicaci&oacute;n de activos, medidas y responsable del fichero.";
 choices[95][2] = "Listado de personas autorizadas con acceso.";
 choices[95][3] = "El documento de seguridad.";
 answers[95] = choices[95][1];
 units[95] = "29";
 comments[95] = "Id Pregunta: 11319. En el nivel b&aacute;sico, el documento de seguridad, debe tener los recursos y las medidas. La indicaci&oacute;n del responsable es en el nivel medio.";


//  Id pregunta: 11582 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  De acuerdo a la LOPD, el incumplimiento del deber de informaci&oacute;n al afectado acerca del tratamiento de sus datos de car&aacute;cter personal constituye una infracci&oacute;n de car&aacute;cter:";
 choices[96]= new Array();
 choices[96][0] = "Leve, cuando los datos se han recabado del propio interesado";
 choices[96][1] = "Grave, cuando los datos se han recabado del propio interesado";
 choices[96][2] = "Leve, cuando los datos no se han recabado del propio interesado";
 choices[96][3] = "Todas las anteriores son falsas";
 answers[96] = choices[96][0];
 units[96] = "29";
 comments[96] = "Id Pregunta: 11582. ";


//  Id pregunta: 11583 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Se&ntilde;ale la opci&oacute;n incorrecta. Es posible la cesi&oacute;n de los datos de car&aacute;cter personal sin contar con el consentimiento del interesado cuando:";
 choices[97]= new Array();
 choices[97][0] = "La comunicaci&oacute;n que debe efectuarse tiene por destinatario el Tribunal de Cuentas y se realiza en el &aacute;mbito de las funciones que la ley le atribuya expresamente.";
 choices[97][1] = "Lo autoriza una norma de derecho comunitario.";
 choices[97][2] = "Es una cesi&oacute;n entre Administraciones p&uacute;blicas y tiene por objeto el tratamiento de los datos con fines cient&iacute;ficos.";
 choices[97][3] = "Todas las anteriores son correctas";
 answers[97] = choices[97][3];
 units[97] = "29";
 comments[97] = "Id Pregunta: 11583. ";


//  Id pregunta: 11584 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Frente a la recepci&oacute;n de una solicitud de revocaci&oacute;n de consentimiento del tratamiento de datos de car&aacute;cter personal, el responsable cesar&aacute; el tratamiento de los datos en un plazo m&aacute;ximo de:";
 choices[98]= new Array();
 choices[98][0] = "30 d&iacute;as h&aacute;biles";
 choices[98][1] = "30 d&iacute;as naturales";
 choices[98][2] = "10 d&iacute;as h&aacute;biles";
 choices[98][3] = "10 d&iacute;as naturales";
 answers[98] = choices[98][2];
 units[98] = "29";
 comments[98] = "Id Pregunta: 11584. ";


//  Id pregunta: 11731 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Cu&aacute;l es el perfil de metrica v3 al que pertenece el Responsable de Seguridad?  ";
 choices[99]= new Array();
 choices[99][0] = "Analista";
 choices[99][1] = "Jefe de proyecto";
 choices[99][2] = "Consultor";
 choices[99][3] = "Analista-programador";
 answers[99] = choices[99][1];
 units[99] = "29";
 comments[99] = "Id Pregunta: 11731. ";


