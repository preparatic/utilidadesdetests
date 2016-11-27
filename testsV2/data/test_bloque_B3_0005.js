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

//  Id pregunta: 1987 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de los siguientes modelos de estimaci&oacute;n es te&oacute;rico?:";
 choices[0]= new Array();
 choices[0][0] = "COCOMO";
 choices[0][1] = "Putnam";
 choices[0][2] = "Modelo del punto de funci&oacute;n";
 choices[0][3] = "Modelo de puntos de casos de uso";
 answers[0] = choices[0][1];
 units[0] = "89";
 comments[0] = "Id Pregunta: 1987. NULL";


//  Id pregunta: 2005 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  Son elementos de un DFD:";
 choices[1]= new Array();
 choices[1][0] = "eventos, nodos, entidades externas, flujos de datos";
 choices[1][1] = "eventos, entidades externas, procesos, almacenes de datos, flujos de datos";
 choices[1][2] = "entidades externas, procesos, almacenes de datos, flujos de datos";
 choices[1][3] = "entidades externas, nodos, flujos de datos";
 answers[1] = choices[1][2];
 units[1] = "86";
 comments[1] = "Id Pregunta: 2005. Similar a examen TIC MAP A 2004";


//  Id pregunta: 2006 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  Sobre el m&eacute;todo de los puntos de funci&oacute;n puede decirse que:";
 choices[2]= new Array();
 choices[2][0] = "se basa en el n&uacute;mero de l&iacute;neas de c&oacute;digo";
 choices[2][1] = "es independiente del c&oacute;digo";
 choices[2][2] = "es una m&eacute;trica de complejidad";
 choices[2][3] = "es una m&eacute;trica de fiabilidad";
 answers[2] = choices[2][1];
 units[2] = "89";
 comments[2] = "Id Pregunta: 2006. Similar a examen TIC MAP A 2004";


//  Id pregunta: 2013 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  El denominado &quot;modelo de desarrollo concurrente&quot; del ciclo de vida";
 choices[3]= new Array();
 choices[3][0] = "Es una variante del Modelo en Espiral Cl&aacute;sico";
 choices[3][1] = "Es una variante del Modelo Lienal o en Cascada";
 choices[3][2] = "S&oacute;lo es apropiado para aplicaciones de Miner&iacute;a de Datos u OLAP";
 choices[3][3] = "Est&aacute; espec&iacute;ficamente concebido para sistemas multiprocesador";
 answers[3] = choices[3][0];
 units[3] = "76";
 comments[3] = "Id Pregunta: 2013. Examen TIC MAP B 2004";


//  Id pregunta: 2014 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  La responsabilidad de los analistas, de acuerdo con M&Eacute;TRICA, es:";
 choices[4]= new Array();
 choices[4][0] = "Realizar las entrevistas al usuario";
 choices[4][1] = "Elaborar un cat&aacute;logo detallado de requisitos que permita describir con precisi&oacute;n el sistema de informaci&oacute;n";
 choices[4][2] = "Establecer la plataforma id&oacute;nea hardware/software que debe dar satisfacci&oacute;n a las necesidades";
 choices[4][3] = "Dirigir a los programadores";
 answers[4] = choices[4][1];
 units[4] = "86";
 comments[4] = "Id Pregunta: 2014. Examen TIC MAP B 2004";


//  Id pregunta: 2067 AÃ±o de creación de pregunta: 2004-01-01
 questions[5]= "6)  &iquest;En qu&eacute; fase se hace el modelo l&oacute;gico de datos?";
 choices[5]= new Array();
 choices[5][0] = "Dise&ntilde;o";
 choices[5][1] = "Estudio de viabilidad";
 choices[5][2] = "An&aacute;lisis orientado a objetos";
 choices[5][3] = "An&aacute;lisis estructurado";
 answers[5] = choices[5][3];
 units[5] = "86";
 comments[5] = "Id Pregunta: 2067. SS-A 2004";


//  Id pregunta: 2103 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  La principal diferencia entre las bases de datos documentales respecto a las normales como pueden ser bases de datos relacionales es:";
 choices[6]= new Array();
 choices[6][0] = "Pueden crearse &iacute;ndices por cualquier campo que se desee";
 choices[6][1] = "Los indices se almacenan dentro de la base de datos";
 choices[6][2] = "Pueden crease indices de m&aacute;s de una palabra";
 choices[6][3] = "Indexaci&oacute;n de partes del contenido de un campo";
 answers[6] = choices[6][3];
 units[6] = "96";
 comments[6] = "Id Pregunta: 2103. ";


//  Id pregunta: 2124 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta sobre el &quot;Downsizing&quot;?";
 choices[7]= new Array();
 choices[7][0] = "El downsizing centraliza los procesos en sistemas tipo main-frame.";
 choices[7][1] = "Pretende acercar el proceso all&iacute; donde se va a realizar.";
 choices[7][2] = "Acerca los servidores a los Centros de Proceso de Datos m&aacute;s proximos a la gerencia de la empresa.";
 choices[7][3] = "Siempre que se hace downsizing se pide autorizaci&oacute;n al usuario afectado.";
 answers[7] = choices[7][1];
 units[7] = "90";
 comments[7] = "Id Pregunta: 2124. ";


//  Id pregunta: 2128 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto al modelo EFQM?";
 choices[8]= new Array();
 choices[8][0] = "El modelo clasifica los 9 elementos en agentes y resultados";
 choices[8][1] = "La satisfacci&oacute;n del personal es uno de los agentes";
 choices[8][2] = "Los resultados econ&oacute;micos se encuentran entre los resultados";
 choices[8][3] = "La gesti&oacute;n de personal es uno de los agentes";
 answers[8] = choices[8][1];
 units[8] = "92";
 comments[8] = "Id Pregunta: 2128. NULL";


//  Id pregunta: 2130 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto de UML?";
 choices[9]= new Array();
 choices[9][0] = "Los diagramas de secuencia muestran interacciones entre elementos desde el punto de vista temporal";
 choices[9][1] = "Los diagramas de estados-transiciones visualizan aut&oacute;matas de estados finitos";
 choices[9][2] = "La notaci&oacute;n UML proviene de la fusi&oacute;n de las notaciones Booch, OMT, OOSE y otras";
 choices[9][3] = "Todas las anteriores respuestas son ciertas";
 answers[9] = choices[9][3];
 units[9] = "82";
 comments[9] = "Id Pregunta: 2130. ";


//  Id pregunta: 2143 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas tiene una visi&oacute;n evolutiva?:";
 choices[10]= new Array();
 choices[10][0] = "Diagrama de flujo de datos";
 choices[10][1] = "Diagrama de estructura de datos";
 choices[10][2] = "Historia de la vida de las entidades";
 choices[10][3] = "Ninguna de las anteriores, ya que son t&eacute;cnicas orientadas a datos o flujos";
 answers[10] = choices[10][2];
 units[10] = "81";
 comments[10] = "Id Pregunta: 2143. ";


//  Id pregunta: 2155 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Cu&aacute;l de los siguientes no es un objetivo del plan de contingencias?";
 choices[11]= new Array();
 choices[11][0] = "Minimizar las interrupciones en la operaci&oacute;n normal";
 choices[11][1] = "Limitar la extensi&oacute;n de las interrupciones y de los da&ntilde;os que produzcan";
 choices[11][2] = "Analizar da&ntilde;os y estimar costes";
 choices[11][3] = "Posibilitar la vuelta al servicio r&aacute;pida y sencilla";
 answers[11] = choices[11][2];
 units[11] = "86";
 comments[11] = "Id Pregunta: 2155. NULL";


//  Id pregunta: 2174 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  La definici&oacute;n recursiva de los conceptos de un modelo a partir de elementos del propio modelo se denomina:";
 choices[12]= new Array();
 choices[12][0] = "Intramodelado.";
 choices[12][1] = "Modelado interno.";
 choices[12][2] = "Automodelado.";
 choices[12][3] = "Metamodelado.";
 answers[12] = choices[12][3];
 units[12] = "";
 comments[12] = "Id Pregunta: 2174. ";


//  Id pregunta: 2175 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  La definici&oacute;n: &ldquo;Es el proceso de analizar un sistema para identificar los componentes y las interrelaciones entre ellos, creando representaciones del sistema en otra forma distinta a la original o bien a un nivel superior de abstracci&oacute;n&rdquo;, corresponde a:";
 choices[13]= new Array();
 choices[13][0] = "Restructuraci&oacute;n (Restructuring).";
 choices[13][1] = "Ingenier&iacute;a Inversa (Reverse Engineering).";
 choices[13][2] = "Ingenier&iacute;a hacia adelante (Forward Engineering).";
 choices[13][3] = "Reingenier&iacute;a (Reengineering).";
 answers[13] = choices[13][1];
 units[13] = "91";
 comments[13] = "Id Pregunta: 2175. ";


