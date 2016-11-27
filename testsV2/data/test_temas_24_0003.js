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

//  Id pregunta: 91 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  A efectos de la LOPD,  la persona f&iacute;sica o jur&iacute;dica, de naturaleza p&uacute;blica o privada, u &oacute;rgano administrativo, que decida sobre la finalidad, contenido y uso del tratamiento, es el:";
 choices[0]= new Array();
 choices[0][0] = "Encargado del tratamiento";
 choices[0][1] = "Afectado o interesado";
 choices[0][2] = "Responsable del fichero o tratamiento";
 choices[0][3] = "Decisor del tratamiento";
 answers[0] = choices[0][2];
 units[0] = "29";
 comments[0] = "Id Pregunta: 91. ";


//  Id pregunta: 166 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  El T&iacute;tulo V de la LOPD trata sobre:";
 choices[1]= new Array();
 choices[1][0] = "Principios de la protecci&oacute;n de datos";
 choices[1][1] = "Derechos de las personas";
 choices[1][2] = "Movimiento internacional de datos";
 choices[1][3] = "Agencia de Protecci&oacute;n de Datos";
 answers[1] = choices[1][2];
 units[1] = "29";
 comments[1] = "Id Pregunta: 166. ";


//  Id pregunta: 263 AÃ±o de creación de pregunta: 2009-01-01
 questions[2]= "3)  Indicar cu&aacute;l de las siguientes afirmaciones es cierta en el &aacute;mbito de la LOPD:";
 choices[2]= new Array();
 choices[2][0] = "La normativa de protecci&oacute;n de datos es aplicable s&oacute;lo a ficheros automatizados que contengan datos personales de personas f&iacute;sicas";
 choices[2][1] = "La normativa de protecci&oacute;n de datos es aplicable tanto a ficheros automatizados como no automatizados que contengan datos de car&aacute;cter personal";
 choices[2][2] = "La normativa de protecci&oacute;n de datos no es aplicable a personas f&iacute;sicas ni jur&iacute;dicas";
 choices[2][3] = "&quot;b&quot; y &quot;c&quot; son ciertas";
 answers[2] = choices[2][1];
 units[2] = "29";
 comments[2] = "Id Pregunta: 263. ";


//  Id pregunta: 277 AÃ±o de creación de pregunta: 2009-01-01
 questions[3]= "4)  La Agencia de Protecci&oacute;n de Datos depende funcionalmente del:";
 choices[3]= new Array();
 choices[3][0] = "Ministerio de Justicia";
 choices[3][1] = "Ministerio de Ciencia y Tecnolog&iacute;a";
 choices[3][2] = "Ministerio de Educaci&oacute;n, Cultura y Deporte";
 choices[3][3] = "Es un organismo independiente de cualquier Ministerio";
 answers[3] = choices[3][3];
 units[3] = "29";
 comments[3] = "Id Pregunta: 277. ";


//  Id pregunta: 283 AÃ±o de creación de pregunta: 2009-01-01
 questions[4]= "5)  La calidad de los datos a la que hacen referencia las leyes de protecci&oacute;n de datos no incluye uno de los aspectos siguientes:";
 choices[4]= new Array();
 choices[4][0] = "Tipicidad";
 choices[4][1] = "Veracidad";
 choices[4][2] = "Finalidad";
 choices[4][3] = "Pertinencia";
 answers[4] = choices[4][0];
 units[4] = "29";
 comments[4] = "Id Pregunta: 283. ";


//  Id pregunta: 329 AÃ±o de creación de pregunta: 2009-01-01
 questions[5]= "6)  Las medidas de seguridad b&aacute;sicas para datos automatizados de car&aacute;cter personal:";
 choices[5]= new Array();
 choices[5][0] = "Requieren la existencia de registros de los accesos a los ficheros o tablas que contienen la informaci&oacute;n.";
 choices[5][1] = "La responsabilidad de los registros de acceso est&aacute; bajo control del Responsable de seguridad y existen mecanismos de control para verificar que el registro est&aacute; activo y que no haya saltos temporales.";
 choices[5][2] = "No se utilizan cuentas gen&eacute;ricas para entrar al sistema.";
 choices[5][3] = "Utiliza t&eacute;cnicas de encriptaci&oacute;n en las comunicaciones de datos";
 answers[5] = choices[5][2];
 units[5] = "29";
 comments[5] = "Id Pregunta: 329. NULL";


//  Id pregunta: 355 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Las Comunidades Aut&oacute;nomas pueden crear organismos similares a la Agencia de Protecci&oacute;n de Datos que:";
 choices[6]= new Array();
 choices[6][0] = "Tendr&aacute;n competencias &uacute;nicamente sobre los ficheros de datos de car&aacute;cter personal, creados o gestionados por las CC.AA.";
 choices[6][1] = "Tendr&aacute;n competencias sobre los ficheros de datos de car&aacute;cter personal creados o gestionados por las CCAA y por la Administraci&oacute;n local de su &aacute;mbito territorial";
 choices[6][2] = "S&oacute;lo tendr&aacute;n competencias sobre los ficheros de datos de car&aacute;cter personal creados por la Administraci&oacute;n local de su &aacute;mbito territorial si lo autoriza el Director de la Agencia de Protecci&oacute;n de Datos";
 choices[6][3] = "Las CCAA no pueden crear organismos similares a la Agencia de Protecci&oacute;n de Datos";
 answers[6] = choices[6][1];
 units[6] = "29";
 comments[6] = "Id Pregunta: 355. ";


//  Id pregunta: 409 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  Respecto al derecho de rectificaci&oacute;n y cancelaci&oacute;n es falso que:";
 choices[7]= new Array();
 choices[7][0] = "Si los datos rectificados o cancelados hubiesen sido previamente cedidos, el responsable del fichero deber&aacute; notificar la rectificaci&oacute;n o cancelaci&oacute;n efectiva al cesionario";
 choices[7][1] = "Que se podr&aacute;, en las circunstancias que se establezcan reglamentariamente, exigir una m&iacute;nima contraprestaci&oacute;n por los gastos de gesti&oacute;n que dicha rectificaci&oacute;n ocasione justificadamente";
 choices[7][2] = "Es un derecho, recogido en la LOPD, de todos los ciudadanos";
 choices[7][3] = "Que se pueda reclamar ante la Agencia de Protecci&oacute;n de Datos en el caso de que no se facilite el libre ejercicio de este derecho";
 answers[7] = choices[7][1];
 units[7] = "29";
 comments[7] = "Id Pregunta: 409. ";


//  Id pregunta: 434 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Seg&uacute;n la Ley 1/1996 de Propiedad Intelectual, la obra nueva que incorpore una obra existente sin la colaboraci&oacute;n del autor de esta &uacute;ltima se denomina:";
 choices[8]= new Array();
 choices[8][0] = "Obra colectiva";
 choices[8][1] = "Obra compuesta";
 choices[8][2] = "Obra en semi-colaboraci&oacute;n";
 choices[8][3] = "Obra replicada";
 answers[8] = choices[8][1];
 units[8] = "36";
 comments[8] = "Id Pregunta: 434. ";


//  Id pregunta: 438 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  Seg&uacute;n la Ley Org&aacute;nica 15/99 de Protecci&oacute;n de Datos de car&aacute;cter personal, el derecho de acceso s&oacute;lo podr&aacute; ser ejercitado a intervalos no inferiores a:";
 choices[9]= new Array();
 choices[9][0] = "12 meses";
 choices[9][1] = "6 meses";
 choices[9][2] = "6 meses, salvo que el interesado acredite un inter&eacute;s leg&iacute;timo al efecto, en cuyo caso podr&aacute; ejercitarlo antes";
 choices[9][3] = "12 meses, salvo que el interesado acredite un inter&eacute;s leg&iacute;timo al efecto, en cuyo caso podr&aacute; ejercitarlo antes";
 answers[9] = choices[9][3];
 units[9] = "29";
 comments[9] = "Id Pregunta: 438. ";


//  Id pregunta: 452 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  Se&ntilde;ale c&uacute;al no es una funci&oacute;n atribuida al Director de la Agencia de Protecci&oacute;n de Datos:";
 choices[10]= new Array();
 choices[10][0] = "Resuelve los expedientes disciplinarios cuando la infracci&oacute;n es cometida por los responsables de los ficheros p&uacute;blicos";
 choices[10][1] = "Requerir a los responsables de ficheros de titularidad privada a que subsanen deficiencias de los c&oacute;digos tipo";
 choices[10][2] = "Resolver sobre la validez de las notificaciones de inscripci&oacute;n en el Registro General de Protecci&oacute;n de Datos";
 choices[10][3] = "Adoptar medidas cautelares respecto de los tratamientos de datos personales cuando lo estima necesario";
 answers[10] = choices[10][0];
 units[10] = "29";
 comments[10] = "Id Pregunta: 452. ";


//  Id pregunta: 455 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Ser&aacute; necesario el consentimiento del afectado cuando se trate de datos:";
 choices[11]= new Array();
 choices[11][0] = "Recogidos por las Administraciones P&uacute;blicas en el ejercicio de sus funciones";
 choices[11][1] = "Cuando el tratamiento tenga por finalidad proteger un inter&eacute;s vital del interesado del art&iacute;culo 7, apartado 6 de la LOPD";
 choices[11][2] = "Que figuren en fuentes accesibles al p&uacute;blico";
 choices[11][3] = "Ninguna es correcta";
 answers[11] = choices[11][3];
 units[11] = "29";
 comments[11] = "Id Pregunta: 455. ";


//  Id pregunta: 495 AÃ±o de creación de pregunta: 2003-01-01
 questions[12]= "13)  &iquest;Qui&eacute;n es responsable de editar el repertorio de los ficheros inscritos en el registro de protecci&oacute;n de datos?";
 choices[12]= new Array();
 choices[12][0] = "Registro General de Protecci&oacute;n de Datos";
 choices[12][1] = "Inspecci&oacute;n de Datos";
 choices[12][2] = "Secretar&iacute;a General";
 choices[12][3] = "Ninguno de los anteriores";
 answers[12] = choices[12][2];
 units[12] = "29";
 comments[12] = "Id Pregunta: 495. Pregunta similar a la del ex&aacute;men de SS del 2003";


//  Id pregunta: 498 AÃ±o de creación de pregunta: 2003-01-01
 questions[13]= "14)  El Director de la Agencia de Protecci&oacute;n de Datos, respecto al movimiento internacional de datos, puede: ";
 choices[13]= new Array();
 choices[13][0] = "Permitir el movimiento de datos a otros pa&iacute;ses sin garant&iacute;a de protecci&oacute;n de datos";
 choices[13][1] = "Permitir el movimiento de datos a otros pa&iacute;ses sin el mismo nivel garant&iacute;a de protecci&oacute;n de datos a discreci&oacute;n";
 choices[13][2] = "Permitir el movimiento de datos a otros pa&iacute;ses sin el mismo nivel garant&iacute;a de protecci&oacute;n de datos";
 choices[13][3] = "No puede permitir el movimiento internacional de datos a pa&iacute;ses con un nivel inferior de garant&iacute;a de protecci&oacute;n de datos.";
 answers[13] = choices[13][2];
 units[13] = "29";
 comments[13] = "Id Pregunta: 498. NULL";


