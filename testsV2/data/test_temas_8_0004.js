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

//  Id pregunta: 1384 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  Un lenguaje de programaci&oacute;n en el que s&oacute;lo se especifica lo que quiere llevarse a cabo en lugar de indicar los pasos a dar para llevarlo a cabo, se denomina:";
 choices[0]= new Array();
 choices[0][0] = "No procedural.";
 choices[0][1] = "Simb&oacute;lico.";
 choices[0][2] = "Orientado al objetos.";
 choices[0][3] = "Procedural.";
 answers[0] = choices[0][0];
 units[0] = "81, 84";
 comments[0] = "Id Pregunta: 1384. ";


//  Id pregunta: 1593 AÃ±o de creación de pregunta: 2003-01-01
 questions[1]= "2)  En los sistemas de aplicaciones transaccionales online (OLTP), &iquest;como se define el concepto de throughput?:";
 choices[1]= new Array();
 choices[1][0] = "Mayor tiempo de respuesta por transacci&oacute;n.";
 choices[1][1] = "Cantidad de trabajo realizada en un determinado tiempo.";
 choices[1][2] = "Unidad m&iacute;nima de recursos f&iacute;sicos necesarios para ejecutar una transacci&oacute;n.";
 choices[1][3] = "N&uacute;mero de hilos (threads) de ejecuci&oacute;n paralela de transacciones.";
 answers[1] = choices[1][1];
 units[1] = "83";
 comments[1] = "Id Pregunta: 1593. Junta Andaluc&iacute;a";


//  Id pregunta: 2003 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  Cuando en el dise&ntilde;o orientado a objetos se habla de &quot;requerimientos funcionales&quot; se debe entender:";
 choices[2]= new Array();
 choices[2][0] = "La descripci&oacute;n formal del comportamiento de cada uno de los objetos del sistema.";
 choices[2][1] = "La descripci&oacute;n, habitualmente mediante diagramas UML, de las relaciones entre las componentes del sistema.";
 choices[2][2] = "La descripci&oacute;n semi-formal de los requisitos del tiempo de ejecuci&oacute;n impuestos por el usuario.";
 choices[2][3] = "La descripci&oacute;n de las interacciones entre el sistema y su ambiente, de forma independiente a su implementaci&oacute;n.";
 answers[2] = choices[2][3];
 units[2] = "84";
 comments[2] = "Id Pregunta: 2003. ";


//  Id pregunta: 2018 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  Con objeto de optimizar el modelo f&iacute;sico de datos y satisfacer los requisitos de rendimiento establecidos, &iquest;cu&aacute;l de las siguientes t&eacute;cnicas no deber&iacute;a utilizarse?";
 choices[3]= new Array();
 choices[3][0] = "Dividir entidades.";
 choices[3][1] = "Evitar el uso de encriptaci&oacute;n de datos.";
 choices[3][2] = "Combinar entidades si los accesos son frecuentes dentro de la misma transacci&oacute;n.";
 choices[3][3] = "Definir &iacute;ndices para permitir caminos de acceso alternativos.";
 answers[3] = choices[3][1];
 units[3] = "84";
 comments[3] = "Id Pregunta: 2018. Examen TIC MAP B 2004";


//  Id pregunta: 2030 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  En UML, los diagramas que describen bajo la forma de acciones y reacciones el comportamiento de un sistema desde el punto de vista de un usuario, se denominan:";
 choices[4]= new Array();
 choices[4][0] = "casos de uso";
 choices[4][1] = "diagrama de estados";
 choices[4][2] = "diagrama de actividades";
 choices[4][3] = "diagrama de secuencia";
 answers[4] = choices[4][0];
 units[4] = "82";
 comments[4] = "Id Pregunta: 2030. Similar a examen TIC SS A 2003";


//  Id pregunta: 2046 AÃ±o de creación de pregunta: 2004-01-01
 questions[5]= "6)  En el dise&ntilde;o Orientado a objetos, &iquest;Cu&aacute;l de las siguientes afirmaciones es incorrecta?";
 choices[5]= new Array();
 choices[5][0] = "Una clase es la implantaci&oacute;n de un tipo de objeto.";
 choices[5][1] = "La especificaci&oacute;n de c&oacute;mo se llevan a cabo las funciones de una clase se llama operaci&oacute;n.";
 choices[5][2] = "Una clase especifica la estructura de datos y los m&eacute;todos operativos permitidos que se aplican a cada uno de sus objetos.";
 choices[5][3] = "Una clase especifica la estructura de datos de cada uno de sus objetos y las operaciones que se utilizan para tener acceso a esos datos.";
 answers[5] = choices[5][1];
 units[5] = "84";
 comments[5] = "Id Pregunta: 2046. Pregunta TIC-B 2003";


//  Id pregunta: 2136 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Cu&aacute;l de las siguientes es una particularidad del dise&ntilde;o orientado a objetos?";
 choices[6]= new Array();
 choices[6][0] = "Modularidad.";
 choices[6][1] = "Ocultaci&oacute;n de la informaci&oacute;n.";
 choices[6][2] = "Abstracci&oacute;n.";
 choices[6][3] = "Todos lo son.";
 answers[6] = choices[6][3];
 units[6] = "84";
 comments[6] = "Id Pregunta: 2136. ";


//  Id pregunta: 2145 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l de los siguientes es un lenguaje orientado a objetos puro?:";
 choices[7]= new Array();
 choices[7][0] = "Visual Basic";
 choices[7][1] = "C++";
 choices[7][2] = "Smalltalk";
 choices[7][3] = "Todos son h&iacute;bridos";
 answers[7] = choices[7][2];
 units[7] = "82";
 comments[7] = "Id Pregunta: 2145. ";


//  Id pregunta: 2190 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Cu&aacute;les son los elementos de la t&eacute;cnica Historia de la Vida de las Entidades (HVE)?";
 choices[8]= new Array();
 choices[8][0] = "Entidades, eventos, efectos, primitivas, cajas vac&iacute;as.";
 choices[8][1] = "Entidades, eventos, resultados, nodos, cajas llenas.";
 choices[8][2] = "Entidades, eventos, resultados, primitivas, cajas llenas.";
 choices[8][3] = "Entidades, eventos, efectos, nodos, cajas vac&iacute;as.";
 answers[8] = choices[8][3];
 units[8] = "81,84";
 comments[8] = "Id Pregunta: 2190. ";


//  Id pregunta: 2213 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Qu&eacute; expresa la dimensi&oacute;n Radial del modelo en Espiral?:";
 choices[9]= new Array();
 choices[9][0] = "Representa el coste acumulativo de las etapas de an&aacute;lisis";
 choices[9][1] = "Representa el gasto inicial del proyecto";
 choices[9][2] = "Representa el coste acumulativo de las etapas realizadas hasta el momento actual";
 choices[9][3] = "Ninguna de las anteriores";
 answers[9] = choices[9][2];
 units[9] = "76";
 comments[9] = "Id Pregunta: 2213. ";


//  Id pregunta: 2243 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  Cuando se ejecuta un programa OO (Orientado a Objetos) ocurren tres tipos de sucesos, identifique el incorrecto:";
 choices[10]= new Array();
 choices[10][0] = "Se crean objetos cuando se necesitan.";
 choices[10][1] = "Los mensajes se mueven de un objeto a otro, o desde un usuario a un objeto, seg&uacute;n se va procesando informaci&oacute;n o respondiendo a entradas de usuario.";
 choices[10][2] = "Se borran los objetos cuando ya no son necesarios.";
 choices[10][3] = "Se renombran los objetos cuando ya no son necesarios.";
 answers[10] = choices[10][3];
 units[10] = "82,84";
 comments[10] = "Id Pregunta: 2243. ";


//  Id pregunta: 2288 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  El modelo en cascada, si hablamos de una fase en la que es necesario, aparte de otras labores, el analizar, entender y documentar el problema que el usuario trata de resolver con el sistema de informaci&oacute;n o aplicaci&oacute;n, nos estamos refiriendo a la fase de:";
 choices[11]= new Array();
 choices[11][0] = "Planificaci&oacute;n";
 choices[11][1] = "An&aacute;lisis";
 choices[11][2] = "Dise&ntilde;o";
 choices[11][3] = "Codificaci&oacute;n";
 answers[11] = choices[11][1];
 units[11] = "76";
 comments[11] = "Id Pregunta: 2288. ";


//  Id pregunta: 2322 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  En la fase 'Planificaci&oacute;n' de un modelo en cascada, es necesario fijar:";
 choices[12]= new Array();
 choices[12][0] = "&Aacute;mbito de trabajo a realizar";
 choices[12][1] = "Tareas a realizar";
 choices[12][2] = "Referencias a tener en cuenta";
 choices[12][3] = "Todas las anteriores respuestas son correctas";
 answers[12] = choices[12][3];
 units[12] = "76";
 comments[12] = "Id Pregunta: 2322. ";