//  Id pregunta: 2188 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  &iquest;Cu&aacute;les de las siguientes cuestiones conciernen al an&aacute;lisis de requerimientos?:";
 choices[14]= new Array();
 choices[14][0] = "Criterios de prueba y evaluaci&oacute;n del producto software obtenido";
 choices[14][1] = "Descripci&oacute;n detallada de las funciones";
 choices[14][2] = "Estructura de la base de datos";
 choices[14][3] = "Son ciertas las respuestas &lsquo;a&rsquo; y &lsquo;c&rsquo;";
 answers[14] = choices[14][0];
 units[14] = "78";
 comments[14] = "Id Pregunta: 2188. ";


//  Id pregunta: 2192 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  &iquest;Cu&aacute;les son los objetivos del dise&ntilde;o estructurado?";
 choices[15]= new Array();
 choices[15][0] = "M&aacute;xima portabilidad del sistema, minimizar el coste asociado al mantenimiento, facilitar la prueba, integraci&oacute;n del sistema.";
 choices[15][1] = "M&aacute;xima portabilidad del sistema, minimizar el coste asociado al mantenimiento, facilitar la prueba, modularizaci&oacute;n del sistema.";
 choices[15][2] = "M&aacute;xima inteligibilidad del sistema, minimizar el coste asociado al mantenimiento, facilitar la prueba, modularizaci&oacute;n del sistema.";
 choices[15][3] = "M&aacute;xima inteligibilidad del sistema, minimizar el coste asociado al mantenimiento, facilitar la prueba, integraci&oacute;n del sistema.";
 answers[15] = choices[15][3];
 units[15] = "84";
 comments[15] = "Id Pregunta: 2192. ";


//  Id pregunta: 2245 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  Del modelo clasico de ciclo de vida en cascada puede afirmarse que:";
 choices[16]= new Array();
 choices[16][0] = "El usuario valida el resultado de cada una de las fases";
 choices[16][1] = "Proporciona resultados parciales para validaci&oacute;n de requisitos";
 choices[16][2] = "Est&aacute; regido por la documentaci&oacute;n, que marca la transici&oacute;n entre fases";
 choices[16][3] = "Est&aacute; dirigido por el riesgo";
 answers[16] = choices[16][2];
 units[16] = "76";
 comments[16] = "Id Pregunta: 2245. ";


//  Id pregunta: 2249 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Dentro de las T&eacute;cnicas de Gesti&oacute;n de Proyectos que se recogen en la Guia de T&eacute;cnicas de METRICA 3, en el apartado de Planificaci&oacute;n, no se encuetra:";
 choices[17]= new Array();
 choices[17][0] = "Program Evaluation &amp; Review Technique";
 choices[17][1] = "Diagramas de Gantt";
 choices[17][2] = "Diagrama de Extrapolaci&oacute;n";
 choices[17][3] = "Diagrama de Regresi&oacute;n";
 answers[17] = choices[17][3];
 units[17] = "86";
 comments[17] = "Id Pregunta: 2249. NULL";


//  Id pregunta: 2267 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  El criterio 7 en el modelo EFQM de excelencia es el referente a:";
 choices[18]= new Array();
 choices[18][0] = "Las alianzas y los recursos";
 choices[18][1] = "Los procesos";
 choices[18][2] = "Los resultados en la sociedad";
 choices[18][3] = "Los resultados en los clientes";
 answers[18] = choices[18][3];
 units[18] = "92";
 comments[18] = "Id Pregunta: 2267. NULL";


//  Id pregunta: 2274 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  El esquema formal de clasificaci&oacute;n de proyectos inform&aacute;ticos que propone el PGGC (Plan General de Garant&iacute;a de Calidad), consta de varios elementos fundamentales, identifique - entre los siguientes - el elemento falso:";
 choices[19]= new Array();
 choices[19][0] = "Modelo de referencia";
 choices[19][1] = "Perfil de riesgos";
 choices[19][2] = "Foco de inter&eacute;s";
 choices[19][3] = "Establecimiento de la tipolog&iacute;a";
 answers[19] = choices[19][3];
 units[19] = "88";
 comments[19] = "Id Pregunta: 2274. ";


//  Id pregunta: 2303 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  En an&aacute;lisis estructurado, el principal objetivo de un DFD es:";
 choices[20]= new Array();
 choices[20][0] = "Construir un modelo l&oacute;gico del sistema que facilite la comprensi&oacute;n del mismo, tanto por parte de los usuarios como del equipo de desarrollo";
 choices[20][1] = "Representar gr&aacute;ficamente las necesidades de informaci&oacute;n que posee el sistema, de forma estructurada, met&oacute;dica y sencilla";
 choices[20][2] = "Describir la evoluci&oacute;n de las entidades de datos del sistema en el tiempo";
 choices[20][3] = "Establecer una serie de m&eacute;todos orientados a la descripci&oacute;n pormenorizada del proceso a seguir para el tratamiento de un problema determinado y su posterior resoluci&oacute;n";
 answers[20] = choices[20][0];
 units[20] = "81";
 comments[20] = "Id Pregunta: 2303. ";


//  Id pregunta: 2324 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  En la medici&oacute;n de la productividad en el software orientado a objetos, &iquest;cu&aacute;l de los siguientes criterios es el m&aacute;s importante?:";
 choices[21]= new Array();
 choices[21][0] = "La cantidad de software producido por unidad de tiempo";
 choices[21][1] = "La reutilizaci&oacute;n del software producido";
 choices[21][2] = "El seguimiento estricto de una metodolog&iacute;a";
 choices[21][3] = "La calidad de software en cu&aacute;nto al cumplimiento de la funcionalidad requerida";
 answers[21] = choices[21][1];
 units[21] = "88";
 comments[21] = "Id Pregunta: 2324. ";


//  Id pregunta: 2401 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  La modularizaci&oacute;n hace referencia a:";
 choices[22]= new Array();
 choices[22][0] = "Aislar funciones bien definidas.";
 choices[22][1] = "Reflejar la estructura de la organizaci&oacute;n de modo que facilite su comprensi&oacute;n.";
 choices[22][2] = "Correcta definici&oacute;n de las interfaces internas y externas, que permita ignorar la estructura interna de los m&oacute;dulos.";
 choices[22][3] = "Persigue que la arquitectura t&eacute;cnica del sistema se fundamente en m&oacute;dulos de peque&ntilde;o tama&ntilde;o.";
 answers[22] = choices[22][3];
 units[22] = "84";
 comments[22] = "Id Pregunta: 2401. ";


//  Id pregunta: 2404 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  &iquest;Qu&eacute; es EMACS?:";
 choices[23]= new Array();
 choices[23][0] = "Una plataforma de intercambio de ideas sobre mejoras futuras de ordenadores Apple";
 choices[23][1] = "Un editor ASCII con indentaciones autom&aacute;ticas y coloreado sint&aacute;ctico seg&uacute;n lenguaje";
 choices[23][2] = "Un est&aacute;ndar de facto de plataformas de comercio electr&oacute;nico";
 choices[23][3] = "Nada de lo anterior es correcto";
 answers[23] = choices[23][1];
 units[23] = "62";
 comments[23] = "Id Pregunta: 2404. ";


//  Id pregunta: 2443 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Las herramientas CASE se emplean con objeto de:";
 choices[24]= new Array();
 choices[24][0] = "Aumentar la productividad";
 choices[24][1] = "Controlar riesgos";
 choices[24][2] = "Asegurar la calidad";
 choices[24][3] = "Reutilizar c&oacute;digo";
 answers[24] = choices[24][0];
 units[24] = "86";
 comments[24] = "Id Pregunta: 2443. NULL";


//  Id pregunta: 2460 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Los modelos de ciclo de vida que incluyen prototipos software desechables, se realizan por la necesidad de ...";
 choices[25]= new Array();
 choices[25][0] = "Acortar el tiempo de implementaci&oacute;n facilitando la reutilizaci&oacute;n de software";
 choices[25][1] = "Mejorar la comprensi&oacute;n de los requisitos del sistema a dise&ntilde;ar";
 choices[25][2] = "Facilitar el mantenimiento del sistema";
 choices[25][3] = "La utilizaci&oacute;n de sistemas CASE que facilitan el desarrollo del prototipo";
 answers[25] = choices[25][1];
 units[25] = "76";
 comments[25] = "Id Pregunta: 2460. ";


//  Id pregunta: 2473 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  No es una de las formas de aplicar COCOMO:";
 choices[26]= new Array();
 choices[26][0] = "B&aacute;sico";
 choices[26][1] = "Avanzado";
 choices[26][2] = "Intermedio";
 choices[26][3] = "Asistido";
 answers[26] = choices[26][3];
 units[26] = "89";
 comments[26] = "Id Pregunta: 2473. NULL";


