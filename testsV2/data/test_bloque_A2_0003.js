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

//  Id pregunta: 524 Año de creación de pregunta: 2016
 questions[0]= "1)  Las asociaciones y organizaciones representativas de intereses econ&oacute;micos y sociales:";
 choices[0]= new Array();
 choices[0][0] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos en los t&eacute;rminos que reglamentariamente se establezca";
 choices[0][1] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos";
 choices[0][2] = "no ser&aacute;n titulares de intereses leg&iacute;timos colectivos";
 choices[0][3] = "ser&aacute;n titulares de intereses leg&iacute;timos colectivos en los t&eacute;rminos que la Ley reconozca";
 answers[0] = choices[0][3];
 units[0] = "7";
 comments[0] = "Id Pregunta: 524. LEY 39/2015";


//  Id pregunta: 663 Año de creación de pregunta: 2016
 questions[1]= "2)  Seg&uacute;n la Ley 39/2015, la iniciaci&oacute;n de un procedimiento administrativo puede realizarse:";
 choices[1]= new Array();
 choices[1][0] = "De oficio.";
 choices[1][1] = "A solicitud del interesado.";
 choices[1][2] = "De oficio o a solicitud del interesado.";
 choices[1][3] = "Por la Administraci&oacute;n P&uacute;blica responsable.";
 answers[1] = choices[1][2];
 units[1] = "7";
 comments[1] = "Id Pregunta: 663. Art&iacute;culo 54 de la Ley 39/2015";


//  Id pregunta: 805 Año de creación de pregunta: 2016
 questions[2]= "3)  Son los titulares de los &oacute;rganos directivos encargados de la gesti&oacute;n de una o varias &aacute;reas funcionalmente homog&eacute;neas del Ministerio:";
 choices[2]= new Array();
 choices[2][0] = "los Secretarios generales t&eacute;cnicos";
 choices[2][1] = "los Directores generales";
 choices[2][2] = "los Secretarios generales";
 choices[2][3] = "los Subsecretarios";
 answers[2] = choices[2][1];
 units[2] = "4, 7, 8, 9";
 comments[2] = "Id Pregunta: 805. Ley 40/2015";


//  Id pregunta: 775 Año de creación de pregunta: 2016
 questions[3]= "4)  Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos:";
 choices[3]= new Array();
 choices[3][0] = "las unidades administrativas a las que se les atribuyan funciones que no tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo";
 choices[3][1] = "las unidades administrativas a las que se les atribuyan funciones que no tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo";
 choices[3][2] = "las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo";
 choices[3][3] = "las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo";
 answers[3] = choices[3][3];
 units[3] = "4, 7, 8, 9";
 comments[3] = "Id Pregunta: 775. Ley 40/2015";


//  Id pregunta: 516 Año de creación de pregunta: 2016
 questions[4]= "5)  Las Universidades p&uacute;blicas:";
 choices[4]= new Array();
 choices[4][0] = "se regir&aacute;n &uacute;nicamente por su normativa espec&iacute;fica";
 choices[4][1] = "se regir&aacute;n por su normativa espec&iacute;fica y supletoriamente por las previsiones de esta Ley";
 choices[4][2] = "se regir&aacute;n por las previsiones de esta Ley y supletoriamente por su normativa espec&iacute;fica";
 choices[4][3] = "se regir&aacute;n &uacute;nicamente por las previsiones de esta Ley";
 answers[4] = choices[4][1];
 units[4] = "7";
 comments[4] = "Id Pregunta: 516. LEY 39/2015";


//  Id pregunta: 801 Año de creación de pregunta: 2016
 questions[5]= "6)  La organizaci&oacute;n en Departamentos ministeriales no obsta a la existencia de:";
 choices[5]= new Array();
 choices[5][0] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter general se adscriban directamente al Ministro";
 choices[5][1] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter excepcional se adscriban directamente al Ministro";
 choices[5][2] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos no integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter general se adscriban directamente al Ministro";
 choices[5][3] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos no integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter excepcional se adscriban directamente al Ministro";
 answers[5] = choices[5][3];
 units[5] = "4, 7, 8, 9";
 comments[5] = "Id Pregunta: 801. Ley 40/2015";


