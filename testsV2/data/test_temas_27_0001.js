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

//  Id pregunta: 705 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  Cu&aacute;l no es una caracter&iacute;stica del software libre:";
 choices[0]= new Array();
 choices[0][0] = "Libertad de distribuir copias";
 choices[0][1] = "Gratuidad";
 choices[0][2] = "Libertad de realizar modificaciones particulares y mantenerlas para uso privado";
 choices[0][3] = "C&oacute;digo abierto";
 answers[0] = choices[0][1];
 units[0] = "61";
 comments[0] = "Id Pregunta: 705. Similar a examen TIC MAP A 2004";


//  Id pregunta: 731 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  Identifique cu&aacute;l de los siguientes nombres no se corresponde con la denominaci&oacute;n de alguna de las Redes Neuronales de una capa:";
 choices[1]= new Array();
 choices[1][0] = "Perceptron";
 choices[1][1] = "Adaline";
 choices[1][2] = "Art";
 choices[1][3] = "Madaline";
 answers[1] = choices[1][2];
 units[1] = "63,64";
 comments[1] = "Id Pregunta: 731. Examen TIC MAP B 2004";


//  Id pregunta: 817 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  Seg&uacute;n el m&eacute;todo de resoluci&oacute;n de problemas GPS (General Problem Solving):";
 choices[2]= new Array();
 choices[2][0] = "El problema se formaliza o define por los siguientes componentes : I(estado inicial), F (estado final) y O (conjunto de operadores complejos)";
 choices[2][1] = "Existe un problema cuando la aplicaci&oacute;n de un m&eacute;todo conocido a una situaci&oacute;n de incertidumbre no lleva a un estado final determinado";
 choices[2][2] = "Los problemas se dividen en subproblemas m&aacute;s simples de manera recursiva. La unidad m&iacute;nima de divisi&oacute;n se denomina &quot;problema elemental&quot;";
 choices[2][3] = "Cuando hay una discrepancia entre la situaci&oacute;n de partida y aqu&eacute;lla que se quiere alcanzar se dice que hay un problema";
 answers[2] = choices[2][3];
 units[2] = "63";
 comments[2] = "Id Pregunta: 817. ";


//  Id pregunta: 842 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre data-warehouse es verdadera?";
 choices[3]= new Array();
 choices[3][0] = "Los datos se agregan en conjuntos.";
 choices[3][1] = "La actualizaci&oacute;n de los datos se hace en tiempo real.";
 choices[3][2] = "Est&aacute;n orientados a procesos.";
 choices[3][3] = "&Uacute;nicamente se puede realizar data-mining sobre un sistema data-warehouse.";
 answers[3] = choices[3][0];
 units[3] = "68";
 comments[3] = "Id Pregunta: 842. ";


//  Id pregunta: 865 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;Cu&aacute;l de los siguientes es un modelo de inteligencia artificial distribuida?:";
 choices[4]= new Array();
 choices[4][0] = "Modelo de actores";
 choices[4][1] = "Modelo de puntos de funci&oacute;n";
 choices[4][2] = "Modelo de regresi&oacute;n m&uacute;ltiple";
 choices[4][3] = "Modelo de Nashville";
 answers[4] = choices[4][0];
 units[4] = "63";
 comments[4] = "Id Pregunta: 865. ";


//  Id pregunta: 867 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;Cu&aacute;l de los siguientes modelos de miner&iacute;a de datos escoger&iacute;a para detectar un posible fraude?";
 choices[5]= new Array();
 choices[5][0] = "El modelo de Verificaci&oacute;n.";
 choices[5][1] = "El modelo de Descubrimiento.";
 choices[5][2] = "El modelo de Simulaci&oacute;n.";
 choices[5][3] = "El modelo Distribuido.";
 answers[5] = choices[5][1];
 units[5] = "68";
 comments[5] = "Id Pregunta: 867. ";


//  Id pregunta: 905 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Podr&iacute;a indicarnos que componente software presente en todos los miembros de la familia Office de Microsoft es un claro ejemplo de sistema basado en el conocimiento?:";
 choices[6]= new Array();
 choices[6][0] = "El motor de base de datos JET de Access";
 choices[6][1] = "Existen unas librerias presentes sobre todo en Excel, que hacen uso de tecnicas revolucionarias de Inteligencia Emocional";
 choices[6][2] = "Word posee un sistema muy avanzado para la conversi&oacute;n en p&aacute;gina web de sus documentos.";
 choices[6][3] = "El Ayudante de Office";
 answers[6] = choices[6][3];
 units[6] = "63";
 comments[6] = "Id Pregunta: 905. ";


//  Id pregunta: 982 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  Dentro de la Inteligencia Artificial Distribuir&aacute;n indicar qu&eacute; significan las siglas KIF:";
 choices[7]= new Array();
 choices[7][0] = "Knowledge Interchange File";
 choices[7][1] = "Knowledge Intermediate Format";
 choices[7][2] = "Knowledge Intermediate File";
 choices[7][3] = "Knowledge Interchange Format";
 answers[7] = choices[7][3];
 units[7] = "63";
 comments[7] = "Id Pregunta: 982. ";


//  Id pregunta: 983 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Dentro de la inteligencia artificial, indicar la afirmaci&oacute;n correcta:";
 choices[8]= new Array();
 choices[8][0] = "El sistema de Kleene completo abarca tambi&eacute;n el c&aacute;lculo de predicados para lo cual se incluyen m&aacute;s axiomas y m&aacute;s reglas de demostraci&oacute;n";
 choices[8][1] = "El sistema de deducci&oacute;n natural se diferencia fundamentalmente de los de teor&iacute;a de la demostraci&oacute;n en que en &eacute;l no se demuestran las deducciones f&oacute;rmula a f&oacute;rmula, sino toda la deducci&oacute;n como si fuera una &uacute;nica f&oacute;rmula";
 choices[8][2] = "El sistema de deducci&oacute;n natural tiene mayor capacidad que el sistema de Kleene para admitir la definici&oacute;n de procedimientos eficientes de b&uacute;squeda sistem&aacute;tica de demostraciones";
 choices[8][3] = "Dentro de la teor&iacute;a sem&aacute;ntica, la descripci&oacute;n del sistema con este planteamiento con c&aacute;lculo posicional se realiza, entre otras con un conjunto de significados atribuibles a las proposiciones y con  una definici&oacute;n sint&aacute;ctica de conectivas";
 answers[8] = choices[8][3];
 units[8] = "63";
 comments[8] = "Id Pregunta: 983. ";


//  Id pregunta: 1041 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  El objetivo principal de la miner&iacute;a de datos es:";
 choices[9]= new Array();
 choices[9][0] = "Descubrir el conocimiento oculto en grandes vol&uacute;menes de datos y expresarlo de forma inteligible.";
 choices[9][1] = "Reorganizar adecuadamente los grandes vol&uacute;menes de datos.";
 choices[9][2] = "Tener copias de seguridad fiables y r&aacute;pidas de todos y cada uno de los datos de que se dispone.";
 choices[9][3] = "Ninguna de las anteriores respuestas es correcta.";
 answers[9] = choices[9][0];
 units[9] = "68";
 comments[9] = "Id Pregunta: 1041. ";


//  Id pregunta: 1072 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  En cuanto a las t&eacute;cnicas de representaci&oacute;n del conocimiento, podemos afirmar que:";
 choices[10]= new Array();
 choices[10][0] = "Un Sistema Basado en el Conocimiento (SBC) es un sistema inform&aacute;tico cuya principal caracter&iacute;stica reside en que el conocimiento necesario para resolver un problema aparece como estructura procesable separada del procedimiento que la manipula";
 choices[10][1] = "Los mecanismos de inferencia son paradigmas de representaci&oacute;n utilizados en las bases de conocimiento de los SBC";
 choices[10][2] = "La representaci&oacute;n param&eacute;trica est&aacute; basada en una concepci&oacute;n epistemol&oacute;gica del mundo en t&eacute;rminos de conceptos";
 choices[10][3] = "Las representaciones de tipo simb&oacute;lico est&aacute;n basadas en una visi&oacute;n del mundo de tipo fisiol&oacute;gico, tales como las redes neuronales";
 answers[10] = choices[10][0];
 units[10] = "64";
 comments[10] = "Id Pregunta: 1072. ";


