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

//  Id pregunta: 58 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;En qu&eacute; fuentes se encuentran las normas a aplicar sobre sistemas abiertos en la Administraci&oacute;n?:";
 choices[0]= new Array();
 choices[0][0] = "CIABSI y CSI";
 choices[0][1] = "MAP y MJI";
 choices[0][2] = "Normas ISO, X/OPEN y EPHOS";
 choices[0][3] = "ANSI, AENOR, DIN e IRANOR";
 answers[0] = choices[0][2];
 units[0] = "40";
 comments[0] = "Id Pregunta: 58. ";


//  Id pregunta: 63 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Qu&eacute; es la WAI?";
 choices[1]= new Array();
 choices[1][0] = "una asociaci&oacute;n mundial de defensa de los internautas";
 choices[1][1] = "una iniciativa para la automatizaci&oacute;n de las tareas de organizaci&oacute;n web";
 choices[1][2] = "una iniciativa para facilitar el acceso a la web de los discapacitados";
 choices[1][3] = "una iniciativa para el desarrollo de aplicaciones inal&aacute;mbricas";
 answers[1] = choices[1][2];
 units[1] = "39";
 comments[1] = "Id Pregunta: 63. ";


//  Id pregunta: 260 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  Hay muchas organizaciones diferentes de normalizaci&oacute;n, pero una de las siguientes no est&aacute; entre ellas. &iquest;Cu&aacute;l?:";
 choices[2]= new Array();
 choices[2][0] = "ISO ";
 choices[2][1] = "ANSI  ";
 choices[2][2] = "CEPT";
 choices[2][3] = "OSI";
 answers[2] = choices[2][3];
 units[2] = "42";
 comments[2] = "Id Pregunta: 260. ";


//  Id pregunta: 264 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  Indicar cual de las siguientes no es una funci&oacute;n b&aacute;sica del tratamiento de la informaci&oacute;n:";
 choices[3]= new Array();
 choices[3][0] = "Entrada de datos";
 choices[3][1] = "Almacenamiento de datos";
 choices[3][2] = "Copias de seguridad de datos";
 choices[3][3] = "C&aacute;lculos y transformaciones de datos";
 answers[3] = choices[3][2];
 units[3] = "21";
 comments[3] = "Id Pregunta: 264. ";


//  Id pregunta: 430 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  Seg&uacute;n Elton Mayo, el v&iacute;nculo que permite unificar los esfuerzos de los trabajadores en la consecuci&oacute;n de un fin com&uacute;n es:";
 choices[4]= new Array();
 choices[4][0] = "La autoridad";
 choices[4][1] = "La motivaci&oacute;n";
 choices[4][2] = "El deseo de autorrealizaci&oacute;n";
 choices[4][3] = "La comunicaci&oacute;n";
 answers[4] = choices[4][3];
 units[4] = "22";
 comments[4] = "Id Pregunta: 430. ";


//  Id pregunta: 624 AÃ±o de creación de pregunta: 2006-01-01
 questions[5]= "6)  El m&eacute;todo en el que con criterios el decisor estima una matriz (nxn) A=(a,), donde a es la medida subjetiva de la importancia relativa del criterio i frente al j en una escala normalizada de 1 (igual de importante) a 9 (absolutamente m&aacute;s importante) es:";
 choices[5]= new Array();
 choices[5][0] = "m&eacute;todo Delphi";
 choices[5][1] = "m&eacute;todo de las utilidades relativas";
 choices[5][2] = "m&eacute;todo de la entrop&iacute;a";
 choices[5][3] = "AHP (Analytic Hierarchy Process)";
 answers[5] = choices[5][3];
 units[5] = "34";
 comments[5] = "Id Pregunta: 624. ";


//  Id pregunta: 720 AÃ±o de creación de pregunta: 2004-01-01
 questions[6]= "7)  Indique cu&aacute;l de las siguientes definiciones es verdadera. &quot;ODBC es:";
 choices[6]= new Array();
 choices[6][0] = "Un lenguaje de programaci&oacute;n para acceder a datos en sistemas gestores de bases de datos no relacionales&quot;.";
 choices[6][1] = "Una interface de aplicaciones para acceder a datos en sistemas gestores de bases de datos tanto relacionales como no relacionales&quot;.";
 choices[6][2] = "Una aplicaci&oacute;n que permite a los usuarios almacenar, procesar y recuperar informaci&oacute;n en una base de datos&quot;.";
 choices[6][3] = "Un lenguaje de programaci&oacute;n est&aacute;ndar que controla e interact&uacute;a con un sistema de gesti&oacute;n de base de datos&quot;.";
 answers[6] = choices[6][1];
 units[6] = "58";
 comments[6] = "Id Pregunta: 720. Examen TIC MAP B 2004";


//  Id pregunta: 729 AÃ±o de creación de pregunta: 2004-01-01
 questions[7]= "8)  En el lenguaje XML, el t&eacute;rmino que se utiliza para definir &quot;Las reglas que determinan el conjunto de marcas y su sintaxis&quot; es:";
 choices[7]= new Array();
 choices[7][0] = "DXL (Document eXtended Language)";
 choices[7][1] = "DTD (Document Type Definition)";
 choices[7][2] = "DOM (Document Object Model)";
 choices[7][3] = "DML (Document Markup Language)";
 answers[7] = choices[7][1];
 units[7] = "69";
 comments[7] = "Id Pregunta: 729. Examen TIC MAP B 2004";


//  Id pregunta: 827 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;C&oacute;mo son los tipos de datos en Java?:";
 choices[8]= new Array();
 choices[8][0] = "Pese a estar orientado a objetos el lenguaje, los tipos no est&aacute;n orientados a objetos";
 choices[8][1] = "Al estar orientado a objetos el lenguaje, los tipos est&aacute;n orientados a objetos";
 choices[8][2] = "Algunos de los tipos son orientados a objetos y otros no";
 choices[8][3] = "Debido a las peculiares caracteristicas de Java , los tipos de datos no pueden clasificarse en ninguna de las dos categor&iacute;as.";
 answers[8] = choices[8][2];
 units[8] = "60";
 comments[8] = "Id Pregunta: 827. String es un tipo de dato objeto";


//  Id pregunta: 1274 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  Los lenguajes de cuarta generaci&oacute;n:";
 choices[9]= new Array();
 choices[9][0] = "Necesitan menos recursos que los de generaciones anteriores.";
 choices[9][1] = "Necesitan m&aacute;s recursos que los de generaciones  anteriores.";
 choices[9][2] = "Tienen un tiempo de respuesta generalmente superior a los lenguajes de generaciones anteriores.";
 choices[9][3] = "Son ciertas las respuestas &lsquo;b&rsquo; y &lsquo;c&rsquo;.";
 answers[9] = choices[9][3];
 units[9] = "91";
 comments[9] = "Id Pregunta: 1274. NULL";


//  Id pregunta: 1766 AÃ±o de creación de pregunta: 2006-01-01
 questions[10]= "11)  El lenguaje Java, para las variables de clase, utiliza el modificador";
 choices[10]= new Array();
 choices[10][0] = "extern";
 choices[10][1] = "private";
 choices[10][2] = "final";
 choices[10][3] = "static";
 answers[10] = choices[10][3];
 units[10] = "60";
 comments[10] = "Id Pregunta: 1766. JCED - Preparatic XVII. Variables de clase es otra manera de llamar a las var est&aacute;ticas";


//  Id pregunta: 1786 AÃ±o de creación de pregunta: 2006-01-01
 questions[11]= "12)  Los m&eacute;todos de busca heur&iacute;stica&hellip;";
 choices[11]= new Array();
 choices[11][0] = "Nunca encuentran la soluci&oacute;n &oacute;ptima";
 choices[11][1] = "Dan con la soluci&oacute;n &oacute;ptima en menos tiempo";
 choices[11][2] = "Dan con la soluci&oacute;n &oacute;ptima pero pueden ser m&aacute;s lentos que otros m&eacute;todos";
 choices[11][3] = "Permiten encontrar una buena soluci&oacute;n r&aacute;pidamente pero puede no ser la &oacute;ptima";
 answers[11] = choices[11][3];
 units[11] = "63";
 comments[11] = "Id Pregunta: 1786. ";


//  Id pregunta: 1801 AÃ±o de creación de pregunta: 2006-01-01
 questions[12]= "13)  &iquest;Para que se utiliza un LMS?";
 choices[12]= new Array();
 choices[12][0] = "Para crear cursos de e-learning";
 choices[12][1] = "Para cachear los cursos de e-learning en el web server";
 choices[12][2] = "Es un Content Management System especializado en e-learning";
 choices[12][3] = "Ninguna de las anteriores";
 answers[12] = choices[12][3];
 units[12] = "66";
 comments[12] = "Id Pregunta: 1801. Los cursos se crean mediante un LCMS. El LMS se utiliza para administrar esos cursos/objetos de aprendizajes ya existentes.";


