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


//  Id pregunta: 191 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  En relaci&oacute;n a la protecci&oacute;n jur&iacute;dica de los programas de ordenador se&ntilde;arlar la respuesta falsa:";
 choices[1]= new Array();
 choices[1][0] = "Est&aacute; protegidos mediante los derechos de autor cualquier forma de expresi&oacute;n de un programa de ordenador, salvo aquellas creadas con el fin de ocasionar efectos nocivos a un sistema inform&aacute;tico";
 choices[1][1] = "Est&aacute;n protegidos mediante los derechos de autor las ideas y principios en los que se base un programa, incluidos los que sirven de fundamento a sus interfaces";
 choices[1][2] = "La primera venta de una copia de un programa por el titular de los derechos o con su consentimiento, agotar&aacute; el derecho de distribuci&oacute;n de dicha copia";
 choices[1][3] = "La duraci&oacute;n de los derechos de explotaci&oacute;n de un programa de ordenador ser&aacute;: para una persona natural toda la vida del autor y 70 a&ntilde;os despu&eacute;s de su muerte; para una persona jur&iacute;dica 70 a&ntilde;os";
 answers[1] = choices[1][1];
 units[1] = "36";
 comments[1] = "Id Pregunta: 191. Similar a examen TIC SS A 2003";


//  Id pregunta: 318 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  La LOPD permite a los interesados a los que se soliciten datos personales:";
 choices[2]= new Array();
 choices[2][0] = "Solo consultar sus datos";
 choices[2][1] = "Ejercitar los derechos de acceso, rectificaci&oacute;n, cancelaci&oacute;n y oposici&oacute;n";
 choices[2][2] = "Ejercitar s&oacute;lo los derechos de rectificaci&oacute;n";
 choices[2][3] = "Ejercitar s&oacute;lo los derechos de cancelaci&oacute;n";
 answers[2] = choices[2][1];
 units[2] = "29";
 comments[2] = "Id Pregunta: 318. ";


//  Id pregunta: 406 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  Respecto a los Ficheros y Registros de Poblaci&oacute;n de las Administraciones P&uacute;blicas, la Ley de Protecci&oacute;n de Datos se&ntilde;ala:";
 choices[3]= new Array();
 choices[3][0] = "Para su creaci&oacute;n es necesario el consentimiento del interesado";
 choices[3][1] = "Podr&aacute; solicitar su creaci&oacute;n cualquier persona interesada";
 choices[3][2] = "S&oacute;lo lo puede solicitar la Administraci&oacute;n General del Estado";
 choices[3][3] = "Estar&aacute;n formados con los datos del nombre, apellidos, domicilio, sexo y fecha de nacimiento";
 answers[3] = choices[3][3];
 units[3] = "29";
 comments[3] = "Id Pregunta: 406. ";


//  Id pregunta: 440 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  Seg&uacute;n la Ley Org&aacute;nica 15/99 de Protecci&oacute;n de Datos de car&aacute;cter personal, los datos que hagan referencia al origen racial, a la salud y a la vida sexual:";
 choices[4]= new Array();
 choices[4][0] = "S&oacute;lo podr&aacute;n ser recabados, tratados y cedidos cuando as&iacute; lo disponga una Ley";
 choices[4][1] = "S&oacute;lo podr&aacute;n ser recabados, tratados y cedidos cuando el afectado consienta expresamente";
 choices[4][2] = "S&oacute;lo podr&aacute;n ser recabados, tratados y cedidos cuando as&iacute; lo disponga una Ley o el afectado consienta expresamente";
 choices[4][3] = "No podr&aacute;n ser objeto de tratamiento. Se except&uacute;an los ficheros mantenidos por los partidos pol&iacute;ticos, sindicatos o iglesias.";
 answers[4] = choices[4][2];
 units[4] = "29";
 comments[4] = "Id Pregunta: 440. ";


//  Id pregunta: 450 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  Se&ntilde;alar la opci&oacute;n falsa. Seg&uacute;n la Ley de Protecci&oacute;n de Datos no ser&aacute; necesario el consentimiento del afectado para la cesi&oacute;n de sus datos personales cuando:";
 choices[5]= new Array();
 choices[5][0] = "Hayan sido obtenidos de fuentes accesibles al p&uacute;blico";
 choices[5][1] = "La cesi&oacute;n es a los tribunales en el ejercicio de sus potestades";
 choices[5][2] = "No son utilizados para los fines para los que fueron recabados";
 choices[5][3] = "La cesi&oacute;n es para la realizaci&oacute;n de estudios epidemiol&oacute;gicos";
 answers[5] = choices[5][2];
 units[5] = "29";
 comments[5] = "Id Pregunta: 450. ";


//  Id pregunta: 468 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  En la LOPD, una infracci&oacute;n muy grave es:";
 choices[6]= new Array();
 choices[6][0] = "incumplir el deber de secreto establecido en el art&iacute;culo 10 de la ley";
 choices[6][1] = "el impedimento o la obstaculizaci&oacute;n del ejercicio de los derechos de acceso y oposici&oacute;n y la negativa a facilitar la informaci&oacute;n que sea solicitada";
 choices[6][2] = "proceder a la recogida de datos de car&aacute;cter personal sin el consentimiento expreso de las personas afectadas en los casos en que &eacute;ste sea exigible";
 choices[6][3] = "No cesar en el tratamiento il&iacute;cito de datos de car&aacute;cter personal cuando existiese un previo requerimiento del Director de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos para ello.";
 answers[6] = choices[6][3];
 units[6] = "29";
 comments[6] = "Id Pregunta: 468. ";


//  Id pregunta: 550 AÃ±o de creación de pregunta: 2004-01-01
 questions[7]= "8)  La Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos se rige, entro otros, por:";
 choices[7]= new Array();
 choices[7][0] = "El T&iacute;tulo VI de la LOPD y el RD 428/1993 por el que se aprueba su Estatuto.";
 choices[7][1] = "El T&iacute;tulo V de la LOPD y el RD 428/1993 por el que se aprueba su Estatuto.";
 choices[7][2] = "El T&iacute;tulo V de la LOPD y el RD 994/1999 por el que se aprueba su Estatuto.";
 choices[7][3] = "La Disposici&oacute;n Adicional Tercera de la LOPD y el RD 428/1993 por el que se aprueba su Estatuto.";
 answers[7] = choices[7][0];
 units[7] = "29";
 comments[7] = "Id Pregunta: 550. ";


//  Id pregunta: 606 AÃ±o de creación de pregunta: 2006-01-01
 questions[8]= "9)  Los miembros del Consejo Consultivo de la Agencia de Protecci&oacute;n de Datos desempe&ntilde;ar&aacute;n su cargo:";
 choices[8]= new Array();
 choices[8][0] = "durante seis a&ntilde;os";
 choices[8][1] = "durante cinco a&ntilde;os";
 choices[8][2] = "durante tres a&ntilde;os";
 choices[8][3] = "durante cuatro a&ntilde;os";
 answers[8] = choices[8][3];
 units[8] = "29";
 comments[8] = "Id Pregunta: 606. ";


//  Id pregunta: 659 AÃ±o de creación de pregunta: 2006-01-01
 questions[9]= "10)  Los derechos de explotaci&oacute;n de un programa de ordenador cuando el autor es una persona f&iacute;sica se mantienen como m&aacute;ximo:";
 choices[9]= new Array();
 choices[9][0] = "Durante toda la vida del autor y del heredero leg&iacute;timo de estos derechos";
 choices[9][1] = "Durante toda la vida del autor y cincuenta a&ntilde;os despu&eacute;s de su muerte";
 choices[9][2] = "Durante toda la vida del autor y setenta a&ntilde;os despu&eacute;s de su muerte";
 choices[9][3] = "De forma indefinida mientras no se produzca la cesi&oacute;n de estos derechos por parte del titular de los mismos";
 answers[9] = choices[9][2];
 units[9] = "36";
 comments[9] = "Id Pregunta: 659. ";


//  Id pregunta: 734 AÃ±o de creación de pregunta: 2004-01-01
 questions[10]= "11)  &iquest;Cu&aacute;l de los siguientes servicios NO est&aacute; regulado por la Ley 34/2002, de Servicios de la Sociedad de la Informaci&oacute;n y de Comercio Electr&oacute;nico, m&aacute;s conocida como LSSI?";
 choices[10]= new Array();
 choices[10][0] = "La contrataci&oacute;n de bienes y servicios por v&iacute;a electr&oacute;nica";
 choices[10][1] = "El v&iacute;deo bajo demanda";
 choices[10][2] = "El teletexto televisivo";
 choices[10][3] = "La organizaci&oacute;n y gesti&oacute;n de subastas por medios electr&oacute;nicos";
 answers[10] = choices[10][2];
 units[10] = "30";
 comments[10] = "Id Pregunta: 734. Examen TIC MAP B 2004. Ley 34/2002, Anexo Definiciones. Posteriormente, tanto el teletexto televisivo como el v&iacute;deo bajo demanda se eliminaron de la ley.";


//  Id pregunta: 1492 AÃ±o de creación de pregunta: 2009-01-01
 questions[11]= "12)  &iquest;Deben los prestadores de servicios de la sociedad de la informaci&oacute;n inscribirse en alg&uacute;n registro?:";
 choices[11]= new Array();
 choices[11][0] = "Es necesaria una autorizaci&oacute;n administrativa";
 choices[11][1] = "S&iacute;, pero a&uacute;n no se ha decidido donde";
 choices[11][2] = "No, pero los datos de su inscripci&oacute;n en el Registro Mercantil en el que, en su caso, se encuentren inscritos o de aquel otro registro p&uacute;blico en el que lo estuvieran para la adquisici&oacute;n de personalidad jur&iacute;dica o a los solos efectos de publicidad forman parte de la informaci&oacute;n general considerada en el art&iacute;culo 10 de la Ley 34/2002.";
 choices[11][3] = "No, pero se debe comunicar al Registro Mercantil el nombre de dominio si es utilizado para publicidad";
 answers[11] = choices[11][2];
 units[11] = "30";
 comments[11] = "Id Pregunta: 1492. Ley 34/2002, art&iacute;culo 9";


//  Id pregunta: 1493 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  &iquest;En qu&eacute; condiciones est&aacute; permitido el env&iacute;o de comunicaciones comerciales por medios electr&oacute;nicos? :";
 choices[12]= new Array();
 choices[12][0] = "Se permite el env&iacute;o de mensajes publicitarios o comerciales por correo electr&oacute;nico a aquellos usuarios que previamente lo hubieran autorizado o lo hubieran solicitado de forma expresa";
 choices[12][1] = "El spam est&aacute; permitido si se conoce el emisor";
 choices[12][2] = "El SMS no es equiparable al mail, por lo tanto el env&iacute;o masivo con este medio esta pemitido";
 choices[12][3] = "Siempre aunque no lo hayan solocitado los receptores, pues el emisor aparece en el mensaje";
 answers[12] = choices[12][0];
 units[12] = "30";
 comments[12] = "Id Pregunta: 1493. Ley 34/2002, art&iacute;culo 21";