//  Id pregunta: 1073 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  En el &aacute;mbito de la inteligencia artificial, &iquest;cu&aacute;l de las siguientes afirmaciones respecto de las redes sem&aacute;nticas es cierta?:";
 choices[11]= new Array();
 choices[11][0] = "La representaci&oacute;n de una red sem&aacute;ntica se realiza con nodos, correspondientes a ideas o conceptos, y arcos representando relaciones entre nodos";
 choices[11][1] = "Las redes se representan mediante sentencias condicionales que relacionan grupos de conceptos, los antecesores y los consecuentes";
 choices[11][2] = "Las redes representan patrones de un concepto e internamente est&aacute;n formados por ranuras representando caracter&iacute;sticas de las redes sem&aacute;nticas";
 choices[11][3] = "Las redes sem&aacute;nticas representan relaciones de equilibrio entre los atributos de uno o m&aacute;s objetos y el rango de valores de los mismos";
 answers[11] = choices[11][0];
 units[11] = "64";
 comments[11] = "Id Pregunta: 1073. ";


//  Id pregunta: 1076 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  En el campo de la representaci&oacute;n del conocimiento simb&oacute;lico:";
 choices[12]= new Array();
 choices[12][0] = "La unidad b&aacute;sica funcional de una red sem&aacute;ntica es el 'objeto' que formaliza la representaci&oacute;n de un concepto";
 choices[12][1] = "Un marco es una descripci&oacute;n de un objeto, que contiene ranuras (slots) para todas las informaciones asociadas con el objeto";
 choices[12][2] = "Las reglas deductivas son una manera de representar al conocimiento de tipo procedimental";
 choices[12][3] = "Una restricci&oacute;n expresa es una relaci&oacute;n de equilibrio entre los predicados de uno o m&aacute;s objetos";
 answers[12] = choices[12][1];
 units[12] = "64";
 comments[12] = "Id Pregunta: 1076. ";


//  Id pregunta: 1098 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  En inteligencia artificial un marco es:";
 choices[13]= new Array();
 choices[13][0] = "La representaci&oacute;n del conocimiento basada en teor&iacute;a de grafos";
 choices[13][1] = "Un elemento de representaci&oacute;n que contiene, entre otros elementos, ranuras de informaci&oacute;n y punteros";
 choices[13][2] = "El mecanismo de razonamiento m&aacute;s utilizado a la hora de equiparar elementos de conocimiento";
 choices[13][3] = "El objeto formado por el encapsulamiento de reglas deductivas y hechos";
 answers[13] = choices[13][1];
 units[13] = "64";
 comments[13] = "Id Pregunta: 1098. ";


//  Id pregunta: 1099 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  En inteligencia artificial:";
 choices[14]= new Array();
 choices[14][0] = "Los primeros trabajos se centraron en m&eacute;todos de b&uacute;squeda heur&iacute;stica y m&eacute;todos de deducci&oacute;n autom&aacute;tica";
 choices[14][1] = "La rob&oacute;tica no secuencializa las tareas (planificaci&oacute;n) para conseguir pasar de un estado actual a un estado objetivo";
 choices[14][2] = "La representaci&oacute;n del conocimiento pertenece al campo de los Sistemas de Gesti&oacute;n de Bases de Datos, pero no al de la inteligencia artificial";
 choices[14][3] = "Los m&eacute;todos heur&iacute;sticos buscan una formulaci&oacute;n te&oacute;rica para la representaci&oacute;n del conocimiento";
 answers[14] = choices[14][0];
 units[14] = "63";
 comments[14] = "Id Pregunta: 1099. ";


//  Id pregunta: 1138 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  En un marco, al pedir el valor de un slot:";
 choices[15]= new Array();
 choices[15][0] = "Primero se dar&aacute; el valor por defecto, si este no existiera, el valor en curso, y si este no existiera, se ejecutar&aacute; el procedimiento if-required";
 choices[15][1] = "Primero se dar&aacute; el valor en curso, si este no existiera, el valor por defecto, y si este no existiera, se ejecutar&aacute; el procedimiento if-required";
 choices[15][2] = "Primero se ejecutar&aacute; if-required, y si no finaliza con &eacute;xito, se dar&aacute; el valor por defecto, y si este no existiera, el valor en curso, Sini, se termina con error.";
 choices[15][3] = "Primero se dar&aacute; el valor en curso, si este no existiera, el valor por defecto, y si este no existiera, se ejecutar&aacute; el procedimiento if-needed";
 answers[15] = choices[15][3];
 units[15] = "64";
 comments[15] = "Id Pregunta: 1138. ";


//  Id pregunta: 1166 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  Entre las caracter&iacute;sticas del Data Warehousing se encuentra:";
 choices[16]= new Array();
 choices[16][0] = "Estar orientado a objetos.";
 choices[16][1] = "Los datos de la empresa no son modificados.";
 choices[16][2] = "Estar destinado a ayudar a la toma de decisiones de gesti&oacute;n.";
 choices[16][3] = "Son ciertas las respuestas &lsquo;b&rsquo; y &lsquo;c&rsquo;.";
 answers[16] = choices[16][3];
 units[16] = "68";
 comments[16] = "Id Pregunta: 1166. ";


//  Id pregunta: 1167 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Entre las formas de representaci&oacute;n param&eacute;trica del conocimiento se encuentra:";
 choices[17]= new Array();
 choices[17][0] = "Reglas de producci&oacute;n";
 choices[17][1] = "Reglas sem&aacute;nticas";
 choices[17][2] = "Redes neuronales";
 choices[17][3] = "Restricciones";
 answers[17] = choices[17][2];
 units[17] = "64";
 comments[17] = "Id Pregunta: 1167. ";


//  Id pregunta: 1175 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Indicar cu&aacute;l de las siguientes es una arquitectura cl&aacute;sica de la resoluci&oacute;n distribuida de problemas:";
 choices[18]= new Array();
 choices[18][0] = "Red de contratos";
 choices[18][1] = "Arquitectura de pizarra";
 choices[18][2] = "Las dos primeras son arquitecturas cl&aacute;sicas de la resoluci&oacute;n distribuida de problemas";
 choices[18][3] = "Ninguna de las anteriores son arquitecturas cl&aacute;sicas de la resoluci&oacute;n distribuida de problemas";
 answers[18] = choices[18][2];
 units[18] = "63";
 comments[18] = "Id Pregunta: 1175. ";


//  Id pregunta: 1184 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  Indicar la respuesta falsa sobre las redes sem&aacute;nticas en inteligencia artificial:";
 choices[19]= new Array();
 choices[19][0] = "Las redes sem&aacute;nticas conciben el pensamiento mediante un conjunto de ideas b&aacute;sicas y relaciones que interconectan unas con otras formando una red, de forma que el razonamiento se basa en una navegaci&oacute;n por dicha red";
 choices[19][1] = "El emparejamiento proporciona respuestas mediante la b&uacute;squeda de parejas de idea-relaci&oacute;n en la red";
 choices[19][2] = "Los mecanismos de inferencia en una red sem&aacute;ntica son la herencia y el emparejamiento";
 choices[19][3] = "El procedimiento de herencia extiende a las caracter&iacute;sticas asociadas a un concepto con las caracter&iacute;sticas de los nodos con los que le une la relaci&oacute;n es-un, de forma que el concepto hereda cualidades propias de otros conceptos m&aacute;s generales";
 answers[19] = choices[19][1];
 units[19] = "64";
 comments[19] = "Id Pregunta: 1184. ";


//  Id pregunta: 1216 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  La deducci&oacute;n por medio de los sistemas de Kleene en inteligencia artificial hace referencia a:";
 choices[20]= new Array();
 choices[20][0] = "La orientaci&oacute;n heur&iacute;stica";
 choices[20][1] = "La orientaci&oacute;n l&oacute;gica";
 choices[20][2] = "La representaci&oacute;n del conocimiento";
 choices[20][3] = "Las redes sem&aacute;nticas";
 answers[20] = choices[20][1];
 units[20] = "63";
 comments[20] = "Id Pregunta: 1216. ";


//  Id pregunta: 1344 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  Se&ntilde;ale el modelo de miner&iacute;a de datos que comprueba la validez de las hip&oacute;tesis establecidas por el usuario.";
 choices[21]= new Array();
 choices[21][0] = "Modelo de descubrimiento.";
 choices[21][1] = "Modelo de verificaci&oacute;n.";
 choices[21][2] = "Modelo predictivo.";
 choices[21][3] = "Modelo de resumen.";
 answers[21] = choices[21][1];
 units[21] = "68";
 comments[21] = "Id Pregunta: 1344. ";