//  Id pregunta: 1896 AÃ±o de creación de pregunta: 2006-01-01
 questions[13]= "14)  En la protecci&oacute;n de contrase&ntilde;as, la cadena aleatoria de datos usada para modificar el hash de contrase&ntilde;a se llama";
 choices[13]= new Array();
 choices[13][0] = "sal";
 choices[13][1] = "dongle";
 choices[13][2] = "semilla";
 choices[13][3] = "marca de agua";
 answers[13] = choices[13][0];
 units[13] = "74";
 comments[13] = "Id Pregunta: 1896. NULL";


//  Id pregunta: 2081 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  Seg&uacute;n la Gu&iacute;a de T&eacute;cnicas de M&eacute;trica v3, en el an&aacute;lisis coste-beneficio de un sistema de informaci&oacute;n:";
 choices[14]= new Array();
 choices[14][0] = "Deben considerarse s&oacute;lo los aspectos tangibles";
 choices[14][1] = "Deben considerarse tanto los aspectos tangibles como los intangibles";
 choices[14][2] = "El an&aacute;lisis coste-beneficio no figura en la Gu&iacute;a de T&eacute;cnicas de M&eacute;trica v3";
 choices[14][3] = "No se incluyen los gastos de comunicaciones";
 answers[14] = choices[14][1];
 units[14] = "86";
 comments[14] = "Id Pregunta: 2081. NULL";


//  Id pregunta: 2169 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  Indique la afirmaci&oacute;n verdadera relativa a la Gesti&oacute;n de la Documentaci&oacute;n de un proyecto o sistema:";
 choices[15]= new Array();
 choices[15][0] = "La gesti&oacute;n de configuraci&oacute;n y control de versiones se refiere &uacute;nicamente al producto software y no a la documentaci&oacute;n";
 choices[15][1] = "La documentaci&oacute;n producida durante el desarrollo de un proyecto es independiente de la metodolog&iacute;a empleada";
 choices[15][2] = "El documento de requisitos de sistema es anterior al documento de requisitos de usuario";
 choices[15][3] = "La documentaci&oacute;n debe entenderse como todos los productos resultantes de las tareas realizadas, ya sean informes, programas, juegos de pruebas, gr&aacute;ficos, etc";
 answers[15] = choices[15][3];
 units[15] = "95,28";
 comments[15] = "Id Pregunta: 2169. ";


//  Id pregunta: 2555 AÃ±o de creación de pregunta: 2004-01-01
 questions[16]= "17)  &iquest;Cu&aacute;ntos niveles tiene el CMMi?:";
 choices[16]= new Array();
 choices[16][0] = "3";
 choices[16][1] = "4";
 choices[16][2] = "5";
 choices[16][3] = "6";
 answers[16] = choices[16][2];
 units[16] = "27";
 comments[16] = "Id Pregunta: 2555. NULL";


//  Id pregunta: 2614 AÃ±o de creación de pregunta: 2003-01-01
 questions[17]= "18)  &iquest;C&uacute;al de los siguientes lenguajes no es Orientado a Objetos?";
 choices[17]= new Array();
 choices[17][0] = "Smalltalk";
 choices[17][1] = "C++";
 choices[17][2] = "Eiffel";
 choices[17][3] = "ACTOR";
 answers[17] = choices[17][3];
 units[17] = "82";
 comments[17] = "Id Pregunta: 2614. ";


//  Id pregunta: 2846 AÃ±o de creación de pregunta: 2006-01-01
 questions[18]= "19)  &iquest;Qu&eacute; formato de compresi&oacute;n no tiene p&eacute;rdidas?";
 choices[18]= new Array();
 choices[18][0] = "JPEG";
 choices[18][1] = "ECW";
 choices[18][2] = "Mrsid";
 choices[18][3] = "RLE";
 answers[18] = choices[18][3];
 units[18] = "93";
 comments[18] = "Id Pregunta: 2846. NULL";


//  Id pregunta: 2926 AÃ±o de creación de pregunta: 2009-01-01
 questions[19]= "20)  En GPRS la velocidad m&aacute;xima te&oacute;rica de conexi&oacute;n es:";
 choices[19]= new Array();
 choices[19][0] = "128 kbps";
 choices[19][1] = "171.2 kbps";
 choices[19][2] = "64.1 kbps";
 choices[19][3] = "56.6 kbps";
 answers[19] = choices[19][1];
 units[19] = "108";
 comments[19] = "Id Pregunta: 2926. Similar a examen TIC SS A 2003";


//  Id pregunta: 3199 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  EDGE responde por:";
 choices[20]= new Array();
 choices[20][0] = "Enhanced Data for GPRS Evolution";
 choices[20][1] = "Extended Data for GSM Enhancement";
 choices[20][2] = "Enhanced Data for GSM Evolution";
 choices[20][3] = "Extended Data for GPRS Enhancement";
 answers[20] = choices[20][2];
 units[20] = "108";
 comments[20] = "Id Pregunta: 3199. ";


//  Id pregunta: 3292 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  &iquest;Qu&eacute; funci&oacute;n cumple el punto de referencia S en RDSI?:";
 choices[21]= new Array();
 choices[21][0] = "Conexi&oacute;n de un TR1 a un TR2";
 choices[21][1] = "Conexi&oacute;n de un TE1 o un TA a un TR2";
 choices[21][2] = "Conexi&oacute;n de un TE2 a un TR2";
 choices[21][3] = "Conexi&oacute;n de un TE1 a un TE2";
 answers[21] = choices[21][1];
 units[21] = "103";
 comments[21] = "Id Pregunta: 3292. ";


//  Id pregunta: 3491 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  En el acceso a l&iacute;neas y redes de comunicaciones, desde el bucle de abonado constituido por pares de cobre, la tecnolog&iacute;a que permite separar el flujo de datos del tr&aacute;fico telef&oacute;nico en origen, es:";
 choices[22]= new Array();
 choices[22][0] = "RDSI";
 choices[22][1] = "ADSL";
 choices[22][2] = "RTC";
 choices[22][3] = "TCP-IP";
 answers[22] = choices[22][1];
 units[22] = "107";
 comments[22] = "Id Pregunta: 3491. NULL";


//  Id pregunta: 3936 AÃ±o de creación de pregunta: 2003-01-01
 questions[23]= "24)  &iquest;Qu&eacute; es falso respecto a un applet?";
 choices[23]= new Array();
 choices[23][0] = "Utiliza clases de la librer&iacute;a Java.applet";
 choices[23][1] = "Tienen un m&eacute;todo paint()";
 choices[23][2] = "Se pueden visualizar mediante appletviewer ";
 choices[23][3] = "Necesitan m&eacute;todo main() ";
 answers[23] = choices[23][3];
 units[23] = "107";
 comments[23] = "Id Pregunta: 3936. ";


//  Id pregunta: 3963 AÃ±o de creación de pregunta: 2003-01-01
 questions[24]= "25)  Ordenar los siguientes dispositivos seg&uacute;n nivel OSI a puente b gateway c router d repetidor";
 choices[24]= new Array();
 choices[24][0] = "d a c b ";
 choices[24][1] = "a b c d";
 choices[24][2] = "b c d a";
 choices[24][3] = "b a d c ";
 answers[24] = choices[24][0];
 units[24] = "113";
 comments[24] = "Id Pregunta: 3963. ";


//  Id pregunta: 4185 AÃ±o de creación de pregunta: 2006-01-01
 questions[25]= "26)  Para transmitir Gigabit Ethernet";
 choices[25]= new Array();
 choices[25][0] = "Es necesario un cableado de categoria 6";
 choices[25][1] = "Es necesaria fibra &oacute;ptica";
 choices[25][2] = "Se puede usar cable coaxial";
 choices[25][3] = "ninguna de las anteriores";
 answers[25] = choices[25][3];
 units[25] = "99";
 comments[25] = "Id Pregunta: 4185. ";


//  Id pregunta: 4376 AÃ±o de creación de pregunta: 2007-01-01
 questions[26]= "27)  En el an&aacute;lisis de sistemas, el m&eacute;todo de Abbott:";
 choices[26]= new Array();
 choices[26][0] = "Consiste en descomponer el problema utilizando los primeros niveles del refinamiento.";
 choices[26][1] = "Construye una estructura similar a la de los datos de entrada-salida.";
 choices[26][2] = "Identifica un flujo global desde los elementos de entrada a los de salida.";
 choices[26][3] = "Sistematiza la forma de reconocer las abstracciones.";
 answers[26] = choices[26][3];
 units[26] = "80";
 comments[26] = "Id Pregunta: 4376. ";


