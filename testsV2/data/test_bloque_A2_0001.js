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

//  Id pregunta: 534 Año de creación de pregunta: 2016
 questions[0]= "1)  Deber&aacute; incorporar al expediente administrativo acreditaci&oacute;n de la condici&oacute;n de representante y de los poderes que tiene reconocidos en dicho momento:";
 choices[0]= new Array();
 choices[0][0] = "el &oacute;rgano competente para la iniciaci&oacute;n del procedimiento";
 choices[0][1] = "el &oacute;rgano competente para la instrucci&oacute;n del procedimiento";
 choices[0][2] = "el &oacute;rgano competente para la tramitaci&oacute;n del procedimiento";
 choices[0][3] = "el &oacute;rgano competente para la terminaci&oacute;n del procedimiento";
 answers[0] = choices[0][2];
 units[0] = "7";
 comments[0] = "Id Pregunta: 534. LEY 39/2015";
 preguntaids[0] = 534


//  Id pregunta: 459 Año de creación de pregunta: 2016
 questions[1]= "2)  Seg&uacute;n el art&iacute;culo 44.3 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los cr&eacute;ditos para la acci&oacute;n protectora en su modalidad no contributiva y universal se especificar&aacute;n:";
 choices[1]= new Array();
 choices[1][0] = "A nivel de secci&oacute;n de programa.";
 choices[1][1] = "A nivel de grupo de programa.";
 choices[1][2] = "Ninguna de las respuestas es correcta.";
 choices[1][3] = "A nivel de programa.";
 answers[1] = choices[1][3];
 units[1] = "10";
 comments[1] = "Id Pregunta: 459. PRESUPUESTOS GENERALES";
 preguntaids[1] = 459


//  Id pregunta: 671 Año de creación de pregunta: 2016
 questions[2]= "3)  Un procedimiento administrativo finalizar&aacute;, seg&uacute;n la Ley 39/2015, por:";
 choices[2]= new Array();
 choices[2][0] = "Resoluci&oacute;n.";
 choices[2][1] = "Desistimiento o renuncia.";
 choices[2][2] = "Caducidad.";
 choices[2][3] = "Todas las anteriores.";
 answers[2] = choices[2][3];
 units[2] = "7";
 comments[2] = "Id Pregunta: 671. Art&iacute;culo 84 de la Ley 39/2015";
 preguntaids[2] = 671


