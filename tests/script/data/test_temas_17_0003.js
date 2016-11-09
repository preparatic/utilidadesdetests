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

//  Id pregunta: 15 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l no es un aspecto concreto por el que la tecnolog&iacute;a de la informaci&oacute;n afecta directamente a la competitividad de las empresas?:";
 choices[0]= new Array();
 choices[0][0] = "Alteraci&oacute;n o cambio de las estructuras de las industrias";
 choices[0][1] = "Simplifica las tareas realizar";
 choices[0][2] = "Afecta a los costes y a la diferenciaci&oacute;n estrat&eacute;gica";
 choices[0][3] = "Expande las actividades haciendo que se puedan crear nuevos negocios";
 answers[0] = choices[0][1];
 units[0] = "22";
 comments[0] = "Id Pregunta: 15. ";


//  Id pregunta: 17 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Cu&aacute;l no es una metodolog&iacute;a de planificaci&oacute;n de la capacidad?:";
 choices[1]= new Array();
 choices[1][0] = "Reglas basadas en el conocimiento";
 choices[1][1] = "M&eacute;todos anal&iacute;ticos";
 choices[1][2] = "Benchmark";
 choices[1][3] = "Simulaci&oacute;n";
 answers[1] = choices[1][0];
 units[1] = "25";
 comments[1] = "Id Pregunta: 17. metodolog&iacute;a de planificaci&oacute;n de sistemas";


//  Id pregunta: 18 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;Cu&aacute;l no es una metodolog&iacute;a para la planificaci&oacute;n de la capacidad de un sistema inform&aacute;tico?:";
 choices[2]= new Array();
 choices[2][0] = "Simulaci&oacute;n";
 choices[2][1] = "La programaci&oacute;n lineal";
 choices[2][2] = "las reglas basadas en la experiencia";
 choices[2][3] = "La teor&iacute;a de colas";
 answers[2] = choices[2][1];
 units[2] = "25";
 comments[2] = "Id Pregunta: 18. planificaci&oacute;n de la capacidad de los sistemas";


//  Id pregunta: 52 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;Cu&aacute;les son los instrumentos b&aacute;sicos de un sistema de ayuda a la decisi&oacute;n orientado a datos?:";
 choices[3]= new Array();
 choices[3][0] = "Consultas predefinidas, consultas ad hoc, informes de excepci&oacute;n y presentaciones gr&aacute;ficas";
 choices[3][1] = "Informes resumen, consultas predefinidas, informes de excepci&oacute;n y presentaciones gr&aacute;ficas";
 choices[3][2] = "Informes resumen, consultas ad hoc, informes de excepci&oacute;n y Consultas predefinidas";
 choices[3][3] = "Informes resumen, consultas ad hoc, informes de excepci&oacute;n y presentaciones gr&aacute;ficas";
 answers[3] = choices[3][3];
 units[3] = "21";
 comments[3] = "Id Pregunta: 52. NULL";


//  Id pregunta: 105 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  Andrea Zerilli realiz&oacute; estudios sobre:";
 choices[4]= new Array();
 choices[4][0] = "Teor&iacute;a de redes";
 choices[4][1] = "Investigaci&oacute;n operativa y teletr&aacute;fico";
 choices[4][2] = "Metodolog&iacute;a de desarrollo";
 choices[4][3] = "Organizaci&oacute;n de empresas";
 answers[4] = choices[4][3];
 units[4] = "22";
 comments[4] = "Id Pregunta: 105. NULL";


//  Id pregunta: 108 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  Cuando hablamos de un nuevo tipo de trabajo en las organizaciones basadas en la informaci&oacute;n, nos referimos a:";
 choices[5]= new Array();
 choices[5][0] = "Disminuci&oacute;n de la presi&oacute;n sobre el trabajador y aumento sobre los sistemas de informaci&oacute;n";
 choices[5][1] = "Necesidad de un trabajador m&aacute;s inteligente pues necesita establecer conexiones entre los s&iacute;mbolos y la realidad";
 choices[5][2] = "Aumento de la conexi&oacute;n del trabajador con el mundo exterior lejano a &eacute;l, gracias a las redes internacionales de ordenadores";
 choices[5][3] = "Aumento de la satisfacci&oacute;n del trabajador que observa la capacidad de producci&oacute;n que tiene el simple hecho de pulsar una tecla del ordenador";
 answers[5] = choices[5][1];
 units[5] = "22";
 comments[5] = "Id Pregunta: 108. NULL";


//  Id pregunta: 119 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Dentro de las t&eacute;cnicas de ayuda a la toma grupal de decisiones, una de las m&aacute;s destacadas es la:";
 choices[6]= new Array();
 choices[6][0] = "Programaci&oacute;n lineal";
 choices[6][1] = "T&eacute;cnica Delphi";
 choices[6][2] = "Teor&iacute;a de la probabilidad";
 choices[6][3] = "T&eacute;cnica de normalizaci&oacute;n de grupo";
 answers[6] = choices[6][1];
 units[6] = "23";
 comments[6] = "Id Pregunta: 119. NULL";


//  Id pregunta: 142 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  El dominio de la informaci&oacute;n se articula en tres grandes partes:";
 choices[7]= new Array();
 choices[7][0] = "Flujo de la informaci&oacute;n, proceso de la informaci&oacute;n, estructura de la informaci&oacute;n";
 choices[7][1] = "Flujo de la informaci&oacute;n, proceso de la informaci&oacute;n, almac&eacute;n de la informaci&oacute;n";
 choices[7][2] = "Flujo de la informaci&oacute;n, contenido de la informaci&oacute;n, almac&eacute;n de la informaci&oacute;n";
 choices[7][3] = "Flujo de la informaci&oacute;n, contenido de la informaci&oacute;n, estructura de la informaci&oacute;n";
 answers[7] = choices[7][3];
 units[7] = "21";
 comments[7] = "Id Pregunta: 142. NULL";


//  Id pregunta: 153 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  El modelo orientado a los tratamientos:";
 choices[8]= new Array();
 choices[8][0] = "Trata de identificar las funciones a desarrollar por el sistema de informaci&oacute;n";
 choices[8][1] = "Trata de identificar la evoluci&oacute;n de la vida de las entidades";
 choices[8][2] = "Trata de identificar las funciones a desarrollar por el sistema inform&aacute;tico";
 choices[8][3] = "Trata de identificar la evoluci&oacute;n de la vida del sistema";
 answers[8] = choices[8][0];
 units[8] = "21";
 comments[8] = "Id Pregunta: 153. ";


//  Id pregunta: 164 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  El sistema de informaci&oacute;n integrado en una organizaci&oacute;n debe tener unos objetivos. &iquest;Cu&aacute;l no ser&iacute;a exactamente uno de ellos?:";
 choices[9]= new Array();
 choices[9][0] = "Suministrar datos a los distintos niveles de la direcci&oacute;n";
 choices[9][1] = "Permitir la realizaci&oacute;n de los objetivos de la organizaci&oacute;n";
 choices[9][2] = "Extraer ventajas competitivas de su entorno";
 choices[9][3] = "Ayudar a determinar los objetivos de la organizaci&oacute;n";
 answers[9] = choices[9][3];
 units[9] = "21";
 comments[9] = "Id Pregunta: 164. ";


//  Id pregunta: 181 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  En el control de integridad de los datos no entra el control de:";
 choices[10]= new Array();
 choices[10][0] = "Fallos en la disponibilidad de los datos";
 choices[10][1] = "La p&eacute;rdida de los datos";
 choices[10][2] = "Duplicaciones de datos";
 choices[10][3] = "Alteraci&oacute;n del significado de los datos";
 answers[10] = choices[10][0];
 units[10] = "21";
 comments[10] = "Id Pregunta: 181. ";


//  Id pregunta: 184 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  En el m&eacute;todo PERT, &iquest;cu&aacute;l de las afirmaciones es falsa?";
 choices[11]= new Array();
 choices[11][0] = "La holgura libre de una actividad es el margen sobrante suponiendo que el nudo de origen se alcanza lo m&aacute;s pronto posible y que al destino se llega tambi&eacute;n lo m&aacute;s pronto posible.";
 choices[11][1] = "La oscilaci&oacute;n de un nudo es el margen de tiempo existente entre el momento m&aacute;s tarde en el que es admisible llegar al mismo (tiempo early) y el momento m&aacute;s pronto en el que es posible llegar (tiempo last).";
 choices[11][2] = "La holgura total es el margen sobrante suponiendo que a la situaci&oacute;n representada por el nudo de origen se llega lo m&aacute;s pronto posible y que a la de destino se llega lo m&aacute;s tarde admisible.";
 choices[11][3] = "La mayor&iacute;a de los software de Gesti&oacute;n de Proyectos incorporan las t&eacute;cnicas PERT.";
 answers[11] = choices[11][1];
 units[11] = "27";
 comments[11] = "Id Pregunta: 184. ";


//  Id pregunta: 209 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  En general, lo m&aacute;s &uacute;til en determinadas &aacute;reas de la organizaci&oacute;n altamente normalizadas (ofim&aacute;tica, contabilidad, inventarios,&hellip;) es utilizar:";
 choices[12]= new Array();
 choices[12][0] = "Aplicaciones a medida realizadas mediante programaci&oacute;n propia.";
 choices[12][1] = "Aplicaciones a medida realizadas mediante programaci&oacute;n externa.";
 choices[12][2] = "Aplicaciones a medida realizadas mediante programaci&oacute;n propia y externa.";
 choices[12][3] = "Aplicaciones est&aacute;ndar o paquetes.";
 answers[12] = choices[12][3];
 units[12] = "27";
 comments[12] = "Id Pregunta: 209. ";


