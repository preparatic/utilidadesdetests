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

//  Id pregunta: 52 Año de creación de pregunta: 2016
 questions[0]= "1)  Las normas ISO que cubren los procesos de especificaci&oacute;n de requisitos de calidad del software y evaluaci&oacute;n de la calidad del software corresponden a la serie:";
 choices[0]= new Array();
 choices[0][0] = "ISO/IEC 25000";
 choices[0][1] = "ISO/IEC 27000";
 choices[0][2] = "ISO 9000";
 choices[0][3] = "ISO 9001";
 answers[0] = choices[0][0];
 units[0] = "93";
 comments[0] = "Id Pregunta: 52. AGE A1 2015";


//  Id pregunta: 393 Año de creación de pregunta: 2016
 questions[1]= "2)  &iquest;Qu&eacute; tres derechos espec&iacute;ficos incorpora la Ley Org&aacute;nica 1/2004, de 28 de diciembre, de medidas de protecci&oacute;n integral contra la violencia de g&eacute;nero, para las funcionarias v&iacute;ctimas de violencia de g&eacute;nero?";
 choices[1]= new Array();
 choices[1][0] = "La reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo, la movilidad geogr&aacute;fica de centro de trabajo y la excedencia por este motivo.";
 choices[1][1] = "La movilidad geogr&aacute;fica de centro de trabajo, la excedencia por este motivo y la reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo.";
 choices[1][2] = "La reserva de plazas en los procesos de promoci&oacute;n interna de grupo administrativo, la reducci&oacute;n o reordenaci&oacute;n de su tiempo de trabajo y la excedencia por este motivo.";
 choices[1][3] = "La excedencia por este motivo, la movilidad geogr&aacute;fica de centro de trabajo y la reserva de plazas en los procesos de promoci&oacute;n interna.";
 answers[1] = choices[1][0];
 units[1] = "14";
 comments[1] = "Id Pregunta: 393. POLITICAS DE IGUALDAD";


//  Id pregunta: 270 Año de creación de pregunta: 2016
 questions[2]= "3)  La tutela de los derechos fundamentales y libertades p&uacute;blicas reconocidos en la secci&oacute;n primera del cap&iacute;tulo II del T&iacute;tulo I de la Constituci&oacute;n espa&ntilde;ola podr&aacute; recabarse por cualquier ciudadano:";
 choices[2]= new Array();
 choices[2][0] = "S&oacute;lo ante el Tribunal Constitucional de acuerdo con lo previsto en el Art&iacute;culo 161.1.a), referente al recurso de Inconstitucionalidad.";
 choices[2][1] = "S&oacute;lo ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad.";
 choices[2][2] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, ante el Tribunal Constitucional a trav&eacute;s del recurso de inconstitucionalidad.";
 choices[2][3] = "Ante los tribunales ordinarios por un procedimiento basado en los principios de preferencia y sumariedad y, en su caso, a trav&eacute;s del recurso de amparo ante el Tribunal Constitucional.";
 answers[2] = choices[2][0];
 units[2] = "1";
 comments[2] = "Id Pregunta: 270. CONSTITUCION1978";


//  Id pregunta: 559 Año de creación de pregunta: 2016
 questions[3]= "4)  Uno de los objetivos de la Agenda Digital para Espa&ntilde;a es desarrollar la econom&iacute;a digital, &iquest;qu&eacute; actuaciones se deben desarrollar para lograr esto?";
 choices[3]= new Array();
 choices[3][0] = "Impulsar la producci&oacute;n y distribuci&oacute;n a trav&eacute;s de Internet de contenidos digitales";
 choices[3][1] = "Favorecer la internacionalizaci&oacute;n de las empresas tecnol&oacute;gicas";
 choices[3][2] = "Incentivar el uso transformador de las TIC en nuestras empresas";
 choices[3][3] = "Todos los anteriores";
 answers[3] = choices[3][3];
 units[3] = "19";
 comments[3] = "Id Pregunta: 559. Agenda Digital";


//  Id pregunta: 346 Año de creación de pregunta: 2016
 questions[4]= "5)  La duraci&oacute;n del mandato de un diputado del Parlamento Europeo es de:";
 choices[4]= new Array();
 choices[4][0] = "25 diputados lo son con car&aacute;cter vitalicio y el resto se renueva cada cinco a&ntilde;os.";
 choices[4][1] = "Cuatro a&ntilde;os, como un diputado espa&ntilde;ol.";
 choices[4][2] = "Cinco a&ntilde;os.";
 choices[4][3] = "Ninguna es correcta.";
 answers[4] = choices[4][2];
 units[4] = "5";
 comments[4] = "Id Pregunta: 346. UNION EUROPEA";


//  Id pregunta: 636 Año de creación de pregunta: 2016
 questions[5]= "6)  El soporte de m&oacute;dulos en Linux tiene tres componentes:";
 choices[5]= new Array();
 choices[5][0] = "Gesti&oacute;n de E/S, Interfaces y Gesti&oacute;n del almacenamiento.";
 choices[5][1] = "Gesti&oacute;n del almacenamiento, Gesti&oacute;n de seguridad y Gesti&oacute;n de integridad.";
 choices[5][2] = "Gesti&oacute;n de m&oacute;dulos, M&oacute;dulo registro de controladores y Mecanismo de resoluci&oacute;n de conflictos.";
 choices[5][3] = "Gesti&oacute;n de memoria, Gesti&oacute;n de discos y Gesti&oacute;n de impresi&oacute;n.";
 answers[5] = choices[5][2];
 units[5] = "57";
 comments[5] = "Id Pregunta: 636. Junta de Extremadura A1 2015";


//  Id pregunta: 663 Año de creación de pregunta: 2016
 questions[6]= "7)  Seg&uacute;n la Ley 39/2015, la iniciaci&oacute;n de un procedimiento administrativo puede realizarse:";
 choices[6]= new Array();
 choices[6][0] = "De oficio.";
 choices[6][1] = "A solicitud del interesado.";
 choices[6][2] = "De oficio o a solicitud del interesado.";
 choices[6][3] = "Por la Administraci&oacute;n P&uacute;blica responsable.";
 answers[6] = choices[6][2];
 units[6] = "7";
 comments[6] = "Id Pregunta: 663. Art&iacute;culo 54 de la Ley 39/2015";


//  Id pregunta: 792 Año de creación de pregunta: 2016
 questions[7]= "8)  Tienen la condici&oacute;n de alto cargo:";
 choices[7]= new Array();
 choices[7][0] = "los &oacute;rganos superiores";
 choices[7][1] = "los &oacute;rganos superiores y directivos";
 choices[7][2] = "los &oacute;rganos superiores y directivos, excepto los Subdirectores generales y asimilados";
 choices[7][3] = "los &oacute;rganos superiores y directivos, excepto los Secretarios generales y asimilados";
 answers[7] = choices[7][2];
 units[7] = "4, 7, 8, 9";
 comments[7] = "Id Pregunta: 792. Ley 40/2015";


//  Id pregunta: 604 Año de creación de pregunta: 2016
 questions[8]= "9)  ITIL v3, define:";
 choices[8]= new Array();
 choices[8][0] = "Un proceso es un conjunto estructurado de actividades dise&ntilde;ado para cumplir un objetivo concreto.";
 choices[8][1] = "Un proceso es un conjunto de actividades no estructuradas para cumplir un objetivo concreto.";
 choices[8][2] = "Un proceso es toda actividad encaminada a cumplir con un est&aacute;ndar definido por las normas ISO.";
 choices[8][3] = "Un proceso es un conjunto de actividades de documentaci&oacute;n y seguridad dise&ntilde;ados mediante diagramas de flujo de informaci&oacute;n.";
 answers[8] = choices[8][0];
 units[8] = "101";
 comments[8] = "Id Pregunta: 604. Junta de Extremadura A1 2015";