//  Id pregunta: 2484 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  Respecto al an&aacute;lisis y gesti&oacute;n en un proyecto inform&aacute;tico, indique cual de las siguientes afirmaciones es correcta:";
 choices[27]= new Array();
 choices[27][0] = "Las medidas preventivas est&aacute;n encaminadas a reducir los da&ntilde;os que puedan causar determinados incidentes";
 choices[27][1] = "El plan de contingencia contendr&aacute; las medidas preventivas adoptadas";
 choices[27][2] = "El plan de emergencia recoge las normas de actuaci&oacute;n durante o inmediatamente despu&eacute;s de cada fallo o da&ntilde;o";
 choices[27][3] = "Las medidas de correci&oacute;n van encaminadas a reducir la probabilidad de ocurrencia de incidentes";
 answers[27] = choices[27][2];
 units[27] = "32";
 comments[27] = "Id Pregunta: 2484. ";


//  Id pregunta: 2496 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  Se&ntilde;ale de las siguientes respuestas la que es una funci&oacute;n propia del responsable de producci&oacute;n y sistemas:";
 choices[28]= new Array();
 choices[28][0] = "Establecer los planes de pruebas de cada aplicaci&oacute;n";
 choices[28][1] = "Definir una metodolog&iacute;a para el desarrollo de aplicaciones";
 choices[28][2] = "Planificar y evaluar el crecimiento del almacenamiento de datos";
 choices[28][3] = "Establecer los procedimientos para la gesti&oacute;n de la organizaci&oacute;n";
 answers[28] = choices[28][2];
 units[28] = "97";
 comments[28] = "Id Pregunta: 2496. NULL";


//  Id pregunta: 2503 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  UML se corresponde con:";
 choices[29]= new Array();
 choices[29][0] = "Unstructured Markup Language, Lenguaje Estructurado de Marcaci&oacute;n.";
 choices[29][1] = "Unified Multimedia Language, Lenguaje Multimedia Unificado.";
 choices[29][2] = "Unified Modelling Language, Lenguaje Unificado de Modelado.";
 choices[29][3] = "Universal Modelling Language, Lenguaje de Modelado Universal";
 answers[29] = choices[29][2];
 units[29] = "82,84";
 comments[29] = "Id Pregunta: 2503. ";


//  Id pregunta: 2562 AÃ±o de creación de pregunta: 2004-01-01
 questions[30]= "31)  &iquest;Qu&eacute; significa que una Organizaci&oacute;n esta en el Nivel 2 del CMM?";
 choices[30]= new Array();
 choices[30][0] = "En este nivel se logran establecer las pol&iacute;ticas para adminsitrar un proyecto de software y los procedimientos para lograrlo, esto se realiza en base a la experiencia obtenida en proyectos similares.";
 choices[30][1] = "En este nivel, el proceso est&aacute;ndar para el desarrollo y mantenimiento de software se documenta, tanto desde el punto de vista t&eacute;cnico como administrativo. Se explotan efectivamente pr&aacute;cticas de ingenier&iacute;a de software para estandarizar los procesos.";
 choices[30][2] = "Todas son correctas";
 choices[30][3] = "En este nivel la empresa carece de buenas pr&aacute;cticas de ingenier&iacute;a de software, ni existe una planeaci&oacute;n efectiva. Los proyectos generalmente abandonan los planes realizados en etapas de crisis.";
 answers[30] = choices[30][0];
 units[30] = "87,88,92";
 comments[30] = "Id Pregunta: 2562. ";


//  Id pregunta: 2607 AÃ±o de creación de pregunta: 2003-01-01
 questions[31]= "32)  &iquest;Cu&aacute;l de estas afirmaciones es falsa?";
 choices[31]= new Array();
 choices[31][0] = "Dentro del An&aacute;lisis de Requisitos, un m&eacute;todo adecuado para decidir la mejor alternativa es el retorno de la inversi&oacute;n, que permite saber en qu&eacute; a&ntilde;o se recupera el coste total inicialmente estimado.";
 choices[31][1] = "Dentro del An&aacute;lisis de Requisitos, en la selecci&oacute;n de la alternativa m&aacute;s adecuada, si se hace una estimaci&oacute;n de Costes / Beneficios no se tendr&aacute;n en cuenta los costes de mantenimiento.";
 choices[31][2] = "El An&aacute;lisis Coste / Beneficio tiene como objetivo proporcionar una medida de los costes en que se incurre en la realizaci&oacute;n de un proyecto inform&aacute;tico y compara dichos costes previstos con los beneficios esperados de la realizaci&oacute;n de dicho proyecto.";
 choices[31][3] = "Dentro de la selecci&oacute;n de alternativas en el An&aacute;lisis de Requisitos, para cada alternativa se consideran los beneficios para el usuario y los beneficios t&eacute;cnicos";
 answers[31] = choices[31][1];
 units[31] = "86,38,78";
 comments[31] = "Id Pregunta: 2607. ";


//  Id pregunta: 2646 AÃ±o de creación de pregunta: 2003-01-01
 questions[32]= "33)  En el modelo Entidad/Relaci&oacute;n extendido las relaciones d&eacute;biles:";
 choices[32]= new Array();
 choices[32][0] = "Son las que existen entre entidades d&eacute;biles";
 choices[32][1] = "&Uacute;nicamente las que existen entre una entidad regular y otra entidad d&eacute;bil cuya identificaci&oacute;n depende de la identificaci&oacute;n de la anterior.";
 choices[32][2] = "Son las que existen entre una entidad regular y otra entidad d&eacute;bil, independientemente de que la dependencia sea por identificaci&oacute;n o existencia.";
 choices[32][3] = "Son las que existen entre una entidad regular y otra entidad d&eacute;bil cuya existencia no depende de la existencia de la anterior.";
 answers[32] = choices[32][2];
 units[32] = "58,80";
 comments[32] = "Id Pregunta: 2646. ";


//  Id pregunta: 2650 AÃ±o de creación de pregunta: 2003-01-01
 questions[33]= "34)  Indicar la afirmaci&oacute;n falsa sobre Diagramas del Flujo de Datos";
 choices[33]= new Array();
 choices[33][0] = "No se puede representar flujos de datos entre almacenes y entidades externas";
 choices[33][1] = "Se pueden representar relaciones entre entidades externas ";
 choices[33][2] = "No se debe representar la clave de acceso al almac&eacute;n sino s&oacute;lo la operaci&oacute;n que se realice en el almac&eacute;n";
 choices[33][3] = "Un flujo de datos entre dos procesos s&oacute;lo es posible cuando la informaci&oacute;n es s&iacute;ncrona";
 answers[33] = choices[33][1];
 units[33] = "81";
 comments[33] = "Id Pregunta: 2650. ";


//  Id pregunta: 2669 AÃ±o de creación de pregunta: 2003-01-01
 questions[34]= "35)  En im&aacute;genes multiespectrales el an&aacute;lisis de componentes principales sirve para:";
 choices[34]= new Array();
 choices[34][0] = "Eliminar ruidos.";
 choices[34][1] = "Eliminaci&oacute;n de informaci&oacute;n redundante.";
 choices[34][2] = "Enmascaramiento o reducci&oacute;n de ciertos efectos atmosf&eacute;ricos o topogr&aacute;ficos.";
 choices[34][3] = "Poder superponer im&aacute;genes de cara a su posterior tratamiento.";
 answers[34] = choices[34][1];
 units[34] = "93";
 comments[34] = "Id Pregunta: 2669. NULL";


//  Id pregunta: 2674 AÃ±o de creación de pregunta: 2003-01-01
 questions[35]= "36)  En los Sistemas de Recuperaci&oacute;n de Informaci&oacute;n la t&eacute;cnica de Sistemas Expertos consiste en:";
 choices[35]= new Array();
 choices[35][0] = "Expresar las consultas como solicitudes de textos relevantes con relaci&oacute;n a un t&oacute;pico particular, produci&eacute;ndose a continuaci&oacute;n la b&uacute;squeda en la base de conocimientos mediante activaci&oacute;n de reglas, que producen finalmente una relaci&oacute;n clasificada de texto";
 choices[35][1] = "Expresar las consultas como solicitudes de textos relevantes con relaci&oacute;n a varios t&oacute;picos, produci&eacute;ndose a continuaci&oacute;n la b&uacute;squeda en la base de conocimientos mediante activaci&oacute;n de reglas, que producen finalmente una relaci&oacute;n clasificada de textos pote";
 choices[35][2] = "Expresar las consultas como solicitudes de textos relevantes con relaci&oacute;n a un t&oacute;pico particular, produci&eacute;ndose a continuaci&oacute;n la b&uacute;squeda en la base de conocimientos mediante consulta de &iacute;ndices invertidos, que producen finalmente una relaci&oacute;n clasificad";
 choices[35][3] = "Expresar las consultas como solicitudes de textos relevantes con relaci&oacute;n a un t&oacute;pico particular, produci&eacute;ndose a continuaci&oacute;n la b&uacute;squeda en la base de conocimientos mediante activaci&oacute;n de reglas, que producen finalmente una relaci&oacute;n de textos presentes ";
 answers[35] = choices[35][0];
 units[35] = "96";
 comments[35] = "Id Pregunta: 2674. NULL";