//  Id pregunta: 2329 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  En la programaci&oacute;n orientada a objetos, &iquest;cu&aacute;l de las siguientes afirmaciones es incorrecta?:";
 choices[13]= new Array();
 choices[13][0] = "La herencia define una relaci&oacute;n entre clases, donde una clase comparte la estructura o comportamiento definido en una o m&aacute;s clases";
 choices[13][1] = "La encapsulaci&oacute;n es el proceso de ocultaci&oacute;n de los detalles internos o de implementaci&oacute;n de un objeto";
 choices[13][2] = "Un objeto es una instancia de una clase y cada clase tiene cero o m&aacute;s instancias";
 choices[13][3] = "Las instancias de una metaclase no son clases";
 answers[13] = choices[13][3];
 units[13] = "82";
 comments[13] = "Id Pregunta: 2329. ";


//  Id pregunta: 2339 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  En los diagramas de flujo de datos se usan s&iacute;mbolos. &iquest;Cu&aacute;l no es uno de ellos?:";
 choices[14]= new Array();
 choices[14][0] = "El s&iacute;mbolo de 'proceso'";
 choices[14][1] = "El s&iacute;mbolo de 'almac&eacute;n de datos'";
 choices[14][2] = "El s&iacute;mbolo de 'entidad externa'";
 choices[14][3] = "El s&iacute;mbolo de 'decisi&oacute;n' (o alternativa)";
 answers[14] = choices[14][3];
 units[14] = "81";
 comments[14] = "Id Pregunta: 2339. ";


//  Id pregunta: 2341 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  En orientaci&oacute;n a objetos, &iquest;c&oacute;mo se define la cohesi&oacute;n fuerte?:";
 choices[15]= new Array();
 choices[15][0] = "Aislamiento de los m&eacute;todos de una clase frente a las dem&aacute;s";
 choices[15][1] = "Los operadores que aparecen en la interfaz son los &uacute;nicos que pueden acceder o alterar los datos internos a la clase";
 choices[15][2] = "Es la medida en la que las tareas que desempe&ntilde;a una clase est&aacute;n estrechamente relacionadas";
 choices[15][3] = "Ninguna de las anteriores define la cohesi&oacute;n";
 answers[15] = choices[15][2];
 units[15] = "82";
 comments[15] = "Id Pregunta: 2341. ";


//  Id pregunta: 2347 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  En relaci&oacute;n con la t&eacute;cnica del prototipado, &iquest;qu&eacute; es falso?:";
 choices[16]= new Array();
 choices[16][0] = "Se facilita la comunicaci&oacute;n con el usuario";
 choices[16][1] = "Permite que el proceso de aprendizaje sea m&aacute;s r&aacute;pido";
 choices[16][2] = "Facilita el trabajo con especificaciones incompletas";
 choices[16][3] = "Aumenta los costes de implementaci&oacute;n";
 answers[16] = choices[16][3];
 units[16] = "85";
 comments[16] = "Id Pregunta: 2347. ";


//  Id pregunta: 2355 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Entre las criticas que se hacen al modelo en cascada del ciclo de vida de una aplicaci&oacute;n tenemos:";
 choices[17]= new Array();
 choices[17][0] = "Los proyectos raramente siguen el flujo secuencial que propone el modelo";
 choices[17][1] = "Una aplicaci&oacute;n del modelo en sentido estricto obligar&iacute;a a la 'congelaci&oacute;n' de los requisitos de los usuarios, supuesto este completamente alejado de la realidad";
 choices[17][2] = "El modelo no dispone de resultados parciales que permitan validar si el sistema cumple con los requistos desde las primeras fases";
 choices[17][3] = "Todas las anteriores son inconvenientes del modelo en cascada";
 answers[17] = choices[17][3];
 units[17] = "76";
 comments[17] = "Id Pregunta: 2355. ";


//  Id pregunta: 2362 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Entre las ventajas que presenta el modelo en espiral o iterativo del ciclo de vida respecto a otros modelos, est&aacute;:";
 choices[18]= new Array();
 choices[18][0] = "Su rango de opciones acomoda las buenas caracter&iacute;sticas de los dem&aacute;s modelos de desarrollo de software";
 choices[18][1] = "Permite preparar la evoluci&oacute;n del ciclo de vida, crecimiento y cambios del producto software";
 choices[18][2] = "Es especialmente indicado para la temprana eliminaci&oacute;n de errores y alternativas poco atractivas";
 choices[18][3] = "Todas las anteriores son ventajas del modelo de ciclo de vida en espiral";
 answers[18] = choices[18][3];
 units[18] = "76";
 comments[18] = "Id Pregunta: 2362. ";


//  Id pregunta: 2391 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  La estimaci&oacute;n de inversiones, costes de funcionamiento y resultados esperados se define en:";
 choices[19]= new Array();
 choices[19][0] = "Especificaciones funcionales del sistema";
 choices[19][1] = "Plan de sistemas";
 choices[19][2] = "Dise&ntilde;o del sistema";
 choices[19][3] = "Ninguno de los anteriores";
 answers[19] = choices[19][1];
 units[19] = "77";
 comments[19] = "Id Pregunta: 2391. ";


//  Id pregunta: 2451 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Los almacenes de datos de un DFD:";
 choices[20]= new Array();
 choices[20][0] = "Representan datos en movimiento";
 choices[20][1] = "Respresentan datos almacenados en dispositivo de acceso r&aacute;pido";
 choices[20][2] = "Comprenden cualquier tipo de almac&eacute;n accesible por odenador ya sea local o remoto";
 choices[20][3] = "Pueden representar un caj&oacute;n de papeles, un archivador manual, un fichero o una base de datos";
 answers[20] = choices[20][3];
 units[20] = "81";
 comments[20] = "Id Pregunta: 2451. ";


//  Id pregunta: 2462 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)   En programaci&oacute;n orientada a objetos, los objetos act&uacute;an en respuesta a los mensajes que reciben. El mismo mensaje puede originar conductas completamente diferentes al ser recibido por diferentes objetos. Este fen&oacute;meno se conoce como:";
 choices[21]= new Array();
 choices[21][0] = "Herencia";
 choices[21][1] = "Encapsulaci&oacute;n";
 choices[21][2] = "Abstracci&oacute;n";
 choices[21][3] = "Polimorfismo";
 answers[21] = choices[21][3];
 units[21] = "82";
 comments[21] = "Id Pregunta: 2462. ";


//  Id pregunta: 2464 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Los s&iacute;mbolos &quot;(&quot; y &quot;)&quot; seg&uacute;n la notaci&oacute;n BNF representan, en el diccionario de datos:";
 choices[22]= new Array();
 choices[22][0] = "Iteraci&oacute;n";
 choices[22][1] = "Selecci&oacute;n";
 choices[22][2] = "Composici&oacute;n";
 choices[22][3] = "Opcionalidad";
 answers[22] = choices[22][3];
 units[22] = "81";
 comments[22] = "Id Pregunta: 2464. ";


//  Id pregunta: 2469 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  No es un tipo de acoplamiento:";
 choices[23]= new Array();
 choices[23][0] = "Externo.";
 choices[23][1] = "Por contenido.";
 choices[23][2] = "Temporal.";
 choices[23][3] = "Por estampado.";
 answers[23] = choices[23][2];
 units[23] = "84";
 comments[23] = "Id Pregunta: 2469. ";


//  Id pregunta: 2474 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Para cada proyecto se debe seleccionar el modelo de ciclo de vida que sea m&aacute;s apropiado:";
 choices[24]= new Array();
 choices[24][0] = "Falso";
 choices[24][1] = "Cierto";
 choices[24][2] = "S&oacute;lo si es necesario evaluar los riesgos";
 choices[24][3] = "S&oacute;lo si se elige METRICA ";
 answers[24] = choices[24][1];
 units[24] = "76";
 comments[24] = "Id Pregunta: 2474. ";


//  Id pregunta: 2494 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Se&ntilde;ale la respuesta falsa a la siguiente afirmaci&oacute;n: &quot;En un diagrama de casos de uso se tienen los siguientes componentes&quot;:";
 choices[25]= new Array();
 choices[25][0] = "Caso de uso.";
 choices[25][1] = "Carpetas.";
 choices[25][2] = "Actor.";
 choices[25][3] = "Relaci&oacute;n.";
 answers[25] = choices[25][1];
 units[25] = "82,84";
 comments[25] = "Id Pregunta: 2494. ";


//  Id pregunta: 2504 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  Un  m&eacute;todo orientado a los datos es:";
 choices[26]= new Array();
 choices[26][0] = "Diagramas HIPO";
 choices[26][1] = "Dise&ntilde;o Estructurado de Jackson";
 choices[26][2] = "Historia de la vida de una entidad";
 choices[26][3] = "Dise&ntilde;o estructurado: Yourdon-Constantine";
 answers[26] = choices[26][1];
 units[26] = "79";
 comments[26] = "Id Pregunta: 2504. ";


//  Id pregunta: 2507 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  Un m&eacute;todo orientado a los procesos es:";
 choices[27]= new Array();
 choices[27][0] = "Modelo Entidad-Relaci&oacute;n";
 choices[27][1] = "Dise&ntilde;o Estructurado de Jackson";
 choices[27][2] = "An&aacute;lisis de flujo de datos";
 choices[27][3] = "An&aacute;lisis relacional de datos (COOD)";
 answers[27] = choices[27][2];
 units[27] = "81";
 comments[27] = "Id Pregunta: 2507. ";


