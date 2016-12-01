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

//  Id pregunta: 153 Año de creación de pregunta: 2016
 questions[0]= "1)  Se entiende por documentos p&uacute;blicos administrativos";
 choices[0]= new Array();
 choices[0][0] = "los v&aacute;lidamente emitidos por los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[0][1] = "los remitidos por personas f&iacute;sicas o jur&iacute;dicas a los &oacute;rganos de las Administraciones P&uacute;blicas";
 choices[0][2] = "a y b son correctas";
 choices[0][3] = "a y b son incorrectas";
 answers[0] = choices[0][0];
 units[0] = "7";
 comments[0] = "Id Pregunta: 153. Ley 39/2015, Art&iacute;culo 26";
 preguntaids[0] = 153


//  Id pregunta: 530 Año de creación de pregunta: 2016
 questions[1]= "2)  Podr&aacute;n actuar en representaci&oacute;n de otras ante las Administraciones P&uacute;blicas:";
 choices[1]= new Array();
 choices[1][0] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[1][1] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[1][2] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 choices[1][3] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 answers[1] = choices[1][3];
 units[1] = "7";
 comments[1] = "Id Pregunta: 530. LEY 39/2015";
 preguntaids[1] = 530


//  Id pregunta: 785 Año de creación de pregunta: 2016
 questions[2]= "3)  Las competencias en materia de organizaci&oacute;n administrativa, r&eacute;gimen de personal, procedimientos e inspecci&oacute;n de servicios, no atribuidas espec&iacute;ficamente conforme a una Ley a ning&uacute;n otro &oacute;rgano de la Administraci&oacute;n General del Estado, ni al Gobierno, corresponder&aacute;n a:";
 choices[2]= new Array();
 choices[2][0] = "el Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[2][1] = "el Consejo de Estado";
 choices[2][2] = "el Congreso";
 choices[2][3] = "las Cortes Generales";
 answers[2] = choices[2][0];
 units[2] = "4, 7, 8, 9";
 comments[2] = "Id Pregunta: 785. Ley 40/2015";
 preguntaids[2] = 785


//  Id pregunta: 147 Año de creación de pregunta: 2016
 questions[3]= "4)  Seg&uacute;n la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas el ejercicio de la potestad reglamentaria corresponde:";
 choices[3]= new Array();
 choices[3][0] = "Al Gobierno de la naci&oacute;n";
 choices[3][1] = "A las Cortes Generales y al Gobierno por delegaci&oacute;n de estas";
 choices[3][2] = "Al Gobierno de la naci&oacute;n y a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas";
 choices[3][3] = "Al Gobierno de la naci&oacute;n, a los &Oacute;rganos de Gobierno de las Comunidades Aut&oacute;nomas y a los &oacute;rganos de gobierno locales";
 answers[3] = choices[3][3];
 units[3] = "7";
 comments[3] = "Id Pregunta: 147. Ley 39/2015, Art&iacute;culo 128";
 preguntaids[3] = 147


//  Id pregunta: 526 Año de creación de pregunta: 2016
 questions[4]= "5)  Las asociaciones y organizaciones representativas de intereses econ&oacute;micos y sociales:";
 choices[4]= new Array();
 choices[4][0] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos en los t&eacute;rminos que reglamentariamente se establezca";
 choices[4][1] = "ser&aacute;n titulares de intereses leg&iacute;timos individuales y colectivos";
 choices[4][2] = "no ser&aacute;n titulares de intereses leg&iacute;timos colectivos";
 choices[4][3] = "ser&aacute;n titulares de intereses leg&iacute;timos colectivos en los t&eacute;rminos que la Ley reconozca";
 answers[4] = choices[4][3];
 units[4] = "7";
 comments[4] = "Id Pregunta: 526. LEY 39/2015";
 preguntaids[4] = 526


//  Id pregunta: 519 Año de creación de pregunta: 2016
 questions[5]= "6)  Tienen la consideraci&oacute;n de Administraciones P&uacute;blicas: (se&ntilde;ala la incorrecta)";
 choices[5]= new Array();
 choices[5][0] = "la Administraci&oacute;n General del Estado";
 choices[5][1] = "las Administraciones de las Comunidades Aut&oacute;nomas";
 choices[5][2] = "las Entidades que integran la Administraci&oacute;n Local";
 choices[5][3] = "los organismos p&uacute;blicos y entidades de derecho privado que integran el sector p&uacute;blico institucional";
 answers[5] = choices[5][3];
 units[5] = "7";
 comments[5] = "Id Pregunta: 519. LEY 39/2015";
 preguntaids[5] = 519


//  Id pregunta: 670 Año de creación de pregunta: 2016
 questions[6]= "7)  La Ley 39/2015 introduce un cap&iacute;tulo relativo a la tramitaci&oacute;n simplificada del procedimiento administrativo com&uacute;n. Respecto a este tr&aacute;mite se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[6]= new Array();
 choices[6][0] = "Se podr&aacute; acordar la tramitaci&oacute;n simplificada por falta de complejidad del procedimiento y por razones de inter&eacute;s p&uacute;blico.";
 choices[6][1] = "Los interesados podr&aacute;n, en cualquier caso, solicitar la tramitaci&oacute;n simplificada del procedimiento.";
 choices[6][2] = "En general, los procedimientos administrativos tramitados de manera simplificada deber&aacute;n ser resueltos en treinta d&iacute;as.";
 choices[6][3] = "Constar&aacute;n &uacute;nicamente de los siguientes tr&aacute;mites: inicio, subsanaci&oacute;n (en su caso), alegaciones y tr&aacute;mite de audiencia.";
 answers[6] = choices[6][3];
 units[6] = "7";
 comments[6] = "Id Pregunta: 670. Cap&iacute;tulo VI, T&iacute;tulo IV de la Ley 39/2015";
 preguntaids[6] = 670


//  Id pregunta: 531 Año de creación de pregunta: 2016
 questions[7]= "8)  Se presumir&aacute; la representaci&oacute;n para:";
 choices[7]= new Array();
 choices[7][0] = "formular solicitudes";
 choices[7][1] = "los actos y gestiones de mero tr&aacute;mite";
 choices[7][2] = "presentar declaraciones responsables o comunicaciones";
 choices[7][3] = "interponer recursos, desistir de acciones y renunciar a derechos en nombre de otra persona";
 answers[7] = choices[7][1];
 units[7] = "7";
 comments[7] = "Id Pregunta: 531. LEY 39/2015";
 preguntaids[7] = 531


//  Id pregunta: 834 Año de creación de pregunta: 2016
 questions[8]= "9)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. La creaci&oacute;n de cualquier &oacute;rgano administrativo exigir&aacute;, al menos, el cumplimiento de los siguientes requisitos:";
 choices[8]= new Array();
 choices[8][0] = "Determinaci&oacute;n de su forma de integraci&oacute;n en la Administraci&oacute;n P&uacute;blica de que se trate y su dependencia org&aacute;nica.";
 choices[8][1] = "Delimitaci&oacute;n de su naturaleza, funciones y competencias.";
 choices[8][2] = "Dotaci&oacute;n de los cr&eacute;ditos necesarios para su puesta en marcha y funcionamiento.";
 choices[8][3] = "Todas son correctas.";
 answers[8] = choices[8][3];
 units[8] = "4, 7, 8, 9";
 comments[8] = "Id Pregunta: 834. Ley 40/2015";
 preguntaids[8] = 834


