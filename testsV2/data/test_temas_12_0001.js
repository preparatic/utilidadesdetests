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

//  Id pregunta: 691 AÃ±o de creación de pregunta: 2009-01-01
 questions[0]= "1)  De acuerdo con la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, se deber&aacute;n retener los datos de conexi&oacute;n y tr&aacute;fico por un periodo m&aacute;ximo de: ";
 choices[0]= new Array();
 choices[0][0] = "3 meses";
 choices[0][1] = "6 meses";
 choices[0][2] = "12 meses";
 choices[0][3] = "2 a&ntilde;os";
 answers[0] = choices[0][3];
 units[0] = "30";
 comments[0] = "Id Pregunta: 691. reglamentariamente se podr&aacute; reducir a seis meses o ampliar a dos a&ntilde;os, como permite la Directiva 2006/24/CE";


//  Id pregunta: 692 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  Del &aacute;mbito de la Ley 34/2002 de servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico quedan excluidos los servicios prestados por:";
 choices[1]= new Array();
 choices[1][0] = "Los notarios y registradores de la propiedad en el ejercicio de sus respectivas funciones privadas";
 choices[1][1] = "Los abogados y procuradores en el ejercicio de sus funciones de representaci&oacute;n y juicio";
 choices[1][2] = "Los notarios y registradores de la propiedad y mercantiles en el ejercicio de sus respectivas funciones privadas";
 choices[1][3] = "Funcionarios del Estado";
 answers[1] = choices[1][1];
 units[1] = "30";
 comments[1] = "Id Pregunta: 692. Ley 34/2002, art&iacute;culo 5";


//  Id pregunta: 788 AÃ±o de creación de pregunta: 2009-01-01
 questions[2]= "3)  Seg&uacute;n la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, los datos de tr&aacute;fico deben retenerse por un periodo de:";
 choices[2]= new Array();
 choices[2][0] = "doce meses computados desde la fecha en que se haya producido la comunicaci&oacute;n. Reglamentariamente, previa consulta a los operadores, se podr&aacute; ampliar o reducir el plazo de conservaci&oacute;n para determinados datos o una categor&iacute;a de datos hasta un m&aacute;ximo de dos a&ntilde;os o un m&iacute;nimo de seis meses.";
 choices[2][1] = "doce meses computados desde la fecha en que se haya producido la comunicaci&oacute;n. Reglamentariamente, previa consulta a los operadores, se podr&aacute; ampliar o reducir el plazo de conservaci&oacute;n para determinados datos o una categor&iacute;a de datos hasta un m&aacute;ximo de dieciocho meses o un m&iacute;nimo de seis meses.";
 choices[2][2] = "La Ley lo fijar&aacute; reglamentariamente";
 choices[2][3] = "12 meses m&iacute;nimo para los proveedores de redes (carriers) y 24 meses m&iacute;nimo para los proveedores de acceso a internet y de alojamiento";
 answers[2] = choices[2][0];
 units[2] = "30";
 comments[2] = "Id Pregunta: 788. articulo 5";


//  Id pregunta: 818 AÃ±o de creación de pregunta: 2009-01-01
 questions[3]= "4)  Seg&uacute;n la Ley 34/2002,  las Administraciones P&uacute;blicas adoptar&aacute;n las medidas necesarias para que las informaci&oacute;n disponible en sus p&aacute;ginas de Internet puedan ser accesibles para discapacitados. Esto est&aacute; de acuerdo con:";
 choices[3]= new Array();
 choices[3][0] = "A partir del 31 de diciembre de 2008, las p&aacute;ginas de Internet de las Administraciones P&uacute;blicas satisfar&aacute;n, como m&iacute;nimo, el nivel medio de los criterios de accesibilidad al contenido generalmente reconocidos. Excepcionalmente, esta obligaci&oacute;n no ser&aacute; aplicable cuando una funcionalidad o servicio no disponga de una soluci&oacute;n tecnol&oacute;gica que permita su accesibilidad.";
 choices[3][1] = "El nivel medio de los criterios de accesibilidad al contenido generalmente reconocidos, antes del 31 de diciembre de 2005";
 choices[3][2] = "Los criterios WAI antes del 31 de diciembre de 2008";
 choices[3][3] = "Los criterios WAI antes del 31 de diciembre de 2005";
 answers[3] = choices[3][0];
 units[3] = "30";
 comments[3] = "Id Pregunta: 818. Ley 34/2002, disposici&oacute;n adicional quinta, modificado por Ley 56/2007, art&iacute;culo 4";


//  Id pregunta: 820 AÃ±o de creación de pregunta: 2009-01-01
 questions[4]= "5)  Seg&uacute;n la Ley 34/2002, podr&aacute;n adoptarse las medidas legales necesarias para que se interrumpa la prestaci&oacute;n de un servicio que atente contra los siguientes principios. Se&ntilde;alar la respuesta incorrecta:";
 choices[4]= new Array();
 choices[4][0] = "Salvaguarda del orden p&uacute;blico";
 choices[4][1] = "Salvaguarda del inter&eacute;s general";
 choices[4][2] = "Respeto a la dignidad de la persona";
 choices[4][3] = "Protecci&oacute;n de la salud p&uacute;blica";
 answers[4] = choices[4][1];
 units[4] = "30";
 comments[4] = "Id Pregunta: 820. Ley 34/2002, art&iacute;culo 8";


//  Id pregunta: 1493 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;En qu&eacute; condiciones est&aacute; permitido el env&iacute;o de comunicaciones comerciales por medios electr&oacute;nicos? :";
 choices[5]= new Array();
 choices[5][0] = "Se permite el env&iacute;o de mensajes publicitarios o comerciales por correo electr&oacute;nico a aquellos usuarios que previamente lo hubieran autorizado o lo hubieran solicitado de forma expresa";
 choices[5][1] = "El spam est&aacute; permitido si se conoce el emisor";
 choices[5][2] = "El SMS no es equiparable al mail, por lo tanto el env&iacute;o masivo con este medio esta pemitido";
 choices[5][3] = "Siempre aunque no lo hayan solocitado los receptores, pues el emisor aparece en el mensaje";
 answers[5] = choices[5][0];
 units[5] = "30";
 comments[5] = "Id Pregunta: 1493. Ley 34/2002, art&iacute;culo 21";


//  Id pregunta: 1641 AÃ±o de creación de pregunta: 2004-01-01
 questions[6]= "7)  Seg&uacute;n la LSSI, el env&iacute;o de comunicaciones comerciales o publicitarias sin la autorizaci&oacute;n previa del destinatario constituye una infracci&oacute;n ...";
 choices[6]= new Array();
 choices[6][0] = "Leve";
 choices[6][1] = "Grave";
 choices[6][2] = "Muy grave";
 choices[6][3] = "No constituye infracci&oacute;n";
 answers[6] = choices[6][0];
 units[6] = "30";
 comments[6] = "Id Pregunta: 1641. ";


//  Id pregunta: 1869 AÃ±o de creación de pregunta: 2006-01-01
 questions[7]= "8)  La directiva europea del Parlamento y del Consejo relativa a la firma electr&oacute;nica es:";
 choices[7]= new Array();
 choices[7][0] = "Directiva 2000/31/CE";
 choices[7][1] = "Directiva 1999/93/CE";
 choices[7][2] = "Directiva 98/68/CE";
 choices[7][3] = "Directiva 1996/46/CE";
 answers[7] = choices[7][1];
 units[7] = "30";
 comments[7] = "Id Pregunta: 1869. NULL";


//  Id pregunta: 1932 AÃ±o de creación de pregunta: 2006-01-01
 questions[8]= "9)  Seg&uacute;n la Ley 59/2003 de firma electr&oacute;nica, los certificados electr&oacute;nicos reconocidos";
 choices[8]= new Array();
 choices[8][0] = "Tienen una validez de tres a&ntilde;os como m&aacute;ximo";
 choices[8][1] = "Pueden identificar a las personas f&iacute;sicas para las que se expidan certificados a trav&eacute;s de un seud&oacute;nimo";
 choices[8][2] = "Dejan de tener validez cuando expiran, y/o son revocados, por resoluci&oacute;n judicial o por fallecimiento del firmante";
 choices[8][3] = "Confieren, por si mismos, a la firma electr&oacute;nica avanzada la misma eficacia jur&iacute;dica que a la manuscrita";
 answers[8] = choices[8][1];
 units[8] = "30";
 comments[8] = "Id Pregunta: 1932. Ley 59/2003, art&iacute;culo 11";


//  Id pregunta: 1941 AÃ±o de creación de pregunta: 2006-01-01
 questions[9]= "10)  La Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica, en relaci&oacute;n con los certificados electr&oacute;nicos de personas jur&iacute;dicas, establece que:";
 choices[9]= new Array();
 choices[9][0] = "La custodia de los datos de creaci&oacute;n de firma asociados a cada certificado electr&oacute;nico de persona jur&iacute;dica ser&aacute; responsabilidad de los administradores";
 choices[9][1] = "S&oacute;lo podr&aacute;n solicitar certificados electr&oacute;nicos de personas jur&iacute;dicas sus administradores";
 choices[9][2] = "La custodia de los datos de creaci&oacute;n de firma asociados a cada certificado electr&oacute;nico de persona jur&iacute;dica ser&aacute; responsabilidad de la persona f&iacute;sica solicitante";
 choices[9][3] = "Si la firma se utiliza transgrediendo los l&iacute;mites mencionados en la Ley, la persona jur&iacute;dica quedar&aacute; vinculada frente a terceros en todo caso";
 answers[9] = choices[9][2];
 units[9] = "30";
 comments[9] = "Id Pregunta: 1941. Ley 59/2003, art&iacute;culo 7";


//  Id pregunta: 1964 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Cu&aacute;l de estos objetivos no es un objetivo de la iniciativa eEurope?:";
 choices[10]= new Array();
 choices[10][0] = "Conseguir que todos los europeos entren en la era digital y est&eacute;n conectados a la red";
 choices[10][1] = "Crear en Europa una cultura y un esp&iacute;ritu empresarial abiertos a la cultura digital";
 choices[10][2] = "Conseguir que todas las redes administrativas de los distintos estados miembros est&eacute;n interconectadas a trav&eacute;s de TESTA II";
 choices[10][3] = "Garantizar que el proceso no se traduzca en exclusi&oacute;n social";
 answers[10] = choices[10][2];
 units[10] = "30";
 comments[10] = "Id Pregunta: 1964. ";