//  Id pregunta: 1690 AÃ±o de creación de pregunta: 2004-01-01
 questions[13]= "14)  Seg&uacute;n la Ley de Servicios de la Siciedad d ela Informaci&oacute;n y Comercio electr&oacute;nico, la resistencia a la inspecci&oacute;n de los funcionarios, &iquest;c&oacute;mo est&aacute; considerada?";
 choices[13]= new Array();
 choices[13][0] = "Infracci&oacute;n muy grave";
 choices[13][1] = "Infracci&oacute;n grave";
 choices[13][2] = "Infracci&oacute;n leve";
 choices[13][3] = "No se considera infracci&oacute;n";
 answers[13] = choices[13][1];
 units[13] = "30";
 comments[13] = "Id Pregunta: 1690. Ley 34/2002, art&iacute;culo 38";


//  Id pregunta: 1875 AÃ±o de creación de pregunta: 2006-01-01
 questions[14]= "15)  De acuerdo con la ley 59/2003, se&ntilde;ale la falsa:";
 choices[14]= new Array();
 choices[14][0] = "Por la comisi&oacute;n de infracciones muy graves, se impondr&aacute; al infractor multa de 150.001 a 600.000 euros";
 choices[14][1] = "Por la comisi&oacute;n de infracciones graves, se impondr&aacute; al infractor multa de 30.001 a 150.000 euros";
 choices[14][2] = "Por la comisi&oacute;n de infracciones leves, se impondr&aacute; al infractor una multa por importe de hasta 30.000 euros";
 choices[14][3] = "Ninguna de las anteriores";
 answers[14] = choices[14][3];
 units[14] = "30";
 comments[14] = "Id Pregunta: 1875. Ley 59/2003, art&iacute;culo 32";


//  Id pregunta: 1877 AÃ±o de creación de pregunta: 2006-01-01
 questions[15]= "16)  El &oacute;rgano encargado de la supervisi&oacute;n y control de los servicios de la Sociedad de la Informaci&oacute;n es:";
 choices[15]= new Array();
 choices[15][0] = "El Ministerio de Econom&iacute;a y Hacienda.";
 choices[15][1] = "El Ministerio de Industria, Turismo y Comercio";
 choices[15][2] = "El Ministerio de Justicia";
 choices[15][3] = "No hay ning&uacute;n &oacute;rgano encargado de la supervisi&oacute;n y control dado que no se requiere autorizaci&oacute;n previa.";
 answers[15] = choices[15][1];
 units[15] = "30";
 comments[15] = "Id Pregunta: 1877. Ley 34/2002, art&iacute;culo 35 (extinto Ministerio de Ciencia y Tecnolog&iacute;a)";


//  Id pregunta: 4246 AÃ±o de creación de pregunta: 2007-01-01
 questions[16]= "17)  Seg&uacute;n la Ley 11/2007 de Acceso Electr&oacute;nico de los Ciudadanos a los Servicios P&uacute;blicos:";
 choices[16]= new Array();
 choices[16][0] = "Se deja en manos de las propias Administraciones determinar si los ciudadanos van a poder de modo efectivo, o no, relacionarse por medios electr&oacute;nicos con ellas.";
 choices[16][1] = "Afecta s&oacute;lo a la Administraci&oacute;n General del Estado, aunque se espera que el resto de administraciones (auton&oacute;mica y local) adopten algunas de las medidas expresadas en la ley de forma voluntaria.";
 choices[16][2] = "Se garantiza el derecho del ciudadano a no tener que presentar informaci&oacute;n que se encuentre ya en poder de las administraciones.";
 choices[16][3] = "Las Administraciones podr&aacute;n permitir a los ciudadanos que consulten el estado de tramitaci&oacute;n de los procedimientos que se tengan en marcha, pero en ning&uacute;n caso estar&aacute;n obligadas a ello.";
 answers[16] = choices[16][2];
 units[16] = "43";
 comments[16] = "Id Pregunta: 4246. Sobre Proyecto LAECAP";


//  Id pregunta: 4254 AÃ±o de creación de pregunta: 2007-01-01
 questions[17]= "18)  Como parte de la legislaci&oacute;n para el impulso de la sociedad de la informaci&oacute;n se incluyen:";
 choices[17]= new Array();
 choices[17][0] = "La Ley 34/ 2002 de Servicios de la Sociedad de la Informaci&oacute;n y del Comercio Electr&oacute;nico";
 choices[17][1] = "La Ley 59/2003 de 19 de diciembre de firma electr&oacute;nica";
 choices[17][2] = "La Directiva Comunitaria 2000/31/CE de la Sociedad de la Informaci&oacute;n y Comercio Electr&oacute;nico";
 choices[17][3] = "Todas las anteriores";
 answers[17] = choices[17][3];
 units[17] = "30";
 comments[17] = "Id Pregunta: 4254. NULL";


//  Id pregunta: 4343 AÃ±o de creación de pregunta: 2007-01-01
 questions[18]= "19)  Indique cu&aacute;l de las siguientes acciones no es funci&oacute;n de la Firma Electr&oacute;nica, de acuerdo con lo establecido en la Ley 59/2003:";
 choices[18]= new Array();
 choices[18][0] = "Identificar al remitente de un mensaje de manera fidedigna, asegurando su imputabilidad.";
 choices[18][1] = "Evitar accesos indeseados a su propio ordenador, por parte de terceros.";
 choices[18][2] = "Verificar que el mensaje no ha sido manipulado";
 choices[18][3] = "Almacenar la clave privada en el propio ordenador o una tarjeta criptogr&aacute;fica.";
 answers[18] = choices[18][1];
 units[18] = "30";
 comments[18] = "Id Pregunta: 4343. NULL";


//  Id pregunta: 4659 AÃ±o de creación de pregunta: 2007-01-01
 questions[19]= "20)  &iquest;Cu&aacute;l de las siguientes no es un servicio ofrecido por el DNI electronico?";
 choices[19]= new Array();
 choices[19][0] = "Firma electronica de documentos";
 choices[19][1] = "Identificacion en medios telematicos";
 choices[19][2] = "Acreditar la identidad fisica";
 choices[19][3] = "Tarjeta sanitaria electronica";
 answers[19] = choices[19][3];
 units[19] = "30";
 comments[19] = "Id Pregunta: 4659. RD 1553/2005, art&iacute;culo 1";


//  Id pregunta: 4709 AÃ±o de creación de pregunta: 2007-01-01
 questions[20]= "21)  &iquest;Qu&eacute; no es sociedad de la informaci&oacute;n?";
 choices[20]= new Array();
 choices[20][0] = "Un estadio social y econ&oacute;mico de desarrollo.";
 choices[20][1] = "La posibilidad de obtener y compartir &ldquo;cualquier&rdquo; informaci&oacute;n de manera instant&aacute;nea desde cualquier lugar.";
 choices[20][2] = "Una situaci&oacute;n en la que la mayor parte de los empleos est&aacute;n asociados a la producci&oacute;n de bienes tangibles.";
 choices[20][3] = "El cambio de los medios de generaci&oacute;n de riqueza desde los sectores industriales a los sectores de servicios";
 answers[20] = choices[20][2];
 units[20] = "30";
 comments[20] = "Id Pregunta: 4709. Examen 2006 JCYL";


//  Id pregunta: 4788 AÃ±o de creación de pregunta: 2007-01-01
 questions[21]= "22)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[21]= new Array();
 choices[21][0] = "Las resoluciones de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos son recurribles en alzada ante el Ministrode Industria, Turismo y Comercio";
 choices[21][1] = "Las resoluciones de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos no pueden ser objeto de recurso alguno";
 choices[21][2] = "Las resoluciones de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos agotan la v&iacute;a administrativa";
 choices[21][3] = "Por v&iacute;a reglamentaria se establecer&aacute; el sistema de recursos administrativos ante las resoluciones de laAgencia Espa&ntilde;ola de Protecci&oacute;n de Datos";
 answers[21] = choices[21][2];
 units[21] = "30";
 comments[21] = "Id Pregunta: 4788. LOPD, art&iacute;culo 48";


//  Id pregunta: 5043 AÃ±o de creación de pregunta: 2003-01-01
 questions[22]= "23)  &iquest;Cu&aacute;l es la naturaleza j&uacute;ridica de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos?";
 choices[22]= new Array();
 choices[22][0] = "Organismo aut&oacute;nomo";
 choices[22][1] = "Entidad P&uacute;blica Empresarial";
 choices[22][2] = "Ente de Derecho p&uacute;blico regulado por su legislaci&oacute;n espec&iacute;fica";
 choices[22][3] = "Agencia Estatal de las previstas en la Ley 28/2006, de 18 de julio. (Art. 35 LO 13/1999 y Disposici&oacute;nadicional d&eacute;cima de la LOFAGE)";
 answers[22] = choices[22][2];
 units[22] = "29";
 comments[22] = "Id Pregunta: 5043. Examen TIC A 2007";


//  Id pregunta: 5067 AÃ±o de creación de pregunta: 2003-01-01
 questions[23]= "24)  &iquest;En cu&aacute;l de las siguientes zonas del chip del DNIe se almacenan los datos biom&eacute;tricos?:";
 choices[23]= new Array();
 choices[23][0] = "Zona p&uacute;blica";
 choices[23][1] = "Zona privada";
 choices[23][2] = "Zona de seguridad";
 choices[23][3] = "Zona compartida";
 answers[23] = choices[23][2];
 units[23] = "30";
 comments[23] = "Id Pregunta: 5067. Examen TIC A 2007";


//  Id pregunta: 5267 AÃ±o de creación de pregunta: 2003-01-01
 questions[24]= "25)  El marco regulador del BOE en formato electr&oacute;nico esta recogido en la siguiente norma";
 choices[24]= new Array();
 choices[24][0] = "RD 181/2008";
 choices[24][1] = "RD 1495/2007";
 choices[24][2] = "a y b";
 choices[24][3] = "Ninguna de las anteriores";
 answers[24] = choices[24][0];
 units[24] = "30";
 comments[24] = "Id Pregunta: 5267. ";


