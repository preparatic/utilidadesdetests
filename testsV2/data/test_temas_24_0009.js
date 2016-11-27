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

//  Id pregunta: 53 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cuando entr&oacute; en vigor la LOPD?:";
 choices[0]= new Array();
 choices[0][0] = "Diciembre de 1999";
 choices[0][1] = "Enero de 2000";
 choices[0][2] = "Febrero de 1993";
 choices[0][3] = "Enero de 1999";
 answers[0] = choices[0][1];
 units[0] = "29";
 comments[0] = "Id Pregunta: 53. ";


//  Id pregunta: 114 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  De acuerdo con la Ley de Protecci&oacute;n de Datos, mantener los ficheros, locales, programas o equipos que contengan datos de car&aacute;cter personal sin las debidas condiciones de seguridad que por v&iacute;a reglamentaria se determinen, es una infracci&oacute;n:";
 choices[1]= new Array();
 choices[1][0] = "Leve ";
 choices[1][1] = "Grave";
 choices[1][2] = "Muy grave ";
 choices[1][3] = "No es infracci&oacute;n";
 answers[1] = choices[1][1];
 units[1] = "29";
 comments[1] = "Id Pregunta: 114. ";


//  Id pregunta: 141 AÃ±o de creación de pregunta: 2009-01-01
 questions[2]= "3)  El Director de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos:";
 choices[2]= new Array();
 choices[2][0] = "Es nombrado por las Cortes Generales";
 choices[2][1] = "No puede ser cesado antes de la finalizaci&oacute;n de su mandato";
 choices[2][2] = "Ostenta el rango de Subsecretario";
 choices[2][3] = "Tiene una mandato de 6 a&ntilde;os";
 answers[2] = choices[2][2];
 units[2] = "29";
 comments[2] = "Id Pregunta: 141. ";


//  Id pregunta: 160 AÃ±o de creación de pregunta: 2009-01-01
 questions[3]= "4)  El Registro General de Protecci&oacute;n de Datos:";
 choices[3]= new Array();
 choices[3][0] = "Inscribe de oficio las autorizaciones de transferencias internacionales de datos";
 choices[3][1] = "Da libre acceso a los ficheros de datos personales";
 choices[3][2] = "Inscribe &uacute;nicamente los ficheros automatizados de las AAPP";
 choices[3][3] = "Es el &Oacute;rgano ante el que se ejerce el derecho de informaci&oacute;n, acceso, rectificaci&oacute;n y cancelaci&oacute;n";
 answers[3] = choices[3][0];
 units[3] = "29";
 comments[3] = "Id Pregunta: 160. ";


//  Id pregunta: 338 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  La rectificaci&oacute;n o cancelaci&oacute;n de datos de car&aacute;cter personal se har&aacute; efectiva por el responsable del fichero en un periodo de tiempo siguiente al de recepci&oacute;n de la solicitud. Dicho periodo es de:";
 choices[4]= new Array();
 choices[4][0] = "5 d&iacute;as";
 choices[4][1] = "10 d&iacute;as";
 choices[4][2] = "15 d&iacute;as";
 choices[4][3] = "1 mes";
 answers[4] = choices[4][1];
 units[4] = "29";
 comments[4] = "Id Pregunta: 338. ";


//  Id pregunta: 366 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  Los datos de car&aacute;cter personal que hagan referencia al origen racial, a la salud y a la vida sexual s&oacute;lo podr&aacute;n ser recabados, tratados y cedidos cuando:";
 choices[5]= new Array();
 choices[5][0] = "Cuando lo disponga una Ley";
 choices[5][1] = "Si el afectado consiente expresamente.";
 choices[5][2] = "En los supuestos 'a' o 'b' o por razones de inter&eacute;s general.";
 choices[5][3] = "Nunca";
 answers[5] = choices[5][2];
 units[5] = "29";
 comments[5] = "Id Pregunta: 366. NULL";


//  Id pregunta: 400 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Referente a la Agencia de Protecci&oacute;n de Datos, no es falso que:";
 choices[6]= new Array();
 choices[6][0] = "El Gobierno pueda cesar discrecionalmente a su Director";
 choices[6][1] = "El Director sea nombrado por su Consejo Consultivo";
 choices[6][2] = "Pueda imponer sanciones civiles o penales";
 choices[6][3] = "Se caracteriza por su independencia respecto de la Administraci&oacute;n";
 answers[6] = choices[6][3];
 units[6] = "29";
 comments[6] = "Id Pregunta: 400. ";


//  Id pregunta: 412 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  Respecto al movimiento internacional de datos, la Ley Org&aacute;nica 15/99 de Protecci&oacute;n de Datos de Car&aacute;cter Personal establece:";
 choices[7]= new Array();
 choices[7][0] = "No podr&aacute;n realizarse transferencias de datos personales a pa&iacute;ses que no presenten un nivel de protecci&oacute;n equiparable al espa&ntilde;ol";
 choices[7][1] = "Dicha transferencia podr&aacute; realizarse si el destino es un Estado miembro de la Uni&oacute;n Europea";
 choices[7][2] = "S&oacute;lo podr&aacute; realizarse si el destino es un Estado miembro de la Uni&oacute;n Europea, respecto del cual la Comisi&oacute;n Europea  haya declarado que garantiza un nivel de protecci&oacute;n adecuado";
 choices[7][3] = "S&oacute;lo podr&aacute;n realizarse transferencias de datos cuando el Director de la Agencia de Protecci&oacute;n de Datos lo autorice";
 answers[7] = choices[7][1];
 units[7] = "29";
 comments[7] = "Id Pregunta: 412. ";


//  Id pregunta: 413 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Respecto de la Agencia de Protecci&oacute;n de Datos, es falso que:";
 choices[8]= new Array();
 choices[8][0] = "Su consejo consultivo haya contado inicialmente con 9 miembros";
 choices[8][1] = "Que los inspectores de datos tengan la consideraci&oacute;n de autoridad p&uacute;blica en el desempe&ntilde;o de sus funciones";
 choices[8][2] = "Que los c&oacute;digos tipo deban ser inscritos en el Registro General de Protecci&oacute;n de Datos";
 choices[8][3] = "Que sea necesaria la autorizaci&oacute;n del Director de la Agencia para toda transferencia internacional de datos de car&aacute;cter personal mediante tratamientos automatizados";
 answers[8] = choices[8][3];
 units[8] = "29";
 comments[8] = "Id Pregunta: 413. ";


//  Id pregunta: 445 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  Seg&uacute;n la Ley Org&aacute;nica 15/99 de Protecci&oacute;n de Datos de Car&aacute;cter Personal:";
 choices[9]= new Array();
 choices[9][0] = "Las copias en formato electr&oacute;nico de las fuentes de acceso p&uacute;blico que se obtengan telem&aacute;ticamente, tendr&aacute;n validez indefinida";
 choices[9][1] = "En las fuentes accesibles al p&uacute;blico editadas en forma de libro o alg&uacute;n otro soporte f&iacute;sico, tal condici&oacute;n se perder&aacute; cuando se publique en formato electr&oacute;nico";
 choices[9][2] = "La ley 15/99 no regula las fuentes de acceso p&uacute;blico";
 choices[9][3] = "Los datos que figuren en las gu&iacute;as de servicios de telecomunicaciones disponibles al p&uacute;blico se regir&aacute;n por su normativa espec&iacute;fica";
 answers[9] = choices[9][3];
 units[9] = "29";
 comments[9] = "Id Pregunta: 445. ";


//  Id pregunta: 497 AÃ±o de creación de pregunta: 2003-01-01
 questions[10]= "11)  De acuerdo con la Ley Org&aacute;nica de Protecci&oacute;n de Datos, Ley 15/1999 del 13 de Diciembre, para ejercer los derechos de rectificaci&oacute;n y/o cancelaci&oacute;n se necesita:";
 choices[10]= new Array();
 choices[10][0] = "Nada, se ejercen gratuitamente";
 choices[10][1] = "Pagar solo los gastos ocasionados por la rectificaci&oacute;n";
 choices[10][2] = "Se necesita un notario";
 choices[10][3] = "Ninguna de las respuestas anteriores es cierta";
 answers[10] = choices[10][0];
 units[10] = "29";
 comments[10] = "Id Pregunta: 497. ";


//  Id pregunta: 511 AÃ±o de creación de pregunta: 2003-01-01
 questions[11]= "12)  No se except&uacute;an los derechos de informaci&oacute;n previa, de modo expreso, preciso e inequ&iacute;voco:";
 choices[11]= new Array();
 choices[11][0] = "Cuando afecte a la defensa nacional";
 choices[11][1] = "A  la seguridad p&uacute;blica";
 choices[11][2] = "A la persecuci&oacute;n de infracciones penales o administrativas";
 choices[11][3] = "Cuando no impida o dificulte gravemente el cumplimiento de las funciones de control y verificaci&oacute;n de las Administraciones P&uacute;blicas";
 answers[11] = choices[11][3];
 units[11] = "29";
 comments[11] = "Id Pregunta: 511. ";


//  Id pregunta: 553 AÃ±o de creación de pregunta: 2004-01-01
 questions[12]= "13)  Indique la respuesta falsa respecto a la protecci&oacute;n jur&iacute;dica de los programas de ordenador";
 choices[12]= new Array();
 choices[12][0] = "Los programas de ordenador est&aacute;n protegidos por la Ley de Propiedad Intelectual, que los incluye dentro de la categor&iacute;a de obras literarias.";
 choices[12][1] = "El RDL 1/1996 por el que se aprueba el Texto Refundido de la Ley de Propiedad Intelectual dedica el T&iacute;tulo VII de su Libro I a la protecci&oacute;n de los programas de ordenador.";
 choices[12][2] = "Los derechos sobre los programas de ordenador, as&iacute; como sobre sus sucesivas versiones y los programas derivados, deber&aacute;n ser objeto de inscripci&oacute;n en el Registro de la Propiedad Intelectual.";
 choices[12][3] = "No estar&aacute;n protegidos mediante los derechos de autor las ideas y principios en los que se basan cualquiera de los elementos de un programa de ordenador, incluidos los que sirven de fundamento a sus interfaces.";
 answers[12] = choices[12][2];
 units[12] = "36";
 comments[12] = "Id Pregunta: 553. ";


//  Id pregunta: 668 AÃ±o de creación de pregunta: 2006-01-01
 questions[13]= "14)  En un fichero que contenga datos de car&aacute;cter personal con medidas de seguridad de nivel alto, &iquest;cu&aacute;l de las siguientes afirmaciones relativas al acceso a datos es incorrecta?";
 choices[13]= new Array();
 choices[13][0] = "De cada acceso se guardar&aacute;n, como m&iacute;nimo, la identificaci&oacute;n del usuario, la fecha y hora en que se realiz&oacute;, el fichero accedido, el tipo de acceso y el objeto del mismo y si ha sido autorizado o denegado";
 choices[13][1] = "El per&iacute;odo m&iacute;nimo de conservaci&oacute;n de los datos de acceso registrados ser&aacute; de dos a&ntilde;os";
 choices[13][2] = "En el caso de que el acceso a un fichero haya sido autorizado, ser&aacute; preciso guardar la informaci&oacute;n que permita identificar el registro accedido";
 choices[13][3] = "El responsable de seguridad competente se encargar&aacute; de revisar peri&oacute;dicamente la informaci&oacute;n de control registrada y elaborar&aacute; un informe de las revisiones realizadas y los problemas detectados al menos una vez al mes";
 answers[13] = choices[13][0];
 units[13] = "29";
 comments[13] = "Id Pregunta: 668. ";


