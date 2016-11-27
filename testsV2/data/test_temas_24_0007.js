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

//  Id pregunta: 95 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  A los efectos de la Ley Org&aacute;nica de Protecci&oacute;n de Datos (LOPD), se entienden por datos de car&aacute;cter personal:";
 choices[0]= new Array();
 choices[0][0] = "Cualquier informaci&oacute;n concerniente a personas f&iacute;sicas o jur&iacute;dicas identificadas";
 choices[0][1] = "Cualquier informaci&oacute;n relativa a la salud, ideolog&iacute;a, religi&oacute;n, creencias, origen racial o vida sexual de las personas";
 choices[0][2] = "Cualquier informaci&oacute;n concerniente a personas f&iacute;sicas identificadas o identificables";
 choices[0][3] = "Cualquier informaci&oacute;n sobre las personas, excluidas las de car&aacute;cter pol&iacute;tico, sindical o religioso";
 answers[0] = choices[0][2];
 units[0] = "29";
 comments[0] = "Id Pregunta: 95. ";


//  Id pregunta: 167 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  El T&iacute;tulo VI de la LOPD trata sobre:";
 choices[1]= new Array();
 choices[1][0] = "Principios de la protecci&oacute;n de datos";
 choices[1][1] = "Derechos de las personas";
 choices[1][2] = "Movimiento internacional de datos";
 choices[1][3] = "Agencia de Protecci&oacute;n de Datos";
 answers[1] = choices[1][3];
 units[1] = "29";
 comments[1] = "Id Pregunta: 167. ";


//  Id pregunta: 319 AÃ±o de creación de pregunta: 2009-01-01
 questions[2]= "3)  La LOPD se aplicar&aacute; sin especialidad indicada a:";
 choices[2]= new Array();
 choices[2][0] = "Los ficheros que mantengan las personas f&iacute;sicas con fines exclusivamente dom&eacute;sticos o personales";
 choices[2][1] = "A todos aquellos datos de car&aacute;cter personal registrados en cualquier soporte que los haga susceptibles de tratamiento y cualquier modalidad de uso posterior de los mismos";
 choices[2][2] = "Los ficheros regulados por la legislaci&oacute;n electoral o sobre estad&iacute;stica p&uacute;blica";
 choices[2][3] = "Los ficheros derivados de los Registros Civiles";
 answers[2] = choices[2][1];
 units[2] = "29";
 comments[2] = "Id Pregunta: 319. ";


//  Id pregunta: 327 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con la normativa vigente en materia de protecci&oacute;n de datos de car&aacute;cter personal:";
 choices[3]= new Array();
 choices[3][0] = "El responsable del fichero adoptar&aacute; las medidas necesarias para que el personal conozca las normas de seguridad que afectan al desarrollo de sus funciones as&iacute; como las consecuencias en que pudiera incurrir en caso de incumplimiento.";
 choices[3][1] = "Cada fichero del organismo con datos de car&aacute;cter personal dispondr&aacute; de un documento espec&iacute;fico de seguridad en el que no se podr&aacute;n describir conjuntamente aspectos de seguridad relativos a m&aacute;s de un fichero";
 choices[3][2] = "La LOPD se aplicar&aacute; de forma completa a los ficheros manuales a partir del 24 de octubre de 2010.";
 choices[3][3] = "La protecci&oacute;n de datos personales es un derecho fundamental que afecta exclusivamente a los datos que afectan a la intimidad del individuo.";
 answers[3] = choices[3][0];
 units[3] = "29";
 comments[3] = "Id Pregunta: 327. Junta Andaluc&iacute;a 2002";


//  Id pregunta: 442 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  Seg&uacute;n la Ley Org&aacute;nica 15/99 de Protecci&oacute;n de Datos de car&aacute;cter personal, son derechos de los interesados:";
 choices[4]= new Array();
 choices[4][0] = "El Derecho de Consulta al Registro General de Protecci&oacute;n de Datos";
 choices[4][1] = "Los derechos de acceso, rectificaci&oacute;n y cancelaci&oacute;n";
 choices[4][2] = "Las respuestas 'a' y 'b' son correctas";
 choices[4][3] = "ninguna de las anteriores respuestas es correcta";
 answers[4] = choices[4][2];
 units[4] = "29";
 comments[4] = "Id Pregunta: 442. ";


//  Id pregunta: 443 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  Seg&uacute;n la Ley Org&aacute;nica 15/99 de Protecci&oacute;n de Datos de car&aacute;cter personal, son fuentes accesibles al p&uacute;blico:";
 choices[5]= new Array();
 choices[5][0] = "El censo promocional";
 choices[5][1] = "Los repertorios telef&oacute;nicos";
 choices[5][2] = "Los medios de comunicaci&oacute;n";
 choices[5][3] = "Todas las anteriores los son";
 answers[5] = choices[5][3];
 units[5] = "29";
 comments[5] = "Id Pregunta: 443. ";


//  Id pregunta: 512 AÃ±o de creación de pregunta: 2003-01-01
 questions[6]= "7)  Respecto a la ley 1/1996 de propiedad intelectual es falso que proteja:";
 choices[6]= new Array();
 choices[6][0] = "Los derechos de explotaci&oacute;n";
 choices[6][1] = "Los programas de ordenador";
 choices[6][2] = "La documentaci&oacute;n";
 choices[6][3] = "Las ideas que subyacen en los programas de ordenador ";
 answers[6] = choices[6][3];
 units[6] = "36";
 comments[6] = "Id Pregunta: 512. ";


//  Id pregunta: 518 AÃ±o de creación de pregunta: 2003-01-01
 questions[7]= "8)  Una de las organizaciones que lucha internacionalmente contra la pirater&iacute;a inform&aacute;tica es";
 choices[7]= new Array();
 choices[7][0] = "BSA";
 choices[7][1] = "RSA";
 choices[7][2] = "ESA";
 choices[7][3] = "EIT";
 answers[7] = choices[7][0];
 units[7] = "36,37";
 comments[7] = "Id Pregunta: 518. ";


//  Id pregunta: 522 AÃ±o de creación de pregunta: 2003-01-01
 questions[8]= "9)  Las medidas de seguridad l&oacute;gica para datos de car&aacute;cter personal caracterizadas como de nivel Medio:";
 choices[8]= new Array();
 choices[8][0] = "Requieren la existencia de registros de los accesos a los ficheros o tablas que contienen la informaci&oacute;n.";
 choices[8][1] = "La responsabilidad de los registros de acceso esta bajo control del Responsable de seguridad y existen mecanismos de control para verificar que el registro esta activo y que no haya saltos temporales.";
 choices[8][2] = "No se utilizan cuentas gen&eacute;ricas para entrar al sistema.";
 choices[8][3] = "Utiliza t&eacute;cnicas de encriptaci&oacute;n en las comunicaciones de datos.";
 answers[8] = choices[8][2];
 units[8] = "29";
 comments[8] = "Id Pregunta: 522. Junta Andaluc&iacute;a";


//  Id pregunta: 544 AÃ±o de creación de pregunta: 2004-01-01
 questions[9]= "10)  &iquest;Existe el concepto de 'copia privada' en la actual legislaci&oacute;n de propiedad intelectual?";
 choices[9]= new Array();
 choices[9][0] = "Si, es un derecho por el cual no es necesaria la autorizaci&oacute;n del creador de una obra ya divulgada para proceder a la reproducci&oacute;n de la misma para uso privado del copista, siempre que no vaya a ser objeto de utilizaci&oacute;n colectiva ni lucrativa";
 choices[9][1] = "Si, pero no como copia leg&iacute;tima";
 choices[9][2] = "Si, es un derecho por el cual, previa autorizaci&oacute;n del creador de una obra ya divulgada, se procede a la reproducci&oacute;n de la misma para uso privado del copista, siempre que no vaya a ser objeto de utilizaci&oacute;n colectiva ni lucrativa";
 choices[9][3] = "No";
 answers[9] = choices[9][0];
 units[9] = "36,37";
 comments[9] = "Id Pregunta: 544. LPI de 1996";


//  Id pregunta: 594 AÃ±o de creación de pregunta: 2006-01-01
 questions[10]= "11)  Entre las excepciones a la cesi&oacute;n de datos sin necesidad de recabar el consentimiento del interesado no se encuentra de acuerdo al articulo 11 de la LOPD: ";
 choices[10]= new Array();
 choices[10][0] = "Las comunicaciones al Defensor del Pueblo";
 choices[10][1] = "Las comunicaciones al Ministerio Fiscal.";
 choices[10][2] = "Las comunicaciones al Consejo de Estado";
 choices[10][3] = "Las comunicaciones al Tribunal de Cuentas, en las materias que tenga atribuidas";
 answers[10] = choices[10][2];
 units[10] = "29";
 comments[10] = "Id Pregunta: 594. ";


//  Id pregunta: 596 AÃ±o de creación de pregunta: 2006-01-01
 questions[11]= "12)  Seg&uacute;n el art&iacute;culo 44.3 proceder a la creaci&oacute;n de ficheros de titularidad p&uacute;blica o iniciar la recogida de datos de car&aacute;cter personal para los mismos, sin autorizaci&oacute;n de disposici&oacute;n general publicada en el BOE o diario oficial correspondiente constituye:";
 choices[11]= new Array();
 choices[11][0] = "no se necesita esperar a dicha publicaci&oacute;n en el BOE";
 choices[11][1] = "una infracci&oacute;n muy grave.";
 choices[11][2] = "una infracci&oacute;n grave.";
 choices[11][3] = "una infracci&oacute;n leve.";
 answers[11] = choices[11][2];
 units[11] = "29";
 comments[11] = "Id Pregunta: 596. ";


//  Id pregunta: 608 AÃ±o de creación de pregunta: 2006-01-01
 questions[12]= "13)  &iquest;De qu&eacute; Ministerio depende jer&aacute;rquicamente la Agencia de Protecci&oacute;n de Datos?";
 choices[12]= new Array();
 choices[12][0] = "Justicia";
 choices[12][1] = "Interior";
 choices[12][2] = "Asuntos Exteriores";
 choices[12][3] = "Ninguna de las anteriores es cierta";
 answers[12] = choices[12][3];
 units[12] = "29";
 comments[12] = "Id Pregunta: 608. ";


//  Id pregunta: 630 AÃ±o de creación de pregunta: 2006-01-01
 questions[13]= "14)  Cu&aacute;l de los siguientes derechos de explotaci&oacute;n no precisan la realizaci&oacute;n o autorizaci&oacute;n por parte del titular de un programa de ordenador, seg&uacute;n la ley espa&ntilde;ola de propiedad intelectual:";
 choices[13]= new Array();
 choices[13][0] = "Reproducci&oacute;n total o parcial.";
 choices[13][1] = "La realizaci&oacute;n de una copia de seguridad.";
 choices[13][2] = "Traducci&oacute;n, adaptaci&oacute;n o arreglo.";
 choices[13][3] = "Cualquier forma de distribuci&oacute;n p&uacute;blica.";
 answers[13] = choices[13][1];
 units[13] = "36";
 comments[13] = "Id Pregunta: 630. ";


