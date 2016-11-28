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

//  Id pregunta: 357 Año de creación de pregunta: 2016
 questions[0]= "1)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[0]= new Array();
 choices[0][0] = "El Parlamento y el Consejo.";
 choices[0][1] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[0][2] = "El Parlamento y la Comisi&oacute;n.";
 choices[0][3] = "La Comisi&oacute;n y el Consejo.";
 answers[0] = choices[0][1];
 units[0] = "5";
 comments[0] = "Id Pregunta: 357. UNION EUROPEA";


//  Id pregunta: 639 Año de creación de pregunta: 2016
 questions[1]= "2)  En el sistema operativo Unix/Linux, el comando id:";
 choices[1]= new Array();
 choices[1][0] = "Muestra el n&uacute;mero de identificaci&oacute;n y el grupo al que pertenece el usuario.";
 choices[1][1] = "El comando id no existe.";
 choices[1][2] = "Muestra el n&uacute;mero de procesos lanzados por el usuario.";
 choices[1][3] = "Muestra las hebras y las identificaciones de los archivos abiertos por el usuario.";
 answers[1] = choices[1][0];
 units[1] = "57";
 comments[1] = "Id Pregunta: 639. Junta de Extremadura A1 2015";


//  Id pregunta: 201 Año de creación de pregunta: 2016
 questions[2]= "3)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[2]= new Array();
 choices[2][0] = "La aprobaci&oacute;n, modificaci&oacute;n o derogaci&oacute;n de las leyes org&aacute;nicas exigir&aacute; mayor&iacute;a absoluta de las Cortes Generales, en una votaci&oacute;n final sobre el conjunto del proyecto.";
 choices[2][1] = "Las disposiciones del Gobierno que contengan legislaci&oacute;n delegada recibir&aacute;n el t&iacute;tulo de Decretos-leyes.";
 choices[2][2] = "Son leyes org&aacute;nicas las relativas al desarrollo de los derechos fundamentales y de las libertades p&uacute;blicas, las que aprueben los Estatutos de Autonom&iacute;a y el r&eacute;gimen electoral general y las dem&aacute;s previstas en la Constituci&oacute;n.";
 choices[2][3] = "La delegaci&oacute;n legislativa deber&aacute; otorgarse mediante una ley org&aacute;nica cuando su objeto sea la formaci&oacute;n de textos articulados o por una ley ordinaria cuando se trate de refundir varios textos legales en uno.";
 answers[2] = choices[2][2];
 units[2] = "1";
 comments[2] = "Id Pregunta: 201. CONSTITUCION1978";


//  Id pregunta: 671 Año de creación de pregunta: 2016
 questions[3]= "4)  Un procedimiento administrativo finalizar&aacute;, seg&uacute;n la Ley 39/2015, por:";
 choices[3]= new Array();
 choices[3][0] = "Resoluci&oacute;n.";
 choices[3][1] = "Desistimiento o renuncia.";
 choices[3][2] = "Caducidad.";
 choices[3][3] = "Todas las anteriores.";
 answers[3] = choices[3][3];
 units[3] = "7";
 comments[3] = "Id Pregunta: 671. Art&iacute;culo 84 de la Ley 39/2015";


//  Id pregunta: 845 Año de creación de pregunta: 2016
 questions[4]= "5)  Respecto a la reutilizaci&oacute;n de sistemas y aplicaciones de propiedad de la Administraci&oacute;n:";
 choices[4]= new Array();
 choices[4][0] = "Las Administraciones pondr&aacute;n siempre a disposici&oacute;n de cualquiera de ellas que lo solicite las aplicaciones, desarrolladas por sus servicios o que hayan sido objeto de contrataci&oacute;n y de cuyos derechos de propiedad intelectual sean titulares.";
 choices[4][1] = "Las aplicaciones a las que se refiere el apartado anterior podr&aacute;n ser declaradas como de fuentes abiertas, cuando de ello se derive una mayor transparencia en el funcionamiento de la Administraci&oacute;n P&uacute;blica o se fomente con ello la incorporaci&oacute;n de los ciudadanos a la Sociedad de la informaci&oacute;n.";
 choices[4][2] = "Las Administraciones P&uacute;blicas, con car&aacute;cter posterior a la adquisici&oacute;n, desarrollo o al mantenimiento a lo largo de todo el ciclo de vida de una aplicaci&oacute;n, tanto si se realiza con medios propios o por la contrataci&oacute;n de los servicios correspondientes, deber&aacute;n consultar en el directorio general de aplicaciones.";
 choices[4][3] = "En el directorio general de aplicaciones constar&aacute;n las aplicaciones disponibles de la Administraci&oacute;n General del Estado.";
 answers[4] = choices[4][1];
 units[4] = "4, 7, 8, 9";
 comments[4] = "Id Pregunta: 845. Ley 40/2015";


//  Id pregunta: 471 Año de creación de pregunta: 2016
 questions[5]= "6)  Conforme a la Ley General Presupuestaria, la clasificaci&oacute;n econ&oacute;mica agrupar&aacute; los cr&eacute;ditos por cap&iacute;tulos separando las operaciones corrientes, las de capital, las financieras y el Fondo de Contingencia de ejecuci&oacute;n presupuestaria. En los cr&eacute;ditos para operaciones de capital se incluir&aacute;n:";
 choices[5]= new Array();
 choices[5][0] = "Las inversiones financieras y las transferencias de capital.";
 choices[5][1] = "Las inversiones reales y financieras.";
 choices[5][2] = "Las transferencias de capital y las transferencias corrientes.";
 choices[5][3] = "Las transferencias de capital y las inversiones reales.";
 answers[5] = choices[5][3];
 units[5] = "10";
 comments[5] = "Id Pregunta: 471. PRESUPUESTOS GENERALES";


//  Id pregunta: 822 Año de creación de pregunta: 2016
 questions[6]= "7)  En las Comunidades Aut&oacute;nomas, en caso de ausencia, vacante o enfermedad del titular de la Delegaci&oacute;n del Gobierno, ser&aacute; suplido por:";
 choices[6]= new Array();
 choices[6][0] = "el Subdelegado del Gobierno que el Delegado designe y, en su defecto, al de la provincia en que tenga su sede";
 choices[6][1] = "el Subdelegado del Gobierno de la provincia en que tenga su sede y, en su defecto, al que el Delegado designe";
 choices[6][2] = "el Subdirector General que el Delegado designe";
 choices[6][3] = "el Secretario de Estado";
 answers[6] = choices[6][0];
 units[6] = "4, 7, 8, 9";
 comments[6] = "Id Pregunta: 822. Ley 40/2015";


//  Id pregunta: 142 Año de creación de pregunta: 2016
 questions[7]= "8)  El plazo para la interposici&oacute;n del recurso de alzada ser&aacute;:";
 choices[7]= new Array();
 choices[7][0] = "De un mes si el acto fuera presunto";
 choices[7][1] = "De un mes si el acto fuera expreso";
 choices[7][2] = "De un mes en cualquier caso";
 choices[7][3] = "No existe un plazo m&aacute;ximo para la interposici&oacute;n de un recurso de alzada";
 answers[7] = choices[7][1];
 units[7] = "8";
 comments[7] = "Id Pregunta: 142. Ley 39/2015, Art&iacute;culo 122";