//  Id pregunta: 2579 AÃ±o de creación de pregunta: 2003-01-01
 questions[28]= "29)  &iquest;Cu&aacute;l de los siguientes no es un Lenguaje orientado a objetos?";
 choices[28]= new Array();
 choices[28][0] = "Eiffel";
 choices[28][1] = "C++";
 choices[28][2] = "Smalltalk";
 choices[28][3] = "C";
 answers[28] = choices[28][3];
 units[28] = "82";
 comments[28] = "Id Pregunta: 2579. ";


//  Id pregunta: 2604 AÃ±o de creación de pregunta: 2003-01-01
 questions[29]= "30)  &iquest; Cu&aacute;l es la primera actividad que debe realizar un analista?";
 choices[29]= new Array();
 choices[29][0] = "Identificar el problema";
 choices[29][1] = "Evaluaci&oacute;n de los problemas";
 choices[29][2] = "Preparar antes de nada un plan de control";
 choices[29][3] = "Sintetizar soluciones";
 answers[29] = choices[29][0];
 units[29] = "78";
 comments[29] = "Id Pregunta: 2604. ";


//  Id pregunta: 2650 AÃ±o de creación de pregunta: 2003-01-01
 questions[30]= "31)  Indicar la afirmaci&oacute;n falsa sobre Diagramas del Flujo de Datos";
 choices[30]= new Array();
 choices[30][0] = "No se puede representar flujos de datos entre almacenes y entidades externas";
 choices[30][1] = "Se pueden representar relaciones entre entidades externas ";
 choices[30][2] = "No se debe representar la clave de acceso al almac&eacute;n sino s&oacute;lo la operaci&oacute;n que se realice en el almac&eacute;n";
 choices[30][3] = "Un flujo de datos entre dos procesos s&oacute;lo es posible cuando la informaci&oacute;n es s&iacute;ncrona";
 answers[30] = choices[30][1];
 units[30] = "81";
 comments[30] = "Id Pregunta: 2650. ";


//  Id pregunta: 2734 AÃ±o de creación de pregunta: 2006-01-01
 questions[31]= "32)  El an&aacute;lisis de requerimientos es:";
 choices[31]= new Array();
 choices[31][0] = "Una actividad intesiva de comunicaci&oacute;n";
 choices[31][1] = "Una actividad intensiva de programaci&oacute;n";
 choices[31][2] = "Una actividad intesiva de especificaci&oacute;n";
 choices[31][3] = "Ninguna de las anteriores";
 answers[31] = choices[31][0];
 units[31] = "78";
 comments[31] = "Id Pregunta: 2734. ";


//  Id pregunta: 2739 AÃ±o de creación de pregunta: 2006-01-01
 questions[32]= "33)  &iquest;Cu&aacute;l de los siguientes elementos no es propio de un DFD (Diagrama de Flujo de Datos)?";
 choices[32]= new Array();
 choices[32][0] = "Entidades externas al sistema";
 choices[32][1] = "Bucles";
 choices[32][2] = "Almac&eacute;n de datos";
 choices[32][3] = "Procesos";
 answers[32] = choices[32][1];
 units[32] = "79,81";
 comments[32] = "Id Pregunta: 2739. ";


//  Id pregunta: 2747 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  La direcci&oacute;n de los flujos entre almac&eacute;n y proceso en un DFD (Diagrama de Flujos de Datos) puede ser:";
 choices[33]= new Array();
 choices[33][0] = "De consulta";
 choices[33][1] = "De actualizaci&oacute;n";
 choices[33][2] = "De di&aacute;logo";
 choices[33][3] = "Todas las anteriores";
 answers[33] = choices[33][3];
 units[33] = "81";
 comments[33] = "Id Pregunta: 2747. ";


//  Id pregunta: 2754 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  Cual de los siguientes no es una caracteristica del Proceso unificado de desarrollo de software";
 choices[34]= new Array();
 choices[34][0] = "Es iterativo e incremental";
 choices[34][1] = "El dise&ntilde;o comienza siempre al terminar el an&aacute;lisis.";
 choices[34][2] = "Est&aacute; dirigido por los casos de uso";
 choices[34][3] = "Est&aacute; dirigido por la arquitectura.";
 answers[34] = choices[34][1];
 units[34] = "82";
 comments[34] = "Id Pregunta: 2754. ";


//  Id pregunta: 2763 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  El FAN_OUT es:";
 choices[35]= new Array();
 choices[35][0] = "Un indicador de cuantos m&oacute;dulos controlan directamente un determinado m&oacute;dulo.";
 choices[35][1] = "Una medida del n&uacute;mero de m&oacute;dulos controlados directamente por otro m&oacute;dulo.";
 choices[35][2] = "Un indicador de los m&oacute;dulos de funci&oacute;n &uacute;nica que pueden ser reutilizados.";
 choices[35][3] = "Un reflejo de la especificaci&oacute;n de requerimientos del sistema.";
 answers[35] = choices[35][1];
 units[35] = "84";
 comments[35] = "Id Pregunta: 2763. ";


//  Id pregunta: 2764 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  Se&ntilde;ale la afirmaci&oacute;n cierta sobre el acoplamiento normal.";
 choices[36]= new Array();
 choices[36][0] = "Provoca dependencia de ejecuci&oacute;n.";
 choices[36][1] = "Los m&oacute;dulos se refieren a la misma estructura de datos local.";
 choices[36][2] = "No se produce traspaso de par&aacute;metros.";
 choices[36][3] = "Los m&oacute;dulos se refieren a la misma &aacute;rea global de datos.";
 answers[36] = choices[36][2];
 units[36] = "84";
 comments[36] = "Id Pregunta: 2764. ";


//  Id pregunta: 2765 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  La multiplicidad:";
 choices[37]= new Array();
 choices[37][0] = "Limita el n&uacute;mero de clases que pueden tener esa asociaci&oacute;n con una instancia de la otra clase. ";
 choices[37][1] = "Limita el n&uacute;mero de instancias de una clase que pueden tener esa asociaci&oacute;n con otra clase.";
 choices[37][2] = "Es una medida de los elementos cuyo valor se puede calcular a partir de otros elementos.";
 choices[37][3] = "Es una restricci&oacute;n que se pone a una asociaci&oacute;n.";
 answers[37] = choices[37][3];
 units[37] = "84";
 comments[37] = "Id Pregunta: 2765. ";


//  Id pregunta: 2770 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  En referencia a UML, &iquest;c&oacute;mo se denomina el elemento que sirve para a&ntilde;adir cualquier comentario a un diagrama o elemento del mismo?";
 choices[38]= new Array();
 choices[38][0] = "En UML no existe este tipo de elementos.";
 choices[38][1] = "Nota.";
 choices[38][2] = "Diccionario sem&aacute;ntico.";
 choices[38][3] = "Diccionario l&eacute;xico.";
 answers[38] = choices[38][1];
 units[38] = "84";
 comments[38] = "Id Pregunta: 2770. ";


//  Id pregunta: 2779 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  El modelo de ciclo de vida R.A.D se basa en:";
 choices[39]= new Array();
 choices[39][0] = "El modelo de desarrollo incremental";
 choices[39][1] = "El modelo en espiral";
 choices[39][2] = "El prototipado evolutivo";
 choices[39][3] = "Ninguno de los anteriores";
 answers[39] = choices[39][2];
 units[39] = "85";
 comments[39] = "Id Pregunta: 2779. ";


//  Id pregunta: 3935 AÃ±o de creación de pregunta: 2003-01-01
 questions[40]= "41)  &iquest;Qu&eacute; es cierto, en los diagramas de clases?";
 choices[40]= new Array();
 choices[40][0] = "Los atributos se representan debajo  en la caja de representaci&oacute;n de la clase ";
 choices[40][1] = "Las interfaces se representan mediante carpetas";
 choices[40][2] = "Los atributos se representan en medio  en la caja de representaci&oacute;n de la clase";
 choices[40][3] = "Los atributos se representan  en la zona superior de representaci&oacute;n de la clase";
 answers[40] = choices[40][0];
 units[40] = "82";
 comments[40] = "Id Pregunta: 3935. ";


//  Id pregunta: 4298 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  La adopci&oacute;n de m&eacute;todos formales de especificaci&oacute;n de requisitos:";
 choices[41]= new Array();
 choices[41][0] = "Permite reducir el coste de desarrollo desde el inicio de su adopci&oacute;n en la organizaci&oacute;n.";
 choices[41][1] = "No debe combinarse con los m&eacute;todos convencionales de desarrollo.";
 choices[41][2] = "Aconseja adjuntar comentarios en lenguaje natural a las especificaciones formales";
 choices[41][3] = "Supone una garant&iacute;a de correcci&oacute;n del sistema final.";
 answers[41] = choices[41][2];
 units[41] = "78";
 comments[41] = "Id Pregunta: 4298. ";


//  Id pregunta: 4300 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  &iquest;Qu&eacute; afirmaci&oacute;n es correcta acerca de las diferentes notaciones que se pueden emplear para la especificaci&oacute;n de requisitos del software?:";
 choices[42]= new Array();
 choices[42][0] = "El pseudoc&oacute;digo es una notaci&oacute;n especialmente indicada para describir los requisitos funcionales.";
 choices[42][1] = "El diccionario de datos es la manera m&aacute;s adecuada de describir las transformaciones ocurridas en los datos.";
 choices[42][2] = "El diagrama de flujo de datos se emplea para realizar la especificaci&oacute;n del comportamiento del sistema.";
 choices[42][3] = "El modelo E-R es una notaci&oacute;n gr&aacute;fica en la que se representan los flujos de datos y sus estados.";
 answers[42] = choices[42][2];
 units[42] = "78";
 comments[42] = "Id Pregunta: 4300. ";


