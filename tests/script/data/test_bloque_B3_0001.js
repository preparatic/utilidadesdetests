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

//  Id pregunta: 1464 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  La compresi&oacute;n con p&eacute;rdidas no ser&iacute;a adecuada para:";
 choices[0]= new Array();
 choices[0][0] = "Un ejecutable";
 choices[0][1] = "Texto ASCII";
 choices[0][2] = "Un facs&iacute;mil";
 choices[0][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son correctas";
 answers[0] = choices[0][3];
 units[0] = "93";
 comments[0] = "Id Pregunta: 1464. NULL";


//  Id pregunta: 1988 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Qu&eacute; es el factor de utilizaci&oacute;n de los componentes?:";
 choices[1]= new Array();
 choices[1][0] = "Es la m&aacute;xima cantidad de trabajo &uacute;til por unidad de tiempo en un entorno de carga determinada";
 choices[1][1] = "Es la cantidad de trabajo &uacute;til ejecutado por unidad de tiempo en un entorno de carga determinada";
 choices[1][2] = "Es el porcentaje de tiempo durante el cu&aacute;l est&aacute; siendo utilizado un componente del sistema inform&aacute;tico";
 choices[1][3] = "Es el intervalo de tiempo durante el cual se toman medidas para determinar el conjunto de trabajos de un programa en un entorno de memoria virtual paginada";
 answers[1] = choices[1][2];
 units[1] = "88";
 comments[1] = "Id Pregunta: 1988. NULL";


//  Id pregunta: 1996 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  La metodolog&iacute;a METRICA V3 considera que la t&eacute;cnica de estimaci&oacute;n del esfuerzo m&aacute;s adecuada en el desarrollo del software es:";
 choices[2]= new Array();
 choices[2][0] = "La t&eacute;cnica de los puntos de funci&oacute;n poligonial";
 choices[2][1] = "La t&eacute;cnica de los puntos de funci&oacute;n 3D";
 choices[2][2] = "La t&eacute;cnica de los puntos caracter&iacute;sticos";
 choices[2][3] = "La t&eacute;cnica de los puntos de funci&oacute;n";
 answers[2] = choices[2][3];
 units[2] = "86";
 comments[2] = "Id Pregunta: 1996. Pregunta TIC-B 2004";


//  Id pregunta: 2036 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  Sean: a) ac&uacute;stico, b) fon&eacute;tico, c) fonol&oacute;gico, d) l&eacute;xico-sint&aacute;ctico, e) pros&oacute;dico, f) sem&aacute;ntico-pragm&aacute;tico, &iquest;cu&aacute;l ser&iacute;a la ordenaci&oacute;n correcta en funci&oacute;n de la menor a mayor inteligencia...";
 choices[3]= new Array();
 choices[3][0] = "a c b d e f";
 choices[3][1] = "a b c d e f";
 choices[3][2] = "a c b e d f";
 choices[3][3] = "a b c e d f";
 answers[3] = choices[3][1];
 units[3] = "94";
 comments[3] = "Id Pregunta: 2036. Similar a examen TIC MAP A 2004";


//  Id pregunta: 2048 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  En la planificaci&oacute;n estrat&eacute;gica de sistemas de informaci&oacute;n, las decisiones principales que es preciso tomar son:";
 choices[4]= new Array();
 choices[4][0] = "Establecer los objetivos y metas principales";
 choices[4][1] = "Formular programas y proyectos parqa conseguir los objetivos";
 choices[4][2] = "Definir presupuesto y &aacute;mbito de actuaci&oacute;n para llevar a cabo lo anterior";
 choices[4][3] = "Todas las anteriores respuestas son correctas";
 answers[4] = choices[4][3];
 units[4] = "77";
 comments[4] = "Id Pregunta: 2048. ";


//  Id pregunta: 2064 AÃ±o de creación de pregunta: 2004-01-01
 questions[5]= "6)  &iquest;Cual es la complejidad ciclom&aacute;tica de un grafo de flujo con 5 nodos y 7 aristas?";
 choices[5]= new Array();
 choices[5][0] = "3";
 choices[5][1] = "4";
 choices[5][2] = "5";
 choices[5][3] = "6";
 answers[5] = choices[5][1];
 units[5] = "88";
 comments[5] = "Id Pregunta: 2064. SS-A 2004. Complejidad McCabe = aristas - nodos + 2";


//  Id pregunta: 2079 AÃ±o de creación de pregunta: 2004-01-01
 questions[6]= "7)  En el mantenimiento de sistemas de informaci&oacute;n en METRICA V3, la tarea que tiene por objeto el mantenimiento de un cat&aacute;logo que constituye un medio para la comunicaci&oacute;n entre los usuarios y el responsable de mantenimiento, es:";
 choices[6]= new Array();
 choices[6][0] = "Estad&iacute;stica e Inventario de Cambios";
 choices[6][1] = "Registro de cambios";
 choices[6][2] = "Registro de petici&oacute;n";
 choices[6][3] = "Cat&aacute;logo de peticiones";
 answers[6] = choices[6][2];
 units[6] = "86";
 comments[6] = "Id Pregunta: 2079. Pregunta Junta Andalucia - A";


//  Id pregunta: 2114 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;A qu&eacute; se refieren las normas ISO 14000?";
 choices[7]= new Array();
 choices[7][0] = "A la calidad en los procesos productivos";
 choices[7][1] = "A la preservaci&oacute;n del medio ambiente en los procesos productivos";
 choices[7][2] = "A la documentaci&oacute;n del SW en las distintas etapas de un modelo en cascada";
 choices[7][3] = "A la ergonom&iacute;a de los puestos de trabajo";
 answers[7] = choices[7][1];
 units[7] = "92";
 comments[7] = "Id Pregunta: 2114. NULL";


//  Id pregunta: 2139 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Cu&aacute;l de las siguientes no es una caracter&iacute;stica com&uacute;n de las metodolog&iacute;as de desarrollo de equipos l&oacute;gicos?:";
 choices[8]= new Array();
 choices[8][0] = "Uso de las t&eacute;cnicas gr&aacute;ficas";
 choices[8][1] = "Orden y coherencia";
 choices[8][2] = "Pruebas de aceptaci&oacute;n";
 choices[8][3] = "Diccionario de datos";
 answers[8] = choices[8][2];
 units[8] = "79";
 comments[8] = "Id Pregunta: 2139. ";


//  Id pregunta: 2144 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l de los siguientes elementos forma parte del 'bloque instrumental' del PGGC aplicable al desarrollo de equipos l&oacute;gicos del CSI?:";
 choices[9]= new Array();
 choices[9][0] = "Gu&iacute;a metodol&oacute;gica para la elaboraci&oacute;n de planes de garant&iacute;a de calidad";
 choices[9][1] = "Esquema formal para la clasificaci&oacute;n de proyectos inform&aacute;ticos";
 choices[9][2] = "Procedimiento de control de calidad";
 choices[9][3] = "Todos los elementos anteriores son v&aacute;lidos";
 answers[9] = choices[9][2];
 units[9] = "88";
 comments[9] = "Id Pregunta: 2144. ";


//  Id pregunta: 2254 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  Dentro del ciclo de vida cl&aacute;sico, &iquest;qu&eacute; es falso?:";
 choices[10]= new Array();
 choices[10][0] = "Es una visi&oacute;n del problema top-down";
 choices[10][1] = "Se basa en sucesivas subidas y bajadas del nivel de abstracci&oacute;n";
 choices[10][2] = "Se basa en una secuencia estricta de las fases del ciclo de vida";
 choices[10][3] = "Necesita especificaciones consistentes";
 answers[10] = choices[10][1];
 units[10] = "76";
 comments[10] = "Id Pregunta: 2254. ";


//  Id pregunta: 2280 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  El modelo COCOMO de estimaci&oacute;n de recursos y esfuerzo en el desarrollo de un sistema de software, define un tipo de m&eacute;trica:";
 choices[11]= new Array();
 choices[11][0] = "De productividad";
 choices[11][1] = "De complejidad";
 choices[11][2] = "De calidad";
 choices[11][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[11] = choices[11][0];
 units[11] = "89";
 comments[11] = "Id Pregunta: 2280. NULL";


//  Id pregunta: 2286 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  El modelo de UML que describe las necesidades de los usuarios es el:";
 choices[12]= new Array();
 choices[12][0] = "modelo de casos de uso";
 choices[12][1] = "modelo de despliegue";
 choices[12][2] = "modelo de interacci&oacute;n";
 choices[12][3] = "modelo de realizaci&oacute;n";
 answers[12] = choices[12][0];
 units[12] = "82";
 comments[12] = "Id Pregunta: 2286. ";


//  Id pregunta: 2288 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  El modelo en cascada, si hablamos de una fase en la que es necesario, aparte de otras labores, el analizar, entender y documentar el problema que el usuario trata de resolver con el sistema de informaci&oacute;n o aplicaci&oacute;n, nos estamos refiriendo a la fase de:";
 choices[13]= new Array();
 choices[13][0] = "Planificaci&oacute;n";
 choices[13][1] = "An&aacute;lisis";
 choices[13][2] = "Dise&ntilde;o";
 choices[13][3] = "Codificaci&oacute;n";
 answers[13] = choices[13][1];
 units[13] = "76";
 comments[13] = "Id Pregunta: 2288. ";


//  Id pregunta: 2291 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  El modelo entidad/relaci&oacute;n de Chen es:";
 choices[14]= new Array();
 choices[14][0] = "Una t&eacute;cnica para la modelizaci&oacute;n sem&aacute;ntica de datos";
 choices[14][1] = "Una herramienta automatizada de an&aacute;lisis de requisitos";
 choices[14][2] = "Una t&eacute;cnica para el modelado de procesos";
 choices[14][3] = "Una metodolog&iacute;a para el desarrollo de sistemas de informaci&oacute;n";
 answers[14] = choices[14][0];
 units[14] = "80";
 comments[14] = "Id Pregunta: 2291. ";


//  Id pregunta: 2355 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  Entre las criticas que se hacen al modelo en cascada del ciclo de vida de una aplicaci&oacute;n tenemos:";
 choices[15]= new Array();
 choices[15][0] = "Los proyectos raramente siguen el flujo secuencial que propone el modelo";
 choices[15][1] = "Una aplicaci&oacute;n del modelo en sentido estricto obligar&iacute;a a la 'congelaci&oacute;n' de los requisitos de los usuarios, supuesto este completamente alejado de la realidad";
 choices[15][2] = "El modelo no dispone de resultados parciales que permitan validar si el sistema cumple con los requistos desde las primeras fases";
 choices[15][3] = "Todas las anteriores son inconvenientes del modelo en cascada";
 answers[15] = choices[15][3];
 units[15] = "76";
 comments[15] = "Id Pregunta: 2355. ";


//  Id pregunta: 2378 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  Hacer una previsi&oacute;n de procedimientos de recuperaci&oacute;n se debe contemplar en:";
 choices[16]= new Array();
 choices[16][0] = "Plan de Contingencias";
 choices[16][1] = "Control de accesos a bases de datos";
 choices[16][2] = "Mantenimiento y dise&ntilde;o de aplicaciones";
 choices[16][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[16] = choices[16][0];
 units[16] = "96";
 comments[16] = "Id Pregunta: 2378. NULL";


//  Id pregunta: 2397 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  La interfaz de METRICA V3 denominada &quot;Gesti&oacute;n de proyectos&quot;:";
 choices[17]= new Array();
 choices[17][0] = "Contempla tanto el desarrollo de nuevos proyectos como la ampliaci&oacute;n y mejora de los ya existentes (mantenimiento de sistemas de informaci&oacute;n)";
 choices[17][1] = "Consta de 4 tipos de actividades: de inicio de proyecto, de seguimiento y control, de finalizaci&oacute;n de proyecto, y de mantenimiento";
 choices[17][2] = "Tiene como finalidad principal la planificaci&oacute;n, el seguimiento y control de las actividades y de los recursos no materiales";
 choices[17][3] = "Se emplea en la Administraci&oacute;n P&uacute;blica en sustituci&oacute;n de Eurom&eacute;todo";
 answers[17] = choices[17][0];
 units[17] = "86";
 comments[17] = "Id Pregunta: 2397. NULL";


//  Id pregunta: 2418 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  El nivel b&aacute;sico de comprensi&oacute;n donde comienza la abstracci&oacute;n y se aplican reglas gramaticales es el:";
 choices[18]= new Array();
 choices[18][0] = "Nivel fonol&oacute;gico";
 choices[18][1] = "Nivel fon&eacute;tico";
 choices[18][2] = "Nivel ac&uacute;stico";
 choices[18][3] = "Nivel l&eacute;xico-sint&aacute;ctico";
 answers[18] = choices[18][3];
 units[18] = "94";
 comments[18] = "Id Pregunta: 2418. ";


//  Id pregunta: 2434 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  La t&eacute;cnica conocida como Diagrama de Flujo de Datos, se utiliza:";
 choices[19]= new Array();
 choices[19][0] = "Para modelizaci&oacute;n de funciones";
 choices[19][1] = "S&oacute;lo para modelizaci&oacute;n de sistemas en tiempo real";
 choices[19][2] = "Para modelizaci&oacute;n de datos";
 choices[19][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[19] = choices[19][3];
 units[19] = "81";
 comments[19] = "Id Pregunta: 2434. ";


//  Id pregunta: 2459 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Los inconvenientes del modelo en espiral son&hellip;:";
 choices[20]= new Array();
 choices[20][0] = "Dependencia de la experiencia del personal";
 choices[20][1] = "No es tan estandar como METRICA";
 choices[20][2] = "No es adecuado para la orientaci&oacute;n a objetos";
 choices[20][3] = "Todas las anteriores son ciertas";
 answers[20] = choices[20][0];
 units[20] = "76";
 comments[20] = "Id Pregunta: 2459. ";


//  Id pregunta: 2467 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  No es un &quot;agente&quot; en el modelo EFQM:";
 choices[21]= new Array();
 choices[21][0] = "Liderazgo";
 choices[21][1] = "Gesti&oacute;n de recursos humanos";
 choices[21][2] = "Pol&iacute;ticas y estrategias";
 choices[21][3] = "Satisfacci&oacute;n del cliente";
 answers[21] = choices[21][3];
 units[21] = "92";
 comments[21] = "Id Pregunta: 2467. NULL";


//  Id pregunta: 2474 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Para cada proyecto se debe seleccionar el modelo de ciclo de vida que sea m&aacute;s apropiado:";
 choices[22]= new Array();
 choices[22][0] = "Falso";
 choices[22][1] = "Cierto";
 choices[22][2] = "S&oacute;lo si es necesario evaluar los riesgos";
 choices[22][3] = "S&oacute;lo si se elige METRICA ";
 answers[22] = choices[22][1];
 units[22] = "76";
 comments[22] = "Id Pregunta: 2474. ";


//  Id pregunta: 2480 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Relativo al software, &iquest;qu&eacute; es una m&eacute;trica?:";
 choices[23]= new Array();
 choices[23][0] = "Aquellos elementos externos al usuario, relativos al comportamiento actual del software y a su facilidad de cambio";
 choices[23][1] = "Medidas cuantitativas del grado que se da al software desde el punto de vista de un atributo";
 choices[23][2] = "Son aquellos elementos relativos a la forma y estructura de programas, datos y documentos";
 choices[23][3] = "Los criterios para calificar al software";
 answers[23] = choices[23][1];
 units[23] = "88";
 comments[23] = "Id Pregunta: 2480. ";


//  Id pregunta: 2500 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Si se usa la t&eacute;cnica McCabe se puede valorar:";
 choices[24]= new Array();
 choices[24][0] = "Las aristas de un grafo";
 choices[24][1] = "El n&uacute;mero de regiones cerradas de un grafo";
 choices[24][2] = "Los nodos desconectados de un grafo";
 choices[24][3] = "No tiene ninguna relaci&oacute;n con grafos";
 answers[24] = choices[24][1];
 units[24] = "88";
 comments[24] = "Id Pregunta: 2500. NULL";


//  Id pregunta: 2522 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  &iquest;Cu&aacute;l de los siguientes t&eacute;rminos no se asocia con una forma de codificar im&aacute;genes digitales?:";
 choices[25]= new Array();
 choices[25][0] = "Raster";
 choices[25][1] = "Vectorial";
 choices[25][2] = "Bitmap";
 choices[25][3] = "Multiplex";
 answers[25] = choices[25][3];
 units[25] = "93";
 comments[25] = "Id Pregunta: 2522. NULL";


//  Id pregunta: 2555 AÃ±o de creación de pregunta: 2004-01-01
 questions[26]= "27)  &iquest;Cu&aacute;ntos niveles tiene el CMMi?:";
 choices[26]= new Array();
 choices[26][0] = "3";
 choices[26][1] = "4";
 choices[26][2] = "5";
 choices[26][3] = "6";
 answers[26] = choices[26][2];
 units[26] = "27";
 comments[26] = "Id Pregunta: 2555. NULL";


//  Id pregunta: 2570 AÃ±o de creación de pregunta: 2003-01-01
 questions[27]= "28)  El despliegue detallado de recursos para alcanzar los objetivos fijados en los planes estrat&eacute;gicos es funci&oacute;n de ";
 choices[27]= new Array();
 choices[27][0] = "la planificaci&oacute;n operativa";
 choices[27][1] = "el control anal&iacute;tico del gasto";
 choices[27][2] = "la planificaci&oacute;n estrat&eacute;gica";
 choices[27][3] = "la planificaci&oacute;n t&aacute;ctica";
 answers[27] = choices[27][0];
 units[27] = "77";
 comments[27] = "Id Pregunta: 2570. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 2572 AÃ±o de creación de pregunta: 2004-01-01
 questions[28]= "29)  Los factores de calidad desde el punto de vista de la explotaci&oacute;n, seg&uacute;n McCall son los siguientes:";
 choices[28]= new Array();
 choices[28][0] = "Usabilidad, Eficiencia y Fiabilidad";
 choices[28][1] = "Mantenibilidad, Verificabilidad y Flexibilidad";
 choices[28][2] = "Usabilidad, Seguridad, Eficiencia, Correccion y Fiabilidad";
 choices[28][3] = "Usabilidad, Mantenibilidad, Flexibilidad y Correcci&oacute;n";
 answers[28] = choices[28][2];
 units[28] = "87,88,92";
 comments[28] = "Id Pregunta: 2572. ";


//  Id pregunta: 2573 AÃ±o de creación de pregunta: 2004-01-01
 questions[29]= "30)  En la calidad del Software basandonos en el coste de implantaci&oacute;n, la Teor&iacute;a de la Productividad dice:";
 choices[29]= new Array();
 choices[29][0] = "Un producto de calidad es mas caro de producir; el coste aumenta exponencialmente con el aumento de la calidad";
 choices[29][1] = "Un producto de calidad es mas barato de producir; el coste disminuye exponencialmente cuando disminuye la calidad";
 choices[29][2] = "Un producto de calidad es mas barato de producir; el coste disminuye exponencialmente con el aumento de la calidad";
 choices[29][3] = "Un producto de calidad es mas barato de producir; el coste aumenta exponencialmente con el aumento de la calidad";
 answers[29] = choices[29][2];
 units[29] = "87,88,92";
 comments[29] = "Id Pregunta: 2573. ";


//  Id pregunta: 2593 AÃ±o de creación de pregunta: 2003-01-01
 questions[30]= "31)  En METRICA versi&oacute;n 3, &iquest;en qu&eacute; etapa del proceso de Desarrollo de Sistemas de Informaci&oacute;n se aborda el establecimiento de los requisitos de un sistema?:";
 choices[30]= new Array();
 choices[30][0] = "Estudio de Viabilidad del Sistema (EVS).";
 choices[30][1] = "An&aacute;lisis del Sistema de Informaci&oacute;n (ASI).";
 choices[30][2] = "Dise&ntilde;o del Sistema de Informaci&oacute;n (DSI).";
 choices[30][3] = "Construcci&oacute;n del Sistema de Informaci&oacute;n (CSI).";
 answers[30] = choices[30][1];
 units[30] = "86";
 comments[30] = "Id Pregunta: 2593. Junta Andaluc&iacute;a";


//  Id pregunta: 2610 AÃ±o de creación de pregunta: 2003-01-01
 questions[31]= "32)  &iquest;C&uacute;al de las siguientes afirmaciones sobre el Modelo de Ciclo de Vida en Espiral puede considerarse una ventaja del mismo?";
 choices[31]= new Array();
 choices[31][0] = "Su rango de opciones acomoda las buenas caracter&iacute;sticas de los dem&aacute;s modelos de desarrollo de software, mientras su procedimiento dirigido por el riesgo no evita muchas de sus dificultades";
 choices[31][1] = "Ajusta su aplicabilidad para el caso de software contratado";
 choices[31][2] = "Independencia de la experiencia en la evaluaci&oacute;n de riesgos";
 choices[31][3] = "Es adecuado para software propio pero no se adapta bien al software contratado";
 answers[31] = choices[31][3];
 units[31] = "76";
 comments[31] = "Id Pregunta: 2610. ";


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


//  Id pregunta: 2679 AÃ±o de creación de pregunta: 2003-01-01
 questions[33]= "34)  Gesti&oacute;n de documentos y gesti&oacute;n de contenidos:";
 choices[33]= new Array();
 choices[33][0] = "Son la misma cosa.";
 choices[33][1] = "S&oacute;lo se diferencian en la tecnolog&iacute;a utilizada.";
 choices[33][2] = "En la gesti&oacute;n de documentos se suele presentar el documento en su formato original, mientras que en la gesti&oacute;n de contenidos se orienta hacia la creaci&oacute;n y edici&oacute;n din&aacute;mica de p&aacute;ginas.";
 choices[33][3] = "La gesti&oacute;n de contenidos es m&aacute;s reciente y suele estar enfocada hacia flujos de trabajo.";
 answers[33] = choices[33][2];
 units[33] = "95";
 comments[33] = "Id Pregunta: 2679. NULL";


//  Id pregunta: 2735 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  Un buen analista debe exhibir los siguientes rasgos de car&aacute;cter";
 choices[34]= new Array();
 choices[34][0] = "Capacidad de captaci&oacute;n de los problemas del entorno de usuario";
 choices[34][1] = "Capacidad de s&iacute;ntesis de los problemas";
 choices[34][2] = "Capacidad de comprensi&oacute;n de conceptos abstractos, reorganizaci&oacute;n en apartados l&oacute;gicos y s&iacute;ntesis de soluciones para cada apartado";
 choices[34][3] = "Todas las anteriores";
 answers[34] = choices[34][3];
 units[34] = "78";
 comments[34] = "Id Pregunta: 2735. ";


//  Id pregunta: 2793 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  En la planificaci&oacute;n de SI, qu&eacute; producto de los siguientes no est&aacute; contemplado en M&eacute;trica V3";
 choices[35]= new Array();
 choices[35][0] = "Plan de proyectos";
 choices[35][1] = "Modelo de informaci&oacute;n";
 choices[35][2] = "Modelo de Sistemas de informaci&oacute;n";
 choices[35][3] = "Modelo de arquitectura";
 answers[35] = choices[35][3];
 units[35] = "86";
 comments[35] = "Id Pregunta: 2793. NULL";


//  Id pregunta: 2798 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  A qu&eacute; tipo de diagrama, seg&uacute;n M&eacute;trica v3, corresponde la siguiente definici&oacute;n: &quot;Es un tipo de diagrama cuyo objetivo es describir el comportamiento din&aacute;mico del sistema de informaci&oacute;n mostrando c&oacute;mo interact&uacute;an los objetos entre s&iacute;&quot;";
 choices[36]= new Array();
 choices[36][0] = "Diagrama de colaboraci&oacute;n";
 choices[36][1] = "Diagrama de paquetes";
 choices[36][2] = "Diagrama din&aacute;mico";
 choices[36][3] = "Diagrama de transici&oacute;n de Estados";
 answers[36] = choices[36][0];
 units[36] = "86";
 comments[36] = "Id Pregunta: 2798. NULL";


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


//  Id pregunta: 2853 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  Una Base de Datos documental ";
 choices[38]= new Array();
 choices[38][0] = "presenta un modelo de recuperaci&oacute;n de informaci&oacute;n probabil&iacute;stica";
 choices[38][1] = "presenta un &iacute;ndice de incertidumbre en la respuesta";
 choices[38][2] = "las dos anteriores";
 choices[38][3] = "ninguna de las anteriores";
 answers[38] = choices[38][2];
 units[38] = "95,96";
 comments[38] = "Id Pregunta: 2853. ";


//  Id pregunta: 2873 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  &iquest;C&oacute;mo se llama la norma europea que recoge las especificaciones para la gesti&oacute;n de documentos electr&oacute;nicos de archivo?";
 choices[39]= new Array();
 choices[39][0] = "MoReq";
 choices[39][1] = "IDABC";
 choices[39][2] = "ISAD(G)";
 choices[39][3] = "EDMS";
 answers[39] = choices[39][0];
 units[39] = "95";
 comments[39] = "Id Pregunta: 2873. NULL";


//  Id pregunta: 4291 AÃ±o de creación de pregunta: 2007-01-01
 questions[40]= "41)  Un Jefe de Proyecto ha elaborado un borrador del Plan de Gesti&oacute;n de un proyecto de software. &iquest;Cu&aacute;les de los siguientes elementos deben ser tratados en ese plan? I) Calendario. II) Presupuesto. III) Requisitos del software. IV) Personal.";
 choices[40]= new Array();
 choices[40][0] = "I, III y IV.";
 choices[40][1] = "I, II y III.";
 choices[40][2] = "I, II y IV.";
 choices[40][3] = "I, II, III y IV.";
 answers[40] = choices[40][2];
 units[40] = "77";
 comments[40] = "Id Pregunta: 4291. ";


//  Id pregunta: 4394 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  El repositorio com&uacute;n:";
 choices[41]= new Array();
 choices[41][0] = "Agrupa un conjunto de herramientas de desarrollo.";
 choices[41][1] = "Forma un banco de trabajo.";
 choices[41][2] = "Organiza un entorno de desarrollo.";
 choices[41][3] = "Es un manejador de versiones.";
 answers[41] = choices[41][2];
 units[41] = "87";
 comments[41] = "Id Pregunta: 4394. NULL";


//  Id pregunta: 4500 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  El conjunto de procedimientos administrativos y t&eacute;cnicos que garantizan que todos los participantes del desarrollo de un sistema disponen de la versi&oacute;n adecuada de los productos que manejan, recibe el nombre de:";
 choices[42]= new Array();
 choices[42][0] = "Metodolog&iacute;a de desarrollo.";
 choices[42][1] = "Gesti&oacute;n de Ia configuraci&oacute;n.";
 choices[42][2] = "An&aacute;lisis de versiones.";
 choices[42][3] = "Diagrama de estructura de Ia informaci&oacute;n.";
 answers[42] = choices[42][1];
 units[42] = "76";
 comments[42] = "Id Pregunta: 4500. ";


//  Id pregunta: 4609 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  Indicar en cual de los siguientes niveles CMM se define como &aacute;rea clave de proceso Ia gesti&oacute;n de configuraci&oacute;n de software";
 choices[43]= new Array();
 choices[43][0] = "repetible";
 choices[43][1] = "definido";
 choices[43][2] = "gestionado";
 choices[43][3] = "optimizado";
 answers[43] = choices[43][0];
 units[43] = "98";
 comments[43] = "Id Pregunta: 4609. NULL";


//  Id pregunta: 4762 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  Indicar la afirmaci&oacute;n incorrecta:";
 choices[44]= new Array();
 choices[44][0] = "COBIT fue desarrollado por la Information Systems Audit and Control Association (ISACA) y el IT Governance Institute (ITGI)";
 choices[44][1] = "COBIT fue lanzado en 1991";
 choices[44][2] = "COBIT se aplica a los sistemas de informaci&oacute;n de toda la empresa, incluyendo las computadoras personales, mini computadoras y ambientes distribuidos";
 choices[44][3] = "COBIT esta alineado con est&aacute;ndares y regulaciones &quot;de facto&quot;";
 answers[44] = choices[44][1];
 units[44] = "98";
 comments[44] = "Id Pregunta: 4762. NULL";


//  Id pregunta: 4929 AÃ±o de creación de pregunta: 2003-01-01
 questions[45]= "46)  &Aacute;lvaro est&aacute; iniciando las tareas de planificaci&oacute;n de un nuevo proyecto software, y ha efectuado unos c&aacute;lculos previos de &ldquo;puntos de funci&oacute;n&rdquo;. La t&eacute;cnica de Puntos de Funci&oacute;n es una t&eacute;cnica indirecta para determinar:";
 choices[45]= new Array();
 choices[45][0] = "La calidad de una aplicaci&oacute;n software y la tasa de errores prevista.";
 choices[45][1] = "La dimensi&oacute;n de un proyecto inform&aacute;tico y su probable coste.";
 choices[45][2] = "La usabilidad de un interfaz y la previsi&oacute;n de errores de usuario.";
 choices[45][3] = "La seguridad de una aplicaci&oacute;n y su riesgo de intrusi&oacute;n.";
 answers[45] = choices[45][1];
 units[45] = "87";
 comments[45] = "Id Pregunta: 4929. Examen TIC B 2007";


//  Id pregunta: 4947 AÃ±o de creación de pregunta: 2003-01-01
 questions[46]= "47)  Despu&eacute;s de un cambio en un sistema de informaci&oacute;n, &iquest;qu&eacute; pruebas es necesario realizar para comprobar que los cambios realizados no han afectado a otros componentes no modificados?:";
 choices[46]= new Array();
 choices[46][0] = "Pruebas de implantaci&oacute;n.";
 choices[46][1] = "Pruebas de sostenibilidad.";
 choices[46][2] = "Pruebas de regresi&oacute;n.";
 choices[46][3] = "Pruebas del sistema.";
 answers[46] = choices[46][2];
 units[46] = "87";
 comments[46] = "Id Pregunta: 4947. Examen TIC B 2007";


//  Id pregunta: 5135 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  &iquest;Cu&aacute;l de los siguientes modelos de ciclo de vida no permite aprovechar las ventajas de la tecnolog&iacute;a de objetos?";
 choices[47]= new Array();
 choices[47][0] = "Modelo de agrupamiento.";
 choices[47][1] = "Modelo de cascada";
 choices[47][2] = "Modelo fuente";
 choices[47][3] = "Modelo remolino.";
 answers[47] = choices[47][1];
 units[47] = "76";
 comments[47] = "Id Pregunta: 5135. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5137 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  &iquest;Qu&eacute; es un diagrama de Gantt?";
 choices[48]= new Array();
 choices[48][0] = "Es un diagrama de barras en forma de tabla donde se hace una referencia cruzada entre las tareas y los tiempos de duraci&oacute;n de las mismas.";
 choices[48][1] = "Es un cuadro o tabla formado por dos columnas, en la primera se se&ntilde;alan las actividades y en la segunda se indican las fechas de finalizaci&oacute;n.";
 choices[48][2] = "Partiendo de la descomposici&oacute;n de un proyecto en actividades, estas ocurren entre dos sucesos. Se representa mediante un grafo en donde las actividades se reflejan mediante arcos y los sucesos mediante v&eacute;rtices.";
 choices[48][3] = "Es una matriz de referencias cruzadas entre los miembros del equipo de proyecto y su dedicaci&oacute;n al proyecto.";
 answers[48] = choices[48][0];
 units[48] = "77";
 comments[48] = "Id Pregunta: 5137. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5180 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  &iquest;Cu&aacute;l no es una metodolog&iacute;a de Desarrollo Orientada a Objetos?";
 choices[49]= new Array();
 choices[49][0] = "Merise";
 choices[49][1] = "Booch";
 choices[49][2] = "OMT";
 choices[49][3] = "RUP";
 answers[49] = choices[49][0];
 units[49] = "79";
 comments[49] = "Id Pregunta: 5180. ";


//  Id pregunta: 5183 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  En el modelo E/R, las relaciones d&eacute;biles:";
 choices[50]= new Array();
 choices[50][0] = "Relacionan una entidad fuerte con dos o m&aacute;s entidades, fuertes o d&eacute;biles";
 choices[50][1] = "Relacionan dos entidades d&eacute;biles";
 choices[50][2] = "Relacionan una entidad d&eacute;bil con una fuerte";
 choices[50][3] = "Ninguna de las anteriores";
 answers[50] = choices[50][2];
 units[50] = "80";
 comments[50] = "Id Pregunta: 5183. ";


//  Id pregunta: 5220 AÃ±o de creación de pregunta: 2007-01-01
 questions[51]= "52)  La tarea &quot;Diagn&oacute;stico del Sistema Actual&quot; a qu&eacute; actividad del procesos Planificaci&oacute;n de Sistemas de Informaci&oacute;n pertenece";
 choices[51]= new Array();
 choices[51][0] = "Estudio de la informaci&oacute;n relevante";
 choices[51][1] = "Estudio de los Sistemas de Informaci&oacute;n Actuales";
 choices[51][2] = "Identificaci&oacute;n de Requisitos";
 choices[51][3] = "Dise&ntilde;o del modelo de Sistemas de Informaci&oacute;n";
 answers[51] = choices[51][3];
 units[51] = "86";
 comments[51] = "Id Pregunta: 5220. NULL";


//  Id pregunta: 5228 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  El m&aacute;ximo n&uacute;mero de fases permitidas en el modelo de ciclo de vida en cascada es:";
 choices[52]= new Array();
 choices[52][0] = "5";
 choices[52][1] = "7";
 choices[52][2] = "9";
 choices[52][3] = "En realidad, el n&uacute;mero de fases es irrelevante, lo  que caracteriza al modelo es la secuencialidad entre &eacute;stas.";
 answers[52] = choices[52][3];
 units[52] = "76";
 comments[52] = "Id Pregunta: 5228. ";


//  Id pregunta: 5231 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  El modelo de ciclo de vida en espiral:";
 choices[53]= new Array();
 choices[53][0] = "Es el que mejor se adapta para ser aplicado al software contratado";
 choices[53][1] = "Permite incorporar objetivos de calidad en el desarrollo de productos software";
 choices[53][2] = "No es especialmente adecuado para la temprana eliminaci&oacute;n de errores y alternativas poco atractivas";
 choices[53][3] = "Todas las anteriores son correctas";
 answers[53] = choices[53][1];
 units[53] = "76";
 comments[53] = "Id Pregunta: 5231. ";


//  Id pregunta: 5232 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n al modelo de ciclo de vida en espiral:";
 choices[54]= new Array();
 choices[54][0] = "Fue propuesto por Boehm para solventar los  principales problemas de los modelos tradicionales";
 choices[54][1] = "Considera diferentes alternativas para alcanzar los objetivos del proyecto";
 choices[54][2] = "La dimensi&oacute;n radial indica los costes de desarrollo acumulativo";
 choices[54][3] = "Todas las anteriores son correctas";
 answers[54] = choices[54][3];
 units[54] = "76";
 comments[54] = "Id Pregunta: 5232. ";


//  Id pregunta: 5238 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  Sobre la Programaci&oacute;n Extrema:";
 choices[55]= new Array();
 choices[55][0] = "Los proyectos que usan esta metodolog&iacute;a comienzan obteniendo Historias de usuario(User Stories) y desarrollando soluciones (Spike solutions) sobre una arquitectura general de la soluci&oacute;n (Architectural Spike)";
 choices[55][1] = "A partir de aqu&iacute;, se mantiene una reuni&oacute;n a la que acudir&aacute;n clientes/usuarios, desarrolladores y gestores para acordar entre todos lo que se debe hacer";
 choices[55][2] = "Las iteraciones sobre lo que se tiene que hacer generar&aacute;n pruebas que generar&aacute;n m&aacute;s iteraciones sobre el sistema.";
 choices[55][3] = "Todas las anteriores son correctas";
 answers[55] = choices[55][3];
 units[55] = "76";
 comments[55] = "Id Pregunta: 5238. ";


//  Id pregunta: 5242 AÃ±o de creación de pregunta: 2003-01-01
 questions[56]= "57)  Si una vez determinadas las fortalezas y debilidades, as&iacute; como las amenazas y oportunidades, se define una estrategia defensiva:";
 choices[56]= new Array();
 choices[56][0] = "Significa que la empresa est&aacute; preparada para enfrentarse a las amenazas";
 choices[56][1] = "Significa que la empresa se enfrenta a las amenazas externas sin las fortalezas internas necesarias";
 choices[56][2] = "Significa que la empresa cuenta con las fortalezas internas y adem&aacute;s se le presentan oportunidades externas";
 choices[56][3] = "Significa que a la empresa se le presentan oportunidades pero carece de preparaci&oacute;n para afrontarlas";
 answers[56] = choices[56][0];
 units[56] = "77";
 comments[56] = "Id Pregunta: 5242. ";


//  Id pregunta: 5256 AÃ±o de creación de pregunta: 2003-01-01
 questions[57]= "58)  En relaci&oacute;n a las m&eacute;tricas de calidad del Software NO es correcto afirmar:";
 choices[57]= new Array();
 choices[57][0] = "Las m&eacute;tricas  se pueden utilizar para evaluar en qu&eacute; grado el software posee las distintas caracter&iacute;sticas que definen la calidad de un producto software.";
 choices[57][1] = "Las m&eacute;tricas se apoyan en 2 tipos de atributos, internos y externos.";
 choices[57][2] = "Los atributos internos son aquellos que se pueden medir en t&eacute;rminos de la propia entidad independientemente de su comportamiento.";
 choices[57][3] = "Las m&eacute;tricas se pueden aplicar s&oacute;lo a una etapa del ciclo de vida del desarrollo del software.";
 answers[57] = choices[57][3];
 units[57] = "88";
 comments[57] = "Id Pregunta: 5256. NULL";


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


//  Id pregunta: 5520 AÃ±o de creación de pregunta: 2003-01-01
 questions[59]= "60)  Indicar la respuesta verdadera";
 choices[59]= new Array();
 choices[59][0] = "Las im&aacute;genes r&aacute;ster constan de matrices de p&iacute;xeles que se ordenan en una relaci&oacute;n predefinida de columnas y filas";
 choices[59][1] = "Las im&aacute;genes vectoriales se componen de formas matem&aacute;ticas codificadas como f&oacute;rmulas matem&aacute;ticas";
 choices[59][2] = "Las respuestas a) y b) son verdaderas";
 choices[59][3] = "Las respuestas a) y b) son falsas";
 answers[59] = choices[59][2];
 units[59] = "93";
 comments[59] = "Id Pregunta: 5520. NULL";


//  Id pregunta: 5809 AÃ±o de creación de pregunta: 2009-01-01
 questions[60]= "61)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto de UML?:";
 choices[60]= new Array();
 choices[60][0] = "Los paquetes pueden contener clases, objetos, relaciones, componentes, nodos y diagramas asociados.";
 choices[60][1] = "Los diagramas de clases expresan la estructura est&aacute;tica de un sistema, con las clases, los atributos y las operaciones.";
 choices[60][2] = "Las relaciones entre los casos de uso son de subordinaci&oacute;n, dependencia, igualdad y superioridad.";
 choices[60][3] = "Los nodos del diagrama de despliegue se representan con un cubo, y las l&iacute;neas que los unen simbolizan los soportes de las comunicaciones.";
 answers[60] = choices[60][2];
 units[60] = "84";
 comments[60] = "Id Pregunta: 5809. NULL";


//  Id pregunta: 5837 AÃ±o de creación de pregunta: 2009-01-01
 questions[61]= "62)  &iquest;Cu&aacute;l de las afirmaciones siguientes NO es uno de los principios incluidos en el &quot;Manifiesto &Aacute;gil&quot; (Manifiesto por elDesarrollo &Aacute;gil de Software)?";
 choices[61]= new Array();
 choices[61][0] = "Aceptamos requisitos cambiantes, excepto en etapas avanzadas";
 choices[61][1] = "Entregamos software frecuentemente, con una periodicidad desde un par de semanas a un par de meses, con preferencia por los periodos m&aacute;s cortos posibles";
 choices[61][2] = "Las mejores arquitecturas, requisitos y dise&ntilde;os surgen de equipos que se auto organizan";
 choices[61][3] = "El m&eacute;todo m&aacute;s eficiente y efectivo de comunicar la informaci&oacute;n a un equipo de desarrollo y entre los miembros del mismo es la conversaci&oacute;n cara a cara";
 answers[61] = choices[61][0];
 units[61] = "79";
 comments[61] = "Id Pregunta: 5837. MAP 2008 A1";


//  Id pregunta: 5847 AÃ±o de creación de pregunta: 2009-01-01
 questions[62]= "63)  En la t&eacute;cnica de estimaci&oacute;n de puntos funci&oacute;n, &iquest;cu&aacute;les de los siguientes tipos de procesos elementales se tienen en cuenta?";
 choices[62]= new Array();
 choices[62][0] = "Procesos elementales de datos";
 choices[62][1] = "Procesos elementales de informaci&oacute;n";
 choices[62][2] = "Procesos elementales transaccionales";
 choices[62][3] = "La A y la B son ciertas";
 answers[62] = choices[62][3];
 units[62] = "89";
 comments[62] = "Id Pregunta: 5847. NULL";


//  Id pregunta: 6248 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[63]= new Array();
 choices[63][0] = "La clase DataRow representa una fila de datos en un DataTable";
 choices[63][1] = "La clase DataRow representa una cach&eacute; de memoria interna de datos";
 choices[63][2] = "La clase DataRow representa una tabla de datos en memoria";
 choices[63][3] = "La clase DataRow representa el esquema de una columna en una DataTable";
 answers[63] = choices[63][0];
 units[63] = "82";
 comments[63] = "Id Pregunta: 6248. TICB-2009, bloque desarrollo";


//  Id pregunta: 6249 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta, de acuerdo con M&eacute;trica 3?";
 choices[64]= new Array();
 choices[64][0] = "El objetivo de la gesti&oacute;n de la configuraci&oacute;n es mantener la integridad de los productos que se obtienen a lo largo del desarrollo de los sistemas de informaci&oacute;n, garantizando que no se realicen cambios";
 choices[64][1] = "Ejecutables y c&oacute;digo fuente son elementos de configuraci&oacute;n software pero no lo son las especificaciones de requisitos";
 choices[64][2] = "La gesti&oacute;n de configuraci&oacute;n se realiza durante todas las actividades asociadas al desarrollo del sistema, y contin&uacute;a registrando los cambios hasta que &eacute;ste deja de utilizarse";
 choices[64][3] = "La gesti&oacute;n de configuraci&oacute;n aporta informaci&oacute;n precisa para valorar el impacto de los cambios en el mantenimiento correctivo. La gesti&oacute;n de configuraci&oacute;n no contempla el mantenimiento evolutivo";
 answers[64] = choices[64][2];
 units[64] = "86";
 comments[64] = "Id Pregunta: 6249. TICB-2009, bloque desarrollo";


//  Id pregunta: 6283 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  &iquest;Qu&eacute; &oacute;rganos no suelen ser necesarios a la hora de realizar una planificaci&oacute;n y direcci&oacute;n estrat&eacute;gica?";
 choices[65]= new Array();
 choices[65][0] = "Los proveedores";
 choices[65][1] = "El equipo de proyecto";
 choices[65][2] = "El comit&eacute; de direcci&oacute;n";
 choices[65][3] = "Un grupo de usuarios";
 answers[65] = choices[65][0];
 units[65] = "77";
 comments[65] = "Id Pregunta: 6283. ";


//  Id pregunta: 6297 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  &iquest;Qu&eacute; se entiende por l&iacute;nea base en el control de versiones en el an&aacute;lisis de un sistema de informaci&oacute;n?";
 choices[66]= new Array();
 choices[66][0] = "Punto inicial de partida de un sistema de informaci&oacute;n, en el cual no hay nada desarrollado";
 choices[66][1] = "Especificaci&oacute;n o producto que ha sido revisado formalmente. Sirve de base para un desarrollo posterior";
 choices[66][2] = "Documentaci&oacute;n del sistema de informaci&oacute;n almacenada en un dispositivo de almacenamiento seguro";
 choices[66][3] = "Ninguna de las anteriores es cierta";
 answers[66] = choices[66][1];
 units[66] = "78";
 comments[66] = "Id Pregunta: 6297. ";


//  Id pregunta: 6439 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  El paso a tablas de una relaci&oacute;n ternaria ocasiona:";
 choices[67]= new Array();
 choices[67][0] = "Una tabla para la relaci&oacute;n cuya clave es la concatenaci&oacute;n de las clasves de las entidades que participan en la relaci&oacute;n.";
 choices[67][1] = "Tres tablas, una para cada posible combinaci&oacute;n.";
 choices[67][2] = "Dos tablas son suficientes para mantener toda la informaci&oacute;n.";
 choices[67][3] = "No se permiten relaciones ternarias en el modelo E/R.";
 answers[67] = choices[67][0];
 units[67] = "80";
 comments[67] = "Id Pregunta: 6439. NULL";


//  Id pregunta: 6526 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)  Un error conocido es";
 choices[68]= new Array();
 choices[68][0] = "Un problema para el que se ha identificado una soluci&oacute;n provisional o permanente, y tambi&eacute;n se conoce la causa";
 choices[68][1] = "Un problema para el que se ha identificado una soluci&oacute;n provisional o permanente, pero no se conoce la causa";
 choices[68][2] = "Un problema para el que se no se ha identificado a&uacute;n una soluci&oacute;n pero s&iacute; se conoce la causa";
 choices[68][3] = "Todas las respuestas anteriores son falsas";
 answers[68] = choices[68][0];
 units[68] = "98";
 comments[68] = "Id Pregunta: 6526. NULL";


//  Id pregunta: 6536 AÃ±o de creación de pregunta: 2010-01-01
 questions[69]= "70)  La gu&iacute;a de servicios ISO 9004 sigue un enfoque basado en procesos, como";
 choices[69]= new Array();
 choices[69][0] = "Responsabilidad de la direcci&oacute;n";
 choices[69][1] = "Realizaci&oacute;n del producto";
 choices[69][2] = "Medici&oacute;n, an&aacute;lisis y mejora";
 choices[69][3] = "Todas las respuestas anteriores son correctas";
 answers[69] = choices[69][3];
 units[69] = "92";
 comments[69] = "Id Pregunta: 6536. NULL";


//  Id pregunta: 6609 AÃ±o de creación de pregunta: 2010-01-01
 questions[70]= "71)  En el An&aacute;lisis Estructurado, las entidades externas";
 choices[70]= new Array();
 choices[70][0] = "Definen el Interfaz del Usuario";
 choices[70][1] = "Son parte del sistema";
 choices[70][2] = "Aparecen primero en el Diagrama de Contexto y se van heredando en las explosiones de los DFD's";
 choices[70][3] = "Generan y consumen informaci&oacute;n del sistema";
 answers[70] = choices[70][3];
 units[70] = "81";
 comments[70] = "Id Pregunta: 6609. NULL";


//  Id pregunta: 6621 AÃ±o de creación de pregunta: 2010-01-01
 questions[71]= "72)  &iquest;Cu&aacute;l de los siguientes elementos es una T&eacute;cnica y no una Pr&aacute;ctica seg&uacute;n M&eacute;trica v3?";
 choices[71]= new Array();
 choices[71][0] = "JAD (Join Application Design)";
 choices[71][1] = "An&aacute;lisis de Impacto";
 choices[71][2] = "Prototipado";
 choices[71][3] = "Normalizaci&oacute;n";
 answers[71] = choices[71][3];
 units[71] = "86";
 comments[71] = "Id Pregunta: 6621. NULL";


//  Id pregunta: 6642 AÃ±o de creación de pregunta: 2010-01-01
 questions[72]= "73)  En un sistema Orientado a Objetos, cu&aacute;l de las siguientes NO es una m&eacute;trica para evaluar la calidad del dise&ntilde;o?";
 choices[72]= new Array();
 choices[72][0] = "M&eacute;tricas de Booch";
 choices[72][1] = "M&eacute;tricas MDOO";
 choices[72][2] = "M&eacute;tricas de Lorenz y Kidd";
 choices[72][3] = "M&eacute;tricas de Chidamber y Kemerer";
 answers[72] = choices[72][0];
 units[72] = "88";
 comments[72] = "Id Pregunta: 6642. NULL";


//  Id pregunta: 7347 AÃ±o de creación de pregunta: 2010-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l de los siguientes es un portal de gesti&oacute;n de contenidos de c&oacute;digo abierto?";
 choices[73]= new Array();
 choices[73][0] = "MOSS";
 choices[73][1] = "Liferay";
 choices[73][2] = "Websphere Portal";
 choices[73][3] = "Open Text";
 answers[73] = choices[73][1];
 units[73] = "95";
 comments[73] = "Id Pregunta: 7347. NULL";


//  Id pregunta: 7774 AÃ±o de creación de pregunta: 2010-01-01
 questions[74]= "75)   Indique cu&aacute;l de las siguientes alternativas corresponde a los procesos principales de que consta la metodolog&iacute;a M&Eacute;TRICA v. 3:";
 choices[74]= new Array();
 choices[74][0] = " Planificaci&oacute;n de Sistemas de Informaci&oacute;n, Desarrollo de Sistemas de Informaci&oacute;n y Mantenimiento de Sistemas de Informaci&oacute;n.";
 choices[74][1] = " Planificaci&oacute;n de Sistemas de Informaci&oacute;n, Estudio de viabilidad de Sistemas de Informaci&oacute;n, Desarrollo de Sistemas de Informaci&oacute;n e Implantaci&oacute;n de Sistemas de Informaci&oacute;n.";
 choices[74][2] = " Planificaci&oacute;n de Sistemas de Informaci&oacute;n, An&aacute;lisis de Sistemas de Informaci&oacute;n, Construcci&oacute;n e Implantaci&oacute;n de Sistemas de Informaci&oacute;n y Mantenimiento de Sistemas de Informaci&oacute;n.";
 choices[74][3] = " Planificaci&oacute;n de Sistemas de Informaci&oacute;n, Desarrollo de Sistemas de Informaci&oacute;n e Implantaci&oacute;n de Sistemas de Informaci&oacute;n.";
 answers[74] = choices[74][0];
 units[74] = "86";
 comments[74] = "Id Pregunta: 7774. Map 2005";


//  Id pregunta: 8653 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  Seg&uacute;n M&eacute;trica v3, &iquest;cu&aacute;l de las siguientes es una prueba perteneciente a las pruebas del sistema?";
 choices[75]= new Array();
 choices[75][0] = "Pruebas globales.";
 choices[75][1] = "Pruebas Integradas.";
 choices[75][2] = "Pruebas funcionales.";
 choices[75][3] = "Pruebas unitarias.";
 answers[75] = choices[75][2];
 units[75] = "86";
 comments[75] = "Id Pregunta: 8653. Examen TIC A2 2010 interna";


//  Id pregunta: 8759 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  &iquest;Cu&aacute;l de los siguientes NO es un lenguaje orientado a objetos?";
 choices[76]= new Array();
 choices[76][0] = "Java.";
 choices[76][1] = "C.";
 choices[76][2] = "Smalltalk.";
 choices[76][3] = "Ada.";
 answers[76] = choices[76][1];
 units[76] = "82, 84";
 comments[76] = "Id Pregunta: 8759. Examen TIC A2 2010 interna";


//  Id pregunta: 8885 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  &iquest;Cu&aacute;l de las siguientes no es una tecnolog&iacute;a de elementos fotosensibles?";
 choices[77]= new Array();
 choices[77][0] = "CCD";
 choices[77][1] = "PTN";
 choices[77][2] = "CIS";
 choices[77][3] = "CMOS";
 answers[77] = choices[77][1];
 units[77] = "93";
 comments[77] = "Id Pregunta: 8885. NULL";


//  Id pregunta: 8968 AÃ±o de creación de pregunta: 2011-01-01
 questions[78]= "79)  &iquest;Qu&eacute; patr&oacute;n de dise&ntilde;o pertenece a la clasificaci&oacute;n de Comportamiento?";
 choices[78]= new Array();
 choices[78][0] = "Singleton.";
 choices[78][1] = "Template Method.";
 choices[78][2] = "Session.";
 choices[78][3] = "Succesive Update.";
 answers[78] = choices[78][1];
 units[78] = "82,84";
 comments[78] = "Id Pregunta: 8968. ";


//  Id pregunta: 9442 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  El t&eacute;rmino formal que se emplea para indicar que los datos de un objeto solamente pueden ser manipulados a trav&eacute;s de m&eacute;todos definidos en su interfaz se conoce como:";
 choices[79]= new Array();
 choices[79][0] = "Polimorfismo.";
 choices[79][1] = "Abstracci&oacute;n.";
 choices[79][2] = "Encapsulaci&oacute;n.";
 choices[79][3] = "Persistencia.";
 answers[79] = choices[79][2];
 units[79] = "82";
 comments[79] = "Id Pregunta: 9442. Examen AGE TIC A1 2011";


//  Id pregunta: 9484 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  Seg&uacute;n Pressman, el proceso de obtenci&oacute;n de requisitos";
 choices[80]= new Array();
 choices[80][0] = "Es un proceso iterativo";
 choices[80][1] = "Es un proceso de tres fases";
 choices[80][2] = "Es un proceso de 10 fases";
 choices[80][3] = "Todas las anteriores son falsas";
 answers[80] = choices[80][0];
 units[80] = "78";
 comments[80] = "Id Pregunta: 9484. ";


//  Id pregunta: 9755 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  En M&eacute;trica v3, la actividad &quot;Establecimiento de requisitos de implantaci&oacute;n&quot; se lleva a cabo en:";
 choices[81]= new Array();
 choices[81][0] = "ASI";
 choices[81][1] = "DSI";
 choices[81][2] = "IAS";
 choices[81][3] = "ASI y DSI";
 answers[81] = choices[81][1];
 units[81] = "86";
 comments[81] = "Id Pregunta: 9755. Actividad DSI.11. El resto de actividades referentes a implantaci&oacute;n se llevan a cabo en IAS";


//  Id pregunta: 9948 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  En M&eacute;trica v3, para la tarea &quot;GPI 1.1, identificaci&oacute;n de elementos a desarrollar&quot;, el producto de salida espec&iacute;fico en orientaci&oacute;n a objeto es:";
 choices[82]= new Array();
 choices[82][0] = "Cat&aacute;logo de clases. ";
 choices[82][1] = "Cat&aacute;logo de entidades";
 choices[82][2] = "Cat&aacute;logo de miembros. ";
 choices[82][3] = "Cat&aacute;logo de interfaces.";
 answers[82] = choices[82][0];
 units[82] = "86";
 comments[82] = "Id Pregunta: 9948. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 9953 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  Dentro del perfil analista de M&eacute;trica v3 se agrupa uno de los siguientes participantes:";
 choices[83]= new Array();
 choices[83][0] = "Especialista en Comunicaciones";
 choices[83][1] = "Usuarios expertos";
 choices[83][2] = "T&eacute;cnicos de Comunicaciones. ";
 choices[83][3] = "Grupo de Aseguramiento de la Calidad";
 answers[83] = choices[83][3];
 units[83] = "86";
 comments[83] = "Id Pregunta: 9953. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 9964 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  En la plataforma .NET, &iquest;cu&aacute;l es el est&aacute;ndar que define como se declaran, usan y administran los tipos de datos en el Common Language Runtime (CLR) y que es una parte importante para que m&uacute;ltiples lenguajes sean soportados?";
 choices[84]= new Array();
 choices[84][0] = "System Data Type (SDT)";
 choices[84][1] = "Common Type System (CTS)";
 choices[84][2] = "Common Data Integration (CDI)";
 choices[84][3] = "Data Type Core (DTC)";
 answers[84] = choices[84][1];
 units[84] = "59,115";
 comments[84] = "Id Pregunta: 9964. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";


//  Id pregunta: 9981 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  &iquest;Con qu&eacute; siglas se identifica el Common Language Runtime de la plataforma .NET?";
 choices[85]= new Array();
 choices[85][0] = "CLRUN";
 choices[85][1] = "CLRNET";
 choices[85][2] = "COLR";
 choices[85][3] = "CLR";
 answers[85] = choices[85][3];
 units[85] = "59,115";
 comments[85] = "Id Pregunta: 9981. TIC A2, UPM, Examen 2010";


//  Id pregunta: 10632 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  La actividad &ldquo;Elaboraci&oacute;n del Modelo de Datos&rdquo; forma parte del proceso de M&eacute;trica v3:";
 choices[86]= new Array();
 choices[86][0] = "Estudio de Viabilidad del Sistema (EVS)";
 choices[86][1] = "Planificaci&oacute;n del Sistema de Informaci&oacute;n (PSI)";
 choices[86][2] = "An&aacute;lisis del Sistema de Informaci&oacute;n (ASI)";
 choices[86][3] = "Dise&ntilde;o del Sistema de Informaci&oacute;n (DSI)";
 answers[86] = choices[86][2];
 units[86] = "86";
 comments[86] = "Id Pregunta: 10632. ";


//  Id pregunta: 10840 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  En relaci&oacute;n a las pruebas de integridad de software, si hablamos de integraci&oacute;n tipo sandwich nos referimos a que:";
 choices[87]= new Array();
 choices[87][0] = "Los m&oacute;dulos se integran en grupos que constituyen una funcionalidad identificada.";
 choices[87][1] = "Se identifica el nivel de riesgo asociado a cada m&oacute;dulo, los de riesgo alto se integran primero y los de menor riesgo se integran m&aacute;s tarde.";
 choices[87][2] = "A medida que se integran los m&oacute;dulos, se realizan pruebas para capturar y corregir nuevos errores, es decir, empezando por los componentes que llaman a otros componentes.";
 choices[87][3] = "Primero se integran los m&oacute;dulos de alto nivel y de control y, despu&eacute;s, los m&oacute;dulos de bajo nivel. Los m&oacute;dulos intermedios se integran al final.";
 answers[87] = choices[87][3];
 units[87] = "0";
 comments[87] = "Id Pregunta: 10840. Examen GSI 2014";


//  Id pregunta: 10937 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  &iquest;Qu&eacute; nombre recibe, en el paradigma de orientaci&oacute;n a objetos, el principio de dise&ntilde;o que establece que las interfaces definidas deben tener una finalidad espec&iacute;fica?";
 choices[88]= new Array();
 choices[88][0] = "Principio abierto-cerrado.";
 choices[88][1] = "Principio de segregaci&oacute;n de interfaces.";
 choices[88][2] = "Principio de responsabilidad simple.";
 choices[88][3] = "Principio de sustituci&oacute;n.";
 answers[88] = choices[88][1];
 units[88] = "84";
 comments[88] = "Id Pregunta: 10937. TIC A1 AGE 2014";


//  Id pregunta: 10984 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  En M&eacute;trica 3, la utilizaci&oacute;n del modelo entidad relaci&oacute;n extendido se recomienda en los procesos de:";
 choices[89]= new Array();
 choices[89][0] = "An&aacute;lisis y Dise&ntilde;o.";
 choices[89][1] = "Solo en el An&aacute;lisis.";
 choices[89][2] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n, Estudio de Viabilidad y An&aacute;lisis.";
 choices[89][3] = "Solo en Planificaci&oacute;n de Sistemas de Informaci&oacute;n y Estudio de Viabilidad.";
 answers[89] = choices[89][2];
 units[89] = "86";
 comments[89] = "Id Pregunta: 10984. TIC A1 AGE 2014";


//  Id pregunta: 11063 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  &iquest;Cu&aacute;l es la definici&oacute;n de servicio seg&uacute;n ITIL?";
 choices[90]= new Array();
 choices[90][0] = "Medio para entregar valor a los clientes, facilitando los resultados que estos quieren conseguir sin asumir costes o riesgos espec&iacute;ficos";
 choices[90][1] = "Subdivisi&oacute;n de una organizaci&oacute;n, que est&aacute; especializada en realizar un tipo concreto de trabajo y tiene la responsabilidad de obtener resultados concretos";
 choices[90][2] = "Conjunto estructurado de actividades dise&ntilde;ado para cumplir objetivo concreto.";
 choices[90][3] = "Conjunto de responsabilidades, actividades y autorizaciones concedidas a una persona o equipo.";
 answers[90] = choices[90][0];
 units[90] = "98";
 comments[90] = "Id Pregunta: 11063. ";


//  Id pregunta: 11084 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest; Para que es usado el modelo RACI?";
 choices[91]= new Array();
 choices[91][0] = "Documentar los roles y las relaciones de las partes interesadas (stakeholders) en un proceso o actividad";
 choices[91][1] = "Definir requerimientos para un nuevo servicio o proceso";
 choices[91][2] = "Analizar el impacto en el negocio de una incidencia";
 choices[91][3] = "Crear un Cuadro de Mando que muestre el estado general de los servicios gestionados";
 answers[91] = choices[91][0];
 units[91] = "98";
 comments[91] = "Id Pregunta: 11084. ";


//  Id pregunta: 11156 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Seleccione la respuesta err&oacute;nea de los diagramas E/R:";
 choices[92]= new Array();
 choices[92][0] = "Los atributos multivalorados son aquellos que pueden contener m&aacute;s de un valor simult&aacute;neamente, y monovalorados los que s&oacute;lo pueden contener un valor";
 choices[92][1] = "Los atributos monovalorados se representan por un nombre dentro de una elipse, mientras que los multivalorados por un nombre dentro de una doble elipse.";
 choices[92][2] = "Se dice que un atributo es compuesto cuando puede descomponerse en otros componentes o atributos m&aacute;s peque&ntilde;os, y simple en otro caso.";
 choices[92][3] = "Se dice que un atributo es cardinal si obligatoriamente tiene que tener al menos un valor";
 answers[92] = choices[92][3];
 units[92] = "80";
 comments[92] = "Id Pregunta: 11156. ";


//  Id pregunta: 11172 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Cu&aacute;l de los siguientes procesos no forma parte del Soporte de Servicio seg&uacute;n la biblioteca ITIL v3?";
 choices[93]= new Array();
 choices[93][0] = "Gesti&oacute;n de Incidencias";
 choices[93][1] = "Gesti&oacute;n de Problemas";
 choices[93][2] = "Gesti&oacute;n de Eventos";
 choices[93][3] = "Gesti&oacute;n del Cambio";
 answers[93] = choices[93][2];
 units[93] = "98";
 comments[93] = "Id Pregunta: 11172. ";


//  Id pregunta: 11266 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Indique los nuevos procesos que a&ntilde;ade la versi&oacute;n 3 de ITIL sobre la anterior en la fase de operaci&oacute;n del servicio:";
 choices[94]= new Array();
 choices[94][0] = "Gesti&oacute;n de incidencias, gesti&oacute;n de peticiones y gesti&oacute;n de alertas.";
 choices[94][1] = "Gesti&oacute;n de eventos, gesti&oacute;n de peticiones y gesti&oacute;n de acceso a los servicios TI.";
 choices[94][2] = "Gesti&oacute;n de los proveedores y gesti&oacute;n de la seguridad TI.";
 choices[94][3] = "No existe tal fase de operaci&oacute;n dentro de la versi&oacute;n 3 de ITIL.";
 answers[94] = choices[94][1];
 units[94] = "98";
 comments[94] = "Id Pregunta: 11266. ";


//  Id pregunta: 11316 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Se&ntilde;ale de entre las siguientes, la opci&oacute;n incorrecta en cuanto a las caracter&iacute;sticas del principios del modelado orientado a objetos";
 choices[95]= new Array();
 choices[95][0] = "Polimorfismo, encapsulaci&oacute;n y herencia";
 choices[95][1] = "Reusabilidad, modulaci&oacute;n y herencia";
 choices[95][2] = "Herencia, polimorfismo";
 choices[95][3] = "Reusabilidad, abstracci&oacute;n y herencia";
 answers[95] = choices[95][1];
 units[95] = "82";
 comments[95] = "Id Pregunta: 11316. ";


//  Id pregunta: 11378 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes afirmaciones resume mejor el prop&oacute;sito de la Gesti&oacute;n de Eventos?";
 choices[96]= new Array();
 choices[96][0] = "La habilidad de detectar eventos, darles sentido y determinar las acciones de control apropiadas";
 choices[96][1] = "La habilidad de detectar eventos, restablecer el servicio a la normalidad tan pronto como sea posible y minimizar el impacto adverso en las operaciones del negocio";
 choices[96][2] = "La habilidad de monitorizar y controlar las actividades del personal t&eacute;cnico";
 choices[96][3] = "La habilidad de informar sobre la entrega exitosa de los servicios al comprobar el tiempo de funcionamiento de los dispositivos de la infraestructura";
 answers[96] = choices[96][0];
 units[96] = "98";
 comments[96] = "Id Pregunta: 11378. ";


//  Id pregunta: 11401 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de los siguientes no es un prop&oacute;sito u objetivo de la Gesti&oacute;n de la Disponibilidad?";
 choices[97]= new Array();
 choices[97][0] = "Monitorizar e informar sobre la disponibilidad de componentes";
 choices[97][1] = "Asegurar que la disponibilidad de los servicios se ajusta a las necesidades acordadas del negocio";
 choices[97][2] = "Evaluar el impacto de los cambios sobre el Plan de Disponibilidad";
 choices[97][3] = "Asegurar que los planes de continuidad del negocio est&aacute;n alineados con objetivos del negocio";
 answers[97] = choices[97][3];
 units[97] = "98";
 comments[97] = "Id Pregunta: 11401. ";


//  Id pregunta: 11634 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Entre los diagramas de comportamiento de UML se encuentran:";
 choices[98]= new Array();
 choices[98][0] = "Diagrama de clases, diagrama de secuencia y diagrama de componentes.";
 choices[98][1] = "Diagrama de tiempos, diagrama de secuencia y diagrama de componentes.";
 choices[98][2] = "Diagrama de paquetes, diagrama de actividad y diagrama de perfil.";
 choices[98][3] = "Todas las anteriores son falsas";
 answers[98] = choices[98][3];
 units[98] = "84";
 comments[98] = "Id Pregunta: 11634. ";


//  Id pregunta: 11645 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  En relaci&oacute;n con las t&eacute;cnicas de OCR:";
 choices[99]= new Array();
 choices[99][0] = "La ascendente es la porci&oacute;n de un car&aacute;cter que queda por encima de la l&iacute;nea base";
 choices[99][1] = "Un car&aacute;cter es la unidad b&aacute;sica de reconocimiento y est&aacute; siempre formado por una letra";
 choices[99][2] = "La l&iacute;nea base une las descendentes de una fila de letras ";
 choices[99][3] = "Una pica equivale a 12 puntos";
 answers[99] = choices[99][3];
 units[99] = "94";
 comments[99] = "Id Pregunta: 11645. ";


