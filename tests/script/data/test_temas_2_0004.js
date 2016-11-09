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

//  Id pregunta: 1992 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  Al conjunto de est&aacute;ndares que permite que distintas herramientas CASE del mismo o distinto fabricante el intercambio de datos se denomina:";
 choices[0]= new Array();
 choices[0][0] = "MERISE.";
 choices[0][1] = "IPSE.";
 choices[0][2] = "MIDS.";
 choices[0][3] = "X/Open CASE.";
 answers[0] = choices[0][1];
 units[0] = "91";
 comments[0] = "Id Pregunta: 1992. ";


//  Id pregunta: 1999 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  En el modelo COCOMO de estimaci&oacute;n de esfuerzo de desarrollo de software, se distingue una jerarqu&iacute;a de modelos de estimaci&oacute;n. E esta jerarqu&iacute;a el modelo b&aacute;sico corresponde a:";
 choices[1]= new Array();
 choices[1][0] = "C&aacute;lculo del esfuerzo en funci&oacute;n de las l&iacute;neas de c&oacute;digo a desarrollar";
 choices[1][1] = "C&aacute;lculo del esfuerzo en funci&oacute;n de las l&iacute;neas de c&oacute;digo a desarrollar y de unos factores correctores";
 choices[1][2] = "C&aacute;lculo del esfuerzo de las l&iacute;neas de c&oacute;digo a desarrollar y de la etapa del ciclo de vida del sistema";
 choices[1][3] = "C&aacute;lculo del esfuerzo en funci&oacute;n de las l&iacute;neas de c&oacute;digo a desarrollar y del hardware usado";
 answers[1] = choices[1][0];
 units[1] = "89";
 comments[1] = "Id Pregunta: 1999. NULL";


//  Id pregunta: 2033 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  Cu&aacute;l de los siguientes no es un factor de calidad de McCall:";
 choices[2]= new Array();
 choices[2][0] = "Fiabilidad";
 choices[2][1] = "Usabilidad";
 choices[2][2] = "Facilidad de mantenimiento";
 choices[2][3] = "Bajo coste";
 answers[2] = choices[2][3];
 units[2] = "88";
 comments[2] = "Id Pregunta: 2033. Similar a examen TIC SS A 2003";


//  Id pregunta: 2040 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  El conjunto de actividades que es necesario realizar para asegurar que el producto software responde a las necesidades expresadas por el usuario se denomina:";
 choices[3]= new Array();
 choices[3][0] = "Control de calidad";
 choices[3][1] = "Modelo de calidad";
 choices[3][2] = "Garant&iacute;a de calidad";
 choices[3][3] = "Plan General de Calidad";
 answers[3] = choices[3][2];
 units[3] = "92";
 comments[3] = "Id Pregunta: 2040. NULL";


//  Id pregunta: 2047 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  En la m&eacute;trica de productividad COCOMO, el modelo b&aacute;sico:";
 choices[4]= new Array();
 choices[4][0] = "Calcula el esfuerzo y el coste de un desarrollo software en funci&oacute;n &uacute;nicamente de las l&iacute;neas fuentes estimadas de los programas";
 choices[4][1] = "A&ntilde;ade una evaluaci&oacute;n subjetiva del producto y de los atributos del proyecto y del personal";
 choices[4][2] = "Considera el impacto de los factores de influencia de las fases de desarrollo (an&aacute;lisis funcional y dise&ntilde;o t&eacute;cnico)";
 choices[4][3] = "Nada de lo anterior es correcto";
 answers[4] = choices[4][0];
 units[4] = "89";
 comments[4] = "Id Pregunta: 2047. NULL";


//  Id pregunta: 2065 AÃ±o de creación de pregunta: 2004-01-01
 questions[5]= "6)  Dentro de las m&eacute;tricas orientadas al SW no se encuetra";
 choices[5]= new Array();
 choices[5][0] = "M&eacute;tricas de productividad";
 choices[5][1] = "M&eacute;tricas de fiabilidad";
 choices[5][2] = "M&eacute;tricas de rendimiento";
 choices[5][3] = "M&eacute;tricas de Complejidad";
 answers[5] = choices[5][2];
 units[5] = "88";
 comments[5] = "Id Pregunta: 2065. ";


//  Id pregunta: 2066 AÃ±o de creación de pregunta: 2004-01-01
 questions[6]= "7)  &iquest;Qu&eacute; t&eacute;cnica se puede usar para medir el tama&ntilde;o";
 choices[6]= new Array();
 choices[6][0] = "Program Evaluation and Review Tecnique (PERT)";
 choices[6][1] = "Diagrama de extrapolaci&oacute;n";
 choices[6][2] = "M&eacute;trica Bang";
 choices[6][3] = "WBS (Work Breakdown Structure)";
 answers[6] = choices[6][2];
 units[6] = "89";
 comments[6] = "Id Pregunta: 2066. SS-A 2004";


//  Id pregunta: 2125 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta sobre el &quot;Upsizing&quot;?:";
 choices[7]= new Array();
 choices[7][0] = "Las aplicaciones se elevan a la gerencia de la organizaci&oacute;n";
 choices[7][1] = "El &quot;upsizing&quot; es lo que queda de un &quot;righsizing&quot; cuando se le hace un &quot;downsizing&quot;";
 choices[7][2] = "S&oacute;lo se realiza en algunos sistemas";
 choices[7][3] = "Con la tecnolog&iacute;a web ya no tiene sentido hablar de &quot;upsizing&quot; ya que es centralizada";
 answers[7] = choices[7][2];
 units[7] = "90";
 comments[7] = "Id Pregunta: 2125. NULL";


//  Id pregunta: 2132 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Cu&aacute;l de las siguientes afirmaciones es verdadera respecto a las m&eacute;tricas de calidad del software?:";
 choices[8]= new Array();
 choices[8][0] = "COCOMO es un modelo de estimaci&oacute;n del software que se basa en el n&uacute;mero de instrucciones de c&oacute;digo fuente";
 choices[8][1] = "La m&eacute;trica de complejidad del software conocida como de los puntos de funci&oacute;n se obtiene utilizando una relaci&oacute;n emp&iacute;rica basada en medidas del dominio de informaci&oacute;n y en valoraciones subjetivas";
 choices[8][2] = "La t&eacute;cnica de Halstead sirve para medir la complejidad de un desarrollo bas&aacute;ndose en su 'longitud', su 'vocabulario' y su 'volumen', que se obtienen mediante ciertas ecuaciones que utilizan el n&uacute;mero de operadores y operandos del desarrollo";
 choices[8][3] = "Son ciertas todas las anteriores";
 answers[8] = choices[8][3];
 units[8] = "88";
 comments[8] = "Id Pregunta: 2132. ";


//  Id pregunta: 2194 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Cu&aacute;ndo debe aplicarse un plan de garant&iacute;a de calidad?:";
 choices[9]= new Array();
 choices[9][0] = "En casos de proyectos de gran envergadura";
 choices[9][1] = "Cuando sea rentable econ&oacute;micamente";
 choices[9][2] = "Cuando el cliente as&iacute; lo solicite";
 choices[9][3] = "Cuando el coste de no aplicarlo sea mayor que el de aplicarlo";
 answers[9] = choices[9][3];
 units[9] = "87";
 comments[9] = "Id Pregunta: 2194. NULL";


//  Id pregunta: 2200 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;En qu&eacute; consiste la teor&iacute;a libre aplicada a la implantaci&oacute;n de la calidad?:";
 choices[10]= new Array();
 choices[10][0] = "El coste es constante e independiente de la calidad del producto";
 choices[10][1] = "El coste es constante pero dependiente de la calidad del producto";
 choices[10][2] = "El coste es constante s&oacute;lo en algunos casos";
 choices[10][3] = "El coste es independiente de la calidad del producto, aunque no se considera fijo";
 answers[10] = choices[10][0];
 units[10] = "88";
 comments[10] = "Id Pregunta: 2200. NULL";


//  Id pregunta: 2226 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  A la extensi&oacute;n por la cual un programa satisface sus especificaciones y cumple con los requerimientos del usuario se le llama:";
 choices[11]= new Array();
 choices[11][0] = "Correcci&oacute;n";
 choices[11][1] = "Fiabilidad";
 choices[11][2] = "Eficiencia";
 choices[11][3] = "Integridad";
 answers[11] = choices[11][0];
 units[11] = "88";
 comments[11] = "Id Pregunta: 2226. ";


//  Id pregunta: 2232 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Al esfuerzo requerido para ense&ntilde;ar, explotar, prepara las entradas e interpretar las salidas de un programa se llama:";
 choices[12]= new Array();
 choices[12][0] = "Usabilidad";
 choices[12][1] = "Mantenibilidad";
 choices[12][2] = "Verificabilidad";
 choices[12][3] = "Flexibilidad";
 answers[12] = choices[12][0];
 units[12] = "88";
 comments[12] = "Id Pregunta: 2232. NULL";