//  Id pregunta: 4522 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  En el modelo de Ciclo de vida en cascada pura, &iquest;que sucede si Ia revisi&oacute;n del paso a Ia siguiente etapa del proyecto no es satisfactoria?";
 choices[43]= new Array();
 choices[43][0] = "Se continua con Ia etapa siguiente.";
 choices[43][1] = "Se retrocede a Ia etapa anterior.";
 choices[43][2] = "Se permanece en la etapa actual hasta que este preparada.";
 choices[43][3] = "Se comienza otra vez con Ia primera etapa.";
 answers[43] = choices[43][2];
 units[43] = "76";
 comments[43] = "Id Pregunta: 4522. ";


//  Id pregunta: 4785 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  El modelo espiral WinWin define los siguientes hitos en el proceso:";
 choices[44]= new Array();
 choices[44][0] = "Objetivos del ciclo de vida, arquitectura del ciclo de vida y capacidad operativa iniclal.";
 choices[44][1] = "Alcance del sistema y tama&ntilde;o del sistema.";
 choices[44][2] = "Verificaci&oacute;n de requisitos, verificaci&oacute;n de funcionalidades y verificaci&oacute;n de codigo";
 choices[44][3] = "El modelo espiral WinWin no define hitos en el proceso";
 answers[44] = choices[44][3];
 units[44] = "76";
 comments[44] = "Id Pregunta: 4785. ";


//  Id pregunta: 4793 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  Dada una jerarqu&iacute;a total con solapamiento en el modelo E/R (Entidad / Relaci&oacute;n), &iquest;cu&aacute;l de las siguientesafirmaciones es cierta?";
 choices[45]= new Array();
 choices[45][0] = "No es necesario que toda ocurrencia del supertipo se encuentre en alguno de los subtipos";
 choices[45][1] = "Cuando se borra una ocurrencia de un subtipo hay que borrarla tambi&eacute;n del supertipo";
 choices[45][2] = "Cuando se borra una ocurrencia de un subtipo se borra del supertipo si s&oacute;lo pertenece a ese subtipo";
 choices[45][3] = "Si se borra una ocurrencia del supertipo no siempre hay que eliminarla de los subtipos a los que pertenece";
 answers[45] = choices[45][2];
 units[45] = "80";
 comments[45] = "Id Pregunta: 4793. ";


//  Id pregunta: 4881 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  Los casos de uso son una t&eacute;cnica eficaz para la determinaci&oacute;n de necesidades. &Eacute;stos fueron creados por:";
 choices[46]= new Array();
 choices[46][0] = "Warnier-Orr";
 choices[46][1] = "Rumbaugh";
 choices[46][2] = "Jacobson";
 choices[46][3] = "Booch";
 answers[46] = choices[46][2];
 units[46] = "82";
 comments[46] = "Id Pregunta: 4881. ";


//  Id pregunta: 4937 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  En el Modelo E/R de Chen del universo de discurso del departamento de RRHH de una cierta organizaci&oacute;n,existe la restricci&oacute;n, en base a un criterio fijado por la Direcci&oacute;n, de que el atributo &ldquo;mes&rdquo; de la entidad&ldquo;vacaciones&rdquo; s&oacute;lo podr&aacute; tomar los valores &lsquo;Junio&rsquo;, &lsquo;Julio&rsquo; y &lsquo;Agosto&rsquo;. Esta restricci&oacute;n o limitaci&oacute;n deintegridad es de tipo:";
 choices[47]= new Array();
 choices[47][0] = "Sint&aacute;ctica.";
 choices[47][1] = "Sem&aacute;ntica estructural.";
 choices[47][2] = "Sem&aacute;ntica de usuario sobre los valores.";
 choices[47][3] = "Sem&aacute;ntica de usuario sobre la asociaci&oacute;n.";
 answers[47] = choices[47][2];
 units[47] = "80";
 comments[47] = "Id Pregunta: 4937. Examen TIC B 2007";


//  Id pregunta: 4995 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l de los siguientes NO es uno de los principios incluidos en el Manifiesto de Desarrollo &Aacute;gil de Software (Manifesto for Agile Software Development)?:";
 choices[48]= new Array();
 choices[48][0] = "Aceptamos requisitos cambiantes s&oacute;lo en las primeras etapas del desarrollo.";
 choices[48][1] = "Los procesos &aacute;giles promueven el desarrollo sostenido.";
 choices[48][2] = "Entregamos software frecuentemente, con una periodicidad desde un par de semanas a un par de meses,con preferencia por los periodos m&aacute;s cortos posibles.";
 choices[48][3] = "Los responsables de negocio y los desarrolladores deben trabajar juntos diariamente a lo largo del proyecto.";
 answers[48] = choices[48][0];
 units[48] = "76";
 comments[48] = "Id Pregunta: 4995. Examen TIC A 2007";


//  Id pregunta: 5052 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  La vinculacion din&aacute;mica en el desarrollo orientada a objetos significa que:";
 choices[49]= new Array();
 choices[49][0] = "La verificaci&oacute;n de tipos y la uni&oacute;n entre la llamada al m&eacute;todo y el c&oacute;digo a ejecutar se realizan en tiempo de compilaci&oacute;n";
 choices[49][1] = "La verificaci&oacute;n de tipos se realiza en tiempo de ejecuci&oacute;n y la uni&oacute;n entre la llamada al m&eacute;todo y el c&oacute;digo a ejecutar se tipos se puede realizar en tiempo de ejecuci&oacute;n o en tiempo de compilaci&oacute;n";
 choices[49][2] = "La verificaci&oacute;n de tipos se puede realizar en tiempo de ejecuci&oacute;n o en tiempo de compilaci&oacute;n y la uni&oacute;n entre la llamada al m&eacute;todo y el c&oacute;digo a ejecutar se realizan en tiempo de ejecuci&oacute;n";
 choices[49][3] = "La verificaci&oacute;n de tipos se puede realizar en tiempo de ejecuci&oacute;n o en tiempo de compilaci&oacute;n y la uni&oacute;n entre la llamada al m&eacute;todo y el c&oacute;digo a ejecutar se realizan en tiempo de compilaci&oacute;n";
 answers[49] = choices[49][2];
 units[49] = "82";
 comments[49] = "Id Pregunta: 5052. Examen TIC A 2007";


//  Id pregunta: 5072 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  &iquest;Qu&eacute; elemento NO forma parte de un diagrama de flujo de datos (DFD)?:";
 choices[50]= new Array();
 choices[50][0] = "Entidad externa";
 choices[50][1] = "Proceso";
 choices[50][2] = "Funci&oacute;n";
 choices[50][3] = "Almac&eacute;n de datos";
 answers[50] = choices[50][2];
 units[50] = "81";
 comments[50] = "Id Pregunta: 5072. Examen TIC A 2007";


//  Id pregunta: 5135 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  &iquest;Cu&aacute;l de los siguientes modelos de ciclo de vida no permite aprovechar las ventajas de la tecnolog&iacute;a de objetos?";
 choices[51]= new Array();
 choices[51][0] = "Modelo de agrupamiento.";
 choices[51][1] = "Modelo de cascada";
 choices[51][2] = "Modelo fuente";
 choices[51][3] = "Modelo remolino.";
 answers[51] = choices[51][1];
 units[51] = "76";
 comments[51] = "Id Pregunta: 5135. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5150 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  En un DFD, &iquest;Cu&aacute;l es la diferencia entre un digrama de contexto y un diagrama de nivel 0?";
 choices[52]= new Array();
 choices[52][0] = "El diagrama de contexto no pertenece al DFD sino que es previo al mismo, el cual comienza con el diagrama de nivel 1.";
 choices[52][1] = "El diagrama de nivel 0 no existe, ya que los niveles empiezan en el 1, con lo cual no tiene sentido la comparaci&oacute;n.";
 choices[52][2] = "La &uacute;nica diferencia entre un diagrama de contexto y un diagrama de nivel 0 es que &eacute;ste &uacute;ltimo carece de entidades externas.";
 choices[52][3] = "No hay ninguna diferencia entre ambos pues se llama diagrama de contexto al diagrama de nivel 0 de un DFD.";
 answers[52] = choices[52][3];
 units[52] = "81";
 comments[52] = "Id Pregunta: 5150. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5192 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  A un sistema OLTP (On-line Transaction Processing) se le exige:";
 choices[53]= new Array();
 choices[53][0] = "Ante una transacci&oacute;n abortada, debe consolidar cualquier modificaci&oacute;n que se haya introducido con anterioridad a la interrupci&oacute;n.";
 choices[53][1] = "Los efectos de una transacci&oacute;n no deben ser observables por ninguna otra transacci&oacute;n hasta que la transacci&oacute;n originaria haya concluido.";
 choices[53][2] = "Si una transacci&oacute;n resulta abortada, no debe restituir el anterior estado v&aacute;lido de los datos.";
 choices[53][3] = "Una vez validada una transacci&oacute;n, las modificaciones introducidas en los datos compartidos sobrevivir&aacute;n salvo que se produzcan fallos futuros en el sistema.";
 answers[53] = choices[53][1];
 units[53] = "83";
 comments[53] = "Id Pregunta: 5192. ";