//  Id pregunta: 692 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  Del &aacute;mbito de la Ley 34/2002 de servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico quedan excluidos los servicios prestados por:";
 choices[14]= new Array();
 choices[14][0] = "Los notarios y registradores de la propiedad en el ejercicio de sus respectivas funciones privadas";
 choices[14][1] = "Los abogados y procuradores en el ejercicio de sus funciones de representaci&oacute;n y juicio";
 choices[14][2] = "Los notarios y registradores de la propiedad y mercantiles en el ejercicio de sus respectivas funciones privadas";
 choices[14][3] = "Funcionarios del Estado";
 answers[14] = choices[14][1];
 units[14] = "30";
 comments[14] = "Id Pregunta: 692. Ley 34/2002, art&iacute;culo 5";


//  Id pregunta: 701 AÃ±o de creación de pregunta: 2004-01-01
 questions[15]= "16)  Seg&uacute;n la Ley 59/2003 de Firma electr&oacute;nica, la firma equivalente a la manuscrita es:";
 choices[15]= new Array();
 choices[15][0] = "Firma electr&oacute;nica avanzada";
 choices[15][1] = "Firma electr&oacute;nica reconocida";
 choices[15][2] = "Firma electr&oacute;nica avanzada s&oacute;lo si ha sido generada mediante un dispositivo seguro de creaci&oacute;n de firma.";
 choices[15][3] = "Ninguna de las anteriores";
 answers[15] = choices[15][1];
 units[15] = "30";
 comments[15] = "Id Pregunta: 701. Similar a examen TIC MAP A 2004. (Ley 59/2003, art&Iacute;culo 3)";


//  Id pregunta: 818 AÃ±o de creación de pregunta: 2009-01-01
 questions[16]= "17)  Seg&uacute;n la Ley 34/2002,  las Administraciones P&uacute;blicas adoptar&aacute;n las medidas necesarias para que las informaci&oacute;n disponible en sus p&aacute;ginas de Internet puedan ser accesibles para discapacitados. Esto est&aacute; de acuerdo con:";
 choices[16]= new Array();
 choices[16][0] = "A partir del 31 de diciembre de 2008, las p&aacute;ginas de Internet de las Administraciones P&uacute;blicas satisfar&aacute;n, como m&iacute;nimo, el nivel medio de los criterios de accesibilidad al contenido generalmente reconocidos. Excepcionalmente, esta obligaci&oacute;n no ser&aacute; aplicable cuando una funcionalidad o servicio no disponga de una soluci&oacute;n tecnol&oacute;gica que permita su accesibilidad.";
 choices[16][1] = "El nivel medio de los criterios de accesibilidad al contenido generalmente reconocidos, antes del 31 de diciembre de 2005";
 choices[16][2] = "Los criterios WAI antes del 31 de diciembre de 2008";
 choices[16][3] = "Los criterios WAI antes del 31 de diciembre de 2005";
 answers[16] = choices[16][0];
 units[16] = "30";
 comments[16] = "Id Pregunta: 818. Ley 34/2002, disposici&oacute;n adicional quinta, modificado por Ley 56/2007, art&iacute;culo 4";


//  Id pregunta: 1880 AÃ±o de creación de pregunta: 2006-01-01
 questions[17]= "18)  La imposici&oacute;n de sanciones por incumplimiento de lo previsto en la Ley 34/2002 (LSSICE) corresponder&aacute; a:";
 choices[17]= new Array();
 choices[17][0] = "En el caso de infracciones muy graves, al Ministro de Industria, Energ&iacute;a y Turismo, y en el de infracciones graves y leves, al Secretario de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n.";
 choices[17][1] = "En el caso de infracciones muy graves, al Ministerio de Industria, Turismo y Comercio y en el caso de infracciones graves y leves, al &oacute;rgano que dict&oacute; la resoluci&oacute;n incumplida";
 choices[17][2] = "En todos los casos, al Ministerio de Industria, Turismo y Comercio";
 choices[17][3] = "La Agencia de Protecci&oacute;n de Datos";
 answers[17] = choices[17][0];
 units[17] = "30";
 comments[17] = "Id Pregunta: 1880. Ley 34/2002, art&iacute;culo 43 (extinto Ministerio de Ciencia y Tecnolog&iacute;a)";


//  Id pregunta: 4251 AÃ±o de creación de pregunta: 2007-01-01
 questions[18]= "19)  Respecto a la iniciativa i2010 de la Comisi&oacute;n Europea:";
 choices[18]= new Array();
 choices[18][0] = "La iniciativa nace en el a&ntilde;o 2005, como respuesta a la revisi&oacute;n de la estrategia de Lisboa para el crecimiento y el empleo.";
 choices[18][1] = "Una de las tres prioridades que se plantea es &ldquo;el refuerzo de la innovaci&oacute;n y la inversi&oacute;n en la investigaci&oacute;n sobre las TIC con el fin de fomentar el crecimiento y la creaci&oacute;n de m&aacute;s empleos y de m&aacute;s de calidad&rdquo;";
 choices[18][2] = "La tercera prioridad de la Comisi&oacute;n consiste en &ldquo;el logro de una sociedad europea de la informaci&oacute;n basada en la inclusi&oacute;n que fomenta el crecimiento y el empleo de una manera coherente con el desarrollo sostenible y que da la prioridad a la mejora de los servicios p&uacute;blicos y de la calidad de vida&rdquo;.";
 choices[18][3] = "Todas las anteriores son ciertas";
 answers[18] = choices[18][3];
 units[18] = "30";
 comments[18] = "Id Pregunta: 4251. Esta pregunta es antigua, pero nunca se sabe. M&aacute;s informaci&oacute;n en: http://europa.eu/legislation_summaries/information_society/strategies/c11328_es.htm";


//  Id pregunta: 4255 AÃ±o de creación de pregunta: 2007-01-01
 questions[19]= "20)  Cu&aacute;l de los siguientes planes de fomento de la Sociedad de la Informaci&oacute;n ha sido lanzado por el Ministerio de Industria Turismo y Comercio espa&ntilde;ol:";
 choices[19]= new Array();
 choices[19][0] = "El plan Avanza ";
 choices[19][1] = "La estrategia i2010";
 choices[19][2] = "El plan Conecta ";
 choices[19][3] = "El plan eEurope 2005";
 answers[19] = choices[19][0];
 units[19] = "30";
 comments[19] = "Id Pregunta: 4255. El plan Conecta fue lanzado por el antiguo MAP y los otros son europeos";


//  Id pregunta: 4424 AÃ±o de creación de pregunta: 2007-01-01
 questions[20]= "21)  Indique la respuesta correcta en relaci&oacute;n con el Real Decreto 209/2003, de 21 de febrero, por el que se regula los registros y las notificaciones telem&aacute;ticas, as&iacute; como la utilizaci&oacute;n de medios telem&aacute;ticos para la sustituci&oacute;n de la aportaci&oacute;n de certificados por los ciudadanos:";
 choices[20]= new Array();
 choices[20][0] = "Los registros telem&aacute;ticos realizar&aacute;n y anotar&aacute;n salidas de escritos y comunicaciones durante las 24 horas de todos los d&iacute;as del a&ntilde;o.";
 choices[20][1] = "La presentaci&oacute;n obligatoria de solicitudes por medios telem&aacute;ticos requiere que as&iacute; lo disponga el Gobierno mediante Real Decreto.";
 choices[20][2] = "La creaci&oacute;n de registros telem&aacute;ticos se efect&uacute;a mediante orden ministerial, que deber&aacute; ser publicada, en todo caso, en el BOE.";
 choices[20][3] = "Los registros telem&aacute;ticos pueden realizar funciones de expedici&oacute;n de copias selladas o compulsadas de los documentos que se tramiten junto con la solicitud.";
 answers[20] = choices[20][2];
 units[20] = "30";
 comments[20] = "Id Pregunta: 4424. ";


//  Id pregunta: 4468 AÃ±o de creación de pregunta: 2007-01-01
 questions[21]= "22)  Los prestadores de servicios de certificaci&oacute;n con car&aacute;cter previo al cese definitivo de su actividad, &iquest;que gesti&oacute;n deber&aacute;n realizar con la informaci&oacute;n relativa a los certificados electr&oacute;nicos cuya vigencia haya sido extinguida?";
 choices[21]= new Array();
 choices[21][0] = "Remitirla al ministerio competente.";
 choices[21][1] = "Remitirla al prestador al que se propone la gesti&oacute;n de los certificados vigentes.";
 choices[21][2] = "Ninguna. La ley solo obliga la transferencia de la informaci&oacute;n relativa a los certificados vigentes.";
 choices[21][3] = "Debe conservarla en soporte perdurable durante al menos 30 anos.";
 answers[21] = choices[21][0];
 units[21] = "30";
 comments[21] = "Id Pregunta: 4468. Ley 59/2003, art&iacute;culo 21";


//  Id pregunta: 4563 AÃ±o de creación de pregunta: 2007-01-01
 questions[22]= "23)  Las funciones de mediaci&oacute;n y arbitraje atribuidas por la Ley de Propiedad Intelectual son ejercidas por";
 choices[22]= new Array();
 choices[22][0] = "el Comit&eacute; Mediador y Arbitral de Ia Propiedad intelectual";
 choices[22][1] = "el Comit&eacute; Nacional de la Propiedad Intelectual";
 choices[22][2] = "la Comisi&oacute;n Nacional Mediadora y Arbitral de la Propiedad Intelectual";
 choices[22][3] = "Ia Comisi&oacute;n Mediadora y Arbitral de Ia Propiedad Intelectual";
 answers[22] = choices[22][3];
 units[22] = "36";
 comments[22] = "Id Pregunta: 4563. ";


//  Id pregunta: 4670 AÃ±o de creación de pregunta: 2007-01-01
 questions[23]= "24)  Los ficheros automatizados con datos de car&aacute;cter personal de nivel alto deber&aacute;n contener:";
 choices[23]= new Array();
 choices[23][0] = "Medidas de seguridad de nivel alto";
 choices[23][1] = "Medidas de seguridad de nivel alto y medio";
 choices[23][2] = "Medidas de seguridad de nivel b&aacute;sico, medio y alto";
 choices[23][3] = "Ninguna de las anteriores es correcta";
 answers[23] = choices[23][2];
 units[23] = "29";
 comments[23] = "Id Pregunta: 4670. Examen 2006 JCYL";


