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
var preguntaids = new Array();

//  Id pregunta: 356 Año de creación de pregunta: 2016
 questions[0]= "1)  Se&ntilde;ale la respuesta correcta respecto a las directivas comunitarias:";
 choices[0]= new Array();
 choices[0][0] = "No se aplican directamente en los Estados.";
 choices[0][1] = "No son vinculantes.";
 choices[0][2] = "Habitualmente se dictan sobre materias que son competencias exclusivas de la Uni&oacute;n Europea.";
 choices[0][3] = "Tienen alcance general.";
 answers[0] = choices[0][0];
 units[0] = "5";
 comments[0] = "Id Pregunta: 356. UNION EUROPEA";
 preguntaids[0] = 356


//  Id pregunta: 731 Año de creación de pregunta: 2016
 questions[1]= "2)  Indique cual de los siguientes no forma parte del vocabulario de scrum";
 choices[1]= new Array();
 choices[1][0] = "Burn-up chart";
 choices[1][1] = "Arquitectural Skype";
 choices[1][2] = "Burn-down chart";
 choices[1][3] = "Definition of done";
 answers[1] = choices[1][1];
 units[1] = "34, 84";
 comments[1] = "Id Pregunta: 731. Metodologias &aacute;giles";
 preguntaids[1] = 731


//  Id pregunta: 583 Año de creación de pregunta: 2016
 questions[2]= "3)  &iquest;Qu&eacute; car&aacute;cter tiene la utilizaci&oacute;n de los medios y servicios compartidos?.";
 choices[2]= new Array();
 choices[2][0] = "Car&aacute;cter sustitutivo";
 choices[2][1] = "Car&aacute;cter obligatorio";
 choices[2][2] = "Car&aacute;cter obligatorio y sustitutivo, sin excepci&oacute;n alguna";
 choices[2][3] = "Ninguna de las anteriores";
 answers[2] = choices[2][3];
 units[2] = "19";
 comments[2] = "Id Pregunta: 583. Estrategia TIC. Car&aacute;cter obligatorio y sustitutivo, aunque se podr&aacute;n acordar excepciones";
 preguntaids[2] = 583


//  Id pregunta: 459 Año de creación de pregunta: 2016
 questions[3]= "4)  Seg&uacute;n el art&iacute;culo 44.3 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los cr&eacute;ditos para la acci&oacute;n protectora en su modalidad no contributiva y universal se especificar&aacute;n:";
 choices[3]= new Array();
 choices[3][0] = "A nivel de secci&oacute;n de programa.";
 choices[3][1] = "A nivel de grupo de programa.";
 choices[3][2] = "Ninguna de las respuestas es correcta.";
 choices[3][3] = "A nivel de programa.";
 answers[3] = choices[3][3];
 units[3] = "10";
 comments[3] = "Id Pregunta: 459. PRESUPUESTOS GENERALES";
 preguntaids[3] = 459


//  Id pregunta: 412 Año de creación de pregunta: 2016
 questions[4]= "5)  &Aacute;mbito de aplicaci&oacute;n de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombre:";
 choices[4]= new Array();
 choices[4][0] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Europeo.";
 choices[4][1] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Espa&ntilde;ol.";
 choices[4][2] = "Toda persona, f&iacute;sica o jur&iacute;dica, que act&uacute;e o se encuentre en territorio Internacional.";
 choices[4][3] = "Ninguna de ellas se ajusta al &aacute;mbito de aplicaci&oacute;n.";
 answers[4] = choices[4][1];
 units[4] = "14";
 comments[4] = "Id Pregunta: 412. POLITICAS DE IGUALDAD";
 preguntaids[4] = 412


//  Id pregunta: 70 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;Qui&eacute;n determina las condiciones t&eacute;cnicas normalizadas del Punto General de Entrada de Factura Electr&oacute;nica?";
 choices[5]= new Array();
 choices[5][0] = "La Secretar&iacute;a de Estado de Administraciones P&uacute;blicas conjuntamente con la Secretar&iacute;a de Estado de Presupuestos y Gastos";
 choices[5][1] = "La Secretar&iacute;a de Estado de Hacienda conjuntamente con la Comisi&oacute;n Ministerial de Administraci&oacute; Digital";
 choices[5][2] = "La Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n";
 choices[5][3] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 answers[5] = choices[5][0];
 units[5] = "75";
 comments[5] = "Id Pregunta: 70. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";
 preguntaids[5] = 70


//  Id pregunta: 676 Año de creación de pregunta: 2016
 questions[6]= "7)  En referencia a la implantaci&oacute;n de la interoperabilidad de la receta electr&oacute;nica:";
 choices[6]= new Array();
 choices[6][0] = "Permite los ciudadanos retiren sus medicamentos en las farmacias de fuera de la Comunidad Aut&oacute;noma en la que hayan sido recetados.";
 choices[6][1] = "Favorece la seguridad del paciente, al incorporar sistemas online de ayuda a la prescripci&oacute;n, que ayudan a la detecci&oacute;n de interaciones medicamentosas o duplicidades terap&eacute;uticas.";
 choices[6][2] = "Facilita al m&eacute;dico el seguimiento de la adherencia al tratamiento por parte del paciente.";
 choices[6][3] = "Todas las anteriores son correctas.";
 answers[6] = choices[6][3];
 units[6] = "47";
 comments[6] = "Id Pregunta: 676. Receta electr&oacute;nica";
 preguntaids[6] = 676


//  Id pregunta: 7 Año de creación de pregunta: 2016
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes asociaciones de protocolos y niveles OSI es correcta?";
 choices[7]= new Array();
 choices[7][0] = "Nivel 7 - MPLS.";
 choices[7][1] = "Nivel 3 - RARP.";
 choices[7][2] = "Nivel 2 - HDLC.";
 choices[7][3] = "Nivel 1 &ndash; CSMA/CD.";
 answers[7] = choices[7][2];
 units[7] = "105";
 comments[7] = "Id Pregunta: 7. AGE A1 2015";
 preguntaids[7] = 7


//  Id pregunta: 535 Año de creación de pregunta: 2016
 questions[8]= "9)  La falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n no impedir&aacute; que se tenga por realizado el acto de que se trate, siempre que se aporte aqu&eacute;lla o se subsane el defecto dentro del plazo de:";
 choices[8]= new Array();
 choices[8][0] = "5 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[8][1] = "10 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[8][2] = "15 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[8][3] = "20 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 answers[8] = choices[8][1];
 units[8] = "7";
 comments[8] = "Id Pregunta: 535. LEY 39/2015";
 preguntaids[8] = 535


//  Id pregunta: 85 Año de creación de pregunta: 2016
 questions[9]= "10)  Seg&uacute;n MAGERIT 3.0, el informe en el que se recogen los resultados de la identificaci&oacute;n de las amenazas relevantes sobre el sistema a analizar, caracterizadas por las estimaciones de ocurrencia y da&ntilde;o causado, se denomina:";
 choices[9]= new Array();
 choices[9][0] = "Estimaci&oacute;n del riesgo";
 choices[9][1] = "Evaluaci&oacute;n de salvaguardas";
 choices[9][2] = "Declaraci&oacute;n de aplicabilidad";
 choices[9][3] = "Mapa de riesgos";
 answers[9] = choices[9][3];
 units[9] = "45";
 comments[9] = "Id Pregunta: 85. AGE A1 2015";
 preguntaids[9] = 85


//  Id pregunta: 592 Año de creación de pregunta: 2016
 questions[10]= "11)  &iquest;Cu&aacute;les son objetivos estrat&eacute;gicos del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP?";
 choices[10]= new Array();
 choices[10][0] = "Incrementar la productividad y la eficacia del funcionamiento interno de la Administraci&oacute;n";
 choices[10][1] = "Convertir el canal digital en el preferente para la relaci&oacute;n de los ciudadanos y empresas con la Administraci&oacute;n";
 choices[10][2] = "Adoptar una estrategia corporativa de seguridad y usabilidad de los servicios p&uacute;blicos digitales";
 choices[10][3] = "Todos los anteriores";
 answers[10] = choices[10][3];
 units[10] = "19";
 comments[10] = "Id Pregunta: 592. Estrategia TIC";
 preguntaids[10] = 592