//  Id pregunta: 671 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  Seg&uacute;n el R.D. 209/2003, una de las siguientes afirmaciones es err&oacute;nea:";
 choices[14]= new Array();
 choices[14][0] = "la utilizaci&oacute;n de una direcci&oacute;n electr&oacute;nica &uacute;nica debe ser expresamente notificada por el ciudadano interesado";
 choices[14][1] = "la direcci&oacute;n electr&oacute;nica &uacute;nica debe cumplir los requisitos de poseer identificadores de usuario y claves de acceso, y contener mecanismos de autenticaci&oacute;n y cifrado";
 choices[14][2] = "el CSI pasa a llamarse Consejo para el Impulso de la Administraci&oacute;n Electr&oacute;nica, CIAE";
 choices[14][3] = "los certificados anteriores emitidos por la AEAT y la TGSS deben ser sustituidos a partir de la entrada en vigor del R.D.";
 answers[14] = choices[14][2];
 units[14] = "30";
 comments[14] = "Id Pregunta: 671. ";


//  Id pregunta: 684 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  El informe WITSA se refiere a:";
 choices[15]= new Array();
 choices[15][0] = "Gobierno y Administraci&oacute;n electr&oacute;nica";
 choices[15][1] = "Evoluci&oacute;n de la I+D en cada pa&iacute;s";
 choices[15][2] = "Implantaci&oacute;n de las tecnolog&iacute;as de banda ancha inal&aacute;mbricas en cada pa&iacute;s";
 choices[15][3] = "No existe tal informe";
 answers[15] = choices[15][0];
 units[15] = "44";
 comments[15] = "Id Pregunta: 684. ";


//  Id pregunta: 737 AÃ±o de creación de pregunta: 2004-01-01
 questions[16]= "17)  Si le notifican una multa de tr&aacute;fico mediante el Servicio de Notificaciones Telem&aacute;ticas Seguras (Direcci&oacute;n Electr&oacute;nica Unica):";
 choices[16]= new Array();
 choices[16][0] = "Puede rechazar recibir la notificaci&oacute;n";
 choices[16][1] = "No puede rechazar recibir la notificaci&oacute;n";
 choices[16][2] = "Le sirve de preaviso, pero debe esperar la notificaci&oacute;n oficial por correo ordinario, o la publicaci&oacute;n de la sanci&oacute;n en el Bolet&iacute;n Oficial de la Provincia";
 choices[16][3] = "Puede reenviarla a otro buz&oacute;n electr&oacute;nico de su elecci&oacute;n";
 answers[16] = choices[16][0];
 units[16] = "30";
 comments[16] = "Id Pregunta: 737. Examen TIC MAP B 2004";


//  Id pregunta: 1530 AÃ±o de creación de pregunta: 2003-01-01
 questions[17]= "18)  &iquest;Cu&aacute;l de las siguientes afirmaciones  pertenece al RD 209/2003 ?";
 choices[17]= new Array();
 choices[17][0] = "Se podr&aacute; utilizar una direcci&oacute;n de correo ordinario para recibir avisos de env&iacute;os la direcci&oacute;n de correo &uacute;nica, no consider&aacute;ndose la notificaci&oacute;n enviada si no se ha recibido ese aviso";
 choices[17][1] = "Si el usuario lo escoge la administraci&oacute;n estar&aacute; obligada a avisar al ciudadano de que tiene una notificaci&oacute;n mediante una mensaje SMS";
 choices[17][2] = "Si el usuario al cabo de 10 d&iacute;as desde que ha recibido la notificaci&oacute;n, no la abre, se pasa a considerar otro tipo de notificaci&oacute;n, con otro plazo para la misma";
 choices[17][3] = "Si el cliente al cabo de 10 desde que ha recibido la notificaci&oacute;n, no la abre, se considera que la notificaci&oacute;n ha sido rechazada";
 answers[17] = choices[17][3];
 units[17] = "30";
 comments[17] = "Id Pregunta: 1530. ";


//  Id pregunta: 1869 AÃ±o de creación de pregunta: 2006-01-01
 questions[18]= "19)  La directiva europea del Parlamento y del Consejo relativa a la firma electr&oacute;nica es:";
 choices[18]= new Array();
 choices[18][0] = "Directiva 2000/31/CE";
 choices[18][1] = "Directiva 1999/93/CE";
 choices[18][2] = "Directiva 98/68/CE";
 choices[18][3] = "Directiva 1996/46/CE";
 answers[18] = choices[18][1];
 units[18] = "30";
 comments[18] = "Id Pregunta: 1869. NULL";


//  Id pregunta: 1878 AÃ±o de creación de pregunta: 2006-01-01
 questions[19]= "20)  El RD 209/2003 Regulaci&oacute;n de registros y notificaciones telem&aacute;ticas se aplica a:";
 choices[19]= new Array();
 choices[19][0] = "Todas las Administraciones P&uacute;blicas.";
 choices[19][1] = "Las Administraciones P&uacute;blicas y Entidades Locales.";
 choices[19][2] = "La Administraci&oacute;n General del Estado.";
 choices[19][3] = " A ninguna a no ser que se realice su desarrollo.";
 answers[19] = choices[19][2];
 units[19] = "30";
 comments[19] = "Id Pregunta: 1878. ";


//  Id pregunta: 1884 AÃ±o de creación de pregunta: 2006-01-01
 questions[20]= "21)  De acuerdo a la ley 34/2002, se&ntilde;ale la verdadera:";
 choices[20]= new Array();
 choices[20][0] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico u otro medio de comunicaci&oacute;n electr&oacute;nica equivalente previamente no solicitadas o expresamente autorizadas por los destinatarios de las mismas";
 choices[20][1] = "Es posible el env&iacute;o de comunicaciones publicitarias si existe relaci&oacute;n contractual previa ";
 choices[20][2] = "Para que sea v&aacute;lida la celebraci&oacute;n de contratos por v&iacute;a electr&oacute;nica no ser&aacute; necesario el previo acuerdo de las partes sobre la utilizaci&oacute;n de medios electr&oacute;nicos.";
 choices[20][3] = "Todas son verdaderas";
 answers[20] = choices[20][3];
 units[20] = "30";
 comments[20] = "Id Pregunta: 1884. NULL";


//  Id pregunta: 1941 AÃ±o de creación de pregunta: 2006-01-01
 questions[21]= "22)  La Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica, en relaci&oacute;n con los certificados electr&oacute;nicos de personas jur&iacute;dicas, establece que:";
 choices[21]= new Array();
 choices[21][0] = "La custodia de los datos de creaci&oacute;n de firma asociados a cada certificado electr&oacute;nico de persona jur&iacute;dica ser&aacute; responsabilidad de los administradores";
 choices[21][1] = "S&oacute;lo podr&aacute;n solicitar certificados electr&oacute;nicos de personas jur&iacute;dicas sus administradores";
 choices[21][2] = "La custodia de los datos de creaci&oacute;n de firma asociados a cada certificado electr&oacute;nico de persona jur&iacute;dica ser&aacute; responsabilidad de la persona f&iacute;sica solicitante";
 choices[21][3] = "Si la firma se utiliza transgrediendo los l&iacute;mites mencionados en la Ley, la persona jur&iacute;dica quedar&aacute; vinculada frente a terceros en todo caso";
 answers[21] = choices[21][2];
 units[21] = "30";
 comments[21] = "Id Pregunta: 1941. Ley 59/2003, art&iacute;culo 7";


//  Id pregunta: 3805 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Se entiende por firma electr&oacute;nica avanzada:";
 choices[22]= new Array();
 choices[22][0] = "Firma electr&oacute;nica que permite la identificaci&oacute;n del signatario y ha sido creada por medios que &eacute;ste mantiene bajo su exclusivo control, de manera que est&eacute; vinculada &uacute;nicamente al mismo y a los datos a los que se refiere";
 choices[22][1] = "Conjunto de datos, en forma electr&oacute;nica, anejos a otros datos electr&oacute;nicos o asociados funcionalmente a ellos, como medio para identificar formalmente al autor del documento que la recoge";
 choices[22][2] = "Certificaci&oacute;n electr&oacute;nica que vincula unos datos de verificaci&oacute;n de firma a un signatario y confirma su identidad";
 choices[22][3] = "Firma electr&oacute;nica que permite la identificaci&oacute;n del signatario y ha sido creada por medios que &eacute;ste puede utilizar, con un alto nivel de confianza, bajo su exclusivo control, de manera que est&eacute; vinculada &uacute;nicamente al mismo y a los datos a los que se refiere";
 answers[22] = choices[22][3];
 units[22] = "30";
 comments[22] = "Id Pregunta: 3805. Ley 25/2015. Disposici&oacute;n Final Cuarta. Modificaci&oacute;n de la Ley 59/2003";


//  Id pregunta: 4247 AÃ±o de creación de pregunta: 2007-01-01
 questions[23]= "24)  Respecto a la legislaci&oacute;n en materia de administraci&oacute;n electr&oacute;nica en Espa&ntilde;a puede decirse que:";
 choices[23]= new Array();
 choices[23][0] = "Ya la Ley 30/1992 de 26 de R&eacute;gimen Jur&iacute;dico de las Administraciones P&uacute;blicas y del Procedimiento Administrativo Com&uacute;n dedicaba un art&iacute;culo al impulso del empleo y aplicaci&oacute;n de las t&eacute;cnicas y medios electr&oacute;nicos, inform&aacute;ticos y telem&aacute;ticos, por parte de la Administraci&oacute;n.";
 choices[23][1] = "No permite en la actualidad  que ning&uacute;n servicio electr&oacute;nico sustituya a los tr&aacute;mites presenciales, aunque se espera poder avanzar con la introducci&oacute;n del nuevo DNI electr&oacute;nico.";
 choices[23][2] = "En la actualidad no es posible la creaci&oacute;n de registros telem&aacute;ticos en las AAPP, ya que no se puede garantizar que los usuarios accedan a ellos por el bajo &iacute;ndice de penetraci&oacute;n de Internet en Espa&ntilde;a.";
 choices[23][3] = "La notificaci&oacute;n por medios telem&aacute;ticos en la actualidad debe ir acompa&ntilde;ada de una notificaci&oacute;n en papel, incluso si el interesado hubiera se&ntilde;alado el medio telem&aacute;tico como preferente o consentido expresamente";
 answers[23] = choices[23][0];
 units[23] = "30";
 comments[23] = "Id Pregunta: 4247. NULL";


//  Id pregunta: 4560 AÃ±o de creación de pregunta: 2007-01-01
 questions[24]= "25)  El Responsable de Seguridad de un fichero con datos de car&aacute;cter personal revisara el registro de accesos, al menos";
 choices[24]= new Array();
 choices[24][0] = "una vez al mes";
 choices[24][1] = "cada 45 d&iacute;as";
 choices[24][2] = "cuando ocurra una incidencia";
 choices[24][3] = "con anterioridad a la auditoria bienal";
 answers[24] = choices[24][0];
 units[24] = "29";
 comments[24] = "Id Pregunta: 4560. ";


//  Id pregunta: 4779 AÃ±o de creación de pregunta: 2007-01-01
 questions[25]= "26)  La Ley de Impulso de la Sociedad de la Informaci&oacute;n introduce novedades en materia de";
 choices[25]= new Array();
 choices[25][0] = "Facturaci&oacute;n electr&oacute;nica";
 choices[25][1] = "Firma electr&oacute;nica";
 choices[25][2] = "Derechos de los usuarios en la Sociedad de la Informaci&oacute;n";
 choices[25][3] = "Todas las anteriores son ciertas";
 answers[25] = choices[25][3];
 units[25] = "30";
 comments[25] = "Id Pregunta: 4779. Ley 56/2007";


