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

//  Id pregunta: 27 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de entre las siguientes es una condici&oacute;n indispensable para la creaci&oacute;n de un fichero de las Administraciones P&uacute;blicas?:";
 choices[0]= new Array();
 choices[0][0] = "La existencia de un C&oacute;digo Tipo regulando su uso";
 choices[0][1] = "La aprobaci&oacute;n de dicha creaci&oacute;n mediante Acuerdo del Consejo de Ministros";
 choices[0][2] = "La publicaci&oacute;n de una disposici&oacute;n general en el &quot;Bolet&iacute;n Oficial del Estado&quot; o diario oficial correspondiente";
 choices[0][3] = "Una resoluci&oacute;n del Director de la Agencia de Protecci&oacute;n de Datos autoriz&aacute;ndola";
 answers[0] = choices[0][2];
 units[0] = "29";
 comments[0] = "Id Pregunta: 27. ";


//  Id pregunta: 140 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  El director de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos tiene la consideraci&oacute;n de alto cargo. Se nombra mediante Real Decreto por un periodo de:";
 choices[1]= new Array();
 choices[1][0] = "4 a&ntilde;os";
 choices[1][1] = "5 a&ntilde;os";
 choices[1][2] = "6 a&ntilde;os";
 choices[1][3] = "Ninguno de los anteriores";
 answers[1] = choices[1][0];
 units[1] = "29";
 comments[1] = "Id Pregunta: 140. ";


//  Id pregunta: 165 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  El T&iacute;tulo II de la LOPD trata sobre:";
 choices[2]= new Array();
 choices[2][0] = "Principios de la protecci&oacute;n de datos";
 choices[2][1] = "Derechos de las personas";
 choices[2][2] = "Movimiento internacional de datos";
 choices[2][3] = "Agencia de Protecci&oacute;n de Datos";
 answers[2] = choices[2][0];
 units[2] = "29";
 comments[2] = "Id Pregunta: 165. ";


//  Id pregunta: 256 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  Entre los vocales del Consejo Consultivo de la Agencia de Protecci&oacute;n de Datos existir&aacute;:";
 choices[3]= new Array();
 choices[3][0] = "Un diputado nombrado a propuesta del Congreso de los Diputados y un senador nombrado a propuesta del Senado";
 choices[3][1] = "Un vocal nombrado a propuesta del Consejo Superior de Inform&aacute;tica";
 choices[3][2] = "Un magistrado nombrado a propuesta del Consejo General del Poder Judicial";
 choices[3][3] = "Un abogado del Estado";
 answers[3] = choices[3][0];
 units[3] = "29";
 comments[3] = "Id Pregunta: 256. ";


//  Id pregunta: 315 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  La Ley Org&aacute;nica 15/99 de Protecci&oacute;n de Datos de Car&aacute;cter Personal incluye como posibles sujetos del r&eacute;gimen sancionador:";
 choices[4]= new Array();
 choices[4][0] = "S&oacute;lo al responsable del fichero";
 choices[4][1] = "S&oacute;lo al encargado del tratamiento";
 choices[4][2] = "Al responsable del fichero y al encargado del tratamiento";
 choices[4][3] = "La Ley 15/99 no regula el r&eacute;gimen sancionador";
 answers[4] = choices[4][2];
 units[4] = "29";
 comments[4] = "Id Pregunta: 315. ";


//  Id pregunta: 370 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  Los ficheros automatizados de los que sean titulares las Cortes Generales, el Defensor del Pueblo, el Tribunal de Cuentas, el Consejo General del Poder Judicial y el Tribunal Constitucional , seg&uacute;n la Ley de Protecci&oacute;n de Datos:";
 choices[5]= new Array();
 choices[5][0] = "Caen dentro del &aacute;mbito de aplicaci&oacute;n de la misma";
 choices[5][1] = "Caen dentro del &aacute;mbito de aplicaci&oacute;n de la misma, pero no les ser&aacute; de aplicaci&oacute;n el r&eacute;gimen de protecci&oacute;n de datos";
 choices[5][2] = "Se regir&aacute;n por sus disposiciones espec&iacute;ficas";
 choices[5][3] = "No les ser&aacute; de aplicaci&oacute;n lo dispuesto en los T&iacute;tulos VI y VII de la misma";
 answers[5] = choices[5][0];
 units[5] = "29";
 comments[5] = "Id Pregunta: 370. ";


//  Id pregunta: 467 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Un ejemplo de infracci&oacute;n grave es:";
 choices[6]= new Array();
 choices[6][0] = "proceder a la recogida de datos de car&aacute;cter personal de los propios afectados sin proporcionarles la informaci&oacute;n que se&ntilde;ala el art&iacute;culo 5 de la presente ley";
 choices[6][1] = "Proceder a la creaci&oacute;n de ficheros de titularidad p&uacute;blica o iniciar la recogida de datos de car&aacute;cter personal para los mismos, sin autorizaci&oacute;n de disposici&oacute;n general, publicada en el Bolet&iacute;n Oficial del Estado o diario oficial correspondiente.";
 choices[6][2] = "la recogida de datos en forma enga&ntilde;osa y fraudulenta";
 choices[6][3] = "No cesar en el tratamiento il&iacute;cito de datos  de car&aacute;cter personal cuando existiese un requerimiento previo del  Director de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos para ello.";
 answers[6] = choices[6][1];
 units[6] = "29";
 comments[6] = "Id Pregunta: 467. NULL";


//  Id pregunta: 508 AÃ±o de creación de pregunta: 2003-01-01
 questions[7]= "8)  La Ley Org&aacute;nica 15/1999 establece, en el apartado 2 del art&iacute;culo 22, las condiciones bajo las que las Fuerzas y Cuerpos de Seguridad pueden tratar datos personales con fines policiales sin estar sujetos a la ley:";
 choices[7]= new Array();
 choices[7][0] = "Cuando cuenten con la preceptiva autorizaci&oacute;n del Ministerio del Interior";
 choices[7][1] = "No existen excepciones. Se requiere obligatoriamente el consentimiento expreso del afectado";
 choices[7][2] = "Cuando resulte necesario para la prevenci&oacute;n de un peligro real para la seguridad p&uacute;blica o para la represi&oacute;n de infracciones penales";
 choices[7][3] = "Cuando lo autorice un juez";
 answers[7] = choices[7][2];
 units[7] = "29";
 comments[7] = "Id Pregunta: 508. ";


//  Id pregunta: 509 AÃ±o de creación de pregunta: 2003-01-01
 questions[8]= "9)  La LOPD, en su art 5 sobre el Derecho de Informaci&oacute;n en la recogida de datos, indica que los interesados han de estar informados de la posibilidad de ejercitar varios derechos sobre sus datos. Indicar la falsa:";
 choices[8]= new Array();
 choices[8][0] = "Acceso";
 choices[8][1] = "Certificaci&oacute;n";
 choices[8][2] = "Rectificaci&oacute;n";
 choices[8][3] = "Cancelaci&oacute;n";
 answers[8] = choices[8][1];
 units[8] = "29";
 comments[8] = "Id Pregunta: 509. ";


//  Id pregunta: 555 AÃ±o de creación de pregunta: 2004-01-01
 questions[9]= "10)  Un fichero automatizado con  (DNI, Nombre, Apellidos, Domicilio, Titulaci&oacute;n Acad&eacute;mica, Grado y Tipo de Minusval&iacute;a) requiere medidas de tipo:";
 choices[9]= new Array();
 choices[9][0] = "B&aacute;sico";
 choices[9][1] = "Medio";
 choices[9][2] = "Alto";
 choices[9][3] = "Cr&iacute;tico";
 answers[9] = choices[9][2];
 units[9] = "29";
 comments[9] = "Id Pregunta: 555. Junta Andaluc&iacute;a 2002";


//  Id pregunta: 597 AÃ±o de creación de pregunta: 2006-01-01
 questions[10]= "11)  Cual de las siguientes fuentes no tiene consideraci&oacute;n de fuente de acceso p&uacute;blico seg&uacute;n laLOPD:";
 choices[10]= new Array();
 choices[10][0] = "El censo promocional.";
 choices[10][1] = "Los repertorios telef&oacute;nicos sin restricciones.";
 choices[10][2] = "Los diarios y boletines oficiales.";
 choices[10][3] = "Medios de comunicaci&oacute;n.";
 answers[10] = choices[10][1];
 units[10] = "29";
 comments[10] = "Id Pregunta: 597. ";


//  Id pregunta: 599 AÃ±o de creación de pregunta: 2006-01-01
 questions[11]= "12)  Seg&uacute;n lo establecido en la ley Org&aacute;nica 15/1999, de 13 de diciembre, de protecci&oacute;n de datos de car&aacute;cter personal (LOPD). &iquest;Cual de los siguientes son principios de protecci&oacute;n de datos?";
 choices[11]= new Array();
 choices[11][0] = "Calidad de datos y derecho de Informaci&oacute;n en la recogida ";
 choices[11][1] = "Acceso, rectificaci&oacute;n y cancelaci&oacute;n ";
 choices[11][2] = "Acceso y calidad de datos";
 choices[11][3] = "Notificaci&oacute;n de ficheros";
 answers[11] = choices[11][0];
 units[11] = "29";
 comments[11] = "Id Pregunta: 599. ";


//  Id pregunta: 603 AÃ±o de creación de pregunta: 2006-01-01
 questions[12]= "13)  &iquest;La prestaci&oacute;n de servicios por parte de terceros a las Administraciones P&uacute;blicas, cuando implica un tratamiento de datos (Art. 12 LOPD), exige";
 choices[12]= new Array();
 choices[12][0] = "Cumplir lo dispuesto en la Ley de Contratos de las Administraciones P&uacute;blicas";
 choices[12][1] = "Adem&aacute;s de cumplir lo dispuesto en otras leyes, deber&aacute; incorporar los requisitos formales exigibles al encargado del tratamiento";
 choices[12][2] = "Crear una persona jur&iacute;dica distinta sujeto al derecho privado";
 choices[12][3] = "Realizar copias de seguridad de los datos";
 answers[12] = choices[12][1];
 units[12] = "29";
 comments[12] = "Id Pregunta: 603. ";


