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

//  Id pregunta: 731 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  Identifique cu&aacute;l de los siguientes nombres no se corresponde con la denominaci&oacute;n de alguna de las Redes Neuronales de una capa:";
 choices[0]= new Array();
 choices[0][0] = "Perceptron";
 choices[0][1] = "Adaline";
 choices[0][2] = "Art";
 choices[0][3] = "Madaline";
 answers[0] = choices[0][2];
 units[0] = "63,64";
 comments[0] = "Id Pregunta: 731. Examen TIC MAP B 2004";


//  Id pregunta: 740 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  En inteligencia artificial, los marcos";
 choices[1]= new Array();
 choices[1][0] = "Internamente est&aacute;n formados por ranuras, cada una de las cuales representa una caracter&iacute;stica del marco";
 choices[1][1] = "Requieren de un proceso de entrenamiento previo, al igual que las redes neuronales.";
 choices[1][2] = "Utiliza como estrategias de inferencia en el proceso deductivo las estrategias en X, Y y Z";
 choices[1][3] = "Se representan mediante nodos y arcos";
 answers[1] = choices[1][0];
 units[1] = "64";
 comments[1] = "Id Pregunta: 740. Similar a examen TIC SS A 2003";


//  Id pregunta: 775 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  Los sistema multiagentes";
 choices[2]= new Array();
 choices[2][0] = "trabajan siempre asociados a arquitecturas de pizarra";
 choices[2][1] = "tienen un control centralizado por lo que no tienen autonom&iacute;a en los agentes";
 choices[2][2] = "cada uno de los agentes es capaz de decidir por si mismo";
 choices[2][3] = "Ninguna de las anteriores";
 answers[2] = choices[2][2];
 units[2] = "63";
 comments[2] = "Id Pregunta: 775. ";


//  Id pregunta: 816 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  Asociados a una red sem&aacute;ntica hay 2 procedimientos que permiten proporcionar respuestas navegando por su estructura. Estos procedimientos son:";
 choices[3]= new Array();
 choices[3][0] = "Herencia e inferencia";
 choices[3][1] = "Herencia y emparejamiento";
 choices[3][2] = "Emparejamiento y equiparaci&oacute;n";
 choices[3][3] = "Equiparaci&oacute;n y herencia";
 answers[3] = choices[3][1];
 units[3] = "63";
 comments[3] = "Id Pregunta: 816. ";


//  Id pregunta: 817 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  Seg&uacute;n el m&eacute;todo de resoluci&oacute;n de problemas GPS (General Problem Solving):";
 choices[4]= new Array();
 choices[4][0] = "El problema se formaliza o define por los siguientes componentes : I(estado inicial), F (estado final) y O (conjunto de operadores complejos)";
 choices[4][1] = "Existe un problema cuando la aplicaci&oacute;n de un m&eacute;todo conocido a una situaci&oacute;n de incertidumbre no lleva a un estado final determinado";
 choices[4][2] = "Los problemas se dividen en subproblemas m&aacute;s simples de manera recursiva. La unidad m&iacute;nima de divisi&oacute;n se denomina &quot;problema elemental&quot;";
 choices[4][3] = "Cuando hay una discrepancia entre la situaci&oacute;n de partida y aqu&eacute;lla que se quiere alcanzar se dice que hay un problema";
 answers[4] = choices[4][3];
 units[4] = "63";
 comments[4] = "Id Pregunta: 817. ";


//  Id pregunta: 843 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre ingenier&iacute;a del conocimiento es falsa?:";
 choices[5]= new Array();
 choices[5][0] = "S&oacute;lo trata problemas de tipo heur&iacute;stico";
 choices[5][1] = "No utiliza enfoques algor&iacute;tmicos";
 choices[5][2] = "Requiere una estructura eminentemente declarativa";
 choices[5][3] = "Los programas que generan son primordialmente procedimentales";
 answers[5] = choices[5][3];
 units[5] = "64";
 comments[5] = "Id Pregunta: 843. ";


//  Id pregunta: 854 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Cu&aacute;l de las siguientes opciones no es una estructura de representaci&oacute;n del conocimiento?:";
 choices[6]= new Array();
 choices[6][0] = "Redes sem&aacute;nticas";
 choices[6][1] = "Diagramas";
 choices[6][2] = "Marcos";
 choices[6][3] = "Guiones";
 answers[6] = choices[6][1];
 units[6] = "63";
 comments[6] = "Id Pregunta: 854. ";


//  Id pregunta: 859 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l de los siguientes conceptos no es caracter&iacute;stico de los sistemas expertos?:";
 choices[7]= new Array();
 choices[7][0] = "Base de conocimiento";
 choices[7][1] = "Encadenamiento de reglas";
 choices[7][2] = "Motor de inferencia";
 choices[7][3] = "Proceso algor&iacute;tmico";
 answers[7] = choices[7][3];
 units[7] = "64";
 comments[7] = "Id Pregunta: 859. ";


//  Id pregunta: 864 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Cu&aacute;l de los siguientes es un lenguaje espec&iacute;fico de la ingenier&iacute;a del conocimiento?:";
 choices[8]= new Array();
 choices[8][0] = "C++";
 choices[8][1] = "Java";
 choices[8][2] = "PROLOG";
 choices[8][3] = "PASCAL";
 answers[8] = choices[8][2];
 units[8] = "64";
 comments[8] = "Id Pregunta: 864. ";


//  Id pregunta: 865 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l de los siguientes es un modelo de inteligencia artificial distribuida?:";
 choices[9]= new Array();
 choices[9][0] = "Modelo de actores";
 choices[9][1] = "Modelo de puntos de funci&oacute;n";
 choices[9][2] = "Modelo de regresi&oacute;n m&uacute;ltiple";
 choices[9][3] = "Modelo de Nashville";
 answers[9] = choices[9][0];
 units[9] = "63";
 comments[9] = "Id Pregunta: 865. ";


//  Id pregunta: 868 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Cu&aacute;l de los siguientes no es un grupo de &aacute;reas de aplicaci&oacute;n de la inteligencia artifical?";
 choices[10]= new Array();
 choices[10][0] = "juegos, sistemas expertos, demostraci&oacute;n de teoremas";
 choices[10][1] = "lenguaje natural, razonamiento autom&aacute;tico, redes neuronales";
 choices[10][2] = "algoritmos gen&eacute;ticos, modelizaci&oacute;n del comportamiento humano, rob&oacute;tica";
 choices[10][3] = "todas son &aacute;reas de aplicaci&oacute;n de la inteligencia artificial";
 answers[10] = choices[10][3];
 units[10] = "63";
 comments[10] = "Id Pregunta: 868. ";


//  Id pregunta: 876 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Cu&aacute;l entre las siguientes ventajas de las reglas en inteligencia artificial se puede considerar tambi&eacute;n una desventaja?:";
 choices[11]= new Array();
 choices[11][0] = "Eficiencia (est&aacute; marcada la direcci&oacute;n de inferencia)";
 choices[11][1] = "Facilidad de representaci&oacute;n (es una forma f&aacute;cil de representar el conocimiento)";
 choices[11][2] = "Modularidad (cada regla es independiente, no hay orden ni referencias entre ellas)";
 choices[11][3] = "Flexibilidad (cada regla se puede a&ntilde;adir o quitar sin repercusiones importantes)";
 answers[11] = choices[11][0];
 units[11] = "64";
 comments[11] = "Id Pregunta: 876. ";


//  Id pregunta: 890 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  &iquest;Cu&aacute;les de las siguientes son caracter&iacute;sticas de los sistemas expertos?:";
 choices[12]= new Array();
 choices[12][0] = "Conocimiento del sistema superior al del experto";
 choices[12][1] = "Procesado de informaci&oacute;n simb&oacute;lica y num&eacute;rica y capacidad de incorporar gradualmente conocimiento al sistema";
 choices[12][2] = "Funcionamiento no uniforme y de dif&iacute;cil reproducci&oacute;n";
 choices[12][3] = "Todas las anteriores";
 answers[12] = choices[12][1];
 units[12] = "64";
 comments[12] = "Id Pregunta: 890. ";


//  Id pregunta: 905 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  &iquest;Podr&iacute;a indicarnos que componente software presente en todos los miembros de la familia Office de Microsoft es un claro ejemplo de sistema basado en el conocimiento?:";
 choices[13]= new Array();
 choices[13][0] = "El motor de base de datos JET de Access";
 choices[13][1] = "Existen unas librerias presentes sobre todo en Excel, que hacen uso de tecnicas revolucionarias de Inteligencia Emocional";
 choices[13][2] = "Word posee un sistema muy avanzado para la conversi&oacute;n en p&aacute;gina web de sus documentos.";
 choices[13][3] = "El Ayudante de Office";
 answers[13] = choices[13][3];
 units[13] = "63";
 comments[13] = "Id Pregunta: 905. ";


//  Id pregunta: 910 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  &iquest;Pueden convivir marcos, reglas y restricciones en un mismo sistema basado en conocimiento?:";
 choices[14]= new Array();
 choices[14][0] = "Si";
 choices[14][1] = "No, pero reglas y restricciones si";
 choices[14][2] = "No, pero reglas y marcos si";
 choices[14][3] = "No";
 answers[14] = choices[14][0];
 units[14] = "64";
 comments[14] = "Id Pregunta: 910. ";


//  Id pregunta: 925 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  &iquest;Qu&eacute; es la base de conocimientos de un sistema experto?:";
 choices[15]= new Array();
 choices[15][0] = "La base de datos que usa el sistema experto";
 choices[15][1] = "El conjunto de reglas almacenadas sobre un tema particular";
 choices[15][2] = "La operaci&oacute;n de obtener informaci&oacute;n del experto humano";
 choices[15][3] = "El programa b&aacute;sico que gestiona el sistema experto";
 answers[15] = choices[15][1];
 units[15] = "64";
 comments[15] = "Id Pregunta: 925. ";