//  Id pregunta: 2681 AÃ±o de creación de pregunta: 2003-01-01
 questions[36]= "37)  Indique la afirmaci&oacute;n verdadera:";
 choices[36]= new Array();
 choices[36][0] = "La informaci&oacute;n recogida por la c&eacute;lula fotoel&eacute;ctrica del esc&aacute;ner es de tipo anal&oacute;gica.";
 choices[36][1] = "En el caso de los esc&aacute;neres de color, el sistema de detecci&oacute;n consiste en separar los componentes de color en sus valores b&aacute;sicos: rojo, verde y azul.";
 choices[36][2] = "La exploraci&oacute;n se realiza mediante c&eacute;lulas fotoel&eacute;ctricas o fotodiodos y el resultado es una informaci&oacute;n que hay que digitalizar antes de que se pueda transmitir al ordenador, que es capaz de procesarla mediante sistemas gr&aacute;ficos y software especial.";
 choices[36][3] = "Todas las anteriores.";
 answers[36] = choices[36][3];
 units[36] = "93";
 comments[36] = "Id Pregunta: 2681. NULL";


//  Id pregunta: 2682 AÃ±o de creación de pregunta: 2003-01-01
 questions[37]= "38)  Indique la afirmaci&oacute;n verdadera:";
 choices[37]= new Array();
 choices[37][0] = "El reconocimiento de patrones se utiliza para reconocer caracteres mono-espaciados.";
 choices[37][1] = "En la comparaci&oacute;n matricial los caracteres explorados pueden entrar en un bucle de b&uacute;squeda varias veces hasta que el emparejamiento se realiza con &eacute;xito.";
 choices[37][2] = "La comparaci&oacute;n matricial escanea la forma de los caracteresm, los compara con tablas de formas y examina la organizaci&oacute;n de los bits para  componer la letra o car&aacute;cter.";
 choices[37][3] = "La comparaci&oacute;n matricial ofrece mucha m&aacute;s flexibilidad que el m&eacute;todo de reconocimiento de patrones.";
 answers[37] = choices[37][1];
 units[37] = "94";
 comments[37] = "Id Pregunta: 2682. ";


//  Id pregunta: 2725 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  Una Planificaci&oacute;n Estrat&eacute;gica se caracteriza por:";
 choices[38]= new Array();
 choices[38][0] = "Fijar los objetivos generales de la organizaci&oacute;n.";
 choices[38][1] = "Llevarse a cabo por los altos directivos de la organizaci&oacute;n y por los responsables de los escalonesintermedios.";
 choices[38][2] = "Definir las pol&iacute;ticas y estrategias de la organizaci&oacute;n a corto plazo para la consecuci&oacute;n de losobjetivos concretos que se hayan fijado.";
 choices[38][3] = "Son correctas todas las afirmaciones anteriores.";
 answers[38] = choices[38][0];
 units[38] = "77";
 comments[38] = "Id Pregunta: 2725. ";


//  Id pregunta: 2736 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  Cuando hablamos del concepto de Almac&eacute;n de Datos en An&aacute;lisis Estructurado. Cual de las siguientes afirmaciones es falsa.";
 choices[39]= new Array();
 choices[39][0] = "Pueden  ser permanentes o temporales";
 choices[39][1] = "No crean informaci&oacute;n";
 choices[39][2] = "Son  accesibles desde entidades externas.";
 choices[39][3] = "Son accesibles s&oacute;lo desde los procesos";
 answers[39] = choices[39][2];
 units[39] = "79,81";
 comments[39] = "Id Pregunta: 2736. ";


//  Id pregunta: 2776 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  Sobre la elaboraci&oacute;n de un prototipo se puede decir...";
 choices[40]= new Array();
 choices[40][0] = "La determinaci&oacute;n de los requerimientos de una aplicaci&oacute;n es tan importante para el m&eacute;todo de desarrollo de prototipos como lo es para el ciclo de desarrollo de sistemas o an&aacute;lisis estructurado.";
 choices[40][1] = "No deben realizarse si existe poca informaci&oacute;n disponible con respecto a las caracteristicas  de la aplicaci&oacute;n.";
 choices[40][2] = "No es necesario seguir los est&aacute;ndares de datos definidos en la organizaci&oacute;n.";
 choices[40][3] = "Son convenientes sea cual sea la aplicaci&oacute;n final.";
 answers[40] = choices[40][0];
 units[40] = "85";
 comments[40] = "Id Pregunta: 2776. ";


//  Id pregunta: 2778 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  La utilizaci&oacute;n de prototipos tiene como objetivo/s:";
 choices[41]= new Array();
 choices[41][0] = "Reducir el riesgo del proyecto";
 choices[41][1] = "Conseguir mayor aceptaci&oacute;n del sistema final por el &aacute;rea usuaria";
 choices[41][2] = "Definir con exactitud los requisitos de los usuarios";
 choices[41][3] = "las respuestas a) y b) son correctas";
 answers[41] = choices[41][0];
 units[41] = "85";
 comments[41] = "Id Pregunta: 2778. ";


//  Id pregunta: 2849 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  A los sintetizadores de formantes tambi&eacute;n se les conoce como ";
 choices[42]= new Array();
 choices[42][0] = "sintetizadores articulatorios";
 choices[42][1] = "sintetizadores por al&oacute;fonos";
 choices[42][2] = "sintetizadores por reglas";
 choices[42][3] = "sintetizadores por concatenaci&oacute;n controlada";
 answers[42] = choices[42][2];
 units[42] = "94";
 comments[42] = "Id Pregunta: 2849. ";


//  Id pregunta: 2850 AÃ±o de creación de pregunta: 2006-01-01
 questions[43]= "44)  Entre los factores de complejidad del Habla no se encuentra";
 choices[43]= new Array();
 choices[43][0] = "el locutor";
 choices[43][1] = "el vocabulario";
 choices[43][2] = "la Gram&aacute;tica";
 choices[43][3] = "todos los anteriores son factores de complejidad del Habla";
 answers[43] = choices[43][3];
 units[43] = "94";
 comments[43] = "Id Pregunta: 2850. ";


//  Id pregunta: 2868 AÃ±o de creación de pregunta: 2006-01-01
 questions[44]= "45)  &iquest;Qu&eacute; t&eacute;cnica de recuperaci&oacute;n se basan en la observaci&oacute;n de las frecuencias de aparici&oacute;n de t&eacute;rminos?";
 choices[44]= new Array();
 choices[44][0] = "l&oacute;gica borrosa";
 choices[44][1] = "modelos probabil&iacute;sticos";
 choices[44][2] = "modelos vectoriales";
 choices[44][3] = "lenguaje natural";
 answers[44] = choices[44][2];
 units[44] = "96";
 comments[44] = "Id Pregunta: 2868. NULL";


//  Id pregunta: 2878 AÃ±o de creación de pregunta: 2006-01-01
 questions[45]= "46)  &iquest; Cu&aacute;l de las siguientes normas se ha tenido en cuenta como referencia principal en M&Eacute;TRICA versi&oacute;n 3?";
 choices[45]= new Array();
 choices[45][0] = "ISO/IEC TR 16.502/SPICE";
 choices[45][1] = "ISO 12.207";
 choices[45][2] = "IEEE 600.11-1990";
 choices[45][3] = "UNE-EN-ISO 9001:2000";
 answers[45] = choices[45][1];
 units[45] = "86";
 comments[45] = "Id Pregunta: 2878. NULL";


//  Id pregunta: 4301 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  Un diagrama de transici&oacute;n de estados, utilizando como t&eacute;cnica en M&eacute;trica Versi&oacute;n 3:";
 choices[46]= new Array();
 choices[46][0] = "Puede tener varios estados iniciales y varios estados finales.";
 choices[46][1] = "S&oacute;lo puede tener un estado inicial y un estado final";
 choices[46][2] = "Puede tener varios estados iniciales y s&oacute;lo un estado final.";
 choices[46][3] = "S&oacute;lo puede tener un estado inicial y puede tener varios estados finales.";
 answers[46] = choices[46][3];
 units[46] = "86";
 comments[46] = "Id Pregunta: 4301. NULL";


//  Id pregunta: 4302 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  Una vez obtenido el Diagrama de Flujo de Datos y el Modelo L&oacute;gico Normalizado, se debe comprobar que:";
 choices[47]= new Array();
 choices[47][0] = "Cada almac&eacute;n del Diagrama de Flujo de Datos se corresponde con una y s&oacute;lo una entidad del Modelo L&oacute;gico Normalizado";
 choices[47][1] = "Cada almac&eacute;n del Diagrama de Flujo de Datos se corresponde con una o varias entidades del Modelo L&oacute;gico Normalizado";
 choices[47][2] = "Cada entidad del Modelo L&oacute;gico Normalizado se corresponde con uno o varios almacenes del Diagrama de Flujo de Datos";
 choices[47][3] = "Cada flujo del Diagrama de Flujo de Datos se almacena en una o varias entidades del Modelo L&oacute;gico Normalizado.";
 answers[47] = choices[47][1];
 units[47] = "81";
 comments[47] = "Id Pregunta: 4302. ";


