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

//  Id pregunta: 1 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de las siguientes es una herramienta inform&aacute;tica de apoyo a los compradores p&uacute;blicos?";
 choices[0]= new Array();
 choices[0][0] = "PROS@.";
 choices[0][1] = "ISTMO.";
 choices[0][2] = "SSD-AAPP.";
 choices[0][3] = "Ninguna de las anteriores.";
 answers[0] = choices[0][2];
 units[0] = "34";
 comments[0] = "Id Pregunta: 1. Modificada por JCED Preparatic XVII";


//  Id pregunta: 49 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Cu&aacute;l de los siguientes no es un m&eacute;todo para la ordenaci&oacute;n de alternativas en la selecci&oacute;n de bienes y servicios?:";
 choices[1]= new Array();
 choices[1][0] = "M&eacute;todo lexicogr&aacute;fico";
 choices[1][1] = "M&eacute;todo de Promethee";
 choices[1][2] = "M&eacute;todo Qualiflex";
 choices[1][3] = "M&eacute;todo heur&iacute;stico";
 answers[1] = choices[1][3];
 units[1] = "34";
 comments[1] = "Id Pregunta: 49. NULL";


//  Id pregunta: 69 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;Qu&eacute; m&eacute;todo de ordenaci&oacute;n de alternativas compara cada permutaci&oacute;n posible de las alternativas, con la informaci&oacute;n que aporta para cada criterio la matriz de decisi&oacute;n?:";
 choices[2]= new Array();
 choices[2][0] = "M&eacute;todo Promethee";
 choices[2][1] = "Utilidad multiatributo";
 choices[2][2] = "Permutaci&oacute;n";
 choices[2][3] = "Ninguno de los anteriores";
 answers[2] = choices[2][3];
 units[2] = "34";
 comments[2] = "Id Pregunta: 69. NULL";


//  Id pregunta: 73 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;Qu&eacute; m&eacute;todo de ordenaci&oacute;n de alternativas se basa en la comparaci&oacute;n binaria de las alternativas?:";
 choices[3]= new Array();
 choices[3][0] = "Concordancia";
 choices[3][1] = "M&eacute;todo lexicogr&aacute;fico";
 choices[3][2] = "Ponderaci&oacute;n lineal";
 choices[3][3] = "Ninguno de los anteriores";
 answers[3] = choices[3][0];
 units[3] = "34";
 comments[3] = "Id Pregunta: 73. ";


//  Id pregunta: 74 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;Qu&eacute; m&eacute;todo de ordenaci&oacute;n de alternativas se basa en un recuento de en cuantos criterios ha sido la mejor?:";
 choices[4]= new Array();
 choices[4][0] = "M&eacute;todo promethee";
 choices[4][1] = "Utilidad multiatributo";
 choices[4][2] = "Permutaci&oacute;n";
 choices[4][3] = "Ninguno de los anteriores";
 answers[4] = choices[4][3];
 units[4] = "34";
 comments[4] = "Id Pregunta: 74. Tema 36 de 2005";


//  Id pregunta: 75 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;Qu&eacute; m&eacute;todo de ordenaci&oacute;n de alternativas utiliza &uacute;nicamente la componente subjetiva del decisor?:";
 choices[5]= new Array();
 choices[5][0] = "Concordancia";
 choices[5][1] = "M&eacute;todo lexicogr&aacute;fico";
 choices[5][2] = "Ponderaci&oacute;n lineal";
 choices[5][3] = "Ninguno de las anteriores respuestas es correcta";
 answers[5] = choices[5][3];
 units[5] = "34";
 comments[5] = "Id Pregunta: 75. ";


//  Id pregunta: 77 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Qu&eacute; par&aacute;metro no interviene directamente en evaluar el rendimiento de un sistema?:";
 choices[6]= new Array();
 choices[6][0] = "Tiempo de respuesta";
 choices[6][1] = "Productividad o throughput";
 choices[6][2] = "Tipo de procesador";
 choices[6][3] = "Tasa de utilizaci&oacute;n de CPU";
 answers[6] = choices[6][2];
 units[6] = "35";
 comments[6] = "Id Pregunta: 77. NULL";


//  Id pregunta: 81 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Qu&eacute; se entiende por  'throughput'?:";
 choices[7]= new Array();
 choices[7][0] = "Es la cantidad de trabajo &uacute;til ejecutado por unidad de tiempo en un entorno de carga determinado";
 choices[7][1] = "Es la m&aacute;xima cantidad de trabajo &uacute;til que se puede realizar por unidad de tiempo en un entorno de carga determinado";
 choices[7][2] = "Es el tiempo transcurrido entre la entrega de un trabajo o una transacci&oacute;n al sistema y la recepci&oacute;n del resultado o la respuesta";
 choices[7][3] = "Ninguna de las respuestas anteriores es cierta";
 answers[7] = choices[7][0];
 units[7] = "35";
 comments[7] = "Id Pregunta: 81. NULL";


//  Id pregunta: 82 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Qu&eacute; se entiende por capacidad?:";
 choices[8]= new Array();
 choices[8][0] = "Es la m&aacute;xima cantidad de trabajo &uacute;til por unidad de tiempo en un entorno de carga determinada";
 choices[8][1] = "Es la cantidad de trabajo &uacute;til ejecutado por unidad de tiempo en un entorno de carga determinada";
 choices[8][2] = "Es el porcentaje de tiempo durante el cu&aacute;l est&aacute; siendo utilizado un componente del sistema inform&aacute;tico";
 choices[8][3] = "Es el intervalo de tiempo durante el cual se toman medidas para determinar el conjunto de trabajos de un programa en un entorno de memoria virtual paginada";
 answers[8] = choices[8][0];
 units[8] = "35";
 comments[8] = "Id Pregunta: 82. NULL";


//  Id pregunta: 115 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  De las siguientes afirmaciones referentes al m&eacute;todo lexicogr&aacute;fico de ordenaci&oacute;n de alternativas, indique cu&aacute;l es m&aacute;s correcta:";
 choices[9]= new Array();
 choices[9][0] = "El m&eacute;todo lexicogr&aacute;fico tiene como inconveniente que no utiliza toda la informaci&oacute;n disponible";
 choices[9][1] = "El m&eacute;todo lexicogr&aacute;fico requiere comparabilidad intercriterios";
 choices[9][2] = "El m&eacute;todo lexicogr&aacute;fico da como resultado un preorden parcial de las alternativas, pudiendo quedar alternativas declaradas como incomparables";
 choices[9][3] = "Todas las respuestas anteriores son ciertas";
 answers[9] = choices[9][0];
 units[9] = "34";
 comments[9] = "Id Pregunta: 115. NULL";


//  Id pregunta: 128 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  El benchmark es adecuado cuando:";
 choices[10]= new Array();
 choices[10][0] = "Vamos a adquirir aplicaciones a medida";
 choices[10][1] = "Los entornos de las diversas opciones difieren";
 choices[10][2] = "Queremos desarrollar un proyecto innovador";
 choices[10][3] = "Queremos comparar el rendimiento de un sistema respecto al de otros";
 answers[10] = choices[10][3];
 units[10] = "35";
 comments[10] = "Id Pregunta: 128. NULL";


//  Id pregunta: 147 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  El la teor&iacute;a de la decisi&oacute;n multicriterio discreta, para el problema de la asignaci&oacute;n de pesos a criterios pueden utilizarse, entre otros, los m&eacute;todos:";
 choices[11]= new Array();
 choices[11][0] = "Lexicogr&aacute;fico y Promethee";
 choices[11][1] = "El m&eacute;todo de ponderaci&oacute;n lineal";
 choices[11][2] = "El m&eacute;todo Delphi y el de la entrop&iacute;a";
 choices[11][3] = "El m&eacute;todo de ponderaci&oacute;n";
 answers[11] = choices[11][2];
 units[11] = "34";
 comments[11] = "Id Pregunta: 147. NULL";


//  Id pregunta: 149 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  El m&eacute;todo Promethee:";
 choices[12]= new Array();
 choices[12][0] = "Ignora la cuant&iacute;a de la diferencia, s&oacute;lo se&ntilde;ala si existe o no";
 choices[12][1] = "Su concepto central es de comparaci&oacute;n ternaria de alternativas";
 choices[12][2] = "Exige poca informaci&oacute;n por parte del decisor: evaluaciones ordinales y pesos cardinales";
 choices[12][3] = "Generaliza el m&eacute;todo de ponderaci&oacute;n lineal incorporando al posibilidad de valorar el riesgo";
 answers[12] = choices[12][0];
 units[12] = "34";
 comments[12] = "Id Pregunta: 149. NULL";


//  Id pregunta: 168 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  El valor econ&oacute;mico del producto software en sistemas complejos es:";
 choices[13]= new Array();
 choices[13][0] = "Despreciable, ya que el proveedor suele regalarlo con el hardware";
 choices[13][1] = "Independiente del n&uacute;mero de usuarios";
 choices[13][2] = "Generalmente mayor que el del producto hardware";
 choices[13][3] = "Menor que su coste de mantenimiento anual";
 answers[13] = choices[13][2];
 units[13] = "35";
 comments[13] = "Id Pregunta: 168. NULL";


