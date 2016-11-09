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

//  Id pregunta: 43 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de los siguientes componentes, incluido en la guia de portabilidad XPG4 est&aacute; tambi&eacute;n en la XPG3?:";
 choices[0]= new Array();
 choices[0][0] = "Servicio de directorio X.500";
 choices[0][1] = "X Window System Application Interface";
 choices[0][2] = "Gateway X.400";
 choices[0][3] = "Servidor NFS";
 answers[0] = choices[0][1];
 units[0] = "40";
 comments[0] = "Id Pregunta: 43. ";


//  Id pregunta: 52 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Cu&aacute;les son los instrumentos b&aacute;sicos de un sistema de ayuda a la decisi&oacute;n orientado a datos?:";
 choices[1]= new Array();
 choices[1][0] = "Consultas predefinidas, consultas ad hoc, informes de excepci&oacute;n y presentaciones gr&aacute;ficas";
 choices[1][1] = "Informes resumen, consultas predefinidas, informes de excepci&oacute;n y presentaciones gr&aacute;ficas";
 choices[1][2] = "Informes resumen, consultas ad hoc, informes de excepci&oacute;n y Consultas predefinidas";
 choices[1][3] = "Informes resumen, consultas ad hoc, informes de excepci&oacute;n y presentaciones gr&aacute;ficas";
 answers[1] = choices[1][3];
 units[1] = "21";
 comments[1] = "Id Pregunta: 52. NULL";


//  Id pregunta: 59 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;Existe en Espa&ntilde;a alg&uacute;n centro operativo para realizar Pruebas de Conformidad de acuerdo con el plan CTS de la Uni&oacute;n Europea?:";
 choices[2]= new Array();
 choices[2][0] = "S&iacute;, ya existen varios en funcionamiento en Espa&ntilde;a";
 choices[2][1] = "No, por no haberse implantado este plan en Espa&ntilde;a";
 choices[2][2] = "No, s&oacute;lo existe un centro experimental creado en Bruselas desde 1993";
 choices[2][3] = "No, el plan CTS no se ha puesto todav&iacute;a en pr&aacute;ctica";
 answers[2] = choices[2][0];
 units[2] = "42";
 comments[2] = "Id Pregunta: 59. ";


//  Id pregunta: 120 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  Dentro de los objetivos que se fijar&iacute;a una auditor&iacute;a sobre el grado de adecuaci&oacute;n de las herramientas de software utilizadas a la informaci&oacute;n gestionada, &iquest;cu&aacute;l de los siguientes considera que no ser&iacute;a relevante  obtener del estudio?:";
 choices[3]= new Array();
 choices[3][0] = "Fiabilidad t&eacute;cnica";
 choices[3][1] = "Cambio del modelo de datos utilizados";
 choices[3][2] = "Estudio de opini&oacute;n de los usuarios";
 choices[3][3] = "Facilidad de mantenimiento y expansi&oacute;n";
 answers[3] = choices[3][1];
 units[3] = "31,32,33";
 comments[3] = "Id Pregunta: 120. ";


//  Id pregunta: 180 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  En el contexto de la ordenaci&oacute;n de alternativas en la teor&iacute;a de la DMD, el m&eacute;todo Promethee:";
 choices[4]= new Array();
 choices[4][0] = "S&oacute;lo tiene en cuenta los criterios de mayor peso";
 choices[4][1] = "Se basa en las comparaciones binarias de alternativas";
 choices[4][2] = "Utiliza el c&aacute;lculo de relaciones de superaci&oacute;n entre alternativas";
 choices[4][3] = "Es la generalizaci&oacute;n del m&eacute;todo de la ponderaci&oacute;n lineal";
 answers[4] = choices[4][2];
 units[4] = "34";
 comments[4] = "Id Pregunta: 180. ";


//  Id pregunta: 248 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  En una organizaci&oacute;n de tipo perro vigilante:";
 choices[5]= new Array();
 choices[5][0] = "El HW est&aacute; distribuido, y no se descentraliza la capacidad de realizar SW ni las decisiones";
 choices[5][1] = "El HW est&aacute; distribuido y el desarrollo tambi&eacute;n, pero no las decisiones";
 choices[5][2] = "El HW no est&aacute; distribuido y se descentraliza la capacidad de realizar SW y las decisiones";
 choices[5][3] = "El HW, el desarrollo y las decisiones se descentralizan";
 answers[5] = choices[5][1];
 units[5] = "22";
 comments[5] = "Id Pregunta: 248. ";


//  Id pregunta: 268 AÃ±o de creación de pregunta: 2007-01-01
 questions[6]= "7)  Indicar la afirmaci&oacute;n correcta sobre MAGERIT:";
 choices[6]= new Array();
 choices[6][0] = "Magerit se ha estructurado en tres libros: &quot;M&eacute;todo&quot;, &quot;Cat&aacute;logo de Elementos&quot; y &quot;Gu&iacute;a de T&eacute;cnicas&quot;";
 choices[6][1] = "la metodolog&iacute;a se describe desde tres &aacute;ngulos";
 choices[6][2] = "Entre t&eacute;cnicas descritas en la Gu&iacute;a de T&eacute;cnicas se encuentra: el an&aacute;lisis mediante tablas, an&aacute;lisis algor&iacute;tmico, &aacute;rboles de ataque, y la valoraci&oacute;n Delphi.";
 choices[6][3] = "Las tres anteriores son correctas";
 answers[6] = choices[6][3];
 units[6] = "33";
 comments[6] = "Id Pregunta: 268. ";


//  Id pregunta: 347 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  Con car&aacute;cter general, la transferencia de ficheros con datos de car&aacute;cter personal se puede hacer:";
 choices[7]= new Array();
 choices[7][0] = "A cualquier pa&iacute;s europeo y africano";
 choices[7][1] = "S&oacute;lo a Europa y Asia";
 choices[7][2] = "S&oacute;lo dentro de UE";
 choices[7][3] = "Con destino a pa&iacute;ses que proporcionen un nivel de protecci&oacute;n equiparable al que presta la LOPD";
 answers[7] = choices[7][3];
 units[7] = "29";
 comments[7] = "Id Pregunta: 347. ";


//  Id pregunta: 705 AÃ±o de creación de pregunta: 2004-01-01
 questions[8]= "9)  Cu&aacute;l no es una caracter&iacute;stica del software libre:";
 choices[8]= new Array();
 choices[8][0] = "Libertad de distribuir copias";
 choices[8][1] = "Gratuidad";
 choices[8][2] = "Libertad de realizar modificaciones particulares y mantenerlas para uso privado";
 choices[8][3] = "C&oacute;digo abierto";
 answers[8] = choices[8][1];
 units[8] = "61";
 comments[8] = "Id Pregunta: 705. Similar a examen TIC MAP A 2004";


//  Id pregunta: 772 AÃ±o de creación de pregunta: 2004-01-01
 questions[9]= "10)  Qu&eacute; significan las siglas JNI";
 choices[9]= new Array();
 choices[9][0] = "Interfaz para llamar m&eacute;todos nativos ";
 choices[9][1] = "Sistema de directorio";
 choices[9][2] = "Sistema para datamining";
 choices[9][3] = "ninguna de las anteriores";
 answers[9] = choices[9][0];
 units[9] = "60";
 comments[9] = "Id Pregunta: 772. NULL";


//  Id pregunta: 926 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Qu&eacute; es la l&oacute;gica borrosa o difusa -fuzzy logic-?:";
 choices[10]= new Array();
 choices[10][0] = "Es una rama de la l&oacute;gica binaria que invierte los conceptos para que el ordenador realice operaciones m&aacute;s eficientemente en l&oacute;gica negativa aunque para el ser humano se pierda comprensi&oacute;n";
 choices[10][1] = "Es una rama de la ingenier&iacute;a que trata la l&oacute;gica booleana mediante transformaciones puntuales de cambios de base para introducir variables auxiliares a conveniencia";
 choices[10][2] = "Es una rama de la ingenier&iacute;a que simplifica ecuaciones muy complejas para resolverlas mediante aproximaciones de los valores de la soluci&oacute;n seg&uacute;n grados de pertenencia a conjuntos m&aacute;s o menos subjetivos y probabil&iacute;sticos";
 choices[10][3] = "Nada de lo anterior es cierto";
 answers[10] = choices[10][2];
 units[10] = "63";
 comments[10] = "Id Pregunta: 926. ";