//  Id pregunta: 961 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  Considerando la orientaci&oacute;n l&oacute;gica en inteligencia artificial:";
 choices[16]= new Array();
 choices[16][0] = "La definici&oacute;n matem&aacute;tica de los mecanismos mediante los cuales ser&aacute; posible deducir f&oacute;rmulas a partir de otras es independiente de que se haya formalizado o no la estructura de las frases";
 choices[16][1] = "El sistema de Kleene, como ejemplo de sistema formal y de la teor&iacute;a de la demostraci&oacute;n, pertenece a la orientaci&oacute;n heur&iacute;stica y no a la orientaci&oacute;n l&oacute;gica";
 choices[16][2] = "La forma de representar las estructuras deductivas tiene dos l&iacute;neas principales: la de los sistemas formales y la de la sem&aacute;ntica";
 choices[16][3] = "Las soluciones de los Sistemas de Kleene est&aacute;n basadas en las formalizaciones del c&aacute;lculo proposicional y del c&aacute;lculo de predicados";
 answers[16] = choices[16][2];
 units[16] = "63";
 comments[16] = "Id Pregunta: 961. ";


//  Id pregunta: 978 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  De las siguientes afirmaciones, indique la correcta respecto a los lenguajes procedimentales:";
 choices[17]= new Array();
 choices[17][0] = "En un lenguaje procedimental, se indica c&oacute;mo hay que realizar la acci&oacute;n";
 choices[17][1] = "En un lenguaje procedimental, se indica que resultado se quiere obtener";
 choices[17][2] = "Los lenguajes procedimentales son lenguajes de cuarta generaci&oacute;n";
 choices[17][3] = "Es cierto &lsquo;a&rsquo; y &lsquo;c&rsquo;";
 answers[17] = choices[17][0];
 units[17] = "63";
 comments[17] = "Id Pregunta: 978. ";


//  Id pregunta: 982 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Dentro de la Inteligencia Artificial Distribuir&aacute;n indicar qu&eacute; significan las siglas KIF:";
 choices[18]= new Array();
 choices[18][0] = "Knowledge Interchange File";
 choices[18][1] = "Knowledge Intermediate Format";
 choices[18][2] = "Knowledge Intermediate File";
 choices[18][3] = "Knowledge Interchange Format";
 answers[18] = choices[18][3];
 units[18] = "63";
 comments[18] = "Id Pregunta: 982. ";


//  Id pregunta: 983 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  Dentro de la inteligencia artificial, indicar la afirmaci&oacute;n correcta:";
 choices[19]= new Array();
 choices[19][0] = "El sistema de Kleene completo abarca tambi&eacute;n el c&aacute;lculo de predicados para lo cual se incluyen m&aacute;s axiomas y m&aacute;s reglas de demostraci&oacute;n";
 choices[19][1] = "El sistema de deducci&oacute;n natural se diferencia fundamentalmente de los de teor&iacute;a de la demostraci&oacute;n en que en &eacute;l no se demuestran las deducciones f&oacute;rmula a f&oacute;rmula, sino toda la deducci&oacute;n como si fuera una &uacute;nica f&oacute;rmula";
 choices[19][2] = "El sistema de deducci&oacute;n natural tiene mayor capacidad que el sistema de Kleene para admitir la definici&oacute;n de procedimientos eficientes de b&uacute;squeda sistem&aacute;tica de demostraciones";
 choices[19][3] = "Dentro de la teor&iacute;a sem&aacute;ntica, la descripci&oacute;n del sistema con este planteamiento con c&aacute;lculo posicional se realiza, entre otras con un conjunto de significados atribuibles a las proposiciones y con  una definici&oacute;n sint&aacute;ctica de conectivas";
 answers[19] = choices[19][3];
 units[19] = "63";
 comments[19] = "Id Pregunta: 983. ";


//  Id pregunta: 1073 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  En el &aacute;mbito de la inteligencia artificial, &iquest;cu&aacute;l de las siguientes afirmaciones respecto de las redes sem&aacute;nticas es cierta?:";
 choices[20]= new Array();
 choices[20][0] = "La representaci&oacute;n de una red sem&aacute;ntica se realiza con nodos, correspondientes a ideas o conceptos, y arcos representando relaciones entre nodos";
 choices[20][1] = "Las redes se representan mediante sentencias condicionales que relacionan grupos de conceptos, los antecesores y los consecuentes";
 choices[20][2] = "Las redes representan patrones de un concepto e internamente est&aacute;n formados por ranuras representando caracter&iacute;sticas de las redes sem&aacute;nticas";
 choices[20][3] = "Las redes sem&aacute;nticas representan relaciones de equilibrio entre los atributos de uno o m&aacute;s objetos y el rango de valores de los mismos";
 answers[20] = choices[20][0];
 units[20] = "64";
 comments[20] = "Id Pregunta: 1073. ";


//  Id pregunta: 1075 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  En el campo de la integraci&oacute;n de los sistemas expertos:";
 choices[21]= new Array();
 choices[21][0] = "Los gestores inteligentes de bases de datos modelizan las descripciones funcionales de los procesos inferenciales b&aacute;sicos";
 choices[21][1] = "Las arquitecturas de sistemas de gesti&oacute;n de bases de datos se pueden optimizar incorporando m&oacute;dulos de optimizaci&oacute;n basados en t&eacute;cnicas heur&iacute;sticas de inteligencia artificial";
 choices[21][2] = "Un sistema de gesti&oacute;n de bases de datos deductivo es aqu&eacute;l en que los criterios de selecci&oacute;n pueden deducirse directamente de las restricciones de integridad";
 choices[21][3] = "Para la formalizaci&oacute;n de sistemas deductivos de bases de datos nunca se utilizan las t&eacute;cnicas de deducci&oacute;n autom&aacute;tica de la l&oacute;gica de primer orden";
 answers[21] = choices[21][1];
 units[21] = "64";
 comments[21] = "Id Pregunta: 1075. ";


//  Id pregunta: 1076 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  En el campo de la representaci&oacute;n del conocimiento simb&oacute;lico:";
 choices[22]= new Array();
 choices[22][0] = "La unidad b&aacute;sica funcional de una red sem&aacute;ntica es el 'objeto' que formaliza la representaci&oacute;n de un concepto";
 choices[22][1] = "Un marco es una descripci&oacute;n de un objeto, que contiene ranuras (slots) para todas las informaciones asociadas con el objeto";
 choices[22][2] = "Las reglas deductivas son una manera de representar al conocimiento de tipo procedimental";
 choices[22][3] = "Una restricci&oacute;n expresa es una relaci&oacute;n de equilibrio entre los predicados de uno o m&aacute;s objetos";
 answers[22] = choices[22][1];
 units[22] = "64";
 comments[22] = "Id Pregunta: 1076. ";


//  Id pregunta: 1098 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  En inteligencia artificial un marco es:";
 choices[23]= new Array();
 choices[23][0] = "La representaci&oacute;n del conocimiento basada en teor&iacute;a de grafos";
 choices[23][1] = "Un elemento de representaci&oacute;n que contiene, entre otros elementos, ranuras de informaci&oacute;n y punteros";
 choices[23][2] = "El mecanismo de razonamiento m&aacute;s utilizado a la hora de equiparar elementos de conocimiento";
 choices[23][3] = "El objeto formado por el encapsulamiento de reglas deductivas y hechos";
 answers[23] = choices[23][1];
 units[23] = "64";
 comments[23] = "Id Pregunta: 1098. ";


//  Id pregunta: 1099 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  En inteligencia artificial:";
 choices[24]= new Array();
 choices[24][0] = "Los primeros trabajos se centraron en m&eacute;todos de b&uacute;squeda heur&iacute;stica y m&eacute;todos de deducci&oacute;n autom&aacute;tica";
 choices[24][1] = "La rob&oacute;tica no secuencializa las tareas (planificaci&oacute;n) para conseguir pasar de un estado actual a un estado objetivo";
 choices[24][2] = "La representaci&oacute;n del conocimiento pertenece al campo de los Sistemas de Gesti&oacute;n de Bases de Datos, pero no al de la inteligencia artificial";
 choices[24][3] = "Los m&eacute;todos heur&iacute;sticos buscan una formulaci&oacute;n te&oacute;rica para la representaci&oacute;n del conocimiento";
 answers[24] = choices[24][0];
 units[24] = "63";
 comments[24] = "Id Pregunta: 1099. ";


//  Id pregunta: 1110 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  En la orientaci&oacute;n l&oacute;gica de la inteligencia artificial podemos afirmar que:";
 choices[25]= new Array();
 choices[25][0] = "El c&aacute;lculo proposicional entra en la sem&aacute;ntica de las proposiciones, distinguiendo en ella los componentes predicados y los t&eacute;rminos";
 choices[25][1] = "El c&aacute;lculo de predicados representa el lenguaje usual tomando como elemento b&aacute;sico de la formulaci&oacute;n una representaci&oacute;n matem&aacute;tica de las frases declarativas simples (proposiciones)";
 choices[25][2] = "En el c&aacute;lculo proposicional, una proposici&oacute;n es la unidad m&iacute;nima del lenguaje con un contenido de informaci&oacute;n, sobre cuyo significado es posible afirmar la verdad o falsedad";
 choices[25][3] = "Las clases de conectivas &quot;negaci&oacute;n y condicional&quot; pertenecen al c&aacute;lculo de predicados";
 answers[25] = choices[25][2];
 units[25] = "63";
 comments[25] = "Id Pregunta: 1110. ";


