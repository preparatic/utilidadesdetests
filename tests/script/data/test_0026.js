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

//  Id pregunta: 50 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de los siguientes no es un organismo nacional para la formulaci&oacute;n de est&aacute;ndares?:";
 choices[0]= new Array();
 choices[0][0] = "ANSI";
 choices[0][1] = "JIS";
 choices[0][2] = "DIN";
 choices[0][3] = "CEN";
 answers[0] = choices[0][3];
 units[0] = "42";
 comments[0] = "Id Pregunta: 50. ";


//  Id pregunta: 66 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Qu&eacute; indica un nivel de prioridad 3 en la norma WCAG 1.0 del WAI sobre un punto de verificaci&oacute;n?";
 choices[1]= new Array();
 choices[1][0] = "Un desarrollador de contenidos de p&aacute;ginas web tiene que satisfacer el punto de verificaci&oacute;n ";
 choices[1][1] = "Un desarrollador de contenidos de p&aacute;ginas web debe satisfacer el punto de verificaci&oacute;n";
 choices[1][2] = "Un desarrollador de contenidos de p&aacute;ginas web puede satisfacer el punto de verificaci&oacute;n";
 choices[1][3] = "Ninguna de las opciones anteriores es correcta";
 answers[1] = choices[1][2];
 units[1] = "39";
 comments[1] = "Id Pregunta: 66. ";


//  Id pregunta: 199 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  La seguridad f&iacute;sica de los sitemas de informaci&oacute;n:";
 choices[2]= new Array();
 choices[2][0] = "Debido a la segregaci&oacute;n de tareas, es labor exclusiva de los guardias de seguridad";
 choices[2][1] = "Debe alcanzar tambi&eacute;n a los equipos que est&eacute;n fuera de los locales de la Organizaci&oacute;n (equipos en teletrabajo, port&aacute;tiles, PDAs, etc.)";
 choices[2][2] = "Es una preocupaci&oacute;n que se evita al externalizar las funciones de explotaci&oacute;n del sistema de informaci&oacute;n";
 choices[2][3] = "Es notablemente superior en aquellas Organizaciones que disponen de s&oacute;tanos bunkerizados";
 answers[2] = choices[2][1];
 units[2] = "33";
 comments[2] = "Id Pregunta: 199. Examen TIC MAP B 2004";


//  Id pregunta: 213 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  En la estructura de un sistema de informaci&oacute;n:";
 choices[3]= new Array();
 choices[3][0] = "En la dimensi&oacute;n vertical las funciones se subdividen en aplicaciones o procedimientos";
 choices[3][1] = "En la dimensi&oacute;n horizontal las funciones se subdividen en aplicaciones o procedimientos";
 choices[3][2] = "La dimensi&oacute;n vertical se subdivide en los niveles operacional, t&aacute;ctico y estrat&eacute;gico";
 choices[3][3] = "Las respuestas &lsquo;b&rsquo; y &lsquo;c&rsquo; son correctas";
 answers[3] = choices[3][3];
 units[3] = "21";
 comments[3] = "Id Pregunta: 213. ";


//  Id pregunta: 247 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  En una organizaci&oacute;n de tipo gran hermano:";
 choices[4]= new Array();
 choices[4][0] = "El HW est&aacute; distribuido, y no se descentraliza la capacidad de realizar SW ni las decisiones";
 choices[4][1] = "El HW est&aacute; distribuido y el desarrollo tambi&eacute;n, pero no las decisiones";
 choices[4][2] = "El HW no est&aacute; distribuido y se descentraliza la capacidad de realizar SW y las decisiones";
 choices[4][3] = "El HW, el desarrollo y las decisiones se descentralizan";
 answers[4] = choices[4][0];
 units[4] = "22";
 comments[4] = "Id Pregunta: 247. ";


//  Id pregunta: 425 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  Seg&uacute;n el modelo de Donovan sobre la evoluci&oacute;n de la inform&aacute;tica en las organizaciones, un tipo de organizaci&oacute;n en el que se descentralizan HW y decisiones sobre inform&aacute;tica pero no as&iacute; la facultad de desarrollar aplicaciones se denomina:";
 choices[5]= new Array();
 choices[5][0] = "Mano amiga";
 choices[5][1] = "Gran hermano";
 choices[5][2] = "Perro vigilante";
 choices[5][3] = "Semiacoplada";
 answers[5] = choices[5][0];
 units[5] = "22";
 comments[5] = "Id Pregunta: 425. donovan - nolan";


//  Id pregunta: 436 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Seg&uacute;n la Ley 1/1996 de Propiedad Intelectual, s&oacute;lo una de las siguientes definiciones es correcta:";
 choices[6]= new Array();
 choices[6][0] = "Obra en colaboraci&oacute;n: aquella resultado de la colaboraci&oacute;n de varios autores, correspondiendo el derecho a todos ellos en la proporci&oacute;n que determinen";
 choices[6][1] = "Obra compuesta: aquella obra nueva que incorpore una obra existente con la colaboraci&oacute;n del autor de &eacute;sta &uacute;ltima";
 choices[6][2] = "Las 2 anteriores son definiciones correctas";
 choices[6][3] = "Las 2 primeras son definiciones incorrectas";
 answers[6] = choices[6][0];
 units[6] = "36";
 comments[6] = "Id Pregunta: 436. ";


//  Id pregunta: 539 AÃ±o de creación de pregunta: 2004-01-01
 questions[7]= "8)  En metodolog&iacute;a PERT, la cantidad de unidades de tiempo en exceso para la realizaci&oacute;n de una tarea suponiendo que comienzan y terminan en las &uacute;ltimas fechas permisibles se llama ...";
 choices[7]= new Array();
 choices[7][0] = "Holgura condicionada";
 choices[7][1] = "Holgura independiente";
 choices[7][2] = "Holgura libre";
 choices[7][3] = "Holgura total";
 answers[7] = choices[7][0];
 units[7] = "28";
 comments[7] = "Id Pregunta: 539. ";


//  Id pregunta: 590 AÃ±o de creación de pregunta: 2006-01-01
 questions[8]= "9)  Entre las actividades de planificaci&oacute;n de proyectos no se encuentra:";
 choices[8]= new Array();
 choices[8][0] = "An&aacute;lisis operacional.";
 choices[8][1] = "Dise&ntilde;o t&eacute;cnico.";
 choices[8][2] = "An&aacute;lisis de riesgos.";
 choices[8][3] = "Definici&oacute;n de los requerimientos.";
 answers[8] = choices[8][1];
 units[8] = "27";
 comments[8] = "Id Pregunta: 590. ";


//  Id pregunta: 664 AÃ±o de creación de pregunta: 2006-01-01
 questions[9]= "10)  En un proceso de evaluaci&oacute;n de bienes y servicios inform&aacute;ticos,  el m&eacute;todo de ordenaci&oacute;n de alternativas PROMETHEE:";
 choices[9]= new Array();
 choices[9][0] = "Cuantifica la diferencia y al trabajar con los pesos de los criterios, considera si esa diferencia se ha hallado en un criterio m&aacute;s o menos importante para el decisor";
 choices[9][1] = "Ignora la cuant&iacute;a de la diferencia, solo se&ntilde;ala si existe o no, y al trabajar con los pesos de los criterios, ignora si esa diferencia se ha hallado en un criterio m&aacute;s o menos importante para el decisor";
 choices[9][2] = "Ignora la cuant&iacute;a de la diferencia, solo se&ntilde;ala si existe o no y al trabajar con los pesos de los criterios, considera si esa diferencia se ha hallado en un criterio m&aacute;s o menos importante para el decisor";
 choices[9][3] = "Cuantifica la diferencia, y al trabajar con los pesos de los criterios, ignora si esa diferencia se ha hallado en un criterio m&aacute;s o menos importante para el decisor";
 answers[9] = choices[9][2];
 units[9] = "34";
 comments[9] = "Id Pregunta: 664. ";


//  Id pregunta: 666 AÃ±o de creación de pregunta: 2006-01-01
 questions[10]= "11)  El est&aacute;ndar  de servicios de directorio recogido en la arquitectura Open Systems Interconnection, para la Interconexi&oacute;n de Sistemas Abiertos es";
 choices[10]= new Array();
 choices[10][0] = "X.600";
 choices[10][1] = "Open LDAP";
 choices[10][2] = "X.400";
 choices[10][3] = "X.500";
 answers[10] = choices[10][3];
 units[10] = "40";
 comments[10] = "Id Pregunta: 666. ";


//  Id pregunta: 715 AÃ±o de creación de pregunta: 2004-01-01
 questions[11]= "12)  Una base de datos relacional est&aacute; en tercera forma normal, si adem&aacute;s de estar en segunda forma normal";
 choices[11]= new Array();
 choices[11][0] = "Todos sus atributos no primos dependen no transitivamente de la llave primaria";
 choices[11][1] = "Los atributos no primos dependen funcionalmente de la llave primaria";
 choices[11][2] = "Por cada rengl&oacute;n columna contiene valores at&oacute;micos.";
 choices[11][3] = "No contiene ning&uacute;n grupo repetitivo";
 answers[11] = choices[11][0];
 units[11] = "58";
 comments[11] = "Id Pregunta: 715. Similar a examen TIC SS A 2003";


