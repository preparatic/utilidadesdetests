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

//  Id pregunta: 538 Año de creación de pregunta: 2016
 questions[0]= "1)  En el registro electr&oacute;nico general de apoderamientos, deber&aacute;n inscribirse, al menos, los de car&aacute;cter general otorgados por quien ostente la condici&oacute;n de interesado en un procedimiento administrativo a favor de representante:";
 choices[0]= new Array();
 choices[0][0] = "apud acta";
 choices[0][1] = "presencialmente";
 choices[0][2] = "electr&oacute;nicamente";
 choices[0][3] = "todas son correctas";
 answers[0] = choices[0][3];
 units[0] = "7";
 comments[0] = "Id Pregunta: 538. LEY 39/2015";


//  Id pregunta: 717 Año de creación de pregunta: 2016
 questions[1]= "2)  Respecto a SonarQube, se&ntilde;ale la FALSA:";
 choices[1]= new Array();
 choices[1][0] = "Sirve para evaluar aspectos como la complejidad ciclom&aacute;tica del c&oacute;digo.";
 choices[1][1] = "Anteriormente se denominaba Sonar.";
 choices[1][2] = "Permite disponer de una matriz de dependencia entre objetos.";
 choices[1][3] = "Integra herramientas de medici&oacute;n de la calidad de c&oacute;digo como CPD, findbugs, PMD, checkstyle.";
 answers[1] = choices[1][2];
 units[1] = "92";
 comments[1] = "Id Pregunta: 717. INTEGRACION CONTINUA";


//  Id pregunta: 627 Año de creación de pregunta: 2016
 questions[2]= "3)  En UML &iquest;qu&eacute; es una m&aacute;quina de estados?";
 choices[2]= new Array();
 choices[2][0] = "Es un modelo computacional representado por grafos, en los que los estados son los v&eacute;rtices.";
 choices[2][1] = "Es un dispositivo que puede ser programado para cumplir determinadas tareas de control en sistema autom&aacute;ticos.";
 choices[2][2] = "Es un comportamiento que especifica las secuencias de estados por las que pasa un objeto a lo largo de su vida en respuesta a eventos, junto con sus respuestas a esos eventos.";
 choices[2][3] = "Es un sistema l&oacute;gico que posee una entrada, un procesador intermedio y una salida resultado de la aplicaci&oacute;n del procesamiento sobre la entrada.";
 answers[2] = choices[2][2];
 units[2] = "89";
 comments[2] = "Id Pregunta: 627. Junta de Extremadura A1 2015";


//  Id pregunta: 351 Año de creación de pregunta: 2016
 questions[3]= "4)  La sede del Parlamento Europeo se encuentra en:";
 choices[3]= new Array();
 choices[3][0] = "En Estrasburgo, aunque celebra algunas sesiones en Bruselas.";
 choices[3][1] = "En Estrasburgo, aunque celebra algunas sesiones en Bruselas y la Secretar&iacute;a del Parlamento tiene su sede en Luxemburgo.";
 choices[3][2] = "La Secretar&iacute;a del Parlamento tiene su sede en Luxemburgo.";
 choices[3][3] = "Celebra todas sus sesiones en Bruselas.";
 answers[3] = choices[3][1];
 units[3] = "5";
 comments[3] = "Id Pregunta: 351. UNION EUROPEA";


//  Id pregunta: 125 Año de creación de pregunta: 2016
 questions[4]= "5)  El derecho de acceso a la informaci&oacute;n p&uacute;blica seg&uacute;n la ley 19/20013  podr&aacute; ser limitado cuando acceder a la informaci&oacute;n suponga un perjuicio, se&ntilde;ale cual NO est&aacute; contemplado en dicha ley:";
 choices[4]= new Array();
 choices[4][0] = "Los intereses de las administraciones que cuenten con su propio Consejo de Transparencia u &oacute;rgano equivalente.";
 choices[4][1] = "La garant&iacute;a de la confidencialidad o el secreto requerido en procesos de toma de decisi&oacute;n.";
 choices[4][2] = "La protecci&oacute;n del medio ambiente.";
 choices[4][3] = "Los intereses econ&oacute;micos y comerciales.";
 answers[4] = choices[4][0];
 units[4] = "22";
 comments[4] = "Id Pregunta: 125. ";


//  Id pregunta: 530 Año de creación de pregunta: 2016
 questions[5]= "6)  Podr&aacute;n actuar en representaci&oacute;n de otras ante las Administraciones P&uacute;blicas:";
 choices[5]= new Array();
 choices[5][0] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[5][1] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, aunque no est&eacute; previsto en sus Estatutos";
 choices[5][2] = "las personas f&iacute;sicas con o sin capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 choices[5][3] = "las personas f&iacute;sicas con capacidad de obrar y las personas jur&iacute;dicas, siempre que ello est&eacute; previsto en sus Estatutos";
 answers[5] = choices[5][3];
 units[5] = "7";
 comments[5] = "Id Pregunta: 530. LEY 39/2015";


//  Id pregunta: 150 Año de creación de pregunta: 2016
 questions[6]= "7)  Seg&uacute;n la ley 39/2015, el medio elegido por la persona para comunicarse con las Administraciones P&uacute;blicas:";
 choices[6]= new Array();
 choices[6][0] = "&uacute;nicamente podr&aacute; ser modificado cuando de no hacerlo se corra riesgo de no alcanzarse las pretensiones del interesado ";
 choices[6][1] = "no podr&aacute; ser modificado con posterioridad al tr&aacute;mite de audiencia";
 choices[6][2] = "podr&aacute; ser modificado en cualquier momento por la persona";
 choices[6][3] = "no podr&aacute; ser modificado de manera unilateral por el interesado";
 answers[6] = choices[6][2];
 units[6] = "7";
 comments[6] = "Id Pregunta: 150. Ley 39/2015, Art&iacute;culo 14";


//  Id pregunta: 121 Año de creación de pregunta: 2016
 questions[7]= "8)  Se&ntilde;ale la respuesta incorrecta respecto al Consejo de Transparencia y Buen Gobierno";
 choices[7]= new Array();
 choices[7][0] = "Las resoluciones del Consejo se publican en el Portal de la Transparencia";
 choices[7][1] = "Las resoluciones del Consejo se publican en la p&aacute;gina web institucional del organismo";
 choices[7][2] = "La memoria anual del Consejo ser&aacute; publicada integramente en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 choices[7][3] = "Un resumen de la memoria anual del Consejo ser&aacute; publicado en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;";
 answers[7] = choices[7][2];
 units[7] = "22";
 comments[7] = "Id Pregunta: 121. ";


//  Id pregunta: 771 Año de creación de pregunta: 2016
 questions[8]= "9)  Las Administraciones P&uacute;blicas deber&aacute;n respetar en su actuaci&oacute;n y relaciones los siguientes principios:";
 choices[8]= new Array();
 choices[8][0] = "simplicidad, claridad y proximidad a los ciudadanos";
 choices[8][1] = "participaci&oacute;n, objetividad y transparencia de la actuaci&oacute;n administrativa";
 choices[8][2] = "responsabilidad por la gesti&oacute;n p&uacute;blica";
 choices[8][3] = "todas son correctas";
 answers[8] = choices[8][3];
 units[8] = "4, 7, 8, 9";
 comments[8] = "Id Pregunta: 771. Ley 40/2015";


