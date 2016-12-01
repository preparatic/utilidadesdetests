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


//  Id pregunta: 671 Año de creación de pregunta: 2016
 questions[1]= "2)  Un procedimiento administrativo finalizar&aacute;, seg&uacute;n la Ley 39/2015, por:";
 choices[1]= new Array();
 choices[1][0] = "Resoluci&oacute;n.";
 choices[1][1] = "Desistimiento o renuncia.";
 choices[1][2] = "Caducidad.";
 choices[1][3] = "Todas las anteriores.";
 answers[1] = choices[1][3];
 units[1] = "7";
 comments[1] = "Id Pregunta: 671. Art&iacute;culo 84 de la Ley 39/2015";
 preguntaids[1] = 671


//  Id pregunta: 770 Año de creación de pregunta: 2016
 questions[2]= "3)  Las Administraciones P&uacute;blicas sirven con objetividad los intereses generales, con sometimiento pleno a la Constituci&oacute;n, a la Ley y al Derecho y act&uacute;an de acuerdo con los principios de:";
 choices[2]= new Array();
 choices[2][0] = "eficacia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[2][1] = "eficiencia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 choices[2][2] = "eficacia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[2][3] = "eficiencia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 answers[2] = choices[2][2];
 units[2] = "4, 7, 8, 9";
 comments[2] = "Id Pregunta: 770. Ley 40/2015";
 preguntaids[2] = 770


//  Id pregunta: 824 Año de creación de pregunta: 2016
 questions[3]= "4)  &iquest;Cu&aacute;l de los siguientes no ser&iacute;a un motivo de abstenci&oacute;n conforme el art. 23 de la Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[3]= new Array();
 choices[3][0] = "Ser el personal respecto del que la abstenci&oacute;n se plantea sobrino del interesado en el procedimiento";
 choices[3][1] = "Ser el personal respecto del que la abstenci&oacute;n se plantea vecino del interesado en el procedimiento";
 choices[3][2] = "Ser el personal respecto del que la abstenci&oacute;n se plantea cu&ntilde;ado del interesado en el procedimiento";
 choices[3][3] = "Ser el personal respecto del que la abstenci&oacute;n se plantea nieto del interesado en el procedimiento";
 answers[3] = choices[3][2];
 units[3] = "4, 7, 8, 9";
 comments[3] = "Id Pregunta: 824. Ley 40/2015";
 preguntaids[3] = 824


