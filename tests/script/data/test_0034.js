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

//  Id pregunta: 111 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  Cuando una certificaci&oacute;n es realizada por un organismo de la Administraci&oacute;n, aquella se denomina:";
 choices[0]= new Array();
 choices[0][0] = "Prueba de conformidad";
 choices[0][1] = "Normalizaci&oacute;n";
 choices[0][2] = "Homologaci&oacute;n";
 choices[0][3] = "Especificaci&oacute;n";
 answers[0] = choices[0][2];
 units[0] = "42";
 comments[0] = "Id Pregunta: 111. ";


//  Id pregunta: 126 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  El an&aacute;lisis DAFO mide en una empresa:";
 choices[1]= new Array();
 choices[1][0] = "Decisiones, An&aacute;lisis, Fuerzas, Oportunidades";
 choices[1][1] = "Debilidades, Adaptaciones, Fallos, Opciones";
 choices[1][2] = "Decisiones, Amenazas, Fallos, Oportunidades";
 choices[1][3] = "Debilidades, Amenazas, Fuerzas, Oportunidades";
 answers[1] = choices[1][3];
 units[1] = "22";
 comments[1] = "Id Pregunta: 126. NULL";


//  Id pregunta: 152 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  El modelo modificado en 6 etapas de Nolan:";
 choices[2]= new Array();
 choices[2][0] = "Iniciaci&oacute;n, expansi&oacute;n, control, integraci&oacute;n, administraci&oacute;n de datos y madurez";
 choices[2][1] = "Iniciaci&oacute;n, contagio, control, integraci&oacute;n, almacenamiento de datos y madurez";
 choices[2][2] = "Iniciaci&oacute;n, contagio, control, integraci&oacute;n, administraci&oacute;n de datos y madurez";
 choices[2][3] = "Iniciaci&oacute;n, expansi&oacute;n, control, integraci&oacute;n, almacenamiento de datos y madurez";
 answers[2] = choices[2][2];
 units[2] = "22";
 comments[2] = "Id Pregunta: 152. Nolan";


//  Id pregunta: 177 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  En el &aacute;rea de los sistemas de informaci&oacute;n, &iquest;cu&aacute;l es el significado de las siglas MIS?:";
 choices[3]= new Array();
 choices[3][0] = "Manufacturing In Sequence";
 choices[3][1] = "Manufacturing Information System";
 choices[3][2] = "Management Information System";
 choices[3][3] = "Modelling Input System";
 answers[3] = choices[3][2];
 units[3] = "21";
 comments[3] = "Id Pregunta: 177. ";


//  Id pregunta: 208 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  En general la portabilidad de aplicaciones no exige:";
 choices[4]= new Array();
 choices[4][0] = "Utilizaci&oacute;n de lenguajes de programaci&oacute;n estandarizados";
 choices[4][1] = "Limitaci&oacute;n de las llamadas al S.O. desde el marco de una API estandarizada";
 choices[4][2] = "Limitaci&oacute;n de la interacci&oacute;n directa entre los programas y los componentes f&iacute;sicos";
 choices[4][3] = "Utilizaci&oacute;n de microprocesadores de similares caracter&iacute;sticas";
 answers[4] = choices[4][3];
 units[4] = "40";
 comments[4] = "Id Pregunta: 208. ";


//  Id pregunta: 326 AÃ±o de creación de pregunta: 2004-01-01
 questions[5]= "6)  Cuando utilizamos las siglas SSD-AAPP, nos estamos refiriendo a:";
 choices[5]= new Array();
 choices[5][0] = "Un sistema de informaci&oacute;n dedicado al an&aacute;lisis de redes de comunicaciones.";
 choices[5][1] = "Una aplicaci&oacute;n inform&aacute;tica dise&ntilde;ada para ayudar a la elecci&oacute;n en la contrataci&oacute;n de bienes o servicios inform&aacute;ticos.";
 choices[5][2] = "Una aplicaci&oacute;n inform&aacute;tica dise&ntilde;ada para decidir si debemos contratar un desarrollo a una empresa externa o hacerlo con medios propios.";
 choices[5][3] = "Ninguna de las anteriores";
 answers[5] = choices[5][1];
 units[5] = "34";
 comments[5] = "Id Pregunta: 326. Modificado enunciado (antes SSD-CIABSI) por JCED Preparatic XVII";


//  Id pregunta: 387 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  No es cierto respecto a las t&eacute;cnicas PERT que:";
 choices[6]= new Array();
 choices[6][0] = "fueron desarrolladas a finales de los 50s para el programa I+D de los misiles bal&iacute;siticos Polaris";
 choices[6][1] = "permiten representar tanto las dependencias entre tareas como las escalas temporales de las mismas";
 choices[6][2] = "est&aacute;n muy orientadas al plaza de ejecuci&oacute;n, con poca consideraci&oacute;n al coste";
 choices[6][3] = "est&aacute;n orientadas a los sucesos o eventos, y normalmente trabajan con distribuciones de probabilidad para las duraciones";
 answers[6] = choices[6][1];
 units[6] = "28";
 comments[6] = "Id Pregunta: 387. ";


//  Id pregunta: 492 AÃ±o de creación de pregunta: 2003-01-01
 questions[7]= "8)  &iquest;Cuales son las t&eacute;cnicas utilizadas para la auditor&iacute;a de econom&iacute;a de los sistemas de informaci&oacute;n?";
 choices[7]= new Array();
 choices[7][0] = "Cuestionarios y entrevistas";
 choices[7][1] = "An&aacute;lisis  de inversiones e inventario de sistemas de informaci&oacute;n";
 choices[7][2] = "Informes econ&oacute;micos de inversiones en sistemas de informaci&oacute;n y an&aacute;lisis de rendimiento";
 choices[7][3] = "Informes de la organizaci&oacute;n, datos de proyectos y contratos, an&aacute;lisis costo-beneficio";
 answers[7] = choices[7][3];
 units[7] = "31, 32, 33";
 comments[7] = "Id Pregunta: 492. Pregunta similar a la del ex&aacute;men de SS del 2003 salvo en las opciones";


//  Id pregunta: 970 AÃ±o de creación de pregunta: 2005-01-01
 questions[8]= "9)  Cuando se obtiene un certificado electr&oacute;nico, la clave privada generada se queda en:";
 choices[8]= new Array();
 choices[8][0] = "El navegador de internet";
 choices[8][1] = "El proveedor de servicios ";
 choices[8][2] = "Un servidor de certificados";
 choices[8][3] = "La Autoridad de Certificaci&oacute;n";
 answers[8] = choices[8][0];
 units[8] = "74";
 comments[8] = "Id Pregunta: 970. NULL";


//  Id pregunta: 1109 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  En la multiplexaci&oacute;n por divisi&oacute;n en frecuencia, &iquest;cu&aacute;l de estas afirmaciones es correcta?";
 choices[9]= new Array();
 choices[9][0] = "Las se&ntilde;ales a enviar usan todo el ancho de banda disponible.";
 choices[9][1] = "Las se&ntilde;ales a enviar s&oacute;lo usan el ancho de banda asignado.";
 choices[9][2] = "Las se&ntilde;ales se env&iacute;an s&oacute;lo en el tiempo asignado por todo ancho de banda.";
 choices[9][3] = "Las se&ntilde;ales se env&iacute;an s&oacute;lo en el tiempo asignado por el ancho de banda asignado.";
 answers[9] = choices[9][1];
 units[9] = "107.108";
 comments[9] = "Id Pregunta: 1109. NULL";


//  Id pregunta: 1180 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  Indicar cu&aacute;l de los siguientes agentes software inteligentes no existe:";
 choices[10]= new Array();
 choices[10][0] = "Agentes interfaz";
 choices[10][1] = "Agentes de gesti&oacute;n";
 choices[10][2] = "Agentes de informaci&oacute;n";
 choices[10][3] = "Agentes virtuales";
 answers[10] = choices[10][1];
 units[10] = "63";
 comments[10] = "Id Pregunta: 1180. ";


//  Id pregunta: 1588 AÃ±o de creación de pregunta: 2003-01-01
 questions[11]= "12)  En el modelo l&oacute;gico relacional, &iquest;qu&eacute; afirmaci&oacute;n es cierta?";
 choices[11]= new Array();
 choices[11][0] = "La clave candidata es la clave que el analista escoge entre todas las claves primarias y a las que no escoge se las denomina claves alternativas.";
 choices[11][1] = "La clave alternativa es la clave primaria pero que puede tomar valores nulos.";
 choices[11][2] = "La clave primaria tiene menos atributos que la clave candidata.";
 choices[11][3] = "La clave primaria es la clave que el analista escoge entre todas las claves candidatas y no puede adoptar bajo ninguna circunstancia el valor nulo.";
 answers[11] = choices[11][3];
 units[11] = "58";
 comments[11] = "Id Pregunta: 1588. ";