//  Id pregunta: 1102 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  En Java:";
 choices[12]= new Array();
 choices[12][0] = "Los programas son applets, que se ejecutan en un navegador";
 choices[12][1] = "Los programas son de l&iacute;nea de comandos o basados en entornos de ventanas, como AWT o Swing";
 choices[12][2] = "Los programas son aplicaciones web de servidor";
 choices[12][3] = "Todas las anteriores respuestas son ciertas";
 answers[12] = choices[12][3];
 units[12] = "60";
 comments[12] = "Id Pregunta: 1102. NULL";


//  Id pregunta: 1270 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Los applets de Java se ejecutan en el:";
 choices[13]= new Array();
 choices[13][0] = "Servidor web";
 choices[13][1] = "Cliente web";
 choices[13][2] = "Servidor de base de datos";
 choices[13][3] = "Servidor de webmail";
 answers[13] = choices[13][1];
 units[13] = "60";
 comments[13] = "Id Pregunta: 1270. NULL";


//  Id pregunta: 1413 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  Una de las posibilidades clave de la estrategia .NET de Microsoft es el acceso remoto a objetos utilizando, entre otros protocolos, SOAP sobre HTTP. &iquest;Podr&iacute;a comentar qu&eacute; tecnolog&iacute;a de Microsoft, si bien no sobre HTTP, es la antecesora a .Net en este aspecto?:";
 choices[14]= new Array();
 choices[14][0] = "ODBC";
 choices[14][1] = "Visual Basic";
 choices[14][2] = "DCOM";
 choices[14][3] = "DNA";
 answers[14] = choices[14][2];
 units[14] = "59";
 comments[14] = "Id Pregunta: 1413. ";


//  Id pregunta: 1662 AÃ±o de creación de pregunta: 2004-01-01
 questions[15]= "16)  De entre las siguientes maneras de manipular una base de datos SQL, indique la que no es correcta:";
 choices[15]= new Array();
 choices[15][0] = "Interactivamente, convocando directamente las sentencias SQL.";
 choices[15][1] = "Relacionalmente, invocando paralelamente sentencias SQL.";
 choices[15][2] = "Por m&oacute;dulos, agrupando sentencias SQL en m&oacute;dulos.";
 choices[15][3] = "Por medio de SQL embebido";
 answers[15] = choices[15][1];
 units[15] = "58";
 comments[15] = "Id Pregunta: 1662. MAP-B 2003";


//  Id pregunta: 1787 AÃ±o de creación de pregunta: 2006-01-01
 questions[16]= "17)  Las siglas  STRIPS se corresponden a";
 choices[16]= new Array();
 choices[16][0] = "Stanford Research Institute Problem Solver";
 choices[16][1] = "St. Luis Robotics Institute Private Software";
 choices[16][2] = "San Francisco Tech Robots Institute Practical Seasons";
 choices[16][3] = "Science, Tech and Research International Patented System";
 answers[16] = choices[16][0];
 units[16] = "63";
 comments[16] = "Id Pregunta: 1787. ";


//  Id pregunta: 1844 AÃ±o de creación de pregunta: 2006-01-01
 questions[17]= "18)  Indique la respuesta falsa en relaci&oacute;n a las ventajas aportadas por una herramienta de Workflow:";
 choices[17]= new Array();
 choices[17][0] = "Incremento de la productividad";
 choices[17][1] = "Monitorizaci&oacute;n del estado de cualquier proceso";
 choices[17][2] = "Reducci&oacute;n de los tiempos muertos";
 choices[17][3] = "Todas las anteriores son ciertas";
 answers[17] = choices[17][3];
 units[17] = "71";
 comments[17] = "Id Pregunta: 1844. ";


//  Id pregunta: 1865 AÃ±o de creación de pregunta: 2006-01-01
 questions[18]= "19)  &iquest;Qu&eacute; es falso respecto a LDAP?";
 choices[18]= new Array();
 choices[18][0] = "Cada entrada cuenta con un nombre DN";
 choices[18][1] = "Representa todos los campos mediante ASN.1";
 choices[18][2] = "Ha eliminado opciones respecto a DAP";
 choices[18][3] = "Las entradas se pueden organizar en &aacute;rbol";
 answers[18] = choices[18][1];
 units[18] = "74";
 comments[18] = "Id Pregunta: 1865. RFC 4514";


//  Id pregunta: 1915 AÃ±o de creación de pregunta: 2006-01-01
 questions[19]= "20)  En el entorno del lenguaje Java, AWT se refiere a:";
 choices[19]= new Array();
 choices[19][0] = "Una extensi&oacute;n de Swing";
 choices[19][1] = "Una biblioteca de clases Java para el desarrollo de interfaces gr&aacute;ficas de usuario";
 choices[19][2] = "Un conjunto de clases gr&aacute;ficas bajo licencia de IBM/Taligent";
 choices[19][3] = "Una familia de fuentes de caracteres";
 answers[19] = choices[19][1];
 units[19] = "60";
 comments[19] = "Id Pregunta: 1915. NULL";


//  Id pregunta: 1931 AÃ±o de creación de pregunta: 2006-01-01
 questions[20]= "21)  Seleccione la afirmaci&oacute;n incorrecta sobre la relaci&oacute;n de la especificaci&oacute;n Learning Design con otras especificaciones";
 choices[20]= new Array();
 choices[20][0] = "IMS DR puede ser transformado a las caracter&iacute;sticas de Learning Design, particularmente con la clase &quot;abstract person&quot;";
 choices[20][1] = "Learning Design puede ser integrado dentro la estructura de IMS Content Package en la secci&oacute;n de &lt;organization&gt;";
 choices[20][2] = "Learning Design puede incorporar preguntas y test definidos con IMS QTI";
 choices[20][3] = "Learning Design incluye expresiones, metadatos y vocabularios de IMS y IEEE metadata";
 answers[20] = choices[20][0];
 units[20] = "66";
 comments[20] = "Id Pregunta: 1931. ";


//  Id pregunta: 1940 AÃ±o de creación de pregunta: 2006-01-01
 questions[21]= "22)  En referencia al lenguaje XML, &iquest;cu&aacute;l de las siguientes opciones es la correcta?";
 choices[21]= new Array();
 choices[21][0] = "Las hojas de estilo CSS no pueden ser utilizadas con HTML";
 choices[21][1] = "XSL puede usarse para transformar datos XML a documentos HTML/CSS en un servidor Web";
 choices[21][2] = "CSS puede ejecutar cualquier l&oacute;gica basada en los datos";
 choices[21][3] = "CSS y XSL no pueden usarse en paralelo";
 answers[21] = choices[21][1];
 units[21] = "69";
 comments[21] = "Id Pregunta: 1940. NULL";