//  Id pregunta: 4410 AÃ±o de creación de pregunta: 2007-01-01
 questions[27]= "28)  Los requisitos que debe cumplir un sistema para evitar que sus errores de funcionamiento tengan consecuencias en las personas o equipos, se denominan requisitos de:";
 choices[27]= new Array();
 choices[27][0] = "Fiabilidad.";
 choices[27][1] = "Operaci&oacute;n.";
 choices[27][2] = "Salvaguarda.";
 choices[27][3] = "Verificaci&oacute;n.";
 answers[27] = choices[27][0];
 units[27] = "88";
 comments[27] = "Id Pregunta: 4410. NULL";


//  Id pregunta: 4655 AÃ±o de creación de pregunta: 2007-01-01
 questions[28]= "29)  Un detector de intrusiones act&uacute;a a: ";
 choices[28]= new Array();
 choices[28][0] = "nivel f&iacute;sico";
 choices[28][1] = "nivel de enlace";
 choices[28][2] = "nivel de red";
 choices[28][3] = "nivel de aplicaci&oacute;n";
 answers[28] = choices[28][3];
 units[28] = "111";
 comments[28] = "Id Pregunta: 4655. NULL";


//  Id pregunta: 4957 AÃ±o de creación de pregunta: 2003-01-01
 questions[29]= "30)  Seg&uacute;n la metodolog&iacute;a Magerit versi&oacute;n 2, el riesgo remanente en el sistema tras la implantaci&oacute;n de lassalvaguardas determinadas en el plan de seguridad de la informaci&oacute;n se denomina:";
 choices[29]= new Array();
 choices[29][0] = "Riesgo retenido.";
 choices[29][1] = "Riesgo acumulado.";
 choices[29][2] = "Riesgo residual.";
 choices[29][3] = "Riesgo supervisado.";
 answers[29] = choices[29][2];
 units[29] = "33";
 comments[29] = "Id Pregunta: 4957. Examen TIC B 2007";


//  Id pregunta: 4968 AÃ±o de creación de pregunta: 2003-01-01
 questions[30]= "31)  Los equipos utilizados para la interconexi&oacute;n de redes a nivel 5 seg&uacute;n el modelo OSI se denomina:";
 choices[30]= new Array();
 choices[30][0] = "Repetidores.";
 choices[30][1] = "Routers.";
 choices[30][2] = "Bridges.";
 choices[30][3] = "Gateways.";
 answers[30] = choices[30][3];
 units[30] = "102";
 comments[30] = "Id Pregunta: 4968. Examen TIC B 2007";


//  Id pregunta: 5152 AÃ±o de creación de pregunta: 2003-01-01
 questions[31]= "32)  &iquest;Cu&aacute;l de las siguientes NO es un tipo de asociaci&oacute;n de un diagrama de clases?";
 choices[31]= new Array();
 choices[31][0] = "Interrelaciones";
 choices[31][1] = "Sometimiento";
 choices[31][2] = "Generalizaci&oacute;n";
 choices[31][3] = "Agregaci&oacute;n";
 answers[31] = choices[31][1];
 units[31] = "82";
 comments[31] = "Id Pregunta: 5152. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5254 AÃ±o de creación de pregunta: 2003-01-01
 questions[32]= "33)  Indique cu&aacute;l de las siguientes opciones describe el nivel 2 del modelo CMM";
 choices[32]= new Array();
 choices[32][0] = "No se han definido procesos metodol&oacute;gicos, o si se han definido no se siguen";
 choices[32][1] = "El proceso de software est&aacute; documentado, homogeneizado e integrado en un proceso de software est&aacute;ndar dentro de la organizaci&oacute;n";
 choices[32][2] = "Se establecen pol&iacute;ticas y procedimientos de administraci&oacute;n e implantaci&oacute;n del modelo b&aacute;sico para determinar costos, calendarios y funcionalidades";
 choices[32][3] = "Se recolectan medidas detalladas del proceso de software y de la calidad del producto Ambos son cuantitativamente entendidos y controlados.";
 answers[32] = choices[32][2];
 units[32] = "87";
 comments[32] = "Id Pregunta: 5254. NULL";


//  Id pregunta: 5437 AÃ±o de creación de pregunta: 2003-01-01
 questions[33]= "34)  &iquest;Qu&eacute; no es un objetivo de un Sistema de Informaci&oacute;n?";
 choices[33]= new Array();
 choices[33][0] = "Automatizaci&oacute;n de procesos operativos";
 choices[33][1] = "Proporcionar informaci&oacute;n que sirva de apoyo al proceso de toma de decisiones";
 choices[33][2] = "Lograr ventajas competitivas en su adquisici&oacute;n";
 choices[33][3] = "Minimizar el costo de adquisici&oacute;n, procesamiento y uso de la informaci&oacute;n";
 answers[33] = choices[33][2];
 units[33] = "77";
 comments[33] = "Id Pregunta: 5437. Castilla y Le&oacute;n";


//  Id pregunta: 5438 AÃ±o de creación de pregunta: 2003-01-01
 questions[34]= "35)  Los sistemas colaborativos buscan";
 choices[34]= new Array();
 choices[34][0] = "Que todo el mundo participe en la toma de decisiones";
 choices[34][1] = "La puesta a disposici&oacute;n de un gran volumen de informaci&oacute;n";
 choices[34][2] = "Integrar el trabajo de muchos usuarios concurrentes en un solo proyecto";
 choices[34][3] = "El despliegue de un sistema de informaci&oacute;n que abarque a todo el personal de la organizaci&oacute;n";
 answers[34] = choices[34][2];
 units[34] = "71";
 comments[34] = "Id Pregunta: 5438. Castilla y Le&oacute;n";


//  Id pregunta: 5459 AÃ±o de creación de pregunta: 2003-01-01
 questions[35]= "36)  Una de las ventajas del protocolo PPP respecto al SLIP es:";
 choices[35]= new Array();
 choices[35][0] = "Permite conexiones s&iacute;ncronas y as&iacute;ncronas";
 choices[35][1] = "Permite varios protocolos de red sobre &eacute;l";
 choices[35][2] = "Permite crear redes privadas virtuales";
 choices[35][3] = "Todas las respuestas son correctas";
 answers[35] = choices[35][3];
 units[35] = "100, 101, 107, 111";
 comments[35] = "Id Pregunta: 5459. Castilla y Le&oacute;n";


//  Id pregunta: 5567 AÃ±o de creación de pregunta: 2003-01-01
 questions[36]= "37)  &iquest;A qu&eacute; se dedica el grupo de trabajo 802.18 del IEEE?";
 choices[36]= new Array();
 choices[36][0] = "Grupo asesor en regulaci&oacute;n radioel&eacute;ctrica";
 choices[36][1] = "Grupo asesor en coexistencia de est&aacute;ndares 802";
 choices[36][2] = "Resilient Packet Ring";
 choices[36][3] = "Traspaso entre redes";
 answers[36] = choices[36][0];
 units[36] = "101";
 comments[36] = "Id Pregunta: 5567. ";


//  Id pregunta: 5797 AÃ±o de creación de pregunta: 2009-01-01
 questions[37]= "38)   Respecto al &aacute;mbito de actuaci&oacute;n en la Plataforma de validaci&oacute;n y firma electr&oacute;nica, @firma, del Ministerio de Administraciones P&uacute;blicas, se&ntilde;ale la opci&oacute;n correcta:";
 choices[37]= new Array();
 choices[37][0] = "Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos.";
 choices[37][1] = "Todas las Administraciones P&uacute;blicas y Organismos asociados.";
 choices[37][2] = "Se except&uacute;an las Entidades Locales, Diputaciones provinciales y Cabildos, que acceden a los servicios proporcionados por las Comunidades Aut&oacute;nomas de su &aacute;mbito territorial.";
 choices[37][3] = "Se ofrecen los servicios de validaci&oacute;n y firma a cualquier organizaci&oacute;n de car&aacute;cter p&uacute;blico y privado";
 answers[37] = choices[37][1];
 units[37] = "30";
 comments[37] = "Id Pregunta: 5797. MAP 2008 A2";


//  Id pregunta: 5839 AÃ±o de creación de pregunta: 2009-01-01
 questions[38]= "39)  &iquest;Cu&aacute;l de las siguientes afirmaciones es FALSA, en relaci&oacute;n con la implantaci&oacute;n del modelo EFQM en una organizaci&oacute;n de las Administraciones P&uacute;blicas?";
 choices[38]= new Array();
 choices[38][0] = "Se utiliza, en general, para la auto evaluaci&oacute;n de la organizaci&oacute;n y la puesta en marcha de planes de mejora";
 choices[38][1] = "Es una norma est&aacute;ndar desarrollada por la Comisi&oacute;n Europea";
 choices[38][2] = "Se compone de nueve criterios reunidos en dos grandes grupos: los criterios Agentes Facilitadores y los criterios Resultados";
 choices[38][3] = "La l&oacute;gica REDER se encuentra en el centro del modelo";
 answers[38] = choices[38][1];
 units[38] = "92";
 comments[38] = "Id Pregunta: 5839. MAP 2008 A1";


