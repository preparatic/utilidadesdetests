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

//  Id pregunta: 862 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de los siguientes elementos no forma parte de la arquitectura basada en inteligencia artificial?:";
 choices[0]= new Array();
 choices[0][0] = "Base de conocimientos";
 choices[0][1] = "Sistema inferencial";
 choices[0][2] = "Motor inferencial";
 choices[0][3] = "Memoria de trabajo";
 answers[0] = choices[0][2];
 units[0] = "64";
 comments[0] = "Id Pregunta: 862. ";


//  Id pregunta: 869 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Cu&aacute;l de los siguientes no es un lenguaje declarativo?:";
 choices[1]= new Array();
 choices[1][0] = "Prolog";
 choices[1][1] = "LISP";
 choices[1][2] = "Clos";
 choices[1][3] = "Todos los lenguajes anteriores son declarativos";
 answers[1] = choices[1][3];
 units[1] = "64";
 comments[1] = "Id Pregunta: 869. ";


//  Id pregunta: 926 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;Qu&eacute; es la l&oacute;gica borrosa o difusa -fuzzy logic-?:";
 choices[2]= new Array();
 choices[2][0] = "Es una rama de la l&oacute;gica binaria que invierte los conceptos para que el ordenador realice operaciones m&aacute;s eficientemente en l&oacute;gica negativa aunque para el ser humano se pierda comprensi&oacute;n";
 choices[2][1] = "Es una rama de la ingenier&iacute;a que trata la l&oacute;gica booleana mediante transformaciones puntuales de cambios de base para introducir variables auxiliares a conveniencia";
 choices[2][2] = "Es una rama de la ingenier&iacute;a que simplifica ecuaciones muy complejas para resolverlas mediante aproximaciones de los valores de la soluci&oacute;n seg&uacute;n grados de pertenencia a conjuntos m&aacute;s o menos subjetivos y probabil&iacute;sticos";
 choices[2][3] = "Nada de lo anterior es cierto";
 answers[2] = choices[2][2];
 units[2] = "63";
 comments[2] = "Id Pregunta: 926. ";


//  Id pregunta: 1072 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  En cuanto a las t&eacute;cnicas de representaci&oacute;n del conocimiento, podemos afirmar que:";
 choices[3]= new Array();
 choices[3][0] = "Un Sistema Basado en el Conocimiento (SBC) es un sistema inform&aacute;tico cuya principal caracter&iacute;stica reside en que el conocimiento necesario para resolver un problema aparece como estructura procesable separada del procedimiento que la manipula";
 choices[3][1] = "Los mecanismos de inferencia son paradigmas de representaci&oacute;n utilizados en las bases de conocimiento de los SBC";
 choices[3][2] = "La representaci&oacute;n param&eacute;trica est&aacute; basada en una concepci&oacute;n epistemol&oacute;gica del mundo en t&eacute;rminos de conceptos";
 choices[3][3] = "Las representaciones de tipo simb&oacute;lico est&aacute;n basadas en una visi&oacute;n del mundo de tipo fisiol&oacute;gico, tales como las redes neuronales";
 answers[3] = choices[3][0];
 units[3] = "64";
 comments[3] = "Id Pregunta: 1072. ";


//  Id pregunta: 1167 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  Entre las formas de representaci&oacute;n param&eacute;trica del conocimiento se encuentra:";
 choices[4]= new Array();
 choices[4][0] = "Reglas de producci&oacute;n";
 choices[4][1] = "Reglas sem&aacute;nticas";
 choices[4][2] = "Redes neuronales";
 choices[4][3] = "Restricciones";
 answers[4] = choices[4][2];
 units[4] = "64";
 comments[4] = "Id Pregunta: 1167. ";