//  Id pregunta: 807 Año de creación de pregunta: 2016
 questions[9]= "10)  Son los titulares de los &oacute;rganos directivos encargados de la gesti&oacute;n de una o varias &aacute;reas funcionalmente homog&eacute;neas del Ministerio:";
 choices[9]= new Array();
 choices[9][0] = "los Secretarios generales t&eacute;cnicos";
 choices[9][1] = "los Directores generales";
 choices[9][2] = "los Secretarios generales";
 choices[9][3] = "los Subsecretarios";
 answers[9] = choices[9][1];
 units[9] = "4, 7, 8, 9";
 comments[9] = "Id Pregunta: 807. Ley 40/2015";
 preguntaids[9] = 807


//  Id pregunta: 776 Año de creación de pregunta: 2016
 questions[10]= "11)  Las Administraciones P&uacute;blicas velar&aacute;n por el cumplimiento de los requisitos previstos en la legislaci&oacute;n que resulte aplicable, para lo cual podr&aacute;n, en el &aacute;mbito de sus respectivas competencias, comprobar, verificar, investigar e inspeccionar los hechos, actos, elementos, actividades, estimaciones y dem&aacute;s circunstancias que fueran necesarias con los l&iacute;mites establecidos en:";
 choices[10]= new Array();
 choices[10][0] = "la legislaci&oacute;n de protecci&oacute;n de datos de car&aacute;cter personal";
 choices[10][1] = "el C&oacute;digo Civil";
 choices[10][2] = "la Constituci&oacute;n Espa&ntilde;ola";
 choices[10][3] = "la ley de procedimiento administrativo com&uacute;n de las Administraciones P&uacute;blicas";
 answers[10] = choices[10][0];
 units[10] = "4, 7, 8, 9";
 comments[10] = "Id Pregunta: 776. Ley 40/2015";
 preguntaids[10] = 776


//  Id pregunta: 838 Año de creación de pregunta: 2016
 questions[11]= "12)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Elija la respuesta incorrecta.";
 choices[11]= new Array();
 choices[11][0] = "La realizaci&oacute;n de actividades de car&aacute;cter material o t&eacute;cnico de la competencia de los &oacute;rganos administrativos o de las Entidades de Derecho P&uacute;blico podr&aacute; ser encomendada a otros &oacute;rganos o Entidades de Derecho P&uacute;blico de la misma o de distinta Administraci&oacute;n, siempre que entre sus competencias est&eacute;n esas actividades, por razones de eficacia o cuando no se posean los medios t&eacute;cnicos id&oacute;neos para su desempe&ntilde;o.";
 choices[11][1] = "Las encomiendas de gesti&oacute;n podr&aacute;n tener por objeto prestaciones propias de los contratos regulados en la legislaci&oacute;n de contratos del sector p&uacute;blico. En tal caso, su naturaleza y r&eacute;gimen jur&iacute;dico se ajustar&aacute; a lo previsto en &eacute;sta.";
 choices[11][2] = "La encomienda de gesti&oacute;n no supone cesi&oacute;n de la titularidad de la competencia ni de los elementos sustantivos de su ejercicio, siendo responsabilidad del &oacute;rgano o Entidad encomendante dictar cuantos actos o resoluciones de car&aacute;cter jur&iacute;dico den soporte o en los que se integre la concreta actividad material objeto de encomienda.";
 choices[11][3] = "En todo caso, la Entidad u &oacute;rgano encomendado tendr&aacute; la condici&oacute;n de encargado del tratamiento de los datos de car&aacute;cter personal a los que pudiera tener acceso en ejecuci&oacute;n de la encomienda de gesti&oacute;n, si&eacute;ndole de aplicaci&oacute;n lo dispuesto en la normativa de protecci&oacute;n de datos de car&aacute;cter personal.";
 answers[11] = choices[11][1];
 units[11] = "4, 7, 8, 9";
 comments[11] = "Id Pregunta: 838. Ley 40/2015";
 preguntaids[11] = 838


//  Id pregunta: 517 Año de creación de pregunta: 2016
 questions[12]= "13)  Las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas:";
 choices[12]= new Array();
 choices[12][0] = "quedar&aacute;n sujetas a lo dispuesto en todas las normas de esta Ley";
 choices[12][1] = "quedar&aacute;n sujetas a lo dispuesto en las normas de esta Ley que espec&iacute;ficamente se refieran a las mismas, y en todo caso, cuando ejerzan potestades administrativas";
 choices[12][2] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley, salvo cuando ejerzan potestades administrativas";
 choices[12][3] = "no est&aacute;n sujetas a lo dispuesto en las normas de esta Ley";
 answers[12] = choices[12][1];
 units[12] = "7";
 comments[12] = "Id Pregunta: 517. LEY 39/2015";
 preguntaids[12] = 517


//  Id pregunta: 773 Año de creación de pregunta: 2016
 questions[13]= "14)  La actuaci&oacute;n de la Administraci&oacute;n P&uacute;blica respectiva se desarrolla para alcanzar los objetivos que establecen las leyes y el resto del ordenamiento jur&iacute;dico, bajo la direcci&oacute;n de (se&ntilde;ala la incorrecta):";
 choices[13]= new Array();
 choices[13][0] = "el Gobierno de la Naci&oacute;n";
 choices[13][1] = "los &oacute;rganos de gobierno de las Comunidades Aut&oacute;nomas";
 choices[13][2] = "los &oacute;rganos de gobierno de las Entidades Locales";
 choices[13][3] = "los &oacute;rganos de gobierno de las Universidades p&uacute;blicas";
 answers[13] = choices[13][3];
 units[13] = "4, 7, 8, 9";
 comments[13] = "Id Pregunta: 773. Ley 40/2015";
 preguntaids[13] = 773


//  Id pregunta: 831 Año de creación de pregunta: 2016
 questions[14]= "15)  Si el recusado niega la causa de recusaci&oacute;n, el superior resolver&aacute; en el plazo de ...";
 choices[14]= new Array();
 choices[14][0] = "Un d&iacute;a";
 choices[14][1] = "Dos d&iacute;as";
 choices[14][2] = "Tres d&iacute;as";
 choices[14][3] = "Cuatro d&iacute;as";
 answers[14] = choices[14][3];
 units[14] = "4, 7, 8, 9";
 comments[14] = "Id Pregunta: 831. Ley 40/2015";
 preguntaids[14] = 831


//  Id pregunta: 772 Año de creación de pregunta: 2016
 questions[15]= "16)  Las Administraciones P&uacute;blicas:";
 choices[15]= new Array();
 choices[15][0] = "se relacionar&aacute;n entre s&iacute; y con sus &oacute;rganos, organismos p&uacute;blicos y entidades vinculados o dependientes a trav&eacute;s de medios no electr&oacute;nicos, que aseguren la interoperabilidad y seguridad de los sistemas y soluciones adoptadas por cada una de ellas";
 choices[15][1] = "garantizar&aacute;n la protecci&oacute;n de los datos de car&aacute;cter personal";
 choices[15][2] = "facilitar&aacute;n preferentemente la prestaci&oacute;n disociada de servicios a los interesados";
 choices[15][3] = "todas son correctas";
 answers[15] = choices[15][1];
 units[15] = "4, 7, 8, 9";
 comments[15] = "Id Pregunta: 772. Ley 40/2015";
 preguntaids[15] = 772


//  Id pregunta: 793 Año de creación de pregunta: 2016
 questions[16]= "17)  En la Administraci&oacute;n General del Estado en el exterior son &oacute;rganos directivos:";
 choices[16]= new Array();
 choices[16][0] = "los Ministros y los Secretarios de Estado";
 choices[16][1] = "los Subsecretarios y Secretarios generales";
 choices[16][2] = "los embajadores y representantes permanentes ante Organizaciones internacionales";
 choices[16][3] = "los Directores generales";
 answers[16] = choices[16][2];
 units[16] = "4, 7, 8, 9";
 comments[16] = "Id Pregunta: 793. Ley 40/2015";
 preguntaids[16] = 793