//  Id pregunta: 2860 AÃ±o de creación de pregunta: 2006-01-01
 questions[11]= "12)  La incicativa europea i2010 se transpone en Espa&ntilde;a en ";
 choices[11]= new Array();
 choices[11][0] = "Plan Avanza 2010";
 choices[11][1] = "Ingenio 2010";
 choices[11][2] = "Plan Avanza";
 choices[11][3] = "Avanza.es";
 answers[11] = choices[11][1];
 units[11] = "30";
 comments[11] = "Id Pregunta: 2860. ";


//  Id pregunta: 4251 AÃ±o de creación de pregunta: 2007-01-01
 questions[12]= "13)  Respecto a la iniciativa i2010 de la Comisi&oacute;n Europea:";
 choices[12]= new Array();
 choices[12][0] = "La iniciativa nace en el a&ntilde;o 2005, como respuesta a la revisi&oacute;n de la estrategia de Lisboa para el crecimiento y el empleo.";
 choices[12][1] = "Una de las tres prioridades que se plantea es &ldquo;el refuerzo de la innovaci&oacute;n y la inversi&oacute;n en la investigaci&oacute;n sobre las TIC con el fin de fomentar el crecimiento y la creaci&oacute;n de m&aacute;s empleos y de m&aacute;s de calidad&rdquo;";
 choices[12][2] = "La tercera prioridad de la Comisi&oacute;n consiste en &ldquo;el logro de una sociedad europea de la informaci&oacute;n basada en la inclusi&oacute;n que fomenta el crecimiento y el empleo de una manera coherente con el desarrollo sostenible y que da la prioridad a la mejora de los servicios p&uacute;blicos y de la calidad de vida&rdquo;.";
 choices[12][3] = "Todas las anteriores son ciertas";
 answers[12] = choices[12][3];
 units[12] = "30";
 comments[12] = "Id Pregunta: 4251. Esta pregunta es antigua, pero nunca se sabe. M&aacute;s informaci&oacute;n en: http://europa.eu/legislation_summaries/information_society/strategies/c11328_es.htm";


//  Id pregunta: 4253 AÃ±o de creación de pregunta: 2007-01-01
 questions[13]= "14)  Como parte de la legislaci&oacute;n y normativa espa&ntilde;ola para el impulso de la administraci&oacute;n electr&oacute;nica se incluye:";
 choices[13]= new Array();
 choices[13][0] = "La Ley 30/1992 de 26 de R&eacute;gimen Jur&iacute;dico de las Administraciones P&uacute;blicas y del Procedimiento Administrativo Com&uacute;n, que dedica un art&iacute;culo al impulso del empleo y aplicaci&oacute;n de las t&eacute;cnicas y medios electr&oacute;nicos, inform&aacute;ticos y telem&aacute;ticos, por parte de la Administraci&oacute;n";
 choices[13][1] = "El Real Decreto 1553/2005 por el que se regula la expedici&oacute;n del Documento Nacional de Identidad y sus certificados de firma electr&oacute;nica";
 choices[13][2] = "La Ley 24/2001, de 27 de diciembre, de Medidas Fiscales, Administrativas y del Orden Social, que regula el establecimiento de registros telem&aacute;ticos y  notificaciones telem&aacute;ticas";
 choices[13][3] = "Todas las anteriores";
 answers[13] = choices[13][3];
 units[13] = "30";
 comments[13] = "Id Pregunta: 4253. NULL";


//  Id pregunta: 4468 AÃ±o de creación de pregunta: 2007-01-01
 questions[14]= "15)  Los prestadores de servicios de certificaci&oacute;n con car&aacute;cter previo al cese definitivo de su actividad, &iquest;que gesti&oacute;n deber&aacute;n realizar con la informaci&oacute;n relativa a los certificados electr&oacute;nicos cuya vigencia haya sido extinguida?";
 choices[14]= new Array();
 choices[14][0] = "Remitirla al ministerio competente.";
 choices[14][1] = "Remitirla al prestador al que se propone la gesti&oacute;n de los certificados vigentes.";
 choices[14][2] = "Ninguna. La ley solo obliga la transferencia de la informaci&oacute;n relativa a los certificados vigentes.";
 choices[14][3] = "Debe conservarla en soporte perdurable durante al menos 30 anos.";
 answers[14] = choices[14][0];
 units[14] = "30";
 comments[14] = "Id Pregunta: 4468. Ley 59/2003, art&iacute;culo 21";


//  Id pregunta: 4469 AÃ±o de creación de pregunta: 2007-01-01
 questions[15]= "16)  Los contratos celebrados por v&iacute;a electr&oacute;nica en los que intervenga como parte un consumidor se presumir&aacute;n celebrados en:";
 choices[15]= new Array();
 choices[15][0] = "El lugar donde este establecido el prestador de servicios";
 choices[15][1] = "El lugar donde el consumidor tenga su residencia habitual.";
 choices[15][2] = "El lugar donde este establecida la Comisi&oacute;n Nacional de los Mercados y la Compentencia";
 choices[15][3] = "El lugar donde este establecido el Ministerio competente.";
 answers[15] = choices[15][1];
 units[15] = "30";
 comments[15] = "Id Pregunta: 4469. Ley 34/2002, art&iacute;culo 29";


//  Id pregunta: 4575 AÃ±o de creación de pregunta: 2007-01-01
 questions[16]= "17)  Indica cual de las siguientes definiciones de firma electr&oacute;nica es Ia que aparece en Ia Ley 59/2003, de 19 de diciembre:";
 choices[16]= new Array();
 choices[16][0] = "es el resultado de obtener por medio de mecanismos o dispositivos un patr&oacute;n que se asocie biun&iacute;voca mente a un individuo y a su voluntad de firmar.";
 choices[16][1] = "es el conjunto de datos en forma electr&oacute;nica, consignados junto a otros o asociados con ellos, que pueden ser utilizados como medio de identificaci&oacute;n del firmante.";
 choices[16][2] = "es el documento electr&oacute;nico que acredita electr&oacute;nicamente Ia identidad personal de su titular y permite la firma de documentos.";
 choices[16][3] = "es el conjunto de datos &uacute;nicos, como c&oacute;digos o claves criptogr&aacute;ficas privadas, que el firmante utiliza para firmar documentos.";
 answers[16] = choices[16][1];
 units[16] = "30";
 comments[16] = "Id Pregunta: 4575. Ley 59/2003, art&iacute;culo 3";


//  Id pregunta: 4659 AÃ±o de creación de pregunta: 2007-01-01
 questions[17]= "18)  &iquest;Cu&aacute;l de las siguientes no es un servicio ofrecido por el DNI electronico?";
 choices[17]= new Array();
 choices[17][0] = "Firma electronica de documentos";
 choices[17][1] = "Identificacion en medios telematicos";
 choices[17][2] = "Acreditar la identidad fisica";
 choices[17][3] = "Tarjeta sanitaria electronica";
 answers[17] = choices[17][3];
 units[17] = "30";
 comments[17] = "Id Pregunta: 4659. RD 1553/2005, art&iacute;culo 1";


//  Id pregunta: 4996 AÃ±o de creación de pregunta: 2003-01-01
 questions[18]= "19)  El Consejo Superior de Administraci&oacute;n Electr&oacute;nica es un &oacute;rgano colegiado adscrito al Ministerio de:";
 choices[18]= new Array();
 choices[18][0] = "Industria, Energ&iacute;a y Turismo";
 choices[18][1] = "Asuntos Exteriores";
 choices[18][2] = "Hacienda y Administraciones P&uacute;blicas";
 choices[18][3] = "Interior";
 answers[18] = choices[18][2];
 units[18] = "30";
 comments[18] = "Id Pregunta: 4996. Examen TIC A 2007";


//  Id pregunta: 5047 AÃ±o de creación de pregunta: 2003-01-01
 questions[19]= "20)  &iquest;Cu&aacute;l es el periodo m&aacute;ximo de validez de los certificados del DNIe?:";
 choices[19]= new Array();
 choices[19][0] = "24 meses";
 choices[19][1] = "5 a&ntilde;os";
 choices[19][2] = "30 meses";
 choices[19][3] = "4 a&ntilde;os";
 answers[19] = choices[19][2];
 units[19] = "30";
 comments[19] = "Id Pregunta: 5047. Examen TIC A 2007 (RD 1553/2005, art&iacute;culo 12)";


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


//  Id pregunta: 5547 AÃ±o de creación de pregunta: 2003-01-01
 questions[21]= "22)  Entre los derechos reconocidos por la Ley de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos NO se encuentra:";
 choices[21]= new Array();
 choices[21][0] = "El Derecho a la Igualdad en el acceso electr&oacute;nico a los servicios de las Administraciones P&uacute;blicas.";
 choices[21][1] = "El Derecho a la Conservaci&oacute;n en formato electr&oacute;nico por las Administraciones P&uacute;blicas, de los documentos electr&oacute;nicos que formen parte de un expediente.";
 choices[21][2] = "El Derecho a obtener los medios de identificaci&oacute;n electr&oacute;nica necesarios.";
 choices[21][3] = "El Derecho a la libre utilizaci&oacute;n de cualquier sistema de firma electr&oacute;nica.";
 answers[21] = choices[21][3];
 units[21] = "43";
 comments[21] = "Id Pregunta: 5547. NULL";


//  Id pregunta: 5556 AÃ±o de creación de pregunta: 2003-01-01
 questions[22]= "23)  Respecto a la Ley 56/2007 de Medidas de Impulso de la Sociendad de la Informaci&oacute;n, se&ntilde;ale la afirmaci&oacute;n incorrecta:";
 choices[22]= new Array();
 choices[22][0] = "Se enmarca dentro del Plan 2006-2010 para el desarrollo de la Sociedad de la Informaci&oacute;n y de convergencia con Europa y entre Comunidades Aut&oacute;nomas y Ciudades Aut&oacute;nomas, Plan Avanza.";
 choices[22][1] = "Modifica la Ley 34/2002 de SSI, la ley 59/2003 de FE, la ley 32/2003 General de Telecomunicaciones y la Ley  de Propiedad Intelectual, entre otras";
 choices[22][2] = "Esta Ley habilita a los Ministerios de Industria, Turismo y Comercio, y de Administraciones P&uacute;blicas, a aprobar formatos estructurados est&aacute;ndar de facturas electr&oacute;nicas.";
 choices[22][3] = "Obliga a las empresas de sectores de especial incidencia a facilitar un medio de interlocuci&oacute;n telem&aacute;tica a los usuarios con certificados reconocidos de firma electr&oacute;nica.";
 answers[22] = choices[22][2];
 units[22] = "30";
 comments[22] = "Id Pregunta: 5556. ";