//  Id pregunta: 5912 AÃ±o de creación de pregunta: 2009-01-01
 questions[39]= "40)  El proyecto GNU fue concebido por:";
 choices[39]= new Array();
 choices[39][0] = "Tim O'Reilly";
 choices[39][1] = "Richard Stallman";
 choices[39][2] = "Tim Berners-Lee";
 choices[39][3] = "Robert Cailliau";
 answers[39] = choices[39][1];
 units[39] = "61";
 comments[39] = "Id Pregunta: 5912. MAP 2008 A1";


//  Id pregunta: 5937 AÃ±o de creación de pregunta: 2009-01-01
 questions[40]= "41)  Con la herramienta de virtualizaci&oacute;n Xen, &iquest;podemos virtualizar Microsoft Windows?";
 choices[40]= new Array();
 choices[40][0] = "S&iacute;, siempre que la CPU tenga soporte de x86 virtualization.";
 choices[40][1] = "S&iacute;, desde la versi&oacute;n 2.0";
 choices[40][2] = "S&iacute;, siempre que el sistema operativo anfitri&oacute;n tambi&eacute;n sea Microsoft Windows.";
 choices[40][3] = "S&iacute;, siempre que no queramos utilizar en el Windows hu&eacute;sped las Microsoft Enhanced Process Capabilities.";
 answers[40] = choices[40][0];
 units[40] = "119";
 comments[40] = "Id Pregunta: 5937. ";


//  Id pregunta: 5974 AÃ±o de creación de pregunta: 2010-01-01
 questions[41]= "42)  Dadas las siguientes relaciones: A={ax,ay,az,by,bz,cx,cy} y B={x,z} &iquest;Cu&aacute;l ser&iacute;a el resultado de la operaci&oacute;n A dividido entre B?";
 choices[41]= new Array();
 choices[41][0] = "{a,b,c}.";
 choices[41][1] = "{ax,az,bz,cx}.";
 choices[41][2] = "{ay,by,cy}.";
 choices[41][3] = "{a}.";
 answers[41] = choices[41][3];
 units[41] = "58";
 comments[41] = "Id Pregunta: 5974. TIC A 2009";


//  Id pregunta: 6088 AÃ±o de creación de pregunta: 2010-01-01
 questions[42]= "43)  &iquest;Cu&aacute;les de los siguientes est&aacute;ndares y protocolos relacionados con los Servicios Web son est&aacute;ndares W3C?";
 choices[42]= new Array();
 choices[42][0] = "XML, SOAP y WSDL";
 choices[42][1] = "XML, SOAP y UDDI";
 choices[42][2] = "XML, WSDL y UDDI";
 choices[42][3] = "SOAP, WSDL y UDDI";
 answers[42] = choices[42][0];
 units[42] = "51";
 comments[42] = "Id Pregunta: 6088. NULL";


//  Id pregunta: 6093 AÃ±o de creación de pregunta: 2010-01-01
 questions[43]= "44)  M&eacute;trica 3 propone el uso de la t&eacute;cnica de an&aacute;lisis coste/beneficio en:";
 choices[43]= new Array();
 choices[43][0] = "Los procesos de Planificaci&oacute;n y Desarrollo (subproceso ASI).";
 choices[43][1] = "Solamente en el proceso de Desarrollo (subprocesos EVS y ASI).";
 choices[43][2] = "Solamente en el proceso de Planificaci&oacute;n.";
 choices[43][3] = "Los procesos de Planificaci&oacute;n y Desarrollo (subproceso EVS).";
 answers[43] = choices[43][3];
 units[43] = "86";
 comments[43] = "Id Pregunta: 6093. TIC A 2009";


//  Id pregunta: 6160 AÃ±o de creación de pregunta: 2010-01-01
 questions[44]= "45)  Se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[44]= new Array();
 choices[44][0] = "Las MCUs permiten sesiones de videoconferencia multipunto con tres o mas localizaciones.";
 choices[44][1] = "Las soluciones de videoconferencia sin MCUs requieren un menor ancho de banda.";
 choices[44][2] = "En las soluciones de videoconferencia con MCU cada equipo env&iacute;a la informaci&oacute;n de audio y video con la MCU y esta la env&iacute;a al destinatario. ";
 choices[44][3] = "Las soluciones de videoconferencia sin MCU necesitan equipos con mayor coste.";
 answers[44] = choices[44][1];
 units[44] = "117";
 comments[44] = "Id Pregunta: 6160. ";


//  Id pregunta: 6204 AÃ±o de creación de pregunta: 2010-01-01
 questions[45]= "46)  Un requerimiento se define como una condici&oacute;n o necesidad de un usuario para resolver un problema o alcanzar un objetivo. Un requerimiento debe ser (se&ntilde;ale la correcta):";
 choices[45]= new Array();
 choices[45][0] = "Conciso, ambiguo, verificable";
 choices[45][1] = "Necesario, conciso, inconsistente";
 choices[45][2] = "Conciso, completo, verificable";
 choices[45][3] = "Completo, inconsistente, obvio";
 answers[45] = choices[45][2];
 units[45] = "78";
 comments[45] = "Id Pregunta: 6204. TICB-2009, bloque desarrollo";


//  Id pregunta: 6276 AÃ±o de creación de pregunta: 2010-01-01
 questions[46]= "47)  &iquest;Cu&aacute;les son las fases por ciclo del modelo de ciclo de vida en espiral?";
 choices[46]= new Array();
 choices[46][0] = "Evaluaci&oacute;n, Planificaci&oacute;n, An&aacute;lisis de riesgos e Ingenier&iacute;a";
 choices[46][1] = "Planificaci&oacute;n, Ingenier&iacute;a, An&aacute;lisis de riesgos y Evaluaci&oacute;n";
 choices[46][2] = "Planificaci&oacute;n, An&aacute;lisis de riesgos, Ingenier&iacute;a y Evaluaci&oacute;n";
 choices[46][3] = "Ingenier&iacute;a, Planificaci&oacute;n, An&aacute;lisis de riesgos y Evaluaci&oacute;n";
 answers[46] = choices[46][2];
 units[46] = "76";
 comments[46] = "Id Pregunta: 6276. ";


//  Id pregunta: 6414 AÃ±o de creación de pregunta: 2010-01-01
 questions[47]= "48)  Las posibilidades de usar el mecanismo de comprobaci&oacute;n de la legalidad del software, conocido como huella digital se clasifican en diferentes grupos que han aparecido a lo largo del tiempo , &iquest;Cu&aacute;l de los siguientes no es uno de ellos?";
 choices[47]= new Array();
 choices[47][0] = "Sim&eacute;trica";
 choices[47][1] = "Asim&eacute;trica";
 choices[47][2] = "An&oacute;nima";
 choices[47][3] = "Esteganogr&aacute;fica";
 answers[47] = choices[47][3];
 units[47] = "37";
 comments[47] = "Id Pregunta: 6414. NULL";


//  Id pregunta: 6445 AÃ±o de creación de pregunta: 2010-01-01
 questions[48]= "49)  La organizaci&oacute;n intergubernamental cuyo objetivo es coordinar el desarrollo y operabilidad de las redes y servicios de telecomunicaciones, se denomina:";
 choices[48]= new Array();
 choices[48][0] = "ITU";
 choices[48][1] = "IEC";
 choices[48][2] = "ETSI";
 choices[48][3] = "Ninguna de las anteriores";
 answers[48] = choices[48][0];
 units[48] = "42";
 comments[48] = "Id Pregunta: 6445. Castilla La Mancha 2009";


//  Id pregunta: 6490 AÃ±o de creación de pregunta: 2010-01-01
 questions[49]= "50)  Respecto al direccionamiento en el protocolo TCP, se puede afirmar que:";
 choices[49]= new Array();
 choices[49][0] = "La cabecera TCP incluye las direcciones IP origen y destino";
 choices[49][1] = "La cabecera TCP incluye las direcciones origen y destino y los puertos TCP origen y destino";
 choices[49][2] = "La cabecera TPC incluye los puertos TCP origen y destino";
 choices[49][3] = "La cabecera TCP no incluye ning&uacute;n elemento asociado al direccionamiento de las conexiones del nivel de transporte";
 answers[49] = choices[49][2];
 units[49] = "100";
 comments[49] = "Id Pregunta: 6490. Castilla La Mancha 2009";