//  Id pregunta: 1356 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Se&ntilde;ale la sentencia correcta respecto a los m&eacute;todos de resoluci&oacute;n de problemas:";
 choices[22]= new Array();
 choices[22][0] = "El m&eacute;todo GPS (General Problem Solver) consiste en almacenar en un momento dado el camino recorrido desde la ra&iacute;z mediante el empleo de funciones recursivas";
 choices[22][1] = "El m&eacute;todo STRIPS (Stanford Research Institute Problem Solver) une la filosof&iacute;a GPS con las t&eacute;cnicas de b&uacute;squeda en profundidad";
 choices[22][2] = "El m&eacute;todo GPS consiste en descomponer un problema de manera sistem&aacute;tica en subproblemas";
 choices[22][3] = "El m&eacute;todo STRIPS no puede representar conceptos y deducir a partir de ellos nuevos hechos mediante las reglas de deducci&oacute;n";
 answers[22] = choices[22][2];
 units[22] = "63";
 comments[22] = "Id Pregunta: 1356. ";


//  Id pregunta: 1412 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Una de las caracter&iacute;sticas de un sistema OLTP es: ";
 choices[23]= new Array();
 choices[23][0] = "Homogeneidad de datos almacenados.";
 choices[23][1] = "Alto rendimiento en las operaciones de inserci&oacute;n y actualizaci&oacute;n.";
 choices[23][2] = "Total organizaci&oacute;n.";
 choices[23][3] = "Facilidad para responder a consultas complejas.";
 answers[23] = choices[23][1];
 units[23] = "68";
 comments[23] = "Id Pregunta: 1412. ";


//  Id pregunta: 1534 AÃ±o de creación de pregunta: 2003-01-01
 questions[24]= "25)  &iquest; Cu&aacute;l de los siguientes no es un SGBD del tipo open source ?";
 choices[24]= new Array();
 choices[24][0] = "MySql";
 choices[24][1] = "PostgreSQL";
 choices[24][2] = "SQLite";
 choices[24][3] = "Zope";
 answers[24] = choices[24][3];
 units[24] = "61,62";
 comments[24] = "Id Pregunta: 1534. ";


//  Id pregunta: 1596 AÃ±o de creación de pregunta: 2003-01-01
 questions[25]= "26)  En que tres bibliotecas esta basado GTK+";
 choices[25]= new Array();
 choices[25][0] = "Bonobo, Nautilus, ATK";
 choices[25][1] = "Gnome-db/libgda";
 choices[25][2] = "Glib, Pango, ATK";
 choices[25][3] = "BCEL, Log4j";
 answers[25] = choices[25][2];
 units[25] = "62";
 comments[25] = "Id Pregunta: 1596. ";


//  Id pregunta: 1627 AÃ±o de creación de pregunta: 2003-01-01
 questions[26]= "27)  Si un programa se distribuye con licencia GPL, la empresa que lo modifica puede:";
 choices[26]= new Array();
 choices[26][0] = "No puede venderlo";
 choices[26][1] = "Integrarlo en otro SW y venderlo como propietario ";
 choices[26][2] = "Venderlo a otra empresa como software libre";
 choices[26][3] = "Venderlo a otra empresa como software propietario";
 answers[26] = choices[26][2];
 units[26] = "61";
 comments[26] = "Id Pregunta: 1627. ";


//  Id pregunta: 1628 AÃ±o de creación de pregunta: 2003-01-01
 questions[27]= "28)  Si utilizamos los t&eacute;rminos IceWM, Fluxbox, fvwm, nos estamos refiriendo a:";
 choices[27]= new Array();
 choices[27][0] = "Sistemas de ayuda de KDE.";
 choices[27][1] = "Interfaz gr&aacute;fica del usuario.";
 choices[27][2] = "Entorno de escritorio.";
 choices[27][3] = "Administradores de ventanas en LINUX.";
 answers[27] = choices[27][3];
 units[27] = "62";
 comments[27] = "Id Pregunta: 1628. Junta Andaluc&iacute;a";


//  Id pregunta: 1648 AÃ±o de creación de pregunta: 2004-01-01
 questions[28]= "29)  &iquest;Cu&aacute;l de las siguientes afirmaciones de proyectos java open source es correcta?";
 choices[28]= new Array();
 choices[28][0] = "JBoss es un contenedor de servlets y Tomcat es un servidor de aplicaciones";
 choices[28][1] = "Struts es un framework de programaci&oacute;n orientada a aspectos";
 choices[28][2] = "Lucene es un motor de b&uacute;squeda";
 choices[28][3] = "Ninguna de las anteriores es cierta";
 answers[28] = choices[28][2];
 units[28] = "62";
 comments[28] = "Id Pregunta: 1648. ";


//  Id pregunta: 1684 AÃ±o de creación de pregunta: 2004-01-01
 questions[29]= "30)  Si hablamos de los procedimientos if-needed,e if-added, es cierto que";
 choices[29]= new Array();
 choices[29][0] = "El procedimiento if-needed es un procedimiento de validadci&oacute;n que se ejecuta cuando se a&ntilde;ade un valor a una ranura.";
 choices[29][1] = "El procedimiento if-added es un procedimiento que se ejecuta siempre que se a&ntilde;ade un valor determinado a un slot";
 choices[29][2] = "Ambos forman parte de las facetas declarativas de un marco";
 choices[29][3] = "Las afirmaciones A) y B) son correctas";
 answers[29] = choices[29][1];
 units[29] = "64";
 comments[29] = "Id Pregunta: 1684. ";


//  Id pregunta: 1687 AÃ±o de creación de pregunta: 2004-01-01
 questions[30]= "31)  Si comparamos una base de datos relacional y otra multidimensional, es FALSO que:";
 choices[30]= new Array();
 choices[30][0] = "Las BDR son mejores que las BDM para obtener vistas de unos datos en funci&oacute;n de otros.";
 choices[30][1] = "Las BDR est&aacute;n optimizadas para la inserci&oacute;n de registros y el control concurrente de usuarios.";
 choices[30][2] = "Las BDM tienen informaci&oacute;n m&aacute;s consistente que las BDR.";
 choices[30][3] = "Las BDM son mejores para el estudio a alto nivel de los datos, ya que ofrecen mayor flexibilidad y rapidez de acceso para el &aacute;nalisis de los mismos.";
 answers[30] = choices[30][0];
 units[30] = "68";
 comments[30] = "Id Pregunta: 1687. ";


//  Id pregunta: 1755 AÃ±o de creación de pregunta: 2006-01-01
 questions[31]= "32)  &iquest;Qu&eacute; es el Proyecto Mono?";
 choices[31]= new Array();
 choices[31][0] = "Iniciativa para portar el entorno .Net a Linux";
 choices[31][1] = "Completa enciclopedia de animales creada por Microsoft";
 choices[31][2] = "Herramienta de Software Libre para la educaci&oacute;n de los ni&ntilde;os en las escuelas";
 choices[31][3] = "Programa de dibujo";
 answers[31] = choices[31][0];
 units[31] = "61,62";
 comments[31] = "Id Pregunta: 1755. ";


//  Id pregunta: 1774 AÃ±o de creación de pregunta: 2006-01-01
 questions[32]= "33)  El Software Libre es bueno para las Administraciones P&uacute;blicas porque&hellip; Se&ntilde;ale la respuesta FALSA";
 choices[32]= new Array();
 choices[32][0] = "Es gratis";
 choices[32][1] = "Permite conocer exactamente el funcionamiento de los programas";
 choices[32][2] = "Facilita la conservaci&oacute;n de la informaci&oacute;n p&uacute;blica, libre de patentes y formatos propietarios";
 choices[32][3] = "Abre la posibilidad de contratar soporte t&eacute;cnico en un mercado en competencia";
 answers[32] = choices[32][0];
 units[32] = "61,62";
 comments[32] = "Id Pregunta: 1774. ";


