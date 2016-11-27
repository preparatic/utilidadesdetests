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

//  Id pregunta: 672 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  Teniendo en cuenta el RD 209/2003, indique cu&aacute;l de los siguientes requisitos no es preciso asegurar en la transmisi&oacute;n o recepci&oacute;n de comunicaciones entre la Administraci&oacute;n del Estado y cualquier persona f&iacute;sica o jur&iacute;dica?:";
 choices[0]= new Array();
 choices[0][0] = "Garant&iacute;a de disponibilidad y acceso";
 choices[0][1] = "Existencia de compatibilidad entre emisor y receptor";
 choices[0][2] = "Existencia de medidas de seguridad tendentes a evitar la interceptaci&oacute;n y alteraci&oacute;n de comunicaciones as&iacute; como los accesos no autorizados";
 choices[0][3] = "Garant&iacute;a de comunicaci&oacute;n multicanal entre emisor y receptor";
 answers[0] = choices[0][3];
 units[0] = "30";
 comments[0] = "Id Pregunta: 672. ";


//  Id pregunta: 711 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  Seg&uacute;n el RD 209/2003 por el que se regulan los registros y las notificaciones telem&aacute;ticas, as&iacute; como la utilizaci&oacute;n de medios telem&aacute;ticos para la sustituci&oacute;n de la aportaci&oacute;n de certificados por los ciudadanos";
 choices[1]= new Array();
 choices[1][0] = "La AGE pondr&aacute; a disposici&oacute;n del ciudadano un buz&oacute;n de correo electr&oacute;nico para notificaciones";
 choices[1][1] = "Dicho buz&oacute;n ser&aacute; v&aacute;lido para todas las notificaciones de la AGE ";
 choices[1][2] = "Cuando existiendo constancia de la recepci&oacute;n de la notificaci&oacute;n en la direcci&oacute;n electr&oacute;nica, transcurrieran diez d&iacute;as naturales sin que se lea a su contenido, se iniciar&aacute; el procedimiento administrativo.";
 choices[1][3] = "Cuando existiendo constancia de la recepci&oacute;n de la notificaci&oacute;n en la direcci&oacute;n electr&oacute;nica, transcurrieran diez d&iacute;as naturales sin que se acceda a su contenido, se entender&aacute; que la notificaci&oacute;n ha sido rechazada.";
 answers[1] = choices[1][3];
 units[1] = "30";
 comments[1] = "Id Pregunta: 711. Similar a examen TIC SS A 2003";


//  Id pregunta: 736 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  Las funciones de inspecci&oacute;n y control del cumplimiento de la Ley 34/2002, de Servicios de la Sociedad de la Informaci&oacute;n y de Comercio Electr&oacute;nico, m&aacute;s conocida como LSSI, est&aacute;n atribuidas a:";
 choices[2]= new Array();
 choices[2][0] = "Las Fuerzas y Cuerpos de seguridad del Estado";
 choices[2][1] = "La Inspecci&oacute;n Financiera y Tributaria";
 choices[2][2] = "La Asociaci&oacute;n de Usuarios de Internet";
 choices[2][3] = "El Ministerio de Industria, Energ&iacute;a y Turismo";
 answers[2] = choices[2][3];
 units[2] = "30";
 comments[2] = "Id Pregunta: 736. Examen TIC MAP B 2004. Ley 34/2002, art&iacute;culo 35 (extinto Mio. de Ciencia y Tecnolog&iacute;a)";


//  Id pregunta: 789 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  Est&aacute;n excluidos del &aacute;mbito de la Ley de Servicios de la Sociedad de la Informaci&oacute;n y Comercio Electr&oacute;nico";
 choices[3]= new Array();
 choices[3][0] = "Notarios y registradores de la propiedad y mercantiles en el ejercicio de sus funciones p&uacute;blicas";
 choices[3][1] = "Servicios de venta de arte del patrimonio";
 choices[3][2] = "Servicios bancarios";
 choices[3][3] = "Servicios de la Comisi&oacute;n Nacional del Mercado de Valores";
 answers[3] = choices[3][0];
 units[3] = "30";
 comments[3] = "Id Pregunta: 789. SS-A 2004. Ley 34/2002, art&iacute;culo 5";


//  Id pregunta: 1499 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  La Ley de Servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico, Ley 34/2002:";
 choices[4]= new Array();
 choices[4][0] = "Favorece la celebraci&oacute;n de contratos por v&iacute;a electr&oacute;nica, al asegurar la equivalencia entre los documentos en soporte papel y los documentos electr&oacute;nicos";
 choices[4][1] = "Es una ley pionera, pues se adelant&oacute; en varios meses a la directiva sobre el comercio electr&oacute;nico";
 choices[4][2] = "No incluye previsiones orientadas a hacer efectiva la accesibilidad de las personas con discapacidad a la informaci&oacute;n proporcionada por medios electr&oacute;nicos, remiti&eacute;ndose al desarrollo normativo posterior";
 choices[4][3] = "Prohibe expresamente el env&iacute;o por correo u otras v&iacute;as de comunicaci&oacute;n electr&oacute;nica equivalente de comunicaciones comerciales, para evitar el spamming";
 answers[4] = choices[4][0];
 units[4] = "30";
 comments[4] = "Id Pregunta: 1499. NULL";


//  Id pregunta: 1530 AÃ±o de creación de pregunta: 2003-01-01
 questions[5]= "6)  &iquest;Cu&aacute;l de las siguientes afirmaciones  pertenece al RD 209/2003 ?";
 choices[5]= new Array();
 choices[5][0] = "Se podr&aacute; utilizar una direcci&oacute;n de correo ordinario para recibir avisos de env&iacute;os la direcci&oacute;n de correo &uacute;nica, no consider&aacute;ndose la notificaci&oacute;n enviada si no se ha recibido ese aviso";
 choices[5][1] = "Si el usuario lo escoge la administraci&oacute;n estar&aacute; obligada a avisar al ciudadano de que tiene una notificaci&oacute;n mediante una mensaje SMS";
 choices[5][2] = "Si el usuario al cabo de 10 d&iacute;as desde que ha recibido la notificaci&oacute;n, no la abre, se pasa a considerar otro tipo de notificaci&oacute;n, con otro plazo para la misma";
 choices[5][3] = "Si el cliente al cabo de 10 desde que ha recibido la notificaci&oacute;n, no la abre, se considera que la notificaci&oacute;n ha sido rechazada";
 answers[5] = choices[5][3];
 units[5] = "30";
 comments[5] = "Id Pregunta: 1530. ";


//  Id pregunta: 1871 AÃ±o de creación de pregunta: 2006-01-01
 questions[6]= "7)  &iquest;Qu&eacute; norma se utiliza para la certificaci&oacute;n de dispositivos seguros de creaci&oacute;n de firma?";
 choices[6]= new Array();
 choices[6][0] = "ISO 17799";
 choices[6][1] = "CWA 14169";
 choices[6][2] = "UNE 71502";
 choices[6][3] = "EIA 568 B2";
 answers[6] = choices[6][1];
 units[6] = "30";
 comments[6] = "Id Pregunta: 1871. Decisi&oacute;n de la Comisi&oacute;n de 14 de julio de 2003, Anexo B";


//  Id pregunta: 1880 AÃ±o de creación de pregunta: 2006-01-01
 questions[7]= "8)  La imposici&oacute;n de sanciones por incumplimiento de lo previsto en la Ley 34/2002 (LSSICE) corresponder&aacute; a:";
 choices[7]= new Array();
 choices[7][0] = "En el caso de infracciones muy graves, al Ministro de Industria, Energ&iacute;a y Turismo, y en el de infracciones graves y leves, al Secretario de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n.";
 choices[7][1] = "En el caso de infracciones muy graves, al Ministerio de Industria, Turismo y Comercio y en el caso de infracciones graves y leves, al &oacute;rgano que dict&oacute; la resoluci&oacute;n incumplida";
 choices[7][2] = "En todos los casos, al Ministerio de Industria, Turismo y Comercio";
 choices[7][3] = "La Agencia de Protecci&oacute;n de Datos";
 answers[7] = choices[7][0];
 units[7] = "30";
 comments[7] = "Id Pregunta: 1880. Ley 34/2002, art&iacute;culo 43 (extinto Ministerio de Ciencia y Tecnolog&iacute;a)";


//  Id pregunta: 1906 AÃ±o de creación de pregunta: 2006-01-01
 questions[8]= "9)  La European Computer Driving Licence (ECDL)";
 choices[8]= new Array();
 choices[8][0] = "Es el sistema com&uacute;n europeo para el control de licencias de conducir, dentro del programa eEurope2005";
 choices[8][1] = "Es la acreditaci&oacute;n europea de uso de ordenadores recomendada por la Comisi&oacute;n Europea";
 choices[8][2] = "Es una acreditaci&oacute;n europea de uso de ordenadores gestionada por la Asociaci&oacute;n Europea de Fabricantes de Ordenadores (ECMA)";
 choices[8][3] = "Ninguna de las anteriores";
 answers[8] = choices[8][1];
 units[8] = "30";
 comments[8] = "Id Pregunta: 1906. ";


//  Id pregunta: 1937 AÃ±o de creación de pregunta: 2006-01-01
 questions[9]= "10)  La Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica, establece como sanci&oacute;n por la comisi&oacute;n de infracciones graves:";
 choices[9]= new Array();
 choices[9][0] = "Multa de 30.001 a 150.000 euros";
 choices[9][1] = "Multa por importe m&aacute;ximo de 50.000 euros";
 choices[9][2] = "Multa de 150.001 a 600.000 euros";
 choices[9][3] = "Multa de 30.001 a 100.000 euros como m&aacute;ximo";
 answers[9] = choices[9][0];
 units[9] = "30";
 comments[9] = "Id Pregunta: 1937. Ley 59/2003, art&iacute;culo 32";


//  Id pregunta: 4247 AÃ±o de creación de pregunta: 2007-01-01
 questions[10]= "11)  Respecto a la legislaci&oacute;n en materia de administraci&oacute;n electr&oacute;nica en Espa&ntilde;a puede decirse que:";
 choices[10]= new Array();
 choices[10][0] = "Ya la Ley 30/1992 de 26 de R&eacute;gimen Jur&iacute;dico de las Administraciones P&uacute;blicas y del Procedimiento Administrativo Com&uacute;n dedicaba un art&iacute;culo al impulso del empleo y aplicaci&oacute;n de las t&eacute;cnicas y medios electr&oacute;nicos, inform&aacute;ticos y telem&aacute;ticos, por parte de la Administraci&oacute;n.";
 choices[10][1] = "No permite en la actualidad  que ning&uacute;n servicio electr&oacute;nico sustituya a los tr&aacute;mites presenciales, aunque se espera poder avanzar con la introducci&oacute;n del nuevo DNI electr&oacute;nico.";
 choices[10][2] = "En la actualidad no es posible la creaci&oacute;n de registros telem&aacute;ticos en las AAPP, ya que no se puede garantizar que los usuarios accedan a ellos por el bajo &iacute;ndice de penetraci&oacute;n de Internet en Espa&ntilde;a.";
 choices[10][3] = "La notificaci&oacute;n por medios telem&aacute;ticos en la actualidad debe ir acompa&ntilde;ada de una notificaci&oacute;n en papel, incluso si el interesado hubiera se&ntilde;alado el medio telem&aacute;tico como preferente o consentido expresamente";
 answers[10] = choices[10][0];
 units[10] = "30";
 comments[10] = "Id Pregunta: 4247. NULL";