//  Id pregunta: 853 Año de creación de pregunta: 2016
 questions[9]= "10)  Si disponemos de 8 discos SAS de 1TB netos configurados en RAID1, &iquest;de qu&eacute; capacidad neta se dispone en RAID1 en el sistema de almacenamiento?";
 choices[9]= new Array();
 choices[9][0] = "6 TB.";
 choices[9][1] = "8 TB.";
 choices[9][2] = "7 TB.";
 choices[9][3] = "4 TB.";
 answers[9] = choices[9][3];
 units[9] = "53";
 comments[9] = "Id Pregunta: 853. Xunta de Galicia 2015";


//  Id pregunta: 403 Año de creación de pregunta: 2016
 questions[10]= "11)  El plan estrat&eacute;gico de Igualdad de Oportunidades incluir&aacute;:";
 choices[10]= new Array();
 choices[10][0] = "Medidas de igualdad.";
 choices[10][1] = "Objetivos de igualdad.";
 choices[10][2] = "Ambas son correctas.";
 choices[10][3] = "A y B son incorrectas.";
 answers[10] = choices[10][2];
 units[10] = "14";
 comments[10] = "Id Pregunta: 403. POLITICAS DE IGUALDAD";


//  Id pregunta: 178 Año de creación de pregunta: 2016
 questions[11]= "12)  &iquest;Qu&eacute; es lo que caracteriza un decreto-ley?";
 choices[11]= new Array();
 choices[11][0] = "No puede afectar al ordenamiento de las instituciones b&aacute;sicas del Estado.";
 choices[11][1] = "Es dictado por las Cortes Generales en casos de urgente necesidad.";
 choices[11][2] = "Es dictado por el Presidente del Gobierno en casos de extraordinaria y urgente necesidad.";
 choices[11][3] = "Es dictado por el Gobierno por encargo de las Cortes Generales.";
 answers[11] = choices[11][0];
 units[11] = "1";
 comments[11] = "Id Pregunta: 178. CONSTITUCION1978";


//  Id pregunta: 83 Año de creación de pregunta: 2016
 questions[12]= "13)  Seg&uacute;n WCAG 2.0, &iquest;con qu&eacute; principio est&aacute; relacionada la pauta &ldquo;Hacer que las p&aacute;ginas web aparezcan y operen de forma predecible&rdquo;?";
 choices[12]= new Array();
 choices[12][0] = "Perceptible";
 choices[12][1] = "Operable";
 choices[12][2] = "Comprensible";
 choices[12][3] = "Robusto";
 answers[12] = choices[12][2];
 units[12] = "42";
 comments[12] = "Id Pregunta: 83. AGE A1 2015";


//  Id pregunta: 576 Año de creación de pregunta: 2016
 questions[13]= "14)  Son herramientas espec&iacute;ficas de control de versiones de software:";
 choices[13]= new Array();
 choices[13][0] = "Mercurial, Git y Apache Subversion.";
 choices[13][1] = "Gimp, Mercurial y Git.";
 choices[13][2] = "RedMine, Planner y OpenProj.";
 choices[13][3] = "Cassandra, Git y REDIS.";
 answers[13] = choices[13][0];
 units[13] = "92";
 comments[13] = "Id Pregunta: 576. Tema 92. TAI 2016.";


//  Id pregunta: 320 Año de creación de pregunta: 2016
 questions[14]= "15)  Indique a qui&eacute;n corresponde la funci&oacute;n de velar por que se apliquen los Tratados y las medidas adoptadas por las Instituciones en virtud de &eacute;stos:";
 choices[14]= new Array();
 choices[14][0] = "Al Consejo Europeo.";
 choices[14][1] = "Al Consejo de la Uni&oacute;n Europea.";
 choices[14][2] = "A la Comisi&oacute;n Europea.";
 choices[14][3] = "Al Parlamento Europeo.";
 answers[14] = choices[14][2];
 units[14] = "5";
 comments[14] = "Id Pregunta: 320. UNION EUROPEA";


