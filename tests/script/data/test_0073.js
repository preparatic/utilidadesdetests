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

//  Id pregunta: 30 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de las siguientes afirmaciones acerca de la auditor&iacute;a inform&aacute;tica es falsa?:";
 choices[0]= new Array();
 choices[0][0] = "La finalidad de la auditor&iacute;a inform&aacute;tica es emitir un juicio acerca del estado de los sistemas";
 choices[0][1] = "La auditor&iacute;a inform&aacute;tica llega siempre a una valoraci&oacute;n o diagn&oacute;stico final, positivo o negativo";
 choices[0][2] = "La auditor&iacute;a inform&aacute;tica propone acciones a realizar";
 choices[0][3] = "La auditor&iacute;a inform&aacute;tica analiza tanto la infraestructura f&iacute;sica y l&oacute;gica como la estructura organizativa";
 answers[0] = choices[0][1];
 units[0] = "31,32,33";
 comments[0] = "Id Pregunta: 30. ";


//  Id pregunta: 147 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  El la teor&iacute;a de la decisi&oacute;n multicriterio discreta, para el problema de la asignaci&oacute;n de pesos a criterios pueden utilizarse, entre otros, los m&eacute;todos:";
 choices[1]= new Array();
 choices[1][0] = "Lexicogr&aacute;fico y Promethee";
 choices[1][1] = "El m&eacute;todo de ponderaci&oacute;n lineal";
 choices[1][2] = "El m&eacute;todo Delphi y el de la entrop&iacute;a";
 choices[1][3] = "El m&eacute;todo de ponderaci&oacute;n";
 answers[1] = choices[1][2];
 units[1] = "34";
 comments[1] = "Id Pregunta: 147. NULL";


//  Id pregunta: 347 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  Con car&aacute;cter general, la transferencia de ficheros con datos de car&aacute;cter personal se puede hacer:";
 choices[2]= new Array();
 choices[2][0] = "A cualquier pa&iacute;s europeo y africano";
 choices[2][1] = "S&oacute;lo a Europa y Asia";
 choices[2][2] = "S&oacute;lo dentro de UE";
 choices[2][3] = "Con destino a pa&iacute;ses que proporcionen un nivel de protecci&oacute;n equiparable al que presta la LOPD";
 answers[2] = choices[2][3];
 units[2] = "29";
 comments[2] = "Id Pregunta: 347. ";


//  Id pregunta: 354 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  Las actuales teor&iacute;as del conflicto en las organizaciones parten de:";
 choices[3]= new Array();
 choices[3][0] = "Peter Drucker";
 choices[3][1] = "Mary Parker Follet";
 choices[3][2] = "John Simpson";
 choices[3][3] = "Adam Smith";
 answers[3] = choices[3][1];
 units[3] = "22";
 comments[3] = "Id Pregunta: 354. ";


//  Id pregunta: 369 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  Los ficheros automatizados cuyo objeto sea el almacenamiento de los datos contenidos en los informes personales de calificaci&oacute;n del personal militar profesional , seg&uacute;n la LOPD:";
 choices[4]= new Array();
 choices[4][0] = "No caen dentro del &aacute;mbito de aplicaci&oacute;n de la misma";
 choices[4][1] = "Caen dentro del &aacute;mbito de aplicaci&oacute;n de la misma";
 choices[4][2] = "Caen dentro del &aacute;mbito de aplicaci&oacute;n de la misma, pero no les ser&aacute; de aplicaci&oacute;n el r&eacute;gimen de protecci&oacute;n de datos";
 choices[4][3] = "Se regir&aacute;n por sus disposiciones espec&iacute;ficas";
 answers[4] = choices[4][3];
 units[4] = "29";
 comments[4] = "Id Pregunta: 369. ";


//  Id pregunta: 450 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  Se&ntilde;alar la opci&oacute;n falsa. Seg&uacute;n la Ley de Protecci&oacute;n de Datos no ser&aacute; necesario el consentimiento del afectado para la cesi&oacute;n de sus datos personales cuando:";
 choices[5]= new Array();
 choices[5][0] = "Hayan sido obtenidos de fuentes accesibles al p&uacute;blico";
 choices[5][1] = "La cesi&oacute;n es a los tribunales en el ejercicio de sus potestades";
 choices[5][2] = "No son utilizados para los fines para los que fueron recabados";
 choices[5][3] = "La cesi&oacute;n es para la realizaci&oacute;n de estudios epidemiol&oacute;gicos";
 answers[5] = choices[5][2];
 units[5] = "29";
 comments[5] = "Id Pregunta: 450. ";


//  Id pregunta: 558 AÃ±o de creación de pregunta: 2006-01-01
 questions[6]= "7)  Cualquier sistema de informaci&oacute;n:";
 choices[6]= new Array();
 choices[6][0] = "No es independiente de los objetivos de la organizaci&oacute;n.";
 choices[6][1] = "Debe estar interrelacionado con los dem&aacute;s sistemas de la organizaci&oacute;n.";
 choices[6][2] = "No es independiente de las estrategias de la organizaci&oacute;n.";
 choices[6][3] = "Son correctas todas las afirmaciones anteriores.";
 answers[6] = choices[6][3];
 units[6] = "21";
 comments[6] = "Id Pregunta: 558. ";


//  Id pregunta: 613 AÃ±o de creación de pregunta: 2006-01-01
 questions[7]= "8)  El primer resultado de la fase de Planificaci&oacute;n de una auditoria es la enunciaci&oacute;n de los objetivos y alcance de la auditor&iacute;a, que ser&aacute; recogido en un documento formal denominado:";
 choices[7]= new Array();
 choices[7][0] = "Plan de auditoria";
 choices[7][1] = "Informe de auditoria";
 choices[7][2] = "Plan de sistemas";
 choices[7][3] = "Plan estrategico";
 answers[7] = choices[7][0];
 units[7] = "31";
 comments[7] = "Id Pregunta: 613. ";


//  Id pregunta: 616 AÃ±o de creación de pregunta: 2006-01-01
 questions[8]= "9)  Entre los controles de acceso l&oacute;gico no se encuentra:";
 choices[8]= new Array();
 choices[8][0] = "Identificaci&oacute;n de las rutas de acceso l&oacute;gico.";
 choices[8][1] = "Prueba de los controles de acceso l&oacute;gico.";
 choices[8][2] = "Evaluaci&oacute;n de amenazas de acceso l&oacute;gico.";
 choices[8][3] = "Evaluaci&oacute;n del almacenamiento en el Centro de respaldo.";
 answers[8] = choices[8][3];
 units[8] = "32";
 comments[8] = "Id Pregunta: 616. ";


//  Id pregunta: 723 AÃ±o de creación de pregunta: 2004-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l de las siguientes denominaciones no se corresponde con ninguno de los tipos de Shell est&aacute;ndar en los sistemas operativos UNIX?";
 choices[9]= new Array();
 choices[9][0] = "Bourne Shell";
 choices[9][1] = "C Shell";
 choices[9][2] = "Xenix Shell";
 choices[9][3] = "Korn Shell";
 answers[9] = choices[9][2];
 units[9] = "53";
 comments[9] = "Id Pregunta: 723. Examen TIC MAP B 2004";


//  Id pregunta: 800 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Qu&eacute; versi&oacute;n de la API JDBC de Sun incorpora un  gestor de 'pool' de conexiones con el sistema gestor de base de datos?:";
 choices[10]= new Array();
 choices[10][0] = "JDBC 1.0";
 choices[10][1] = "JDBC 1.5";
 choices[10][2] = "JDBC 1.8";
 choices[10][3] = "JDBC 2.0";
 answers[10] = choices[10][3];
 units[10] = "57";
 comments[10] = "Id Pregunta: 800. ";


//  Id pregunta: 822 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Un programa shareware:";
 choices[11]= new Array();
 choices[11][0] = "Es software que podemos utilizar libremente";
 choices[11][1] = "Es software que podemos vender libremente";
 choices[11][2] = "Es software que podemos probar libremente";
 choices[11][3] = "No existe este concepto";
 answers[11] = choices[11][2];
 units[11] = "61";
 comments[11] = "Id Pregunta: 822. ";


//  Id pregunta: 890 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  &iquest;Cu&aacute;les de las siguientes son caracter&iacute;sticas de los sistemas expertos?:";
 choices[12]= new Array();
 choices[12][0] = "Conocimiento del sistema superior al del experto";
 choices[12][1] = "Procesado de informaci&oacute;n simb&oacute;lica y num&eacute;rica y capacidad de incorporar gradualmente conocimiento al sistema";
 choices[12][2] = "Funcionamiento no uniforme y de dif&iacute;cil reproducci&oacute;n";
 choices[12][3] = "Todas las anteriores";
 answers[12] = choices[12][1];
 units[12] = "64";
 comments[12] = "Id Pregunta: 890. ";


