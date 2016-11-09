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

//  Id pregunta: 470 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  Una de las caracter&iacute;sticas principales de los paquetes de planificaci&oacute;n de recursos de empresas (ERP) es:";
 choices[0]= new Array();
 choices[0][0] = "Los datos a tratar por esos paquetes no pueden ser almacenados en sistemas de bases de datos de car&aacute;cter general.";
 choices[0][1] = "Ser parametrizables, lo que les da gran flexibilidad y la posibilidad de ser aplicados a tipos de empresas muy diferentes.";
 choices[0][2] = "No ser parametrizables, por ser dise&ntilde;ados especialmente para cada tipo de empresas.";
 choices[0][3] = "Utilizar la tecnolog&iacute;a de workflow como soluci&oacute;n a la gesti&oacute;n integral de una empresa.";
 answers[0] = choices[0][1];
 units[0] = "65";
 comments[0] = "Id Pregunta: 470. ";


//  Id pregunta: 2066 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  &iquest;Qu&eacute; t&eacute;cnica se puede usar para medir el tama&ntilde;o";
 choices[1]= new Array();
 choices[1][0] = "Program Evaluation and Review Tecnique (PERT)";
 choices[1][1] = "Diagrama de extrapolaci&oacute;n";
 choices[1][2] = "M&eacute;trica Bang";
 choices[1][3] = "WBS (Work Breakdown Structure)";
 answers[1] = choices[1][2];
 units[1] = "89";
 comments[1] = "Id Pregunta: 2066. SS-A 2004";


//  Id pregunta: 2119 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;Cu&aacute;l de estas funciones no es propia del administrador del sistema de gesti&oacute;n de bases de datos?:";
 choices[2]= new Array();
 choices[2][0] = "Catalogar en el diccionario de datos los correspondientes al sistema de informaci&oacute;n";
 choices[2][1] = "Dise&ntilde;ar el modelo f&iacute;sico de datos";
 choices[2][2] = "Dar de alta y baja a los usuarios de las bases de datos";
 choices[2][3] = "Garantizar la ejecuci&oacute;n de los procedimientos de salvaguarda";
 answers[2] = choices[2][0];
 units[2] = "57";
 comments[2] = "Id Pregunta: 2119. ";


//  Id pregunta: 2138 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;Cu&aacute;l de las siguientes expresiones est&aacute; de acuerdo con los actuales criterios de calidad del software de gesti&oacute;n?:";
 choices[3]= new Array();
 choices[3][0] = "La funci&oacute;n 'calidad' debe ser desempe&ntilde;ada por un equipo independiente de especialistas";
 choices[3][1] = "El coste de la calidad debe ser equilibrado con el coste de la 'no-calidad'";
 choices[3][2] = "La funci&oacute;n 'calidad' debe garantizar la producci&oacute;n de 'software cero-defectos'";
 choices[3][3] = "Todas las anteriores respuestas son correctas";
 answers[3] = choices[3][1];
 units[3] = "88";
 comments[3] = "Id Pregunta: 2138. NULL";


//  Id pregunta: 2140 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;Cu&aacute;l de las siguientes pruebas se contemplan en M&eacute;trica V3?:";
 choices[4]= new Array();
 choices[4][0] = "Pruebas de regresi&oacute;n";
 choices[4][1] = "Pruebas de integraci&oacute;n ";
 choices[4][2] = "Pruebas del sistema";
 choices[4][3] = "Todas las anteriores";
 answers[4] = choices[4][3];
 units[4] = "86";
 comments[4] = "Id Pregunta: 2140. NULL";


//  Id pregunta: 2171 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  La cohesi&oacute;n es una medida:";
 choices[5]= new Array();
 choices[5][0] = "Interna.";
 choices[5][1] = "Externa.";
 choices[5][2] = "Intermedia.";
 choices[5][3] = "No es ninguna medida.";
 answers[5] = choices[5][0];
 units[5] = "84";
 comments[5] = "Id Pregunta: 2171. ";


//  Id pregunta: 2173 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  La definici&oacute;n &quot;margen suplementario de tiempo que existe en una actividad si las actividades precedentes empiezan lo m&aacute;s tarde posible y las posteriores lo antes posible&quot; corresponde a: ";
 choices[6]= new Array();
 choices[6][0] = "holgura independiente";
 choices[6][1] = "holgura total";
 choices[6][2] = "holgura libre";
 choices[6][3] = "Ninguna de las anteriores";
 answers[6] = choices[6][0];
 units[6] = "86";
 comments[6] = "Id Pregunta: 2173. NULL";


//  Id pregunta: 2191 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Cu&aacute;les son los factores de la calidad del software desde el punto de vista de la revisi&oacute;n del software?:";
 choices[7]= new Array();
 choices[7][0] = "Mantenibilidad, verificabilidad y flexibilidad";
 choices[7][1] = "Correcci&oacute;n, fiabilidad y amigabilidad";
 choices[7][2] = "Usabilidad, seguridad y rendimiento";
 choices[7][3] = "Reusabilidad, estructuraci&oacute;n e interoperabilidad";
 answers[7] = choices[7][0];
 units[7] = "88";
 comments[7] = "Id Pregunta: 2191. ";


//  Id pregunta: 2200 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;En qu&eacute; consiste la teor&iacute;a libre aplicada a la implantaci&oacute;n de la calidad?:";
 choices[8]= new Array();
 choices[8][0] = "El coste es constante e independiente de la calidad del producto";
 choices[8][1] = "El coste es constante pero dependiente de la calidad del producto";
 choices[8][2] = "El coste es constante s&oacute;lo en algunos casos";
 choices[8][3] = "El coste es independiente de la calidad del producto, aunque no se considera fijo";
 answers[8] = choices[8][0];
 units[8] = "88";
 comments[8] = "Id Pregunta: 2200. NULL";


//  Id pregunta: 2211 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Qu&eacute; es un m&eacute;todo en programaci&oacute;n orientada a objetos?:";
 choices[9]= new Array();
 choices[9][0] = "Una operaci&oacute;n sobre un objeto";
 choices[9][1] = "Un algoritmo";
 choices[9][2] = "Un conjunto de objetos";
 choices[9][3] = "Un atributo de un objeto";
 answers[9] = choices[9][0];
 units[9] = "82";
 comments[9] = "Id Pregunta: 2211. ";


//  Id pregunta: 2213 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Qu&eacute; expresa la dimensi&oacute;n Radial del modelo en Espiral?:";
 choices[10]= new Array();
 choices[10][0] = "Representa el coste acumulativo de las etapas de an&aacute;lisis";
 choices[10][1] = "Representa el gasto inicial del proyecto";
 choices[10][2] = "Representa el coste acumulativo de las etapas realizadas hasta el momento actual";
 choices[10][3] = "Ninguna de las anteriores";
 answers[10] = choices[10][2];
 units[10] = "76";
 comments[10] = "Id Pregunta: 2213. ";


//  Id pregunta: 2219 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Qu&eacute; t&eacute;cnica de las utilizadas en la metodolog&iacute;a M&Eacute;TRICA V3 tiene entre sus objetivos obtener un dise&ntilde;o que no s&oacute;lo 'funcione', sino que tambi&eacute;n sea mantenible, mejore la reutilizaci&oacute;n y se pueda probar y entender f&aacute;cilmente?:";
 choices[11]= new Array();
 choices[11][0] = "El modelo Entidad/Relaci&oacute;n";
 choices[11][1] = "Los diagramas de flujo de datos";
 choices[11][2] = "La historia de la vida de las entidades";
 choices[11][3] = "Diagrama de estructura";
 answers[11] = choices[11][3];
 units[11] = "86";
 comments[11] = "Id Pregunta: 2219. NULL";


//  Id pregunta: 2222 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  A la cantidad de recursos de computador y codificaci&oacute;n requerida para que un programa ejecute una funci&oacute;n se llama:";
 choices[12]= new Array();
 choices[12][0] = "Correcci&oacute;n";
 choices[12][1] = "Fiabilidad";
 choices[12][2] = "Eficiencia";
 choices[12][3] = "Integridad";
 answers[12] = choices[12][2];
 units[12] = "88";
 comments[12] = "Id Pregunta: 2222. ";


//  Id pregunta: 2229 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Al aplicar COCOMO, la diferencia de usar Ensamblador o usar Pascal ser&aacute;:";
 choices[13]= new Array();
 choices[13][0] = "Ensamblador va a resultar m&aacute;s complicado para evaluar COCOMO";
 choices[13][1] = "Pascal ser&aacute; de m&aacute;s nivel que ensamblador";
 choices[13][2] = "Pascal ser&aacute; de menos nivel que ensamblador";
 choices[13][3] = "Da lo mismo usar un lenguaje que otro";
 answers[13] = choices[13][1];
 units[13] = "89";
 comments[13] = "Id Pregunta: 2229. NULL";


