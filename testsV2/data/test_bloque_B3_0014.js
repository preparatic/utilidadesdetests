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

//  Id pregunta: 222 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  En la planificaci&oacute;n de un proyecto no debemos realizar las siguientes tareas:";
 choices[0]= new Array();
 choices[0][0] = "Definici&oacute;n de los requerimientos";
 choices[0][1] = "Selecci&oacute;n de una metodolog&iacute;a de gesti&oacute;n de proyecto";
 choices[0][2] = "Reclutamiento de personal y asignaci&oacute;n de tareas";
 choices[0][3] = "An&aacute;lisis de riesgos y revisi&oacute;n inicial de seguridad";
 answers[0] = choices[0][2];
 units[0] = "77";
 comments[0] = "Id Pregunta: 222. ";


//  Id pregunta: 2001 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  Una de las siguientes t&eacute;cnicas no se considera habitualmente como m&eacute;todo para la planificaci&oacute;n de la capacidad de un sistema inform&aacute;tico:";
 choices[1]= new Array();
 choices[1][0] = "De prueba y error sobre distintas implantaciones";
 choices[1][1] = "Anal&iacute;ticas";
 choices[1][2] = "De simulaci&oacute;n";
 choices[1][3] = "De &quot;bench-mark&quot;";
 answers[1] = choices[1][0];
 units[1] = "26";
 comments[1] = "Id Pregunta: 2001. Preparatic XVII";


//  Id pregunta: 2008 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  Se desea desarrollar un proyecto con programaci&oacute;n orientada a objetos en el que va a ser necesario utilizar herencia m&uacute;ltiple. &iquest;Qu&eacute; lenguaje no vamos a poder usar?";
 choices[2]= new Array();
 choices[2][0] = "Python.";
 choices[2][1] = "C++.";
 choices[2][2] = "Eiffel.";
 choices[2][3] = "Smalltalk.";
 answers[2] = choices[2][3];
 units[2] = "84";
 comments[2] = "Id Pregunta: 2008. Similar a examen TIC MAP A 2004";


//  Id pregunta: 2030 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  En UML, los diagramas que describen bajo la forma de acciones y reacciones el comportamiento de un sistema desde el punto de vista de un usuario, se denominan:";
 choices[3]= new Array();
 choices[3][0] = "casos de uso";
 choices[3][1] = "diagrama de estados";
 choices[3][2] = "diagrama de actividades";
 choices[3][3] = "diagrama de secuencia";
 answers[3] = choices[3][0];
 units[3] = "82";
 comments[3] = "Id Pregunta: 2030. Similar a examen TIC SS A 2003";


//  Id pregunta: 2097 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  En la actualidad existen dos est&aacute;ndares importantes sobre diccionario de recursos de la informaci&oacute;n. Entre los organismos que han participado en su elaboraci&oacute;n est&aacute;:";
 choices[4]= new Array();
 choices[4][0] = "IEEE";
 choices[4][1] = "CENELEC ";
 choices[4][2] = "DELFOS";
 choices[4][3] = "IEC";
 answers[4] = choices[4][3];
 units[4] = "96";
 comments[4] = "Id Pregunta: 2097. NULL";


//  Id pregunta: 2120 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;Cu&aacute;l de las siguientes actividades no se engloba, en M&eacute;trica V3, en el proceso &lsquo;An&aacute;lisis del Sistema de Informaci&oacute;n&rsquo;?:";
 choices[5]= new Array();
 choices[5][0] = "An&aacute;lisis de Casos de Uso";
 choices[5][1] = "Elaboraci&oacute;n del Modelo de Procesos";
 choices[5][2] = "Generaci&oacute;n de especificaciones de construcci&oacute;n";
 choices[5][3] = "Especificaci&oacute;n del plan de pruebas";
 answers[5] = choices[5][2];
 units[5] = "86";
 comments[5] = "Id Pregunta: 2120. NULL";


//  Id pregunta: 2165 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Indique cu&aacute;l de las respuestas no forma parte de la documentaci&oacute;n t&eacute;cnica de un sistema de informaci&oacute;n:";
 choices[6]= new Array();
 choices[6][0] = "Relaci&oacute;n condiciones de error-acciones";
 choices[6][1] = "Descripciones narrativas de los m&oacute;dulos de los programas";
 choices[6][2] = "Listados del c&oacute;digo objeto";
 choices[6][3] = "Procedimientos de backup-recovery";
 answers[6] = choices[6][2];
 units[6] = "86";
 comments[6] = "Id Pregunta: 2165. NULL";


//  Id pregunta: 2228 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  A las herramientas CASE que abarcan las &uacute;ltimas fases del ciclo de vida (dise&ntilde;o detallado y generaci&oacute;n de c&oacute;digo) se las denomina:";
 choices[7]= new Array();
 choices[7][0] = "Superiores (upper CASE).";
 choices[7][1] = "Inferiores (lower CASE).";
 choices[7][2] = "Las 2 anteriores son correctas.";
 choices[7][3] = "Todas son falsas.";
 answers[7] = choices[7][1];
 units[7] = "91";
 comments[7] = "Id Pregunta: 2228. ";


//  Id pregunta: 2259 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Diferentes t&eacute;cnicas para expresar la l&oacute;gica interna de los procesos primitivos son:";
 choices[8]= new Array();
 choices[8][0] = "Lenguaje narrativo, tablas de decisi&oacute;n y pseudoc&oacute;digo";
 choices[8][1] = "Pre/post condiciones, diagramas de flujo, lenguajes formales";
 choices[8][2] = "Todas las anteriores son t&eacute;cnicas usadas v&aacute;lidas";
 choices[8][3] = "Ninguna de las anteriores es una t&eacute;cnica usada v&aacute;lida";
 answers[8] = choices[8][2];
 units[8] = "81";
 comments[8] = "Id Pregunta: 2259. ";


//  Id pregunta: 2272 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  El diagrama que representa los componentes f&iacute;sicos de una aplicaci&oacute;n y sus relaciones con el entorno es el de:";
 choices[9]= new Array();
 choices[9][0] = "componentes";
 choices[9][1] = "despliegue";
 choices[9][2] = "interacci&oacute;n";
 choices[9][3] = "colaboraci&oacute;n";
 answers[9] = choices[9][0];
 units[9] = "86";
 comments[9] = "Id Pregunta: 2272. NULL";


//  Id pregunta: 2295 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  El objetivo del modelo conceptual es:";
 choices[10]= new Array();
 choices[10][0] = "Establecer una visi&oacute;n global de los datos";
 choices[10][1] = "Establecer el detalle de las propiedades";
 choices[10][2] = "Definir las propiedades de cada entidad";
 choices[10][3] = "Definir el flujo de informaci&oacute;n";
 answers[10] = choices[10][0];
 units[10] = "80";
 comments[10] = "Id Pregunta: 2295. ";


//  Id pregunta: 2373 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Es falso que dependiendo del proyecto a que se aplique COCOMO, podemos clasificar los sistemas como:";
 choices[11]= new Array();
 choices[11][0] = "Org&aacute;nico";
 choices[11][1] = "Semi-org&aacute;nico";
 choices[11][2] = "Semi-acoplado";
 choices[11][3] = "Empotrado";
 answers[11] = choices[11][1];
 units[11] = "89";
 comments[11] = "Id Pregunta: 2373. NULL";


//  Id pregunta: 2376 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Es una m&eacute;trica de complejidad:";
 choices[12]= new Array();
 choices[12][0] = "Halstead";
 choices[12][1] = "McCavendish";
 choices[12][2] = "McCall";
 choices[12][3] = "Dominique";
 answers[12] = choices[12][0];
 units[12] = "88";
 comments[12] = "Id Pregunta: 2376. ";


//  Id pregunta: 2456 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Los diagramas de flujos de datos son una de las t&eacute;cnicas utilizadas en la metodolog&iacute;a METRICA cuyo objetivo es construir un modelo l&oacute;gico del sistema que facilite la comprensi&oacute;n del mismo. Indique la respuesta que incluye los elementos utilizados en esa t&eacute;cnica:";
 choices[13]= new Array();
 choices[13][0] = "Atributos, relaciones y entidades";
 choices[13][1] = "Entidades externas al sistema, procesos y almacenes de datos";
 choices[13][2] = "Entradas, funciones de transformaci&oacute;n y salidas";
 choices[13][3] = "Niveles, diagramas y objetos";
 answers[13] = choices[13][1];
 units[13] = "86";
 comments[13] = "Id Pregunta: 2456. NULL";