//  Id pregunta: 305 Año de creación de pregunta: 2016
 questions[8]= "9)  Indique en donde tiene su sede de la Comisi&oacute;n Europea:";
 choices[8]= new Array();
 choices[8][0] = "Estrasburgo.";
 choices[8][1] = "Bruselas.";
 choices[8][2] = "Luxemburgo.";
 choices[8][3] = "Par&iacute;s.";
 answers[8] = choices[8][1];
 units[8] = "5";
 comments[8] = "Id Pregunta: 305. UNION EUROPEA";


//  Id pregunta: 364 Año de creación de pregunta: 2016
 questions[9]= "10)  &iquest;En qu&eacute; fecha entr&oacute; en vigor el Tratado de Amsterdam?:";
 choices[9]= new Array();
 choices[9][0] = "El 1 de junio de 1999.";
 choices[9][1] = "El 1 de mayo de 1999.";
 choices[9][2] = "El 1 de abril de 1999.";
 choices[9][3] = "El 1 de marzo de 1999.";
 answers[9] = choices[9][1];
 units[9] = "5";
 comments[9] = "Id Pregunta: 364. UNION EUROPEA";


//  Id pregunta: 450 Año de creación de pregunta: 2016
 questions[10]= "11)  La partida presupuestaria es equivalente a...";
 choices[10]= new Array();
 choices[10][0] = "El sujeto que realiza el gasto";
 choices[10][1] = "El fin que se persigue con la realizaci&oacute;n del gasto";
 choices[10][2] = "El dinero que se asigna a la realizaci&oacute;n del gasto";
 choices[10][3] = "El concepto del gasto, es decir: aquello en lo que se realiza el gasto";
 answers[10] = choices[10][3];
 units[10] = "10";
 comments[10] = "Id Pregunta: 450. PRESUPUESTOS GENERALES";


//  Id pregunta: 579 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;Cu&aacute;ndo fue aprobada la Estrategia TIC?";
 choices[11]= new Array();
 choices[11][0] = "El 2 de Octubre de 2015";
 choices[11][1] = "El 15 de Septiembre de 2015";
 choices[11][2] = "El 1 de Octubre de 2015";
 choices[11][3] = "El 5 de Octubre de 2015";
 answers[11] = choices[11][0];
 units[11] = "19";
 comments[11] = "Id Pregunta: 579. Estrategia TIC";


//  Id pregunta: 55 Año de creación de pregunta: 2016
 questions[12]= "13)  WS-Security contiene especificaciones sobre:";
 choices[12]= new Array();
 choices[12][0] = "La publicaci&oacute;n, localizaci&oacute;n y enlazado de los Servicios Web.";
 choices[12][1] = "La forma de conseguir integridad y seguridad en los mensajes SOAP.";
 choices[12][2] = "Las pol&iacute;ticas en materia de seguridad aplicables a un sistema de informaci&oacute;n.";
 choices[12][3] = "El env&iacute;o de datagramas sin establecimiento previo de una conexi&oacute;n.";
 answers[12] = choices[12][1];
 units[12] = "119";
 comments[12] = "Id Pregunta: 55. AGE A1 2015";


//  Id pregunta: 71 Año de creación de pregunta: 2016
 questions[13]= "14)  Seg&uacute;n el Modelo de Referencia Workflow definido por WfMC, &iquest;cu&aacute;l de las siguientes funciones corresponde al Servicio de Representaci&oacute;n del Workflow?";
 choices[13]= new Array();
 choices[13][0] = "Interpretar la descripci&oacute;n de procesos y controlar las diferentes instancias de los procesos, secuenciar las actividades, adicionar elementos a la lista de trabajo de los usuarios, e invocar las aplicaciones necesarias.";
 choices[13][1] = "Especificar el formato de intercambio com&uacute;n para soportar la transferencia de definiciones de procesos entre productos diferentes, utilizando un lenguaje de definici&oacute;n de procesos.";
 choices[13][2] = "Definir los mecanismos requeridos por los desarrolladores de productos workflow para implementar la comunicaci&oacute;n de un motor workflow con otros.";
 choices[13][3] = "Monitorizar informaci&oacute;n relevante del workflow, fundamentalmente con fines de auditor&iacute;a y estad&iacute;sticos.";
 answers[13] = choices[13][0];
 units[13] = "86";
 comments[13] = "Id Pregunta: 71. AGE A1 2015";


//  Id pregunta: 699 Año de creación de pregunta: 2016
 questions[14]= "15)  Cu&aacute;l de las siguientes afirmaciones relativas a Apache Jenkins es falsa";
 choices[14]= new Array();
 choices[14][0] = "Est&aacute; desarrollado en Java.";
 choices[14][1] = "Fue un proyecto escindido de Hudson tras una disputa con Oracle.";
 choices[14][2] = "Se considera software libre bajo la licencia EUPL.";
 choices[14][3] = "Todas las afirmaciones son correctas.";
 answers[14] = choices[14][2];
 units[14] = "92";
 comments[14] = "Id Pregunta: 699. INTEGRACION CONTINUA";


//  Id pregunta: 522 Año de creación de pregunta: 2016
 questions[15]= "16)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas se denomina:";
 choices[15]= new Array();
 choices[15][0] = "De los interesados en el procedimiento";
 choices[15][1] = "De la actividad de las Administraciones P&uacute;blicas";
 choices[15][2] = "Disposiciones generales";
 choices[15][3] = "De los actos administrativos";
 answers[15] = choices[15][2];
 units[15] = "7";
 comments[15] = "Id Pregunta: 522. LEY 39/2015";


//  Id pregunta: 311 Año de creación de pregunta: 2016
 questions[16]= "17)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n a la Comisi&oacute;n Europea:";
 choices[16]= new Array();
 choices[16][0] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a los tres quintos del n&uacute;mero de Estados miembros.";
 choices[16][1] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a las tres cuartas partes del n&uacute;mero de Estados miembros.";
 choices[16][2] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a los dos tercios del n&uacute;mero de Estados miembros.";
 choices[16][3] = "A partir del 1 de Noviembre de 2014, la Comisi&oacute;n estar&aacute; compuesta por un n&uacute;mero de miembros correspondiente a un nacional por cada Estado miembro.";
 answers[16] = choices[16][2];
 units[16] = "5";
 comments[16] = "Id Pregunta: 311. UNION EUROPEA";


//  Id pregunta: 37 Año de creación de pregunta: 2016
 questions[17]= "18)  Seg&uacute;n el proyecto GNU, &iquest;cu&aacute;l de las siguientes NO puede ser considerada una libertad esencial del software libre?";
 choices[17]= new Array();
 choices[17][0] = "La libertad de ejecutar el programa como se desee, con cualquier prop&oacute;sito.";
 choices[17][1] = "La libertad de estudiar c&oacute;mo funciona el programa, y modificarlo para que tenga la funcionalidad deseada.";
 choices[17][2] = "La libertad de redistribuir copias para ayudar al pr&oacute;jimo.";
 choices[17][3] = "La libertad de distribuir a terceros versiones modificadas siempre que no tengan uso comercial.";
 answers[17] = choices[17][3];
 units[17] = "66";
 comments[17] = "Id Pregunta: 37. AGE A1 2015";


