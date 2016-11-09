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

//  Id pregunta: 1274 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  Los lenguajes de cuarta generaci&oacute;n:";
 choices[0]= new Array();
 choices[0][0] = "Necesitan menos recursos que los de generaciones anteriores.";
 choices[0][1] = "Necesitan m&aacute;s recursos que los de generaciones  anteriores.";
 choices[0][2] = "Tienen un tiempo de respuesta generalmente superior a los lenguajes de generaciones anteriores.";
 choices[0][3] = "Son ciertas las respuestas &lsquo;b&rsquo; y &lsquo;c&rsquo;.";
 answers[0] = choices[0][3];
 units[0] = "91";
 comments[0] = "Id Pregunta: 1274. NULL";


//  Id pregunta: 2006 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  Sobre el m&eacute;todo de los puntos de funci&oacute;n puede decirse que:";
 choices[1]= new Array();
 choices[1][0] = "se basa en el n&uacute;mero de l&iacute;neas de c&oacute;digo";
 choices[1][1] = "es independiente del c&oacute;digo";
 choices[1][2] = "es una m&eacute;trica de complejidad";
 choices[1][3] = "es una m&eacute;trica de fiabilidad";
 answers[1] = choices[1][1];
 units[1] = "89";
 comments[1] = "Id Pregunta: 2006. Similar a examen TIC MAP A 2004";


//  Id pregunta: 2011 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  La complejidad  ciclom&aacute;tica de un grafo con 5 nodos y 7 aristas es:";
 choices[2]= new Array();
 choices[2][0] = "3";
 choices[2][1] = "4";
 choices[2][2] = "5";
 choices[2][3] = "6";
 answers[2] = choices[2][1];
 units[2] = "88";
 comments[2] = "Id Pregunta: 2011. Similar a examen TIC SS A 2004. Complejidad McCabe = aristas - nodos + 2";


//  Id pregunta: 2020 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  En relaci&oacute;n con la &quot;reingenier&iacute;a de sistemas&quot; indique cu&aacute;l de las siguientes afirmaciones no es correcta:";
 choices[3]= new Array();
 choices[3][0] = "La reingenier&iacute;a es la mejora de los sistemas existentes de modo que la inversi&oacute;n resulte muy rentable, independientemente de que dicha mejora pueda ser obtenida con un nuevo desarrollo.";
 choices[3][1] = "La reingenier&iacute;a debe tener bajo coste, hacerse en poco tiempo, tener poco riesgo y dar un valor a&ntilde;adido.";
 choices[3][2] = "La reingener&iacute;a trabaja todos los niveles de abstracci&oacute;n, desde la implementaci&oacute;n hasta el dise&ntilde;o.";
 choices[3][3] = "La reingenier&iacute;a que s&oacute;lo requiere el conocimiento de los interfaces de sistema se llama ingenier&iacute;a inversa o modernizaci&oacute;n de caja blanca.";
 answers[3] = choices[3][3];
 units[3] = "91";
 comments[3] = "Id Pregunta: 2020. Examen TIC MAP B 2004";


//  Id pregunta: 2072 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  &iquest;Cu&aacute;l de estos elementos no forma parte de EFQM?";
 choices[4]= new Array();
 choices[4][0] = "Liderazgo";
 choices[4][1] = "Resultados Empresariales";
 choices[4][2] = "Pol&iacute;ticas y estrategias";
 choices[4][3] = "Valor de las acciones";
 answers[4] = choices[4][3];
 units[4] = "92";
 comments[4] = "Id Pregunta: 2072. NULL";


//  Id pregunta: 2114 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;A qu&eacute; se refieren las normas ISO 14000?";
 choices[5]= new Array();
 choices[5][0] = "A la calidad en los procesos productivos";
 choices[5][1] = "A la preservaci&oacute;n del medio ambiente en los procesos productivos";
 choices[5][2] = "A la documentaci&oacute;n del SW en las distintas etapas de un modelo en cascada";
 choices[5][3] = "A la ergonom&iacute;a de los puestos de trabajo";
 answers[5] = choices[5][1];
 units[5] = "92";
 comments[5] = "Id Pregunta: 2114. NULL";


//  Id pregunta: 2128 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto al modelo EFQM?";
 choices[6]= new Array();
 choices[6][0] = "El modelo clasifica los 9 elementos en agentes y resultados";
 choices[6][1] = "La satisfacci&oacute;n del personal es uno de los agentes";
 choices[6][2] = "Los resultados econ&oacute;micos se encuentran entre los resultados";
 choices[6][3] = "La gesti&oacute;n de personal es uno de los agentes";
 answers[6] = choices[6][1];
 units[6] = "92";
 comments[6] = "Id Pregunta: 2128. NULL";


//  Id pregunta: 2144 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l de los siguientes elementos forma parte del 'bloque instrumental' del PGGC aplicable al desarrollo de equipos l&oacute;gicos del CSI?:";
 choices[7]= new Array();
 choices[7][0] = "Gu&iacute;a metodol&oacute;gica para la elaboraci&oacute;n de planes de garant&iacute;a de calidad";
 choices[7][1] = "Esquema formal para la clasificaci&oacute;n de proyectos inform&aacute;ticos";
 choices[7][2] = "Procedimiento de control de calidad";
 choices[7][3] = "Todos los elementos anteriores son v&aacute;lidos";
 answers[7] = choices[7][2];
 units[7] = "88";
 comments[7] = "Id Pregunta: 2144. ";


//  Id pregunta: 2153 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Cu&aacute;l de los siguientes no es un instrumento de control contemplado por el Plan General de Garant&iacute;a de Calidad?:";
 choices[8]= new Array();
 choices[8][0] = "Revisiones t&eacute;cnicas formales";
 choices[8][1] = "Guiones de recomendaciones";
 choices[8][2] = "Listas de control";
 choices[8][3] = "Las tres anteriores son instrumentos de control contemplados por el PGGC";
 answers[8] = choices[8][0];
 units[8] = "88";
 comments[8] = "Id Pregunta: 2153. ";


//  Id pregunta: 2161 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  Indicar la afirmaci&oacute;n falsa acerca del coste de la calidad:";
 choices[9]= new Array();
 choices[9][0] = "El coste total se descompone en: coste de la calidad, coste de la no calidad y costes fijos";
 choices[9][1] = "El coste de la calidad viene dado por el sumatorio de lo que se invierte en prevenci&oacute;n, verificaci&oacute;n y validaci&oacute;n";
 choices[9][2] = "El coste de la no calidad viene dado por el sumatorio de lo que se invierte en fallos internos y fallos externos";
 choices[9][3] = " Como f&oacute;rmula general que determine el inter&eacute;s de la inversi&oacute;n se debe controlar el cumplimiento constante de: gastos en calidad &lt; gastos de la no calidad";
 answers[9] = choices[9][0];
 units[9] = "88";
 comments[9] = "Id Pregunta: 2161. ";


//  Id pregunta: 2197 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;En cu&aacute;l de los siguientes grupos de m&eacute;tricas del software se debe encuadrar el modelo de An&aacute;lisis de Puntos de Funci&oacute;n?:";
 choices[10]= new Array();
 choices[10][0] = "M&eacute;tricas de complejidad";
 choices[10][1] = "M&eacute;tricas de productividad";
 choices[10][2] = "M&eacute;tricas de calidad";
 choices[10][3] = "M&eacute;tricas de riesgo";
 answers[10] = choices[10][1];
 units[10] = "89";
 comments[10] = "Id Pregunta: 2197. NULL";


//  Id pregunta: 2198 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;En qu&eacute; consiste la teor&iacute;a de la Productividad aplicada a la implantaci&oacute;n de la calidad?:";
 choices[11]= new Array();
 choices[11][0] = "Un producto de calidad es m&aacute;s caro de producir";
 choices[11][1] = "Un producto de calidad es m&aacute;s dif&iacute;cil de producir";
 choices[11][2] = "Un producto de calidad es m&aacute;s r&aacute;pido de producir";
 choices[11][3] = "Un producto de calidad es m&aacute;s barato de producir";
 answers[11] = choices[11][3];
 units[11] = "88";
 comments[11] = "Id Pregunta: 2198. NULL";


//  Id pregunta: 2229 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Al aplicar COCOMO, la diferencia de usar Ensamblador o usar Pascal ser&aacute;:";
 choices[12]= new Array();
 choices[12][0] = "Ensamblador va a resultar m&aacute;s complicado para evaluar COCOMO";
 choices[12][1] = "Pascal ser&aacute; de m&aacute;s nivel que ensamblador";
 choices[12][2] = "Pascal ser&aacute; de menos nivel que ensamblador";
 choices[12][3] = "Da lo mismo usar un lenguaje que otro";
 answers[12] = choices[12][1];
 units[12] = "89";
 comments[12] = "Id Pregunta: 2229. NULL";