//  Id pregunta: 811 Año de creación de pregunta: 2016
 questions[17]= "18)  Los Subdirectores generales:";
 choices[17]= new Array();
 choices[17][0] = "son los responsables inmediatos, bajo la supervisi&oacute;n del Secretario general o del titular del &oacute;rgano del que dependan, de la ejecuci&oacute;n de aquellos proyectos, objetivos o actividades que les sean asignados, as&iacute; como de la gesti&oacute;n ordinaria de los asuntos de la competencia de la Subdirecci&oacute;n General";
 choices[17][1] = "ser&aacute;n nombrados, respetando los principios de igualdad, m&eacute;rito y capacidad, y cesados por el Ministro, Secretario de Estado o Subsecretario del que dependan";
 choices[17][2] = "sus nombramientos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, o de otras Administraciones, cuando as&iacute; lo prevean las normas de aplicaci&oacute;n, pertenecientes al Subgrupo A2";
 choices[17][3] = "todas son correctas";
 answers[17] = choices[17][1];
 units[17] = "4, 7, 8, 9";
 comments[17] = "Id Pregunta: 811. Ley 40/2015";
 preguntaids[17] = 811


//  Id pregunta: 784 Año de creación de pregunta: 2016
 questions[18]= "19)  La Administraci&oacute;n General del Estado act&uacute;a y se organiza de acuerdo con los principios establecidos en el art&iacute;culo 3, as&iacute; como los de:";
 choices[18]= new Array();
 choices[18][0] = "desconcentraci&oacute;n funcional y descentralizaci&oacute;n funcional y territorial";
 choices[18][1] = "descentralizaci&oacute;n territorial y desconcentraci&oacute;n funcional y territorial";
 choices[18][2] = "descentralizaci&oacute;n funcional y desconcentraci&oacute;n funcional y territorial";
 choices[18][3] = "desconcentraci&oacute;n territorial y descentralizaci&oacute;n funcional y territorial";
 answers[18] = choices[18][2];
 units[18] = "4, 7, 8, 9";
 comments[18] = "Id Pregunta: 784. Ley 40/2015";
 preguntaids[18] = 784


//  Id pregunta: 800 Año de creación de pregunta: 2016
 questions[19]= "20)  Las unidades administrativas comprenden puestos de trabajo o dotaciones de plantilla:";
 choices[19]= new Array();
 choices[19][0] = "vinculados funcionalmente por raz&oacute;n de sus cometidos y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[19][1] = "vinculados org&aacute;nicamente por raz&oacute;n de sus cometidos y funcionalmente por una jefatura com&uacute;n";
 choices[19][2] = "vinculados funcionalmente por raz&oacute;n de su territorio y org&aacute;nicamente por una jefatura com&uacute;n";
 choices[19][3] = "vinculados org&aacute;nicamente por raz&oacute;n de su territorio y funcionalmente por una jefatura com&uacute;n";
 answers[19] = choices[19][0];
 units[19] = "4, 7, 8, 9";
 comments[19] = "Id Pregunta: 800. Ley 40/2015";
 preguntaids[19] = 800


//  Id pregunta: 803 Año de creación de pregunta: 2016
 questions[20]= "21)  La organizaci&oacute;n en Departamentos ministeriales no obsta a la existencia de:";
 choices[20]= new Array();
 choices[20][0] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter general se adscriban directamente al Ministro";
 choices[20][1] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter excepcional se adscriban directamente al Ministro";
 choices[20][2] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos no integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter general se adscriban directamente al Ministro";
 choices[20][3] = "&oacute;rganos superiores o directivos u Organismos p&uacute;blicos no integrados o dependientes, respectivamente, en la estructura general del Ministerio que con car&aacute;cter excepcional se adscriban directamente al Ministro";
 answers[20] = choices[20][3];
 units[20] = "4, 7, 8, 9";
 comments[20] = "Id Pregunta: 803. Ley 40/2015";
 preguntaids[20] = 803


//  Id pregunta: 157 Año de creación de pregunta: 2016
 questions[21]= "22)  Seg&uacute;n la ley 39/2015, los actos administrativos ser&aacute;n objeto de publicaci&oacute;n cuando (se&ntilde;ala la incorrecta):";
 choices[21]= new Array();
 choices[21][0] = "la Administraci&oacute;n estime que la notificaci&oacute;n efectuada a un solo interesado es insuficiente para garantizar la notificaci&oacute;n a todos, no siendo necesaria la notificaci&oacute;n individualizada en este caso";
 choices[21][1] = "se trate de actos integrantes de un procedimiento selectivo o de concurrencia competitiva de cualquier tipo";
 choices[21][2] = "el acto tenga por destinatario a una pluralidad indeterminada de personas";
 choices[21][3] = "as&iacute; lo establezcan las normas reguladoras de cada procedimiento o lo aconsejen razones de inter&eacute;s p&uacute;blico apreciadas por el &oacute;rgano competente";
 answers[21] = choices[21][0];
 units[21] = "7";
 comments[21] = "Id Pregunta: 157. Ley 39/2015, Art&iacute;culo 45";
 preguntaids[21] = 157


//  Id pregunta: 820 Año de creación de pregunta: 2016
 questions[22]= "23)  Respecto a los servicios territoriales es correcto:";
 choices[22]= new Array();
 choices[22][0] = "la organizaci&oacute;n de los servicios territoriales no integrados en las Delegaciones del Gobierno se establecer&aacute; mediante Real Decreto";
 choices[22][1] = "los servicios territoriales no integrados depender&aacute;n del Delegado del Gobierno, o en su caso Subdelegado del Gobierno, a trav&eacute;s de la Secretar&iacute;a General";
 choices[22][2] = "los servicios territoriales integrados depender&aacute;n del &oacute;rgano central competente sobre el sector de actividad en el que aqu&eacute;llos operen";
 choices[22][3] = "ninguna es correcta";
 answers[22] = choices[22][0];
 units[22] = "4, 7, 8, 9";
 comments[22] = "Id Pregunta: 820. Ley 40/2015";
 preguntaids[22] = 820


//  Id pregunta: 538 Año de creación de pregunta: 2016
 questions[23]= "24)  En el registro electr&oacute;nico general de apoderamientos, deber&aacute;n inscribirse, al menos, los de car&aacute;cter general otorgados por quien ostente la condici&oacute;n de interesado en un procedimiento administrativo a favor de representante:";
 choices[23]= new Array();
 choices[23][0] = "apud acta";
 choices[23][1] = "presencialmente";
 choices[23][2] = "electr&oacute;nicamente";
 choices[23][3] = "todas son correctas";
 answers[23] = choices[23][3];
 units[23] = "7";
 comments[23] = "Id Pregunta: 538. LEY 39/2015";
 preguntaids[23] = 538


//  Id pregunta: 791 Año de creación de pregunta: 2016
 questions[24]= "25)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado los Delegados del Gobierno en las Comunidades Aut&oacute;nomas tendr&aacute;n rango de:";
 choices[24]= new Array();
 choices[24][0] = "Subsecretario";
 choices[24][1] = "Subdirector general";
 choices[24][2] = "Secretario de Estado";
 choices[24][3] = "ninguna es correcta";
 answers[24] = choices[24][0];
 units[24] = "4, 7, 8, 9";
 comments[24] = "Id Pregunta: 791. Ley 40/2015";
 preguntaids[24] = 791


