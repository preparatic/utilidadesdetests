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

//  Id pregunta: 2002 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  En el marco del dise&ntilde;o orientado a objetos, una clase abstracta es:";
 choices[0]= new Array();
 choices[0][0] = "Una instancia de una clase para la que, de momento, no existe ning&uacute;n ejemplar.";
 choices[0][1] = "Una superclase que s&oacute;lo se utiliza para generalizaci&oacute;n y que nunca se instancia.";
 choices[0][2] = "Una clase que resume todos los atributos y m&eacute;todos comunes de un conjunto de instancias de objetos relacionados.";
 choices[0][3] = "Una abstracci&oacute;n de un conjunto de objetos que tienen los mismos atributos, operaciones, relaciones y sem&aacute;ntica.";
 answers[0] = choices[0][1];
 units[0] = "84";
 comments[0] = "Id Pregunta: 2002. ";


//  Id pregunta: 2012 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  Si la fecha l&iacute;mite para la entrega de un sistema de informaci&oacute;n est&aacute; tan cerca que no va a ser posible con los recursos asignados, entregar un sistema que satisfaga todos los requisitos, la estrategia (modelo) a seguir deber&iacute;a ser:";
 choices[1]= new Array();
 choices[1][0] = "El modelo de prototipaci&oacute;n";
 choices[1][1] = "El modelo en cascada";
 choices[1][2] = "El modelo incremental";
 choices[1][3] = "El modelo de espiral WINWIN";
 answers[1] = choices[1][2];
 units[1] = "76";
 comments[1] = "Id Pregunta: 2012. Examen TIC MAP B 2004";


//  Id pregunta: 2041 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  Un &quot;walkthrough&quot; es:";
 choices[2]= new Array();
 choices[2][0] = "Un tipo de auditor&iacute;a de calidad";
 choices[2][1] = "Una actividad de garant&iacute;a de calidad";
 choices[2][2] = "Un tipo de revisi&oacute;n";
 choices[2][3] = "La verificaci&oacute;n formal de la calidad del software";
 answers[2] = choices[2][2];
 units[2] = "92";
 comments[2] = "Id Pregunta: 2041. NULL";


//  Id pregunta: 2059 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  Indicar la respuesta correcta.  El modelo orientado a los datos:";
 choices[3]= new Array();
 choices[3][0] = "Deduce el ciclo de vida de las entidades a partir del flujo de datos";
 choices[3][1] = "Deduce los procesos que debe incorporar el sistema a partir de los datos manejados";
 choices[3][2] = "Deduce los atributos de las entidades a partir de los procesos que debe realizar el sistema";
 choices[3][3] = "Todas son falsas";
 answers[3] = choices[3][3];
 units[3] = "79";
 comments[3] = "Id Pregunta: 2059. ";


//  Id pregunta: 2069 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  No es una caracter&iacute;stica de la orientaci&oacute;n a objetos";
 choices[4]= new Array();
 choices[4][0] = "la programaci&oacute;n funcional";
 choices[4][1] = "El acoplamiento d&eacute;bil";
 choices[4][2] = "La ocultaci&oacute;n de la implementacion";
 choices[4][3] = "el polimorfismo";
 answers[4] = choices[4][0];
 units[4] = "82";
 comments[4] = "Id Pregunta: 2069. ";


//  Id pregunta: 2111 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  De los siguientes, &iquest;cu&aacute;l es un SGBD orientado a objetos puro?:";
 choices[5]= new Array();
 choices[5][0] = "GEMSTONE";
 choices[5][1] = "ONTOS";
 choices[5][2] = "OBJECT-DB";
 choices[5][3] = "DOMINIQUE";
 answers[5] = choices[5][0];
 units[5] = "82";
 comments[5] = "Id Pregunta: 2111. Ser&aacute; puro OO si el lenguage que usa es puramente OO. Y eso solo lo cumple Smalltalk, de entre esas opciones.";


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


//  Id pregunta: 2176 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  La diferencia entre ciclo de vida y metodolog&iacute;a  es que &hellip;:";
 choices[7]= new Array();
 choices[7][0] = "El ciclo de vida indica el qu&eacute;, mientras que la metodolog&iacute;a indica el cu&aacute;ndo";
 choices[7][1] = "El ciclo de vida indica el cu&aacute;ndo, mientras que la metodolog&iacute;a indica el c&oacute;mo";
 choices[7][2] = "El ciclo de vida indica el qu&eacute;, mientras que la metodolog&iacute;a indica el c&oacute;mo";
 choices[7][3] = "El ciclo de vida indica el modo, mientras que la metodolog&iacute;a indica el qu&eacute;";
 answers[7] = choices[7][2];
 units[7] = "76";
 comments[7] = "Id Pregunta: 2176. ";


//  Id pregunta: 2178 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  La diferencia entre t&eacute;cnicas y pr&aacute;cticas en METRICA 3 es:";
 choices[8]= new Array();
 choices[8][0] = "Las pr&aacute;cticas se apoyan en est&aacute;ndares, mientras que las t&eacute;cnicas no";
 choices[8][1] = "Las t&eacute;cnicas son el conjunto de heur&iacute;sticas y procedimientos que se apoyan en est&aacute;ndares, mientras que las pr&aacute;cticas no precisan cumplir criterios establecidos";
 choices[8][2] = "Las t&eacute;cnicas son el conjunto de heur&iacute;sticas y procedimientos que se apoyan en la experiencia, mientras que las pr&aacute;cticas pueden ser propias";
 choices[8][3] = "Tanto las t&eacute;cnicas como las pr&aacute;cticas son heur&iacute;sticas y no son esclusivas de METRICA 3";
 answers[8] = choices[8][1];
 units[8] = "86";
 comments[8] = "Id Pregunta: 2178. NULL";


//  Id pregunta: 2179 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l de los siguientes perfiles  no est&aacute; incluido en la Guia de Participantes de METRICA 3?:";
 choices[9]= new Array();
 choices[9][0] = "Directivo";
 choices[9][1] = "Consultor";
 choices[9][2] = "T&eacute;cnico";
 choices[9][3] = "Programador";
 answers[9] = choices[9][2];
 units[9] = "86";
 comments[9] = "Id Pregunta: 2179. NULL";


//  Id pregunta: 2203 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;En qu&eacute; proceso de METRICA V3 se llevar&iacute;a a cabo la construcci&oacute;n de los componentes de migraci&oacute;n y procedimientos de migraci&oacute;n y carga inicial de datos?:";
 choices[10]= new Array();
 choices[10][0] = "CSI";
 choices[10][1] = "DSI";
 choices[10][2] = "IAS";
 choices[10][3] = "DCS";
 answers[10] = choices[10][0];
 units[10] = "86";
 comments[10] = "Id Pregunta: 2203. NULL";


//  Id pregunta: 2205 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Qu&eacute; actividad del an&aacute;lisis del sistema de informaci&oacute;n solo se realiza en el caso de an&aacute;lisis orientado a objetos?:";
 choices[11]= new Array();
 choices[11][0] = "ASI 6 (Elaboraci&oacute;n del modelo de datos)";
 choices[11][1] = "ASI 8 (Definici&oacute;n de interfaces de usuario)";
 choices[11][2] = "ASI 4 (An&aacute;lisis de los casos de uso)";
 choices[11][3] = "ASI 3 (Identificaci&oacute;n de subsistemas de an&aacute;lisis)";
 answers[11] = choices[11][2];
 units[11] = "86";
 comments[11] = "Id Pregunta: 2205. NULL";


//  Id pregunta: 2231 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Al esfuerzo requerido para conectar un sistema con otro se llama:";
 choices[12]= new Array();
 choices[12][0] = "Portabilidad";
 choices[12][1] = "Reusabilidad";
 choices[12][2] = "Interoperatividad";
 choices[12][3] = "Mantenibilidad";
 answers[12] = choices[12][2];
 units[12] = "88";
 comments[12] = "Id Pregunta: 2231. ";


//  Id pregunta: 2244 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  De acuerdo con el proceso de descomposici&oacute;n o explosi&oacute;n por niveles de los DFD's (Diagramas de Flujo de Datos) el primer nivel es el denominado:";
 choices[13]= new Array();
 choices[13][0] = "Diagrama del sistema";
 choices[13][1] = "Diagrama de contexto";
 choices[13][2] = "Diagrama de procesos primitivos";
 choices[13][3] = "Diagrama de top-down";
 answers[13] = choices[13][1];
 units[13] = "81";
 comments[13] = "Id Pregunta: 2244. ";