//  Id pregunta: 5199 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  No se considera una t&eacute;cnica o herramienta para la creaci&oacute;n de prototipos:";
 choices[54]= new Array();
 choices[54][0] = "T&eacute;cnicas de Cuarta Generaci&oacute;n";
 choices[54][1] = "Componentes de Software Reutilizables";
 choices[54][2] = "Modelado L&oacute;gico de Datos";
 choices[54][3] = "Especificaciones Formales y Entornos para Prototipos";
 answers[54] = choices[54][2];
 units[54] = "85";
 comments[54] = "Id Pregunta: 5199. ";


//  Id pregunta: 5200 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  En el an&aacute;lisis DAFO, la definici&oacute;n &ldquo;Son eventos o circunstancias que se espera que ocurran o pueden inducirse a que ocurran en el mundo exterior y que podr&iacute;an tener un impacto positivo en el futuro de la Organizaci&oacute;n&rdquo; se corresponde con:";
 choices[55]= new Array();
 choices[55][0] = "Debilidades";
 choices[55][1] = "Amenazas";
 choices[55][2] = "Fortalezas";
 choices[55][3] = "Oportunidades";
 answers[55] = choices[55][3];
 units[55] = "77";
 comments[55] = "Id Pregunta: 5200. ";


//  Id pregunta: 5205 AÃ±o de creación de pregunta: 2003-01-01
 questions[56]= "57)  &iquest;Cual de las siguientes no se considera un beneficio de construir prototipos en el proceso del software?";
 choices[56]= new Array();
 choices[56][0] = "Mejora en la usabilidad del sistema";
 choices[56][1] = "Aumento del esfuerzo de desarrollo";
 choices[56][2] = "Mejora en la calidad del dise&ntilde;o";
 choices[56][3] = "Mejor acoplamiento entre el sistema y las necesidades del usuario";
 answers[56] = choices[56][1];
 units[56] = "85";
 comments[56] = "Id Pregunta: 5205. ";


//  Id pregunta: 5232 AÃ±o de creación de pregunta: 2003-01-01
 questions[57]= "58)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n al modelo de ciclo de vida en espiral:";
 choices[57]= new Array();
 choices[57][0] = "Fue propuesto por Boehm para solventar los  principales problemas de los modelos tradicionales";
 choices[57][1] = "Considera diferentes alternativas para alcanzar los objetivos del proyecto";
 choices[57][2] = "La dimensi&oacute;n radial indica los costes de desarrollo acumulativo";
 choices[57][3] = "Todas las anteriores son correctas";
 answers[57] = choices[57][3];
 units[57] = "76";
 comments[57] = "Id Pregunta: 5232. ";


//  Id pregunta: 5236 AÃ±o de creación de pregunta: 2003-01-01
 questions[58]= "59)  En relaci&oacute;n del Desarrollo Software Basado en Componentes(DSBC):";
 choices[58]= new Array();
 choices[58][0] = "Tambi&eacute;n llamado &quot;con reutilizaci&oacute;n&quot;, se ensambla el desarrollo con componentes software ya existentes";
 choices[58][1] = "Es adecuado a tecnolog&iacute;as orientadas a objetos";
 choices[58][2] = "El inconveniente es la excesiva dependencia de la calidad, robustez y flexibilidad de las librer&iacute;as de componentes.";
 choices[58][3] = "Todas las anteriores son correctas";
 answers[58] = choices[58][3];
 units[58] = "76";
 comments[58] = "Id Pregunta: 5236. ";


//  Id pregunta: 5243 AÃ±o de creación de pregunta: 2003-01-01
 questions[59]= "60)  Indique la pr&aacute;ctica cuyo objeto es ayudar a la planificaci&oacute;n de las actividades y recursos de una organizaci&oacute;n, facilitando la asignaci&oacute;n de prioridades dentro de ella:";
 choices[59]= new Array();
 choices[59][0] = "Matriz TOWS";
 choices[59][1] = "An&aacute;lisis coste/beneficio";
 choices[59][2] = "Factores cr&iacute;ticos de &eacute;xito";
 choices[59][3] = "An&aacute;lisis de impacto en la organizaci&oacute;n";
 answers[59] = choices[59][2];
 units[59] = "77";
 comments[59] = "Id Pregunta: 5243. ";


//  Id pregunta: 5245 AÃ±o de creación de pregunta: 2003-01-01
 questions[60]= "61)  Un Plan de sistemas de Informaci&oacute;n y Comunicaciones se elabora (se&ntilde;ale la falsa):";
 choices[60]= new Array();
 choices[60][0] = "Se elabora a partir de los objetivos estrat&eacute;gicos de la organizaci&oacute;n";
 choices[60][1] = "Se recogen las necesidades y requerimientos de los usuarios, en base a procesos de negocio";
 choices[60][2] = "No implica necesariamente el liderazgo del equipo directivo para su &eacute;xito";
 choices[60][3] = "Se valoran los escenarios tecnol&oacute;gicos que aporten el menor riesgo, la mayor protecci&oacute;n de inversiones y los m&aacute;ximos beneficios";
 answers[60] = choices[60][2];
 units[60] = "77";
 comments[60] = "Id Pregunta: 5245. ";


//  Id pregunta: 5754 AÃ±o de creación de pregunta: 2009-01-01
 questions[61]= "62)  &iquest;Cu&aacute;l de estos diagramas de UML no est&aacute; categorizado como un diagrama de comportamiento?";
 choices[61]= new Array();
 choices[61][0] = "Diagrama de interacci&oacute;n.";
 choices[61][1] = "Diagrama de casos de uso.";
 choices[61][2] = "Diagrama de objetos.";
 choices[61][3] = "Diagrama de actividad.";
 answers[61] = choices[61][2];
 units[61] = "82";
 comments[61] = "Id Pregunta: 5754. ";


//  Id pregunta: 5834 AÃ±o de creación de pregunta: 2009-01-01
 questions[62]= "63)  Indique c&oacute;mo se denomina el patr&oacute;n de dise&ntilde;o que define una dependencia de uno-a-muchos entre objetos, de forma que cuando un objeto cambia de estado se notifica y actualizan autom&aacute;ticamente todos los objetos que dependen de &eacute;l:";
 choices[62]= new Array();
 choices[62][0] = "Strategy.";
 choices[62][1] = "State.";
 choices[62][2] = "Observer.";
 choices[62][3] = "Command.";
 answers[62] = choices[62][2];
 units[62] = "84";
 comments[62] = "Id Pregunta: 5834. MAP 2008 A1";


//  Id pregunta: 6096 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  &iquest;Cu&aacute;l de los siguientes NO es un principio b&aacute;sico de todo modelo orientado a objetos seg&uacute;n Booch?";
 choices[63]= new Array();
 choices[63][0] = "Distribuci&oacute;n.";
 choices[63][1] = "Abstracci&oacute;n.";
 choices[63][2] = "Encapsulaci&oacute;n.";
 choices[63][3] = "Modularidad.";
 answers[63] = choices[63][0];
 units[63] = "82";
 comments[63] = "Id Pregunta: 6096. TIC A 2009";


//  Id pregunta: 6107 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  Entre las t&eacute;cnicas y pr&aacute;cticas de educci&oacute;n de requisitos utilizadas en la ingenier&iacute;a de requisitos NO se encuentra la siguiente:";
 choices[64]= new Array();
 choices[64][0] = "Brainstorming.";
 choices[64][1] = "Casos de uso.";
 choices[64][2] = "M&eacute;todo Albrecht.";
 choices[64][3] = "Prototipado.";
 answers[64] = choices[64][2];
 units[64] = "78";
 comments[64] = "Id Pregunta: 6107. TIC A 2009";


//  Id pregunta: 6203 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  Las fases componentes del ciclo de vida Rapid Application Development son:";
 choices[65]= new Array();
 choices[65][0] = "Cuatro: Planificaci&oacute;n de requerimientos, dise&ntilde;o con usuario, construcci&oacute;n, implantaci&oacute;n";
 choices[65][1] = "Siete: Planificaci&oacute;n, especificaci&oacute;n de requisitos, dise&ntilde;o, codificaci&oacute;n, pruebas e integraci&oacute;n, implantaci&oacute;n y aceptaci&oacute;n, mantenimiento";
 choices[65][2] = "Cuatro: Planificaci&oacute;n, an&aacute;lisis del riesgo, ingenier&iacute;a, evaluaci&oacute;n del cliente";
 choices[65][3] = "Cinco: Especificaci&oacute;n del producto, transformaci&oacute;n autom&aacute;tica, realizaci&oacute;n bucles iterativos, probar el producto, reajustar especificacones";
 answers[65] = choices[65][0];
 units[65] = "76";
 comments[65] = "Id Pregunta: 6203. TICB-2009, bloque desarrollo";