//  Id pregunta: 493 Año de creación de pregunta: 2016
 questions[6]= "7)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, inspeccionar la actividad de las oficinas de contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una competencia de:";
 choices[6]= new Array();
 choices[6][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[6][1] = "La Intervenci&oacute;n General de la Defensa.";
 choices[6][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[6][3] = "La Intervenci&oacute;n General de la Seguridad Social.";
 answers[6] = choices[6][2];
 units[6] = "10";
 comments[6] = "Id Pregunta: 493. PRESUPUESTOS GENERALES";


//  Id pregunta: 774 Año de creación de pregunta: 2016
 questions[7]= "8)  Las Administraciones P&uacute;blicas velar&aacute;n por el cumplimiento de los requisitos previstos en la legislaci&oacute;n que resulte aplicable, para lo cual podr&aacute;n, en el &aacute;mbito de sus respectivas competencias, comprobar, verificar, investigar e inspeccionar los hechos, actos, elementos, actividades, estimaciones y dem&aacute;s circunstancias que fueran necesarias con los l&iacute;mites establecidos en:";
 choices[7]= new Array();
 choices[7][0] = "la legislaci&oacute;n de protecci&oacute;n de datos de car&aacute;cter personal";
 choices[7][1] = "el C&oacute;digo Civil";
 choices[7][2] = "la Constituci&oacute;n Espa&ntilde;ola";
 choices[7][3] = "la ley de procedimiento administrativo com&uacute;n de las Administraciones P&uacute;blicas";
 answers[7] = choices[7][0];
 units[7] = "4, 7, 8, 9";
 comments[7] = "Id Pregunta: 774. Ley 40/2015";


//  Id pregunta: 452 Año de creación de pregunta: 2016
 questions[8]= "9)  En t&eacute;rminos familiares, podemos decir que desembocan en gastos...";
 choices[8]= new Array();
 choices[8][0] = "Los cr&eacute;ditos";
 choices[8][1] = "Las partidas presupuestarias";
 choices[8][2] = "Los derechos";
 choices[8][3] = "Las obligaciones";
 answers[8] = choices[8][3];
 units[8] = "10";
 comments[8] = "Id Pregunta: 452. PRESUPUESTOS GENERALES";


//  Id pregunta: 141 Año de creación de pregunta: 2016
 questions[9]= "10)  El recurso de alzada puede interponerse:";
 choices[9]= new Array();
 choices[9][0] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna en todo caso";
 choices[9][1] = "Ante el &oacute;rgano que dict&oacute; el acto que se impugna o ante el competente para resolverlo";
 choices[9][2] = "Ante el &oacute;rgano competente para resolverlo en todo caso";
 choices[9][3] = "Ante el Defensor del Pueblo";
 answers[9] = choices[9][1];
 units[9] = "8";
 comments[9] = "Id Pregunta: 141. Ley 39/2015, Art&iacute;culo 121";


//  Id pregunta: 667 Año de creación de pregunta: 2016
 questions[10]= "11)  Se&ntilde;ale la opci&oacute;n falsa respecto a la instrucci&oacute;n del procedimiento definida en la Ley 39/2015:";
 choices[10]= new Array();
 choices[10][0] = "Los interesados podr&aacute;n, en cualquier momento del procedimiento anterior al tr&aacute;mite de audiencia, aducir alegaciones y aportar documentos u otros elementos de juicio.";
 choices[10][1] = "El instructor del procedimiento s&oacute;lo podr&aacute; rechazar las pruebas propuestas por los interesados cuando sean manifiestamente improcedentes o innecesarias, mediante resoluci&oacute;n motivada.";
 choices[10][2] = "Salvo disposici&oacute;n expresa en contrario, los informes ser&aacute;n preceptivos y vinculantes.";
 choices[10][3] = "Se podr&aacute; prescindir del tr&aacute;mite de audiencia cuando no figuren en el procedimiento ni sean tenidos en cuenta en la resoluci&oacute;n otros hechos ni otras alegaciones y pruebas que las aducidas por el interesado.";
 answers[10] = choices[10][2];
 units[10] = "7";
 comments[10] = "Id Pregunta: 667. Cap&iacute;tulo IV, T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 482 Año de creación de pregunta: 2016
 questions[11]= "12)  De acuerdo con el art&iacute;culo 67 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, si las variaciones afectasen al volumen de endeudamiento a corto y largo plazo, ser&aacute; competencia del Consejo de Ministros cuando su importe exceda de la cuant&iacute;a de:";
 choices[11]= new Array();
 choices[11][0] = "12.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[11][1] = "13.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[11][2] = "11.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[11][3] = "10.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 answers[11] = choices[11][0];
 units[11] = "10";
 comments[11] = "Id Pregunta: 482. PRESUPUESTOS GENERALES";


//  Id pregunta: 820 Año de creación de pregunta: 2016
 questions[12]= "13)  En las Comunidades Aut&oacute;nomas, en caso de ausencia, vacante o enfermedad del titular de la Delegaci&oacute;n del Gobierno, ser&aacute; suplido por:";
 choices[12]= new Array();
 choices[12][0] = "el Subdelegado del Gobierno que el Delegado designe y, en su defecto, al de la provincia en que tenga su sede";
 choices[12][1] = "el Subdelegado del Gobierno de la provincia en que tenga su sede y, en su defecto, al que el Delegado designe";
 choices[12][2] = "el Subdirector General que el Delegado designe";
 choices[12][3] = "el Secretario de Estado";
 answers[12] = choices[12][0];
 units[12] = "4, 7, 8, 9";
 comments[12] = "Id Pregunta: 820. Ley 40/2015";


//  Id pregunta: 824 Año de creación de pregunta: 2016
 questions[13]= "14)  Podr&aacute;n ordenarle que se abstengan de toda intervenci&oacute;n en el expediente al funcionario que se encuentre en causa de abstenci&oacute;n...";
 choices[13]= new Array();
 choices[13][0] = "Los &oacute;rganos jer&aacute;rquicamente superiores";
 choices[13][1] = "S&oacute;lo los &oacute;rganos inmediatamente superiores jer&aacute;rquicos";
 choices[13][2] = "Los interesados en el procedimiento";
 choices[13][3] = "Las alternativas b) y c) son correctas";
 answers[13] = choices[13][1];
 units[13] = "4, 7, 8, 9";
 comments[13] = "Id Pregunta: 824. Ley 40/2015";


//  Id pregunta: 449 Año de creación de pregunta: 2016
 questions[14]= "15)  El cr&eacute;dito presupuestario es...";
 choices[14]= new Array();
 choices[14][0] = "El sujeto que realiza el gasto";
 choices[14][1] = "El fin que se persigue con la realizaci&oacute;n del gasto";
 choices[14][2] = "El dinero que se asigna a la realizaci&oacute;n del gasto";
 choices[14][3] = "El concepto del gasto, es decir: aquello en lo que se realiza el gasto";
 answers[14] = choices[14][2];
 units[14] = "10";
 comments[14] = "Id Pregunta: 449. PRESUPUESTOS GENERALES";


//  Id pregunta: 782 Año de creación de pregunta: 2016
 questions[15]= "16)  La Administraci&oacute;n General del Estado act&uacute;a y se organiza de acuerdo con los principios establecidos en el art&iacute;culo 3, as&iacute; como los de:";
 choices[15]= new Array();
 choices[15][0] = "desconcentraci&oacute;n funcional y descentralizaci&oacute;n funcional y territorial";
 choices[15][1] = "descentralizaci&oacute;n territorial y desconcentraci&oacute;n funcional y territorial";
 choices[15][2] = "descentralizaci&oacute;n funcional y desconcentraci&oacute;n funcional y territorial";
 choices[15][3] = "desconcentraci&oacute;n territorial y descentralizaci&oacute;n funcional y territorial";
 answers[15] = choices[15][2];
 units[15] = "4, 7, 8, 9";
 comments[15] = "Id Pregunta: 782. Ley 40/2015";


//  Id pregunta: 454 Año de creación de pregunta: 2016
 questions[16]= "17)  El Presupuesto por programas sirve para saber...";
 choices[16]= new Array();
 choices[16][0] = "En qu&eacute; nos gastamos el dinero";
 choices[16][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[16][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[16][3] = "Qui&eacute;n se gasta el dinero";
 answers[16] = choices[16][2];
 units[16] = "10";
 comments[16] = "Id Pregunta: 454. PRESUPUESTOS GENERALES";


//  Id pregunta: 831 Año de creación de pregunta: 2016
 questions[17]= "18)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Marque la respuesta correcta.";
 choices[17]= new Array();
 choices[17][0] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo.";
 choices[17][1] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo.";
 choices[17][2] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter potestativo.";
 choices[17][3] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter oneroso.";
 answers[17] = choices[17][0];
 units[17] = "4, 7, 8, 9";
 comments[17] = "Id Pregunta: 831. Ley 40/2015";


//  Id pregunta: 534 Año de creación de pregunta: 2016
 questions[18]= "19)  Las Administraciones P&uacute;blicas podr&aacute;n habilitar:";
 choices[18]= new Array();
 choices[18][0] = "con car&aacute;cter general a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[18][1] = "con car&aacute;cter general o espec&iacute;fico a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[18][2] = "con car&aacute;cter general o espec&iacute;fico a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[18][3] = "con car&aacute;cter general a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 answers[18] = choices[18][2];
 units[18] = "7";
 comments[18] = "Id Pregunta: 534. LEY 39/2015";


//  Id pregunta: 790 Año de creación de pregunta: 2016
 questions[19]= "20)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado los Subdelegados del Gobierno en las provincias los cuales tendr&aacute;n nivel de:";
 choices[19]= new Array();
 choices[19][0] = "Subsecretario";
 choices[19][1] = "Subdirector general";
 choices[19][2] = "Secretario de Estado";
 choices[19][3] = "ninguna es correcta";
 answers[19] = choices[19][1];
 units[19] = "4, 7, 8, 9";
 comments[19] = "Id Pregunta: 790. Ley 40/2015";


//  Id pregunta: 796 Año de creación de pregunta: 2016
 questions[20]= "21)  Sin perjuicio de lo previsto en la Ley 3/2015, de 30 de marzo, reguladora del ejercicio del alto cargo de la Administraci&oacute;n General del Estado, los titulares de los &oacute;rganos superiores y directivos son nombrados, atendiendo a criterios de competencia profesional y experiencia, en la forma establecida en esta Ley, siendo de aplicaci&oacute;n al desempe&ntilde;o de sus funciones:";
 choices[20]= new Array();
 choices[20][0] = "la responsabilidad profesional, personal y directa por la gesti&oacute;n desarrollada";
 choices[20][1] = "la sujeci&oacute;n al control y evaluaci&oacute;n de la gesti&oacute;n por el &oacute;rgano superior o directivo competente, sin perjuicio del control establecido por la Ley General Presupuestaria";
 choices[20][2] = "a y b son correctas";
 choices[20][3] = "a y b son incorrectas";
 answers[20] = choices[20][2];
 units[20] = "4, 7, 8, 9";
 comments[20] = "Id Pregunta: 796. Ley 40/2015";


//  Id pregunta: 531 Año de creación de pregunta: 2016
 questions[21]= "22)  Se entender&aacute; acreditada la representaci&oacute;n realizada:";
 choices[21]= new Array();
 choices[21][0] = "mediante apoderamiento apud acta efectuado por comparecencia personal";
 choices[21][1] = "mediante apoderamiento apud acta efectuado por comparecencia electr&oacute;nica en la correspondiente sede electr&oacute;nica";
 choices[21][2] = "a trav&eacute;s de la acreditaci&oacute;n de su inscripci&oacute;n en el registro electr&oacute;nico de apoderamientos de la Administraci&oacute;n P&uacute;blica competente";
 choices[21][3] = "todas son correctas";
 answers[21] = choices[21][3];
 units[21] = "7";
 comments[21] = "Id Pregunta: 531. LEY 39/2015";


//  Id pregunta: 817 Año de creación de pregunta: 2016
 questions[22]= "23)  Los servicios territoriales de la Administraci&oacute;n General del Estado en la Comunidad Aut&oacute;noma se organizar&aacute;n atendiendo al mejor cumplimiento de sus fines, en:";
 choices[22]= new Array();
 choices[22][0] = "servicios integrados en las Delegaciones del Gobierno";
 choices[22][1] = "servicios no integrados en las Delegaciones del Gobierno";
 choices[22][2] = "servicios integrados y no integrados en las Delegaciones del Gobierno";
 choices[22][3] = "ninguna es correcta";
 answers[22] = choices[22][2];
 units[22] = "4, 7, 8, 9";
 comments[22] = "Id Pregunta: 817. Ley 40/2015";


//  Id pregunta: 788 Año de creación de pregunta: 2016
 questions[23]= "24)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado son &oacute;rganos directivos:";
 choices[23]= new Array();
 choices[23][0] = "los Delegados del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[23][1] = "los Subdelegados del Gobierno en las provincias";
 choices[23][2] = "los Subdelegados del Gobierno en las entidades locales";
 choices[23][3] = "a y b son correctas";
 answers[23] = choices[23][3];
 units[23] = "4, 7, 8, 9";
 comments[23] = "Id Pregunta: 788. Ley 40/2015";


//  Id pregunta: 792 Año de creación de pregunta: 2016
 questions[24]= "25)  Tienen la condici&oacute;n de alto cargo:";
 choices[24]= new Array();
 choices[24][0] = "los &oacute;rganos superiores";
 choices[24][1] = "los &oacute;rganos superiores y directivos";
 choices[24][2] = "los &oacute;rganos superiores y directivos, excepto los Subdirectores generales y asimilados";
 choices[24][3] = "los &oacute;rganos superiores y directivos, excepto los Secretarios generales y asimilados";
 answers[24] = choices[24][2];
 units[24] = "4, 7, 8, 9";
 comments[24] = "Id Pregunta: 792. Ley 40/2015";


//  Id pregunta: 488 Año de creación de pregunta: 2016
 questions[25]= "26)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, autorizar las transferencias entre distintas secciones presupuestarias como consecuencia de reorganizaciones administrativas, es una competencia de:";
 choices[25]= new Array();
 choices[25][0] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[25][1] = "El Gobierno.";
 choices[25][2] = "El Presidente del Gobierno.";
 choices[25][3] = "El Consejo de Ministros.";
 answers[25] = choices[25][1];
 units[25] = "10";
 comments[25] = "Id Pregunta: 488. PRESUPUESTOS GENERALES";


//  Id pregunta: 151 Año de creación de pregunta: 2016
 questions[26]= "27)  Seg&uacute;n la ley 39/2015, est&aacute;n obligados a relacionarse a trav&eacute;s de medios electr&oacute;nicos con las Administraciones P&uacute;blicas para la realizaci&oacute;n de cualquier tr&aacute;mite de un procedimiento administrativo: (se&ntilde;ala la respuesta incorrecta)";
 choices[26]= new Array();
 choices[26][0] = "las personas jur&iacute;dicas ";
 choices[26][1] = "las entidades con personalidad jur&iacute;dica";
 choices[26][2] = "los empleados de las Administraciones P&uacute;blicas para los tr&aacute;mites y actuaciones que realicen con ellas por raz&oacute;n de su condici&oacute;n de empleado p&uacute;blico";
 choices[26][3] = "quienes representen a un interesado que est&eacute; obligado legalmente a relacionarse electr&oacute;nicamente con la Administraci&oacute;n";
 answers[26] = choices[26][1];
 units[26] = "7";
 comments[26] = "Id Pregunta: 151. Ley 39/2015, Art&iacute;culo 14";


//  Id pregunta: 494 Año de creación de pregunta: 2016
 questions[27]= "28)  Seg&uacute;n la Ley General Presupuestaria, con car&aacute;cter excepcional podr&aacute;n generar cr&eacute;dito en el Presupuesto del ejercicio los ingresos realizados:";
 choices[27]= new Array();
 choices[27][0] = "Por reembolso de pr&eacute;stamos.";
 choices[27][1] = "Por la venta de bienes.";
 choices[27][2] = "En el &uacute;ltimo trimestre del ejercicio anterior.";
 choices[27][3] = "Por prestaci&oacute;n de servicios.";
 answers[27] = choices[27][2];
 units[27] = "10";
 comments[27] = "Id Pregunta: 494. PRESUPUESTOS GENERALES";


//  Id pregunta: 497 Año de creación de pregunta: 2016
 questions[28]= "29)  Las Obligaciones de la Hacienda P&uacute;blica Estatal se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[28]= new Array();
 choices[28][0] = "T&iacute;tulo II, Cap&iacute;tulo I, Secci&oacute;n 1.";
 choices[28][1] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[28][2] = "T&iacute;tulo I, Cap&iacute;tulo I, Secci&oacute;n 4.";
 choices[28][3] = "T&iacute;tulo I, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[28] = choices[28][3];
 units[28] = "10";
 comments[28] = "Id Pregunta: 497. PRESUPUESTOS GENERALES";


//  Id pregunta: 821 Año de creación de pregunta: 2016
 questions[29]= "30)  En las Comunidades Aut&oacute;nomas uniprovinciales en las que no exista Subdelegado la suplencia corresponder&aacute; a:";
 choices[29]= new Array();
 choices[29][0] = "el Secretario General";
 choices[29][1] = "el Subdirector General";
 choices[29][2] = "el Secretario de Estado";
 choices[29][3] = "ninguna es correcta";
 answers[29] = choices[29][0];
 units[29] = "4, 7, 8, 9";
 comments[29] = "Id Pregunta: 821. Ley 40/2015";


//  Id pregunta: 670 Año de creación de pregunta: 2016
 questions[30]= "31)  Respecto a la ejecuci&oacute;n de la resoluci&oacute;n de un procedimiento administrativo, se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[30]= new Array();
 choices[30][0] = "Las Administraciones P&uacute;blicas no iniciar&aacute;n la ejecuci&oacute;n hasta que se haya dictado resoluci&oacute;n.";
 choices[30][1] = "De una resoluci&oacute;n administrativa nunca puede derivarse una multa.";
 choices[30][2] = "La ejecuci&oacute;n forzosa de una resoluci&oacute;n puede afectar al patrimonio.";
 choices[30][3] = "Contra algunas resoluciones es posible interponer recursos por v&iacute;a administrativa.";
 answers[30] = choices[30][1];
 units[30] = "7";
 comments[30] = "Id Pregunta: 670. Cap&iacute;tulo VII, T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 763 Año de creación de pregunta: 2016
 questions[31]= "32)  La presente Ley se aplica al sector p&uacute;blico que comprende (se&ntilde;ala la incorrecta):";
 choices[31]= new Array();
 choices[31][0] = "la Administraci&oacute;n General del Estado";
 choices[31][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[31][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[31][3] = "el sector p&uacute;blico y privado institucional";
 answers[31] = choices[31][3];
 units[31] = "4, 7, 8, 9";
 comments[31] = "Id Pregunta: 763. Ley 40/2015";


//  Id pregunta: 145 Año de creación de pregunta: 2016
 questions[32]= "33)  Puede interponerse un recurso extraordinario de revisi&oacute;n:";
 choices[32]= new Array();
 choices[32][0] = "Ante actos firmes en la v&iacute;a administrativa cuando al dictarlos se hubiera incurrido en error de hecho, que resulte de los propios documentos incorporados al expediente";
 choices[32][1] = "Ante actos firmes en la v&iacute;a administrativa cuando en la resoluci&oacute;n hayan influido esencialmente documentos o testimonios declarados falsos por sentencia judicial firme, anterior o posterior a aquella resoluci&oacute;n";
 choices[32][2] = "Ante actos firmes en la v&iacute;a administrativa cuando la resoluci&oacute;n se hubiese dictado como consecuencia de prevaricaci&oacute;n, cohecho, violencia, maquinaci&oacute;n fraudulenta u otra conducta punible y se haya declarado as&iacute; en virtud de sentencia judicial firme";
 choices[32][3] = "Todas las anteriores son ciertas";
 answers[32] = choices[32][3];
 units[32] = "8";
 comments[32] = "Id Pregunta: 145. Ley 39/2015, Art&iacute;culo 125";


//  Id pregunta: 783 Año de creación de pregunta: 2016
 questions[33]= "34)  Las competencias en materia de organizaci&oacute;n administrativa, r&eacute;gimen de personal, procedimientos e inspecci&oacute;n de servicios, no atribuidas espec&iacute;ficamente conforme a una Ley a ning&uacute;n otro &oacute;rgano de la Administraci&oacute;n General del Estado, ni al Gobierno, corresponder&aacute;n a:";
 choices[33]= new Array();
 choices[33][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[33][1] = "el Consejo de Estado";
 choices[33][2] = "el Congreso";
 choices[33][3] = "las Cortes Generales";
 answers[33] = choices[33][0];
 units[33] = "4, 7, 8, 9";
 comments[33] = "Id Pregunta: 783. Ley 40/2015";


//  Id pregunta: 779 Año de creación de pregunta: 2016
 questions[34]= "35)  Las instrucciones y &oacute;rdenes de servicio se publicar&aacute;n en el bolet&iacute;n oficial que corresponda, sin perjuicio de su difusi&oacute;n de acuerdo con lo previsto en la Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno cuando:";
 choices[34]= new Array();
 choices[34][0] = "una disposici&oacute;n espec&iacute;fica as&iacute; lo establezca";
 choices[34][1] = "se estime conveniente por raz&oacute;n de los destinatarios";
 choices[34][2] = "se estime conveniente por raz&oacute;n de los efectos que puedan producirse";
 choices[34][3] = "todas son correctas";
 answers[34] = choices[34][3];
 units[34] = "4, 7, 8, 9";
 comments[34] = "Id Pregunta: 779. Ley 40/2015";


//  Id pregunta: 847 Año de creación de pregunta: 2016
 questions[35]= "36)  &iquest;Cu&aacute;l de los siguientes es un sistema de firma para la actuaci&oacute;n administrativa automatizada?";
 choices[35]= new Array();
 choices[35][0] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico reconocido o cualificado que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[35][1] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico avanzado o reconocido que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[35][2] = "C&oacute;digo seguro de verificaci&oacute;n vinculado a la Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de Derecho P&uacute;blico, en los t&eacute;rminos y condiciones establecidos, permiti&eacute;ndose en todo caso la comprobaci&oacute;n de la integridad del documento mediante el acceso al portal correspondiente.";
 choices[35][3] = "Firma electr&oacute;nica del titular del &oacute;rgano o empleado p&uacute;blico.";
 answers[35] = choices[35][0];
 units[35] = "4, 7, 8, 9";
 comments[35] = "Id Pregunta: 847. Ley 40/2015";


//  Id pregunta: 823 Año de creación de pregunta: 2016
 questions[36]= "37)  Debe abstenerse el funcionario que tiene relaci&oacute;n de servicio con interesado en el asunto o le ha prestado servicios profesionales en los ...";
 choices[36]= new Array();
 choices[36][0] = "Tres &uacute;ltimos a&ntilde;os";
 choices[36][1] = "Cinco &uacute;ltimos a&ntilde;os";
 choices[36][2] = "Cuatro &uacute;ltimos a&ntilde;os";
 choices[36][3] = "Dos &uacute;ltimos a&ntilde;os";
 answers[36] = choices[36][1];
 units[36] = "4, 7, 8, 9";
 comments[36] = "Id Pregunta: 823. Ley 40/2015";


//  Id pregunta: 793 Año de creación de pregunta: 2016
 questions[37]= "38)  Todos los &oacute;rganos de la Administraci&oacute;n General del Estado que no sean &oacute;rgano superior o directivo se encuentran bajo la dependencia o direcci&oacute;n de:";
 choices[37]= new Array();
 choices[37][0] = "un &oacute;rgano superior";
 choices[37][1] = "un &oacute;rgano directivo";
 choices[37][2] = "un &oacute;rgano superior o directivo";
 choices[37][3] = "ninguna es correcta";
 answers[37] = choices[37][2];
 units[37] = "4, 7, 8, 9";
 comments[37] = "Id Pregunta: 793. Ley 40/2015";


//  Id pregunta: 765 Año de creación de pregunta: 2016
 questions[38]= "39)  Las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas:";
 choices[38]= new Array();
 choices[38][0] = "no quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley, salvo, cuando ejerzan potestades administrativas";
 choices[38][1] = "no quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley, ni siquiera, cuando ejerzan potestades administrativas";
 choices[38][2] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, y en todo caso, cuando ejerzan potestades administrativas";
 choices[38][3] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, excepto, cuando ejerzan potestades administrativas";
 answers[38] = choices[38][2];
 units[38] = "4, 7, 8, 9";
 comments[38] = "Id Pregunta: 765. Ley 40/2015";


//  Id pregunta: 478 Año de creación de pregunta: 2016
 questions[39]= "40)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la funci&oacute;n interventora se ejercer&aacute; en sus modalidades de:";
 choices[39]= new Array();
 choices[39][0] = "Intervenci&oacute;n f&iacute;sica y general.";
 choices[39][1] = "Intervenci&oacute;n formal y material.";
 choices[39][2] = "Intervenci&oacute;n f&iacute;sica y material.";
 choices[39][3] = "Intervenci&oacute;n formal y general.";
 answers[39] = choices[39][1];
 units[39] = "10";
 comments[39] = "Id Pregunta: 478. PRESUPUESTOS GENERALES";


//  Id pregunta: 484 Año de creación de pregunta: 2016
 questions[40]= "41)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, dirigir la contabilidad de las entidades que integran el sistema de la Seguridad Social y gestionar la contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una funci&oacute;n de:";
 choices[40]= new Array();
 choices[40][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[40][1] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[40][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[40][3] = "La Intervenci&oacute;n General de la Defensa.";
 answers[40] = choices[40][2];
 units[40] = "10";
 comments[40] = "Id Pregunta: 484. PRESUPUESTOS GENERALES";


//  Id pregunta: 495 Año de creación de pregunta: 2016
 questions[41]= "42)  Seg&uacute;n el art&iacute;culo 13.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el aplazamiento y fraccionamiento de las cantidades adeudadas a la Hacienda P&uacute;blica estatal por las comunidades aut&oacute;nomas y las corporaciones locales se regir&aacute; por:";
 choices[41]= new Array();
 choices[41][0] = "La Ley General Tributaria.";
 choices[41][1] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la Administraci&oacute;n General del Estado.";
 choices[41][2] = "La legislaci&oacute;n espec&iacute;fica, la cual tendr&aacute; en cuenta la necesaria reciprocidad entre administraciones.";
 choices[41][3] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 answers[41] = choices[41][2];
 units[41] = "10";
 comments[41] = "Id Pregunta: 495. PRESUPUESTOS GENERALES";


//  Id pregunta: 155 Año de creación de pregunta: 2016
 questions[42]= "43)  A efectos del c&oacute;mputo de plazo fijado en d&iacute;as h&aacute;biles, y en lo que se refiere al cumplimiento de plazos por los interesados, la presentaci&oacute;n de documentos en un registro electr&oacute;nico un d&iacute;a inh&aacute;bil:";
 choices[42]= new Array();
 choices[42][0] = "se entender&aacute; realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil.";
 choices[42][1] = "se entender&aacute;, en todo caso, realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior";
 choices[42][2] = "se entender&aacute; realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil";
 choices[42][3] = "se entender&aacute;, en todo caso, realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente";
 answers[42] = choices[42][2];
 units[42] = "7";
 comments[42] = "Id Pregunta: 155. Ley 39/2015, Art&iacute;culo 31";


//  Id pregunta: 528 Año de creación de pregunta: 2016
 questions[43]= "44)  Podr&aacute;n actuar en representaci&oacute;n de otras ante las Administraciones P&uacute;blicas:";
 choices[43]= new Array();
 choices[43][0] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[43][1] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[43][2] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 choices[43][3] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 answers[43] = choices[43][3];
 units[43] = "7";
 comments[43] = "Id Pregunta: 528. LEY 39/2015";


//  Id pregunta: 530 Año de creación de pregunta: 2016
 questions[44]= "45)  La representaci&oacute;n podr&aacute; acreditarse:";
 choices[44]= new Array();
 choices[44][0] = "mediante cualquier t&iacute;tulo jur&iacute;dico";
 choices[44][1] = "mediante resoluci&oacute;n judicial especial";
 choices[44][2] = "&uacute;nicamente mediante poder notarial";
 choices[44][3] = "mediante cualquier medio v&aacute;lido en Derecho que deje constancia fidedigna de su existencia";
 answers[44] = choices[44][3];
 units[44] = "7";
 comments[44] = "Id Pregunta: 530. LEY 39/2015";


//  Id pregunta: 833 Año de creación de pregunta: 2016
 questions[45]= "46)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta correcta.";
 choices[45]= new Array();
 choices[45][0] = "La competencia es irrenunciable y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[45][1] = "La competencia es imprescriptible y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[45][2] = "La competencia es inviolable y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[45][3] = "Todas son correctas.";
 answers[45] = choices[45][0];
 units[45] = "4, 7, 8, 9";
 comments[45] = "Id Pregunta: 833. Ley 40/2015";


//  Id pregunta: 146 Año de creación de pregunta: 2016
 questions[46]= "47)  La declaraci&oacute;n de lesividad de los actos anulables:";
 choices[46]= new Array();
 choices[46][0] = "No podr&aacute; adoptarse una vez transcurridos cuatro a&ntilde;os desde que se dict&oacute; el acto administrativo";
 choices[46][1] = "No es necesaria para impugnar ante el orden jurisdiccional contencioso-administrativo los actos favorables para los interesados";
 choices[46][2] = "Se adoptar&aacute; en todo caso por el Consejo de Estado";
 choices[46][3] = "Si el acto proviniera de las entidades que integran la Administraci&oacute;n Local, la declaraci&oacute;n de lesividad se adoptar&aacute; por la Comunidad Aut&oacute;noma a la que pertenece dicha entidad";
 answers[46] = choices[46][0];
 units[46] = "8";
 comments[46] = "Id Pregunta: 146. Ley 39/2015, Art&iacute;culo 107";


//  Id pregunta: 826 Año de creación de pregunta: 2016
 questions[47]= "48)  La recusaci&oacute;n pueden promoverla...";
 choices[47]= new Array();
 choices[47][0] = "Cualquier &oacute;rgano";
 choices[47][1] = "El interesado";
 choices[47][2] = "El interesado y el superior jer&aacute;rquico del &oacute;rgano de que se trate";
 choices[47][3] = "El interesado, el superior jer&aacute;rquico del &oacute;rgano de que se trate y el propio &oacute;rgano";
 answers[47] = choices[47][0];
 units[47] = "4, 7, 8, 9";
 comments[47] = "Id Pregunta: 826. Ley 40/2015";


//  Id pregunta: 461 Año de creación de pregunta: 2016
 questions[48]= "49)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, a qui&eacute;n le corresponde aprobar y comprometer los gastos propios de los servicios a su cargo:";
 choices[48]= new Array();
 choices[48][0] = "A los ministros.";
 choices[48][1] = "Las respuestas a) y b) son correctas.";
 choices[48][2] = "Las respuestas a) y b) no son correctas.";
 choices[48][3] = "A los titulares de los &oacute;rganos del Estado.";
 answers[48] = choices[48][1];
 units[48] = "10";
 comments[48] = "Id Pregunta: 461. PRESUPUESTOS GENERALES";


//  Id pregunta: 772 Año de creación de pregunta: 2016
 questions[49]= "50)  Las Administraciones P&uacute;blicas act&uacute;an para el cumplimiento de sus fines con:";
 choices[49]= new Array();
 choices[49][0] = "personalidad jur&iacute;dica propia";
 choices[49][1] = "personalidad jur&iacute;dica &uacute;nica";
 choices[49][2] = "personalidad jur&iacute;dica plena";
 choices[49][3] = "personalidad jur&iacute;dica f&iacute;sica";
 answers[49] = choices[49][1];
 units[49] = "4, 7, 8, 9";
 comments[49] = "Id Pregunta: 772. Ley 40/2015";


//  Id pregunta: 505 Año de creación de pregunta: 2016
 questions[50]= "51)  Respecto a la regla de gasto. Se&ntilde;ale la respuesta falsa:";
 choices[50]= new Array();
 choices[50][0] = "La variaci&oacute;n del gasto computable de la Administraci&oacute;n Central, de las Comunidades Aut&oacute;nomas y de las Corporaciones Locales, no podr&aacute; superar la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola.";
 choices[50][1] = "No obstante, cuando exista un desequilibrio estructural en las cuentas p&uacute;blicas o una deuda p&uacute;blica superior al objetivo establecido, el crecimiento del gasto p&uacute;blico computable se ajustar&aacute; a la senda establecida en los respectivos planes econ&oacute;mico-financieros y de reequilibrio previstos.";
 choices[50][2] = "Corresponde al Ministerio de Econom&iacute;a y Competitividad calcular la tasa de referencia de crecimiento del Producto Interior Bruto de medio plazo de la econom&iacute;a espa&ntilde;ola, de acuerdo con la metodolog&iacute;a utilizada por la Comisi&oacute;n Europea en aplicaci&oacute;n de su normativa.";
 choices[50][3] = "Esta tasa se publicar&aacute; en el informe de situaci&oacute;n de la econom&iacute;a. Ser&aacute; la referencia a tener en cuenta por la Administraci&oacute;n Central en la elaboraci&oacute;n de sus Presupuestos.";
 answers[50] = choices[50][3];
 units[50] = "10";
 comments[50] = "Id Pregunta: 505. PRESUPUESTOS GENERALES";


//  Id pregunta: 814 Año de creación de pregunta: 2016
 questions[51]= "52)  Podr&aacute;n crearse por Real Decreto Subdelegaciones del Gobierno en las Comunidades Aut&oacute;nomas uniprovinciales, cuando lo justifiquen circunstancias como:";
 choices[51]= new Array();
 choices[51][0] = "la poblaci&oacute;n del territorio";
 choices[51][1] = "el volumen de gesti&oacute;n";
 choices[51][2] = "sus singularidades geogr&aacute;ficas, sociales o econ&oacute;micas";
 choices[51][3] = "todas son correctas";
 answers[51] = choices[51][3];
 units[51] = "4, 7, 8, 9";
 comments[51] = "Id Pregunta: 814. Ley 40/2015";


//  Id pregunta: 508 Año de creación de pregunta: 2016
 questions[52]= "53)  La Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, se dict&oacute; en desarrollo de lo indicado en:";
 choices[52]= new Array();
 choices[52][0] = "El art&iacute;culo 131 de la Constituci&oacute;n que establece que el Estado, mediante ley, podr&aacute; planificar la actividad econ&oacute;mica general para atender a las necesidades colectivas, equilibrar y armonizar el desarrollo regional y sectorial y estimular el crecimiento de la renta y de la riqueza y su m&aacute;s justa distribuci&oacute;n.";
 choices[52][1] = "El art&iacute;culo 134.1 de la Constituci&oacute;n que establece que corresponde al Gobierno la elaboraci&oacute;n de los Presupuestos Generales del Estado y a las Cortes Generales, su examen, enmienda y aprobaci&oacute;n.";
 choices[52][2] = "La Disposici&oacute;n Adicional &Uacute;nica de la Reforma del art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola, de 27 de septiembre de 2011 .";
 choices[52][3] = "El art&iacute;culo 135.2 de la Constituci&oacute;n que establec&iacute;a que los cr&eacute;ditos para satisfacer el pago de intereses y capital de la Deuda P&uacute;blica del Estado se entender&aacute;n siempre incluidos en el estado de gastos de los presupuestos y no podr&aacute;n ser objeto de enmienda o modificaci&oacute;n, mientras se ajusten a las condiciones de la ley de emisi&oacute;n.";
 answers[52] = choices[52][3];
 units[52] = "10";
 comments[52] = "Id Pregunta: 508. PRESUPUESTOS GENERALES";


//  Id pregunta: 768 Año de creación de pregunta: 2016
 questions[53]= "54)  Las Administraciones P&uacute;blicas sirven con objetividad los intereses generales, con sometimiento pleno a la Constituci&oacute;n, a la Ley y al Derecho y act&uacute;an de acuerdo con los principios de:";
 choices[53]= new Array();
 choices[53][0] = "eficacia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[53][1] = "eficiencia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 choices[53][2] = "eficacia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[53][3] = "eficiencia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 answers[53] = choices[53][2];
 units[53] = "4, 7, 8, 9";
 comments[53] = "Id Pregunta: 768. Ley 40/2015";


//  Id pregunta: 769 Año de creación de pregunta: 2016
 questions[54]= "55)  Las Administraciones P&uacute;blicas deber&aacute;n respetar en su actuaci&oacute;n y relaciones los siguientes principios:";
 choices[54]= new Array();
 choices[54][0] = "simplicidad, claridad y proximidad a los ciudadanos";
 choices[54][1] = "participaci&oacute;n, objetividad y transparencia de la actuaci&oacute;n administrativa";
 choices[54][2] = "responsabilidad por la gesti&oacute;n p&uacute;blica";
 choices[54][3] = "todas son correctas";
 answers[54] = choices[54][3];
 units[54] = "4, 7, 8, 9";
 comments[54] = "Id Pregunta: 769. Ley 40/2015";


//  Id pregunta: 525 Año de creación de pregunta: 2016
 questions[55]= "56)  Cuando la condici&oacute;n de interesado derivase de alguna relaci&oacute;n jur&iacute;dica transmisible el derecho-habiente suceder&aacute; en tal condici&oacute;n:";
 choices[55]= new Array();
 choices[55][0] = "si el procedimiento no ha alcanzado la fase de instrucci&oacute;n";
 choices[55][1] = "si el procedimiento no ha alcanzado el tr&aacute;mite de audiencia";
 choices[55][2] = "si el procedimiento no ha alcanzado el tr&aacute;mite de informaci&oacute;n p&uacute;blica";
 choices[55][3] = "cualquiera que sea el estado del procedimiento";
 answers[55] = choices[55][3];
 units[55] = "7";
 comments[55] = "Id Pregunta: 525. LEY 39/2015";


//  Id pregunta: 506 Año de creación de pregunta: 2016
 questions[56]= "57)  La Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, responde a la reforma del art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola, (en adelante CE) e incorpora tres nuevos principios con respecto a la derogada Ley Org&aacute;nica 5/2001, de 13 de diciembre, complementaria a la Ley General de Estabilidad Presupuestaria ,Cu&aacute;les son?";
 choices[56]= new Array();
 choices[56][0] = "Estabilidad presupuestaria, plurianualidad, y responsabilidad.";
 choices[56][1] = "Sostenibilidad financiera, responsabilidad y transparencia.";
 choices[56][2] = "Plurianualidad, lealtad institucional y eficiencia en la asignaci&oacute;n de los recursos p&uacute;blicos";
 choices[56][3] = "Responsabilidad, sostenibilidad financiera y lealtad institucional.";
 answers[56] = choices[56][3];
 units[56] = "10";
 comments[56] = "Id Pregunta: 506. PRESUPUESTOS GENERALES";


//  Id pregunta: 490 Año de creación de pregunta: 2016
 questions[57]= "58)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la obligaci&oacute;n de pagar los intereses de la Deuda del Estado y la de devolver los capitales llamados a reembolso, contados respectivamente a partir del vencimiento de los intereses y del d&iacute;a del llamamiento a reembolso prescribir&aacute;:";
 choices[57]= new Array();
 choices[57][0] = "A los cinco a&ntilde;os.";
 choices[57][1] = "A los dos a&ntilde;os.";
 choices[57][2] = "A los tres a&ntilde;os.";
 choices[57][3] = "A los cuatro a&ntilde;os.";
 answers[57] = choices[57][0];
 units[57] = "10";
 comments[57] = "Id Pregunta: 490. PRESUPUESTOS GENERALES";


//  Id pregunta: 843 Año de creación de pregunta: 2016
 questions[58]= "59)  Respecto a la reutilizaci&oacute;n de sistemas y aplicaciones de propiedad de la Administraci&oacute;n:";
 choices[58]= new Array();
 choices[58][0] = "Las Administraciones pondr&aacute;n siempre a disposici&oacute;n de cualquiera de ellas que lo solicite las aplicaciones, desarrolladas por sus servicios o que hayan sido objeto de contrataci&oacute;n y de cuyos derechos de propiedad intelectual sean titulares.";
 choices[58][1] = "Las aplicaciones a las que se refiere el apartado anterior podr&aacute;n ser declaradas como de fuentes abiertas, cuando de ello se derive una mayor transparencia en el funcionamiento de la Administraci&oacute;n P&uacute;blica o se fomente con ello la incorporaci&oacute;n de los ciudadanos a la Sociedad de la informaci&oacute;n.";
 choices[58][2] = "Las Administraciones P&uacute;blicas, con car&aacute;cter posterior a la adquisici&oacute;n, desarrollo o al mantenimiento a lo largo de todo el ciclo de vida de una aplicaci&oacute;n, tanto si se realiza con medios propios o por la contrataci&oacute;n de los servicios correspondientes, deber&aacute;n consultar en el directorio general de aplicaciones.";
 choices[58][3] = "En el directorio general de aplicaciones constar&aacute;n las aplicaciones disponibles de la Administraci&oacute;n General del Estado.";
 answers[58] = choices[58][1];
 units[58] = "4, 7, 8, 9";
 comments[58] = "Id Pregunta: 843. Ley 40/2015";


//  Id pregunta: 473 Año de creación de pregunta: 2016
 questions[59]= "60)  Seg&uacute;n el art&iacute;culo de la Ley 47/2003, de 26 de noviembre, General Presupuestaria , el r&eacute;gimen econ&oacute;mico y financiero del sector p&uacute;blico estatal se regula en:";
 choices[59]= new Array();
 choices[59][0] = "Ley 50/1997, del Gobierno.";
 choices[59][1] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 choices[59][2] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la Administraci&oacute;n General del Estado.";
 choices[59][3] = "La Ley General de la Hacienda P&uacute;blica.";
 answers[59] = choices[59][1];
 units[59] = "10";
 comments[59] = "Id Pregunta: 473. PRESUPUESTOS GENERALES";


//  Id pregunta: 500 Año de creación de pregunta: 2016
 questions[60]= "61)  Conforme a la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el programa plurianual de la Seguridad Social se elaborar&aacute; por:";
 choices[60]= new Array();
 choices[60][0] = "El presidente de las Cortes Generales.";
 choices[60][1] = "El Presidente del Gobierno.";
 choices[60][2] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[60][3] = "El Ministro de Trabajo y Asuntos Sociales.";
 answers[60] = choices[60][3];
 units[60] = "10";
 comments[60] = "Id Pregunta: 500. PRESUPUESTOS GENERALES";


//  Id pregunta: 840 Año de creación de pregunta: 2016
 questions[61]= "62)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Indique la respuesta correcta.";
 choices[61]= new Array();
 choices[61][0] = "Para la v&aacute;lida constituci&oacute;n del &oacute;rgano, a efectos de la celebraci&oacute;n de sesiones, deliberaciones y toma de acuerdos, se requerir&aacute; la asistencia, presencial o a distancia, del Presidente y Secretario o en su caso, de quienes les suplan, y la de la mitad de sus miembros.";
 choices[61][1] = "Cuando se trate de los &oacute;rganos colegiados a que se refiere el art&iacute;culo 15.2, el Presidente podr&aacute; considerar v&aacute;lidamente constituido el &oacute;rgano, a efectos de celebraci&oacute;n de sesi&oacute;n, si asisten los representantes de las Administraciones P&uacute;blicas y de las organizaciones representativas de intereses sociales miembros del &oacute;rgano a los que se haya atribuido la condici&oacute;n de portavoces.";
 choices[61][2] = "Cuando estuvieran reunidos, de manera presencial o a distancia, el Secretario y todos los miembros del &oacute;rgano colegiado, o en su caso las personas que les suplan, &eacute;stos podr&aacute;n constituirse v&aacute;lidamente como &oacute;rgano colegiado para la celebraci&oacute;n de sesiones, deliberaciones y adopci&oacute;n de acuerdos sin necesidad de convocatoria previa cuando as&iacute; lo decida el Presidente.";
 choices[61][3] = "Todas son correctas.";
 answers[61] = choices[61][1];
 units[61] = "4, 7, 8, 9";
 comments[61] = "Id Pregunta: 840. Ley 40/2015";


//  Id pregunta: 845 Año de creación de pregunta: 2016
 questions[62]= "63)  Se&ntilde;ale la respuesta falsa:";
 choices[62]= new Array();
 choices[62][0] = "Cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, especificando las condiciones, protocolos y criterios funcionales o t&eacute;cnicos necesarios para acceder a dichos datos con las m&aacute;ximas garant&iacute;as de seguridad, integridad y disponibilidad.";
 choices[62][1] = "La disponibilidad de tales datos estar&aacute; limitada estrictamente a aquellos que son requeridos a los interesados por las restantes Administraciones para la tramitaci&oacute;n y resoluci&oacute;n de los procedimientos y actuaciones de su competencia, de acuerdo con la normativa reguladora de los mismos.";
 choices[62][2] = "De conformidad con lo dispuesto en la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal y su normativa de desarrollo, cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, siendo preceptiva la firma del convenio correspondiente.";
 choices[62][3] = "La Administraci&oacute;n General del Estado, las Administraciones Auton&oacute;micas y las Entidades Locales, adoptar&aacute;n las medidas necesarias e incorporar&aacute;n en sus respectivos &aacute;mbitos las tecnolog&iacute;as precisas para posibilitar la interconexi&oacute;n de sus redes";
 answers[62] = choices[62][2];
 units[62] = "4, 7, 8, 9";
 comments[62] = "Id Pregunta: 845. Ley 40/2015";


//  Id pregunta: 781 Año de creación de pregunta: 2016
 questions[63]= "64)  La Administraci&oacute;n consultiva podr&aacute; articularse:";
 choices[63]= new Array();
 choices[63][0] = "mediante &oacute;rganos espec&iacute;ficos dotados de autonom&iacute;a org&aacute;nica y funcional con respecto a la Administraci&oacute;n activa";
 choices[63][1] = "a trav&eacute;s de los servicios de la Administraci&oacute;n activa que prestan asistencia jur&iacute;dica";
 choices[63][2] = "a y b son correctas";
 choices[63][3] = "a y b son incorrectas";
 answers[63] = choices[63][2];
 units[63] = "4, 7, 8, 9";
 comments[63] = "Id Pregunta: 781. Ley 40/2015";