//  Id pregunta: 1432 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  XML:";
 choices[11]= new Array();
 choices[11][0] = "Es un lenguaje de presentaci&oacute;n, similar a HTML, pero m&aacute;s avanzado";
 choices[11][1] = "Est&aacute; orientado a especificar la estructura de los datos, no la forma de presentarlos";
 choices[11][2] = "Es similar a HTML pero con una orientaci&oacute;n hacia el mundo del dise&ntilde;o dado que permite realizar maginas web mas vistosas y din&aacute;micas";
 choices[11][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[11] = choices[11][1];
 units[11] = "69";
 comments[11] = "Id Pregunta: 1432. NULL";


//  Id pregunta: 1457 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  &iquest;Podr&iacute;a indicar la organizaci&oacute;n que ha desarrollado el est&aacute;ndar &lsquo;motif&rsquo;?:";
 choices[12]= new Array();
 choices[12][0] = "Sun Microsystems";
 choices[12][1] = "OSF (Open Group)";
 choices[12][2] = "Departamento de Defensa de EE.UU.";
 choices[12][3] = "MIT (Massachusets Institute of Technology)";
 answers[12] = choices[12][1];
 units[12] = "54";
 comments[12] = "Id Pregunta: 1457. NULL";


//  Id pregunta: 1585 AÃ±o de creación de pregunta: 2003-01-01
 questions[13]= "14)  En el contexto del Sistema Gestor de Base de Datos (SGBD) ORACLE, al conjunto compartido de estructuras de memoria y procesos que acceden a un grupo de ficheros de la base de datos, se denomina:";
 choices[13]= new Array();
 choices[13][0] = "R&eacute;plica.";
 choices[13][1] = "Segmento.";
 choices[13][2] = "Instancia.";
 choices[13][3] = "Tablespace.";
 answers[13] = choices[13][2];
 units[13] = "58";
 comments[13] = "Id Pregunta: 1585. Junta Andaluc&iacute;a";


//  Id pregunta: 1653 AÃ±o de creación de pregunta: 2004-01-01
 questions[14]= "15)  &iquest;Cu&aacute;l de los siguientes protocolos se puede considerar como menos seguro para la realizaci&oacute;n de una transacci&oacute;n de comercio electr&oacute;nico?";
 choices[14]= new Array();
 choices[14][0] = "SET";
 choices[14][1] = "SSL";
 choices[14][2] = "3D-Secure";
 choices[14][3] = "SPA/UCAF";
 answers[14] = choices[14][1];
 units[14] = "70";
 comments[14] = "Id Pregunta: 1653. NULL";


//  Id pregunta: 2075 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  La planificaci&oacute;n estrat&eacute;gica responde a las siguientes cuestiones salvo a una, &iquest;cu&aacute;l?:";
 choices[15]= new Array();
 choices[15][0] = "Cu&aacute;l es la posici&oacute;n futura deseable";
 choices[15][1] = "Cu&aacute;l es la situaci&oacute;n actual";
 choices[15][2] = "Cu&aacute;les son los escalones necesarios para pasar de donde estamos a donde deseamos estar";
 choices[15][3] = "Cu&aacute;l es el costo de dichos escalones";
 answers[15] = choices[15][3];
 units[15] = "77";
 comments[15] = "Id Pregunta: 2075. ";


//  Id pregunta: 2338 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  En los Diagramas de Estructura de Datos utilizados para la representaci&oacute;n de un modelo l&oacute;gico relacional, las relaciones pueden tener cardinalidad:";
 choices[16]= new Array();
 choices[16][0] = "Uno-a-muchos";
 choices[16][1] = "Binaria";
 choices[16][2] = "Muchos-a-muchos";
 choices[16][3] = "Ninguna de las anteriores";
 answers[16] = choices[16][0];
 units[16] = "57,58,80";
 comments[16] = "Id Pregunta: 2338. ";


//  Id pregunta: 2503 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  UML se corresponde con:";
 choices[17]= new Array();
 choices[17][0] = "Unstructured Markup Language, Lenguaje Estructurado de Marcaci&oacute;n.";
 choices[17][1] = "Unified Multimedia Language, Lenguaje Multimedia Unificado.";
 choices[17][2] = "Unified Modelling Language, Lenguaje Unificado de Modelado.";
 choices[17][3] = "Universal Modelling Language, Lenguaje de Modelado Universal";
 answers[17] = choices[17][2];
 units[17] = "82,84";
 comments[17] = "Id Pregunta: 2503. ";


//  Id pregunta: 2563 AÃ±o de creación de pregunta: 2004-01-01
 questions[18]= "19)  &iquest;Qu&eacute; es el Modelo CMM (Modelo de madurez de la capacidad de proceso de software)?";
 choices[18]= new Array();
 choices[18][0] = "Metodolog&iacute;a de dise&ntilde;o de omponentes de software orientados a la optimizaci&oacute;n de los recursos y capacidad de proceso de los ordenadores.";
 choices[18][1] = "Metodolog&iacute;a para el desarrollo de software de metalenguajes.";
 choices[18][2] = "Modelo organizativo para el dise&ntilde;o software de macroensamblares cruzados";
 choices[18][3] = "Conjunto de estrategias de mejora y aseguramiento de la calidad, en procesos de desarrollo de software.";
 answers[18] = choices[18][3];
 units[18] = "87,88,92";
 comments[18] = "Id Pregunta: 2563. Pregunta Junta Andalucia - A";


//  Id pregunta: 2664 AÃ±o de creación de pregunta: 2003-01-01
 questions[19]= "20)  El nivel l&eacute;xico-sint&aacute;ctico:";
 choices[19]= new Array();
 choices[19][0] = "Analiza las caracter&iacute;sticas f&iacute;sicas de la se&ntilde;al vocal, tales como la frecuencia fundamental, los formantes, las transiciones, etc.";
 choices[19][1] = "Llega a la comprensi&oacute;n del significado del mensaje, eliminando las posibles interpretaciones absurdas y comprobando la coherencia del mensaje recibido con el conocimiento previo que se tiene de la realidad, as&iacute; como del contexto en el que discurre el di&aacute;l";
 choices[19][2] = "Determina la precisa pronunciaci&oacute;n de las letras, s&iacute;labas y palabras.";
 choices[19][3] = "Extrae los s&iacute;mbolos elementales, morfemas, y se analiza su sucesi&oacute;n para comprobar su adecuaci&oacute;n a la gram&aacute;tica del lenguaje, la cual supone una determinada relaci&oacute;n entre ellos.";
 answers[19] = choices[19][3];
 units[19] = "94";
 comments[19] = "Id Pregunta: 2664. ";


//  Id pregunta: 2689 AÃ±o de creación de pregunta: 2004-01-01
 questions[20]= "21)  Los niveles de comportamiento contemplados en el modelo CMM (Capacity Maturity Model) para el desarrollo de software son ...";
 choices[20]= new Array();
 choices[20][0] = "Ca&oacute;tico, inicial, repetible, definido, gestionado y optimizado";
 choices[20][1] = "Inicial, repetible, definido, gestionado y mecanizado";
 choices[20][2] = "Inicial, repetible, definido, gestionado y optimizado";
 choices[20][3] = "Ninguna de las anteriores";
 answers[20] = choices[20][2];
 units[20] = "87,88,92";
 comments[20] = "Id Pregunta: 2689. ";


//  Id pregunta: 2702 AÃ±o de creación de pregunta: 2004-01-01
 questions[21]= "22)  Respecto al an&aacute;lisis esencial de Yourdon se puede afirmar que ...";
 choices[21]= new Array();
 choices[21][0] = "Se ha de elaborar un modelo esencial y un modelo de implantaci&oacute;n de usuario";
 choices[21][1] = "El modelo esencial de compone de modelo ambiental  y modelo de comportamiento";
 choices[21][2] = "Para describir el modelo de comportamiento se usan DFDs y diagramas E-R";
 choices[21][3] = "Todas las anteriores afirmaciones son ciertas";
 answers[21] = choices[21][3];
 units[21] = "81,84,78";
 comments[21] = "Id Pregunta: 2702. ";


//  Id pregunta: 2732 AÃ±o de creación de pregunta: 2006-01-01
 questions[22]= "23)  &iquest;Cu&aacute;l de las siguientes no es una metodolog&iacute;a que cubra el desarrollo de planes de sistemas de informaci&oacute;n?";
 choices[22]= new Array();
 choices[22][0] = "M&eacute;trica";
 choices[22][1] = "Racines";
 choices[22][2] = "Method 1";
 choices[22][3] = "Eclipse";
 answers[22] = choices[22][3];
 units[22] = "77";
 comments[22] = "Id Pregunta: 2732. ";


//  Id pregunta: 2736 AÃ±o de creación de pregunta: 2006-01-01
 questions[23]= "24)  Cuando hablamos del concepto de Almac&eacute;n de Datos en An&aacute;lisis Estructurado. Cual de las siguientes afirmaciones es falsa.";
 choices[23]= new Array();
 choices[23][0] = "Pueden  ser permanentes o temporales";
 choices[23][1] = "No crean informaci&oacute;n";
 choices[23][2] = "Son  accesibles desde entidades externas.";
 choices[23][3] = "Son accesibles s&oacute;lo desde los procesos";
 answers[23] = choices[23][2];
 units[23] = "79,81";
 comments[23] = "Id Pregunta: 2736. ";


//  Id pregunta: 2886 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  En TESTA II, el sistema de intercambio de informaci&oacute;n de productos farmac&eacute;uticos es:";
 choices[24]= new Array();
 choices[24][0] = "el sistema CARE";
 choices[24][1] = "el sistema EUDRANET";
 choices[24][2] = "el sistema STATEL";
 choices[24][3] = "el sistema EURES";
 answers[24] = choices[24][1];
 units[24] = "103";
 comments[24] = "Id Pregunta: 2886. ";


//  Id pregunta: 3066 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  En una arquitectura de tres capas el acceso a  los datos corresponde a la capa de:";
 choices[25]= new Array();
 choices[25][0] = "Presentaci&oacute;n";
 choices[25][1] = "Aplicaci&oacute;n";
 choices[25][2] = "Datos";
 choices[25][3] = "En realidad las tres capas manipulan los datos";
 answers[25] = choices[25][2];
 units[25] = "113";
 comments[25] = "Id Pregunta: 3066. ";


//  Id pregunta: 3263 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  &iquest;D&oacute;nde se define el punto de referencia R en RDSI?:";
 choices[26]= new Array();
 choices[26][0] = "Entre el ET2 (Equipo terminal de tipo 2) y el adaptador de terminales";
 choices[26][1] = "Entre el ET1 (Equipo terminal de tipo 1) y el adaptador de terminales";
 choices[26][2] = "Entre el TR1 y el TR2";
 choices[26][3] = "Entre el equipo de usaurio y el TR2 o TR1 cuando no hay TR2";
 answers[26] = choices[26][0];
 units[26] = "103";
 comments[26] = "Id Pregunta: 3263. ";


//  Id pregunta: 3324 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  8802.3 es:";
 choices[27]= new Array();
 choices[27][0] = "El c&oacute;digo de acceso a la red digital";
 choices[27][1] = "Un est&aacute;ndar de redes de &aacute;rea local de ISO IEC JTC1";
 choices[27][2] = "Un est&aacute;ndar europeo de conmutaci&oacute;n de paquetes";
 choices[27][3] = "Un est&aacute;ndar ANSI que trata de m&oacute;dems";
 answers[27] = choices[27][1];
 units[27] = "101";
 comments[27] = "Id Pregunta: 3324. ";


//  Id pregunta: 3346 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  CTI es:";
 choices[28]= new Array();
 choices[28][0] = "Computer Telephony Integration, el uso conjunto de telefon&iacute;a y ordenadores en el funcionamiento de un centro de atenci&oacute;n de llamadas";
 choices[28][1] = "el conjunto formado por la intranet, los tel&eacute;fonos de los puestos de ofim&aacute;tica y los ordenadores de los usuarios";
 choices[28][2] = "las siglas del Comit&eacute; para las Telecomunicaciones y la Innovaci&oacute;n, organismo sin &aacute;nimo de lucro encargado de observar las tendencias tecnol&oacute;gicas en telecomunicaciones y su aplicaci&oacute;n a los proyectos de la Administraci&oacute;n del Estado";
 choices[28][3] = "nada de lo anterior";
 answers[28] = choices[28][0];
 units[28] = "108";
 comments[28] = "Id Pregunta: 3346. ";


//  Id pregunta: 3406 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  Ethernet:";
 choices[29]= new Array();
 choices[29][0] = "Fue inventada por Xerox y desarrollada por Xerox, Intel y DEC";
 choices[29][1] = "Fue inventada por Fujitsu y desarrollada por Fujitsu, Nortel y Cisco";
 choices[29][2] = "Fue inventada por Siemens y desarrollada por Siemens, Alcatel y Lucent";
 choices[29][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[29] = choices[29][0];
 units[29] = "101";
 comments[29] = "Id Pregunta: 3406. ";


//  Id pregunta: 3680 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  Uno de los protocolos m&aacute;s populares usados en las redes Ethernet (y 802.3) es el protocolo 'spanning tree' y es usado por los puentes:";
 choices[30]= new Array();
 choices[30][0] = "Puentes transparentes";
 choices[30][1] = "Puentes 'source routing'";
 choices[30][2] = "Puentes TCP/IP";
 choices[30][3] = "Ninguno de ellos";
 answers[30] = choices[30][0];
 units[30] = "102";
 comments[30] = "Id Pregunta: 3680. ";


//  Id pregunta: 3753 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  MPLS se encapsula en la torre de protocolos:";
 choices[31]= new Array();
 choices[31][0] = "por encima del protocolo IP y por debajo del protocolo TCP";
 choices[31][1] = "por encima del protocolo TCP y por debajo de otros protocolos de transporte";
 choices[31][2] = "por encima de los protocolos del nivel de enlace y por debajo de IP";
 choices[31][3] = "por encima de los protocolos del nivel de transporte";
 answers[31] = choices[31][2];
 units[31] = "102";
 comments[31] = "Id Pregunta: 3753. ";


//  Id pregunta: 3911 AÃ±o de creación de pregunta: 2003-01-01
 questions[32]= "33)  Algoritmo de compresi&oacute;n de im&aacute;genes sin p&eacute;rdidas:";
 choices[32]= new Array();
 choices[32][0] = "ECW.";
 choices[32][1] = "RLE.";
 choices[32][2] = "MPEG.";
 choices[32][3] = "TXA.";
 answers[32] = choices[32][1];
 units[32] = "93";
 comments[32] = "Id Pregunta: 3911. NULL";


//  Id pregunta: 4048 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  &iquest;En cual de los siguientes lenguajes de programaci&oacute;n ser&iacute;a m&aacute;s razonable desarrollar un sistema operativo moderno?";
 choices[33]= new Array();
 choices[33][0] = "Java";
 choices[33][1] = "C#";
 choices[33][2] = "C / C++";
 choices[33][3] = "OS Builder";
 answers[33] = choices[33][2];
 units[33] = "52";
 comments[33] = "Id Pregunta: 4048. NULL";


//  Id pregunta: 4061 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  El puerto reservado para el protocolo SMTP es";
 choices[34]= new Array();
 choices[34][0] = "80";
 choices[34][1] = "25";
 choices[34][2] = "110";
 choices[34][3] = "69";
 answers[34] = choices[34][1];
 units[34] = "112";
 comments[34] = "Id Pregunta: 4061. ";


//  Id pregunta: 4194 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  No es cierto que la herramienta Nagios";
 choices[35]= new Array();
 choices[35][0] = "Puede monitorizar servicios TCP";
 choices[35][1] = "Es una alternativa a Bigbrother";
 choices[35][2] = "Puede utilizar agentes distintos a SNMP";
 choices[35][3] = "Puede ser instalada en Windows";
 answers[35] = choices[35][3];
 units[35] = "104";
 comments[35] = "Id Pregunta: 4194. ";


//  Id pregunta: 4240 AÃ±o de creación de pregunta: 2007-01-01
 questions[36]= "37)  Cual de las siguientes no es una caracter&iacute;stica del PUDS (Proceso Unificado de Desarrollo del SW)";
 choices[36]= new Array();
 choices[36][0] = "No tiene en cuenta el control de calidad";
 choices[36][1] = "Proceso centrado en la arquitectura";
 choices[36][2] = "Proceso dirigido por los casos de uso";
 choices[36][3] = "Proceso incremental e iterativo";
 answers[36] = choices[36][0];
 units[36] = "79";
 comments[36] = "Id Pregunta: 4240. ";


//  Id pregunta: 4250 AÃ±o de creación de pregunta: 2007-01-01
 questions[37]= "38)  Respecto a la iniciativa i2010 de la Comisi&oacute;n Europea:";
 choices[37]= new Array();
 choices[37][0] = "Con el lanzamiento de i2010 la Comisi&oacute;n Europea abandona totalmente los objetivos fijados en la estrategia de Lisboa.";
 choices[37][1] = "Aunque hubiera sido deseable, i2010 no establece como objetivo prioritario el refuerzo de la inversi&oacute;n en I+D";
 choices[37][2] = "La iniciativa i2010 se lanza a finales del a&ntilde;o 2006, tras comprobar el fracaso de los planes de acci&oacute;n eEurope";
 choices[37][3] = "Su primer objetivo es la creaci&oacute;n de &ldquo;la construcci&oacute;n de un Espacio &uacute;nico Europeo de la Informaci&oacute;n que promueva un mercado interior abierto y competitivo para la sociedad de la informaci&oacute;n y los medios de comunicaci&oacute;n&rdquo;.";
 answers[37] = choices[37][3];
 units[37] = "30";
 comments[37] = "Id Pregunta: 4250. ";


//  Id pregunta: 4382 AÃ±o de creación de pregunta: 2007-01-01
 questions[38]= "39)  &iquest;Cu&aacute;l de las siguientes actividades se engloba, en m&eacute;trica V3, en el proceso de construcci&oacute;n del sistema?";
 choices[38]= new Array();
 choices[38][0] = "Generaci&oacute;n de especificaciones de construcci&oacute;n.";
 choices[38][1] = "Ejecuci&oacute;n de las pruebas unitarias.";
 choices[38][2] = "Definici&oacute;n de interfaces de usuario.";
 choices[38][3] = "Incorporaci&oacute;n del sistema al entorno de operaci&oacute;n.";
 answers[38] = choices[38][1];
 units[38] = "86";
 comments[38] = "Id Pregunta: 4382. NULL";


//  Id pregunta: 4394 AÃ±o de creación de pregunta: 2007-01-01
 questions[39]= "40)  El repositorio com&uacute;n:";
 choices[39]= new Array();
 choices[39][0] = "Agrupa un conjunto de herramientas de desarrollo.";
 choices[39][1] = "Forma un banco de trabajo.";
 choices[39][2] = "Organiza un entorno de desarrollo.";
 choices[39][3] = "Es un manejador de versiones.";
 answers[39] = choices[39][2];
 units[39] = "87";
 comments[39] = "Id Pregunta: 4394. NULL";


//  Id pregunta: 4452 AÃ±o de creación de pregunta: 2007-01-01
 questions[40]= "41)  &iquest;Cual es el miembro espa&ntilde;ol de ISO?";
 choices[40]= new Array();
 choices[40][0] = "IRANOR";
 choices[40][1] = "AENOR";
 choices[40][2] = "UNE";
 choices[40][3] = "CSl";
 answers[40] = choices[40][1];
 units[40] = "42";
 comments[40] = "Id Pregunta: 4452. ";


//  Id pregunta: 4458 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  La cl&aacute;usula select en SQL se corresponde a:";
 choices[41]= new Array();
 choices[41][0] = "La operaci&oacute;n de proyecci&oacute;n en el &aacute;lgebra relacional.";
 choices[41][1] = "La operaci&oacute;n de uni&oacute;n en el &aacute;lgebra relacional.";
 choices[41][2] = "La operaci&oacute;n de evaluaci&oacute;n en el &aacute;lgebra relacional.";
 choices[41][3] = "La operaci&oacute;n de agregaci&oacute;n en el &aacute;lgebra relacional.";
 answers[41] = choices[41][0];
 units[41] = "58";
 comments[41] = "Id Pregunta: 4458. ";


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


//  Id pregunta: 4531 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  &iquest;Cu&aacute;l de las siguientes no es una sentencia correcta?";
 choices[43]= new Array();
 choices[43][0] = "UML es un lenguaje unificado de modelado.";
 choices[43][1] = "UML fue adoptado en noviembre de 1997 por OMG.";
 choices[43][2] = "UML solo costa de una &uacute;nica versi&oacute;n desde su creaci&oacute;n.";
 choices[43][3] = "UML es un est&aacute;ndar de facto para visualizar, especificar y documentar los modelos que se crean durante Ia aplicaci&oacute;n de un proceso de software.";
 answers[43] = choices[43][2];
 units[43] = "82";
 comments[43] = "Id Pregunta: 4531. ";


//  Id pregunta: 4653 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  En Frame Relay La CIR es:";
 choices[44]= new Array();
 choices[44][0] = "la m&aacute;xima velocidad de datos del canal";
 choices[44][1] = "La tasa de informaci&oacute;n contratada";
 choices[44][2] = "La m&aacute;xima cantidad de datos que la red conviene en transmitir en un intervalo de tiempo T";
 choices[44][3] = "es La m&aacute;xima cantidad de datos en exceso que la red intenta transmitir en un intervalo de tiempo T";
 answers[44] = choices[44][1];
 units[44] = "109";
 comments[44] = "Id Pregunta: 4653. ";


//  Id pregunta: 4816 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  Dentro de una red GPRS (General Packet Radio Service), &iquest;cu&aacute;l de las siguientes funciones es propia del GGSN(Gateway GPRS Support Node)?";
 choices[45]= new Array();
 choices[45][0] = "La gesti&oacute;n de la movilidad";
 choices[45][1] = "El cifrado y autenticaci&oacute;n";
 choices[45][2] = "La conexi&oacute;n al HLR (Home Location Register)";
 choices[45][3] = "La conexi&oacute;n a los ISP (Internet Service Provider)";
 answers[45] = choices[45][3];
 units[45] = "108";
 comments[45] = "Id Pregunta: 4816. ";


//  Id pregunta: 5219 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  En qu&eacute; proceso se realiza la actividad de seguridad Selecci&oacute;n del Equipo de Seguridad";
 choices[46]= new Array();
 choices[46][0] = "An&aacute;lisis del Sistema de Informaci&oacute;n";
 choices[46][1] = "Estudio de Viabilidad del Sistema";
 choices[46][2] = "Dise&ntilde;o del Sistema de Informaci&oacute;n";
 choices[46][3] = "Planificaci&oacute;n del Sistema de Informaci&oacute;n";
 answers[46] = choices[46][1];
 units[46] = "86";
 comments[46] = "Id Pregunta: 5219. NULL";


//  Id pregunta: 5279 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  La diferencia entre la fibra &oacute;ptica monomodo y multimodo radica, principalmente, en:";
 choices[47]= new Array();
 choices[47][0] = "las frecuencias usadas";
 choices[47][1] = "los adaptadores usados";
 choices[47][2] = "la forma en que la luz entra en la fibra y se refleja dentro del n&uacute;cleo.";
 choices[47][3] = "La fibra multimodo permite por su naturaleza varios modos de instalacion";
 answers[47] = choices[47][2];
 units[47] = "99";
 comments[47] = "Id Pregunta: 5279. ";


//  Id pregunta: 5512 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  La red de conexi&oacute;n r&aacute;pida inaugurada por la Uni&oacute;n Europea en 2005 para atender la interconexi&oacute;n de investigadores europeos se denomina:";
 choices[48]= new Array();
 choices[48][0] = "TEIN2";
 choices[48][1] = "GEANT2";
 choices[48][2] = "ALICE";
 choices[48][3] = "DANTE";
 answers[48] = choices[48][1];
 units[48] = "103";
 comments[48] = "Id Pregunta: 5512. ";


//  Id pregunta: 5515 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  Indique cu&aacute;l de los siguientes no es un servidor de aplicaciones para servicios web:";
 choices[49]= new Array();
 choices[49][0] = "JONAS";
 choices[49][1] = "XIMDEX";
 choices[49][2] = "WEBSPHERE";
 choices[49][3] = "WEBLOGIC";
 answers[49] = choices[49][1];
 units[49] = "115,116";
 comments[49] = "Id Pregunta: 5515. ";


//  Id pregunta: 5560 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  Respecto a La Ley 23/2006 que modifica el TRLPI (RD 1/1996), se&ntilde;ale la afirmaci&oacute;n incorrecta:";
 choices[50]= new Array();
 choices[50][0] = "Transpone la Directiva 2001/29/CE.";
 choices[50][1] = "Establece medidas sancionadoras de actos de elusi&oacute;n de medidas tecnol&oacute;gicas eficaces para la protecci&oacute;n de obras.";
 choices[50][2] = "Los programas de ordenador se regir&aacute;n por su propia normativa.";
 choices[50][3] = "El can&oacute;n digital se aplicar&aacute; tanto a equipos anal&oacute;gicos como digitales, como reproductores mp3-mp4, discos duros etc.. ";
 answers[50] = choices[50][3];
 units[50] = "37";
 comments[50] = "Id Pregunta: 5560. ";


//  Id pregunta: 5696 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  Los certificados del DNI electr&oacute;nico:";
 choices[51]= new Array();
 choices[51][0] = "Se expiden voluntariamente a petici&oacute;n del ciudadano";
 choices[51][1] = " Se expiden siempre y vienen activados";
 choices[51][2] = "S&oacute;lo se expiden a quien autorice la Direcci&oacute;n General de la Polic&iacute;a";
 choices[51][3] = "Se expiden siempre, pero se activan voluntariamente con el consentimiento del ciudadano";
 answers[51] = choices[51][3];
 units[51] = "74";
 comments[51] = "Id Pregunta: 5696. NULL";


//  Id pregunta: 5700 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  Las siglas UDDI corresponden a:";
 choices[52]= new Array();
 choices[52][0] = "Universal Description and Discovery Interface";
 choices[52][1] = "Universal Description, Discovery and Integration";
 choices[52][2] = "Universal Definition, Discovery and Integration";
 choices[52][3] = "Universal Definition and Discovery Interface";
 answers[52] = choices[52][1];
 units[52] = "51";
 comments[52] = "Id Pregunta: 5700. NULL";


//  Id pregunta: 5726 AÃ±o de creación de pregunta: 2009-01-01
 questions[53]= "54)  Indique la afirmaci&oacute;n correcta. Seg&uacute;n M&eacute;trica v 3, en las Relaciones 1:N se propaga el identificador de la entidad de cardinalidad m&aacute;xima 1 a la que es N, teniendo en cuenta que:";
 choices[53]= new Array();
 choices[53][0] = "Si la relaci&oacute;n es de asociaci&oacute;n, la clave propagada es clave ajena en la tabla a la que se ha propagado.";
 choices[53][1] = "Si la relaci&oacute;n es de asociaci&oacute;n, la clave propagada es la clave primaria en la tabla a la que se ha propagado.";
 choices[53][2] = "Si la relaci&oacute;n es de dependencia, la clave propagada es la clave ajena.";
 choices[53][3] = "Si la relaci&oacute;n es de dependencia la clave propagada es la clave primaria.";
 answers[53] = choices[53][0];
 units[53] = "58";
 comments[53] = "Id Pregunta: 5726. MAP 2008 A2";


//  Id pregunta: 5774 AÃ±o de creación de pregunta: 2009-01-01
 questions[54]= "55)  Los datos de car&aacute;cter personal recogidos o elaborados por las Administraciones P&uacute;blicas para el desempe&ntilde;o de sus atribuciones";
 choices[54]= new Array();
 choices[54][0] = "Podr&aacute;n comunicarse entre administraciones los datos de car&aacute;cter personal que una Administraci&oacute;n P&uacute;blica obtenga o elabore con destino a otra";
 choices[54][1] = "Las diferentes Administraciones P&uacute;blicas podr&aacute;n cederse entre ellas los datos de car&aacute;cter personal incluso para el ejercicio de competencias diferentes.";
 choices[54][2] = "No podr&aacute;n cederse cuando la comunicaci&oacute;n tenga por objeto el tratamiento de los datos con fines hist&oacute;ricos, estad&iacute;sticos  o cient&iacute;ficos";
 choices[54][3] = "La Ley no trata este particular, sino que lo hace su desarrollo posterior";
 answers[54] = choices[54][0];
 units[54] = "29";
 comments[54] = "Id Pregunta: 5774. MAP 2008 A2";


//  Id pregunta: 5781 AÃ±o de creación de pregunta: 2009-01-01
 questions[55]= "56)  Se&ntilde;ale cu&aacute;l de los siguientes objetos forma parte de los componentes proveedores de datos .NET Framework de ADO.NET";
 choices[55]= new Array();
 choices[55][0] = "DataSet";
 choices[55][1] = "DataTable";
 choices[55][2] = "DataAdapter";
 choices[55][3] = "RecordSet";
 answers[55] = choices[55][2];
 units[55] = "59";
 comments[55] = "Id Pregunta: 5781. MAP 2008 A2";


//  Id pregunta: 5830 AÃ±o de creación de pregunta: 2009-01-01
 questions[56]= "57)  Se&ntilde;ale la afirmaci&oacute;n incorrecta respecto a la licencia EUPL.";
 choices[56]= new Array();
 choices[56][0] = "Con estte tipo de licencia las administraciones pueden ser proveedoras de software open source ente ellas, reutilizando lo que otros han hecho y mejor&aacute;ndolo.";
 choices[56][1] = "Es equivalente a las licencias GNU GPL y se pueden usar indistintamente, s&oacute;lo que EUPL aplica &uacute;nicamente en europa.";
 choices[56][2] = "Una de las novedades que introduce es la variedad de idiomas en los que est&aacute; disponible.";
 choices[56][3] = "Es una licencia compatible con otras licencias copyleft";
 answers[56] = choices[56][1];
 units[56] = "36,37";
 comments[56] = "Id Pregunta: 5830. ";


//  Id pregunta: 6062 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  Se ha establecido una conexi&oacute;n TCP sobre una red m&oacute;vil celular. La red m&oacute;vil sufre p&eacute;rdidas frecuentes por errores de transmisi&oacute;n debidos a las caracter&iacute;sticas del acceso radio. El emisor TCP:";
 choices[57]= new Array();
 choices[57][0] = "Distingue entre p&eacute;rdidas por errores de transmisi&oacute;n y p&eacute;rdidas por congesti&oacute;n, aplicando procedimientos de recuperaci&oacute;n diferentes.";
 choices[57][1] = "S&oacute;lo retransmite paquetes que se pierdan debido a congesti&oacute;n en la red.";
 choices[57][2] = "Indica al nivel de enlace que disminuya su tasa de env&iacute;o.";
 choices[57][3] = "Interpreta las p&eacute;rdidas debidas a errores de transmisi&oacute;n como congesti&oacute;n en la red, disminuyendo su tasa de env&iacute;o.";
 answers[57] = choices[57][3];
 units[57] = "100";
 comments[57] = "Id Pregunta: 6062. TIC A 2009";


//  Id pregunta: 6129 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  En la arquitectura Java, &iquest;qu&eacute; se entiende por JSR?";
 choices[58]= new Array();
 choices[58][0] = "Un applet.";
 choices[58][1] = "Es una especificaci&oacute;n en la que se describe una tecnolog&iacute;a, sus partes, las relaciones entre las mismas y los roles de las personas que usar&aacute;n dicha tecnolog&iacute;a.";
 choices[58][2] = "Es una especificaci&oacute;n que describe la manera en que la parte servidora atender&aacute; las peticiones hechas por un applet o un javascript. Es el acr&oacute;nimo de Java Server Request.";
 choices[58][3] = "Un JavaBean.";
 answers[58] = choices[58][1];
 units[58] = "60";
 comments[58] = "Id Pregunta: 6129. TIC A 2009";


//  Id pregunta: 6177 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  Indique la afirmaci&oacute;n falsa:";
 choices[59]= new Array();
 choices[59][0] = "HTTP es un protocolo sin estado.";
 choices[59][1] = "HTTP es un protocolo estandarizado por IETF.";
 choices[59][2] = "HTTP es un protocolo estandarizado por W3C.";
 choices[59][3] = "La especificaci&oacute;n del protocolo HTTP es la RFC 2616.";
 answers[59] = choices[59][2];
 units[59] = "69";
 comments[59] = "Id Pregunta: 6177. NULL";


//  Id pregunta: 6423 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  &iquest;Cu&aacute;l de las siguientes personas puso en marcha el W3C?";
 choices[60]= new Array();
 choices[60][0] = "Tim O'Reilly";
 choices[60][1] = "Vinton Cerf";
 choices[60][2] = "Tim Berners-Lee";
 choices[60][3] = "Ninguna de las anteriores";
 answers[60] = choices[60][2];
 units[60] = "39";
 comments[60] = "Id Pregunta: 6423. NULL";


//  Id pregunta: 6543 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  Un ejemplo de ataque al control de acceso es";
 choices[61]= new Array();
 choices[61][0] = "Denegaci&oacute;n de servicio";
 choices[61][1] = "Spoofing";
 choices[61][2] = "Ataques de diccionario";
 choices[61][3] = "Todas las respuestas anteriores son correctas";
 answers[61] = choices[61][3];
 units[61] = "111";
 comments[61] = "Id Pregunta: 6543. NULL";


//  Id pregunta: 7158 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  Entre las funciones de un sistema operativo se encuentra la gesti&oacute;n de procesos. Seleccione cual de las siguientes afirmaciones es correcta:";
 choices[62]= new Array();
 choices[62][0] = "Cualquier proceso puede causar la terminaci&oacute;n de otro proceso realizando una llamada al sistema";
 choices[62][1] = "Si un proceso se encuentra en estado &quot;Terminado&quot; (o Finalizado) significa que se ha ejecutado en su totalidad";
 choices[62][2] = "Se dice que un proceso se encuentra en estado &quot;Zombi&quot; cuando est&aacute; esperando a que otro proceso termine de ejecutarse";
 choices[62][3] = "Cuando un nuevo usuario entra en el sistema se crea un nuevo proceso que quedar&aacute; en estado &quot;listo&quot; (preparado para se ejecutado)";
 answers[62] = choices[62][3];
 units[62] = "52";
 comments[62] = "Id Pregunta: 7158. Examen TIC B 2009";


//  Id pregunta: 7179 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  Revocar un certificado electr&oacute;nico significa:";
 choices[63]= new Array();
 choices[63][0] = "Extender su validez m&aacute;s all&aacute; del tiempo l&iacute;mite inicialmente establecido";
 choices[63][1] = "Anular su validez antes de la fecha de caducidad que consta en el mismo";
 choices[63][2] = "Agotar su vida &uacute;til al haberse llegado al l&iacute;mite de vigencia del mismo";
 choices[63][3] = "Desacoplar un certificado de la tarjeta criptogr&aacute;fica en la que reside";
 answers[63] = choices[63][1];
 units[63] = "74";
 comments[63] = "Id Pregunta: 7179. Examen TIC B 2009";


//  Id pregunta: 7324 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  Se&ntilde;ala cu&aacute;l de las siguientes no es una tecnolog&iacute;a empleada en el pago a trav&eacute;s de Internet:";
 choices[64]= new Array();
 choices[64][0] = "3D Secure";
 choices[64][1] = "UCAF";
 choices[64][2] = "Urbinet ";
 choices[64][3] = "SET ";
 answers[64] = choices[64][2];
 units[64] = "70";
 comments[64] = "Id Pregunta: 7324. NULL";


//  Id pregunta: 7779 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)   Seg&uacute;n la recomendaci&oacute;n X.509 v.3:";
 choices[65]= new Array();
 choices[65][0] = " La autenticaci&oacute;n simple conlleva el uso exclusivo de contrase&ntilde;as transmitidas en claro.";
 choices[65][1] = " La autenticaci&oacute;n robusta (strong) de un sentido conlleva siempre el empleo de funciones resumen (hash).";
 choices[65][2] = " La autenticaci&oacute;n robusta (strong) de dos sentidos comporta siempre el uso de credenciales obtenidas mediante t&eacute;cnicas criptogr&aacute;ficas.";
 choices[65][3] = " La autenticaci&oacute;n robusta (strong) de tres sentidos debe incorporar siempre sellos de tiempo.";
 answers[65] = choices[65][2];
 units[65] = "73";
 comments[65] = "Id Pregunta: 7779. Map 2005";


//  Id pregunta: 7851 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)   La norma ISO 9004:2000:";
 choices[66]= new Array();
 choices[66][0] = " Es la versi&oacute;n oficial, en espa&ntilde;ol, de la la Norma Europea EN ISO 9004 de diciembre de 2000.";
 choices[66][1] = " Es la misma Norma que la UNE-EN ISO 9004 de marzo de 1995.";
 choices[66][2] = " Es una norma cuya certificaci&oacute;n de los productos que se realizan con ella la lleva a cabo AENOR.";
 choices[66][3] = " Es la versi&oacute;n actualizada en el 2000 de la Norma ISO 10011-3:1991.";
 answers[66] = choices[66][0];
 units[66] = "NULL";
 comments[66] = "Id Pregunta: 7851. Map 2005";


//  Id pregunta: 8297 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  Hablando del modelo OSI &iquest;Cu&aacute;l de las siguientes parejas NO es correcta?";
 choices[67]= new Array();
 choices[67][0] = "Nivel 4 - HDLC. ";
 choices[67][1] = "Nivel 1 - CSMA/CD.";
 choices[67][2] = "Nivel 3 - X.25.";
 choices[67][3] = "Nivel 2 - LAPB";
 answers[67] = choices[67][0];
 units[67] = "100";
 comments[67] = "Id Pregunta: 8297. Examen TIC A2 2010";


//  Id pregunta: 8306 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  EI ataque conocido como &quot;ARP Spoofing&quot;: ";
 choices[68]= new Array();
 choices[68][0] = "Se impide con el uso de conmutadores (switches) en vez de concentradores (hubs).";
 choices[68][1] = "Se efect&uacute;a en el nivel 3 de OSI ya que falsifica direcciones IPs. ";
 choices[68][2] = "Sirve para interceptar tr&aacute;fico en una red de &aacute;rea local (LAN), pero no para modificarlo. ";
 choices[68][3] = "Puede impedirse mediante DHCP snooping.";
 answers[68] = choices[68][3];
 units[68] = "111";
 comments[68] = "Id Pregunta: 8306. Examen TIC A2 2010";


//  Id pregunta: 8326 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  El protocolo LAPB:";
 choices[69]= new Array();
 choices[69][0] = "Se implementa en la capa de aplicaci&oacute;n del modelo OSI";
 choices[69][1] = "Utiliza tramas con el mismo formato que HDLC";
 choices[69][2] = "Utiliza todo el juego de comandos de HDLC";
 choices[69][3] = "Se implementa en la capa de red del modelo OSI";
 answers[69] = choices[69][1];
 units[69] = "101";
 comments[69] = "Id Pregunta: 8326. Analista Ayto. Madrid 2010";


//  Id pregunta: 8383 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  El cable UTP (Unshielded Twisted Pair):";
 choices[70]= new Array();
 choices[70][0] = "No es tan susceptible a las interferencias electromagn&eacute;ticas como el cable STP (Shielded Twisted Pair). ";
 choices[70][1] = "Es m&aacute;s barato y f&aacute;cil de manipular que el STP.";
 choices[70][2] = "Tiene una l&aacute;mina externa de aluminio o de cobre trenzado alrededor del conjunto de pares.";
 choices[70][3] = "Tiene una pantalla protectora para cada par de hilos.";
 answers[70] = choices[70][1];
 units[70] = "99";
 comments[70] = "Id Pregunta: 8383. Examen TIC A2 2010";


//  Id pregunta: 8452 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  &iquest;Cu&aacute;l es uno de los inconvenientes de usar un Hub?:";
 choices[71]= new Array();
 choices[71][0] = "Un Hub no puede extender la distancia operativa de la red";
 choices[71][1] = "Un Hub no puede filtrar el tr&aacute;fico de la red";
 choices[71][2] = "Un Hub no puede amplificar se&ntilde;ales debilitadas";
 choices[71][3] = "Un Hub no cumple ninguna de las anteriores";
 answers[71] = choices[71][1];
 units[71] = "102";
 comments[71] = "Id Pregunta: 8452. Analista Ayto. Madrid 2010";


//  Id pregunta: 8536 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  La tecnolog&iacute;a HSDPA presenta una capacidad m&aacute;xima de transferencia de informaci&oacute;n de:";
 choices[72]= new Array();
 choices[72][0] = "10,8 Mbps te&oacute;ricos.";
 choices[72][1] = "14 Mbps";
 choices[72][2] = "2 Mbps";
 choices[72][3] = "384 Kbps";
 answers[72] = choices[72][1];
 units[72] = "108";
 comments[72] = "Id Pregunta: 8536. Examen TIC A2 2010 interna";


//  Id pregunta: 8621 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas NO es propia del sistema de almacenamiento RAID 5?";
 choices[73]= new Array();
 choices[73][0] = "La paridad est&aacute; en un disco dedicado";
 choices[73][1] = "La divisi&oacute;n se produce a nivel de bloques";
 choices[73][2] = "Tiene un bajo coste de redundancia";
 choices[73][3] = "Se necesitan al menos 3 discos";
 answers[73] = choices[73][0];
 units[73] = "48";
 comments[73] = "Id Pregunta: 8621. Examen TIC A2 2010 interna";


//  Id pregunta: 8752 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  &iquest;En qu&eacute; generaci&oacute;n de ordenadores se empez&oacute; a utilizar el transistor?";
 choices[74]= new Array();
 choices[74][0] = "En la primera generaci&oacute;n,";
 choices[74][1] = "En la segunda generaci&oacute;n";
 choices[74][2] = "En la tercera generaci&oacute;n.";
 choices[74][3] = "En la cuarta generaci&oacute;n";
 answers[74] = choices[74][1];
 units[74] = "45";
 comments[74] = "Id Pregunta: 8752. Examen TIC A2 2010 interna";


//  Id pregunta: 8788 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  Indique cu&aacute;l de las siguientes expresiones mostrar&aacute; el n&uacute;mero de veces que est&aacute; conectado el usuario root";
 choices[75]= new Array();
 choices[75][0] = "who | grep root | wc -l";
 choices[75][1] = "who root | wc -l";
 choices[75][2] = "who &gt;grep &mdash;v root&gt;wc";
 choices[75][3] = "who &lt;grep -v root&gt;wc";
 answers[75] = choices[75][0];
 units[75] = "53, 54";
 comments[75] = "Id Pregunta: 8788. Examen UPM A2 2011";


//  Id pregunta: 8891 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  Se&ntilde;ale la respuesta correcta seg&uacute;n M&eacute;trica v3";
 choices[76]= new Array();
 choices[76][0] = "El c&aacute;lculo de accesos es una t&eacute;cnica";
 choices[76][1] = "La normalizaci&oacute;n es una t&eacute;cnica";
 choices[76][2] = "Ambas son pr&aacute;cticas";
 choices[76][3] = "Ambas son t&eacute;cnicas";
 answers[76] = choices[76][1];
 units[76] = "86";
 comments[76] = "Id Pregunta: 8891. NULL";


//  Id pregunta: 8997 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  Una red bluetooth de tipo piconet tiene un m&aacute;ximo de:";
 choices[77]= new Array();
 choices[77][0] = "1 maestro y 7 esclavos";
 choices[77][1] = "1 maestro y 15 esclavos";
 choices[77][2] = "1 maestro y 16 esclavos";
 choices[77][3] = "1 maestro y 32 esclavos";
 answers[77] = choices[77][0];
 units[77] = "107";
 comments[77] = "Id Pregunta: 8997. Examen UPM A2 2011";


//  Id pregunta: 9023 AÃ±o de creación de pregunta: 2011-01-01
 questions[78]= "79)  Para dimensionar los Centros de Atenci&oacute;n de Llamadas (Call Center) hay que tener en cuenta, a la hora de determinar el n&uacute;mero de operadores en una franja horaria:";
 choices[78]= new Array();
 choices[78][0] = "El n&uacute;mero de llamadas entrantes, y utilizar la f&oacute;rmula Erlang B.";
 choices[78][1] = "El n&uacute;mero de llamadas entrantes y su duraci&oacute;n, y utilizar la f&oacute;rmula Erlang C.";
 choices[78][2] = "En un Centro de Atenci&oacute;n de Llamadas el n&uacute;mero de enlaces es igual que el de agentes.";
 choices[78][3] = "Ninguna de las anteriores";
 answers[78] = choices[78][1];
 units[78] = "104";
 comments[78] = "Id Pregunta: 9023. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9289 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  &iquest;Cu&aacute;l es la norma de creaci&oacute;n de AENOR?";
 choices[79]= new Array();
 choices[79][0] = "El RD 2200/1995.";
 choices[79][1] = "El RD 757/1986.";
 choices[79][2] = "La Ley 5/1985.";
 choices[79][3] = "Ninguna, pues no es un organismo p&uacute;blico. ";
 answers[79] = choices[79][3];
 units[79] = "42";
 comments[79] = "Id Pregunta: 9289. ";


//  Id pregunta: 9521 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  &iquest;Cu&aacute;les de los siguientes no es un framework de desarrollo en Java?";
 choices[80]= new Array();
 choices[80][0] = "Apache Struts";
 choices[80][1] = "Hibernate";
 choices[80][2] = "Tapestry";
 choices[80][3] = "Todos los anteriores son frameworks de desarrollo en Java";
 answers[80] = choices[80][3];
 units[80] = "116";
 comments[80] = "Id Pregunta: 9521. NULL";


//  Id pregunta: 9570 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  Seg&uacute;n la Ley de Firma Electr&oacute;nica, durante la tramitaci&oacute;n de un proceso sancionador, podr&aacute; acordarse como medida provisional la suspensi&oacute;n temporal de la actividad del prestador de servicios de certificaci&oacute;n, incluyendo el cierre de sus establecimientos, cuando la infracci&oacute;n haya sido calicada como:";
 choices[81]= new Array();
 choices[81][0] = "Leve, grave o muy grave";
 choices[81][1] = "Grave o muy grave";
 choices[81][2] = "&Uacute;nicamente cuando haya sido calificada como muy grave";
 choices[81][3] = "En ning&uacute;n caso podr&aacute;n acordarse este tipo de medidas provisionales";
 answers[81] = choices[81][1];
 units[81] = "30";
 comments[81] = "Id Pregunta: 9570. Ley 59/2003, art&iacute;culo 34";


//  Id pregunta: 9778 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  &iquest;Con qu&eacute; directiva se declara una p&aacute;gina maestra en ASP.Net?";
 choices[82]= new Array();
 choices[82][0] = "Master";
 choices[82][1] = "MasterPage";
 choices[82][2] = "Master.Page";
 choices[82][3] = "Page ";
 answers[82] = choices[82][0];
 units[82] = "59, 115";
 comments[82] = "Id Pregunta: 9778. Examen TIC A2 2013";


//  Id pregunta: 9786 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  Seg&uacute;n Magerit v2 cu&aacute;l de las siguientes tareas NO forma parte de la actividad de caracterizaci&oacute;n de los activos en el An&aacute;lisis de Riesgos:";
 choices[83]= new Array();
 choices[83][0] = "Identificaci&oacute;n de los activos.";
 choices[83][1] = "Dependencias entre activos.";
 choices[83][2] = "Auditor&iacute;a de los activos.";
 choices[83][3] = "Valoraci&oacute;n de los activos. ";
 answers[83] = choices[83][2];
 units[83] = "98";
 comments[83] = "Id Pregunta: 9786. Examen TIC A2 2013";


//  Id pregunta: 9857 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  Respecto a la seguridad en redes, indique qu&eacute; es un exploit.";
 choices[84]= new Array();
 choices[84][0] = "Es un malware dise&ntilde;ado para aprovechar la vulnerabilidad de un software.";
 choices[84][1] = "Persona que accede a datos no autorizados.";
 choices[84][2] = "Adware que modifica la p&aacute;gina de inicio de los navegadores de Internet sin el consentimiento del usuario.";
 choices[84][3] = "Software utilizado para la suplantaci&oacute;n de la identidad de un usuario de la red.";
 answers[84] = choices[84][0];
 units[84] = "111";
 comments[84] = "Id Pregunta: 9857. Examen TIC del Servicio de Salud de Extremadura 2014";


//  Id pregunta: 9902 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Los puntos de fijaci&oacute;n (anchor points) son caracter&iacute;sticos en el modelo de desarrollo:";
 choices[85]= new Array();
 choices[85][0] = "En cascada.";
 choices[85][1] = "Basado en prototipos.";
 choices[85][2] = "En espiral WINWIN.";
 choices[85][3] = "RAD.";
 answers[85] = choices[85][2];
 units[85] = "76";
 comments[85] = "Id Pregunta: 9902. TIC A2, Examen 2013";


//  Id pregunta: 9917 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Seg&uacute;n M&eacute;trica v3 &iquest;es posible definir un evento (o interrupci&oacute;n) en un diagrama de flujo de datos?";
 choices[86]= new Array();
 choices[86][0] = "S&iacute;, mediante un flujo de datos.";
 choices[86][1] = "S&iacute;, mediante un flujo de control.";
 choices[86][2] = "Si, mediante un proceso iterativo.";
 choices[86][3] = "No, no es posible. Los DFD &uacute;nicamente representan como se transforma la informaci&oacute;n.";
 answers[86] = choices[86][1];
 units[86] = "86";
 comments[86] = "Id Pregunta: 9917. TIC A2, Examen 2013";


//  Id pregunta: 10048 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  MPLS (Multiprotocol Label Switching) utiliza algunos conceptos, entre ellos:";
 choices[87]= new Array();
 choices[87][0] = "FEC (Forwarding Equivalent Class).";
 choices[87][1] = "LAPD (Link Access Protocol for D-channel).";
 choices[87][2] = "CIR (Commited Information Rate).";
 choices[87][3] = "MBS (Maximum Burst Size).";
 answers[87] = choices[87][0];
 units[87] = "100";
 comments[87] = "Id Pregunta: 10048. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10132 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  La principal mejora de SNMPv3 es:";
 choices[88]= new Array();
 choices[88][0] = "Mayor seguridad";
 choices[88][1] = "Mayor rendimiento";
 choices[88][2] = "Mayor eficacia";
 choices[88][3] = "Mayor simplicidad";
 answers[88] = choices[88][0];
 units[88] = "104";
 comments[88] = "Id Pregunta: 10132. ";


//  Id pregunta: 10254 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  En cuanto al tratamiento de  datos personales de menores";
 choices[89]= new Array();
 choices[89][0] = "La legislaci&oacute;n no hace distinciones referentes a la edad de la persona de la que se recaban los datos";
 choices[89][1] = "Con car&aacute;cter general, s&oacute;lo pueden recabarse datos de personas mayores de edad (18 a&ntilde;os)";
 choices[89][2] = "Con car&aacute;cter general, pueden recabarse datos de menores de edad (18 a&ntilde;os) s&oacute;lo con consentimiento de sus padres o tutores";
 choices[89][3] = "Con car&aacute;cter general, pueden recabarse datos de menores de 14 a&ntilde;os s&oacute;lo con consentimiento de sus padres o tutores";
 answers[89] = choices[89][3];
 units[89] = "29";
 comments[89] = "Id Pregunta: 10254. Art&iacute;culo 13.1 del RD 1720/2007";


//  Id pregunta: 10282 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  En el &aacute;mbito de las bases de datos Oracle una vista materializada:";
 choices[90]= new Array();
 choices[90][0] = "Es un objeto de la base de datos donde se almacena la informaci&oacute;n de todas las vistas de la BD.";
 choices[90][1] = "Es un objeto de la base de datos donde se almacena la definici&oacute;n de la tabla que materializa.";
 choices[90][2] = "Es un objeto de la base de datos donde se almacena el resultado de una consulta.";
 choices[90][3] = "Es una vista ordinaria que autom&aacute;ticamente se actualizar&aacute; siempre que se actualicen las tablas involucradas en esa vista.";
 answers[90] = choices[90][2];
 units[90] = "58";
 comments[90] = "Id Pregunta: 10282. TIC A2, libre, examen 2013";


//  Id pregunta: 10283 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  En Sql Server 2012 &iquest;qu&eacute; comando se utiliza para configurar una conexi&oacute;n de servidor de informes?";
 choices[91]= new Array();
 choices[91][0] = "rdlccfg";
 choices[91][1] = "tsmrpt";
 choices[91][2] = "rptsetup";
 choices[91][3] = "rsconfig";
 answers[91] = choices[91][3];
 units[91] = "58";
 comments[91] = "Id Pregunta: 10283. TIC A2, libre, examen 2013";


//  Id pregunta: 11114 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l no es un requisito para integrarse en la plataforma de intermediaci&oacute;n?";
 choices[92]= new Array();
 choices[92][0] = "Estar conectado a Red SARA.";
 choices[92][1] = "Disponer de certificados X509 de sello de &oacute;rgano.";
 choices[92][2] = "Disponer de un Servicio Web integrado para la gesti&oacute;n automatizada del tr&aacute;mite";
 choices[92][3] = "Tener un convenio firmado para el intercambio bilateral de datos.";
 answers[92] = choices[92][1];
 units[92] = "30";
 comments[92] = "Id Pregunta: 11114. ";


//  Id pregunta: 11251 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Los Sistemas din&aacute;micos de adquisici&oacute;n:";
 choices[93]= new Array();
 choices[93][0] = "Tienen vigencia indefinida mientras existan licitadores.";
 choices[93][1] = "La adjudicaci&oacute;n del sistema din&aacute;mico se realizar&aacute; siempre mediante procedimiento abierto.";
 choices[93][2] = "Al igual que en el acuerdo marco, ser&aacute; posible la incorporaci&oacute;n de nuevos adjudicatarios.";
 choices[93][3] = "Se valorar&aacute; positivamente el uso de medios TIC.";
 answers[93] = choices[93][1];
 units[93] = "41";
 comments[93] = "Id Pregunta: 11251. ";


//  Id pregunta: 11332 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  La Ley General de Telecomunicaciones establece los conceptos por los que se puede aplicar tasa. Seleccione cu&aacute;l se corresponde con esta definici&oacute;n: &quot;para cubrir gastos por certificaciones registrales, la recepci&oacute;n de proyectos t&eacute;cnicos, cumplimiento de especificaciones t&eacute;cnicas de aparatos y equipos, etc.&quot;";
 choices[94]= new Array();
 choices[94][0] = "Tasa General de Operadores.";
 choices[94][1] = "Tasas por numeraci&oacute;n, direccionamiento y denominaci&oacute;n.";
 choices[94][2] = "Tasa por reserva del espacio radioel&eacute;ctrico";
 choices[94][3] = "Tasa de telecomunicaciones";
 answers[94] = choices[94][3];
 units[94] = "110";
 comments[94] = "Id Pregunta: 11332. ";


//  Id pregunta: 11395 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Cu&aacute;les de los siguientes roles est&aacute;n definidos en el modelo RACI de ITIL v3?";
 choices[95]= new Array();
 choices[95][0] = "Responsable, Encargado, Consultado, Informado";
 choices[95][1] = "Responsable, Factible, Consultado, Informado";
 choices[95][2] = "Realista, Encargado, Consultado, Informado";
 choices[95][3] = "Responsable, Encargado, Correcto, Informado";
 answers[95] = choices[95][0];
 units[95] = "98";
 comments[95] = "Id Pregunta: 11395. ";


//  Id pregunta: 11500 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Cu&aacute;l de los siguientes aspectos NO est&aacute; recogido como una Instrucci&oacute;n T&eacute;cnica de Seguridad seg&uacute;n el Esquema Nacional de Seguridad?";
 choices[96]= new Array();
 choices[96][0] = "Informe de Estado de Seguridad";
 choices[96][1] = "Auditor&iacute;a de Seguridad";
 choices[96][2] = "Interconexi&oacute;n en el Esquema Nacional de Seguridad";
 choices[96][3] = "Protocolo de Comunicaciones Seguras";
 answers[96] = choices[96][3];
 units[96] = "43";
 comments[96] = "Id Pregunta: 11500. Instrucci&oacute;n t&eacute;cnica de seguridad introducido por la disp. Adicional 4&ordf; RD 951/2015 que modifica el ENS.";


//  Id pregunta: 11594 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  El metadato m&iacute;nimo obligatorio 'Origen' de un documento electr&oacute;nico indica:";
 choices[97]= new Array();
 choices[97][0] = "El &oacute;rgano generador del documento o que realiza la captura del mismo.";
 choices[97][1] = "La naturaleza del documento; esto es, si se trata de un original o una copia electr&oacute;nica.";
 choices[97][2] = "Si el contenido del documento fue creado por un ciudadano o por una administraci&oacute;n";
 choices[97][3] = "El lugar de procedencia del documento.";
 answers[97] = choices[97][2];
 units[97] = "43";
 comments[97] = "Id Pregunta: 11594. ";


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


//  Id pregunta: 11696 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Un ABR (Router frontera de &aacute;rea) de OSPF:";
 choices[99]= new Array();
 choices[99][0] = "Debe disponer de varias interfaces conectadas al area Backbone";
 choices[99][1] = "Es un enrutador con dos interfaces, cada una de ellas conectada a un area OSPF diferente";
 choices[99][2] = "Un ABR debe disponer de una interfaz conectada al &aacute;rea backbone, y otra conectada a otra &aacute;rea OSPF";
 choices[99][3] = "Basta con que disponga de una interfaz conectada al &aacute;rea Backbone de OSPF";
 answers[99] = choices[99][2];
 units[99] = "102";
 comments[99] = "Id Pregunta: 11696. NULL";