//  Id pregunta: 6206 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  Relacionado con el An&aacute;lisis y Dise&ntilde;o Orientado a Objetos, &iquest;Cu&aacute;l de los siguientes patrones de dise&ntilde;o corresponde a la subclasificaci&oacute;n patrones de creaci&oacute;n?";
 choices[66]= new Array();
 choices[66][0] = "Adapter";
 choices[66][1] = "Bridge";
 choices[66][2] = "Singleton";
 choices[66][3] = "Composite";
 answers[66] = choices[66][2];
 units[66] = "82";
 comments[66] = "Id Pregunta: 6206. TICB-2009, bloque desarrollo";


//  Id pregunta: 6216 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  &iquest;Cu&aacute;l de los siguientes no es un tipo de ramas o m&oacute;dulos subordinados del an&aacute;lisis de transformaci&oacute;n?";
 choices[67]= new Array();
 choices[67][0] = "Aferentes";
 choices[67][1] = "de Transformaci&oacute;n";
 choices[67][2] = "Diferentes";
 choices[67][3] = "Eferentes";
 answers[67] = choices[67][2];
 units[67] = "81";
 comments[67] = "Id Pregunta: 6216. TICB-2009, bloque desarrollo";


//  Id pregunta: 6238 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)  Indique c&oacute;mo se denomina el patr&oacute;n de dise&ntilde;o que representa y externaliza el estado interno de un objeto sin violar la encapsulaci&oacute;n, de forma que &eacute;ste puede volver a dicho estado m&aacute;s tarde:";
 choices[68]= new Array();
 choices[68][0] = "Spider.";
 choices[68][1] = "State.";
 choices[68][2] = "Observer.";
 choices[68][3] = "Memento.";
 answers[68] = choices[68][3];
 units[68] = "84";
 comments[68] = "Id Pregunta: 6238. TICB-2009, bloque desarrollo";


//  Id pregunta: 6245 AÃ±o de creación de pregunta: 2010-01-01
 questions[69]= "70)  El modelo CMMI est&aacute; enfocado en tres &aacute;reas: &iquest;Cu&aacute;l de las siguientes no es una de ellas?";
 choices[69]= new Array();
 choices[69][0] = "Desarrollo de servicios y productos - CMMI para el desarrollo (CMMI - DEV)";
 choices[69][1] = "Adquisici&oacute;n de productos y servicios - CMMI para la adquisici&oacute;n (CMMI - ACQ)";
 choices[69][2] = "Establecimiento de Servicios, Gesti&oacute;n y entrega - CMMI para los servicios (CMMI - SVC)";
 choices[69][3] = "Establecimiento de la calidad de servicios y productos - CMMI para la calidad (CMMI - QUA)";
 answers[69] = choices[69][3];
 units[69] = "79";
 comments[69] = "Id Pregunta: 6245. TICB-2009, bloque desarrollo";


//  Id pregunta: 6253 AÃ±o de creación de pregunta: 2010-01-01
 questions[70]= "71)  Un diccionario de datos proporciona un enfoque organizado para representar las caracter&iacute;sticas de cada objeto de datos y elemento de control. Adem&aacute;s:";
 choices[70]= new Array();
 choices[70][0] = "El diccionario de datos se puede tratar como una base de datos";
 choices[70][1] = "El formato de diccionario no var&iacute;a aunque se implemente en distintas herramientas ";
 choices[70][2] = "Los flujos que partes o llegan a los almacenes definen la interfaz entre el sistema y el mundo exterior";
 choices[70][3] = "Los almacenes de datos representan la informaci&oacute;n din&aacute;mica del sistema";
 answers[70] = choices[70][0];
 units[70] = "81";
 comments[70] = "Id Pregunta: 6253. TICB-2009, bloque desarrollo";


//  Id pregunta: 6292 AÃ±o de creación de pregunta: 2010-01-01
 questions[71]= "72)  El problema de volatilidad a la hora de la obtenci&oacute;n de requisitos en el an&aacute;lisis de un Sistema de Informaci&oacute;n y Comunicaciones se refiere a:";
 choices[71]= new Array();
 choices[71][0] = "Los requisitos son el resultado de integrar informaci&oacute;n de m&uacute;ltiples fuentes, algunas con intereses contrapuestos";
 choices[71][1] = "La complejidad de la organizaci&oacute;n puede hacer que a lo largo del proyecto se cambien objetivos, pol&iacute;ticas, legislaci&oacute;n, etc";
 choices[71][2] = "Las necesidades del usuario cambian";
 choices[71][3] = "Todas las anteriores";
 answers[71] = choices[71][3];
 units[71] = "78";
 comments[71] = "Id Pregunta: 6292. ";


//  Id pregunta: 6294 AÃ±o de creación de pregunta: 2010-01-01
 questions[72]= "73)  &iquest;Cu&aacute;l de las siguientes no es una t&eacute;cnica de alto nivel de obtenci&oacute;n de requisitos en el an&aacute;lisis de los sistemas de Informaci&oacute;n?";
 choices[72]= new Array();
 choices[72][0] = "Prototipos";
 choices[72][1] = "Sesiones JAD y JRP";
 choices[72][2] = "Entorno de Bucles Adaptativo";
 choices[72][3] = "Todas lo son";
 answers[72] = choices[72][3];
 units[72] = "78";
 comments[72] = "Id Pregunta: 6294. ";


//  Id pregunta: 6298 AÃ±o de creación de pregunta: 2010-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l es la diferencia entre una clase y un objeto?";
 choices[73]= new Array();
 choices[73][0] = "Las clases son un concepto din&aacute;mico mientras que los objetos son entes est&aacute;ticos";
 choices[73][1] = "Ninguna, son lo mismo";
 choices[73][2] = "Las clases son un concepto est&aacute;ticos mientras que los objetos son entes din&aacute;micos";
 choices[73][3] = "Tanto las clases como los objetos son entes est&aacute;ticos definidos en el programa fuente";
 answers[73] = choices[73][2];
 units[73] = "82";
 comments[73] = "Id Pregunta: 6298. ";


//  Id pregunta: 6303 AÃ±o de creación de pregunta: 2010-01-01
 questions[74]= "75)  &iquest;Cu&aacute;l de las siguientes no es una tecnolog&iacute;a de desarrollo de sistemas distribuidos basados en objtetos?";
 choices[74]= new Array();
 choices[74][0] = "DCOM";
 choices[74][1] = "IDL";
 choices[74][2] = "CORBA";
 choices[74][3] = "RMI ";
 answers[74] = choices[74][1];
 units[74] = "82";
 comments[74] = "Id Pregunta: 6303. ";


//  Id pregunta: 6473 AÃ±o de creación de pregunta: 2010-01-01
 questions[75]= "76)  UMLSec:";
 choices[75]= new Array();
 choices[75][0] = "Se utiliza en el desarrollo de software para modelizar pol&iacute;ticas de control de acceso, integr&aacute;ndolas en el sistema desarrollado.";
 choices[75][1] = "Es una metodolog&iacute;a para el an&aacute;lisis y la gesti&oacute;n de riesgos en proyectos de desarrollo orientado a objetos.";
 choices[75][2] = "Es sin&oacute;nimo de SecureUML.";
 choices[75][3] = "Ninguna de las anteriores.";
 answers[75] = choices[75][3];
 units[75] = "84";
 comments[75] = "Id Pregunta: 6473. Castilla La Mancha 2009";


//  Id pregunta: 8647 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  &iquest;A cu&aacute;l de las siguientes opciones corresponde la definici&oacute;n siguiente?: &quot;Un medio a trav&eacute;s del cual se simula el aspecto visual del sistema mediante la representaci&oacute;n de los conceptos, componentes, objetos gr&aacute;ficos, entradas y salidas requeridas para la ejecuci&oacute;n de cada funci&oacute;n en respuesta a las necesidades planteadas.&quot;";
 choices[76]= new Array();
 choices[76][0] = "Dise&ntilde;o orientado a objetos.";
 choices[76][1] = "JRP";
 choices[76][2] = "Prototipado.";
 choices[76][3] = "JAD";
 answers[76] = choices[76][2];
 units[76] = "85";
 comments[76] = "Id Pregunta: 8647. Examen TIC A2 2010 interna";


//  Id pregunta: 8763 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  En el contexto de los lenguajes de programaci&oacute;n orientados a objetos, cuando un objeto recibe de otro objeto o aplicaci&oacute;n una notificaci&oacute;n, ha recibido un:";
 choices[77]= new Array();
 choices[77][0] = "Evento.";
 choices[77][1] = "Comando.";
 choices[77][2] = "Protocolo.";
 choices[77][3] = "Orden.";
 answers[77] = choices[77][0];
 units[77] = "82, 84";
 comments[77] = "Id Pregunta: 8763. Examen TIC A2 2010 interna";


//  Id pregunta: 8868 AÃ±o de creación de pregunta: 2011-01-01
 questions[78]= "79)  En un modelo entidad-relaci&oacute;n cual es la definici&oacute;n b&aacute;sica que corresponde con el elemento entidad?:";
 choices[78]= new Array();
 choices[78][0] = "Es aquel objeto que existe en el mundo real con una identificaci&oacute;n distinta y con un significado propio";
 choices[78][1] = "Es aquella propiedad que tiene asignado un dominio";
 choices[78][2] = "Es el conjunto de valores que puede tomar un atributo";
 choices[78][3] = "Es la relaci&oacute;n que se establece entre los objetos del modelo";
 answers[78] = choices[78][0];
 units[78] = "80";
 comments[78] = "Id Pregunta: 8868. Analista Ayto. Madrid 2010";