//  Id pregunta: 5800 AÃ±o de creación de pregunta: 2009-01-01
 questions[23]= "24)  En base a la ley 59/2003, en que se diferencia la firma electr&oacute;nica reconocida de la firma electr&oacute;nica avanzada?";
 choices[23]= new Array();
 choices[23][0] = "En la clase de certificado electr&oacute;nico en que se basa.";
 choices[23][1] = "En el tipo de dispositivo criptogr&aacute;fico utilizado para la custodia de la clave privada.";
 choices[23][2] = "En la duracion maxima de su validez. La validez de la firma electr&oacute;nica reconocida nunca podra exceder de 4 a&ntilde;os.";
 choices[23][3] = "Las respuestas A y B son correctas.";
 answers[23] = choices[23][3];
 units[23] = "30";
 comments[23] = "Id Pregunta: 5800. Ley 59/2003, art&iacute;culo 3";


//  Id pregunta: 5852 AÃ±o de creación de pregunta: 2009-01-01
 questions[24]= "25)  Se&ntilde;ale la respuesta correcta sobre la firma digital:";
 choices[24]= new Array();
 choices[24][0] = "Ofrece plenas garant&iacute;as de la integridad, confidencialidad y no repudio del documento firmado";
 choices[24][1] = "Se puede conseguir mediante protocolos de cifrado de clave secreta";
 choices[24][2] = "El DSS (Digital Signature Standard) est&aacute; adoptado como una norma por ISO/IEC";
 choices[24][3] = "La firma ciega (Blind signature) se obtiene firmando directamente el correspondiente mensaje, en vez del resumen de &eacute;ste";
 answers[24] = choices[24][1];
 units[24] = "30";
 comments[24] = "Id Pregunta: 5852. Pregunta 32";


//  Id pregunta: 6123 AÃ±o de creación de pregunta: 2010-01-01
 questions[25]= "26)  Por v&iacute;a electr&oacute;nica en Espa&ntilde;a, pueden celebrarse los siguientes tipos de contratos:";
 choices[25]= new Array();
 choices[25][0] = "Todos.";
 choices[25][1] = "Ninguno";
 choices[25][2] = "Todos excepto los relativos al derecho de familia y sucesiones (adopciones, matrimonio, testamento).";
 choices[25][3] = "S&oacute;lo los relativos a comercio electr&oacute;nico.";
 answers[25] = choices[25][2];
 units[25] = "30";
 comments[25] = "Id Pregunta: 6123. TIC A 2009 (Ley 34/2002, art&iacute;culo 23.4)";


//  Id pregunta: 6196 AÃ±o de creación de pregunta: 2010-01-01
 questions[26]= "27)  Respecto a los certificados de sede electr&oacute;nica y sello electr&oacute;nico";
 choices[26]= new Array();
 choices[26][0] = "El certificado de sede electr&oacute;nica permite la firma de documentos";
 choices[26][1] = "El certificado de sede electr&oacute;nica no permite la firma de documentos";
 choices[26][2] = "El certificado de sello electr&oacute;nico no permite el establecimiento de comunicaciones seguras";
 choices[26][3] = "El certificado de sello electr&oacute;nico permite la identificaci&oacute;n de una sede electr&oacute;nica";
 answers[26] = choices[26][1];
 units[26] = "43";
 comments[26] = "Id Pregunta: 6196. Articulos 18 y 19. El sello electronico SI permite establecer comunicaciones electronicas";


//  Id pregunta: 6197 AÃ±o de creación de pregunta: 2010-01-01
 questions[27]= "28)  Para la firma electr&oacute;nica por parte de personal al servicio de las Administraciones P&uacute;blicas NO se contempla el uso de";
 choices[27]= new Array();
 choices[27][0] = "Sello electr&oacute;nico";
 choices[27][1] = "DNI electr&oacute;nico";
 choices[27][2] = "Certificado de empleado p&uacute;blico";
 choices[27][3] = "Sistemas de c&oacute;digo seguro de verificaci&oacute;n";
 answers[27] = choices[27][0];
 units[27] = "43";
 comments[27] = "Id Pregunta: 6197. Articulo 21 RD 1671/2009";


//  Id pregunta: 6368 AÃ±o de creación de pregunta: 2010-01-01
 questions[28]= "29)  &iquest;Cu&aacute;l de los siguientes sistemas NO tiene la consideraci&oacute;n de entorno inseguro, de acuerdo con el Esquema Nacional de Seguridad?";
 choices[28]= new Array();
 choices[28][0] = "Equipos port&aacute;tiles";
 choices[28][1] = "Comunicaciones sobre redes inal&aacute;mbricas, incluso cuando la comunicaci&oacute;n se realice con cifrado fuerte";
 choices[28][2] = "Asistentes personales (PDA)";
 choices[28][3] = "Dispositivos perif&eacute;ricos";
 answers[28] = choices[28][1];
 units[28] = "43";
 comments[28] = "Id Pregunta: 6368. Art&iacute;culo 21 ENS";


//  Id pregunta: 6374 AÃ±o de creación de pregunta: 2010-01-01
 questions[29]= "30)  &iquest;Qu&eacute; Real Decreto define el Esquema Nacional de Interoperabilidad?";
 choices[29]= new Array();
 choices[29][0] = "RD 4/2010";
 choices[29][1] = "RD 1671/2009";
 choices[29][2] = "RD 4/2009";
 choices[29][3] = "RD 1671/2007";
 answers[29] = choices[29][0];
 units[29] = "43";
 comments[29] = "Id Pregunta: 6374. NULL";


//  Id pregunta: 6377 AÃ±o de creación de pregunta: 2010-01-01
 questions[30]= "31)  &iquest;Cu&aacute;l de los siguientes no es un principio b&aacute;sico del Esquema Nacional de Interoperabilidad?";
 choices[30]= new Array();
 choices[30][0] = "La interoperabilidad como cualidad integral.";
 choices[30][1] = "Car&aacute;cter multidimensional de la interoperabilidad.";
 choices[30][2] = "Enfoque de soluciones multilaterales.";
 choices[30][3] = "Todos los anteriores son principios b&aacute;sicos del Esquema Nacional de Interoperabilidad.";
 answers[30] = choices[30][3];
 units[30] = "43";
 comments[30] = "Id Pregunta: 6377. Art&iacute;culo 4 ENI";


//  Id pregunta: 6378 AÃ±o de creación de pregunta: 2010-01-01
 questions[31]= "32)  El Esquema Nacional de Interoperabilidad establece que las Administraciones p&uacute;blicas utilizar&aacute;n preferentemente la Red de comunicaciones de las Administraciones p&uacute;blicas espa&ntilde;olas para comunicarse entre s&iacute;. La red que prestar&aacute; este servicio recibe el nombre de:";
 choices[31]= new Array();
 choices[31][0] = "InterAdmon";
 choices[31][1] = "TESTA";
 choices[31][2] = "SARA";
 choices[31][3] = "El Esquema Nacional de Interoperabilidad no establece el uso de una red determinada.";
 answers[31] = choices[31][2];
 units[31] = "43";
 comments[31] = "Id Pregunta: 6378. Art&iacute;culo 13 ENI";


//  Id pregunta: 6379 AÃ±o de creación de pregunta: 2010-01-01
 questions[32]= "33)  &iquest;A qui&eacute;n corresponde aprobar el Plan de direccionamiento e interconexi&oacute;n de redes en la Administraci&oacute;n?";
 choices[32]= new Array();
 choices[32][0] = "A la Comisi&oacute;n de Estrategia TIC";
 choices[32][1] = "Al Centro Criptol&oacute;gico Nacional";
 choices[32][2] = "Al Gobierno";
 choices[32][3] = "A la Secretaria de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n";
 answers[32] = choices[32][0];
 units[32] = "43";
 comments[32] = "Id Pregunta: 6379. Art&iacute;culo 14 ENI, referencia actualizada de Consejo Superior Administraci&oacute;n Electr&oacute;nica a CETIC por Disp Adicional 2&ordf; del RD 806/2014.";


//  Id pregunta: 6382 AÃ±o de creación de pregunta: 2010-01-01
 questions[33]= "34)  Las normas t&eacute;cnicas de interoperabilidad:";
 choices[33]= new Array();
 choices[33][0] = "Las aprobar&aacute; el Ministerio de la Presidencia, a propuesta del Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica  y las publicar&aacute; mediante Resoluci&oacute;n de la Secretaria de Estado para la Funci&oacute;n P&uacute;blica.";
 choices[33][1] = "Las aprobar&aacute;  la Secretaria de Estado para la Funci&oacute;n P&uacute;blica, a propuesta del Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica  y las publicar&aacute; el Ministerio de la Presidencia mediante Orden Ministerial.";
 choices[33][2] = "Las aprobar&aacute; el Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica  y las publicar&aacute; mediante Resoluci&oacute;n de la Secretaria de Estado para la Funci&oacute;n P&uacute;blica.";
 choices[33][3] = "Las aprobar&aacute; el Ministerio de la Presidencia, a propuesta del Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica  y las publicar&aacute; mediante Real Decreto.";
 answers[33] = choices[33][0];
 units[33] = "43";
 comments[33] = "Id Pregunta: 6382. Disposici&oacute;n adicional primera ENI";


//  Id pregunta: 6383 AÃ±o de creación de pregunta: 2010-01-01
 questions[34]= "35)  Las disposiciones del RD 1671/2009 ser&aacute;n de aplicaci&oacute;n a:";
 choices[34]= new Array();
 choices[34][0] = "Al sector p&uacute;blico en su conjunto.";
 choices[34][1] = "A todas las Administraciones P&uacute;blicas , as&iacute; como de los organismos p&uacute;blicos vinculados o dependientes de las mismas.";
 choices[34][2] = "A las relaciones entre las Administraciones P&uacute;blicas.";
 choices[34][3] = "A la actividad de la Administraci&oacute;n General del Estado, as&iacute; como de los organismos p&uacute;blicos vinculados o dependientes de la misma.";
 answers[34] = choices[34][3];
 units[34] = "43";
 comments[34] = "Id Pregunta: 6383. Art&iacute;culo 1 RD 1671/2009";


//  Id pregunta: 6386 AÃ±o de creación de pregunta: 2010-01-01
 questions[35]= "36)  El &aacute;mbito de aplicaci&oacute;n de una sede electr&oacute;nica podr&aacute; ser:";
 choices[35]= new Array();
 choices[35][0] = "La totalidad del Ministerio u organismo p&uacute;blico, o uno o varios de sus &oacute;rganos con rango, al menos, de subdirecci&oacute;n general.";
 choices[35][1] = "La totalidad del Ministerio u organismo p&uacute;blico, o uno o varios de sus &oacute;rganos con rango, al menos, de direcci&oacute;n general.";
 choices[35][2] = "La totalidad del Ministerio u organismo p&uacute;blico, o uno o varios de sus &oacute;rganos con rango, al menos, de secretar&iacute;a de estado.";
 choices[35][3] = "La totalidad del Ministerio u organismo p&uacute;blico.";
 answers[35] = choices[35][1];
 units[35] = "43";
 comments[35] = "Id Pregunta: 6386. Art&iacute;culo 3.2 RD 1671/2009";