//  Id pregunta: 2481 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  Respecto a la construcci&oacute;n de un prototipo podemos decir:";
 choices[14]= new Array();
 choices[14][0] = "Es el proceso que facilita al programador la creaci&oacute;n del modelo de software a construir";
 choices[14][1] = "Puede adoptar la forma de un 'prototipo que funcione' que describa la interacci&oacute;n hombre-m&aacute;quina, de forma que facilite al usuario la comprensi&oacute;n de c&oacute;mo funcionar&aacute; tal trabajo";
 choices[14][2] = "Puede adoptar la forma de 'un prototipo que funcione' que implementa algunos subconjuntos de la funcionalidad requerida al software deseado";
 choices[14][3] = "Todas las respuestas anteriores son ciertas";
 answers[14] = choices[14][3];
 units[14] = "85";
 comments[14] = "Id Pregunta: 2481. ";


//  Id pregunta: 2521 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  &iquest;Cu&aacute;l de las siguientes denominaciones no se relaciona con un formato de imagen digital?:";
 choices[15]= new Array();
 choices[15][0] = "MrSID";
 choices[15][1] = "PSD";
 choices[15][2] = "PAL";
 choices[15][3] = "TIFF";
 answers[15] = choices[15][2];
 units[15] = "93";
 comments[15] = "Id Pregunta: 2521. NULL";


//  Id pregunta: 2525 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  El tipo de indizaci&oacute;n por descriptores es el m&aacute;s utilizado en la indizaci&oacute;n asistida por ordenador, y puede realizarse mediante distintos m&eacute;todos. &iquest;Cu&aacute;l de los rese&ntilde;ados no ser&iacute;a un m&eacute;todo de indizaci&oacute;n?:";
 choices[16]= new Array();
 choices[16][0] = "El m&eacute;todo estad&iacute;stico";
 choices[16][1] = "El m&eacute;todo por asignaci&oacute;n de conceptos claves del documento";
 choices[16][2] = "El m&eacute;todo sint&aacute;ctico";
 choices[16][3] = "El m&eacute;todo morfol&oacute;gico";
 answers[16] = choices[16][3];
 units[16] = "96";
 comments[16] = "Id Pregunta: 2525. NULL";


//  Id pregunta: 2550 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Una m&aacute;scara en tratamiento digital de im&aacute;genes es:";
 choices[17]= new Array();
 choices[17][0] = "Una matriz num&eacute;rica que se usa para ir haciendo operaciones aritm&eacute;ticas sobre cada uno de los distintos p&iacute;xeles de la imagen, provocando un cambio en los valores de los p&iacute;xeles de la imagen tratada";
 choices[17][1] = "Una zona de la imagen donde no var&iacute;an sus propiedades de color, brillo ni saturaci&oacute;n";
 choices[17][2] = "Una herramienta para poder colorear por capas en los programas ofim&aacute;ticos de tratamiento de im&aacute;genes";
 choices[17][3] = "Nada de lo anterior";
 answers[17] = choices[17][0];
 units[17] = "93";
 comments[17] = "Id Pregunta: 2550. NULL";


//  Id pregunta: 2557 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  El programa IDABC:";
 choices[18]= new Array();
 choices[18][0] = "Pretende el Intercambio de Datos e interoperabilidad entre Adminsitraciones, Empresas y Ciudadanos";
 choices[18][1] = "Contiene tres directivas";
 choices[18][2] = "Financiaba tanto los proyectos horizontales como verticales en su totalidad";
 choices[18][3] = "Fue creado antes que el ENS";
 answers[18] = choices[18][0];
 units[18] = "30";
 comments[18] = "Id Pregunta: 2557. ";


//  Id pregunta: 2579 AÃ±o de creación de pregunta: 2003-01-01
 questions[19]= "20)  &iquest;Cu&aacute;l de los siguientes no es un Lenguaje orientado a objetos?";
 choices[19]= new Array();
 choices[19][0] = "Eiffel";
 choices[19][1] = "C++";
 choices[19][2] = "Smalltalk";
 choices[19][3] = "C";
 answers[19] = choices[19][3];
 units[19] = "82";
 comments[19] = "Id Pregunta: 2579. ";


//  Id pregunta: 2595 AÃ±o de creación de pregunta: 2003-01-01
 questions[20]= "21)  La eliminaci&oacute;n del efecto onda que provocan los cambios introducidos por una petici&oacute;n de mantenimiento de un sistema de informaci&oacute;n se consigne:";
 choices[20]= new Array();
 choices[20][0] = "Con la definici&oacute;n de los puntos de control adecuados en el plan de mantenimiento de sistemas de informaci&oacute;n.";
 choices[20][1] = "A trav&eacute;s de las pruebas de regresi&oacute;n.";
 choices[20][2] = "Con el seguimiento de las referencias cruzadas de los elementos afectados por los cambios.";
 choices[20][3] = "Con la planificaci&oacute;n detallada del desarrollo de los cambios.";
 answers[20] = choices[20][1];
 units[20] = "86";
 comments[20] = "Id Pregunta: 2595. Junta Andaluc&iacute;a";


//  Id pregunta: 2609 AÃ±o de creación de pregunta: 2003-01-01
 questions[21]= "22)  &iquest;Cu&aacute;l de las siguientes afirmaciones con respecto a las conexiones mediante flujos de datos en un DFD (Diagrama de Flujo de Datos) es correcta?";
 choices[21]= new Array();
 choices[21][0] = "  En un DFD los almacenes se pueden conectar con procesos, pero no con otros almacenes ni con entidades externas.";
 choices[21][1] = "  En un DFD los almacenes de datos se pueden conectar con procesos, almacenes pero no con entidades externas.";
 choices[21][2] = "  En un DFD las entidades externas se pueden conectar con procesos y almacenes y entidades externas.";
 choices[21][3] = "En un DFD las entidades externas se pueden conectar con procesos y con otras entidades externas pero no con almacenes.";
 answers[21] = choices[21][0];
 units[21] = "81";
 comments[21] = "Id Pregunta: 2609. ";


//  Id pregunta: 2665 AÃ±o de creación de pregunta: 2003-01-01
 questions[22]= "23)  El n&uacute;mero de bits por p&iacute;xel se define como:";
 choices[22]= new Array();
 choices[22][0] = "Profundidad del p&iacute;xel.";
 choices[22][1] = "Flexibilidad.";
 choices[22][2] = "Diafragma digital.";
 choices[22][3] = "ECW.";
 answers[22] = choices[22][0];
 units[22] = "93";
 comments[22] = "Id Pregunta: 2665. NULL";


//  Id pregunta: 2689 AÃ±o de creación de pregunta: 2004-01-01
 questions[23]= "24)  Los niveles de comportamiento contemplados en el modelo CMM (Capacity Maturity Model) para el desarrollo de software son ...";
 choices[23]= new Array();
 choices[23][0] = "Ca&oacute;tico, inicial, repetible, definido, gestionado y optimizado";
 choices[23][1] = "Inicial, repetible, definido, gestionado y mecanizado";
 choices[23][2] = "Inicial, repetible, definido, gestionado y optimizado";
 choices[23][3] = "Ninguna de las anteriores";
 answers[23] = choices[23][2];
 units[23] = "87,88,92";
 comments[23] = "Id Pregunta: 2689. ";


//  Id pregunta: 2693 AÃ±o de creación de pregunta: 2003-01-01
 questions[24]= "25)  Los servicios de informaci&oacute;n electr&oacute;nica que contienen referencias, algunas veces con extractos, de informaci&oacute;n no publicada, se denominan:";
 choices[24]= new Array();
 choices[24][0] = "Num&eacute;ricos.";
 choices[24][1] = "Directorios.";
 choices[24][2] = "Agendas.";
 choices[24][3] = "Bibliogr&aacute;ficos.";
 answers[24] = choices[24][1];
 units[24] = "94";
 comments[24] = "Id Pregunta: 2693. ";


//  Id pregunta: 2695 AÃ±o de creación de pregunta: 2003-01-01
 questions[25]= "26)  Los Sistemas de Recuperaci&oacute;n de Informaci&oacute;n consistente en r&aacute;pidas ojeadas de selecci&oacute;n buscando referencias en textos sin an&aacute;lisis con profundidad de los contenidos, auxili&aacute;ndose de se&ntilde;aladores impl&iacute;citos y expl&iacute;citos:";
 choices[25]= new Array();
 choices[25][0] = "Se denominan hojeo-ojeo.";
 choices[25][1] = "Son relativamente poco complejos.";
 choices[25][2] = "Todas las anteriores.";
 choices[25][3] = "Ninguna de las anteriores.";
 answers[25] = choices[25][2];
 units[25] = "96";
 comments[25] = "Id Pregunta: 2695. NULL";