//  Id pregunta: 1630 AÃ±o de creación de pregunta: 2003-01-01
 questions[12]= "13)  Sobre lenguajes de comunicaci&oacute;n entre sistemas multiagente cual es cierta";
 choices[12]= new Array();
 choices[12][0] = "Se utiliza KQML porque aporta generalidad y ortogonalidad ";
 choices[12][1] = "Se utiliza KQML porque aporta generalidad y no ortogonalidad";
 choices[12][2] = "utiliza KIF porque aporta generalidad y ortogonalidad";
 choices[12][3] = "Se utiliza ARCHON porque aporta generalidad y ortogonalidad";
 answers[12] = choices[12][0];
 units[12] = "63";
 comments[12] = "Id Pregunta: 1630. ";


//  Id pregunta: 1651 AÃ±o de creación de pregunta: 2004-01-01
 questions[13]= "14)  &iquest;Cu&aacute;l de los siguientes t&eacute;rminos no son herramientas o plataformas de e-learning ?";
 choices[13]= new Array();
 choices[13][0] = "aTutor";
 choices[13][1] = "WebCT";
 choices[13][2] = "eSchool";
 choices[13][3] = "Blackboard";
 answers[13] = choices[13][2];
 units[13] = "66";
 comments[13] = "Id Pregunta: 1651. ";


//  Id pregunta: 1764 AÃ±o de creación de pregunta: 2006-01-01
 questions[14]= "15)  Se&ntilde;ale la afirmaci&oacute;n FALSA sobre los ficheros .jar de Java";
 choices[14]= new Array();
 choices[14][0] = "Est&aacute;ndar de empaquetado de ficheros compilados, para facilitar su distribuci&oacute;n y reutilizaci&oacute;n";
 choices[14][1] = "Utiliza para la compresi&oacute;n el algoritmo LZW";
 choices[14][2] = "Son ficheros independientes de la plataforma y cualquier JVM (Java Virtual Machine) ser&aacute; capaz de interpretarlos";
 choices[14][3] = "Todas las afirmaciones anteriores son verdaderas";
 answers[14] = choices[14][3];
 units[14] = "60";
 comments[14] = "Id Pregunta: 1764. A es falsa. Tambi&eacute;n puede incluir im&aacute;genes y otro tipo de archivos. Los .class no son compilados en el sentido estricto.";


//  Id pregunta: 1776 AÃ±o de creación de pregunta: 2006-01-01
 questions[15]= "16)  El modelo de proceso de desarrollo de fuente abierta, b&aacute;sicamente descentralizado y caracter&iacute;stico de productos como Linux, Apache, Mozilla, Perl y Lisp/Emacs, se ha dado en llamar:";
 choices[15]= new Array();
 choices[15][0] = "Mercado";
 choices[15][1] = "Bazar";
 choices[15][2] = "Catedral";
 choices[15][3] = "Iglesia";
 answers[15] = choices[15][1];
 units[15] = "61,62";
 comments[15] = "Id Pregunta: 1776. ";


//  Id pregunta: 1886 AÃ±o de creación de pregunta: 2006-01-01
 questions[16]= "17)  Al pasar al modelo f&iacute;sico de datos las relaciones M:N entre clases se transforman en...";
 choices[16]= new Array();
 choices[16][0] = "Se propagan las claves.";
 choices[16][1] = "Dos tablas";
 choices[16][2] = "Una tabla";
 choices[16][3] = "Tres tablas";
 answers[16] = choices[16][2];
 units[16] = "80";
 comments[16] = "Id Pregunta: 1886. ";


//  Id pregunta: 1992 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Al conjunto de est&aacute;ndares que permite que distintas herramientas CASE del mismo o distinto fabricante el intercambio de datos se denomina:";
 choices[17]= new Array();
 choices[17][0] = "MERISE.";
 choices[17][1] = "IPSE.";
 choices[17][2] = "MIDS.";
 choices[17][3] = "X/Open CASE.";
 answers[17] = choices[17][1];
 units[17] = "91";
 comments[17] = "Id Pregunta: 1992. ";


//  Id pregunta: 2493 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Se&ntilde;alar la respuesta correcta respecto a METRICA V3:";
 choices[18]= new Array();
 choices[18][0] = "No propone la utilizaci&oacute;n de MAGERIT como metodolog&iacute;a de an&aacute;lisis y gesti&oacute;n de riesgos";
 choices[18][1] = "Propone el uso de MAGERIT para el an&aacute;lisis de riesgos pero no para la gesti&oacute;n de riesgos";
 choices[18][2] = "Propone la utilizaci&oacute;n de MAGERIT como metodolog&iacute;a de an&aacute;lisis y gesti&oacute;n de riesgos en el caso de que la organizaci&oacute;n no disponga de su propia metodolog&iacute;a";
 choices[18][3] = "Es imperativo el uso de MAGERIT como metodolog&iacute;a de an&aacute;lisis y gesti&oacute;n de riesgos";
 answers[18] = choices[18][2];
 units[18] = "86";
 comments[18] = "Id Pregunta: 2493. NULL";


//  Id pregunta: 2570 AÃ±o de creación de pregunta: 2003-01-01
 questions[19]= "20)  El despliegue detallado de recursos para alcanzar los objetivos fijados en los planes estrat&eacute;gicos es funci&oacute;n de ";
 choices[19]= new Array();
 choices[19][0] = "la planificaci&oacute;n operativa";
 choices[19][1] = "el control anal&iacute;tico del gasto";
 choices[19][2] = "la planificaci&oacute;n estrat&eacute;gica";
 choices[19][3] = "la planificaci&oacute;n t&aacute;ctica";
 answers[19] = choices[19][0];
 units[19] = "77";
 comments[19] = "Id Pregunta: 2570. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 2660 AÃ±o de creación de pregunta: 2003-01-01
 questions[20]= "21)  Cu&aacute;l de los siguientes no es un m&eacute;todos o t&eacute;cnicas de recuperaci&oacute;n de informaci&oacute;n:";
 choices[20]= new Array();
 choices[20][0] = "Lenguajes recuperativos.";
 choices[20][1] = "Retroalimentaci&oacute;n.";
 choices[20][2] = "Modelos vectoriales y probabil&iacute;sticos.";
 choices[20][3] = "Sistemas booleanos.";
 answers[20] = choices[20][0];
 units[20] = "96";
 comments[20] = "Id Pregunta: 2660. NULL";


//  Id pregunta: 2703 AÃ±o de creación de pregunta: 2003-01-01
 questions[21]= "22)  Se&ntilde;ale la opci&oacute;n verdadera:";
 choices[21]= new Array();
 choices[21][0] = "Un filtro paso bajo es un m&eacute;todo de realce radiom&eacute;trico.";
 choices[21][1] = "La ecualizaci&oacute;n del histograma es un m&eacute;todo de realce radiom&eacute;trico.";
 choices[21][2] = "El &quot;filtro de mediana&quot; elige el p&iacute;xel siguiente al central de los valores de la ventana.";
 choices[21][3] = "El filtro paso alto suaviza la imagen.";
 answers[21] = choices[21][1];
 units[21] = "93";
 comments[21] = "Id Pregunta: 2703. NULL";


//  Id pregunta: 3015 AÃ±o de creación de pregunta: 2004-01-01
 questions[22]= "23)  Entre las carater&iacute;sticas de propagaci&oacute;n de las ondas de radiofrecuencia, cu&aacute;l de las siguientes afirmaciones no es correcta cuando se incrementa la frecuencia?";
 choices[22]= new Array();
 choices[22][0] = "Menor alcance de la se&ntilde;al";
 choices[22][1] = "menor ancho de banda";
 choices[22][2] = "mayor inmunidad al ruido";
 choices[22][3] = "mayor necesidad de visibilidad directa";
 answers[22] = choices[22][1];
 units[22] = "107";
 comments[22] = "Id Pregunta: 3015. NULL";


//  Id pregunta: 3328 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  A las huellas del cliente que permiten implementar aspectos de autenticaci&oacute;n, preferencias, gesti&oacute;n del estado en HTTP se les denomina:";
 choices[23]= new Array();
 choices[23][0] = "applet";
 choices[23][1] = "cookie";
 choices[23][2] = "socket";
 choices[23][3] = "control activeX";
 answers[23] = choices[23][1];
 units[23] = "113";
 comments[23] = "Id Pregunta: 3328. ";


//  Id pregunta: 3335 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  BGP es un protocolo que se usa para:";
 choices[24]= new Array();
 choices[24][0] = "Tratar de encontrar un sistema del cual conocemos el nombre y no la direcci&oacute;n de red en redes OSI (Broadcasting Generation Protocol)";
 choices[24][1] = "Es un protocolo de intercambio de informaci&oacute;n en modo binario entre dos entidades de transporte en el modelo OSI, para que las pasen directamente de modo transparente a la capa de Sesi&oacute;n. (Binary Gateway Protocol)";
 choices[24][2] = "Es un protocolo de enrutamiento o encaminamiento por el que se intercambian informaci&oacute;n los routers en las fronteras de los sistemas aut&oacute;nomos en redes TCP/IP (Border Gateway Protocol)";
 choices[24][3] = "Es un protocolo por el que se convierte a nivel de transporte fragmentos (o TPDUs) de Appletalk a fragmentos TCP (Bellcore Gateway Protocol)";
 answers[24] = choices[24][2];
 units[24] = "102";
 comments[24] = "Id Pregunta: 3335. ";