//  Id pregunta: 6392 AÃ±o de creación de pregunta: 2010-01-01
 questions[36]= "37)  &iquest;Cu&aacute;l de los siguientes contenidos deben contener obligatoriamente los certificados electr&oacute;nicos de sede electr&oacute;nica de la AGE y de sus organismos p&uacute;blicos vinculados o dependientes, de acuerdo al RD 1671/2009?";
 choices[36]= new Array();
 choices[36][0] = "Descripci&oacute;n de la sede electr&oacute;nica.";
 choices[36][1] = "Unidad administrativa suscriptora del certificado.";
 choices[36][2] = "Fechas de validez del certificado.";
 choices[36][3] = "Ninguna de las anteriores.";
 answers[36] = choices[36][1];
 units[36] = "43";
 comments[36] = "Id Pregunta: 6392. Art&iacute;culo 18 RD 1671/2009";


//  Id pregunta: 6393 AÃ±o de creación de pregunta: 2010-01-01
 questions[37]= "38)  La creaci&oacute;n de sellos electr&oacute;nicos se realizar&aacute;, seg&uacute;n lo dispuesto en el RD 1671/2009, mediante... ";
 choices[37]= new Array();
 choices[37][0] = "Orden del Ministerio de Presidencia";
 choices[37][1] = "Resoluci&oacute;n del Ministro o titular del organismo p&uacute;blico competente";
 choices[37][2] = "Orden del Ministerio o titular del organismo p&uacute;blico competente";
 choices[37][3] = "Resoluci&oacute;n de la Subsecretar&iacute;a del Ministerio o titular del organismo p&uacute;blico competente";
 answers[37] = choices[37][3];
 units[37] = "43";
 comments[37] = "Id Pregunta: 6393. Art&iacute;culo 19 RD 1671/2009";


//  Id pregunta: 6394 AÃ±o de creación de pregunta: 2010-01-01
 questions[38]= "39)  &iquest;Es posible establecer la obligaci&oacute;n de comunicarse electr&oacute;nicamente con los &oacute;rganos de la Administraci&oacute;n General del Estado o sus organismos p&uacute;blicos vinculados o dependientes?";
 choices[38]= new Array();
 choices[38][0] = "S&iacute;, en cualquier caso";
 choices[38][1] = "No, en ning&uacute;n caso";
 choices[38][2] = "S&iacute;, en determinados casos previstos y mediante orden ministerial";
 choices[38][3] = "S&iacute;, en determinados casos previstos y mediante resoluci&oacute;n de la Subsecretar&iacute;a del Ministerio o titular del organismo p&uacute;blico competente";
 answers[38] = choices[38][2];
 units[38] = "43";
 comments[38] = "Id Pregunta: 6394. Art&iacute;culo 32 RD 1671/2009";


//  Id pregunta: 6398 AÃ±o de creación de pregunta: 2010-01-01
 questions[39]= "40)  La ley 59/2003 de firma electr&oacute;nica, regula:";
 choices[39]= new Array();
 choices[39][0] = "La firma electr&oacute;nica";
 choices[39][1] = "La prestaci&oacute;n de servicios de certificaci&oacute;n";
 choices[39][2] = "La eficacia de la firma electr&oacute;nica";
 choices[39][3] = "Todas las anteriores son correctas.";
 answers[39] = choices[39][3];
 units[39] = "30";
 comments[39] = "Id Pregunta: 6398. Ley 59/2003, art&iacute;culo 1";


//  Id pregunta: 6399 AÃ±o de creación de pregunta: 2010-01-01
 questions[40]= "41)  De acuerdo a lo dispuesto en la ley 59/2003, se&ntilde;ale la respuesta correcta";
 choices[40]= new Array();
 choices[40][0] = "Firma electr&oacute;nica, es el conjunto de datos en forma electr&oacute;nica, consignados junto a otros o asociados con ellos, que pueden ser utilizados como medio de identificaci&oacute;n del firmante.";
 choices[40][1] = "La firma electr&oacute;nica avanzada tendr&aacute; respecto de los datos consignados en forma electr&oacute;nica el mismo valor que la firma manuscrita en relaci&oacute;n con los consignados en papel.";
 choices[40][2] = "La firma electronica avanzada es la firma electr&oacute;nica reconocida basada en un certificado reconocido y generada mediante un dispositivo seguro de creaci&oacute;n de firma.";
 choices[40][3] = "La firma electr&oacute;nica reconocida es la firma electr&oacute;nica avanzada que permite identificar al firmante, as&iacute; como el momento de creaci&oacute;n y detectar cualquier cambio ulterior de los datos firmados, que est&aacute; vinculada al firmante de manera &uacute;nica y a los datos a que se refiere y que ha sido creada por medios que el firmante puede mantener bajo su exclusivo control.";
 answers[40] = choices[40][0];
 units[40] = "30";
 comments[40] = "Id Pregunta: 6399. Ley 59/2003, art&iacute;culo 3";


//  Id pregunta: 6461 AÃ±o de creación de pregunta: 2010-01-01
 questions[41]= "42)  Seg&uacute;n la Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los Servicios P&uacute;blicos 'La publicaci&oacute;n de actos y comunicaciones que deban publicarse en tabl&oacute;n de anuncios o edictos':";
 choices[41]= new Array();
 choices[41][0] = "Deber&aacute; ser sustituida por su publicaci&oacute;n en la sede electr&oacute;nica del organismo correspondiente";
 choices[41][1] = "No podr&aacute; ser sustituida por su publicaci&oacute;n en la sede electr&oacute;nica del organismo correspondiente";
 choices[41][2] = "Podr&aacute; ser sustituida o complementada por su publicaci&oacute;n en la sede electr&oacute;nica del organismo correspondiente";
 choices[41][3] = "Deber&aacute; ser complementada con su publicaci&oacute;n en la sede electr&oacute;nica del organismo correspondiente";
 answers[41] = choices[41][2];
 units[41] = "43";
 comments[41] = "Id Pregunta: 6461. Castilla La Mancha 2009";


//  Id pregunta: 7311 AÃ±o de creación de pregunta: 2010-01-01
 questions[42]= "43)  La Ley 11/2007, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos (LAECSP) regula la &ldquo;Cooperaci&oacute;n entre administraciones para el impulso de la administraci&oacute;n electr&oacute;nica&rdquo; en el:";
 choices[42]= new Array();
 choices[42][0] = "T&iacute;tulo I";
 choices[42][1] = "T&iacute;tulo II";
 choices[42][2] = "T&iacute;tulo III";
 choices[42][3] = "T&iacute;tulo IV";
 answers[42] = choices[42][3];
 units[42] = "44";
 comments[42] = "Id Pregunta: 7311. NULL";


//  Id pregunta: 8190 AÃ±o de creación de pregunta: 2011-01-01
 questions[43]= "44)  Se&ntilde;ale cu&aacute;l NO es un campo de actuaci&oacute;n clave de la Agenda Digital para Europa:";
 choices[43]= new Array();
 choices[43][0] = "Mercado &uacute;nico digital din&aacute;mico. ";
 choices[43][1] = "Acceso ultrarr&aacute;pido a Internet. ";
 choices[43][2] = "Nativos digitales. ";
 choices[43][3] = "Inclusi&oacute;n digital. ";
 answers[43] = choices[43][2];
 units[43] = "30";
 comments[43] = "Id Pregunta: 8190. Examen TIC A1 2010";


//  Id pregunta: 8281 AÃ±o de creación de pregunta: 2011-01-01
 questions[44]= "45)  El Esquema Nacional de Interoperatibilidad (ENI) se&ntilde;ala que las condiciones de licenciamiento de las aplicaciones y documentaci&oacute;n asociada tendr&aacute;n en cuenta que el fin perseguido es el aprovechamiento y la reutilizaci&oacute;n. Para este fin, &iquest;qu&eacute; tipo de licenciamiento indica expresamente el ENI que se procurar&aacute; aplicar?:";
 choices[44]= new Array();
 choices[44][0] = "Licencia IDABC.";
 choices[44][1] = "Licencia de C&oacute;digo Abierto del Consejo Superior de Administraci&oacute;n Electr&oacute;nica.";
 choices[44][2] = "Licencia P&uacute;blica de la Uni&oacute;n Europea.";
 choices[44][3] = "Licencia Shareware.";
 answers[44] = choices[44][2];
 units[44] = "43";
 comments[44] = "Id Pregunta: 8281. Examen TIC A1 2010";


//  Id pregunta: 8287 AÃ±o de creación de pregunta: 2011-01-01
 questions[45]= "46)  &iquest;Cu&aacute;ndo se puede utilizar el Servicio de Verificaci&oacute;n de Datos de Identidad para consultar datos de car&aacute;cter personal?";
 choices[45]= new Array();
 choices[45][0] = "Cuando se cuente con el consentimiento del interesado y los datos sean necesarios para el tr&aacute;mite. ";
 choices[45][1] = "S&oacute;lo se puede utilizar para consultar datos que no sean de car&aacute;cter personal";
 choices[45][2] = "S&oacute;lo en caso de que sean datos de nivel de protecci&oacute;n alto. ";
 choices[45][3] = "Se contemplaba un per&iacute;odo de transici&oacute;n, pero a partir del 1 de enero de 2011, el Servicio de Verificaci&oacute;n de Datos de Identidad ser&aacute; obligatorio en todo caso";
 answers[45] = choices[45][0];
 units[45] = "44";
 comments[45] = "Id Pregunta: 8287. Examen TIC A2 2010";


//  Id pregunta: 8405 AÃ±o de creación de pregunta: 2011-01-01
 questions[46]= "47)  Se&ntilde;ale cu&aacute;l de los siguientes servicios NO se ofrece en la plataforma de validaci&oacute;n y firma electr&oacute;nica @Firma: ";
 choices[46]= new Array();
 choices[46][0] = "Sellado de tiempo (TSA) seg&uacute;n la RFC 3161";
 choices[46][1] = "Validaci&oacute;n, conforme a la RFC 3280, de certificados X.509 de todas las Autoridades de Certificaci&oacute;n reconocidas en el pa&iacute;s por el Ministerio de Industria, Turismo y Comercio ";
 choices[46][2] = "Expedici&oacute;n de certificados de firma electr&oacute;nica del personal al servicio de las Administraciones P&uacute;blicas para el cumplimiento de sus funciones";
 choices[46][3] = "Validaci&oacute;n de firma v&iacute;a servicios web (WS) de un elemento firmado. ";
 answers[46] = choices[46][2];
 units[46] = "44";
 comments[46] = "Id Pregunta: 8405. Examen TIC A2 2010";