//  Id pregunta: 4698 AÃ±o de creación de pregunta: 2007-01-01
 questions[24]= "25)  Una de las primeras personas en desarrollar un concepto de la sociedad de la informaci&oacute;n fue eleconomista";
 choices[24]= new Array();
 choices[24][0] = "Fritz Machlup";
 choices[24][1] = "Charles Babbage";
 choices[24][2] = "Herman Hollerith";
 choices[24][3] = "Howard Aiken";
 answers[24] = choices[24][0];
 units[24] = "30";
 comments[24] = "Id Pregunta: 4698. Examen 2006 JCYL";


//  Id pregunta: 4781 AÃ±o de creación de pregunta: 2007-01-01
 questions[25]= "26)  Como parte de la legislaci&oacute;n y normativa espa&ntilde;ola para el impulso de la administraci&oacute;n electr&oacute;nica se incluye:";
 choices[25]= new Array();
 choices[25][0] = "El Real Decreto 522/2006 de Supresi&oacute;n de Fotocopias de DNI";
 choices[25][1] = "El Real Decreto 523/2006 de Supresi&oacute;n de Certificados de empadronamiento";
 choices[25][2] = "El Real Decreto 1553/2005 que regula el DNI electr&oacute;nico";
 choices[25][3] = "Todas las anteriores son ciertas";
 answers[25] = choices[25][3];
 units[25] = "30";
 comments[25] = "Id Pregunta: 4781. NULL";


//  Id pregunta: 4798 AÃ±o de creación de pregunta: 2009-01-01
 questions[26]= "27)  Seg&uacute;n el RD 1720/2007, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal, &iquest;c&oacute;mo se define al &quot;Responsable del fichero o tratamiento&quot;?";
 choices[26]= new Array();
 choices[26][0] = "Persona f&iacute;sica o jur&iacute;dica, de naturaleza p&uacute;blica o privada, u &oacute;rgano administrativo, que s&oacute;lo o conjuntamente con otros decida sobre la finalidad, contenido y uso del tratamiento, aunque no lo realizase materialmente. Podr&aacute;n ser tambi&eacute;n responsables del fichero o del tratamiento los entes sin personalidad jur&iacute;dica que act&uacute;en en el tr&aacute;fico como sujetos diferenciados";
 choices[26][1] = "Persona f&iacute;sica o jur&iacute;dica, de naturaleza p&uacute;blica o privada, u &oacute;rgano administrativo, que s&oacute;lo o conjuntamente con otros decida sobre la finalidad, contenido y uso del tratamiento, aunque no lo realizase materialmente. No podr&aacute;n ser responsables del fichero o del tratamiento los entes sin personalidad jur&iacute;dica que act&uacute;en en el tr&aacute;fico como sujetos diferenciados";
 choices[26][2] = "Persona jur&iacute;dica, de naturaleza p&uacute;blica o privada, u &oacute;rgano administrativo, que s&oacute;lo o conjuntamente con otros decida sobre la finalidad, contenido y uso del tratamiento, aunque no lo realizase materialmente. Podr&aacute;n ser tambi&eacute;n responsables del fichero o del tratamiento los entes sin personalidad jur&iacute;dica que act&uacute;en en el tr&aacute;fico como sujetos diferenciados";
 choices[26][3] = "Persona f&iacute;sica, de naturaleza p&uacute;blica o privada, u &oacute;rgano administrativo, que s&oacute;lo o conjuntamente con otros decida sobre la finalidad, contenido y uso del tratamiento, aunque no lo realizase materialmente. Podr&aacute;n ser responsables del fichero o del tratamiento los entes sin personalidad jur&iacute;dica que act&uacute;en en el tr&aacute;fico como sujetos diferenciados";
 answers[26] = choices[26][0];
 units[26] = "29";
 comments[26] = "Id Pregunta: 4798. ";


//  Id pregunta: 4996 AÃ±o de creación de pregunta: 2003-01-01
 questions[27]= "28)  El Consejo Superior de Administraci&oacute;n Electr&oacute;nica es un &oacute;rgano colegiado adscrito al Ministerio de:";
 choices[27]= new Array();
 choices[27][0] = "Industria, Energ&iacute;a y Turismo";
 choices[27][1] = "Asuntos Exteriores";
 choices[27][2] = "Hacienda y Administraciones P&uacute;blicas";
 choices[27][3] = "Interior";
 answers[27] = choices[27][2];
 units[27] = "30";
 comments[27] = "Id Pregunta: 4996. Examen TIC A 2007";


//  Id pregunta: 5053 AÃ±o de creación de pregunta: 2003-01-01
 questions[28]= "29)  Se&ntilde;ale de la siguiente relaci&oacute;n el miembro que NO forma parte del Consejo Consultivo de la Agencia Espa&ntilde;ola deProtecci&oacute;n de Datos";
 choices[28]= new Array();
 choices[28][0] = "Un experto en la materia";
 choices[28][1] = "Un miembro de la Real Academia de la Historia";
 choices[28][2] = "Un representante de la Asociaci&oacute;n de Ingenieros T&eacute;cnicos en Inform&aacute;tica";
 choices[28][3] = "Un representante de la Administraci&oacute;n Local";
 answers[28] = choices[28][2];
 units[28] = "29";
 comments[28] = "Id Pregunta: 5053. Examen TIC A 2007";


//  Id pregunta: 5096 AÃ±o de creación de pregunta: 2003-01-01
 questions[29]= "30)  Seg&uacute;n la Directiva comunitaria 1999/93/CE de firma electr&oacute;nica, los servicios de certificaci&oacute;n pueden ser prestados:";
 choices[29]= new Array();
 choices[29][0] = "Solamente por personas f&iacute;sicas o jur&iacute;dicas privadas ";
 choices[29][1] = "Tanto por entidades p&uacute;blicas como por personas f&iacute;sicas o jur&iacute;dicas cuando as&iacute; se establezca de acuerdo con el Derecho nacional";
 choices[29][2] = "Solamente por entidades p&uacute;blicas";
 choices[29][3] = "Por entidades p&uacute;blicas, que expedir&aacute;n los certificados reconocidos, y por personas f&iacute;sicas, que expediran los certificados no reconocidos";
 answers[29] = choices[29][1];
 units[29] = "30";
 comments[29] = "Id Pregunta: 5096. NULL";


//  Id pregunta: 5097 AÃ±o de creación de pregunta: 2003-01-01
 questions[30]= "31)  Seg&uacute;n la Directiva comunitaria 1999/93/CE de firma electr&oacute;nica, NO es un requisito de los proveedores de servicios de certificaci&oacute;n que expiden certificados reconocidos:";
 choices[30]= new Array();
 choices[30][0] = "Comprobar debidamente, de conformidad con el Derecho nacional, la identidad y, si procede, cualesquiera atributos espec&iacute;ficos de la persona a la que se expide un certificado reconocido";
 choices[30][1] = "Utilizar sistemas y productos fiables que est&eacute;n protegidos contra toda alteraci&oacute;n y que garanticen la seguridad t&eacute;cnica y criptogr&aacute;fica de los procedimientos con que trabajan";
 choices[30][2] = "Almacenar o copiar los datos de creaci&oacute;n de firma de la persona a la que el proveedor de servicios de certificaci&oacute;n ha prestado servicios de gesti&oacute;n de claves";
 choices[30][3] = "Disponer de recursos econ&oacute;micos suficientes para operar de conformidad con lo dispuesto en la presente Directiva, en particular para afrontar el riesgo de responsabilidad por da&ntilde;os y perjuicios, por ejemplo contratando un seguro apropiado";
 answers[30] = choices[30][2];
 units[30] = "30";
 comments[30] = "Id Pregunta: 5097. ";


//  Id pregunta: 5098 AÃ±o de creación de pregunta: 2003-01-01
 questions[31]= "32)  Una multa de 60.000 euros podr&iacute;a corresponder, seg&uacute;n la ley de firma electr&oacute;nica, a la comisi&oacute;n de una infracci&oacute;n:";
 choices[31]= new Array();
 choices[31][0] = "Muy grave";
 choices[31][1] = "Grave";
 choices[31][2] = "Leve ";
 choices[31][3] = "No est&aacute; tipificado tal importe";
 answers[31] = choices[31][1];
 units[31] = "30";
 comments[31] = "Id Pregunta: 5098. Ley 59/2003, art&iacute;culo 32";


//  Id pregunta: 5264 AÃ±o de creación de pregunta: 2003-01-01
 questions[32]= "33)  En la LAECSP se hace referencia a una serie de aspectos a reconsiderar a la hora de aplicar medios electr&oacute;nicos en la gesti&oacute;n de procedimientos. Entre dichos aspectos figura:";
 choices[32]= new Array();
 choices[32][0] = "Obligar al uso del DNIe a los ciudadanos";
 choices[32][1] = "Supresi&oacute;n o reducci&oacute;n de la documentaci&oacute;n requerida a los ciudadanos";
 choices[32][2] = "Integrar en los mismos el uso del correo electr&oacute;nico";
 choices[32][3] = "Ninguno de los anteriores";
 answers[32] = choices[32][1];
 units[32] = "43";
 comments[32] = "Id Pregunta: 5264. Art&iacute;culo 34 Ley 1172007";


//  Id pregunta: 5269 AÃ±o de creación de pregunta: 2003-01-01
 questions[33]= "34)  La identificaci&oacute;n inequ&iacute;voca y personalizada de todos aquellos que tienen acceso a un fichero de datos de car&aacute;cter personal es calificada en el RD 1720/2007 como una medida de seguridad de nivel de car&aacute;cter";
 choices[33]= new Array();
 choices[33][0] = "basico";
 choices[33][1] = "medio";
 choices[33][2] = "alto";
 choices[33][3] = "Ninguna de las anteriores";
 answers[33] = choices[33][0];
 units[33] = "29";
 comments[33] = "Id Pregunta: 5269. ";


//  Id pregunta: 5533 AÃ±o de creación de pregunta: 2003-01-01
 questions[34]= "35)  El Programa IDABC para el periodo 2005 a 2009, &iquest;en qu&eacute; norma europea se basa?";
 choices[34]= new Array();
 choices[34][0] = "Decisi&oacute;n 2004/387/CE";
 choices[34][1] = "Decisi&oacute;n 1719/1999/CE";
 choices[34][2] = "Decisi&oacute;n 1720/1999/CE";
 choices[34][3] = "Directiva 2004/387/CE";
 answers[34] = choices[34][0];
 units[34] = "30";
 comments[34] = "Id Pregunta: 5533. ";


//  Id pregunta: 5534 AÃ±o de creación de pregunta: 2003-01-01
 questions[35]= "36)  &iquest;Cu&aacute;l de las siguientes no es una de las tres prioridades de i2010 (marco estrat&eacute;gico de la Comisi&oacute;n Europea para la sociedad de la informaci&oacute;n y los medios de comunicaci&oacute;n)? ";
 choices[35]= new Array();
 choices[35][0] = "Conseguir un espacio europeo &uacute;nico de la informaci&oacute;n, fomentando un mercado interior abierto y competitivo para la sociedad de la informaci&oacute;n y los medios de comunicaci&oacute;n";
 choices[35][1] = "El refuerzo de la innovaci&oacute;n y de la inversi&oacute;n en el campo de la investigaci&oacute;n en las TIC";
 choices[35][2] = "Mejorar la prestaci&oacute;n de sevicios intraeuropeos mediante la utilizaci&oacute;n masiva de las TIC";
 choices[35][3] = "Una sociedad europea de la informaci&oacute;n basada en la inclusi&oacute;n que concede prioridad a la mejora de los servicios p&uacute;blicos y de la calidad de vida";
 answers[35] = choices[35][2];
 units[35] = "30";
 comments[35] = "Id Pregunta: 5534. ";