//  Id pregunta: 4250 AÃ±o de creación de pregunta: 2007-01-01
 questions[11]= "12)  Respecto a la iniciativa i2010 de la Comisi&oacute;n Europea:";
 choices[11]= new Array();
 choices[11][0] = "Con el lanzamiento de i2010 la Comisi&oacute;n Europea abandona totalmente los objetivos fijados en la estrategia de Lisboa.";
 choices[11][1] = "Aunque hubiera sido deseable, i2010 no establece como objetivo prioritario el refuerzo de la inversi&oacute;n en I+D";
 choices[11][2] = "La iniciativa i2010 se lanza a finales del a&ntilde;o 2006, tras comprobar el fracaso de los planes de acci&oacute;n eEurope";
 choices[11][3] = "Su primer objetivo es la creaci&oacute;n de &ldquo;la construcci&oacute;n de un Espacio &uacute;nico Europeo de la Informaci&oacute;n que promueva un mercado interior abierto y competitivo para la sociedad de la informaci&oacute;n y los medios de comunicaci&oacute;n&rdquo;.";
 answers[11] = choices[11][3];
 units[11] = "30";
 comments[11] = "Id Pregunta: 4250. ";


//  Id pregunta: 4255 AÃ±o de creación de pregunta: 2007-01-01
 questions[12]= "13)  Cu&aacute;l de los siguientes planes de fomento de la Sociedad de la Informaci&oacute;n ha sido lanzado por el Ministerio de Industria Turismo y Comercio espa&ntilde;ol:";
 choices[12]= new Array();
 choices[12][0] = "El plan Avanza ";
 choices[12][1] = "La estrategia i2010";
 choices[12][2] = "El plan Conecta ";
 choices[12][3] = "El plan eEurope 2005";
 answers[12] = choices[12][0];
 units[12] = "30";
 comments[12] = "Id Pregunta: 4255. El plan Conecta fue lanzado por el antiguo MAP y los otros son europeos";


//  Id pregunta: 4264 AÃ±o de creación de pregunta: 2007-01-01
 questions[13]= "14)  Respecto del Marco Europeo de Interoperabilidad (MEI) v2, es falsa la afirmacion:";
 choices[13]= new Array();
 choices[13][0] = "Las dimensiones de interoperabilidad son tres: t&eacute;cnica, sem&aacute;ntica y organizativa";
 choices[13][1] = "Define como principios  entre otros la subsidiariedad, la transparencia y el uso de est&aacute;ndares abiertos.";
 choices[13][2] = "Se elabora dentro del programa IDABC";
 choices[13][3] = "Define un total de doce principios";
 answers[13] = choices[13][0];
 units[13] = "30";
 comments[13] = "Id Pregunta: 4264. NULL";


//  Id pregunta: 4343 AÃ±o de creación de pregunta: 2007-01-01
 questions[14]= "15)  Indique cu&aacute;l de las siguientes acciones no es funci&oacute;n de la Firma Electr&oacute;nica, de acuerdo con lo establecido en la Ley 59/2003:";
 choices[14]= new Array();
 choices[14][0] = "Identificar al remitente de un mensaje de manera fidedigna, asegurando su imputabilidad.";
 choices[14][1] = "Evitar accesos indeseados a su propio ordenador, por parte de terceros.";
 choices[14][2] = "Verificar que el mensaje no ha sido manipulado";
 choices[14][3] = "Almacenar la clave privada en el propio ordenador o una tarjeta criptogr&aacute;fica.";
 answers[14] = choices[14][1];
 units[14] = "30";
 comments[14] = "Id Pregunta: 4343. NULL";


//  Id pregunta: 4423 AÃ±o de creación de pregunta: 2007-01-01
 questions[15]= "16)  En relaci&oacute;n con la Ley 59/2003, de firma electr&oacute;nica, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[15]= new Array();
 choices[15][0] = "El prestador de servicios de certificaci&oacute;n ha de ser una persona jur&iacute;dica.";
 choices[15][1] = "Por resoluci&oacute;n administrativa puede suspenderse, pero no extinguirse, la vigencia de los certificados electr&oacute;nicos.";
 choices[15][2] = "Los certificados reconocidos deben incluir necesariamente, entre otros datos, la firma electr&oacute;nica avanzada del prestador de servicios de certificaci&oacute;n que expide el certificado.";
 choices[15][3] = "El DNI electr&oacute;nico acredita electr&oacute;nicamente la identidad personal de su titular, pero no permite la firma electr&oacute;nica de documentos.";
 answers[15] = choices[15][2];
 units[15] = "30";
 comments[15] = "Id Pregunta: 4423. Ley 59/2003, art&iacute;culo 11";


//  Id pregunta: 4424 AÃ±o de creación de pregunta: 2007-01-01
 questions[16]= "17)  Indique la respuesta correcta en relaci&oacute;n con el Real Decreto 209/2003, de 21 de febrero, por el que se regula los registros y las notificaciones telem&aacute;ticas, as&iacute; como la utilizaci&oacute;n de medios telem&aacute;ticos para la sustituci&oacute;n de la aportaci&oacute;n de certificados por los ciudadanos:";
 choices[16]= new Array();
 choices[16][0] = "Los registros telem&aacute;ticos realizar&aacute;n y anotar&aacute;n salidas de escritos y comunicaciones durante las 24 horas de todos los d&iacute;as del a&ntilde;o.";
 choices[16][1] = "La presentaci&oacute;n obligatoria de solicitudes por medios telem&aacute;ticos requiere que as&iacute; lo disponga el Gobierno mediante Real Decreto.";
 choices[16][2] = "La creaci&oacute;n de registros telem&aacute;ticos se efect&uacute;a mediante orden ministerial, que deber&aacute; ser publicada, en todo caso, en el BOE.";
 choices[16][3] = "Los registros telem&aacute;ticos pueden realizar funciones de expedici&oacute;n de copias selladas o compulsadas de los documentos que se tramiten junto con la solicitud.";
 answers[16] = choices[16][2];
 units[16] = "30";
 comments[16] = "Id Pregunta: 4424. ";


//  Id pregunta: 4781 AÃ±o de creación de pregunta: 2007-01-01
 questions[17]= "18)  Como parte de la legislaci&oacute;n y normativa espa&ntilde;ola para el impulso de la administraci&oacute;n electr&oacute;nica se incluye:";
 choices[17]= new Array();
 choices[17][0] = "El Real Decreto 522/2006 de Supresi&oacute;n de Fotocopias de DNI";
 choices[17][1] = "El Real Decreto 523/2006 de Supresi&oacute;n de Certificados de empadronamiento";
 choices[17][2] = "El Real Decreto 1553/2005 que regula el DNI electr&oacute;nico";
 choices[17][3] = "Todas las anteriores son ciertas";
 answers[17] = choices[17][3];
 units[17] = "30";
 comments[17] = "Id Pregunta: 4781. NULL";


//  Id pregunta: 5097 AÃ±o de creación de pregunta: 2003-01-01
 questions[18]= "19)  Seg&uacute;n la Directiva comunitaria 1999/93/CE de firma electr&oacute;nica, NO es un requisito de los proveedores de servicios de certificaci&oacute;n que expiden certificados reconocidos:";
 choices[18]= new Array();
 choices[18][0] = "Comprobar debidamente, de conformidad con el Derecho nacional, la identidad y, si procede, cualesquiera atributos espec&iacute;ficos de la persona a la que se expide un certificado reconocido";
 choices[18][1] = "Utilizar sistemas y productos fiables que est&eacute;n protegidos contra toda alteraci&oacute;n y que garanticen la seguridad t&eacute;cnica y criptogr&aacute;fica de los procedimientos con que trabajan";
 choices[18][2] = "Almacenar o copiar los datos de creaci&oacute;n de firma de la persona a la que el proveedor de servicios de certificaci&oacute;n ha prestado servicios de gesti&oacute;n de claves";
 choices[18][3] = "Disponer de recursos econ&oacute;micos suficientes para operar de conformidad con lo dispuesto en la presente Directiva, en particular para afrontar el riesgo de responsabilidad por da&ntilde;os y perjuicios, por ejemplo contratando un seguro apropiado";
 answers[18] = choices[18][2];
 units[18] = "30";
 comments[18] = "Id Pregunta: 5097. ";


//  Id pregunta: 5098 AÃ±o de creación de pregunta: 2003-01-01
 questions[19]= "20)  Una multa de 60.000 euros podr&iacute;a corresponder, seg&uacute;n la ley de firma electr&oacute;nica, a la comisi&oacute;n de una infracci&oacute;n:";
 choices[19]= new Array();
 choices[19][0] = "Muy grave";
 choices[19][1] = "Grave";
 choices[19][2] = "Leve ";
 choices[19][3] = "No est&aacute; tipificado tal importe";
 answers[19] = choices[19][1];
 units[19] = "30";
 comments[19] = "Id Pregunta: 5098. Ley 59/2003, art&iacute;culo 32";


//  Id pregunta: 5099 AÃ±o de creación de pregunta: 2003-01-01
 questions[20]= "21)  &iquest;Qu&eacute; actividades econ&oacute;micas NO caen dentro del &aacute;mbito de la directiva 2000/31/CE? ";
 choices[20]= new Array();
 choices[20][0] = "La radiodifusi&oacute;n de televisi&oacute;n o de radio";
 choices[20][1] = "Los servicios de transmisi&oacute;n de informaci&oacute;n a trav&eacute;s de una red de comunicaci&oacute;n";
 choices[20][2] = "La venta de mercanc&iacute;as en l&iacute;nea";
 choices[20][3] = "El env&iacute;o de comunicaciones comerciales por correo electr&oacute;nico";
 answers[20] = choices[20][0];
 units[20] = "30";
 comments[20] = "Id Pregunta: 5099. Directiva 200/31/CE, consideraci&oacute;n 18)";


//  Id pregunta: 5267 AÃ±o de creación de pregunta: 2003-01-01
 questions[21]= "22)  El marco regulador del BOE en formato electr&oacute;nico esta recogido en la siguiente norma";
 choices[21]= new Array();
 choices[21][0] = "RD 181/2008";
 choices[21][1] = "RD 1495/2007";
 choices[21][2] = "a y b";
 choices[21][3] = "Ninguna de las anteriores";
 answers[21] = choices[21][0];
 units[21] = "30";
 comments[21] = "Id Pregunta: 5267. ";


//  Id pregunta: 5434 AÃ±o de creación de pregunta: 2003-01-01
 questions[22]= "23)  &iquest;En que se diferencia la firma electr&oacute;nica reconocida de la firma electr&oacute;nica avanzada?";
 choices[22]= new Array();
 choices[22][0] = "En que la segunda ha supuesto un mayor refinamiento en los niveles de seguridad";
 choices[22][1] = "En el tipo de certificado digital implicado";
 choices[22][2] = "En el tipo de dispositivo criptogr&aacute;fico utilizado para la custodia del certificado digital";
 choices[22][3] = "En que la segunda es completamente equivalente a la firma manuscrita";
 answers[22] = choices[22][2];
 units[22] = "30";
 comments[22] = "Id Pregunta: 5434. Castilla y Le&oacute;n (Ley 59/2003, art&iacute;culo 3)";