//  Id pregunta: 3526 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  En IPv4, las direcciones que van desde 192.0.0.0 hasta 223.255.255.255 son del tipo:";
 choices[25]= new Array();
 choices[25][0] = "A";
 choices[25][1] = "B";
 choices[25][2] = "C";
 choices[25][3] = "D";
 answers[25] = choices[25][2];
 units[25] = "100";
 comments[25] = "Id Pregunta: 3526. NULL";


//  Id pregunta: 3529 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  En la Red Digital de Servicios Integrados (RDSI), un acceso b&aacute;sico permite:    ";
 choices[26]= new Array();
 choices[26][0] = "Obligatoriamente un canal de voz, otro de datos y un tercero de se&ntilde;alizaci&oacute;n";
 choices[26][1] = "Tres conversaciones telef&oacute;nicas simult&aacute;neas";
 choices[26][2] = "Dos conversaciones telef&oacute;nicas simult&aacute;neas";
 choices[26][3] = "Un canal de datos y dos canales de v&iacute;deo";
 answers[26] = choices[26][2];
 units[26] = "103";
 comments[26] = "Id Pregunta: 3529. ";


//  Id pregunta: 3647 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  La tecnolog&iacute;a de red de &aacute;rea local PMD-FDDI:";
 choices[27]= new Array();
 choices[27][0] = "Trabaja a 125 Mhz";
 choices[27][1] = "Utiliza codificaci&oacute;n 4B/5B NRZI";
 choices[27][2] = "Transmite a 100 Mbps";
 choices[27][3] = "Todas las respuestas anteriores son correctas";
 answers[27] = choices[27][3];
 units[27] = "101";
 comments[27] = "Id Pregunta: 3647. ";


//  Id pregunta: 3710 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  Las velocidades de transmisi&oacute;n y de modulaci&oacute;n:";
 choices[28]= new Array();
 choices[28][0] = "Son siempre iguales";
 choices[28][1] = "La de transmisi&oacute;n s&oacute;lo puede ser mayor o igual a la de modulaci&oacute;n";
 choices[28][2] = "La de modulaci&oacute;n s&oacute;lo puede ser mayor o igual que la de transmisi&oacute;n";
 choices[28][3] = "La velocidad de transmisi&oacute;n puede ser mayor, menor o igual que la de modulaci&oacute;n, seg&uacute;n el caso";
 answers[28] = choices[28][1];
 units[28] = "99";
 comments[28] = "Id Pregunta: 3710. *: transmision modulacion";


//  Id pregunta: 3935 AÃ±o de creación de pregunta: 2003-01-01
 questions[29]= "30)  &iquest;Qu&eacute; es cierto, en los diagramas de clases?";
 choices[29]= new Array();
 choices[29][0] = "Los atributos se representan debajo  en la caja de representaci&oacute;n de la clase ";
 choices[29][1] = "Las interfaces se representan mediante carpetas";
 choices[29][2] = "Los atributos se representan en medio  en la caja de representaci&oacute;n de la clase";
 choices[29][3] = "Los atributos se representan  en la zona superior de representaci&oacute;n de la clase";
 answers[29] = choices[29][0];
 units[29] = "82";
 comments[29] = "Id Pregunta: 3935. ";


//  Id pregunta: 3964 AÃ±o de creación de pregunta: 2003-01-01
 questions[30]= "31)  Registro basado en XML para listar servicios Web que se ponen a disposici&oacute;n de otros";
 choices[30]= new Array();
 choices[30][0] = " UDDI";
 choices[30][1] = "WSDL";
 choices[30][2] = " SOAP";
 choices[30][3] = " JAXP";
 answers[30] = choices[30][0];
 units[30] = "69";
 comments[30] = "Id Pregunta: 3964. NULL";


//  Id pregunta: 4206 AÃ±o de creación de pregunta: 2006-01-01
 questions[31]= "32)  La fibra &oacute;ptica m&aacute;s popular es";
 choices[31]= new Array();
 choices[31][0] = "9/125 um";
 choices[31][1] = "62.5/125 um";
 choices[31][2] = "50/125 um";
 choices[31][3] = "100/140 um";
 answers[31] = choices[31][1];
 units[31] = "99";
 comments[31] = "Id Pregunta: 4206. ";


//  Id pregunta: 4223 AÃ±o de creación de pregunta: 2006-01-01
 questions[32]= "33)  Indique cual de las siguientes afirmaciones con relaci&oacute;n a la RDSI (Red Digital de Servicios Integrados) no es correcta:";
 choices[32]= new Array();
 choices[32][0] = "Utiliza el sistema de se&ntilde;alizaci&oacute;n por canal comun CCITT n&ordm; 7 (CCS7)";
 choices[32][1] = "Emplea el canal D para el transporte de se&ntilde;alizaci&oacute;n mediante conmutaci&oacute;n de paquetes";
 choices[32][2] = "La velocidad de los canales B tanto en los accesos b&aacute;sicos como en los primarios es de 64 Kbps";
 choices[32][3] = "La velocidad de los canales D tanto en los accesos b&aacute;sicos como en los primarios es de 16 Kbps";
 answers[32] = choices[32][3];
 units[32] = "103";
 comments[32] = "Id Pregunta: 4223. ";


//  Id pregunta: 4266 AÃ±o de creación de pregunta: 2007-01-01
 questions[33]= "34)  Indique cu&aacute;l de los siguientes no es un servicio LDAP";
 choices[33]= new Array();
 choices[33][0] = "READ";
 choices[33][1] = "COMPARE";
 choices[33][2] = "ADD";
 choices[33][3] = "ABANDON";
 answers[33] = choices[33][0];
 units[33] = "74";
 comments[33] = "Id Pregunta: 4266. NULL";


//  Id pregunta: 4340 AÃ±o de creación de pregunta: 2007-01-01
 questions[34]= "35)  &iquest;Cu&aacute;l es el puerto est&aacute;ndar utilizado por el protocolo POP3?:";
 choices[34]= new Array();
 choices[34][0] = "21.";
 choices[34][1] = "23.";
 choices[34][2] = "25";
 choices[34][3] = "110";
 answers[34] = choices[34][3];
 units[34] = "112";
 comments[34] = "Id Pregunta: 4340. ";


//  Id pregunta: 4615 AÃ±o de creación de pregunta: 2007-01-01
 questions[35]= "36)  Seg&uacute;n las pautas de conducta en el proceso de auditoria, los auditores pueden o deben hacer";
 choices[35]= new Array();
 choices[35][0] = "escribir los procedimientos";
 choices[35][1] = "realizar gesti&oacute;n de perfiles de usuarios";
 choices[35][2] = "realizar Ia documentaci&oacute;n";
 choices[35][3] = "verificar que se evaluan peri&oacute;dicamente riesgos o bien evaluarlos";
 answers[35] = choices[35][3];
 units[35] = "31";
 comments[35] = "Id Pregunta: 4615. ";


//  Id pregunta: 4737 AÃ±o de creación de pregunta: 2007-01-01
 questions[36]= "37)  &iquest;Cual es el primer criterio de calidad del Modelo EFQM?";
 choices[36]= new Array();
 choices[36][0] = "Liderazgo";
 choices[36][1] = "Oportunidad";
 choices[36][2] = "Satisfacci&oacute;n del cliente";
 choices[36][3] = "Satisfacer los requisitos";
 answers[36] = choices[36][0];
 units[36] = "92";
 comments[36] = "Id Pregunta: 4737. Examen 2006 JCYL";


//  Id pregunta: 4835 AÃ±o de creación de pregunta: 2007-01-01
 questions[37]= "38)  &iquest;Cu&aacute;l de las siguientes afirmaciones respecto al protocolo Real-Time Transport Protocol (RTP) NO es cierta?";
 choices[37]= new Array();
 choices[37][0] = "Permite monitorizar la calidad del servicio que se est&aacute; ofreciendo para servicios con caracter&iacute;sticas detiempo real";
 choices[37][1] = "Proporciona servicios de entrega punto a punto de datos con caracter&iacute;sticas de tiempo real, como audio y";
 choices[37][2] = "Est&aacute; definido en la norma RFC (Request for Comments) 3550, la cual sustituye a la RFC 1889";
 choices[37][3] = "La mayor&iacute;a de las aplicaciones, como por ejemplo VoIP, utilizan RTP sobre UDP (User Datagram Protocol)con el fin de aprovechar los servicios de multiplexi&oacute;n y verificaci&oacute;n de datos (checksum) que ofrece esteprotocolo";
 answers[37] = choices[37][0];
 units[37] = "100, 117";
 comments[37] = "Id Pregunta: 4835. ";