//  Id pregunta: 423 Año de creación de pregunta: 2016
 questions[18]= "19)  Para contribuir a un reparto m&aacute;s equilibrado de las responsabilidades familiares se reconoce a los padres:";
 choices[18]= new Array();
 choices[18][0] = "El derecho a un permiso.";
 choices[18][1] = "Una prestaci&oacute;n por paternidad.";
 choices[18][2] = "Ambas son correctas.";
 choices[18][3] = "18 d&iacute;as de permiso.";
 answers[18] = choices[18][2];
 units[18] = "14";
 comments[18] = "Id Pregunta: 423. POLITICAS DE IGUALDAD";


//  Id pregunta: 124 Año de creación de pregunta: 2016
 questions[19]= "20)  Se&ntilde;ale la VERDADERA con respecto a las las reclamaciones ante el Consejo de Transparencia y Buen Gobierno:";
 choices[19]= new Array();
 choices[19][0] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de tres meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[19][1] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de seis meses, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[19][2] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; desestimada.";
 choices[19][3] = "El plazo m&aacute;ximo para resolver y notificar la resoluci&oacute;n ser&aacute; de veinte d&iacute;as, transcurrido el cual, la reclamaci&oacute;n se entender&aacute; estimada";
 answers[19] = choices[19][0];
 units[19] = "22";
 comments[19] = "Id Pregunta: 124. ";


//  Id pregunta: 630 Año de creación de pregunta: 2016
 questions[20]= "21)  Seg&uacute;n el Real Decreto 4/2010, de 8 de enero, por el que se regula el Esquema Nacional de Interoperabilidad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, &iquest;qu&eacute; es la interoperabilidad?";
 choices[20]= new Array();
 choices[20][0] = "Es la capacidad de los sistemas de informaci&oacute;n y de los procedimientos a los que &eacute;stos dan soporte, de compartir datos y posibilitar el intercambio de informaci&oacute;n y conocimiento entre ellos.";
 choices[20][1] = "Es la obligaci&oacute;n de conectividad ente sistemas operativos de las Administraciones P&uacute;blicas.";
 choices[20][2] = "Es la capacidad de intercambio de datos entre las Comunidades Aut&oacute;nomas y la Administraci&oacute;n Central.";
 choices[20][3] = "Es la posibilidad de acceso a los datos que poseen todas las Administraciones sobre cualquiera de los usuarios de los sistemas de informaci&oacute;n.";
 answers[20] = choices[20][0];
 units[20] = "45";
 comments[20] = "Id Pregunta: 630. Junta de Extremadura A1 2015";


//  Id pregunta: 591 Año de creación de pregunta: 2016
 questions[21]= "22)  Son servicios declarados compartidos:";
 choices[21]= new Array();
 choices[21][0] = "Servicio unificado de telecomunicaciones y servicio de seguridad gestionada";
 choices[21][1] = "Servicio multicanal de atenci&oacute;n al ciudadano";
 choices[21][2] = "Servicio com&uacute;n de generaci&oacute;n y validaci&oacute;n de firmas electr&oacute;nicas";
 choices[21][3] = "Todos los anteriores";
 answers[21] = choices[21][3];
 units[21] = "19";
 comments[21] = "Id Pregunta: 591. Estrategia TIC";


//  Id pregunta: 17 Año de creación de pregunta: 2016
 questions[22]= "23)  De acuerdo con el Reglamento por el que se desarrolla parcialmente la Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, aprobado por Real Decreto 1671/2009, de 6 de noviembre, se&ntilde;ale la respuesta correcta:";
 choices[22]= new Array();
 choices[22][0] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de emisi&oacute;n.";
 choices[22][1] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 12 meses desde la fecha de emisi&oacute;n.";
 choices[22][2] = "Los documentos electr&oacute;nicos deben conservarse por un per&iacute;odo m&iacute;nimo de 6 meses desde la fecha de notificaci&oacute;n.";
 choices[22][3] = "Los documentos electr&oacute;nicos deben conservarse por el per&iacute;odo m&iacute;nimo que determine cada &oacute;rgano administrativo de acuerdo con el procedimiento administrativo de que se trate.";
 answers[22] = choices[22][3];
 units[22] = "44";
 comments[22] = "Id Pregunta: 17. AGE A1 2015";


//  Id pregunta: 706 Año de creación de pregunta: 2016
 questions[23]= "24)  Se&ntilde;ale la afirmaci&oacute;n verdadera con respecto a la entrada en vigor de la Ley 19/2013 de Transparencia, Acceso a la Informaci&oacute;n P&uacute;blica y Buen Gobierno:";
 choices[23]= new Array();
 choices[23][0] = "Todas las disposiciones entraron en vigor al d&iacute;a siguiente de su publicaci&oacute;n en el BOE";
 choices[23][1] = "La entrada en vigor de todas sus disposiciones fue al a&ntilde;o de su publicaci&oacute;n en el BOE";
 choices[23][2] = "Los &oacute;rganos de las Comunidades Aut&oacute;nomas y Entidades Locales dispusieron de un plazo m&aacute;ximo de dos a&ntilde;os tras publicaci&oacute;n en BOE para adaptarse a las obligaciones contenidas en esta Ley.";
 choices[23][3] = "Algunas disposiciones de la ley entraron en vigor a los 3 a&ntilde;os de su publicaci&oacute;n en el BOE";
 answers[23] = choices[23][2];
 units[23] = "22";
 comments[23] = "Id Pregunta: 706. Ley de transparencia";


//  Id pregunta: 548 Año de creación de pregunta: 2016
 questions[24]= "25)  El principio definido en el est&aacute;ndar ISO/IEC 38500 para la Gobernanza TIC que establece la necesidad de cumplir los requerimientos regulatorios y legales es el principio de:";
 choices[24]= new Array();
 choices[24][0] = "Conformidad";
 choices[24][1] = "Responsabilidad";
 choices[24][2] = "Adquisici&oacute;n";
 choices[24][3] = "Desempe&ntilde;o";
 answers[24] = choices[24][0];
 units[24] = "26";
 comments[24] = "Id Pregunta: 548. Gobernanza TIC";


//  Id pregunta: 85 Año de creación de pregunta: 2016
 questions[25]= "26)  Seg&uacute;n MAGERIT 3.0, el informe en el que se recogen los resultados de la identificaci&oacute;n de las amenazas relevantes sobre el sistema a analizar, caracterizadas por las estimaciones de ocurrencia y da&ntilde;o causado, se denomina:";
 choices[25]= new Array();
 choices[25][0] = "Estimaci&oacute;n del riesgo";
 choices[25][1] = "Evaluaci&oacute;n de salvaguardas";
 choices[25][2] = "Declaraci&oacute;n de aplicabilidad";
 choices[25][3] = "Mapa de riesgos";
 answers[25] = choices[25][3];
 units[25] = "45";
 comments[25] = "Id Pregunta: 85. AGE A1 2015";