//  Id pregunta: 1499 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  La Ley de Servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico, Ley 34/2002:";
 choices[13]= new Array();
 choices[13][0] = "Favorece la celebraci&oacute;n de contratos por v&iacute;a electr&oacute;nica, al asegurar la equivalencia entre los documentos en soporte papel y los documentos electr&oacute;nicos";
 choices[13][1] = "Es una ley pionera, pues se adelant&oacute; en varios meses a la directiva sobre el comercio electr&oacute;nico";
 choices[13][2] = "No incluye previsiones orientadas a hacer efectiva la accesibilidad de las personas con discapacidad a la informaci&oacute;n proporcionada por medios electr&oacute;nicos, remiti&eacute;ndose al desarrollo normativo posterior";
 choices[13][3] = "Prohibe expresamente el env&iacute;o por correo u otras v&iacute;as de comunicaci&oacute;n electr&oacute;nica equivalente de comunicaciones comerciales, para evitar el spamming";
 answers[13] = choices[13][0];
 units[13] = "30";
 comments[13] = "Id Pregunta: 1499. NULL";


//  Id pregunta: 4252 AÃ±o de creación de pregunta: 2007-01-01
 questions[14]= "15)  Respecto al avance de la Sociedad de la Informaci&oacute;n en Espa&ntilde;a:";
 choices[14]= new Array();
 choices[14][0] = "El Plan Avanza contempla como l&iacute;neas de acci&oacute;n el avance en la e-inclusi&oacute;n y en el desarrollo de servicios p&uacute;blicos digitales, pero no entra en materias como el fomento de la competitividad y la innovaci&oacute;n en Espa&ntilde;a.";
 choices[14][1] = "El Plan Avanza constituye uno de los ejes del programa Ingenio 2010.";
 choices[14][2] = "El Plan Avanza del Ministerio de Industria busca la convergencia con Europea en materia de Sociedad de la Informaci&oacute;n, pero desmarc&aacute;ndose notablemente de los objetivos que se plantearon en la Estrategia de Lisboa.";
 choices[14][3] = "El Plan Avanza, lanzado por el Ministerio de Administraciones P&uacute;blicas, reduce su &aacute;mbito de aplicaci&oacute;n a la Administraci&oacute;n General del Estado.";
 answers[14] = choices[14][1];
 units[14] = "30";
 comments[14] = "Id Pregunta: 4252. ";


//  Id pregunta: 4253 AÃ±o de creación de pregunta: 2007-01-01
 questions[15]= "16)  Como parte de la legislaci&oacute;n y normativa espa&ntilde;ola para el impulso de la administraci&oacute;n electr&oacute;nica se incluye:";
 choices[15]= new Array();
 choices[15][0] = "La Ley 30/1992 de 26 de R&eacute;gimen Jur&iacute;dico de las Administraciones P&uacute;blicas y del Procedimiento Administrativo Com&uacute;n, que dedica un art&iacute;culo al impulso del empleo y aplicaci&oacute;n de las t&eacute;cnicas y medios electr&oacute;nicos, inform&aacute;ticos y telem&aacute;ticos, por parte de la Administraci&oacute;n";
 choices[15][1] = "El Real Decreto 1553/2005 por el que se regula la expedici&oacute;n del Documento Nacional de Identidad y sus certificados de firma electr&oacute;nica";
 choices[15][2] = "La Ley 24/2001, de 27 de diciembre, de Medidas Fiscales, Administrativas y del Orden Social, que regula el establecimiento de registros telem&aacute;ticos y  notificaciones telem&aacute;ticas";
 choices[15][3] = "Todas las anteriores";
 answers[15] = choices[15][3];
 units[15] = "30";
 comments[15] = "Id Pregunta: 4253. NULL";


//  Id pregunta: 4256 AÃ±o de creación de pregunta: 2007-01-01
 questions[16]= "17)  Cu&aacute;l de los siguientes programas NO pertenece al Plan Avanza";
 choices[16]= new Array();
 choices[16][0] = "Programa Ayuntamiento Digital, continuaci&oacute;n del Programa Ciudades Digitales que tiene como objetivo la promoci&oacute;n e implantaci&oacute;n de la Sociedad de la Informaci&oacute;n en Entidades Locales.";
 choices[16][1] = "El Plan Concilia, plan integral de conciliaci&oacute;n de la vida personal y laboral en la Administraci&oacute;n General del Estado.";
 choices[16][2] = "El Programa de Fomento de la Investigaci&oacute;n T&eacute;cnica (PROFIT), destinadas a estimular a las empresas y a otras entidades a llevar a cabo actividades de investigaci&oacute;n y desarrollo tecnol&oacute;gico.";
 choices[16][3] = "DNI electr&oacute;nico, dirigido a ampliar nuestras capacidades de actuar a distancia con las Administraciones P&uacute;blicas, con las empresas y con otros ciudadanos";
 answers[16] = choices[16][1];
 units[16] = "30";
 comments[16] = "Id Pregunta: 4256. Esta pregunta es muy antigua y con demasiado detalle para ser tan antigua, pero nunca se sabe.";


//  Id pregunta: 4469 AÃ±o de creación de pregunta: 2007-01-01
 questions[17]= "18)  Los contratos celebrados por v&iacute;a electr&oacute;nica en los que intervenga como parte un consumidor se presumir&aacute;n celebrados en:";
 choices[17]= new Array();
 choices[17][0] = "El lugar donde este establecido el prestador de servicios";
 choices[17][1] = "El lugar donde el consumidor tenga su residencia habitual.";
 choices[17][2] = "El lugar donde este establecida la Comisi&oacute;n Nacional de los Mercados y la Compentencia";
 choices[17][3] = "El lugar donde este establecido el Ministerio competente.";
 answers[17] = choices[17][1];
 units[17] = "30";
 comments[17] = "Id Pregunta: 4469. Ley 34/2002, art&iacute;culo 29";


//  Id pregunta: 4983 AÃ±o de creación de pregunta: 2003-01-01
 questions[18]= "19)  Los certificados electr&oacute;nicos reconocidos incorporados al Documento Nacional de Identidad tendr&aacute;n, deacuerdo con el Real Decreto 1553/2005, de 23 de diciembre, por la que se regula la expedici&oacute;n del DNI y suscertificados de firma electr&oacute;nica, un periodo de vigencia de:";
 choices[18]= new Array();
 choices[18][0] = "4 a&ntilde;os.";
 choices[18][1] = "24 meses.";
 choices[18][2] = "3 a&ntilde;os.";
 choices[18][3] = "30 meses.";
 answers[18] = choices[18][3];
 units[18] = "30";
 comments[18] = "Id Pregunta: 4983. Examen TIC B 2007 (RD 1553/2005, art&iacute;culo 12)";


//  Id pregunta: 5063 AÃ±o de creación de pregunta: 2003-01-01
 questions[19]= "20)  Se&ntilde;ale la respuesta correcta:";
 choices[19]= new Array();
 choices[19][0] = "Las resoluciones de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos son recurribles en alzada ante el Ministrode Industria, Turismo y Comercio";
 choices[19][1] = "Las resoluciones de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos no pueden ser objeto de recurso alguno";
 choices[19][2] = "Las resoluciones de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos agotan la via administrativa";
 choices[19][3] = "Por v&iacute;a reglamentaria se establecer&aacute; el sistema de recursos administrativos ante las resoluciones de laAgencia Espa&ntilde;ola de Protecci&oacute;n de Datos";
 answers[19] = choices[19][2];
 units[19] = "29";
 comments[19] = "Id Pregunta: 5063. Examen TIC A 2007";


//  Id pregunta: 5132 AÃ±o de creación de pregunta: 2003-01-01
 questions[20]= "21)  Seg&uacute;n la normativa de firma electr&oacute;nica de firma electr&oacute;nica, el per&iacute;odo de validez de los certificados reconocidos no podr&aacute; ser superior a:";
 choices[20]= new Array();
 choices[20][0] = "Un a&ntilde;o";
 choices[20][1] = "Dos a&ntilde;os";
 choices[20][2] = "Tres a&ntilde;os";
 choices[20][3] = "Cinco a&ntilde;os";
 answers[20] = choices[20][3];
 units[20] = "30";
 comments[20] = "Id Pregunta: 5132. Examen TIC A Castilla La Mancha 2007. Modificada seg&uacute;n Ley 9/2014";


//  Id pregunta: 5134 AÃ±o de creación de pregunta: 2003-01-01
 questions[21]= "22)  Seg&uacute;n el art&iacute;culo 21 de la Ley 34/2002, de 11 de Julio, de Servicios de la Sociedad de la Informaci&oacute;n y de Comercio electr&oacute;nico, las comunicaciones comerciales a trav&eacute;s de correo electr&oacute;nico:";
 choices[21]= new Array();
 choices[21][0] = "Est&aacute;n estrictamente prohibidas en todos los casos.";
 choices[21][1] = "Est&aacute;n permitidas si el destinatario de las mismas no manifiesta su oposici&oacute;n inequ&iacute;voca y expresa.";
 choices[21][2] = "Est&aacute;n permitidas en los casos previstos en la Ley Org&aacute;nica de Protecci&oacute;n de Datos.";
 choices[21][3] = "Est&aacute;n permitidas si han sido solicitadas o previamente autorizadas por los destinatarios de las mismas.";
 answers[21] = choices[21][3];
 units[21] = "30";
 comments[21] = "Id Pregunta: 5134. Examen TIC A Castilla La Mancha 2007";


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


//  Id pregunta: 5545 AÃ±o de creación de pregunta: 2003-01-01
 questions[23]= "24)  Se&ntilde;ale la respuesta correcta respecto del &aacute;mbito de aplicaci&oacute;n de la ley de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos:";
 choices[23]= new Array();
 choices[23][0] = "La ley 11/2007 aplica a las relaciones de ciudadanos y empresas con las Administraciones P&uacute;blicas y a las relaciones entre las propias Administraciones P&uacute;blicas.";
 choices[23][1] = "La ley 11/2007 aplica a las Administraciones P&uacute;blicas, entendiendo por tales, la Administraci&oacute;n General del Estado, Comunidades Aut&oacute;nomas y Entidades de la Administraci&oacute;n Local, as&iacute; como las entidades de derecho p&uacute;blico o privado vinculadas o dependientes de las mismas.";
 choices[23][2] = "a) y b) son ciertas";
 choices[23][3] = "a) y b) son falsas";
 answers[23] = choices[23][3];
 units[23] = "43";
 comments[23] = "Id Pregunta: 5545. La ley no diferencia &quot;ciudadanos y empresas&quot;, sino que habla de ciudadanos de modo gen&eacute;rico. Adem&aacute;s excluye las entidades de derecho privado.";


