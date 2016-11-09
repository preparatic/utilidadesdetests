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

//  Id pregunta: 41 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de las siguientes respuestas sobre el sistema operativo Unix es falsa?:";
 choices[0]= new Array();
 choices[0][0] = "Fue escrito en los laboratorios Bell de ATT por Ken Thompson en 1969";
 choices[0][1] = "Ultrix es una versi&oacute;n modificada del Unix comercializada por un determinado fabricante de sistemas inform&aacute;ticos ";
 choices[0][2] = "Es el sistema operativo con mayor cantidad de software ofim&aacute;tico desarrollado para &eacute;l";
 choices[0][3] = "La Universidad de Berkeley adapt&oacute; una versi&oacute;n ampliamente utilizada en los primeros a&ntilde;os en los ambientes universitarios";
 answers[0] = choices[0][2];
 units[0] = "40";
 comments[0] = "Id Pregunta: 41. ";


//  Id pregunta: 254 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  Entre los m&eacute;todos utilizados para la selecci&oacute;n de bienes y servicios:";
 choices[1]= new Array();
 choices[1][0] = "En general se considera que a mayor entrop&iacute;a, mayor informaci&oacute;n, puesto que las puntuaciones est&aacute;n m&aacute;s ordenadas";
 choices[1][1] = "La normalizaci&oacute;n de las puntuaciones suele ser necesaria para considerarlas a todas sobre la misma escala y para simplificar los c&aacute;lculos";
 choices[1][2] = "En el m&eacute;todo de permutaci&oacute;n, se exigen solamente las evaluaciones cardinales y los pesos ordinales";
 choices[1][3] = "Todas las respuestas anteriores son correctas";
 answers[1] = choices[1][1];
 units[1] = "34";
 comments[1] = "Id Pregunta: 254. ";


//  Id pregunta: 334 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  NO es un modelo para la toma grupal de decisiones:";
 choices[2]= new Array();
 choices[2][0] = "Tormenta de ideas";
 choices[2][1] = "An&aacute;lisis de redes";
 choices[2][2] = "T&eacute;cnica nominal de grupo";
 choices[2][3] = "T&eacute;cnica Delphi";
 answers[2] = choices[2][1];
 units[2] = "23";
 comments[2] = "Id Pregunta: 334. ";


//  Id pregunta: 467 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  Un ejemplo de infracci&oacute;n grave es:";
 choices[3]= new Array();
 choices[3][0] = "proceder a la recogida de datos de car&aacute;cter personal de los propios afectados sin proporcionarles la informaci&oacute;n que se&ntilde;ala el art&iacute;culo 5 de la presente ley";
 choices[3][1] = "Proceder a la creaci&oacute;n de ficheros de titularidad p&uacute;blica o iniciar la recogida de datos de car&aacute;cter personal para los mismos, sin autorizaci&oacute;n de disposici&oacute;n general, publicada en el Bolet&iacute;n Oficial del Estado o diario oficial correspondiente.";
 choices[3][2] = "la recogida de datos en forma enga&ntilde;osa y fraudulenta";
 choices[3][3] = "No cesar en el tratamiento il&iacute;cito de datos  de car&aacute;cter personal cuando existiese un requerimiento previo del  Director de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos para ello.";
 answers[3] = choices[3][1];
 units[3] = "29";
 comments[3] = "Id Pregunta: 467. NULL";


//  Id pregunta: 732 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  En un sistema de informaci&oacute;n de una universidad, en el que se almacenan las asignaturas en las que se matriculan los alumnos, &iquest;cu&aacute;l ser&iacute;a la mejor manera de almacenar las asignaturas de las matr&iacute;culas en la base de datos relacional atendiendo a criterios";
 choices[4]= new Array();
 choices[4][0] = "En la tabla ALUMNOS; con un campo para cada asignatura";
 choices[4][1] = "En la tabla MATR&Iacute;CULA, con un campo asignaturas, en el que se almacenar&iacute;an, delimitadas por separadores, las asignaturas";
 choices[4][2] = "En la tabla ASIGNATURAS de MATR&Iacute;CULA, que tendr&iacute;a tantos registros como asignaturas tenga la matr&iacute;cula. Cada registro constar&iacute;a del identificador de la matr&iacute;cula y el identificador de la asignatura";
 choices[4][3] = "En le tabla ASIGNATURAS de MATR&Iacute;CULA, que tendr&iacute;a un registro por matr&iacute;cula, con tantos campos como asignaturas. El n&uacute;mero m&aacute;ximo de asignaturas depender&iacute;a de la universidad";
 answers[4] = choices[4][2];
 units[4] = "56,57";
 comments[4] = "Id Pregunta: 732. Examen TIC MAP B 2004";


//  Id pregunta: 795 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;Qu&eacute; son los midlets?:";
 choices[5]= new Array();
 choices[5][0] = "Son aplicaciones Java para la capa de middleware";
 choices[5][1] = "Son aplicaciones Java igualmente v&aacute;lidas para cliente o para servidor";
 choices[5][2] = "Son applets que s&oacute;lo se ejecutan bajo ciertas condiciones";
 choices[5][3] = "Son aplicaciones Java J2ME para dispositivos m&oacute;viles";
 answers[5] = choices[5][3];
 units[5] = "60";
 comments[5] = "Id Pregunta: 795. NULL";