//  Id pregunta: 278 Año de creación de pregunta: 2016
 questions[26]= "27)  Respecto al Consejo de Transparencia y Buen Gobierno:";
 choices[26]= new Array();
 choices[26][0] = "Su estatuto entra en vigor el 10 de diciembre de 2014.";
 choices[26][1] = "Estatuto se estructura en cinco cap&iacute;tulos.";
 choices[26][2] = "El Consejo de Ministros aprobar&aacute;, en el plazo de tres meses desde la publicaci&oacute;n de la Ley 19/2013 en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;, un Real Decreto por el que se apruebe el Estatuto org&aacute;nico del Consejo de Transparencia y Buen Gobierno.";
 choices[26][3] = "Su estatuto se regula por el Real Decreto 919/2014, de 31 de octubre.";
 answers[26] = choices[26][1];
 units[26] = "22";
 comments[26] = "Id Pregunta: 278. LEY DE TRANSPARENCIA";


//  Id pregunta: 641 Año de creación de pregunta: 2016
 questions[27]= "28)  En cuanto al proceso de autenticaci&oacute;n en Linux, indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[27]= new Array();
 choices[27][0] = "Linux emplea para el proceso de autenticaci&oacute;n por contrase&ntilde;a el sistema DEC.";
 choices[27][1] = "Linux emplea para el proceso de autenticaci&oacute;n por contrase&ntilde;a el sistema MD6.";
 choices[27][2] = "Linux emplea dos sistemas para el proceso de autenticaci&oacute;n por contrase&ntilde;a, DES y MD5.";
 choices[27][3] = "Linux emplea dos sistemas para el proceso de autenticaci&oacute;n por contrase&ntilde;a, DEC y MD6.";
 answers[27] = choices[27][2];
 units[27] = "57";
 comments[27] = "Id Pregunta: 641. Junta de Extremadura A1 2015";


//  Id pregunta: 152 Año de creación de pregunta: 2016
 questions[28]= "29)  Los documentos electr&oacute;nicos deber&aacute;n conservarse en un formato que permita: (se&ntilde;ala la respuesta incorrecta)";
 choices[28]= new Array();
 choices[28][0] = "garantizar su consulta hasta transcurridos cinco a&ntilde;os desde su emisi&oacute;n";
 choices[28][1] = "garantizar la conservaci&oacute;n del documento";
 choices[28][2] = "garantizar la autenticidad del documento";
 choices[28][3] = "garantizar la integridad del documento";
 answers[28] = choices[28][0];
 units[28] = "7";
 comments[28] = "Id Pregunta: 152. Ley 39/2015, Art&iacute;culo 17";


//  Id pregunta: 67 Año de creación de pregunta: 2016
 questions[29]= "30)  En Internet, la entidad encargada de la coordinaci&oacute;n de los N&uacute;meros de Sistema Aut&oacute;nomo (Autonomous System Numbers - ASN) usados por varios protocolos de enrutamiento, es:";
 choices[29]= new Array();
 choices[29][0] = "IANA";
 choices[29][1] = "ISOC";
 choices[29][2] = "IETF";
 choices[29][3] = "IAB";
 answers[29] = choices[29][0];
 units[29] = "103";
 comments[29] = "Id Pregunta: 67. AGE A1 2015";


//  Id pregunta: 235 Año de creación de pregunta: 2016
 questions[30]= "31)  El Art&iacute;culo 108 de la Constituci&oacute;n Espa&ntilde;ola establece que el Gobierno responde solidariamente de su gesti&oacute;n pol&iacute;tica ante:";
 choices[30]= new Array();
 choices[30][0] = "El Jefe del Estado.";
 choices[30][1] = "El Tribunal Constitucional.";
 choices[30][2] = "El Congreso de los Diputados.";
 choices[30][3] = "Las Cortes Generales.";
 answers[30] = choices[30][0];
 units[30] = "1";
 comments[30] = "Id Pregunta: 235. CONSTITUCION1978";


//  Id pregunta: 382 Año de creación de pregunta: 2016
 questions[31]= "32)  Seg&uacute;n la ley org&aacute;nica 3/2007, los actos y las cl&aacute;usulas de los negocios jur&iacute;dicos que causen discriminaci&oacute;n por raz&oacute;n de sexo:";
 choices[31]= new Array();
 choices[31][0] = "Se considerar&aacute;n nulos y sin efecto.";
 choices[31][1] = "Est&aacute;n sometidos a una tasa fiscal especial (Tasa Tobin)";
 choices[31][2] = "Son impugnables ante los juzgados especiales contra la violencia de g&eacute;nero.";
 choices[31][3] = "Si son actos administrativos, el recurso se debe interponer, en todo caso, ante el Ministerio de Igualdad.";
 answers[31] = choices[31][0];
 units[31] = "14";
 comments[31] = "Id Pregunta: 382. POLITICAS DE IGUALDAD";


//  Id pregunta: 119 Año de creación de pregunta: 2016
 questions[32]= "33)  &iquest;Con qu&eacute; periodicidad se publica la EPA (Encuesta de Poblaci&oacute;n Activa)?";
 choices[32]= new Array();
 choices[32][0] = "Anual";
 choices[32][1] = "Mensual";
 choices[32][2] = "Semestral";
 choices[32][3] = "Trimestral";
 answers[32] = choices[32][3];
 units[32] = "15";
 comments[32] = "Id Pregunta: 119. ";


//  Id pregunta: 577 Año de creación de pregunta: 2016
 questions[33]= "34)  &iquest;Cu&aacute;l de los siguientes sistemas de bases de datos es orientado a objetos?";
 choices[33]= new Array();
 choices[33][0] = "MySQL";
 choices[33][1] = "SQLite";
 choices[33][2] = "Zope";
 choices[33][3] = "MariaDB";
 answers[33] = choices[33][2];
 units[33] = "61";
 comments[33] = "Id Pregunta: 577. Tema 61. TAI 2016.";


//  Id pregunta: 184 Año de creación de pregunta: 2016
 questions[34]= "35)  El T&iacute;tulo IV de la Constituci&oacute;n Espa&ntilde;ola de 1978 dispone que el Gobierno:";
 choices[34]= new Array();
 choices[34][0] = "Se compone del Presidente, los Vicepresidentes y los Secretarios de Estado.";
 choices[34][1] = "Ejerce la funci&oacute;n ejecutiva y la legislativa de acuerdo con la Constituci&oacute;n y las leyes.";
 choices[34][2] = "Cesa tras la celebraci&oacute;n de elecciones generales, en los casos de p&eacute;rdida de confianza parlamentaria, o por dimisi&oacute;n o fallecimiento de su Presidente.";
 choices[34][3] = "El presidente y los dem&aacute;s miembros del Gobierno son nombrados por el Rey a propuesta del Presidente del Congreso.";
 answers[34] = choices[34][2];
 units[34] = "1";
 comments[34] = "Id Pregunta: 184. CONSTITUCION1978";


//  Id pregunta: 473 Año de creación de pregunta: 2016
 questions[35]= "36)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la agrupaci&oacute;n de los cr&eacute;ditos en cap&iacute;tulos, art&iacute;culos, conceptos y subconceptos corresponde a la clasificaci&oacute;n:";
 choices[35]= new Array();
 choices[35][0] = "Org&aacute;nica.";
 choices[35][1] = "Contable.";
 choices[35][2] = "Econ&oacute;mica.";
 choices[35][3] = "Por programas.";
 answers[35] = choices[35][2];
 units[35] = "10";
 comments[35] = "Id Pregunta: 473. PRESUPUESTOS GENERALES";


