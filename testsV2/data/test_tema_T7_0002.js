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

//  Id pregunta: 766 Año de creación de pregunta: 2016
 questions[0]= "1)  El sector p&uacute;blico institucional se integra por:";
 choices[0]= new Array();
 choices[0][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[0][1] = "las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas";
 choices[0][2] = "las Universidades p&uacute;blicas";
 choices[0][3] = "todas son correctas";
 answers[0] = choices[0][3];
 units[0] = "4, 7, 8, 9";
 comments[0] = "Id Pregunta: 766. Ley 40/2015";


//  Id pregunta: 666 Año de creación de pregunta: 2016
 questions[1]= "2)  De acuerdo a la Ley 39/2015, el formato del expediente administrativo ser&aacute;:";
 choices[1]= new Array();
 choices[1][0] = "Siempre en formato electr&oacute;nico.";
 choices[1][1] = "Siempre en formato papel.";
 choices[1][2] = "Las personas f&iacute;sicas podr&aacute;n elegir en todo momento el formato del expediente administrativo.";
 choices[1][3] = "La ley no regula el formato del expediente.";
 answers[1] = choices[1][0];
 units[1] = "7";
 comments[1] = "Id Pregunta: 666. Art&iacute;culo 70 de la Ley 39/2015";


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


//  Id pregunta: 795 Año de creación de pregunta: 2016
 questions[3]= "4)  Todos los &oacute;rganos de la Administraci&oacute;n General del Estado que no sean &oacute;rgano superior o directivo se encuentran bajo la dependencia o direcci&oacute;n de:";
 choices[3]= new Array();
 choices[3][0] = "un &oacute;rgano superior";
 choices[3][1] = "un &oacute;rgano directivo";
 choices[3][2] = "un &oacute;rgano superior o directivo";
 choices[3][3] = "ninguna es correcta";
 answers[3] = choices[3][2];
 units[3] = "4, 7, 8, 9";
 comments[3] = "Id Pregunta: 795. Ley 40/2015";


//  Id pregunta: 540 Año de creación de pregunta: 2016
 questions[4]= "5)  Ser&aacute;/n interoperable/s con los registros electr&oacute;nicos generales y particulares de apoderamientos:";
 choices[4]= new Array();
 choices[4][0] = "los registros mercantiles";
 choices[4][1] = "los registros de la propiedad";
 choices[4][2] = "los protocolos notariales";
 choices[4][3] = "todas son correctas";
 answers[4] = choices[4][3];
 units[4] = "7";
 comments[4] = "Id Pregunta: 540. LEY 39/2015";


//  Id pregunta: 527 Año de creación de pregunta: 2016
 questions[5]= "6)  Cuando la condici&oacute;n de interesado derivase de alguna relaci&oacute;n jur&iacute;dica transmisible el derecho-habiente suceder&aacute; en tal condici&oacute;n:";
 choices[5]= new Array();
 choices[5][0] = "si el procedimiento no ha alcanzado la fase de instrucci&oacute;n";
 choices[5][1] = "si el procedimiento no ha alcanzado el tr&aacute;mite de audiencia";
 choices[5][2] = "si el procedimiento no ha alcanzado el tr&aacute;mite de informaci&oacute;n p&uacute;blica";
 choices[5][3] = "cualquiera que sea el estado del procedimiento";
 answers[5] = choices[5][3];
 units[5] = "7";
 comments[5] = "Id Pregunta: 527. LEY 39/2015";


//  Id pregunta: 515 Año de creación de pregunta: 2016
 questions[6]= "7)  La presente Ley se aplica al sector p&uacute;blico, que comprende (se&ntilde;ala la incorrecta):";
 choices[6]= new Array();
 choices[6][0] = "la Administraci&oacute;n General del Estado y las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[6][1] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[6][2] = "el sector p&uacute;blico institucional";
 choices[6][3] = "el sector privado corporativo";
 answers[6] = choices[6][3];
 units[6] = "7";
 comments[6] = "Id Pregunta: 515. LEY 39/2015";


//  Id pregunta: 667 Año de creación de pregunta: 2016
 questions[7]= "8)  Seg&uacute;n la Ley 39/2015, un expediente administrativo contendr&aacute;:";
 choices[7]= new Array();
 choices[7][0] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios,la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento, y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[7][1] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios y un &iacute;ndice numerado de todos los documentos.";
 choices[7][2] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[7][3] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos, la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento  y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 answers[7] = choices[7][2];
 units[7] = "7";
 comments[7] = "Id Pregunta: 667. Art&iacute;culo 70 de la Ley 39/2015";


//  Id pregunta: 784 Año de creación de pregunta: 2016
 questions[8]= "9)  La Administraci&oacute;n General del Estado act&uacute;a y se organiza de acuerdo con los principios establecidos en el art&iacute;culo 3, as&iacute; como los de:";
 choices[8]= new Array();
 choices[8][0] = "desconcentraci&oacute;n funcional y descentralizaci&oacute;n funcional y territorial";
 choices[8][1] = "descentralizaci&oacute;n territorial y desconcentraci&oacute;n funcional y territorial";
 choices[8][2] = "descentralizaci&oacute;n funcional y desconcentraci&oacute;n funcional y territorial";
 choices[8][3] = "desconcentraci&oacute;n territorial y descentralizaci&oacute;n funcional y territorial";
 answers[8] = choices[8][2];
 units[8] = "4, 7, 8, 9";
 comments[8] = "Id Pregunta: 784. Ley 40/2015";


//  Id pregunta: 845 Año de creación de pregunta: 2016
 questions[9]= "10)  Respecto a la reutilizaci&oacute;n de sistemas y aplicaciones de propiedad de la Administraci&oacute;n:";
 choices[9]= new Array();
 choices[9][0] = "Las Administraciones pondr&aacute;n siempre a disposici&oacute;n de cualquiera de ellas que lo solicite las aplicaciones, desarrolladas por sus servicios o que hayan sido objeto de contrataci&oacute;n y de cuyos derechos de propiedad intelectual sean titulares.";
 choices[9][1] = "Las aplicaciones a las que se refiere el apartado anterior podr&aacute;n ser declaradas como de fuentes abiertas, cuando de ello se derive una mayor transparencia en el funcionamiento de la Administraci&oacute;n P&uacute;blica o se fomente con ello la incorporaci&oacute;n de los ciudadanos a la Sociedad de la informaci&oacute;n.";
 choices[9][2] = "Las Administraciones P&uacute;blicas, con car&aacute;cter posterior a la adquisici&oacute;n, desarrollo o al mantenimiento a lo largo de todo el ciclo de vida de una aplicaci&oacute;n, tanto si se realiza con medios propios o por la contrataci&oacute;n de los servicios correspondientes, deber&aacute;n consultar en el directorio general de aplicaciones.";
 choices[9][3] = "En el directorio general de aplicaciones constar&aacute;n las aplicaciones disponibles de la Administraci&oacute;n General del Estado.";
 answers[9] = choices[9][1];
 units[9] = "4, 7, 8, 9";
 comments[9] = "Id Pregunta: 845. Ley 40/2015";


//  Id pregunta: 803 Año de creación de pregunta: 2016
 questions[10]= "11)  La organizaci&oacute;n en Departamentos ministeriales no obsta a la existencia de:";
 choices[10]= new Array();
 choices[10][0] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter general se adscriban directamente al Ministro";
 choices[10][1] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter excepcional se adscriban directamente al Ministro";
 choices[10][2] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos no integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter general se adscriban directamente al Ministro";
 choices[10][3] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos no integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter excepcional se adscriban directamente al Ministro";
 answers[10] = choices[10][3];
 units[10] = "4, 7, 8, 9";
 comments[10] = "Id Pregunta: 803. Ley 40/2015";


//  Id pregunta: 529 Año de creación de pregunta: 2016
 questions[11]= "12)  Los interesados con capacidad de obrar podr&aacute;n actuar por medio de representante:";
 choices[11]= new Array();
 choices[11][0] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 choices[11][1] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[11][2] = "entendi&eacute;ndose con &eacute;ste las actuaciones administrativas, salvo manifestaci&oacute;n expresa en contra del interesado";
 choices[11][3] = "entendi&eacute;ndose con el interesado las actuaciones administrativas, salvo manifestaci&oacute;n expresa o t&aacute;cita en contra del interesado";
 answers[11] = choices[11][2];
 units[11] = "7";
 comments[11] = "Id Pregunta: 529. LEY 39/2015";


//  Id pregunta: 818 Año de creación de pregunta: 2016
 questions[12]= "13)  Los Directores Insulares de la Administraci&oacute;n General del Estado (se&ntilde;ala la incorrecta):";
 choices[12]= new Array();
 choices[12][0] = "ser&aacute;n nombrados por el Delegado del Gobierno mediante el procedimiento de concurso-oposici&oacute;n";
 choices[12][1] = "ser&aacute;n nombrados entre funcionarios de carrera del Estado, de las Comunidades Aut&oacute;nomas o de las Entidades Locales, pertenecientes a Cuerpos o Escalas clasificados como Subgrupo A1";
 choices[12][2] = "dependen jer&aacute;rquicamente del Delegado del Gobierno en la Comunidad Aut&oacute;noma o del Subdelegado del Gobierno en la provincia, cuando este cargo exista";
 choices[12][3] = "ejercen, en su &aacute;mbito territorial, las competencias atribuidas por esta Ley a los Subdelegados del Gobierno en las provincias";
 answers[12] = choices[12][0];
 units[12] = "4, 7, 8, 9";
 comments[12] = "Id Pregunta: 818. Ley 40/2015";


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


//  Id pregunta: 798 Año de creación de pregunta: 2016
 questions[14]= "15)  Sin perjuicio de lo previsto en la Ley 3/2015, de 30 de marzo, reguladora del ejercicio del alto cargo de la Administraci&oacute;n General del Estado, los titulares de los &oacute;rganos superiores y directivos son nombrados, atendiendo a criterios de competencia profesional y experiencia, en la forma establecida en esta Ley, siendo de aplicaci&oacute;n al desempe&ntilde;o de sus funciones:";
 choices[14]= new Array();
 choices[14][0] = "la responsabilidad profesional, personal y directa por la gesti&oacute;n desarrollada";
 choices[14][1] = "la sujeci&oacute;n al control y evaluaci&oacute;n de la gesti&oacute;n por el &oacute;rgano superior o directivo competente, sin perjuicio del control establecido por la Ley General Presupuestaria";
 choices[14][2] = "a y b son correctas";
 choices[14][3] = "a y b son incorrectas";
 answers[14] = choices[14][2];
 units[14] = "4, 7, 8, 9";
 comments[14] = "Id Pregunta: 798. Ley 40/2015";


//  Id pregunta: 664 Año de creación de pregunta: 2016
 questions[15]= "16)  De acuerdo a la Ley 39/2015, los interesados en un procedimiento administrativo, tienen los siguientes derechos:";
 choices[15]= new Array();
 choices[15][0] = "Conocer el estado de la tramitaci&oacute;n de cualquier procedimiento.";
 choices[15][1] = "Identificar a las autoridades y al personal al servicio de las Administraciones P&uacute;blicas bajo cuya responsabilidad se tramiten los procedimientos.";
 choices[15][2] = "No presentar documentos originales, en ning&uacute;n caso.";
 choices[15][3] = "No presentar datos y documentos no exigidos por las normas aplicables al procedimiento de que se trate, que ya se encuentren en poder del Sector P&uacute;blico o que hayan sido elaborado por &eacute;ste.";
 answers[15] = choices[15][1];
 units[15] = "7";
 comments[15] = "Id Pregunta: 664. Art&iacute;culo 53 de la Ley 39/2015";


//  Id pregunta: 767 Año de creación de pregunta: 2016
 questions[16]= "17)  Las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas:";
 choices[16]= new Array();
 choices[16][0] = "no quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley, salvo, cuando ejerzan potestades administrativas";
 choices[16][1] = "no quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley, ni siquiera, cuando ejerzan potestades administrativas";
 choices[16][2] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, y en todo caso, cuando ejerzan potestades administrativas";
 choices[16][3] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, excepto, cuando ejerzan potestades administrativas";
 answers[16] = choices[16][2];
 units[16] = "4, 7, 8, 9";
 comments[16] = "Id Pregunta: 767. Ley 40/2015";


//  Id pregunta: 531 Año de creación de pregunta: 2016
 questions[17]= "18)  Se presumir&aacute; la representaci&oacute;n para:";
 choices[17]= new Array();
 choices[17][0] = "formular solicitudes";
 choices[17][1] = "los actos y gestiones de mero tr&aacute;mite";
 choices[17][2] = "presentar declaraciones responsables o comunicaciones";
 choices[17][3] = "interponer recursos, desistir de acciones y renunciar a derechos en nombre de otra persona";
 answers[17] = choices[17][1];
 units[17] = "7";
 comments[17] = "Id Pregunta: 531. LEY 39/2015";


//  Id pregunta: 512 Año de creación de pregunta: 2016
 questions[18]= "19)  La presente Ley tiene por objeto regular: (se&ntilde;ala la incorrecta)";
 choices[18]= new Array();
 choices[18][0] = "Los requisitos de validez y eficacia de los actos administrativos";
 choices[18][1] = "El procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas, incluyendo el sancionador y el de reclamaci&oacute;n de responsabilidad de las Administraciones P&uacute;blicas";
 choices[18][2] = "Las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[18][3] = "Los principios a los que se ha de ajustar el ejercicio de la iniciativa legislativa y la potestad reglamentaria";
 answers[18] = choices[18][2];
 units[18] = "7";
 comments[18] = "Id Pregunta: 512. LEY 39/2015";


//  Id pregunta: 154 Año de creación de pregunta: 2016
 questions[19]= "20)  Los t&eacute;rminos y plazos establecidos en la ley 39/2015 u otras leyes obligan a:";
 choices[19]= new Array();
 choices[19][0] = "las autoridades al servicio de las Administraciones P&uacute;blicas competentes para la tramitaci&oacute;n de los asuntos";
 choices[19][1] = "el personal al servicio de las Administraciones P&uacute;blicas competentes para la tramitaci&oacute;n de los asuntos";
 choices[19][2] = "los interesados en la tramitaci&oacute;n de los asuntos";
 choices[19][3] = "todas son correctas";
 answers[19] = choices[19][3];
 units[19] = "7";
 comments[19] = "Id Pregunta: 154. Ley 39/2015, Art&iacute;culo 29";


//  Id pregunta: 817 Año de creación de pregunta: 2016
 questions[20]= "21)  Se determinar&aacute;n las islas en las que existir&aacute; un Director Insular de la Administraci&oacute;n General del Estado:";
 choices[20]= new Array();
 choices[20][0] = "por Real Decreto";
 choices[20][1] = "reglamentariamente";
 choices[20][2] = "mediante Ley";
 choices[20][3] = "ninguna es correcta";
 answers[20] = choices[20][1];
 units[20] = "4, 7, 8, 9";
 comments[20] = "Id Pregunta: 817. Ley 40/2015";


//  Id pregunta: 528 Año de creación de pregunta: 2016
 questions[21]= "22)  Los menores incapacitados, cuando la extensi&oacute;n de la incapacitaci&oacute;n afecte al ejercicio y defensa de los derechos o intereses de que se trate:";
 choices[21]= new Array();
 choices[21][0] = "tienen capacidad de obrar limitada";
 choices[21][1] = "pueden actuar sin la asistencia de la persona que ejerza la patria potestad, tutela o curatela";
 choices[21][2] = "no tienen capacidad de obrar";
 choices[21][3] = "ninguna es correcta";
 answers[21] = choices[21][2];
 units[21] = "7";
 comments[21] = "Id Pregunta: 528. LEY 39/2015";


//  Id pregunta: 779 Año de creación de pregunta: 2016
 questions[22]= "23)  La creaci&oacute;n de cualquier &oacute;rgano administrativo exigir&aacute;, al menos, el cumplimiento de (se&ntilde;ala la incorrecta):";
 choices[22]= new Array();
 choices[22][0] = "denominaci&oacute;n y establecimiento de sus recursos humanos necesarios";
 choices[22][1] = "determinaci&oacute;n de su forma de integraci&oacute;n en la Administraci&oacute;n P&uacute;blica de que se trate y su dependencia jer&aacute;rquica";
 choices[22][2] = "delimitaci&oacute;n de sus funciones y competencias";
 choices[22][3] = "dotaci&oacute;n de los cr&eacute;ditos necesarios para su puesta en marcha y funcionamiento";
 answers[22] = choices[22][0];
 units[22] = "4, 7, 8, 9";
 comments[22] = "Id Pregunta: 779. Ley 40/2015";


//  Id pregunta: 837 Año de creación de pregunta: 2016
 questions[23]= "24)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[23]= new Array();
 choices[23][0] = "Los &oacute;rganos competentes podr&aacute;n avocar para s&iacute; el conocimiento de uno o varios asuntos cuya resoluci&oacute;n corresponda ordinariamente o por delegaci&oacute;n a sus &oacute;rganos administrativos dependientes, cuando circunstancias de &iacute;ndole t&eacute;cnica, econ&oacute;mica, social, jur&iacute;dica o territorial lo hagan conveniente.";
 choices[23][1] = "En los supuestos de delegaci&oacute;n de competencias en &oacute;rganos no dependientes jer&aacute;rquicamente, el conocimiento de un asunto podr&aacute; ser avocado &uacute;nicamente por el &oacute;rgano delegante.";
 choices[23][2] = "En todo caso, la avocaci&oacute;n se realizar&aacute; mediante acuerdo motivado que deber&aacute; ser notificado a los interesados en el procedimiento, si los hubiere, con posterioridad a la resoluci&oacute;n final que se dicte.";
 choices[23][3] = "Contra el acuerdo de avocaci&oacute;n no cabr&aacute; recurso, aunque podr&aacute; impugnarse en el que, en su caso, se interponga contra la resoluci&oacute;n del procedimiento.";
 answers[23] = choices[23][2];
 units[23] = "4, 7, 8, 9";
 comments[23] = "Id Pregunta: 837. Ley 40/2015";


//  Id pregunta: 670 Año de creación de pregunta: 2016
 questions[24]= "25)  La Ley 39/2015 introduce un cap&iacute;tulo relativo a la tramitaci&oacute;n simplificada del procedimiento administrativo com&uacute;n. Respecto a este tr&aacute;mite se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[24]= new Array();
 choices[24][0] = "Se podr&aacute; acordar la tramitaci&oacute;n simplificada por falta de complejidad del procedimiento y por razones de inter&eacute;s p&uacute;blico.";
 choices[24][1] = "Los interesados podr&aacute;n, en cualquier caso, solicitar la tramitaci&oacute;n simplificada del procedimiento.";
 choices[24][2] = "En general, los procedimientos administrativos tramitados de manera simplificada deber&aacute;n ser resueltos en treinta d&iacute;as.";
 choices[24][3] = "Constar&aacute;n &uacute;nicamente de los siguientes tr&aacute;mites: inicio, subsanaci&oacute;n (en su caso), alegaciones y tr&aacute;mite de audiencia.";
 answers[24] = choices[24][3];
 units[24] = "7";
 comments[24] = "Id Pregunta: 670. Cap&iacute;tulo VI, T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 533 Año de creación de pregunta: 2016
 questions[25]= "26)  Se entender&aacute; acreditada la representaci&oacute;n realizada:";
 choices[25]= new Array();
 choices[25][0] = "mediante apoderamiento apud acta efectuado por comparecencia personal";
 choices[25][1] = "mediante apoderamiento apud acta efectuado por comparecencia electr&oacute;nica en la correspondiente sede electr&oacute;nica";
 choices[25][2] = "a trav&eacute;s de la acreditaci&oacute;n de su inscripci&oacute;n en el registro electr&oacute;nico de apoderamientos de la Administraci&oacute;n P&uacute;blica competente";
 choices[25][3] = "todas son correctas";
 answers[25] = choices[25][3];
 units[25] = "7";
 comments[25] = "Id Pregunta: 533. LEY 39/2015";


//  Id pregunta: 796 Año de creación de pregunta: 2016
 questions[26]= "27)  Los estatutos de los Organismos p&uacute;blicos determinar&aacute;n sus respectivos:";
 choices[26]= new Array();
 choices[26][0] = "&oacute;rganos superiores";
 choices[26][1] = "&oacute;rganos directivos";
 choices[26][2] = "&oacute;rganos superiores y directivos";
 choices[26][3] = "ninguna es correcta";
 answers[26] = choices[26][1];
 units[26] = "4, 7, 8, 9";
 comments[26] = "Id Pregunta: 796. Ley 40/2015";


//  Id pregunta: 519 Año de creación de pregunta: 2016
 questions[27]= "28)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas: (se&ntilde;ala la incorrecta)";
 choices[27]= new Array();
 choices[27][0] = "la Administraci&oacute;n General del Estado";
 choices[27][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[27][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[27][3] = "los organismos p&uacute;blicos y entidades de derecho privado que integran el sector p&uacute;blico institucional";
 answers[27] = choices[27][3];
 units[27] = "7";
 comments[27] = "Id Pregunta: 519. LEY 39/2015";


//  Id pregunta: 841 Año de creación de pregunta: 2016
 questions[28]= "29)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[28]= new Array();
 choices[28][0] = "El &oacute;rgano administrativo que se estime incompetente para la resoluci&oacute;n de un asunto remitir&aacute; directamente las actuaciones al &oacute;rgano superior, debiendo notificar esta circunstancia a los interesados.";
 choices[28][1] = "Los interesados que sean parte en el procedimiento podr&aacute;n dirigirse al &oacute;rgano que se encuentre conociendo de un asunto para que decline su competencia y remita las actuaciones al &oacute;rgano competente.";
 choices[28][2] = "Asimismo, podr&aacute;n dirigirse al &oacute;rgano que estimen competente para que requiera de inhibici&oacute;n al que est&eacute; conociendo del asunto.";
 choices[28][3] = "Los conflictos de atribuciones s&oacute;lo podr&aacute;n suscitarse entre &oacute;rganos de una misma Administraci&oacute;n no relacionados jer&aacute;rquicamente, y respecto a asuntos sobre los que no haya finalizado el procedimiento administrativo.";
 answers[28] = choices[28][0];
 units[28] = "4, 7, 8, 9";
 comments[28] = "Id Pregunta: 841. Ley 40/2015";


//  Id pregunta: 26 Año de creación de pregunta: 2016
 questions[29]= "30)  Usted, como directivo TIC de la AGE, decide crear un portal web, con una direcci&oacute;n electr&oacute;nica nueva, con el objetivo de informar al ciudadano sobre determinados aspectos relacionados con su unidad. &iquest;Cu&aacute;l de los siguientes tipos de certificado utilizar&iacute;a para identificar a los servidores de su portal informativo?";
 choices[29]= new Array();
 choices[29][0] = "Sello electr&oacute;nico";
 choices[29][1] = "Sede electr&oacute;nica";
 choices[29][2] = "Servidor seguro (SSL/TLS)";
 choices[29][3] = "Empleado p&uacute;blico";
 answers[29] = choices[29][2];
 units[29] = "7";
 comments[29] = "Id Pregunta: 26. AGE A1 2015";


//  Id pregunta: 535 Año de creación de pregunta: 2016
 questions[30]= "31)  La falta o insuficiente acreditaci&oacute;n de la representaci&oacute;n no impedir&aacute; que se tenga por realizado el acto de que se trate, siempre que se aporte aqu&eacute;lla o se subsane el defecto dentro del plazo de:";
 choices[30]= new Array();
 choices[30][0] = "5 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[30][1] = "10 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[30][2] = "15 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 choices[30][3] = "20 d&iacute;as o de un plazo superior cuando las circunstancias del caso as&iacute; lo requieran";
 answers[30] = choices[30][1];
 units[30] = "7";
 comments[30] = "Id Pregunta: 535. LEY 39/2015";


//  Id pregunta: 672 Año de creación de pregunta: 2016
 questions[31]= "32)  Respecto a la ejecuci&oacute;n de la resoluci&oacute;n de un procedimiento administrativo, se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[31]= new Array();
 choices[31][0] = "Las Administraciones P&uacute;blicas no iniciar&aacute;n la ejecuci&oacute;n hasta que se haya dictado resoluci&oacute;n.";
 choices[31][1] = "De una resoluci&oacute;n administrativa nunca puede derivarse una multa.";
 choices[31][2] = "La ejecuci&oacute;n forzosa de una resoluci&oacute;n puede afectar al patrimonio.";
 choices[31][3] = "Contra algunas resoluciones es posible interponer recursos por v&iacute;a administrativa.";
 answers[31] = choices[31][1];
 units[31] = "7";
 comments[31] = "Id Pregunta: 672. Cap&iacute;tulo VII, T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 811 Año de creación de pregunta: 2016
 questions[32]= "33)  Los Subdirectores generales:";
 choices[32]= new Array();
 choices[32][0] = "son los responsables inmediatos, bajo la supervisi&oacute;n del Secretario general o del titular del &oacute;rgano del que dependan, de la ejecuci&oacute;n de aquellos proyectos, objetivos o actividades que les sean asignados, as&iacute; como de la gesti&oacute;n ordinaria de los asuntos de la competencia de la Subdirecci&oacute;n General";
 choices[32][1] = "ser&aacute;n nombrados, respetando los principios de igualdad, m&eacute;rito y capacidad, y cesados por el Ministro, Secretario de Estado o Subsecretario del que dependan";
 choices[32][2] = "sus nombramientos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, o de otras Administraciones, cuando as&iacute; lo prevean las normas de aplicaci&oacute;n, pertenecientes al Subgrupo A2";
 choices[32][3] = "todas son correctas";
 answers[32] = choices[32][1];
 units[32] = "4, 7, 8, 9";
 comments[32] = "Id Pregunta: 811. Ley 40/2015";


//  Id pregunta: 526 Año de creación de pregunta: 2016
 questions[33]= "34)  Las asociaciones y organizaciones representativas de intereses econ&oacute;micos y sociales:";
 choices[33]= new Array();
 choices[33][0] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos en los t&eacute;rminos que reglamentariamente se establezca";
 choices[33][1] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos";
 choices[33][2] = "no ser&aacute;n titulares de intereses leg&iacute;timos colectivos";
 choices[33][3] = "ser&aacute;n titulares de intereses leg&iacute;timos colectivos en los t&eacute;rminos que la Ley reconozca";
 answers[33] = choices[33][3];
 units[33] = "7";
 comments[33] = "Id Pregunta: 526. LEY 39/2015";


//  Id pregunta: 834 Año de creación de pregunta: 2016
 questions[34]= "35)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. La creaci&oacute;n de cualquier &oacute;rgano administrativo exigir&aacute;, al menos, el cumplimiento de los siguientes requisitos:";
 choices[34]= new Array();
 choices[34][0] = "Determinaci&oacute;n de su forma de integraci&oacute;n en la Administraci&oacute;n P&uacute;blica de que se trate y su dependencia org&aacute;nica.";
 choices[34][1] = "Delimitaci&oacute;n de su naturaleza, funciones y competencias.";
 choices[34][2] = "Dotaci&oacute;n de los cr&eacute;ditos necesarios para su puesta en marcha y funcionamiento.";
 choices[34][3] = "Todas son correctas.";
 answers[34] = choices[34][3];
 units[34] = "4, 7, 8, 9";
 comments[34] = "Id Pregunta: 834. Ley 40/2015";


//  Id pregunta: 825 Año de creación de pregunta: 2016
 questions[35]= "36)  Debe abstenerse el funcionario que tiene relaci&oacute;n de servicio con interesado en el asunto o le ha prestado servicios profesionales en los ...";
 choices[35]= new Array();
 choices[35][0] = "Tres &uacute;ltimos a&ntilde;os";
 choices[35][1] = "Cinco &uacute;ltimos a&ntilde;os";
 choices[35][2] = "Cuatro &uacute;ltimos a&ntilde;os";
 choices[35][3] = "Dos &uacute;ltimos a&ntilde;os";
 answers[35] = choices[35][1];
 units[35] = "4, 7, 8, 9";
 comments[35] = "Id Pregunta: 825. Ley 40/2015";


//  Id pregunta: 807 Año de creación de pregunta: 2016
 questions[36]= "37)  Son los titulares de los &oacute;rganos directivos encargados de la gesti&oacute;n de una o varias &aacute;reas funcionalmente homog&eacute;neas del Ministerio:";
 choices[36]= new Array();
 choices[36][0] = "los Secretarios generales t&eacute;cnicos";
 choices[36][1] = "los Directores generales";
 choices[36][2] = "los Secretarios generales";
 choices[36][3] = "los Subsecretarios";
 answers[36] = choices[36][1];
 units[36] = "4, 7, 8, 9";
 comments[36] = "Id Pregunta: 807. Ley 40/2015";


//  Id pregunta: 839 Año de creación de pregunta: 2016
 questions[37]= "38)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. La formalizaci&oacute;n de las encomiendas de gesti&oacute;n se ajustar&aacute; a las siguientes reglas:";
 choices[37]= new Array();
 choices[37][0] = "Cuando la encomienda de gesti&oacute;n se realice entre &oacute;rganos administrativos o Entidades de Derecho P&uacute;blico pertenecientes a la misma Administraci&oacute;n deber&aacute; formalizarse en los t&eacute;rminos que establezca su normativa propia y, en su defecto, por acuerdo expreso de los &oacute;rganos o Entidades de Derecho P&uacute;blico intervinientes. En todo caso, el instrumento de formalizaci&oacute;n de la encomienda de gesti&oacute;n y su resoluci&oacute;n deber&aacute; ser publicada, para su eficacia, en el Bolet&iacute;n Oficial del Estado, en el Bolet&iacute;n oficial de la Comunidad Aut&oacute;noma o en el de la Provincia, seg&uacute;n la Administraci&oacute;n a que pertenezca el &oacute;rgano encomendante.";
 choices[37][1] = "Cada Administraci&oacute;n podr&aacute; regular los requisitos necesarios para la validez de tales acuerdos que incluir&aacute;n, al menos, expresa menci&oacute;n de la actividad o actividades a las que afecten, el plazo de vigencia y la naturaleza y alcance de la gesti&oacute;n encomendada.";
 choices[37][2] = "Cuando la encomienda de gesti&oacute;n se realice entre &oacute;rganos y Entidades de Derecho P&uacute;blico de distintas Administraciones se formalizar&aacute; mediante firma del correspondiente convenio entre ellas, que deber&aacute; ser publicado en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;, en el Bolet&iacute;n oficial de la Comunidad Aut&oacute;noma o en el de la Provincia, seg&uacute;n la Administraci&oacute;n a que pertenezca el &oacute;rgano encomendante, salvo en el supuesto de la gesti&oacute;n ordinaria de los servicios de las Comunidades Aut&oacute;nomas por las Diputaciones Provinciales o en su caso Cabildos o Consejos insulares, que se regir&aacute; por la legislaci&oacute;n de R&eacute;gimen Local.";
 choices[37][3] = "Todas son correctas.";
 answers[37] = choices[37][3];
 units[37] = "4, 7, 8, 9";
 comments[37] = "Id Pregunta: 839. Ley 40/2015";


//  Id pregunta: 525 Año de creación de pregunta: 2016
 questions[38]= "39)  Se consideran interesados en el procedimiento administrativo:";
 choices[38]= new Array();
 choices[38][0] = "quienes lo promuevan como titulares de derechos o intereses leg&iacute;timos individuales o colectivos";
 choices[38][1] = "los que, habiendo iniciado el procedimiento, tengan derechos que puedan resultar afectados por la decisi&oacute;n que en el mismo se adopte";
 choices[38][2] = "aquellos cuyos intereses leg&iacute;timos, individuales o colectivos, puedan resultar afectados por la resoluci&oacute;n y se personen en el procedimiento durante el tr&aacute;mite de audiencia";
 choices[38][3] = "todas son correctas";
 answers[38] = choices[38][0];
 units[38] = "7";
 comments[38] = "Id Pregunta: 525. LEY 39/2015";


//  Id pregunta: 813 Año de creación de pregunta: 2016
 questions[39]= "40)  Las Delegaciones del Gobierno tendr&aacute;n su sede en:";
 choices[39]= new Array();
 choices[39][0] = "la localidad elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[39][1] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[39][2] = "la localidad donde radique el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Consejo de Ministros acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 choices[39][3] = "la localidad donde elegida por el Consejo de Gobierno de la Comunidad Aut&oacute;noma, salvo que el Ministerio de Hacienda y Administraciones P&uacute;blicas acuerde ubicarla en otra distinta y sin perjuicio de lo que disponga expresamente el Estatuto de Autonom&iacute;a";
 answers[39] = choices[39][2];
 units[39] = "4, 7, 8, 9";
 comments[39] = "Id Pregunta: 813. Ley 40/2015";


//  Id pregunta: 772 Año de creación de pregunta: 2016
 questions[40]= "41)  Las Administraciones P&uacute;blicas:";
 choices[40]= new Array();
 choices[40][0] = "se relacionar&aacute;n entre s&iacute; y con sus &oacute;rganos, organismos p&uacute;blicos y entidades vinculados o dependientes a trav&eacute;s de medios no electr&oacute;nicos, que aseguren la interoperabilidad y seguridad de los sistemas y soluciones adoptadas por cada una de ellas";
 choices[40][1] = "garantizar&aacute;n la protecci&oacute;n de los datos de car&aacute;cter personal";
 choices[40][2] = "facilitar&aacute;n preferentemente la prestaci&oacute;n disociada de servicios a los interesados";
 choices[40][3] = "todas son correctas";
 answers[40] = choices[40][1];
 units[40] = "4, 7, 8, 9";
 comments[40] = "Id Pregunta: 772. Ley 40/2015";


//  Id pregunta: 518 Año de creación de pregunta: 2016
 questions[41]= "42)  Las Universidades p&uacute;blicas:";
 choices[41]= new Array();
 choices[41][0] = "se regir&aacute;n &uacute;nicamente por su normativa espec&iacute;fica";
 choices[41][1] = "se regir&aacute;n por su normativa espec&iacute;fica y supletoriamente por las previsiones de esta Ley";
 choices[41][2] = "se regir&aacute;n por las previsiones de esta Ley y supletoriamente por su normativa espec&iacute;fica";
 choices[41][3] = "se regir&aacute;n &uacute;nicamente por las previsiones de esta Ley";
 answers[41] = choices[41][1];
 units[41] = "7";
 comments[41] = "Id Pregunta: 518. LEY 39/2015";


//  Id pregunta: 782 Año de creación de pregunta: 2016
 questions[42]= "43)  Sin perjuicio de la responsabilidad disciplinaria en que se pueda incurrir, el incumplimiento de las instrucciones u &oacute;rdenes de servicio:";
 choices[42]= new Array();
 choices[42][0] = "no afecta por s&iacute; solo a la validez de los actos dictados por los &oacute;rganos administrativos";
 choices[42][1] = "supone la invalidez de los actos dictados por los &oacute;rganos administrativos";
 choices[42][2] = "supone la nulidad de los actos dictados por los &oacute;rganos administrativos";
 choices[42][3] = "supone la anulabilidad de los actos dictados por los &oacute;rganos administrativos";
 answers[42] = choices[42][0];
 units[42] = "4, 7, 8, 9";
 comments[42] = "Id Pregunta: 782. Ley 40/2015";


//  Id pregunta: 522 Año de creación de pregunta: 2016
 questions[43]= "44)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas se denomina:";
 choices[43]= new Array();
 choices[43][0] = "De los interesados en el procedimiento";
 choices[43][1] = "De la actividad de las Administraciones P&uacute;blicas";
 choices[43][2] = "Disposiciones generales";
 choices[43][3] = "De los actos administrativos";
 answers[43] = choices[43][2];
 units[43] = "7";
 comments[43] = "Id Pregunta: 522. LEY 39/2015";


//  Id pregunta: 521 Año de creación de pregunta: 2016
 questions[44]= "45)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas tiene:";
 choices[44]= new Array();
 choices[44][0] = "un art&iacute;culo";
 choices[44][1] = "dos art&iacute;culos";
 choices[44][2] = "tres art&iacute;culos";
 choices[44][3] = "cuatro art&iacute;culos";
 answers[44] = choices[44][1];
 units[44] = "7";
 comments[44] = "Id Pregunta: 521. LEY 39/2015";


//  Id pregunta: 786 Año de creación de pregunta: 2016
 questions[45]= "46)  Salvo las excepciones previstas por esta Ley, la organizaci&oacute;n de la Administraci&oacute;n General del Estado responde a los principios de:";
 choices[45]= new Array();
 choices[45][0] = "divisi&oacute;n funcional en Departamentos ministeriales y de gesti&oacute;n territorial integrada en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[45][1] = "gesti&oacute;n territorial integrada en Departamentos ministeriales y de divisi&oacute;n funcional en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[45][2] = "divisi&oacute;n funcional en Delegaciones del Gobierno y de gesti&oacute;n territorial integrada en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 choices[45][3] = "gesti&oacute;n territorial integrada en Delegaciones del Gobierno y de divisi&oacute;n funcional en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 answers[45] = choices[45][0];
 units[45] = "4, 7, 8, 9";
 comments[45] = "Id Pregunta: 786. Ley 40/2015";


//  Id pregunta: 150 Año de creación de pregunta: 2016
 questions[46]= "47)  Seg&uacute;n la ley 39/2015, el medio elegido por la persona para comunicarse con las Administraciones P&uacute;blicas:";
 choices[46]= new Array();
 choices[46][0] = "&uacute;nicamente podr&aacute; ser modificado cuando de no hacerlo se corra riesgo de no alcanzarse las pretensiones del interesado ";
 choices[46][1] = "no podr&aacute; ser modificado con posterioridad al tr&aacute;mite de audiencia";
 choices[46][2] = "podr&aacute; ser modificado en cualquier momento por la persona";
 choices[46][3] = "no podr&aacute; ser modificado de manera unilateral por el interesado";
 answers[46] = choices[46][2];
 units[46] = "7";
 comments[46] = "Id Pregunta: 150. Ley 39/2015, Art&iacute;culo 14";


//  Id pregunta: 790 Año de creación de pregunta: 2016
 questions[47]= "48)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado son &oacute;rganos directivos:";
 choices[47]= new Array();
 choices[47][0] = "los Delegados del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[47][1] = "los Subdelegados del Gobierno en las provincias";
 choices[47][2] = "los Subdelegados del Gobierno en las entidades locales";
 choices[47][3] = "a y b son correctas";
 answers[47] = choices[47][3];
 units[47] = "4, 7, 8, 9";
 comments[47] = "Id Pregunta: 790. Ley 40/2015";


//  Id pregunta: 774 Año de creación de pregunta: 2016
 questions[48]= "49)  Las Administraciones P&uacute;blicas act&uacute;an para el cumplimiento de sus fines con:";
 choices[48]= new Array();
 choices[48][0] = "personalidad jur&iacute;dica propia";
 choices[48][1] = "personalidad jur&iacute;dica &uacute;nica";
 choices[48][2] = "personalidad jur&iacute;dica plena";
 choices[48][3] = "personalidad jur&iacute;dica f&iacute;sica";
 answers[48] = choices[48][1];
 units[48] = "4, 7, 8, 9";
 comments[48] = "Id Pregunta: 774. Ley 40/2015";


//  Id pregunta: 842 Año de creación de pregunta: 2016
 questions[49]= "50)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Indique la respuesta correcta.";
 choices[49]= new Array();
 choices[49][0] = "Para la v&aacute;lida constituci&oacute;n del &oacute;rgano, a efectos de la celebraci&oacute;n de sesiones, deliberaciones y toma de acuerdos, se requerir&aacute; la asistencia, presencial o a distancia, del Presidente y Secretario o en su caso, de quienes les suplan, y la de la mitad de sus miembros.";
 choices[49][1] = "Cuando se trate de los &oacute;rganos colegiados a que se refiere el art&iacute;culo 15.2, el Presidente podr&aacute; considerar v&aacute;lidamente constituido el &oacute;rgano, a efectos de celebraci&oacute;n de sesi&oacute;n, si asisten los representantes de las Administraciones P&uacute;blicas y de las organizaciones representativas de intereses sociales miembros del &oacute;rgano a los que se haya atribuido la condici&oacute;n de portavoces.";
 choices[49][2] = "Cuando estuvieran reunidos, de manera presencial o a distancia, el Secretario y todos los miembros del &oacute;rgano colegiado, o en su caso las personas que les suplan, &eacute;stos podr&aacute;n constituirse v&aacute;lidamente como &oacute;rgano colegiado para la celebraci&oacute;n de sesiones, deliberaciones y adopci&oacute;n de acuerdos sin necesidad de convocatoria previa cuando as&iacute; lo decida el Presidente.";
 choices[49][3] = "Todas son correctas.";
 answers[49] = choices[49][1];
 units[49] = "4, 7, 8, 9";
 comments[49] = "Id Pregunta: 842. Ley 40/2015";


//  Id pregunta: 806 Año de creación de pregunta: 2016
 questions[50]= "51)  Los nombramientos de los Secretarios generales t&eacute;cnicos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, de las Comunidades Aut&oacute;nomas o de las Entidades locales, pertenecientes al:";
 choices[50]= new Array();
 choices[50][0] = "Subgrupo A1";
 choices[50][1] = "Subgrupo A2";
 choices[50][2] = "Subgrupo B";
 choices[50][3] = "Subgrupo C1";
 answers[50] = choices[50][0];
 units[50] = "4, 7, 8, 9";
 comments[50] = "Id Pregunta: 806. Ley 40/2015";


//  Id pregunta: 804 Año de creación de pregunta: 2016
 questions[51]= "52)  Los Secretarios generales t&eacute;cnicos:";
 choices[51]= new Array();
 choices[51][0] = "se encuentran bajo la inmediata dependencia del Subsecretario";
 choices[51][1] = "tendr&aacute;n las competencias sobre servicios comunes que les atribuya el Real Decreto de estructura del Departamento";
 choices[51][2] = "tendr&aacute;n las competencias relativas a producci&oacute;n normativa, asistencia jur&iacute;dica y publicaciones";
 choices[51][3] = "todas son correctas";
 answers[51] = choices[51][3];
 units[51] = "4, 7, 8, 9";
 comments[51] = "Id Pregunta: 804. Ley 40/2015";


//  Id pregunta: 808 Año de creación de pregunta: 2016
 questions[52]= "53)  A los Directores generales les corresponde (se&ntilde;ala la incorrecta):";
 choices[52]= new Array();
 choices[52][0] = "proponer los proyectos de su Direcci&oacute;n general para alcanzar los objetivos establecidos por el Ministro, dirigir su ejecuci&oacute;n y controlar su adecuado cumplimiento";
 choices[52][1] = "solicitar del Ministerio de Hacienda y Administraciones P&uacute;blicas la afectaci&oacute;n o el arrendamiento de los inmuebles necesarios para el cumplimiento de los fines de los servicios a cargo del Departamento";
 choices[52][2] = "ejercer las competencias atribuidas a la Direcci&oacute;n general y las que le sean desconcentradas o delegadas";
 choices[52][3] = "impulsar y supervisar las actividades que forman parte de la gesti&oacute;n ordinaria del &oacute;rgano directivo y velar por el buen funcionamiento de los &oacute;rganos y unidades dependientes y del personal integrado en los mismos";
 answers[52] = choices[52][1];
 units[52] = "4, 7, 8, 9";
 comments[52] = "Id Pregunta: 808. Ley 40/2015";


//  Id pregunta: 517 Año de creación de pregunta: 2016
 questions[53]= "54)  Las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas:";
 choices[53]= new Array();
 choices[53][0] = "quedar&aacute;n sujetas a lo dispuesto en todas las normas de esta Ley";
 choices[53][1] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, y en todo caso, cuando ejerzan potestades administrativas";
 choices[53][2] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley, salvo cuando ejerzan potestades administrativas";
 choices[53][3] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley";
 answers[53] = choices[53][1];
 units[53] = "7";
 comments[53] = "Id Pregunta: 517. LEY 39/2015";


//  Id pregunta: 821 Año de creación de pregunta: 2016
 questions[54]= "55)  Los Delegados del Gobierno (se&ntilde;ala la incorrecta):";
 choices[54]= new Array();
 choices[54][0] = "representan al Gobierno de la Naci&oacute;n en el territorio de la respectiva Comunidad Aut&oacute;noma";
 choices[54][1] = "dirigir&aacute;n y supervisar&aacute;n la Administraci&oacute;n General del Estado en el territorio de las respectivas Comunidades Aut&oacute;nomas";
 choices[54][2] = "son &oacute;rganos directivos con rango de Director general";
 choices[54][3] = "ser&aacute;n nombrados y separados por Real Decreto del Consejo de Ministros, a propuesta del Presidente del Gobierno";
 answers[54] = choices[54][2];
 units[54] = "4, 7, 8, 9";
 comments[54] = "Id Pregunta: 821. Ley 40/2015";


//  Id pregunta: 771 Año de creación de pregunta: 2016
 questions[55]= "56)  Las Administraciones P&uacute;blicas deber&aacute;n respetar en su actuaci&oacute;n y relaciones los siguientes principios:";
 choices[55]= new Array();
 choices[55][0] = "simplicidad, claridad y proximidad a los ciudadanos";
 choices[55][1] = "participaci&oacute;n, objetividad y transparencia de la actuaci&oacute;n administrativa";
 choices[55][2] = "responsabilidad por la gesti&oacute;n p&uacute;blica";
 choices[55][3] = "todas son correctas";
 answers[55] = choices[55][3];
 units[55] = "4, 7, 8, 9";
 comments[55] = "Id Pregunta: 771. Ley 40/2015";


//  Id pregunta: 800 Año de creación de pregunta: 2016
 questions[56]= "57)  Las unidades administrativas comprenden puestos de trabajo o dotaciones de plantilla:";
 choices[56]= new Array();
 choices[56][0] = "vinculados funcionalmente por raz&oacute;n de sus cometidos y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[56][1] = "vinculados org&aacute;nicamente por raz&oacute;n de sus cometidos y funcionalmente por una jefatura com&uacute;n";
 choices[56][2] = "vinculados funcionalmente por raz&oacute;n de su territorio y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[56][3] = "vinculados org&aacute;nicamente por raz&oacute;n de su territorio y funcionalmente por una jefatura com&uacute;n";
 answers[56] = choices[56][0];
 units[56] = "4, 7, 8, 9";
 comments[56] = "Id Pregunta: 800. Ley 40/2015";


//  Id pregunta: 538 Año de creación de pregunta: 2016
 questions[57]= "58)  En el registro electr&oacute;nico general de apoderamientos, deber&aacute;n inscribirse, al menos, los de car&aacute;cter general otorgados por quien ostente la condici&oacute;n de interesado en un procedimiento administrativo a favor de representante:";
 choices[57]= new Array();
 choices[57][0] = "apud acta";
 choices[57][1] = "presencialmente";
 choices[57][2] = "electr&oacute;nicamente";
 choices[57][3] = "todas son correctas";
 answers[57] = choices[57][3];
 units[57] = "7";
 comments[57] = "Id Pregunta: 538. LEY 39/2015";


//  Id pregunta: 523 Año de creación de pregunta: 2016
 questions[58]= "59)  El sector p&uacute;blico institucional se integra por:";
 choices[58]= new Array();
 choices[58][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho privado vinculados o independientes de las Administraciones P&uacute;blicas";
 choices[58][1] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[58][2] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o independientes de las Administraciones P&uacute;blicas";
 choices[58][3] = "cualesquiera organismos p&uacute;blicos y entidades de derecho privado vinculados o dependientes de las Administraciones P&uacute;blicas";
 answers[58] = choices[58][1];
 units[58] = "7";
 comments[58] = "Id Pregunta: 523. LEY 39/2015";


//  Id pregunta: 840 Año de creación de pregunta: 2016
 questions[59]= "60)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta correcta.";
 choices[59]= new Array();
 choices[59][0] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos provisionalmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[59][1] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos temporalmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[59][2] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos eventualmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 choices[59][3] = "En la forma que disponga cada Administraci&oacute;n P&uacute;blica, los titulares de los &oacute;rganos administrativos podr&aacute;n ser suplidos circunstancialmente en los supuestos de vacante, ausencia o enfermedad, as&iacute; como en los casos en que haya sido declarada su abstenci&oacute;n o recusaci&oacute;n. Si no se designa suplente, la competencia del &oacute;rgano administrativo se ejercer&aacute; por quien designe el &oacute;rgano administrativo inmediato superior de quien dependa.";
 answers[59] = choices[59][1];
 units[59] = "4, 7, 8, 9";
 comments[59] = "Id Pregunta: 840. Ley 40/2015";


//  Id pregunta: 787 Año de creación de pregunta: 2016
 questions[60]= "61)  La Administraci&oacute;n General del Estado comprende (se&ntilde;ala la incorrecta):";
 choices[60]= new Array();
 choices[60][0] = "la Organizaci&oacute;n Central, que integra los Ministerios y los servicios comunes";
 choices[60][1] = "la Organizaci&oacute;n Territorial";
 choices[60][2] = "la Organizaci&oacute;n sectorial";
 choices[60][3] = "la Administraci&oacute;n General del Estado en el exterior";
 answers[60] = choices[60][2];
 units[60] = "4, 7, 8, 9";
 comments[60] = "Id Pregunta: 787. Ley 40/2015";


//  Id pregunta: 514 Año de creación de pregunta: 2016
 questions[61]= "62)  Podr&aacute;n establecerse especialidades del procedimiento referidas a los &oacute;rganos competentes, plazos propios del concreto procedimiento por raz&oacute;n de la materia, formas de iniciaci&oacute;n y terminaci&oacute;n, publicaci&oacute;n e informes a recabar:";
 choices[61]= new Array();
 choices[61][0] = "solo mediante ley";
 choices[61][1] = "reglamentariamente";
 choices[61][2] = "mediante ley o reglamentariamente";
 choices[61][3] = "ninguna es correcta";
 answers[61] = choices[61][1];
 units[61] = "7";
 comments[61] = "Id Pregunta: 514. LEY 39/2015";


//  Id pregunta: 792 Año de creación de pregunta: 2016
 questions[62]= "63)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado los Subdelegados del Gobierno en las provincias los cuales tendr&aacute;n nivel de:";
 choices[62]= new Array();
 choices[62][0] = "Subsecretario";
 choices[62][1] = "Subdirector general";
 choices[62][2] = "Secretario de Estado";
 choices[62][3] = "ninguna es correcta";
 answers[62] = choices[62][1];
 units[62] = "4, 7, 8, 9";
 comments[62] = "Id Pregunta: 792. Ley 40/2015";


//  Id pregunta: 810 Año de creación de pregunta: 2016
 questions[63]= "64)  Ostentan la representaci&oacute;n ordinaria del Ministerio:";
 choices[63]= new Array();
 choices[63][0] = "los Secretarios de Estado";
 choices[63][1] = "los Ministros";
 choices[63][2] = "los Subsecretarios";
 choices[63][3] = "los Secretarios generales";
 answers[63] = choices[63][2];
 units[63] = "4, 7, 8, 9";
 comments[63] = "Id Pregunta: 810. Ley 40/2015";


//  Id pregunta: 669 Año de creación de pregunta: 2016
 questions[64]= "65)  Se&ntilde;ale la opci&oacute;n falsa respecto a la instrucci&oacute;n del procedimiento definida en la Ley 39/2015:";
 choices[64]= new Array();
 choices[64][0] = "Los interesados podr&aacute;n, en cualquier momento del procedimiento anterior al tr&aacute;mite de audiencia, aducir alegaciones y aportar documentos u otros elementos de juicio.";
 choices[64][1] = "El instructor del procedimiento s&oacute;lo podr&aacute; rechazar las pruebas propuestas por los interesados cuando sean manifiestamente improcedentes o innecesarias, mediante resoluci&oacute;n motivada.";
 choices[64][2] = "Salvo disposici&oacute;n expresa en contrario, los informes ser&aacute;n preceptivos y vinculantes.";
 choices[64][3] = "Se podr&aacute; prescindir del tr&aacute;mite de audiencia cuando no figuren en el procedimiento ni sean tenidos en cuenta en la resoluci&oacute;n otros hechos ni otras alegaciones y pruebas que las aducidas por el interesado.";
 answers[64] = choices[64][2];
 units[64] = "7";
 comments[64] = "Id Pregunta: 669. Cap&iacute;tulo IV, T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 520 Año de creación de pregunta: 2016
 questions[65]= "66)  Las Corporaciones de Derecho P&uacute;blico se regir&aacute;n por:";
 choices[65]= new Array();
 choices[65][0] = "su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o delegadas por una Administraci&oacute;n P&uacute;blica, y supletoriamente por la presente Ley";
 choices[65][1] = "la presente Ley, y supletoriamente por su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o delegadas por una Administraci&oacute;n P&uacute;blica";
 choices[65][2] = "su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o cedidas por una Administraci&oacute;n P&uacute;blica, y supletoriamente por la presente Ley";
 choices[65][3] = "la presente Ley, y supletoriamente por su normativa espec&iacute;fica en el ejercicio de las funciones p&uacute;blicas que les hayan sido atribuidas por Ley o cedidas por una Administraci&oacute;n P&uacute;blica";
 answers[65] = choices[65][0];
 units[65] = "7";
 comments[65] = "Id Pregunta: 520. LEY 39/2015";


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


//  Id pregunta: 541 Año de creación de pregunta: 2016
 questions[67]= "68)  Los asientos que se realicen en los registros electr&oacute;nicos generales y particulares de apoderamientos deber&aacute;n contener, al menos: (se&ntilde;ala la incorrecta)";
 choices[67]= new Array();
 choices[67][0] = "nombre y apellidos o la denominaci&oacute;n o raz&oacute;n social, documento nacional de identidad, n&uacute;mero de identificaci&oacute;n fiscal o documento equivalente del poderdante y del apoderado";
 choices[67][1] = "causas de anulaci&oacute;n del apoderamiento";
 choices[67][2] = "per&iacute;odo de tiempo por el cual se otorga el poder";
 choices[67][3] = "tipo de poder seg&uacute;n las facultades que otorgue";
 answers[67] = choices[67][1];
 units[67] = "7";
 comments[67] = "Id Pregunta: 541. LEY 39/2015";