//  Id pregunta: 2696 AÃ±o de creación de pregunta: 2003-01-01
 questions[26]= "27)  Los sistemas de recuperaci&oacute;n de informaci&oacute;n llamados de &quot;Lenguaje natural&quot; se basan en la t&eacute;cnica:";
 choices[26]= new Array();
 choices[26][0] = "Hojeo-ojeo.";
 choices[26][1] = "Booleana.";
 choices[26][2] = "Retroalimentaci&oacute;n.";
 choices[26][3] = "De &iacute;ndices invertidos.";
 answers[26] = choices[26][3];
 units[26] = "94";
 comments[26] = "Id Pregunta: 2696. ";


//  Id pregunta: 2739 AÃ±o de creación de pregunta: 2006-01-01
 questions[27]= "28)  &iquest;Cu&aacute;l de los siguientes elementos no es propio de un DFD (Diagrama de Flujo de Datos)?";
 choices[27]= new Array();
 choices[27][0] = "Entidades externas al sistema";
 choices[27][1] = "Bucles";
 choices[27][2] = "Almac&eacute;n de datos";
 choices[27][3] = "Procesos";
 answers[27] = choices[27][1];
 units[27] = "79,81";
 comments[27] = "Id Pregunta: 2739. ";


//  Id pregunta: 2740 AÃ±o de creación de pregunta: 2006-01-01
 questions[28]= "29)  Las pruebas de cobertura de sentencias pasando por todas ellas y probando todas las bifurcaciones programadas son las pruebas de:";
 choices[28]= new Array();
 choices[28][0] = "Caja blanca";
 choices[28][1] = "Caja negra";
 choices[28][2] = "Integraci&oacute;n";
 choices[28][3] = "Aceptaci&oacute;n";
 answers[28] = choices[28][0];
 units[28] = "79";
 comments[28] = "Id Pregunta: 2740. ";


//  Id pregunta: 2747 AÃ±o de creación de pregunta: 2006-01-01
 questions[29]= "30)  La direcci&oacute;n de los flujos entre almac&eacute;n y proceso en un DFD (Diagrama de Flujos de Datos) puede ser:";
 choices[29]= new Array();
 choices[29][0] = "De consulta";
 choices[29][1] = "De actualizaci&oacute;n";
 choices[29][2] = "De di&aacute;logo";
 choices[29][3] = "Todas las anteriores";
 answers[29] = choices[29][3];
 units[29] = "81";
 comments[29] = "Id Pregunta: 2747. ";


//  Id pregunta: 2753 AÃ±o de creación de pregunta: 2006-01-01
 questions[30]= "31)  &iquest;Cu&aacute;les son las cuatro fases del proceso unificado de desarrollo de software?";
 choices[30]= new Array();
 choices[30][0] = "Comienzo, incepci&oacute;n, transici&oacute;n y fin";
 choices[30][1] = "An&aacute;lisis, Dise&ntilde;o, Implementaci&oacute;n y pruebas";
 choices[30][2] = "An&aacute;lisis de requisitos, dise&ntilde;o, desarrollo y pruebas";
 choices[30][3] = "Inicio, elaboraci&oacute;n, construcci&oacute;n y transici&oacute;n";
 answers[30] = choices[30][3];
 units[30] = "82";
 comments[30] = "Id Pregunta: 2753. ";


//  Id pregunta: 2754 AÃ±o de creación de pregunta: 2006-01-01
 questions[31]= "32)  Cual de los siguientes no es una caracteristica del Proceso unificado de desarrollo de software";
 choices[31]= new Array();
 choices[31][0] = "Es iterativo e incremental";
 choices[31][1] = "El dise&ntilde;o comienza siempre al terminar el an&aacute;lisis.";
 choices[31][2] = "Est&aacute; dirigido por los casos de uso";
 choices[31][3] = "Est&aacute; dirigido por la arquitectura.";
 answers[31] = choices[31][1];
 units[31] = "82";
 comments[31] = "Id Pregunta: 2754. ";


//  Id pregunta: 2785 AÃ±o de creación de pregunta: 2006-01-01
 questions[32]= "33)  En M&Eacute;TRICA v.3, el documento de Participantes describe el perfil y el grado deresponsabilidad de las personas que deben participar en la realizaci&oacute;n de cada tarea. A este respecto, &iquest;qu&eacute; perfiles considera la citada metodolog&iacute;a? :";
 choices[32]= new Array();
 choices[32][0] = "Jefe de Proyecto, Analista y Programador.";
 choices[32][1] = "Directivo, Equipo de Proyecto, Usuario y Grupo de Calidad.";
 choices[32][2] = "Jefe de Proyecto, T&eacute;cnico, Analista, Programador y Usuario.";
 choices[32][3] = "Directivo, Consultor, Jefe de Proyecto, Analista y Programador.";
 answers[32] = choices[32][3];
 units[32] = "86";
 comments[32] = "Id Pregunta: 2785. NULL";


//  Id pregunta: 2813 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  El modelo de calidad EFQM";
 choices[33]= new Array();
 choices[33][0] = "Considera 8 criterios y 30 subcriterios";
 choices[33][1] = "Considera 9 criterios y 32 subcriterios";
 choices[33][2] = "Considera 9 criterios y 40 subcriterios";
 choices[33][3] = "El modelo de calidad EFQM no considera criterios sino factores";
 answers[33] = choices[33][1];
 units[33] = "88";
 comments[33] = "Id Pregunta: 2813. NULL";


//  Id pregunta: 2819 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  La distribucci&oacute;n Rayleigh se utiliza en el modelo de estimaci&oacute;n del esfuerzo de desarrollo de un proyecto SW propuesto por:";
 choices[34]= new Array();
 choices[34][0] = "Putnam";
 choices[34][1] = "Walston-Felix";
 choices[34][2] = "Esterling";
 choices[34][3] = "McCall";
 answers[34] = choices[34][0];
 units[34] = "89";
 comments[34] = "Id Pregunta: 2819. NULL";


//  Id pregunta: 2829 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  Algunos de los pasos a realizar en el &quot;mining legacy system assets&quot; son:";
 choices[35]= new Array();
 choices[35][0] = "Rehabilitaci&oacute;n de componentes seleccionados.";
 choices[35][1] = "Reprogramaci&oacute;n de los m&oacute;dulos obsoletos.";
 choices[35][2] = "Realizaci&oacute;n de pruebas detalladas de los componentes del sistema en el nuevo entorno.";
 choices[35][3] = "Ninguna de las anteriores es correcta.";
 answers[35] = choices[35][0];
 units[35] = "90";
 comments[35] = "Id Pregunta: 2829. ";


//  Id pregunta: 4290 AÃ±o de creación de pregunta: 2007-01-01
 questions[36]= "37)  La gesti&oacute;n de la configuraci&oacute;n del software correctamente desempe&ntilde;ada implica identificar la configuraci&oacute;n:";
 choices[36]= new Array();
 choices[36][0] = "Antes del comienzo del ciclo de vida.";
 choices[36][1] = "Solamente al comienzo del ciclo de vida";
 choices[36][2] = "En puntos predefinidos durante el ciclo de vida.";
 choices[36][3] = "Solamente al finalizar el ciclo de vida";
 answers[36] = choices[36][2];
 units[36] = "87";
 comments[36] = "Id Pregunta: 4290. NULL";


//  Id pregunta: 4298 AÃ±o de creación de pregunta: 2007-01-01
 questions[37]= "38)  La adopci&oacute;n de m&eacute;todos formales de especificaci&oacute;n de requisitos:";
 choices[37]= new Array();
 choices[37][0] = "Permite reducir el coste de desarrollo desde el inicio de su adopci&oacute;n en la organizaci&oacute;n.";
 choices[37][1] = "No debe combinarse con los m&eacute;todos convencionales de desarrollo.";
 choices[37][2] = "Aconseja adjuntar comentarios en lenguaje natural a las especificaciones formales";
 choices[37][3] = "Supone una garant&iacute;a de correcci&oacute;n del sistema final.";
 answers[37] = choices[37][2];
 units[37] = "78";
 comments[37] = "Id Pregunta: 4298. ";