//  Id pregunta: 6583 AÃ±o de creación de pregunta: 2010-01-01
 questions[50]= "51)  Entre los apartados m&iacute;nimos que debe tener un documento de seguridad est&aacute;n";
 choices[50]= new Array();
 choices[50][0] = "Identificaci&oacute;n del responsable de seguridad";
 choices[50][1] = "Control peri&oacute;dico del cumplimiento del documento";
 choices[50][2] = "Funciones y obligaciones del personal";
 choices[50][3] = "Todas las respuestas anteriores son correctas";
 answers[50] = choices[50][2];
 units[50] = "29";
 comments[50] = "Id Pregunta: 6583. NULL";


//  Id pregunta: 6605 AÃ±o de creación de pregunta: 2010-01-01
 questions[51]= "52)  Uno de los creadores originales del An&aacute;lisis Estructurado es";
 choices[51]= new Array();
 choices[51][0] = "Edward Yourdon";
 choices[51][1] = "Tom De Marco";
 choices[51][2] = "Tim Berners Lee";
 choices[51][3] = "James Rumbaugh";
 answers[51] = choices[51][1];
 units[51] = "81";
 comments[51] = "Id Pregunta: 6605. NULL";


//  Id pregunta: 6623 AÃ±o de creación de pregunta: 2010-01-01
 questions[52]= "53)  ISO 8402 define la calidad del software como:";
 choices[52]= new Array();
 choices[52][0] = "La capacidad de un conjunto de caracter&iacute;sticas intr&iacute;nsecas para satisfacer requisitos";
 choices[52][1] = "Conjunto de propiedades y caracter&iacute;sticas de un producto o servicio, que le confieren aptitud para satisfacer una serie de necesidades expl&iacute;citas o impl&iacute;citas";
 choices[52][2] = "Conformidad a los requisitos funcionales y prestaciones establecidas, a las normas de desarrollo expl&iacute;citamente documentadas y a las caracter&iacute;sticas impl&iacute;citas que seesperan de todo software desarrollado profesionalmente";
 choices[52][3] = "La norma ISO 8402 no es una norma de calidad";
 answers[52] = choices[52][1];
 units[52] = "87";
 comments[52] = "Id Pregunta: 6623. NULL";


//  Id pregunta: 7271 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)  Una conexi&oacute;n FTP puede funcionar en modo activo o pasivo. Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[53]= new Array();
 choices[53][0] = "El modo pasivo sirve, para que una vez iniciada una transferencia de archivos, poder iniciar otra transferencia sin tener que esperar a la finalizaci&oacute;n de la primera";
 choices[53][1] = "El modo pasivo es muy recomendable cuando el cliente tiene una conexi&oacute;n con cortafuegos, ya que en esta modalidad, tanto el canal de control como el canal de datos los abre el cliente";
 choices[53][2] = "En el modo pasivo se fuerza que, tanto el cliente como el servidor usen los puertos 20 y 21 para el env&iacute;o de los datos y la informaci&oacute;n de control rec&iacute;procamente y evitar problemas con los cortafuegos";
 choices[53][3] = "El modo pasivo, facilita que tanto la informaci&oacute;n de control como la de datos se transmita por el mismo puerto (el 21 en el servidor y cualquier puerto en el cliente)";
 answers[53] = choices[53][1];
 units[53] = "112";
 comments[53] = "Id Pregunta: 7271. NULL";


//  Id pregunta: 7293 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  Indique cu&aacute;l de las siguientes es una t&eacute;cnica utilizada en conversi&oacute;n texto-voz (TTS)";
 choices[54]= new Array();
 choices[54][0] = "S&iacute;ntesis por octetos";
 choices[54][1] = "S&iacute;ntesis por corpus";
 choices[54][2] = "Concatenaci&oacute;n de octetos";
 choices[54][3] = "Concatenaci&oacute;n de corpus";
 answers[54] = choices[54][1];
 units[54] = "94";
 comments[54] = "Id Pregunta: 7293. NULL";


//  Id pregunta: 7765 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)   Dentro del an&aacute;lisis orientado a objetos, la cualidad que se refiere al tiempo durante el cual un objeto permanece accesible en la memoria del ordenador (principal o secundaria), se denomina:";
 choices[55]= new Array();
 choices[55][0] = " Reusabilidad.";
 choices[55][1] = " Encapsulaci&oacute;n.";
 choices[55][2] = " Abstracci&oacute;n.";
 choices[55][3] = " Persistencia.";
 answers[55] = choices[55][3];
 units[55] = "NULL";
 comments[55] = "Id Pregunta: 7765. Map 2005";


//  Id pregunta: 7800 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)   &iquest;Cu&aacute;les de los siguientes ficheros de datos personales se rigen por su legislaci&oacute;n espec&iacute;fica y no por la LOPD?";
 choices[56]= new Array();
 choices[56][0] = " Los derivados del Registro Civil.";
 choices[56][1] = " Los ficheros establecidos para la investigaci&oacute;n del terrorismo y de formas graves de la delincuencia organizada.";
 choices[56][2] = " Los derivados de im&aacute;genes y sonidos obtenidos mediante la utilizaci&oacute;n de videoc&aacute;maras.";
 choices[56][3] = " Los ficheros de las Grandes Compa&ntilde;&iacute;as de Seguros, cuando lo comuniquen previamente a la Agencia de Protecci&oacute;n de Datos.";
 answers[56] = choices[56][0];
 units[56] = "NULL";
 comments[56] = "Id Pregunta: 7800. Map 2005";


//  Id pregunta: 8280 AÃ±o de creación de pregunta: 2011-01-01
 questions[57]= "58)  Si ejecutamos el comando telnet para acceder a un servidor que tenga configurado lo necesario, &iquest;Cu&aacute;l de las afirmaciones es correcta?:";
 choices[57]= new Array();
 choices[57][0] = "S&oacute;lo podemos conectarnos al &quot;well-known port&quot; 23 (telnet).";
 choices[57][1] = "Accediendo al puerto 25 (smtp) ser&iacute;a posible enviar e-mails.";
 choices[57][2] = "Accediendo al puerto 22 (ssh) es posible securizar la comunicaci&oacute;n.";
 choices[57][3] = "Accediendo a cualquier puerto diferente del 23 el servidor reconoce el protocolo y redirige la comunicaci&oacute;n al puerto 23(telnet).";
 answers[57] = choices[57][1];
 units[57] = "112";
 comments[57] = "Id Pregunta: 8280. Examen TIC A1 2010";


//  Id pregunta: 8354 AÃ±o de creación de pregunta: 2011-01-01
 questions[58]= "59)  A partir de ASP.NET 2.0, &iquest;en qu&eacute; carpeta se guarda el c&oacute;digo compilado para controles, componentes y otro c&oacute;digo que pueda ser referenciado por la aplicaci&oacute;n (los archivos dll)?";
 choices[58]= new Array();
 choices[58][0] = "App_Data.";
 choices[58][1] = "Bin.";
 choices[58][2] = "App_WebReferences";
 choices[58][3] = "Compilation";
 answers[58] = choices[58][1];
 units[58] = "59,115";
 comments[58] = "Id Pregunta: 8354. Examen TIC A2 2010";


//  Id pregunta: 8396 AÃ±o de creación de pregunta: 2011-01-01
 questions[59]= "60)  &iquest;Qu&eacute; tipo de nodo de control se emplea en un diagrama de actividades de UML 2.0 para indicar la sincronizaci&oacute;n de varios flujos concurrentes en uno solo?";
 choices[59]= new Array();
 choices[59][0] = "Divisi&oacute;n (fork node).";
 choices[59][1] = "Bifurcaci&oacute;n (decision node).";
 choices[59][2] = "Fusi&oacute;n (merge node).";
 choices[59][3] = "Union (join node).";
 answers[59] = choices[59][3];
 units[59] = "84";
 comments[59] = "Id Pregunta: 8396. Examen TIC A2 2010";


//  Id pregunta: 8419 AÃ±o de creación de pregunta: 2011-01-01
 questions[60]= "61)  &iquest;Qu&eacute; tecnolog&iacute;a inal&aacute;mbrica de corto alcance y alta frecuencia permite el intercambio de datos entre dispositivos, siendo su uso m&aacute;s frecuente el pago mediante el m&oacute;vil?";
 choices[60]= new Array();
 choices[60][0] = "Bluetooth";
 choices[60][1] = "PayPal Mobile";
 choices[60][2] = "NFC (Near Field Communication)";
 choices[60][3] = "3D Secure";
 answers[60] = choices[60][2];
 units[60] = "70, 107";
 comments[60] = "Id Pregunta: 8419. ";


