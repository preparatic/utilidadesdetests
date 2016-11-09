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

//  Id pregunta: 532 AÃ±o de creación de pregunta: 2003-01-01
 questions[0]= "1)  La interfaz de M&eacute;tica V3 denominada &ldquo;Gesti&oacute;n de proyectos&rdquo;";
 choices[0]= new Array();
 choices[0][0] = "Contempla tanto el desarrollo de nuevos proyectos, como la ampliaci&oacute;n y mejora de los ya existentes (mantenimiento de sistemas de informaci&oacute;n)";
 choices[0][1] = "Consta de cuatro tipos de actividades; de inicio del proyecto , de seguimiento y control de finalizaci&oacute;n del proyecto, y de mantenimiento.";
 choices[0][2] = "Tiene como finalidad principal la planificaci&oacute;n, el seguimiento y control de las actividades y de los recursos no materiales";
 choices[0][3] = "Se emplea en la Administraci&oacute;n P&uacute;blica en sustituci&oacute;n de Eurom&eacute;todo";
 answers[0] = choices[0][0];
 units[0] = "86";
 comments[0] = "Id Pregunta: 532. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 1636 AÃ±o de creación de pregunta: 2003-01-01
 questions[1]= "2)  Seg&uacute;n la metodolog&iacute;a Metrica v3 un diagrama de estructura se representa en forma de &aacute;rbol. Indicar, entre las siguientes, cu&aacute;l no corresponde a alguna de las representaciones gr&aacute;ficas que permiten mostrar la secuencia de las llamadas entre m&oacute;dulos";
 choices[1]= new Array();
 choices[1][0] = "Lineal";
 choices[1][1] = "Secuencial";
 choices[1][2] = "Repetitiva";
 choices[1][3] = "Alternativa";
 answers[1] = choices[1][0];
 units[1] = "86";
 comments[1] = "Id Pregunta: 1636. NULL";


//  Id pregunta: 2005 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  Son elementos de un DFD:";
 choices[2]= new Array();
 choices[2][0] = "eventos, nodos, entidades externas, flujos de datos";
 choices[2][1] = "eventos, entidades externas, procesos, almacenes de datos, flujos de datos";
 choices[2][2] = "entidades externas, procesos, almacenes de datos, flujos de datos";
 choices[2][3] = "entidades externas, nodos, flujos de datos";
 answers[2] = choices[2][2];
 units[2] = "86";
 comments[2] = "Id Pregunta: 2005. Similar a examen TIC MAP A 2004";


//  Id pregunta: 2007 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  Son interfaces de Metrica v.3:";
 choices[3]= new Array();
 choices[3][0] = "Gesti&oacute;n de Procesos, Gesti&oacute;n de Perfiles, Aseguramiento de la Calidad";
 choices[3][1] = "Gesti&oacute;n de Perfiles, Gesti&oacute;n de Proyectos, Seguridad, Gesti&oacute;n de Configuraci&oacute;n";
 choices[3][2] = "Gesti&oacute;n de Proyectos, Seguridad, Aseguramiento de la Calidad";
 choices[3][3] = "Gesti&oacute;n de Procesos, Gesti&oacute;n de Configuraci&oacute;n, Seguridad, Aseguramiento de la Calidad";
 answers[3] = choices[3][2];
 units[3] = "86";
 comments[3] = "Id Pregunta: 2007. Similar a examen TIC MAP A 2004";


//  Id pregunta: 2017 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  Dentro de la metodolog&iacute;a M&Eacute;TRICA versi&oacute;n 3, &iquest;cu&aacute;l de las siguientes opciones es una extensi&oacute;n del modelo entidad/relaci&oacute;n?";
 choices[4]= new Array();
 choices[4][0] = "Definici&oacute;n de &iacute;ndices";
 choices[4][1] = "Generalizaci&oacute;n";
 choices[4][2] = "Entidades deductivas";
 choices[4][3] = "Entidades hist&oacute;ricas";
 answers[4] = choices[4][1];
 units[4] = "86";
 comments[4] = "Id Pregunta: 2017. Examen TIC MAP B 2004";


//  Id pregunta: 2058 AÃ±o de creación de pregunta: 2004-01-01
 questions[5]= "6)  En METRICA V3 y otras metodolog&iacute;as de desarrollo, &iquest;qu&eacute; se entiende por Gesti&oacute;n de la Configuraci&oacute;n?";
 choices[5]= new Array();
 choices[5][0] = "La planificaci&oacute;n, seguimiento y control de los recursos humanos y materiales que intervienen en el desarrollo del Sistema de Informaci&oacute;n.";
 choices[5][1] = "La administraci&oacute;n de los recursos f&iacute;sicos que soportan la infraestructura de construcci&oacute;n del Sistema de Informaci&oacute;n";
 choices[5][2] = "El mantenimiento de la integridad de los productos y objetos obenidos durante el desarrollo de los sistemas de informaci&oacute;n, controlando las versiones y los cambios de estos.";
 choices[5][3] = "El marco com&uacute;n de medidas orientadas al aseguramiento de la calidad aplicable al Proyecto";
 answers[5] = choices[5][2];
 units[5] = "86";
 comments[5] = "Id Pregunta: 2058. Pregunta Junta Andalucia - A";


//  Id pregunta: 2060 AÃ±o de creación de pregunta: 2004-01-01
 questions[6]= "7)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas empleadas en METRICA V3, tiene por objeto la obtenci&oacute;n de un modelo l&oacute;gico de procesos que represente el sistema, con independencia de las condiciones f&iacute;sicas de entorno?";
 choices[6]= new Array();
 choices[6][0] = "Modelo Entidad/Relaci&oacute;n";
 choices[6][1] = "Diagrama de Despliegue";
 choices[6][2] = "Diagrama de Flujo de Datos (DFD)";
 choices[6][3] = "Diagrama de Interacci&oacute;n";
 answers[6] = choices[6][2];
 units[6] = "86";
 comments[6] = "Id Pregunta: 2060. Pregunta Junta Andalucia - A";


//  Id pregunta: 2080 AÃ±o de creación de pregunta: 2004-01-01
 questions[7]= "8)  La asignaci&oacute;n de la petici&oacute;n, en METRICA V3, consiste en: ";
 choices[7]= new Array();
 choices[7][0] = "La tarea del Mantenimiento de sistemas de informaci&oacute;n en METRICA V3 en la que se determina el tipo de mantenimiento requerido por la petici&oacute;n asignada.";
 choices[7][1] = "La determinaci&oacute;n de los recursos necesarios para atender una petici&oacute;n de mantenimiento una vez aceptada la petici&oacute;n";
 choices[7][2] = "La determinaci&oacute;n de quien es la responsabilidad de atender una petici&oacute;n, previa a la aceptaci&oacute;n de la petici&oacute;n";
 choices[7][3] = "No es una tarea incluida en esta metodolog&iacute;a";
 answers[7] = choices[7][0];
 units[7] = "86";
 comments[7] = "Id Pregunta: 2080. Pregunta Junta Andalucia - A";