//  Id pregunta: 1775 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  &iquest;Qu&eacute; es falso respecto a la licencia GPL?";
 choices[33]= new Array();
 choices[33][0] = "Los programas con licencia GPL carecen de derechos de autor";
 choices[33][1] = "Exige que los fuentes est&eacute;n a disposici&oacute;n de quien disponga de los binarios";
 choices[33][2] = "No permite su integraci&oacute;n con software propietario";
 choices[33][3] = "Permite modificaciones y redistribuci&oacute;n de estas";
 answers[33] = choices[33][0];
 units[33] = "61,62";
 comments[33] = "Id Pregunta: 1775. ";


//  Id pregunta: 1784 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  Indique aquel conjunto de programas que no guardan relaci&oacute;n en cuanto a su funcionalidad";
 choices[34]= new Array();
 choices[34][0] = "Gnumeric, kspread";
 choices[34][1] = "Firefox, Epiphany";
 choices[34][2] = "Thunderbird, Konqueror";
 choices[34][3] = "Dia, kivio";
 answers[34] = choices[34][2];
 units[34] = "61,62";
 comments[34] = "Id Pregunta: 1784. ";


//  Id pregunta: 1793 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  Para representaci&oacute;n del conocimiento, los m&eacute;todos param&eacute;tricos&hellip;";
 choices[35]= new Array();
 choices[35][0] = "Son preferibles para obtener explicaciones de la forma en que el sistema saca las conclusiones";
 choices[35][1] = "Simulan los mecanismos neuronales del pensamiento";
 choices[35][2] = "Emulan los procesos de razonamiento utilizando modelos simb&oacute;licos";
 choices[35][3] = "Permiten utilizar par&aacute;metros por valor y por variable";
 answers[35] = choices[35][1];
 units[35] = "64";
 comments[35] = "Id Pregunta: 1793. ";


//  Id pregunta: 1796 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  Indique cu&aacute;les son las facetas declarativas en la representaci&oacute;n del conocimiento mediante marcos (frameworks):";
 choices[36]= new Array();
 choices[36][0] = "if-needed; if-required e if-deleted";
 choices[36][1] = "if-needed; if-required e if-added";
 choices[36][2] = "if-needed; if-deleted e if-added";
 choices[36][3] = "Ninguna de las anteriores";
 answers[36] = choices[36][3];
 units[36] = "64";
 comments[36] = "Id Pregunta: 1796. ";


//  Id pregunta: 1797 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  Se&ntilde;ale qu&eacute; opci&oacute;n contiene los distintos mecanismos de inferencia utilizando la representaci&oacute;n del conocimiento basada en marcos (frameworks):";
 choices[37]= new Array();
 choices[37][0] = "deducci&oacute;n de valores de slots; actualizaci&oacute;n de valores de slots; y herencia de marcos";
 choices[37][1] = "deducci&oacute;n de valores de slots; actualizaci&oacute;n de valores de slots; y equiparaci&oacute;n de marcos";
 choices[37][2] = "deducci&oacute;n de valores de slots; herencia de slots; y equiparaci&oacute;n de marcos";
 choices[37][3] = "reducci&oacute;n de valores de slots; actualizaci&oacute;n de valores de slots; y equiparaci&oacute;n de marcos";
 answers[37] = choices[37][1];
 units[37] = "64";
 comments[37] = "Id Pregunta: 1797. ";


//  Id pregunta: 1802 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  &iquest;Qu&eacute; categoria de software  no se incluye tipicamente en un producto de gesti&oacute;n del conocimiento?";
 choices[38]= new Array();
 choices[38][0] = "Buscador / Indexador";
 choices[38][1] = "Categorizador automatico";
 choices[38][2] = "Repositorio de documentos";
 choices[38][3] = "LMS";
 answers[38] = choices[38][3];
 units[38] = "64";
 comments[38] = "Id Pregunta: 1802. ";


//  Id pregunta: 1810 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  En los GIS, el sistema UTM:";
 choices[39]= new Array();
 choices[39][0] = "Asocia cada elemento a una clave de zona.";
 choices[39][1] = "Proyecta el globo terr&aacute;queo sobre un cilindro.";
 choices[39][2] = "Almacena la informaci&oacute;n de los pol&iacute;gonos en base a un solo punto.";
 choices[39][3] = "Es un est&aacute;ndar universal para intercambio de datos geogr&aacute;ficos.";
 answers[39] = choices[39][1];
 units[39] = "67";
 comments[39] = "Id Pregunta: 1810. NULL";


//  Id pregunta: 1811 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  Google Earth es un sistema que permite el acceso a informaci&oacute;n geogr&aacute;fica, y que emplea un modelo de datos:";
 choices[40]= new Array();
 choices[40][0] = "&Uacute;nicamente r&aacute;ster.";
 choices[40][1] = "R&aacute;ster y vectorial.";
 choices[40][2] = "&Uacute;nicamente vectorial.";
 choices[40][3] = "Representaci&oacute;n de tipo streaming.";
 answers[40] = choices[40][1];
 units[40] = "67";
 comments[40] = "Id Pregunta: 1811. NULL";


//  Id pregunta: 1815 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  &iquest;Qu&eacute; utilidad puede tener el Data Mining?";
 choices[41]= new Array();
 choices[41][0] = "Predecir valores futuros en base a los datos actuales.";
 choices[41][1] = "Descubrimiento de fraude.";
 choices[41][2] = "Descubrimiento de patrones en los datos.";
 choices[41][3] = "Todas las anteriores.";
 answers[41] = choices[41][3];
 units[41] = "68";
 comments[41] = "Id Pregunta: 1815. ";


//  Id pregunta: 1816 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  &iquest;Para qu&eacute; se utiliza  principalmente el algoritmo k-medias?";
 choices[42]= new Array();
 choices[42][0] = "Clustering.";
 choices[42][1] = "Categorizaci&oacute;n.";
 choices[42][2] = "Predicci&oacute;n.";
 choices[42][3] = "Detecci&oacute;n de fraude.";
 answers[42] = choices[42][0];
 units[42] = "68";
 comments[42] = "Id Pregunta: 1816. ";


//  Id pregunta: 1817 AÃ±o de creación de pregunta: 2006-01-01
 questions[43]= "44)  &iquest;Cu&aacute;l de las siguientes no es una herramienta de Data Mining?";
 choices[43]= new Array();
 choices[43][0] = "Enterprise Miner";
 choices[43][1] = "Clementine";
 choices[43][2] = "Erwin";
 choices[43][3] = "SAP Miner";
 answers[43] = choices[43][2];
 units[43] = "64";
 comments[43] = "Id Pregunta: 1817. ";


//  Id pregunta: 1823 AÃ±o de creación de pregunta: 2006-01-01
 questions[44]= "45)  Las especializaciones de los sistemas de Datawarehouse orientadas a departamentos o &aacute;reas de negocio concretas se denominan:";
 choices[44]= new Array();
 choices[44][0] = "Data Marts.";
 choices[44][1] = "Data Cleansing.";
 choices[44][2] = "Data Mining.";
 choices[44][3] = "Metadata.";
 answers[44] = choices[44][0];
 units[44] = "68";
 comments[44] = "Id Pregunta: 1823. ";


//  Id pregunta: 1832 AÃ±o de creación de pregunta: 2006-01-01
 questions[45]= "46)  OLAP significa:";
 choices[45]= new Array();
 choices[45][0] = "On-Line Automatic Prediction.";
 choices[45][1] = "On-Line Analytical Prediction.";
 choices[45][2] = "On-Line Automatic Processing.";
 choices[45][3] = "On-Line Analytical Processing.";
 answers[45] = choices[45][3];
 units[45] = "68";
 comments[45] = "Id Pregunta: 1832. ";


//  Id pregunta: 4407 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  &iquest;En qu&eacute; consiste el CRA (Customer Relationship Analisis?";
 choices[46]= new Array();
 choices[46][0] = "Es un conjunto de herramientas que proveen de soporte t&eacute;cnico al CRM.";
 choices[46][1] = "Es el precursor del CRM.";
 choices[46][2] = "Es el an&aacute;lisis de datos acerca de los clientes y su relaci&oacute;n con la empresa.";
 choices[46][3] = "Integraci&oacute;n del software de an&aacute;lisis de datos con las bases de datos y el inventario de las organizaciones";
 answers[46] = choices[46][2];
 units[46] = "65";
 comments[46] = "Id Pregunta: 4407. ";