//  Id pregunta: 513 Año de creación de pregunta: 2016
 questions[36]= "37)  Cuando resulte eficaz, proporcionado y necesario para la consecuci&oacute;n de los fines propios del procedimiento, y de manera motivada, podr&aacute;n incluirse tr&aacute;mites adicionales o distintos a los contemplados en esta Ley:";
 choices[36]= new Array();
 choices[36][0] = "solo mediante ley";
 choices[36][1] = "reglamentariamente";
 choices[36][2] = "mediante ley o reglamentariamente";
 choices[36][3] = "ninguna es correcta";
 answers[36] = choices[36][0];
 units[36] = "7";
 comments[36] = "Id Pregunta: 513. LEY 39/2015";


//  Id pregunta: 446 Año de creación de pregunta: 2016
 questions[37]= "38)  &iquest;Cu&aacute;l es el servicio com&uacute;n que  permitir&aacute; la tramitaci&oacute;n por medios electr&oacute;nicos de todo el ciclo de vida involucrado en la concesi&oacute;n de ayudas provenientes de los fondos FEDER?";
 choices[37]= new Array();
 choices[37][0] = "IRIA";
 choices[37][1] = "GALATEA";
 choices[37][2] = "BADARAL";
 choices[37][3] = "SOROLLA";
 answers[37] = choices[37][1];
 units[37] = "43";
 comments[37] = "Id Pregunta: 446. SERVICIOS COMUNES";


//  Id pregunta: 453 Año de creación de pregunta: 2016
 questions[38]= "39)  En los Presupuestos, &iquest;qu&eacute; es lo que se prev&eacute; liquidar?";
 choices[38]= new Array();
 choices[38][0] = "Los cr&eacute;ditos";
 choices[38][1] = "Las partidas presupuestarias";
 choices[38][2] = "Los derechos";
 choices[38][3] = "Las obligaciones";
 answers[38] = choices[38][2];
 units[38] = "10";
 comments[38] = "Id Pregunta: 453. PRESUPUESTOS GENERALES";


//  Id pregunta: 299 Año de creación de pregunta: 2016
 questions[39]= "40)  Indique por cu&aacute;ntos miembros est&aacute; formado actualmente el Tribunal de Cuentas:";
 choices[39]= new Array();
 choices[39][0] = "Quince miembros.";
 choices[39][1] = "Un miembro de cada pa&iacute;s de la Uni&oacute;n Europea.";
 choices[39][2] = "Los miembros que determine el Consejo.";
 choices[39][3] = "Un Presidente y quince miembros.";
 answers[39] = choices[39][1];
 units[39] = "5";
 comments[39] = "Id Pregunta: 299. UNION EUROPEA";


//  Id pregunta: 345 Año de creación de pregunta: 2016
 questions[40]= "41)  El procedimiento de dictamen simple o dictamen consultivo significa que:";
 choices[40]= new Array();
 choices[40][0] = "El Consejo debe obtener la aprobaci&oacute;n del Parlamento Europeo para que se tomen determinadas decisiones de primera importancia.";
 choices[40][1] = "Por el que se da poder al Parlamento Europeo para una mayor posibilidad de influir sobre el proceso legislativo mediante una &quot;doble lectura&quot; de las propuestas legislativas de la Comisi&oacute;n.";
 choices[40][2] = "Por el que se da poder al Parlamento Europeo para aprobar disposiciones conjuntamente con el Consejo.";
 choices[40][3] = "El Consejo consulte al Parlamento Europeo y tome sus puntos de vista en consideraci&oacute;n.";
 answers[40] = choices[40][3];
 units[40] = "5";
 comments[40] = "Id Pregunta: 345. UNION EUROPEA";


//  Id pregunta: 583 Año de creación de pregunta: 2016
 questions[41]= "42)  &iquest;Qu&eacute; car&aacute;cter tiene la utilizaci&oacute;n de los medios y servicios compartidos?.";
 choices[41]= new Array();
 choices[41][0] = "Car&aacute;cter sustitutivo";
 choices[41][1] = "Car&aacute;cter obligatorio";
 choices[41][2] = "Car&aacute;cter obligatorio y sustitutivo, sin excepci&oacute;n alguna";
 choices[41][3] = "Ninguna de las anteriores";
 answers[41] = choices[41][3];
 units[41] = "19";
 comments[41] = "Id Pregunta: 583. Estrategia TIC. Car&aacute;cter obligatorio y sustitutivo, aunque se podr&aacute;n acordar excepciones";


//  Id pregunta: 96 Año de creación de pregunta: 2016
 questions[42]= "43)  Indique cu&aacute;l de las siguientes soluciones tecnol&oacute;gicas NO se utiliza para virtualizaci&oacute;n:";
 choices[42]= new Array();
 choices[42][0] = "VMware ESX";
 choices[42][1] = "XenServer";
 choices[42][2] = "Alfresco";
 choices[42][3] = "Microsoft Hyper-V";
 answers[42] = choices[42][2];
 units[42] = "54";
 comments[42] = "Id Pregunta: 96. AGE A1 2015";


//  Id pregunta: 336 Año de creación de pregunta: 2016
 questions[43]= "44)  El Tribunal de Justicia Europeo funcion&oacute; como instancia &uacute;nica hasta:";
 choices[43]= new Array();
 choices[43][0] = "Diciembre de 1987.";
 choices[43][1] = "Septiembre de 1989.";
 choices[43][2] = "Octubre de 1990.";
 choices[43][3] = "Noviembre de 1980.";
 answers[43] = choices[43][1];
 units[43] = "5";
 comments[43] = "Id Pregunta: 336. UNION EUROPEA";


//  Id pregunta: 528 Año de creación de pregunta: 2016
 questions[44]= "45)  Los menores incapacitados, cuando la extensi&oacute;n de la incapacitaci&oacute;n afecte al ejercicio y defensa de los derechos o intereses de que se trate:";
 choices[44]= new Array();
 choices[44][0] = "tienen capacidad de obrar limitada";
 choices[44][1] = "pueden actuar sin la asistencia de la persona que ejerza la patria potestad, tutela o curatela";
 choices[44][2] = "no tienen capacidad de obrar";
 choices[44][3] = "ninguna es correcta";
 answers[44] = choices[44][2];
 units[44] = "7";
 comments[44] = "Id Pregunta: 528. LEY 39/2015";


//  Id pregunta: 590 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;Cu&aacute;ntos servicios se declararon compartidos en la primera declaraci&oacute;n?";
 choices[45]= new Array();
 choices[45][0] = "14";
 choices[45][1] = "11";
 choices[45][2] = "12";
 choices[45][3] = "15";
 answers[45] = choices[45][0];
 units[45] = "19";
 comments[45] = "Id Pregunta: 590. Estrategia TIC";


//  Id pregunta: 433 Año de creación de pregunta: 2016
 questions[46]= "47)  El &oacute;rgano colegiado responsable de la coordinaci&oacute;n de las pol&iacute;ticas y medidas adoptadas por los departamentos ministeriales con la finalidad de garantizar el derecho a la igualdad entre mujeres y hombres, se denomina:";
 choices[46]= new Array();
 choices[46][0] = "Unidad de igualdad.";
 choices[46][1] = "Comisi&oacute;n Interministerial de Igualdad entre mujeres y hombres.";
 choices[46][2] = "Ninguna de las anteriores.";
 choices[46][3] = "A y B son correctas.";
 answers[46] = choices[46][1];
 units[46] = "14";
 comments[46] = "Id Pregunta: 433. POLITICAS DE IGUALDAD";