//  Id pregunta: 1177 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  Indicar cu&aacute;l de las siguientes no es una estructura v&aacute;lida de marcos en las bases de conocimiento:";
 choices[5]= new Array();
 choices[5][0] = "Jerarqu&iacute;a circular";
 choices[5][1] = "Jerarqu&iacute;a simple";
 choices[5][2] = "Jerarqu&iacute;a m&uacute;ltiple";
 choices[5][3] = "Colecci&oacute;n lineal";
 answers[5] = choices[5][0];
 units[5] = "64";
 comments[5] = "Id Pregunta: 1177. ";


//  Id pregunta: 1202 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  KADS es una metodolog&iacute;a de desarrollo de sistemas basados en en el conocimiento. Se divide en varias fases, entre las que no se encuentra:";
 choices[6]= new Array();
 choices[6][0] = "Refino de la base de conocimiento";
 choices[6][1] = "Implementaci&oacute;n";
 choices[6][2] = "Uso";
 choices[6][3] = "Clasificaci&oacute;n";
 answers[6] = choices[6][3];
 units[6] = "64";
 comments[6] = "Id Pregunta: 1202. ";


//  Id pregunta: 1261 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  Las redes neuronales son:";
 choices[7]= new Array();
 choices[7][0] = "Redes de comunicaciones controladas por inteligencia artificial";
 choices[7][1] = "Redes de ordenadores que piensan";
 choices[7][2] = "Una tecnolog&iacute;a que emula el funcionamiento del cerebro humano";
 choices[7][3] = "Nada de lo anterior";
 answers[7] = choices[7][2];
 units[7] = "63";
 comments[7] = "Id Pregunta: 1261. ";


//  Id pregunta: 1356 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Se&ntilde;ale la sentencia correcta respecto a los m&eacute;todos de resoluci&oacute;n de problemas:";
 choices[8]= new Array();
 choices[8][0] = "El m&eacute;todo GPS (General Problem Solver) consiste en almacenar en un momento dado el camino recorrido desde la ra&iacute;z mediante el empleo de funciones recursivas";
 choices[8][1] = "El m&eacute;todo STRIPS (Stanford Research Institute Problem Solver) une la filosof&iacute;a GPS con las t&eacute;cnicas de b&uacute;squeda en profundidad";
 choices[8][2] = "El m&eacute;todo GPS consiste en descomponer un problema de manera sistem&aacute;tica en subproblemas";
 choices[8][3] = "El m&eacute;todo STRIPS no puede representar conceptos y deducir a partir de ellos nuevos hechos mediante las reglas de deducci&oacute;n";
 answers[8] = choices[8][2];
 units[8] = "63";
 comments[8] = "Id Pregunta: 1356. ";


//  Id pregunta: 1630 AÃ±o de creación de pregunta: 2003-01-01
 questions[9]= "10)  Sobre lenguajes de comunicaci&oacute;n entre sistemas multiagente cual es cierta";
 choices[9]= new Array();
 choices[9][0] = "Se utiliza KQML porque aporta generalidad y ortogonalidad ";
 choices[9][1] = "Se utiliza KQML porque aporta generalidad y no ortogonalidad";
 choices[9][2] = "utiliza KIF porque aporta generalidad y ortogonalidad";
 choices[9][3] = "Se utiliza ARCHON porque aporta generalidad y ortogonalidad";
 answers[9] = choices[9][0];
 units[9] = "63";
 comments[9] = "Id Pregunta: 1630. ";


//  Id pregunta: 1786 AÃ±o de creación de pregunta: 2006-01-01
 questions[10]= "11)  Los m&eacute;todos de busca heur&iacute;stica&hellip;";
 choices[10]= new Array();
 choices[10][0] = "Nunca encuentran la soluci&oacute;n &oacute;ptima";
 choices[10][1] = "Dan con la soluci&oacute;n &oacute;ptima en menos tiempo";
 choices[10][2] = "Dan con la soluci&oacute;n &oacute;ptima pero pueden ser m&aacute;s lentos que otros m&eacute;todos";
 choices[10][3] = "Permiten encontrar una buena soluci&oacute;n r&aacute;pidamente pero puede no ser la &oacute;ptima";
 answers[10] = choices[10][3];
 units[10] = "63";
 comments[10] = "Id Pregunta: 1786. ";