//  Id pregunta: 2115 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  &iquest;Bajo qu&eacute; normas de la serie ISO-9000 puede certificarse una empresa?:";
 choices[22]= new Array();
 choices[22][0] = "9001, 9002 y 9003";
 choices[22][1] = "S&oacute;lo 9001";
 choices[22][2] = "9000, 9001, 9002, 9003 y 9004";
 choices[22][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[22] = choices[22][1];
 units[22] = "92";
 comments[22] = "Id Pregunta: 2115. NULL";


//  Id pregunta: 2160 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Indicar cu&aacute;les de las siguientes son propiedades fundamentales en la orientaci&oacute;n a objetos:";
 choices[23]= new Array();
 choices[23][0] = "Herencia, encapsulaci&oacute;n, polimorfismo, persistencia";
 choices[23][1] = "Abstracci&oacute;n, reusabilidad";
 choices[23][2] = "Extensibilidad";
 choices[23][3] = "Todas son propiedades fundamentales en la orientaci&oacute;n a objetos";
 answers[23] = choices[23][3];
 units[23] = "82";
 comments[23] = "Id Pregunta: 2160. ";


//  Id pregunta: 2395 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  La ingenier&iacute;a inversa consiste en:";
 choices[24]= new Array();
 choices[24][0] = "Obtener los elementos de dise&ntilde;o de un sistema de informaci&oacute;n a partir del c&oacute;digo fuente y de las estructuras de datos que utiliza.";
 choices[24][1] = "Realizar un proceso de redise&ntilde;o de un sistema de informaci&oacute;n, bas&aacute;ndose en la utilizaci&oacute;n de las nuevas tecnolog&iacute;as de dise&ntilde;o inverso (desde el conocimiento de las posibilidades de las nuevas tecnolog&iacute;as hasta los requerimientos funcionales).";
 choices[24][2] = "Redise&ntilde;ar el c&oacute;digo y las estructuras de un sistema de informaci&oacute;n bas&aacute;ndose en los dise&ntilde;os f&iacute;sicos.";
 choices[24][3] = "Un conjunto de herramientas orientadas a facilitar las fases de an&aacute;lisis y dise&ntilde;o de los sistemas de informaci&oacute;n.";
 answers[24] = choices[24][0];
 units[24] = "91";
 comments[24] = "Id Pregunta: 2395. ";


//  Id pregunta: 2579 AÃ±o de creación de pregunta: 2003-01-01
 questions[25]= "26)  &iquest;Cu&aacute;l de los siguientes no es un Lenguaje orientado a objetos?";
 choices[25]= new Array();
 choices[25][0] = "Eiffel";
 choices[25][1] = "C++";
 choices[25][2] = "Smalltalk";
 choices[25][3] = "C";
 answers[25] = choices[25][3];
 units[25] = "82";
 comments[25] = "Id Pregunta: 2579. ";


//  Id pregunta: 2725 AÃ±o de creación de pregunta: 2006-01-01
 questions[26]= "27)  Una Planificaci&oacute;n Estrat&eacute;gica se caracteriza por:";
 choices[26]= new Array();
 choices[26][0] = "Fijar los objetivos generales de la organizaci&oacute;n.";
 choices[26][1] = "Llevarse a cabo por los altos directivos de la organizaci&oacute;n y por los responsables de los escalonesintermedios.";
 choices[26][2] = "Definir las pol&iacute;ticas y estrategias de la organizaci&oacute;n a corto plazo para la consecuci&oacute;n de losobjetivos concretos que se hayan fijado.";
 choices[26][3] = "Son correctas todas las afirmaciones anteriores.";
 answers[26] = choices[26][0];
 units[26] = "77";
 comments[26] = "Id Pregunta: 2725. ";


//  Id pregunta: 2845 AÃ±o de creación de pregunta: 2006-01-01
 questions[27]= "28)  &iquest;La agudeza visual del hombre es capaz de identificar pixeles de?";
 choices[27]= new Array();
 choices[27][0] = "50&micro;m";
 choices[27][1] = "10&micro;m";
 choices[27][2] = "100&micro;m";
 choices[27][3] = "70&micro;m";
 answers[27] = choices[27][2];
 units[27] = "93";
 comments[27] = "Id Pregunta: 2845. NULL";


//  Id pregunta: 3160 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  &iquest;Cu&aacute;l de las siguientes afirmaciones respecto de los protocolos de gesti&oacute;n de red SNMP y CMIP/CMIS no es cierta?:";
 choices[28]= new Array();
 choices[28][0] = "CMIS/CMIP soporta una arquitectura de objetos (entidades gestionables) m&aacute;s complejos que SNMP";
 choices[28][1] = "CMIS/CMIP contiene las especificaciones para el uso de protocolos SNMP sobre redes OSI mediante la norma CMOT";
 choices[28][2] = "Las aplicaciones de gesti&oacute;n de red basadas en protocolos SNMP est&aacute;n mucho m&aacute;s extendidas en el mercado que las basadas en CMIP";
 choices[28][3] = "CMIS/CMIP es desarrollo conjunto de CCITT e ISO, mientras que SNMP es producto de IETF";
 answers[28] = choices[28][1];
 units[28] = "104";
 comments[28] = "Id Pregunta: 3160. ";


//  Id pregunta: 3745 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  Los terminales dise&ntilde;ados para conectarse directamente a la RDSI, como los tel&eacute;fonos digitales RDSI, un ordenador equipado con tarjeta adaptadora a RDSI y software &ldquo;driver&rdquo; de la tarjeta adaptadora a RDSI se denominan:";
 choices[29]= new Array();
 choices[29][0] = "ET1";
 choices[29][1] = "ET2";
 choices[29][2] = "TR2";
 choices[29][3] = "AT";
 answers[29] = choices[29][0];
 units[29] = "103";
 comments[29] = "Id Pregunta: 3745. ";


//  Id pregunta: 3883 AÃ±o de creación de pregunta: 2003-01-01
 questions[30]= "31)  &iquest;De qu&eacute; manera se puede balancear una granja de servidores?";
 choices[30]= new Array();
 choices[30][0] = "Se puede utilizar un balanceador hardware si hay comunicaci&oacute;n entre los nodos de la granja";
 choices[30][1] = "Se puede utilizar  un software cargado en cada nodo para repartir la carga entre los mismos";
 choices[30][2] = "Se puede hacer el balanceo con un balanceador hardware como con un balanceador software";
 choices[30][3] = "Ninguna de las respuestas es cierta";
 answers[30] = choices[30][2];
 units[30] = "113";
 comments[30] = "Id Pregunta: 3883. ";


//  Id pregunta: 4373 AÃ±o de creación de pregunta: 2007-01-01
 questions[31]= "32)  &iquest;Cu&aacute;l de los siguientes no es un nivel del modelo de calidad CMM (Capacity Mature Model)?";
 choices[31]= new Array();
 choices[31][0] = "Inicial";
 choices[31][1] = "Administrado";
 choices[31][2] = "Definido";
 choices[31][3] = "Ideal";
 answers[31] = choices[31][3];
 units[31] = "88";
 comments[31] = "Id Pregunta: 4373. NULL";


//  Id pregunta: 4590 AÃ±o de creación de pregunta: 2007-01-01
 questions[32]= "33)  Un puente como elemento de interconexi&oacute;n de redes en que capa del modelo OSI opera:";
 choices[32]= new Array();
 choices[32][0] = "enlace de datos";
 choices[32][1] = "red";
 choices[32][2] = "transporte";
 choices[32][3] = "ninguna de las anteriores";
 answers[32] = choices[32][0];
 units[32] = "99";
 comments[32] = "Id Pregunta: 4590. NULL";


//  Id pregunta: 4751 AÃ±o de creación de pregunta: 2009-01-01
 questions[33]= "34)  &iquest;Cu&aacute;l de los siguientes sistemas de telefon&iacute;a se dise&ntilde;o para trabajar en espacios reducidos y altas densidades de tr&aacute;fico?";
 choices[33]= new Array();
 choices[33][0] = "GSM 900";
 choices[33][1] = "TACS";
 choices[33][2] = "DECT";
 choices[33][3] = "PAS";
 answers[33] = choices[33][2];
 units[33] = "108";
 comments[33] = "Id Pregunta: 4751. ";


//  Id pregunta: 4913 AÃ±o de creación de pregunta: 2003-01-01
 questions[34]= "35)  &iquest;Para cu&aacute;les de los siguientes sistemas se debe configurar la base de datos optimizando las inserciones, modificaciones y borrado de datos y asegurando un alto nivel de concurrencia?";
 choices[34]= new Array();
 choices[34][0] = "OLTP (sistemas transaccionales on line).";
 choices[34][1] = "DSS (sistemas de soporte a la decisi&oacute;n).";
 choices[34][2] = "Data Warehouse (almacenes de datos).";
 choices[34][3] = "ERP (sistemas de planificaci&oacute;n de recursos).";
 answers[34] = choices[34][0];
 units[34] = "68";
 comments[34] = "Id Pregunta: 4913. Examen TIC B 2007";


//  Id pregunta: 5160 AÃ±o de creación de pregunta: 2003-01-01
 questions[35]= "36)  Un HUB es un dispositivo de interconexi&oacute;n utilizado para:";
 choices[35]= new Array();
 choices[35][0] = "Enlazar LANs separadas y proporcionar filtrado de paquetes entre ellas.";
 choices[35][1] = "Interconectar redes con protocolos y arquitecturas completamente diferentes, a todos los niveles de comunicaci&oacute;n.";
 choices[35][2] = "Concentrar y organizar el cableado en una red de &aacute;rea local.";
 choices[35][3] = "Controlar las comunicaciones, permit&eacute;ndolas o prohibi&eacute;ndolas seg&uacute;n las pol&iacute;ticas de red que haya definido la organizaci&oacute;n responsable de la red.";
 answers[35] = choices[35][2];
 units[35] = "102";
 comments[35] = "Id Pregunta: 5160. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5566 AÃ±o de creación de pregunta: 2003-01-01
 questions[36]= "37)  &iquest;A qu&eacute; se dedica el grupo de trabajo 802.17 del IEEE?";
 choices[36]= new Array();
 choices[36][0] = "Grupo asesor en regulaci&oacute;n radioel&eacute;ctrica";
 choices[36][1] = "Grupo asesor en coexistencia de est&aacute;ndares 802";
 choices[36][2] = "Resilient Packet Ring";
 choices[36][3] = "Traspaso entre redes";
 answers[36] = choices[36][2];
 units[36] = "101";
 comments[36] = "Id Pregunta: 5566. ";


//  Id pregunta: 5741 AÃ±o de creación de pregunta: 2009-01-01
 questions[37]= "38)  &iquest;Tiene la firma electr&oacute;nica el mismo valor ante la ley que la firma manuscrita?";
 choices[37]= new Array();
 choices[37][0] = "S&iacute;, siempre";
 choices[37][1] = "No, en ning&uacute;n caso";
 choices[37][2] = "S&iacute;, si es firma electr&oacute;nica avanzada";
 choices[37][3] = "S&iacute;, si es firma electr&oacute;nica reconocida";
 answers[37] = choices[37][3];
 units[37] = "30";
 comments[37] = "Id Pregunta: 5741. Ley 59/2003, art&iacute;culo 3.4";


//  Id pregunta: 5815 AÃ±o de creación de pregunta: 2009-01-01
 questions[38]= "39)  &iquest;Cu&aacute;l de los siguientes procedimientos de adjudicaci&oacute;n NO se contempla en el RD Legislativo 3/2011 de Contratos del Sector P&uacute;blico?";
 choices[38]= new Array();
 choices[38][0] = "Negociado";
 choices[38][1] = "Abierto";
 choices[38][2] = "Restringido";
 choices[38][3] = "Concurso";
 answers[38] = choices[38][3];
 units[38] = "41";
 comments[38] = "Id Pregunta: 5815. El concurso no es un procedimiento de adjudicaci&oacute;n.";


//  Id pregunta: 5953 AÃ±o de creación de pregunta: 2009-01-01
 questions[39]= "40)  &iquest;Qu&eacute; es com&uacute;n a todas las tecnolog&iacute;as de virtualizaci&oacute;n?";
 choices[39]= new Array();
 choices[39][0] = "Simulaci&oacute;n del Hardware Completo";
 choices[39][1] = "Simulaci&oacute;n del Sistema Operativo";
 choices[39][2] = "Ocultaci&oacute;n de los detalles t&eacute;cnicos a trav&eacute;s de la encapsulaci&oacute;n";
 choices[39][3] = "Paravirtualizaci&oacute;n, donde se ofrece un API especial que debe usarse modificando el sistema operativo &quot;guest&quot;";
 answers[39] = choices[39][2];
 units[39] = "119";
 comments[39] = "Id Pregunta: 5953. ";


//  Id pregunta: 5986 AÃ±o de creación de pregunta: 2010-01-01
 questions[40]= "41)  Las arquitecturas orientadas a servicios est&aacute;n basadas en una serie de principios b&aacute;sicos, uno de los cu&aacute;les es:";
 choices[40]= new Array();
 choices[40][0] = "Los servicios usan una arquitectura &quot;hub-in-spoke&quot;";
 choices[40][1] = "Se integran en sistemas SGDBR";
 choices[40][2] = "Los cambios en la implementaci&oacute;n afectan a los consumidores del servicio";
 choices[40][3] = "Deben estar accesibles y deben poder ser localizados para su consumo";
 answers[40] = choices[40][3];
 units[40] = "51";
 comments[40] = "Id Pregunta: 5986. TIC A 2009";


//  Id pregunta: 6122 AÃ±o de creación de pregunta: 2010-01-01
 questions[41]= "42)  Un navegador web que tenga que acceder al objeto http://orga.net:5050/imagen.jpg, interrogar&aacute; al servidor local de DNS:";
 choices[41]= new Array();
 choices[41][0] = "Sobre el registro de tipo NS correspondiente al nombre orga.net.";
 choices[41][1] = "Sobre el registro de tipo A correspondiente al nombre orga.net.";
 choices[41][2] = "Sobre el registro de tipo NET correspondiente al nombre orga.net en cualquier puerto.";
 choices[41][3] = "Sobre el registro de tipo SRV correspondiente al nombre orga.net en el puerto 5050.";
 answers[41] = choices[41][1];
 units[41] = "112";
 comments[41] = "Id Pregunta: 6122. TIC A 2009";


//  Id pregunta: 6131 AÃ±o de creación de pregunta: 2010-01-01
 questions[42]= "43)  En un diagrama de flujo de datos:";
 choices[42]= new Array();
 choices[42][0] = "Un almac&eacute;n puede realizar un flujo de datos tanto con otro almac&eacute;n como con un proceso.";
 choices[42][1] = "Un almac&eacute;n puede realizar un flujo de datos tanto con una entidad externa como con un proceso.";
 choices[42][2] = "Un almac&eacute;n s&oacute;lo puede realizar un flujo de datos con un proceso.";
 choices[42][3] = "Un proceso s&oacute;lo puede realizar un flujo de datos con un almac&eacute;n.";
 answers[42] = choices[42][2];
 units[42] = "81";
 comments[42] = "Id Pregunta: 6131. TIC A 2009";


//  Id pregunta: 6163 AÃ±o de creación de pregunta: 2010-01-01
 questions[43]= "44)  Con respecto al cifrado de los datos en videoconferencia:";
 choices[43]= new Array();
 choices[43][0] = "En H.320 sobre RDSI se desarrollaron los est&aacute;ndares H.233 y H.234.";
 choices[43][1] = "Para las videoconferencias basadas en H.323, se desarrollaron los est&aacute;ndares  H.235.";
 choices[43][2] = "Los sistemas basados en SIP usan SRTP.";
 choices[43][3] = "Todas las anteriores son correctas.";
 answers[43] = choices[43][3];
 units[43] = "117";
 comments[43] = "Id Pregunta: 6163. ";


//  Id pregunta: 6348 AÃ±o de creación de pregunta: 2010-01-01
 questions[44]= "45)  &iquest;Qu&eacute; es MySpace?";
 choices[44]= new Array();
 choices[44][0] = "Una red social";
 choices[44][1] = "Un servicio FTP";
 choices[44][2] = "Un servicio de mensajer&iacute;a instant&aacute;nea";
 choices[44][3] = "Un escritorio virtual";
 answers[44] = choices[44][0];
 units[44] = "120";
 comments[44] = "Id Pregunta: 6348. NULL";


//  Id pregunta: 6437 AÃ±o de creación de pregunta: 2010-01-01
 questions[45]= "46)  Cuando se transforma un modelo E/R a modelo relacional las relaciones 1:n:";
 choices[45]= new Array();
 choices[45][0] = "Se transforman por el mecanismo de propagaci&oacute;n de clave ajena.";
 choices[45][1] = "Generan una tabla igual que una relaci&oacute;n n:m.";
 choices[45][2] = "Dependiendo del tipo de consultas posteriores se genera o no la tabla.";
 choices[45][3] = "Si el volumen de datos es muy grande se genera la tabla.";
 answers[45] = choices[45][0];
 units[45] = "80";
 comments[45] = "Id Pregunta: 6437. NULL";


//  Id pregunta: 6499 AÃ±o de creación de pregunta: 2010-01-01
 questions[46]= "47)  GPL es el acr&oacute;nimo de:";
 choices[46]= new Array();
 choices[46][0] = "GNU Public License";
 choices[46][1] = "Geek Public License";
 choices[46][2] = "General Propietary License";
 choices[46][3] = "General Public License";
 answers[46] = choices[46][3];
 units[46] = "61";
 comments[46] = "Id Pregunta: 6499. ";


//  Id pregunta: 6535 AÃ±o de creación de pregunta: 2010-01-01
 questions[47]= "48)  Dentro de la gu&iacute;a de servicios ISO 9004, la orientaci&oacute;n para la direcci&oacute;n se basa en distintos principios de gesti&oacute;n";
 choices[47]= new Array();
 choices[47][0] = "Enfoque al cliente";
 choices[47][1] = "Liderazgo";
 choices[47][2] = "Participaci&oacute;n del personal";
 choices[47][3] = "Todas las respuestas anteriores son correctas";
 answers[47] = choices[47][3];
 units[47] = "92";
 comments[47] = "Id Pregunta: 6535. NULL";


//  Id pregunta: 6619 AÃ±o de creación de pregunta: 2010-01-01
 questions[48]= "49)  Seg&uacute;n M&eacute;trica la Definici&oacute;n de la Formaci&oacute;n de los Usuarios Finales:";
 choices[48]= new Array();
 choices[48][0] = "Se realiza en el proceso de An&aacute;lisis (ASI), conjuntamente con el Plan de Pruebas";
 choices[48][1] = "Se realiza en el proceso de Dise&ntilde;o (DSI), cuando se establecen los Requisitos de Implantaci&oacute;n";
 choices[48][2] = "Se realiza en el proceso de Construcci&oacute;n (CSI), en paralelo a la ejecuci&oacute;n de las Pruebas del Sistema";
 choices[48][3] = "Se realiza en el proceso de Implantaci&oacute;n y Aceptaci&oacute;n (IAS), antes de las Pruebas de Aceptaci&oacute;n";
 answers[48] = choices[48][2];
 units[48] = "86";
 comments[48] = "Id Pregunta: 6619. NULL";


//  Id pregunta: 6627 AÃ±o de creación de pregunta: 2010-01-01
 questions[49]= "50)  El orden de los niveles del modelo CMM de Ingenier&iacute;a de Software es:";
 choices[49]= new Array();
 choices[49][0] = "Inicial; Repetible; Definido; Gestionado; Optimizado";
 choices[49][1] = "Inicial; Definido; Repetible; Gestionado; Optimizado";
 choices[49][2] = "Inicial; Definido; Gestionado; Repetible; Optimizado";
 choices[49][3] = "Inicial; Repetible; Gestionado; Definido; Optimizado";
 answers[49] = choices[49][0];
 units[49] = "87";
 comments[49] = "Id Pregunta: 6627. NULL";


//  Id pregunta: 7287 AÃ±o de creación de pregunta: 2010-01-01
 questions[50]= "51)  Las redes de pr&oacute;xima generaci&oacute;n (NGN) son seg&uacute;n la UIT (uni&oacute;n internacional de telecomunicaciones):";
 choices[50]= new Array();
 choices[50][0] = "Las redes que engloban las nuevas tecnolog&iacute;as inal&aacute;mbricas, tambi&eacute;n conocidas como redes de cuarta generaci&oacute;n (4G)";
 choices[50][1] = "Las redes que ser&aacute;n desplegadas para la generaci&oacute;n del siglo XXI, las cuales garantizar&aacute;n una cobertura real del 100%";
 choices[50][2] = "Las redes de los pr&oacute;ximos a&ntilde;os, basadas en el protocolo Internet IP y que ser&aacute;n utilizadas para todo tipo de servicios";
 choices[50][3] = "Las futuras redes basadas en conmutaci&oacute;n de circuitos, que proporcionar&aacute;n una calidad de servicio superior y permitir&aacute;n comunicaciones de voz y datos a altas velocidades";
 answers[50] = choices[50][2];
 units[50] = "100, 107";
 comments[50] = "Id Pregunta: 7287. Examen TIC B 2009";


//  Id pregunta: 7301 AÃ±o de creación de pregunta: 2010-01-01
 questions[51]= "52)  Indique cu&aacute;l de los siguientes es el algoritmo m&aacute;s utilizado en el proceso de descodificaci&oacute;n en reconocimiento del habla:";
 choices[51]= new Array();
 choices[51][0] = "Viterbi";
 choices[51][1] = "Ruffini";
 choices[51][2] = "Enoch-Root";
 choices[51][3] = "Baum-Welch";
 answers[51] = choices[51][0];
 units[51] = "94";
 comments[51] = "Id Pregunta: 7301. NULL";


//  Id pregunta: 7334 AÃ±o de creación de pregunta: 2010-01-01
 questions[52]= "53)  Las RFC (Request for Comments) son publicadas por";
 choices[52]= new Array();
 choices[52][0] = "W3C";
 choices[52][1] = "IEEE";
 choices[52][2] = "IETF";
 choices[52][3] = "IEC";
 answers[52] = choices[52][2];
 units[52] = "42";
 comments[52] = "Id Pregunta: 7334. NULL";


//  Id pregunta: 7978 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)   &iquest;Qu&eacute; es una aplicaci&oacute;n CRM en un sitio de e-commerce interactivo?";
 choices[53]= new Array();
 choices[53][0] = " Es la aplicaci&oacute;n usada para administrar la relaci&oacute;n con los clientes, describir perfiles de compras y dise&ntilde;ar campa&ntilde;as de marketing directo on-line.";
 choices[53][1] = " Es el Cargo Resource Management, o aplicaci&oacute;n utilizada para gestionar los recursos de carga en las ventas.";
 choices[53][2] = " Es el programa que se ejecuta al recibir una petici&oacute;n de una p&aacute;gina web din&aacute;mica.";
 choices[53][3] = " Es el Catalog Resource Management, o aplicaci&oacute;n que genera un cat&aacute;logo on-line de los productos disponibles para la venta.";
 answers[53] = choices[53][0];
 units[53] = "NULL";
 comments[53] = "Id Pregunta: 7978. Map 2007";


//  Id pregunta: 8176 AÃ±o de creación de pregunta: 2011-01-01
 questions[54]= "55)  Referente al protocolo Internet Protocol versi&oacute;n 4 (IPv4), &iquest;cu&aacute;l es la afirmaci&oacute;n correcta?:";
 choices[54]= new Array();
 choices[54][0] = "S&oacute;lo permite identificar hasta 256 protocolos para la parte de datos del datagrama.";
 choices[54][1] = "No permite volver a fragmentar un datagrama ya fragmentado (pues la fragmentaci&oacute;n se indica con el bit MF).";
 choices[54][2] = "La unidad de transferencia m&aacute;xima o Maximun Transmission Unit (MTU) es siempre de 65.535 bytes.";
 choices[54][3] = "Si los datagramas han sido fragmentados, al pasar a una red que puede manejar un PDU m&aacute;ximo mayor que la red de origen, previamente a ser reenviados, los fragmentos deben ser reensamblados.";
 answers[54] = choices[54][0];
 units[54] = "100";
 comments[54] = "Id Pregunta: 8176. Examen TIC A1 2010";


//  Id pregunta: 8220 AÃ±o de creación de pregunta: 2011-01-01
 questions[55]= "56)  En CORBA la invocaci&oacute;n de un objeto para su ejecuci&oacute;n sigue el siguiente camino:";
 choices[55]= new Array();
 choices[55][0] = "Cliente - IDL Stub - ORB (Object Request Broker) - IDL Skeleton -Servidor.";
 choices[55][1] = "Cliente - ORB (Object Request Broker) - Servidor.";
 choices[55][2] = "Cliente - IDL Stub - Servidor.";
 choices[55][3] = "Cliente - IDL Skeleton - ORB (Object Request Broker) - IDL Stub - Servidor.";
 answers[55] = choices[55][0];
 units[55] = "82";
 comments[55] = "Id Pregunta: 8220. Examen TIC A1 2010";


//  Id pregunta: 8286 AÃ±o de creación de pregunta: 2011-01-01
 questions[56]= "57)  Un prestador de servicios de certificaci&oacute;n, &iquest;durante qu&eacute; per&iacute;odo de tiempo tiene que conservar la informaci&oacute;n relativa a los certificados reconocidos expedidos, de manera que puedan verificarse las firmas efectuadas con los mismos, de acuerdo a lo dispuesto en la Ley 59/2003, de 19 de diciembre, de Firma electr&oacute;nica? ";
 choices[56]= new Array();
 choices[56][0] = "Al menos durante 15 a&ntilde;os contados desde la fecha de fin de validez del certificado,";
 choices[56][1] = "Al menos durante 15 a&ntilde;os contados desde el momento de su expedici&oacute;n";
 choices[56][2] = "Un m&aacute;ximo de 15 a&ntilde;os contados desde la fecha de fin de validez del certificado.";
 choices[56][3] = "Un m&aacute;ximo de 15 a&ntilde;os contados desde el momento de su expedici&oacute;n. ";
 answers[56] = choices[56][1];
 units[56] = "74";
 comments[56] = "Id Pregunta: 8286. Examen TIC A2 2010";


//  Id pregunta: 8292 AÃ±o de creación de pregunta: 2011-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l de los siguientes NO se encuentra entre los elementos de un Sistema de Gesti&oacute;n de Red?";
 choices[57]= new Array();
 choices[57][0] = "Gestor DHCP.";
 choices[57][1] = "MIB.";
 choices[57][2] = "Agente-SMAP.";
 choices[57][3] = "NMS.";
 answers[57] = choices[57][0];
 units[57] = "104";
 comments[57] = "Id Pregunta: 8292. Examen TIC A2 2010";


//  Id pregunta: 8306 AÃ±o de creación de pregunta: 2011-01-01
 questions[58]= "59)  EI ataque conocido como &quot;ARP Spoofing&quot;: ";
 choices[58]= new Array();
 choices[58][0] = "Se impide con el uso de conmutadores (switches) en vez de concentradores (hubs).";
 choices[58][1] = "Se efect&uacute;a en el nivel 3 de OSI ya que falsifica direcciones IPs. ";
 choices[58][2] = "Sirve para interceptar tr&aacute;fico en una red de &aacute;rea local (LAN), pero no para modificarlo. ";
 choices[58][3] = "Puede impedirse mediante DHCP snooping.";
 answers[58] = choices[58][3];
 units[58] = "111";
 comments[58] = "Id Pregunta: 8306. Examen TIC A2 2010";


//  Id pregunta: 8368 AÃ±o de creación de pregunta: 2011-01-01
 questions[59]= "60)  Cuando describimos o identificamos requisitos de una aplicaci&oacute;n con t&eacute;rminos c&oacute;mo eficiencia, accesibilidad, usabilidad o precio deseados, estamos hablando de requisitos:";
 choices[59]= new Array();
 choices[59][0] = "Funcionales.";
 choices[59][1] = "No funcionales";
 choices[59][2] = "Web.";
 choices[59][3] = "No son requisitos.";
 answers[59] = choices[59][1];
 units[59] = "78";
 comments[59] = "Id Pregunta: 8368. Examen TIC A2 2010";


//  Id pregunta: 8433 AÃ±o de creación de pregunta: 2011-01-01
 questions[60]= "61)  Uno de los problemas m&aacute;s serios que se pueden presentar en un ambiente de concurrencia es el &ldquo;abrazo mortal&rdquo; (deadlock), el cu&aacute;l se produce cuando se presentan al mismo tiempo 4 condiciones necesarias. &iquest;Cu&aacute;l de las siguientes no es una de ellas?";
 choices[60]= new Array();
 choices[60][0] = "Condici&oacute;n de no apropiaci&oacute;n";
 choices[60][1] = "Condici&oacute;n de espera circular";
 choices[60][2] = "Condici&oacute;n de exclusi&oacute;n mutua";
 choices[60][3] = "Condici&oacute;n de espera ocupada";
 answers[60] = choices[60][3];
 units[60] = "52";
 comments[60] = "Id Pregunta: 8433. ";


//  Id pregunta: 8467 AÃ±o de creación de pregunta: 2011-01-01
 questions[61]= "62)  La RDSI (red digital de servicios integrados), ofrece una conexi&oacute;n digital extremo a extremo para el intercambio de informaci&oacute;n al integrar servicios de voz y de datos sobre la estructura de la red telef&oacute;nica p&uacute;blica. El acceso primario, en Europa, esta constituido por:";
 choices[61]= new Array();
 choices[61][0] = "2 canales B y 2 canales D";
 choices[61][1] = "30 canales B y 30 canales D";
 choices[61][2] = "30 canales B y un canal D";
 choices[61][3] = "30 canales B y dos canales D";
 answers[61] = choices[61][2];
 units[61] = "103";
 comments[61] = "Id Pregunta: 8467. Analista Ayto. Madrid 2010";


//  Id pregunta: 8512 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  &iquest;C&oacute;mo se conoce a la disciplina en la que se estudian y aplican t&eacute;cnicas que permiten el ocultamiento de informaci&oacute;n o archivos, dentro de otros, llamados portadores, de modo que NO se perciba su existencia? ";
 choices[62]= new Array();
 choices[62][0] = "Esteganograf&iacute;a. ";
 choices[62][1] = "Criptograf&iacute;a. ";
 choices[62][2] = "Criptoan&aacute;lisis. ";
 choices[62][3] = "Estegan&aacute;lisis. ";
 answers[62] = choices[62][0];
 units[62] = "37";
 comments[62] = "Id Pregunta: 8512. Examen TIC A2 2010";


//  Id pregunta: 8519 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  Se&ntilde;ale la respuesta correcta de las siguientes afirmaciones sobre el modelo entidad/relaci&oacute;n extendido:";
 choices[63]= new Array();
 choices[63][0] = "Es un requisito el conocer el SGBD en el que se va a implementar.";
 choices[63][1] = "Es dependiente del entorno f&iacute;sico.";
 choices[63][2] = "Se centra en los datos, independientemente del procesamiento que los transforma";
 choices[63][3] = "Debe proporcionar a los usuarios toda la informaci&oacute;n que necesiten garantizando la eficiencia del proceso.";
 answers[63] = choices[63][2];
 units[63] = "57, 58";
 comments[63] = "Id Pregunta: 8519. Examen TIC A2 2010 interna";


//  Id pregunta: 8632 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  &iquest;Cu&aacute;l de las siguientes actividades NO pertenece a la Gesti&oacute;n del Proyecto seg&uacute;n M&eacute;trica v3?";
 choices[64]= new Array();
 choices[64][0] = "Identificaci&oacute;n de las Propiedades de Calidad.";
 choices[64][1] = "Planificaci&oacute;n.";
 choices[64][2] = "Cierre del Proyecto.";
 choices[64][3] = "Estimaci&oacute;n de Esfuerzo.";
 answers[64] = choices[64][0];
 units[64] = "86";
 comments[64] = "Id Pregunta: 8632. Examen TIC A2 2010 interna";


//  Id pregunta: 8684 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  Indique el puerto utilizado por el protocolo ldap sobre SSL:";
 choices[65]= new Array();
 choices[65][0] = "563";
 choices[65][1] = "443";
 choices[65][2] = "336";
 choices[65][3] = "636";
 answers[65] = choices[65][3];
 units[65] = "74";
 comments[65] = "Id Pregunta: 8684. Examen UPM A2 2011";


//  Id pregunta: 8737 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  Una empresa crea legalmente un fichero de datos personales que utiliza para su tratamiento, pero sin llevar a cabo una correcta actualizaci&oacute;n cuando se producen cambios en los mismos. De entre los &quot;principios de protecci&oacute;n de datos&quot; incluidos en la Ley 15/1999 de Protecci&oacute;n de Datos de Car&aacute;cter Personal, &iquest;cu&aacute;l se estar&iacute;a incumpliendo?";
 choices[66]= new Array();
 choices[66][0] = "Calidad de los datos";
 choices[66][1] = "Veracidad de la informaci&oacute;n.";
 choices[66][2] = "Actualizaci&oacute;n peri&oacute;dica";
 choices[66][3] = "Seguimiento de los datos.";
 answers[66] = choices[66][0];
 units[66] = "29";
 comments[66] = "Id Pregunta: 8737. Examen TIC A2 2010 interna";


//  Id pregunta: 8798 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  &iquest;Para qu&eacute; se usa el componente ASP.NET?";
 choices[67]= new Array();
 choices[67][0] = "Para construir aplicaciones y servicios Web";
 choices[67][1] = "Para conectar las aplicaciones a las bases de datos";
 choices[67][2] = "Para construir la interface del usuario";
 choices[67][3] = "Para conectar los programas";
 answers[67] = choices[67][0];
 units[67] = "59, 115";
 comments[67] = "Id Pregunta: 8798. Examen UPM A2 2011";


//  Id pregunta: 8800 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  Respecto al modelo en espiral es falso que:";
 choices[68]= new Array();
 choices[68][0] = "Incluye el an&aacute;lisis de riesgos.";
 choices[68][1] = "Se compone de ciclos.";
 choices[68][2] = "El n&uacute;mero de ciclos a realizar se encuentra predefinido en el modelo.";
 choices[68][3] = "La dimensi&oacute;n angular indica el avance dentro del ciclo actual.";
 answers[68] = choices[68][2];
 units[68] = "76";
 comments[68] = "Id Pregunta: 8800. Examen UPM A2 2011";


//  Id pregunta: 9056 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  &iquest;Cual de las siguientes ISO tiene definici&oacute;n de usabilidad?";
 choices[69]= new Array();
 choices[69][0] = "ISO/IEC 9126";
 choices[69][1] = "ISO/IEC 9241";
 choices[69][2] = "Las dos anteriores";
 choices[69][3] = "Ninguna de las anteriores";
 answers[69] = choices[69][2];
 units[69] = "39";
 comments[69] = "Id Pregunta: 9056. NULL";


//  Id pregunta: 9127 AÃ±o de creación de pregunta: 2013-01-01
 questions[70]= "71)  La taxonom&iacute;a de Flynn clasifica los ordenadores en funci&oacute;n de";
 choices[70]= new Array();
 choices[70][0] = "la relaci&oacute;n mayor o menor entre memoria principal y almacenamiento externo";
 choices[70][1] = "el flujo que siguen los datos dentro de la m&aacute;quina y de las instrucciones sobre esos datos";
 choices[70][2] = "el m&eacute;todo de acceso a los dispositivos de almacenamiento externo";
 choices[70][3] = "la relaci&oacute;n entre la velocidad de acceso a datos seg&uacute;n est&eacute;n en memoria o almacenamiento externo";
 answers[70] = choices[70][1];
 units[70] = "45";
 comments[70] = "Id Pregunta: 9127. Examen TIC-A1 2011";


//  Id pregunta: 9175 AÃ±o de creación de pregunta: 2013-01-01
 questions[71]= "72)  Se&ntilde;ale la afirmaci&oacute;n CORRECTA respecto a la Ley 34/2002:";
 choices[71]= new Array();
 choices[71][0] = "Los operadores de redes y servicios de comunicaciones electr&oacute;nicas, los proveedores de acceso a redes de telecomunicaciones y los prestadores de servicios de alojamiento de datos deber&aacute;n retener los datos de conexi&oacute;n y tr&aacute;fico generados por las comunicaciones establecidas durante la prestaci&oacute;n de un servicio de la sociedad de la informaci&oacute;n por un per&iacute;odo m&aacute;ximo de doce meses.";
 choices[71][1] = "Los contratos celebrados por v&iacute;a electr&oacute;nica en los que intervenga como parte un consumidor se presumir&aacute;n celebrados en el lugar en que el prestador de servicios tenga establecido su domicilio fiscal.";
 choices[71][2] = "El Real Decreto-ley 13/2012 traspone al ordenamiento jur&iacute;dico espa&ntilde;ol la Directiva 2009/136/CE que modifica la anterior Directiva 2002/58/CE.";
 choices[71][3] = "Las comunicaciones comerciales y las ofertas promocionales se regir&aacute;n en todos sus t&eacute;rminos por la Ley 34/2002";
 answers[71] = choices[71][2];
 units[71] = "70";
 comments[71] = "Id Pregunta: 9175. ";


//  Id pregunta: 9191 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  Indicar el requisito imprescindible para que un programa de ordenador sea protegible.";
 choices[72]= new Array();
 choices[72][0] = "Estar documentado correctamente";
 choices[72][1] = "Estar desarrollado por una persona f&iacute;sica";
 choices[72][2] = "Ser la primera versi&oacute;n de un programa, ya que las sucesivas no est&aacute;n protegidas";
 choices[72][3] = "Ser original";
 answers[72] = choices[72][3];
 units[72] = "36";
 comments[72] = "Id Pregunta: 9191. ";


//  Id pregunta: 9221 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  &iquest;Qu&eacute; es el Fabric/switch/port binding?";
 choices[73]= new Array();
 choices[73][0] = "Un mecanismo de seguridad adicional ofrecido por las redes SAN.";
 choices[73][1] = "Puede limitar la conectividad de un determinado equipo a un determinado puerto de un switch dentro del fabric.";
 choices[73][2] = "El dispositivo s&oacute;lo podr&aacute; acceder a la SAN si se conecta f&iacute;sicamente al puerto permitido y s&oacute;lo un dispositivo con el WWN indicado puede conectarse a dicho puerto.";
 choices[73][3] = "Todas son correctas.";
 answers[73] = choices[73][3];
 units[73] = "48";
 comments[73] = "Id Pregunta: 9221. ";


//  Id pregunta: 9239 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  &iquest;Qu&eacute; hace ifconfig -a?";
 choices[74]= new Array();
 choices[74][0] = "Instala Ubuntu sobre Windows.";
 choices[74][1] = "Muestra informaci&oacute;n sobre los diversos interfaces de red.";
 choices[74][2] = "Inicia la interfaz de red eth0.";
 choices[74][3] = "Detiene las interfaces de red.";
 answers[74] = choices[74][1];
 units[74] = "53";
 comments[74] = "Id Pregunta: 9239. ";


//  Id pregunta: 9303 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  Cu&aacute;l de los siguientes no es un requerimiento general de la labor de un auditor";
 choices[75]= new Array();
 choices[75][0] = "Proporcionar una garant&iacute;a razonable de que se alcanzan los objetivos de control";
 choices[75][1] = "Supervisar que la Direcci&oacute;n aborda obligatoriamente las acciones recomendadas";
 choices[75][2] = "Identificar si existen debilidades significativas en los controles";
 choices[75][3] = "Sustanciar el riesgo que puede estar asociado a las debilidades identificadas";
 answers[75] = choices[75][1];
 units[75] = "33";
 comments[75] = "Id Pregunta: 9303. ";


//  Id pregunta: 9334 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  &iquest;Cu&aacute;l de los siguientes t&eacute;rminos NO se corresponde con un tipo de cable?";
 choices[76]= new Array();
 choices[76][0] = "UTP - Unshielded Twisted Pair.";
 choices[76][1] = "STP - Shielded Twisted Pair.";
 choices[76][2] = "US/ STP - UnShielded Screened Twisted Pair.";
 choices[76][3] = "FTP - Foiled Twisted Pair.";
 answers[76] = choices[76][2];
 units[76] = "99";
 comments[76] = "Id Pregunta: 9334. TIC_a1_ejer_AGE_2011";


//  Id pregunta: 9373 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  El protocolo de nivel 2 utilizado en una l&iacute;nea punto a punto con Jerarqu&iacute;a Digital S&iacute;ncrona es:";
 choices[77]= new Array();
 choices[77][0] = "PPP";
 choices[77][1] = "LAPB";
 choices[77][2] = "L2TP";
 choices[77][3] = "L2F";
 answers[77] = choices[77][0];
 units[77] = "101";
 comments[77] = "Id Pregunta: 9373. ";


//  Id pregunta: 9399 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  En el modelo de referencia de ATM, &iquest;c&oacute;mo se denomina la capa que tiene las funciones de convergencia, y segmentaci&oacute;n y reensamblado?";
 choices[78]= new Array();
 choices[78][0] = "TC";
 choices[78][1] = "PM";
 choices[78][2] = "AAL";
 choices[78][3] = "ATM";
 answers[78] = choices[78][2];
 units[78] = "109";
 comments[78] = "Id Pregunta: 9399. TIC AGE A2 2011 Promo Int";


//  Id pregunta: 9597 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  En el desarrollo de aplicaciones en .NET Framework, &iquest;cu&aacute;l de los siguientes no es un componente del marco .NET Framework?";
 choices[79]= new Array();
 choices[79][0] = "El entorno de ejecuci&oacute;n de lenguaje com&uacute;n (CLR) ";
 choices[79][1] = "La biblioteca de clases base (.NET Framework Base Classes) ";
 choices[79][2] = "El lenguaje de definici&oacute;n de la interfaz (IDL)";
 choices[79][3] = "El motor de generaci&oacute;n de la interfaz de usuario ";
 answers[79] = choices[79][2];
 units[79] = "59";
 comments[79] = "Id Pregunta: 9597. Xunta A2 2011";


//  Id pregunta: 9620 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  Las fibras (threads) en el SO Windows...";
 choices[80]= new Array();
 choices[80][0] = "Se ejecutan en modo usuario";
 choices[80][1] = "Usan multitarea preemptiva";
 choices[80][2] = "Usan multitarea colaborativa";
 choices[80][3] = "a) y c) son ciertas";
 answers[80] = choices[80][3];
 units[80] = "56";
 comments[80] = "Id Pregunta: 9620. ";


//  Id pregunta: 9722 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  El art&iacute;culo 5 de la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, establece la obligaci&oacute;n para los operadores que presten servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico o exploten redes p&uacute;blicas de comunicaciones, de conservar los datos (referidos en su art&iacute;culo 3), durante un plazo de";
 choices[81]= new Array();
 choices[81][0] = "48 meses.";
 choices[81][1] = "24 meses.";
 choices[81][2] = "12 meses.";
 choices[81][3] = "6 meses.";
 answers[81] = choices[81][2];
 units[81] = "30";
 comments[81] = "Id Pregunta: 9722. Examen TIC-A1 2013";


//  Id pregunta: 9740 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  En un despliegue de una aplicaci&oacute;n Java EE sobre WebSphere, fijar el mode del class loader como PARENT_LAST tiene el efecto de que busca las clases a cargar primero:";
 choices[82]= new Array();
 choices[82][0] = "En el m&oacute;dulo web, si no las encuentra busca en la aplicaci&oacute;n, y si no las encuentra, en las librer&iacute;as del sistema.";
 choices[82][1] = "En las librer&iacute;as del sistema, si no las encuentra busca en la aplicaci&oacute;n, y si no las encuentra, en el m&oacute;dulo web.";
 choices[82][2] = "En la aplicaci&oacute;n, y si no las encuentra busca en el m&oacute;dulo web, y si no las encuentra, en las librer&iacute;as del sistema.";
 choices[82][3] = "En las librer&iacute;as del sistema, si no las encuentra busca en el m&oacute;dulo web, y si no las encuentra en la aplicaci&oacute;n.";
 answers[82] = choices[82][0];
 units[82] = "116";
 comments[82] = "Id Pregunta: 9740. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9955 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  En un proyecto de desarrollo que utiliza la metodolog&iacute;a SCRUM, aquel rol que tiene la responsabilidad de eliminar los obst&aacute;culos que impidan el progreso del equipo se denomina:";
 choices[83]= new Array();
 choices[83][0] = "Product owner.";
 choices[83][1] = "Retail Cashier.";
 choices[83][2] = "ScrumMaster";
 choices[83][3] = "Development team member. ";
 answers[83] = choices[83][2];
 units[83] = "79";
 comments[83] = "Id Pregunta: 9955. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10172 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  Respecto los distintos tipos de drivers JDBC, se verifica que:";
 choices[84]= new Array();
 choices[84][0] = "Los drivers JDBC de tipo III son recomendables si la aplicaci&oacute;n Java ha de acceder a diferentes bases de datos o se desconoce el SGBD destino";
 choices[84][1] = "El uso de drivers JDBC de tipo IV evita problemas de dependencia tecnol&oacute;gica del fabricante";
 choices[84][2] = "Al permitir que la aplicaci&oacute;n Java interact&uacute;e con diferentes SGBD, un driver de tipo III no es 100% Java, ya que incluye c&oacute;digo espec&iacute;fico o nativo de cada SGBD";
 choices[84][3] = "Todas las anteriores";
 answers[84] = choices[84][0];
 units[84] = "58";
 comments[84] = "Id Pregunta: 10172. ";


//  Id pregunta: 10227 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Cual de los siguientes m&eacute;todos son m&eacute;todosde la clase Thread:";
 choices[85]= new Array();
 choices[85][0] = "sleep(long msec);";
 choices[85][1] = "start();";
 choices[85][2] = "wait();";
 choices[85][3] = "A y B son correctas.";
 answers[85] = choices[85][3];
 units[85] = "60";
 comments[85] = "Id Pregunta: 10227. start() es un m&eacute;todo de Thread. Se cambia la opci&oacute;n D, notifyAll, por la actual.";


//  Id pregunta: 10255 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Seg&uacute;n el art&iacute;culo 10 de la Ley 15/1999, LOPD, el deber de secreto: ";
 choices[86]= new Array();
 choices[86][0] = "Afecta a todos los que intervengan en el tratamiento de datos, por tiempo indefinido";
 choices[86][1] = "Afecta a todos los que intervengan en el tratamiento de datos, s&oacute;lo mientras dure dicho tratamiento";
 choices[86][2] = "Afecta s&oacute;lo al responsable del fichero y al encargado del tratamiento, por tiempo indefinido";
 choices[86][3] = "Afecta s&oacute;lo al responsable del fichero y al encargado del tratamiento, s&oacute;lo mientras dure dicho tratamiento";
 answers[86] = choices[86][0];
 units[86] = "29";
 comments[86] = "Id Pregunta: 10255. Art&iacute;culo 10 de la Ley 15/1999";


//  Id pregunta: 10295 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  &iquest;Cu&aacute;l es el grupo de trabajo correspondiente al est&aacute;ndar WRAN (Wireless Regional Area Network)?:";
 choices[87]= new Array();
 choices[87][0] = "802.19";
 choices[87][1] = "802.20";
 choices[87][2] = "802.21";
 choices[87][3] = "802.22";
 answers[87] = choices[87][3];
 units[87] = "107";
 comments[87] = "Id Pregunta: 10295. TIC A2, libre, examen 2013";


//  Id pregunta: 10444 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas sobre las redes GPRS es FALSA?";
 choices[88]= new Array();
 choices[88][0] = "Puede alcanzar velocidades de hasta 236 kbps de descarga. ";
 choices[88][1] = "Son redes orientadas a conexi&oacute;n.";
 choices[88][2] = "Pueden ofrecer servicios de mensajer&iacute;a instant&aacute;nea.";
 choices[88][3] = "Ofrecen servicios de transmisi&oacute;n digital de datos.";
 answers[88] = choices[88][1];
 units[88] = "108";
 comments[88] = "Id Pregunta: 10444. Examen TIC A1 2013";


//  Id pregunta: 10466 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  &iquest;Qu&eacute; tecnolog&iacute;as agrupa HTML5?";
 choices[89]= new Array();
 choices[89][0] = "HTML+Javascript";
 choices[89][1] = "HTML+CSS3+Flash";
 choices[89][2] = "HTML+CSS3+Javascript";
 choices[89][3] = "HTML+CSS3";
 answers[89] = choices[89][2];
 units[89] = "69";
 comments[89] = "Id Pregunta: 10466. NULL";


//  Id pregunta: 10558 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  COBIT 5 Incluye";
 choices[90]= new Array();
 choices[90][0] = "4 principios y 6 procesos habilitadores";
 choices[90][1] = "5 principios y 7 procesos habilitadores";
 choices[90][2] = "4 principios y 7 procesos habilitadores";
 choices[90][3] = "5 principios y 6 procesos habilitadores";
 answers[90] = choices[90][1];
 units[90] = "31, 32, 33";
 comments[90] = "Id Pregunta: 10558. ";


//  Id pregunta: 10984 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  En M&eacute;trica 3, la utilizaci&oacute;n del modelo entidad relaci&oacute;n extendido se recomienda en los procesos de:";
 choices[91]= new Array();
 choices[91][0] = "An&aacute;lisis y Dise&ntilde;o.";
 choices[91][1] = "Solo en el An&aacute;lisis.";
 choices[91][2] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n, Estudio de Viabilidad y An&aacute;lisis.";
 choices[91][3] = "Solo en Planificaci&oacute;n de Sistemas de Informaci&oacute;n y Estudio de Viabilidad.";
 answers[91] = choices[91][2];
 units[91] = "86";
 comments[91] = "Id Pregunta: 10984. TIC A1 AGE 2014";


//  Id pregunta: 11081 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  La MEJOR descripci&oacute;n de la prioridad de una Incidencia es&hellip;";
 choices[92]= new Array();
 choices[92][0] = "La importancia relativa de una Incidencia basada en su impacto y urgencia";
 choices[92][1] = "La velocidad con la que necesita ser resuelta la Incidencia";
 choices[92][2] = "El n&uacute;mero de personas que ser&aacute;n asignadas para trabajar en la Incidencia con el fin de que se resuelva dentro del plazo";
 choices[92][3] = "El camino de escalado que debe seguir para asegurar la resoluci&oacute;n de la Incidencia";
 answers[92] = choices[92][0];
 units[92] = "98";
 comments[92] = "Id Pregunta: 11081. ";


//  Id pregunta: 11194 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Cu&aacute;l de las siguientes iniciativas de la Estrategia Europa 2020 hace referencia al objetivo de crecimiento sostenible?";
 choices[93]= new Array();
 choices[93][0] = "Juventud en movimiento";
 choices[93][1] = "Una Europa que utilice eficazmente los recursos";
 choices[93][2] = "Plataforma Europea contra la pobreza";
 choices[93][3] = "Agenda Clim&aacute;tica para Europa";
 answers[93] = choices[93][1];
 units[93] = "30";
 comments[93] = "Id Pregunta: 11194. ";


//  Id pregunta: 11363 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Seg&uacute;n ITIL v3, las m&eacute;tricas que se usan normalmente en Gesti&oacute;n de Servicios TI son:";
 choices[94]= new Array();
 choices[94][0] = "De tecnolog&iacute;a (recursos), de gesti&oacute;n (procesos) y de servicios";
 choices[94][1] = "De tecnolog&iacute;a y de servicios";
 choices[94][2] = "De servicios y de personas";
 choices[94][3] = "De servicios y de procesos";
 answers[94] = choices[94][0];
 units[94] = "98";
 comments[94] = "Id Pregunta: 11363. ";


//  Id pregunta: 11436 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Seg&uacute;n la Ley 9/2014, un usuario final podr&aacute; resolver un contrato de redes y servicios de telecomunicaciones:";
 choices[95]= new Array();
 choices[95][0] = "Solo al finalizar el contrato";
 choices[95][1] = "Anticipadamente con penalizaci&oacute;n";
 choices[95][2] = "Anticipadamente sin penalizaci&oacute;n.";
 choices[95][3] = "Ninguna de las anteriores.";
 answers[95] = choices[95][2];
 units[95] = "110";
 comments[95] = "Id Pregunta: 11436. ";


//  Id pregunta: 11569 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;De qu&eacute; tama&ntilde;o es el campo de comprobaci&oacute;n de erorres en la tecnolog&iacute;a Ethernet?";
 choices[96]= new Array();
 choices[96][0] = "16";
 choices[96][1] = "32";
 choices[96][2] = "64";
 choices[96][3] = "48";
 answers[96] = choices[96][1];
 units[96] = "100";
 comments[96] = "Id Pregunta: 11569. NULL";


//  Id pregunta: 11654 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Son protocolos de estado del enlace:";
 choices[97]= new Array();
 choices[97][0] = "OSPF y RIPv2";
 choices[97][1] = "IS-IS y OSPF";
 choices[97][2] = "IGRP y RIPv2";
 choices[97][3] = "RIPv2 e IS-IS";
 answers[97] = choices[97][1];
 units[97] = "102";
 comments[97] = "Id Pregunta: 11654. ";


//  Id pregunta: 11729 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Qu&eacute; dos algoritmos de cifrado se utilizan en IPsec VPN?";
 choices[98]= new Array();
 choices[98][0] = "3DES y AES";
 choices[98][1] = "AES y DH";
 choices[98][2] = "3DES y PSK";
 choices[98][3] = "IKE y PSK";
 answers[98] = choices[98][0];
 units[98] = "111";
 comments[98] = "Id Pregunta: 11729. NULL";


//  Id pregunta: 11773 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  En el expediente de contrataci&oacute;n";
 choices[99]= new Array();
 choices[99][0] = "la memoria debe referirse a la necesidad e idoneidad del contrato";
 choices[99][1] = "la memoria debe referirse a los requisitos que deben contener los pliegos de cl&aacute;usulas administrativas y t&eacute;cnicas generales";
 choices[99][2] = "la memoria debe referirse solo a la necesidad del contrato";
 choices[99][3] = "Todas son correctas&nbsp;";
 answers[99] = choices[99][0];
 units[99] = "41";
 comments[99] = "Id Pregunta: 11773. ";


