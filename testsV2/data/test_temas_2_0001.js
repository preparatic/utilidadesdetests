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


//  Id pregunta: 2032 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  La prueba que recorre la secuencia t&iacute;pica de acciones del usuario es de:";
 choices[1]= new Array();
 choices[1][0] = "caja negra";
 choices[1][1] = "caja blanca";
 choices[1][2] = "caja roja";
 choices[1][3] = "Ninguna de las anteriores";
 answers[1] = choices[1][0];
 units[1] = "86,88";
 comments[1] = "Id Pregunta: 2032. Similar a examen TIC SS A 2003";


//  Id pregunta: 2038 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  En el Modelo de Excelencia de la EFQM, &iquest;Cu&aacute;l de los siguientes no es un criterio de calidad que act&uacute;e como agente facilitador del &eacute;xito?";
 choices[2]= new Array();
 choices[2][0] = "Liderazgo";
 choices[2][1] = "Pol&iacute;ticas y Estrategias";
 choices[2][2] = "Satisfacci&oacute;n del Personal";
 choices[2][3] = "Todos son agentes facilitadores";
 answers[2] = choices[2][2];
 units[2] = "92";
 comments[2] = "Id Pregunta: 2038. NULL";


//  Id pregunta: 2043 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  &iquest;Cu&aacute;ntos criterios y subcriterios de calidad considera el Modelo de Excelencia de la EFQM?";
 choices[3]= new Array();
 choices[3][0] = "Considera 9 criterios y 32 subcriterios";
 choices[3][1] = "Considera 11 criterios y 23 subcriterios, de forma an&aacute;loga a los factores y criterios de calidad del Modelo de McCall";
 choices[3][2] = "El modelo de la EFQM solo considera criterios de calidad, en concreto ocho criterios";
 choices[3][3] = "El modelo de la EFQM no habla de criterios y subcriterios, sino de factores de calidad y criterios de calidad, y considera 8 factores y 36 criterios";
 answers[3] = choices[3][0];
 units[3] = "92";
 comments[3] = "Id Pregunta: 2043. NULL";


//  Id pregunta: 2138 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;Cu&aacute;l de las siguientes expresiones est&aacute; de acuerdo con los actuales criterios de calidad del software de gesti&oacute;n?:";
 choices[4]= new Array();
 choices[4][0] = "La funci&oacute;n 'calidad' debe ser desempe&ntilde;ada por un equipo independiente de especialistas";
 choices[4][1] = "El coste de la calidad debe ser equilibrado con el coste de la 'no-calidad'";
 choices[4][2] = "La funci&oacute;n 'calidad' debe garantizar la producci&oacute;n de 'software cero-defectos'";
 choices[4][3] = "Todas las anteriores respuestas son correctas";
 answers[4] = choices[4][1];
 units[4] = "88";
 comments[4] = "Id Pregunta: 2138. NULL";


//  Id pregunta: 2152 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;Cu&aacute;l de los siguientes no es un elemento del modelo EFQM?";
 choices[5]= new Array();
 choices[5][0] = "Impacto en la sociedad";
 choices[5][1] = "Control del dise&ntilde;o";
 choices[5][2] = "Satisfacci&oacute;n del cliente";
 choices[5][3] = "Recursos";
 answers[5] = choices[5][1];
 units[5] = "92";
 comments[5] = "Id Pregunta: 2152. NULL";