//  Id pregunta: 1111 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  En la programaci&oacute;n orientada a objetos de los sistemas expertos:";
 choices[26]= new Array();
 choices[26][0] = "Bajo este paradigma los programas se estructuran en procedimientos orientados al proceso";
 choices[26][1] = "Los objetos se comunican entre s&iacute; mediante arcos";
 choices[26][2] = "La especificaci&oacute;n de un objeto es independiente de su implementaci&oacute;n";
 choices[26][3] = "La propiedad de herencia afecta no s&oacute;lo a la componente est&aacute;tica de los objetos (m&eacute;todos) sino tambi&eacute;n a su componente din&aacute;mica";
 answers[26] = choices[26][2];
 units[26] = "64";
 comments[26] = "Id Pregunta: 1111. ";


//  Id pregunta: 1122 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  En los m&eacute;todos de b&uacute;squeda heur&iacute;stica:";
 choices[27]= new Array();
 choices[27][0] = "El proceso de soluci&oacute;n se plantea como la b&uacute;squeda de estados que contiene todas las posibles soluciones";
 choices[27][1] = "Las estrategias de b&uacute;squeda en anchura pertenecen a la heur&iacute;stica deductiva";
 choices[27][2] = "La amplitud del espacio de estados en un problema dado, dif&iacute;cilmente puede dar lugar a una explosi&oacute;n combinatoria al tratar de enumerar todas las posibilidades";
 choices[27][3] = "En un caso extremo, una b&uacute;squeda ciega (sin funci&oacute;n heur&iacute;stica), obligar&aacute; a realizar una exploraci&oacute;n exhaustiva (en anchura o en profundidad)";
 answers[27] = choices[27][3];
 units[27] = "63";
 comments[27] = "Id Pregunta: 1122. ";


//  Id pregunta: 1138 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  En un marco, al pedir el valor de un slot:";
 choices[28]= new Array();
 choices[28][0] = "Primero se dar&aacute; el valor por defecto, si este no existiera, el valor en curso, y si este no existiera, se ejecutar&aacute; el procedimiento if-required";
 choices[28][1] = "Primero se dar&aacute; el valor en curso, si este no existiera, el valor por defecto, y si este no existiera, se ejecutar&aacute; el procedimiento if-required";
 choices[28][2] = "Primero se ejecutar&aacute; if-required, y si no finaliza con &eacute;xito, se dar&aacute; el valor por defecto, y si este no existiera, el valor en curso, Sini, se termina con error.";
 choices[28][3] = "Primero se dar&aacute; el valor en curso, si este no existiera, el valor por defecto, y si este no existiera, se ejecutar&aacute; el procedimiento if-needed";
 answers[28] = choices[28][3];
 units[28] = "64";
 comments[28] = "Id Pregunta: 1138. ";


//  Id pregunta: 1154 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  En una red neuronal feedforward supervisada el m&eacute;todo de aprendizaje que intenta adaptar los pesos para minimizar el error cuadr&aacute;tico medio para el conjunto de patrones de entrenamiento se denomina:";
 choices[29]= new Array();
 choices[29][0] = "M&eacute;todo de la varianza";
 choices[29][1] = "M&eacute;todo de encadenamiento hacia atr&aacute;s";
 choices[29][2] = "M&eacute;todo de retropropagaci&oacute;n";
 choices[29][3] = "M&eacute;todo de Kohonen";
 answers[29] = choices[29][2];
 units[29] = "64";
 comments[29] = "Id Pregunta: 1154. ";


//  Id pregunta: 1155 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  En una representaci&oacute;n de tipo simb&oacute;lico de un Sistema Experto Basado en el Conocimiento, al conjunto de campos de informaci&oacute;n (ranuras) que describen un objeto se le da el nombre de:";
 choices[30]= new Array();
 choices[30][0] = "Regla de producci&oacute;n";
 choices[30][1] = "Restricci&oacute;n";
 choices[30][2] = "Red sem&aacute;ntica";
 choices[30][3] = "Marco";
 answers[30] = choices[30][3];
 units[30] = "64";
 comments[30] = "Id Pregunta: 1155. ";


//  Id pregunta: 1174 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  Indicar cual de la siguientes cualidades de los sistemas expertos es falsa:";
 choices[31]= new Array();
 choices[31][0] = "Capacidad para explicar la forma en que el sistema resuelve los problemas planteados";
 choices[31][1] = "Flexibilidad para incorporar gradualmente nuevo conocimiento";
 choices[31][2] = "Pueden procesar informaci&oacute;n simb&oacute;lica en vez de s&oacute;lo informaci&oacute;n num&eacute;rica";
 choices[31][3] = "S&oacute;lo pueden operar con conocimiento completo";
 answers[31] = choices[31][3];
 units[31] = "64";
 comments[31] = "Id Pregunta: 1174. ";


//  Id pregunta: 1175 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  Indicar cu&aacute;l de las siguientes es una arquitectura cl&aacute;sica de la resoluci&oacute;n distribuida de problemas:";
 choices[32]= new Array();
 choices[32][0] = "Red de contratos";
 choices[32][1] = "Arquitectura de pizarra";
 choices[32][2] = "Las dos primeras son arquitecturas cl&aacute;sicas de la resoluci&oacute;n distribuida de problemas";
 choices[32][3] = "Ninguna de las anteriores son arquitecturas cl&aacute;sicas de la resoluci&oacute;n distribuida de problemas";
 answers[32] = choices[32][2];
 units[32] = "63";
 comments[32] = "Id Pregunta: 1175. ";


//  Id pregunta: 1178 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  Indicar cu&aacute;l de las siguientes no es una tendencia en el desarrollo de Sistemas Basados en el Conocimiento (SBC):";
 choices[33]= new Array();
 choices[33][0] = "Los SBC se conciben como sistemas que han de integrarse dentro de otros, en vez de trabajar en solitario";
 choices[33][1] = "Cada vez son m&aacute;s frecuentadas los SBC h&iacute;bridos, que combinan diferentes t&eacute;cnicas de representaci&oacute;n del conocimiento, frente a los de reglas puros";
 choices[33][2] = "Cada vez m&aacute;s se concibe a los SBC como un sistema de procesamiento especial de la informaci&oacute;n";
 choices[33][3] = "Cada vez se presta m&aacute;s atenci&oacute;n a conceptos tales como: ciclo de vida del proyecto, mantenimiento de sistemas, soluciones y retorno esperable, y metodolog&iacute;as de construcci&oacute;n";
 answers[33] = choices[33][2];
 units[33] = "64";
 comments[33] = "Id Pregunta: 1178. ";


//  Id pregunta: 1179 AÃ±o de creación de pregunta: 2002-01-01
 questions[34]= "35)  Indicar cu&aacute;l de las siguientes no es una ventaja de los sistemas expertos:";
 choices[34]= new Array();
 choices[34][0] = "Permanencia";
 choices[34][1] = "Facilidad de reproducci&oacute;n";
 choices[34][2] = "Funcionamiento uniforme";
 choices[34][3] = "Eficiencia";
 answers[34] = choices[34][3];
 units[34] = "64";
 comments[34] = "Id Pregunta: 1179. ";


//  Id pregunta: 1180 AÃ±o de creación de pregunta: 2002-01-01
 questions[35]= "36)  Indicar cu&aacute;l de los siguientes agentes software inteligentes no existe:";
 choices[35]= new Array();
 choices[35][0] = "Agentes interfaz";
 choices[35][1] = "Agentes de gesti&oacute;n";
 choices[35][2] = "Agentes de informaci&oacute;n";
 choices[35][3] = "Agentes virtuales";
 answers[35] = choices[35][1];
 units[35] = "63";
 comments[35] = "Id Pregunta: 1180. ";


//  Id pregunta: 1183 AÃ±o de creación de pregunta: 2002-01-01
 questions[36]= "37)  Indicar la respuesta falsa respecto a la representaci&oacute;n del conocimiento:";
 choices[36]= new Array();
 choices[36][0] = "En inteligencia artificial el conocimiento puede representarse mediante marcos";
 choices[36][1] = "En inteligencia artificial el conocimiento puede representarse mediante redes sem&aacute;nticas";
 choices[36][2] = "En inteligencia artificial el conocimiento puede representarse mediante DFDs";
 choices[36][3] = "En inteligencia artificial el conocimiento puede representarse mediante reglas de inferencia";
 answers[36] = choices[36][2];
 units[36] = "64";
 comments[36] = "Id Pregunta: 1183. ";


//  Id pregunta: 1184 AÃ±o de creación de pregunta: 2002-01-01
 questions[37]= "38)  Indicar la respuesta falsa sobre las redes sem&aacute;nticas en inteligencia artificial:";
 choices[37]= new Array();
 choices[37][0] = "Las redes sem&aacute;nticas conciben el pensamiento mediante un conjunto de ideas b&aacute;sicas y relaciones que interconectan unas con otras formando una red, de forma que el razonamiento se basa en una navegaci&oacute;n por dicha red";
 choices[37][1] = "El emparejamiento proporciona respuestas mediante la b&uacute;squeda de parejas de idea-relaci&oacute;n en la red";
 choices[37][2] = "Los mecanismos de inferencia en una red sem&aacute;ntica son la herencia y el emparejamiento";
 choices[37][3] = "El procedimiento de herencia extiende a las caracter&iacute;sticas asociadas a un concepto con las caracter&iacute;sticas de los nodos con los que le une la relaci&oacute;n es-un, de forma que el concepto hereda cualidades propias de otros conceptos m&aacute;s generales";
 answers[37] = choices[37][1];
 units[37] = "64";
 comments[37] = "Id Pregunta: 1184. ";