//  Id pregunta: 5535 AÃ±o de creación de pregunta: 2003-01-01
 questions[36]= "37)  Indique la respuesta falsa";
 choices[36]= new Array();
 choices[36][0] = "El portal Your Europe tiene que como objetivo informar a los pa&iacute;ses que no son de la UE sobre las posibilidades de adhesi&oacute;n a la UE";
 choices[36][1] = "PLOTEUS es el portal europeo de oportunidades de formaci&oacute;n";
 choices[36][2] = "TESTA es una red que interconecta las distintas redes administrativas de los estados miembros";
 choices[36][3] = "EURES es un servicio paneuropeo que pretende facilitar el libre movimiento de trabajadores en el Espacio Econ&oacute;mico Europeo";
 answers[36] = choices[36][0];
 units[36] = "30";
 comments[36] = "Id Pregunta: 5535. ";


//  Id pregunta: 5548 AÃ±o de creación de pregunta: 2003-01-01
 questions[37]= "38)  Respecto a las Transmisiones de datos entre Administraciones P&uacute;blicas, se&ntilde;ale la verdadera:";
 choices[37]= new Array();
 choices[37][0] = "Cada Administraci&oacute;n deber&aacute; facilitar, en todo caso, el acceso de las restantes Administraciones a los datos relativos a los interesados, que obren en su poder. ";
 choices[37][1] = "Se facilitar&aacute; dicho acceso &uacute;nicamente cuando una norma con rango de Ley as&iacute; lo determine.";
 choices[37][2] = "Se facilitar&aacute; dicho acceso para los datos en soporte electr&oacute;nico precisando de consentimiento del interesado, que podr&aacute; recabarse de forma electr&oacute;nica, en caso de tratarse de datos de caracter personal.";
 choices[37][3] = "Cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones a los datos relativos a los interesados que obren en su poder &uacute;nicamente si el interesado da su consentimiento.";
 answers[37] = choices[37][2];
 units[37] = "43";
 comments[37] = "Id Pregunta: 5548. NULL";


//  Id pregunta: 5557 AÃ±o de creación de pregunta: 2003-01-01
 questions[38]= "39)  La Ley de Medidas de Impulso de la Sociedad de la Informaci&oacute;n NO flexibiliza:";
 choices[38]= new Array();
 choices[38][0] = "Las obligaciones referidas a las comunicaciones comerciales y a la contrataci&oacute;n electr&oacute;nica.";
 choices[38][1] = "La obligaci&oacute;n de informar a los clientes, sobre medidas de seguridad aplicadas a los servicios prestados y la funci&oacute;n de informar sobre responsabilidades por el uso de Internet con fines il&iacute;citos. ";
 choices[38][2] = "Las obligaciones referidas  a la constancia registral de los nombre de dominio de empresas prestadoras de servicios de la sociedad de la informaci&oacute;n.";
 choices[38][3] = "La obligaci&oacute;n de los PSC de comprobar los datos inscritos en registros p&uacute;blicos.";
 answers[38] = choices[38][1];
 units[38] = "30";
 comments[38] = "Id Pregunta: 5557. ";


//  Id pregunta: 5663 AÃ±o de creación de pregunta: 2009-01-01
 questions[39]= "40)  Seg&uacute;n el RD 1720/2007, los derechos de acceso, rectificaci&oacute;n, cancelaci&oacute;n y oposici&oacute;n:";
 choices[39]= new Array();
 choices[39][0] = "son derechos independientes, de tal forma que no puede entenderse que el ejercicio de ninguno de ellos sea requisito previo para el ejercicio de otro";
 choices[39][1] = "son derechos dependientes, por lo que debe entenderse la necesidad de establecer un orden entre estos para su ejercicio";
 choices[39][2] = "son derechos dependientes, por lo que deben ejercerse es el oreden citado (acceso, rectificaci&oacute;n, cancelaci&oacute;n y oposici&oacute;n)";
 choices[39][3] = "El RD 1720/2007 no trata de estos derechos";
 answers[39] = choices[39][0];
 units[39] = "29";
 comments[39] = "Id Pregunta: 5663. ";


//  Id pregunta: 5798 AÃ±o de creación de pregunta: 2009-01-01
 questions[40]= "41)  Indique cuales son las funciones fundamentales del Comit&eacute; Sectorial de Administraci&oacute;n electr&oacute;nica.";
 choices[40]= new Array();
 choices[40][0] = "Asegurar la compatibilidad e interoperabilidad de los sistemas y aplicaciones usados por las Administraciones P&uacute;blicas. Preparar planes de acci&oacute;n conjuntos y programas, para fomentar el desarrollo de la administraci&oacute;n electr&oacute;nica en Espa&ntilde;a.";
 choices[40][1] = "Desarrollar servicios centrados en los ciudadanos";
 choices[40][2] = "La reutilizaci&oacute;n de los desarrollos y soluciones por todas las Comunidades Aut&oacute;nomas.";
 choices[40][3] = "Incorporar a todas las Comunidades Aut&oacute;nomas a la red de atenci&oacute;n integral a los ciudadanos, Red 060.";
 answers[40] = choices[40][0];
 units[40] = "30";
 comments[40] = "Id Pregunta: 5798. MAP 2008 A2";


//  Id pregunta: 5830 AÃ±o de creación de pregunta: 2009-01-01
 questions[41]= "42)  Se&ntilde;ale la afirmaci&oacute;n incorrecta respecto a la licencia EUPL.";
 choices[41]= new Array();
 choices[41][0] = "Con estte tipo de licencia las administraciones pueden ser proveedoras de software open source ente ellas, reutilizando lo que otros han hecho y mejor&aacute;ndolo.";
 choices[41][1] = "Es equivalente a las licencias GNU GPL y se pueden usar indistintamente, s&oacute;lo que EUPL aplica &uacute;nicamente en europa.";
 choices[41][2] = "Una de las novedades que introduce es la variedad de idiomas en los que est&aacute; disponible.";
 choices[41][3] = "Es una licencia compatible con otras licencias copyleft";
 answers[41] = choices[41][1];
 units[41] = "36,37";
 comments[41] = "Id Pregunta: 5830. ";


//  Id pregunta: 6089 AÃ±o de creación de pregunta: 2010-01-01
 questions[42]= "43)  NO corresponde actualmente a una infraestructura o servicio com&uacute;n de la Administraci&oacute;n General del Estado:";
 choices[42]= new Array();
 choices[42][0] = "El servicio de verificaci&oacute;n de datos de identidad o residencia.";
 choices[42][1] = "La pasarela de pagos telem&aacute;ticos.";
 choices[42][2] = "La recepci&oacute;n de facturas electr&oacute;nicas.";
 choices[42][3] = "Todas las anteriores corresponden a infraestructuras o servicio comunes de la Administraci&oacute;n General del Estado";
 answers[42] = choices[42][3];
 units[42] = "44";
 comments[42] = "Id Pregunta: 6089. TIC A 2009. Modificada 2014";


//  Id pregunta: 6196 AÃ±o de creación de pregunta: 2010-01-01
 questions[43]= "44)  Respecto a los certificados de sede electr&oacute;nica y sello electr&oacute;nico";
 choices[43]= new Array();
 choices[43][0] = "El certificado de sede electr&oacute;nica permite la firma de documentos";
 choices[43][1] = "El certificado de sede electr&oacute;nica no permite la firma de documentos";
 choices[43][2] = "El certificado de sello electr&oacute;nico no permite el establecimiento de comunicaciones seguras";
 choices[43][3] = "El certificado de sello electr&oacute;nico permite la identificaci&oacute;n de una sede electr&oacute;nica";
 answers[43] = choices[43][1];
 units[43] = "43";
 comments[43] = "Id Pregunta: 6196. Articulos 18 y 19. El sello electronico SI permite establecer comunicaciones electronicas";


//  Id pregunta: 6372 AÃ±o de creación de pregunta: 2010-01-01
 questions[44]= "45)  En relaci&oacute;n a lo dispuesto en el Esquema Nacional de Seguridad, un sistema de informaci&oacute;n ser&aacute; de categor&iacute;a MEDIA cuando:";
 choices[44]= new Array();
 choices[44][0] = "Las dimensiones de seguridad definidas como cr&iacute;ticas son, en su mayor&iacute;a, de nivel MEDIO.";
 choices[44][1] = "Alguna de sus dimensiones de seguridad alcanza el nivel MEDIO, y ninguna es de nivel inferior.";
 choices[44][2] = "Alguna de sus dimensiones de seguridad alcanza el nivel MEDIO, y ninguna alcanza un nivel superior.";
 choices[44][3] = "Las dimensiones de seguridad son, en su mayor&iacute;a, de nivel MEDIO.";
 answers[44] = choices[44][2];
 units[44] = "43";
 comments[44] = "Id Pregunta: 6372. Anexo I ENS";


//  Id pregunta: 6378 AÃ±o de creación de pregunta: 2010-01-01
 questions[45]= "46)  El Esquema Nacional de Interoperabilidad establece que las Administraciones p&uacute;blicas utilizar&aacute;n preferentemente la Red de comunicaciones de las Administraciones p&uacute;blicas espa&ntilde;olas para comunicarse entre s&iacute;. La red que prestar&aacute; este servicio recibe el nombre de:";
 choices[45]= new Array();
 choices[45][0] = "InterAdmon";
 choices[45][1] = "TESTA";
 choices[45][2] = "SARA";
 choices[45][3] = "El Esquema Nacional de Interoperabilidad no establece el uso de una red determinada.";
 answers[45] = choices[45][2];
 units[45] = "43";
 comments[45] = "Id Pregunta: 6378. Art&iacute;culo 13 ENI";


//  Id pregunta: 6383 AÃ±o de creación de pregunta: 2010-01-01
 questions[46]= "47)  Las disposiciones del RD 1671/2009 ser&aacute;n de aplicaci&oacute;n a:";
 choices[46]= new Array();
 choices[46][0] = "Al sector p&uacute;blico en su conjunto.";
 choices[46][1] = "A todas las Administraciones P&uacute;blicas , as&iacute; como de los organismos p&uacute;blicos vinculados o dependientes de las mismas.";
 choices[46][2] = "A las relaciones entre las Administraciones P&uacute;blicas.";
 choices[46][3] = "A la actividad de la Administraci&oacute;n General del Estado, as&iacute; como de los organismos p&uacute;blicos vinculados o dependientes de la misma.";
 answers[46] = choices[46][3];
 units[46] = "43";
 comments[46] = "Id Pregunta: 6383. Art&iacute;culo 1 RD 1671/2009";