//  Id pregunta: 8485 AÃ±o de creación de pregunta: 2011-01-01
 questions[61]= "62)  Se est&aacute; planificando la configuraci&oacute;n de los equipos de un centro de tratamiento de la informaci&oacute;n, seg&uacute;n un Enfoque basado en el riesgo. De acuerdo con la metodolog&iacute;a MAGERIT, la tarea de valoraci&oacute;n de salvaguardias se encuadra en el proceso:";
 choices[61]= new Array();
 choices[61][0] = "Gesti&oacute;n de riesgos.";
 choices[61][1] = "An&aacute;lisis de salvaguardias.";
 choices[61][2] = "An&aacute;lisis de riesgos.";
 choices[61][3] = "Gesti&oacute;n de salvaguardias.";
 answers[61] = choices[61][2];
 units[61] = "33";
 comments[61] = "Id Pregunta: 8485. Examen TIC A2 2010 interna";


//  Id pregunta: 8595 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  &iquest;A qu&eacute; corresponden las siglas LINQ?";
 choices[62]= new Array();
 choices[62][0] = "Lenguaje que permite enlaces unidireccionales y bid&iacute;reccionales a otro recurso (como archivos, im&aacute;genes, documentos, programas, etc.) dentro de documentos XML";
 choices[62][1] = "Soluci&oacute;n utilizada en el campo de la Business Intelligence cuyo objetivo es agilizar la consulta a grandes cantidades de datos";
 choices[62][2] = "Conjunto de extensiones a NET Framework que abarca operaciones de consulta integrada de lenguaje, conjuntos y transformaciones.";
 choices[62][3] = "Texto o im&aacute;genes en un sitio web que un usuario puede pinchar para tener acceso o conectar con otro documento.";
 answers[62] = choices[62][2];
 units[62] = "59,115";
 comments[62] = "Id Pregunta: 8595. Examen TIC A2 2010 interna";


//  Id pregunta: 8608 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  &iquest;En que norma ISO viene reflejada la usabilidad del software?";
 choices[63]= new Array();
 choices[63][0] = "ISO/IEC 9126";
 choices[63][1] = "ISO 8859";
 choices[63][2] = "ISO 14000";
 choices[63][3] = "ISO/IEC 14496";
 answers[63] = choices[63][0];
 units[63] = "39";
 comments[63] = "Id Pregunta: 8608. Examen TIC A2 2010 interna";


//  Id pregunta: 8680 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  a) A que componente del protocolo SIP corresponde la funci&oacute;n de &quot;aceptar peticiones de registros de usuarios y guardar la informaci&oacute;n de estas peticiones para suministrar un servicio de localizaci&oacute;n y traducci&oacute;n de direcciones en el dominio que controla&quot;:";
 choices[64]= new Array();
 choices[64][0] = "Proxy Server.";
 choices[64][1] = "Account Server.";
 choices[64][2] = "Redirect Server.";
 choices[64][3] = "Registrar Server.";
 answers[64] = choices[64][3];
 units[64] = "109";
 comments[64] = "Id Pregunta: 8680. Examen UPM A2 2011";


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


//  Id pregunta: 8757 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  En un esquema de multiprogramaci&oacute;n en memoria real, independientemente de que est&eacute; basado en particiones de tama&ntilde;o fijas o de tama&ntilde;o variable, &iquest;en qu&eacute; consiste el algoritmo del &quot;siguiente ajuste&quot; para elegir el tama&ntilde;o de la partici&oacute;n en la que alojar un programa?";
 choices[66]= new Array();
 choices[66][0] = "Se asigna el primer hueco que sea mayor al tama&ntilde;o deseado";
 choices[66][1] = "Se asigna el primer hueco que sea mayor al tama&ntilde;o deseado, pero dejando un apuntador al lugar en donde se asigno el &uacute;ltimo hueco";
 choices[66][2] = "Se asigna el hueco cuyo tama&ntilde;o exceda en la mayor cantidad al tama&ntilde;o deseado";
 choices[66][3] = "Se asigna el hueco cuyo tama&ntilde;o exceda en la menor cantidad al tama&ntilde;o deseado.";
 answers[66] = choices[66][1];
 units[66] = "52";
 comments[66] = "Id Pregunta: 8757. Examen TIC A2 2010 interna";


//  Id pregunta: 8874 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  En la tarea &ldquo;Valoraci&oacute;n de los Sistemas de Informaci&oacute;n actuales&rdquo;, encuadrado en la Planificaci&oacute;n de un Sistema de Informaci&oacute;n, participan seg&uacute;n M&eacute;trica versi&oacute;n 3:";
 choices[67]= new Array();
 choices[67][0] = "Consultores y Consultores Inform&aacute;ticos";
 choices[67][1] = "Consultores y Jefes de Proyecto";
 choices[67][2] = "Consultores Inform&aacute;ticos y Usuarios Expertos";
 choices[67][3] = "Analistas y Jefes de Proyecto";
 answers[67] = choices[67][0];
 units[67] = "86";
 comments[67] = "Id Pregunta: 8874. Analista Ayto. Madrid 2010";


//  Id pregunta: 8879 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  El c&oacute;digo objeto se obtiene a partir de:";
 choices[68]= new Array();
 choices[68][0] = "El c&oacute;digo fuente.";
 choices[68][1] = "El c&oacute;digo m&aacute;quina.";
 choices[68][2] = "El c&oacute;digo clase.";
 choices[68][3] = "El c&oacute;digo de enlazado.";
 answers[68] = choices[68][0];
 units[68] = "82";
 comments[68] = "Id Pregunta: 8879. Examen UPM A2 2011";


//  Id pregunta: 8999 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  &iquest;Qu&eacute; versiones de SNMP no implementan encriptaci&oacute;n de sus paquetes?";
 choices[69]= new Array();
 choices[69][0] = "v1 y v2";
 choices[69][1] = "v1 y v2c";
 choices[69][2] = "v1";
 choices[69][3] = "todas las versiones implementan encriptaci&oacute;n de sus paquetes";
 answers[69] = choices[69][1];
 units[69] = "104";
 comments[69] = "Id Pregunta: 8999. Examen UPM A2 2011";


//  Id pregunta: 9026 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  A efectos de facturaci&oacute;n, en una red corporativa donde exista una salida/entrada directa a la red de m&oacute;viles (enlace desde la red corporativa a la red de m&oacute;viles directo) para todas las llamadas desde/a m&oacute;viles:";
 choices[70]= new Array();
 choices[70][0] = "Se considerar&aacute;n tres tipos de tarifas en funci&oacute;n del origen y destino de la llamada corporativa: fijo-m&oacute;vil, m&oacute;vil-fijo y m&oacute;vil-m&oacute;vil.";
 choices[70][1] = "Todas las llamadas corporativas fijo-m&oacute;vil y m&oacute;vil-fijo tendr&aacute;n consideraci&oacute;n de m&oacute;vil-m&oacute;vil.";
 choices[70][2] = "Esta es un servicio que no lo dan los operadores de m&oacute;viles y es preciso salir a m&oacute;viles a trav&eacute;s de la red p&uacute;blica de conmutaci&oacute;n de circuitos.";
 choices[70][3] = "Todas las llamadas corporativas fijo-m&oacute;vil y m&oacute;vil-fijo tendr&aacute;n consideraci&oacute;n de fijo-fijo.";
 answers[70] = choices[70][1];
 units[70] = "103";
 comments[70] = "Id Pregunta: 9026. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9044 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  &iquest;Cu&aacute;l es la capa del modelo OSI equivalente a Ethernet";
 choices[71]= new Array();
 choices[71][0] = "Capa F&iacute;sica de Datos";
 choices[71][1] = "Capa de Red";
 choices[71][2] = "Capa de Enlace de Datos";
 choices[71][3] = "Capa de Transporte";
 answers[71] = choices[71][2];
 units[71] = "100";
 comments[71] = "Id Pregunta: 9044. ";


//  Id pregunta: 9095 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  Cuando un trabajador asalariado crea un programa de ordenador, en el ejercicio de sus funciones:";
 choices[72]= new Array();
 choices[72][0] = "Los derechos de explotaci&oacute;n pertenecen al trabajador salvo pacto en contrario";
 choices[72][1] = "Los derechos de explotaci&oacute;n pertenecen al empresario salvo pacto en contrario";
 choices[72][2] = "Los derechos morales pertenecen al trabajador salvo pacto en contrario";
 choices[72][3] = "Los derechos morales pertenecen al empresario salvo pacto en contrario";
 answers[72] = choices[72][1];
 units[72] = "36";
 comments[72] = "Id Pregunta: 9095. ";


//  Id pregunta: 9114 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  &iquest;Qu&eacute; se entiende como flujo de instrucciones?";
 choices[73]= new Array();
 choices[73][0] = "Conjunto de instrucciones en paralelo que son ejecutadas por varios procesadores.";
 choices[73][1] = "Conjunto de instrucciones secuenciales que son ejecutadas entre varios procesadores";
 choices[73][2] = "Flujo secuencial de instrucciones requeridas por el flujo de datos";
 choices[73][3] = "Conjunto de instrucciones secuenciales ejecutadas por un &uacute;nico procesador.";
 answers[73] = choices[73][3];
 units[73] = "45";
 comments[73] = "Id Pregunta: 9114. ";