//  Id pregunta: 4471 AÃ±o de creación de pregunta: 2007-01-01
 questions[48]= "49)  Seg&uacute;n indica m&eacute;trica V3, a la hora de planificar el desarrollo de un sistema de informaci&oacute;n, &iquest;que acci&oacute;n no tendr&iacute;a sentido?";
 choices[48]= new Array();
 choices[48][0] = "Dise&ntilde;o del modelo de sistemas de informaci&oacute;n.";
 choices[48][1] = "Definici&oacute;n de la arquitectura tecnol&oacute;gica.";
 choices[48][2] = "Dise&ntilde;o de los procedimientos de migraci&oacute;n.";
 choices[48][3] = "Identificaci&oacute;n de requisitos.";
 answers[48] = choices[48][2];
 units[48] = "86";
 comments[48] = "Id Pregunta: 4471. NULL";


//  Id pregunta: 4473 AÃ±o de creación de pregunta: 2007-01-01
 questions[49]= "50)  &iquest;Que se entiende por el conjunto de t&eacute;cnicas para iniciar, evaluar e implementar cambios en un producto software manteniendo su integridad?";
 choices[49]= new Array();
 choices[49][0] = "Metodolog&iacute;a.";
 choices[49][1] = "Gesti&oacute;n de Configuraci&oacute;n Software.";
 choices[49][2] = "Ingenier&iacute;a Inversa.";
 choices[49][3] = "An&aacute;lisis y Dise&ntilde;o de Sistemas de Informaci&oacute;n.";
 answers[49] = choices[49][1];
 units[49] = "76";
 comments[49] = "Id Pregunta: 4473. ";


//  Id pregunta: 4579 AÃ±o de creación de pregunta: 2007-01-01
 questions[50]= "51)  En un entorno CASE integrado es correcto afirmar que";
 choices[50]= new Array();
 choices[50][0] = "para la integraci&oacute;n de las herramientas CASE es imprescindible disponer de un SGBD relacional.";
 choices[50][1] = "la arquitectura es de dos capas, Ia capa de interfaz y la capa de herramientas.";
 choices[50][2] = "el repositorio CASE establece un modelo de datos al que pueden acceder todas las herramientas del entorno.";
 choices[50][3] = "no ofrece ningun beneficio frente a un entorno CASE individual.";
 answers[50] = choices[50][2];
 units[50] = "";
 comments[50] = "Id Pregunta: 4579. ";


//  Id pregunta: 4862 AÃ±o de creación de pregunta: 2007-01-01
 questions[51]= "52)  En relaci&oacute;n a las m&eacute;tricas y evaluaci&oacute;n de la Calidad del software, &iquest;cu&aacute;l de las siguientes afirmaciones NO escierta?";
 choices[51]= new Array();
 choices[51][0] = "La t&eacute;cnica de Halstead es una m&eacute;trica de la fiabilidad del software";
 choices[51][1] = "Las m&eacute;tricas de complejidad eval&uacute;an la facilidad de mantenimiento del software";
 choices[51][2] = "El m&eacute;todo de los puntos de funci&oacute;n es una m&eacute;trica de productividad del software";
 choices[51][3] = "COCOMO (Constructive Cost Model) es un modelo de estimaci&oacute;n algor&iacute;tmico";
 answers[51] = choices[51][0];
 units[51] = "88";
 comments[51] = "Id Pregunta: 4862. NULL";


//  Id pregunta: 5177 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  En lo referente a las t&eacute;cnicas de sesiones JAD y JRP. Es cierto que:";
 choices[52]= new Array();
 choices[52][0] = "Son t&eacute;cnicas que promueven la cooperaci&oacute;n entre los usuarios y los desarrolladores para lograr que ambas partes compartan una visi&oacute;n com&uacute;n";
 choices[52][1] = "JRP se usa para el dise&ntilde;o conjunto de aplicaciones";
 choices[52][2] = "JAD se usa para la planificaci&oacute;n de requisitos";
 choices[52][3] = "Todas son ciertas";
 answers[52] = choices[52][0];
 units[52] = "78,86";
 comments[52] = "Id Pregunta: 5177. ";


//  Id pregunta: 5222 AÃ±o de creación de pregunta: 2007-01-01
 questions[53]= "54)  La actividad &quot;Asignaci&oacute;n detallada de tareas&quot; a qu&eacute; grupo de actividades pertenece";
 choices[53]= new Array();
 choices[53][0] = "Actividades de Inicio de Proyecto (GPI)";
 choices[53][1] = "Actividades de Seguimiento y Control (GPS)";
 choices[53][2] = "Actividades de Finalizaci&oacute;n de Proyecto";
 choices[53][3] = "Actividades de Planificaci&oacute;n de Proyecto (GPP)";
 answers[53] = choices[53][1];
 units[53] = "86";
 comments[53] = "Id Pregunta: 5222. NULL";


//  Id pregunta: 5239 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  Una de las siguientes caracter&iacute;sticas no es propia de la planificaci&oacute;n estrat&eacute;gica:";
 choices[54]= new Array();
 choices[54][0] = "Su alcance, afecta generalmente a toda la organizaci&oacute;n";
 choices[54][1] = "Detalla los recursos para alcanzar las formulaciones fijadas en los planes estrat&eacute;gicos";
 choices[54][2] = "La alta direcci&oacute;n est&aacute; implicada en la planificaci&oacute;n estrat&eacute;gica";
 choices[54][3] = "Proceso de evaluaci&oacute;n sistem&aacute;tica de la naturaleza de un negocio, definiendo objetivos a largo plazo";
 answers[54] = choices[54][1];
 units[54] = "77";
 comments[54] = "Id Pregunta: 5239. ";


//  Id pregunta: 5538 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  &iquest;Cu&aacute;l es la principal l&iacute;nea de trabajo en el campo de la recuperaci&oacute;n de la informaci&oacute;n?";
 choices[55]= new Array();
 choices[55][0] = "Aproximaciones sem&aacute;nticas";
 choices[55][1] = "Estad&iacute;sticas";
 choices[55][2] = "Las respuestas a) y b) son verdaderas";
 choices[55][3] = "Las respuestas a) y b) son falsas";
 answers[55] = choices[55][2];
 units[55] = "96";
 comments[55] = "Id Pregunta: 5538. NULL";


//  Id pregunta: 5573 AÃ±o de creación de pregunta: 2003-01-01
 questions[56]= "57)  &iquest;Qu&eacute; modelo escoger&iacute;a si tiene como objetivo mejorar el control y la calidad del gobierno de las TI a trav&eacute;s del ciclo completo de la puesta en marcha de aplicaciones?";
 choices[56]= new Array();
 choices[56][0] = "ITIL";
 choices[56][1] = "CMMI";
 choices[56][2] = "COBIT";
 choices[56][3] = "M&Eacute;TRICA";
 answers[56] = choices[56][2];
 units[56] = "98";
 comments[56] = "Id Pregunta: 5573. NULL";


//  Id pregunta: 5966 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  Seg&uacute;n CMMI, todos los elementos que influyen en la construcci&oacute;n del producto son:";
 choices[57]= new Array();
 choices[57][0] = "El procedimiento, la tecnolog&iacute;a, la direcci&oacute;n y las personas";
 choices[57][1] = "El proceso, la tecnolog&iacute;a y las personas";
 choices[57][2] = "El procedimiento, el proceso, la tecnolog&iacute;a y las personas";
 choices[57][3] = "El proceso y el procedimiento";
 answers[57] = choices[57][1];
 units[57] = "87";
 comments[57] = "Id Pregunta: 5966. Castilla La Mancha 2009";


//  Id pregunta: 6201 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  De acuerdo con M&eacute;trica versi&oacute;n 3, &iquest;qui&eacute;n participa en la obtenci&oacute;n del producto &quot;Entorno de pruebas unitarias&quot;, de la tarea &quot;Preparaci&oacute;n del entorno de las pruebas unitarias&quot;?";
 choices[58]= new Array();
 choices[58][0] = "T&eacute;cnicos de sistemas";
 choices[58][1] = "T&eacute;cnicos de sistemas y programadores";
 choices[58][2] = "Programadores";
 choices[58][3] = "Analistas, Programadores y T&eacute;cnicos de sistemas";
 answers[58] = choices[58][1];
 units[58] = "86";
 comments[58] = "Id Pregunta: 6201. TIC-B 2009 bloque desarrollo";


//  Id pregunta: 6216 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  &iquest;Cu&aacute;l de los siguientes no es un tipo de ramas o m&oacute;dulos subordinados del an&aacute;lisis de transformaci&oacute;n?";
 choices[59]= new Array();
 choices[59][0] = "Aferentes";
 choices[59][1] = "de Transformaci&oacute;n";
 choices[59][2] = "Diferentes";
 choices[59][3] = "Eferentes";
 answers[59] = choices[59][2];
 units[59] = "81";
 comments[59] = "Id Pregunta: 6216. TICB-2009, bloque desarrollo";