//  Id pregunta: 6393 AÃ±o de creación de pregunta: 2010-01-01
 questions[47]= "48)  La creaci&oacute;n de sellos electr&oacute;nicos se realizar&aacute;, seg&uacute;n lo dispuesto en el RD 1671/2009, mediante... ";
 choices[47]= new Array();
 choices[47][0] = "Orden del Ministerio de Presidencia";
 choices[47][1] = "Resoluci&oacute;n del Ministro o titular del organismo p&uacute;blico competente";
 choices[47][2] = "Orden del Ministerio o titular del organismo p&uacute;blico competente";
 choices[47][3] = "Resoluci&oacute;n de la Subsecretar&iacute;a del Ministerio o titular del organismo p&uacute;blico competente";
 answers[47] = choices[47][3];
 units[47] = "43";
 comments[47] = "Id Pregunta: 6393. Art&iacute;culo 19 RD 1671/2009";


//  Id pregunta: 6394 AÃ±o de creación de pregunta: 2010-01-01
 questions[48]= "49)  &iquest;Es posible establecer la obligaci&oacute;n de comunicarse electr&oacute;nicamente con los &oacute;rganos de la Administraci&oacute;n General del Estado o sus organismos p&uacute;blicos vinculados o dependientes?";
 choices[48]= new Array();
 choices[48][0] = "S&iacute;, en cualquier caso";
 choices[48][1] = "No, en ning&uacute;n caso";
 choices[48][2] = "S&iacute;, en determinados casos previstos y mediante orden ministerial";
 choices[48][3] = "S&iacute;, en determinados casos previstos y mediante resoluci&oacute;n de la Subsecretar&iacute;a del Ministerio o titular del organismo p&uacute;blico competente";
 answers[48] = choices[48][2];
 units[48] = "43";
 comments[48] = "Id Pregunta: 6394. Art&iacute;culo 32 RD 1671/2009";


//  Id pregunta: 6396 AÃ±o de creación de pregunta: 2010-01-01
 questions[49]= "50)  En relaci&oacute;n a las copias electr&oacute;nicas de los documentos electr&oacute;nicos realizadas por la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos, se&ntilde;ale la opci&oacute;n incorrecta.";
 choices[49]= new Array();
 choices[49][0] = "En caso de cambio del formato original, para que una copia electr&oacute;nica de un documento electr&oacute;nico tenga la condici&oacute;n de copia aut&eacute;ntica, debe incluir su car&aacute;cter de copia entre los metadatos asociados.";
 choices[49][1] = "No se podr&aacute;n generar m&aacute;s copias electr&oacute;nicas aut&eacute;nticas a partir de otras copias electr&oacute;nicas aut&eacute;nticas.";
 choices[49][2] = "Los &oacute;rganos emisores de los documentos administrativos electr&oacute;nicos o receptores de los documentos privados electr&oacute;nicos, o los archivos que reciban los mismos, est&aacute;n obligados a la conservaci&oacute;n de los documentos originales, aunque se hubiere procedido a su copiado.";
 choices[49][3] = "Las copias electr&oacute;nicas generadas que, por ser id&eacute;nticas al documento electr&oacute;nico original no comportan cambio de formato ni de contenido, tendr&aacute;n la eficacia jur&iacute;dica de documento electr&oacute;nico original.";
 answers[49] = choices[49][1];
 units[49] = "43";
 comments[49] = "Id Pregunta: 6396. Art&iacute;culo 43 RD 1671/2009";


//  Id pregunta: 6403 AÃ±o de creación de pregunta: 2010-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l es el plazo m&iacute;nimo para solicitar autorizaci&oacute;n para prestar servicios de la sociedad de la informaci&oacute;n, antes de comenzar a prestar el servicio?";
 choices[50]= new Array();
 choices[50][0] = "15 d&iacute;as";
 choices[50][1] = "1 mes";
 choices[50][2] = "2 meses";
 choices[50][3] = "Ninguna de las anteriores";
 answers[50] = choices[50][3];
 units[50] = "30";
 comments[50] = "Id Pregunta: 6403. Ley 34/2002, art&iacute;culo 6";


//  Id pregunta: 6405 AÃ±o de creación de pregunta: 2010-01-01
 questions[51]= "52)  &iquest;Cu&aacute;l es la duraci&oacute;n de los derechos de explotaci&oacute;n, cuando el autor de un programa de ordenador sea una persona jur&iacute;dica?";
 choices[51]= new Array();
 choices[51][0] = "Sesenta a&ntilde;os, computados desde el d&iacute;a 1 de enero del a&ntilde;o siguiente a la muerte del representante de la persona jur&iacute;dica.";
 choices[51][1] = "Sesenta a&ntilde;os, computados desde el d&iacute;a 1 de enero del a&ntilde;o siguiente al de la divulgaci&oacute;n l&iacute;cita del programa";
 choices[51][2] = "Setenta a&ntilde;os, computados desde el d&iacute;a 1 de enero del a&ntilde;o siguiente al de la divulgaci&oacute;n l&iacute;cita del programa";
 choices[51][3] = "Cincuenta a&ntilde;os, computados desde el d&iacute;a 1 de enero del a&ntilde;o siguiente a la muerte del representante de la persona jur&iacute;dica.";
 answers[51] = choices[51][2];
 units[51] = "36";
 comments[51] = "Id Pregunta: 6405. Art&iacute;culo 98 RDL 1/1996";


//  Id pregunta: 6412 AÃ±o de creación de pregunta: 2010-01-01
 questions[52]= "53)  &iquest;Cu&aacute;l de los siguientes no es un eje de actuaci&oacute;n del Plan Avanza 2?";
 choices[52]= new Array();
 choices[52][0] = "Desarrollo del sector TIC";
 choices[52][1] = "Capacitaci&oacute;n TIC";
 choices[52][2] = " Servicios P&uacute;blicos Digitales";
 choices[52][3] = "Desarrollo I+D+i";
 answers[52] = choices[52][3];
 units[52] = "30";
 comments[52] = "Id Pregunta: 6412. NULL";


//  Id pregunta: 6584 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)  El documento de seguridad";
 choices[53]= new Array();
 choices[53][0] = "debe mantenerse siempre actualizado";
 choices[53][1] = "Es una obligaci&oacute;n de todos los responsables de fichero, y en su caso, para los encargados del tratamiento";
 choices[53][2] = "Debe existir con independencia del nivel de seguridad que sea necesario aplicar";
 choices[53][3] = "Todas las respuestas anteriores son correctas";
 answers[53] = choices[53][3];
 units[53] = "29";
 comments[53] = "Id Pregunta: 6584. NULL";


//  Id pregunta: 6594 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  En el trabajo de auditor:";
 choices[54]= new Array();
 choices[54][0] = "Se distinguen de forma general tres etapas";
 choices[54][1] = "Una de las etapas se denomina proceso, donde se realiza el an&aacute;lisis cuantitativo y cualitativo de la informaci&oacute;n recabada.";
 choices[54][2] = "A y B son correctas";
 choices[54][3] = "A y B son incorrectas";
 answers[54] = choices[54][2];
 units[54] = "75";
 comments[54] = "Id Pregunta: 6594. NULL";


//  Id pregunta: 6595 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  El RD 1720/2007 indica que deben aplicarse t&eacute;cnicas de cifrado";
 choices[55]= new Array();
 choices[55][0] = "En todos los datos personales";
 choices[55][1] = "En los datos personales a los que aplican las medidas de seguridad de nivel b&aacute;sico";
 choices[55][2] = "En los datos personales a los que aplican las medidas de seguridad de nivel medio";
 choices[55][3] = "En los datos personales a los que aplican las medidas de seguridad de nivel alto";
 answers[55] = choices[55][3];
 units[55] = "75";
 comments[55] = "Id Pregunta: 6595. NULL";


//  Id pregunta: 6597 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  Una auditor&iacute;a de acuerdo al RD 1720/2007, implica el llevar a cabo:";
 choices[56]= new Array();
 choices[56][0] = "An&aacute;lisis de la red de comunicaciones";
 choices[56][1] = "An&aacute;lisis de los sistemas operativos";
 choices[56][2] = "An&aacute;lisis de los ficheros automatizados";
 choices[56][3] = "Todas las respuestas anteriores son correctas";
 answers[56] = choices[56][3];
 units[56] = "75";
 comments[56] = "Id Pregunta: 6597. NULL";


//  Id pregunta: 7145 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  En la Ley 11/2007 de 22 de Junio, se regula las condiciones de teletrabajo en la Administraci&oacute;n General del Estado. Estas condiciones deber&iacute;an estar establecidas antes del:";
 choices[57]= new Array();
 choices[57][0] = "1 de marzo de 2008";
 choices[57][1] = "1 de abril de 2008";
 choices[57][2] = "31 de diciembre de 2009";
 choices[57][3] = "31 de diciembre de 2008";
 answers[57] = choices[57][0];
 units[57] = "43";
 comments[57] = "Id Pregunta: 7145. Examen TIC B 2009";


//  Id pregunta: 8209 AÃ±o de creación de pregunta: 2011-01-01
 questions[58]= "59)  El establecimiento de un directorio de direcciones de red IP, a partir del cual cada entidad u organismo de la AGE pueda establecer de manera independiente sus planes de numeraci&oacute;n IP, se incluye en:";
 choices[58]= new Array();
 choices[58][0] = "El Plan AVANZA.";
 choices[58][1] = "El Plan de direccionamiento e interconexi&oacute;n de redes en la Administraci&oacute;n.";
 choices[58][2] = "El Plan Estrat&eacute;gico para el desarrollo de la administraci&oacute;n electr&oacute;nica.";
 choices[58][3] = "El Plan de evaluaci&oacute;n de impacto de la Ley 11/2007.";
 answers[58] = choices[58][1];
 units[58] = "44";
 comments[58] = "Id Pregunta: 8209. Examen TIC A1 2010";


//  Id pregunta: 8224 AÃ±o de creación de pregunta: 2011-01-01
 questions[59]= "60)  De acuerdo con la normativa de protecci&oacute;n de datos de car&aacute;cter personal, proceder a la creaci&oacute;n de ficheros de titularidad p&uacute;blica o iniciar la recogida de datos de car&aacute;cter personal para los mismos, sin autorizaci&oacute;n de disposici&oacute;n general publicada en el BOE o Diario oficial correspondiente, se considerar&aacute;:";
 choices[59]= new Array();
 choices[59][0] = "Infracci&oacute;n leve.";
 choices[59][1] = "Infracci&oacute;n notable.";
 choices[59][2] = "Infracci&oacute;n grave.";
 choices[59][3] = "Infracci&oacute;n muy grave.";
 answers[59] = choices[59][2];
 units[59] = "29";
 comments[59] = "Id Pregunta: 8224. Examen TIC A1 2010";