//  Id pregunta: 8873 AÃ±o de creación de pregunta: 2011-01-01
 questions[79]= "80)  El desarrollo en Espiral es un modelo del ciclo de vida del software, que establece una serie de etapas por los que pasa el mismo, desde su concepci&oacute;n inicial hasta la finalizaci&oacute;n del producto. Se&ntilde;ale las etapas correctas";
 choices[79]= new Array();
 choices[79][0] = "&ldquo;Determinar objetivos&rdquo;, &ldquo;An&aacute;lisis de riesgos&rdquo;, &ldquo;Planificaci&oacute;n&rdquo; y &ldquo;Desarrollo y Validaci&oacute;n&rdquo;";
 choices[79][1] = "&ldquo;Determinar objetivos&rdquo;, &ldquo;An&aacute;lisis de riesgos&rdquo;, &ldquo;Desarrollo y Validaci&oacute;n&rdquo; e &ldquo;Implantaci&oacute;n y mantenimiento del sistema&rdquo;";
 choices[79][2] = "&ldquo;Planificaci&oacute;n de actividades y recursos necesarios&rdquo;, &ldquo;An&aacute;lisis de riesgos&rdquo;, &ldquo;Planificaci&oacute;n&rdquo; e &ldquo;Implantaci&oacute;n y mantenimiento del sistema&rdquo;";
 choices[79][3] = "&ldquo;Determinar objetivos&rdquo;, &ldquo;Planificaci&oacute;n&rdquo;, &ldquo;Desarrollo y Validaci&oacute;n&rdquo; e &ldquo;Implantaci&oacute;n y mantenimiento del sistema&rdquo;";
 answers[79] = choices[79][0];
 units[79] = "76";
 comments[79] = "Id Pregunta: 8873. Analista Ayto. Madrid 2010";


//  Id pregunta: 9438 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  En un DFD los niveles de los diagramas que recogen la descomposici&oacute;n en niveles, desde el m&aacute;s general al m&aacute;s espec&iacute;fico, se denominan:";
 choices[80]= new Array();
 choices[80][0] = "Diagrama de sistema, subsistemas, funciones, subfunciones, procesos y subprocesos.";
 choices[80][1] = "Diagrama de contexto, sistemas, subsistemas, funciones y subfunciones.";
 choices[80][2] = "Diagrama de contexto, sistemas, funciones y subfunciones.";
 choices[80][3] = "Diagrama de contexto, subsistemas, funciones, subfunciones y procesos.";
 answers[80] = choices[80][3];
 units[80] = "81";
 comments[80] = "Id Pregunta: 9438. Examen AGE TIC A1 2011";


//  Id pregunta: 9448 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  En el modelo de ciclo de vida en espiral, dentro de cada ciclo:";
 choices[81]= new Array();
 choices[81][0] = "La dimensi&oacute;n radial representa el avance y la angular el coste.";
 choices[81][1] = "La dimensi&oacute;n radial representa la complejidad y la angular el avance.";
 choices[81][2] = "La dimensi&oacute;n radial representa el coste y la angular la complejidad.";
 choices[81][3] = "La dimensi&oacute;n radial representa el coste y la angular el avance.";
 answers[81] = choices[81][3];
 units[81] = "76";
 comments[81] = "Id Pregunta: 9448. Examen AGE TIC A1 2011";


//  Id pregunta: 9462 AÃ±o de creación de pregunta: 2013-01-01
 questions[82]= "83)  &iquest;Cu&aacute;l de los siguientes diagramas contempla UML 2.0?";
 choices[82]= new Array();
 choices[82][0] = "De actividad, DFD, de casos de uso, de secuencia, de comunicaci&oacute;n.";
 choices[82][1] = "De casos de uso, de actividad, de secuencia, de comunicaci&oacute;n, de clases.";
 choices[82][2] = "De casos de uso, entidad-relaci&oacute;n, de secuencia, de clases, de comunicaci&oacute;n.";
 choices[82][3] = "De clases, de herencia compuesta, de secuencia, de comunicaci&oacute;n, de clases.";
 answers[82] = choices[82][1];
 units[82] = "84";
 comments[82] = "Id Pregunta: 9462. NULL";


//  Id pregunta: 9488 AÃ±o de creación de pregunta: 2013-01-01
 questions[83]= "84)  Indique cu&aacute;l de los siguientes no es un tipo de prototipo en el proceso unificado de desarrollo del software";
 choices[83]= new Array();
 choices[83][0] = "Prototipo arquitect&oacute;nico";
 choices[83][1] = "Prototipo de prueba";
 choices[83][2] = "Prototipo exploratorio";
 choices[83][3] = "Prototipo evolutivo";
 answers[83] = choices[83][1];
 units[83] = "78";
 comments[83] = "Id Pregunta: 9488. ";


//  Id pregunta: 9490 AÃ±o de creación de pregunta: 2013-01-01
 questions[84]= "85)  Seg&uacute;n M&eacute;tricav3, &iquest;qu&eacute; verificaciones no se llevan a cabo durante la validaci&oacute;n de requisitos?";
 choices[84]= new Array();
 choices[84][0] = "Verificaciones de integridad";
 choices[84][1] = "Verificaciones de consistencia";
 choices[84][2] = "Verificaciones de completitud";
 choices[84][3] = "Verificaciones de realismo";
 answers[84] = choices[84][0];
 units[84] = "78";
 comments[84] = "Id Pregunta: 9490. ";


//  Id pregunta: 9732 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Se&ntilde;ale la opci&oacute;n INCORRECTA:";
 choices[85]= new Array();
 choices[85][0] = "En dise&ntilde;o de programas, GRASP significa &quot;patrones generales de software para asignar responsabilidades&quot;, y describen los principios fundamentales de la asignaci&oacute;n de responsabilidades a objetos.";
 choices[85][1] = "La cohesi&oacute;n se define como el grado de interdependencia existente entre los m&oacute;dulos de un sistema.";
 choices[85][2] = "En la programaci&oacute;n modular lo m&aacute;s conveniente es que un m&oacute;dulo sea altamente cohesivo y con bajo acoplamiento.";
 choices[85][3] = "AOSD (Desarrollo Software Orientado a Aspectos) es una aproximaci&oacute;n al dise&ntilde;o de la arquitectura del sistema. Se caracteriza porque ofrece mecanismos para resolver problemas de c&oacute;digo disperso o enmara&ntilde;ado gracias a los aspectos.";
 answers[85] = choices[85][1];
 units[85] = "84";
 comments[85] = "Id Pregunta: 9732. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9949 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Cu&aacute;l de las siguientes palabras y acr&oacute;nimos NO est&aacute; relacionado con Metodolog&iacute;as &Aacute;giles para el desarrollo de software:";
 choices[86]= new Array();
 choices[86][0] = "SCRUM ";
 choices[86][1] = "XP ";
 choices[86][2] = "DSDM ";
 choices[86][3] = "AGILD ";
 answers[86] = choices[86][3];
 units[86] = "79";
 comments[86] = "Id Pregunta: 9949. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 9952 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares regula los procesos de ciclo de vida del software?";
 choices[87]= new Array();
 choices[87][0] = "ISO/IEC 12207:2008";
 choices[87][1] = "ISO 9001:2008";
 choices[87][2] = "ISO 29393:2009";
 choices[87][3] = "ISO 31000:2009";
 answers[87] = choices[87][0];
 units[87] = "76";
 comments[87] = "Id Pregunta: 9952. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10021 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  Se&ntilde;ale la respuesta INCORRECTA respecto a las caracter&iacute;sticas de la metodolog&iacute;a de desarrollo software conocida como Proceso Unificado de Desarrollo Software:";
 choices[88]= new Array();
 choices[88][0] = "Es Iterativo e Incremental.";
 choices[88][1] = "Est&aacute; dirigido por los casos de uso.";
 choices[88][2] = "Est&aacute; enfocado en los riesgos.";
 choices[88][3] = "Fue creado por Dennis Ritchie y Ken Thompson.";
 answers[88] = choices[88][3];
 units[88] = "76";
 comments[88] = "Id Pregunta: 10021. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10085 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  &iquest;Qu&eacute; tipo de prototipo es m&aacute;s adecuado si se conocen bien todos los requisitos de partida?";
 choices[89]= new Array();
 choices[89][0] = "R&aacute;pido";
 choices[89][1] = "Evolutivo";
 choices[89][2] = "Incremental";
 choices[89][3] = "Cualquiera de los anteriores";
 answers[89] = choices[89][2];
 units[89] = "76";
 comments[89] = "Id Pregunta: 10085. NULL";


//  Id pregunta: 10100 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  En la lista eventos del modelo ambiental, indique que tipo de evento NO existe: ";
 choices[90]= new Array();
 choices[90][0] = "Evento orientado a flujo";
 choices[90][1] = "Evento temporal";
 choices[90][2] = "Evento de control";
 choices[90][3] = "Evento cr&iacute;tico";
 answers[90] = choices[90][3];
 units[90] = "81";
 comments[90] = "Id Pregunta: 10100. NULL";