//  Id pregunta: 6273 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  &iquest;Cu&aacute;l de los siguientes no es modelo de ciclo de vida tradicional basado en prototipos?";
 choices[60]= new Array();
 choices[60][0] = "Modelo de prototipado evolutivo";
 choices[60][1] = "Modelo de desarrollo incremental";
 choices[60][2] = "Modelo de construcci&oacute;n de prototipos";
 choices[60][3] = "Modelo basado en transformaciones";
 answers[60] = choices[60][3];
 units[60] = "76";
 comments[60] = "Id Pregunta: 6273. ";


//  Id pregunta: 6313 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  No es un tipo de cohesi&oacute;n:";
 choices[61]= new Array();
 choices[61][0] = "Cohesi&oacute;n com&uacute;n.";
 choices[61][1] = "Cohesi&oacute;n funcional.";
 choices[61][2] = "Cohesi&oacute;n comunicacional.";
 choices[61][3] = "Cohesi&oacute;n l&oacute;gica.";
 answers[61] = choices[61][0];
 units[61] = "84";
 comments[61] = "Id Pregunta: 6313. ";


//  Id pregunta: 6434 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  En el modelo entidad/relaci&oacute;n la forma de representar una entidad es:";
 choices[62]= new Array();
 choices[62][0] = "Mediante un rombo y en el interior del mismo el nombre de la entidad.";
 choices[62][1] = "Mediante un rect&aacute;ngulo y en el interior del mismo el nombre de la entidad.";
 choices[62][2] = "Mediante un elipse y en el interior del mismo el nombre de la entidad.";
 choices[62][3] = "Mediante un tri&aacute;ngulo invertido y el nombre de la entidad en una elipse unida al tri&aacute;ngulo mediante una l&iacute;nea.";
 answers[62] = choices[62][1];
 units[62] = "80";
 comments[62] = "Id Pregunta: 6434. NULL";


//  Id pregunta: 6527 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  Una actividad propia de la gesti&oacute;n de problemas es";
 choices[63]= new Array();
 choices[63][0] = "La prevenci&oacute;n proactiva de los problemas";
 choices[63][1] = "Generaci&oacute;n de informaci&oacute;n ejecutiva";
 choices[63][2] = "Identificaci&oacute;n de tendencias";
 choices[63][3] = "Todas las respuestas anteriores son correctas";
 answers[63] = choices[63][3];
 units[63] = "98";
 comments[63] = "Id Pregunta: 6527. NULL";


//  Id pregunta: 6605 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  Uno de los creadores originales del An&aacute;lisis Estructurado es";
 choices[64]= new Array();
 choices[64][0] = "Edward Yourdon";
 choices[64][1] = "Tom De Marco";
 choices[64][2] = "Tim Berners Lee";
 choices[64][3] = "James Rumbaugh";
 answers[64] = choices[64][1];
 units[64] = "81";
 comments[64] = "Id Pregunta: 6605. NULL";


//  Id pregunta: 6639 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  &iquest;Cu&aacute;l de las siguientes afirmaciones NO es cierta cuando hablamos de la m&eacute;trica de Puntos de Funci&oacute;n?";
 choices[65]= new Array();
 choices[65][0] = "Se usa para estimar el tama&ntilde;o del software que se va a desarrollar";
 choices[65][1] = "Se usa para estimar la productividad del software que se va a desarrollar";
 choices[65][2] = "Ve la aplicaci&oacute;n como una caja negra";
 choices[65][3] = "Fue propuesta por Tom De Marco";
 answers[65] = choices[65][3];
 units[65] = "88";
 comments[65] = "Id Pregunta: 6639. NULL";


//  Id pregunta: 7291 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  Es un proveedor de SW de conversi&oacute;n texto-voz (TTS):";
 choices[66]= new Array();
 choices[66][0] = "Nuance";
 choices[66][1] = "Loquendo";
 choices[66][2] = "a y b son correctas";
 choices[66][3] = "a y b son incorrectas";
 answers[66] = choices[66][1];
 units[66] = "94";
 comments[66] = "Id Pregunta: 7291. NULL";


//  Id pregunta: 8333 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  &iquest;Cu&aacute;l de las siguientes no es una metodolog&iacute;a &aacute;gil de desarrollo?";
 choices[67]= new Array();
 choices[67][0] = "Programaci&oacute;n Extrema (XP).";
 choices[67][1] = "SCRUM.";
 choices[67][2] = "RDS.";
 choices[67][3] = "Feature-Driven Development (FDD).";
 answers[67] = choices[67][2];
 units[67] = "79";
 comments[67] = "Id Pregunta: 8333. Examen TIC A2 2010";


//  Id pregunta: 8356 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  El nivel 5 del modelo de Capacidad y Madurez (CMMI), nivel optimizado, tiene como objetivo:";
 choices[68]= new Array();
 choices[68][0] = "Gestionar cuantitativamente los procesos para lograr los objetivos de calidad y ejecuci&oacute;n del proceso establecido por el proyecto.";
 choices[68][1] = "El entendimiento cuantitativo de los procesos de la organizaci&oacute;n.";
 choices[68][2] = "Mejorar la calidad de los procesos de la organizaci&oacute;n, en base a un entendimiento de las causas comunes de variaci&oacute;n.";
 choices[68][3] = "Proporcionar datos de la ejecuci&oacute;n de procesos.";
 answers[68] = choices[68][2];
 units[68] = "87";
 comments[68] = "Id Pregunta: 8356. Examen TIC A2 2010";


//  Id pregunta: 8408 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  En los dispositivos tipo esc&aacute;ner, la resoluci&oacute;n interpolada es: ";
 choices[69]= new Array();
 choices[69][0] = "Una resoluci&oacute;n calculada que genera nuevos puntos a partir de otros reales m&aacute;s pr&oacute;ximos. ";
 choices[69][1] = "La cantidad de puntos individuales de una imagen captada mediante el sensor";
 choices[69][2] = "La empleada por los programas OCR para identificar el texto. ";
 choices[69][3] = "La que determina la profundidad del color";
 answers[69] = choices[69][0];
 units[69] = "93, 94";
 comments[69] = "Id Pregunta: 8408. Examen TIC A2 2010";


//  Id pregunta: 8646 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  &iquest;Seg&uacute;n M&eacute;trica v3 cu&aacute;l de los siguientes participantes estar&iacute;a encuadrado dentro del perfil &quot;Consultor&quot;?";
 choices[70]= new Array();
 choices[70][0] = "T&eacute;cnico de sistemas.";
 choices[70][1] = "Grupo de Aseguramiento da la Calidad.";
 choices[70][2] = "Equipo de Arquitectura.";
 choices[70][3] = "Administrador de Bases de Datos.";
 answers[70] = choices[70][0];
 units[70] = "86";
 comments[70] = "Id Pregunta: 8646. Examen TIC A2 2010 interna";


//  Id pregunta: 8967 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  &iquest;Cu&aacute;l de los siguientes lenguajes de programaci&oacute;n es fuertemente tipado?";
 choices[71]= new Array();
 choices[71][0] = "Lisp.";
 choices[71][1] = "Perl.";
 choices[71][2] = "Php.";
 choices[71][3] = "Python.";
 answers[71] = choices[71][3];
 units[71] = "80,81,82,83,84";
 comments[71] = "Id Pregunta: 8967. ";


//  Id pregunta: 9177 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  Es un formato de imagen vectorial:";
 choices[72]= new Array();
 choices[72][0] = "VML";
 choices[72][1] = "JPG";
 choices[72][2] = "XCF";
 choices[72][3] = "GIF";
 answers[72] = choices[72][0];
 units[72] = "93";
 comments[72] = "Id Pregunta: 9177. NULL";


//  Id pregunta: 9179 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  Indique la afirmaci&oacute;n FALSA:";
 choices[73]= new Array();
 choices[73][0] = "La luz acrom&aacute;tica es aquella cuyo &uacute;nico atributo visible es la intensidad";
 choices[73][1] = "Los colores secundarios cian, magenta y amarillo se consideran combinaci&oacute;n de los tres colores primarios ";
 choices[73][2] = "La percepci&oacute;n del color por el sistema visual humano se caracteriza por los par&aacute;metros: brillo, matiz y croma o saturaci&oacute;n.";
 choices[73][3] = "La intensidad se describe en t&eacute;rminos de radiancia, luminancia y brillo.";
 answers[73] = choices[73][1];
 units[73] = "93";
 comments[73] = "Id Pregunta: 9179. NULL";


//  Id pregunta: 9182 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  La transformaci&oacute;n hit or miss (o a&ntilde;adir o eliminar) aplicada al procesamiento de im&aacute;genes se utiliza para:";
 choices[74]= new Array();
 choices[74][0] = "Dividir una imagen en regiones a partir de diferencias crom&aacute;ticas";
 choices[74][1] = "Detectar regiones con una forma espec&iacute;fica";
 choices[74][2] = "Calcular la apertura y clausura del contorno de un objeto";
 choices[74][3] = "No es posible aplicar hit or miss al procesamiento de im&aacute;genes";
 answers[74] = choices[74][1];
 units[74] = "93";
 comments[74] = "Id Pregunta: 9182. NULL";