//  Id pregunta: 2230 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Al esfuerzo requeriddo para transferir un programa desde una cierta configuraci&oacute;n hardware o entorno operativo a otro se llama:";
 choices[13]= new Array();
 choices[13][0] = "Portabilidad";
 choices[13][1] = "Reusabilidad";
 choices[13][2] = "Interoperatividad";
 choices[13][3] = "Mantenibilidad";
 answers[13] = choices[13][0];
 units[13] = "89";
 comments[13] = "Id Pregunta: 2230. NULL";


//  Id pregunta: 2231 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  Al esfuerzo requerido para conectar un sistema con otro se llama:";
 choices[14]= new Array();
 choices[14][0] = "Portabilidad";
 choices[14][1] = "Reusabilidad";
 choices[14][2] = "Interoperatividad";
 choices[14][3] = "Mantenibilidad";
 answers[14] = choices[14][2];
 units[14] = "88";
 comments[14] = "Id Pregunta: 2231. ";


//  Id pregunta: 2248 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  Dentro de la m&eacute;trica de los factores de calidad, indicar la afirmaci&oacute;n falsa:";
 choices[15]= new Array();
 choices[15][0] = "Las m&eacute;tricas, son medidas cuantitativas del grado que tiene el software de un atributo dado";
 choices[15][1] = "Los criterios, son aquellos elementos internos o de los realizadores, relativos a la forma y estructura de programas, datos y documentos";
 choices[15][2] = "Los factores, son aqu&eacute;llos elementos externos o del usuario, relativos al comportamiento actual del software, su facilidad de cambio, y a su facilidad de conversi&oacute;n";
 choices[15][3] = "La relaci&oacute;n existente entre los tres grupos es: una vez definidos los criterios a medir, los factores sirven para cuantificar dichos criterios, y posteriormente la valoraci&oacute;n cuantitativa de los factores se lleva a cabo mediante la utilizaci&oacute;n de m&eacute;tricas";
 answers[15] = choices[15][3];
 units[15] = "88";
 comments[15] = "Id Pregunta: 2248. ";


//  Id pregunta: 2267 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  El criterio 7 en el modelo EFQM de excelencia es el referente a:";
 choices[16]= new Array();
 choices[16][0] = "Las alianzas y los recursos";
 choices[16][1] = "Los procesos";
 choices[16][2] = "Los resultados en la sociedad";
 choices[16][3] = "Los resultados en los clientes";
 answers[16] = choices[16][3];
 units[16] = "92";
 comments[16] = "Id Pregunta: 2267. NULL";


//  Id pregunta: 2293 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  El modo org&aacute;nico de aplicar los modelos de COCOMO considera:";
 choices[17]= new Array();
 choices[17][0] = "Proyectos peque&ntilde;os";
 choices[17][1] = "Proyectos de complejidad media";
 choices[17][2] = "Proyectos de complejidad alta";
 choices[17][3] = "Proyectos que deben desarrollarse dentro de un hardware y software estricto y con restricciones operativas";
 answers[17] = choices[17][0];
 units[17] = "89";
 comments[17] = "Id Pregunta: 2293. NULL";


//  Id pregunta: 2296 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  El PGGC aplicable al desarrollo de equipos l&oacute;gicos del CSI existen los siguientes procedimientos de control de calidad:";
 choices[18]= new Array();
 choices[18][0] = "Revisiones, pruebas y procedimientos extraordinarios";
 choices[18][1] = "Revisiones, pruebas e inspecciones detalladas";
 choices[18][2] = "Revisiones, pruebas, procedimientos extraordinarios y procedimientos particulares";
 choices[18][3] = "Todas las respuestas anteriores son falsas";
 answers[18] = choices[18][2];
 units[18] = "88";
 comments[18] = "Id Pregunta: 2296. ";