//  Id pregunta: 5650 AÃ±o de creación de pregunta: 2003-01-01
 questions[24]= "25)  Seg&uacute;n el RD 1720/2007, por el que se aprueba el desarrollo de la Ley Organica 15/1999 de protecci&oacute;n de datos de carater personal, ser&aacute; posible el tratamiento o la cesi&oacute;n de los datos de car&aacute;cter personal sin necesidad del consentimiento del interesado cuando";
 choices[24]= new Array();
 choices[24][0] = "En ningun caso. Siempre es necesario consentimiento del interesado.";
 choices[24][1] = "Lo autorice una norma con rango de ley o una norma dederecho comunitario.";
 choices[24][2] = "Los datos objeto de tratamiento o cesion figuran en fuentes accesibles al publico y el responsable del fichero tenga un interes legitimo para su conocimiento.";
 choices[24][3] = "La b) y la c) son correctas.";
 answers[24] = choices[24][3];
 units[24] = "29";
 comments[24] = "Id Pregunta: 5650. ";


//  Id pregunta: 5656 AÃ±o de creación de pregunta: 2003-01-01
 questions[25]= "26)  Seg&uacute;n el RD 1720/2007, se implantar&aacute;n, adem&aacute;s de las medidas de nivel medio, las de nivel alto, a los siguientes ficheros:";
 choices[25]= new Array();
 choices[25][0] = "Aquellos de los que sean responsables las entidades financieras, para finalidades relacionadas con la prestaci&oacute;n de servicios financieros";
 choices[25][1] = "Los que contengan o se refieran a datos recabados con fines policiales sin consentimiento de las personas afectadas";
 choices[25][2] = "Aquellos de los que sean responsables las Entidades Gestoras y Servicios Comunes de la Seguridad social y se relacionen con el ejercicio de sus competencias";
 choices[25][3] = "La a) y la b) son correctas";
 answers[25] = choices[25][1];
 units[25] = "29";
 comments[25] = "Id Pregunta: 5656. ";


//  Id pregunta: 5660 AÃ±o de creación de pregunta: 2003-01-01
 questions[26]= "27)  Seg&uacute;n el RD 1720/2007, &iquest;en que casos se necesita la autorizaci&oacute;n del responsable del fichero para la ejecucion de los procedimientos de recuperaci&oacute;n de los datos?";
 choices[26]= new Array();
 choices[26][0] = "nivel b&aacute;sico";
 choices[26][1] = "nivel medio";
 choices[26][2] = "nivel alto";
 choices[26][3] = "En ningun caso";
 answers[26] = choices[26][1];
 units[26] = "29";
 comments[26] = "Id Pregunta: 5660. ";


//  Id pregunta: 5742 AÃ±o de creación de pregunta: 2009-01-01
 questions[27]= "28)  En el &aacute;mbito de la Uni&oacute;n Europea, &iquest;tiene validez jur&iacute;dica la firma electr&oacute;nica?";
 choices[27]= new Array();
 choices[27][0] = "Solamente si es firma reconocida";
 choices[27][1] = "Solamente si es firma avanzada";
 choices[27][2] = "Siempre ser&aacute; admisible como prueba en el procedimiento judicial";
 choices[27][3] = "Ninguna de las anteriores es correcta";
 answers[27] = choices[27][2];
 units[27] = "30";
 comments[27] = "Id Pregunta: 5742. Directiva 1999/93/CE y Reglamento 910/2014, consideraci&oacute;n 61)";


//  Id pregunta: 5770 AÃ±o de creación de pregunta: 2009-01-01
 questions[28]= "29)  El Titulo III de la LOPD se refiere a los &ldquo;derechos de las personas&rdquo;, sin embargo en el TITULO II se recoge otro derecho relacionado con los Principios de la Protecci&oacute;n de datos que es:";
 choices[28]= new Array();
 choices[28][0] = "Oposici&oacute;n";
 choices[28][1] = "Cancelaci&oacute;n";
 choices[28][2] = "Revisi&oacute;n";
 choices[28][3] = "Informaci&oacute;n";
 answers[28] = choices[28][3];
 units[28] = "29";
 comments[28] = "Id Pregunta: 5770. ";


//  Id pregunta: 5796 AÃ±o de creación de pregunta: 2009-01-01
 questions[29]= "30)  Seg&uacute;n la ley 11/2007 de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, los ciudadanos podr&aacute;n utilizar diferentes sistemas de firma electr&oacute;nica para relacionarse con las Administraciones P&uacute;blicas, de acuerdo con lo que cada Administraci&oacute;n determine. Seleccione la respuesta FALSA:";
 choices[29]= new Array();
 choices[29][0] = "Sistemas de firma electr&oacute;nica avanzada basados en certificados electr&oacute;nicos reconocidos. Las administraciones deber&aacute;n admitir todos los certificados de los prestadores incluidos en la TSL publicada en la sede electr&oacute;nica de MINETUR.";
 choices[29][1] = "En todo caso, los sistemas de firma electr&oacute;nica incorporados al DNI, para personas f&iacute;sicas.";
 choices[29][2] = "Otros sistemas de firma electr&oacute;nica, como la utilizaci&oacute;n de claves concertadas en un registro previo como usuario, la aportaci&oacute;n de informaci&oacute;n conocida por ambas partes u otros sistemas no criptogr&aacute;ficos, en los t&eacute;rminos y condiciones que en cada caso se determinen.";
 choices[29][3] = "Sistemas que permitan la identidad privada mediante un sistema criptogr&aacute;fico de clave publica reconocido por @firma.";
 answers[29] = choices[29][3];
 units[29] = "43";
 comments[29] = "Id Pregunta: 5796. MAP 2008 A2. Actualizada a modificaci&oacute;n art 13 Ley 11/2007 por Ley 15/2014.";


//  Id pregunta: 5843 AÃ±o de creación de pregunta: 2009-01-01
 questions[30]= "31)  La Ley 11/2007 de acceso electr&oacute;nico de los ciudadanos a los Servicios P&uacute;blicos:";
 choices[30]= new Array();
 choices[30][0] = "Prev&eacute; que los ciudadanos se relacionen con dichas administraciones siempre que usen para ello los sistemas de firma electr&oacute;nica incorporados al Documento Nacional de Identidad";
 choices[30][1] = "Establece la creaci&oacute;n de registros electr&oacute;nicos por las Administraciones P&uacute;blicas, que admitir&aacute;n exclusivamente documentos electr&oacute;nicos normalizados y cumplimentados de acuerdo con formatos preestablecidos";
 choices[30][2] = "Es de aplicaci&oacute;n exclusivamente a los ciudadanos en sus relaciones con las Administraciones P&uacute;blicas";
 choices[30][3] = "Establece que la publicaci&oacute;n del BOE en la sede electr&oacute;nica del organismo competente tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as establecidas reglamentariamente.";
 answers[30] = choices[30][3];
 units[30] = "43";
 comments[30] = "Id Pregunta: 5843. MAP 2008 A1";


//  Id pregunta: 6120 AÃ±o de creación de pregunta: 2010-01-01
 questions[31]= "32)  &iquest;Puede la Agencia de Protecci&oacute;n de Datos, en el ejercicio de sus competencias, inspeccionar un fichero de titularidad p&uacute;blica de un Ministerio, examinando adem&aacute;s el equipo o equipos f&iacute;sicos en el que se halle el fichero?";
 choices[31]= new Array();
 choices[31][0] = "No, porque carece de competencias sobre ficheros de titularidad p&uacute;blica, y s&oacute;lo puede inspeccionar los de titularidad privada.";
 choices[31][1] = "No, porque los Ministerios son autoridades p&uacute;blicas y solo pueden ser inspeccionados por la Inspecci&oacute;n General de Servicios del Ministerio de la Presidencia. ";
 choices[31][2] = "S&iacute;, puede hacer la inspecci&oacute;n, pero s&oacute;lo si lo solicita el Ministerio correspondiente, no siendo admisible una inspecci&oacute;n de oficio.";
 choices[31][3] = "S&iacute;, puede hacer la inspecci&oacute;n conforme a sus competencias.";
 answers[31] = choices[31][3];
 units[31] = "29";
 comments[31] = "Id Pregunta: 6120. TIC A 2009";


//  Id pregunta: 6187 AÃ±o de creación de pregunta: 2010-01-01
 questions[32]= "33)  Seg&uacute;n el Real Decreto 3/2010, los sistemas existentes a la entrada en vigor del Real Decreto disponen de un plazo de adecuaci&oacute;n de";
 choices[32]= new Array();
 choices[32][0] = "Doce meses desde la entrada en vigor";
 choices[32][1] = "Doce meses desde la entrada en vigor, pudiendo ampliarse hasta 48 meses desde la entrada en vigor";
 choices[32][2] = "Doce meses desde la entrada en vigor, pudiendo ampliarse hasta 48 meses adicionales";
 choices[32][3] = "Doce meses desde la entrada en vigor, pudiendo ampliarse hasta 48 meses desde la aprobaci&oacute;n del plan de adecuaci&oacute;n";
 answers[32] = choices[32][1];
 units[32] = "43";
 comments[32] = "Id Pregunta: 6187. Disposicion transitoria";


//  Id pregunta: 6188 AÃ±o de creación de pregunta: 2010-01-01
 questions[33]= "34)  El Esquema Nacional de Seguridad establece que los sistemas han de ser objeto de una auditor&iacute;a regular ordinaria al menos";
 choices[33]= new Array();
 choices[33][0] = "Cada 6 meses";
 choices[33][1] = "Cada a&ntilde;o";
 choices[33][2] = "Cada 2 a&ntilde;os";
 choices[33][3] = "El Esquema Nacional de Seguridad no especifica nada respecto a auditor&iacute;as";
 answers[33] = choices[33][2];
 units[33] = "43";
 comments[33] = "Id Pregunta: 6188. Art&iacute;culo 34. ";


//  Id pregunta: 6364 AÃ±o de creación de pregunta: 2010-01-01
 questions[34]= "35)  De acuerdo con el Esquema Nacional de Seguridad, el sistema ha de disponer de una estrategia de protecci&oacute;n constituida por m&uacute;ltiples capas de seguridad, dispuesta de forma que, cuando una de las capas falle, permita:";
 choices[34]= new Array();
 choices[34][0] = "Ganar tiempo para una reacci&oacute;n adecuada frente a los incidentes que no han podido evitarse.";
 choices[34][1] = "Reducir la probabilidad de que el sistema sea comprometido en su conjunto.";
 choices[34][2] = "Minimizar el impacto final sobre el mismo.";
 choices[34][3] = "Todas las anteriores";
 answers[34] = choices[34][3];
 units[34] = "43";
 comments[34] = "Id Pregunta: 6364. Art&iacute;culo 8 ENS";