//  Id pregunta: 1794 AÃ±o de creación de pregunta: 2006-01-01
 questions[11]= "12)  Para representaci&oacute;n del conocimiento, las redes sem&aacute;nticas";
 choices[11]= new Array();
 choices[11][0] = "Utilizan redes donde los nodos son ideas y los arcos relaciones entre ellas";
 choices[11][1] = "Utilizan slots donde cada slot se corresponde con una idea ";
 choices[11][2] = "Generan nuevas soluciones mediante mutaciones aleatorias de la poblaci&oacute;n";
 choices[11][3] = "Utilizan redes donde cada nodo tiene un valor y cada arco un sentido y un valor.";
 answers[11] = choices[11][0];
 units[11] = "64";
 comments[11] = "Id Pregunta: 1794. ";


//  Id pregunta: 1799 AÃ±o de creación de pregunta: 2006-01-01
 questions[12]= "13)  En sistemas de representaci&oacute;n del conocimiento mediante reglas, el disparo de una regla en el mecanismo de inferencia con encadenamiento hacia delante:";
 choices[12]= new Array();
 choices[12][0] = "Produce en general cambios en la base de hechos, de forma que reglas que se pod&iacute;an disparar dejan de poder hacerlo y otras pasan a verificar su antecedente";
 choices[12][1] = "Produce en general cambios en la base de hechos, de forma que reglas que se pod&iacute;an disparar pueden seguir haci&eacute;ndolo y otras pasan tambi&eacute;n a verificar su antecedente";
 choices[12][2] = "El antecedente de la regla seleccionada est&aacute; formado por hechos que son consi-derados ahora como subobjetivos iniciando de nuevo el proceso";
 choices[12][3] = "La idea es partir del objetivo, seleccionar una regla y entonces elegir como otro u otros subobjetivos los hechos que est&aacute;n en el antecedente de la regla seleccionada, repitiendo el proceso de selecci&oacute;n de regla hasta alcanzar los datos";
 answers[12] = choices[12][0];
 units[12] = "64";
 comments[12] = "Id Pregunta: 1799. ";


//  Id pregunta: 1802 AÃ±o de creación de pregunta: 2006-01-01
 questions[13]= "14)  &iquest;Qu&eacute; categoria de software  no se incluye tipicamente en un producto de gesti&oacute;n del conocimiento?";
 choices[13]= new Array();
 choices[13][0] = "Buscador / Indexador";
 choices[13][1] = "Categorizador automatico";
 choices[13][2] = "Repositorio de documentos";
 choices[13][3] = "LMS";
 answers[13] = choices[13][3];
 units[13] = "64";
 comments[13] = "Id Pregunta: 1802. ";


//  Id pregunta: 5599 AÃ±o de creación de pregunta: 2003-01-01
 questions[14]= "15)  Indicar la respuesta verdadera sobre los mecanismos de inferencia";
 choices[14]= new Array();
 choices[14][0] = "En las redes sem&aacute;nticas la inferencia se hace mediante herencia y emparejamiento";
 choices[14][1] = "En los marcos la inferencia se hace mediante deducci&oacute;n de valores de slots, actualizaci&oacute;n de valores de slots y equiparaci&oacute;n de marcos";
 choices[14][2] = "En las reglas la inferencia se hace mediante encadenamiento hacia delante y hacia atr&aacute;s";
 choices[14][3] = "Todas las respuestas anteriores son v&aacute;lidas";
 answers[14] = choices[14][3];
 units[14] = "64";
 comments[14] = "Id Pregunta: 5599. ";