//  Id pregunta: 8422 AÃ±o de creación de pregunta: 2011-01-01
 questions[47]= "48)  &iquest;Cu&aacute;l de los siguientes principios b&aacute;sicos no aparece en el Esquema Nacional de Seguridad, Real Decreto 3/2010 del 8 de enero?";
 choices[47]= new Array();
 choices[47][0] = "Seguridad transversal";
 choices[47][1] = "Gesti&oacute;n de riesgos";
 choices[47][2] = "L&iacute;neas de defensa";
 choices[47][3] = "Funci&oacute;n diferenciada";
 answers[47] = choices[47][0];
 units[47] = "43";
 comments[47] = "Id Pregunta: 8422. NULL";


//  Id pregunta: 8442 AÃ±o de creación de pregunta: 2011-01-01
 questions[48]= "49)  Seg&uacute;n el RD 1671/2009, en caso de cambio del formato original, para que una copia electr&oacute;nica de un documento electr&oacute;nico tenga la condici&oacute;n de copia aut&eacute;ntica, deber&aacute;n cumplirse una serie de requisitos. &iquest;Cu&aacute;l de los siguientes requisitos no se encuentra entre ellos?";
 choices[48]= new Array();
 choices[48][0] = "Que el documento electr&oacute;nico original, que debe conservarse en todo caso, se encuentre en poder de la Administraci&oacute;n.";
 choices[48][1] = "Que la copia sea obtenida conforme a las normas de competencia y procedimiento que en cada caso se aprueben, incluidas las de obtenci&oacute;n automatizada.";
 choices[48][2] = "Que incluya el sello electr&oacute;nico del organismo.";
 choices[48][3] = "Que sea autorizada mediante firma electr&oacute;nica conforme a los sistemas recogidos en los art&iacute;culos 18 y 19 de la Ley 11/2007, de 22 de junio.";
 answers[48] = choices[48][2];
 units[48] = "43";
 comments[48] = "Id Pregunta: 8442. ";


//  Id pregunta: 8600 AÃ±o de creación de pregunta: 2011-01-01
 questions[49]= "50)  Con el objetivo de garantizar la calidad en los servicios p&uacute;blicos se ha creado:";
 choices[49]= new Array();
 choices[49][0] = "La Agencia Estatal de Evaluaci&oacute;n de las Pol&iacute;ticas P&uacute;blicas y la Calidad de los Servicios (AEVAL) perteneciente al Ministerio de Presidencia";
 choices[49][1] = "La Direcci&oacute;n General de Aseguramiento de la Calidad e Infraestructuras perteneciente al Ministerio de Industria Turismo y Comercio";
 choices[49][2] = "El Consejo Superior de Aseguramiento de la Calidad e Infraestructuras perteneciente al Ministerio de Presidencia.";
 choices[49][3] = "La Agencia Estatal de Evaluaci&oacute;n de las Pol&iacute;ticas P&uacute;blicas y la Calidad de los Servicios (AEVAL) perteneciente al Ministerio de Pol&iacute;tica Territorial.";
 answers[49] = choices[49][0];
 units[49] = "43";
 comments[49] = "Id Pregunta: 8600. Examen TIC A2 2010 interna";


//  Id pregunta: 8745 AÃ±o de creación de pregunta: 2011-01-01
 questions[50]= "51)  &iquest;C&oacute;mo se define la sede electr&oacute;nica en la Ley 11/2007, de 22 de junio, de Acceso Electr&oacute;nico de los Ciudadanos a los Servicios P&uacute;blicos, LAECSP?";
 choices[50]= new Array();
 choices[50][0] = "La sede electr&oacute;nica no se define en la LAECSP, sino en la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Informaci&oacute;n y de Comercio Electr&oacute;nico, tanto para el sector p&uacute;blico como el privado.";
 choices[50][1] = "Es aquella direcci&oacute;n electr&oacute;nica disponible para los ciudadanos a trav&eacute;s de redes de telecomunicaciones cuya titularidad, gesti&oacute;n y administraci&oacute;n corresponde a una Administraci&oacute;n P&uacute;blica &oacute;rgano o entidad administrativa en el ejercicio de sus competencias";
 choices[50][2] = "Se establece simplemente como nueva denominaci&oacute;n para el registro telem&aacute;tico, ya definido en la Ley 30/1992. de 26 de noviembre de R&eacute;gimen Jur&iacute;dico de las Administraciones P&uacute;blicas y del Procedimiento Administrativo Com&uacute;n, LRJPAC";
 choices[50][3] = "Es el centro de proceso de datos correspondiente a cada &oacute;rgano p&uacute;blico, d&oacute;nde se localizan los aplicativos mediante los cuales aqu&eacute;l ejerce sus competencias.";
 answers[50] = choices[50][1];
 units[50] = "43";
 comments[50] = "Id Pregunta: 8745. Examen TIC A2 2010 interna";


//  Id pregunta: 8751 AÃ±o de creación de pregunta: 2011-01-01
 questions[51]= "52)  El Real Decreto 3/2010, de 8 de enero, regula el Esquema Nacional de Seguridad (ENS) en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica. En el mismo, la seguridad se entender&aacute; como:";
 choices[51]= new Array();
 choices[51][0] = "Un proceso espec&iacute;ficamente tecnol&oacute;gico, contemplando exclusivamente elementos t&eacute;cnicos";
 choices[51][1] = "Un proceso integral te&oacute;rico que comprende &uacute;nicamente tas medidas de prevenci&oacute;n y detecci&oacute;n de amenazas, quedando fuera del &aacute;mbito del ENS las de correcci&oacute;n, a implantar particularmente en cada caso.";
 choices[51][2] = "Un proceso espec&iacute;ficamente tecnol&oacute;gico, que comprende &uacute;nicamente las medidas concretas de detecci&oacute;n y correcci&oacute;n de amenazas, quedando fuera del &aacute;mbito del ENS las de prevenci&oacute;n, como propias de cada caso particular";
 choices[51][3] = "Un proceso integral constituido por elementos t&eacute;cnicos, humanos, materiales y organizativos";
 answers[51] = choices[51][3];
 units[51] = "43";
 comments[51] = "Id Pregunta: 8751. Examen TIC A2 2010 interna";


//  Id pregunta: 8944 AÃ±o de creación de pregunta: 2011-01-01
 questions[52]= "53)  &iquest;Cu&aacute;l de las siguientes no es una dimensi&oacute;n de la seguridad judicial electr&oacute;nica de acuerdo a la ley 18/2011?";
 choices[52]= new Array();
 choices[52][0] = "Conservaci&oacute;n";
 choices[52][1] = "Confidencialidad";
 choices[52][2] = "Trazabilidad";
 choices[52][3] = "Todas las anteriores lo son";
 answers[52] = choices[52][3];
 units[52] = "43";
 comments[52] = "Id Pregunta: 8944. ";


//  Id pregunta: 9036 AÃ±o de creación de pregunta: 2011-01-01
 questions[53]= "54)  Seg&uacute;n el  RD 1671/2009, &iquest;cu&aacute;ndo se pueden destruir documentos en soporte papel?";
 choices[53]= new Array();
 choices[53][0] = "Siempre";
 choices[53][1] = "Nunca";
 choices[53][2] = "Cuando no se trate de documentos  con valor hist&oacute;rico, art&iacute;sticos o con car&aacute;cter relevante";
 choices[53][3] = "Cuando ya exista una copia en formato papel ";
 answers[53] = choices[53][2];
 units[53] = "43";
 comments[53] = "Id Pregunta: 9036. NULL";


//  Id pregunta: 9545 AÃ±o de creación de pregunta: 2013-01-01
 questions[54]= "55)  Seg&uacute;n la LSSI, entre los elementos que los prestadores de servicios de la Sociedad de la Informaci&oacute;n est&aacute;n obligados a indicar en su p&aacute;gina web NO se encuentra:";
 choices[54]= new Array();
 choices[54][0] = "El nombre o denominiaci&oacute;n social";
 choices[54][1] = "Un n&uacute;mero de tel&eacute;fono de contacto";
 choices[54][2] = "Los datos de su inscripci&oacute;n en el registro mercantil u otro registro p&uacute;blico";
 choices[54][3] = "Los c&oacute;digos de conducta a los que est&eacute; adheridos.";
 answers[54] = choices[54][1];
 units[54] = "30";
 comments[54] = "Id Pregunta: 9545. Ley 34/2002, art&iacute;culo 10";


//  Id pregunta: 9547 AÃ±o de creación de pregunta: 2013-01-01
 questions[55]= "56)  Seg&uacute;n la LSSI, la acci&oacute;n de cesaci&oacute;n, dirigida a obtener una sentencia que condene al demandado a cesar en una conducta contraria a dicha Ley, NO podr&aacute; ser interpuesta por:";
 choices[55]= new Array();
 choices[55][0] = "Grupos de consumidores o usuarios afectados";
 choices[55][1] = "El Ministerio Fiscal";
 choices[55][2] = "El Instituto Nacional de Consumo";
 choices[55][3] = "La Secretar&iacute;a de Estado para las Telecomunicaciones y la Sociedad de la Informaci&oacute;n";
 answers[55] = choices[55][3];
 units[55] = "30";
 comments[55] = "Id Pregunta: 9547. Ley 34/2002, art&iacute;culo 31";


//  Id pregunta: 9570 AÃ±o de creación de pregunta: 2013-01-01
 questions[56]= "57)  Seg&uacute;n la Ley de Firma Electr&oacute;nica, durante la tramitaci&oacute;n de un proceso sancionador, podr&aacute; acordarse como medida provisional la suspensi&oacute;n temporal de la actividad del prestador de servicios de certificaci&oacute;n, incluyendo el cierre de sus establecimientos, cuando la infracci&oacute;n haya sido calicada como:";
 choices[56]= new Array();
 choices[56][0] = "Leve, grave o muy grave";
 choices[56][1] = "Grave o muy grave";
 choices[56][2] = "&Uacute;nicamente cuando haya sido calificada como muy grave";
 choices[56][3] = "En ning&uacute;n caso podr&aacute;n acordarse este tipo de medidas provisionales";
 answers[56] = choices[56][1];
 units[56] = "30";
 comments[56] = "Id Pregunta: 9570. Ley 59/2003, art&iacute;culo 34";