//  Id pregunta: 6374 AÃ±o de creación de pregunta: 2010-01-01
 questions[35]= "36)  &iquest;Qu&eacute; Real Decreto define el Esquema Nacional de Interoperabilidad?";
 choices[35]= new Array();
 choices[35][0] = "RD 4/2010";
 choices[35][1] = "RD 1671/2009";
 choices[35][2] = "RD 4/2009";
 choices[35][3] = "RD 1671/2007";
 answers[35] = choices[35][0];
 units[35] = "43";
 comments[35] = "Id Pregunta: 6374. NULL";


//  Id pregunta: 6380 AÃ±o de creación de pregunta: 2010-01-01
 questions[36]= "37)  En el Esquema Nacional de Interoperabilidad, se establece que los sistemas o aplicaciones implicados en la provisi&oacute;n de un servicio p&uacute;blico por v&iacute;a electr&oacute;nica se sincronizar&aacute;n con la hora oficial de:";
 choices[36]= new Array();
 choices[36][0] = "El reloj de la Puerta del Sol";
 choices[36][1] = "El Instituto Europeo de Medici&oacute;n Horaria";
 choices[36][2] = "La Agencia Espa&ntilde;ola de Meteorologia";
 choices[36][3] = "El Real Instituto y Observatorio de la Armada";
 answers[36] = choices[36][3];
 units[36] = "43";
 comments[36] = "Id Pregunta: 6380. Art&iacute;culo 15 ENI";


//  Id pregunta: 6385 AÃ±o de creación de pregunta: 2010-01-01
 questions[37]= "38)  &iquest;D&oacute;nde debe publicarse la orden de creaci&oacute;n de una sede electr&oacute;nica?";
 choices[37]= new Array();
 choices[37][0] = "En la p&aacute;gina web del organismo correspondiente";
 choices[37][1] = "No es necesaria ninguna publicaci&oacute;n";
 choices[37][2] = "En el Bolet&iacute;n Oficial del Estado";
 choices[37][3] = "En dos diarios de tirada nacional";
 answers[37] = choices[37][2];
 units[37] = "43";
 comments[37] = "Id Pregunta: 6385. Art&iacute;culo 3.2 RD 1671/2009";


//  Id pregunta: 6400 AÃ±o de creación de pregunta: 2010-01-01
 questions[38]= "39)  El &oacute;rgano competente para la expedici&oacute;n del DNIe es:";
 choices[38]= new Array();
 choices[38][0] = "Ministerio de Defensa";
 choices[38][1] = "Ministerio del Interior";
 choices[38][2] = "Ministerio de Presidencia";
 choices[38][3] = "Secretaria de Estado de Funci&oacute;n P&uacute;blica";
 answers[38] = choices[38][1];
 units[38] = "30";
 comments[38] = "Id Pregunta: 6400. RD 1553/2005, art&iacute;culo 3";


//  Id pregunta: 6407 AÃ±o de creación de pregunta: 2010-01-01
 questions[39]= "40)  &iquest;Puede el cesionario titular de derechos de explotaci&oacute;n realizar o autorizar la realizaci&oacute;n de versiones sucesivas de un programa o programas derivados del mismo, sin permiso del autor?";
 choices[39]= new Array();
 choices[39][0] = "No, salvo pacto en contrario";
 choices[39][1] = "S&iacute;, salvo pacto en contrario";
 choices[39][2] = "S&iacute;, en cualquier caso";
 choices[39][3] = "No, en ning&uacute;n caso";
 answers[39] = choices[39][1];
 units[39] = "36";
 comments[39] = "Id Pregunta: 6407. Art&iacute;culo 100 RDL 1/1996";


//  Id pregunta: 6411 AÃ±o de creación de pregunta: 2010-01-01
 questions[40]= "41)  De acuerdo a lo dispuesto en la ley de servicios de la sociedad de la informaci&oacute;n y comercio electr&oacute;nico, &iquest;Cu&aacute;l es la sanci&oacute;n correspondiente por la comisi&oacute;n de infracciones muy graves?";
 choices[40]= new Array();
 choices[40][0] = "150.001 hasta 600.000 euros";
 choices[40][1] = "150.001 hasta 300.000 euros";
 choices[40][2] = "300.001 hasta 600.000 euros";
 choices[40][3] = "600.001 hasta 1,000.000 euros";
 answers[40] = choices[40][0];
 units[40] = "30";
 comments[40] = "Id Pregunta: 6411. Ley 34/2002, art&iacute;culo 39";


//  Id pregunta: 6581 AÃ±o de creación de pregunta: 2010-01-01
 questions[41]= "42)  &iquest;Cu&aacute;l es el Reglamento de desarrollo de la LOPD actualmente vigente?";
 choices[41]= new Array();
 choices[41][0] = "RD 994/1999";
 choices[41][1] = "RD 1720/2007";
 choices[41][2] = "A y B son correctas";
 choices[41][3] = "A y B son incorrectas";
 answers[41] = choices[41][1];
 units[41] = "29";
 comments[41] = "Id Pregunta: 6581. NULL";


//  Id pregunta: 6590 AÃ±o de creación de pregunta: 2010-01-01
 questions[42]= "43)  La realizaci&oacute;n de la auditor&iacute;a, dentro de las medidas de seguridad de nivel medio, de acuerdo al RD 1720/2007 debe llevarse a cabo:";
 choices[42]= new Array();
 choices[42][0] = "Por personal externo";
 choices[42][1] = "Por personal interno a la organizaci&oacute;n";
 choices[42][2] = "Por profesionales en materia de protecci&oacute;n de datos";
 choices[42][3] = "Todas las respuestas anteriores son incorrectas";
 answers[42] = choices[42][2];
 units[42] = "75";
 comments[42] = "Id Pregunta: 6590. NULL";


//  Id pregunta: 6591 AÃ±o de creación de pregunta: 2010-01-01
 questions[43]= "44)  Algunas de las ventajas a la hora de utilizar software general para la realizaci&oacute;n de las auditor&iacute;as son:";
 choices[43]= new Array();
 choices[43][0] = "Economicidad";
 choices[43][1] = "Coste inicial alto";
 choices[43][2] = "No se verifican procesos particulares sino gen&eacute;ricos";
 choices[43][3] = "Todas las respuestas anteriores son incorrectas";
 answers[43] = choices[43][0];
 units[43] = "75";
 comments[43] = "Id Pregunta: 6591. NULL";


//  Id pregunta: 8226 AÃ±o de creación de pregunta: 2011-01-01
 questions[44]= "45)  Se&ntilde;ale la afirmaci&oacute;n NO correcta en relaci&oacute;n con el Registro Electr&oacute;nico Com&uacute;n (REC) de la Administraci&oacute;n General del Estado:";
 choices[44]= new Array();
 choices[44][0] = "REC posibilita la presentaci&oacute;n de cualesquiera solicitudes, escritos y comunicaciones dirigidas a la Administraci&oacute;n General del Estado y a sus Organismos p&uacute;blicos.";
 choices[44][1] = "La Direcci&oacute;n General de Impulso de la Administraci&oacute;n Electr&oacute;nica del Ministerio de la Presidencia, es la responsable de la custodia y manejo de los escritos presentados.";
 choices[44][2] = "Los formatos de los documentos electr&oacute;nicos y de las im&aacute;genes electr&oacute;nicas de los documentos, se establecen en el marco del Esquema Nacional de Interoperabilidad.";
 choices[44][3] = "El acuse de recibo electr&oacute;nico emitido por REC da constancia de la presentaci&oacute;n, pero no implica el inicio del c&oacute;mputo de plazos a los restantes efectos.";
 answers[44] = choices[44][1];
 units[44] = "44";
 comments[44] = "Id Pregunta: 8226. Examen TIC A1 2010";


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


//  Id pregunta: 8245 AÃ±o de creación de pregunta: 2011-01-01
 questions[46]= "47)  El Texto Refundido de la Ley de Propiedad Intelectual, modificado por la ley 23/2006, define los siguientes derechos de explotaci&oacute;n:";
 choices[46]= new Array();
 choices[46][0] = "Reproducci&oacute;n, Distribuci&oacute;n, Duplicaci&oacute;n y Transformaci&oacute;n.";
 choices[46][1] = "Distribuci&oacute;n, Duplicaci&oacute;n, Comunicaci&oacute;n P&uacute;blica y Transformaci&oacute;n.";
 choices[46][2] = "Reproducci&oacute;n, Duplicaci&oacute;n, Comunicaci&oacute;n P&uacute;blica y Transformaci&oacute;n.";
 choices[46][3] = "Reproducci&oacute;n, Distribuci&oacute;n, Comunicaci&oacute;n P&uacute;blica y Transformaci&oacute;n.";
 answers[46] = choices[46][3];
 units[46] = "36,37";
 comments[46] = "Id Pregunta: 8245. Examen TIC A1 2010";


//  Id pregunta: 8399 AÃ±o de creación de pregunta: 2011-01-01
 questions[47]= "48)  Las comunicaciones efectuadas a ciudadanos a trav&eacute;s de medios electr&oacute;nicos ser&aacute;n v&aacute;lidas de acuerdo al art&iacute;culo 27 de la Ley 11/2007, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, siempre que:";
 choices[47]= new Array();
 choices[47][0] = "Exista constancia de la transmisi&oacute;n y recepci&oacute;n, de sus fechas y se identifique fldedignamente al destinatario de las mismas";
 choices[47][1] = "Exista constancia de la transmisi&oacute;n y recepci&oacute;n, de sus fechas y se identifique fidedignarnente al remitente y al destinatario de las mismas. ";
 choices[47][2] = "Exista constancia de la transmisi&oacute;n y recepci&oacute;n, de sus fechas, del contenido &iacute;ntegro de las comunicaciones y se identifique fidedignamente al remitente y al destinatario de las mismas. ";
 choices[47][3] = "Exista constancia de la transmisi&oacute;n y recepci&oacute;n, de sus fechas, del contenido &iacute;ntegro de las comunicaciones, se identifique fidedignarnente al remitente y al destinatario de las mismas y una norma con rango de Ley permita el uso de un medio electr&oacute;nico en el procedimiento";
 answers[47] = choices[47][2];
 units[47] = "43";
 comments[47] = "Id Pregunta: 8399. Examen TIC A2 2010";