//  Id pregunta: 806 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  A la estructura en disco que contiene la informaci&oacute;n de control de un fichero en un sistema de ficheros Unix se le denomina:";
 choices[6]= new Array();
 choices[6][0] = "I-nodo";
 choices[6][1] = "Cluster";
 choices[6][2] = "Bloque de control";
 choices[6][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[6] = choices[6][0];
 units[6] = "52,53";
 comments[6] = "Id Pregunta: 806. ";


//  Id pregunta: 1016 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  El ganador del concurso p&uacute;blico para reemplazar al algoritmo DES es:";
 choices[7]= new Array();
 choices[7][0] = "RC6";
 choices[7][1] = "Twofish";
 choices[7][2] = "Serpent";
 choices[7][3] = "Rijndael";
 answers[7] = choices[7][3];
 units[7] = "72";
 comments[7] = "Id Pregunta: 1016. ";


//  Id pregunta: 1397 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Un sistema inform&aacute;tico SCADA es:";
 choices[8]= new Array();
 choices[8][0] = "un sistema de supervisi&oacute;n, control y adquisici&oacute;n de datos";
 choices[8][1] = "un sistema de procesamiento paralelo optimizado para c&aacute;lculo matem&aacute;tico";
 choices[8][2] = "un sistema &uacute;nico multiprocesador que experimenta el uso del plasma en la construcci&oacute;n de CPUs m&aacute;s r&aacute;pidas";
 choices[8][3] = "un sistema de realidad virtual con perif&eacute;ricos de inmersi&oacute;n en la escena y retorno de la informaci&oacute;n de los sensores";
 answers[8] = choices[8][0];
 units[8] = "49";
 comments[8] = "Id Pregunta: 1397. ";


//  Id pregunta: 1468 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  La ley de Fitt, en el contexto del dise&ntilde;o de interfaces de usuario, nos dice que:";
 choices[9]= new Array();
 choices[9][0] = "si algo del interfaz puede dise&ntilde;arse mal, se dise&ntilde;ar&aacute; mal y el usuario lo rechazar&aacute;";
 choices[9][1] = "con el 20% del trabajo se realiza el 80% de la interfaz";
 choices[9][2] = "con el 80% del dise&ntilde;o se ocupa el 20% del trabajo";
 choices[9][3] = "el tiempo en localizar un objetivo visual en el interfaz es una funci&oacute;n de la distancia y el tama&ntilde;o del objetivo";
 answers[9] = choices[9][3];
 units[9] = "52";
 comments[9] = "Id Pregunta: 1468. ";


//  Id pregunta: 1592 AÃ±o de creación de pregunta: 2003-01-01
 questions[10]= "11)  En los lenguajes de marca, HTML y XML, las etiquetas finales se representan con la siguiente simbolog&iacute;a, donde TITLE es el texto que indica la etiqueta";
 choices[10]= new Array();
 choices[10][0] = "&lt;/TITLE&gt;";
 choices[10][1] = "&lt;TITLE&gt;";
 choices[10][2] = "/&lt;TITLE&gt;";
 choices[10][3] = "/TITLE";
 answers[10] = choices[10][0];
 units[10] = "69";
 comments[10] = "Id Pregunta: 1592. NULL";


//  Id pregunta: 1653 AÃ±o de creación de pregunta: 2004-01-01
 questions[11]= "12)  &iquest;Cu&aacute;l de los siguientes protocolos se puede considerar como menos seguro para la realizaci&oacute;n de una transacci&oacute;n de comercio electr&oacute;nico?";
 choices[11]= new Array();
 choices[11][0] = "SET";
 choices[11][1] = "SSL";
 choices[11][2] = "3D-Secure";
 choices[11][3] = "SPA/UCAF";
 answers[11] = choices[11][1];
 units[11] = "70";
 comments[11] = "Id Pregunta: 1653. NULL";


//  Id pregunta: 1669 AÃ±o de creación de pregunta: 2004-01-01
 questions[12]= "13)  &iquest;En que generaci&oacute;n aparecen los circuitos integrados LSI?";
 choices[12]= new Array();
 choices[12][0] = "En la primera generaci&oacute;n";
 choices[12][1] = "En la segunda generaci&oacute;n";
 choices[12][2] = "En la tercera generaci&oacute;n";
 choices[12][3] = "En la cuarta generaci&oacute;n";
 answers[12] = choices[12][3];
 units[12] = "47";
 comments[12] = "Id Pregunta: 1669. ";


//  Id pregunta: 1736 AÃ±o de creación de pregunta: 2006-01-01
 questions[13]= "14)  &iquest;Qu&eacute; es MOSIX?";
 choices[13]= new Array();
 choices[13][0] = "Un sistema operativo monousuario";
 choices[13][1] = "Conjunto de herramientas para crear cl&uacute;sters basados en Linux";
 choices[13][2] = "El m&oacute;dulo encargado de la E/S en Linux";
 choices[13][3] = "API para ejecutar sentencias SQL";
 answers[13] = choices[13][1];
 units[13] = "55";
 comments[13] = "Id Pregunta: 1736. ";


//  Id pregunta: 1806 AÃ±o de creación de pregunta: 2006-01-01
 questions[14]= "15)  Dentro del terreno del e-learning, se&ntilde;ale qu&eacute; opci&oacute;n describe el &quot;blended learning&quot; de forma m&aacute;s exacta:";
 choices[14]= new Array();
 choices[14][0] = "Aquel modo de aprender que combina la ense&ntilde;anza presencial con la tecnolog&iacute;a no presencial";
 choices[14][1] = "Aprendizaje e-learning mediante combinaci&oacute;n de informaci&oacute;n alfanum&eacute;rica, gr&aacute;fica e hipertextual";
 choices[14][2] = "Aprendizaje mediante la profusi&oacute;n de elementos multimedia";
 choices[14][3] = "Aprendizaje basado en la mezcla cultural del alumnado, con experiencias diversas";
 answers[14] = choices[14][0];
 units[14] = "66";
 comments[14] = "Id Pregunta: 1806. &quot;blended learning&quot; = aprendizaje semipresencial";


//  Id pregunta: 1920 AÃ±o de creación de pregunta: 2006-01-01
 questions[15]= "16)  &iquest;Cu&aacute;l de los siguientes modelos de ciclo de vida del software favorece la reutilizaci&oacute;n del software existente?";
 choices[15]= new Array();
 choices[15][0] = "Modelo en cascada";
 choices[15][1] = "Modelo de prototipado";
 choices[15][2] = "Modelo de transformaci&oacute;n";
 choices[15][3] = "Modelo en espiral";
 answers[15] = choices[15][3];
 units[15] = "76";
 comments[15] = "Id Pregunta: 1920. ";


//  Id pregunta: 1950 AÃ±o de creación de pregunta: 2006-01-01
 questions[16]= "17)  El protocolo SSL v.3";
 choices[16]= new Array();
 choices[16][0] = "Trabaja tanto sobre TCP como sobre UDP";
 choices[16][1] = "Hasta hace pocos a&ntilde;os los navegadores que incorporaban SSL ten&iacute;an su exportaci&oacute;n desde EE UU limitada a claves de 128 bits";
 choices[16][2] = "Es id&eacute;ntico al protocolo TLS, aunque este &uacute;ltimo est&aacute; normalizado por el IETF mediante un RFC";
 choices[16][3] = "Intercambia las claves secretas mediante el ensobrado digital (digital envelopment) o mediante Diffie-Hellman";
 answers[16] = choices[16][3];
 units[16] = "72";
 comments[16] = "Id Pregunta: 1950. ";


//  Id pregunta: 2253 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Dentro de un diagrama de flujos de datos, a los procesos que no necesitan descomponerse se les denomina:";
 choices[17]= new Array();
 choices[17][0] = "Procesos primitivos";
 choices[17][1] = "Procesos finales";
 choices[17][2] = "Procesos at&oacute;micos";
 choices[17][3] = "Procesos elementales";
 answers[17] = choices[17][0];
 units[17] = "81";
 comments[17] = "Id Pregunta: 2253. ";


//  Id pregunta: 2351 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  En un diagrama de GANTT, un hito, por definici&oacute;n:";
 choices[18]= new Array();
 choices[18][0] = "Dura lo mismo que la etapa que lo genera";
 choices[18][1] = "Dura una unidad temporal";
 choices[18][2] = "Su duraci&oacute;n se incluye en las etapas que desencadena";
 choices[18][3] = "No tiene duraci&oacute;n";
 answers[18] = choices[18][3];
 units[18] = "86";
 comments[18] = "Id Pregunta: 2351. NULL";


//  Id pregunta: 2483 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  Respecto a los procesos, en un DFD:";
 choices[19]= new Array();
 choices[19][0] = "Cada proceso debe tener al menos una entrada y una salida";
 choices[19][1] = "Un proceso no puede ser fuente ni sumidero de informaci&oacute;n, s&oacute;lo transformarla";
 choices[19][2] = "Un proceso primitivo es aquel del que derivan en el tiempo otros procesos del sistema";
 choices[19][3] = "Las opciones a) y b) son correctas";
 answers[19] = choices[19][3];
 units[19] = "81";
 comments[19] = "Id Pregunta: 2483. ";


//  Id pregunta: 3015 AÃ±o de creación de pregunta: 2004-01-01
 questions[20]= "21)  Entre las carater&iacute;sticas de propagaci&oacute;n de las ondas de radiofrecuencia, cu&aacute;l de las siguientes afirmaciones no es correcta cuando se incrementa la frecuencia?";
 choices[20]= new Array();
 choices[20][0] = "Menor alcance de la se&ntilde;al";
 choices[20][1] = "menor ancho de banda";
 choices[20][2] = "mayor inmunidad al ruido";
 choices[20][3] = "mayor necesidad de visibilidad directa";
 answers[20] = choices[20][1];
 units[20] = "107";
 comments[20] = "Id Pregunta: 3015. NULL";


//  Id pregunta: 3033 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  &iquest;Cu&aacute;l de las siguientes afirmaciones no es cierta en una aplicaci&oacute;n web?:";
 choices[21]= new Array();
 choices[21][0] = "Las p&aacute;ginas ASP se ejecutan en el servidor web";
 choices[21][1] = "Los componentes ActiveX se ejecutan en el cliente";
 choices[21][2] = "Los componentes CGI se ejecutan en el servidor";
 choices[21][3] = "Los applets de Java se ejecutan en el servidor";
 answers[21] = choices[21][3];
 units[21] = "114";
 comments[21] = "Id Pregunta: 3033. ";


//  Id pregunta: 3063 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  En las transmisiones de se&ntilde;ales el&eacute;ctricas a las perturbaciones producidas en sistemas no lineales y que consisten en la aparici&oacute;n en el receptor de nuevas componentes espectrales de segundo orden se las llama:";
 choices[22]= new Array();
 choices[22][0] = "Distorsi&oacute;n no lineal";
 choices[22][1] = "Distorsi&oacute;n lineal de segundo orden";
 choices[22][2] = "Intermodulaci&oacute;n";
 choices[22][3] = "Paradiafon&iacute;a";
 answers[22] = choices[22][2];
 units[22] = "99";
 comments[22] = "Id Pregunta: 3063. ";


//  Id pregunta: 3261 AÃ±o de creación de pregunta: 2009-01-01
 questions[23]= "24)  En GPRS, es razonable facturar:";
 choices[23]= new Array();
 choices[23][0] = "por tiempo de conexi&oacute;n";
 choices[23][1] = "por n&uacute;mero de conexiones";
 choices[23][2] = "por portadoras en uso";
 choices[23][3] = "por volumen y calidad de servicio";
 answers[23] = choices[23][3];
 units[23] = "108";
 comments[23] = "Id Pregunta: 3261. ";


//  Id pregunta: 3444 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  El protocolo de comunicaciones denominado HDLC, es un protocolo orientado a:";
 choices[24]= new Array();
 choices[24][0] = "Car&aacute;cter, de modos: ARM, ABM y SRM";
 choices[24][1] = "Bit , de modos: ARM, ABM y SRM";
 choices[24][2] = "Car&aacute;cter, con cadencia secuencial";
 choices[24][3] = "Bit, con cadencia secuencial";
 answers[24] = choices[24][1];
 units[24] = "100";
 comments[24] = "Id Pregunta: 3444. NULL";


//  Id pregunta: 3445 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  El protocolo de control de enlace normalizado por ISO y que corresponde exclusivamente al nivel 2 de su modelo de referencia es el:";
 choices[25]= new Array();
 choices[25][0] = "37288";
 choices[25][1] = "37316";
 choices[25][2] = "37347";
 choices[25][3] = "37377";
 answers[25] = choices[25][0];
 units[25] = "100";
 comments[25] = "Id Pregunta: 3445. NULL";


//  Id pregunta: 3518 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  En Espa&ntilde;a la portabilidad del n&uacute;mero de abonado:";
 choices[26]= new Array();
 choices[26][0] = "Es obligatoria desde la Orden Ministerial de 4 de agosto de 1997";
 choices[26][1] = "Se basa en diferentes tecnolog&iacute;as: redirecci&oacute;n de llamada y red inteligente";
 choices[26][2] = "Permite a un abonado de un operador de telefon&iacute;a cambiar de operador conservando el n&uacute;mero";
 choices[26][3] = "Todas las respuestas anteriores son correctas";
 answers[26] = choices[26][3];
 units[26] = "110";
 comments[26] = "Id Pregunta: 3518. ";


//  Id pregunta: 3538 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  En LMDS las t&eacute;cnicas com&uacute;nmente usadas para la reutilizaci&oacute;n de frecuencias son:";
 choices[27]= new Array();
 choices[27][0] = "Minimizar la direccionalidad de las antenas de las celdas";
 choices[27][1] = "Maximizar el aislamiento entre sectores adyacentes a trav&eacute;s de la polarizaci&oacute;n";
 choices[27][2] = "Aumentar el tama&ntilde;o de celda";
 choices[27][3] = "Ninguna de las anteriores";
 answers[27] = choices[27][1];
 units[27] = "108";
 comments[27] = "Id Pregunta: 3538. ";


//  Id pregunta: 3610 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  La funci&oacute;n fundamental de un &quot;m&oacute;dem&quot; es:";
 choices[28]= new Array();
 choices[28][0] = "La adaptaci&oacute;n de las se&ntilde;ales digitales entre ordenadores, para su transmisi&oacute;n a trav&eacute;s de la l&iacute;nea telef&oacute;nica b&aacute;sica";
 choices[28][1] = "La adaptaci&oacute;n de las se&ntilde;ales anal&oacute;gicas entre ordenadores, para su transmisi&oacute;n a trav&eacute;s de la l&iacute;nea telef&oacute;nica b&aacute;sica";
 choices[28][2] = "La adaptaci&oacute;n de las se&ntilde;ales anal&oacute;gicas y digitales entre ordenadores, para su transmisi&oacute;n a trav&eacute;s de la l&iacute;nea telef&oacute;nica digital";
 choices[28][3] = "La adaptaci&oacute;n de las se&ntilde;ales anal&oacute;gicas entre ordenadores, para su transmisi&oacute;n a trav&eacute;s de un medio no anal&oacute;gico";
 answers[28] = choices[28][0];
 units[28] = "99";
 comments[28] = "Id Pregunta: 3610. modems";


//  Id pregunta: 3632 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  La primera empresa que propuso el uso de t&eacute;cnicas CDMA fue:";
 choices[29]= new Array();
 choices[29][0] = "AT&amp;T";
 choices[29][1] = "Qualcomm";
 choices[29][2] = "Motorola";
 choices[29][3] = "RCA";
 answers[29] = choices[29][1];
 units[29] = "108";
 comments[29] = "Id Pregunta: 3632. ";


//  Id pregunta: 3641 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  La separaci&oacute;n entre diferentes canales de radio en UMTS se hace mediante:";
 choices[30]= new Array();
 choices[30][0] = "Diferentes frecuencias";
 choices[30][1] = "Distintos intervalos temporales";
 choices[30][2] = "Diferentes c&oacute;digos";
 choices[30][3] = "Ninguna de las anteriores";
 answers[30] = choices[30][2];
 units[30] = "108";
 comments[30] = "Id Pregunta: 3641. ";


//  Id pregunta: 3862 AÃ±o de creación de pregunta: 2004-01-01
 questions[31]= "32)  Qu&eacute; servicio no ofrece DNS security";
 choices[31]= new Array();
 choices[31][0] = "Prueba del origen de datos";
 choices[31][1] = "Distribuci&oacute;n de clave p&uacute;blica";
 choices[31][2] = "Secreto del mensaje";
 choices[31][3] = "Autenticaci&oacute;n";
 answers[31] = choices[31][2];
 units[31] = "116";
 comments[31] = "Id Pregunta: 3862. Tanenbaum";


//  Id pregunta: 3937 AÃ±o de creación de pregunta: 2003-01-01
 questions[32]= "33)  &iquest;Qu&eacute; est&aacute;ndar  WIFI es el que soporta simult&aacute;neamente las velocidades de 11Mbps y 54Mbps?";
 choices[32]= new Array();
 choices[32][0] = " 802.11a";
 choices[32][1] = "802.11b";
 choices[32][2] = "802.11g";
 choices[32][3] = "802.11x";
 answers[32] = choices[32][2];
 units[32] = "100";
 comments[32] = "Id Pregunta: 3937. ";


//  Id pregunta: 4028 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  Respecto a Frame Relay, que es verdadero respecto al CIR";
 choices[33]= new Array();
 choices[33][0] = "Todos los PVC deben tener el mismo CIR";
 choices[33][1] = "Es la velocidad que la red se compromete a  servir como minimo";
 choices[33][2] = "Es el volumen de tr&aacute;fico adicional sobre el volumen alcanzable.";
 choices[33][3] = "Es la velocidad m&aacute;xima de acceso a la red.";
 answers[33] = choices[33][1];
 units[33] = "109";
 comments[33] = "Id Pregunta: 4028. ";


//  Id pregunta: 4037 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  El servicio universal definido en Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, debe permitir al usuario final la posibilidad de:";
 choices[34]= new Array();
 choices[34][0] = "Efectuar y recibir llamadas telef&oacute;nicas.";
 choices[34][1] = "Efectuar y recibir llamadas telef&oacute;nicas y permitir comunicaciones de fax.";
 choices[34][2] = "Efectuar y recibir llamadas telef&oacute;nicas y permitir comunicaciones de fax y datos a velocidad suficiente para acceder de forma funcional a Internet.";
 choices[34][3] = "Efectuar y recibir llamadas telef&oacute;nicas y permitir comunicaciones de datos a velocidad suficiente para acceder de forma funcional a Internet.";
 answers[34] = choices[34][2];
 units[34] = "110";
 comments[34] = "Id Pregunta: 4037. ";


//  Id pregunta: 4049 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  &iquest;Qu&eacute; se suele encontrar en una DMZ?";
 choices[35]= new Array();
 choices[35][0] = "un proxy de  correo";
 choices[35][1] = "un cache web";
 choices[35][2] = "un server web";
 choices[35][3] = "todas las anteriores";
 answers[35] = choices[35][3];
 units[35] = "111";
 comments[35] = "Id Pregunta: 4049. NULL";


//  Id pregunta: 4068 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  En la estructura de la actual internet podemos diferenciar varios niveles jer&aacute;rquicos";
 choices[36]= new Array();
 choices[36][0] = "3, red troncal - redes de proveedores de &aacute;mbito local - redes corporativas";
 choices[36][1] = "4, red troncal - redes de proveedores de tr&aacute;nsito y acceso internacional - redes de proveedores de acceso local - redes corporativas";
 choices[36][2] = "5, red troncal - redes de proveedores de tr&aacute;nsito y acceso internacional - redes de proveedores de acceso local - redes corporativas - redes locales";
 choices[36][3] = "Internet es la red de redes y no tiene ning&uacute;n tipo de jerarqu&iacute;a en sus infraestructuras";
 answers[36] = choices[36][1];
 units[36] = "112";
 comments[36] = "Id Pregunta: 4068. ";


//  Id pregunta: 4306 AÃ±o de creación de pregunta: 2007-01-01
 questions[37]= "38)  El sistema m&aacute;s econ&oacute;mico y sencillo para proporcionar autenticaci&oacute;n y autorizaci&oacute;n es:";
 choices[37]= new Array();
 choices[37][0] = "Utilizaci&oacute;n de passwords (palabras de paso).";
 choices[37][1] = "Utilizaci&oacute;n de certificados digitales";
 choices[37][2] = "Utilizaci&oacute;n de mecanismos biom&eacute;tricos.";
 choices[37][3] = "Utilizaci&oacute;n de un cortafuego (firewall).";
 answers[37] = choices[37][0];
 units[37] = "74";
 comments[37] = "Id Pregunta: 4306. NULL";


//  Id pregunta: 4378 AÃ±o de creación de pregunta: 2007-01-01
 questions[38]= "39)  El objetivo principal del an&aacute;lisis de sistemas es:";
 choices[38]= new Array();
 choices[38][0] = "Determinar el mecanismo de funcionamiento de los m&oacute;dulos.";
 choices[38][1] = "Validar con el cliente el cumplimiento de las especificaciones.";
 choices[38][2] = "Establecer claramente las especificaciones del producto.";
 choices[38][3] = "Integrar los distintos componentes del sistema.";
 answers[38] = choices[38][2];
 units[38] = "80";
 comments[38] = "Id Pregunta: 4378. ";


//  Id pregunta: 4413 AÃ±o de creación de pregunta: 2007-01-01
 questions[39]= "40)  &iquest;Cu&aacute;l de las siguientes no es una t&eacute;cnica de selecci&oacute;n de inversiones?";
 choices[39]= new Array();
 choices[39][0] = "El m&eacute;todo del Payback.";
 choices[39][1] = "El m&eacute;todo del retorno de la inversi&oacute;n.";
 choices[39][2] = "El m&eacute;todo del Valor Actual Neto.";
 choices[39][3] = "El m&eacute;todo del Indicador Alternativo de Variabilidad del Precio de Mercado.";
 answers[39] = choices[39][3];
 units[39] = "27";
 comments[39] = "Id Pregunta: 4413. Examen TIC MAP B 2006";


//  Id pregunta: 4552 AÃ±o de creación de pregunta: 2007-01-01
 questions[40]= "41)  El articulo 60 del RD Legislativo 3/2011 de Contratos del Sector P&uacute;blico establece que en ning&uacute;n caso podr&aacute;n contratar con la Administraci&oacute;n las personas en quienes concurra alguna de las circunstancias siguientes:";
 choices[40]= new Array();
 choices[40][0] = "haber dado lugar, por causa de la que hubiesen sido declarados culpables ,a la suspensi&oacute;n de cualquier contrato celebrado con Ia Administraci&oacute;n";
 choices[40][1] = "no hallarse al corriente en el cumplimiento de las obligaciones tributarias o de Seguridad Social impuestas por las disposiciones vigentes, en los t&eacute;rminos que reglamentariamente se determine.";
 choices[40][2] = "no hallarse debidamente clasificadas, en su caso conforme a lo dispuesto en la Ley de Contratos del Sector P&uacute;blico o no acreditar la suficiente solvencia econ&oacute;mica, practica y t&eacute;cnica.";
 choices[40][3] = "haber incurrido en falsedad al facilitar a la Administraci&oacute;n las declaraciones exigibles en el cumplimiento de las disposiciones de esta Ley y de sus normas de desarrollo.";
 answers[40] = choices[40][1];
 units[40] = "41";
 comments[40] = "Id Pregunta: 4552. ";


//  Id pregunta: 4625 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  Cu&aacute;l de las siguientes caracter&iacute;sticas del protocolo SOAP es falsa";
 choices[41]= new Array();
 choices[41][0] = "Atraviesa firewalls y routers";
 choices[41][1] = "Depende del sistema operativo y del procesador";
 choices[41][2] = "Es un est&aacute;ndar de la industria";
 choices[41][3] = "Utiliza los mismos est&aacute;ndares de la Web";
 answers[41] = choices[41][1];
 units[41] = "51";
 comments[41] = "Id Pregunta: 4625. NULL";


//  Id pregunta: 4628 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  &iquest;Que entidad publica empresarial tiene atribuida la autoridad de asignaci&oacute;n de nombres de dominio .es?:";
 choices[42]= new Array();
 choices[42][0] = "Red.es";
 choices[42][1] = "FNMT";
 choices[42][2] = "dominios.es";
 choices[42][3] = "Red Iris";
 answers[42] = choices[42][0];
 units[42] = "";
 comments[42] = "Id Pregunta: 4628. ";


//  Id pregunta: 4954 AÃ±o de creación de pregunta: 2003-01-01
 questions[43]= "44)  &iquest;Qu&eacute; t&eacute;cnica no es aplicable para dise&ntilde;ar un producto web usable y centrado en el usuario?:";
 choices[43]= new Array();
 choices[43][0] = "Card Sorting.";
 choices[43][1] = "L&oacute;gica Fuzzy.";
 choices[43][2] = "Eye Tracking.";
 choices[43][3] = "An&aacute;lisis de Secuencia.";
 answers[43] = choices[43][1];
 units[43] = "39";
 comments[43] = "Id Pregunta: 4954. Examen TIC B 2007";


//  Id pregunta: 5033 AÃ±o de creación de pregunta: 2003-01-01
 questions[44]= "45)  En la planificaci&oacute;n de un proyecto representada por un diagrama de Pert, una actividad critica es una actividad:";
 choices[44]= new Array();
 choices[44][0] = "con un alto riesgo de incrementar su duraci&oacute;n";
 choices[44][1] = "con dependencia de otra actividad y de la que depende al menos una actividad";
 choices[44][2] = "en el camino cr&iacute;tico";
 choices[44][3] = "cuya duraci&oacute;n no puede modificarse";
 answers[44] = choices[44][2];
 units[44] = "77";
 comments[44] = "Id Pregunta: 5033. Examen TIC A 2007";


//  Id pregunta: 5041 AÃ±o de creación de pregunta: 2003-01-01
 questions[45]= "46)  La Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, establece como infracci&oacute;n leve:";
 choices[45]= new Array();
 choices[45][0] = "La realizaci&oacute;n de actividades sin t&iacute;tulo habilitante cuando sea legalmente necesario";
 choices[45][1] = "La instalaci&oacute;n de estaciones radioel&eacute;ctricas sin autorizaci&oacute;n, cuando, de acuerdo con lo dispuesto en lanormativa reguladora de las telecomunicaciones, sea necesaria";
 choices[45][2] = "No facilitar los datos requeridos por la Administraci&oacute;n o retrasar injustificadamente su aportaci&oacute;n cuando resulte exigible conforme a lo previsto por la normativa reguladora de las comunicaciones electr&oacute;nicas.";
 choices[45][3] = " La transferencia de t&iacute;tulos habilitantes o cesi&oacute;n de derechos de uso del dominio p&uacute;blico radioel&eacute;ctrico, sin cumplir con los requisitos establecidos a tal efecto por la normativa de desarrollo de esta Ley";
 answers[45] = choices[45][2];
 units[45] = "110";
 comments[45] = "Id Pregunta: 5041. Examen TIC A 2007. Modificado seg&uacute;n Ley 9/2014";


//  Id pregunta: 5117 AÃ±o de creación de pregunta: 2003-01-01
 questions[46]= "47)  Las normas internacionales en materia de Seguridad de la informaci&oacute;n las publica:";
 choices[46]= new Array();
 choices[46][0] = "AENOR";
 choices[46][1] = "ISO";
 choices[46][2] = "EIC";
 choices[46][3] = "NIS";
 answers[46] = choices[46][1];
 units[46] = "42";
 comments[46] = "Id Pregunta: 5117. Examen TIC A Castilla La Mancha 2007";


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


//  Id pregunta: 5158 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  Indique el est&aacute;ndar en el que se basan las redes Ethernet:";
 choices[48]= new Array();
 choices[48][0] = "IEEE 802.2";
 choices[48][1] = "IEEE 802.3";
 choices[48][2] = "IEEE 802.4";
 choices[48][3] = "IEEE 802.5";
 answers[48] = choices[48][1];
 units[48] = "101";
 comments[48] = "Id Pregunta: 5158. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5531 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  &iquest;Cu&aacute;l de las siguientes no es una caracter&iacute;stica de la gesti&oacute;n documental?";
 choices[49]= new Array();
 choices[49][0] = "Limitaci&oacute;n a un &uacute;nico tipo o formato de documento para cada gestor documental";
 choices[49][1] = "Establecer m&eacute;todos seguros de distribuci&oacute;n de documentos dentro y fuera de la organizaci&oacute;n";
 choices[49][2] = "Compartir documentaci&oacute;n con los distintos  integrantes de un grupo";
 choices[49][3] = "Gestionar gran volumen de registros y recuperarlos en poco tiempo";
 answers[49] = choices[49][0];
 units[49] = "95";
 comments[49] = "Id Pregunta: 5531. NULL";


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


//  Id pregunta: 5578 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  &iquest;Cu&aacute;l de estas afirmaciones NO es correcta?";
 choices[51]= new Array();
 choices[51][0] = "La recomendaci&oacute;n aplicable para HDSL es la G991.1";
 choices[51][1] = "La recomendaci&oacute;n aplicable para ADSL-lite es G992.2";
 choices[51][2] = "La recomendaci&oacute;n aplicable para el ADSL2 es G992.3 y G992.4";
 choices[51][3] = "La recomendaci&oacute;n aplicable del SHDSL es la G992.1";
 answers[51] = choices[51][3];
 units[51] = "107";
 comments[51] = "Id Pregunta: 5578. NULL";


//  Id pregunta: 5632 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  Una soluci&oacute;n CISC no se caracteriza por:";
 choices[52]= new Array();
 choices[52][0] = "Muchos modos de direccionamiento";
 choices[52][1] = "Unidad de control cableada";
 choices[52][2] = "N&uacute;mero de instrucciones muy elevado";
 choices[52][3] = "Varios formatos de instrucci&oacute;n (longitud variable)";
 answers[52] = choices[52][1];
 units[52] = "45";
 comments[52] = "Id Pregunta: 5632. ";


//  Id pregunta: 5858 AÃ±o de creación de pregunta: 2009-01-01
 questions[53]= "54)  &iquest;Qu&eacute; comando crea enlaces simb&oacute;licos en UNIX?";
 choices[53]= new Array();
 choices[53][0] = "ln";
 choices[53][1] = "mkdir";
 choices[53][2] = "ls";
 choices[53][3] = "mv";
 answers[53] = choices[53][0];
 units[53] = "53";
 comments[53] = "Id Pregunta: 5858. Pregunta 38";


//  Id pregunta: 6156 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  &iquest;Qu&eacute; tipo de licencia utiliza Samba?";
 choices[54]= new Array();
 choices[54][0] = "GPL";
 choices[54][1] = "GNU LGPL";
 choices[54][2] = "No utiliza ning&uacute;n tipo de licencia";
 choices[54][3] = "MGPL";
 answers[54] = choices[54][0];
 units[54] = "112";
 comments[54] = "Id Pregunta: 6156. ";


//  Id pregunta: 6345 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  Identifique cu&aacute;l de los siguientes no es uno de los siete principios de la Web 2.0";
 choices[55]= new Array();
 choices[55][0] = "World Wide Web como plataforma de trabajo";
 choices[55][1] = "Las experiencias enriquecedoras de los usuarios";
 choices[55][2] = "El fin del ciclo de las actualizaciones de versiones del software.";
 choices[55][3] = "El software limitado a un solo dispositivo.";
 answers[55] = choices[55][3];
 units[55] = "120";
 comments[55] = "Id Pregunta: 6345. NULL";


//  Id pregunta: 6422 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  Proporcionar a los usuarios el tiempo suficiente para leer y usar el contenido es una pauta que corresponde, &iquest;a qu&eacute; principio de WCAG 2.0?";
 choices[56]= new Array();
 choices[56][0] = "Perceptible";
 choices[56][1] = "Operable";
 choices[56][2] = "Robusto";
 choices[56][3] = "Comprensible";
 answers[56] = choices[56][1];
 units[56] = "39";
 comments[56] = "Id Pregunta: 6422. NULL";


//  Id pregunta: 6450 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  En un sistema operativo LINUX &iquest;qu&eacute; es un gestor GRUB?";
 choices[57]= new Array();
 choices[57][0] = "Un gestor de creaci&oacute;n y activaci&oacute;n de particiones swap, en el primer sector de la partici&oacute;n de arranque";
 choices[57][1] = "Un gestor que crea un &aacute;rea de swap en memoria RAM";
 choices[57][2] = "Un gestor que activa una partici&oacute;n de swap ya creada";
 choices[57][3] = "Un gestor de arranque multisistema creado por el proyecto GNU";
 answers[57] = choices[57][3];
 units[57] = "54";
 comments[57] = "Id Pregunta: 6450. Castilla La Mancha 2009";


//  Id pregunta: 6478 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  Durante la creaci&oacute;n de una base de datos Oracle se generan autom&aacute;ticamente dos usuarios. Estas dos cuentas son:";
 choices[58]= new Array();
 choices[58][0] = "SYS Y DBA";
 choices[58][1] = "SYS Y SYSTEM";
 choices[58][2] = "SYSTEM Y DBA";
 choices[58][3] = "MANAGER Y DBA";
 answers[58] = choices[58][1];
 units[58] = "57";
 comments[58] = "Id Pregunta: 6478. Castilla La Mancha 2009";


//  Id pregunta: 6548 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  &iquest;C&oacute;mo se utiliza un protocolo reto/respuesta con una implementaci&oacute;n con un dispositivo de tokens?";
 choices[59]= new Array();
 choices[59][0] = "Este protocolo no se usa, se usa la criptograf&iacute;a";
 choices[59][1] = "El servicio de autenticaci&oacute;n genera un reto y el dispositivo inteligente genera una respuesta basado en el reto";
 choices[59][2] = "El dispositivo pide el usuario y la contrase&ntilde;a";
 choices[59][3] = "El dispositivo compara la contrase&ntilde;a del usuario contra una base de datos de credenciales";
 answers[59] = choices[59][1];
 units[59] = "111";
 comments[59] = "Id Pregunta: 6548. NULL";


//  Id pregunta: 6616 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  Seg&uacute;n M&eacute;trica el grupo de Aseguramiento de la Calidad participa en el proyecto bajo el perfil de";
 choices[60]= new Array();
 choices[60][0] = "Consultor";
 choices[60][1] = "Analista";
 choices[60][2] = "Calidad";
 choices[60][3] = "Experto";
 answers[60] = choices[60][1];
 units[60] = "86";
 comments[60] = "Id Pregunta: 6616. NULL";


//  Id pregunta: 7801 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)   &iquest;Qu&eacute; organizaci&oacute;n normalizadora se dedica a trabajar en la extensi&oacute;n del est&aacute;ndar POSIX (Portable Operating System Interface for Computer Environments)?";
 choices[61]= new Array();
 choices[61][0] = " X/OPEN.";
 choices[61][1] = " ACE.";
 choices[61][2] = " OSF.";
 choices[61][3] = " IEEE.";
 answers[61] = choices[61][3];
 units[61] = "NULL";
 comments[61] = "Id Pregunta: 7801. Map 2005";


//  Id pregunta: 7918 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)   El software utilizado para controlar una fotocopiadora avanzada requiere 32.000 l&iacute;neas de c&oacute;digo C y 4.200 l&iacute;neas de c&oacute;digo en un lenguaje especializado de Cuarta Generaci&oacute;n (4GL). Teniendo en cuenta que en los lenguajes 4GL se cumple que el ratio LDC/PF (L&iacute;neas de C&oacute;digo/Puntos de Funci&oacute;n) es 20 y en el c&oacute;digo C el ratio es 128 LDC/PF, &iquest;cu&aacute;l es el n&uacute;mero de puntos de funci&oacute;n del software de gesti&oacute;n de la fotocopiadora?";
 choices[62]= new Array();
 choices[62][0] = " 148.";
 choices[62][1] = " 250.";
 choices[62][2] = " 460.";
 choices[62][3] = " 210.";
 answers[62] = choices[62][2];
 units[62] = "NULL";
 comments[62] = "Id Pregunta: 7918. Map 2006";


//  Id pregunta: 8160 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)   &iquest;Cu&aacute;ntos bits utiliza el protocolo IPv6 (Internet Protocol version 6";
 choices[63]= new Array();
 choices[63][0] = " para el campo de direcciones IP?";
 choices[63][1] = " 16 bits.";
 choices[63][2] = " 32 bits.";
 choices[63][3] = " 64 bits.";
 answers[63] = choices[63][3];
 units[63] = "NULL";
 comments[63] = "Id Pregunta: 8160. Map 2008";


//  Id pregunta: 8335 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  &iquest;Qu&eacute; t&eacute;cnica es utilizada para identificar las dependencias en un proyecto?";
 choices[64]= new Array();
 choices[64][0] = "Los diagramas de Gantt.";
 choices[64][1] = "Program Evaluation &amp; Review Technique.";
 choices[64][2] = "Estructura de Descomposici&oacute;n de Trabajo (WBS).";
 choices[64][3] = "Diagrama de Extrapolaci&oacute;n.";
 answers[64] = choices[64][1];
 units[64] = "86";
 comments[64] = "Id Pregunta: 8335. Examen TIC A2 2010";


//  Id pregunta: 8425 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  &iquest;Cu&aacute;l de los siguientes principios b&aacute;sicos no aparece en el Esquema Nacional de Interoperabilidad, Real Decreto 4/2010 del 8 de enero?";
 choices[65]= new Array();
 choices[65][0] = "La interoperabilidad como cualidad integral";
 choices[65][1] = "La reutilizaci&oacute;n y la transferencia tecnol&oacute;gica";
 choices[65][2] = "El car&aacute;cter multidimensional de la interoperabilidad";
 choices[65][3] = "El enfoque de soluciones multilaterales";
 answers[65] = choices[65][1];
 units[65] = "43";
 comments[65] = "Id Pregunta: 8425. ";


//  Id pregunta: 8432 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  De los siguientes algoritmos de asignaci&oacute;n del turno de ejecuci&oacute;n de los procesos, &iquest;Cu&aacute;l de ellos consiste en asignar a cada proceso un intervalo de tiempo de ejecuci&oacute;n (llamado time-slice), y cada vez que se vence ese intervalo se copia el contexto del proceso a un lugar seguro y se le asigna su turno a otro proceso?";
 choices[66]= new Array();
 choices[66][0] = "SJF (Shortest Job First)";
 choices[66][1] = "FIFO (First In First Out";
 choices[66][2] = "Por prioridad";
 choices[66][3] = "Round Robin";
 answers[66] = choices[66][3];
 units[66] = "52";
 comments[66] = "Id Pregunta: 8432. ";


//  Id pregunta: 8473 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  &iquest;Cual de las siguientes afirmaciones sobre los cables EIA/TIA/568B de categoria 6 es correcta?";
 choices[67]= new Array();
 choices[67][0] = "Tiene un ancho de banda de hasta 10 Ghz en cada par.";
 choices[67][1] = "Se suele usar para transmitir a velocidades de 1 Gbps.";
 choices[67][2] = "No permite implementar Power over Ethernet (PoE).";
 choices[67][3] = "S&oacute;lo est&aacute; disponible de forma experimental.";
 answers[67] = choices[67][1];
 units[67] = "99";
 comments[67] = "Id Pregunta: 8473. Examen TIC A2 2010 interna";


//  Id pregunta: 8612 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  Para la gesti&oacute;n del sistema operativo queremos	llevar un inventar&iacute;o. &iquest;Cu&aacute;l de los siguientes recursos NO es necesario en el mismo?";
 choices[68]= new Array();
 choices[68][0] = "Listado de todos los equipos";
 choices[68][1] = "Listado de software usado en cada equipo.";
 choices[68][2] = "Esquema de la red.";
 choices[68][3] = "Todos son necesarios.";
 answers[68] = choices[68][3];
 units[68] = "52";
 comments[68] = "Id Pregunta: 8612. Examen TIC A2 2010 interna";


//  Id pregunta: 8786 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  &iquest;A cu&aacute;l de las siguientes arquitecturas paralelas pertenecen las arquitecturas Pipeline?";
 choices[69]= new Array();
 choices[69][0] = "SISD";
 choices[69][1] = "SIMD";
 choices[69][2] = "MISD";
 choices[69][3] = "MIMD";
 answers[69] = choices[69][2];
 units[69] = "45";
 comments[69] = "Id Pregunta: 8786. Examen UPM A2 2011";


//  Id pregunta: 8923 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  Cuando un antivirus utiliza t&eacute;cnicas heur&iacute;sticas significa que:";
 choices[70]= new Array();
 choices[70][0] = "monitoriza continuamente el sistema para detectar amenazas.";
 choices[70][1] = "puede eliminar troyanos y rootkits sin da&ntilde;ar el sistema.";
 choices[70][2] = "puede reconocer c&oacute;digos maliciosos aunque no se encuentren en su base de datos.";
 choices[70][3] = "interroga a otros equipos de confianza para obtener informaci&oacute;n sobre los ficheros";
 answers[70] = choices[70][2];
 units[70] = "63";
 comments[70] = "Id Pregunta: 8923. Operador Ayto. Madrid 2010";


//  Id pregunta: 8968 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  &iquest;Qu&eacute; patr&oacute;n de dise&ntilde;o pertenece a la clasificaci&oacute;n de Comportamiento?";
 choices[71]= new Array();
 choices[71][0] = "Singleton.";
 choices[71][1] = "Template Method.";
 choices[71][2] = "Session.";
 choices[71][3] = "Succesive Update.";
 answers[71] = choices[71][1];
 units[71] = "82,84";
 comments[71] = "Id Pregunta: 8968. ";


//  Id pregunta: 9102 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  &iquest;Cu&aacute;l de los siguientes es un tipo de huella digital?";
 choices[72]= new Array();
 choices[72][0] = "Huella sim&eacute;trica.";
 choices[72][1] = "Huella asim&eacute;trica.";
 choices[72][2] = "Huella an&oacute;nima.";
 choices[72][3] = "Todas las anteriores son verdaderas.";
 answers[72] = choices[72][3];
 units[72] = "37";
 comments[72] = "Id Pregunta: 9102. ";


//  Id pregunta: 9185 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l de los siguientes NO es un Proceso Principal de M&eacute;trica 3?";
 choices[73]= new Array();
 choices[73][0] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[73][1] = "Mantenimiento de Sistemas de Informaci&oacute;n";
 choices[73][2] = "Dise&ntilde;o de Sistemas de Informaci&oacute;n";
 choices[73][3] = "Todos son Procesos Principales";
 answers[73] = choices[73][2];
 units[73] = "86";
 comments[73] = "Id Pregunta: 9185. NULL";


//  Id pregunta: 9313 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  Se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[74]= new Array();
 choices[74][0] = "Los procedimientos se&ntilde;alan el marco de actuaci&oacute;n en los distintos campos de las TIC para resolver situaciones concretas";
 choices[74][1] = "Deben ser desarrollados por la unidad responsable de su implementaci&oacute;n";
 choices[74][2] = "Un ejemplo de procedimiento es la pol&iacute;tica de seguridad de la organizaci&oacute;n, que deber&aacute; ser conocido por todos los usuarios";
 choices[74][3] = "Los procedimientos deben estar documentados y mantenerse actualizados";
 answers[74] = choices[74][2];
 units[74] = "31";
 comments[74] = "Id Pregunta: 9313. ";


//  Id pregunta: 9424 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  Seg&uacute;n la ley 9/2014, para poder explotar redes y prestar servicios de comunicaciones electr&oacute;nicas a terceros";
 choices[75]= new Array();
 choices[75][0] = "Es imprescindible que la persona f&iacute;sica o jur&iacute;dica sea espa&ntilde;ola.";
 choices[75][1] = "La persona f&iacute;sica o jur&iacute;dica debe ser nacional de un Estado miembro de la Uni&oacute;n Europea.";
 choices[75][2] = "Puede ser de cualquier nacionalidad";
 choices[75][3] = "Puede ser de cualquier nacionalidad cuando as&iacute; est&eacute; previsto en acuerdos internacionales.";
 answers[75] = choices[75][3];
 units[75] = "110";
 comments[75] = "Id Pregunta: 9424. ";


//  Id pregunta: 9425 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  Si tuviese que fijar los l&iacute;mites de exposici&oacute;n en un nivel adecuado para la salud a la hora de instalar una antena, &iquest;Qu&eacute; normativa ser&iacute;a la de referencia?";
 choices[76]= new Array();
 choices[76][0] = "Real Decreto 1066/2001";
 choices[76][1] = "Ley 9/2014 General de Telecomunicaciones";
 choices[76][2] = "Ley 56/2007,de Medidas de Impulso de la Sociedad de la Informaci&oacute;n.";
 choices[76][3] = "Real Decreto 899/2009";
 answers[76] = choices[76][0];
 units[76] = "110";
 comments[76] = "Id Pregunta: 9425. ";


//  Id pregunta: 9446 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  Se&ntilde;ale la frase correcta acerca de los diferentes modelos de representaci&oacute;n del conocimiento:";
 choices[77]= new Array();
 choices[77][0] = "En los procesos de inferencia en redes sem&aacute;nticas el uso de la herencia permite efectuar emparejamientos sin necesidad de un homomorfismo total entre la red pregunta y la red respuesta.";
 choices[77][1] = "La utilizaci&oacute;n de marcos como modo de representaci&oacute;n de conocimiento permite asociar a un concepto un conjunto de atributos est&aacute;ticos, cuya actualizaci&oacute;n o modificaci&oacute;n no forma parte del modelo.";
 choices[77][2] = "El algoritmo de extracci&oacute;n de la ra&iacute;z cuadrada de un n&uacute;mero es un ejemplo de representaci&oacute;n declarativa de conocimiento.";
 choices[77][3] = "En una red neuronal entrenada los pesos de los enlaces entre neuronas dependen solamente del algoritmo de entrenamiento empleado.";
 answers[77] = choices[77][0];
 units[77] = "64";
 comments[77] = "Id Pregunta: 9446. Examen AGE TIC A1 2011";


//  Id pregunta: 9450 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  Seleccione la frase EQUIVOCADA acerca del &aacute;lgebra relacional.";
 choices[78]= new Array();
 choices[78][0] = "Los operadores b&aacute;sicos son uni&oacute;n, diferencia, producto cartesiano, proyecci&oacute;n y selecci&oacute;n.";
 choices[78][1] = "Los operadores uni&oacute;n y diferencia requieren que las relaciones operando est&eacute;n definidas sobre el mismo conjunto de atributos.";
 choices[78][2] = "El producto cartesiano de una relaci&oacute;n de orden&quot;n&quot; y &quot;x&quot; tuplas y otra relaci&oacute;n de orden &quot;m&quot; y &quot;z&quot; tuplas es una relaci&oacute;n de orden n*m y de (x+z) tuplas. (F, es de orden n+m y x*z tuplas)";
 choices[78][3] = "La operaci&oacute;n join sobre dos relaciones que presentan atributos comunes puede tener cero tuplas.";
 answers[78] = choices[78][2];
 units[78] = "58";
 comments[78] = "Id Pregunta: 9450. Examen AGE TIC A1 2011";


//  Id pregunta: 9495 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  Se&ntilde;ale la afimaci&oacute;n falsa con respecto a Javascript:";
 choices[79]= new Array();
 choices[79][0] = "Es un extensi&oacute;n de Java";
 choices[79][1] = "Es un extensi&oacute;n de HTML";
 choices[79][2] = "Es un lenguaje interpretado";
 choices[79][3] = "El int&eacute;rprete de JavaScript se basa en el est&aacute;ndar ECMAScript";
 answers[79] = choices[79][0];
 units[79] = "114";
 comments[79] = "Id Pregunta: 9495. NULL";


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


//  Id pregunta: 9707 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  Seg&uacute;n la metodolog&iacute;a M&eacute;trica V3 Estudio de Viabilidad del Sistema, indicar en qu&eacute; actividad se realiza la tarea &ldquo;Estudio de la Inversi&oacute;n&rdquo;.";
 choices[81]= new Array();
 choices[81][0] = "Estudio de Alternativas de Soluci&oacute;n.";
 choices[81][1] = "Definici&oacute;n de Requisitos del Sistema.";
 choices[81][2] = "Estudio de la Situaci&oacute;n Actual.";
 choices[81][3] = "Valoraci&oacute;n de las Alternativas.";
 answers[81] = choices[81][3];
 units[81] = "86";
 comments[81] = "Id Pregunta: 9707. Examen TIC-A1 2013";


//  Id pregunta: 9726 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  Atendiendo al est&aacute;ndar ISO 22301 en un Plan de Recuperaci&oacute;n ante Desastres, el Objetivo de Punto de Recuperaci&oacute;n (Recovery Point Objective RPO) es";
 choices[82]= new Array();
 choices[82][0] = "el nivel de servicios a proporcionar en modo alterno hasta que se recupere la situaci&oacute;n normal.";
 choices[82][1] = "el tiempo que la organizaci&oacute;n puede soportar desde que se produce el fallo hasta que se recuperan los servicios cr&iacute;ticos.";
 choices[82][2] = "el tiempo m&aacute;ximo tolerable de interrupci&oacute;n.";
 choices[82][3] = "la p&eacute;rdida m&aacute;xima de datos tolerable en caso de interrupci&oacute;n.";
 answers[82] = choices[82][3];
 units[82] = "32";
 comments[82] = "Id Pregunta: 9726. Examen TIC-A1 2013";


//  Id pregunta: 9741 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  &iquest;Qu&eacute; significa CDI en el contexto de Java EE 7?";
 choices[83]= new Array();
 choices[83][0] = "Contexts and Dependency Injection.";
 choices[83][1] = "Common Display Interface.";
 choices[83][2] = "Context-Dependent Interface.";
 choices[83][3] = "Case-Driven Implementation.";
 answers[83] = choices[83][0];
 units[83] = "60";
 comments[83] = "Id Pregunta: 9741. Examen TIC-A2 2013-Libre";


//  Id pregunta: 10062 AÃ±o de creación de pregunta: 2010-01-01
 questions[84]= "85)  &iquest;Cu&aacute;l de los siguientes NO es un mecanismo de control de la congesti&oacute;n en redes?";
 choices[84]= new Array();
 choices[84][0] = "Cubeta con ficha.";
 choices[84][1] = "Paquetes de estrangulamiento.";
 choices[84][2] = "Control de admisi&oacute;n.";
 choices[84][3] = "Vector distancia.";
 answers[84] = choices[84][3];
 units[84] = "102";
 comments[84] = "Id Pregunta: 10062. TIC A2, libre, examen 2013";


//  Id pregunta: 10095 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  En relaci&oacute;n con el producto ERS en METRICA v.3:";
 choices[85]= new Array();
 choices[85][0] = "La ERS la obtienen los analistas en ASI 9.";
 choices[85][1] = "La ERS la obtienen los analistas en ASI 2.";
 choices[85][2] = "La ERS la obtienen los analistas y usuarios expertos en ASI 9.";
 choices[85][3] = "La ERS la obtienen los analistas y usuarios expertos en ASI 2.";
 answers[85] = choices[85][0];
 units[85] = "78";
 comments[85] = "Id Pregunta: 10095. NULL";


//  Id pregunta: 10199 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  &iquest;Qu&eacute; grupo de trabajo del IEEE estandariza el mecanismo de seguridad WPA2 (Wireless Protective Access 2)?";
 choices[86]= new Array();
 choices[86][0] = "802.11f";
 choices[86][1] = "802.11h";
 choices[86][2] = "802.11i";
 choices[86][3] = "802.11r";
 answers[86] = choices[86][2];
 units[86] = "107";
 comments[86] = "Id Pregunta: 10199. NULL";


//  Id pregunta: 10236 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  El objeto PreparedStatement de la api java.sql se utiliza para:";
 choices[87]= new Array();
 choices[87][0] = "Ejecutar una sentencia SQL de forma repetida variando los par&aacute;metros de la misma";
 choices[87][1] = "Nos permite acceder a procedimientos almacenados en la base de datos";
 choices[87][2] = "Es &uacute;til a la hora de trabajar con el metadata de la base de datos";
 choices[87][3] = "ninguna de las anteriores";
 answers[87] = choices[87][0];
 units[87] = "60";
 comments[87] = "Id Pregunta: 10236. NULL";


//  Id pregunta: 10296 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  En redes de &aacute;rea local, &iquest;cu&aacute;l de los siguientes es un m&eacute;todo de acceso al medio compartido con escucha porcontienda?";
 choices[88]= new Array();
 choices[88][0] = "Paso de testigo en anillo.";
 choices[88][1] = "CSMA no persistente.";
 choices[88][2] = "ALOHA ranurado.";
 choices[88][3] = "Contenci&oacute;n.";
 answers[88] = choices[88][1];
 units[88] = "101";
 comments[88] = "Id Pregunta: 10296. TIC A2, libre, examen 2013";


//  Id pregunta: 10546 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  NO es uno de los 10 objetivos de la Estrategia 2011-2015 del Plan Avanza 2...";
 choices[89]= new Array();
 choices[89][0] = "Promover procesos innovadores TIC en las AAPP";
 choices[89][1] = "Incrementar el uso avanzado de servicios digitales por la ciudadan&iacute;a";
 choices[89][2] = "Promover el uso de las TIC en todos los niveles administrativos";
 choices[89][3] = "Extender el uso de soluciones TIC de negocio en la empresa";
 answers[89] = choices[89][2];
 units[89] = "30";
 comments[89] = "Id Pregunta: 10546. https://www.planavanza.es/informaciongeneral/estrategia2011/Paginas/Estrategia2011_2015.aspx";


//  Id pregunta: 10547 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  El primer paso a la hora de desarrollar un Plan de Continuidad de Negocio es:";
 choices[90]= new Array();
 choices[90][0] = "Clasificar los sistemas seg&uacute;n su importancia";
 choices[90][1] = "Establecer una estrategia de recuperaci&oacute;n de desastres";
 choices[90][2] = "determinar el tiempo cr&iacute;tico de recuperaci&oacute;n";
 choices[90][3] = "Realizar una clasificaci&oacute;n del riesgo";
 answers[90] = choices[90][0];
 units[90] = "31, 32, 33";
 comments[90] = "Id Pregunta: 10547. NULL";


//  Id pregunta: 10607 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Marque el lenguaje que est&aacute; basado en XML:";
 choices[91]= new Array();
 choices[91][0] = "XBRL";
 choices[91][1] = "SOAP";
 choices[91][2] = "UDDI";
 choices[91][3] = "XBGG";
 answers[91] = choices[91][0];
 units[91] = "69";
 comments[91] = "Id Pregunta: 10607. ";


//  Id pregunta: 11049 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l es una plataforma electr&oacute;nica de contrataci&oacute;n que permite la contrataci&oacute;n de todos los valores en circulaci&oacute;n del Tesoro P&uacute;blico?";
 choices[92]= new Array();
 choices[92][0] = "SEND";
 choices[92][1] = "FACTURAE";
 choices[92][2] = "COMPRAE";
 choices[92][3] = "TESORO-E";
 answers[92] = choices[92][0];
 units[92] = "70";
 comments[92] = "Id Pregunta: 11049. ";


//  Id pregunta: 11053 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Cu&aacute;l NO es una extensi&oacute;n v&aacute;lida para certificados?";
 choices[93]= new Array();
 choices[93][0] = ".PFX";
 choices[93][1] = ".DER";
 choices[93][2] = ".P7B";
 choices[93][3] = "Todos lo son";
 answers[93] = choices[93][3];
 units[93] = "73";
 comments[93] = "Id Pregunta: 11053. ";


//  Id pregunta: 11108 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas no se utiliza para el control de la legalidad del software?";
 choices[94]= new Array();
 choices[94][0] = "Watermarking";
 choices[94][1] = "Huella digital";
 choices[94][2] = "Kerberos";
 choices[94][3] = "Windows Media Right Manager System";
 answers[94] = choices[94][2];
 units[94] = "37";
 comments[94] = "Id Pregunta: 11108. ";


//  Id pregunta: 11300 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  En relaci&oacute;n con un Prestador de Servicios de Certificaci&oacute;n (PSC) es cierto que";
 choices[95]= new Array();
 choices[95][0] = "Es una persona jur&iacute;dica que expide certificados";
 choices[95][1] = "Es una persona f&iacute;sica o jur&iacute;dica que expide certificados";
 choices[95][2] = "Es una persona f&iacute;sica o jur&iacute;dica que expide certificados u otros servicios relacionados con la firma electr&oacute;nica";
 choices[95][3] = "Es una persona jur&iacute;dica que expide certificados u otros servicios relacionados con la firma electr&oacute;nica";
 answers[95] = choices[95][2];
 units[95] = "74";
 comments[95] = "Id Pregunta: 11300. ";


//  Id pregunta: 11314 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  En relaci&oacute;n con el servicio de directorio X.500, se&ntilde;alar la falsa.";
 choices[96]= new Array();
 choices[96][0] = "Cada entrada del Directorio, tiene un identificador &uacute;nico que el RDN.";
 choices[96][1] = "La parte com&uacute;n de todas las entradas u objetos, se llama Suffix.";
 choices[96][2] = "El conjunto de objetos, constituyen un DMD o dominio de gesti&oacute;n.";
 choices[96][3] = "X.500 no define nada sobre la interfaz de usuario.";
 answers[96] = choices[96][0];
 units[96] = "73";
 comments[96] = "Id Pregunta: 11314. El identificador &uacute;nico de cada entrada del directorio es el DN, que es como la direcci&oacute;n absoluta de un fichero.";


//  Id pregunta: 11384 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes afirmaciones respecto a funciones es correcta?: 1. Pueden incluir herramientas; 2. Son grupos que utilizan recursos para llevar a cabo una o m&aacute;s actividades; 3. Una persona o grupo puede desarrollar m&uacute;ltiples funciones; 4. Son m&aacute;s caras de implantar comparado con los procesos";
 choices[97]= new Array();
 choices[97][0] = "Solo 1, 2 y 3";
 choices[97][1] = "Solo 1, 2 y 4";
 choices[97][2] = "Todas las anteriores";
 choices[97][3] = "Ninguna de las anteriores";
 answers[97] = choices[97][0];
 units[97] = "98";
 comments[97] = "Id Pregunta: 11384. ";


//  Id pregunta: 11490 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Cada cu&aacute;nto tiempo debe de revisarse el cat&aacute;logo de est&aacute;ndares?";
 choices[98]= new Array();
 choices[98][0] = "2 veces al a&ntilde;o";
 choices[98][1] = "Cada a&ntilde;o";
 choices[98][2] = "Cada 2 a&ntilde;os";
 choices[98][3] = "Cada 3 a&ntilde;os";
 answers[98] = choices[98][1];
 units[98] = "43";
 comments[98] = "Id Pregunta: 11490. NULL";


//  Id pregunta: 11610 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  BPEL est&aacute; estandarizado por:";
 choices[99]= new Array();
 choices[99][0] = "BMPI";
 choices[99][1] = "OASIS";
 choices[99][2] = "WfMC";
 choices[99][3] = "W3C";
 answers[99] = choices[99][1];
 units[99] = "51";
 comments[99] = "Id Pregunta: 11610. ";