//  Id pregunta: 2248 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  Dentro de la m&eacute;trica de los factores de calidad, indicar la afirmaci&oacute;n falsa:";
 choices[14]= new Array();
 choices[14][0] = "Las m&eacute;tricas, son medidas cuantitativas del grado que tiene el software de un atributo dado";
 choices[14][1] = "Los criterios, son aquellos elementos internos o de los realizadores, relativos a la forma y estructura de programas, datos y documentos";
 choices[14][2] = "Los factores, son aqu&eacute;llos elementos externos o del usuario, relativos al comportamiento actual del software, su facilidad de cambio, y a su facilidad de conversi&oacute;n";
 choices[14][3] = "La relaci&oacute;n existente entre los tres grupos es: una vez definidos los criterios a medir, los factores sirven para cuantificar dichos criterios, y posteriormente la valoraci&oacute;n cuantitativa de los factores se lleva a cabo mediante la utilizaci&oacute;n de m&eacute;tricas";
 answers[14] = choices[14][3];
 units[14] = "88";
 comments[14] = "Id Pregunta: 2248. ";


//  Id pregunta: 2281 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  El modelo de cascada&hellip;:";
 choices[15]= new Array();
 choices[15][0] = "Es una evoluci&oacute;n del modelo por etapas";
 choices[15][1] = "Se conoce como el &quot;modelo antiguo&quot;";
 choices[15][2] = "Es similar al iterativo";
 choices[15][3] = "No admite realimentaci&oacute;n entre etapas";
 answers[15] = choices[15][0];
 units[15] = "76";
 comments[15] = "Id Pregunta: 2281. ";


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


//  Id pregunta: 2301 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  El tiempo de programaci&oacute;n de un proyecto software depende principalmente de:";
 choices[17]= new Array();
 choices[17][0] = "Funcionalidad requerida";
 choices[17][1] = "Fiabilidad";
 choices[17][2] = "Tiempo de  respuesta";
 choices[17][3] = "Son ciertas todas las anteriores respuestas ";
 answers[17] = choices[17][3];
 units[17] = "89";
 comments[17] = "Id Pregunta: 2301. Preparatic XVII";


//  Id pregunta: 2306 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  En el diccionario de datos (lista organizada de todos los datos pertinentes al sistema, con un conjunto de definiciones precisas para que tanto el analista como el usuario se entiendan), la iteraci&oacute;n de elementos se representa con:";
 choices[18]= new Array();
 choices[18][0] = "&quot;[&quot; y &quot;]&quot;";
 choices[18][1] = "&quot;(&quot; y &quot;)&quot;";
 choices[18][2] = "&quot;{&quot; y &quot;}&quot;";
 choices[18][3] = "Ninguna de las anteriores";
 answers[18] = choices[18][2];
 units[18] = "81";
 comments[18] = "Id Pregunta: 2306. ";


//  Id pregunta: 2346 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  En relaci&oacute;n con el ciclo de vida denominado cl&aacute;sico o en cascada se pueden hacer una serie de consideraciones. Indicar cu&aacute;l de las siguientes es falsa:";
 choices[19]= new Array();
 choices[19][0] = "Los proyectos reales escasamente siguen el camino secuencial que propone el modelo";
 choices[19][1] = "Es dif&iacute;cil para el usuario establecer correcta y totalmente todos los requerimientos al principio del proyecto";
 choices[19][2] = "Una versi&oacute;n funcionando del programa no podr&iacute;a estar disponible hasta las etapas finales del desarrollo del proyecto";
 choices[19][3] = "No es necesario completar cada una de las etapas para pasar a la siguiente";
 answers[19] = choices[19][3];
 units[19] = "76";
 comments[19] = "Id Pregunta: 2346. ";


//  Id pregunta: 2357 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Entre las novedades de la versi&oacute;n 3 de la metodolog&iacute;a de planificaci&oacute;n y desarrollo de sistemas de informaci&oacute;n METRICA del Consejo Superior de Administraci&oacute;n Electr&oacute;nica, respecto de su versi&oacute;n anterior, tenemos:";
 choices[20]= new Array();
 choices[20][0] = "Se incluyen las t&eacute;cnicas propias de un desarrollo orientado a objetos y las t&eacute;cnicas de desarrollo del tipo estructurado";
 choices[20][1] = "La incorporaci&oacute;n del proceso de Mantenimiento y de los &uacute;ltimos est&aacute;ndares de ingenier&iacute;a de software y de calidad ISO 12207 e ISO 9000-3";
 choices[20][2] = "La incorporaci&oacute;n con puntos definidos de interfaz para las metodolog&iacute;as de seguridad (MAGERIT), de aseguramiento de la calidad (PGGC - Plan General de Garant&iacute;a de Calidad), Gesti&oacute;n de Configuraci&oacute;n y Gesti&oacute;n de Proyectos";
 choices[20][3] = "Todas las anteriores";
 answers[20] = choices[20][3];
 units[20] = "86";
 comments[20] = "Id Pregunta: 2357. NULL";


//  Id pregunta: 2369 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  Es cierto decir que la &quot;Ingenier&iacute;a hacia delante&quot;:";
 choices[21]= new Array();
 choices[21][0] = "Es una reingenier&iacute;a hecha a continuaci&oacute;n de una ingenier&iacute;a inversa.";
 choices[21][1] = "Es el resultado de aplicar t&eacute;cnicas de reutilizaci&oacute;n a un sistema bien definido.";
 choices[21][2] = "Parte de un alto nivel de abstracci&oacute;n.";
 choices[21][3] = "Precisa antes una &quot;ingenier&iacute;a inversa&quot;.";
 answers[21] = choices[21][2];
 units[21] = "91";
 comments[21] = "Id Pregunta: 2369. ";


//  Id pregunta: 2382 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Indicar cu&aacute;l de los siguientes atributos no debe resultar de la descomposici&oacute;n modular del sistema:";
 choices[22]= new Array();
 choices[22][0] = "M&aacute;ximo acoplamiento.";
 choices[22][1] = "Interfaz bien definida.";
 choices[22][2] = "M&aacute;xima capacidad de reutilizaci&oacute;n.";
 choices[22][3] = "Introducci&oacute;n de una jerarqu&iacute;a de modo que los m&oacute;dulos superiores de la misma se sirvan de los inferiores, es decir, requieran de la tarea desarrollada por &eacute;stos, pero nunca al contrario.";
 answers[22] = choices[22][0];
 units[22] = "84";
 comments[22] = "Id Pregunta: 2382. ";