//  Id pregunta: 8401 AÃ±o de creación de pregunta: 2011-01-01
 questions[48]= "49)  Dentro del contenido m&iacute;nimo de una Sede Electr&oacute;nica NO se encuentra: ";
 choices[48]= new Array();
 choices[48][0] = "Identificaci&oacute;n, &oacute;rgano titular y responsables de gesti&oacute;n. ";
 choices[48][1] = "Sistemas de firma electr&oacute;nica que sean admitidos o utilizados en la Sede. ";
 choices[48][2] = "Sistemas de verificaci&oacute;n de los certificados de la Sede. ";
 choices[48][3] = "Relaci&oacute;n de funcionarios habilitados para actuar ante la Sede";
 answers[48] = choices[48][3];
 units[48] = "43";
 comments[48] = "Id Pregunta: 8401. Examen TIC A2 2010";


//  Id pregunta: 8405 AÃ±o de creación de pregunta: 2011-01-01
 questions[49]= "50)  Se&ntilde;ale cu&aacute;l de los siguientes servicios NO se ofrece en la plataforma de validaci&oacute;n y firma electr&oacute;nica @Firma: ";
 choices[49]= new Array();
 choices[49][0] = "Sellado de tiempo (TSA) seg&uacute;n la RFC 3161";
 choices[49][1] = "Validaci&oacute;n, conforme a la RFC 3280, de certificados X.509 de todas las Autoridades de Certificaci&oacute;n reconocidas en el pa&iacute;s por el Ministerio de Industria, Turismo y Comercio ";
 choices[49][2] = "Expedici&oacute;n de certificados de firma electr&oacute;nica del personal al servicio de las Administraciones P&uacute;blicas para el cumplimiento de sus funciones";
 choices[49][3] = "Validaci&oacute;n de firma v&iacute;a servicios web (WS) de un elemento firmado. ";
 answers[49] = choices[49][2];
 units[49] = "44";
 comments[49] = "Id Pregunta: 8405. Examen TIC A2 2010";


//  Id pregunta: 8421 AÃ±o de creación de pregunta: 2011-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l de los siguientes responsables no aparece definido en el Esquema Nacional de Seguridad, Real Decreto 3/2010 del 8 de enero?";
 choices[50]= new Array();
 choices[50][0] = "Responsable del fichero";
 choices[50][1] = "Responsable de la informaci&oacute;n";
 choices[50][2] = "Responsable del servicio";
 choices[50][3] = "Responsable de seguridad";
 answers[50] = choices[50][0];
 units[50] = "43";
 comments[50] = "Id Pregunta: 8421. El responsable del fichero es un concepto relacionado con la LOPD.";


//  Id pregunta: 8425 AÃ±o de creación de pregunta: 2011-01-01
 questions[51]= "52)  &iquest;Cu&aacute;l de los siguientes principios b&aacute;sicos no aparece en el Esquema Nacional de Interoperabilidad, Real Decreto 4/2010 del 8 de enero?";
 choices[51]= new Array();
 choices[51][0] = "La interoperabilidad como cualidad integral";
 choices[51][1] = "La reutilizaci&oacute;n y la transferencia tecnol&oacute;gica";
 choices[51][2] = "El car&aacute;cter multidimensional de la interoperabilidad";
 choices[51][3] = "El enfoque de soluciones multilaterales";
 answers[51] = choices[51][1];
 units[51] = "43";
 comments[51] = "Id Pregunta: 8425. ";


//  Id pregunta: 8740 AÃ±o de creación de pregunta: 2011-01-01
 questions[52]= "53)  De acuerdo con la definici&oacute;n establecida en el Real Decreto 1720/2007, la persona f&iacute;sica o jur&iacute;dica, de naturaleza p&uacute;blica o privada, u &oacute;rgano administrativo, que s&oacute;lo o conjuntamente con otros decida sobre la finalidad, contenido y uso del tratamiento, aunque NO lo realizase materialmente es:";
 choices[52]= new Array();
 choices[52][0] = "El encargado del fichero o del tratamiento.";
 choices[52][1] = "El responsable del fichero o del tratamiento.";
 choices[52][2] = "El destinatario o cesionario del fichero o del tratamiento";
 choices[52][3] = "El propietario del fichero o del tratamiento.";
 answers[52] = choices[52][1];
 units[52] = "29";
 comments[52] = "Id Pregunta: 8740. Examen TIC A2 2010 interna";


//  Id pregunta: 8742 AÃ±o de creación de pregunta: 2011-01-01
 questions[53]= "54)  En relaci&oacute;n con la inscripci&oacute;n de ficheros en el Registro General de Protecci&oacute;n de datos, la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos:";
 choices[53]= new Array();
 choices[53][0] = "Tiene 1 mes de plazo para resolver la solicitud de inscripci&oacute;n y en caso de no contestar en tal plazo, se entender&aacute; inscrito a todos los efectos";
 choices[53][1] = "Tiene 1 mes de plazo para resolver la solicitud de inscripci&oacute;n y en caso de no contestar en tal plazo, se entender&aacute; desestimada la solicitud, con posibilidad de Interposici&oacute;n del correspondiente recurso especial en materia de protecci&oacute;n de datos de car&aacute;cter personal.";
 choices[53][2] = "Debe contestar en el plazo m&aacute;ximo de 10 d&iacute;as, prorrogables hasta 1 mes, por motivos justificados, con obligaci&oacute;n de resolver. En caso de no contestar en tal plazo, se entender&aacute; Inscrito a todos los efectos.";
 choices[53][3] = "No realiza la inscripci&oacute;n en el Registro General de Protecci&oacute;n de Datos sino que emite un Informe preceptivo y no vinculante, en un plazo de 1 mes, sobre la adecuaci&oacute;n de la solicitud. En el caso de no emitirlo en dicho plazo se entender&aacute; como favorable a todos los efectos.";
 answers[53] = choices[53][0];
 units[53] = "29";
 comments[53] = "Id Pregunta: 8742. Examen TIC A2 2010 interna";


//  Id pregunta: 8746 AÃ±o de creación de pregunta: 2011-01-01
 questions[54]= "55)  En el contexto de la Ley 11/2007, de Acceso Electr&oacute;nico de los Ciudadanos a los Servicios P&uacute;blicos, un ciudadano es:";
 choices[54]= new Array();
 choices[54][0] = "Es siempre una persona f&iacute;sica o una persona jur&iacute;dica";
 choices[54][1] = "Siempre es una persona f&iacute;sica, aunque sea representando a una persona jur&iacute;dica.";
 choices[54][2] = "Siempre son personas jur&iacute;dicas, y las personas f&iacute;sicas se entienden como entes sin personalidad.";
 choices[54][3] = "Una persona f&iacute;sica, una persona jur&iacute;dica o. incluso, un ente sin personalidad";
 answers[54] = choices[54][3];
 units[54] = "43";
 comments[54] = "Id Pregunta: 8746. Examen TIC A2 2010 interna";


//  Id pregunta: 8897 AÃ±o de creación de pregunta: 2011-01-01
 questions[55]= "56)  &iquest;Cu&aacute;l es la directiva europea vigente relativa al tratamiento de los datos personales?";
 choices[55]= new Array();
 choices[55][0] = "Directiva 95/46/CE";
 choices[55][1] = "Directiva 2006/24/CE";
 choices[55][2] = "Directiva 2002/58/CE";
 choices[55][3] = "Directiva 97/66/CE";
 answers[55] = choices[55][0];
 units[55] = "29";
 comments[55] = "Id Pregunta: 8897. ";


//  Id pregunta: 8945 AÃ±o de creación de pregunta: 2011-01-01
 questions[56]= "57)  &iquest;Cu&aacute;l de los siguientes es un principio b&aacute;sico del Esquema Nacional de Interoperabilidad?";
 choices[56]= new Array();
 choices[56][0] = "Enfoque de soluciones multilaterales";
 choices[56][1] = "Utilizaci&oacute;n de la Red SARA como Red de comunicaciones de las Administraciones p&uacute;blicas espa&ntilde;olas";
 choices[56][2] = "Interoperabilidad sem&aacute;ntica";
 choices[56][3] = "Ninguno de los anteriores";
 answers[56] = choices[56][0];
 units[56] = "43";
 comments[56] = "Id Pregunta: 8945. NULL";


//  Id pregunta: 8976 AÃ±o de creación de pregunta: 2011-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l de los siguientes no es un derecho reconocido a los ciudadanos por la ley 11/2007?";
 choices[57]= new Array();
 choices[57][0] = "A la igualdad en el acceso electr&oacute;nico a los servicios de las Administraciones P&uacute;blicas.";
 choices[57][1] = "A la utilizaci&oacute;n de otros sistemas de firma electr&oacute;nica admitidos en el &aacute;mbito de las Administraciones P&uacute;blicas";
 choices[57][2] = "A la calidad de los servicios p&uacute;blicos prestados por medios electr&oacute;nicos";
 choices[57][3] = "Todos los anteriores son derechos reconocidos a los ciudadanos por la ley 11/2007";
 answers[57] = choices[57][3];
 units[57] = "43";
 comments[57] = "Id Pregunta: 8976. ";


//  Id pregunta: 8992 AÃ±o de creación de pregunta: 2011-01-01
 questions[58]= "59)  La ley de econom&iacute;a sostenible ha modificado las cuant&iacute;as de las sanciones fijadas en la LOPD &iquest;C&oacute;mo?";
 choices[58]= new Array();
 choices[58][0] = "Ha aumentado todas";
 choices[58][1] = "Ha disminuido todas";
 choices[58][2] = "Ha disminuido la m&iacute;nima y aumentado la m&aacute;xima";
 choices[58][3] = "Ha aumentado la m&iacute;nima y disminuido la m&aacute;xima";
 answers[58] = choices[58][3];
 units[58] = "29";
 comments[58] = "Id Pregunta: 8992. ";


//  Id pregunta: 9087 AÃ±o de creación de pregunta: 2013-01-01
 questions[59]= "60)  En relaci&oacute;n a los programas de ordenadro, indicar mediante que ley se protegen.";
 choices[59]= new Array();
 choices[59][0] = "Mediante la Ley 23/2006 por la que se modifica el texto refundido de la Ley de Propiedad Intelectual";
 choices[59][1] = "Mediante la Ley de Propiedad Intelectual";
 choices[59][2] = "Mediante la Directiva de derechos de autor 2001/29";
 choices[59][3] = "Mediante la Ley de Patentes";
 answers[59] = choices[59][1];
 units[59] = "36";
 comments[59] = "Id Pregunta: 9087. ";