//  Id pregunta: 4782 AÃ±o de creación de pregunta: 2007-01-01
 questions[26]= "27)  Seg&uacute;n el Real Decreto 522/2006";
 choices[26]= new Array();
 choices[26][0] = "En procedimientos administrativos de la Administraci&oacute;n General del Estado se suprome la aportaci&oacute;n de fotocopias de documentos de identidad";
 choices[26][1] = "En los procedimientos administrativos de la Administraci&oacute;n General del Estado se suprime la exigencia de aportar el certificado de empadronamiento, como documento probatorio del domicilio y residencia.";
 choices[26][2] = "Se regula la expedici&oacute;n del documento nacional de identidad electr&oacute;nico y sus certificados de firma electr&oacute;nica";
 choices[26][3] = "Ninguna de las anteriores";
 answers[26] = choices[26][0];
 units[26] = "30";
 comments[26] = "Id Pregunta: 4782. ";


//  Id pregunta: 4857 AÃ±o de creación de pregunta: 2007-01-01
 questions[27]= "28)  El marco legislativo espa&ntilde;ol de la Propiedad Intelectual e Industrial configurado mediante el Real DecretoLegislativo 1/1996, de 12 de abril, por el que se aprueba el Texto Refundido de la Ley de Propiedad Intelectual, enlo referente al software, establece que son objeto de protecci&oacute;n:";
 choices[27]= new Array();
 choices[27][0] = "Exclusivamente los programas de ordenador, entendidos como secuencias de instrucciones o indicacionesdestinadas a ser utilizadas en un sistema inform&aacute;tico para realizar una determinada funci&oacute;n o tarea";
 choices[27][1] = "Los programas de ordenador y su documentaci&oacute;n preparatoria, comprendi&eacute;ndose en dicho concepto ladocumentaci&oacute;n t&eacute;cnica y los manuales de uso del programa";
 choices[27][2] = "Los programas de ordenador y todas las definiciones documentadas de sus interfaces que posibilitan el usocolaborativo del software";
 choices[27][3] = "&Uacute;nicamente los algoritmos y conceptos inventivos documentados en los que se basan cualquiera de loselementos de los programas de ordenador";
 answers[27] = choices[27][1];
 units[27] = "36";
 comments[27] = "Id Pregunta: 4857. ";


//  Id pregunta: 4986 AÃ±o de creación de pregunta: 2003-01-01
 questions[28]= "29)  Se&ntilde;ale cu&aacute;l de los siguientes no es uno de los miembros del Consejo Consultivo de la Agencia de Protecci&oacute;n deDatos, de conformidad con el art&iacute;culo 38 de la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n deDatos de car&aacute;cter personal:";
 choices[28]= new Array();
 choices[28][0] = "Un magistrado del Tribunal Constitucional.";
 choices[28][1] = "Un senador.";
 choices[28][2] = "Un representante de los usuarios y consumidores.";
 choices[28][3] = "Un miembro de la Real Academia de la Historia.";
 answers[28] = choices[28][0];
 units[28] = "29";
 comments[28] = "Id Pregunta: 4986. Examen TIC B 2007";


//  Id pregunta: 5055 AÃ±o de creación de pregunta: 2003-01-01
 questions[29]= "30)  Seg&uacute;n la legislaci&oacute;n vigente sobre la Propiedad Intelectual, &iquest;cu&aacute;l de las siguientes afirmaciones en relaci&oacute;n con laduraci&oacute;n de la protecci&oacute;n en la explotaci&oacute;n de los derechos de autor de un programa de ordenador, por la personatitular del derecho, es cierta?";
 choices[29]= new Array();
 choices[29][0] = "Si el autor es una persona natural, la duraci&oacute;n de la protecci&oacute;n son 35 a&ntilde;os desde la publicaci&oacute;n delprograma.";
 choices[29][1] = "Si el autor es una persona jur&iacute;dica, la duraci&oacute;n de la protecci&oacute;n ser&aacute; de 99 a&ntilde;os computados desde el 1 deenero del a&ntilde;o siguiente al de divulgaci&oacute;n del programa";
 choices[29][2] = "La protecci&oacute;n es indefinida en el tiempo, desde la creaci&oacute;n del c&oacute;digo objeto del programa";
 choices[29][3] = "Cuando el autor sea una persona natural, durar&aacute;n toda la vida del autor y setenta a&ntilde;os despu&eacute;s de sumuerte o declaraci&oacute;n de fallecimiento";
 answers[29] = choices[29][3];
 units[29] = "36";
 comments[29] = "Id Pregunta: 5055. Examen TIC A 2007";


//  Id pregunta: 5101 AÃ±o de creación de pregunta: 2003-01-01
 questions[30]= "31)  Se regir&aacute;n por su normativa espec&iacute;fica, seg&uacute;n la ley 34/2002, las siguientes actividades y servicios de la sociedad de la informaci&oacute;n, excepto:";
 choices[30]= new Array();
 choices[30][0] = "Notarios";
 choices[30][1] = "Registradores";
 choices[30][2] = "Agentes de bolsa";
 choices[30][3] = "Procuradores";
 answers[30] = choices[30][2];
 units[30] = "30";
 comments[30] = "Id Pregunta: 5101. Ley 34/2002, art&iacute;culo 5";


//  Id pregunta: 5124 AÃ±o de creación de pregunta: 2003-01-01
 questions[31]= "32)  Una obra bajo licencia Creative Commons:";
 choices[31]= new Array();
 choices[31][0] = "No tiene copyright";
 choices[31][1] = "Otorga todos los derechos a terceras personas";
 choices[31][2] = "Ofrecen derechos a terceras personas bajo ciertas condiciones.";
 choices[31][3] = "No ofrecen ning&uacute;n derecho a terceras personas.";
 answers[31] = choices[31][2];
 units[31] = "36";
 comments[31] = "Id Pregunta: 5124. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5213 AÃ±o de creación de pregunta: 2003-01-01
 questions[32]= "33)  El Marco Europeo de Interoperabilidad 2.0 se construye sobre la base de 12 principios. Indicar cu&aacute;l de los siguientes no es uno de ellos:";
 choices[32]= new Array();
 choices[32][0] = "Multiling&uuml;ismo";
 choices[32][1] = "Seguridad y privacidad";
 choices[32][2] = "Subsidiariedad y proporcionalidad";
 choices[32][3] = "Cooperaci&oacute;n intergubernamental";
 answers[32] = choices[32][3];
 units[32] = "30";
 comments[32] = "Id Pregunta: 5213. NULL";


//  Id pregunta: 5422 AÃ±o de creación de pregunta: 2003-01-01
 questions[33]= "34)  Seg&uacute;n la ley de propiedad intelectual (RDL 1/96 de 22 de abril) &iquest;qu&eacute; es una obra compuesta?";
 choices[33]= new Array();
 choices[33][0] = "Es el resultado de la colaboraci&oacute;n entre varios autores";
 choices[33][1] = "Una obra en la que, por su complejidad, no es posible establecer un autor";
 choices[33][2] = "Es una obra nueva que incorpora otra existente sin colaboraci&oacute;n del autor de &eacute;sta";
 choices[33][3] = "La citada ley no hace referencia a tal concepto";
 answers[33] = choices[33][2];
 units[33] = "36";
 comments[33] = "Id Pregunta: 5422. Castilla y Le&oacute;n";


//  Id pregunta: 5558 AÃ±o de creación de pregunta: 2003-01-01
 questions[34]= "35)  Respecto de la Ley 56/2007, se&ntilde;ale la afirmaci&oacute;n incorrecta:";
 choices[34]= new Array();
 choices[34][0] = "Se incluir&aacute;n en los proyectos de infraestructuras de inter&eacute;s general canalizaciones para el despliegue de redes de comunicaciones, as&iacute; como  se preveer&aacute;n las instalaciones para asegurar la cobertura de comunicaciones m&oacute;viles.";
 choices[34][1] = "Se  especifica la creaci&oacute;n de una base de datos sobre servicios de la sociedad de la informaci&oacute;n  de comunicaciones electr&oacute;nicas en Espa&ntilde;a.";
 choices[34][2] = "Se promover&aacute;n las ofertas p&uacute;blicas de contrataci&oacute;n electr&oacute;nica entre administraci&oacute;n y empresas privadas.";
 choices[34][3] = "Aclara la valoraci&oacute;n de la firma electr&oacute;nica en juicio.";
 answers[34] = choices[34][2];
 units[34] = "30";
 comments[34] = "Id Pregunta: 5558. ";


//  Id pregunta: 5655 AÃ±o de creación de pregunta: 2003-01-01
 questions[35]= "36)  Seg&uacute;n el RD 1720/2007, se implantar&aacute;n, adem&aacute;s de las medidas de nivel b&aacute;sico, las de nivel medio, a los siguientes ficheros:";
 choices[35]= new Array();
 choices[35][0] = "Los que contengan o se refieran a datos recabados con fines policiales sin consentimiento de las personas afectadas";
 choices[35][1] = "Aquellos de los que sean responsables las Entidades Gestoras y Servicios Comunes de la Seguridad social y se relacionen con el ejercicio de sus competencias";
 choices[35][2] = "Aquellos de los que sean responsables las entidades financieras, para finalidades relacionadas con la prestaci&oacute;n de servicios financieros";
 choices[35][3] = "La b) y la c) son correctas";
 answers[35] = choices[35][3];
 units[35] = "29";
 comments[35] = "Id Pregunta: 5655. ";


//  Id pregunta: 5706 AÃ±o de creación de pregunta: 2003-01-01
 questions[36]= "37)  La ley 11/2007 que regula el acceso electr&oacute;nico de los ciudadanos  a los servicios p&uacute;blicos, transpone aspectos de:";
 choices[36]= new Array();
 choices[36][0] = "De la directiva 200/31/CE relativos a Servicios de la Sociedad de la Informaci&oacute;n.";
 choices[36][1] = "De la Directiva 2006/123/CE relativa a los servicios en el mercado interior.";
 choices[36][2] = "De la Directiva 2002/58/CE sobre la privacidad y las comunicaciones electr&oacute;nicas.";
 choices[36][3] = "No recoge la transposici&oacute;n de articulado relativo a ninguna Directiva.";
 answers[36] = choices[36][1];
 units[36] = "43";
 comments[36] = "Id Pregunta: 5706. NULL";


//  Id pregunta: 5776 AÃ±o de creación de pregunta: 2009-01-01
 questions[37]= "38)  &iquest;Qu&eacute; car&aacute;cter tendr&aacute;n los C&oacute;digos Tipo descritos en el art&iacute;culo 32 de la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal?";
 choices[37]= new Array();
 choices[37][0] = "De legislaci&oacute;n de desarrollo de la Ley Org&aacute;nica 15/1999.";
 choices[37][1] = "Sustitutivo de las regulaciones legales sobre protecci&oacute;n de datos para aquellos sectores que los adopten.";
 choices[37][2] = "Obligatorio para todas aquellas administraciones P&uacute;blicas que prevean la realizaci&oacute;n de transferencias internacionales de datos personales a terceros pa&iacute;ses que no garanticen un nivel adecuado de protecci&oacute;n.";
 choices[37][3] = "C&oacute;digos deontol&oacute;gicos o de buena pr&aacute;ctica profesional.";
 answers[37] = choices[37][3];
 units[37] = "29";
 comments[37] = "Id Pregunta: 5776. ";