//  Id pregunta: 735 Año de creación de pregunta: 2016
 questions[11]= "12)  Son l&iacute;neas de acci&oacute;n del Plan de Transformaci&oacute;n Digital de la AGE y sus OOPP.";
 choices[11]= new Array();
 choices[11][0] = "Disponer de sistemas de an&aacute;lisis de datos para la toma de decisiones y de funcionarios formados adecuadamente.";
 choices[11][1] = "Que en el a&ntilde;o 2020 la Administraci&oacute;n espa&ntilde;ola ha de ser electr&oacute;nica.";
 choices[11][2] = "Un mejor formaci&oacute;n del funcionariado y una atenci&oacute;n al ciudadano acorde a las nuevas tecnolog&iacute;as.";
 choices[11][3] = "Desarrollar el puesto de trabajo digital y mejorar la satisfacci&oacute;n del usuario en el uso de los servicios p&uacute;blicos digitales.";
 answers[11] = choices[11][3];
 units[11] = "28";
 comments[11] = "Id Pregunta: 735. Estrategia TIC";
 preguntaids[11] = 735


//  Id pregunta: 432 Año de creación de pregunta: 2016
 questions[12]= "13)  Las sociedades obligadas a presentar cuenta de p&eacute;rdidas y ganancias no abreviada, procurar&aacute;n incluir en su Consejo de Administraci&oacute;n un n&uacute;mero de mujeres que permita alcanzar la presencia equilibrada de mujeres y hombres en un plazo:";
 choices[12]= new Array();
 choices[12][0] = "De ocho a&ntilde;os.";
 choices[12][1] = "El d&iacute;a despu&eacute;s de la publicaci&oacute;n en el BOE de la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombre.";
 choices[12][2] = "Ambas son correctas.";
 choices[12][3] = "No existe un l&iacute;mite.";
 answers[12] = choices[12][0];
 units[12] = "14";
 comments[12] = "Id Pregunta: 432. POLITICAS DE IGUALDAD";
 preguntaids[12] = 432


//  Id pregunta: 802 Año de creación de pregunta: 2016
 questions[13]= "14)  La Administraci&oacute;n General del Estado se organiza:";
 choices[13]= new Array();
 choices[13][0] = "en Ministerios";
 choices[13][1] = "en Presidencia del Gobierno y en Ministerios";
 choices[13][2] = "en Presidencia del Gobierno, en Ministerios y en Secretar&iacute;as Generales";
 choices[13][3] = "en Presidencia del Gobierno, en Ministerios, en Secretar&iacute;as Generales y en el Servicio Exterior";
 answers[13] = choices[13][1];
 units[13] = "4, 7, 8, 9";
 comments[13] = "Id Pregunta: 802. Ley 40/2015";
 preguntaids[13] = 802