//  Id pregunta: 516 Año de creación de pregunta: 2016
 questions[4]= "5)  El sector p&uacute;blico institucional se integra por:";
 choices[4]= new Array();
 choices[4][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[4][1] = "las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas";
 choices[4][2] = "las Universidades p&uacute;blicas";
 choices[4][3] = "todas son correctas";
 answers[4] = choices[4][3];
 units[4] = "7";
 comments[4] = "Id Pregunta: 516. LEY 39/2015";
 preguntaids[4] = 516


//  Id pregunta: 537 Año de creación de pregunta: 2016
 questions[5]= "6)  Dispondr&aacute;/n de un registro electr&oacute;nico general de apoderamientos:";
 choices[5]= new Array();
 choices[5][0] = "la Administraci&oacute;n General del Estado";
 choices[5][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[5][2] = "las Entidades Locales";
 choices[5][3] = "todas son correctas";
 answers[5] = choices[5][3];
 units[5] = "7";
 comments[5] = "Id Pregunta: 537. LEY 39/2015";
 preguntaids[5] = 537


//  Id pregunta: 795 Año de creación de pregunta: 2016
 questions[6]= "7)  Todos los &oacute;rganos de la Administraci&oacute;n General del Estado que no sean &oacute;rgano superior o directivo se encuentran bajo la dependencia o direcci&oacute;n de:";
 choices[6]= new Array();
 choices[6][0] = "un &oacute;rgano superior";
 choices[6][1] = "un &oacute;rgano directivo";
 choices[6][2] = "un &oacute;rgano superior o directivo";
 choices[6][3] = "ninguna es correcta";
 answers[6] = choices[6][2];
 units[6] = "4, 7, 8, 9";
 comments[6] = "Id Pregunta: 795. Ley 40/2015";
 preguntaids[6] = 795


//  Id pregunta: 799 Año de creación de pregunta: 2016
 questions[7]= "8)  Los elementos organizativos b&aacute;sicos de las estructuras org&aacute;nicas son:";
 choices[7]= new Array();
 choices[7][0] = "los &oacute;rganos administrativos";
 choices[7][1] = "las entidades dependientes";
 choices[7][2] = "las unidades administrativas";
 choices[7][3] = "los servicios comunes";
 answers[7] = choices[7][2];
 units[7] = "4, 7, 8, 9";
 comments[7] = "Id Pregunta: 799. Ley 40/2015";
 preguntaids[7] = 799


//  Id pregunta: 796 Año de creación de pregunta: 2016
 questions[8]= "9)  Los estatutos de los Organismos p&uacute;blicos determinar&aacute;n sus respectivos:";
 choices[8]= new Array();
 choices[8][0] = "&oacute;rganos superiores";
 choices[8][1] = "&oacute;rganos directivos";
 choices[8][2] = "&oacute;rganos superiores y directivos";
 choices[8][3] = "ninguna es correcta";
 answers[8] = choices[8][1];
 units[8] = "4, 7, 8, 9";
 comments[8] = "Id Pregunta: 796. Ley 40/2015";
 preguntaids[8] = 796


//  Id pregunta: 513 Año de creación de pregunta: 2016
 questions[9]= "10)  Cuando resulte eficaz, proporcionado y necesario para la consecuci&oacute;n de los fines propios del procedimiento, y de manera motivada, podr&aacute;n incluirse tr&aacute;mites adicionales o distintos a los contemplados en esta Ley:";
 choices[9]= new Array();
 choices[9][0] = "solo mediante ley";
 choices[9][1] = "reglamentariamente";
 choices[9][2] = "mediante ley o reglamentariamente";
 choices[9][3] = "ninguna es correcta";
 answers[9] = choices[9][0];
 units[9] = "7";
 comments[9] = "Id Pregunta: 513. LEY 39/2015";
 preguntaids[9] = 513


//  Id pregunta: 794 Año de creación de pregunta: 2016
 questions[10]= "11)  Tienen la condici&oacute;n de alto cargo:";
 choices[10]= new Array();
 choices[10][0] = "los &oacute;rganos superiores";
 choices[10][1] = "los &oacute;rganos superiores y directivos";
 choices[10][2] = "los &oacute;rganos superiores y directivos, excepto los Subdirectores generales y asimilados";
 choices[10][3] = "los &oacute;rganos superiores y directivos, excepto los Secretarios generales y asimilados";
 answers[10] = choices[10][2];
 units[10] = "4, 7, 8, 9";
 comments[10] = "Id Pregunta: 794. Ley 40/2015";
 preguntaids[10] = 794


//  Id pregunta: 828 Año de creación de pregunta: 2016
 questions[11]= "12)  La recusaci&oacute;n pueden promoverla...";
 choices[11]= new Array();
 choices[11][0] = "Cualquier &oacute;rgano";
 choices[11][1] = "El interesado";
 choices[11][2] = "El interesado y el superior jer&aacute;rquico del &oacute;rgano de que se trate";
 choices[11][3] = "El interesado, el superior jer&aacute;rquico del &oacute;rgano de que se trate y el propio &oacute;rgano";
 answers[11] = choices[11][0];
 units[11] = "4, 7, 8, 9";
 comments[11] = "Id Pregunta: 828. Ley 40/2015";
 preguntaids[11] = 828


//  Id pregunta: 832 Año de creación de pregunta: 2016
 questions[12]= "13)  Contra las resoluciones en materia de abstenci&oacute;n y recusaci&oacute;n...";
 choices[12]= new Array();
 choices[12][0] = "Cabr&aacute; recurso de alzada";
 choices[12][1] = "Cabr&aacute; el nuevo protesto";
 choices[12][2] = "Cabr&aacute; recurso de reposici&oacute;n";
 choices[12][3] = "No cabr&aacute; recurso alguno";
 answers[12] = choices[12][3];
 units[12] = "4, 7, 8, 9";
 comments[12] = "Id Pregunta: 832. Ley 40/2015";
 preguntaids[12] = 832


//  Id pregunta: 835 Año de creación de pregunta: 2016
 questions[13]= "14)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta correcta.";
 choices[13]= new Array();
 choices[13][0] = "La competencia es irrenunciable y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[13][1] = "La competencia es imprescriptible y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[13][2] = "La competencia es inviolable y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[13][3] = "Todas son correctas.";
 answers[13] = choices[13][0];
 units[13] = "4, 7, 8, 9";
 comments[13] = "Id Pregunta: 835. Ley 40/2015";
 preguntaids[13] = 835


//  Id pregunta: 155 Año de creación de pregunta: 2016
 questions[14]= "15)  A efectos del c&oacute;mputo de plazo fijado en d&iacute;as h&aacute;biles, y en lo que se refiere al cumplimiento de plazos por los interesados, la presentaci&oacute;n de documentos en un registro electr&oacute;nico un d&iacute;a inh&aacute;bil:";
 choices[14]= new Array();
 choices[14][0] = "se entender&aacute; realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil.";
 choices[14][1] = "se entender&aacute;, en todo caso, realizada en la &uacute;ltima hora del primer d&iacute;a h&aacute;bil anterior";
 choices[14][2] = "se entender&aacute; realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente salvo que una norma permita expresamente la recepci&oacute;n en d&iacute;a inh&aacute;bil";
 choices[14][3] = "se entender&aacute;, en todo caso, realizada en la primera hora del primer d&iacute;a h&aacute;bil siguiente";
 answers[14] = choices[14][2];
 units[14] = "7";
 comments[14] = "Id Pregunta: 155. Ley 39/2015, Art&iacute;culo 31";
 preguntaids[14] = 155


//  Id pregunta: 804 Año de creación de pregunta: 2016
 questions[15]= "16)  Los Secretarios generales t&eacute;cnicos:";
 choices[15]= new Array();
 choices[15][0] = "se encuentran bajo la inmediata dependencia del Subsecretario";
 choices[15][1] = "tendr&aacute;n las competencias sobre servicios comunes que les atribuya el Real Decreto de estructura del Departamento";
 choices[15][2] = "tendr&aacute;n las competencias relativas a producci&oacute;n normativa, asistencia jur&iacute;dica y publicaciones";
 choices[15][3] = "todas son correctas";
 answers[15] = choices[15][3];
 units[15] = "4, 7, 8, 9";
 comments[15] = "Id Pregunta: 804. Ley 40/2015";
 preguntaids[15] = 804


//  Id pregunta: 821 Año de creación de pregunta: 2016
 questions[16]= "17)  Los Delegados del Gobierno (se&ntilde;ala la incorrecta):";
 choices[16]= new Array();
 choices[16][0] = "representan al Gobierno de la Naci&oacute;n en el territorio de la respectiva Comunidad Aut&oacute;noma";
 choices[16][1] = "dirigir&aacute;n y supervisar&aacute;n la Administraci&oacute;n General del Estado en el territorio de las respectivas Comunidades Aut&oacute;nomas";
 choices[16][2] = "son &oacute;rganos directivos con rango de Director general";
 choices[16][3] = "ser&aacute;n nombrados y separados por Real Decreto del Consejo de Ministros, a propuesta del Presidente del Gobierno";
 answers[16] = choices[16][2];
 units[16] = "4, 7, 8, 9";
 comments[16] = "Id Pregunta: 821. Ley 40/2015";
 preguntaids[16] = 821


//  Id pregunta: 817 Año de creación de pregunta: 2016
 questions[17]= "18)  Se determinar&aacute;n las islas en las que existir&aacute; un Director Insular de la Administraci&oacute;n General del Estado:";
 choices[17]= new Array();
 choices[17][0] = "por Real Decreto";
 choices[17][1] = "reglamentariamente";
 choices[17][2] = "mediante Ley";
 choices[17][3] = "ninguna es correcta";
 answers[17] = choices[17][1];
 units[17] = "4, 7, 8, 9";
 comments[17] = "Id Pregunta: 817. Ley 40/2015";
 preguntaids[17] = 817


//  Id pregunta: 846 Año de creación de pregunta: 2016
 questions[18]= "19)  &iquest;Qu&eacute; t&eacute;cnica de cooperaci&oacute;n se regula por primera vez con la Ley 40/2015?";
 choices[18]= new Array();
 choices[18][0] = "Conferencia de Presidentes.";
 choices[18][1] = "Convenios de colaboraci&oacute;n.";
 choices[18][2] = "Comisiones Bilaterales de Cooperaci&oacute;n.";
 choices[18][3] = "Conferencias Sectoriales.";
 answers[18] = choices[18][0];
 units[18] = "4, 7, 8, 9";
 comments[18] = "Id Pregunta: 846. Ley 40/2015";
 preguntaids[18] = 846


//  Id pregunta: 765 Año de creación de pregunta: 2016
 questions[19]= "20)  La presente Ley se aplica al sector p&uacute;blico que comprende (se&ntilde;ala la incorrecta):";
 choices[19]= new Array();
 choices[19][0] = "la Administraci&oacute;n General del Estado";
 choices[19][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[19][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[19][3] = "el sector p&uacute;blico y privado institucional";
 answers[19] = choices[19][3];
 units[19] = "4, 7, 8, 9";
 comments[19] = "Id Pregunta: 765. Ley 40/2015";
 preguntaids[19] = 765


//  Id pregunta: 809 Año de creación de pregunta: 2016
 questions[20]= "21)  Los Directores generales ser&aacute;n nombrados y separados por:";
 choices[20]= new Array();
 choices[20][0] = "Real Decreto del Consejo de Ministros, a propuesta del titular del Departamento o del Presidente del Gobierno";
 choices[20][1] = "Ley de las Cortes Generales, a propuesta del titular del Departamento";
 choices[20][2] = "Ley de las Cortes Generales, a propuesta del titular del Departamento o del Presidente del Gobierno";
 choices[20][3] = "Real Decreto del Consejo de Ministros, a propuesta del titular del Departamento";
 answers[20] = choices[20][0];
 units[20] = "4, 7, 8, 9";
 comments[20] = "Id Pregunta: 809. Ley 40/2015";
 preguntaids[20] = 809


//  Id pregunta: 798 Año de creación de pregunta: 2016
 questions[21]= "22)  Sin perjuicio de lo previsto en la Ley 3/2015, de 30 de marzo, reguladora del ejercicio del alto cargo de la Administraci&oacute;n General del Estado, los titulares de los &oacute;rganos superiores y directivos son nombrados, atendiendo a criterios de competencia profesional y experiencia, en la forma establecida en esta Ley, siendo de aplicaci&oacute;n al desempe&ntilde;o de sus funciones:";
 choices[21]= new Array();
 choices[21][0] = "la responsabilidad profesional, personal y directa por la gesti&oacute;n desarrollada";
 choices[21][1] = "la sujeci&oacute;n al control y evaluaci&oacute;n de la gesti&oacute;n por el &oacute;rgano superior o directivo competente, sin perjuicio del control establecido por la Ley General Presupuestaria";
 choices[21][2] = "a y b son correctas";
 choices[21][3] = "a y b son incorrectas";
 answers[21] = choices[21][2];
 units[21] = "4, 7, 8, 9";
 comments[21] = "Id Pregunta: 798. Ley 40/2015";
 preguntaids[21] = 798


//  Id pregunta: 151 Año de creación de pregunta: 2016
 questions[22]= "23)  Seg&uacute;n la ley 39/2015, est&aacute;n obligados a relacionarse a trav&eacute;s de medios electr&oacute;nicos con las Administraciones P&uacute;blicas para la realizaci&oacute;n de cualquier tr&aacute;mite de un procedimiento administrativo: (se&ntilde;ala la respuesta incorrecta)";
 choices[22]= new Array();
 choices[22][0] = "las personas jur&iacute;dicas ";
 choices[22][1] = "las entidades con personalidad jur&iacute;dica";
 choices[22][2] = "los empleados de las Administraciones P&uacute;blicas para los tr&aacute;mites y actuaciones que realicen con ellas por raz&oacute;n de su condici&oacute;n de empleado p&uacute;blico";
 choices[22][3] = "quienes representen a un interesado que est&eacute; obligado legalmente a relacionarse electr&oacute;nicamente con la Administraci&oacute;n";
 answers[22] = choices[22][1];
 units[22] = "7";
 comments[22] = "Id Pregunta: 151. Ley 39/2015, Art&iacute;culo 14";
 preguntaids[22] = 151


//  Id pregunta: 810 Año de creación de pregunta: 2016
 questions[23]= "24)  Ostentan la representaci&oacute;n ordinaria del Ministerio:";
 choices[23]= new Array();
 choices[23][0] = "los Secretarios de Estado";
 choices[23][1] = "los Ministros";
 choices[23][2] = "los Subsecretarios";
 choices[23][3] = "los Secretarios generales";
 answers[23] = choices[23][2];
 units[23] = "4, 7, 8, 9";
 comments[23] = "Id Pregunta: 810. Ley 40/2015";
 preguntaids[23] = 810


//  Id pregunta: 533 Año de creación de pregunta: 2016
 questions[24]= "25)  Se entender&aacute; acreditada la representaci&oacute;n realizada:";
 choices[24]= new Array();
 choices[24][0] = "mediante apoderamiento apud acta efectuado por comparecencia personal";
 choices[24][1] = "mediante apoderamiento apud acta efectuado por comparecencia electr&oacute;nica en la correspondiente sede electr&oacute;nica";
 choices[24][2] = "a trav&eacute;s de la acreditaci&oacute;n de su inscripci&oacute;n en el registro electr&oacute;nico de apoderamientos de la Administraci&oacute;n P&uacute;blica competente";
 choices[24][3] = "todas son correctas";
 answers[24] = choices[24][3];
 units[24] = "7";
 comments[24] = "Id Pregunta: 533. LEY 39/2015";
 preguntaids[24] = 533


//  Id pregunta: 666 Año de creación de pregunta: 2016
 questions[25]= "26)  De acuerdo a la Ley 39/2015, el formato del expediente administrativo ser&aacute;:";
 choices[25]= new Array();
 choices[25][0] = "Siempre en formato electr&oacute;nico.";
 choices[25][1] = "Siempre en formato papel.";
 choices[25][2] = "Las personas f&iacute;sicas podr&aacute;n elegir en todo momento el formato del expediente administrativo.";
 choices[25][3] = "La ley no regula el formato del expediente.";
 answers[25] = choices[25][0];
 units[25] = "7";
 comments[25] = "Id Pregunta: 666. Art&iacute;culo 70 de la Ley 39/2015";
 preguntaids[25] = 666


//  Id pregunta: 844 Año de creación de pregunta: 2016
 questions[26]= "27)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Los &oacute;rganos colegiados de la Administraci&oacute;n General del Estado y de sus Organismos p&uacute;blicos, por su composici&oacute;n, se clasifican en:";
 choices[26]= new Array();
 choices[26][0] = "&Oacute;rganos colegiados interministeriales, si sus miembros proceden de diferentes Ministerios.";
 choices[26][1] = "&Oacute;rganos colegiados ministeriales, si sus componentes proceden de los &oacute;rganos del mismo Ministerio.";
 choices[26][2] = "A y B son correctas.";
 choices[26][3] = "A y B son incorrectas.";
 answers[26] = choices[26][2];
 units[26] = "4, 7, 8, 9";
 comments[26] = "Id Pregunta: 844. Ley 40/2015";
 preguntaids[26] = 844


//  Id pregunta: 520 Año de creación de pregunta: 2016
 questions[27]= "28)  Las Corporaciones de Derecho P&uacute;blico se regir&aacute;n por:";
 choices[27]= new Array();
 choices[27][0] = "su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o delegadas por una Administraci&oacute;n P&uacute;blica, y supletoriamente por la presente Ley";
 choices[27][1] = "la presente Ley, y supletoriamente por su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o delegadas por una Administraci&oacute;n P&uacute;blica";
 choices[27][2] = "su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o cedidas por una Administraci&oacute;n P&uacute;blica, y supletoriamente por la presente Ley";
 choices[27][3] = "la presente Ley, y supletoriamente por su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o cedidas por una Administraci&oacute;n P&uacute;blica";
 answers[27] = choices[27][0];
 units[27] = "7";
 comments[27] = "Id Pregunta: 520. LEY 39/2015";
 preguntaids[27] = 520


//  Id pregunta: 525 Año de creación de pregunta: 2016
 questions[28]= "29)  Se consideran interesados en el procedimiento administrativo:";
 choices[28]= new Array();
 choices[28][0] = "quienes lo promuevan como titulares de derechos o intereses leg&iacute;timos individuales o colectivos";
 choices[28][1] = "los que, habiendo iniciado el procedimiento, tengan derechos que puedan resultar afectados por la decisi&oacute;n que en el mismo se adopte";
 choices[28][2] = "aquellos cuyos intereses leg&iacute;timos, individuales o colectivos, puedan resultar afectados por la resoluci&oacute;n y se personen en el procedimiento durante el tr&aacute;mite de audiencia";
 choices[28][3] = "todas son correctas";
 answers[28] = choices[28][0];
 units[28] = "7";
 comments[28] = "Id Pregunta: 525. LEY 39/2015";
 preguntaids[28] = 525


//  Id pregunta: 540 Año de creación de pregunta: 2016
 questions[29]= "30)  Ser&aacute;/n interoperable/s con los registros electr&oacute;nicos generales y particulares de apoderamientos:";
 choices[29]= new Array();
 choices[29][0] = "los registros mercantiles";
 choices[29][1] = "los registros de la propiedad";
 choices[29][2] = "los protocolos notariales";
 choices[29][3] = "todas son correctas";
 answers[29] = choices[29][3];
 units[29] = "7";
 comments[29] = "Id Pregunta: 540. LEY 39/2015";
 preguntaids[29] = 540


//  Id pregunta: 778 Año de creación de pregunta: 2016
 questions[30]= "31)  Respecto a los &oacute;rganos administrativos (se&ntilde;ala la incorrecta):";
 choices[30]= new Array();
 choices[30][0] = "corresponde a cada Administraci&oacute;n P&uacute;blica delimitar, en su respectivo &aacute;mbito competencial, las unidades administrativas que configuran los &oacute;rganos administrativos propios de las especialidades derivadas de su organizaci&oacute;n";
 choices[30][1] = "en ning&uacute;n caso podr&aacute;n crearse nuevos &oacute;rganos que supongan duplicaci&oacute;n de otros ya existentes";
 choices[30][2] = "la creaci&oacute;n de un nuevo &oacute;rgano s&oacute;lo tendr&aacute; lugar previa comprobaci&oacute;n de que no existe otro en la misma Administraci&oacute;n P&uacute;blica que desarrolle igual funci&oacute;n sobre el mismo territorio y poblaci&oacute;n";
 choices[30][3] = "todas son correctas";
 answers[30] = choices[30][1];
 units[30] = "4, 7, 8, 9";
 comments[30] = "Id Pregunta: 778. Ley 40/2015";
 preguntaids[30] = 778


//  Id pregunta: 769 Año de creación de pregunta: 2016
 questions[31]= "32)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas (se&ntilde;ala la incorrecta):";
 choices[31]= new Array();
 choices[31][0] = "la Administraci&oacute;n General del Estado";
 choices[31][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[31][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[31][3] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico o privado vinculados o dependientes de las Administraciones P&uacute;blicas";
 answers[31] = choices[31][3];
 units[31] = "4, 7, 8, 9";
 comments[31] = "Id Pregunta: 769. Ley 40/2015";
 preguntaids[31] = 769


//  Id pregunta: 830 Año de creación de pregunta: 2016
 questions[32]= "33)  La recusaci&oacute;n se plantear&aacute;...";
 choices[32]= new Array();
 choices[32][0] = "S&oacute;lo verbalmente";
 choices[32][1] = "S&oacute;lo por escrito";
 choices[32][2] = "Verbalmente o por escrito";
 choices[32][3] = "Verbalmente o por escrito siempre que es exprese la causa o causas en que se funda";
 answers[32] = choices[32][0];
 units[32] = "4, 7, 8, 9";
 comments[32] = "Id Pregunta: 830. Ley 40/2015";
 preguntaids[32] = 830


//  Id pregunta: 814 Año de creación de pregunta: 2016
 questions[33]= "34)  Las Delegaciones del Gobierno est&aacute;n adscritas org&aacute;nicamente a:";
 choices[33]= new Array();
 choices[33][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[33][1] = "el Consejo de Gobierno de la Comunidad Aut&oacute;noma";
 choices[33][2] = "el Ministerio del Interior";
 choices[33][3] = "la Administraci&oacute;n General del Estado";
 answers[33] = choices[33][0];
 units[33] = "4, 7, 8, 9";
 comments[33] = "Id Pregunta: 814. Ley 40/2015";
 preguntaids[33] = 814


//  Id pregunta: 801 Año de creación de pregunta: 2016
 questions[34]= "35)  Respecto a las unidades administrativas:";
 choices[34]= new Array();
 choices[34][0] = "pueden existir unidades administrativas complejas, que agrupen dos o m&aacute;s unidades mayores";
 choices[34][1] = "los jefes de las unidades administrativas son responsables del correcto funcionamiento de la unidad y de la adecuada ejecuci&oacute;n de las tareas asignadas a la misma";
 choices[34][2] = "las unidades administrativas se establecen mediante las relaciones de puestos de trabajo, que se aprobar&aacute;n de acuerdo con su regulaci&oacute;n espec&iacute;fica, y no se integran en ning&uacute;n &oacute;rgano determinado";
 choices[34][3] = "ninguna es correcta";
 answers[34] = choices[34][1];
 units[34] = "4, 7, 8, 9";
 comments[34] = "Id Pregunta: 801. Ley 40/2015";
 preguntaids[34] = 801


//  Id pregunta: 535 Año de creación de pregunta: 2016
 questions[35]= "36)  La falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n no impedir&aacute; que se tenga por realizado el acto de que se trate, siempre que se aporte aqu&eacute;lla o se subsane el defecto dentro del plazo de:";
 choices[35]= new Array();
 choices[35][0] = "5 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[35][1] = "10 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[35][2] = "15 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[35][3] = "20 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 answers[35] = choices[35][1];
 units[35] = "7";
 comments[35] = "Id Pregunta: 535. LEY 39/2015";
 preguntaids[35] = 535


//  Id pregunta: 845 Año de creación de pregunta: 2016
 questions[36]= "37)  Respecto a la reutilizaci&oacute;n de sistemas y aplicaciones de propiedad de la Administraci&oacute;n:";
 choices[36]= new Array();
 choices[36][0] = "Las Administraciones pondr&aacute;n siempre a disposici&oacute;n de cualquiera de ellas que lo solicite las aplicaciones, desarrolladas por sus servicios o que hayan sido objeto de contrataci&oacute;n y de cuyos derechos de propiedad intelectual sean titulares.";
 choices[36][1] = "Las aplicaciones a las que se refiere el apartado anterior podr&aacute;n ser declaradas como de fuentes abiertas, cuando de ello se derive una mayor transparencia en el funcionamiento de la Administraci&oacute;n P&uacute;blica o se fomente con ello la incorporaci&oacute;n de los ciudadanos a la Sociedad de la informaci&oacute;n.";
 choices[36][2] = "Las Administraciones P&uacute;blicas, con car&aacute;cter posterior a la adquisici&oacute;n, desarrollo o al mantenimiento a lo largo de todo el ciclo de vida de una aplicaci&oacute;n, tanto si se realiza con medios propios o por la contrataci&oacute;n de los servicios correspondientes, deber&aacute;n consultar en el directorio general de aplicaciones.";
 choices[36][3] = "En el directorio general de aplicaciones constar&aacute;n las aplicaciones disponibles de la Administraci&oacute;n General del Estado.";
 answers[36] = choices[36][1];
 units[36] = "4, 7, 8, 9";
 comments[36] = "Id Pregunta: 845. Ley 40/2015";
 preguntaids[36] = 845


//  Id pregunta: 664 Año de creación de pregunta: 2016
 questions[37]= "38)  De acuerdo a la Ley 39/2015, los interesados en un procedimiento administrativo, tienen los siguientes derechos:";
 choices[37]= new Array();
 choices[37][0] = "Conocer el estado de la tramitaci&oacute;n de cualquier procedimiento.";
 choices[37][1] = "Identificar a las autoridades y al personal al servicio de las Administraciones P&uacute;blicas bajo cuya responsabilidad se tramiten los procedimientos.";
 choices[37][2] = "No presentar documentos originales, en ning&uacute;n caso.";
 choices[37][3] = "No presentar datos y documentos no exigidos por las normas aplicables al procedimiento de que se trate, que ya se encuentren en poder del Sector P&uacute;blico o que hayan sido elaborado por &eacute;ste.";
 answers[37] = choices[37][1];
 units[37] = "7";
 comments[37] = "Id Pregunta: 664. Art&iacute;culo 53 de la Ley 39/2015";
 preguntaids[37] = 664


//  Id pregunta: 841 Año de creación de pregunta: 2016
 questions[38]= "39)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[38]= new Array();
 choices[38][0] = "El &oacute;rgano administrativo que se estime incompetente para la resoluci&oacute;n de un asunto remitir&aacute; directamente las actuaciones al &oacute;rgano superior, debiendo notificar esta circunstancia a los interesados.";
 choices[38][1] = "Los interesados que sean parte en el procedimiento podr&aacute;n dirigirse al &oacute;rgano que se encuentre conociendo de un asunto para que decline su competencia y remita las actuaciones al &oacute;rgano competente.";
 choices[38][2] = "Asimismo, podr&aacute;n dirigirse al &oacute;rgano que estimen competente para que requiera de inhibici&oacute;n al que est&eacute; conociendo del asunto.";
 choices[38][3] = "Los conflictos de atribuciones s&oacute;lo podr&aacute;n suscitarse entre &oacute;rganos de una misma Administraci&oacute;n no relacionados jer&aacute;rquicamente, y respecto a asuntos sobre los que no haya finalizado el procedimiento administrativo.";
 answers[38] = choices[38][0];
 units[38] = "4, 7, 8, 9";
 comments[38] = "Id Pregunta: 841. Ley 40/2015";
 preguntaids[38] = 841


//  Id pregunta: 797 Año de creación de pregunta: 2016
 questions[39]= "40)  Se&ntilde;ale la respuesta correcta:";
 choices[39]= new Array();
 choices[39][0] = "corresponde a los &oacute;rganos superiores establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y a los &oacute;rganos directivos su desarrollo y ejecuci&oacute;n";
 choices[39][1] = "corresponde establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y su desarrollo y ejecuci&oacute;n a los &oacute;rganos superiores";
 choices[39][2] = "corresponde establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y su desarrollo y ejecuci&oacute;n a los &oacute;rganos directivos";
 choices[39][3] = "corresponde a los &oacute;rganos directivos establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y a los &oacute;rganos superiores su desarrollo y ejecuci&oacute;n";
 answers[39] = choices[39][0];
 units[39] = "4, 7, 8, 9";
 comments[39] = "Id Pregunta: 797. Ley 40/2015";
 preguntaids[39] = 797


//  Id pregunta: 515 Año de creación de pregunta: 2016
 questions[40]= "41)  La presente Ley se aplica al sector p&uacute;blico, que comprende (se&ntilde;ala la incorrecta):";
 choices[40]= new Array();
 choices[40][0] = "la Administraci&oacute;n General del Estado y las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[40][1] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[40][2] = "el sector p&uacute;blico institucional";
 choices[40][3] = "el sector privado corporativo";
 answers[40] = choices[40][3];
 units[40] = "7";
 comments[40] = "Id Pregunta: 515. LEY 39/2015";
 preguntaids[40] = 515


//  Id pregunta: 148 Año de creación de pregunta: 2016
 questions[41]= "42)  La publicaci&oacute;n del &laquo;Bolet&iacute;n Oficial del Estado&raquo; en la sede electr&oacute;nica del Organismo competente:";
 choices[41]= new Array();
 choices[41][0] = "Tiene car&aacute;cter supletorio respecto a la versi&oacute;n en formato papel";
 choices[41][1] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, aunque no se podr&aacute; derivar de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[41][2] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se determinen reglamentariamente, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 choices[41][3] = "Tendr&aacute; car&aacute;cter oficial y aut&eacute;ntico en las condiciones y con las garant&iacute;as que se habr&aacute;n de determinar necesariamente por Ley, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil";
 answers[41] = choices[41][2];
 units[41] = "7";
 comments[41] = "Id Pregunta: 148. Ley 39/2015, Art&iacute;culo 131";
 preguntaids[41] = 148


//  Id pregunta: 767 Año de creación de pregunta: 2016
 questions[42]= "43)  Las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas:";
 choices[42]= new Array();
 choices[42][0] = "no quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley, salvo, cuando ejerzan potestades administrativas";
 choices[42][1] = "no quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley, ni siquiera, cuando ejerzan potestades administrativas";
 choices[42][2] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, y en todo caso, cuando ejerzan potestades administrativas";
 choices[42][3] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, excepto, cuando ejerzan potestades administrativas";
 answers[42] = choices[42][2];
 units[42] = "4, 7, 8, 9";
 comments[42] = "Id Pregunta: 767. Ley 40/2015";
 preguntaids[42] = 767


//  Id pregunta: 806 Año de creación de pregunta: 2016
 questions[43]= "44)  Los nombramientos de los Secretarios generales t&eacute;cnicos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, de las Comunidades Aut&oacute;nomas o de las Entidades locales, pertenecientes al:";
 choices[43]= new Array();
 choices[43][0] = "Subgrupo A1";
 choices[43][1] = "Subgrupo A2";
 choices[43][2] = "Subgrupo B";
 choices[43][3] = "Subgrupo C1";
 answers[43] = choices[43][0];
 units[43] = "4, 7, 8, 9";
 comments[43] = "Id Pregunta: 806. Ley 40/2015";
 preguntaids[43] = 806


//  Id pregunta: 816 Año de creación de pregunta: 2016
 questions[44]= "45)  Podr&aacute;n crearse por Real Decreto Subdelegaciones del Gobierno en las Comunidades Aut&oacute;nomas uniprovinciales, cuando lo justifiquen circunstancias como:";
 choices[44]= new Array();
 choices[44][0] = "la poblaci&oacute;n del territorio";
 choices[44][1] = "el volumen de gesti&oacute;n";
 choices[44][2] = "sus singularidades geogr&aacute;ficas, sociales o econ&oacute;micas";
 choices[44][3] = "todas son correctas";
 answers[44] = choices[44][3];
 units[44] = "4, 7, 8, 9";
 comments[44] = "Id Pregunta: 816. Ley 40/2015";
 preguntaids[44] = 816


//  Id pregunta: 672 Año de creación de pregunta: 2016
 questions[45]= "46)  Respecto a la ejecuci&oacute;n de la resoluci&oacute;n de un procedimiento administrativo, se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[45]= new Array();
 choices[45][0] = "Las Administraciones P&uacute;blicas no iniciar&aacute;n la ejecuci&oacute;n hasta que se haya dictado resoluci&oacute;n.";
 choices[45][1] = "De una resoluci&oacute;n administrativa nunca puede derivarse una multa.";
 choices[45][2] = "La ejecuci&oacute;n forzosa de una resoluci&oacute;n puede afectar al patrimonio.";
 choices[45][3] = "Contra algunas resoluciones es posible interponer recursos por v&iacute;a administrativa.";
 answers[45] = choices[45][1];
 units[45] = "7";
 comments[45] = "Id Pregunta: 672. Cap&iacute;tulo VII, T&iacute;tulo IV de la Ley 39/2015";
 preguntaids[45] = 672


//  Id pregunta: 849 Año de creación de pregunta: 2016
 questions[46]= "47)  &iquest;Cu&aacute;l de los siguientes es un sistema de firma para la actuaci&oacute;n administrativa automatizada?";
 choices[46]= new Array();
 choices[46][0] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico reconocido o cualificado que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[46][1] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico avanzado o reconocido que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[46][2] = "C&oacute;digo seguro de verificaci&oacute;n vinculado a la Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de Derecho P&uacute;blico, en los t&eacute;rminos y condiciones establecidos, permiti&eacute;ndose en todo caso la comprobaci&oacute;n de la integridad del documento mediante el acceso al portal correspondiente.";
 choices[46][3] = "Firma electr&oacute;nica del titular del &oacute;rgano o empleado p&uacute;blico.";
 answers[46] = choices[46][0];
 units[46] = "4, 7, 8, 9";
 comments[46] = "Id Pregunta: 849. Ley 40/2015";
 preguntaids[46] = 849


//  Id pregunta: 825 Año de creación de pregunta: 2016
 questions[47]= "48)  Debe abstenerse el funcionario que tiene relaci&oacute;n de servicio con interesado en el asunto o le ha prestado servicios profesionales en los ...";
 choices[47]= new Array();
 choices[47][0] = "Tres &uacute;ltimos a&ntilde;os";
 choices[47][1] = "Cinco &uacute;ltimos a&ntilde;os";
 choices[47][2] = "Cuatro &uacute;ltimos a&ntilde;os";
 choices[47][3] = "Dos &uacute;ltimos a&ntilde;os";
 answers[47] = choices[47][1];
 units[47] = "4, 7, 8, 9";
 comments[47] = "Id Pregunta: 825. Ley 40/2015";
 preguntaids[47] = 825


//  Id pregunta: 768 Año de creación de pregunta: 2016
 questions[48]= "49)  Las Universidades p&uacute;blicas se regir&aacute;n por:";
 choices[48]= new Array();
 choices[48][0] = "las previsiones de la presente Ley y supletoriamente por su normativa espec&iacute;fica";
 choices[48][1] = "su normativa espec&iacute;fica y supletoriamente por las previsiones de la presente Ley";
 choices[48][2] = "exclusivamente por su normativa espec&iacute;fica";
 choices[48][3] = "exclusivamente por las previsiones de la presente Ley";
 answers[48] = choices[48][1];
 units[48] = "4, 7, 8, 9";
 comments[48] = "Id Pregunta: 768. Ley 40/2015";
 preguntaids[48] = 768


//  Id pregunta: 787 Año de creación de pregunta: 2016
 questions[49]= "50)  La Administraci&oacute;n General del Estado comprende (se&ntilde;ala la incorrecta):";
 choices[49]= new Array();
 choices[49][0] = "la Organizaci&oacute;n Central, que integra los Ministerios y los servicios comunes";
 choices[49][1] = "la Organizaci&oacute;n Territorial";
 choices[49][2] = "la Organizaci&oacute;n sectorial";
 choices[49][3] = "la Administraci&oacute;n General del Estado en el exterior";
 answers[49] = choices[49][2];
 units[49] = "4, 7, 8, 9";
 comments[49] = "Id Pregunta: 787. Ley 40/2015";
 preguntaids[49] = 787


//  Id pregunta: 802 Año de creación de pregunta: 2016
 questions[50]= "51)  La Administraci&oacute;n General del Estado se organiza:";
 choices[50]= new Array();
 choices[50][0] = "en Ministerios";
 choices[50][1] = "en Presidencia del Gobierno y en Ministerios";
 choices[50][2] = "en Presidencia del Gobierno, en Ministerios y en Secretar&iacute;as Generales";
 choices[50][3] = "en Presidencia del Gobierno, en Ministerios, en Secretar&iacute;as Generales y en el Servicio Exterior";
 answers[50] = choices[50][1];
 units[50] = "4, 7, 8, 9";
 comments[50] = "Id Pregunta: 802. Ley 40/2015";
 preguntaids[50] = 802


//  Id pregunta: 792 Año de creación de pregunta: 2016
 questions[51]= "52)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado los Subdelegados del Gobierno en las provincias los cuales tendr&aacute;n nivel de:";
 choices[51]= new Array();
 choices[51][0] = "Subsecretario";
 choices[51][1] = "Subdirector general";
 choices[51][2] = "Secretario de Estado";
 choices[51][3] = "ninguna es correcta";
 answers[51] = choices[51][1];
 units[51] = "4, 7, 8, 9";
 comments[51] = "Id Pregunta: 792. Ley 40/2015";
 preguntaids[51] = 792


//  Id pregunta: 829 Año de creación de pregunta: 2016
 questions[52]= "53)  La recusaci&oacute;n se plantea...";
 choices[52]= new Array();
 choices[52][0] = "Antes de iniciado el procedimiento";
 choices[52][1] = "Una vez iniciado el procedimiento";
 choices[52][2] = "Cuando el instructor dicta propuesta de resoluci&oacute;n";
 choices[52][3] = "En cualquier momento del procedimiento";
 answers[52] = choices[52][0];
 units[52] = "4, 7, 8, 9";
 comments[52] = "Id Pregunta: 829. Ley 40/2015";
 preguntaids[52] = 829


//  Id pregunta: 788 Año de creación de pregunta: 2016
 questions[53]= "54)  En la organizaci&oacute;n central son &oacute;rganos superiores:";
 choices[53]= new Array();
 choices[53][0] = "los Subsecretarios y los Secretarios generales";
 choices[53][1] = "los Ministros y los Secretarios generales t&eacute;cnicos";
 choices[53][2] = "los Secretarios de Estado y los Directores generales";
 choices[53][3] = "los Ministros y los Secretarios de Estado";
 answers[53] = choices[53][3];
 units[53] = "4, 7, 8, 9";
 comments[53] = "Id Pregunta: 788. Ley 40/2015";
 preguntaids[53] = 788


//  Id pregunta: 536 Año de creación de pregunta: 2016
 questions[54]= "55)  Las Administraciones P&uacute;blicas podr&aacute;n habilitar:";
 choices[54]= new Array();
 choices[54][0] = "con car&aacute;cter general a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[54][1] = "con car&aacute;cter general o espec&iacute;fico a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[54][2] = "con car&aacute;cter general o espec&iacute;fico a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[54][3] = "con car&aacute;cter general a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 answers[54] = choices[54][2];
 units[54] = "7";
 comments[54] = "Id Pregunta: 536. LEY 39/2015";
 preguntaids[54] = 536


//  Id pregunta: 840 Año de creación de pregunta: 2016
 questions[55]= "56)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta correcta.";
 choices[55]= new Array();
 choices[55][0] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos provisionalmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[55][1] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos temporalmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[55][2] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos eventualmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[55][3] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos circunstancialmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 answers[55] = choices[55][1];
 units[55] = "4, 7, 8, 9";
 comments[55] = "Id Pregunta: 840. Ley 40/2015";
 preguntaids[55] = 840


//  Id pregunta: 543 Año de creación de pregunta: 2016
 questions[56]= "57)  Se&ntilde;ala la correcta:";
 choices[56]= new Array();
 choices[56][0] = "la falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n impedir&aacute; que se tenga por realizado el acto de que se trate";
 choices[56][1] = "el documento electr&oacute;nico que acredite el resultado de la consulta al registro electr&oacute;nico de apoderamientos correspondiente tendr&aacute; la condici&oacute;n de acreditaci&oacute;n a estos efectos";
 choices[56][2] = "los registros electr&oacute;nicos generales y particulares de apoderamientos pertenecientes a todas y cada una de las Administraciones, ser&aacute;n preferiblemente interoperables entre s&iacute;";
 choices[56][3] = "el interesado no podr&aacute; comparecer por s&iacute; mismo en un procedimiento en el que haya designado representante";
 answers[56] = choices[56][1];
 units[56] = "7";
 comments[56] = "Id Pregunta: 543. LEY 39/2015";
 preguntaids[56] = 543


//  Id pregunta: 527 Año de creación de pregunta: 2016
 questions[57]= "58)  Cuando la condici&oacute;n de interesado derivase de alguna relaci&oacute;n jur&iacute;dica transmisible el derecho-habiente suceder&aacute; en tal condici&oacute;n:";
 choices[57]= new Array();
 choices[57][0] = "si el procedimiento no ha alcanzado la fase de instrucci&oacute;n";
 choices[57][1] = "si el procedimiento no ha alcanzado el tr&aacute;mite de audiencia";
 choices[57][2] = "si el procedimiento no ha alcanzado el tr&aacute;mite de informaci&oacute;n p&uacute;blica";
 choices[57][3] = "cualquiera que sea el estado del procedimiento";
 answers[57] = choices[57][3];
 units[57] = "7";
 comments[57] = "Id Pregunta: 527. LEY 39/2015";
 preguntaids[57] = 527


//  Id pregunta: 673 Año de creación de pregunta: 2016
 questions[58]= "59)  De forma general, las fases de un procedimiento administrativo com&uacute;n son:";
 choices[58]= new Array();
 choices[58][0] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, finalizaci&oacute;n y ejecuci&oacute;n.";
 choices[58][1] = "Iniciaci&oacute;n, desarrollo y resoluci&oacute;n.";
 choices[58][2] = "Iniciaci&oacute;n, ordenaci&oacute;n, instrucci&oacute;n, resoluci&oacute;n y ejecuci&oacute;n.";
 choices[58][3] = "Iniciaci&oacute;n, desarrollo y finalizaci&oacute;n.";
 answers[58] = choices[58][0];
 units[58] = "7";
 comments[58] = "Id Pregunta: 673. T&iacute;tulo IV de la Ley 39/2015";
 preguntaids[58] = 673


//  Id pregunta: 839 Año de creación de pregunta: 2016
 questions[59]= "60)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. La formalizaci&oacute;n de las encomiendas de gesti&oacute;n se ajustar&aacute; a las siguientes reglas:";
 choices[59]= new Array();
 choices[59][0] = "Cuando la encomienda de gesti&oacute;n se realice entre &oacute;rganos administrativos o Entidades de Derecho P&uacute;blico pertenecientes a la misma Administraci&oacute;n deber&aacute; formalizarse en los t&eacute;rminos que establezca su normativa propia y, en su defecto, por acuerdo expreso de los &oacute;rganos o Entidades de Derecho P&uacute;blico intervinientes. En todo caso, el instrumento de formalizaci&oacute;n de la encomienda de gesti&oacute;n y su resoluci&oacute;n deber&aacute; ser publicada, para su eficacia, en el Bolet&iacute;n Oficial del Estado, en el Bolet&iacute;n oficial de la Comunidad Aut&oacute;noma o en el de la Provincia, seg&uacute;n la Administraci&oacute;n a que pertenezca el &oacute;rgano encomendante.";
 choices[59][1] = "Cada Administraci&oacute;n podr&aacute; regular los requisitos necesarios para la validez de tales acuerdos que incluir&aacute;n, al menos, expresa menci&oacute;n de la actividad o actividades a las que afecten, el plazo de vigencia y la naturaleza y alcance de la gesti&oacute;n encomendada.";
 choices[59][2] = "Cuando la encomienda de gesti&oacute;n se realice entre &oacute;rganos y Entidades de Derecho P&uacute;blico de distintas Administraciones se formalizar&aacute; mediante firma del correspondiente convenio entre ellas, que deber&aacute; ser publicado en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;, en el Bolet&iacute;n oficial de la Comunidad Aut&oacute;noma o en el de la Provincia, seg&uacute;n la Administraci&oacute;n a que pertenezca el &oacute;rgano encomendante, salvo en el supuesto de la gesti&oacute;n ordinaria de los servicios de las Comunidades Aut&oacute;nomas por las Diputaciones Provinciales o en su caso Cabildos o Consejos insulares, que se regir&aacute; por la legislaci&oacute;n de R&eacute;gimen Local.";
 choices[59][3] = "Todas son correctas.";
 answers[59] = choices[59][3];
 units[59] = "4, 7, 8, 9";
 comments[59] = "Id Pregunta: 839. Ley 40/2015";
 preguntaids[59] = 839


//  Id pregunta: 523 Año de creación de pregunta: 2016
 questions[60]= "61)  El sector p&uacute;blico institucional se integra por:";
 choices[60]= new Array();
 choices[60][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho privado vinculados o independientes de las Administraciones P&uacute;blicas";
 choices[60][1] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[60][2] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o independientes de las Administraciones P&uacute;blicas";
 choices[60][3] = "cualesquiera organismos p&uacute;blicos y entidades de derecho privado vinculados o dependientes de las Administraciones P&uacute;blicas";
 answers[60] = choices[60][1];
 units[60] = "7";
 comments[60] = "Id Pregunta: 523. LEY 39/2015";
 preguntaids[60] = 523


//  Id pregunta: 152 Año de creación de pregunta: 2016
 questions[61]= "62)  Los documentos electr&oacute;nicos deber&aacute;n conservarse en un formato que permita: (se&ntilde;ala la respuesta incorrecta)";
 choices[61]= new Array();
 choices[61][0] = "garantizar su consulta hasta transcurridos cinco a&ntilde;os desde su emisi&oacute;n";
 choices[61][1] = "garantizar la conservaci&oacute;n del documento";
 choices[61][2] = "garantizar la autenticidad del documento";
 choices[61][3] = "garantizar la integridad del documento";
 answers[61] = choices[61][0];
 units[61] = "7";
 comments[61] = "Id Pregunta: 152. Ley 39/2015, Art&iacute;culo 17";
 preguntaids[61] = 152


//  Id pregunta: 842 Año de creación de pregunta: 2016
 questions[62]= "63)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Indique la respuesta correcta.";
 choices[62]= new Array();
 choices[62][0] = "Para la v&aacute;lida constituci&oacute;n del &oacute;rgano, a efectos de la celebraci&oacute;n de sesiones, deliberaciones y toma de acuerdos, se requerir&aacute; la asistencia, presencial o a distancia, del Presidente y Secretario o en su caso, de quienes les suplan, y la de la mitad de sus miembros.";
 choices[62][1] = "Cuando se trate de los &oacute;rganos colegiados a que se refiere el art&iacute;culo 15.2, el Presidente podr&aacute; considerar v&aacute;lidamente constituido el &oacute;rgano, a efectos de celebraci&oacute;n de sesi&oacute;n, si asisten los representantes de las Administraciones P&uacute;blicas y de las organizaciones representativas de intereses sociales miembros del &oacute;rgano a los que se haya atribuido la condici&oacute;n de portavoces.";
 choices[62][2] = "Cuando estuvieran reunidos, de manera presencial o a distancia, el Secretario y todos los miembros del &oacute;rgano colegiado, o en su caso las personas que les suplan, &eacute;stos podr&aacute;n constituirse v&aacute;lidamente como &oacute;rgano colegiado para la celebraci&oacute;n de sesiones, deliberaciones y adopci&oacute;n de acuerdos sin necesidad de convocatoria previa cuando as&iacute; lo decida el Presidente.";
 choices[62][3] = "Todas son correctas.";
 answers[62] = choices[62][1];
 units[62] = "4, 7, 8, 9";
 comments[62] = "Id Pregunta: 842. Ley 40/2015";
 preguntaids[62] = 842


//  Id pregunta: 808 Año de creación de pregunta: 2016
 questions[63]= "64)  A los Directores generales les corresponde (se&ntilde;ala la incorrecta):";
 choices[63]= new Array();
 choices[63][0] = "proponer los proyectos de su Direcci&oacute;n general para alcanzar los objetivos establecidos por el Ministro, dirigir su ejecuci&oacute;n y controlar su adecuado cumplimiento";
 choices[63][1] = "solicitar del Ministerio de Hacienda y Administraciones P&uacute;blicas la afectaci&oacute;n o el arrendamiento de los inmuebles necesarios para el cumplimiento de los fines de los servicios a cargo del Departamento";
 choices[63][2] = "ejercer las competencias atribuidas a la Direcci&oacute;n general y las que le sean desconcentradas o delegadas";
 choices[63][3] = "impulsar y supervisar las actividades que forman parte de la gesti&oacute;n ordinaria del &oacute;rgano directivo y velar por el buen funcionamiento de los &oacute;rganos y unidades dependientes y del personal integrado en los mismos";
 answers[63] = choices[63][1];
 units[63] = "4, 7, 8, 9";
 comments[63] = "Id Pregunta: 808. Ley 40/2015";
 preguntaids[63] = 808


//  Id pregunta: 819 Año de creación de pregunta: 2016
 questions[64]= "65)  Los servicios territoriales de la Administraci&oacute;n General del Estado en la Comunidad Aut&oacute;noma se organizar&aacute;n atendiendo al mejor cumplimiento de sus fines, en:";
 choices[64]= new Array();
 choices[64][0] = "servicios integrados en las Delegaciones del Gobierno";
 choices[64][1] = "servicios no integrados en las Delegaciones del Gobierno";
 choices[64][2] = "servicios integrados y no integrados en las Delegaciones del Gobierno";
 choices[64][3] = "ninguna es correcta";
 answers[64] = choices[64][2];
 units[64] = "4, 7, 8, 9";
 comments[64] = "Id Pregunta: 819. Ley 40/2015";
 preguntaids[64] = 819


//  Id pregunta: 780 Año de creación de pregunta: 2016
 questions[65]= "66)  Los &oacute;rganos administrativos podr&aacute;n dirigir las actividades de sus &oacute;rganos jer&aacute;rquicamente dependientes mediante:";
 choices[65]= new Array();
 choices[65][0] = "circulares";
 choices[65][1] = "reglamentos internos";
 choices[65][2] = "instrucciones y &oacute;rdenes de servicio";
 choices[65][3] = "disposiciones de car&aacute;cter general";
 answers[65] = choices[65][2];
 units[65] = "4, 7, 8, 9";
 comments[65] = "Id Pregunta: 780. Ley 40/2015";
 preguntaids[65] = 780


//  Id pregunta: 836 Año de creación de pregunta: 2016
 questions[66]= "67)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta correcta.";
 choices[66]= new Array();
 choices[66][0] = "Los &oacute;rganos de las diferentes Administraciones P&uacute;blicas podr&aacute;n delegar el ejercicio de las competencias que tengan atribuidas en otros &oacute;rganos de la misma Administraci&oacute;n, aun cuando no sean jer&aacute;rquicamente dependientes, o en los Organismos p&uacute;blicos o Entidades de Derecho P&uacute;blico vinculados o dependientes de aqu&eacute;llas.";
 choices[66][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado, la delegaci&oacute;n de competencias deber&aacute; ser aprobada previamente por el &oacute;rgano ministerial de quien dependa el &oacute;rgano delegante y en el caso de los Organismos p&uacute;blicos o Entidades vinculados o dependientes, por el &oacute;rgano m&aacute;ximo de direcci&oacute;n, de acuerdo con sus normas de creaci&oacute;n. Cuando se trate de &oacute;rganos no relacionados jer&aacute;rquicamente ser&aacute; necesaria la aprobaci&oacute;n previa del superior com&uacute;n si ambos pertenecen al mismo Ministerio, o del &oacute;rgano superior de quien dependa el &oacute;rgano delegado, si el delegante y el delegado pertenecen a diferentes Ministerios.";
 choices[66][2] = "Asimismo, los &oacute;rganos de la Administraci&oacute;n General del Estado podr&aacute;n delegar el ejercicio de sus competencias propias en sus Organismos p&uacute;blicos y Entidades vinculados o dependientes, cuando resulte conveniente para alcanzar los fines que tengan asignados y mejorar la eficacia de su gesti&oacute;n. La delegaci&oacute;n deber&aacute; ser previamente aprobada por los &oacute;rganos de los que dependan el &oacute;rgano delegante y el &oacute;rgano delegado, o aceptada por este &uacute;ltimo cuando sea el &oacute;rgano m&aacute;ximo de direcci&oacute;n del Organismo p&uacute;blico o Entidad vinculado o dependiente.";
 choices[66][3] = "Todas son correctas.";
 answers[66] = choices[66][3];
 units[66] = "4, 7, 8, 9";
 comments[66] = "Id Pregunta: 836. Ley 40/2015";
 preguntaids[66] = 836


//  Id pregunta: 514 Año de creación de pregunta: 2016
 questions[67]= "68)  Podr&aacute;n establecerse especialidades del procedimiento referidas a los &oacute;rganos competentes, plazos propios del concreto procedimiento por raz&oacute;n de la materia, formas de iniciaci&oacute;n y terminaci&oacute;n, publicaci&oacute;n e informes a recabar:";
 choices[67]= new Array();
 choices[67][0] = "solo mediante ley";
 choices[67][1] = "reglamentariamente";
 choices[67][2] = "mediante ley o reglamentariamente";
 choices[67][3] = "ninguna es correcta";
 answers[67] = choices[67][1];
 units[67] = "7";
 comments[67] = "Id Pregunta: 514. LEY 39/2015";
 preguntaids[67] = 514


//  Id pregunta: 781 Año de creación de pregunta: 2016
 questions[68]= "69)  Las instrucciones y &oacute;rdenes de servicio se publicar&aacute;n en el bolet&iacute;n oficial que corresponda, sin perjuicio de su difusi&oacute;n de acuerdo con lo previsto en la Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno cuando:";
 choices[68]= new Array();
 choices[68][0] = "una disposici&oacute;n espec&iacute;fica as&iacute; lo establezca";
 choices[68][1] = "se estime conveniente por raz&oacute;n de los destinatarios";
 choices[68][2] = "se estime conveniente por raz&oacute;n de los efectos que puedan producirse";
 choices[68][3] = "todas son correctas";
 answers[68] = choices[68][3];
 units[68] = "4, 7, 8, 9";
 comments[68] = "Id Pregunta: 781. Ley 40/2015";
 preguntaids[68] = 781


//  Id pregunta: 775 Año de creación de pregunta: 2016
 questions[69]= "70)  Las Administraciones P&uacute;blicas que, en el ejercicio de sus respectivas competencias, establezcan medidas que limiten el ejercicio de derechos individuales o colectivos o exijan el cumplimiento de requisitos para el desarrollo de una actividad, deber&aacute;n (se&ntilde;ala la incorrecta):";
 choices[69]= new Array();
 choices[69][0] = "aplicar el principio de proporcionalidad y elegir la medida menos restrictiva";
 choices[69][1] = "motivar su necesidad para la protecci&oacute;n del inter&eacute;s p&uacute;blico";
 choices[69][2] = "justificar su adecuaci&oacute;n para lograr los fines que se persiguen, evitando en la medida de lo posible que se produzcan diferencias de trato discriminatorias";
 choices[69][3] = "evaluar peri&oacute;dicamente los efectos y resultados obtenidos";
 answers[69] = choices[69][2];
 units[69] = "4, 7, 8, 9";
 comments[69] = "Id Pregunta: 775. Ley 40/2015";
 preguntaids[69] = 775


//  Id pregunta: 529 Año de creación de pregunta: 2016
 questions[70]= "71)  Los interesados con capacidad de obrar podr&aacute;n actuar por medio de representante:";
 choices[70]= new Array();
 choices[70][0] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 choices[70][1] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[70][2] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[70][3] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 answers[70] = choices[70][2];
 units[70] = "7";
 comments[70] = "Id Pregunta: 529. LEY 39/2015";
 preguntaids[70] = 529


//  Id pregunta: 154 Año de creación de pregunta: 2016
 questions[71]= "72)  Los t&eacute;rminos y plazos establecidos en la ley 39/2015 u otras leyes obligan a:";
 choices[71]= new Array();
 choices[71][0] = "las autoridades al servicio de las Administraciones P&uacute;blicas competentes para la tramitaci&oacute;n de los asuntos";
 choices[71][1] = "el personal al servicio de las Administraciones P&uacute;blicas competentes para la tramitaci&oacute;n de los asuntos";
 choices[71][2] = "los interesados en la tramitaci&oacute;n de los asuntos";
 choices[71][3] = "todas son correctas";
 answers[71] = choices[71][3];
 units[71] = "7";
 comments[71] = "Id Pregunta: 154. Ley 39/2015, Art&iacute;culo 29";
 preguntaids[71] = 154


//  Id pregunta: 156 Año de creación de pregunta: 2016
 questions[72]= "73)  Seg&uacute;n la ley 39/2015, toda notificaci&oacute;n deber&aacute; (se&ntilde;ala la respuesta incorrecta):";
 choices[72]= new Array();
 choices[72][0] = "contener el texto &iacute;ntegro de la resoluci&oacute;n";
 choices[72][1] = "expresar los recursos que procedan, &uacute;nicamente en v&iacute;a administrativa";
 choices[72][2] = "indicar si pone fin o no a la v&iacute;a administrativa";
 choices[72][3] = "indicar el &oacute;rgano ante el que hubieran de presentarse los recursos que procedan y el plazo para interponerlos";
 answers[72] = choices[72][1];
 units[72] = "7";
 comments[72] = "Id Pregunta: 156. Ley 39/2015, Art&iacute;culo 40";
 preguntaids[72] = 156


//  Id pregunta: 813 Año de creación de pregunta: 2016
 questions[73]= "74)  Las Delegaciones del Gobierno tendr&aacute;n su sede en:";
 choices[73]= new Array();
 choices[73][0] = "la localidad elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[73][1] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[73][2] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[73][3] = "la localidad donde elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 answers[73] = choices[73][2];
 units[73] = "4, 7, 8, 9";
 comments[73] = "Id Pregunta: 813. Ley 40/2015";
 preguntaids[73] = 813


//  Id pregunta: 542 Año de creación de pregunta: 2016
 questions[74]= "75)  Respecto a los poderes que se inscriban en los registros electr&oacute;nicos generales y particulares de apoderamientos pueden ser:";
 choices[74]= new Array();
 choices[74][0] = "un poder general para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa y ante cualquier Administraci&oacute;n";
 choices[74][1] = "un poder para que el apoderado pueda actuar en nombre del poderdante en cualquier actuaci&oacute;n administrativa ante una Administraci&oacute;n u Organismo concreto";
 choices[74][2] = "un poder para que el apoderado pueda actuar en nombre del poderdante &uacute;nicamente para la realizaci&oacute;n de determinados tr&aacute;mites especificados en el poder";
 choices[74][3] = "todas son correctas";
 answers[74] = choices[74][3];
 units[74] = "7";
 comments[74] = "Id Pregunta: 542. LEY 39/2015";
 preguntaids[74] = 542