//  Id pregunta: 2266 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  El coste de la no calidad viene dado por:";
 choices[13]= new Array();
 choices[13][0] = "Evaluaci&oacute;n del producto final";
 choices[13][1] = "Fallos internos";
 choices[13][2] = "Fallos internos y externos";
 choices[13][3] = "Fallos externos con responsabilidad propia";
 answers[13] = choices[13][2];
 units[13] = "88";
 comments[13] = "Id Pregunta: 2266. ";


//  Id pregunta: 2280 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  El modelo COCOMO de estimaci&oacute;n de recursos y esfuerzo en el desarrollo de un sistema de software, define un tipo de m&eacute;trica:";
 choices[14]= new Array();
 choices[14][0] = "De productividad";
 choices[14][1] = "De complejidad";
 choices[14][2] = "De calidad";
 choices[14][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[14] = choices[14][0];
 units[14] = "89";
 comments[14] = "Id Pregunta: 2280. NULL";


//  Id pregunta: 2294 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  El modo semiacoplado de aplicar los modelos de COCOMO considera:";
 choices[15]= new Array();
 choices[15][0] = "Proyectos peque&ntilde;os";
 choices[15][1] = "Proyectos de complejidad media";
 choices[15][2] = "Proyectos de complejidad alta";
 choices[15][3] = "Proyectos que deben desarrollarse dentro de un hardware y software estricto y con restricciones operativas";
 answers[15] = choices[15][1];
 units[15] = "89";
 comments[15] = "Id Pregunta: 2294. NULL";


//  Id pregunta: 2298 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  El Plan General de Garant&iacute;a de Calidad aplicable al desarrollo de equipos l&oacute;gicos se estructura en cuatro fasc&iacute;culos, los cuales est&aacute;n agrupados en dos grandes bloques. &iquest;Cu&aacute;les son?:";
 choices[16]= new Array();
 choices[16][0] = "Bloque tem&aacute;tico y bloque de calidad";
 choices[16][1] = "Bloque te&oacute;rico y bloque de procedimientos";
 choices[16][2] = "Bloque metodol&oacute;gico y bloque instrumental";
 choices[16][3] = "Bloque formal y bloque de proyectos";
 answers[16] = choices[16][2];
 units[16] = "88";
 comments[16] = "Id Pregunta: 2298. ";


//  Id pregunta: 2325 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  En la t&eacute;cnica de estimaci&oacute;n COCOMO cl&aacute;sico, el modelo avanzado:";
 choices[17]= new Array();
 choices[17][0] = "Calcula el esfuerzo y el coste de un desarrollo software en funci&oacute;n &uacute;nicamente de las l&iacute;neas fuentes estimadas de los programas";
 choices[17][1] = "A&ntilde;ade una evaluaci&oacute;n subjetiva del producto y de los atributos del proyecto y del personal";
 choices[17][2] = "Considera que el impacto de los factores de influencia depende de la fase de desarrollo";
 choices[17][3] = "Nada de lo anterior";
 answers[17] = choices[17][2];
 units[17] = "89";
 comments[17] = "Id Pregunta: 2325. Preparatic XVII";


//  Id pregunta: 2326 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  En la t&eacute;cnica de estimaci&oacute;n COCOMO cl&aacute;sico, el modelo Intermedio:";
 choices[18]= new Array();
 choices[18][0] = "Calcula el esfuerzo y el coste de un desarrollo software en funci&oacute;n &uacute;nicamente de las l&iacute;neas fuentes estimadas de los programas";
 choices[18][1] = "A&ntilde;ade una evaluaci&oacute;n subjetiva del producto y de los atributos del proyecto y del personal";
 choices[18][2] = "Considera que el impacto de los factores de influencia depende de la fase de desarrollo";
 choices[18][3] = "Nada de lo anterior es correcto";
 answers[18] = choices[18][1];
 units[18] = "89";
 comments[18] = "Id Pregunta: 2326. Preparatic XVII";


//  Id pregunta: 2356 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  Entre las m&eacute;tricas que miden la complejidad tenemos:";
 choices[19]= new Array();
 choices[19][0] = "T&eacute;cnica de McCabe y T&eacute;cnica de Halstead";
 choices[19][1] = "M&eacute;todos de los puntos de funci&oacute;n";
 choices[19][2] = "T&eacute;cnicas de McCall sobre la estructura de la calidad del software";
 choices[19][3] = "Todas las respuestas anteriores son ciertas";
 answers[19] = choices[19][0];
 units[19] = "88";
 comments[19] = "Id Pregunta: 2356. NULL";


//  Id pregunta: 2368 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Entre los siguientes t&eacute;rminos, indicar cu&aacute;l define la reconstrucci&oacute;n de un sistema de una forma nueva, incluyendo la implementaci&oacute;n:";
 choices[20]= new Array();
 choices[20][0] = "Ingenier&iacute;a inversa.";
 choices[20][1] = "Reestructuraci&oacute;n.";
 choices[20][2] = "Reingenier&iacute;a.";
 choices[20][3] = "Ingenier&iacute;a hacia delante.";
 answers[20] = choices[20][2];
 units[20] = "91";
 comments[20] = "Id Pregunta: 2368. ";


//  Id pregunta: 2387 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  Indicar cu&aacute;l no es un factor de calidad, seg&uacute;n McCall, desde un punto de vista de transici&oacute;n:";
 choices[21]= new Array();
 choices[21][0] = "Reusabilidad";
 choices[21][1] = "Flexibilidad";
 choices[21][2] = "Portabilidad";
 choices[21][3] = "Interoperabilidad";
 answers[21] = choices[21][1];
 units[21] = "88";
 comments[21] = "Id Pregunta: 2387. NULL";


//  Id pregunta: 2393 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  La fundaci&oacute;n EFQM fue una iniciativa de:";
 choices[22]= new Array();
 choices[22][0] = "Las organizaciones europeas de normalizaci&oacute;n (AENOR, AFNOR, DIN...)";
 choices[22][1] = "ANSI e IEEE";
 choices[22][2] = "La Comisi&oacute;n Europea y 14 compa&ntilde;&iacute;as europeas";
 choices[22][3] = "ISO";
 answers[22] = choices[22][2];
 units[22] = "92";
 comments[22] = "Id Pregunta: 2393. NULL";


//  Id pregunta: 2446 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Las m&eacute;tricas que tratan de evaluar si el software desarrollado cumple los requerimientos del usuario son las:";
 choices[23]= new Array();
 choices[23][0] = "M&eacute;tricas de productividad";
 choices[23][1] = "M&eacute;tricas de los factores de calidad";
 choices[23][2] = "M&eacute;tricas de complejidad";
 choices[23][3] = "Ninguna de las anteriores";
 answers[23] = choices[23][1];
 units[23] = "88";
 comments[23] = "Id Pregunta: 2446. ";


//  Id pregunta: 2467 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  No es un &quot;agente&quot; en el modelo EFQM:";
 choices[24]= new Array();
 choices[24][0] = "Liderazgo";
 choices[24][1] = "Gesti&oacute;n de recursos humanos";
 choices[24][2] = "Pol&iacute;ticas y estrategias";
 choices[24][3] = "Satisfacci&oacute;n del cliente";
 answers[24] = choices[24][3];
 units[24] = "92";
 comments[24] = "Id Pregunta: 2467. NULL";


//  Id pregunta: 2492 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Se&ntilde;alar la definici&oacute;n falsa sobre las m&eacute;tricas de calidad del software:";
 choices[25]= new Array();
 choices[25][0] = "Las m&eacute;tricas de productividad se centran fundamentalmente en el coste del proceso de la ingenier&iacute;a del software";
 choices[25][1] = "Las m&eacute;tricas de fiabilidad tratan de evaluar si el software producido se ajusta a los requerimientos del usuario";
 choices[25][2] = "Las m&eacute;tricas de los factores de calidad basan su evaluaci&oacute;n en la medida de una relaci&oacute;n de factores denominados de calidad del software";
 choices[25][3] = "La m&eacute;tricas de complejidad se orientan esencialmente a evaluar la facilidad de mantenimiento del software";
 answers[25] = choices[25][0];
 units[25] = "88";
 comments[25] = "Id Pregunta: 2492. ";


//  Id pregunta: 2499 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  Si se usa COCOMO, no se tendr&aacute;n en cuenta:";
 choices[26]= new Array();
 choices[26][0] = "Las l&iacute;neas de c&oacute;digo de los programas de pruebas";
 choices[26][1] = "Las declaraciones iniciales";
 choices[26][2] = "Los trabajos desarrollados en &quot;scripts&quot;";
 choices[26][3] = "Las instrucciones de formateo por pantalla de los datos";
 answers[26] = choices[26][0];
 units[26] = "89";
 comments[26] = "Id Pregunta: 2499. NULL";


//  Id pregunta: 2538 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  Las herramientas CVS y RCS son:";
 choices[27]= new Array();
 choices[27][0] = "herramientas de gesti&oacute;n de contenidos.";
 choices[27][1] = "herramientas ofim&aacute;ticas de dise&ntilde;os gr&aacute;ficos.";
 choices[27][2] = "herramientas de control de versiones.";
 choices[27][3] = "herramientas de control de configuraci&oacute;n.";
 answers[27] = choices[27][2];
 units[27] = "90";
 comments[27] = "Id Pregunta: 2538. ";


//  Id pregunta: 2569 AÃ±o de creación de pregunta: 2003-01-01
 questions[28]= "29)  El denominado &quot; principio de Pareto&quot; empleado frecuentemente en el enfoque estad&iacute;stico de Garant&iacute;a de Calidad en desarrollo del SW establece que:";
 choices[28]= new Array();
 choices[28][0] = "El n&uacute;mero de defectos del SW crece exponencialmente con el n&uacute;mero de nicveles jer&aacute;rquicos presentes en el equipo de desarrollo";
 choices[28][1] = "El 80% de los defectos tienen su origen com&uacute;n en el 20% de los factores causantes";
 choices[28][2] = "Cuando un buen programador es ascendido a analista la tasa de errores se duplica, con un nivel de confianza del 95%";
 choices[28][3] = "Para una complejidad dda en un proyecto inform&aacute;tico el n&uacute;mero de errores se duplica cada per&iacute;odo de 18 meses o fracci&oacute;n";
 answers[28] = choices[28][1];
 units[28] = "87,88,92";
 comments[28] = "Id Pregunta: 2569. ";


//  Id pregunta: 2572 AÃ±o de creación de pregunta: 2004-01-01
 questions[29]= "30)  Los factores de calidad desde el punto de vista de la explotaci&oacute;n, seg&uacute;n McCall son los siguientes:";
 choices[29]= new Array();
 choices[29][0] = "Usabilidad, Eficiencia y Fiabilidad";
 choices[29][1] = "Mantenibilidad, Verificabilidad y Flexibilidad";
 choices[29][2] = "Usabilidad, Seguridad, Eficiencia, Correccion y Fiabilidad";
 choices[29][3] = "Usabilidad, Mantenibilidad, Flexibilidad y Correcci&oacute;n";
 answers[29] = choices[29][2];
 units[29] = "87,88,92";
 comments[29] = "Id Pregunta: 2572. ";


//  Id pregunta: 2574 AÃ±o de creación de pregunta: 2004-01-01
 questions[30]= "31)  En la calidad del Software basandonos en el coste de implantaci&oacute;n, la Teor&iacute;a de la Calidad/Coste dice:";
 choices[30]= new Array();
 choices[30][0] = "El coste de producci&oacute;n aumenta exponencialmente con el aumento de calidad";
 choices[30][1] = "Un producto de calidad es mas barato de producir; el coste disminuye exponencialmente con el aumento de la calidad";
 choices[30][2] = "El coste es constante e independiente de la calidad del producto";
 choices[30][3] = "Ninguna de ellas";
 answers[30] = choices[30][0];
 units[30] = "87,88,92";
 comments[30] = "Id Pregunta: 2574. ";


//  Id pregunta: 2576 AÃ±o de creación de pregunta: 2004-01-01
 questions[31]= "32)  El PGGC define los agentes que deben de intervenir en un proyecto inform&aacute;tico.&iquest;Qui&eacute;n no participa?";
 choices[31]= new Array();
 choices[31][0] = "EXP: Experto o analista";
 choices[31][1] = "EDS: Equipo de Desarrollo";
 choices[31][2] = "EGC: Equipo de Garantia de Calidad";
 choices[31][3] = "USR: Usuario o cliente";
 answers[31] = choices[31][0];
 units[31] = "87,88,92";
 comments[31] = "Id Pregunta: 2576. ";


//  Id pregunta: 2584 AÃ±o de creación de pregunta: 2003-01-01
 questions[32]= "33)  &iquest;Qu&eacute; es el Modelo CMM (modelo de madurez de la capacidad de proceso de software)?:";
 choices[32]= new Array();
 choices[32][0] = "Metodolog&iacute;a de dise&ntilde;o de componentes de software orientados a la optimizaci&oacute;n de los recursos y capacidad de proceso de los ordenadores.";
 choices[32][1] = "Metodolog&iacute;a para el desarrollo de software de metalenguajes.";
 choices[32][2] = " Modelo organizativo para el dise&ntilde;o software de macroensambladores cruzados.";
 choices[32][3] = "Conjunto de estrategias de mejora y aseguramiento de la calidad, en procesos de desarrollo de software.";
 answers[32] = choices[32][3];
 units[32] = "87";
 comments[32] = "Id Pregunta: 2584. Junta Andaluc&iacute;a";


//  Id pregunta: 2620 AÃ±o de creación de pregunta: 2003-01-01
 questions[33]= "34)  &iquest;Cu&aacute;l no es un factor de calidad seg&uacute;n Mc Call?";
 choices[33]= new Array();
 choices[33][0] = "Fiabilidad";
 choices[33][1] = "Coste ";
 choices[33][2] = "Facilidad de mantenimiento";
 choices[33][3] = "Seguridad";
 answers[33] = choices[33][1];
 units[33] = "87,88,92";
 comments[33] = "Id Pregunta: 2620. ";


//  Id pregunta: 2652 AÃ±o de creación de pregunta: 2003-01-01
 questions[34]= "35)  La actividad DSI-CAL2 se denomina";
 choices[34]= new Array();
 choices[34][0] = "Revisi&oacute;n de la especificaci&oacute;n t&eacute;cnica del plan de prueba";
 choices[34][1] = "Revisi&oacute;n de la verificaci&oacute;n de la arquitectura del sistema";
 choices[34][2] = "Revisi&oacute;n de los requisitos de implantaci&oacute;n";
 choices[34][3] = "ninguna es cirrecta";
 answers[34] = choices[34][0];
 units[34] = "87,88,92";
 comments[34] = "Id Pregunta: 2652. ";


//  Id pregunta: 2803 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  Elementos de un modelo de calidad del SW son:";
 choices[35]= new Array();
 choices[35][0] = "Procedimientos, criterios y m&eacute;tricas de calidad";
 choices[35][1] = "Sistema de calidad, factores y m&eacute;tricas";
 choices[35][2] = "Factores y criterios de calidad";
 choices[35][3] = "Factores, criterios y m&eacute;tricas";
 answers[35] = choices[35][3];
 units[35] = "87";
 comments[35] = "Id Pregunta: 2803. NULL";


//  Id pregunta: 2805 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  En el modelo de McCall. Cu&aacute;l de los siguientes elementos no se considera un factor de calidad";
 choices[36]= new Array();
 choices[36][0] = "Reusabilidad";
 choices[36][1] = "Modularidad";
 choices[36][2] = "Flexibilidad";
 choices[36][3] = "Eficiencia";
 answers[36] = choices[36][1];
 units[36] = "88";
 comments[36] = "Id Pregunta: 2805. ";


//  Id pregunta: 2807 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  El modelo de Jelinsi-Moranda se encuadra dentro de las m&eacute;tricas de:";
 choices[37]= new Array();
 choices[37][0] = "Productividad";
 choices[37][1] = "Fiabilidad";
 choices[37][2] = "Factores de calidad";
 choices[37][3] = "Complejidad";
 answers[37] = choices[37][1];
 units[37] = "88";
 comments[37] = "Id Pregunta: 2807. NULL";


//  Id pregunta: 2813 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  El modelo de calidad EFQM";
 choices[38]= new Array();
 choices[38][0] = "Considera 8 criterios y 30 subcriterios";
 choices[38][1] = "Considera 9 criterios y 32 subcriterios";
 choices[38][2] = "Considera 9 criterios y 40 subcriterios";
 choices[38][3] = "El modelo de calidad EFQM no considera criterios sino factores";
 answers[38] = choices[38][1];
 units[38] = "88";
 comments[38] = "Id Pregunta: 2813. NULL";


//  Id pregunta: 2815 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  Cual de las siguientes no es una forma de autoevaluaci&oacute;n seg&uacute;n el EFQM";
 choices[39]= new Array();
 choices[39][0] = "Simulaci&oacute;n de presentaci&oacute;n al Premio";
 choices[39][1] = "Por formularios";
 choices[39][2] = "Por cuestionarios de autoevaluaci&oacute;n";
 choices[39][3] = "Todas son correctas";
 answers[39] = choices[39][3];
 units[39] = "88";
 comments[39] = "Id Pregunta: 2815. NULL";


//  Id pregunta: 2817 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  En el M&eacute;todo de los Puntos de Funci&oacute;n &quot;MARK II&quot;:";
 choices[40]= new Array();
 choices[40][0] = "Un sistema se configura como un conjunto de &quot;aplicaciones tipo&quot; l&oacute;gicas.";
 choices[40][1] = "Las consultas se tratan como una entrada m&aacute;s.";
 choices[40][2] = "Se emplea el concepto de &quot;fichero l&oacute;gico&quot;.";
 choices[40][3] = "Se consideran 19 caracter&iacute;sticas del sistema para calcular los valores de ajuste de la complejidad.";
 answers[40] = choices[40][3];
 units[40] = "89";
 comments[40] = "Id Pregunta: 2817. NULL";


//  Id pregunta: 2819 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  La distribucci&oacute;n Rayleigh se utiliza en el modelo de estimaci&oacute;n del esfuerzo de desarrollo de un proyecto SW propuesto por:";
 choices[41]= new Array();
 choices[41][0] = "Putnam";
 choices[41][1] = "Walston-Felix";
 choices[41][2] = "Esterling";
 choices[41][3] = "McCall";
 answers[41] = choices[41][0];
 units[41] = "89";
 comments[41] = "Id Pregunta: 2819. NULL";


//  Id pregunta: 2826 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  &iquest;Cu&aacute;l de las siguientes no es una causa del fracaso en la migraci&oacute;n de un sistema?";
 choices[42]= new Array();
 choices[42][0] = "Excesivo coste econ&oacute;mico.";
 choices[42][1] = "Falta de planificaci&oacute;n de la migraci&oacute;n.";
 choices[42][2] = "Falta de formaci&oacute;n a usuarios finales.";
 choices[42][3] = "Todas son causas de fracaso.";
 answers[42] = choices[42][0];
 units[42] = "90";
 comments[42] = "Id Pregunta: 2826. ";


//  Id pregunta: 2833 AÃ±o de creación de pregunta: 2006-01-01
 questions[43]= "44)  La transformaci&oacute;n de una forma de representaci&oacute;n de un sistema en otra distinta pero del mismo nivel de abstracci&oacute;n, sin modificar el comportamiento externo del sistema es:";
 choices[43]= new Array();
 choices[43][0] = "Ingenier&iacute;a inversa.";
 choices[43][1] = "Reestructuraci&oacute;n.";
 choices[43][2] = "Ingenier&iacute;a hacia delante.";
 choices[43][3] = "Reingenier&iacute;a.";
 answers[43] = choices[43][1];
 units[43] = "91";
 comments[43] = "Id Pregunta: 2833. ";


//  Id pregunta: 2834 AÃ±o de creación de pregunta: 2006-01-01
 questions[44]= "45)  El proceso que va desde un alto nivel de abstracci&oacute;n hasta la propia implementaci&oacute;n f&iacute;sica del sistema se conoce como:";
 choices[44]= new Array();
 choices[44][0] = "Ingenier&iacute;a inversa.";
 choices[44][1] = "Reestructuraci&oacute;n.";
 choices[44][2] = "Ingenier&iacute;a hacia delante.";
 choices[44][3] = "Reingenier&iacute;a.";
 answers[44] = choices[44][2];
 units[44] = "91";
 comments[44] = "Id Pregunta: 2834. ";


//  Id pregunta: 2880 AÃ±o de creación de pregunta: 2006-01-01
 questions[45]= "46)  En la matriz de puntuaci&oacute;n REDER, utilizada para puntuar las memorias de las organizaciones que se presentan al Premio Europeo de la Calidad, al subcriterio 7b se le asigna, del total de puntos correspondientes al criterio 7, el:";
 choices[45]= new Array();
 choices[45][0] = "0.1";
 choices[45][1] = "0.15";
 choices[45][2] = "0.2";
 choices[45][3] = "0.25";
 answers[45] = choices[45][3];
 units[45] = "92";
 comments[45] = "Id Pregunta: 2880. NULL";


//  Id pregunta: 4387 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  &iquest;Cu&aacute;l de los siguientes no es un factor de calidad, seg&uacute;n el modelo de McCall?";
 choices[46]= new Array();
 choices[46][0] = "Integridad.";
 choices[46][1] = "Completitud.";
 choices[46][2] = "Fiabilidad.";
 choices[46][3] = "Facilidad de mantenimiento.";
 answers[46] = choices[46][1];
 units[46] = "88";
 comments[46] = "Id Pregunta: 4387. NULL";


//  Id pregunta: 4444 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  El modelo CMMi , en su modo Staged establece 5 niveles de madurez. Indique el orden correcto de menor a mayor madurez:";
 choices[47]= new Array();
 choices[47][0] = "Performed, Managed, Defined, Quantitatively Managed, Optimizing";
 choices[47][1] = "Performed, Optimizing, Managed, Defined, Quantitatively Managed";
 choices[47][2] = "Performed, Defined, Managed, Quantitatively Managed, Optimizing";
 choices[47][3] = "Performed, Defined, Managed, Quantitatively Managed, Optimizing";
 answers[47] = choices[47][0];
 units[47] = "87";
 comments[47] = "Id Pregunta: 4444. NULL";


//  Id pregunta: 4475 AÃ±o de creación de pregunta: 2007-01-01
 questions[48]= "49)  &iquest;Cu&aacute;les de los siguientes no ser&iacute;an objetivos de la ingenier&iacute;a inversa?";
 choices[48]= new Array();
 choices[48][0] = "Incrementar la comprensi&oacute;n global del sistema para el mantenimiento o nuevo desarrollo.";
 choices[48][1] = "Reducir la complejidad del sistema y generar vistas alternativas.";
 choices[48][2] = "Disminuci&oacute;n en los tiempos del ciclo de vida.";
 choices[48][3] = "Recuperar informaci&oacute;n perdida y detectar efectos laterales.";
 answers[48] = choices[48][2];
 units[48] = "91";
 comments[48] = "Id Pregunta: 4475. Castilla la Mancha 06";


//  Id pregunta: 4476 AÃ±o de creación de pregunta: 2007-01-01
 questions[49]= "50)  Dentro de las m&eacute;tricas de software basadas en el texto del c&oacute;digo, &iquest;cuales son las cuatro cantidades b&aacute;sicas?";
 choices[49]= new Array();
 choices[49][0] = "El numero de tipos de operandos (datos, variables, etc.), el numero de ocurrencias de los mismos, el numero de tipos de operadores (instrucciones, funciones, etc.) y el numero de ocurrencias de los mismos.";
 choices[49][1] = "El control intramodular, el grafo de control, Ia arquitectura de m&oacute;dulos y los diagramas de estructuras.";
 choices[49][2] = "El n&uacute;mero de l&iacute;neas de c&oacute;digo, el n&uacute;mero de sentencias o instrucciones completas, el n&uacute;mero de variables, el n&uacute;mero de operaciones aritm&eacute;ticas.";
 choices[49][3] = "El n&uacute;mero de flujos que terminan en un determinado modulo, el numero de estructuras de datos de las cuales el modulo extrae informaci&oacute;n, el numero de flujos que salen de un determinado modulo y el numero de estructuras de datos que actualiza el modulo.";
 answers[49] = choices[49][0];
 units[49] = "88";
 comments[49] = "Id Pregunta: 4476. NULL";


//  Id pregunta: 4695 AÃ±o de creación de pregunta: 2007-01-01
 questions[50]= "51)  Indicar lo que no contribuye a que la estimaci&oacute;n del esfuerzo de desarrollo sea tan dif&iacute;cil de realizar.";
 choices[50]= new Array();
 choices[50][0] = "El hecho de que cada organizaci&oacute;n tiene sus propios recursos, procedimientos e historia, y es necesarioajustar los procesos de estimaci&oacute;n a esos par&aacute;metros &uacute;nicos.";
 choices[50][1] = "La rapidez con la que cambian las tecnolog&iacute;as de la informaci&oacute;n y las metodolog&iacute;as del desarrollo.";
 choices[50][2] = "La tendencia de los desarrolladores hacia la sobreestimaci&oacute;n";
 choices[50][3] = "El ignorar los aspectos no lineales del desarrollo del software (como son la coordinaci&oacute;n y la gesti&oacute;n).";
 answers[50] = choices[50][2];
 units[50] = "89";
 comments[50] = "Id Pregunta: 4695. Examen 2006 JCYL";


//  Id pregunta: 4720 AÃ±o de creación de pregunta: 2007-01-01
 questions[51]= "52)  Los principales factores de calidad seg&uacute;n Bertrand Meyer son:";
 choices[51]= new Array();
 choices[51][0] = "Eficiencia y fiabilidad";
 choices[51][1] = "Fiabilidad y modularidad";
 choices[51][2] = "Fiabilidad y extensibilidad";
 choices[51][3] = "Correcci&oacute;n y verificabilidad";
 answers[51] = choices[51][1];
 units[51] = "88";
 comments[51] = "Id Pregunta: 4720. Examen 2006 JCYL";


//  Id pregunta: 4833 AÃ±o de creación de pregunta: 2007-01-01
 questions[52]= "53)  De acuerdo al modelo EFQM (European Foundation for Quality Management) de Excelencia, el subcriterio denominado &quot;Gesti&oacute;n de la Tecnolog&iacute;a&quot; pertenece al criterio:";
 choices[52]= new Array();
 choices[52][0] = "Alianzas y Recursos";
 choices[52][1] = "Pol&iacute;tica y Estrategia";
 choices[52][2] = "Procesos";
 choices[52][3] = "Resultados Clave";
 answers[52] = choices[52][0];
 units[52] = "92";
 comments[52] = "Id Pregunta: 4833. NULL";


//  Id pregunta: 4876 AÃ±o de creación de pregunta: 2007-01-01
 questions[53]= "54)  En el modelo de procesos de Reingenier&iacute;a del Software propuesto por Pressman, la actividad de modificaci&oacute;n del c&oacute;digo fuente de un m&oacute;dulo con la finalidad de adecuarlo para futuros cambios, recibe la denominaci&oacute;n de:";
 choices[53]= new Array();
 choices[53][0] = "Ingenier&iacute;a inversa de procesos.";
 choices[53][1] = "Reestructuraci&oacute;n del software.";
 choices[53][2] = "Ingenier&iacute;a de la integraci&oacute;n de m&oacute;dulos.";
 choices[53][3] = "Ingenier&iacute;a avanzada.";
 answers[53] = choices[53][1];
 units[53] = "91";
 comments[53] = "Id Pregunta: 4876. examen TIC 2006";


//  Id pregunta: 4882 AÃ±o de creación de pregunta: 2007-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l de los siguientes par&aacute;metros NO forma parte de la ecuaci&oacute;n del software de Putnam para la estimaci&oacute;n delesfuerzo de un proyecto software?";
 choices[54]= new Array();
 choices[54][0] = "Casos de uso";
 choices[54][1] = "L&iacute;neas de c&oacute;digo";
 choices[54][2] = "Duraci&oacute;n del proyecto";
 choices[54][3] = "Par&aacute;metro de productividad";
 answers[54] = choices[54][0];
 units[54] = "89";
 comments[54] = "Id Pregunta: 4882. NULL";


//  Id pregunta: 5208 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  En el modelo de calidad del software de McCall, cu&aacute;l de los siguientes es un factor de explotaci&oacute;n u operaci&oacute;n:";
 choices[55]= new Array();
 choices[55][0] = "Mantenibilidad";
 choices[55][1] = "Flexibilidad";
 choices[55][2] = "Usabilidad";
 choices[55][3] = "Reusabilidad";
 answers[55] = choices[55][2];
 units[55] = "88";
 comments[55] = "Id Pregunta: 5208. NULL";


//  Id pregunta: 5210 AÃ±o de creación de pregunta: 2003-01-01
 questions[56]= "57)  En el modelo EFQM:";
 choices[56]= new Array();
 choices[56][0] = "El subcriterio 6A tiene un peso del 25% del total de los puntos del criterio 6.";
 choices[56][1] = "El subcriterio 6B tiene un peso del 25% del total de los puntos del criterio 6.";
 choices[56][2] = "El subcriterio 7A tiene un peso del 25% del total de los puntos del criterio 6.";
 choices[56][3] = "El subcriterio 7B tiene un peso del 75% del total de los puntos del criterio 6";
 answers[56] = choices[56][1];
 units[56] = "92";
 comments[56] = "Id Pregunta: 5210. NULL";


//  Id pregunta: 5247 AÃ±o de creación de pregunta: 2003-01-01
 questions[57]= "58)  Indicar entre las siguientes, cu&aacute;l no se ajusta a definici&oacute;n de calidad del software";
 choices[57]= new Array();
 choices[57][0] = "Conformidad a los requisitos funcionales y prestaciones establecidas, a las normas de desarrollo expl&iacute;citamente documentadas y a las caracter&iacute;sticas impl&iacute;citas que se esperan de todo software desarrollado profesionalmente";
 choices[57][1] = "Creaci&oacute;n de productos software que tanto eficaz como eficientemente cumplan las expectativas del usuario";
 choices[57][2] = "La ausencia de errores o defectos, siendo &eacute;stos las desviaciones respecto al comportamiento esperado";
 choices[57][3] = "Todas las anteriores son definiciones de calidad del software";
 answers[57] = choices[57][3];
 units[57] = "87";
 comments[57] = "Id Pregunta: 5247. NULL";


//  Id pregunta: 5259 AÃ±o de creación de pregunta: 2003-01-01
 questions[58]= "59)  La m&eacute;trica BANG:";
 choices[58]= new Array();
 choices[58][0] = "Es una m&eacute;trica de producto propuesta por De Marco, como indicador de funcionalidad entregada al usuario";
 choices[58][1] = "La medici&oacute;n se realiza sobre una especificaci&oacute;n de requisitos documentada mediante an&aacute;lisis estructurado y DFD";
 choices[58][2] = "Para formular esta m&eacute;trica se analizan las m&eacute;tricas primitivas, basadas en los elementos del DFD, del diccionario de datos y del modelo de datos";
 choices[58][3] = "Todas son correctas.";
 answers[58] = choices[58][3];
 units[58] = "88";
 comments[58] = "Id Pregunta: 5259. NULL";


//  Id pregunta: 5460 AÃ±o de creación de pregunta: 2003-01-01
 questions[59]= "60)  El sello de oro del modelo EFQM se obtiene a partir de una evaluaci&oacute;n de:";
 choices[59]= new Array();
 choices[59][0] = "400 puntos sobre 1000";
 choices[59][1] = "500 puntos sobre 1000";
 choices[59][2] = "700 puntos sobre 1000";
 choices[59][3] = "900 puntos sobre 1000";
 answers[59] = choices[59][1];
 units[59] = "88";
 comments[59] = "Id Pregunta: 5460. Castilla y Le&oacute;n";


//  Id pregunta: 5819 AÃ±o de creación de pregunta: 2009-01-01
 questions[60]= "61)  En la t&eacute;cnica de estimaci&oacute;n de puntos funci&oacute;n, la complejidad de los procesos elementales transaccionales no se determina utilizando el n&uacute;mero de:";
 choices[60]= new Array();
 choices[60][0] = "DET (Data Element Type)";
 choices[60][1] = "RET (Record Element Type)";
 choices[60][2] = "FTR (File Type Referenced)";
 choices[60][3] = "Todos los anteriores se utilizan";
 answers[60] = choices[60][1];
 units[60] = "89";
 comments[60] = "Id Pregunta: 5819. NULL";


//  Id pregunta: 5824 AÃ±o de creación de pregunta: 2009-01-01
 questions[61]= "62)  Indique cu&aacute;l de los siguientes criterios NO es correcto de acuerdo con el Modelo EFQM de Excelencia";
 choices[61]= new Array();
 choices[61][0] = "Colaboradores y recursos";
 choices[61][1] = "Resultados clave";
 choices[61][2] = "Resultados en la sociedad";
 choices[61][3] = "Viabilidad econ&oacute;mica";
 answers[61] = choices[61][3];
 units[61] = "92";
 comments[61] = "Id Pregunta: 5824. MAP 2008 A1";


//  Id pregunta: 5839 AÃ±o de creación de pregunta: 2009-01-01
 questions[62]= "63)  &iquest;Cu&aacute;l de las siguientes afirmaciones es FALSA, en relaci&oacute;n con la implantaci&oacute;n del modelo EFQM en una organizaci&oacute;n de las Administraciones P&uacute;blicas?";
 choices[62]= new Array();
 choices[62][0] = "Se utiliza, en general, para la auto evaluaci&oacute;n de la organizaci&oacute;n y la puesta en marcha de planes de mejora";
 choices[62][1] = "Es una norma est&aacute;ndar desarrollada por la Comisi&oacute;n Europea";
 choices[62][2] = "Se compone de nueve criterios reunidos en dos grandes grupos: los criterios Agentes Facilitadores y los criterios Resultados";
 choices[62][3] = "La l&oacute;gica REDER se encuentra en el centro del modelo";
 answers[62] = choices[62][1];
 units[62] = "92";
 comments[62] = "Id Pregunta: 5839. MAP 2008 A1";


//  Id pregunta: 5847 AÃ±o de creación de pregunta: 2009-01-01
 questions[63]= "64)  En la t&eacute;cnica de estimaci&oacute;n de puntos funci&oacute;n, &iquest;cu&aacute;les de los siguientes tipos de procesos elementales se tienen en cuenta?";
 choices[63]= new Array();
 choices[63][0] = "Procesos elementales de datos";
 choices[63][1] = "Procesos elementales de informaci&oacute;n";
 choices[63][2] = "Procesos elementales transaccionales";
 choices[63][3] = "La A y la B son ciertas";
 answers[63] = choices[63][3];
 units[63] = "89";
 comments[63] = "Id Pregunta: 5847. NULL";


//  Id pregunta: 5850 AÃ±o de creación de pregunta: 2009-01-01
 questions[64]= "65)  En el modelo Early Design de COCOMO II, el valor PM nominal se ajusta utilizando";
 choices[64]= new Array();
 choices[64][0] = "5 factores de escala";
 choices[64][1] = "7 factores de coste";
 choices[64][2] = "17 factores de coste";
 choices[64][3] = "Ninguna de las anteriores";
 answers[64] = choices[64][1];
 units[64] = "89";
 comments[64] = "Id Pregunta: 5850. NULL";


//  Id pregunta: 6055 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  Seg&uacute;n el RD 951/2005 de 29 de julio, el nuevo marco general para la mejora de la calidad en la AGE incluye entre sus programas:";
 choices[65]= new Array();
 choices[65][0] = "An&aacute;lisis de la demanda y evaluaci&oacute;n de la satisfacci&oacute;n de los proveedores de los servicios p&uacute;blicos.";
 choices[65][1] = "Observatorio de la calidad de los servicios p&uacute;blicos.";
 choices[65][2] = "Quejas y reclamaciones.";
 choices[65][3] = "Evoluci&oacute;n de la calidad de las organizaciones.";
 answers[65] = choices[65][1];
 units[65] = "87";
 comments[65] = "Id Pregunta: 6055. TIC A 2009";


//  Id pregunta: 6092 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  En relaci&oacute;n con la gesti&oacute;n de la calidad, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[66]= new Array();
 choices[66][0] = "Actualmente existen 3 grandes modelos de calidad total: Deming, Malcom Baldrige y EFQM, de amplia aplicaci&oacute;n en Estados Unidos, Jap&oacute;n y Europa respectivamente.";
 choices[66][1] = "El modelo EFQM consta de 9 criterios, de los cuales 5 son agentes y 4 son resultados.";
 choices[66][2] = "Los agentes del modelo EFQM son los siguientes: liderazgo, personas, procesos, pol&iacute;tica y alianzas.";
 choices[66][3] = "Los agentes del modelo EFQM son los siguientes: liderazgo, personas, procesos, estrategia y recursos.";
 answers[66] = choices[66][1];
 units[66] = "92";
 comments[66] = "Id Pregunta: 6092. TIC A 2009";


//  Id pregunta: 6212 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  Se&ntilde;ale la sentencia correcta:";
 choices[67]= new Array();
 choices[67][0] = "La complejidad ciclom&aacute;tica es una m&eacute;trica del software que proporciona una medici&oacute;n cualitativa de la complejidad l&oacute;gica de un programa";
 choices[67][1] = "Si se usa la complejidad ciclom&aacute;tica en el contexto del m&eacute;todo de prueba del camino b&aacute;sico, el valor calculado como complejidad ciclom&aacute;tica define el n&uacute;mero de caminos dependientes del conjunto b&aacute;sico de un programa";
 choices[67][2] = "En las pruebas del camino b&aacute;sico, los casos de prueba obtenidos del conjunto b&aacute;sico garantizan que durante la prueba se ejecuta una sola vez cada sentencia del programa";
 choices[67][3] = "Dentro de la prueba del camino b&aacute;sico, un camino independiente est&aacute; constituido por lo menos por una arista que no haya sido recorrida anteriormente a la definici&oacute;n del camino";
 answers[67] = choices[67][3];
 units[67] = "88";
 comments[67] = "Id Pregunta: 6212. TICB-2009, bloque desarrollo";


//  Id pregunta: 6467 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)  &iquest;En que t&eacute;cnica  de pruebas del software se utiliza la complejidad ciclom&aacute;tica?";
 choices[68]= new Array();
 choices[68][0] = "Prueba de caja negra";
 choices[68][1] = "Prueba del camino b&aacute;sico";
 choices[68][2] = "Prueba de la partici&oacute;n equivalente";
 choices[68][3] = "Ninguna de las anteriores";
 answers[68] = choices[68][1];
 units[68] = "88";
 comments[68] = "Id Pregunta: 6467. Castilla La Mancha 2009";


//  Id pregunta: 6493 AÃ±o de creación de pregunta: 2010-01-01
 questions[69]= "70)  El Coste de Calidad incluye todos los costes acarreados en las actividades relacionadas en la obtenci&oacute;n de la calidad. Los Costes de Calidad se pueden dividir en 3 grupos, que son:";
 choices[69]= new Array();
 choices[69][0] = "Costes asociados con la planificaci&oacute;n, la formaci&oacute;n y las pruebas";
 choices[69][1] = "Costes asociados con la prevenci&oacute;n, la evaluaci&oacute;n y los fallos";
 choices[69][2] = "Costes asociados con la inspecci&oacute;n, la reparaci&oacute;n y el mantenimiento";
 choices[69][3] = "Costes asociados con el an&aacute;lisis, la revisi&oacute;n y las devoluciones de productos";
 answers[69] = choices[69][1];
 units[69] = "92";
 comments[69] = "Id Pregunta: 6493. Castilla La Mancha 2009";


//  Id pregunta: 6532 AÃ±o de creación de pregunta: 2010-01-01
 questions[70]= "71)  El marco general para la mejora de la calidad de la AGE se establece en:";
 choices[70]= new Array();
 choices[70][0] = "RD 951/2003";
 choices[70][1] = "RD 952/2003";
 choices[70][2] = "RD 951/2005";
 choices[70][3] = "RD 951/2006";
 answers[70] = choices[70][2];
 units[70] = "87";
 comments[70] = "Id Pregunta: 6532. NULL";


//  Id pregunta: 6536 AÃ±o de creación de pregunta: 2010-01-01
 questions[71]= "72)  La gu&iacute;a de servicios ISO 9004 sigue un enfoque basado en procesos, como";
 choices[71]= new Array();
 choices[71][0] = "Responsabilidad de la direcci&oacute;n";
 choices[71][1] = "Realizaci&oacute;n del producto";
 choices[71][2] = "Medici&oacute;n, an&aacute;lisis y mejora";
 choices[71][3] = "Todas las respuestas anteriores son correctas";
 answers[71] = choices[71][3];
 units[71] = "92";
 comments[71] = "Id Pregunta: 6536. NULL";


//  Id pregunta: 6637 AÃ±o de creación de pregunta: 2010-01-01
 questions[72]= "73)  En el modelo COCOMO un proyecto semiacoplado hace referencia a:";
 choices[72]= new Array();
 choices[72][0] = "Aquel en el que el esfuerzo y el coste del proyecto se calcula en funci&oacute;n de las LOC y adem&aacute;s a&ntilde;ade una evaluaci&oacute;n subjetiva";
 choices[72][1] = "Proyectos peque&ntilde;os y sencillos con un equipo de trabajo estable, con buena experiencia y que cuenten con unos requerimientos poco r&iacute;gidos";
 choices[72][2] = "Proyectos de complejidad media, equipos con distintos niveles de experiencia y dentro de un software con terminales y bases de datos";
 choices[72][3] = "Proyectos que deban desarrollarse para ser acoplados en un hardware y software estricto y con restricciones operativas";
 answers[72] = choices[72][2];
 units[72] = "88";
 comments[72] = "Id Pregunta: 6637. NULL";


//  Id pregunta: 6644 AÃ±o de creación de pregunta: 2010-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l de las siguientes afirmaciones NO es cierta en la t&eacute;cnica DELPHI?";
 choices[73]= new Array();
 choices[73][0] = "Intervienen distintos estimadores";
 choices[73][1] = "Dan su estimaci&oacute;n en una reuni&oacute;n conjunta";
 choices[73][2] = "Es un proceso repetitivo";
 choices[73][3] = "Debe existir un coordinador";
 answers[73] = choices[73][1];
 units[73] = "89";
 comments[73] = "Id Pregunta: 6644. NULL";


//  Id pregunta: 8194 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  seg&uacute;n el CMMI v1.2 (Capability Maturity Model Integration, en espa&ntilde;ol Modelo Integrado de Capacidad y Madurez), una organizaci&oacute;n en la que en la que los procesos est&aacute;n definidos y son gestionados cuantitativamente, y en la que se establecen m&eacute;tricas de calidad para la gesti&oacute;n y rendimiento de dichos procesos, se encuentra en el nivel de capacidad:";
 choices[74]= new Array();
 choices[74][0] = "Nivel 1. ";
 choices[74][1] = "Nivel 2. ";
 choices[74][2] = "Nivel 3. ";
 choices[74][3] = "Nivel 4. ";
 answers[74] = choices[74][3];
 units[74] = "87";
 comments[74] = "Id Pregunta: 8194. Examen TIC A1 2010";


//  Id pregunta: 8277 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  Seg&uacute;n el RD 951/2005 de 29 de julio, el marco general para la mejora de la calidad en la AGE, NO incluye entre sus programas:";
 choices[75]= new Array();
 choices[75][0] = "An&aacute;lisis de la demanda y evaluaci&oacute;n de la satisfacci&oacute;n de los usuarios.";
 choices[75][1] = "Reconocimiento (certificaci&oacute;n de organizaciones y premios).";
 choices[75][2] = "Observatorio de la calidad de los servicios p&uacute;blicos.";
 choices[75][3] = "Quejas y reclamaciones.";
 answers[75] = choices[75][3];
 units[75] = "87";
 comments[75] = "Id Pregunta: 8277. Examen TIC A1 2010";


//  Id pregunta: 8356 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  El nivel 5 del modelo de Capacidad y Madurez (CMMI), nivel optimizado, tiene como objetivo:";
 choices[76]= new Array();
 choices[76][0] = "Gestionar cuantitativamente los procesos para lograr los objetivos de calidad y ejecuci&oacute;n del proceso establecido por el proyecto.";
 choices[76][1] = "El entendimiento cuantitativo de los procesos de la organizaci&oacute;n.";
 choices[76][2] = "Mejorar la calidad de los procesos de la organizaci&oacute;n, en base a un entendimiento de las causas comunes de variaci&oacute;n.";
 choices[76][3] = "Proporcionar datos de la ejecuci&oacute;n de procesos.";
 answers[76] = choices[76][2];
 units[76] = "87";
 comments[76] = "Id Pregunta: 8356. Examen TIC A2 2010";


//  Id pregunta: 8818 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  &iquest;Para cu&aacute;l de los siguientes supuestos no vale la calidad de software?";
 choices[77]= new Array();
 choices[77][0] = "Para dar confianza";
 choices[77][1] = "Para asegurar que el software funciona";
 choices[77][2] = "Para evaluar el proceso de desarrollo de software";
 choices[77][3] = "Para hacer los resultados del proceso m&aacute;s predecibles";
 answers[77] = choices[77][3];
 units[77] = "87, 92";
 comments[77] = "Id Pregunta: 8818. Examen UPM A2 2011";


//  Id pregunta: 8989 AÃ±o de creación de pregunta: 2011-01-01
 questions[78]= "79)  Se&ntilde;ale la respuesta falsa respecto del Plan General de Garant&iacute;a de Calidad promovido por CSAE";
 choices[78]= new Array();
 choices[78][0] = "Es un documento impreso";
 choices[78][1] = "Consta de cuatro fasc&iacute;culos";
 choices[78][2] = "Orientada a cualquier ambito de las AAPP";
 choices[78][3] = "Requiere autorizaci&oacute;n para su empleo";
 answers[78] = choices[78][3];
 units[78] = "87";
 comments[78] = "Id Pregunta: 8989. NULL";


//  Id pregunta: 9339 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  &iquest;Cu&aacute;l de los siguientes no es un modelo de COCOMO II?";
 choices[79]= new Array();
 choices[79][0] = "Dise&ntilde;o Arquitectura";
 choices[79][1] = "Dise&ntilde;o Preliminar";
 choices[79][2] = "Composici&oacute;n de la Aplicaci&oacute;n";
 choices[79][3] = "Post-Arquitectura";
 answers[79] = choices[79][0];
 units[79] = "88";
 comments[79] = "Id Pregunta: 9339. NULL";


//  Id pregunta: 9341 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  &iquest; Cu&aacute;l de los siguientes no es un nivel de madurez de CMMI ?";
 choices[80]= new Array();
 choices[80][0] = "Definido";
 choices[80][1] = "Gestionado";
 choices[80][2] = "Gestionado de forma cuantitativa";
 choices[80][3] = "Repetible";
 answers[80] = choices[80][3];
 units[80] = "87";
 comments[80] = "Id Pregunta: 9341. NULL";


//  Id pregunta: 9342 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  &iquest;Qu&eacute; afirmaci&oacute;n es falsa sobre Garant&iacute;a de Calidad?";
 choices[81]= new Array();
 choices[81][0] = "Est&aacute; delineada en un documento de estructura.";
 choices[81][1] = "El objetivo es asegurarle al cliente la calidad de un producto.";
 choices[81][2] = "La estructura se presenta en un manual de garant&iacute;a de calidad";
 choices[81][3] = "La garant&iacute;a de calidad no se extiende a problemas de seguridad";
 answers[81] = choices[81][3];
 units[81] = "87";
 comments[81] = "Id Pregunta: 9342. NULL";


//  Id pregunta: 9343 AÃ±o de creación de pregunta: 2013-01-01
 questions[82]= "83)  &iquest; Cu&aacute;ntos principios fundamentales define la ISO 9004:2000 ?";
 choices[82]= new Array();
 choices[82][0] = "6";
 choices[82][1] = "7";
 choices[82][2] = "8";
 choices[82][3] = "Ninguno";
 answers[82] = choices[82][2];
 units[82] = "87";
 comments[82] = "Id Pregunta: 9343. NULL";


//  Id pregunta: 9412 AÃ±o de creación de pregunta: 2013-01-01
 questions[83]= "84)  En general, no se entiende por m&eacute;trica software";
 choices[83]= new Array();
 choices[83][0] = "Una asignaci&oacute;n de valor a un atributo de una entidad propia del software, ya sea un producto o un proceso";
 choices[83][1] = "Una caracter&iacute;stica o atributo propio del software o del proceso de construcci&oacute;n del software";
 choices[83][2] = "Una medida cuantitativa del grado en el que un sistema, un componente o un proceso posee un determinado atributo";
 choices[83][3] = "Una medida o conjunto de medidas destinadas a conocer o estimar el tama&ntilde;o u otra caracter&iacute;stica de un software o un sistema de informaci&oacute;n";
 answers[83] = choices[83][1];
 units[83] = "89";
 comments[83] = "Id Pregunta: 9412. NULL";


//  Id pregunta: 9415 AÃ±o de creación de pregunta: 2013-01-01
 questions[84]= "85)  Cu&aacute;l de las siguientes no es una m&eacute;trica de l&iacute;neas de c&oacute;digo";
 choices[84]= new Array();
 choices[84][0] = "LOC";
 choices[84][1] = "DSI";
 choices[84][2] = "NSLOC";
 choices[84][3] = "LDSI";
 answers[84] = choices[84][3];
 units[84] = "89";
 comments[84] = "Id Pregunta: 9415. NULL";


//  Id pregunta: 9649 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  FAN-IN es una medida de:";
 choices[85]= new Array();
 choices[85][0] = "Complejidad";
 choices[85][1] = "Reutilizaci&oacute;n";
 choices[85][2] = "Mantenibilidad";
 choices[85][3] = "Ninguna de las anteriores";
 answers[85] = choices[85][1];
 units[85] = "89";
 comments[85] = "Id Pregunta: 9649. N&uacute;mero de clases que hacen uso de la clase que estamos estudiando.";


//  Id pregunta: 9657 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  &iquest;Qu&eacute; lenguaje de programaci&oacute;n tiene una mayor correspondencia entre L&iacute;neas de C&oacute;digo (LDC) y Puntos de Funci&oacute;n?";
 choices[86]= new Array();
 choices[86][0] = "C";
 choices[86][1] = "Ensamblador";
 choices[86][2] = "Cobol";
 choices[86][3] = "Pascal";
 answers[86] = choices[86][1];
 units[86] = "89";
 comments[86] = "Id Pregunta: 9657. Ensamblador 320 LDC/PF, C 150 LDC/PF, Cobol 106 LDC/PF, Pascal 91 LDC/PF. Fuente: ASTIC";


//  Id pregunta: 9659 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  &iquest;Qu&eacute; modelo de evaluaci&oacute;n de procesos SW es certificable?";
 choices[87]= new Array();
 choices[87][0] = "CMM";
 choices[87][1] = "CMMI Escalonado";
 choices[87][2] = "CMMI Continuo";
 choices[87][3] = "Ninguno de los anteriores";
 answers[87] = choices[87][0];
 units[87] = "87";
 comments[87] = "Id Pregunta: 9659. NULL";


//  Id pregunta: 9746 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  COCOMO II est&aacute; formado por tres modelos o submodelos. &iquest;Cu&aacute;l de los siguientes NO es un modelo de COCOMO II?";
 choices[88]= new Array();
 choices[88][0] = "Modelo de Composici&oacute;n de Aplicaci&oacute;n.";
 choices[88][1] = "Modelo de Reutilizaci&oacute;n de Objetos.";
 choices[88][2] = "Modelo de Dise&ntilde;o Preliminar.";
 choices[88][3] = "Modelo Post-Arquitectura.";
 answers[88] = choices[88][1];
 units[88] = "88";
 comments[88] = "Id Pregunta: 9746. Examen TIC-A2 2013-Libre";


//  Id pregunta: 10644 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  &iquest;Cu&aacute;les son los dos modelos de autoevaluaci&oacute;n seg&uacute;n ISO 9004?";
 choices[89]= new Array();
 choices[89][0] = "El de los Criterios Operativos y el de los Criterios Aumentados.";
 choices[89][1] = "El de Estimulaci&oacute;n y el de Mantenimiento.";
 choices[89][2] = "El de Aproximaci&oacute;n Formal y el de Aproximaci&oacute;n Reactiva.";
 choices[89][3] = "El de los Elementos Clave y el de los Elementos Detallados";
 answers[89] = choices[89][3];
 units[89] = "92";
 comments[89] = "Id Pregunta: 10644. ";


//  Id pregunta: 10858 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  COCOMO II para estimaci&oacute;n de proyectos de software est&aacute; compuesto de 3 modelos, que son:";
 choices[90]= new Array();
 choices[90][0] = "Modelo de An&aacute;lisis de la Aplicaci&oacute;n, Modelo de Construcci&oacute;n Preliminar y Modelo Post-Arquitectura.";
 choices[90][1] = "Modelo de Planificaci&oacute;n, Modelo de Construcci&oacute;n y Modelo de Arquitectura.";
 choices[90][2] = "Modelo de Composici&oacute;n de la Estimaci&oacute;n, Modelo de Construcci&oacute;n y Modelo de Arquitectura Preliminar.";
 choices[90][3] = "Modelo de Composici&oacute;n de Aplicaci&oacute;n, Modelo de Dise&ntilde;o Preliminar y Modelo Post-Arquitectura.";
 answers[90] = choices[90][3];
 units[90] = "89";
 comments[90] = "Id Pregunta: 10858. Examen GSI 2014";


//  Id pregunta: 10860 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Las normas ISO/IEC 2501n pertenecientes a la familia de normas ISO/IEC 25000:";
 choices[91]= new Array();
 choices[91][0] = "Incluyen un modelo de referencia de la medici&oacute;n de la calidad del producto, definiciones de medidas de calidad y gu&iacute;as para su aplicaci&oacute;n.";
 choices[91][1] = "Presentan modelos de calidad detallados incluyendo caracter&iacute;sticas para calidad interna, externa y en uso del producto software.";
 choices[91][2] = "Definen todos los modelos, t&eacute;rminos y definiciones comunes referenciados por todas las otras normas de la familia 25000.";
 choices[91][3] = "Ayudan a especificar requisitos de calidad que pueden ser utilizados en el proceso de elicitaci&oacute;n.";
 answers[91] = choices[91][1];
 units[91] = "88";
 comments[91] = "Id Pregunta: 10860. Examen GSI 2014";


//  Id pregunta: 11164 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;A qu&eacute; se refieren las siglas EFQM?";
 choices[92]= new Array();
 choices[92][0] = "European Foundation of Quality Metrics";
 choices[92][1] = "European Foundation of Quality Maintenance";
 choices[92][2] = "European Foundation for Qualitiy Management";
 choices[92][3] = "Ninguna de las anteriores";
 answers[92] = choices[92][2];
 units[92] = "92";
 comments[92] = "Id Pregunta: 11164. ";


//  Id pregunta: 11338 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Se&ntilde;ale el tipo de proyecto que no est&aacute; entre los contemplados por COCOMO";
 choices[93]= new Array();
 choices[93][0] = "Empotrado";
 choices[93][1] = "Org&aacute;nico";
 choices[93][2] = "Semiacoplado";
 choices[93][3] = "Semiempotrado";
 answers[93] = choices[93][3];
 units[93] = "89";
 comments[93] = "Id Pregunta: 11338. ";


//  Id pregunta: 11339 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Indique la falsa en relaci&oacute;n con la familia de normas ISO 9000:2000";
 choices[94]= new Array();
 choices[94][0] = "ISO 19011 no pertenece a esta familia de normas";
 choices[94][1] = "ISO 9004 establece la gu&iacute;a para la mejora continua";
 choices[94][2] = "ISO 9001 consta de ocho secciones";
 choices[94][3] = "ISO 9000 habla de fundamentos y vocabulario";
 answers[94] = choices[94][0];
 units[94] = "92";
 comments[94] = "Id Pregunta: 11339. ";


//  Id pregunta: 11355 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  En cuanto al uso de los Cost Driven Attributes (CDA) en COCOMO, seleccione la opci&oacute;n verdadera";
 choices[95]= new Array();
 choices[95][0] = "Para estimar el esfuerzo, se tiene en cuenta las l&iacute;neas de c&oacute;digo en miles de l&iacute;neas de c&oacute;digo (KLOC)";
 choices[95][1] = "Los Cost Driven Attributes (a, b, c y d) son los mismos para cada fase de construcci&oacute;n del software en el modelo avanzado.";
 choices[95][2] = "En el m&oacute;delo b&aacute;sico, se tiene en cuenta, adem&aacute;s del n&uacute;mero de l&iacute;neas, los Cost Driven Attributes (CDA) b&aacute;sicos";
 choices[95][3] = "Para estimar el esfuerzo, se utiliza a y b. Para estimar el tiempo se utliza c y d.";
 answers[95] = choices[95][3];
 units[95] = "89";
 comments[95] = "Id Pregunta: 11355. ";


//  Id pregunta: 11541 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  En relaci&oacute;n con las t&eacute;cnicas de planificaci&oacute;n de proyectos se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[96]= new Array();
 choices[96][0] = "Una diferencia entre PERT y CPM es que este &uacute;ltimo considera que los tiempos de las actividades se conocen en forma determin&iacute;stica y se pueden variar cambiando el nivel de recursos utilizados.";
 choices[96][1] = "PERT considera que cuando el n&uacute;mero de actividades de un proyecto es lo suficientemente elevado, la duraci&oacute;n del proyecto es una variable aleatoria que converge en una distribuci&oacute;n Normal.";
 choices[96][2] = "El diagrama de GANTT realiza la planificaci&oacute;n y la programaci&oacute;n al mismo tiempo.";
 choices[96][3] = "Son correctas todas las afirmaciones anteriores.";
 answers[96] = choices[96][3];
 units[96] = "89";
 comments[96] = "Id Pregunta: 11541. NULL";


//  Id pregunta: 11544 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Seg&uacute;n el modelo de McCall de calidad, &iquest;Cu&aacute;l de los siguientes factores NO hace referencia a la facilidad de conversi&oacute;n del software?";
 choices[97]= new Array();
 choices[97][0] = "Interoperabilidad";
 choices[97][1] = "Reusabilidad";
 choices[97][2] = "Flexibilidad";
 choices[97][3] = "Portabilidad";
 answers[97] = choices[97][2];
 units[97] = "88";
 comments[97] = "Id Pregunta: 11544. NULL";


//  Id pregunta: 11545 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Cu&aacute;l de los siguientes no es un modelo de calidad del Software?";
 choices[98]= new Array();
 choices[98][0] = "GCAL de SISDEL";
 choices[98][1] = "FURPS";
 choices[98][2] = "ISO 9126-1";
 choices[98][3] = "Todos los anteriores son modelos de calidad del Software.";
 answers[98] = choices[98][0];
 units[98] = "88";
 comments[98] = "Id Pregunta: 11545. NULL";


//  Id pregunta: 11640 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  El modelo de Putman para la estimaci&oacute;n del esfuerzo en el desarrollo de un sistema de informaci&oacute;n es un modelo:";
 choices[99]= new Array();
 choices[99][0] = "Compuesto";
 choices[99][1] = "Estad&iacute;stico";
 choices[99][2] = "Te&oacute;rico";
 choices[99][3] = "Hist&oacute;rico";
 answers[99] = choices[99][2];
 units[99] = "89";
 comments[99] = "Id Pregunta: 11640. ";