//  Id pregunta: 4461 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  Es un est&aacute;ndar de e-learning: ";
 choices[47]= new Array();
 choices[47][0] = "IEEE";
 choices[47][1] = "ADL";
 choices[47][2] = "LMS";
 choices[47][3] = "SCORM";
 answers[47] = choices[47][3];
 units[47] = "66";
 comments[47] = "Id Pregunta: 4461. ";


//  Id pregunta: 4859 AÃ±o de creación de pregunta: 2007-01-01
 questions[48]= "49)  En un sistema experto tipo MYCIN, &iquest;c&oacute;mo se realiza el tratamiento de la incertidumbre?";
 choices[48]= new Array();
 choices[48][0] = "Mediante un modelo de inferencia bayesiana";
 choices[48][1] = "Mediante conjuntos borrosos, utilizando la teor&iacute;a de Zadeh";
 choices[48][2] = "Mediante factores de incertidumbre, utilizando la teor&iacute;a de Dempster-Shafer";
 choices[48][3] = "No hay tratamiento de la incertidumbre";
 answers[48] = choices[48][2];
 units[48] = "63";
 comments[48] = "Id Pregunta: 4859. ";


//  Id pregunta: 4869 AÃ±o de creación de pregunta: 2007-01-01
 questions[49]= "50)  En un sistema basado en el conocimiento, &iquest;qu&eacute; diferencia hay entre el conocimiento inferencial y el conocimiento estrat&eacute;gico o de control?";
 choices[49]= new Array();
 choices[49][0] = "El conocimiento inferencial est&aacute; contenido en la base de hechos y el de control es el que se obtiene mediante inferencia";
 choices[49][1] = "Los dos son equivalentes";
 choices[49][2] = "Los sistemas basados en el conocimiento no utilizan conocimiento estrat&eacute;gico";
 choices[49][3] = "El conocimiento inferencial procede de razonamientos y el estrat&eacute;gico permite decidir qu&eacute; regla se aplica en cada momento";
 answers[49] = choices[49][3];
 units[49] = "63";
 comments[49] = "Id Pregunta: 4869. ";


//  Id pregunta: 4920 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  Los algoritmos &ldquo;no supervisados&rdquo; en Miner&iacute;a de Datos:";
 choices[50]= new Array();
 choices[50][0] = "Se llaman tambi&eacute;n 'predictivos'.";
 choices[50][1] = "Utilizan la t&eacute;cnica de '&aacute;rboles de decisi&oacute;n'.";
 choices[50][2] = "Sirven para descubrir patrones y tendencias en los datos actuales.";
 choices[50][3] = "Predicen el valor de un atributo de un conjunto de datos, conocidos otros atributos.";
 answers[50] = choices[50][2];
 units[50] = "68";
 comments[50] = "Id Pregunta: 4920. Examen TIC B 2007";


//  Id pregunta: 4988 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  Indique cu&aacute;l de las siguientes NO es una caracter&iacute;stica de los Almacenes de Datos (Datawarehouses):";
 choices[51]= new Array();
 choices[51][0] = "Est&aacute;n orientados al an&aacute;lisis de informaci&oacute;n y la toma de decisiones.";
 choices[51][1] = "Para facilitar el mantenimiento deben utilizar el mismo esquema que exista para la informaci&oacute;n operativa de la empresa.";
 choices[51][2] = "La informaci&oacute;n var&iacute;a en el tiempo.";
 choices[51][3] = "Son colecciones de datos.";
 answers[51] = choices[51][1];
 units[51] = "68";
 comments[51] = "Id Pregunta: 4988. Examen TIC A 2007";


//  Id pregunta: 5000 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  El est&aacute;ndar WMS (Web Map Service), que permite publicar cartograf&iacute;a en Internet, &iquest;a cu&aacute;l de las siguientes organizaciones pertenece?:";
 choices[52]= new Array();
 choices[52][0] = "ISO (International Standards Organization).";
 choices[52][1] = "OGC (Open Geospatial Consortium).";
 choices[52][2] = "FGDC (Federal Geographic Data Committee).";
 choices[52][3] = "Consejo Superior Geogr&aacute;fico.";
 answers[52] = choices[52][1];
 units[52] = "67";
 comments[52] = "Id Pregunta: 5000. Examen TIC A1 2007";


//  Id pregunta: 5125 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  &iquest;Cu&aacute;l de los siguientes acr&oacute;nimos hace referencia a un est&aacute;ndar de modelo de agregaci&oacute;n de contenidos Web para eLearning?";
 choices[53]= new Array();
 choices[53][0] = "CORBA";
 choices[53][1] = "OWR";
 choices[53][2] = "SCORM";
 choices[53][3] = "IQC";
 answers[53] = choices[53][2];
 units[53] = "66";
 comments[53] = "Id Pregunta: 5125. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5502 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l es una de las diferencias entre ROLAP y MOLAP?";
 choices[54]= new Array();
 choices[54][0] = "El grado de interactividad.";
 choices[54][1] = "El preprocesado de los datos desde las bases de datos relacionales a la base de datos multidimensional.";
 choices[54][2] = "El soporte de sistemas para la toma de decisiones.";
 choices[54][3] = "La presentaci&oacute;n de vistas de los datos sobre un n&uacute;mero de dimensiones.";
 answers[54] = choices[54][1];
 units[54] = "68";
 comments[54] = "Id Pregunta: 5502. ";


//  Id pregunta: 5600 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  Se&ntilde;ale la respuesta falsa sobre las redes neuronales";
 choices[55]= new Array();
 choices[55][0] = "Las redes de neuronas son un modelo de representaci&oacute;n del conocimiento de forma simb&oacute;lica";
 choices[55][1] = "Las neuronas se unen entre s&iacute; para formar una red. La fuerza de la uni&oacute;n se valora mediante un peso";
 choices[55][2] = "Para un funcionamiento correcto de la red es necesaria una fase previa de entrenamiento";
 choices[55][3] = "Un algoritmo muy utilizado para entrenar las redes es la retropropagaci&oacute;n";
 answers[55] = choices[55][0];
 units[55] = "64";
 comments[55] = "Id Pregunta: 5600. ";


//  Id pregunta: 5756 AÃ±o de creación de pregunta: 2009-01-01
 questions[56]= "57)  En el contexto de la Inteligencia Artifical, &iquest;cu&aacute;l de los siguientes es un tipo de Red Neuronal?";
 choices[56]= new Array();
 choices[56][0] = "Fenomenol&oacute;gica";
 choices[56][1] = "Facial";
 choices[56][2] = "De Bradley";
 choices[56][3] = "Perceptr&oacute;n";
 answers[56] = choices[56][3];
 units[56] = "63";
 comments[56] = "Id Pregunta: 5756. ";


//  Id pregunta: 6068 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  En el &aacute;mbito de los algoritmos de aprendizaje";
 choices[57]= new Array();
 choices[57][0] = "Los algoritmos de agrupamiento son m&eacute;todos de aprendizaje supervisado y los de clasificaci&oacute;n son m&eacute;todos de aprendizaje no supervisado";
 choices[57][1] = "Los algoritmos de agrupamiento son m&eacute;todos de aprendizaje no supervisado y los de clasificaci&oacute;n son m&eacute;todos de aprendizaje supervisado";
 choices[57][2] = "Tanto los algoritmos de agrupamiento como de clasificaci&oacute;n son m&eacute;todos aprendizaje supervisado";
 choices[57][3] = "Tanto los algoritmos de agrupamiento como de clasificaci&oacute;n son m&eacute;todos aprendizaje no supervisado";
 answers[57] = choices[57][1];
 units[57] = "63,64";
 comments[57] = "Id Pregunta: 6068. ";


//  Id pregunta: 6132 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  La creaci&oacute;n de una vista l&oacute;gica unificada de los datos, a&uacute;n cuando &eacute;stos est&eacute;n dispersos entre varias bases de datos f&iacute;sicas, para as&iacute; disponer de un &uacute;nico modelo de trabajo de los datos de la organizaci&oacute;n, es una manera de definir:";
 choices[58]= new Array();
 choices[58][0] = "Un almac&eacute;n de datos.";
 choices[58][1] = "Un sistema OLAP.";
 choices[58][2] = "Un sistema de informaci&oacute;n a la direcci&oacute;n.";
 choices[58][3] = "Una base de datos.";
 answers[58] = choices[58][0];
 units[58] = "68";
 comments[58] = "Id Pregunta: 6132. TIC A 2009";


