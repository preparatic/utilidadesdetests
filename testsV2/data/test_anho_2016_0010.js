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

//  Id pregunta: 164 Año de creación de pregunta: 2016
 questions[0]= "1)  En el contexto del Mercado &Uacute;nico Digital, &iquest;qu&eacute; significa la eliminaci&oacute;n del geobloqueo?";
 choices[0]= new Array();
 choices[0][0] = "Introducir medidas destinadas a mejorar la transparencia en materia de precios y la vigilancia regulatoria del mercado transfronterizo de paqueter&iacute;a";
 choices[0][1] = "Eliminar la denegaci&oacute;n de acceso a sitios internet basados en otro pa&iacute;s de la UE o que se cobren precios distintos en funci&oacute;n de la localizaci&oacute;n de un cliente";
 choices[0][2] = "Promover medidas para permitir a los vendedores de bienes f&iacute;sicos beneficiarse del registro y pago electr&oacute;nicos &uacute;nicos y de la introducci&oacute;n de un umbral com&uacute;n del IVA que ayude a las nuevas empresas innovadoras a trabajar en l&iacute;nea";
 choices[0][3] = "Presentar una iniciativa europea sobre computaci&oacute;n en nube, incluidos los servicios de certificaci&oacute;n de la nube";
 answers[0] = choices[0][1];
 units[0] = "19";
 comments[0] = "Id Pregunta: 164. http://www.consilium.europa.eu/es/policies/digital-single-market-strategy/ A: &quot;mejora de la paqueter&iacute;a transfronteriza&quot;; C: &quot;Reducci&oacute;n de la burocracia relacionada con el IVA&quot;; D: &quot;Construir una econom&iacute;a de los datos&quot;";


//  Id pregunta: 546 Año de creación de pregunta: 2016
 questions[1]= "2)  El principio definido en el est&aacute;ndar ISO/IEC 38500 para la Gobernanza TIC que establece la necesidad de cumplir los requerimientos regulatorios y legales es el principio de:";
 choices[1]= new Array();
 choices[1][0] = "Conformidad";
 choices[1][1] = "Responsabilidad";
 choices[1][2] = "Adquisici&oacute;n";
 choices[1][3] = "Desempe&ntilde;o";
 answers[1] = choices[1][0];
 units[1] = "26";
 comments[1] = "Id Pregunta: 546. Gobernanza TIC";


//  Id pregunta: 449 Año de creación de pregunta: 2016
 questions[2]= "3)  El cr&eacute;dito presupuestario es...";
 choices[2]= new Array();
 choices[2][0] = "El sujeto que realiza el gasto";
 choices[2][1] = "El fin que se persigue con la realizaci&oacute;n del gasto";
 choices[2][2] = "El dinero que se asigna a la realizaci&oacute;n del gasto";
 choices[2][3] = "El concepto del gasto, es decir: aquello en lo que se realiza el gasto";
 answers[2] = choices[2][2];
 units[2] = "10";
 comments[2] = "Id Pregunta: 449. PRESUPUESTOS GENERALES";


//  Id pregunta: 782 Año de creación de pregunta: 2016
 questions[3]= "4)  La Administraci&oacute;n General del Estado act&uacute;a y se organiza de acuerdo con los principios establecidos en el art&iacute;culo 3, as&iacute; como los de:";
 choices[3]= new Array();
 choices[3][0] = "desconcentraci&oacute;n funcional y descentralizaci&oacute;n funcional y territorial";
 choices[3][1] = "descentralizaci&oacute;n territorial y desconcentraci&oacute;n funcional y territorial";
 choices[3][2] = "descentralizaci&oacute;n funcional y desconcentraci&oacute;n funcional y territorial";
 choices[3][3] = "desconcentraci&oacute;n territorial y descentralizaci&oacute;n funcional y territorial";
 answers[3] = choices[3][2];
 units[3] = "4, 7, 8, 9";
 comments[3] = "Id Pregunta: 782. Ley 40/2015";


//  Id pregunta: 286 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;Cu&aacute;l no es un pilar de la Estrategia del Mercado &Uacute;nico Digital?";
 choices[4]= new Array();
 choices[4][0] = "Mejorar el acceso de los consumidores y las empresas a los bienes y servicios digitales en toda Europa.";
 choices[4][1] = "Crear las condiciones adecuadas y garantizar la igualdad de condiciones para que las redes digitales y los servicios innovadores puedan prosperar.";
 choices[4][2] = "Iniciativa europea de libre flujo de datos.";
 choices[4][3] = "Maximizar el potencial de crecimiento de la econom&iacute;a digital.";
 answers[4] = choices[4][2];
 units[4] = "5";
 comments[4] = "Id Pregunta: 286. UNION EUROPEA";


//  Id pregunta: 554 Año de creación de pregunta: 2016
 questions[5]= "6)  &iquest;Qu&eacute; &oacute;rgano europeo ha establecido las 16 iniciativas para llevar a cabo la estrategia para el mercado &uacute;nico digital en la UE?";
 choices[5]= new Array();
 choices[5][0] = "El BCE";
 choices[5][1] = "El Parlamento";
 choices[5][2] = "El Consejo";
 choices[5][3] = "La Comisi&oacute;n";
 answers[5] = choices[5][3];
 units[5] = "17";
 comments[5] = "Id Pregunta: 554. Mercado &Uacute;nico Digital";