//  Id pregunta: 5534 AÃ±o de creación de pregunta: 2003-01-01
 questions[23]= "24)  &iquest;Cu&aacute;l de las siguientes no es una de las tres prioridades de i2010 (marco estrat&eacute;gico de la Comisi&oacute;n Europea para la sociedad de la informaci&oacute;n y los medios de comunicaci&oacute;n)? ";
 choices[23]= new Array();
 choices[23][0] = "Conseguir un espacio europeo &uacute;nico de la informaci&oacute;n, fomentando un mercado interior abierto y competitivo para la sociedad de la informaci&oacute;n y los medios de comunicaci&oacute;n";
 choices[23][1] = "El refuerzo de la innovaci&oacute;n y de la inversi&oacute;n en el campo de la investigaci&oacute;n en las TIC";
 choices[23][2] = "Mejorar la prestaci&oacute;n de sevicios intraeuropeos mediante la utilizaci&oacute;n masiva de las TIC";
 choices[23][3] = "Una sociedad europea de la informaci&oacute;n basada en la inclusi&oacute;n que concede prioridad a la mejora de los servicios p&uacute;blicos y de la calidad de vida";
 answers[23] = choices[23][2];
 units[23] = "30";
 comments[23] = "Id Pregunta: 5534. ";


//  Id pregunta: 5544 AÃ±o de creación de pregunta: 2003-01-01
 questions[24]= "25)  Se&ntilde;ale la respuesta correcta respecto a la entrada en vigor de la La ley 11/2007 que regula el acceso electr&oacute;nico de los ciudadanos  a los servicios p&uacute;blicos:";
 choices[24]= new Array();
 choices[24][0] = "A partir del d&iacute;a siguiente a su publicaci&oacute;n en el BOE.";
 choices[24][1] = "Los derechos reconocidos en el art 6 de la ley 11/2007, podr&aacute;n ejercerse respecto de los procedimientos y actuaciones adaptados a la misma, desde la entrada en vigor de dicha ley.";
 choices[24][2] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado y para los Organismos Publicos  vinculados o dependientes de &eacute;sta, los derechos reconocidos en el art 6 de dicha ley, podr&aacute;n ejercerse respecto a la totalidad de procedimientos y actuaciones de su competencia, a partir del 31-12-2009.";
 choices[24][3] = "Todas las anteriores son correctas.";
 answers[24] = choices[24][3];
 units[24] = "43";
 comments[24] = "Id Pregunta: 5544. NULL";


//  Id pregunta: 5545 AÃ±o de creación de pregunta: 2003-01-01
 questions[25]= "26)  Se&ntilde;ale la respuesta correcta respecto del &aacute;mbito de aplicaci&oacute;n de la ley de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos:";
 choices[25]= new Array();
 choices[25][0] = "La ley 11/2007 aplica a las relaciones de ciudadanos y empresas con las Administraciones P&uacute;blicas y a las relaciones entre las propias Administraciones P&uacute;blicas.";
 choices[25][1] = "La ley 11/2007 aplica a las Administraciones P&uacute;blicas, entendiendo por tales, la Administraci&oacute;n General del Estado, Comunidades Aut&oacute;nomas y Entidades de la Administraci&oacute;n Local, as&iacute; como las entidades de derecho p&uacute;blico o privado vinculadas o dependientes de las mismas.";
 choices[25][2] = "a) y b) son ciertas";
 choices[25][3] = "a) y b) son falsas";
 answers[25] = choices[25][3];
 units[25] = "43";
 comments[25] = "Id Pregunta: 5545. La ley no diferencia &quot;ciudadanos y empresas&quot;, sino que habla de ciudadanos de modo gen&eacute;rico. Adem&aacute;s excluye las entidades de derecho privado.";


//  Id pregunta: 5557 AÃ±o de creación de pregunta: 2003-01-01
 questions[26]= "27)  La Ley de Medidas de Impulso de la Sociedad de la Informaci&oacute;n NO flexibiliza:";
 choices[26]= new Array();
 choices[26][0] = "Las obligaciones referidas a las comunicaciones comerciales y a la contrataci&oacute;n electr&oacute;nica.";
 choices[26][1] = "La obligaci&oacute;n de informar a los clientes, sobre medidas de seguridad aplicadas a los servicios prestados y la funci&oacute;n de informar sobre responsabilidades por el uso de Internet con fines il&iacute;citos. ";
 choices[26][2] = "Las obligaciones referidas  a la constancia registral de los nombre de dominio de empresas prestadoras de servicios de la sociedad de la informaci&oacute;n.";
 choices[26][3] = "La obligaci&oacute;n de los PSC de comprobar los datos inscritos en registros p&uacute;blicos.";
 answers[26] = choices[26][1];
 units[26] = "30";
 comments[26] = "Id Pregunta: 5557. ";


//  Id pregunta: 5741 AÃ±o de creación de pregunta: 2009-01-01
 questions[27]= "28)  &iquest;Tiene la firma electr&oacute;nica el mismo valor ante la ley que la firma manuscrita?";
 choices[27]= new Array();
 choices[27][0] = "S&iacute;, siempre";
 choices[27][1] = "No, en ning&uacute;n caso";
 choices[27][2] = "S&iacute;, si es firma electr&oacute;nica avanzada";
 choices[27][3] = "S&iacute;, si es firma electr&oacute;nica reconocida";
 answers[27] = choices[27][3];
 units[27] = "30";
 comments[27] = "Id Pregunta: 5741. Ley 59/2003, art&iacute;culo 3.4";


//  Id pregunta: 5798 AÃ±o de creación de pregunta: 2009-01-01
 questions[28]= "29)  Indique cuales son las funciones fundamentales del Comit&eacute; Sectorial de Administraci&oacute;n electr&oacute;nica.";
 choices[28]= new Array();
 choices[28][0] = "Asegurar la compatibilidad e interoperabilidad de los sistemas y aplicaciones usados por las Administraciones P&uacute;blicas. Preparar planes de acci&oacute;n conjuntos y programas, para fomentar el desarrollo de la administraci&oacute;n electr&oacute;nica en Espa&ntilde;a.";
 choices[28][1] = "Desarrollar servicios centrados en los ciudadanos";
 choices[28][2] = "La reutilizaci&oacute;n de los desarrollos y soluciones por todas las Comunidades Aut&oacute;nomas.";
 choices[28][3] = "Incorporar a todas las Comunidades Aut&oacute;nomas a la red de atenci&oacute;n integral a los ciudadanos, Red 060.";
 answers[28] = choices[28][0];
 units[28] = "30";
 comments[28] = "Id Pregunta: 5798. MAP 2008 A2";


//  Id pregunta: 5799 AÃ±o de creación de pregunta: 2009-01-01
 questions[29]= "30)  El funcionamiento del &quot;Sistema de Verificaci&oacute;n de Datos de Identidad&quot; est&aacute; determinado por el Real Decreto 522/2006 por el que se suprime la aportaci&oacute;n de fotocopias de documentos de identidad en los procedimientos administrativos. Seg&uacute;n dicho Real Decreto, la supresi&oacute;n de la aportaci&oacute;n de fotocopias de documentos de identidad en los procedimientos administrativos es obligatoria para:";
 choices[29]= new Array();
 choices[29][0] = "La Administraci&oacute;n General del Estado y los organismos p&uacute;blicos vinculados o dependientes de aquella.";
 choices[29][1] = "La Administraci&oacute;n General del Estado y las Administraciones Auton&oacute;micas y los organismos p&uacute;blicos vinculados o dependientes de las anteriores.";
 choices[29][2] = "Todas las Administraciones P&uacute;blicas.";
 choices[29][3] = "Todas las Administraciones P&uacute;blicas y cualquier otro, organismo o entidad con personal jur&iacute;dica propia siempre que uno o varios sujetos pertenecientes al sector p&uacute;blico financien mayoritariamente su actividad.";
 answers[29] = choices[29][0];
 units[29] = "30";
 comments[29] = "Id Pregunta: 5799. MAP 2008 A2";


//  Id pregunta: 5879 AÃ±o de creación de pregunta: 2009-01-01
 questions[30]= "31)  Indique quien NO es miembro del Pleno del Consejo Superior de Administraci&oacute;n Electr&oacute;nica:";
 choices[30]= new Array();
 choices[30][0] = "El Presidente del Instituto Nacional de Estad&iacute;stica";
 choices[30][1] = "El Subdirector General del Centro Criptol&oacute;gico Nacional";
 choices[30][2] = "El Interventor General de la Administraci&oacute;n del Estado";
 choices[30][3] = "El Director General de la F&aacute;brica Nacional de Moneda y Timbre-Real Casa de la Moneda";
 answers[30] = choices[30][1];
 units[30] = "30";
 comments[30] = "Id Pregunta: 5879. MAP 2008 A1";


//  Id pregunta: 6001 AÃ±o de creación de pregunta: 2010-01-01
 questions[31]= "32)  Los Estados Miembros est&aacute;n obligados a garantizar, a trav&eacute;s de ventanillas &uacute;nicas, a los prestadores de servicios la posibilidad de llevar a cabo las declaraciones, notificaciones o solicitudes necesarias para la autorizaci&oacute;n por parte de las autoridades competentes. &iquest;En que Directiva se regula esta obligaci&oacute;n?";
 choices[31]= new Array();
 choices[31][0] = "En la Directiva 2000/31/CE, relativa a determinados aspectos jur&iacute;dicos del comercio electr&oacute;nico en el mercado interior.";
 choices[31][1] = "No existe esta obligaci&oacute;n por parte de los Estados Miembros, y por tanto ninguna Directiva la regula.";
 choices[31][2] = "En la Directiva 2006/31/CE, relativa a la armonizaci&oacute;n de las actividades de servicios con contenido econ&oacute;mico en el mercado interior.";
 choices[31][3] = "En la Directiva 2006/123/CE, relativa a los servicios en el mercado interior.";
 answers[31] = choices[31][3];
 units[31] = "30";
 comments[31] = "Id Pregunta: 6001. TIC A 2009";


//  Id pregunta: 6119 AÃ±o de creación de pregunta: 2010-01-01
 questions[32]= "33)  De acuerdo con la Ley 11/2007, &iquest;es posible la destrucci&oacute;n de documentos emitidos originalmente en soporte papel y de los que se haya hecho copia electr&oacute;nica?";
 choices[32]= new Array();
 choices[32][0] = "S&iacute;, la Ley lo permite, pero antes cada Administraci&oacute;n debe regular los t&eacute;rminos y condiciones de este proceso.";
 choices[32][1] = "S&iacute;, la Ley lo permite, y no hace falta regular o establecer ninguna condici&oacute;n.";
 choices[32][2] = "No, la Ley no lo permite, porque los documentos en soporte papel est&aacute;n protegidos por ser Patrimonio Hist&oacute;rico Administrativo.";
 choices[32][3] = "S&iacute;, la Ley lo permite, pero s&oacute;lo los documentos no firmados y que no reconozcan derechos subjetivos.";
 answers[32] = choices[32][0];
 units[32] = "43";
 comments[32] = "Id Pregunta: 6119. TIC A 2009";