//  Id pregunta: 9185 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  &iquest;Cu&aacute;l de los siguientes NO es un Proceso Principal de M&eacute;trica 3?";
 choices[75]= new Array();
 choices[75][0] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[75][1] = "Mantenimiento de Sistemas de Informaci&oacute;n";
 choices[75][2] = "Dise&ntilde;o de Sistemas de Informaci&oacute;n";
 choices[75][3] = "Todos son Procesos Principales";
 answers[75] = choices[75][2];
 units[75] = "86";
 comments[75] = "Id Pregunta: 9185. NULL";


//  Id pregunta: 9338 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  &iquest;Cu&aacute;l de los siguientes no es un modelo de COCOMO?";
 choices[76]= new Array();
 choices[76][0] = "Semiacoplado";
 choices[76][1] = "Empotrado";
 choices[76][2] = "Acoplado";
 choices[76][3] = "Org&aacute;nico";
 answers[76] = choices[76][2];
 units[76] = "88";
 comments[76] = "Id Pregunta: 9338. NULL";


//  Id pregunta: 9450 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  Seleccione la frase EQUIVOCADA acerca del &aacute;lgebra relacional.";
 choices[77]= new Array();
 choices[77][0] = "Los operadores b&aacute;sicos son uni&oacute;n, diferencia, producto cartesiano, proyecci&oacute;n y selecci&oacute;n.";
 choices[77][1] = "Los operadores uni&oacute;n y diferencia requieren que las relaciones operando est&eacute;n definidas sobre el mismo conjunto de atributos.";
 choices[77][2] = "El producto cartesiano de una relaci&oacute;n de orden&quot;n&quot; y &quot;x&quot; tuplas y otra relaci&oacute;n de orden &quot;m&quot; y &quot;z&quot; tuplas es una relaci&oacute;n de orden n*m y de (x+z) tuplas. (F, es de orden n+m y x*z tuplas)";
 choices[77][3] = "La operaci&oacute;n join sobre dos relaciones que presentan atributos comunes puede tener cero tuplas.";
 answers[77] = choices[77][2];
 units[77] = "58";
 comments[77] = "Id Pregunta: 9450. Examen AGE TIC A1 2011";


//  Id pregunta: 9457 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  Seg&uacute;n Codd, una entidad que no contiene grupos repetitivos est&aacute;, al menos, en:";
 choices[78]= new Array();
 choices[78][0] = "Primera Forma Normal.";
 choices[78][1] = "Segunda Forma Normal.";
 choices[78][2] = "Tercera Forma Normal.";
 choices[78][3] = "Forma Normal de Boyce-Codd.";
 answers[78] = choices[78][0];
 units[78] = "58";
 comments[78] = "Id Pregunta: 9457. ";


//  Id pregunta: 9464 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  &iquest;Cu&aacute;l es el est&aacute;ndar para UML 2?";
 choices[79]= new Array();
 choices[79][0] = "ISO/IEC 19501.";
 choices[79][1] = "ISO/IEC 19505.";
 choices[79][2] = "ISO/IEC 80211.";
 choices[79][3] = "ISO/IEC 80216.";
 answers[79] = choices[79][1];
 units[79] = "84";
 comments[79] = "Id Pregunta: 9464. NULL";


//  Id pregunta: 9485 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  Seg&uacute;n Metricav3, &iquest;qu&eacute; participante se encarga de definir los requisitos de sistema?";
 choices[80]= new Array();
 choices[80][0] = "Jefe de proyecto";
 choices[80][1] = "Consultor";
 choices[80][2] = "Analista";
 choices[80][3] = "Programador";
 answers[80] = choices[80][2];
 units[80] = "78";
 comments[80] = "Id Pregunta: 9485. ";


//  Id pregunta: 9904 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  Seg&uacute;n M&eacute;trica v3, los flujos que interconectan actividades en la t&eacute;cnica SADT (Structured Analysis and Design Technique) se pueden clasificar en 4 tipos, se&ntilde;ale cu&aacute;l de los siguientes flujos NO es correcto:";
 choices[81]= new Array();
 choices[81][0] = "Control.";
 choices[81][1] = "Transacci&oacute;n.";
 choices[81][2] = "Mecanismo.";
 choices[81][3] = "Entrada.";
 answers[81] = choices[81][1];
 units[81] = "86";
 comments[81] = "Id Pregunta: 9904. TIC A2, Examen 2013";


//  Id pregunta: 10010 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  &iquest;Qu&eacute; modelo de recuperaci&oacute;n de informaci&oacute;n se basa en el Teorema de Bayes?a) Vectorial.X b) Probabil&iacute;stico.c) Indexaci&oacute;n por Sem&aacute;ntica Latente.d) Basado en la teor&iacute;a de conjuntos.";
 choices[82]= new Array();
 choices[82][0] = "Vectorial.";
 choices[82][1] = "Probabil&iacute;stico.";
 choices[82][2] = "Indexaci&oacute;n por Sem&aacute;ntica Latente.";
 choices[82][3] = "Basado en la teor&iacute;a de conjuntos.";
 answers[82] = choices[82][1];
 units[82] = "96";
 comments[82] = "Id Pregunta: 10010. ";


//  Id pregunta: 10094 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  &iquest;Cu&aacute;l NO se considera una t&eacute;cnica general del an&aacute;lisis de requisitos?";
 choices[83]= new Array();
 choices[83][0] = "Abstracci&oacute;n";
 choices[83][1] = "Proyecci&oacute;n";
 choices[83][2] = "Partici&oacute;n";
 choices[83][3] = "Todas se consideran t&eacute;cnicas generales";
 answers[83] = choices[83][3];
 units[83] = "78";
 comments[83] = "Id Pregunta: 10094. NULL";


//  Id pregunta: 10098 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  &iquest;Cu&aacute;l es la diferencia entre una maqueta y un prototipo seg&uacute;n M&eacute;trica v3?";
 choices[84]= new Array();
 choices[84][0] = "Ninguna, son lo mismo seg&uacute;n M&eacute;trica v3.";
 choices[84][1] = "Un prototipo describe parte de la funcionalidad del sistema, una maqueta simula el aspecto visual.";
 choices[84][2] = "Una maqueta describe parte de la funcionalidad del sistema, un prototipo simula el aspecto visual.";
 choices[84][3] = "Una maqueta es un tipo de prototipo evolutivo.";
 answers[84] = choices[84][0];
 units[84] = "78";
 comments[84] = "Id Pregunta: 10098. NULL";


//  Id pregunta: 10189 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  &iquest;Cu&aacute;l de los siguientes formatos de im&aacute;gen permite fondos transparentes?";
 choices[85]= new Array();
 choices[85][0] = "TIFF";
 choices[85][1] = "BMP";
 choices[85][2] = "JPEG";
 choices[85][3] = "PNG";
 answers[85] = choices[85][3];
 units[85] = "93";
 comments[85] = "Id Pregunta: 10189. NULL";


//  Id pregunta: 10448 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  El m&eacute;todo de compresi&oacute;n de archivos denominado &quot;algoritmo de deflaci&oacute;n&quot;, que fue originalmente definido por Phil Katz, se utiliza en el formato de imagen ";
 choices[86]= new Array();
 choices[86][0] = "TIFF.";
 choices[86][1] = "GIF.";
 choices[86][2] = "PNG.";
 choices[86][3] = "JPEG.";
 answers[86] = choices[86][2];
 units[86] = "93";
 comments[86] = "Id Pregunta: 10448. Examen TIC A1 2013";


//  Id pregunta: 10850 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  Los proveedores de datos .NET Framework incluyen un objeto DbConnection para conectarse al origen de datos. Se&ntilde;ale, entre las siguientes clases, cu&aacute;l NO pertenece a un proveedor de datos incluido en el .NET Framework 4.5:";
 choices[87]= new Array();
 choices[87][0] = "EntityConnection.";
 choices[87][1] = "SqlConnection.";
 choices[87][2] = "SqlCeConnection.";
 choices[87][3] = "OleOdbcConnection.";
 answers[87] = choices[87][3];
 units[87] = "59, 115";
 comments[87] = "Id Pregunta: 10850. Examen GSI 2014";


//  Id pregunta: 10858 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  COCOMO II para estimaci&oacute;n de proyectos de software est&aacute; compuesto de 3 modelos, que son:";
 choices[88]= new Array();
 choices[88][0] = "Modelo de An&aacute;lisis de la Aplicaci&oacute;n, Modelo de Construcci&oacute;n Preliminar y Modelo Post-Arquitectura.";
 choices[88][1] = "Modelo de Planificaci&oacute;n, Modelo de Construcci&oacute;n y Modelo de Arquitectura.";
 choices[88][2] = "Modelo de Composici&oacute;n de la Estimaci&oacute;n, Modelo de Construcci&oacute;n y Modelo de Arquitectura Preliminar.";
 choices[88][3] = "Modelo de Composici&oacute;n de Aplicaci&oacute;n, Modelo de Dise&ntilde;o Preliminar y Modelo Post-Arquitectura.";
 answers[88] = choices[88][3];
 units[88] = "89";
 comments[88] = "Id Pregunta: 10858. Examen GSI 2014";