//  Id pregunta: 4847 AÃ±o de creación de pregunta: 2007-01-01
 questions[38]= "39)  Las aplicaciones a medida desarrolladas a petici&oacute;n de la Administraci&oacute;n General del Estado son consideradas:";
 choices[38]= new Array();
 choices[38][0] = "Software libre";
 choices[38][1] = "Software propietario";
 choices[38][2] = "Software de dominio p&uacute;blico";
 choices[38][3] = "Software de fuentes abiertas, de acuerdo con los criterios de normalizaci&oacute;n y conservaci&oacute;n de lasaplicaciones utilizadas para el ejercicio de potestades";
 answers[38] = choices[38][1];
 units[38] = "37";
 comments[38] = "Id Pregunta: 4847. ";


//  Id pregunta: 4863 AÃ±o de creación de pregunta: 2007-01-01
 questions[39]= "40)  En el proceso de reconocimiento del habla, el algoritmo Dynamic Time Warping (DTW) se utiliza para:";
 choices[39]= new Array();
 choices[39][0] = "Evitar el uso de plantillas";
 choices[39][1] = "Evitar la alineaci&oacute;n temporal";
 choices[39][2] = "Reconocer palabras aisladas y habla continua";
 choices[39][3] = "Conseguir resultados &oacute;ptimos con vocabularios de 5.000 palabras";
 answers[39] = choices[39][2];
 units[39] = "95,94";
 comments[39] = "Id Pregunta: 4863. ";


//  Id pregunta: 4872 AÃ±o de creación de pregunta: 2007-01-01
 questions[40]= "41)  Seg&uacute;n el Modelo de Calidad de McCall, el factor &quot;Correcci&oacute;n&quot; debe ser tenido en cuenta cuando el productosoftware se encuentra en la fase de:";
 choices[40]= new Array();
 choices[40][0] = "Construcci&oacute;n";
 choices[40][1] = "Explotaci&oacute;n";
 choices[40][2] = "Revisi&oacute;n";
 choices[40][3] = "Transici&oacute;n";
 answers[40] = choices[40][1];
 units[40] = "88";
 comments[40] = "Id Pregunta: 4872. NULL";


//  Id pregunta: 5106 AÃ±o de creación de pregunta: 2003-01-01
 questions[41]= "42)  Cuando en una empresa la forma de desarrollar proyectos (gesti&oacute;n e ingenier&iacute;a) est&aacute; definida, es decir, que est&aacute; establecida, documentada y que existen m&eacute;tricas (obtenci&oacute;n de datos objetivos) para la consecuci&oacute;n de objetivos concretos, seg&uacute;n CMMI est&aacute;:";
 choices[41]= new Array();
 choices[41][0] = "Nivel 1";
 choices[41][1] = "Nivel 2";
 choices[41][2] = "Nivel 3";
 choices[41][3] = "Nivel 4";
 answers[41] = choices[41][2];
 units[41] = "27";
 comments[41] = "Id Pregunta: 5106. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5677 AÃ±o de creación de pregunta: 2003-01-01
 questions[42]= "43)  Indique cu&aacute;l de las siguientes opciones no est&aacute; relacionada con la Web Sem&aacute;ntica:";
 choices[42]= new Array();
 choices[42][0] = "RDF (Resource Description Framework).";
 choices[42][1] = "OWL (Web Ontology Language).";
 choices[42][2] = "XML (Extensible Markup Language)";
 choices[42][3] = "Ninguna de las anteriores";
 answers[42] = choices[42][3];
 units[42] = "71";
 comments[42] = "Id Pregunta: 5677. ";


//  Id pregunta: 5755 AÃ±o de creación de pregunta: 2009-01-01
 questions[43]= "44)  &iquest;Cu&aacute;l de estos diagramas no es un diagrama de UML 2.0?";
 choices[43]= new Array();
 choices[43][0] = "Diagrama global de interacci&oacute;n";
 choices[43][1] = "Diagrama de colaboraci&oacute;n";
 choices[43][2] = "Diagrama de estructura compuesta";
 choices[43][3] = "Diagrama de tiempos";
 answers[43] = choices[43][1];
 units[43] = "82";
 comments[43] = "Id Pregunta: 5755. ";


//  Id pregunta: 5879 AÃ±o de creación de pregunta: 2009-01-01
 questions[44]= "45)  Indique quien NO es miembro del Pleno del Consejo Superior de Administraci&oacute;n Electr&oacute;nica:";
 choices[44]= new Array();
 choices[44][0] = "El Presidente del Instituto Nacional de Estad&iacute;stica";
 choices[44][1] = "El Subdirector General del Centro Criptol&oacute;gico Nacional";
 choices[44][2] = "El Interventor General de la Administraci&oacute;n del Estado";
 choices[44][3] = "El Director General de la F&aacute;brica Nacional de Moneda y Timbre-Real Casa de la Moneda";
 answers[44] = choices[44][1];
 units[44] = "30";
 comments[44] = "Id Pregunta: 5879. MAP 2008 A1";


//  Id pregunta: 5902 AÃ±o de creación de pregunta: 2009-01-01
 questions[45]= "46)  La tecnolog&iacute;a conocida como de Acceso M&uacute;ltiple por Divisi&oacute;n en c&oacute;digo de banda ancha (WCDMA), &iquest;a qu&eacute; est&aacute;ndar corresponde?";
 choices[45]= new Array();
 choices[45][0] = "GPRS";
 choices[45][1] = "UMTS";
 choices[45][2] = "GSM";
 choices[45][3] = "DECT";
 answers[45] = choices[45][1];
 units[45] = "108";
 comments[45] = "Id Pregunta: 5902. MAP 2008 A1";


//  Id pregunta: 5970 AÃ±o de creación de pregunta: 2010-01-01
 questions[46]= "47)  Las medidas de seguridad exigibles a los ficheros y tratamientos se clasifican en:";
 choices[46]= new Array();
 choices[46][0] = "Bajo, medio y alto";
 choices[46][1] = "B&aacute;sico, medio y alto";
 choices[46][2] = "Bajo, aquellos que eval&uacute;an la personalidad, medio y alto";
 choices[46][3] = "Bajo, medio, alto y especialmente protegidos";
 answers[46] = choices[46][1];
 units[46] = "29";
 comments[46] = "Id Pregunta: 5970. Castilla La Mancha 2009";


//  Id pregunta: 6052 AÃ±o de creación de pregunta: 2010-01-01
 questions[47]= "48)  &iquest;Cu&aacute;l es una infraestructura de integraci&oacute;n para la construcci&oacute;n de arquitecturas SOA?";
 choices[47]= new Array();
 choices[47][0] = "SAML";
 choices[47][1] = "UDDI (Universal Description, Discovery and Integration)";
 choices[47][2] = "CASE (Computer-Aided Software Engineering)";
 choices[47][3] = "ESB (Enterprise Service Bus)";
 answers[47] = choices[47][3];
 units[47] = "51";
 comments[47] = "Id Pregunta: 6052. TIC A 2009";


//  Id pregunta: 6090 AÃ±o de creación de pregunta: 2010-01-01
 questions[48]= "49)  En IPv6, un datagrama enviado a una direcci&oacute;n de grupo de interfaces tipo &quot;anycast&quot; se encamina hacia:";
 choices[48]= new Array();
 choices[48][0] = "Todas las interfaces conectadas a la misma subred en donde se origin&oacute; el datagrama.";
 choices[48][1] = "Aquellas interfaces en otras subredes diferentes de donde se origin&oacute; el datagrama.";
 choices[48][2] = "Cualquier interfaz que se encuentre topol&oacute;gicamente en la subred m&aacute;s alejada.";
 choices[48][3] = "La interfaz m&aacute;s cercana (en t&eacute;rminos de medida de distancia del protocolo de encaminamiento).";
 answers[48] = choices[48][3];
 units[48] = "100";
 comments[48] = "Id Pregunta: 6090. TIC A 2009";


//  Id pregunta: 6096 AÃ±o de creación de pregunta: 2010-01-01
 questions[49]= "50)  &iquest;Cu&aacute;l de los siguientes NO es un principio b&aacute;sico de todo modelo orientado a objetos seg&uacute;n Booch?";
 choices[49]= new Array();
 choices[49][0] = "Distribuci&oacute;n.";
 choices[49][1] = "Abstracci&oacute;n.";
 choices[49][2] = "Encapsulaci&oacute;n.";
 choices[49][3] = "Modularidad.";
 answers[49] = choices[49][0];
 units[49] = "82";
 comments[49] = "Id Pregunta: 6096. TIC A 2009";


//  Id pregunta: 6102 AÃ±o de creación de pregunta: 2010-01-01
 questions[50]= "51)  El lenguaje SQL92:";
 choices[50]= new Array();
 choices[50][0] = "Soporta la regla de integridad de entidad y en una tabla pueden existir dos filas iguales.";
 choices[50][1] = "Soporta la regla de integridad de entidad y en una tabla no pueden existir dos filas iguales.";
 choices[50][2] = "No soporta la regla de integridad de entidad y en una tabla pueden existir dos filas iguales.";
 choices[50][3] = "No soporta la regla de integridad de entidad y en una tabla no pueden existir dos filas iguales.";
 answers[50] = choices[50][0];
 units[50] = "58";
 comments[50] = "Id Pregunta: 6102. TIC A 2009";