//  Id pregunta: 2258 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  Despu&eacute;s de analizar un problema para el dise&ntilde;o de un sistema de informaci&oacute;n, se debe conocer:";
 choices[14]= new Array();
 choices[14][0] = "La estructura que tendr&aacute; el sistema inform&aacute;tico";
 choices[14][1] = "La informaci&oacute;n de salida deseada, los tratamientos a realizar y el dise&ntilde;o que tendr&aacute;n las tablas";
 choices[14][2] = "Los datos de que se dispone y las salidas que se desean obtener";
 choices[14][3] = "La informaci&oacute;n de salida deseada, los datos de entrada y los tratamientos a realizar con los datos";
 answers[14] = choices[14][3];
 units[14] = "78";
 comments[14] = "Id Pregunta: 2258. ";


//  Id pregunta: 2275 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  El esquema formal para la clasificaci&oacute;n de proyectos inform&aacute;ticos del Plan General de Garant&iacute;a de Calidad implica la realizaci&oacute;n secuencial de una serie de cuatro procesos:";
 choices[15]= new Array();
 choices[15][0] = "Diagrama caracter&iacute;stico de la aplicaci&oacute;n, perfil de riesgos potenciales, plan de contingencia y focos de riesgo";
 choices[15][1] = "Modelo de referencia b&aacute;sico, modelo de referencia detallado, perfil de riesgos potenciales y puntos de especial atenci&oacute;n";
 choices[15][2] = "Diagrama caracter&iacute;stico de la aplicaci&oacute;n, modelo de referencia para el desarrollo, perfil de riesgos potenciales y focos de inter&eacute;s";
 choices[15][3] = "Objetivos del proyecto, plan de implantaci&oacute;n, inventario de recursos y perfil de riesgos potenciales";
 answers[15] = choices[15][2];
 units[15] = "88";
 comments[15] = "Id Pregunta: 2275. ";


//  Id pregunta: 2289 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  El modelo en espiral del ciclo de vida presenta alguna dificultades como son:";
 choices[16]= new Array();
 choices[16][0] = "Depender en exceso de la experiencia en la evaluaci&oacute;n de riesgos";
 choices[16][1] = "Ajustar su aplicabilidad para el caso del software contratado";
 choices[16][2] = "Necesidad de una elaboraci&oacute;n adicional de los pasos del modelo en espiral";
 choices[16][3] = "Todas las anteriores son dificultades del modelo en espiral";
 answers[16] = choices[16][3];
 units[16] = "76";
 comments[16] = "Id Pregunta: 2289. ";


//  Id pregunta: 2297 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  El plan de sistemas de informaci&oacute;n de METRICA V3:";
 choices[17]= new Array();
 choices[17][0] = "Debe incluir una evaluaci&oacute;n de los recursos necesarios para los proyectos a desarrollar en los pr&oacute;ximos 5 a&ntilde;os, con el objetivo de tenerlos en cuenta en los presupuestos";
 choices[17][1] = "Incluye actividades tales como &quot;generaci&oacute;n de especificaciones de construcci&oacute;n&quot;, &quot;dise&ntilde;o de la arquitectura de m&oacute;dulos del sistema&quot; y &quot;especificaciones t&eacute;cnicas del plan de pruebas&quot;";
 choices[17][2] = "Tiene una perspectiva estrat&eacute;gica y operativa, pero no tecnol&oacute;gica";
 choices[17][3] = "No requiere la participaci&oacute;n del responsable de mantenimiento";
 answers[17] = choices[17][2];
 units[17] = "86";
 comments[17] = "Id Pregunta: 2297. NULL";


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


//  Id pregunta: 2348 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  En un DFD el elemento usado para representar una actividad que transforma los flujos de entrada en otros de salida es:";
 choices[19]= new Array();
 choices[19][0] = "El programa";
 choices[19][1] = "El proceso";
 choices[19][2] = "El nodo";
 choices[19][3] = "La entidad";
 answers[19] = choices[19][1];
 units[19] = "81";
 comments[19] = "Id Pregunta: 2348. ";


//  Id pregunta: 2353 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  En una representaci&oacute;n gr&aacute;fica del ciclo de vida de desarrollo de software en espiral, indicar que es lo que representa la dimensi&oacute;n radial:";
 choices[20]= new Array();
 choices[20][0] = "Los costes de desarrollo acumulativos";
 choices[20][1] = "El progreso hecho en cumplimentar cada desarrollo en espiral";
 choices[20][2] = "El an&aacute;lisis de riesgos";
 choices[20][3] = "Los costes de explotaci&oacute;n del proyecto";
 answers[20] = choices[20][0];
 units[20] = "76";
 comments[20] = "Id Pregunta: 2353. ";


//  Id pregunta: 2383 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  Indicar cu&aacute;l de los siguientes componentes no pertenece al Plan General de Garant&iacute;a de Calidad elaborado por el Ministerio de Administraciones P&uacute;blicas para el Consejo Superior de Inform&aacute;tica en 1991:";
 choices[21]= new Array();
 choices[21][0] = "Esquema formal para la clasificaci&oacute;n de proyectos inform&aacute;ticos";
 choices[21][1] = "Procedimientos de Control de Calidad";
 choices[21][2] = "Plan de desarrollo de prototipos";
 choices[21][3] = "Gu&iacute;a metodol&oacute;gica para la elaboraci&oacute;n de Planes de Garant&iacute;a de Calidad";
 answers[21] = choices[21][2];
 units[21] = "87.88";
 comments[21] = "Id Pregunta: 2383. NULL";


//  Id pregunta: 2390 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  La documentaci&oacute;n en el modelo en cascada:";
 choices[22]= new Array();
 choices[22][0] = "Para algunos tipos de software, como compiladores o sistemas operativos, esta forma de proceder es la m&aacute;s efectiva. Sin embargo no es la m&aacute;s adecuada para otros tipos de software como, particularmente, el que se usa en las aplicaciones interactivas y de usuario final";
 choices[22][1] = "Contempla todos los productos de las fases; informes, programas, pruebas";
 choices[22][2] = "Determina la finalizaci&oacute;n de una etapa y el paso a la siguiente";
 choices[22][3] = "Todas las respuestas anteriores son ciertas";
 answers[22] = choices[22][3];
 units[22] = "76";
 comments[22] = "Id Pregunta: 2390. ";


//  Id pregunta: 2409 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Al nivel b&aacute;sico de comprensi&oacute;n que determina la comprensi&oacute;n del significado del mensaje, eliminando las posibles interpretaciones absurdas y comprobando la coherencia del mensaje recibido con el conocimiento previo que se tiene de la realidad, se denomina:";
 choices[23]= new Array();
 choices[23][0] = "Nivel fonol&oacute;gico";
 choices[23][1] = "Nivel l&eacute;xico-sint&aacute;ctico";
 choices[23][2] = "Nivel pros&oacute;dico";
 choices[23][3] = "Nivel sem&aacute;ntico-pragm&aacute;tico";
 answers[23] = choices[23][3];
 units[23] = "94";
 comments[23] = "Id Pregunta: 2409. ";