//  Id pregunta: 1185 AÃ±o de creación de pregunta: 2002-01-01
 questions[38]= "39)  Indicar la respuesta incorrecta sobre las restricciones en inteligencia artificial:";
 choices[38]= new Array();
 choices[38][0] = "Si bien las reglas expresan influencias del tipo causa-efecto entre conceptos, una restricci&oacute;n es una ecuaci&oacute;n que permite expresar m&uacute;ltiples relaciones causa-efecto, estableciendo puntos de sincronismo en el comportamiento de los objetos";
 choices[38][1] = "Una restricci&oacute;n expresa una relaci&oacute;n de equilibrio entre los atributos de uno o m&aacute;s sujetos, y constituye la pieza b&aacute;sica de informaci&oacute;n para la comprensi&oacute;n y modelizaci&oacute;n del conocimiento del mundo real bajo este enfoque";
 choices[38][2] = "Hay dominios de conocimiento que formulados en restriccioness dan lugar a bases de conocimiento muy grandes debido a que el conocimiento se expresa mejor mediante reglas";
 choices[38][3] = "Todo sistema de restricciones debe constar como m&iacute;nimo de un lenguaje de especificaci&oacute;n de restricciones y un procedimiento capaz de interpretar esta especificaci&oacute;n y de evaluar sus respuestas";
 answers[38] = choices[38][2];
 units[38] = "64";
 comments[38] = "Id Pregunta: 1185. ";


//  Id pregunta: 1186 AÃ±o de creación de pregunta: 2002-01-01
 questions[39]= "40)  Indicar la respuesta incorrecta sobre los procedimientos de inferencia asociados a los marcos en inteligencia artificial:";
 choices[39]= new Array();
 choices[39][0] = "Deducci&oacute;n de valores de ranuras";
 choices[39][1] = "Actualizaci&oacute;n de valores de ranuras";
 choices[39][2] = "Herencia de ranuras";
 choices[39][3] = "Equiparaci&oacute;n de marcos";
 answers[39] = choices[39][2];
 units[39] = "64";
 comments[39] = "Id Pregunta: 1186. ";


//  Id pregunta: 1187 AÃ±o de creación de pregunta: 2002-01-01
 questions[40]= "41)  Indicar la respuesta incorrecta sobre los sistemas expertos en inteligencia artificial:";
 choices[40]= new Array();
 choices[40][0] = "La caracter&iacute;stica diferencial de los sistemas expertos es la ubicaci&oacute;n externa del conocimiento necesario para resolver un problema, que aparece como estructura procesable separada de los procedimientos que la manipulan";
 choices[40][1] = "Un entorno es b&aacute;sicamente un lenguaje m&aacute;s un conjunto de procedimientos hechos como ayuda a la construcci&oacute;n de sistemas expertos";
 choices[40][2] = "Una shell es b&aacute;sicamente un sistema experto con la base de conocimiento vac&iacute;a; es decir, la arquitectura del sistema final est&aacute; preestablecida";
 choices[40][3] = "Los lenguajes utilizados en la construcci&oacute;n de sistemas expertos son principalmente lenguajes orientados a la inteligencia artificial como el LISP o el PROLOG y lenguajes convencionales de prop&oacute;sito general tales como el C, FORTRAN, PASCAL, etc";
 answers[40] = choices[40][3];
 units[40] = "64";
 comments[40] = "Id Pregunta: 1187. ";


//  Id pregunta: 1216 AÃ±o de creación de pregunta: 2002-01-01
 questions[41]= "42)  La deducci&oacute;n por medio de los sistemas de Kleene en inteligencia artificial hace referencia a:";
 choices[41]= new Array();
 choices[41][0] = "La orientaci&oacute;n heur&iacute;stica";
 choices[41][1] = "La orientaci&oacute;n l&oacute;gica";
 choices[41][2] = "La representaci&oacute;n del conocimiento";
 choices[41][3] = "Las redes sem&aacute;nticas";
 answers[41] = choices[41][1];
 units[41] = "63";
 comments[41] = "Id Pregunta: 1216. ";


//  Id pregunta: 1240 AÃ±o de creación de pregunta: 2002-01-01
 questions[42]= "43)  La resoluci&oacute;n distribuida de problemas (RDP) estudia sistemas inteligentes distribuidos, cuyos agentes cumplen unas caracter&iacute;sticas m&iacute;nimas de:";
 choices[42]= new Array();
 choices[42][0] = "Benevolencia, objetivos compartidos, dise&ntilde;o central";
 choices[42][1] = "Benevolencia, objetivos compartidos, dise&ntilde;o distribuido";
 choices[42][2] = "Benevolencia, objetivos propios. dise&ntilde;o distribuido";
 choices[42][3] = "Benevolencia,  objetivos propios, dise&ntilde;o central";
 answers[42] = choices[42][0];
 units[42] = "63";
 comments[42] = "Id Pregunta: 1240. ";


//  Id pregunta: 1275 AÃ±o de creación de pregunta: 2002-01-01
 questions[43]= "44)  Los mecanismos de inferencia usados en los sistemas expertos incluyen:";
 choices[43]= new Array();
 choices[43][0] = "La reducci&oacute;n con encadenamiento (chaining), herencia, inducci&oacute;n y abducci&oacute;n";
 choices[43][1] = "Redes sem&aacute;nticas, planificadores (skeletal planners), pizarras (blackboards) y reglas de producci&oacute;n";
 choices[43][2] = "Aserciones y &aacute;rboles de decisi&oacute;n";
 choices[43][3] = "Shells, correspondencia heur&iacute;stica y conjuntos borrosos (fuzzy)";
 answers[43] = choices[43][3];
 units[43] = "64";
 comments[43] = "Id Pregunta: 1275. ";


//  Id pregunta: 1329 AÃ±o de creación de pregunta: 2002-01-01
 questions[44]= "45)  Se dice que el conocimiento, independientemente del paradigma de representaci&oacute;n utilizado, tiene una doble componente:";
 choices[44]= new Array();
 choices[44][0] = "Los hechos constatables y los mecanismos de inferencia";
 choices[44][1] = "Los procedimientos y los mecanismos de deducci&oacute;n";
 choices[44][2] = "Los objetos y las relaciones entre los mismos";
 choices[44][3] = "El componente simb&oacute;lico y el componente procedimental";
 answers[44] = choices[44][0];
 units[44] = "64";
 comments[44] = "Id Pregunta: 1329. ";


//  Id pregunta: 1341 AÃ±o de creación de pregunta: 2002-01-01
 questions[45]= "46)  Se&ntilde;alar la sentencia correcta respecto de la ingenier&iacute;a del conocimiento:";
 choices[45]= new Array();
 choices[45][0] = "Las reglas de producci&oacute;n y las reglas deductivas son maneras de representaci&oacute;n param&eacute;trica del conocimiento";
 choices[45][1] = "Ejemplos de modelos de representaci&oacute;n del conocimiento en forma param&eacute;trica son el perceptr&oacute;n y las redes neuronales";
 choices[45][2] = "Uno de los algoritmos m&aacute;s utilizados en el proceso de entrenamiento viene dado por el filtrado de Waltz";
 choices[45][3] = "El razonamiento no mon&oacute;tono es un modelo de razonamiento cuyo objetivo es asignar medidas o factores de certeza a un conjunto de proposiciones intermedias a partir de las asignadas a las proposiciones iniciales";
 answers[45] = choices[45][1];
 units[45] = "64";
 comments[45] = "Id Pregunta: 1341. ";


//  Id pregunta: 1359 AÃ±o de creación de pregunta: 2002-01-01
 questions[46]= "47)  Si a un sistema experto se le vac&iacute;a su base de conocimientos dejando intactos el resto de sus componentes (base de reglas y motor de inferencia) para que se pueda aplicar a temas similares al que dio lugar al desarrollo se denomina  sistema:";
 choices[46]= new Array();
 choices[46][0] = "Kernel o n&uacute;cleo";
 choices[46][1] = "Concha o shell";
 choices[46][2] = "Sistema inferente";
 choices[46][3] = "Sistema fuente";
 answers[46] = choices[46][1];
 units[46] = "64";
 comments[46] = "Id Pregunta: 1359. ";


//  Id pregunta: 1406 AÃ±o de creación de pregunta: 2002-01-01
 questions[47]= "48)  Un tesauro es lineal cuando:";
 choices[47]= new Array();
 choices[47][0] = "Las relaciones entre descriptores constituyen una estructura de red";
 choices[47][1] = "Los descriptores se clasifican jer&aacute;rquicamente con un cierto criterio";
 choices[47][2] = "Se componen de una relaci&oacute;n de palabras o descriptores sin conexiones entre ellos";
 choices[47][3] = "Los descriptores se clasifican formando una estructura en anillo";
 answers[47] = choices[47][2];
 units[47] = "64";
 comments[47] = "Id Pregunta: 1406. ";


//  Id pregunta: 1525 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  Dentro de las t&eacute;cnicas de representaci&oacute;n del conocimiento indicar a que modelo pertenecen los algoritmos gen&eacute;ticos";
 choices[48]= new Array();
 choices[48][0] = "Modelo Simb&oacute;lico";
 choices[48][1] = " Modelo de conocimiento profundo";
 choices[48][2] = " Modelo Param&eacute;trico";
 choices[48][3] = "Razonamiento multinivel";
 answers[48] = choices[48][2];
 units[48] = "64";
 comments[48] = "Id Pregunta: 1525. ";


//  Id pregunta: 1573 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  &iquest;En qu&eacute; consiste el concepto de &quot;web sem&aacute;ntica&quot;?";
 choices[49]= new Array();
 choices[49][0] = "Se trata de un sistema de gesti&oacute;n de contenidos que permite buscar &aacute;gilmente el significado de todo tipo de t&eacute;rminos";
 choices[49][1] = "Se trata de que las p&aacute;ginas web puedan, no s&oacute;lo presentar informaci&oacute;n, sino &quot;entenderla&quot;";
 choices[49][2] = "Es un medio de documentos para personas";
 choices[49][3] = "Todas las anteriores son definiciones correctas";
 answers[49] = choices[49][1];
 units[49] = "64";
 comments[49] = "Id Pregunta: 1573. ";