//  Id pregunta: 9091 AÃ±o de creación de pregunta: 2013-01-01
 questions[60]= "61)  La protecci&oacute;n de un programa de ordenador, &iquest;se extiende al c&oacute;digo objeto?";
 choices[60]= new Array();
 choices[60][0] = "No, puesto que no es una creaci&oacute;n intelectual, sino una compilaci&oacute;n autom&aacute;tica de la m&aacute;quina.";
 choices[60][1] = "No, puesto que es algo que no se puede entender, as&iacute; que no se puede proteger.";
 choices[60][2] = "Si, en todos los casos";
 choices[60][3] = "Todas las anteriores son falsas";
 answers[60] = choices[60][2];
 units[60] = "36";
 comments[60] = "Id Pregunta: 9091. ";


//  Id pregunta: 9094 AÃ±o de creación de pregunta: 2013-01-01
 questions[61]= "62)  &iquest;Est&aacute;n protegidos los manuales de uso de un programa de ordenador?";
 choices[61]= new Array();
 choices[61][0] = "Los manuales de uso de un programa de ordeandor no est&aacute;n protegidos.";
 choices[61][1] = "Si, como obra literaria.";
 choices[61][2] = "Como obra literaria, pero s&oacute;lo si tienen suficiente calidad artistica.";
 choices[61][3] = "Si, como parte integrante del concepto &quot;programa de ordenador&quot;.";
 answers[61] = choices[61][3];
 units[61] = "36";
 comments[61] = "Id Pregunta: 9094. ";


//  Id pregunta: 9196 AÃ±o de creación de pregunta: 2013-01-01
 questions[62]= "63)  Cuando un trabajador asalariado crea un programa de ordenador, en el ejercicio de sus funciones:";
 choices[62]= new Array();
 choices[62][0] = "Los derechos de explotaci&oacute;n pertenecen al trabajador.";
 choices[62][1] = "Los derechos de explotaci&oacute;n pertenecen al empresario.";
 choices[62][2] = "Los derechos morales pertenecen al trabajador";
 choices[62][3] = "Los derechos morales pertenecen al empresario";
 answers[62] = choices[62][2];
 units[62] = "36";
 comments[62] = "Id Pregunta: 9196. ";


//  Id pregunta: 9200 AÃ±o de creación de pregunta: 2013-01-01
 questions[63]= "64)  &iquest;Cu&aacute;ntas copias de seguridad de un programa de ordenador se pueden realizar seg&uacute;n la legislaci&oacute;n vigente en materia de propiedad intelectual?";
 choices[63]= new Array();
 choices[63][0] = "No se pueden realizar copias de seguridad.";
 choices[63][1] = "La ley permite siempre la realizaci&oacute;n de una copia de seguridad.";
 choices[63][2] = "Una copia de seguridad, siempre que el titular no se oponga expresamente.";
 choices[63][3] = "Una copia de seguridad, pero lo tiene que autorizar expresamente el titular.";
 answers[63] = choices[63][1];
 units[63] = "36";
 comments[63] = "Id Pregunta: 9200. ";


//  Id pregunta: 9547 AÃ±o de creación de pregunta: 2013-01-01
 questions[64]= "65)  Seg&uacute;n la LSSI, la acci&oacute;n de cesaci&oacute;n, dirigida a obtener una sentencia que condene al demandado a cesar en una conducta contraria a dicha Ley, NO podr&aacute; ser interpuesta por:";
 choices[64]= new Array();
 choices[64][0] = "Grupos de consumidores o usuarios afectados";
 choices[64][1] = "El Ministerio Fiscal";
 choices[64][2] = "El Instituto Nacional de Consumo";
 choices[64][3] = "La Secretar&iacute;a de Estado para las Telecomunicaciones y la Sociedad de la Informaci&oacute;n";
 answers[64] = choices[64][3];
 units[64] = "30";
 comments[64] = "Id Pregunta: 9547. Ley 34/2002, art&iacute;culo 31";


//  Id pregunta: 9586 AÃ±o de creación de pregunta: 2013-01-01
 questions[65]= "66)  Seg&uacute;n la norma t&eacute;cnica de interoperabilidad de pol&iacute;tica de firma electr&oacute;nica y de certificados de la administraci&oacute;n del Esquema Nacional de Interoperabilidad:";
 choices[65]= new Array();
 choices[65][0] = "Los formatos para la firma electr&oacute;nica de contenidos ser&aacute;n XAdES, CAdES y PAdES.";
 choices[65][1] = "El perfil m&iacute;nimo de formato que se utilizar&aacute; para la generaci&oacute;n de firmas de contenido en el marco de una pol&iacute;tica ser&aacute; &ndash;A.";
 choices[65][2] = "Los documentos electr&oacute;nicos a los que se aplique firma basada en certificados de cara a su intercambio no se ajustar&aacute;n a las especificaciones de formato y estructura establecidas en la NTI de Documento electr&oacute;nico.";
 choices[65][3] = "El perfil m&iacute;nimo de formato que se utilizar&aacute; para la generaci&oacute;n de firmas de contenido en el marco de una pol&iacute;tica ser&aacute; &ndash;C.";
 answers[65] = choices[65][0];
 units[65] = "43";
 comments[65] = "Id Pregunta: 9586. Examen TIC A1 2011";


//  Id pregunta: 9587 AÃ±o de creación de pregunta: 2013-01-01
 questions[66]= "67)  &iquest;A cu&aacute;l de los siguientes &aacute;mbitos establecidos en el art&iacute;culo 2 de la Ley 11/2007 NO aplica el Esquema Nacional de Seguridad (ENS)?:";
 choices[66]= new Array();
 choices[66][0] = "A la Administraci&oacute;n General del Estado, Administraciones de las Comunidades Aut&oacute;nomas y las Entidades que integran la Administraci&oacute;n Local, as&iacute; como las entidades de derecho p&uacute;blico vinculadas o dependientes de las mismas.";
 choices[66][1] = "A los ciudadanos en sus relaciones con las Administraciones P&uacute;blicas.";
 choices[66][2] = "A las relaciones entre las distintas Administraciones P&uacute;blicas.";
 choices[66][3] = "Sistemas que tratan informaci&oacute;n clasificada regulada por Ley 9/1968 de 5 de abril. ";
 answers[66] = choices[66][3];
 units[66] = "43";
 comments[66] = "Id Pregunta: 9587. Examen TIC A2 2011";


//  Id pregunta: 9805 AÃ±o de creación de pregunta: 2014-01-01
 questions[67]= "68)  En el supuesto de documentos emitidos originalmente en soporte papel de los que se hayan efectuado copias electr&oacute;nicas, de acuerdo a lo dispuesto en el art 30 de la ley 11/2007, se podr&aacute;:";
 choices[67]= new Array();
 choices[67][0] = "Destruir los originales en los t&eacute;rminos y condiciones que por cada Administraci&oacute;n P&uacute;blica se establezcan. ";
 choices[67][1] = "Destruir los originales, en cualquier caso, al cabo de cinco a&ntilde;os de su presentaci&oacute;n. ";
 choices[67][2] = "Nunca se podr&aacute;n destruir, con car&aacute;cter general para todo el Estado. ";
 choices[67][3] = "Destruir los originales, previo consentimiento del interesado. ";
 answers[67] = choices[67][0];
 units[67] = "43";
 comments[67] = "Id Pregunta: 9805. Examen TIC-A2 2013-Libre";


//  Id pregunta: 10257 AÃ±o de creación de pregunta: 2014-01-01
 questions[68]= "69)  En referencia al tratamiento de datos de car&aacute;cter personal, el ejercicio de los derechos de acceso, rectificaci&oacute;n, cancelaci&oacute;n y oposici&oacute;n";
 choices[68]= new Array();
 choices[68][0] = "El responsable al que se dirija la petici&oacute;n puede no contestar, entendi&eacute;ndose en ese caso que no obran en su poder datos personales del solicitante";
 choices[68][1] = "El responsable al que se dirija la petici&oacute;n puede no contestar, entendi&eacute;ndose en ese caso que, de obrar en su poder datos personales del solicitante, &eacute;stos no son datos especialmente protegidos";
 choices[68][2] = "El responsable al que se dirija la petici&oacute;n debe contestar en todo caso";
 choices[68][3] = "El responsable al que se dirija la petici&oacute;n debe contestar en todo caso si los datos se refieren a menores, no siendo obligatorio responder en otros casos";
 answers[68] = choices[68][2];
 units[68] = "29";
 comments[68] = "Id Pregunta: 10257. Art&iacute;culo 25.2 del RD 1720/2007";


//  Id pregunta: 10259 AÃ±o de creación de pregunta: 2014-01-01
 questions[69]= "70)  El derecho de oposici&oacute;n al tratamiento de datos de car&aacute;cter personal tiene sentido:";
 choices[69]= new Array();
 choices[69][0] = "Para los ficheros mencionados en b) y c)";
 choices[69][1] = "Para ficheros que recojan datos de car&aacute;cter personal y no sea preciso el consentimiento del afectado para realizar el tratamiento";
 choices[69][2] = "Para ficheros que recojan datos de car&aacute;cter personal y tengan por objeto realizar actividades de prospecci&oacute;n comercial";
 choices[69][3] = "Para todo tipo de ficheros que recojan datos de car&aacute;cter personal";
 answers[69] = choices[69][0];
 units[69] = "29";
 comments[69] = "Id Pregunta: 10259. Art&iacute;culo 34 a) y b) del RD 1720/2007";


//  Id pregunta: 10543 AÃ±o de creación de pregunta: 2014-01-01
 questions[70]= "71)  El plan de telecomunicaciones y redes ultrarr&aacute;pidas, dise&ntilde;ado para dar cumplimiento a los objetivos de banda ancha fijados por la Agenda Digital para Europa, fija como objetivos para el 2015:";
 choices[70]= new Array();
 choices[70][0] = "50% de la poblaci&oacute;n con cobertura de m&aacute;s de 100 Mbps.";
 choices[70][1] = "25% de hogares conectados a redes NGA";
 choices[70][2] = "75% de la poblaci&oacute;n con cobertura 4G";
 choices[70][3] = "Todas las anteriores ";
 answers[70] = choices[70][3];
 units[70] = "30";
 comments[70] = "Id Pregunta: 10543. http://www.agendadigital.gob.es/planes-actuaciones/Paginas/plan-telecomunicaciones-redes.aspx";