//  Id pregunta: 211 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  En la dimensi&oacute;n horizontal de un sistema de informaci&oacute;n, dentro de cada nivel las funciones se dividen en:";
 choices[13]= new Array();
 choices[13][0] = "Aplicaciones y procedimientos";
 choices[13][1] = "Aplicaciones y tareas";
 choices[13][2] = "Aplicaciones o procedimientos";
 choices[13][3] = "Aplicaciones o tareas";
 answers[13] = choices[13][2];
 units[13] = "21";
 comments[13] = "Id Pregunta: 211. ";


//  Id pregunta: 236 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  En su dimensi&oacute;n vertical, el sistema de informaci&oacute;n tiene tres niveles jer&aacute;rquicos:";
 choices[14]= new Array();
 choices[14][0] = "Entradas, procesos y salidas";
 choices[14][1] = "Operacional, t&aacute;ctico y estrat&eacute;gico";
 choices[14][2] = "De an&aacute;lisis, de construcci&oacute;n y de implantaci&oacute;n";
 choices[14][3] = "Jer&aacute;rquico, de gesti&oacute;n y operativo";
 answers[14] = choices[14][1];
 units[14] = "21";
 comments[14] = "Id Pregunta: 236. ";


//  Id pregunta: 239 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  En un Centro de Proceso de Datos el desarrollo de una nueva aplicaci&oacute;n y su puesta en producci&oacute;n es responsabilidad de las &aacute;reas de:";
 choices[15]= new Array();
 choices[15][0] = "Desarrollo exclusivamente";
 choices[15][1] = "Desarrollo y sistemas";
 choices[15][2] = "Sistemas y producci&oacute;n";
 choices[15][3] = "Desarrollo, sistemas y producci&oacute;n";
 answers[15] = choices[15][3];
 units[15] = "26";
 comments[15] = "Id Pregunta: 239. ";


//  Id pregunta: 246 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  En una organizaci&oacute;n de tipo dinosaurio:";
 choices[16]= new Array();
 choices[16][0] = "El HW est&aacute; distribuido, y no se descentraliza la capacidad de realizar SW ni las decisiones";
 choices[16][1] = "El HW est&aacute; distribuido y el desarrollo tambi&eacute;n, pero no las decisiones";
 choices[16][2] = "El HW, el desarrollo y las decisiones no se descentralizan";
 choices[16][3] = "El HW no est&aacute; distribuido y se descentraliza la capacidad de realizar SW y las decisiones";
 answers[16] = choices[16][2];
 units[16] = "22";
 comments[16] = "Id Pregunta: 246. ";


//  Id pregunta: 259 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Estrategia es:";
 choices[17]= new Array();
 choices[17][0] = "Conjunto de reglas que aseguran la toma de una decisi&oacute;n buena en cada momento";
 choices[17][1] = "La toma de decisiones basada en aspectos contingenciales";
 choices[17][2] = "Actividad ligada a la alta direcci&oacute;n de las organizaciones en todas sus actividades, seg&uacute;n las necesidades de dicha organizaci&oacute;n";
 choices[17][3] = "Arte o traza de dirigir un asunto";
 answers[17] = choices[17][3];
 units[17] = "24";
 comments[17] = "Id Pregunta: 259. ";


//  Id pregunta: 287 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  La clasificaci&oacute;n de las tareas realizadas en la oficina en cuatro tipos b&aacute;sicos (mensajes, gesti&oacute;n de informaci&oacute;n personal y acceso a la informaci&oacute;n) fue realizada por:";
 choices[18]= new Array();
 choices[18][0] = "Carter  y Huzan";
 choices[18][1] = "Kent";
 choices[18][2] = "Price";
 choices[18][3] = "Panki";
 answers[18] = choices[18][2];
 units[18] = "22";
 comments[18] = "Id Pregunta: 287. ";


//  Id pregunta: 303 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  La estructura organizacional  por aplicaciones de un &aacute;rea de desarrollo:";
 choices[19]= new Array();
 choices[19][0] = "Se caracteriza por un mejor aprovechamiento de los recursos humanos, al no estar adjudicados a un &uacute;nico proyecto";
 choices[19][1] = "Se caracteriza por que no es necesaria una coordinaci&oacute;n excesiva a alto nivel ya que cada departamento es independiente";
 choices[19][2] = "Es equivalente a una organizaci&oacute;n matricial";
 choices[19][3] = "Ninguna de las anteriores";
 answers[19] = choices[19][1];
 units[19] = "26";
 comments[19] = "Id Pregunta: 303. estructura organizacional";