//  Id pregunta: 9222 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  Identificar que protocolo no est&aacute; dise&ntilde;ado especificamente para la extensi&oacute;n de las SAN sobre protocolo IP";
 choices[74]= new Array();
 choices[74][0] = "iFTP";
 choices[74][1] = "iSCSCI";
 choices[74][2] = "FCIP";
 choices[74][3] = "iFCP";
 answers[74] = choices[74][0];
 units[74] = "48";
 comments[74] = "Id Pregunta: 9222. Examen TIC-A1 2011";


//  Id pregunta: 9265 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  En el editor &quot;vi&quot; el comando &quot;dd&quot; &iquest;Qu&eacute; funci&oacute;n realiza?";
 choices[75]= new Array();
 choices[75][0] = "No realiza ninguna acci&oacute;n.";
 choices[75][1] = "Borra la l&iacute;nea anterior.";
 choices[75][2] = "Borra la l&iacute;nea actual";
 choices[75][3] = "Borra la l&iacute;nea posterior.";
 answers[75] = choices[75][2];
 units[75] = "53";
 comments[75] = "Id Pregunta: 9265. Examen TICA2-2011";


//  Id pregunta: 9359 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  &iquest;Qu&eacute; tecnolog&iacute;a permite la multiplexaci&oacute;n de mayor n&uacute;mero de longitudes de onda por una &uacute;nica fibra &oacute;ptica?";
 choices[76]= new Array();
 choices[76][0] = "CWDM ";
 choices[76][1] = "SDH ";
 choices[76][2] = "WDM ";
 choices[76][3] = "DWDM ";
 answers[76] = choices[76][3];
 units[76] = "99";
 comments[76] = "Id Pregunta: 9359. Escala de Gesti&oacute;n de Sistemas de Sistemas de Informaci&oacute;n de la Xunta de Galicia. Acceso Libre 2011.";


//  Id pregunta: 9370 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  En una red metropolitana Ethernet basada en MPLS";
 choices[77]= new Array();
 choices[77][0] = "En la red del operador se transportan tramas de Ethernet sobre MPLS";
 choices[77][1] = "Las tramas de Ethernet se transportan sobre MPLS y en la red del operador se vuelve a utilizar Ethernet como tecnolog&iacute;a para el transporte de MPLS.";
 choices[77][2] = "En la salida de las diferentes redes de &aacute;rea local que componen la red metropolitana, se a&ntilde;ade una cabecera IP sobre la que se aplican las etiquetas MPLS.";
 choices[77][3] = "Ninguna de las respuestas es correcta.";
 answers[77] = choices[77][1];
 units[77] = "101";
 comments[77] = "Id Pregunta: 9370. ";


//  Id pregunta: 9414 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  Cu&aacute;l de las siguientes afirmaciones acerca de las m&eacute;tricas de productividad es incorrecta?";
 choices[78]= new Array();
 choices[78][0] = "Recogen la eficiencia del proceso del construcci&oacute;n de software";
 choices[78][1] = "Relacionan el software que se ha construido con el esfuerzo que ha costado elaborarlo";
 choices[78][2] = "Un ejemplo de m&eacute;trica de productividad son los Puntos de Funci&oacute;n";
 choices[78][3] = "Son en general indirectas, puesto que requieren de otras m&eacute;tricas previas para poder calcularse";
 answers[78] = choices[78][2];
 units[78] = "89";
 comments[78] = "Id Pregunta: 9414. NULL";


//  Id pregunta: 9437 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  &iquest;Cu&aacute;l de las siguientes metodolog&iacute;as NO se considera &aacute;gil?";
 choices[79]= new Array();
 choices[79][0] = "M&eacute;l&eacute;";
 choices[79][1] = "OMT";
 choices[79][2] = "DAS (Desarrollo Adaptativo de Software)";
 choices[79][3] = "DCC (Desarrollo Conducido por Caracter&iacute;sticas)";
 answers[79] = choices[79][1];
 units[79] = "79";
 comments[79] = "Id Pregunta: 9437. Examen AGE TIC A1 2011";


//  Id pregunta: 9894 AÃ±o de creación de pregunta: 2010-01-01
 questions[80]= "81)  Ordene de forma decreciente, en relaci&oacute;n al coste en hardware (puertas l&oacute;gicasequivalentes), las siguientes primitivas criptogr&aacute;ficas: funci&oacute;n resumen (ej. MD5 o SHA-1), cifrado asim&eacute;trico (ej. RSA o curvas el&iacute;pticas) y cifrado sim&eacute;trico (ej. AES o DES).";
 choices[80]= new Array();
 choices[80][0] = "Funci&oacute;n resumen, Cifrado asim&eacute;trico, Cifrado sim&eacute;trico.";
 choices[80][1] = "Funci&oacute;n resumen, Cifrado sim&eacute;trico, Cifrado asim&eacute;trico.";
 choices[80][2] = "Cifrado asim&eacute;trico, Cifrado sim&eacute;trico, Funci&oacute;n resumen.";
 choices[80][3] = "Cifrado asim&eacute;trico, Funci&oacute;n resumen, Cifrado sim&eacute;trico.";
 answers[80] = choices[80][3];
 units[80] = "111";
 comments[80] = "Id Pregunta: 9894. TIC A1, Examen 2013";


//  Id pregunta: 9896 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  Mediante la tecnolog&iacute;a EGPRS (Enhanced GPRS) se pueden llegar a conseguir velocidades de transmisi&oacute;n en modo paquetes de hasta";
 choices[81]= new Array();
 choices[81][0] = "384 kbps.";
 choices[81][1] = "115 kbps.";
 choices[81][2] = "2 Mbps.";
 choices[81][3] = "10 Mbps.";
 answers[81] = choices[81][0];
 units[81] = "108";
 comments[81] = "Id Pregunta: 9896. TIC A1, Examen 2013";


//  Id pregunta: 9918 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  En el modelo entidad-relaci&oacute;n extendido, tal y como se describe en el documento de T&eacute;cnicas y Pr&aacute;cticas de M&eacute;trica v3, un atributo es:";
 choices[82]= new Array();
 choices[82][0] = "La dependencia de existencia de un tipo de entidad d&eacute;bil respecto de uno fuerte.";
 choices[82][1] = "Una propiedad o caracter&iacute;stica de un tipo de entidad.";
 choices[82][2] = "El elemento que es a la vez un tipo de entidad y una relaci&oacute;n con otro tipo de entidad.";
 choices[82][3] = "El n&uacute;mero m&aacute;ximo de ocurrencias de cada tipo de entidad en una ocurrencia de la relaci&oacute;n.";
 answers[82] = choices[82][1];
 units[82] = "86, 58";
 comments[82] = "Id Pregunta: 9918. TIC A2, Examen 2013";


//  Id pregunta: 10123 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  Cu&aacute;l de los siguientes es un protocolo de encaminamiento externo:";
 choices[83]= new Array();
 choices[83][0] = "RIP";
 choices[83][1] = "OSPF";
 choices[83][2] = "BGP";
 choices[83][3] = "ISIS";
 answers[83] = choices[83][2];
 units[83] = "102";
 comments[83] = "Id Pregunta: 10123. ";


//  Id pregunta: 10170 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  &iquest;En qu&eacute; escenarios puede ser &uacute;til una vista materializada de Oracle?";
 choices[84]= new Array();
 choices[84][0] = "Funcionamiento de aplicaciones sin conexi&oacute;n";
 choices[84][1] = "Reducir tr&aacute;fico de red y desplazar carga soportada por un servidor de base de datos corporativo hacia servidores de bases de datos en delegaciones";
 choices[84][2] = "Replicar informaci&oacute;n restringi&eacute;ndola al &aacute;rea geogr&aacute;fica de inter&eacute;s";
 choices[84][3] = "Todas las anteriores";
 answers[84] = choices[84][3];
 units[84] = "58";
 comments[84] = "Id Pregunta: 10170. ";


//  Id pregunta: 10198 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Bluetooth 2.0 incluye un mecanismo llamado EDR (Enhanced Data Rate) para incrementar la velocidad de transmisi&oacute;n. Indique cual es la m&aacute;xima velocidad que se alcanza con este mecanismo:";
 choices[85]= new Array();
 choices[85][0] = "3 Mbps";
 choices[85][1] = "2 Mbps";
 choices[85][2] = "5 Mbps";
 choices[85][3] = "1 Mbps";
 answers[85] = choices[85][0];
 units[85] = "107";
 comments[85] = "Id Pregunta: 10198. 3 Mbps se alcanza usando la modulaci&oacute;n 8DPSK, mientras que con la modulaci&oacute;n pi/4-DQPSK se alcanzan 2 Mbps";