//  Id pregunta: 4311 AÃ±o de creación de pregunta: 2007-01-01
 questions[38]= "39)  Durante el desarrollo de un proyecto de software se han detectado dos defectos similares. Uno de ellos se detect&oacute; en la fase de especificaci&oacute;n de requisitos, y el otro en la fase de implementaci&oacute;n. &iquest;Cu&aacute;l de las siguientes afirmaciones sobre este escenario es m&aacute;s probablemente cierta?:";
 choices[38]= new Array();
 choices[38][0] = "El defecto m&aacute;s costoso de corregir ser&aacute; el detectado en la fase de especificaci&oacute;n de requisitos.";
 choices[38][1] = "El defecto m&aacute;s costoso de corregir ser&aacute; el detectado en la fase de implementaci&oacute;n.";
 choices[38][2] = "El coste de corregir ambos defectos ser&aacute; aproximadamente el mismo.";
 choices[38][3] = "No existe relaci&oacute;n entre la fase en la que se detecta un defecto y el coste de su correcci&oacute;n.";
 answers[38] = choices[38][1];
 units[38] = "87";
 comments[38] = "Id Pregunta: 4311. NULL";


//  Id pregunta: 4365 AÃ±o de creación de pregunta: 2007-01-01
 questions[39]= "40)  Un grafo dirigido que tiene un nodo especial desde el cual se puede alcanzar a cualquier otro nodo atravesando un n&uacute;mero finito de arcos de forma &uacute;nica es";
 choices[39]= new Array();
 choices[39][0] = "Un grafo orientado a procesos.";
 choices[39][1] = "Un grafo representado.";
 choices[39][2] = "Una Pila";
 choices[39][3] = "Un &aacute;rbol.";
 answers[39] = choices[39][3];
 units[39] = "";
 comments[39] = "Id Pregunta: 4365. ";


//  Id pregunta: 4403 AÃ±o de creación de pregunta: 2007-01-01
 questions[40]= "41)  &iquest;Cu&aacute;l de los siguientes es una de las cinco categor&iacute;as identificadas como recursos TIC por COBIT?";
 choices[40]= new Array();
 choices[40][0] = "La calidad.";
 choices[40][1] = "La planificaci&oacute;n.";
 choices[40][2] = "La tecnolog&iacute;a.";
 choices[40][3] = "Los est&aacute;ndares.";
 answers[40] = choices[40][2];
 units[40] = "98";
 comments[40] = "Id Pregunta: 4403. NULL";


//  Id pregunta: 4470 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  &iquest;Cual de los siguientes modelos de ciclo de vida no es adecuado para el desarrollo de sistemas de informaci&oacute;n orientados a objetos?";
 choices[41]= new Array();
 choices[41][0] = "Modelo de agrupamiento.";
 choices[41][1] = "Modelo en cascada.";
 choices[41][2] = "Modelo remolino.";
 choices[41][3] = "Modelo pinball.";
 answers[41] = choices[41][1];
 units[41] = "76";
 comments[41] = "Id Pregunta: 4470. ";


//  Id pregunta: 4479 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  En Ia tarea EVS 4.1: Preselecci&oacute;n de Alternativas de soluci&oacute;n, correspondiente al Estudio de Viabilidad del Sistema (Proceso EVS), definido en m&eacute;trica V3 &iquest;cual de las siguientes t&eacute;cnicas y practicas es la que se recomienda?";
 choices[42]= new Array();
 choices[42][0] = "Casos de uso";
 choices[42][1] = "Diagrama de Flujo de Datos";
 choices[42][2] = "Diagrama de Clases";
 choices[42][3] = "Diagrama de Representaci&oacute;n";
 answers[42] = choices[42][3];
 units[42] = "86";
 comments[42] = "Id Pregunta: 4479. NULL";


//  Id pregunta: 4634 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  En M&eacute;trica V3 NO es un tipo de las denominadas Pruebas del Sistema las:";
 choices[43]= new Array();
 choices[43][0] = "pruebas funcionales";
 choices[43][1] = "pruebas de facilidad de uso";
 choices[43][2] = "pruebas de verificaci&oacute;n";
 choices[43][3] = "pruebas de volumen";
 answers[43] = choices[43][2];
 units[43] = "86";
 comments[43] = "Id Pregunta: 4634. NULL";


//  Id pregunta: 4941 AÃ±o de creación de pregunta: 2003-01-01
 questions[44]= "45)  El objetivo en la evaluaci&oacute;n del dise&ntilde;o deber&aacute; ser:";
 choices[44]= new Array();
 choices[44][0] = "M&iacute;nimo acoplamiento posible y cohesi&oacute;n baja.";
 choices[44][1] = "M&aacute;ximo acoplamiento posible y cohesi&oacute;n baja.";
 choices[44][2] = "M&aacute;ximo acoplamiento posible y cohesi&oacute;n alta o media.";
 choices[44][3] = "M&iacute;nimo acoplamiento posible y cohesi&oacute;n alta o media.";
 answers[44] = choices[44][3];
 units[44] = "84";
 comments[44] = "Id Pregunta: 4941. Examen TIC B 2007";


//  Id pregunta: 4995 AÃ±o de creación de pregunta: 2003-01-01
 questions[45]= "46)  &iquest;Cu&aacute;l de los siguientes NO es uno de los principios incluidos en el Manifiesto de Desarrollo &Aacute;gil de Software (Manifesto for Agile Software Development)?:";
 choices[45]= new Array();
 choices[45][0] = "Aceptamos requisitos cambiantes s&oacute;lo en las primeras etapas del desarrollo.";
 choices[45][1] = "Los procesos &aacute;giles promueven el desarrollo sostenido.";
 choices[45][2] = "Entregamos software frecuentemente, con una periodicidad desde un par de semanas a un par de meses,con preferencia por los periodos m&aacute;s cortos posibles.";
 choices[45][3] = "Los responsables de negocio y los desarrolladores deben trabajar juntos diariamente a lo largo del proyecto.";
 answers[45] = choices[45][0];
 units[45] = "76";
 comments[45] = "Id Pregunta: 4995. Examen TIC A 2007";


//  Id pregunta: 5148 AÃ±o de creación de pregunta: 2003-01-01
 questions[46]= "47)  Seg&uacute;n la Metodolog&iacute;a M&eacute;trica V3, &iquest;qu&eacute; interface tiene como finalidad principal la planificaci&oacute;n, el seguimiento y control de las actividades y de los recursos humanos y materiales que intervienen en el desarrollo de un Sistema de Informaci&oacute;n?";
 choices[46]= new Array();
 choices[46][0] = "Aseguramiento de la Calidad.";
 choices[46][1] = "Seguridad.";
 choices[46][2] = "Gesti&oacute;n de la Configuraci&oacute;n.";
 choices[46][3] = "Gesti&oacute;n de Proyectos.";
 answers[46] = choices[46][3];
 units[46] = "86";
 comments[46] = "Id Pregunta: 5148. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5236 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  En relaci&oacute;n del Desarrollo Software Basado en Componentes(DSBC):";
 choices[47]= new Array();
 choices[47][0] = "Tambi&eacute;n llamado &quot;con reutilizaci&oacute;n&quot;, se ensambla el desarrollo con componentes software ya existentes";
 choices[47][1] = "Es adecuado a tecnolog&iacute;as orientadas a objetos";
 choices[47][2] = "El inconveniente es la excesiva dependencia de la calidad, robustez y flexibilidad de las librer&iacute;as de componentes.";
 choices[47][3] = "Todas las anteriores son correctas";
 answers[47] = choices[47][3];
 units[47] = "76";
 comments[47] = "Id Pregunta: 5236. ";


//  Id pregunta: 5240 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  Para el desarrollo de una planificaci&oacute;n estrat&eacute;gica se necesita conocer:";
 choices[48]= new Array();
 choices[48][0] = "La misi&oacute;n de la organizaci&oacute;n";
 choices[48][1] = "Puntos d&eacute;biles y fuertes de la organizaci&oacute;n para sacar partido de ello";
 choices[48][2] = "Los clientes, competidores y accionistas";
 choices[48][3] = "Todas las anteriores.";
 answers[48] = choices[48][3];
 units[48] = "77";
 comments[48] = "Id Pregunta: 5240. ";


//  Id pregunta: 5247 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  Indicar entre las siguientes, cu&aacute;l no se ajusta a definici&oacute;n de calidad del software";
 choices[49]= new Array();
 choices[49][0] = "Conformidad a los requisitos funcionales y prestaciones establecidas, a las normas de desarrollo expl&iacute;citamente documentadas y a las caracter&iacute;sticas impl&iacute;citas que se esperan de todo software desarrollado profesionalmente";
 choices[49][1] = "Creaci&oacute;n de productos software que tanto eficaz como eficientemente cumplan las expectativas del usuario";
 choices[49][2] = "La ausencia de errores o defectos, siendo &eacute;stos las desviaciones respecto al comportamiento esperado";
 choices[49][3] = "Todas las anteriores son definiciones de calidad del software";
 answers[49] = choices[49][3];
 units[49] = "87";
 comments[49] = "Id Pregunta: 5247. NULL";