//  Id pregunta: 1606 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  Indicar la afirmaci&oacute;n que no es cierta sobre Marcos";
 choices[50]= new Array();
 choices[50][0] = "Representan conceptos estereotipados o patronespredefinidos sobre ideas y situaciones, aunando las caracter&iacute;sticas que cualifican el concepto";
 choices[50][1] = "Se caracteriza por representar conceptos gr&aacute;ficamente mediante nodos y sus relaciones entre ellos mediante arcos";
 choices[50][2] = "el marco es una entidad din&aacute;mica, conprocedimientos incluidos en los slots, que se ejecutan durante un proceso de razonamiento m&aacute;s general";
 choices[50][3] = "Los procedimientos de inferencia asociados a los marcos son: deducci&oacute;n de valores de slots, actualizaci&oacute;n de valores de slots y equiparaci&oacute;n de marcos";
 answers[50] = choices[50][1];
 units[50] = "64";
 comments[50] = "Id Pregunta: 1606. Pregunta no perteneciente al test  del ex&aacute;men 2003 de SS (aunque en este ex&aacute;men hubo una pregunta de Marcos)";


//  Id pregunta: 1683 AÃ±o de creación de pregunta: 2004-01-01
 questions[51]= "52)  En cuanto a los procedimientos de inferencia de las estructuras de representaci&oacute;n del conocimiento, se&ntilde;ale la afirmaci&oacute;n correcta";
 choices[51]= new Array();
 choices[51][0] = "En las redes semanticas los procedimientos de inferencia son la herencia y el equiparaci&oacute;n";
 choices[51][1] = "En los marcos los procedimientos de inferencia son la deducci&oacute;n de valores de slots, la actualizaci&oacute;n de valores de slots, y la emparejamiento";
 choices[51][2] = "En las reglas los procedimientos de inferencia son el encadenamiento hacia adelante, y el encadenamiento hacia atr&aacute;s";
 choices[51][3] = "Todas son correctas";
 answers[51] = choices[51][3];
 units[51] = "64";
 comments[51] = "Id Pregunta: 1683. NULL";


//  Id pregunta: 1684 AÃ±o de creación de pregunta: 2004-01-01
 questions[52]= "53)  Si hablamos de los procedimientos if-needed,e if-added, es cierto que";
 choices[52]= new Array();
 choices[52][0] = "El procedimiento if-needed es un procedimiento de validadci&oacute;n que se ejecuta cuando se a&ntilde;ade un valor a una ranura.";
 choices[52][1] = "El procedimiento if-added es un procedimiento que se ejecuta siempre que se a&ntilde;ade un valor determinado a un slot";
 choices[52][2] = "Ambos forman parte de las facetas declarativas de un marco";
 choices[52][3] = "Las afirmaciones A) y B) son correctas";
 answers[52] = choices[52][1];
 units[52] = "64";
 comments[52] = "Id Pregunta: 1684. ";


//  Id pregunta: 1787 AÃ±o de creación de pregunta: 2006-01-01
 questions[53]= "54)  Las siglas  STRIPS se corresponden a";
 choices[53]= new Array();
 choices[53][0] = "Stanford Research Institute Problem Solver";
 choices[53][1] = "St. Luis Robotics Institute Private Software";
 choices[53][2] = "San Francisco Tech Robots Institute Practical Seasons";
 choices[53][3] = "Science, Tech and Research International Patented System";
 answers[53] = choices[53][0];
 units[53] = "63";
 comments[53] = "Id Pregunta: 1787. ";


//  Id pregunta: 1788 AÃ±o de creación de pregunta: 2006-01-01
 questions[54]= "55)  Al realizar la b&uacute;squeda en un espacio de estados, el m&eacute;todo de backtraking &hellip;";
 choices[54]= new Array();
 choices[54][0] = "Solo se puede usar para b&uacute;squedas ciegas";
 choices[54][1] = "Permite ahorrar recursos de computaci&oacute;n";
 choices[54][2] = "Permite recorrer los &aacute;rboles solo en anchura";
 choices[54][3] = "Permite recorrer los &aacute;rboles solo en profundidad";
 answers[54] = choices[54][1];
 units[54] = "63";
 comments[54] = "Id Pregunta: 1788. ";


//  Id pregunta: 1789 AÃ±o de creación de pregunta: 2006-01-01
 questions[55]= "56)  Se&ntilde;ale qu&eacute; lenguaje intermedio espec&iacute;fico de representaci&oacute;n de conocimiento se utiliza en el &aacute;rea de inteligencia artificial";
 choices[55]= new Array();
 choices[55][0] = "XML";
 choices[55][1] = "STRIPS";
 choices[55][2] = "KIF";
 choices[55][3] = "EXML";
 answers[55] = choices[55][2];
 units[55] = "63";
 comments[55] = "Id Pregunta: 1789. ";


//  Id pregunta: 1790 AÃ±o de creación de pregunta: 2006-01-01
 questions[56]= "57)  Se&ntilde;ale de qu&eacute; etapa del desarrollo de la inteligencia artifical son propias las t&eacute;cnicas de b&uacute;squeda heur&iacute;stica";
 choices[56]= new Array();
 choices[56][0] = "Difusi&oacute;n actual";
 choices[56][1] = "Etapa de prototipos";
 choices[56][2] = "Sistemas expertos";
 choices[56][3] = "Etapa inicial";
 answers[56] = choices[56][0];
 units[56] = "63";
 comments[56] = "Id Pregunta: 1790. ";


//  Id pregunta: 1792 AÃ±o de creación de pregunta: 2006-01-01
 questions[57]= "58)  Los agentes de software inteligentes pueden clasificarse en tres &aacute;reas de acuerdo a sus &aacute;reas de aplicaci&oacute;n. Indique qu&eacute; terna define dichas &aacute;reas:";
 choices[57]= new Array();
 choices[57][0] = "Agentes virtuales, de informaci&oacute;n y de heur&iacute;sticas";
 choices[57][1] = "Agentes de informaci&oacute;n, de interfaz y de heur&iacute;sticas";
 choices[57][2] = "Agentes de interfaz, de informaci&oacute;n, y virtuales";
 choices[57][3] = "Agentes virtuales, de interfaz y de heur&iacute;sticas";
 answers[57] = choices[57][2];
 units[57] = "63";
 comments[57] = "Id Pregunta: 1792. ";


//  Id pregunta: 1793 AÃ±o de creación de pregunta: 2006-01-01
 questions[58]= "59)  Para representaci&oacute;n del conocimiento, los m&eacute;todos param&eacute;tricos&hellip;";
 choices[58]= new Array();
 choices[58][0] = "Son preferibles para obtener explicaciones de la forma en que el sistema saca las conclusiones";
 choices[58][1] = "Simulan los mecanismos neuronales del pensamiento";
 choices[58][2] = "Emulan los procesos de razonamiento utilizando modelos simb&oacute;licos";
 choices[58][3] = "Permiten utilizar par&aacute;metros por valor y por variable";
 answers[58] = choices[58][1];
 units[58] = "64";
 comments[58] = "Id Pregunta: 1793. ";


//  Id pregunta: 1795 AÃ±o de creación de pregunta: 2006-01-01
 questions[59]= "60)  Se&ntilde;alar cual no es una caracter&iacute;stica de las restricciones";
 choices[59]= new Array();
 choices[59][0] = "Permite sincronizar el comportamiento de los objetos buscando equilibrio entre sus atributos";
 choices[59][1] = "Permiten expresar m&uacute;ltiples relaciones causa-efecto mediante ecuaciones";
 choices[59][2] = "Pueden ser cualitativas (dominios discretos) o num&eacute;ricas.";
 choices[59][3] = "Representan sentencias condicionales donde a partir de antecedentes pueden obtenerse los consecuentes";
 answers[59] = choices[59][3];
 units[59] = "64";
 comments[59] = "Id Pregunta: 1795. ";


//  Id pregunta: 1796 AÃ±o de creación de pregunta: 2006-01-01
 questions[60]= "61)  Indique cu&aacute;les son las facetas declarativas en la representaci&oacute;n del conocimiento mediante marcos (frameworks):";
 choices[60]= new Array();
 choices[60][0] = "if-needed; if-required e if-deleted";
 choices[60][1] = "if-needed; if-required e if-added";
 choices[60][2] = "if-needed; if-deleted e if-added";
 choices[60][3] = "Ninguna de las anteriores";
 answers[60] = choices[60][3];
 units[60] = "64";
 comments[60] = "Id Pregunta: 1796. ";


//  Id pregunta: 1797 AÃ±o de creación de pregunta: 2006-01-01
 questions[61]= "62)  Se&ntilde;ale qu&eacute; opci&oacute;n contiene los distintos mecanismos de inferencia utilizando la representaci&oacute;n del conocimiento basada en marcos (frameworks):";
 choices[61]= new Array();
 choices[61][0] = "deducci&oacute;n de valores de slots; actualizaci&oacute;n de valores de slots; y herencia de marcos";
 choices[61][1] = "deducci&oacute;n de valores de slots; actualizaci&oacute;n de valores de slots; y equiparaci&oacute;n de marcos";
 choices[61][2] = "deducci&oacute;n de valores de slots; herencia de slots; y equiparaci&oacute;n de marcos";
 choices[61][3] = "reducci&oacute;n de valores de slots; actualizaci&oacute;n de valores de slots; y equiparaci&oacute;n de marcos";
 answers[61] = choices[61][1];
 units[61] = "64";
 comments[61] = "Id Pregunta: 1797. ";