//  Id pregunta: 5268 AÃ±o de creación de pregunta: 2003-01-01
 questions[25]= "26)  En un fichero que contiene datos de car&aacute;cter personal, la presencia de informaci&oacute;n relativa a la minusval&iacute;a de las personas &hellip;";
 choices[25]= new Array();
 choices[25][0] = "significa que ha de estar bajo medidas de seguridad de car&aacute;cter alto de modo general, aunque bajo ciertas circunstancias basta que contemple medidas de seguridad de car&aacute;cter b&aacute;sico";
 choices[25][1] = "al menos de car&aacute;cter medio";
 choices[25][2] = "de car&aacute;cter alto en todas las circunstancias";
 choices[25][3] = "de car&aacute;cter b&aacute;sico en todas las circunstancias";
 answers[25] = choices[25][0];
 units[25] = "29";
 comments[25] = "Id Pregunta: 5268. ";


//  Id pregunta: 5651 AÃ±o de creación de pregunta: 2003-01-01
 questions[26]= "27)  Seg&uacute;n el RD 1720/2007, se implantar&aacute;n, adem&aacute;s de las medidas de nivel b&aacute;sico, las de nivel medio, a los siguientes ficheros:";
 choices[26]= new Array();
 choices[26][0] = "Aquellos de los que sean responsables Administraciones tributaria y se relacionen con el ejercicio de sus potestades";
 choices[26][1] = "Los relativos a la comision de infracciones administrativas o penales";
 choices[26][2] = "Aquellos que contengan datos derivados de la violencia de g&eacute;nero";
 choices[26][3] = "La a) y la b) son correctas";
 answers[26] = choices[26][3];
 units[26] = "29";
 comments[26] = "Id Pregunta: 5651. ";


//  Id pregunta: 5740 AÃ±o de creación de pregunta: 2009-01-01
 questions[27]= "28)  &iquest;Puede haber firma electr&oacute;nica reconocida que no sea avanzada?";
 choices[27]= new Array();
 choices[27][0] = "S&iacute;, si el dispositivo de creaci&oacute;n de firma es seguro";
 choices[27][1] = "S&iacute;, si se usa un certificado reconocido";
 choices[27][2] = "No, en ning&uacute;n caso";
 choices[27][3] = "S&iacute;, si lo aceptan ambas partes";
 answers[27] = choices[27][2];
 units[27] = "30";
 comments[27] = "Id Pregunta: 5740. Ley 59/2003, art&iacute;culo 3 y resto de articulado";


//  Id pregunta: 5741 AÃ±o de creación de pregunta: 2009-01-01
 questions[28]= "29)  &iquest;Tiene la firma electr&oacute;nica el mismo valor ante la ley que la firma manuscrita?";
 choices[28]= new Array();
 choices[28][0] = "S&iacute;, siempre";
 choices[28][1] = "No, en ning&uacute;n caso";
 choices[28][2] = "S&iacute;, si es firma electr&oacute;nica avanzada";
 choices[28][3] = "S&iacute;, si es firma electr&oacute;nica reconocida";
 answers[28] = choices[28][3];
 units[28] = "30";
 comments[28] = "Id Pregunta: 5741. Ley 59/2003, art&iacute;culo 3.4";


//  Id pregunta: 5772 AÃ±o de creación de pregunta: 2009-01-01
 questions[29]= "30)  El derecho de acceso al que se refiere el Art. 15 de la LOPD s&oacute;lo podr&aacute; ser ejercitado a intervalos de";
 choices[29]= new Array();
 choices[29][0] = "12 meses, salvo que el interesado acredite un inter&eacute;s leg&iacute;timo al efecto en cuyo caso podr&aacute; ejercerlo en el plazo de 6 meses";
 choices[29][1] = "12 meses, salvo que el interesado acredite un inter&eacute;s leg&iacute;timo al efecto en cuyo caso podr&aacute; ejercerlo antes";
 choices[29][2] = "6 meses, salvo que el interesado acredite un inter&eacute;s leg&iacute;timo al efecto en cuyo caso podr&aacute; ejercerlo en el plazo de 2 meses";
 choices[29][3] = "10 d&iacute;as";
 answers[29] = choices[29][1];
 units[29] = "29";
 comments[29] = "Id Pregunta: 5772. ";


//  Id pregunta: 5795 AÃ±o de creación de pregunta: 2009-01-01
 questions[30]= "31)  Identifique la opci&oacute;n que NO es correcta seg&uacute;n lo especificado en Ley 11/2007. Los ciudadanos podr&aacute;n utilizar los siguientes sistemas de firma electr&oacute;nica para relacionarse con las Administraciones P&uacute;blicas, de acuerdo con lo que cada Administraci&oacute;n determine:";
 choices[30]= new Array();
 choices[30][0] = "En todo caso, los sistemas de firma electr&oacute;nica incorporados al Documento Nacional de Identidad, para personas f&iacute;sicas.";
 choices[30][1] = "Sistemas de firma electr&oacute;nica avanzada basados en certificados electr&oacute;nicos reconocidos emitidos por cualquier prestador de servicios de certificaci&oacute;n.";
 choices[30][2] = "Utilizaci&oacute;n de claves concertadas en un registro previo como usuario, en los t&eacute;rminos y condiciones que en cada caso se determinen.";
 choices[30][3] = "Aportaci&oacute;n de informaci&oacute;n conocida por ambas partes, en los t&eacute;rminos y condiciones que en cada caso se terminen.";
 answers[30] = choices[30][1];
 units[30] = "43";
 comments[30] = "Id Pregunta: 5795. MAP 2008 A2. Actualizada a cambios Ley 15/2014: se deben admitir certificados reconocidos por PSC en lista de confianza publicada en sede-e de MINETUR.";


//  Id pregunta: 5797 AÃ±o de creación de pregunta: 2009-01-01
 questions[31]= "32)   Respecto al &aacute;mbito de actuaci&oacute;n en la Plataforma de validaci&oacute;n y firma electr&oacute;nica, @firma, del Ministerio de Administraciones P&uacute;blicas, se&ntilde;ale la opci&oacute;n correcta:";
 choices[31]= new Array();
 choices[31][0] = "Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos.";
 choices[31][1] = "Todas las Administraciones P&uacute;blicas y Organismos asociados.";
 choices[31][2] = "Se except&uacute;an las Entidades Locales, Diputaciones provinciales y Cabildos, que acceden a los servicios proporcionados por las Comunidades Aut&oacute;nomas de su &aacute;mbito territorial.";
 choices[31][3] = "Se ofrecen los servicios de validaci&oacute;n y firma a cualquier organizaci&oacute;n de car&aacute;cter p&uacute;blico y privado";
 answers[31] = choices[31][1];
 units[31] = "30";
 comments[31] = "Id Pregunta: 5797. MAP 2008 A2";


//  Id pregunta: 5800 AÃ±o de creación de pregunta: 2009-01-01
 questions[32]= "33)  En base a la ley 59/2003, en que se diferencia la firma electr&oacute;nica reconocida de la firma electr&oacute;nica avanzada?";
 choices[32]= new Array();
 choices[32][0] = "En la clase de certificado electr&oacute;nico en que se basa.";
 choices[32][1] = "En el tipo de dispositivo criptogr&aacute;fico utilizado para la custodia de la clave privada.";
 choices[32][2] = "En la duracion maxima de su validez. La validez de la firma electr&oacute;nica reconocida nunca podra exceder de 4 a&ntilde;os.";
 choices[32][3] = "Las respuestas A y B son correctas.";
 answers[32] = choices[32][3];
 units[32] = "30";
 comments[32] = "Id Pregunta: 5800. Ley 59/2003, art&iacute;culo 3";


//  Id pregunta: 5956 AÃ±o de creación de pregunta: 2009-01-01
 questions[33]= "34)  Se&ntilde;ale la respuesta err&oacute;nea.";
 choices[33]= new Array();
 choices[33][0] = "El Centro de Transferencia de Tecnolog&iacute;a es la respuesta al mandato de La ley 11/2007, de 22 de Junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, en su art&iacute;culo 46 sobre la necesidad de contar con un directorio general de aplicaciones para su reutilizaci&oacute;n";
 choices[33][1] = "Los principales objetivos del CTT son: crear un repositorio com&uacute;n de software, crear una base de conocimiento, crear un espacio donde se puedan compartir experiencias y cooperar";
 choices[33][2] = "Los proyectos publicados en el portal CTT est&aacute;n dirigidos a las Administraciones P&uacute;blicas y las empresas que trabajan en el &aacute;mbito de las Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones y especialmente en Administraci&oacute;n Electr&oacute;nica";
 choices[33][3] = "El CTT es un portal que publica un directorio general de aplicaciones e informa de los proyectos, servicios, normativa y soluciones que se est&aacute;n desarrollando en materia de Administraci&oacute;n electr&oacute;nica.";
 answers[33] = choices[33][2];
 units[33] = "44";
 comments[33] = "Id Pregunta: 5956. www.ctt.map.es";


//  Id pregunta: 5970 AÃ±o de creación de pregunta: 2010-01-01
 questions[34]= "35)  Las medidas de seguridad exigibles a los ficheros y tratamientos se clasifican en:";
 choices[34]= new Array();
 choices[34][0] = "Bajo, medio y alto";
 choices[34][1] = "B&aacute;sico, medio y alto";
 choices[34][2] = "Bajo, aquellos que eval&uacute;an la personalidad, medio y alto";
 choices[34][3] = "Bajo, medio, alto y especialmente protegidos";
 answers[34] = choices[34][1];
 units[34] = "29";
 comments[34] = "Id Pregunta: 5970. Castilla La Mancha 2009";


//  Id pregunta: 6373 AÃ±o de creación de pregunta: 2010-01-01
 questions[35]= "36)  &iquest;Cu&aacute;l de los siguientes no es un grupo de medidas de seguridad de los establecidos en el Esquema Nacional de Seguridad?";
 choices[35]= new Array();
 choices[35][0] = "Marco de gesti&oacute;n";
 choices[35][1] = "Marco organizativo";
 choices[35][2] = "Marco operacional";
 choices[35][3] = "Medidas de protecci&oacute;n";
 answers[35] = choices[35][0];
 units[35] = "43";
 comments[35] = "Id Pregunta: 6373. Anexo II ENS";


//  Id pregunta: 6401 AÃ±o de creación de pregunta: 2010-01-01
 questions[36]= "37)  La red multicanal de acceso a informaci&oacute;n o tramitaci&oacute;n de los servicios p&uacute;blicos de cualquier administraci&oacute;n, es conocida como:";
 choices[36]= new Array();
 choices[36][0] = "Red 112";
 choices[36][1] = "Red 060";
 choices[36][2] = "Red Conecta";
 choices[36][3] = "Red SARA";
 answers[36] = choices[36][1];
 units[36] = "30";
 comments[36] = "Id Pregunta: 6401. NULL";