//  Id pregunta: 554 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Cu&aacute;l de los siguientes no es uno de los pilares de la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[14]= new Array();
 choices[14][0] = "Establecer redes de telecomunicaciones continentales";
 choices[14][1] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa";
 choices[14][2] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar";
 choices[14][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital";
 answers[14] = choices[14][0];
 units[14] = "17";
 comments[14] = "Id Pregunta: 554. Mercado &Uacute;nico Digital";
 preguntaids[14] = 554


//  Id pregunta: 73 Año de creación de pregunta: 2016
 questions[15]= "16)  Seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Digitalizaci&oacute;n de Documentos, &iquest;cu&aacute;l de los siguientes metadatos no es considerado como metadato complementario?";
 choices[15]= new Array();
 choices[15][0] = "Resoluci&oacute;n, que indica el valor de resoluci&oacute;n en p&iacute;xeles por pulgada empleada en la digitalizaci&oacute;n.";
 choices[15][1] = "Origen, que indica si el contenido del documento fue creado por un ciudadano o por una administraci&oacute;n.";
 choices[15][2] = "Tama&ntilde;o, que indica el valor y unidades del tama&ntilde;o l&oacute;gico del documento digitalizado.";
 choices[15][3] = "Idioma, que indica el idioma del contenido del documento digitalizado.";
 answers[15] = choices[15][1];
 units[15] = "44";
 comments[15] = "Id Pregunta: 73. AGE A1 2015";
 preguntaids[15] = 73


//  Id pregunta: 161 Año de creación de pregunta: 2016
 questions[16]= "17)  Se&ntilde;alar cu&aacute;l NO es uno de los principios del Plan de Acci&oacute;n de Administraci&oacute;n Electr&oacute;nica 2016-2020";
 choices[16]= new Array();
 choices[16][0] = "Principio de solo una vez";
 choices[16][1] = "Apertura y transparencia";
 choices[16][2] = "Confianza y seguridad";
 choices[16][3] = "Estandarizaci&oacute;n de forma predeterminada";
 answers[16] = choices[16][3];
 units[16] = "19";
 comments[16] = "Id Pregunta: 161. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2016/Junio/Noticia-2016-06-02-Plan-accion-administracion-electronica-2016-2020.html#.WCjvuWrhDIU";
 preguntaids[16] = 161


//  Id pregunta: 582 Año de creación de pregunta: 2016
 questions[17]= "18)  &iquest;A qui&eacute;n corresponde la declaraci&oacute;n de medios y servicios compartidos?";
 choices[17]= new Array();
 choices[17][0] = "A la CETIC";
 choices[17][1] = "A la Secretar&iacute;a General de Administraci&oacute;n Digital, a propuesta de la CETIC";
 choices[17][2] = "A la CETIC y a la Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[17][3] = "A la CETIC, a propuesta de la Secretar&iacute;a General de Administraci&oacute;n Digital";
 answers[17] = choices[17][3];
 units[17] = "19";
 comments[17] = "Id Pregunta: 582. Estrategia TIC";
 preguntaids[17] = 582


//  Id pregunta: 276 Año de creación de pregunta: 2016
 questions[18]= "19)  Se&ntilde;ale la respuesta falsa";
 choices[18]= new Array();
 choices[18][0] = "El Portal de la Transparencia del Gobierno de Espa&ntilde;a es una subsede de la sede electr&oacute;nica central del Ministerio de la Presidencia.";
 choices[18][1] = "La titularidad de esta subsede corresponde a la Oficina de la Transparencia y Acceso a la Informaci&oacute;n (OTAI), dependiente de la Oficina para la Ejecuci&oacute;n de la Reforma de la Administraci&oacute;n P&uacute;blica (OPERA).";
 choices[18][2] = "La gesti&oacute;n de la plataforma tecnol&oacute;gica es competencia de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones (DTIC), en virtud del Acuerdo de Colaboraci&oacute;n firmado por el Ministerio de la Presidencia y el Ministerio de Hacienda y Administraciones P&uacute;blicas, para el desarrollo del Portal de la Transparencia.";
 choices[18][3] = "La DTIC ser&aacute; responsable de la integridad y disponibilidad de la informaci&oacute;n, que se provea al Portal de la Transparencia a trav&eacute;s de enlaces o v&iacute;nculos a otras p&aacute;ginas o sedes electr&oacute;nicas cuya responsabilidad corresponda a distinto &oacute;rgano o Administraci&oacute;n P&uacute;blica.";
 answers[18] = choices[18][3];
 units[18] = "22";
 comments[18] = "Id Pregunta: 276. LEY DE TRANSPARENCIA";
 preguntaids[18] = 276


//  Id pregunta: 681 Año de creación de pregunta: 2016
 questions[19]= "20)  De acuerdo a la Ley 27/2011, de 1 de agosto, sobre actualizaci&oacute;n, adecuaci&oacute;n y modernizaci&oacute;n del sistema de Seguridad Social, la edad exigida de jubilaci&oacute;n:";
 choices[19]= new Array();
 choices[19][0] = "A partir del a&ntilde;o 2020, ser&aacute; de 67 a&ntilde;os para quellas personas con un periodo cotizado menor de 38 a&ntilde;os y 6 meses, y de 65 a&ntilde;os para personas con un perido cotizado igual o superior a 38 a&ntilde;os y 6 meses.";
 choices[19][1] = "A partir del a&ntilde;o 2027, ser&aacute; de 67 a&ntilde;os para quellas personas con un periodo cotizado menor de 38 a&ntilde;os y 6 meses, y de 65 a&ntilde;os para personas con un perido cotizado igual o superior a 38 a&ntilde;os y 6 meses.";
 choices[19][2] = "A partir del a&ntilde;o 2027, ser&aacute; de 67 a&ntilde;os para todas las personas con independencia del periodo cotizado.";
 choices[19][3] = "Aumenta progresivamente desde los 65 a los 67 a&ntilde;os desde el a&ntilde;o 2013 al 2027, si bien se mantiene en los 65 a&ntilde;os para personas con un periodo cotizado igual o mayor a 35 a&ntilde;os.";
 answers[19] = choices[19][1];
 units[19] = "14";
 comments[19] = "Id Pregunta: 681. Pensiones";
 preguntaids[19] = 681


//  Id pregunta: 811 Año de creación de pregunta: 2016
 questions[20]= "21)  Los Subdirectores generales:";
 choices[20]= new Array();
 choices[20][0] = "son los responsables inmediatos, bajo la supervisi&oacute;n del Secretario general o del titular del &oacute;rgano del que dependan, de la ejecuci&oacute;n de aquellos proyectos, objetivos o actividades que les sean asignados, as&iacute; como de la gesti&oacute;n ordinaria de los asuntos de la competencia de la Subdirecci&oacute;n General";
 choices[20][1] = "ser&aacute;n nombrados, respetando los principios de igualdad, m&eacute;rito y capacidad, y cesados por el Ministro, Secretario de Estado o Subsecretario del que dependan";
 choices[20][2] = "sus nombramientos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, o de otras Administraciones, cuando as&iacute; lo prevean las normas de aplicaci&oacute;n, pertenecientes al Subgrupo A2";
 choices[20][3] = "todas son correctas";
 answers[20] = choices[20][1];
 units[20] = "4, 7, 8, 9";
 comments[20] = "Id Pregunta: 811. Ley 40/2015";
 preguntaids[20] = 811


//  Id pregunta: 428 Año de creación de pregunta: 2016
 questions[21]= "22)  Cuando el periodo de vacaciones coincida con una incapacidad temporal derivada del embarazo, parto o lactancia natural, o con el permiso de maternidad, o con su ampliaci&oacute;n por lactancia, la empleada p&uacute;blica:";
 choices[21]= new Array();
 choices[21][0] = "Perder&aacute; el derecho a vacaciones.";
 choices[21][1] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta, siempre que no haya terminado el a&ntilde;o natural que le corresponda.";
 choices[21][2] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta, aunque haya terminado el a&ntilde;o natural que le corresponda.";
 choices[21][3] = "Tendr&aacute; derecho a disfrutar las vacaciones en fecha distinta dependiendo de la acumulaci&oacute;n de trabajo en al AAPP.";
 answers[21] = choices[21][2];
 units[21] = "14";
 comments[21] = "Id Pregunta: 428. POLITICAS DE IGUALDAD";
 preguntaids[21] = 428


//  Id pregunta: 527 Año de creación de pregunta: 2016
 questions[22]= "23)  Cuando la condici&oacute;n de interesado derivase de alguna relaci&oacute;n jur&iacute;dica transmisible el derecho-habiente suceder&aacute; en tal condici&oacute;n:";
 choices[22]= new Array();
 choices[22][0] = "si el procedimiento no ha alcanzado la fase de instrucci&oacute;n";
 choices[22][1] = "si el procedimiento no ha alcanzado el tr&aacute;mite de audiencia";
 choices[22][2] = "si el procedimiento no ha alcanzado el tr&aacute;mite de informaci&oacute;n p&uacute;blica";
 choices[22][3] = "cualquiera que sea el estado del procedimiento";
 answers[22] = choices[22][3];
 units[22] = "7";
 comments[22] = "Id Pregunta: 527. LEY 39/2015";
 preguntaids[22] = 527


//  Id pregunta: 53 Año de creación de pregunta: 2016
 questions[23]= "24)  &iquest;Cu&aacute;l de los siguientes objetivos est&aacute; fuera del alcance de una reuni&oacute;n diaria de SCRUM (daily scrum)?";
 choices[23]= new Array();
 choices[23][0] = "Exponer las tareas no planificadas que tambi&eacute;n est&aacute;n haciendo los miembros del equipo.";
 choices[23][1] = "Resolver detalladamente los problemas que puedan tener los miembros del equipo.";
 choices[23][2] = "Poner de manifiesto el ritmo de trabajo de cada miembro del equipo.";
 choices[23][3] = "Identificar las tareas que puedan afectar a otros miembros del equipo.";
 answers[23] = choices[23][1];
 units[23] = "84";
 comments[23] = "Id Pregunta: 53. AGE A1 2015";
 preguntaids[23] = 53


//  Id pregunta: 263 Año de creación de pregunta: 2016
 questions[24]= "25)  Los Vocales integrantes del &oacute;rgano de gobierno del Poder Judicial:";
 choices[24]= new Array();
 choices[24][0] = "Ser&aacute;n nombrados por el Presidente del Tribunal Supremo y del Consejo del Poder Judicial, por un periodo de cinco a&ntilde;os.";
 choices[24][1] = "Ser&aacute;n nombrados por el Congreso de los Diputados y por el Senado por un periodo de cinco a&ntilde;os.";
 choices[24][2] = "Ser&aacute;n nombrados por el Rey por un periodo de cinco a&ntilde;os.";
 choices[24][3] = "er&aacute;n nombrados por el Rey por un periodo de tres a&ntilde;os.";
 answers[24] = choices[24][1];
 units[24] = "1";
 comments[24] = "Id Pregunta: 263. CONSTITUCION1978";
 preguntaids[24] = 263


//  Id pregunta: 638 Año de creación de pregunta: 2016
 questions[25]= "26)  El soporte de m&oacute;dulos en Linux tiene tres componentes:";
 choices[25]= new Array();
 choices[25][0] = "Gesti&oacute;n de E/S, Interfaces y Gesti&oacute;n del almacenamiento.";
 choices[25][1] = "Gesti&oacute;n del almacenamiento, Gesti&oacute;n de seguridad y Gesti&oacute;n de integridad.";
 choices[25][2] = "Gesti&oacute;n de m&oacute;dulos, M&oacute;dulo registro de controladores y Mecanismo de resoluci&oacute;n de conflictos.";
 choices[25][3] = "Gesti&oacute;n de memoria, Gesti&oacute;n de discos y Gesti&oacute;n de impresi&oacute;n.";
 answers[25] = choices[25][2];
 units[25] = "57";
 comments[25] = "Id Pregunta: 638. Junta de Extremadura A1 2015";
 preguntaids[25] = 638


//  Id pregunta: 267 Año de creación de pregunta: 2016
 questions[26]= "27)  El T&iacute;tulo Primero de la Constituci&oacute;n Espa&ntilde;ola est&aacute; dedicado a:";
 choices[26]= new Array();
 choices[26][0] = "Los Derechos y Deberes fundamentales.";
 choices[26][1] = "La Corona.";
 choices[26][2] = "El Poder Judicial.";
 choices[26][3] = "Las Cortes Generales.";
 answers[26] = choices[26][2];
 units[26] = "1";
 comments[26] = "Id Pregunta: 267. CONSTITUCION1978";
 preguntaids[26] = 267


//  Id pregunta: 831 Año de creación de pregunta: 2016
 questions[27]= "28)  Si el recusado niega la causa de recusaci&oacute;n, el superior resolver&aacute; en el plazo de ...";
 choices[27]= new Array();
 choices[27][0] = "Un d&iacute;a";
 choices[27][1] = "Dos d&iacute;as";
 choices[27][2] = "Tres d&iacute;as";
 choices[27][3] = "Cuatro d&iacute;as";
 answers[27] = choices[27][3];
 units[27] = "4, 7, 8, 9";
 comments[27] = "Id Pregunta: 831. Ley 40/2015";
 preguntaids[27] = 831


//  Id pregunta: 465 Año de creación de pregunta: 2016
 questions[28]= "29)  Seg&uacute;n el art&iacute;culo 26 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la programaci&oacute;n presupuestaria se regir&aacute; por los principios de:";
 choices[28]= new Array();
 choices[28][0] = "Estabilidad presupuestaria, sostenibilidad financiera, eficacia, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 choices[28][1] = "Estabilidad presupuestaria, sostenibilidad financiera, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 choices[28][2] = "Estabilidad presupuestaria, sostenibilidad financiera, plurianualidad, transparencia, responsabilidad y lealtad institucional.";
 choices[28][3] = "Estabilidad presupuestaria, sostenibilidad financiera, plurianualidad, transparencia, eficiencia en la asignaci&oacute;n y utilizaci&oacute;n de los recursos p&uacute;blicos, responsabilidad y lealtad institucional.";
 answers[28] = choices[28][3];
 units[28] = "10";
 comments[28] = "Id Pregunta: 465. PRESUPUESTOS GENERALES";
 preguntaids[28] = 465


//  Id pregunta: 75 Año de creación de pregunta: 2016
 questions[29]= "30)  Las transferencias internacionales de datos de car&aacute;cter personal:";
 choices[29]= new Array();
 choices[29][0] = "Se regulan en los art&iacute;culos 33 y 34 de la Ley Org&aacute;nica 15/1999 de Protecci&oacute;n de Datos de Car&aacute;cter Personal y en el T&iacute;tulo VI del Real Decreto 1720/2007 por el que se aprueba el Reglamento de desarrollo de la Ley Org&aacute;nica 15/1999.";
 choices[29][1] = "Una transferencia internacional de datos, es un tratamiento de datos que supone una transmisi&oacute;n de los mismos fuera del territorio de la Uni&oacute;n Europea (UE).";
 choices[29][2] = "La Decisi&oacute;n de la Comisi&oacute;n 2000/520/CE, con arreglo a la Directiva 95/46/CE, permite actualmente realizar transferencias de datos a Estados Unidos si se cumplen los principios del acuerdo de Puerto Seguro.";
 choices[29][3] = "Precisan, en todo caso, la autorizaci&oacute;n previa de la Direcci&oacute;n de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[29] = choices[29][0];
 units[29] = "35";
 comments[29] = "Id Pregunta: 75. AGE A1 2015";
 preguntaids[29] = 75


//  Id pregunta: 541 Año de creación de pregunta: 2016
 questions[30]= "31)  Los asientos que se realicen en los registros electr&oacute;nicos generales y particulares de apoderamientos deber&aacute;n contener, al menos: (se&ntilde;ala la incorrecta)";
 choices[30]= new Array();
 choices[30][0] = "nombre y apellidos o la denominaci&oacute;n o raz&oacute;n social, documento nacional de identidad, n&uacute;mero de identificaci&oacute;n fiscal o documento equivalente del poderdante y del apoderado";
 choices[30][1] = "causas de anulaci&oacute;n del apoderamiento";
 choices[30][2] = "per&iacute;odo de tiempo por el cual se otorga el poder";
 choices[30][3] = "tipo de poder seg&uacute;n las facultades que otorgue";
 answers[30] = choices[30][1];
 units[30] = "7";
 comments[30] = "Id Pregunta: 541. LEY 39/2015";
 preguntaids[30] = 541


//  Id pregunta: 224 Año de creación de pregunta: 2016
 questions[31]= "32)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen?.";
 choices[31]= new Array();
 choices[31][0] = "Art&iacute;culo 16.2.";
 choices[31][1] = "Art&iacute;culo 17.1.";
 choices[31][2] = "Art&iacute;culo 18.1.";
 choices[31][3] = "Art&iacute;culo 18.2.";
 answers[31] = choices[31][2];
 units[31] = "1";
 comments[31] = "Id Pregunta: 224. CONSTITUCION1978";
 preguntaids[31] = 224


//  Id pregunta: 99 Año de creación de pregunta: 2016
 questions[32]= "33)  En cuanto a la imputaci&oacute;n de costes de los servicios compartidos en la Administraci&oacute;n General del Estado, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[32]= new Array();
 choices[32][0] = "Seg&uacute;n establece el Real Decreto 806/2014 el coste, caso de ocasionarse, ser&aacute; asumido &iacute;ntegramente por la Direcci&oacute;n de Tecnolog&iacute;as de las Informaci&oacute;n y Comunicaciones.";
 choices[32][1] = "Se sufragar&aacute;n con cargo a los presupuestos de Presidencia del Gobierno dado el car&aacute;cter horizontal del servicio compartido.";
 choices[32][2] = "La declaraci&oacute;n de todo servicio compartido deber&aacute; indicar si existe compensaci&oacute;n econ&oacute;mica al proveedor.";
 choices[32][3] = "No existir&aacute;, dado que su gratuidad y libertad de acceso es consustancial a la idea de servicio compartido.";
 answers[32] = choices[32][2];
 units[32] = "26";
 comments[32] = "Id Pregunta: 99. AGE A1 2015: actualmente la Secretar&iacute;a General de Administraci&oacute;n Digital asume las funciones de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, seg&uacute;n Real Decreto 424/2016";
 preguntaids[32] = 99


//  Id pregunta: 611 Año de creación de pregunta: 2016
 questions[33]= "34)  Dentro de las t&eacute;cnicas de clasificaci&oacute;n de datos tenemos los m&eacute;todos de clasificaci&oacute;n interna. &iquest;A qu&eacute; tipo de algoritmo de ordenaci&oacute;n o clasificaci&oacute;n pertenece el m&eacute;todo de la burbuja?";
 choices[33]= new Array();
 choices[33][0] = "Clasificaci&oacute;n por inserci&oacute;n.";
 choices[33][1] = "Clasificaci&oacute;n por cuenta.";
 choices[33][2] = "Clasificaci&oacute;n por selecci&oacute;n.";
 choices[33][3] = "Clasificaci&oacute;n por intercambio.";
 answers[33] = choices[33][3];
 units[33] = "56";
 comments[33] = "Id Pregunta: 611. Junta de Extremadura A1 2015";
 preguntaids[33] = 611


//  Id pregunta: 84 Año de creación de pregunta: 2016
 questions[34]= "35)  En el marco europeo de interoperabilidad de sistemas de informaci&oacute;n, &iquest;qu&eacute; programa de la Uni&oacute;n Europea ha estado en vigor entre 2010 y 2015?";
 choices[34]= new Array();
 choices[34][0] = "Interchange of Data between Administrations (IDA)";
 choices[34][1] = "Interoperability Solutions for European Public Administrations (ISA)";
 choices[34][2] = "Interoperable Delivery of Pan-European eGovernment Services to Public Administrations, Businesses and Citizens (IDABC)";
 choices[34][3] = "Interoperability Electronic European Solution (IEES)";
 answers[34] = choices[34][1];
 units[34] = "43";
 comments[34] = "Id Pregunta: 84. AGE A1 2015";
 preguntaids[34] = 84


//  Id pregunta: 506 Año de creación de pregunta: 2016
 questions[35]= "36)  Sobre el per&iacute;odo medio de pagos, se&ntilde;ale la respuesta falsa:";
 choices[35]= new Array();
 choices[35][0] = "Se entiende que existe sostenibilidad de la deuda comercial, cuando el periodo medio de pago a los proveedores no supere el plazo m&aacute;ximo previsto en la normativa sobre morosidad.";
 choices[35][1] = "Este control informatizado y sistematizado de las facturas favorecer&aacute; un seguimiento riguroso de la morosidad a trav&eacute;s de un indicador, el periodo medio de pagos, que visualizar&aacute; el volumen de deuda comercial de las Administraciones P&uacute;blicas.";
 choices[35][2] = "Para el c&aacute;lculo econ&oacute;mico del per&iacute;odo medio de pago a proveedores, se tendr&aacute;n en cuenta las facturas expedidas desde el 1 de enero de 2015 que consten en el registro contable de facturas o sistema equivalente y las certificaciones mensuales de obra aprobadas a partir de la misma fecha.";
 choices[35][3] = "El per&iacute;odo medio de pagos se calcular&aacute; mediante la siguiente f&oacute;rmula: Periodo medio de pago global a proveedores = &Sigma; (periodo medio de pago de cada entidad x importe operaciones de la entidad)/ &Sigma; importe operaciones de las entidades";
 answers[35] = choices[35][2];
 units[35] = "10";
 comments[35] = "Id Pregunta: 506. PRESUPUESTOS GENERALES";
 preguntaids[35] = 506


//  Id pregunta: 768 Año de creación de pregunta: 2016
 questions[36]= "37)  Las Universidades p&uacute;blicas se regir&aacute;n por:";
 choices[36]= new Array();
 choices[36][0] = "las previsiones de la presente Ley y supletoriamente por su normativa espec&iacute;fica";
 choices[36][1] = "su normativa espec&iacute;fica y supletoriamente por las previsiones de la presente Ley";
 choices[36][2] = "exclusivamente por su normativa espec&iacute;fica";
 choices[36][3] = "exclusivamente por las previsiones de la presente Ley";
 answers[36] = choices[36][1];
 units[36] = "4, 7, 8, 9";
 comments[36] = "Id Pregunta: 768. Ley 40/2015";
 preguntaids[36] = 768


//  Id pregunta: 601 Año de creación de pregunta: 2016
 questions[37]= "38)  Algunos de los elementos tecnol&oacute;gicos que intervienen en la seguridad perimetral corporativa son:";
 choices[37]= new Array();
 choices[37][0] = "En la seguridad perimetral corporativa s&oacute;lo intervienen enrutadores y switches. .";
 choices[37][1] = "Switches, servidores y aplicaciones departamentales.";
 choices[37][2] = "Enrutadores , cortafuegos y sistemas VPN.";
 choices[37][3] = "Servidores, tecnolog&iacute;as inal&aacute;mbricas, sistemas de usuarios y aplicaciones departamentales.";
 answers[37] = choices[37][2];
 units[37] = "45";
 comments[37] = "Id Pregunta: 601. Junta de Extremadura A1 2015";
 preguntaids[37] = 601


//  Id pregunta: 133 Año de creación de pregunta: 2016
 questions[38]= "39)  Seg&uacute;n la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n, cu&aacute;l no corresponde a una de las medidas implantadas:";
 choices[38]= new Array();
 choices[38][0] = "Apoyos fiscales y en materia de Seguridad Social a los emprendedores.";
 choices[38][1] = "Medidas de conciliaci&oacute;n familiar especiales para los emprendedores.";
 choices[38][2] = "Modificaci&oacute;n de la ley concursal para facilitar los acuerdos de refinanciaci&oacute;n.";
 choices[38][3] = "Creaci&oacute;n de la figura del Emprendedor de Responsabilidad Limitada.";
 answers[38] = choices[38][1];
 units[38] = "12";
 comments[38] = "Id Pregunta: 133. Leyes modelo econ&oacute;mico";
 preguntaids[38] = 133


//  Id pregunta: 305 Año de creación de pregunta: 2016
 questions[39]= "40)  Indique en donde tiene su sede de la Comisi&oacute;n Europea:";
 choices[39]= new Array();
 choices[39][0] = "Estrasburgo.";
 choices[39][1] = "Bruselas.";
 choices[39][2] = "Luxemburgo.";
 choices[39][3] = "Par&iacute;s.";
 answers[39] = choices[39][1];
 units[39] = "5";
 comments[39] = "Id Pregunta: 305. UNION EUROPEA";
 preguntaids[39] = 305


//  Id pregunta: 793 Año de creación de pregunta: 2016
 questions[40]= "41)  En la Administraci&oacute;n General del Estado en el exterior son &oacute;rganos directivos:";
 choices[40]= new Array();
 choices[40][0] = "los Ministros y los Secretarios de Estado";
 choices[40][1] = "los Subsecretarios y Secretarios generales";
 choices[40][2] = "los embajadores y representantes permanentes ante Organizaciones internacionales";
 choices[40][3] = "los Directores generales";
 answers[40] = choices[40][2];
 units[40] = "4, 7, 8, 9";
 comments[40] = "Id Pregunta: 793. Ley 40/2015";
 preguntaids[40] = 793


//  Id pregunta: 642 Año de creación de pregunta: 2016
 questions[41]= "42)  Los sistemas de archivos gestionados por Windows 2008 Server son:";
 choices[41]= new Array();
 choices[41][0] = "Fat y Ntfs.";
 choices[41][1] = "Extfat y Fat.";
 choices[41][2] = "Fat y Nfst.";
 choices[41][3] = "ext2fs y Ntfs.";
 answers[41] = choices[41][0];
 units[41] = "58";
 comments[41] = "Id Pregunta: 642. Junta de Extremadura A1 2015";
 preguntaids[41] = 642


//  Id pregunta: 401 Año de creación de pregunta: 2016
 questions[42]= "43)  Entre los criterios generales de actuaci&oacute;n los Poderes P&uacute;blicos, tienen:";
 choices[42]= new Array();
 choices[42][0] = "La implantaci&oacute;n de un lenguaje no sexista en el &aacute;mbito administrativo, y en la totalidad de las relaciones sociales, culturales y art&iacute;sticas.";
 choices[42][1] = "La participaci&oacute;n equilibrada de mujeres y hombres en las candidaturas electorales y toma de decisiones.";
 choices[42][2] = "Ambas son correctas.";
 choices[42][3] = "A y B son incorrectas.";
 answers[42] = choices[42][2];
 units[42] = "14";
 comments[42] = "Id Pregunta: 401. POLITICAS DE IGUALDAD";
 preguntaids[42] = 401


//  Id pregunta: 851 Año de creación de pregunta: 2016
 questions[43]= "44)  &iquest;Qu&eacute; m&eacute;todo de replicaci&oacute;n remota entre sistemas de almacenamiento se ve m&aacute;s afectada por la latencia en el caso de largas distancias?";
 choices[43]= new Array();
 choices[43][0] = "As&iacute;ncrona.";
 choices[43][1] = "Log-shipping.";
 choices[43][2] = "Disk buffering.";
 choices[43][3] = "S&iacute;ncrona.";
 answers[43] = choices[43][3];
 units[43] = "53";
 comments[43] = "Id Pregunta: 851. Xunta de Galicia 2015";
 preguntaids[43] = 851


//  Id pregunta: 643 Año de creación de pregunta: 2016
 questions[44]= "45)  La estructura de un Directorio Activo se basa en los siguientes conceptos:";
 choices[44]= new Array();
 choices[44][0] = "Directorios, Unidades f&iacute;sicas y Usuarios.";
 choices[44][1] = "Dominio, Unidad Organizativa, Grupos y Objetos.";
 choices[44][2] = "Unidades f&iacute;sicas, Unidades l&oacute;gicas y Directorios.";
 choices[44][3] = "Ficheros, Directorios, Particiones y Unidades.";
 answers[44] = choices[44][1];
 units[44] = "58";
 comments[44] = "Id Pregunta: 643. Junta de Extremadura A1 2015";
 preguntaids[44] = 643


//  Id pregunta: 728 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;Cu&aacute;l es el n&uacute;mero de personas generalmete recomendados para cada equipo de Scrum?";
 choices[45]= new Array();
 choices[45][0] = "De 1 a  4 ";
 choices[45][1] = "De 3 a  7 ";
 choices[45][2] = "De 5 a  9";
 choices[45][3] = "De 7 a 11";
 answers[45] = choices[45][2];
 units[45] = "34, 84";
 comments[45] = "Id Pregunta: 728. Metodologias &aacute;giles";
 preguntaids[45] = 728


//  Id pregunta: 328 Año de creación de pregunta: 2016
 questions[46]= "47)  El principal &oacute;rgano decisorio de la Comunidad Europea es:";
 choices[46]= new Array();
 choices[46][0] = "El Presidente del Consejo Europeo.";
 choices[46][1] = "La Comisi&oacute;n.";
 choices[46][2] = "El Consejo.";
 choices[46][3] = "El Parlamento Europeo.";
 answers[46] = choices[46][2];
 units[46] = "5";
 comments[46] = "Id Pregunta: 328. UNION EUROPEA";
 preguntaids[46] = 328


//  Id pregunta: 360 Año de creación de pregunta: 2016
 questions[47]= "48)  El Parlamento Europeo est&aacute; compuesto actualmente por:";
 choices[47]= new Array();
 choices[47][0] = "786 Diputados como m&aacute;ximo.";
 choices[47][1] = "600 Diputados como m&aacute;ximo.";
 choices[47][2] = "650 Diputados como m&aacute;ximo.";
 choices[47][3] = "732 Diputados como m&aacute;ximo.";
 answers[47] = choices[47][0];
 units[47] = "5";
 comments[47] = "Id Pregunta: 360. UNION EUROPEA";
 preguntaids[47] = 360


//  Id pregunta: 816 Año de creación de pregunta: 2016
 questions[48]= "49)  Podr&aacute;n crearse por Real Decreto Subdelegaciones del Gobierno en las Comunidades Aut&oacute;nomas uniprovinciales, cuando lo justifiquen circunstancias como:";
 choices[48]= new Array();
 choices[48][0] = "la poblaci&oacute;n del territorio";
 choices[48][1] = "el volumen de gesti&oacute;n";
 choices[48][2] = "sus singularidades geogr&aacute;ficas, sociales o econ&oacute;micas";
 choices[48][3] = "todas son correctas";
 answers[48] = choices[48][3];
 units[48] = "4, 7, 8, 9";
 comments[48] = "Id Pregunta: 816. Ley 40/2015";
 preguntaids[48] = 816


//  Id pregunta: 43 Año de creación de pregunta: 2016
 questions[49]= "50)  &iquest;Cu&aacute;l de los siguientes principios NO est&aacute; recogido en el Manifiesto por el Desarrollo &Aacute;gil del Software?";
 choices[49]= new Array();
 choices[49][0] = "La simplicidad, o el arte de maximizar la cantidad de trabajo no realizado, es esencial.";
 choices[49][1] = "Aceptamos que los requisitos cambien, incluso en etapas tard&iacute;as del desarrollo. Los procesos &aacute;giles aprovechan el cambio para proporcionar ventaja competitiva al cliente.";
 choices[49][2] = "Las mejores arquitecturas, requisitos y dise&ntilde;os emergen por la aplicaci&oacute;n de unos procesos bien organizados.";
 choices[49][3] = "El software funcionando es la medida principal del progreso.";
 answers[49] = choices[49][2];
 units[49] = "34";
 comments[49] = "Id Pregunta: 43. AGE A1 2015";
 preguntaids[49] = 43


//  Id pregunta: 11 Año de creación de pregunta: 2016
 questions[50]= "51)  Nada m&aacute;s arrancar el servidor de aplicaciones, usted intenta acceder a su aplicaci&oacute;n y se produce un error de memoria. En ese momento, sospecha que el error se produce porque est&aacute; utilizando unas librer&iacute;as de terceros de gran tama&ntilde;o. &iquest;Qu&eacute; tipo de error deber&iacute;a estar d&aacute;ndose para corroborar su hip&oacute;tesis?";
 choices[50]= new Array();
 choices[50][0] = "java.lang.OutOfMemoryError: Java heap space";
 choices[50][1] = "java.lang.OutOfMemoryError: PermGen space";
 choices[50][2] = "java.lang.OutOfMemoryError: Requested array size exceeds VM limit";
 choices[50][3] = "java.lang.OutOfMemoryError: request &lt;size&gt; bytes for &lt;reason&gt;. Out of swap space";
 answers[50] = choices[50][1];
 units[50] = "64";
 comments[50] = "Id Pregunta: 11. AGE A1 2015";
 preguntaids[50] = 11


//  Id pregunta: 756 Año de creación de pregunta: 2016
 questions[51]= "52)  &iquest;Cu&aacute;l de los siguientes no es un eje del Plan de Servicios P&uacute;blicos Digitales que forma parte de la Agenda Digital para Espa&ntilde;a?";
 choices[51]= new Array();
 choices[51][0] = "Programa de Educaci&oacute;n Digital";
 choices[51][1] = "Programa de Salud y Bienestar Social";
 choices[51][2] = "Programa de Administraci&oacute;n de Justicia Digital";
 choices[51][3] = "Programa de capacitaci&oacute;n de profesionales TIC";
 answers[51] = choices[51][3];
 units[51] = "19";
 comments[51] = "Id Pregunta: 756. Agenda Digital para Espa&ntilde;a";
 preguntaids[51] = 756


//  Id pregunta: 753 Año de creación de pregunta: 2016
 questions[52]= "53)  En el contexto de la Ley 20/2013, de garant&iacute;a de la unidad de mercado, se considerar&aacute; que concurren los principios de necesidad y proporcionalidad para la exigencia de una autorizaci&oacute;n:";
 choices[52]= new Array();
 choices[52][0] = "Respecto a los operadores econ&oacute;micos, cuando est&eacute; justificado por razones de orden p&uacute;blico aunque &eacute;stas puedan salvaguardarse mediante la presentaci&oacute;n de una declaraci&oacute;n responsable o de una comunicaci&oacute;n.";
 choices[52][1] = "Respecto a las instalaciones o infraestructuras f&iacute;sicas necesarias para el ejercicio de actividades econ&oacute;micas, cuando sean susceptibles de generar da&ntilde;os sobre el medio ambiente y el entorno urbano, la seguridad o la salud p&uacute;blica y el patrimonio hist&oacute;rico-art&iacute;stico, y estas razones no puedan salvaguardarse mediante la presentaci&oacute;n de una declaraci&oacute;n responsable o de una comunicaci&oacute;n";
 choices[52][2] = "b) y d) son verdaderas";
 choices[52][3] = "Cuando as&iacute; se disponga reglamentariamente";
 answers[52] = choices[52][1];
 units[52] = "23";
 comments[52] = "Id Pregunta: 753. Direcci&oacute;n p&uacute;blica";
 preguntaids[52] = 753


//  Id pregunta: 453 Año de creación de pregunta: 2016
 questions[53]= "54)  En los Presupuestos, &iquest;qu&eacute; es lo que se prev&eacute; liquidar?";
 choices[53]= new Array();
 choices[53][0] = "Los cr&eacute;ditos";
 choices[53][1] = "Las partidas presupuestarias";
 choices[53][2] = "Los derechos";
 choices[53][3] = "Las obligaciones";
 answers[53] = choices[53][2];
 units[53] = "10";
 comments[53] = "Id Pregunta: 453. PRESUPUESTOS GENERALES";
 preguntaids[53] = 453


//  Id pregunta: 455 Año de creación de pregunta: 2016
 questions[54]= "55)  En las Administraciones P&uacute;blicas...";
 choices[54]= new Array();
 choices[54][0] = "Existe un Presupuesto ordinario &uacute;nicamente";
 choices[54][1] = "Existen s&oacute;lo un presupuesto ordinario y un presupuesto extraordinario";
 choices[54][2] = "Existe un &uacute;nico presupuesto ordinario y uno o varios presupuestos extraordinarios";
 choices[54][3] = "Existen varios presupuestos que indistintamente pueden ser considerados ordinarios o extraordinarios";
 answers[54] = choices[54][0];
 units[54] = "10";
 comments[54] = "Id Pregunta: 455. PRESUPUESTOS GENERALES";
 preguntaids[54] = 455


//  Id pregunta: 565 Año de creación de pregunta: 2016
 questions[55]= "56)  &iquest;Qu&eacute; fen&oacute;meno NO ha puesto de manifiesto la crisis econ&oacute;mica?";
 choices[55]= new Array();
 choices[55][0] = "Tasa de paro estructural alt&iacute;sima";
 choices[55][1] = "Excesiva estabilidad de empleo";
 choices[55][2] = "An&eacute;mico crecimiento de la productividad";
 choices[55][3] = "Existencia de una importante econom&iacute;a sumergida";
 answers[55] = choices[55][1];
 units[55] = "12";
 comments[55] = "Id Pregunta: 565. Modelo econ&oacute;mico";
 preguntaids[55] = 565


//  Id pregunta: 708 Año de creación de pregunta: 2016
 questions[56]= "57)  El Portal de Transparencia de la Administraci&oacute;n General del Estado depende del:";
 choices[56]= new Array();
 choices[56][0] = "Ministerio de Hacienda y Funci&oacute;n P&uacute;blica";
 choices[56][1] = "Ministerio de Energ&iacute;a, Turismo y Agenda Digital";
 choices[56][2] = "Ministerio de la Presidencia";
 choices[56][3] = "Ministerio de Fomento";
 answers[56] = choices[56][2];
 units[56] = "22";
 comments[56] = "Id Pregunta: 708. Portal de Transparencia";
 preguntaids[56] = 708


//  Id pregunta: 260 Año de creación de pregunta: 2016
 questions[57]= "58)  &iquest;En qu&eacute; art&iacute;culo de la Constituci&oacute;n se recoge el principio de unidad jurisdiccional?:";
 choices[57]= new Array();
 choices[57][0] = "117.5";
 choices[57][1] = "117.1";
 choices[57][2] = "116";
 choices[57][3] = "15";
 answers[57] = choices[57][0];
 units[57] = "1";
 comments[57] = "Id Pregunta: 260. CONSTITUCION1978";
 preguntaids[57] = 260


//  Id pregunta: 1 Año de creación de pregunta: 2016
 questions[58]= "59)  Los medios y servicios compartidos, establecidos en el Real Decreto 806/2014 dentro del modelo de gobernanza en el &aacute;mbito de las tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones de la Administraci&oacute;n General del Estado, son tales que:";
 choices[58]= new Array();
 choices[58][0] = "Su declaraci&oacute;n presupone que el servicio se encuentra en producci&oacute;n, listo para la adhesi&oacute;n de las diferentes unidades departamentales.";
 choices[58][1] = "Dado su car&aacute;cter obligatorio y sustitutivo, no se permite acordar excepciones por razones econ&oacute;micas, t&eacute;cnicas o de oportunidad sobrevenidas.";
 choices[58][2] = "Su declaraci&oacute;n establece la habilitaci&oacute;n para el desarrollo de las medidas t&eacute;cnicas, organizativas, presupuestarias y normativas.";
 choices[58][3] = "Su provisi&oacute;n se realiza directa y exclusivamente por medio de la Direcci&oacute;n General de Administraci&oacute;n Digital";
 answers[58] = choices[58][2];
 units[58] = "26";
 comments[58] = "Id Pregunta: 1. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";
 preguntaids[58] = 1


//  Id pregunta: 446 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;Cu&aacute;l es el servicio com&uacute;n que  permitir&aacute; la tramitaci&oacute;n por medios electr&oacute;nicos de todo el ciclo de vida involucrado en la concesi&oacute;n de ayudas provenientes de los fondos FEDER?";
 choices[59]= new Array();
 choices[59][0] = "IRIA";
 choices[59][1] = "GALATEA";
 choices[59][2] = "BADARAL";
 choices[59][3] = "SOROLLA";
 answers[59] = choices[59][1];
 units[59] = "43";
 comments[59] = "Id Pregunta: 446. SERVICIOS COMUNES";
 preguntaids[59] = 446


//  Id pregunta: 299 Año de creación de pregunta: 2016
 questions[60]= "61)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[60]= new Array();
 choices[60][0] = "Quince miembros.";
 choices[60][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[60][2] = "Los miembros que determine el Consejo.";
 choices[60][3] = "Un Presidente y quince miembros.";
 answers[60] = choices[60][1];
 units[60] = "5";
 comments[60] = "Id Pregunta: 299. UNION EUROPEA";
 preguntaids[60] = 299


//  Id pregunta: 572 Año de creación de pregunta: 2016
 questions[61]= "62)  &iquest;Cu&aacute;l de los siguientes datos es err&oacute;neo en 2016?";
 choices[61]= new Array();
 choices[61][0] = "El PIB se encuentra cerca de un bill&oacute;n";
 choices[61][1] = "La Deuda P&uacute;blica est&aacute; alrededor del 100% del PIB";
 choices[61][2] = "El D&eacute;ficit P&uacute;blico est&aacute; en torno al 2% del PIB";
 choices[61][3] = "La tasa de desempleo ronda el 20%";
 answers[61] = choices[61][2];
 units[61] = "12";
 comments[61] = "Id Pregunta: 572. Modelo econ&oacute;mico";
 preguntaids[61] = 572


//  Id pregunta: 612 Año de creación de pregunta: 2016
 questions[62]= "63)  En el lenguaje de manipulaci&oacute;n de datos, &iquest;cu&aacute;l de las siguientes cl&aacute;usulas va asociada a la cl&aacute;usula HAVING?";
 choices[62]= new Array();
 choices[62][0] = "GROUP BY.";
 choices[62][1] = "COUNT.";
 choices[62][2] = "WHERE.";
 choices[62][3] = "DISTINCT.";
 answers[62] = choices[62][0];
 units[62] = "60";
 comments[62] = "Id Pregunta: 612. Junta de Extremadura A1 2015";
 preguntaids[62] = 612


//  Id pregunta: 754 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de la Agenda Digital para Espa&ntilde;a?";
 choices[63]= new Array();
 choices[63][0] = "Aumentar los beneficios empresariales mediante las TIC";
 choices[63][1] = "Promover la inclusi&oacute;n digital y la empleabilidad";
 choices[63][2] = "Fomentar el despliegue de redes y servicios";
 choices[63][3] = "Mejorar la administraci&oacute;n electr&oacute;nica";
 answers[63] = choices[63][0];
 units[63] = "19";
 comments[63] = "Id Pregunta: 754. Agenda Digital para Espa&ntilde;a";
 preguntaids[63] = 754


//  Id pregunta: 508 Año de creación de pregunta: 2016
 questions[64]= "65)  La Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, responde a la reforma del art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola, (en adelante CE) e incorpora tres nuevos principios con respecto a la derogada Ley Org&aacute;nica 5/2001, de 13 de diciembre, complementaria a la Ley General de Estabilidad Presupuestaria ,Cu&aacute;les son?";
 choices[64]= new Array();
 choices[64][0] = "Estabilidad presupuestaria, plurianualidad, y responsabilidad.";
 choices[64][1] = "Sostenibilidad financiera, responsabilidad y transparencia.";
 choices[64][2] = "Plurianualidad, lealtad institucional y eficiencia en la asignaci&oacute;n de los recursos p&uacute;blicos";
 choices[64][3] = "Responsabilidad, sostenibilidad financiera y lealtad institucional.";
 answers[64] = choices[64][3];
 units[64] = "10";
 comments[64] = "Id Pregunta: 508. PRESUPUESTOS GENERALES";
 preguntaids[64] = 508


//  Id pregunta: 282 Año de creación de pregunta: 2016
 questions[65]= "66)  Sobre el Plan Juncker:";
 choices[65]= new Array();
 choices[65][0] = "El denominado plan Juncker es un fondo de inversiones con el que el Ejecutivo comunitario pretende movilizar hasta 215.000 millones para inversiones.";
 choices[65][1] = "Su objetivo es reactivar la inversi&oacute;n y el crecimiento en Europa.";
 choices[65][2] = "El dinero proceder&aacute; de los presupuestos europeos.";
 choices[65][3] = "Banco Europeo de Inversiones aportar&aacute; 15000 millones de euros.";
 answers[65] = choices[65][1];
 units[65] = "5";
 comments[65] = "Id Pregunta: 282. UNION EUROPEA";
 preguntaids[65] = 282


//  Id pregunta: 726 Año de creación de pregunta: 2016
 questions[66]= "67)  &iquest;C&uacute;al es la afirmaci&oacute;n incorrecta?";
 choices[66]= new Array();
 choices[66][0] = "El sprint release es aquel que implementa las tareas necesarias para poner el sistema en producci&oacute;n";
 choices[66][1] = "El sprint release es el &uacute;ltimo sprint de la metodolog&iacute;a SCRUM";
 choices[66][2] = "En el sprint release se pueden llevan a cabo tareas relacionados con el despliegue y generaci&oacute;n de scripts de recuperaci&oacute;n del sistema";
 choices[66][3] = "En el sprint release se pueden llevar a cabo tareas relacionados con la documentaci&oacute;n, pruebas de carga, y tareas relacionadas con las bases de datos en producci&oacute;n.";
 answers[66] = choices[66][1];
 units[66] = "34, 84";
 comments[66] = "Id Pregunta: 726. Metodologias &aacute;giles";
 preguntaids[66] = 726


//  Id pregunta: 19 Año de creación de pregunta: 2016
 questions[67]= "68)  En el sistema de Identificaci&oacute;n, Autenticaci&oacute;n y Firma Electr&oacute;nica com&uacute;n para todo el Sector P&uacute;blico Administrativo Estatal (cl@ve):";
 choices[67]= new Array();
 choices[67][0] = "La Secretar&iacute;a General de Administraci&oacute;n Digital es el proveedor &uacute;nico de servicios de verificaci&oacute;n de la identidad.";
 choices[67][1] = "Sus destinatarios son exclusivamente ciudadanos espa&ntilde;oles.";
 choices[67][2] = "Su &aacute;mbito de aplicaci&oacute;n podr&aacute; extenderse a otras Administraciones P&uacute;blicas mediante la formalizaci&oacute;n del oportuno convenio.";
 choices[67][3] = "No se requiere registro previo de usuarios, ni consentimiento del usuario ya registrado en otros sistemas previos de identificaci&oacute;n, autenticaci&oacute;n y firma.";
 answers[67] = choices[67][2];
 units[67] = "47";
 comments[67] = "Id Pregunta: 19. AGE A1 2015: En la pregunta del examen original, se hablaba de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, actualmente asume sus funciones la Secretar&iacute;a General de Administraci&oacute;n Digital seg&uacute;n Real Decreto 424/2016";
 preguntaids[67] = 19


//  Id pregunta: 518 Año de creación de pregunta: 2016
 questions[68]= "69)  Las Universidades p&uacute;blicas:";
 choices[68]= new Array();
 choices[68][0] = "se regir&aacute;n &uacute;nicamente por su normativa espec&iacute;fica";
 choices[68][1] = "se regir&aacute;n por su normativa espec&iacute;fica y supletoriamente por las previsiones de esta Ley";
 choices[68][2] = "se regir&aacute;n por las previsiones de esta Ley y supletoriamente por su normativa espec&iacute;fica";
 choices[68][3] = "se regir&aacute;n &uacute;nicamente por las previsiones de esta Ley";
 answers[68] = choices[68][1];
 units[68] = "7";
 comments[68] = "Id Pregunta: 518. LEY 39/2015";
 preguntaids[68] = 518


//  Id pregunta: 410 Año de creación de pregunta: 2016
 questions[69]= "70)  La Administraci&oacute;n General del Estado, utilizar&aacute; entre otros instrumentos b&aacute;sicos para la consecuci&oacute;n del principio de igualdad:";
 choices[69]= new Array();
 choices[69][0] = "Un plan estrat&eacute;gico de igualdad de oportunidades.";
 choices[69][1] = "Un objetivo espec&iacute;fico de igualdad.";
 choices[69][2] = "Un programa de igualdad.";
 choices[69][3] = "Un estatuto de igualdad.";
 answers[69] = choices[69][0];
 units[69] = "14";
 comments[69] = "Id Pregunta: 410. POLITICAS DE IGUALDAD";
 preguntaids[69] = 410


//  Id pregunta: 82 Año de creación de pregunta: 2016
 questions[70]= "71)  La titularidad de los derechos de explotaci&oacute;n de un programa de ordenador por una persona jur&iacute;dica expirar&aacute;:";
 choices[70]= new Array();
 choices[70][0] = "A los setenta a&ntilde;os, computados desde el d&iacute;a siguiente al de su divulgaci&oacute;n.";
 choices[70][1] = "A los cincuenta a&ntilde;os, computados desde el d&iacute;a uno de enero del a&ntilde;o siguiente al de su divulgaci&oacute;n l&iacute;cita, o al de su creaci&oacute;n si no se hubiera divulgado.";
 choices[70][2] = "A los cincuenta a&ntilde;os, computados desde el d&iacute;a siguiente al de su divulgaci&oacute;n.";
 choices[70][3] = "A los setenta a&ntilde;os, computados desde el d&iacute;a uno de enero del a&ntilde;o siguiente al de su divulgaci&oacute;n l&iacute;cita o al de su creaci&oacute;n si no se hubiera divulgado.";
 answers[70] = choices[70][3];
 units[70] = "41";
 comments[70] = "Id Pregunta: 82. AGE A1 2015";
 preguntaids[70] = 82


//  Id pregunta: 808 Año de creación de pregunta: 2016
 questions[71]= "72)  A los Directores generales les corresponde (se&ntilde;ala la incorrecta):";
 choices[71]= new Array();
 choices[71][0] = "proponer los proyectos de su Direcci&oacute;n general para alcanzar los objetivos establecidos por el Ministro, dirigir su ejecuci&oacute;n y controlar su adecuado cumplimiento";
 choices[71][1] = "solicitar del Ministerio de Hacienda y Administraciones P&uacute;blicas la afectaci&oacute;n o el arrendamiento de los inmuebles necesarios para el cumplimiento de los fines de los servicios a cargo del Departamento";
 choices[71][2] = "ejercer las competencias atribuidas a la Direcci&oacute;n general y las que le sean desconcentradas o delegadas";
 choices[71][3] = "impulsar y supervisar las actividades que forman parte de la gesti&oacute;n ordinaria del &oacute;rgano directivo y velar por el buen funcionamiento de los &oacute;rganos y unidades dependientes y del personal integrado en los mismos";
 answers[71] = choices[71][1];
 units[71] = "4, 7, 8, 9";
 comments[71] = "Id Pregunta: 808. Ley 40/2015";
 preguntaids[71] = 808


//  Id pregunta: 381 Año de creación de pregunta: 2016
 questions[72]= "73)  La ley Org&aacute;nica 3/2007 para la igualdad efectiva entre hombres y mujeres en el &aacute;mbito de la Sociedad de la Informaci&oacute;n, obliga al Gobierno:";
 choices[72]= new Array();
 choices[72][0] = "A promover los contenidos creados por mujeres en el &aacute;mbito de la Sociedad de la Informaci&oacute;n";
 choices[72][1] = "A proteger los contenidos creados por mujeres n el &aacute;mbito de la Sociedad de la Informaci&oacute;n con medidas especiales de propiedad intelectual.";
 choices[72][2] = "A dise&ntilde;ar webs con contenido espec&iacute;fico femenino.";
 choices[72][3] = "A incorporar, en las convocatorias de empleo p&uacute;blico, igual n&uacute;mero de funcionarios que de funcionarias.";
 answers[72] = choices[72][0];
 units[72] = "14";
 comments[72] = "Id Pregunta: 381. POLITICAS DE IGUALDAD";
 preguntaids[72] = 381


//  Id pregunta: 256 Año de creación de pregunta: 2016
 questions[73]= "74)  El Art&iacute;culo 21 de la Constituci&oacute;n Espa&ntilde;ola se&ntilde;ala que:";
 choices[73]= new Array();
 choices[73][0] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y con armas.";
 choices[73][1] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica siempre dentro del derecho de manifestaci&oacute;n previa autorizaci&oacute;n.";
 choices[73][2] = "Se reconoce el derecho de reuni&oacute;n pac&iacute;fica y sin armas.";
 choices[73][3] = "No se reconoce expl&iacute;citamente tal derecho de reuni&oacute;n.";
 answers[73] = choices[73][0];
 units[73] = "1";
 comments[73] = "Id Pregunta: 256. CONSTITUCION1978";
 preguntaids[73] = 256


//  Id pregunta: 83 Año de creación de pregunta: 2016
 questions[74]= "75)  Seg&uacute;n WCAG 2.0, &iquest;con qu&eacute; principio est&aacute; relacionada la pauta &ldquo;Hacer que las p&aacute;ginas web aparezcan y operen de forma predecible&rdquo;?";
 choices[74]= new Array();
 choices[74][0] = "Perceptible";
 choices[74][1] = "Operable";
 choices[74][2] = "Comprensible";
 choices[74][3] = "Robusto";
 answers[74] = choices[74][2];
 units[74] = "42";
 comments[74] = "Id Pregunta: 83. AGE A1 2015";
 preguntaids[74] = 83