//  Id pregunta: 1798 AÃ±o de creación de pregunta: 2006-01-01
 questions[62]= "63)  En la t&eacute;cnica de representaci&oacute;n del conocimiento mediante marcos (frameworks), el m&eacute;todo de equiparaci&oacute;n de marcos mediante coincidencia con base de control se basa en:";
 choices[62]= new Array();
 choices[62][0] = "asociar una etiqueta a cada slot de los marcos de la base para forzar la coincidencia en algunos slots importantes";
 choices[62][1] = "uso de t&eacute;cnicas de razonamiento aproximado, como l&oacute;gica difusa, Mycin, Dempster-Shafer";
 choices[62][2] = "manejar una base de conocimiento local a cada marco que expresa mediante otro tipo de representaci&oacute;n la importancia que tiene cada slot en el proceso de equiparaci&oacute;n";
 choices[62][3] = "comprobar que los slots que est&aacute;n en el marco pregunta y del marco candidato tienen los mismos valores";
 answers[62] = choices[62][2];
 units[62] = "64";
 comments[62] = "Id Pregunta: 1798. ";


//  Id pregunta: 1800 AÃ±o de creación de pregunta: 2006-01-01
 questions[63]= "64)  En el campo de los sistemas expertos, se&ntilde;ale de las siguientes opciones aquella que enumere sistemas que utilicen representaci&oacute;n param&eacute;trica:";
 choices[63]= new Array();
 choices[63][0] = "Redes neuronales; representaci&oacute;n por marcos; sistemas basados en restricciones";
 choices[63][1] = "Algoritmos gen&eacute;ticos; redes neuronales y redes sem&aacute;nticas";
 choices[63][2] = "Redes neuronales, redes sem&aacute;nticas, y sistemas basados en marcos";
 choices[63][3] = "Redes neuronales y el perceptr&oacute;n";
 answers[63] = choices[63][3];
 units[63] = "64";
 comments[63] = "Id Pregunta: 1800. ";


//  Id pregunta: 1817 AÃ±o de creación de pregunta: 2006-01-01
 questions[64]= "65)  &iquest;Cu&aacute;l de las siguientes no es una herramienta de Data Mining?";
 choices[64]= new Array();
 choices[64][0] = "Enterprise Miner";
 choices[64][1] = "Clementine";
 choices[64][2] = "Erwin";
 choices[64][3] = "SAP Miner";
 answers[64] = choices[64][2];
 units[64] = "64";
 comments[64] = "Id Pregunta: 1817. ";


//  Id pregunta: 4801 AÃ±o de creación de pregunta: 2007-01-01
 questions[65]= "66)  En el modelo de miner&iacute;a de datos de &aacute;rboles de decisi&oacute;n (ID3) de Quinlan:";
 choices[65]= new Array();
 choices[65][0] = "Se obtiene un nuevo conjunto de reglas a partir de uno previo, utilizando mecanismos de deducci&oacute;n basadosen la entrop&iacute;a";
 choices[65][1] = "Se obtiene un conjunto de reglas a partir de un conjunto de ejemplos, clasificados a priori, utilizandomecanismos de inducci&oacute;n";
 choices[65][2] = "Se obtiene un nuevo conjunto de reglas que agrupan, por similaridad, un conjunto de ejemplos, utilizandoaprendizaje no supervisado";
 choices[65][3] = "Se obtiene un nuevo conjunto de reglas a partir de uno previo, mediante eliminaci&oacute;n de reglas incorrectas einclusi&oacute;n de reglas necesarias, utilizando un conjunto de ejemplos para dicha depuraci&oacute;n";
 answers[65] = choices[65][1];
 units[65] = "64";
 comments[65] = "Id Pregunta: 4801. ";


//  Id pregunta: 4859 AÃ±o de creación de pregunta: 2007-01-01
 questions[66]= "67)  En un sistema experto tipo MYCIN, &iquest;c&oacute;mo se realiza el tratamiento de la incertidumbre?";
 choices[66]= new Array();
 choices[66][0] = "Mediante un modelo de inferencia bayesiana";
 choices[66][1] = "Mediante conjuntos borrosos, utilizando la teor&iacute;a de Zadeh";
 choices[66][2] = "Mediante factores de incertidumbre, utilizando la teor&iacute;a de Dempster-Shafer";
 choices[66][3] = "No hay tratamiento de la incertidumbre";
 answers[66] = choices[66][2];
 units[66] = "63";
 comments[66] = "Id Pregunta: 4859. ";


//  Id pregunta: 4869 AÃ±o de creación de pregunta: 2007-01-01
 questions[67]= "68)  En un sistema basado en el conocimiento, &iquest;qu&eacute; diferencia hay entre el conocimiento inferencial y el conocimiento estrat&eacute;gico o de control?";
 choices[67]= new Array();
 choices[67][0] = "El conocimiento inferencial est&aacute; contenido en la base de hechos y el de control es el que se obtiene mediante inferencia";
 choices[67][1] = "Los dos son equivalentes";
 choices[67][2] = "Los sistemas basados en el conocimiento no utilizan conocimiento estrat&eacute;gico";
 choices[67][3] = "El conocimiento inferencial procede de razonamientos y el estrat&eacute;gico permite decidir qu&eacute; regla se aplica en cada momento";
 answers[67] = choices[67][3];
 units[67] = "63";
 comments[67] = "Id Pregunta: 4869. ";


//  Id pregunta: 5601 AÃ±o de creación de pregunta: 2003-01-01
 questions[68]= "69)  &iquest;Cu&aacute;l de los siguientes es un lenguaje orientado al trabajo con la inteligencia artificial?";
 choices[68]= new Array();
 choices[68][0] = "C++";
 choices[68][1] = "Fortran";
 choices[68][2] = "PROLOG";
 choices[68][3] = "Pascal";
 answers[68] = choices[68][2];
 units[68] = "64";
 comments[68] = "Id Pregunta: 5601. ";


//  Id pregunta: 5602 AÃ±o de creación de pregunta: 2003-01-01
 questions[69]= "70)  Indique cu&aacute;l no es un procedimiento o faceta procedural de los slots en marcos";
 choices[69]= new Array();
 choices[69][0] = "if asked";
 choices[69][1] = "if needed";
 choices[69][2] = "if required";
 choices[69][3] = "if added";
 answers[69] = choices[69][0];
 units[69] = "64";
 comments[69] = "Id Pregunta: 5602. ";


//  Id pregunta: 5678 AÃ±o de creación de pregunta: 2003-01-01
 questions[70]= "71)  En cuanto a Agentes Software y la Comunicaci&oacute;n y Coordinaci&oacute;n entre agentes, indique la respuesta no correcta:";
 choices[70]= new Array();
 choices[70][0] = "En el sistema de pizarra existe una estructura de datos global, la pizarra que es gestionada y arbitrada por todos los agentes";
 choices[70][1] = "En la red de contratos en cada tarea existen dos roles diferentes: el del contratista, que es responsable de la gesti&oacute;n de una tarea y el del oferente, que se encarga de la ejecuci&oacute;n real de la tarea.";
 choices[70][2] = "KQML  es un  lenguaje de comunicaci&oacute;n entre agentes software.";
 choices[70][3] = "Ninguna de las anteriores es correcta";
 answers[70] = choices[70][0];
 units[70] = "63";
 comments[70] = "Id Pregunta: 5678. ";


//  Id pregunta: 5756 AÃ±o de creación de pregunta: 2009-01-01
 questions[71]= "72)  En el contexto de la Inteligencia Artifical, &iquest;cu&aacute;l de los siguientes es un tipo de Red Neuronal?";
 choices[71]= new Array();
 choices[71][0] = "Fenomenol&oacute;gica";
 choices[71][1] = "Facial";
 choices[71][2] = "De Bradley";
 choices[71][3] = "Perceptr&oacute;n";
 answers[71] = choices[71][3];
 units[71] = "63";
 comments[71] = "Id Pregunta: 5756. ";


//  Id pregunta: 5880 AÃ±o de creación de pregunta: 2009-01-01
 questions[72]= "73)  Se desea representar usando el formalismo de marcos que 'El cuerpo humano se divide en cabeza, tronco y extremidades'. La etiqueta a utilizar en las relaciones que parten del marco 'cuerpo humano' y van a los marcos 'cabeza', 'tronco' y 'extremidadeses' es:";
 choices[72]= new Array();
 choices[72][0] = "Subclase de";
 choices[72][1] = "Superclase de";
 choices[72][2] = "Compuesto de";
 choices[72][3] = "Parte de";
 answers[72] = choices[72][2];
 units[72] = "64";
 comments[72] = "Id Pregunta: 5880. MAP 2008 A1";


//  Id pregunta: 5889 AÃ±o de creación de pregunta: 2009-01-01
 questions[73]= "74)  En Inteligencia Artificial, la hip&oacute;tesis del mundo cerrado consiste en:";
 choices[73]= new Array();
 choices[73][0] = "Suponer falso todo lo que no est&aacute; almacenado en la base de hechos";
 choices[73][1] = "Suponer cierto todo lo que est&aacute; almacenado en la base de hechos";
 choices[73][2] = "Suponer unas veces cierto y otras falso la informaci&oacute;n almacenada en la base de hechos";
 choices[73][3] = "Ninguna de las anteriores";
 answers[73] = choices[73][0];
 units[73] = "63";
 comments[73] = "Id Pregunta: 5889. MAP 2008 A1";