//  Id pregunta: 305 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  La evoluci&oacute;n de la inform&aacute;tica desde la perspectiva estrat&eacute;gica:";
 choices[20]= new Array();
 choices[20][0] = "Proporciona un marco conceptual que permita a los directores entender el fen&oacute;meno inform&aacute;tico y tomar decisiones de planificaci&oacute;n";
 choices[20][1] = "Permite conocer cu&aacute;les han de ser las caracter&iacute;sticas del directivo que deba dirigir la organizaci&oacute;n y la estructura organizativa adecuada";
 choices[20][2] = "Permite analizar la situaci&oacute;n de un momento concreto";
 choices[20][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[20] = choices[20][0];
 units[20] = "23";
 comments[20] = "Id Pregunta: 305. ";


//  Id pregunta: 333 AÃ±o de creación de pregunta: 2004-01-01
 questions[21]= "22)  Las organizaciones basadas en la informaci&oacute;n. Indique la respuesta FALSA:";
 choices[21]= new Array();
 choices[21][0] = "En los a&ntilde;os 20 las organizaciones se basaban en el mando-control. A partir de los a&ntilde;os 70 la informaci&oacute;n comenz&oacute; a ser un elemento estructural importante y se dio paso a las organizaciones basadas en la informaci&oacute;n.";
 choices[21][1] = "Seg&uacute;n Peter Drucker, uno de los gur&uacute;s de la gerencia de empresas, una de las caracter&iacute;sticas propias de las organizaciones basadas en la informaci&oacute;n es la reducci&oacute;n hasta un tercio del n&uacute;mero de ejecutivos.";
 choices[21][2] = "Una organizaci&oacute;n basada en la informaci&oacute;n obligatoriamente debe emplear nuevas tecnolog&iacute;as, ya que si no es imposible manejar el gran volumen de informaci&oacute;n generada e intercambiada.";
 choices[21][3] = "En una organizaci&oacute;n basada en el conocimiento los distintos especialistas dirigen y organizan su trabajo mediante la interacci&oacute;n con sus colegas, con un funcionamiento similar al de una orquesta.";
 answers[21] = choices[21][2];
 units[21] = "22";
 comments[21] = "Id Pregunta: 333. ";


//  Id pregunta: 337 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  La realizaci&oacute;n de copias de &quot;backup&quot; peri&oacute;dicas en un centro de proceso de datos es responsabilidad del &aacute;rea de:";
 choices[22]= new Array();
 choices[22][0] = "Desarrollo";
 choices[22][1] = "Mantenimiento";
 choices[22][2] = "Producci&oacute;n";
 choices[22][3] = "En un centro de proceso de datos no es necesario hacer peri&oacute;dicamente copias de seguridad";
 answers[22] = choices[22][2];
 units[22] = "26";
 comments[22] = "Id Pregunta: 337. ";


//  Id pregunta: 340 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  La red de comunicaci&oacute;n en c&iacute;rculo de una organizaci&oacute;n es:";
 choices[23]= new Array();
 choices[23][0] = "Comunicaci&oacute;n ascendente donde dos subordinados reportan a su jefe sobre un asunto";
 choices[23][1] = "Esquema descendente en jerarqu&iacute;a absoluta";
 choices[23][2] = "Cada sujeto se comunica con todos los restantes";
 choices[23][3] = "Se establece con dos interlocutores en cada caso, interactuando con los m&aacute;s cercanos a uno";
 answers[23] = choices[23][3];
 units[23] = "23";
 comments[23] = "Id Pregunta: 340. ";


//  Id pregunta: 341 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  La red de comunicaci&oacute;n en rueda de una organizaci&oacute;n es:";
 choices[24]= new Array();
 choices[24][0] = "Comunicaci&oacute;n ascendente donde dos subordinados reportan a su jefe sobre un asunto";
 choices[24][1] = "Esquema descendente en jerarqu&iacute;a absoluta";
 choices[24][2] = "Las respuestas &lsquo;a&rsquo;, &lsquo;b&rsquo; y &lsquo;d&rsquo; son falsas";
 choices[24][3] = "Se establece con dos interlocutores en cada caso, interactuando con los m&aacute;s cercanos a uno";
 answers[24] = choices[24][2];
 units[24] = "23";
 comments[24] = "Id Pregunta: 341. ";


//  Id pregunta: 342 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  La red de comunicaci&oacute;n en Y de una organizaci&oacute;n es:";
 choices[25]= new Array();
 choices[25][0] = "Comunicaci&oacute;n ascendente donde dos subordinados reportan a su jefe sobre un asunto";
 choices[25][1] = "Esquema descendente en jerarqu&iacute;a absoluta";
 choices[25][2] = "Cada sujeto se comunica con todos los restantes";
 choices[25][3] = "Se establece con dos interlocutores en cada caso, interactuando con los m&aacute;s cercanos a uno";
 answers[25] = choices[25][0];
 units[25] = "23";
 comments[25] = "Id Pregunta: 342. ";


//  Id pregunta: 345 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  La t&eacute;cnica de direcci&oacute;n en la etapa de iniciaci&oacute;n es:";
 choices[26]= new Array();
 choices[26][0] = "Orientada a ventas";
 choices[26][1] = "Informal";
 choices[26][2] = "Orientada a los recursos";
 choices[26][3] = "Orientada al control";
 answers[26] = choices[26][1];
 units[26] = "22";
 comments[26] = "Id Pregunta: 345. ";


//  Id pregunta: 360 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  Las siglas D.S.S. responden por:";
 choices[27]= new Array();
 choices[27][0] = "Design Software System";
 choices[27][1] = "Development  Software System";
 choices[27][2] = "Decision Support System";
 choices[27][3] = "Development Support System";
 answers[27] = choices[27][2];
 units[27] = "21";
 comments[27] = "Id Pregunta: 360. ";


//  Id pregunta: 376 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  Los sistemas de ayuda a la decisi&oacute;n orientados a datos se caracterizan por:";
 choices[28]= new Array();
 choices[28][0] = "Proporcionar un medio f&aacute;cil al usuario para &quot;jugar con los datos&quot;";
 choices[28][1] = "Facilitar el conocimiento estructural del problema que permita el desarrollo de un modelo formal de decisi&oacute;n";
 choices[28][2] = "Presentar al usuario una informaci&oacute;n relacionada para la toma de decisiones";
 choices[28][3] = "Ser m&aacute;s caros que los sistemas de ayuda a la decisi&oacute;n orientados a modelos";
 answers[28] = choices[28][3];
 units[28] = "21";
 comments[28] = "Id Pregunta: 376. ";


//  Id pregunta: 377 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  Los sistemas de ayuda a la decisi&oacute;n pueden ser:";
 choices[29]= new Array();
 choices[29][0] = "Orientados a modelos y orientados a datos";
 choices[29][1] = "Orientados a modelos y orientados a procesos";
 choices[29][2] = "Orientados a datos y orientados a procesos";
 choices[29][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[29] = choices[29][0];
 units[29] = "21";
 comments[29] = "Id Pregunta: 377. ";


//  Id pregunta: 387 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  No es cierto respecto a las t&eacute;cnicas PERT que:";
 choices[30]= new Array();
 choices[30][0] = "fueron desarrolladas a finales de los 50s para el programa I+D de los misiles bal&iacute;siticos Polaris";
 choices[30][1] = "permiten representar tanto las dependencias entre tareas como las escalas temporales de las mismas";
 choices[30][2] = "est&aacute;n muy orientadas al plaza de ejecuci&oacute;n, con poca consideraci&oacute;n al coste";
 choices[30][3] = "est&aacute;n orientadas a los sucesos o eventos, y normalmente trabajan con distribuciones de probabilidad para las duraciones";
 answers[30] = choices[30][1];
 units[30] = "28";
 comments[30] = "Id Pregunta: 387. ";


//  Id pregunta: 411 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  Respecto al modelo de Nolan:";
 choices[31]= new Array();
 choices[31][0] = "Fue criticado por Strassman al no contemplar la aparici&oacute;n de las bases de datos";
 choices[31][1] = "Seg&uacute;n su autor es un modelo de 4 etapas, posteriormente corregido a 5 etapas";
 choices[31][2] = "Las 2 anteriores";
 choices[31][3] = "Ninguna de las anteriores";
 answers[31] = choices[31][0];
 units[31] = "22";
 comments[31] = "Id Pregunta: 411. nolan";


//  Id pregunta: 425 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  Seg&uacute;n el modelo de Donovan sobre la evoluci&oacute;n de la inform&aacute;tica en las organizaciones, un tipo de organizaci&oacute;n en el que se descentralizan HW y decisiones sobre inform&aacute;tica pero no as&iacute; la facultad de desarrollar aplicaciones se denomina:";
 choices[32]= new Array();
 choices[32][0] = "Mano amiga";
 choices[32][1] = "Gran hermano";
 choices[32][2] = "Perro vigilante";
 choices[32][3] = "Semiacoplada";
 answers[32] = choices[32][0];
 units[32] = "22";
 comments[32] = "Id Pregunta: 425. donovan - nolan";


//  Id pregunta: 447 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  Seg&uacute;n las teor&iacute;as de Alvin Toffler:";
 choices[33]= new Array();
 choices[33][0] = "Las organizaciones tradicionales tienen dos elementos caracter&iacute;sticos &quot;cub&iacute;culos&quot; y &quot;canales&quot;";
 choices[33][1] = "Las organizaciones basadas en la informaci&oacute;n tienen dos elementos caracter&iacute;sticos &quot;cub&iacute;culos&quot; y &quot;canales&quot;";
 choices[33][2] = "La evoluci&oacute;n en el tiempo del presupuesto invertido en inform&aacute;tica produce una gr&aacute;fica en forma de S";
 choices[33][3] = "La evoluci&oacute;n en el tiempo del presupuesto invertido en inform&aacute;tica produce una gr&aacute;fica en forma de doble S";
 answers[33] = choices[33][0];
 units[33] = "22";
 comments[33] = "Id Pregunta: 447. ";


//  Id pregunta: 456 AÃ±o de creación de pregunta: 2002-01-01
 questions[34]= "35)  Si el camino cr&iacute;tico de un proyecto est&aacute; formado por las tareas A(2,4,6); B( 6,15,30); y C (4,7,16); la duraci&oacute;n prevista del proyecto ser&aacute;:";
 choices[34]= new Array();
 choices[34][0] = "26";
 choices[34][1] = "31";
 choices[34][2] = "28";
 choices[34][3] = "25";
 answers[34] = choices[34][2];
 units[34] = "28";
 comments[34] = "Id Pregunta: 456. ";


//  Id pregunta: 463 AÃ±o de creación de pregunta: 2002-01-01
 questions[35]= "36)  Supongamos que en un proyecto representado mediante un diagrama PERT una de las actividades sufre un retraso con respecto a la duraci&oacute;n inicialmente programada En tal caso:";
 choices[35]= new Array();
 choices[35][0] = "Se incrementa la duraci&oacute;n del camino cr&iacute;tico";
 choices[35][1] = "El camino cr&iacute;tico seguir&aacute; siendo el mismo";
 choices[35][2] = "No se puede afirmar con seguridad que le suceder&aacute; al camino cr&iacute;tico";
 choices[35][3] = "La fecha de finalizaci&oacute;n prevista podr&aacute; mantenerse s&oacute;lo si otra actividad ve acortada su duraci&oacute;n";
 answers[35] = choices[35][2];
 units[35] = "28";
 comments[35] = "Id Pregunta: 463. ";


//  Id pregunta: 474 AÃ±o de creación de pregunta: 2002-01-01
 questions[36]= "37)  Uno de los principales impulsores del concepto de organizaci&oacute;n basada en la informaci&oacute;n ha sido:";
 choices[36]= new Array();
 choices[36][0] = "Elton Mayo";
 choices[36][1] = "Peter Drucker";
 choices[36][2] = "Lynda Applegate";
 choices[36][3] = "Pigrogine";
 answers[36] = choices[36][1];
 units[36] = "22";
 comments[36] = "Id Pregunta: 474. ";


//  Id pregunta: 539 AÃ±o de creación de pregunta: 2004-01-01
 questions[37]= "38)  En metodolog&iacute;a PERT, la cantidad de unidades de tiempo en exceso para la realizaci&oacute;n de una tarea suponiendo que comienzan y terminan en las &uacute;ltimas fechas permisibles se llama ...";
 choices[37]= new Array();
 choices[37][0] = "Holgura condicionada";
 choices[37][1] = "Holgura independiente";
 choices[37][2] = "Holgura libre";
 choices[37][3] = "Holgura total";
 answers[37] = choices[37][0];
 units[37] = "28";
 comments[37] = "Id Pregunta: 539. ";


//  Id pregunta: 545 AÃ±o de creación de pregunta: 2004-01-01
 questions[38]= "39)  En referencia a los niveles permitidos para el grupo A, indique la respuesta FALSA:";
 choices[38]= new Array();
 choices[38][0] = "El grupo A abarca el rango de niveles del 20 al 30";
 choices[38][1] = "El grupo A abarca el rango de niveles del 26 al 30";
 choices[38][2] = "El nivel 30 corresponde a Subdirectores Generales y asimilados";
 choices[38][3] = "El nivel 26 corresponde a Jefes de Servicio y asimilados";
 answers[38] = choices[38][1];
 units[38] = "24";
 comments[38] = "Id Pregunta: 545. ";


//  Id pregunta: 546 AÃ±o de creación de pregunta: 2004-01-01
 questions[39]= "40)  Los tipos de dise&ntilde;o de las organizaciones m&aacute;s extendidos son los siguientes:";
 choices[39]= new Array();
 choices[39][0] = "Apuntado, plano, basado en la l&iacute;nea y de estructura mixta.";
 choices[39][1] = "Apuntado, plano, basado en la l&iacute;nea y con orientaci&oacute;n a staff.";
 choices[39][2] = "Apuntado, plano, jer&aacute;nquico y reticular";
 choices[39][3] = "Apuntado, plano, sectorial y con orientaci&oacute;n a staff.";
 answers[39] = choices[39][1];
 units[39] = "26";
 comments[39] = "Id Pregunta: 546. ";


//  Id pregunta: 547 AÃ±o de creación de pregunta: 2004-01-01
 questions[40]= "41)  A la hora de gestionar y resolver una incidencia en un CAU, se establecen los siguientes niveles de gesti&oacute;n:";
 choices[40]= new Array();
 choices[40][0] = "Tres niveles: nivel 1 (el propio CAU), nivel 2 (las dem&aacute;s &aacute;reas del Centro TIC) y nivel 3 (los proveedores externos y/o empresas de mantenimiento)";
 choices[40][1] = "Cuatro niveles: nivel 1 (las herramientas de diagn&oacute;stico y recuperaci&oacute;n del sistema o aplicaci&oacute;n), nivel 2 (el propio CAU), nivel 3 (las dem&aacute;s &aacute;reas del Centro TIC) y nivel 4 (los proveedores externos y/o empresas de mantenimiento)";
 choices[40][2] = "a y b son correctas";
 choices[40][3] = "a y b son incorrectas";
 answers[40] = choices[40][0];
 units[40] = "26";
 comments[40] = "Id Pregunta: 547. ";


//  Id pregunta: 559 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  Si analizamos un Sistema de Informaci&oacute;n desde una estructuraci&oacute;n vertical, el grueso del proceso de datos se hace a nivel";
 choices[41]= new Array();
 choices[41][0] = "Nivel estrat&eacute;gico.";
 choices[41][1] = "Nivel Operacional";
 choices[41][2] = "Nivel T&aacute;ctico";
 choices[41][3] = "Se realiza dentro de los programas y aplicaciones ";
 answers[41] = choices[41][1];
 units[41] = "21";
 comments[41] = "Id Pregunta: 559. ";


//  Id pregunta: 568 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  El t&eacute;rmino &quot;organizaci&oacute;n aprendiente&quot; se debe a:";
 choices[42]= new Array();
 choices[42][0] = "Peter Drucker";
 choices[42][1] = "Davenport";
 choices[42][2] = "C. Rami&oacute;";
 choices[42][3] = "Linda Applegate";
 answers[42] = choices[42][0];
 units[42] = "22";
 comments[42] = "Id Pregunta: 568. ";


//  Id pregunta: 572 AÃ±o de creación de pregunta: 2006-01-01
 questions[43]= "44)  Seg&uacute;n Zerilli ";
 choices[43]= new Array();
 choices[43][0] = "la direcci&oacute;n se entiende como: &quot;El proceso de gu&iacute;a y constante adaptaci&oacute;n de unaorganizaci&oacute;n, a trav&eacute;s de un preciso esquema l&oacute;gico de acci&oacute;n, para la consecuci&oacute;n en el m&aacute;ximo grado y con la m&aacute;ximaeficiencia de los objetivos de dicha organizaci&oacute;n&quot;.";
 choices[43][1] = "&quot;...un sistema de informaci&oacute;n que empieza a explotar el potencial del tratamiento de lainformaci&oacute;n que no quedar&aacute; reducido al papel de soporte administrativo del tratamiento de datos de rutina. En realidad,se convertir&aacute; en un recurso estrat&eacute;gico";
 choices[43][2] = "&quot;...un sistema de informaci&oacute;n que empieza a explotar el potencial del tratamiento de lainformaci&oacute;n que tiene como fin  el  soporte administrativo del tratamiento de datos de rutina. En realidad,se convertir&aacute; en un recurso estrat&eacute;gico";
 choices[43][3] = "la direcci&oacute;n se entiende como: &quot;El proceso de gu&iacute;a y constante adaptaci&oacute;n de unaorganizaci&oacute;n, a trav&eacute;s de la actitud proactiva del individuo, para la consecuci&oacute;n en el m&aacute;ximo grado y con la m&aacute;ximaeficiencia de los objetivos de dicha organizaci&oacute;n&quot;.";
 answers[43] = choices[43][0];
 units[43] = "23";
 comments[43] = "Id Pregunta: 572. ";


//  Id pregunta: 574 AÃ±o de creación de pregunta: 2006-01-01
 questions[44]= "45)  Seg&uacute;n la Ley Org&aacute;nica Organizaci&oacute;n y  Funcionamiento de la Administraci&oacute;n General del Estado LOFAGE, las Comunicaciones se situar&aacute;n. ";
 choices[44]= new Array();
 choices[44][0] = "Dentro del Gabinete del Ministro junto al Gabiente de Presa";
 choices[44][1] = "Dentro de la Secretar&iacute;a General T&eacute;cnica";
 choices[44][2] = "La ley no dice nada al respecto";
 choices[44][3] = "Dentro de la Subsecretar&iacute;a";
 answers[44] = choices[44][2];
 units[44] = "24";
 comments[44] = "Id Pregunta: 574. ";


//  Id pregunta: 576 AÃ±o de creación de pregunta: 2006-01-01
 questions[45]= "46)  Una acci&oacute;n b&aacute;sica de planificaci&oacute;n y control es";
 choices[45]= new Array();
 choices[45][0] = "Evaluar los planes alternativos utilizando para ello la experiencia de todos los colaboradores";
 choices[45][1] = "Evaluar de forma pormenorizada la alternativa elegida utilizando la intuici&oacute;n y la propia experiencia";
 choices[45][2] = "Evaluar los planes alternativos utilizando un sistema objetivo que permita, en la medida de lo posible, la neutralidadm&aacute;xima en la evaluaci&oacute;n.";
 choices[45][3] = "Evaluar los planes alternativos utilizando un sistema democr&aacute;tico que permita, en la medida de lo posible, la neutralidadm&aacute;xima en la evaluaci&oacute;n.";
 answers[45] = choices[45][1];
 units[45] = "25";
 comments[45] = "Id Pregunta: 576. ";


//  Id pregunta: 577 AÃ±o de creación de pregunta: 2006-01-01
 questions[46]= "47)  &iquest;Cu&aacute;l de las siguientes afirmaciones es verdadera?";
 choices[46]= new Array();
 choices[46][0] = "Desde el punto de vista cuantitativo, la gr&aacute;fica de Gantt no proporciona informaci&oacute;n sobre la secuencia mas &oacute;ptima de actividades.";
 choices[46][1] = "Desde el punto de vista cualitativo, la gr&aacute;fica de Gantt no proporciona informaci&oacute;n sobre la secuencia mas &oacute;ptima de actividades.";
 choices[46][2] = "Desde el punto de vista cuantitativo, la gr&aacute;fica de Gantt no proporciona informaci&oacute;n sobre la secuencia de actividades.";
 choices[46][3] = "Desde el punto de vista cualitativo, la gr&aacute;fica de Gantt no proporciona informaci&oacute;n sobre la secuencia  actividades.";
 answers[46] = choices[46][0];
 units[46] = "27";
 comments[46] = "Id Pregunta: 577. ";


//  Id pregunta: 586 AÃ±o de creación de pregunta: 2006-01-01
 questions[47]= "48)  Un principio que debe regir el CAU es:";
 choices[47]= new Array();
 choices[47][0] = "Mejora continua del servicio proporcionado.";
 choices[47][1] = "Proveer tantos puntos de contacto como &aacute;reas ";
 choices[47][2] = "Solicitar&aacute; informaci&oacute;n escrita al usuario de la incidencia que cursa";
 choices[47][3] = "Limitar&aacute; el tiempo de atenci&oacute;n al usuario ";
 answers[47] = choices[47][0];
 units[47] = "26";
 comments[47] = "Id Pregunta: 586. ";


//  Id pregunta: 667 AÃ±o de creación de pregunta: 2006-01-01
 questions[48]= "49)  En su libro &quot;La estructura de las organizaciones&quot; Mintzberg describe las organizaciones matriciales y se&ntilde;ala diversos factores que las identifican. &iquest;Cu&aacute;l de los siguientes no corresponde a estos factores?";
 choices[48]= new Array();
 choices[48][0] = "Elevada tendencia a disgregar a los especialistas en unidades funcionales en lo que corresponde a asuntos internos";
 choices[48][1] = "Estructura sumamente org&aacute;nica con escasa formalizaci&oacute;n del comportamiento";
 choices[48][2] = "Elevada especializaci&oacute;n del puesto basada en una preparaci&oacute;n formal";
 choices[48][3] = "Uso de dispositivos de enlace para fomentar la adaptaci&oacute;n mutua";
 answers[48] = choices[48][0];
 units[48] = "22";
 comments[48] = "Id Pregunta: 667. ";


//  Id pregunta: 683 AÃ±o de creación de pregunta: 2002-01-01
 questions[49]= "50)  &iquest;Qu&eacute; son empresas spin-off?";
 choices[49]= new Array();
 choices[49][0] = "Empresas dedicadas al SW libre.";
 choices[49][1] = "Empresas vinculadas a la Universidad y que se dedican a tareas de I+D.";
 choices[49][2] = "Empresas de aceleraci&oacute;n de electrones para la producci&oacute;n de energ&iacute;a.";
 choices[49][3] = "No existen.";
 answers[49] = choices[49][1];
 units[49] = "21";
 comments[49] = "Id Pregunta: 683. ";


//  Id pregunta: 1897 AÃ±o de creación de pregunta: 2006-01-01
 questions[50]= "51)  Software de negocio para mejorar la comunicaci&oacute;n entre organizaciones y sus socios";
 choices[50]= new Array();
 choices[50][0] = "Acuerdo de Licencia de Usuario Final (EULA)";
 choices[50][1] = "Pol&iacute;tica de Seguridad";
 choices[50][2] = "Acuerdo de nivel de servicio (SLA)";
 choices[50][3] = "Gesti&oacute;n de relaciones entre socios (PRM)";
 answers[50] = choices[50][3];
 units[50] = "23";
 comments[50] = "Id Pregunta: 1897. ";


//  Id pregunta: 2001 AÃ±o de creación de pregunta: 2004-01-01
 questions[51]= "52)  Una de las siguientes t&eacute;cnicas no se considera habitualmente como m&eacute;todo para la planificaci&oacute;n de la capacidad de un sistema inform&aacute;tico:";
 choices[51]= new Array();
 choices[51][0] = "De prueba y error sobre distintas implantaciones";
 choices[51][1] = "Anal&iacute;ticas";
 choices[51][2] = "De simulaci&oacute;n";
 choices[51][3] = "De &quot;bench-mark&quot;";
 answers[51] = choices[51][0];
 units[51] = "26";
 comments[51] = "Id Pregunta: 2001. Preparatic XVII";


//  Id pregunta: 2053 AÃ±o de creación de pregunta: 2002-01-01
 questions[52]= "53)  Funciones de un sistema de informaci&oacute;n son:";
 choices[52]= new Array();
 choices[52][0] = "Entrada de datos, almacenamiento y presentaci&oacute;n de los mismos";
 choices[52][1] = "Entrada de datos, comunicaciones y c&aacute;lculo";
 choices[52][2] = "Las respuestas &lsquo;a&rsquo;, &lsquo;b&rsquo; y &lsquo;d&rsquo; son correctas";
 choices[52][3] = "Almacenamiento de datos, c&aacute;lculo y comunicaciones";
 answers[52] = choices[52][2];
 units[52] = "21";
 comments[52] = "Id Pregunta: 2053. ";


//  Id pregunta: 2555 AÃ±o de creación de pregunta: 2004-01-01
 questions[53]= "54)  &iquest;Cu&aacute;ntos niveles tiene el CMMi?:";
 choices[53]= new Array();
 choices[53][0] = "3";
 choices[53][1] = "4";
 choices[53][2] = "5";
 choices[53][3] = "6";
 answers[53] = choices[53][2];
 units[53] = "27";
 comments[53] = "Id Pregunta: 2555. NULL";


//  Id pregunta: 3106 AÃ±o de creación de pregunta: 2002-01-01
 questions[54]= "55)  Una de las caracter&iacute;sticas fundamentales de los sistemas de recuperaci&oacute;n de informaci&oacute;n es:";
 choices[54]= new Array();
 choices[54][0] = "Trabaja con informaci&oacute;n estructurada de tipo imagen";
 choices[54][1] = "Maneja grandes vol&uacute;menes de informaci&oacute;n no estructurada, combinando norm&aacute;lmente texto e im&aacute;genes";
 choices[54][2] = "Trabaja con informaci&oacute;n estructurada y vol&uacute;menes de informaci&oacute;n medio/bajos";
 choices[54][3] = "Su objeto es la recuperaci&oacute;n de ficheros y bases de datos";
 answers[54] = choices[54][1];
 units[54] = "21";
 comments[54] = "Id Pregunta: 3106. ";


//  Id pregunta: 3567 AÃ±o de creación de pregunta: 2002-01-01
 questions[55]= "56)  En un sistema en el que todos los usuarios necesitan el mismo servicio:";
 choices[55]= new Array();
 choices[55][0] = "Todos los usuarios esperan el mismo tiempo para ser atendidos.";
 choices[55][1] = "El tiempo total de servicio es el mismo y no depende del patr&oacute;n de llegadas.";
 choices[55][2] = "S&oacute;lo se puede acotar el tiempo m&iacute;nimo de espera.";
 choices[55][3] = "Ninguna de las anteriores es v&aacute;lida.";
 answers[55] = choices[55][3];
 units[55] = "26";
 comments[55] = "Id Pregunta: 3567. ";


//  Id pregunta: 3605 AÃ±o de creación de pregunta: 2002-01-01
 questions[56]= "57)  La f&oacute;rmula de Little indica:";
 choices[56]= new Array();
 choices[56][0] = "N&uacute;mero medio de servidores esperando a ser requeridos por el usuario";
 choices[56][1] = "N&uacute;mero medio de usuarios esperando";
 choices[56][2] = "N&uacute;mero m&aacute;ximo de usuarios esperando que puede soportar el sistema";
 choices[56][3] = "N&uacute;mero medio de usuarios en el sistema";
 answers[56] = choices[56][3];
 units[56] = "26";
 comments[56] = "Id Pregunta: 3605. *: Formula de LITTLE";


//  Id pregunta: 4324 AÃ±o de creación de pregunta: 2007-01-01
 questions[57]= "58)  En una Organizaci&oacute;n, el Administrador de Bases de Datos puede ejercer todas las funciones siguientes, excepto";
 choices[57]= new Array();
 choices[57][0] = "Determinar los criterios de acceso a la base de datos.";
 choices[57][1] = "Monitorizar la base de datos mediante herramientas de an&aacute;lisis.";
 choices[57][2] = "Seleccionar las herramientas de optimizaci&oacute;n del rendimiento de la base.";
 choices[57][3] = "Definir e iniciar los procedimientos de respaldo y recuperaci&oacute;n.";
 answers[57] = choices[57][0];
 units[57] = "26";
 comments[57] = "Id Pregunta: 4324. ";


//  Id pregunta: 4326 AÃ±o de creación de pregunta: 2007-01-01
 questions[58]= "59)  En el &aacute;mbito de la Administraci&oacute;n de los Sistemas de Bases de Datos &iquest;Cu&aacute;l de las siguientes afirmaciones, es verdadera?.";
 choices[58]= new Array();
 choices[58][0] = "El Administrador de Datos (AD) est&aacute; mas involucrado en las &uacute;ltimas etapas del ciclo de vida (desde el dise&ntilde;o de la aplicaci&oacute;n y dise&ntilde;o f&iacute;sico de la base de datos, hasta su mantenimiento).";
 choices[58][1] = "El Administrador de la Base de Datos (ABD) est&aacute; m&aacute;s involucrado en las primeras etapas del ciclo de vida (desde la planificaci&oacute;n de la base de datos hasta el dise&ntilde;o l&oacute;gico).";
 choices[58][2] = "Las responsabilidades del Administrador de la Base de Datos (ABD) se centran en el desarrollo del procedimiento y de las pol&iacute;ticas generales del sistema.";
 choices[58][3] = "El Administrador de la Base de Datos (ABD) est&aacute; m&aacute;s involucrado en las &uacute;ltimas etapas del ciclo de vida (desde el dise&ntilde;o de la aplicaci&oacute;n y dise&ntilde;o f&iacute;sico de la base de datos, hasta su mantenimiento).";
 answers[58] = choices[58][3];
 units[58] = "26";
 comments[58] = "Id Pregunta: 4326. ";


//  Id pregunta: 4327 AÃ±o de creación de pregunta: 2007-01-01
 questions[59]= "60)  Entre los objetivos a conseguir por el Administrador de una Base de Datos, no se encuentra...";
 choices[59]= new Array();
 choices[59][0] = "Mantener la disponibilidad de los datos (procedimientos de recuperaci&oacute;n de la Base de Datos da&ntilde;ada).";
 choices[59][1] = "Garantizar el mantenimiento (asegurando que no se produce ning&uacute;n tipo de cambio en el Sistema de Base de Datos).";
 choices[59][2] = "Mantener la seguridad de los datos (proteger la Base de Datos de usos mal intencionados o no autorizados).";
 choices[59][3] = "Garantizar la integridad de los datos (mantener la consistencia de la Base de Datos).";
 answers[59] = choices[59][1];
 units[59] = "26";
 comments[59] = "Id Pregunta: 4327. ";


//  Id pregunta: 4395 AÃ±o de creación de pregunta: 2007-01-01
 questions[60]= "61)  &iquest;Cu&aacute;l de las siguientes no se considera una tarea habitual de una administrador de sistemas?";
 choices[60]= new Array();
 choices[60][0] = "Agregar y quitar usuarios.";
 choices[60][1] = "Desarrollo de aplicaciones internas.";
 choices[60][2] = "Realizar copias de seguridad.";
 choices[60][3] = "Monitorizar el sistema.";
 answers[60] = choices[60][1];
 units[60] = "26";
 comments[60] = "Id Pregunta: 4395. Examen TIC MAP B 2006";


//  Id pregunta: 4399 AÃ±o de creación de pregunta: 2007-01-01
 questions[61]= "62)  &iquest;Cu&aacute;l de los siguientes tipos de mantenimiento de equipos hardware tiene un car&aacute;cter peri&oacute;dico?";
 choices[61]= new Array();
 choices[61][0] = "Mantenimiento correctivo.";
 choices[61][1] = "Mantenimiento preventivo.";
 choices[61][2] = "Mantenimiento perfectivo.";
 choices[61][3] = "Mantenimiento adaptativo.";
 answers[61] = choices[61][1];
 units[61] = "26";
 comments[61] = "Id Pregunta: 4399. ";


//  Id pregunta: 4405 AÃ±o de creación de pregunta: 2007-01-01
 questions[62]= "63)  Se&ntilde;ale la afirmaci&oacute;n incorrecta. El departamento de seguridad inform&aacute;tica dentro de una organizaci&oacute;n especializada en tecnolog&iacute;as de informaci&oacute;n:";
 choices[62]= new Array();
 choices[62][0] = "Debe ser independiente del departamento de sistemas.";
 choices[62][1] = "Debe ser independiente del departamento de comunicaciones.";
 choices[62][2] = "Debe ser independiente del departamento de desarrollo.";
 choices[62][3] = "Centra su actividad en la seguridad en las redes.";
 answers[62] = choices[62][3];
 units[62] = "26";
 comments[62] = "Id Pregunta: 4405. ";


//  Id pregunta: 4406 AÃ±o de creación de pregunta: 2007-01-01
 questions[63]= "64)  &iquest;Cu&aacute;l de los siguientes elementos de un centro de contacto acepta la combinaci&oacute;n de la voz humana y pulsaciones en el teclado y provee respuestas en forma de voz?";
 choices[63]= new Array();
 choices[63][0] = "Sistema de respuesta de voz interactiva (IVR).";
 choices[63][1] = "Agente Virtual Inteligente (IVA).";
 choices[63][2] = "Distribuidor Autom&aacute;tico de Llamadas (ASR).";
 choices[63][3] = "Sistema de Reconocimiento Autom&aacute;tico del Lenguaje (ASR).";
 answers[63] = choices[63][0];
 units[63] = "26";
 comments[63] = "Id Pregunta: 4406. ";


//  Id pregunta: 4501 AÃ±o de creación de pregunta: 2007-01-01
 questions[64]= "65)  Trabajando con un diagrama PERT vemos que se retrasa una etapa no perteneciente al camino critico. Este aumento de duraci&oacute;n, &iquest;retrasar&aacute; la fecha del final del proyecto?";
 choices[64]= new Array();
 choices[64][0] = "Siempre, dado que todo retraso en una etapa afecta a la duraci&oacute;n del proyecto.";
 choices[64][1] = "Nunca, al no pertenecer la etapa al camino cr&iacute;tico.";
 choices[64][2] = "S&oacute;lo si la nueva duraci&oacute;n de la etapa es superior a la duraci&oacute;n de cualquiera de las otras etapas.";
 choices[64][3] = "S&oacute;lo si la nueva duraci&oacute;n convierte en critico el camino al que pertenece la etapa.";
 answers[64] = choices[64][3];
 units[64] = "27";
 comments[64] = "Id Pregunta: 4501. Castilla la Mancha 06";


//  Id pregunta: 4606 AÃ±o de creación de pregunta: 2007-01-01
 questions[65]= "66)  &iquest;Cual de las siguientes t&eacute;cnicas NO es de gesti&oacute;n de proyectos?";
 choices[65]= new Array();
 choices[65][0] = "m&eacute;todo MARKII para el An&aacute;lisis de los Puntos Funci&oacute;n";
 choices[65][1] = "Diagrama de extrapolaci&oacute;n";
 choices[65][2] = "staffing size";
 choices[65][3] = "Joint Requirements Planning";
 answers[65] = choices[65][3];
 units[65] = "28";
 comments[65] = "Id Pregunta: 4606. ";


//  Id pregunta: 4696 AÃ±o de creación de pregunta: 2007-01-01
 questions[66]= "67)  &iquest;Qu&eacute; no es un objetivo de un Sistema de Informaci&oacute;n?";
 choices[66]= new Array();
 choices[66][0] = "Automatizaci&oacute;n de procesos operativos";
 choices[66][1] = "Proporcionar informaci&oacute;n que sirva de apoyo al proceso de toma de decisiones.";
 choices[66][2] = "Lograr ventajas competitivas en su adquisici&oacute;n";
 choices[66][3] = "Minimizar el costo de adquisici&oacute;n, procesamiento y uso de la informaci&oacute;n";
 answers[66] = choices[66][2];
 units[66] = "21";
 comments[66] = "Id Pregunta: 4696. Examen 2006 JCYL";


//  Id pregunta: 5104 AÃ±o de creación de pregunta: 2003-01-01
 questions[67]= "68)  En un sistema de informaci&oacute;n, los informes espec&iacute;ficos que no se hab&iacute;an pedido anteriormente y que los directivos necesitan con rapidez para resolver un problema muy concreto ser&aacute;n para:";
 choices[67]= new Array();
 choices[67][0] = "Un nivel operativo";
 choices[67][1] = "Un nivel t&aacute;ctico";
 choices[67][2] = "Un nivel estrat&eacute;gico";
 choices[67][3] = "Un nivel transaccional";
 answers[67] = choices[67][1];
 units[67] = "22";
 comments[67] = "Id Pregunta: 5104. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5106 AÃ±o de creación de pregunta: 2003-01-01
 questions[68]= "69)  Cuando en una empresa la forma de desarrollar proyectos (gesti&oacute;n e ingenier&iacute;a) est&aacute; definida, es decir, que est&aacute; establecida, documentada y que existen m&eacute;tricas (obtenci&oacute;n de datos objetivos) para la consecuci&oacute;n de objetivos concretos, seg&uacute;n CMMI est&aacute;:";
 choices[68]= new Array();
 choices[68][0] = "Nivel 1";
 choices[68][1] = "Nivel 2";
 choices[68][2] = "Nivel 3";
 choices[68][3] = "Nivel 4";
 answers[68] = choices[68][2];
 units[68] = "27";
 comments[68] = "Id Pregunta: 5106. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5435 AÃ±o de creación de pregunta: 2003-01-01
 questions[69]= "70)  &iquest;Cu&aacute;l es el lugar m&aacute;s conveniente para la instalaci&oacute;n de un CPD de respaldo en la ribera del Pisuerga?";
 choices[69]= new Array();
 choices[69][0] = "La planta m&aacute;s elevada del edificio de usos m&uacute;ltiples";
 choices[69][1] = "Una sala aneja al garaje subterr&aacute;neo";
 choices[69][2] = "La primera planta de un edificio de cinco plantas";
 choices[69][3] = "La planta baja";
 answers[69] = choices[69][2];
 units[69] = "26";
 comments[69] = "Id Pregunta: 5435. Castilla y Le&oacute;n";


//  Id pregunta: 6075 AÃ±o de creación de pregunta: 2010-01-01
 questions[70]= "71)  &iquest;Cu&aacute;les son los subsistemas que integran fundamentalmente la direcci&oacute;n de proyectos?";
 choices[70]= new Array();
 choices[70][0] = "Planificaci&oacute;n, organizaci&oacute;n, control, informaci&oacute;n, tecnolog&iacute;a, y cultura de la empresa.";
 choices[70][1] = "Planificaci&oacute;n, Organizaci&oacute;n, Control, Documentaci&oacute;n, Tecnolog&iacute;a y Cultura de la Empresa.";
 choices[70][2] = "Planificaci&oacute;n, gesti&oacute;n, control, informaci&oacute;n, tecnolog&iacute;a y documentaci&oacute;n.";
 choices[70][3] = "Planificaci&oacute;n, organizaci&oacute;n, control, informaci&oacute;n, tecnolog&iacute;a y documentaci&oacute;n.";
 answers[70] = choices[70][0];
 units[70] = "27";
 comments[70] = "Id Pregunta: 6075. ";


//  Id pregunta: 6080 AÃ±o de creación de pregunta: 2010-01-01
 questions[71]= "72)  La gesti&oacute;n de los recursos humanos del proyecto incluye lo siguiente:";
 choices[71]= new Array();
 choices[71][0] = "Planificaci&oacute;n de los Recursos Humanos, Adquirir el Equipo del Proyecto, Desarrollar el Equipo del Proyecto, Gestionar el Equipo del Proyecto.";
 choices[71][1] = "Adquirir el Equipo del Proyecto, Desarrollar el Equipo del Proyecto, Gestionar el Equipo del Proyecto.";
 choices[71][2] = "Planificaci&oacute;n de los Recursos Humanos, Adquirir el Equipo del Proyecto, Desarrollar el Equipo del Proyecto.";
 choices[71][3] = "Ninguna de las anteriores.";
 answers[71] = choices[71][0];
 units[71] = "27";
 comments[71] = "Id Pregunta: 6080. ";


//  Id pregunta: 6134 AÃ±o de creación de pregunta: 2010-01-01
 questions[72]= "73)  En relaci&oacute;n con el funcionamiento de un CAU (Centro de Atenci&oacute;n de Usuarios) no es correcto que:";
 choices[72]= new Array();
 choices[72][0] = "Toda llamada que se reciba en el CAU debe quedar registrada como incidencia";
 choices[72][1] = "En el caso que el CAU no pueda resolver la incidencia debe escalarla a un segundo nivel, que se corresponde a otras &aacute;reas del centro TIC";
 choices[72][2] = "Si el segundo nivel no puede resolver la incidencia, escalar&aacute; la incidencia al tercer nivel, compuesto en general por proveedores y empresas de mantenimiento";
 choices[72][3] = "Es responsabilidad de cada uno de los niveles documentar la incidencia, cerrarla y comunicarlo al usuario";
 answers[72] = choices[72][3];
 units[72] = "26";
 comments[72] = "Id Pregunta: 6134. ";


//  Id pregunta: 6148 AÃ±o de creación de pregunta: 2010-01-01
 questions[73]= "74)  &iquest;Qu&eacute; tipo de dependencias utiliza el m&eacute;todo ADM?";
 choices[73]= new Array();
 choices[73][0] = "Utiliza dependencias inicio a final y final a inicio.";
 choices[73][1] = "S&oacute;lo utiliza dependencias de inicio a final.";
 choices[73][2] = "S&oacute;lo utiliza dependencias de final a inicio.";
 choices[73][3] = "S&oacute;lo utiliza dependencias final a final.";
 answers[73] = choices[73][2];
 units[73] = "28";
 comments[73] = "Id Pregunta: 6148. ";


//  Id pregunta: 6170 AÃ±o de creación de pregunta: 2010-01-01
 questions[74]= "75)  Indique el nivel, que normalmente se corresponde con un jefe de &aacute;rea:";
 choices[74]= new Array();
 choices[74][0] = "26.";
 choices[74][1] = "27.";
 choices[74][2] = "28.";
 choices[74][3] = "29.";
 answers[74] = choices[74][2];
 units[74] = "24";
 comments[74] = "Id Pregunta: 6170. ";


//  Id pregunta: 6171 AÃ±o de creación de pregunta: 2010-01-01
 questions[75]= "76)  El Cuerpo Superior de Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaciones (CSTIC) fue una decisi&oacute;n del Gobierno de:";
 choices[75]= new Array();
 choices[75][0] = "1989";
 choices[75][1] = "1990";
 choices[75][2] = "1991";
 choices[75][3] = "1992";
 answers[75] = choices[75][1];
 units[75] = "24";
 comments[75] = "Id Pregunta: 6171. ";


//  Id pregunta: 6237 AÃ±o de creación de pregunta: 2010-01-01
 questions[76]= "77)  En el marco de trabajo de la gesti&oacute;n de proyectos no se realiza:";
 choices[76]= new Array();
 choices[76][0] = "Gesti&oacute;n del tiempo.";
 choices[76][1] = "Gesti&oacute;n de la calidad.";
 choices[76][2] = "Gesti&oacute;n del cambio.";
 choices[76][3] = "Gesti&oacute;n de contenidos.";
 answers[76] = choices[76][3];
 units[76] = "27";
 comments[76] = "Id Pregunta: 6237. TIC B-2009, bloque desarrollo";


//  Id pregunta: 8282 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  &iquest;C&oacute;mo se denomina el informe elaborado bajo el impulso de la Comisi&oacute;n Permanente del Consejo Superior de Administraci&oacute;n Electr&oacute;nica para analizar, sobre todo cuantitativamente, el sector TIC en la AGE?:";
 choices[77]= new Array();
 choices[77][0] = "Informe PRINCESA.";
 choices[77][1] = "Informe TECNIMAP.";
 choices[77][2] = "Informe LIRIA.";
 choices[77][3] = "Informe REINA.";
 answers[77] = choices[77][3];
 units[77] = "24, 25";
 comments[77] = "Id Pregunta: 8282. Examen TIC A1 2010";


//  Id pregunta: 8610 AÃ±o de creación de pregunta: 2011-01-01
 questions[78]= "79)  En el contexto de las tareas de explotaci&oacute;n de sistemas de informaci&oacute;n, se denominan tareas u operaciones &quot;lights-out&quot; a:";
 choices[78]= new Array();
 choices[78][0] = "Las tareas u operaciones automatizadas, que se llevan a cabo sin intervenci&oacute;n humana, de forma desatendida";
 choices[78][1] = "Las tareas incluidas en el plan de contingencias, a llevar a cabo en caso de corte del suminstro el&eacute;ctrico.";
 choices[78][2] = "Las tareas que no se pueden automatizar, por lo que necesariamente requieren personal para su realizaci&oacute;n.";
 choices[78][3] = "Las tareas criticas, que requieren su Inclusi&oacute;n especifica en el plan de contingencias, en una localizaci&oacute;n f&iacute;sica alternativa a la habitual.";
 answers[78] = choices[78][0];
 units[78] = "26";
 comments[78] = "Id Pregunta: 8610. Examen TIC A2 2010 interna";


//  Id pregunta: 8914 AÃ±o de creación de pregunta: 2011-01-01
 questions[79]= "80)  &iquest;Cu&aacute;l de las siguientes no es una funci&oacute;n del Administrador de la Base de Datos (DBA)?:";
 choices[79]= new Array();
 choices[79][0] = "Realizar el modelo Entidad/Relaci&oacute;n que defina la estructura de los datos.";
 choices[79][1] = "Monitorizaci&oacute;n del rendimiento de la base de datos.";
 choices[79][2] = "Balance de la distribuci&oacute;n de los datos entre los dispositivos de almacenamiento.";
 choices[79][3] = "Gestionar los usuarios y los permisos de acceso a la base da datos";
 answers[79] = choices[79][0];
 units[79] = "26";
 comments[79] = "Id Pregunta: 8914. NULL";


//  Id pregunta: 9406 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  Cu&aacute;l es el modelo de organizaci&oacute;n TIC &oacute;ptimo";
 choices[80]= new Array();
 choices[80][0] = "La estructura matricial con dise&ntilde;o plano";
 choices[80][1] = "La estructura funcional apuntada";
 choices[80][2] = "La estructura matricial con orientaci&oacute;n a staff";
 choices[80][3] = "Aquel que permita en cada caso conseguir los objetivos del negocio";
 answers[80] = choices[80][3];
 units[80] = "26";
 comments[80] = "Id Pregunta: 9406. ";


//  Id pregunta: 9410 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  Cu&aacute;l de las siguientes no es una funci&oacute;n de car&aacute;cter esencialmente estrat&eacute;gico en las organizaciones TIC?";
 choices[81]= new Array();
 choices[81][0] = "Definici&oacute;n de pol&iacute;ticas de seguridad";
 choices[81][1] = "Definici&oacute;n de la arquitectura TIC";
 choices[81][2] = "Definici&oacute;n de la estrategia TIC";
 choices[81][3] = "Oficina de gesti&oacute;n de proyectos";
 answers[81] = choices[81][3];
 units[81] = "26";
 comments[81] = "Id Pregunta: 9410. ";


//  Id pregunta: 9411 AÃ±o de creación de pregunta: 2013-01-01
 questions[82]= "83)  Cu&aacute;l de las siguientes siguientes afirmaciones relativas a las organizaciones TIC es incorrecta?";
 choices[82]= new Array();
 choices[82][0] = "El &aacute;rea de log&iacute;stica no siempre pertenece a la organizaci&oacute;n TIC";
 choices[82][1] = "Existe una tendencia en el &aacute;rea de desarrollo y mantenimiento hacia el modelo de organizaci&oacute;n proyecto-funcional";
 choices[82][2] = "El sistema de funcionamiento formal se caracteriza por un elevado n&uacute;mero de niveles jer&aacute;rquicos";
 choices[82][3] = "El CAU suministra informaci&oacute;n a los usuarios para resolver incidencias";
 answers[82] = choices[82][2];
 units[82] = "26";
 comments[82] = "Id Pregunta: 9411. ";


//  Id pregunta: 9648 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  Una licencia RISP debe reflejar:";
 choices[83]= new Array();
 choices[83][0] = "Finalidad concreta";
 choices[83][1] = "Duraci&oacute;n de la licencia";
 choices[83][2] = "Modalidades financieras";
 choices[83][3] = "Todas las anteriores";
 answers[83] = choices[83][3];
 units[83] = "22";
 comments[83] = "Id Pregunta: 9648. Debe reflejar: finalidad concreta (comercial o no comercial), duraci&oacute;n, obligaciones del beneficiario y del organismo cedente, responsabilidades de uso, modalidades financieras (gratuito, tasa o precio p&uacute;blico)";


//  Id pregunta: 9768 AÃ±o de creación de pregunta: 2010-01-01
 questions[84]= "85)  Seg&uacute;n la Ley 37/2007 de Reutilizaci&oacute;n de Informaci&oacute;n del Sector P&uacute;blico, son infracciones muy graves:";
 choices[84]= new Array();
 choices[84][0] = "La reutilizaci&oacute;n de documentaci&oacute;n sin haber obtenido la correspondiente licencia en los casos en que &eacute;sta sea requerida.";
 choices[84][1] = "La reutilizaci&oacute;n de la informaci&oacute;n para una finalidad distinta a la que se concedi&oacute;.";
 choices[84][2] = "La desnaturalizaci&oacute;n del sentido de la informaci&oacute;n para cuya reutilizaci&oacute;n se haya concedido una licencia.";
 choices[84][3] = "La ausencia de cita de la fuente.";
 answers[84] = choices[84][2];
 units[84] = "22";
 comments[84] = "Id Pregunta: 9768. ";


//  Id pregunta: 9770 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Seg&uacute;n la Ley 37/2007 de Reutilizaci&oacute;n de Informaci&oacute;n del Sector P&uacute;blico, son infracciones graves:";
 choices[85]= new Array();
 choices[85][0] = "La reutilizaci&oacute;n de la informaci&oacute;n para una finalidad distinta a la que se concedi&oacute;.";
 choices[85][1] = "La falta de menci&oacute;n de la fecha de la &uacute;ltima actualizaci&oacute;n de la informaci&oacute;n.";
 choices[85][2] = "La desnaturalizaci&oacute;n del sentido de la informaci&oacute;n para cuya reutilizaci&oacute;n se haya concedido una licencia.";
 choices[85][3] = "La ausencia de cita de la fuente.";
 answers[85] = choices[85][0];
 units[85] = "22";
 comments[85] = "Id Pregunta: 9770. ";


//  Id pregunta: 9875 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  &iquest;Cu&aacute;l de las siguientes categor&iacute;as de mantenimiento NO ha sido definida en la norma ISO/IEC 14764?";
 choices[86]= new Array();
 choices[86][0] = "preventivo.";
 choices[86][1] = "progresivo.";
 choices[86][2] = "adaptativo.";
 choices[86][3] = "perfectivo.";
 answers[86] = choices[86][1];
 units[86] = "26";
 comments[86] = "Id Pregunta: 9875. TIC A1, Examen 2013";


//  Id pregunta: 10329 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  Por motivos estrat&eacute;gicos, se acuerda terminar un portal de admnistraci&oacute;n electr&oacute;nica dos meses antes de lo previsto. No hay disponibilidad de m&aacute;s recursos humanos ni de ampliar el horario de trabajo ni de conseguir fondos para contratar personal externo. El Jefe de Proyecto deber&aacute; negociar entonces con el cliente del portal:";
 choices[87]= new Array();
 choices[87][0] = "Una reducci&oacute;n del alcance previsto, eliminando algunas funcionalidades adicionales o no cr&iacute;ticas,  hasta que cuadre en el tiempo previsto.";
 choices[87][1] = "Una demora en el tiempo ya que no se puede acometer sin m&aacute;s recursos la tarea indicada";
 choices[87][2] = "Que el portal se haga usando herramientas de creaci&oacute;n r&aacute;pida de portales electr&oacute;nicos";
 choices[87][3] = "Una disminuci&oacute;n de la calidad, admitiendo una serie de errores motivados por lo acelerado de la entrega";
 answers[87] = choices[87][0];
 units[87] = "27";
 comments[87] = "Id Pregunta: 10329. ";


//  Id pregunta: 10367 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  &iquest;Qu&eacute; tipos de holguras puede tener una actividad en un proyecto?";
 choices[88]= new Array();
 choices[88][0] = "Dos: Holgura libre y Holgura total";
 choices[88][1] = "Dos: Holgura independiente y holgura dependiente";
 choices[88][2] = "Tres: Holgura libre, Holgura Independiente y Holgura Total";
 choices[88][3] = "Cuatro: Holgura independentiente, holgura dependiente, holgura libre y holgura total";
 answers[88] = choices[88][2];
 units[88] = "27";
 comments[88] = "Id Pregunta: 10367. ";


//  Id pregunta: 10368 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  La contrataci&oacute;n de un proyecto de tecnolog&iacute;as de la informaci&oacute;n en un ministerio se ha realizado incluyendo un Acuerdo de Nivel de Servicio con una fecha cerrada de entrega de los trabajos. El contratista se va a demorar por problemas con sus recursos humanos asignados al proyecto. El Jefe de Proyecto debe:";
 choices[89]= new Array();
 choices[89][0] = "Proporcionar los recursos humanos, reclut&aacute;ndolos si es preciso del personal del ministerio, que necesita el contratista para que acabe a tiempo el proyecto.";
 choices[89][1] = "Informar a los interesados del proyecto de la demora del proyecto y el sobrecoste que tendr&aacute; el mismo sobre el precio contratado.";
 choices[89][2] = "Disponer de m&aacute;s fondos para pagar al contratista a fin de que acabe antes el proyecto";
 choices[89][3] = "Informar a las partes interesadas del proyecto de la demora del mismo por causa del contratista para la gesti&oacute;n del riesgo asociado, y a los responsables del expediente de contrataci&oacute;n de la penalizaci&oacute;n a aplicar al contratista por no finalizar en tiempo.";
 answers[89] = choices[89][3];
 units[89] = "28";
 comments[89] = "Id Pregunta: 10368. ";


//  Id pregunta: 10738 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  &iquest;Cu&aacute;l es el RD sobre organizaci&oacute;n e instrumentos operativos de las tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones en la Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos conocido como Gobernanza TIC?";
 choices[90]= new Array();
 choices[90][0] = "RD 37/2013";
 choices[90][1] = "RD 802/2014";
 choices[90][2] = "RD 806/2014";
 choices[90][3] = "RD 802/2015";
 answers[90] = choices[90][2];
 units[90] = "24";
 comments[90] = "Id Pregunta: 10738. ";


//  Id pregunta: 10741 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;Con qu&eacute; frecuencia la comisi&oacute;n de estrateg&iacute;a TIC elevar&aacute; su informe al Consejo de Ministros?";
 choices[91]= new Array();
 choices[91][0] = "Mensual";
 choices[91][1] = "Semestral";
 choices[91][2] = "Anual";
 choices[91][3] = "Cada dos a&ntilde;os";
 answers[91] = choices[91][2];
 units[91] = "24";
 comments[91] = "Id Pregunta: 10741. ";


//  Id pregunta: 10742 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Con qu&eacute; frecuencia m&iacute;nima se reunir&aacute; el Pleno de la comisi&oacute;n de estrategia TIC?";
 choices[92]= new Array();
 choices[92][0] = "Mensual";
 choices[92][1] = "Semestral";
 choices[92][2] = "Trimestral";
 choices[92][3] = "Anual";
 answers[92] = choices[92][1];
 units[92] = "24";
 comments[92] = "Id Pregunta: 10742. ";


//  Id pregunta: 10749 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Seg&uacute;n el RD 806/2014 &iquest;Qu&eacute; son medios y servicios en referencia a los medios y servicios compartidos?";
 choices[93]= new Array();
 choices[93][0] = "Todas las actividades, infraestructuras t&eacute;cnicas, instalaciones, aplicaciones, equipos, inmuebles, redes, ficheros electr&oacute;nicos, licencias y dem&aacute;s activos que dan soporte a los sistemas de informaci&oacute;n.";
 choices[93][1] = "Todas las infraestructuras t&eacute;cnicas, instalaciones, aplicaciones, equipos, inmuebles, redes, ficheros electr&oacute;nicos, licencias y dem&aacute;s activos que dan soporte a los sistemas de informaci&oacute;n.";
 choices[93][2] = "Todas las infraestructuras t&eacute;cnicas, instalaciones, aplicaciones, equipos, inmuebles, redes, licencias y dem&aacute;s activos que dan soporte a los sistemas de informaci&oacute;n.";
 choices[93][3] = "Todas las actividades, infraestructuras t&eacute;cnicas, aplicaciones, equipos, inmuebles, redes, ficheros electr&oacute;nicos, licencias y dem&aacute;s activos que dan soporte a los sistemas de informaci&oacute;n.";
 answers[93] = choices[93][0];
 units[93] = "24";
 comments[93] = "Id Pregunta: 10749. ";


//  Id pregunta: 10765 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Qu&eacute; car&aacute;cter tiene el informe t&eacute;cnico de la memoria y los pliegos de prescripciones t&eacute;cnicas para la contrataci&oacute;n de tecnolog&iacute;as de la informaci&oacute;n?";
 choices[94]= new Array();
 choices[94][0] = "Preceptivo";
 choices[94][1] = "Potestativo";
 choices[94][2] = "Informativo";
 choices[94][3] = "Recomendaci&oacute;n";
 answers[94] = choices[94][0];
 units[94] = "24";
 comments[94] = "Id Pregunta: 10765. ";


//  Id pregunta: 10766 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Qu&eacute; plazo se establece para la realizaci&oacute;n del informe t&eacute;cnico de la memoria y los pliegos de prescripciones t&eacute;cnicas para la contrataci&oacute;n de tecnolog&iacute;as de la informaci&oacute;n?";
 choices[95]= new Array();
 choices[95][0] = "1 mes";
 choices[95][1] = "20 d&iacute;as";
 choices[95][2] = "10 d&iacute;as";
 choices[95][3] = "3 meses";
 answers[95] = choices[95][2];
 units[95] = "24";
 comments[95] = "Id Pregunta: 10766. ";


//  Id pregunta: 10767 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;En qu&eacute; fecha se ha aprobado la Estrategia TIC de la AGE por el Consejo de Ministros?";
 choices[96]= new Array();
 choices[96][0] = "Septiembre de 2014";
 choices[96][1] = "Diciembre de 2014";
 choices[96][2] = "Agosto de 2015";
 choices[96][3] = "Octubre de 2015";
 answers[96] = choices[96][3];
 units[96] = "24";
 comments[96] = "Id Pregunta: 10767. ";


//  Id pregunta: 10954 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;C&uacute;al de las siguientes opciones NO es un sistema de control de versiones?";
 choices[97]= new Array();
 choices[97][0] = "Subversion.";
 choices[97][1] = "Git";
 choices[97][2] = "Ruby.";
 choices[97][3] = "SourceSafe.";
 answers[97] = choices[97][2];
 units[97] = "28";
 comments[97] = "Id Pregunta: 10954. TIC A1 AGE 2014";


//  Id pregunta: 11580 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Seg&uacute;n el RD 806/2014 sobre organizaci&oacute;n e instrumentos operativos de las TIC en la AGE y sus organismos p&uacute;blicos, corresponde la declaraci&oacute;n de medios y servicios compartidos a:";
 choices[98]= new Array();
 choices[98][0] = "DTIC, Direcci&oacute;n de Tecnolog&iacute;s de la Informaci&oacute;n y Comunicaciones.";
 choices[98][1] = "CETIC, Comisi&oacute;n de Estrategia TIC, a propuesta de los Ministros de Hacienda y AAPP y de la Presidencia.";
 choices[98][2] = "A la DTIC, a propuesta de las CMADs, Comisiones Ministeriales de Administraci&oacute;n Digital.";
 choices[98][3] = "La CETIC, a propuesta de la DTIC.";
 answers[98] = choices[98][3];
 units[98] = "24";
 comments[98] = "Id Pregunta: 11580. NULL";


//  Id pregunta: 11774 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;C&oacute;mo se llama la unidad encargada de la contrataci&oacute;n centralizada en el &aacute;mbito de la Administraci&oacute;n General del Estado?";
 choices[99]= new Array();
 choices[99][0] = "Subdirecci&oacute;n General de Compras";
 choices[99][1] = "Central de Compras Estatal";
 choices[99][2] = "Direcci&oacute;n General de Racionalizaci&oacute;n y Centralizaci&oacute;n de la Contrataci&oacute;n&nbsp;";
 choices[99][3] = "Direcci&oacute;n General de Patrimonio del Estado";
 answers[99] = choices[99][2];
 units[99] = "41, 24";
 comments[99] = "Id Pregunta: 11774. ";