//  Id pregunta: 2083 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Sobre la naturaleza del software, entre las caracter&iacute;sticas que lo determinan y lo diferencian tenemos:";
 choices[8]= new Array();
 choices[8][0] = "Es de existencia inmaterial";
 choices[8][1] = "Es invisible, se manifiesta a trav&eacute;s de Hardware y tiene un proceso de desarrollo dif&iacute;cil de controlar";
 choices[8][2] = "Es una t&eacute;cnica muy madura, en la que existen datos hist&oacute;ricos importantes";
 choices[8][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son ciertas";
 answers[8] = choices[8][3];
 units[8] = "86";
 comments[8] = "Id Pregunta: 2083. NULL";


//  Id pregunta: 2120 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l de las siguientes actividades no se engloba, en M&eacute;trica V3, en el proceso &lsquo;An&aacute;lisis del Sistema de Informaci&oacute;n&rsquo;?:";
 choices[9]= new Array();
 choices[9][0] = "An&aacute;lisis de Casos de Uso";
 choices[9][1] = "Elaboraci&oacute;n del Modelo de Procesos";
 choices[9][2] = "Generaci&oacute;n de especificaciones de construcci&oacute;n";
 choices[9][3] = "Especificaci&oacute;n del plan de pruebas";
 answers[9] = choices[9][2];
 units[9] = "86";
 comments[9] = "Id Pregunta: 2120. NULL";


//  Id pregunta: 2121 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Cu&aacute;l de las siguientes actividades se engloban, en M&eacute;trica V3, en el proceso &lsquo;Dise&ntilde;o del Sistema de Informaci&oacute;n&rsquo;?:";
 choices[10]= new Array();
 choices[10][0] = "Verificaci&oacute;n y aceptaci&oacute;n de la arquitectura del sistema";
 choices[10][1] = "Especificaci&oacute;n t&eacute;cnica del plan de pruebas";
 choices[10][2] = "Las respuestas 'a' y 'b' son correctas";
 choices[10][3] = "Todas son falsas";
 answers[10] = choices[10][2];
 units[10] = "86";
 comments[10] = "Id Pregunta: 2121. NULL";


//  Id pregunta: 2122 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Cu&aacute;l de las siguientes actividades se engloban, en M&eacute;trica V3, en el proceso &lsquo;Estudio de Viabilidad del Sistema&rsquo;?:";
 choices[11]= new Array();
 choices[11][0] = "Estudio de la situaci&oacute;n actual";
 choices[11][1] = "Definici&oacute;n de requisitos del sistema ";
 choices[11][2] = "Estudio de alternativas de soluci&oacute;n";
 choices[11][3] = "Todas las anteriores";
 answers[11] = choices[11][3];
 units[11] = "86";
 comments[11] = "Id Pregunta: 2122. NULL";


//  Id pregunta: 2131 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa?:";
 choices[12]= new Array();
 choices[12][0] = "Para aplicar M&Eacute;TRICA Versi&oacute;n 3 es preciso realizar una adaptaci&oacute;n previa en funci&oacute;n del proyecto, la organizaci&oacute;n, etc";
 choices[12][1] = "Las interfaces de M&Eacute;TRICA 3 son: Gesti&oacute;n de Proyectos, Gesti&oacute;n de Configuraci&oacute;n, Aseguramiento de la Calidad y Seguridad";
 choices[12][2] = "En las tareas de M&Eacute;TRICA Versi&oacute;n 3 se describe su contenido, se indican los productos a obtener, las t&eacute;cnicas a utilizar y los participantes responsables de su realizaci&oacute;n";
 choices[12][3] = "La participaci&oacute;n de los usuarios en M&Eacute;TRICA Versi&oacute;n 3 se produce s&oacute;lo en el proceso de Implantaci&oacute;n y Aceptaci&oacute;n del Sistema";
 answers[12] = choices[12][3];
 units[12] = "86";
 comments[12] = "Id Pregunta: 2131. NULL";


//  Id pregunta: 2141 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  &iquest;Cu&aacute;l de las siguientes reglas no es una regla de construcci&oacute;n de flujos en un DFD?:";
 choices[13]= new Array();
 choices[13][0] = "Activa procesos";
 choices[13][1] = "Conecta a los dem&aacute;s elementos de un DFD";
 choices[13][2] = "El flujo no puede crear ni destruir datos";
 choices[13][3] = "Se puede asimilar el flujo de datos a una tuber&iacute;a por la que transita informaci&oacute;n";
 answers[13] = choices[13][0];
 units[13] = "86";
 comments[13] = "Id Pregunta: 2141. NULL";


//  Id pregunta: 2173 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  La definici&oacute;n &quot;margen suplementario de tiempo que existe en una actividad si las actividades precedentes empiezan lo m&aacute;s tarde posible y las posteriores lo antes posible&quot; corresponde a: ";
 choices[14]= new Array();
 choices[14][0] = "holgura independiente";
 choices[14][1] = "holgura total";
 choices[14][2] = "holgura libre";
 choices[14][3] = "Ninguna de las anteriores";
 answers[14] = choices[14][0];
 units[14] = "86";
 comments[14] = "Id Pregunta: 2173. NULL";


//  Id pregunta: 2178 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  La diferencia entre t&eacute;cnicas y pr&aacute;cticas en METRICA 3 es:";
 choices[15]= new Array();
 choices[15][0] = "Las pr&aacute;cticas se apoyan en est&aacute;ndares, mientras que las t&eacute;cnicas no";
 choices[15][1] = "Las t&eacute;cnicas son el conjunto de heur&iacute;sticas y procedimientos que se apoyan en est&aacute;ndares, mientras que las pr&aacute;cticas no precisan cumplir criterios establecidos";
 choices[15][2] = "Las t&eacute;cnicas son el conjunto de heur&iacute;sticas y procedimientos que se apoyan en la experiencia, mientras que las pr&aacute;cticas pueden ser propias";
 choices[15][3] = "Tanto las t&eacute;cnicas como las pr&aacute;cticas son heur&iacute;sticas y no son esclusivas de METRICA 3";
 answers[15] = choices[15][1];
 units[15] = "86";
 comments[15] = "Id Pregunta: 2178. NULL";


//  Id pregunta: 2186 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  &iquest;Cu&aacute;l no es un tipo de mantenimiento software?:";
 choices[16]= new Array();
 choices[16][0] = "Continuo";
 choices[16][1] = "Correctivo";
 choices[16][2] = "Adaptativo";
 choices[16][3] = "Perfectivo";
 answers[16] = choices[16][0];
 units[16] = "86";
 comments[16] = "Id Pregunta: 2186. NULL";


//  Id pregunta: 2201 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  &iquest;En qu&eacute; consisten los Factores Cr&iacute;ticos del &Eacute;xito?:";
 choices[17]= new Array();
 choices[17][0] = "Son los elementos del proyecto que pueden retrasar o hundir el proyecto si no se resuelven satisfactoriamente.";
 choices[17][1] = "Son los requisitos m&aacute;s importantes del an&aacute;lisis de requisitos del sistema";
 choices[17][2] = "Son factores cr&iacute;ticos  que se miden despu&eacute;s de la terminaci&oacute;n del proyecto";
 choices[17][3] = "Son los objetivos del proyecto";
 answers[17] = choices[17][0];
 units[17] = "86";
 comments[17] = "Id Pregunta: 2201. NULL";


//  Id pregunta: 2203 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  &iquest;En qu&eacute; proceso de METRICA V3 se llevar&iacute;a a cabo la construcci&oacute;n de los componentes de migraci&oacute;n y procedimientos de migraci&oacute;n y carga inicial de datos?:";
 choices[18]= new Array();
 choices[18][0] = "CSI";
 choices[18][1] = "DSI";
 choices[18][2] = "IAS";
 choices[18][3] = "DCS";
 answers[18] = choices[18][0];
 units[18] = "86";
 comments[18] = "Id Pregunta: 2203. NULL";


//  Id pregunta: 2242 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  Cuando en la etapa de mantenimiento de un sistema se realizan modificaciones para mejorar las funcionalidades del sistema o ampliar las mismas, se trata de un mantenimiento:";
 choices[19]= new Array();
 choices[19][0] = "Correctivo";
 choices[19][1] = "Perfectivo";
 choices[19][2] = "Evolutivo";
 choices[19][3] = "Adaptativo";
 answers[19] = choices[19][2];
 units[19] = "86";
 comments[19] = "Id Pregunta: 2242. NULL";


//  Id pregunta: 2249 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Dentro de las T&eacute;cnicas de Gesti&oacute;n de Proyectos que se recogen en la Guia de T&eacute;cnicas de METRICA 3, en el apartado de Planificaci&oacute;n, no se encuetra:";
 choices[20]= new Array();
 choices[20][0] = "Program Evaluation &amp; Review Technique";
 choices[20][1] = "Diagramas de Gantt";
 choices[20][2] = "Diagrama de Extrapolaci&oacute;n";
 choices[20][3] = "Diagrama de Regresi&oacute;n";
 answers[20] = choices[20][3];
 units[20] = "86";
 comments[20] = "Id Pregunta: 2249. NULL";


//  Id pregunta: 2251 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  Dentro de METRICA V3, &iquest;cu&aacute;l de los siguientes procesos no forma parte de la fase de desarrollo?:";
 choices[21]= new Array();
 choices[21][0] = "EVS";
 choices[21][1] = "IAS";
 choices[21][2] = "PSI";
 choices[21][3] = "ASI";
 answers[21] = choices[21][2];
 units[21] = "86";
 comments[21] = "Id Pregunta: 2251. NULL";


//  Id pregunta: 2272 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  El diagrama que representa los componentes f&iacute;sicos de una aplicaci&oacute;n y sus relaciones con el entorno es el de:";
 choices[22]= new Array();
 choices[22][0] = "componentes";
 choices[22][1] = "despliegue";
 choices[22][2] = "interacci&oacute;n";
 choices[22][3] = "colaboraci&oacute;n";
 answers[22] = choices[22][0];
 units[22] = "86";
 comments[22] = "Id Pregunta: 2272. NULL";


//  Id pregunta: 2297 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  El plan de sistemas de informaci&oacute;n de METRICA V3:";
 choices[23]= new Array();
 choices[23][0] = "Debe incluir una evaluaci&oacute;n de los recursos necesarios para los proyectos a desarrollar en los pr&oacute;ximos 5 a&ntilde;os, con el objetivo de tenerlos en cuenta en los presupuestos";
 choices[23][1] = "Incluye actividades tales como &quot;generaci&oacute;n de especificaciones de construcci&oacute;n&quot;, &quot;dise&ntilde;o de la arquitectura de m&oacute;dulos del sistema&quot; y &quot;especificaciones t&eacute;cnicas del plan de pruebas&quot;";
 choices[23][2] = "Tiene una perspectiva estrat&eacute;gica y operativa, pero no tecnol&oacute;gica";
 choices[23][3] = "No requiere la participaci&oacute;n del responsable de mantenimiento";
 answers[23] = choices[23][2];
 units[23] = "86";
 comments[23] = "Id Pregunta: 2297. NULL";


//  Id pregunta: 2334 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  En las fases del proceso de prueba de software diga cu&aacute;l, seg&uacute;n M&eacute;trica v3, corresponde a la prueba que se realiza una vez ensamblado el software para comprobar que cumple las especificaciones:";
 choices[24]= new Array();
 choices[24][0] = "Prueba de integraci&oacute;n";
 choices[24][1] = "Prueba de unidad";
 choices[24][2] = "Prueba de aceptaci&oacute;n";
 choices[24][3] = "Prueba de validaci&oacute;n";
 answers[24] = choices[24][2];
 units[24] = "86";
 comments[24] = "Id Pregunta: 2334. NULL";


//  Id pregunta: 2357 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Entre las novedades de la versi&oacute;n 3 de la metodolog&iacute;a de planificaci&oacute;n y desarrollo de sistemas de informaci&oacute;n METRICA del Consejo Superior de Administraci&oacute;n Electr&oacute;nica, respecto de su versi&oacute;n anterior, tenemos:";
 choices[25]= new Array();
 choices[25][0] = "Se incluyen las t&eacute;cnicas propias de un desarrollo orientado a objetos y las t&eacute;cnicas de desarrollo del tipo estructurado";
 choices[25][1] = "La incorporaci&oacute;n del proceso de Mantenimiento y de los &uacute;ltimos est&aacute;ndares de ingenier&iacute;a de software y de calidad ISO 12207 e ISO 9000-3";
 choices[25][2] = "La incorporaci&oacute;n con puntos definidos de interfaz para las metodolog&iacute;as de seguridad (MAGERIT), de aseguramiento de la calidad (PGGC - Plan General de Garant&iacute;a de Calidad), Gesti&oacute;n de Configuraci&oacute;n y Gesti&oacute;n de Proyectos";
 choices[25][3] = "Todas las anteriores";
 answers[25] = choices[25][3];
 units[25] = "86";
 comments[25] = "Id Pregunta: 2357. NULL";


//  Id pregunta: 2394 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  La garant&iacute;a de que en un determinado software bajo prueba se han ejecutado todos los bucles en sus partes internas y condiciones de retorno, y se han ejecutado todas las decisiones l&oacute;gicas en sus variantes verdadera y falsa, corresponde a:";
 choices[26]= new Array();
 choices[26][0] = "Los tests estructurales";
 choices[26][1] = "Los tests funcionales";
 choices[26][2] = "Las revisiones t&eacute;cnicas formales";
 choices[26][3] = "Las revisiones de usuario";
 answers[26] = choices[26][0];
 units[26] = "86";
 comments[26] = "Id Pregunta: 2394. NULL";


//  Id pregunta: 2399 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  La metodolog&iacute;a M&eacute;trica Versi&oacute;n 3:";
 choices[27]= new Array();
 choices[27][0] = "No incorpora una interface para la gesti&oacute;n de proyectos";
 choices[27][1] = "No incorpora una interface para la gesti&oacute;n de la configuraci&oacute;n";
 choices[27][2] = "Establece que el estudio de viabilidad del sistema queda fuera de la metodolog&iacute;a, al ser previo al desarrollo del sistema de informaci&oacute;n";
 choices[27][3] = "Ha sido concebida para abarcar el desarrollo completo de sistemas de informaci&oacute;n sea cual sea su complejidad y magnitud";
 answers[27] = choices[27][3];
 units[27] = "86";
 comments[27] = "Id Pregunta: 2399. NULL";


//  Id pregunta: 2448 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  Las secuencias de ejecuci&oacute;n de los programas, el espacio requerido, memoria que utilizan&hellip;, son definidos en los:";
 choices[28]= new Array();
 choices[28][0] = "Manuales de procedimientos";
 choices[28][1] = "Manuales de usuarios";
 choices[28][2] = "Manuales de explotaci&oacute;n";
 choices[28][3] = "Manuales de contingencias";
 answers[28] = choices[28][2];
 units[28] = "86";
 comments[28] = "Id Pregunta: 2448. NULL";


//  Id pregunta: 2471 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  No es un tipo de prueba:";
 choices[29]= new Array();
 choices[29][0] = "Pruebas individuales";
 choices[29][1] = "Pruebas unitarias";
 choices[29][2] = "Pruebas de Aceptaci&oacute;n";
 choices[29][3] = "Pruebas de Regresi&oacute;n";
 answers[29] = choices[29][0];
 units[29] = "86";
 comments[29] = "Id Pregunta: 2471. NULL";


//  Id pregunta: 2515 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  Uno de los siguientes no es un problema de la fase de an&aacute;lisis de requisitos:";
 choices[30]= new Array();
 choices[30][0] = "El usuario posee el conocimiento de forma desorganizada";
 choices[30][1] = "Manejo de la complejidad del problema";
 choices[30][2] = "La adquisici&oacute;n de la informaci&oacute;n pertinente";
 choices[30][3] = "Acomodar los cambios que puedan ocurrir durante o despu&eacute;s del an&aacute;lisis";
 answers[30] = choices[30][0];
 units[30] = "86";
 comments[30] = "Id Pregunta: 2515. NULL";


//  Id pregunta: 2552 AÃ±o de creación de pregunta: 2004-01-01
 questions[31]= "32)  Las actividades de la interfaz de Gesti&oacute;n de Proyectos en METRICA V3, se clasifican en:";
 choices[31]= new Array();
 choices[31][0] = "Actividades de inicio; actividades de seguimiento y control; actividades de finalizaci&oacute;n";
 choices[31][1] = "Actividades de estimaci&oacute;n; actividades de dise&ntilde;o y construcci&oacute;n; actividades de presentaci&oacute;n";
 choices[31][2] = "Actividades de planificaci&oacute;n, actividades de organizaci&oacute;n; actividades de evaluaci&oacute;n";
 choices[31][3] = "Actividades de planificaci&oacute;n, actividades de estudio, actividades de organizaci&oacute;n, actividades de evaluaci&oacute;n";
 answers[31] = choices[31][0];
 units[31] = "86";
 comments[31] = "Id Pregunta: 2552. Pregunta Junta Andalucia - A";


//  Id pregunta: 2586 AÃ±o de creación de pregunta: 2003-01-01
 questions[32]= "33)  En el contexto de las metodolog&iacute;as estructuradas para el dise&ntilde;o de sistemas de informaci&oacute;n, &iquest;cu&aacute;l de las siguientes afirmaciones es la correcta?:";
 choices[32]= new Array();
 choices[32][0] = "El dise&ntilde;o l&oacute;gico debe preceder y estar separado del dise&ntilde;o f&iacute;sico,";
 choices[32][1] = "El dise&ntilde;o f&iacute;sico debe preceder y estar separado del dise&ntilde;o l&oacute;gico.";
 choices[32][2] = "No existe separaci&oacute;n entre dise&ntilde;o f&iacute;sico y l&oacute;gico: se realiza de forma conjunta.";
 choices[32][3] = "La metodolog&iacute;a solo aborda el dise&ntilde;o l&oacute;gico.";
 answers[32] = choices[32][0];
 units[32] = "86";
 comments[32] = "Id Pregunta: 2586. Junta Andaluc&iacute;a";


//  Id pregunta: 2591 AÃ±o de creación de pregunta: 2003-01-01
 questions[33]= "34)  En la tarea de Especificaci&oacute;n del Plan de Pruebas de Regresi&oacute;n, de la actividad Preparaci&oacute;n de la Implantaci&oacute;n de la Modificaci&oacute;n, del mantenimiento de sistemas de informaci&oacute;n, seg&uacute;n METRICA V3, participar&aacute;n:";
 choices[33]= new Array();
 choices[33][0] = "El responsable de mantenimiento, el equipo de mantenimiento y el jefe de proyecto.";
 choices[33][1] = "El responsable de mantenimiento y el jefe de proyecto.";
 choices[33][2] = "El equipo de mantenimiento y el jefe del proyecto.";
 choices[33][3] = "El responsable de mantenimiento, el equipo de mantenimiento, el jefe de proyecto el coordinador de los usuarios.";
 answers[33] = choices[33][2];
 units[33] = "86";
 comments[33] = "Id Pregunta: 2591. Junta Andaluc&iacute;a";


//  Id pregunta: 2593 AÃ±o de creación de pregunta: 2003-01-01
 questions[34]= "35)  En METRICA versi&oacute;n 3, &iquest;en qu&eacute; etapa del proceso de Desarrollo de Sistemas de Informaci&oacute;n se aborda el establecimiento de los requisitos de un sistema?:";
 choices[34]= new Array();
 choices[34][0] = "Estudio de Viabilidad del Sistema (EVS).";
 choices[34][1] = "An&aacute;lisis del Sistema de Informaci&oacute;n (ASI).";
 choices[34][2] = "Dise&ntilde;o del Sistema de Informaci&oacute;n (DSI).";
 choices[34][3] = "Construcci&oacute;n del Sistema de Informaci&oacute;n (CSI).";
 answers[34] = choices[34][1];
 units[34] = "86";
 comments[34] = "Id Pregunta: 2593. Junta Andaluc&iacute;a";


//  Id pregunta: 2599 AÃ±o de creación de pregunta: 2003-01-01
 questions[35]= "36)  Seg&uacute;n METRICA V3, &iquest;cu&aacute;l de las siguientes no se considera una tarea propia de la etapa de Implantaci&oacute;n y Aceptaci&oacute;n de Sistemas de informaci&oacute;n (IAS)?:";
 choices[35]= new Array();
 choices[35][0] = "Establecimiento del Plan de Implantaci&oacute;n";
 choices[35][1] = "Elaboraci&oacute;n de los manuales de usuario.";
 choices[35][2] = "Incorporaci&oacute;n del Sistema a entorno de operaci&oacute;n.";
 choices[35][3] = " Paso a Producci&oacute;n.";
 answers[35] = choices[35][1];
 units[35] = "86";
 comments[35] = "Id Pregunta: 2599. Junta Andaluc&iacute;a";


//  Id pregunta: 2629 AÃ±o de creación de pregunta: 2003-01-01
 questions[36]= "37)  &iquest;Qu&egrave; actividad del An&aacute;lisis del Sistema de Informaci&oacute;n s&oacute;lo se realiza en el caso de an&aacute;lisis orientado a objetos?";
 choices[36]= new Array();
 choices[36][0] = "ASI 6 -  Elaboraci&oacute;n del Modelo de datos";
 choices[36][1] = "ASI 8 &ndash; Definici&oacute;n de Interfaces de Usuario";
 choices[36][2] = "ASI 4 &ndash; An&aacute;lisis de los Casos de Uso";
 choices[36][3] = "ASI 3 &ndash; Identificaci&oacute;n de Subsistemas de An&aacute;lisis";
 answers[36] = choices[36][2];
 units[36] = "86";
 comments[36] = "Id Pregunta: 2629. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 2658 AÃ±o de creación de pregunta: 2003-01-01
 questions[37]= "38)  Una de las siguientes caracter&iacute;sticas no se corresponde con las del SW";
 choices[37]= new Array();
 choices[37][0] = "fabricaci&oacute;n &uacute;nica, no en serie";
 choices[37][1] = "F&aacute;cil de modificar pero dificil de validar";
 choices[37][2] = "Proceso de desarrollo f&aacute;cil de controlar";
 choices[37][3] = "Todas los correctas";
 answers[37] = choices[37][2];
 units[37] = "86";
 comments[37] = "Id Pregunta: 2658. ";


//  Id pregunta: 2785 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  En M&Eacute;TRICA v.3, el documento de Participantes describe el perfil y el grado deresponsabilidad de las personas que deben participar en la realizaci&oacute;n de cada tarea. A este respecto, &iquest;qu&eacute; perfiles considera la citada metodolog&iacute;a? :";
 choices[38]= new Array();
 choices[38][0] = "Jefe de Proyecto, Analista y Programador.";
 choices[38][1] = "Directivo, Equipo de Proyecto, Usuario y Grupo de Calidad.";
 choices[38][2] = "Jefe de Proyecto, T&eacute;cnico, Analista, Programador y Usuario.";
 choices[38][3] = "Directivo, Consultor, Jefe de Proyecto, Analista y Programador.";
 answers[38] = choices[38][3];
 units[38] = "86";
 comments[38] = "Id Pregunta: 2785. NULL";


//  Id pregunta: 2787 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  M&Eacute;TRICA v.3 considera que las pruebas de integraci&oacute;n se deben realizar en el proceso de:";
 choices[39]= new Array();
 choices[39][0] = "Implantaci&oacute;n y Aceptaci&oacute;n del Sistema.";
 choices[39][1] = "M&eacute;trica v.3 no contempla este tipo de pruebas.";
 choices[39][2] = "Construcci&oacute;n del Sistema de Informaci&oacute;n y en el de Implantaci&oacute;n y Aceptaci&oacute;n del Sistema.";
 choices[39][3] = "Construcci&oacute;n del Sistema de Informaci&oacute;n.";
 answers[39] = choices[39][3];
 units[39] = "86";
 comments[39] = "Id Pregunta: 2787. NULL";


//  Id pregunta: 2791 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  Seg&uacute;n m&eacute;trica v3. En qu&eacute; perfil encajar&iacute;a un responsable de calidad";
 choices[40]= new Array();
 choices[40][0] = "Perfil directivo ";
 choices[40][1] = "Perfil jefe de proyecto";
 choices[40][2] = "M&eacute;trica v3 no define ese tipo de participante";
 choices[40][3] = "Consultor";
 answers[40] = choices[40][1];
 units[40] = "86";
 comments[40] = "Id Pregunta: 2791. NULL";


//  Id pregunta: 2793 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  En la planificaci&oacute;n de SI, qu&eacute; producto de los siguientes no est&aacute; contemplado en M&eacute;trica V3";
 choices[41]= new Array();
 choices[41][0] = "Plan de proyectos";
 choices[41][1] = "Modelo de informaci&oacute;n";
 choices[41][2] = "Modelo de Sistemas de informaci&oacute;n";
 choices[41][3] = "Modelo de arquitectura";
 answers[41] = choices[41][3];
 units[41] = "86";
 comments[41] = "Id Pregunta: 2793. NULL";


//  Id pregunta: 2795 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  Qu&eacute; actividades componen la Interfaz de Gesti&oacute;n de proyectos en M&eacute;trica v3";
 choices[42]= new Array();
 choices[42][0] = "Inicio del proyecto, seguimiento y control, Finalizaci&oacute;n y registro del proyecto";
 choices[42][1] = "Planificaci&oacute;n de la calidad, Seguimiento y control, Finalizaci&oacute;n del proyecto";
 choices[42][2] = "Inicio del proyecto, seguimiento y supervisi&oacute;n, cierre del proyecto";
 choices[42][3] = "Inicio del proyecto, seguimiento y control y Finalizaci&oacute;n del proyecto";
 answers[42] = choices[42][3];
 units[42] = "86";
 comments[42] = "Id Pregunta: 2795. NULL";


//  Id pregunta: 2798 AÃ±o de creación de pregunta: 2006-01-01
 questions[43]= "44)  A qu&eacute; tipo de diagrama, seg&uacute;n M&eacute;trica v3, corresponde la siguiente definici&oacute;n: &quot;Es un tipo de diagrama cuyo objetivo es describir el comportamiento din&aacute;mico del sistema de informaci&oacute;n mostrando c&oacute;mo interact&uacute;an los objetos entre s&iacute;&quot;";
 choices[43]= new Array();
 choices[43][0] = "Diagrama de colaboraci&oacute;n";
 choices[43][1] = "Diagrama de paquetes";
 choices[43][2] = "Diagrama din&aacute;mico";
 choices[43][3] = "Diagrama de transici&oacute;n de Estados";
 answers[43] = choices[43][0];
 units[43] = "86";
 comments[43] = "Id Pregunta: 2798. NULL";


//  Id pregunta: 2872 AÃ±o de creación de pregunta: 2006-01-01
 questions[44]= "45)  Indique cu&aacute;l de las siguientes alternativas corresponde a los procesos principales de que consta la metodolog&iacute;a METRICA  ver. 3";
 choices[44]= new Array();
 choices[44][0] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n, Desarrollo de Sistemas de Informaci&oacute;n y Mantenimiento de Sistemas de Informaci&oacute;n";
 choices[44][1] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n, Estudio de viabilidad de  Sistemas de Informaci&oacute;n, Desarrollo  de Sistemas de Informaci&oacute;n e Implantaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[44][2] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n, An&aacute;lisis de Sistemas de Informaci&oacute;n, Construcci&oacute;n e Implantaci&oacute;n de  Sistemas de Informaci&oacute;n y Mantenimiento de Sistemas de Informaci&oacute;n";
 choices[44][3] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n, Desarrollo de Sistemas de Informaci&oacute;n e Implantaci&oacute;n de Sistemas de Informaci&oacute;n";
 answers[44] = choices[44][0];
 units[44] = "86";
 comments[44] = "Id Pregunta: 2872. NULL";


//  Id pregunta: 2874 AÃ±o de creación de pregunta: 2006-01-01
 questions[45]= "46)  &iquest;Cu&aacute;l de las siguientes interfaces no corresponde a las establecidas por la metodolog&iacute;a M&Eacute;TRICA versi&oacute;n 3?";
 choices[45]= new Array();
 choices[45][0] = "Planificaci&oacute;n del Sistema";
 choices[45][1] = "Gesti&oacute;n de proyectos";
 choices[45][2] = "Aseguramiento de la calidad";
 choices[45][3] = "Seguridad";
 answers[45] = choices[45][0];
 units[45] = "86";
 comments[45] = "Id Pregunta: 2874. NULL";


//  Id pregunta: 2876 AÃ±o de creación de pregunta: 2006-01-01
 questions[46]= "47)  El &quot; Desarrollo de Sistemas de Informaci&oacute;n&quot; en la metodolog&iacute;a M&Eacute;TRICA versi&oacute;n 3 lo constituyen";
 choices[46]= new Array();
 choices[46][0] = "Tres procesos";
 choices[46][1] = "Cuatro procesos";
 choices[46][2] = "Cinco procesos";
 choices[46][3] = "Seis procesos";
 answers[46] = choices[46][2];
 units[46] = "86";
 comments[46] = "Id Pregunta: 2876. NULL";


//  Id pregunta: 3873 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas empleadas en METRICA V3, tiene por objeto la obtenci&oacute;n de un modelo l&oacute;gico de procesos que represente el sistema, con independencia de las condiciones f&iacute;sicas de entorno?:";
 choices[47]= new Array();
 choices[47][0] = "Modelo Entidad / relaci&oacute;n.";
 choices[47][1] = "Diagrama de Despliegue.";
 choices[47][2] = "Diagrama de Flujo de Datos (DFD).";
 choices[47][3] = "Diagrama de Interacci&oacute;n.";
 answers[47] = choices[47][2];
 units[47] = "86";
 comments[47] = "Id Pregunta: 3873. Junta Andaluc&iacute;a";


//  Id pregunta: 4375 AÃ±o de creación de pregunta: 2007-01-01
 questions[48]= "49)  Indique cu&aacute;l de los siguientes no es un proceso principal incluido en M&eacute;trica versi&oacute;n 3:";
 choices[48]= new Array();
 choices[48][0] = "Desarrollo de Sistemas de Informaci&oacute;n.";
 choices[48][1] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n.";
 choices[48][2] = "Mantenimiento de Sistemas de Informaci&oacute;n.";
 choices[48][3] = "An&aacute;lisis de Requisitos del Sistema.";
 answers[48] = choices[48][3];
 units[48] = "86";
 comments[48] = "Id Pregunta: 4375. NULL";


//  Id pregunta: 4377 AÃ±o de creación de pregunta: 2007-01-01
 questions[49]= "50)  &iquest;Cu&aacute;les son los elementos en que se desglosa el desarrollo de un sistema de informaci&oacute;n, seg&uacute;n M&eacute;trica v3?";
 choices[49]= new Array();
 choices[49][0] = "Revisiones t&eacute;cnicas formales e inspecciones informales.";
 choices[49][1] = "Procesos principales, actividades y tareas.";
 choices[49][2] = "Fases, m&oacute;dulos, actividades y tareas.";
 choices[49][3] = "Interfaces y fases.";
 answers[49] = choices[49][1];
 units[49] = "86";
 comments[49] = "Id Pregunta: 4377. NULL";


//  Id pregunta: 4382 AÃ±o de creación de pregunta: 2007-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes actividades se engloba, en m&eacute;trica V3, en el proceso de construcci&oacute;n del sistema?";
 choices[50]= new Array();
 choices[50][0] = "Generaci&oacute;n de especificaciones de construcci&oacute;n.";
 choices[50][1] = "Ejecuci&oacute;n de las pruebas unitarias.";
 choices[50][2] = "Definici&oacute;n de interfaces de usuario.";
 choices[50][3] = "Incorporaci&oacute;n del sistema al entorno de operaci&oacute;n.";
 answers[50] = choices[50][1];
 units[50] = "86";
 comments[50] = "Id Pregunta: 4382. NULL";


//  Id pregunta: 4472 AÃ±o de creación de pregunta: 2007-01-01
 questions[51]= "52)  Seg&uacute;n M&eacute;trica V3 &iquest;Donde comenzar&iacute;a el establecimiento del plan de aseguramiento de calidad?";
 choices[51]= new Array();
 choices[51][0] = "En el estudio de viabilidad del sistema.";
 choices[51][1] = "En el proceso de dise&ntilde;o.";
 choices[51][2] = "A la hora de la aceptaci&oacute;n del sistema.";
 choices[51][3] = "Una vez finalizado el mantenimiento del sistema de informaci&oacute;n.";
 answers[51] = choices[51][0];
 units[51] = "86";
 comments[51] = "Id Pregunta: 4472. NULL";


//  Id pregunta: 4523 AÃ±o de creación de pregunta: 2007-01-01
 questions[52]= "53)  Indique cual de las siguientes actividades no pertenece al proceso de Planificaci&oacute;n de Sistemas de Informaci&oacute;n definido en M&eacute;trica V3:";
 choices[52]= new Array();
 choices[52][0] = "Estudio de los sistemas de informaci&oacute;n actuales.";
 choices[52][1] = "Estudio de alternativas soluci&oacute;n.";
 choices[52][2] = "Dise&ntilde;o del modelo de sistema de informaci&oacute;n.";
 choices[52][3] = "Definici&oacute;n del Plan de Acci&oacute;n.";
 answers[52] = choices[52][1];
 units[52] = "86";
 comments[52] = "Id Pregunta: 4523. NULL";


//  Id pregunta: 4527 AÃ±o de creación de pregunta: 2007-01-01
 questions[53]= "54)  &iquest;Cual es el tipo de mantenimiento que supone un conjunto de actividades para facilitar el mantenimiento futuro del sistema?";
 choices[53]= new Array();
 choices[53][0] = "Mantenimiento perfectivo.";
 choices[53][1] = "Mantenimiento adaptativo.";
 choices[53][2] = "Mantenimiento correctivo.";
 choices[53][3] = "Mantenimiento preventivo.";
 answers[53] = choices[53][3];
 units[53] = "86";
 comments[53] = "Id Pregunta: 4527. NULL";


//  Id pregunta: 4581 AÃ±o de creación de pregunta: 2007-01-01
 questions[54]= "55)  &iquest;En que fase de la metodolog&iacute;a M&eacute;trica V3 se inicia la definici&oacute;n de la arquitectura tecnol&oacute;gica?";
 choices[54]= new Array();
 choices[54][0] = "en la planificaci&oacute;n de sistemas de informaci&oacute;n";
 choices[54][1] = "en el an&aacute;lisis del sistema de informaci&oacute;n";
 choices[54][2] = "en el dise&ntilde;o del sistema de informaci&oacute;n";
 choices[54][3] = "en la construcci&oacute;n del sistema de informaci&oacute;n";
 answers[54] = choices[54][0];
 units[54] = "86";
 comments[54] = "Id Pregunta: 4581. NULL";


//  Id pregunta: 4634 AÃ±o de creación de pregunta: 2007-01-01
 questions[55]= "56)  En M&eacute;trica V3 NO es un tipo de las denominadas Pruebas del Sistema las:";
 choices[55]= new Array();
 choices[55][0] = "pruebas funcionales";
 choices[55][1] = "pruebas de facilidad de uso";
 choices[55][2] = "pruebas de verificaci&oacute;n";
 choices[55][3] = "pruebas de volumen";
 answers[55] = choices[55][2];
 units[55] = "86";
 comments[55] = "Id Pregunta: 4634. NULL";


//  Id pregunta: 4637 AÃ±o de creación de pregunta: 2007-01-01
 questions[56]= "57)  Es un producto de entrada y salida del proceso Dise&ntilde;o de Sistema de Informaci&oacute;n de Metrica V3";
 choices[56]= new Array();
 choices[56][0] = "dise&ntilde;o de la arquitectura del sistema";
 choices[56][1] = "resultado del an&aacute;lisis de consistencia";
 choices[56][2] = "modelo f&iacute;sico de datos";
 choices[56][3] = "modelo de casos de uso";
 answers[56] = choices[56][1];
 units[56] = "86";
 comments[56] = "Id Pregunta: 4637. NULL";


//  Id pregunta: 4861 AÃ±o de creación de pregunta: 2007-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes secuencias de actividades NO se corresponde con una actividad del proceso de elaboraci&oacute;n de un Plan de Sistemas seg&uacute;n la metodolog&iacute;a M&Eacute;TRICA versi&oacute;n 3?";
 choices[57]= new Array();
 choices[57][0] = "Estudio de informaci&oacute;n relevante";
 choices[57][1] = "Definici&oacute;n de un Plan de acci&oacute;n";
 choices[57][2] = "Definici&oacute;n de un Plan de Riesgo";
 choices[57][3] = "Estudio de los sistemas de informaci&oacute;n actuales";
 answers[57] = choices[57][2];
 units[57] = "86";
 comments[57] = "Id Pregunta: 4861. NULL";


//  Id pregunta: 4994 AÃ±o de creación de pregunta: 2003-01-01
 questions[58]= "59)  &iquest;A qu&eacute; proceso principal de la metodolog&iacute;a M&eacute;trica versi&oacute;n 3 pertenece el proceso &quot;Implantaci&oacute;n y aceptaci&oacute;n de sistemas (IAS)&quot;?";
 choices[58]= new Array();
 choices[58][0] = "Desarrollo de sistemas de informaci&oacute;n";
 choices[58][1] = "Planificaci&oacute;n de sistemas de informaci&oacute;n";
 choices[58][2] = "An&aacute;lisis de sistema de informaci&oacute;n";
 choices[58][3] = "Mantenimiento de sistemas de informaci&oacute;n";
 answers[58] = choices[58][0];
 units[58] = "86";
 comments[58] = "Id Pregunta: 4994. Examen TIC A 2007";


//  Id pregunta: 5146 AÃ±o de creación de pregunta: 2003-01-01
 questions[59]= "60)  Seg&uacute;n M&eacute;trica V3, &iquest;Cu&aacute;l de los siguientes procesos NO est&aacute; incluido en el proceso de Desarrollo de Sistemas de Informaci&oacute;n?";
 choices[59]= new Array();
 choices[59][0] = "An&aacute;lisis del Sistema de Informaci&oacute;n (ASI)";
 choices[59][1] = "Dise&ntilde;o del Sistema de Informaci&oacute;n (DSI)";
 choices[59][2] = "Planificaci&oacute;n del Sistema de Informaci&oacute;n (PSI)";
 choices[59][3] = "Construcci&oacute;n del Sistema de Informaci&oacute;n (CSI)";
 answers[59] = choices[59][2];
 units[59] = "86";
 comments[59] = "Id Pregunta: 5146. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5149 AÃ±o de creación de pregunta: 2003-01-01
 questions[60]= "61)  Las actividades de la Interfaz de Gesti&oacute;n de Proyectos se dividen en tres grupos: Actividades de Inicio de Proyecto (GPI), Actividades de Seguimiento y Control (GPS) y Actividades de Finalizaci&oacute;n del Proyecto. &iquest;Qu&eacute; actividades est&aacute;n dentro del grupo GPI?";
 choices[60]= new Array();
 choices[60][0] = "Asignaci&oacute;n detallada de tareas y Comunicaci&oacute;n al equipo del proyecto.";
 choices[60][1] = "Estimaci&oacute;n del Esfuerzo y Planificaci&oacute;n del Proyecto.";
 choices[60][2] = "Petici&oacute;n de Cambios de Requisitos y Estimaci&oacute;n del Esfuerzo y Planificaci&oacute;n de la Soluci&oacute;n.";
 choices[60][3] = "Actualizaci&oacute;n de la Planificaci&oacute;n y Reuniones de Seguimiento.";
 answers[60] = choices[60][1];
 units[60] = "86";
 comments[60] = "Id Pregunta: 5149. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5206 AÃ±o de creación de pregunta: 2003-01-01
 questions[61]= "62)  En M&eacute;trica v.3 la actividad &ldquo;Revisi&oacute;n de la formaci&oacute;n a usuarios finales&rdquo; del Aseguramiento de la Calidad corresponde al proceso:";
 choices[61]= new Array();
 choices[61][0] = "An&aacute;lisis del Sistema de Informaci&oacute;n";
 choices[61][1] = "Construcci&oacute;n del Sistema de Informaci&oacute;n";
 choices[61][2] = "Implantaci&oacute;n y aceptaci&oacute;n del Sistema";
 choices[61][3] = "Mantenimiento del Sistema de informaci&oacute;n";
 answers[61] = choices[61][1];
 units[61] = "86";
 comments[61] = "Id Pregunta: 5206. NULL";


//  Id pregunta: 5216 AÃ±o de creación de pregunta: 2007-01-01
 questions[62]= "63)  En qu&eacute; proceso se obtiene el producto &quot;Requisitos de Implantaci&oacute;n&quot;";
 choices[62]= new Array();
 choices[62][0] = "Dise&ntilde;o del Sistema de Informaci&oacute;n";
 choices[62][1] = "Construcci&oacute;n del Sistema de Informaci&oacute;n";
 choices[62][2] = "Implantaci&oacute;n y Aceptaci&oacute;n del Sistema de Informaci&oacute;n";
 choices[62][3] = "An&aacute;lisis del Sistema de Informaci&oacute;n";
 answers[62] = choices[62][0];
 units[62] = "86";
 comments[62] = "Id Pregunta: 5216. NULL";


//  Id pregunta: 5220 AÃ±o de creación de pregunta: 2007-01-01
 questions[63]= "64)  La tarea &quot;Diagn&oacute;stico del Sistema Actual&quot; a qu&eacute; actividad del procesos Planificaci&oacute;n de Sistemas de Informaci&oacute;n pertenece";
 choices[63]= new Array();
 choices[63][0] = "Estudio de la informaci&oacute;n relevante";
 choices[63][1] = "Estudio de los Sistemas de Informaci&oacute;n Actuales";
 choices[63][2] = "Identificaci&oacute;n de Requisitos";
 choices[63][3] = "Dise&ntilde;o del modelo de Sistemas de Informaci&oacute;n";
 answers[63] = choices[63][3];
 units[63] = "86";
 comments[63] = "Id Pregunta: 5220. NULL";


//  Id pregunta: 5224 AÃ±o de creación de pregunta: 2007-01-01
 questions[64]= "65)  Cu&aacute;l de las siguientes actividades no pertenece al proceso Mantenimiento de Sistema de Informaci&oacute;n";
 choices[64]= new Array();
 choices[64][0] = "Seguimiento y Evaluaci&oacute;n de los cambios hasta la aceptaci&oacute;n";
 choices[64][1] = "An&aacute;lisis de la petici&oacute;n";
 choices[64][2] = "Registro de la petici&oacute;n";
 choices[64][3] = "Planificaci&oacute;n de la petici&oacute;n";
 answers[64] = choices[64][3];
 units[64] = "86";
 comments[64] = "Id Pregunta: 5224. NULL";


//  Id pregunta: 5903 AÃ±o de creación de pregunta: 2009-01-01
 questions[65]= "66)  &iquest;Cu&aacute;l de las siguientes afirmaciones en relaci&oacute;n con M&Eacute;TRICA v.3 es FALSA?:";
 choices[65]= new Array();
 choices[65][0] = "Cubre distintos tipos de desarrollo: &quot;estructurado&quot; y &quot;orientado a objetos&quot;";
 choices[65][1] = "En su estructura se distinguen tres procesos principales";
 choices[65][2] = "Se incluyen Interfaces para aspectos de gesti&oacute;n";
 choices[65][3] = "El proceso de desarrollo de Sistemas de Informaci&oacute;n se divide en cuatro procesos: &quot;an&aacute;lisis&quot;, &quot;dise&ntilde;o&quot;, &quot;construcci&oacute;n&quot;, e &quot;implantaci&oacute;n y aceptaci&oacute;n&quot; del sistema";
 answers[65] = choices[65][3];
 units[65] = "86";
 comments[65] = "Id Pregunta: 5903. MAP 2008 A1";


//  Id pregunta: 6201 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  De acuerdo con M&eacute;trica versi&oacute;n 3, &iquest;qui&eacute;n participa en la obtenci&oacute;n del producto &quot;Entorno de pruebas unitarias&quot;, de la tarea &quot;Preparaci&oacute;n del entorno de las pruebas unitarias&quot;?";
 choices[66]= new Array();
 choices[66][0] = "T&eacute;cnicos de sistemas";
 choices[66][1] = "T&eacute;cnicos de sistemas y programadores";
 choices[66][2] = "Programadores";
 choices[66][3] = "Analistas, Programadores y T&eacute;cnicos de sistemas";
 answers[66] = choices[66][1];
 units[66] = "86";
 comments[66] = "Id Pregunta: 6201. TIC-B 2009 bloque desarrollo";


//  Id pregunta: 6239 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  A qu&eacute; proceso principal de M&eacute;trica pertenece la tarea &quot;Determinaci&oacute;n del Acuerdo de Nivel de Servicio&quot;";
 choices[67]= new Array();
 choices[67][0] = "Dise&ntilde;o del Sistema de Informaci&oacute;n";
 choices[67][1] = "Construcci&oacute;n del Sistema de Informaci&oacute;n";
 choices[67][2] = "Mantenimiento del Sistema de Informaci&oacute;n";
 choices[67][3] = "Implantaci&oacute;n y Aceptaci&oacute;n del Sistema de Informaci&oacute;n";
 answers[67] = choices[67][3];
 units[67] = "86";
 comments[67] = "Id Pregunta: 6239. TICB-2009, bloque desarrollo";


//  Id pregunta: 6256 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)  Seg&uacute;n la metodolog&iacute;a M&eacute;trica v3, la especificaci&oacute;n de los requisitos de implantaci&oacute;n se realiza en:";
 choices[68]= new Array();
 choices[68][0] = "An&aacute;lisis de Sistema de Informaci&oacute;n";
 choices[68][1] = "Dise&ntilde;o de Sistema de Informaci&oacute;n";
 choices[68][2] = "Construcci&oacute;n del Sistema de Informaci&oacute;n";
 choices[68][3] = "Implantaci&oacute;n y Aceptaci&oacute;n del Sistema de Informaci&oacute;n";
 answers[68] = choices[68][1];
 units[68] = "86";
 comments[68] = "Id Pregunta: 6256. TICB-2009, bloque desarrollo";


//  Id pregunta: 6614 AÃ±o de creación de pregunta: 2010-01-01
 questions[69]= "70)  De las siguientes actividades, &iquest;cu&aacute;l forma parte del proceso de An&aacute;lisis del Sistema de Informaci&oacute;n (ASI) de M&eacute;trica?";
 choices[69]= new Array();
 choices[69][0] = "Establecimiento de Requisitos";
 choices[69][1] = "Identificaci&oacute;n de Requisitos";
 choices[69][2] = "Establecimiento de Requisitos de Implantaci&oacute;n";
 choices[69][3] = "Definici&oacute;n de Requisitos del Sistema";
 answers[69] = choices[69][0];
 units[69] = "86";
 comments[69] = "Id Pregunta: 6614. NULL";


//  Id pregunta: 6621 AÃ±o de creación de pregunta: 2010-01-01
 questions[70]= "71)  &iquest;Cu&aacute;l de los siguientes elementos es una T&eacute;cnica y no una Pr&aacute;ctica seg&uacute;n M&eacute;trica v3?";
 choices[70]= new Array();
 choices[70][0] = "JAD (Join Application Design)";
 choices[70][1] = "An&aacute;lisis de Impacto";
 choices[70][2] = "Prototipado";
 choices[70][3] = "Normalizaci&oacute;n";
 answers[70] = choices[70][3];
 units[70] = "86";
 comments[70] = "Id Pregunta: 6621. NULL";


//  Id pregunta: 6622 AÃ±o de creación de pregunta: 2010-01-01
 questions[71]= "72)  &iquest;Cu&aacute;l de los siguientes elementos es una Pr&aacute;ctica y no una T&eacute;cnica seg&uacute;n M&eacute;trica v3?";
 choices[71]= new Array();
 choices[71][0] = "Modelo de Procesos de la Organizaci&oacute;n (SADT)";
 choices[71][1] = "An&aacute;lisis Coste/Beneficio";
 choices[71][2] = "An&aacute;lisis de Impacto";
 choices[71][3] = "Casos de Uso";
 answers[71] = choices[71][2];
 units[71] = "86";
 comments[71] = "Id Pregunta: 6622. NULL";


//  Id pregunta: 8214 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  En la aprobaci&oacute;n del Plan de Sistemas de Informaci&oacute;n en la metodolog&iacute;a M&eacute;trica versi&oacute;n 3 participan:";
 choices[72]= new Array();
 choices[72][0] = "Comit&eacute; de Direcci&oacute;n y jefe de proyecto del PSI.";
 choices[72][1] = "Comit&eacute; de Direcci&oacute;n, jefe de proyecto y usuarios expertos.";
 choices[72][2] = "Comit&eacute; de Direcci&oacute;n, consultores y jefe de proyecto.";
 choices[72][3] = "Jefe de proyecto, responsable de seguridad y usuarios expertos.";
 answers[72] = choices[72][0];
 units[72] = "86";
 comments[72] = "Id Pregunta: 8214. Examen TIC A1 2010";


//  Id pregunta: 8263 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  Seg&uacute;n Lientz y Swanson y a diferencia de M&Eacute;TRICA versi&oacute;n 3, entre los 4 tipos de mantenimiento de sistemas de informaci&oacute;n, se encuentra:";
 choices[73]= new Array();
 choices[73][0] = "Mantenimiento preventivo.";
 choices[73][1] = "Mantenimiento perfectivo.";
 choices[73][2] = "Mantenimiento adaptativo.";
 choices[73][3] = "Mantenimiento correctivo.";
 answers[73] = choices[73][0];
 units[73] = "86";
 comments[73] = "Id Pregunta: 8263. Examen TIC A1 2010";


//  Id pregunta: 8336 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  Se&ntilde;ale cu&aacute;l de las siguientes NO es una t&eacute;cnica de la Interfaz de Gesti&oacute;n de proyectos de la metodolog&iacute;a M&eacute;trica v3:";
 choices[74]= new Array();
 choices[74][0] = "Diagrama de Extrapolaci&oacute;n.";
 choices[74][1] = "Staffing Size.";
 choices[74][2] = "Catalogaci&oacute;n.";
 choices[74][3] = "Diagrama de Gantt.";
 answers[74] = choices[74][2];
 units[74] = "86";
 comments[74] = "Id Pregunta: 8336. Examen TIC A2 2010";


//  Id pregunta: 8340 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  &iquest;Qu&eacute; tipo de diagrama permite representar un algoritmo?";
 choices[75]= new Array();
 choices[75][0] = "Diagrama de Clases.";
 choices[75][1] = "Flujograma de Sistemas.";
 choices[75][2] = "Flujograma de Programas.";
 choices[75][3] = "Diagrama de Flujo de Datos.";
 answers[75] = choices[75][2];
 units[75] = "86";
 comments[75] = "Id Pregunta: 8340. Examen TIC A2 2010";


//  Id pregunta: 8342 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  &iquest;Qu&eacute; se intenta conseguir al aplicar t&eacute;cnicas de desnormalizaci&oacute;n en algunas tablas en una base de datos que fue normalizada previamente?";
 choices[76]= new Array();
 choices[76][0] = "Optimizar el desempe&ntilde;o de la base de datos.";
 choices[76][1] = "Evitar datos redundantes.";
 choices[76][2] = "Proteger la integridad de los datos.";
 choices[76][3] = "Facilitar el uso al usuano final.";
 answers[76] = choices[76][0];
 units[76] = "86";
 comments[76] = "Id Pregunta: 8342. Examen TIC A2 2010";


//  Id pregunta: 8372 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  El mantenimiento que tiene por objeto adelantarse al deterioro de los equipos como consecuencia del uso y del paso del tiempo se denomina:";
 choices[77]= new Array();
 choices[77][0] = "Mantenimiento adaptativo.";
 choices[77][1] = "Mantenimiento preventivo.";
 choices[77][2] = "Mantenimiento correctivo.";
 choices[77][3] = "Mantenimiento evolutivo.";
 answers[77] = choices[77][1];
 units[77] = "86";
 comments[77] = "Id Pregunta: 8372. Examen TIC A2 2010";


//  Id pregunta: 8387 AÃ±o de creación de pregunta: 2011-01-01
 questions[78]= "79)  &iquest;Cu&aacute;l de los siguientes productos resultan del proceso de Construcci&oacute;n del SI seg&uacute;n M&eacute;trica v3?";
 choices[78]= new Array();
 choices[78][0] = "Cat&aacute;logo de Requisitos.";
 choices[78][1] = "Especificaciones de Construcci&oacute;n del Sistema.";
 choices[78][2] = "Modelo de Datos.";
 choices[78][3] = "Manuales de Usuario.";
 answers[78] = choices[78][3];
 units[78] = "86";
 comments[78] = "Id Pregunta: 8387. Examen TIC A2 2010";


//  Id pregunta: 8516 AÃ±o de creación de pregunta: 2011-01-01
 questions[79]= "80)  &iquest;Qu&eacute; tipo de diagrama permite representar un algoritmo?";
 choices[79]= new Array();
 choices[79][0] = "Diagrama de Clases.";
 choices[79][1] = "Flujograma de Sistemas.";
 choices[79][2] = "Flujograma de Programas.";
 choices[79][3] = "Diagrama de Flujo de Datos.";
 answers[79] = choices[79][2];
 units[79] = "86";
 comments[79] = "Id Pregunta: 8516. Examen TIC A2 2010 interna";


//  Id pregunta: 8619 AÃ±o de creación de pregunta: 2011-01-01
 questions[80]= "81)  &iquest;Qu&eacute; tipos de mantenimiento contempla M&eacute;trica v3 en su proceso MSI?:";
 choices[80]= new Array();
 choices[80][0] = "Correctivo, evolutivo y adaptativo";
 choices[80][1] = "Correctivo, evolutivo, adaptativo y perfectivo";
 choices[80][2] = "Correctivo y evolutivo";
 choices[80][3] = "Correctivo, evolutivo y perfectivo.";
 answers[80] = choices[80][2];
 units[80] = "86";
 comments[80] = "Id Pregunta: 8619. Examen TIC A2 2010 interna";


//  Id pregunta: 8634 AÃ±o de creación de pregunta: 2011-01-01
 questions[81]= "82)  Seg&uacute;n M&eacute;trica v3, &iquest;cu&aacute;l de los siguientes NO es un grupo de actividad de la Gesti&oacute;n de Proyectos?";
 choices[81]= new Array();
 choices[81][0] = "Actividades de Seguimiento y Control.";
 choices[81][1] = "Actividades de Planificaci&oacute;n del Proyecto.";
 choices[81][2] = "Actividades de Finalizaci&oacute;n del Proyecto.";
 choices[81][3] = "Actividades de Inicio del Proyecto.";
 answers[81] = choices[81][1];
 units[81] = "86";
 comments[81] = "Id Pregunta: 8634. Examen TIC A2 2010 interna";


//  Id pregunta: 8636 AÃ±o de creación de pregunta: 2011-01-01
 questions[82]= "83)  El proceso de desarrollo de M&eacute;trica v3 contiene todas las actividades y tareas que se deben llevar a cabo para:";
 choices[82]= new Array();
 choices[82][0] = "Desarrollar un sistema, cubriendo desde el an&aacute;lisis de requisitos hasta la instalaci&oacute;n del software.";
 choices[82][1] = "Desarrollar un sistema, cubriendo desde el an&aacute;lisis del sistema hasta la construcci&oacute;n del software.";
 choices[82][2] = "Desarrollar un sistema, cubriendo desde el dise&ntilde;o hasta la construcci&oacute;n del software.";
 choices[82][3] = "Desarrollar un sistema, cubriendo desde el an&aacute;lisis de requisitos hasta el mantenimiento del software.";
 answers[82] = choices[82][0];
 units[82] = "86";
 comments[82] = "Id Pregunta: 8636. Examen TIC A2 2010 interna";


//  Id pregunta: 8653 AÃ±o de creación de pregunta: 2011-01-01
 questions[83]= "84)  Seg&uacute;n M&eacute;trica v3, &iquest;cu&aacute;l de las siguientes es una prueba perteneciente a las pruebas del sistema?";
 choices[83]= new Array();
 choices[83][0] = "Pruebas globales.";
 choices[83][1] = "Pruebas Integradas.";
 choices[83][2] = "Pruebas funcionales.";
 choices[83][3] = "Pruebas unitarias.";
 answers[83] = choices[83][2];
 units[83] = "86";
 comments[83] = "Id Pregunta: 8653. Examen TIC A2 2010 interna";


//  Id pregunta: 8820 AÃ±o de creación de pregunta: 2011-01-01
 questions[84]= "85)  El objetivo del Plan de Sistemas de Informaci&oacute;n es:";
 choices[84]= new Array();
 choices[84][0] = "Proporcionar un marco estrat&eacute;gico que sirva de referencia para los Sistemas de Informaci&oacute;n de un &aacute;mbito concreto de una organizaci&oacute;n.";
 choices[84][1] = "El an&aacute;lisis de un conjunto concreto de necesidades para proponer una soluci&oacute;n a corto plazo, que tenga en cuenta restricciones econ&oacute;micas, t&eacute;cnicas, legales y operativas.";
 choices[84][2] = "a y b son correctas.";
 choices[84][3] = "Ninguna de las anteriores.";
 answers[84] = choices[84][0];
 units[84] = "27, 86";
 comments[84] = "Id Pregunta: 8820. Examen UPM A2 2011";


//  Id pregunta: 8874 AÃ±o de creación de pregunta: 2011-01-01
 questions[85]= "86)  En la tarea &ldquo;Valoraci&oacute;n de los Sistemas de Informaci&oacute;n actuales&rdquo;, encuadrado en la Planificaci&oacute;n de un Sistema de Informaci&oacute;n, participan seg&uacute;n M&eacute;trica versi&oacute;n 3:";
 choices[85]= new Array();
 choices[85][0] = "Consultores y Consultores Inform&aacute;ticos";
 choices[85][1] = "Consultores y Jefes de Proyecto";
 choices[85][2] = "Consultores Inform&aacute;ticos y Usuarios Expertos";
 choices[85][3] = "Analistas y Jefes de Proyecto";
 answers[85] = choices[85][0];
 units[85] = "86";
 comments[85] = "Id Pregunta: 8874. Analista Ayto. Madrid 2010";


//  Id pregunta: 9187 AÃ±o de creación de pregunta: 2013-01-01
 questions[86]= "87)  &iquest; Qu&eacute; afirmaci&oacute;n sobre M&eacute;trica 3 es falsa ?";
 choices[86]= new Array();
 choices[86][0] = "El mantenimiento Adaptativo no se adapta a las nuevas necesidades del usuario";
 choices[86][1] = "La valoraci&oacute;n de los riesgos de la soluci&oacute;n se lleva a cabo en el Estudio de Viabilidad";
 choices[86][2] = "El cat&aacute;logo de requisitos queda inamovible desde el final del An&aacute;lisis de Sistema de Informaci&oacute;n";
 choices[86][3] = "La migraci&oacute;n y carga de datos se tiene en cuenta tanto en el An&aacute;lisis como en el Dise&ntilde;o";
 answers[86] = choices[86][2];
 units[86] = "86";
 comments[86] = "Id Pregunta: 9187. NULL";


//  Id pregunta: 9188 AÃ±o de creación de pregunta: 2013-01-01
 questions[87]= "88)  &iquest;En qu&eacute; proceso se llevan a cabo las pruebas de sistema?";
 choices[87]= new Array();
 choices[87][0] = "ASI";
 choices[87][1] = "DSI";
 choices[87][2] = "CSI";
 choices[87][3] = "IAS";
 answers[87] = choices[87][2];
 units[87] = "86";
 comments[87] = "Id Pregunta: 9188. NULL";


//  Id pregunta: 9443 AÃ±o de creación de pregunta: 2013-01-01
 questions[88]= "89)  En un diagrama de transici&oacute;n de estados, seg&uacute;n M&eacute;trica v3:";
 choices[88]= new Array();
 choices[88][0] = "Se puede representar m&aacute;s de un estado inicial, que ir&aacute;n conectados al primer estado del diagrama.";
 choices[88][1] = "En los sistemas de tiempo real puede haber transiciones que partan del estado final.";
 choices[88][2] = "Pueden existir varios estados finales, pero ser&aacute;n mutuamente excluyentes.";
 choices[88][3] = "Los elementos permitidos ser&aacute;n &uacute;nicamente estados, transiciones y acciones.";
 answers[88] = choices[88][2];
 units[88] = "86";
 comments[88] = "Id Pregunta: 9443. Examen AGE TIC A1 2011";


//  Id pregunta: 9707 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  Seg&uacute;n la metodolog&iacute;a M&eacute;trica V3 Estudio de Viabilidad del Sistema, indicar en qu&eacute; actividad se realiza la tarea &ldquo;Estudio de la Inversi&oacute;n&rdquo;.";
 choices[89]= new Array();
 choices[89][0] = "Estudio de Alternativas de Soluci&oacute;n.";
 choices[89][1] = "Definici&oacute;n de Requisitos del Sistema.";
 choices[89][2] = "Estudio de la Situaci&oacute;n Actual.";
 choices[89][3] = "Valoraci&oacute;n de las Alternativas.";
 answers[89] = choices[89][3];
 units[89] = "86";
 comments[89] = "Id Pregunta: 9707. Examen TIC-A1 2013";


//  Id pregunta: 9756 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  &iquest;En qu&eacute; actividad de M&eacute;trica v3 se formaliza el Plan de Mantenimiento?";
 choices[90]= new Array();
 choices[90][0] = "IAS.3 Incorporaci&oacute;n del sistema al entorno de operaci&oacute;n";
 choices[90][1] = "IAS.7 Preparaci&oacute;n del Mantenimiento del sistema";
 choices[90][2] = "IAS.8 Establecimiento del acuerdo de nivel de servicio";
 choices[90][3] = "DSI.11 Establecimiento de requisitos de implantaci&oacute;n";
 answers[90] = choices[90][1];
 units[90] = "86";
 comments[90] = "Id Pregunta: 9756. IAS.7.2 Formalizaci&oacute;n del Plan de Mantenimiento";


//  Id pregunta: 9764 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  En M&eacute;trica v3, &iquest;cu&aacute;l de los siguientes no es un perfil participante?";
 choices[91]= new Array();
 choices[91][0] = "Directivo";
 choices[91][1] = "Jefe de Proyecto";
 choices[91][2] = "Consultor";
 choices[91][3] = "Usuario experto";
 answers[91] = choices[91][3];
 units[91] = "86";
 comments[91] = "Id Pregunta: 9764. Seg&uacute;n M&eacute;trica v3, el usuario experto estar&iacute;a englobado en el perfil &quot;Directivo&quot;.";


//  Id pregunta: 9809 AÃ±o de creación de pregunta: 2014-01-01
 questions[92]= "93)  Seg&uacute;n M&eacute;trica v3, en el contexto del modelo entidad-relaci&oacute;n extendido, se&ntilde;ale la opci&oacute;n INCORRECTA:";
 choices[92]= new Array();
 choices[92][0] = "La cardinalidad representa la participaci&oacute;n en la relaci&oacute;n de cada una de las entidades afectadas. ";
 choices[92][1] = "Un tipo de entidad describe el esquema o intensi&oacute;n para un conjunto de entidades que poseen la misma estructura. ";
 choices[92][2] = "Cuando las ocurrencias de una entidad no pueden existir si desaparece el ejemplar del tipo de entidad regular del cual depende, se dice que existe una dependencia en existencia. ";
 choices[92][3] = "La agregaci&oacute;n, consiste en relacionar dos tipos de entidades que normalmente son de dominios independientes, pero coyunturalmente se asocian. ";
 answers[92] = choices[92][3];
 units[92] = "86";
 comments[92] = "Id Pregunta: 9809. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9905 AÃ±o de creación de pregunta: 2014-01-01
 questions[93]= "94)  La finalidad principal de la Gesti&oacute;n de Proyectos seg&uacute;n M&eacute;trica v3 es la planificaci&oacute;n, el seguimiento y control de:";
 choices[93]= new Array();
 choices[93][0] = "Las actividades y de los recursos humanos que intervienen en el desarrollo de un Sistema de Informaci&oacute;n (S.I).";
 choices[93][1] = "Las actividades que intervienen en el desarrollo de un S.I.";
 choices[93][2] = "Las actividades y de los recursos humanos y materiales que intervienen en el desarrollo de un S.I.";
 choices[93][3] = "Los recursos humanos y materiales que intervienen en el desarrollo de un S.I.";
 answers[93] = choices[93][2];
 units[93] = "86";
 comments[93] = "Id Pregunta: 9905. TIC A2, Examen 2013";


//  Id pregunta: 10515 AÃ±o de creación de pregunta: 2014-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l de las siguientes respuestas NO se emplea para realizar pruebas de carga?";
 choices[94]= new Array();
 choices[94][0] = "Jmeter";
 choices[94][1] = "Loadrunner";
 choices[94][2] = "Grinder";
 choices[94][3] = "Turbine";
 answers[94] = choices[94][3];
 units[94] = "86";
 comments[94] = "Id Pregunta: 10515. TIC A2, libre, examen 2013";


//  Id pregunta: 10630 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Cu&aacute;l de estas no es una novedad de M&eacute;trica v3 con respecto a M&eacute;trica v2?";
 choices[95]= new Array();
 choices[95][0] = "Propone un conjunto de t&eacute;cnicas para obtener los productos intermedios y finales.";
 choices[95][1] = "Cubre tanto el desarrollo estructurado como el desarrollo orientado a objetos.";
 choices[95][2] = "Su estructura est&aacute; basada en procesos de entrada, transformaci&oacute;n y salida seg&uacute;n ISO 12207.";
 choices[95][3] = "Se incluyen interfaces para aspectos de gesti&oacute;n.";
 answers[95] = choices[95][0];
 units[95] = "86";
 comments[95] = "Id Pregunta: 10630. ";


//  Id pregunta: 10631 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  El proceso de M&eacute;trica v3 &ldquo;Planificaci&oacute;n de los Sistemas de Informaci&oacute;n&rdquo; (PSI) tiene como objetivo:";
 choices[96]= new Array();
 choices[96][0] = "Obtener una especificaci&oacute;n detallada del sistema de informaci&oacute;n.";
 choices[96][1] = "Proponer una arquitectura de la informaci&oacute;n a alto nivel.";
 choices[96][2] = "Analizar las necesidades del sistema y proponer una soluci&oacute;n a corto plazo.";
 choices[96][3] = "Obtener una nueva versi&oacute;n de un sistema de informaci&oacute;n preexistente.";
 answers[96] = choices[96][1];
 units[96] = "86";
 comments[96] = "Id Pregunta: 10631. ";


//  Id pregunta: 10829 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Seg&uacute;n M&eacute;trica v3, los flujos de datos de tipo di&aacute;logo, que comunican procesos con almacenes en un DFD (diagrama de flujo de datos) son aquellos que:";
 choices[97]= new Array();
 choices[97][0] = "Representan la utilizaci&oacute;n de los valores de uno o m&aacute;s campos de un almac&eacute;n o la comprobaci&oacute;n de que los valores de los campos seleccionados cumplen unos criterios determinados.";
 choices[97][1] = "Representan una consulta y una actualizaci&oacute;n entre el proceso y el almac&eacute;n.";
 choices[97][2] = "Representan la alteraci&oacute;n de los datos de un almac&eacute;n como consecuencia de la creaci&oacute;n de un nuevo elemento, por eliminaci&oacute;n o modificaci&oacute;n de otros ya existentes.";
 choices[97][3] = "Representan un trigger programado entre el proceso y el almac&eacute;n.";
 answers[97] = choices[97][1];
 units[97] = "86, 81";
 comments[97] = "Id Pregunta: 10829. Examen GSI 2014";


//  Id pregunta: 11006 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  En el desarrollo orientado a objetos, dos casos de uso pueden estar relacionados mediante una relaci&oacute;n include, y reciben los nombres de caso base y caso de inclusi&oacute;n. Se&ntilde;ale la respuesta correcta:";
 choices[98]= new Array();
 choices[98][0] = "La ubicaci&oacute;n de la inclusi&oacute;n en el caso base es impl&iacute;cita. Es decir, es una sentencia expl&iacute;cita dentro de la secuencia de comportamiento del caso de uso base.";
 choices[98][1] = "El caso de uso de inclusi&oacute;n indica una secuencia adicional de comportamiento cuya ejecuci&oacute;n depende de una condici&oacute;n.";
 choices[98][2] = "El caso de uso de inclusi&oacute;n no puede acceder a atributos u operaciones del caso de uso base.";
 choices[98][3] = "Solo puede haber una relaci&oacute;n de inclusi&oacute;n para un caso de uso base.";
 answers[98] = choices[98][0];
 units[98] = "86";
 comments[98] = "Id Pregunta: 11006. TIC A1 AGE 2014";


//  Id pregunta: 11311 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  La metodolog&iacute;a M&eacute;trica 3, contempla el uso de la t&eacute;cnica de an&aacute;lisis coste / beneficio. Se&ntilde;ale qu&eacute; caracteriza su uso.";
 choices[99]= new Array();
 choices[99][0] = "Se utiliza en etapas medias y tard&iacute;as del proyecto";
 choices[99][1] = "Sugiere utilizarla en PSI (a la hora de definir el plan de acci&oacute;n y la arquitectura tecnol&oacute;gica)";
 choices[99][2] = "Para su uso se determinan costes tangibles e intangibles y beneficios tangibles";
 choices[99][3] = "Se desaconseja su uso en EVS, cuando se valoran las alternativas";
 answers[99] = choices[99][1];
 units[99] = "86";
 comments[99] = "Id Pregunta: 11311. ";