//  Id pregunta: 10225 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Cual de las siguientes sentencias captura el nombre de la carpeta en la que est&aacute; situado el archivo:";
 choices[86]= new Array();
 choices[86][0] = "String name = File.getParent(&quot;leeme.txt&quot;);";
 choices[86][1] = "String name = (new File(&quot;leeme.txt&quot;)).getParent();";
 choices[86][2] = "String name = (new File(&quot;c:\\leeme.txt&quot;)).getParentName();";
 choices[86][3] = "Directory dir = (new File(&ldquo;leeme.txt&rdquo;)).getParentDir();";
 answers[86] = choices[86][1];
 units[86] = "60";
 comments[86] = "Id Pregunta: 10225. NULL";


//  Id pregunta: 10235 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  Qu&eacute; m&eacute;todos se utilizan para obtener el valor de la cabecera de una petici&oacute;n HTTP:";
 choices[87]= new Array();
 choices[87][0] = "getHeaderValues() of HttpServletRequest";
 choices[87][1] = "getHeaderValue() of ServletRequest";
 choices[87][2] = "getHeader() of HttpServletRequest";
 choices[87][3] = "getHeader() of ServletRequest";
 answers[87] = choices[87][2];
 units[87] = "116";
 comments[87] = "Id Pregunta: 10235. NULL";


//  Id pregunta: 10268 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  Las infracciones leves de la Ley 15/1999:";
 choices[88]= new Array();
 choices[88][0] = "Pueden no acarrear sanci&oacute;n econ&oacute;mica y prescriben al a&ntilde;o";
 choices[88][1] = "Acarrean una sanci&oacute;n econ&oacute;mica m&iacute;nima de 900 euros y prescriben al a&ntilde;o";
 choices[88][2] = "Pueden no acarrear sanci&oacute;n econ&oacute;mica y prescriben a los seis meses";
 choices[88][3] = "Acarrean una sanci&oacute;n econ&oacute;mica m&iacute;nima de 900 euros y prescriben a los seis meses";
 answers[88] = choices[88][1];
 units[88] = "29";
 comments[88] = "Id Pregunta: 10268. Art&iacute;culos 45.1 y 47.1 de la Ley 15/1999";


//  Id pregunta: 10467 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  &iquest;Cu&aacute;l es el DOCTYPE que se usa en HTML5?";
 choices[89]= new Array();
 choices[89][0] = "&lt;!DOCTYPE html&gt;";
 choices[89][1] = "&lt;!DOCTYPE html5&gt;";
 choices[89][2] = "&lt;!DOCTYPE&gt; y &lt;!DOCTYPE html5&gt;";
 choices[89][3] = "&lt;!DOCTYPE html&gt; y &lt;!DOCTYPE html5&gt;";
 answers[89] = choices[89][0];
 units[89] = "69";
 comments[89] = "Id Pregunta: 10467. NULL";


//  Id pregunta: 10546 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  NO es uno de los 10 objetivos de la Estrategia 2011-2015 del Plan Avanza 2...";
 choices[90]= new Array();
 choices[90][0] = "Promover procesos innovadores TIC en las AAPP";
 choices[90][1] = "Incrementar el uso avanzado de servicios digitales por la ciudadan&iacute;a";
 choices[90][2] = "Promover el uso de las TIC en todos los niveles administrativos";
 choices[90][3] = "Extender el uso de soluciones TIC de negocio en la empresa";
 answers[90] = choices[90][2];
 units[90] = "30";
 comments[90] = "Id Pregunta: 10546. https://www.planavanza.es/informaciongeneral/estrategia2011/Paginas/Estrategia2011_2015.aspx";


//  Id pregunta: 11204 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;Cu&aacute;ntos objetivos tiene la Agenda Digital Espa&ntilde;ola?";
 choices[91]= new Array();
 choices[91][0] = "6";
 choices[91][1] = "7";
 choices[91][2] = "8";
 choices[91][3] = "9";
 answers[91] = choices[91][0];
 units[91] = "30";
 comments[91] = "Id Pregunta: 11204. ";


//  Id pregunta: 11243 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Un contrato de colaboraci&oacute;n p&uacute;blico-privada de 134.000 euros estar&aacute; sujeto a regulaci&oacute;n armonizada.";
 choices[92]= new Array();
 choices[92][0] = "En todo caso.";
 choices[92][1] = "Depender&aacute; del umbral establecido.";
 choices[92][2] = "S&oacute;lo si es del sector p&uacute;blico estatal.";
 choices[92][3] = "Depende de que los lotes no superen los 80.00 euros.";
 answers[92] = choices[92][0];
 units[92] = "41";
 comments[92] = "Id Pregunta: 11243. ";


//  Id pregunta: 11369 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;les de las siguientes actividades est&aacute;n incluidas como parte de la Transici&oacute;n del Servicio?: 1. Introducir nuevos servicios; 2. Retirar servicios; 3. Transferir servicios entre proveedores de servicios";
 choices[93]= new Array();
 choices[93][0] = "Solo 1 y 2";
 choices[93][1] = "Solo 2";
 choices[93][2] = "Todas las anteriores";
 choices[93][3] = "1 y 3";
 answers[93] = choices[93][2];
 units[93] = "98";
 comments[93] = "Id Pregunta: 11369. ";


//  Id pregunta: 11407 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes opciones es la jerarqu&iacute;a que utiliza el proceso de Gesti&oacute;n del Conocimiento?";
 choices[94]= new Array();
 choices[94][0] = "Sabidur&iacute;a (Wisdom), Informaci&oacute;n (Information), Datos (Data), Conocimiento (Knowledge)";
 choices[94][1] = "Datos (Data), Informaci&oacute;n (Information), Conocimiento (Knowledge), Sabidur&iacute;a (Wisdom)";
 choices[94][2] = "Conocimiento (Knowledge), Sabidur&iacute;a (Wisdom), Informaci&oacute;n (Information), Datos (Data)";
 choices[94][3] = "Informaci&oacute;n (Information), Datos (Data), Conocimiento (Knowledge), Sabidur&iacute;a (Wisdom)";
 answers[94] = choices[94][1];
 units[94] = "98";
 comments[94] = "Id Pregunta: 11407. ";


//  Id pregunta: 11438 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Cu&aacute;l de las siguientes cuestiones sobre la Ley 9/2014 es incorrecta respecto a los derechos de los usuarios?";
 choices[95]= new Array();
 choices[95][0] = "Derecho a acceder a los servicios de emergencias de forma gratuita.";
 choices[95][1] = "Derecho a la continuidad de servicio.";
 choices[95][2] = "Derecho a la facturaci&oacute;n detallada, clara y sin errores.";
 choices[95][3] = "Derecho al cambio de operador, con conservaci&oacute;n de los n&uacute;meros en el plazo de dos d&iacute;as laborables.";
 answers[95] = choices[95][3];
 units[95] = "110";
 comments[95] = "Id Pregunta: 11438. ";


//  Id pregunta: 11577 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  En una red H.323, &iquest;Qu&iacute;en tiene las funciones de DNS?";
 choices[96]= new Array();
 choices[96][0] = "MCU";
 choices[96][1] = "LMU";
 choices[96][2] = "GateKeeper";
 choices[96][3] = "GateControler";
 answers[96] = choices[96][2];
 units[96] = "117";
 comments[96] = "Id Pregunta: 11577. NULL";


//  Id pregunta: 11683 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Cuando el servidor web envia una respuesta, seg&uacute;n el modelo OSI los datos primero se encapsulan en un";
 choices[97]= new Array();
 choices[97][0] = "Paquete";
 choices[97][1] = "Segmento";
 choices[97][2] = "Trama";
 choices[97][3] = "Frame";
 answers[97] = choices[97][1];
 units[97] = "100";
 comments[97] = "Id Pregunta: 11683. NULL";


//  Id pregunta: 11691 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  En el contexto de NAT IP,&iquest; qu&eacute; direcci&oacute;n se usa para representar equipos internos en el exterior?";
 choices[98]= new Array();
 choices[98][0] = "Local interna";
 choices[98][1] = "Global interna";
 choices[98][2] = "Local externa";
 choices[98][3] = "Global interna";
 answers[98] = choices[98][1];
 units[98] = "111";
 comments[98] = "Id Pregunta: 11691. NULL";


//  Id pregunta: 11744 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Qu&eacute; dimensi&oacute;n de seguridad es obligatoria de evaluar para el responsable del servicio?&nbsp;  ";
 choices[99]= new Array();
 choices[99][0] = "autenticacion";
 choices[99][1] = "trazabilidad";
 choices[99][2] = "integridad";
 choices[99][3] = "disponibilidad";
 answers[99] = choices[99][3];
 units[99] = "43";
 comments[99] = "Id Pregunta: 11744. ";