//  Id pregunta: 6106 AÃ±o de creación de pregunta: 2010-01-01
 questions[51]= "52)  Indicar cu&aacute;l de los siguientes NO est&aacute; entre los objetivos que persigue MAGERIT v2:";
 choices[51]= new Array();
 choices[51][0] = "Ofrecer un m&eacute;todo sistem&aacute;tico para analizar los riesgos que afectan a los sistemas de informaci&oacute;n.";
 choices[51][1] = "Ayudar a descubrir y planificar las medidas oportunas para mantener los riesgos bajo control.";
 choices[51][2] = "Establecer una norma de obligado cumplimiento para todos los organismos de las Administraciones P&uacute;blicas espa&ntilde;olas a la hora de analizar y gestionar los riesgos.";
 choices[51][3] = "Preparar a las organizaciones para procesos de evaluaci&oacute;n, auditoria, certificaci&oacute;n o acreditaci&oacute;n.";
 answers[51] = choices[51][2];
 units[51] = "33";
 comments[51] = "Id Pregunta: 6106. TIC A 2009";


//  Id pregunta: 6203 AÃ±o de creación de pregunta: 2010-01-01
 questions[52]= "53)  Las fases componentes del ciclo de vida Rapid Application Development son:";
 choices[52]= new Array();
 choices[52][0] = "Cuatro: Planificaci&oacute;n de requerimientos, dise&ntilde;o con usuario, construcci&oacute;n, implantaci&oacute;n";
 choices[52][1] = "Siete: Planificaci&oacute;n, especificaci&oacute;n de requisitos, dise&ntilde;o, codificaci&oacute;n, pruebas e integraci&oacute;n, implantaci&oacute;n y aceptaci&oacute;n, mantenimiento";
 choices[52][2] = "Cuatro: Planificaci&oacute;n, an&aacute;lisis del riesgo, ingenier&iacute;a, evaluaci&oacute;n del cliente";
 choices[52][3] = "Cinco: Especificaci&oacute;n del producto, transformaci&oacute;n autom&aacute;tica, realizaci&oacute;n bucles iterativos, probar el producto, reajustar especificacones";
 answers[52] = choices[52][0];
 units[52] = "76";
 comments[52] = "Id Pregunta: 6203. TICB-2009, bloque desarrollo";


//  Id pregunta: 6294 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)  &iquest;Cu&aacute;l de las siguientes no es una t&eacute;cnica de alto nivel de obtenci&oacute;n de requisitos en el an&aacute;lisis de los sistemas de Informaci&oacute;n?";
 choices[53]= new Array();
 choices[53][0] = "Prototipos";
 choices[53][1] = "Sesiones JAD y JRP";
 choices[53][2] = "Entorno de Bucles Adaptativo";
 choices[53][3] = "Todas lo son";
 answers[53] = choices[53][3];
 units[53] = "78";
 comments[53] = "Id Pregunta: 6294. ";


//  Id pregunta: 6477 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  &iquest;Qu&eacute; componentes incluye la .net framework class library?";
 choices[54]= new Array();
 choices[54][0] = "Common language runtime (CLR) and the .NET framework class library";
 choices[54][1] = "ADO.NET, ASP.NET, Windows Forms, and Windows Presentation Foundation (WPF)";
 choices[54][2] = "ASP.NET applications, Web Forms and Web Services";
 choices[54][3] = "Windows Presentation Foundation (WPF), ASP.NET Portal, Windows Form Portal";
 answers[54] = choices[54][1];
 units[54] = "115";
 comments[54] = "Id Pregunta: 6477. Castilla La Mancha 2009";


//  Id pregunta: 6531 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  La Resoluci&oacute;n del 6 de Febrero de 2006 sobre calidad de los servicios en la Administraci&oacute;n, fija distintos programas de actuaci&oacute;n, &iquest;cu&aacute;l de los siguientes no es uno de ellos?";
 choices[55]= new Array();
 choices[55][0] = "Programa de Cartas de Servicio";
 choices[55][1] = "Programa de Evaluaci&oacute;n de la calidad de las organizaciones";
 choices[55][2] = "Programa de Quejas y Sugerencias";
 choices[55][3] = "Programa de Implantaci&oacute;n de la Calidad";
 answers[55] = choices[55][3];
 units[55] = "87";
 comments[55] = "Id Pregunta: 6531. NULL";


//  Id pregunta: 6544 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  La informaci&oacute;n puede obtenerse a trav&eacute;s de se&ntilde;ales el&eacute;ctricas en las ondas. Una forma de combatirlo es a trav&eacute;s de";
 choices[56]= new Array();
 choices[56][0] = "Tempest";
 choices[56][1] = "Ruido Blanco";
 choices[56][2] = "Zonas de control";
 choices[56][3] = "Todas las respuestas anteriores son correctas";
 answers[56] = choices[56][3];
 units[56] = "111";
 comments[56] = "Id Pregunta: 6544. NULL";


//  Id pregunta: 6568 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  HSDPA introduce, respecto de UMTS, las siguientes mejoras:";
 choices[57]= new Array();
 choices[57][0] = "Tasas cercanas 200 Gbps";
 choices[57][1] = "Nueva portadora de 584 kbps";
 choices[57][2] = "Reducci&oacute;n del tiempo de latencia";
 choices[57][3] = "M&aacute;ximo de 10 GB de tr&aacute;fico al mes para el usuario";
 answers[57] = choices[57][2];
 units[57] = "108";
 comments[57] = "Id Pregunta: 6568. NULL";


//  Id pregunta: 6612 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  Para validar la consistencia en el an&aacute;lisis estructurado se utiliza:";
 choices[58]= new Array();
 choices[58][0] = "M&eacute;trica v3 ";
 choices[58][1] = "La t&eacute;cnica DFQM (Data Flow Quality Model)";
 choices[58][2] = "El balanceo entre los DFD's de niveles consecutivos";
 choices[58][3] = "El balanceo entre los DFD's de igual nivel";
 answers[58] = choices[58][2];
 units[58] = "81";
 comments[58] = "Id Pregunta: 6612. NULL";


//  Id pregunta: 7321 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  Seg&uacute;n la ley 34/2002 de Servicios de la Sociedad de la Informaci&oacute;n y Comercio Electr&oacute;nico cu&aacute;l de los siguientes servicios se encuentra excluidos del &aacute;mbito de aplicaci&oacute;n de la Ley:";
 choices[59]= new Array();
 choices[59][0] = "Los servicios prestados por notarios y registradores de la propiedad y mercantiles en el ejercicio de sus respectivas funciones p&uacute;blicas";
 choices[59][1] = "Los servicios prestados por prestadores de servicios de la sociedad de la informaci&oacute;n establecidos en Espa&ntilde;a";
 choices[59][2] = "Los servicios de la sociedad de la informaci&oacute;n que los prestadores residentes o domiciliados en otro Estado ofrezcan a trav&eacute;s de un establecimiento permanente situado en Espa&ntilde;a";
 choices[59][3] = "Servicios que afecten a derechos de propiedad intelectual o industrial prestados por prestadores de servicios establecidos en otro Estado miembro de la Uni&oacute;n Europea o del Espacio Econ&oacute;mico Europeo cuando el destinatario de los servicios radique en Espa&ntilde;a";
 answers[59] = choices[59][0];
 units[59] = "70";
 comments[59] = "Id Pregunta: 7321. NULL";


//  Id pregunta: 7336 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  Es un organismo europeo de normalizaci&oacute;n, de acuerdo a la Directiva 98/34/CE";
 choices[60]= new Array();
 choices[60][0] = "CEN";
 choices[60][1] = "ICANN";
 choices[60][2] = "SETSI";
 choices[60][3] = "GNU";
 answers[60] = choices[60][0];
 units[60] = "42";
 comments[60] = "Id Pregunta: 7336. NULL";


//  Id pregunta: 7774 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)   Indique cu&aacute;l de las siguientes alternativas corresponde a los procesos principales de que consta la metodolog&iacute;a M&Eacute;TRICA v. 3:";
 choices[61]= new Array();
 choices[61][0] = " Planificaci&oacute;n de Sistemas de Informaci&oacute;n, Desarrollo de Sistemas de Informaci&oacute;n y Mantenimiento de Sistemas de Informaci&oacute;n.";
 choices[61][1] = " Planificaci&oacute;n de Sistemas de Informaci&oacute;n, Estudio de viabilidad de Sistemas de Informaci&oacute;n, Desarrollo de Sistemas de Informaci&oacute;n e Implantaci&oacute;n de Sistemas de Informaci&oacute;n.";
 choices[61][2] = " Planificaci&oacute;n de Sistemas de Informaci&oacute;n, An&aacute;lisis de Sistemas de Informaci&oacute;n, Construcci&oacute;n e Implantaci&oacute;n de Sistemas de Informaci&oacute;n y Mantenimiento de Sistemas de Informaci&oacute;n.";
 choices[61][3] = " Planificaci&oacute;n de Sistemas de Informaci&oacute;n, Desarrollo de Sistemas de Informaci&oacute;n e Implantaci&oacute;n de Sistemas de Informaci&oacute;n.";
 answers[61] = choices[61][0];
 units[61] = "86";
 comments[61] = "Id Pregunta: 7774. Map 2005";