//  Id pregunta: 6192 AÃ±o de creación de pregunta: 2010-01-01
 questions[33]= "34)  &iquest;Qu&eacute; norma es derogada por el Real Decreto 1671/2009?";
 choices[33]= new Array();
 choices[33][0] = "Real Decreto 263/1996";
 choices[33][1] = "Real Decreto 209/2003";
 choices[33][2] = "Real Decreto 1553/2005";
 choices[33][3] = "El Real Decreto 1671/2009 no deroga ninguna norma";
 answers[33] = choices[33][0];
 units[33] = "43";
 comments[33] = "Id Pregunta: 6192. Disposici&oacute;n derogatoria &uacute;nica";


//  Id pregunta: 6350 AÃ±o de creación de pregunta: 2010-01-01
 questions[34]= "35)  El proyecto de Reutilizaci&oacute;n de la informaci&oacute;n del Sector P&uacute;blico, promovido por la Secretaria de Estado de Telecomunicaciones y para la sociedad de la informaci&oacute;n se llama:";
 choices[34]= new Array();
 choices[34][0] = "Reutiliza";
 choices[34][1] = "Comparte";
 choices[34][2] = "Rhodas";
 choices[34][3] = "Aporta";
 answers[34] = choices[34][3];
 units[34] = "30";
 comments[34] = "Id Pregunta: 6350. http://datos.gob.es/content/proyecto-aporta";


//  Id pregunta: 6363 AÃ±o de creación de pregunta: 2010-01-01
 questions[35]= "36)  &iquest;Cu&aacute;l de los siguientes es un principio del Esquema Nacional de Seguridad?";
 choices[35]= new Array();
 choices[35][0] = "Enfoque de soluciones de seguridad multilaterales";
 choices[35][1] = "Car&aacute;cter multidimensional de la seguridad";
 choices[35][2] = "Reevaluaci&oacute;n peri&oacute;dica";
 choices[35][3] = "Todos los anteriores";
 answers[35] = choices[35][2];
 units[35] = "43";
 comments[35] = "Id Pregunta: 6363. Art&iacute;culo 4 ENS";


//  Id pregunta: 6371 AÃ±o de creación de pregunta: 2010-01-01
 questions[36]= "37)  En el Esquema Nacional de Seguridad, las dimensiones de seguridad se adscribir&aacute;n a uno de los siguientes niveles:";
 choices[36]= new Array();
 choices[36][0] = "Bajo, Medio o Alto";
 choices[36][1] = "Limitado, Grave o Muy Grave";
 choices[36][2] = "B&aacute;sico, Medio o Alto";
 choices[36][3] = "B&aacute;sico, Medio, Alto o Muy Alto";
 answers[36] = choices[36][0];
 units[36] = "43";
 comments[36] = "Id Pregunta: 6371. Anexo I ENS. Y las categor&iacute;as pueden ser b&aacute;sica, media o alta.";


//  Id pregunta: 6380 AÃ±o de creación de pregunta: 2010-01-01
 questions[37]= "38)  En el Esquema Nacional de Interoperabilidad, se establece que los sistemas o aplicaciones implicados en la provisi&oacute;n de un servicio p&uacute;blico por v&iacute;a electr&oacute;nica se sincronizar&aacute;n con la hora oficial de:";
 choices[37]= new Array();
 choices[37][0] = "El reloj de la Puerta del Sol";
 choices[37][1] = "El Instituto Europeo de Medici&oacute;n Horaria";
 choices[37][2] = "La Agencia Espa&ntilde;ola de Meteorologia";
 choices[37][3] = "El Real Instituto y Observatorio de la Armada";
 answers[37] = choices[37][3];
 units[37] = "43";
 comments[37] = "Id Pregunta: 6380. Art&iacute;culo 15 ENI";


//  Id pregunta: 6381 AÃ±o de creación de pregunta: 2010-01-01
 questions[38]= "39)  De acuerdo a lo establecido en el Esquema Nacional de Interoperabilidad, las administraciones utilizar&aacute;n para las aplicaciones que declaren como de fuentes abiertas aquellas licencias que aseguren que los programas, datos o informaci&oacute;n que se comparten:";
 choices[38]= new Array();
 choices[38][0] = "Se ejecuten exclusivamente para el prop&oacute;sito definido.";
 choices[38][1] = "S&oacute;lo permitan conocer su c&oacute;digo fuente a las personas autorizadas.";
 choices[38][2] = "No pueden modificarse sin permiso previo del autor.";
 choices[38][3] = "Todas las anteriores son falsas.";
 answers[38] = choices[38][3];
 units[38] = "43";
 comments[38] = "Id Pregunta: 6381. Art&iacute;culo 16 ENI";


//  Id pregunta: 6385 AÃ±o de creación de pregunta: 2010-01-01
 questions[39]= "40)  &iquest;D&oacute;nde debe publicarse la orden de creaci&oacute;n de una sede electr&oacute;nica?";
 choices[39]= new Array();
 choices[39][0] = "En la p&aacute;gina web del organismo correspondiente";
 choices[39][1] = "No es necesaria ninguna publicaci&oacute;n";
 choices[39][2] = "En el Bolet&iacute;n Oficial del Estado";
 choices[39][3] = "En dos diarios de tirada nacional";
 answers[39] = choices[39][2];
 units[39] = "43";
 comments[39] = "Id Pregunta: 6385. Art&iacute;culo 3.2 RD 1671/2009";


//  Id pregunta: 6388 AÃ±o de creación de pregunta: 2010-01-01
 questions[40]= "41)  En relaci&oacute;n a las sedes electr&oacute;nicas derivadas, o subsedes, se&ntilde;ale la respuesta incorrecta:";
 choices[40]= new Array();
 choices[40][0] = "Las sedes electr&oacute;nicas derivadas, o subsedes, deber&aacute;n resultar accesibles desde la direcci&oacute;n electr&oacute;nica de la sede principal.";
 choices[40][1] = "Las sedes electr&oacute;nicas derivadas, o subsedes podran ser accesibles mediante acceso electr&oacute;nico directo.";
 choices[40][2] = "Su &aacute;mbito de aplicaci&oacute;n comprender&aacute; &oacute;rgano u &oacute;rganos con rango, al menos, de direcci&oacute;n general.";
 choices[40][3] = "Las sedes electr&oacute;nicas derivadas deber&aacute;n cumplir los mismos requisitos que las sedes electr&oacute;nicas principales, salvo en lo relativo a la publicaci&oacute;n de la orden o resoluci&oacute;n por la que se crea, que se realizar&aacute; a trav&eacute;s de la sede de la que dependan.";
 answers[40] = choices[40][2];
 units[40] = "43";
 comments[40] = "Id Pregunta: 6388. Art&iacute;culo 4 RD 1671/2009";


//  Id pregunta: 6401 AÃ±o de creación de pregunta: 2010-01-01
 questions[41]= "42)  La red multicanal de acceso a informaci&oacute;n o tramitaci&oacute;n de los servicios p&uacute;blicos de cualquier administraci&oacute;n, es conocida como:";
 choices[41]= new Array();
 choices[41][0] = "Red 112";
 choices[41][1] = "Red 060";
 choices[41][2] = "Red Conecta";
 choices[41][3] = "Red SARA";
 answers[41] = choices[41][1];
 units[41] = "30";
 comments[41] = "Id Pregunta: 6401. NULL";


//  Id pregunta: 6459 AÃ±o de creación de pregunta: 2010-01-01
 questions[42]= "43)  El per&iacute;odo de validez de los certificados reconocidos no podr&aacute; ser superior a:";
 choices[42]= new Array();
 choices[42][0] = "Tres a&ntilde;os";
 choices[42][1] = "Diez a&ntilde;os";
 choices[42][2] = "Dos a&ntilde;os";
 choices[42][3] = "Cinco a&ntilde;os";
 answers[42] = choices[42][3];
 units[42] = "30";
 comments[42] = "Id Pregunta: 6459. Castilla La Mancha 2009 (Ley 9/2014, Disposici&oacute;n final sexta)";


//  Id pregunta: 7313 AÃ±o de creación de pregunta: 2010-01-01
 questions[43]= "44)  Se&ntilde;ala cual de las siguientes afirmaciones sobre la Red SARA es incorrecta:";
 choices[43]= new Array();
 choices[43][0] = "Es una red privada de comunicaciones que permite transferencias seguras entre las Administraciones P&uacute;blicas";
 choices[43][1] = "La Red permite la interconexi&oacute;n de los Departamentos ministeriales, las Comunidades Aut&oacute;nomas, los Entes Locales y otros organismos p&uacute;blicos espa&ntilde;oles";
 choices[43][2] = "Contiene un enlace con la red transeuropea sTESTA";
 choices[43][3] = "Est&aacute; definida en el art&iacute;culo 31 de la Ley General de Telecomunicaciones";
 answers[43] = choices[43][3];
 units[43] = "44";
 comments[43] = "Id Pregunta: 7313. NULL";


//  Id pregunta: 8209 AÃ±o de creación de pregunta: 2011-01-01
 questions[44]= "45)  El establecimiento de un directorio de direcciones de red IP, a partir del cual cada entidad u organismo de la AGE pueda establecer de manera independiente sus planes de numeraci&oacute;n IP, se incluye en:";
 choices[44]= new Array();
 choices[44][0] = "El Plan AVANZA.";
 choices[44][1] = "El Plan de direccionamiento e interconexi&oacute;n de redes en la Administraci&oacute;n.";
 choices[44][2] = "El Plan Estrat&eacute;gico para el desarrollo de la administraci&oacute;n electr&oacute;nica.";
 choices[44][3] = "El Plan de evaluaci&oacute;n de impacto de la Ley 11/2007.";
 answers[44] = choices[44][1];
 units[44] = "44";
 comments[44] = "Id Pregunta: 8209. Examen TIC A1 2010";


//  Id pregunta: 8243 AÃ±o de creación de pregunta: 2011-01-01
 questions[45]= "46)  &iquest;Cu&aacute;l de las siguientes funciones NO corresponde al Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica seg&uacute;n lo recogido en la Ley 11/2007 y modificaciones normativas posteriores?:";
 choices[45]= new Array();
 choices[45][0] = "Asegurar la cooperaci&oacute;n entre las administraciones p&uacute;blicas para proporcionar al ciudadano informaci&oacute;n clara, actualizada e inequivoca.";
 choices[45][1] = "Velar por el cumplimiento de los fines y principios establecidos en la Ley 11/2007";
 choices[45][2] = "Proponer planes programas conjuntos de actuaci&oacute;n para impulsar el desarrollo de la Administraci&oacute;n Electr&oacute;nica en Espa&ntilde;a";
 choices[45][3] = "Aprobar los Cat&aacute;logos de determinaci&oacute;n de tipo referidos a bienes y servicios electr&oacute;nicos.";
 answers[45] = choices[45][3];
 units[45] = "43";
 comments[45] = "Id Pregunta: 8243. Examen TIC A1 2010";


