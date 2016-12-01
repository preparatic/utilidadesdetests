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

//  Id pregunta: 770 Año de creación de pregunta: 2016
 questions[0]= "1)  Las Administraciones P&uacute;blicas sirven con objetividad los intereses generales, con sometimiento pleno a la Constituci&oacute;n, a la Ley y al Derecho y act&uacute;an de acuerdo con los principios de:";
 choices[0]= new Array();
 choices[0][0] = "eficacia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[0][1] = "eficiencia, legalidad, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 choices[0][2] = "eficacia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y coordinaci&oacute;n";
 choices[0][3] = "eficiencia, jerarqu&iacute;a, descentralizaci&oacute;n, desconcentraci&oacute;n y cooperaci&oacute;n";
 answers[0] = choices[0][2];
 units[0] = "4, 7, 8, 9";
 comments[0] = "Id Pregunta: 770. Ley 40/2015";
 preguntaids[0] = 770


//  Id pregunta: 824 Año de creación de pregunta: 2016
 questions[1]= "2)  &iquest;Cu&aacute;l de los siguientes no ser&iacute;a un motivo de abstenci&oacute;n conforme el art. 23 de la Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico?";
 choices[1]= new Array();
 choices[1][0] = "Ser el personal respecto del que la abstenci&oacute;n se plantea sobrino del interesado en el procedimiento";
 choices[1][1] = "Ser el personal respecto del que la abstenci&oacute;n se plantea vecino del interesado en el procedimiento";
 choices[1][2] = "Ser el personal respecto del que la abstenci&oacute;n se plantea cu&ntilde;ado del interesado en el procedimiento";
 choices[1][3] = "Ser el personal respecto del que la abstenci&oacute;n se plantea nieto del interesado en el procedimiento";
 answers[1] = choices[1][2];
 units[1] = "4, 7, 8, 9";
 comments[1] = "Id Pregunta: 824. Ley 40/2015";
 preguntaids[1] = 824


//  Id pregunta: 795 Año de creación de pregunta: 2016
 questions[2]= "3)  Todos los &oacute;rganos de la Administraci&oacute;n General del Estado que no sean &oacute;rgano superior o directivo se encuentran bajo la dependencia o direcci&oacute;n de:";
 choices[2]= new Array();
 choices[2][0] = "un &oacute;rgano superior";
 choices[2][1] = "un &oacute;rgano directivo";
 choices[2][2] = "un &oacute;rgano superior o directivo";
 choices[2][3] = "ninguna es correcta";
 answers[2] = choices[2][2];
 units[2] = "4, 7, 8, 9";
 comments[2] = "Id Pregunta: 795. Ley 40/2015";
 preguntaids[2] = 795


//  Id pregunta: 799 Año de creación de pregunta: 2016
 questions[3]= "4)  Los elementos organizativos b&aacute;sicos de las estructuras org&aacute;nicas son:";
 choices[3]= new Array();
 choices[3][0] = "los &oacute;rganos administrativos";
 choices[3][1] = "las entidades dependientes";
 choices[3][2] = "las unidades administrativas";
 choices[3][3] = "los servicios comunes";
 answers[3] = choices[3][2];
 units[3] = "4, 7, 8, 9";
 comments[3] = "Id Pregunta: 799. Ley 40/2015";
 preguntaids[3] = 799


//  Id pregunta: 796 Año de creación de pregunta: 2016
 questions[4]= "5)  Los estatutos de los Organismos p&uacute;blicos determinar&aacute;n sus respectivos:";
 choices[4]= new Array();
 choices[4][0] = "&oacute;rganos superiores";
 choices[4][1] = "&oacute;rganos directivos";
 choices[4][2] = "&oacute;rganos superiores y directivos";
 choices[4][3] = "ninguna es correcta";
 answers[4] = choices[4][1];
 units[4] = "4, 7, 8, 9";
 comments[4] = "Id Pregunta: 796. Ley 40/2015";
 preguntaids[4] = 796


//  Id pregunta: 794 Año de creación de pregunta: 2016
 questions[5]= "6)  Tienen la condici&oacute;n de alto cargo:";
 choices[5]= new Array();
 choices[5][0] = "los &oacute;rganos superiores";
 choices[5][1] = "los &oacute;rganos superiores y directivos";
 choices[5][2] = "los &oacute;rganos superiores y directivos, excepto los Subdirectores generales y asimilados";
 choices[5][3] = "los &oacute;rganos superiores y directivos, excepto los Secretarios generales y asimilados";
 answers[5] = choices[5][2];
 units[5] = "4, 7, 8, 9";
 comments[5] = "Id Pregunta: 794. Ley 40/2015";
 preguntaids[5] = 794


//  Id pregunta: 828 Año de creación de pregunta: 2016
 questions[6]= "7)  La recusaci&oacute;n pueden promoverla...";
 choices[6]= new Array();
 choices[6][0] = "Cualquier &oacute;rgano";
 choices[6][1] = "El interesado";
 choices[6][2] = "El interesado y el superior jer&aacute;rquico del &oacute;rgano de que se trate";
 choices[6][3] = "El interesado, el superior jer&aacute;rquico del &oacute;rgano de que se trate y el propio &oacute;rgano";
 answers[6] = choices[6][0];
 units[6] = "4, 7, 8, 9";
 comments[6] = "Id Pregunta: 828. Ley 40/2015";
 preguntaids[6] = 828


//  Id pregunta: 832 Año de creación de pregunta: 2016
 questions[7]= "8)  Contra las resoluciones en materia de abstenci&oacute;n y recusaci&oacute;n...";
 choices[7]= new Array();
 choices[7][0] = "Cabr&aacute; recurso de alzada";
 choices[7][1] = "Cabr&aacute; el nuevo protesto";
 choices[7][2] = "Cabr&aacute; recurso de reposici&oacute;n";
 choices[7][3] = "No cabr&aacute; recurso alguno";
 answers[7] = choices[7][3];
 units[7] = "4, 7, 8, 9";
 comments[7] = "Id Pregunta: 832. Ley 40/2015";
 preguntaids[7] = 832


//  Id pregunta: 835 Año de creación de pregunta: 2016
 questions[8]= "9)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta correcta.";
 choices[8]= new Array();
 choices[8][0] = "La competencia es irrenunciable y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[8][1] = "La competencia es imprescriptible y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[8][2] = "La competencia es inviolable y se ejercer&aacute; por los &oacute;rganos administrativos que la tengan atribuida como propia, salvo los casos de delegaci&oacute;n o avocaci&oacute;n, cuando se efect&uacute;en en los t&eacute;rminos previstos en &eacute;sta u otras leyes.";
 choices[8][3] = "Todas son correctas.";
 answers[8] = choices[8][0];
 units[8] = "4, 7, 8, 9";
 comments[8] = "Id Pregunta: 835. Ley 40/2015";
 preguntaids[8] = 835


//  Id pregunta: 804 Año de creación de pregunta: 2016
 questions[9]= "10)  Los Secretarios generales t&eacute;cnicos:";
 choices[9]= new Array();
 choices[9][0] = "se encuentran bajo la inmediata dependencia del Subsecretario";
 choices[9][1] = "tendr&aacute;n las competencias sobre servicios comunes que les atribuya el Real Decreto de estructura del Departamento";
 choices[9][2] = "tendr&aacute;n las competencias relativas a producci&oacute;n normativa, asistencia jur&iacute;dica y publicaciones";
 choices[9][3] = "todas son correctas";
 answers[9] = choices[9][3];
 units[9] = "4, 7, 8, 9";
 comments[9] = "Id Pregunta: 804. Ley 40/2015";
 preguntaids[9] = 804


//  Id pregunta: 821 Año de creación de pregunta: 2016
 questions[10]= "11)  Los Delegados del Gobierno (se&ntilde;ala la incorrecta):";
 choices[10]= new Array();
 choices[10][0] = "representan al Gobierno de la Naci&oacute;n en el territorio de la respectiva Comunidad Aut&oacute;noma";
 choices[10][1] = "dirigir&aacute;n y supervisar&aacute;n la Administraci&oacute;n General del Estado en el territorio de las respectivas Comunidades Aut&oacute;nomas";
 choices[10][2] = "son &oacute;rganos directivos con rango de Director general";
 choices[10][3] = "ser&aacute;n nombrados y separados por Real Decreto del Consejo de Ministros, a propuesta del Presidente del Gobierno";
 answers[10] = choices[10][2];
 units[10] = "4, 7, 8, 9";
 comments[10] = "Id Pregunta: 821. Ley 40/2015";
 preguntaids[10] = 821