//  Id pregunta: 8301 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  Dentro del nivel AAL de ATM, AAL2 se caracteriza por tener: ";
 choices[62]= new Array();
 choices[62][0] = "Retardo constante y tasa de bit variable. ";
 choices[62][1] = "Retardo variable y tasa de bit constante.";
 choices[62][2] = "Retardo variable y tasa de bit variable. ";
 choices[62][3] = "Retardo constante y tasa de bit constante.";
 answers[62] = choices[62][0];
 units[62] = "109";
 comments[62] = "Id Pregunta: 8301. Examen TIC A2 2010";


//  Id pregunta: 8370 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  La norma UNE 139802:2003 establece requisitos de accesibilidad del software de los ordenadores para !as personas con discapacidad, agrupados en:";
 choices[63]= new Array();
 choices[63][0] = "7 categor&iacute;as: Teclado, dispositivos apuntadores, pantalla, sonido y rnultimedia, notificaci&oacute;n al usuario, informaci&oacute;n de objetos, tiempo.";
 choices[63][1] = "8 categor&iacute;as: Teclado, dispositivos apuntadores, pantalla, sonido y rnultimedia, notificaci&oacute;n al usuario, informaci&oacute;n de objetos, tiempo, documentaci&oacute;n.";
 choices[63][2] = "11 categor&iacute;as: Principios generales, teclado, dispositivos apuntadores, pantalla, sonido, multimedia, notificaci&oacute;n al usuario, informaci&oacute;n de objetos, tiempo, documentaci&oacute;n, otros";
 choices[63][3] = "10 categor&iacute;as: Principios generales, teclado, dispositivos apuntadores, pantalla, sonido y multimedia, notificaci&oacute;n al usuario, informaci&oacute;n de objetos, tiempo, documentaci&oacute;n, otros.";
 answers[63] = choices[63][3];
 units[63] = "39";
 comments[63] = "Id Pregunta: 8370. Examen TIC A2 2010";


//  Id pregunta: 8445 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  Una compa&ntilde;&iacute;a va a abrir una nueva sede asumiendo la subred 255.255.248.0,&iquest;Cu&aacute;l de las siguientes direcciones IP se podr&iacute;a asignar a un ordenador de la nuevasede?:";
 choices[64]= new Array();
 choices[64][0] = "a) 172.16.20.0";
 choices[64][1] = "172.16.24.45";
 choices[64][2] = "Ambas respuestas son correctas";
 choices[64][3] = "Ninguna respuesta es correcta";
 answers[64] = choices[64][2];
 units[64] = "100";
 comments[64] = "Id Pregunta: 8445. Analista Ayto. Madrid 2010";


//  Id pregunta: 8479 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  &iquest;Cu&aacute;l de las siguientes operaciones se incorpora en SNMP v2?";
 choices[65]= new Array();
 choices[65][0] = "SetRequest";
 choices[65][1] = "GetBulkRequest";
 choices[65][2] = "GetNextRequest";
 choices[65][3] = "Trap";
 answers[65] = choices[65][1];
 units[65] = "104";
 comments[65] = "Id Pregunta: 8479. Examen TIC A2 2010 interna";


//  Id pregunta: 8518 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  Indicar la respuesta correcta respecto al diagrama de flujo de datos:";
 choices[66]= new Array();
 choices[66][0] = "Un proceso de control puede ser el origen de los datos pero nunca el final de los datos.";
 choices[66][1] = "El flujo de di&aacute;logo se representa por una flecha discontinua que indica la direcci&oacute;n de los datos, y que se etiqueta con un nombre representativo.";
 choices[66][2] = "Un flujo de di&aacute;logo es un flujo entre un proceso y un almac&eacute;n que representa una consulta y una actualizaci&oacute;n.";
 choices[66][3] = "Un proceso de control se encarga de coordinar y sincronizar los accesos a los almacenes de datos.";
 answers[66] = choices[66][2];
 units[66] = "86";
 comments[66] = "Id Pregunta: 8518. Examen TIC A2 2010 interna";


//  Id pregunta: 8536 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  La tecnolog&iacute;a HSDPA presenta una capacidad m&aacute;xima de transferencia de informaci&oacute;n de:";
 choices[67]= new Array();
 choices[67][0] = "10,8 Mbps te&oacute;ricos.";
 choices[67][1] = "14 Mbps";
 choices[67][2] = "2 Mbps";
 choices[67][3] = "384 Kbps";
 answers[67] = choices[67][1];
 units[67] = "108";
 comments[67] = "Id Pregunta: 8536. Examen TIC A2 2010 interna";


//  Id pregunta: 8613 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  En relaci&oacute;n con la administraci&oacute;n de un sistema operativo Linux, indique cu&aacute;l de los siguientes comandos NO est&aacute; destinado a realizar copias de seguridad:";
 choices[68]= new Array();
 choices[68][0] = "tar con los par&aacute;metros cvf";
 choices[68][1] = "tar con los par&aacute;metros tvf";
 choices[68][2] = "cpio en conjunci&oacute;n con el comando ls";
 choices[68][3] = "cpio en conjunci&oacute;n con el comando find";
 answers[68] = choices[68][1];
 units[68] = "53,54";
 comments[68] = "Id Pregunta: 8613. Examen TIC A2 2010 interna";


//  Id pregunta: 8798 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  &iquest;Para qu&eacute; se usa el componente ASP.NET?";
 choices[69]= new Array();
 choices[69][0] = "Para construir aplicaciones y servicios Web";
 choices[69][1] = "Para conectar las aplicaciones a las bases de datos";
 choices[69][2] = "Para construir la interface del usuario";
 choices[69][3] = "Para conectar los programas";
 answers[69] = choices[69][0];
 units[69] = "59, 115";
 comments[69] = "Id Pregunta: 8798. Examen UPM A2 2011";


//  Id pregunta: 8864 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  XML es un lenguaje extensible de marcas. Se&ntilde;ale qu&eacute; significa extensible:";
 choices[70]= new Array();
 choices[70][0] = "No est&aacute; limitado el tama&ntilde;o de los ficheros";
 choices[70][1] = "Se pueden incorporar nuevas etiquetas, sin tener que cambiar la aplicaci&oacute;n que lo lee";
 choices[70][2] = "Se puede modelar datos a cualquier nivel de complejidad";
 choices[70][3] = "El uso de los ficheros se puede extender a cualquier plataforma";
 answers[70] = choices[70][1];
 units[70] = "69";
 comments[70] = "Id Pregunta: 8864. Analista Ayto. Madrid 2010";


//  Id pregunta: 8890 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  &iquest;En que banda de frecuencias trabaja WiBro?";
 choices[71]= new Array();
 choices[71][0] = "10GHz-66GHz";
 choices[71][1] = "2,45MHz";
 choices[71][2] = "2,3GHz-2,4GHz";
 choices[71][3] = "2GHz-11GHz";
 answers[71] = choices[71][2];
 units[71] = "107";
 comments[71] = "Id Pregunta: 8890. NULL";


//  Id pregunta: 8895 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  &iquest;Cu&aacute;l de las siguientes no corresponde a una funci&oacute;n digest?";
 choices[72]= new Array();
 choices[72][0] = "HMAC";
 choices[72][1] = "MD5";
 choices[72][2] = "MD8";
 choices[72][3] = "SHA";
 answers[72] = choices[72][2];
 units[72] = "74";
 comments[72] = "Id Pregunta: 8895. NULL";


//  Id pregunta: 8912 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  El sistema de radiocomunicaciones digitales TETRA:";
 choices[73]= new Array();
 choices[73][0] = "Tiene capacidades de transmisi&oacute;n de datos.";
 choices[73][1] = "No permite comunicaciones uno a muchos.";
 choices[73][2] = "Permite una mayor densidad de usuarios que GSM.";
 choices[73][3] = "Es exclusivamente anal&oacute;gico";
 answers[73] = choices[73][0];
 units[73] = "108";
 comments[73] = "Id Pregunta: 8912. Operador Ayto. Madrid 2010";


//  Id pregunta: 8980 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  &iquest;Cu&aacute;l es la arquitectura del kernel empleado en Windows 7?";
 choices[74]= new Array();
 choices[74][0] = "Monol&iacute;tico";
 choices[74][1] = "Microkernel";
 choices[74][2] = "Nanokernel";
 choices[74][3] = "Hibrida";
 answers[74] = choices[74][3];
 units[74] = "52";
 comments[74] = "Id Pregunta: 8980. ";


//  Id pregunta: 8987 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  &iquest;Cu&aacute;l de las siguientes no es una metodolog&iacute;a &aacute;gil?";
 choices[75]= new Array();
 choices[75][0] = "Scrum";
 choices[75][1] = "XP (eXtreme Programming)";
 choices[75][2] = "Getting Real";
 choices[75][3] = "Todas las anteriores";
 answers[75] = choices[75][3];
 units[75] = "79";
 comments[75] = "Id Pregunta: 8987. ";