//  Id pregunta: 6329 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  Una actualizaci&oacute;n de los datos del Data Warehouse consistir&aacute; b&aacute;sicamente en:";
 choices[59]= new Array();
 choices[59][0] = "Modificar los valores de ciertos registros (tuplas de las relaciones subyacentes).";
 choices[59][1] = "Borrar los registros de tasa de utilizaci&oacute;n baja.";
 choices[59][2] = "Inserci&oacute;n de nuevos datos (que eventualmente diferir&aacute;n de otros ya existentes s&oacute;lo en la marca temporal).";
 choices[59][3] = "Un Data Warehouse no se actualiza pues contiene s&oacute;lo datos hist&oacute;ricos.";
 answers[59] = choices[59][2];
 units[59] = "68";
 comments[59] = "Id Pregunta: 6329. ";


//  Id pregunta: 6330 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  &iquest;Cu&aacute;l de las siguientes acciones no se puede considerar del modo de operar del Data Mining?";
 choices[60]= new Array();
 choices[60][0] = "Adivinar futuros comportamientos.";
 choices[60][1] = "Crear modelos.";
 choices[60][2] = "Analizar relaciones.";
 choices[60][3] = "Detectar desviaciones.";
 answers[60] = choices[60][0];
 units[60] = "68";
 comments[60] = "Id Pregunta: 6330. ";


//  Id pregunta: 6338 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  Si se dispone correctamente una soluci&oacute;n CRM, &iquest;qu&eacute; ventajas puede reportar?. Se&ntilde;ale la falsa:";
 choices[61]= new Array();
 choices[61][0] = "Reducci&oacute;n de los costes del centro de contacto.";
 choices[61][1] = "Aumento de la satisfacci&oacute;n de los clientes y de los porcentajes de conversi&oacute;n de las ventas.";
 choices[61][2] = "Mejora de los resultados de ventas en todos los canales (directos, indirectos y a trav&eacute;s de socios).";
 choices[61][3] = "Aumento de los costes de las operaciones del servicio &ldquo;in situ&rdquo;. ";
 answers[61] = choices[61][3];
 units[61] = "65";
 comments[61] = "Id Pregunta: 6338. ";


//  Id pregunta: 6352 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  &iquest;Cu&aacute;l de las siguientes sentencias relativas al software libre es verdadera?";
 choices[62]= new Array();
 choices[62][0] = "El software libre es por definici&oacute;n gratuito";
 choices[62][1] = "Es lo mismo que el software de fuentes abiertas";
 choices[62][2] = "No existe software libre para Windows";
 choices[62][3] = "Ninguna de las anteriores";
 answers[62] = choices[62][3];
 units[62] = "61";
 comments[62] = "Id Pregunta: 6352. ";


//  Id pregunta: 6428 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  Jboss es un servidor de aplicaciones desarrollado por:";
 choices[63]= new Array();
 choices[63][0] = "Red Hat";
 choices[63][1] = "Canonical";
 choices[63][2] = "Apache";
 choices[63][3] = "GNU";
 answers[63] = choices[63][0];
 units[63] = "62";
 comments[63] = "Id Pregunta: 6428. NULL";


//  Id pregunta: 6440 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  &iquest;Cu&aacute;l de los siguientes m&oacute;dulos no forma parte del ERP Oracle Applications?";
 choices[64]= new Array();
 choices[64][0] = "Oracle Payables";
 choices[64][1] = "Oracle Inventory";
 choices[64][2] = "Oracle Receivables";
 choices[64][3] = "Oracle Customers.";
 answers[64] = choices[64][3];
 units[64] = "65";
 comments[64] = "Id Pregunta: 6440. ";


//  Id pregunta: 6495 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  &iquest;Cu&aacute;l de las siguientes es una Learning Management System liberada bajo licencia GPL?";
 choices[65]= new Array();
 choices[65][0] = "Lucus";
 choices[65][1] = "Raxor";
 choices[65][2] = "Esprat";
 choices[65][3] = "Leat";
 answers[65] = choices[65][0];
 units[65] = "66";
 comments[65] = "Id Pregunta: 6495. Castilla La Mancha 2009";


//  Id pregunta: 6498 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  NO corresponde a una libertad del software libre, seg&uacute;n la FSF:";
 choices[66]= new Array();
 choices[66][0] = "La libertad de usar el programa, con cualquier prop&oacute;sito";
 choices[66][1] = "La libertad de estudiar c&oacute;mo funciona el programa, y adaptarlo a sus necesidades";
 choices[66][2] = "La libertad de distribuir copias, con la autorizaci&oacute;n expl&iacute;cita del autor";
 choices[66][3] = "La libertad de mejorar el programa y hacer p&uacute;blicas las mejoras a los dem&aacute;s, de modo que toda la comunidad se beneficie";
 answers[66] = choices[66][2];
 units[66] = "61";
 comments[66] = "Id Pregunta: 6498. ";


//  Id pregunta: 6502 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  Es una licencia compatible con GPL:";
 choices[67]= new Array();
 choices[67][0] = "NPL";
 choices[67][1] = "MPL";
 choices[67][2] = "BSD Original";
 choices[67][3] = "Ninguna de las anteriores";
 answers[67] = choices[67][3];
 units[67] = "61";
 comments[67] = "Id Pregunta: 6502. ";


//  Id pregunta: 8284 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  El m&eacute;todo de b&uacute;squeda informado que tiene en cuenta el coste m&iacute;nimo necesario para llegar al estado soluci&oacute;n pasando por el estado X, es el denominado:";
 choices[68]= new Array();
 choices[68][0] = "M&eacute;todo de b&uacute;squeda bidireccional.";
 choices[68][1] = "B&uacute;squeda &aacute;vida (Greedy search).";
 choices[68][2] = "B&uacute;squeda con adversario.";
 choices[68][3] = "M&eacute;todo Escalada simple (&quot;Hill-climbing&quot; search).";
 answers[68] = choices[68][1];
 units[68] = "63";
 comments[68] = "Id Pregunta: 8284. Examen TIC A1 2010";


//  Id pregunta: 8345 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  Dado un grafo G = (V, E) donde V es el conjunto de v&eacute;rtices y E es conjunto de aristas. Diremos que es hamiltoniano si:";
 choices[69]= new Array();
 choices[69][0] = "Todos los v&eacute;rtices tienen el mismo grado.";
 choices[69][1] = "Contiene un ciclo que pasa por todos los v&eacute;rtices del grafo.";
 choices[69][2] = "No contiene ciclos.";
 choices[69][3] = "Es conexo y contiene un ciclo.";
 answers[69] = choices[69][1];
 units[69] = "64";
 comments[69] = "Id Pregunta: 8345. Examen TIC A2 2010";


//  Id pregunta: 8604 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  &iquest;Cu&aacute;l de las siguientes utilidades permite realizar miner&iacute;a de datos?";
 choices[70]= new Array();
 choices[70][0] = "JDataMiner.";
 choices[70][1] = "Cubos OLAP de Excel.";
 choices[70][2] = "VNC.";
 choices[70][3] = "Extract to Learnt by SQLServer.";
 answers[70] = choices[70][1];
 units[70] = "68";
 comments[70] = "Id Pregunta: 8604. Examen TIC A2 2010 interna";


//  Id pregunta: 8867 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  En el contexto de Almac&eacute;n de datos (Data Warehouse) a los subconjuntos de datos para &aacute;reas especificas se le llama:";
 choices[71]= new Array();
 choices[71][0] = "Metadata.";
 choices[71][1] = "Data Marts.";
 choices[71][2] = "Data Ware.";
 choices[71][3] = "Data Store.";
 answers[71] = choices[71][1];
 units[71] = "68";
 comments[71] = "Id Pregunta: 8867. Analista Ayto. Madrid 2010";


//  Id pregunta: 8901 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  &iquest;cu&aacute;l de los siguientes no es un ERP?";
 choices[72]= new Array();
 choices[72][0] = "SAP";
 choices[72][1] = "Tango";
 choices[72][2] = "Calipso";
 choices[72][3] = "Twister";
 answers[72] = choices[72][3];
 units[72] = "65";
 comments[72] = "Id Pregunta: 8901. ";