//  Id pregunta: 9580 AÃ±o de creación de pregunta: 2013-01-01
 questions[57]= "58)  Seg&uacute;n el RD 1671/2009 de 6 de noviembre, &iquest;cu&aacute;l de las siguientes condiciones NO es requisito necesario para el uso de CSV como sistema de firma electr&oacute;nica?";
 choices[57]= new Array();
 choices[57][0] = "Car&aacute;cter &uacute;nico del c&oacute;digo del documento.";
 choices[57][1] = "Utilizaci&oacute;n de generadores aleatorios tomando como semillas la identidad del firmante y el contenido del documento.";
 choices[57][2] = "Posibilidad de verificar el documento por el tiempo que se establezca.";
 choices[57][3] = "Para su utilizaci&oacute;n, se requiere una orden del Ministro competente o resoluci&oacute;n del titular del organismo p&uacute;blico, publicada en la sede electr&oacute;nica.";
 answers[57] = choices[57][1];
 units[57] = "43";
 comments[57] = "Id Pregunta: 9580. Examen TIC A1 2011";


//  Id pregunta: 9582 AÃ±o de creación de pregunta: 2013-01-01
 questions[58]= "59)  En el contexto de la firma electr&oacute;nica y su regulaci&oacute;n en Espa&ntilde;a se&ntilde;ale la afirmaci&oacute;n FALSA.";
 choices[58]= new Array();
 choices[58][0] = "Los funcionarios al servicio de las administraciones p&uacute;blicas espa&ntilde;olas pueden firmar en el ejercicio de su cargo utilizando su DNI electr&oacute;nico.";
 choices[58][1] = "Los c&oacute;digos de verificaci&oacute;n segura (CSV) junto con los sellos de &oacute;rgano sirven para dotar de firma electr&oacute;nica reconocida a la actuaci&oacute;n administrativa automatizada.";
 choices[58][2] = "Un dispositivo seguro de creaci&oacute;n de firma debe garantizar que los datos usados para generar la firma pueden producirse s&oacute;lo una vez.";
 choices[58][3] = "Un certificado electr&oacute;nico reconocido ha de incluir la firma electr&oacute;nica avanzada del prestador de servicios de certificaci&oacute;n que lo expide.";
 answers[58] = choices[58][1];
 units[58] = "43, 74";
 comments[58] = "Id Pregunta: 9582. Examen TIC A1 2011";


//  Id pregunta: 9661 AÃ±o de creación de pregunta: 2014-01-01
 questions[59]= "60)  La Ley 11/2007 tiene en cuenta &quot;Otros sistemas de firma&quot;, que podr&aacute;n ser creados mediante:";
 choices[59]= new Array();
 choices[59][0] = "Real Decreto del Gobierno, previo informe de la CSAE";
 choices[59][1] = "Informe de la CSAE";
 choices[59][2] = "Orden Ministerial o Resoluci&oacute;n, previo informe de la CSAE.";
 choices[59][3] = "No necesita reglamento para su creaci&oacute;n.";
 answers[59] = choices[59][2];
 units[59] = "43";
 comments[59] = "Id Pregunta: 9661. NULL";


//  Id pregunta: 9722 AÃ±o de creación de pregunta: 2014-01-01
 questions[60]= "61)  El art&iacute;culo 5 de la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, establece la obligaci&oacute;n para los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico o exploten redes p&uacute;blicas de comunicaciones, de conservar los datos (referidos en su art&iacute;culo 3), durante un plazo de";
 choices[60]= new Array();
 choices[60][0] = "48 meses.";
 choices[60][1] = "24 meses.";
 choices[60][2] = "12 meses.";
 choices[60][3] = "6 meses.";
 answers[60] = choices[60][2];
 units[60] = "30";
 comments[60] = "Id Pregunta: 9722. Examen TIC-A1 2013";


//  Id pregunta: 9805 AÃ±o de creación de pregunta: 2014-01-01
 questions[61]= "62)  En el supuesto de documentos emitidos originalmente en soporte papel de los que se hayan efectuado copias electr&oacute;nicas, de acuerdo a lo dispuesto en el art 30 de la ley 11/2007, se podr&aacute;:";
 choices[61]= new Array();
 choices[61][0] = "Destruir los originales en los t&eacute;rminos y condiciones que por cada Administraci&oacute;n P&uacute;blica se establezcan. ";
 choices[61][1] = "Destruir los originales, en cualquier caso, al cabo de cinco a&ntilde;os de su presentaci&oacute;n. ";
 choices[61][2] = "Nunca se podr&aacute;n destruir, con car&aacute;cter general para todo el Estado. ";
 choices[61][3] = "Destruir los originales, previo consentimiento del interesado. ";
 answers[61] = choices[61][0];
 units[61] = "43";
 comments[61] = "Id Pregunta: 9805. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9876 AÃ±o de creación de pregunta: 2014-01-01
 questions[62]= "63)  De acuerdo con lo establecido en el RD 3/2010 de 8 de enero por el que se regula el Esquema Nacional de Seguridad,";
 choices[62]= new Array();
 choices[62][0] = "todos los sistemas de informaci&oacute;n ser&aacute;n objeto de una auditor&iacute;a regular ordinaria con car&aacute;cter anual";
 choices[62][1] = "los sistemas de informaci&oacute;n de categor&iacute;a b&aacute;sica no precisan ser auditados";
 choices[62][2] = "la auditor&iacute;a de los sistemas de categor&iacute;a media puede ser sustituida por una autoevaluaci&oacute;n realizada por el mismo personal que administra el sistema";
 choices[62][3] = "no es necesario que los informes de autoevaluaci&oacute;n sean conocidos por el responsable de seguridad competente. Basta con que los conozca el responsable del sistema.";
 answers[62] = choices[62][1];
 units[62] = "43";
 comments[62] = "Id Pregunta: 9876. TIC A1, Examen 2013";


//  Id pregunta: 9880 AÃ±o de creación de pregunta: 2014-01-01
 questions[63]= "64)  Atendiendo al RD 4/2010 de 8 de enero por el que se regula el Esquema Nacional deInteroperabilidad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, la exigencia de que las Administraciones P&uacute;blicas deban usar est&aacute;ndares abiertos y, en su caso, est&aacute;ndares que sean de uso generalizado por los ciudadanos, es un principio de";
 choices[63]= new Array();
 choices[63][0] = "interoperabilidad t&eacute;cnica.";
 choices[63][1] = "interoperabilidad organizativa.";
 choices[63][2] = "gesti&oacute;n de riesgos.";
 choices[63][3] = "auditor&iacute;a de seguridad.";
 answers[63] = choices[63][0];
 units[63] = "43";
 comments[63] = "Id Pregunta: 9880. TIC A1, Examen 2013";


//  Id pregunta: 10006 AÃ±o de creación de pregunta: 2014-01-01
 questions[64]= "65)  En el &aacute;mbito del Real Decreto 772/1999, de 7 de mayo, en la redacci&oacute;n dada por el Real Decreto 209/2003, de 21 de febrero, por el que se regulan los registros y las notificaciones telem&aacute;ticas, as&iacute; como la utilizaci&oacute;n de medios telem&aacute;ticos para la sustituci&oacute;n de la aportaci&oacute;n de certificados por los ciudadanos, NO es una funci&oacute;n propia de los registros telem&aacute;ticos";
 choices[64]= new Array();
 choices[64][0] = "la recepci&oacute;n de solicitudes, escritos y comunicaciones.";
 choices[64][1] = "la remisi&oacute;n de las solicitudes, escritos y comunicaciones recibidas.";
 choices[64][2] = "la expedici&oacute;n de copias selladas o compulsadas de los documentos que, en su caso, se transmitan junto con la solicitud, escrito o comunicaci&oacute;n.";
 choices[64][3] = "la anotaci&oacute;n de los correspondientes asientos de entrada y salida.";
 answers[64] = choices[64][2];
 units[64] = "43";
 comments[64] = "Id Pregunta: 10006. ";


//  Id pregunta: 10152 AÃ±o de creación de pregunta: 2014-01-01
 questions[65]= "66)  El registro electr&oacute;nico que permite hacer constar y gestionar las representaciones que los interesados otorguen a terceros, con el fin de que &eacute;stos puedan actuar en su nombre de forma electr&oacute;nica ante la Administraci&oacute;n General del Estado y/o sus organismos p&uacute;blicos vinculados o dependientes:";
 choices[65]= new Array();
 choices[65][0] = "se crea en el RD 1671/2009 (art. 15) ";
 choices[65][1] = "se denomina REA (Registro Electr&oacute;nico de Apoderamiento)";
 choices[65][2] = "est&aacute; regulado por la Orden HAP/1637/2012";
 choices[65][3] = "Todas las anteriores son ciertas";
 answers[65] = choices[65][3];
 units[65] = "43";
 comments[65] = "Id Pregunta: 10152. ";


//  Id pregunta: 10159 AÃ±o de creación de pregunta: 2014-01-01
 questions[66]= "67)  El conjunto de especificaciones orientadas al intercambio de datos entre Administraciones P&uacute;blicas con el objetivo de eliminar los certificados administrativos en papel se denomina:";
 choices[66]= new Array();
 choices[66][0] = "SCCD";
 choices[66][1] = "SCSP";
 choices[66][2] = "Plataforma de intermedicaci&oacute;n";
 choices[66][3] = "Ninguno de los anteriores";
 answers[66] = choices[66][1];
 units[66] = "44";
 comments[66] = "Id Pregunta: 10159. ";


//  Id pregunta: 10160 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  Para el pago de precio p&uacute;blico puede hacerse uso de:";
 choices[67]= new Array();
 choices[67][0] = "La Pasarela de Pagos del MINHAP-AEAT";
 choices[67][1] = "El Servicio de Pago Telem&aacute;tico, de Red.es";
 choices[67][2] = "Los dos anteriores";
 choices[67][3] = "Ninguno de los anteriores";
 answers[67] = choices[67][1];
 units[67] = "44";
 comments[67] = "Id Pregunta: 10160. ";


//  Id pregunta: 10494 AÃ±o de creación de pregunta: 2014-01-01
 questions[68]= "69)  Seg&uacute;n la NTI de requisitos de conexi&oacute;n a la Red SARA. &iquest;Cual de los siguientes no es un tipo de Punto de Presencia?";
 choices[68]= new Array();
 choices[68][0] = "Area de Conexi&oacute;n de la AEAT";
 choices[68][1] = "Red sTESTA";
 choices[68][2] = "Ventanilla Unica empresarial de Melilla";
 choices[68][3] = "Banco de Espa&ntilde;a";
 answers[68] = choices[68][1];
 units[68] = "43";
 comments[68] = "Id Pregunta: 10494. Punto II.1.2 de la NTI de Requisitos de conexi&oacute;n a red sara. Las Ventanillas Unicas son tipos de PdP, pero la Ventanilla Unica de Melilla es un PdP dentro de ese tipo y no un tipo";