//  Id pregunta: 8398 AÃ±o de creación de pregunta: 2011-01-01
 questions[60]= "61)  Seg&uacute;n el Real Decreto 1671/2009, las sedes electr&oacute;nicas de la Administraci&oacute;n General del Estado se crean: ";
 choices[60]= new Array();
 choices[60][0] = "Por Orden Ministerial o Resoluci&oacute;n del titular del organismo. ";
 choices[60][1] = "Por Real Decreto del Presidente del Gobierno. ";
 choices[60][2] = "Por Orden Conjunta del Ministerio de la Presidencia y del Ministerio del que se trate. ";
 choices[60][3] = "Por Acuerdo del Consejo Superior de Administraci&oacute;n Electr&oacute;nica. ";
 answers[60] = choices[60][0];
 units[60] = "43";
 comments[60] = "Id Pregunta: 8398. Examen TIC A2 2010";


//  Id pregunta: 8442 AÃ±o de creación de pregunta: 2011-01-01
 questions[61]= "62)  Seg&uacute;n el RD 1671/2009, en caso de cambio del formato original, para que una copia electr&oacute;nica de un documento electr&oacute;nico tenga la condici&oacute;n de copia aut&eacute;ntica, deber&aacute;n cumplirse una serie de requisitos. &iquest;Cu&aacute;l de los siguientes requisitos no se encuentra entre ellos?";
 choices[61]= new Array();
 choices[61][0] = "Que el documento electr&oacute;nico original, que debe conservarse en todo caso, se encuentre en poder de la Administraci&oacute;n.";
 choices[61][1] = "Que la copia sea obtenida conforme a las normas de competencia y procedimiento que en cada caso se aprueben, incluidas las de obtenci&oacute;n automatizada.";
 choices[61][2] = "Que incluya el sello electr&oacute;nico del organismo.";
 choices[61][3] = "Que sea autorizada mediante firma electr&oacute;nica conforme a los sistemas recogidos en los art&iacute;culos 18 y 19 de la Ley 11/2007, de 22 de junio.";
 answers[61] = choices[61][2];
 units[61] = "43";
 comments[61] = "Id Pregunta: 8442. ";


//  Id pregunta: 8732 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  Los ciudadanos podr&aacute;n utilizar el siguiente sistema de firma electr&oacute;nica para relacionarse con las Administraciones P&uacute;blicas:";
 choices[62]= new Array();
 choices[62][0] = "Siempre se exigir&aacute; firma electr&oacute;nica reconocida, como garant&iacute;a jur&iacute;dica.";
 choices[62][1] = "&Uacute;nicamente el ser&aacute; v&aacute;lido el DNI electr&oacute;nico, una vez extendido a toda la poblaci&oacute;n";
 choices[62][2] = "Firma electr&oacute;nica avanzada.";
 choices[62][3] = "Est&aacute; pendiente de desarrollo reglamentario el uso efectivo de la firma electr&oacute;nica en esos casos.";
 answers[62] = choices[62][2];
 units[62] = "43";
 comments[62] = "Id Pregunta: 8732. Examen TIC A2 2010 interna";


//  Id pregunta: 8737 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  Una empresa crea legalmente un fichero de datos personales que utiliza para su tratamiento, pero sin llevar a cabo una correcta actualizaci&oacute;n cuando se producen cambios en los mismos. De entre los &quot;principios de protecci&oacute;n de datos&quot; incluidos en la Ley 15/1999 de Protecci&oacute;n de Datos de Car&aacute;cter Personal, &iquest;cu&aacute;l se estar&iacute;a incumpliendo?";
 choices[63]= new Array();
 choices[63][0] = "Calidad de los datos";
 choices[63][1] = "Veracidad de la informaci&oacute;n.";
 choices[63][2] = "Actualizaci&oacute;n peri&oacute;dica";
 choices[63][3] = "Seguimiento de los datos.";
 answers[63] = choices[63][0];
 units[63] = "29";
 comments[63] = "Id Pregunta: 8737. Examen TIC A2 2010 interna";


//  Id pregunta: 8939 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  Las sedes judiciales electr&oacute;nicas no est&aacute;n obligadas a poner a disposici&oacute;n de los ciudadanos y profesionales el servicio:";
 choices[64]= new Array();
 choices[64][0] = "Carta de servicios electr&oacute;nicos";
 choices[64][1] = "Carta de servicios";
 choices[64][2] = "Carta de Derechos de los Ciudadanos ante la Justicia";
 choices[64][3] = "Debe disponer de todos los anteriores";
 answers[64] = choices[64][3];
 units[64] = "43";
 comments[64] = "Id Pregunta: 8939. ";


//  Id pregunta: 9064 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  Seg&uacute;n la ley 15/1999 de protecci&oacute;n de datos de car&aacute;cter personal, las infracciones leves ser&aacute;n sancionadas con multas de:";
 choices[65]= new Array();
 choices[65][0] = "601,01 a 60.101,21 euros";
 choices[65][1] = "901,01 a 60.101,21 euros";
 choices[65][2] = "600 a 40.000 euros";
 choices[65][3] = "900 a 40.000 euros";
 answers[65] = choices[65][3];
 units[65] = "29";
 comments[65] = "Id Pregunta: 9064. NULL";


//  Id pregunta: 9089 AÃ±o de creación de pregunta: 2013-01-01
 questions[66]= "67)  &iquest;C&oacute;mo se realiza la protecci&oacute;n de un programa de ordenador?";
 choices[66]= new Array();
 choices[66][0] = "A la hora de crear el programa, el autor debe decidir qu&eacute; tipo de protecci&oacute;n quiere otorgarle, si a trav&eacute;s de la ley de patentes o a trav&eacute;s de la ley de propiedad intelectual";
 choices[66][1] = "A traves de la ley de patentes";
 choices[66][2] = "Nunca puede realizarse a trav&eacute;s de la ley de patentes";
 choices[66][3] = "Si el programa forma parte de una patente, tambi&eacute;n estar&aacute; protegido por la ley de propiedad intelectual";
 answers[66] = choices[66][3];
 units[66] = "36";
 comments[66] = "Id Pregunta: 9089. ";


//  Id pregunta: 9583 AÃ±o de creación de pregunta: 2013-01-01
 questions[67]= "68)  En el contexto de la firma electr&oacute;nica y su regulaci&oacute;n en Espa&ntilde;a se&ntilde;ale la afirmaci&oacute;n FALSA.";
 choices[67]= new Array();
 choices[67][0] = "Los funcionarios al servicio de las administraciones p&uacute;blicas espa&ntilde;olas pueden firmar en el ejercicio de su cargo utilizando su DNI electr&oacute;nico.";
 choices[67][1] = "Los c&oacute;digos de verificaci&oacute;n segura (CSV) junto con los sellos de &oacute;rgano sirven para dotar de firma electr&oacute;nica reconocida a la actuaci&oacute;n administrativa automatizada.";
 choices[67][2] = "Un dispositivo seguro de creaci&oacute;n de firma debe garantizar que los datos usados para generar la firma pueden producirse s&oacute;lo una vez.";
 choices[67][3] = "Un certificado electr&oacute;nico reconocido ha de incluir la firma electr&oacute;nica avanzada del prestador de servicios de certificaci&oacute;n que lo expide.";
 answers[67] = choices[67][1];
 units[67] = "43, 74";
 comments[67] = "Id Pregunta: 9583. Examen TIC A1 2011";


//  Id pregunta: 9593 AÃ±o de creación de pregunta: 2013-01-01
 questions[68]= "69)  El Real Decreto 1671/2009, por el que se desarrolla parcialmente la Ley 11/2007, establece el contenido m&iacute;nimo de las sedes electr&oacute;nicas. Entre dicho contenido m&iacute;nimo est&aacute;:";
 choices[68]= new Array();
 choices[68][0] = "Medios disponibles para la formulaci&oacute;n de sugerencias y quejas.";
 choices[68][1] = "Identificaci&oacute;n de la direcci&oacute;n electr&oacute;nica del responsable t&eacute;cnico de la sede.";
 choices[68][2] = "&Aacute;mbito de aplicaci&oacute;n de la sede, que no podr&aacute; ser la totalidad del Ministerio u organismo p&uacute;blico.";
 choices[68][3] = "Identificaci&oacute;n de los canales de acceso a los servicios disponibles en la sede, los cuales no podr&aacute;n tratarse, en ning&uacute;n caso, de tel&eacute;fonos y oficinas, sino de canales exclusivamente electr&oacute;nicos. ";
 answers[68] = choices[68][0];
 units[68] = "43";
 comments[68] = "Id Pregunta: 9593. Examen TIC A2 2011 interna";


//  Id pregunta: 9722 AÃ±o de creación de pregunta: 2014-01-01
 questions[69]= "70)  El art&iacute;culo 5 de la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, establece la obligaci&oacute;n para los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico o exploten redes p&uacute;blicas de comunicaciones, de conservar los datos (referidos en su art&iacute;culo 3), durante un plazo de";
 choices[69]= new Array();
 choices[69][0] = "48 meses.";
 choices[69][1] = "24 meses.";
 choices[69][2] = "12 meses.";
 choices[69][3] = "6 meses.";
 answers[69] = choices[69][2];
 units[69] = "30";
 comments[69] = "Id Pregunta: 9722. Examen TIC-A1 2013";


//  Id pregunta: 9735 AÃ±o de creación de pregunta: 2014-01-01
 questions[70]= "71)  Seg&uacute;n el Real Decreto 1720/2007, &iquest;cu&aacute;l de las siguientes declaraciones es correcta respecto a pruebas en sistemas con datos de car&aacute;cter personal?";
 choices[70]= new Array();
 choices[70][0] = "Queda terminantemente prohibida la realizaci&oacute;n de pruebas en los sistemas de informaci&oacute;n que traten datos reales en ficheros con datos de car&aacute;cter personal.";
 choices[70][1] = "No existen limitaciones para usar datos reales en ficheros de car&aacute;cter personal si se utilizan para las pruebas anteriores a la implantaci&oacute;n o modificaci&oacute;n de los sistemas de informaci&oacute;n.";
 choices[70][2] = "Las pruebas anteriores a la implantaci&oacute;n o modificaci&oacute;n de los sistemas de informaci&oacute;n que traten ficheros con datos de car&aacute;cter personal no se realizar&aacute;n con datos reales, salvo que se asegure el nivel de seguridad correspondiente al tratamiento realizado y se anote su realizaci&oacute;n en el documento de seguridad.";
 choices[70][3] = "Si para la validaci&oacute;n de un sistema de informaci&oacute;n, es necesario realizar pruebas que traten ficheros con datos de car&aacute;cter personal reales, se proceder&aacute; posteriormente al borrado de dichos ficheros para cumplir la normativa legal vigente.";
 answers[70] = choices[70][2];
 units[70] = "29";
 comments[70] = "Id Pregunta: 9735. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9807 AÃ±o de creación de pregunta: 2014-01-01
 questions[71]= "72)  Seg&uacute;n el Real Decreto 1671/2009, la obligatoriedad de comunicarse por medios electr&oacute;nicos con los &oacute;rganos de la Administraci&oacute;n General del Estado o sus organismos p&uacute;blicos vinculados o dependientes, en los supuestos previstos en la Ley 11/2007, podr&aacute; establecerse mediante:";
 choices[71]= new Array();
 choices[71][0] = "Ley ordinaria.";
 choices[71][1] = "Orden Ministerial.";
 choices[71][2] = "Ley org&aacute;nica.";
 choices[71][3] = "Comunicaci&oacute;n en la sede electr&oacute;nica.";
 answers[71] = choices[71][1];
 units[71] = "43";
 comments[71] = "Id Pregunta: 9807. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9893 AÃ±o de creación de pregunta: 2010-01-01
 questions[72]= "73)  En el entorno de las Tecnolog&iacute;as de la Informaci&oacute;n, la Comisi&oacute;n Soto sirvi&oacute; para";
 choices[72]= new Array();
 choices[72][0] = "impulsar la creaci&oacute;n del Consejo Superior de Inform&aacute;tica";
 choices[72][1] = "impulsar el modelo de crecimiento aut&oacute;nomo de cada departamento ministerial en materia de Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[72][2] = "Revisar, en base a la Ley 11/2007, los modelos de organizaci&oacute;n de las Tecnolog&iacute;as de la Informaci&oacute;n creados anteriormente.";
 choices[72][3] = "impulsar el desarrollo de la Sociedad de la Informaci&oacute;n.";
 answers[72] = choices[72][3];
 units[72] = "43";
 comments[72] = "Id Pregunta: 9893. TIC A1, Examen 2013";