//  Id pregunta: 6587 AÃ±o de creación de pregunta: 2010-01-01
 questions[37]= "38)  El RD 1720/2007 s&oacute;lo desarrolla las medidas de seguridad en el tratamiento de datos de car&aacute;cter personal para los ficheros";
 choices[37]= new Array();
 choices[37][0] = "automatizados";
 choices[37][1] = "no automatizados";
 choices[37][2] = "A y B son correctas";
 choices[37][3] = "A y B son incorrectas";
 answers[37] = choices[37][2];
 units[37] = "29";
 comments[37] = "Id Pregunta: 6587. NULL";


//  Id pregunta: 6593 AÃ±o de creación de pregunta: 2010-01-01
 questions[38]= "39)  Un tipo de software libre que lleva al cabo una auditor&iacute;a de todo el software y hardware que se encuentra en una red de una manera sencilla, adem&aacute;s de eficiente es";
 choices[38]= new Array();
 choices[38][0] = "MAPILab Reports:";
 choices[38][1] = "Network Inventory Advisor";
 choices[38][2] = "Visual audit. X4";
 choices[38][3] = "Todas las respuestas anteriores son correctas";
 answers[38] = choices[38][3];
 units[38] = "75";
 comments[38] = "Id Pregunta: 6593. NULL";


//  Id pregunta: 6596 AÃ±o de creación de pregunta: 2010-01-01
 questions[39]= "40)  El RD 1720/2007 indica que deben aplicarse t&eacute;cnicas de cifrado";
 choices[39]= new Array();
 choices[39][0] = "En la distribuci&oacute;n de soportes para datos personales a los que corresponde aplicar medidas de seguridad de nivel alto";
 choices[39][1] = "Los datos personales en su transmisi&oacute;n a trav&eacute;s de las redes de telecomunicaciones";
 choices[39][2] = "A y B son correctas";
 choices[39][3] = "A y B son incorrectas";
 answers[39] = choices[39][0];
 units[39] = "75";
 comments[39] = "Id Pregunta: 6596. NULL";


//  Id pregunta: 7141 AÃ±o de creación de pregunta: 2010-01-01
 questions[40]= "41)  &iquest;Cu&aacute;l es la vigencia de los certificados electr&oacute;nicos incluidos en el DNI electr&oacute;nico?";
 choices[40]= new Array();
 choices[40][0] = "Dos a&ntilde;os";
 choices[40][1] = "Cuatro a&ntilde;os";
 choices[40][2] = "30 meses";
 choices[40][3] = "18 meses";
 answers[40] = choices[40][2];
 units[40] = "30";
 comments[40] = "Id Pregunta: 7141. Examen TIC B 2009 (RD 1553/2005, art&iacute;culo 12)";


//  Id pregunta: 8223 AÃ±o de creación de pregunta: 2011-01-01
 questions[41]= "42)  En un Ministerio de la Administraci&oacute;n General del Estado, &iquest;cu&aacute;l es el rango administrativo m&iacute;nimo de una sede electr&oacute;nica?:";
 choices[41]= new Array();
 choices[41][0] = "Una Secretar&iacute;a de Estado.";
 choices[41][1] = "Una Subsecretar&iacute;a.";
 choices[41][2] = "Una Subdirecci&oacute;n General.";
 choices[41][3] = "Una Direcci&oacute;n General.";
 answers[41] = choices[41][3];
 units[41] = "43";
 comments[41] = "Id Pregunta: 8223. Examen TIC A1 2010";


//  Id pregunta: 8248 AÃ±o de creación de pregunta: 2011-01-01
 questions[42]= "43)  Indique la afirmaci&oacute;n FALSA. De acuerdo a la ley 30/2007, el sistema de determinaci&oacute;n del precio de los contratos para el desarrollo de programas inform&aacute;ticos:";
 choices[42]= new Array();
 choices[42][0] = "Puede ser a tanto alzado.";
 choices[42][1] = "Puede resultar de la aplicaci&oacute;n de honorarios por tarifas.";
 choices[42][2] = "Se debe establecer en el Pliego de Prescripciones T&eacute;cnicas.";
 choices[42][3] = "Puede resultar de la combinaci&oacute;n de varias modalidades de c&aacute;lculo.";
 answers[42] = choices[42][2];
 units[42] = "36,37";
 comments[42] = "Id Pregunta: 8248. Examen TIC A1 2010";


//  Id pregunta: 8400 AÃ±o de creación de pregunta: 2011-01-01
 questions[43]= "44)  Respeto a los c&oacute;mputos de plazos, la ley 11/2007, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, dispone que:";
 choices[43]= new Array();
 choices[43][0] = "Se consideran h&aacute;biles los 365 d&iacute;as del a&ntilde;o, debiendo estar operativos los registros 365x24.";
 choices[43][1] = "Cada sede electr&oacute;nica en la que est&eacute; disponible un registro electr&oacute;nico determinar&aacute;, atendiendo al &aacute;mbito territorial en el que ejerece sus competencias el titular de aquella, los d&iacute;as que se considerar&aacute;n inh&aacute;biles";
 choices[43][2] = "Ser&aacute;n h&aacute;biles todos los d&iacute;as, con excepci&oacute;n de las fiestas de la Constituci&oacute;n, Navidad, y A&ntilde;o nuevo. ";
 choices[43][3] = "Ser&aacute;n h&aacute;biles todos los d&iacute;as, excepto aquellos en que en el Registro se hagan labores de mantenimiento inform&aacute;tico que impidan su servicio ";
 answers[43] = choices[43][1];
 units[43] = "43";
 comments[43] = "Id Pregunta: 8400. Examen TIC A2 2010";