//  Id pregunta: 786 Año de creación de pregunta: 2016
 questions[25]= "26)  Salvo las excepciones previstas por esta Ley, la organizaci&oacute;n de la Administraci&oacute;n General del Estado responde a los principios de:";
 choices[25]= new Array();
 choices[25][0] = "divisi&oacute;n funcional en Departamentos ministeriales y de gesti&oacute;n territorial integrada en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[25][1] = "gesti&oacute;n territorial integrada en Departamentos ministeriales y de divisi&oacute;n funcional en Delegaciones del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[25][2] = "divisi&oacute;n funcional en Delegaciones del Gobierno y de gesti&oacute;n territorial integrada en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 choices[25][3] = "gesti&oacute;n territorial integrada en Delegaciones del Gobierno y de divisi&oacute;n funcional en Departamentos ministeriales en las Comunidades Aut&oacute;nomas";
 answers[25] = choices[25][0];
 units[25] = "4, 7, 8, 9";
 comments[25] = "Id Pregunta: 786. Ley 40/2015";
 preguntaids[25] = 786


//  Id pregunta: 777 Año de creación de pregunta: 2016
 questions[26]= "27)  Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos:";
 choices[26]= new Array();
 choices[26][0] = "las unidades administrativas a las que se les atribuyan funciones que no tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo";
 choices[26][1] = "las unidades administrativas a las que se les atribuyan funciones que no tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo";
 choices[26][2] = "las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo";
 choices[26][3] = "las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo";
 answers[26] = choices[26][3];
 units[26] = "4, 7, 8, 9";
 comments[26] = "Id Pregunta: 777. Ley 40/2015";
 preguntaids[26] = 777


//  Id pregunta: 822 Año de creación de pregunta: 2016
 questions[27]= "28)  En las Comunidades Aut&oacute;nomas, en caso de ausencia, vacante o enfermedad del titular de la Delegaci&oacute;n del Gobierno, ser&aacute; suplido por:";
 choices[27]= new Array();
 choices[27][0] = "el Subdelegado del Gobierno que el Delegado designe y, en su defecto, al de la provincia en que tenga su sede";
 choices[27][1] = "el Subdelegado del Gobierno de la provincia en que tenga su sede y, en su defecto, al que el Delegado designe";
 choices[27][2] = "el Subdirector General que el Delegado designe";
 choices[27][3] = "el Secretario de Estado";
 answers[27] = choices[27][0];
 units[27] = "4, 7, 8, 9";
 comments[27] = "Id Pregunta: 822. Ley 40/2015";
 preguntaids[27] = 822


//  Id pregunta: 815 Año de creación de pregunta: 2016
 questions[28]= "29)  Existir&aacute; un Subdelegado del Gobierno, que estar&aacute; bajo la inmediata dependencia del Delegado del Gobierno:";
 choices[28]= new Array();
 choices[28][0] = "en cada Comunidad Aut&oacute;noma";
 choices[28][1] = "en cada una de las provincias de las Comunidades Aut&oacute;nomas pluriprovinciales";
 choices[28][2] = "en cada una de las provincias de las Comunidades Aut&oacute;nomas uniprovinciales";
 choices[28][3] = "en cada una de las localidades de las Comunidades Aut&oacute;nomas";
 answers[28] = choices[28][1];
 units[28] = "4, 7, 8, 9";
 comments[28] = "Id Pregunta: 815. Ley 40/2015";
 preguntaids[28] = 815


//  Id pregunta: 790 Año de creación de pregunta: 2016
 questions[29]= "30)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado son &oacute;rganos directivos:";
 choices[29]= new Array();
 choices[29][0] = "los Delegados del Gobierno en las Comunidades Aut&oacute;nomas";
 choices[29][1] = "los Subdelegados del Gobierno en las provincias";
 choices[29][2] = "los Subdelegados del Gobierno en las entidades locales";
 choices[29][3] = "a y b son correctas";
 answers[29] = choices[29][3];
 units[29] = "4, 7, 8, 9";
 comments[29] = "Id Pregunta: 790. Ley 40/2015";
 preguntaids[29] = 790


//  Id pregunta: 774 Año de creación de pregunta: 2016
 questions[30]= "31)  Las Administraciones P&uacute;blicas act&uacute;an para el cumplimiento de sus fines con:";
 choices[30]= new Array();
 choices[30][0] = "personalidad jur&iacute;dica propia";
 choices[30][1] = "personalidad jur&iacute;dica &uacute;nica";
 choices[30][2] = "personalidad jur&iacute;dica plena";
 choices[30][3] = "personalidad jur&iacute;dica f&iacute;sica";
 answers[30] = choices[30][1];
 units[30] = "4, 7, 8, 9";
 comments[30] = "Id Pregunta: 774. Ley 40/2015";
 preguntaids[30] = 774


//  Id pregunta: 524 Año de creación de pregunta: 2016
 questions[31]= "32)  A los efectos previstos en esta Ley, tendr&aacute;n capacidad de obrar ante las Administraciones P&uacute;blicas (se&ntilde;ala la incorrecta):";
 choices[31]= new Array();
 choices[31][0] = "las personas f&iacute;sicas que ostenten capacidad de obrar con arreglo a las normas civiles";
 choices[31][1] = "los menores de edad para el ejercicio y defensa de aquellos de sus derechos e intereses cuya actuaci&oacute;n no est&eacute; permitida por el ordenamiento jur&iacute;dico sin la asistencia de la persona que ejerza la patria potestad, tutela o curatela";
 choices[31][2] = "cuando la Ley as&iacute; lo declare expresamente, los grupos de afectados, las uniones y entidades sin personalidad jur&iacute;dica y los patrimonios independientes o aut&oacute;nomos";
 choices[31][3] = "las personas jur&iacute;dicas que ostenten capacidad de obrar con arreglo a las normas civiles";
 answers[31] = choices[31][1];
 units[31] = "7";
 comments[31] = "Id Pregunta: 524. LEY 39/2015";
 preguntaids[31] = 524


//  Id pregunta: 823 Año de creación de pregunta: 2016
 questions[32]= "33)  En las Comunidades Aut&oacute;nomas uniprovinciales en las que no exista Subdelegado la suplencia corresponder&aacute; a:";
 choices[32]= new Array();
 choices[32][0] = "el Secretario General";
 choices[32][1] = "el Subdirector General";
 choices[32][2] = "el Secretario de Estado";
 choices[32][3] = "ninguna es correcta";
 answers[32] = choices[32][0];
 units[32] = "4, 7, 8, 9";
 comments[32] = "Id Pregunta: 823. Ley 40/2015";
 preguntaids[32] = 823


//  Id pregunta: 779 Año de creación de pregunta: 2016
 questions[33]= "34)  La creaci&oacute;n de cualquier &oacute;rgano administrativo exigir&aacute;, al menos, el cumplimiento de (se&ntilde;ala la incorrecta):";
 choices[33]= new Array();
 choices[33][0] = "denominaci&oacute;n y establecimiento de sus recursos humanos necesarios";
 choices[33][1] = "determinaci&oacute;n de su forma de integraci&oacute;n en la Administraci&oacute;n P&uacute;blica de que se trate y su dependencia jer&aacute;rquica";
 choices[33][2] = "delimitaci&oacute;n de sus funciones y competencias";
 choices[33][3] = "dotaci&oacute;n de los cr&eacute;ditos necesarios para su puesta en marcha y funcionamiento";
 answers[33] = choices[33][0];
 units[33] = "4, 7, 8, 9";
 comments[33] = "Id Pregunta: 779. Ley 40/2015";
 preguntaids[33] = 779