//  Id pregunta: 203 Año de creación de pregunta: 2016
 questions[47]= "48)  Se&ntilde;ale la afirmaci&oacute;n correcta. La tramitaci&oacute;n de las proposiciones de ley se regular&aacute; por:";
 choices[47]= new Array();
 choices[47][0] = "Ley Org&aacute;nica.";
 choices[47][1] = "Lo dispuesto en la normativa comunitaria.";
 choices[47][2] = "Los Reglamentos de las C&aacute;maras.";
 choices[47][3] = "El Reglamento del Congreso de los Diputados, exclusivamente.";
 answers[47] = choices[47][2];
 units[47] = "1";
 comments[47] = "Id Pregunta: 203. CONSTITUCION1978";


//  Id pregunta: 485 Año de creación de pregunta: 2016
 questions[48]= "49)  La Ley 47/2003, de 26 de noviembre, General Presupuestaria se encuentra formada por:";
 choices[48]= new Array();
 choices[48][0] = "180 art&iacute;culos.";
 choices[48][1] = "182 art&iacute;culos.";
 choices[48][2] = "185 art&iacute;culos.";
 choices[48][3] = "190 art&iacute;culos.";
 answers[48] = choices[48][1];
 units[48] = "10";
 comments[48] = "Id Pregunta: 485. PRESUPUESTOS GENERALES";


//  Id pregunta: 841 Año de creación de pregunta: 2016
 questions[49]= "50)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[49]= new Array();
 choices[49][0] = "El &oacute;rgano administrativo que se estime incompetente para la resoluci&oacute;n de un asunto remitir&aacute; directamente las actuaciones al &oacute;rgano superior, debiendo notificar esta circunstancia a los interesados.";
 choices[49][1] = "Los interesados que sean parte en el procedimiento podr&aacute;n dirigirse al &oacute;rgano que se encuentre conociendo de un asunto para que decline su competencia y remita las actuaciones al &oacute;rgano competente.";
 choices[49][2] = "Asimismo, podr&aacute;n dirigirse al &oacute;rgano que estimen competente para que requiera de inhibici&oacute;n al que est&eacute; conociendo del asunto.";
 choices[49][3] = "Los conflictos de atribuciones s&oacute;lo podr&aacute;n suscitarse entre &oacute;rganos de una misma Administraci&oacute;n no relacionados jer&aacute;rquicamente, y respecto a asuntos sobre los que no haya finalizado el procedimiento administrativo.";
 answers[49] = choices[49][0];
 units[49] = "4, 7, 8, 9";
 comments[49] = "Id Pregunta: 841. Ley 40/2015";


//  Id pregunta: 133 Año de creación de pregunta: 2016
 questions[50]= "51)  Seg&uacute;n la ley 14/2013, de apoyo a los emprendedores y su internacionalizaci&oacute;n, cu&aacute;l no corresponde a una de las medidas implantadas:";
 choices[50]= new Array();
 choices[50][0] = "Apoyos fiscales y en materia de Seguridad Social a los emprendedores.";
 choices[50][1] = "Medidas de conciliaci&oacute;n familiar especiales para los emprendedores.";
 choices[50][2] = "Modificaci&oacute;n de la ley concursal para facilitar los acuerdos de refinanciaci&oacute;n.";
 choices[50][3] = "Creaci&oacute;n de la figura del Emprendedor de Responsabilidad Limitada.";
 answers[50] = choices[50][1];
 units[50] = "12";
 comments[50] = "Id Pregunta: 133. Leyes modelo econ&oacute;mico";


//  Id pregunta: 788 Año de creación de pregunta: 2016
 questions[51]= "52)  En la organizaci&oacute;n central son &oacute;rganos superiores:";
 choices[51]= new Array();
 choices[51][0] = "los Subsecretarios y los Secretarios generales";
 choices[51][1] = "los Ministros y los Secretarios generales t&eacute;cnicos";
 choices[51][2] = "los Secretarios de Estado y los Directores generales";
 choices[51][3] = "los Ministros y los Secretarios de Estado";
 answers[51] = choices[51][3];
 units[51] = "4, 7, 8, 9";
 comments[51] = "Id Pregunta: 788. Ley 40/2015";


//  Id pregunta: 356 Año de creación de pregunta: 2016
 questions[52]= "53)  Se&ntilde;ale la respuesta correcta respecto a las directivas comunitarias:";
 choices[52]= new Array();
 choices[52][0] = "No se aplican directamente en los Estados.";
 choices[52][1] = "No son vinculantes.";
 choices[52][2] = "Habitualmente se dictan sobre materias que son competencias exclusivas de la Uni&oacute;n Europea.";
 choices[52][3] = "Tienen alcance general.";
 answers[52] = choices[52][0];
 units[52] = "5";
 comments[52] = "Id Pregunta: 356. UNION EUROPEA";


//  Id pregunta: 852 Año de creación de pregunta: 2016
 questions[53]= "54)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas de backup es la m&aacute;s eficiente a nivel de ocupaci&oacute;n de espacio?";
 choices[53]= new Array();
 choices[53][0] = "Backup full.";
 choices[53][1] = "Backup diferencial.";
 choices[53][2] = "Backup incremental.";
 choices[53][3] = "Backup deduplicado.";
 answers[53] = choices[53][3];
 units[53] = "53";
 comments[53] = "Id Pregunta: 852. Xunta de Galicia 2015";


//  Id pregunta: 125 Año de creación de pregunta: 2016
 questions[54]= "55)  El derecho de acceso a la informaci&oacute;n p&uacute;blica seg&uacute;n la ley 19/20013  podr&aacute; ser limitado cuando acceder a la informaci&oacute;n suponga un perjuicio, se&ntilde;ale cual NO est&aacute; contemplado en dicha ley:";
 choices[54]= new Array();
 choices[54][0] = "Los intereses de las administraciones que cuenten con su propio Consejo de Transparencia u &oacute;rgano equivalente.";
 choices[54][1] = "La garant&iacute;a de la confidencialidad o el secreto requerido en procesos de toma de decisi&oacute;n.";
 choices[54][2] = "La protecci&oacute;n del medio ambiente.";
 choices[54][3] = "Los intereses econ&oacute;micos y comerciales.";
 answers[54] = choices[54][0];
 units[54] = "22";
 comments[54] = "Id Pregunta: 125. ";


//  Id pregunta: 503 Año de creación de pregunta: 2016
 questions[55]= "56)  De acuerdo con el art&iacute;culo 64 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, qui&eacute;n elaborar&aacute; un presupuesto de explotaci&oacute;n que detallara los recursos y dotaciones anuales correspondientes:";
 choices[55]= new Array();
 choices[55][0] = "Las sociedades mercantiles estatales.";
 choices[55][1] = "Las entidades p&uacute;blicas empresariales.";
 choices[55][2] = "Las respuestas a) y b) son correctas.";
 choices[55][3] = "Las respuestas a) y b) no son correctas.";
 answers[55] = choices[55][2];
 units[55] = "10";
 comments[55] = "Id Pregunta: 503. PRESUPUESTOS GENERALES";