//  Id pregunta: 5799 AÃ±o de creación de pregunta: 2009-01-01
 questions[38]= "39)  El funcionamiento del &quot;Sistema de Verificaci&oacute;n de Datos de Identidad&quot; est&aacute; determinado por el Real Decreto 522/2006 por el que se suprime la aportaci&oacute;n de fotocopias de documentos de identidad en los procedimientos administrativos. Seg&uacute;n dicho Real Decreto, la supresi&oacute;n de la aportaci&oacute;n de fotocopias de documentos de identidad en los procedimientos administrativos es obligatoria para:";
 choices[38]= new Array();
 choices[38][0] = "La Administraci&oacute;n General del Estado y los organismos p&uacute;blicos vinculados o dependientes de aquella.";
 choices[38][1] = "La Administraci&oacute;n General del Estado y las Administraciones Auton&oacute;micas y los organismos p&uacute;blicos vinculados o dependientes de las anteriores.";
 choices[38][2] = "Todas las Administraciones P&uacute;blicas.";
 choices[38][3] = "Todas las Administraciones P&uacute;blicas y cualquier otro, organismo o entidad con personal jur&iacute;dica propia siempre que uno o varios sujetos pertenecientes al sector p&uacute;blico financien mayoritariamente su actividad.";
 answers[38] = choices[38][0];
 units[38] = "30";
 comments[38] = "Id Pregunta: 5799. MAP 2008 A2";


//  Id pregunta: 5955 AÃ±o de creación de pregunta: 2009-01-01
 questions[39]= "40)  Se&ntilde;ale la respuesta FALSA. La Ley 11/2007 indica que la Reuni&oacute;n de &Oacute;rganos colegiados por medios electr&oacute;nicos en la Administraci&oacute;n General del Estado se efectuar&aacute; de acuerdo con las siguientes especialidades:";
 choices[39]= new Array();
 choices[39][0] = "Deber&aacute; garantizarse la realizaci&oacute;n efectiva de los principios que la legislaci&oacute;n establece respecto de la convocatoria, acceso a la informaci&oacute;n y comunicaci&oacute;n del orden del d&iacute;a, en donde se especificar&aacute;n los tiempos en los que se organizar&aacute;n los debates, la formulaci&oacute;n y conocimiento de las propuestas y la adopci&oacute;n de acuerdos.";
 choices[39][1] = "Deber&aacute; garantizarse de forma fehaciente el quorum requerido en los t&eacute;rminos establecidos por la Ley 30/1992, de R&eacute;gimen Jur&iacute;dico de las Administraciones P&uacute;blicas y del Procedimiento Administrativo Com&uacute;n por medios electr&oacute;nicos ";
 choices[39][2] = "El r&eacute;gimen de constituci&oacute;n y adopci&oacute;n de acuerdos garantizar&aacute; la participaci&oacute;n de los miembros de acuerdo con las disposiciones propias del &oacute;rgano.";
 choices[39][3] = "Las actas garantizar&aacute;n la constancia de las comunicaciones producidas as&iacute; como el acceso de los miembros al contenido de los acuerdos adoptados.";
 answers[39] = choices[39][1];
 units[39] = "43";
 comments[39] = "Id Pregunta: 5955. Disposici&oacute;n Adicional primera.";


//  Id pregunta: 5972 AÃ±o de creación de pregunta: 2010-01-01
 questions[40]= "41)  Seg&uacute;n el RD 1720/2007, cu&aacute;l de la siguiente informaci&oacute;n NO es necesaria incluir en la orden de creaci&oacute;n de un fichero de titularidad p&uacute;blica:";
 choices[40]= new Array();
 choices[40][0] = "Los &oacute;rganos responsables del fichero";
 choices[40][1] = "El nivel b&aacute;sico, medio o alto de seguridad que resulte exigible";
 choices[40][2] = "Las transferencias internacionales de datos previstas a terceros pa&iacute;ses, con indicaci&oacute;n, en su caso, de los pa&iacute;ses de destino de los datos";
 choices[40][3] = "El encargado de tratamiento, si lo hubiese";
 answers[40] = choices[40][3];
 units[40] = "29";
 comments[40] = "Id Pregunta: 5972. Similar a Castilla La Mancha 2009";


//  Id pregunta: 5995 AÃ±o de creación de pregunta: 2010-01-01
 questions[41]= "42)  El Defensor del usuario de la administraci&oacute;n electr&oacute;nica a que hace referencia el art&iacute;culo 7 de la Ley 11/2007 de Acceso Electr&oacute;nico de los Ciudadanos a los Servicios P&uacute;blicos es nombrado por:";
 choices[41]= new Array();
 choices[41][0] = "El Defensor del Pueblo.";
 choices[41][1] = "El Congreso de los Diputados, por mayor&iacute;a simple.";
 choices[41][2] = "El Consejo de Ministros.";
 choices[41][3] = "El Ministro de Industria.";
 answers[41] = choices[41][2];
 units[41] = "43";
 comments[41] = "Id Pregunta: 5995. TIC A 2009";


//  Id pregunta: 6193 AÃ±o de creación de pregunta: 2010-01-01
 questions[42]= "43)  La Orden PRE/878/2010 regula";
 choices[42]= new Array();
 choices[42][0] = "El Registro Electr&oacute;nico Com&uacute;n";
 choices[42][1] = "Los contenidos y servicios m&iacute;nimos de las sedes electr&oacute;nicas";
 choices[42][2] = "El uso de certificados de empleado p&uacute;blico";
 choices[42][3] = "La direcci&oacute;n electr&oacute;nica habilitada";
 answers[42] = choices[42][3];
 units[42] = "43";
 comments[42] = "Id Pregunta: 6193. Orden PRE/878/2010, previsto en el art&iacute;culo 38.2 del Real Decreto 1671/2009, de 6 de noviembre.";


//  Id pregunta: 6370 AÃ±o de creación de pregunta: 2010-01-01
 questions[43]= "44)  &iquest;Cada cu&aacute;nto tiempo ser&aacute;n objeto de una auditor&iacute;a regular ordinaria los sistemas de informaci&oacute;n a los que se refiere el Esquema Nacional de Seguridad?";
 choices[43]= new Array();
 choices[43][0] = "Cada dos a&ntilde;os";
 choices[43][1] = "Al menos, cada dos a&ntilde;os";
 choices[43][2] = "Cada a&ntilde;o";
 choices[43][3] = "Al menos, una vez al a&ntilde;o";
 answers[43] = choices[43][1];
 units[43] = "43";
 comments[43] = "Id Pregunta: 6370. Art&iacute;culo 34 ENS. Anexo III: para los sistemas de categor&iacute;a B&Aacute;SICA, bastar&aacute; una autoevaluaci&oacute;n.";


//  Id pregunta: 6386 AÃ±o de creación de pregunta: 2010-01-01
 questions[44]= "45)  El &aacute;mbito de aplicaci&oacute;n de una sede electr&oacute;nica podr&aacute; ser:";
 choices[44]= new Array();
 choices[44][0] = "La totalidad del Ministerio u organismo p&uacute;blico, o uno o varios de sus &oacute;rganos con rango, al menos, de subdirecci&oacute;n general.";
 choices[44][1] = "La totalidad del Ministerio u organismo p&uacute;blico, o uno o varios de sus &oacute;rganos con rango, al menos, de direcci&oacute;n general.";
 choices[44][2] = "La totalidad del Ministerio u organismo p&uacute;blico, o uno o varios de sus &oacute;rganos con rango, al menos, de secretar&iacute;a de estado.";
 choices[44][3] = "La totalidad del Ministerio u organismo p&uacute;blico.";
 answers[44] = choices[44][1];
 units[44] = "43";
 comments[44] = "Id Pregunta: 6386. Art&iacute;culo 3.2 RD 1671/2009";


//  Id pregunta: 6395 AÃ±o de creación de pregunta: 2010-01-01
 questions[45]= "46)  &iquest;Cu&aacute;l de los siguientes medios no ser&iacute;a valido, en ning&uacute;n caso, para la pr&aacute;ctica de notificaciones por medios electr&oacute;nicos, en los &oacute;rganos y organismos p&uacute;blicos de la Administraci&oacute;n General del Estado, de acuerdo al RD 1671/2009?";
 choices[45]= new Array();
 choices[45][0] = "Direcci&oacute;n electr&oacute;nica habilitada";
 choices[45][1] = "Comparecencia electr&oacute;nica en la sede";
 choices[45][2] = "Sistema de correo electr&oacute;nico con acuse de recibo que deje constancia de la recepci&oacute;n";
 choices[45][3] = "Todos los anteriores son v&aacute;lidos";
 answers[45] = choices[45][3];
 units[45] = "43";
 comments[45] = "Id Pregunta: 6395. Art&iacute;culo 35 RD 1671/2009";


//  Id pregunta: 6408 AÃ±o de creación de pregunta: 2010-01-01
 questions[46]= "47)  &iquest;Cu&aacute;l de los siguientes no ser&aacute; considerada una infracci&oacute;n de los derechos de autor, de acuerdo a la Ley de Propiedad Intelectual?";
 choices[46]= new Array();
 choices[46][0] = "Poner en circulaci&oacute;n una o m&aacute;s copias de un programa de ordenador conociendo o pudiendo presumir su naturaleza ileg&iacute;tima, sin autorizaci&oacute;n del titular de los derechos.";
 choices[46][1] = "Tener con fines comerciales una o m&aacute;s copias de un programa de ordenador, conociendo o pudiendo presumir su naturaleza ileg&iacute;tima, , sin autorizaci&oacute;n del titular de los derechos.";
 choices[46][2] = "Poner en circulaci&oacute;n o tener con fines comerciales cualquier instrumento que tenga, entre otros usos, facilitar la supresi&oacute;n o neutralizaci&oacute;n no autorizadas de cualquier dispositivo t&eacute;cnico utilizado para proteger un programa de ordenador, sin autorizaci&oacute;n del titular de los derechos.";
 choices[46][3] = "Todas las anteriores son consideradas infracciones, seg&uacute;n la Ley de Propiedad Intelectual.";
 answers[46] = choices[46][2];
 units[46] = "36";
 comments[46] = "Id Pregunta: 6408. Art&iacute;culo 102 RDL 1/1996";


//  Id pregunta: 6583 AÃ±o de creación de pregunta: 2010-01-01
 questions[47]= "48)  Entre los apartados m&iacute;nimos que debe tener un documento de seguridad est&aacute;n";
 choices[47]= new Array();
 choices[47][0] = "Identificaci&oacute;n del responsable de seguridad";
 choices[47][1] = "Control peri&oacute;dico del cumplimiento del documento";
 choices[47][2] = "Funciones y obligaciones del personal";
 choices[47][3] = "Todas las respuestas anteriores son correctas";
 answers[47] = choices[47][2];
 units[47] = "29";
 comments[47] = "Id Pregunta: 6583. NULL";


//  Id pregunta: 6592 AÃ±o de creación de pregunta: 2010-01-01
 questions[48]= "49)  Un tipo de software que lleva al cabo una auditor&iacute;a de todo el software y hardware que se encuentra en una red de una manera sencilla, adem&aacute;s de eficiente es";
 choices[48]= new Array();
 choices[48][0] = "RFFLow Flowchart";
 choices[48][1] = "Network Inventory Advisor";
 choices[48][2] = "Tcpdump";
 choices[48][3] = "Todas las respuestas anteriores son incorrectas";
 answers[48] = choices[48][3];
 units[48] = "75";
 comments[48] = "Id Pregunta: 6592. NULL";


//  Id pregunta: 7311 AÃ±o de creación de pregunta: 2010-01-01
 questions[49]= "50)  La Ley 11/2007, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos (LAECSP) regula la &ldquo;Cooperaci&oacute;n entre administraciones para el impulso de la administraci&oacute;n electr&oacute;nica&rdquo; en el:";
 choices[49]= new Array();
 choices[49][0] = "T&iacute;tulo I";
 choices[49][1] = "T&iacute;tulo II";
 choices[49][2] = "T&iacute;tulo III";
 choices[49][3] = "T&iacute;tulo IV";
 answers[49] = choices[49][3];
 units[49] = "44";
 comments[49] = "Id Pregunta: 7311. NULL";