//  Id pregunta: 541 Año de creación de pregunta: 2016
 questions[34]= "35)  Los asientos que se realicen en los registros electr&oacute;nicos generales y particulares de apoderamientos deber&aacute;n contener, al menos: (se&ntilde;ala la incorrecta)";
 choices[34]= new Array();
 choices[34][0] = "nombre y apellidos o la denominaci&oacute;n o raz&oacute;n social, documento nacional de identidad, n&uacute;mero de identificaci&oacute;n fiscal o documento equivalente del poderdante y del apoderado";
 choices[34][1] = "causas de anulaci&oacute;n del apoderamiento";
 choices[34][2] = "per&iacute;odo de tiempo por el cual se otorga el poder";
 choices[34][3] = "tipo de poder seg&uacute;n las facultades que otorgue";
 answers[34] = choices[34][1];
 units[34] = "7";
 comments[34] = "Id Pregunta: 541. LEY 39/2015";
 preguntaids[34] = 541


//  Id pregunta: 782 Año de creación de pregunta: 2016
 questions[35]= "36)  Sin perjuicio de la responsabilidad disciplinaria en que se pueda incurrir, el incumplimiento de las instrucciones u &oacute;rdenes de servicio:";
 choices[35]= new Array();
 choices[35][0] = "no afecta por s&iacute; solo a la validez de los actos dictados por los &oacute;rganos administrativos";
 choices[35][1] = "supone la invalidez de los actos dictados por los &oacute;rganos administrativos";
 choices[35][2] = "supone la nulidad de los actos dictados por los &oacute;rganos administrativos";
 choices[35][3] = "supone la anulabilidad de los actos dictados por los &oacute;rganos administrativos";
 answers[35] = choices[35][0];
 units[35] = "4, 7, 8, 9";
 comments[35] = "Id Pregunta: 782. Ley 40/2015";
 preguntaids[35] = 782


//  Id pregunta: 159 Año de creación de pregunta: 2016
 questions[36]= "37)  Seg&uacute;n la ley 39/2015, los actos administrativos, a menos que su naturaleza exija otra forma m&aacute;s adecuada de expresi&oacute;n y constancia, se producir&aacute;n: ";
 choices[36]= new Array();
 choices[36][0] = "verbalmente";
 choices[36][1] = "por escrito a trav&eacute;s de medios electr&oacute;nicos o no electr&oacute;nicos";
 choices[36][2] = "por escrito a trav&eacute;s de medios electr&oacute;nicos";
 choices[36][3] = "por escrito a trav&eacute;s de medios no electr&oacute;nicos";
 answers[36] = choices[36][2];
 units[36] = "7";
 comments[36] = "Id Pregunta: 159. Ley 39/2015, Art&iacute;culo 36";
 preguntaids[36] = 159


//  Id pregunta: 847 Año de creación de pregunta: 2016
 questions[37]= "38)  Se&ntilde;ale la respuesta falsa:";
 choices[37]= new Array();
 choices[37][0] = "Cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, especificando las condiciones, protocolos y criterios funcionales o t&eacute;cnicos necesarios para acceder a dichos datos con las m&aacute;ximas garant&iacute;as de seguridad, integridad y disponibilidad.";
 choices[37][1] = "La disponibilidad de tales datos estar&aacute; limitada estrictamente a aquellos que son requeridos a los interesados por las restantes Administraciones para la tramitaci&oacute;n y resoluci&oacute;n de los procedimientos y actuaciones de su competencia, de acuerdo con la normativa reguladora de los mismos.";
 choices[37][2] = "De conformidad con lo dispuesto en la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal y su normativa de desarrollo, cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones P&uacute;blicas a los datos relativos a los interesados que obren en su poder, siendo preceptiva la firma del convenio correspondiente.";
 choices[37][3] = "La Administraci&oacute;n General del Estado, las Administraciones Auton&oacute;micas y las Entidades Locales, adoptar&aacute;n las medidas necesarias e incorporar&aacute;n en sus respectivos &aacute;mbitos las tecnolog&iacute;as precisas para posibilitar la interconexi&oacute;n de sus redes";
 answers[37] = choices[37][2];
 units[37] = "4, 7, 8, 9";
 comments[37] = "Id Pregunta: 847. Ley 40/2015";
 preguntaids[37] = 847


//  Id pregunta: 771 Año de creación de pregunta: 2016
 questions[38]= "39)  Las Administraciones P&uacute;blicas deber&aacute;n respetar en su actuaci&oacute;n y relaciones los siguientes principios:";
 choices[38]= new Array();
 choices[38][0] = "simplicidad, claridad y proximidad a los ciudadanos";
 choices[38][1] = "participaci&oacute;n, objetividad y transparencia de la actuaci&oacute;n administrativa";
 choices[38][2] = "responsabilidad por la gesti&oacute;n p&uacute;blica";
 choices[38][3] = "todas son correctas";
 answers[38] = choices[38][3];
 units[38] = "4, 7, 8, 9";
 comments[38] = "Id Pregunta: 771. Ley 40/2015";
 preguntaids[38] = 771


//  Id pregunta: 812 Año de creación de pregunta: 2016
 questions[39]= "40)  Existir&aacute; una Delegaci&oacute;n del Gobierno en:";
 choices[39]= new Array();
 choices[39][0] = "la capital del pa&iacute;s";
 choices[39][1] = "cada una de las Comunidades Aut&oacute;nomas";
 choices[39][2] = "cada una de las provincias";
 choices[39][3] = "cada una de las embajadas espa&ntilde;olas";
 answers[39] = choices[39][1];
 units[39] = "4, 7, 8, 9";
 comments[39] = "Id Pregunta: 812. Ley 40/2015";
 preguntaids[39] = 812


//  Id pregunta: 764 Año de creación de pregunta: 2016
 questions[40]= "41)  La Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico, establece y regula (se&ntilde;ala la incorrecta):";
 choices[40]= new Array();
 choices[40][0] = "las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[40][1] = "los principios del sistema de responsabilidad de las Administraciones P&uacute;blicas y de la potestad sancionadora";
 choices[40][2] = "el procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas";
 choices[40][3] = "la organizaci&oacute;n y funcionamiento de la Administraci&oacute;n General del Estado y de su sector p&uacute;blico institucional para el desarrollo de sus actividades";
 answers[40] = choices[40][2];
 units[40] = "4, 7, 8, 9";
 comments[40] = "Id Pregunta: 764. Ley 40/2015";
 preguntaids[40] = 764


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
 preguntaids[41] = 518


//  Id pregunta: 532 Año de creación de pregunta: 2016
 questions[42]= "43)  La representaci&oacute;n podr&aacute; acreditarse:";
 choices[42]= new Array();
 choices[42][0] = "mediante cualquier t&iacute;tulo jur&iacute;dico";
 choices[42][1] = "mediante resoluci&oacute;n judicial especial";
 choices[42][2] = "&uacute;nicamente mediante poder notarial";
 choices[42][3] = "mediante cualquier medio v&aacute;lido en Derecho que deje constancia fidedigna de su existencia";
 answers[42] = choices[42][3];
 units[42] = "7";
 comments[42] = "Id Pregunta: 532. LEY 39/2015";
 preguntaids[42] = 532


//  Id pregunta: 669 Año de creación de pregunta: 2016
 questions[43]= "44)  Se&ntilde;ale la opci&oacute;n falsa respecto a la instrucci&oacute;n del procedimiento definida en la Ley 39/2015:";
 choices[43]= new Array();
 choices[43][0] = "Los interesados podr&aacute;n, en cualquier momento del procedimiento anterior al tr&aacute;mite de audiencia, aducir alegaciones y aportar documentos u otros elementos de juicio.";
 choices[43][1] = "El instructor del procedimiento s&oacute;lo podr&aacute; rechazar las pruebas propuestas por los interesados cuando sean manifiestamente improcedentes o innecesarias, mediante resoluci&oacute;n motivada.";
 choices[43][2] = "Salvo disposici&oacute;n expresa en contrario, los informes ser&aacute;n preceptivos y vinculantes.";
 choices[43][3] = "Se podr&aacute; prescindir del tr&aacute;mite de audiencia cuando no figuren en el procedimiento ni sean tenidos en cuenta en la resoluci&oacute;n otros hechos ni otras alegaciones y pruebas que las aducidas por el interesado.";
 answers[43] = choices[43][2];
 units[43] = "7";
 comments[43] = "Id Pregunta: 669. Cap&iacute;tulo IV, T&iacute;tulo IV de la Ley 39/2015";
 preguntaids[43] = 669