//  Id pregunta: 6067 AÃ±o de creación de pregunta: 2010-01-01
 questions[74]= "75)  Dentro del &aacute;mbito del reconocimiento de patrones, &iquest;para que se usa el algoritmo 'FCM'?";
 choices[74]= new Array();
 choices[74][0] = "El &lsquo;Forward Chaining Method&rsquo; es uno de la procedimientos de inferencia b&aacute;sico de un sistema de reglas";
 choices[74][1] = "El &lsquo;Fuzzy C-Means&rsquo; es un algoritmo de agrupamiento (an&aacute;lisis cluster) que utiliza l&oacute;gica borrosa";
 choices[74][2] = "El algoritmo &lsquo;Final Cognitive Map&rsquo; captura los patrones mediante mapas cognitivos";
 choices[74][3] = "Ninguna de las anteriores es correcta";
 answers[74] = choices[74][1];
 units[74] = "63";
 comments[74] = "Id Pregunta: 6067. ";


//  Id pregunta: 6068 AÃ±o de creación de pregunta: 2010-01-01
 questions[75]= "76)  En el &aacute;mbito de los algoritmos de aprendizaje";
 choices[75]= new Array();
 choices[75][0] = "Los algoritmos de agrupamiento son m&eacute;todos de aprendizaje supervisado y los de clasificaci&oacute;n son m&eacute;todos de aprendizaje no supervisado";
 choices[75][1] = "Los algoritmos de agrupamiento son m&eacute;todos de aprendizaje no supervisado y los de clasificaci&oacute;n son m&eacute;todos de aprendizaje supervisado";
 choices[75][2] = "Tanto los algoritmos de agrupamiento como de clasificaci&oacute;n son m&eacute;todos aprendizaje supervisado";
 choices[75][3] = "Tanto los algoritmos de agrupamiento como de clasificaci&oacute;n son m&eacute;todos aprendizaje no supervisado";
 answers[75] = choices[75][1];
 units[75] = "63,64";
 comments[75] = "Id Pregunta: 6068. ";


//  Id pregunta: 6069 AÃ±o de creación de pregunta: 2010-01-01
 questions[76]= "77)  Sobre la representaci&oacute;n del conocimiento:";
 choices[76]= new Array();
 choices[76][0] = "Los algoritmos gen&eacute;ticos usan representaci&oacute;n param&eacute;trica";
 choices[76][1] = "Las redes neuronales usan representaci&oacute;n simb&oacute;lica";
 choices[76][2] = "Las dos respuestas anteriores son correctas";
 choices[76][3] = "Todas las respuestas anteriores no son correctas";
 answers[76] = choices[76][0];
 units[76] = "63,64";
 comments[76] = "Id Pregunta: 6069. ";


//  Id pregunta: 6252 AÃ±o de creación de pregunta: 2010-01-01
 questions[77]= "78)  El algoritmo ID3 es una t&eacute;cnica de miner&iacute;a de datos que se clasifica en el grupo de:";
 choices[77]= new Array();
 choices[77][0] = "Los m&oacute;delos estad&iacute;sticos";
 choices[77][1] = "Agrupamiento";
 choices[77][2] = "Los &aacute;rboles de decisi&oacute;n";
 choices[77][3] = "Las redes neuronales";
 answers[77] = choices[77][2];
 units[77] = "64";
 comments[77] = "Id Pregunta: 6252. TICB-2009, bloque desarrollo";


//  Id pregunta: 7299 AÃ±o de creación de pregunta: 2010-01-01
 questions[78]= "79)  Indique cu&aacute;l de las siguientes es una medida de centralidad en una red social:";
 choices[78]= new Array();
 choices[78][0] = "Grado (degree)";
 choices[78][1] = "Cercan&iacute;a (closeness)";
 choices[78][2] = "Intermediaci&oacute;n (betweenness)";
 choices[78][3] = "Todas son medidas de centralidad";
 answers[78] = choices[78][3];
 units[78] = "63";
 comments[78] = "Id Pregunta: 7299. ";


//  Id pregunta: 8254 AÃ±o de creación de pregunta: 2011-01-01
 questions[79]= "80)  Seleccione la respuesta correcta acerca de los sistemas de representaci&oacute;n del conocimiento:";
 choices[79]= new Array();
 choices[79][0] = "La representaci&oacute;n del conocimiento mediante ternas Objeto, Atributo, Valor, no tiene mecanismos inferenciales.";
 choices[79][1] = "Las redes sem&aacute;nticas no tienen capacidad de representar acciones.";
 choices[79][2] = "La representaci&oacute;n en marcos admite el concepto de herencia, pero las redes sem&aacute;nticas no.";
 choices[79][3] = "En los sistemas de razonamiento mon&oacute;tono el conocimiento no var&iacute;a durante el proceso de razonamiento.";
 answers[79] = choices[79][0];
 units[79] = "64";
 comments[79] = "Id Pregunta: 8254. Examen TIC A1 2010";


//  Id pregunta: 8261 AÃ±o de creación de pregunta: 2011-01-01
 questions[80]= "81)  El empleo de redes neuronales para el reconocimiento de caracteres:";
 choices[80]= new Array();
 choices[80][0] = "Usa mecanismos basados en l&oacute;gica borrosa.";
 choices[80][1] = "No permite explicar f&aacute;cilmente las razones por las que se obtiene un determinado resultado.";
 choices[80][2] = "Se basa en la obtenci&oacute;n de un vector de caracter&iacute;sticas";
 choices[80][3] = "Hace que el reconocimiento se vea m&aacute;s afectado por defectos de la imagen que otros m&eacute;todos como el de comparaci&oacute;n de matrices.";
 answers[80] = choices[80][1];
 units[80] = "63,64";
 comments[80] = "Id Pregunta: 8261. Examen TIC A1 2010";


//  Id pregunta: 8284 AÃ±o de creación de pregunta: 2011-01-01
 questions[81]= "82)  El m&eacute;todo de b&uacute;squeda informado que tiene en cuenta el coste m&iacute;nimo necesario para llegar al estado soluci&oacute;n pasando por el estado X, es el denominado:";
 choices[81]= new Array();
 choices[81][0] = "M&eacute;todo de b&uacute;squeda bidireccional.";
 choices[81][1] = "B&uacute;squeda &aacute;vida (Greedy search).";
 choices[81][2] = "B&uacute;squeda con adversario.";
 choices[81][3] = "M&eacute;todo Escalada simple (&quot;Hill-climbing&quot; search).";
 answers[81] = choices[81][1];
 units[81] = "63";
 comments[81] = "Id Pregunta: 8284. Examen TIC A1 2010";


//  Id pregunta: 8344 AÃ±o de creación de pregunta: 2011-01-01
 questions[82]= "83)  &iquest;Cu&aacute;l de las siguientes estructuras de datos requiere m&aacute;s capacidad de almacenamiento de informaci&oacute;n?";
 choices[82]= new Array();
 choices[82][0] = "&Aacute;rbol Binario.";
 choices[82][1] = "Lista.";
 choices[82][2] = "Lista enlazada.";
 choices[82][3] = "&Aacute;rbol-B.";
 answers[82] = choices[82][3];
 units[82] = "64";
 comments[82] = "Id Pregunta: 8344. Examen TIC A2 2010";


//  Id pregunta: 8345 AÃ±o de creación de pregunta: 2011-01-01
 questions[83]= "84)  Dado un grafo G = (V, E) donde V es el conjunto de v&eacute;rtices y E es conjunto de aristas. Diremos que es hamiltoniano si:";
 choices[83]= new Array();
 choices[83][0] = "Todos los v&eacute;rtices tienen el mismo grado.";
 choices[83][1] = "Contiene un ciclo que pasa por todos los v&eacute;rtices del grafo.";
 choices[83][2] = "No contiene ciclos.";
 choices[83][3] = "Es conexo y contiene un ciclo.";
 answers[83] = choices[83][1];
 units[83] = "64";
 comments[83] = "Id Pregunta: 8345. Examen TIC A2 2010";


//  Id pregunta: 8865 AÃ±o de creación de pregunta: 2011-01-01
 questions[84]= "85)  Que algoritmo de ordenaci&oacute;n consiste en comparar pares de elementos adyacentes e intercambiarlos entre s&iacute; hasta que est&eacute;n todos ordenados:";
 choices[84]= new Array();
 choices[84][0] = "Insercci&oacute;n";
 choices[84][1] = "Burbuja";
 choices[84][2] = "Selecci&oacute;n";
 choices[84][3] = "Combinaci&oacute;n";
 answers[84] = choices[84][1];
 units[84] = "63, 64";
 comments[84] = "Id Pregunta: 8865. Analista Ayto. Madrid 2010";


//  Id pregunta: 8923 AÃ±o de creación de pregunta: 2011-01-01
 questions[85]= "86)  Cuando un antivirus utiliza t&eacute;cnicas heur&iacute;sticas significa que:";
 choices[85]= new Array();
 choices[85][0] = "monitoriza continuamente el sistema para detectar amenazas.";
 choices[85][1] = "puede eliminar troyanos y rootkits sin da&ntilde;ar el sistema.";
 choices[85][2] = "puede reconocer c&oacute;digos maliciosos aunque no se encuentren en su base de datos.";
 choices[85][3] = "interroga a otros equipos de confianza para obtener informaci&oacute;n sobre los ficheros";
 answers[85] = choices[85][2];
 units[85] = "63";
 comments[85] = "Id Pregunta: 8923. Operador Ayto. Madrid 2010";


//  Id pregunta: 8956 AÃ±o de creación de pregunta: 2011-01-01
 questions[86]= "87)  En Inteligencia artificial existe varias clasificaciones en cuanto a los m&eacute;todos de b&uacute;squeda. De lso siguientes &iquest;cu&aacute;l pertenece  a la clasificaci&oacute;n  de Mejora Iterativa?";
 choices[86]= new Array();
 choices[86][0] = "B&uacute;squeda Greedy";
 choices[86][1] = "B&uacute;squeda en profundidad iterativa";
 choices[86][2] = "Algoritmo A*";
 choices[86][3] = "Escalada por m&aacute;xima pendiente";
 answers[86] = choices[86][3];
 units[86] = "63";
 comments[86] = "Id Pregunta: 8956. ";