//  Id pregunta: 899 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  &iquest;Es posible arrancar en GNU/Linux desde CD?:";
 choices[13]= new Array();
 choices[13][0] = "No, tiene que estar en disco duro obligatoriamente";
 choices[13][1] = "S&iacute;, en todos los casos";
 choices[13][2] = "S&iacute;, dependiendo de la versi&oacute;n de GNU/Linux";
 choices[13][3] = "No, aunque se podr&iacute;a parchear el arranque para que mirase el CD primero";
 answers[13] = choices[13][2];
 units[13] = "53";
 comments[13] = "Id Pregunta: 899. ";


//  Id pregunta: 1039 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  El nombre del lenguaje Ada se debe a:";
 choices[14]= new Array();
 choices[14][0] = "Advanced Development of Algorithms";
 choices[14][1] = "Automatic Development and Adaptation of software";
 choices[14][2] = "Adaptative Digital Algorithms";
 choices[14][3] = "Es un homenaje a Ada Augusta Byron, considerada la primera programadora de la historia, que contribuy&oacute; econ&oacute;micamente y laboralmente al desarrollo de las primeras m&aacute;quinas diferenciales";
 answers[14] = choices[14][3];
 units[14] = "";
 comments[14] = "Id Pregunta: 1039. ";


//  Id pregunta: 1102 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  En Java:";
 choices[15]= new Array();
 choices[15][0] = "Los programas son applets, que se ejecutan en un navegador";
 choices[15][1] = "Los programas son de l&iacute;nea de comandos o basados en entornos de ventanas, como AWT o Swing";
 choices[15][2] = "Los programas son aplicaciones web de servidor";
 choices[15][3] = "Todas las anteriores respuestas son ciertas";
 answers[15] = choices[15][3];
 units[15] = "60";
 comments[15] = "Id Pregunta: 1102. NULL";