//  Id pregunta: 10967 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  En dise&ntilde;o orientado a objetos se utiliza el patr&oacute;n Observador (en ingl&eacute;s, Observer), que define una dependencia uno a muchos entre un sujeto y varios observadores. Se&ntilde;ale la respuesta correcta:";
 choices[89]= new Array();
 choices[89][0] = "Cuando el sujeto se modifica, se notifica dicha modificaci&oacute;n. Los observadores se actualizar&aacute;n s&oacute;lo si se va a utilizar la informaci&oacute;n del sujeto.";
 choices[89][1] = "Establece cu&aacute;ntos observadores de un sujeto van a existir para poder notificarles cualquier cambio.";
 choices[89][2] = "La responsabilidad de actualizaci&oacute;n puede residir en los observadores tras la notificaci&oacute;n de cambio del sujeto.";
 choices[89][3] = "El sujeto nunca puede ser borrado.";
 answers[89] = choices[89][2];
 units[89] = "84";
 comments[89] = "Id Pregunta: 10967. TIC A1 AGE 2014";


//  Id pregunta: 10972 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  &iquest;Cu&aacute;l de las siguientes afirmaciones es verdadera respecto al esquema l&oacute;gico REDER que se encuentra dentro del modelo EFQM?";
 choices[90]= new Array();
 choices[90][0] = "La Evaluaci&oacute;n y Revisi&oacute;n se ocupa de los logros que est&aacute; alcanzando una organizaci&oacute;n.";
 choices[90][1] = "Los Resultados se ocupan de c&oacute;mo una organizaci&oacute;n implanta sistem&aacute;ticamente el enfoque.";
 choices[90][2] = "El Enfoque abarca lo que una organizaci&oacute;n planifica hacer y las razones para ello.";
 choices[90][3] = "El Despliegue aborda lo que hace una organizaci&oacute;n para evaluar, revisar y mejorar el enfoque.";
 answers[90] = choices[90][2];
 units[90] = "92";
 comments[90] = "Id Pregunta: 10972. TIC A1 AGE 2014";


//  Id pregunta: 11006 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  En el desarrollo orientado a objetos, dos casos de uso pueden estar relacionados mediante una relaci&oacute;n include, y reciben los nombres de caso base y caso de inclusi&oacute;n. Se&ntilde;ale la respuesta correcta:";
 choices[91]= new Array();
 choices[91][0] = "La ubicaci&oacute;n de la inclusi&oacute;n en el caso base es impl&iacute;cita. Es decir, es una sentencia expl&iacute;cita dentro de la secuencia de comportamiento del caso de uso base.";
 choices[91][1] = "El caso de uso de inclusi&oacute;n indica una secuencia adicional de comportamiento cuya ejecuci&oacute;n depende de una condici&oacute;n.";
 choices[91][2] = "El caso de uso de inclusi&oacute;n no puede acceder a atributos u operaciones del caso de uso base.";
 choices[91][3] = "Solo puede haber una relaci&oacute;n de inclusi&oacute;n para un caso de uso base.";
 answers[91] = choices[91][0];
 units[91] = "86";
 comments[91] = "Id Pregunta: 11006. TIC A1 AGE 2014";


//  Id pregunta: 11082 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Cu&aacute;l es la descripci&oacute;n correcta de operaci&oacute;n normal del servicio";
 choices[92]= new Array();
 choices[92][0] = "El servicio es operado de la manera usual, sin que ocurran incidencias";
 choices[92][1] = "El servicio es facilitado con todas las funcionalidades y rendimiento que el negocio desea";
 choices[92][2] = "El servicio es operado dentro de los limites definidos en los Acuerdos de Nivel de Servicio (Servicie Level Agreement &ndash; SLA)";
 choices[92][3] = "Todos los usuarios pueden registrarse en el servicio y utilizarlo";
 answers[92] = choices[92][2];
 units[92] = "98";
 comments[92] = "Id Pregunta: 11082. ";


//  Id pregunta: 11159 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Seleccione la respuesta verdadera:";
 choices[93]= new Array();
 choices[93][0] = "El fan-in de un m&oacute;dulo es usado como una medida de reusabilidad";
 choices[93][1] = "El fan-in de un m&oacute;dulo es usado como una medida de complejidad.";
 choices[93][2] = "Las dos anteriores son verdaderas";
 choices[93][3] = "Todas son falsas";
 answers[93] = choices[93][0];
 units[93] = "84";
 comments[93] = "Id Pregunta: 11159. ";


//  Id pregunta: 11161 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Qu&eacute; roles deben participar en la Tarea de Evaluaci&oacute;n de Alternativas y Selecci&oacute;n, seg&uacute;n la metodolog&iacute;a de M&eacute;trica v3?";
 choices[94]= new Array();
 choices[94][0] = "Jefe de Proyecto";
 choices[94][1] = "Jefe de Proyecto y Comit&eacute; de Direcci&oacute;n";
 choices[94][2] = "Jefe de Proyecto, Comit&eacute; de Direcci&oacute;n y Analistas";
 choices[94][3] = "Jefe de Proyecto, Comit&eacute; de Direcci&oacute;n, Analistas y Usuarios Expertos";
 answers[94] = choices[94][2];
 units[94] = "86";
 comments[94] = "Id Pregunta: 11161. ";


//  Id pregunta: 11170 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Cu&aacute;l de los siguientes no es un sistema de gesti&oacute;n de contenidos opensource?";
 choices[95]= new Array();
 choices[95][0] = "Drupal";
 choices[95][1] = "Joomla";
 choices[95][2] = "Alfresco";
 choices[95][3] = "Sharepoint";
 answers[95] = choices[95][3];
 units[95] = "95";
 comments[95] = "Id Pregunta: 11170. ";


//  Id pregunta: 11265 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  La versi&oacute;n 3 de ITIL enfoca la gesti&oacute;n de servicios a partir del ciclo de vida de un servicio, se&ntilde;ale en concepto correcto entre los que se muestran a continuaci&oacute;n: ";
 choices[96]= new Array();
 choices[96][0] = "Funci&oacute;n: es una subdivisi&oacute;n de una organizaci&oacute;n que est&aacute; especializada en realizar un tipo de trabajo concreto y tiene la responsabilidad de obtener resultados concretos.";
 choices[96][1] = "Actividad: es un conjunto estructurado de procesos dise&ntilde;ado para cumplir uno objetivo concreto.";
 choices[96][2] = "Gesti&oacute;n de Servicio: es un conjunto de actividades y responsabilidades asignadas a una persona o un grupo.";
 choices[96][3] = "Rol: es un conjunto de capacidades organizativas especializadas, cuyo fin es generar valor para los clientes en forma de servicios.";
 answers[96] = choices[96][0];
 units[96] = "98";
 comments[96] = "Id Pregunta: 11265. ";


//  Id pregunta: 11388 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de los siguientes podr&iacute;an ser considerados parte interesada (stakeholder) en una gesti&oacute;n de proyecto de servicios?";
 choices[97]= new Array();
 choices[97][0] = "Solo usuarios y clientes";
 choices[97][1] = "Solo suministradores y funciones";
 choices[97][2] = "Solo clientes y funciones";
 choices[97][3] = "Todos los anteriores";
 answers[97] = choices[97][3];
 units[97] = "98";
 comments[97] = "Id Pregunta: 11388. ";


//  Id pregunta: 11398 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes situaciones deber&iacute;a ser tratada como una incidencia?: 1. Un usuario es incapaz de acceder a un servicio durante el horario de servicio; 2. Un miembro autorizado del personal TI no puede acceder a un servicio durante el horario de servicio; 3. Un componente de red falla pero el usuario no percibe ninguna alteraci&oacute;n del servicio; 4. Un usuario contacta con el centro de servicio para informar que una aplicaci&oacute;n presenta un rendimiento lento";
 choices[98]= new Array();
 choices[98][0] = "Todas las anteriores";
 choices[98][1] = "Solo 1 y 4";
 choices[98][2] = "Solo 2 y 3";
 choices[98][3] = "Ninguna de las anteriores";
 answers[98] = choices[98][0];
 units[98] = "98";
 comments[98] = "Id Pregunta: 11398. ";


//  Id pregunta: 11557 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Seg&uacute;n la metodolog&iacute;a &aacute;gil SCRUM, el documento de alto nivel con todos los requerimientos del proyectos priorizados seg&uacute;n retorno de inversi&oacute;n (ROI), se denomina:";
 choices[99]= new Array();
 choices[99][0] = "Sprint Backlog";
 choices[99][1] = "Sprint Chart";
 choices[99][2] = "Product Backlog";
 choices[99][3] = "Burn Down Chart";
 answers[99] = choices[99][2];
 units[99] = "79";
 comments[99] = "Id Pregunta: 11557. NULL";