//  Id pregunta: 8957 AÃ±o de creación de pregunta: 2011-01-01
 questions[87]= "88)  Denttro de Web Sem&aacute;ntica 3.0 &iquest;cu&aacute;l no es un lenguaje de construcci&oacute;n?";
 choices[87]= new Array();
 choices[87][0] = "SHOE";
 choices[87][1] = "DAML + OIL";
 choices[87][2] = "WDML";
 choices[87][3] = "RDF";
 answers[87] = choices[87][2];
 units[87] = "63";
 comments[87] = "Id Pregunta: 8957. ";


//  Id pregunta: 8958 AÃ±o de creación de pregunta: 2011-01-01
 questions[88]= "89)  &iquest;Cu&aacute;l de los siguientes conceptos no aplica a la Ingenier&iacute;a del conocimiento?";
 choices[88]= new Array();
 choices[88][0] = "No utiliza enfoques algor&iacute;tmicos";
 choices[88][1] = "Utiliza una estructura eminentemente procedural";
 choices[88][2] = "Utiliza una estructura eminentemente declarativa";
 choices[88][3] = "Resuelve problemas heur&iacute;sticos";
 answers[88] = choices[88][1];
 units[88] = "63";
 comments[88] = "Id Pregunta: 8958. ";


//  Id pregunta: 9446 AÃ±o de creación de pregunta: 2013-01-01
 questions[89]= "90)  Se&ntilde;ale la frase correcta acerca de los diferentes modelos de representaci&oacute;n del conocimiento:";
 choices[89]= new Array();
 choices[89][0] = "En los procesos de inferencia en redes sem&aacute;nticas el uso de la herencia permite efectuar emparejamientos sin necesidad de un homomorfismo total entre la red pregunta y la red respuesta.";
 choices[89][1] = "La utilizaci&oacute;n de marcos como modo de representaci&oacute;n de conocimiento permite asociar a un concepto un conjunto de atributos est&aacute;ticos, cuya actualizaci&oacute;n o modificaci&oacute;n no forma parte del modelo.";
 choices[89][2] = "El algoritmo de extracci&oacute;n de la ra&iacute;z cuadrada de un n&uacute;mero es un ejemplo de representaci&oacute;n declarativa de conocimiento.";
 choices[89][3] = "En una red neuronal entrenada los pesos de los enlaces entre neuronas dependen solamente del algoritmo de entrenamiento empleado.";
 answers[89] = choices[89][0];
 units[89] = "64";
 comments[89] = "Id Pregunta: 9446. Examen AGE TIC A1 2011";


//  Id pregunta: 10273 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  Referente al m&eacute;todo de b&uacute;squeda con adversario aplicado a juegos, &iquest;cu&aacute;l de las siguientes afirmaciones es falsa?";
 choices[90]= new Array();
 choices[90][0] = "Los dos jugadores disponen de informaci&oacute;n completa sobre el estado del juego";
 choices[90][1] = "La estrategia del oponente es desconocida";
 choices[90][2] = "Interviene el azar";
 choices[90][3] = "Al acabar, cada jugador pierde, gana o empata";
 answers[90] = choices[90][2];
 units[90] = "63";
 comments[90] = "Id Pregunta: 10273. NULL";


//  Id pregunta: 10274 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre comunicaci&oacute;n entre agentes inteligentes  mediante sistema de pizarra es cierta?";
 choices[91]= new Array();
 choices[91][0] = "Los agentes reciben se&ntilde;ales de la pizarra cuando &eacute;sta se actualiza";
 choices[91][1] = "Cuando un agente puede contribuir a la soluci&oacute;n del problema lo 'escribe' inmediatamente en la pizarra";
 choices[91][2] = "Ambas son ciertas";
 choices[91][3] = "Ninguna es cierta";
 answers[91] = choices[91][3];
 units[91] = "63";
 comments[91] = "Id Pregunta: 10274. NULL";


//  Id pregunta: 10275 AÃ±o de creación de pregunta: 2014-01-01
 questions[92]= "93)  Los agentes inteligentes, seg&uacute;n su capacidad para resolver problemas, pueden ser:";
 choices[92]= new Array();
 choices[92][0] = "Reactivos";
 choices[92][1] = "Predictivos";
 choices[92][2] = "Ambas";
 choices[92][3] = "Ninguna";
 answers[92] = choices[92][0];
 units[92] = "63";
 comments[92] = "Id Pregunta: 10275. NULL";


//  Id pregunta: 10276 AÃ±o de creación de pregunta: 2014-01-01
 questions[93]= "94)  Ventajas de la representaci&oacute;n del conocimiento mediante reglas. Se&ntilde;ale la falsa";
 choices[93]= new Array();
 choices[93][0] = "Facilidad de representaci&oacute;n";
 choices[93][1] = "Direcci&oacute;n de inferencia prefijada";
 choices[93][2] = "Modularidad";
 choices[93][3] = "Flexibilidad";
 answers[93] = choices[93][1];
 units[93] = "64";
 comments[93] = "Id Pregunta: 10276. NULL";


//  Id pregunta: 10278 AÃ±o de creación de pregunta: 2014-01-01
 questions[94]= "95)  Se&ntilde;ale el m&eacute;todo de inferencia no aplicable a marcos";
 choices[94]= new Array();
 choices[94][0] = "Deducci&oacute;n de valores de slots";
 choices[94][1] = "Actualizaci&oacute;n de valores de slots";
 choices[94][2] = "Equiparaci&oacute;n";
 choices[94][3] = "Emparejamiento";
 answers[94] = choices[94][3];
 units[94] = "64";
 comments[94] = "Id Pregunta: 10278. NULL";


//  Id pregunta: 10279 AÃ±o de creación de pregunta: 2014-01-01
 questions[95]= "96)  En reglas, la inferencia mediante encadenamiento hacia adelante:";
 choices[95]= new Array();
 choices[95][0] = "Requiere en primer lugar que se introduzcan las premisas en la base de hechos";
 choices[95][1] = "Se crea un conjunto conflicto con las reglas cuyo consecuente es el objetivo de la inferencia";
 choices[95][2] = "La regla que se va a disparar siempre se elige de forma aleatoria";
 choices[95][3] = "Si la regla disparada es deductiva, se ejecuta la acci&oacute;n asociada";
 answers[95] = choices[95][0];
 units[95] = "64";
 comments[95] = "Id Pregunta: 10279. NULL";


//  Id pregunta: 10280 AÃ±o de creación de pregunta: 2014-01-01
 questions[96]= "97)  Se&ntilde;ale la afirmaci&oacute;n falsa en relaci&oacute;n a las redes neuronales";
 choices[96]= new Array();
 choices[96][0] = "Son un m&eacute;todo de representaci&oacute;n del conocimiento param&eacute;trico";
 choices[96][1] = "La unidad de representaci&oacute;n de m&aacute;s alto nivel es la neurona";
 choices[96][2] = "Las neuronas se conectan mediante arcos";
 choices[96][3] = "Las neuronas se agrupan en capas";
 answers[96] = choices[96][1];
 units[96] = "64";
 comments[96] = "Id Pregunta: 10280. NULL";


//  Id pregunta: 10628 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Se&ntilde;ale cu&aacute;l de estas caracter&iacute;sticas no se corresponde con un agente inteligente:";
 choices[97]= new Array();
 choices[97][0] = "Pueden dar soluciones a diferentes problemas.";
 choices[97][1] = "Poseen capacidad de an&aacute;lisis.";
 choices[97][2] = "Tienen capacidad de aprender y mejorar a trav&eacute;s de la interacci&oacute;n.";
 choices[97][3] = "Ejecutan la misma acci&oacute;n de forma peri&oacute;dica.";
 answers[97] = choices[97][3];
 units[97] = "63";
 comments[97] = "Id Pregunta: 10628. ";


//  Id pregunta: 10956 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Un agente inteligente es un programa inform&aacute;tico que:";
 choices[98]= new Array();
 choices[98][0] = "Por encargo de un usuario u otro programa realiza sugerencias determin&iacute;sticas predeterminadas.";
 choices[98][1] = "Por encargo de un usuario realiza sugerencias que requieren cierto grado de aprendizaje, sin llegar a ejecutar tareas.";
 choices[98][2] = "Por encargo de un usuario u otro programa, realiza de forma aut&oacute;noma tareas que requieren cierto grado de inteligencia y aprendizaje.";
 choices[98][3] = "Por encargo de un usuario realiza sugerencias que deben ser evaluadas por el usuario que las encarga antes de ser ejecutadas.";
 answers[98] = choices[98][2];
 units[98] = "63";
 comments[98] = "Id Pregunta: 10956. TIC A1 AGE 2014";


//  Id pregunta: 11142 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Seleccione la respuesta verdadera";
 choices[99]= new Array();
 choices[99][0] = "Los m&eacute;todos de aprendizaje no supervisado se utilizan para t&eacute;cnicas de clustering o agrupaci&oacute;n";
 choices[99][1] = "Los m&eacute;todos de aprendizaje supervisado y no supervisado parten de la misma base de datos de conocimiento";
 choices[99][2] = "Los m&eacute;todos de aprendizaje no supervisado permiten clasificar una muestra en funci&oacute;n de las clases conocidas";
 choices[99][3] = "Las redes neuronales son t&eacute;cnicas de aprendizaje no supervisado";
 answers[99] = choices[99][0];
 units[99] = "63";
 comments[99] = "Id Pregunta: 11142. ";