//  Id pregunta: 7771 AÃ±o de creación de pregunta: 2010-01-01
 questions[50]= "51)   El Sistema de Soporte a la Decisi&oacute;n SSD-AAPP es una aplicaci&oacute;n inform&aacute;tica dise&ntilde;ada para:";
 choices[50]= new Array();
 choices[50][0] = " Ayudar a la selecci&oacute;n de la mejor oferta posible de entre las obtenidas en cualquier proceso de contrataci&oacute;n p&uacute;blica relacionada con Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones.";
 choices[50][1] = " Ayudar a la selecci&oacute;n de la mejor oferta posible de entre las obtenidas en cualquier proceso de contrataci&oacute;n p&uacute;blica a trav&eacute;s del Cat&aacute;logo de Bienes de Adquisici&oacute;n Centralizada.";
 choices[50][2] = " Ayudar a la selecci&oacute;n de la mejor oferta posible de entre las obtenidas en cualquier proceso de contrataci&oacute;n p&uacute;blica.";
 choices[50][3] = " Ayudar a la selecci&oacute;n de la mejor oferta posible de entre las obtenidas en un proceso de contrataci&oacute;n p&uacute;blica a trav&eacute;s de un procedimiento negociado por exclusividad.";
 answers[50] = choices[50][2];
 units[50] = "44";
 comments[50] = "Id Pregunta: 7771. Map 2005";


//  Id pregunta: 8281 AÃ±o de creación de pregunta: 2011-01-01
 questions[51]= "52)  El Esquema Nacional de Interoperatibilidad (ENI) se&ntilde;ala que las condiciones de licenciamiento de las aplicaciones y documentaci&oacute;n asociada tendr&aacute;n en cuenta que el fin perseguido es el aprovechamiento y la reutilizaci&oacute;n. Para este fin, &iquest;qu&eacute; tipo de licenciamiento indica expresamente el ENI que se procurar&aacute; aplicar?:";
 choices[51]= new Array();
 choices[51][0] = "Licencia IDABC.";
 choices[51][1] = "Licencia de C&oacute;digo Abierto del Consejo Superior de Administraci&oacute;n Electr&oacute;nica.";
 choices[51][2] = "Licencia P&uacute;blica de la Uni&oacute;n Europea.";
 choices[51][3] = "Licencia Shareware.";
 answers[51] = choices[51][2];
 units[51] = "43";
 comments[51] = "Id Pregunta: 8281. Examen TIC A1 2010";


//  Id pregunta: 8422 AÃ±o de creación de pregunta: 2011-01-01
 questions[52]= "53)  &iquest;Cu&aacute;l de los siguientes principios b&aacute;sicos no aparece en el Esquema Nacional de Seguridad, Real Decreto 3/2010 del 8 de enero?";
 choices[52]= new Array();
 choices[52][0] = "Seguridad transversal";
 choices[52][1] = "Gesti&oacute;n de riesgos";
 choices[52][2] = "L&iacute;neas de defensa";
 choices[52][3] = "Funci&oacute;n diferenciada";
 answers[52] = choices[52][0];
 units[52] = "43";
 comments[52] = "Id Pregunta: 8422. NULL";


//  Id pregunta: 8600 AÃ±o de creación de pregunta: 2011-01-01
 questions[53]= "54)  Con el objetivo de garantizar la calidad en los servicios p&uacute;blicos se ha creado:";
 choices[53]= new Array();
 choices[53][0] = "La Agencia Estatal de Evaluaci&oacute;n de las Pol&iacute;ticas P&uacute;blicas y la Calidad de los Servicios (AEVAL) perteneciente al Ministerio de Presidencia";
 choices[53][1] = "La Direcci&oacute;n General de Aseguramiento de la Calidad e Infraestructuras perteneciente al Ministerio de Industria Turismo y Comercio";
 choices[53][2] = "El Consejo Superior de Aseguramiento de la Calidad e Infraestructuras perteneciente al Ministerio de Presidencia.";
 choices[53][3] = "La Agencia Estatal de Evaluaci&oacute;n de las Pol&iacute;ticas P&uacute;blicas y la Calidad de los Servicios (AEVAL) perteneciente al Ministerio de Pol&iacute;tica Territorial.";
 answers[53] = choices[53][0];
 units[53] = "43";
 comments[53] = "Id Pregunta: 8600. Examen TIC A2 2010 interna";


//  Id pregunta: 8781 AÃ±o de creación de pregunta: 2011-01-01
 questions[54]= "55)  El Registro General de Protecci&oacute;n de Datos es un &Oacute;rgano integrado:";
 choices[54]= new Array();
 choices[54][0] = "En la Agencia de Protecci&oacute;n de Datos.";
 choices[54][1] = "En el Registro Civil.";
 choices[54][2] = "En el Registro Mercantil.";
 choices[54][3] = "En el Registro General del Ministerio de Justicia.";
 answers[54] = choices[54][0];
 units[54] = "29";
 comments[54] = "Id Pregunta: 8781. Examen UPM A2 2011";


//  Id pregunta: 8824 AÃ±o de creación de pregunta: 2011-01-01
 questions[55]= "56)   Seg&uacute;n el Real Decreto legislativo 1/1996, de 12 de abril, por el que se aprueba el texto refundido de la Ley de Propiedad Intelectual, &quot;toda secuencia de instrucciones o indicaciones destinadas a ser utilizadas, directa o indirectamente, en un sistema inform&aacute;tico para realizar una funci&oacute;n o una tarea o para obtener un resultado determinado, cualquiera que fuere su forma de expresi&oacute;n o fijaci&oacute;n&quot; es:";
 choices[55]= new Array();
 choices[55][0] = " Un algoritmo";
 choices[55][1] = "Un m&eacute;todo";
 choices[55][2] = "Un programa de ordenador ";
 choices[55][3] = "Un procedimiento";
 answers[55] = choices[55][2];
 units[55] = "36,37";
 comments[55] = "Id Pregunta: 8824. Examen UC3M 2010";


//  Id pregunta: 9003 AÃ±o de creación de pregunta: 2011-01-01
 questions[56]= "57)  Seg&uacute;n la LOPD, el &oacute;rgano sancionador establecer&aacute; la cuant&iacute;a de la sanci&oacute;n aplicando la escala relativa a la clase de infracciones que preceda inmediatamente en gravedad a aquella en que se integra la considerada en el caso de que se trate, en los siguientes supuestos:";
 choices[56]= new Array();
 choices[56][0] = "Cuando pueda apreciarse que la conducta del afectado ha podido inducir a la comisi&oacute;n de la infracci&oacute;n.";
 choices[56][1] = "Cuando se haya producido un proceso de fusi&oacute;n por absorci&oacute;n y la infracci&oacute;n fuese anterior a dicho proceso, no siendo imputable a la entidad absorbente.";
 choices[56][2] = "Cuando el infractor haya reconocido espont&aacute;neamente su culpabilidad.";
 choices[56][3] = "Todos los anteriores";
 answers[56] = choices[56][3];
 units[56] = "29";
 comments[56] = "Id Pregunta: 9003. ";


//  Id pregunta: 9005 AÃ±o de creación de pregunta: 2011-01-01
 questions[57]= "58)  NO es una infracci&oacute;n leve seg&uacute;n la LOPD:";
 choices[57]= new Array();
 choices[57][0] = "Incumplir el deber de secreto establecido en el art&iacute;culo 10 de esta Ley, salvo que constituya infracci&oacute;n grave.";
 choices[57][1] = "No solicitar la inscripci&oacute;n del fichero de datos de car&aacute;cter personal en el Registro General de Protecci&oacute;n de Datos.";
 choices[57][2] = "La transmisi&oacute;n de los datos a un encargado del tratamiento sin dar cumplimiento a los deberes formales establecidos en el art&iacute;culo 12 de esta Ley.";
 choices[57][3] = "No remitir a la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos las notificaciones previstas en esta Ley o en sus disposiciones de desarrollo.";
 answers[57] = choices[57][0];
 units[57] = "29";
 comments[57] = "Id Pregunta: 9005. ";


//  Id pregunta: 9034 AÃ±o de creación de pregunta: 2011-01-01
 questions[58]= "59)  Indique cu&aacute;l no es un principios b&aacute;sico seg&uacute;n el RD 3/2010.";
 choices[58]= new Array();
 choices[58][0] = "Prevenci&oacute;n, reactivaci&oacute;n y revisi&oacute;n";
 choices[58][1] = "Seguridad Integral";
 choices[58][2] = "Reevaluaci&oacute;n peri&oacute;dica";
 choices[58][3] = "L&iacute;neas de defensa";
 answers[58] = choices[58][0];
 units[58] = "43";
 comments[58] = "Id Pregunta: 9034. ";


//  Id pregunta: 9190 AÃ±o de creación de pregunta: 2013-01-01
 questions[59]= "60)  En relaci&oacute;n a los programas de ordenadro, indicar mediante que ley se protegen.";
 choices[59]= new Array();
 choices[59][0] = "Mediante la Ley 23/2006 por la que se modifica el texto refundido de la Ley de Propiedad Intelectual";
 choices[59][1] = "Mediante la Ley de Propiedad Intelectual";
 choices[59][2] = "Mediante la Directiva de derechos de autor 2001/29";
 choices[59][3] = "Mediante la Ley de Patentes";
 answers[59] = choices[59][1];
 units[59] = "36";
 comments[59] = "Id Pregunta: 9190. ";


//  Id pregunta: 9194 AÃ±o de creación de pregunta: 2013-01-01
 questions[60]= "61)  La protecci&oacute;n de un programa de ordenador, &iquest;se extiende al c&oacute;digo objeto?";
 choices[60]= new Array();
 choices[60][0] = "No, puesto que no es una creaci&oacute;n intelectual, sino una compilaci&oacute;n autom&aacute;tica de la m&aacute;quina.";
 choices[60][1] = "No, puesto que es algo que no se puede entender, as&iacute; que no se puede proteger.";
 choices[60][2] = "Si, en todos los casos";
 choices[60][3] = "Todas las anteriores son falsas";
 answers[60] = choices[60][2];
 units[60] = "36";
 comments[60] = "Id Pregunta: 9194. ";


//  Id pregunta: 9195 AÃ±o de creación de pregunta: 2013-01-01
 questions[61]= "62)  El Texto Refundido de la Ley de Propiedad Intelectual establece que la duraci&oacute;n de la protecci&oacute;n de los derechos de explotaci&oacute;n sobre los programas de ordenador se extiende como m&aacute;ximo a:";
 choices[61]= new Array();
 choices[61][0] = "70 a&ntilde;os computados desde el d&iacute;a siguiente a la divulgaci&oacute;n l&iacute;cita del programa, si el autor es una persona jur&iacute;dica.";
 choices[61][1] = "40 a&ntilde;os desde el 1 de enero del a&ntilde;o siguiente a la divulgaci&oacute;n l&iacute;cita del programa o a su creaci&oacute;n si no se hubiera divulgado.";
 choices[61][2] = "toda la vida del autor y 70 a&ntilde;os despu&eacute;s de su muerte, si el autor es una persona f&iacute;sica.";
 choices[61][3] = "40 a&ntilde;os desde el 1 de enero del a&ntilde;o siguiente a la divulgaci&oacute;n l&iacute;cita del programa, cualquiera que sea la presonalidad del autor.";
 answers[61] = choices[61][2];
 units[61] = "36";
 comments[61] = "Id Pregunta: 9195. ";