//  Id pregunta: 5252 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  Entre las ventajas destacadas de ISO 9000:2000 NO se encuentra:";
 choices[50]= new Array();
 choices[50][0] = "Proporciona amplia y detallada informaci&oacute;n de c&oacute;mo aplicarlo en empresas de tama&ntilde;o reducido";
 choices[50][1] = "Incrementa oportunidades de negocio en ciertos mercados y aumenta la satisfacci&oacute;n del cliente";
 choices[50][2] = "Reconocimiento y apariencia internacional, marca de reconocido prestigio";
 choices[50][3] = "Libertad de implementaci&oacute;n e interpretaci&oacute;n de los requisitos";
 answers[50] = choices[50][0];
 units[50] = "87";
 comments[50] = "Id Pregunta: 5252. NULL";


//  Id pregunta: 5254 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  Indique cu&aacute;l de las siguientes opciones describe el nivel 2 del modelo CMM";
 choices[51]= new Array();
 choices[51][0] = "No se han definido procesos metodol&oacute;gicos, o si se han definido no se siguen";
 choices[51][1] = "El proceso de software est&aacute; documentado, homogeneizado e integrado en un proceso de software est&aacute;ndar dentro de la organizaci&oacute;n";
 choices[51][2] = "Se establecen pol&iacute;ticas y procedimientos de administraci&oacute;n e implantaci&oacute;n del modelo b&aacute;sico para determinar costos, calendarios y funcionalidades";
 choices[51][3] = "Se recolectan medidas detalladas del proceso de software y de la calidad del producto Ambos son cuantitativamente entendidos y controlados.";
 answers[51] = choices[51][2];
 units[51] = "87";
 comments[51] = "Id Pregunta: 5254. NULL";


//  Id pregunta: 5487 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  En una representaci&oacute;n gr&aacute;fica del ciclo de vida de desarrollo software en espiral, indicar qu&eacute; es lo que representa la dimensi&oacute;n radial";
 choices[52]= new Array();
 choices[52][0] = "El progreso hecho en completar cada ciclo de la espiral";
 choices[52][1] = "Coste acumulativo en el que se ha incurrido en las etapas realizadas hasta el momento actual";
 choices[52][2] = "El an&aacute;lisis de riesgos";
 choices[52][3] = "Los costes de explotaci&oacute;n del proyecto";
 answers[52] = choices[52][1];
 units[52] = "76";
 comments[52] = "Id Pregunta: 5487. Castilla y Le&oacute;n";


//  Id pregunta: 5528 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  Indicar la respuesta falsa";
 choices[53]= new Array();
 choices[53][0] = "Los niveles del lenguaje son: f&oacute;nico, l&eacute;xico, sint&aacute;ctico y sem&aacute;ntico";
 choices[53][1] = "La se&ntilde;al de voz se puede analizar en dos dominios, el espectral y el temporal";
 choices[53][2] = "La frecuencia fundamental de la voz representa la frecuencia de vibraci&oacute;n de las cuerdas vocales";
 choices[53][3] = "La frecuencia fundamental de la voz masculina es de 120 a 500 Hz y la femenina de 50 a 250 Hz";
 answers[53] = choices[53][3];
 units[53] = "94";
 comments[53] = "Id Pregunta: 5528. ";


//  Id pregunta: 5834 AÃ±o de creación de pregunta: 2009-01-01
 questions[54]= "55)  Indique c&oacute;mo se denomina el patr&oacute;n de dise&ntilde;o que define una dependencia de uno-a-muchos entre objetos, de forma que cuando un objeto cambia de estado se notifica y actualizan autom&aacute;ticamente todos los objetos que dependen de &eacute;l:";
 choices[54]= new Array();
 choices[54][0] = "Strategy.";
 choices[54][1] = "State.";
 choices[54][2] = "Observer.";
 choices[54][3] = "Command.";
 answers[54] = choices[54][2];
 units[54] = "84";
 comments[54] = "Id Pregunta: 5834. MAP 2008 A1";


//  Id pregunta: 5962 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  &iquest;Qu&eacute; elemento NO forma parte del modelo EFQM de excelencia?";
 choices[55]= new Array();
 choices[55][0] = "Procesos";
 choices[55][1] = "Personas";
 choices[55][2] = "Resultados en los clientes";
 choices[55][3] = "Resultados en los proveedores";
 answers[55] = choices[55][3];
 units[55] = "92";
 comments[55] = "Id Pregunta: 5962. Castilla La Mancha 2009";


//  Id pregunta: 6279 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  No es una dificultad del modelo de ciclo de vida en espiral:";
 choices[56]= new Array();
 choices[56][0] = "Dificultad a la hora de definir requisitos";
 choices[56][1] = "Dependencia de la experiencia en la evaluaci&oacute;n de riesgos";
 choices[56][2] = "Necesidad de elaboraci&oacute;n adicional de los pasos del modelo en espiral";
 choices[56][3] = "Adaptar su aplicabilidad al software contratado";
 answers[56] = choices[56][0];
 units[56] = "76";
 comments[56] = "Id Pregunta: 6279. ";


//  Id pregunta: 6285 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de un Plan de Sistemas?";
 choices[57]= new Array();
 choices[57][0] = "Planificar y controlar con eficacia el proceso de mecanizaci&oacute;n";
 choices[57][1] = "Conocer con cierta aproximaci&oacute;n y de forma anticipada las inversiones, los costes de funcionamiento, los resultados esperados, etc";
 choices[57][2] = "Definir los requerimientos t&eacute;cnicos necesarios y suficientes";
 choices[57][3] = "Todos lo son";
 answers[57] = choices[57][3];
 units[57] = "77";
 comments[57] = "Id Pregunta: 6285. ";


//  Id pregunta: 6304 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  &iquest;Cu&aacute;l de los siguientes no es un componente de CORBA?";
 choices[58]= new Array();
 choices[58][0] = "Dynamic Invocation Interface (DII) ";
 choices[58][1] = "Object Request Broker (ORB) ";
 choices[58][2] = "Dynamic Skeleton Interface (DSI)";
 choices[58][3] = "Todos lo son";
 answers[58] = choices[58][3];
 units[58] = "82";
 comments[58] = "Id Pregunta: 6304. ";


//  Id pregunta: 6463 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  Indique cu&aacute;l NO es una t&eacute;cnica de planificaci&oacute;n temporal:";
 choices[59]= new Array();
 choices[59][0] = "WBS (Work Breakdown Structure)";
 choices[59][1] = "PERT (Program Evaluation and Review Technique)";
 choices[59][2] = "Diagrama de Gantt";
 choices[59][3] = "CPM (Critical Path Method)";
 answers[59] = choices[59][0];
 units[59] = "28";
 comments[59] = "Id Pregunta: 6463. Castilla La Mancha 2009";


//  Id pregunta: 6470 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  La metodolog&iacute;a M&eacute;trica V3 plantea la t&eacute;cnica de los casos de uso en la obtenci&oacute;n de requisitos en ASI:";
 choices[60]= new Array();
 choices[60][0] = "Como obligatoria en el desarrollo estructurado y opcional en orientaci&oacute;n a objetos";
 choices[60][1] = "Como opcional en el desarrollo estructurado y obligatoria en orientaci&oacute;n a objetos";
 choices[60][2] = "Como obligatoria, tanto en desarrollo estructurado como en orientaci&oacute;n a objetos";
 choices[60][3] = "Como opcional, tanto en desarrollo estructurado como en orientaci&oacute;n a objetos";
 answers[60] = choices[60][1];
 units[60] = "86";
 comments[60] = "Id Pregunta: 6470. Castilla La Mancha 2009";


//  Id pregunta: 6628 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  En el modelo CMM de Ingenier&iacute;a de Software, dentro del nivel 'Definido' est&aacute;n las &Aacute;reas Clave:";
 choices[61]= new Array();
 choices[61][0] = "Gesti&oacute;n de Cambios Tecol&oacute;gicos y Gesti&oacute;n de Cambios en los Procesos";
 choices[61][1] = "Aseguramiento de la Calidad y Planificaci&oacute;n del Proyecto";
 choices[61][2] = "Gesti&oacute;n Cuantitativa del Proyecto y Gesti&oacute;n de Calidad del Software";
 choices[61][3] = "Gesti&oacute;n Integrada del Software y Coordinaci&oacute;n Intergrupos";
 answers[61] = choices[61][3];
 units[61] = "87";
 comments[61] = "Id Pregunta: 6628. NULL";