//  Id pregunta: 817 Año de creación de pregunta: 2016
 questions[11]= "12)  Se determinar&aacute;n las islas en las que existir&aacute; un Director Insular de la Administraci&oacute;n General del Estado:";
 choices[11]= new Array();
 choices[11][0] = "por Real Decreto";
 choices[11][1] = "reglamentariamente";
 choices[11][2] = "mediante Ley";
 choices[11][3] = "ninguna es correcta";
 answers[11] = choices[11][1];
 units[11] = "4, 7, 8, 9";
 comments[11] = "Id Pregunta: 817. Ley 40/2015";
 preguntaids[11] = 817


//  Id pregunta: 846 Año de creación de pregunta: 2016
 questions[12]= "13)  &iquest;Qu&eacute; t&eacute;cnica de cooperaci&oacute;n se regula por primera vez con la Ley 40/2015?";
 choices[12]= new Array();
 choices[12][0] = "Conferencia de Presidentes.";
 choices[12][1] = "Convenios de colaboraci&oacute;n.";
 choices[12][2] = "Comisiones Bilaterales de Cooperaci&oacute;n.";
 choices[12][3] = "Conferencias Sectoriales.";
 answers[12] = choices[12][0];
 units[12] = "4, 7, 8, 9";
 comments[12] = "Id Pregunta: 846. Ley 40/2015";
 preguntaids[12] = 846