//  Id pregunta: 2354 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  Entre las causas m&aacute;s habituales que provocan el descontento de los usuarios respecto de los productos de software obtenidos tenemos:";
 choices[19]= new Array();
 choices[19][0] = "Mantenimiento permanente.";
 choices[19][1] = "Coste cerrado del producto.";
 choices[19][2] = "Necesidades no satisfechas por la dificultad del producto para adaptarse a otros requerimientos.";
 choices[19][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;c&rsquo; son correctas.";
 answers[19] = choices[19][2];
 units[19] = "91";
 comments[19] = "Id Pregunta: 2354. ";


//  Id pregunta: 2371 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Es cierto decir que la &quot;reingenier&iacute;a&quot;:";
 choices[20]= new Array();
 choices[20][0] = "Suele usarse para ampliar la vida &uacute;til de un sistema.";
 choices[20][1] = "Es una ingenier&iacute;a inversa hecha con herramientas de asistencia computerizada.";
 choices[20][2] = "No tiene sentido si se hace usando tecnolog&iacute;a de objetos, que por definici&oacute;n son reutilizables.";
 choices[20][3] = "S&oacute;lo se usa cuando se encuentran fallos de funcionalidad.";
 answers[20] = choices[20][0];
 units[20] = "91";
 comments[20] = "Id Pregunta: 2371. ";


//  Id pregunta: 2372 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  Es falso decir que EDIM utiliza entre otras t&eacute;cnicas:";
 choices[21]= new Array();
 choices[21][0] = "METRICA";
 choices[21][1] = "COCOMO";
 choices[21][2] = "Function Point Analysis";
 choices[21][3] = "Early Specification ForMethod";
 answers[21] = choices[21][0];
 units[21] = "89";
 comments[21] = "Id Pregunta: 2372. NULL";


//  Id pregunta: 2396 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  La integraci&oacute;n de un conjunto de bases de datos aisladas en un entorno cliente / servidor, con un potente servidor de bases de datos, es un ejemplo t&iacute;pico de:";
 choices[22]= new Array();
 choices[22][0] = "Downsizing.";
 choices[22][1] = "Outsourcing.";
 choices[22][2] = "Arquitectura centralizada.";
 choices[22][3] = "Upsizing.";
 answers[22] = choices[22][3];
 units[22] = "90";
 comments[22] = "Id Pregunta: 2396. ";


//  Id pregunta: 2435 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  La t&eacute;cnica Halstead usa:";
 choices[23]= new Array();
 choices[23][0] = "El n&uacute;mero de operandos distintos de un programa";
 choices[23][1] = "La longitud de un programa";
 choices[23][2] = "El tiempo de ejecuci&oacute;n &oacute;ptimo";
 choices[23][3] = "No existe";
 answers[23] = choices[23][0];
 units[23] = "88";
 comments[23] = "Id Pregunta: 2435. NULL";


//  Id pregunta: 2453 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Los criterios asociados al factor de calidad 'correcci&oacute;n':";
 choices[24]= new Array();
 choices[24][0] = "Modularidad, Independencia de los entornos";
 choices[24][1] = "Coherencia, concisi&oacute;n";
 choices[24][2] = "Trazabilidad, integridad, coherencia";
 choices[24][3] = "Precisi&oacute;n, tolerancia a errores, simplicidad";
 answers[24] = choices[24][2];
 units[24] = "88";
 comments[24] = "Id Pregunta: 2453. ";


//  Id pregunta: 2478 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Por configuraci&oacute;n se entiende:";
 choices[25]= new Array();
 choices[25][0] = "Actividad que tiene por objeto la evaluaci&oacute;n de conformidad de dise&ntilde;os, productos software, procesos o sistema.";
 choices[25][1] = "Proceso por el que el sistema de calidad de una empresa es auditado para comprobar el cumplimiento de determinadas normas.";
 choices[25][2] = "Descripci&oacute;n completa de un producto software y las interrelaciones de sus elementos.";
 choices[25][3] = "Proceso de determinaci&oacute;n de correcci&oacute;n de los  productos de una fase de desarrollo con respecto a los requisitos establecidos en la fase anterior.";
 answers[25] = choices[25][2];
 units[25] = "90";
 comments[25] = "Id Pregunta: 2478. ";


//  Id pregunta: 2479 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  Por sistema de garant&iacute;a de calidad se entiende:";
 choices[26]= new Array();
 choices[26][0] = "Actividad que tiene por objeto la evaluaci&oacute;n de conformidad de dise&ntilde;os, productos software, procesos o sistema";
 choices[26][1] = "Proceso por el que el sistema de calidad de una empresa es auditado para comprobar el cumplimiento de determinadas normas";
 choices[26][2] = "Estructura organizativa, procedimientos, actividades, capacidades y recursos que juntos aseguran que los productos software satisfacen las necesidades impl&iacute;citas o establecidas en contrato por los clientes";
 choices[26][3] = "Proceso de determinaci&oacute;n de correcci&oacute;n de los  productos de una fase de desarrollo con respecto a los requisitos establecidos en la fase anterior";
 answers[26] = choices[26][2];
 units[26] = "87";
 comments[26] = "Id Pregunta: 2479. NULL";


//  Id pregunta: 2562 AÃ±o de creación de pregunta: 2004-01-01
 questions[27]= "28)  &iquest;Qu&eacute; significa que una Organizaci&oacute;n esta en el Nivel 2 del CMM?";
 choices[27]= new Array();
 choices[27][0] = "En este nivel se logran establecer las pol&iacute;ticas para adminsitrar un proyecto de software y los procedimientos para lograrlo, esto se realiza en base a la experiencia obtenida en proyectos similares.";
 choices[27][1] = "En este nivel, el proceso est&aacute;ndar para el desarrollo y mantenimiento de software se documenta, tanto desde el punto de vista t&eacute;cnico como administrativo. Se explotan efectivamente pr&aacute;cticas de ingenier&iacute;a de software para estandarizar los procesos.";
 choices[27][2] = "Todas son correctas";
 choices[27][3] = "En este nivel la empresa carece de buenas pr&aacute;cticas de ingenier&iacute;a de software, ni existe una planeaci&oacute;n efectiva. Los proyectos generalmente abandonan los planes realizados en etapas de crisis.";
 answers[27] = choices[27][0];
 units[27] = "87,88,92";
 comments[27] = "Id Pregunta: 2562. ";


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


//  Id pregunta: 2574 AÃ±o de creación de pregunta: 2004-01-01
 questions[29]= "30)  En la calidad del Software basandonos en el coste de implantaci&oacute;n, la Teor&iacute;a de la Calidad/Coste dice:";
 choices[29]= new Array();
 choices[29][0] = "El coste de producci&oacute;n aumenta exponencialmente con el aumento de calidad";
 choices[29][1] = "Un producto de calidad es mas barato de producir; el coste disminuye exponencialmente con el aumento de la calidad";
 choices[29][2] = "El coste es constante e independiente de la calidad del producto";
 choices[29][3] = "Ninguna de ellas";
 answers[29] = choices[29][0];
 units[29] = "87,88,92";
 comments[29] = "Id Pregunta: 2574. ";


//  Id pregunta: 2575 AÃ±o de creación de pregunta: 2004-01-01
 questions[30]= "31)  &iquest;Que definici&oacute;n de las siguientes se ajusta m&aacute;s al concepto de Downsizing?";
 choices[30]= new Array();
 choices[30][0] = "Descarga y migraci&oacute;n selectiva de aplicaciones.";
 choices[30][1] = "Migraci&oacute;n de aquellas aplicaciones personales o departamentales cuya informaci&oacute;n es relevante para toda la organizaci&oacute;n y que deben ser dispuestas para su acceso global.";
 choices[30][2] = "Todas son ciertas.";
 choices[30][3] = "Migraci&oacute;n de aplicaciones desde el gran ordenador principal a m&aacute;quinas mucho menores.";
 answers[30] = choices[30][3];
 units[30] = "90";
 comments[30] = "Id Pregunta: 2575. ";


//  Id pregunta: 2619 AÃ±o de creación de pregunta: 2003-01-01
 questions[31]= "32)  &iquest;Cu&aacute;l es la complejidad ciclom&aacute;tica de un grafo de  11 aristas y 9 nodos?";
 choices[31]= new Array();
 choices[31][0] = "6";
 choices[31][1] = "12";
 choices[31][2] = "8";
 choices[31][3] = "4";
 answers[31] = choices[31][3];
 units[31] = "88";
 comments[31] = "Id Pregunta: 2619. NULL";


//  Id pregunta: 2620 AÃ±o de creación de pregunta: 2003-01-01
 questions[32]= "33)  &iquest;Cu&aacute;l no es un factor de calidad seg&uacute;n Mc Call?";
 choices[32]= new Array();
 choices[32][0] = "Fiabilidad";
 choices[32][1] = "Coste ";
 choices[32][2] = "Facilidad de mantenimiento";
 choices[32][3] = "Seguridad";
 answers[32] = choices[32][1];
 units[32] = "87,88,92";
 comments[32] = "Id Pregunta: 2620. ";


//  Id pregunta: 2621 AÃ±o de creación de pregunta: 2003-01-01
 questions[33]= "34)  &iquest;C&uacute;al NO es un factor de McCall de revisi&oacute;n?";
 choices[33]= new Array();
 choices[33][0] = "Flexibilidad";
 choices[33][1] = "Usabilidad ";
 choices[33][2] = "Verificabilidad";
 choices[33][3] = "Mantenibilidad";
 answers[33] = choices[33][1];
 units[33] = "87,88,92";
 comments[33] = "Id Pregunta: 2621. ";


//  Id pregunta: 2654 AÃ±o de creación de pregunta: 2003-01-01
 questions[34]= "35)  La t&eacute;cnica de puntos de funci&oacute;n es una t&eacute;cnica para determinar";
 choices[34]= new Array();
 choices[34][0] = "La magnitud de un proyecto inform&aacute;tico y su probable coste";
 choices[34][1] = "La calidad de una aplicaci&oacute;n SW y la tase de errores prevista";
 choices[34][2] = "La amigabilidad de un interfaz y la previsi&oacute;n de errores de usuario ";
 choices[34][3] = "La seguridad de una aplicaci&oacute;n y su riesgo de intrusi&oacute;n";
 answers[34] = choices[34][0];
 units[34] = "89";
 comments[34] = "Id Pregunta: 2654. NULL";


//  Id pregunta: 2804 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  El conjunto de tareas a realizar para asegurar la calidad de un producto software se conoce como:";
 choices[35]= new Array();
 choices[35][0] = "Control de Calidad";
 choices[35][1] = "Modelo de Calidad";
 choices[35][2] = "Plan General de Calidad";
 choices[35][3] = "Garant&iacute;a de Calidad";
 answers[35] = choices[35][3];
 units[35] = "87";
 comments[35] = "Id Pregunta: 2804. NULL";


//  Id pregunta: 2806 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  En el control de calidad del SW se consideran m&eacute;todos de an&aacute;lisis est&aacute;ticos";
 choices[36]= new Array();
 choices[36][0] = "Las Auditor&iacute;as";
 choices[36][1] = "Las Auditor&iacute;as y revisiones";
 choices[36][2] = "La Verificaci&oacute;n formal ";
 choices[36][3] = "Todos son m&eacute;todos de an&aacute;lisis est&aacute;ticos";
 answers[36] = choices[36][3];
 units[36] = "87";
 comments[36] = "Id Pregunta: 2806. NULL";


//  Id pregunta: 2809 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  Los criterios relacionados con la Reusabilidad son:";
 choices[37]= new Array();
 choices[37][0] = "Generalidad, Modularidad, Autodescriptivo, Independencia entornos HW y SW.";
 choices[37][1] = "Expandibilidad, Generalidad, Autodescriptivo, Modularidad.";
 choices[37][2] = "Generalidad, Modularidad, Autodescriptivo, Simplicidad.";
 choices[37][3] = "Expandibilidad, Generalidad, Autodescriptivo, Instrumentaci&oacute;n.";
 answers[37] = choices[37][0];
 units[37] = "88";
 comments[37] = "Id Pregunta: 2809. NULL";


//  Id pregunta: 2816 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  Las tres versiones del modelo COCOMO-2000 son:";
 choices[38]= new Array();
 choices[38][0] = "1) Modelo de composici&oacute;n de la arquitectura 2) Modelo de Dise&ntilde;o Preliminar 3) Modelo Post-Arquitectura.";
 choices[38][1] = "1) Modelo de composici&oacute;n de aplicaciones 2) Modelo de Dise&ntilde;o Preliminar 3) Modelo Post-Arquitectura.";
 choices[38][2] = "1) Modelo de composici&oacute;n de aplicaciones 2) Modelo de An&aacute;lisis Preliminar 3) Modelo Post-Arquitectura.";
 choices[38][3] = "1) Modelo de composici&oacute;n de la arquitectura 2) Modelo de An&aacute;lisis Preliminar 3) Modelo Post-Arquitectura.";
 answers[38] = choices[38][1];
 units[38] = "89";
 comments[38] = "Id Pregunta: 2816. NULL";


//  Id pregunta: 2822 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  El modelo COCOMO 2000 contempla tres versiones que cubren desde el an&aacute;lisis hasta las pruebas de integraci&oacute;n. Cu&aacute;l de las siguientes no es una versi&oacute;n correcta";
 choices[39]= new Array();
 choices[39][0] = "Modelo de composici&oacute;n de la aplicaci&oacute;n";
 choices[39][1] = "Modelo de definici&oacute;n funcional";
 choices[39][2] = "Modelo de dise&ntilde;o preliminar";
 choices[39][3] = "Modelo Post-Arquitectura";
 answers[39] = choices[39][1];
 units[39] = "89";
 comments[39] = "Id Pregunta: 2822. NULL";


//  Id pregunta: 2823 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  La migraci&oacute;n de aplicaciones en el marco de un ajuste dimensional:";
 choices[40]= new Array();
 choices[40][0] = "Consiste simplemente en mover los programas entre diferentes tipos de ordenador.";
 choices[40][1] = "No debe implicar modificaciones en la filosof&iacute;a de negocio de la organizaci&oacute;n.";
 choices[40][2] = "Se limita s&oacute;lo a las aplicaciones de usuario.";
 choices[40][3] = "Debe englobar todos los productos l&oacute;gicos o software de la instalaci&oacute;n a migrar.";
 answers[40] = choices[40][3];
 units[40] = "90";
 comments[40] = "Id Pregunta: 2823. ";


//  Id pregunta: 2825 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  Sobre el M&Eacute;TODO DE JONES se puede decir...";
 choices[41]= new Array();
 choices[41][0] = "Jones utiliza el Rect&aacute;ngulo de Probabilidades para calcular el coste m&aacute;ximo y m&iacute;nimo del mantenimiento (en el caso menos favorable y en el m&aacute;s favorable), e indica que el coste estimado cae dentro del Rect&aacute;ngulo de Probabilidades.";
 choices[41][1] = "Una desventaja de las unidades de costo es que todos los gastos asociados al mantenimiento no se pueden expresar en la misma unidad. ";
 choices[41][2] = "Se estima el n&uacute;mero de unidades programables que hay que mantener y se calcula el n&uacute;mero de personas requeridas para gestionar el mismo bas&aacute;ndose en datos hist&oacute;ricos de proyectos anteriores y en la experiencia.";
 choices[41][3] = "Se basa en el Tr&aacute;fico de Cambio Anual&quot; de Boehm.";
 answers[41] = choices[41][0];
 units[41] = "90";
 comments[41] = "Id Pregunta: 2825. ";


//  Id pregunta: 2835 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  &iquest;Qu&eacute; herramientas de reingenier&iacute;a se engloban en un paquete CASE?";
 choices[42]= new Array();
 choices[42][0] = "Via Center.";
 choices[42][1] = "CA-Metrics.";
 choices[42][2] = "Cadre.";
 choices[42][3] = "ADW.";
 answers[42] = choices[42][0];
 units[42] = "91";
 comments[42] = "Id Pregunta: 2835. ";


//  Id pregunta: 2837 AÃ±o de creación de pregunta: 2006-01-01
 questions[43]= "44)  En el modelo EFQM el atributo de calidad que recibe mayor ponderaci&oacute;n es:";
 choices[43]= new Array();
 choices[43][0] = "Resultados en cliente";
 choices[43][1] = "Procesos";
 choices[43][2] = "Liderazgo";
 choices[43][3] = "Gesti&oacute;n del Personal";
 answers[43] = choices[43][0];
 units[43] = "92";
 comments[43] = "Id Pregunta: 2837. NULL";


//  Id pregunta: 2841 AÃ±o de creación de pregunta: 2006-01-01
 questions[44]= "45)  &iquest;En el modelo EFQM qu&eacute; porcentaje se da a los procesos?";
 choices[44]= new Array();
 choices[44][0] = "14";
 choices[44][1] = "15";
 choices[44][2] = "10";
 choices[44][3] = "20";
 answers[44] = choices[44][2];
 units[44] = "92";
 comments[44] = "Id Pregunta: 2841. NULL";


//  Id pregunta: 2883 AÃ±o de creación de pregunta: 2006-01-01
 questions[45]= "46)  &iquest;Cu&aacute;l de los siguientes subcriterios no corresponde al criterio &quot;Personas&quot; en el modelo EFQM?";
 choices[45]= new Array();
 choices[45][0] = "Planificaci&oacute;n, gesti&oacute;n y mejora de los recursos humanos";
 choices[45][1] = "Identificaci&oacute;n, desarrollo y mantenimiento del conocimiento y la capacidad de las personas de la organizaci&oacute;n";
 choices[45][2] = "Existencia de un autoliderazgo en las personas de la organizaci&oacute;n";
 choices[45][3] = "Recompensa, reconocimiento y atenci&oacute;n a las personas de la organizaci&oacute;n";
 answers[45] = choices[45][2];
 units[45] = "92";
 comments[45] = "Id Pregunta: 2883. NULL";


//  Id pregunta: 4290 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  La gesti&oacute;n de la configuraci&oacute;n del software correctamente desempe&ntilde;ada implica identificar la configuraci&oacute;n:";
 choices[46]= new Array();
 choices[46][0] = "Antes del comienzo del ciclo de vida.";
 choices[46][1] = "Solamente al comienzo del ciclo de vida";
 choices[46][2] = "En puntos predefinidos durante el ciclo de vida.";
 choices[46][3] = "Solamente al finalizar el ciclo de vida";
 answers[46] = choices[46][2];
 units[46] = "87";
 comments[46] = "Id Pregunta: 4290. NULL";


//  Id pregunta: 4308 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  Se denomina &ldquo;Partici&oacute;n equivalente&rdquo; a:";
 choices[47]= new Array();
 choices[47][0] = "Una t&eacute;cnica de programaci&oacute;n modular donde el dominio de la aplicaci&oacute;n se subdivide en &aacute;reas funcionales de aproximadamente el mismo tama&ntilde;o";
 choices[47][1] = "Una t&eacute;cnica de pruebas de &ldquo;caja negra&rdquo; que divide el dominio de un programa en clases de datos de las que se pueden derivar casos de prueba.";
 choices[47][2] = "Una t&eacute;cnica de dise&ntilde;o orientado a objetos para mejorar la estructura de los programas reemplazando la herencia con mecanismos de delegaci&oacute;n.";
 choices[47][3] = "Una t&eacute;cnica de gesti&oacute;n del desarrollo de proyectos para la atribuci&oacute;n de la responsabilidad sobre las pruebas de la aplicaci&oacute;n";
 answers[47] = choices[47][1];
 units[47] = "88";
 comments[47] = "Id Pregunta: 4308. NULL";


//  Id pregunta: 4392 AÃ±o de creación de pregunta: 2007-01-01
 questions[48]= "49)  Las pruebas alfa:";
 choices[48]= new Array();
 choices[48][0] = "Son pruebas de integraci&oacute;n.";
 choices[48][1] = "Son pruebas de caja transparente";
 choices[48][2] = "Comprueban todo el espacio de ejecuci&oacute;n de un programa.";
 choices[48][3] = "Estiman el porcentaje de errores no detectados.";
 answers[48] = choices[48][2];
 units[48] = "87";
 comments[48] = "Id Pregunta: 4392. NULL";


//  Id pregunta: 4410 AÃ±o de creación de pregunta: 2007-01-01
 questions[49]= "50)  Los requisitos que debe cumplir un sistema para evitar que sus errores de funcionamiento tengan consecuencias en las personas o equipos, se denominan requisitos de:";
 choices[49]= new Array();
 choices[49][0] = "Fiabilidad.";
 choices[49][1] = "Operaci&oacute;n.";
 choices[49][2] = "Salvaguarda.";
 choices[49][3] = "Verificaci&oacute;n.";
 answers[49] = choices[49][0];
 units[49] = "88";
 comments[49] = "Id Pregunta: 4410. NULL";


//  Id pregunta: 4555 AÃ±o de creación de pregunta: 2007-01-01
 questions[50]= "51)  En CMMi, Ia Process Area (PA) de Gesti&oacute;n de Riesgos (Risk Management) corresponde al Nivel";
 choices[50]= new Array();
 choices[50][0] = "Nivel 2 (Gestionado)";
 choices[50][1] = "Nivel 3 (Definido)";
 choices[50][2] = "Nivel 4 (Gestionado Cuantitativamente)";
 choices[50][3] = "Nivel 5 (Optimizado)";
 answers[50] = choices[50][1];
 units[50] = "87";
 comments[50] = "Id Pregunta: 4555. NULL";


//  Id pregunta: 4607 AÃ±o de creación de pregunta: 2007-01-01
 questions[51]= "52)  El atributo que NO forma parte de los que utiliza la t&eacute;cnica de estimaci&oacute;n del M&eacute;todo Albrecht para el An&aacute;lisis de los Puntos Funci&oacute;n es";
 choices[51]= new Array();
 choices[51][0] = "gran uso de Ia configuraci&oacute;n";
 choices[51][1] = "dise&ntilde;o para la eficacia del usuario final";
 choices[51][2] = "velocidad de las transacciones";
 choices[51][3] = "prestaciones";
 answers[51] = choices[51][1];
 units[51] = "89";
 comments[51] = "Id Pregunta: 4607. ";


//  Id pregunta: 4929 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  &Aacute;lvaro est&aacute; iniciando las tareas de planificaci&oacute;n de un nuevo proyecto software, y ha efectuado unos c&aacute;lculos previos de &ldquo;puntos de funci&oacute;n&rdquo;. La t&eacute;cnica de Puntos de Funci&oacute;n es una t&eacute;cnica indirecta para determinar:";
 choices[52]= new Array();
 choices[52][0] = "La calidad de una aplicaci&oacute;n software y la tasa de errores prevista.";
 choices[52][1] = "La dimensi&oacute;n de un proyecto inform&aacute;tico y su probable coste.";
 choices[52][2] = "La usabilidad de un interfaz y la previsi&oacute;n de errores de usuario.";
 choices[52][3] = "La seguridad de una aplicaci&oacute;n y su riesgo de intrusi&oacute;n.";
 answers[52] = choices[52][1];
 units[52] = "87";
 comments[52] = "Id Pregunta: 4929. Examen TIC B 2007";


//  Id pregunta: 4945 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  En el desarrollo de software, las pruebas &ldquo;alfa&rdquo; se pueden considerar:";
 choices[53]= new Array();
 choices[53][0] = "Pruebas de caja negra.";
 choices[53][1] = "Pruebas de caja transparente.";
 choices[53][2] = "Pruebas de recuperaci&oacute;n.";
 choices[53][3] = "Pruebas de seguridad.";
 answers[53] = choices[53][0];
 units[53] = "87";
 comments[53] = "Id Pregunta: 4945. Examen TIC B 2007";


//  Id pregunta: 5105 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  Cu&aacute;l de los siguientes es un modelo de estimaci&oacute;n de proyectos software:";
 choices[54]= new Array();
 choices[54][0] = "CMMI";
 choices[54][1] = "COCOMO";
 choices[54][2] = "M&eacute;todo de Cox";
 choices[54][3] = "El plan de SQA";
 answers[54] = choices[54][1];
 units[54] = "89";
 comments[54] = "Id Pregunta: 5105. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5248 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  Se&ntilde;ale la respuesta incorrecta en relaci&oacute;n a la Ingenier&iacute;a del Software";
 choices[55]= new Array();
 choices[55][0] = "El tipo de actividades que se desarrollan en Ingenier&iacute;a de Software son de desarrollo, control, gesti&oacute;n y aplicaci&oacute;n";
 choices[55][1] = "Surge como respuesta a la crisis del software con los objetivos de conseguir un producto fiable, de alta calidad y bajo coste y conducir un proceso de desarrollo de manera eficiente";
 choices[55][2] = "La ingenier&iacute;a del software es la aplicaci&oacute;n de un enfoque sistem&aacute;tico, disciplinado y cuantificable hacia el desarrollo, operaci&oacute;n y mantenimiento del software";
 choices[55][3] = "La ingenier&iacute;a del software es una tecnolog&iacute;a multicapa constituida por el proceso, los m&eacute;todos y las herramientas";
 answers[55] = choices[55][0];
 units[55] = "87";
 comments[55] = "Id Pregunta: 5248. NULL";


//  Id pregunta: 5251 AÃ±o de creación de pregunta: 2003-01-01
 questions[56]= "57)  Dentro de la serie de normas ISO 9000:2000 NO se encuentra:";
 choices[56]= new Array();
 choices[56][0] = "ISO 9001:2000 Gesti&oacute;n de Calidad. Requisitos";
 choices[56][1] = "ISO 9002:2000. Fundamentos y vocabulario";
 choices[56][2] = "ISO 9004:2000. Recomendaciones para la mejora del desempe&ntilde;o.";
 choices[56][3] = "ISO 19011. Gu&iacute;a relativa gesti&oacute;n de calidad y gesti&oacute;n medioambiental";
 answers[56] = choices[56][1];
 units[56] = "87";
 comments[56] = "Id Pregunta: 5251. NULL";


//  Id pregunta: 5255 AÃ±o de creación de pregunta: 2003-01-01
 questions[57]= "58)  Acorde al modelo de calidad de McCall NO es un factor de calidad con caracter&iacute;sticas de explotaci&oacute;n:";
 choices[57]= new Array();
 choices[57][0] = "Fiabilidad ";
 choices[57][1] = "Extensibilidad";
 choices[57][2] = "Correcci&oacute;n ";
 choices[57][3] = "Integridad";
 answers[57] = choices[57][1];
 units[57] = "88";
 comments[57] = "Id Pregunta: 5255. NULL";


//  Id pregunta: 5260 AÃ±o de creación de pregunta: 2003-01-01
 questions[58]= "59)  Se&ntilde;ale la falsa:";
 choices[58]= new Array();
 choices[58][0] = "Las m&eacute;tricas de complejidad intentan principalmente evaluar la posible mantenibilidad del software.";
 choices[58][1] = "Las t&eacute;cnicas de Halstead y McCabe se engloban dentro de estas m&eacute;tricas.";
 choices[58][2] = "La complejidad ciclom&aacute;tica de McCabe es una medida cualitativa de la complejidad l&oacute;gica de un programa";
 choices[58][3] = "La t&eacute;cnica de Halstead define los token, como la unidad sint&aacute;ctica m&aacute;s elemental distinguible por un compilador.";
 answers[58] = choices[58][2];
 units[58] = "88";
 comments[58] = "Id Pregunta: 5260. NULL";


//  Id pregunta: 5461 AÃ±o de creación de pregunta: 2003-01-01
 questions[59]= "60)  Los principales factores de calidad seg&uacute;n Bertrand Meyer son";
 choices[59]= new Array();
 choices[59][0] = "Eficiencia y fiabilidad";
 choices[59][1] = "Fiabilidad y modularidad";
 choices[59][2] = "Fiabilidad y extensibilidad";
 choices[59][3] = "Correcci&oacute;n y verificabilidad";
 answers[59] = choices[59][1];
 units[59] = "88";
 comments[59] = "Id Pregunta: 5461. Castilla y Le&oacute;n";


//  Id pregunta: 5469 AÃ±o de creación de pregunta: 2003-01-01
 questions[60]= "61)  Los resultados del modelo EFQM se eval&uacute;an";
 choices[60]= new Array();
 choices[60][0] = "Respecto a los clientes";
 choices[60][1] = "Respecto a la sociedad";
 choices[60][2] = "Respecto al personal de la empresa";
 choices[60][3] = "Todas las respuestas son correctas";
 answers[60] = choices[60][3];
 units[60] = "88";
 comments[60] = "Id Pregunta: 5469. Castilla y Le&oacute;n";


//  Id pregunta: 5478 AÃ±o de creación de pregunta: 2003-01-01
 questions[61]= "62)  &iquest;Cual de los siguientes factores de calidad es el m&aacute;s importante?";
 choices[61]= new Array();
 choices[61][0] = "Oportunidad";
 choices[61][1] = "Correcci&oacute;n";
 choices[61][2] = "Extensibilidad";
 choices[61][3] = "Modularidad";
 answers[61] = choices[61][3];
 units[61] = "88";
 comments[61] = "Id Pregunta: 5478. Castilla y Le&oacute;n";


//  Id pregunta: 5763 AÃ±o de creación de pregunta: 2003-01-01
 questions[62]= "63)  Seg&uacute;n Bennet, Lientz y Swanson:";
 choices[62]= new Array();
 choices[62][0] = "El mantenimiento perfectivo son las acciones llevadas a cabo para mejorar la calidad interna de los sistemas en cualquiera de sus aspectos: reestructuraci&oacute;n del c&oacute;digo, definici&oacute;n m&aacute;s clara del sistema y optimizaci&oacute;n del rendimiento y eficiencia.";
 choices[62][1] = "El mantenimiento evolutivo son las incorporaciones, modificaciones y eliminaciones necesarias en un producto software para cubrir la expansi&oacute;n o cambio en las necesidades del usuario.";
 choices[62][2] = "El mantenimiento preventivo es la realizaci&oacute;n del mantenimiento anticip&aacute;ndose a problemas futuros.";
 choices[62][3] = "El mantenimiento adaptativo son las modificaciones que afectan a los entornos en los que el sistema opera, como por ejemplo la configuraci&oacute;n del hardware.";
 answers[62] = choices[62][2];
 units[62] = "90";
 comments[62] = "Id Pregunta: 5763. ";


//  Id pregunta: 5961 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  Seg&uacute;n la Norma ISO 9000:2000, la relaci&oacute;n entre el resultado alcanzado y los recursos utilizados, se denomina:";
 choices[63]= new Array();
 choices[63][0] = "Eficiencia";
 choices[63][1] = "Eficacia";
 choices[63][2] = "Proceso";
 choices[63][3] = "Requisito";
 answers[63] = choices[63][0];
 units[63] = "87";
 comments[63] = "Id Pregunta: 5961. Castilla La Mancha 2009";


//  Id pregunta: 5964 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  Seg&uacute;n CMMI, el &aacute;rea de proceso que recopila y armoniza las necesidades de los participantes y las traduce en requisitos del producto se denomina:";
 choices[64]= new Array();
 choices[64][0] = "Verificaci&oacute;n";
 choices[64][1] = "Validaci&oacute;n";
 choices[64][2] = "Gesti&oacute;n de requisitos";
 choices[64][3] = "Desarrollo de requisitos";
 answers[64] = choices[64][3];
 units[64] = "87";
 comments[64] = "Id Pregunta: 5964. Castilla La Mancha 2009";


//  Id pregunta: 6063 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  Indicar cu&aacute;l de los siguientes NO es un m&eacute;todo ni un marco metodol&oacute;gico para estimar el esfuerzo de desarrollo en los proyectos:";
 choices[65]= new Array();
 choices[65][0] = "COCOMO II.";
 choices[65][1] = "FPA.";
 choices[65][2] = "ESTIM.";
 choices[65][3] = "ITEOR.";
 answers[65] = choices[65][2];
 units[65] = "89";
 comments[65] = "Id Pregunta: 6063. TIC A 2009";


//  Id pregunta: 6251 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[66]= new Array();
 choices[66][0] = "Las pruebas de caja blanca se miden por cobertura de segmentos, de ramas, de condici&oacute;n/decisi&oacute;n, de bucles";
 choices[66][1] = "Las pruebas de caja blanca son pruebas de Sistema";
 choices[66][2] = "Las pruebas de caja negra se miden por cobertura de segmentos, de ramas, de condici&oacute;n/decisi&oacute;n, de bucles";
 choices[66][3] = "Las pruebas de caja negra son pruebas de Regresi&oacute;n";
 answers[66] = choices[66][0];
 units[66] = "87";
 comments[66] = "Id Pregunta: 6251. TICB-2009, bloque desarrollo";


//  Id pregunta: 6533 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  Los desajustes en los cumplimientos de las expectativas y especificaciones de los servicios determinan";
 choices[67]= new Array();
 choices[67][0] = "El grado de satisfacci&oacute;n de los usuarios";
 choices[67][1] = "Percepci&oacute;n del servicio y expectativas previas de los usuarios";
 choices[67][2] = "A y B son correctas";
 choices[67][3] = "A y B son incorrectas";
 answers[67] = choices[67][2];
 units[67] = "92";
 comments[67] = "Id Pregunta: 6533. NULL";


//  Id pregunta: 6626 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)  El modelo CMM de Ingenier&iacute;a de Software consta de:";
 choices[68]= new Array();
 choices[68][0] = "5 niveles, de los cuales todos se descomponen en &aacute;reas de procesos clave";
 choices[68][1] = "5 niveles, de los cuales todos excepto el nivel 1 se descomponen en &aacute;reas de procesos clave";
 choices[68][2] = "5 niveles, de los cuales todos excepto el nivel 5 se descomponen en &aacute;reas de procesos clave";
 choices[68][3] = "6 niveles que se descomponen en &aacute;reas de procesos clave y estas a su vez se organizan seg&uacute;n caracter&iacute;sticas comunes";
 answers[68] = choices[68][1];
 units[68] = "87";
 comments[68] = "Id Pregunta: 6626. NULL";


//  Id pregunta: 6631 AÃ±o de creación de pregunta: 2010-01-01
 questions[69]= "70)  Hablando en calidad de Software de SPICE, decir cual de las siguientes afirmaciones NO es cierta:";
 choices[69]= new Array();
 choices[69][0] = "SPICE es un est&aacute;ndar internacional de evaluaci&oacute;n y determinaci&oacute;n de la capacidad ymejora continua de procesos de ingenier&iacute;a del software";
 choices[69][1] = "SPICE absorbe la escala de puntuaci&oacute;n de capacidad de CMM y el ciclo de vida de ISO 12207";
 choices[69][2] = "Se corresponde con la norma ISO/IEC 15054";
 choices[69][3] = "Absorbe la representaci&oacute;n de capacidad basada en perfiles de atributos de BOOTSTRAP";
 answers[69] = choices[69][2];
 units[69] = "87";
 comments[69] = "Id Pregunta: 6631. NULL";


//  Id pregunta: 6632 AÃ±o de creación de pregunta: 2010-01-01
 questions[70]= "71)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[70]= new Array();
 choices[70][0] = "Si aumenta la calidad del producto, los costes de la no-calidad disminuyen";
 choices[70][1] = "Si aumenta la calidad del producto, los costes de la no-calidad aumentan";
 choices[70][2] = "Si aumenta la calidad del producto, el coste del sistema de calidad no aumenta";
 choices[70][3] = "Si aumenta la calidad del producto, el coste del sistema de calidad disminuye";
 answers[70] = choices[70][0];
 units[70] = "87";
 comments[70] = "Id Pregunta: 6632. NULL";


//  Id pregunta: 6633 AÃ±o de creación de pregunta: 2010-01-01
 questions[71]= "72)  El modelo de McCall de calidad de software define:";
 choices[71]= new Array();
 choices[71][0] = "Caracter&iacute;sticas del proyecto y del producto generado";
 choices[71][1] = "Caracter&iacute;sticas operacionales, de modificaci&oacute;n y de transici&oacute;n o conversi&oacute;n";
 choices[71][2] = "Caracter&iacute;sticas de an&aacute;lisis, desarrollo y pruebas";
 choices[71][3] = "Caracter&iacute;sticas de accesibilidad y rendimiento";
 answers[71] = choices[71][1];
 units[71] = "88";
 comments[71] = "Id Pregunta: 6633. NULL";


//  Id pregunta: 6639 AÃ±o de creación de pregunta: 2010-01-01
 questions[72]= "73)  &iquest;Cu&aacute;l de las siguientes afirmaciones NO es cierta cuando hablamos de la m&eacute;trica de Puntos de Funci&oacute;n?";
 choices[72]= new Array();
 choices[72][0] = "Se usa para estimar el tama&ntilde;o del software que se va a desarrollar";
 choices[72][1] = "Se usa para estimar la productividad del software que se va a desarrollar";
 choices[72][2] = "Ve la aplicaci&oacute;n como una caja negra";
 choices[72][3] = "Fue propuesta por Tom De Marco";
 answers[72] = choices[72][3];
 units[72] = "88";
 comments[72] = "Id Pregunta: 6639. NULL";


//  Id pregunta: 6640 AÃ±o de creación de pregunta: 2010-01-01
 questions[73]= "74)  La principal diferencia entre la t&eacute;cnica de los Puntos de Funci&oacute;n (PF's) y los PF's Mark II es:";
 choices[73]= new Array();
 choices[73][0] = "Los PF's Mark II utilizan el concepto de transacci&oacute;n l&oacute;gica";
 choices[73][1] = "Los PF's Mark II utilizan 4 elementos (Entradas, Salidas, Consultas y Ficheros)";
 choices[73][2] = "Los PF's Mark II utilizan 4 elementos (Entradas, Salidas, Consultas y Ficheros), m&aacute;s el concepto de transacci&oacute;n l&oacute;gica";
 choices[73][3] = "Los PF's Mark II utilizan 5 elementos (Entradas, Salidas, Consultas, Ficheros e Interfaces)";
 answers[73] = choices[73][0];
 units[73] = "88";
 comments[73] = "Id Pregunta: 6640. NULL";


//  Id pregunta: 6642 AÃ±o de creación de pregunta: 2010-01-01
 questions[74]= "75)  En un sistema Orientado a Objetos, cu&aacute;l de las siguientes NO es una m&eacute;trica para evaluar la calidad del dise&ntilde;o?";
 choices[74]= new Array();
 choices[74][0] = "M&eacute;tricas de Booch";
 choices[74][1] = "M&eacute;tricas MDOO";
 choices[74][2] = "M&eacute;tricas de Lorenz y Kidd";
 choices[74][3] = "M&eacute;tricas de Chidamber y Kemerer";
 answers[74] = choices[74][0];
 units[74] = "88";
 comments[74] = "Id Pregunta: 6642. NULL";


//  Id pregunta: 6645 AÃ±o de creación de pregunta: 2010-01-01
 questions[75]= "76)  &iquest;Qu&eacute; modelo de estimaci&oacute;n de esfuerzo no requiere datos hist&oacute;ricos de otros proyectos?";
 choices[75]= new Array();
 choices[75][0] = "Modelo de Waltson y F&eacute;lix";
 choices[75][1] = "Modelo de Bailey y Basili";
 choices[75][2] = "Modelo de Putnam";
 choices[75][3] = "Todos estos modelos requieren datos hist&oacute;ricos";
 answers[75] = choices[75][2];
 units[75] = "89";
 comments[75] = "Id Pregunta: 6645. NULL";


//  Id pregunta: 6646 AÃ±o de creación de pregunta: 2010-01-01
 questions[76]= "77)  El nombre del modelo COCOMO se corresponde con:";
 choices[76]= new Array();
 choices[76][0] = "Constructive Cost Model";
 choices[76][1] = "Cost Control Model";
 choices[76][2] = "Comprehensive Cost Model";
 choices[76][3] = "Continuous Cost Model";
 answers[76] = choices[76][0];
 units[76] = "89";
 comments[76] = "Id Pregunta: 6646. NULL";


//  Id pregunta: 6647 AÃ±o de creación de pregunta: 2010-01-01
 questions[77]= "78)  Seg&uacute;n la nomenclatura de Boehm en el modelo COCOMO los proyectos pueden ser:";
 choices[77]= new Array();
 choices[77][0] = "Org&aacute;nicos, semiorg&aacute;nicos y empotrados";
 choices[77][1] = "Org&aacute;nicos, acoplados y empotrados";
 choices[77][2] = "Org&aacute;nicos, acoplados y semiempotrados";
 choices[77][3] = "Org&aacute;nicos, empotrados y semiacoplados";
 answers[77] = choices[77][3];
 units[77] = "89";
 comments[77] = "Id Pregunta: 6647. NULL";


//  Id pregunta: 7180 AÃ±o de creación de pregunta: 2010-01-01
 questions[78]= "79)  Uno de los modelos utilizados para la estimaci&oacute;n de costes de un proyecto inform&aacute;tico es COCOMO (COnstructive COst MOdel). Se puede afirmar sobre &eacute;l que:";
 choices[78]= new Array();
 choices[78][0] = "La medici&oacute;n que realiza COCOMO por l&iacute;neas de c&oacute;digo es especialmente &uacute;til para la Orientaci&oacute;n a Objetos";
 choices[78][1] = "Incluye tres submodelos: B&aacute;sico, Intermedio y Detallado";
 choices[78][2] = "Cada submodelo se divide en tres modos: Org&aacute;nico, Inorg&aacute;nico y Directo";
 choices[78][3] = "El modo Org&aacute;nico se aplica a un tipo de proyectos complejos, en los que se tiene experiencia y con unos requisitos muy restrictivos";
 answers[78] = choices[78][1];
 units[78] = "89";
 comments[78] = "Id Pregunta: 7180. Examen TIC B 2009";


//  Id pregunta: 8203 AÃ±o de creación de pregunta: 2011-01-01
 questions[79]= "80)  Seg&uacute;n Pressman, una revisi&oacute;n t&eacute;cnica formal es: ";
 choices[79]= new Array();
 choices[79][0] = "Una reuni&oacute;n.";
 choices[79][1] = "Un producto del desarrollo.";
 choices[79][2] = "Un documento.";
 choices[79][3] = "La aceptaci&oacute;n del sistema. ";
 answers[79] = choices[79][0];
 units[79] = "87";
 comments[79] = "Id Pregunta: 8203. Examen TIC A1 2010";


//  Id pregunta: 8819 AÃ±o de creación de pregunta: 2011-01-01
 questions[80]= "81)  &iquest;Cu&aacute;l de estas normas especifica los requisitos para un buen sistema de gesti&oacute;n de calidad?";
 choices[80]= new Array();
 choices[80][0] = "ISO 9001";
 choices[80][1] = "ISO 9000";
 choices[80][2] = "ISO 9004";
 choices[80][3] = "ISO 19011";
 answers[80] = choices[80][0];
 units[80] = "87, 92";
 comments[80] = "Id Pregunta: 8819. Examen UPM A2 2011";


//  Id pregunta: 8893 AÃ±o de creación de pregunta: 2011-01-01
 questions[81]= "82)  Son principios de gesti&oacute;n de la calidad seg&uacute;n la norma ISO 9004";
 choices[81]= new Array();
 choices[81][0] = "Enfoque basado en procesos";
 choices[81][1] = "Mejora continua";
 choices[81][2] = "Relaciones mutuamente beneficiosas para el proveedor";
 choices[81][3] = "Todos lo son";
 answers[81] = choices[81][3];
 units[81] = "92";
 comments[81] = "Id Pregunta: 8893. NULL";


//  Id pregunta: 8970 AÃ±o de creación de pregunta: 2011-01-01
 questions[82]= "83)  Entre los agentes del Plan General de Garant&iacute;a de la Calidad no figura:";
 choices[82]= new Array();
 choices[82][0] = "EGC (Eq garant&iacute;a calidad)";
 choices[82][1] = "EDS (Equipo de desarrollo)";
 choices[82][2] = "DIR (Director de proyecto)";
 choices[82][3] = "CDC (Comit&eacute; directivo de calidad)";
 answers[82] = choices[82][3];
 units[82] = "87,88,92";
 comments[82] = "Id Pregunta: 8970. ";


//  Id pregunta: 9414 AÃ±o de creación de pregunta: 2013-01-01
 questions[83]= "84)  Cu&aacute;l de las siguientes afirmaciones acerca de las m&eacute;tricas de productividad es incorrecta?";
 choices[83]= new Array();
 choices[83][0] = "Recogen la eficiencia del proceso del construcci&oacute;n de software";
 choices[83][1] = "Relacionan el software que se ha construido con el esfuerzo que ha costado elaborarlo";
 choices[83][2] = "Un ejemplo de m&eacute;trica de productividad son los Puntos de Funci&oacute;n";
 choices[83][3] = "Son en general indirectas, puesto que requieren de otras m&eacute;tricas previas para poder calcularse";
 answers[83] = choices[83][2];
 units[83] = "89";
 comments[83] = "Id Pregunta: 9414. NULL";


//  Id pregunta: 9416 AÃ±o de creación de pregunta: 2013-01-01
 questions[84]= "85)  Cu&aacute;l de los siguientes no es un m&eacute;todo de an&aacute;lisis de Puntos de Funci&oacute;n?";
 choices[84]= new Array();
 choices[84][0] = "M&eacute;todo Albrecht";
 choices[84][1] = "M&eacute;todo MARK II";
 choices[84][2] = "La a) y la b) son correctas";
 choices[84][3] = "Ninguno de los anteriores";
 answers[84] = choices[84][2];
 units[84] = "89";
 comments[84] = "Id Pregunta: 9416. NULL";


//  Id pregunta: 9421 AÃ±o de creación de pregunta: 2013-01-01
 questions[85]= "86)  Cu&aacute;l de las siguientes afirmaciones sobre COCOMO es falsa";
 choices[85]= new Array();
 choices[85][0] = "El modelo original, COCOMO 81, fue publicado por Barry Boehm";
 choices[85][1] = "Sus siglas vienen de COnstructive COst MOdel";
 choices[85][2] = "Es un modelo de base emp&iacute;rica";
 choices[85][3] = "Es un modelo con base estad&iacute;stica";
 answers[85] = choices[85][3];
 units[85] = "89";
 comments[85] = "Id Pregunta: 9421. NULL";


//  Id pregunta: 9653 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  El modelo de calidad ISO 9126 tiene:";
 choices[86]= new Array();
 choices[86][0] = "27 caracter&iacute;sticas y 6 subcaracter&iacute;sticas";
 choices[86][1] = "6 caracter&iacute;sticas y 28 subcaracter&iacute;sticas";
 choices[86][2] = "7 caracter&iacute;sticas y 26 subcaracter&iacute;sticas";
 choices[86][3] = "6 caracter&iacute;sticas y 27 subcaracter&iacute;sticas";
 answers[86] = choices[86][3];
 units[86] = "87";
 comments[86] = "Id Pregunta: 9653. NULL";


//  Id pregunta: 9658 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  &iquest;Qu&eacute; modelo  de calidad tiene como &aacute;mbito de aplicaci&oacute;n Software y Sistemas?";
 choices[87]= new Array();
 choices[87][0] = "CMMI";
 choices[87][1] = "ISO 9001";
 choices[87][2] = "ISO/IEC 15504 (SPICE) y CMMI";
 choices[87][3] = "Todos los anteriores";
 answers[87] = choices[87][2];
 units[87] = "87";
 comments[87] = "Id Pregunta: 9658. La ISO 9001 tiene un &aacute;mbito gen&eacute;rico, no s&oacute;lo Sotftware y Sistemas";


//  Id pregunta: 9730 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  &iquest;Cu&aacute;l de estas aseveraciones es INCORRECTA? En programaci&oacute;n, la ofuscaci&oacute;n del c&oacute;digo fuente";
 choices[88]= new Array();
 choices[88][0] = "dificulta la legilibilidad del c&oacute;digo fuente, pudiendo usar cifrado.";
 choices[88][1] = "impide la ingenier&iacute;a inversa.";
 choices[88][2] = "es un ejemplo de seguridad a trav&eacute;s de la oscuridad.";
 choices[88][3] = "es aplicable a lenguajes compilados directamente a c&oacute;digo m&aacute;quina como C o C++.";
 answers[88] = choices[88][1];
 units[88] = "91";
 comments[88] = "Id Pregunta: 9730. Examen TIC-A1 2013";


//  Id pregunta: 10445 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  En el marco de la prueba de software, la cobertura de declaraciones de c&oacute;digo (code statement coverage) NO se utiliza para ";
 choices[89]= new Array();
 choices[89][0] = "definir &quot;hecho&quot; (done) en las metodolog&iacute;as &aacute;giles. ";
 choices[89][1] = "detectar c&oacute;digo muerto o inalcanzable.";
 choices[89][2] = "certificar software de misi&oacute;n cr&iacute;tica.";
 choices[89][3] = "detectar errores de condiciones de carrera (race condition bugs). ";
 answers[89] = choices[89][3];
 units[89] = "88";
 comments[89] = "Id Pregunta: 10445. Examen TIC A1 2013";


//  Id pregunta: 10484 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  &iquest;En qu&eacute; se basa el &eacute;todo de Karner?";
 choices[90]= new Array();
 choices[90][0] = "En la estimaci&oacute;n del esfuerzo por puntos de casos de uso en vez de puntos de funci&oacute;n";
 choices[90][1] = "En determinar las constantes a, b, c y de del m&eacute;todo de Putnam";
 choices[90][2] = "Se aplica en Cocomo semipesado";
 choices[90][3] = "Variante del m&eacute;todo Mark II";
 answers[90] = choices[90][0];
 units[90] = "89";
 comments[90] = "Id Pregunta: 10484. NULL";


//  Id pregunta: 10645 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Indique la que no es una caracter&iacute;stica com&uacute;n de las &aacute;reas clave del proceso seg&uacute;n CMM:";
 choices[91]= new Array();
 choices[91][0] = "Verificaci&oacute;n de la implementaci&oacute;n.";
 choices[91][1] = "Actividades realizadas.";
 choices[91][2] = "Imposibilidad de realizaci&oacute;n.";
 choices[91][3] = "Medici&oacute;n y an&aacute;lisis.";
 answers[91] = choices[91][2];
 units[91] = "87";
 comments[91] = "Id Pregunta: 10645. ";


//  Id pregunta: 10857 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Se&ntilde;ale c&oacute;mo se clasifican los niveles en las organizaciones seg&uacute;n se establece en el Modelo de Madurez de la Ingenier&iacute;a del Software ISO/IEC 15504-SPICE para la evaluaci&oacute;n y mejora de las organizaciones, en la representaci&oacute;n continua del modelo que mide la capacidad:";
 choices[92]= new Array();
 choices[92][0] = "En 6 niveles, desde el cero al cinco.";
 choices[92][1] = "En 5 niveles, desde el uno al cinco.";
 choices[92][2] = "En 6 niveles, desde el uno al seis.";
 choices[92][3] = "En 5 niveles, desde el cero al cuatro.";
 answers[92] = choices[92][0];
 units[92] = "88";
 comments[92] = "Id Pregunta: 10857. Examen GSI 2014";


//  Id pregunta: 10932 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  En el modelo CMMI, el &aacute;rea de proceso &quot;An&aacute;lisis causal y resoluci&oacute;n&quot; se encuentra en el nivel de madurez:";
 choices[93]= new Array();
 choices[93][0] = "Nivel 2 - Gestionado.";
 choices[93][1] = "Nivel 5 - Optimizaci&oacute;n.";
 choices[93][2] = "Nivel 4 - Gestionado cuantitativamente.";
 choices[93][3] = "Nivel 3 - Definido.";
 answers[93] = choices[93][1];
 units[93] = "87";
 comments[93] = "Id Pregunta: 10932. TIC A1 AGE 2014";


//  Id pregunta: 11162 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l de los siguientes no es un modo de COCOMO (Constructive Cost Model) para estimar el n&uacute;mero de instrucciones de c&oacute;digo fuente seg&uacute;n el entorno de aplicaci&oacute;n que se utiliza?";
 choices[94]= new Array();
 choices[94][0] = "Org&aacute;nico";
 choices[94][1] = "Acoplado";
 choices[94][2] = "Semiacoplado";
 choices[94][3] = "Empotrado";
 answers[94] = choices[94][1];
 units[94] = "88";
 comments[94] = "Id Pregunta: 11162. ";


//  Id pregunta: 11335 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Respecto del modelo EFQM, se&ntilde;ale la afirmaci&oacute;n correcta";
 choices[95]= new Array();
 choices[95][0] = "Contempla entre los agentes facilitadores los siguientes: Liderazgo; Personas; Pol&iacute;ticas y Estrategias;";
 choices[95][1] = "La autoevaluaci&oacute;n del modelo no permite extraer puntos fuertes y &aacute;reas de mejora";
 choices[95][2] = "Contempla cuatro tipos de resultados:  en las Personas; Clientes; en la Sociedad y resultados Clave. Los resultados no son consecuencia de los agentes facilitadores";
 choices[95][3] = "El premio europeo a la calidad es quinquenal";
 answers[95] = choices[95][0];
 units[95] = "92";
 comments[95] = "Id Pregunta: 11335. ";


//  Id pregunta: 11540 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Dada la actividad A(4,7,16) de un proyecto, se puede afirmar.";
 choices[96]= new Array();
 choices[96][0] = "Su duraci&oacute;n es de 8 d&iacute;as.";
 choices[96][1] = "Su holgura total es de 12.";
 choices[96][2] = "Su varianza es 2.";
 choices[96][3] = "Son correctas la a) y la c)";
 answers[96] = choices[96][0];
 units[96] = "89";
 comments[96] = "Id Pregunta: 11540. Conceptos PERT";


//  Id pregunta: 11547 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Cu&aacute;l de las siguientes acciones NO es necesaria para implantar en una organizaci&oacute;n la Calidad Total?";
 choices[97]= new Array();
 choices[97][0] = "Lograr el compromiso de todos los niveles de direcci&oacute;n.";
 choices[97][1] = "Adoptar el Modelo CMMI.";
 choices[97][2] = "Formar en las t&eacute;cnicas y herramientas de la Calidad";
 choices[97][3] = "Son necesarias todas las acciones anteriores.";
 answers[97] = choices[97][1];
 units[97] = "87";
 comments[97] = "Id Pregunta: 11547. NULL";


//  Id pregunta: 11553 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  El modelo de estimaci&oacute;n que establece que el esfuerzo de desarrollo de un proyecto Software sigue una distribuci&oacute;n de Rayleigh-Norden es el de:";
 choices[98]= new Array();
 choices[98][0] = "PUTNAM";
 choices[98][1] = "COCOMO";
 choices[98][2] = "WALTSON-FELIX";
 choices[98][3] = "ESTERLING";
 answers[98] = choices[98][0];
 units[98] = "89";
 comments[98] = "Id Pregunta: 11553. NULL";


//  Id pregunta: 11554 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  El n&uacute;mero de l&iacute;neas de c&oacute;digo fuente de una aplicaci&oacute;n es una m&eacute;trica de estimaci&oacute;n del software de:";
 choices[99]= new Array();
 choices[99][0] = "Tama&ntilde;o, directa y objetiva.";
 choices[99][1] = "Producitividad, complejidad y objetiva.";
 choices[99][2] = "Complejidad y tama&ntilde;o.";
 choices[99][3] = "Tama&ntilde;o, directa y subjetiva.";
 answers[99] = choices[99][0];
 units[99] = "89";
 comments[99] = "Id Pregunta: 11554. NULL";