//  Id pregunta: 2164 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Indicar la respuesta verdadera respecto a EFQM:";
 choices[6]= new Array();
 choices[6][0] = "El Modelo Europeo de Calidad se desarroll&oacute; en 1991 bajo la iniciativa de la European Foundation for QualityManagement (EFQM), formada en 1988 por un grupo de catorce importantes empresas europeas. En la actualidad la componen m&aacute;s de 400 miembros";
 choices[6][1] = "El modelo identific&oacute; una serie de elementos que ser&aacute;n la base para la Gesti&oacute;n de Calidad Total (TQM) dentro de las organizaciones y que se pueden agrupar en dos grandes bloques que podemos denominar: el C&oacute;mo y el Qu&eacute; o tambi&eacute;n los Agentes y los Resultados";
 choices[6][2] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son falsas";
 choices[6][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son verdaderas";
 answers[6] = choices[6][3];
 units[6] = "92";
 comments[6] = "Id Pregunta: 2164. NULL";


//  Id pregunta: 2172 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  La complejidad ciclom&aacute;tica tiene que ver con la t&eacute;cnica de:";
 choices[7]= new Array();
 choices[7][0] = "McCall";
 choices[7][1] = "McCabe";
 choices[7][2] = "Hasltead";
 choices[7][3] = "COCOMO";
 answers[7] = choices[7][1];
 units[7] = "88";
 comments[7] = "Id Pregunta: 2172. ";


//  Id pregunta: 2175 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  La definici&oacute;n: &ldquo;Es el proceso de analizar un sistema para identificar los componentes y las interrelaciones entre ellos, creando representaciones del sistema en otra forma distinta a la original o bien a un nivel superior de abstracci&oacute;n&rdquo;, corresponde a:";
 choices[8]= new Array();
 choices[8][0] = "Restructuraci&oacute;n (Restructuring).";
 choices[8][1] = "Ingenier&iacute;a Inversa (Reverse Engineering).";
 choices[8][2] = "Ingenier&iacute;a hacia adelante (Forward Engineering).";
 choices[8][3] = "Reingenier&iacute;a (Reengineering).";
 answers[8] = choices[8][1];
 units[8] = "91";
 comments[8] = "Id Pregunta: 2175. ";


//  Id pregunta: 2191 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Cu&aacute;les son los factores de la calidad del software desde el punto de vista de la revisi&oacute;n del software?:";
 choices[9]= new Array();
 choices[9][0] = "Mantenibilidad, verificabilidad y flexibilidad";
 choices[9][1] = "Correcci&oacute;n, fiabilidad y amigabilidad";
 choices[9][2] = "Usabilidad, seguridad y rendimiento";
 choices[9][3] = "Reusabilidad, estructuraci&oacute;n e interoperabilidad";
 answers[9] = choices[9][0];
 units[9] = "88";
 comments[9] = "Id Pregunta: 2191. ";


//  Id pregunta: 2199 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;En qu&eacute; consiste la teor&iacute;a del Modelo Compuesto aplicada a la implantaci&oacute;n de la Calidad propuesto por Lawler?";
 choices[10]= new Array();
 choices[10][0] = "El coste aumenta primero linealmente y luego exponencialmente";
 choices[10][1] = "En el primer tramo, el coste aumenta con la calidad del producto. En el segundo tramo, el coste es constante e independiente de la calidad.";
 choices[10][2] = "Se usa aritm&eacute;tica compuesta para su c&aacute;lculo, aunque la curva sale convexa siempre que se sigue este modelo.";
 choices[10][3] = "En el primer tramo, el coste disminuye con la calidad del producto. En el segundo tramo, el coste es constante e independiente de la calidad. En el tercer tramo el coste se incrementa con la calidad.";
 answers[10] = choices[10][3];
 units[10] = "88";
 comments[10] = "Id Pregunta: 2199. NULL";


//  Id pregunta: 2223 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  A la extensi&oacute;n por la cual el acceso a software o datos por personas no autorizadas puede ser controlado se llama:";
 choices[11]= new Array();
 choices[11][0] = "Correcci&oacute;n";
 choices[11][1] = "Fiabilidad";
 choices[11][2] = "Eficiencia";
 choices[11][3] = "Integridad";
 answers[11] = choices[11][3];
 units[11] = "88";
 comments[11] = "Id Pregunta: 2223. ";


//  Id pregunta: 2224 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Seg&uacute;n McCall, a la extensi&oacute;n por la cual un programa ejecuta la funci&oacute;n buscada con la precisi&oacute;n requerida se llama:";
 choices[12]= new Array();
 choices[12][0] = "Correcci&oacute;n";
 choices[12][1] = "Fiabilidad";
 choices[12][2] = "Eficiencia";
 choices[12][3] = "Integridad";
 answers[12] = choices[12][1];
 units[12] = "88";
 comments[12] = "Id Pregunta: 2224. ";


//  Id pregunta: 2233 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Al esfuerzo requerido para localizar y delimitar un error en un programa en explotaci&oacute;n se llama:";
 choices[13]= new Array();
 choices[13][0] = "Usabilidad";
 choices[13][1] = "Mantenibilidad";
 choices[13][2] = "Verificabilidad";
 choices[13][3] = "Flexibilidad";
 answers[13] = choices[13][1];
 units[13] = "88";
 comments[13] = "Id Pregunta: 2233. NULL";


//  Id pregunta: 2237 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  Benchmarking es un concepto que indica:";
 choices[14]= new Array();
 choices[14][0] = "Un mecanismo para determinar reducciones de recursos";
 choices[14][1] = "Un sin&oacute;nimo de auditor&iacute;a";
 choices[14][2] = "Un proceso sistem&aacute;tico y continuo para evaluar los productos, servicios y trabajos de las organizaciones que son reconocidas como representantes de las mejores pr&aacute;cticas, con el prop&oacute;sito de realizar mejoras organizacionales";
 choices[14][3] = "Un programa inform&aacute;tico que al instalarse tiene como misi&oacute;n la optimizaci&oacute;n de la eficiencia de los sistemas a los que afecte su configuraci&oacute;n, tanto a nivel de espacio de disco como a nivel de rendimiento";
 answers[14] = choices[14][2];
 units[14] = "92";
 comments[14] = "Id Pregunta: 2237. NULL";


//  Id pregunta: 2255 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  Dentro del control de calidad, &iquest;qu&eacute; se entiende por revisi&oacute;n por pares o &quot;peer review&quot;?";
 choices[15]= new Array();
 choices[15][0] = "Generar un conjunto de pruebas para examinar autom&aacute;ticamente el objeto que se acaba de desarrollar";
 choices[15][1] = "Analizar el objeto en tiempo de ejecuci&oacute;n";
 choices[15][2] = "Revisar del c&oacute;digo de un programador por otros programadores";
 choices[15][3] = "Elaborar un informe de resultados";
 answers[15] = choices[15][2];
 units[15] = "92";
 comments[15] = "Id Pregunta: 2255. NULL";


//  Id pregunta: 2257 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  Dentro del Plan General de Calidad para el desarrollo de aplicaciones inform&aacute;ticas se distinguen dos bloques tem&aacute;ticos, con un contenido diferente pero complementario, a saber:";
 choices[16]= new Array();
 choices[16][0] = "Bloque metodol&oacute;gico y Bloque procedimental";
 choices[16][1] = "Bloque metodol&oacute;gico y Bloque instrumental";
 choices[16][2] = "Bloque l&oacute;gico y Bloque procedimental";
 choices[16][3] = "Bloque l&oacute;gico y Bloque instrumental";
 answers[16] = choices[16][1];
 units[16] = "92";
 comments[16] = "Id Pregunta: 2257. NULL";


//  Id pregunta: 2279 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  El m&eacute;todo de los puntos de funci&oacute;n:";
 choices[17]= new Array();
 choices[17][0] = "Es dependiente del lenguaje de programaci&oacute;n que se use";
 choices[17][1] = "S&oacute;lo se aplica a proyectos en los que no se pueda usar COCOMO";
 choices[17][2] = "Se basa en el uso de una relaci&oacute;n emp&iacute;rica";
 choices[17][3] = "No es subjetivo, es muy objetivo";
 answers[17] = choices[17][2];
 units[17] = "89";
 comments[17] = "Id Pregunta: 2279. NULL";


//  Id pregunta: 2285 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  La m&eacute;trica puntos de funci&oacute;n se considera una m&eacute;trica de:";
 choices[18]= new Array();
 choices[18][0] = "Calidad";
 choices[18][1] = "Tiempo de desarrollo";
 choices[18][2] = "Tama&ntilde;o";
 choices[18][3] = "Resultados";
 answers[18] = choices[18][2];
 units[18] = "89";
 comments[18] = "Id Pregunta: 2285. Preparatic XVII";


//  Id pregunta: 2292 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  El modo empotrado de aplicar los modelos de COCOMO considera:";
 choices[19]= new Array();
 choices[19][0] = "Proyectos peque&ntilde;os";
 choices[19][1] = "Proyectos de complejidad media";
 choices[19][2] = "Proyectos de complejidad alta";
 choices[19][3] = "Proyectos que deben desarrollarse dentro de un hardware y software estricto y con restricciones operativas";
 answers[19] = choices[19][3];
 units[19] = "89";
 comments[19] = "Id Pregunta: 2292. NULL";


//  Id pregunta: 2301 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  El tiempo de programaci&oacute;n de un proyecto software depende principalmente de:";
 choices[20]= new Array();
 choices[20][0] = "Funcionalidad requerida";
 choices[20][1] = "Fiabilidad";
 choices[20][2] = "Tiempo de  respuesta";
 choices[20][3] = "Son ciertas todas las anteriores respuestas ";
 answers[20] = choices[20][3];
 units[20] = "89";
 comments[20] = "Id Pregunta: 2301. Preparatic XVII";


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


//  Id pregunta: 2332 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  En la t&eacute;cnica de medida de la complejidad de Halstead se mide la complejidad por:";
 choices[22]= new Array();
 choices[22][0] = "El n&uacute;mero de operadores diferentes";
 choices[22][1] = "El n&uacute;mero de operandos diferentes";
 choices[22][2] = "Por su volumen que es el logaritmo en base 2 del producto del numero de  los operadores diferentes por el n&uacute;mero de operandos diferentes";
 choices[22][3] = "Por su longitud que es una funci&oacute;n de los operandos diferentes y de los operadores diferentes y que es una buena aproximaci&oacute;n a la suma del n&uacute;mero total de operadores y del numero total de operandos";
 answers[22] = choices[22][3];
 units[22] = "88";
 comments[22] = "Id Pregunta: 2332. NULL";


//  Id pregunta: 2370 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Es cierto decir que la &quot;ingenier&iacute;a inversa&quot;:";
 choices[23]= new Array();
 choices[23][0] = "Crea un sistema distinto al original con el mismo nivel de abstracci&oacute;n.";
 choices[23][1] = "No se usa demasiado.";
 choices[23][2] = "Crea una representaci&oacute;n del sistema distinta a la original o con un grado de abstracci&oacute;n normalmente superior.";
 choices[23][3] = "El grado de abstracci&oacute;n que se obtiene es menor, pero eso hace que el proceso sea m&aacute;s din&aacute;mico.";
 answers[23] = choices[23][2];
 units[23] = "91";
 comments[23] = "Id Pregunta: 2370. ";


//  Id pregunta: 2373 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Es falso que dependiendo del proyecto a que se aplique COCOMO, podemos clasificar los sistemas como:";
 choices[24]= new Array();
 choices[24][0] = "Org&aacute;nico";
 choices[24][1] = "Semi-org&aacute;nico";
 choices[24][2] = "Semi-acoplado";
 choices[24][3] = "Empotrado";
 answers[24] = choices[24][1];
 units[24] = "89";
 comments[24] = "Id Pregunta: 2373. NULL";


//  Id pregunta: 2385 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Indicar cu&aacute;l no es un factor de calidad, seg&uacute;n McCall, desde un punto de vista de explotaci&oacute;n:";
 choices[25]= new Array();
 choices[25][0] = "Usabilidad";
 choices[25][1] = "Eficiencia";
 choices[25][2] = "Correcci&oacute;n";
 choices[25][3] = "Mantenibilidad";
 answers[25] = choices[25][3];
 units[25] = "88";
 comments[25] = "Id Pregunta: 2385. ";


//  Id pregunta: 2433 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  Indicar a qu&eacute; corresponde la siguiente definici&oacute;n propuesta por el IEEE dentro del &aacute;mbito de la reingenier&iacute;a e ingenier&iacute;a inversa: &quot;la transformaci&oacute;n de una forma de representaci&oacute;n de un sistema en otra distinta pero del mismo nivel de abstracci&oacute;n, sin modificar el comportamiento&quot;";
 choices[26]= new Array();
 choices[26][0] = "Ingenier&iacute;a inversa";
 choices[26][1] = "Reestructuraci&oacute;n";
 choices[26][2] = "Reingenier&iacute;a";
 choices[26][3] = "Ingenier&iacute;a hacia delante";
 answers[26] = choices[26][1];
 units[26] = "91";
 comments[26] = "Id Pregunta: 2433. NULL";


//  Id pregunta: 2468 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  No es un &quot;resultado&quot; del modelo EFQM:";
 choices[27]= new Array();
 choices[27][0] = "El impacto en la sociedad";
 choices[27][1] = "Satisfacci&oacute;n del Personal";
 choices[27][2] = "Resultados empresariales.";
 choices[27][3] = "El manual de calidad de la empresa";
 answers[27] = choices[27][3];
 units[27] = "92";
 comments[27] = "Id Pregunta: 2468. NULL";


//  Id pregunta: 2473 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  No es una de las formas de aplicar COCOMO:";
 choices[28]= new Array();
 choices[28][0] = "B&aacute;sico";
 choices[28][1] = "Avanzado";
 choices[28][2] = "Intermedio";
 choices[28][3] = "Asistido";
 answers[28] = choices[28][3];
 units[28] = "89";
 comments[28] = "Id Pregunta: 2473. NULL";


//  Id pregunta: 2489 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  Seg&uacute;n los estudios de calidad, &iquest;en qu&eacute; fase del desarrollo los errores son m&aacute;s costosos?:";
 choices[29]= new Array();
 choices[29][0] = "Especificaci&oacute;n";
 choices[29][1] = "Dise&ntilde;o  ";
 choices[29][2] = "Codificaci&oacute;n";
 choices[29][3] = "Otros";
 answers[29] = choices[29][0];
 units[29] = "87";
 comments[29] = "Id Pregunta: 2489. NULL";


//  Id pregunta: 2500 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  Si se usa la t&eacute;cnica McCabe se puede valorar:";
 choices[30]= new Array();
 choices[30][0] = "Las aristas de un grafo";
 choices[30][1] = "El n&uacute;mero de regiones cerradas de un grafo";
 choices[30][2] = "Los nodos desconectados de un grafo";
 choices[30][3] = "No tiene ninguna relaci&oacute;n con grafos";
 answers[30] = choices[30][1];
 units[30] = "88";
 comments[30] = "Id Pregunta: 2500. NULL";


//  Id pregunta: 2554 AÃ±o de creación de pregunta: 2004-01-01
 questions[31]= "32)  Se&ntilde;ale la afirmaci&oacute;n correcta entre las siguientes:";
 choices[31]= new Array();
 choices[31][0] = "M&aacute;s del 30% de los grandes proyectos inform&aacute;ticos alcanzan resultados satisfactorios";
 choices[31][1] = "Est&aacute;ndares como CMM, CMMI, SPICE y otros, son f&aacute;ciles de aplicar en la mayor&iacute;a de los proyectos inform&aacute;ticos";
 choices[31][2] = "Expertos de la OCDE vienen advirtiendo sobre las amenazas que para la implantaci&oacute;n de la administraci&oacute;n electronica suponen los reiterados fracasos de las administraciones en los grandes proyectos inform&aacute;ticos que vienen abordando.";
 choices[31][3] = "Los m&eacute;todos de programaci&oacute;n &aacute;giles han demostrado sobradamente su eficiencia para proyectos no triviales.";
 answers[31] = choices[31][2];
 units[31] = "87,88,92";
 comments[31] = "Id Pregunta: 2554. Pregunta Junta Andalucia - A";


//  Id pregunta: 2568 AÃ±o de creación de pregunta: 2004-01-01
 questions[32]= "33)  Al utilizar la t&eacute;cnica de estimaci&oacute;n Puntos Funci&oacute;n, se tienen en cuenta";
 choices[32]= new Array();
 choices[32][0] = "Entradas externas, ficheros l&oacute;gicos internos y salidas externas";
 choices[32][1] = "Ficheros de interfaz externos y consultas externas";
 choices[32][2] = "Entradas de aplicaciones, consulas y salidas de aplicaciones";
 choices[32][3] = "A y B son correctas";
 answers[32] = choices[32][3];
 units[32] = "89";
 comments[32] = "Id Pregunta: 2568. NULL";


//  Id pregunta: 2651 AÃ±o de creación de pregunta: 2003-01-01
 questions[33]= "34)  Indique cu&aacute;l no es un resultado del modelo EFQM";
 choices[33]= new Array();
 choices[33][0] = "Satisfacci&oacute;n del cliente";
 choices[33][1] = "Impacto en la sociedad";
 choices[33][2] = "Obtenci&oacute;n de la estrategia";
 choices[33][3] = "Satisfacci&oacute;n del personal";
 answers[33] = choices[33][2];
 units[33] = "92";
 comments[33] = "Id Pregunta: 2651. NULL";


//  Id pregunta: 2653 AÃ±o de creación de pregunta: 2003-01-01
 questions[34]= "35)  La versi&oacute;n cocomo II guarda alg&uacute;n tipo de compatibilidad con la versi&oacute;n anterior";
 choices[34]= new Array();
 choices[34][0] = "No, es radicalmente diferente pues las t&eacute;cnicas de desarrollo SW han cambiado drasticamente desde la primera versi&oacute;n";
 choices[34][1] = "S&iacute; se ha guardado la compatibilidad con la versi&oacute;n anterior recogiendo los cambios actuales en desarrollo SW, por ejemplo la reutilizaci&oacute;n y el desarrollo con componentes";
 choices[34][2] = "S&iacute;, y lo &uacute;nico diferentes es la inclusi&oacute;n de nuevas variables explicativas en el modelo intermedio para reflejar los cambios en el desarrollo SW actual";
 choices[34][3] = "No existe la versi&oacute;n II de cocomo";
 answers[34] = choices[34][1];
 units[34] = "89";
 comments[34] = "Id Pregunta: 2653. NULL";


//  Id pregunta: 2689 AÃ±o de creación de pregunta: 2004-01-01
 questions[35]= "36)  Los niveles de comportamiento contemplados en el modelo CMM (Capacity Maturity Model) para el desarrollo de software son ...";
 choices[35]= new Array();
 choices[35][0] = "Ca&oacute;tico, inicial, repetible, definido, gestionado y optimizado";
 choices[35][1] = "Inicial, repetible, definido, gestionado y mecanizado";
 choices[35][2] = "Inicial, repetible, definido, gestionado y optimizado";
 choices[35][3] = "Ninguna de las anteriores";
 answers[35] = choices[35][2];
 units[35] = "87,88,92";
 comments[35] = "Id Pregunta: 2689. ";


//  Id pregunta: 2690 AÃ±o de creación de pregunta: 2004-01-01
 questions[36]= "37)  &iquest;Cu&aacute;les son los criterios agentes en el modelo de calidad EFQM de excelencia?";
 choices[36]= new Array();
 choices[36][0] = "Liderazgo, personal, pol&iacute;tica y estrategia, colaboradores y recursos, procesos";
 choices[36][1] = "Liderazgo, personal, pol&iacute;tica y estrategia, innovaci&oacute;n y apredizaje, procesos";
 choices[36][2] = "Rendimiento, personal, pol&iacute;tica y estrategia, colaboradores y recursos, procesos";
 choices[36][3] = "Ninguna de las anteriores";
 answers[36] = choices[36][0];
 units[36] = "87,88,92";
 comments[36] = "Id Pregunta: 2690. ";


//  Id pregunta: 2811 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  Las Pruebas modulares en SW se pueden realizar";
 choices[37]= new Array();
 choices[37][0] = "Top-down, o de arriba abajo";
 choices[37][1] = "Bottom-up, o de abajo a arriba";
 choices[37][2] = "a) y b) son correctas";
 choices[37][3] = "Ninguna de las anteriores definiciones es correcta";
 answers[37] = choices[37][3];
 units[37] = "88";
 comments[37] = "Id Pregunta: 2811. NULL";


//  Id pregunta: 2812 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  Est&aacute;dares de Calidad de M&eacute;trica v3";
 choices[38]= new Array();
 choices[38][0] = "Norma ISO 9001";
 choices[38][1] = "norma  ISO 9000-2003";
 choices[38][2] = "normas ISO 9000-2000 y norma ISO 9001-2000";
 choices[38][3] = "norma ISO 9000-2001";
 answers[38] = choices[38][2];
 units[38] = "88";
 comments[38] = "Id Pregunta: 2812. NULL";


//  Id pregunta: 2814 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  En el modelo EFQM la suma de puntuaci&oacute;n m&aacute;xima de todos los criterios es 1000. &iquest;C&uacute;al de los siguientes criterios da m&aacute;s puntuaci&oacute;n?";
 choices[39]= new Array();
 choices[39][0] = "Impacto social";
 choices[39][1] = "Resultado global del negocio";
 choices[39][2] = "Satisfacci&oacute;n de los clientes";
 choices[39][3] = "Procesos";
 answers[39] = choices[39][2];
 units[39] = "88";
 comments[39] = "Id Pregunta: 2814. NULL";


//  Id pregunta: 2820 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  En el m&eacute;todo de Puntos de Funci&oacute;n de Albretch se consideran cinco par&aacute;metros entre los cu&aacute;les est&aacute;n";
 choices[40]= new Array();
 choices[40][0] = "Ficheros l&oacute;gicos externos";
 choices[40][1] = "Salidas internas";
 choices[40][2] = "Ficheros de interfaz externos";
 choices[40][3] = "Consultas internas";
 answers[40] = choices[40][2];
 units[40] = "89";
 comments[40] = "Id Pregunta: 2820. NULL";


//  Id pregunta: 2824 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  Se&ntilde;ale el critero falso en la migraci&oacute;n de aplicaciones en el marco de un ajuste dimensional.";
 choices[41]= new Array();
 choices[41][0] = "Interconectividad: las aplicaciones que requieren un alto grado de conectividad entre los usuarios son las que mejor se adaptan a ser implementadas en un entorno descentralizado sobre una red de &aacute;rea local.";
 choices[41][1] = "Requisitos de tiempo de respuesta: a veces conviene descentralizar la informaci&oacute;n para asegurar un tiempo de respuesta r&aacute;pido, evitando esperas en el acceso a las bases de datos residentes en el mainframe.";
 choices[41][2] = "Seguridad: las aplicaciones con unos requisitos estrictos de seguridad tanto en lo referente a la protecci&oacute;n de informaci&oacute;n sensible, como en lo que respecta a los da&ntilde;os accidentales son candidatas ideales para el ajuste dimensional.";
 choices[41][3] = "Control: al migrar aplicaciones desde un entorno centralizado a uno distribuido se pierde control sobre las mismas. No obstante, est&aacute;n surgiendo herramientas que permiten controlar eficaz y centralizadamente la distribuci&oacute;n e instalaci&oacute;n.";
 answers[41] = choices[41][2];
 units[41] = "90";
 comments[41] = "Id Pregunta: 2824. ";


//  Id pregunta: 2828 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  &iquest;Cu&aacute;l de los siguientes no es un criterio para abordar un proceso de ajuste dimensional?";
 choices[42]= new Array();
 choices[42][0] = "Interconectividad.";
 choices[42][1] = "Seguridad.";
 choices[42][2] = "Grado de conocimiento de los usuarios finales.";
 choices[42][3] = "Reducci&oacute;n del presupuesto.";
 answers[42] = choices[42][3];
 units[42] = "90";
 comments[42] = "Id Pregunta: 2828. ";


//  Id pregunta: 2829 AÃ±o de creación de pregunta: 2006-01-01
 questions[43]= "44)  Algunos de los pasos a realizar en el &quot;mining legacy system assets&quot; son:";
 choices[43]= new Array();
 choices[43][0] = "Rehabilitaci&oacute;n de componentes seleccionados.";
 choices[43][1] = "Reprogramaci&oacute;n de los m&oacute;dulos obsoletos.";
 choices[43][2] = "Realizaci&oacute;n de pruebas detalladas de los componentes del sistema en el nuevo entorno.";
 choices[43][3] = "Ninguna de las anteriores es correcta.";
 answers[43] = choices[43][0];
 units[43] = "90";
 comments[43] = "Id Pregunta: 2829. ";


//  Id pregunta: 2877 AÃ±o de creación de pregunta: 2006-01-01
 questions[44]= "45)  Indique cu&aacute;l de los siguientes componentes no es considerado por el m&eacute;todo de los puntos de funci&oacute;n de Albrecht, para la estimaci&oacute;n del tama&ntilde;o y del esfuerzo necesarios para desarrollar un sistema software";
 choices[44]= new Array();
 choices[44][0] = "Entradas externas";
 choices[44][1] = "Ficheros l&oacute;gicos internos";
 choices[44][2] = "Atributos del producto";
 choices[44][3] = "Consultas";
 answers[44] = choices[44][2];
 units[44] = "89";
 comments[44] = "Id Pregunta: 2877. NULL";


//  Id pregunta: 4321 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  Los modelos de COCOMO (b&aacute;sico, intermedio y avanzado), est&aacute;n definidos para tres modos de desarrollo de proyectos software. Indique cu&aacute;l de los siguientes conceptos no identifica alguno de estos modos:";
 choices[45]= new Array();
 choices[45][0] = "Modo encapsulado.";
 choices[45][1] = "Modo semiacoplado.";
 choices[45][2] = "Modo org&aacute;nico.";
 choices[45][3] = "Modo empotrado.";
 answers[45] = choices[45][0];
 units[45] = "89";
 comments[45] = "Id Pregunta: 4321. NULL";


//  Id pregunta: 4373 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  &iquest;Cu&aacute;l de los siguientes no es un nivel del modelo de calidad CMM (Capacity Mature Model)?";
 choices[46]= new Array();
 choices[46][0] = "Inicial";
 choices[46][1] = "Administrado";
 choices[46][2] = "Definido";
 choices[46][3] = "Ideal";
 answers[46] = choices[46][3];
 units[46] = "88";
 comments[46] = "Id Pregunta: 4373. NULL";


//  Id pregunta: 4605 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  El modelo COCOMO (COnstructive COst Model):";
 choices[47]= new Array();
 choices[47][0] = "es un m&eacute;todo de medici&oacute;n de Ia funcionalidad de una aplicaci&oacute;n inform&aacute;tica.";
 choices[47][1] = "es un m&eacute;todo de evaluaci&oacute;n del interface de usuario.";
 choices[47][2] = "es un m&eacute;todo basado en estimaciones del numero de l&iacute;neas de c&oacute;digo.";
 choices[47][3] = "es un m&eacute;todo de planificaci&oacute;n del coste y esfuerzo.";
 answers[47] = choices[47][2];
 units[47] = "89";
 comments[47] = "Id Pregunta: 4605. ";


//  Id pregunta: 4679 AÃ±o de creación de pregunta: 2007-01-01
 questions[48]= "49)  Defina Throughput:";
 choices[48]= new Array();
 choices[48][0] = "Cantidad de trabajo &uacute;til ejecutado por unidad de tiempo en un entorno de carga determinado (medido entrabajos por hora o transacciones por segundo)";
 choices[48][1] = "M&aacute;xima cantidad de trabajo &uacute;til que se puede realizar por unidad de tiempo en un entorno de cargadeterminado (medido en trabajos por hora o transacciones por segundo)";
 choices[48][2] = "&quot;swing job&quot; o trabajo excedentario que se puede realizar antes de llegar a la saturaci&oacute;n (medido en trabajospor hora o transacciones por segundo)";
 choices[48][3] = "M&iacute;nima cantidad de trabajo &uacute;til que se puede realizar por unidad de tiempo en un entorno de cargadeterminado (medido en trabajos por hora o transacciones por segundo)";
 answers[48] = choices[48][0];
 units[48] = "89";
 comments[48] = "Id Pregunta: 4679. Examen 2006 JCYL";


//  Id pregunta: 4727 AÃ±o de creación de pregunta: 2007-01-01
 questions[49]= "50)  Los resultados del modelo EFQM se eval&uacute;an:";
 choices[49]= new Array();
 choices[49][0] = "Respecto a los clientes";
 choices[49][1] = "Respecto a la sociedad";
 choices[49][2] = "Respecto al personal de la empresa";
 choices[49][3] = "Todas las respuestas son correctas";
 answers[49] = choices[49][3];
 units[49] = "92";
 comments[49] = "Id Pregunta: 4727. Examen 2006 JCYL";


//  Id pregunta: 4737 AÃ±o de creación de pregunta: 2007-01-01
 questions[50]= "51)  &iquest;Cual es el primer criterio de calidad del Modelo EFQM?";
 choices[50]= new Array();
 choices[50][0] = "Liderazgo";
 choices[50][1] = "Oportunidad";
 choices[50][2] = "Satisfacci&oacute;n del cliente";
 choices[50][3] = "Satisfacer los requisitos";
 answers[50] = choices[50][0];
 units[50] = "92";
 comments[50] = "Id Pregunta: 4737. Examen 2006 JCYL";


//  Id pregunta: 4739 AÃ±o de creación de pregunta: 2007-01-01
 questions[51]= "52)  La refactorizaci&oacute;n consiste en:";
 choices[51]= new Array();
 choices[51][0] = "Mejorar el c&oacute;digo fuente.";
 choices[51][1] = "Mejorar el dise&ntilde;o de una aplicaci&oacute;n.";
 choices[51][2] = "Mejorar el mantenimiento del c&oacute;digo fuente.";
 choices[51][3] = "Todas las respuestas anteriores son correctas.";
 answers[51] = choices[51][3];
 units[51] = "91";
 comments[51] = "Id Pregunta: 4739. Examen 2006 JCYL";


//  Id pregunta: 4831 AÃ±o de creación de pregunta: 2007-01-01
 questions[52]= "53)  &iquest;Cu&aacute;l de las siguientes es una m&eacute;trica de productividad en la generaci&oacute;n de software seg&uacute;n Pressman?";
 choices[52]= new Array();
 choices[52][0] = "N&uacute;meros de defectos por miles de l&iacute;neas de c&oacute;digo";
 choices[52][1] = "Tiempo medio de cambio";
 choices[52][2] = "Puntos de funci&oacute;n";
 choices[52][3] = "N&uacute;mero de p&eacute;rdidas de integridad";
 answers[52] = choices[52][2];
 units[52] = "89";
 comments[52] = "Id Pregunta: 4831. preparatic XVII";


//  Id pregunta: 4862 AÃ±o de creación de pregunta: 2007-01-01
 questions[53]= "54)  En relaci&oacute;n a las m&eacute;tricas y evaluaci&oacute;n de la Calidad del software, &iquest;cu&aacute;l de las siguientes afirmaciones NO escierta?";
 choices[53]= new Array();
 choices[53][0] = "La t&eacute;cnica de Halstead es una m&eacute;trica de la fiabilidad del software";
 choices[53][1] = "Las m&eacute;tricas de complejidad eval&uacute;an la facilidad de mantenimiento del software";
 choices[53][2] = "El m&eacute;todo de los puntos de funci&oacute;n es una m&eacute;trica de productividad del software";
 choices[53][3] = "COCOMO (Constructive Cost Model) es un modelo de estimaci&oacute;n algor&iacute;tmico";
 answers[53] = choices[53][0];
 units[53] = "88";
 comments[53] = "Id Pregunta: 4862. NULL";


//  Id pregunta: 4947 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  Despu&eacute;s de un cambio en un sistema de informaci&oacute;n, &iquest;qu&eacute; pruebas es necesario realizar para comprobar que los cambios realizados no han afectado a otros componentes no modificados?:";
 choices[54]= new Array();
 choices[54][0] = "Pruebas de implantaci&oacute;n.";
 choices[54][1] = "Pruebas de sostenibilidad.";
 choices[54][2] = "Pruebas de regresi&oacute;n.";
 choices[54][3] = "Pruebas del sistema.";
 answers[54] = choices[54][2];
 units[54] = "87";
 comments[54] = "Id Pregunta: 4947. Examen TIC B 2007";


//  Id pregunta: 4953 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  &iquest;Cu&aacute;l es el organismo acreditador espa&ntilde;ol dentro de la Infraestructura de la Calidad?";
 choices[55]= new Array();
 choices[55][0] = "AENOR";
 choices[55][1] = "ENAC";
 choices[55][2] = "Cualquier organismo de certificaci&oacute;n.";
 choices[55][3] = "Cualquier organismo certificado por el CEN (Centro Europeo de Normalizaci&oacute;n).";
 answers[55] = choices[55][1];
 units[55] = "92";
 comments[55] = "Id Pregunta: 4953. Examen TIC B 2007";


//  Id pregunta: 5207 AÃ±o de creación de pregunta: 2003-01-01
 questions[56]= "57)  Los costes de calidad se pueden dividir en costes asociados con la prevenci&oacute;n, la evaluaci&oacute;n y los fallos. Entre los costes de prevenci&oacute;n se incluyen:";
 choices[56]= new Array();
 choices[56][0] = "Planificaci&oacute;n de la calidad";
 choices[56][1] = "Calibrado y mantenimiento del equipo";
 choices[56][2] = "Reparaci&oacute;n";
 choices[56][3] = "An&aacute;lisis de las modalidades de fallos";
 answers[56] = choices[56][0];
 units[56] = "87";
 comments[56] = "Id Pregunta: 5207. NULL";


//  Id pregunta: 5252 AÃ±o de creación de pregunta: 2003-01-01
 questions[57]= "58)  Entre las ventajas destacadas de ISO 9000:2000 NO se encuentra:";
 choices[57]= new Array();
 choices[57][0] = "Proporciona amplia y detallada informaci&oacute;n de c&oacute;mo aplicarlo en empresas de tama&ntilde;o reducido";
 choices[57][1] = "Incrementa oportunidades de negocio en ciertos mercados y aumenta la satisfacci&oacute;n del cliente";
 choices[57][2] = "Reconocimiento y apariencia internacional, marca de reconocido prestigio";
 choices[57][3] = "Libertad de implementaci&oacute;n e interpretaci&oacute;n de los requisitos";
 answers[57] = choices[57][0];
 units[57] = "87";
 comments[57] = "Id Pregunta: 5252. NULL";


//  Id pregunta: 5253 AÃ±o de creación de pregunta: 2003-01-01
 questions[58]= "59)  Indique la afirmaci&oacute;n FALSA en relaci&oacute;n al modelo CMM:";
 choices[58]= new Array();
 choices[58][0] = "Consta de 5 niveles de madurez";
 choices[58][1] = "Todos los niveles se descomponen en &aacute;reas de procesos clave";
 choices[58][2] = "Las &aacute;reas de procesos clave  indican las &aacute;reas que una organizaci&oacute;n debe desarrollar para mejorar su proceso software y alcanzar un nivel de madurez";
 choices[58][3] = "Las &aacute;reas claves del proceso se organizan en caracter&iacute;sticas comunes que indican si la implementaci&oacute;n de un proceso clave es efectiva, repetible y duradera.";
 answers[58] = choices[58][1];
 units[58] = "87";
 comments[58] = "Id Pregunta: 5253. NULL";


//  Id pregunta: 5257 AÃ±o de creación de pregunta: 2003-01-01
 questions[59]= "60)  Se&ntilde;ale la falsa:";
 choices[59]= new Array();
 choices[59][0] = "GQM, Goal, Question, Metric, es un m&eacute;todo de desarrollo de m&eacute;tricas";
 choices[59][1] = "El n&uacute;mero de l&iacute;neas de c&oacute;digo se emplea como m&eacute;trica de estimaci&oacute;n de proyectos.";
 choices[59][2] = "Cocomo es un modelo de estimaci&oacute;n algor&iacute;tmico propuesto por Boehm que fundamenta su estimaci&oacute;n en el n&uacute;mero de puntos de funci&oacute;n.";
 choices[59][3] = "Cocomo se aplica en tres modelos: b&aacute;sico, intermedio y avanzado. Estos modelos se dividen a su vez en tres modos: org&aacute;nico, semiacoplado y empotrado.";
 answers[59] = choices[59][2];
 units[59] = "88";
 comments[59] = "Id Pregunta: 5257. NULL";


//  Id pregunta: 5258 AÃ±o de creación de pregunta: 2003-01-01
 questions[60]= "61)  En relaci&oacute;n a Cocomo II:";
 choices[60]= new Array();
 choices[60][0] = "Surge en 1997 para solventar las limitaciones de Cocomo.";
 choices[60][1] = "Propone 3 modelos: Composici&oacute;n de la Aplicaci&oacute;n, Dise&ntilde;o previo y post-arquitectura.";
 choices[60][2] = "El modelo de Composici&oacute;n de la aplicaci&oacute;n se basa en l&iacute;neas de c&oacute;digo.";
 choices[60][3] = "Todas son correctas.";
 answers[60] = choices[60][0];
 units[60] = "88";
 comments[60] = "Id Pregunta: 5258. NULL";


//  Id pregunta: 5261 AÃ±o de creación de pregunta: 2003-01-01
 questions[61]= "62)  El Plan General de Garant&iacute;a de Calidad (PGGC) considera que los tipos de riesgos potenciales de un proyecto son:";
 choices[61]= new Array();
 choices[61][0] = "7";
 choices[61][1] = "5";
 choices[61][2] = "No considera ning&uacute;n tipo de riesgo potencial";
 choices[61][3] = "Depende del proyecto a considerar";
 answers[61] = choices[61][0];
 units[61] = "88";
 comments[61] = "Id Pregunta: 5261. NULL";


//  Id pregunta: 5263 AÃ±o de creación de pregunta: 2003-01-01
 questions[62]= "63)  &iquest;C&oacute;mo se puede determinar en el Plan General de Garant&iacute;a de Calidad (PGGC) el nivel de intensidad que sirve para graduar las funciones de garant&iacute;a de calidad aplicables a un proyecto?";
 choices[62]= new Array();
 choices[62][0] = "No es posible en el PGGC";
 choices[62][1] = "A trav&eacute;s de la determinaci&oacute;n del perfil de riesgos del proyecto.";
 choices[62][2] = "A trav&eacute;s del foco de intensidad y de sus cinco niveles.";
 choices[62][3] = "A trav&eacute;s del foco de inter&eacute;s en garant&iacute;a de calidad y para cada fase y productos asociados con el modelos de desarrollo elegido para el proyecto.";
 answers[62] = choices[62][3];
 units[62] = "88";
 comments[62] = "Id Pregunta: 5263. NULL";


//  Id pregunta: 5414 AÃ±o de creación de pregunta: 2003-01-01
 questions[63]= "64)  Una m&eacute;trica basada en la calidad del software utiliza como factores de calidad desde un punto de vista de explotaci&oacute;n:";
 choices[63]= new Array();
 choices[63][0] = "Reusabilidad, Seguridad, Eficiencia, Correcci&oacute;n y Fiabilidad";
 choices[63][1] = "Usabilidad, Seguridad, Eficiencia, Correccion y Fiabilidad";
 choices[63][2] = "Usabilidad, Seguridad, Mantenibilidad, Correcci&oacute;n y Fiabilidad";
 choices[63][3] = "Usabilidad, Seguridad, Portabilidad, Correcci&oacute;n y Fiabilidad";
 answers[63] = choices[63][1];
 units[63] = "88";
 comments[63] = "Id Pregunta: 5414. Castilla y Le&oacute;n";


//  Id pregunta: 5479 AÃ±o de creación de pregunta: 2003-01-01
 questions[64]= "65)  &iquest;Cual es el primer criterio de calidad del Modelo EFQM?";
 choices[64]= new Array();
 choices[64][0] = "Liderazgo";
 choices[64][1] = "Oportunidad";
 choices[64][2] = "Satisfacci&oacute;n del cliente";
 choices[64][3] = "Satisfacer los requisitos";
 answers[64] = choices[64][0];
 units[64] = "88";
 comments[64] = "Id Pregunta: 5479. Castilla y Le&oacute;n";


//  Id pregunta: 5904 AÃ±o de creación de pregunta: 2009-01-01
 questions[65]= "66)  El modelo CMMI (Capability Maturity Model Integration) es:";
 choices[65]= new Array();
 choices[65][0] = "Un modelo para la mejora de resultados de la organizaci&oacute;n";
 choices[65][1] = "Un modelo para la mejora de los procesos de la organizaci&oacute;n";
 choices[65][2] = "Un modelo para la mejora de la capacidad de liderazgo de la organizaci&oacute;n";
 choices[65][3] = "Un modelo para la mejora de la consistencia de los datos de una organizaci&oacute;n";
 answers[65] = choices[65][1];
 units[65] = "87";
 comments[65] = "Id Pregunta: 5904. MAP 2008 A1";


//  Id pregunta: 5962 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  &iquest;Qu&eacute; elemento NO forma parte del modelo EFQM de excelencia?";
 choices[66]= new Array();
 choices[66][0] = "Procesos";
 choices[66][1] = "Personas";
 choices[66][2] = "Resultados en los clientes";
 choices[66][3] = "Resultados en los proveedores";
 answers[66] = choices[66][3];
 units[66] = "92";
 comments[66] = "Id Pregunta: 5962. Castilla La Mancha 2009";


//  Id pregunta: 6126 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  De los siguientes pares de t&eacute;rminos referidos al control de calidad, indique cu&aacute;l contiene dos conceptos equivalentes:";
 choices[67]= new Array();
 choices[67][0] = "Prevenci&oacute;n e inspecci&oacute;n.";
 choices[67][1] = "Causas comunes y causas aleatorias.";
 choices[67][2] = "Muestreo por atributos y muestreo por variables.";
 choices[67][3] = "Tolerancias y l&iacute;mites de control.";
 answers[67] = choices[67][1];
 units[67] = "87";
 comments[67] = "Id Pregunta: 6126. TIC A 2009";


//  Id pregunta: 6241 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)  De acuerdo a la terminolog&iacute;a adoptada por el IEEE, la transformaci&oacute;n de una forma de representaci&oacute;n del sistema en otra distinta, pero del mismo nivel de abstracci&oacute;n, sin modificar el comportamiento externo del sistema, es la definici&oacute;n de:";
 choices[68]= new Array();
 choices[68][0] = "Ingenier&iacute;a hacia delante.";
 choices[68][1] = "Reestructuraci&oacute;n.";
 choices[68][2] = "Reingenier&iacute;a.";
 choices[68][3] = "Ingenier&iacute;a inversa.";
 answers[68] = choices[68][1];
 units[68] = "91";
 comments[68] = "Id Pregunta: 6241. TIC B-2009, bloque desarrollo";


//  Id pregunta: 6255 AÃ±o de creación de pregunta: 2010-01-01
 questions[69]= "70)  &iquest;Cu&aacute; de las siguientes afirmaciones referentes a tipos de mantenimiento es falsa?";
 choices[69]= new Array();
 choices[69][0] = "Mantenimiento Correctivo comprende aquellos cambios necesarios para corregir errores del producto software";
 choices[69][1] = "Mantenimiento Evolutivo se refiere a las modificaciones necesarias para adaptar el sistema y el entorno a una nueva versi&oacute;n del producto";
 choices[69][2] = "Mantenimiento Adaptativo engloba las modificaciones que afectan a los entornos en los que el sistema opera: cambios de configuraci&oacute;n del hardware, software de base, gestores de base de datos, comunicaciones, etc.";
 choices[69][3] = "Mantenimiento Perfectivo son acciones llevadas a cabo para mejorar la calidad interna de los sistemas en cualquiera de sus aspectos: reestructuraci&oacute;n del c&oacute;digo, definici&oacute;n m&aacute;s clara del sistema y optimizaci&oacute;n del rendimiento y eficiencia";
 answers[69] = choices[69][1];
 units[69] = "87";
 comments[69] = "Id Pregunta: 6255. TICB-2009, bloque desarrollo";


//  Id pregunta: 6466 AÃ±o de creación de pregunta: 2010-01-01
 questions[70]= "71)  Indique la respuesta incorrecta sobre la gesti&oacute;n de configuraci&oacute;n.";
 choices[70]= new Array();
 choices[70][0] = "Una l&iacute;nea base es un conjunto de actividades para gestionar el cambio a lo largo del ciclo de vida del software.";
 choices[70][1] = "El impacto de los cambios puede evaluarse a trav&eacute;s de las relaciones entre los objetos de configuraci&oacute;n.";
 choices[70][2] = "La gesti&oacute;n de configuraci&oacute;n del software es una actividad protectiva.";
 choices[70][3] = "Las herramientas de desarrollo pueden formar parte de una l&iacute;nea base.";
 answers[70] = choices[70][0];
 units[70] = "91";
 comments[70] = "Id Pregunta: 6466. Castilla La Mancha 2009";


//  Id pregunta: 6531 AÃ±o de creación de pregunta: 2010-01-01
 questions[71]= "72)  La Resoluci&oacute;n del 6 de Febrero de 2006 sobre calidad de los servicios en la Administraci&oacute;n, fija distintos programas de actuaci&oacute;n, &iquest;cu&aacute;l de los siguientes no es uno de ellos?";
 choices[71]= new Array();
 choices[71][0] = "Programa de Cartas de Servicio";
 choices[71][1] = "Programa de Evaluaci&oacute;n de la calidad de las organizaciones";
 choices[71][2] = "Programa de Quejas y Sugerencias";
 choices[71][3] = "Programa de Implantaci&oacute;n de la Calidad";
 answers[71] = choices[71][3];
 units[71] = "87";
 comments[71] = "Id Pregunta: 6531. NULL";


//  Id pregunta: 6535 AÃ±o de creación de pregunta: 2010-01-01
 questions[72]= "73)  Dentro de la gu&iacute;a de servicios ISO 9004, la orientaci&oacute;n para la direcci&oacute;n se basa en distintos principios de gesti&oacute;n";
 choices[72]= new Array();
 choices[72][0] = "Enfoque al cliente";
 choices[72][1] = "Liderazgo";
 choices[72][2] = "Participaci&oacute;n del personal";
 choices[72][3] = "Todas las respuestas anteriores son correctas";
 answers[72] = choices[72][3];
 units[72] = "92";
 comments[72] = "Id Pregunta: 6535. NULL";


//  Id pregunta: 6537 AÃ±o de creación de pregunta: 2010-01-01
 questions[73]= "74)  La gesti&oacute;n de recursos, de acuerdo a ISO 9004, se apoya en:";
 choices[73]= new Array();
 choices[73][0] = "El ciclo de vida";
 choices[73][1] = "Gesti&oacute;n de la seguridad";
 choices[73][2] = "An&aacute;lisis de la viabilidad";
 choices[73][3] = "Infraestructura";
 answers[73] = choices[73][3];
 units[73] = "92";
 comments[73] = "Id Pregunta: 6537. NULL";


//  Id pregunta: 6627 AÃ±o de creación de pregunta: 2010-01-01
 questions[74]= "75)  El orden de los niveles del modelo CMM de Ingenier&iacute;a de Software es:";
 choices[74]= new Array();
 choices[74][0] = "Inicial; Repetible; Definido; Gestionado; Optimizado";
 choices[74][1] = "Inicial; Definido; Repetible; Gestionado; Optimizado";
 choices[74][2] = "Inicial; Definido; Gestionado; Repetible; Optimizado";
 choices[74][3] = "Inicial; Repetible; Gestionado; Definido; Optimizado";
 answers[74] = choices[74][0];
 units[74] = "87";
 comments[74] = "Id Pregunta: 6627. NULL";


//  Id pregunta: 6628 AÃ±o de creación de pregunta: 2010-01-01
 questions[75]= "76)  En el modelo CMM de Ingenier&iacute;a de Software, dentro del nivel 'Definido' est&aacute;n las &Aacute;reas Clave:";
 choices[75]= new Array();
 choices[75][0] = "Gesti&oacute;n de Cambios Tecol&oacute;gicos y Gesti&oacute;n de Cambios en los Procesos";
 choices[75][1] = "Aseguramiento de la Calidad y Planificaci&oacute;n del Proyecto";
 choices[75][2] = "Gesti&oacute;n Cuantitativa del Proyecto y Gesti&oacute;n de Calidad del Software";
 choices[75][3] = "Gesti&oacute;n Integrada del Software y Coordinaci&oacute;n Intergrupos";
 answers[75] = choices[75][3];
 units[75] = "87";
 comments[75] = "Id Pregunta: 6628. NULL";


//  Id pregunta: 6629 AÃ±o de creación de pregunta: 2010-01-01
 questions[76]= "77)  El modelo CMM de Ingenier&iacute;a de Software ofrece dos representaciones que se denominan:";
 choices[76]= new Array();
 choices[76][0] = "Continua y Discontinua";
 choices[76][1] = "Continua y Por Et&aacute;pas";
 choices[76][2] = "Por &Aacute;reas Clave y Caracter&iacute;sticas";
 choices[76][3] = "Continua y Por &Aacute;reas Clave";
 answers[76] = choices[76][1];
 units[76] = "87";
 comments[76] = "Id Pregunta: 6629. NULL";


//  Id pregunta: 6643 AÃ±o de creación de pregunta: 2010-01-01
 questions[77]= "78)  En el m&eacute;todo de los Puntos de Funci&oacute;n se valoran:";
 choices[77]= new Array();
 choices[77][0] = "15 caracter&iacute;sticas generales";
 choices[77][1] = "5 caracter&iacute;sticas generales";
 choices[77][2] = "6 caracter&iacute;sticas generales";
 choices[77][3] = "14 caracter&iacute;sticas generales";
 answers[77] = choices[77][3];
 units[77] = "89";
 comments[77] = "Id Pregunta: 6643. NULL";


//  Id pregunta: 6649 AÃ±o de creación de pregunta: 2010-01-01
 questions[78]= "79)  En el modelo COCOMO 2000 surgido como evoluci&oacute;n de COCOMO II, &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[78]= new Array();
 choices[78][0] = "Modelo de composici&oacute;n de la Aplicaci&oacute;n: es una primera aproximaci&oacute;n en las fases iniciales del ciclo de vida";
 choices[78][1] = "Modelo de composici&oacute;n de la Aplicaci&oacute;n: incluye el uso de prototipos";
 choices[78][2] = "Modelo de Dise&ntilde;o Preliminar: es una primera aproximaci&oacute;n en las fases iniciales del ciclo de vida";
 choices[78][3] = "Modelo de Dise&ntilde;o Preliminar: incluye el uso de prototipos";
 answers[78] = choices[78][1];
 units[78] = "89";
 comments[78] = "Id Pregunta: 6649. NULL";


//  Id pregunta: 8225 AÃ±o de creación de pregunta: 2011-01-01
 questions[79]= "80)  En relaci&oacute;n con el modelo EFQM, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[79]= new Array();
 choices[79][0] = "El modelo EFQM se compone de 9 criterios, de los cuales 4 son agentes facilitadores y 5 son resultados.";
 choices[79][1] = "El modelo EFQM tom&oacute; como referencia otros modelos de calidad, tales como Malcom Baldrige y Deming.";
 choices[79][2] = "Los resultados del modelo EFQM son: resultados clave, resultados en la sociedad, resultados en los proveedores, resultados en los clientes y resultados en las personas.";
 choices[79][3] = "Los agentes facilitadores del modelo EFQM son: liderazgo, personas, procesos, pol&iacute;tica y estrategia.";
 answers[79] = choices[79][1];
 units[79] = "92";
 comments[79] = "Id Pregunta: 8225. Examen TIC A1 2010";


//  Id pregunta: 8386 AÃ±o de creación de pregunta: 2011-01-01
 questions[80]= "81)  &iquest;Cu&aacute;l de los siguientes m&eacute;todos es una prueba de caja blanca?";
 choices[80]= new Array();
 choices[80][0] = "Prueba de la tabla ortogonal.";
 choices[80][1] = "Partici&oacute;n equivalente.";
 choices[80][2] = "M&eacute;todos de prueba basados en grafos.";
 choices[80][3] = "Prueba del camino b&aacute;sico.";
 answers[80] = choices[80][3];
 units[80] = "91";
 comments[80] = "Id Pregunta: 8386. Examen TIC A2 2010";


//  Id pregunta: 8892 AÃ±o de creación de pregunta: 2011-01-01
 questions[81]= "82)  &iquest;Cu&aacute;l de los siguientes es uno de los programas del marco general para la mejora de la calidad en la AGE?";
 choices[81]= new Array();
 choices[81][0] = "Programa de Evaluaci&oacute;n de la Calidad de las Organizaciones";
 choices[81][1] = "Programa de Formaci&oacute;n en EFQM";
 choices[81][2] = "Programa de Mejora de la Eficiencia en la Administraci&oacute;n P&uacute;blica";
 choices[81][3] = "Programa de Aseguramiento de la Calidad";
 answers[81] = choices[81][0];
 units[81] = "87";
 comments[81] = "Id Pregunta: 8892. NULL";


//  Id pregunta: 8969 AÃ±o de creación de pregunta: 2011-01-01
 questions[82]= "83)  Entre las m&eacute;tricas de Calidad para sistemas orientados a objetos se encuentran MDOO &iquest;cu&aacute;l de los siguientes no es un factor que la compongan?";
 choices[82]= new Array();
 choices[82][0] = "Factor de polimorfismo";
 choices[82][1] = "Factor de acoplamiento";
 choices[82][2] = "Factor de herencia de m&eacute;todos";
 choices[82][3] = "Factor de cohesi&oacute;n";
 answers[82] = choices[82][3];
 units[82] = "88";
 comments[82] = "Id Pregunta: 8969. NULL";


//  Id pregunta: 9338 AÃ±o de creación de pregunta: 2013-01-01
 questions[83]= "84)  &iquest;Cu&aacute;l de los siguientes no es un modelo de COCOMO?";
 choices[83]= new Array();
 choices[83][0] = "Semiacoplado";
 choices[83][1] = "Empotrado";
 choices[83][2] = "Acoplado";
 choices[83][3] = "Org&aacute;nico";
 answers[83] = choices[83][2];
 units[83] = "88";
 comments[83] = "Id Pregunta: 9338. NULL";


//  Id pregunta: 9413 AÃ±o de creación de pregunta: 2013-01-01
 questions[84]= "85)  Cu&aacute;l de las siguientes magnitudes no tratan en general de evaluar las m&eacute;tricas de estimaci&oacute;n software?";
 choices[84]= new Array();
 choices[84][0] = "Calidad";
 choices[84][1] = "Productividad";
 choices[84][2] = "Seguridad";
 choices[84][3] = "Tama&ntilde;o";
 answers[84] = choices[84][2];
 units[84] = "89";
 comments[84] = "Id Pregunta: 9413. NULL";


//  Id pregunta: 9417 AÃ±o de creación de pregunta: 2013-01-01
 questions[85]= "86)  Una clasificaci&oacute;n t&iacute;pica de los modelos de estimaci&oacute;n software es:";
 choices[85]= new Array();
 choices[85][0] = "Basados en Puntos de Funci&oacute;n, multivariable est&aacute;ticos y multivariable din&aacute;micos";
 choices[85][1] = "Con base hist&oacute;rica, con base estad&iacute;stica, con base te&oacute;rica, compuestos y basados en est&aacute;ndares";
 choices[85][2] = "T&eacute;cnicas de Delphi, Modelos exponenciales, Modelo de Putnam y modelos COCOMO";
 choices[85][3] = "Ninguno de los anteriores";
 answers[85] = choices[85][1];
 units[85] = "89";
 comments[85] = "Id Pregunta: 9417. NULL";


//  Id pregunta: 9420 AÃ±o de creación de pregunta: 2013-01-01
 questions[86]= "87)  El modelo de estimaci&oacute;n de Putnam no se caracteriza por";
 choices[86]= new Array();
 choices[86][0] = "Distribuir los esfuerzos de desarrollo seg&uacute;n la curva Rayleigh/Norden";
 choices[86][1] = "Tener asociada una herramienta automatizada (SLIM)";
 choices[86][2] = "Incluir una constante tecnol&oacute;gica";
 choices[86][3] = "Funcionar en proyectos grandes relativamente peor que en proyectos peque&ntilde;os";
 answers[86] = choices[86][3];
 units[86] = "89";
 comments[86] = "Id Pregunta: 9420. NULL";


//  Id pregunta: 9422 AÃ±o de creación de pregunta: 2013-01-01
 questions[87]= "88)  Cu&aacute;l de los siguientes no es uno de los tres tipos de proyecto contemplados en el COCOMO cl&aacute;sico/81";
 choices[87]= new Array();
 choices[87][0] = "Org&aacute;nico";
 choices[87][1] = "Acoplado";
 choices[87][2] = "Semiacoplado";
 choices[87][3] = "Empotrado";
 answers[87] = choices[87][1];
 units[87] = "89";
 comments[87] = "Id Pregunta: 9422. NULL";


//  Id pregunta: 9650 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  FAN-OUT es una medida de:";
 choices[88]= new Array();
 choices[88][0] = "Complejidad";
 choices[88][1] = "Reutilizaci&oacute;n";
 choices[88][2] = "Mantenibilidad";
 choices[88][3] = "Ninguna de las anteriores.";
 answers[88] = choices[88][0];
 units[88] = "89";
 comments[88] = "Id Pregunta: 9650. N&uacute;mero de clases que utiliza la clase que estamos estudiando.";


//  Id pregunta: 9660 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  &iquest;Cu&aacute;l de los siguientes es un modelo de mejora de calidad del SW?";
 choices[89]= new Array();
 choices[89][0] = "BOOTSTRAP";
 choices[89][1] = "TRILLIUM";
 choices[89][2] = "MOSCA";
 choices[89][3] = "Todos los anterires";
 answers[89] = choices[89][3];
 units[89] = "92";
 comments[89] = "Id Pregunta: 9660. MOSCA (Modelo Sist&eacute;mico de Calidad), BOOTSTRAP (Comisi&oacute;n Europea), TRILLIUM (Bell Canad&aacute;)";


//  Id pregunta: 9711 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  La Norma ISO 9004:2009 establece una escala para evaluar la madurez del sistema de gesti&oacute;n de calidad para cada cap&iacute;tulo principal de la misma. Un nivel 3 de madurez se corresponde con un nivel de desempe&ntilde;o de,";
 choices[90]= new Array();
 choices[90][0] = "Aproximaci&oacute;n reactiva.";
 choices[90][1] = "&Eacute;nfasis en la mejora continua.";
 choices[90][2] = "Aproximaci&oacute;n del sistema formal estable.";
 choices[90][3] = "&quot;Desempe&ntilde;o de &quot;mejor de su clase&quot;.";
 answers[90] = choices[90][2];
 units[90] = "92";
 comments[90] = "Id Pregunta: 9711. Examen TIC-A1 2013";


//  Id pregunta: 9745 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  &iquest;Qu&eacute; es el Marco Com&uacute;n de Evaluaci&oacute;n (CAF) 2013?";
 choices[91]= new Array();
 choices[91][0] = "CAF ofrece dos sistemas de puntuaci&oacute;n, el cl&aacute;sico y el refinado, s&oacute;lo el primero de ellos est&aacute; fundamentado sobre el Ciclo de Deming.";
 choices[91][1] = "Es uno del los ejes del modelo EFQM.";
 choices[91][2] = "Es una herramienta de gesti&oacute;n de la calidad total, desarrollada por y para el sector p&uacute;blico.";
 choices[91][3] = "Es una autoevaluaci&oacute;n que debe realizar una organizaci&oacute;n conforme a lo que dicta la norma ISO 9000.";
 answers[91] = choices[91][2];
 units[91] = "92";
 comments[91] = "Id Pregunta: 9745. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9872 AÃ±o de creación de pregunta: 2014-01-01
 questions[92]= "93)  Atendiendo a la norma ISO/IEC 9126 la calidad del software NO incluye la siguiente caracter&iacute;stica:";
 choices[92]= new Array();
 choices[92][0] = "Portabilidad.";
 choices[92][1] = "Funcionalidad.";
 choices[92][2] = "Usabilidad.";
 choices[92][3] = "Integridad.";
 answers[92] = choices[92][3];
 units[92] = "87";
 comments[92] = "Id Pregunta: 9872. TIC A1, Examen 2013";


//  Id pregunta: 9946 AÃ±o de creación de pregunta: 2014-01-01
 questions[93]= "94)   El &quot;nivel de definici&oacute;n&quot; del modelo CMM (Capability Maturity Model) se caracteriza por:";
 choices[93]= new Array();
 choices[93][0] = "Proceso poco documentado. ";
 choices[93][1] = "Proceso de desarrollo por definir.";
 choices[93][2] = "Proceso de desarrollo integrado en la organizaci&oacute;n.";
 choices[93][3] = "Control cuantitativo de productos";
 answers[93] = choices[93][2];
 units[93] = "87";
 comments[93] = "Id Pregunta: 9946. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10483 AÃ±o de creación de pregunta: 2014-01-01
 questions[94]= "95)  La ecuaci&oacute;n del software establece principalmente que&hellip;";
 choices[94]= new Array();
 choices[94][0] = "El esfuerzo necesario para realizar un proyecto es una ecuaci&oacute;n logar&iacute;tmica ";
 choices[94][1] = "El esfuerzo se mide en horas/hombre y hay 100 horas hombre por mes";
 choices[94][2] = "El tiempo para realizar un proyecto se puede medir en base a los puntos de funci&oacute;n ajustados";
 choices[94][3] = "El esfuerzo y el tiempo requerido para realizar un proyecto son inversamente proporcionales";
 answers[94] = choices[94][3];
 units[94] = "89";
 comments[94] = "Id Pregunta: 10483. NULL";


//  Id pregunta: 10822 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Cu&aacute;l de las siguientes reglas puede aplicarse para determinar el esfuerzo total de un proyecto en la fase de estimaci&oacute;n del mismo?";
 choices[95]= new Array();
 choices[95][0] = "Regla del 80-20.";
 choices[95][1] = "Regla del 30-40-30.";
 choices[95][2] = "Regla del 40-20-40.";
 choices[95][3] = "Regla del 20-60-20.";
 answers[95] = choices[95][2];
 units[95] = "28, 89";
 comments[95] = "Id Pregunta: 10822. Examen GSI 2014";


//  Id pregunta: 10859 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  El ciclo de Deming es una estrategia de mejora continua de la calidad en la administraci&oacute;n de una organizaci&oacute;n, los 4 pasos de la estrategia son:";
 choices[96]= new Array();
 choices[96][0] = "Plan, Do, Construct, Approval (Planificar, Hacer, Construir, Aprobar).";
 choices[96][1] = "Plan, Do, Check, Act (Planificar, Hacer, Verificar, Actuar).";
 choices[96][2] = "Plan, Develop, Control, Anticipate (Planificar, Desarrollar, Controlar, Tener previsto).";
 choices[96][3] = "Plan, Deduct, Control, Approval (Planificar, Deducir, Controlar, Aprobar).";
 answers[96] = choices[96][1];
 units[96] = "88";
 comments[96] = "Id Pregunta: 10859. Examen GSI 2014";


//  Id pregunta: 10939 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  En el modelo EFQM, la &quot;Gesti&oacute;n y mejora de las relaciones con los clientes&quot; es un subcriterio correspondiente al criterio:";
 choices[97]= new Array();
 choices[97][0] = "Resultados en los clientes.";
 choices[97][1] = "Resultados clave.";
 choices[97][2] = "Alianzas y recursos.";
 choices[97][3] = "Procesos.";
 answers[97] = choices[97][3];
 units[97] = "92";
 comments[97] = "Id Pregunta: 10939. TIC A1 AGE 2014";


//  Id pregunta: 11641 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Indique cu&aacute;l no es un principio de la norma ISO 9004";
 choices[98]= new Array();
 choices[98][0] = "Enfoque de sistema para la gesti&oacute;n";
 choices[98][1] = "Enfoque basado en procesos";
 choices[98][2] = "Enfoque al cliente";
 choices[98][3] = "Enfoque al proveedor";
 answers[98] = choices[98][3];
 units[98] = "92";
 comments[98] = "Id Pregunta: 11641. ";


//  Id pregunta: 11642 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  En el modelo EFQM, de los siguientes criterios, el que tiene un mayor peso en la puntuaci&oacute;n es:";
 choices[99]= new Array();
 choices[99][0] = "Resultados en los clientes";
 choices[99][1] = "Resultados en la sociedad";
 choices[99][2] = "Resultados en las personas";
 choices[99][3] = "Todos tienen el mismo peso";
 answers[99] = choices[99][0];
 units[99] = "92";
 comments[99] = "Id Pregunta: 11642. ";