//  Id pregunta: 454 Año de creación de pregunta: 2016
 questions[56]= "57)  En t&eacute;rminos familiares, podemos decir que desembocan en gastos...";
 choices[56]= new Array();
 choices[56][0] = "Los cr&eacute;ditos";
 choices[56][1] = "Las partidas presupuestarias";
 choices[56][2] = "Los derechos";
 choices[56][3] = "Las obligaciones";
 answers[56] = choices[56][3];
 units[56] = "10";
 comments[56] = "Id Pregunta: 454. PRESUPUESTOS GENERALES";


//  Id pregunta: 825 Año de creación de pregunta: 2016
 questions[57]= "58)  Debe abstenerse el funcionario que tiene relaci&oacute;n de servicio con interesado en el asunto o le ha prestado servicios profesionales en los ...";
 choices[57]= new Array();
 choices[57][0] = "Tres &uacute;ltimos a&ntilde;os";
 choices[57][1] = "Cinco &uacute;ltimos a&ntilde;os";
 choices[57][2] = "Cuatro &uacute;ltimos a&ntilde;os";
 choices[57][3] = "Dos &uacute;ltimos a&ntilde;os";
 answers[57] = choices[57][1];
 units[57] = "4, 7, 8, 9";
 comments[57] = "Id Pregunta: 825. Ley 40/2015";


//  Id pregunta: 291 Año de creación de pregunta: 2016
 questions[58]= "59)  La duraci&oacute;n del mandato de los miembros del Tribunal de Cuentas de la Uni&oacute;n Europea es de:";
 choices[58]= new Array();
 choices[58][0] = "Tres a&ntilde;os.";
 choices[58][1] = "Dos a&ntilde;os y medio.";
 choices[58][2] = "Cinco a&ntilde;os.";
 choices[58][3] = "Seis a&ntilde;os.";
 answers[58] = choices[58][3];
 units[58] = "5";
 comments[58] = "Id Pregunta: 291. UNION EUROPEA";