//  Id pregunta: 10544 AÃ±o de creación de pregunta: 2014-01-01
 questions[69]= "70)  El quince de febrero de 2013 el Consejo de Ministros aprob&oacute; la Agenda Digital para Espa&ntilde;a como la estrategia del Gobierno para desarrollar la econom&iacute;a y la sociedad digital en Espa&ntilde;a durante el periodo 2013-2015.";
 choices[69]= new Array();
 choices[69][0] = "Esta estrategia se configura como el paraguas de todas las acciones del Gobierno en materia de Telecomunicaciones y de Sociedad de la Informaci&oacute;n. La Agenda se lidera conjuntamente por el Ministerio de Industria, Energ&iacute;a y Turismo y por el Ministerio de Hacienda y Administraciones P&uacute;blicas.";
 choices[69][1] = "Esta estrategia se configura como el paraguas de todas las acciones del Gobierno en materia de Telecomunicaciones y de Sociedad de la Informaci&oacute;n. La Agenda se lidera conjuntamente por el Ministerio de Industria, Energ&iacute;a y Turismo y por la Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n.";
 choices[69][2] = "Esta estrategia se configura como el paraguas de todas las acciones del Gobierno en materia de Administraci&oacute;n Electr&oacute;nica. La Agenda se lidera conjuntamente por el Ministerio de Industria, Energ&iacute;a y Turismo y por el Ministerio de Hacienda y Administraciones P&uacute;blicas.";
 choices[69][3] = "Esta estrategia se configura como el paraguas de todas las acciones del Gobierno en materia de Administraci&oacute;n Electr&oacute;nica. La Agenda se lidera conjuntamente por el Ministerio de Industria, Energ&iacute;a y Turismo y por la Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n.";
 answers[69] = choices[69][0];
 units[69] = "30";
 comments[69] = "Id Pregunta: 10544. http://www.agendadigital.gob.es/agenda-digital/Paginas/agenda-digital.aspx";


//  Id pregunta: 10573 AÃ±o de creación de pregunta: 2015-01-01
 questions[70]= "71)  &iquest;A qu&eacute; corresponden las siglas STORK?";
 choices[70]= new Array();
 choices[70][0] = "Secure Transport Over bRoad toKens";
 choices[70][1] = "Security idenTity acrOss boRders linKed";
 choices[70][2] = "Safe idenTity fOr Roaming Knowledge";
 choices[70][3] = "Safe noTes stOring encRypted Keys";
 answers[70] = choices[70][1];
 units[70] = "44";
 comments[70] = "Id Pregunta: 10573. ";


//  Id pregunta: 10574 AÃ±o de creación de pregunta: 2015-01-01
 questions[71]= "72)  &iquest;Qu&eacute; especificaciones permiten eliminar los certificados administrativos en papel mediante el intercambio electr&oacute;nico de datos entre Administraciones?";
 choices[71]= new Array();
 choices[71][0] = "SCSP";
 choices[71][1] = "SIGP";
 choices[71][2] = "SAML";
 choices[71][3] = "SIR";
 answers[71] = choices[71][0];
 units[71] = "44";
 comments[71] = "Id Pregunta: 10574. Sustituci&oacute;n de Certificados en Soporte Papel ";


//  Id pregunta: 10586 AÃ±o de creación de pregunta: 2015-01-01
 questions[72]= "73)  La Ley 26/2007 de medidas de Impulso de la Sociedad de la Informaci&oacute;n:";
 choices[72]= new Array();
 choices[72][0] = "Modifica las leyes 34/2002, 59/2003 y 7/1996.";
 choices[72][1] = "Introduce normativa sobre facturaci&oacute;n electr&oacute;nica.";
 choices[72][2] = "Elimina la intervenci&oacute;n del MINETUR para dirigirse a los prestadores de servicios de intermediaci&oacute;n.";
 choices[72][3] = "Todas las anteriores.";
 answers[72] = choices[72][3];
 units[72] = "30";
 comments[72] = "Id Pregunta: 10586. ";


//  Id pregunta: 10681 AÃ±o de creación de pregunta: 2015-01-01
 questions[73]= "74)  Seg&uacute;n la Ley 39/2015 se establece como &quot;Derecho de las Personas en sus relaciones con la Administraci&oacute;n&quot; en su Art&iacute;culo 13.";
 choices[73]= new Array();
 choices[73][0] = "Comunicarse con las Administraciones P&uacute;blicas a trav&eacute;s de un Punto de Acceso General electr&oacute;nico de la Administraci&oacute;n.";
 choices[73][1] = "Relacionarse con las Administraciones P&uacute;blicas a trav&eacute;s de medios electr&oacute;nicos utilizando cualquier formato recogido en el ENI.";
 choices[73][2] = "Ambas";
 choices[73][3] = "Ninguna de las anteriores.";
 answers[73] = choices[73][0];
 units[73] = "30";
 comments[73] = "Id Pregunta: 10681. ";


//  Id pregunta: 10689 AÃ±o de creación de pregunta: 2015-01-01
 questions[74]= "75)  &iquest;Qu&eacute; Ley establece el &quot;Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas.&quot;?";
 choices[74]= new Array();
 choices[74][0] = "Ley 40/2015.";
 choices[74][1] = "Ley 40/2014.";
 choices[74][2] = "Ley 39/2015.";
 choices[74][3] = "Ley 41/2015.";
 answers[74] = choices[74][2];
 units[74] = "30";
 comments[74] = "Id Pregunta: 10689. ";


//  Id pregunta: 10693 AÃ±o de creación de pregunta: 2015-01-01
 questions[75]= "76)  La Ley 39/2015 es de aplicaci&oacute;n obligatoria:";
 choices[75]= new Array();
 choices[75][0] = "Para la Administraci&oacute;n General del Estado.";
 choices[75][1] = "Para las Comunidades Aut&oacute;nomas y Administraci&oacute;n Local.";
 choices[75][2] = "Para el Sector P&uacute;blico Institucional.";
 choices[75][3] = "Todas las anteriores.";
 answers[75] = choices[75][3];
 units[75] = "30";
 comments[75] = "Id Pregunta: 10693. ";


//  Id pregunta: 10696 AÃ±o de creación de pregunta: 2015-01-01
 questions[76]= "77)  Seg&uacute;n la Ley 39/2015, cual de las siguientes no se establece como informaci&oacute;n necesaria en los asientos que se realicen en los registros electr&oacute;nicos generales y particulares de apoderamientos:";
 choices[76]= new Array();
 choices[76][0] = "Fecha de inscripci&oacute;n.";
 choices[76][1] = "Per&iacute;odo de tiempo por el cual se otorga el poder.";
 choices[76][2] = "Lugar de inscripci&oacute;n.";
 choices[76][3] = "Tipo de poder seg&uacute;n las facultades que otorgue.";
 answers[76] = choices[76][2];
 units[76] = "30";
 comments[76] = "Id Pregunta: 10696. ";


//  Id pregunta: 10699 AÃ±o de creación de pregunta: 2015-01-01
 questions[77]= "78)  &iquest;Cu&aacute;l de los siguientes no es un metadato obligatorio establecido en la NTI de Documento Electr&oacute;nico?";
 choices[77]= new Array();
 choices[77][0] = "Versi&oacute;n NTI.";
 choices[77][1] = "&Oacute;rgano.";
 choices[77][2] = "Estado de elaboraci&oacute;n.";
 choices[77][3] = "Todos los anteriores son metadatos obligatorios.";
 answers[77] = choices[77][3];
 units[77] = "43";
 comments[77] = "Id Pregunta: 10699. ";


//  Id pregunta: 10706 AÃ±o de creación de pregunta: 2015-01-01
 questions[78]= "79)  &iquest;Cu&aacute;l no es un componente del expediente electr&oacute;nico?";
 choices[78]= new Array();
 choices[78][0] = "Descripci&oacute;n de los documentos electr&oacute;nicos.";
 choices[78][1] = "&Iacute;ndice electr&oacute;nico.";
 choices[78][2] = "Firma del &Iacute;ndice electr&oacute;nico.";
 choices[78][3] = "Metadatos del expediente electr&oacute;nico.";
 answers[78] = choices[78][0];
 units[78] = "43";
 comments[78] = "Id Pregunta: 10706. ";


//  Id pregunta: 10711 AÃ±o de creación de pregunta: 2015-01-01
 questions[79]= "80)  &iquest;Qu&eacute; especificaci&oacute;n de SICRES se incluye en la Norma T&eacute;cnica de Interoperabilidad de Modelo de Datos para el Intercambio de asientos entre las entidades registrales?";
 choices[79]= new Array();
 choices[79][0] = "1";
 choices[79][1] = "2";
 choices[79][2] = "3";
 choices[79][3] = "4";
 answers[79] = choices[79][1];
 units[79] = "43";
 comments[79] = "Id Pregunta: 10711. ";


//  Id pregunta: 10726 AÃ±o de creación de pregunta: 2015-01-01
 questions[80]= "81)  &iquest;Qu&eacute; versi&oacute;n del protocolo SCSP (Sustituci&oacute;n de Certificados en Soporte Papel) se considera como utilizaci&oacute;n de forma general en la NTI de Protocolos de Intermediaci&oacute;n?";
 choices[80]= new Array();
 choices[80][0] = "1.0";
 choices[80][1] = "2.0";
 choices[80][2] = "3.0";
 choices[80][3] = "4.0";
 answers[80] = choices[80][2];
 units[80] = "43";
 comments[80] = "Id Pregunta: 10726. ";


//  Id pregunta: 10727 AÃ±o de creación de pregunta: 2015-01-01
 questions[81]= "82)  &iquest;D&oacute;nde se puede encontrar la especificaci&oacute;n del protocolo SCSP (Sustituci&oacute;n de Certificados en Soporte Papel) seg&uacute;n se&ntilde;ala la NTI de protocolos de intermedicaci&oacute;n?";
 choices[81]= new Array();
 choices[81][0] = "En el Portal de Administraci&oacute;n electr&oacute;nica PAE/CTT";
 choices[81][1] = "En la Intranet del Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[81][2] = "En la Intranet del Ministerio de la Presidencia";
 choices[81][3] = "Se debe solicitar dicha informaci&oacute;n a la Direcci&oacute;n TIC";
 answers[81] = choices[81][0];
 units[81] = "43";
 comments[81] = "Id Pregunta: 10727. ";