//  Id pregunta: 1251 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  La visi&oacute;n general que la empresa debe tener de toda la base de datos, corresponde al:";
 choices[16]= new Array();
 choices[16][0] = "Esquema conceptual";
 choices[16][1] = "Exquema externo";
 choices[16][2] = "Esquema interno";
 choices[16][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[16] = choices[16][0];
 units[16] = "57";
 comments[16] = "Id Pregunta: 1251. ";


//  Id pregunta: 1402 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Un sistema que reparte un quantum de procesador entre sus usuarios interactivos podr&iacute;a calificarse de:";
 choices[17]= new Array();
 choices[17][0] = "Tiempo compartido";
 choices[17][1] = "Tiempo real";
 choices[17][2] = "Batch";
 choices[17][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[17] = choices[17][0];
 units[17] = "52";
 comments[17] = "Id Pregunta: 1402. ";


//  Id pregunta: 1676 AÃ±o de creación de pregunta: 2004-01-01
 questions[18]= "19)  Indique la afirmaci&oacute;n correcta";
 choices[18]= new Array();
 choices[18][0] = "Una relaci&oacute;n est&aacute; en 4&ordf;FN si no incluye dependencias combinacionales";
 choices[18][1] = "Una relaci&oacute;n est&aacute; en 2&ordf;FN si no incluye grupos repetitivos y sus atributos no primarios tienen una dependencia plena respecto a cada una de las claves y no con partes de estas";
 choices[18][2] = "Una relaci&oacute;n est&aacute; en 1&ordf;FN si incluye alg&uacute;n grupo repetitivo";
 choices[18][3] = "Una relaci&oacute;n est&aacute; en 3&ordf;FN si y solo si est&aacute; en 1&ordf;FN pero no en 2&ordf;FN";
 answers[18] = choices[18][1];
 units[18] = "58";
 comments[18] = "Id Pregunta: 1676. ";


//  Id pregunta: 1768 AÃ±o de creación de pregunta: 2006-01-01
 questions[19]= "20)  Respecto al empaquetado de aplicaciones en JAVA ";
 choices[19]= new Array();
 choices[19][0] = "utiliza el algoritmo de compresi&oacute;n LZW";
 choices[19][1] = "Para facilitar el control y orden de todos estos ficheros es para lo que se han definido los ficheros JAR";
 choices[19][2] = "Un fichero JAR  puede incluir un subdirectorio de metainformaci&oacute;n llamado META-INF";
 choices[19][3] = "Todas son correctas";
 answers[19] = choices[19][3];
 units[19] = "60";
 comments[19] = "Id Pregunta: 1768. NULL";


//  Id pregunta: 1786 AÃ±o de creación de pregunta: 2006-01-01
 questions[20]= "21)  Los m&eacute;todos de busca heur&iacute;stica&hellip;";
 choices[20]= new Array();
 choices[20][0] = "Nunca encuentran la soluci&oacute;n &oacute;ptima";
 choices[20][1] = "Dan con la soluci&oacute;n &oacute;ptima en menos tiempo";
 choices[20][2] = "Dan con la soluci&oacute;n &oacute;ptima pero pueden ser m&aacute;s lentos que otros m&eacute;todos";
 choices[20][3] = "Permiten encontrar una buena soluci&oacute;n r&aacute;pidamente pero puede no ser la &oacute;ptima";
 answers[20] = choices[20][3];
 units[20] = "63";
 comments[20] = "Id Pregunta: 1786. ";


//  Id pregunta: 1803 AÃ±o de creación de pregunta: 2006-01-01
 questions[21]= "22)  &iquest;Qu&eacute; es moodle?";
 choices[21]= new Array();
 choices[21][0] = "Un sistema de gest&oacute;n de la ense&ntilde;anza de Software libre";
 choices[21][1] = "Un sistema de gesti&oacute;n de contenidos gratuito pero no libre";
 choices[21][2] = "Un buscador de Internet";
 choices[21][3] = "Un entorno de escritorio para sistemas Linux bajo tecnolog&iacute;a X Windows";
 answers[21] = choices[21][0];
 units[21] = "66";
 comments[21] = "Id Pregunta: 1803. Moodle tiene licencia GNU GPL.";


//  Id pregunta: 2073 AÃ±o de creación de pregunta: 2004-01-01
 questions[22]= "23)  &iquest;Cu&aacute;l de los siguientes no es un factor de calidad de SW, seg&uacute;n McCall?";
 choices[22]= new Array();
 choices[22][0] = "Integridad";
 choices[22][1] = "Sencillez";
 choices[22][2] = "Mantenibilidad";
 choices[22][3] = "Portabilidad";
 answers[22] = choices[22][1];
 units[22] = "88";
 comments[22] = "Id Pregunta: 2073. ";


//  Id pregunta: 2126 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?:";
 choices[23]= new Array();
 choices[23][0] = "M&Eacute;TRICA Versi&oacute;n 3 contempla s&oacute;lo desarrollos orientados a objetos";
 choices[23][1] = "El grupo encargado del Aseguramiento de la calidad debe ser independiente del equipo de desarrollo";
 choices[23][2] = "En M&Eacute;TRICA Versi&oacute;n 3 el mantenimiento es s&oacute;lo correctivo y adaptativo";
 choices[23][3] = "El particionamiento f&iacute;sico del sistema de informaci&oacute;n se lleva a cabo en el An&aacute;lisis del sistema de informaci&oacute;n";
 answers[23] = choices[23][1];
 units[23] = "86";
 comments[23] = "Id Pregunta: 2126. NULL";


//  Id pregunta: 2328 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  En la planificaci&oacute;n de un Sistema de Informaci&oacute;n:";
 choices[24]= new Array();
 choices[24][0] = "El horizonte temporal del nivel t&aacute;ctico se fija en 3-5 a&ntilde;os";
 choices[24][1] = "El nivel estrat&eacute;gico fija los objetivos/metas y plazos a largo plazo";
 choices[24][2] = "El nivel estrat&eacute;gico contiene informaci&oacute;n de los tres niveles inferiores";
 choices[24][3] = "El nivel t&aacute;ctico controla a los niveles inferiores y es el nexo de comunicaci&oacute;n externa de la empresa";
 answers[24] = choices[24][1];
 units[24] = "77";
 comments[24] = "Id Pregunta: 2328. ";


//  Id pregunta: 2354 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Entre las causas m&aacute;s habituales que provocan el descontento de los usuarios respecto de los productos de software obtenidos tenemos:";
 choices[25]= new Array();
 choices[25][0] = "Mantenimiento permanente.";
 choices[25][1] = "Coste cerrado del producto.";
 choices[25][2] = "Necesidades no satisfechas por la dificultad del producto para adaptarse a otros requerimientos.";
 choices[25][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;c&rsquo; son correctas.";
 answers[25] = choices[25][2];
 units[25] = "91";
 comments[25] = "Id Pregunta: 2354. ";


//  Id pregunta: 2373 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  Es falso que dependiendo del proyecto a que se aplique COCOMO, podemos clasificar los sistemas como:";
 choices[26]= new Array();
 choices[26][0] = "Org&aacute;nico";
 choices[26][1] = "Semi-org&aacute;nico";
 choices[26][2] = "Semi-acoplado";
 choices[26][3] = "Empotrado";
 answers[26] = choices[26][1];
 units[26] = "89";
 comments[26] = "Id Pregunta: 2373. NULL";


//  Id pregunta: 2455 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  Los Diagramas de Flujo de Datos (DFD) son parte del dise&ntilde;o de sistemas, pero &iquest;de qu&eacute; fase?:";
 choices[27]= new Array();
 choices[27][0] = "Dise&ntilde;o de prototipos";
 choices[27][1] = "Tests finales";
 choices[27][2] = "An&aacute;lisis de requerimientos";
 choices[27][3] = "Ninguno de ellos";
 answers[27] = choices[27][2];
 units[27] = "81";
 comments[27] = "Id Pregunta: 2455. ";


//  Id pregunta: 2458 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  Los elementos que determinan o componen la calidad del software son los siguientes:";
 choices[28]= new Array();
 choices[28][0] = "Factores externos o de usuarios relativos al comportamiento actual del software, a la facilidad de cambio y a su facilidad de conversi&oacute;n";
 choices[28][1] = "Criterios internos o de los realizadores, relativos a la forma y estructura de programas, datos y documentos";
 choices[28][2] = "M&eacute;tricas de cuantificaci&oacute;n de criterios y factores";
 choices[28][3] = "Todos los anteriores";
 answers[28] = choices[28][3];
 units[28] = "87.88";
 comments[28] = "Id Pregunta: 2458. NULL";


//  Id pregunta: 2521 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  &iquest;Cu&aacute;l de las siguientes denominaciones no se relaciona con un formato de imagen digital?:";
 choices[29]= new Array();
 choices[29][0] = "MrSID";
 choices[29][1] = "PSD";
 choices[29][2] = "PAL";
 choices[29][3] = "TIFF";
 answers[29] = choices[29][2];
 units[29] = "93";
 comments[29] = "Id Pregunta: 2521. NULL";


//  Id pregunta: 2573 AÃ±o de creación de pregunta: 2004-01-01
 questions[30]= "31)  En la calidad del Software basandonos en el coste de implantaci&oacute;n, la Teor&iacute;a de la Productividad dice:";
 choices[30]= new Array();
 choices[30][0] = "Un producto de calidad es mas caro de producir; el coste aumenta exponencialmente con el aumento de la calidad";
 choices[30][1] = "Un producto de calidad es mas barato de producir; el coste disminuye exponencialmente cuando disminuye la calidad";
 choices[30][2] = "Un producto de calidad es mas barato de producir; el coste disminuye exponencialmente con el aumento de la calidad";
 choices[30][3] = "Un producto de calidad es mas barato de producir; el coste aumenta exponencialmente con el aumento de la calidad";
 answers[30] = choices[30][2];
 units[30] = "87,88,92";
 comments[30] = "Id Pregunta: 2573. ";


//  Id pregunta: 2716 AÃ±o de creación de pregunta: 2004-01-01
 questions[31]= "32)  Comparando Java y C++, indique la afirmaci&oacute;n Incorrecta";
 choices[31]= new Array();
 choices[31][0] = "Java es debilmente tipado y C++ es fuertemente tipado";
 choices[31][1] = "Java es altamente portable y C++ tiene aspectos no portables";
 choices[31][2] = "Java es interpretado y C++ es compilado";
 choices[31][3] = "Java no tiene herencia multiple y C++ si";
 answers[31] = choices[31][0];
 units[31] = "82";
 comments[31] = "Id Pregunta: 2716. ";


//  Id pregunta: 2846 AÃ±o de creación de pregunta: 2006-01-01
 questions[32]= "33)  &iquest;Qu&eacute; formato de compresi&oacute;n no tiene p&eacute;rdidas?";
 choices[32]= new Array();
 choices[32][0] = "JPEG";
 choices[32][1] = "ECW";
 choices[32][2] = "Mrsid";
 choices[32][3] = "RLE";
 answers[32] = choices[32][3];
 units[32] = "93";
 comments[32] = "Id Pregunta: 2846. NULL";


//  Id pregunta: 2909 AÃ±o de creación de pregunta: 2009-01-01
 questions[33]= "34)  El impacto es, de acuerdo a MAGERIT v2:";
 choices[33]= new Array();
 choices[33][0] = "Da&ntilde;o sobre el activo derivado de la materializaci&oacute;n de la amenaza";
 choices[33][1] = "Lo que podr&iacute;a pasar";
 choices[33][2] = "Las respuestas 'a' y 'b' son correctas";
 choices[33][3] = "Lo que probablemente pase ";
 answers[33] = choices[33][2];
 units[33] = "33";
 comments[33] = "Id Pregunta: 2909. ";


//  Id pregunta: 3020 AÃ±o de creación de pregunta: 2004-01-01
 questions[34]= "35)  Los cortafuegos de nivel 7 de la capa OSI, esto es, nivel de aplicaci&oacute;n:";
 choices[34]= new Array();
 choices[34][0] = "No existen";
 choices[34][1] = "Tratan con n&uacute;meros de secuencias de paquetes TCP/IP";
 choices[34][2] = "Pueden ser considerados como filtros de paquetes";
 choices[34][3] = "Act&uacute;an a modo de proxy para las distintas aplicaciones que van a controlar";
 answers[34] = choices[34][3];
 units[34] = "111";
 comments[34] = "Id Pregunta: 3020. TAI 2004";


//  Id pregunta: 3106 AÃ±o de creación de pregunta: 2002-01-01
 questions[35]= "36)  Una de las caracter&iacute;sticas fundamentales de los sistemas de recuperaci&oacute;n de informaci&oacute;n es:";
 choices[35]= new Array();
 choices[35][0] = "Trabaja con informaci&oacute;n estructurada de tipo imagen";
 choices[35][1] = "Maneja grandes vol&uacute;menes de informaci&oacute;n no estructurada, combinando norm&aacute;lmente texto e im&aacute;genes";
 choices[35][2] = "Trabaja con informaci&oacute;n estructurada y vol&uacute;menes de informaci&oacute;n medio/bajos";
 choices[35][3] = "Su objeto es la recuperaci&oacute;n de ficheros y bases de datos";
 answers[35] = choices[35][1];
 units[35] = "21";
 comments[35] = "Id Pregunta: 3106. ";


//  Id pregunta: 3291 AÃ±o de creación de pregunta: 2002-01-01
 questions[36]= "37)  &iquest;Qu&eacute; estandariza el est&aacute;ndar MIME?:";
 choices[36]= new Array();
 choices[36][0] = "Protocolo de acceso al correo electr&oacute;nico";
 choices[36][1] = "Seguridad en Sistemas de correo electr&oacute;nico";
 choices[36][2] = "Transferencia de documentos multimedia a trav&eacute;s de correo electr&oacute;nico";
 choices[36][3] = "Agenda de direcciones de correo electr&oacute;nico";
 answers[36] = choices[36][2];
 units[36] = "106";
 comments[36] = "Id Pregunta: 3291. ";


//  Id pregunta: 3320 AÃ±o de creación de pregunta: 2002-01-01
 questions[37]= "38)  &iquest;Sabe qu&eacute; organismo defini&oacute; el est&aacute;ndar TCP/IP?:";
 choices[37]= new Array();
 choices[37][0] = "American National Standard Institute (ANSI)";
 choices[37][1] = "Departamento de Defensa de EE.UU.";
 choices[37][2] = "International Standards Organization (ISO)";
 choices[37][3] = "Institute for Electrical and Electronic Engineers (IEEE)";
 answers[37] = choices[37][1];
 units[37] = "100,112";
 comments[37] = "Id Pregunta: 3320. ";


//  Id pregunta: 3463 AÃ±o de creación de pregunta: 2002-01-01
 questions[38]= "39)  El protocolo utilizado para la comunicaci&oacute;n entre los nodos de una red GSM (MSC, HLR, VLR, ...) es el:";
 choices[38]= new Array();
 choices[38][0] = "ISUP";
 choices[38][1] = "MAP";
 choices[38][2] = "INAP";
 choices[38][3] = "RCP";
 answers[38] = choices[38][1];
 units[38] = "108";
 comments[38] = "Id Pregunta: 3463. ";


//  Id pregunta: 3578 AÃ±o de creación de pregunta: 2002-01-01
 questions[39]= "40)  En una red que usa conmutaci&oacute;n de paquetes:";
 choices[39]= new Array();
 choices[39][0] = "La longitud de la unidades de datos (paquetes) que puedan presentarse a la red es ilimitada";
 choices[39][1] = "Cuanto mayor sea la longitud de los paquetes, mayor ser&aacute; el tiempo de espera hasta su retransmisi&oacute;n, por lo que se procurar&aacute; que tama&ntilde;o de los paquetes sea el menor posible";
 choices[39][2] = "Si un mensaje supera la m&aacute;xima longitud permitida, se divide en unidades de datos m&aacute;s peque&ntilde;as";
 choices[39][3] = "La ITU-T en su recomendaci&oacute;n X.25 no propone ning&uacute;n m&aacute;ximo para la longitud de los paquetes";
 answers[39] = choices[39][2];
 units[39] = "101";
 comments[39] = "Id Pregunta: 3578. ";


//  Id pregunta: 4066 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  Que elemento de los siguientes no son propios de instalaciones de VoIP";
 choices[40]= new Array();
 choices[40][0] = "gatekeeper";
 choices[40][1] = "SIP";
 choices[40][2] = "router";
 choices[40][3] = "todos los anteriores";
 answers[40] = choices[40][3];
 units[40] = "117";
 comments[40] = "Id Pregunta: 4066. ";


//  Id pregunta: 4265 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  La configuraci&oacute;n RAID que ofrece la mejor relaci&oacute;n precio/rendimiento de entre las siguientes es:";
 choices[41]= new Array();
 choices[41][0] = "RAID 1";
 choices[41][1] = "RAID 2";
 choices[41][2] = "RAID 4";
 choices[41][3] = "RAID 5";
 answers[41] = choices[41][3];
 units[41] = "48";
 comments[41] = "Id Pregunta: 4265. ";


//  Id pregunta: 4287 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  Un programador tiene que codificar un procedimiento que act&uacute;a sobre un conjunto de datos de N elementos. Para ello conoce tres posibles algoritmos: Alfa, Beta y Gamma. El algoritmo Alfa tiene un rendimiento en tiempo de Nlog10N (logaritmo decimal). Beta rinde 2^N (dos elevado a N), y Gamma produce un rendimiento igual a N(N-1)/2. &iquest;Cu&aacute;l de los tres algoritmos es m&aacute;s eficiente si el resto de condiciones son id&eacute;nticas?";
 choices[42]= new Array();
 choices[42][0] = "Alfa.";
 choices[42][1] = "Beta.";
 choices[42][2] = "Gamma.";
 choices[42][3] = "No se puede determinar";
 answers[42] = choices[42][0];
 units[42] = "";
 comments[42] = "Id Pregunta: 4287. ";


//  Id pregunta: 4383 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  Cu&aacute;les de las siguientes pruebas no responde al tipo de prueba de caja negra?";
 choices[43]= new Array();
 choices[43][0] = "Particiones de equivalencia.";
 choices[43][1] = "Pruebas de comparaci&oacute;n.";
 choices[43][2] = "Prueba del camino b&aacute;sico.";
 choices[43][3] = "Pruebas de datos imposibles.";
 answers[43] = choices[43][2];
 units[43] = "87";
 comments[43] = "Id Pregunta: 4383. NULL";


//  Id pregunta: 4471 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  Seg&uacute;n indica m&eacute;trica V3, a la hora de planificar el desarrollo de un sistema de informaci&oacute;n, &iquest;que acci&oacute;n no tendr&iacute;a sentido?";
 choices[44]= new Array();
 choices[44][0] = "Dise&ntilde;o del modelo de sistemas de informaci&oacute;n.";
 choices[44][1] = "Definici&oacute;n de la arquitectura tecnol&oacute;gica.";
 choices[44][2] = "Dise&ntilde;o de los procedimientos de migraci&oacute;n.";
 choices[44][3] = "Identificaci&oacute;n de requisitos.";
 answers[44] = choices[44][2];
 units[44] = "86";
 comments[44] = "Id Pregunta: 4471. NULL";


//  Id pregunta: 4506 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  &iquest;Cual de los siguientes seria el encuadre org&aacute;nico preferible de la auditoria inform&aacute;tica interna?";
 choices[45]= new Array();
 choices[45][0] = "Se adscribir&iacute;a al Departamento de Sistemas de Informaci&oacute;n, ya que el personal especializado necesario solo esta disponible en ese Departamento";
 choices[45][1] = "Depender&iacute;a org&aacute;nicamente del Departamento de SI y funcionalmente del Departamento Financiero, por su labor auxiliar en la auditoria financiera de la organizaci&oacute;n";
 choices[45][2] = "No deber&iacute;a existir, ya que al ser interna seria imposible que fuera independiente con respecto a los auditados";
 choices[45][3] = "Se encuadrar&iacute;a dentro del staff, es decir, dentro de los &oacute;rganos de apoyo a la direcci&oacute;n existentes en Ia estructura organizativa, con el fin de garantizar la independencia necesaria";
 answers[45] = choices[45][3];
 units[45] = "31";
 comments[45] = "Id Pregunta: 4506. ";


//  Id pregunta: 4566 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  &iquest;Cual de los siguientes es el sistema de archivos de encriptaci&oacute;n para NTFS?";
 choices[46]= new Array();
 choices[46][0] = "SEE.";
 choices[46][1] = "SCF.";
 choices[46][2] = "EFS.";
 choices[46][3] = "no existe tal sistema de archivos.";
 answers[46] = choices[46][2];
 units[46] = "56";
 comments[46] = "Id Pregunta: 4566. ";


//  Id pregunta: 4640 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  Los diagramas de flujo de datos se componen de";
 choices[47]= new Array();
 choices[47][0] = "actores y casos de uso";
 choices[47][1] = "procesos y tablas";
 choices[47][2] = "entidad externa, proceso, almac&eacute;n de datos y flujo de datos";
 choices[47][3] = "modulo, conexi&oacute;n, par&aacute;metro, almac&eacute;n de datos y dispositivos f&iacute;sicos";
 answers[47] = choices[47][2];
 units[47] = "81";
 comments[47] = "Id Pregunta: 4640. ";


//  Id pregunta: 4953 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l es el organismo acreditador espa&ntilde;ol dentro de la Infraestructura de la Calidad?";
 choices[48]= new Array();
 choices[48][0] = "AENOR";
 choices[48][1] = "ENAC";
 choices[48][2] = "Cualquier organismo de certificaci&oacute;n.";
 choices[48][3] = "Cualquier organismo certificado por el CEN (Centro Europeo de Normalizaci&oacute;n).";
 answers[48] = choices[48][1];
 units[48] = "92";
 comments[48] = "Id Pregunta: 4953. Examen TIC B 2007";


//  Id pregunta: 5094 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  El &quot;modelo de informaci&oacute;n&quot; del directorio LDAP:";
 choices[49]= new Array();
 choices[49][0] = "Describe c&oacute;mo puede protegerse la informaci&oacute;n contenida en el directorio LDAP frente a accesos no autorizados";
 choices[49][1] = "Describe qu&eacute; operaciones pueden ser realizadas sobre la informaci&oacute;n almacenada en el directorio LDAP";
 choices[49][2] = "Define la estructura de la inforrmaci&oacute;n almacenada en el directorio LDAP";
 choices[49][3] = "Describe c&oacute;mo se organizan y referencian los datos";
 answers[49] = choices[49][2];
 units[49] = "74";
 comments[49] = "Id Pregunta: 5094. NULL";


//  Id pregunta: 5096 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  Seg&uacute;n la Directiva comunitaria 1999/93/CE de firma electr&oacute;nica, los servicios de certificaci&oacute;n pueden ser prestados:";
 choices[50]= new Array();
 choices[50][0] = "Solamente por personas f&iacute;sicas o jur&iacute;dicas privadas ";
 choices[50][1] = "Tanto por entidades p&uacute;blicas como por personas f&iacute;sicas o jur&iacute;dicas cuando as&iacute; se establezca de acuerdo con el Derecho nacional";
 choices[50][2] = "Solamente por entidades p&uacute;blicas";
 choices[50][3] = "Por entidades p&uacute;blicas, que expedir&aacute;n los certificados reconocidos, y por personas f&iacute;sicas, que expediran los certificados no reconocidos";
 answers[50] = choices[50][1];
 units[50] = "30";
 comments[50] = "Id Pregunta: 5096. NULL";


//  Id pregunta: 5148 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  Seg&uacute;n la Metodolog&iacute;a M&eacute;trica V3, &iquest;qu&eacute; interface tiene como finalidad principal la planificaci&oacute;n, el seguimiento y control de las actividades y de los recursos humanos y materiales que intervienen en el desarrollo de un Sistema de Informaci&oacute;n?";
 choices[51]= new Array();
 choices[51][0] = "Aseguramiento de la Calidad.";
 choices[51][1] = "Seguridad.";
 choices[51][2] = "Gesti&oacute;n de la Configuraci&oacute;n.";
 choices[51][3] = "Gesti&oacute;n de Proyectos.";
 answers[51] = choices[51][3];
 units[51] = "86";
 comments[51] = "Id Pregunta: 5148. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5227 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  El modelo Code and Fix:";
 choices[52]= new Array();
 choices[52][0] = "Modelo b&aacute;sico usado en los primeros tiempos desarrollo de SW compuesto por 2 fases, primero codificar y despu&eacute;s resolver los problemas del c&oacute;digo";
 choices[52][1] = "Tras varios ajustes, el c&oacute;digo se vuelve poco estructurado y los siguientes ajustes son muy costosos.";
 choices[52][2] = "Con frecuencia se ajustaba poco a las necesidades de los usuarios.";
 choices[52][3] = "Todas las anteriores son correctas";
 answers[52] = choices[52][3];
 units[52] = "76";
 comments[52] = "Id Pregunta: 5227. ";


//  Id pregunta: 5814 AÃ±o de creación de pregunta: 2009-01-01
 questions[53]= "54)  &iquest;Qu&eacute; deber&aacute; publicarse, en todo caso, en el perfil de contratante, seg&uacute;n el RD Legislativo 3/2011 de Contatos del Sector P&uacute;blico(art&iacute;culo 53.2)?";
 choices[53]= new Array();
 choices[53][0] = "Las adjudicaciones de los contratos";
 choices[53][1] = "Los anuncios de licitaci&oacute;n";
 choices[53][2] = "La adjudicaci&oacute;n provisional de los contratos";
 choices[53][3] = "Las licitaciones abiertas";
 answers[53] = choices[53][2];
 units[53] = "41";
 comments[53] = "Id Pregunta: 5814. NULL";


//  Id pregunta: 5818 AÃ±o de creación de pregunta: 2009-01-01
 questions[54]= "55)  Seg&uacute;n el RD Legislativo 3/2011 de Contratos del Sector p&uacute;blico, en su Disposici&oacute;n Adicional Decimosexta, las aplicaciones que se utilicen para efectuar las comunicaciones, notificaciones,y env&iacute;os documentales entre los licitadores y los &oacute;rganos de contrataci&oacute;n deber&aacute;n poder acreditar:";
 choices[54]= new Array();
 choices[54][0] = "La fecha y hora de su emisi&oacute;n o recepci&oacute;n,la integridad de su contenido, la confidencialidad, y el remitente y destinatario de las mismas";
 choices[54][1] = "La fecha y hora de su emisi&oacute;n o recepci&oacute;n,la integridad de su contenido y el remitente y destinatario de las mismas";
 choices[54][2] = "La fecha y hora de su recepci&oacute;n,la integridad de su contenido y el remitente de las mismas";
 choices[54][3] = "Ninguna de las anteriores es cierta";
 answers[54] = choices[54][1];
 units[54] = "41";
 comments[54] = "Id Pregunta: 5818. ";


//  Id pregunta: 5822 AÃ±o de creación de pregunta: 2009-01-01
 questions[55]= "56)  El Reglamento de desarrollo de la Ley Org&aacute;nica de Protecci&oacute;n de Datos, aprobado por Rel Decreto 1720/2007 de 21 de diciembre, indica que el plazo m&aacute;ximo para dictar y notificar resoluci&oacute;n acerca de la inscripci&oacute;n, modificaci&oacute;n o cancelaci&oacute;n de ficheros ser&aacute; de:";
 choices[55]= new Array();
 choices[55][0] = "Un mes";
 choices[55][1] = "Dos meses";
 choices[55][2] = "Tres meses";
 choices[55][3] = "Seis meses";
 answers[55] = choices[55][0];
 units[55] = "29";
 comments[55] = "Id Pregunta: 5822. MAP 2008 A1";


//  Id pregunta: 5848 AÃ±o de creación de pregunta: 2009-01-01
 questions[56]= "57)  En la t&eacute;cnica de estimaci&oacute;n de puntos funci&oacute;n, los puntos funci&oacute;n ajustados se obtienen a partir de los puntos funci&oacute;n no ajustados:";
 choices[56]= new Array();
 choices[56][0] = "Valorando la importancia en el proyecto de 14 caracter&iacute;sticas generales del sistema";
 choices[56][1] = "Multiplicando por un coeficiente que depende del lenguaje de programaci&oacute;n utilizado en el proyecto";
 choices[56][2] = "Teniendo en cuenta la valoraci&oacute;n de 5 factores de escala";
 choices[56][3] = "Teniendo en cuenta la valoraci&oacute;n de 17 factores de coste";
 answers[56] = choices[56][0];
 units[56] = "89";
 comments[56] = "Id Pregunta: 5848. NULL";


//  Id pregunta: 6073 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  En relaci&oacute;n con la TDT (Televisi&oacute;n Digital Terrestre), &iquest;como se denominan a las especificaciones t&eacute;cnicas aprobadas a nivel europeo para la emisi&oacute;n de TDT?";
 choices[57]= new Array();
 choices[57][0] = "TDT est&aacute;ndar";
 choices[57][1] = "DVB &ndash; T";
 choices[57][2] = "DVB - TDT";
 choices[57][3] = "Ninguna de las anteriores es correcta";
 answers[57] = choices[57][1];
 units[57] = "105";
 comments[57] = "Id Pregunta: 6073. ";


//  Id pregunta: 6261 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  Cu&aacute;l de las siguientes no es una norma b&aacute;sica en la auditor&iacute;a de los sistemas de informaci&oacute;n:";
 choices[58]= new Array();
 choices[58][0] = "Obtenci&oacute;n de evidencia suficiente.";
 choices[58][1] = "Estudio y evaluaci&oacute;n del sistema de control interno.";
 choices[58][2] = "Obtenci&oacute;n de evidencia adecuada.";
 choices[58][3] = "Todas las anteriores forman parte de las normas b&aacute;sicas en la auditor&iacute;a de los sistemas de informaci&oacute;n.";
 answers[58] = choices[58][3];
 units[58] = "31";
 comments[58] = "Id Pregunta: 6261. ";


//  Id pregunta: 6274 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  &iquest;Qui&eacute;n defini&oacute; el modelo de ciclo de vida en casacada?";
 choices[59]= new Array();
 choices[59][0] = "Roger Pressman";
 choices[59][1] = "Roger Smith";
 choices[59][2] = "Winston Royce ";
 choices[59][3] = "Carma McClure";
 answers[59] = choices[59][2];
 units[59] = "76";
 comments[59] = "Id Pregunta: 6274. ";


//  Id pregunta: 6355 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  Cuando el Regristro de Operadores constate que la notificaci&oacute;n, de un interesado en la explotaci&oacute;n de una determinada red o en la prestaci&oacute;n de un determinado serviciode comunicaciones electr&oacute;nicas, no re&uacute;ne los requisitos, dictar&aacute; resoluci&oacute;n motivada en un plazo m&aacute;ximo de:";
 choices[60]= new Array();
 choices[60][0] = "1 mes";
 choices[60][1] = "10 d&iacute;as";
 choices[60][2] = "15 d&iacute;as";
 choices[60][3] = "2 meses";
 answers[60] = choices[60][2];
 units[60] = "110";
 comments[60] = "Id Pregunta: 6355. Art&iacute;culo 7 Ley 9/2014";


//  Id pregunta: 6518 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  El API de Java para llamar a m&eacute;todos escritos en otros lenguajes es:";
 choices[61]= new Array();
 choices[61][0] = "JDI";
 choices[61][1] = "JCI";
 choices[61][2] = "JTEE";
 choices[61][3] = "JNI";
 answers[61] = choices[61][3];
 units[61] = "60";
 comments[61] = "Id Pregunta: 6518. NULL";


//  Id pregunta: 7139 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  La Ley Org&aacute;nica 15/1999 de Protecci&oacute;n de Datos de Car&aacute;cter Personal, marca el periodo de prescripci&oacute;n de una infracci&oacute;n grave en:";
 choices[62]= new Array();
 choices[62][0] = "1 a&ntilde;o";
 choices[62][1] = "2 a&ntilde;os";
 choices[62][2] = "6 meses";
 choices[62][3] = "10 meses";
 answers[62] = choices[62][1];
 units[62] = "29";
 comments[62] = "Id Pregunta: 7139. Examen TIC B 2009";


//  Id pregunta: 7286 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  &iquest;Cu&aacute;l de los siguientes elementos se puede decir que genuinamente forma parte de la web 2.0?";
 choices[63]= new Array();
 choices[63][0] = "Sindicaci&oacute;n de contenidos";
 choices[63][1] = "Sistemas de administraci&oacute;n de contenidos (CMS)";
 choices[63][2] = "P&aacute;ginas personales";
 choices[63][3] = "Directorios (taxonom&iacute;as)";
 answers[63] = choices[63][0];
 units[63] = "120";
 comments[63] = "Id Pregunta: 7286. Examen TIC B 2009";


//  Id pregunta: 7341 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  Se&ntilde;ale la afirmaci&oacute;n CORRECTA:";
 choices[64]= new Array();
 choices[64][0] = "DES es un algoritmo de cifrado asim&eacute;trico";
 choices[64][1] = "RSA es un algoritmo de cifrado sim&eacute;trico";
 choices[64][2] = "AES es implementable tanto en hardware como en software";
 choices[64][3] = "Todas las anteriores son FALSAS.";
 answers[64] = choices[64][2];
 units[64] = "72";
 comments[64] = "Id Pregunta: 7341. NULL";


//  Id pregunta: 7765 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)   Dentro del an&aacute;lisis orientado a objetos, la cualidad que se refiere al tiempo durante el cual un objeto permanece accesible en la memoria del ordenador (principal o secundaria), se denomina:";
 choices[65]= new Array();
 choices[65][0] = " Reusabilidad.";
 choices[65][1] = " Encapsulaci&oacute;n.";
 choices[65][2] = " Abstracci&oacute;n.";
 choices[65][3] = " Persistencia.";
 answers[65] = choices[65][3];
 units[65] = "NULL";
 comments[65] = "Id Pregunta: 7765. Map 2005";


//  Id pregunta: 8128 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)   En el conjunto de protocolos TCP/IP, &iquest;cu&aacute;ntos bits se reservan para identificar los n&uacute;meros de puerto en las cabeceras de control TCP y UDP?";
 choices[66]= new Array();
 choices[66][0] = " 16.";
 choices[66][1] = " 24.";
 choices[66][2] = " 32.";
 choices[66][3] = " 64.";
 answers[66] = choices[66][0];
 units[66] = "NULL";
 comments[66] = "Id Pregunta: 8128. Map 2008";


//  Id pregunta: 8219 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  En relaci&oacute;n a la seguridad en redes inal&aacute;mbricas, cu&aacute;l de las siguientes afirmaciones es FALSA:";
 choices[67]= new Array();
 choices[67][0] = "Entre los mecanismos b&aacute;sicos de seguridad aplicables en redes inal&aacute;mbricas, se encuentran: 1. Ocultaci&oacute;n del SSID (identificador de red). 2. Filtrado MAC. 3. Ajuste de potencia. 4. Uso de mecanismos de autenticaci&oacute;n y cifrado.";
 choices[67][1] = "El ataque DoS, &quot;Clear Channel Assesments&quot;, basado en falsear el mecanismo CCA, afecta a dispositivos 802.11a, 802.11b y 802.11g.";
 choices[67][2] = "Una RSN &quot;Robust Security Network&quot; es una red de seguridad en la que todas las asociaciones entre sus miembros se basan en fuertes mecanismos criptogr&aacute;ficos y de autenticaci&oacute;n.";
 choices[67][3] = "AirMagnet, Airodump, Aireplay, Kismet y Netstumbler, son herramientas inform&aacute;ticas que permiten estudiar redes inal&aacute;mbricas.";
 answers[67] = choices[67][1];
 units[67] = "107";
 comments[67] = "Id Pregunta: 8219. Examen TIC A1 2010";


//  Id pregunta: 8331 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  &iquest;Con qu&eacute; nombre se conoce a las herramientas CASE adaptables que permiten la definici&oacute;n de nuestra propia t&eacute;cnica de modelado,pudiendo definir nuestros propios elementos y s&iacute;mbolos de las notaciones a utilizar?";
 choices[68]= new Array();
 choices[68][0] = "Upper CASE (U-CASE)";
 choices[68][1] = "MetaCASE";
 choices[68][2] = "CAST (Computer-Aided Software Testing)";
 choices[68][3] = "IPSE (Integrated Programming Support Environment)";
 answers[68] = choices[68][1];
 units[68] = "91";
 comments[68] = "Id Pregunta: 8331. Examen TIC A2 2010";


//  Id pregunta: 8625 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  &iquest;Cu&aacute;l de los siguientes problemas afecta a los medios de transmisi&oacute;n?";
 choices[69]= new Array();
 choices[69][0] = "Reverberaci&oacute;n.";
 choices[69][1] = "Ruido blanco";
 choices[69][2] = "Afon&iacute;a";
 choices[69][3] = "Todos son posibles problemas de los medios de transmisi&oacute;n";
 answers[69] = choices[69][1];
 units[69] = "99";
 comments[69] = "Id Pregunta: 8625. Examen TIC A2 2010 interna";


//  Id pregunta: 8669 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  Cu&aacute;l de los siguientes elementos de seguridad opera en el nivel 3 del modelo OSI";
 choices[70]= new Array();
 choices[70][0] = "Proxy";
 choices[70][1] = "Firewall de filtrado de paquetes";
 choices[70][2] = "Antivirus";
 choices[70][3] = "Filtro anti SPAM";
 answers[70] = choices[70][1];
 units[70] = "111";
 comments[70] = "Id Pregunta: 8669. Examen UPM A2 2011";


//  Id pregunta: 8765 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  En relaci&oacute;n con los lenguajes de programaci&oacute;n, una constante puede pasarse como argumento a un procedimiento:";
 choices[71]= new Array();
 choices[71][0] = "No puede pasarse.";
 choices[71][1] = "S&oacute;lo por valor.";
 choices[71][2] = "S&oacute;lo por referencia.";
 choices[71][3] = "Por referencia y por valor.";
 answers[71] = choices[71][3];
 units[71] = "84";
 comments[71] = "Id Pregunta: 8765. Examen TIC A2 2010 interna";


//  Id pregunta: 8951 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  &iquest;Qu&eacute; situaci&oacute;n se da si la direcci&oacute;n virtual y su correspondiente f&iacute;sica coincide?";
 choices[72]= new Array();
 choices[72][0] = "El sistema carece de memoria virtual";
 choices[72][1] = "El sistema no es multiprogramado";
 choices[72][2] = "El espacio l&oacute;gico y el f&iacute;sico del proceso es el mismo";
 choices[72][3] = "Todas las anteriores son falsas";
 answers[72] = choices[72][2];
 units[72] = "53,54";
 comments[72] = "Id Pregunta: 8951. ";


//  Id pregunta: 9229 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  &ldquo;Un sistema distribuido es una colecci&oacute;n de computadores independientes que aparece ante los usuarios del sistema como una &uacute;nica computadora&rdquo;, es una definici&oacute;n de:";
 choices[73]= new Array();
 choices[73][0] = "Tanenbaum";
 choices[73][1] = "Sloman &amp; Kramer.";
 choices[73][2] = "Shanon";
 choices[73][3] = "No se corresponde a la definici&oacute;n de un sistema distribuido.";
 answers[73] = choices[73][0];
 units[73] = "50";
 comments[73] = "Id Pregunta: 9229. ";


//  Id pregunta: 9351 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  Respecto de RDSI, se puede afirmar:";
 choices[74]= new Array();
 choices[74][0] = "En la capa de enlace, el canal D hace uso del Procedimiento de Acceso al Enlace en el Canal D (o LAPD)";
 choices[74][1] = "En la capa de enlace, el canal B hace uso del Procedimiento de Acceso al Enlace en el Canal B (o LAPB)";
 choices[74][2] = "La transmisi&oacute;n d&uacute;plex en la capa f&iacute;sica se efect&uacute;a a 192 kbps mediante tramas de 40 bits cada una y una duraci&oacute;n de 275 us";
 choices[74][3] = "En la capa de red, se usa el protocolo LAPB, para gestionar las conexiones";
 answers[74] = choices[74][0];
 units[74] = "103";
 comments[74] = "Id Pregunta: 9351. Pag. 8 astic 2011";


//  Id pregunta: 9416 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  Cu&aacute;l de los siguientes no es un m&eacute;todo de an&aacute;lisis de Puntos de Funci&oacute;n?";
 choices[75]= new Array();
 choices[75][0] = "M&eacute;todo Albrecht";
 choices[75][1] = "M&eacute;todo MARK II";
 choices[75][2] = "La a) y la b) son correctas";
 choices[75][3] = "Ninguno de los anteriores";
 answers[75] = choices[75][2];
 units[75] = "89";
 comments[75] = "Id Pregunta: 9416. NULL";


//  Id pregunta: 9448 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  En el modelo de ciclo de vida en espiral, dentro de cada ciclo:";
 choices[76]= new Array();
 choices[76][0] = "La dimensi&oacute;n radial representa el avance y la angular el coste.";
 choices[76][1] = "La dimensi&oacute;n radial representa la complejidad y la angular el avance.";
 choices[76][2] = "La dimensi&oacute;n radial representa el coste y la angular la complejidad.";
 choices[76][3] = "La dimensi&oacute;n radial representa el coste y la angular el avance.";
 answers[76] = choices[76][3];
 units[76] = "76";
 comments[76] = "Id Pregunta: 9448. Examen AGE TIC A1 2011";


//  Id pregunta: 9683 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  &iquest;Cu&aacute;l de las siguientes opciones representa elementos dentro de un GIS?";
 choices[77]= new Array();
 choices[77][0] = "Hardware, software, georreferenciaci&oacute;n, equipo cient&iacute;fico y procedimientos.";
 choices[77][1] = "Hardware, software, datos geogr&aacute;ficos, equipo humano y capas tem&aacute;ticas.";
 choices[77][2] = "Proyecci&oacute;n, georreferenciaci&oacute;n, programas, datos espaciales y equipo cient&iacute;fico.";
 choices[77][3] = "Hardware, software, informaci&oacute;n geogr&aacute;fica, equipo humano y procedimientos.";
 answers[77] = choices[77][3];
 units[77] = "67";
 comments[77] = "Id Pregunta: 9683. NULL";


//  Id pregunta: 9732 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  Se&ntilde;ale la opci&oacute;n INCORRECTA:";
 choices[78]= new Array();
 choices[78][0] = "En dise&ntilde;o de programas, GRASP significa &quot;patrones generales de software para asignar responsabilidades&quot;, y describen los principios fundamentales de la asignaci&oacute;n de responsabilidades a objetos.";
 choices[78][1] = "La cohesi&oacute;n se define como el grado de interdependencia existente entre los m&oacute;dulos de un sistema.";
 choices[78][2] = "En la programaci&oacute;n modular lo m&aacute;s conveniente es que un m&oacute;dulo sea altamente cohesivo y con bajo acoplamiento.";
 choices[78][3] = "AOSD (Desarrollo Software Orientado a Aspectos) es una aproximaci&oacute;n al dise&ntilde;o de la arquitectura del sistema. Se caracteriza porque ofrece mecanismos para resolver problemas de c&oacute;digo disperso o enmara&ntilde;ado gracias a los aspectos.";
 answers[78] = choices[78][1];
 units[78] = "84";
 comments[78] = "Id Pregunta: 9732. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9749 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  &iquest;En qu&eacute; ley se exige que se establezcan las medidas necesarias para incentivar el acceso a las telecomunicaciones en lengua de signos espa&ntilde;ola?";
 choices[79]= new Array();
 choices[79][0] = "Ley 30/92";
 choices[79][1] = "Ley 27/2007";
 choices[79][2] = "Ley 11/2007";
 choices[79][3] = "Ley 34/2002";
 answers[79] = choices[79][1];
 units[79] = "39";
 comments[79] = "Id Pregunta: 9749. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9800 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  Seg&uacute;n la Ley 59/2003 de Firma electr&oacute;nica, los prestadores de servicios de certificaci&oacute;n que expidan certificados reconocidos deber&aacute;n conservar registrada por cualquier medio seguro toda la informaci&oacute;n y documentaci&oacute;n relativa a un certificado reconocido al menos durante:";
 choices[80]= new Array();
 choices[80][0] = "5 a&ntilde;os.";
 choices[80][1] = "10 a&ntilde;os.";
 choices[80][2] = "Permanentemente.";
 choices[80][3] = "15 a&ntilde;os.";
 answers[80] = choices[80][3];
 units[80] = "30";
 comments[80] = "Id Pregunta: 9800. Examen TIC-A2 2013-Libre (Ley 59/2003, art&iacute;culo 20.f)";


//  Id pregunta: 9801 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  Seg&uacute;n la Ley Org&aacute;nica 15/1999 de protecci&oacute;n de datos, cuando se trata de ficheros de titularidad p&uacute;blica, el plazo para comunicar a la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos la inscripci&oacute;n de ficheros en el Registro General (RGPD) es:";
 choices[81]= new Array();
 choices[81][0] = "No hace falta dicha comunicaci&oacute;n al tratarse de ficheros de titularidad p&uacute;blica. ";
 choices[81][1] = "De 10 d&iacute;as desde que se publica su norma o acuerdo de creaci&oacute;n en el diario oficial correspondiente. ";
 choices[81][2] = "De 3 meses desde que se publica su norma o acuerdo de creaci&oacute;n en el diario oficial correspondiente. ";
 choices[81][3] = "De 30 d&iacute;as desde que se publica su norma o acuerdo de creaci&oacute;n en el diario oficial correspondiente. ";
 answers[81] = choices[81][3];
 units[81] = "29";
 comments[81] = "Id Pregunta: 9801. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9899 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  Cual de los siguientes NO es un mecanismo de intercambio de informaci&oacute;n utilizable en una arquitectura distribuida";
 choices[82]= new Array();
 choices[82][0] = "mensajes XML sobre protocolo SMTP.";
 choices[82][1] = "mensajes SOAP sobre Servicios de Mensajes Java (JMS).";
 choices[82][2] = "OData.(Open Data Protocol)";
 choices[82][3] = "BPMN (Business Process Message Notation).";
 answers[82] = choices[82][3];
 units[82] = "50,51,79";
 comments[82] = "Id Pregunta: 9899. TIC A1, Examen 2013";


//  Id pregunta: 10090 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  Seg&uacute;n SCRUM, &iquest;se pueden modificar el sprintbacklog durante un sprint?";
 choices[83]= new Array();
 choices[83][0] = "No, nunca";
 choices[83][1] = "Solo el Product Owner";
 choices[83][2] = "Solo el Scrum Master";
 choices[83][3] = "Solo el Product Owner a petici&oacute;n de alg&uacute;n Stakeholder";
 answers[83] = choices[83][0];
 units[83] = "79";
 comments[83] = "Id Pregunta: 10090. NULL";


//  Id pregunta: 10118 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  Seleccionar la correcta:";
 choices[84]= new Array();
 choices[84][0] = "Tanto los router como los switches definen dominios de colisi&oacute;n y difusi&oacute;n";
 choices[84][1] = "Los router definen dominios de colisi&oacute;n pero no de difusi&oacute;n";
 choices[84][2] = "Los router definen dominios de difusi&oacute;n y de colisi&oacute;n";
 choices[84][3] = "Los switches definen dominios de colisi&oacute;n y difusi&oacute;n.";
 answers[84] = choices[84][2];
 units[84] = "102";
 comments[84] = "Id Pregunta: 10118. ";


//  Id pregunta: 10466 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  &iquest;Qu&eacute; tecnolog&iacute;as agrupa HTML5?";
 choices[85]= new Array();
 choices[85][0] = "HTML+Javascript";
 choices[85][1] = "HTML+CSS3+Flash";
 choices[85][2] = "HTML+CSS3+Javascript";
 choices[85][3] = "HTML+CSS3";
 answers[85] = choices[85][2];
 units[85] = "69";
 comments[85] = "Id Pregunta: 10466. NULL";


//  Id pregunta: 10494 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Seg&uacute;n la NTI de requisitos de conexi&oacute;n a la Red SARA. &iquest;Cual de los siguientes no es un tipo de Punto de Presencia?";
 choices[86]= new Array();
 choices[86][0] = "Area de Conexi&oacute;n de la AEAT";
 choices[86][1] = "Red sTESTA";
 choices[86][2] = "Ventanilla Unica empresarial de Melilla";
 choices[86][3] = "Banco de Espa&ntilde;a";
 answers[86] = choices[86][1];
 units[86] = "43";
 comments[86] = "Id Pregunta: 10494. Punto II.1.2 de la NTI de Requisitos de conexi&oacute;n a red sara. Las Ventanillas Unicas son tipos de PdP, pero la Ventanilla Unica de Melilla es un PdP dentro de ese tipo y no un tipo";


//  Id pregunta: 10498 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  En el &aacute;mbito de las redes e internet, &iquest;qu&eacute; significan las siglas TOR?";
 choices[87]= new Array();
 choices[87][0] = "The Outer Router";
 choices[87][1] = "The Ominous Router";
 choices[87][2] = "The Onion Router";
 choices[87][3] = "Ninguna es correcta";
 answers[87] = choices[87][2];
 units[87] = "112";
 comments[87] = "Id Pregunta: 10498. http://es.wikipedia.org/wiki/Tor";


//  Id pregunta: 10610 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  &iquest;Seg&uacute;n el Reglamento 910/2014 del Parlamento Europeo y del Consejo, cu&aacute;l de &eacute;stos son requisitos de seguridad de los TSP (Trust Service Providers)?";
 choices[88]= new Array();
 choices[88][0] = "Notificar las violaciones al MINETUR y el organismo correspondiente en m&aacute;ximo 24 horas.";
 choices[88][1] = "Mantener una base de datos de certificados";
 choices[88][2] = "Publicar las revocaciones en un m&aacute;ximo de 24 horas tras la solicitud.";
 choices[88][3] = "Todas las anteriores.";
 answers[88] = choices[88][0];
 units[88] = "74";
 comments[88] = "Id Pregunta: 10610. B y C son exclusivamente para QTSPs";


//  Id pregunta: 10758 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  &iquest;Cu&aacute;l es la gu&iacute;a referente a &quot;Auditor&iacute;a del Esquema Nacional de Seguridad&quot;?";
 choices[89]= new Array();
 choices[89][0] = "CCN-STIC-801";
 choices[89][1] = "CCN-STIC-802";
 choices[89][2] = "CCN-STIC-803";
 choices[89][3] = "CCN-STIC-804";
 answers[89] = choices[89][1];
 units[89] = "43";
 comments[89] = "Id Pregunta: 10758. ";


//  Id pregunta: 10778 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  Seg&uacute;n se establece en la Ley 15/1999, en su art&iacute;culo 31 acerca del censo promocional, indique cu&aacute;l es el plazo de vigencia del uso de cada lista del censo promocional tal que concluido dicho plazo la lista perder&aacute; su car&aacute;cter de fuente de acceso p&uacute;blico:";
 choices[90]= new Array();
 choices[90][0] = "6 meses.";
 choices[90][1] = "1 a&ntilde;o.";
 choices[90][2] = "2 a&ntilde;os.";
 choices[90][3] = "5 a&ntilde;os.";
 answers[90] = choices[90][1];
 units[90] = "29";
 comments[90] = "Id Pregunta: 10778. Examen GSI 2014";


//  Id pregunta: 11098 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  De acuerdo con la LOPD, seleccione la respuesta verdadera";
 choices[91]= new Array();
 choices[91][0] = "Iniciar la recogida de datos de car&aacute;cter personal sin autorizaci&oacute;n de disposici&oacute;n general publicada en el BOE o diario oficial correspondiente es una infracci&oacute;n GRAVE.";
 choices[91][1] = "No atender, por motivos formales, la solicitud del interesado de rectificaci&oacute;n o cancelaci&oacute;n de los datos personales objeto de tratamiento cuando legalmente proceda es una infracci&oacute;n MUY GRAVE";
 choices[91][2] = "Las respuestas a) y b) son falsas";
 choices[91][3] = "Las respuestas a) y b) son verdaderas";
 answers[91] = choices[91][0];
 units[91] = "29";
 comments[91] = "Id Pregunta: 11098. ";


//  Id pregunta: 11146 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l de los siguientes cifrados sim&eacute;tricos es de flujo?";
 choices[92]= new Array();
 choices[92][0] = "RC-4";
 choices[92][1] = "IDEA";
 choices[92][2] = "RC-5";
 choices[92][3] = "AES";
 answers[92] = choices[92][0];
 units[92] = "72";
 comments[92] = "Id Pregunta: 11146. ";


//  Id pregunta: 11149 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Qu&eacute; versi&oacute;n del PKCS define una interfaz para el acceso a dispositivos que contienen informaci&oacute;n criptogr&aacute;fica como Tokens o Tarjetas?";
 choices[93]= new Array();
 choices[93][0] = "PKCS 1";
 choices[93][1] = "PKCS 7";
 choices[93][2] = "PCKCS 9";
 choices[93][3] = "PKCS 11";
 answers[93] = choices[93][3];
 units[93] = "73";
 comments[93] = "Id Pregunta: 11149. ";


//  Id pregunta: 11239 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  El &aacute;mbito subjetivo del texto refundido de la ley de contratos del sector p&uacute;blico:";
 choices[94]= new Array();
 choices[94][0] = "La ley aplica a la totalidad del sector p&uacute;blico todos sus articulos.";
 choices[94][1] = "Aquellos expedientes de contrataci&oacute;n incoados por las Administraciones P&uacute;blicas son de naturaleza administrativa.";
 choices[94][2] = "Todos los contratos de los Poderes Adjudicadores que no son Administraci&oacute;n P&uacute;blica sujetos a la directiva europea son considerados contratos SARA, independientemente de su cuant&iacute;a.";
 choices[94][3] = "Ninguna es verdadera.";
 answers[94] = choices[94][1];
 units[94] = "41";
 comments[94] = "Id Pregunta: 11239. ";


//  Id pregunta: 11299 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  De entre las siguientes, escoge la falsa en relaci&oacute;n con SQL:";
 choices[95]= new Array();
 choices[95][0] = "Las relaciones participantes en un producto cartesiano, deben tener el mismo grado.";
 choices[95][1] = "Para todas las operaciones de &aacute;lgebra relacional, las 2 relaciones deben tener el mismo grado, excepto en el producto cartesiano.";
 choices[95][2] = "El SQL es estandarizado por ISO/IEC JTC1 Subcomit&eacute; 21.";
 choices[95][3] = "En SQL embebido los c&oacute;digos de retorno con signo negativo son errores.";
 answers[95] = choices[95][0];
 units[95] = "58";
 comments[95] = "Id Pregunta: 11299. El producto cartesiano es la &uacute;nica operaci&oacute;n del &aacute;lgebra relacional, que no necesita que las relaciones tengan el mismo grado, es decir el mismo n&uacute;mero de columnas.";


//  Id pregunta: 11342 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  De las siguientes opciones, se&ntilde;ale cu&aacute;l es la correcta para la transformaci&oacute;n de una relaci&oacute;n 1:1";
 choices[96]= new Array();
 choices[96][0] = "Se crea una clave for&aacute;nea en una de ellas que referencia a la clave de la otra";
 choices[96][1] = "La relaci&oacute;n se convierte en tabla con cada una de las claves m&aacute;s las propiedades de la relaci&oacute;n";
 choices[96][2] = "Podr&iacute;a elegirse entre las opciones anteriores";
 choices[96][3] = "Ninguna de las anteriores";
 answers[96] = choices[96][0];
 units[96] = "57";
 comments[96] = "Id Pregunta: 11342. ";


//  Id pregunta: 11402 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes es la descripci&oacute;n correcta de las cuatro Ps del Dise&ntilde;o del Servicio?";
 choices[97]= new Array();
 choices[97][0] = "Un proceso de cuatro pasos para el dise&ntilde;o de una gesti&oacute;n del servicio efectiva";
 choices[97][1] = "Una definici&oacute;n del personal y los productos requeridos para un dise&ntilde;o exitoso";
 choices[97][2] = "Una serie de preguntas que deben hacerse cuando se revisan las especificaciones de dise&ntilde;o";
 choices[97][3] = "Cuatro &aacute;reas principales que deben ser consideradas durante el Dise&ntilde;o del Servicio";
 answers[97] = choices[97][3];
 units[97] = "98";
 comments[97] = "Id Pregunta: 11402. ";


//  Id pregunta: 11440 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Seg&uacute;n la Ley 9/2014, los abonados podr&aacute;n conservar los n&uacute;meros que les hayan sido asignados:";
 choices[98]= new Array();
 choices[98][0] = "Siempre que se mantenga el mismo operador.";
 choices[98][1] = "Sin ning&uacute;n requisito previo.";
 choices[98][2] = "Previa solicitud.";
 choices[98][3] = "Seg&uacute;n fije la CNMC mediante resoluci&oacute;n.";
 answers[98] = choices[98][2];
 units[98] = "110";
 comments[98] = "Id Pregunta: 11440. ";


//  Id pregunta: 11632 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Se&ntilde;ale cu&aacute;l no es una metodolog&iacute;a &aacute;gil:";
 choices[99]= new Array();
 choices[99][0] = "Lean Programming";
 choices[99][1] = "OpenUP";
 choices[99][2] = "MSF";
 choices[99][3] = "AUP";
 answers[99] = choices[99][2];
 units[99] = "79";
 comments[99] = "Id Pregunta: 11632. ";