//  Id pregunta: 320 Año de creación de pregunta: 2016
 questions[59]= "60)  Indique a qui&eacute;n corresponde la funci&oacute;n de velar por que se apliquen los Tratados y las medidas adoptadas por las Instituciones en virtud de &eacute;stos:";
 choices[59]= new Array();
 choices[59][0] = "Al Consejo Europeo.";
 choices[59][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[59][2] = "A la Comisi&oacute;n Europea.";
 choices[59][3] = "Al Parlamento Europeo.";
 answers[59] = choices[59][2];
 units[59] = "5";
 comments[59] = "Id Pregunta: 320. UNION EUROPEA";


//  Id pregunta: 535 Año de creación de pregunta: 2016
 questions[60]= "61)  La falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n no impedir&aacute; que se tenga por realizado el acto de que se trate, siempre que se aporte aqu&eacute;lla o se subsane el defecto dentro del plazo de:";
 choices[60]= new Array();
 choices[60][0] = "5 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[60][1] = "10 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[60][2] = "15 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[60][3] = "20 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 answers[60] = choices[60][1];
 units[60] = "7";
 comments[60] = "Id Pregunta: 535. LEY 39/2015";


//  Id pregunta: 771 Año de creación de pregunta: 2016
 questions[61]= "62)  Las Administraciones P&uacute;blicas deber&aacute;n respetar en su actuaci&oacute;n y relaciones los siguientes principios:";
 choices[61]= new Array();
 choices[61][0] = "simplicidad, claridad y proximidad a los ciudadanos";
 choices[61][1] = "participaci&oacute;n, objetividad y transparencia de la actuaci&oacute;n administrativa";
 choices[61][2] = "responsabilidad por la gesti&oacute;n p&uacute;blica";
 choices[61][3] = "todas son correctas";
 answers[61] = choices[61][3];
 units[61] = "4, 7, 8, 9";
 comments[61] = "Id Pregunta: 771. Ley 40/2015";


//  Id pregunta: 391 Año de creación de pregunta: 2016
 questions[62]= "63)  El T&iacute;tulo II de la Ley Org&aacute;nica para la igualdad efectiva de mujeres y hombres se denomina:";
 choices[62]= new Array();
 choices[62][0] = "El principio de igualdad y la tutela contra la discriminaci&oacute;n.";
 choices[62][1] = "Objeto y &aacute;mbito de la Ley.";
 choices[62][2] = "Pol&iacute;ticas p&uacute;blicas para la igualdad.";
 choices[62][3] = "El derecho al trabajo en igualdad de oportunidades.";
 answers[62] = choices[62][2];
 units[62] = "14";
 comments[62] = "Id Pregunta: 391. POLITICAS DE IGUALDAD";


//  Id pregunta: 344 Año de creación de pregunta: 2016
 questions[63]= "64)  Al ingreso de Espa&ntilde;a en la Uni&oacute;n Europea &iquest;cu&aacute;ntos eurodiputados componen el Parlamento?:";
 choices[63]= new Array();
 choices[63][0] = "Pas&oacute; de 518 a 626.";
 choices[63][1] = "Pas&oacute; de 434 a 518.";
 choices[63][2] = "Pas&oacute; de 345 a 512.";
 choices[63][3] = "Pas&oacute; de 435 a 610.";
 answers[63] = choices[63][1];
 units[63] = "5";
 comments[63] = "Id Pregunta: 344. UNION EUROPEA";


//  Id pregunta: 560 Año de creación de pregunta: 2016
 questions[64]= "65)  &iquest;Cu&aacute;ndo ha sido aprobada la Agenda Digital para Espa&ntilde;a?";
 choices[64]= new Array();
 choices[64][0] = "En 2015";
 choices[64][1] = "En 2013";
 choices[64][2] = "En 2016";
 choices[64][3] = "En 2007";
 answers[64] = choices[64][1];
 units[64] = "19";
 comments[64] = "Id Pregunta: 560. Agenda Digital";


//  Id pregunta: 16 Año de creación de pregunta: 2016
 questions[65]= "66)  De acuerdo con la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos de comunicaciones electr&oacute;nicas y de redes p&uacute;blicas de comunicaci&oacute;n:";
 choices[65]= new Array();
 choices[65][0] = "Deben conservarse los datos que revelen el contenido de la comunicaci&oacute;n en virtud de lo establecido en la citada Ley.";
 choices[65][1] = "La obligaci&oacute;n de conservaci&oacute;n de datos cesa a los tres a&ntilde;os desde la fecha en que se haya producido la comunicaci&oacute;n.";
 choices[65][2] = "Los datos conservados de conformidad con lo dispuesto en la citada Ley pueden ser cedidos para los fines que en la misma se determinan previa autorizaci&oacute;n administrativa.";
 choices[65][3] = "Son sujetos obligados los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico o exploten redes p&uacute;blicas de comunicaciones.";
 answers[65] = choices[65][3];
 units[65] = "19";
 comments[65] = "Id Pregunta: 16. AGE A1 2015";


//  Id pregunta: 781 Año de creación de pregunta: 2016
 questions[66]= "67)  Las instrucciones y &oacute;rdenes de servicio se publicar&aacute;n en el bolet&iacute;n oficial que corresponda, sin perjuicio de su difusi&oacute;n de acuerdo con lo previsto en la Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno cuando:";
 choices[66]= new Array();
 choices[66][0] = "una disposici&oacute;n espec&iacute;fica as&iacute; lo establezca";
 choices[66][1] = "se estime conveniente por raz&oacute;n de los destinatarios";
 choices[66][2] = "se estime conveniente por raz&oacute;n de los efectos que puedan producirse";
 choices[66][3] = "todas son correctas";
 answers[66] = choices[66][3];
 units[66] = "4, 7, 8, 9";
 comments[66] = "Id Pregunta: 781. Ley 40/2015";


//  Id pregunta: 743 Año de creación de pregunta: 2016
 questions[67]= "68)  Dos de los principios del Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE son:";
 choices[67]= new Array();
 choices[67][0] = "Transparencia e innovaci&oacute;n";
 choices[67][1] = "Seguridad y reutilizaci&oacute;n";
 choices[67][2] = "Reutilizaci&oacute;n y buz&oacute;n de quejas y sugerencias";
 choices[67][3] = "Principio de solo una vez y transfronterizo de forma predeterminada";
 answers[67] = choices[67][3];
 units[67] = "28";
 comments[67] = "Id Pregunta: 743. Estrategia TIC";


//  Id pregunta: 168 Año de creación de pregunta: 2016
 questions[68]= "69)  En relaci&oacute;n la conectividad desde dispositivos m&oacute;viles en Europa";
 choices[68]= new Array();
 choices[68][0] = "A partir de 15 de Julio de 2017 los operadores solo podr&aacute;n cobrar un extra adicional m&aacute;ximo 1 &euro; /min en llamadas de voz, en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[68][1] = "No existe regulaci&oacute;n sobre el roaming en la UE, sino sobre la portabilidad, que ser&aacute; prohibida a partir del 15 de Julio de 2017.";
 choices[68][2] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de roaming al viajar a otro pa&iacute;s de la UE.";
 choices[68][3] = "A partir de 15 de Julio de 2017 los operadores no podr&aacute;n cobrar en concepto de portabilidad al viajar a otro pa&iacute;s de la UE.";
 answers[68] = choices[68][2];
 units[68] = "19";
 comments[68] = "Id Pregunta: 168. https://ec.europa.eu/digital-single-market/en/roaming";


//  Id pregunta: 283 Año de creación de pregunta: 2016
 questions[69]= "70)  Se&ntilde;ale cu&aacute;l no es una de las prioridades de la Estrategia Europa 2020:";
 choices[69]= new Array();
 choices[69][0] = "Crecimiento inteligente.";
 choices[69][1] = "Crecimiento inclusivo.";
 choices[69][2] = "Crecimiento sostenible.";
 choices[69][3] = "Crecimiento integrador.";
 answers[69] = choices[69][1];
 units[69] = "5";
 comments[69] = "Id Pregunta: 283. UNION EUROPEA";


//  Id pregunta: 154 Año de creación de pregunta: 2016
 questions[70]= "71)  Los t&eacute;rminos y plazos establecidos en la ley 39/2015 u otras leyes obligan a:";
 choices[70]= new Array();
 choices[70][0] = "las autoridades al servicio de las Administraciones P&uacute;blicas competentes para la tramitaci&oacute;n de los asuntos";
 choices[70][1] = "el personal al servicio de las Administraciones P&uacute;blicas competentes para la tramitaci&oacute;n de los asuntos";
 choices[70][2] = "los interesados en la tramitaci&oacute;n de los asuntos";
 choices[70][3] = "todas son correctas";
 answers[70] = choices[70][3];
 units[70] = "7";
 comments[70] = "Id Pregunta: 154. Ley 39/2015, Art&iacute;culo 29";


//  Id pregunta: 11 Año de creación de pregunta: 2016
 questions[71]= "72)  Nada m&aacute;s arrancar el servidor de aplicaciones, usted intenta acceder a su aplicaci&oacute;n y se produce un error de memoria. En ese momento, sospecha que el error se produce porque est&aacute; utilizando unas librer&iacute;as de terceros de gran tama&ntilde;o. &iquest;Qu&eacute; tipo de error deber&iacute;a estar d&aacute;ndose para corroborar su hip&oacute;tesis?";
 choices[71]= new Array();
 choices[71][0] = "java.lang.OutOfMemoryError: Java heap space";
 choices[71][1] = "java.lang.OutOfMemoryError: PermGen space";
 choices[71][2] = "java.lang.OutOfMemoryError: Requested array size exceeds VM limit";
 choices[71][3] = "java.lang.OutOfMemoryError: request &lt;size&gt; bytes for &lt;reason&gt;. Out of swap space";
 answers[71] = choices[71][1];
 units[71] = "64";
 comments[71] = "Id Pregunta: 11. AGE A1 2015";


//  Id pregunta: 536 Año de creación de pregunta: 2016
 questions[72]= "73)  Las Administraciones P&uacute;blicas podr&aacute;n habilitar:";
 choices[72]= new Array();
 choices[72][0] = "con car&aacute;cter general a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[72][1] = "con car&aacute;cter general o espec&iacute;fico a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[72][2] = "con car&aacute;cter general o espec&iacute;fico a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[72][3] = "con car&aacute;cter general a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 answers[72] = choices[72][2];
 units[72] = "7";
 comments[72] = "Id Pregunta: 536. LEY 39/2015";


//  Id pregunta: 348 Año de creación de pregunta: 2016
 questions[73]= "74)  &iquest;En qu&eacute; fecha naci&oacute; la Uni&oacute;n Europea?:";
 choices[73]= new Array();
 choices[73][0] = "El 1 de noviembre de 1994.";
 choices[73][1] = "El 1 de noviembre de 1992.";
 choices[73][2] = "El 1 de noviembre de 1995.";
 choices[73][3] = "El 1 de noviembre de 1993.";
 answers[73] = choices[73][3];
 units[73] = "5";
 comments[73] = "Id Pregunta: 348. UNION EUROPEA";


//  Id pregunta: 99 Año de creación de pregunta: 2016
 questions[74]= "75)  En cuanto a la imputaci&oacute;n de costes de los servicios compartidos en la Administraci&oacute;n General del Estado, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[74]= new Array();
 choices[74][0] = "Seg&uacute;n establece el Real Decreto 806/2014 el coste, caso de ocasionarse, ser&aacute; asumido &iacute;ntegramente por la Direcci&oacute;n de Tecnolog&iacute;as de las Informaci&oacute;n y Comunicaciones.";
 choices[74][1] = "Se sufragar&aacute;n con cargo a los presupuestos de Presidencia del Gobierno dado el car&aacute;cter horizontal del servicio compartido.";
 choices[74][2] = "La declaraci&oacute;n de todo servicio compartido deber&aacute; indicar si existe compensaci&oacute;n econ&oacute;mica al proveedor.";
 choices[74][3] = "No existir&aacute;, dado que su gratuidad y libertad de acceso es consustancial a la idea de servicio compartido.";
 answers[74] = choices[74][2];
 units[74] = "26";
 comments[74] = "Id Pregunta: 99. AGE A1 2015: actualmente la Secretar&iacute;a General de Administraci&oacute;n Digital asume las funciones de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaci&oacute;n, seg&uacute;n Real Decreto 424/2016";