//  Id pregunta: 10150 AÃ±o de creación de pregunta: 2014-01-01
 questions[73]= "74)  En cumplimiento de la Ley 25/2007, de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones:";
 choices[73]= new Array();
 choices[73][0] = "Los operadores deben conservar el contenido de las comunicaciones";
 choices[73][1] = "El deber de conservaci&oacute;n se extiende a los datos relativos a las llamadas infructuosas";
 choices[73][2] = "La obligaci&oacute;n de conservaci&oacute;n de datos impuesta cesa a los cuatro meses computados desde la fecha en que se haya producido la comunicaci&oacute;n";
 choices[73][3] = "El plazo de ejecuci&oacute;n de la orden de cesi&oacute;n ser&aacute; el fijado por la resoluci&oacute;n judicial. Si no se establece otro plazo distinto, la cesi&oacute;n deber&aacute; efectuarse dentro de las setenta y dos horas contadas a partir de las 8:00 horas del d&iacute;a laborable siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 answers[73] = choices[73][1];
 units[73] = "30";
 comments[73] = "Id Pregunta: 10150. ";


//  Id pregunta: 10156 AÃ±o de creación de pregunta: 2014-01-01
 questions[74]= "75)  Seg&uacute;n la  Norma T&eacute;cnica de Interoperabilidad de Protocolos de intermediaci&oacute;n de datos, cu&aacute;l de las siguientes afirmaciones es incorrecta:";
 choices[74]= new Array();
 choices[74][0] = "En el acceso a la Plataforma de intermediaci&oacute;n de datos del Ministerio de Hacienda y Administraciones P&uacute;blicas se utilizar&aacute; la Red SARA";
 choices[74][1] = "La Plataforma de intermediaci&oacute;n del Ministerio de Hacienda y Administraciones P&uacute;blicas garantizar&aacute; interoperabilidad, disponibilidad, fiabilidad y seguridad";
 choices[74][2] = "La Plataforma de intermediaci&oacute;n del Ministerio de Hacienda y Administraciones P&uacute;blicas almacenar&aacute; el contenido del intercambio para garantizar la trazabilidad";
 choices[74][3] = "El Cedente podr&aacute; auditar la cesi&oacute;n de datos para comprobar el cumplimiento de los requisitos a que pudiera &eacute;sta estar sujeta";
 answers[74] = choices[74][2];
 units[74] = "43";
 comments[74] = "Id Pregunta: 10156. ";


//  Id pregunta: 10343 AÃ±o de creación de pregunta: 2014-01-01
 questions[75]= "76)  Seg&uacute;n lo recogido en el Texto Refundido de la Ley de propiedad Intelectual, se&ntilde;ale la respuesta correcta:";
 choices[75]= new Array();
 choices[75][0] = "La reproducci&oacute;n o transformaci&oacute;n de un programa de ordenador requerir&aacute; autorizaci&oacute;n del titular de los derechos de explotaci&oacute;n, en todo caso";
 choices[75][1] = "La reproducci&oacute;n o transformaci&oacute;n de un programa de ordenador no requerir&aacute; autorizaci&oacute;n del titular de los derechos de explotaci&oacute;n, en todo caso";
 choices[75][2] = "La correcci&oacute;n de errores de un programa de ordenador no requerir&aacute; autorizaci&oacute;n del titular de los derechos de explotaci&oacute;n, cuando sea necesario para la utilizaci&oacute;n del programa por parte del usuario seg&uacute;n su finalidad prevista";
 choices[75][3] = "Todas las respuestas anteriores son falsas";
 answers[75] = choices[75][2];
 units[75] = "36";
 comments[75] = "Id Pregunta: 10343. Consultar Art. 100 del Real Decreto Legislativo 1/1996";


//  Id pregunta: 10495 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  &iquest;Cual de los siguientes no es un servicio prestado por Red SARA?";
 choices[76]= new Array();
 choices[76][0] = "DNS";
 choices[76][1] = "SMTP";
 choices[76][2] = "SNMP";
 choices[76][3] = "NTP";
 answers[76] = choices[76][2];
 units[76] = "43";
 comments[76] = "Id Pregunta: 10495. Punto III.1.3 de la NTI de Requisitos de conexi&oacute;n a Red SARA";


//  Id pregunta: 10546 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  NO es uno de los 10 objetivos de la Estrategia 2011-2015 del Plan Avanza 2...";
 choices[77]= new Array();
 choices[77][0] = "Promover procesos innovadores TIC en las AAPP";
 choices[77][1] = "Incrementar el uso avanzado de servicios digitales por la ciudadan&iacute;a";
 choices[77][2] = "Promover el uso de las TIC en todos los niveles administrativos";
 choices[77][3] = "Extender el uso de soluciones TIC de negocio en la empresa";
 answers[77] = choices[77][2];
 units[77] = "30";
 comments[77] = "Id Pregunta: 10546. https://www.planavanza.es/informaciongeneral/estrategia2011/Paginas/Estrategia2011_2015.aspx";


//  Id pregunta: 10581 AÃ±o de creación de pregunta: 2015-01-01
 questions[78]= "79)  Son principios generales de la Ley 11/2007:";
 choices[78]= new Array();
 choices[78][0] = "Neutralidad tecnol&oacute;gica, accesibilidad y disponibilidad.";
 choices[78][1] = "Informaci&oacute;n, igualdad y legalidad.";
 choices[78][2] = "Calidad, conectividad y seguridad.";
 choices[78][3] = "Cooperaci&oacute;n, responsabilidad y transparencia.";
 answers[78] = choices[78][3];
 units[78] = "43";
 comments[78] = "Id Pregunta: 10581. Art&iacute;culo 4, Ley 11/2007.";


//  Id pregunta: 10588 AÃ±o de creación de pregunta: 2015-01-01
 questions[79]= "80)  No es un objetivo de Europa 2020:";
 choices[79]= new Array();
 choices[79][0] = "Invertir un 3% en I+D y desarrollar un indicador para su impacto.";
 choices[79][1] = "Reducir el abandono escolar del 20% al 15%.";
 choices[79][2] = "Reducir en 25% el n&uacute;mero de europeos que viven por debajo de umbrales de la pobreza.";
 choices[79][3] = "Reducir las emisiones de gases de efecto invernadero en un 20% desde 1999.";
 answers[79] = choices[79][1];
 units[79] = "30";
 comments[79] = "Id Pregunta: 10588. ";


//  Id pregunta: 10676 AÃ±o de creación de pregunta: 2015-01-01
 questions[80]= "81)  La Ley 39/2015 del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas se compone de:";
 choices[80]= new Array();
 choices[80][0] = "T&iacute;tulo preliminar, 6 T&iacute;tulos y 123 Art&iacute;culos.";
 choices[80][1] = "T&iacute;tulo preliminar, 6 T&iacute;tulos y 133 Art&iacute;culos.";
 choices[80][2] = "T&iacute;tulo preliminar, 5 T&iacute;tulos y 123 Art&iacute;culos.";
 choices[80][3] = "T&iacute;tulo preliminar, 5 T&iacute;tulos y 133 Art&iacute;culos.";
 answers[80] = choices[80][1];
 units[80] = "30";
 comments[80] = "Id Pregunta: 10676. ";


//  Id pregunta: 10686 AÃ±o de creación de pregunta: 2015-01-01
 questions[81]= "82)  Seg&uacute;n la Ley 39/2015, en relaci&oacute;n a la firma electr&oacute;nica.";
 choices[81]= new Array();
 choices[81][0] = "Es necesaria para acreditar la identidad en toda actuaci&oacute;n de un procedimiento administrativo.";
 choices[81][1] = "Con car&aacute;cter general, para realizar cualquier actuaci&oacute;n prevista en el procedimiento administrativo, ser&aacute; suficiente con que los interesados acrediten previamente su identidad a trav&eacute;s de cualquiera de los medios de identificaci&oacute;n previstos en la Ley.";
 choices[81][2] = "Solo es necesaria para: formular solicitudes, presentar declaraciones responsables o comunicaciones, interponer recursos y  desistir de acciones.";
 choices[81][3] = "Solo es necesaria para: formular solicitudes, presentar declaraciones responsables o comunicaciones e interponer recursos.";
 answers[81] = choices[81][1];
 units[81] = "30";
 comments[81] = "Id Pregunta: 10686. ";


//  Id pregunta: 10693 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  La Ley 39/2015 es de aplicaci&oacute;n obligatoria:";
 choices[82]= new Array();
 choices[82][0] = "Para la Administraci&oacute;n General del Estado.";
 choices[82][1] = "Para las Comunidades Aut&oacute;nomas y Administraci&oacute;n Local.";
 choices[82][2] = "Para el Sector P&uacute;blico Institucional.";
 choices[82][3] = "Todas las anteriores.";
 answers[82] = choices[82][3];
 units[82] = "30";
 comments[82] = "Id Pregunta: 10693. ";


//  Id pregunta: 10701 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  Seg&uacute;n la NTI de Documento Electr&oacute;nico &iquest;Se pueden utilizar formatos diferentes a los establecidos en la Norma T&eacute;cnica de Interoperabilidad de Cat&aacute;logo de est&aacute;ndares?";
 choices[83]= new Array();
 choices[83][0] = "Cuando existan particularidades que lo justifiquen.";
 choices[83][1] = "Cuando sea necesario para asegurar el valor probatorio del documento electr&oacute;nico.";
 choices[83][2] = "En ambos casos.";
 choices[83][3] = "En ning&uacute;n caso.";
 answers[83] = choices[83][2];
 units[83] = "43";
 comments[83] = "Id Pregunta: 10701. ";