//  Id pregunta: 2425 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  El tipo de indizaci&oacute;n por descriptores consistente en seleccionar conceptos de listas normalizadas de descriptores, se denomina:";
 choices[23]= new Array();
 choices[23][0] = "M&eacute;todo estad&iacute;stico";
 choices[23][1] = "M&eacute;todo por asignaci&oacute;n de los conceptos clave del documento";
 choices[23][2] = "M&eacute;todo sint&aacute;ctico";
 choices[23][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[23] = choices[23][1];
 units[23] = "96";
 comments[23] = "Id Pregunta: 2425. NULL";


//  Id pregunta: 2427 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  La metodolog&iacute;a M&eacute;trica V.3 incorpora un proceso de mantenimiento de sistemas. &iquest;Podr&iacute;a determinar qu&eacute; actividad no est&aacute; incluida en el proceso?:";
 choices[24]= new Array();
 choices[24][0] = "Registro de la petici&oacute;n";
 choices[24][1] = "An&aacute;lisis de la petici&oacute;n";
 choices[24][2] = "Seguimiento y evaluaci&oacute;n de los cambios hasta la aceptaci&oacute;n";
 choices[24][3] = "Todas ellas son actividades del MSI";
 answers[24] = choices[24][3];
 units[24] = "86";
 comments[24] = "Id Pregunta: 2427. NULL";


//  Id pregunta: 2430 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  La planificaci&oacute;n estrat&eacute;gica es:";
 choices[25]= new Array();
 choices[25][0] = "Un momento en el tiempo para tomar decisiones";
 choices[25][1] = "Una herramienta para anticiparse a los cambios";
 choices[25][2] = "Un proceso de evaluaci&oacute;n sistem&aacute;tica de la naturaleza de un negocio, definiendo los objetivos a largo plazo, identificando metas y objetivos cuantitativos, desarrollando estrategias para alcanzar dichos objetivos y localizando recursos para llevar a cabo dichas estrategias";
 choices[25][3] = "Una herramienta que se limita a extrapolar el presente al futuro";
 answers[25] = choices[25][2];
 units[25] = "77";
 comments[25] = "Id Pregunta: 2430. ";


//  Id pregunta: 2431 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  La propuesta del ciclo de vida en espiral se ha realizado para superar determinados problemas del modelo en cascada. Entre estos:";
 choices[26]= new Array();
 choices[26][0] = "Identificar factores de riesgo y resolverlos antes de implementar fases m&aacute;s conocidas";
 choices[26][1] = "Utilizar prototipos desechables antes de comenzar un desarrollo en cascada";
 choices[26][2] = "Supone la repetici&oacute;n cada vez con mayor nivel de detalle del modelo en cascada";
 choices[26][3] = "Es un modelo en cascada completo de prototipado r&aacute;pido para la fase de an&aacute;lisis y especificaci&oacute;n de requisitos";
 answers[26] = choices[26][0];
 units[26] = "76";
 comments[26] = "Id Pregunta: 2431. ";


//  Id pregunta: 2445 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  Las metodolog&iacute;as:";
 choices[27]= new Array();
 choices[27][0] = "Definen el conjunto de elementos del mundo real que intervienen en el sistema y son modelizables";
 choices[27][1] = "Emplean formalismos gr&aacute;ficos para derivar los procedimientos y recursos";
 choices[27][2] = "Emplean t&eacute;cnicas de auditor&iacute;a como fuente de integraci&oacute;n de prototipos";
 choices[27][3] = "Existen dos enfoques: en los m&eacute;todos aqu&eacute;llos que se orientan hacia los datos y aquellos que se orientan hacia los tratamientos";
 answers[27] = choices[27][3];
 units[27] = "79";
 comments[27] = "Id Pregunta: 2445. ";


//  Id pregunta: 2486 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  Se entiende por ciclo de vida:";
 choices[28]= new Array();
 choices[28][0] = "Conjunto de fases (o etapas) por las que pasa el sistema desde que se concibe hasta que se retira del servicio";
 choices[28][1] = "El conjunto de fases de desarrollo";
 choices[28][2] = "Etapas de la ingenieria del software";
 choices[28][3] = "Las etapas de la utilizaci&oacute;n de un sistema";
 answers[28] = choices[28][0];
 units[28] = "76";
 comments[28] = "Id Pregunta: 2486. ";


//  Id pregunta: 2490 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  Seg&uacute;n Roger S. Pressman, &iquest;cu&aacute;les de los siguientes principios son fundamentales en el an&aacute;lisis de requerimientos?:";
 choices[29]= new Array();
 choices[29][0] = "El dominio de la informaci&oacute;n";
 choices[29][1] = "La subdivisi&oacute;n del problema";
 choices[29][2] = "La representaci&oacute;n l&oacute;gica y f&iacute;sica del sistema";
 choices[29][3] = "Los tres anteriores";
 answers[29] = choices[29][3];
 units[29] = "78,80,81,82";
 comments[29] = "Id Pregunta: 2490. ";


//  Id pregunta: 2528 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  En procesamiento de la voz, el nivel de comprensi&oacute;n en el cu&aacute;l se identifican los objetos sonoros elementales se llama:";
 choices[30]= new Array();
 choices[30][0] = "Nivel ac&uacute;stico";
 choices[30][1] = "Nivel fon&eacute;tico";
 choices[30][2] = "Nivel fonol&oacute;gico";
 choices[30][3] = "Nivel pros&oacute;dico";
 answers[30] = choices[30][1];
 units[30] = "94";
 comments[30] = "Id Pregunta: 2528. ";


//  Id pregunta: 2530 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  En sistemas de recuperaci&oacute;n de la informaci&oacute;n, al cociente entre el n&uacute;mero de referencias  obtenidas y el n&uacute;mero total de referencias existentes, se denomina:";
 choices[31]= new Array();
 choices[31][0] = "&Iacute;ndice de retorno";
 choices[31][1] = "&Iacute;ndice de exactitud";
 choices[31][2] = "&Iacute;ndice de precisi&oacute;n";
 choices[31][3] = "&Iacute;ndice de localizaci&oacute;n";
 answers[31] = choices[31][0];
 units[31] = "96";
 comments[31] = "Id Pregunta: 2530. NULL";


//  Id pregunta: 2587 AÃ±o de creación de pregunta: 2003-01-01
 questions[32]= "33)  En el contexto de los sistemas gestores de bases de datos documentales (SGBDD), la funcionalidad que permite que determinadas palabras u objetos redirijan a otros textos relacionados o con informaci&oacute;n ampliada, se denomina:";
 choices[32]= new Array();
 choices[32][0] = "Tesauro.";
 choices[32][1] = "Hipertexto.";
 choices[32][2] = "Referencia cruzada.";
 choices[32][3] = "Atributo.";
 answers[32] = choices[32][1];
 units[32] = "95";
 comments[32] = "Id Pregunta: 2587. Junta Andaluc&iacute;a";


//  Id pregunta: 2606 AÃ±o de creación de pregunta: 2003-01-01
 questions[33]= "34)  &iquest;C&oacute;mo se llama la caracter&iacute;stica que permite que dos m&eacute;todos distintos tengan el mismo nombre?";
 choices[33]= new Array();
 choices[33][0] = " Herencia";
 choices[33][1] = "Persistencia";
 choices[33][2] = "Polimorfismo";
 choices[33][3] = "Abstracci&oacute;n";
 answers[33] = choices[33][2];
 units[33] = "82";
 comments[33] = "Id Pregunta: 2606. ";


//  Id pregunta: 2617 AÃ±o de creación de pregunta: 2003-01-01
 questions[34]= "35)  &iquest;Cu&aacute;l de los siguientes no pertenece al perfil de analista seg&uacute;n Metrica v3?";
 choices[34]= new Array();
 choices[34][0] = "Administrador de base de datos";
 choices[34][1] = "T&eacute;cnico de comunicaciones";
 choices[34][2] = "Equipo de proyecto";
 choices[34][3] = "Equipo de operaci&oacute;n";
 answers[34] = choices[34][1];
 units[34] = "86";
 comments[34] = "Id Pregunta: 2617. NULL";


//  Id pregunta: 2647 AÃ±o de creación de pregunta: 2003-01-01
 questions[35]= "36)  En la fase de an&aacute;lisis de Metrica v3 se puede afirmar";
 choices[35]= new Array();
 choices[35][0] = "Las fases de de an&aacute;lisis de consistencia y elaboraci&oacute;n del modelo de datos se pueden hacer de forma paralela";
 choices[35][1] = "Las fases de de an&aacute;lisis de casos de uso y elaboraci&oacute;n del modelo de datos se pueden hacer de forma paralela";
 choices[35][2] = "Las fases de de an&aacute;lisis de casos de uso y an&aacute;lisis de consistenacia se pueden hacer de forma paralela";
 choices[35][3] = "Las fases de definici&oacute;n del sistema y elaboraci&oacute;n del modelo de datos se pueden hacer de forma paralela";
 answers[35] = choices[35][1];
 units[35] = "86";
 comments[35] = "Id Pregunta: 2647. NULL";


//  Id pregunta: 2652 AÃ±o de creación de pregunta: 2003-01-01
 questions[36]= "37)  La actividad DSI-CAL2 se denomina";
 choices[36]= new Array();
 choices[36][0] = "Revisi&oacute;n de la especificaci&oacute;n t&eacute;cnica del plan de prueba";
 choices[36][1] = "Revisi&oacute;n de la verificaci&oacute;n de la arquitectura del sistema";
 choices[36][2] = "Revisi&oacute;n de los requisitos de implantaci&oacute;n";
 choices[36][3] = "ninguna es cirrecta";
 answers[36] = choices[36][0];
 units[36] = "87,88,92";
 comments[36] = "Id Pregunta: 2652. ";


//  Id pregunta: 2671 AÃ±o de creación de pregunta: 2003-01-01
 questions[37]= "38)  En los a&ntilde;os cuarenta se descubri&oacute; un instrumento que ayud&oacute; notablemente al an&aacute;lisis de la voz:";
 choices[37]= new Array();
 choices[37][0] = "El espectr&oacute;grafo.";
 choices[37][1] = "El VODER.";
 choices[37][2] = "La m&aacute;quina de Wolfgang Von Kempelen.";
 choices[37][3] = "La m&aacute;quina de Krat-zenstein.";
 answers[37] = choices[37][0];
 units[37] = "94";
 comments[37] = "Id Pregunta: 2671. ";


//  Id pregunta: 2675 AÃ±o de creación de pregunta: 2003-01-01
 questions[38]= "39)  En los Sistemas de Recuperaci&oacute;n de Informaci&oacute;n se define:";
 choices[38]= new Array();
 choices[38][0] = "El &Iacute;ndice de Retorno, que mide la cantidad de material devuelto, y el &Iacute;ndice de Precisi&oacute;n, que mide el ajuste del material devuelto.";
 choices[38][1] = "El &Iacute;ndice de Devoluciones, que mide la cantidad de manterial devuelto, y el &Iacute;ndice de Calidad, que mide el ajuste del material devuelto.";
 choices[38][2] = "El &Iacute;ndice de Datos, que mide la cantidad de material devuelto, y el &Iacute;ndice de Errores, que mide el desajuste del material devuelto.";
 choices[38][3] = "El &Iacute;ndice de Retorno, que mide la cantidad de material devuelto y el &Iacute;ndice de Calidad, que mide el ajuste del material devuelto.";
 answers[38] = choices[38][0];
 units[38] = "96";
 comments[38] = "Id Pregunta: 2675. NULL";


//  Id pregunta: 2711 AÃ±o de creación de pregunta: 2003-01-01
 questions[39]= "40)  Una de las principales caracter&iacute;sticas de un sistema gestor de contenidos es:";
 choices[39]= new Array();
 choices[39][0] = "Desaconseja el uso de metadatos.";
 choices[39][1] = "No hay roles en el proceso.";
 choices[39][2] = "Se separa el contenido de su presentaci&oacute;n.";
 choices[39][3] = "Las p&aacute;ginas se construyen de manera no din&aacute;mica.";
 answers[39] = choices[39][2];
 units[39] = "95";
 comments[39] = "Id Pregunta: 2711. NULL";


//  Id pregunta: 2730 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  &iquest;Cu&aacute;l de los siguientes no es un objetivo del Plan de Sistemas de Informaci&oacute;n en una organizaci&oacute;n?";
 choices[40]= new Array();
 choices[40][0] = "Establecer pol&iacute;ticas y objetivos coherentes";
 choices[40][1] = "Definir los requerimientos t&eacute;cnicos necesarios y suficientes";
 choices[40][2] = "Seleccionar los suministradores de las distintos elementos";
 choices[40][3] = "Conocer con cierta aproximaci&oacute;n y de forma anticipada las inversiones, los costes de funcionamiento y los resultados esperados";
 answers[40] = choices[40][2];
 units[40] = "77";
 comments[40] = "Id Pregunta: 2730. ";


//  Id pregunta: 2823 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  La migraci&oacute;n de aplicaciones en el marco de un ajuste dimensional:";
 choices[41]= new Array();
 choices[41][0] = "Consiste simplemente en mover los programas entre diferentes tipos de ordenador.";
 choices[41][1] = "No debe implicar modificaciones en la filosof&iacute;a de negocio de la organizaci&oacute;n.";
 choices[41][2] = "Se limita s&oacute;lo a las aplicaciones de usuario.";
 choices[41][3] = "Debe englobar todos los productos l&oacute;gicos o software de la instalaci&oacute;n a migrar.";
 answers[41] = choices[41][3];
 units[41] = "90";
 comments[41] = "Id Pregunta: 2823. ";


//  Id pregunta: 2876 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  El &quot; Desarrollo de Sistemas de Informaci&oacute;n&quot; en la metodolog&iacute;a M&Eacute;TRICA versi&oacute;n 3 lo constituyen";
 choices[42]= new Array();
 choices[42][0] = "Tres procesos";
 choices[42][1] = "Cuatro procesos";
 choices[42][2] = "Cinco procesos";
 choices[42][3] = "Seis procesos";
 answers[42] = choices[42][2];
 units[42] = "86";
 comments[42] = "Id Pregunta: 2876. NULL";


//  Id pregunta: 2882 AÃ±o de creación de pregunta: 2006-01-01
 questions[43]= "44)  Indique cu&aacute;l de las siguientes reglas es cierta  con respecto al Flujo de Datos, como elemento de un DFD:";
 choices[43]= new Array();
 choices[43][0] = "No puede crear ni destruir los datos";
 choices[43][1] = "Puede transformar un dato en varios";
 choices[43][2] = "Activa Procesos";
 choices[43][3] = "Transforma los flujos de datos de entrada en flujos de salida de datos";
 answers[43] = choices[43][0];
 units[43] = "81";
 comments[43] = "Id Pregunta: 2882. ";


//  Id pregunta: 4578 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[44]= new Array();
 choices[44][0] = "La ingenier&iacute;a inversa es el proceso de codificar los programas m&aacute;s eficientemente.";
 choices[44][1] = "La reingenier&iacute;a del software incluye el an&aacute;lisis de inventario.";
 choices[44][2] = "La ingenier&iacute;a inversa s&oacute;lo es aplicable al software estructurado.";
 choices[44][3] = "La ingenier&iacute;a directa es el proceso de analizar un programa para extraer informaci&oacute;n acerca de los datos, de su arquitectura y del dise&ntilde;o de procedimientos.";
 answers[44] = choices[44][1];
 units[44] = "91";
 comments[44] = "Id Pregunta: 4578. Castilla la Mancha B 06";


//  Id pregunta: 4637 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  Es un producto de entrada y salida del proceso Dise&ntilde;o de Sistema de Informaci&oacute;n de Metrica V3";
 choices[45]= new Array();
 choices[45][0] = "dise&ntilde;o de la arquitectura del sistema";
 choices[45][1] = "resultado del an&aacute;lisis de consistencia";
 choices[45][2] = "modelo f&iacute;sico de datos";
 choices[45][3] = "modelo de casos de uso";
 answers[45] = choices[45][1];
 units[45] = "86";
 comments[45] = "Id Pregunta: 4637. NULL";


//  Id pregunta: 4638 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  Es un interface de M&eacute;trica V3";
 choices[46]= new Array();
 choices[46][0] = "formacion";
 choices[46][1] = "auditoria";
 choices[46][2] = "mantenimiento de la calidad";
 choices[46][3] = "gestion de la configuracion";
 answers[46] = choices[46][3];
 units[46] = "86";
 comments[46] = "Id Pregunta: 4638. NULL";


//  Id pregunta: 4719 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  El sello de oro del modelo EFQM se obtiene a partir de una evaluaci&oacute;n de:";
 choices[47]= new Array();
 choices[47][0] = "400 puntos sobre 1000.";
 choices[47][1] = "500 puntos sobre 1000.";
 choices[47][2] = "700 puntos sobre 1000.";
 choices[47][3] = "900 puntos sobre 1000.";
 answers[47] = choices[47][1];
 units[47] = "92";
 comments[47] = "Id Pregunta: 4719. Examen 2006 JCYL";


//  Id pregunta: 4932 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  La matriz Requisitos-Componentes empleada en los procesos de dise&ntilde;o y desarrollo de software, aparece en:";
 choices[48]= new Array();
 choices[48][0] = "El documento de especificaci&oacute;n de requisitos.";
 choices[48][1] = "El documento de dise&ntilde;o de software.";
 choices[48][2] = "Los documentos de cambios.";
 choices[48][3] = "El Plan de garant&iacute;a de calidad de software.";
 answers[48] = choices[48][1];
 units[48] = "78";
 comments[48] = "Id Pregunta: 4932. Examen TIC B 2007";


//  Id pregunta: 5072 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  &iquest;Qu&eacute; elemento NO forma parte de un diagrama de flujo de datos (DFD)?:";
 choices[49]= new Array();
 choices[49][0] = "Entidad externa";
 choices[49][1] = "Proceso";
 choices[49][2] = "Funci&oacute;n";
 choices[49][3] = "Almac&eacute;n de datos";
 answers[49] = choices[49][2];
 units[49] = "81";
 comments[49] = "Id Pregunta: 5072. Examen TIC A 2007";


//  Id pregunta: 5212 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  Marcar la opci&oacute;n incorrecta. El tesauro o diccionario de descriptores es un conjunto predefinido de palabras claves que muestran las siguientes relaciones:";
 choices[50]= new Array();
 choices[50][0] = "Relaciones de equivalencia o preferencia";
 choices[50][1] = "Relaciones jer&aacute;rquicas";
 choices[50][2] = "Relaciones asociativas o de afinidad";
 choices[50][3] = "Relaciones instrumentales";
 answers[50] = choices[50][3];
 units[50] = "95,96";
 comments[50] = "Id Pregunta: 5212. ";


//  Id pregunta: 5250 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  Indique la afirmaci&oacute;n falsa relativa al Aseguramiento de la Calidad:";
 choices[51]= new Array();
 choices[51][0] = "Es una de las 4 interfaces definidas en M&eacute;trica v3";
 choices[51][1] = "El objetivo de esta interfaz es proporcionar un marco com&uacute;n de referencia para la definici&oacute;n y puesta marcha planes espec&iacute;ficos de aseguramiento de calidad aplicables a proyectos concretos";
 choices[51][2] = "Sus actividades orientadas a verificar y evaluar la calidad de los productos por un grupo de Aseguramiento de Calidad independiente";
 choices[51][3] = "Estas actividades entran en contradicci&oacute;n con el Plan General de Garant&iacute;a de Calidad (PGGC)";
 answers[51] = choices[51][3];
 units[51] = "87";
 comments[51] = "Id Pregunta: 5250. NULL";


//  Id pregunta: 5262 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  Para obtener el Diagrama Caracter&iacute;stico de un proyecto, el Plan General de Garant&iacute;a de Calidad considera los siguientes atributos:";
 choices[52]= new Array();
 choices[52][0] = "Un total de 8, que se refieren al producto que se va a desarrollar, al entorno de implantaci&oacute;n previsto y al propio proyecto o proceso de desarrollo y que se valoran dentro de un rango de 1 y 5.";
 choices[52][1] = "Un total de 18, que se refieren al producto que se va a desarrollar, al entorno de implantaci&oacute;n previsto y al propio proyecto o proceso de desarrollo y que se valoran dentro de un rango de 1 y 5.";
 choices[52][2] = "Un total de 18, que se refieren al producto que se va a desarrollar, al entorno de implantaci&oacute;n previsto y al propio proyecto o proceso de desarrollo y que se valoran dentro de un rango de 1 y 7.";
 choices[52][3] = "Ninguna de las anteriores";
 answers[52] = choices[52][1];
 units[52] = "88";
 comments[52] = "Id Pregunta: 5262. NULL";


//  Id pregunta: 5477 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  Que aspecto debe considerarse a la hora de efectuar una planificaci&oacute;n estrat&eacute;gica";
 choices[53]= new Array();
 choices[53][0] = "La misi&oacute;n del negocio";
 choices[53][1] = "La situaci&oacute;n de los competidores";
 choices[53][2] = "Los hitos en el calendario de actuaci&oacute;n";
 choices[53][3] = "Deben considerarse los aspectos anteriores";
 answers[53] = choices[53][3];
 units[53] = "77";
 comments[53] = "Id Pregunta: 5477. Castilla y Le&oacute;n";


//  Id pregunta: 5850 AÃ±o de creación de pregunta: 2009-01-01
 questions[54]= "55)  En el modelo Early Design de COCOMO II, el valor PM nominal se ajusta utilizando";
 choices[54]= new Array();
 choices[54][0] = "5 factores de escala";
 choices[54][1] = "7 factores de coste";
 choices[54][2] = "17 factores de coste";
 choices[54][3] = "Ninguna de las anteriores";
 answers[54] = choices[54][1];
 units[54] = "89";
 comments[54] = "Id Pregunta: 5850. NULL";


//  Id pregunta: 5853 AÃ±o de creación de pregunta: 2009-01-01
 questions[55]= "56)  Con respecto a ITIL, el proceso &quot;Configuration Management&quot; o Gesti&oacute;n de la Configuraci&oacute;n, &iquest;en qu&eacute; fase del ciclo de vida est&aacute; incluido?";
 choices[55]= new Array();
 choices[55][0] = "Dise&ntilde;o del Servicio";
 choices[55][1] = "Transici&oacute;n del Servicio";
 choices[55][2] = "Operaci&oacute;n del Servicio";
 choices[55][3] = "Mejora continua";
 answers[55] = choices[55][1];
 units[55] = "98";
 comments[55] = "Id Pregunta: 5853. Pregunta 33";


//  Id pregunta: 5964 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  Seg&uacute;n CMMI, el &aacute;rea de proceso que recopila y armoniza las necesidades de los participantes y las traduce en requisitos del producto se denomina:";
 choices[56]= new Array();
 choices[56][0] = "Verificaci&oacute;n";
 choices[56][1] = "Validaci&oacute;n";
 choices[56][2] = "Gesti&oacute;n de requisitos";
 choices[56][3] = "Desarrollo de requisitos";
 answers[56] = choices[56][3];
 units[56] = "87";
 comments[56] = "Id Pregunta: 5964. Castilla La Mancha 2009";


//  Id pregunta: 5998 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  El Plan Estrat&eacute;gico Inform&aacute;tico Departamental debe ser elaborado por:";
 choices[57]= new Array();
 choices[57][0] = "La Subsecretar&iacute;a.";
 choices[57][1] = "La Comisi&oacute;n Ministerial de Administraci&oacute;n Electr&oacute;nica.";
 choices[57][2] = "Las Unidades de Inform&aacute;tica del Ministerio.";
 choices[57][3] = "El Subdirector General de Inform&aacute;tica.";
 answers[57] = choices[57][1];
 units[57] = "77";
 comments[57] = "Id Pregunta: 5998. TIC A 2009";


//  Id pregunta: 6202 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  Respecto al Diagrama de Secuencia, &iquest;cu&aacute;l de las siguientes opciones es correcta?";
 choices[58]= new Array();
 choices[58][0] = "Muestra los objetos participantes en la interacci&oacute;n y los mensajes que intercambian ordenados seg&uacute;n su secuencia en el tiempo.";
 choices[58][1] = "El eje horizontal representa el tiempo, y en el eje vertical se colocan los objetos y actores participantes en la interacci&oacute;n, sin un orden prefijado.";
 choices[58][2] = "Cada objeto o actor tiene una l&iacute;nea horizontal, y los mensajes se representan mediante etiquetas entre los distintos objetos.";
 choices[58][3] = "El tiempo fluye de abajo a arriba y de izquiera a derecha.";
 answers[58] = choices[58][0];
 units[58] = "84";
 comments[58] = "Id Pregunta: 6202. TIC-B 2009 bloque desarrollo";


//  Id pregunta: 6218 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  En el modelo de estimaci&oacute;n de costes COCOMO se utiliza de base la siguiente funci&oacute;n: 'E = a(Kl)b * m(X)' &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[59]= new Array();
 choices[59][0] = "a y b son variables con valores indefinidos";
 choices[59][1] = "Kl es la cantidad de l&iacute;neas de c&oacute;digo, en millones";
 choices[59][2] = "m(X) es una variable obtenida en una tabla a partir del n&uacute;mero de trabajadores y del conocimiento de las herramientas a utilizar";
 choices[59][3] = "El resultado se da en unidades salario/mes y horas-hombre";
 answers[59] = choices[59][3];
 units[59] = "89";
 comments[59] = "Id Pregunta: 6218. TICB-2009, bloque desarrollo";


//  Id pregunta: 6282 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  &iquest;Qu&eacute; diferencia existe entre factores de &eacute;xito y objetivos de la organizaci&oacute;n?";
 choices[60]= new Array();
 choices[60][0] = "Los factores de &eacute;xito son los &ldquo;fines&rdquo; de la organizaci&oacute;n mientras que los objetivos son los &ldquo;medios&rdquo; para lograr dicho &eacute;xito";
 choices[60][1] = "Los objetivos son los estudios de mercado mientras que los factores de &eacute;xito son las variaciones en los mercados que modifican dichos estudios";
 choices[60][2] = "Los objetivos son los &ldquo;fines&rdquo; de la organizaci&oacute;n mientras que los factores de &eacute;xito son los &ldquo;medios&rdquo; o condiciones que se deben cumplir para alcanzar los objetivos";
 choices[60][3] = "Ninguna de las anteriores";
 answers[60] = choices[60][2];
 units[60] = "77";
 comments[60] = "Id Pregunta: 6282. ";


//  Id pregunta: 6289 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  &iquest;Qu&eacute; informaci&oacute;n deber&aacute; describir, al menos, cada requisito en el an&aacute;lisis de un Sistema de Informaci&oacute;n?";
 choices[61]= new Array();
 choices[61][0] = "Una descripci&oacute;n";
 choices[61][1] = "Un nombre Descriptivo del Requisito";
 choices[61][2] = "Un c&oacute;digo &uacute;nico";
 choices[61][3] = "Todas las anteriores";
 answers[61] = choices[61][3];
 units[61] = "78";
 comments[61] = "Id Pregunta: 6289. ";


//  Id pregunta: 6302 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  &iquest;Cu&aacute;l de los siguientes no es una propiedad del modelo orientado a objetos?";
 choices[62]= new Array();
 choices[62][0] = "Abstracci&oacute;n";
 choices[62][1] = "Encapsulaci&oacute;n";
 choices[62][2] = "Independencia";
 choices[62][3] = "Modularidad";
 answers[62] = choices[62][2];
 units[62] = "82";
 comments[62] = "Id Pregunta: 6302. ";


//  Id pregunta: 6303 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  &iquest;Cu&aacute;l de las siguientes no es una tecnolog&iacute;a de desarrollo de sistemas distribuidos basados en objtetos?";
 choices[63]= new Array();
 choices[63][0] = "DCOM";
 choices[63][1] = "IDL";
 choices[63][2] = "CORBA";
 choices[63][3] = "RMI ";
 answers[63] = choices[63][1];
 units[63] = "82";
 comments[63] = "Id Pregunta: 6303. ";


//  Id pregunta: 6433 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  Dada una empresa en la que se quiere almacenar informaci&oacute;n de sus empleados, departamentos y proyectos en los que colaboran sus empleados, las entidades que resultan son:";
 choices[64]= new Array();
 choices[64][0] = "empleados, departamentos y empresa";
 choices[64][1] = "empresa, proyectos, empleados y departamentos.";
 choices[64][2] = "empleados, proyectos y departamentos.";
 choices[64][3] = "empleados y departamentos.";
 answers[64] = choices[64][2];
 units[64] = "80";
 comments[64] = "Id Pregunta: 6433. NULL";


//  Id pregunta: 6471 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  Indique cu&aacute;l de los siguientes enunciados sobre principios y conceptos fundamentales del Dise&ntilde;o del Software es FALSO:";
 choices[65]= new Array();
 choices[65][0] = "Los principios del dise&ntilde;o s&oacute;lo sirven de gu&iacute;a al ingeniero del software al principio del proceso de dise&ntilde;o. Los conceptos de dise&ntilde;o no proporcionan los criterios b&aacute;sicos para la calidad del dise&ntilde;o.";
 choices[65][1] = "La modularidad (tanto en el programa como en los datos) y el concepto de abstracci&oacute;n permiten que el dise&ntilde;ador simplifique y reutilice los componentes del software.";
 choices[65][2] = "El refinamiento proporciona un mecanismo para representar sucesivas capas de datos funcionales.";
 choices[65][3] = "La ocultaci&oacute;n de informaci&oacute;n y la independencia funcional proporcionan la heur&iacute;stica para conseguir una modularidad efectiva.";
 answers[65] = choices[65][0];
 units[65] = "84";
 comments[65] = "Id Pregunta: 6471. Castilla La Mancha 2009";


//  Id pregunta: 6473 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  UMLSec:";
 choices[66]= new Array();
 choices[66][0] = "Se utiliza en el desarrollo de software para modelizar pol&iacute;ticas de control de acceso, integr&aacute;ndolas en el sistema desarrollado.";
 choices[66][1] = "Es una metodolog&iacute;a para el an&aacute;lisis y la gesti&oacute;n de riesgos en proyectos de desarrollo orientado a objetos.";
 choices[66][2] = "Es sin&oacute;nimo de SecureUML.";
 choices[66][3] = "Ninguna de las anteriores.";
 answers[66] = choices[66][3];
 units[66] = "84";
 comments[66] = "Id Pregunta: 6473. Castilla La Mancha 2009";


//  Id pregunta: 6529 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  Qu&eacute; afirmaci&oacute;n es FALSA en relaci&oacute;n al concepto Configuraci&oacute;n de referencia?";
 choices[67]= new Array();
 choices[67][0] = "Es la configuraci&oacute;n de un producto o un sistema en un momento espec&iacute;fico en el tiempo";
 choices[67][1] = "Es la configuraci&oacute;n de un producto o un sistema en un momento espec&iacute;fico en el tiempo, donde no se capturan ni la estructura ni los detalles";
 choices[67][2] = "Es la base estable para un futuro desarrollo";
 choices[67][3] = "Registro de elementos de configuraci&oacute;n afectados por una RFC";
 answers[67] = choices[67][1];
 units[67] = "98";
 comments[67] = "Id Pregunta: 6529. NULL";


//  Id pregunta: 6533 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)  Los desajustes en los cumplimientos de las expectativas y especificaciones de los servicios determinan";
 choices[68]= new Array();
 choices[68][0] = "El grado de satisfacci&oacute;n de los usuarios";
 choices[68][1] = "Percepci&oacute;n del servicio y expectativas previas de los usuarios";
 choices[68][2] = "A y B son correctas";
 choices[68][3] = "A y B son incorrectas";
 answers[68] = choices[68][2];
 units[68] = "92";
 comments[68] = "Id Pregunta: 6533. NULL";


//  Id pregunta: 6606 AÃ±o de creación de pregunta: 2010-01-01
 questions[69]= "70)  Cual de las siguientes t&eacute;cnicas no se contempla en el An&aacute;lisis Estructurado";
 choices[69]= new Array();
 choices[69][0] = "Diagrama de Flujos de Control";
 choices[69][1] = "Diccionario de Datos";
 choices[69][2] = "Diagrama de Interaci&oacute;n";
 choices[69][3] = "Tabla de Activaci&oacute;n de Procesos";
 answers[69] = choices[69][2];
 units[69] = "81";
 comments[69] = "Id Pregunta: 6606. NULL";


//  Id pregunta: 6627 AÃ±o de creación de pregunta: 2010-01-01
 questions[70]= "71)  El orden de los niveles del modelo CMM de Ingenier&iacute;a de Software es:";
 choices[70]= new Array();
 choices[70][0] = "Inicial; Repetible; Definido; Gestionado; Optimizado";
 choices[70][1] = "Inicial; Definido; Repetible; Gestionado; Optimizado";
 choices[70][2] = "Inicial; Definido; Gestionado; Repetible; Optimizado";
 choices[70][3] = "Inicial; Repetible; Gestionado; Definido; Optimizado";
 answers[70] = choices[70][0];
 units[70] = "87";
 comments[70] = "Id Pregunta: 6627. NULL";


//  Id pregunta: 8186 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  Seg&uacute;n el m&eacute;todo de puntos funci&oacute;n de Albrecht, marque la respuesta correcta para el valor de PFA (Puntos de Funci&oacute;n Ajustados), si PFNA (Puntos de Funci&oacute;n No Ajustados) y SVA (Suma de los Valores de los 14 Atributos o caracter&iacute;sticasgenerales del sistema) valen respectivamente 100 y 65:";
 choices[71]= new Array();
 choices[71][0] = "165";
 choices[71][1] = "120";
 choices[71][2] = "SVA no puede tener un valor superior a 50.";
 choices[71][3] = "130";
 answers[71] = choices[71][3];
 units[71] = "89";
 comments[71] = "Id Pregunta: 8186. Examen TIC A1 2010";


//  Id pregunta: 8228 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  En programaci&oacute;n orientada a objetos, la capacidad de un objeto de una clase dada A de aparecer y comportarse como si fuera de la clase B se conoce como:";
 choices[72]= new Array();
 choices[72][0] = "Herencia.";
 choices[72][1] = "Extensibilidad.";
 choices[72][2] = "Sobrecarga.";
 choices[72][3] = "Polimorfismo.";
 answers[72] = choices[72][3];
 units[72] = "82";
 comments[72] = "Id Pregunta: 8228. Examen TIC A1 2010";


//  Id pregunta: 8389 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  &iquest;En cual de las siguientes pruebas interviene el usuario final?";
 choices[73]= new Array();
 choices[73][0] = "Pruebas de Caja Blanca.";
 choices[73][1] = "Pruebas de Aceptaci&oacute;n.";
 choices[73][2] = "Pruebas de Implantaci&oacute;n.";
 choices[73][3] = "Pruebas de Regresi&oacute;n.";
 answers[73] = choices[73][1];
 units[73] = "86";
 comments[73] = "Id Pregunta: 8389. Examen TIC A2 2010";


//  Id pregunta: 8396 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  &iquest;Qu&eacute; tipo de nodo de control se emplea en un diagrama de actividades de UML 2.0 para indicar la sincronizaci&oacute;n de varios flujos concurrentes en uno solo?";
 choices[74]= new Array();
 choices[74][0] = "Divisi&oacute;n (fork node).";
 choices[74][1] = "Bifurcaci&oacute;n (decision node).";
 choices[74][2] = "Fusi&oacute;n (merge node).";
 choices[74][3] = "Union (join node).";
 answers[74] = choices[74][3];
 units[74] = "84";
 comments[74] = "Id Pregunta: 8396. Examen TIC A2 2010";


//  Id pregunta: 8508 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  &iquest;Cu&aacute;l de los siguientes elementos de VoiceXML v2.0 captura un evento de ayuda? ";
 choices[75]= new Array();
 choices[75][0] = "&lt;catch&gt; ";
 choices[75][1] = "&lt;help&gt; ";
 choices[75][2] = "&lt;field&gt; ";
 choices[75][3] = "&lt;record&gt; ";
 answers[75] = choices[75][1];
 units[75] = "94";
 comments[75] = "Id Pregunta: 8508. Examen TIC A2 2010";


//  Id pregunta: 8631 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  En el modelo de ciclo de vida en espiral, &iquest;en qu&eacute; actividad se decide s&iacute; continuamos con las fases siguientes?";
 choices[76]= new Array();
 choices[76][0] = "An&aacute;lisis del riesgo.";
 choices[76][1] = "Evaluaci&oacute;n de la situaci&oacute;n.";
 choices[76][2] = "Desarrollar, verificar y validar (probar).";
 choices[76][3] = "Planificar.";
 answers[76] = choices[76][3];
 units[76] = "76";
 comments[76] = "Id Pregunta: 8631. Examen TIC A2 2010 interna";


//  Id pregunta: 8875 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  &ldquo;Los casos de uso&rdquo; son una t&eacute;cnica utilizada para la especificaci&oacute;n de los requisitos que debe de cumplir el software, &iquest;cu&aacute;l de estas afirmaciones es v&aacute;lida?:";
 choices[77]= new Array();
 choices[77][0] = "No es una t&eacute;cnica v&aacute;lida para desarrollos estructurados";
 choices[77][1] = "Es una t&eacute;cnica v&aacute;lida s&oacute;lo para desarrollos orientados a objetos";
 choices[77][2] = "Es una t&eacute;cnica v&aacute;lida tanto en desarrollos estructurados como en orientaci&oacute;n a objetos, aunque en este caso se propone como t&eacute;cnica obligatoria";
 choices[77][3] = "Es una t&eacute;cnica obligatoria tanto para desarrollos estructurados como para orientados a objetos";
 answers[77] = choices[77][2];
 units[77] = "78";
 comments[77] = "Id Pregunta: 8875. Analista Ayto. Madrid 2010";


//  Id pregunta: 8966 AÃ±o de creación de pregunta: 2011-01-01
 questions[78]= "79)  El modelo de Prototipado Evolutivo  fue creado por:";
 choices[78]= new Array();
 choices[78][0] = "Hirsch";
 choices[78][1] = "Royce";
 choices[78][2] = "Jackson";
 choices[78][3] = "Bohem";
 answers[78] = choices[78][2];
 units[78] = "76,85";
 comments[78] = "Id Pregunta: 8966. ";


//  Id pregunta: 8971 AÃ±o de creación de pregunta: 2011-01-01
 questions[79]= "80)  &iquest;Cu&aacute;l de las siguientes definiciones corresponde a la Teor&iacute;a de la Calidad de la Productividad de Lowler?";
 choices[79]= new Array();
 choices[79][0] = "El coste de la calidad siempre es el mismo independientemente del coste";
 choices[79][1] = "Cuanta m&aacute;s calidad tiene un producto m&aacute;s caro es de producir";
 choices[79][2] = "Un producto de calidad es m&aacute;s barato de producir";
 choices[79][3] = "Es caro de producir en primera instancia, a mitad del desarrollo es independiente y al final el coste se encarece exponencialmente";
 answers[79] = choices[79][2];
 units[79] = "87.88";
 comments[79] = "Id Pregunta: 8971. NULL";


//  Id pregunta: 9181 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  En procesamiento de im&aacute;genes, la transformada de Hough se utiliza para:";
 choices[80]= new Array();
 choices[80][0] = "Encontrar l&iacute;neas o c&iacute;rculos en im&aacute;genes";
 choices[80][1] = "Detectar los falsos bordes que se hayan encontrado mediante el Algoritmo de Marr-Hildred";
 choices[80][2] = "Dividir una imagen en varias regiones";
 choices[80][3] = "Crear histogramas de las im&aacute;genes precargadas";
 answers[80] = choices[80][0];
 units[80] = "93";
 comments[80] = "Id Pregunta: 9181. NULL";


//  Id pregunta: 9745 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  &iquest;Qu&eacute; es el Marco Com&uacute;n de Evaluaci&oacute;n (CAF) 2013?";
 choices[81]= new Array();
 choices[81][0] = "CAF ofrece dos sistemas de puntuaci&oacute;n, el cl&aacute;sico y el refinado, s&oacute;lo el primero de ellos est&aacute; fundamentado sobre el Ciclo de Deming.";
 choices[81][1] = "Es uno del los ejes del modelo EFQM.";
 choices[81][2] = "Es una herramienta de gesti&oacute;n de la calidad total, desarrollada por y para el sector p&uacute;blico.";
 choices[81][3] = "Es una autoevaluaci&oacute;n que debe realizar una organizaci&oacute;n conforme a lo que dicta la norma ISO 9000.";
 answers[81] = choices[81][2];
 units[81] = "92";
 comments[81] = "Id Pregunta: 9745. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9793 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  &iquest;Cu&aacute;l de entre los siguientes es un software de gesti&oacute;n documental?";
 choices[82]= new Array();
 choices[82][0] = "Steam";
 choices[82][1] = "OpenKM";
 choices[82][2] = "Avast";
 choices[82][3] = "Lucene";
 answers[82] = choices[82][1];
 units[82] = "95";
 comments[82] = "Id Pregunta: 9793. Examen TIC A2 2013";


//  Id pregunta: 9897 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  En relaci&oacute;n al reconocimiento &oacute;ptico de caracteres, el proceso de Kerning consiste en eliminar el espacio excesivo entre";
 choices[83]= new Array();
 choices[83][0] = "bloques en los que se encuentra dividida una p&aacute;gina.";
 choices[83][1] = "l&iacute;neas de texto.";
 choices[83][2] = "palabras de una l&iacute;nea de texto.";
 choices[83][3] = "letras de una palabra.";
 answers[83] = choices[83][3];
 units[83] = "94";
 comments[83] = "Id Pregunta: 9897. TIC A1, Examen 2013";


//  Id pregunta: 9907 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  De las siguientes cuatro opciones, tres son tareas incluidas en la actividad &quot;GPI 2&quot; del interfaz de Gesti&oacute;n de Proyectos de M&eacute;trica v3, indique cu&aacute;l es la INCORRECTA:";
 choices[84]= new Array();
 choices[84][0] = "Selecci&oacute;n de la Estrategia de Desarrollo.";
 choices[84][1] = "Establecimiento del Calendario de Hitos y Entregas.";
 choices[84][2] = "Planificaci&oacute;n Detallada de Actividades y Recursos Necesarios.";
 choices[84][3] = "C&aacute;lculo del Esfuerzo.";
 answers[84] = choices[84][3];
 units[84] = "86";
 comments[84] = "Id Pregunta: 9907. TIC A2, Examen 2013";


//  Id pregunta: 9982 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Una p&aacute;gina ASP mezcla en el mismo archivo secuencias de comandos con c&oacute;digo HTML est&aacute;ndar con las secuencias de comandos asp mediante los delimitadores:";
 choices[85]= new Array();
 choices[85][0] = "&lt;% y %&gt;";
 choices[85][1] = "&lt;SCRIPT LANGUAGE=ASPScript&gt;&lt;/SCRIPT&gt;";
 choices[85][2] = "&lt;!-- --&gt;";
 choices[85][3] = "Los comandos ASP no se mezclan en el mismo archivo que el c&oacute;digo HTML, sino que se importan desde otro archivo";
 answers[85] = choices[85][0];
 units[85] = "59.115";
 comments[85] = "Id Pregunta: 9982. TIC A2, UPM, Examen 2010";


//  Id pregunta: 9992 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  &iquest;Cu&aacute;l de las siguientes no es una forma de pago admitida por la Pasarela de Pagos de la Agencia Tributaria?";
 choices[86]= new Array();
 choices[86][0] = "Pago mediante cargo en cuenta";
 choices[86][1] = "Pago con tarjeta";
 choices[86][2] = "Pago por cargo en cuenta de terceras personas, previo apoderamiento registrado en &ldquo;Registro de apoderamientos&rdquo;";
 choices[86][3] = "Pago mediante remesa de importaci&oacute;n para obligados contribuyentes con residencia en el extranjero";
 answers[86] = choices[86][3];
 units[86] = "70";
 comments[86] = "Id Pregunta: 9992. NULL";


//  Id pregunta: 10081 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  &iquest;Cu&aacute;l de los siguientes modelos de ciclo de vida orientado a objetos tiene un enfoque ascendente?";
 choices[87]= new Array();
 choices[87][0] = "Pinball";
 choices[87][1] = "Remolino";
 choices[87][2] = "Cluster";
 choices[87][3] = "Fuente";
 answers[87] = choices[87][2];
 units[87] = "76";
 comments[87] = "Id Pregunta: 10081. NULL";


//  Id pregunta: 10084 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  De acuerdo al marco de desarrollo PUDS, &iquest;cu&aacute;l de los siguientes NO es un flujo de trabajo de soporte?";
 choices[88]= new Array();
 choices[88][0] = "Gesti&oacute;n de la configuraci&oacute;n";
 choices[88][1] = "Gesti&oacute;n";
 choices[88][2] = "Entorno de desarrollo";
 choices[88][3] = "Pruebas";
 answers[88] = choices[88][3];
 units[88] = "76";
 comments[88] = "Id Pregunta: 10084. NULL";


//  Id pregunta: 10099 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  Se&ntilde;ala la afirmaci&oacute;n correcta sobre el an&aacute;lisis estructurado";
 choices[89]= new Array();
 choices[89][0] = "El modelo ambiental se compone del modelo esencial y el modelo de comportamiento.";
 choices[89][1] = "El modelo esencial se compone del modelo ambiental y el modelo de comportamiento.";
 choices[89][2] = "El modelo de compotamiento se compone del modelo ambiental y el modelo esencial.";
 choices[89][3] = "El modelo ambiental se compone del modelo estructural y el modelo esencial.";
 answers[89] = choices[89][1];
 units[89] = "81";
 comments[89] = "Id Pregunta: 10099. NULL";


//  Id pregunta: 10105 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  Indique cu&aacute;l no es una t&eacute;cnica de an&aacute;lisis estructurado";
 choices[90]= new Array();
 choices[90][0] = "SADR";
 choices[90][1] = "SASS";
 choices[90][2] = "SRD";
 choices[90][3] = "SADT";
 answers[90] = choices[90][0];
 units[90] = "81";
 comments[90] = "Id Pregunta: 10105. NULL";


//  Id pregunta: 10640 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Indique cu&aacute;l de &eacute;stas no es una herramienta BPM:";
 choices[91]= new Array();
 choices[91][0] = "Intalio";
 choices[91][1] = "Scrum";
 choices[91][2] = "Tibco";
 choices[91][3] = "Adonis";
 answers[91] = choices[91][1];
 units[91] = "79";
 comments[91] = "Id Pregunta: 10640. ";


//  Id pregunta: 10643 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l de estos no es un concepto fundamental de la excelencia seg&uacute;n el modelo EFQM?";
 choices[92]= new Array();
 choices[92][0] = "Orientaci&oacute;n hacia los resultados";
 choices[92][1] = "Liderazgo y coherencia en los objetivos";
 choices[92][2] = "Desarrollo de Alianzas";
 choices[92][3] = "Planificaci&oacute;n a corto plazo";
 answers[92] = choices[92][3];
 units[92] = "92";
 comments[92] = "Id Pregunta: 10643. ";


//  Id pregunta: 10647 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  En un modelo Entidad / Relaci&oacute;n extendido, las relaciones pueden ser:";
 choices[93]= new Array();
 choices[93][0] = "Regular o d&eacute;bil.";
 choices[93][1] = "De dependencia en existencia o de dependencia en identificaci&oacute;n.";
 choices[93][2] = "Exclusivas o no exclusivas.";
 choices[93][3] = "Todas las anteriores.";
 answers[93] = choices[93][3];
 units[93] = "80";
 comments[93] = "Id Pregunta: 10647. ";


//  Id pregunta: 10649 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Alfresco, OpenKM y Nuxeo son:";
 choices[94]= new Array();
 choices[94][0] = "Gestores de portales.";
 choices[94][1] = "Gestores documentales.";
 choices[94][2] = "Gestores de contenidos web.";
 choices[94][3] = "Todos los anteriores.";
 answers[94] = choices[94][1];
 units[94] = "95";
 comments[94] = "Id Pregunta: 10649. ";


//  Id pregunta: 10939 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  En el modelo EFQM, la &quot;Gesti&oacute;n y mejora de las relaciones con los clientes&quot; es un subcriterio correspondiente al criterio:";
 choices[95]= new Array();
 choices[95][0] = "Resultados en los clientes.";
 choices[95][1] = "Resultados clave.";
 choices[95][2] = "Alianzas y recursos.";
 choices[95][3] = "Procesos.";
 answers[95] = choices[95][3];
 units[95] = "92";
 comments[95] = "Id Pregunta: 10939. TIC A1 AGE 2014";


//  Id pregunta: 11076 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Cu&aacute;l las siguientes afirmaciones acerca del proceso de Gesti&oacute;n Proveedores es INCORRECTA?";
 choices[96]= new Array();
 choices[96][0] = "Gesti&oacute;n de Proveedores negocia los acuerdos internos y externos para dar soporte en la entrega de los servicios";
 choices[96][1] = "Gesti&oacute;n de Proveedores asegura que los proveedores satisfacen las expectativas del negocio";
 choices[96][2] = "Gesti&oacute;n de Proveedores mantiene la informaci&oacute;n de la Base de Datos de Proveedores y Contratos";
 choices[96][3] = "Gesti&oacute;n de Proveedores debe involucrarse en todas las etapas del Ciclo de Vida del Servicio, desde la Estrategia, pasando por Dise&ntilde;o, Transici&oacute;n, Operaci&oacute;n y Mejora";
 answers[96] = choices[96][0];
 units[96] = "98";
 comments[96] = "Id Pregunta: 11076. ";


//  Id pregunta: 11390 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta para todos los procesos?";
 choices[97]= new Array();
 choices[97][0] = "Definen funciones como parte de su dise&ntilde;o";
 choices[97][1] = "Entregan resultados al cliente o a interesados";
 choices[97][2] = "Son llevados a cabo por un proveedor de servicios externo, en apoyo a un cliente";
 choices[97][3] = "Son unidades de organizaciones responsables de resultados espec&iacute;ficos";
 answers[97] = choices[97][1];
 units[97] = "98";
 comments[97] = "Id Pregunta: 11390. ";


//  Id pregunta: 11403 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes afirmaciones sobre gesti&oacute;n de suministradores es incorrecta?";
 choices[98]= new Array();
 choices[98][0] = "La gesti&oacute;n de suministradores negocia acuerdos de nivel operacional (OLA)";
 choices[98][1] = "La gesti&oacute;n de suministradores asegura que los suministradores cumplan con las expectativas del negocio";
 choices[98][2] = "La gesti&oacute;n de suministradores mantiene informaci&oacute;n en un sistema de gesti&oacute;n de suministradores y contratos";
 choices[98][3] = "La gesti&oacute;n de suministradores negocia acuerdos externos para ayudar en la provisi&oacute;n de servicios";
 answers[98] = choices[98][0];
 units[98] = "98";
 comments[98] = "Id Pregunta: 11403. ";


//  Id pregunta: 11541 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  En relaci&oacute;n con las t&eacute;cnicas de planificaci&oacute;n de proyectos se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[99]= new Array();
 choices[99][0] = "Una diferencia entre PERT y CPM es que este &uacute;ltimo considera que los tiempos de las actividades se conocen en forma determin&iacute;stica y se pueden variar cambiando el nivel de recursos utilizados.";
 choices[99][1] = "PERT considera que cuando el n&uacute;mero de actividades de un proyecto es lo suficientemente elevado, la duraci&oacute;n del proyecto es una variable aleatoria que converge en una distribuci&oacute;n Normal.";
 choices[99][2] = "El diagrama de GANTT realiza la planificaci&oacute;n y la programaci&oacute;n al mismo tiempo.";
 choices[99][3] = "Son correctas todas las afirmaciones anteriores.";
 answers[99] = choices[99][3];
 units[99] = "89";
 comments[99] = "Id Pregunta: 11541. NULL";