//  Id pregunta: 8400 AÃ±o de creación de pregunta: 2011-01-01
 questions[46]= "47)  Respeto a los c&oacute;mputos de plazos, la ley 11/2007, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, dispone que:";
 choices[46]= new Array();
 choices[46][0] = "Se consideran h&aacute;biles los 365 d&iacute;as del a&ntilde;o, debiendo estar operativos los registros 365x24.";
 choices[46][1] = "Cada sede electr&oacute;nica en la que est&eacute; disponible un registro electr&oacute;nico determinar&aacute;, atendiendo al &aacute;mbito territorial en el que ejerece sus competencias el titular de aquella, los d&iacute;as que se considerar&aacute;n inh&aacute;biles";
 choices[46][2] = "Ser&aacute;n h&aacute;biles todos los d&iacute;as, con excepci&oacute;n de las fiestas de la Constituci&oacute;n, Navidad, y A&ntilde;o nuevo. ";
 choices[46][3] = "Ser&aacute;n h&aacute;biles todos los d&iacute;as, excepto aquellos en que en el Registro se hagan labores de mantenimiento inform&aacute;tico que impidan su servicio ";
 answers[46] = choices[46][1];
 units[46] = "43";
 comments[46] = "Id Pregunta: 8400. Examen TIC A2 2010";


//  Id pregunta: 8401 AÃ±o de creación de pregunta: 2011-01-01
 questions[47]= "48)  Dentro del contenido m&iacute;nimo de una Sede Electr&oacute;nica NO se encuentra: ";
 choices[47]= new Array();
 choices[47][0] = "Identificaci&oacute;n, &oacute;rgano titular y responsables de gesti&oacute;n. ";
 choices[47][1] = "Sistemas de firma electr&oacute;nica que sean admitidos o utilizados en la Sede. ";
 choices[47][2] = "Sistemas de verificaci&oacute;n de los certificados de la Sede. ";
 choices[47][3] = "Relaci&oacute;n de funcionarios habilitados para actuar ante la Sede";
 answers[47] = choices[47][3];
 units[47] = "43";
 comments[47] = "Id Pregunta: 8401. Examen TIC A2 2010";