//  Id pregunta: 10719 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  &iquest;Cu&aacute;l de los siguientes no es un est&aacute;ndar de firma contemplado en la NTI de firma electr&oacute;nica?";
 choices[84]= new Array();
 choices[84][0] = "XAdES";
 choices[84][1] = "CAdES";
 choices[84][2] = "PAdES";
 choices[84][3] = "MAdES";
 answers[84] = choices[84][3];
 units[84] = "43";
 comments[84] = "Id Pregunta: 10719. ";


//  Id pregunta: 10722 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  Seg&uacute;n la NTI de Gesti&oacute;n de Pol&iacute;tica de gesti&oacute;n de documentos electr&oacute;nicos. &iquest;Qui&eacute;n impulsar&aacute; la pol&iacute;tica de gesti&oacute;n de documentos electr&oacute;nicos?";
 choices[85]= new Array();
 choices[85][0] = "La alta direcci&oacute;n.";
 choices[85][1] = "Los responsables de procesos de gesti&oacute;n.";
 choices[85][2] = "El Presidente del Gobierno.";
 choices[85][3] = "El Consejo de Ministros.";
 answers[85] = choices[85][0];
 units[85] = "43";
 comments[85] = "Id Pregunta: 10722. ";


//  Id pregunta: 10730 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  Seg&uacute;n la NTI de requisitos de conexi&oacute;n a la red de comunicaciones de las Administraciones P&uacute;blicas espa&ntilde;olas &iquest;cual de los siguientes no es un tipo de Punto de Presencia (PdP) de la Red SARA?";
 choices[86]= new Array();
 choices[86][0] = "Proveedores de Acceso a la Red SARA (PAS).";
 choices[86][1] = "Centros de Proceso de Datos (CPD) de SARA.";
 choices[86][2] = "Red sTESTA (secure Trans-European Services for Telematics between Administrations).";
 choices[86][3] = "Todos los anteriores son tipos de PdP.";
 answers[86] = choices[86][3];
 units[86] = "43";
 comments[86] = "Id Pregunta: 10730. ";


//  Id pregunta: 10735 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  Seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Reutilizaci&oacute;n de recursos de la informaci&oacute;n, &iquest;qu&eacute; usar&aacute;n los identificadores de recursos uniformes?";
 choices[87]= new Array();
 choices[87][0] = "HTTP o HTTPS";
 choices[87][1] = "XML";
 choices[87][2] = "Formatos libres";
 choices[87][3] = "Licencias Europeas de Libre utilizaci&oacute;n";
 answers[87] = choices[87][0];
 units[87] = "43";
 comments[87] = "Id Pregunta: 10735. ";


//  Id pregunta: 10773 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  Se&ntilde;ale la respuesta correcta. Seg&uacute;n se establece en la Ley de Firma Electr&oacute;nica 59/2003 en su art&iacute;culo 32, las multas establecidas al infractor ser&aacute;n de:";
 choices[88]= new Array();
 choices[88][0] = "Por la comisi&oacute;n de infracciones muy graves, multa de 150.001 a 600.000 euros, por la comisi&oacute;n de infracciones graves, se impondr&aacute; al infractor multa de 30.001 a 150.000 euros y por la comisi&oacute;n de infracciones leves, se impondr&aacute; al infractor una multa por importe de hasta 30.000 euros.";
 choices[88][1] = "Por la comisi&oacute;n de infracciones muy graves, multa de 60.001 a 600.000 euros, por la comisi&oacute;n de infracciones graves, se impondr&aacute; al infractor multa de 6.001 a 60.000 euros y por la comisi&oacute;n de infracciones leves, se impondr&aacute; al infractor una multa por importe de hasta 6.000 euros.";
 choices[88][2] = "Por la comisi&oacute;n de infracciones muy graves, multa de 120.001 a 600.000 euros, por la comisi&oacute;n de infracciones graves, se impondr&aacute; al infractor multa de 12.001 a 120.000 euros y por la comisi&oacute;n de infracciones leves, se impondr&aacute; al infractor una multa por importe de hasta 12.000 euros.";
 choices[88][3] = "Por la comisi&oacute;n de infracciones muy graves, multa de 150.001 a 600.000 euros, por la comisi&oacute;n de infracciones graves, se impondr&aacute; al infractor multa de 15.001 a 150.000 euros y por la comisi&oacute;n de infracciones leves, se impondr&aacute; al infractor una multa por importe de hasta 15.000 euros.";
 answers[88] = choices[88][0];
 units[88] = "30";
 comments[88] = "Id Pregunta: 10773. Examen GSI 2014";


//  Id pregunta: 11002 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  De las siguientes opciones, se&ntilde;ale cu&aacute;l es la que incluye extensiones que son todas admitidas de acuerdo con lo establecido en la Norma T&eacute;cnica de Interoperabilidad de Cat&aacute;logo de est&aacute;ndares:";
 choices[89]= new Array();
 choices[89][0] = ".xls, .xlsx, .doc, .docx";
 choices[89][1] = ".rar, .zip, .gz";
 choices[89][2] = ".jpg, .gif, .png, .tiff";
 choices[89][3] = ".mp3, .ogg, .mp4";
 answers[89] = choices[89][3];
 units[89] = "43";
 comments[89] = "Id Pregunta: 11002. TIC A1 AGE 2014";


//  Id pregunta: 11017 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  &iquest;Cu&aacute;ntos anexos incluye el RD 3/2010 (ENS)?";
 choices[90]= new Array();
 choices[90][0] = "Ninguno";
 choices[90][1] = "1";
 choices[90][2] = "2";
 choices[90][3] = "5";
 answers[90] = choices[90][3];
 units[90] = "30";
 comments[90] = "Id Pregunta: 11017. ";


//  Id pregunta: 11097 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  De acuerdo con el RD 1720/2007 del 11 de Junio, el l&iacute;mite de n&uacute;meros de accesos es una medida de seguridad que debe aplicarse cuando la informaci&oacute;n es de:";
 choices[91]= new Array();
 choices[91][0] = "Nivel b&aacute;sico";
 choices[91][1] = "Nivel medio";
 choices[91][2] = "Nivel alto";
 choices[91][3] = "Nivel muy alto";
 answers[91] = choices[91][1];
 units[91] = "29";
 comments[91] = "Id Pregunta: 11097. ";


//  Id pregunta: 11122 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;A que se refiere la gu&iacute;a CCN-STIC 804?";
 choices[92]= new Array();
 choices[92][0] = "Medidas de implantaci&oacute;n del ENS";
 choices[92][1] = "Plan de Adecuaci&oacute;n del ENS";
 choices[92][2] = "Auditor&iacute;a del ENS";
 choices[92][3] = "Normas de seguridad del ENS";
 answers[92] = choices[92][0];
 units[92] = "43";
 comments[92] = "Id Pregunta: 11122. ";


//  Id pregunta: 11194 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Cu&aacute;l de las siguientes iniciativas de la Estrategia Europa 2020 hace referencia al objetivo de crecimiento sostenible?";
 choices[93]= new Array();
 choices[93][0] = "Juventud en movimiento";
 choices[93][1] = "Una Europa que utilice eficazmente los recursos";
 choices[93][2] = "Plataforma Europea contra la pobreza";
 choices[93][3] = "Agenda Clim&aacute;tica para Europa";
 answers[93] = choices[93][1];
 units[93] = "30";
 comments[93] = "Id Pregunta: 11194. ";


//  Id pregunta: 11202 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l de los siguientes no es un pilar de la Agenda Digital Europea?";
 choices[94]= new Array();
 choices[94][0] = "Internacionalizaci&oacute;n de empresas tecnol&oacute;gicas";
 choices[94][1] = "Fomentar la alfabetizaci&oacute;n e inclusi&oacute;n digital";
 choices[94][2] = "Acceso r&aacute;pido y ultrarr&aacute;pido a internet";
 choices[94][3] = "Beneficios TIC para la Sociedad UE";
 answers[94] = choices[94][0];
 units[94] = "30";
 comments[94] = "Id Pregunta: 11202. ";


//  Id pregunta: 11208 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Cu&aacute;l es el porcentaje objetivo de personas que realicen compras online para 2015 seg&uacute;n la Agenda Digital Europea?";
 choices[95]= new Array();
 choices[95][0] = "0.2";
 choices[95][1] = "0.33";
 choices[95][2] = "0.5";
 choices[95][3] = "0.8";
 answers[95] = choices[95][2];
 units[95] = "30";
 comments[95] = "Id Pregunta: 11208. ";


//  Id pregunta: 11211 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;C&oacute;mo se denomina el plan espa&ntilde;ol que hace referencia al objetivo de Inclusi&oacute;n y alfabetizaci&oacute;n digital y profesionales TIC de la Agenda Digital Espa&ntilde;ola?";
 choices[96]= new Array();
 choices[96][0] = "Plan de Inclusi&oacute;n Digital y Empleabilidad";
 choices[96][1] = "Plan de Alfabetizaci&oacute;n Digital";
 choices[96][2] = "Plan de Alfabetizaci&oacute;n Digital y Empleabilidad";
 choices[96][3] = "Plan Integral de Inclusi&oacute;n Digital";
 answers[96] = choices[96][0];
 units[96] = "30";
 comments[96] = "Id Pregunta: 11211. ";


//  Id pregunta: 11488 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Cu&aacute;l de las siguientes formas de distribuci&oacute;n p&uacute;blica de un programa de ordenador no puede utilizarse legalmente como forma de explotaci&oacute;n?";
 choices[97]= new Array();
 choices[97][0] = "La compraventa del programa.";
 choices[97][1] = "La donaci&oacute;n del programa.";
 choices[97][2] = "El alquiler del programa.";
 choices[97][3] = "Todas las anteriores.";
 answers[97] = choices[97][3];
 units[97] = "36";
 comments[97] = "Id Pregunta: 11488. NULL";


//  Id pregunta: 11490 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Cada cu&aacute;nto tiempo debe de revisarse el cat&aacute;logo de est&aacute;ndares?";
 choices[98]= new Array();
 choices[98][0] = "2 veces al a&ntilde;o";
 choices[98][1] = "Cada a&ntilde;o";
 choices[98][2] = "Cada 2 a&ntilde;os";
 choices[98][3] = "Cada 3 a&ntilde;os";
 answers[98] = choices[98][1];
 units[98] = "43";
 comments[98] = "Id Pregunta: 11490. NULL";


//  Id pregunta: 11594 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  El metadato m&iacute;nimo obligatorio 'Origen' de un documento electr&oacute;nico indica:";
 choices[99]= new Array();
 choices[99][0] = "El &oacute;rgano generador del documento o que realiza la captura del mismo.";
 choices[99][1] = "La naturaleza del documento; esto es, si se trata de un original o una copia electr&oacute;nica.";
 choices[99][2] = "Si el contenido del documento fue creado por un ciudadano o por una administraci&oacute;n";
 choices[99][3] = "El lugar de procedencia del documento.";
 answers[99] = choices[99][2];
 units[99] = "43";
 comments[99] = "Id Pregunta: 11594. ";