//  Id pregunta: 522 Año de creación de pregunta: 2016
 questions[44]= "45)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas se denomina:";
 choices[44]= new Array();
 choices[44][0] = "De los interesados en el procedimiento";
 choices[44][1] = "De la actividad de las Administraciones P&uacute;blicas";
 choices[44][2] = "Disposiciones generales";
 choices[44][3] = "De los actos administrativos";
 answers[44] = choices[44][2];
 units[44] = "7";
 comments[44] = "Id Pregunta: 522. LEY 39/2015";
 preguntaids[44] = 522


//  Id pregunta: 26 Año de creación de pregunta: 2016
 questions[45]= "46)  Usted, como directivo TIC de la AGE, decide crear un portal web, con una direcci&oacute;n electr&oacute;nica nueva, con el objetivo de informar al ciudadano sobre determinados aspectos relacionados con su unidad. &iquest;Cu&aacute;l de los siguientes tipos de certificado utilizar&iacute;a para identificar a los servidores de su portal informativo?";
 choices[45]= new Array();
 choices[45][0] = "Sello electr&oacute;nico";
 choices[45][1] = "Sede electr&oacute;nica";
 choices[45][2] = "Servidor seguro (SSL/TLS)";
 choices[45][3] = "Empleado p&uacute;blico";
 answers[45] = choices[45][2];
 units[45] = "7";
 comments[45] = "Id Pregunta: 26. AGE A1 2015";
 preguntaids[45] = 26


//  Id pregunta: 667 Año de creación de pregunta: 2016
 questions[46]= "47)  Seg&uacute;n la Ley 39/2015, un expediente administrativo contendr&aacute;:";
 choices[46]= new Array();
 choices[46][0] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios,la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento, y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[46][1] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios y un &iacute;ndice numerado de todos los documentos.";
 choices[46][2] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 choices[46][3] = "Los documentos, pruebas, dict&aacute;menes, informes, acuerdos, notificaciones y dem&aacute;s diligencias necesarios, un &iacute;ndice numerado de todos los documentos, la identificaci&oacute;n del personal al servicio de las Administraci&oacute;n P&uacute;blica bajo cuya responsabilidad se tramite el procedimiento  y una copia electr&oacute;nica certificada de la resoluci&oacute;n adoptada.";
 answers[46] = choices[46][2];
 units[46] = "7";
 comments[46] = "Id Pregunta: 667. Art&iacute;culo 70 de la Ley 39/2015";
 preguntaids[46] = 667


//  Id pregunta: 848 Año de creación de pregunta: 2016
 questions[47]= "48)  Se&ntilde;ale la respuesta correcta:";
 choices[47]= new Array();
 choices[47][0] = "La sede electr&oacute;nica es aquella direcci&oacute;n electr&oacute;nica, disponible para los ciudadanos a trav&eacute;s de redes de telecomunicaciones, cuya titularidad corresponde a una Administraci&oacute;n P&uacute;blica, o bien a una o varios organismos p&uacute;blicos o entidades de Derecho P&uacute;blico en el ejercicio de sus competencias.";
 choices[47][1] = "Se entiende por portal de internet el punto de acceso electr&oacute;nico cuya titularidad corresponda a una Administraci&oacute;n P&uacute;blica, organismo p&uacute;blico o entidad de Derecho P&uacute;blico que permite el acceso a trav&eacute;s de internet a la informaci&oacute;n publicada y, en su caso, a la sede electr&oacute;nica correspondiente.";
 choices[47][2] = "A y B son correctas.";
 choices[47][3] = "A y B son falsas.";
 answers[47] = choices[47][2];
 units[47] = "4, 7, 8, 9";
 comments[47] = "Id Pregunta: 848. Ley 40/2015";
 preguntaids[47] = 848


//  Id pregunta: 528 Año de creación de pregunta: 2016
 questions[48]= "49)  Los menores incapacitados, cuando la extensi&oacute;n de la incapacitaci&oacute;n afecte al ejercicio y defensa de los derechos o intereses de que se trate:";
 choices[48]= new Array();
 choices[48][0] = "tienen capacidad de obrar limitada";
 choices[48][1] = "pueden actuar sin la asistencia de la persona que ejerza la patria potestad, tutela o curatela";
 choices[48][2] = "no tienen capacidad de obrar";
 choices[48][3] = "ninguna es correcta";
 answers[48] = choices[48][2];
 units[48] = "7";
 comments[48] = "Id Pregunta: 528. LEY 39/2015";
 preguntaids[48] = 528


//  Id pregunta: 783 Año de creación de pregunta: 2016
 questions[49]= "50)  La Administraci&oacute;n consultiva podr&aacute; articularse:";
 choices[49]= new Array();
 choices[49][0] = "mediante &oacute;rganos espec&iacute;ficos dotados de autonom&iacute;a org&aacute;nica y funcional con respecto a la Administraci&oacute;n activa";
 choices[49][1] = "a trav&eacute;s de los servicios de la Administraci&oacute;n activa que prestan asistencia jur&iacute;dica";
 choices[49][2] = "a y b son correctas";
 choices[49][3] = "a y b son incorrectas";
 answers[49] = choices[49][2];
 units[49] = "4, 7, 8, 9";
 comments[49] = "Id Pregunta: 783. Ley 40/2015";
 preguntaids[49] = 783


//  Id pregunta: 27 Año de creación de pregunta: 2016
 questions[50]= "51)  La Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, NO estableci&oacute; como derecho de los ciudadanos, el derecho:";
 choices[50]= new Array();
 choices[50][0] = "A la igualdad en el acceso electr&oacute;nico a los servicios de las Administraciones P&uacute;blicas.";
 choices[50][1] = "A obtener copias electr&oacute;nicas de los documentos electr&oacute;nicos que formen parte de procedimientos en los que tengan la condici&oacute;n de interesado.";
 choices[50][2] = "A la calidad de los servicios p&uacute;blicos prestados por medios electr&oacute;nicos.";
 choices[50][3] = "A la preferencia en la tramitaci&oacute;n de los procedimientos presentados electr&oacute;nicamente.";
 answers[50] = choices[50][3];
 units[50] = "7";
 comments[50] = "Id Pregunta: 27. AGE A1 2015";
 preguntaids[50] = 27


//  Id pregunta: 668 Año de creación de pregunta: 2016
 questions[51]= "52)  Seg&uacute;n el art&iacute;culo 73 de la Ley 39/2015, el plazo para el el cumplimiento de tr&aacute;mites que deban ser cumplimentados por el interesado, es por defecto:";
 choices[51]= new Array();
 choices[51][0] = "10 d&iacute;as.";
 choices[51][1] = "15 d&iacute;as.";
 choices[51][2] = "1 mes.";
 choices[51][3] = "No se establece ning&uacute;n plazo por defecto.";
 answers[51] = choices[51][0];
 units[51] = "7";
 comments[51] = "Id Pregunta: 668. Art&iacute;culo 73 de la Ley 39/2015";
 preguntaids[51] = 668