//  Id pregunta: 9544 AÃ±o de creación de pregunta: 2013-01-01
 questions[62]= "63)  Los certificados incorporados al DNI-e:";
 choices[62]= new Array();
 choices[62][0] = "Son dos: de autenticaci&oacute;n y de firma del ciudadano.";
 choices[62][1] = "Los usuarios finales pueden validarlos en la Direcci&oacute;n General de la Polic&iacute;a, que est&aacute; constituida como Autoridad de Validaci&oacute;n.";
 choices[62][2] = "Est&aacute;n basados en la recomendaci&oacute;n X. 509 v.3 sin extensi&oacute;n alguna.";
 choices[62][3] = "Est&aacute;n integrados en un chip certificado en el nivel de seguridad EAL4+ definido en la norma ISO/IEC 15408.";
 answers[62] = choices[62][3];
 units[62] = "30";
 comments[62] = "Id Pregunta: 9544. Examen TIC A1 2011 (Incluyen tambi&eacute;n certificado electr&oacute;nico de la autoridad emisora)";


//  Id pregunta: 9546 AÃ±o de creación de pregunta: 2013-01-01
 questions[63]= "64)  Seg&uacute;n la LSSI,  Los prestadores de servicios de la sociedad de la informaci&oacute;n que faciliten enlaces a otros contenidos o incluyan en los suyos directorios o instrumentos de b&uacute;squeda de contenidos no ser&aacute;n responsables por la informaci&oacute;n a la que dirijan a los destinatarios de sus servicios, siempre que ";
 choices[63]= new Array();
 choices[63][0] = "No tengan conocimiento efectivo de que la actividad o la informaci&oacute;n a la que remiten o recomiendan es il&iacute;cita o de que lesiona bienes o derechos de un tercero susceptibles de indemnizaci&oacute;n";
 choices[63][1] = "A&uacute;n teniendo conocimiento de lo estipulado en la respuesta a), act&uacute;en con diligencia para suprimir o inutilizar el enlace correspondiente.";
 choices[63][2] = "Las respuestas a) y b) son correctas";
 choices[63][3] = "Ninguna de las anteriores";
 answers[63] = choices[63][2];
 units[63] = "30";
 comments[63] = "Id Pregunta: 9546. Ley 34/2002, art&iacute;culo 17";


//  Id pregunta: 9576 AÃ±o de creación de pregunta: 2013-01-01
 questions[64]= "65)  Seg&uacute;n el art&iacute;culo 4 de la Ley 11/2007, de 22 de junio, de Acceso electr&oacute;nico de los ciudadanos a los Servicios P&uacute;blicos, el principio de igualdad en la utilizaci&oacute;n de tecnolog&iacute;as de la informaci&oacute;n se refiere a:";
 choices[64]= new Array();
 choices[64][0] = "La exigencia de id&eacute;ntico nivel de garant&iacute;as y seguridad que el que se requiere para la utilizaci&oacute;n de medios no electr&oacute;nicos en la actividad administrativa.";
 choices[64][1] = "Que en ning&uacute;n caso el uso de medios electr&oacute;nicos pueda implicar la existencia de restricciones o discriminaciones para los ciudadanos que se relacionen con las Administraciones P&uacute;blicas por medios no electr&oacute;nicos.";
 choices[64][2] = "La garant&iacute;a de la accesibilidad universal y el dise&ntilde;o adaptado para todas las personas de los soportes, canales y entornos con objeto de que todos los ciudadanos puedan ejercer sus derechos en igualdad de condiciones.";
 choices[64][3] = "Que el uso de medios electr&oacute;nicos debe garantizar por igual a todos los ciudadanos la m&aacute;xima difusi&oacute;n, publicidad y transparencia de las actuaciones administrativas.";
 answers[64] = choices[64][1];
 units[64] = "43";
 comments[64] = "Id Pregunta: 9576. Examen TIC A1 2011";


//  Id pregunta: 9799 AÃ±o de creación de pregunta: 2014-01-01
 questions[65]= "66)  En la Ley 59/2003, de firma electr&oacute;nica, se indica que la prestaci&oacute;n de servicios de certificaci&oacute;n:";
 choices[65]= new Array();
 choices[65][0] = "Est&aacute; sujeta a autorizaci&oacute;n previa por parte del Ministro de Hacienda. ";
 choices[65][1] = "Est&aacute; sujeta a autorizaci&oacute;n previa por parte del Consejo de Ministros. ";
 choices[65][2] = "No est&aacute; sujeta a autorizaci&oacute;n previa.";
 choices[65][3] = "Es una competencia auton&oacute;mica.";
 answers[65] = choices[65][2];
 units[65] = "30";
 comments[65] = "Id Pregunta: 9799. Examen TIC-A2 2013-Libre (Ley 59/2003, art&iacute;culo 5)";


//  Id pregunta: 9800 AÃ±o de creación de pregunta: 2014-01-01
 questions[66]= "67)  Seg&uacute;n la Ley 59/2003 de Firma electr&oacute;nica, los prestadores de servicios de certificaci&oacute;n que expidan certificados reconocidos deber&aacute;n conservar registrada por cualquier medio seguro toda la informaci&oacute;n y documentaci&oacute;n relativa a un certificado reconocido al menos durante:";
 choices[66]= new Array();
 choices[66][0] = "5 a&ntilde;os.";
 choices[66][1] = "10 a&ntilde;os.";
 choices[66][2] = "Permanentemente.";
 choices[66][3] = "15 a&ntilde;os.";
 answers[66] = choices[66][3];
 units[66] = "30";
 comments[66] = "Id Pregunta: 9800. Examen TIC-A2 2013-Libre (Ley 59/2003, art&iacute;culo 20.f)";


//  Id pregunta: 9802 AÃ±o de creación de pregunta: 2014-01-01
 questions[67]= "68)  &iquest;Cu&aacute;l es el &aacute;mbito del Registro Electr&oacute;nico Com&uacute;n?";
 choices[67]= new Array();
 choices[67][0] = "Todas las Administraciones P&uacute;blicas.";
 choices[67][1] = "La Administraci&oacute;n General del Estado y la Administraci&oacute;n Auton&oacute;mica. ";
 choices[67][2] = "La Administraci&oacute;n General del Estado y los Organismos P&uacute;blicos adscritos o dependientes de la misma. ";
 choices[67][3] = "La Secretaria de Estado de Administraciones P&uacute;blicas, como responsable de su gesti&oacute;n.";
 answers[67] = choices[67][2];
 units[67] = "44";
 comments[67] = "Id Pregunta: 9802. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9803 AÃ±o de creación de pregunta: 2014-01-01
 questions[68]= "69)  &iquest;Cu&aacute;l de las siguientes medidas de seguridad NO pertenece al grupo &quot;Medidas de protecci&oacute;n [mp]&quot; seg&uacute;n el RD 3/2010 (Esquema Nacional de Seguridad)?";
 choices[68]= new Array();
 choices[68][0] = "Detecci&oacute;n de intrusi&oacute;n.";
 choices[68][1] = "Formaci&oacute;n.";
 choices[68][2] = "Desarrollo.";
 choices[68][3] = "Energ&iacute;a el&eacute;ctrica.";
 answers[68] = choices[68][0];
 units[68] = "43";
 comments[68] = "Id Pregunta: 9803. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9874 AÃ±o de creación de pregunta: 2014-01-01
 questions[69]= "70)  Un trabajador asalariado crea un programa de ordenador en el ejercicio de sus funciones laborales. De acuerdo con el RDL 1/1996 de 12 de abril, por el que se aprueba el Texto Refundido de la Ley de Propiedad Intelectual, la titularidad de los derechos de explotaci&oacute;n del programa corresponder&aacute;";
 choices[69]= new Array();
 choices[69][0] = "al autor del programa.";
 choices[69][1] = "al autor y al empresario, conjuntamente, salvo pacto en contrario.";
 choices[69][2] = "al autor en cuanto al programa objeto, pero no respecto al programa fuente.";
 choices[69][3] = "exclusivamente al empresario, salvo pacto en contrario.";
 answers[69] = choices[69][3];
 units[69] = "36";
 comments[69] = "Id Pregunta: 9874. TIC A1, Examen 2013";


//  Id pregunta: 10149 AÃ±o de creación de pregunta: 2014-01-01
 questions[70]= "71)  La Ley 34/2002, de servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico, en relaci&oacute;n a la imposici&oacute;n de Sanciones indica";
 choices[70]= new Array();
 choices[70][0] = "El &oacute;rgano sancionador establecer&aacute; la cuant&iacute;a de la sanci&oacute;n aplicando la escala relativa a la clase de infracciones que preceda inmediatamente en gravedad a aquella en que se integra la considerada cuando el infractor haya reconocido espont&aacute;neamente su culpabilidad.";
 choices[70][1] = "La cuant&iacute;a de las multas que se impongan se graduar&aacute; atendiendo a La adhesi&oacute;n a un c&oacute;digo de conducta o a un sistema de autorregulaci&oacute;n publicitaria aplicable respecto a la infracci&oacute;n cometida.";
 choices[70][2] = "Las dos anteriores son ciertas";
 choices[70][3] = "Las afirmaciones anteriores son falsas";
 answers[70] = choices[70][2];
 units[70] = "30";
 comments[70] = "Id Pregunta: 10149. ";


//  Id pregunta: 10258 AÃ±o de creación de pregunta: 2014-01-01
 questions[71]= "72)  En caso de solicitarse la rectificaci&oacute;n de unos datos de car&aacute;cter personal a un responsable del tratamiento que haya realizado una cesi&oacute;n de dichos datos a un tercero";
 choices[71]= new Array();
 choices[71][0] = "No pueden rectificarse datos de car&aacute;cter personal que hayan sido objeto de cesi&oacute;n a terceros";
 choices[71][1] = "El responsable deber&aacute; contestar al interesado y proceder a la rectificaci&oacute;n, no siendo necesario que comunique la misma al cesionario";
 choices[71][2] = "El responsable deber&aacute; contestar al interesado,  proceder a la rectificaci&oacute;n y comunicarla al cesionario para que tambi&eacute;n la realice. El cesionario contestar&aacute; tambi&eacute;n al interesado";
 choices[71][3] = "El responsable deber&aacute; contestar al interesado,  proceder a la rectificaci&oacute;n y comunicarla al cesionario para que tambi&eacute;n la realice. El cesionario no tiene obligaci&oacute;n de contestar al interesado";
 answers[71] = choices[71][3];
 units[71] = "29";
 comments[71] = "Id Pregunta: 10258. Art&iacute;culo 32.3 del RD 1720/2007";


//  Id pregunta: 10261 AÃ±o de creación de pregunta: 2014-01-01
 questions[72]= "73)  En cuanto al registro de ficheros en el Registro General de Protecci&oacute;n de Datos";
 choices[72]= new Array();
 choices[72][0] = "S&oacute;lo es obligatorio en el caso de ficheros que contengan datos especialmente protegidos para ficheros de titularidad privada y en todo caso para los de titularidad p&uacute;blica";
 choices[72][1] = "S&oacute;lo es obligatorio en el caso de ficheros que contengan datos especialmente protegidos para ficheros de titularidad p&uacute;blica y en todo caso para los de titularidad privada";
 choices[72][2] = "Es obligatorio para todo fichero que contenga datos de car&aacute;cter personal";
 choices[72][3] = "No es obligatorio en ning&uacute;n caso";
 answers[72] = choices[72][2];
 units[72] = "29";
 comments[72] = "Id Pregunta: 10261. Art&iacute;culo 55.1 y 55.2 del RD 1720/2007";