//  Id pregunta: 765 Año de creación de pregunta: 2016
 questions[13]= "14)  La presente Ley se aplica al sector p&uacute;blico que comprende (se&ntilde;ala la incorrecta):";
 choices[13]= new Array();
 choices[13][0] = "la Administraci&oacute;n General del Estado";
 choices[13][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[13][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[13][3] = "el sector p&uacute;blico y privado institucional";
 answers[13] = choices[13][3];
 units[13] = "4, 7, 8, 9";
 comments[13] = "Id Pregunta: 765. Ley 40/2015";
 preguntaids[13] = 765


//  Id pregunta: 809 Año de creación de pregunta: 2016
 questions[14]= "15)  Los Directores generales ser&aacute;n nombrados y separados por:";
 choices[14]= new Array();
 choices[14][0] = "Real Decreto del Consejo de Ministros, a propuesta del titular del Departamento o del Presidente del Gobierno";
 choices[14][1] = "Ley de las Cortes Generales, a propuesta del titular del Departamento";
 choices[14][2] = "Ley de las Cortes Generales, a propuesta del titular del Departamento o del Presidente del Gobierno";
 choices[14][3] = "Real Decreto del Consejo de Ministros, a propuesta del titular del Departamento";
 answers[14] = choices[14][0];
 units[14] = "4, 7, 8, 9";
 comments[14] = "Id Pregunta: 809. Ley 40/2015";
 preguntaids[14] = 809


//  Id pregunta: 798 Año de creación de pregunta: 2016
 questions[15]= "16)  Sin perjuicio de lo previsto en la Ley 3/2015, de 30 de marzo, reguladora del ejercicio del alto cargo de la Administraci&oacute;n General del Estado, los titulares de los &oacute;rganos superiores y directivos son nombrados, atendiendo a criterios de competencia profesional y experiencia, en la forma establecida en esta Ley, siendo de aplicaci&oacute;n al desempe&ntilde;o de sus funciones:";
 choices[15]= new Array();
 choices[15][0] = "la responsabilidad profesional, personal y directa por la gesti&oacute;n desarrollada";
 choices[15][1] = "la sujeci&oacute;n al control y evaluaci&oacute;n de la gesti&oacute;n por el &oacute;rgano superior o directivo competente, sin perjuicio del control establecido por la Ley General Presupuestaria";
 choices[15][2] = "a y b son correctas";
 choices[15][3] = "a y b son incorrectas";
 answers[15] = choices[15][2];
 units[15] = "4, 7, 8, 9";
 comments[15] = "Id Pregunta: 798. Ley 40/2015";
 preguntaids[15] = 798


//  Id pregunta: 810 Año de creación de pregunta: 2016
 questions[16]= "17)  Ostentan la representaci&oacute;n ordinaria del Ministerio:";
 choices[16]= new Array();
 choices[16][0] = "los Secretarios de Estado";
 choices[16][1] = "los Ministros";
 choices[16][2] = "los Subsecretarios";
 choices[16][3] = "los Secretarios generales";
 answers[16] = choices[16][2];
 units[16] = "4, 7, 8, 9";
 comments[16] = "Id Pregunta: 810. Ley 40/2015";
 preguntaids[16] = 810


//  Id pregunta: 844 Año de creación de pregunta: 2016
 questions[17]= "18)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Los &oacute;rganos colegiados de la Administraci&oacute;n General del Estado y de sus Organismos p&uacute;blicos, por su composici&oacute;n, se clasifican en:";
 choices[17]= new Array();
 choices[17][0] = "&Oacute;rganos colegiados interministeriales, si sus miembros proceden de diferentes Ministerios.";
 choices[17][1] = "&Oacute;rganos colegiados ministeriales, si sus componentes proceden de los &oacute;rganos del mismo Ministerio.";
 choices[17][2] = "A y B son correctas.";
 choices[17][3] = "A y B son incorrectas.";
 answers[17] = choices[17][2];
 units[17] = "4, 7, 8, 9";
 comments[17] = "Id Pregunta: 844. Ley 40/2015";
 preguntaids[17] = 844


//  Id pregunta: 778 Año de creación de pregunta: 2016
 questions[18]= "19)  Respecto a los &oacute;rganos administrativos (se&ntilde;ala la incorrecta):";
 choices[18]= new Array();
 choices[18][0] = "corresponde a cada Administraci&oacute;n P&uacute;blica delimitar, en su respectivo &aacute;mbito competencial, las unidades administrativas que configuran los &oacute;rganos administrativos propios de las especialidades derivadas de su organizaci&oacute;n";
 choices[18][1] = "en ning&uacute;n caso podr&aacute;n crearse nuevos &oacute;rganos que supongan duplicaci&oacute;n de otros ya existentes";
 choices[18][2] = "la creaci&oacute;n de un nuevo &oacute;rgano s&oacute;lo tendr&aacute; lugar previa comprobaci&oacute;n de que no existe otro en la misma Administraci&oacute;n P&uacute;blica que desarrolle igual funci&oacute;n sobre el mismo territorio y poblaci&oacute;n";
 choices[18][3] = "todas son correctas";
 answers[18] = choices[18][1];
 units[18] = "4, 7, 8, 9";
 comments[18] = "Id Pregunta: 778. Ley 40/2015";
 preguntaids[18] = 778


//  Id pregunta: 769 Año de creación de pregunta: 2016
 questions[19]= "20)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas (se&ntilde;ala la incorrecta):";
 choices[19]= new Array();
 choices[19][0] = "la Administraci&oacute;n General del Estado";
 choices[19][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[19][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[19][3] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico o privado vinculados o dependientes de las Administraciones P&uacute;blicas";
 answers[19] = choices[19][3];
 units[19] = "4, 7, 8, 9";
 comments[19] = "Id Pregunta: 769. Ley 40/2015";
 preguntaids[19] = 769


//  Id pregunta: 830 Año de creación de pregunta: 2016
 questions[20]= "21)  La recusaci&oacute;n se plantear&aacute;...";
 choices[20]= new Array();
 choices[20][0] = "S&oacute;lo verbalmente";
 choices[20][1] = "S&oacute;lo por escrito";
 choices[20][2] = "Verbalmente o por escrito";
 choices[20][3] = "Verbalmente o por escrito siempre que es exprese la causa o causas en que se funda";
 answers[20] = choices[20][0];
 units[20] = "4, 7, 8, 9";
 comments[20] = "Id Pregunta: 830. Ley 40/2015";
 preguntaids[20] = 830


//  Id pregunta: 814 Año de creación de pregunta: 2016
 questions[21]= "22)  Las Delegaciones del Gobierno est&aacute;n adscritas org&aacute;nicamente a:";
 choices[21]= new Array();
 choices[21][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[21][1] = "el Consejo de Gobierno de la Comunidad Aut&oacute;noma";
 choices[21][2] = "el Ministerio del Interior";
 choices[21][3] = "la Administraci&oacute;n General del Estado";
 answers[21] = choices[21][0];
 units[21] = "4, 7, 8, 9";
 comments[21] = "Id Pregunta: 814. Ley 40/2015";
 preguntaids[21] = 814


//  Id pregunta: 801 Año de creación de pregunta: 2016
 questions[22]= "23)  Respecto a las unidades administrativas:";
 choices[22]= new Array();
 choices[22][0] = "pueden existir unidades administrativas complejas, que agrupen dos o m&aacute;s unidades mayores";
 choices[22][1] = "los jefes de las unidades administrativas son responsables del correcto funcionamiento de la unidad y de la adecuada ejecuci&oacute;n de las tareas asignadas a la misma";
 choices[22][2] = "las unidades administrativas se establecen mediante las relaciones de puestos de trabajo, que se aprobar&aacute;n de acuerdo con su regulaci&oacute;n espec&iacute;fica, y no se integran en ning&uacute;n &oacute;rgano determinado";
 choices[22][3] = "ninguna es correcta";
 answers[22] = choices[22][1];
 units[22] = "4, 7, 8, 9";
 comments[22] = "Id Pregunta: 801. Ley 40/2015";
 preguntaids[22] = 801


//  Id pregunta: 845 Año de creación de pregunta: 2016
 questions[23]= "24)  Respecto a la reutilizaci&oacute;n de sistemas y aplicaciones de propiedad de la Administraci&oacute;n:";
 choices[23]= new Array();
 choices[23][0] = "Las Administraciones pondr&aacute;n siempre a disposici&oacute;n de cualquiera de ellas que lo solicite las aplicaciones, desarrolladas por sus servicios o que hayan sido objeto de contrataci&oacute;n y de cuyos derechos de propiedad intelectual sean titulares.";
 choices[23][1] = "Las aplicaciones a las que se refiere el apartado anterior podr&aacute;n ser declaradas como de fuentes abiertas, cuando de ello se derive una mayor transparencia en el funcionamiento de la Administraci&oacute;n P&uacute;blica o se fomente con ello la incorporaci&oacute;n de los ciudadanos a la Sociedad de la informaci&oacute;n.";
 choices[23][2] = "Las Administraciones P&uacute;blicas, con car&aacute;cter posterior a la adquisici&oacute;n, desarrollo o al mantenimiento a lo largo de todo el ciclo de vida de una aplicaci&oacute;n, tanto si se realiza con medios propios o por la contrataci&oacute;n de los servicios correspondientes, deber&aacute;n consultar en el directorio general de aplicaciones.";
 choices[23][3] = "En el directorio general de aplicaciones constar&aacute;n las aplicaciones disponibles de la Administraci&oacute;n General del Estado.";
 answers[23] = choices[23][1];
 units[23] = "4, 7, 8, 9";
 comments[23] = "Id Pregunta: 845. Ley 40/2015";
 preguntaids[23] = 845


//  Id pregunta: 841 Año de creación de pregunta: 2016
 questions[24]= "25)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[24]= new Array();
 choices[24][0] = "El &oacute;rgano administrativo que se estime incompetente para la resoluci&oacute;n de un asunto remitir&aacute; directamente las actuaciones al &oacute;rgano superior, debiendo notificar esta circunstancia a los interesados.";
 choices[24][1] = "Los interesados que sean parte en el procedimiento podr&aacute;n dirigirse al &oacute;rgano que se encuentre conociendo de un asunto para que decline su competencia y remita las actuaciones al &oacute;rgano competente.";
 choices[24][2] = "Asimismo, podr&aacute;n dirigirse al &oacute;rgano que estimen competente para que requiera de inhibici&oacute;n al que est&eacute; conociendo del asunto.";
 choices[24][3] = "Los conflictos de atribuciones s&oacute;lo podr&aacute;n suscitarse entre &oacute;rganos de una misma Administraci&oacute;n no relacionados jer&aacute;rquicamente, y respecto a asuntos sobre los que no haya finalizado el procedimiento administrativo.";
 answers[24] = choices[24][0];
 units[24] = "4, 7, 8, 9";
 comments[24] = "Id Pregunta: 841. Ley 40/2015";
 preguntaids[24] = 841


//  Id pregunta: 797 Año de creación de pregunta: 2016
 questions[25]= "26)  Se&ntilde;ale la respuesta correcta:";
 choices[25]= new Array();
 choices[25][0] = "corresponde a los &oacute;rganos superiores establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y a los &oacute;rganos directivos su desarrollo y ejecuci&oacute;n";
 choices[25][1] = "corresponde establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y su desarrollo y ejecuci&oacute;n a los &oacute;rganos superiores";
 choices[25][2] = "corresponde establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y su desarrollo y ejecuci&oacute;n a los &oacute;rganos directivos";
 choices[25][3] = "corresponde a los &oacute;rganos directivos establecer los planes de actuaci&oacute;n de la organizaci&oacute;n situada bajo su responsabilidad y a los &oacute;rganos superiores su desarrollo y ejecuci&oacute;n";
 answers[25] = choices[25][0];
 units[25] = "4, 7, 8, 9";
 comments[25] = "Id Pregunta: 797. Ley 40/2015";
 preguntaids[25] = 797


//  Id pregunta: 767 Año de creación de pregunta: 2016
 questions[26]= "27)  Las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas:";
 choices[26]= new Array();
 choices[26][0] = "no quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley, salvo, cuando ejerzan potestades administrativas";
 choices[26][1] = "no quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley, ni siquiera, cuando ejerzan potestades administrativas";
 choices[26][2] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, y en todo caso, cuando ejerzan potestades administrativas";
 choices[26][3] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, excepto, cuando ejerzan potestades administrativas";
 answers[26] = choices[26][2];
 units[26] = "4, 7, 8, 9";
 comments[26] = "Id Pregunta: 767. Ley 40/2015";
 preguntaids[26] = 767


//  Id pregunta: 806 Año de creación de pregunta: 2016
 questions[27]= "28)  Los nombramientos de los Secretarios generales t&eacute;cnicos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, de las Comunidades Aut&oacute;nomas o de las Entidades locales, pertenecientes al:";
 choices[27]= new Array();
 choices[27][0] = "Subgrupo A1";
 choices[27][1] = "Subgrupo A2";
 choices[27][2] = "Subgrupo B";
 choices[27][3] = "Subgrupo C1";
 answers[27] = choices[27][0];
 units[27] = "4, 7, 8, 9";
 comments[27] = "Id Pregunta: 806. Ley 40/2015";
 preguntaids[27] = 806


//  Id pregunta: 816 Año de creación de pregunta: 2016
 questions[28]= "29)  Podr&aacute;n crearse por Real Decreto Subdelegaciones del Gobierno en las Comunidades Aut&oacute;nomas uniprovinciales, cuando lo justifiquen circunstancias como:";
 choices[28]= new Array();
 choices[28][0] = "la poblaci&oacute;n del territorio";
 choices[28][1] = "el volumen de gesti&oacute;n";
 choices[28][2] = "sus singularidades geogr&aacute;ficas, sociales o econ&oacute;micas";
 choices[28][3] = "todas son correctas";
 answers[28] = choices[28][3];
 units[28] = "4, 7, 8, 9";
 comments[28] = "Id Pregunta: 816. Ley 40/2015";
 preguntaids[28] = 816


//  Id pregunta: 849 Año de creación de pregunta: 2016
 questions[29]= "30)  &iquest;Cu&aacute;l de los siguientes es un sistema de firma para la actuaci&oacute;n administrativa automatizada?";
 choices[29]= new Array();
 choices[29][0] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico reconocido o cualificado que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[29][1] = "Sello electr&oacute;nico de Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de derecho p&uacute;blico, basado en certificado electr&oacute;nico avanzado o reconocido que re&uacute;na los requisitos exigidos por la legislaci&oacute;n de firma electr&oacute;nica.";
 choices[29][2] = "C&oacute;digo seguro de verificaci&oacute;n vinculado a la Administraci&oacute;n P&uacute;blica, &oacute;rgano, organismo p&uacute;blico o entidad de Derecho P&uacute;blico, en los t&eacute;rminos y condiciones establecidos, permiti&eacute;ndose en todo caso la comprobaci&oacute;n de la integridad del documento mediante el acceso al portal correspondiente.";
 choices[29][3] = "Firma electr&oacute;nica del titular del &oacute;rgano o empleado p&uacute;blico.";
 answers[29] = choices[29][0];
 units[29] = "4, 7, 8, 9";
 comments[29] = "Id Pregunta: 849. Ley 40/2015";
 preguntaids[29] = 849


//  Id pregunta: 825 Año de creación de pregunta: 2016
 questions[30]= "31)  Debe abstenerse el funcionario que tiene relaci&oacute;n de servicio con interesado en el asunto o le ha prestado servicios profesionales en los ...";
 choices[30]= new Array();
 choices[30][0] = "Tres &uacute;ltimos a&ntilde;os";
 choices[30][1] = "Cinco &uacute;ltimos a&ntilde;os";
 choices[30][2] = "Cuatro &uacute;ltimos a&ntilde;os";
 choices[30][3] = "Dos &uacute;ltimos a&ntilde;os";
 answers[30] = choices[30][1];
 units[30] = "4, 7, 8, 9";
 comments[30] = "Id Pregunta: 825. Ley 40/2015";
 preguntaids[30] = 825


//  Id pregunta: 768 Año de creación de pregunta: 2016
 questions[31]= "32)  Las Universidades p&uacute;blicas se regir&aacute;n por:";
 choices[31]= new Array();
 choices[31][0] = "las previsiones de la presente Ley y supletoriamente por su normativa espec&iacute;fica";
 choices[31][1] = "su normativa espec&iacute;fica y supletoriamente por las previsiones de la presente Ley";
 choices[31][2] = "exclusivamente por su normativa espec&iacute;fica";
 choices[31][3] = "exclusivamente por las previsiones de la presente Ley";
 answers[31] = choices[31][1];
 units[31] = "4, 7, 8, 9";
 comments[31] = "Id Pregunta: 768. Ley 40/2015";
 preguntaids[31] = 768


//  Id pregunta: 787 Año de creación de pregunta: 2016
 questions[32]= "33)  La Administraci&oacute;n General del Estado comprende (se&ntilde;ala la incorrecta):";
 choices[32]= new Array();
 choices[32][0] = "la Organizaci&oacute;n Central, que integra los Ministerios y los servicios comunes";
 choices[32][1] = "la Organizaci&oacute;n Territorial";
 choices[32][2] = "la Organizaci&oacute;n sectorial";
 choices[32][3] = "la Administraci&oacute;n General del Estado en el exterior";
 answers[32] = choices[32][2];
 units[32] = "4, 7, 8, 9";
 comments[32] = "Id Pregunta: 787. Ley 40/2015";
 preguntaids[32] = 787


//  Id pregunta: 802 Año de creación de pregunta: 2016
 questions[33]= "34)  La Administraci&oacute;n General del Estado se organiza:";
 choices[33]= new Array();
 choices[33][0] = "en Ministerios";
 choices[33][1] = "en Presidencia del Gobierno y en Ministerios";
 choices[33][2] = "en Presidencia del Gobierno, en Ministerios y en Secretar&iacute;as Generales";
 choices[33][3] = "en Presidencia del Gobierno, en Ministerios, en Secretar&iacute;as Generales y en el Servicio Exterior";
 answers[33] = choices[33][1];
 units[33] = "4, 7, 8, 9";
 comments[33] = "Id Pregunta: 802. Ley 40/2015";
 preguntaids[33] = 802


//  Id pregunta: 792 Año de creación de pregunta: 2016
 questions[34]= "35)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado los Subdelegados del Gobierno en las provincias los cuales tendr&aacute;n nivel de:";
 choices[34]= new Array();
 choices[34][0] = "Subsecretario";
 choices[34][1] = "Subdirector general";
 choices[34][2] = "Secretario de Estado";
 choices[34][3] = "ninguna es correcta";
 answers[34] = choices[34][1];
 units[34] = "4, 7, 8, 9";
 comments[34] = "Id Pregunta: 792. Ley 40/2015";
 preguntaids[34] = 792


//  Id pregunta: 829 Año de creación de pregunta: 2016
 questions[35]= "36)  La recusaci&oacute;n se plantea...";
 choices[35]= new Array();
 choices[35][0] = "Antes de iniciado el procedimiento";
 choices[35][1] = "Una vez iniciado el procedimiento";
 choices[35][2] = "Cuando el instructor dicta propuesta de resoluci&oacute;n";
 choices[35][3] = "En cualquier momento del procedimiento";
 answers[35] = choices[35][0];
 units[35] = "4, 7, 8, 9";
 comments[35] = "Id Pregunta: 829. Ley 40/2015";
 preguntaids[35] = 829


//  Id pregunta: 788 Año de creación de pregunta: 2016
 questions[36]= "37)  En la organizaci&oacute;n central son &oacute;rganos superiores:";
 choices[36]= new Array();
 choices[36][0] = "los Subsecretarios y los Secretarios generales";
 choices[36][1] = "los Ministros y los Secretarios generales t&eacute;cnicos";
 choices[36][2] = "los Secretarios de Estado y los Directores generales";
 choices[36][3] = "los Ministros y los Secretarios de Estado";
 answers[36] = choices[36][3];
 units[36] = "4, 7, 8, 9";
 comments[36] = "Id Pregunta: 788. Ley 40/2015";
 preguntaids[36] = 788


//  Id pregunta: 840 Año de creación de pregunta: 2016
 questions[37]= "38)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta correcta.";
 choices[37]= new Array();
 choices[37][0] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos provisionalmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[37][1] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos temporalmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[37][2] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos eventualmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[37][3] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos circunstancialmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 answers[37] = choices[37][1];
 units[37] = "4, 7, 8, 9";
 comments[37] = "Id Pregunta: 840. Ley 40/2015";
 preguntaids[37] = 840


//  Id pregunta: 839 Año de creación de pregunta: 2016
 questions[38]= "39)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. La formalizaci&oacute;n de las encomiendas de gesti&oacute;n se ajustar&aacute; a las siguientes reglas:";
 choices[38]= new Array();
 choices[38][0] = "Cuando la encomienda de gesti&oacute;n se realice entre &oacute;rganos administrativos o Entidades de Derecho P&uacute;blico pertenecientes a la misma Administraci&oacute;n deber&aacute; formalizarse en los t&eacute;rminos que establezca su normativa propia y, en su defecto, por acuerdo expreso de los &oacute;rganos o Entidades de Derecho P&uacute;blico intervinientes. En todo caso, el instrumento de formalizaci&oacute;n de la encomienda de gesti&oacute;n y su resoluci&oacute;n deber&aacute; ser publicada, para su eficacia, en el Bolet&iacute;n Oficial del Estado, en el Bolet&iacute;n oficial de la Comunidad Aut&oacute;noma o en el de la Provincia, seg&uacute;n la Administraci&oacute;n a que pertenezca el &oacute;rgano encomendante.";
 choices[38][1] = "Cada Administraci&oacute;n podr&aacute; regular los requisitos necesarios para la validez de tales acuerdos que incluir&aacute;n, al menos, expresa menci&oacute;n de la actividad o actividades a las que afecten, el plazo de vigencia y la naturaleza y alcance de la gesti&oacute;n encomendada.";
 choices[38][2] = "Cuando la encomienda de gesti&oacute;n se realice entre &oacute;rganos y Entidades de Derecho P&uacute;blico de distintas Administraciones se formalizar&aacute; mediante firma del correspondiente convenio entre ellas, que deber&aacute; ser publicado en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;, en el Bolet&iacute;n oficial de la Comunidad Aut&oacute;noma o en el de la Provincia, seg&uacute;n la Administraci&oacute;n a que pertenezca el &oacute;rgano encomendante, salvo en el supuesto de la gesti&oacute;n ordinaria de los servicios de las Comunidades Aut&oacute;nomas por las Diputaciones Provinciales o en su caso Cabildos o Consejos insulares, que se regir&aacute; por la legislaci&oacute;n de R&eacute;gimen Local.";
 choices[38][3] = "Todas son correctas.";
 answers[38] = choices[38][3];
 units[38] = "4, 7, 8, 9";
 comments[38] = "Id Pregunta: 839. Ley 40/2015";
 preguntaids[38] = 839


//  Id pregunta: 842 Año de creación de pregunta: 2016
 questions[39]= "40)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Indique la respuesta correcta.";
 choices[39]= new Array();
 choices[39][0] = "Para la v&aacute;lida constituci&oacute;n del &oacute;rgano, a efectos de la celebraci&oacute;n de sesiones, deliberaciones y toma de acuerdos, se requerir&aacute; la asistencia, presencial o a distancia, del Presidente y Secretario o en su caso, de quienes les suplan, y la de la mitad de sus miembros.";
 choices[39][1] = "Cuando se trate de los &oacute;rganos colegiados a que se refiere el art&iacute;culo 15.2, el Presidente podr&aacute; considerar v&aacute;lidamente constituido el &oacute;rgano, a efectos de celebraci&oacute;n de sesi&oacute;n, si asisten los representantes de las Administraciones P&uacute;blicas y de las organizaciones representativas de intereses sociales miembros del &oacute;rgano a los que se haya atribuido la condici&oacute;n de portavoces.";
 choices[39][2] = "Cuando estuvieran reunidos, de manera presencial o a distancia, el Secretario y todos los miembros del &oacute;rgano colegiado, o en su caso las personas que les suplan, &eacute;stos podr&aacute;n constituirse v&aacute;lidamente como &oacute;rgano colegiado para la celebraci&oacute;n de sesiones, deliberaciones y adopci&oacute;n de acuerdos sin necesidad de convocatoria previa cuando as&iacute; lo decida el Presidente.";
 choices[39][3] = "Todas son correctas.";
 answers[39] = choices[39][1];
 units[39] = "4, 7, 8, 9";
 comments[39] = "Id Pregunta: 842. Ley 40/2015";
 preguntaids[39] = 842


//  Id pregunta: 808 Año de creación de pregunta: 2016
 questions[40]= "41)  A los Directores generales les corresponde (se&ntilde;ala la incorrecta):";
 choices[40]= new Array();
 choices[40][0] = "proponer los proyectos de su Direcci&oacute;n general para alcanzar los objetivos establecidos por el Ministro, dirigir su ejecuci&oacute;n y controlar su adecuado cumplimiento";
 choices[40][1] = "solicitar del Ministerio de Hacienda y Administraciones P&uacute;blicas la afectaci&oacute;n o el arrendamiento de los inmuebles necesarios para el cumplimiento de los fines de los servicios a cargo del Departamento";
 choices[40][2] = "ejercer las competencias atribuidas a la Direcci&oacute;n general y las que le sean desconcentradas o delegadas";
 choices[40][3] = "impulsar y supervisar las actividades que forman parte de la gesti&oacute;n ordinaria del &oacute;rgano directivo y velar por el buen funcionamiento de los &oacute;rganos y unidades dependientes y del personal integrado en los mismos";
 answers[40] = choices[40][1];
 units[40] = "4, 7, 8, 9";
 comments[40] = "Id Pregunta: 808. Ley 40/2015";
 preguntaids[40] = 808


//  Id pregunta: 819 Año de creación de pregunta: 2016
 questions[41]= "42)  Los servicios territoriales de la Administraci&oacute;n General del Estado en la Comunidad Aut&oacute;noma se organizar&aacute;n atendiendo al mejor cumplimiento de sus fines, en:";
 choices[41]= new Array();
 choices[41][0] = "servicios integrados en las Delegaciones del Gobierno";
 choices[41][1] = "servicios no integrados en las Delegaciones del Gobierno";
 choices[41][2] = "servicios integrados y no integrados en las Delegaciones del Gobierno";
 choices[41][3] = "ninguna es correcta";
 answers[41] = choices[41][2];
 units[41] = "4, 7, 8, 9";
 comments[41] = "Id Pregunta: 819. Ley 40/2015";
 preguntaids[41] = 819


//  Id pregunta: 780 Año de creación de pregunta: 2016
 questions[42]= "43)  Los &oacute;rganos administrativos podr&aacute;n dirigir las actividades de sus &oacute;rganos jer&aacute;rquicamente dependientes mediante:";
 choices[42]= new Array();
 choices[42][0] = "circulares";
 choices[42][1] = "reglamentos internos";
 choices[42][2] = "instrucciones y &oacute;rdenes de servicio";
 choices[42][3] = "disposiciones de car&aacute;cter general";
 answers[42] = choices[42][2];
 units[42] = "4, 7, 8, 9";
 comments[42] = "Id Pregunta: 780. Ley 40/2015";
 preguntaids[42] = 780


//  Id pregunta: 836 Año de creación de pregunta: 2016
 questions[43]= "44)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta correcta.";
 choices[43]= new Array();
 choices[43][0] = "Los &oacute;rganos de las diferentes Administraciones P&uacute;blicas podr&aacute;n delegar el ejercicio de las competencias que tengan atribuidas en otros &oacute;rganos de la misma Administraci&oacute;n, aun cuando no sean jer&aacute;rquicamente dependientes, o en los Organismos p&uacute;blicos o Entidades de Derecho P&uacute;blico vinculados o dependientes de aqu&eacute;llas.";
 choices[43][1] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado, la delegaci&oacute;n de competencias deber&aacute; ser aprobada previamente por el &oacute;rgano ministerial de quien dependa el &oacute;rgano delegante y en el caso de los Organismos p&uacute;blicos o Entidades vinculados o dependientes, por el &oacute;rgano m&aacute;ximo de direcci&oacute;n, de acuerdo con sus normas de creaci&oacute;n. Cuando se trate de &oacute;rganos no relacionados jer&aacute;rquicamente ser&aacute; necesaria la aprobaci&oacute;n previa del superior com&uacute;n si ambos pertenecen al mismo Ministerio, o del &oacute;rgano superior de quien dependa el &oacute;rgano delegado, si el delegante y el delegado pertenecen a diferentes Ministerios.";
 choices[43][2] = "Asimismo, los &oacute;rganos de la Administraci&oacute;n General del Estado podr&aacute;n delegar el ejercicio de sus competencias propias en sus Organismos p&uacute;blicos y Entidades vinculados o dependientes, cuando resulte conveniente para alcanzar los fines que tengan asignados y mejorar la eficacia de su gesti&oacute;n. La delegaci&oacute;n deber&aacute; ser previamente aprobada por los &oacute;rganos de los que dependan el &oacute;rgano delegante y el &oacute;rgano delegado, o aceptada por este &uacute;ltimo cuando sea el &oacute;rgano m&aacute;ximo de direcci&oacute;n del Organismo p&uacute;blico o Entidad vinculado o dependiente.";
 choices[43][3] = "Todas son correctas.";
 answers[43] = choices[43][3];
 units[43] = "4, 7, 8, 9";
 comments[43] = "Id Pregunta: 836. Ley 40/2015";
 preguntaids[43] = 836


//  Id pregunta: 781 Año de creación de pregunta: 2016
 questions[44]= "45)  Las instrucciones y &oacute;rdenes de servicio se publicar&aacute;n en el bolet&iacute;n oficial que corresponda, sin perjuicio de su difusi&oacute;n de acuerdo con lo previsto en la Ley 19/2013, de 9 de diciembre, de transparencia, acceso a la informaci&oacute;n p&uacute;blica y buen gobierno cuando:";
 choices[44]= new Array();
 choices[44][0] = "una disposici&oacute;n espec&iacute;fica as&iacute; lo establezca";
 choices[44][1] = "se estime conveniente por raz&oacute;n de los destinatarios";
 choices[44][2] = "se estime conveniente por raz&oacute;n de los efectos que puedan producirse";
 choices[44][3] = "todas son correctas";
 answers[44] = choices[44][3];
 units[44] = "4, 7, 8, 9";
 comments[44] = "Id Pregunta: 781. Ley 40/2015";
 preguntaids[44] = 781


//  Id pregunta: 775 Año de creación de pregunta: 2016
 questions[45]= "46)  Las Administraciones P&uacute;blicas que, en el ejercicio de sus respectivas competencias, establezcan medidas que limiten el ejercicio de derechos individuales o colectivos o exijan el cumplimiento de requisitos para el desarrollo de una actividad, deber&aacute;n (se&ntilde;ala la incorrecta):";
 choices[45]= new Array();
 choices[45][0] = "aplicar el principio de proporcionalidad y elegir la medida menos restrictiva";
 choices[45][1] = "motivar su necesidad para la protecci&oacute;n del inter&eacute;s p&uacute;blico";
 choices[45][2] = "justificar su adecuaci&oacute;n para lograr los fines que se persiguen, evitando en la medida de lo posible que se produzcan diferencias de trato discriminatorias";
 choices[45][3] = "evaluar peri&oacute;dicamente los efectos y resultados obtenidos";
 answers[45] = choices[45][2];
 units[45] = "4, 7, 8, 9";
 comments[45] = "Id Pregunta: 775. Ley 40/2015";
 preguntaids[45] = 775


//  Id pregunta: 813 Año de creación de pregunta: 2016
 questions[46]= "47)  Las Delegaciones del Gobierno tendr&aacute;n su sede en:";
 choices[46]= new Array();
 choices[46][0] = "la localidad elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[46][1] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[46][2] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[46][3] = "la localidad donde elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 answers[46] = choices[46][2];
 units[46] = "4, 7, 8, 9";
 comments[46] = "Id Pregunta: 813. Ley 40/2015";
 preguntaids[46] = 813


//  Id pregunta: 785 Año de creación de pregunta: 2016
 questions[47]= "48)  Las competencias en materia de organizaci&oacute;n administrativa, r&eacute;gimen de personal, procedimientos e inspecci&oacute;n de servicios, no atribuidas espec&iacute;ficamente conforme a una Ley a ning&uacute;n otro &oacute;rgano de la Administraci&oacute;n General del Estado, ni al Gobierno, corresponder&aacute;n a:";
 choices[47]= new Array();
 choices[47][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[47][1] = "el Consejo de Estado";
 choices[47][2] = "el Congreso";
 choices[47][3] = "las Cortes Generales";
 answers[47] = choices[47][0];
 units[47] = "4, 7, 8, 9";
 comments[47] = "Id Pregunta: 785. Ley 40/2015";
 preguntaids[47] = 785


//  Id pregunta: 834 Año de creación de pregunta: 2016
 questions[48]= "49)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. La creaci&oacute;n de cualquier &oacute;rgano administrativo exigir&aacute;, al menos, el cumplimiento de los siguientes requisitos:";
 choices[48]= new Array();
 choices[48][0] = "Determinaci&oacute;n de su forma de integraci&oacute;n en la Administraci&oacute;n P&uacute;blica de que se trate y su dependencia org&aacute;nica.";
 choices[48][1] = "Delimitaci&oacute;n de su naturaleza, funciones y competencias.";
 choices[48][2] = "Dotaci&oacute;n de los cr&eacute;ditos necesarios para su puesta en marcha y funcionamiento.";
 choices[48][3] = "Todas son correctas.";
 answers[48] = choices[48][3];
 units[48] = "4, 7, 8, 9";
 comments[48] = "Id Pregunta: 834. Ley 40/2015";
 preguntaids[48] = 834


//  Id pregunta: 807 Año de creación de pregunta: 2016
 questions[49]= "50)  Son los titulares de los &oacute;rganos directivos encargados de la gesti&oacute;n de una o varias &aacute;reas funcionalmente homog&eacute;neas del Ministerio:";
 choices[49]= new Array();
 choices[49][0] = "los Secretarios generales t&eacute;cnicos";
 choices[49][1] = "los Directores generales";
 choices[49][2] = "los Secretarios generales";
 choices[49][3] = "los Subsecretarios";
 answers[49] = choices[49][1];
 units[49] = "4, 7, 8, 9";
 comments[49] = "Id Pregunta: 807. Ley 40/2015";
 preguntaids[49] = 807


//  Id pregunta: 776 Año de creación de pregunta: 2016
 questions[50]= "51)  Las Administraciones P&uacute;blicas velar&aacute;n por el cumplimiento de los requisitos previstos en la legislaci&oacute;n que resulte aplicable, para lo cual podr&aacute;n, en el &aacute;mbito de sus respectivas competencias, comprobar, verificar, investigar e inspeccionar los hechos, actos, elementos, actividades, estimaciones y dem&aacute;s circunstancias que fueran necesarias con los l&iacute;mites establecidos en:";
 choices[50]= new Array();
 choices[50][0] = "la legislaci&oacute;n de protecci&oacute;n de datos de car&aacute;cter personal";
 choices[50][1] = "el C&oacute;digo Civil";
 choices[50][2] = "la Constituci&oacute;n Espa&ntilde;ola";
 choices[50][3] = "la ley de procedimiento administrativo com&uacute;n de las Administraciones P&uacute;blicas";
 answers[50] = choices[50][0];
 units[50] = "4, 7, 8, 9";
 comments[50] = "Id Pregunta: 776. Ley 40/2015";
 preguntaids[50] = 776


//  Id pregunta: 838 Año de creación de pregunta: 2016
 questions[51]= "52)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta incorrecta.";
 choices[51]= new Array();
 choices[51][0] = "La realizaci&oacute;n de actividades de car&aacute;cter material o t&eacute;cnico de la competencia de los &oacute;rganos administrativos o de las Entidades de Derecho P&uacute;blico podr&aacute; ser encomendada a otros &oacute;rganos o Entidades de Derecho P&uacute;blico de la misma o de distinta Administraci&oacute;n, siempre que entre sus competencias est&eacute;n esas actividades, por razones de eficacia o cuando no se posean los medios t&eacute;cnicos id&oacute;neos para su desempe&ntilde;o.";
 choices[51][1] = "Las encomiendas de gesti&oacute;n podr&aacute;n tener por objeto prestaciones propias de los contratos regulados en la legislaci&oacute;n de contratos del sector p&uacute;blico. En tal caso, su naturaleza y r&eacute;gimen jur&iacute;dico se ajustar&aacute; a lo previsto en &eacute;sta.";
 choices[51][2] = "La encomienda de gesti&oacute;n no supone cesi&oacute;n de la titularidad de la competencia ni de los elementos sustantivos de su ejercicio, siendo responsabilidad del &oacute;rgano o Entidad encomendante dictar cuantos actos o resoluciones de car&aacute;cter jur&iacute;dico den soporte o en los que se integre la concreta actividad material objeto de encomienda.";
 choices[51][3] = "En todo caso, la Entidad u &oacute;rgano encomendado tendr&aacute; la condici&oacute;n de encargado del tratamiento de los datos de car&aacute;cter personal a los que pudiera tener acceso en ejecuci&oacute;n de la encomienda de gesti&oacute;n, si&eacute;ndole de aplicaci&oacute;n lo dispuesto en la normativa de protecci&oacute;n de datos de car&aacute;cter personal.";
 answers[51] = choices[51][1];
 units[51] = "4, 7, 8, 9";
 comments[51] = "Id Pregunta: 838. Ley 40/2015";
 preguntaids[51] = 838


//  Id pregunta: 773 Año de creación de pregunta: 2016
 questions[52]= "53)  La actuaci&oacute;n de la Administraci&oacute;n P&uacute;blica respectiva se desarrolla para alcanzar los objetivos que establecen las leyes y el resto del ordenamiento jur&iacute;dico, bajo la direcci&oacute;n de (se&ntilde;ala la incorrecta):";
 choices[52]= new Array();
 choices[52][0] = "el Gobierno de la Naci&oacute;n";
 choices[52][1] = "los &oacute;rganos de gobierno de las Comunidades Aut&oacute;nomas";
 choices[52][2] = "los &oacute;rganos de gobierno de las Entidades Locales";
 choices[52][3] = "los &oacute;rganos de gobierno de las Universidades p&uacute;blicas";
 answers[52] = choices[52][3];
 units[52] = "4, 7, 8, 9";
 comments[52] = "Id Pregunta: 773. Ley 40/2015";
 preguntaids[52] = 773


//  Id pregunta: 831 Año de creación de pregunta: 2016
 questions[53]= "54)  Si el recusado niega la causa de recusaci&oacute;n, el superior resolver&aacute; en el plazo de ...";
 choices[53]= new Array();
 choices[53][0] = "Un d&iacute;a";
 choices[53][1] = "Dos d&iacute;as";
 choices[53][2] = "Tres d&iacute;as";
 choices[53][3] = "Cuatro d&iacute;as";
 answers[53] = choices[53][3];
 units[53] = "4, 7, 8, 9";
 comments[53] = "Id Pregunta: 831. Ley 40/2015";
 preguntaids[53] = 831


//  Id pregunta: 772 Año de creación de pregunta: 2016
 questions[54]= "55)  Las Administraciones P&uacute;blicas:";
 choices[54]= new Array();
 choices[54][0] = "se relacionar&aacute;n entre s&iacute; y con sus &oacute;rganos, organismos p&uacute;blicos y entidades vinculados o dependientes a trav&eacute;s de medios no electr&oacute;nicos, que aseguren la interoperabilidad y seguridad de los sistemas y soluciones adoptadas por cada una de ellas";
 choices[54][1] = "garantizar&aacute;n la protecci&oacute;n de los datos de car&aacute;cter personal";
 choices[54][2] = "facilitar&aacute;n preferentemente la prestaci&oacute;n disociada de servicios a los interesados";
 choices[54][3] = "todas son correctas";
 answers[54] = choices[54][1];
 units[54] = "4, 7, 8, 9";
 comments[54] = "Id Pregunta: 772. Ley 40/2015";
 preguntaids[54] = 772


//  Id pregunta: 793 Año de creación de pregunta: 2016
 questions[55]= "56)  En la Administraci&oacute;n General del Estado en el exterior son &oacute;rganos directivos:";
 choices[55]= new Array();
 choices[55][0] = "los Ministros y los Secretarios de Estado";
 choices[55][1] = "los Subsecretarios y Secretarios generales";
 choices[55][2] = "los embajadores y representantes permanentes ante Organizaciones internacionales";
 choices[55][3] = "los Directores generales";
 answers[55] = choices[55][2];
 units[55] = "4, 7, 8, 9";
 comments[55] = "Id Pregunta: 793. Ley 40/2015";
 preguntaids[55] = 793


//  Id pregunta: 811 Año de creación de pregunta: 2016
 questions[56]= "57)  Los Subdirectores generales:";
 choices[56]= new Array();
 choices[56][0] = "son los responsables inmediatos, bajo la supervisi&oacute;n del Secretario general o del titular del &oacute;rgano del que dependan, de la ejecuci&oacute;n de aquellos proyectos, objetivos o actividades que les sean asignados, as&iacute; como de la gesti&oacute;n ordinaria de los asuntos de la competencia de la Subdirecci&oacute;n General";
 choices[56][1] = "ser&aacute;n nombrados, respetando los principios de igualdad, m&eacute;rito y capacidad, y cesados por el Ministro, Secretario de Estado o Subsecretario del que dependan";
 choices[56][2] = "sus nombramientos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, o de otras Administraciones, cuando as&iacute; lo prevean las normas de aplicaci&oacute;n, pertenecientes al Subgrupo A2";
 choices[56][3] = "todas son correctas";
 answers[56] = choices[56][1];
 units[56] = "4, 7, 8, 9";
 comments[56] = "Id Pregunta: 811. Ley 40/2015";
 preguntaids[56] = 811


//  Id pregunta: 784 Año de creación de pregunta: 2016
 questions[57]= "58)  La Administraci&oacute;n General del Estado act&uacute;a y se organiza de acuerdo con los principios establecidos en el art&iacute;culo 3, as&iacute; como los de:";
 choices[57]= new Array();
 choices[57][0] = "desconcentraci&oacute;n funcional y descentralizaci&oacute;n funcional y territorial";
 choices[57][1] = "descentralizaci&oacute;n territorial y desconcentraci&oacute;n funcional y territorial";
 choices[57][2] = "descentralizaci&oacute;n funcional y desconcentraci&oacute;n funcional y territorial";
 choices[57][3] = "desconcentraci&oacute;n territorial y descentralizaci&oacute;n funcional y territorial";
 answers[57] = choices[57][2];
 units[57] = "4, 7, 8, 9";
 comments[57] = "Id Pregunta: 784. Ley 40/2015";
 preguntaids[57] = 784


//  Id pregunta: 800 Año de creación de pregunta: 2016
 questions[58]= "59)  Las unidades administrativas comprenden puestos de trabajo o dotaciones de plantilla:";
 choices[58]= new Array();
 choices[58][0] = "vinculados funcionalmente por raz&oacute;n de sus cometidos y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[58][1] = "vinculados org&aacute;nicamente por raz&oacute;n de sus cometidos y funcionalmente por una jefatura com&uacute;n";
 choices[58][2] = "vinculados funcionalmente por raz&oacute;n de su territorio y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[58][3] = "vinculados org&aacute;nicamente por raz&oacute;n de su territorio y funcionalmente por una jefatura com&uacute;n";
 answers[58] = choices[58][0];
 units[58] = "4, 7, 8, 9";
 comments[58] = "Id Pregunta: 800. Ley 40/2015";
 preguntaids[58] = 800


//  Id pregunta: 803 Año de creación de pregunta: 2016
 questions[59]= "60)  La organizaci&oacute;n en Departamentos ministeriales no obsta a la existencia de:";
 choices[59]= new Array();
 choices[59][0] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter general se adscriban directamente al Ministro";
 choices[59][1] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter excepcional se adscriban directamente al Ministro";
 choices[59][2] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos no integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter general se adscriban directamente al Ministro";
 choices[59][3] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos no integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter excepcional se adscriban directamente al Ministro";
 answers[59] = choices[59][3];
 units[59] = "4, 7, 8, 9";
 comments[59] = "Id Pregunta: 803. Ley 40/2015";
 preguntaids[59] = 803


//  Id pregunta: 820 Año de creación de pregunta: 2016
 questions[60]= "61)  Respecto a los servicios territoriales es correcto:";
 choices[60]= new Array();
 choices[60][0] = "la organizaci&oacute;n de los servicios territoriales no integrados en las Delegaciones del Gobierno se establecer&aacute; mediante Real Decreto";
 choices[60][1] = "los servicios territoriales no integrados depender&aacute;n del Delegado del Gobierno, o en su caso Subdelegado del Gobierno, a trav&eacute;s de la Secretar&iacute;a General";
 choices[60][2] = "los servicios territoriales integrados depender&aacute;n del &oacute;rgano central competente sobre el sector de actividad en el que aqu&eacute;llos operen";
 choices[60][3] = "ninguna es correcta";
 answers[60] = choices[60][0];
 units[60] = "4, 7, 8, 9";
 comments[60] = "Id Pregunta: 820. Ley 40/2015";
 preguntaids[60] = 820


//  Id pregunta: 791 Año de creación de pregunta: 2016
 questions[61]= "62)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado los Delegados del Gobierno en las Comunidades Aut&oacute;nomas tendr&aacute;n rango de:";
 choices[61]= new Array();
 choices[61][0] = "Subsecretario";
 choices[61][1] = "Subdirector general";
 choices[61][2] = "Secretario de Estado";
 choices[61][3] = "ninguna es correcta";
 answers[61] = choices[61][0];
 units[61] = "4, 7, 8, 9";
 comments[61] = "Id Pregunta: 791. Ley 40/2015";
 preguntaids[61] = 791


//  Id pregunta: 786 Año de creación de pregunta: 2016
 questions[62]= "63)  Salvo las excepciones previstas por esta Ley, la organizaci&oacute;n de la Administraci&oacute;n General del Estado responde a los principios de:";
 choices[62]= new Array();
 choices[62][0] = "divisi&oacute;n funcional en Departamentos ministeriales y de gesti&oacute;n territorial integrada en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[62][1] = "gesti&oacute;n territorial integrada en Departamentos ministeriales y de divisi&oacute;n funcional en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[62][2] = "divisi&oacute;n funcional en Delegaciones del Gobierno y de gesti&oacute;n territorial integrada en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 choices[62][3] = "gesti&oacute;n territorial integrada en Delegaciones del Gobierno y de divisi&oacute;n funcional en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 answers[62] = choices[62][0];
 units[62] = "4, 7, 8, 9";
 comments[62] = "Id Pregunta: 786. Ley 40/2015";
 preguntaids[62] = 786


//  Id pregunta: 777 Año de creación de pregunta: 2016
 questions[63]= "64)  Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos:";
 choices[63]= new Array();
 choices[63][0] = "las unidades administrativas a las que se les atribuyan funciones que no tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo";
 choices[63][1] = "las unidades administrativas a las que se les atribuyan funciones que no tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo";
 choices[63][2] = "las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo";
 choices[63][3] = "las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo";
 answers[63] = choices[63][3];
 units[63] = "4, 7, 8, 9";
 comments[63] = "Id Pregunta: 777. Ley 40/2015";
 preguntaids[63] = 777


//  Id pregunta: 822 Año de creación de pregunta: 2016
 questions[64]= "65)  En las Comunidades Aut&oacute;nomas, en caso de ausencia, vacante o enfermedad del titular de la Delegaci&oacute;n del Gobierno, ser&aacute; suplido por:";
 choices[64]= new Array();
 choices[64][0] = "el Subdelegado del Gobierno que el Delegado designe y, en su defecto, al de la provincia en que tenga su sede";
 choices[64][1] = "el Subdelegado del Gobierno de la provincia en que tenga su sede y, en su defecto, al que el Delegado designe";
 choices[64][2] = "el Subdirector General que el Delegado designe";
 choices[64][3] = "el Secretario de Estado";
 answers[64] = choices[64][0];
 units[64] = "4, 7, 8, 9";
 comments[64] = "Id Pregunta: 822. Ley 40/2015";
 preguntaids[64] = 822


//  Id pregunta: 815 Año de creación de pregunta: 2016
 questions[65]= "66)  Existir&aacute; un Subdelegado del Gobierno, que estar&aacute; bajo la inmediata dependencia del Delegado del Gobierno:";
 choices[65]= new Array();
 choices[65][0] = "en cada Comunidad Aut&oacute;noma";
 choices[65][1] = "en cada una de las provincias de las Comunidades Aut&oacute;nomas pluriprovinciales";
 choices[65][2] = "en cada una de las provincias de las Comunidades Aut&oacute;nomas uniprovinciales";
 choices[65][3] = "en cada una de las localidades de las Comunidades Aut&oacute;nomas";
 answers[65] = choices[65][1];
 units[65] = "4, 7, 8, 9";
 comments[65] = "Id Pregunta: 815. Ley 40/2015";
 preguntaids[65] = 815


//  Id pregunta: 790 Año de creación de pregunta: 2016
 questions[66]= "67)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado son &oacute;rganos directivos:";
 choices[66]= new Array();
 choices[66][0] = "los Delegados del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[66][1] = "los Subdelegados del Gobierno en las provincias";
 choices[66][2] = "los Subdelegados del Gobierno en las entidades locales";
 choices[66][3] = "a y b son correctas";
 answers[66] = choices[66][3];
 units[66] = "4, 7, 8, 9";
 comments[66] = "Id Pregunta: 790. Ley 40/2015";
 preguntaids[66] = 790


//  Id pregunta: 774 Año de creación de pregunta: 2016
 questions[67]= "68)  Las Administraciones P&uacute;blicas act&uacute;an para el cumplimiento de sus fines con:";
 choices[67]= new Array();
 choices[67][0] = "personalidad jur&iacute;dica propia";
 choices[67][1] = "personalidad jur&iacute;dica &uacute;nica";
 choices[67][2] = "personalidad jur&iacute;dica plena";
 choices[67][3] = "personalidad jur&iacute;dica f&iacute;sica";
 answers[67] = choices[67][1];
 units[67] = "4, 7, 8, 9";
 comments[67] = "Id Pregunta: 774. Ley 40/2015";
 preguntaids[67] = 774


//  Id pregunta: 823 Año de creación de pregunta: 2016
 questions[68]= "69)  En las Comunidades Aut&oacute;nomas uniprovinciales en las que no exista Subdelegado la suplencia corresponder&aacute; a:";
 choices[68]= new Array();
 choices[68][0] = "el Secretario General";
 choices[68][1] = "el Subdirector General";
 choices[68][2] = "el Secretario de Estado";
 choices[68][3] = "ninguna es correcta";
 answers[68] = choices[68][0];
 units[68] = "4, 7, 8, 9";
 comments[68] = "Id Pregunta: 823. Ley 40/2015";
 preguntaids[68] = 823


//  Id pregunta: 779 Año de creación de pregunta: 2016
 questions[69]= "70)  La creaci&oacute;n de cualquier &oacute;rgano administrativo exigir&aacute;, al menos, el cumplimiento de (se&ntilde;ala la incorrecta):";
 choices[69]= new Array();
 choices[69][0] = "denominaci&oacute;n y establecimiento de sus recursos humanos necesarios";
 choices[69][1] = "determinaci&oacute;n de su forma de integraci&oacute;n en la Administraci&oacute;n P&uacute;blica de que se trate y su dependencia jer&aacute;rquica";
 choices[69][2] = "delimitaci&oacute;n de sus funciones y competencias";
 choices[69][3] = "dotaci&oacute;n de los cr&eacute;ditos necesarios para su puesta en marcha y funcionamiento";
 answers[69] = choices[69][0];
 units[69] = "4, 7, 8, 9";
 comments[69] = "Id Pregunta: 779. Ley 40/2015";
 preguntaids[69] = 779


//  Id pregunta: 782 Año de creación de pregunta: 2016
 questions[70]= "71)  Sin perjuicio de la responsabilidad disciplinaria en que se pueda incurrir, el incumplimiento de las instrucciones u &oacute;rdenes de servicio:";
 choices[70]= new Array();
 choices[70][0] = "no afecta por s&iacute; solo a la validez de los actos dictados por los &oacute;rganos administrativos";
 choices[70][1] = "supone la invalidez de los actos dictados por los &oacute;rganos administrativos";
 choices[70][2] = "supone la nulidad de los actos dictados por los &oacute;rganos administrativos";
 choices[70][3] = "supone la anulabilidad de los actos dictados por los &oacute;rganos administrativos";
 answers[70] = choices[70][0];
 units[70] = "4, 7, 8, 9";
 comments[70] = "Id Pregunta: 782. Ley 40/2015";
 preguntaids[70] = 782


//  Id pregunta: 847 Año de creación de pregunta: 2016
 questions[71]= "72)  Se&ntilde;ale la respuesta falsa:";
 choices[71]= new Array();
 choices[71][0] = "Cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, especificando las condiciones, protocolos y criterios funcionales o t&eacute;cnicos necesarios para acceder a dichos datos con las m&aacute;ximas garant&iacute;as de seguridad, integridad y disponibilidad.";
 choices[71][1] = "La disponibilidad de tales datos estar&aacute; limitada estrictamente a aquellos que son requeridos a los interesados por las restantes Administraciones para la tramitaci&oacute;n y resoluci&oacute;n de los procedimientos y actuaciones de su competencia, de acuerdo con la normativa reguladora de los mismos.";
 choices[71][2] = "De conformidad con lo dispuesto en la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal y su normativa de desarrollo, cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, siendo preceptiva la firma del convenio correspondiente.";
 choices[71][3] = "La Administraci&oacute;n General del Estado, las Administraciones Auton&oacute;micas y las Entidades Locales, adoptar&aacute;n las medidas necesarias e incorporar&aacute;n en sus respectivos &aacute;mbitos las tecnolog&iacute;as precisas para posibilitar la interconexi&oacute;n de sus redes";
 answers[71] = choices[71][2];
 units[71] = "4, 7, 8, 9";
 comments[71] = "Id Pregunta: 847. Ley 40/2015";
 preguntaids[71] = 847


//  Id pregunta: 771 Año de creación de pregunta: 2016
 questions[72]= "73)  Las Administraciones P&uacute;blicas deber&aacute;n respetar en su actuaci&oacute;n y relaciones los siguientes principios:";
 choices[72]= new Array();
 choices[72][0] = "simplicidad, claridad y proximidad a los ciudadanos";
 choices[72][1] = "participaci&oacute;n, objetividad y transparencia de la actuaci&oacute;n administrativa";
 choices[72][2] = "responsabilidad por la gesti&oacute;n p&uacute;blica";
 choices[72][3] = "todas son correctas";
 answers[72] = choices[72][3];
 units[72] = "4, 7, 8, 9";
 comments[72] = "Id Pregunta: 771. Ley 40/2015";
 preguntaids[72] = 771


//  Id pregunta: 812 Año de creación de pregunta: 2016
 questions[73]= "74)  Existir&aacute; una Delegaci&oacute;n del Gobierno en:";
 choices[73]= new Array();
 choices[73][0] = "la capital del pa&iacute;s";
 choices[73][1] = "cada una de las Comunidades Aut&oacute;nomas";
 choices[73][2] = "cada una de las provincias";
 choices[73][3] = "cada una de las embajadas espa&ntilde;olas";
 answers[73] = choices[73][1];
 units[73] = "4, 7, 8, 9";
 comments[73] = "Id Pregunta: 812. Ley 40/2015";
 preguntaids[73] = 812


//  Id pregunta: 764 Año de creación de pregunta: 2016
 questions[74]= "75)  La Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico, establece y regula (se&ntilde;ala la incorrecta):";
 choices[74]= new Array();
 choices[74][0] = "las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[74][1] = "los principios del sistema de responsabilidad de las Administraciones P&uacute;blicas y de la potestad sancionadora";
 choices[74][2] = "el procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas";
 choices[74][3] = "la organizaci&oacute;n y funcionamiento de la Administraci&oacute;n General del Estado y de su sector p&uacute;blico institucional para el desarrollo de sus actividades";
 answers[74] = choices[74][2];
 units[74] = "4, 7, 8, 9";
 comments[74] = "Id Pregunta: 764. Ley 40/2015";
 preguntaids[74] = 764