//  Id pregunta: 182 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  En el estudio de la capacidad de los sistemas de informaci&oacute;n:";
 choices[14]= new Array();
 choices[14][0] = "La demanda latente es el trabajo frenado por la falta de recursos";
 choices[14][1] = "La teor&iacute;a de colas es un m&eacute;todo emp&iacute;rico, no matem&aacute;tico";
 choices[14][2] = "La frecuencia de swapping es el n&uacute;mero de fallos de p&aacute;gina que se producen por unidad de tiempo en un sistema de memoria virtual paginada";
 choices[14][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[14] = choices[14][0];
 units[14] = "35";
 comments[14] = "Id Pregunta: 182. NULL";


//  Id pregunta: 183 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  En el marco de la decisi&oacute;n multicriterio, la normalizaci&oacute;n es el proceso por el que:";
 choices[15]= new Array();
 choices[15][0] = "Se eliminan las alternativas que no intervienen en el c&aacute;lculo";
 choices[15][1] = "Se desactivan aquellos criterios en los que todas las alternativas alcanzan id&eacute;ntica puntuaci&oacute;n";
 choices[15][2] = "Se ajusta la matriz de puntuaciones seg&uacute;n un modelo de referencia";
 choices[15][3] = "Se modifica el contenido de la matriz de puntuaciones para hacer &eacute;sta comparables entre s&iacute;";
 answers[15] = choices[15][3];
 units[15] = "34";
 comments[15] = "Id Pregunta: 183. ";


//  Id pregunta: 195 AÃ±o de creación de pregunta: 2004-01-01
 questions[16]= "17)  En el caso que se desee caracterizar la carga de un sistema inform&aacute;tico, qu&eacute; par&aacute;metro no se deber&iacute;a tener en cuenta:";
 choices[16]= new Array();
 choices[16][0] = "Tiempo de CPU por trabajo.";
 choices[16][1] = "Tiempo de reflexi&oacute;n del usuario.";
 choices[16][2] = "Memoria necesaria para ejecutar un trabajo.";
 choices[16][3] = "Troughput.";
 answers[16] = choices[16][3];
 units[16] = "35";
 comments[16] = "Id Pregunta: 195. NULL";


//  Id pregunta: 204 AÃ±o de creación de pregunta: 2004-01-01
 questions[17]= "18)  La teor&iacute;a de la decisi&oacute;n multicriterio discreta";
 choices[17]= new Array();
 choices[17][0] = "tiene problemas con una incorrecta asignaci&oacute;n de pesos";
 choices[17][1] = "es usada en la elecci&oacute;n de contratos por parte de la administraci&oacute;n en ocasiones";
 choices[17][2] = "la normalizaci&oacute;n de las puntuaciones puede hacer perder la proporcionalidad";
 choices[17][3] = "todas las anteriores";
 answers[17] = choices[17][3];
 units[17] = "34";
 comments[17] = "Id Pregunta: 204. ";


//  Id pregunta: 306 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  La fase de formulaci&oacute;n de las pol&iacute;ticas p&uacute;blicas es:";
 choices[18]= new Array();
 choices[18][0] = "Una fase exclusiva de los actores p&uacute;blicos";
 choices[18][1] = "Una fase exclusiva del sector privado";
 choices[18][2] = "Una fase de colaboraci&oacute;n entre el sector p&uacute;blico y privado";
 choices[18][3] = "Una fase de los actores p&uacute;blicos en cuanto a objetivos a alcanzar y del sector privado en cuanto a posibles alternativas para llegar a ellos";
 answers[18] = choices[18][0];
 units[18] = "41";
 comments[18] = "Id Pregunta: 306. NULL";


//  Id pregunta: 307 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  La fidelidad con que un modelo representa la realidad depende fundamentalmente de:";
 choices[19]= new Array();
 choices[19][0] = "La precisi&oacute;n de los valores previstos de variables incontrolables";
 choices[19][1] = "La calidad de los datos";
 choices[19][2] = "El tratamiento de la incertidumbre";
 choices[19][3] = "Todas las respuestas anteriores son correctas";
 answers[19] = choices[19][3];
 units[19] = "34";
 comments[19] = "Id Pregunta: 307. ";


//  Id pregunta: 325 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  La planificaci&oacute;n de la capacidad de un sistema debe tener en cuenta los factores:";
 choices[20]= new Array();
 choices[20][0] = "Caracter&iacute;sticas de la carga de trabajo, caracter&iacute;sticas de funcionamiento de los recursos, disponibilidad del sistema y requisitos de servicio del usuario";
 choices[20][1] = "Caracter&iacute;sticas de la carga de trabajo, utilizaci&oacute;n de los recursos, disponibilidad del sistema y horas de trabajo de los usuarios";
 choices[20][2] = "Caracter&iacute;sticas de la carga de trabajo, utilizaci&oacute;n de los recursos, disponibilidad del sistema y requisitos de servicio de los usuarios";
 choices[20][3] = "Caracter&iacute;sticas de la carga de trabajo, utilizaci&oacute;n de los recursos, disponibilidad de los recursos y requisitos de servicio de los usuarios";
 answers[20] = choices[20][2];
 units[20] = "35";
 comments[20] = "Id Pregunta: 325. NULL";


//  Id pregunta: 332 AÃ±o de creación de pregunta: 2004-01-01
 questions[21]= "22)  En la Teor&iacute;a de Decisi&oacute;n Multicriterio Discreta (DMD), la normalizaci&oacute;n de puntuaciones:";
 choices[21]= new Array();
 choices[21][0] = "Homogeiniza las puntuaciones a una escala com&uacute;n (0,1)";
 choices[21][1] = "Permite la comparaci&oacute;n de criterios no homog&eacute;neos, medidos con unidades distintas y de distinto tipo (cuantitativos y cualitativos)";
 choices[21][2] = "Permite comparar criterio de sentido diferente (m&aacute;ximo, m&iacute;nimo)";
 choices[21][3] = "Todas las respuestas son correctas";
 answers[21] = choices[21][3];
 units[21] = "34";
 comments[21] = "Id Pregunta: 332. ";


//  Id pregunta: 451 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Se&ntilde;alar la respuesta correcta si hablamos de eficacia y eficiencia:";
 choices[22]= new Array();
 choices[22][0] = "La eficacia de un sistema es la medida de la correcta utilizaci&oacute;n de equipos, instalaciones y personal que participan en &eacute;l";
 choices[22][1] = "La eficiencia de un sistema es la medida de la correcta utilizaci&oacute;n de equipos, instalaciones y personal que participa en &eacute;l";
 choices[22][2] = "La eficiencia es la medida del cumplimiento de los objetivos del organismo y de los requisitos de los usuarios";
 choices[22][3] = "La eficacia &oacute;ptima se logra cuando se alcanzan los objetivos de los usuarios con los m&iacute;nimos recursos posibles";
 answers[22] = choices[22][1];
 units[22] = "38";
 comments[22] = "Id Pregunta: 451. ";


//  Id pregunta: 471 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Una hip&oacute;tesis b&aacute;sica para la aplicabilidad del m&eacute;todo de ponderaci&oacute;n lineal en la selecci&oacute;n de bienes y servicios es:";
 choices[23]= new Array();
 choices[23][0] = "La linealidad de las funciones de utilidad de los factores de decisi&oacute;n usados";
 choices[23][1] = "La independencia (separabilidad) de las funciones de utilidad";
 choices[23][2] = "La continuidad (ausencia de puntos singulares)";
 choices[23][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[23] = choices[23][1];
 units[23] = "34";
 comments[23] = "Id Pregunta: 471. ";


//  Id pregunta: 478 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  La capacidad de un sistema es:";
 choices[24]= new Array();
 choices[24][0] = "La cantidad de trabajo &uacute;til por unidad de tiempo";
 choices[24][1] = "La cantidad de trabajo &uacute;til por unidad de tiempo en un entorno de carga determinado";
 choices[24][2] = "La m&aacute;xima cantidad de trabajo &uacute;til que se puede realizar por unidad de tiempo";
 choices[24][3] = "La m&aacute;xima cantidad de trabajo &uacute;til que se puede realizar por unidad de tiempo en un entorno de carga determinado";
 answers[24] = choices[24][3];
 units[24] = "38";
 comments[24] = "Id Pregunta: 478. ";


//  Id pregunta: 622 AÃ±o de creación de pregunta: 2006-01-01
 questions[25]= "26)  En teor&iacute;a de la decisi&oacute;n multicriterio discreta (DMD), el m&eacute;todo QUALIFLEX se basa en:";
 choices[25]= new Array();
 choices[25][0] = "evaluaciones cardinales y pesos cardinales";
 choices[25][1] = "evaluaciones ordinales y pesos cardinales";
 choices[25][2] = "evaluaciones ordinales y pesos ordinales";
 choices[25][3] = "evaluaciones cardinales y pesos ordinales";
 answers[25] = choices[25][1];
 units[25] = "34";
 comments[25] = "Id Pregunta: 622. ";


//  Id pregunta: 625 AÃ±o de creación de pregunta: 2006-01-01
 questions[26]= "27)  En el proceso de selecci&oacute;n de alternativas en bienes y servicios de Tecnolog&iacute;as de la Informaci&oacute;n, &iquest;cu&aacute;l de los siguientes m&eacute;todos es el m&aacute;s recomendable a efectos de que no se vean favorecidas en exceso las alternativas que son median&iacute;as? :";
 choices[26]= new Array();
 choices[26][0] = "El m&eacute;todo de la Ponderaci&oacute;n Lineal.";
 choices[26][1] = "Los m&eacute;todos de Relaciones de Superaci&oacute;n.";
 choices[26][2] = "El m&eacute;todo Lexicogr&aacute;fico.";
 choices[26][3] = "El m&eacute;todo de las Utilidades Relativas.";
 answers[26] = choices[26][1];
 units[26] = "34";
 comments[26] = "Id Pregunta: 625. ";


//  Id pregunta: 628 AÃ±o de creación de pregunta: 2006-01-01
 questions[27]= "28)  Cu&aacute;l de las siguientes alternativas no se puede contratar a trav&eacute;s del cat&aacute;logo central de suministros.";
 choices[27]= new Array();
 choices[27][0] = "Un paquete SW de Bases de Datos.";
 choices[27][1] = "Un Servidor de aplicaciones.";
 choices[27][2] = "Un equipo externo de desarrollo Software.";
 choices[27][3] = "Un servicio de comunicaciones con un operador.";
 answers[27] = choices[27][3];
 units[27] = "35";
 comments[27] = "Id Pregunta: 628. NULL";


//  Id pregunta: 635 AÃ±o de creación de pregunta: 2006-01-01
 questions[28]= "29)  Los aspectos b&aacute;sicos a considerar en toda inversi&oacute;n son:";
 choices[28]= new Array();
 choices[28][0] = "La inversi&oacute;n incial y el plazo de la inversi&oacute;n.";
 choices[28][1] = "La inversi&oacute;n inicial, el plazo de la inversi&oacute;n, y el plazo de amortizaci&oacute;n.";
 choices[28][2] = "La inversi&oacute;n inicial, los flujos de caja y los momentos en que tienen lugar, y el plazo de la inversi&oacute;n.";
 choices[28][3] = "Los gastos financieros de la inversi&oacute;n, los flujos de caja, y el punto de amortizaci&oacute;n.";
 answers[28] = choices[28][2];
 units[28] = "38";
 comments[28] = "Id Pregunta: 635. ";


//  Id pregunta: 636 AÃ±o de creación de pregunta: 2006-01-01
 questions[29]= "30)  Respecto a los tipos de m&eacute;todos para analizar la rentabilidad de las inversiones, la respuesta correcta es:";
 choices[29]= new Array();
 choices[29][0] = "Se clasifican en m&eacute;todos tangibles e intangibles.";
 choices[29][1] = "Se clasifican en m&eacute;todos anal&iacute;ticos y cualitativos.";
 choices[29][2] = "Los m&eacute;todos din&aacute;micos tienen en cuenta la inflaci&oacute;n, y los m&eacute;todos est&aacute;ticos no.";
 choices[29][3] = "Los m&eacute;todos din&aacute;micos son los que tienen en cuenta el cambio de valor del dinero con el tiempo.";
 answers[29] = choices[29][3];
 units[29] = "38";
 comments[29] = "Id Pregunta: 636. ";


//  Id pregunta: 664 AÃ±o de creación de pregunta: 2006-01-01
 questions[30]= "31)  En un proceso de evaluaci&oacute;n de bienes y servicios inform&aacute;ticos,  el m&eacute;todo de ordenaci&oacute;n de alternativas PROMETHEE:";
 choices[30]= new Array();
 choices[30][0] = "Cuantifica la diferencia y al trabajar con los pesos de los criterios, considera si esa diferencia se ha hallado en un criterio m&aacute;s o menos importante para el decisor";
 choices[30][1] = "Ignora la cuant&iacute;a de la diferencia, solo se&ntilde;ala si existe o no, y al trabajar con los pesos de los criterios, ignora si esa diferencia se ha hallado en un criterio m&aacute;s o menos importante para el decisor";
 choices[30][2] = "Ignora la cuant&iacute;a de la diferencia, solo se&ntilde;ala si existe o no y al trabajar con los pesos de los criterios, considera si esa diferencia se ha hallado en un criterio m&aacute;s o menos importante para el decisor";
 choices[30][3] = "Cuantifica la diferencia, y al trabajar con los pesos de los criterios, ignora si esa diferencia se ha hallado en un criterio m&aacute;s o menos importante para el decisor";
 answers[30] = choices[30][2];
 units[30] = "34";
 comments[30] = "Id Pregunta: 664. ";


//  Id pregunta: 1624 AÃ±o de creación de pregunta: 2003-01-01
 questions[31]= "32)  Se&ntilde;ale la afirmaci&oacute;n correcta entre las siguientes:";
 choices[31]= new Array();
 choices[31][0] = "Mas del 30% de los grandes proyectos inform&aacute;ticos alcanzan resultados satisfactorios.";
 choices[31][1] = "Est&aacute;ndares como CMM, CMMI, SPICE y otros son f&aacute;ciles de aplicar en la mayor&iacute;a de los proyectos informaticos.";
 choices[31][2] = "Expertos de la OCDE vienen advirtiendo sobre las amenazas que para la implantaci&oacute;n de la administraci&oacute;n electr&oacute;nica suponen los reiterados fracasos de las administraciones en los grandes proyectos inform&aacute;ticos que vienen abordando.";
 choices[31][3] = "Los m&eacute;todos de programaci&oacute;n &aacute;giles han demostrado sobradamente su eficacia para proyectos no triviales.";
 answers[31] = choices[31][2];
 units[31] = "38";
 comments[31] = "Id Pregunta: 1624. Junta Andaluc&iacute;a";


//  Id pregunta: 4356 AÃ±o de creación de pregunta: 2007-01-01
 questions[32]= "33)  Los contratos de fabricaci&oacute;n, por los que la cosa o cosas que hayan de ser entregadas por el empresario deban ser elaboradas con arreglo a caracter&iacute;sticas peculiares fijadas previamente por la Administraci&oacute;n, a&uacute;n cuando &eacute;sta se obligue a aportar, total o parcialmente, los materiales precisos, tienen la consideraci&oacute;n de contratos de:";
 choices[32]= new Array();
 choices[32][0] = "Obras.";
 choices[32][1] = "Suministro";
 choices[32][2] = "Servicios";
 choices[32][3] = "Bienes y servicios.";
 answers[32] = choices[32][1];
 units[32] = "41";
 comments[32] = "Id Pregunta: 4356. ";


//  Id pregunta: 4660 AÃ±o de creación de pregunta: 2007-01-01
 questions[33]= "34)  &iquest;Cu&aacute;l de los siguientes no es un tipo de contrato administrativo?";
 choices[33]= new Array();
 choices[33][0] = "Obras";
 choices[33][1] = "Gesti&oacute;n de servicios publicos";
 choices[33][2] = "Arrendamiento de locales ";
 choices[33][3] = "Servicios";
 answers[33] = choices[33][2];
 units[33] = "41";
 comments[33] = "Id Pregunta: 4660. ";


//  Id pregunta: 4891 AÃ±o de creación de pregunta: 2007-01-01
 questions[34]= "35)  El requisito de que el desarrollo de un sistema se realice seg&uacute;n la metodolog&iacute;a M&eacute;trica v3 deber&aacute; figurar en el pliego de prescripciones t&eacute;cnicas:";
 choices[34]= new Array();
 choices[34][0] = "Aspectos deseables o valorables";
 choices[34][1] = "Conformidad con normas y est&aacute;ndares.";
 choices[34][2] = "Requisitos obligatorios de la contrataci&oacute;n.";
 choices[34][3] = "Criterios de adjudicaci&oacute;n del contrato.";
 answers[34] = choices[34][2];
 units[34] = "41";
 comments[34] = "Id Pregunta: 4891. ";


//  Id pregunta: 4893 AÃ±o de creación de pregunta: 2007-01-01
 questions[35]= "36)  &iquest;A cual de los siguientes entes no les es de aplicaci&oacute;n el RD Legislativo 3/2011 de Contratos del Sector P&uacute;blico?";
 choices[35]= new Array();
 choices[35][0] = "Al Ministerio de Defensa";
 choices[35][1] = "Al INEM";
 choices[35][2] = "A la Seguridad Social";
 choices[35][3] = "Se aplica a todos los anteriores.";
 answers[35] = choices[35][3];
 units[35] = "41";
 comments[35] = "Id Pregunta: 4893. ";


//  Id pregunta: 4901 AÃ±o de creación de pregunta: 2007-01-01
 questions[36]= "37)  En el caso de que &eacute;sta sea exigida &iquest;A cu&aacute;nto asciende la garant&iacute;a provisional que deben depositar los contratistas (art&iacute;culo 103 RD Legislativo 3/2011)?";
 choices[36]= new Array();
 choices[36][0] = "Del 2% del importe de licitaci&oacute;n";
 choices[36][1] = "No podr&aacute; ser superior a un 3% del presupuesto del contrato, excluido el Impuesto sobre el Valor A&ntilde;adido";
 choices[36][2] = "Del 2% del importe del contrato";
 choices[36][3] = "10%";
 answers[36] = choices[36][1];
 units[36] = "41";
 comments[36] = "Id Pregunta: 4901. ";


//  Id pregunta: 4902 AÃ±o de creación de pregunta: 2007-01-01
 questions[37]= "38)  Una vez adjudicado de forma provisional el contrato a uno de los licitadores, &iquest;qu&eacute; tanto por ciento del importe final de adjudicaci&oacute;n debe depositar el adjudicatario en concepto de fianza definitiva (art&iacute;culo 95 del RD Legislativo 3/2011)?";
 choices[37]= new Array();
 choices[37][0] = "Del 5% del importe de licitaci&oacute;n, IVA incluido";
 choices[37][1] = "Del 4% del importe de adjudicaci&oacute;n";
 choices[37][2] = "Del 5% del importe de adjudicaci&oacute;n, excluido el IVA";
 choices[37][3] = "Del 3% del importe de adjudicaci&oacute;n";
 answers[37] = choices[37][2];
 units[37] = "41";
 comments[37] = "Id Pregunta: 4902. ";


//  Id pregunta: 5116 AÃ±o de creación de pregunta: 2003-01-01
 questions[38]= "39)  En la estimaci&oacute;n del retorno de la inversi&oacute;n, al calcular el Beneficio Neto Anual:";
 choices[38]= new Array();
 choices[38][0] = "Se deben ignorar los beneficios intangibles pues no se pueden traducir en un importe.";
 choices[38][1] = "Se deben tener en cuenta los gastos operacionales anuales.";
 choices[38][2] = "Se debe tener en cuenta el gasto inciail del desarrollo del sistema.";
 choices[38][3] = "Se debe tener en cuenta el total de la inversi&oacute;n realizada.";
 answers[38] = choices[38][1];
 units[38] = "38";
 comments[38] = "Id Pregunta: 5116. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5583 AÃ±o de creación de pregunta: 2003-01-01
 questions[39]= "40)  &iquest;Qu&eacute; estructura tiene el nuevo RD Legislativo 3/2011 de contratos del sector p&uacute;blico?";
 choices[39]= new Array();
 choices[39][0] = "Un t&iacute;tulo preliminar y cuatro cap&iacute;tulos";
 choices[39][1] = "Cinco libros y Siete cap&iacute;tulos";
 choices[39][2] = "Un t&iacute;tulo preliminar y cinco libros";
 choices[39][3] = "Un art&iacute;culo &uacute;nico y un anexo";
 answers[39] = choices[39][2];
 units[39] = "41";
 comments[39] = "Id Pregunta: 5583. ";


//  Id pregunta: 5584 AÃ±o de creación de pregunta: 2003-01-01
 questions[40]= "41)  &iquest;Qu&eacute; tipos de contratos se regulan en el RD Legislativo 3/2011 de contratos del sector p&uacute;blico?";
 choices[40]= new Array();
 choices[40][0] = "Obras, gesti&oacute;n de servicios p&uacute;blicos, consultor&iacute;a y asistencia y servicios, y concesi&oacute;n de obras p&uacute;blicas";
 choices[40][1] = "Obras, concesi&oacute;n de obras p&uacute;blicas, gesti&oacute;n de servicios p&uacute;blicos, suministro, servicios, y de colaboraci&oacute;n entre el sector p&uacute;blico y el sector privado";
 choices[40][2] = "Obras, suministros, consultor&iacute;a y asistencia, y gesti&oacute;n p&uacute;blica de servicios privados";
 choices[40][3] = "ninguno de los anteriores es correcto";
 answers[40] = choices[40][1];
 units[40] = "41";
 comments[40] = "Id Pregunta: 5584. ";


//  Id pregunta: 5587 AÃ±o de creación de pregunta: 2003-01-01
 questions[41]= "42)  &iquest;Cu&aacute;les son los procedimientos de adjudicaci&oacute;n que contempla el RD legislativo 3/2011 de contratos del sector p&uacute;blico?";
 choices[41]= new Array();
 choices[41][0] = "Abierto, restringido y negociado";
 choices[41][1] = "Abierto, restringido, negociado y dedicado";
 choices[41][2] = "Abierto, restringido, negociado y por di&aacute;logo competitivo";
 choices[41][3] = "Ninguno de los anteriores es correcto";
 answers[41] = choices[41][2];
 units[41] = "41";
 comments[41] = "Id Pregunta: 5587. ";


//  Id pregunta: 5589 AÃ±o de creación de pregunta: 2003-01-01
 questions[42]= "43)  &iquest;Qu&eacute; permite la Plataforma de Contrataci&oacute;n del Sector P&uacute;blico, seg&uacute;n el RD Legislativo 3/2011 de contratos del sector p&uacute;blico?";
 choices[42]= new Array();
 choices[42][0] = "Permite a los empresarios elaborar las ofertas, para enviarlas al &oacute;rgano de contrataci&oacute;n";
 choices[42][1] = "Permite al estado controlar el conjunto de contratos que est&aacute;n actualmente en curso";
 choices[42][2] = "Es una base de datos en la que se incluye toda la informaci&oacute;n sobre contratos celebrados con la administraci&oacute;n a lo largo de la historia";
 choices[42][3] = "Permite a los &oacute;rganos de contrataci&oacute;n dar publicidad a sus convocatorias y resultados a trav&eacute;s de internet";
 answers[42] = choices[42][3];
 units[42] = "41";
 comments[42] = "Id Pregunta: 5589. ";


//  Id pregunta: 5591 AÃ±o de creación de pregunta: 2003-01-01
 questions[43]= "44)  &iquest;Qu&eacute; sistemas de racionalizaci&oacute;n de compras incluye el RD Legislativo 3/2011 de contratos del sector p&uacute;blico (art&iacute;culo 194)?";
 choices[43]= new Array();
 choices[43][0] = "Acuerdos marco";
 choices[43][1] = "Sistemas din&aacute;micos de adquisici&oacute;n";
 choices[43][2] = "Centrales de contrataci&oacute;n";
 choices[43][3] = "Incluye las tres anteriores";
 answers[43] = choices[43][3];
 units[43] = "41";
 comments[43] = "Id Pregunta: 5591. ";


//  Id pregunta: 5598 AÃ±o de creación de pregunta: 2003-01-01
 questions[44]= "45)  En el RD Legislativo 3/2011 de contratos del sector p&uacute;blico, los contratos de adquisici&oacute;n de programas de ordenador COTS son";
 choices[44]= new Array();
 choices[44][0] = "Contratos de servicios";
 choices[44][1] = "Contratos de licencia sw";
 choices[44][2] = "Contratos de suministro";
 choices[44][3] = "No existe tal cosa";
 answers[44] = choices[44][2];
 units[44] = "41";
 comments[44] = "Id Pregunta: 5598. ";


//  Id pregunta: 5766 AÃ±o de creación de pregunta: 2009-01-01
 questions[45]= "46)  &iquest;A cu&aacute;l de las siguientes categor&iacute;as de m&eacute;todos de ordenaci&oacute;n de alternativas pertenece el m&eacute;todo PROMETHEE?";
 choices[45]= new Array();
 choices[45][0] = "Concordancia";
 choices[45][1] = "Permutaciones";
 choices[45][2] = "Relaciones de superaci&oacute;n";
 choices[45][3] = "Ponderaci&oacute;n lineal";
 answers[45] = choices[45][2];
 units[45] = "34";
 comments[45] = "Id Pregunta: 5766. ";


//  Id pregunta: 5815 AÃ±o de creación de pregunta: 2009-01-01
 questions[46]= "47)  &iquest;Cu&aacute;l de los siguientes procedimientos de adjudicaci&oacute;n NO se contempla en el RD Legislativo 3/2011 de Contratos del Sector P&uacute;blico?";
 choices[46]= new Array();
 choices[46][0] = "Negociado";
 choices[46][1] = "Abierto";
 choices[46][2] = "Restringido";
 choices[46][3] = "Concurso";
 answers[46] = choices[46][3];
 units[46] = "41";
 comments[46] = "Id Pregunta: 5815. El concurso no es un procedimiento de adjudicaci&oacute;n.";


//  Id pregunta: 5818 AÃ±o de creación de pregunta: 2009-01-01
 questions[47]= "48)  Seg&uacute;n el RD Legislativo 3/2011 de Contratos del Sector p&uacute;blico, en su Disposici&oacute;n Adicional Decimosexta, las aplicaciones que se utilicen para efectuar las comunicaciones, notificaciones,y env&iacute;os documentales entre los licitadores y los &oacute;rganos de contrataci&oacute;n deber&aacute;n poder acreditar:";
 choices[47]= new Array();
 choices[47][0] = "La fecha y hora de su emisi&oacute;n o recepci&oacute;n,la integridad de su contenido, la confidencialidad, y el remitente y destinatario de las mismas";
 choices[47][1] = "La fecha y hora de su emisi&oacute;n o recepci&oacute;n,la integridad de su contenido y el remitente y destinatario de las mismas";
 choices[47][2] = "La fecha y hora de su recepci&oacute;n,la integridad de su contenido y el remitente de las mismas";
 choices[47][3] = "Ninguna de las anteriores es cierta";
 answers[47] = choices[47][1];
 units[47] = "41";
 comments[47] = "Id Pregunta: 5818. ";


//  Id pregunta: 5960 AÃ±o de creación de pregunta: 2010-01-01
 questions[48]= "49)  La adquisici&oacute;n de un programa de ordenador a medida se considera un contrato de:";
 choices[48]= new Array();
 choices[48][0] = "Obras";
 choices[48][1] = "Gesti&oacute;n de servicios p&uacute;blicos";
 choices[48][2] = "Servicios";
 choices[48][3] = "Suministros";
 answers[48] = choices[48][2];
 units[48] = "41";
 comments[48] = "Id Pregunta: 5960. Castilla La Mancha 2009";


//  Id pregunta: 6601 AÃ±o de creación de pregunta: 2010-01-01
 questions[49]= "50)  Un contrato de servicios de la entidad p&uacute;blica empresarial Red.es estar&aacute; sujeto a regulaci&oacute;n armonizada si su valor estimado es: ";
 choices[49]= new Array();
 choices[49][0] = "Superior a 134.000 euros";
 choices[49][1] = "Superior a 125.000";
 choices[49][2] = "Superior a 206.000";
 choices[49][3] = "Superior a 207.000 euros.";
 answers[49] = choices[49][3];
 units[49] = "41";
 comments[49] = "Id Pregunta: 6601. ";


//  Id pregunta: 6602 AÃ±o de creación de pregunta: 2010-01-01
 questions[50]= "51)  Las penalizaciones en un contrato";
 choices[50]= new Array();
 choices[50][0] = "Si son por demora imputable al contratista no se tendr&aacute;n que especificar";
 choices[50][1] = "Siempre deben estar previstas en los pliegos o el documento contractual";
 choices[50][2] = "Si son por demora imputable al contratista la imposici&oacute;n diaria ser&aacute; de 0,20&euro; por cada 100&euro; del contrato";
 choices[50][3] = "La a y la c";
 answers[50] = choices[50][0];
 units[50] = "41";
 comments[50] = "Id Pregunta: 6602. ";


//  Id pregunta: 6603 AÃ±o de creación de pregunta: 2010-01-01
 questions[51]= "52)  Indicar cual de las siguientes opciones NO es un contrato de suministro:";
 choices[51]= new Array();
 choices[51][0] = "La compra de un ERP";
 choices[51][1] = "El mantenimiento de las licencias del SGBD";
 choices[51][2] = "El mantenimiento de la aplicaci&oacute;n que usa el SGBD";
 choices[51][3] = "El alquiler del sistema de telecomunicaciones";
 answers[51] = choices[51][2];
 units[51] = "41";
 comments[51] = "Id Pregunta: 6603. ";


//  Id pregunta: 7352 AÃ±o de creación de pregunta: 2010-01-01
 questions[52]= "53)  En la teor&iacute;a de la Decisi&oacute;n Multicriterio Discreta &iquest;Cu&aacute;l de los siguientes es un m&eacute;todo de asignaci&oacute;n de pesos?";
 choices[52]= new Array();
 choices[52][0] = "Delphi";
 choices[52][1] = "Promethee";
 choices[52][2] = "Electre";
 choices[52][3] = "Qualiflex";
 answers[52] = choices[52][0];
 units[52] = "34";
 comments[52] = "Id Pregunta: 7352. NULL";


//  Id pregunta: 7353 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)  Si para un determinado criterio, el decisor establece como umbral de saciedad 50 y como nivel de satisfacci&oacute;n 10:";
 choices[53]= new Array();
 choices[53][0] = "No ser&aacute;n tenidas en cuenta las ofertas que ofrezcan menos de 50";
 choices[53][1] = "Solo ser&aacute;n tenidas en cuenta las ofertas est&eacute;n entre 10 y 50";
 choices[53][2] = "Es un criterio a minimizar";
 choices[53][3] = "Una oferta que ofrezca 50 y otra que ofrezca 60 tendr&aacute;n la misma puntuaci&oacute;n en ese criterio";
 answers[53] = choices[53][3];
 units[53] = "34";
 comments[53] = "Id Pregunta: 7353. NULL";


//  Id pregunta: 7355 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  Es un m&eacute;todo est&aacute;tico de an&aacute;lisis:";
 choices[54]= new Array();
 choices[54][0] = "Valor Actual Neto";
 choices[54][1] = "Tasa Interna de Retorno";
 choices[54][2] = "Pay-Back";
 choices[54][3] = "Delphi";
 answers[54] = choices[54][2];
 units[54] = "38";
 comments[54] = "Id Pregunta: 7355. NULL";


//  Id pregunta: 7357 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  Se&ntilde;ale la CORRECTA:";
 choices[55]= new Array();
 choices[55][0] = "Los m&eacute;todos din&aacute;micos empleados para analizar la rentabilidad de las inversiones incorporan el factor tiempo, encontraposici&oacute;n a los m&eacute;todos est&aacute;ticos, y tienen en cuenta el hecho de que los capitales tienen distinto valor en funci&oacute;ndel momento en que se generan.";
 choices[55][1] = "El VAN y el TIR son m&eacute;todos din&aacute;micos de an&aacute;lisis de rentabilidad";
 choices[55][2] = "Cuando el VAN es positivo la inversi&oacute;n es rentable";
 choices[55][3] = "Todas son CORRECTAS";
 answers[55] = choices[55][3];
 units[55] = "38";
 comments[55] = "Id Pregunta: 7357. NULL";


//  Id pregunta: 8200 AÃ±o de creación de pregunta: 2011-01-01
 questions[56]= "57)  En una valoraci&oacute;n de tres ofertas inform&aacute;ticas, nos encontramos que en un criterio a maximizar, las puntuaciones son : 5, 7 y 10. &iquest;Cu&aacute;les ser&iacute;an sus puntuaciones normalizadas por el m&eacute;todo de fracci&oacute;n del ideal?:";
 choices[56]= new Array();
 choices[56][0] = "0,5 ; 0,7 ; 1 ";
 choices[56][1] = "0,227 ; 0,318 ; 0,454 ";
 choices[56][2] = "0; 0,4; 1 ";
 choices[56][3] = "1 ; 1,4 ; 2 ";
 answers[56] = choices[56][2];
 units[56] = "41";
 comments[56] = "Id Pregunta: 8200. Examen TIC A1 2010";


//  Id pregunta: 9049 AÃ±o de creación de pregunta: 2012-01-01
 questions[57]= "58)  La ley de contratos del sector p&uacute;blico establece entre sus herramientas un recurso especial de contrataci&oacute;n, se&ntilde;ale cual de la siguientes afirmaciones es FALSA.";
 choices[57]= new Array();
 choices[57][0] = "No se puede usar en casos de tramitaci&oacute;n de emergencia";
 choices[57][1] = "Es objeto de recurso,entre otros, las adjudicaciones realizadas por poderes adjudicadores.";
 choices[57][2] = "Los contratos de suministros no sujetos a regulaci&oacute;n armonizada pueden ser recurridos con este recurso especial. ";
 choices[57][3] = "El car&aacute;cter del recurso es potestativo, es decir, no es obligatorio interponerlo";
 answers[57] = choices[57][2];
 units[57] = "41";
 comments[57] = "Id Pregunta: 9049. Art. 40 RD Legislativo 3/2011";


//  Id pregunta: 9281 AÃ±o de creación de pregunta: 2013-01-01
 questions[58]= "59)  Se&ntilde;ale la afirmaci&oacute;n FALSA sobre el Tribunal Administrativo Central de recursos contractuales";
 choices[58]= new Array();
 choices[58][0] = "Fue creado por la ley 34/2010.";
 choices[58][1] = "Est&aacute; adscrito al Ministerio de Justicia. ";
 choices[58][2] = "Conoce los recursos especiales en materia de contrataci&oacute;n.";
 choices[58][3] = "Todas son verdaderas. ";
 answers[58] = choices[58][1];
 units[58] = "41";
 comments[58] = "Id Pregunta: 9281. Est&aacute; adscrito al MINHAP";


//  Id pregunta: 9284 AÃ±o de creación de pregunta: 2013-01-01
 questions[59]= "60)  Adem&aacute;s de los pliegos, &iquest;cu&aacute;l de los siguientes documentos forma parte del expediente de contrataci&oacute;n?";
 choices[59]= new Array();
 choices[59][0] = "Certificado de la existencia de cr&eacute;dito. ";
 choices[59][1] = "Fiscalizaci&oacute;n de la intervenci&oacute;n.";
 choices[59][2] = "Aprobaci&oacute;n del gasto. ";
 choices[59][3] = "Todos los anteriores.";
 answers[59] = choices[59][3];
 units[59] = "41";
 comments[59] = "Id Pregunta: 9284. ";


//  Id pregunta: 9285 AÃ±o de creación de pregunta: 2013-01-01
 questions[60]= "61)  En los contratos de colaboraci&oacute;n entre el sector p&uacute;blico y sector privado, una Administraci&oacute;n encarga a una entidad de derecho privado la realizaci&oacute;n de una actuaci&oacute;n global, que no puede durar m&aacute;s de...";
 choices[60]= new Array();
 choices[60][0] = "10 a&ntilde;os.";
 choices[60][1] = "30 a&ntilde;os.";
 choices[60][2] = "20 a&ntilde;os.";
 choices[60][3] = "15 a&ntilde;os.";
 answers[60] = choices[60][2];
 units[60] = "41";
 comments[60] = "Id Pregunta: 9285. NULL";


//  Id pregunta: 9286 AÃ±o de creación de pregunta: 2013-01-01
 questions[61]= "62)  Se&ntilde;ale la afirmaci&oacute;n FALSA sobre el Consejo Superior de Administraci&oacute;n Electr&oacute;nica.";
 choices[61]= new Array();
 choices[61][0] = "Es un &oacute;rgano colegiado. ";
 choices[61][1] = "Supervisa la actividad del Observatorio de la Administraci&oacute;n Electr&oacute;nica.";
 choices[61][2] = "Coordina la actuaci&oacute;n administrativa en el &aacute;mbito de las TIC y dirige las contrataciones.";
 choices[61][3] = "Difunde est&aacute;ndares, como M&eacute;trica, Sicres o Magerit. ";
 answers[61] = choices[61][1];
 units[61] = "41";
 comments[61] = "Id Pregunta: 9286. ";


//  Id pregunta: 9374 AÃ±o de creación de pregunta: 2013-01-01
 questions[62]= "63)  Indique cu&aacute;l de las siguientes afirmaciones es correcta en el &aacute;mbito de la normalizaci&oacute;n de puntuaciones de la Teor&iacute;a de la Decisi&oacute;n Multicriterio Discreta:";
 choices[62]= new Array();
 choices[62][0] = "El m&eacute;todo de fracci&oacute;n del ideal y el m&eacute;todo de fracci&oacute;n del m&aacute;ximo no mantienen la proporcionalidad pre y postnormalizaci&oacute;n";
 choices[62][1] = "El m&eacute;todo de fracci&oacute;n del m&aacute;ximo y el m&eacute;todo de fracci&oacute;n de la suma no mantienen la proporcionalidad pre y postnormalizaci&oacute;n";
 choices[62][2] = "El m&eacute;todo de fracci&oacute;n del ideal no mantiene la proporcionalidad pre y postnormalizaci&oacute;n, mientras que el m&eacute;todo de fracci&oacute;n del m&aacute;ximo s&iacute; la mantiene";
 choices[62][3] = "El m&eacute;todo de fracci&oacute;n del ideal mantiene la proporcionalidad pre y postnormalizaci&oacute;n, mientras que el m&eacute;todo de fracci&oacute;n del m&aacute;ximo no la mantiene";
 answers[62] = choices[62][2];
 units[62] = "34";
 comments[62] = "Id Pregunta: 9374. ";


//  Id pregunta: 9375 AÃ±o de creación de pregunta: 2013-01-01
 questions[63]= "64)  En la Teor&iacute;a de la Decisi&oacute;n Multicreiterio Discreta, se&ntilde;ale qu&eacute; m&eacute;todo no es de asignaci&oacute;n de pesos a los criterios:";
 choices[63]= new Array();
 choices[63][0] = "DELPHI";
 choices[63][1] = "Entrop&iacute;a";
 choices[63][2] = "SAATY";
 choices[63][3] = "PROMETHEE";
 answers[63] = choices[63][3];
 units[63] = "34";
 comments[63] = "Id Pregunta: 9375. ";


//  Id pregunta: 9376 AÃ±o de creación de pregunta: 2013-01-01
 questions[64]= "65)  En la Teor&iacute;a Decisi&oacute;n Multicriterio Discreta, se&ntilde;ale qu&eacute; m&eacute;todo obtiene como resultado un subconjunto de alternativas aceptables";
 choices[64]= new Array();
 choices[64][0] = "M&eacute;todos de concordancia";
 choices[64][1] = "M&eacute;todos basados en permutaciones";
 choices[64][2] = "M&eacute;todos basados en la ponderaci&oacute;n lineal";
 choices[64][3] = "M&eacute;todo T.O.P.S.I.S.";
 answers[64] = choices[64][0];
 units[64] = "34";
 comments[64] = "Id Pregunta: 9376. ";


//  Id pregunta: 9476 AÃ±o de creación de pregunta: 2013-01-01
 questions[65]= "66)  &iquest;Cu&aacute;l de los siguientes factores de riesgo del an&aacute;lisis de rentabilidad de un proyecto no se considera en el Sector P&uacute;blico?";
 choices[65]= new Array();
 choices[65][0] = "Autoridad limitada para la toma de decisiones";
 choices[65][1] = "Presupuestos plurianuales en todos los casos";
 choices[65][2] = "M&uacute;ltiples actores involucrados";
 choices[65][3] = "Coordinaci&oacute;n entre organismos";
 answers[65] = choices[65][1];
 units[65] = "38";
 comments[65] = "Id Pregunta: 9476. ";


//  Id pregunta: 9478 AÃ±o de creación de pregunta: 2013-01-01
 questions[66]= "67)  &iquest;Cu&aacute;l de los siguientes no es un m&eacute;todo est&aacute;tico de selecci&oacute;n de inversiones?";
 choices[66]= new Array();
 choices[66][0] = "Tasa de rendimiento contable";
 choices[66][1] = "M&eacute;todo del flujo total por unidad monetaria comprometida";
 choices[66][2] = "PROMETHEE";
 choices[66][3] = "M&eacute;todo del flujo de caja medio anual por unidad monetaria comprometida";
 answers[66] = choices[66][2];
 units[66] = "38";
 comments[66] = "Id Pregunta: 9478. ";


//  Id pregunta: 9479 AÃ±o de creación de pregunta: 2013-01-01
 questions[67]= "68)  &iquest;Qu&eacute; m&eacute;todos se pueden utilizar para comparar inversiones con diferente duraci&oacute;n?";
 choices[67]= new Array();
 choices[67][0] = "M&eacute;todo de la anualidad equivalente y m&eacute;todo de la cadena de reemplazo";
 choices[67][1] = "M&eacute;todo de la anualidad equivalente y tasa de rendimiento contable";
 choices[67][2] = "M&eacute;todo de la anualidad equivalente y m&eacute;todo de comparaci&oacute;n de costes";
 choices[67][3] = "M&eacute;todo del payback y m&eacute;todo de la cadena de reemplazo";
 answers[67] = choices[67][0];
 units[67] = "38";
 comments[67] = "Id Pregunta: 9479. ";


//  Id pregunta: 9481 AÃ±o de creación de pregunta: 2013-01-01
 questions[68]= "69)  El proyecto Maber:";
 choices[68]= new Array();
 choices[68][0] = "No existe";
 choices[68][1] = "Lo llevaron a cabo los extraterrestres en 1950";
 choices[68][2] = "Es un estudio sobre el establecimiento de pautas medioambientales y ergon&oacute;micas en la adquisici&oacute;n y empleo de bienes y servicios TIC en la AGE";
 choices[68][3] = "Es un estudio sobre la rentabilidad media de los proyectpos TIC desarrollados en la AGE";
 answers[68] = choices[68][2];
 units[68] = "38";
 comments[68] = "Id Pregunta: 9481. ";


//  Id pregunta: 9644 AÃ±o de creación de pregunta: 2014-01-01
 questions[69]= "70)  Entre los &oacute;rganos de asistencia, referidos en el RD Legislativo 3/2011, no se encuentra:";
 choices[69]= new Array();
 choices[69][0] = "Jurados de concursos";
 choices[69][1] = "Mesas de contrataci&oacute;n";
 choices[69][2] = "Junta Consultiva de Contrataci&oacute;n Administrativa del Estado";
 choices[69][3] = "Ninguno de los anteriores";
 answers[69] = choices[69][2];
 units[69] = "41";
 comments[69] = "Id Pregunta: 9644. Art. 320, Art. 323 RD Legislativo 3/2011";


//  Id pregunta: 9761 AÃ±o de creación de pregunta: 2014-01-01
 questions[70]= "71)  En el &aacute;mbito del sector p&uacute;blico estatal, las solicitudes de contratos basados en el acuerdo marco o de adjudicaciones de contratos realizadas en el marco del sistema din&aacute;mico de contrataci&oacute;n se tramitar&aacute;n:";
 choices[70]= new Array();
 choices[70][0] = "De la forma tradicional o a trav&eacute;s de la aplicaci&oacute;n CONECTA-CENTRALIZACI&Oacute;N";
 choices[70][1] = "Exclusivamente, a trav&eacute;s de la aplicaci&oacute;n inform&aacute;tica CONECTA CENTRALIZACI&Oacute;N a partir del 1 de enero de 2014.";
 choices[70][2] = "Mediante solicitud por escrito a la Direcci&oacute;n General de Patrimonio.";
 choices[70][3] = "Ninguna de las anteriores.";
 answers[70] = choices[70][1];
 units[70] = "41";
 comments[70] = "Id Pregunta: 9761. EHA/1049/2008, Disposici&oacute;n adicional &uacute;nica. A&ntilde;adida por la orden HAP/19/2014";


//  Id pregunta: 9763 AÃ±o de creación de pregunta: 2014-01-01
 questions[71]= "72)  Seg&uacute;n la orden EHA/1049/2008, se declaran de contrataci&oacute;n centralizada los contratos de servicios:";
 choices[71]= new Array();
 choices[71][0] = "Los contratos de servicios dirigidos al desarrollo de la Administraci&oacute;n Electr&oacute;nica cuyo presupuesto de licitaci&oacute;n no supere 862.000 euros, I.V.A. excluido.";
 choices[71][1] = "Los contratos de servicios de telecomunicaciones.";
 choices[71][2] = "A y B son correctas.";
 choices[71][3] = "A y B son incorrectas.";
 answers[71] = choices[71][2];
 units[71] = "41";
 comments[71] = "Id Pregunta: 9763. NULL";


//  Id pregunta: 10214 AÃ±o de creación de pregunta: 2014-01-01
 questions[72]= "73)  Tres alternativas A, B y C han obtenido respectivamente las puntuaciones directas 300, 450 y 250 respecto de un criterio. Seg&uacute;n el m&eacute;todo de fracci&oacute;n del ideal, &iquest;qu&eacute; puntuaci&oacute;n normalizada corresponde a la alternativa A?";
 choices[72]= new Array();
 choices[72][0] = "0,25 puntos";
 choices[72][1] = "0,75 puntos";
 choices[72][2] = "0,33 puntos";
 choices[72][3] = "0,66 puntos";
 answers[72] = choices[72][0];
 units[72] = "34";
 comments[72] = "Id Pregunta: 10214. Puntuaci&oacute;n normalizada por factor del ideal = (puntuacion - puntuacion_min) / (puntuacion_max - puntuacion_min) = (300 - 250) / (450 - 250) = 0,25";


//  Id pregunta: 10428 AÃ±o de creación de pregunta: 2014-01-01
 questions[73]= "74)  De acuerdo con el m&eacute;todo del Valor Actual Neto, &iquest;ser&iacute;a recomendable  realizar una inversi&oacute;n en dos a&ntilde;os, con capital inicial aportado de 1 M&euro; y flujos de caja esperados de 0,1M&euro; y 0,9M&euro; en el primer y segundo a&ntilde;o de inversi&oacute;n, con un tipo de descuento del 1%? ";
 choices[73]= new Array();
 choices[73][0] = "No.";
 choices[73][1] = "No se puede deducir del enunciado";
 choices[73][2] = "Si.";
 choices[73][3] = "Debe mantenerse cuatro a&ntilde;os como m&iacute;nimo";
 answers[73] = choices[73][0];
 units[73] = "38";
 comments[73] = "Id Pregunta: 10428. Examen TIC A1 2013";


//  Id pregunta: 10595 AÃ±o de creación de pregunta: 2015-01-01
 questions[74]= "75)  La revisi&oacute;n de la solvencia t&eacute;cnica del empresario para la conservaci&oacute;n de la clasificaci&oacute;n debe realizarse:";
 choices[74]= new Array();
 choices[74][0] = "Anualmente";
 choices[74][1] = "Cada tres a&ntilde;os";
 choices[74][2] = "No es necesario revisarla mientras se mantengan las condiciones y circunstancias en que se bas&oacute; la concesi&oacute;n de la clasificaci&oacute;n.";
 choices[74][3] = "S&oacute;lo se revisa a petici&oacute;n de los interesados.";
 answers[74] = choices[74][0];
 units[74] = "41";
 comments[74] = "Id Pregunta: 10595. ";


//  Id pregunta: 10935 AÃ±o de creación de pregunta: 2015-01-01
 questions[75]= "76)  En relaci&oacute;n con la contrataci&oacute;n en materia TIC, es competencia de la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n de la AGE:";
 choices[75]= new Array();
 choices[75][0] = "Informar con car&aacute;cter facultativo la declaraci&oacute;n de contrataci&oacute;n centralizada de los contratos de suministros, obras y servicios en materia TIC.";
 choices[75][1] = "Asesorar a los &oacute;rganos competentes en materia de contrataci&oacute;n, en los criterios y directrices para la agregaci&oacute;n y planificaci&oacute;n de la demanda TIC que dichos &oacute;rganos elaboren.";
 choices[75][2] = "Realizar las actuaciones necesarias para una mayor eficiencia econ&oacute;mica, normalizando una red de clientes de cada Departamento Ministerial frente a proveedores externos.";
 choices[75][3] = "Realizar el informe t&eacute;cnico preceptivo de la memoria y los pliegos de prescripciones t&eacute;cnicas de los convenios de colaboraci&oacute;n y encomiendas de gesti&oacute;n que incluyan la prestaci&oacute;n de servicios en materia de TIC de la AGE.";
 answers[75] = choices[75][3];
 units[75] = "41";
 comments[75] = "Id Pregunta: 10935. TIC A1 AGE 2014";


//  Id pregunta: 11238 AÃ±o de creación de pregunta: 2015-01-01
 questions[76]= "77)  Entre los principios del texto refundido de la ley de contratos del sector p&uacute;blico no se encuentra:";
 choices[76]= new Array();
 choices[76][0] = "Libertad de acceso a las licitaciones.";
 choices[76][1] = "Publicidad y transparencia de los procedimientos.";
 choices[76][2] = "No discriminaci&oacute;n e igualdad de trato entre los candidatos.";
 choices[76][3] = "Mejorar la competencia.";
 answers[76] = choices[76][3];
 units[76] = "41";
 comments[76] = "Id Pregunta: 11238. ";


//  Id pregunta: 11243 AÃ±o de creación de pregunta: 2015-01-01
 questions[77]= "78)  Un contrato de colaboraci&oacute;n p&uacute;blico-privada de 134.000 euros estar&aacute; sujeto a regulaci&oacute;n armonizada.";
 choices[77]= new Array();
 choices[77][0] = "En todo caso.";
 choices[77][1] = "Depender&aacute; del umbral establecido.";
 choices[77][2] = "S&oacute;lo si es del sector p&uacute;blico estatal.";
 choices[77][3] = "Depende de que los lotes no superen los 80.00 euros.";
 answers[77] = choices[77][0];
 units[77] = "41";
 comments[77] = "Id Pregunta: 11243. ";


//  Id pregunta: 11245 AÃ±o de creación de pregunta: 2015-01-01
 questions[78]= "79)  El informe t&eacute;cnico de la DTIC:";
 choices[78]= new Array();
 choices[78][0] = "Se emitir&aacute; en un plazo m&aacute;ximo de 15 d&iacute;as.";
 choices[78][1] = "El informe ser&aacute; preceptivo para convenios, encomiendas de gesti&oacute;n, entre otros.";
 choices[78][2] = "La tramitaci&oacute;n de los informes se har&aacute; procurando el empleo de medios telem&aacute;ticos en todas las fases del procedimiento. Atendiendo especialmente a la confidencialidad e integridad en los contratos sobre defensa y seguridad comprendidos en el &aacute;mbito de la ley 24/2011.";
 choices[78][3] = "Ninguna respuesta es correcta.";
 answers[78] = choices[78][1];
 units[78] = "41";
 comments[78] = "Id Pregunta: 11245. ";


//  Id pregunta: 11248 AÃ±o de creación de pregunta: 2015-01-01
 questions[79]= "80)  Cada cuanto tiempo se revisa la solvencia de las empresas clasificadas:";
 choices[79]= new Array();
 choices[79][0] = "La solvencia econ&oacute;mica y financiera se revisa cada tres a&ntilde;os.";
 choices[79][1] = "La solvencia t&eacute;cnica cada a&ntilde;o.";
 choices[79][2] = "El plazo de c&oacute;mputo de la experiencia para la solvencia t&eacute;cnica es de cinco a&ntilde;os.";
 choices[79][3] = "Todas son verdaderas.";
 answers[79] = choices[79][2];
 units[79] = "41";
 comments[79] = "Id Pregunta: 11248. ";


//  Id pregunta: 11249 AÃ±o de creación de pregunta: 2015-01-01
 questions[80]= "81)  La inscripci&oacute;n en el ROLECE acredita la aptitud del licitador frente a los &oacute;rganos de contrataci&oacute;n de:";
 choices[80]= new Array();
 choices[80][0] = "Todo el sector p&uacute;blico estatal.";
 choices[80][1] = "Todo el sector p&uacute;blico.";
 choices[80][2] = "La Administraci&oacute;n General del Estado.";
 choices[80][3] = "La Administraci&oacute;n General del Estado y su Organismos p&uacute;blicos vinculados o dependientes.";
 answers[80] = choices[80][1];
 units[80] = "41";
 comments[80] = "Id Pregunta: 11249. ";


//  Id pregunta: 11250 AÃ±o de creación de pregunta: 2015-01-01
 questions[81]= "82)  Las garant&iacute;as en los contratos NO se:";
 choices[81]= new Array();
 choices[81][0] = "Reponen para responder ante penalizaciones o indemnizaciones.";
 choices[81][1] = "Reutilizan para cubrir necesidades de otro contrato.";
 choices[81][2] = "Reajustan ante variaciones en el precio del contrato, debido a una modificaci&oacute;n de &eacute;ste.";
 choices[81][3] = "Devuelven o cancelan cuando vence el per&iacute;odo de garant&iacute;a del contrato y &eacute;ste se ha cumplido de forma satisfactoria, o cuando se resuelve el contrato, sin que exista culpa por parte del contratista.";
 answers[81] = choices[81][1];
 units[81] = "41";
 comments[81] = "Id Pregunta: 11250. ";


//  Id pregunta: 11251 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  Los Sistemas din&aacute;micos de adquisici&oacute;n:";
 choices[82]= new Array();
 choices[82][0] = "Tienen vigencia indefinida mientras existan licitadores.";
 choices[82][1] = "La adjudicaci&oacute;n del sistema din&aacute;mico se realizar&aacute; siempre mediante procedimiento abierto.";
 choices[82][2] = "Al igual que en el acuerdo marco, ser&aacute; posible la incorporaci&oacute;n de nuevos adjudicatarios.";
 choices[82][3] = "Se valorar&aacute; positivamente el uso de medios TIC.";
 answers[82] = choices[82][1];
 units[82] = "41";
 comments[82] = "Id Pregunta: 11251. ";


//  Id pregunta: 11308 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  Cu&aacute;l de los siguientes &oacute;rganos no es un &oacute;rgano de contrataci&oacute;n en el &aacute;mbito de un ministerio.";
 choices[83]= new Array();
 choices[83][0] = "Ministro";
 choices[83][1] = "Secretario de Estado.";
 choices[83][2] = "Junta de Contrataci&oacute;n.";
 choices[83][3] = "Mesa de Contrataci&oacute;n.";
 answers[83] = choices[83][3];
 units[83] = "41";
 comments[83] = "Id Pregunta: 11308. La Mesa de Contrataci&oacute;n es un &oacute;rgano de asistencia.";


//  Id pregunta: 11337 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  Cu&aacute;l de los siguientes es un m&eacute;todo din&aacute;mico de rentabilidad de inversiones";
 choices[84]= new Array();
 choices[84][0] = "Tasa de rendimiento contable";
 choices[84][1] = "&Iacute;ndice de rentabilidad";
 choices[84][2] = "Rentabilidad media";
 choices[84][3] = "Pay-back";
 answers[84] = choices[84][1];
 units[84] = "38";
 comments[84] = "Id Pregunta: 11337. ";


//  Id pregunta: 11494 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  &iquest;Cu&aacute;l de los siguientes aspectos NO debe figurar en un Pliego de Cl&aacute;usulas Administrativas particulares que se establezca para un contrato de Tecnolog&iacute;as de la Informaci&oacute;n?";
 choices[85]= new Array();
 choices[85][0] = "El Plazo para la ejecuci&oacute;n del contrato.";
 choices[85][1] = "Los criterios para la adjudicaci&oacute;n del contrato.";
 choices[85][2] = "El modelo de referencia para las funciones inform&aacute;ticas.";
 choices[85][3] = "Deben figurar todos los aspectos anteriores.";
 answers[85] = choices[85][2];
 units[85] = "41";
 comments[85] = "Id Pregunta: 11494. NULL";


//  Id pregunta: 11495 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  Seg&uacute;n la Ley de Contratos del Sector P&uacute;blico (L.C.S.P.), la adquisici&oacute;n de una licencia mediante la que se cede el derecho de uso de un programa de ordenador tiene la categor&iacute;a de:";
 choices[86]= new Array();
 choices[86][0] = "Contrato de Suministros.";
 choices[86][1] = "Contrato de Arrendamiento.";
 choices[86][2] = "Contrato de Servicios.";
 choices[86][3] = "Contrato de &quot;leasing&quot; o de &quot;renting&quot;";
 answers[86] = choices[86][0];
 units[86] = "41";
 comments[86] = "Id Pregunta: 11495. NULL";


//  Id pregunta: 11497 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  &iquest;En qu&eacute; casos puede sustituirse el requisito de solvencia por el de clasifiaci&oacute;n?";
 choices[87]= new Array();
 choices[87][0] = "Contratos de obras cuyo valor estimado sea igual o superior a 500.000 &euro;.";
 choices[87][1] = "Contratos de servicios cuyo valor estimado sea igual o superior a 200.000 &euro;.";
 choices[87][2] = "En los 2 casos anteriores.";
 choices[87][3] = "En ninguno de los casos anteriores.";
 answers[87] = choices[87][2];
 units[87] = "38";
 comments[87] = "Id Pregunta: 11497. NULL";


//  Id pregunta: 11588 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  Los contratos de servicios de los organismos aut&oacute;nomos se encuentran sujetos a regulaci&oacute;n armonizada cuando su importe es igual o superior a:";
 choices[88]= new Array();
 choices[88][0] = "50000";
 choices[88][1] = "134000";
 choices[88][2] = "207000";
 choices[88][3] = "862000";
 answers[88] = choices[88][1];
 units[88] = "41";
 comments[88] = "Id Pregunta: 11588. ";


//  Id pregunta: 11589 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  Seg&uacute;n el Real Decreto Legislativo 3/2011, para una tramitaci&oacute;n de emergencia el plazo de inicio de la ejecuci&oacute;n no podr&aacute; ser superior a:";
 choices[89]= new Array();
 choices[89][0] = "10 d&iacute;as h&aacute;biles";
 choices[89][1] = "15 d&iacute;as h&aacute;biles";
 choices[89][2] = "15 d&iacute;as naturales";
 choices[89][3] = "1 mes";
 answers[89] = choices[89][3];
 units[89] = "41";
 comments[89] = "Id Pregunta: 11589. ";


//  Id pregunta: 11746 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  &iquest;En qu&eacute; medida las entidades privadas tienen que cumplir la Ley de Transparencia?";
 choices[90]= new Array();
 choices[90][0] = "Las entidades privadas que perciban durante el per&iacute;odo de un a&ntilde;o ayudas o subvenciones p&uacute;blicas en una cuant&iacute;a superior a&nbsp;150.000 euros";
 choices[90][1] = "cuando al menos el&nbsp;40?% del total de sus ingresos anuales tengan car&aacute;cter de ayuda o subvenci&oacute;n p&uacute;blica, siempre que alcancen como m&iacute;nimo la cantidad de&nbsp;5.000 euros.";
 choices[90][2] = "No tienen que cumplir la ley de transparencia";
 choices[90][3] = "las cumplir&aacute;n sin ninguna limitaci&oacute;n";
 answers[90] = choices[90][1];
 units[90] = "41";
 comments[90] = "Id Pregunta: 11746. ";


//  Id pregunta: 11747 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;Cu&aacute;l de los siguientes responsables no forma parte de la Comisi&oacute;n de Transparencia y Buen Gobierno?:";
 choices[91]= new Array();
 choices[91][0] = "representante del Tribunal de Cuentas";
 choices[91][1] = "representante de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos";
 choices[91][2] = "representante de la Agencia Estatal de la Administraci&oacute;n del Estado";
 choices[91][3] = "representante de la Autoridad Independiente de Responsabilidad Fiscal";
 answers[91] = choices[91][2];
 units[91] = "41";
 comments[91] = "Id Pregunta: 11747. ";


//  Id pregunta: 11751 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  La competencia para la imposici&oacute;n de sanciones seg&uacute;n la Ley de Transparencia,  corresponder&aacute;:";
 choices[92]= new Array();
 choices[92][0] = "Al Ministro de Hacienda y Administraciones P&uacute;blicas cuando el responsable sea un alto cargo de las Administraciones Publicas.";
 choices[92][1] = "Al Consejo de Ministros cuando el alto cargo tenga la condici&oacute;n de miembro del Gobierno o Secretario de Estado.";
 choices[92][2] = "Al Consejo de Ministros cuando el responsable sea un alto cargo de la Administraci&oacute;n General del Estado.";
 choices[92][3] = "Al Ministro de Hacienda y Administraciones P&uacute;blicas cuando el alto cargo tenga la condici&oacute;n de miembro del Gobierno o Secretario de Estado.";
 answers[92] = choices[92][1];
 units[92] = "41";
 comments[92] = "Id Pregunta: 11751. ";


//  Id pregunta: 11767 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Mediante qu&eacute; procedimiento su pueden adjudicar los acuerdos marco?";
 choices[93]= new Array();
 choices[93][0] = "Solo por procedimiento negociado";
 choices[93][1] = "Solo por procedimiento restringido";
 choices[93][2] = "Solo por procedimiento abierto";
 choices[93][3] = "Por procedimiento abierto, restringido o negociado&nbsp;";
 answers[93] = choices[93][3];
 units[93] = "41";
 comments[93] = "Id Pregunta: 11767. ";


//  Id pregunta: 11768 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l es la duraci&oacute;n m&aacute;xima que la ley permite a los acuerdos marco?";
 choices[94]= new Array();
 choices[94][0] = "2 a&ntilde;os";
 choices[94][1] = "1 a&ntilde;o";
 choices[94][2] = "4 a&ntilde;os";
 choices[94][3] = "3 a&ntilde;os";
 answers[94] = choices[94][2];
 units[94] = "41";
 comments[94] = "Id Pregunta: 11768. ";


//  Id pregunta: 11769 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  El contrato &quot;servicios consolidados de telecomunicaciones de la Administraci&oacute;n General del Estado, fase 1&quot;&hellip; Seleccione la verdadera:";
 choices[95]= new Array();
 choices[95][0] = "participan todos los Ministerios";
 choices[95][1] = "incluye tarifa plana para todos los servicios demandados&nbsp;";
 choices[95][2] = "supone un ahorro superior a los 124 millones de euros en 4 a&ntilde;os";
 choices[95][3] = "incluye todos los servicios de los anteriores contratos de sus participantes";
 answers[95] = choices[95][2];
 units[95] = "41";
 comments[95] = "Id Pregunta: 11769. ";


//  Id pregunta: 11771 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Las especificaciones t&eacute;cnicas de un pliego de prescripciones";
 choices[96]= new Array();
 choices[96][0] = "deben permitir descartar ciertas empresas o productos con los que no se han tenido buenas experiencias";
 choices[96][1] = "todas son falsas&nbsp;";
 choices[96][2] = "deben hacer referencia a la fabricaci&oacute;n o procedencia determinada del producto o servicio";
 choices[96][3] = "deben hacer referencia a la marca de mayor calidad del producto o servicio";
 answers[96] = choices[96][1];
 units[96] = "41";
 comments[96] = "Id Pregunta: 11771. ";


//  Id pregunta: 11772 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Cu&aacute;l de las siguientes circunstancias da lugar necesariamente a la resoluci&oacute;n de un&nbsp;contrato?";
 choices[97]= new Array();
 choices[97][0] = "Ninguna de las anteriores es correcta";
 choices[97][1] = "La apertura de la fase de liquidaci&oacute;n en caso de concurso de acreedores&nbsp;";
 choices[97][2] = "la declaraci&oacute;n de concurso";
 choices[97][3] = "la demora de la Administraci&oacute;n en el pago superior a 6 meses";
 answers[97] = choices[97][1];
 units[97] = "41";
 comments[97] = "Id Pregunta: 11772. ";


//  Id pregunta: 11774 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;C&oacute;mo se llama la unidad encargada de la contrataci&oacute;n centralizada en el &aacute;mbito de la Administraci&oacute;n General del Estado?";
 choices[98]= new Array();
 choices[98][0] = "Subdirecci&oacute;n General de Compras";
 choices[98][1] = "Central de Compras Estatal";
 choices[98][2] = "Direcci&oacute;n General de Racionalizaci&oacute;n y Centralizaci&oacute;n de la Contrataci&oacute;n&nbsp;";
 choices[98][3] = "Direcci&oacute;n General de Patrimonio del Estado";
 answers[98] = choices[98][2];
 units[98] = "41, 24";
 comments[98] = "Id Pregunta: 11774. ";


//  Id pregunta: 11777 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Es siempre necesario acudir a una nueva licitaci&oacute;n para adjudicar los contratos basados en un acuerdo marco?";
 choices[99]= new Array();
 choices[99][0] = "No, solo cuando no todos los t&eacute;rminos del acuerdo est&aacute;n definidos&nbsp;";
 choices[99][1] = "S&iacute;, siempre se debe acudir a una nueva licitaci&oacute;n";
 choices[99][2] = "La ley proh&iacute;be expresamente acudir a una nueva licitaci&oacute;n";
 choices[99][3] = "Depende de lo que establezca el pliego del acuerdo marco";
 answers[99] = choices[99][0];
 units[99] = "41";
 comments[99] = "Id Pregunta: 11777. ";