//  Id pregunta: 10265 AÃ±o de creación de pregunta: 2014-01-01
 questions[73]= "74)  	Podr&aacute;n tratarse datos personales relativos al cumplimiento o incumplimiento de obligaciones dinerarias";
 choices[73]= new Array();
 choices[73][0] = "Desde el momento en que se produce el impago de la obligaci&oacute;n contraida y por tiempo indefinido";
 choices[73][1] = "Desde el momento en que se adquiere el compromiso de pago y por tiempo indefinido";
 choices[73][2] = "Desde el momento en que se produce el impago de la obligaci&oacute;n contraida siempre que no hayan transcurrido seis a&ntilde;os de dicho impago";
 choices[73][3] = "Desde el momento en que se adquiere el compromiso de pago siempre que no hayan transcurrido seis a&ntilde;os de la adquisici&oacute;n de la deuda";
 answers[73] = choices[73][2];
 units[73] = "29";
 comments[73] = "Id Pregunta: 10265. Art&iacute;culo 38.1 a) y b) del RD 1720/2007";


//  Id pregunta: 10269 AÃ±o de creación de pregunta: 2014-01-01
 questions[74]= "75)  En el contexto de la protecci&oacute;n de datos de car&aacute;cter personal, la figura del responsable de seguridad";
 choices[74]= new Array();
 choices[74][0] = "Es obligatorio que exista s&oacute;lo si se trata de ficheros de nivel alto, no suponiendo su existencia exoneraci&oacute;n de las responsabilidades que corresponden al responsable del fichero";
 choices[74][1] = "Es obligatorio que exista s&oacute;lo si se trata de ficheros de nivel alto, en cuyo caso las obligaciones del responsable del fichero pasan al responsable de seguridad";
 choices[74][2] = "Es obligatorio que exista s&oacute;lo si se trata de ficheros de nivel medio o alto, no suponiendo su existencia exoneraci&oacute;n de las responsabilidades que corresponden al responsable del fichero";
 choices[74][3] = "Es obligatorio que exista s&oacute;lo si se trata de ficheros de nivel medio o alto, en cuyo caso las obligaciones del responsable del fichero pasan al responsable de seguridad";
 answers[74] = choices[74][2];
 units[74] = "29";
 comments[74] = "Id Pregunta: 10269. Art&iacute;culo 95 del RD 1720/2007";


//  Id pregunta: 10574 AÃ±o de creación de pregunta: 2015-01-01
 questions[75]= "76)  &iquest;Qu&eacute; especificaciones permiten eliminar los certificados administrativos en papel mediante el intercambio electr&oacute;nico de datos entre Administraciones?";
 choices[75]= new Array();
 choices[75][0] = "SCSP";
 choices[75][1] = "SIGP";
 choices[75][2] = "SAML";
 choices[75][3] = "SIR";
 answers[75] = choices[75][0];
 units[75] = "44";
 comments[75] = "Id Pregunta: 10574. Sustituci&oacute;n de Certificados en Soporte Papel ";


//  Id pregunta: 10585 AÃ±o de creación de pregunta: 2015-01-01
 questions[76]= "77)  Seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Reutilizaci&oacute;n de recursos de la informaci&oacute;n, las URIs:";
 choices[76]= new Array();
 choices[76][0] = "Deben cumplir el principio de persistencia.";
 choices[76][1] = "Deben utilizar el protocolo FTP.";
 choices[76][2] = "Deben exponer informaci&oacute;n sobre la implementaci&oacute;n t&eacute;cnica de sus recursos.";
 choices[76][3] = "Deben usar una estructura consistente y fija.";
 answers[76] = choices[76][0];
 units[76] = "43";
 comments[76] = "Id Pregunta: 10585. Anexo II (Esquema de URI)";


//  Id pregunta: 10594 AÃ±o de creación de pregunta: 2015-01-01
 questions[77]= "78)  Los programas de ordenador...";
 choices[77]= new Array();
 choices[77][0] = "&hellip; nunca pueden ser objeto de una patente.";
 choices[77][1] = "&hellip; son patentables en la medida en que forman parte de una invenci&oacute;n.";
 choices[77][2] = "&hellip; pueden ser siempre patentables.";
 choices[77][3] = "&hellip; son patentables siempre y cuando est&eacute;n escritos en lenguaje de alto nivel.";
 answers[77] = choices[77][1];
 units[77] = "36";
 comments[77] = "Id Pregunta: 10594. ";


//  Id pregunta: 10674 AÃ±o de creación de pregunta: 2015-01-01
 questions[78]= "79)  La Ley 39/2015 del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas establece su entrada en vigor.";
 choices[78]= new Array();
 choices[78][0] = "6 meses despu&eacute;s de su publicaci&oacute;n para todas sus previsiones normativas.";
 choices[78][1] = "1 a&ntilde;o despu&eacute;s de su publicaci&oacute;n para todas sus previsiones normativas.";
 choices[78][2] = "1 a&ntilde;o despu&eacute;s de su aprobaci&oacute;n para todas sus previsiones normativas.";
 choices[78][3] = "Ninguna de las anteriores.";
 answers[78] = choices[78][3];
 units[78] = "30";
 comments[78] = "Id Pregunta: 10674. ";


//  Id pregunta: 10677 AÃ±o de creación de pregunta: 2015-01-01
 questions[79]= "80)  La Ley 39/2015 del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas establece la obligatoriedad de relaci&oacute;n con las AAPP a trav&eacute;s de medios electr&oacute;nicos para:";
 choices[79]= new Array();
 choices[79][0] = "Personas f&iacute;sicas.";
 choices[79][1] = "Personas jur&iacute;dicas.";
 choices[79][2] = "Personas f&iacute;sicas y jur&iacute;dicas.";
 choices[79][3] = "Ninguna de las anteriores.";
 answers[79] = choices[79][1];
 units[79] = "30";
 comments[79] = "Id Pregunta: 10677. ";


//  Id pregunta: 10680 AÃ±o de creación de pregunta: 2015-01-01
 questions[80]= "81)  En qu&eacute; T&iacute;tulo de la Ley 39/2015 se recogen los &quot;Derechos de las personas en sus relaciones con las Administraciones P&uacute;blicas.&quot;";
 choices[80]= new Array();
 choices[80][0] = "T&iacute;tulo I";
 choices[80][1] = "T&iacute;tulo II";
 choices[80][2] = "T&iacute;tulo III";
 choices[80][3] = "T&iacute;tulo IV";
 answers[80] = choices[80][1];
 units[80] = "30";
 comments[80] = "Id Pregunta: 10680. ";


//  Id pregunta: 10706 AÃ±o de creación de pregunta: 2015-01-01
 questions[81]= "82)  &iquest;Cu&aacute;l no es un componente del expediente electr&oacute;nico?";
 choices[81]= new Array();
 choices[81][0] = "Descripci&oacute;n de los documentos electr&oacute;nicos.";
 choices[81][1] = "&Iacute;ndice electr&oacute;nico.";
 choices[81][2] = "Firma del &Iacute;ndice electr&oacute;nico.";
 choices[81][3] = "Metadatos del expediente electr&oacute;nico.";
 answers[81] = choices[81][0];
 units[81] = "43";
 comments[81] = "Id Pregunta: 10706. ";


//  Id pregunta: 10714 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  &iquest;Qu&eacute; estructura utiliza SICRES 3?";
 choices[82]= new Array();
 choices[82][0] = "HTML";
 choices[82][1] = "PDF";
 choices[82][2] = "XML";
 choices[82][3] = "Ninguna de las anteriores";
 answers[82] = choices[82][2];
 units[82] = "43";
 comments[82] = "Id Pregunta: 10714. ";


//  Id pregunta: 10727 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  &iquest;D&oacute;nde se puede encontrar la especificaci&oacute;n del protocolo SCSP (Sustituci&oacute;n de Certificados en Soporte Papel) seg&uacute;n se&ntilde;ala la NTI de protocolos de intermedicaci&oacute;n?";
 choices[83]= new Array();
 choices[83][0] = "En el Portal de Administraci&oacute;n electr&oacute;nica PAE/CTT";
 choices[83][1] = "En la Intranet del Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[83][2] = "En la Intranet del Ministerio de la Presidencia";
 choices[83][3] = "Se debe solicitar dicha informaci&oacute;n a la Direcci&oacute;n TIC";
 answers[83] = choices[83][0];
 units[83] = "43";
 comments[83] = "Id Pregunta: 10727. ";


//  Id pregunta: 10759 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  &iquest;Cu&aacute;l es la gu&iacute;a referente a &quot;Plan de Adecuaci&oacute;n del Esquema Nacional de Seguridad&quot;?";
 choices[84]= new Array();
 choices[84][0] = "CCN-STIC-803";
 choices[84][1] = "CCN-STIC-805";
 choices[84][2] = "CCN-STIC-806";
 choices[84][3] = "CCN-STIC-807";
 answers[84] = choices[84][2];
 units[84] = "43";
 comments[84] = "Id Pregunta: 10759. ";


//  Id pregunta: 10762 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  Seg&uacute;n las definiciones establecidas en las gu&iacute;as CCN-STIC &iquest;Qu&eacute; es la &quot;Manifestaci&oacute;n  escrita  de  los  &oacute;rganos  o  entidades  de derecho  p&uacute;blico,  firmada  por  su responsable, mediante la que se da publicidad que los sistemas a que  se refieren cumplen con  las  exigencias  del  Esquema  Nacional  de  Seguridad  aprobado  por  Real  Decreto 3/2010, de 8 de enero&quot;?";
 choices[85]= new Array();
 choices[85][0] = "Informe de auditor&iacute;a";
 choices[85][1] = "Declaraci&oacute;n de conformidad";
 choices[85][2] = "Aceptaci&oacute;n del esquema de seguridad";
 choices[85][3] = "Formalizaci&oacute;n de la conformidad";
 answers[85] = choices[85][1];
 units[85] = "43";
 comments[85] = "Id Pregunta: 10762. ";


//  Id pregunta: 10772 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  De acuerdo al art&iacute;culo 7 de la Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica, sobre certificados electr&oacute;nicos de personas jur&iacute;dicas, &iquest;a qui&eacute;n corresponde la responsabilidad de custodiar los datos de firma asociados a un certificado electr&oacute;nico de persona jur&iacute;dica?";
 choices[86]= new Array();
 choices[86][0] = "Al consejero de la persona jur&iacute;dica, cuya identificaci&oacute;n se incluye en el certificado electr&oacute;nico.";
 choices[86][1] = "A la persona f&iacute;sica solicitante del certificado, cuya identificaci&oacute;n se incluye en el certificado electr&oacute;nico.";
 choices[86][2] = "Al prestador de servicios de certificaci&oacute;n, por ser quien firma el certificado electr&oacute;nico.";
 choices[86][3] = "Al representante de la persona jur&iacute;dica de certificaci&oacute;n, cuya identificaci&oacute;n se incluye en el certificado electr&oacute;nico.";
 answers[86] = choices[86][1];
 units[86] = "30";
 comments[86] = "Id Pregunta: 10772. Examen GSI 2014";