//  Id pregunta: 826 Año de creación de pregunta: 2016
 questions[52]= "53)  Podr&aacute;n ordenarle que se abstengan de toda intervenci&oacute;n en el expediente al funcionario que se encuentre en causa de abstenci&oacute;n...";
 choices[52]= new Array();
 choices[52][0] = "Los &oacute;rganos jer&aacute;rquicamente superiores";
 choices[52][1] = "S&oacute;lo los &oacute;rganos inmediatamente superiores jer&aacute;rquicos";
 choices[52][2] = "Los interesados en el procedimiento";
 choices[52][3] = "Las alternativas b) y c) son correctas";
 answers[52] = choices[52][1];
 units[52] = "4, 7, 8, 9";
 comments[52] = "Id Pregunta: 826. Ley 40/2015";
 preguntaids[52] = 826


//  Id pregunta: 789 Año de creación de pregunta: 2016
 questions[53]= "54)  En la organizaci&oacute;n central no son &oacute;rganos directivos:";
 choices[53]= new Array();
 choices[53][0] = "los Subsecretarios y Secretarios generales";
 choices[53][1] = "los Secretarios generales t&eacute;cnicos y Directores generales";
 choices[53][2] = "los Secretarios de Estado";
 choices[53][3] = "los Subdirectores generales";
 answers[53] = choices[53][2];
 units[53] = "4, 7, 8, 9";
 comments[53] = "Id Pregunta: 789. Ley 40/2015";
 preguntaids[53] = 789


//  Id pregunta: 512 Año de creación de pregunta: 2016
 questions[54]= "55)  La presente Ley tiene por objeto regular: (se&ntilde;ala la incorrecta)";
 choices[54]= new Array();
 choices[54][0] = "Los requisitos de validez y eficacia de los actos administrativos";
 choices[54][1] = "El procedimiento administrativo com&uacute;n a todas las Administraciones P&uacute;blicas, incluyendo el sancionador y el de reclamaci&oacute;n de responsabilidad de las Administraciones P&uacute;blicas";
 choices[54][2] = "Las bases del r&eacute;gimen jur&iacute;dico de las Administraciones P&uacute;blicas";
 choices[54][3] = "Los principios a los que se ha de ajustar el ejercicio de la iniciativa legislativa y la potestad reglamentaria";
 answers[54] = choices[54][2];
 units[54] = "7";
 comments[54] = "Id Pregunta: 512. LEY 39/2015";
 preguntaids[54] = 512


//  Id pregunta: 521 Año de creación de pregunta: 2016
 questions[55]= "56)  El t&iacute;tulo preliminar de la Ley 39/2015, de 1 de octubre, del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas tiene:";
 choices[55]= new Array();
 choices[55][0] = "un art&iacute;culo";
 choices[55][1] = "dos art&iacute;culos";
 choices[55][2] = "tres art&iacute;culos";
 choices[55][3] = "cuatro art&iacute;culos";
 answers[55] = choices[55][1];
 units[55] = "7";
 comments[55] = "Id Pregunta: 521. LEY 39/2015";
 preguntaids[55] = 521


//  Id pregunta: 837 Año de creación de pregunta: 2016
 questions[56]= "57)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[56]= new Array();
 choices[56][0] = "Los &oacute;rganos competentes podr&aacute;n avocar para s&iacute; el conocimiento de uno o varios asuntos cuya resoluci&oacute;n corresponda ordinariamente o por delegaci&oacute;n a sus &oacute;rganos administrativos dependientes, cuando circunstancias de &iacute;ndole t&eacute;cnica, econ&oacute;mica, social, jur&iacute;dica o territorial lo hagan conveniente.";
 choices[56][1] = "En los supuestos de delegaci&oacute;n de competencias en &oacute;rganos no dependientes jer&aacute;rquicamente, el conocimiento de un asunto podr&aacute; ser avocado &uacute;nicamente por el &oacute;rgano delegante.";
 choices[56][2] = "En todo caso, la avocaci&oacute;n se realizar&aacute; mediante acuerdo motivado que deber&aacute; ser notificado a los interesados en el procedimiento, si los hubiere, con posterioridad a la resoluci&oacute;n final que se dicte.";
 choices[56][3] = "Contra el acuerdo de avocaci&oacute;n no cabr&aacute; recurso, aunque podr&aacute; impugnarse en el que, en su caso, se interponga contra la resoluci&oacute;n del procedimiento.";
 answers[56] = choices[56][2];
 units[56] = "4, 7, 8, 9";
 comments[56] = "Id Pregunta: 837. Ley 40/2015";
 preguntaids[56] = 837


//  Id pregunta: 158 Año de creación de pregunta: 2016
 questions[57]= "58)  Seg&uacute;n la ley 39/2015, cuando la notificaci&oacute;n por medios electr&oacute;nicos sea de car&aacute;cter obligatorio, o haya sido expresamente elegida por el interesado:";
 choices[57]= new Array();
 choices[57][0] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[57][1] = "se entender&aacute; rechazada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[57][2] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as h&aacute;biles desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 choices[57][3] = "se entender&aacute; efectuada cuando hayan transcurrido 10 d&iacute;as naturales desde la puesta a disposici&oacute;n de la notificaci&oacute;n sin que se acceda a su contenido";
 answers[57] = choices[57][1];
 units[57] = "7";
 comments[57] = "Id Pregunta: 158. Ley 39/2015, Art&iacute;culo 43";
 preguntaids[57] = 158


//  Id pregunta: 827 Año de creación de pregunta: 2016
 questions[58]= "59)  La actuaci&oacute;n de autoridades y personal al servicio de las Administraciones P&uacute;blicas en los que concurran motivos de abstenci&oacute;n ...";
 choices[58]= new Array();
 choices[58][0] = "No implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido pero dar&aacute; lugar a la responsabilidad que proceda";
 choices[58][1] = "Dar&aacute; lugar a la responsabilidad que proceda pero no implicar&aacute; en ning&uacute;n caso la invalidez de los actos en que hayan intervenido";
 choices[58][2] = "implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido";
 choices[58][3] = "implicar&aacute;, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido dando lugar a la responsabilidad que proceda";
 answers[58] = choices[58][1];
 units[58] = "4, 7, 8, 9";
 comments[58] = "Id Pregunta: 827. Ley 40/2015";
 preguntaids[58] = 827


//  Id pregunta: 833 Año de creación de pregunta: 2016
 questions[59]= "60)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Marque la respuesta correcta.";
 choices[59]= new Array();
 choices[59][0] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter preceptivo.";
 choices[59][1] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter facultativo.";
 choices[59][2] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter potestativo.";
 choices[59][3] = "Tendr&aacute;n la consideraci&oacute;n de &oacute;rganos administrativos las unidades administrativas a las que se les atribuyan funciones que tengan efectos jur&iacute;dicos frente a terceros, o cuya actuaci&oacute;n tenga car&aacute;cter oneroso.";
 answers[59] = choices[59][0];
 units[59] = "4, 7, 8, 9";
 comments[59] = "Id Pregunta: 833. Ley 40/2015";
 preguntaids[59] = 833


//  Id pregunta: 665 Año de creación de pregunta: 2016
 questions[60]= "61)  Seg&uacute;n la Ley 39/2015, la iniciaci&oacute;n de un procedimiento administrativo puede realizarse:";
 choices[60]= new Array();
 choices[60][0] = "De oficio.";
 choices[60][1] = "A solicitud del interesado.";
 choices[60][2] = "De oficio o a solicitud del interesado.";
 choices[60][3] = "Por la Administraci&oacute;n P&uacute;blica responsable.";
 answers[60] = choices[60][2];
 units[60] = "7";
 comments[60] = "Id Pregunta: 665. Art&iacute;culo 54 de la Ley 39/2015";
 preguntaids[60] = 665


