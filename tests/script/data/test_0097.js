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

//  Id pregunta: 97 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  A un sistema de informaci&oacute;n definido como &quot; Sistemas orientados a la ayuda en la toma de decisiones espor&aacute;dicas u ocasionales &quot; corresponde al tipo de sistema de informaci&oacute;n:";
 choices[0]= new Array();
 choices[0][0] = "Sistemas orientados a la gesti&oacute;n de empresa o Management Information Systems (MIS)";
 choices[0][1] = "Sistemas orientados al proceso de transacciones o Transaction Processing Systems";
 choices[0][2] = "Sistemas de apoyo a la toma de decisiones o Decision Support Systems (DSS)";
 choices[0][3] = "Sistemas de apoyo a la direcci&oacute;n o Executive Support Systems (ESS)";
 answers[0] = choices[0][2];
 units[0] = "21";
 comments[0] = "Id Pregunta: 97. NULL";


//  Id pregunta: 180 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  En el contexto de la ordenaci&oacute;n de alternativas en la teor&iacute;a de la DMD, el m&eacute;todo Promethee:";
 choices[1]= new Array();
 choices[1][0] = "S&oacute;lo tiene en cuenta los criterios de mayor peso";
 choices[1][1] = "Se basa en las comparaciones binarias de alternativas";
 choices[1][2] = "Utiliza el c&aacute;lculo de relaciones de superaci&oacute;n entre alternativas";
 choices[1][3] = "Es la generalizaci&oacute;n del m&eacute;todo de la ponderaci&oacute;n lineal";
 answers[1] = choices[1][2];
 units[1] = "34";
 comments[1] = "Id Pregunta: 180. ";


//  Id pregunta: 187 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  Cu&aacute;l de las siguientes no es una funci&oacute;n del auditor de Sistemas de Informaci&oacute;n";
 choices[2]= new Array();
 choices[2][0] = "An&aacute;lisis de requisitos y especificaci&oacute;n funcional";
 choices[2][1] = "Evaluaci&oacute;n de los planes de implantaci&oacute;n de sistemas y mejoras de los existentes.";
 choices[2][2] = "Evaluaci&oacute;n de riesgos";
 choices[2][3] = "Evaluaci&oacute;n de controles en los sistemas de informaci&oacute;n";
 answers[2] = choices[2][0];
 units[2] = "31,32,33";
 comments[2] = "Id Pregunta: 187. Similar a examen TIC SS A 2003";


//  Id pregunta: 207 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  En esencia, la partici&oacute;n descompone un problema en sus partes constituyentes:";
 choices[3]= new Array();
 choices[3][0] = "Incrementando los detalles, movi&eacute;ndonos verticalmente en la jerarqu&iacute;a";
 choices[3][1] = "Descomponiendo funcionalmente el problema, movi&eacute;ndonos horizontalmente en la jerarqu&iacute;a";
 choices[3][2] = "Las dos primeras respuestas son ciertas";
 choices[3][3] = "Las dos primeras respuestas son falsas";
 answers[3] = choices[3][2];
 units[3] = "28";
 comments[3] = "Id Pregunta: 207. ";


//  Id pregunta: 281 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  La auditor&iacute;a inform&aacute;tica es:";
 choices[4]= new Array();
 choices[4][0] = "El estudio de los programas para detectar bucles err&oacute;neos";
 choices[4][1] = "La revisi&oacute;n de las operaciones realizadas por los sistemas inform&aacute;ticos de una organizaci&oacute;n para determinar su correcto funcionamiento ";
 choices[4][2] = "La auditor&iacute;a completa de los accesos indebidos a los sistemas de informaci&oacute;n e identifcaci&oacute;n de los causantes";
 choices[4][3] = "La realizaci&oacute;n de los planes de sistemas de una organizaci&oacute;n";
 answers[4] = choices[4][1];
 units[4] = "31";
 comments[4] = "Id Pregunta: 281. ";