//  Id pregunta: 7292 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  Un proveedor de SW de reconocimiento autom&aacute;tico del habla (ASR) es:";
 choices[62]= new Array();
 choices[62][0] = "Nuance";
 choices[62][1] = "Loquendo";
 choices[62][2] = "Telisma";
 choices[62][3] = "Todas las anteriores son correctas";
 answers[62] = choices[62][3];
 units[62] = "94";
 comments[62] = "Id Pregunta: 7292. NULL";


//  Id pregunta: 7303 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  El est&aacute;ndar de la ETSI para reconocimiento del habla distribuido se llama:";
 choices[63]= new Array();
 choices[63][0] = "ATENA";
 choices[63][1] = "AURORA";
 choices[63][2] = "PALAS ATENEA";
 choices[63][3] = "AFRODITA";
 answers[63] = choices[63][1];
 units[63] = "94";
 comments[63] = "Id Pregunta: 7303. NULL";


//  Id pregunta: 7304 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  El est&aacute;ndar AURORA de reconocimiento del habla distribuido es un est&aacute;ndar de:";
 choices[64]= new Array();
 choices[64][0] = "ETSI";
 choices[64][1] = "IEEE";
 choices[64][2] = "NIST";
 choices[64][3] = "ANSI";
 answers[64] = choices[64][0];
 units[64] = "94";
 comments[64] = "Id Pregunta: 7304. NULL";


//  Id pregunta: 8193 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  Seg&uacute;n el RD 589/2005, los Planes estrat&eacute;gicos departamentales en materia de tecnolog&iacute;as de la informaci&oacute;n y Administraci&oacute;n Electr&oacute;nica:";
 choices[65]= new Array();
 choices[65][0] = "Deben tener una duraci&oacute;n de al menos 2 a&ntilde;os. ";
 choices[65][1] = "Deben tener una duraci&oacute;n de al menos 3 a&ntilde;os.";
 choices[65][2] = "Deben tener una duraci&oacute;n de al menos 4 a&ntilde;os. ";
 choices[65][3] = "Pueden tener cualquier duraci&oacute;n siempre y cuando tengan car&aacute;cter verdaderamente estrat&eacute;gico.";
 answers[65] = choices[65][0];
 units[65] = "77";
 comments[65] = "Id Pregunta: 8193. Examen TIC A1 2010";


//  Id pregunta: 8343 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  &iquest;Cu&aacute;l de los siguientes algoritmos de ordenaci&oacute;n es inestable?";
 choices[66]= new Array();
 choices[66][0] = "Merge sort.";
 choices[66][1] = "Bubble sort.";
 choices[66][2] = "Quicksort.";
 choices[66][3] = "Insertion sort.";
 answers[66] = choices[66][2];
 units[66] = "96";
 comments[66] = "Id Pregunta: 8343. Examen TIC A2 2010";


//  Id pregunta: 8369 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  En los diagramas estructurados (Nassi-Schneiderman): ";
 choices[67]= new Array();
 choices[67][0] = "Las flechas de uni&oacute;n son verticales.";
 choices[67][1] = "No hay flechas de uni&oacute;n.";
 choices[67][2] = "Cada posible acci&oacute;n se representa con una figura diferente.";
 choices[67][3] = "Las cajas no son contiguas.";
 answers[67] = choices[67][1];
 units[67] = "81";
 comments[67] = "Id Pregunta: 8369. Examen TIC A2 2010";


//  Id pregunta: 8463 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  &iquest;Qu&eacute; API proporciona un modo para que una aplicaci&oacute;n J2EE autentique y autorice a un usuario especifico o a un grupo de usuarios para su ejecuci&oacute;n?:";
 choices[68]= new Array();
 choices[68][0] = "JNDI";
 choices[68][1] = "JAAS";
 choices[68][2] = "JMS";
 choices[68][3] = "JNI";
 answers[68] = choices[68][1];
 units[68] = "116";
 comments[68] = "Id Pregunta: 8463. Analista Ayto. Madrid 2010";


//  Id pregunta: 8645 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  Indique cu&aacute;l es la respuesta correcta con respecto a los diagramas PERT:";
 choices[69]= new Array();
 choices[69][0] = "Los arcos del grafo representan los sucesos, y los v&eacute;rtices las actividades.";
 choices[69][1] = "En la matriz de encadenamientos aquellas columnas en las que no aparece ninguna X indican las actividades que no tienen ninguna actividad siguiente, es decir, aquellas actividades cuyo suceso final coincide con el suceso fin del proyecto.";
 choices[69][2] = "El cuadro de prelaciones est&eacute; formado por tres columnas En la primera columna est&aacute;n representadas todas las actividades en que se ha descompuesto el proyecto. En la segunda columna figuran las actividades precedentes de su hom&oacute;loga en la primera columna y en la &uacute;ltima columna se muestran las actividades posteriores.";
 choices[69][3] = "La matriz de encadenamientos consiste en una matriz cuadrada cuya dimensi&oacute;n es igual al n&uacute;mero de sucesos en que se ha descompuesto el proyecto.";
 answers[69] = choices[69][1];
 units[69] = "28";
 comments[69] = "Id Pregunta: 8645. Examen TIC A2 2010 interna";


//  Id pregunta: 8891 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  Se&ntilde;ale la respuesta correcta seg&uacute;n M&eacute;trica v3";
 choices[70]= new Array();
 choices[70][0] = "El c&aacute;lculo de accesos es una t&eacute;cnica";
 choices[70][1] = "La normalizaci&oacute;n es una t&eacute;cnica";
 choices[70][2] = "Ambas son pr&aacute;cticas";
 choices[70][3] = "Ambas son t&eacute;cnicas";
 answers[70] = choices[70][1];
 units[70] = "86";
 comments[70] = "Id Pregunta: 8891. NULL";


//  Id pregunta: 8970 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  Entre los agentes del Plan General de Garant&iacute;a de la Calidad no figura:";
 choices[71]= new Array();
 choices[71][0] = "EGC (Eq garant&iacute;a calidad)";
 choices[71][1] = "EDS (Equipo de desarrollo)";
 choices[71][2] = "DIR (Director de proyecto)";
 choices[71][3] = "CDC (Comit&eacute; directivo de calidad)";
 answers[71] = choices[71][3];
 units[71] = "87,88,92";
 comments[71] = "Id Pregunta: 8970. ";


//  Id pregunta: 9082 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  Seg&uacute;n la metodolog&iacute;a M&eacute;trica v.3, el Plan de Sistemas de Informaci&oacute;n debe tener una perspectiva";
 choices[72]= new Array();
 choices[72][0] = "Exclusivamente estrat&eacute;gica, y no tecnol&oacute;gica";
 choices[72][1] = "Estrat&eacute;gica y operativa, y no tecnolog&iacute;ca";
 choices[72][2] = "Exclusivamente estrat&eacute;gica, y fuertemente tecnol&oacute;gica";
 choices[72][3] = "Ninguna de las anteriores";
 answers[72] = choices[72][1];
 units[72] = "77";
 comments[72] = "Id Pregunta: 9082. ";


//  Id pregunta: 9339 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l de los siguientes no es un modelo de COCOMO II?";
 choices[73]= new Array();
 choices[73][0] = "Dise&ntilde;o Arquitectura";
 choices[73][1] = "Dise&ntilde;o Preliminar";
 choices[73][2] = "Composici&oacute;n de la Aplicaci&oacute;n";
 choices[73][3] = "Post-Arquitectura";
 answers[73] = choices[73][0];
 units[73] = "88";
 comments[73] = "Id Pregunta: 9339. NULL";


//  Id pregunta: 9454 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  Seg&uacute;n Codd, una entidad en la que todos los atributos dependen funcionalmente de la clave est&aacute;, al menos, en:";
 choices[74]= new Array();
 choices[74][0] = "Primera Forma Normal.";
 choices[74][1] = "Segunda Forma Normal.";
 choices[74][2] = "Tercera Forma Normal.";
 choices[74][3] = "Forma Normal de Boyce-Codd.";
 answers[74] = choices[74][0];
 units[74] = "58";
 comments[74] = "Id Pregunta: 9454. NULL";


//  Id pregunta: 9455 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  Seg&uacute;n Codd, una entidad en la que todos los atributos tienen dependencia funcional completa de la clave est&aacute;, al menos, en:";
 choices[75]= new Array();
 choices[75][0] = "Primera Forma Normal.";
 choices[75][1] = "Segunda Forma Normal.";
 choices[75][2] = "Tercera Forma Normal.";
 choices[75][3] = "Forma Normal de Boyce-Codd.";
 answers[75] = choices[75][1];
 units[75] = "58";
 comments[75] = "Id Pregunta: 9455. NULL";