//  Id pregunta: 150 Año de creación de pregunta: 2016
 questions[61]= "62)  Seg&uacute;n la ley 39/2015, el medio elegido por la persona para comunicarse con las Administraciones P&uacute;blicas:";
 choices[61]= new Array();
 choices[61][0] = "&uacute;nicamente podr&aacute; ser modificado cuando de no hacerlo se corra riesgo de no alcanzarse las pretensiones del interesado ";
 choices[61][1] = "no podr&aacute; ser modificado con posterioridad al tr&aacute;mite de audiencia";
 choices[61][2] = "podr&aacute; ser modificado en cualquier momento por la persona";
 choices[61][3] = "no podr&aacute; ser modificado de manera unilateral por el interesado";
 answers[61] = choices[61][2];
 units[61] = "7";
 comments[61] = "Id Pregunta: 150. Ley 39/2015, Art&iacute;culo 14";
 preguntaids[61] = 150


//  Id pregunta: 539 Año de creación de pregunta: 2016
 questions[62]= "63)  Respecto a los registros electr&oacute;nicos de apoderamientos no es correcto:";
 choices[62]= new Array();
 choices[62][0] = "en el &aacute;mbito estatal, este registro ser&aacute; el Registro Electr&oacute;nico de Apoderamientos de la Administraci&oacute;n General del Estado";
 choices[62][1] = "en ellos no constar&aacute; el bastanteo realizado del poder";
 choices[62][2] = "los registros generales de apoderamientos no impedir&aacute;n la existencia de registros particulares en cada Organismo";
 choices[62][3] = "cada Organismo podr&aacute; disponer de su propio registro electr&oacute;nico de apoderamientos";
 answers[62] = choices[62][1];
 units[62] = "7";
 comments[62] = "Id Pregunta: 539. LEY 39/2015";
 preguntaids[62] = 539


//  Id pregunta: 843 Año de creación de pregunta: 2016
 questions[63]= "64)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Se&ntilde;ale la respuesta incorrecta.";
 choices[63]= new Array();
 choices[63][0] = "De cada sesi&oacute;n que celebre el &oacute;rgano colegiado se levantar&aacute; acta por el Secretario, que especificar&aacute; necesariamente los asistentes, el orden del d&iacute;a de la reuni&oacute;n, las circunstancias del lugar y tiempo en que se ha celebrado, los puntos principales de las deliberaciones, as&iacute; como el contenido de los acuerdos adoptados.";
 choices[63][1] = "Podr&aacute;n grabarse las sesiones que celebre el &oacute;rgano colegiado. El fichero resultante de la grabaci&oacute;n, junto con la certificaci&oacute;n expedida por el Secretario de la autenticidad e integridad del mismo, y cuantos documentos en soporte electr&oacute;nico se utilizasen como documentos de la sesi&oacute;n, podr&aacute;n acompa&ntilde;ar al acta de las sesiones, sin necesidad de hacer constar en ella los puntos principales de las deliberaciones.";
 choices[63][2] = "El acta de cada sesi&oacute;n podr&aacute; aprobarse en la misma reuni&oacute;n o en una reuni&oacute;n posterior. El Secretario elaborar&aacute; el acta con el visto bueno del Presidente y lo remitir&aacute; a trav&eacute;s de medios electr&oacute;nicos, a los miembros del &oacute;rgano colegiado, quienes podr&aacute;n manifestar por los mismos medios su conformidad o reparos al texto, a efectos de su aprobaci&oacute;n, consider&aacute;ndose, en caso afirmativo, aprobada en la misma reuni&oacute;n.";
 choices[63][3] = "Cuando se hubiese optado por la grabaci&oacute;n de las sesiones celebradas o por la utilizaci&oacute;n de documentos en soporte electr&oacute;nico, deber&aacute;n conservarse de forma que se garantice la integridad y autenticidad de los ficheros electr&oacute;nicos correspondientes y el acceso a los mismos por parte de los miembros del &oacute;rgano colegiado.";
 answers[63] = choices[63][2];
 units[63] = "4, 7, 8, 9";
 comments[63] = "Id Pregunta: 843. Ley 40/2015";
 preguntaids[63] = 843


//  Id pregunta: 818 Año de creación de pregunta: 2016
 questions[64]= "65)  Los Directores Insulares de la Administraci&oacute;n General del Estado (se&ntilde;ala la incorrecta):";
 choices[64]= new Array();
 choices[64][0] = "ser&aacute;n nombrados por el Delegado del Gobierno mediante el procedimiento de concurso-oposici&oacute;n";
 choices[64][1] = "ser&aacute;n nombrados entre funcionarios de carrera del Estado, de las Comunidades Aut&oacute;nomas o de las Entidades Locales, pertenecientes a Cuerpos o Escalas clasificados como Subgrupo A1";
 choices[64][2] = "dependen jer&aacute;rquicamente del Delegado del Gobierno en la Comunidad Aut&oacute;noma o del Subdelegado del Gobierno en la provincia, cuando este cargo exista";
 choices[64][3] = "ejercen, en su &aacute;mbito territorial, las competencias atribuidas por esta Ley a los Subdelegados del Gobierno en las provincias";
 answers[64] = choices[64][0];
 units[64] = "4, 7, 8, 9";
 comments[64] = "Id Pregunta: 818. Ley 40/2015";
 preguntaids[64] = 818


//  Id pregunta: 149 Año de creación de pregunta: 2016
 questions[65]= "66)  Seg&uacute;n establece la Ley 39/2015, las Administraciones P&uacute;blicas har&aacute;n p&uacute;blico un Plan Normativo que:";
 choices[65]= new Array();
 choices[65][0] = "Contendr&aacute; las iniciativas legales y reglamentarias que hayan sido aprobadas en el a&ntilde;o en curso y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[65][1] = "Contendr&aacute; exclusivamente las iniciativas legales que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[65][2] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Portal de la Transparencia de la Administraci&oacute;n P&uacute;blica correspondiente";
 choices[65][3] = "Contendr&aacute; las iniciativas legales o reglamentarias que vayan a ser elevadas para su aprobaci&oacute;n en el a&ntilde;o siguiente y se publicar&aacute; en el Bolet&iacute;n Oficial de la Administraci&oacute;n P&uacute;blica correspondiente";
 answers[65] = choices[65][2];
 units[65] = "7";
 comments[65] = "Id Pregunta: 149. Ley 39/2015, Art&iacute;culo 132";
 preguntaids[65] = 149


//  Id pregunta: 766 Año de creación de pregunta: 2016
 questions[66]= "67)  El sector p&uacute;blico institucional se integra por:";
 choices[66]= new Array();
 choices[66][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[66][1] = "las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas";
 choices[66][2] = "las Universidades p&uacute;blicas";
 choices[66][3] = "todas son correctas";
 answers[66] = choices[66][3];
 units[66] = "4, 7, 8, 9";
 comments[66] = "Id Pregunta: 766. Ley 40/2015";
 preguntaids[66] = 766


//  Id pregunta: 805 Año de creación de pregunta: 2016
 questions[67]= "68)  Los Secretarios generales t&eacute;cnicos tienen a todos los efectos la categor&iacute;a de:";
 choices[67]= new Array();
 choices[67][0] = "Director General";
 choices[67][1] = "Secretario general";
 choices[67][2] = "Subdirector general";
 choices[67][3] = "Subsecretario";
 answers[67] = choices[67][0];
 units[67] = "4, 7, 8, 9";
 comments[67] = "Id Pregunta: 805. Ley 40/2015";
 preguntaids[67] = 805