//  Id pregunta: 9093 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  Cuando un trabajador asalariado crea un programa de ordenador, en el ejercicio de sus funciones:";
 choices[76]= new Array();
 choices[76][0] = "Los derechos de explotaci&oacute;n pertenecen al trabajador.";
 choices[76][1] = "Los derechos de explotaci&oacute;n pertenecen al empresario.";
 choices[76][2] = "Los derechos morales pertenecen al trabajador";
 choices[76][3] = "Los derechos morales pertenecen al empresario";
 answers[76] = choices[76][2];
 units[76] = "36";
 comments[76] = "Id Pregunta: 9093. ";


//  Id pregunta: 9112 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  &iquest;Cu&aacute;l no es caracter&iacute;stica de los sistemas de mainframe o sistemas multiprocesor?";
 choices[77]= new Array();
 choices[77][0] = "La forma de trabajo predominante en este tipo de sistemas es el BATCH o procesamiento sin interacci&oacute;n";
 choices[77][1] = "El m&eacute;todo utilizado para dotar a estos sistemas de altas prestaciones";
 choices[77][2] = "Se trata de soluciones altamente propietarias, concebidas para entornos cerrados, no heterog&eacute;neos.";
 choices[77][3] = "Existen muy pocos fabricantes en el mercado que desarrollen este tipo de sistemas";
 answers[77] = choices[77][1];
 units[77] = "45";
 comments[77] = "Id Pregunta: 9112. ";


//  Id pregunta: 9270 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  En un sistema de almacenamiento con 6 discos de 400 GB de capacidad cada uno, &iquest;cu&aacute;l de las siguientes configuraciones RAID tiene al menos 1 TB de capacidad y podr&iacute;a resistir el fallo de 3 discos en algunas ocasiones sin p&eacute;rdida de datos?";
 choices[78]= new Array();
 choices[78][0] = "RAID 6+0";
 choices[78][1] = "RAID 5+0";
 choices[78][2] = "RAID 5+1";
 choices[78][3] = "RAID 0+1";
 answers[78] = choices[78][3];
 units[78] = "48";
 comments[78] = "Id Pregunta: 9270. Examen TICA2-2011";


//  Id pregunta: 9325 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  &iquest;Qu&eacute; norma define el cableado";
 choices[79]= new Array();
 choices[79][0] = "ISO 50173";
 choices[79][1] = "ISO 11801";
 choices[79][2] = "ISO 18765";
 choices[79][3] = "ISO 80211";
 answers[79] = choices[79][1];
 units[79] = "99";
 comments[79] = "Id Pregunta: 9325. NULL";


//  Id pregunta: 9381 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  &iquest;A qu&eacute; est&aacute;ndar se refiere WirelessMan-Advanced?";
 choices[80]= new Array();
 choices[80][0] = "802.16m";
 choices[80][1] = "802.16e";
 choices[80][2] = "802.16k";
 choices[80][3] = "802.16-2009";
 answers[80] = choices[80][0];
 units[80] = "101";
 comments[80] = "Id Pregunta: 9381. ";


//  Id pregunta: 9382 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  La ley de Cooper afirma que:";
 choices[81]= new Array();
 choices[81][0] = "El n&uacute;mero m&aacute;ximo de conversaciones de voz o su equivalente en tr&aacute;fico de datos que pueden ser llevados a cabo en todo el espectro radioel&eacute;ctrico &uacute;til en una determinada &aacute;rea, se dobla cada 30 meses.";
 choices[81][1] = "Tijeras cortan papel, papel cubre a piedra, piedra aplasta lagarto, lagarto envenena a Spock.";
 choices[81][2] = "&Eacute;l n&uacute;mero de MFLOPS que un procesador puede realizar, aumenta siguiendo un ritmo logar&iacute;tmico.";
 choices[81][3] = "El rendimiento de un sistema aumenta linealmente con el n&uacute;mero de unidades de procesamiento que posea.";
 answers[81] = choices[81][0];
 units[81] = "108";
 comments[81] = "Id Pregunta: 9382. NULL";


//  Id pregunta: 9483 AÃ±o de creación de pregunta: 2013-01-01
 questions[82]= "83)  Indique la informaci&oacute;n opcional que se debe registrar de cada requisito";
 choices[82]= new Array();
 choices[82][0] = "C&oacute;digo &uacute;nico";
 choices[82][1] = "Nombre descriptivo";
 choices[82][2] = "Descripci&oacute;n";
 choices[82][3] = "Fecha creaci&oacute;n";
 answers[82] = choices[82][3];
 units[82] = "78";
 comments[82] = "Id Pregunta: 9483. ";


//  Id pregunta: 9596 AÃ±o de creación de pregunta: 2013-01-01
 questions[83]= "84)  En una arquitectura web en J2EE, indique cu&aacute;l es la opci&oacute;n correcta que representa la capa a la que pertenece la soluci&oacute;n JCA (J2EE Connector Architecture)";
 choices[83]= new Array();
 choices[83][0] = "Capa de cliente";
 choices[83][1] = "Capa de l&oacute;gica de negocio";
 choices[83][2] = "Capa de integraci&oacute;n";
 choices[83][3] = "Capa de sistemas de informaci&oacute;n";
 answers[83] = choices[83][3];
 units[83] = "60";
 comments[83] = "Id Pregunta: 9596. Xunta Libre 2011. JCE conecta un servidor JEE con un Sistema de Informaci&oacute;n Empresarial (EIS)";


//  Id pregunta: 9610 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  &iquest;Qu&eacute; versi&oacute;n de SQL permiti&oacute; por primera vez manipular y publicar datos XML?";
 choices[84]= new Array();
 choices[84][0] = "SQL 2000";
 choices[84][1] = "SQL-2003";
 choices[84][2] = "SQL-2006";
 choices[84][3] = "SQL-2008";
 answers[84] = choices[84][2];
 units[84] = "58";
 comments[84] = "Id Pregunta: 9610. NULL";


//  Id pregunta: 9947 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  &iquest;A qu&eacute; perfil de M&eacute;trica v3 pertenece el Responsable de Mantenimiento?";
 choices[85]= new Array();
 choices[85][0] = "Jefe de Proyecto";
 choices[85][1] = "Consultor";
 choices[85][2] = "Analista";
 choices[85][3] = "Programador";
 answers[85] = choices[85][0];
 units[85] = "86";
 comments[85] = "Id Pregunta: 9947. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10003 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  El RD 1720/2007 de 21 de diciembre, por el que se aprueba el reglamento de desarrollo de la Ley Org&aacute;nica de Protecci&oacute;n de Datos, establece que ";
 choices[86]= new Array();
 choices[86][0] = "en ning&uacute;n caso, el encargado de tratamiento podr&aacute; subcontratar a un tercero la realizaci&oacute;n de un tratamiento que le hubiera encomendado el responsable del fichero.";
 choices[86][1] = "los ficheros de datos de car&aacute;cter personal de titularidad p&uacute;blica sujetos a la competencia de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos deber&aacute;n notificarse a &eacute;sta en el plazo de 30 d&iacute;as naturales desde la publicaci&oacute;n en el diario oficial correspondiente.";
 choices[86][2] = "el ejercicio del derecho de acceso por el afectado ser&aacute; resuelto por el Responsable del fichero en el plazo m&aacute;ximo de un mes a contar desde la recepci&oacute;n de la solicitud de acceso.";
 choices[86][3] = "los ficheros y los tratamientos de datos de car&aacute;cter personal se clasifican entres niveles: b&aacute;sico, medio y alto.";
 answers[86] = choices[86][2];
 units[86] = "29";
 comments[86] = "Id Pregunta: 10003. ";


//  Id pregunta: 10045 AÃ±o de creación de pregunta: 2010-01-01
 questions[87]= "88)  La recomendaci&oacute;n X.25 de la ITU (International Telecommunication Union) se refiere a:";
 choices[87]= new Array();
 choices[87][0] = "Interfaz entre el equipo terminal de datos y el equipo de terminaci&oacute;n del circuito de datos para equipos terminales que funcionan en el modo paquete y est&aacute;n conectados a redes p&uacute;blicas de datos por circuitos especializados.";
 choices[87][1] = "Interfaz equipo terminal de datos/equipo de terminaci&oacute;n del circuito de datos para los equipos terminales de datos arr&iacute;tmicos con acceso a la facilidad de ensamblado/desensamblado de paquetes en una red p&uacute;blica de datos situada en elmismo pa&iacute;s.";
 choices[87][2] = "Utilizaci&oacute;n, en las redes p&uacute;blicas de datos, de equipos terminales de datos dise&ntilde;ados para su conexi&oacute;n con m&oacute;dems s&iacute;ncronos de la serie V.";
 choices[87][3] = "Interfaz entre el equipo terminal de datos y el equipo de terminaci&oacute;n del circuito de datos para funcionamiento s&iacute;ncrono en redes p&uacute;blicas de datos.";
 answers[87] = choices[87][0];
 units[87] = "103";
 comments[87] = "Id Pregunta: 10045. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10238 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  Se&ntilde;ala la tecnolog&iacute;a que soporta transacciones:";
 choices[88]= new Array();
 choices[88][0] = "RMI";
 choices[88][1] = "JTS";
 choices[88][2] = "JMAPI";
 choices[88][3] = "JTA";
 answers[88] = choices[88][3];
 units[88] = "116";
 comments[88] = "Id Pregunta: 10238. NULL";