//  Id pregunta: 372 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[9]= new Array();
 choices[9][0] = "El Parlamento y el Consejo.";
 choices[9][1] = "El Parlamento y la Comisi&oacute;n.";
 choices[9][2] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[9][3] = "La Comisi&oacute;n y el Consejo.";
 answers[9] = choices[9][2];
 units[9] = "5";
 comments[9] = "Id Pregunta: 372. UNION EUROPEA";


//  Id pregunta: 39 Año de creación de pregunta: 2016
 questions[10]= "11)  &iquest;Cu&aacute;l de las siguientes respuestas NO es un servicio definido por el Open Geospatial Consortium (OGC)?";
 choices[10]= new Array();
 choices[10][0] = "WMS sirve mapas de forma din&aacute;mica presentando la informaci&oacute;n como im&aacute;genes digitales.";
 choices[10][1] = "WMTS permite la visualizaci&oacute;n de mapas a trav&eacute;s de teselas (tiles) de im&aacute;genes.";
 choices[10][2] = "WRS permite la consulta de colecciones de mapas raster.";
 choices[10][3] = "WFS permite la consulta y descarga de datos vectoriales.";
 answers[10] = choices[10][2];
 units[10] = "71";
 comments[10] = "Id Pregunta: 39. AGE A1 2015";