//  Id pregunta: 595 AÃ±o de creación de pregunta: 2006-01-01
 questions[14]= "15)  Los ficheros de titularidad p&uacute;blica se encuentran regulados en:";
 choices[14]= new Array();
 choices[14][0] = "En el cap&iacute;tulo I del T&iacute;tulo IV de la LOPD";
 choices[14][1] = "En el cap&iacute;tulo II del T&iacute;tulo IV de la LOPD";
 choices[14][2] = "En el cap&iacute;tulo I del T&iacute;tulo VI de la LOPD";
 choices[14][3] = "En el cap&iacute;tulo II del T&iacute;tulo VI de la LOPD";
 answers[14] = choices[14][0];
 units[14] = "29";
 comments[14] = "Id Pregunta: 595. ";


//  Id pregunta: 600 AÃ±o de creación de pregunta: 2006-01-01
 questions[15]= "16)  Seg&uacute;n lo establecido en la LOPD &iquest;Cual de los siguientes son derechos de las personas?";
 choices[15]= new Array();
 choices[15][0] = "Secreto profesional y control previo de los tratamientos";
 choices[15][1] = "Consentimiento expreso para el tratamiento de datos especialmente protegidos y derecho de Informaci&oacute;n";
 choices[15][2] = "Acceso, rectificaci&oacute;n, cancelaci&oacute;n, oposici&oacute;n e impugnaci&oacute;n ";
 choices[15][3] = "Confidencialidad e integridad de la Informaci&oacute;n";
 answers[15] = choices[15][2];
 units[15] = "29";
 comments[15] = "Id Pregunta: 600. ";


//  Id pregunta: 662 AÃ±o de creación de pregunta: 2006-01-01
 questions[16]= "17)  &iquest;Cu&aacute;les de los siguientes ficheros de datos personales se rigen por su legislaci&oacute;n espec&iacute;fica y no por la LOPD?:";
 choices[16]= new Array();
 choices[16][0] = "Los derivados del Registro Civil";
 choices[16][1] = "Los ficheros establecidos para la investigaci&oacute;n del terrorismo y de formas graves de la delincuencia organizada";
 choices[16][2] = "Los derivados de im&aacute;genes y sonidos obtenidos mediante la utilizaci&oacute;n de videoc&aacute;maras";
 choices[16][3] = "Los ficheros de las Grandes Compa&ntilde;&iacute;as de Seguros, cuando lo comuniquen previamente a la Agencia de Protecci&oacute;n de Datos";
 answers[16] = choices[16][0];
 units[16] = "29";
 comments[16] = "Id Pregunta: 662. ";


//  Id pregunta: 693 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  El R.D. 209/2003 regula:";
 choices[17]= new Array();
 choices[17][0] = "Los registros telem&aacute;ticos";
 choices[17][1] = "Las notificaciones telem&aacute;ticas";
 choices[17][2] = "La utilizaci&oacute;n de medios telem&aacute;ticos para la sustituci&oacute;n de la aportaci&oacute;n de certificados por los ciudadanos";
 choices[17][3] = "Todas las anteriores son correctas";
 answers[17] = choices[17][3];
 units[17] = "30";
 comments[17] = "Id Pregunta: 693. ";


//  Id pregunta: 736 AÃ±o de creación de pregunta: 2004-01-01
 questions[18]= "19)  Las funciones de inspecci&oacute;n y control del cumplimiento de la Ley 34/2002, de Servicios de la Sociedad de la Informaci&oacute;n y de Comercio Electr&oacute;nico, m&aacute;s conocida como LSSI, est&aacute;n atribuidas a:";
 choices[18]= new Array();
 choices[18][0] = "Las Fuerzas y Cuerpos de seguridad del Estado";
 choices[18][1] = "La Inspecci&oacute;n Financiera y Tributaria";
 choices[18][2] = "La Asociaci&oacute;n de Usuarios de Internet";
 choices[18][3] = "El Ministerio de Industria, Energ&iacute;a y Turismo";
 answers[18] = choices[18][3];
 units[18] = "30";
 comments[18] = "Id Pregunta: 736. Examen TIC MAP B 2004. Ley 34/2002, art&iacute;culo 35 (extinto Mio. de Ciencia y Tecnolog&iacute;a)";


//  Id pregunta: 788 AÃ±o de creación de pregunta: 2009-01-01
 questions[19]= "20)  Seg&uacute;n la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, los datos de tr&aacute;fico deben retenerse por un periodo de:";
 choices[19]= new Array();
 choices[19][0] = "doce meses computados desde la fecha en que se haya producido la comunicaci&oacute;n. Reglamentariamente, previa consulta a los operadores, se podr&aacute; ampliar o reducir el plazo de conservaci&oacute;n para determinados datos o una categor&iacute;a de datos hasta un m&aacute;ximo de dos a&ntilde;os o un m&iacute;nimo de seis meses.";
 choices[19][1] = "doce meses computados desde la fecha en que se haya producido la comunicaci&oacute;n. Reglamentariamente, previa consulta a los operadores, se podr&aacute; ampliar o reducir el plazo de conservaci&oacute;n para determinados datos o una categor&iacute;a de datos hasta un m&aacute;ximo de dieciocho meses o un m&iacute;nimo de seis meses.";
 choices[19][2] = "La Ley lo fijar&aacute; reglamentariamente";
 choices[19][3] = "12 meses m&iacute;nimo para los proveedores de redes (carriers) y 24 meses m&iacute;nimo para los proveedores de acceso a internet y de alojamiento";
 answers[19] = choices[19][0];
 units[19] = "30";
 comments[19] = "Id Pregunta: 788. articulo 5";


//  Id pregunta: 789 AÃ±o de creación de pregunta: 2004-01-01
 questions[20]= "21)  Est&aacute;n excluidos del &aacute;mbito de la Ley de Servicios de la Sociedad de la Informaci&oacute;n y Comercio Electr&oacute;nico";
 choices[20]= new Array();
 choices[20][0] = "Notarios y registradores de la propiedad y mercantiles en el ejercicio de sus funciones p&uacute;blicas";
 choices[20][1] = "Servicios de venta de arte del patrimonio";
 choices[20][2] = "Servicios bancarios";
 choices[20][3] = "Servicios de la Comisi&oacute;n Nacional del Mercado de Valores";
 answers[20] = choices[20][0];
 units[20] = "30";
 comments[20] = "Id Pregunta: 789. SS-A 2004. Ley 34/2002, art&iacute;culo 5";