//  Id pregunta: 10777 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  Seg&uacute;n se establece en el art&iacute;culo 39 de la Ley Org&aacute;nica 15/1999, ser&aacute;n objeto de inscripci&oacute;n en el Registro General de Protecci&oacute;n de Datos, los datos relativos a los ficheros que sean necesarios para el ejercicio de los derechos de:";
 choices[87]= new Array();
 choices[87][0] = "Informaci&oacute;n, actualizaci&oacute;n, cancelaci&oacute;n, sustituci&oacute;n y oposici&oacute;n.";
 choices[87][1] = "Eliminaci&oacute;n, acceso, rectificaci&oacute;n, cancelaci&oacute;n y omisi&oacute;n.";
 choices[87][2] = "Eliminaci&oacute;n, acceso, rectificaci&oacute;n, cancelaci&oacute;n y sustituci&oacute;n.";
 choices[87][3] = "Informaci&oacute;n, acceso, rectificaci&oacute;n, cancelaci&oacute;n y oposici&oacute;n.";
 answers[87] = choices[87][3];
 units[87] = "29";
 comments[87] = "Id Pregunta: 10777. Examen GSI 2014";


//  Id pregunta: 10931 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  En materia de protecci&oacute;n de datos, el ejercicio del derecho de cancelaci&oacute;n dar&aacute; lugar:";
 choices[88]= new Array();
 choices[88][0] = "A que se modifiquen los datos que resulten ser falsos o inexactos.";
 choices[88][1] = "A que se modifiquen los datos que resulten ser inadecuados o inexactos.";
 choices[88][2] = "A que se supriman los datos que resulten ser inadecuados o excesivos.";
 choices[88][3] = "A que se supriman los datos que resulten ser inexactos o excesivos.";
 answers[88] = choices[88][2];
 units[88] = "29";
 comments[88] = "Id Pregunta: 10931. TIC A1 AGE 2014";


//  Id pregunta: 10982 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  En relaci&oacute;n con el Registro Electr&oacute;nico de Apoderamientos (REA), se&ntilde;ale la respuesta correcta:";
 choices[89]= new Array();
 choices[89][0] = "Un departamento ministerial puede adherirse al REA mediante la firma electr&oacute;nica de un acuerdo de adhesi&oacute;n con el Ministerio de Hacienda y Administraciones P&uacute;blicas, de forma simult&aacute;nea con el alta electr&oacute;nica de sus tr&aacute;mites en dicho Registro.";
 choices[89][1] = "Si un departamento ministerial ya est&aacute; adherido al REA y desea incorporar nuevos tr&aacute;mites al mismo, deber&aacute; hacerlo electr&oacute;nicamente en dicho Registro y publicar una Resoluci&oacute;n oficial modificando o ampliando la relaci&oacute;n inicial de tr&aacute;mites.";
 choices[89][2] = "Los departamentos ministeriales u organismos p&uacute;blicos que gestionen un Registro de apoderamientos propio, deber&aacute;n dar de alta &eacute;stos tambi&eacute;n en el REA para garantizar la interoperabilidad de ambos registros";
 choices[89][3] = "El periodo m&aacute;ximo de vigencia de los apoderamientos para los tr&aacute;mites incorporados en el REA no podr&aacute; superar los dos a&ntilde;os.";
 answers[89] = choices[89][1];
 units[89] = "44";
 comments[89] = "Id Pregunta: 10982. TIC A1 AGE 2014";


//  Id pregunta: 10990 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  La Agenda Digital para Europa, iniciativa de la estrategia Europa 2020 puesta en marcha por la Comisi&oacute;n Europea:";
 choices[90]= new Array();
 choices[90][0] = "Establece la ZUPE (Zona &Uacute;nica de Prestaciones para Empresas), que supondr&aacute; la interconexi&oacute;n de plataformas de apoyo al Emprendedor, permitiendo la presentaci&oacute;n de tr&aacute;mites de inicio de actividad para todo el territorio europeo.";
 choices[90][1] = "Establece medidas para que, en el a&ntilde;o 2020, el 75% de los hogares europeos est&eacute;n abonados a conexiones de internet por encima de los 100 Mbps.";
 choices[90][2] = "Establece el objetivo de equipar a los europeos con un acceso en l&iacute;nea seguro a sus datos m&eacute;dicos en 2017.";
 choices[90][3] = "Propone que, para 2020, los pa&iacute;ses miembros deber&iacute;an duplicar el gasto p&uacute;blico anual total en investigaci&oacute;n y desarrollo de las TIC.";
 answers[90] = choices[90][3];
 units[90] = "30";
 comments[90] = "Id Pregunta: 10990. TIC A1 AGE 2014";


//  Id pregunta: 10994 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Entre los objetivos del proyecto STORK 2.0 (Secure idenTity acrOss boRders linKed) NO se encuentra:";
 choices[91]= new Array();
 choices[91][0] = "Construcci&oacute;n de pilotos o demostradores de servicios de administraci&oacute;n electr&oacute;nica.";
 choices[91][1] = "Estudio de las especificaciones t&eacute;cnicas comunes que permitan el reconocimiento europeo de las eID (identidades electr&oacute;nicas) nacionales.";
 choices[91][2] = "Desarrollo de tecnolog&iacute;as y servicios avanzados de eID que sirvan de base para la construcci&oacute;n de la identidad electr&oacute;nica europea &uacute;nica (eueID) prevista para 2020.";
 choices[91][3] = "Realizaci&oacute;n de estudios sobre la situaci&oacute;n legal y t&eacute;cnica de los sistemas de identificaci&oacute;n y firma electr&oacute;nica utilizados en los Estados Miembros.";
 answers[91] = choices[91][2];
 units[91] = "30";
 comments[91] = "Id Pregunta: 10994. TIC A1 AGE 2014";


//  Id pregunta: 11014 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Cu&aacute;ntos servicios se incluyen en la primera Declaracion de Servicios Compartidos por parte de la Comisi&oacute;n de Estrategia TIC en Septiembre de 2015?";
 choices[92]= new Array();
 choices[92][0] = "12";
 choices[92][1] = "14";
 choices[92][2] = "16";
 choices[92][3] = "10";
 answers[92] = choices[92][1];
 units[92] = "30";
 comments[92] = "Id Pregunta: 11014. ";


//  Id pregunta: 11103 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Seleccione la opci&oacute;n verdadera respecto al Servicio de Verificaci&oacute;n de Datos de Identidad";
 choices[93]= new Array();
 choices[93][0] = "Permite confirmar o verificar que un determinado conjunto de datos corresponden al n&uacute;mero de identificaci&oacute;n introducido por el usuario.";
 choices[93][1] = "La validaci&oacute;n de dichos datos se realiza contra las Bases de Datos del organismo que los custodia: Direcci&oacute;n General Polic&iacute;a (DGP).";
 choices[93][2] = "Las respuestas a) y b) son falsas";
 choices[93][3] = "Las respuestas a) y b) son verdaderas";
 answers[93] = choices[93][3];
 units[93] = "30";
 comments[93] = "Id Pregunta: 11103. ";


//  Id pregunta: 11123 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l de las siguientes no es una norma t&eacute;cnica de interoperabilidad?";
 choices[94]= new Array();
 choices[94][0] = "Cat&aacute;logo de est&aacute;ndares";
 choices[94][1] = "Modelo de datos para el intercambio de expedientes y documentos electr&oacute;nicos";
 choices[94][2] = "Procedimiento de copiado aut&eacute;ntico y conversi&oacute;n entre documentos electr&oacute;nicos";
 choices[94][3] = "Reutilizaci&oacute;n de recursos de informaci&oacute;n";
 answers[94] = choices[94][1];
 units[94] = "43";
 comments[94] = "Id Pregunta: 11123. ";


//  Id pregunta: 11196 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Cu&aacute;l de las siguientes iniciativas de la Estrategia Europa 2020 hace referencia al objetivo de crecimiento integrador?";
 choices[95]= new Array();
 choices[95][0] = "Agenda de nuevas cualificaciones y empleo";
 choices[95][1] = "Agenda Digital para Europa";
 choices[95][2] = "Todas las anteriores";
 choices[95][3] = "Ninguna de las Anteriores";
 answers[95] = choices[95][0];
 units[95] = "30";
 comments[95] = "Id Pregunta: 11196. ";


//  Id pregunta: 11209 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Cu&aacute;l es el porcentaje objetivo de personas que nunca hayan usado Internet para 2015 seg&uacute;n la Agenda Digital Europea?";
 choices[96]= new Array();
 choices[96][0] = "0.2";
 choices[96][1] = "0.33";
 choices[96][2] = "0.15";
 choices[96][3] = "0.01";
 answers[96] = choices[96][2];
 units[96] = "30";
 comments[96] = "Id Pregunta: 11209. ";


//  Id pregunta: 11348 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Cu&aacute;l es la forma correcta de crear un sello electr&oacute;nico seg&uacute;n la normativa sobre administraci&oacute;n electr&oacute;nica";
 choices[97]= new Array();
 choices[97][0] = "Resoluci&oacute;n del Ministro publicado en BOE";
 choices[97][1] = "Resoluci&oacute;n del Ministro publicado en sede";
 choices[97][2] = "Resoluci&oacute;n de la sbusecretar&iacute;a publicado en la Sede";
 choices[97][3] = "Resoluci&oacute;n del Consejo de Ministros publicado en BOE";
 answers[97] = choices[97][2];
 units[97] = "43";
 comments[97] = "Id Pregunta: 11348. ";


//  Id pregunta: 11600 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  De acuerdo al Real Decreto 806/2014, el informe t&eacute;cnico preceptivo de la memoria y los pliegos de prescripciones t&eacute;cnicas de las contrataciones de bienes y servicios inform&aacute;ticos se emitir&aacute; en el plazo m&aacute;ximo de: ";
 choices[98]= new Array();
 choices[98][0] = "Diez d&iacute;as h&aacute;biles posteriores al d&iacute;a en que la unidad TIC registr&oacute; la documentaci&oacute;n completa del expediente de contrataci&oacute;n.";
 choices[98][1] = "Diez d&iacute;as naturales posteriores al d&iacute;a en que la unidad TIC registr&oacute; la documentaci&oacute;n completa del expediente de contrataci&oacute;n.";
 choices[98][2] = "Quince d&iacute;as h&aacute;biles posteriores al d&iacute;a en que la unidad TIC registr&oacute; la documentaci&oacute;n completa del expediente de contrataci&oacute;n.";
 choices[98][3] = "Quince d&iacute;as naturales posteriores al d&iacute;a en que la unidad TIC registr&oacute; la documentaci&oacute;n completa del expediente de contrataci&oacute;n.";
 answers[98] = choices[98][0];
 units[98] = "43";
 comments[98] = "Id Pregunta: 11600. ";


//  Id pregunta: 11749 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  En los sistemas de identificaci&oacute;n de las Administraciones P&uacute;blicas.";
 choices[99]= new Array();
 choices[99][0] = "Las Administraciones P&uacute;blicas podr&aacute;n identificarse mediante el uso de un sello&nbsp; electr&oacute;nico basado en un certificado electr&oacute;nico avanzado";
 choices[99][1] = "Las Administraciones P&uacute;blicas podr&aacute;n identificarse mediante el uso de una firma electr&oacute;nica basada en un certificado electr&oacute;nico reconocido o cualificado";
 choices[99][2] = "Las Administraciones P&uacute;blicas podr&aacute;n identificarse mediante el uso de un c&oacute;digo seguro de verificaci&oacute;n basado en un certificado electr&oacute;nico reconocido o cualificado";
 choices[99][3] = "Las Administraciones P&uacute;blicas podr&aacute;n identificarse mediante el uso de un sello&nbsp; electr&oacute;nico basado en un certificado electr&oacute;nico reconocido o cualificado";
 answers[99] = choices[99][3];
 units[99] = "43";
 comments[99] = "Id Pregunta: 11749. ";