//  Id pregunta: 596 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;Qui&eacute;n supervisa la elaboraci&oacute;n y ejecutaci&oacute;n de los Planes de Acci&oacute;n Sectoriales?";
 choices[11]= new Array();
 choices[11][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[11][1] = "Las CMADs";
 choices[11][2] = "Ambas son correctas.";
 choices[11][3] = "Ninguna es correcta";
 answers[11] = choices[11][2];
 units[11] = "19";
 comments[11] = "Id Pregunta: 596. Estrategia TIC";


//  Id pregunta: 178 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Qu&eacute; es lo que caracteriza un decreto-ley?";
 choices[12]= new Array();
 choices[12][0] = "No puede afectar al ordenamiento de las instituciones b&aacute;sicas del Estado.";
 choices[12][1] = "Es dictado por las Cortes Generales en casos de urgente necesidad.";
 choices[12][2] = "Es dictado por el Presidente del Gobierno en casos de extraordinaria y urgente necesidad.";
 choices[12][3] = "Es dictado por el Gobierno por encargo de las Cortes Generales.";
 answers[12] = choices[12][0];
 units[12] = "1";
 comments[12] = "Id Pregunta: 178. CONSTITUCION1978";


//  Id pregunta: 849 Año de creación de pregunta: 2016
 questions[13]= "14)  &iquest;Qu&eacute; m&eacute;todo de replicaci&oacute;n remota entre sistemas de almacenamiento se ve m&aacute;s afectada por la latencia en el caso de largas distancias?";
 choices[13]= new Array();
 choices[13][0] = "As&iacute;ncrona.";
 choices[13][1] = "Log-shipping.";
 choices[13][2] = "Disk buffering.";
 choices[13][3] = "S&iacute;ncrona.";
 answers[13] = choices[13][3];
 units[13] = "53";
 comments[13] = "Id Pregunta: 849. Xunta de Galicia 2015";


//  Id pregunta: 736 Año de creación de pregunta: 2016
 questions[14]= "15)  Las iniciativas que se lancen al amparo del Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE se ce&ntilde;ir&aacute;n a:";
 choices[14]= new Array();
 choices[14][0] = "6 principios.";
 choices[14][1] = "7 principios.";
 choices[14][2] = "5 principios.";
 choices[14][3] = "6 directrices.";
 answers[14] = choices[14][1];
 units[14] = "28";
 comments[14] = "Id Pregunta: 736. Estrategia TIC";


//  Id pregunta: 309 Año de creación de pregunta: 2016
 questions[15]= "16)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a los Cuestores:";
 choices[15]= new Array();
 choices[15][0] = "Son miembros de la Mesa del Parlamento Europeo con voz pero sin voto.";
 choices[15][1] = "No son miembros de la Mesa del Parlamento Europeo.";
 choices[15][2] = "Son miembros de la Mesa del Parlamento Europeo con voz y voto.";
 choices[15][3] = "Los Cuestores forman parte de la Mesa del Parlamento Europeo en un n&uacute;mero igual a tres.";
 answers[15] = choices[15][0];
 units[15] = "5";
 comments[15] = "Id Pregunta: 309. UNION EUROPEA";


//  Id pregunta: 778 Año de creación de pregunta: 2016
 questions[16]= "17)  Los &oacute;rganos administrativos podr&aacute;n dirigir las actividades de sus &oacute;rganos jer&aacute;rquicamente dependientes mediante:";
 choices[16]= new Array();
 choices[16][0] = "circulares";
 choices[16][1] = "reglamentos internos";
 choices[16][2] = "instrucciones y &oacute;rdenes de servicio";
 choices[16][3] = "disposiciones de car&aacute;cter general";
 answers[16] = choices[16][2];
 units[16] = "4, 7, 8, 9";
 comments[16] = "Id Pregunta: 778. Ley 40/2015";


//  Id pregunta: 435 Año de creación de pregunta: 2016
 questions[17]= "18)  Sobre el servicio com&uacute;n Autentica, se&ntilde;ale la respuesta correcta:";
 choices[17]= new Array();
 choices[17][0] = "Autentica ofrece &uacute;nicamente servicios de autenticaci&oacute;n de empleados p&uacute;blicos de las AA.PP. y usuarios relacionados,";
 choices[17][1] = "Su objetivo es constituirse como el servicio com&uacute;n compartido de referencia para los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado, para sus aplicaciones internas.";
 choices[17][2] = "El servicio provee atributos de los usuarios autenticados relacionados con la unidad y el puesto de destino, incluyendo correo electr&oacute;nico y tel&eacute;fono.";
 choices[17][3] = "Ofrece funcionalidad de autorizaci&oacute;n de usuarios, &uacute;nicamente pertenecientes a la Administraci&oacute;n General del Estado.";
 answers[17] = choices[17][2];
 units[17] = "43";
 comments[17] = "Id Pregunta: 435. SERVICIOS COMUNES";


//  Id pregunta: 96 Año de creación de pregunta: 2016
 questions[18]= "19)  Indique cu&aacute;l de las siguientes soluciones tecnol&oacute;gicas NO se utiliza para virtualizaci&oacute;n:";
 choices[18]= new Array();
 choices[18][0] = "VMware ESX";
 choices[18][1] = "XenServer";
 choices[18][2] = "Alfresco";
 choices[18][3] = "Microsoft Hyper-V";
 answers[18] = choices[18][2];
 units[18] = "54";
 comments[18] = "Id Pregunta: 96. AGE A1 2015";


//  Id pregunta: 159 Año de creación de pregunta: 2016
 questions[19]= "20)  Seg&uacute;n la ley 39/2015, los actos administrativos, a menos que su naturaleza exija otra forma m&aacute;s adecuada de expresi&oacute;n y constancia, se producir&aacute;n: ";
 choices[19]= new Array();
 choices[19][0] = "verbalmente";
 choices[19][1] = "por escrito a trav&eacute;s de medios electr&oacute;nicos o no electr&oacute;nicos";
 choices[19][2] = "por escrito a trav&eacute;s de medios electr&oacute;nicos";
 choices[19][3] = "por escrito a trav&eacute;s de medios no electr&oacute;nicos";
 answers[19] = choices[19][2];
 units[19] = "7";
 comments[19] = "Id Pregunta: 159. Ley 39/2015, Art&iacute;culo 36";


//  Id pregunta: 678 Año de creación de pregunta: 2016
 questions[20]= "21)  De acuerdo a la Ley 39/2006, de 14 de diciembre, de Promoci&oacute;n de la Autonom&iacute;a Personal y Atenci&oacute;n a las personas en situaci&oacute;n de dependencia, se define dependencia como:";
 choices[20]= new Array();
 choices[20][0] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[20][1] = "El estado de car&aacute;cter permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[20][2] = "El estado de car&aacute;cter temporal en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 choices[20][3] = "El estado de car&aacute;cter temporal o permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad, la discapacidad o la baja laboral, y ligadas a la falta o a la p&eacute;rdida de autonom&iacute;a f&iacute;sica, mental, intelectual o sensorial, precisan de la atenci&oacute;n de otra u otras personas o ayudas importantes para realizar actividades b&aacute;sicas de la vida diaria o, en el caso de las personas con discapacidad intelectual o enfermedad mental, de otros apoyos para su autonom&iacute;a personal.";
 answers[20] = choices[20][1];
 units[20] = "14";
 comments[20] = "Id Pregunta: 678. Dependencia";


//  Id pregunta: 698 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;Qu&eacute; es SonarQube?";
 choices[21]= new Array();
 choices[21][0] = "Una m&eacute;trica de calidad orientada a estandarizar la evaluaci&oacute;n cualitativa del c&oacute;digo fuente.";
 choices[21][1] = "Una plataforma Open Source de inspecci&oacute;n continua de la calidad del c&oacute;digo.";
 choices[21][2] = "Una herramienta propietaria para la integraci&oacute;n continua, integrada en Apache Jenkins.";
 choices[21][3] = "Una herramienta multiplataforma para la evaluaci&oacute;n de la calidad en el c&oacute;digo desarrollada en VisualBasic 6.";
 answers[21] = choices[21][2];
 units[21] = "92";
 comments[21] = "Id Pregunta: 698. INTEGRACION CONTINUA";


//  Id pregunta: 364 Año de creación de pregunta: 2016
 questions[22]= "23)  &iquest;En qu&eacute; fecha entr&oacute; en vigor el Tratado de Amsterdam?:";
 choices[22]= new Array();
 choices[22][0] = "El 1 de junio de 1999.";
 choices[22][1] = "El 1 de mayo de 1999.";
 choices[22][2] = "El 1 de abril de 1999.";
 choices[22][3] = "El 1 de marzo de 1999.";
 answers[22] = choices[22][1];
 units[22] = "5";
 comments[22] = "Id Pregunta: 364. UNION EUROPEA";


//  Id pregunta: 482 Año de creación de pregunta: 2016
 questions[23]= "24)  De acuerdo con el art&iacute;culo 67 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, si las variaciones afectasen al volumen de endeudamiento a corto y largo plazo, ser&aacute; competencia del Consejo de Ministros cuando su importe exceda de la cuant&iacute;a de:";
 choices[23]= new Array();
 choices[23][0] = "12.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[23][1] = "13.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[23][2] = "11.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[23][3] = "10.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 answers[23] = choices[23][0];
 units[23] = "10";
 comments[23] = "Id Pregunta: 482. PRESUPUESTOS GENERALES";


//  Id pregunta: 287 Año de creación de pregunta: 2016
 questions[24]= "25)  Se&ntilde;ale cu&aacute;l no es un principio del Plan de acci&oacute;n de administraci&oacute;n electr&oacute;nica 2016-2020:";
 choices[24]= new Array();
 choices[24][0] = "Versi&oacute;n digital prioritaria.";
 choices[24][1] = "Principio de &laquo;solo una vez&raquo;.";
 choices[24][2] = "Inclusi&oacute;n y accesibilidad.";
 choices[24][3] = "Apertura y transparencia.";
 answers[24] = choices[24][0];
 units[24] = "5";
 comments[24] = "Id Pregunta: 287. UNION EUROPEA";


//  Id pregunta: 648 Año de creación de pregunta: 2016
 questions[25]= "26)  Los IDS, (Sistemas de Detecci&oacute;n de Intrusos), pueden clasificarse:";
 choices[25]= new Array();
 choices[25][0] = "Solamente en funci&oacute;n de los sistemas que monitorizan.";
 choices[25][1] = "En funci&oacute;n de los sistemas que monitorizan y en funci&oacute;n de c&oacute;mo operan los Sistemas de Detecci&oacute;n de Intrusos.";
 choices[25][2] = "Solamente en funci&oacute;n de c&oacute;mo operan los Sistemas de Detecci&oacute;n de Intrusos.";
 choices[25][3] = "Estos sistemas es imposible clasificarlos.";
 answers[25] = choices[25][1];
 units[25] = "119";
 comments[25] = "Id Pregunta: 648. Junta de Extremadura A1 2015";


//  Id pregunta: 768 Año de creación de pregunta: 2016
 questions[26]= "27)  Las Administraciones P&uacute;blicas sirven con objetividad los intereses generales, con sometimiento pleno a la Constituci&oacute;n, a la Ley y al Derecho y act&uacute;an de acuerdo con los principios de:";
 choices[26]= new Array();
 choices[26][0] = "eficacia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[26][1] = "eficiencia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 choices[26][2] = "eficacia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[26][3] = "eficiencia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 answers[26] = choices[26][2];
 units[26] = "4, 7, 8, 9";
 comments[26] = "Id Pregunta: 768. Ley 40/2015";


//  Id pregunta: 692 Año de creación de pregunta: 2016
 questions[27]= "28)  Se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[27]= new Array();
 choices[27][0] = "El Reglamento (UE) 910/2014 no prev&eacute; la emisi&oacute;n de certificados de firma electr&oacute;nica a favor de personas jur&iacute;dicas o entidades sin personalidad jur&iacute;dica";
 choices[27][1] = "Con la aprobaci&oacute;n del Reglamento (UE) 910/2014 queda derogada la Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica";
 choices[27][2] = "El Reglamento (UE) 910/2014 desplaza desde el 1 de julio de 2016 los preceptos de la Ley 59/2003 que se opongan a su contenido";
 choices[27][3] = "A partir del 1 de julio de 2016 dejar&aacute;n de emitirse certificados de firma electr&oacute;nica de personas jur&iacute;dicas y entidades sin personalidad jur&iacute;dica, pudiendo en su lugar expedirse certificados de sello electr&oacute;nico o certificados de firma de persona f&iacute;sica representante";
 answers[27] = choices[27][1];
 units[27] = "77";
 comments[27] = "Id Pregunta: 692. http://www.minetad.gob.es/telecomunicaciones/es-ES/Servicios/FirmaElectronica/Documents/nota-web-certifs-pers-juridica.pdf";


//  Id pregunta: 565 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Qu&eacute; limites marca el &quot;pacto fiscal europeo&quot; de 2012 para sus Estados Miembros?";
 choices[28]= new Array();
 choices[28][0] = "Un d&eacute;ficit estructural &lt; 1% del PIB y deuda p&uacute;blica &lt; 40% del PIB";
 choices[28][1] = "Un d&eacute;ficit estructural &lt; 1% del PIB y deuda p&uacute;blica &lt; 60% del PIB";
 choices[28][2] = "Un d&eacute;ficit estructural &lt; 0,5% del PIB y deuda p&uacute;blica &lt; 50% del PIB";
 choices[28][3] = "Un d&eacute;ficit estructural &lt; 0,5% del PIB y deuda p&uacute;blica &lt; 60% del PIB";
 answers[28] = choices[28][3];
 units[28] = "12";
 comments[28] = "Id Pregunta: 565. Modelo econ&oacute;mico";


//  Id pregunta: 340 Año de creación de pregunta: 2016
 questions[29]= "30)  En el &aacute;mbito de las relaciones internacionales de la Comunidad Europea con terceros pa&iacute;ses:";
 choices[29]= new Array();
 choices[29][0] = "El Consejo negocia los tratados internacionales y la Comisi&oacute;n los aprueba.";
 choices[29][1] = "La Comisi&oacute;n negocia los tratados internacionales y el Parlamento Europeo los sanciona.";
 choices[29][2] = "La Comisi&oacute;n negocia los tratados internacionales y el Consejo los aprueba.";
 choices[29][3] = "Un n&uacute;mero indeterminado de diputados europeos negocia ios tratados internacionales y la Comisi&oacute;n los aprueba.";
 answers[29] = choices[29][2];
 units[29] = "5";
 comments[29] = "Id Pregunta: 340. UNION EUROPEA";


//  Id pregunta: 37 Año de creación de pregunta: 2016
 questions[30]= "31)  Seg&uacute;n el proyecto GNU, &iquest;cu&aacute;l de las siguientes NO puede ser considerada una libertad esencial del software libre?";
 choices[30]= new Array();
 choices[30][0] = "La libertad de ejecutar el programa como se desee, con cualquier prop&oacute;sito.";
 choices[30][1] = "La libertad de estudiar c&oacute;mo funciona el programa, y modificarlo para que tenga la funcionalidad deseada.";
 choices[30][2] = "La libertad de redistribuir copias para ayudar al pr&oacute;jimo.";
 choices[30][3] = "La libertad de distribuir a terceros versiones modificadas siempre que no tengan uso comercial.";
 answers[30] = choices[30][3];
 units[30] = "66";
 comments[30] = "Id Pregunta: 37. AGE A1 2015";


//  Id pregunta: 405 Año de creación de pregunta: 2016
 questions[31]= "32)  Se&ntilde;ala las Directivas referidas a la Igualdad de trato de oportunidades entre hombre y mujeres:";
 choices[31]= new Array();
 choices[31][0] = "Directiva 2002/73/CE del Parlamento Europeo y del Consejo.";
 choices[31][1] = "Directiva 2004/113/CE del Consejo.";
 choices[31][2] = "Todas son correctas.";
 choices[31][3] = "Todas son falsas.";
 answers[31] = choices[31][2];
 units[31] = "14";
 comments[31] = "Id Pregunta: 405. POLITICAS DE IGUALDAD";


//  Id pregunta: 114 Año de creación de pregunta: 2016
 questions[32]= "33)  &iquest;Qu&eacute; es la Garant&iacute;a Juvenil?";
 choices[32]= new Array();
 choices[32][0] = "Una iniciativa europea que pretende facilitar el acceso de los j&oacute;venes al mercado de trabajo ofreci&eacute;ndoles una oferta de empleo, de educaci&oacute;n o formaci&oacute;n tras haber finalizado sus estudios o quedar desempleados";
 choices[32][1] = "Un Plan que permite la concesi&oacute;n de subvenciones a j&oacute;venes para facilitar el alquiler de su vivienda habitual.";
 choices[32][2] = "Un Plan que concede cr&eacute;ditos en condiciones ventajosas a j&oacute;venes emprendedores";
 choices[32][3] = "Una inciativa europea que facilita a los j&oacute;venes el acceso a las nuevas tecnolog&iacute;as";
 answers[32] = choices[32][0];
 units[32] = "15";
 comments[32] = "Id Pregunta: 114. ";


//  Id pregunta: 544 Año de creación de pregunta: 2016
 questions[33]= "34)  &iquest;Cu&aacute;l es el &oacute;rgano superior de gobernanza TIC en la Administraci&oacute;n General del Estado?";
 choices[33]= new Array();
 choices[33][0] = "El Comit&eacute; de Direcci&oacute;n TIC";
 choices[33][1] = "El Consejo Superior de Administraci&oacute;n Electr&oacute;nica";
 choices[33][2] = "La Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[33][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[33] = choices[33][3];
 units[33] = "26";
 comments[33] = "Id Pregunta: 544. Gobernanza TIC";


//  Id pregunta: 243 Año de creación de pregunta: 2016
 questions[34]= "35)  &iquest;En qu&eacute; Art&iacute;culo de la Constituci&oacute;n de 1978 se hace referencia a la regulaci&oacute;n de la instituci&oacute;n del Defensor del Pueblo?";
 choices[34]= new Array();
 choices[34][0] = "Art&iacute;culo 70.";
 choices[34][1] = "Art&iacute;culo 54.";
 choices[34][2] = "Articulo 62.";
 choices[34][3] = "Articulo 55. 5.";
 answers[34] = choices[34][2];
 units[34] = "1";
 comments[34] = "Id Pregunta: 243. CONSTITUCION1978";


//  Id pregunta: 149 Año de creación de pregunta: 2016
 questions[35]= "36)  Seg&uacute;n establece la Ley 39/2015, las Administraciones P&uacute;blicas har&aacute;n p&uacute;blico un Plan Normativo que:";
 choices[35]= new Array();
 choices[35][0] = "Contendr&aacute; las iniciativas legales y reglamentarias que hayan sido aprobadas en el a&ntilde;o en curso y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[35][1] = "Contendr&aacute; exclusivamente las iniciativas legales que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[35][2] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[35][3] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Bolet&iacute;n Oficial de la Administraci&oacute;n P&uacute;blica correspondiente";
 answers[35] = choices[35][2];
 units[35] = "7";
 comments[35] = "Id Pregunta: 149. Ley 39/2015, Art&iacute;culo 132";


//  Id pregunta: 376 Año de creación de pregunta: 2016
 questions[36]= "37)  El Defensor del Pueblo Europeo puede ser consultado por:";
 choices[36]= new Array();
 choices[36][0] = "Personas con residencia en la Uni&oacute;n pero s&oacute;lo personas f&iacute;sicas.";
 choices[36][1] = "Personas con nacionalidad europea.";
 choices[36][2] = "Personas con nacionalidad y pa&iacute;ses asociados.";
 choices[36][3] = "Toda persona f&iacute;sica (ciudadanos) o jur&iacute;dica (instituciones o empresas) que residan en la Uni&oacute;n.";
 answers[36] = choices[36][3];
 units[36] = "5";
 comments[36] = "Id Pregunta: 376. UNION EUROPEA";


//  Id pregunta: 587 Año de creación de pregunta: 2016
 questions[37]= "38)  &iquest;Qui&eacute;n y cu&aacute;ndo presenta el informe de seguimiento sobre el grado de avance de la implementaci&oacute;n de la Estrategia TIC?";
 choices[37]= new Array();
 choices[37][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, anualmente";
 choices[37][1] = "La Secretar&iacute;a General de Administraci&oacute;n Digital con apoyo de las CMADs, bienalmente";
 choices[37][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, bienalmente";
 choices[37][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, sin periodicidad definida";
 answers[37] = choices[37][0];
 units[37] = "19";
 comments[37] = "Id Pregunta: 587. Estrategia TIC";


//  Id pregunta: 281 Año de creación de pregunta: 2016
 questions[38]= "39)  Se&ntilde;ale la respuesta falsa:";
 choices[38]= new Array();
 choices[38][0] = "El Semestre Europeo es un ciclo de coordinaci&oacute;n de las pol&iacute;ticas econ&oacute;micas y presupuestarias dentro de la UE.";
 choices[38][1] = "Se centra en los primeros seis meses de cada a&ntilde;o, de ah&iacute; que se denomine &quot;Semestre&quot;.";
 choices[38][2] = "Durante el Semestre Europeo los Estados miembros ajustan sus pol&iacute;ticas presupuestarias y econ&oacute;micas a los objetivos y normas acordados a escala de la UE.";
 choices[38][3] = "Incluye reformas estructurales, dedicadas a promover el crecimiento y el empleo de conformidad con la Estrategia de Lisboa.";
 answers[38] = choices[38][3];
 units[38] = "5";
 comments[38] = "Id Pregunta: 281. UNION EUROPEA";


//  Id pregunta: 307 Año de creación de pregunta: 2016
 questions[39]= "40)  Las elecciones al Parlamento Europeo tienen lugar cada:";
 choices[39]= new Array();
 choices[39][0] = "Seis a&ntilde;os.";
 choices[39][1] = "Cinco a&ntilde;os.";
 choices[39][2] = "Cuatro a&ntilde;os.";
 choices[39][3] = "Ocho a&ntilde;os.";
 answers[39] = choices[39][1];
 units[39] = "5";
 comments[39] = "Id Pregunta: 307. UNION EUROPEA";


//  Id pregunta: 468 Año de creación de pregunta: 2016
 questions[40]= "41)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, elaborar la documentaci&oacute;n estad&iacute;stico-contable de car&aacute;cter oficial del Sistema de la Seguridad Social es una competencia de:";
 choices[40]= new Array();
 choices[40][0] = "El Ministerio de Hacienda.";
 choices[40][1] = "El Ministerio de Econom&iacute;a.";
 choices[40][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[40][3] = "Ninguna de las respuestas es correcta.";
 answers[40] = choices[40][2];
 units[40] = "10";
 comments[40] = "Id Pregunta: 468. PRESUPUESTOS GENERALES";


//  Id pregunta: 499 Año de creación de pregunta: 2016
 questions[41]= "42)  A tenor de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la cuant&iacute;a global de los anticipos de caja fija no podr&aacute; superar para cada ministerio y organismo aut&oacute;nomo:";
 choices[41]= new Array();
 choices[41][0] = "El 7% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[41][1] = "El 5% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[41][2] = "El 6% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 choices[41][3] = "El 8% del total de cr&eacute;ditos del cap&iacute;tulo destinado a gastos corrientes en bienes y servicios del presupuesto vigente en cada momento.";
 answers[41] = choices[41][0];
 units[41] = "10";
 comments[41] = "Id Pregunta: 499. PRESUPUESTOS GENERALES";


//  Id pregunta: 762 Año de creación de pregunta: 2016
 questions[42]= "43)  La Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico, establece y regula (se&ntilde;ala la incorrecta):";
 choices[42]= new Array();
 choices[42][0] = "las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[42][1] = "los principios del sistema de responsabilidad de las Administraciones P&uacute;blicas y de la potestad sancionadora";
 choices[42][2] = "el procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas";
 choices[42][3] = "la organizaci&oacute;n y funcionamiento de la Administraci&oacute;n General del Estado y de su sector p&uacute;blico institucional para el desarrollo de sus actividades";
 answers[42] = choices[42][2];
 units[42] = "4, 7, 8, 9";
 comments[42] = "Id Pregunta: 762. Ley 40/2015";


//  Id pregunta: 561 Año de creación de pregunta: 2016
 questions[43]= "44)  El plan nacional de ciudades inteligentes...";
 choices[43]= new Array();
 choices[43][0] = "Es una apuesta liderada por la Federaci&oacute;n Espa&ntilde;ola de Municipios y Provincias";
 choices[43][1] = "Es una apuesta del ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[43][2] = "Es una apuesta liderada por una gran asociaci&oacute;n de empresas tecnol&oacute;gicas nacionales";
 choices[43][3] = "No existe";
 answers[43] = choices[43][1];
 units[43] = "19";
 comments[43] = "Id Pregunta: 561. Ciudades Inteligentes";


//  Id pregunta: 308 Año de creación de pregunta: 2016
 questions[44]= "45)  El Tribunal de Justicia se cre&oacute; en:";
 choices[44]= new Array();
 choices[44][0] = "El Tratado de la CECA.";
 choices[44][1] = "El Tratado de Niza.";
 choices[44][2] = "El Tratado de &Aacute;msterdam.";
 choices[44][3] = "El Tratado de Lisboa.";
 answers[44] = choices[44][0];
 units[44] = "5";
 comments[44] = "Id Pregunta: 308. UNION EUROPEA";


//  Id pregunta: 557 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;Qu&eacute; ministerios han liderado la elaboraci&oacute;n de la Agenda Digital para Espa&ntilde;a?";
 choices[45]= new Array();
 choices[45][0] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica ";
 choices[45][1] = "El Ministerio de Energ&iacute;a, Turismo y Agenda Digital y el Ministerio de Econom&iacute;a, Industria y Competitividad";
 choices[45][2] = "El Ministerio de Econom&iacute;a, Industria y Competitividad y el Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[45][3] = "Ninguno de ellos, puesto que ha venido elaborada desde los organismos de la UE";
 answers[45] = choices[45][0];
 units[45] = "19";
 comments[45] = "Id Pregunta: 557. Agenda Digital";


//  Id pregunta: 526 Año de creación de pregunta: 2016
 questions[46]= "47)  Los menores incapacitados, cuando la extensi&oacute;n de la incapacitaci&oacute;n afecte al ejercicio y defensa de los derechos o intereses de que se trate:";
 choices[46]= new Array();
 choices[46][0] = "tienen capacidad de obrar limitada";
 choices[46][1] = "pueden actuar sin la asistencia de la persona que ejerza la patria potestad, tutela o curatela";
 choices[46][2] = "no tienen capacidad de obrar";
 choices[46][3] = "ninguna es correcta";
 answers[46] = choices[46][2];
 units[46] = "7";
 comments[46] = "Id Pregunta: 526. LEY 39/2015";


//  Id pregunta: 102 Año de creación de pregunta: 2016
 questions[47]= "48)  Entre las caracter&iacute;sticas de las Bases de Datos NoSQL se encuentran:";
 choices[47]= new Array();
 choices[47][0] = "Pueden manejar enormes cantidades de datos estructurados";
 choices[47][1] = "Existe un control estricto de las transacciones (propiedades ACID - Atomicidad, Consistencia, Aislamiento y Durabilidad)";
 choices[47][2] = "Se basan en sistemas distribuidos";
 choices[47][3] = "Se basan en el modelo de datos relacional";
 answers[47] = choices[47][2];
 units[47] = "73";
 comments[47] = "Id Pregunta: 102. ";


//  Id pregunta: 562 Año de creación de pregunta: 2016
 questions[48]= "49)  &iquest;Cu&aacute;l de los siguientes per&iacute;odos puede considerarse de crecimiento econ&oacute;mico en Espa&ntilde;a?";
 choices[48]= new Array();
 choices[48][0] = "Entre 1973 y 1978";
 choices[48][1] = "Entre 1992 y 1996";
 choices[48][2] = "Entre 1978 y 1985";
 choices[48][3] = "Entre 2008 y 2013";
 answers[48] = choices[48][2];
 units[48] = "12";
 comments[48] = "Id Pregunta: 562. Modelo econ&oacute;mico";


//  Id pregunta: 842 Año de creación de pregunta: 2016
 questions[49]= "50)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Los &oacute;rganos colegiados de la Administraci&oacute;n General del Estado y de sus Organismos p&uacute;blicos, por su composici&oacute;n, se clasifican en:";
 choices[49]= new Array();
 choices[49][0] = "&Oacute;rganos colegiados interministeriales, si sus miembros proceden de diferentes Ministerios.";
 choices[49][1] = "&Oacute;rganos colegiados ministeriales, si sus componentes proceden de los &oacute;rganos del mismo Ministerio.";
 choices[49][2] = "A y B son correctas.";
 choices[49][3] = "A y B son incorrectas.";
 answers[49] = choices[49][2];
 units[49] = "4, 7, 8, 9";
 comments[49] = "Id Pregunta: 842. Ley 40/2015";


//  Id pregunta: 47 Año de creación de pregunta: 2016
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas es propia de OCSP?";
 choices[50]= new Array();
 choices[50][0] = "Es un m&eacute;todo de validaci&oacute;n del estado de un certificado electr&oacute;nico que emplea suplementariamente la descarga y consulta de CRLs.";
 choices[50][1] = "Permite la consulta off-line del estado de revocaci&oacute;n de un certificado proporcionado por una autoridad de certificaci&oacute;n.";
 choices[50][2] = "No permite implementar mecanismos de tarificaci&oacute;n.";
 choices[50][3] = "Permite verificar el estado de los certificados mediante la consulta a una autoridad de validaci&oacute;n.";
 answers[50] = choices[50][3];
 units[50] = "78";
 comments[50] = "Id Pregunta: 47. AGE A1 2015";


//  Id pregunta: 157 Año de creación de pregunta: 2016
 questions[51]= "52)  Seg&uacute;n la ley 39/2015, los actos administrativos ser&aacute;n objeto de publicaci&oacute;n cuando (se&ntilde;ala la incorrecta):";
 choices[51]= new Array();
 choices[51][0] = "la Administraci&oacute;n estime que la notificaci&oacute;n efectuada a un solo interesado es insuficiente para garantizar la notificaci&oacute;n a todos, no siendo necesaria la notificaci&oacute;n individualizada en este caso";
 choices[51][1] = "se trate de actos integrantes de un procedimiento selectivo o de concurrencia competitiva de cualquier tipo";
 choices[51][2] = "el acto tenga por destinatario a una pluralidad indeterminada de personas";
 choices[51][3] = "as&iacute; lo establezcan las normas reguladoras de cada procedimiento o lo aconsejen razones de inter&eacute;s p&uacute;blico apreciadas por el &oacute;rgano competente";
 answers[51] = choices[51][0];
 units[51] = "7";
 comments[51] = "Id Pregunta: 157. Ley 39/2015, Art&iacute;culo 45";


//  Id pregunta: 46 Año de creación de pregunta: 2016
 questions[52]= "53)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[52]= new Array();
 choices[52][0] = "En un sistema de cifrado de clave asim&eacute;trica la seguridad radica en la transmisi&oacute;n de la clave, mediante canal seguro, entre el emisor y el receptor del mensaje.";
 choices[52][1] = "Las huellas digitales devueltas por una misma funci&oacute;n hash tienen id&eacute;ntica longitud.";
 choices[52][2] = "Para ofrecer un nivel de seguridad equivalente, los sistemas de clave p&uacute;blica requieren menores longitudes de clave que los sistemas sim&eacute;tricos.";
 choices[52][3] = "Se denomina criptograma al procedimiento empleado para cifrar un mensaje.";
 answers[52] = choices[52][1];
 units[52] = "76";
 comments[52] = "Id Pregunta: 46. AGE A1 2015";


//  Id pregunta: 839 Año de creación de pregunta: 2016
 questions[53]= "54)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[53]= new Array();
 choices[53][0] = "El &oacute;rgano administrativo que se estime incompetente para la resoluci&oacute;n de un asunto remitir&aacute; directamente las actuaciones al &oacute;rgano superior, debiendo notificar esta circunstancia a los interesados.";
 choices[53][1] = "Los interesados que sean parte en el procedimiento podr&aacute;n dirigirse al &oacute;rgano que se encuentre conociendo de un asunto para que decline su competencia y remita las actuaciones al &oacute;rgano competente.";
 choices[53][2] = "Asimismo, podr&aacute;n dirigirse al &oacute;rgano que estimen competente para que requiera de inhibici&oacute;n al que est&eacute; conociendo del asunto.";
 choices[53][3] = "Los conflictos de atribuciones s&oacute;lo podr&aacute;n suscitarse entre &oacute;rganos de una misma Administraci&oacute;n no relacionados jer&aacute;rquicamente, y respecto a asuntos sobre los que no haya finalizado el procedimiento administrativo.";
 answers[53] = choices[53][0];
 units[53] = "4, 7, 8, 9";
 comments[53] = "Id Pregunta: 839. Ley 40/2015";


//  Id pregunta: 97 Año de creación de pregunta: 2016
 questions[54]= "55)  Indique la opci&oacute;n correcta respecto al Portal de Transparencia del Gobierno de Espa&ntilde;a:";
 choices[54]= new Array();
 choices[54][0] = "Incluye informaci&oacute;n acerca de las Entidades Locales.";
 choices[54][1] = "La solicitud de informaci&oacute;n disponible, amparada por el derecho de acceso presente en la Ley 19/2013, no precisa identificaci&oacute;n.";
 choices[54][2] = "No incluye informaci&oacute;n acerca de &oacute;rganos Constitucionales.";
 choices[54][3] = "El Portal es gestionado por el Consejo de Transparencia y Buen Gobierno.";
 answers[54] = choices[54][2];
 units[54] = "22";
 comments[54] = "Id Pregunta: 97. AGE A1 2015";


//  Id pregunta: 730 Año de creación de pregunta: 2016
 questions[55]= "56)  Cu&aacute;l de las siguientes caracter&iacute;sticas es especifican de Kanban:";
 choices[55]= new Array();
 choices[55][0] = "Se definen iteraciones";
 choices[55][1] = "Se limitan las tareas que se pueden realizar por fase";
 choices[55][2] = "Los miembros del equipo no tienen un rol especifico";
 choices[55][3] = "Todas las anteriores son caracter&iacute;sticas de la metodolog&iacute;a Kanban.";
 answers[55] = choices[55][1];
 units[55] = "34, 84";
 comments[55] = "Id Pregunta: 730. Metodologias &aacute;giles";


//  Id pregunta: 164 Año de creación de pregunta: 2016
 questions[56]= "57)  En el contexto del Mercado &Uacute;nico Digital, &iquest;qu&eacute; significa la eliminaci&oacute;n del geobloqueo?";
 choices[56]= new Array();
 choices[56][0] = "Introducir medidas destinadas a mejorar la transparencia en materia de precios y la vigilancia regulatoria del mercado transfronterizo de paqueter&iacute;a";
 choices[56][1] = "Eliminar la denegaci&oacute;n de acceso a sitios internet basados en otro pa&iacute;s de la UE o que se cobren precios distintos en funci&oacute;n de la localizaci&oacute;n de un cliente";
 choices[56][2] = "Promover medidas para permitir a los vendedores de bienes f&iacute;sicos beneficiarse del registro y pago electr&oacute;nicos &uacute;nicos y de la introducci&oacute;n de un umbral com&uacute;n del IVA que ayude a las nuevas empresas innovadoras a trabajar en l&iacute;nea";
 choices[56][3] = "Presentar una iniciativa europea sobre computaci&oacute;n en nube, incluidos los servicios de certificaci&oacute;n de la nube";
 answers[56] = choices[56][1];
 units[56] = "19";
 comments[56] = "Id Pregunta: 164. http://www.consilium.europa.eu/es/policies/digital-single-market-strategy/ A: &quot;mejora de la paqueter&iacute;a transfronteriza&quot;; C: &quot;Reducci&oacute;n de la burocracia relacionada con el IVA&quot;; D: &quot;Construir una econom&iacute;a de los datos&quot;";


//  Id pregunta: 834 Año de creación de pregunta: 2016
 questions[57]= "58)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta correcta.";
 choices[57]= new Array();
 choices[57][0] = "Los &oacute;rganos de las diferentes Administraciones P&uacute;blicas podr&aacute;n delegar el ejercicio de las competencias que tengan atribuidas en otros &oacute;rganos de la misma Administraci&oacute;n, aun cuando no sean jer&aacute;rquicamente dependientes, o en los Organismos p&uacute;blicos o Entidades de Derecho P&uacute;blico vinculados o dependientes de aqu&eacute;llas.";
 choices[57][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado, la delegaci&oacute;n de competencias deber&aacute; ser aprobada previamente por el &oacute;rgano ministerial de quien dependa el &oacute;rgano delegante y en el caso de los Organismos p&uacute;blicos o Entidades vinculados o dependientes, por el &oacute;rgano m&aacute;ximo de direcci&oacute;n, de acuerdo con sus normas de creaci&oacute;n. Cuando se trate de &oacute;rganos no relacionados jer&aacute;rquicamente ser&aacute; necesaria la aprobaci&oacute;n previa del superior com&uacute;n si ambos pertenecen al mismo Ministerio, o del &oacute;rgano superior de quien dependa el &oacute;rgano delegado, si el delegante y el delegado pertenecen a diferentes Ministerios.";
 choices[57][2] = "Asimismo, los &oacute;rganos de la Administraci&oacute;n General del Estado podr&aacute;n delegar el ejercicio de sus competencias propias en sus Organismos p&uacute;blicos y Entidades vinculados o dependientes, cuando resulte conveniente para alcanzar los fines que tengan asignados y mejorar la eficacia de su gesti&oacute;n. La delegaci&oacute;n deber&aacute; ser previamente aprobada por los &oacute;rganos de los que dependan el &oacute;rgano delegante y el &oacute;rgano delegado, o aceptada por este &uacute;ltimo cuando sea el &oacute;rgano m&aacute;ximo de direcci&oacute;n del Organismo p&uacute;blico o Entidad vinculado o dependiente.";
 choices[57][3] = "Todas son correctas.";
 answers[57] = choices[57][3];
 units[57] = "4, 7, 8, 9";
 comments[57] = "Id Pregunta: 834. Ley 40/2015";


//  Id pregunta: 509 Año de creación de pregunta: 2016
 questions[58]= "59)  A tenor de lo dispuesto en el art&iacute;culo 14 de la Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, el pago de los intereses y el capital de la deuda p&uacute;blica de las Administraciones P&uacute;blicas gozar&aacute; de prioridad:";
 choices[58]= new Array();
 choices[58][0] = "Sobre otros gastos siempre que no superen el 80% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea.";
 choices[58][1] = "Sobre otros gastos siempre que no superen el 70% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea.";
 choices[58][2] = "Absoluta frente a cualquier otro gasto.";
 choices[58][3] = "Sobre otros gastos siempre que no superen el 60% del PIB nacional expresados en t&eacute;rminos nominales, o el que se establezca en la normativa europea";
 answers[58] = choices[58][2];
 units[58] = "10";
 comments[58] = "Id Pregunta: 509. PRESUPUESTOS GENERALES";


//  Id pregunta: 135 Año de creación de pregunta: 2016
 questions[59]= "60)  Dentro de las &uacute;ltimas medidas vigentes de impulso de la actividad econ&oacute;mica, la liberalizaci&oacute;n del comercio implica:";
 choices[59]= new Array();
 choices[59][0] = "La ampliaci&oacute;n a 90 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables, y la de los periodos de rebajas comerciales, a criterio del comerciante.";
 choices[59][1] = "La ampliaci&oacute;n a 90 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables durante todo el a&ntilde;o.";
 choices[59][2] = "La ampliaci&oacute;n a 100 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables, y la de los periodos de rebajas comerciales, a criterio del comerciante.";
 choices[59][3] = "La ampliaci&oacute;n a 100 horas semanales del horario m&aacute;ximo de apertura en d&iacute;as laborables durante todo el a&ntilde;o.";
 answers[59] = choices[59][0];
 units[59] = "12";
 comments[59] = "Id Pregunta: 135. Leyes modelo econ&oacute;mico";


//  Id pregunta: 438 Año de creación de pregunta: 2016
 questions[60]= "61)  El Real Decreto 424/2016, de 11 de noviembre establece la estructura org&aacute;nica b&aacute;sica de los departamentos ministeriales. Se&ntilde;ale la respuesta falsa.";
 choices[60]= new Array();
 choices[60][0] = "Dentro del Ministerio de Energ&iacute;a, Turismo y Agenda Digital se encuentra la Secretar&iacute;a de Estado para la Sociedad de la Informaci&oacute;n y la Agenda Digital, de la que depende la Direcci&oacute;n General de Telecomunicaciones y Tecnolog&iacute;as de la Informaci&oacute;n.";
 choices[60][1] = "Suprime la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones.";
 choices[60][2] = "La Direcci&oacute;n General de Racionalizaci&oacute;n y Centralizaci&oacute;n de la Contrataci&oacute;n es un &oacute;rgano directivo perteneciente a la Subsecretar&iacute;a de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[60][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital, con rango de Direcci&oacute;n general depende de la Secretar&iacute;a de Estado de Funci&oacute;n P&uacute;blica.";
 answers[60] = choices[60][3];
 units[60] = "43";
 comments[60] = "Id Pregunta: 438. SERVICIOS COMUNES";


//  Id pregunta: 42 Año de creación de pregunta: 2016
 questions[61]= "62)  En relaci&oacute;n con BPEL, &iquest;cu&aacute;l de las siguientes afirmaciones es incorrecta?";
 choices[61]= new Array();
 choices[61][0] = "Es un lenguaje basado en XML para la definici&oacute;n y ejecuci&oacute;n de procesos de negocio utilizando Servicios Web.";
 choices[61][1] = "Es un lenguaje de orquestaci&oacute;n estandarizado por OASIS.";
 choices[61][2] = "BPEL proporciona manejadores (handlers) que permiten tratar situaciones excepcionales o inesperadas.";
 choices[61][3] = "En BPEL se utiliza WS-CDL en lugar de WSDL.";
 answers[61] = choices[61][3];
 units[61] = "86";
 comments[61] = "Id Pregunta: 42. AGE A1 2015";


//  Id pregunta: 150 Año de creación de pregunta: 2016
 questions[62]= "63)  Seg&uacute;n la ley 39/2015, el medio elegido por la persona para comunicarse con las Administraciones P&uacute;blicas:";
 choices[62]= new Array();
 choices[62][0] = "&uacute;nicamente podr&aacute; ser modificado cuando de no hacerlo se corra riesgo de no alcanzarse las pretensiones del interesado ";
 choices[62][1] = "no podr&aacute; ser modificado con posterioridad al tr&aacute;mite de audiencia";
 choices[62][2] = "podr&aacute; ser modificado en cualquier momento por la persona";
 choices[62][3] = "no podr&aacute; ser modificado de manera unilateral por el interesado";
 answers[62] = choices[62][2];
 units[62] = "7";
 comments[62] = "Id Pregunta: 150. Ley 39/2015, Art&iacute;culo 14";


//  Id pregunta: 267 Año de creación de pregunta: 2016
 questions[63]= "64)  El T&iacute;tulo Primero de la Constituci&oacute;n Espa&ntilde;ola est&aacute; dedicado a:";
 choices[63]= new Array();
 choices[63][0] = "Los Derechos y Deberes fundamentales.";
 choices[63][1] = "La Corona.";
 choices[63][2] = "El Poder Judicial.";
 choices[63][3] = "Las Cortes Generales.";
 answers[63] = choices[63][2];
 units[63] = "1";
 comments[63] = "Id Pregunta: 267. CONSTITUCION1978";


//  Id pregunta: 852 Año de creación de pregunta: 2016
 questions[64]= "65)  Si disponemos de 6 discos SAS de 1TB netos configurados en RAID5, &iquest;de qu&eacute; capacidad neta se dispone en RAID5 en el sistema de almacenamiento?";
 choices[64]= new Array();
 choices[64][0] = "6 TB.";
 choices[64][1] = "5 TB.";
 choices[64][2] = "7 TB.";
 choices[64][3] = "3 TB.";
 answers[64] = choices[64][1];
 units[64] = "53";
 comments[64] = "Id Pregunta: 852. Xunta de Galicia 2015";


//  Id pregunta: 816 Año de creación de pregunta: 2016
 questions[65]= "66)  Los Directores Insulares de la Administraci&oacute;n General del Estado (se&ntilde;ala la incorrecta):";
 choices[65]= new Array();
 choices[65][0] = "ser&aacute;n nombrados por el Delegado del Gobierno mediante el procedimiento de concurso-oposici&oacute;n";
 choices[65][1] = "ser&aacute;n nombrados entre funcionarios de carrera del Estado, de las Comunidades Aut&oacute;nomas o de las Entidades Locales, pertenecientes a Cuerpos o Escalas clasificados como Subgrupo A1";
 choices[65][2] = "dependen jer&aacute;rquicamente del Delegado del Gobierno en la Comunidad Aut&oacute;noma o del Subdelegado del Gobierno en la provincia, cuando este cargo exista";
 choices[65][3] = "ejercen, en su &aacute;mbito territorial, las competencias atribuidas por esta Ley a los Subdelegados del Gobierno en las provincias";
 answers[65] = choices[65][0];
 units[65] = "4, 7, 8, 9";
 comments[65] = "Id Pregunta: 816. Ley 40/2015";


//  Id pregunta: 420 Año de creación de pregunta: 2016
 questions[66]= "67)  La Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, recoge que deber&aacute;n elaborar y aplicar un plan de igualdad, aquellas empresas con m&aacute;s de:";
 choices[66]= new Array();
 choices[66][0] = "150 trabajadores/as.";
 choices[66][1] = "200 trabajadores/as.";
 choices[66][2] = "250 trabajadores/as.";
 choices[66][3] = "300 trabajadores/as.";
 answers[66] = choices[66][2];
 units[66] = "14";
 comments[66] = "Id Pregunta: 420. POLITICAS DE IGUALDAD";


//  Id pregunta: 266 Año de creación de pregunta: 2016
 questions[67]= "68)  El T&iacute;tulo en el que la Constituci&oacute;n indica cu&aacute;les son las lenguas oficiales del Estado es:";
 choices[67]= new Array();
 choices[67][0] = "El Segundo.";
 choices[67][1] = "El Primero.";
 choices[67][2] = "El Preliminar.";
 choices[67][3] = "El Tercero.";
 answers[67] = choices[67][0];
 units[67] = "1";
 comments[67] = "Id Pregunta: 266. CONSTITUCION1978";


//  Id pregunta: 576 Año de creación de pregunta: 2016
 questions[68]= "69)  Se&ntilde;ale, de entre los siguientes, cu&aacute;l es un gestor de base de datos relacional:";
 choices[68]= new Array();
 choices[68][0] = "PostgreSQL";
 choices[68][1] = "Datawarehouse";
 choices[68][2] = "Snowflake";
 choices[68][3] = "CouchDB";
 answers[68] = choices[68][0];
 units[68] = "61";
 comments[68] = "Id Pregunta: 576. Tema 61. TAI 2016.";


//  Id pregunta: 225 Año de creación de pregunta: 2016
 questions[69]= "70)  Seg&uacute;n la Constituci&oacute;n espa&ntilde;ola, el instrumento fundamental para la participaci&oacute;n pol&iacute;tica son:";
 choices[69]= new Array();
 choices[69][0] = "las Cortes generales.";
 choices[69][1] = "los partidos pol&iacute;ticos.";
 choices[69][2] = "los sindicatos.";
 choices[69][3] = "las Comunidades Aut&oacute;nomas.";
 answers[69] = choices[69][1];
 units[69] = "1";
 comments[69] = "Id Pregunta: 225. CONSTITUCION1978";


//  Id pregunta: 70 Año de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Qui&eacute;n determina las condiciones t&eacute;cnicas normalizadas del Punto General de Entrada de Factura Electr&oacute;nica?";
 choices[70]= new Array();
 choices[70][0] = "La Secretar&iacute;a de Estado de Administraciones P&uacute;blicas conjuntamente con la Secretar&iacute;a de Estado de Presupuestos y Gastos";
 choices[70][1] = "La Secretar&iacute;a de Estado de Hacienda conjuntamente con la Comisi&oacute;n Ministerial de Administraci&oacute; Digital";
 choices[70][2] = "La Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n";
 choices[70][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 answers[70] = choices[70][0];
 units[70] = "75";
 comments[70] = "Id Pregunta: 70. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";


//  Id pregunta: 823 Año de creación de pregunta: 2016
 questions[71]= "72)  Debe abstenerse el funcionario que tiene relaci&oacute;n de servicio con interesado en el asunto o le ha prestado servicios profesionales en los ...";
 choices[71]= new Array();
 choices[71][0] = "Tres &uacute;ltimos a&ntilde;os";
 choices[71][1] = "Cinco &uacute;ltimos a&ntilde;os";
 choices[71][2] = "Cuatro &uacute;ltimos a&ntilde;os";
 choices[71][3] = "Dos &uacute;ltimos a&ntilde;os";
 answers[71] = choices[71][1];
 units[71] = "4, 7, 8, 9";
 comments[71] = "Id Pregunta: 823. Ley 40/2015";


//  Id pregunta: 529 Año de creación de pregunta: 2016
 questions[72]= "73)  Se presumir&aacute; la representaci&oacute;n para:";
 choices[72]= new Array();
 choices[72][0] = "formular solicitudes";
 choices[72][1] = "los actos y gestiones de mero tr&aacute;mite";
 choices[72][2] = "presentar declaraciones responsables o comunicaciones";
 choices[72][3] = "interponer recursos, desistir de acciones y renunciar a derechos en nombre de otra persona";
 answers[72] = choices[72][1];
 units[72] = "7";
 comments[72] = "Id Pregunta: 529. LEY 39/2015";


//  Id pregunta: 523 Año de creación de pregunta: 2016
 questions[73]= "74)  Se consideran interesados en el procedimiento administrativo:";
 choices[73]= new Array();
 choices[73][0] = "quienes lo promuevan como titulares de derechos o intereses leg&iacute;timos individuales o colectivos";
 choices[73][1] = "los que, habiendo iniciado el procedimiento, tengan derechos que puedan resultar afectados por la decisi&oacute;n que en el mismo se adopte";
 choices[73][2] = "aquellos cuyos intereses leg&iacute;timos, individuales o colectivos, puedan resultar afectados por la resoluci&oacute;n y se personen en el procedimiento durante el tr&aacute;mite de audiencia";
 choices[73][3] = "todas son correctas";
 answers[73] = choices[73][0];
 units[73] = "7";
 comments[73] = "Id Pregunta: 523. LEY 39/2015";


//  Id pregunta: 221 Año de creación de pregunta: 2016
 questions[74]= "75)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[74]= new Array();
 choices[74][0] = "De los derechos y deberes fundamentales.";
 choices[74][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[74][2] = "Derechos y libertades.";
 choices[74][3] = "De la Corona.";
 answers[74] = choices[74][0];
 units[74] = "1";
 comments[74] = "Id Pregunta: 221. CONSTITUCION1978";