//  Id pregunta: 595 Año de creación de pregunta: 2016
 questions[15]= "16)  A nivel departamental, &iquest;qui&eacute;n es el responsable de la coordinaci&oacute;n interna para llevar a cabo la transformaci&oacute;n digital?";
 choices[15]= new Array();
 choices[15][0] = "Las CMADs (Comisi&oacute;n Ministerial de Administraci&oacute;n Digital)";
 choices[15][1] = "La CETIC";
 choices[15][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[15][3] = "El MHFP";
 answers[15] = choices[15][0];
 units[15] = "19";
 comments[15] = "Id Pregunta: 595. Estrategia TIC";


//  Id pregunta: 84 Año de creación de pregunta: 2016
 questions[16]= "17)  En el marco europeo de interoperabilidad de sistemas de informaci&oacute;n, &iquest;qu&eacute; programa de la Uni&oacute;n Europea ha estado en vigor entre 2010 y 2015?";
 choices[16]= new Array();
 choices[16][0] = "Interchange of Data between Administrations (IDA)";
 choices[16][1] = "Interoperability Solutions for European Public Administrations (ISA)";
 choices[16][2] = "Interoperable Delivery of Pan-European eGovernment Services to Public Administrations, Businesses and Citizens (IDABC)";
 choices[16][3] = "Interoperability Electronic European Solution (IEES)";
 answers[16] = choices[16][1];
 units[16] = "43";
 comments[16] = "Id Pregunta: 84. AGE A1 2015";


//  Id pregunta: 787 Año de creación de pregunta: 2016
 questions[17]= "18)  La Administraci&oacute;n General del Estado comprende (se&ntilde;ala la incorrecta):";
 choices[17]= new Array();
 choices[17][0] = "la Organizaci&oacute;n Central, que integra los Ministerios y los servicios comunes";
 choices[17][1] = "la Organizaci&oacute;n Territorial";
 choices[17][2] = "la Organizaci&oacute;n sectorial";
 choices[17][3] = "la Administraci&oacute;n General del Estado en el exterior";
 answers[17] = choices[17][2];
 units[17] = "4, 7, 8, 9";
 comments[17] = "Id Pregunta: 787. Ley 40/2015";


//  Id pregunta: 460 Año de creación de pregunta: 2016
 questions[18]= "19)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el Intervenci&oacute;n General de la Administraci&oacute;n del Estado ejercer&aacute; sus funciones de control conforme a los principios de:";
 choices[18]= new Array();
 choices[18][0] = "a) Autonom&iacute;a, ejercicio desconcentrado y jerarqu&iacute;a externa.";
 choices[18][1] = "b) Eficacia, ejercicio desconcentrado y jerarqu&iacute;a externa.";
 choices[18][2] = "c) Autonom&iacute;a, eficacia y ejercicio desconcentrado.";
 choices[18][3] = "d) Autonom&iacute;a, ejercicio desconcentrado y jerarqu&iacute;a interna.";
 answers[18] = choices[18][3];
 units[18] = "10";
 comments[18] = "Id Pregunta: 460. PRESUPUESTOS GENERALES";


//  Id pregunta: 603 Año de creación de pregunta: 2016
 questions[19]= "20)  Los criptosistemas pueden clasificarse en:";
 choices[19]= new Array();
 choices[19][0] = "Concretos, Estables e Inestables.";
 choices[19][1] = "Sim&eacute;tricos, Paralelos y Referenciales.";
 choices[19][2] = "Asim&eacute;tricos, Referenciales y Concretos.";
 choices[19][3] = "Sim&eacute;tricos, Asim&eacute;tricos e H&iacute;bridos.";
 answers[19] = choices[19][3];
 units[19] = "76";
 comments[19] = "Id Pregunta: 603. Junta de Extremadura A1 2015";


//  Id pregunta: 784 Año de creación de pregunta: 2016
 questions[20]= "21)  La Administraci&oacute;n General del Estado act&uacute;a y se organiza de acuerdo con los principios establecidos en el art&iacute;culo 3, as&iacute; como los de:";
 choices[20]= new Array();
 choices[20][0] = "desconcentraci&oacute;n funcional y descentralizaci&oacute;n funcional y territorial";
 choices[20][1] = "descentralizaci&oacute;n territorial y desconcentraci&oacute;n funcional y territorial";
 choices[20][2] = "descentralizaci&oacute;n funcional y desconcentraci&oacute;n funcional y territorial";
 choices[20][3] = "desconcentraci&oacute;n territorial y descentralizaci&oacute;n funcional y territorial";
 answers[20] = choices[20][2];
 units[20] = "4, 7, 8, 9";
 comments[20] = "Id Pregunta: 784. Ley 40/2015";


//  Id pregunta: 113 Año de creación de pregunta: 2016
 questions[21]= "22)  &iquest;Cu&aacute;l de las siguientes instituciones NO proporciona estad&iacute;sticas oficiales propias sobre el mercado de trabajo en Espa&ntilde;a?";
 choices[21]= new Array();
 choices[21][0] = "La Seguridad Social";
 choices[21][1] = "El Instituto Nacional de Estad&iacute;stica";
 choices[21][2] = "El Servicio de Empleo P&uacute;blico Estatal";
 choices[21][3] = "El Banco de Espa&ntilde;a";
 answers[21] = choices[21][3];
 units[21] = "15";
 comments[21] = "Id Pregunta: 113. ";


//  Id pregunta: 844 Año de creación de pregunta: 2016
 questions[22]= "23)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Los &oacute;rganos colegiados de la Administraci&oacute;n General del Estado y de sus Organismos p&uacute;blicos, por su composici&oacute;n, se clasifican en:";
 choices[22]= new Array();
 choices[22][0] = "&Oacute;rganos colegiados interministeriales, si sus miembros proceden de diferentes Ministerios.";
 choices[22][1] = "&Oacute;rganos colegiados ministeriales, si sus componentes proceden de los &oacute;rganos del mismo Ministerio.";
 choices[22][2] = "A y B son correctas.";
 choices[22][3] = "A y B son incorrectas.";
 answers[22] = choices[22][2];
 units[22] = "4, 7, 8, 9";
 comments[22] = "Id Pregunta: 844. Ley 40/2015";


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


//  Id pregunta: 331 Año de creación de pregunta: 2016
 questions[24]= "25)  Tras el tratado de Niza, &iquest;cu&aacute;ntos eurodiputados son elegidos en el Estado espa&ntilde;ol?:";
 choices[24]= new Array();
 choices[24][0] = "90";
 choices[24][1] = "50";
 choices[24][2] = "64";
 choices[24][3] = "60";
 answers[24] = choices[24][1];
 units[24] = "5";
 comments[24] = "Id Pregunta: 331. UNION EUROPEA";


//  Id pregunta: 544 Año de creación de pregunta: 2016
 questions[25]= "26)  &iquest;Cu&aacute;l es el &oacute;rgano de la Comisi&oacute;n Europea encargado de la gobernanza TIC cuya misi&oacute;n es garantizar que la Comisi&oacute;n haga un uso eficaz de las tecnolog&iacute;as de la informaci&oacute;n y la comunicaci&oacute;n para el logro de sus objetivos organizativos y pol&iacute;ticos?";
 choices[25]= new Array();
 choices[25][0] = "La Direcci&oacute;n General de Inform&aacute;tica (DIGIT)";
 choices[25][1] = "Oficina del Organismo de Reguladores Europeos de las Comunicaciones Electr&oacute;nicas (ORECE)";
 choices[25][2] = "Agencia de Seguridad de las Redes y de la Informaci&oacute;n de la Uni&oacute;n Europea (ENISA)";
 choices[25][3] = "Instituto Europeo de Innovaci&oacute;n y Tecnolog&iacute;a (EIT)";
 answers[25] = choices[25][0];
 units[25] = "26";
 comments[25] = "Id Pregunta: 544. Gobernanza TIC";


//  Id pregunta: 602 Año de creación de pregunta: 2016
 questions[26]= "27)  Los est&aacute;ndares de la norma IEEE 802.11 se ubican en las capas del modelo OSI:";
 choices[26]= new Array();
 choices[26][0] = "La capa de transmisi&oacute;n y la capa de presentaci&oacute;n.";
 choices[26][1] = "La capa de aplicaci&oacute;n y la capa de gesti&oacute;n.";
 choices[26][2] = "La capa f&iacute;sica y la cada de enlace de datos.";
 choices[26][3] = "La capa de red y la capa de tr&aacute;fico.";
 answers[26] = choices[26][2];
 units[26] = "108";
 comments[26] = "Id Pregunta: 602. Junta de Extremadura A1 2015";


//  Id pregunta: 490 Año de creación de pregunta: 2016
 questions[27]= "28)  Seg&uacute;n la Ley 47/2003, de 26 de noviembre, General Presupuestaria, autorizar las transferencias entre distintas secciones presupuestarias como consecuencia de reorganizaciones administrativas, es una competencia de:";
 choices[27]= new Array();
 choices[27][0] = "El Ministro de Hacienda y Funci&oacute;n P&uacute;blica.";
 choices[27][1] = "El Gobierno.";
 choices[27][2] = "El Presidente del Gobierno.";
 choices[27][3] = "El Consejo de Ministros.";
 answers[27] = choices[27][1];
 units[27] = "10";
 comments[27] = "Id Pregunta: 490. PRESUPUESTOS GENERALES";


//  Id pregunta: 748 Año de creación de pregunta: 2016
 questions[28]= "29)  Respecto a los contratos de colaboraci&oacute;n entre el sector p&uacute;blico y el sector privado, NO se incluyen entre las prestaciones que pueden ser objeto de estos contratos:";
 choices[28]= new Array();
 choices[28][0] = "La construcci&oacute;n, instalaci&oacute;n o transformaci&oacute;n de obras, equipos, sistemas, y productos o bienes complejos, as&iacute; como su mantenimiento, actualizaci&oacute;n o renovaci&oacute;n, su explotaci&oacute;n o su gesti&oacute;n.";
 choices[28][1] = "La gesti&oacute;n integral del mantenimiento de instalaciones para la investigaci&oacute;n.";
 choices[28][2] = "La fabricaci&oacute;n de bienes y la prestaci&oacute;n de servicios que incorporen tecnolog&iacute;a espec&iacute;ficamente desarrollada con el prop&oacute;sito de aportar soluciones m&aacute;s avanzadas y econ&oacute;micamente m&aacute;s ventajosas que las existentes en el mercado.";
 choices[28][3] = "Todas las anteriores pueden ser objeto de ese tipo de contratos.";
 answers[28] = choices[28][1];
 units[28] = "18, 20";
 comments[28] = "Id Pregunta: 748. Direcci&oacute;n p&uacute;blica";


//  Id pregunta: 230 Año de creación de pregunta: 2016
 questions[29]= "30)  Seg&uacute;n el Art&iacute;culo 22 de la Constituci&oacute;n Espa&ntilde;ola, las asociaciones s&oacute;lo podr&aacute;n ser disueltas o suspendidas en sus actividades:";
 choices[29]= new Array();
 choices[29][0] = "Por Real Decreto.";
 choices[29][1] = "Por Orden del Ministerio del Interior.";
 choices[29][2] = "Por resoluci&oacute;n judicial motivada.";
 choices[29][3] = "Por resoluci&oacute;n del Delegado del Gobierno de la Comunidad Aut&oacute;noma donde tenga establecido su domicilio la asociaci&oacute;n.";
 answers[29] = choices[29][2];
 units[29] = "1";
 comments[29] = "Id Pregunta: 230. CONSTITUCION1978";


//  Id pregunta: 411 Año de creación de pregunta: 2016
 questions[30]= "31)  Es objeto de la Ley de Igualdad efectiva de mujeres y hombres:";
 choices[30]= new Array();
 choices[30][0] = "Elaborar medidas de acci&oacute;n positiva.";
 choices[30][1] = "Hacer efectivo el derecho de igualdad de trato y de oportunidades entre mujeres y hombre.";
 choices[30][2] = "Ninguna es correcta.";
 choices[30][3] = "A y B son correctas.";
 answers[30] = choices[30][1];
 units[30] = "14";
 comments[30] = "Id Pregunta: 411. POLITICAS DE IGUALDAD";


//  Id pregunta: 484 Año de creación de pregunta: 2016
 questions[31]= "32)  De acuerdo con el art&iacute;culo 67 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, si las variaciones afectasen al volumen de endeudamiento a corto y largo plazo, ser&aacute; competencia del Consejo de Ministros cuando su importe exceda de la cuant&iacute;a de:";
 choices[31]= new Array();
 choices[31][0] = "12.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[31][1] = "13.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[31][2] = "11.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 choices[31][3] = "10.000.000 euros de las cifras aprobadas en su presupuesto de capital.";
 answers[31] = choices[31][0];
 units[31] = "10";
 comments[31] = "Id Pregunta: 484. PRESUPUESTOS GENERALES";


//  Id pregunta: 240 Año de creación de pregunta: 2016
 questions[32]= "33)  Las dos C&aacute;maras que configuran las Cortes Generales:";
 choices[32]= new Array();
 choices[32][0] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a diciembre, y de febrero a julio.";
 choices[32][1] = "Se re&uacute;nen en dos periodos ordinarios: de septiembre a noviembre, y de febrero a junio.";
 choices[32][2] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la Diputaci&oacute;n Permanente.";
 choices[32][3] = "Pueden reunirse en sesiones extraordinarias, a petici&oacute;n de la mayor&iacute;a simple de los miembros de cualquiera de las C&aacute;maras.";
 answers[32] = choices[32][0];
 units[32] = "1";
 comments[32] = "Id Pregunta: 240. CONSTITUCION1978";


//  Id pregunta: 573 Año de creación de pregunta: 2016
 questions[33]= "34)  &iquest;Cu&aacute;l de los siguientes hechos NO se produce durante la d&eacute;cada de los 70-80?";
 choices[33]= new Array();
 choices[33][0] = "Incorporaci&oacute;n de la mujer al mercado laboral";
 choices[33][1] = "Entrada en la Uni&oacute;n Europea";
 choices[33][2] = "Pactos de la Moncloa";
 choices[33][3] = "Ingreso en la ONU";
 answers[33] = choices[33][3];
 units[33] = "12";
 comments[33] = "Id Pregunta: 573. Modelo econ&oacute;mico";


//  Id pregunta: 439 Año de creación de pregunta: 2016
 questions[34]= "35)  Sobre el Sistema de Interconexi&oacute;n de Registros (SIR):";
 choices[34]= new Array();
 choices[34][0] = "Es la infraestructura b&aacute;sica que permite el intercambio de asientos electr&oacute;nicos de registro entre los &oacute;rganos y organismos de la Administraci&oacute;n General del Estado.";
 choices[34][1] = "Permite eliminar el tr&aacute;nsito de papel entre administraciones, aumentando la eficiencia y eliminando los costes de manipulaci&oacute;n y remisi&oacute;n del papel, gracias a la generaci&oacute;n de copias aut&eacute;nticas electr&oacute;nicas de la documentaci&oacute;n presentada en los asientos de registro.";
 choices[34][2] = "No es necesario que la aplicaci&oacute;n de registro est&eacute; certificada con la norma SICRES 3.0.";
 choices[34][3] = "La integraci&oacute;n en SIR se realiza mediante aplicaciones de registro comunes como GEISER y ORVE o bien, siempre que se justifique, mediante aplicaciones previamente certificadas por la Comisi&oacute;n de Estrategia TIC.";
 answers[34] = choices[34][1];
 units[34] = "43";
 comments[34] = "Id Pregunta: 439. SERVICIOS COMUNES";


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


//  Id pregunta: 516 Año de creación de pregunta: 2016
 questions[37]= "38)  El sector p&uacute;blico institucional se integra por:";
 choices[37]= new Array();
 choices[37][0] = "cualesquiera organismos p&uacute;blicos y entidades de derecho p&uacute;blico vinculados o dependientes de las Administraciones P&uacute;blicas";
 choices[37][1] = "las entidades de derecho privado vinculadas o dependientes de las Administraciones P&uacute;blicas";
 choices[37][2] = "las Universidades p&uacute;blicas";
 choices[37][3] = "todas son correctas";
 answers[37] = choices[37][3];
 units[37] = "7";
 comments[37] = "Id Pregunta: 516. LEY 39/2015";


//  Id pregunta: 215 Año de creación de pregunta: 2016
 questions[38]= "39)  Seg&uacute;n establece la Constituci&oacute;n Espa&ntilde;ola, las asociaciones se inscribir&aacute;n en un registro a efectos de:";
 choices[38]= new Array();
 choices[38][0] = "Publicidad.";
 choices[38][1] = "Constituci&oacute;n.";
 choices[38][2] = "Legalidad.";
 choices[38][3] = "Creaci&oacute;n.";
 answers[38] = choices[38][0];
 units[38] = "1";
 comments[38] = "Id Pregunta: 215. CONSTITUCION1978";


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


//  Id pregunta: 494 Año de creación de pregunta: 2016
 questions[40]= "41)  El R&eacute;gimen Jur&iacute;dico de la Deuda del Estado se encuentran regulados en la Ley 47/2003, de 26 de noviembre, General Presupuestaria:";
 choices[40]= new Array();
 choices[40][0] = "T&iacute;tulo V, Cap&iacute;tulo II, Secci&oacute;n 4.";
 choices[40][1] = "T&iacute;tulo V, Cap&iacute;tulo I, Secci&oacute;n 2.";
 choices[40][2] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 3.";
 choices[40][3] = "T&iacute;tulo IV, Cap&iacute;tulo II, Secci&oacute;n 4.";
 answers[40] = choices[40][2];
 units[40] = "10";
 comments[40] = "Id Pregunta: 494. PRESUPUESTOS GENERALES";


//  Id pregunta: 462 Año de creación de pregunta: 2016
 questions[41]= "42)  De conformidad con el art&iacute;culo 11 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los derechos de naturaleza p&uacute;blica de la Hacienda P&uacute;blica estatal se adquieren y nacen de conformidad con lo establecido en:";
 choices[41]= new Array();
 choices[41][0] = "La Ley 47/2003, de 26 de noviembre, General Presupuestaria.";
 choices[41][1] = "La Ley 6/1997, Organizaci&oacute;n y Funcionamiento de la AGE.";
 choices[41][2] = "La normativa reguladora de cada derecho.";
 choices[41][3] = "Ley 50/1997, del Gobierno.";
 answers[41] = choices[41][2];
 units[41] = "10";
 comments[41] = "Id Pregunta: 462. PRESUPUESTOS GENERALES";


//  Id pregunta: 455 Año de creación de pregunta: 2016
 questions[42]= "43)  En las Administraciones P&uacute;blicas...";
 choices[42]= new Array();
 choices[42][0] = "Existe un Presupuesto ordinario &uacute;nicamente";
 choices[42][1] = "Existen s&oacute;lo un presupuesto ordinario y un presupuesto extraordinario";
 choices[42][2] = "Existe un &uacute;nico presupuesto ordinario y uno o varios presupuestos extraordinarios";
 choices[42][3] = "Existen varios presupuestos que indistintamente pueden ser considerados ordinarios o extraordinarios";
 answers[42] = choices[42][0];
 units[42] = "10";
 comments[42] = "Id Pregunta: 455. PRESUPUESTOS GENERALES";


//  Id pregunta: 326 Año de creación de pregunta: 2016
 questions[43]= "44)  La Mesa del Parlamento estar&aacute; compuesta por:";
 choices[43]= new Array();
 choices[43][0] = "El Presidente, doce Vicepresidentes y los Cuestores.";
 choices[43][1] = "El Presidente, diez Vicepresidentes y los Cuestores.";
 choices[43][2] = "El Presidente, dos Vicepresidentes y los Cuestores.";
 choices[43][3] = "El Presidente, catorce Vicepresidentes y los Cuestores.";
 answers[43] = choices[43][3];
 units[43] = "5";
 comments[43] = "Id Pregunta: 326. UNION EUROPEA";


//  Id pregunta: 78 Año de creación de pregunta: 2016
 questions[44]= "45)  En relaci&oacute;n con la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de protecci&oacute;n de datos de car&aacute;cter personal, se&ntilde;ale la respuesta correcta:";
 choices[44]= new Array();
 choices[44][0] = "En caso de datos de car&aacute;cter personal registrados inexactos o incompletos, el interesado debe instar su rectificaci&oacute;n, sin que puedan ser cancelados y sustituidos de oficio por los datos rectificados o completados.";
 choices[44][1] = "En caso de datos de car&aacute;cter personal registrados inexactos o incompletos, ser&aacute;n cancelados y sustituidos de oficio por los datos rectificados o completados, sin perjuicio del derecho de rectificaci&oacute;n y cancelaci&oacute;n del afectado.";
 choices[44][2] = "El responsable del tratamiento tendr&aacute; la obligaci&oacute;n de hacer efectivo el derecho de rectificaci&oacute;n o cancelaci&oacute;n del interesado en el plazo de 15 d&iacute;as.";
 choices[44][3] = "El responsable del tratamiento tendr&aacute; la obligaci&oacute;n de hacer efectivo el derecho de rectificaci&oacute;n o cancelaci&oacute;n del interesado en el plazo de 1 mes.";
 answers[44] = choices[44][1];
 units[44] = "35";
 comments[44] = "Id Pregunta: 78. AGE A1 2015";


//  Id pregunta: 427 Año de creación de pregunta: 2016
 questions[45]= "46)  En las bases de los concursos para la provisi&oacute;n de puestos de trabajo se computar&aacute;, a los efectos de valoraci&oacute;n del trabajo desarrollado y de los correspondientes m&eacute;ritos, el tiempo que las personas candidatas hayan permanecido:";
 choices[45]= new Array();
 choices[45][0] = "En r&eacute;gimen de excedencias, reducciones de jornada, permiso de maternidad o permiso de paternidad.";
 choices[45][1] = "En el extranjero.";
 choices[45][2] = "Ninguna es correcta.";
 choices[45][3] = "Ambas son correctas.";
 answers[45] = choices[45][0];
 units[45] = "14";
 comments[45] = "Id Pregunta: 427. POLITICAS DE IGUALDAD";


//  Id pregunta: 308 Año de creación de pregunta: 2016
 questions[46]= "47)  El Tribunal de Justicia se cre&oacute; en:";
 choices[46]= new Array();
 choices[46][0] = "El Tratado de la CECA.";
 choices[46][1] = "El Tratado de Niza.";
 choices[46][2] = "El Tratado de &Aacute;msterdam.";
 choices[46][3] = "El Tratado de Lisboa.";
 answers[46] = choices[46][0];
 units[46] = "5";
 comments[46] = "Id Pregunta: 308. UNION EUROPEA";


//  Id pregunta: 239 Año de creación de pregunta: 2016
 questions[47]= "48)  Respecto de las relaciones que constitucionalmente se regulan entre los miembros del Gobierno y las Cortes Generales:";
 choices[47]= new Array();
 choices[47][0] = "La comparecencia de los miembros del Gobierno ante las C&aacute;maras y sus Comisiones puede extenderse tambi&eacute;n a los funcionarios de sus Departamentos.";
 choices[47][1] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo solicitasen las propias C&aacute;maras o sus Comisiones.";
 choices[47][2] = "Los funcionarios s&oacute;lo comparecer&aacute;n si as&iacute; lo deciden los miembros del Gobierno.";
 choices[47][3] = "Los funcionarios no comparecer&aacute;n en ning&uacute;n caso.";
 answers[47] = choices[47][0];
 units[47] = "1";
 comments[47] = "Id Pregunta: 239. CONSTITUCION1978";


//  Id pregunta: 670 Año de creación de pregunta: 2016
 questions[48]= "49)  La Ley 39/2015 introduce un cap&iacute;tulo relativo a la tramitaci&oacute;n simplificada del procedimiento administrativo com&uacute;n. Respecto a este tr&aacute;mite se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[48]= new Array();
 choices[48][0] = "Se podr&aacute; acordar la tramitaci&oacute;n simplificada por falta de complejidad del procedimiento y por razones de inter&eacute;s p&uacute;blico.";
 choices[48][1] = "Los interesados podr&aacute;n, en cualquier caso, solicitar la tramitaci&oacute;n simplificada del procedimiento.";
 choices[48][2] = "En general, los procedimientos administrativos tramitados de manera simplificada deber&aacute;n ser resueltos en treinta d&iacute;as.";
 choices[48][3] = "Constar&aacute;n &uacute;nicamente de los siguientes tr&aacute;mites: inicio, subsanaci&oacute;n (en su caso), alegaciones y tr&aacute;mite de audiencia.";
 answers[48] = choices[48][3];
 units[48] = "7";
 comments[48] = "Id Pregunta: 670. Cap&iacute;tulo VI, T&iacute;tulo IV de la Ley 39/2015";


//  Id pregunta: 457 Año de creación de pregunta: 2016
 questions[49]= "50)  La clasificaci&oacute;n econ&oacute;mica del gasto nos dice...";
 choices[49]= new Array();
 choices[49][0] = "En qu&eacute; nos gastamos el dinero";
 choices[49][1] = "Por qu&eacute; nos gastamos el dinero";
 choices[49][2] = "Para qu&eacute; nos gastamos el dinero";
 choices[49][3] = "Qui&eacute;n se gasta el dinero.";
 answers[49] = choices[49][0];
 units[49] = "10";
 comments[49] = "Id Pregunta: 457. PRESUPUESTOS GENERALES";


//  Id pregunta: 374 Año de creación de pregunta: 2016
 questions[50]= "51)  Las instituciones de la Uni&oacute;n Europea son:";
 choices[50]= new Array();
 choices[50][0] = "El Consejo, la Comisi&oacute;n, el Parlamento y el Tribunal de Justicia.";
 choices[50][1] = "El Consejo, el Parlamento y el Tribunal de Justicia.";
 choices[50][2] = "El Consejo, el Parlamento y la Comisi&oacute;n.";
 choices[50][3] = "El Consejo, la Comisi&oacute;n, el Parlamento Europeo, el Tribunal de Justicia y el Tribunal de Cuentas.";
 answers[50] = choices[50][3];
 units[50] = "5";
 comments[50] = "Id Pregunta: 374. UNION EUROPEA";


//  Id pregunta: 774 Año de creación de pregunta: 2016
 questions[51]= "52)  Las Administraciones P&uacute;blicas act&uacute;an para el cumplimiento de sus fines con:";
 choices[51]= new Array();
 choices[51][0] = "personalidad jur&iacute;dica propia";
 choices[51][1] = "personalidad jur&iacute;dica &uacute;nica";
 choices[51][2] = "personalidad jur&iacute;dica plena";
 choices[51][3] = "personalidad jur&iacute;dica f&iacute;sica";
 answers[51] = choices[51][1];
 units[51] = "4, 7, 8, 9";
 comments[51] = "Id Pregunta: 774. Ley 40/2015";


//  Id pregunta: 86 Año de creación de pregunta: 2016
 questions[52]= "53)  Un contrato menor tiene una duraci&oacute;n m&aacute;xima de:";
 choices[52]= new Array();
 choices[52][0] = "Un a&ntilde;o prorrogable";
 choices[52][1] = "Dos a&ntilde;os no prorrogables";
 choices[52][2] = "Un a&ntilde;o no prorrogable";
 choices[52][3] = "Dos a&ntilde;os prorrogables";
 answers[52] = choices[52][2];
 units[52] = "37";
 comments[52] = "Id Pregunta: 86. AGE A1 2015";


//  Id pregunta: 571 Año de creación de pregunta: 2016
 questions[53]= "54)  El sector Servicios NO incluye:";
 choices[53]= new Array();
 choices[53][0] = "El Comercio";
 choices[53][1] = "Los Transportes";
 choices[53][2] = "La Energ&iacute;a";
 choices[53][3] = "Las Comunicaciones";
 answers[53] = choices[53][2];
 units[53] = "12";
 comments[53] = "Id Pregunta: 571. Modelo econ&oacute;mico";


//  Id pregunta: 483 Año de creación de pregunta: 2016
 questions[54]= "55)  A tenor del art&iacute;culo 48 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, podr&aacute; ser diferido el vencimiento de la obligaci&oacute;n de pago del precio de compra de bienes inmuebles adquiridos directamente cuyo importe excede de:";
 choices[54]= new Array();
 choices[54][0] = "Cuatro millones de euros.";
 choices[54][1] = "Seis millones de euros.";
 choices[54][2] = "Siete millones de euros.";
 choices[54][3] = "Cinco millones de euros.";
 answers[54] = choices[54][1];
 units[54] = "10";
 comments[54] = "Id Pregunta: 483. PRESUPUESTOS GENERALES";


//  Id pregunta: 792 Año de creación de pregunta: 2016
 questions[55]= "56)  En la organizaci&oacute;n territorial de la Administraci&oacute;n General del Estado los Subdelegados del Gobierno en las provincias los cuales tendr&aacute;n nivel de:";
 choices[55]= new Array();
 choices[55][0] = "Subsecretario";
 choices[55][1] = "Subdirector general";
 choices[55][2] = "Secretario de Estado";
 choices[55][3] = "ninguna es correcta";
 answers[55] = choices[55][1];
 units[55] = "4, 7, 8, 9";
 comments[55] = "Id Pregunta: 792. Ley 40/2015";


//  Id pregunta: 546 Año de creación de pregunta: 2016
 questions[56]= "57)  &iquest;Cu&aacute;l es el &oacute;rgano superior de gobernanza TIC en la Administraci&oacute;n General del Estado?";
 choices[56]= new Array();
 choices[56][0] = "El Comit&eacute; de Direcci&oacute;n TIC";
 choices[56][1] = "El Consejo Superior de Administraci&oacute;n Electr&oacute;nica";
 choices[56][2] = "La Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[56][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[56] = choices[56][3];
 units[56] = "26";
 comments[56] = "Id Pregunta: 546. Gobernanza TIC";


//  Id pregunta: 536 Año de creación de pregunta: 2016
 questions[57]= "58)  Las Administraciones P&uacute;blicas podr&aacute;n habilitar:";
 choices[57]= new Array();
 choices[57][0] = "con car&aacute;cter general a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[57][1] = "con car&aacute;cter general o espec&iacute;fico a personas jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[57][2] = "con car&aacute;cter general o espec&iacute;fico a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 choices[57][3] = "con car&aacute;cter general a personas f&iacute;sicas o jur&iacute;dicas autorizadas para la realizaci&oacute;n de determinadas transacciones electr&oacute;nicas en representaci&oacute;n de los interesados";
 answers[57] = choices[57][2];
 units[57] = "7";
 comments[57] = "Id Pregunta: 536. LEY 39/2015";


//  Id pregunta: 804 Año de creación de pregunta: 2016
 questions[58]= "59)  Los Secretarios generales t&eacute;cnicos:";
 choices[58]= new Array();
 choices[58][0] = "se encuentran bajo la inmediata dependencia del Subsecretario";
 choices[58][1] = "tendr&aacute;n las competencias sobre servicios comunes que les atribuya el Real Decreto de estructura del Departamento";
 choices[58][2] = "tendr&aacute;n las competencias relativas a producci&oacute;n normativa, asistencia jur&iacute;dica y publicaciones";
 choices[58][3] = "todas son correctas";
 answers[58] = choices[58][3];
 units[58] = "4, 7, 8, 9";
 comments[58] = "Id Pregunta: 804. Ley 40/2015";


//  Id pregunta: 28 Año de creación de pregunta: 2016
 questions[59]= "60)  En UNIX, la llamada &ldquo;FORK&rdquo;:";
 choices[59]= new Array();
 choices[59][0] = "Controla el tiempo de ejecuci&oacute;n de un proceso.";
 choices[59][1] = "Env&iacute;a una se&ntilde;al al proceso especificado.";
 choices[59][2] = "Crea una copia del proceso que hace la llamada.";
 choices[59][3] = "Elimina el mapa de memoria del proceso que hace la llamada.";
 answers[59] = choices[59][2];
 units[59] = "57";
 comments[59] = "Id Pregunta: 28. AGE A1 2015";


//  Id pregunta: 723 Año de creación de pregunta: 2016
 questions[60]= "61)  &iquest;C&uacute;al es la principal ventaja de sprints m&aacute;s cortos en Scrum?";
 choices[60]= new Array();
 choices[60][0] = "Permite reaccionar al equipo mejor ante imprevistos";
 choices[60][1] = "Se obtiene feedback de los clientes con mayor brevedad";
 choices[60][2] = "Es m&aacute;s f&aacute;cil cumplir los objetivos marcados al final de cada sprint";
 choices[60][3] = "Ninguna de las anteriores";
 answers[60] = choices[60][1];
 units[60] = "34, 84";
 comments[60] = "Id Pregunta: 723. Metodologias &aacute;giles";


//  Id pregunta: 842 Año de creación de pregunta: 2016
 questions[61]= "62)  Ley 40/2015, de 1 de octubre, de R&eacute;gimen Jur&iacute;dico del Sector P&uacute;blico. Indique la respuesta correcta.";
 choices[61]= new Array();
 choices[61][0] = "Para la v&aacute;lida constituci&oacute;n del &oacute;rgano, a efectos de la celebraci&oacute;n de sesiones, deliberaciones y toma de acuerdos, se requerir&aacute; la asistencia, presencial o a distancia, del Presidente y Secretario o en su caso, de quienes les suplan, y la de la mitad de sus miembros.";
 choices[61][1] = "Cuando se trate de los &oacute;rganos colegiados a que se refiere el art&iacute;culo 15.2, el Presidente podr&aacute; considerar v&aacute;lidamente constituido el &oacute;rgano, a efectos de celebraci&oacute;n de sesi&oacute;n, si asisten los representantes de las Administraciones P&uacute;blicas y de las organizaciones representativas de intereses sociales miembros del &oacute;rgano a los que se haya atribuido la condici&oacute;n de portavoces.";
 choices[61][2] = "Cuando estuvieran reunidos, de manera presencial o a distancia, el Secretario y todos los miembros del &oacute;rgano colegiado, o en su caso las personas que les suplan, &eacute;stos podr&aacute;n constituirse v&aacute;lidamente como &oacute;rgano colegiado para la celebraci&oacute;n de sesiones, deliberaciones y adopci&oacute;n de acuerdos sin necesidad de convocatoria previa cuando as&iacute; lo decida el Presidente.";
 choices[61][3] = "Todas son correctas.";
 answers[61] = choices[61][1];
 units[61] = "4, 7, 8, 9";
 comments[61] = "Id Pregunta: 842. Ley 40/2015";


//  Id pregunta: 360 Año de creación de pregunta: 2016
 questions[62]= "63)  El Parlamento Europeo est&aacute; compuesto actualmente por:";
 choices[62]= new Array();
 choices[62][0] = "786 Diputados como m&aacute;ximo.";
 choices[62][1] = "600 Diputados como m&aacute;ximo.";
 choices[62][2] = "650 Diputados como m&aacute;ximo.";
 choices[62][3] = "732 Diputados como m&aacute;ximo.";
 answers[62] = choices[62][0];
 units[62] = "5";
 comments[62] = "Id Pregunta: 360. UNION EUROPEA";


//  Id pregunta: 759 Año de creación de pregunta: 2016
 questions[63]= "64)  &iquest;Cu&aacute;l de las siguientes no es una prioridad propuesta por la Estrategia Europa 2020?";
 choices[63]= new Array();
 choices[63][0] = "Crecimiento sostenible";
 choices[63][1] = "Crecimiento inteligente";
 choices[63][2] = "Crecimiento digital";
 choices[63][3] = "Crecimiento integrador";
 answers[63] = choices[63][2];
 units[63] = "19";
 comments[63] = "Id Pregunta: 759. Europa 2020";


//  Id pregunta: 477 Año de creación de pregunta: 2016
 questions[64]= "65)  De conformidad con el art&iacute;culo 29.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, los programas plurianuales se remitir&aacute;n:";
 choices[64]= new Array();
 choices[64][0] = "Anualmente.";
 choices[64][1] = "Ninguna de las respuestas es correcta.";
 choices[64][2] = "Trimestralmente.";
 choices[64][3] = "Semestralmente.";
 answers[64] = choices[64][0];
 units[64] = "10";
 comments[64] = "Id Pregunta: 477. PRESUPUESTOS GENERALES";


//  Id pregunta: 170 Año de creación de pregunta: 2016
 questions[65]= "66)  En el contexto del mercado &uacute;nico digital, &iquest;qu&eacute; medidas se han tomado para el impulso de la confianza en el tratamiento de los datos personales en el contexto de los servicios digitales en el a&ntilde;o 2016?";
 choices[65]= new Array();
 choices[65][0] = "Se ha establecido una colaboraci&oacute;n p&uacute;blico-privada en materia de ciberseguridad.";
 choices[65][1] = "Se han introducido medidas para impulsar las destrezas digitales de la poblaci&oacute;n, que la Comisi&oacute;n incorporar&aacute; en futuras iniciativas sobre destrezas y formaci&oacute;n.";
 choices[65][2] = "Se ha aprobado el Reglamento (UE) 2016/769 relativo a la protecci&oacute;n de las personas f&iacute;sicas en lo que respecta al tratamiento de datos personales y a la libre circulaci&oacute;n de estos datos y por el que se deroga la Directiva 95/46/CE";
 choices[65][3] = "Se han introducido medidas para garantizar la libertad de los medios de comunicaci&oacute;n y la promoci&oacute;n de la diversidad cultural";
 answers[65] = choices[65][2];
 units[65] = "19";
 comments[65] = "Id Pregunta: 170. https://administracionelectronica.gob.es/pae_Home/pae_Actualidad/pae_Noticias/Anio2016/Mayo/Noticia-2016-05-09-Nuevo-Reglamento-LOPD.html#.WCnlfmrhDIU";


//  Id pregunta: 509 Año de creación de pregunta: 2016
 questions[66]= "67)  De acuerdo con el art&iacute;culo 32 de la Ley Org&aacute;nica 2/2012, de 27 de abril, de Estabilidad Presupuestaria y Sostenibilidad Financiera, en el supuesto de que la liquidaci&oacute;n presupuestaria del Estado se sit&uacute;e en super&aacute;vit, &eacute;ste debe destinarse a:";
 choices[66]= new Array();
 choices[66][0] = "Reducir el gasto p&uacute;blico.";
 choices[66][1] = "Reducir el d&eacute;ficit presupuestario.";
 choices[66][2] = "Reducir el endeudamiento neto.";
 choices[66][3] = "Al Fondo de Contingencia.";
 answers[66] = choices[66][2];
 units[66] = "10";
 comments[66] = "Id Pregunta: 509. PRESUPUESTOS GENERALES";


//  Id pregunta: 706 Año de creación de pregunta: 2016
 questions[67]= "68)  Se&ntilde;ale la afirmaci&oacute;n verdadera con respecto a la entrada en vigor de la Ley 19/2013 de Transparencia, Acceso a la Informaci&oacute;n P&uacute;blica y Buen Gobierno:";
 choices[67]= new Array();
 choices[67][0] = "Todas las disposiciones entraron en vigor al d&iacute;a siguiente de su publicaci&oacute;n en el BOE";
 choices[67][1] = "La entrada en vigor de todas sus disposiciones fue al a&ntilde;o de su publicaci&oacute;n en el BOE";
 choices[67][2] = "Los &oacute;rganos de las Comunidades Aut&oacute;nomas y Entidades Locales dispusieron de un plazo m&aacute;ximo de dos a&ntilde;os tras publicaci&oacute;n en BOE para adaptarse a las obligaciones contenidas en esta Ley.";
 choices[67][3] = "Algunas disposiciones de la ley entraron en vigor a los 3 a&ntilde;os de su publicaci&oacute;n en el BOE";
 answers[67] = choices[67][2];
 units[67] = "22";
 comments[67] = "Id Pregunta: 706. Ley de transparencia";


//  Id pregunta: 400 Año de creación de pregunta: 2016
 questions[68]= "69)  Corresponde probar la ausencia de discriminaci&oacute;n en las medidas adoptadas y su proporcionalidad, a:";
 choices[68]= new Array();
 choices[68][0] = "A la persona demandante.";
 choices[68][1] = "A la persona demandada.";
 choices[68][2] = "Al &oacute;rgano judicial.";
 choices[68][3] = "Al &oacute;rgano administrativo.";
 answers[68] = choices[68][1];
 units[68] = "14";
 comments[68] = "Id Pregunta: 400. POLITICAS DE IGUALDAD";


//  Id pregunta: 597 Año de creación de pregunta: 2016
 questions[69]= "70)  &iquest;Qui&eacute;n elabora y ejecuta los Planes de Acci&oacute;n Sectoriales?";
 choices[69]= new Array();
 choices[69][0] = "La CETIC";
 choices[69][1] = "Los Ministerios";
 choices[69][2] = "La Secretar&iacute;a General de Administraci&oacute;n Digital";
 choices[69][3] = "Ninguno de los anteriores";
 answers[69] = choices[69][1];
 units[69] = "19";
 comments[69] = "Id Pregunta: 597. Estrategia TIC";


//  Id pregunta: 441 Año de creación de pregunta: 2016
 questions[70]= "71)  Se&ntilde;ale la respuesta falsa respecto a Habilit@, Registro de Funcionarios Habilitados:";
 choices[70]= new Array();
 choices[70][0] = "El art&iacute;culo 12.3 de la Ley 39/2015recoge que la Administraci&oacute;n General del Estado, las Comunidades Aut&oacute;nomas y las Entidades Locales mantendr&aacute;n actualizado un registro, u otro sistema equivalente, donde constar&aacute;n los funcionarios habilitados para la identificaci&oacute;n o firma.";
 choices[70][1] = "La Orden HAP/8/2014, de 7 de enero, regula el Registro de funcionarios habilitados para la identificaci&oacute;n y autenticaci&oacute;n de ciudadanos en el &aacute;mbito de la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos vinculados o dependientes.";
 choices[70][2] = "En el caso en que el ciudadano no disponga de medios de autenticaci&oacute;n y firma para relacionarse de manera electr&oacute;nica con las Administraciones, la Ley 39/2015 prev&eacute; que, siempre que el ciudadano se identifique y deje constancia de su consentimiento expreso, un funcionario podr&aacute; actuar en su nombre, utilizando el sistema de firma del que disponga para ello.";
 choices[70][3] = "Tambi&eacute;n se establece en la misma Ley 39/2015 que las Administraciones P&uacute;blicas podr&aacute;n realizar copias aut&eacute;nticas de los documentos p&uacute;blicos administrativos o privados mediante funcionario habilitado.";
 answers[70] = choices[70][1];
 units[70] = "43";
 comments[70] = "Id Pregunta: 441. SERVICIOS COMUNES";


//  Id pregunta: 491 Año de creación de pregunta: 2016
 questions[71]= "72)  A tenor del art&iacute;culo 47.2 de la Ley 47/2003, de 26 de noviembre, General Presupuestaria, el n&uacute;mero de ejercicios a que pueden aplicarse los gastos no ser&aacute; superior a:";
 choices[71]= new Array();
 choices[71][0] = "Dos.";
 choices[71][1] = "Cuatro.";
 choices[71][2] = "Cinco.";
 choices[71][3] = "Tres.";
 answers[71] = choices[71][1];
 units[71] = "10";
 comments[71] = "Id Pregunta: 491. PRESUPUESTOS GENERALES";


//  Id pregunta: 806 Año de creación de pregunta: 2016
 questions[72]= "73)  Los nombramientos de los Secretarios generales t&eacute;cnicos habr&aacute;n de efectuarse entre funcionarios de carrera del Estado, de las Comunidades Aut&oacute;nomas o de las Entidades locales, pertenecientes al:";
 choices[72]= new Array();
 choices[72][0] = "Subgrupo A1";
 choices[72][1] = "Subgrupo A2";
 choices[72][2] = "Subgrupo B";
 choices[72][3] = "Subgrupo C1";
 answers[72] = choices[72][0];
 units[72] = "4, 7, 8, 9";
 comments[72] = "Id Pregunta: 806. Ley 40/2015";


//  Id pregunta: 650 Año de creación de pregunta: 2016
 questions[73]= "74)  Los IDS, (Sistemas de Detecci&oacute;n de Intrusos), pueden clasificarse:";
 choices[73]= new Array();
 choices[73][0] = "Solamente en funci&oacute;n de los sistemas que monitorizan.";
 choices[73][1] = "En funci&oacute;n de los sistemas que monitorizan y en funci&oacute;n de c&oacute;mo operan los Sistemas de Detecci&oacute;n de Intrusos.";
 choices[73][2] = "Solamente en funci&oacute;n de c&oacute;mo operan los Sistemas de Detecci&oacute;n de Intrusos.";
 choices[73][3] = "Estos sistemas es imposible clasificarlos.";
 answers[73] = choices[73][1];
 units[73] = "119";
 comments[73] = "Id Pregunta: 650. Junta de Extremadura A1 2015";


//  Id pregunta: 768 Año de creación de pregunta: 2016
 questions[74]= "75)  Las Universidades p&uacute;blicas se regir&aacute;n por:";
 choices[74]= new Array();
 choices[74][0] = "las previsiones de la presente Ley y supletoriamente por su normativa espec&iacute;fica";
 choices[74][1] = "su normativa espec&iacute;fica y supletoriamente por las previsiones de la presente Ley";
 choices[74][2] = "exclusivamente por su normativa espec&iacute;fica";
 choices[74][3] = "exclusivamente por las previsiones de la presente Ley";
 answers[74] = choices[74][1];
 units[74] = "4, 7, 8, 9";
 comments[74] = "Id Pregunta: 768. Ley 40/2015";