//  Id pregunta: 9649 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  FAN-IN es una medida de:";
 choices[76]= new Array();
 choices[76][0] = "Complejidad";
 choices[76][1] = "Reutilizaci&oacute;n";
 choices[76][2] = "Mantenibilidad";
 choices[76][3] = "Ninguna de las anteriores";
 answers[76] = choices[76][1];
 units[76] = "89";
 comments[76] = "Id Pregunta: 9649. N&uacute;mero de clases que hacen uso de la clase que estamos estudiando.";


//  Id pregunta: 9650 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  FAN-OUT es una medida de:";
 choices[77]= new Array();
 choices[77][0] = "Complejidad";
 choices[77][1] = "Reutilizaci&oacute;n";
 choices[77][2] = "Mantenibilidad";
 choices[77][3] = "Ninguna de las anteriores.";
 answers[77] = choices[77][0];
 units[77] = "89";
 comments[77] = "Id Pregunta: 9650. N&uacute;mero de clases que utiliza la clase que estamos estudiando.";


//  Id pregunta: 9908 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  En M&eacute;trica v3 existe una interfaz de &quot;Aseguramiento de la Calidad&quot;. Indique la afirmaci&oacute;n correcta sobre dicho interfaz:";
 choices[78]= new Array();
 choices[78][0] = "Para cada uno de los procesos que se definen en el interfaz se establecen un conjunto de tareas que se desarrollan mediante la ejecuci&oacute;n de diversas actividades.";
 choices[78][1] = "El Grupo de Aseguramiento de la Calidad no participa en todos los procesos que se describen en el interfaz.";
 choices[78][2] = "La &quot;Constituci&oacute;n del equipo de aseguramiento de la calidad&quot; se realiza dentro del proceso de Estudio de Viabilidad del Sistema del interfaz.";
 choices[78][3] = "La aplicaci&oacute;n de dicho interfaz es de obligado cumplimiento para los organismos dependientes de la AGE, seg&uacute;n la Ley 28/2006, de 18 de julio, por la que se crea la Agencia Estatal de Evaluaci&oacute;n de las Pol&iacute;ticas P&uacute;blicas y la Calidad de losServicios.";
 answers[78] = choices[78][2];
 units[78] = "86";
 comments[78] = "Id Pregunta: 9908. TIC A2, Examen 2013";


//  Id pregunta: 9958 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  &iquest;Cu&aacute;l de los siguientes conceptos NO se puede representar a trav&eacute;s de un diagrama de flujo de datos?";
 choices[79]= new Array();
 choices[79][0] = "La persistencia";
 choices[79][1] = "Los procesos de transformaci&oacute;n.";
 choices[79][2] = "El flujo de la informaci&oacute;n.";
 choices[79][3] = "La herencia";
 answers[79] = choices[79][3];
 units[79] = "81";
 comments[79] = "Id Pregunta: 9958. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10008 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  Seg&uacute;n la metodolog&iacute;a M&eacute;trica V3 Estudio de Viabilidad del Sistema, en la actividad &ldquo;Definici&oacute;n de Requisitos del Sistema&rdquo; participan los siguientes grupos de personas:";
 choices[80]= new Array();
 choices[80][0] = "Jefe de proyecto, Analistas y Usuarios Expertos.";
 choices[80][1] = "Jefe de proyecto, Analistas, T&eacute;cnicos de Sistemas y Usuarios Expertos.";
 choices[80][2] = "Jefe de proyecto, Analistas, T&eacute;cnicos de Sistemas, Especialistas en Comunicaciones y Usuarios Expertos.";
 choices[80][3] = "Jefe de proyecto, Analistas, T&eacute;cnicos de Sistemas, Especialistas en Comunicaciones, Responsables de Seguridad y Usuarios Expertos.";
 answers[80] = choices[80][0];
 units[80] = "86";
 comments[80] = "Id Pregunta: 10008. NULL";


//  Id pregunta: 10092 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  &iquest;Cu&aacute;l es el orden cronol&oacute;gico m&aacute;s acertado?";
 choices[81]= new Array();
 choices[81][0] = "BPM, SOA, EAI, ESB";
 choices[81][1] = "EAI, BPM, SOA, ESB";
 choices[81][2] = "EAI, SOA, BPM, ESB";
 choices[81][3] = "BPM, EAI, SOA, ESB";
 answers[81] = choices[81][1];
 units[81] = "79";
 comments[81] = "Id Pregunta: 10092. NULL";


//  Id pregunta: 10097 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  De acuerdo a M&eacute;trica v.3, la pr&aacute;ctica JAD disitngue distinto perfiles. &iquest;Cu&aacute;l NO es uno de ellos?";
 choices[82]= new Array();
 choices[82][0] = "Moderador (l&iacute;der Jad)";
 choices[82][1] = "Desarrolladores";
 choices[82][2] = "Usuarios";
 choices[82][3] = "Analistas";
 answers[82] = choices[82][3];
 units[82] = "78";
 comments[82] = "Id Pregunta: 10097. NULL";


//  Id pregunta: 10450 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  En el &aacute;mbito de la continuidad de negocio, la &quot;ventana de interrupci&oacute;n&quot; se define como:";
 choices[83]= new Array();
 choices[83][0] = "La cantidad de tiempo permitida para la recuperaci&oacute;n de un recurso o funci&oacute;n de negocio despu&eacute;s de que ocurre un desastre.";
 choices[83][1] = "El tiempo que una organizaci&oacute;n puede esperar desde el punto de fallo hasta la restauraci&oacute;n de los servicios o aplicaciones cr&iacute;ticas.";
 choices[83][2] = "Se determina en funci&oacute;n de la p&eacute;rdida de datos aceptable en caso de interrupci&oacute;n de las operaciones ";
 choices[83][3] = "Indica el punto m&aacute;s alejado en el tiempo en le que es aceptable recuperar los datos.";
 answers[83] = choices[83][1];
 units[83] = "97";
 comments[83] = "Id Pregunta: 10450. NULL";


//  Id pregunta: 10630 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  &iquest;Cu&aacute;l de estas no es una novedad de M&eacute;trica v3 con respecto a M&eacute;trica v2?";
 choices[84]= new Array();
 choices[84][0] = "Propone un conjunto de t&eacute;cnicas para obtener los productos intermedios y finales.";
 choices[84][1] = "Cubre tanto el desarrollo estructurado como el desarrollo orientado a objetos.";
 choices[84][2] = "Su estructura est&aacute; basada en procesos de entrada, transformaci&oacute;n y salida seg&uacute;n ISO 12207.";
 choices[84][3] = "Se incluyen interfaces para aspectos de gesti&oacute;n.";
 answers[84] = choices[84][0];
 units[84] = "86";
 comments[84] = "Id Pregunta: 10630. ";


//  Id pregunta: 10637 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  &iquest;Qu&eacute; es el fan-out en dise&ntilde;o estructurado?";
 choices[85]= new Array();
 choices[85][0] = "El grado de acoplamiento externo.";
 choices[85][1] = "El n&uacute;mero de subordinados inmediatos de un m&oacute;dulo.";
 choices[85][2] = "El grado de absorci&oacute;n.";
 choices[85][3] = "El n&uacute;mero de superiores inmediatos de un m&oacute;dulo.";
 answers[85] = choices[85][1];
 units[85] = "84";
 comments[85] = "Id Pregunta: 10637. ";


//  Id pregunta: 10846 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  En el dise&ntilde;o orientado a objetos, la ocultaci&oacute;n del estado o de los datos miembro de un objeto, de forma que s&oacute;lo es posible modificar los mismos mediante los m&eacute;todos definidos para dicho objeto, se conoce como:";
 choices[86]= new Array();
 choices[86][0] = "Abstracci&oacute;n.";
 choices[86][1] = "Polimorfismo.";
 choices[86][2] = "Herencia.";
 choices[86][3] = "Encapsulamiento.";
 answers[86] = choices[86][3];
 units[86] = "84";
 comments[86] = "Id Pregunta: 10846. Examen GSI 2014";


//  Id pregunta: 10989 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  &iquest;A qu&eacute; perfil corresponde en M&eacute;trica 3 la persona que asesora en los aspectos de seguridad y calidad relativos al producto y al proceso seguido para su obtenci&oacute;n, identifica y analiza los riesgos y determina las medidas de control oportunas?";
 choices[87]= new Array();
 choices[87][0] = "Perfil Consultor.";
 choices[87][1] = "Perfil Directivo.";
 choices[87][2] = "Perfil Analista.";
 choices[87][3] = "Perfil Jefe de Proyecto.";
 answers[87] = choices[87][3];
 units[87] = "86";
 comments[87] = "Id Pregunta: 10989. TIC A1 AGE 2014";