//  Id pregunta: 1498 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  La Ley de Servicios de la Sociedad de la Informacion y Comercio Electr&oacute;nico se conoce como:";
 choices[21]= new Array();
 choices[21][0] = "30/1992";
 choices[21][1] = "34/2002";
 choices[21][2] = "30/2002";
 choices[21][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[21] = choices[21][1];
 units[21] = "30";
 comments[21] = "Id Pregunta: 1498. NULL";


//  Id pregunta: 1509 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Respecto a la LSSICE:";
 choices[22]= new Array();
 choices[22][0] = "Son prestadores de servicios de la sociedad de la informaci&oacute;n aquellas empresas, organismos o instituciones que presten o promocionen un bien o servicio a t&iacute;tulo oneroso";
 choices[22][1] = "La ley prohibe enviar comunicaciones publicitarias por correo electr&oacute;nico que previamente no hubieran sido solicitadas o autorizadas expresamente por el destinatario";
 choices[22][2] = "El texto legal da plena validez y eficacia a los contratos celebrados por v&iacute;a electr&oacute;nica, a&uacute;n en el caso de que ninguna de las partes tenga la condici&oacute;n de prestador o destinatario de servicios de la sociedad de la informaci&oacute;n";
 choices[22][3] = "Todas las afirmaciones anteriores son correctas";
 answers[22] = choices[22][3];
 units[22] = "30";
 comments[22] = "Id Pregunta: 1509. NULL";


//  Id pregunta: 1621 AÃ±o de creación de pregunta: 2004-01-01
 questions[23]= "24)  Seg&uacute;n la LSSI, el env&iacute;o de comunicaciones comerciales o publicitarias sin la autorizaci&oacute;n previa del destinatario constituye una infracci&oacute;n ...";
 choices[23]= new Array();
 choices[23][0] = "Leve";
 choices[23][1] = "Grave";
 choices[23][2] = "Muy grave";
 choices[23][3] = "No constituye infracci&oacute;n";
 answers[23] = choices[23][0];
 units[23] = "30";
 comments[23] = "Id Pregunta: 1621. Ley 34/2002, art&iacute;culo 38";


//  Id pregunta: 1873 AÃ±o de creación de pregunta: 2006-01-01
 questions[24]= "25)  Indicar la afirmaci&oacute;n falsa en relaci&oacute;n a las notificaciones telem&aacute;ticas cuya regulaci&oacute;n se introduce en el RD 209/2003.";
 choices[24]= new Array();
 choices[24][0] = "La notificaci&oacute;n se practicar&aacute; s&oacute;lo para los procedimientos expresamente se&ntilde;alados por el interesado";
 choices[24][1] = "El interesado deber&aacute; contar con un certificado digital X.509v3 emitido a su nombre o de la empresa que represente";
 choices[24][2] = "Cuando existiendo constancia de la recepci&oacute;n de la notificaci&oacute;n en la direcci&oacute;n electr&oacute;nica, transcurrieran diez d&iacute;as naturales sin que acceda a su contenido, se entender&aacute; que la notificaci&oacute;n ha sido rechazada.";
 choices[24][3] = "En cualquier caso, la direcci&oacute;n electr&oacute;nica  &uacute;nica tendr&aacute; car&aacute;cter indefinido.";
 answers[24] = choices[24][3];
 units[24] = "30";
 comments[24] = "Id Pregunta: 1873. ";


//  Id pregunta: 3845 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Tengo una p&aacute;gina web personal, pero para financiar gastos tengo alojados &quot;banners&quot;.&iquest;En qu&eacute; me afecta la LSSI?: ";
 choices[25]= new Array();
 choices[25][0] = "No me afecta para nada";
 choices[25][1] = "La LSSI es aplicable";
 choices[25][2] = "S&oacute;lo para la publicidad";
 choices[25][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[25] = choices[25][1];
 units[25] = "112,30";
 comments[25] = "Id Pregunta: 3845. ";


//  Id pregunta: 4248 AÃ±o de creación de pregunta: 2007-01-01
 questions[26]= "27)  El desarrollo de la administraci&oacute;n electr&oacute;nica en Espa&ntilde;a NO se dirige hacia:";
 choices[26]= new Array();
 choices[26][0] = "Que los ciudadanos puedan elegir el canal de acceso a las AAPP (tel&eacute;fono, Internet, SMSs, TDT...).";
 choices[26][1] = "Que los ciudadanos puedan acceder a los servicios de las AAPP 24 horas al d&iacute;a, 7 d&iacute;as a la semana.";
 choices[26][2] = "Que los tr&aacute;mites por medios electr&oacute;nicos no obtengan la misma validez que los realizados por medios presenciales.";
 choices[26][3] = "Que los ciudadanos no tengan que presentar documentaci&oacute;n que obre en poder de las AAPP.";
 answers[26] = choices[26][2];
 units[26] = "30";
 comments[26] = "Id Pregunta: 4248. NULL";


//  Id pregunta: 4507 AÃ±o de creación de pregunta: 2007-01-01
 questions[27]= "28)  &iquest;Cuanto tiempo duraran los derechos de explotaci&oacute;n de una obra?";
 choices[27]= new Array();
 choices[27][0] = "Hasta la muerte de su autor";
 choices[27][1] = "Setenta anos despu&eacute;s de la fecha de divulgaci&oacute;n";
 choices[27][2] = "Toda la vida de su autor y setenta anos despu&eacute;s de su muerte";
 choices[27][3] = "Los derechos de explotaci&oacute;n de una obra nunca se extinguen";
 answers[27] = choices[27][2];
 units[27] = "36";
 comments[27] = "Id Pregunta: 4507. ";


//  Id pregunta: 4520 AÃ±o de creación de pregunta: 2007-01-01
 questions[28]= "29)  La firma digital garantiza:";
 choices[28]= new Array();
 choices[28][0] = "La autenticidad, Ia integridad y el no repudio en destino.";
 choices[28][1] = "La autenticidad, Ia integridad y el no repudio en origen.";
 choices[28][2] = "La autenticidad, Ia integridad y la confidencialidad.";
 choices[28][3] = "La confidencialidad.";
 answers[28] = choices[28][1];
 units[28] = "30";
 comments[28] = "Id Pregunta: 4520. NULL";


//  Id pregunta: 4558 AÃ±o de creación de pregunta: 2007-01-01
 questions[29]= "30)  Seg&uacute;n la LOPD de datos de car&aacute;cter personal, indicar cual de las siguientes infracciones es calificada como grave";
 choices[29]= new Array();
 choices[29][0] = "no atender los requerimientos o apercibimientos de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos o no proporcionar a aqu&eacute;lla cuantos documentos e informaciones sean solicitados por la misma.";
 choices[29][1] = "el impedimento del ejercicio de derechos de acceso y oposici&oacute;n y la negativa a facilitar informaci&oacute;n solicitada.";
 choices[29][2] = "no atender de forma sistem&aacute;tica el deber legal de notificaci&oacute;n de la inclusi&oacute;n de datos de car&aacute;cter personal en un fichero";
 choices[29][3] = "tratar los datos de car&aacute;cter personal de forma legitima";
 answers[29] = choices[29][0];
 units[29] = "29";
 comments[29] = "Id Pregunta: 4558. ";


//  Id pregunta: 4681 AÃ±o de creación de pregunta: 2007-01-01
 questions[30]= "31)  Seg&uacute;n la ley de propiedad intelectual (RDL 1/96 de 22 de abril) &iquest;qu&eacute; es una obra compuesta?";
 choices[30]= new Array();
 choices[30][0] = "Es el resultado de la colaboraci&oacute;n entre varios autores";
 choices[30][1] = "Una obra en la que, por su complejidad, no es posible establecer un autor";
 choices[30][2] = "Es una obra nueva que incorpora otra existente sin colaboraci&oacute;n del autor de &eacute;sta";
 choices[30][3] = "La citada ley no hace referencia a tal concepto";
 answers[30] = choices[30][2];
 units[30] = "36,37";
 comments[30] = "Id Pregunta: 4681. Examen 2006 JCYL";


//  Id pregunta: 4776 AÃ±o de creación de pregunta: 2007-01-01
 questions[31]= "32)  La Ley Org&aacute;nica 15/1999 que regula la Protecci&oacute;n de Datos de Car&aacute;cter Personal, ser&aacute; de aplicaci&oacute;n a los datos de car&aacute;cter personal registrados en soporte f&iacute;sico, que los haga susceptibles de tratamiento, y a toda modalidad de uso posterior de estos datos por";
 choices[31]= new Array();
 choices[31][0] = "El sector p&uacute;blico exclusivamente";
 choices[31][1] = "El sector privado exclusivamente";
 choices[31][2] = "Los sectores p&uacute;blico y privado";
 choices[31][3] = "El sector privado y, en situaciones muy limitadas, afecta tambi&eacute;n al sector p&uacute;blico";
 answers[31] = choices[31][2];
 units[31] = "29";
 comments[31] = "Id Pregunta: 4776. ";


//  Id pregunta: 4780 AÃ±o de creación de pregunta: 2007-01-01
 questions[32]= "33)  La Ley de Impulso de la Sociedad de la Informaci&oacute;n introduce novedades en materia de";
 choices[32]= new Array();
 choices[32][0] = "Seguridad. Los prestadores de servicios deber&aacute;n informar a sus clientes sobre medidas de seguridad que apliquen en sus servicios";
 choices[32][1] = "Accesibilidad. Se establece que las p&aacute;ginas web de las AAPP alcancen el nivel medio de accesibilidad";
 choices[32][2] = "Ampliaci&oacute;n de los nombres de dominio. Deber&aacute;n poder asignarse nombres de dominio .es que contengan el car&aacute;cter &quot;&ntilde;&quot;";
 choices[32][3] = "Todas las anteriores son ciertas";
 answers[32] = choices[32][3];
 units[32] = "30";
 comments[32] = "Id Pregunta: 4780. Ley 56/2007";


//  Id pregunta: 4821 AÃ±o de creación de pregunta: 2007-01-01
 questions[33]= "34)  &iquest;Cu&aacute;l de las siguientes infracciones NO est&aacute; tipificada como muy grave seg&uacute;n la Ley 34/2002, de 11 de julio, deservicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico?";
 choices[33]= new Array();
 choices[33][0] = "El incumplimiento significativo de la obligaci&oacute;n de retener los datos de tr&aacute;fico generados por las comunicacionestablecidas durante la prestaci&oacute;n de un servicio de la sociedad de la informaci&oacute;n, prevista en el art&iacute;culo 12 dedicha Ley";
 choices[33][1] = "La utilizaci&oacute;n de los datos retenidos, en cumplimiento del art&iacute;culo 12 de dicha Ley, para fines distintos de losse&ntilde;alados en &eacute;l";
 choices[33][2] = "El incumplimiento de la obligaci&oacute;n de suspender la transmisi&oacute;n, el alojamiento de datos, el acceso a la red o laprestaci&oacute;n de cualquier otro servicio equivalente de intermediaci&oacute;n, cuando un &oacute;rgano administrativo competelo ordene, en virtud de lo dispuesto en el art&iacute;culo 11 de dicha Ley";
 choices[33][3] = "El env&iacute;o masivo de comunicaciones comerciales por correo electr&oacute;nico u otro medio de comunicaci&oacute;n electr&oacute;nequivalente o el env&iacute;o, en el plazo de un a&ntilde;o, de m&aacute;s de tres comunicaciones comerciales por los mediosaludidos a un mismo destinatario, cuando en dichos env&iacute;os no se cumplan los requisitos establecidos en elart&iacute;culo 21 de dicha Ley";
 answers[33] = choices[33][3];
 units[33] = "30";
 comments[33] = "Id Pregunta: 4821. Ley 34/2002, art&iacute;culo 38";


//  Id pregunta: 5019 AÃ±o de creación de pregunta: 2003-01-01
 questions[34]= "35)  Seg&uacute;n el RD 209/2003, de 21 de febrero, con respecto a las notificaciones telem&aacute;ticas, cuando exista constancia dela recepci&oacute;n de una notificaci&oacute;n, se considerar&aacute; que &eacute;sta ha sido rechazada cuando no se haya accedido a sucontenido en un plazo de:";
 choices[34]= new Array();
 choices[34][0] = "10 d&iacute;as naturales";
 choices[34][1] = "10 d&iacute;as h&aacute;biles";
 choices[34][2] = "20 d&iacute;as naturales";
 choices[34][3] = "En ning&uacute;n caso se considerar&aacute; rechazada si no se ha accedido a su contenido";
 answers[34] = choices[34][0];
 units[34] = "30";
 comments[34] = "Id Pregunta: 5019. Examen TIC A 2007";


//  Id pregunta: 5083 AÃ±o de creación de pregunta: 2003-01-01
 questions[35]= "36)  En relaci&oacute;n con las notificaciones telem&aacute;ticas &iquest;cu&aacute;l de las siguientes afirmaciones es verdadera?:";
 choices[35]= new Array();
 choices[35][0] = "Se puede solicitar para un procedimiento la notificaci&oacute;n ordinaria y la notificaci&oacute;n telem&aacute;tica";
 choices[35][1] = "Cuando existiendo constancia de la recepci&oacute;n de la notificaci&oacute;n en la direcci&oacute;n electr&oacute;nica, transcurrierandiez d&iacute;as naturales sin que el interesado acceda a su contenido, se entender&aacute; que la notificaci&oacute;n ha sidorechazada";
 choices[35][2] = "Seg&uacute;n el RD 209/2003, de 21 de febrero, la Administraci&oacute;n P&uacute;blica puede obligar, en determinados casos, aque la pr&aacute;ctica de la notificaci&oacute;n a los interesados se realice por medios telem&aacute;ticos";
 choices[35][3] = "Si el interesado lo solicita, se puede realizar la notificaci&oacute;n telem&aacute;tica a su buz&oacute;n de correo personal queutiliza habitualmente";
 answers[35] = choices[35][1];
 units[35] = "30";
 comments[35] = "Id Pregunta: 5083. Examen TIC A 2007";


//  Id pregunta: 5102 AÃ±o de creación de pregunta: 2003-01-01
 questions[36]= "37)  Seg&uacute;n la ley 34/2002, &iquest;cu&aacute;l de las siguientes es una infracci&oacute;n grave?";
 choices[36]= new Array();
 choices[36][0] = "El incumplimiento de la obligaci&oacute;n de suspender la transmisi&oacute;n, el alojamiento de datos, el acceso a la red o la prestaci&oacute;n de cualquier otro servicio equivalente de intermediaci&oacute;n, cuando un &oacute;rgano administrativo competente lo ordene";
 choices[36][1] = "No facilitar la informaci&oacute;n a que se refiere el art&iacute;culo 27.1 (Obligaciones previas al inicio del procedimiento de contrataci&oacute;n), cuando las partes no hayan pactado su exclusi&oacute;n o el destinatario sea un consumidor";
 choices[36][2] = "El incumplimiento de lo previsto en el art. 12 bis.";
 choices[36][3] = "El incumplimiento habitual de la obligaci&oacute;n de confirmar la recepci&oacute;n de una aceptaci&oacute;n, cuando no se haya pactado su exclusi&oacute;n o el contrato se haya celebrado con un consumidor";
 answers[36] = choices[36][3];
 units[36] = "30";
 comments[36] = "Id Pregunta: 5102. Ley 34/2002, art&iacute;culo 38";


//  Id pregunta: 5544 AÃ±o de creación de pregunta: 2003-01-01
 questions[37]= "38)  Se&ntilde;ale la respuesta correcta respecto a la entrada en vigor de la La ley 11/2007 que regula el acceso electr&oacute;nico de los ciudadanos  a los servicios p&uacute;blicos:";
 choices[37]= new Array();
 choices[37][0] = "A partir del d&iacute;a siguiente a su publicaci&oacute;n en el BOE.";
 choices[37][1] = "Los derechos reconocidos en el art 6 de la ley 11/2007, podr&aacute;n ejercerse respecto de los procedimientos y actuaciones adaptados a la misma, desde la entrada en vigor de dicha ley.";
 choices[37][2] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado y para los Organismos Publicos  vinculados o dependientes de &eacute;sta, los derechos reconocidos en el art 6 de dicha ley, podr&aacute;n ejercerse respecto a la totalidad de procedimientos y actuaciones de su competencia, a partir del 31-12-2009.";
 choices[37][3] = "Todas las anteriores son correctas.";
 answers[37] = choices[37][3];
 units[37] = "43";
 comments[37] = "Id Pregunta: 5544. NULL";


//  Id pregunta: 5649 AÃ±o de creación de pregunta: 2003-01-01
 questions[38]= "39)  El RD 1720/2007 trata sobre:";
 choices[38]= new Array();
 choices[38][0] = "Reglamento de desarrollo de la Ley del Estatuto B&aacute;sico del Empleado P&uacute;blico";
 choices[38][1] = "Reglamento sobre medidas de protecci&oacute;n contra radiaciones electromagn&eacute;ticas";
 choices[38][2] = "Reglamento sobre medidas que favorezcan la ergonom&iacute;a y ecolog&iacute;a en los puestos de trabajo";
 choices[38][3] = "Reglamento de desarrollo de la Ley Org&aacute;nica de protecci&oacute;n de datos de carater personal";
 answers[38] = choices[38][3];
 units[38] = "29";
 comments[38] = "Id Pregunta: 5649. ";


//  Id pregunta: 5654 AÃ±o de creación de pregunta: 2003-01-01
 questions[39]= "40)  Seg&uacute;n el RD 1720/2007, a partir de que nivel de seguridad deber&aacute; conservarse una copia de respaldo de los datos y de los procedimientos de recuperaci&oacute;n, en un lugar diferente de aquel en que se encuentran los equipos inform&aacute;ticas que los tratan:";
 choices[39]= new Array();
 choices[39][0] = "nivel b&aacute;sico";
 choices[39][1] = "nivel medio";
 choices[39][2] = "nivel alto";
 choices[39][3] = "En ningun caso";
 answers[39] = choices[39][2];
 units[39] = "29";
 comments[39] = "Id Pregunta: 5654. ";


//  Id pregunta: 5769 AÃ±o de creación de pregunta: 2009-01-01
 questions[40]= "41)  De acuerdo al RD 1720/2007, cuando los ficheros contengan un conjunto de datos de car&aacute;cter personal suficientes que permitan obtener una evaluaci&oacute;n de la personalidad del individuo, deber&aacute;:";
 choices[40]= new Array();
 choices[40][0] = "Adoptarse las medidas de seguridad calificadas de nivel b&aacute;sico";
 choices[40][1] = "Adoptarse las medidas de seguridad calificadas de nivel medio";
 choices[40][2] = "Adoptarse las medidas de seguridad calificadas de nivel alto";
 choices[40][3] = "No adoptarse ninguna medidas de seguridad prevista";
 answers[40] = choices[40][1];
 units[40] = "29";
 comments[40] = "Id Pregunta: 5769. ";


//  Id pregunta: 5771 AÃ±o de creación de pregunta: 2009-01-01
 questions[41]= "42)  &iquest;Cu&aacute;l de los siguientes miembros no forma parte el Consejo Consultivo de la A.E.P.D.?";
 choices[41]= new Array();
 choices[41][0] = "Un Diputado, propuesto por el Congreso de los Diputados";
 choices[41][1] = "Un Senador propuesto por el Senado";
 choices[41][2] = "Un miembro de la Real Academia de la Lengua propuesto por la misma";
 choices[41][3] = "Un miembro de la Real Academia de la Historia propuesto por la misma";
 answers[41] = choices[41][2];
 units[41] = "29";
 comments[41] = "Id Pregunta: 5771. ";


//  Id pregunta: 5774 AÃ±o de creación de pregunta: 2009-01-01
 questions[42]= "43)  Los datos de car&aacute;cter personal recogidos o elaborados por las Administraciones P&uacute;blicas para el desempe&ntilde;o de sus atribuciones";
 choices[42]= new Array();
 choices[42][0] = "Podr&aacute;n comunicarse entre administraciones los datos de car&aacute;cter personal que una Administraci&oacute;n P&uacute;blica obtenga o elabore con destino a otra";
 choices[42][1] = "Las diferentes Administraciones P&uacute;blicas podr&aacute;n cederse entre ellas los datos de car&aacute;cter personal incluso para el ejercicio de competencias diferentes.";
 choices[42][2] = "No podr&aacute;n cederse cuando la comunicaci&oacute;n tenga por objeto el tratamiento de los datos con fines hist&oacute;ricos, estad&iacute;sticos  o cient&iacute;ficos";
 choices[42][3] = "La Ley no trata este particular, sino que lo hace su desarrollo posterior";
 answers[42] = choices[42][0];
 units[42] = "29";
 comments[42] = "Id Pregunta: 5774. MAP 2008 A2";


//  Id pregunta: 5842 AÃ±o de creación de pregunta: 2009-01-01
 questions[43]= "44)  En relaci&oacute;n con la red TESTA, &iquest;cu&aacute;l de las siguientes afirmaciones es FALSA?:";
 choices[43]= new Array();
 choices[43][0] = "Es una red que interconecta las redes administrativas de los estados miembros y de las instituciones y agencias europeas";
 choices[43][1] = "Es un instrumento vertebrador e integrador que ofrece a las administraciones europeas una plataforma de interconexi&oacute;n de telecomunicaciones";
 choices[43][2] = "La pol&iacute;tica de direccionamiento IP de TESTA usa unos rangos de direcciones IP asignados por RIPE (Autoridad de Registro IP para Europa), encaminables por Internet";
 choices[43][3] = "Se enmarca en el grupo de medidas horizontales que responden a los objetivos del programa IDABC";
 answers[43] = choices[43][2];
 units[43] = "30";
 comments[43] = "Id Pregunta: 5842. MAP 2008 A1";


//  Id pregunta: 5879 AÃ±o de creación de pregunta: 2009-01-01
 questions[44]= "45)  Indique quien NO es miembro del Pleno del Consejo Superior de Administraci&oacute;n Electr&oacute;nica:";
 choices[44]= new Array();
 choices[44][0] = "El Presidente del Instituto Nacional de Estad&iacute;stica";
 choices[44][1] = "El Subdirector General del Centro Criptol&oacute;gico Nacional";
 choices[44][2] = "El Interventor General de la Administraci&oacute;n del Estado";
 choices[44][3] = "El Director General de la F&aacute;brica Nacional de Moneda y Timbre-Real Casa de la Moneda";
 answers[44] = choices[44][1];
 units[44] = "30";
 comments[44] = "Id Pregunta: 5879. MAP 2008 A1";


//  Id pregunta: 6195 AÃ±o de creación de pregunta: 2010-01-01
 questions[45]= "46)  La habilitaci&oacute;n para la representaci&oacute;n de terceros prevista en el Real Decreto 1671/2009 permite a las personas o entidades habilitadas";
 choices[45]= new Array();
 choices[45][0] = "La presentaci&oacute;n y recogida de escritos, solicitudes y comunicaciones en cualquier procedimiento";
 choices[45][1] = "La presentaci&oacute;n y recogida de escritos, solicitudes y comunicaciones en los procedimientos expresamente autorizados";
 choices[45][2] = "La presentaci&oacute;n de escritos, solicitudes y comunicaciones en cualquier procedimiento";
 choices[45][3] = "La presentaci&oacute;n de escritos, solicitudes y comunicaciones en los procedimientos expresamente autorizados";
 answers[45] = choices[45][0];
 units[45] = "43";
 comments[45] = "Id Pregunta: 6195. Articulo 14";


//  Id pregunta: 6350 AÃ±o de creación de pregunta: 2010-01-01
 questions[46]= "47)  El proyecto de Reutilizaci&oacute;n de la informaci&oacute;n del Sector P&uacute;blico, promovido por la Secretaria de Estado de Telecomunicaciones y para la sociedad de la informaci&oacute;n se llama:";
 choices[46]= new Array();
 choices[46][0] = "Reutiliza";
 choices[46][1] = "Comparte";
 choices[46][2] = "Rhodas";
 choices[46][3] = "Aporta";
 answers[46] = choices[46][3];
 units[46] = "30";
 comments[46] = "Id Pregunta: 6350. http://datos.gob.es/content/proyecto-aporta";


//  Id pregunta: 6361 AÃ±o de creación de pregunta: 2010-01-01
 questions[47]= "48)  &iquest;Qu&eacute; Real Decreto define el Esquema Nacional de Seguridad?";
 choices[47]= new Array();
 choices[47][0] = "RD 4/2010";
 choices[47][1] = "RD 40/2010";
 choices[47][2] = "RD 4/2009";
 choices[47][3] = "RD 3/2010";
 answers[47] = choices[47][3];
 units[47] = "43";
 comments[47] = "Id Pregunta: 6361. NULL";


//  Id pregunta: 6366 AÃ±o de creación de pregunta: 2010-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l de los siguientes no es un requisito m&iacute;nimo de seguridad de los definidos en el Esquema Nacional de Seguridad?";
 choices[48]= new Array();
 choices[48][0] = "Gesti&oacute;n de personal.";
 choices[48][1] = "Integridad y actualizaci&oacute;n del sistema.";
 choices[48][2] = "Prevenci&oacute;n ante la continuidad de la actividad.";
 choices[48][3] = "Incidentes de seguridad.";
 answers[48] = choices[48][2];
 units[48] = "43";
 comments[48] = "Id Pregunta: 6366. Art&iacute;culo 11 ENS";


//  Id pregunta: 6369 AÃ±o de creación de pregunta: 2010-01-01
 questions[49]= "50)  &iquest;A qui&eacute;n corresponde, de acuerdo al Esquema Nacional de Seguridad, elaborar las Gu&iacute;as de Seguridad?";
 choices[49]= new Array();
 choices[49][0] = "A la Secretaria de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n (SETSI)";
 choices[49][1] = "Al Instituto Nacional de Tecnolog&iacute;as de la Comunicaci&oacute;n (INTECO)";
 choices[49][2] = "Al Instituto Nacional de Administraci&oacute;n P&uacute;blica (INAP)";
 choices[49][3] = "Al Centro Criptol&oacute;gico Nacional (CCN)";
 answers[49] = choices[49][3];
 units[49] = "43";
 comments[49] = "Id Pregunta: 6369. Art&iacute;culo 29 ENS. Serie de gu&iacute;as CCN-STIC 800.";


//  Id pregunta: 6375 AÃ±o de creación de pregunta: 2010-01-01
 questions[50]= "51)  Seg&uacute;n el Esquema Nacional de Interoperabilidad, un esquema abierto es aquel que cumple las siguientes condiciones:";
 choices[50]= new Array();
 choices[50][0] = "Que sea p&uacute;blico y su utilizaci&oacute;n sea disponible de manera gratuita o a un coste que no suponga una dificultad de acceso, y que su uso y aplicaci&oacute;n no est&eacute; condicionado al pago de un derecho de propiedad intelectual o industrial.";
 choices[50][1] = "Que sea p&uacute;blico y su utilizaci&oacute;n sea disponible de manera gratuita, y que su uso y aplicaci&oacute;n no est&eacute; condicionado al pago de un derecho de propiedad intelectual o industrial.";
 choices[50][2] = "Que sea p&uacute;blico y su utilizaci&oacute;n sea disponible de manera gratuita, y que su uso y aplicaci&oacute;n no est&eacute; condicionado al pago de un derecho de propiedad intelectual o industrial, o que este pago no suponga una dificultad de acceso.";
 choices[50][3] = "Que sea p&uacute;blico y su utilizaci&oacute;n sea disponible de manera gratuita o a un coste que no suponga una dificultad de acceso, y que su uso y aplicaci&oacute;n no est&eacute; condicionado al pago de un derecho de propiedad intelectual o industrial o que este pago no suponga una dificultad de acceso.";
 answers[50] = choices[50][0];
 units[50] = "43";
 comments[50] = "Id Pregunta: 6375. Anexo ENI";


//  Id pregunta: 6376 AÃ±o de creación de pregunta: 2010-01-01
 questions[51]= "52)  &iquest;Cu&aacute;l de las siguientes sentencias corresponde con la definici&oacute;n de Interoperabilidad Sem&aacute;ntica dada por el Esquema Nacional de Interoperabilidad?";
 choices[51]= new Array();
 choices[51][0] = "Es aquella dimensi&oacute;n de la interoperabilidad relativa a la capacidad de las entidades y de los procesos a trav&eacute;s de los cuales llevan a cabo sus actividades para colaborar con el objeto de alcanzar logros mutuamente acordados relativos a los servicios que prestan.";
 choices[51][1] = "Es aquella dimensi&oacute;n de la interoperabilidad relativa a que la informaci&oacute;n intercambiada pueda ser interpretable de forma autom&aacute;tica y reutilizable por aplicaciones que no intervinieron en su creaci&oacute;n.";
 choices[51][2] = "Es aquella dimensi&oacute;n de la interoperabilidad relativa a la relaci&oacute;n entre sistemas y servicios de tecnolog&iacute;as de la informaci&oacute;n, incluyendo aspectos tales como las interfaces, la interconexi&oacute;n, la integraci&oacute;n de datos y servicios, la presentaci&oacute;n de la informaci&oacute;n, la accesibilidad y la seguridad, u otros de naturaleza an&aacute;loga.";
 choices[51][3] = "Es aquella dimensi&oacute;n de la interoperabilidad relativa a la interacci&oacute;n entre elementos que corresponden a diversas oleadas tecnol&oacute;gicas; se manifiesta especialmente en la conservaci&oacute;n de la informaci&oacute;n en soporte electr&oacute;nico.";
 answers[51] = choices[51][1];
 units[51] = "43";
 comments[51] = "Id Pregunta: 6376. Anexo ENI";


//  Id pregunta: 6381 AÃ±o de creación de pregunta: 2010-01-01
 questions[52]= "53)  De acuerdo a lo establecido en el Esquema Nacional de Interoperabilidad, las administraciones utilizar&aacute;n para las aplicaciones que declaren como de fuentes abiertas aquellas licencias que aseguren que los programas, datos o informaci&oacute;n que se comparten:";
 choices[52]= new Array();
 choices[52][0] = "Se ejecuten exclusivamente para el prop&oacute;sito definido.";
 choices[52][1] = "S&oacute;lo permitan conocer su c&oacute;digo fuente a las personas autorizadas.";
 choices[52][2] = "No pueden modificarse sin permiso previo del autor.";
 choices[52][3] = "Todas las anteriores son falsas.";
 answers[52] = choices[52][3];
 units[52] = "43";
 comments[52] = "Id Pregunta: 6381. Art&iacute;culo 16 ENI";


//  Id pregunta: 6388 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)  En relaci&oacute;n a las sedes electr&oacute;nicas derivadas, o subsedes, se&ntilde;ale la respuesta incorrecta:";
 choices[53]= new Array();
 choices[53][0] = "Las sedes electr&oacute;nicas derivadas, o subsedes, deber&aacute;n resultar accesibles desde la direcci&oacute;n electr&oacute;nica de la sede principal.";
 choices[53][1] = "Las sedes electr&oacute;nicas derivadas, o subsedes podran ser accesibles mediante acceso electr&oacute;nico directo.";
 choices[53][2] = "Su &aacute;mbito de aplicaci&oacute;n comprender&aacute; &oacute;rgano u &oacute;rganos con rango, al menos, de direcci&oacute;n general.";
 choices[53][3] = "Las sedes electr&oacute;nicas derivadas deber&aacute;n cumplir los mismos requisitos que las sedes electr&oacute;nicas principales, salvo en lo relativo a la publicaci&oacute;n de la orden o resoluci&oacute;n por la que se crea, que se realizar&aacute; a trav&eacute;s de la sede de la que dependan.";
 answers[53] = choices[53][2];
 units[53] = "43";
 comments[53] = "Id Pregunta: 6388. Art&iacute;culo 4 RD 1671/2009";


//  Id pregunta: 6398 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  La ley 59/2003 de firma electr&oacute;nica, regula:";
 choices[54]= new Array();
 choices[54][0] = "La firma electr&oacute;nica";
 choices[54][1] = "La prestaci&oacute;n de servicios de certificaci&oacute;n";
 choices[54][2] = "La eficacia de la firma electr&oacute;nica";
 choices[54][3] = "Todas las anteriores son correctas.";
 answers[54] = choices[54][3];
 units[54] = "30";
 comments[54] = "Id Pregunta: 6398. Ley 59/2003, art&iacute;culo 1";


//  Id pregunta: 6460 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  Respecto a los contratos celebrados por v&iacute;a electr&oacute;nica &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[55]= new Array();
 choices[55][0] = "Para que sea v&aacute;lida la celebraci&oacute;n de contratos por v&iacute;a electr&oacute;nica ser&aacute; necesario el previo acuerdo de las partes sobre la utilizaci&oacute;n de medios electr&oacute;nicos";
 choices[55][1] = "Las partes podr&aacute;n pactar que un tercero archive las declaraciones de voluntad que integran los contratos electr&oacute;nicos por un per&iacute;odo inferior a tres a&ntilde;os";
 choices[55][2] = "Siempre que la Ley exija que el contrato o cualquier informaci&oacute;n relacionada con el mismo conste por escrito esta deber&aacute; enviarse por correo ordinario al contratante";
 choices[55][3] = "El soporte electr&oacute;nico en que conste un contrato celebrado por v&iacute;a electr&oacute;nica ser&aacute; admisible en juicio como prueba documental";
 answers[55] = choices[55][3];
 units[55] = "30";
 comments[55] = "Id Pregunta: 6460. Castilla La Mancha 2009 (Ley 34/2002, art&iacute;culo 24)";


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


//  Id pregunta: 7139 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  La Ley Org&aacute;nica 15/1999 de Protecci&oacute;n de Datos de Car&aacute;cter Personal, marca el periodo de prescripci&oacute;n de una infracci&oacute;n grave en:";
 choices[57]= new Array();
 choices[57][0] = "1 a&ntilde;o";
 choices[57][1] = "2 a&ntilde;os";
 choices[57][2] = "6 meses";
 choices[57][3] = "10 meses";
 answers[57] = choices[57][1];
 units[57] = "29";
 comments[57] = "Id Pregunta: 7139. Examen TIC B 2009";


//  Id pregunta: 7144 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  &iquest;Cu&aacute;l de las siguientes respuestas es objeto de protecci&oacute;n de los derechos de autor seg&uacute;n el Texto Refundido de la Ley de Protecci&oacute;n Individual?";
 choices[58]= new Array();
 choices[58][0] = "Las ideas y principios en los que se basan cualquiera de los elementos de un programa de ordenador";
 choices[58][1] = "Las ideas y principios que sirven de fundamento a los interfaces de programa";
 choices[58][2] = "La documentaci&oacute;n t&eacute;cnica y los manuales de uso de un programa";
 choices[58][3] = "Cualesquiera versi&oacute;n sucesiva del programa, incluidas aquellas creadas con el fin de ocasionar efectos nocivos a un sistema inform&aacute;tico";
 answers[58] = choices[58][2];
 units[58] = "36";
 comments[58] = "Id Pregunta: 7144. Examen TIC B 2009";


//  Id pregunta: 8190 AÃ±o de creación de pregunta: 2011-01-01
 questions[59]= "60)  Se&ntilde;ale cu&aacute;l NO es un campo de actuaci&oacute;n clave de la Agenda Digital para Europa:";
 choices[59]= new Array();
 choices[59][0] = "Mercado &uacute;nico digital din&aacute;mico. ";
 choices[59][1] = "Acceso ultrarr&aacute;pido a Internet. ";
 choices[59][2] = "Nativos digitales. ";
 choices[59][3] = "Inclusi&oacute;n digital. ";
 answers[59] = choices[59][2];
 units[59] = "30";
 comments[59] = "Id Pregunta: 8190. Examen TIC A1 2010";


//  Id pregunta: 8276 AÃ±o de creación de pregunta: 2011-01-01
 questions[60]= "61)  El Defensor del Usuario de la Administraci&oacute;n Electr&oacute;nica es nombrado por:";
 choices[60]= new Array();
 choices[60][0] = "El Consejo de Ministros.";
 choices[60][1] = "El Ministro de la Presidencia.";
 choices[60][2] = "El Ministro de Industria, Energ&iacute;a y Turismo.";
 choices[60][3] = "El Secretario de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n";
 answers[60] = choices[60][0];
 units[60] = "43";
 comments[60] = "Id Pregunta: 8276. Examen TIC A1 2010. Actualizado a MINETUR en lugar de MITYC.";


//  Id pregunta: 8287 AÃ±o de creación de pregunta: 2011-01-01
 questions[61]= "62)  &iquest;Cu&aacute;ndo se puede utilizar el Servicio de Verificaci&oacute;n de Datos de Identidad para consultar datos de car&aacute;cter personal?";
 choices[61]= new Array();
 choices[61][0] = "Cuando se cuente con el consentimiento del interesado y los datos sean necesarios para el tr&aacute;mite. ";
 choices[61][1] = "S&oacute;lo se puede utilizar para consultar datos que no sean de car&aacute;cter personal";
 choices[61][2] = "S&oacute;lo en caso de que sean datos de nivel de protecci&oacute;n alto. ";
 choices[61][3] = "Se contemplaba un per&iacute;odo de transici&oacute;n, pero a partir del 1 de enero de 2011, el Servicio de Verificaci&oacute;n de Datos de Identidad ser&aacute; obligatorio en todo caso";
 answers[61] = choices[61][0];
 units[61] = "44";
 comments[61] = "Id Pregunta: 8287. Examen TIC A2 2010";


//  Id pregunta: 8397 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  Seg&uacute;n el Real Decreto 1720/2007, la conservaci&oacute;n de una copia de respaldo de los datos en un lugar diferente de aquel en que se encuentren los equipos inform&aacute;ticos que los tratan, es una medida de protecci&oacute;n de nivel";
 choices[62]= new Array();
 choices[62][0] = "B&aacute;sico";
 choices[62][1] = "Medio";
 choices[62][2] = "Alto";
 choices[62][3] = "No se contempla esta medida de protecci&oacute;n";
 answers[62] = choices[62][2];
 units[62] = "29";
 comments[62] = "Id Pregunta: 8397. Examen TIC A2 2010";


//  Id pregunta: 8440 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  &iquest;Cu&aacute;l de los siguientes elementos no aparece en el recibo firmado electr&oacute;nicamente emitido autom&aacute;ticamente por el registro electr&oacute;nico, seg&uacute;n el RD 1671/2009?";
 choices[63]= new Array();
 choices[63][0] = "Copia del escrito, comunicaci&oacute;n o solicitud presentada.";
 choices[63][1] = "Direcci&oacute;n de la sede electr&oacute;nica del organismo.";
 choices[63][2] = "En su caso, enumeraci&oacute;n y denominaci&oacute;n de los documentos adjuntos al formulario de presentaci&oacute;n o documento presentado, seguida de la huella electr&oacute;nica de cada uno de ellos.";
 choices[63][3] = "Informaci&oacute;n del plazo m&aacute;ximo establecido normativamente para la resoluci&oacute;n y notificaci&oacute;n del procedimiento, as&iacute; como de los efectos que pueda producir el silencio administrativo, cuando sea autom&aacute;ticamente determinable.";
 answers[63] = choices[63][1];
 units[63] = "43";
 comments[63] = "Id Pregunta: 8440. ";


//  Id pregunta: 8739 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  En el &aacute;mbito de la Ley Org&aacute;nica 15/1999 de Protecci&oacute;n de Datos de Car&aacute;cter Personal, los denominados derechos &quot;ARCO&quot; corresponden a los derechos de:";
 choices[64]= new Array();
 choices[64][0] = "Acceso, Rectificaci&oacute;n, Cancelaci&oacute;n y Oposici&oacute;n";
 choices[64][1] = "Acceso. Rectificaci&oacute;n, Coordinaci&oacute;n y Oposici&oacute;n";
 choices[64][2] = "Activaci&oacute;n. Rectificaci&oacute;n. Cancelaci&oacute;n y Oposici&oacute;n.";
 choices[64][3] = "Acceso. Repudio. Cancelaci&oacute;n y Oposici&oacute;n.";
 answers[64] = choices[64][0];
 units[64] = "29";
 comments[64] = "Id Pregunta: 8739. Examen TIC A2 2010 interna";


//  Id pregunta: 8741 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  En un organismo p&uacute;blico se gestionan datos personales relativos a la comisi&oacute;n de infracciones administrativas, pero, en ning&uacute;n caso, infracciones penales, &iquest;deben cifrar las transmisiones que puedan hacer de esos datos, a trav&eacute;s de redes p&uacute;blicas?";
 choices[65]= new Array();
 choices[65][0] = "NO en todos los casos. Como no se trata de infracciones penales las medidas de seguridad requeridas son las de nivel bajo, siempre que esos datos queden en el &aacute;mbito de la Administraci&oacute;n";
 choices[65][1] = "Si, se trata de datos de infracciones, que requieren por tanto medidas de nivel alto, aunque el cifrado se puede sustituir por cualquier otro mecanismo que garantice que la informaci&oacute;n no sea inteligible ni manipulada por terceros";
 choices[65][2] = "NO se requiere tal cifrado, pues las medidas que requieren ese tipo de datos son las de nivel medio y el mencionado cifrado es una medida de seguridad de nivel alto.";
 choices[65][3] = "Si. El cifrado a trav&eacute;s de redes p&uacute;blicas, a diferencia del realizado a trav&eacute;s de redes inal&aacute;mbricas es una medida de nivel medio, requerida en el caso planteado.";
 answers[65] = choices[65][2];
 units[65] = "29";
 comments[65] = "Id Pregunta: 8741. Examen TIC A2 2010 interna";


//  Id pregunta: 8747 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  En el &aacute;mbito de la Administraci&oacute;n General del Estado, &iquest;es posible la notificaci&oacute;n mediante recepci&oacute;n en direcci&oacute;n de correo electr&oacute;nico que los ciudadanos elijan?";
 choices[66]= new Array();
 choices[66][0] = "No est&aacute; previsto para tal fin el uso de una direcci&oacute;n de correo electr&oacute;nico que elijan los ciudadanos, sino s&oacute;lo el uso de la denominada direcci&oacute;n electr&oacute;nica habilitada";
 choices[66][1] = "SI, siempre que se genere autom&aacute;ticamente y con independencia de la voluntad del destinatario sendos acuses de salida y recibo, que dejen constancia de su emisi&oacute;n y recepci&oacute;n y que so originen, respectivamente, en el momento del envi&oacute; y de acceso al contenido de la notificaci&oacute;n";
 choices[66][2] = "Si, siempre que se genere autom&aacute;ticamente y con independencia de la voluntad del destinatario un acuse de recibo que deje constancia de su recepci&oacute;n y que se origine en el momento del acceso al contenido de la notificaci&oacute;n.";
 choices[66][3] = "SI, siempre que se genere autom&aacute;ticamente y con independencia de la voluntad del destinatario un acuso de recibo que deje constancia de su recepci&oacute;n y que se origine en el momento del acceso al contenido c&iacute;e la notificaci&oacute;n Asimismo, el ciudadano podr&aacute; solicitar un acuse de salida, que deje constancia de su emisi&oacute;n y que se origine en el momento del env&iacute;o de la notificaci&oacute;n";
 answers[66] = choices[66][2];
 units[66] = "43";
 comments[66] = "Id Pregunta: 8747. Examen TIC A2 2010 interna";


//  Id pregunta: 8751 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  El Real Decreto 3/2010, de 8 de enero, regula el Esquema Nacional de Seguridad (ENS) en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica. En el mismo, la seguridad se entender&aacute; como:";
 choices[67]= new Array();
 choices[67][0] = "Un proceso espec&iacute;ficamente tecnol&oacute;gico, contemplando exclusivamente elementos t&eacute;cnicos";
 choices[67][1] = "Un proceso integral te&oacute;rico que comprende &uacute;nicamente tas medidas de prevenci&oacute;n y detecci&oacute;n de amenazas, quedando fuera del &aacute;mbito del ENS las de correcci&oacute;n, a implantar particularmente en cada caso.";
 choices[67][2] = "Un proceso espec&iacute;ficamente tecnol&oacute;gico, que comprende &uacute;nicamente las medidas concretas de detecci&oacute;n y correcci&oacute;n de amenazas, quedando fuera del &aacute;mbito del ENS las de prevenci&oacute;n, como propias de cada caso particular";
 choices[67][3] = "Un proceso integral constituido por elementos t&eacute;cnicos, humanos, materiales y organizativos";
 answers[67] = choices[67][3];
 units[67] = "43";
 comments[67] = "Id Pregunta: 8751. Examen TIC A2 2010 interna";


//  Id pregunta: 8938 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  Una sede judicial electr&oacute;nica puede no disponer de:";
 choices[68]= new Array();
 choices[68][0] = "Identificaci&oacute;n de la empresa contratada para su gesti&oacute;n, en su caso";
 choices[68][1] = "Informaci&oacute;n necesaria para su correcta utilizaci&oacute;n";
 choices[68][2] = "Informaci&oacute;n relacionada con la protecci&oacute;n de datos de car&aacute;cter personal";
 choices[68][3] = "Debe disponer de todas las anteriores";
 answers[68] = choices[68][0];
 units[68] = "43";
 comments[68] = "Id Pregunta: 8938. ";


//  Id pregunta: 8940 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  El responsable de la veracidad e integridad de un contenido incluido en la sede judicial electr&oacute;nica ser&aacute;:";
 choices[69]= new Array();
 choices[69][0] = "El &oacute;rgano titular de la sede";
 choices[69][1] = "El &oacute;rgano u &oacute;rganos administrativos encargados de la gesti&oacute;n";
 choices[69][2] = "Los dos anteriores";
 choices[69][3] = "Ninguno de los anteriores";
 answers[69] = choices[69][3];
 units[69] = "43";
 comments[69] = "Id Pregunta: 8940. ";


//  Id pregunta: 9065 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  De acuerdo a la normativa de protecci&oacute;n de datos de car&aacute;cter personal, la potestad del &oacute;rgano sancionador de inmovilizaci&oacute;n de ficheros  ";
 choices[70]= new Array();
 choices[70][0] = "Se podr&aacute; ejercer s&oacute;lo en supuestos constitutivos de infracci&oacute;n muy grave";
 choices[70][1] = "Se podr&aacute; ejercer en ciertos supuestos constitutivos de infracci&oacute;n grave o muy grave";
 choices[70][2] = "Siempre la puede ejercer el &oacute;rgano sancionador, mediante resoluci&oacute;n motivada";
 choices[70][3] = "La ley 2/2011 de Econom&iacute;a Sostenible elimina la potestad inmovilizadora";
 answers[70] = choices[70][1];
 units[70] = "29";
 comments[70] = "Id Pregunta: 9065. NULL";


//  Id pregunta: 9198 AÃ±o de creación de pregunta: 2013-01-01
 questions[71]= "72)  Cuando un trabajador asalariado crea un programa de ordenador, en el ejercicio de sus funciones:";
 choices[71]= new Array();
 choices[71][0] = "Los derechos de explotaci&oacute;n pertenecen al trabajador salvo pacto en contrario";
 choices[71][1] = "Los derechos de explotaci&oacute;n pertenecen al empresario salvo pacto en contrario";
 choices[71][2] = "Los derechos morales pertenecen al trabajador salvo pacto en contrario";
 choices[71][3] = "Los derechos morales pertenecen al empresario salvo pacto en contrario";
 answers[71] = choices[71][1];
 units[71] = "36";
 comments[71] = "Id Pregunta: 9198. ";


//  Id pregunta: 9199 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  &iquest;Cu&aacute;l no es un derecho de explotaci&oacute;n de un programa de ordenador?";
 choices[72]= new Array();
 choices[72][0] = "La reproducci&oacute;n del programa de ordenador.";
 choices[72][1] = "La transformaci&oacute;n del programa de ordenador.";
 choices[72][2] = "La distribuci&oacute;n p&uacute;blica del programa de ordenador.";
 choices[72][3] = "Todas las anteriores son verdaderas.";
 answers[72] = choices[72][3];
 units[72] = "36";
 comments[72] = "Id Pregunta: 9199. ";


//  Id pregunta: 9581 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  Seg&uacute;n el RD 1671/2009 de 6 de noviembre, las copias electr&oacute;nicas id&eacute;nticas al documento electr&oacute;nico original que no comportan cambio de formato se considerar&aacute;n:";
 choices[73]= new Array();
 choices[73][0] = "Copia aut&eacute;ntica del documento original.";
 choices[73][1] = "Copia compulsada del documento original.";
 choices[73][2] = "Documento original.";
 choices[73][3] = "No tendr&aacute;n validez.";
 answers[73] = choices[73][2];
 units[73] = "43";
 comments[73] = "Id Pregunta: 9581. Examen TIC A1 2011";


//  Id pregunta: 9798 AÃ±o de creación de pregunta: 2014-01-01
 questions[74]= "75)  &iquest;Cu&aacute;les son &aacute;reas de actuaci&oacute;n dentro de la Estrategia 2011-2015 del Plan Avanza 2?";
 choices[74]= new Array();
 choices[74][0] = "Ciudadan&iacute;a Digital, Econom&iacute;a Digital, Educaci&oacute;n y Servicios P&uacute;blicos Digitales, Publicaci&oacute;n Digital. ";
 choices[74][1] = "Infraestructura, Gobernanza, Confianza y Seguridad, Espacio &uacute;nico de informaci&oacute;n.";
 choices[74][2] = "Administraci&oacute;n sin papeles, Infraestructuras, Uso y confianza en Internet, Impulso de la industria TIC espa&ntilde;ola. ";
 choices[74][3] = "Administraci&oacute;n en l&iacute;nea, Comercio electr&oacute;nico, Salud y Educaci&oacute;n en l&iacute;nea, Banda Ancha. ";
 answers[74] = choices[74][2];
 units[74] = "30";
 comments[74] = "Id Pregunta: 9798. Examen TIC-A2 2013-Libre. En la p&aacute;gina web de la estrategia viene algo distinto, dice: Infraestructuras, Confianza y Seguridad, Capacitaci&oacute;n Tecnol&oacute;gica, Contenidos y Servicios Digitales y Desarrollo del Sector TIC. Esto a veces pasa.";


//  Id pregunta: 10006 AÃ±o de creación de pregunta: 2014-01-01
 questions[75]= "76)  En el &aacute;mbito del Real Decreto 772/1999, de 7 de mayo, en la redacci&oacute;n dada por el Real Decreto 209/2003, de 21 de febrero, por el que se regulan los registros y las notificaciones telem&aacute;ticas, as&iacute; como la utilizaci&oacute;n de medios telem&aacute;ticos para la sustituci&oacute;n de la aportaci&oacute;n de certificados por los ciudadanos, NO es una funci&oacute;n propia de los registros telem&aacute;ticos";
 choices[75]= new Array();
 choices[75][0] = "la recepci&oacute;n de solicitudes, escritos y comunicaciones.";
 choices[75][1] = "la remisi&oacute;n de las solicitudes, escritos y comunicaciones recibidas.";
 choices[75][2] = "la expedici&oacute;n de copias selladas o compulsadas de los documentos que, en su caso, se transmitan junto con la solicitud, escrito o comunicaci&oacute;n.";
 choices[75][3] = "la anotaci&oacute;n de los correspondientes asientos de entrada y salida.";
 answers[75] = choices[75][2];
 units[75] = "43";
 comments[75] = "Id Pregunta: 10006. ";


//  Id pregunta: 10151 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  Seg&uacute;n la ley 25/2007, &iquest;cu&aacute;l de las siguientes es una infracci&oacute;n muy grave?";
 choices[76]= new Array();
 choices[76][0] = "La no conservaci&oacute;n reiterada o sistem&aacute;tica de los datos a los que se refiere el art&iacute;culo 3.";
 choices[76][1] = "la no conservaci&oacute;n en ning&uacute;n momento de los datos a los que se refiere el art&iacute;culo 3.";
 choices[76][2] = "La conservaci&oacute;n de los datos por un per&iacute;odo inferior al establecido en el art&iacute;culo 5.";
 choices[76][3] = "El incumplimiento deliberado de las obligaciones de protecci&oacute;n y seguridad de los datos establecidas en el art&iacute;culo 8";
 answers[76] = choices[76][1];
 units[76] = "30";
 comments[76] = "Id Pregunta: 10151. ";


//  Id pregunta: 10160 AÃ±o de creación de pregunta: 2010-01-01
 questions[77]= "78)  Para el pago de precio p&uacute;blico puede hacerse uso de:";
 choices[77]= new Array();
 choices[77][0] = "La Pasarela de Pagos del MINHAP-AEAT";
 choices[77][1] = "El Servicio de Pago Telem&aacute;tico, de Red.es";
 choices[77][2] = "Los dos anteriores";
 choices[77][3] = "Ninguno de los anteriores";
 answers[77] = choices[77][1];
 units[77] = "44";
 comments[77] = "Id Pregunta: 10160. ";


//  Id pregunta: 10341 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  En relaci&oacute;n con la legislaci&oacute;n de propiedad intelectual y el derecho de transformaci&oacute;n, se&ntilde;ale la respuesta correcta";
 choices[78]= new Array();
 choices[78][0] = "Los derechos de propiedad intelectual de la obra resultado de la transformaci&oacute;n corresponder&iacute;an al autor de la obra original";
 choices[78][1] = "Los derechos de propiedad intelectual de la obra resultado de la transformaci&oacute;n corresponder&aacute;n al autor de esta &uacute;ltima";
 choices[78][2] = "Los derechos de explotaci&oacute;n de la obra resultado de la transformaci&oacute;n corresponden a partes iguales entre el autor de la obra original y el de la obra producto de la transformaci&oacute;n";
 choices[78][3] = "Los derechos de explotaci&oacute;n de la obra resultado de la transformaci&oacute;n corresponden tanto al autor de la obra original como al de la obra producto de la transformaci&oacute;n, en la proporci&oacute;n que &eacute;stos determinen";
 answers[78] = choices[78][1];
 units[78] = "36";
 comments[78] = "Id Pregunta: 10341. Consultar Art. 21 del Real Decreto Legislativo 1/1996";


//  Id pregunta: 10494 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  Seg&uacute;n la NTI de requisitos de conexi&oacute;n a la Red SARA. &iquest;Cual de los siguientes no es un tipo de Punto de Presencia?";
 choices[79]= new Array();
 choices[79][0] = "Area de Conexi&oacute;n de la AEAT";
 choices[79][1] = "Red sTESTA";
 choices[79][2] = "Ventanilla Unica empresarial de Melilla";
 choices[79][3] = "Banco de Espa&ntilde;a";
 answers[79] = choices[79][1];
 units[79] = "43";
 comments[79] = "Id Pregunta: 10494. Punto II.1.2 de la NTI de Requisitos de conexi&oacute;n a red sara. Las Ventanillas Unicas son tipos de PdP, pero la Ventanilla Unica de Melilla es un PdP dentro de ese tipo y no un tipo";


//  Id pregunta: 10573 AÃ±o de creación de pregunta: 2015-01-01
 questions[80]= "81)  &iquest;A qu&eacute; corresponden las siglas STORK?";
 choices[80]= new Array();
 choices[80][0] = "Secure Transport Over bRoad toKens";
 choices[80][1] = "Security idenTity acrOss boRders linKed";
 choices[80][2] = "Safe idenTity fOr Roaming Knowledge";
 choices[80][3] = "Safe noTes stOring encRypted Keys";
 answers[80] = choices[80][1];
 units[80] = "44";
 comments[80] = "Id Pregunta: 10573. ";


//  Id pregunta: 10582 AÃ±o de creación de pregunta: 2015-01-01
 questions[81]= "82)  Los certificados de sede electr&oacute;nica incluir&aacute;n como contenido:";
 choices[81]= new Array();
 choices[81][0] = "Lo que disponga el Esquema Nacional de Seguridad.";
 choices[81][1] = "La denominaci&oacute;n de &ldquo;sede electr&oacute;nica&rdquo; y el n&uacute;mero de identificaci&oacute;n fiscal de la autoridad de certificaci&oacute;n.";
 choices[81][2] = "Su contenido no est&aacute; definido en ninguna norma.";
 choices[81][3] = "La denominaci&oacute;n del nombre del dominio y el nombre descriptivo de la sede.";
 answers[81] = choices[81][3];
 units[81] = "43";
 comments[81] = "Id Pregunta: 10582. Art&iacute;culo 18, RD 1671/2009.";


//  Id pregunta: 10586 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  La Ley 26/2007 de medidas de Impulso de la Sociedad de la Informaci&oacute;n:";
 choices[82]= new Array();
 choices[82][0] = "Modifica las leyes 34/2002, 59/2003 y 7/1996.";
 choices[82][1] = "Introduce normativa sobre facturaci&oacute;n electr&oacute;nica.";
 choices[82][2] = "Elimina la intervenci&oacute;n del MINETUR para dirigirse a los prestadores de servicios de intermediaci&oacute;n.";
 choices[82][3] = "Todas las anteriores.";
 answers[82] = choices[82][3];
 units[82] = "30";
 comments[82] = "Id Pregunta: 10586. ";


//  Id pregunta: 10589 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  Son principios del programa europeo ISA:";
 choices[83]= new Array();
 choices[83][0] = "La privacidad, la apertura y la seguridad.";
 choices[83][1] = "La neutralidad tecnol&oacute;gica y la reutilizaci&oacute;n.";
 choices[83][2] = "La protecci&oacute;n de los datos personales y la adaptabilidad.";
 choices[83][3] = "Todas las anteriores.";
 answers[83] = choices[83][3];
 units[83] = "30";
 comments[83] = "Id Pregunta: 10589. ";


//  Id pregunta: 10685 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  Seg&uacute;n la Ley 39/2015, para cual de estas actuaciones no es necesar&iacute;a la firma electr&oacute;nica.";
 choices[84]= new Array();
 choices[84][0] = "Iniciar un procedimiento.";
 choices[84][1] = "Interponer un recurso.";
 choices[84][2] = "Desistir de acciones.";
 choices[84][3] = "Renunciar a derechos.";
 answers[84] = choices[84][0];
 units[84] = "30";
 comments[84] = "Id Pregunta: 10685. ";


//  Id pregunta: 10699 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  &iquest;Cu&aacute;l de los siguientes no es un metadato obligatorio establecido en la NTI de Documento Electr&oacute;nico?";
 choices[85]= new Array();
 choices[85][0] = "Versi&oacute;n NTI.";
 choices[85][1] = "&Oacute;rgano.";
 choices[85][2] = "Estado de elaboraci&oacute;n.";
 choices[85][3] = "Todos los anteriores son metadatos obligatorios.";
 answers[85] = choices[85][3];
 units[85] = "43";
 comments[85] = "Id Pregunta: 10699. ";


//  Id pregunta: 10709 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  La Norma T&eacute;cnica de Interoperabilidad de Modelo de Datos para el Intercambio de asientos entre las entidades registrales se public&oacute; en:";
 choices[86]= new Array();
 choices[86][0] = "2010";
 choices[86][1] = "2011";
 choices[86][2] = "2013";
 choices[86][3] = "2014";
 answers[86] = choices[86][1];
 units[86] = "43";
 comments[86] = "Id Pregunta: 10709. ";


//  Id pregunta: 10716 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  &iquest;Qu&eacute; aspecto no se define en una pol&iacute;tica de firma seg&uacute;n la NTI de firma electr&oacute;nica?";
 choices[87]= new Array();
 choices[87][0] = "Los procesos de creaci&oacute;n de firmas electr&oacute;nicas.";
 choices[87][1] = "Los procesos de modificaci&oacute;n de firmas electr&oacute;nicas.";
 choices[87][2] = "Los procesos de validaci&oacute;n de firmas electr&oacute;nicas.";
 choices[87][3] = "Los procesos de conservaci&oacute;n de firmas electr&oacute;nicas.";
 answers[87] = choices[87][1];
 units[87] = "43";
 comments[87] = "Id Pregunta: 10716. ";


//  Id pregunta: 10725 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  La utilizaci&oacute;n de qu&eacute; est&aacute;ndares no est&aacute; explicitamente prevista en la NTI de Protocolos de Intermediaci&oacute;n";
 choices[88]= new Array();
 choices[88][0] = "WSDL";
 choices[88][1] = "XML";
 choices[88][2] = "TLS";
 choices[88][3] = "RSS";
 answers[88] = choices[88][3];
 units[88] = "43";
 comments[88] = "Id Pregunta: 10725. ";


//  Id pregunta: 10736 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  Seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Reutilizaci&oacute;n de recursos de la informaci&oacute;n, &iquest;qu&eacute; se utilizar&aacute; para facilitar la reutilizaci&oacute;n de vocabularios?";
 choices[89]= new Array();
 choices[89][0] = "El Centro de Interoperabilidad Sem&aacute;ntica de la Administraci&oacute;n";
 choices[89][1] = "El formato SCSP";
 choices[89][2] = "El Intercambio a trav&eacute;s de la Red SARA";
 choices[89][3] = "El Centro de Promoci&oacute;n de la Reutilizaci&oacute;n de la AGE";
 answers[89] = choices[89][0];
 units[89] = "43";
 comments[89] = "Id Pregunta: 10736. ";


//  Id pregunta: 10781 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  En el Real Decreto 3/2010, Esquema Nacional de Seguridad, se define como &quot;la propiedad o caracter&iacute;stica consistente en que las actuaciones de una entidad pueden ser imputadas exclusivamente a dicha entidad&quot; a la:";
 choices[90]= new Array();
 choices[90][0] = "Confidencialidad.";
 choices[90][1] = "Integridad.";
 choices[90][2] = "Autenticidad.";
 choices[90][3] = "Trazabilidad.";
 answers[90] = choices[90][3];
 units[90] = "43";
 comments[90] = "Id Pregunta: 10781. Examen GSI 2014";


//  Id pregunta: 10971 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Respecto al Registro de Funcionarios Habilitados, se&ntilde;ale la respuesta correcta:";
 choices[91]= new Array();
 choices[91][0] = "Podr&aacute;n ser habilitados los funcionarios de carrera en situaci&oacute;n de servicio activo e inscritos en el Registro Electr&oacute;nico de Apoderamientos.";
 choices[91][1] = "El registro permite la descarga, bajo petici&oacute;n, de un fichero que con todas las habilitaciones vigentes para los tr&aacute;mites y actuaciones por medios electr&oacute;nicos de los que el &oacute;rgano peticionario sea competente.";
 choices[91][2] = "Las habilitaciones inscritas en el Registro deber&aacute;n ser efectivas en el plazo m&aacute;ximo de 5 d&iacute;as h&aacute;biles.";
 choices[91][3] = "La habilitaci&oacute;n se otorgar&aacute; por tiempo m&aacute;ximo de 2 a&ntilde;os, siendo necesaria su renovaci&oacute;n por parte del Departamento competente.";
 answers[91] = choices[91][1];
 units[91] = "43";
 comments[91] = "Id Pregunta: 10971. TIC A1 AGE 2014";


//  Id pregunta: 11001 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;En qu&eacute; circunstancias los prestadores de servicios de la sociedad de la informaci&oacute;n no son responsables por la informaci&oacute;n que proporcionen a los destinatarios de sus servicios?";
 choices[92]= new Array();
 choices[92][0] = "Cuando el proveedor de contenidos al que se enlace o cuya localizaci&oacute;n se facilite actu&eacute; bajo la direcci&oacute;n, autoridad o control del prestador que facilite la localizaci&oacute;n de esos contenidos.";
 choices[92][1] = "Siempre que tengan conocimiento de la ilicitud de la informaci&oacute;n o de que lesiona derechos o bienes de un tercero susceptible de indemnizaci&oacute;n y aleguen la imposibilidad de suprimir o inutilizar el enlace.";
 choices[92][2] = "Cuando el proveedor de contenidos al que se enlace o cuya localizaci&oacute;n se facilite desconozca el contenido il&iacute;cito de dicha informaci&oacute;n.";
 choices[92][3] = "Siempre que no tengan conocimiento efectivo de la ilicitud de la informaci&oacute;n o de que lesiona derechos o bienes de un tercero susceptible de indemnizaci&oacute;n o si lo tienen, act&uacute;en de forma diligente para suprimir o inutilizar el enlace.";
 answers[92] = choices[92][3];
 units[92] = "30";
 comments[92] = "Id Pregunta: 11001. TIC A1 AGE 2014";


//  Id pregunta: 11013 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Cu&aacute;l es el portal nacional que organiza y gestiona el Cat&aacute;logo de Informaci&oacute;n P&uacute;blica de la Administraci&oacute;n General del Estado?";
 choices[93]= new Array();
 choices[93][0] = "www.datos.gob.es";
 choices[93][1] = "www.rediris.es";
 choices[93][2] = "www.pae.es";
 choices[93][3] = "administracionelectronica.gob.es";
 answers[93] = choices[93][0];
 units[93] = "30";
 comments[93] = "Id Pregunta: 11013. ";


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


//  Id pregunta: 11102 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  La NTI de Digitalizaci&oacute;n de Documentos indica que el nivel de resoluci&oacute;n m&iacute;nimo ser&aacute; para blanco y negro de:";
 choices[95]= new Array();
 choices[95][0] = "200 p&iacute;xeles por pulgada";
 choices[95][1] = "125 p&iacute;xeles por pulgada";
 choices[95][2] = "256 p&iacute;xeles por pulgada";
 choices[95][3] = "80 p&iacute;xeles por pulgada";
 answers[95] = choices[95][0];
 units[95] = "30";
 comments[95] = "Id Pregunta: 11102. ";


//  Id pregunta: 11584 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Frente a la recepci&oacute;n de una solicitud de revocaci&oacute;n de consentimiento del tratamiento de datos de car&aacute;cter personal, el responsable cesar&aacute; el tratamiento de los datos en un plazo m&aacute;ximo de:";
 choices[96]= new Array();
 choices[96][0] = "30 d&iacute;as h&aacute;biles";
 choices[96][1] = "30 d&iacute;as naturales";
 choices[96][2] = "10 d&iacute;as h&aacute;biles";
 choices[96][3] = "10 d&iacute;as naturales";
 answers[96] = choices[96][2];
 units[96] = "29";
 comments[96] = "Id Pregunta: 11584. ";


//  Id pregunta: 11591 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  La protecci&oacute;n contra Denegaci&oacute;n de servicio se recoge en la Gu&iacute; CCN-STIC:";
 choices[97]= new Array();
 choices[97][0] = "828";
 choices[97][1] = "817";
 choices[97][2] = "820";
 choices[97][3] = "823";
 answers[97] = choices[97][2];
 units[97] = "43";
 comments[97] = "Id Pregunta: 11591. ";


//  Id pregunta: 11593 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Se&ntilde;ale el contenido opcional de un &iacute;ndice de expediente electr&oacute;nico:";
 choices[98]= new Array();
 choices[98][0] = "Huella digital de cada documento electr&oacute;nico";
 choices[98][1] = "Fecha de generaci&oacute;n del &iacute;ndice";
 choices[98][2] = "Fecha de incorporaci&oacute;n al expediente de cada documento electr&oacute;nico";
 choices[98][3] = "Identificador de cada documento electr&oacute;nico";
 answers[98] = choices[98][2];
 units[98] = "43";
 comments[98] = "Id Pregunta: 11593. ";


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