//  Id pregunta: 10283 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  En Sql Server 2012 &iquest;qu&eacute; comando se utiliza para configurar una conexi&oacute;n de servidor de informes?";
 choices[89]= new Array();
 choices[89][0] = "rdlccfg";
 choices[89][1] = "tsmrpt";
 choices[89][2] = "rptsetup";
 choices[89][3] = "rsconfig";
 answers[89] = choices[89][3];
 units[89] = "58";
 comments[89] = "Id Pregunta: 10283. TIC A2, libre, examen 2013";


//  Id pregunta: 10299 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  En la administraci&oacute;n de un dispositivo switch &iquest;qu&eacute; es un trunk?";
 choices[90]= new Array();
 choices[90][0] = "Un puerto de velocidad GigaEthernet o 10 GigaEthernet.";
 choices[90][1] = "Un enlace que agrega tr&aacute;fico de varias VLANs.";
 choices[90][2] = "Un adaptador fibra - par trenzado.";
 choices[90][3] = "Una versi&oacute;n estable del firmware del dispositivo.";
 answers[90] = choices[90][1];
 units[90] = "102";
 comments[90] = "Id Pregunta: 10299. TIC A2, libre, examen 2013";


//  Id pregunta: 10427 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  De acuerdo con la Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los Servicios P&uacute;blicos, el principio de simplificaci&oacute;n administrativa al que se ajustar&aacute; la utilizaci&oacute;n de las tecnolog&iacute;as de la informaci&oacute;n, establece ";
 choices[91]= new Array();
 choices[91][0] = "la m&aacute;xima difusi&oacute;n, publicidad y transparencia del procedimiento.";
 choices[91][1] = "el requerimiento a los ciudadanos de s&oacute;lo aquellos datos que sean estrictamente necesarios a la finalidad para la que se soliciten. ";
 choices[91][2] = "la no utilizaci&oacute;n de medios electr&oacute;nicos que puedan implicar restricciones o";
 choices[91][3] = "la reducci&oacute;n de manera sustancial de los t&eacute;rminos y plazos de los procedimientos administrativos. ";
 answers[91] = choices[91][3];
 units[91] = "30";
 comments[91] = "Id Pregunta: 10427. Examen TIC A1 2013";


//  Id pregunta: 10484 AÃ±o de creación de pregunta: 2014-01-01
 questions[92]= "93)  &iquest;En qu&eacute; se basa el &eacute;todo de Karner?";
 choices[92]= new Array();
 choices[92][0] = "En la estimaci&oacute;n del esfuerzo por puntos de casos de uso en vez de puntos de funci&oacute;n";
 choices[92][1] = "En determinar las constantes a, b, c y de del m&eacute;todo de Putnam";
 choices[92][2] = "Se aplica en Cocomo semipesado";
 choices[92][3] = "Variante del m&eacute;todo Mark II";
 answers[92] = choices[92][0];
 units[92] = "89";
 comments[92] = "Id Pregunta: 10484. NULL";


//  Id pregunta: 10772 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  De acuerdo al art&iacute;culo 7 de la Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica, sobre certificados electr&oacute;nicos de personas jur&iacute;dicas, &iquest;a qui&eacute;n corresponde la responsabilidad de custodiar los datos de firma asociados a un certificado electr&oacute;nico de persona jur&iacute;dica?";
 choices[93]= new Array();
 choices[93][0] = "Al consejero de la persona jur&iacute;dica, cuya identificaci&oacute;n se incluye en el certificado electr&oacute;nico.";
 choices[93][1] = "A la persona f&iacute;sica solicitante del certificado, cuya identificaci&oacute;n se incluye en el certificado electr&oacute;nico.";
 choices[93][2] = "Al prestador de servicios de certificaci&oacute;n, por ser quien firma el certificado electr&oacute;nico.";
 choices[93][3] = "Al representante de la persona jur&iacute;dica de certificaci&oacute;n, cuya identificaci&oacute;n se incluye en el certificado electr&oacute;nico.";
 answers[93] = choices[93][1];
 units[93] = "30";
 comments[93] = "Id Pregunta: 10772. Examen GSI 2014";


//  Id pregunta: 11117 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Seleccione la respuesta verdadera respecto a la publicidad de los procedimientos negociados:";
 choices[94]= new Array();
 choices[94][0] = "No se requiere publicidad en el caso de contratos cuyo valor estimado sea IGUAL o MENOR de 120.000";
 choices[94][1] = "El &oacute;rgano de contrataci&oacute;n solicitar&aacute; ofertas, al menos a 5 empresas capaces de realizar el objeto del contrato, cuando ello sea posible.";
 choices[94][2] = "El procedimiento permite la negociaci&oacute;n de las condiciones del contrato.";
 choices[94][3] = "Es el procedimiento ordinario de adjudicaci&oacute;n en los contratos de colaboraci&oacute;n entre el sector p&uacute;blico y el sector privado.";
 answers[94] = choices[94][2];
 units[94] = "41";
 comments[94] = "Id Pregunta: 11117. ";


//  Id pregunta: 11392 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes definiciones es el mejor ejemplo de una soluci&oacute;n temporal (workaround)?";
 choices[95]= new Array();
 choices[95][0] = "Un t&eacute;cnico instala un script para redirigir la impresi&oacute;n a una impresora alternativa hasta que se pueda aplicar una soluci&oacute;n permanente";
 choices[95][1] = "Un t&eacute;cnico intenta resolver una incidencia de diferentes maneras. Una de ellas funciona aunque no sabe cu&aacute;l.";
 choices[95][2] = "Despu&eacute;s de notificar la incidencia al centro de servicio, el usuario se dedica a otras tareas mientras se identifica y resuelve el problema";
 choices[95][3] = "Un dispositivo funciona de forma intermitente, permitiendo al usuario trabajar con un rendimiento degradado mientras el t&eacute;cnico diagnostica la incidencia";
 answers[95] = choices[95][0];
 units[95] = "98";
 comments[95] = "Id Pregunta: 11392. ";


//  Id pregunta: 11403 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes afirmaciones sobre gesti&oacute;n de suministradores es incorrecta?";
 choices[96]= new Array();
 choices[96][0] = "La gesti&oacute;n de suministradores negocia acuerdos de nivel operacional (OLA)";
 choices[96][1] = "La gesti&oacute;n de suministradores asegura que los suministradores cumplan con las expectativas del negocio";
 choices[96][2] = "La gesti&oacute;n de suministradores mantiene informaci&oacute;n en un sistema de gesti&oacute;n de suministradores y contratos";
 choices[96][3] = "La gesti&oacute;n de suministradores negocia acuerdos externos para ayudar en la provisi&oacute;n de servicios";
 answers[96] = choices[96][0];
 units[96] = "98";
 comments[96] = "Id Pregunta: 11403. ";


//  Id pregunta: 11456 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Sobre los plazos relacionados con las decisiones sobre los otorgamientos de derechos de uso en la Ley 9/2014, General de Telecomunicaciones, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?:";
 choices[97]= new Array();
 choices[97][0] = "El plazo m&aacute;ximo entre la recepci&oacute;n de la solicitud y la adopci&oacute;n y publicaci&oacute;n de decisiones es de 6 semanas.";
 choices[97][1] = "El plazo m&aacute;ximo entre la petici&oacute;n y la decisi&oacute;n sin hacerla p&uacute;blica  es de 3 semanas.";
 choices[97][2] = "El plazo m&aacute;ximo entre la recepci&oacute;n de solicitud y la adopci&oacute;n, comunicaci&oacute;n y publicaci&oacute;n de decisiones es de 3 semanas, salvo cuando se apliquen procedimientos de selecci&oacute;n comparativa o competitiva.";
 choices[97][3] = "Ninguna de las anteriores es correcta.";
 answers[97] = choices[97][2];
 units[97] = "110";
 comments[97] = "Id Pregunta: 11456. ";


//  Id pregunta: 11652 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  En IPv6, desaparece el direccionamiento:";
 choices[98]= new Array();
 choices[98][0] = "Unicast";
 choices[98][1] = "Multicast";
 choices[98][2] = "Anycast";
 choices[98][3] = "Broadcast";
 answers[98] = choices[98][3];
 units[98] = "100";
 comments[98] = "Id Pregunta: 11652. ";


//  Id pregunta: 11730 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Qu&eacute;  protocolo, en el &aacute;mbito de Ipsec, proporciona confidencialidad de los datos y la autenticaci&oacute;n de paquetes IP?";
 choices[99]= new Array();
 choices[99][0] = "AH";
 choices[99][1] = "RSA";
 choices[99][2] = "IKE";
 choices[99][3] = "ESP";
 answers[99] = choices[99][3];
 units[99] = "111";
 comments[99] = "Id Pregunta: 11730. NULL";