//  Id pregunta: 11167 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  &iquest;Cu&aacute;l de los siguientes soportes de imagen realiza la transformada discreta del coseno (DCT) sobre bloques de 8x8 p&iacute;xeles?";
 choices[88]= new Array();
 choices[88][0] = "GIF";
 choices[88][1] = "TIFF";
 choices[88][2] = "BMP";
 choices[88][3] = "JPG";
 answers[88] = choices[88][3];
 units[88] = "93";
 comments[88] = "Id Pregunta: 11167. ";


//  Id pregunta: 11169 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  &iquest;Cu&aacute;les es el orden correcto de los bloques b&aacute;sicos de procesamiento de un sistema biom&eacute;trico de reconocimiento de voz?";
 choices[89]= new Array();
 choices[89][0] = "Preprocesamiento, Obtenci&oacute;n de datos del sensor, Extracci&oacute;n de caracter&iacute;sticas, Comparaci&oacute;n y Decisi&oacute;n.";
 choices[89][1] = "Obtenci&oacute;n de datos del sensor, Preprocesamiento, Extracci&oacute;n de caracter&iacute;sticas, Comparaci&oacute;n y Decisi&oacute;n.";
 choices[89][2] = "Extracci&oacute;n de caracter&iacute;sticas, Obtenci&oacute;n de datos del sensor, Preprocesamiento, Comparaci&oacute;n y Decisi&oacute;n.";
 choices[89][3] = "Obtenci&oacute;n de datos del sensor, Extracci&oacute;n de caracter&iacute;sticas, Preprocesamiento, Comparaci&oacute;n y Decisi&oacute;n.";
 answers[89] = choices[89][2];
 units[89] = "94";
 comments[89] = "Id Pregunta: 11169. ";


//  Id pregunta: 11293 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  &iquest;Cu&aacute;l de los siguientes NO es un tipo de plugin de Liferay?";
 choices[90]= new Array();
 choices[90][0] = "Tema";
 choices[90][1] = "Portlet";
 choices[90][2] = "Ruta";
 choices[90][3] = "Hook";
 answers[90] = choices[90][2];
 units[90] = "95";
 comments[90] = "Id Pregunta: 11293. ";


//  Id pregunta: 11379 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Seg&uacute;n ITIL v3, &iquest;qu&eacute; significa &ldquo;Garant&iacute;a de un servicio&rdquo;?";
 choices[91]= new Array();
 choices[91][0] = "El servicio se ajusta al prop&oacute;sito";
 choices[91][1] = "No habr&aacute; fallas en las aplicaciones ni en la infraestructura asociada al servicio";
 choices[91][2] = "Todos los problemas relacionados con el servicio se solucionan gratuitamente durante un per&iacute;odo determinado de tiempo";
 choices[91][3] = "A los clientes se les aseguran ciertos niveles de disponibilidad, capacidad, continuidad y seguridad";
 answers[91] = choices[91][3];
 units[91] = "98";
 comments[91] = "Id Pregunta: 11379. ";


//  Id pregunta: 11386 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes definiciones respecto de la base de datos de errores conocidos (KEDB) es la mejor?";
 choices[92]= new Array();
 choices[92][0] = "La KEDB es la misma base de datos que el sistema de gesti&oacute;n del conocimiento del servicio (SKMS)";
 choices[92][1] = "La KEDB deber&iacute;a de usarse durante la fase de diagn&oacute;stico de incidencias para intentar acelerar el proceso de resoluci&oacute;n";
 choices[92][2] = "Debe tenerse cuidado para evitar duplicar registros en la KEDB. Esto puede ser realizado al ser posible dar acceso de creaci&oacute;n de nuevos registros a muchos t&eacute;cnicos";
 choices[92][3] = "Acceder a la KEDB deber&iacute;a estar limitado al centro de servicio a usuarios";
 answers[92] = choices[92][1];
 units[92] = "98";
 comments[92] = "Id Pregunta: 11386. ";


//  Id pregunta: 11387 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Seg&uacute;n ITIL v3, &iquest;una petici&oacute;n de un cliente deber&iacute;a ser cumplida SIEMPRE?";
 choices[93]= new Array();
 choices[93][0] = "S&iacute;, si el cliente es externo, ya que est&aacute; pagando por el servicio";
 choices[93][1] = "No si el cliente es interno, ya que no siempre paga por el servicio";
 choices[93][2] = "No, es responsabilidad del proveedor TI llevar a cabo las debidas diligencias antes de que la petici&oacute;n sea cumplida";
 choices[93][3] = "S&iacute;, el proveedor del servicio deber&iacute;a asegurarse de que todos las peticiones para nuevos servicios sean cumplidas";
 answers[93] = choices[93][2];
 units[93] = "98";
 comments[93] = "Id Pregunta: 11387. ";


//  Id pregunta: 11389 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes actividades asegura y desempe&ntilde;a la Gesti&oacute;n de Configuraci&oacute;n y Activos del Servicio?: 1. Identificar los elementos de configuraci&oacute;n (CI); 2. Que los CIs tengan una l&iacute;nea base; 3. Controlar los cambios en los CIs";
 choices[94]= new Array();
 choices[94][0] = "Todos";
 choices[94][1] = "Solo 1 y 2";
 choices[94][2] = "Solo 3";
 choices[94][3] = "Solo 2 y 3";
 answers[94] = choices[94][0];
 units[94] = "98";
 comments[94] = "Id Pregunta: 11389. ";


//  Id pregunta: 11542 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  La duraci&oacute;n del camino m&aacute;s corto que hay desde el suceso inicial de un proyecto hasta el suceso &quot;n&quot; que se est&aacute; considerando es:";
 choices[95]= new Array();
 choices[95][0] = "EARLY del suceso &quot;n&quot;";
 choices[95][1] = "LAST del suceso &quot;n&quot;";
 choices[95][2] = "Tiempo de inicio del suceso &quot;n&quot;";
 choices[95][3] = "Ninguna de las anteriores";
 answers[95] = choices[95][3];
 units[95] = "89";
 comments[95] = "Id Pregunta: 11542. Conceptos PERT";


//  Id pregunta: 11543 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Se&ntilde;ale la FALSA respecto al Diagrama de Extrapolaci&oacute;n:";
 choices[96]= new Array();
 choices[96][0] = "Se basa en la hip&oacute;tesis de que si existe una desviaci&oacute;n, su tendencia es a permanecer o empeorar a no ser que se tomen las medidas oportunas.";
 choices[96][1] = "Trata de estimar la nueva fecha de fin del proyecto extrapolando la tendencia constatada en un momento determinado del desarrollo.";
 choices[96][2] = "Se utiliza para obtener previsiones de las desviaciones en el esfuerzo de desarrollo de un proyecto y para realizar el seguimiento del proyecto.";
 choices[96][3] = "Son correctas todas las afirmaciones anteriores.";
 answers[96] = choices[96][2];
 units[96] = "86";
 comments[96] = "Id Pregunta: 11543. NULL";


//  Id pregunta: 11546 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Seg&uacute;n M&eacute;trica v3, &iquest;Cu&aacute;l de las siguientes actividades de aseguramiento de la calidad NO se lleva a cabo durante el Mantenimiento del Sistema de Informaci&oacute;n?";
 choices[97]= new Array();
 choices[97][0] = "Aseguramiento de la calidad NO afecta al proceso MSI";
 choices[97][1] = "La revisi&oacute;n del plan de pruebas de regresi&oacute;n.";
 choices[97][2] = "La revisi&oacute;n de la realizaci&oacute;n de las pruebas de regresi&oacute;n.";
 choices[97][3] = "La revisi&oacute;n del Plan de Mantenimiento del Sistema.";
 answers[97] = choices[97][3];
 units[97] = "86";
 comments[97] = "Id Pregunta: 11546. NULL";


//  Id pregunta: 11638 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  En M&eacute;trica v3, el proceso de Dise&ntilde;o del Sistema de Informaci&oacute;n, cuando este es estructurado se compone de:";
 choices[98]= new Array();
 choices[98][0] = "9 actividades";
 choices[98][1] = "10 actividades";
 choices[98][2] = "11 actividades";
 choices[98][3] = "12 actividades";
 answers[98] = choices[98][1];
 units[98] = "86";
 comments[98] = "Id Pregunta: 11638. ";


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