//  Id pregunta: 8402 AÃ±o de creación de pregunta: 2011-01-01
 questions[44]= "45)  El directorio de Sedes Electr&oacute;nicas de la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos es gestionado por:";
 choices[44]= new Array();
 choices[44][0] = "La Presidencia del Gobierno";
 choices[44][1] = "El Ministerio de la Presidencia.";
 choices[44][2] = "La Red SARA. ";
 choices[44][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[44] = choices[44][1];
 units[44] = "43";
 comments[44] = "Id Pregunta: 8402. Examen TIC A2 2010. Actualizada referencia a CETIC por Disp. Ad. 2&ordf; RD 806/2014.";


//  Id pregunta: 8404 AÃ±o de creación de pregunta: 2011-01-01
 questions[45]= "46)  Para que las im&aacute;genes electr&oacute;nicas realizadas por la Administraci&oacute;n de documentos en soporte no electr&oacute;nico tengan la naturaleza de copias electr&oacute;nicas aut&eacute;nticas, con el alcance y efectos previstos en el art. 46 de la ley 30/1992, se deben cumplir ciertos requisitos. &iquest;Cu&aacute;l de los siguientes NO es uno de ellos? ";
 choices[45]= new Array();
 choices[45][0] = "Que la copia electr&oacute;nica incluya su car&aacute;cter de copia entre los metadatos asociados. ";
 choices[45][1] = "Que el documento copiado sea un original o una copia aut&eacute;ntica.";
 choices[45][2] = "Que las im&aacute;genes electr&oacute;nicas est&eacute;n codificadas conforme a algunos de los formatos y con los niveles de calidad y condiciones t&eacute;cnicas especificados en el Esquema Nacional de Interoperabilidad.  ";
 choices[45][3] = "Que en los metadatos se incluya el &oacute;rgano y lugar donde se custodia el original o copia autentica en soporte no electr&oacute;nico.";
 answers[45] = choices[45][3];
 units[45] = "43";
 comments[45] = "Id Pregunta: 8404. Examen TIC A2 2010";


//  Id pregunta: 8438 AÃ±o de creación de pregunta: 2011-01-01
 questions[46]= "47)  &iquest;Cu&aacute;l de los siguientes elementos no es obligatorio incluir en la disposici&oacute;n de creaci&oacute;n de un registro electr&oacute;nico seg&uacute;n el RD 1671/2009?";
 choices[46]= new Array();
 choices[46][0] = "&Oacute;rgano o unidad responsable de la gesti&oacute;n.";
 choices[46][1] = "Fecha y hora oficial y referencia al calendario de d&iacute;as inh&aacute;biles que sea aplicable.";
 choices[46][2] = "Medios de presentaci&oacute;n de documentaci&oacute;n complementaria a una comunicaci&oacute;n, escrito o solicitud previamente presentada en el registro electr&oacute;nico.";
 choices[46][3] = "Buzones de correo electr&oacute;nico corporativo y/o fax asignado a los empleados p&uacute;blicos o a las distintas unidades y &oacute;rganos.";
 answers[46] = choices[46][3];
 units[46] = "43";
 comments[46] = "Id Pregunta: 8438. ";


//  Id pregunta: 8745 AÃ±o de creación de pregunta: 2011-01-01
 questions[47]= "48)  &iquest;C&oacute;mo se define la sede electr&oacute;nica en la Ley 11/2007, de 22 de junio, de Acceso Electr&oacute;nico de los Ciudadanos a los Servicios P&uacute;blicos, LAECSP?";
 choices[47]= new Array();
 choices[47][0] = "La sede electr&oacute;nica no se define en la LAECSP, sino en la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Informaci&oacute;n y de Comercio Electr&oacute;nico, tanto para el sector p&uacute;blico como el privado.";
 choices[47][1] = "Es aquella direcci&oacute;n electr&oacute;nica disponible para los ciudadanos a trav&eacute;s de redes de telecomunicaciones cuya titularidad, gesti&oacute;n y administraci&oacute;n corresponde a una Administraci&oacute;n P&uacute;blica &oacute;rgano o entidad administrativa en el ejercicio de sus competencias";
 choices[47][2] = "Se establece simplemente como nueva denominaci&oacute;n para el registro telem&aacute;tico, ya definido en la Ley 30/1992. de 26 de noviembre de R&eacute;gimen Jur&iacute;dico de las Administraciones P&uacute;blicas y del Procedimiento Administrativo Com&uacute;n, LRJPAC";
 choices[47][3] = "Es el centro de proceso de datos correspondiente a cada &oacute;rgano p&uacute;blico, d&oacute;nde se localizan los aplicativos mediante los cuales aqu&eacute;l ejerce sus competencias.";
 answers[47] = choices[47][1];
 units[47] = "43";
 comments[47] = "Id Pregunta: 8745. Examen TIC A2 2010 interna";


//  Id pregunta: 8903 AÃ±o de creación de pregunta: 2011-01-01
 questions[48]= "49)  Seg&uacute;n la Ley Org&aacute;nica 15/1999, de Protecci&oacute;n de Datos de Car&aacute;cter Personal, no es una fuente accesible al p&uacute;blico:";
 choices[48]= new Array();
 choices[48][0] = "El padr&oacute;n municipal.";
 choices[48][1] = "Los diarios oficiales.";
 choices[48][2] = "El censo promocional.";
 choices[48][3] = "Los medios de comunicaci&oacute;n";
 answers[48] = choices[48][0];
 units[48] = "29";
 comments[48] = "Id Pregunta: 8903. Operador Ayto. Madrid 2010";


//  Id pregunta: 8944 AÃ±o de creación de pregunta: 2011-01-01
 questions[49]= "50)  &iquest;Cu&aacute;l de las siguientes no es una dimensi&oacute;n de la seguridad judicial electr&oacute;nica de acuerdo a la ley 18/2011?";
 choices[49]= new Array();
 choices[49][0] = "Conservaci&oacute;n";
 choices[49][1] = "Confidencialidad";
 choices[49][2] = "Trazabilidad";
 choices[49][3] = "Todas las anteriores lo son";
 answers[49] = choices[49][3];
 units[49] = "43";
 comments[49] = "Id Pregunta: 8944. ";


//  Id pregunta: 8948 AÃ±o de creación de pregunta: 2011-01-01
 questions[50]= "51)  &iquest;En qu&eacute; caso ser&iacute;a suficiente una autoevaluaci&oacute;n como auditor&iacute;a al sistema de informaci&oacute;n seg&uacute;n el RD 3/2010?";
 choices[50]= new Array();
 choices[50][0] = "En sistemas de informaci&oacute;n de categor&iacute;a b&aacute;sica";
 choices[50][1] = "En sistemas de informaci&oacute;n de categor&iacute;a b&aacute;sica o inferior";
 choices[50][2] = "En sistemas de informaci&oacute;n de categor&iacute;a b&aacute;sica o media";
 choices[50][3] = "Cuando as&iacute; lo decida el responsable de seguridad competente";
 answers[50] = choices[50][1];
 units[50] = "43";
 comments[50] = "Id Pregunta: 8948. ";


//  Id pregunta: 8950 AÃ±o de creación de pregunta: 2011-01-01
 questions[51]= "52)  El Registro Electr&oacute;nico Com&uacute;n ser&aacute; gestionado por:";
 choices[51]= new Array();
 choices[51][0] = "El Ministerio de la Presidencia";
 choices[51][1] = "Por la Secretar&iacute;a de Estado de Telecomunicaciones y Sistemas de la Informaci&oacute;n";
 choices[51][2] = "Por la Secretar&iacute;a de Estado para la Funci&oacute;n P&uacute;blica";
 choices[51][3] = "Ninguna de las anteriores es cierta";
 answers[51] = choices[51][2];
 units[51] = "43";
 comments[51] = "Id Pregunta: 8950. ";


//  Id pregunta: 9035 AÃ±o de creación de pregunta: 2011-01-01
 questions[52]= "53)  En qu&eacute; t&iacute;tulo de la ley 11/2007 se habla sobre los registros electr&oacute;nicos";
 choices[52]= new Array();
 choices[52][0] = "T&iacute;tulo I";
 choices[52][1] = "T&iacute;tulo II";
 choices[52][2] = "T&iacute;tulo III";
 choices[52][3] = "T&iacute;tulo IV";
 answers[52] = choices[52][1];
 units[52] = "43";
 comments[52] = "Id Pregunta: 9035. NULL";


//  Id pregunta: 9062 AÃ±o de creación de pregunta: 2011-01-01
 questions[53]= "54)  &iquest;Cu&aacute;l de las siguientes es una infracci&oacute;n muy grave seg&uacute;n la normativa de protecci&oacute;n de datos de car&aacute;cter personal?";
 choices[53]= new Array();
 choices[53][0] = "La vulneraci&oacute;n del deber de guardar secreto acerca del tratamiento de los datos de car&aacute;cter personal";
 choices[53][1] = "No atender, u obstaculizar de forma sistem&aacute;tica el ejercicio de los derechos de acceso, rectificaci&oacute;n, cancelaci&oacute;n u oposici&oacute;n";
 choices[53][2] = "No cesar en el tratamiento il&iacute;cito de datos de car&aacute;cter personal cuando existiese un previo requerimiento del Director de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos para ello";
 choices[53][3] = "No solicitar la inscripci&oacute;n del fichero de datos de car&aacute;cter personal en el Registro General de Protecci&oacute;n de Datos";
 answers[53] = choices[53][2];
 units[53] = "29";
 comments[53] = "Id Pregunta: 9062. NULL";


//  Id pregunta: 9063 AÃ±o de creación de pregunta: 2011-01-01
 questions[54]= "55)  De acuedo a la ley 15/1999, la transmisi&oacute;n de los datos a un encargado del tratamiento sin dar cumplimiento a los deberes formales establecidos en el art&iacute;culo 12 de la ley (Acceso a los datos por cuenta de terceros) se considerar&aacute;:";
 choices[54]= new Array();
 choices[54][0] = "Infracci&oacute;n leve";
 choices[54][1] = "Infracci&oacute;n grave";
 choices[54][2] = "Infracci&oacute;n muy grave";
 choices[54][3] = "No se considerar&aacute; infracci&oacute;n";
 answers[54] = choices[54][0];
 units[54] = "29";
 comments[54] = "Id Pregunta: 9063. NULL";


//  Id pregunta: 9067 AÃ±o de creación de pregunta: 2011-01-01
 questions[55]= "56)  Seg&uacute;n el RD 1671/2009 cu&aacute;l de los siguientes elementos no es un contenido obligatorio del recibo electr&oacute;nico que deber&aacute;n emitir los registros electr&oacute;nicos";
 choices[55]= new Array();
 choices[55][0] = "N&uacute;mero de entrada de registro";
 choices[55][1] = "Informaci&oacute;n del plazo m&aacute;ximo establecido para la resoluci&oacute;n del procedimiento";
 choices[55][2] = "Copia del escrito, comunicaci&oacute;n o solicitud presentada y de los documentos adjuntos";
 choices[55][3] = "Todos las respuestas anteriores forman parte del contenido que debe tener el recibo de un registro electr&oacute;nico ";
 answers[55] = choices[55][2];
 units[55] = "43";
 comments[55] = "Id Pregunta: 9067. NULL";


//  Id pregunta: 9093 AÃ±o de creación de pregunta: 2013-01-01
 questions[56]= "57)  Cuando un trabajador asalariado crea un programa de ordenador, en el ejercicio de sus funciones:";
 choices[56]= new Array();
 choices[56][0] = "Los derechos de explotaci&oacute;n pertenecen al trabajador.";
 choices[56][1] = "Los derechos de explotaci&oacute;n pertenecen al empresario.";
 choices[56][2] = "Los derechos morales pertenecen al trabajador";
 choices[56][3] = "Los derechos morales pertenecen al empresario";
 answers[56] = choices[56][2];
 units[56] = "36";
 comments[56] = "Id Pregunta: 9093. ";


//  Id pregunta: 9097 AÃ±o de creación de pregunta: 2013-01-01
 questions[57]= "58)  &iquest;Cu&aacute;ntas copias de seguridad de un programa de ordenador se pueden realizar seg&uacute;n la legislaci&oacute;n vigente en materia de propiedad intelectual?";
 choices[57]= new Array();
 choices[57][0] = "No se pueden realizar copias de seguridad.";
 choices[57][1] = "La ley premite siempre la realizaci&oacute;n de una copia de seguridad.";
 choices[57][2] = "Una copia de seguridad, siempre que el titular no se oponga expresamente.";
 choices[57][3] = "Una copia de seguridad, pero lo tiene que autorizar expresamente el titular.";
 answers[57] = choices[57][1];
 units[57] = "36";
 comments[57] = "Id Pregunta: 9097. ";


//  Id pregunta: 9197 AÃ±o de creación de pregunta: 2013-01-01
 questions[58]= "59)  &iquest;Est&aacute;n protegidos los manuales de uso de un programa de ordenador?";
 choices[58]= new Array();
 choices[58][0] = "Los manuales de uso de un programa de ordeandor no est&aacute;n protegidos.";
 choices[58][1] = "Si, como obra literaria.";
 choices[58][2] = "Como obra literaria, pero s&oacute;lo si tienen suficiente calidad artistica.";
 choices[58][3] = "Si, como parte integrante del concepto &quot;programa de ordenador&quot;.";
 answers[58] = choices[58][3];
 units[58] = "36";
 comments[58] = "Id Pregunta: 9197. ";


//  Id pregunta: 9542 AÃ±o de creación de pregunta: 2013-01-01
 questions[59]= "60)  Las comunicaciones comerciales no solicitadas realizadas a trav&eacute;s de correo electr&oacute;nico o medios de comunicaci&oacute;n electr&oacute;nica equivalentes:";
 choices[59]= new Array();
 choices[59][0] = "Deben incluir al comienzo del mensaje la palabra &laquo;publicidad&raquo;.";
 choices[59][1] = "Deben indicar la persona f&iacute;sica o jur&iacute;dica en nombre de la cual se realizan.";
 choices[59][2] = "Deben incluir claramente las condiciones comerciales o promocionales.";
 choices[59][3] = "Est&aacute;n prohibidas.";
 answers[59] = choices[59][3];
 units[59] = "30";
 comments[59] = "Id Pregunta: 9542. Examen TIC A1 2011 (Ley 34/2002, art&iacute;culo 21)";


//  Id pregunta: 9543 AÃ±o de creación de pregunta: 2013-01-01
 questions[60]= "61)  En el contexto de la firma electr&oacute;nica y su regulaci&oacute;n en Espa&ntilde;a se&ntilde;ale la afirmaci&oacute;n FALSA.";
 choices[60]= new Array();
 choices[60][0] = "Los funcionarios al servicio de las administraciones p&uacute;blicas espa&ntilde;olas pueden firmar en el ejercicio de su cargo utilizando su DNI electr&oacute;nico.";
 choices[60][1] = "Los c&oacute;digos de verificaci&oacute;n segura (CSV) junto con los sellos de &oacute;rgano sirven para dotar de firma electr&oacute;nica reconocida a la actuaci&oacute;n administrativa automatizada.";
 choices[60][2] = "Un dispositivo seguro de creaci&oacute;n de firma debe garantizar que los datos usados para generar la firma pueden producirse s&oacute;lo una vez.";
 choices[60][3] = "Un certificado electr&oacute;nico reconocido ha de incluir la firma electr&oacute;nica avanzada del prestador de servicios de certificaci&oacute;n que lo expide.";
 answers[60] = choices[60][1];
 units[60] = "30";
 comments[60] = "Id Pregunta: 9543. Examen TIC A1 2011";


//  Id pregunta: 9549 AÃ±o de creación de pregunta: 2013-01-01
 questions[61]= "62)  Seg&uacute;n la Ley de Firma Electr&oacute;nica, indique cu&aacute;l NO es una circunstancia que se tendr&aacute; en cuenta para graduar la cuant&iacute;a de una sanci&oacute;n impuesta:";
 choices[61]= new Array();
 choices[61][0] = "El &aacute;mbito geogr&aacute;fico al que es aplicable la comisi&oacute;n de la infracci&oacute;n";
 choices[61][1] = "La existencia de intencionalidad, reincidencia o reiteraci&oacute;n";
 choices[61][2] = "El plazo de tiempo durante el cual se ha venido cometiendo la infracci&oacute;n";
 choices[61][3] = "El beneficio que haya reportado al infractor la infracci&oacute;n cometida.";
 answers[61] = choices[61][0];
 units[61] = "30";
 comments[61] = "Id Pregunta: 9549. Ley 59/2003, art&iacute;culo 33";


//  Id pregunta: 9570 AÃ±o de creación de pregunta: 2013-01-01
 questions[62]= "63)  Seg&uacute;n la Ley de Firma Electr&oacute;nica, durante la tramitaci&oacute;n de un proceso sancionador, podr&aacute; acordarse como medida provisional la suspensi&oacute;n temporal de la actividad del prestador de servicios de certificaci&oacute;n, incluyendo el cierre de sus establecimientos, cuando la infracci&oacute;n haya sido calicada como:";
 choices[62]= new Array();
 choices[62][0] = "Leve, grave o muy grave";
 choices[62][1] = "Grave o muy grave";
 choices[62][2] = "&Uacute;nicamente cuando haya sido calificada como muy grave";
 choices[62][3] = "En ning&uacute;n caso podr&aacute;n acordarse este tipo de medidas provisionales";
 answers[62] = choices[62][1];
 units[62] = "30";
 comments[62] = "Id Pregunta: 9570. Ley 59/2003, art&iacute;culo 34";


//  Id pregunta: 9580 AÃ±o de creación de pregunta: 2013-01-01
 questions[63]= "64)  Seg&uacute;n el RD 1671/2009 de 6 de noviembre, &iquest;cu&aacute;l de las siguientes condiciones NO es requisito necesario para el uso de CSV como sistema de firma electr&oacute;nica?";
 choices[63]= new Array();
 choices[63][0] = "Car&aacute;cter &uacute;nico del c&oacute;digo del documento.";
 choices[63][1] = "Utilizaci&oacute;n de generadores aleatorios tomando como semillas la identidad del firmante y el contenido del documento.";
 choices[63][2] = "Posibilidad de verificar el documento por el tiempo que se establezca.";
 choices[63][3] = "Para su utilizaci&oacute;n, se requiere una orden del Ministro competente o resoluci&oacute;n del titular del organismo p&uacute;blico, publicada en la sede electr&oacute;nica.";
 answers[63] = choices[63][1];
 units[63] = "43";
 comments[63] = "Id Pregunta: 9580. Examen TIC A1 2011";


//  Id pregunta: 9584 AÃ±o de creación de pregunta: 2013-01-01
 questions[64]= "65)  Los certificados incorporados al DNI-e:";
 choices[64]= new Array();
 choices[64][0] = "Son dos: de autenticaci&oacute;n y de firma del ciudadano.";
 choices[64][1] = "Los usuarios finales pueden validarlos en la Direcci&oacute;n General de la Polic&iacute;a, que est&aacute; constituida como Autoridad de Validaci&oacute;n.";
 choices[64][2] = "Est&aacute;n basados en la recomendaci&oacute;n X. 509 v.3 sin extensi&oacute;n alguna.";
 choices[64][3] = "Est&aacute;n integrados en un chip certificado en el nivel de seguridad EAL4+ definido en la norma ISO/IEC 15408.";
 answers[64] = choices[64][3];
 units[64] = "43, 74";
 comments[64] = "Id Pregunta: 9584. Examen TIC A1 2011";


//  Id pregunta: 9591 AÃ±o de creación de pregunta: 2013-01-01
 questions[65]= "66)  El Real Decreto 3/2010, en su art&iacute;culo 29, dispone que las gu&iacute;as de seguridad de las tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones para el mejor cumplimiento de lo establecido en el Esquema Nacional de Seguridad las elaborar&aacute; y difundir&aacute;:";
 choices[65]= new Array();
 choices[65][0] = "El Centro Criptol&oacute;gico Nacional.";
 choices[65][1] = "La Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 choices[65][2] = "Cada organismo p&uacute;blico que implante medidas de seguridad de acuerdo con el Esquema Nacional de Seguridad.";
 choices[65][3] = "El Consejo Superior de Administraci&oacute;n Electr&oacute;nica. ";
 answers[65] = choices[65][0];
 units[65] = "43";
 comments[65] = "Id Pregunta: 9591. Examen TIC A2 2011 interna. Serie de gu&iacute;as CCN-STIC 800.";


//  Id pregunta: 9801 AÃ±o de creación de pregunta: 2014-01-01
 questions[66]= "67)  Seg&uacute;n la Ley Org&aacute;nica 15/1999 de protecci&oacute;n de datos, cuando se trata de ficheros de titularidad p&uacute;blica, el plazo para comunicar a la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos la inscripci&oacute;n de ficheros en el Registro General (RGPD) es:";
 choices[66]= new Array();
 choices[66][0] = "No hace falta dicha comunicaci&oacute;n al tratarse de ficheros de titularidad p&uacute;blica. ";
 choices[66][1] = "De 10 d&iacute;as desde que se publica su norma o acuerdo de creaci&oacute;n en el diario oficial correspondiente. ";
 choices[66][2] = "De 3 meses desde que se publica su norma o acuerdo de creaci&oacute;n en el diario oficial correspondiente. ";
 choices[66][3] = "De 30 d&iacute;as desde que se publica su norma o acuerdo de creaci&oacute;n en el diario oficial correspondiente. ";
 answers[66] = choices[66][3];
 units[66] = "29";
 comments[66] = "Id Pregunta: 9801. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9880 AÃ±o de creación de pregunta: 2014-01-01
 questions[67]= "68)  Atendiendo al RD 4/2010 de 8 de enero por el que se regula el Esquema Nacional deInteroperabilidad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, la exigencia de que las Administraciones P&uacute;blicas deban usar est&aacute;ndares abiertos y, en su caso, est&aacute;ndares que sean de uso generalizado por los ciudadanos, es un principio de";
 choices[67]= new Array();
 choices[67][0] = "interoperabilidad t&eacute;cnica.";
 choices[67][1] = "interoperabilidad organizativa.";
 choices[67][2] = "gesti&oacute;n de riesgos.";
 choices[67][3] = "auditor&iacute;a de seguridad.";
 answers[67] = choices[67][0];
 units[67] = "43";
 comments[67] = "Id Pregunta: 9880. TIC A1, Examen 2013";


//  Id pregunta: 9942 AÃ±o de creación de pregunta: 2014-01-01
 questions[68]= "69)  El Real Decreto 695/2013 crea la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y de las Comunicaciones. &iquest;Cu&aacute;l es el rango de esta Direcci&oacute;n?";
 choices[68]= new Array();
 choices[68][0] = "Direcci&oacute;n General.";
 choices[68][1] = "Subdirecci&oacute;n General.";
 choices[68][2] = "Subsecretar&iacute;a.";
 choices[68][3] = "Secretar&iacute;a de Estado.";
 answers[68] = choices[68][2];
 units[68] = "44";
 comments[68] = "Id Pregunta: 9942. TIC A1, Examen 2013";


//  Id pregunta: 10152 AÃ±o de creación de pregunta: 2014-01-01
 questions[69]= "70)  El registro electr&oacute;nico que permite hacer constar y gestionar las representaciones que los interesados otorguen a terceros, con el fin de que &eacute;stos puedan actuar en su nombre de forma electr&oacute;nica ante la Administraci&oacute;n General del Estado y/o sus organismos p&uacute;blicos vinculados o dependientes:";
 choices[69]= new Array();
 choices[69][0] = "se crea en el RD 1671/2009 (art. 15) ";
 choices[69][1] = "se denomina REA (Registro Electr&oacute;nico de Apoderamiento)";
 choices[69][2] = "est&aacute; regulado por la Orden HAP/1637/2012";
 choices[69][3] = "Todas las anteriores son ciertas";
 answers[69] = choices[69][3];
 units[69] = "43";
 comments[69] = "Id Pregunta: 10152. ";


//  Id pregunta: 10159 AÃ±o de creación de pregunta: 2014-01-01
 questions[70]= "71)  El conjunto de especificaciones orientadas al intercambio de datos entre Administraciones P&uacute;blicas con el objetivo de eliminar los certificados administrativos en papel se denomina:";
 choices[70]= new Array();
 choices[70][0] = "SCCD";
 choices[70][1] = "SCSP";
 choices[70][2] = "Plataforma de intermedicaci&oacute;n";
 choices[70][3] = "Ninguno de los anteriores";
 answers[70] = choices[70][1];
 units[70] = "44";
 comments[70] = "Id Pregunta: 10159. ";


//  Id pregunta: 10262 AÃ±o de creación de pregunta: 2014-01-01
 questions[71]= "72)  Se debe notificar al Registro General de Protecci&oacute;n de Datos";
 choices[71]= new Array();
 choices[71][0] = "Los ficheros de nueva creaci&oacute;n";
 choices[71][1] = "Las modificaciones posteriores en la informaci&oacute;n comunicada en el registro de un fichero";
 choices[71][2] = "La supresi&oacute;n de ficheros previamente registrados";
 choices[71][3] = "Todos ellos";
 answers[71] = choices[71][3];
 units[71] = "29";
 comments[71] = "Id Pregunta: 10262. Art&iacute;culos 55.1, 55.2, 58.1 y 58.2 del RD 1720/2007";


//  Id pregunta: 10264 AÃ±o de creación de pregunta: 2014-01-01
 questions[72]= "73)  En referencia al tratamiento de datos de car&aacute;cter personal recogidos en ficheros de las Fuerzas y Cuerpos de Seguridad, el ejercicio de los derechos de acceso, rectificaci&oacute;n, cancelaci&oacute;n y oposici&oacute;n";
 choices[72]= new Array();
 choices[72][0] = "Puede denegarse si afecta a la defensa del estado, no siendo posible en tal caso plantear ante la Agencia de Protecci&oacute;n de Datos la posible improcedencia de la denegaci&oacute;n";
 choices[72][1] = "Puede denegarse si afecta a la defensa del estado y el interesado plantear ante la Agencia de Protecci&oacute;n de Datos la posible improcedencia de la denegaci&oacute;n";
 choices[72][2] = "No puede denegarse si el fichero contiene datos especialmente protegidos";
 choices[72][3] = "No puede denegarse en ning&uacute;n caso";
 answers[72] = choices[72][1];
 units[72] = "29";
 comments[72] = "Id Pregunta: 10264. Art&iacute;culo 23.1 y 23.3 de la Ley 15/1999";


//  Id pregunta: 10266 AÃ±o de creación de pregunta: 2014-01-01
 questions[73]= "74)  Respecto del tratamiento de datos de car&aacute;cter personal, el censo promocional";
 choices[73]= new Array();
 choices[73][0] = "Tendr&aacute; vigencia indefinida";
 choices[73][1] = "Tendr&aacute; vigencia de un a&ntilde;o, actualiz&aacute;ndose en ese plazo para excluir la informaci&oacute;n de quienes as&iacute; lo hayan solicitado";
 choices[73][2] = "Tendr&aacute; vigencia trimestral, actualiz&aacute;ndose en ese plazo para excluir la informaci&oacute;n de quienes as&iacute; lo hayan solicitado";
 choices[73][3] = "Tendr&aacute; vigencia de un a&ntilde;o, actualiz&aacute;ndose trimestralmente para excluir la informaci&oacute;n de quienes as&iacute; lo hayan solicitado";
 answers[73] = choices[73][3];
 units[73] = "29";
 comments[73] = "Id Pregunta: 10266. Art&iacute;culo 31.2 y 31.3 de la Ley 15/1999";


//  Id pregunta: 10271 AÃ±o de creación de pregunta: 2014-01-01
 questions[74]= "75)  La Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos";
 choices[74]= new Array();
 choices[74][0] = "Est&aacute; sometida a control por parte de la IGAE y del Tribunal de Cuentas";
 choices[74][1] = "Est&aacute; sujeta a la LOFAGE en todos sus preceptos";
 choices[74][2] = "Frente a sus resoluciones puede presentarse recurso de alzada";
 choices[74][3] = "Sus competencias son exclusivas, no pudiendo crearse &oacute;rganos similares en las Comunidades Aut&oacute;nomas";
 answers[74] = choices[74][0];
 units[74] = "29";
 comments[74] = "Id Pregunta: 10271. Art&iacute;culos 2 y 33 del RD 428/1993";


//  Id pregunta: 10427 AÃ±o de creación de pregunta: 2014-01-01
 questions[75]= "76)  De acuerdo con la Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los Servicios P&uacute;blicos, el principio de simplificaci&oacute;n administrativa al que se ajustar&aacute; la utilizaci&oacute;n de las tecnolog&iacute;as de la informaci&oacute;n, establece ";
 choices[75]= new Array();
 choices[75][0] = "la m&aacute;xima difusi&oacute;n, publicidad y transparencia del procedimiento.";
 choices[75][1] = "el requerimiento a los ciudadanos de s&oacute;lo aquellos datos que sean estrictamente necesarios a la finalidad para la que se soliciten. ";
 choices[75][2] = "la no utilizaci&oacute;n de medios electr&oacute;nicos que puedan implicar restricciones o";
 choices[75][3] = "la reducci&oacute;n de manera sustancial de los t&eacute;rminos y plazos de los procedimientos administrativos. ";
 answers[75] = choices[75][3];
 units[75] = "30";
 comments[75] = "Id Pregunta: 10427. Examen TIC A1 2013";


//  Id pregunta: 10545 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  Europa 2020...";
 choices[76]= new Array();
 choices[76][0] = "La estrategia Europa 2020 trata de lograr un crecimiento inteligente, a trav&eacute;s de inversiones m&aacute;s eficaces en educaci&oacute;n, investigaci&oacute;n e innovaci&oacute;n, sostenible, gracias al impulso decidido a una econom&iacute;a baja en carbono, e integrador, que ponga el acento en la creaci&oacute;n de empleo y la reducci&oacute;n de la pobreza.";
 choices[76][1] = "La estrategia se centra en cinco ambiciosos objetivos en las &aacute;reas de empleo, innovaci&oacute;n, educaci&oacute;n, reducci&oacute;n de la pobreza y cambio clim&aacute;tico / energ&iacute;a.";
 choices[76][2] = "A y B son correctas";
 choices[76][3] = "Todas son incorrectas";
 answers[76] = choices[76][2];
 units[76] = "30";
 comments[76] = "Id Pregunta: 10545. ";


//  Id pregunta: 10580 AÃ±o de creación de pregunta: 2015-01-01
 questions[77]= "78)  No es objetivo de la Ley 11/2007:";
 choices[77]= new Array();
 choices[77][0] = "Reconocer el derecho de los ciudadanos a relacionarse con las Administraciones P&uacute;blicas por medios electr&oacute;nicos.";
 choices[77][1] = "Garantizar el acceso a todos los servicios electr&oacute;nicos.";
 choices[77][2] = "Aumentar la utilizaci&oacute;n del DNI electr&oacute;nico por los ciudadanos.";
 choices[77][3] = "Impulsar el uso de los servicios electr&oacute;nicos.";
 answers[77] = choices[77][2];
 units[77] = "43";
 comments[77] = "Id Pregunta: 10580. ";


//  Id pregunta: 10584 AÃ±o de creación de pregunta: 2015-01-01
 questions[78]= "79)  Marque la que no es una medida del Esquema Nacional de Interoperabilidad para la recuperaci&oacute;n y conservaci&oacute;n de documentos electr&oacute;nicos:";
 choices[78]= new Array();
 choices[78][0] = "La asociaci&oacute;n de metadatos m&iacute;nimos obligatorios.";
 choices[78][1] = "La documentaci&oacute;n de los procedimientos que garanticen la interoperabilidad a medio y largo plazo.";
 choices[78][2] = "La identificaci&oacute;n &uacute;nica e inequ&iacute;voca de cada documento.";
 choices[78][3] = "El establecimiento de un per&iacute;odo de conservaci&oacute;n de m&iacute;nimo cinco a&ntilde;os.";
 answers[78] = choices[78][3];
 units[78] = "43";
 comments[78] = "Id Pregunta: 10584. Art&iacute;culo 21.f, RD 4/2010.";


//  Id pregunta: 10590 AÃ±o de creación de pregunta: 2015-01-01
 questions[79]= "80)  La Decisi&oacute;n 922/2009/CE del Parlamento Europeo y del Consejo:";
 choices[79]= new Array();
 choices[79][0] = "Tiene como prioridad un crecimiento inteligente.";
 choices[79][1] = "Es la base legal del programa ISA.";
 choices[79][2] = "Desarrolla el Esquema Europeo de Seguridad.";
 choices[79][3] = "";
 answers[79] = choices[79][1];
 units[79] = "30";
 comments[79] = "Id Pregunta: 10590. ";


//  Id pregunta: 10593 AÃ±o de creación de pregunta: 2015-01-01
 questions[80]= "81)  Seg&uacute;n la LOPD, indique la opci&oacute;n err&oacute;nea:";
 choices[80]= new Array();
 choices[80][0] = "No es necesario informar de la posibilidad de ejercitar los derechos de acceso, rectificaci&oacute;n, cancelaci&oacute;n y oposici&oacute;n, si esta posibilidad se deduce de la naturaleza de los datos.";
 choices[80][1] = "Si los datos de car&aacute;cter personal no han sido recabados del interesado, &eacute;ste debe ser informado durante los tres meses siguientes al registro.";
 choices[80][2] = "No ser&aacute; necesario informar al interesado si esto exige, a criterio del responsable del tratamiento, esfuerzos desproporcionados.";
 choices[80][3] = "Por regla general, los interesados deben ser informados de la identidad del responsable del tratamiento.";
 answers[80] = choices[80][2];
 units[80] = "29";
 comments[80] = "Id Pregunta: 10593. ";


//  Id pregunta: 10681 AÃ±o de creación de pregunta: 2015-01-01
 questions[81]= "82)  Seg&uacute;n la Ley 39/2015 se establece como &quot;Derecho de las Personas en sus relaciones con la Administraci&oacute;n&quot; en su Art&iacute;culo 13.";
 choices[81]= new Array();
 choices[81][0] = "Comunicarse con las Administraciones P&uacute;blicas a trav&eacute;s de un Punto de Acceso General electr&oacute;nico de la Administraci&oacute;n.";
 choices[81][1] = "Relacionarse con las Administraciones P&uacute;blicas a trav&eacute;s de medios electr&oacute;nicos utilizando cualquier formato recogido en el ENI.";
 choices[81][2] = "Ambas";
 choices[81][3] = "Ninguna de las anteriores.";
 answers[81] = choices[81][0];
 units[81] = "30";
 comments[81] = "Id Pregunta: 10681. ";


//  Id pregunta: 10688 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  La Comisi&oacute;n para la Reforma de las Administraciones P&uacute;blicas present&oacute; su informe en:";
 choices[82]= new Array();
 choices[82][0] = "Enero de 2013.";
 choices[82][1] = "Junio de 2013.";
 choices[82][2] = "Diciembre de 2013.";
 choices[82][3] = "Enero de 2014.";
 answers[82] = choices[82][1];
 units[82] = "30";
 comments[82] = "Id Pregunta: 10688. ";


//  Id pregunta: 10689 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  &iquest;Qu&eacute; Ley establece el &quot;Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas.&quot;?";
 choices[83]= new Array();
 choices[83][0] = "Ley 40/2015.";
 choices[83][1] = "Ley 40/2014.";
 choices[83][2] = "Ley 39/2015.";
 choices[83][3] = "Ley 41/2015.";
 answers[83] = choices[83][2];
 units[83] = "30";
 comments[83] = "Id Pregunta: 10689. ";


//  Id pregunta: 10691 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  La Ley 39/2015 impone:";
 choices[84]= new Array();
 choices[84][0] = "La obligaci&oacute;n de las Administraciones P&uacute;blicas de contar con un registro u otro sistema equivalente";
 choices[84][1] = "La obligaci&oacute;n de las Administraciones P&uacute;blicas de contar con una red para el intercambio de informaci&oacute;n entre las Administraciones P&uacute;blicas.";
 choices[84][2] = "Ambas";
 choices[84][3] = "Ninguna de las anteriores.";
 answers[84] = choices[84][0];
 units[84] = "30";
 comments[84] = "Id Pregunta: 10691. ";


//  Id pregunta: 10703 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  En referencia a los metadatos del expediente electr&oacute;nico.";
 choices[85]= new Array();
 choices[85][0] = "No se pueden incluir metadatos complementarios.";
 choices[85][1] = "Se pueden incluir metadatos complementarios.";
 choices[85][2] = "Se pueden incluir metadatos complementarios &uacute;nicamente en caso de intercambio de dichos expedientes.";
 choices[85][3] = "Se pueden incluir metadatos complementarios &uacute;nicamente para facilitar el almacenamiento de los expedientes.";
 answers[85] = choices[85][1];
 units[85] = "43";
 comments[85] = "Id Pregunta: 10703. ";


//  Id pregunta: 10724 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  &iquest;Qui&eacute;n es el responsable de la Plataforma de Intermediaci&oacute;n?";
 choices[86]= new Array();
 choices[86][0] = "Ministerio de la Presidencia";
 choices[86][1] = "Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[86][2] = "Ministerio de Econom&iacute;a y Competitividad";
 choices[86][3] = "Ministerio de Educaci&oacute;n, Cultura y Deporte";
 answers[86] = choices[86][1];
 units[86] = "43";
 comments[86] = "Id Pregunta: 10724. ";


//  Id pregunta: 10728 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  Seg&uacute;n la NTI de Protocolos de Intermedicaci&oacute;n, &iquest;Cu&aacute;l de la siguiente informaci&oacute;n no debe ser almacenada para la trazabilidad de cada consulta o intercambio?";
 choices[87]= new Array();
 choices[87][0] = "Identificador de la transacci&oacute;n.";
 choices[87][1] = "Contenido del intercambio.";
 choices[87][2] = "Cesionario de la informaci&oacute;n.";
 choices[87][3] = "Fecha y hora de realizaci&oacute;n de la consulta.";
 answers[87] = choices[87][1];
 units[87] = "43";
 comments[87] = "Id Pregunta: 10728. ";


//  Id pregunta: 10757 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  &iquest;En cu&aacute;l de los siguientes puede participar actores del sector privado? ";
 choices[88]= new Array();
 choices[88][0] = "El Consejo de Seguridad Nacional.";
 choices[88][1] = "El Comit&eacute; Especializado de Ciberseguridad.";
 choices[88][2] = "El Comit&eacute; Especializado de Situaci&oacute;n.";
 choices[88][3] = "El Consejo Ejecutivo de Ciberseguridad.";
 answers[88] = choices[88][1];
 units[88] = "43";
 comments[88] = "Id Pregunta: 10757. ";


//  Id pregunta: 10771 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  &iquest;En qu&eacute; a&ntilde;o se aprueba la Norma T&eacute;cnica de Interoperabilidad de requisitos de conexi&oacute;n a la red de comunicaciones de las Administraciones P&uacute;blicas espa&ntilde;olas?";
 choices[89]= new Array();
 choices[89][0] = "2009";
 choices[89][1] = "2011";
 choices[89][2] = "2013";
 choices[89][3] = "2015";
 answers[89] = choices[89][1];
 units[89] = "43";
 comments[89] = "Id Pregunta: 10771. ";


//  Id pregunta: 10965 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  En relaci&oacute;n con el modelo de gobernanza en el &aacute;mbito de las TIC de la Administraci&oacute;n General del Estado, y respecto a los medios y servicios de uso compartido es correcto que:";
 choices[90]= new Array();
 choices[90][0] = "Los medios y servicios TIC ser&aacute;n declarados de uso compartido cuando, en raz&oacute;n de su naturaleza o del inter&eacute;s com&uacute;n, respondan a necesidades transversales de los ciudadanos.";
 choices[90][1] = "La utilizaci&oacute;n de los medios y servicios compartidos ser&aacute; de car&aacute;cter obligatorio y sustitutivo respecto a los medios y servicios particulares empleados por las distintas unidades.";
 choices[90][2] = "Las Comisiones Ministeriales de Administraci&oacute;n Digital (CMAD) velar&aacute;n por el uso de los medios y servicios compartidos. En este sentido, cuando las necesidades puedan ser comunes a varias unidades de diferentes Ministerios, se escoger&aacute; la alternativa que permita independizar el servicio entre los Departamentos.";
 choices[90][3] = "Los activos TIC afectos a la prestaci&oacute;n de servicios sectoriales deber&aacute;n migrarse a los medios y servicios compartidos.";
 answers[90] = choices[90][1];
 units[90] = "44";
 comments[90] = "Id Pregunta: 10965. TIC A1 AGE 2014";


//  Id pregunta: 10969 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  RE&Uacute;NETE es el Servicio Com&uacute;n de Reuniones Virtuales de la Red SARA que ofrece herramientas colaborativas a todas las Administraciones P&uacute;blicas. Entre sus funcionalidades NO se encuentra:";
 choices[91]= new Array();
 choices[91][0] = "Correo electr&oacute;nico multidominio.";
 choices[91][1] = "Integraci&oacute;n de salas de videoconferencia tradicional H323/SIP.";
 choices[91][2] = "Soporte on-line para p&aacute;ginas web.";
 choices[91][3] = "Videoconferencia con herramientas de colaboraci&oacute;n.";
 answers[91] = choices[91][0];
 units[91] = "44";
 comments[91] = "Id Pregunta: 10969. TIC A1 AGE 2014";


//  Id pregunta: 11193 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l de las siguientes no es una prioridad de la estrategia Europa 2020?";
 choices[92]= new Array();
 choices[92][0] = "Crecimiento inteligente";
 choices[92][1] = "Crecimiento sostenible";
 choices[92][2] = "Crecimiento integrador";
 choices[92][3] = "Todas las anteriores";
 answers[92] = choices[92][3];
 units[92] = "30";
 comments[92] = "Id Pregunta: 11193. ";


//  Id pregunta: 11203 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de la Agenda Digital Espa&ntilde;ola?";
 choices[93]= new Array();
 choices[93][0] = "Confianza Digital";
 choices[93][1] = "Mejorar la Administraci&oacute;n Electr&oacute;nica";
 choices[93][2] = "Despliegue de redes r&aacute;pidas y ultrarr&aacute;pidas";
 choices[93][3] = "Interoperabilidad y normas";
 answers[93] = choices[93][3];
 units[93] = "30";
 comments[93] = "Id Pregunta: 11203. ";


//  Id pregunta: 11341 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  En cuanto a los derechos de autor&iacute;a de los programas de ordenador, se&ntilde;ale cu&aacute;l no se encuentra entre los derechos morales";
 choices[94]= new Array();
 choices[94][0] = "Derecho de Transformaci&oacute;n  ";
 choices[94][1] = "Derecho a decidir sobre la divulgaci&oacute;n";
 choices[94][2] = "Derecho a que se reconozca su autor&iacute;a";
 choices[94][3] = "Derecho a mantener la integridad de la obra";
 answers[94] = choices[94][0];
 units[94] = "36";
 comments[94] = "Id Pregunta: 11341. ";


//  Id pregunta: 11486 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Seg&uacute;n el art&iacute;culo 26 de la Ley de Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas Ley 39/2015 respecto a la validez de documentos electr&oacute;nicos administrativos, es FALSO que ";
 choices[95]= new Array();
 choices[95][0] = "Deber&aacute;n contener informaci&oacute;n de cualquier naturaleza archivada en un soporte electr&oacute;nico seg&uacute;n un formato determinado susceptible de identificaci&oacute;n y tratamiento diferenciado.";
 choices[95][1] = "Deber&aacute;n incorporar metadatos m&iacute;nimos exigidos.";
 choices[95][2] = "Deber&aacute;n incorporar una referencia temporal del momento en que han sido emitidos.";
 choices[95][3] = "Deber&aacute;n incorporar firma electr&oacute;nica aquellos documentos electr&oacute;nicos que sean publicados por las AA.PP con car&aacute;cter meramente informativo.";
 answers[95] = choices[95][3];
 units[95] = "43";
 comments[95] = "Id Pregunta: 11486. NULL";


//  Id pregunta: 11595 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Con respecto a la Comisi&oacute;n de Estrategia TIC, se&ntilde;ale la incorrecta:";
 choices[96]= new Array();
 choices[96][0] = "La Comisi&oacute;n de Estrategia TIC se adscribe al Ministerio de Hacienda y Administraciones P&uacute;blicas a trav&eacute;s de la Secretar&iacute;a de Estado de Administraciones P&uacute;blicas.";
 choices[96][1] = "Una de sus funciones es declarar los medios o servicios compartidos.";
 choices[96][2] = "Las reuniones de su Pleno se celebrar&aacute;n, al menos, cuatro veces al a&ntilde;o por convocatoria de su Presidente, bien a iniciativa propia, bien cuando lo soliciten, al menos, la mitad de sus miembros.";
 choices[96][3] = "Podr&aacute;n constituirse los grupos de trabajo que se requieran para el adecuado desarrollo de sus funciones.";
 answers[96] = choices[96][2];
 units[96] = "43";
 comments[96] = "Id Pregunta: 11595. ";


//  Id pregunta: 11597 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  La Ley del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas es:";
 choices[97]= new Array();
 choices[97][0] = "Ley 39/2015";
 choices[97][1] = "Ley 40/2015";
 choices[97][2] = "Ley 29/2015";
 choices[97][3] = "Ley 30/2015";
 answers[97] = choices[97][0];
 units[97] = "43";
 comments[97] = "Id Pregunta: 11597. ";


//  Id pregunta: 11602 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  La Orden HAP/7/2014 regula:";
 choices[98]= new Array();
 choices[98][0] = "El sistema cl@ve";
 choices[98][1] = "El Registro electr&oacute;nico de apoderamientos";
 choices[98][2] = "El Registro de funcionarios habilitados";
 choices[98][3] = "El sistema AutenticA";
 answers[98] = choices[98][2];
 units[98] = "44";
 comments[98] = "Id Pregunta: 11602. ";


//  Id pregunta: 11748 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Cada Administraci&oacute;n P&uacute;blica determinar&aacute; las condiciones e instrumentos de creaci&oacute;n de las sedes electr&oacute;nicas con sujeci&oacute;n a los principios, &iquest;cu&aacute;l no es uno de ellos?:";
 choices[99]= new Array();
 choices[99][0] = "transparencia";
 choices[99][1] = "responsabilidad";
 choices[99][2] = "universalidad";
 choices[99][3] = "publicidad del procedimiento";
 answers[99] = choices[99][2];
 units[99] = "43";
 comments[99] = "Id Pregunta: 11748. ";