//  Id pregunta: 10730 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  Seg&uacute;n la NTI de requisitos de conexi&oacute;n a la red de comunicaciones de las Administraciones P&uacute;blicas espa&ntilde;olas &iquest;cual de los siguientes no es un tipo de Punto de Presencia (PdP) de la Red SARA?";
 choices[82]= new Array();
 choices[82][0] = "Proveedores de Acceso a la Red SARA (PAS).";
 choices[82][1] = "Centros de Proceso de Datos (CPD) de SARA.";
 choices[82][2] = "Red sTESTA (secure Trans-European Services for Telematics between Administrations).";
 choices[82][3] = "Todos los anteriores son tipos de PdP.";
 answers[82] = choices[82][3];
 units[82] = "43";
 comments[82] = "Id Pregunta: 10730. ";


//  Id pregunta: 10755 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  &iquest;Cu&aacute;l de los siguientes no se incluye en la Estructura Org&aacute;nica definida en la Estrategia de Ciberseguridad Nacional?";
 choices[83]= new Array();
 choices[83][0] = "El Consejo de Seguridad Nacional.";
 choices[83][1] = "El Comit&eacute; Especializado de Ciberseguridad.";
 choices[83][2] = "El Comit&eacute; Especializado de Situaci&oacute;n.";
 choices[83][3] = "El Consejo Ejecutivo de Ciberseguridad.";
 answers[83] = choices[83][3];
 units[83] = "43";
 comments[83] = "Id Pregunta: 10755. ";


//  Id pregunta: 10761 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  &iquest;Qu&eacute; serie CCN-STIC constituye un conjunto de normas desarrolladas para entornos basados en el sistema operativo Windows de Microsoft?";
 choices[84]= new Array();
 choices[84][0] = "500";
 choices[84][1] = "600";
 choices[84][2] = "700";
 choices[84][3] = "400";
 answers[84] = choices[84][0];
 units[84] = "43";
 comments[84] = "Id Pregunta: 10761. ";


//  Id pregunta: 10771 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  &iquest;En qu&eacute; a&ntilde;o se aprueba la Norma T&eacute;cnica de Interoperabilidad de requisitos de conexi&oacute;n a la red de comunicaciones de las Administraciones P&uacute;blicas espa&ntilde;olas?";
 choices[85]= new Array();
 choices[85][0] = "2009";
 choices[85][1] = "2011";
 choices[85][2] = "2013";
 choices[85][3] = "2015";
 answers[85] = choices[85][1];
 units[85] = "43";
 comments[85] = "Id Pregunta: 10771. ";


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


//  Id pregunta: 10784 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  Se&ntilde;ale la opci&oacute;n correcta dentro de la siguiente relaci&oacute;n de infraestructura/servicio com&uacute;n de la Administraci&oacute;n y su definici&oacute;n:";
 choices[87]= new Array();
 choices[87][0] = "ORVE - Soluci&oacute;n integral de registro para organismos p&uacute;blicos, que cubre la gesti&oacute;n tanto de sus oficinas de registro como de las unidades tramitadoras destinatarias de la documentaci&oacute;n.";
 choices[87][1] = "Sistema de informaci&oacute;n REINA - proporciona un Inventario unificado y com&uacute;n a toda la Administraci&oacute;n de las unidades org&aacute;nicas / organismos p&uacute;blicos, sus oficinas asociadas y unidades de gesti&oacute;n econ&oacute;mica - presupuestaria, facilitando el mantenimiento distribuido y corresponsable de la informaci&oacute;n.";
 choices[87][2] = "GEISER - Permite a las diferentes Administraciones P&uacute;blicas consultar y gestionar los apoderamientos otorgados por un ciudadano para sus procedimientos.";
 choices[87][3] = "CIRCABC - Herramienta de trabajo en grupo basada en tecnolog&iacute;as de Internet y en software de fuentes abiertas desarrollada por el Programa ISA de la Comisi&oacute;n de la Comunidad Europea y dirigido a necesidades de las Administraciones P&uacute;blicas, Ciudadanos y Empresas.";
 answers[87] = choices[87][3];
 units[87] = "44";
 comments[87] = "Id Pregunta: 10784. Examen GSI 2014";


//  Id pregunta: 10936 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  Seg&uacute;n lo dispuesto en la Norma T&eacute;cnica de Interoperabilidad de Modelo de Datos para el Intercambio de asientos entre las entidades registrales (SICRES 3.0) es correcto que:";
 choices[88]= new Array();
 choices[88][0] = "El segmento &quot;de internos y control&quot; contiene informaci&oacute;n sobre si el asiento registral incluye documentaci&oacute;n f&iacute;sica requerida para el tr&aacute;mite del procedimiento.";
 choices[88][1] = "El c&oacute;digo de la Entidad Registral de Destino debe incluir un prefijo que identifique al Ministerio (MXX-YYYY), seg&uacute;n se establece en la codificaci&oacute;n de organismos del Directorio Com&uacute;n.";
 choices[88][2] = "El segmento &quot;de anexo&quot; es obligatorio y puede declararse de forma m&uacute;ltiple.";
 choices[88][3] = "En el segmento &quot;de internos y de control&quot; se incluye la firma del documento anexo, como un campo obligatorio.";
 answers[88] = choices[88][0];
 units[88] = "43";
 comments[88] = "Id Pregunta: 10936. TIC A1 AGE 2014";


//  Id pregunta: 10961 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  &iquest;C&uacute;al de las siguientes opciones NO es un plan incluido en la Agenda Digital para Espa&ntilde;a?";
 choices[89]= new Array();
 choices[89][0] = "Contenidos y econom&iacute;a digital.";
 choices[89][1] = "Inclusi&oacute;n digital y empleabilidad.";
 choices[89][2] = "Confianza en el &aacute;mbito digital.";
 choices[89][3] = "Servicios p&uacute;blicos en la nube.";
 answers[89] = choices[89][3];
 units[89] = "30";
 comments[89] = "Id Pregunta: 10961. TIC A1 AGE 2014";


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


//  Id pregunta: 10981 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  De la Red SARA (Sistemas de Aplicaciones y Redes para las Administraciones) podemos afirmar que:";
 choices[92]= new Array();
 choices[92][0] = "Permite acceder a la plataforma de validaci&oacute;n de firma electr&oacute;nica @firma.";
 choices[92][1] = "No admite IPv6. Tampoco admite tr&aacute;fico cifrado.";
 choices[92][2] = "Su implantaci&oacute;n se establece como una recomendaci&oacute;n en el art&iacute;culo 43 de la Ley 11/2007 LAECSP.";
 choices[92][3] = "A&uacute;n se encuentra en fase beta y no se encuentra afectada por el ENS (Esquema Nacional de Seguridad).";
 answers[92] = choices[92][0];
 units[92] = "44";
 comments[92] = "Id Pregunta: 10981. TIC A1 AGE 2014";


//  Id pregunta: 11002 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  De las siguientes opciones, se&ntilde;ale cu&aacute;l es la que incluye extensiones que son todas admitidas de acuerdo con lo establecido en la Norma T&eacute;cnica de Interoperabilidad de Cat&aacute;logo de est&aacute;ndares:";
 choices[93]= new Array();
 choices[93][0] = ".xls, .xlsx, .doc, .docx";
 choices[93][1] = ".rar, .zip, .gz";
 choices[93][2] = ".jpg, .gif, .png, .tiff";
 choices[93][3] = ".mp3, .ogg, .mp4";
 answers[93] = choices[93][3];
 units[93] = "43";
 comments[93] = "Id Pregunta: 11002. TIC A1 AGE 2014";


//  Id pregunta: 11196 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l de las siguientes iniciativas de la Estrategia Europa 2020 hace referencia al objetivo de crecimiento integrador?";
 choices[94]= new Array();
 choices[94][0] = "Agenda de nuevas cualificaciones y empleo";
 choices[94][1] = "Agenda Digital para Europa";
 choices[94][2] = "Todas las anteriores";
 choices[94][3] = "Ninguna de las Anteriores";
 answers[94] = choices[94][0];
 units[94] = "30";
 comments[94] = "Id Pregunta: 11196. ";


//  Id pregunta: 11329 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  En relaci&oacute;n con la plataforma Cl@ve, indique la opci&oacute;n falsa";
 choices[95]= new Array();
 choices[95][0] = "Se desarrolla al hilo de una medida del informe CORA";
 choices[95][1] = "Est&aacute; bajo la titularidad de la DTIC";
 choices[95][2] = "La orden que lo aprueba (MINHAP/1838/2014) se publica seg&uacute;n lo establecido en el art&iacute;culo 11 del RD 1671/2009";
 choices[95][3] = "Plataforma com&uacute;n del sector p&uacute;blico estatal para identificar, autenticar y firmar electr&oacute;nicamente, mediante el uso de claves concertadas";
 answers[95] = choices[95][2];
 units[95] = "43";
 comments[95] = "Id Pregunta: 11329. ";


//  Id pregunta: 11491 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Qu&eacute; norma del CCN hace referencia a la criptograf&iacute;a de empleo en el Esquema Nacional de Seguridad?";
 choices[96]= new Array();
 choices[96][0] = "CCN-STIC-802";
 choices[96][1] = "CCN-STIC-403";
 choices[96][2] = "CCN-STIC-807";
 choices[96][3] = "CCN-STIC-823";
 answers[96] = choices[96][2];
 units[96] = "43";
 comments[96] = "Id Pregunta: 11491. NULL";


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


//  Id pregunta: 11595 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Con respecto a la Comisi&oacute;n de Estrategia TIC, se&ntilde;ale la incorrecta:";
 choices[98]= new Array();
 choices[98][0] = "La Comisi&oacute;n de Estrategia TIC se adscribe al Ministerio de Hacienda y Administraciones P&uacute;blicas a trav&eacute;s de la Secretar&iacute;a de Estado de Administraciones P&uacute;blicas.";
 choices[98][1] = "Una de sus funciones es declarar los medios o servicios compartidos.";
 choices[98][2] = "Las reuniones de su Pleno se celebrar&aacute;n, al menos, cuatro veces al a&ntilde;o por convocatoria de su Presidente, bien a iniciativa propia, bien cuando lo soliciten, al menos, la mitad de sus miembros.";
 choices[98][3] = "Podr&aacute;n constituirse los grupos de trabajo que se requieran para el adecuado desarrollo de sus funciones.";
 answers[98] = choices[98][2];
 units[98] = "43";
 comments[98] = "Id Pregunta: 11595. ";


//  Id pregunta: 11763 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Por qui&eacute;n est&aacute; presidida la Comisi&oacute;n Estrat&eacute;gica TIC?";
 choices[99]= new Array();
 choices[99][0] = "Ministro de Industria, Energ&iacute;a y Turismo";
 choices[99][1] = "Ministro de Fomento";
 choices[99][2] = "Ministro de Econom&iacute;a";
 choices[99][3] = "Ministro de Hacienda";
 answers[99] = choices[99][3];
 units[99] = "43";
 comments[99] = "Id Pregunta: 11763. ";


