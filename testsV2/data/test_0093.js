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

//  Id pregunta: 10593 AÃ±o de creación de pregunta: 2016
 questions[0]= "1)  A nivel departamental, &iquest;qui&eacute;n es el responsable de la coordinaci&oacute;n interna para llevar a cabo la transformaci&oacute;n digital?";
 choices[0]= new Array();
 choices[0][0] = "Las CMADs (Comisi&oacute;n Ministerial de Administraci&oacute;n Digital)";
 choices[0][1] = "La CETIC";
 choices[0][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[0][3] = "El MHFP";
 answers[0] = choices[0][0];
 units[0] = "19";
 comments[0] = "Id Pregunta: 10593. Estrategia TIC";


//  Id pregunta: 10411 AÃ±o de creación de pregunta: 2016
 questions[1]= "2)  Es objeto de la Ley de Igualdad efectiva de mujeres y hombres:";
 choices[1]= new Array();
 choices[1][0] = "Elaborar medidas de acci&oacute;n positiva.";
 choices[1][1] = "Hacer efectivo el derecho de igualdad de trato y de oportunidades entre mujeres y hombre.";
 choices[1][2] = "Ninguna es correcta.";
 choices[1][3] = "A y B son correctas.";
 answers[1] = choices[1][1];
 units[1] = "14";
 comments[1] = "Id Pregunta: 10411. POLITICAS DE IGUALDAD";


//  Id pregunta: 10474 AÃ±o de creación de pregunta: 2016
 questions[2]= "3)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los interventores delegados ser&aacute;n designados entre funcionarios de los Cuerpos:";
 choices[2]= new Array();
 choices[2][0] = "Cuerpo Superior de Interventores y Auditores del Estado.";
 choices[2][1] = "Todas las respuestas son correctas.";
 choices[2][2] = "Cuerpo Militar de Intervenci&oacute;n de la Defensa.";
 choices[2][3] = "Cuerpo Superior de Intervenci&oacute;n y Contabilidad de Administraci&oacute;n de la Seguridad Social.";
 answers[2] = choices[2][1];
 units[2] = "10";
 comments[2] = "Id Pregunta: 10474. PRESUPUESTOS GENERALES";


//  Id pregunta: 10092 AÃ±o de creación de pregunta: 2016
 questions[3]= "4)  Seg&uacute;n AENOR, la certificaci&oacute;n es:";
 choices[3]= new Array();
 choices[3][0] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple los requisitos definidos en unas normas o especificaciones t&eacute;cnicas.";
 choices[3][1] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple con los requisitos legales para salir al mercado.";
 choices[3][2] = "La acci&oacute;n llevada a cabo por una entidad independiente de las partes interesadas mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio es beneficioso para los consumidores.";
 choices[3][3] = "La acci&oacute;n llevada a cabo por una entidad dependiente de la Administraci&oacute;n p&uacute;blica mediante la que se manifiesta que una organizaci&oacute;n, producto, proceso o servicio, cumple los requisitos definidos en unas normas o especificaciones t&eacute;cnicas.";
 answers[3] = choices[3][0];
 units[3] = "48";
 comments[3] = "Id Pregunta: 10092. AGE A1 2015";


//  Id pregunta: 10588 AÃ±o de creación de pregunta: 2016
 questions[4]= "5)  &iquest;Cu&aacute;ntos servicios se declararon compartidos en la primera declaraci&oacute;n?";
 choices[4]= new Array();
 choices[4][0] = "14";
 choices[4][1] = "11";
 choices[4][2] = "12";
 choices[4][3] = "15";
 answers[4] = choices[4][0];
 units[4] = "19";
 comments[4] = "Id Pregunta: 10588. Estrategia TIC";


//  Id pregunta: 10592 AÃ±o de creación de pregunta: 2016
 questions[5]= "6)  Seg&uacute;n el Plan de Transformaci&oacute;n Digital de la AGE, &iquest;con qu&eacute; frecuencia de realizar&aacute;n nuevas declaraciones de servicios compartidos?";
 choices[5]= new Array();
 choices[5][0] = "Anualmente";
 choices[5][1] = "Bienalmente";
 choices[5][2] = "Cada cuatro a&ntilde;os";
 choices[5][3] = "No se define ninguna periodicidad";
 answers[5] = choices[5][1];
 units[5] = "19";
 comments[5] = "Id Pregunta: 10592. Estrategia TIC. Se indica en la l&iacute;nea de acci&oacute;n 6";


//  Id pregunta: 10185 AÃ±o de creación de pregunta: 2016
 questions[6]= "7)  Se&ntilde;ale cu&aacute;l de las siguientes funciones NO est&aacute; atribuida constitucionalmente al Rey:";
 choices[6]= new Array();
 choices[6][0] = "El mando supremo de las Fuerzas Armadas.";
 choices[6][1] = "Autorizar indultos generales.";
 choices[6][2] = "Sancionar las leyes.";
 choices[6][3] = "Promulgar las leyes.";
 answers[6] = choices[6][1];
 units[6] = "1";
 comments[6] = "Id Pregunta: 10185. CONSTITUCION1978";


//  Id pregunta: 10481 AÃ±o de creación de pregunta: 2016
 questions[7]= "8)  A tenor del art&iacute;culo 48 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, podr&aacute; ser diferido el vencimiento de la obligaci&oacute;n de pago del precio de compra de bienes inmuebles adquiridos directamente cuyo importe excede de:";
 choices[7]= new Array();
 choices[7][0] = "Cuatro millones de euros.";
 choices[7][1] = "Seis millones de euros.";
 choices[7][2] = "Siete millones de euros.";
 choices[7][3] = "Cinco millones de euros.";
 answers[7] = choices[7][1];
 units[7] = "10";
 comments[7] = "Id Pregunta: 10481. PRESUPUESTOS GENERALES";


//  Id pregunta: 10271 AÃ±o de creación de pregunta: 2016
 questions[8]= "9)  La delegaci&oacute;n legislativa de las Cortes Generales en el Gobierno, cuando se trata de refundir varios textos legales en uno solo, deber&aacute; otorgarse mediante:";
 choices[8]= new Array();
 choices[8][0] = "Ley org&aacute;nica.";
 choices[8][1] = "Ley ordinaria.";
 choices[8][2] = "Ley de bases.";
 choices[8][3] = "Ley marco.";
 answers[8] = choices[8][0];
 units[8] = "1";
 comments[8] = "Id Pregunta: 10271. CONSTITUCION1978";


//  Id pregunta: 10418 AÃ±o de creación de pregunta: 2016
 questions[9]= "10)  Respetar&aacute;n la igualdad entre mujeres y hombres evitando cualquier forma de discriminaci&oacute;n, los medios de comunicaci&oacute;n de titularidad:";
 choices[9]= new Array();
 choices[9][0] = "P&uacute;blica.";
 choices[9][1] = "Privada.";
 choices[9][2] = "A y B son correctas.";
 choices[9][3] = "La P&uacute;blica y en ocasiones la Privada.";
 answers[9] = choices[9][2];
 units[9] = "14";
 comments[9] = "Id Pregunta: 10418. POLITICAS DE IGUALDAD";


//  Id pregunta: 10016 AÃ±o de creación de pregunta: 2016
 questions[10]= "11)  De acuerdo con la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos de comunicaciones electr&oacute;nicas y de redes p&uacute;blicas de comunicaci&oacute;n:";
 choices[10]= new Array();
 choices[10][0] = "Deben conservarse los datos que revelen el contenido de la comunicaci&oacute;n en virtud de lo establecido en la citada Ley.";
 choices[10][1] = "La obligaci&oacute;n de conservaci&oacute;n de datos cesa a los tres a&ntilde;os desde la fecha en que se haya producido la comunicaci&oacute;n.";
 choices[10][2] = "Los datos conservados de conformidad con lo dispuesto en la citada Ley pueden ser cedidos para los fines que en la misma se determinan previa autorizaci&oacute;n administrativa.";
 choices[10][3] = "Son sujetos obligados los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico o exploten redes p&uacute;blicas de comunicaciones.";
 answers[10] = choices[10][3];
 units[10] = "19";
 comments[10] = "Id Pregunta: 10016. AGE A1 2015";


//  Id pregunta: 10461 AÃ±o de creación de pregunta: 2016
 questions[11]= "12)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, a qui&eacute;n le corresponde aprobar y comprometer los gastos propios de los servicios a su cargo:";
 choices[11]= new Array();
 choices[11][0] = "A los ministros.";
 choices[11][1] = "Las respuestas a) y b) son correctas.";
 choices[11][2] = "Las respuestas a) y b) no son correctas.";
 choices[11][3] = "A los titulares de los &oacute;rganos del Estado.";
 answers[11] = choices[11][1];
 units[11] = "10";
 comments[11] = "Id Pregunta: 10461. PRESUPUESTOS GENERALES";


//  Id pregunta: 10679 AÃ±o de creación de pregunta: 2016
 questions[12]= "13)  De acuerdo a la Ley 27/2011, de 1 de agosto, sobre actualizaci&oacute;n, adecuaci&oacute;n y modernizaci&oacute;n del sistema de Seguridad Social, la edad exigida de jubilaci&oacute;n:";
 choices[12]= new Array();
 choices[12][0] = "A partir del a&ntilde;o 2020, ser&aacute; de 67 a&ntilde;os para quellas personas con un periodo cotizado menor de 38 a&ntilde;os y 6 meses, y de 65 a&ntilde;os para personas con un perido cotizado igual o superior a 38 a&ntilde;os y 6 meses.";
 choices[12][1] = "A partir del a&ntilde;o 2027, ser&aacute; de 67 a&ntilde;os para quellas personas con un periodo cotizado menor de 38 a&ntilde;os y 6 meses, y de 65 a&ntilde;os para personas con un perido cotizado igual o superior a 38 a&ntilde;os y 6 meses.";
 choices[12][2] = "A partir del a&ntilde;o 2027, ser&aacute; de 67 a&ntilde;os para todas las personas con independencia del periodo cotizado.";
 choices[12][3] = "Aumenta progresivamente desde los 65 a los 67 a&ntilde;os desde el a&ntilde;o 2013 al 2027, si bien se mantiene en los 65 a&ntilde;os para personas con un periodo cotizado igual o mayor a 35 a&ntilde;os.";
 answers[12] = choices[12][1];
 units[12] = "14";
 comments[12] = "Id Pregunta: 10679. Pensiones";


//  Id pregunta: 10277 AÃ±o de creación de pregunta: 2016
 questions[13]= "14)  Sobre el Consejo de Transparencia y Buen Gobierno:";
 choices[13]= new Array();
 choices[13][0] = "Tiene por finalidad promover la transparencia de la actividad p&uacute;blica, velar por el cumplimiento de las obligaciones de publicidad, salvaguardar el ejercicio de derecho de acceso a la informaci&oacute;n p&uacute;blica y garantizar la observancia de las disposiciones de buen gobierno.";
 choices[13][1] = "Estar&aacute; compuesto por los siguientes &oacute;rganos: la Comisi&oacute;n de Transparencia y Buen Gobierno y el Presidente del Consejo de Transparencia y Buen Gobierno que lo ser&aacute; tambi&eacute;n de su Comisi&oacute;n.";
 choices[13][2] = "Se rige, entre otras, por Ley 33/2003, de 3 de noviembre, del Patrimonio de las Administraciones P&uacute;blicas, y, en lo no previsto en ella, por el Derecho p&uacute;blico en sus adquisiciones patrimoniales.";
 choices[13][3] = "Entre sus funciones se encuentra evaluar el grado de aplicaci&oacute;n de esta Ley. Para ello, elaborar&aacute; anualmente una memoria en la que se incluir&aacute; informaci&oacute;n sobre el cumplimiento de las obligaciones previstas y que ser&aacute; presentada ante las Cortes Generales.";
 answers[13] = choices[13][2];
 units[13] = "22";
 comments[13] = "Id Pregunta: 10277. LEY DE TRANSPARENCIA";


//  Id pregunta: 10520 AÃ±o de creación de pregunta: 2016
 questions[14]= "15)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas se denomina:";
 choices[14]= new Array();
 choices[14][0] = "De los interesados en el procedimiento";
 choices[14][1] = "De la actividad de las Administraciones P&uacute;blicas";
 choices[14][2] = "Disposiciones generales";
 choices[14][3] = "De los actos administrativos";
 answers[14] = choices[14][2];
 units[14] = "7";
 comments[14] = "Id Pregunta: 10520. LEY 39/2015";


//  Id pregunta: 10103 AÃ±o de creación de pregunta: 2016
 questions[15]= "16)  En qu&eacute; consiste el principio BASE:";
 choices[15]= new Array();
 choices[15][0] = "Es equivalente al principio ACID (Atomicidad, Consistencia, Aislamiento y Durabilidad)";
 choices[15][1] = "Es de aplicaci&oacute;n a todo tipo de bases de datos como las relacionales";
 choices[15][2] = "No pueden existir inconsistencias temporales aunque progresen a un estado final estable";
 choices[15][3] = "Todas las anteriores son falsas";
 answers[15] = choices[15][3];
 units[15] = "73";
 comments[15] = "Id Pregunta: 10103. ";


//  Id pregunta: 10017 AÃ±o de creación de pregunta: 2016
 questions[16]= "17)  De acuerdo con el Reglamento por el que se desarrolla parcialmente la Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, aprobado por Real Decreto 1671/2009, de 6 de noviembre, se&ntilde;ale la respuesta correcta:";
 choices[16]= new Array();
 choices[16][0] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de emisi&oacute;n.";
 choices[16][1] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 12 meses desde la fecha de emisi&oacute;n.";
 choices[16][2] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de notificaci&oacute;n.";
 choices[16][3] = "Los documentos electr&oacute;nicos deben conservarse por el per&iacute;odo m&iacute;nimo que determine cada &oacute;rgano administrativo de acuerdo con el procedimiento administrativo de que se trate.";
 answers[16] = choices[16][3];
 units[16] = "44";
 comments[16] = "Id Pregunta: 10017. AGE A1 2015";


//  Id pregunta: 10114 AÃ±o de creación de pregunta: 2016
 questions[17]= "18)  &iquest;Qu&eacute; es la Garant&iacute;a Juvenil?";
 choices[17]= new Array();
 choices[17][0] = "Una iniciativa europea que pretende facilitar el acceso de los j&oacute;venes al mercado de trabajo ofreci&eacute;ndoles una oferta de empleo, de educaci&oacute;n o formaci&oacute;n tras haber finalizado sus estudios o quedar desempleados";
 choices[17][1] = "Un Plan que permite la concesi&oacute;n de subvenciones a j&oacute;venes para facilitar el alquiler de su vivienda habitual.";
 choices[17][2] = "Un Plan que concede cr&eacute;ditos en condiciones ventajosas a j&oacute;venes emprendedores";
 choices[17][3] = "Una inciativa europea que facilita a los j&oacute;venes el acceso a las nuevas tecnolog&iacute;as";
 answers[17] = choices[17][0];
 units[17] = "15";
 comments[17] = "Id Pregunta: 10114. ";


//  Id pregunta: 10450 AÃ±o de creación de pregunta: 2016
 questions[18]= "19)  Los Presupuestos Generales son expresi&oacute;n...";
 choices[18]= new Array();
 choices[18][0] = "Cifrada";
 choices[18][1] = "Conjunta";
 choices[18][2] = "Sistem&aacute;tica";
 choices[18][3] = "Todas son correctas";
 answers[18] = choices[18][3];
 units[18] = "10";
 comments[18] = "Id Pregunta: 10450. PRESUPUESTOS GENERALES";


//  Id pregunta: 10318 AÃ±o de creación de pregunta: 2016
 questions[19]= "20)  El personal de la Comisi&oacute;n se organiza en departamentos, conocidos como:";
 choices[19]= new Array();
 choices[19][0] = "Consejos y Servicios.";
 choices[19][1] = "Servicios permanentes y no permanentes.";
 choices[19][2] = "Direcciones Generales.";
 choices[19][3] = "Direcciones ministeriales.";
 answers[19] = choices[19][2];
 units[19] = "5";
 comments[19] = "Id Pregunta: 10318. UNION EUROPEA";


//  Id pregunta: 10073 AÃ±o de creación de pregunta: 2016
 questions[20]= "21)  Seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Digitalizaci&oacute;n de Documentos, &iquest;cu&aacute;l de los siguientes metadatos no es considerado como metadato complementario?";
 choices[20]= new Array();
 choices[20][0] = "Resoluci&oacute;n, que indica el valor de resoluci&oacute;n en p&iacute;xeles por pulgada empleada en la digitalizaci&oacute;n.";
 choices[20][1] = "Origen, que indica si el contenido del documento fue creado por un ciudadano o por una administraci&oacute;n.";
 choices[20][2] = "Tama&ntilde;o, que indica el valor y unidades del tama&ntilde;o l&oacute;gico del documento digitalizado.";
 choices[20][3] = "Idioma, que indica el idioma del contenido del documento digitalizado.";
 answers[20] = choices[20][1];
 units[20] = "44";
 comments[20] = "Id Pregunta: 10073. AGE A1 2015";


//  Id pregunta: 10431 AÃ±o de creación de pregunta: 2016
 questions[21]= "22)  En el supuesto de que una empresa haga publicidad enga&ntilde;osa de sus acciones de responsabilidad en materia de igualdad, podr&aacute;n ejercer la acci&oacute;n de cesaci&oacute;n cuando se considere:";
 choices[21]= new Array();
 choices[21][0] = "El Instituto de la Mujer.";
 choices[21][1] = "&Oacute;rganos equivalentes al anterior pertenecientes a las CCAA.";
 choices[21][2] = "Ambas son correctas.";
 choices[21][3] = "A y B son incorrectas.";
 answers[21] = choices[21][2];
 units[21] = "14";
 comments[21] = "Id Pregunta: 10431. POLITICAS DE IGUALDAD";


//  Id pregunta: 10284 AÃ±o de creación de pregunta: 2016
 questions[22]= "23)  Se&ntilde;ale la respuesta falsa:";
 choices[22]= new Array();
 choices[22][0] = "El mercado interior europeo que tiene una repercusi&oacute;n positiva en el crecimiento de la econom&iacute;a y del empleo.";
 choices[22][1] = "En mayo de 2015 la Comisi&oacute;n Europea anunci&oacute; la Estrategia para el Mercado &Uacute;nico Digital, destinada a responder a los retos de la econom&iacute;a digital.";
 choices[22][2] = "La Comisi&oacute;n propone una nueva estrategia de comercio e inversi&oacute;n para la Uni&oacute;n Europea, con el t&iacute;tulo &laquo;Comercio para todos: Hacia una pol&iacute;tica de comercio e inversi&oacute;n m&aacute;s sostenible&raquo;.";
 choices[22][3] = "En septiembre de 2015 se ha publicado el plan de acci&oacute;n para la creaci&oacute;n de la Uni&oacute;n de los Mercados de Capitales.";
 answers[22] = choices[22][2];
 units[22] = "5";
 comments[22] = "Id Pregunta: 10284. UNION EUROPEA";


//  Id pregunta: 10594 AÃ±o de creación de pregunta: 2016
 questions[23]= "24)  Son excepciones singulares en la utilizaci&oacute;n de los medios y servicios compartidos:";
 choices[23]= new Array();
 choices[23][0] = "Seguridad Social y AEAT";
 choices[23][1] = "IGAE (Servicios Inform&aacute;tica Presupuestaria)";
 choices[23][2] = "Medios y servicios espec&iacute;ficos que afecten a defensa, consulta pol&iacute;tica, situaciones de crisis y seguridad del Estado y los que manejen informaci&oacute;n clasificada";
 choices[23][3] = "Todos los anteriores";
 answers[23] = choices[23][3];
 units[23] = "19";
 comments[23] = "Id Pregunta: 10594. Estrategia TIC";


//  Id pregunta: 10292 AÃ±o de creación de pregunta: 2016
 questions[24]= "25)  Indique la afirmaci&oacute;n correcta relativa al Parlamento Europeo:";
 choices[24]= new Array();
 choices[24][0] = "Se reunir&aacute; con previa convocatoria el segundo martes de marzo.";
 choices[24][1] = "Se reunir&aacute; sin necesidad de previa convocatoria el segundo martes de marzo.";
 choices[24][2] = "Se reunir&aacute; la segunda semana de enero con previa convocatoria.";
 choices[24][3] = "Se reunir&aacute; la tercera semana de enero sin previa convocatoria.";
 answers[24] = choices[24][1];
 units[24] = "5";
 comments[24] = "Id Pregunta: 10292. UNION EUROPEA";


//  Id pregunta: 10605 AÃ±o de creación de pregunta: 2016
 questions[25]= "26)  En ITIL v3, entre los procesos de la &ldquo;Fase del Ciclo de Vida: Dise&ntilde;o del Servicio&rdquo;, est&aacute;n:";
 choices[25]= new Array();
 choices[25][0] = "Gesti&oacute;n del Cat&aacute;logo de Servicios y Gesti&oacute;n de la Cartera de Servicios.";
 choices[25][1] = "Gesti&oacute;n de la Cartera de Servicio y Gesti&oacute;n de la Seguridad de la Informaci&oacute;n.";
 choices[25][2] = "Gesti&oacute;n de la Disponibilidad y Gesti&oacute;n de la Capacidad.";
 choices[25][3] = "Gesti&oacute;n de Suministradores y Gesti&oacute;n de Eventos.";
 answers[25] = choices[25][2];
 units[25] = "101";
 comments[25] = "Id Pregunta: 10605. Junta de Extremadura A1 2015";


//  Id pregunta: 10051 AÃ±o de creación de pregunta: 2016
 questions[26]= "27)  De acuerdo con el Real Decreto 1720/2007 indique qu&eacute; medida ha de ser aplicada obligatoriamente a los ficheros de los que sean responsables las Administraciones tributarias en el ejercicio de sus potestades tributarias:";
 choices[26]= new Array();
 choices[26][0] = "Cifrado de las comunicaciones";
 choices[26][1] = "Al menos, una auditor&iacute;a bienal (cada 2 a&ntilde;os)";
 choices[26][2] = "Registro de los accesos";
 choices[26][3] = "No queda regulado en dicho Real Decreto al depender de la criticidad del fichero.";
 answers[26] = choices[26][1];
 units[26] = "35";
 comments[26] = "Id Pregunta: 10051. AGE A1 2015. Pregunta anulada en el examen real, ya que la opci&oacute;n B dec&iacute;a &quot;bianual&quot; en lugar de &quot;bienal&quot;";


//  Id pregunta: 10038 AÃ±o de creación de pregunta: 2016
 questions[27]= "28)  LAMP es el acr&oacute;nimo usado para describir un sistema de infraestructura de internet aplicable a la pila:";
 choices[27]= new Array();
 choices[27][0] = "Linux, Ant, MySQL/MariaDB y PJava";
 choices[27][1] = "Linux, Apache, Microsoft SQLServer y Perl, PHP, o Python";
 choices[27][2] = "Linux, Ant, MongoDB y Perl, PHP, o Python";
 choices[27][3] = "Linux, Apache, MySQL/MariaDB y Perl, PHP, o Python";
 answers[27] = choices[27][3];
 units[27] = "62";
 comments[27] = "Id Pregunta: 10038. AGE A1 2015";


//  Id pregunta: 10446 AÃ±o de creación de pregunta: 2016
 questions[28]= "29)  Dentro de la l&oacute;gica presupuestaria, los ingresos tienen car&aacute;cter...";
 choices[28]= new Array();
 choices[28][0] = "Ejecutivo";
 choices[28][1] = "Limitativo";
 choices[28][2] = "Estimativo";
 choices[28][3] = "Progresivo";
 answers[28] = choices[28][2];
 units[28] = "10";
 comments[28] = "Id Pregunta: 10446. PRESUPUESTOS GENERALES";


//  Id pregunta: 10152 AÃ±o de creación de pregunta: 2016
 questions[29]= "30)  Los documentos electr&oacute;nicos deber&aacute;n conservarse en un formato que permita: (se&ntilde;ala la respuesta incorrecta)";
 choices[29]= new Array();
 choices[29][0] = "garantizar su consulta hasta transcurridos cinco a&ntilde;os desde su emisi&oacute;n";
 choices[29][1] = "garantizar la conservaci&oacute;n del documento";
 choices[29][2] = "garantizar la autenticidad del documento";
 choices[29][3] = "garantizar la integridad del documento";
 answers[29] = choices[29][0];
 units[29] = "7";
 comments[29] = "Id Pregunta: 10152. Ley 39/2015, Art&iacute;culo 17";


//  Id pregunta: 10551 AÃ±o de creación de pregunta: 2016
 questions[30]= "31)  &iquest;Cu&aacute;l es el &oacute;rgano t&eacute;cnico de cooperaci&oacute;n de la Administraci&oacute;n General del Estado, de las Administraciones de las Comunidades Aut&oacute;nomas y de las Entidades Locales en materia de administraci&oacute;n electr&oacute;nica definido en la ley 40/2015 de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[30]= new Array();
 choices[30][0] = "La Conferencia Sectorial de Telecomunicaciones y Sociedad de la Informaci&oacute;n";
 choices[30][1] = "El Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica";
 choices[30][2] = "La Comisi&oacute;n Sectorial de administraci&oacute;n electr&oacute;nica";
 choices[30][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[30] = choices[30][2];
 units[30] = "26";
 comments[30] = "Id Pregunta: 10551. Gobernanza TIC";


//  Id pregunta: 10328 AÃ±o de creación de pregunta: 2016
 questions[31]= "32)  El principal &oacute;rgano decisorio de la Comunidad Europea es:";
 choices[31]= new Array();
 choices[31][0] = "El Presidente del Consejo Europeo.";
 choices[31][1] = "La Comisi&oacute;n.";
 choices[31][2] = "El Consejo.";
 choices[31][3] = "El Parlamento Europeo.";
 answers[31] = choices[31][2];
 units[31] = "5";
 comments[31] = "Id Pregunta: 10328. UNION EUROPEA";


//  Id pregunta: 10576 AÃ±o de creación de pregunta: 2016
 questions[32]= "33)  Se&ntilde;ale, de entre los siguientes, cu&aacute;l es un gestor de base de datos relacional:";
 choices[32]= new Array();
 choices[32][0] = "PostgreSQL";
 choices[32][1] = "Datawarehouse";
 choices[32][2] = "Snowflake";
 choices[32][3] = "CouchDB";
 answers[32] = choices[32][0];
 units[32] = "61";
 comments[32] = "Id Pregunta: 10576. Tema 61. TAI 2016.";


//  Id pregunta: 10676 AÃ±o de creación de pregunta: 2016
 questions[33]= "34)  Es un Servicio previsto en la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia:";
 choices[33]= new Array();
 choices[33][0] = "El servicio de teleasistencia.";
 choices[33][1] = "El servicio de ayuda a domicilio.";
 choices[33][2] = "El servicio de centro de d&iacute;a y de noche.";
 choices[33][3] = "Todas las anteriores son correctas.";
 answers[33] = choices[33][3];
 units[33] = "14";
 comments[33] = "Id Pregunta: 10676. Dependencia";


//  Id pregunta: 10643 AÃ±o de creación de pregunta: 2016
 questions[34]= "35)  La generalizaci&oacute;n es el tipo de interrelaci&oacute;n que existe entre un tipo de entidad, supertipo, y los tipos de entidad m&aacute;s espec&iacute;ficos (subtipos) que dependen de &eacute;l. Las cardinalidades m&aacute;ximas y m&iacute;nimas son siempre:";
 choices[34]= new Array();
 choices[34][0] = "(0,1) en el supertipo y (0,1) en los subtipos.";
 choices[34][1] = "(1,1) en el supertipo y (1,1) en los subtipos.";
 choices[34][2] = "(1,1) en el supertipo y (0,1) en los subtipos.";
 choices[34][3] = "(0,1) en el supertipo y (1,1) en los subtipos.";
 answers[34] = choices[34][2];
 units[34] = "85";
 comments[34] = "Id Pregunta: 10643. Junta de Extremadura A1 2015";


//  Id pregunta: 10255 AÃ±o de creación de pregunta: 2016
 questions[35]= "36)  La soberan&iacute;a nacional reside en:";
 choices[35]= new Array();
 choices[35][0] = "el Parlamento nacional.";
 choices[35][1] = "el Parlamento auton&oacute;mico o Asamblea.";
 choices[35][2] = "el pueblo espa&ntilde;ol.";
 choices[35][3] = "el Congreso y el Senado.";
 answers[35] = choices[35][3];
 units[35] = "1";
 comments[35] = "Id Pregunta: 10255. CONSTITUCION1978";


//  Id pregunta: 10510 AÃ±o de creación de pregunta: 2016
 questions[36]= "37)  La presente Ley tiene por objeto regular: (se&ntilde;ala la incorrecta)";
 choices[36]= new Array();
 choices[36][0] = "Los requisitos de validez y eficacia de los actos administrativos";
 choices[36][1] = "El procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas, incluyendo el sancionador y el de reclamaci&oacute;n de responsabilidad de las Administraciones P&uacute;blicas";
 choices[36][2] = "Las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[36][3] = "Los principios a los que se ha de ajustar el ejercicio de la iniciativa legislativa y la potestad reglamentaria";
 answers[36] = choices[36][2];
 units[36] = "7";
 comments[36] = "Id Pregunta: 10510. LEY 39/2015";


//  Id pregunta: 10172 AÃ±o de creación de pregunta: 2016
 questions[37]= "38)  La Constituci&oacute;n Espa&ntilde;ola reconoce el derecho de reuni&oacute;n:";
 choices[37]= new Array();
 choices[37][0] = "Pac&iacute;fica y sin armas pero con necesidad de autorizaci&oacute;n previa.";
 choices[37][1] = "En lugares de tr&aacute;nsito p&uacute;blico previa autorizaci&oacute;n de la autoridad.";
 choices[37][2] = "En los casos de reuniones en lugares de tr&aacute;nsito p&uacute;blico y manifestaciones se dar&aacute; comunicaci&oacute;n previa a la autoridad.";
 choices[37][3] = "No es preciso realizar ninguna actuaci&oacute;n.";
 answers[37] = choices[37][2];
 units[37] = "1";
 comments[37] = "Id Pregunta: 10172. CONSTITUCION1978";


//  Id pregunta: 10603 AÃ±o de creación de pregunta: 2016
 questions[38]= "39)  Seg&uacute;n ITILv3 , el objetivo principal del Dise&ntilde;o del Servicio es:";
 choices[38]= new Array();
 choices[38][0] = "El dise&ntilde;o de servicios nuevos para su paso a un entorno de producci&oacute;n.";
 choices[38][1] = "El dise&ntilde;o de servicios nuevos para su paso a un entorno seguro.";
 choices[38][2] = "El dise&ntilde;o de servicios nuevos o modificados para su paso a un entorno seguro.";
 choices[38][3] = "El dise&ntilde;o de servicios nuevos o modificados para su paso a un entorno de producci&oacute;n.";
 answers[38] = choices[38][3];
 units[38] = "101";
 comments[38] = "Id Pregunta: 10603. Junta de Extremadura A1 2015";


//  Id pregunta: 10494 AÃ±o de creación de pregunta: 2016
 questions[39]= "40)  Seg&uacute;n la Ley General Presupuestaria, con car&aacute;cter excepcional podr&aacute;n generar cr&eacute;dito en el Presupuesto del ejercicio los ingresos realizados:";
 choices[39]= new Array();
 choices[39][0] = "Por reembolso de pr&eacute;stamos.";
 choices[39][1] = "Por la venta de bienes.";
 choices[39][2] = "En el &uacute;ltimo trimestre del ejercicio anterior.";
 choices[39][3] = "Por prestaci&oacute;n de servicios.";
 answers[39] = choices[39][2];
 units[39] = "10";
 comments[39] = "Id Pregunta: 10494. PRESUPUESTOS GENERALES";


//  Id pregunta: 10314 AÃ±o de creación de pregunta: 2016
 questions[40]= "41)  Indique a qui&eacute;n corresponde la funci&oacute;n de ejecutar el presupuesto de la Uni&oacute;n Europea:";
 choices[40]= new Array();
 choices[40][0] = "Al Consejo Europeo.";
 choices[40][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[40][2] = "A la Comisi&oacute;n Europea.";
 choices[40][3] = "Al Parlamento Europeo.";
 answers[40] = choices[40][2];
 units[40] = "5";
 comments[40] = "Id Pregunta: 10314. UNION EUROPEA";


//  Id pregunta: 10251 AÃ±o de creación de pregunta: 2016
 questions[41]= "42)  La Justicia, en Espa&ntilde;a, emana del/de la:";
 choices[41]= new Array();
 choices[41][0] = "Rey.";
 choices[41][1] = "&Oacute;rgano jurisdiccional que act&uacute;a en cada caso.";
 choices[41][2] = "Constituci&oacute;n.";
 choices[41][3] = "Pueblo.";
 answers[41] = choices[41][2];
 units[41] = "1";
 comments[41] = "Id Pregunta: 10251. CONSTITUCION1978";


//  Id pregunta: 10213 AÃ±o de creación de pregunta: 2016
 questions[42]= "43)  Seg&uacute;n el Art&iacute;culo 59 de la Constituci&oacute;n espa&ntilde;ola, ser&aacute; v&aacute;lida la Regencia nombrada por las Cortes Generales que se componga del siguiente n&uacute;mero de personas:";
 choices[42]= new Array();
 choices[42][0] = "Cinco.";
 choices[42][1] = "Dos.";
 choices[42][2] = "Cuatro.";
 choices[42][3] = "Siete.";
 answers[42] = choices[42][0];
 units[42] = "1";
 comments[42] = "Id Pregunta: 10213. CONSTITUCION1978";


//  Id pregunta: 10681 AÃ±o de creación de pregunta: 2016
 questions[43]= "44)  El Factor de Sostenibilidad, de acuerdo a la Ley 23/2013, de 23 de diciembre, reguladora del Factor de Sostenibilidad y del &Iacute;ndice de Revalorizaci&oacute;n del Sistema de Pensiones de la Seguridad Social:";
 choices[43]= new Array();
 choices[43][0] = "Es un valor que se calcula para cada periodo de 3 a&ntilde;os, comenzando en el a&ntilde;o 2016.";
 choices[43][1] = "Es un instrumento que con car&aacute;cter autom&aacute;tico permite vincular el importe de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a la evoluci&oacute;n del PIB y otros datos macroecon&oacute;micos.";
 choices[43][2] = "Es un instrumento que con car&aacute;cter autom&aacute;tico permite vincular el importe de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a la esperanza de vida de los pensionistas.";
 choices[43][3] = "Se aplicar&aacute; para determinar la cuant&iacute;a de las pensiones de jubilaci&oacute;n del sistema de la Seguridad Social a partir del 1 de Enero del a&ntilde;o 2018.";
 answers[43] = choices[43][2];
 units[43] = "14";
 comments[43] = "Id Pregunta: 10681. Pensiones";


//  Id pregunta: 10100 AÃ±o de creación de pregunta: 2016
 questions[44]= "45)  Entre los tipos de Bases de Datos NoSQL no se encuentran:";
 choices[44]= new Array();
 choices[44][0] = "Bases de datos orientadas a filas";
 choices[44][1] = "Bases de datos orientadas a documentos";
 choices[44][2] = "Bases de datos de clave/valor";
 choices[44][3] = "Bases de datos orientadas a objetos";
 answers[44] = choices[44][0];
 units[44] = "73";
 comments[44] = "Id Pregunta: 10100. ";


//  Id pregunta: 10475 AÃ±o de creación de pregunta: 2016
 questions[45]= "46)  De conformidad con el art&iacute;culo 29.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales se remitir&aacute;n:";
 choices[45]= new Array();
 choices[45][0] = "Anualmente.";
 choices[45][1] = "Ninguna de las respuestas es correcta.";
 choices[45][2] = "Trimestralmente.";
 choices[45][3] = "Semestralmente.";
 answers[45] = choices[45][0];
 units[45] = "10";
 comments[45] = "Id Pregunta: 10475. PRESUPUESTOS GENERALES";


//  Id pregunta: 10124 AÃ±o de creación de pregunta: 2016
 questions[46]= "47)  Se&ntilde;ale la VERDADERA con respecto a las las reclamaciones ante el Consejo de Transparencia y Buen Gobierno:";
 choices[46]= new Array();
 choices[46][0] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de tres meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[46][1] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de seis meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[46][2] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[46][3] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; estimada";
 answers[46] = choices[46][0];
 units[46] = "22";
 comments[46] = "Id Pregunta: 10124. ";


//  Id pregunta: 10257 AÃ±o de creación de pregunta: 2016
 questions[47]= "48)  El Art&iacute;culo 98 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que el Gobierno Espa&ntilde;ol se compone de:";
 choices[47]= new Array();
 choices[47][0] = "El Presidente y su gabinete.";
 choices[47][1] = "El Presidente y sus Ministros.";
 choices[47][2] = "El Rey y el Presidente.";
 choices[47][3] = "El Presidente, de los Vicepresidentes en su caso, de los Ministros y dem&aacute;s miembros que establezca la ley.";
 answers[47] = choices[47][2];
 units[47] = "1";
 comments[47] = "Id Pregunta: 10257. CONSTITUCION1978";


//  Id pregunta: 10544 AÃ±o de creación de pregunta: 2016
 questions[48]= "49)  &iquest;Cu&aacute;l es el &oacute;rgano superior de gobernanza TIC en la Administraci&oacute;n General del Estado?";
 choices[48]= new Array();
 choices[48][0] = "El Comit&eacute; de Direcci&oacute;n TIC";
 choices[48][1] = "El Consejo Superior de Administraci&oacute;n Electr&oacute;nica";
 choices[48][2] = "La Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[48][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[48] = choices[48][3];
 units[48] = "26";
 comments[48] = "Id Pregunta: 10544. Gobernanza TIC";


//  Id pregunta: 10107 AÃ±o de creación de pregunta: 2016
 questions[49]= "50)  Son bases de datos NoSQL orientadas a objetos:";
 choices[49]= new Array();
 choices[49][0] = "GemStone";
 choices[49][1] = "Zope Object DB";
 choices[49][2] = "Las dos anteriores";
 choices[49][3] = "Solo B)";
 answers[49] = choices[49][2];
 units[49] = "73";
 comments[49] = "Id Pregunta: 10107. ";


//  Id pregunta: 10161 AÃ±o de creación de pregunta: 2016
 questions[50]= "51)  Se&ntilde;alar cu&aacute;l NO es uno de los principios del Plan de Acci&oacute;n de Administraci&oacute;n Electr&oacute;nica 2016-2020";
 choices[50]= new Array();
 choices[50][0] = "Principio de solo una vez";
 choices[50][1] = "Apertura y transparencia";
 choices[50][2] = "Confianza y seguridad";
 choices[50][3] = "Estandarizaci&oacute;n de forma predeterminada";
 answers[50] = choices[50][3];
 units[50] = "19";
 comments[50] = "Id Pregunta: 10161. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2016/Junio/Noticia-2016-06-02-Plan-accion-administracion-electronica-2016-2020.html#.WCjvuWrhDIU";


//  Id pregunta: 10160 AÃ±o de creación de pregunta: 2016
 questions[51]= "52)  El mercado &uacute;nico digital se basa en tres pilares. Se&ntilde;ale cu&aacute;l NO es uno de los tres pilares.";
 choices[51]= new Array();
 choices[51][0] = "Mejorar el acceso de consumidores y empresas a los bienes y servicios digitales en toda Europa.";
 choices[51][1] = "Promover la actualizaci&oacute;n de las normas de accesibilidad hacia WCAG 3.0 por una sociedad m&aacute;s incluyente.";
 choices[51][2] = "Creaci&oacute;n de las condiciones adecuadas y la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan florecer";
 choices[51][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[51] = choices[51][1];
 units[51] = "19";
 comments[51] = "Id Pregunta: 10160. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Mayo/Noticia-2015-05-07-estrategia-mercado-unico-digital-europeo.html#.WCjr0mrhDIU";


//  Id pregunta: 10049 AÃ±o de creación de pregunta: 2016
 questions[52]= "53)  &iquest;Qu&eacute; facilita un ORM?";
 choices[52]= new Array();
 choices[52][0] = "Conversi&oacute;n de objetos a tablas relacionales";
 choices[52][1] = "Conversi&oacute;n de objetos a documentos";
 choices[52][2] = "Conversi&oacute;n de tipos de driver JDBC";
 choices[52][3] = "Conversi&oacute;n de ADO.NET a OLE DB";
 answers[52] = choices[52][0];
 units[52] = "62";
 comments[52] = "Id Pregunta: 10049. AGE A1 2015";


//  Id pregunta: 10052 AÃ±o de creación de pregunta: 2016
 questions[53]= "54)  Las normas ISO que cubren los procesos de especificaci&oacute;n de requisitos de calidad del software y evaluaci&oacute;n de la calidad del software corresponden a la serie:";
 choices[53]= new Array();
 choices[53][0] = "ISO/IEC 25000";
 choices[53][1] = "ISO/IEC 27000";
 choices[53][2] = "ISO 9000";
 choices[53][3] = "ISO 9001";
 answers[53] = choices[53][0];
 units[53] = "93";
 comments[53] = "Id Pregunta: 10052. AGE A1 2015";


//  Id pregunta: 10173 AÃ±o de creación de pregunta: 2016
 questions[54]= "55)  Seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola, la cuesti&oacute;n de confianza planteada por el Presidente del Gobierno, se entender&aacute; otorgada cuando vote a su favor la mayor&iacute;a:";
 choices[54]= new Array();
 choices[54][0] = "absoluta de las Cortes Generales.";
 choices[54][1] = "absoluta del Congreso de los Diputados.";
 choices[54][2] = "simple de las Cortes Generales.";
 choices[54][3] = "simple del Congreso de los Diputados.";
 answers[54] = choices[54][3];
 units[54] = "1";
 comments[54] = "Id Pregunta: 10173. CONSTITUCION1978";


//  Id pregunta: 10430 AÃ±o de creación de pregunta: 2016
 questions[55]= "56)  En el acceso a bienes y servicios, ning&uacute;n contratante podr&aacute; indagar sobre la situaci&oacute;n de embarazo de una mujer demandante del mismo, salvo por razones de:";
 choices[55]= new Array();
 choices[55][0] = "Incompatibilidad del puesto con una baja maternal.";
 choices[55][1] = "Protecci&oacute;n de su salud.";
 choices[55][2] = "Ninguna es correcta.";
 choices[55][3] = "A y B son correctas.";
 answers[55] = choices[55][1];
 units[55] = "14";
 comments[55] = "Id Pregunta: 10430. POLITICAS DE IGUALDAD";


//  Id pregunta: 10186 AÃ±o de creación de pregunta: 2016
 questions[56]= "57)  En cuanto a las fuentes del derecho, las normas jur&iacute;dicas contenidas en los tratados internacionales:";
 choices[56]= new Array();
 choices[56][0] = "ser&aacute;n de aplicaci&oacute;n directa en Espa&ntilde;a-";
 choices[56][1] = "ser&aacute;n de aplicaci&oacute;n directa y pasar&aacute;n a formar parte del ordenamiento interno una vez ratificadas por Espa&ntilde;a.";
 choices[56][2] = "no ser&aacute;n de aplicaci&oacute;n directa en Espapa en tanto no hayan pasado a formar parte ddel ordenamiento interno mediante su publicaci&oacute;n oficial en Espa&ntilde;a.";
 choices[56][3] = "ratificados por Espala y publicadas en el BOE, no son fuente de derecho.";
 answers[56] = choices[56][2];
 units[56] = "1";
 comments[56] = "Id Pregunta: 10186. CONSTITUCION1978";


//  Id pregunta: 10058 AÃ±o de creación de pregunta: 2016
 questions[57]= "58)  Se&ntilde;ale cu&aacute;l de los siguientes apartados NO ha sido declarado como servicio compartido en la Administraci&oacute;n General del Estado:";
 choices[57]= new Array();
 choices[57][0] = "Servicio com&uacute;n de gesti&oacute;n econ&oacute;mico-presupuestaria";
 choices[57][1] = "Servicio com&uacute;n de georreferenciaci&oacute;n";
 choices[57][2] = "Servicio de seguridad gestionada";
 choices[57][3] = "Servicio de gesti&oacute;n de notificaciones";
 answers[57] = choices[57][1];
 units[57] = "26";
 comments[57] = "Id Pregunta: 10058. AGE A1 2015";


//  Id pregunta: 10547 AÃ±o de creación de pregunta: 2016
 questions[58]= "59)  La gobernanza TIC incluye, entre otros, los siguientes aspectos:";
 choices[58]= new Array();
 choices[58][0] = "Integrar la estrategia TIC con la de negocio";
 choices[58][1] = "Adoptar e implantar un marco de control de las TIC";
 choices[58][2] = "Proporcionar las estructuras organizativas encargadas de implantar la estrategia TIC";
 choices[58][3] = "Todas las anteriores";
 answers[58] = choices[58][3];
 units[58] = "26";
 comments[58] = "Id Pregunta: 10547. Gobernanza TIC";


//  Id pregunta: 10378 AÃ±o de creación de pregunta: 2016
 questions[59]= "60)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[59]= new Array();
 choices[59][0] = "Quince miembros.";
 choices[59][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[59][2] = "Los miembros que determine el Consejo.";
 choices[59][3] = "Un Presidente y quince miembros.";
 answers[59] = choices[59][1];
 units[59] = "14";
 comments[59] = "Id Pregunta: 10378. UNION EUROPEA";


//  Id pregunta: 10343 AÃ±o de creación de pregunta: 2016
 questions[60]= "61)  &iquest;Cu&aacute;l es el n&uacute;mero m&iacute;nimo de parlamentarios de cinco Estados miembros para constituir un grupo pol&iacute;tico?:";
 choices[60]= new Array();
 choices[60][0] = "23";
 choices[60][1] = "20";
 choices[60][2] = "14";
 choices[60][3] = "18";
 answers[60] = choices[60][1];
 units[60] = "5";
 comments[60] = "Id Pregunta: 10343. UNION EUROPEA";


//  Id pregunta: 10651 AÃ±o de creación de pregunta: 2016
 questions[61]= "62)  &iquest;Qu&eacute; propiedades ofrecen las conexiones VPN que usan protocolos como PPTP, L2TP/IPsec y SSTP?";
 choices[61]= new Array();
 choices[61][0] = "Encapsulaci&oacute;n y autenticaci&oacute;n.";
 choices[61][1] = "Encapsulaci&oacute;n y cifrado de datos.";
 choices[61][2] = "Autenticaci&oacute;n y cifrado de datos.";
 choices[61][3] = "Encapsulaci&oacute;n, autenticaci&oacute;n y cifrado de datos.";
 answers[61] = choices[61][3];
 units[61] = "120";
 comments[61] = "Id Pregunta: 10651. Junta de Extremadura A1 2015";


//  Id pregunta: 10485 AÃ±o de creación de pregunta: 2016
 questions[62]= "63)  Se&ntilde;ale la respuesta incorrecta respecto de la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[62]= new Array();
 choices[62][0] = "El principio de dotaci&oacute;n presupuestaria implica que los Presupuestos Generales del Estado de cada ejercicio contendr&aacute;n los cr&eacute;ditos necesarios para atender a las transferencias de medios econ&oacute;micos que deban realizarse a las comunidades aut&oacute;nomas por aplicaci&oacute;n del sistema de financiaci&oacute;n vigente en cada momento.";
 choices[62][1] = "Los cr&eacute;ditos para hacer efectivas las liquidaciones definitivas de ejercicios anteriores tendr&aacute;n el car&aacute;cter de ampliables.";
 choices[62][2] = "El reintegro de ayudas y la responsabilidad financiera derivados de la gesti&oacute;n de los fondos procedentes de la Uni&oacute;n Europea se someter&aacute; a lo previsto en la Ley General de Subvenciones y en la normativa comunitaria.";
 choices[62][3] = "Los anticipos para ejecuci&oacute;n de acciones y programas financiados o cofinanciados por fondos europeos que estuvieran pendientes de cancelar al finalizar el ejercicio, no podr&aacute;n cancelarse en el ejercicio siguiente.";
 answers[62] = choices[62][3];
 units[62] = "10";
 comments[62] = "Id Pregunta: 10485. PRESUPUESTOS GENERALES";


//  Id pregunta: 10288 AÃ±o de creación de pregunta: 2016
 questions[63]= "64)  Cu&aacute;l no es uno de los pilares que cimientan el Plan de Acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[63]= new Array();
 choices[63][0] = "Configuraci&oacute;n de un marco que habilite la movilidad transfronteriza mediante los servicios p&uacute;blicos digitales;";
 choices[63][1] = "Facilitar la interacci&oacute;n digital con ciudadanos y empresas mediante AA.PP. abiertas y flexibles que impliquen a los actores interesados en el dise&ntilde;o de pol&iacute;ticas y servicios de una forma colaborativa;";
 choices[63][2] = "Sociedad digital integradora, donde los ciudadanos tengan las cualificaciones adecuadas para aprovechar las oportunidades ofrecidas por Internet.";
 choices[63][3] = "Puesta a disposici&oacute;n de habilitadores y facilitadores claves, servicios y activos reutilizables.";
 answers[63] = choices[63][2];
 units[63] = "5";
 comments[63] = "Id Pregunta: 10288. UNION EUROPEA";


//  Id pregunta: 10023 AÃ±o de creación de pregunta: 2016
 questions[64]= "65)  &iquest;Cu&aacute;l de los siguientes lenguajes propone el W3C para consultar datos en formato RDF?";
 choices[64]= new Array();
 choices[64][0] = "SPARQL";
 choices[64][1] = "UnQL";
 choices[64][2] = "XQUERY";
 choices[64][3] = "RQL";
 answers[64] = choices[64][0];
 units[64] = "74";
 comments[64] = "Id Pregunta: 10023. AGE A1 2015";


//  Id pregunta: 10224 AÃ±o de creación de pregunta: 2016
 questions[65]= "66)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen?.";
 choices[65]= new Array();
 choices[65][0] = "Art&iacute;culo 16.2.";
 choices[65][1] = "Art&iacute;culo 17.1.";
 choices[65][2] = "Art&iacute;culo 18.1.";
 choices[65][3] = "Art&iacute;culo 18.2.";
 answers[65] = choices[65][2];
 units[65] = "1";
 comments[65] = "Id Pregunta: 10224. CONSTITUCION1978";


//  Id pregunta: 10228 AÃ±o de creación de pregunta: 2016
 questions[66]= "67)  Indique la respuesta falsa. Seg&uacute;n el Art&iacute;culo 147 de la Constituci&oacute;n espa&ntilde;ola, los Estatutos de Autonom&iacute;a deber&aacute;n contener:";
 choices[66]= new Array();
 choices[66][0] = "La denominaci&oacute;n de la Comunidad que mejor corresponda a su identidad hist&oacute;rica.";
 choices[66][1] = "La delimitaci&oacute;n de su territorio.";
 choices[66][2] = "Las competencias asumidas y aqu&eacute;llas del Estado sobre las que la Comunidad Aut&oacute;noma se reserva el derecho de opci&oacute;n.";
 choices[66][3] = "La denominaci&oacute;n, organizaci&oacute;n y sede de las instituciones aut&oacute;nomas propias.";
 answers[66] = choices[66][2];
 units[66] = "1";
 comments[66] = "Id Pregunta: 10228. CONSTITUCION1978";


//  Id pregunta: 10254 AÃ±o de creación de pregunta: 2016
 questions[67]= "68)  El Art&iacute;culo 16 de la Constituci&oacute;n Espa&ntilde;ola garantiza:";
 choices[67]= new Array();
 choices[67][0] = "La libertad ideol&oacute;gica, religiosa y de culto.";
 choices[67][1] = "La libertad sexual y religiosa.";
 choices[67][2] = "La obligaci&oacute;n del derecho al voto en las elecciones.";
 choices[67][3] = "La ausencia de libertad cat&oacute;lica.";
 answers[67] = choices[67][3];
 units[67] = "1";
 comments[67] = "Id Pregunta: 10254. CONSTITUCION1978";


//  Id pregunta: 10529 AÃ±o de creación de pregunta: 2016
 questions[68]= "69)  Se presumir&aacute; la representaci&oacute;n para:";
 choices[68]= new Array();
 choices[68][0] = "formular solicitudes";
 choices[68][1] = "los actos y gestiones de mero tr&aacute;mite";
 choices[68][2] = "presentar declaraciones responsables o comunicaciones";
 choices[68][3] = "interponer recursos, desistir de acciones y renunciar a derechos en nombre de otra persona";
 answers[68] = choices[68][1];
 units[68] = "7";
 comments[68] = "Id Pregunta: 10529. LEY 39/2015";


//  Id pregunta: 10561 AÃ±o de creación de pregunta: 2016
 questions[69]= "70)  El plan nacional de ciudades inteligentes...";
 choices[69]= new Array();
 choices[69][0] = "Es una apuesta liderada por la Federaci&oacute;n Espa&ntilde;ola de Municipios y Provincias";
 choices[69][1] = "Es una apuesta del ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[69][2] = "Es una apuesta liderada por una gran asociaci&oacute;n de empresas tecnol&oacute;gicas nacionales";
 choices[69][3] = "No existe";
 answers[69] = choices[69][1];
 units[69] = "19";
 comments[69] = "Id Pregunta: 10561. Ciudades Inteligentes";


//  Id pregunta: 10246 AÃ±o de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Cu&aacute;ntos cap&iacute;tulos tiene el T&iacute;tulo VIII de la Constituci&oacute;n?.";
 choices[70]= new Array();
 choices[70][0] = "Dos Cap&iacute;tulos.";
 choices[70][1] = "Tres Cap&iacute;tulos.";
 choices[70][2] = "Un Cap&iacute;tulo.";
 choices[70][3] = "Cuatro Cap&iacute;tulos.";
 answers[70] = choices[70][1];
 units[70] = "1";
 comments[70] = "Id Pregunta: 10246. CONSTITUCION1978";


//  Id pregunta: 10556 AÃ±o de creación de pregunta: 2016
 questions[71]= "72)  &iquest;Qu&eacute; es el geo-bloqueo, contra el que pretende ser soluci&oacute;n la estrategia para el Mercado &Uacute;nico Digital en Europa?";
 choices[71]= new Array();
 choices[71][0] = "Es la discriminaci&oacute;n en la b&uacute;squeda de un empleo seg&uacute;n el pa&iacute;s de origen del trabajador";
 choices[71][1] = "Es la imposibilidad de pasar la aduana para paquetes comprados en tiendas online de ciertos pa&iacute;ses";
 choices[71][2] = "Es la pr&aacute;ctica por la cual los vendedores online deniegan a los consumidores el acceso a su p&aacute;gina web en funci&oacute;n de su localizaci&oacute;n o le ofrecen precios distintos";
 choices[71][3] = "Es la pr&aacute;ctica comercial por la que varias tiendas online ofrecen el mismo producto a precios pre-acordados entre ellas, limitando la competencia";
 answers[71] = choices[71][2];
 units[71] = "17";
 comments[71] = "Id Pregunta: 10556. Mercado &Uacute;nico Digital";


//  Id pregunta: 10143 AÃ±o de creación de pregunta: 2016
 questions[72]= "73)  Contra la resoluci&oacute;n de un recurso de alzada:";
 choices[72]= new Array();
 choices[72][0] = "No cabe interponer ning&uacute;n tipo de recurso";
 choices[72][1] = "Puede interponerse el recurso de reposici&oacute;n como paso previo a la impugnaci&oacute;n ante el orden jurisdiccional contencioso-administrativo";
 choices[72][2] = "Puede interponerse el recurso extraordinario de revisi&oacute;n, en los casos establecidos en el art&iacute;culo 125.1.";
 choices[72][3] = "Puede interponerse un nuevo recurso de alzada si el acto no fuera expreso";
 answers[72] = choices[72][2];
 units[72] = "8";
 comments[72] = "Id Pregunta: 10143. Ley 39/2015, Art&iacute;culo 122";


//  Id pregunta: 10514 AÃ±o de creación de pregunta: 2016
 questions[73]= "74)  El sector p&uacute;blico institucional se integra por:";
 choices[73]= new Array();
 choices[73][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[73][1] = "las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas";
 choices[73][2] = "las Universidades p&uacute;blicas";
 choices[73][3] = "todas son correctas";
 answers[73] = choices[73][3];
 units[73] = "7";
 comments[73] = "Id Pregunta: 10514. LEY 39/2015";


//  Id pregunta: 10371 AÃ±o de creación de pregunta: 2016
 questions[74]= "75)  &iquest;En qu&eacute; a&ntilde;o se adhiri&oacute; Espa&ntilde;a a la Comunidad Europea?:";
 choices[74]= new Array();
 choices[74][0] = "En 1988.";
 choices[74][1] = "En 1981.";
 choices[74][2] = "En 1982.";
 choices[74][3] = "En 1986.";
 answers[74] = choices[74][3];
 units[74] = "5";
 comments[74] = "Id Pregunta: 10371. UNION EUROPEA";


//  Id pregunta: 10272 AÃ±o de creación de pregunta: 2016
 questions[75]= "76)  Respecto a SonarQube, se&ntilde;ale la FALSA";
 choices[75]= new Array();
 choices[75][0] = "Sirve para evaluar aspectos como la complejidad ciclom&aacute;tica del c&oacute;digo.";
 choices[75][1] = "Anteriormente se denominaba Sonar.";
 choices[75][2] = "Permite disponer de una matriz de dependencia entre objetos.";
 choices[75][3] = "Integra herramientas de medici&oacute;n de la calidad de c&oacute;digo como CPD, findbugs, PMD, checkstyle.";
 answers[75] = choices[75][2];
 units[75] = "92";
 comments[75] = "Id Pregunta: 10272. INTEGRACION CONTINUA";


//  Id pregunta: 10145 AÃ±o de creación de pregunta: 2016
 questions[76]= "77)  Puede interponerse un recurso extraordinario de revisi&oacute;n:";
 choices[76]= new Array();
 choices[76][0] = "Ante actos firmes en la v&iacute;a administrativa cuando al dictarlos se hubiera incurrido en error de hecho, que resulte de los propios documentos incorporados al expediente";
 choices[76][1] = "Ante actos firmes en la v&iacute;a administrativa cuando en la resoluci&oacute;n hayan influido esencialmente documentos o testimonios declarados falsos por sentencia judicial firme, anterior o posterior a aquella resoluci&oacute;n";
 choices[76][2] = "Ante actos firmes en la v&iacute;a administrativa cuando la resoluci&oacute;n se hubiese dictado como consecuencia de prevaricaci&oacute;n, cohecho, violencia, maquinaci&oacute;n fraudulenta u otra conducta punible y se haya declarado as&iacute; en virtud de sentencia judicial firme";
 choices[76][3] = "Todas las anteriores son ciertas";
 answers[76] = choices[76][3];
 units[76] = "8";
 comments[76] = "Id Pregunta: 10145. Ley 39/2015, Art&iacute;culo 125";


//  Id pregunta: 10425 AÃ±o de creación de pregunta: 2016
 questions[77]= "78)  Todos los tribunales y &oacute;rganos de selecci&oacute;n del personal de la Administraci&oacute;n General del Estado y los organismos p&uacute;blicos vinculados o dependientes de ella responder&aacute;n al principio:";
 choices[77]= new Array();
 choices[77][0] = "Presencia equilibrada.";
 choices[77][1] = "Presencia paritaria.";
 choices[77][2] = "Presencia consensuada.";
 choices[77][3] = "presencia horizontal.";
 answers[77] = choices[77][0];
 units[77] = "14";
 comments[77] = "Id Pregunta: 10425. POLITICAS DE IGUALDAD";


//  Id pregunta: 10423 AÃ±o de creación de pregunta: 2016
 questions[78]= "79)  Para contribuir a un reparto m&aacute;s equilibrado de las responsabilidades familiares se reconoce a los padres:";
 choices[78]= new Array();
 choices[78][0] = "El derecho a un permiso.";
 choices[78][1] = "Una prestaci&oacute;n por paternidad.";
 choices[78][2] = "Ambas son correctas.";
 choices[78][3] = "18 d&iacute;as de permiso.";
 answers[78] = choices[78][2];
 units[78] = "14";
 comments[78] = "Id Pregunta: 10423. POLITICAS DE IGUALDAD";


//  Id pregunta: 10188 AÃ±o de creación de pregunta: 2016
 questions[79]= "80)  &iquest;Puede el Estado transferir o delegar a las Comunidades Aut&oacute;nomas facultadas que son de su titularidad?";
 choices[79]= new Array();
 choices[79][0] = "No, en ning&uacute;n caso.";
 choices[79][1] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con cualquier tipo de facultades.";
 choices[79][2] = "S&iacute;, mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, sin que el Estado se pueda reservar ninguna forma de control.";
 choices[79][3] = ", mediante Ley Org&aacute;nica, en relaci&oacute;n con las facultades que por su propia naturaleza sean susceptibles de transferencia o delegaci&oacute;n, previendo en cada caso la correspondiente transferencia de medios financieros, as&iacute; como las formas de control que se reserve el Estado.";
 answers[79] = choices[79][3];
 units[79] = "1";
 comments[79] = "Id Pregunta: 10188. CONSTITUCION1978";


//  Id pregunta: 10484 AÃ±o de creación de pregunta: 2016
 questions[80]= "81)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, dirigir la contabilidad de las entidades que integran el sistema de la Seguridad Social y gestionar la contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una funci&oacute;n de:";
 choices[80]= new Array();
 choices[80][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[80][1] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[80][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[80][3] = "La Intervenci&oacute;n General de la Defensa.";
 answers[80] = choices[80][2];
 units[80] = "10";
 comments[80] = "Id Pregunta: 10484. PRESUPUESTOS GENERALES";


//  Id pregunta: 10365 AÃ±o de creación de pregunta: 2016
 questions[81]= "82)  Las decisiones de la Comisi&oacute;n se adoptar&aacute;n por:";
 choices[81]= new Array();
 choices[81][0] = "Unanimidad y mayor&iacute;a simple.";
 choices[81][1] = "Unanimidad.";
 choices[81][2] = "Mayor&iacute;a cualificada.";
 choices[81][3] = "Mayor&iacute;a simple.";
 answers[81] = choices[81][3];
 units[81] = "5";
 comments[81] = "Id Pregunta: 10365. UNION EUROPEA";


//  Id pregunta: 10226 AÃ±o de creación de pregunta: 2016
 questions[82]= "83)  Extinguidas todas las l&iacute;neas llamadas en Derecho para la sucesi&oacute;n en el trono:";
 choices[82]= new Array();
 choices[82][0] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n en la forma que m&aacute;s convenga a los intereses de Espa&ntilde;a.";
 choices[82][1] = "Las Cortes Generales proveer&aacute;n a la sucesi&oacute;n atendiendo exclusivamente a los imperativos geneal&oacute;gicos conocidos.";
 choices[82][2] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n de conformidad con los usos y costumbres existentes.";
 choices[82][3] = "El Congreso de los Diputados proveer&aacute; a la sucesi&oacute;n conforme a lo que decidan dos grupos parlamentarios o una quinta parte de los Diputados.";
 answers[82] = choices[82][0];
 units[82] = "1";
 comments[82] = "Id Pregunta: 10226. CONSTITUCION1978";


//  Id pregunta: 10612 AÃ±o de creación de pregunta: 2016
 questions[83]= "84)  Dentro del &aacute;lgebra relacional, se&ntilde;ala cu&aacute;l de los siguientes operadores es derivado:";
 choices[83]= new Array();
 choices[83][0] = "Intersecci&oacute;n.";
 choices[83][1] = "Uni&oacute;n.";
 choices[83][2] = "Restricci&oacute;n.";
 choices[83][3] = "Diferencia.";
 answers[83] = choices[83][0];
 units[83] = "60";
 comments[83] = "Id Pregunta: 10612. Junta de Extremadura A1 2015";


//  Id pregunta: 10141 AÃ±o de creación de pregunta: 2016
 questions[84]= "85)  El recurso de alzada puede interponerse:";
 choices[84]= new Array();
 choices[84][0] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna en todo caso";
 choices[84][1] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna o ante el competente para resolverlo";
 choices[84][2] = "Ante el &oacute;rgano competente para resolverlo en todo caso";
 choices[84][3] = "Ante el Defensor del Pueblo";
 answers[84] = choices[84][1];
 units[84] = "8";
 comments[84] = "Id Pregunta: 10141. Ley 39/2015, Art&iacute;culo 121";


//  Id pregunta: 10236 AÃ±o de creación de pregunta: 2016
 questions[85]= "86)  El T&iacute;tulo Preliminar de la Constituci&oacute;n Espa&ntilde;ola de 1978 engloba una serie de preceptos entre los que se encuentra el relativo a:";
 choices[85]= new Array();
 choices[85][0] = "La regulaci&oacute;n sobre la adquisici&oacute;n de la nacionalidad espa&ntilde;ola.";
 choices[85][1] = "La naturaleza, funcionamiento y estructura de los partidos pol&iacute;ticos.";
 choices[85][2] = "La entrada en vigor de la propia Constituci&oacute;n.";
 choices[85][3] = "El reconocimiento de los derechos hist&oacute;ricos de los territorios forales.";
 answers[85] = choices[85][3];
 units[85] = "1";
 comments[85] = "Id Pregunta: 10236. CONSTITUCION1978";


//  Id pregunta: 10264 AÃ±o de creación de pregunta: 2016
 questions[86]= "87)  &iquest;Cu&aacute;ntos vocales componen el Consejo General del Poder Judicial?";
 choices[86]= new Array();
 choices[86][0] = "Veinte.";
 choices[86][1] = "Quince.";
 choices[86][2] = "Diez.";
 choices[86][3] = "Doce.";
 answers[86] = choices[86][1];
 units[86] = "1";
 comments[86] = "Id Pregunta: 10264. CONSTITUCION1978";


//  Id pregunta: 10237 AÃ±o de creación de pregunta: 2016
 questions[87]= "88)  Seg&uacute;n la regulaci&oacute;n constitucional del derecho de asociaci&oacute;n:";
 choices[87]= new Array();
 choices[87][0] = "Las asociaciones que se constituyan deben inscribirse en un registro a los efectos de publicidad.";
 choices[87][1] = "Las asociaciones pueden ser suspendidas en virtud de resoluci&oacute;n administrativa motivada.";
 choices[87][2] = "Este derecho aparece regulado en el T&iacute;tulo Preliminar de la Constituci&oacute;n.";
 choices[87][3] = "Este derecho aparece regulado en la Secci&oacute;n 2&ordf; del Cap&iacute;tulo 2&ordm; del T&iacute;tulo I de la Constituci&oacute;n.";
 answers[87] = choices[87][2];
 units[87] = "1";
 comments[87] = "Id Pregunta: 10237. CONSTITUCION1978";


//  Id pregunta: 10511 AÃ±o de creación de pregunta: 2016
 questions[88]= "89)  Cuando resulte eficaz, proporcionado y necesario para la consecuci&oacute;n de los fines propios del procedimiento, y de manera motivada, podr&aacute;n incluirse tr&aacute;mites adicionales o distintos a los contemplados en esta Ley:";
 choices[88]= new Array();
 choices[88][0] = "solo mediante ley";
 choices[88][1] = "reglamentariamente";
 choices[88][2] = "mediante ley o reglamentariamente";
 choices[88][3] = "ninguna es correcta";
 answers[88] = choices[88][0];
 units[88] = "7";
 comments[88] = "Id Pregunta: 10511. LEY 39/2015";


//  Id pregunta: 10146 AÃ±o de creación de pregunta: 2016
 questions[89]= "90)  La declaraci&oacute;n de lesividad de los actos anulables:";
 choices[89]= new Array();
 choices[89][0] = "No podr&aacute; adoptarse una vez transcurridos cuatro a&ntilde;os desde que se dict&oacute; el acto administrativo";
 choices[89][1] = "No es necesaria para impugnar ante el orden jurisdiccional contencioso-administrativo los actos favorables para los interesados";
 choices[89][2] = "Se adoptar&aacute; en todo caso por el Consejo de Estado";
 choices[89][3] = "Si el acto proviniera de las entidades que integran la Administraci&oacute;n Local, la declaraci&oacute;n de lesividad se adoptar&aacute; por la Comunidad Aut&oacute;noma a la que pertenece dicha entidad";
 answers[89] = choices[89][0];
 units[89] = "8";
 comments[89] = "Id Pregunta: 10146. Ley 39/2015, Art&iacute;culo 107";


//  Id pregunta: 10201 AÃ±o de creación de pregunta: 2016
 questions[90]= "91)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[90]= new Array();
 choices[90][0] = "La aprobaci&oacute;n, modificaci&oacute;n o derogaci&oacute;n de las leyes org&aacute;nicas exigir&aacute; mayor&iacute;a absoluta de las Cortes Generales, en una votaci&oacute;n final sobre el conjunto del proyecto.";
 choices[90][1] = "Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada recibir&aacute;n el t&iacute;tulo de Decretos-leyes.";
 choices[90][2] = "Son leyes org&aacute;nicas las relativas al desarrollo de los derechos fundamentales y de las libertades p&uacute;blicas, las que aprueben los Estatutos de Autonom&iacute;a y el r&eacute;gimen electoral general y las dem&aacute;s previstas en la Constituci&oacute;n.";
 choices[90][3] = "La delegaci&oacute;n legislativa deber&aacute; otorgarse mediante una ley org&aacute;nica cuando su objeto sea la formaci&oacute;n de textos articulados o por una ley ordinaria cuando se trate de refundir varios textos legales en uno.";
 answers[90] = choices[90][2];
 units[90] = "1";
 comments[90] = "Id Pregunta: 10201. CONSTITUCION1978";


//  Id pregunta: 10424 AÃ±o de creación de pregunta: 2016
 questions[91]= "92)  Entre otros criterios de actuaci&oacute;n de las administraciones p&uacute;blicas para la consecuci&oacute;n del principio de igualdad, se encuentra:";
 choices[91]= new Array();
 choices[91][0] = "Evaluar peri&oacute;dicamente la efectividad del principio de igualdad.";
 choices[91][1] = "Penalizar a las empresas que no cumplan con los planes de igualdad.";
 choices[91][2] = "Ninguna es correcta.";
 choices[91][3] = "A y B son correctas.";
 answers[91] = choices[91][0];
 units[91] = "14";
 comments[91] = "Id Pregunta: 10424. POLITICAS DE IGUALDAD";


//  Id pregunta: 10428 AÃ±o de creación de pregunta: 2016
 questions[92]= "93)  Cuando el periodo de vacaciones coincida con una incapacidad temporal derivada del embarazo, parto o lactancia natural, o con el permiso de maternidad, o con su ampliaci&oacute;n por lactancia, la empleada p&uacute;blica:";
 choices[92]= new Array();
 choices[92][0] = "Perder&aacute; el derecho a vacaciones.";
 choices[92][1] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta, siempre que no haya terminado el a&ntilde;o natural que le corresponda.";
 choices[92][2] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta, aunque haya terminado el a&ntilde;o natural que le corresponda.";
 choices[92][3] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta dependiendo de la acumulaci&oacute;n de trabajo en al AAPP.";
 answers[92] = choices[92][2];
 units[92] = "14";
 comments[92] = "Id Pregunta: 10428. POLITICAS DE IGUALDAD";


//  Id pregunta: 10097 AÃ±o de creación de pregunta: 2016
 questions[93]= "94)  Indique la opci&oacute;n correcta respecto al Portal de Transparencia del Gobierno de Espa&ntilde;a:";
 choices[93]= new Array();
 choices[93][0] = "Incluye informaci&oacute;n acerca de las Entidades Locales.";
 choices[93][1] = "La solicitud de informaci&oacute;n disponible, amparada por el derecho de acceso presente en la Ley 19/2013, no precisa identificaci&oacute;n.";
 choices[93][2] = "No incluye informaci&oacute;n acerca de &oacute;rganos Constitucionales.";
 choices[93][3] = "El Portal es gestionado por el Consejo de Transparencia y Buen Gobierno.";
 answers[93] = choices[93][2];
 units[93] = "22";
 comments[93] = "Id Pregunta: 10097. AGE A1 2015";


//  Id pregunta: 10674 AÃ±o de creación de pregunta: 2016
 questions[94]= "95)  En referencia a la implantaci&oacute;n de la interoperabilidad de la receta electr&oacute;nica:";
 choices[94]= new Array();
 choices[94][0] = "Permite los ciudadanos retiren sus medicamentos en las farmacias de fuera de la Comunidad Aut&oacute;noma en la que hayan sido recetados.";
 choices[94][1] = "Favorece la seguridad del paciente, al incorporar sistemas online de ayuda a la prescripci&oacute;n, que ayudan a la detecci&oacute;n de interaciones medicamentosas o duplicidades terap&eacute;uticas.";
 choices[94][2] = "Facilita al m&eacute;dico el seguimiento de la adherencia al tratamiento por parte del paciente.";
 choices[94][3] = "Todas las anteriores son correctas.";
 answers[94] = choices[94][3];
 units[94] = "47";
 comments[94] = "Id Pregunta: 10674. Receta electr&oacute;nica";


//  Id pregunta: 10077 AÃ±o de creación de pregunta: 2016
 questions[95]= "96)  Respecto al uso de servicios de firma de documentos electr&oacute;nicos mediante certificados electr&oacute;nicos centralizados, mediante el sistema Cl@ve, indique cu&aacute;l de las siguientes afirmaciones es incorrecta:";
 choices[95]= new Array();
 choices[95][0] = "Para poder acceder al servicio, el usuario deber&aacute; solicitar previa y expresamente la emisi&oacute;n de los certificados electr&oacute;nicos centralizados correspondientes.";
 choices[95][1] = "Los certificados electr&oacute;nicos centralizados ser&aacute;n emitidos con las mismas garant&iacute;as de identificaci&oacute;n del DNI electr&oacute;nico del ciudadano.";
 choices[95][2] = "El acceso al servicio requiere en todo caso que el usuario se haya registrado en Cl@ve y haya activado su Cl@ve permanente.";
 choices[95][3] = "En el momento de la identificaci&oacute;n, se requerir&aacute; la utilizaci&oacute;n de una verificaci&oacute;n de seguridad adicional mediante un c&oacute;digo de un solo uso y validez limitada en el tiempo que se enviar&aacute; al tel&eacute;fono m&oacute;vil del usuario registrado.";
 answers[95] = choices[95][2];
 units[95] = "47";
 comments[95] = "Id Pregunta: 10077. AGE A1 2015";


//  Id pregunta: 10191 AÃ±o de creación de pregunta: 2016
 questions[96]= "97)  El Rey podr&aacute; presidir las sesiones del Consejo de Ministros:";
 choices[96]= new Array();
 choices[96][0] = "Cuando el Rey, por razones de inter&eacute;s general, as&iacute; lo decida.";
 choices[96][1] = "A petici&oacute;n del Pleno del Consejo de Ministros.";
 choices[96][2] = "A petici&oacute;n del Presidente del Gobierno.";
 choices[96][3] = "No est&aacute; prevista constitucionalmente la presidencia del Consejo de Ministros por parte del Rey.";
 answers[96] = choices[96][2];
 units[96] = "1";
 comments[96] = "Id Pregunta: 10191. CONSTITUCION1978";


//  Id pregunta: 10677 AÃ±o de creación de pregunta: 2016
 questions[97]= "98)  Las situaciones de dependencia se clasifican en los siguientes grados:";
 choices[97]= new Array();
 choices[97][0] = "Grado I dependencia leve, grado II dependencia grave, grado III dependencia muy grave";
 choices[97][1] = "Grado I dependencia moderada, grado II dependencia severa, grado III dependencia muy severa";
 choices[97][2] = "Grado I dependencia moderada, grado II dependencia severa, grado III gran dependencia";
 choices[97][3] = "Grado I dependencia leve, grado II dependencia grave, grado III dependencia muy grave, grado IV gran dependencia";
 answers[97] = choices[97][2];
 units[97] = "14";
 comments[97] = "Id Pregunta: 10677. Dependencia";


//  Id pregunta: 10441 AÃ±o de creación de pregunta: 2016
 questions[98]= "99)  Se&ntilde;ale la respuesta falsa respecto a Habilit@, Registro de Funcionarios Habilitados:";
 choices[98]= new Array();
 choices[98][0] = "El art&iacute;culo 12.3 de la Ley 39/2015recoge que la Administraci&oacute;n General del Estado, las Comunidades Aut&oacute;nomas y las Entidades Locales mantendr&aacute;n actualizado un registro, u otro sistema equivalente, donde constar&aacute;n los funcionarios habilitados para la identificaci&oacute;n o firma.";
 choices[98][1] = "La Orden HAP/8/2014, de 7 de enero, regula el Registro de funcionarios habilitados para la identificaci&oacute;n y autenticaci&oacute;n de ciudadanos en el &aacute;mbito de la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos vinculados o dependientes.";
 choices[98][2] = "En el caso en que el ciudadano no disponga de medios de autenticaci&oacute;n y firma para relacionarse de manera electr&oacute;nica con las Administraciones, la Ley 39/2015 prev&eacute; que, siempre que el ciudadano se identifique y deje constancia de su consentimiento expreso, un funcionario podr&aacute; actuar en su nombre, utilizando el sistema de firma del que disponga para ello.";
 choices[98][3] = "Tambi&eacute;n se establece en la misma Ley 39/2015 que las Administraciones P&uacute;blicas podr&aacute;n realizar copias aut&eacute;nticas de los documentos p&uacute;blicos administrativos o privados mediante funcionario habilitado.";
 answers[98] = choices[98][1];
 units[98] = "43";
 comments[98] = "Id Pregunta: 10441. SERVICIOS COMUNES";


//  Id pregunta: 10131 AÃ±o de creación de pregunta: 2016
 questions[99]= "100)  En qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola se incluy&oacute; la reforma conocida como la 'regla de oro presupuestaria' en el a&ntilde;o 2011:";
 choices[99]= new Array();
 choices[99][0] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[99][1] = "En el art. 135, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda privada.";
 choices[99][2] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los ingresos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 choices[99][3] = "En el art. 145, que consiste en comprometerse a limitar los gastos p&uacute;blicos en funci&oacute;n de los gastos, a fin de garantizar la estabilidad de la deuda p&uacute;blica.";
 answers[99] = choices[99][0];
 units[99] = "12";
 comments[99] = "Id Pregunta: 10131. Leyes modelo econ&oacute;mico";