//  Id pregunta: 8923 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  Cuando un antivirus utiliza t&eacute;cnicas heur&iacute;sticas significa que:";
 choices[73]= new Array();
 choices[73][0] = "monitoriza continuamente el sistema para detectar amenazas.";
 choices[73][1] = "puede eliminar troyanos y rootkits sin da&ntilde;ar el sistema.";
 choices[73][2] = "puede reconocer c&oacute;digos maliciosos aunque no se encuentren en su base de datos.";
 choices[73][3] = "interroga a otros equipos de confianza para obtener informaci&oacute;n sobre los ficheros";
 answers[73] = choices[73][2];
 units[73] = "63";
 comments[73] = "Id Pregunta: 8923. Operador Ayto. Madrid 2010";


//  Id pregunta: 9153 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  No es un concepto relacionado con los sistemas de eLearning:";
 choices[74]= new Array();
 choices[74][0] = "VLE";
 choices[74][1] = "LSS";
 choices[74][2] = "LME";
 choices[74][3] = "ILS";
 answers[74] = choices[74][2];
 units[74] = "66";
 comments[74] = "Id Pregunta: 9153. ";


//  Id pregunta: 9157 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  De acuerdo a AGR010, un sistema CMI (Computer Managed Instruction) con un entorno basado en web, no tiene por qu&eacute; cumplir con:";
 choices[75]= new Array();
 choices[75][0] = "Comunicaci&oacute;n HTTP (HACP Binding)";
 choices[75][1] = "Comunicaci&oacute;n mediante API (API Binding)";
 choices[75][2] = "Definici&oacute;n de la estructura del curso (File Binding)";
 choices[75][3] = "Definici&oacute;n de los tipos de datos del curso (Data Binding) ";
 answers[75] = choices[75][3];
 units[75] = "66";
 comments[75] = "Id Pregunta: 9157. ";


//  Id pregunta: 9159 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  No es una forma de presentar contenidos en un LMS:";
 choices[76]= new Array();
 choices[76][0] = "Estructura lineal";
 choices[76][1] = "Estructura matricial";
 choices[76][2] = "Estructura jer&aacute;rquica";
 choices[76][3] = "Estructura en red";
 answers[76] = choices[76][1];
 units[76] = "66";
 comments[76] = "Id Pregunta: 9159. ";


//  Id pregunta: 9160 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  Cu&aacute;l NO es un tipo de compresi&oacute;n utilizado para el almacenamiento de informaci&oacute;n raster:";
 choices[77]= new Array();
 choices[77][0] = "Run Length Encoding (RLE)";
 choices[77][1] = "Quadtrees";
 choices[77][2] = "Tiff";
 choices[77][3] = "Wavelets";
 answers[77] = choices[77][2];
 units[77] = "67";
 comments[77] = "Id Pregunta: 9160. NULL";


//  Id pregunta: 9162 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  La norma ISO referida a la calidad en la informaci&oacute;n geogr&aacute;fica es:";
 choices[78]= new Array();
 choices[78][0] = "ISO 19110";
 choices[78][1] = "ISO 19113";
 choices[78][2] = "ISO 19119";
 choices[78][3] = "ISO 19139";
 answers[78] = choices[78][1];
 units[78] = "67";
 comments[78] = "Id Pregunta: 9162. NULL";


//  Id pregunta: 9688 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  Un almac&eacute;n de datos almacena:";
 choices[79]= new Array();
 choices[79][0] = "S&oacute;lo informaci&oacute;n actual.";
 choices[79][1] = "Informaci&oacute;n no vol&aacute;til.";
 choices[79][2] = "Informaci&oacute;n actual e hist&oacute;rica.";
 choices[79][3] = "B y C son correctas.";
 answers[79] = choices[79][2];
 units[79] = "68";
 comments[79] = "Id Pregunta: 9688. ";


//  Id pregunta: 9753 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  &iquest;Qu&eacute; es el &quot;Data staging area&quot; en el contexto de los Data Warehouses?";
 choices[80]= new Array();
 choices[80][0] = "Es un almac&eacute;n previo de datos y sus procesos asociados, en el que se extraen los datos de las fuentes, se transforman y se adaptan antes de ser cargados en el almac&eacute;n de datos.";
 choices[80][1] = "Durante la fase de dise&ntilde;o de un almac&eacute;n de datos, es la base de datos no permanente usada para ensayar, demostrar y estudiar el rendimiento de los dise&ntilde;os propuestos.";
 choices[80][2] = "Es el &aacute;rea del almac&eacute;n (conceptual o f&iacute;sicamente separada en otra base de datos) donde se cachean las consultas preparadas, cuando &eacute;stas no pueden ejecutarse en tiempo real.";
 choices[80][3] = "Es una copia id&eacute;ntica de las bases de datos originales, cuando en ellas existe mucha carga y no es posible bloquearlas para asegurar la integridad referencial al copiar los datos.";
 answers[80] = choices[80][0];
 units[80] = "68";
 comments[80] = "Id Pregunta: 9753. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9972 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  &iquest;Cu&aacute;l de los siguientes se corresponde con un m&oacute;dulo dentro de un ERP (Enterprise Resource Planning)?";
 choices[81]= new Array();
 choices[81][0] = "Recursos Humanos";
 choices[81][1] = "Planificaci&oacute;n Estrat&eacute;gica";
 choices[81][2] = "Seguridad de Informaci&oacute;n";
 choices[81][3] = "HelpDesk";
 answers[81] = choices[81][0];
 units[81] = "65";
 comments[81] = "Id Pregunta: 9972. Examen TICA1, Xunta de GaliciA, 2011";


//  Id pregunta: 9979 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  Un sistema que puede emplearse para registrar la relaci&oacute;n del ciudadano con la administraci&oacute;n, anotando todas las relaciones establecidas por &eacute;l, para configurar su personalidad administrativa digital es ";
 choices[82]= new Array();
 choices[82][0] = "Gesti&oacute;n de la Relaci&oacute;n con el Cliente (CRM) ";
 choices[82][1] = "Arquitectura Orientada a Servicios (SOA) ";
 choices[82][2] = "Planificaci&oacute;n de Recursos Empresariales (ERP) ";
 choices[82][3] = "Gesti&oacute;n de Procesos de Negocio (BPM) ";
 answers[82] = choices[82][0];
 units[82] = "65";
 comments[82] = "Id Pregunta: 9979. Examen TICA2, Xunta de GaliciA, 2011";


//  Id pregunta: 9989 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  &iquest;Cu&aacute;l de los siguientes no es un sistema de gesti&oacute;n de conocimiento con licencia de software libre?";
 choices[83]= new Array();
 choices[83][0] = "ATutor";
 choices[83][1] = "Claroline";
 choices[83][2] = "Joomla";
 choices[83][3] = "Moodle";
 answers[83] = choices[83][2];
 units[83] = "66";
 comments[83] = "Id Pregunta: 9989. ";


//  Id pregunta: 10251 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  FooCorp distribuye un software propietario que enlaza con una librer&iacute;a no modificada que se distribuye mediante la licencia LGPL. &iquest;Obliga LGPL a FooCorp a permitir la ingenier&iacute;a inversa de su software propietario para el uso exclusivo del usuario?";
 choices[84]= new Array();
 choices[84][0] = "Si";
 choices[84][1] = "Si, aunque s&oacute;lo si distribuye el software mediante licencia LGPL";
 choices[84][2] = "No";
 choices[84][3] = "No, LGPL no permite este tipo de usos";
 answers[84] = choices[84][0];
 units[84] = "61";
 comments[84] = "Id Pregunta: 10251. ";


//  Id pregunta: 10275 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Los agentes inteligentes, seg&uacute;n su capacidad para resolver problemas, pueden ser:";
 choices[85]= new Array();
 choices[85][0] = "Reactivos";
 choices[85][1] = "Predictivos";
 choices[85][2] = "Ambas";
 choices[85][3] = "Ninguna";
 answers[85] = choices[85][0];
 units[85] = "63";
 comments[85] = "Id Pregunta: 10275. NULL";


//  Id pregunta: 10276 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Ventajas de la representaci&oacute;n del conocimiento mediante reglas. Se&ntilde;ale la falsa";
 choices[86]= new Array();
 choices[86][0] = "Facilidad de representaci&oacute;n";
 choices[86][1] = "Direcci&oacute;n de inferencia prefijada";
 choices[86][2] = "Modularidad";
 choices[86][3] = "Flexibilidad";
 answers[86] = choices[86][1];
 units[86] = "64";
 comments[86] = "Id Pregunta: 10276. NULL";