//  Id pregunta: 454 Año de creación de pregunta: 2016
 questions[6]= "7)  El Presupuesto por programas sirve para saber...";
 choices[6]= new Array();
 choices[6][0] = "En qu&eacute; nos gastamos el dinero";
 choices[6][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[6][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[6][3] = "Qui&eacute;n se gasta el dinero";
 answers[6] = choices[6][2];
 units[6] = "10";
 comments[6] = "Id Pregunta: 454. PRESUPUESTOS GENERALES";


//  Id pregunta: 163 Año de creación de pregunta: 2016
 questions[7]= "8)  Seg&uacute;n la Ley 25/2007 de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, constituye una infracci&oacute;n grave:";
 choices[7]= new Array();
 choices[7][0] = "No conservaci&oacute;n reiterada o sistem&aacute;tica de los datos a los que se refiere el art&iacute;culo 3";
 choices[7][1] = "No conservaci&oacute;n en ning&uacute;n momento de los datos a los que se refiere el art&iacute;culo 3.";
 choices[7][2] = "El incumplimiento de la llevanza del libro-registro";
 choices[7][3] = "La conservaci&oacute;n de los datos por un per&iacute;odo superior al establecido en el art&iacute;culo 5.";
 answers[7] = choices[7][0];
 units[7] = "19";
 comments[7] = "Id Pregunta: 163. B y C: son &quot;Muy grave&quot;; D: para que fuera verdadera deber&iacute;a ser &quot;inferior&quot;";


//  Id pregunta: 831 Año de creación de pregunta: 2016
 questions[8]= "9)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Marque la respuesta correcta.";
 choices[8]= new Array();
 choices[8][0] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo.";
 choices[8][1] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo.";
 choices[8][2] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter potestativo.";
 choices[8][3] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter oneroso.";
 answers[8] = choices[8][0];
 units[8] = "4, 7, 8, 9";
 comments[8] = "Id Pregunta: 831. Ley 40/2015";


//  Id pregunta: 290 Año de creación de pregunta: 2016
 questions[9]= "10)  El Parlamento Europeo celebrar&aacute;:";
 choices[9]= new Array();
 choices[9][0] = "Cada a&ntilde;o un per&iacute;odo de sesiones.";
 choices[9][1] = "Los per&iacute;odos de sesiones se dividen de febrero a junio y de septiembre a diciembre.";
 choices[9][2] = "Cada a&ntilde;o tres per&iacute;odos de sesiones.";
 choices[9][3] = "Las sesiones del Parlamento no se dividen en per&iacute;odos de sesiones.";
 answers[9] = choices[9][0];
 units[9] = "5";
 comments[9] = "Id Pregunta: 290. UNION EUROPEA";


//  Id pregunta: 760 Año de creación de pregunta: 2016
 questions[10]= "11)  &iquest;Cu&aacute;l de los siguientes es uno de los pilares en los que se fundamenta la Estrategia del Mercado &Uacute;nico Digital?";
 choices[10]= new Array();
 choices[10][0] = "Mejorar el acceso de los consumidores y empresas a los bienes y servicios digitales en Europa";
 choices[10][1] = "Aplicar est&aacute;ndares de calidad a los servicios digitales en Europa";
 choices[10][2] = "Apertura al exterior";
 choices[10][3] = "I+D+i como forma de mejorar los servicios digitales de las empresas europeas";
 answers[10] = choices[10][0];
 units[10] = "17";
 comments[10] = "Id Pregunta: 760. Mercado &Uacute;nico Digital";


//  Id pregunta: 534 Año de creación de pregunta: 2016
 questions[11]= "12)  Las Administraciones P&uacute;blicas podr&aacute;n habilitar:";
 choices[11]= new Array();
 choices[11][0] = "con car&aacute;cter general a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[11][1] = "con car&aacute;cter general o espec&iacute;fico a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[11][2] = "con car&aacute;cter general o espec&iacute;fico a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[11][3] = "con car&aacute;cter general a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 answers[11] = choices[11][2];
 units[11] = "7";
 comments[11] = "Id Pregunta: 534. LEY 39/2015";


//  Id pregunta: 11 Año de creación de pregunta: 2016
 questions[12]= "13)  Nada m&aacute;s arrancar el servidor de aplicaciones, usted intenta acceder a su aplicaci&oacute;n y se produce un error de memoria. En ese momento, sospecha que el error se produce porque est&aacute; utilizando unas librer&iacute;as de terceros de gran tama&ntilde;o. &iquest;Qu&eacute; tipo de error deber&iacute;a estar d&aacute;ndose para corroborar su hip&oacute;tesis?";
 choices[12]= new Array();
 choices[12][0] = "java.lang.OutOfMemoryError: Java heap space";
 choices[12][1] = "java.lang.OutOfMemoryError: PermGen space";
 choices[12][2] = "java.lang.OutOfMemoryError: Requested array size exceeds VM limit";
 choices[12][3] = "java.lang.OutOfMemoryError: request &lt;size&gt; bytes for &lt;reason&gt;. Out of swap space";
 answers[12] = choices[12][1];
 units[12] = "64";
 comments[12] = "Id Pregunta: 11. AGE A1 2015";


//  Id pregunta: 175 Año de creación de pregunta: 2016
 questions[13]= "14)  Seg&uacute;n la Constituci&oacute;n espa&ntilde;ola en su Art&iacute;culo 159, los miembros del Tribunal Constitucional ser&aacute;n designados por un per&iacute;odo de:";
 choices[13]= new Array();
 choices[13][0] = "seis a&ntilde;os y se renovar&aacute;n por terceras partes cada tres.";
 choices[13][1] = "nueve a&ntilde;os y se renovar&aacute;n por terceras partes cada tres.";
 choices[13][2] = "ocho a&ntilde;os y se renovar&aacute;n por terceras partes cada dos.";
 choices[13][3] = "cuatro a&ntilde;os y se renovar&aacute;n por terceras partes cada dos.";
 answers[13] = choices[13][1];
 units[13] = "1";
 comments[13] = "Id Pregunta: 175. CONSTITUCION1978";


//  Id pregunta: 265 Año de creación de pregunta: 2016
 questions[14]= "15)  &iquest;Qui&eacute;n debe refrendar el nombramiento del Presidente del Consejo General del Poder Judicial?:";
 choices[14]= new Array();
 choices[14][0] = "El Presidente del Senado";
 choices[14][1] = "No es un acto Real, por tanto no conlleva refrendo";
 choices[14][2] = "El Presidente del Gobierno";
 choices[14][3] = "El Presidente de las Cortes Generales";
 answers[14] = choices[14][2];
 units[14] = "1";
 comments[14] = "Id Pregunta: 265. CONSTITUCION1978";


//  Id pregunta: 625 Año de creación de pregunta: 2016
 questions[15]= "16)  En UML &iquest;qu&eacute; es una m&aacute;quina de estados?";
 choices[15]= new Array();
 choices[15][0] = "Es un modelo computacional representado por grafos, en los que los estados son los v&eacute;rtices.";
 choices[15][1] = "Es un dispositivo que puede ser programado para cumplir determinadas tareas de control en sistema autom&aacute;ticos.";
 choices[15][2] = "Es un comportamiento que especifica las secuencias de estados por las que pasa un objeto a lo largo de su vida en respuesta a eventos, junto con sus respuestas a esos eventos.";
 choices[15][3] = "Es un sistema l&oacute;gico que posee una entrada, un procesador intermedio y una salida resultado de la aplicaci&oacute;n del procesamiento sobre la entrada.";
 answers[15] = choices[15][2];
 units[15] = "89";
 comments[15] = "Id Pregunta: 625. Junta de Extremadura A1 2015";


//  Id pregunta: 790 Año de creación de pregunta: 2016
 questions[16]= "17)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado los Subdelegados del Gobierno en las provincias los cuales tendr&aacute;n nivel de:";
 choices[16]= new Array();
 choices[16][0] = "Subsecretario";
 choices[16][1] = "Subdirector general";
 choices[16][2] = "Secretario de Estado";
 choices[16][3] = "ninguna es correcta";
 answers[16] = choices[16][1];
 units[16] = "4, 7, 8, 9";
 comments[16] = "Id Pregunta: 790. Ley 40/2015";


//  Id pregunta: 687 Año de creación de pregunta: 2016
 questions[17]= "18)  Indique cu&aacute;l de los siguientes no es uno de los requisitos que debe cumplir una firma electr&oacute;nica avanzada seg&uacute;n el Reglamento (UE) 910/2014";
 choices[17]= new Array();
 choices[17][0] = "Estar vinculada al firmante de manera &uacute;nica";
 choices[17][1] = "Haber sido creada utilizando un dispositivo avanzado de creacio&#769;n de firmas electro&#769;nicas";
 choices[17][2] = "Haber sido creada utilizando datos de creaci&oacute;n de firma que el firmante puede utilizar, con un alto nivel de confianza, bajo su exclusivo control";
 choices[17][3] = "Estar vinculada con los datos firmados, de modo tal que cualquier modificacio&#769;n ulterior de los mismos sea detectable";
 answers[17] = choices[17][1];
 units[17] = "77";
 comments[17] = "Id Pregunta: 687. Art&iacute;culo 26 del Reglamento 910/2014";


//  Id pregunta: 853 Año de creación de pregunta: 2016
 questions[18]= "19)  Indique cu&aacute;l de las siguientes funciones relativas a una PKI es INCORRECTA:";
 choices[18]= new Array();
 choices[18][0] = "Garantiza mediante el uso de certificados digitales el no repudio, integridad, autenticaci&oacute;n y la publicaci&oacute;n de los datos transmitidos.";
 choices[18][1] = "Los componentes de una PKI para la administraci&oacute;n de los ccertificados son: software, hardware, personas, pol&iacute;ticas, procedimientos.";
 choices[18][2] = "Entre las funciones de una PKI se encuentra la revocaci&oacute;n de claves.";
 choices[18][3] = "Entre las funciones de una PKI se encuentran la generaci&oacute;n, recuperaci&oacute;n y renovaci&oacute;n de claves.";
 answers[18] = choices[18][0];
 units[18] = "76";
 comments[18] = "Id Pregunta: 853. Xunta de Galicia 2015";


//  Id pregunta: 796 Año de creación de pregunta: 2016
 questions[19]= "20)  Sin perjuicio de lo previsto en la Ley 3/2015, de 30 de marzo, reguladora del ejercicio del alto cargo de la Administraci&oacute;n General del Estado, los titulares de los &oacute;rganos superiores y directivos son nombrados, atendiendo a criterios de competencia profesional y experiencia, en la forma establecida en esta Ley, siendo de aplicaci&oacute;n al desempe&ntilde;o de sus funciones:";
 choices[19]= new Array();
 choices[19][0] = "la responsabilidad profesional, personal y directa por la gesti&oacute;n desarrollada";
 choices[19][1] = "la sujeci&oacute;n al control y evaluaci&oacute;n de la gesti&oacute;n por el &oacute;rgano superior o directivo competente, sin perjuicio del control establecido por la Ley General Presupuestaria";
 choices[19][2] = "a y b son correctas";
 choices[19][3] = "a y b son incorrectas";
 answers[19] = choices[19][2];
 units[19] = "4, 7, 8, 9";
 comments[19] = "Id Pregunta: 796. Ley 40/2015";


//  Id pregunta: 754 Año de creación de pregunta: 2016
 questions[20]= "21)  &iquest;Cu&aacute;l de los siguientes no es un eje del Plan de Servicios P&uacute;blicos Digitales que forma parte de la Agenda Digital para Espa&ntilde;a?";
 choices[20]= new Array();
 choices[20][0] = "Programa de Educaci&oacute;n Digital";
 choices[20][1] = "Programa de Salud y Bienestar Social";
 choices[20][2] = "Programa de Administraci&oacute;n de Justicia Digital";
 choices[20][3] = "Programa de capacitaci&oacute;n de profesionales TIC";
 answers[20] = choices[20][3];
 units[20] = "19";
 comments[20] = "Id Pregunta: 754. Agenda Digital para Espa&ntilde;a";


//  Id pregunta: 377 Año de creación de pregunta: 2016
 questions[21]= "22)  Es un elemento caracter&iacute;stico de la naturaleza jur&iacute;dica de la Uni&oacute;n Europea:";
 choices[21]= new Array();
 choices[21][0] = "Tener una estructura institucional.";
 choices[21][1] = "El establecimiento de un Ordenamiento jur&iacute;dico propio.";
 choices[21][2] = "La transferencia de competencias a las instituciones comunitarias.";
 choices[21][3] = "Todas las respuestas son correctas.";
 answers[21] = choices[21][3];
 units[21] = "5";
 comments[21] = "Id Pregunta: 377. UNION EUROPEA";


//  Id pregunta: 126 Año de creación de pregunta: 2016
 questions[22]= "23)  Se&ntilde;ale la respuesta FALSA respecto a la solicitud de acceso a la informaci&oacute;n p&uacute;blica seg&uacute;n la ley 19/2013";
 choices[22]= new Array();
 choices[22][0] = "Transcurrido el plazo m&aacute;ximo para resolver sin que se haya dictado y notificado resoluci&oacute;n expresa se entender&aacute; que la solicitud ha sido desestimada.";
 choices[22][1] = "Las resoluciones dictadas en materia de acceso a la informaci&oacute;n p&uacute;blica son recurribles directamente ante la Jurisdicci&oacute;n Contencioso-administrativa, sin perjuicio de la posibilidad de interposici&oacute;n de la reclamaci&oacute;n potestativa prevista en el art&iacute;culo 24.";
 choices[22][2] = "El incumplimiento reiterado de la obligaci&oacute;n de resolver en plazo tendr&aacute; la consideraci&oacute;n de infracci&oacute;n grave a los efectos de la aplicaci&oacute;n a sus responsables del r&eacute;gimen disciplinario previsto en la correspondiente normativa reguladora.";
 choices[22][3] = "La resoluci&oacute;n en la que se conceda o deniegue el acceso a deber&aacute; notificarse al solicitante y a los terceros afectados que as&iacute; lo hayan solicitado en el plazo m&aacute;ximo de 15 d&iacute;as desde la recepci&oacute;n de la solicitud por el &oacute;rgano competente para resolver.";
 answers[22] = choices[22][3];
 units[22] = "22";
 comments[22] = "Id Pregunta: 126. ";


//  Id pregunta: 531 Año de creación de pregunta: 2016
 questions[23]= "24)  Se entender&aacute; acreditada la representaci&oacute;n realizada:";
 choices[23]= new Array();
 choices[23][0] = "mediante apoderamiento apud acta efectuado por comparecencia personal";
 choices[23][1] = "mediante apoderamiento apud acta efectuado por comparecencia electr&oacute;nica en la correspondiente sede electr&oacute;nica";
 choices[23][2] = "a trav&eacute;s de la acreditaci&oacute;n de su inscripci&oacute;n en el registro electr&oacute;nico de apoderamientos de la Administraci&oacute;n P&uacute;blica competente";
 choices[23][3] = "todas son correctas";
 answers[23] = choices[23][3];
 units[23] = "7";
 comments[23] = "Id Pregunta: 531. LEY 39/2015";


//  Id pregunta: 360 Año de creación de pregunta: 2016
 questions[24]= "25)  El Parlamento Europeo est&aacute; compuesto actualmente por:";
 choices[24]= new Array();
 choices[24][0] = "786 Diputados como m&aacute;ximo.";
 choices[24][1] = "600 Diputados como m&aacute;ximo.";
 choices[24][2] = "650 Diputados como m&aacute;ximo.";
 choices[24][3] = "732 Diputados como m&aacute;ximo.";
 answers[24] = choices[24][0];
 units[24] = "5";
 comments[24] = "Id Pregunta: 360. UNION EUROPEA";


//  Id pregunta: 559 Año de creación de pregunta: 2016
 questions[25]= "26)  Uno de los objetivos de la Agenda Digital para Espa&ntilde;a es desarrollar la econom&iacute;a digital, &iquest;qu&eacute; actuaciones se deben desarrollar para lograr esto?";
 choices[25]= new Array();
 choices[25][0] = "Impulsar la producci&oacute;n y distribuci&oacute;n a trav&eacute;s de Internet de contenidos digitales";
 choices[25][1] = "Favorecer la internacionalizaci&oacute;n de las empresas tecnol&oacute;gicas";
 choices[25][2] = "Incentivar el uso transformador de las TIC en nuestras empresas";
 choices[25][3] = "Todos los anteriores";
 answers[25] = choices[25][3];
 units[25] = "19";
 comments[25] = "Id Pregunta: 559. Agenda Digital";


//  Id pregunta: 334 Año de creación de pregunta: 2016
 questions[26]= "27)  En el &aacute;mbito de la Uni&oacute;n Europea, las recomendaciones son:";
 choices[26]= new Array();
 choices[26][0] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[26][1] = "Ninguna de las respuestas es correcta.";
 choices[26][2] = "Sugerencias de los Estados miembros a las Instituciones comunitarias para que act&uacute;en en un determinado sentido en relaci&oacute;n con materias concretas.";
 choices[26][3] = "Sugerencias de las Instituciones comunitarias a los Estados miembros para que act&uacute;en en un determinado sentido en relaci&oacute;n con materia econ&oacute;mica, exclusivamente.";
 answers[26] = choices[26][0];
 units[26] = "5";
 comments[26] = "Id Pregunta: 334. UNION EUROPEA";


//  Id pregunta: 632 Año de creación de pregunta: 2016
 questions[27]= "28)  El sistema operativo que se dise&ntilde;a pensando en los tipos de datos y recursos que va a manejar: ficheros, procesos, memoria, hardware, etc., y en las propiedades y servicios que &eacute;stos pueden prestar, se construye siguiendo un modelo:";
 choices[27]= new Array();
 choices[27][0] = "Monol&iacute;tico.";
 choices[27][1] = "Estratificado.";
 choices[27][2] = "Cliente/servidor.";
 choices[27][3] = "Orientado a objetos.";
 answers[27] = choices[27][3];
 units[27] = "56";
 comments[27] = "Id Pregunta: 632. Junta de Extremadura A1 2015";


//  Id pregunta: 817 Año de creación de pregunta: 2016
 questions[28]= "29)  Los servicios territoriales de la Administraci&oacute;n General del Estado en la Comunidad Aut&oacute;noma se organizar&aacute;n atendiendo al mejor cumplimiento de sus fines, en:";
 choices[28]= new Array();
 choices[28][0] = "servicios integrados en las Delegaciones del Gobierno";
 choices[28][1] = "servicios no integrados en las Delegaciones del Gobierno";
 choices[28][2] = "servicios integrados y no integrados en las Delegaciones del Gobierno";
 choices[28][3] = "ninguna es correcta";
 answers[28] = choices[28][2];
 units[28] = "4, 7, 8, 9";
 comments[28] = "Id Pregunta: 817. Ley 40/2015";


//  Id pregunta: 788 Año de creación de pregunta: 2016
 questions[29]= "30)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado son &oacute;rganos directivos:";
 choices[29]= new Array();
 choices[29][0] = "los Delegados del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[29][1] = "los Subdelegados del Gobierno en las provincias";
 choices[29][2] = "los Subdelegados del Gobierno en las entidades locales";
 choices[29][3] = "a y b son correctas";
 answers[29] = choices[29][3];
 units[29] = "4, 7, 8, 9";
 comments[29] = "Id Pregunta: 788. Ley 40/2015";


//  Id pregunta: 792 Año de creación de pregunta: 2016
 questions[30]= "31)  Tienen la condici&oacute;n de alto cargo:";
 choices[30]= new Array();
 choices[30][0] = "los &oacute;rganos superiores";
 choices[30][1] = "los &oacute;rganos superiores y directivos";
 choices[30][2] = "los &oacute;rganos superiores y directivos, excepto los Subdirectores generales y asimilados";
 choices[30][3] = "los &oacute;rganos superiores y directivos, excepto los Secretarios generales y asimilados";
 answers[30] = choices[30][2];
 units[30] = "4, 7, 8, 9";
 comments[30] = "Id Pregunta: 792. Ley 40/2015";


//  Id pregunta: 488 Año de creación de pregunta: 2016
 questions[31]= "32)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, autorizar las transferencias entre distintas secciones presupuestarias como consecuencia de reorganizaciones administrativas, es una competencia de:";
 choices[31]= new Array();
 choices[31][0] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[31][1] = "El Gobierno.";
 choices[31][2] = "El Presidente del Gobierno.";
 choices[31][3] = "El Consejo de Ministros.";
 answers[31] = choices[31][1];
 units[31] = "10";
 comments[31] = "Id Pregunta: 488. PRESUPUESTOS GENERALES";


//  Id pregunta: 151 Año de creación de pregunta: 2016
 questions[32]= "33)  Seg&uacute;n la ley 39/2015, est&aacute;n obligados a relacionarse a trav&eacute;s de medios electr&oacute;nicos con las Administraciones P&uacute;blicas para la realizaci&oacute;n de cualquier tr&aacute;mite de un procedimiento administrativo: (se&ntilde;ala la respuesta incorrecta)";
 choices[32]= new Array();
 choices[32][0] = "las personas jur&iacute;dicas ";
 choices[32][1] = "las entidades con personalidad jur&iacute;dica";
 choices[32][2] = "los empleados de las Administraciones P&uacute;blicas para los tr&aacute;mites y actuaciones que realicen con ellas por raz&oacute;n de su condici&oacute;n de empleado p&uacute;blico";
 choices[32][3] = "quienes representen a un interesado que est&eacute; obligado legalmente a relacionarse electr&oacute;nicamente con la Administraci&oacute;n";
 answers[32] = choices[32][1];
 units[32] = "7";
 comments[32] = "Id Pregunta: 151. Ley 39/2015, Art&iacute;culo 14";


//  Id pregunta: 205 Año de creación de pregunta: 2016
 questions[33]= "34)  De acuerdo con la regulaci&oacute;n de la Constitucional de las Comunidades Aut&oacute;nomas, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[33]= new Array();
 choices[33][0] = "La federaci&oacute;n de Comunidades Aut&oacute;nomas exige aprobaci&oacute;n mediante ley org&aacute;nica.";
 choices[33][1] = "Los Estatutos de Autonom&iacute;a deben contener la delimitaci&oacute;n del territorio de la Comunidad Aut&oacute;noma.";
 choices[33][2] = "La reforma de los Estatutos se aprobar&aacute; por las Cortes Generales mediante ley ordinaria.";
 choices[33][3] = "El Estado tiene competencia exclusiva sobre agricultura y ganader&iacute;a.";
 answers[33] = choices[33][1];
 units[33] = "1";
 comments[33] = "Id Pregunta: 205. CONSTITUCION1978";


//  Id pregunta: 357 Año de creación de pregunta: 2016
 questions[34]= "35)  &iquest;Qu&eacute; instituciones comparten las tareas legislativas en la Comunidad Europea?:";
 choices[34]= new Array();
 choices[34][0] = "El Parlamento y el Consejo.";
 choices[34][1] = "El Parlamento, la Comisi&oacute;n y el Consejo.";
 choices[34][2] = "El Parlamento y la Comisi&oacute;n.";
 choices[34][3] = "La Comisi&oacute;n y el Consejo.";
 answers[34] = choices[34][1];
 units[34] = "5";
 comments[34] = "Id Pregunta: 357. UNION EUROPEA";


//  Id pregunta: 176 Año de creación de pregunta: 2016
 questions[35]= "36)  Seg&uacute;n el Art&iacute;culo 115 de la Constituci&oacute;n Espa&ntilde;ola, el Presidente del Gobierno, previa deliberaci&oacute;n del Consejo de Ministros, y bajo su responsabilidad, podr&aacute; proponer la disoluci&oacute;n de:";
 choices[35]= new Array();
 choices[35][0] = "El Congreso, el senado o las Cortes Generales.";
 choices[35][1] = "Solamente el Congreso.";
 choices[35][2] = "El Congreso, pero s&oacute;lo mediante la tramitaci&oacute;n de una moci&oacute;n de censura.";
 choices[35][3] = "El Congreso y el Senado, mediante Refer&eacute;ndum.";
 answers[35] = choices[35][0];
 units[35] = "1";
 comments[35] = "Id Pregunta: 176. CONSTITUCION1978";


//  Id pregunta: 212 Año de creación de pregunta: 2016
 questions[36]= "37)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n con la regulaci&oacute;n constitucional de la composici&oacute;n del Senado:";
 choices[36]= new Array();
 choices[36][0] = "La poblaci&oacute;n de Melilla elegir&aacute; dos Senadores.";
 choices[36][1] = "En cada provincia se elegir&aacute;n tres senadores.";
 choices[36][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas elegir&aacute;n un senador cuando su poblaci&oacute;n supere el mill&oacute;n de habitantes.";
 choices[36][3] = "El Senado se compone de 350 senadores.";
 answers[36] = choices[36][0];
 units[36] = "1";
 comments[36] = "Id Pregunta: 212. CONSTITUCION1978";


//  Id pregunta: 232 Año de creación de pregunta: 2016
 questions[37]= "38)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos, de conformidad con la Constituci&oacute;n Espa&ntilde;ola, no tiene legitimidad para interponer el recurso de inconstitucionalidad?";
 choices[37]= new Array();
 choices[37][0] = "El Presidente del Senado.";
 choices[37][1] = "El Defensor del Pueblo.";
 choices[37][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[37][3] = "El Presidente del Gobierno.";
 answers[37] = choices[37][2];
 units[37] = "1";
 comments[37] = "Id Pregunta: 232. CONSTITUCION1978";


//  Id pregunta: 597 Año de creación de pregunta: 2016
 questions[38]= "39)  La pol&iacute;tica de seguridad de alto nivel de la Organizaci&oacute;n:";
 choices[38]= new Array();
 choices[38][0] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer, sin entrar en detalles acerca del COMO.";
 choices[38][1] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer y COMO se debe implementar.";
 choices[38][2] = "Debe describir QUE se intenta proteger, POR QUE se debe hacer, COMO se debe implementar y CUANDO hay que implementar los mecanismos de seguridad.";
 choices[38][3] = "Debe describir QUE se intenta proteger, COMO se debe implementar y CUANDO hay que implementar los mecanismos de seguridad.";
 answers[38] = choices[38][0];
 units[38] = "45";
 comments[38] = "Id Pregunta: 597. Junta de Extremadura A1 2015";


//  Id pregunta: 494 Año de creación de pregunta: 2016
 questions[39]= "40)  Seg&uacute;n la Ley General Presupuestaria, con car&aacute;cter excepcional podr&aacute;n generar cr&eacute;dito en el Presupuesto del ejercicio los ingresos realizados:";
 choices[39]= new Array();
 choices[39][0] = "Por reembolso de pr&eacute;stamos.";
 choices[39][1] = "Por la venta de bienes.";
 choices[39][2] = "En el &uacute;ltimo trimestre del ejercicio anterior.";
 choices[39][3] = "Por prestaci&oacute;n de servicios.";
 answers[39] = choices[39][2];
 units[39] = "10";
 comments[39] = "Id Pregunta: 494. PRESUPUESTOS GENERALES";


//  Id pregunta: 497 Año de creación de pregunta: 2016
 questions[40]= "41)  Las Obligaciones de la Hacienda P&uacute;blica Estatal se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[40]= new Array();
 choices[40][0] = "T&iacute;tulo II, Cap&iacute;tulo I, Secci&oacute;n 1.";
 choices[40][1] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[40][2] = "T&iacute;tulo I, Cap&iacute;tulo I, Secci&oacute;n 4.";
 choices[40][3] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[40] = choices[40][3];
 units[40] = "10";
 comments[40] = "Id Pregunta: 497. PRESUPUESTOS GENERALES";


//  Id pregunta: 306 Año de creación de pregunta: 2016
 questions[41]= "42)  Componen la Comisi&oacute;n Europea:";
 choices[41]= new Array();
 choices[41][0] = "Un Comisario por cada Estado miembro.";
 choices[41][1] = "Uno o dos Comisarios por cada Estado miembro, dependiendo de las caracter&iacute;sticas del Estado.";
 choices[41][2] = "Dos Comisarios por cada Estado miembro.";
 choices[41][3] = "Los Ministros de Asuntos Exteriores de cada Estado miembro.";
 answers[41] = choices[41][0];
 units[41] = "5";
 comments[41] = "Id Pregunta: 306. UNION EUROPEA";


//  Id pregunta: 170 Año de creación de pregunta: 2016
 questions[42]= "43)  En el contexto del mercado &uacute;nico digital, &iquest;qu&eacute; medidas se han tomado para el impulso de la confianza en el tratamiento de los datos personales en el contexto de los servicios digitales en el a&ntilde;o 2016?";
 choices[42]= new Array();
 choices[42][0] = "Se ha establecido una colaboraci&oacute;n p&uacute;blico-privada en materia de ciberseguridad.";
 choices[42][1] = "Se han introducido medidas para impulsar las destrezas digitales de la poblaci&oacute;n, que la Comisi&oacute;n incorporar&aacute; en futuras iniciativas sobre destrezas y formaci&oacute;n.";
 choices[42][2] = "Se ha aprobado el Reglamento (UE) 2016/769 relativo a la protecci&oacute;n de las personas f&iacute;sicas en lo que respecta al tratamiento de datos personales y a la libre circulaci&oacute;n de estos datos y por el que se deroga la Directiva 95/46/CE";
 choices[42][3] = "Se han introducido medidas para garantizar la libertad de los medios de comunicaci&oacute;n y la promoci&oacute;n de la diversidad cultural";
 answers[42] = choices[42][2];
 units[42] = "19";
 comments[42] = "Id Pregunta: 170. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2016/Mayo/Noticia-2016-05-09-Nuevo-Reglamento-LOPD.html#.WCnlfmrhDIU";


//  Id pregunta: 644 Año de creación de pregunta: 2016
 questions[43]= "44)  El Estatuto B&aacute;sico del empleado p&uacute;blico determina como clases de personal los siguientes:";
 choices[43]= new Array();
 choices[43][0] = "Funcionarios de carrera, personal laboral, ya sea fijo, por tiempo indefinido o temporal y personal eventual.";
 choices[43][1] = "Funcionarios de carrera, funcionarios interinos, personal laboral, ya sea fijo, por tiempo indefinido o temporal.";
 choices[43][2] = "Funcionarios e interinos.";
 choices[43][3] = "Funcionarios de carrera, funcionarios interinos, personal laboral, ya sea fijo, por tiempo indefinido o temporal y personal eventual.";
 answers[43] = choices[43][3];
 units[43] = "20";
 comments[43] = "Id Pregunta: 644. Junta de Extremadura A1 2015";


//  Id pregunta: 758 Año de creación de pregunta: 2016
 questions[44]= "45)  &iquest;Cu&aacute;l de las siguientes no es una iniciativa propuesta por la Estrategia Europa 2020?";
 choices[44]= new Array();
 choices[44][0] = "Agenda digital para Europa";
 choices[44][1] = "Agenda de nuevas cualificaciones y empleos";
 choices[44][2] = "Juventud en movimiento";
 choices[44][3] = "Agenda Web 2.0";
 answers[44] = choices[44][3];
 units[44] = "19";
 comments[44] = "Id Pregunta: 758. Europa 2020";


//  Id pregunta: 849 Año de creación de pregunta: 2016
 questions[45]= "46)  &iquest;Qu&eacute; m&eacute;todo de replicaci&oacute;n remota entre sistemas de almacenamiento se ve m&aacute;s afectada por la latencia en el caso de largas distancias?";
 choices[45]= new Array();
 choices[45][0] = "As&iacute;ncrona.";
 choices[45][1] = "Log-shipping.";
 choices[45][2] = "Disk buffering.";
 choices[45][3] = "S&iacute;ncrona.";
 answers[45] = choices[45][3];
 units[45] = "53";
 comments[45] = "Id Pregunta: 849. Xunta de Galicia 2015";


//  Id pregunta: 113 Año de creación de pregunta: 2016
 questions[46]= "47)  &iquest;Cu&aacute;l de las siguientes instituciones NO proporciona estad&iacute;sticas oficiales propias sobre el mercado de trabajo en Espa&ntilde;a?";
 choices[46]= new Array();
 choices[46][0] = "La Seguridad Social";
 choices[46][1] = "El Instituto Nacional de Estad&iacute;stica";
 choices[46][2] = "El Servicio de Empleo P&uacute;blico Estatal";
 choices[46][3] = "El Banco de Espa&ntilde;a";
 answers[46] = choices[46][3];
 units[46] = "15";
 comments[46] = "Id Pregunta: 113. ";


//  Id pregunta: 123 Año de creación de pregunta: 2016
 questions[47]= "48)  Seg&uacute;n el  Estatuto del Consejo de Transparencia y Buen Gobierno, &iquest;cu&aacute;l NO es un vocal de la Comisi&oacute;n de Transparencia y Buen Gobierno?";
 choices[47]= new Array();
 choices[47][0] = "Un representante de la Administraci&oacute;n local.";
 choices[47][1] = "Un representante del Tribunal de Cuentas.";
 choices[47][2] = "Un representante del Defensor del Pueblo.";
 choices[47][3] = "Un representante de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 answers[47] = choices[47][0];
 units[47] = "22";
 comments[47] = "Id Pregunta: 123. ";


//  Id pregunta: 276 Año de creación de pregunta: 2016
 questions[48]= "49)  Se&ntilde;ale la respuesta falsa";
 choices[48]= new Array();
 choices[48][0] = "El Portal de la Transparencia del Gobierno de Espa&ntilde;a es una subsede de la sede electr&oacute;nica central del Ministerio de la Presidencia.";
 choices[48][1] = "La titularidad de esta subsede corresponde a la Oficina de la Transparencia y Acceso a la Informaci&oacute;n (OTAI), dependiente de la Oficina para la Ejecuci&oacute;n de la Reforma de la Administraci&oacute;n P&uacute;blica (OPERA).";
 choices[48][2] = "La gesti&oacute;n de la plataforma tecnol&oacute;gica es competencia de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones (DTIC), en virtud del Acuerdo de Colaboraci&oacute;n firmado por el Ministerio de la Presidencia y el Ministerio de Hacienda y Administraciones P&uacute;blicas, para el desarrollo del Portal de la Transparencia.";
 choices[48][3] = "La DTIC ser&aacute; responsable de la integridad y disponibilidad de la informaci&oacute;n, que se provea al Portal de la Transparencia a trav&eacute;s de enlaces o v&iacute;nculos a otras p&aacute;ginas o sedes electr&oacute;nicas cuya responsabilidad corresponda a distinto &oacute;rgano o Administraci&oacute;n P&uacute;blica.";
 answers[48] = choices[48][3];
 units[48] = "22";
 comments[48] = "Id Pregunta: 276. LEY DE TRANSPARENCIA";


//  Id pregunta: 424 Año de creación de pregunta: 2016
 questions[49]= "50)  Entre otros criterios de actuaci&oacute;n de las administraciones p&uacute;blicas para la consecuci&oacute;n del principio de igualdad, se encuentra:";
 choices[49]= new Array();
 choices[49][0] = "Evaluar peri&oacute;dicamente la efectividad del principio de igualdad.";
 choices[49][1] = "Penalizar a las empresas que no cumplan con los planes de igualdad.";
 choices[49][2] = "Ninguna es correcta.";
 choices[49][3] = "A y B son correctas.";
 answers[49] = choices[49][0];
 units[49] = "14";
 comments[49] = "Id Pregunta: 424. POLITICAS DE IGUALDAD";


//  Id pregunta: 821 Año de creación de pregunta: 2016
 questions[50]= "51)  En las Comunidades Aut&oacute;nomas uniprovinciales en las que no exista Subdelegado la suplencia corresponder&aacute; a:";
 choices[50]= new Array();
 choices[50][0] = "el Secretario General";
 choices[50][1] = "el Subdirector General";
 choices[50][2] = "el Secretario de Estado";
 choices[50][3] = "ninguna es correcta";
 answers[50] = choices[50][0];
 units[50] = "4, 7, 8, 9";
 comments[50] = "Id Pregunta: 821. Ley 40/2015";


//  Id pregunta: 392 Año de creación de pregunta: 2016
 questions[51]= "52)  Seg&uacute;n se establece en la Ley Org&aacute;nica 3/2007, de 22 de marzo, para la igualdad efectiva de mujeres y hombres, todo trato desfavorable a las mujeres relacionado con el embarazo o maternidad, constituye discriminaci&oacute;n por raz&oacute;n de sexo del tipo:";
 choices[51]= new Array();
 choices[51][0] = "Indirecta.";
 choices[51][1] = "Directa.";
 choices[51][2] = "Directa, si concurre violencia f&iacute;sica, e indirecta en el resto de casos.";
 choices[51][3] = "Directa o indirecta, seg&uacute;n decisi&oacute;n judicial, considerando las circunstancias que concurran.";
 answers[51] = choices[51][1];
 units[51] = "14";
 comments[51] = "Id Pregunta: 392. POLITICAS DE IGUALDAD";


//  Id pregunta: 221 Año de creación de pregunta: 2016
 questions[52]= "53)  &iquest;C&oacute;mo se denomina el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola?:";
 choices[52]= new Array();
 choices[52][0] = "De los derechos y deberes fundamentales.";
 choices[52][1] = "De los espa&ntilde;oles y los extranjeros.";
 choices[52][2] = "Derechos y libertades.";
 choices[52][3] = "De la Corona.";
 answers[52] = choices[52][0];
 units[52] = "1";
 comments[52] = "Id Pregunta: 221. CONSTITUCION1978";


//  Id pregunta: 13 Año de creación de pregunta: 2016
 questions[53]= "54)  JNDI se usa para el acceso a:";
 choices[53]= new Array();
 choices[53][0] = "Datos de ficheros";
 choices[53][1] = "Sistemas gestores de bases de datos";
 choices[53][2] = "Directorios de nombres";
 choices[53][3] = "Colas de mensajer&iacute;a";
 answers[53] = choices[53][2];
 units[53] = "64";
 comments[53] = "Id Pregunta: 13. AGE A1 2015";


//  Id pregunta: 251 Año de creación de pregunta: 2016
 questions[54]= "55)  La Justicia, en Espa&ntilde;a, emana del/de la:";
 choices[54]= new Array();
 choices[54][0] = "Rey.";
 choices[54][1] = "&Oacute;rgano jurisdiccional que act&uacute;a en cada caso.";
 choices[54][2] = "Constituci&oacute;n.";
 choices[54][3] = "Pueblo.";
 answers[54] = choices[54][2];
 units[54] = "1";
 comments[54] = "Id Pregunta: 251. CONSTITUCION1978";


//  Id pregunta: 107 Año de creación de pregunta: 2016
 questions[55]= "56)  Son bases de datos NoSQL orientadas a objetos:";
 choices[55]= new Array();
 choices[55][0] = "GemStone";
 choices[55][1] = "Zope Object DB";
 choices[55][2] = "Las dos anteriores";
 choices[55][3] = "Solo B)";
 answers[55] = choices[55][2];
 units[55] = "73";
 comments[55] = "Id Pregunta: 107. ";


//  Id pregunta: 670 Año de creación de pregunta: 2016
 questions[56]= "57)  Respecto a la ejecuci&oacute;n de la resoluci&oacute;n de un procedimiento administrativo, se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[56]= new Array();
 choices[56][0] = "Las Administraciones P&uacute;blicas no iniciar&aacute;n la ejecuci&oacute;n hasta que se haya dictado resoluci&oacute;n.";
 choices[56][1] = "De una resoluci&oacute;n administrativa nunca puede derivarse una multa.";
 choices[56][2] = "La ejecuci&oacute;n forzosa de una resoluci&oacute;n puede afectar al patrimonio.";
 choices[56][3] = "Contra algunas resoluciones es posible interponer recursos por v&iacute;a administrativa.";
 answers[56] = choices[56][1];
 units[56] = "7";
 comments[56] = "Id Pregunta: 670. Cap&iacute;tulo VII, T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 415 Año de creación de pregunta: 2016
 questions[57]= "58)  En los estudios, estad&iacute;sticas, encuestas y recogidas de datos se incluir&aacute; sistem&aacute;ticamente:";
 choices[57]= new Array();
 choices[57][0] = "Un informe de g&eacute;nero.";
 choices[57][1] = "La variable de sexo.";
 choices[57][2] = "La variable de edad.";
 choices[57][3] = "La variable de comportamiento.";
 answers[57] = choices[57][1];
 units[57] = "14";
 comments[57] = "Id Pregunta: 415. POLITICAS DE IGUALDAD";


//  Id pregunta: 24 Año de creación de pregunta: 2016
 questions[58]= "59)  De acuerdo con la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, una de las funciones de la Comisi&oacute;n Nacional de los Mercados y la Competencia es:";
 choices[58]= new Array();
 choices[58][0] = "Gestionar en per&iacute;odo voluntario las tasas en materia de telecomunicaciones a que se refiere la presente Ley.";
 choices[58][1] = "Proponer al Gobierno la pol&iacute;tica a seguir para facilitar el desarrollo y la evoluci&oacute;n de las obligaciones de servicio p&uacute;blico.";
 choices[58][2] = "Gestionar el Registro de Operadores.";
 choices[58][3] = "Establecer el procedimiento para cuantificar los beneficios no monetarios obtenidos por los operadores encargados de la prestaci&oacute;n del servicio universal.";
 answers[58] = choices[58][3];
 units[58] = "121";
 comments[58] = "Id Pregunta: 24. AGE A1 2015";


//  Id pregunta: 44 Año de creación de pregunta: 2016
 questions[59]= "60)  &iquest;Cu&aacute;les son las propiedades que debe cumplir una unidad l&oacute;gica de trabajo para ser calificada como transacci&oacute;n?";
 choices[59]= new Array();
 choices[59][0] = "Atomicidad, concurrencia, aislamiento y temporalidad";
 choices[59][1] = "Atomicidad, consistencia, aislamiento y durabilidad";
 choices[59][2] = "Atomicidad, concurrencia, escalabilidad y durabilidad";
 choices[59][3] = "Atomicidad, consistencia, aislamiento y temporalidad";
 answers[59] = choices[59][1];
 units[59] = "60";
 comments[59] = "Id Pregunta: 44. AGE A1 2015";


//  Id pregunta: 646 Año de creación de pregunta: 2016
 questions[60]= "61)  En Itil v3 se diferencia entre la Gesti&oacute;n de la Cartera de Servicios y la Gesti&oacute;n del Cat&aacute;logo de Servicios ya que:";
 choices[60]= new Array();
 choices[60][0] = "La Cartera de Servicios contiene informaci&oacute;n sobre cada servicio y su estado.";
 choices[60][1] = "La Cartera de Servicios es un subconjunto del Cat&aacute;logo de Servicios.";
 choices[60][2] = "La Cartera de Servicios divide los servicios en componentes y contiene pol&iacute;ticas, directrices y responsabilidades , as&iacute; como precios, acuerdos de nivel de servicio y condiciones de entrega.";
 choices[60][3] = "Todas las respuestas son correctas.";
 answers[60] = choices[60][0];
 units[60] = "101";
 comments[60] = "Id Pregunta: 646. Junta de Extremadura A1 2015";


//  Id pregunta: 362 Año de creación de pregunta: 2016
 questions[61]= "62)  En el marco de la Uni&oacute;n Europea, las decisiones:";
 choices[61]= new Array();
 choices[61][0] = "Son actos normativos.";
 choices[61][1] = "Poseen alcance general.";
 choices[61][2] = "No son obligatorias.";
 choices[61][3] = "Son actos individuales no normativos.";
 answers[61] = choices[61][3];
 units[61] = "5";
 comments[61] = "Id Pregunta: 362. UNION EUROPEA";


//  Id pregunta: 631 Año de creación de pregunta: 2016
 questions[62]= "63)  La segmentaci&oacute;n es un esquema de asignaci&oacute;n de memoria que:";
 choices[62]= new Array();
 choices[62][0] = "Divide la memoria f&iacute;sica disponible en un n&uacute;mero fijo de particiones cuyo tama&ntilde;o tambi&eacute;n es fijo.";
 choices[62][1] = "Divide la memoria f&iacute;sica disponible en particiones cuyo n&uacute;mero y tama&ntilde;o var&iacute;a para adaptarse a las exigencias los procesos.";
 choices[62][2] = "Divide el espacio de direcciones de cada proceso en bloques que puedan ser situados en &aacute;reas de memoria no contiguas.";
 choices[62][3] = "Divide la memoria en dos particiones: una para el sistema operativo y otra para el proceso que se encuentra en ejecuci&oacute;n.";
 answers[62] = choices[62][2];
 units[62] = "50";
 comments[62] = "Id Pregunta: 631. Junta de Extremadura A1 2015";


//  Id pregunta: 763 Año de creación de pregunta: 2016
 questions[63]= "64)  La presente Ley se aplica al sector p&uacute;blico que comprende (se&ntilde;ala la incorrecta):";
 choices[63]= new Array();
 choices[63][0] = "la Administraci&oacute;n General del Estado";
 choices[63][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[63][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[63][3] = "el sector p&uacute;blico y privado institucional";
 answers[63] = choices[63][3];
 units[63] = "4, 7, 8, 9";
 comments[63] = "Id Pregunta: 763. Ley 40/2015";


//  Id pregunta: 64 Año de creación de pregunta: 2016
 questions[64]= "65)  De entre los siguientes sistemas operativos para dispositivos m&oacute;viles, indique cu&aacute;l est&aacute; afectado por la vulnerabilidad Stagefright:";
 choices[64]= new Array();
 choices[64][0] = "Windows Phone";
 choices[64][1] = "Blackberry";
 choices[64][2] = "iOS";
 choices[64][3] = "Android";
 answers[64] = choices[64][3];
 units[64] = "59";
 comments[64] = "Id Pregunta: 64. AGE A1 2015";


//  Id pregunta: 145 Año de creación de pregunta: 2016
 questions[65]= "66)  Puede interponerse un recurso extraordinario de revisi&oacute;n:";
 choices[65]= new Array();
 choices[65][0] = "Ante actos firmes en la v&iacute;a administrativa cuando al dictarlos se hubiera incurrido en error de hecho, que resulte de los propios documentos incorporados al expediente";
 choices[65][1] = "Ante actos firmes en la v&iacute;a administrativa cuando en la resoluci&oacute;n hayan influido esencialmente documentos o testimonios declarados falsos por sentencia judicial firme, anterior o posterior a aquella resoluci&oacute;n";
 choices[65][2] = "Ante actos firmes en la v&iacute;a administrativa cuando la resoluci&oacute;n se hubiese dictado como consecuencia de prevaricaci&oacute;n, cohecho, violencia, maquinaci&oacute;n fraudulenta u otra conducta punible y se haya declarado as&iacute; en virtud de sentencia judicial firme";
 choices[65][3] = "Todas las anteriores son ciertas";
 answers[65] = choices[65][3];
 units[65] = "8";
 comments[65] = "Id Pregunta: 145. Ley 39/2015, Art&iacute;culo 125";


//  Id pregunta: 193 Año de creación de pregunta: 2016
 questions[66]= "67)  El defensor del pueblo ser&aacute; elegido por las Cortes Generales para un per&iacute;odo de:";
 choices[66]= new Array();
 choices[66][0] = "3 a&ntilde;os.";
 choices[66][1] = "5 a&ntilde;os.";
 choices[66][2] = "4 a&ntilde;os.";
 choices[66][3] = "6 a&ntilde;os.";
 answers[66] = choices[66][1];
 units[66] = "1";
 comments[66] = "Id Pregunta: 193. CONSTITUCION1978";


//  Id pregunta: 77 Año de creación de pregunta: 2016
 questions[67]= "68)  Respecto al uso de servicios de firma de documentos electr&oacute;nicos mediante certificados electr&oacute;nicos centralizados, mediante el sistema Cl@ve, indique cu&aacute;l de las siguientes afirmaciones es incorrecta:";
 choices[67]= new Array();
 choices[67][0] = "Para poder acceder al servicio, el usuario deber&aacute; solicitar previa y expresamente la emisi&oacute;n de los certificados electr&oacute;nicos centralizados correspondientes.";
 choices[67][1] = "Los certificados electr&oacute;nicos centralizados ser&aacute;n emitidos con las mismas garant&iacute;as de identificaci&oacute;n del DNI electr&oacute;nico del ciudadano.";
 choices[67][2] = "El acceso al servicio requiere en todo caso que el usuario se haya registrado en Cl@ve y haya activado su Cl@ve permanente.";
 choices[67][3] = "En el momento de la identificaci&oacute;n, se requerir&aacute; la utilizaci&oacute;n de una verificaci&oacute;n de seguridad adicional mediante un c&oacute;digo de un solo uso y validez limitada en el tiempo que se enviar&aacute; al tel&eacute;fono m&oacute;vil del usuario registrado.";
 answers[67] = choices[67][2];
 units[67] = "47";
 comments[67] = "Id Pregunta: 77. AGE A1 2015";


//  Id pregunta: 749 Año de creación de pregunta: 2016
 questions[68]= "69)  En los or&iacute;genes te&oacute;ricos del t&eacute;rmino gobernanza se encuentra:";
 choices[68]= new Array();
 choices[68][0] = "Peters";
 choices[68][1] = "Hollingsworth";
 choices[68][2] = "Manuel Castells";
 choices[68][3] = "Gaebler";
 answers[68] = choices[68][1];
 units[68] = "18, 20";
 comments[68] = "Id Pregunta: 749. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 394 Año de creación de pregunta: 2016
 questions[69]= "70)  La situaci&oacute;n en que una disposici&oacute;n, criterio o pr&aacute;ctica aparentemente neutros pone a personas de un sexo en desventaja particular con respecto a personas del otro, se denomina:";
 choices[69]= new Array();
 choices[69][0] = "Discriminaci&oacute;n indirecta.";
 choices[69][1] = "Discriminaci&oacute;n directa.";
 choices[69][2] = "Discriminaci&oacute;n por raz&oacute;n de sexo.";
 choices[69][3] = "Discriminaci&oacute;n abusiva.";
 answers[69] = choices[69][0];
 units[69] = "14";
 comments[69] = "Id Pregunta: 394. POLITICAS DE IGUALDAD";


//  Id pregunta: 383 Año de creación de pregunta: 2016
 questions[70]= "71)  &iquest;Qu&eacute; &oacute;rgano colegiado de consulta y asesoramiento crea la Ley Org&aacute;nica 3/2007, con el fin esencial de servir de cauce para la participaci&oacute;n de las mujeres en la consecuci&oacute;n efectiva del principio de igualdad de trato y de oportunidades entre mujeres y hombres, y la lucha contra la discriminaci&oacute;n por raz&oacute;n de sexo?";
 choices[70]= new Array();
 choices[70][0] = "El Consejo Nacional de la Mujer";
 choices[70][1] = "El Consejo de la Mujer";
 choices[70][2] = "El Instituto de la Mujer";
 choices[70][3] = "El Consejo de Participaci&oacute;n de la Mujer";
 answers[70] = choices[70][3];
 units[70] = "14";
 comments[70] = "Id Pregunta: 383. POLITICAS DE IGUALDAD";


//  Id pregunta: 90 Año de creación de pregunta: 2016
 questions[71]= "72)  Seg&uacute;n el Real Decreto 3/2010, de 8 de enero, por el que se regula el Esquema Nacional de Seguridad (ENS) en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, el an&aacute;lisis y gesti&oacute;n de riesgos es una parte esencial del proceso de seguridad, debiendo mantenerse permanentemente actualizado. Para ello, el propio ENS establece que se debe realizar un an&aacute;lisis de riesgos formal para los sistemas de:";
 choices[71]= new Array();
 choices[71][0] = "Categor&iacute;a b&aacute;sica";
 choices[71][1] = "Categor&iacute;a media";
 choices[71][2] = "Categor&iacute;a alta";
 choices[71][3] = "Categor&iacute;a media y alta";
 answers[71] = choices[71][2];
 units[71] = "46";
 comments[71] = "Id Pregunta: 90. AGE A1 2015";


//  Id pregunta: 783 Año de creación de pregunta: 2016
 questions[72]= "73)  Las competencias en materia de organizaci&oacute;n administrativa, r&eacute;gimen de personal, procedimientos e inspecci&oacute;n de servicios, no atribuidas espec&iacute;ficamente conforme a una Ley a ning&uacute;n otro &oacute;rgano de la Administraci&oacute;n General del Estado, ni al Gobierno, corresponder&aacute;n a:";
 choices[72]= new Array();
 choices[72][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[72][1] = "el Consejo de Estado";
 choices[72][2] = "el Congreso";
 choices[72][3] = "las Cortes Generales";
 answers[72] = choices[72][0];
 units[72] = "4, 7, 8, 9";
 comments[72] = "Id Pregunta: 783. Ley 40/2015";


//  Id pregunta: 737 Año de creación de pregunta: 2016
 questions[73]= "74)  En el Plan de Acci&oacute;n de la Administraci&oacute;n Electr&oacute;nica de la UE, las administraciones p&uacute;blicas y las instituciones p&uacute;blicas de la Uni&oacute;n Europea deben ser abiertas, eficaces e integradoras en el a&ntilde;o:";
 choices[73]= new Array();
 choices[73][0] = "2025";
 choices[73][1] = "2023";
 choices[73][2] = "2030";
 choices[73][3] = "2020";
 answers[73] = choices[73][3];
 units[73] = "28";
 comments[73] = "Id Pregunta: 737. Estrategia TIC";


//  Id pregunta: 171 Año de creación de pregunta: 2016
 questions[74]= "75)  Se&ntilde;ale la respuesta FALSA. Entre los objetivos de ISA2 se encuentra:";
 choices[74]= new Array();
 choices[74][0] = "desarrollar, mantener y promover un enfoque hol&iacute;stico hacia la interoperabilidad en la Uni&oacute;n para eliminar la fragmentaci&oacute;n en el panorama de la interoperabilidad en la Uni&oacute;n";
 choices[74][1] = "facilitar la reutilizaci&oacute;n de las soluciones de interoperabilidad por parte de las administraciones p&uacute;blicas europeas.";
 choices[74][2] = "identificar, crear y explotar soluciones de interoperabilidad que faciliten la ejecuci&oacute;n de las pol&iacute;ticas y actividades de la Uni&oacute;n";
 choices[74][3] = "eliminar la interacci&oacute;n electr&oacute;nica transfronteriza tanto entre las administraciones p&uacute;blicas europeas fomentando una cultura de ciberseguridad europea";
 answers[74] = choices[74][3];
 units[74] = "19";
 comments[74] = "Id Pregunta: 171. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2015/Diciembre/Noticia-2015-12-09-Publicada-la-Decision-ISA2-continuidad-al-esfuerzo-asegurar-interoperabilidad-entre-AAPP-europeas.html#.WCnm1WrhDIU";