//  Id pregunta: 486 Año de creación de pregunta: 2016
 questions[3]= "4)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, dirigir la contabilidad de las entidades que integran el sistema de la Seguridad Social y gestionar la contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una funci&oacute;n de:";
 choices[3]= new Array();
 choices[3][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[3][1] = "La Intervenci&oacute;n General de la Seguridad Social.";
 choices[3][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[3][3] = "La Intervenci&oacute;n General de la Defensa.";
 answers[3] = choices[3][2];
 units[3] = "10";
 comments[3] = "Id Pregunta: 486. PRESUPUESTOS GENERALES";
 preguntaids[3] = 486


//  Id pregunta: 770 Año de creación de pregunta: 2016
 questions[4]= "5)  Las Administraciones P&uacute;blicas sirven con objetividad los intereses generales, con sometimiento pleno a la Constituci&oacute;n, a la Ley y al Derecho y act&uacute;an de acuerdo con los principios de:";
 choices[4]= new Array();
 choices[4][0] = "eficacia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[4][1] = "eficiencia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 choices[4][2] = "eficacia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[4][3] = "eficiencia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 answers[4] = choices[4][2];
 units[4] = "4, 7, 8, 9";
 comments[4] = "Id Pregunta: 770. Ley 40/2015";
 preguntaids[4] = 770


//  Id pregunta: 452 Año de creación de pregunta: 2016
 questions[5]= "6)  Los Presupuestos Generales son expresi&oacute;n...";
 choices[5]= new Array();
 choices[5][0] = "Cifrada";
 choices[5][1] = "Conjunta";
 choices[5][2] = "Sistem&aacute;tica";
 choices[5][3] = "Todas son correctas";
 answers[5] = choices[5][3];
 units[5] = "10";
 comments[5] = "Id Pregunta: 452. PRESUPUESTOS GENERALES";
 preguntaids[5] = 452


//  Id pregunta: 824 Año de creación de pregunta: 2016
 questions[6]= "7)  &iquest;Cu&aacute;l de los siguientes no ser&iacute;a un motivo de abstenci&oacute;n conforme el art. 23 de la Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[6]= new Array();
 choices[6][0] = "Ser el personal respecto del que la abstenci&oacute;n se plantea sobrino del interesado en el procedimiento";
 choices[6][1] = "Ser el personal respecto del que la abstenci&oacute;n se plantea vecino del interesado en el procedimiento";
 choices[6][2] = "Ser el personal respecto del que la abstenci&oacute;n se plantea cu&ntilde;ado del interesado en el procedimiento";
 choices[6][3] = "Ser el personal respecto del que la abstenci&oacute;n se plantea nieto del interesado en el procedimiento";
 answers[6] = choices[6][2];
 units[6] = "4, 7, 8, 9";
 comments[6] = "Id Pregunta: 824. Ley 40/2015";
 preguntaids[6] = 824


//  Id pregunta: 516 Año de creación de pregunta: 2016
 questions[7]= "8)  El sector p&uacute;blico institucional se integra por:";
 choices[7]= new Array();
 choices[7][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[7][1] = "las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas";
 choices[7][2] = "las Universidades p&uacute;blicas";
 choices[7][3] = "todas son correctas";
 answers[7] = choices[7][3];
 units[7] = "7";
 comments[7] = "Id Pregunta: 516. LEY 39/2015";
 preguntaids[7] = 516


//  Id pregunta: 537 Año de creación de pregunta: 2016
 questions[8]= "9)  Dispondr&aacute;/n de un registro electr&oacute;nico general de apoderamientos:";
 choices[8]= new Array();
 choices[8][0] = "la Administraci&oacute;n General del Estado";
 choices[8][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[8][2] = "las Entidades Locales";
 choices[8][3] = "todas son correctas";
 answers[8] = choices[8][3];
 units[8] = "7";
 comments[8] = "Id Pregunta: 537. LEY 39/2015";
 preguntaids[8] = 537


//  Id pregunta: 146 Año de creación de pregunta: 2016
 questions[9]= "10)  La declaraci&oacute;n de lesividad de los actos anulables:";
 choices[9]= new Array();
 choices[9][0] = "No podr&aacute; adoptarse una vez transcurridos cuatro a&ntilde;os desde que se dict&oacute; el acto administrativo";
 choices[9][1] = "No es necesaria para impugnar ante el orden jurisdiccional contencioso-administrativo los actos favorables para los interesados";
 choices[9][2] = "Se adoptar&aacute; en todo caso por el Consejo de Estado";
 choices[9][3] = "Si el acto proviniera de las entidades que integran la Administraci&oacute;n Local, la declaraci&oacute;n de lesividad se adoptar&aacute; por la Comunidad Aut&oacute;noma a la que pertenece dicha entidad";
 answers[9] = choices[9][0];
 units[9] = "8";
 comments[9] = "Id Pregunta: 146. Ley 39/2015, Art&iacute;culo 107";
 preguntaids[9] = 146


//  Id pregunta: 795 Año de creación de pregunta: 2016
 questions[10]= "11)  Todos los &oacute;rganos de la Administraci&oacute;n General del Estado que no sean &oacute;rgano superior o directivo se encuentran bajo la dependencia o direcci&oacute;n de:";
 choices[10]= new Array();
 choices[10][0] = "un &oacute;rgano superior";
 choices[10][1] = "un &oacute;rgano directivo";
 choices[10][2] = "un &oacute;rgano superior o directivo";
 choices[10][3] = "ninguna es correcta";
 answers[10] = choices[10][2];
 units[10] = "4, 7, 8, 9";
 comments[10] = "Id Pregunta: 795. Ley 40/2015";
 preguntaids[10] = 795


//  Id pregunta: 799 Año de creación de pregunta: 2016
 questions[11]= "12)  Los elementos organizativos b&aacute;sicos de las estructuras org&aacute;nicas son:";
 choices[11]= new Array();
 choices[11][0] = "los &oacute;rganos administrativos";
 choices[11][1] = "las entidades dependientes";
 choices[11][2] = "las unidades administrativas";
 choices[11][3] = "los servicios comunes";
 answers[11] = choices[11][2];
 units[11] = "4, 7, 8, 9";
 comments[11] = "Id Pregunta: 799. Ley 40/2015";
 preguntaids[11] = 799


//  Id pregunta: 796 Año de creación de pregunta: 2016
 questions[12]= "13)  Los estatutos de los Organismos p&uacute;blicos determinar&aacute;n sus respectivos:";
 choices[12]= new Array();
 choices[12][0] = "&oacute;rganos superiores";
 choices[12][1] = "&oacute;rganos directivos";
 choices[12][2] = "&oacute;rganos superiores y directivos";
 choices[12][3] = "ninguna es correcta";
 answers[12] = choices[12][1];
 units[12] = "4, 7, 8, 9";
 comments[12] = "Id Pregunta: 796. Ley 40/2015";
 preguntaids[12] = 796


//  Id pregunta: 513 Año de creación de pregunta: 2016
 questions[13]= "14)  Cuando resulte eficaz, proporcionado y necesario para la consecuci&oacute;n de los fines propios del procedimiento, y de manera motivada, podr&aacute;n incluirse tr&aacute;mites adicionales o distintos a los contemplados en esta Ley:";
 choices[13]= new Array();
 choices[13][0] = "solo mediante ley";
 choices[13][1] = "reglamentariamente";
 choices[13][2] = "mediante ley o reglamentariamente";
 choices[13][3] = "ninguna es correcta";
 answers[13] = choices[13][0];
 units[13] = "7";
 comments[13] = "Id Pregunta: 513. LEY 39/2015";
 preguntaids[13] = 513


//  Id pregunta: 794 Año de creación de pregunta: 2016
 questions[14]= "15)  Tienen la condici&oacute;n de alto cargo:";
 choices[14]= new Array();
 choices[14][0] = "los &oacute;rganos superiores";
 choices[14][1] = "los &oacute;rganos superiores y directivos";
 choices[14][2] = "los &oacute;rganos superiores y directivos, excepto los Subdirectores generales y asimilados";
 choices[14][3] = "los &oacute;rganos superiores y directivos, excepto los Secretarios generales y asimilados";
 answers[14] = choices[14][2];
 units[14] = "4, 7, 8, 9";
 comments[14] = "Id Pregunta: 794. Ley 40/2015";
 preguntaids[14] = 794


//  Id pregunta: 828 Año de creación de pregunta: 2016
 questions[15]= "16)  La recusaci&oacute;n pueden promoverla...";
 choices[15]= new Array();
 choices[15][0] = "Cualquier &oacute;rgano";
 choices[15][1] = "El interesado";
 choices[15][2] = "El interesado y el superior jer&aacute;rquico del &oacute;rgano de que se trate";
 choices[15][3] = "El interesado, el superior jer&aacute;rquico del &oacute;rgano de que se trate y el propio &oacute;rgano";
 answers[15] = choices[15][0];
 units[15] = "4, 7, 8, 9";
 comments[15] = "Id Pregunta: 828. Ley 40/2015";
 preguntaids[15] = 828


//  Id pregunta: 832 Año de creación de pregunta: 2016
 questions[16]= "17)  Contra las resoluciones en materia de abstenci&oacute;n y recusaci&oacute;n...";
 choices[16]= new Array();
 choices[16][0] = "Cabr&aacute; recurso de alzada";
 choices[16][1] = "Cabr&aacute; el nuevo protesto";
 choices[16][2] = "Cabr&aacute; recurso de reposici&oacute;n";
 choices[16][3] = "No cabr&aacute; recurso alguno";
 answers[16] = choices[16][3];
 units[16] = "4, 7, 8, 9";
 comments[16] = "Id Pregunta: 832. Ley 40/2015";
 preguntaids[16] = 832


//  Id pregunta: 503 Año de creación de pregunta: 2016
 questions[17]= "18)  De acuerdo con el art&iacute;culo 64 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, qui&eacute;n elaborar&aacute; un presupuesto de explotaci&oacute;n que detallara los recursos y dotaciones anuales correspondientes:";
 choices[17]= new Array();
 choices[17][0] = "Las sociedades mercantiles estatales.";
 choices[17][1] = "Las entidades p&uacute;blicas empresariales.";
 choices[17][2] = "Las respuestas a) y b) son correctas.";
 choices[17][3] = "Las respuestas a) y b) no son correctas.";
 answers[17] = choices[17][2];
 units[17] = "10";
 comments[17] = "Id Pregunta: 503. PRESUPUESTOS GENERALES";
 preguntaids[17] = 503


//  Id pregunta: 835 Año de creación de pregunta: 2016
 questions[18]= "19)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta correcta.";
 choices[18]= new Array();
 choices[18][0] = "La competencia es irrenunciable y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[18][1] = "La competencia es imprescriptible y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[18][2] = "La competencia es inviolable y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[18][3] = "Todas son correctas.";
 answers[18] = choices[18][0];
 units[18] = "4, 7, 8, 9";
 comments[18] = "Id Pregunta: 835. Ley 40/2015";
 preguntaids[18] = 835


//  Id pregunta: 155 Año de creación de pregunta: 2016
 questions[19]= "20)  A efectos del c&oacute;mputo de plazo fijado en d&iacute;as h&aacute;biles, y en lo que se refiere al cumplimiento de plazos por los interesados, la presentaci&oacute;n de documentos en un registro electr&oacute;nico un d&iacute;a inh&aacute;bil:";
 choices[19]= new Array();
 choices[19][0] = "se entender&aacute; realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil.";
 choices[19][1] = "se entender&aacute;, en todo caso, realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior";
 choices[19][2] = "se entender&aacute; realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil";
 choices[19][3] = "se entender&aacute;, en todo caso, realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente";
 answers[19] = choices[19][2];
 units[19] = "7";
 comments[19] = "Id Pregunta: 155. Ley 39/2015, Art&iacute;culo 31";
 preguntaids[19] = 155


//  Id pregunta: 804 Año de creación de pregunta: 2016
 questions[20]= "21)  Los Secretarios generales t&eacute;cnicos:";
 choices[20]= new Array();
 choices[20][0] = "se encuentran bajo la inmediata dependencia del Subsecretario";
 choices[20][1] = "tendr&aacute;n las competencias sobre servicios comunes que les atribuya el Real Decreto de estructura del Departamento";
 choices[20][2] = "tendr&aacute;n las competencias relativas a producci&oacute;n normativa, asistencia jur&iacute;dica y publicaciones";
 choices[20][3] = "todas son correctas";
 answers[20] = choices[20][3];
 units[20] = "4, 7, 8, 9";
 comments[20] = "Id Pregunta: 804. Ley 40/2015";
 preguntaids[20] = 804


//  Id pregunta: 479 Año de creación de pregunta: 2016
 questions[21]= "22)  Se&ntilde;ale, de acuerdo con la Ley General Presupuestaria, cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[21]= new Array();
 choices[21][0] = "La Ley General Presupuestaria permite realizar trasferencias de cr&eacute;dito desde el Cap&iacute;tulo 6 de los Presupuestos generales del Estado al Cap&iacute;tulo 2.";
 choices[21][1] = "Es competencia del Consejo de Ministros la autorizaci&oacute;n de generaciones de cr&eacute;dito.";
 choices[21][2] = "Los cr&eacute;ditos extraordinarios por necesidades surgidas en operaciones financieras se financian con Deuda P&uacute;blica o con baja en otros cr&eacute;ditos de la misma naturaleza.";
 choices[21][3] = "Excepcionalmente tendr&aacute;n la condici&oacute;n de ampliables los cr&eacute;ditos destinados al pago de los salarios de los empleados p&uacute;blicos.";
 answers[21] = choices[21][2];
 units[21] = "10";
 comments[21] = "Id Pregunta: 479. PRESUPUESTOS GENERALES";
 preguntaids[21] = 479


//  Id pregunta: 458 Año de creación de pregunta: 2016
 questions[22]= "23)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los escenarios presupuestarios plurianuales contendr&aacute;n la distribuci&oacute;n org&aacute;nica de los recursos disponibles y se desarrollar&aacute;n en programas plurianuales, referidos a:";
 choices[22]= new Array();
 choices[22][0] = "a) Los cuatro ejercicios siguientes.";
 choices[22][1] = "b) El ejercicio siguiente.";
 choices[22][2] = "c) Los dos ejercicios siguientes.";
 choices[22][3] = "d) Los tres ejercicios siguientes.";
 answers[22] = choices[22][3];
 units[22] = "10";
 comments[22] = "Id Pregunta: 458. PRESUPUESTOS GENERALES";
 preguntaids[22] = 458


//  Id pregunta: 485 Año de creación de pregunta: 2016
 questions[23]= "24)  La Ley 47/2003, de 26 de noviembre, General Presupuestaria se encuentra formada por:";
 choices[23]= new Array();
 choices[23][0] = "180 art&iacute;culos.";
 choices[23][1] = "182 art&iacute;culos.";
 choices[23][2] = "185 art&iacute;culos.";
 choices[23][3] = "190 art&iacute;culos.";
 answers[23] = choices[23][1];
 units[23] = "10";
 comments[23] = "Id Pregunta: 485. PRESUPUESTOS GENERALES";
 preguntaids[23] = 485


//  Id pregunta: 494 Año de creación de pregunta: 2016
 questions[24]= "25)  El R&eacute;gimen Jur&iacute;dico de la Deuda del Estado se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[24]= new Array();
 choices[24][0] = "T&iacute;tulo V, Cap&iacute;tulo II, Secci&oacute;n 4.";
 choices[24][1] = "T&iacute;tulo V, Cap&iacute;tulo I, Secci&oacute;n 2.";
 choices[24][2] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[24][3] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[24] = choices[24][2];
 units[24] = "10";
 comments[24] = "Id Pregunta: 494. PRESUPUESTOS GENERALES";
 preguntaids[24] = 494


//  Id pregunta: 821 Año de creación de pregunta: 2016
 questions[25]= "26)  Los Delegados del Gobierno (se&ntilde;ala la incorrecta):";
 choices[25]= new Array();
 choices[25][0] = "representan al Gobierno de la Naci&oacute;n en el territorio de la respectiva Comunidad Aut&oacute;noma";
 choices[25][1] = "dirigir&aacute;n y supervisar&aacute;n la Administraci&oacute;n General del Estado en el territorio de las respectivas Comunidades Aut&oacute;nomas";
 choices[25][2] = "son &oacute;rganos directivos con rango de Director general";
 choices[25][3] = "ser&aacute;n nombrados y separados por Real Decreto del Consejo de Ministros, a propuesta del Presidente del Gobierno";
 answers[25] = choices[25][2];
 units[25] = "4, 7, 8, 9";
 comments[25] = "Id Pregunta: 821. Ley 40/2015";
 preguntaids[25] = 821


//  Id pregunta: 817 Año de creación de pregunta: 2016
 questions[26]= "27)  Se determinar&aacute;n las islas en las que existir&aacute; un Director Insular de la Administraci&oacute;n General del Estado:";
 choices[26]= new Array();
 choices[26][0] = "por Real Decreto";
 choices[26][1] = "reglamentariamente";
 choices[26][2] = "mediante Ley";
 choices[26][3] = "ninguna es correcta";
 answers[26] = choices[26][1];
 units[26] = "4, 7, 8, 9";
 comments[26] = "Id Pregunta: 817. Ley 40/2015";
 preguntaids[26] = 817


//  Id pregunta: 480 Año de creación de pregunta: 2016
 questions[27]= "28)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la funci&oacute;n interventora se ejercer&aacute; en sus modalidades de:";
 choices[27]= new Array();
 choices[27][0] = "Intervenci&oacute;n f&iacute;sica y general.";
 choices[27][1] = "Intervenci&oacute;n formal y material.";
 choices[27][2] = "Intervenci&oacute;n f&iacute;sica y material.";
 choices[27][3] = "Intervenci&oacute;n formal y general.";
 answers[27] = choices[27][1];
 units[27] = "10";
 comments[27] = "Id Pregunta: 480. PRESUPUESTOS GENERALES";
 preguntaids[27] = 480


//  Id pregunta: 846 Año de creación de pregunta: 2016
 questions[28]= "29)  &iquest;Qu&eacute; t&eacute;cnica de cooperaci&oacute;n se regula por primera vez con la Ley 40/2015?";
 choices[28]= new Array();
 choices[28][0] = "Conferencia de Presidentes.";
 choices[28][1] = "Convenios de colaboraci&oacute;n.";
 choices[28][2] = "Comisiones Bilaterales de Cooperaci&oacute;n.";
 choices[28][3] = "Conferencias Sectoriales.";
 answers[28] = choices[28][0];
 units[28] = "4, 7, 8, 9";
 comments[28] = "Id Pregunta: 846. Ley 40/2015";
 preguntaids[28] = 846


//  Id pregunta: 765 Año de creación de pregunta: 2016
 questions[29]= "30)  La presente Ley se aplica al sector p&uacute;blico que comprende (se&ntilde;ala la incorrecta):";
 choices[29]= new Array();
 choices[29][0] = "la Administraci&oacute;n General del Estado";
 choices[29][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[29][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[29][3] = "el sector p&uacute;blico y privado institucional";
 answers[29] = choices[29][3];
 units[29] = "4, 7, 8, 9";
 comments[29] = "Id Pregunta: 765. Ley 40/2015";
 preguntaids[29] = 765


//  Id pregunta: 809 Año de creación de pregunta: 2016
 questions[30]= "31)  Los Directores generales ser&aacute;n nombrados y separados por:";
 choices[30]= new Array();
 choices[30][0] = "Real Decreto del Consejo de Ministros, a propuesta del titular del Departamento o del Presidente del Gobierno";
 choices[30][1] = "Ley de las Cortes Generales, a propuesta del titular del Departamento";
 choices[30][2] = "Ley de las Cortes Generales, a propuesta del titular del Departamento o del Presidente del Gobierno";
 choices[30][3] = "Real Decreto del Consejo de Ministros, a propuesta del titular del Departamento";
 answers[30] = choices[30][0];
 units[30] = "4, 7, 8, 9";
 comments[30] = "Id Pregunta: 809. Ley 40/2015";
 preguntaids[30] = 809


//  Id pregunta: 798 Año de creación de pregunta: 2016
 questions[31]= "32)  Sin perjuicio de lo previsto en la Ley 3/2015, de 30 de marzo, reguladora del ejercicio del alto cargo de la Administraci&oacute;n General del Estado, los titulares de los &oacute;rganos superiores y directivos son nombrados, atendiendo a criterios de competencia profesional y experiencia, en la forma establecida en esta Ley, siendo de aplicaci&oacute;n al desempe&ntilde;o de sus funciones:";
 choices[31]= new Array();
 choices[31][0] = "la responsabilidad profesional, personal y directa por la gesti&oacute;n desarrollada";
 choices[31][1] = "la sujeci&oacute;n al control y evaluaci&oacute;n de la gesti&oacute;n por el &oacute;rgano superior o directivo competente, sin perjuicio del control establecido por la Ley General Presupuestaria";
 choices[31][2] = "a y b son correctas";
 choices[31][3] = "a y b son incorrectas";
 answers[31] = choices[31][2];
 units[31] = "4, 7, 8, 9";
 comments[31] = "Id Pregunta: 798. Ley 40/2015";
 preguntaids[31] = 798


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
 preguntaids[32] = 151


//  Id pregunta: 810 Año de creación de pregunta: 2016
 questions[33]= "34)  Ostentan la representaci&oacute;n ordinaria del Ministerio:";
 choices[33]= new Array();
 choices[33][0] = "los Secretarios de Estado";
 choices[33][1] = "los Ministros";
 choices[33][2] = "los Subsecretarios";
 choices[33][3] = "los Secretarios generales";
 answers[33] = choices[33][2];
 units[33] = "4, 7, 8, 9";
 comments[33] = "Id Pregunta: 810. Ley 40/2015";
 preguntaids[33] = 810


//  Id pregunta: 533 Año de creación de pregunta: 2016
 questions[34]= "35)  Se entender&aacute; acreditada la representaci&oacute;n realizada:";
 choices[34]= new Array();
 choices[34][0] = "mediante apoderamiento apud acta efectuado por comparecencia personal";
 choices[34][1] = "mediante apoderamiento apud acta efectuado por comparecencia electr&oacute;nica en la correspondiente sede electr&oacute;nica";
 choices[34][2] = "a trav&eacute;s de la acreditaci&oacute;n de su inscripci&oacute;n en el registro electr&oacute;nico de apoderamientos de la Administraci&oacute;n P&uacute;blica competente";
 choices[34][3] = "todas son correctas";
 answers[34] = choices[34][3];
 units[34] = "7";
 comments[34] = "Id Pregunta: 533. LEY 39/2015";
 preguntaids[34] = 533


//  Id pregunta: 666 Año de creación de pregunta: 2016
 questions[35]= "36)  De acuerdo a la Ley 39/2015, el formato del expediente administrativo ser&aacute;:";
 choices[35]= new Array();
 choices[35][0] = "Siempre en formato electr&oacute;nico.";
 choices[35][1] = "Siempre en formato papel.";
 choices[35][2] = "Las personas f&iacute;sicas podr&aacute;n elegir en todo momento el formato del expediente administrativo.";
 choices[35][3] = "La ley no regula el formato del expediente.";
 answers[35] = choices[35][0];
 units[35] = "7";
 comments[35] = "Id Pregunta: 666. Art&iacute;culo 70 de la Ley 39/2015";
 preguntaids[35] = 666


//  Id pregunta: 510 Año de creación de pregunta: 2016
 questions[36]= "37)  La Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, se dict&oacute; en desarrollo de lo indicado en:";
 choices[36]= new Array();
 choices[36][0] = "El art&iacute;culo 131 de la Constituci&oacute;n que establece que el Estado, mediante ley, podr&aacute; planificar la actividad econ&oacute;mica general para atender a las necesidades colectivas, equilibrar y armonizar el desarrollo regional y sectorial y estimular el crecimiento de la renta y de la riqueza y su m&aacute;s justa distribuci&oacute;n.";
 choices[36][1] = "El art&iacute;culo 134.1 de la Constituci&oacute;n que establece que corresponde al Gobierno la elaboraci&oacute;n de los Presupuestos Generales del Estado y a las Cortes Generales, su examen, enmienda y aprobaci&oacute;n.";
 choices[36][2] = "La Disposici&oacute;n Adicional &Uacute;nica de la Reforma del art&iacute;culo 135 de la Constituci&oacute;n Espa&ntilde;ola, de 27 de septiembre de 2011 .";
 choices[36][3] = "El art&iacute;culo 135.2 de la Constituci&oacute;n que establec&iacute;a que los cr&eacute;ditos para satisfacer el pago de intereses y capital de la Deuda P&uacute;blica del Estado se entender&aacute;n siempre incluidos en el estado de gastos de los presupuestos y no podr&aacute;n ser objeto de enmienda o modificaci&oacute;n, mientras se ajusten a las condiciones de la ley de emisi&oacute;n.";
 answers[36] = choices[36][3];
 units[36] = "10";
 comments[36] = "Id Pregunta: 510. PRESUPUESTOS GENERALES";
 preguntaids[36] = 510


//  Id pregunta: 844 Año de creación de pregunta: 2016
 questions[37]= "38)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Los &oacute;rganos colegiados de la Administraci&oacute;n General del Estado y de sus Organismos p&uacute;blicos, por su composici&oacute;n, se clasifican en:";
 choices[37]= new Array();
 choices[37][0] = "&Oacute;rganos colegiados interministeriales, si sus miembros proceden de diferentes Ministerios.";
 choices[37][1] = "&Oacute;rganos colegiados ministeriales, si sus componentes proceden de los &oacute;rganos del mismo Ministerio.";
 choices[37][2] = "A y B son correctas.";
 choices[37][3] = "A y B son incorrectas.";
 answers[37] = choices[37][2];
 units[37] = "4, 7, 8, 9";
 comments[37] = "Id Pregunta: 844. Ley 40/2015";
 preguntaids[37] = 844


//  Id pregunta: 520 Año de creación de pregunta: 2016
 questions[38]= "39)  Las Corporaciones de Derecho P&uacute;blico se regir&aacute;n por:";
 choices[38]= new Array();
 choices[38][0] = "su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o delegadas por una Administraci&oacute;n P&uacute;blica, y supletoriamente por la presente Ley";
 choices[38][1] = "la presente Ley, y supletoriamente por su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o delegadas por una Administraci&oacute;n P&uacute;blica";
 choices[38][2] = "su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o cedidas por una Administraci&oacute;n P&uacute;blica, y supletoriamente por la presente Ley";
 choices[38][3] = "la presente Ley, y supletoriamente por su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o cedidas por una Administraci&oacute;n P&uacute;blica";
 answers[38] = choices[38][0];
 units[38] = "7";
 comments[38] = "Id Pregunta: 520. LEY 39/2015";
 preguntaids[38] = 520


//  Id pregunta: 525 Año de creación de pregunta: 2016
 questions[39]= "40)  Se consideran interesados en el procedimiento administrativo:";
 choices[39]= new Array();
 choices[39][0] = "quienes lo promuevan como titulares de derechos o intereses leg&iacute;timos individuales o colectivos";
 choices[39][1] = "los que, habiendo iniciado el procedimiento, tengan derechos que puedan resultar afectados por la decisi&oacute;n que en el mismo se adopte";
 choices[39][2] = "aquellos cuyos intereses leg&iacute;timos, individuales o colectivos, puedan resultar afectados por la resoluci&oacute;n y se personen en el procedimiento durante el tr&aacute;mite de audiencia";
 choices[39][3] = "todas son correctas";
 answers[39] = choices[39][0];
 units[39] = "7";
 comments[39] = "Id Pregunta: 525. LEY 39/2015";
 preguntaids[39] = 525


//  Id pregunta: 540 Año de creación de pregunta: 2016
 questions[40]= "41)  Ser&aacute;/n interoperable/s con los registros electr&oacute;nicos generales y particulares de apoderamientos:";
 choices[40]= new Array();
 choices[40][0] = "los registros mercantiles";
 choices[40][1] = "los registros de la propiedad";
 choices[40][2] = "los protocolos notariales";
 choices[40][3] = "todas son correctas";
 answers[40] = choices[40][3];
 units[40] = "7";
 comments[40] = "Id Pregunta: 540. LEY 39/2015";
 preguntaids[40] = 540


//  Id pregunta: 477 Año de creación de pregunta: 2016
 questions[41]= "42)  De conformidad con el art&iacute;culo 29.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales se remitir&aacute;n:";
 choices[41]= new Array();
 choices[41][0] = "Anualmente.";
 choices[41][1] = "Ninguna de las respuestas es correcta.";
 choices[41][2] = "Trimestralmente.";
 choices[41][3] = "Semestralmente.";
 answers[41] = choices[41][0];
 units[41] = "10";
 comments[41] = "Id Pregunta: 477. PRESUPUESTOS GENERALES";
 preguntaids[41] = 477


//  Id pregunta: 778 Año de creación de pregunta: 2016
 questions[42]= "43)  Respecto a los &oacute;rganos administrativos (se&ntilde;ala la incorrecta):";
 choices[42]= new Array();
 choices[42][0] = "corresponde a cada Administraci&oacute;n P&uacute;blica delimitar, en su respectivo &aacute;mbito competencial, las unidades administrativas que configuran los &oacute;rganos administrativos propios de las especialidades derivadas de su organizaci&oacute;n";
 choices[42][1] = "en ning&uacute;n caso podr&aacute;n crearse nuevos &oacute;rganos que supongan duplicaci&oacute;n de otros ya existentes";
 choices[42][2] = "la creaci&oacute;n de un nuevo &oacute;rgano s&oacute;lo tendr&aacute; lugar previa comprobaci&oacute;n de que no existe otro en la misma Administraci&oacute;n P&uacute;blica que desarrolle igual funci&oacute;n sobre el mismo territorio y poblaci&oacute;n";
 choices[42][3] = "todas son correctas";
 answers[42] = choices[42][1];
 units[42] = "4, 7, 8, 9";
 comments[42] = "Id Pregunta: 778. Ley 40/2015";
 preguntaids[42] = 778


//  Id pregunta: 769 Año de creación de pregunta: 2016
 questions[43]= "44)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas (se&ntilde;ala la incorrecta):";
 choices[43]= new Array();
 choices[43][0] = "la Administraci&oacute;n General del Estado";
 choices[43][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[43][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[43][3] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico o privado vinculados o dependientes de las Administraciones P&uacute;blicas";
 answers[43] = choices[43][3];
 units[43] = "4, 7, 8, 9";
 comments[43] = "Id Pregunta: 769. Ley 40/2015";
 preguntaids[43] = 769


//  Id pregunta: 830 Año de creación de pregunta: 2016
 questions[44]= "45)  La recusaci&oacute;n se plantear&aacute;...";
 choices[44]= new Array();
 choices[44][0] = "S&oacute;lo verbalmente";
 choices[44][1] = "S&oacute;lo por escrito";
 choices[44][2] = "Verbalmente o por escrito";
 choices[44][3] = "Verbalmente o por escrito siempre que es exprese la causa o causas en que se funda";
 answers[44] = choices[44][0];
 units[44] = "4, 7, 8, 9";
 comments[44] = "Id Pregunta: 830. Ley 40/2015";
 preguntaids[44] = 830


//  Id pregunta: 814 Año de creación de pregunta: 2016
 questions[45]= "46)  Las Delegaciones del Gobierno est&aacute;n adscritas org&aacute;nicamente a:";
 choices[45]= new Array();
 choices[45][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[45][1] = "el Consejo de Gobierno de la Comunidad Aut&oacute;noma";
 choices[45][2] = "el Ministerio del Interior";
 choices[45][3] = "la Administraci&oacute;n General del Estado";
 answers[45] = choices[45][0];
 units[45] = "4, 7, 8, 9";
 comments[45] = "Id Pregunta: 814. Ley 40/2015";
 preguntaids[45] = 814


//  Id pregunta: 801 Año de creación de pregunta: 2016
 questions[46]= "47)  Respecto a las unidades administrativas:";
 choices[46]= new Array();
 choices[46][0] = "pueden existir unidades administrativas complejas, que agrupen dos o m&aacute;s unidades mayores";
 choices[46][1] = "los jefes de las unidades administrativas son responsables del correcto funcionamiento de la unidad y de la adecuada ejecuci&oacute;n de las tareas asignadas a la misma";
 choices[46][2] = "las unidades administrativas se establecen mediante las relaciones de puestos de trabajo, que se aprobar&aacute;n de acuerdo con su regulaci&oacute;n espec&iacute;fica, y no se integran en ning&uacute;n &oacute;rgano determinado";
 choices[46][3] = "ninguna es correcta";
 answers[46] = choices[46][1];
 units[46] = "4, 7, 8, 9";
 comments[46] = "Id Pregunta: 801. Ley 40/2015";
 preguntaids[46] = 801


//  Id pregunta: 535 Año de creación de pregunta: 2016
 questions[47]= "48)  La falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n no impedir&aacute; que se tenga por realizado el acto de que se trate, siempre que se aporte aqu&eacute;lla o se subsane el defecto dentro del plazo de:";
 choices[47]= new Array();
 choices[47][0] = "5 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[47][1] = "10 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[47][2] = "15 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[47][3] = "20 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 answers[47] = choices[47][1];
 units[47] = "7";
 comments[47] = "Id Pregunta: 535. LEY 39/2015";
 preguntaids[47] = 535


//  Id pregunta: 140 Año de creación de pregunta: 2016
 questions[48]= "49)  No es una causa de inadmisi&oacute;n de un recurso administrativo:";
 choices[48]= new Array();
 choices[48][0] = "Carecer de legitimaci&oacute;n el recurrente";
 choices[48][1] = "Tratarse de un acto no susceptible de recurso";
 choices[48][2] = "La ausencia de calificaci&oacute;n del recurso por parte del recurrente";
 choices[48][3] = "Todas ellas son causas de inadmisi&oacute;n de un recurso administrativo";
 answers[48] = choices[48][2];
 units[48] = "8";
 comments[48] = "Id Pregunta: 140. Ley 39/2015, Art&iacute;culo 116";
 preguntaids[48] = 140


//  Id pregunta: 497 Año de creación de pregunta: 2016
 questions[49]= "50)  Seg&uacute;n el art&iacute;culo 13.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el aplazamiento y fraccionamiento de las cantidades adeudadas a la Hacienda P&uacute;blica estatal por las comunidades aut&oacute;nomas y las corporaciones locales se regir&aacute; por:";
 choices[49]= new Array();
 choices[49][0] = "La Ley General Tributaria.";
 choices[49][1] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la Administraci&oacute;n General del Estado.";
 choices[49][2] = "La legislaci&oacute;n espec&iacute;fica, la cual tendr&aacute; en cuenta la necesaria reciprocidad entre administraciones.";
 choices[49][3] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 answers[49] = choices[49][2];
 units[49] = "10";
 comments[49] = "Id Pregunta: 497. PRESUPUESTOS GENERALES";
 preguntaids[49] = 497


//  Id pregunta: 845 Año de creación de pregunta: 2016
 questions[50]= "51)  Respecto a la reutilizaci&oacute;n de sistemas y aplicaciones de propiedad de la Administraci&oacute;n:";
 choices[50]= new Array();
 choices[50][0] = "Las Administraciones pondr&aacute;n siempre a disposici&oacute;n de cualquiera de ellas que lo solicite las aplicaciones, desarrolladas por sus servicios o que hayan sido objeto de contrataci&oacute;n y de cuyos derechos de propiedad intelectual sean titulares.";
 choices[50][1] = "Las aplicaciones a las que se refiere el apartado anterior podr&aacute;n ser declaradas como de fuentes abiertas, cuando de ello se derive una mayor transparencia en el funcionamiento de la Administraci&oacute;n P&uacute;blica o se fomente con ello la incorporaci&oacute;n de los ciudadanos a la Sociedad de la informaci&oacute;n.";
 choices[50][2] = "Las Administraciones P&uacute;blicas, con car&aacute;cter posterior a la adquisici&oacute;n, desarrollo o al mantenimiento a lo largo de todo el ciclo de vida de una aplicaci&oacute;n, tanto si se realiza con medios propios o por la contrataci&oacute;n de los servicios correspondientes, deber&aacute;n consultar en el directorio general de aplicaciones.";
 choices[50][3] = "En el directorio general de aplicaciones constar&aacute;n las aplicaciones disponibles de la Administraci&oacute;n General del Estado.";
 answers[50] = choices[50][1];
 units[50] = "4, 7, 8, 9";
 comments[50] = "Id Pregunta: 845. Ley 40/2015";
 preguntaids[50] = 845


//  Id pregunta: 664 Año de creación de pregunta: 2016
 questions[51]= "52)  De acuerdo a la Ley 39/2015, los interesados en un procedimiento administrativo, tienen los siguientes derechos:";
 choices[51]= new Array();
 choices[51][0] = "Conocer el estado de la tramitaci&oacute;n de cualquier procedimiento.";
 choices[51][1] = "Identificar a las autoridades y al personal al servicio de las Administraciones P&uacute;blicas bajo cuya responsabilidad se tramiten los procedimientos.";
 choices[51][2] = "No presentar documentos originales, en ning&uacute;n caso.";
 choices[51][3] = "No presentar datos y documentos no exigidos por las normas aplicables al procedimiento de que se trate, que ya se encuentren en poder del Sector P&uacute;blico o que hayan sido elaborado por &eacute;ste.";
 answers[51] = choices[51][1];
 units[51] = "7";
 comments[51] = "Id Pregunta: 664. Art&iacute;culo 53 de la Ley 39/2015";
 preguntaids[51] = 664


//  Id pregunta: 841 Año de creación de pregunta: 2016
 questions[52]= "53)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[52]= new Array();
 choices[52][0] = "El &oacute;rgano administrativo que se estime incompetente para la resoluci&oacute;n de un asunto remitir&aacute; directamente las actuaciones al &oacute;rgano superior, debiendo notificar esta circunstancia a los interesados.";
 choices[52][1] = "Los interesados que sean parte en el procedimiento podr&aacute;n dirigirse al &oacute;rgano que se encuentre conociendo de un asunto para que decline su competencia y remita las actuaciones al &oacute;rgano competente.";
 choices[52][2] = "Asimismo, podr&aacute;n dirigirse al &oacute;rgano que estimen competente para que requiera de inhibici&oacute;n al que est&eacute; conociendo del asunto.";
 choices[52][3] = "Los conflictos de atribuciones s&oacute;lo podr&aacute;n suscitarse entre &oacute;rganos de una misma Administraci&oacute;n no relacionados jer&aacute;rquicamente, y respecto a asuntos sobre los que no haya finalizado el procedimiento administrativo.";
 answers[52] = choices[52][0];
 units[52] = "4, 7, 8, 9";
 comments[52] = "Id Pregunta: 841. Ley 40/2015";
 preguntaids[52] = 841


//  Id pregunta: 487 Año de creación de pregunta: 2016
 questions[53]= "54)  Se&ntilde;ale la respuesta incorrecta respecto de la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[53]= new Array();
 choices[53][0] = "El principio de dotaci&oacute;n presupuestaria implica que los Presupuestos Generales del Estado de cada ejercicio contendr&aacute;n los cr&eacute;ditos necesarios para atender a las transferencias de medios econ&oacute;micos que deban realizarse a las comunidades aut&oacute;nomas por aplicaci&oacute;n del sistema de financiaci&oacute;n vigente en cada momento.";
 choices[53][1] = "Los cr&eacute;ditos para hacer efectivas las liquidaciones definitivas de ejercicios anteriores tendr&aacute;n el car&aacute;cter de ampliables.";
 choices[53][2] = "El reintegro de ayudas y la responsabilidad financiera derivados de la gesti&oacute;n de los fondos procedentes de la Uni&oacute;n Europea se someter&aacute; a lo previsto en la Ley General de Subvenciones y en la normativa comunitaria.";
 choices[53][3] = "Los anticipos para ejecuci&oacute;n de acciones y programas financiados o cofinanciados por fondos europeos que estuvieran pendientes de cancelar al finalizar el ejercicio, no podr&aacute;n cancelarse en el ejercicio siguiente.";
 answers[53] = choices[53][3];
 units[53] = "10";
 comments[53] = "Id Pregunta: 487. PRESUPUESTOS GENERALES";
 preguntaids[53] = 487


//  Id pregunta: 463 Año de creación de pregunta: 2016
 questions[54]= "55)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, a qui&eacute;n le corresponde aprobar y comprometer los gastos propios de los servicios a su cargo:";
 choices[54]= new Array();
 choices[54][0] = "A los ministros.";
 choices[54][1] = "Las respuestas a) y b) son correctas.";
 choices[54][2] = "Las respuestas a) y b) no son correctas.";
 choices[54][3] = "A los titulares de los &oacute;rganos del Estado.";
 answers[54] = choices[54][1];
 units[54] = "10";
 comments[54] = "Id Pregunta: 463. PRESUPUESTOS GENERALES";
 preguntaids[54] = 463


//  Id pregunta: 473 Año de creación de pregunta: 2016
 questions[55]= "56)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la agrupaci&oacute;n de los cr&eacute;ditos en cap&iacute;tulos, art&iacute;culos, conceptos y subconceptos corresponde a la clasificaci&oacute;n:";
 choices[55]= new Array();
 choices[55][0] = "Org&aacute;nica.";
 choices[55][1] = "Contable.";
 choices[55][2] = "Econ&oacute;mica.";
 choices[55][3] = "Por programas.";
 answers[55] = choices[55][2];
 units[55] = "10";
 comments[55] = "Id Pregunta: 473. PRESUPUESTOS GENERALES";
 preguntaids[55] = 473


//  Id pregunta: 495 Año de creación de pregunta: 2016
 questions[56]= "57)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, inspeccionar la actividad de las oficinas de contabilidad de las entidades gestoras y servicios comunes de la Seguridad Social es una competencia de:";
 choices[56]= new Array();
 choices[56][0] = "El Ministerio de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[56][1] = "La Intervenci&oacute;n General de la Defensa.";
 choices[56][2] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 choices[56][3] = "La Intervenci&oacute;n General de la Seguridad Social.";
 answers[56] = choices[56][2];
 units[56] = "10";
 comments[56] = "Id Pregunta: 495. PRESUPUESTOS GENERALES";
 preguntaids[56] = 495


//  Id pregunta: 797 Año de creación de pregunta: 2016
 questions[57]= "58)  Se&ntilde;ale la respuesta correcta:";
 choices[57]= new Array();
 choices[57][0] = "corresponde a los &oacute;rganos superiores establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y a los &oacute;rganos directivos su desarrollo y ejecuci&oacute;n";
 choices[57][1] = "corresponde establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y su desarrollo y ejecuci&oacute;n a los &oacute;rganos superiores";
 choices[57][2] = "corresponde establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y su desarrollo y ejecuci&oacute;n a los &oacute;rganos directivos";
 choices[57][3] = "corresponde a los &oacute;rganos directivos establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y a los &oacute;rganos superiores su desarrollo y ejecuci&oacute;n";
 answers[57] = choices[57][0];
 units[57] = "4, 7, 8, 9";
 comments[57] = "Id Pregunta: 797. Ley 40/2015";
 preguntaids[57] = 797


//  Id pregunta: 144 Año de creación de pregunta: 2016
 questions[58]= "59)  Sobre el recurso de reposici&oacute;n:";
 choices[58]= new Array();
 choices[58][0] = "Cabe interponerlo ante los actos administrativos que pongan fin a la v&iacute;a administrativa";
 choices[58][1] = "Es obligatorio interponerlo antes de impugnar un acto administrativo ante el orden jurisdiccional contencioso-administrativo";
 choices[58][2] = "Ha desaparecido en la Ley 39/2015";
 choices[58][3] = "El &oacute;rgano competente para resolverlo es el superior jer&aacute;rquico al que dict&oacute; el acto administrativo a recurrir";
 answers[58] = choices[58][0];
 units[58] = "8";
 comments[58] = "Id Pregunta: 144. Ley 39/2015, Art&iacute;culo 123";
 preguntaids[58] = 144


//  Id pregunta: 515 Año de creación de pregunta: 2016
 questions[59]= "60)  La presente Ley se aplica al sector p&uacute;blico, que comprende (se&ntilde;ala la incorrecta):";
 choices[59]= new Array();
 choices[59][0] = "la Administraci&oacute;n General del Estado y las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[59][1] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[59][2] = "el sector p&uacute;blico institucional";
 choices[59][3] = "el sector privado corporativo";
 answers[59] = choices[59][3];
 units[59] = "7";
 comments[59] = "Id Pregunta: 515. LEY 39/2015";
 preguntaids[59] = 515


//  Id pregunta: 450 Año de creación de pregunta: 2016
 questions[60]= "61)  La partida presupuestaria es equivalente a...";
 choices[60]= new Array();
 choices[60][0] = "El sujeto que realiza el gasto";
 choices[60][1] = "El fin que se persigue con la realizaci&oacute;n del gasto";
 choices[60][2] = "El dinero que se asigna a la realizaci&oacute;n del gasto";
 choices[60][3] = "El concepto del gasto, es decir: aquello en lo que se realiza el gasto";
 answers[60] = choices[60][3];
 units[60] = "10";
 comments[60] = "Id Pregunta: 450. PRESUPUESTOS GENERALES";
 preguntaids[60] = 450


//  Id pregunta: 469 Año de creación de pregunta: 2016
 questions[61]= "62)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Ministro de Econom&iacute;a y Competitividad podr&aacute; autorizar a la Secretar&iacute;a General del Tesoro y Pol&iacute;tica Financiera a realizar operaciones pasivas de pr&eacute;stamo a un plazo no superior a:";
 choices[61]= new Array();
 choices[61][0] = "Tres meses.";
 choices[61][1] = "Nueve meses.";
 choices[61][2] = "Cuatro meses.";
 choices[61][3] = "Seis meses.";
 answers[61] = choices[61][0];
 units[61] = "10";
 comments[61] = "Id Pregunta: 469. PRESUPUESTOS GENERALES";
 preguntaids[61] = 469


//  Id pregunta: 462 Año de creación de pregunta: 2016
 questions[62]= "63)  De conformidad con el art&iacute;culo 11 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los derechos de naturaleza p&uacute;blica de la Hacienda P&uacute;blica estatal se adquieren y nacen de conformidad con lo establecido en:";
 choices[62]= new Array();
 choices[62][0] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 choices[62][1] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la AGE.";
 choices[62][2] = "La normativa reguladora de cada derecho.";
 choices[62][3] = "Ley 50/1997, del Gobierno.";
 answers[62] = choices[62][2];
 units[62] = "10";
 comments[62] = "Id Pregunta: 462. PRESUPUESTOS GENERALES";
 preguntaids[62] = 462


//  Id pregunta: 148 Año de creación de pregunta: 2016
 questions[63]= "64)  La publicaci&oacute;n del &laquo;Bolet&iacute;n Oficial del Estado&raquo; en la sede electr&oacute;nica del Organismo competente:";
 choices[63]= new Array();
 choices[63][0] = "Tiene car&aacute;cter supletorio respecto a la versi&oacute;n en formato papel";
 choices[63][1] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, aunque no se podr&aacute; derivar de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[63][2] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[63][3] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se habr&aacute;n de determinar necesariamente por Ley, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 answers[63] = choices[63][2];
 units[63] = "7";
 comments[63] = "Id Pregunta: 148. Ley 39/2015, Art&iacute;culo 131";
 preguntaids[63] = 148


//  Id pregunta: 767 Año de creación de pregunta: 2016
 questions[64]= "65)  Las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas:";
 choices[64]= new Array();
 choices[64][0] = "no quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley, salvo, cuando ejerzan potestades administrativas";
 choices[64][1] = "no quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley, ni siquiera, cuando ejerzan potestades administrativas";
 choices[64][2] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, y en todo caso, cuando ejerzan potestades administrativas";
 choices[64][3] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, excepto, cuando ejerzan potestades administrativas";
 answers[64] = choices[64][2];
 units[64] = "4, 7, 8, 9";
 comments[64] = "Id Pregunta: 767. Ley 40/2015";
 preguntaids[64] = 767


//  Id pregunta: 457 Año de creación de pregunta: 2016
 questions[65]= "66)  La clasificaci&oacute;n econ&oacute;mica del gasto nos dice...";
 choices[65]= new Array();
 choices[65][0] = "En qu&eacute; nos gastamos el dinero";
 choices[65][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[65][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[65][3] = "Qui&eacute;n se gasta el dinero.";
 answers[65] = choices[65][0];
 units[65] = "10";
 comments[65] = "Id Pregunta: 457. PRESUPUESTOS GENERALES";
 preguntaids[65] = 457


//  Id pregunta: 460 Año de creación de pregunta: 2016
 questions[66]= "67)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Intervenci&oacute;n General de la Administraci&oacute;n del Estado ejercer&aacute; sus funciones de control conforme a los principios de:";
 choices[66]= new Array();
 choices[66][0] = "a) Autonom&iacute;a, ejercicio desconcentrado y jerarqu&iacute;a externa.";
 choices[66][1] = "b) Eficacia, ejercicio desconcentrado y jerarqu&iacute;a externa.";
 choices[66][2] = "c) Autonom&iacute;a, eficacia y ejercicio desconcentrado.";
 choices[66][3] = "d) Autonom&iacute;a, ejercicio desconcentrado y jerarqu&iacute;a interna.";
 answers[66] = choices[66][3];
 units[66] = "10";
 comments[66] = "Id Pregunta: 460. PRESUPUESTOS GENERALES";
 preguntaids[66] = 460


//  Id pregunta: 451 Año de creación de pregunta: 2016
 questions[67]= "68)  El cr&eacute;dito presupuestario es...";
 choices[67]= new Array();
 choices[67][0] = "El sujeto que realiza el gasto";
 choices[67][1] = "El fin que se persigue con la realizaci&oacute;n del gasto";
 choices[67][2] = "El dinero que se asigna a la realizaci&oacute;n del gasto";
 choices[67][3] = "El concepto del gasto, es decir: aquello en lo que se realiza el gasto";
 answers[67] = choices[67][2];
 units[67] = "10";
 comments[67] = "Id Pregunta: 451. PRESUPUESTOS GENERALES";
 preguntaids[67] = 451


//  Id pregunta: 456 Año de creación de pregunta: 2016
 questions[68]= "69)  El Presupuesto por programas sirve para saber...";
 choices[68]= new Array();
 choices[68][0] = "En qu&eacute; nos gastamos el dinero";
 choices[68][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[68][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[68][3] = "Qui&eacute;n se gasta el dinero";
 answers[68] = choices[68][2];
 units[68] = "10";
 comments[68] = "Id Pregunta: 456. PRESUPUESTOS GENERALES";
 preguntaids[68] = 456


//  Id pregunta: 478 Año de creación de pregunta: 2016
 questions[69]= "70)  Conforme a la Ley General Presupuestaria, la aprobaci&oacute;n de las normas reguladoras de los anticipos de caja fija mediante las que se indiquen los gastos que pueden ser satisfechos por dicho sistema y los cr&eacute;ditos compete:";
 choices[69]= new Array();
 choices[69][0] = "Al Gobierno.";
 choices[69][1] = "Al Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[69][2] = "A los Ministros y Presidentes o Directores de los Organismos aut&oacute;nomos en relaci&oacute;n con sus respectivos &aacute;mbitos.";
 choices[69][3] = "A los Ministros en relaci&oacute;n con sus respectivos Departamentos, incluyendo los Organismos aut&oacute;nomos que tengan adscritos.";
 answers[69] = choices[69][2];
 units[69] = "10";
 comments[69] = "Id Pregunta: 478. PRESUPUESTOS GENERALES";
 preguntaids[69] = 478


//  Id pregunta: 806 Año de creación de pregunta: 2016
 questions[70]= "71)  Los nombramientos de los Secretarios generales t&eacute;cnicos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, de las Comunidades Aut&oacute;nomas o de las Entidades locales, pertenecientes al:";
 choices[70]= new Array();
 choices[70][0] = "Subgrupo A1";
 choices[70][1] = "Subgrupo A2";
 choices[70][2] = "Subgrupo B";
 choices[70][3] = "Subgrupo C1";
 answers[70] = choices[70][0];
 units[70] = "4, 7, 8, 9";
 comments[70] = "Id Pregunta: 806. Ley 40/2015";
 preguntaids[70] = 806


//  Id pregunta: 816 Año de creación de pregunta: 2016
 questions[71]= "72)  Podr&aacute;n crearse por Real Decreto Subdelegaciones del Gobierno en las Comunidades Aut&oacute;nomas uniprovinciales, cuando lo justifiquen circunstancias como:";
 choices[71]= new Array();
 choices[71][0] = "la poblaci&oacute;n del territorio";
 choices[71][1] = "el volumen de gesti&oacute;n";
 choices[71][2] = "sus singularidades geogr&aacute;ficas, sociales o econ&oacute;micas";
 choices[71][3] = "todas son correctas";
 answers[71] = choices[71][3];
 units[71] = "4, 7, 8, 9";
 comments[71] = "Id Pregunta: 816. Ley 40/2015";
 preguntaids[71] = 816


//  Id pregunta: 672 Año de creación de pregunta: 2016
 questions[72]= "73)  Respecto a la ejecuci&oacute;n de la resoluci&oacute;n de un procedimiento administrativo, se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[72]= new Array();
 choices[72][0] = "Las Administraciones P&uacute;blicas no iniciar&aacute;n la ejecuci&oacute;n hasta que se haya dictado resoluci&oacute;n.";
 choices[72][1] = "De una resoluci&oacute;n administrativa nunca puede derivarse una multa.";
 choices[72][2] = "La ejecuci&oacute;n forzosa de una resoluci&oacute;n puede afectar al patrimonio.";
 choices[72][3] = "Contra algunas resoluciones es posible interponer recursos por v&iacute;a administrativa.";
 answers[72] = choices[72][1];
 units[72] = "7";
 comments[72] = "Id Pregunta: 672. Cap&iacute;tulo VII, T&iacute;tulo IV de la Ley 39/2015";
 preguntaids[72] = 672


//  Id pregunta: 492 Año de creación de pregunta: 2016
 questions[73]= "74)  De acuerdo con la Ley 47/2003, de 26 de noviembre, General Presupuestaria, la obligaci&oacute;n de pagar los intereses de la Deuda del Estado y la de devolver los capitales llamados a reembolso, contados respectivamente a partir del vencimiento de los intereses y del d&iacute;a del llamamiento a reembolso prescribir&aacute;:";
 choices[73]= new Array();
 choices[73][0] = "A los cinco a&ntilde;os.";
 choices[73][1] = "A los dos a&ntilde;os.";
 choices[73][2] = "A los tres a&ntilde;os.";
 choices[73][3] = "A los cuatro a&ntilde;os.";
 answers[73] = choices[73][0];
 units[73] = "10";
 comments[73] = "Id Pregunta: 492. PRESUPUESTOS GENERALES";
 preguntaids[73] = 492


//  Id pregunta: 849 Año de creación de pregunta: 2016
 questions[74]= "75)  &iquest;Cu&aacute;l de los siguientes es un sistema de firma para la actuaci&oacute;n administrativa automatizada?";
 choices[74]= new Array();
 choices[74][0] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico reconocido o cualificado que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[74][1] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico avanzado o reconocido que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[74][2] = "C&oacute;digo seguro de verificaci&oacute;n vinculado a la Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de Derecho P&uacute;blico, en los t&eacute;rminos y condiciones establecidos, permiti&eacute;ndose en todo caso la comprobaci&oacute;n de la integridad del documento mediante el acceso al portal correspondiente.";
 choices[74][3] = "Firma electr&oacute;nica del titular del &oacute;rgano o empleado p&uacute;blico.";
 answers[74] = choices[74][0];
 units[74] = "4, 7, 8, 9";
 comments[74] = "Id Pregunta: 849. Ley 40/2015";
 preguntaids[74] = 849