//  Id pregunta: 10576 AÃ±o de creación de pregunta: 2015-01-01
 questions[71]= "72)  Elija la respuesta incorrecta:";
 choices[71]= new Array();
 choices[71][0] = "La utilizaci&oacute;n de infraestructuras y servicios comunes proporciona mayor agilidad en el desarrollo y despliegue de servicios.";
 choices[71][1] = "Las Administraciones P&uacute;blicas pueden utilizar cualquier tecnolog&iacute;a de la informaci&oacute;n en sus relaciones con los ciudadanos.";
 choices[71][2] = "El Comit&eacute; Sectorial de la Administraci&oacute;n Electr&oacute;nica asegura la compatibilidad e interoperabilidad de los sistemas y aplicaciones empleados por las Administraciones P&uacute;blicas.";
 choices[71][3] = "Existe un directorio general de aplicaciones para su reutilizaci&oacute;n en la AGE.";
 answers[71] = choices[71][1];
 units[71] = "44";
 comments[71] = "Id Pregunta: 10576. Art&iacute;culo 41, Ley 11/2007: deben evitar discriminaci&oacute;n.";


//  Id pregunta: 10583 AÃ±o de creación de pregunta: 2015-01-01
 questions[72]= "73)  El empleo de algoritmos de firma electr&oacute;nica acreditados por el Centro Criptol&oacute;gico Nacional:";
 choices[72]= new Array();
 choices[72][0] = "Es una medida del Esquema Nacional de Seguridad para la dimensi&oacute;n de confidencialidad.";
 choices[72][1] = "Es una medida de nivel medio del Esquema Nacional de Seguridad.";
 choices[72][2] = "Es una recomendaci&oacute;n de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 choices[72][3] = "Ninguna de las anteriores.";
 answers[72] = choices[72][1];
 units[72] = "43";
 comments[72] = "Id Pregunta: 10583. ";


//  Id pregunta: 10683 AÃ±o de creación de pregunta: 2015-01-01
 questions[73]= "74)  Seg&uacute;n el Art&iacute;culo 14 de la Ley 39/2015. Para las personas f&iacute;sicas, &iquest;qui&eacute;n elige si la relaci&oacute;n se va a establecer a trav&eacute;s de medios electr&oacute;nicos?";
 choices[73]= new Array();
 choices[73][0] = "La Administraci&oacute;n.";
 choices[73][1] = "El ciudadano en todo caso.";
 choices[73][2] = "Habitualmente el ciudadano.";
 choices[73][3] = "Siempre se realiza a trav&eacute;s de medios electr&oacute;nicos.";
 answers[73] = choices[73][2];
 units[73] = "30";
 comments[73] = "Id Pregunta: 10683. ";


//  Id pregunta: 10697 AÃ±o de creación de pregunta: 2015-01-01
 questions[74]= "75)  La Ley 39/2015:";
 choices[74]= new Array();
 choices[74][0] = "Estipula la creaci&oacute;n del Esquema Nacional de Seguridad y el Esquema Nacional de Interoperabilidad.";
 choices[74][1] = "Establece en alguno de sus apartados que deben considerarse las medidas del Esquema Nacional de Seguridad y Esquema Nacional de Interoperabilidad.";
 choices[74][2] = "Establece en alguno de sus apartados que deben considerarse las medidas del Esquema Nacional de Seguridad.";
 choices[74][3] = "No menciona ni el Esquema Nacional de Seguridad ni el Esquema Nacional de Interoperabilidad.";
 answers[74] = choices[74][1];
 units[74] = "30";
 comments[74] = "Id Pregunta: 10697. ";


//  Id pregunta: 10715 AÃ±o de creación de pregunta: 2015-01-01
 questions[75]= "76)  Seg&uacute;n la NTI de Modelo de Datos para el Intercambio de asientos entre entidades registrales &iquest;En qu&eacute; segmento se situa el &quot;idenficador de fichero&quot;?";
 choices[75]= new Array();
 choices[75][0] = "De asunto";
 choices[75][1] = "De origen";
 choices[75][2] = "De destino";
 choices[75][3] = "De anexo";
 answers[75] = choices[75][3];
 units[75] = "43";
 comments[75] = "Id Pregunta: 10715. ";


//  Id pregunta: 10721 AÃ±o de creación de pregunta: 2015-01-01
 questions[76]= "77)  Seg&uacute;n la NTI de Gesti&oacute;n de Pol&iacute;tica de gesti&oacute;n de documentos electr&oacute;nicos. &iquest;Qu&eacute; no es necesario que incluya la pol&iacute;tica de gesti&oacute;n de documentos electr&oacute;nicos?";
 choices[76]= new Array();
 choices[76][0] = "Definici&oacute;n del alcance y &aacute;mbito de aplicaci&oacute;n.";
 choices[76][1] = "Actuaciones de supervisi&oacute;n y auditor&iacute;a de los procesos de gesti&oacute;n de documentos.";
 choices[76][2] = "Los medios tecnol&oacute;gicos necesarios para la gesti&oacute;n de los documentos electr&oacute;nicos.";
 choices[76][3] = "Roles de los actores involucrados.";
 answers[76] = choices[76][2];
 units[76] = "43";
 comments[76] = "Id Pregunta: 10721. ";


//  Id pregunta: 10726 AÃ±o de creación de pregunta: 2015-01-01
 questions[77]= "78)  &iquest;Qu&eacute; versi&oacute;n del protocolo SCSP (Sustituci&oacute;n de Certificados en Soporte Papel) se considera como utilizaci&oacute;n de forma general en la NTI de Protocolos de Intermediaci&oacute;n?";
 choices[77]= new Array();
 choices[77][0] = "1.0";
 choices[77][1] = "2.0";
 choices[77][2] = "3.0";
 choices[77][3] = "4.0";
 answers[77] = choices[77][2];
 units[77] = "43";
 comments[77] = "Id Pregunta: 10726. ";


//  Id pregunta: 10731 AÃ±o de creación de pregunta: 2015-01-01
 questions[78]= "79)  La conexi&oacute;n directa a la Red SARA se proporcionar&aacute; a trav&eacute;s de:";
 choices[78]= new Array();
 choices[78][0] = "Una VPN establecida con cualquiera de los Ministerios.";
 choices[78][1] = "Un &Aacute;rea de Conexi&oacute;n (AC).";
 choices[78][2] = "Un Punto de Presencia situado en el Ministerio de Hacienda y Administraciones P&uacute;blicas.";
 choices[78][3] = "Un punto neutro.";
 answers[78] = choices[78][1];
 units[78] = "43";
 comments[78] = "Id Pregunta: 10731. ";


//  Id pregunta: 10750 AÃ±o de creación de pregunta: 2015-01-01
 questions[79]= "80)  &iquest;En qu&eacute; a&ntilde;o se public&oacute; la Estrategia de Ciberseguridad Nacional?";
 choices[79]= new Array();
 choices[79][0] = "2011";
 choices[79][1] = "2012";
 choices[79][2] = "2013";
 choices[79][3] = "2014";
 answers[79] = choices[79][2];
 units[79] = "43";
 comments[79] = "Id Pregunta: 10750. ";


//  Id pregunta: 10755 AÃ±o de creación de pregunta: 2015-01-01
 questions[80]= "81)  &iquest;Cu&aacute;l de los siguientes no se incluye en la Estructura Org&aacute;nica definida en la Estrategia de Ciberseguridad Nacional?";
 choices[80]= new Array();
 choices[80][0] = "El Consejo de Seguridad Nacional.";
 choices[80][1] = "El Comit&eacute; Especializado de Ciberseguridad.";
 choices[80][2] = "El Comit&eacute; Especializado de Situaci&oacute;n.";
 choices[80][3] = "El Consejo Ejecutivo de Ciberseguridad.";
 answers[80] = choices[80][3];
 units[80] = "43";
 comments[80] = "Id Pregunta: 10755. ";


//  Id pregunta: 10761 AÃ±o de creación de pregunta: 2015-01-01
 questions[81]= "82)  &iquest;Qu&eacute; serie CCN-STIC constituye un conjunto de normas desarrolladas para entornos basados en el sistema operativo Windows de Microsoft?";
 choices[81]= new Array();
 choices[81][0] = "500";
 choices[81][1] = "600";
 choices[81][2] = "700";
 choices[81][3] = "400";
 answers[81] = choices[81][0];
 units[81] = "43";
 comments[81] = "Id Pregunta: 10761. ";


//  Id pregunta: 10953 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  Respecto a la Comisi&oacute;n de Estrategia TIC de la Administraci&oacute;n General del Estado, se&ntilde;ale la respuesta correcta:";
 choices[82]= new Array();
 choices[82][0] = "Est&aacute; adscrita al Ministerio de la Presidencia y es el &oacute;rgano encargado de la definici&oacute;n de la aplicaci&oacute;n de la Estrategia TIC de la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos.";
 choices[82][1] = "Impulsa la colaboraci&oacute;n y cooperaci&oacute;n con las comunidades aut&oacute;nomas y las entidades locales para la puesta en marcha de servicios interadministrativos integrados.";
 choices[82][2] = "Define las prioridades de inversi&oacute;n en materias TIC bajo un convenio marco de colaboraci&oacute;n con la Direcci&oacute;n General de Patrimonio del Estado.";
 choices[82][3] = "Elevar&aacute; semestralmente, a trav&eacute;s de su Presidente, un informe al Consejo de Ministros, en el que se recoger&aacute; el estado de la transformaci&oacute;n digital de las Administraciones P&uacute;blicas.";
 answers[82] = choices[82][1];
 units[82] = "30";
 comments[82] = "Id Pregunta: 10953. TIC A1 AGE 2014";


//  Id pregunta: 10961 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  &iquest;C&uacute;al de las siguientes opciones NO es un plan incluido en la Agenda Digital para Espa&ntilde;a?";
 choices[83]= new Array();
 choices[83][0] = "Contenidos y econom&iacute;a digital.";
 choices[83][1] = "Inclusi&oacute;n digital y empleabilidad.";
 choices[83][2] = "Confianza en el &aacute;mbito digital.";
 choices[83][3] = "Servicios p&uacute;blicos en la nube.";
 answers[83] = choices[83][3];
 units[83] = "30";
 comments[83] = "Id Pregunta: 10961. TIC A1 AGE 2014";