//  Id pregunta: 10102 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  En el diagrama SADT, &iquest;qu&eacute; interconexi&oacute;n NO existe?";
 choices[91]= new Array();
 choices[91][0] = "salida-mecanismo";
 choices[91][1] = "salida-realimentaci&oacute;n";
 choices[91][2] = "control-relaimentaci&oacute;n";
 choices[91][3] = "entrada-realimentaci&oacute;n";
 answers[91] = choices[91][1];
 units[91] = "81";
 comments[91] = "Id Pregunta: 10102. NULL";


//  Id pregunta: 10177 AÃ±o de creación de pregunta: 2014-01-01
 questions[92]= "93)  &iquest;Qu&eacute; afirmaci&oacute;n es cierta en relaci&oacute;n con la orientaci&oacute;n a objetos?";
 choices[92]= new Array();
 choices[92][0] = "La encapsulaci&oacute;n permite captar las caracter&iacute;sticas esenciales que distinguen a un objeto de otros tipos de objetos, en funci&oacute;n de la perspectiva del observador, y obtener as&iacute; una descripci&oacute;n de la clase de objetos que enfatiza unos detalles y suprimer otros";
 choices[92][1] = "Seg&uacute;n Grady Booch, un objeto o instancia de una clase tiene estado, comportamiento e identidad";
 choices[92][2] = "Los lenguajes OO son lenguajes fuertemente tipados que no soportan el enlace din&aacute;mico en tiempo de ejecuci&oacute;n, para invocar operaciones en objetos obviando el tipo actual de &eacute;stos";
 choices[92][3] = "El polimorfismo se expresa &uacute;nicamente a trav&eacute;s del uso de un mismo nombre de m&eacute;todo o funci&oacute;n con distintos argumentos o un mismo operador con distintas funcionalidades";
 answers[92] = choices[92][1];
 units[92] = "82";
 comments[92] = "Id Pregunta: 10177. ";


//  Id pregunta: 10180 AÃ±o de creación de pregunta: 2014-01-01
 questions[93]= "94)  Respecto las relaciones de agregaci&oacute;n y composici&oacute;n entre clases de objetos, es cierto que:";
 choices[93]= new Array();
 choices[93][0] = "La composici&oacute;n expresa una relaci&oacute;n &quot;todo / parte&quot; o &quot;forma parte de&quot; entre los objetos implicados. La agregaci&oacute;n es una forma m&aacute;s fuerte de composici&oacute;n, de forma que si el &quot;objeto hijo&quot; es eliminado o desaparece, el &quot;objeto padre&quot; deja de existir.";
 choices[93][1] = "La agregaci&oacute;n expresa una relaci&oacute;n &quot;todo / parte&quot; o &quot;forma parte de&quot; entre los objetos implicados. La composici&oacute;n es una forma m&aacute;s fuerte de agregaci&oacute;n, de forma que si el &quot;objeto hijo&quot; es eliminado o desaparece, el &quot;objeto padre&quot; deja de existir.";
 choices[93][2] = "La a) y adem&aacute;s, la composici&oacute;n se representa en el diagrama de clases mediante una l&iacute;nea de asociaci&oacute;n entre las clases implicadas, finalizada en un rombo relleno en el extremo del &quot;todo&quot; ";
 choices[93][3] = "La b) y adem&aacute;s, la agregaci&oacute;n se representa en el diagrama de clases mediante una l&iacute;nea de asociaci&oacute;n entre las clases implicadas, finalizada en un rombo vac&iacute;o en el extremo del &quot;todo&quot; ";
 answers[93] = choices[93][3];
 units[93] = "82";
 comments[93] = "Id Pregunta: 10180. ";


//  Id pregunta: 10815 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l de las siguientes opciones incluye todas las fases del modelo de ciclo de vida RAD (Rapid Application Development)?";
 choices[94]= new Array();
 choices[94][0] = "Modelado de provisi&oacute;n, Modelado de entidades, Modelado de relaciones, Generaci&oacute;n de aplicaciones y Pruebas de entrega.";
 choices[94][1] = "Modelado de gesti&oacute;n, Modelado de entidades, Modelado de relaciones, Generaci&oacute;n de aplicaciones y Pruebas de entrega.";
 choices[94][2] = "Modelado de gesti&oacute;n, Modelado de datos, Modelado de procesos, Generaci&oacute;n de aplicaciones y Pruebas de entrega.";
 choices[94][3] = "Modelado de gesti&oacute;n, Modelado de datos, Generaci&oacute;n de aplicaciones, Pruebas de desarrollo y Pruebas de entrega.";
 answers[94] = choices[94][2];
 units[94] = "76, 79";
 comments[94] = "Id Pregunta: 10815. Examen GSI 2014";


//  Id pregunta: 10845 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Cu&aacute;l de los siguientes tipos de diagramas NO est&aacute; incluido en la categor&iacute;a de diagramas estructurales que define UML 2?";
 choices[95]= new Array();
 choices[95][0] = "Diagrama de clases.";
 choices[95][1] = "Diagrama de objetos.";
 choices[95][2] = "Diagrama de despliegue.";
 choices[95][3] = "Diagrama de actividades.";
 answers[95] = choices[95][3];
 units[95] = "82, 84";
 comments[95] = "Id Pregunta: 10845. Examen GSI 2014";


//  Id pregunta: 10865 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  De las estrategias de dise&ntilde;o propuestas por M&eacute;trica v3 para obtener el diagrama de estructura &iquest;en qu&eacute; se diferencian el an&aacute;lisis de transformaci&oacute;n y el an&aacute;lisis de transacci&oacute;n?";
 choices[96]= new Array();
 choices[96][0] = "No existe ninguna diferencia, ambas son estrategias de dise&ntilde;o que se aplican a los DFD.";
 choices[96][1] = "El an&aacute;lisis de transformaci&oacute;n se aplica cuando el DFD realiza modificaciones independientemente de la entrada y la salida, mientras que el an&aacute;lisis de transacci&oacute;n se aplica cuando en un DFD en funci&oacute;n del flujo de llegada se realiza la elecci&oacute;n de uno o m&aacute;s flujos de informaci&oacute;n.";
 choices[96][2] = "El an&aacute;lisis de transacci&oacute;n se aplica cuando el DFD realiza modificaciones independientemente de la entrada y la salida, mientras que el an&aacute;lisis de transformaci&oacute;n se aplica a los DFD cuando en funci&oacute;n del flujo de llegada se realiza la elecci&oacute;n de uno o m&aacute;s flujos de informaci&oacute;n.";
 choices[96][3] = "El an&aacute;lisis de transacci&oacute;n se centra en los resultados del diagrama mientras que el an&aacute;lisis de transformaci&oacute;n se centra en c&oacute;mo se realizan dichos cambios.";
 answers[96] = choices[96][1];
 units[96] = "86, 81, 82";
 comments[96] = "Id Pregunta: 10865. Examen GSI 2014";


//  Id pregunta: 11007 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Se&ntilde;ale la respuesta correcta respecto al modelo de Desarrollo R&aacute;pido de Aplicaciones (DRA) para el desarrollo de nuevas aplicaciones:";
 choices[97]= new Array();
 choices[97][0] = "El DRA no es un modelo adecuado si la nueva aplicaci&oacute;n hace uso de tecnolog&iacute;as nuevas.";
 choices[97][1] = "Aunque un sistema no se pueda modularizar adecuadamente, la construcci&oacute;n de los componentes necesarios para DRA no ser&aacute; problem&aacute;tico.";
 choices[97][2] = "El DRA no es adecuado cuando el software nuevo no requiere un alto grado de interoperatividad con aplicaciones ya existentes.";
 choices[97][3] = "Es un modelo de proceso del desarrollo del software en espiral que enfatiza un ciclo de desarrollo extremadamente corto.";
 answers[97] = choices[97][0];
 units[97] = "76";
 comments[97] = "Id Pregunta: 11007. TIC A1 AGE 2014";


//  Id pregunta: 11056 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Cu&aacute;l NO es una caracter&iacute;stica general de Scrum?";
 choices[98]= new Array();
 choices[98][0] = "Durante cada sprint el equipo crea un incremento de software potencialmente entregable";
 choices[98][1] = "Cada sprint dura de media entre 6 y 12 meses";
 choices[98][2] = "Los elementos del Product Backlog que forman parte del sprint se determinan durante la reuni&oacute;n de Sprint Planning";
 choices[98][3] = "Todas son caracter&iacute;sticas generales de Scrum";
 answers[98] = choices[98][1];
 units[98] = "79";
 comments[98] = "Id Pregunta: 11056. Cada sprint suele durar de 15 a 30 d&iacute;as";


//  Id pregunta: 11631 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  La metodolog&iacute;a OOSE fue desarrollada por:";
 choices[99]= new Array();
 choices[99][0] = "Booch";
 choices[99][1] = "Rumbaugh";
 choices[99][2] = "Jacobson";
 choices[99][3] = "Codd";
 answers[99] = choices[99][2];
 units[99] = "79";
 comments[99] = "Id Pregunta: 11631. ";