//  Id pregunta: 10280 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  Se&ntilde;ale la afirmaci&oacute;n falsa en relaci&oacute;n a las redes neuronales";
 choices[87]= new Array();
 choices[87][0] = "Son un m&eacute;todo de representaci&oacute;n del conocimiento param&eacute;trico";
 choices[87][1] = "La unidad de representaci&oacute;n de m&aacute;s alto nivel es la neurona";
 choices[87][2] = "Las neuronas se conectan mediante arcos";
 choices[87][3] = "Las neuronas se agrupan en capas";
 answers[87] = choices[87][1];
 units[87] = "64";
 comments[87] = "Id Pregunta: 10280. NULL";


//  Id pregunta: 10292 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  &iquest;A qu&eacute; altitud aproximada est&aacute; la &oacute;rbita de los sat&eacute;lites que forman el sistema GPS?";
 choices[88]= new Array();
 choices[88][0] = "5.200 km";
 choices[88][1] = "20.200 km";
 choices[88][2] = "36.200 km";
 choices[88][3] = "45.200 km";
 answers[88] = choices[88][1];
 units[88] = "67";
 comments[88] = "Id Pregunta: 10292. TIC A2, libre, examen 2013";


//  Id pregunta: 10293 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  Uno de los siguientes t&eacute;rminos NO se corresponde con un tipo de antena satelital:";
 choices[89]= new Array();
 choices[89][0] = "Cassegrain";
 choices[89][1] = "Krenwinkel";
 choices[89][2] = "Gregorian";
 choices[89][3] = "Offset";
 answers[89] = choices[89][1];
 units[89] = "67";
 comments[89] = "Id Pregunta: 10293. TIC A2, libre, examen 2013";


//  Id pregunta: 10622 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  Son proyectos SIG (Sistemas de Informaci&oacute;n Geogr&aacute;fica) en Espa&ntilde;a:";
 choices[90]= new Array();
 choices[90][0] = "SIC y SILG.";
 choices[90][1] = "SIGNA y SIANE.";
 choices[90][2] = "SIGMA y SIGPAC.";
 choices[90][3] = "SIGMAPA y SEGRO.";
 answers[90] = choices[90][1];
 units[90] = "67";
 comments[90] = "Id Pregunta: 10622. ";


//  Id pregunta: 10624 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Una sistema de gesti&oacute;n de base de datos NoSQL...";
 choices[91]= new Array();
 choices[91][0] = "&hellip; es un sistema de base de datos relacional que no utiliza SQL.";
 choices[91][1] = "&hellip; almacena sus datos en estructuras fijas (tablas).";
 choices[91][2] = "&hellip; garantiza completamente las propiedades ACID.";
 choices[91][3] = "&hellip; tienen como ventaja principal la gran escalabilidad y rendimiento.";
 answers[91] = choices[91][3];
 units[91] = "68";
 comments[91] = "Id Pregunta: 10624. ";


//  Id pregunta: 10811 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Se&ntilde;ale cu&aacute;l de las siguientes respuestas NO se considera una de las libertades esenciales que cumple el software libre:";
 choices[92]= new Array();
 choices[92][0] = "Libertad para ejecutar y usar el software con la &uacute;nica restricci&oacute;n que se debe especificar y aprobar su prop&oacute;sito.";
 choices[92][1] = "Libertad para estudiar el programa y modificarlo, adapt&aacute;ndolo a sus necesidades.";
 choices[92][2] = "Libertad de distribuir copias.";
 choices[92][3] = "Libertad de modificar el programa y liberar las modificaciones al p&uacute;blico.";
 answers[92] = choices[92][0];
 units[92] = "61";
 comments[92] = "Id Pregunta: 10811. Examen GSI 2014";


//  Id pregunta: 10813 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Se&ntilde;ale cu&aacute;les de los siguientes formatos de archivo en la actualidad NO se consideran de formato abierto de texto para documentos:";
 choices[93]= new Array();
 choices[93][0] = "PDF";
 choices[93][1] = "EPUB";
 choices[93][2] = "RTF";
 choices[93][3] = "FLAC";
 answers[93] = choices[93][3];
 units[93] = "61, 62";
 comments[93] = "Id Pregunta: 10813. Examen GSI 2014";


//  Id pregunta: 10922 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l de los siguientes servicios transforma un texto original en un hipertexto con v&iacute;nculos geogr&aacute;ficos?:";
 choices[94]= new Array();
 choices[94][0] = "Coberturas en Web (WCS).";
 choices[94][1] = "Nom&eacute;nclator (Gazetteer).";
 choices[94][2] = "Cat&aacute;logo (CSW).";
 choices[94][3] = "Geoparser.";
 answers[94] = choices[94][3];
 units[94] = "67";
 comments[94] = "Id Pregunta: 10922. TIC A1 AGE 2014";


//  Id pregunta: 10947 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Dentro de las soluciones en el &aacute;mbito de BigData, la arquitectura Hadoop consta del m&oacute;dulo MapReduce que consiste en:";
 choices[95]= new Array();
 choices[95][0] = "Un framework para escribir aplicaciones que procesan grandes cantidades de datos en paralelo.";
 choices[95][1] = "Una base de datos no relacional y distribuida, con varios maestros, escalable y sin puntos &uacute;nicos de fallo.";
 choices[95][2] = "Un sistema de archivos distribuido que proporciona acceso de alto rendimiento a los datos de la aplicaci&oacute;n.";
 choices[95][3] = "Una infraestructura de data warehouse que proporciona los datos resumidos y consultas ad hoc.";
 answers[95] = choices[95][0];
 units[95] = "68";
 comments[95] = "Id Pregunta: 10947. TIC A1 AGE 2014";


//  Id pregunta: 10956 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Un agente inteligente es un programa inform&aacute;tico que:";
 choices[96]= new Array();
 choices[96][0] = "Por encargo de un usuario u otro programa realiza sugerencias determin&iacute;sticas predeterminadas.";
 choices[96][1] = "Por encargo de un usuario realiza sugerencias que requieren cierto grado de aprendizaje, sin llegar a ejecutar tareas.";
 choices[96][2] = "Por encargo de un usuario u otro programa, realiza de forma aut&oacute;noma tareas que requieren cierto grado de inteligencia y aprendizaje.";
 choices[96][3] = "Por encargo de un usuario realiza sugerencias que deben ser evaluadas por el usuario que las encarga antes de ser ejecutadas.";
 answers[96] = choices[96][2];
 units[96] = "63";
 comments[96] = "Id Pregunta: 10956. TIC A1 AGE 2014";


//  Id pregunta: 11281 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Qu&eacute; es un servicio WPS?";
 choices[97]= new Array();
 choices[97][0] = "Un servicio de descarga de datos vectoriales";
 choices[97][1] = "Un servicio de visualizaci&oacute;n de coberturas r&aacute;ster";
 choices[97][2] = "Un servicio de transformaci&oacute;n";
 choices[97][3] = "No es un tipo de servicio";
 answers[97] = choices[97][2];
 units[97] = "67";
 comments[97] = "Id Pregunta: 11281. ";


//  Id pregunta: 11282 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Qu&eacute; es un servicio WMTS?";
 choices[98]= new Array();
 choices[98][0] = "Un tipo de recubrimiento SOAP";
 choices[98][1] = "Un servicio de cat&aacute;logo cacheado";
 choices[98][2] = "Un servicio de visualizaci&oacute;n de mapas sin teselas, pero cacheado";
 choices[98][3] = "Un servicio de visualizaci&oacute;n de mapas teselado";
 answers[98] = choices[98][3];
 units[98] = "67";
 comments[98] = "Id Pregunta: 11282. ";


//  Id pregunta: 11537 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Al redistribuir una obra derivada de un programa con licencia GPL, &iquest;cu&aacute;l de los siguientes elementos no es necesario incluir?:";
 choices[99]= new Array();
 choices[99][0] = "La licencia.";
 choices[99][1] = "La lista de modificaciones.";
 choices[99][2] = "El autor de las modificaciones.";
 choices[99][3] = "Es obligatorio incluir todos los anteriores.";
 answers[99] = choices[99][3];
 units[99] = "62";
 comments[99] = "Id Pregunta: 11537. NULL";