//  Id pregunta: 11112 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  Seleccione la opci&oacute;n verdadera";
 choices[84]= new Array();
 choices[84][0] = "ORVE permite la digitalizaci&oacute;n del papel que presenta el ciudadano en las oficinas de registro";
 choices[84][1] = "GEISER es un protocolo de interconexi&oacute;n de registros";
 choices[84][2] = "ACCEDA permite crear un registro en la nube";
 choices[84][3] = "La norma SICRES 4.0 normaliza el intercambio de asientos registrales entre distintas oficinas de registro";
 answers[84] = choices[84][0];
 units[84] = "30";
 comments[84] = "Id Pregunta: 11112. ";


//  Id pregunta: 11200 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  &iquest;Cu&aacute;l de los siguientes no es un pilar de la Agenda Digital Europea?";
 choices[85]= new Array();
 choices[85][0] = "Mercado Digital Din&aacute;mico &Uacute;nico";
 choices[85][1] = "Investigaci&oacute;n e innovaci&oacute;n";
 choices[85][2] = "Econom&iacute;a Digital e Internacionalizaci&oacute;n";
 choices[85][3] = "Beneficios TIC para la Sociedad UE";
 answers[85] = choices[85][2];
 units[85] = "30";
 comments[85] = "Id Pregunta: 11200. ";


//  Id pregunta: 11201 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  &iquest;Cu&aacute;l de los siguientes no es un pilar de la Agenda Digital Europea?";
 choices[86]= new Array();
 choices[86][0] = "Mercado Digital Din&aacute;mico &Uacute;nico";
 choices[86][1] = "Acceso r&aacute;pido y ultrarr&aacute;pido a internet";
 choices[86][2] = "Confianza y Seguridad";
 choices[86][3] = "Servicios P&uacute;blicos Digitales de Calidad";
 answers[86] = choices[86][3];
 units[86] = "30";
 comments[86] = "Id Pregunta: 11201. ";


//  Id pregunta: 11207 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  &iquest;C&oacute;mo se denomina el plan de la Agenda Digital Espa&ntilde;ola referente al objetivo de Despliegue de redes r&aacute;pidas y ultrarr&aacute;pidas?";
 choices[87]= new Array();
 choices[87][0] = "Plan de Impulso del acceso r&aacute;pido y ultrarr&aacute;pido a Internet";
 choices[87][1] = "Plan de Telecomunicaciones Ultrarr&aacute;pidas";
 choices[87][2] = "Plan de Despliegue de infraestructuras de Red Espa&ntilde;ola";
 choices[87][3] = "Ninguna de las anteriores";
 answers[87] = choices[87][1];
 units[87] = "30";
 comments[87] = "Id Pregunta: 11207. ";


//  Id pregunta: 11350 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  Qu&eacute; roles est&aacute;n sujetos al r&eacute;gimen sancionador de la Ley Org&aacute;nica de Protecci&oacute;n de DAtos";
 choices[88]= new Array();
 choices[88][0] = "Responsable del tratamiento";
 choices[88][1] = "Responsable del fichero";
 choices[88][2] = "Ambos ";
 choices[88][3] = "Ninguno";
 answers[88] = choices[88][2];
 units[88] = "29";
 comments[88] = "Id Pregunta: 11350. ";


//  Id pregunta: 11482 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  Seg&uacute;n el art&iacute;culo 6 de la Ley de Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas 39/2015, relativo a los registros electr&oacute;nicos de apoderamientos, los poderes inscritos en dicho registro tendr&aacute;n una validez m&aacute;xima";
 choices[89]= new Array();
 choices[89][0] = "De 5 a&ntilde;os a contar desde la fecha de inscripci&oacute;n.";
 choices[89][1] = "De 4 a&ntilde;os a contar desde la fecha de inscripci&oacute;n.";
 choices[89][2] = "De 2 a&ntilde;os a contar desde la fecha de inscripci&oacute;n.";
 choices[89][3] = "De 10 a&ntilde;os a contar desde la fecha de inscripci&oacute;n.";
 answers[89] = choices[89][0];
 units[89] = "43";
 comments[89] = "Id Pregunta: 11482. NULL";


//  Id pregunta: 11483 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  El Plan de Transformaci&oacute;n Digital de la Administraci&oacute;n General del Estado (AGE) y sus Organismos P&uacute;blicos, Estrategia TIC 2015-2020, fue aprobado por";
 choices[90]= new Array();
 choices[90][0] = "La Comisi&oacute;n de Estrategia TIC (CETIC) el 2 de Octubre de 2015.";
 choices[90][1] = "El Consejo de Ministros el 2 de Octubre de 2015.";
 choices[90][2] = "La Direcci&oacute;n TIC (DTIC) el 15 de septiembre de 2015.";
 choices[90][3] = "Por el Consejo Superior de Administraci&oacute;n Electr&oacute;nica (CSAE) el 15 de Septiembre de 2015.";
 answers[90] = choices[90][1];
 units[90] = "44";
 comments[90] = "Id Pregunta: 11483. NULL";


//  Id pregunta: 11491 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;Qu&eacute; norma del CCN hace referencia a la criptograf&iacute;a de empleo en el Esquema Nacional de Seguridad?";
 choices[91]= new Array();
 choices[91][0] = "CCN-STIC-802";
 choices[91][1] = "CCN-STIC-403";
 choices[91][2] = "CCN-STIC-807";
 choices[91][3] = "CCN-STIC-823";
 answers[91] = choices[91][2];
 units[91] = "43";
 comments[91] = "Id Pregunta: 11491. NULL";


//  Id pregunta: 11499 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Seg&uacute;n el Esquema Nacional de Seguridad, las Instrucciones T&eacute;cnicas de Seguridad ";
 choices[92]= new Array();
 choices[92][0] = "Son aspectos que pueden ser aplicados por parte de las Administraciones p&uacute;blicas";
 choices[92][1] = "Son aspectos que obligatoriamente deben ser aplicados por parte de las Administraciones P&uacute;blicas ";
 choices[92][2] = "Algunas Instrucciones de Seguridad son de aplicaci&oacute;n preceptiva y otras de aplicaci&oacute;n facultativa.";
 choices[92][3] = "Ninguna de las anteriores.";
 answers[92] = choices[92][1];
 units[92] = "43";
 comments[92] = "Id Pregunta: 11499. Instrucci&oacute;n t&eacute;cnica de seguridad introducido por la disp. Adicional 4&ordf; RD 951/2015 que modifica el ENS.";


//  Id pregunta: 11501 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Seg&uacute;n el Esquema Nacional de Seguridad, la tarea de elaboraci&oacute;n de un Perfil General del Estado de la Seguridad en las Administraciones p&uacute;blicas es competencia de:";
 choices[93]= new Array();
 choices[93][0] = "Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica";
 choices[93][1] = "Centro Criptol&oacute;gico Nacional";
 choices[93][2] = "INCIBE";
 choices[93][3] = "Consejo de Ministros";
 answers[93] = choices[93][0];
 units[93] = "43";
 comments[93] = "Id Pregunta: 11501. RD 951/2015 que modifica el art&iacute;culo 35 del ENS.";


//  Id pregunta: 11601 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Para un sistema calificado con nivel sustancial de aseguramiento de la calidad, cl@ve admite como mecanismo v&aacute;lido de registro e identificaci&oacute;n:";
 choices[94]= new Array();
 choices[94][0] = "Cl@ve PIN de varios usos";
 choices[94][1] = "Cl@ve Permanente sin SMS";
 choices[94][2] = "Cl@ve PIN de un solo uso";
 choices[94][3] = "b) y c) son correctos";
 answers[94] = choices[94][2];
 units[94] = "44";
 comments[94] = "Id Pregunta: 11601. ";


//  Id pregunta: 11732 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Qu&eacute; rango tiene el CIO de la AGE?";
 choices[95]= new Array();
 choices[95][0] = "director general";
 choices[95][1] = "secretario general";
 choices[95][2] = "subsecretario";
 choices[95][3] = "se ha creado una nueva figura para referirse al director.";
 answers[95] = choices[95][2];
 units[95] = "43";
 comments[95] = "Id Pregunta: 11732. ";


//  Id pregunta: 11764 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Se ha publicado la Estrategia TIC?";
 choices[96]= new Array();
 choices[96][0] = "No";
 choices[96][1] = "No est&aacute; previsto";
 choices[96][2] = "Si, en septiembre de 2015.";
 choices[96][3] = "Si, en septiembre de 2014.";
 answers[96] = choices[96][2];
 units[96] = "43";
 comments[96] = "Id Pregunta: 11764. ";


//  Id pregunta: 11766 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Los servicios compartidos...Seleccione una:";
 choices[97]= new Array();
 choices[97][0] = "est&aacute;n declarado de contrataci&oacute;n centralizada";
 choices[97][1] = "tienen car&aacute;cter obligatorio&nbsp;";
 choices[97][2] = "est&aacute;n disponibles en el CTT (Centro de Transferencia de Tecnolog&iacute;a)";
 choices[97][3] = "son gestionados por la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y de las Comunicaciones";
 answers[97] = choices[97][1];
 units[97] = "44";
 comments[97] = "Id Pregunta: 11766. ";


//  Id pregunta: 11775 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Implementaci&oacute;n de servicios compartidos: Los Organismos que van a utilizar un servicio compartido";
 choices[98]= new Array();
 choices[98][0] = "Deben firmar un convenio con la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y de la Comunicaci&oacute;n&nbsp;";
 choices[98][1] = "Pueden solicitar prestaciones &quot;ad hoc&quot;";
 choices[98][2] = "Deben usar el presupuesto de la secci&oacute;n 31 para Gastos de&nbsp;Diversos Ministerios";
 choices[98][3] = "Generalmente tienen que contribuir econ&oacute;micamente al servicio";
 answers[98] = choices[98][3];
 units[98] = "44";
 comments[98] = "Id Pregunta: 11775. ";


//  Id pregunta: 11787 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Se&ntilde;ale cu&aacute;l de las siguientes NO es una gu&iacute;a CCN-STIC:";
 choices[99]= new Array();
 choices[99][0] = "CCN-STIC-804 - Medidas de implantaci&oacute;n del Esquema Nacional de Seguridad";
 choices[99][1] = "CCN-STIC-820 - Protecci&oacute;n Contra Denegaci&oacute;n de Servicio";
 choices[99][2] = "CCN-STIC-823 - Seguridad en entornos Cloud";
 choices[99][3] = "CCN-STIC-830 - Medidas de seguridad en el puesto de trabajo (entorno ofim&aacute;tico).";
 answers[99] = choices[99][3];
 units[99] = "43";
 comments[99] = "Id Pregunta: 11787. ";