//  Id pregunta: 8402 AÃ±o de creación de pregunta: 2011-01-01
 questions[48]= "49)  El directorio de Sedes Electr&oacute;nicas de la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos es gestionado por:";
 choices[48]= new Array();
 choices[48][0] = "La Presidencia del Gobierno";
 choices[48][1] = "El Ministerio de la Presidencia.";
 choices[48][2] = "La Red SARA. ";
 choices[48][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[48] = choices[48][1];
 units[48] = "43";
 comments[48] = "Id Pregunta: 8402. Examen TIC A2 2010. Actualizada referencia a CETIC por Disp. Ad. 2&ordf; RD 806/2014.";


//  Id pregunta: 8403 AÃ±o de creación de pregunta: 2011-01-01
 questions[49]= "50)  Indique cu&aacute;l NO es una de las condiciones que debe cumplir un documento electr&oacute;nico para ser considerado copia electr&oacute;nica aut&eacute;ntica:";
 choices[49]= new Array();
 choices[49][0] = "Que sea autorizada mediante firma electr&oacute;nica.";
 choices[49][1] = "Que incorpore un sello automatizado que refleje el car&aacute;cter de copia en la impresi&oacute;n del documento. ";
 choices[49][2] = "Que la copia sea obtenida conforme a las normas de competencia y procedimiento. ";
 choices[49][3] = "Que el documento electr&oacute;nico original se encuentre en poder de la Administraci&oacute;n.";
 answers[49] = choices[49][1];
 units[49] = "43";
 comments[49] = "Id Pregunta: 8403. Examen TIC A2 2010";


//  Id pregunta: 8431 AÃ±o de creación de pregunta: 2011-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l de los siguientes programas es la continuaci&oacute;n del programa IDABC finalizado en diciembre de 2009?";
 choices[50]= new Array();
 choices[50][0] = "AIF";
 choices[50][1] = "IDA";
 choices[50][2] = "ISA";
 choices[50][3] = "IMA";
 answers[50] = choices[50][2];
 units[50] = "30";
 comments[50] = "Id Pregunta: 8431. ";


//  Id pregunta: 8437 AÃ±o de creación de pregunta: 2011-01-01
 questions[51]= "52)  Seg&uacute;n el RD 1671/2009, &iquest;Cu&aacute;l de las siguientes afirmaciones referentes a la identificaci&oacute;n y autenticaci&oacute;n en el acceso de los ciudadanos a la AGE y sus OOAA dependientes, no es verdadera?";
 choices[51]= new Array();
 choices[51][0] = "Las personas f&iacute;sicas podr&aacute;n utilizar para relacionarse electr&oacute;nicamente con la Administraci&oacute;n General del Estado y los organismos p&uacute;blicos vinculados o dependientes, los sistemas de firma electr&oacute;nica incorporados al Documento Nacional de Identidad.";
 choices[51][1] = "Las personas jur&iacute;dicas y entidades sin personalidad jur&iacute;dica podr&aacute;n utilizar sistemas de firma electr&oacute;nica de persona jur&iacute;dica o de entidades sin personalidad jur&iacute;dica para todos aquellos procedimientos y actuaciones de la Administraci&oacute;n General del Estado para los que se admitan.";
 choices[51][2] = "En caso de no admisi&oacute;n, la sede electr&oacute;nica correspondiente no deber&aacute; facilitar sistemas alternativos que permitan a las personas jur&iacute;dicas y a las entidades sin personalidad jur&iacute;dica el ejercicio de su derecho a relacionarse electr&oacute;nicamente con la Administraci&oacute;n General del Estado.";
 choices[51][3] = "La admisi&oacute;n de otros sistemas de firma deber&aacute;n aprobarse mediante orden ministerial, o resoluci&oacute;n del titular en el caso de los organismos p&uacute;blicos, previo informe del Consejo Superior de Administraci&oacute;n Electr&oacute;nica.";
 answers[51] = choices[51][2];
 units[51] = "43";
 comments[51] = "Id Pregunta: 8437. ";


//  Id pregunta: 8935 AÃ±o de creación de pregunta: 2011-01-01
 questions[52]= "53)  De acuerdo con la ley 18/2011, &iquest;cu&aacute;l no es un derecho de los profesionales de la justicia en relaci&oacute;n con la utilizaci&oacute;n de los medios electr&oacute;nicos en la actividad judicial?";
 choices[52]= new Array();
 choices[52][0] = "A obtener copias electr&oacute;nicas de los documentos que formen parte de procedimientos en los que sean representantes procesales de la parte personada";
 choices[52][1] = "A utilizar los sistemas de firma electr&oacute;nica del Documento Nacional de Identidad o cualquier otro reconocido, siempre que dicho sistema le identifique de forma un&iacute;voca como profesional";
 choices[52][2] = "A obtener copias electr&oacute;nicas de los documentos electr&oacute;nicos que formen parte de procedimientos en los que acrediten inter&eacute;s leg&iacute;timo";
 choices[52][3] = "Todos los anteriores lo son";
 answers[52] = choices[52][0];
 units[52] = "43";
 comments[52] = "Id Pregunta: 8935. ";


//  Id pregunta: 8938 AÃ±o de creación de pregunta: 2011-01-01
 questions[53]= "54)  Una sede judicial electr&oacute;nica puede no disponer de:";
 choices[53]= new Array();
 choices[53][0] = "Identificaci&oacute;n de la empresa contratada para su gesti&oacute;n, en su caso";
 choices[53][1] = "Informaci&oacute;n necesaria para su correcta utilizaci&oacute;n";
 choices[53][2] = "Informaci&oacute;n relacionada con la protecci&oacute;n de datos de car&aacute;cter personal";
 choices[53][3] = "Debe disponer de todas las anteriores";
 answers[53] = choices[53][0];
 units[53] = "43";
 comments[53] = "Id Pregunta: 8938. ";


//  Id pregunta: 8945 AÃ±o de creación de pregunta: 2011-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l de los siguientes es un principio b&aacute;sico del Esquema Nacional de Interoperabilidad?";
 choices[54]= new Array();
 choices[54][0] = "Enfoque de soluciones multilaterales";
 choices[54][1] = "Utilizaci&oacute;n de la Red SARA como Red de comunicaciones de las Administraciones p&uacute;blicas espa&ntilde;olas";
 choices[54][2] = "Interoperabilidad sem&aacute;ntica";
 choices[54][3] = "Ninguno de los anteriores";
 answers[54] = choices[54][0];
 units[54] = "43";
 comments[54] = "Id Pregunta: 8945. NULL";


//  Id pregunta: 8948 AÃ±o de creación de pregunta: 2011-01-01
 questions[55]= "56)  &iquest;En qu&eacute; caso ser&iacute;a suficiente una autoevaluaci&oacute;n como auditor&iacute;a al sistema de informaci&oacute;n seg&uacute;n el RD 3/2010?";
 choices[55]= new Array();
 choices[55][0] = "En sistemas de informaci&oacute;n de categor&iacute;a b&aacute;sica";
 choices[55][1] = "En sistemas de informaci&oacute;n de categor&iacute;a b&aacute;sica o inferior";
 choices[55][2] = "En sistemas de informaci&oacute;n de categor&iacute;a b&aacute;sica o media";
 choices[55][3] = "Cuando as&iacute; lo decida el responsable de seguridad competente";
 answers[55] = choices[55][1];
 units[55] = "43";
 comments[55] = "Id Pregunta: 8948. ";


//  Id pregunta: 9548 AÃ±o de creación de pregunta: 2013-01-01
 questions[56]= "57)  Seg&uacute;n la Ley de Firma Electr&oacute;nica, se&ntilde;ale cu&aacute;l NO es un supuesto que exima al prestador de servicios de certificaci&oacute;n de la responsabilidad sobre los posibles da&ntilde;os y perjuicios causados a un firmante:";
 choices[56]= new Array();
 choices[56][0] = "Cuando el firmante no haya proporcionado al prestador informaci&oacute;n veraz, completa y exacta de los datos que deban constar en el certificado en el momento de emitir el mismo";
 choices[56][1] = "Cuado el firmante no haya comunicado al prestador cualquier cambio en las circunstancias reflejadas en el certificado electr&oacute;nico";
 choices[56][2] = "Cuando el firmante haya sido negligente en la conservaci&oacute;n de sus datos de creaci&oacute;n de firma";
 choices[56][3] = "Cuando el firmante utilice un certificado revocado sin que el prestador le haya notificado la suspensi&oacute;n de la vigencia";
 answers[56] = choices[56][3];
 units[56] = "30";
 comments[56] = "Id Pregunta: 9548. Ley 59/2003, art&iacute;culo 23";


//  Id pregunta: 9549 AÃ±o de creación de pregunta: 2013-01-01
 questions[57]= "58)  Seg&uacute;n la Ley de Firma Electr&oacute;nica, indique cu&aacute;l NO es una circunstancia que se tendr&aacute; en cuenta para graduar la cuant&iacute;a de una sanci&oacute;n impuesta:";
 choices[57]= new Array();
 choices[57][0] = "El &aacute;mbito geogr&aacute;fico al que es aplicable la comisi&oacute;n de la infracci&oacute;n";
 choices[57][1] = "La existencia de intencionalidad, reincidencia o reiteraci&oacute;n";
 choices[57][2] = "El plazo de tiempo durante el cual se ha venido cometiendo la infracci&oacute;n";
 choices[57][3] = "El beneficio que haya reportado al infractor la infracci&oacute;n cometida.";
 answers[57] = choices[57][0];
 units[57] = "30";
 comments[57] = "Id Pregunta: 9549. Ley 59/2003, art&iacute;culo 33";


//  Id pregunta: 9577 AÃ±o de creación de pregunta: 2013-01-01
 questions[58]= "59)  La publicaci&oacute;n del BOE en su sede electr&oacute;nica:";
 choices[58]= new Array();
 choices[58][0] = "No tiene car&aacute;cter de oficial y aut&eacute;ntica, constituyendo lo publicado una mera manifestaci&oacute;n de servicio p&uacute;blico, ya que lo que tiene valor de oficial y aut&eacute;ntica es su edici&oacute;n impresa";
 choices[58][1] = "Tendr&aacute; car&aacute;cter de oficial y aut&eacute;ntica, al igual que la publicaci&oacute;n del resto de diarios oficiales de las CC.AA, a partir del 1 de enero de 2013.";
 choices[58][2] = "Tiene car&aacute;cter de oficial y aut&eacute;ntica, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil y en las restantes normas aplicables.";
 choices[58][3] = "Tiene car&aacute;cter de oficial y aut&eacute;ntica desde el d&iacute;a 1 de enero de 2011, excepto el contenido de la Secci&oacute;n de Anuncios, que se rige por su normativa espec&iacute;fica.";
 answers[58] = choices[58][2];
 units[58] = "43";
 comments[58] = "Id Pregunta: 9577. Examen TIC A1 2011";


//  Id pregunta: 9581 AÃ±o de creación de pregunta: 2013-01-01
 questions[59]= "60)  Seg&uacute;n el RD 1671/2009 de 6 de noviembre, las copias electr&oacute;nicas id&eacute;nticas al documento electr&oacute;nico original que no comportan cambio de formato se considerar&aacute;n:";
 choices[59]= new Array();
 choices[59][0] = "Copia aut&eacute;ntica del documento original.";
 choices[59][1] = "Copia compulsada del documento original.";
 choices[59][2] = "Documento original.";
 choices[59][3] = "No tendr&aacute;n validez.";
 answers[59] = choices[59][2];
 units[59] = "43";
 comments[59] = "Id Pregunta: 9581. Examen TIC A1 2011";


//  Id pregunta: 9585 AÃ±o de creación de pregunta: 2013-01-01
 questions[60]= "61)  El Real Decreto 4/2010, de 8 de enero, por el que se regula el Esquema Nacional de Interoperabilidad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica define la interoperabilidad sem&aacute;ntica como:";
 choices[60]= new Array();
 choices[60][0] = "Aquella dimensi&oacute;n de la interoperabilidad relativa a la capacidad de las entidades y de los procesos a trav&eacute;s de los cuales llevan a cabo sus actividades para colaborar con el objeto de alcanzar logros mutuamente acordados relativos a los servicios que prestan.";
 choices[60][1] = "Aquella dimensi&oacute;n de la interoperabilidad relativa a que la informaci&oacute;n intercambiada pueda ser interpretable de forma autom&aacute;tica y reutilizable por aplicaciones que no intervinieron en su creaci&oacute;n.";
 choices[60][2] = "Aquella dimensi&oacute;n de la interoperabilidad relativa a la relaci&oacute;n entre sistemas y servicios de tecnolog&iacute;as de la informaci&oacute;n, incluyendo aspectos tales como las interfaces, la interconexi&oacute;n, la integraci&oacute;n de datos y servicios, la presentaci&oacute;n de la informaci&oacute;n, la accesibilidad y la seguridad, u otros de naturaleza an&aacute;loga.";
 choices[60][3] = "Aquella dimensi&oacute;n de la interoperabilidad relativa a la interacci&oacute;n entre elementos que corresponden a diversas oleadas tecnol&oacute;gicas; se manifiesta especialmente en la conservaci&oacute;n de la informaci&oacute;n en soporte electr&oacute;nico.";
 answers[60] = choices[60][1];
 units[60] = "43";
 comments[60] = "Id Pregunta: 9585. Examen TIC A1 2011";


//  Id pregunta: 9716 AÃ±o de creación de pregunta: 2014-01-01
 questions[61]= "62)  Dentro del Centro de Transferencia Tecnol&oacute;gica, el Servicio de Oficina Virtual de Registro que permite, entre otros, la remisi&oacute;n de los asientos registrales entre Administraciones P&uacute;blicas, se denomina";
 choices[61]= new Array();
 choices[61][0] = "SIR.";
 choices[61][1] = "ORVE.";
 choices[61][2] = "SICRES 3.0.";
 choices[61][3] = "SVDR.";
 answers[61] = choices[61][1];
 units[61] = "44";
 comments[61] = "Id Pregunta: 9716. Examen TIC-A1 2013";


//  Id pregunta: 9800 AÃ±o de creación de pregunta: 2014-01-01
 questions[62]= "63)  Seg&uacute;n la Ley 59/2003 de Firma electr&oacute;nica, los prestadores de servicios de certificaci&oacute;n que expidan certificados reconocidos deber&aacute;n conservar registrada por cualquier medio seguro toda la informaci&oacute;n y documentaci&oacute;n relativa a un certificado reconocido al menos durante:";
 choices[62]= new Array();
 choices[62][0] = "5 a&ntilde;os.";
 choices[62][1] = "10 a&ntilde;os.";
 choices[62][2] = "Permanentemente.";
 choices[62][3] = "15 a&ntilde;os.";
 answers[62] = choices[62][3];
 units[62] = "30";
 comments[62] = "Id Pregunta: 9800. Examen TIC-A2 2013-Libre (Ley 59/2003, art&iacute;culo 20.f)";


//  Id pregunta: 9803 AÃ±o de creación de pregunta: 2014-01-01
 questions[63]= "64)  &iquest;Cu&aacute;l de las siguientes medidas de seguridad NO pertenece al grupo &quot;Medidas de protecci&oacute;n [mp]&quot; seg&uacute;n el RD 3/2010 (Esquema Nacional de Seguridad)?";
 choices[63]= new Array();
 choices[63][0] = "Detecci&oacute;n de intrusi&oacute;n.";
 choices[63][1] = "Formaci&oacute;n.";
 choices[63][2] = "Desarrollo.";
 choices[63][3] = "Energ&iacute;a el&eacute;ctrica.";
 answers[63] = choices[63][0];
 units[63] = "43";
 comments[63] = "Id Pregunta: 9803. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9804 AÃ±o de creación de pregunta: 2014-01-01
 questions[64]= "65)  Indique la opci&oacute;n INCORRECTA en relaci&oacute;n con el Esquema Nacional de Seguridad (ENS):";
 choices[64]= new Array();
 choices[64][0] = "Los sistemas de informaci&oacute;n a los que se refiere el ENS ser&aacute;n objeto de una auditor&iacute;a regular ordinaria, al menos cada dos a&ntilde;os, que verifique el cumplimiento de los requerimientos expuestos en el ENS. ";
 choices[64][1] = "Gesti&oacute;n de riesgos, funci&oacute;n diferenciada y reevaluaci&oacute;n peri&oacute;dica son 3 de los principios b&aacute;sicos que deber&aacute;n tenerse en cuenta en las decisiones en materia de seguridad";
 choices[64][2] = "El Instituto Nacional de las Tecnolog&iacute;as de la Informaci&oacute;n (INTECO), en el ejercicio de sus competencias, elaborar&aacute; y difundir&aacute; las correspondientes gu&iacute;as de la seguridad de las tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones. ";
 choices[64][3] = "Si a los 12 meses de la entrada en vigor del ENS hubiera circunstancias que impidan la plena aplicaci&oacute;n de lo exigido en el mismo, se dispondr&aacute; de un plan de adecuaci&oacute;n que marque los plazos de ejecuci&oacute;n, los cuales, en ning&uacute;n caso, ser&aacute;nsuperiores a 48 meses desde la entrada en vigor. ";
 answers[64] = choices[64][2];
 units[64] = "44";
 comments[64] = "Id Pregunta: 9804. NULL";


//  Id pregunta: 9942 AÃ±o de creación de pregunta: 2014-01-01
 questions[65]= "66)  El Real Decreto 695/2013 crea la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y de las Comunicaciones. &iquest;Cu&aacute;l es el rango de esta Direcci&oacute;n?";
 choices[65]= new Array();
 choices[65][0] = "Direcci&oacute;n General.";
 choices[65][1] = "Subdirecci&oacute;n General.";
 choices[65][2] = "Subsecretar&iacute;a.";
 choices[65][3] = "Secretar&iacute;a de Estado.";
 answers[65] = choices[65][2];
 units[65] = "44";
 comments[65] = "Id Pregunta: 9942. TIC A1, Examen 2013";


//  Id pregunta: 10543 AÃ±o de creación de pregunta: 2014-01-01
 questions[66]= "67)  El plan de telecomunicaciones y redes ultrarr&aacute;pidas, dise&ntilde;ado para dar cumplimiento a los objetivos de banda ancha fijados por la Agenda Digital para Europa, fija como objetivos para el 2015:";
 choices[66]= new Array();
 choices[66][0] = "50% de la poblaci&oacute;n con cobertura de m&aacute;s de 100 Mbps.";
 choices[66][1] = "25% de hogares conectados a redes NGA";
 choices[66][2] = "75% de la poblaci&oacute;n con cobertura 4G";
 choices[66][3] = "Todas las anteriores ";
 answers[66] = choices[66][3];
 units[66] = "30";
 comments[66] = "Id Pregunta: 10543. http://www.agendadigital.gob.es/planes-actuaciones/Paginas/plan-telecomunicaciones-redes.aspx";


//  Id pregunta: 10572 AÃ±o de creación de pregunta: 2015-01-01
 questions[67]= "68)  El servicio de verificaci&oacute;n y consulta de datos no tiene por objetivo:";
 choices[67]= new Array();
 choices[67][0] = "Dar respuesta al art&iacute;culo 6 de la Ley 11/2007, por el que se reconoce el derecho a no aportar los datos y documentos que ya obren en poder de la Administraci&oacute;n.";
 choices[67][1] = "Simplificar la tramitaci&oacute;n de los procedimientos administrativos.";
 choices[67][2] = "Facilitar al ciudadano la aportaci&oacute;n de los documentos en papel que acrediten su identidad en los procedimientos administrativos.";
 choices[67][3] = "Dar cumplimiento a los derechos recogidos en la Ley 30/1992, de R&eacute;gimen Jur&iacute;dico de las Administraciones P&uacute;blicas y Procedimiento Administrativo Com&uacute;n.";
 answers[67] = choices[67][2];
 units[67] = "44";
 comments[67] = "Id Pregunta: 10572. ";


//  Id pregunta: 10575 AÃ±o de creación de pregunta: 2015-01-01
 questions[68]= "69)  Son mecanismos que facilitan la interoperabilidad:";
 choices[68]= new Array();
 choices[68][0] = "SCSP, SIR, SOAP y REST.";
 choices[68][1] = "SCSP, SIR y SAML.";
 choices[68][2] = "A y B son correctas.";
 choices[68][3] = "A y B son incorrectas.";
 answers[68] = choices[68][2];
 units[68] = "44";
 comments[68] = "Id Pregunta: 10575. ";


//  Id pregunta: 10578 AÃ±o de creación de pregunta: 2015-01-01
 questions[69]= "70)  La red SARA:";
 choices[69]= new Array();
 choices[69][0] = "S&oacute;lo interconecta las Administraciones P&uacute;blicas Espa&ntilde;olas.";
 choices[69][1] = "S&oacute;lo interconecta la Administraci&oacute;n General del Estado.";
 choices[69][2] = "S&oacute;lo interconecta las Comunidades Aut&oacute;nomas entre s&iacute;.";
 choices[69][3] = "Interconecta las Administraciones P&uacute;blicas Espa&ntilde;olas e instituciones europeas.";
 answers[69] = choices[69][3];
 units[69] = "44";
 comments[69] = "Id Pregunta: 10578. ";


//  Id pregunta: 10582 AÃ±o de creación de pregunta: 2015-01-01
 questions[70]= "71)  Los certificados de sede electr&oacute;nica incluir&aacute;n como contenido:";
 choices[70]= new Array();
 choices[70][0] = "Lo que disponga el Esquema Nacional de Seguridad.";
 choices[70][1] = "La denominaci&oacute;n de &ldquo;sede electr&oacute;nica&rdquo; y el n&uacute;mero de identificaci&oacute;n fiscal de la autoridad de certificaci&oacute;n.";
 choices[70][2] = "Su contenido no est&aacute; definido en ninguna norma.";
 choices[70][3] = "La denominaci&oacute;n del nombre del dominio y el nombre descriptivo de la sede.";
 answers[70] = choices[70][3];
 units[70] = "43";
 comments[70] = "Id Pregunta: 10582. Art&iacute;culo 18, RD 1671/2009.";


//  Id pregunta: 10584 AÃ±o de creación de pregunta: 2015-01-01
 questions[71]= "72)  Marque la que no es una medida del Esquema Nacional de Interoperabilidad para la recuperaci&oacute;n y conservaci&oacute;n de documentos electr&oacute;nicos:";
 choices[71]= new Array();
 choices[71][0] = "La asociaci&oacute;n de metadatos m&iacute;nimos obligatorios.";
 choices[71][1] = "La documentaci&oacute;n de los procedimientos que garanticen la interoperabilidad a medio y largo plazo.";
 choices[71][2] = "La identificaci&oacute;n &uacute;nica e inequ&iacute;voca de cada documento.";
 choices[71][3] = "El establecimiento de un per&iacute;odo de conservaci&oacute;n de m&iacute;nimo cinco a&ntilde;os.";
 answers[71] = choices[71][3];
 units[71] = "43";
 comments[71] = "Id Pregunta: 10584. Art&iacute;culo 21.f, RD 4/2010.";


//  Id pregunta: 10588 AÃ±o de creación de pregunta: 2015-01-01
 questions[72]= "73)  No es un objetivo de Europa 2020:";
 choices[72]= new Array();
 choices[72][0] = "Invertir un 3% en I+D y desarrollar un indicador para su impacto.";
 choices[72][1] = "Reducir el abandono escolar del 20% al 15%.";
 choices[72][2] = "Reducir en 25% el n&uacute;mero de europeos que viven por debajo de umbrales de la pobreza.";
 choices[72][3] = "Reducir las emisiones de gases de efecto invernadero en un 20% desde 1999.";
 answers[72] = choices[72][1];
 units[72] = "30";
 comments[72] = "Id Pregunta: 10588. ";


//  Id pregunta: 10677 AÃ±o de creación de pregunta: 2015-01-01
 questions[73]= "74)  La Ley 39/2015 del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas establece la obligatoriedad de relaci&oacute;n con las AAPP a trav&eacute;s de medios electr&oacute;nicos para:";
 choices[73]= new Array();
 choices[73][0] = "Personas f&iacute;sicas.";
 choices[73][1] = "Personas jur&iacute;dicas.";
 choices[73][2] = "Personas f&iacute;sicas y jur&iacute;dicas.";
 choices[73][3] = "Ninguna de las anteriores.";
 answers[73] = choices[73][1];
 units[73] = "30";
 comments[73] = "Id Pregunta: 10677. ";


//  Id pregunta: 10690 AÃ±o de creación de pregunta: 2015-01-01
 questions[74]= "75)  &iquest;Qu&eacute; reglamento ha considerado la Ley 39/2015 para el establecimiento los sistemas de identificaci&oacute;n como los de firma previstos en dicha Ley?";
 choices[74]= new Array();
 choices[74][0] = "Reglamento (UE) n.&ordm; 910/2014.";
 choices[74][1] = "Reglamento (UE) n.&ordm; 810/2013.";
 choices[74][2] = "Reglamento (UE) n.&ordm; 527/2013.";
 choices[74][3] = "Reglamento (UE) n.&ordm; 810/2014.";
 answers[74] = choices[74][0];
 units[74] = "30";
 comments[74] = "Id Pregunta: 10690. ";


//  Id pregunta: 10694 AÃ±o de creación de pregunta: 2015-01-01
 questions[75]= "76)  Seg&uacute;n la Ley 39/2015 son interesados:";
 choices[75]= new Array();
 choices[75][0] = "Quienes lo promuevan como titulares de derechos o intereses leg&iacute;timos individuales o colectivos.";
 choices[75][1] = "Los que, sin haber iniciado el procedimiento, tengan derechos que puedan resultar afectados por la decisi&oacute;n que en el mismo se adopte.";
 choices[75][2] = "Aquellos cuyos intereses leg&iacute;timos, individuales o colectivos, puedan resultar afectados por la resoluci&oacute;n y se personen en el procedimiento en tanto no haya reca&iacute;do resoluci&oacute;n definitiva.";
 choices[75][3] = "Todas las anteriores.";
 answers[75] = choices[75][3];
 units[75] = "30";
 comments[75] = "Id Pregunta: 10694. ";


//  Id pregunta: 10707 AÃ±o de creación de pregunta: 2015-01-01
 questions[76]= "77)  &iquest;Cu&aacute;l no es un componente del &iacute;ndice del expediente electr&oacute;nico?";
 choices[76]= new Array();
 choices[76][0] = "Fecha de generaci&oacute;n del &iacute;ndice.";
 choices[76][1] = "Descripci&oacute;n de los documentos electr&oacute;nicos.";
 choices[76][2] = "Disposici&oacute;n de los documentos en carpetas.";
 choices[76][3] = "Identificadores de los documentos electr&oacute;nicos.";
 answers[76] = choices[76][1];
 units[76] = "43";
 comments[76] = "Id Pregunta: 10707. ";


//  Id pregunta: 10712 AÃ±o de creación de pregunta: 2015-01-01
 questions[77]= "78)  &iquest;Cu&aacute;l no es seg&uacute;n la NTI de Modelo de Datos para el Intercambio de asientos entre las entidades registrales una caracter&iacute;stica de la misma?";
 choices[77]= new Array();
 choices[77][0] = "Inclusi&oacute;n de metadatos que faciliten el intercambio de asientos.";
 choices[77][1] = "Incorporaci&oacute;n de ficheros adjuntos a los intercambios.";
 choices[77][2] = "Orientaci&oacute;n a arquitecturas de intermediaci&oacute;n.";
 choices[77][3] = "Mejora en los mecanismos de control del intercambio.";
 answers[77] = choices[77][0];
 units[77] = "43";
 comments[77] = "Id Pregunta: 10712. ";


//  Id pregunta: 10717 AÃ±o de creación de pregunta: 2015-01-01
 questions[78]= "79)  &iquest;Qu&eacute; aspecto no es necesario incluir en una pol&iacute;tica de firma basada en certificados seg&uacute;n la NTI de firma electr&oacute;nica?";
 choices[78]= new Array();
 choices[78][0] = "Definici&oacute;n del alcance y &aacute;mbito de aplicaci&oacute;n.";
 choices[78][1] = "Datos para la identificaci&oacute;n del documento y del responsable de su gesti&oacute;n.";
 choices[78][2] = "Reglas de confianza, que incluir&aacute;n los requisitos establecidos para certificados, sellos de tiempo y firmas longevas.";
 choices[78][3] = "Todas las anteriores se deben incluir.";
 answers[78] = choices[78][3];
 units[78] = "43";
 comments[78] = "Id Pregunta: 10717. ";


//  Id pregunta: 10723 AÃ±o de creación de pregunta: 2015-01-01
 questions[79]= "80)  Seg&uacute;n la NTI de Protocolos de intermediaci&oacute;n de datos, dentro del Rol de la Plataforma de intermediaci&oacute;n del Ministerio de Hacienda y Administraciones P&uacute;blicas no se contempla:";
 choices[79]= new Array();
 choices[79][0] = "Gestionar los Cesionarios y Requirentes seg&uacute;n las condiciones establecidas por cada Cedente.";
 choices[79][1] = "Almacenar la informaci&oacute;n personal de cualquier transacci&oacute;n de intercambio de datos.";
 choices[79][2] = "Asegurar la confidencialidad e integridad de la informaci&oacute;n intercambiada a trav&eacute;s de los mecanismos correspondientes.";
 choices[79][3] = "Mantener un portal web informativo con toda la documentaci&oacute;n relativa a la Plataforma.";
 answers[79] = choices[79][1];
 units[79] = "43";
 comments[79] = "Id Pregunta: 10723. ";


//  Id pregunta: 10757 AÃ±o de creación de pregunta: 2015-01-01
 questions[80]= "81)  &iquest;En cu&aacute;l de los siguientes puede participar actores del sector privado? ";
 choices[80]= new Array();
 choices[80][0] = "El Consejo de Seguridad Nacional.";
 choices[80][1] = "El Comit&eacute; Especializado de Ciberseguridad.";
 choices[80][2] = "El Comit&eacute; Especializado de Situaci&oacute;n.";
 choices[80][3] = "El Consejo Ejecutivo de Ciberseguridad.";
 answers[80] = choices[80][1];
 units[80] = "43";
 comments[80] = "Id Pregunta: 10757. ";


//  Id pregunta: 10760 AÃ±o de creación de pregunta: 2015-01-01
 questions[81]= "82)  &iquest;Qu&eacute; serie CCN-STIC establece las pol&iacute;ticas y procedimientos adecuados para la implementaci&oacute;n de las medidas contempladas en el Esquema Nacional de Seguridad?";
 choices[81]= new Array();
 choices[81][0] = "500";
 choices[81][1] = "600";
 choices[81][2] = "700";
 choices[81][3] = "800";
 answers[81] = choices[81][3];
 units[81] = "43";
 comments[81] = "Id Pregunta: 10760. ";


//  Id pregunta: 10762 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  Seg&uacute;n las definiciones establecidas en las gu&iacute;as CCN-STIC &iquest;Qu&eacute; es la &quot;Manifestaci&oacute;n  escrita  de  los  &oacute;rganos  o  entidades  de derecho  p&uacute;blico,  firmada  por  su responsable, mediante la que se da publicidad que los sistemas a que  se refieren cumplen con  las  exigencias  del  Esquema  Nacional  de  Seguridad  aprobado  por  Real  Decreto 3/2010, de 8 de enero&quot;?";
 choices[82]= new Array();
 choices[82][0] = "Informe de auditor&iacute;a";
 choices[82][1] = "Declaraci&oacute;n de conformidad";
 choices[82][2] = "Aceptaci&oacute;n del esquema de seguridad";
 choices[82][3] = "Formalizaci&oacute;n de la conformidad";
 answers[82] = choices[82][1];
 units[82] = "43";
 comments[82] = "Id Pregunta: 10762. ";


//  Id pregunta: 10781 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  En el Real Decreto 3/2010, Esquema Nacional de Seguridad, se define como &quot;la propiedad o caracter&iacute;stica consistente en que las actuaciones de una entidad pueden ser imputadas exclusivamente a dicha entidad&quot; a la:";
 choices[83]= new Array();
 choices[83][0] = "Confidencialidad.";
 choices[83][1] = "Integridad.";
 choices[83][2] = "Autenticidad.";
 choices[83][3] = "Trazabilidad.";
 answers[83] = choices[83][3];
 units[83] = "43";
 comments[83] = "Id Pregunta: 10781. Examen GSI 2014";


//  Id pregunta: 10923 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  Respecto al Registro Electr&oacute;nico Com&uacute;n (REC), se&ntilde;ale la respuesta correcta:";
 choices[84]= new Array();
 choices[84][0] = "El REC debe admitir cualquier solicitud, escrito o comunicaci&oacute;n dirigida a cualquiera de las Administraciones P&uacute;blicas espa&ntilde;olas.";
 choices[84][1] = "La presentaci&oacute;n de solicitudes dirigidas a entidades que no hayan sido activadas en el REC se tendr&aacute; por no realizada.";
 choices[84][2] = "El REC podr&aacute; ser habilitado para la remisi&oacute;n, recepci&oacute;n e intercambio de solicitudes de la competencia de las Administraciones Auton&oacute;micas y Locales, en la forma que se determine en los correspondientes Convenios.";
 choices[84][3] = "En coordinaci&oacute;n con las Administraciones destinatarias, el Ministerio de Hacienda y Administraciones P&uacute;blicas ser&aacute; responsable de la custodia y manejo de todos los ficheros generados por el REC.";
 answers[84] = choices[84][2];
 units[84] = "44";
 comments[84] = "Id Pregunta: 10923. TIC A1 AGE 2014";


//  Id pregunta: 10973 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  &iquest;En virtud de qu&eacute; instrumento jur&iacute;dico se aprueban y publican las Normas T&eacute;cnicas de Interoperabilidad?";
 choices[85]= new Array();
 choices[85][0] = "Orden Ministerial del Ministro de Hacienda y Administraciones P&uacute;blicas.";
 choices[85][1] = "Resoluci&oacute;n del Secretario de Estado de Presidencia.";
 choices[85][2] = "Resoluci&oacute;n del Secretario de Estado de Administraciones P&uacute;blicas.";
 choices[85][3] = "Reglamento del Ministerio de Hacienda y Administraciones P&uacute;blicas.";
 answers[85] = choices[85][2];
 units[85] = "43";
 comments[85] = "Id Pregunta: 10973. TIC A1 AGE 2014";


//  Id pregunta: 10990 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  La Agenda Digital para Europa, iniciativa de la estrategia Europa 2020 puesta en marcha por la Comisi&oacute;n Europea:";
 choices[86]= new Array();
 choices[86][0] = "Establece la ZUPE (Zona &Uacute;nica de Prestaciones para Empresas), que supondr&aacute; la interconexi&oacute;n de plataformas de apoyo al Emprendedor, permitiendo la presentaci&oacute;n de tr&aacute;mites de inicio de actividad para todo el territorio europeo.";
 choices[86][1] = "Establece medidas para que, en el a&ntilde;o 2020, el 75% de los hogares europeos est&eacute;n abonados a conexiones de internet por encima de los 100 Mbps.";
 choices[86][2] = "Establece el objetivo de equipar a los europeos con un acceso en l&iacute;nea seguro a sus datos m&eacute;dicos en 2017.";
 choices[86][3] = "Propone que, para 2020, los pa&iacute;ses miembros deber&iacute;an duplicar el gasto p&uacute;blico anual total en investigaci&oacute;n y desarrollo de las TIC.";
 answers[86] = choices[86][3];
 units[86] = "30";
 comments[86] = "Id Pregunta: 10990. TIC A1 AGE 2014";


//  Id pregunta: 11013 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  &iquest;Cu&aacute;l es el portal nacional que organiza y gestiona el Cat&aacute;logo de Informaci&oacute;n P&uacute;blica de la Administraci&oacute;n General del Estado?";
 choices[87]= new Array();
 choices[87][0] = "www.datos.gob.es";
 choices[87][1] = "www.rediris.es";
 choices[87][2] = "www.pae.es";
 choices[87][3] = "administracionelectronica.gob.es";
 answers[87] = choices[87][0];
 units[87] = "30";
 comments[87] = "Id Pregunta: 11013. ";


//  Id pregunta: 11014 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  &iquest;Cu&aacute;ntos servicios se incluyen en la primera Declaracion de Servicios Compartidos por parte de la Comisi&oacute;n de Estrategia TIC en Septiembre de 2015?";
 choices[88]= new Array();
 choices[88][0] = "12";
 choices[88][1] = "14";
 choices[88][2] = "16";
 choices[88][3] = "10";
 answers[88] = choices[88][1];
 units[88] = "30";
 comments[88] = "Id Pregunta: 11014. ";


//  Id pregunta: 11015 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  &iquest;Cu&aacute;l de los siguientes no est&aacute; incluido dentro de la primera Declaraci&oacute;n de Servicios Compartidos realizada por la Comisi&oacute;n de Estrategia TIC en Septiembre de 2015?";
 choices[89]= new Array();
 choices[89][0] = "Servicio unificado de radiocomunicaciones";
 choices[89][1] = "Servicio de alojamiento de infraestructuras TIC";
 choices[89][2] = "Servicio de gesti&oacute;n de notificaciones";
 choices[89][3] = "Servicio de gesti&oacute;n de n&oacute;mina";
 answers[89] = choices[89][0];
 units[89] = "30";
 comments[89] = "Id Pregunta: 11015. El servicio incluido es el unificado de telecomunicaciones";


//  Id pregunta: 11103 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  Seleccione la opci&oacute;n verdadera respecto al Servicio de Verificaci&oacute;n de Datos de Identidad";
 choices[90]= new Array();
 choices[90][0] = "Permite confirmar o verificar que un determinado conjunto de datos corresponden al n&uacute;mero de identificaci&oacute;n introducido por el usuario.";
 choices[90][1] = "La validaci&oacute;n de dichos datos se realiza contra las Bases de Datos del organismo que los custodia: Direcci&oacute;n General Polic&iacute;a (DGP).";
 choices[90][2] = "Las respuestas a) y b) son falsas";
 choices[90][3] = "Las respuestas a) y b) son verdaderas";
 answers[90] = choices[90][3];
 units[90] = "30";
 comments[90] = "Id Pregunta: 11103. ";


//  Id pregunta: 11113 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Indique qu&eacute; tipos de entidades pueden conectarse a la Red Sara:";
 choices[91]= new Array();
 choices[91][0] = "Organismo p&uacute;blicos";
 choices[91][1] = "Ministerios";
 choices[91][2] = "Comunidades Aut&oacute;nomas";
 choices[91][3] = "Todas las anteriores";
 answers[91] = choices[91][3];
 units[91] = "30";
 comments[91] = "Id Pregunta: 11113. ";


//  Id pregunta: 11114 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l no es un requisito para integrarse en la plataforma de intermediaci&oacute;n?";
 choices[92]= new Array();
 choices[92][0] = "Estar conectado a Red SARA.";
 choices[92][1] = "Disponer de certificados X509 de sello de &oacute;rgano.";
 choices[92][2] = "Disponer de un Servicio Web integrado para la gesti&oacute;n automatizada del tr&aacute;mite";
 choices[92][3] = "Tener un convenio firmado para el intercambio bilateral de datos.";
 answers[92] = choices[92][1];
 units[92] = "30";
 comments[92] = "Id Pregunta: 11114. ";


//  Id pregunta: 11118 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Cu&aacute;l de los siguientes no es un derecho de los ciudadanos de acuerdo con la ley 11/2007?";
 choices[93]= new Array();
 choices[93][0] = "A relacionarse directamente con las AAPP.";
 choices[93][1] = "A no aportar datos y documentos que obren en poder de las Administraciones P&uacute;blicas";
 choices[93][2] = "A la conservaci&oacute;n en formato electr&oacute;nico por las Administraciones P&uacute;blicos de los documentos electr&oacute;nicos que formen parte de un expediente por duplicado";
 choices[93][3] = "A elegir en cada momento el canal a trav&eacute;s del cual se relacionen con la Administraci&oacute;n";
 answers[93] = choices[93][2];
 units[93] = "43";
 comments[93] = "Id Pregunta: 11118. ";


//  Id pregunta: 11195 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l de las siguientes iniciativas de la Estrategia Europa 2020 hace referencia al objetivo de crecimiento inteligente?";
 choices[94]= new Array();
 choices[94][0] = "Juventud en movimiento";
 choices[94][1] = "Uni&oacute;n por la innovaci&oacute;n";
 choices[94][2] = "Agenda Digital para Europa";
 choices[94][3] = "Todas las anteriores";
 answers[94] = choices[94][3];
 units[94] = "30";
 comments[94] = "Id Pregunta: 11195. ";


//  Id pregunta: 11205 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de la Agenda Digital Espa&ntilde;ola?";
 choices[95]= new Array();
 choices[95][0] = "Confianza Digital";
 choices[95][1] = "Econom&iacute;a Digital e Internacionalizaci&oacute;n";
 choices[95][2] = "Impulsar i+d TIC";
 choices[95][3] = "Impulso de los servicios p&uacute;blicos digitales";
 answers[95] = choices[95][3];
 units[95] = "30";
 comments[95] = "Id Pregunta: 11205. ";


//  Id pregunta: 11499 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Seg&uacute;n el Esquema Nacional de Seguridad, las Instrucciones T&eacute;cnicas de Seguridad ";
 choices[96]= new Array();
 choices[96][0] = "Son aspectos que pueden ser aplicados por parte de las Administraciones p&uacute;blicas";
 choices[96][1] = "Son aspectos que obligatoriamente deben ser aplicados por parte de las Administraciones P&uacute;blicas ";
 choices[96][2] = "Algunas Instrucciones de Seguridad son de aplicaci&oacute;n preceptiva y otras de aplicaci&oacute;n facultativa.";
 choices[96][3] = "Ninguna de las anteriores.";
 answers[96] = choices[96][1];
 units[96] = "43";
 comments[96] = "Id Pregunta: 11499. Instrucci&oacute;n t&eacute;cnica de seguridad introducido por la disp. Adicional 4&ordf; RD 951/2015 que modifica el ENS.";


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


//  Id pregunta: 11764 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Se ha publicado la Estrategia TIC?";
 choices[99]= new Array();
 choices[99][0] = "No";
 choices[99][1] = "No est&aacute; previsto";
 choices[99][2] = "Si, en septiembre de 2015.";
 choices[99][3] = "Si, en septiembre de 2014.";
 answers[99] = choices[99][2];
 units[99] = "43";
 comments[99] = "Id Pregunta: 11764. ";