//  Id pregunta: 2426 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  El tipo de indizaci&oacute;n por descriptores consistente en utilizar t&eacute;cnicas de an&aacute;lisis morfol&oacute;gico y sem&aacute;ntico para captar la estructura del texto, se denomina:";
 choices[24]= new Array();
 choices[24][0] = "M&eacute;todo estad&iacute;stico";
 choices[24][1] = "M&eacute;todo por asignaci&oacute;n de los conceptos clave del documento";
 choices[24][2] = "M&eacute;todo sint&aacute;ctico";
 choices[24][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[24] = choices[24][2];
 units[24] = "96";
 comments[24] = "Id Pregunta: 2426. NULL";


//  Id pregunta: 2454 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Los criterios, ordenados de menor a mayor, para definir el nivel de cohesi&oacute;n son:";
 choices[25]= new Array();
 choices[25][0] = "Cohesi&oacute;n coincidental, cohesi&oacute;n temporal, cohesi&oacute;n l&oacute;gica, cohesi&oacute;n procedimental, cohesi&oacute;n de comunicaci&oacute;n, cohesi&oacute;n secuencial, cohesi&oacute;n funcional.";
 choices[25][1] = "Cohesi&oacute;n coincidental, cohesi&oacute;n l&oacute;gica, cohesi&oacute;n temporal, cohesi&oacute;n procedimental, cohesi&oacute;n de comunicaci&oacute;n, cohesi&oacute;n secuencial, cohesi&oacute;n funcional.";
 choices[25][2] = "Cohesi&oacute;n coincidental, cohesi&oacute;n temporal, cohesi&oacute;n l&oacute;gica, cohesi&oacute;n de comunicaci&oacute;n, cohesi&oacute;n procedimental, cohesi&oacute;n secuencial, cohesi&oacute;n funcional.";
 choices[25][3] = "Cohesi&oacute;n coincidental, cohesi&oacute;n l&oacute;gica, cohesi&oacute;n temporal, cohesi&oacute;n de comunicaci&oacute;n, cohesi&oacute;n procedimental, cohesi&oacute;n secuencial, cohesi&oacute;n funcional.";
 answers[25] = choices[25][1];
 units[25] = "84";
 comments[25] = "Id Pregunta: 2454. ";


//  Id pregunta: 2485 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  Respecto de la 'calidad del software' vs 'costes de implantaci&oacute;n' existen teor&iacute;as como:";
 choices[26]= new Array();
 choices[26][0] = "Teor&iacute;a libre : el coste es constante e independiente de la calidad del producto";
 choices[26][1] = "Teor&iacute;a de la productividad: un producto de calidad es m&aacute;s barato de producir, consecuentemente el coste disminuye exponencialmente con el aumento de calidad";
 choices[26][2] = "Teor&iacute;a de calidad/coste: el coste de producci&oacute;n aumenta exponencialmente con el aumento de calidad";
 choices[26][3] = "Las 3 teor&iacute;as anteriores existen";
 answers[26] = choices[26][3];
 units[26] = "87.88";
 comments[26] = "Id Pregunta: 2485. NULL";


//  Id pregunta: 2517 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  &iquest;A qu&eacute; se denomina dentro de los lenguajes documentales 'silencios documentales'?:";
 choices[27]= new Array();
 choices[27][0] = "A la informaci&oacute;n excedente";
 choices[27][1] = "A la informaci&oacute;n no excedente";
 choices[27][2] = "A los datos solicitados pero no obtenidos por ruptura del proceso";
 choices[27][3] = "A los datos solicitados pero no obtenidos por distorsi&oacute;n del proceso";
 answers[27] = choices[27][3];
 units[27] = "96";
 comments[27] = "Id Pregunta: 2517. NULL";


//  Id pregunta: 2518 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  &iquest;Cu&aacute;l de estas t&eacute;cnicas pierde parte de la  informaci&oacute;n al comprimirla?:";
 choices[28]= new Array();
 choices[28][0] = "Huffman";
 choices[28][1] = "JPEG";
 choices[28][2] = "TIFF";
 choices[28][3] = "LZW";
 answers[28] = choices[28][1];
 units[28] = "93";
 comments[28] = "Id Pregunta: 2518. NULL";


//  Id pregunta: 2527 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  En inform&aacute;tica, el t&eacute;rmino de recuperaci&oacute;n en texto libre se utiliza para describir:";
 choices[29]= new Array();
 choices[29][0] = "La recuperaci&oacute;n en un base de datos que posee &iacute;ndices asociados";
 choices[29][1] = "La recuperaci&oacute;n en un base de datos que almacena el texto &iacute;ntegro, y donde cada palabra del texto es indexada";
 choices[29][2] = "La recuperaci&oacute;n en un base de datos que almacena el texto &iacute;ntegro y carece de &iacute;ndices";
 choices[29][3] = "La recuperaci&oacute;n en un base de datos que almacena el texto &iacute;ntegro, y donde cada palabra del texto es indexada, a excepci&oacute;n de las contenidas en el diccionario de palabras vac&iacute;as";
 answers[29] = choices[29][3];
 units[29] = "96";
 comments[29] = "Id Pregunta: 2527. NULL";


//  Id pregunta: 2540 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  Los denominados paquetes integrados poseen como caracter&iacute;stica fundamental:";
 choices[30]= new Array();
 choices[30][0] = "Un potente sistema de comunicaciones.";
 choices[30][1] = "La conectividad en sus funciones y gran comodidad en el manejo de datos.";
 choices[30][2] = "Facilidad para el manejo de grandes vol&uacute;menes de datos.";
 choices[30][3] = "El incrementar la potencia real del ordenador al incorporar tarjetas de expansi&oacute;n de memoria.";
 answers[30] = choices[30][1];
 units[30] = "84";
 comments[30] = "Id Pregunta: 2540. ";


//  Id pregunta: 2564 AÃ±o de creación de pregunta: 2004-01-01
 questions[31]= "32)  En el dise&ntilde;o estructurado, &iquest;Qu&eacute; es la cohesi&oacute;n? ";
 choices[31]= new Array();
 choices[31][0] = "Todas son falsas.";
 choices[31][1] = "Es una medida de la coherencia y/o complejidad funcional interna de un m&oacute;dulo.";
 choices[31][2] = "Es la medida de la complejidad externa de un modulo de acuerdo a sus interfaces.";
 choices[31][3] = "B y C son ciertas.";
 answers[31] = choices[31][1];
 units[31] = "84";
 comments[31] = "Id Pregunta: 2564. ";


//  Id pregunta: 2616 AÃ±o de creación de pregunta: 2003-01-01
 questions[32]= "33)  &iquest;Cu&aacute;l de los siguientes no es un resultado de la fase de DSI en Metrica v3?";
 choices[32]= new Array();
 choices[32][0] = "Glosario";
 choices[32][1] = "Cat&aacute;logo excepciones";
 choices[32][2] = "procedimientos de seguridad y control de acceso";
 choices[32][3] = "Cat&aacute;logo de normas para dise&ntilde;o y construcci&oacute;n";
 answers[32] = choices[32][0];
 units[32] = "86";
 comments[32] = "Id Pregunta: 2616. ";


//  Id pregunta: 2654 AÃ±o de creación de pregunta: 2003-01-01
 questions[33]= "34)  La t&eacute;cnica de puntos de funci&oacute;n es una t&eacute;cnica para determinar";
 choices[33]= new Array();
 choices[33][0] = "La magnitud de un proyecto inform&aacute;tico y su probable coste";
 choices[33][1] = "La calidad de una aplicaci&oacute;n SW y la tase de errores prevista";
 choices[33][2] = "La amigabilidad de un interfaz y la previsi&oacute;n de errores de usuario ";
 choices[33][3] = "La seguridad de una aplicaci&oacute;n y su riesgo de intrusi&oacute;n";
 answers[33] = choices[33][0];
 units[33] = "89";
 comments[33] = "Id Pregunta: 2654. NULL";


//  Id pregunta: 2708 AÃ±o de creación de pregunta: 2003-01-01
 questions[34]= "35)  Tenemos dos discos sobre los que est&aacute; instalada una base de datos, y adem&aacute;s en el disco 2 se ubica el fichero de log backup. Sabiendo que la copia de la base de datos es posterior a la del fichero de log cual ser&iacute;a la  forma de proceder si el disco 2 cae";
 choices[34]= new Array();
 choices[34][0] = "Restaurar la base completa con su &uacute;ltima copia y rehacer las transacciones manualmente a partir de esa fecha";
 choices[34][1] = "Restaurar la base y recuperar autom&aacute;ticamente del fichero de log";
 choices[34][2] = "Restaurar la parte de las tablas y ficheros del disco dos y luego manualmente rehacer las transcciones";
 choices[34][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[34] = choices[34][0];
 units[34] = "96";
 comments[34] = "Id Pregunta: 2708. NULL";


//  Id pregunta: 2741 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  En el modelo entidad-relaci&oacute;n de CHEN la cardinalidad es:";
 choices[35]= new Array();
 choices[35][0] = "El n&uacute;mero de tablas";
 choices[35][1] = "El n&uacute;mero de elementos del modelo";
 choices[35][2] = "El n&uacute;mero m&iacute;nimo y m&aacute;ximo de entidades de un tipo de entidad que se relacionan con una entidad del otro tipo.";
 choices[35][3] = "El n&uacute;mero de relaciones unitarias";
 answers[35] = choices[35][2];
 units[35] = "80";
 comments[35] = "Id Pregunta: 2741. ";


//  Id pregunta: 2760 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  Un sistema operativo de tiempo real se caracteriza por:";
 choices[36]= new Array();
 choices[36][0] = "Manejo eficaz de interrupciones.";
 choices[36][1] = "Gesti&oacute;n de memoria real y no virtual.";
 choices[36][2] = "Bloqueo de los procesos cuando est&aacute;n en espera y, normalmente, gesti&oacute;n FIFO de las colas de procesos bloqueados.";
 choices[36][3] = "Todas las anteriores.";
 answers[36] = choices[36][3];
 units[36] = "83";
 comments[36] = "Id Pregunta: 2760. ";


//  Id pregunta: 2773 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  &iquest;C&oacute;mo se denomina el acoplamiento donde la comunicaci&oacute;n entre m&oacute;dulos es a trav&eacute;s de estructuras de datos?";
 choices[37]= new Array();
 choices[37][0] = "Acoplamiento de marca.";
 choices[37][1] = "Acoplamiento de control.";
 choices[37][2] = "Acoplamiento externo.";
 choices[37][3] = "Acoplamiento com&uacute;n.";
 answers[37] = choices[37][0];
 units[37] = "84";
 comments[37] = "Id Pregunta: 2773. ";


//  Id pregunta: 2784 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  En M&Eacute;TRICA v.3 la seguridad del sistema de informaci&oacute;n se contempla en:";
 choices[38]= new Array();
 choices[38][0] = "La interface de Seguridad y en el An&aacute;lisis del Sistema de Informaci&oacute;n.";
 choices[38][1] = "S&oacute;lo en la interface de Seguridad.";
 choices[38][2] = "En la Planificaci&oacute;n de Sistemas de Informaci&oacute;n y en el Estudio de Viabilidad del Sistema.";
 choices[38][3] = "No est&aacute; contemplada. A este respecto, M&eacute;trica v.3 remite a la metodolog&iacute;a MAGERIT.";
 answers[38] = choices[38][0];
 units[38] = "86";
 comments[38] = "Id Pregunta: 2784. ";


//  Id pregunta: 2812 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  Est&aacute;dares de Calidad de M&eacute;trica v3";
 choices[39]= new Array();
 choices[39][0] = "Norma ISO 9001";
 choices[39][1] = "norma  ISO 9000-2003";
 choices[39][2] = "normas ISO 9000-2000 y norma ISO 9001-2000";
 choices[39][3] = "norma ISO 9000-2001";
 answers[39] = choices[39][2];
 units[39] = "88";
 comments[39] = "Id Pregunta: 2812. NULL";


//  Id pregunta: 2824 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  Se&ntilde;ale el critero falso en la migraci&oacute;n de aplicaciones en el marco de un ajuste dimensional.";
 choices[40]= new Array();
 choices[40][0] = "Interconectividad: las aplicaciones que requieren un alto grado de conectividad entre los usuarios son las que mejor se adaptan a ser implementadas en un entorno descentralizado sobre una red de &aacute;rea local.";
 choices[40][1] = "Requisitos de tiempo de respuesta: a veces conviene descentralizar la informaci&oacute;n para asegurar un tiempo de respuesta r&aacute;pido, evitando esperas en el acceso a las bases de datos residentes en el mainframe.";
 choices[40][2] = "Seguridad: las aplicaciones con unos requisitos estrictos de seguridad tanto en lo referente a la protecci&oacute;n de informaci&oacute;n sensible, como en lo que respecta a los da&ntilde;os accidentales son candidatas ideales para el ajuste dimensional.";
 choices[40][3] = "Control: al migrar aplicaciones desde un entorno centralizado a uno distribuido se pierde control sobre las mismas. No obstante, est&aacute;n surgiendo herramientas que permiten controlar eficaz y centralizadamente la distribuci&oacute;n e instalaci&oacute;n.";
 answers[40] = choices[40][2];
 units[40] = "90";
 comments[40] = "Id Pregunta: 2824. ";


//  Id pregunta: 2880 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  En la matriz de puntuaci&oacute;n REDER, utilizada para puntuar las memorias de las organizaciones que se presentan al Premio Europeo de la Calidad, al subcriterio 7b se le asigna, del total de puntos correspondientes al criterio 7, el:";
 choices[41]= new Array();
 choices[41][0] = "0.1";
 choices[41][1] = "0.15";
 choices[41][2] = "0.2";
 choices[41][3] = "0.25";
 answers[41] = choices[41][3];
 units[41] = "92";
 comments[41] = "Id Pregunta: 2880. NULL";


//  Id pregunta: 4240 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  Cual de las siguientes no es una caracter&iacute;stica del PUDS (Proceso Unificado de Desarrollo del SW)";
 choices[42]= new Array();
 choices[42][0] = "No tiene en cuenta el control de calidad";
 choices[42][1] = "Proceso centrado en la arquitectura";
 choices[42][2] = "Proceso dirigido por los casos de uso";
 choices[42][3] = "Proceso incremental e iterativo";
 answers[42] = choices[42][0];
 units[42] = "79";
 comments[42] = "Id Pregunta: 4240. ";


//  Id pregunta: 4294 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  M&eacute;trica versi&oacute;n 3:";
 choices[43]= new Array();
 choices[43][0] = "No establece diferencias entre los desarrollos orientados a objetos y los desarrollos estructurados.";
 choices[43][1] = "Cubre desarrollos estructurados y de orientaci&oacute;n a objetos";
 choices[43][2] = "Establece en el Proceso de Desarrollo de Sistemas de informaci&oacute;n 3 Procesos (EVS, DSI y CSI).";
 choices[43][3] = "No cubre desarrollos orientados a objeto";
 answers[43] = choices[43][1];
 units[43] = "86";
 comments[43] = "Id Pregunta: 4294. NULL";


//  Id pregunta: 4370 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  El algoritmo de b&uacute;squeda binaria o dicot&oacute;mica";
 choices[44]= new Array();
 choices[44][0] = "Es siempre el m&aacute;s r&aacute;pido de los algoritmos de b&uacute;squeda.";
 choices[44][1] = "No se puede implementar mediante funciones recursivas.";
 choices[44][2] = "Exige que el array est&eacute; totalmente ordenado.";
 choices[44][3] = "Tambi&eacute;n es conocido con el nombre de &ldquo;Quicksort&rdquo;.";
 answers[44] = choices[44][2];
 units[44] = "";
 comments[44] = "Id Pregunta: 4370. ";


//  Id pregunta: 4374 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas no es propia del modelado de sistemas?";
 choices[45]= new Array();
 choices[45][0] = "Descomposici&oacute;n.";
 choices[45][1] = "Partici&oacute;n en clases de equivalencia.";
 choices[45][2] = "Aproximaciones sucesivas.";
 choices[45][3] = "An&aacute;lisis del dominio.";
 answers[45] = choices[45][1];
 units[45] = "80";
 comments[45] = "Id Pregunta: 4374. ";


//  Id pregunta: 4375 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  Indique cu&aacute;l de los siguientes no es un proceso principal incluido en M&eacute;trica versi&oacute;n 3:";
 choices[46]= new Array();
 choices[46][0] = "Desarrollo de Sistemas de Informaci&oacute;n.";
 choices[46][1] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n.";
 choices[46][2] = "Mantenimiento de Sistemas de Informaci&oacute;n.";
 choices[46][3] = "An&aacute;lisis de Requisitos del Sistema.";
 answers[46] = choices[46][3];
 units[46] = "86";
 comments[46] = "Id Pregunta: 4375. NULL";


//  Id pregunta: 4379 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  En el an&aacute;lisis y dise&ntilde;o de software, el flujo de transacci&oacute;n es una t&eacute;cnica de:";
 choices[47]= new Array();
 choices[47][0] = "Refinamiento progresivo.";
 choices[47][1] = "Descomposici&oacute;n modular.";
 choices[47][2] = "An&aacute;lisis estructurado.";
 choices[47][3] = "Dise&ntilde;o estructurado.";
 answers[47] = choices[47][3];
 units[47] = "83";
 comments[47] = "Id Pregunta: 4379. ";


//  Id pregunta: 4480 AÃ±o de creación de pregunta: 2007-01-01
 questions[48]= "49)  En el dise&ntilde;o estructurado de sistemas &iquest;Cuales son los elementos principales de un diagrama de estructura?";
 choices[48]= new Array();
 choices[48][0] = " Atributos, entidades, relaciones y flujos de caja.";
 choices[48][1] = "M&oacute;dulos, entidades y cajas operacionales.";
 choices[48][2] = "Entidades, conexiones entre entidades y flujos de m&oacute;dulos.";
 choices[48][3] = "M&oacute;dulos, conexiones entre los m&oacute;dulos y comunicaciones entre los m&oacute;dulos.";
 answers[48] = choices[48][3];
 units[48] = "86";
 comments[48] = "Id Pregunta: 4480. NULL";


//  Id pregunta: 4504 AÃ±o de creación de pregunta: 2007-01-01
 questions[49]= "50)  &iquest;Cual de las siguientes es una norma certificable?";
 choices[49]= new Array();
 choices[49][0] = "UNE 71501 IN";
 choices[49][1] = "UNE ISO/IEC 17799:2002";
 choices[49][2] = "UNE 71502:2004";
 choices[49][3] = "BS 7799-1";
 answers[49] = choices[49][2];
 units[49] = "";
 comments[49] = "Id Pregunta: 4504. ";


//  Id pregunta: 4529 AÃ±o de creación de pregunta: 2007-01-01
 questions[50]= "51)  &iquest;Cual de los siguientes no es un perfil contemplado en Ia metodolog&iacute;a M&eacute;trica 3?";
 choices[50]= new Array();
 choices[50][0] = "Perfil Directivo.";
 choices[50][1] = "Perfil Jefe de Proyecto.";
 choices[50][2] = "Perfil Consultor.";
 choices[50][3] = "Perfil Usuario.";
 answers[50] = choices[50][3];
 units[50] = "86";
 comments[50] = "Id Pregunta: 4529. NULL";


//  Id pregunta: 4841 AÃ±o de creación de pregunta: 2007-01-01
 questions[51]= "52)  El software utilizado para controlar una fotocopiadora avanzada requiere 32.000 l&iacute;neas de c&oacute;digo C y 4.200 l&iacute;neasde c&oacute;digo en un lenguaje especializado de Cuarta Generaci&oacute;n (4GL). Teniendo en cuenta que en los lenguajes4GL se cumple que el ratio LDC/PF (L&iacute;neas de C&oacute;digo/Puntos de Funci&oacute;n) es 20 y en c&oacute;digo C el ratio es 128LDC/PF, &iquest;cu&aacute;l es el n&uacute;mero de puntos de funci&oacute;n del software de gesti&oacute;n de la fotocopiadora?";
 choices[51]= new Array();
 choices[51][0] = "148";
 choices[51][1] = "250";
 choices[51][2] = "460";
 choices[51][3] = "210";
 answers[51] = choices[51][2];
 units[51] = "89";
 comments[51] = "Id Pregunta: 4841. NULL";


//  Id pregunta: 4842 AÃ±o de creación de pregunta: 2007-01-01
 questions[52]= "53)  La metodolog&iacute;a M&Eacute;TRICA versi&oacute;n 3 contempla diferencias con relaci&oacute;n a los productos resultantes del proceso &quot;An&aacute;lisis del sistema de informaci&oacute;n (ASI)&quot; seg&uacute;n sea Orientado a Objetos o Estructurado. Bajo esta premisa, &iquest;cu&aacute;lde las siguientes afirmaciones NO es cierta?";
 choices[52]= new Array();
 choices[52][0] = "El Cat&aacute;logo de Requisitos y el Glosario de T&eacute;rminos son productos comunes requeridos";
 choices[52][1] = "Entre los productos se&ntilde;alados para el an&aacute;lisis estructurado est&aacute; el Modelo de Procesos";
 choices[52][2] = "Se especifica el Modelo de Negocio para el an&aacute;lisis orientado a objetos";
 choices[52][3] = "La especificaci&oacute;n de la Interfaz de Usuario s&oacute;lo se solicita para el an&aacute;lisis orientado a objetos";
 answers[52] = choices[52][3];
 units[52] = "86";
 comments[52] = "Id Pregunta: 4842. NULL";


//  Id pregunta: 4925 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  En M&eacute;trica 3, entre los productos finales obtenidos del proceso de Planificaci&oacute;n de Sistemas de Informaci&oacute;n (PSI) NO se incluye:";
 choices[53]= new Array();
 choices[53][0] = "La arquitectura de informaci&oacute;n.";
 choices[53][1] = "La arquitectura tecnol&oacute;gica.";
 choices[53][2] = "El modelo de sistemas de informaci&oacute;n.";
 choices[53][3] = "El an&aacute;lisis del sistema de informaci&oacute;n.";
 answers[53] = choices[53][3];
 units[53] = "86";
 comments[53] = "Id Pregunta: 4925. Examen TIC B 2007";


//  Id pregunta: 4930 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  En la metodolog&iacute;a M&eacute;trica V3, la especificaci&oacute;n del Plan de Pruebas se inicia en el proceso denominado:";
 choices[54]= new Array();
 choices[54][0] = "An&aacute;lisis del Sistema de Informaci&oacute;n.";
 choices[54][1] = "Estudio de Viabilidad del Sistema.";
 choices[54][2] = "Dise&ntilde;o de Sistema de Informaci&oacute;n.";
 choices[54][3] = "Construcci&oacute;n del Sistema de Informaci&oacute;n.";
 answers[54] = choices[54][0];
 units[54] = "86";
 comments[54] = "Id Pregunta: 4930. Examen TIC B 2007";


//  Id pregunta: 4937 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  En el Modelo E/R de Chen del universo de discurso del departamento de RRHH de una cierta organizaci&oacute;n,existe la restricci&oacute;n, en base a un criterio fijado por la Direcci&oacute;n, de que el atributo &ldquo;mes&rdquo; de la entidad&ldquo;vacaciones&rdquo; s&oacute;lo podr&aacute; tomar los valores &lsquo;Junio&rsquo;, &lsquo;Julio&rsquo; y &lsquo;Agosto&rsquo;. Esta restricci&oacute;n o limitaci&oacute;n deintegridad es de tipo:";
 choices[55]= new Array();
 choices[55][0] = "Sint&aacute;ctica.";
 choices[55][1] = "Sem&aacute;ntica estructural.";
 choices[55][2] = "Sem&aacute;ntica de usuario sobre los valores.";
 choices[55][3] = "Sem&aacute;ntica de usuario sobre la asociaci&oacute;n.";
 answers[55] = choices[55][2];
 units[55] = "80";
 comments[55] = "Id Pregunta: 4937. Examen TIC B 2007";


//  Id pregunta: 5107 AÃ±o de creación de pregunta: 2003-01-01
 questions[56]= "57)  La norma ISO 9001 cuando se desarrolla, implementa y mejora la eficacia de un sistema de gesti&oacute;n de calidad promueve un enfoque:";
 choices[56]= new Array();
 choices[56][0] = "Basado en procesos.";
 choices[56][1] = "Basado en tareas.";
 choices[56][2] = "Basado en el usuario.";
 choices[56][3] = "Basado en recursos.";
 answers[56] = choices[56][0];
 units[56] = "87";
 comments[56] = "Id Pregunta: 5107. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5176 AÃ±o de creación de pregunta: 2003-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l no es, seg&uacute;n Pressman, en el modelo de especificaciones de requisitos software, uno de los objetivos a cumplir?";
 choices[57]= new Array();
 choices[57][0] = "Describir lo que el cliente quiere.";
 choices[57][1] = "Determinar, junto con el cliente, la tecnolog&iacute;a a utilizar";
 choices[57][2] = "Establecer una base para la creaci&oacute;n de un dise&ntilde;o de software";
 choices[57][3] = "Definir un conjunto de requisitos que una vez el sistema construido se puedan validar";
 answers[57] = choices[57][1];
 units[57] = "78";
 comments[57] = "Id Pregunta: 5176. ";


//  Id pregunta: 5186 AÃ±o de creación de pregunta: 2003-01-01
 questions[58]= "59)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas no forma parte del conjunto de t&eacute;cnicas del an&aacute;lisis estructurado?";
 choices[58]= new Array();
 choices[58][0] = "Diagrama de Transici&oacute;n de Estados (DTE)";
 choices[58][1] = "Diagrama de Flujos de Datos (DFD)";
 choices[58][2] = "Diagrama de Flujos de Procesos (DFP)";
 choices[58][3] = "Diagrama de Flujos de Control (DFC)";
 answers[58] = choices[58][2];
 units[58] = "81";
 comments[58] = "Id Pregunta: 5186. ";


//  Id pregunta: 5258 AÃ±o de creación de pregunta: 2003-01-01
 questions[59]= "60)  En relaci&oacute;n a Cocomo II:";
 choices[59]= new Array();
 choices[59][0] = "Surge en 1997 para solventar las limitaciones de Cocomo.";
 choices[59][1] = "Propone 3 modelos: Composici&oacute;n de la Aplicaci&oacute;n, Dise&ntilde;o previo y post-arquitectura.";
 choices[59][2] = "El modelo de Composici&oacute;n de la aplicaci&oacute;n se basa en l&iacute;neas de c&oacute;digo.";
 choices[59][3] = "Todas son correctas.";
 answers[59] = choices[59][0];
 units[59] = "88";
 comments[59] = "Id Pregunta: 5258. NULL";


//  Id pregunta: 5480 AÃ±o de creación de pregunta: 2003-01-01
 questions[60]= "61)  El modelo de desarrollo conocido como el bazar";
 choices[60]= new Array();
 choices[60][0] = "Fue promulgado por Linus Torvald";
 choices[60][1] = "No se aplica a desarrollos comerciales";
 choices[60][2] = "Se basa en la metodolog&iacute;a Extreme Programming";
 choices[60][3] = "Todas las respuestas anteriores son incorrectas";
 answers[60] = choices[60][3];
 units[60] = "61";
 comments[60] = "Id Pregunta: 5480. Castilla y Le&oacute;n";


//  Id pregunta: 5543 AÃ±o de creación de pregunta: 2003-01-01
 questions[61]= "62)  Indicar cu&aacute;l de los siguientes no es un apartado contemplado por los criterios SNC del CSAE para elaborar un plan de contingencias";
 choices[61]= new Array();
 choices[61][0] = "Papeles y responsabilidades de los distintos actores";
 choices[61][1] = "Planificaci&oacute;n de recursos cuando se opera en situaci&oacute;n de contingencia";
 choices[61][2] = "Criterios para el retorno a explotaci&oacute;n normal";
 choices[61][3] = "Todos los anteriores son v&aacute;lidos";
 answers[61] = choices[61][3];
 units[61] = "97";
 comments[61] = "Id Pregunta: 5543. NULL";


//  Id pregunta: 5575 AÃ±o de creación de pregunta: 2003-01-01
 questions[62]= "63)  &iquest;Qu&eacute; modelo escoger&iacute;a si el objetivo se centra en la mejora de los procesos de desarrollo de aplicaciones?";
 choices[62]= new Array();
 choices[62][0] = "ITIL";
 choices[62][1] = "CMMI";
 choices[62][2] = "COBIT";
 choices[62][3] = "M&Eacute;TRICA";
 answers[62] = choices[62][1];
 units[62] = "98";
 comments[62] = "Id Pregunta: 5575. NULL";


//  Id pregunta: 5577 AÃ±o de creación de pregunta: 2003-01-01
 questions[63]= "64)  &iquest;Cu&aacute;ntos dominios y procesos forman COBIT?";
 choices[63]= new Array();
 choices[63][0] = "3 dominios y 43 procesos";
 choices[63][1] = "4 dominios y 34 procesos";
 choices[63][2] = "5 dominios y 33 procesos";
 choices[63][3] = "6 dominios y 44 procesos";
 answers[63] = choices[63][1];
 units[63] = "98";
 comments[63] = "Id Pregunta: 5577. NULL";


//  Id pregunta: 6094 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  Seg&uacute;n M&Eacute;TRICA versi&oacute;n 3, pueden identificarse 4 tipos de mantenimiento de sistemas de informaci&oacute;n, entre los que NO se encuentra:";
 choices[64]= new Array();
 choices[64][0] = "Mantenimiento adaptativo.";
 choices[64][1] = "Mantenimiento preventivo.";
 choices[64][2] = "Mantenimiento evolutivo.";
 choices[64][3] = "Mantenimiento correctivo.";
 answers[64] = choices[64][1];
 units[64] = "86";
 comments[64] = "Id Pregunta: 6094. TIC A 2009";


//  Id pregunta: 6219 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  &iquest;Cu&aacute;l de las siguientes no es una ventaja de los est&aacute;ndares de documentaci&oacute;n?";
 choices[65]= new Array();
 choices[65][0] = "Ayuda al entrenamiento del nuevo personal dentro y fuera de la organizaci&oacute;n de Sistemas";
 choices[65][1] = "Es &uacute;til para cualquier que tenga la responsabilidad del mantenimiento de los sistemas";
 choices[65][2] = "Ayuda a los analistas y dise&ntilde;adores de sistemas en el trabajo de integraci&oacute;n de sistemas";
 choices[65][3] = "El tiempo empleado en la documentaci&oacute;n se ve recompensado en al menos un 75% de ahorro en b&uacute;squedas de informaci&oacute;n para el mantenimiento del producto";
 answers[65] = choices[65][3];
 units[65] = "95";
 comments[65] = "Id Pregunta: 6219. TICB-2009, bloque desarrollo";


//  Id pregunta: 6245 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  El modelo CMMI est&aacute; enfocado en tres &aacute;reas: &iquest;Cu&aacute;l de las siguientes no es una de ellas?";
 choices[66]= new Array();
 choices[66][0] = "Desarrollo de servicios y productos - CMMI para el desarrollo (CMMI - DEV)";
 choices[66][1] = "Adquisici&oacute;n de productos y servicios - CMMI para la adquisici&oacute;n (CMMI - ACQ)";
 choices[66][2] = "Establecimiento de Servicios, Gesti&oacute;n y entrega - CMMI para los servicios (CMMI - SVC)";
 choices[66][3] = "Establecimiento de la calidad de servicios y productos - CMMI para la calidad (CMMI - QUA)";
 answers[66] = choices[66][3];
 units[66] = "79";
 comments[66] = "Id Pregunta: 6245. TICB-2009, bloque desarrollo";


//  Id pregunta: 6272 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  &iquest;Cu&aacute;l de los siguientesa no es un objetivo b&aacute;sico que debe cubrir un ciclo de vida?";
 choices[67]= new Array();
 choices[67][0] = "Asegurar la consistencia con el resto de los sistemas de informaci&oacute;n de la organizaci&oacute;n";
 choices[67][1] = "Garantizar la satisfacci&oacute;n del cliente";
 choices[67][2] = "Proporcionar puntos de control para la gesti&oacute;n del proyecto (calendario y presupuesto)";
 choices[67][3] = "Definir las actividades a realizar y en qu&eacute; orden";
 answers[67] = choices[67][1];
 units[67] = "76";
 comments[67] = "Id Pregunta: 6272. ";


//  Id pregunta: 6316 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)  &iquest;Cu&aacute;l de las siguientes no es un tipo de vista en UML?";
 choices[68]= new Array();
 choices[68][0] = "Vista de Casos de Uso.";
 choices[68][1] = "Vista de Componentes.";
 choices[68][2] = "Vista est&aacute;tica.";
 choices[68][3] = "Vista de concurrencia.";
 answers[68] = choices[68][2];
 units[68] = "84";
 comments[68] = "Id Pregunta: 6316. ";


//  Id pregunta: 6525 AÃ±o de creación de pregunta: 2010-01-01
 questions[69]= "70)  Los incidentes se clasifican de acuerdo a su";
 choices[69]= new Array();
 choices[69][0] = "Impacto";
 choices[69][1] = "Urgencia";
 choices[69][2] = "Prioridad";
 choices[69][3] = "Todas las respuestas anteriores son correctas";
 answers[69] = choices[69][3];
 units[69] = "98";
 comments[69] = "Id Pregunta: 6525. NULL";


//  Id pregunta: 6534 AÃ±o de creación de pregunta: 2010-01-01
 questions[70]= "71)  El modelo EFQM de excelencia ";
 choices[70]= new Array();
 choices[70][0] = "Es un modelo din&aacute;mico";
 choices[70][1] = "Sigue el esquema l&oacute;gico REDER (RADAR en ingl&eacute;s)";
 choices[70][2] = "Tiene un car&aacute;cter globalizador que cubre todos los aspectos del funcionamiento de una organizaci&oacute;n";
 choices[70][3] = "Todas las respuestas anteriores son correctas";
 answers[70] = choices[70][3];
 units[70] = "92";
 comments[70] = "Id Pregunta: 6534. NULL";


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


//  Id pregunta: 6636 AÃ±o de creación de pregunta: 2010-01-01
 questions[72]= "73)  Dentro del modelo de calidad EFQM, los 3 criterios de mayor peso por orden son:";
 choices[72]= new Array();
 choices[72][0] = "Satisfacci&oacute;n del Cliente; Impacto en la Sociedad; Resultados";
 choices[72][1] = "Satisfacci&oacute;n del Cliente; Resultados; Procesos";
 choices[72][2] = "Satisfacci&oacute;n del Cliente; Resultados; Liderazgo";
 choices[72][3] = "Resultados; Satisfacci&oacute;n del Cliente; Liderazgo";
 answers[72] = choices[72][1];
 units[72] = "88";
 comments[72] = "Id Pregunta: 6636. NULL";


//  Id pregunta: 6637 AÃ±o de creación de pregunta: 2010-01-01
 questions[73]= "74)  En el modelo COCOMO un proyecto semiacoplado hace referencia a:";
 choices[73]= new Array();
 choices[73][0] = "Aquel en el que el esfuerzo y el coste del proyecto se calcula en funci&oacute;n de las LOC y adem&aacute;s a&ntilde;ade una evaluaci&oacute;n subjetiva";
 choices[73][1] = "Proyectos peque&ntilde;os y sencillos con un equipo de trabajo estable, con buena experiencia y que cuenten con unos requerimientos poco r&iacute;gidos";
 choices[73][2] = "Proyectos de complejidad media, equipos con distintos niveles de experiencia y dentro de un software con terminales y bases de datos";
 choices[73][3] = "Proyectos que deban desarrollarse para ser acoplados en un hardware y software estricto y con restricciones operativas";
 answers[73] = choices[73][2];
 units[73] = "88";
 comments[73] = "Id Pregunta: 6637. NULL";


//  Id pregunta: 7348 AÃ±o de creación de pregunta: 2010-01-01
 questions[74]= "75)  &iquest;Cu&aacute;l de los siguientes gestores de contenidos est&aacute; escrito en PHP?";
 choices[74]= new Array();
 choices[74][0] = "Typo3";
 choices[74][1] = "Liferay";
 choices[74][2] = "Alfresco";
 choices[74][3] = "Plone";
 answers[74] = choices[74][0];
 units[74] = "95";
 comments[74] = "Id Pregunta: 7348. NULL";


//  Id pregunta: 8221 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  El est&aacute;ndar internacional que m&aacute;s se asemeja a las gu&iacute;as de buenas pr&aacute;cticas ITIL es el:";
 choices[75]= new Array();
 choices[75][0] = "IS0 9000.";
 choices[75][1] = "ISO 20000.";
 choices[75][2] = "ISO 27001.";
 choices[75][3] = "ISO 27000.";
 answers[75] = choices[75][1];
 units[75] = "98";
 comments[75] = "Id Pregunta: 8221. Examen TIC A1 2010";


//  Id pregunta: 8225 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  En relaci&oacute;n con el modelo EFQM, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[76]= new Array();
 choices[76][0] = "El modelo EFQM se compone de 9 criterios, de los cuales 4 son agentes facilitadores y 5 son resultados.";
 choices[76][1] = "El modelo EFQM tom&oacute; como referencia otros modelos de calidad, tales como Malcom Baldrige y Deming.";
 choices[76][2] = "Los resultados del modelo EFQM son: resultados clave, resultados en la sociedad, resultados en los proveedores, resultados en los clientes y resultados en las personas.";
 choices[76][3] = "Los agentes facilitadores del modelo EFQM son: liderazgo, personas, procesos, pol&iacute;tica y estrategia.";
 answers[76] = choices[76][1];
 units[76] = "92";
 comments[76] = "Id Pregunta: 8225. Examen TIC A1 2010";


//  Id pregunta: 9037 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  Cual de las firmas Xades a&ntilde;ade referencias a datos de verificaci&oacute;n (certificados y listas de revocaci&oacute;n) a los documentos firmados";
 choices[77]= new Array();
 choices[77][0] = "Xades-BES";
 choices[77][1] = "Xades-T";
 choices[77][2] = "Xades-C";
 choices[77][3] = "Xades-EPES";
 answers[77] = choices[77][2];
 units[77] = "72";
 comments[77] = "Id Pregunta: 9037. ";


//  Id pregunta: 9183 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  &iquest;Cu&aacute;l de las siguientes no es interfaz de M&eacute;trica 3?";
 choices[78]= new Array();
 choices[78][0] = "Gesti&oacute;n de Configuraci&oacute;n";
 choices[78][1] = "Gesti&oacute;n de Procesos";
 choices[78][2] = "Seguridad";
 choices[78][3] = "Aseguramiento de la Calidad";
 answers[78] = choices[78][1];
 units[78] = "86";
 comments[78] = "Id Pregunta: 9183. NULL";


//  Id pregunta: 9187 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  &iquest; Qu&eacute; afirmaci&oacute;n sobre M&eacute;trica 3 es falsa ?";
 choices[79]= new Array();
 choices[79][0] = "El mantenimiento Adaptativo no se adapta a las nuevas necesidades del usuario";
 choices[79][1] = "La valoraci&oacute;n de los riesgos de la soluci&oacute;n se lleva a cabo en el Estudio de Viabilidad";
 choices[79][2] = "El cat&aacute;logo de requisitos queda inamovible desde el final del An&aacute;lisis de Sistema de Informaci&oacute;n";
 choices[79][3] = "La migraci&oacute;n y carga de datos se tiene en cuenta tanto en el An&aacute;lisis como en el Dise&ntilde;o";
 answers[79] = choices[79][2];
 units[79] = "86";
 comments[79] = "Id Pregunta: 9187. NULL";


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


//  Id pregunta: 9343 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  &iquest; Cu&aacute;ntos principios fundamentales define la ISO 9004:2000 ?";
 choices[81]= new Array();
 choices[81][0] = "6";
 choices[81][1] = "7";
 choices[81][2] = "8";
 choices[81][3] = "Ninguno";
 answers[81] = choices[81][2];
 units[81] = "87";
 comments[81] = "Id Pregunta: 9343. NULL";


//  Id pregunta: 9413 AÃ±o de creación de pregunta: 2013-01-01
 questions[82]= "83)  Cu&aacute;l de las siguientes magnitudes no tratan en general de evaluar las m&eacute;tricas de estimaci&oacute;n software?";
 choices[82]= new Array();
 choices[82][0] = "Calidad";
 choices[82][1] = "Productividad";
 choices[82][2] = "Seguridad";
 choices[82][3] = "Tama&ntilde;o";
 answers[82] = choices[82][2];
 units[82] = "89";
 comments[82] = "Id Pregunta: 9413. NULL";


//  Id pregunta: 9421 AÃ±o de creación de pregunta: 2013-01-01
 questions[83]= "84)  Cu&aacute;l de las siguientes afirmaciones sobre COCOMO es falsa";
 choices[83]= new Array();
 choices[83][0] = "El modelo original, COCOMO 81, fue publicado por Barry Boehm";
 choices[83][1] = "Sus siglas vienen de COnstructive COst MOdel";
 choices[83][2] = "Es un modelo de base emp&iacute;rica";
 choices[83][3] = "Es un modelo con base estad&iacute;stica";
 answers[83] = choices[83][3];
 units[83] = "89";
 comments[83] = "Id Pregunta: 9421. NULL";


//  Id pregunta: 9488 AÃ±o de creación de pregunta: 2013-01-01
 questions[84]= "85)  Indique cu&aacute;l de los siguientes no es un tipo de prototipo en el proceso unificado de desarrollo del software";
 choices[84]= new Array();
 choices[84][0] = "Prototipo arquitect&oacute;nico";
 choices[84][1] = "Prototipo de prueba";
 choices[84][2] = "Prototipo exploratorio";
 choices[84][3] = "Prototipo evolutivo";
 answers[84] = choices[84][1];
 units[84] = "78";
 comments[84] = "Id Pregunta: 9488. ";


//  Id pregunta: 9659 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  &iquest;Qu&eacute; modelo de evaluaci&oacute;n de procesos SW es certificable?";
 choices[85]= new Array();
 choices[85][0] = "CMM";
 choices[85][1] = "CMMI Escalonado";
 choices[85][2] = "CMMI Continuo";
 choices[85][3] = "Ninguno de los anteriores";
 answers[85] = choices[85][0];
 units[85] = "87";
 comments[85] = "Id Pregunta: 9659. NULL";


//  Id pregunta: 9725 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Indique cu&aacute;l de los siguientes procesos se encuadra dentro del libro del ITIL denominado Service Support.";
 choices[86]= new Array();
 choices[86][0] = "Gesti&oacute;n de Problemas.";
 choices[86][1] = "Gesti&oacute;n de la Capacidad.";
 choices[86][2] = "Gesti&oacute;n de la Disponibilidad.";
 choices[86][3] = "Gesti&oacute;n Financiera.";
 answers[86] = choices[86][0];
 units[86] = "98";
 comments[86] = "Id Pregunta: 9725. Examen TIC-A1 2013";


//  Id pregunta: 10053 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  Un archivo .PFX, de uso en certificados electr&oacute;nicos:";
 choices[87]= new Array();
 choices[87][0] = "Contiene la clave privada.";
 choices[87][1] = "Cumple la sintaxis PKCS #21.";
 choices[87][2] = "Est&aacute; codificado en un formato no binario.";
 choices[87][3] = "No se puede convertir a formato .PEM.";
 answers[87] = choices[87][0];
 units[87] = "72";
 comments[87] = "Id Pregunta: 10053. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10083 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  De acuerdo al marco de desarrollo PUDS, &iquest;cu&aacute;l de los siguientes NO es un flujo de trabajo del proceso?";
 choices[88]= new Array();
 choices[88][0] = "Entorno de desarrollo";
 choices[88][1] = "Modelado de negocio";
 choices[88][2] = "Pruebas";
 choices[88][3] = "Despliegue";
 answers[88] = choices[88][0];
 units[88] = "76";
 comments[88] = "Id Pregunta: 10083. NULL";


//  Id pregunta: 10093 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  De acuerdo a las actividades de M&eacute;trica v.3, se&ntilde;ale la INCORRECTA:";
 choices[89]= new Array();
 choices[89][0] = "La actividad PSI 4 es de Idenficaci&oacute;n de Requisitos";
 choices[89][1] = "La actividad EVS 3 es de Definici&oacute;n de Requisitos";
 choices[89][2] = "La actividad ASI 2 es de Especificaci&oacute;n de Requisitos";
 choices[89][3] = "La actividad DSI 11 es de Establecimineto de Requisitos de Implantaci&oacute;n";
 answers[89] = choices[89][2];
 units[89] = "78";
 comments[89] = "Id Pregunta: 10093. NULL";


//  Id pregunta: 10180 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  Respecto las relaciones de agregaci&oacute;n y composici&oacute;n entre clases de objetos, es cierto que:";
 choices[90]= new Array();
 choices[90][0] = "La composici&oacute;n expresa una relaci&oacute;n &quot;todo / parte&quot; o &quot;forma parte de&quot; entre los objetos implicados. La agregaci&oacute;n es una forma m&aacute;s fuerte de composici&oacute;n, de forma que si el &quot;objeto hijo&quot; es eliminado o desaparece, el &quot;objeto padre&quot; deja de existir.";
 choices[90][1] = "La agregaci&oacute;n expresa una relaci&oacute;n &quot;todo / parte&quot; o &quot;forma parte de&quot; entre los objetos implicados. La composici&oacute;n es una forma m&aacute;s fuerte de agregaci&oacute;n, de forma que si el &quot;objeto hijo&quot; es eliminado o desaparece, el &quot;objeto padre&quot; deja de existir.";
 choices[90][2] = "La a) y adem&aacute;s, la composici&oacute;n se representa en el diagrama de clases mediante una l&iacute;nea de asociaci&oacute;n entre las clases implicadas, finalizada en un rombo relleno en el extremo del &quot;todo&quot; ";
 choices[90][3] = "La b) y adem&aacute;s, la agregaci&oacute;n se representa en el diagrama de clases mediante una l&iacute;nea de asociaci&oacute;n entre las clases implicadas, finalizada en un rombo vac&iacute;o en el extremo del &quot;todo&quot; ";
 answers[90] = choices[90][3];
 units[90] = "82";
 comments[90] = "Id Pregunta: 10180. ";


//  Id pregunta: 10825 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Indicar cu&aacute;l de los siguientes diagramas se emplea para capturar los requisitos funcionales de un sistema y expresarlos desde el punto de vista del usuario seg&uacute;n M&eacute;trica v3:";
 choices[91]= new Array();
 choices[91][0] = "Diagrama de secuencia.";
 choices[91][1] = "Diagrama de colaboraci&oacute;n.";
 choices[91][2] = "Diagrama de clases.";
 choices[91][3] = "Diagrama de Casos de Uso.";
 answers[91] = choices[91][3];
 units[91] = "86, 82, 84";
 comments[91] = "Id Pregunta: 10825. Examen GSI 2014";


//  Id pregunta: 10836 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l de los siguientes algoritmos de ordenaci&oacute;n consiste en recorrer la lista comparando y ordenando los elementos adyacentes de dos en dos?";
 choices[92]= new Array();
 choices[92][0] = "Burbuja (BubbleSort).";
 choices[92][1] = "Selecci&oacute;n.";
 choices[92][2] = "Inserci&oacute;n.";
 choices[92][3] = "R&aacute;pido (QuickSort).";
 answers[92] = choices[92][0];
 units[92] = "0";
 comments[92] = "Id Pregunta: 10836. Examen GSI 2014";


//  Id pregunta: 10849 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Al conjunto de documentos que definen patrones de dise&ntilde;o y pr&aacute;cticas recomendadas en la creaci&oacute;n de aplicaciones utilizando Java Enterprise Edition se denomina:";
 choices[93]= new Array();
 choices[93][0] = "Java BluePrints.";
 choices[93][1] = "Java Specification Request.";
 choices[93][2] = "Java Community Process.";
 choices[93][3] = "Java Pattern Spec.";
 answers[93] = choices[93][0];
 units[93] = "60, 116";
 comments[93] = "Id Pregunta: 10849. Examen GSI 2014";


//  Id pregunta: 10851 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  La plataforma inform&aacute;tica y de servicios en Internet hospedada en centros de datos administrados o respaldados por Microsoft se llama:";
 choices[94]= new Array();
 choices[94][0] = "Bajoo.";
 choices[94][1] = "Azure.";
 choices[94][2] = "Heroku.";
 choices[94][3] = "Adrive.";
 answers[94] = choices[94][1];
 units[94] = "59, 115";
 comments[94] = "Id Pregunta: 10851. Examen GSI 2014";


//  Id pregunta: 10852 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  En .NET, &iquest;qu&eacute; es el Managed Extensibility Framework (MEF)?";
 choices[95]= new Array();
 choices[95][0] = "Es una arquitectura que proporciona primitivos as&iacute;ncronos de paso de aprobaci&oacute;n de mensajes sin tipo.";
 choices[95][1] = "Es un modelo extensible de programaci&oacute;n, motor y herramientas para generar con rapidez aplicaciones de flujo de trabajo en Windows.";
 choices[95][2] = "Es una biblioteca de clases portable que permite escribir y compilar ensamblados administrados capaces de funcionar en m&uacute;ltiples plataformas de .NET.";
 choices[95][3] = "Es una biblioteca para crear aplicaciones ligeras y extensibles.";
 answers[95] = choices[95][3];
 units[95] = "59, 115";
 comments[95] = "Id Pregunta: 10852. Examen GSI 2014";


//  Id pregunta: 10925 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Cu&aacute;l de las siguientes metodolog&iacute;as es considerada como una metodolog&iacute;a &aacute;gil?";
 choices[96]= new Array();
 choices[96][0] = "RAD.";
 choices[96][1] = "OpenUP.";
 choices[96][2] = "SSADM.";
 choices[96][3] = "UP.";
 answers[96] = choices[96][1];
 units[96] = "79";
 comments[96] = "Id Pregunta: 10925. TIC A1 AGE 2014";


//  Id pregunta: 10944 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Respecto a los diagramas de flujos de datos, se&ntilde;ale la respuesta correcta:";
 choices[97]= new Array();
 choices[97][0] = "Proporcionan un mecanismo para el modelado funcional, no siendo necesario considerar el flujo de informaci&oacute;n.";
 choices[97][1] = "Por s&iacute; solos, son una herramienta suficiente para describir los requisitos del software.";
 choices[97][2] = "En los sucesivos niveles de detalle es necesario mantener la continuidad del flujo de informaci&oacute;n.";
 choices[97][3] = "No son una herramienta v&aacute;lida para sistemas de tiempo real.";
 answers[97] = choices[97][2];
 units[97] = "81";
 comments[97] = "Id Pregunta: 10944. TIC A1 AGE 2014";


//  Id pregunta: 11153 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Cu&aacute;l de las siguientes no es un inconveniente de los modelos de desarrollo basados en prototipos?";
 choices[98]= new Array();
 choices[98][0] = "Puede crear falsas expectativas en el usuario ya que puede ver el prototipo como si fuera el producto final";
 choices[98][1] = "Puede darse una fuerte intromisi&oacute;n de los usuarios finales en la integraci&oacute;n";
 choices[98][2] = "Los sistemas se desarrollan en distintas etapas, siendo en general un proceso m&aacute;s largo.";
 choices[98][3] = "No es un paradigma apto para proyectos grandes y de larga duraci&oacute;n ni para aplicaciones peque&ntilde;as";
 answers[98] = choices[98][2];
 units[98] = "76";
 comments[98] = "Id Pregunta: 11153. ";


//  Id pregunta: 11382 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Seg&uacute;n ITIL v3, &iquest;qu&eacute; afirmaci&oacute;n sobre la relaci&oacute;n entre el sistema de gesti&oacute;n de configuraci&oacute;n (CMS) y el sistema de gesti&oacute;n del conocimiento de servicios (SKMS) es la correcta?";
 choices[99]= new Array();
 choices[99][0] = "El SKMS es parte de la CMS";
 choices[99][1] = "El CMS es parte del SKMS";
 choices[99][2] = "El CMS y el SKMS son la misma cosa";
 choices[99][3] = "No existe una relaci&oacute;n entre el CMS y el SKMS";
 answers[99] = choices[99][1];
 units[99] = "98";
 comments[99] = "Id Pregunta: 11382. ";