//  Id pregunta: 5600 AÃ±o de creación de pregunta: 2003-01-01
 questions[15]= "16)  Se&ntilde;ale la respuesta falsa sobre las redes neuronales";
 choices[15]= new Array();
 choices[15][0] = "Las redes de neuronas son un modelo de representaci&oacute;n del conocimiento de forma simb&oacute;lica";
 choices[15][1] = "Las neuronas se unen entre s&iacute; para formar una red. La fuerza de la uni&oacute;n se valora mediante un peso";
 choices[15][2] = "Para un funcionamiento correcto de la red es necesaria una fase previa de entrenamiento";
 choices[15][3] = "Un algoritmo muy utilizado para entrenar las redes es la retropropagaci&oacute;n";
 answers[15] = choices[15][0];
 units[15] = "64";
 comments[15] = "Id Pregunta: 5600. ";


//  Id pregunta: 8261 AÃ±o de creación de pregunta: 2011-01-01
 questions[16]= "17)  El empleo de redes neuronales para el reconocimiento de caracteres:";
 choices[16]= new Array();
 choices[16][0] = "Usa mecanismos basados en l&oacute;gica borrosa.";
 choices[16][1] = "No permite explicar f&aacute;cilmente las razones por las que se obtiene un determinado resultado.";
 choices[16][2] = "Se basa en la obtenci&oacute;n de un vector de caracter&iacute;sticas";
 choices[16][3] = "Hace que el reconocimiento se vea m&aacute;s afectado por defectos de la imagen que otros m&eacute;todos como el de comparaci&oacute;n de matrices.";
 answers[16] = choices[16][1];
 units[16] = "63,64";
 comments[16] = "Id Pregunta: 8261. Examen TIC A1 2010";


//  Id pregunta: 9890 AÃ±o de creación de pregunta: 2014-01-01
 questions[17]= "18)  De entre los siguientes procedimientos de b&uacute;squeda, &iquest;cu&aacute;l utiliza un m&eacute;todo heur&iacute;stico?";
 choices[17]= new Array();
 choices[17][0] = "B&uacute;squeda primero el mejor.";
 choices[17][1] = "B&uacute;squeda bidireccional";
 choices[17][2] = "B&uacute;squeda primero en anchura";
 choices[17][3] = "B&uacute;squeda primero en profundidad";
 answers[17] = choices[17][0];
 units[17] = "63";
 comments[17] = "Id Pregunta: 9890. TIC A1, Examen 2013";


//  Id pregunta: 10272 AÃ±o de creación de pregunta: 2014-01-01
 questions[18]= "19)  &iquest;Cu&aacute;l de los siguientes m&eacute;todos de b&uacute;squeda es de tipo heur&iacute;stico?";
 choices[18]= new Array();
 choices[18][0] = "B&uacute;squeda de profundida limitada";
 choices[18][1] = "B&uacute;squeda primero el mejor";
 choices[18][2] = "B&uacute;squeda de coste uniforme";
 choices[18][3] = "B&uacute;squeda bidireccional";
 answers[18] = choices[18][1];
 units[18] = "63";
 comments[18] = "Id Pregunta: 10272. NULL";


//  Id pregunta: 10277 AÃ±o de creación de pregunta: 2014-01-01
 questions[19]= "20)  En cuanto a las estrategias de inferencia en marcos";
 choices[19]= new Array();
 choices[19][0] = "La estrategia en Z intenta deducir el valor del slot primero a nivel local";
 choices[19][1] = "La estrategia en N intenta deducir el valor del slot primero usando una &uacute;nica faceta ascendiendo por la jerarqu&iacute;a";
 choices[19][2] = "Ambas son ciertas";
 choices[19][3] = "Ninguna es cierta";
 answers[19] = choices[19][2];
 units[19] = "64";
 comments[19] = "Id Pregunta: 10277. NULL";


//  Id pregunta: 11141 AÃ±o de creación de pregunta: 2015-01-01
 questions[20]= "21)  &iquest;Cu&aacute;l de los siguientes no es un lenguaje de construcci&oacute;n de la Web Sem&aacute;ntica?";
 choices[20]= new Array();
 choices[20][0] = "OWL";
 choices[20][1] = "MADL";
 choices[20][2] = "XML";
 choices[20][3] = "RDF";
 answers[20] = choices[20][1];
 units[20] = "63";
 comments[20] = "Id Pregunta: 11141. ";