//  Id pregunta: 302 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  La estructura organizacional  funcional de un &aacute;rea de desarrollo:";
 choices[5]= new Array();
 choices[5][0] = "Se caracteriza por un mejor aprovechamiento de los recursos humanos, al no estar adjudicados a un &uacute;nico proyecto";
 choices[5][1] = "Se caracteriza por que no es necesaria una coordinaci&oacute;n excesiva a alto nivel ya que cada departamento es independiente";
 choices[5][2] = "Es equivalente a una organizaci&oacute;n matricial";
 choices[5][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[5] = choices[5][0];
 units[5] = "26";
 comments[5] = "Id Pregunta: 302. ";


//  Id pregunta: 440 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Seg&uacute;n la Ley Org&aacute;nica 15/99 de Protecci&oacute;n de Datos de car&aacute;cter personal, los datos que hagan referencia al origen racial, a la salud y a la vida sexual:";
 choices[6]= new Array();
 choices[6][0] = "S&oacute;lo podr&aacute;n ser recabados, tratados y cedidos cuando as&iacute; lo disponga una Ley";
 choices[6][1] = "S&oacute;lo podr&aacute;n ser recabados, tratados y cedidos cuando el afectado consienta expresamente";
 choices[6][2] = "S&oacute;lo podr&aacute;n ser recabados, tratados y cedidos cuando as&iacute; lo disponga una Ley o el afectado consienta expresamente";
 choices[6][3] = "No podr&aacute;n ser objeto de tratamiento. Se except&uacute;an los ficheros mantenidos por los partidos pol&iacute;ticos, sindicatos o iglesias.";
 answers[6] = choices[6][2];
 units[6] = "29";
 comments[6] = "Id Pregunta: 440. ";


//  Id pregunta: 548 AÃ±o de creación de pregunta: 2004-01-01
 questions[7]= "8)  La LOPD es FALSO que NO es de aplicaci&oacute;n a:";
 choices[7]= new Array();
 choices[7][0] = "Ficheros sometidos a la normativa sobre protecci&oacute;n de materias clasificadas";
 choices[7][1] = "Ficheros establecidos para la investigaci&oacute;n del terrorismo y de formas graves de delincuencia organizada";
 choices[7][2] = "Los ficheros regulados por la legislaci&oacute;n de r&eacute;gimen electoral";
 choices[7][3] = "Los ficheros mantenidos por personas f&iacute;sicas en el ejercicio de actividades exclusivamente personales o dom&eacute;sticas.";
 answers[7] = choices[7][2];
 units[7] = "29";
 comments[7] = "Id Pregunta: 548. ";


//  Id pregunta: 685 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Qu&eacute; es PROFIT?";
 choices[8]= new Array();
 choices[8][0] = "Un estamento independiente que se encarga de velar por el desarrollo de las tecnolog&iacute;as de la informaci&oacute;n en los pa&iacute;ses en v&iacute;as de desarrollo.";
 choices[8][1] = "El Programa de Fomento para la Investigaci&oacute;n T&eacute;cnica, promovido para conceder ayudas a los proyectos de I+D.";
 choices[8][2] = "El programa asociado al programa IDA y encargado del intercambio de las estad&iacute;sticas de tr&aacute;fico en los distintos pa&iacute;ses de la Comunidad Europea.";
 choices[8][3] = "Nada de lo anterior es cierto.";
 answers[8] = choices[8][1];
 units[8] = "103";
 comments[8] = "Id Pregunta: 685. ";


//  Id pregunta: 686 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  El R.D 209/2003:";
 choices[9]= new Array();
 choices[9][0] = "Sustituye completamente al R.D. 263/1996";
 choices[9][1] = "Ampl&iacute;a al R.D. 263/1996";
 choices[9][2] = "Complementa, pero no se superpone, al R.D. 263/1996";
 choices[9][3] = "Es completamente independiente del R.D. 263/1996, no tienen nada que ver";
 answers[9] = choices[9][1];
 units[9] = "30";
 comments[9] = "Id Pregunta: 686. ";


//  Id pregunta: 796 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Qu&eacute; tecnolog&iacute;a para la creaci&oacute;n de p&aacute;ginas web din&aacute;micas puede correr sobre un servidor Windows 2008?:";
 choices[10]= new Array();
 choices[10][0] = "ASP.NET";
 choices[10][1] = "PHP";
 choices[10][2] = "Java EE (Servlets)";
 choices[10][3] = "Todas son v&aacute;lidas";
 answers[10] = choices[10][3];
 units[10] = "59";
 comments[10] = "Id Pregunta: 796. ";


//  Id pregunta: 856 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Cu&aacute;l de las siguientes respuestas es verdadera respecto a X.500?:";
 choices[11]= new Array();
 choices[11][0] = "X.500 es un protocolo que especifica un modelo para conectar servicios de directorio locales para formar un directorio global distribuido, de forma que el usuario percibe el directorio completo como accesible de su servidor local";
 choices[11][1] = "X.500 fue inicialmente un sistema propietario de Novell, pero en la actualidad ha sido cedido para dominio p&uacute;blico por un procedimiento estrat&eacute;gico de la compa&ntilde;&iacute;a para acabar con sistemas incompatibles desarrollados por empresas rivales";
 choices[11][2] = "X.500 ha sido desarrollado por ANSI para su implementaci&oacute;n en el ej&eacute;rcito americano por petici&oacute;n del DoD, pero en realidad no ha sido utilizado por &eacute;ste por falta de seguridad, y en la actualidad, al ser un protocolo publicado ha sido adoptado por diverso";
 choices[11][3] = "X.500 es el protocolo de directorio m&aacute;s extendido, por lo que puede considerarse un est&aacute;ndar de facto, pero aunque se estima pr&oacute;xima su adopci&oacute;n por ISO para incorporarlo a la definici&oacute;n est&aacute;ndar de OSI, a&uacute;n no se ha dado este paso";
 answers[11] = choices[11][0];
 units[11] = "73";
 comments[11] = "Id Pregunta: 856. ";


//  Id pregunta: 1187 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Indicar la respuesta incorrecta sobre los sistemas expertos en inteligencia artificial:";
 choices[12]= new Array();
 choices[12][0] = "La caracter&iacute;stica diferencial de los sistemas expertos es la ubicaci&oacute;n externa del conocimiento necesario para resolver un problema, que aparece como estructura procesable separada de los procedimientos que la manipulan";
 choices[12][1] = "Un entorno es b&aacute;sicamente un lenguaje m&aacute;s un conjunto de procedimientos hechos como ayuda a la construcci&oacute;n de sistemas expertos";
 choices[12][2] = "Una shell es b&aacute;sicamente un sistema experto con la base de conocimiento vac&iacute;a; es decir, la arquitectura del sistema final est&aacute; preestablecida";
 choices[12][3] = "Los lenguajes utilizados en la construcci&oacute;n de sistemas expertos son principalmente lenguajes orientados a la inteligencia artificial como el LISP o el PROLOG y lenguajes convencionales de prop&oacute;sito general tales como el C, FORTRAN, PASCAL, etc";
 answers[12] = choices[12][3];
 units[12] = "64";
 comments[12] = "Id Pregunta: 1187. ";


//  Id pregunta: 1201 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  JDeveloper es:";
 choices[13]= new Array();
 choices[13][0] = "Un entorno de desarrollo integrado (IDE)";
 choices[13][1] = "Una base de datos";
 choices[13][2] = "Un gestor de contenidos";
 choices[13][3] = "Un gestor de informes";
 answers[13] = choices[13][0];
 units[13] = "60";
 comments[13] = "Id Pregunta: 1201. NULL";


//  Id pregunta: 1210 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  La caracter&iacute;stica principal de la arquitectura 'pipeline' es:";
 choices[14]= new Array();
 choices[14][0] = "La existencia de varios procesadores especializados en tareas concretas que pueden realizarse en paralelo";
 choices[14][1] = "La divisi&oacute;n en fases de la ejecuci&oacute;n de una instrucci&oacute;n";
 choices[14][2] = "La redundancia de algunos dispositivos";
 choices[14][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[14] = choices[14][1];
 units[14] = "46";
 comments[14] = "Id Pregunta: 1210. ";


//  Id pregunta: 1305 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  Para Unix un archivo de compone de:";
 choices[15]= new Array();
 choices[15][0] = "Un conjunto de i-nodos m&aacute;s un conjunto de bloques de datos";
 choices[15][1] = "Una secuencia de bytes";
 choices[15][2] = "Un conjunto de bloques de datos m&aacute;s la estructura de punteros que determina d&oacute;nde se encuentran &eacute;stos";
 choices[15][3] = "Un bloque de datos m&aacute;s una cabecera de direccionamiento";
 answers[15] = choices[15][1];
 units[15] = "53";
 comments[15] = "Id Pregunta: 1305. ";


//  Id pregunta: 1390 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  Un pseudoc&oacute;digo:";
 choices[16]= new Array();
 choices[16][0] = "Tiene reglas fijas para la descripci&oacute;n de algoritmos.";
 choices[16][1] = "Es f&aacute;cil de escribir y traducir a un lenguaje de programaci&oacute;n.";
 choices[16][2] = "Utiliza como lenguaje el PASCAL.";
 choices[16][3] = "Sigue unas normas sint&aacute;cticas muy estrictas.";
 answers[16] = choices[16][1];
 units[16] = "";
 comments[16] = "Id Pregunta: 1390. ";


//  Id pregunta: 1463 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  ISA, PCI, AGP, IDE, PCMCIA&hellip;, son:";
 choices[17]= new Array();
 choices[17][0] = "buses internos";
 choices[17][1] = "buses externos";
 choices[17][2] = "organismos de estandarizaci&oacute;n  ";
 choices[17][3] = "est&aacute;ndares de almacenamiento";
 answers[17] = choices[17][0];
 units[17] = "47";
 comments[17] = "Id Pregunta: 1463. ";


//  Id pregunta: 1482 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Un monitor cuya resoluci&oacute;n es de 640 x 480, tiene:";
 choices[18]= new Array();
 choices[18][0] = "480 l&iacute;neas de exploraci&oacute;n (resoluci&oacute;n vertical)";
 choices[18][1] = "640 lineas de exploraci&oacute;n (resoluci&oacute;n vertical)";
 choices[18][2] = "480 pixeles (resoluci&oacute;n horizontal)";
 choices[18][3] = "Ninguna de las anteriores es cierta";
 answers[18] = choices[18][0];
 units[18] = "47";
 comments[18] = "Id Pregunta: 1482. ";


//  Id pregunta: 1657 AÃ±o de creación de pregunta: 2004-01-01
 questions[19]= "20)  Acceso directo a memoria (DMA) es:";
 choices[19]= new Array();
 choices[19][0] = "Mecanismo por el que se transfieren datos entre un sistema de entrada/salida y el sistema de memoria sin la intervenci&oacute;n de la CPU.";
 choices[19][1] = "Un modo de funcionamiento opcional del hardware que permite acelerar el acceso a discos duros.";
 choices[19][2] = "Un modo de funcionamiento opcional del software que permite acelerar el acceso a discos duros.";
 choices[19][3] = "Un modo de acceso a dispositivos de entrada/salida en el que cada uno de ellos esta &quot;mapeado&quot; a una direcci&oacute;n de memoria.";
 answers[19] = choices[19][0];
 units[19] = "47";
 comments[19] = "Id Pregunta: 1657. ";


//  Id pregunta: 1813 AÃ±o de creación de pregunta: 2006-01-01
 questions[20]= "21)  Los modelos digitales del terreno (MDT) son conjuntos de datos de gran utilidad, y t&iacute;picamente representados mediante un modelo de datos:";
 choices[20]= new Array();
 choices[20][0] = "Vectorial.";
 choices[20][1] = "R&aacute;ster.";
 choices[20][2] = "Alfanum&eacute;rico.";
 choices[20][3] = "De cotas u elevaciones.";
 answers[20] = choices[20][1];
 units[20] = "67";
 comments[20] = "Id Pregunta: 1813. NULL";


//  Id pregunta: 1823 AÃ±o de creación de pregunta: 2006-01-01
 questions[21]= "22)  Las especializaciones de los sistemas de Datawarehouse orientadas a departamentos o &aacute;reas de negocio concretas se denominan:";
 choices[21]= new Array();
 choices[21][0] = "Data Marts.";
 choices[21][1] = "Data Cleansing.";
 choices[21][2] = "Data Mining.";
 choices[21][3] = "Metadata.";
 answers[21] = choices[21][0];
 units[21] = "68";
 comments[21] = "Id Pregunta: 1823. ";


//  Id pregunta: 1859 AÃ±o de creación de pregunta: 2006-01-01
 questions[22]= "23)  En relaci&oacute;n al protocolo OCSP (Online Certificate Status Protocol): ";
 choices[22]= new Array();
 choices[22][0] = "Se utiliza para conocer el estado de revocaci&oacute;n de un certificado X.509";
 choices[22][1] = "Los mensajes enviados v&iacute;a OCSP se codifican en ASN.1";
 choices[22][2] = "Se define en el RFC 2560";
 choices[22][3] = "Todas las anteriores respuestas son ciertas";
 answers[22] = choices[22][3];
 units[22] = "74";
 comments[22] = "Id Pregunta: 1859. NULL";


//  Id pregunta: 1986 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  &iquest;Cu&aacute;l de los siguientes es un principio de especificaci&oacute;n del software de acuerdo con R.S. Pressman?:";
 choices[23]= new Array();
 choices[23][0] = "Separar funcionalidad de implementaci&oacute;n";
 choices[23][1] = "La especificaci&oacute;n del sistema debe ser tolerante a la incompletitud y ampliable";
 choices[23][2] = "Una especificaci&oacute;n debe ser operativa";
 choices[23][3] = "Todos los anteriores son principios de especificaci&oacute;n del software";
 answers[23] = choices[23][3];
 units[23] = "78";
 comments[23] = "Id Pregunta: 1986. ";


//  Id pregunta: 2019 AÃ±o de creación de pregunta: 2004-01-01
 questions[24]= "25)  En el dise&ntilde;o estructurado, se&ntilde;ale la definici&oacute;n correcta de FAN-OUT.";
 choices[24]= new Array();
 choices[24][0] = "Es el n&uacute;mero de superordinados inmediatos de un m&oacute;dulo.";
 choices[24][1] = "Es el n&uacute;mero de subordinados inmediatos de un m&oacute;dulo.";
 choices[24][2] = "Es el n&uacute;mero de m&oacute;dulos que hay que compilar antes del m&oacute;dulo.";
 choices[24][3] = "Es el n&uacute;mero de par&aacute;metros de salida que tiene un m&oacute;dulo.";
 answers[24] = choices[24][1];
 units[24] = "84";
 comments[24] = "Id Pregunta: 2019. Examen TIC MAP B 2004";


//  Id pregunta: 2121 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  &iquest;Cu&aacute;l de las siguientes actividades se engloban, en M&eacute;trica V3, en el proceso &lsquo;Dise&ntilde;o del Sistema de Informaci&oacute;n&rsquo;?:";
 choices[25]= new Array();
 choices[25][0] = "Verificaci&oacute;n y aceptaci&oacute;n de la arquitectura del sistema";
 choices[25][1] = "Especificaci&oacute;n t&eacute;cnica del plan de pruebas";
 choices[25][2] = "Las respuestas 'a' y 'b' son correctas";
 choices[25][3] = "Todas son falsas";
 answers[25] = choices[25][2];
 units[25] = "86";
 comments[25] = "Id Pregunta: 2121. NULL";


//  Id pregunta: 2132 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  &iquest;Cu&aacute;l de las siguientes afirmaciones es verdadera respecto a las m&eacute;tricas de calidad del software?:";
 choices[26]= new Array();
 choices[26][0] = "COCOMO es un modelo de estimaci&oacute;n del software que se basa en el n&uacute;mero de instrucciones de c&oacute;digo fuente";
 choices[26][1] = "La m&eacute;trica de complejidad del software conocida como de los puntos de funci&oacute;n se obtiene utilizando una relaci&oacute;n emp&iacute;rica basada en medidas del dominio de informaci&oacute;n y en valoraciones subjetivas";
 choices[26][2] = "La t&eacute;cnica de Halstead sirve para medir la complejidad de un desarrollo bas&aacute;ndose en su 'longitud', su 'vocabulario' y su 'volumen', que se obtienen mediante ciertas ecuaciones que utilizan el n&uacute;mero de operadores y operandos del desarrollo";
 choices[26][3] = "Son ciertas todas las anteriores";
 answers[26] = choices[26][3];
 units[26] = "88";
 comments[26] = "Id Pregunta: 2132. ";


//  Id pregunta: 2386 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  Indicar cu&aacute;l no es un factor de calidad, seg&uacute;n McCall, desde un punto de vista de revisi&oacute;n:";
 choices[27]= new Array();
 choices[27][0] = "Correcci&oacute;n";
 choices[27][1] = "Mantenibilidad";
 choices[27][2] = "Verificabilidad";
 choices[27][3] = "Flexibilidad";
 answers[27] = choices[27][0];
 units[27] = "88";
 comments[27] = "Id Pregunta: 2386. ";


//  Id pregunta: 2544 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  Los m&eacute;todos de recuperaci&oacute;n de informaci&oacute;n se basan fundamentalmente en:";
 choices[28]= new Array();
 choices[28][0] = "Manipulaci&oacute;n de vol&uacute;menes de informaci&oacute;n muy peque&ntilde;os";
 choices[28][1] = "Identificaci&oacute;n de claves (palabras, fragmentos o frases) y su b&uacute;squeda en la base de informaci&oacute;n o ficheros auxiliares";
 choices[28][2] = "Tratamiento de informaci&oacute;n mediante sistemas hipertexto";
 choices[28][3] = "Grabaci&oacute;n y recuperaci&oacute;n de im&aacute;genes";
 answers[28] = choices[28][1];
 units[28] = "96";
 comments[28] = "Id Pregunta: 2544. NULL";


//  Id pregunta: 2602 AÃ±o de creación de pregunta: 2003-01-01
 questions[29]= "30)  &iquest; Cu&aacute;l de las siguientes actividades no puede realizarse en paralelo en las fase de ASI de Metrica v3?";
 choices[29]= new Array();
 choices[29][0] = "Identificaci&oacute;n de subsistemas de an&aacute;lisis";
 choices[29][1] = "An&aacute;lisis de consistencia";
 choices[29][2] = "Definici&oacute;n de interfaces de usuario";
 choices[29][3] = "An&aacute;lisis de casos de uso";
 answers[29] = choices[29][1];
 units[29] = "86";
 comments[29] = "Id Pregunta: 2602. NULL";


//  Id pregunta: 2784 AÃ±o de creación de pregunta: 2006-01-01
 questions[30]= "31)  En M&Eacute;TRICA v.3 la seguridad del sistema de informaci&oacute;n se contempla en:";
 choices[30]= new Array();
 choices[30][0] = "La interface de Seguridad y en el An&aacute;lisis del Sistema de Informaci&oacute;n.";
 choices[30][1] = "S&oacute;lo en la interface de Seguridad.";
 choices[30][2] = "En la Planificaci&oacute;n de Sistemas de Informaci&oacute;n y en el Estudio de Viabilidad del Sistema.";
 choices[30][3] = "No est&aacute; contemplada. A este respecto, M&eacute;trica v.3 remite a la metodolog&iacute;a MAGERIT.";
 answers[30] = choices[30][0];
 units[30] = "86";
 comments[30] = "Id Pregunta: 2784. ";


//  Id pregunta: 2852 AÃ±o de creación de pregunta: 2006-01-01
 questions[31]= "32)  Indicar la falsa";
 choices[31]= new Array();
 choices[31][0] = "En la comparaci&oacute;n matricial se pueden utilizar filtros digitales que aclaran la informaci&oacute;n a almacenar, para optimizar el casamiento";
 choices[31][1] = "En la comparaci&oacute;n matricial escanea la forma de los caracteres y los compara con tablas de formas";
 choices[31][2] = "En el reconocimiento por patrones escanea la forma de los caracteres y los compara con tablas de formas";
 choices[31][3] = "El reconocimiento por patrones ofrece m&aacute;s flexibilidad que la comparaci&oacute;n matricial";
 answers[31] = choices[31][1];
 units[31] = "94";
 comments[31] = "Id Pregunta: 2852. ";


//  Id pregunta: 3048 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  &iquest;Qu&eacute; es el spyware?:";
 choices[32]= new Array();
 choices[32][0] = "SW de alto secreto usado por los servicios de inteligencia de cada pa&iacute;s";
 choices[32][1] = "SW que diversas compa&ntilde;&iacute;as introducen en tu ordenador cuando te descargas algo de internet, para ver tus programas y tus usos y sacar estudios de mercado";
 choices[32][2] = "Es otro nombre de las conocidas cookies";
 choices[32][3] = "La denominaci&oacute;n es err&oacute;nea, no se refiere a nada";
 answers[32] = choices[32][1];
 units[32] = "111";
 comments[32] = "Id Pregunta: 3048. NULL";


//  Id pregunta: 3064 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  En los dispositivos de red se utiliza el 'buffering' para:";
 choices[33]= new Array();
 choices[33][0] = "Almacenar temporalmente los datos recibidos hasta que puedan ser procesados";
 choices[33][1] = "Informar al origen del tr&aacute;fico de que deber&iacute;a usarse control de flujo";
 choices[33][2] = "Emitir el ACK de las tranmisiones que se han recibido";
 choices[33][3] = "Impedir que los dispositivos fuente (emisores) transmitan datos a menos que se les pida expl&iacute;citamente";
 answers[33] = choices[33][0];
 units[33] = "100";
 comments[33] = "Id Pregunta: 3064. NULL";


//  Id pregunta: 3138 AÃ±o de creación de pregunta: 2002-01-01
 questions[34]= "35)  &iquest;Cu&aacute;l de las siguentes es una de las ventajas de utilizar fibra &oacute;ptica, frente a la utilizaci&oacute;n de cable en una red de &aacute;rea local?:";
 choices[34]= new Array();
 choices[34][0] = "Dispositivos y adaptadores m&aacute;s baratos";
 choices[34][1] = "Menor n&uacute;mero de bytes necesarios para obtener el sincronismo";
 choices[34][2] = "Mayor confidencialidad de la informaci&oacute;n que circula";
 choices[34][3] = "Menor ancho de banda";
 answers[34] = choices[34][2];
 units[34] = "97";
 comments[34] = "Id Pregunta: 3138. NULL";


//  Id pregunta: 3243 AÃ±o de creación de pregunta: 2002-01-01
 questions[35]= "36)  &iquest;Cu&aacute;l es la funci&oacute;n que tiene la capa de presentaci&oacute;n (Presentation Layer) en la arquitectura de protocolos ISO de OSI?:";
 choices[35]= new Array();
 choices[35][0] = "Presentar la informaci&oacute;n al usuario final";
 choices[35][1] = "Ocuparse de las distintas representaciones de la informaci&oacute;n en distintas m&aacute;quinas, de tal forma que el significado sea el mismo aunque las representaciones sean diferentes";
 choices[35][2] = "Presentar la informaci&oacute;n a la red estableciendo puntos de sincronismo intermedios para evitar p&eacute;rdidas de informaci&oacute;n en caso de caidas de la red";
 choices[35][3] = "Todas las anteriores son funciones de la capa de sesi&oacute;n";
 answers[35] = choices[35][1];
 units[35] = "100";
 comments[35] = "Id Pregunta: 3243. NULL";


//  Id pregunta: 3323 AÃ±o de creación de pregunta: 2002-01-01
 questions[36]= "37)  10BaseT es:";
 choices[36]= new Array();
 choices[36][0] = "Un tipo de modem primario";
 choices[36][1] = "Una variante del est&aacute;ndar IEEE 802.3 para trabajar sobre pares trenzados";
 choices[36][2] = "Un m&eacute;todo de acceso en contenci&oacute;n";
 choices[36][3] = "Un m&eacute;todo de acceso por paso de testigo";
 answers[36] = choices[36][1];
 units[36] = "97";
 comments[36] = "Id Pregunta: 3323. NULL";


//  Id pregunta: 3404 AÃ±o de creación de pregunta: 2002-01-01
 questions[37]= "38)  Entre los modos de conexi&oacute;n de la Red Digital de Servicios Integrados se define el Acceso B&aacute;sico. Indique cu&aacute;l de las siguientes opciones lo define, o si son falsas todas las definiciones:";
 choices[37]= new Array();
 choices[37][0] = "Un Acceso B&aacute;sico se define como el constituido por dos canales B para conmutaci&oacute;n de circuitos y un canal D para se&ntilde;alizaci&oacute;n y conmutaci&oacute;n de paquetes";
 choices[37][1] = "Un Acceso B&aacute;sico se define como el constituido por treinta canales B para conmutaci&oacute;n de circuitos y un canal D para se&ntilde;alizaci&oacute;n y conmutaci&oacute;n de paquetes";
 choices[37][2] = "Un Acceso B&aacute;sico se define como el constituido por doce canales B para conmutaci&oacute;n de circuitos y un canal D para se&ntilde;alizaci&oacute;n y conmutaci&oacute;n de paquetes";
 choices[37][3] = "Ninguna de las anteriores";
 answers[37] = choices[37][0];
 units[37] = "103";
 comments[37] = "Id Pregunta: 3404. ";


//  Id pregunta: 3492 AÃ±o de creación de pregunta: 2005-01-01
 questions[38]= "39)  En el &aacute;mbito de la seguridad de redes, cu&aacute;l de las siguientes afirmaciones es falsa:";
 choices[38]= new Array();
 choices[38][0] = "Los ataques de &quot;buffer overflow&quot; son posibles debido a fallos de programaci&oacute;n";
 choices[38][1] = "Los ataques mediante &quot;spoofing&quot; se basan en la generaci&oacute;n de paquetes de informaci&oacute;n falsa";
 choices[38][2] = "NIS, NFS, DNS o SMTP son protocolos de aplicaci&oacute;n inseguros";
 choices[38][3] = "Los ataques mediante &quot;secuestro de sesi&oacute;n&quot; no pueden prevenirse en la labor de administraci&oacute;n";
 answers[38] = choices[38][3];
 units[38] = "111";
 comments[38] = "Id Pregunta: 3492. NULL";


//  Id pregunta: 3525 AÃ±o de creación de pregunta: 2002-01-01
 questions[39]= "40)  En Internet, los distintos tipos de servicios utilizan protocolos espec&iacute;ficos. De las siguientes parejas servicios-protocolos, una es incorrecta. Se&ntilde;&aacute;lela:";
 choices[39]= new Array();
 choices[39][0] = "P&aacute;ginas Web-HTTP";
 choices[39][1] = "Correo electr&oacute;nico-SNMP";
 choices[39][2] = "Grupos de noticias-NNTP";
 choices[39][3] = "Transferencia de ficheros-FTP";
 answers[39] = choices[39][1];
 units[39] = "112";
 comments[39] = "Id Pregunta: 3525. ";


//  Id pregunta: 3573 AÃ±o de creación de pregunta: 2002-01-01
 questions[40]= "41)  En una conexi&oacute;n V.90:";
 choices[40]= new Array();
 choices[40][0] = "Los m&oacute;dems siempre han de sincronizarse a 56k.";
 choices[40][1] = "Los m&oacute;dems no establecen protocolo de negociaci&oacute;n de par&aacute;metros previo a la conexi&oacute;n.";
 choices[40][2] = "La negociaci&oacute;n se hace v&iacute;a protocolos TCP.";
 choices[40][3] = "La velocidad de conexi&oacute;n se negocia entre los dos m&oacute;dem de acuerdo a las caracter&iacute;sticas de la l&iacute;nea.";
 answers[40] = choices[40][3];
 units[40] = "100, 103";
 comments[40] = "Id Pregunta: 3573. modems";


//  Id pregunta: 3593 AÃ±o de creación de pregunta: 2002-01-01
 questions[41]= "42)  La conocida RFC 793 se corresponde con:";
 choices[41]= new Array();
 choices[41][0] = "el protocolo TCP";
 choices[41][1] = "la arquitectura TCP/IP";
 choices[41][2] = "el protocolo IP";
 choices[41][3] = "el protocolo SMTP";
 answers[41] = choices[41][0];
 units[41] = "100";
 comments[41] = "Id Pregunta: 3593. NULL";


//  Id pregunta: 3642 AÃ±o de creación de pregunta: 2002-01-01
 questions[42]= "43)  La sintaxis de transferencia en ASN.1:";
 choices[42]= new Array();
 choices[42][0] = "Est&aacute; definida dentro del nivel 5 del modelo OSI de ISO";
 choices[42][1] = "Es una sintaxis totalmente conceptual";
 choices[42][2] = "Fue reemplazada por las sintaxis abstractas";
 choices[42][3] = "Ninguna de las anteriores es verdadera";
 answers[42] = choices[42][3];
 units[42] = "100";
 comments[42] = "Id Pregunta: 3642. *: ASN1";


//  Id pregunta: 3684 AÃ±o de creación de pregunta: 2002-01-01
 questions[43]= "44)  La velocidad de transmisi&oacute;n que se puede alcanzar con tecnolog&iacute;a Bluetooth versi&oacute;n 1.1 es de:";
 choices[43]= new Array();
 choices[43][0] = "1 Mbps";
 choices[43][1] = "384 kbps";
 choices[43][2] = "5 Mbps";
 choices[43][3] = "11 Mbps";
 answers[43] = choices[43][0];
 units[43] = "107";
 comments[43] = "Id Pregunta: 3684. NULL";


//  Id pregunta: 3804 AÃ±o de creación de pregunta: 2002-01-01
 questions[44]= "45)  Se conoce como tiempo de vuelo a:";
 choices[44]= new Array();
 choices[44][0] = "El tiempo desde que el cabeza de un disco comienza su movimiento hasta que se posa sobre una pista concreta de la superficie del disco";
 choices[44][1] = "El tiempo desde que una se&ntilde;al (onda) sale de un emisor v&iacute;a radio (aire) hasta que llega a su destino";
 choices[44][2] = "El tiempo que transcurre desde que se pulsa una tecla hasta que el sistema responde al comando requerido";
 choices[44][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[44] = choices[44][1];
 units[44] = "108";
 comments[44] = "Id Pregunta: 3804. ";


//  Id pregunta: 3866 AÃ±o de creación de pregunta: 2004-01-01
 questions[45]= "46)  Qu&eacute; m&eacute;todo no se emplea para generar contenido din&aacute;mico en el cliente";
 choices[45]= new Array();
 choices[45][0] = "Applets";
 choices[45][1] = "JavaScript";
 choices[45][2] = "ActiveX";
 choices[45][3] = "CGI";
 answers[45] = choices[45][3];
 units[45] = "114";
 comments[45] = "Id Pregunta: 3866. Tanenbaum";


//  Id pregunta: 4361 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  Cuando sobre un Data Warehouse llevamos a cabo un proceso de Data-Minig, donde la b&uacute;squeda se dirige hacia la categorizaci&oacute;n de los registros en grupos para detectar patrones aplicables, o extraer relaciones impl&iacute;citas en los datos, estamos aplicando un modelo...";
 choices[46]= new Array();
 choices[46][0] = "De validaci&oacute;n.";
 choices[46][1] = "De verificaci&oacute;n.";
 choices[46][2] = "De descubrimiento.";
 choices[46][3] = "Predictivo.";
 answers[46] = choices[46][2];
 units[46] = "68";
 comments[46] = "Id Pregunta: 4361. ";


//  Id pregunta: 4504 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  &iquest;Cual de las siguientes es una norma certificable?";
 choices[47]= new Array();
 choices[47][0] = "UNE 71501 IN";
 choices[47][1] = "UNE ISO/IEC 17799:2002";
 choices[47][2] = "UNE 71502:2004";
 choices[47][3] = "BS 7799-1";
 answers[47] = choices[47][2];
 units[47] = "";
 comments[47] = "Id Pregunta: 4504. ";


//  Id pregunta: 4577 AÃ±o de creación de pregunta: 2007-01-01
 questions[48]= "49)  &iquest;Qu&eacute; actividades de las siguientes se incluyen en el ciclo de vida cl&aacute;sico, tambi&eacute;n Ilamado &quot;modelo en cascada&quot;?";
 choices[48]= new Array();
 choices[48][0] = "an&aacute;lisis del sistema, an&aacute;lisis de riesgo, an&aacute;lisis de requisitos";
 choices[48][1] = "an&aacute;lisis de riesgo, an&aacute;lisis de requisitos y codificaci&oacute;n";
 choices[48][2] = "an&aacute;lisis del sistema, prototipos y codificaci&oacute;n";
 choices[48][3] = "dise&ntilde;o, codificaci&oacute;n y pruebas";
 answers[48] = choices[48][3];
 units[48] = "76";
 comments[48] = "Id Pregunta: 4577. ";


//  Id pregunta: 4590 AÃ±o de creación de pregunta: 2007-01-01
 questions[49]= "50)  Un puente como elemento de interconexi&oacute;n de redes en que capa del modelo OSI opera:";
 choices[49]= new Array();
 choices[49][0] = "enlace de datos";
 choices[49][1] = "red";
 choices[49][2] = "transporte";
 choices[49][3] = "ninguna de las anteriores";
 answers[49] = choices[49][0];
 units[49] = "99";
 comments[49] = "Id Pregunta: 4590. NULL";


//  Id pregunta: 4733 AÃ±o de creación de pregunta: 2007-01-01
 questions[50]= "51)  Los registros glue de una zona DNS son aquellos que:";
 choices[50]= new Array();
 choices[50][0] = "Son los registros que mantienen la resoluci&oacute;n inversa.";
 choices[50][1] = " Son los registros que mantienen el espacio de nombres de la zona.";
 choices[50][2] = "Son los registros que permiten intercambiar informaci&oacute;n entre las diferentes zonas/subzonas";
 choices[50][3] = "Son los registros que permiten la consulta delegada de otros sistemas dns.";
 answers[50] = choices[50][1];
 units[50] = "112";
 comments[50] = "Id Pregunta: 4733. Examen 2006 JCYL";


//  Id pregunta: 5048 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  &iquest;Qu&eacute; se utiliza para codificar la voz que se transmite por la red IP?:";
 choices[51]= new Array();
 choices[51][0] = "Retardo";
 choices[51][1] = "Encriptado";
 choices[51][2] = "C&oacute;decs";
 choices[51][3] = "Claves";
 answers[51] = choices[51][2];
 units[51] = "109";
 comments[51] = "Id Pregunta: 5048. Examen TIC A 2007";


//  Id pregunta: 5143 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[52]= new Array();
 choices[52][0] = "La prueba funcional o de caja negra se centra en el estudio de la especificaci&oacute;n del hardware.";
 choices[52][1] = "Una prueba funcional bien elegida es la que reduce el n&uacute;mero de otros casos necesarios para que la prueba sea razonable.";
 choices[52][2] = "En la prueba funcional debemos ejecutar todas las posibilidades de funcionamiento y todas las combinaciones de entradas y salidas.";
 choices[52][3] = "La prueba funcional nunca se fija en las entradas ni en las salidas, sino en el funcionamiento interno del programa.";
 answers[52] = choices[52][1];
 units[52] = "78";
 comments[52] = "Id Pregunta: 5143. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5541 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  &iquest;Cu&aacute;l de las siguientes es un tipo de consulta utilizada para recuperar informaci&oacute;n en la web?";
 choices[53]= new Array();
 choices[53][0] = "Consultas de informaci&oacute;n (informational queries)";
 choices[53][1] = "Consultas transaccionales (transactional queries)";
 choices[53][2] = "Consultas de navegaci&oacute;n (navigational queries)";
 choices[53][3] = "Todas las anteriores son consultas v&aacute;lidas";
 answers[53] = choices[53][3];
 units[53] = "96";
 comments[53] = "Id Pregunta: 5541. NULL";


//  Id pregunta: 5658 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  Seg&uacute;n el RD 1720/2007, cual de los siguientes NO es un requisito del documento de seguridad, para el nivel b&aacute;sico:";
 choices[54]= new Array();
 choices[54][0] = "Ambito de aplicaci&oacute;n del documento con especificacion detallada de los recursos protegidos.";
 choices[54][1] = "Los procedimientos de realizacion de copias de repaldo y de recuperacion de los datos en los ficheros o tratamientos automatizados.";
 choices[54][2] = "La identificacion del responsable o responsables de seguridad.";
 choices[54][3] = "Todos los son.";
 answers[54] = choices[54][2];
 units[54] = "29";
 comments[54] = "Id Pregunta: 5658. ";


//  Id pregunta: 5675 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  Indique la respuesta incorrecta respecto a GIS modelo de datos vectorial.";
 choices[55]= new Array();
 choices[55][0] = "La caracter&iacute;stica mas importante del modelo vectorial frente al r&aacute;ster es la capacidad de gestion topol&oacute;gica de sus elementos.";
 choices[55][1] = "La mayor riqueza y capacidad de representaci&oacute;n de la realidad espacial, se traduce en una mayor complejidad de este modelo vectorial en comparaci&oacute;n con el sencillo modelo r&aacute;ster.";
 choices[55][2] = "En el modelo de datos vectorial podemos hablar por tanto de una georreferenciaci&oacute;n continua, sin que la resoluci&oacute;n suponga una limitaci&oacute;n como suced&iacute;a en el modelo r&aacute;ster.";
 choices[55][3] = "Ninguna de las anteriores.";
 answers[55] = choices[55][3];
 units[55] = "67";
 comments[55] = "Id Pregunta: 5675. NULL";


//  Id pregunta: 5692 AÃ±o de creación de pregunta: 2003-01-01
 questions[56]= "57)  Una de las zonas de datos que se encuentran dentro del chip criptogr&aacute;fico del DNI electr&oacute;nico es la denominada zona de seguridad. Esta zona que almacena, entre otros, los datos biom&eacute;tricos, es accesible por:";
 choices[56]= new Array();
 choices[56][0] = "El ciudadano";
 choices[56][1] = "El ciudadano y la Direcci&oacute;n General de la Polic&iacute;a";
 choices[56][2] = " La Direcci&oacute;n General de la Polic&iacute;a";
 choices[56][3] = "Es una zona p&uacute;blica";
 answers[56] = choices[56][2];
 units[56] = "74";
 comments[56] = "Id Pregunta: 5692. NULL";


//  Id pregunta: 5741 AÃ±o de creación de pregunta: 2009-01-01
 questions[57]= "58)  &iquest;Tiene la firma electr&oacute;nica el mismo valor ante la ley que la firma manuscrita?";
 choices[57]= new Array();
 choices[57][0] = "S&iacute;, siempre";
 choices[57][1] = "No, en ning&uacute;n caso";
 choices[57][2] = "S&iacute;, si es firma electr&oacute;nica avanzada";
 choices[57][3] = "S&iacute;, si es firma electr&oacute;nica reconocida";
 answers[57] = choices[57][3];
 units[57] = "30";
 comments[57] = "Id Pregunta: 5741. Ley 59/2003, art&iacute;culo 3.4";


//  Id pregunta: 5771 AÃ±o de creación de pregunta: 2009-01-01
 questions[58]= "59)  &iquest;Cu&aacute;l de los siguientes miembros no forma parte el Consejo Consultivo de la A.E.P.D.?";
 choices[58]= new Array();
 choices[58][0] = "Un Diputado, propuesto por el Congreso de los Diputados";
 choices[58][1] = "Un Senador propuesto por el Senado";
 choices[58][2] = "Un miembro de la Real Academia de la Lengua propuesto por la misma";
 choices[58][3] = "Un miembro de la Real Academia de la Historia propuesto por la misma";
 answers[58] = choices[58][2];
 units[58] = "29";
 comments[58] = "Id Pregunta: 5771. ";


//  Id pregunta: 5823 AÃ±o de creación de pregunta: 2009-01-01
 questions[59]= "60)  Seg&uacute;n Magerit versi&oacute;n 2 en un proyecto de an&aacute;lisis de gesti&oacute;n de riesgos qu&eacute; documento de los citados a continuaci&oacute;n NO se genera en el Proceso de Planificaci&oacute;n:";
 choices[59]= new Array();
 choices[59][0] = "Tipolog&iacute;a de activos";
 choices[59][1] = "Dimensiones de seguridad relevantes";
 choices[59][2] = "Criterios de evaluaci&oacute;n";
 choices[59][3] = "Modelo de valor";
 answers[59] = choices[59][3];
 units[59] = "33";
 comments[59] = "Id Pregunta: 5823. MAP 2008 A1";


//  Id pregunta: 5988 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  Adem&aacute;s de controlar el correcto funcionamiento del sistema y poner los medios para corregir sus funciones, &iquest;qu&eacute; funci&oacute;n lecorresponder&iacute;a a un administrador de sistemas operativos?";
 choices[60]= new Array();
 choices[60][0] = "Colaborar en el desarrollo de nuevas versiones de los sistemas operativos o de parches para ellos.";
 choices[60][1] = "Planificar y realizar la adquisici&oacute;n de nuevo equipamiento.";
 choices[60][2] = "Instalar el sistema operativo, actualizar los parches, monitorizar el uso de recursos y corregir las posibles incidencias.";
 choices[60][3] = "Desarrollar los sistemas de informaci&oacute;n de la organizaci&oacute;n.";
 answers[60] = choices[60][2];
 units[60] = "52";
 comments[60] = "Id Pregunta: 5988. TIC A 2009";


//  Id pregunta: 6057 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  &iquest;Cu&aacute;l de las siguientes utilidades NO se corresponde con software de c&oacute;digo abierto?";
 choices[61]= new Array();
 choices[61][0] = "Thunderbird.";
 choices[61][1] = "Adobe Reader.";
 choices[61][2] = "OpenOffice.";
 choices[61][3] = "Firefox.";
 answers[61] = choices[61][1];
 units[61] = "62";
 comments[61] = "Id Pregunta: 6057. TIC A 2009";


//  Id pregunta: 6092 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  En relaci&oacute;n con la gesti&oacute;n de la calidad, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[62]= new Array();
 choices[62][0] = "Actualmente existen 3 grandes modelos de calidad total: Deming, Malcom Baldrige y EFQM, de amplia aplicaci&oacute;n en Estados Unidos, Jap&oacute;n y Europa respectivamente.";
 choices[62][1] = "El modelo EFQM consta de 9 criterios, de los cuales 5 son agentes y 4 son resultados.";
 choices[62][2] = "Los agentes del modelo EFQM son los siguientes: liderazgo, personas, procesos, pol&iacute;tica y alianzas.";
 choices[62][3] = "Los agentes del modelo EFQM son los siguientes: liderazgo, personas, procesos, estrategia y recursos.";
 answers[62] = choices[62][1];
 units[62] = "92";
 comments[62] = "Id Pregunta: 6092. TIC A 2009";


//  Id pregunta: 6284 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  &iquest;Qu&eacute; es un Plan de Sistemas?";
 choices[63]= new Array();
 choices[63][0] = "Un an&aacute;lisis de la situaci&oacute;n actual del &aacute;rea de sistemas de una organizaci&oacute;n";
 choices[63][1] = "Un manual de usuario para los clientes de aplicaciones inform&aacute;ticas de una organizaci&oacute;n";
 choices[63][2] = "Un plan de riesgos de sistemas de informaci&oacute;n";
 choices[63][3] = "Un documento que recoge el conjunto de medidas dirigidas a satisfacer las necesidades en materia de tratamiento automatizado de informaci&oacute;n de una organizaci&oacute;n";
 answers[63] = choices[63][3];
 units[63] = "77";
 comments[63] = "Id Pregunta: 6284. ";


//  Id pregunta: 6360 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  El servicio universal definido en la ley 9/2014 deber&aacute; garantizar:";
 choices[64]= new Array();
 choices[64][0] = "Que se ponga a disposici&oacute;n de los abonados al servicio telef&oacute;nico disponible al p&uacute;blico una gu&iacute;a general de n&uacute;meros de abonados, ya sea impresa o electr&oacute;nica, o ambas, y se actualice, como m&aacute;ximo, una vez al a&ntilde;o.";
 choices[64][1] = "Que todos los usuarios finales puedan obtener una conexi&oacute;n a la red telef&oacute;nica p&uacute;blica, que le ofrezca la posibilidad de efectuar y recibir llamadas telef&oacute;nicas, enviar mensajes cortos de texto (SMS) y permitir comunicaciones de fax y datos a velocidad suficiente para acceder de forma funcional a Internet.";
 choices[64][2] = "Que exista una oferta suficiente de equipos terminales de acceso a Internet de banda ancha.";
 choices[64][3] = "Conexi&oacute;n a la red p&uacute;blica de comunicaciones con capacidad de acceso funcional a Internet deber&aacute; permitir comunicaciones de datos en banda ancha a una velocidad en sentido descendente de 1 Mbit por segundo";
 answers[64] = choices[64][3];
 units[64] = "110";
 comments[64] = "Id Pregunta: 6360. Art&iacute;culo 25 Ley 9/2014";


//  Id pregunta: 6376 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  &iquest;Cu&aacute;l de las siguientes sentencias corresponde con la definici&oacute;n de Interoperabilidad Sem&aacute;ntica dada por el Esquema Nacional de Interoperabilidad?";
 choices[65]= new Array();
 choices[65][0] = "Es aquella dimensi&oacute;n de la interoperabilidad relativa a la capacidad de las entidades y de los procesos a trav&eacute;s de los cuales llevan a cabo sus actividades para colaborar con el objeto de alcanzar logros mutuamente acordados relativos a los servicios que prestan.";
 choices[65][1] = "Es aquella dimensi&oacute;n de la interoperabilidad relativa a que la informaci&oacute;n intercambiada pueda ser interpretable de forma autom&aacute;tica y reutilizable por aplicaciones que no intervinieron en su creaci&oacute;n.";
 choices[65][2] = "Es aquella dimensi&oacute;n de la interoperabilidad relativa a la relaci&oacute;n entre sistemas y servicios de tecnolog&iacute;as de la informaci&oacute;n, incluyendo aspectos tales como las interfaces, la interconexi&oacute;n, la integraci&oacute;n de datos y servicios, la presentaci&oacute;n de la informaci&oacute;n, la accesibilidad y la seguridad, u otros de naturaleza an&aacute;loga.";
 choices[65][3] = "Es aquella dimensi&oacute;n de la interoperabilidad relativa a la interacci&oacute;n entre elementos que corresponden a diversas oleadas tecnol&oacute;gicas; se manifiesta especialmente en la conservaci&oacute;n de la informaci&oacute;n en soporte electr&oacute;nico.";
 answers[65] = choices[65][1];
 units[65] = "43";
 comments[65] = "Id Pregunta: 6376. Anexo ENI";


//  Id pregunta: 6597 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  Una auditor&iacute;a de acuerdo al RD 1720/2007, implica el llevar a cabo:";
 choices[66]= new Array();
 choices[66][0] = "An&aacute;lisis de la red de comunicaciones";
 choices[66][1] = "An&aacute;lisis de los sistemas operativos";
 choices[66][2] = "An&aacute;lisis de los ficheros automatizados";
 choices[66][3] = "Todas las respuestas anteriores son correctas";
 answers[66] = choices[66][3];
 units[66] = "75";
 comments[66] = "Id Pregunta: 6597. NULL";


//  Id pregunta: 7770 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)   &iquest;Cu&aacute;l de las siguientes no es una caracter&iacute;stica de un sistema DRM?";
 choices[67]= new Array();
 choices[67][0] = " Impide la descarga de contenido protegido.";
 choices[67][1] = " Impide la copia de contenido protegido.";
 choices[67][2] = " Garantiza la no modificaci&oacute;n del contenido protegido.";
 choices[67][3] = " Garantiza el proceso de pago entre comprador y vendedor.";
 answers[67] = choices[67][0];
 units[67] = "37";
 comments[67] = "Id Pregunta: 7770. Map 2005";


//  Id pregunta: 7802 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)   &iquest;Cu&aacute;l de los siguientes protocolos de la familia TCP/IP no pertenece a la capa de aplicaci&oacute;n?";
 choices[68]= new Array();
 choices[68][0] = " NFS.";
 choices[68][1] = " SMTP.";
 choices[68][2] = " RPC.";
 choices[68][3] = " UDP.";
 answers[68] = choices[68][3];
 units[68] = "NULL";
 comments[68] = "Id Pregunta: 7802. Map 2005";


//  Id pregunta: 7880 AÃ±o de creación de pregunta: 2010-01-01
 questions[69]= "70)   &iquest;Cu&aacute;l de las siguientes actividades no pertenece al modelo de procesos de Reingenier&iacute;a del Software propuesto por Pressman?";
 choices[69]= new Array();
 choices[69][0] = " An&aacute;lisis de Inventarios.";
 choices[69][1] = " Ingenier&iacute;a Inversa.";
 choices[69][2] = " Ingenier&iacute;a Directa.";
 choices[69][3] = " Ingenier&iacute;a Relacional.";
 answers[69] = choices[69][3];
 units[69] = "NULL";
 comments[69] = "Id Pregunta: 7880. Map 2006";


//  Id pregunta: 7882 AÃ±o de creación de pregunta: 2010-01-01
 questions[70]= "71)   El est&aacute;ndar del IEEE (Institute of Electrical and Electronics Engineers) que funciona bajo el est&aacute;ndar 802.11 y se aplica a la intercomunicaci&oacute;n entre puntos de acceso de distintos fabricantes, permitiendo el roaming o itinerancia de clientes es el:";
 choices[70]= new Array();
 choices[70][0] = " 802.11e.";
 choices[70][1] = " 802.11f.";
 choices[70][2] = " 802.11h.";
 choices[70][3] = " 802.11i.";
 answers[70] = choices[70][1];
 units[70] = "NULL";
 comments[70] = "Id Pregunta: 7882. Map 2006";


//  Id pregunta: 8149 AÃ±o de creación de pregunta: 2010-01-01
 questions[71]= "72)   &iquest;Qu&eacute; es Atom?";
 choices[71]= new Array();
 choices[71][0] = " Sistema de an&aacute;lisis XML.";
 choices[71][1] = " Tecnolog&iacute;a de sindicaci&oacute;n de contenidos.";
 choices[71][2] = " Lenguaje que permite el intercambio de informaci&oacute;n financiera de las empresas.";
 choices[71][3] = " Sintaxis de una DTD.";
 answers[71] = choices[71][1];
 units[71] = "NULL";
 comments[71] = "Id Pregunta: 8149. Map 2008";


//  Id pregunta: 8183 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  En un contrato de suministro de car&aacute;cter inform&aacute;tico, &iquest;es posible pagar el precio de los bienes adquiridos mediante una parte en dinero y la otra con la entrega de bienes de la misma clase?:";
 choices[72]= new Array();
 choices[72][0] = "No, en ning&uacute;n caso al estar prohibido el pago parcial en especie por las leyes.";
 choices[72][1] = "S&iacute;, siempre es posible. La ley lo admite para todo tipo de contratos.";
 choices[72][2] = "No, salvo autorizaci&oacute;n expresa de la Comisi&oacute;n Ministerial de Administraci&oacute;n Electr&oacute;nica, que el bien entregado no supere los 100.000 euros, y que el adjudicatario del contrato consienta.";
 choices[72][3] = "S&iacute;, siempre que existan razones t&eacute;cnicas o econ&oacute;micas que lo aconsejen, y que el importe de los bienes a entregar no supere el 50 % del total del contrato.";
 answers[72] = choices[72][3];
 units[72] = "41";
 comments[72] = "Id Pregunta: 8183. Examen TIC A1 2010";


//  Id pregunta: 8546 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  &iquest;En qu&eacute; recomendaci&oacute;n de la Uni&oacute;n Internacional de Telecomunicaciones viene recogida la tecnolog&iacute;a ADSL-Lite?";
 choices[73]= new Array();
 choices[73][0] = "ITU G.992.1.";
 choices[73][1] = "ITU G.992.2";
 choices[73][2] = "ITU G.992.3.";
 choices[73][3] = "ITUG.992.4.";
 answers[73] = choices[73][1];
 units[73] = "107";
 comments[73] = "Id Pregunta: 8546. Examen TIC A2 2010 interna";


//  Id pregunta: 8815 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  Los procesos de un Data Warehouse son:";
 choices[74]= new Array();
 choices[74][0] = "Elaboraci&oacute;n, carga, explotaci&oacute;n y an&aacute;lisis.";
 choices[74][1] = "Extracci&oacute;n, elaboraci&oacute;n, carga y explotaci&oacute;n.";
 choices[74][2] = "Extracci&oacute;n, carga, explotaci&oacute;n y an&aacute;lisis.";
 choices[74][3] = "Extracci&oacute;n, elaboraci&oacute;n, carga y an&aacute;lisis.";
 answers[74] = choices[74][1];
 units[74] = "68";
 comments[74] = "Id Pregunta: 8815. Examen TIC B 2007 y examen UPM A2 2011";


//  Id pregunta: 8843 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)   Se entiende por SSO ";
 choices[75]= new Array();
 choices[75][0] = " Un procedimiento de autenticaci&oacute;n que permite acceder a diversos recursos inform&aacute;ticos utilizando una &uacute;nica identificaci&oacute;n";
 choices[75][1] = " Un sistema basado el claves SSL para la gesti&oacute;n remota de claves sim&eacute;tricas";
 choices[75][2] = " Un sistema de gesti&oacute;n y almacenamiento de claves fraccionadas con coherencia asim&eacute;trica";
 choices[75][3] = " Un procedimiento de comunicaciones seguras entre objetos basado en sockets";
 answers[75] = choices[75][0];
 units[75] = "118";
 comments[75] = "Id Pregunta: 8843. Examen UC3M 2010";


//  Id pregunta: 8866 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  Un dato espacial es una variable asociada a una localizaci&oacute;n del espacio. Normalmente se utilizan datos vectoriales, los cuales pueden ser expresados mediante tres tipos de objetos espaciales:";
 choices[76]= new Array();
 choices[76][0] = "Puntos, l&iacute;neas, pol&iacute;gonos.";
 choices[76][1] = "Coordenadas, l&iacute;neas, pol&iacute;gonos.";
 choices[76][2] = "Puntos, vectores, pol&iacute;gonos.";
 choices[76][3] = "Puntos, arcos, rectas.";
 answers[76] = choices[76][0];
 units[76] = "67";
 comments[76] = "Id Pregunta: 8866. Analista Ayto. Madrid 2010";


//  Id pregunta: 8921 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  El proceso de normalizaci&oacute;n tiene por objeto";
 choices[77]= new Array();
 choices[77][0] = "Establecer reglas de nombrado uniformes para las entidades, los atributos y las relaciones";
 choices[77][1] = "Obtener el dise&ntilde;o f&iacute;sico del modelo de datos";
 choices[77][2] = "Eliminar las dependencias entre atributos que originen anomal&iacute;as en el tratamiento de los datos";
 choices[77][3] = "Homogeneizar el n&uacute;mero de dimensiones de las tablas de la base de datos";
 answers[77] = choices[77][2];
 units[77] = "58";
 comments[77] = "Id Pregunta: 8921. Operador Ayto. Madrid 2010";


//  Id pregunta: 9349 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  Sobre los canales no estructurados en Europa:";
 choices[78]= new Array();
 choices[78][0] = "El H11 trabaja a 384 kbps agrupando 6 canales de 64 kbps";
 choices[78][1] = "El H0 trabaja a 1536 kbps, agrupando 24 canales de 64 kbps";
 choices[78][2] = "El H11 trabaja a 1920 Kbps, agrupando 30 canales de 64 kbps";
 choices[78][3] = "El H0 trabaja 384 kbps, agrupando 6 canales de 64 kbps";
 answers[78] = choices[78][3];
 units[78] = "103";
 comments[78] = "Id Pregunta: 9349. Pag. 6 astic 2011";


//  Id pregunta: 9712 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  En el contexto de las redes de telecomunicaciones, SNMP";
 choices[79]= new Array();
 choices[79][0] = "es un protocolo de la capa de aplicaci&oacute;n que facilita el intercambio de informaci&oacute;n de administraci&oacute;n entre dispositivos de red.";
 choices[79][1] = "es el acr&oacute;nimo en ingl&eacute;s de Service Network Management Protocol.";
 choices[79][2] = "es un protocolo de la capa de transporte que facilita el intercambio de informaci&oacute;n de administraci&oacute;n entre dispositivos de red.";
 choices[79][3] = "son las siglas en ingl&eacute;s de Standard Network Management Protocol.";
 answers[79] = choices[79][0];
 units[79] = "106";
 comments[79] = "Id Pregunta: 9712. Examen TIC-A1 2013";


//  Id pregunta: 9715 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  En relaci&oacute;n con los protocolos de encaminamiento";
 choices[80]= new Array();
 choices[80][0] = "RIP y OSPF son protocolos de vector distancia.";
 choices[80][1] = "IGRP y EIGRP son protocolos de estado de enlace.";
 choices[80][2] = "RIP es un protocolo de encaminamiento interno y BGP lo es de encaminamiento externo.";
 choices[80][3] = "IS-IS y OSPF son protocolos de encaminamiento externo.";
 answers[80] = choices[80][2];
 units[80] = "102";
 comments[80] = "Id Pregunta: 9715. Examen TIC-A1 2013";


//  Id pregunta: 9766 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  &iquest;Qu&eacute; tipos de tratamiento del riesgo contempla MAGERIT v3?";
 choices[81]= new Array();
 choices[81][0] = "Eliminaci&oacute;n, Mitigaci&oacute;n, Compartici&oacute;n, Financiaci&oacute;n.";
 choices[81][1] = "Eliminaci&oacute;n, Reducci&oacute;n, Compartic&oacute;n, Financiaci&oacute;n.";
 choices[81][2] = "Exterminaci&oacute;n, Mitigaci&oacute;n, Compartici&oacute;n, Financiaci&oacute;n.";
 choices[81][3] = "Compartici&oacute;n, Reducci&oacute;n, Traspaso, Compartici&oacute;n.";
 answers[81] = choices[81][0];
 units[81] = "98";
 comments[81] = "Id Pregunta: 9766. NULL";


//  Id pregunta: 9964 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  En la plataforma .NET, &iquest;cu&aacute;l es el est&aacute;ndar que define como se declaran, usan y administran los tipos de datos en el Common Language Runtime (CLR) y que es una parte importante para que m&uacute;ltiples lenguajes sean soportados?";
 choices[82]= new Array();
 choices[82][0] = "System Data Type (SDT)";
 choices[82][1] = "Common Type System (CTS)";
 choices[82][2] = "Common Data Integration (CDI)";
 choices[82][3] = "Data Type Core (DTC)";
 answers[82] = choices[82][1];
 units[82] = "59,115";
 comments[82] = "Id Pregunta: 9964. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";


//  Id pregunta: 10060 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  En una empresa con 2.000 puestos de usuario en su red local de comunicaciones existen 3 subredes con estos direccionamientos: red A: 10.X.X.X, red B: 192.168.1.X y red C: 195.57.72.X.Teniendo en cuenta que en la ubicaci&oacute;n de los equipos de usuarios y servidores se busca mantener la red operativa y a la vez con la m&aacute;xima seguridad posible, &iquest;d&oacute;nde se ubicar&iacute;an los servidores de Base de Datos de los que se alimentan tanto los servidores web p&uacute;blicos como los de la intranet?";
 choices[83]= new Array();
 choices[83][0] = "Red A.";
 choices[83][1] = "Red B.";
 choices[83][2] = "Red C.";
 choices[83][3] = "Habr&iacute;a dos servidores de bases de datos, el p&uacute;blico en la red C y el privado en la red B.";
 answers[83] = choices[83][1];
 units[83] = "100";
 comments[83] = "Id Pregunta: 10060. TIC A2, libre, Examen 2013";


//  Id pregunta: 10222 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  Conociendo que la variable es de tipo byte y su valor es 12, cual ser&aacute; el resultado de la sentencia:System.out.println(busca == 6 + 6 ? &quot;true&quot; : &quot;false&quot;);";
 choices[84]= new Array();
 choices[84][0] = "Da un error de compilaci&oacute;n";
 choices[84][1] = "TRUE";
 choices[84][2] = "FALSE";
 choices[84][3] = "12";
 answers[84] = choices[84][1];
 units[84] = "60";
 comments[84] = "Id Pregunta: 10222. NULL";


//  Id pregunta: 10300 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Indicar de las siguientes, cu&aacute;l es una cabecera de extensi&oacute;n IPv6:";
 choices[85]= new Array();
 choices[85][0] = "Cabecera siguiente.";
 choices[85][1] = "Enrutamiento.";
 choices[85][2] = "Longitud de la carga &uacute;til.";
 choices[85][3] = "L&iacute;mite de saltos.";
 answers[85] = choices[85][1];
 units[85] = "100";
 comments[85] = "Id Pregunta: 10300. TIC A2, libre, examen 2013";


//  Id pregunta: 10312 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  En el &aacute;mbito de las redes SAN, &iquest;a qu&eacute; se refiere el t&eacute;rmino LUN?";
 choices[86]= new Array();
 choices[86][0] = "A un switch con conexi&oacute;n de fibra.";
 choices[86][1] = "A la interfaz de red de los servidores para conectarse a la SAN.";
 choices[86][2] = "A una unidad de discos agrupados en una cabina de almacenamiento.";
 choices[86][3] = "Al gateway para conectar una NAS a una red SAN.";
 answers[86] = choices[86][2];
 units[86] = "48";
 comments[86] = "Id Pregunta: 10312. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10318 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  &iquest;C&oacute;mo se llama la base de datos que tiene los par&aacute;metros de gesti&oacute;n de una red?";
 choices[87]= new Array();
 choices[87][0] = "MIB (Management Information Base).";
 choices[87][1] = "NMD (Network Management database).";
 choices[87][2] = "NMS (Network Management System).";
 choices[87][3] = "Ninguna de los anteriores.";
 answers[87] = choices[87][0];
 units[87] = "104";
 comments[87] = "Id Pregunta: 10318. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10513 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  &iquest;Cual de los siguientes no es un tipo de tr&aacute;fico de ATM?";
 choices[88]= new Array();
 choices[88][0] = "UBR";
 choices[88][1] = "VBR";
 choices[88][2] = "SBR";
 choices[88][3] = "CBR";
 answers[88] = choices[88][2];
 units[88] = "109";
 comments[88] = "Id Pregunta: 10513. NULL";


//  Id pregunta: 10600 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  La creaci&oacute;n de una Estructura de Desglose del Trabajo (EDT) forma parte de:";
 choices[89]= new Array();
 choices[89][0] = "La gesti&oacute;n de tiempo el proyecto.";
 choices[89][1] = "La denominaci&oacute;n de &ldquo;sede electr&oacute;nica&rdquo; y el n&uacute;mero de identificaci&oacute;n fiscal de la autoridad de certificaci&oacute;n.";
 choices[89][2] = "La gesti&oacute;n de riesgos del proyecto.";
 choices[89][3] = "La gesti&oacute;n de costes del proyecto.";
 answers[89] = choices[89][1];
 units[89] = "28";
 comments[89] = "Id Pregunta: 10600. ";


//  Id pregunta: 10601 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  En materia de accesibilidad, las Administraciones P&uacute;blicas deben cumplir:";
 choices[90]= new Array();
 choices[90][0] = "El Real Decreto 1494/2007";
 choices[90][1] = "Los niveles A y AA de la norma UNE 139803:2012";
 choices[90][2] = "Los niveles A y AA de las WCAG 2.0";
 choices[90][3] = "Todas las anteriores.";
 answers[90] = choices[90][3];
 units[90] = "39";
 comments[90] = "Id Pregunta: 10601. ";


//  Id pregunta: 10624 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Una sistema de gesti&oacute;n de base de datos NoSQL...";
 choices[91]= new Array();
 choices[91][0] = "&hellip; es un sistema de base de datos relacional que no utiliza SQL.";
 choices[91][1] = "&hellip; almacena sus datos en estructuras fijas (tablas).";
 choices[91][2] = "&hellip; garantiza completamente las propiedades ACID.";
 choices[91][3] = "&hellip; tienen como ventaja principal la gran escalabilidad y rendimiento.";
 answers[91] = choices[91][3];
 units[91] = "68";
 comments[91] = "Id Pregunta: 10624. ";


//  Id pregunta: 10713 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l no es seg&uacute;n la NTI de Modelo de Datos para el Intercambio de asientos entre las entidades registrales un componente de la plataforma de intercambio?";
 choices[92]= new Array();
 choices[92][0] = "Origen";
 choices[92][1] = "Destino";
 choices[92][2] = "Gestor de intercambio";
 choices[92][3] = "Sistema de intercambio";
 answers[92] = choices[92][3];
 units[92] = "43";
 comments[92] = "Id Pregunta: 10713. ";


//  Id pregunta: 10740 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Cual de las siguientes no se corresponde con una funci&oacute;n correspondiente a la Comisi&oacute;n de Estrategia TIC?";
 choices[93]= new Array();
 choices[93][0] = "Definir las prioridades de inversi&oacute;n en materias TIC de acuerdo con los objetivos establecidos por el Gobierno.";
 choices[93][1] = "Actuar como Observatorio de la Administraci&oacute;n Electr&oacute;nica y Transformaci&oacute;n Digital.";
 choices[93][2] = "Impulsar la colaboraci&oacute;n y cooperaci&oacute;n con las comunidades aut&oacute;nomas y las entidades locales para la puesta en marcha de servicios interadministrativos integrados y la compartici&oacute;n de infraestructuras t&eacute;cnicas y los servicios comunes que permitan la racionalizaci&oacute;n de los recursos TIC a todos los niveles del Estado.";
 choices[93][3] = "Elaborar y trasladar a los &oacute;rganos competentes en materia de contrataci&oacute;n, los criterios y directrices para la agregaci&oacute;n y planificaci&oacute;n de la demanda TIC en la Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos para una mayor eficiencia econ&oacute;mica y su configuraci&oacute;n como cliente &uacute;nico frente a proveedores externos.";
 answers[93] = choices[93][3];
 units[93] = "24";
 comments[93] = "Id Pregunta: 10740. ";


//  Id pregunta: 11012 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola garantiza el secreto de las comunicaciones?";
 choices[94]= new Array();
 choices[94][0] = "Art&iacute;culo 15";
 choices[94][1] = "17";
 choices[94][2] = "Art&iacute;culo 18";
 choices[94][3] = "Art&iacute;culo 19";
 answers[94] = choices[94][2];
 units[94] = "29";
 comments[94] = "Id Pregunta: 11012. ";


//  Id pregunta: 11248 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Cada cuanto tiempo se revisa la solvencia de las empresas clasificadas:";
 choices[95]= new Array();
 choices[95][0] = "La solvencia econ&oacute;mica y financiera se revisa cada tres a&ntilde;os.";
 choices[95][1] = "La solvencia t&eacute;cnica cada a&ntilde;o.";
 choices[95][2] = "El plazo de c&oacute;mputo de la experiencia para la solvencia t&eacute;cnica es de cinco a&ntilde;os.";
 choices[95][3] = "Todas son verdaderas.";
 answers[95] = choices[95][2];
 units[95] = "41";
 comments[95] = "Id Pregunta: 11248. ";


//  Id pregunta: 11388 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de los siguientes podr&iacute;an ser considerados parte interesada (stakeholder) en una gesti&oacute;n de proyecto de servicios?";
 choices[96]= new Array();
 choices[96][0] = "Solo usuarios y clientes";
 choices[96][1] = "Solo suministradores y funciones";
 choices[96][2] = "Solo clientes y funciones";
 choices[96][3] = "Todos los anteriores";
 answers[96] = choices[96][3];
 units[96] = "98";
 comments[96] = "Id Pregunta: 11388. ";


//  Id pregunta: 11449 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Seg&uacute;n la Ley 9/2014, las condiciones asociadas a los t&iacute;tulos habilitantes para el uso del dominio p&uacute;blico radioel&eacute;ctrico no incluyen:";
 choices[97]= new Array();
 choices[97][0] = "Proporcionadas.";
 choices[97][1] = "No discriminatorias.";
 choices[97][2] = "Transparentes.";
 choices[97][3] = "Neutrales.";
 answers[97] = choices[97][3];
 units[97] = "110";
 comments[97] = "Id Pregunta: 11449. ";


//  Id pregunta: 11567 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Las cabeceras de MPLS";
 choices[98]= new Array();
 choices[98][0] = "Pueden reutilizar campos de cabeceras de otros protocolos.";
 choices[98][1] = "Emplean enrutamiento desde origen por conmutaci&oacute;n de paquetes.";
 choices[98][2] = "Los routers son los mismos que se emplean en cualquier red IP";
 choices[98][3] = "La b y c son correctas.";
 answers[98] = choices[98][0];
 units[98] = "100";
 comments[98] = "Id Pregunta: 11567. NULL";


//  Id pregunta: 11636 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Seg&uacute;n M&eacute;trica v3, el an&aacute;lisis coste/beneficio es una:";
 choices[99]= new Array();
 choices[99][0] = "Pr&aacute;ctica";
 choices[99][1] = "T&eacute;cnica de desarrollo";
 choices[99][2] = "T&eacute;cnica de gesti&oacute;n de proyectos";
 choices[99][3] = "Ninguna de las anteriores es correcta";
 answers[99] = choices[99][1];
 units[99] = "86";
 comments[99] = "Id Pregunta: 11636. ";


