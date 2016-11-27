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

//  Id pregunta: 1983 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l no es una innovaci&oacute;n aplicable al modelo en cascada que permita mejorar algunas de las deficiencias del modelo y aumentar su eficacia?:";
 choices[0]= new Array();
 choices[0][0] = "Utilizaci&oacute;n de herramientas CASE";
 choices[0][1] = "Codificaci&oacute;n y pruebas de los m&oacute;dulos de m&aacute;s bajo nivel en primer lugar";
 choices[0][2] = "Realizaci&oacute;n de fases en paralelo";
 choices[0][3] = "Utilizar t&eacute;cnicas de an&aacute;lisis de riesgos y de coste-beneficio";
 answers[0] = choices[0][1];
 units[0] = "76";
 comments[0] = "Id Pregunta: 1983. ";


//  Id pregunta: 2015 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre los Diagramas de Flujo de Datos es falsa?";
 choices[1]= new Array();
 choices[1][0] = "Un proceso puede ser tanto origen como final de unos datos";
 choices[1][1] = "Una entidad externa puede aparecer varias veces en un mismo diagrama";
 choices[1][2] = "Los flujos de datos dirigidos a almacenes de datos pueden ser de consulta, de actualizaci&oacute;n y de di&aacute;logo";
 choices[1][3] = "Un almac&eacute;n de datos no puede crear, transformar ni modificar datos";
 answers[1] = choices[1][0];
 units[1] = "86";
 comments[1] = "Id Pregunta: 2015. Examen TIC MAP B 2004";


//  Id pregunta: 2045 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  Una Organizaci&oacute;n que este en el nivel 1 (Inicial) del Modelo de Capacidad de Madurez (CMM: Computer Capability Model) en el desarrollo del software, est&aacute;:";
 choices[2]= new Array();
 choices[2][0] = "En una fase preliminar de determinaci&oacute;n de la viabilidad del proyecto";
 choices[2][1] = "En una situaci&oacute;n donde el proyecto esta conforme a sus especificaciones originales y no ha sufrido todav&iacute;a modificaciones";
 choices[2][2] = "En una situaci&oacute;n ideal, con altos estandares de gesti&oacute;n y calidad implementados";
 choices[2][3] = "En una situaci&oacute;n en la que no se hace ning&uacute;n esfuerzo en la garant&iacute;a de calidad y gesti&oacute;n de proyectos";
 answers[2] = choices[2][3];
 units[2] = "27";
 comments[2] = "Id Pregunta: 2045. Pregunta TIC-B 2003";


//  Id pregunta: 2096 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  En an&aacute;lisis documental al nivel en el que se extraen las palabras claves m&aacute;s representativas del contenido del documento, se denomina:";
 choices[3]= new Array();
 choices[3][0] = "Nivel de asiento";
 choices[3][1] = "Nivel de descriptor";
 choices[3][2] = "Nivel de resumen";
 choices[3][3] = "Nivel documental";
 answers[3] = choices[3][1];
 units[3] = "95";
 comments[3] = "Id Pregunta: 2096. NULL";


//  Id pregunta: 2109 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest; De los siguientes, cu&aacute;l es un lenguaje orientado a objetos puro?:";
 choices[4]= new Array();
 choices[4][0] = "Dominum";
 choices[4][1] = "PureLisp";
 choices[4][2] = "Eiffel";
 choices[4][3] = "Domino";
 answers[4] = choices[4][2];
 units[4] = "82";
 comments[4] = "Id Pregunta: 2109. ";


//  Id pregunta: 2122 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;Cu&aacute;l de las siguientes actividades se engloban, en M&eacute;trica V3, en el proceso &lsquo;Estudio de Viabilidad del Sistema&rsquo;?:";
 choices[5]= new Array();
 choices[5][0] = "Estudio de la situaci&oacute;n actual";
 choices[5][1] = "Definici&oacute;n de requisitos del sistema ";
 choices[5][2] = "Estudio de alternativas de soluci&oacute;n";
 choices[5][3] = "Todas las anteriores";
 answers[5] = choices[5][3];
 units[5] = "86";
 comments[5] = "Id Pregunta: 2122. NULL";


//  Id pregunta: 2156 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Cual de los siguientes no es uno de los 10 items de riesgo del software m&aacute;s importantes que se consideran en el modelo en espiral?:";
 choices[6]= new Array();
 choices[6][0] = "Escasez de personal";
 choices[6][1] = "Calendario no realista";
 choices[6][2] = "Componentes hardware no tiene calidad adecuada";
 choices[6][3] = "Componentes del exterior no tienen calidad adecuada";
 answers[6] = choices[6][2];
 units[6] = "76";
 comments[6] = "Id Pregunta: 2156. ";


//  Id pregunta: 2240 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  CODE-AND-FIX:";
 choices[7]= new Array();
 choices[7][0] = "Es un m&eacute;todo de an&aacute;lisis";
 choices[7][1] = "Es un m&eacute;todo de dise&ntilde;o";
 choices[7][2] = "Es una forma de resolver los errores originados por otros programadores";
 choices[7][3] = "Ninguna de las anteriores";
 answers[7] = choices[7][3];
 units[7] = "76";
 comments[7] = "Id Pregunta: 2240. ";


//  Id pregunta: 2256 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Dentro del Plan de Sistemas se encuentra el dise&ntilde;o del sistema de informaci&oacute;n en el que se encuadran una serie de actividades. Indicar qu&eacute; actividad de las que a continuaci&oacute;n se relacionan debe excluirse de este contexto:";
 choices[8]= new Array();
 choices[8][0] = "Determinaci&oacute;n de la estructura de la organizaci&oacute;n inform&aacute;tica";
 choices[8][1] = "Determinaci&oacute;n de la carga de procesos batch";
 choices[8][2] = "Determinaci&oacute;n de la metodolog&iacute;a a emplear en el desarrollo de las aplicaciones";
 choices[8][3] = "Determinaci&oacute;n de los propietarios de los diferentes conjuntos de datos";
 answers[8] = choices[8][0];
 units[8] = "77";
 comments[8] = "Id Pregunta: 2256. ";


//  Id pregunta: 2266 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  El coste de la no calidad viene dado por:";
 choices[9]= new Array();
 choices[9][0] = "Evaluaci&oacute;n del producto final";
 choices[9][1] = "Fallos internos";
 choices[9][2] = "Fallos internos y externos";
 choices[9][3] = "Fallos externos con responsabilidad propia";
 answers[9] = choices[9][2];
 units[9] = "88";
 comments[9] = "Id Pregunta: 2266. ";


//  Id pregunta: 2285 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  La m&eacute;trica puntos de funci&oacute;n se considera una m&eacute;trica de:";
 choices[10]= new Array();
 choices[10][0] = "Calidad";
 choices[10][1] = "Tiempo de desarrollo";
 choices[10][2] = "Tama&ntilde;o";
 choices[10][3] = "Resultados";
 answers[10] = choices[10][2];
 units[10] = "89";
 comments[10] = "Id Pregunta: 2285. Preparatic XVII";


//  Id pregunta: 2312 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  En el modelo en cascada del ciclo de vida de un &quot;software&quot;, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?:";
 choices[11]= new Array();
 choices[11][0] = "La fase de especificaci&oacute;n de requisitos depende del entorno tecnol&oacute;gico del Sistema de Informaci&oacute;n (SI)";
 choices[11][1] = "Se puede pasar por las fases de planificaci&oacute;n, especificaci&oacute;n de requisitos, dise&ntilde;o, codificaci&oacute;n y pruebas, sin necesidad de completar cada una de ellas";
 choices[11][2] = "La fase de dise&ntilde;o se denomina an&aacute;lisis funcional";
 choices[11][3] = "La decisi&oacute;n del paso de una fase a la siguiente se toma en funci&oacute;n de si la documentaci&oacute;n asociada a esa fase est&aacute; completa o no";
 answers[11] = choices[11][3];
 units[11] = "76";
 comments[11] = "Id Pregunta: 2312. ";


//  Id pregunta: 2322 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  En la fase 'Planificaci&oacute;n' de un modelo en cascada, es necesario fijar:";
 choices[12]= new Array();
 choices[12][0] = "&Aacute;mbito de trabajo a realizar";
 choices[12][1] = "Tareas a realizar";
 choices[12][2] = "Referencias a tener en cuenta";
 choices[12][3] = "Todas las anteriores respuestas son correctas";
 answers[12] = choices[12][3];
 units[12] = "76";
 comments[12] = "Id Pregunta: 2322. ";


//  Id pregunta: 2349 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  En un DFD, se&ntilde;alar aquella situaci&oacute;n que no es correcta:";
 choices[13]= new Array();
 choices[13][0] = "Una entidad externa se relaciona con un proceso mediante uno o varios flujos de datos";
 choices[13][1] = "Un almac&eacute;n se repite en varios niveles de DFDs";
 choices[13][2] = "Dos procesos se pueden comunicar, enviando datos de uno a otro, siempre que lacomunicaci&oacute;n entre ellos sea as&iacute;ncrona";
 choices[13][3] = "Un flujo de datos entra en un proceso que s&oacute;lo realiza la transformaci&oacute;n de dividir el flujo entrante en dos flujos salientes";
 answers[13] = choices[13][2];
 units[13] = "81";
 comments[13] = "Id Pregunta: 2349. ";


//  Id pregunta: 2384 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  Indicar cu&aacute;l es una regla de construcci&oacute;n de un proceso dentro de un Diagrama de Flujo de Datos:";
 choices[14]= new Array();
 choices[14][0] = "Los procesos transforman los flujos de datos de entrada en flujos de salida de datos";
 choices[14][1] = "Se puede transformar un dato en varios mediante un proceso";
 choices[14][2] = "Se necesita siempre un proceso entre una entidad externa y un almac&eacute;n de datos";
 choices[14][3] = "Todas las anteriores son reglas de construcci&oacute;n de un proceso";
 answers[14] = choices[14][3];
 units[14] = "81";
 comments[14] = "Id Pregunta: 2384. ";


//  Id pregunta: 2385 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  Indicar cu&aacute;l no es un factor de calidad, seg&uacute;n McCall, desde un punto de vista de explotaci&oacute;n:";
 choices[15]= new Array();
 choices[15][0] = "Usabilidad";
 choices[15][1] = "Eficiencia";
 choices[15][2] = "Correcci&oacute;n";
 choices[15][3] = "Mantenibilidad";
 answers[15] = choices[15][3];
 units[15] = "88";
 comments[15] = "Id Pregunta: 2385. ";


//  Id pregunta: 2387 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  Indicar cu&aacute;l no es un factor de calidad, seg&uacute;n McCall, desde un punto de vista de transici&oacute;n:";
 choices[16]= new Array();
 choices[16][0] = "Reusabilidad";
 choices[16][1] = "Flexibilidad";
 choices[16][2] = "Portabilidad";
 choices[16][3] = "Interoperabilidad";
 answers[16] = choices[16][1];
 units[16] = "88";
 comments[16] = "Id Pregunta: 2387. NULL";


//  Id pregunta: 2420 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  El nivel que marca la verdadera frontera de la comprensi&oacute;n y utilizaci&oacute;n del lenguaje natural con la inteligencia artificial es:";
 choices[17]= new Array();
 choices[17][0] = "El niv&eacute;l ac&uacute;stico";
 choices[17][1] = "El nivel fonol&oacute;gico";
 choices[17][2] = "El nivel sem&aacute;ntico-pragm&aacute;tico";
 choices[17][3] = "El nivel pros&oacute;dico";
 answers[17] = choices[17][2];
 units[17] = "94";
 comments[17] = "Id Pregunta: 2420. ";


//  Id pregunta: 2423 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  El tesauro es un diccionario din&aacute;mico de descriptores que pasa las relaciones entre sus t&eacute;rminos:";
 choices[18]= new Array();
 choices[18][0] = "En operadores de jerarqu&iacute;a";
 choices[18][1] = "En operaciones asociativos";
 choices[18][2] = "En operadores sem&aacute;nticos y preferenciales";
 choices[18][3] = "Son correctas todas las respuestas anteriores";
 answers[18] = choices[18][3];
 units[18] = "96";
 comments[18] = "Id Pregunta: 2423. NULL";


//  Id pregunta: 2442 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  Las funciones primitivas del modelo l&oacute;gico de procesos:";
 choices[19]= new Array();
 choices[19][0] = "Se pueden descomponer en m&oacute;dulos elementales de proceso";
 choices[19][1] = "Son procesos que no se descomponen m&aacute;s";
 choices[19][2] = "Pueden aparecer en todos los niveles del modelo, incluso en el diagrama de contexto ";
 choices[19][3] = "Incluyen s&oacute;lo informaci&oacute;n sobre el modo de acceso a los datos del sistema";
 answers[19] = choices[19][1];
 units[19] = "81";
 comments[19] = "Id Pregunta: 2442. ";


//  Id pregunta: 2447 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Las relaciones denominadas maestro-detalle, corresponden a:";
 choices[20]= new Array();
 choices[20][0] = "Relaciones con cardinalidad n:m";
 choices[20][1] = "Relaciones con cardinalidad 1:1";
 choices[20][2] = "Relaciones unarias";
 choices[20][3] = "Relaciones con cardinalidad 1:n";
 answers[20] = choices[20][3];
 units[20] = "80";
 comments[20] = "Id Pregunta: 2447. ";


//  Id pregunta: 2449 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  Las series ISO-9000, desde el punto de vista de su &aacute;mbito, podr&iacute;an calificarse como:";
 choices[21]= new Array();
 choices[21][0] = "Certificaci&oacute;n de producto";
 choices[21][1] = "Certificaci&oacute;n de proceso (sistema de calidad)";
 choices[21][2] = "Total Quality Management";
 choices[21][3] = "Ninguno de los anteriores";
 answers[21] = choices[21][1];
 units[21] = "87";
 comments[21] = "Id Pregunta: 2449. NULL";


//  Id pregunta: 2468 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  No es un &quot;resultado&quot; del modelo EFQM:";
 choices[22]= new Array();
 choices[22][0] = "El impacto en la sociedad";
 choices[22][1] = "Satisfacci&oacute;n del Personal";
 choices[22][2] = "Resultados empresariales.";
 choices[22][3] = "El manual de calidad de la empresa";
 answers[22] = choices[22][3];
 units[22] = "92";
 comments[22] = "Id Pregunta: 2468. NULL";


//  Id pregunta: 2491 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Se&ntilde;alar cual es la informaci&oacute;n correcta respecto a las pruebas:";
 choices[23]= new Array();
 choices[23][0] = "Los casos de prueba bien elegidos son los que tienen gran probabilidad de demostrar que el software funciona bien";
 choices[23][1] = "Las pruebas no tienen que documentarse porque jam&aacute;s tienen que repetirse o revisarse";
 choices[23][2] = "Debe contemplar &uacute;nicamente casos imprevistos o entradas no v&aacute;lidas";
 choices[23][3] = "Ninguna de las anteriores respuetas es correcta";
 answers[23] = choices[23][3];
 units[23] = "86";
 comments[23] = "Id Pregunta: 2491. NULL";


//  Id pregunta: 2509 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Un sistema de an&aacute;lisis de sistema en tiempo real puede ser:";
 choices[24]= new Array();
 choices[24][0] = "DOLMEN.";
 choices[24][1] = "DESIGN RT.";
 choices[24][2] = "RT-XML.";
 choices[24][3] = "DARTS.";
 answers[24] = choices[24][3];
 units[24] = "83";
 comments[24] = "Id Pregunta: 2509. ";


//  Id pregunta: 2532 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  En tratamiento digital de im&aacute;genes:";
 choices[25]= new Array();
 choices[25][0] = "El filtro de mediana es un filtro paso alto";
 choices[25][1] = "Un filtro paso bajo suaviza los contornos, provocando difusi&oacute;n en la imagen";
 choices[25][2] = "Las respuestas 'a' y 'b' son correctas";
 choices[25][3] = "Las respuestas 'a' y 'b' son falsas";
 answers[25] = choices[25][1];
 units[25] = "93";
 comments[25] = "Id Pregunta: 2532. NULL";


//  Id pregunta: 2537 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  La resoluci&oacute;n de las c&aacute;maras fotogr&aacute;ficas digitales se mide com&uacute;nmente en:";
 choices[26]= new Array();
 choices[26][0] = "Megabytes";
 choices[26][1] = "Megabits";
 choices[26][2] = "Megahertzios";
 choices[26][3] = "Megap&iacute;xeles";
 answers[26] = choices[26][3];
 units[26] = "93";
 comments[26] = "Id Pregunta: 2537. NULL";


//  Id pregunta: 2626 AÃ±o de creación de pregunta: 2003-01-01
 questions[27]= "28)  &iquest;En el Modelo Entidad Relaci&oacute;n, qu&eacute; es el tipo de correspondencia?";
 choices[27]= new Array();
 choices[27][0] = "Es el n&uacute;mero de entidades que participan en una asociaci&oacute;n.";
 choices[27][1] = "Representa el tipo de entidades que participan en una asociaci&oacute;n";
 choices[27][2] = "Es el n&uacute;mero m&iacute;nimo y m&aacute;ximo de ocurrencias de una entidad que pueden estar asociadas con una ocurrencia de otra u otras entidades participantes en la asociaci&oacute;n.";
 choices[27][3] = "Es el n&uacute;mero m&aacute;ximo de ocurrencias de cada entidad conectada que pueden intervenir en una ocurrencia de la asociaci&oacute;n.";
 answers[27] = choices[27][3];
 units[27] = "80";
 comments[27] = "Id Pregunta: 2626. ";


//  Id pregunta: 2633 AÃ±o de creación de pregunta: 2003-01-01
 questions[28]= "29)  &iquest;Qu&eacute; relaci&oacute;n hay entre usuarios y actores en la t&eacute;cnica de los casos de uso?";
 choices[28]= new Array();
 choices[28][0] = "Un usuario se identifica &uacute;nicamente con un actor";
 choices[28][1] = "Un usuario solamente puede ser varios actores";
 choices[28][2] = "Un actor solamente puede ser varios usuarios";
 choices[28][3] = "Un actor puede ser varios usuarios y un usuario varios actores";
 answers[28] = choices[28][3];
 units[28] = "78,84";
 comments[28] = "Id Pregunta: 2633. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 2672 AÃ±o de creación de pregunta: 2003-01-01
 questions[29]= "30)  En los Sistemas de Recuperaci&oacute;n de Informaci&oacute;n el m&eacute;todo que consiste en que el usuario indica si entre los textos recuperados hay algunos relevantes o no, y el sistema modifica as&iacute; el vector de b&uacute;squeda se denomina:";
 choices[29]= new Array();
 choices[29][0] = "Retroalimentaci&oacute;n.";
 choices[29][1] = "Modelo booleano.";
 choices[29][2] = "lenguaje natural.";
 choices[29][3] = "L&oacute;gica borrosa.";
 answers[29] = choices[29][0];
 units[29] = "96";
 comments[29] = "Id Pregunta: 2672. NULL";


//  Id pregunta: 2699 AÃ±o de creación de pregunta: 2003-01-01
 questions[30]= "31)  Misi&oacute;n principal de un Sistema de Recuperaci&oacute;n de Informaci&oacute;n:";
 choices[30]= new Array();
 choices[30][0] = "Asistir la b&uacute;squeda de textos en bases de datos relacionales para localizar los documentos o referencias interesantes o relevantes ignorando todas las dem&aacute;s.";
 choices[30][1] = "Asistir la b&uacute;squeda de textos en bases de datos documentales o textuales para localizar los documentos o referencias interesantes o relevantes ignorando todas las dem&aacute;s.";
 choices[30][2] = "Asistir la b&uacute;squeda de textos en bases de datos documentales o textuales para localizar todos los documentos o referencias que aparezcan.";
 choices[30][3] = "Asistir la b&uacute;squeda de im&aacute;genes en bases de datos relacionales para localizar todos los documentos o referencias que aparezcan.";
 answers[30] = choices[30][1];
 units[30] = "96";
 comments[30] = "Id Pregunta: 2699. NULL";


//  Id pregunta: 2726 AÃ±o de creación de pregunta: 2006-01-01
 questions[31]= "32)  De los siguientes aspectos, &iquest;cu&aacute;les no deben considerarse a la hora de efectuar unaPlanificaci&oacute;n Estrat&eacute;gica? :";
 choices[31]= new Array();
 choices[31][0] = "La misi&oacute;n del negocio.";
 choices[31][1] = "La situaci&oacute;n de los competidores.";
 choices[31][2] = "Los hitos o puntos clave en el calendario de actuaci&oacute;n.";
 choices[31][3] = "Deben considerarse todos los aspectos anteriores.";
 answers[31] = choices[31][3];
 units[31] = "77";
 comments[31] = "Id Pregunta: 2726. ";


//  Id pregunta: 2761 AÃ±o de creación de pregunta: 2006-01-01
 questions[32]= "33)  DARTS es:";
 choices[32]= new Array();
 choices[32][0] = "Un entorno de desarrollo J2EE.";
 choices[32][1] = "Un entorno de desarrollo .NET.";
 choices[32][2] = "Una extensi&oacute;n del An&aacute;lisis y Dise&ntilde;o Estructurados para el dise&ntilde;o de sistemas en tiempo real.";
 choices[32][3] = "Una metodolog&iacute;a para el dise&ntilde;o de Data Marts.";
 answers[32] = choices[32][2];
 units[32] = "83";
 comments[32] = "Id Pregunta: 2761. ";


//  Id pregunta: 2804 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  El conjunto de tareas a realizar para asegurar la calidad de un producto software se conoce como:";
 choices[33]= new Array();
 choices[33][0] = "Control de Calidad";
 choices[33][1] = "Modelo de Calidad";
 choices[33][2] = "Plan General de Calidad";
 choices[33][3] = "Garant&iacute;a de Calidad";
 answers[33] = choices[33][3];
 units[33] = "87";
 comments[33] = "Id Pregunta: 2804. NULL";


//  Id pregunta: 2814 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  En el modelo EFQM la suma de puntuaci&oacute;n m&aacute;xima de todos los criterios es 1000. &iquest;C&uacute;al de los siguientes criterios da m&aacute;s puntuaci&oacute;n?";
 choices[34]= new Array();
 choices[34][0] = "Impacto social";
 choices[34][1] = "Resultado global del negocio";
 choices[34][2] = "Satisfacci&oacute;n de los clientes";
 choices[34][3] = "Procesos";
 answers[34] = choices[34][2];
 units[34] = "88";
 comments[34] = "Id Pregunta: 2814. NULL";


//  Id pregunta: 2825 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  Sobre el M&Eacute;TODO DE JONES se puede decir...";
 choices[35]= new Array();
 choices[35][0] = "Jones utiliza el Rect&aacute;ngulo de Probabilidades para calcular el coste m&aacute;ximo y m&iacute;nimo del mantenimiento (en el caso menos favorable y en el m&aacute;s favorable), e indica que el coste estimado cae dentro del Rect&aacute;ngulo de Probabilidades.";
 choices[35][1] = "Una desventaja de las unidades de costo es que todos los gastos asociados al mantenimiento no se pueden expresar en la misma unidad. ";
 choices[35][2] = "Se estima el n&uacute;mero de unidades programables que hay que mantener y se calcula el n&uacute;mero de personas requeridas para gestionar el mismo bas&aacute;ndose en datos hist&oacute;ricos de proyectos anteriores y en la experiencia.";
 choices[35][3] = "Se basa en el Tr&aacute;fico de Cambio Anual&quot; de Boehm.";
 answers[35] = choices[35][0];
 units[35] = "90";
 comments[35] = "Id Pregunta: 2825. ";


//  Id pregunta: 2843 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  Un filtro de Prewitt es ";
 choices[36]= new Array();
 choices[36][0] = "un filtro de mediana empleado para realizar realces geom&eacute;tricos";
 choices[36][1] = "un filtro de mediana empleado para realizar realces radiom&eacute;tricos";
 choices[36][2] = "es similar en concepto a un filtro de Tukey";
 choices[36][3] = "un filtro paso alto empleado para realizar realces geom&eacute;tricos";
 answers[36] = choices[36][3];
 units[36] = "93";
 comments[36] = "Id Pregunta: 2843. NULL";


//  Id pregunta: 4284 AÃ±o de creación de pregunta: 2007-01-01
 questions[37]= "38)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre las estructuras de datos no es correcta?";
 choices[37]= new Array();
 choices[37][0] = "Una estructura de datos es un conjunto de variables de determinado tipo, agrupadas y organizadas para representar un comportamiento";
 choices[37][1] = "En general, la elecci&oacute;n del algoritmo y de las estructuras de datos que manipular&aacute; no tienen mucha relaci&oacute;n (bajo acoplamiento).";
 choices[37][2] = "Con las estructuras de datos se pretende facilitar un esquema l&oacute;gico para manipular los datos en funci&oacute;n del problema a resolver.";
 choices[37][3] = "Las estructuras de datos pueden ser est&aacute;ticas y din&aacute;micas.";
 answers[37] = choices[37][1];
 units[37] = "79";
 comments[37] = "Id Pregunta: 4284. ";


//  Id pregunta: 4372 AÃ±o de creación de pregunta: 2007-01-01
 questions[38]= "39)  Una caracter&iacute;stica distintiva del modelo de ciclo de vida en espiral respecto a los modelos cl&aacute;sicos de ciclo de vida es la inclusi&oacute;n en el primero de actividades de:";
 choices[38]= new Array();
 choices[38][0] = "Codificaci&oacute;n.";
 choices[38][1] = "Mantenimiento";
 choices[38][2] = "An&aacute;lisis de riesgo.";
 choices[38][3] = "Dise&ntilde;o.";
 answers[38] = choices[38][2];
 units[38] = "76";
 comments[38] = "Id Pregunta: 4372. ";


//  Id pregunta: 4382 AÃ±o de creación de pregunta: 2007-01-01
 questions[39]= "40)  &iquest;Cu&aacute;l de las siguientes actividades se engloba, en m&eacute;trica V3, en el proceso de construcci&oacute;n del sistema?";
 choices[39]= new Array();
 choices[39][0] = "Generaci&oacute;n de especificaciones de construcci&oacute;n.";
 choices[39][1] = "Ejecuci&oacute;n de las pruebas unitarias.";
 choices[39][2] = "Definici&oacute;n de interfaces de usuario.";
 choices[39][3] = "Incorporaci&oacute;n del sistema al entorno de operaci&oacute;n.";
 answers[39] = choices[39][1];
 units[39] = "86";
 comments[39] = "Id Pregunta: 4382. NULL";


//  Id pregunta: 4477 AÃ±o de creación de pregunta: 2007-01-01
 questions[40]= "41)  &iquest;Qu&eacute; es el metamodelo SPEM?";
 choices[40]= new Array();
 choices[40][0] = "Un lenguaje gen&eacute;rico que extiende UML para el modelado descriptivo de procesos de software.";
 choices[40][1] = "Un m&eacute;trica de software para Ia medici&oacute;n de proyectos.";
 choices[40][2] = "Un consorcio mundial para la creaci&oacute;n de lenguajes de modelado.";
 choices[40][3] = "Un est&aacute;ndar para la creaci&oacute;n de roles de usuario.";
 answers[40] = choices[40][0];
 units[40] = "";
 comments[40] = "Id Pregunta: 4477. ";


//  Id pregunta: 4580 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  Dentro del estudio de viabilidad del sistema para realizar Ia actividad de Estudio de Ia situaci&oacute;n actual, M&eacute;trica V3 propone utilizar entre otras t&eacute;cnicas:";
 choices[41]= new Array();
 choices[41][0] = "el diagrama de clases, el diagrama de descomposici&oacute;n funcional y el diagrama de flujo de datos";
 choices[41][1] = "el an&aacute;lisis de coste/beneficio, el diagrama de clases y los casos de use";
 choices[41][2] = "la catalogaci&oacute;n, el diagrama de clases y el diagrama de flujo de datos";
 choices[41][3] = "el diagrama de flujo de datos, el diagrama de representaci&oacute;n y el diagrama de descomposici&oacute;n funcional";
 answers[41] = choices[41][2];
 units[41] = "86";
 comments[41] = "Id Pregunta: 4580. NULL";


//  Id pregunta: 4673 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  Una m&eacute;trica basada en la calidad del software utiliza como factores de calidad desde un punto de vistade explotaci&oacute;n:";
 choices[42]= new Array();
 choices[42][0] = "Reusabilidad, Seguridad, Eficiencia, Correcci&oacute;n y Fiabilidad";
 choices[42][1] = "Usabilidad, Seguridad, Eficiencia, Correccion y Fiabilidad";
 choices[42][2] = "Usabilidad, Seguridad, Mantenibilidad, Correcci&oacute;n y Fiabilidad";
 choices[42][3] = "Usabilidad, Seguridad, Portabilidad, Correcci&oacute;n y Fiabilidad";
 answers[42] = choices[42][1];
 units[42] = "88";
 comments[42] = "Id Pregunta: 4673. Examen 2006 JCYL";


//  Id pregunta: 4938 AÃ±o de creación de pregunta: 2003-01-01
 questions[43]= "44)  La notaci&oacute;n de un diagrama Entidad-Relaci&oacute;n no permite representar:";
 choices[43]= new Array();
 choices[43][0] = "Jerarqu&iacute;as de tipos de objetos de datos.";
 choices[43][1] = "Asociaci&oacute;n de objetos de datos.";
 choices[43][2] = "Transformaciones de objetos de datos.";
 choices[43][3] = "La relaci&oacute;n entre objetos de datos.";
 answers[43] = choices[43][2];
 units[43] = "80";
 comments[43] = "Id Pregunta: 4938. Examen TIC B 2007";


//  Id pregunta: 4942 AÃ±o de creación de pregunta: 2003-01-01
 questions[44]= "45)  La Programaci&oacute;n Estructurada de Jackson es una t&eacute;cnica de dise&ntilde;o:";
 choices[44]= new Array();
 choices[44][0] = "Estructurado.";
 choices[44][1] = "Orientada a objetos.";
 choices[44][2] = "Para organizar los datos.";
 choices[44][3] = "De descomposici&oacute;n funcional.";
 answers[44] = choices[44][0];
 units[44] = "83,84";
 comments[44] = "Id Pregunta: 4942. Examen TIC B 2007";


//  Id pregunta: 5142 AÃ±o de creación de pregunta: 2003-01-01
 questions[45]= "46)  Indique la secuencia correcta de actividades en que se divide el proceso de Mantenimiento del Sistema de Informaci&oacute;n de M&eacute;trica V3:";
 choices[45]= new Array();
 choices[45][0] = "An&aacute;lisis de la Petici&oacute;n -&gt; Registro de la Petici&oacute;n -&gt; Preparaci&oacute;n de la Implementaci&oacute;n de la Modificaci&oacute;n -&gt; Seguimiento y Evaluaci&oacute;n de los cambios hasta la Aceptaci&oacute;n.";
 choices[45][1] = "An&aacute;lisis de la Petici&oacute;n -&gt; Seguimiento y Evaluaci&oacute;n de los cambios hasta la Aceptaci&oacute;n -&gt; Registro de la Petici&oacute;n -&gt; Preparaci&oacute;n de la Implementaci&oacute;n de la Modificaci&oacute;n.";
 choices[45][2] = "Registro de la Petici&oacute;n -&gt; An&aacute;lisis de la Petici&oacute;n -&gt; Preparaci&oacute;n de la Implementaci&oacute;n de la Modificaci&oacute;n &gt; Seguimiento y Evaluaci&oacute;n de los cambios hasta la Aceptaci&oacute;n.";
 choices[45][3] = "An&aacute;lisis de la Petici&oacute;n -&gt; Preparaci&oacute;n de la Implementaci&oacute;n de la Modificaci&oacute;n -&gt; Seguimiento y Evaluaci&oacute;n de los cambios hasta la Aceptaci&oacute;n -&gt; Registro de la Petici&oacute;n.";
 answers[45] = choices[45][2];
 units[45] = "86";
 comments[45] = "Id Pregunta: 5142. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5189 AÃ±o de creación de pregunta: 2003-01-01
 questions[46]= "47)  &iquest;Cu&aacute;l de las siguientes tecnolog&iacute;as de desarrollo de sistemas distribuidos basados en objetos no es una tecnolog&iacute;a Java de Sun Microsystems?";
 choices[46]= new Array();
 choices[46][0] = "RMI";
 choices[46][1] = "JINI";
 choices[46][2] = "EJB";
 choices[46][3] = "CORBA";
 answers[46] = choices[46][3];
 units[46] = "82";
 comments[46] = "Id Pregunta: 5189. ";


//  Id pregunta: 5192 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  A un sistema OLTP (On-line Transaction Processing) se le exige:";
 choices[47]= new Array();
 choices[47][0] = "Ante una transacci&oacute;n abortada, debe consolidar cualquier modificaci&oacute;n que se haya introducido con anterioridad a la interrupci&oacute;n.";
 choices[47][1] = "Los efectos de una transacci&oacute;n no deben ser observables por ninguna otra transacci&oacute;n hasta que la transacci&oacute;n originaria haya concluido.";
 choices[47][2] = "Si una transacci&oacute;n resulta abortada, no debe restituir el anterior estado v&aacute;lido de los datos.";
 choices[47][3] = "Una vez validada una transacci&oacute;n, las modificaciones introducidas en los datos compartidos sobrevivir&aacute;n salvo que se produzcan fallos futuros en el sistema.";
 answers[47] = choices[47][1];
 units[47] = "83";
 comments[47] = "Id Pregunta: 5192. ";


//  Id pregunta: 5193 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l de las siguientes opciones no es una herramienta de Dise&ntilde;o de Sistemas en Tiempo Real?";
 choices[48]= new Array();
 choices[48][0] = "DARTS.";
 choices[48][1] = "UML - RT.";
 choices[48][2] = "Rational Rose - RT.";
 choices[48][3] = "PERTS.";
 answers[48] = choices[48][0];
 units[48] = "83";
 comments[48] = "Id Pregunta: 5193. ";


//  Id pregunta: 5206 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  En M&eacute;trica v.3 la actividad &ldquo;Revisi&oacute;n de la formaci&oacute;n a usuarios finales&rdquo; del Aseguramiento de la Calidad corresponde al proceso:";
 choices[49]= new Array();
 choices[49][0] = "An&aacute;lisis del Sistema de Informaci&oacute;n";
 choices[49][1] = "Construcci&oacute;n del Sistema de Informaci&oacute;n";
 choices[49][2] = "Implantaci&oacute;n y aceptaci&oacute;n del Sistema";
 choices[49][3] = "Mantenimiento del Sistema de informaci&oacute;n";
 answers[49] = choices[49][1];
 units[49] = "86";
 comments[49] = "Id Pregunta: 5206. NULL";


//  Id pregunta: 5221 AÃ±o de creación de pregunta: 2007-01-01
 questions[50]= "51)  Se&ntilde;ale cu&aacute;l de los siguientes elementos es una pr&aacute;ctica utilizada en m&eacute;trica 3";
 choices[50]= new Array();
 choices[50][0] = "Diagrama de Clases";
 choices[50][1] = "Diagrama de Componentes";
 choices[50][2] = "Revisi&oacute;n T&eacute;cnica";
 choices[50][3] = "Normalizaci&oacute;n";
 answers[50] = choices[50][2];
 units[50] = "86";
 comments[50] = "Id Pregunta: 5221. NULL";


//  Id pregunta: 5257 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  Se&ntilde;ale la falsa:";
 choices[51]= new Array();
 choices[51][0] = "GQM, Goal, Question, Metric, es un m&eacute;todo de desarrollo de m&eacute;tricas";
 choices[51][1] = "El n&uacute;mero de l&iacute;neas de c&oacute;digo se emplea como m&eacute;trica de estimaci&oacute;n de proyectos.";
 choices[51][2] = "Cocomo es un modelo de estimaci&oacute;n algor&iacute;tmico propuesto por Boehm que fundamenta su estimaci&oacute;n en el n&uacute;mero de puntos de funci&oacute;n.";
 choices[51][3] = "Cocomo se aplica en tres modelos: b&aacute;sico, intermedio y avanzado. Estos modelos se dividen a su vez en tres modos: org&aacute;nico, semiacoplado y empotrado.";
 answers[51] = choices[51][2];
 units[51] = "88";
 comments[51] = "Id Pregunta: 5257. NULL";


//  Id pregunta: 5522 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  La medida del n&uacute;mero de bits utilizados para definir cada p&iacute;xel es";
 choices[52]= new Array();
 choices[52][0] = "Resoluci&oacute;n";
 choices[52][1] = "&Aacute;rea de imagen";
 choices[52][2] = "Profundidad de bit o de color";
 choices[52][3] = "Ninguna es verdadera";
 answers[52] = choices[52][2];
 units[52] = "93";
 comments[52] = "Id Pregunta: 5522. NULL";


//  Id pregunta: 5524 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  Indicar la respuesta falsa";
 choices[53]= new Array();
 choices[53][0] = "BMP es un formato de im&aacute;genes sin p&eacute;rdidas que no soporta animaciones ni fondos transparentes";
 choices[53][1] = "GIF es un formato de im&aacute;genes que utiliza el algoritmo de compresi&oacute;n LZW y es v&aacute;lido para animaciones y fondos transparente";
 choices[53][2] = "El formato JPEG sin p&eacute;rdidas permite multip&aacute;gina y es muy adecuado para conservar originales a alta resoluci&oacute;n";
 choices[53][3] = "PNG es un formato sin p&eacute;rdida recomendado por el W3C para la publicaci&oacute;n en web";
 answers[53] = choices[53][2];
 units[53] = "93";
 comments[53] = "Id Pregunta: 5524. NULL";


//  Id pregunta: 5525 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  Las siglas OCR responden a";
 choices[54]= new Array();
 choices[54][0] = "Optical Character Recognition";
 choices[54][1] = "Optical Computer Redefinition";
 choices[54][2] = "Optimal Character Recognition";
 choices[54][3] = "Online Character Recognition";
 answers[54] = choices[54][0];
 units[54] = "94";
 comments[54] = "Id Pregunta: 5525. ";


//  Id pregunta: 5533 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  El Programa IDABC para el periodo 2005 a 2009, &iquest;en qu&eacute; norma europea se basa?";
 choices[55]= new Array();
 choices[55][0] = "Decisi&oacute;n 2004/387/CE";
 choices[55][1] = "Decisi&oacute;n 1719/1999/CE";
 choices[55][2] = "Decisi&oacute;n 1720/1999/CE";
 choices[55][3] = "Directiva 2004/387/CE";
 answers[55] = choices[55][0];
 units[55] = "30";
 comments[55] = "Id Pregunta: 5533. ";


//  Id pregunta: 5540 AÃ±o de creación de pregunta: 2003-01-01
 questions[56]= "57)  Indicar la respuesta falsa sobre modelos de recuperaci&oacute;n de informaci&oacute;n";
 choices[56]= new Array();
 choices[56][0] = "En general, el modelo vectorial se comporta peor que el probabil&iacute;stico cuando se usa contra colecciones gen&eacute;ricas de documentos";
 choices[56][1] = "Las redes neuronales son muy &uacute;tiles en un sistema de recuperaci&oacute;n de informaci&oacute;n por su potencia reconociendo patrones";
 choices[56][2] = "Las redes de inferencia y las redes de confianza son modelos basados en redes bayesianas";
 choices[56][3] = "Los modelos estructurados permiten combinar la especificaci&oacute;n de consultas con la informaci&oacute;n de la estructura del documento";
 answers[56] = choices[56][0];
 units[56] = "96";
 comments[56] = "Id Pregunta: 5540. NULL";


//  Id pregunta: 5541 AÃ±o de creación de pregunta: 2003-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes es un tipo de consulta utilizada para recuperar informaci&oacute;n en la web?";
 choices[57]= new Array();
 choices[57][0] = "Consultas de informaci&oacute;n (informational queries)";
 choices[57][1] = "Consultas transaccionales (transactional queries)";
 choices[57][2] = "Consultas de navegaci&oacute;n (navigational queries)";
 choices[57][3] = "Todas las anteriores son consultas v&aacute;lidas";
 answers[57] = choices[57][3];
 units[57] = "96";
 comments[57] = "Id Pregunta: 5541. NULL";


//  Id pregunta: 5757 AÃ±o de creación de pregunta: 2001-01-01
 questions[58]= "59)  Los objetivos generales que debe cumplir el Plan de Sistemas de Informaci&oacute;n y Comunicaciones son:";
 choices[58]= new Array();
 choices[58][0] = " Establecer pol&iacute;ticas y objetivos coherentes";
 choices[58][1] = "Planificar y controlar con eficacia el proceso de mecanizaci&oacute;n y as&iacute; como definir los requerimientos t&eacute;cnicos necesarios y suficientes ";
 choices[58][2] = "Conocer con cierta aproximaci&oacute;n y de forma anticipada las inversiones, los costes de funcionamiento, los resulta-dos esperados, etc";
 choices[58][3] = "Todas las anteriores";
 answers[58] = choices[58][3];
 units[58] = "77";
 comments[58] = "Id Pregunta: 5757. ";


//  Id pregunta: 5829 AÃ±o de creación de pregunta: 2009-01-01
 questions[59]= "60)  &iquest;Cu&aacute;ntos p&iacute;xeles tiene una ilustraci&oacute;n de 6x6 pulgadas con una resoluci&oacute;n de 300 ppi?";
 choices[59]= new Array();
 choices[59][0] = "540.000 p&iacute;xeles";
 choices[59][1] = "3.240.000 p&iacute;xeles";
 choices[59][2] = "10.800 p&iacute;xeles";
 choices[59][3] = "1.800 p&iacute;xeles";
 answers[59] = choices[59][1];
 units[59] = "93";
 comments[59] = "Id Pregunta: 5829. MAP 2008 A1";


//  Id pregunta: 5848 AÃ±o de creación de pregunta: 2009-01-01
 questions[60]= "61)  En la t&eacute;cnica de estimaci&oacute;n de puntos funci&oacute;n, los puntos funci&oacute;n ajustados se obtienen a partir de los puntos funci&oacute;n no ajustados:";
 choices[60]= new Array();
 choices[60][0] = "Valorando la importancia en el proyecto de 14 caracter&iacute;sticas generales del sistema";
 choices[60][1] = "Multiplicando por un coeficiente que depende del lenguaje de programaci&oacute;n utilizado en el proyecto";
 choices[60][2] = "Teniendo en cuenta la valoraci&oacute;n de 5 factores de escala";
 choices[60][3] = "Teniendo en cuenta la valoraci&oacute;n de 17 factores de coste";
 answers[60] = choices[60][0];
 units[60] = "89";
 comments[60] = "Id Pregunta: 5848. NULL";


//  Id pregunta: 5918 AÃ±o de creación de pregunta: 2009-01-01
 questions[61]= "62)  CobiT identific&oacute; los siguientes elementos clave, con respecto a los aspectos de seguridad:";
 choices[61]= new Array();
 choices[61][0] = "Idoneidad, continuidad de negocio y certificaci&oacute;n internacional";
 choices[61][1] = "Confidencialidad, integridad y disponibilidad";
 choices[61][2] = "Criticidad, autenticaci&oacute;n y consistencia";
 choices[61][3] = "Convergencia, coherencia y salvaguarda";
 answers[61] = choices[61][1];
 units[61] = "98";
 comments[61] = "Id Pregunta: 5918. MAP 2008 A1";


//  Id pregunta: 5973 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  Cu&aacute;l de las siguientes afirmaciones es aplicable a la reingenier&iacute;a basada en &quot;wrapping&quot;:";
 choices[62]= new Array();
 choices[62][0] = "&quot;Wrapping&quot; consiste en envolver interfaces basadas en texto con un entorno gr&aacute;fico basado en GUI o en HTML.";
 choices[62][1] = "La t&eacute;cnica &quot;wrapping&quot; es actualmente conocida como modernizaci&oacute;n de caja blanca.";
 choices[62][2] = "&quot;Wrapping&quot; es una reingenier&iacute;a en las que s&oacute;lo se analizan las interfaces (las entradas y salidas) del &quot;legacy&quot; ignorando los detalles internos.";
 choices[62][3] = "&quot;Wrapping&quot; es una reingenier&iacute;a mediante la cual se produce documentaci&oacute;n retroactivamente desde un sistema existente.";
 answers[62] = choices[62][2];
 units[62] = "91";
 comments[62] = "Id Pregunta: 5973. TIC A 2009";


//  Id pregunta: 6091 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  En relaci&oacute;n con las metodolog&iacute;as ligeras de desarrollo de software, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[63]= new Array();
 choices[63][0] = "Seg&uacute;n el Manifiesto &Aacute;gil, las personas y su interacci&oacute;n deben prevalecer sobre una aplicaci&oacute;n estricta de los procesos y las herramientas.";
 choices[63][1] = "Seg&uacute;n el Manifiesto &Aacute;gil, el seguimiento del plan debe prevalecer sobre la respuesta al cambio.";
 choices[63][2] = "La versi&oacute;n 3 de M&Eacute;TRICA, que soporta tanto desarrollos estructurados como orientados a objetos, es un claro ejemplo de metodolog&iacute;a ligera.";
 choices[63][3] = "La metodolog&iacute;a RUP-Proceso Unificado de Rational es una metodolog&iacute;a ligera.";
 answers[63] = choices[63][0];
 units[63] = "79";
 comments[63] = "Id Pregunta: 6091. TIC A 2009";


//  Id pregunta: 6229 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  El diagrama de Gantt es una herramienta para:";
 choices[64]= new Array();
 choices[64][0] = "Gesti&oacute;n de los recursos";
 choices[64][1] = "Gesti&oacute;n de la calidad";
 choices[64][2] = "Gesti&oacute;n de los riesgos";
 choices[64][3] = "Generaci&oacute;n de gr&aacute;ficas e informes";
 answers[64] = choices[64][0];
 units[64] = "77";
 comments[64] = "Id Pregunta: 6229. TICB-2009, bloque desarrollo";


//  Id pregunta: 6281 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  &iquest;Qu&eacute; t&eacute;cnica se emplea para determinar la situaci&oacute;n real en que se encuentra la organizaci&oacute;n y conocer el riesgo y las oportunidades que le ofrece el mercado?";
 choices[65]= new Array();
 choices[65][0] = "T&eacute;cnica FCE (Factores Cr&iacute;ticos de &Eacute;xito)";
 choices[65][1] = "An&aacute;lisis DAFO ";
 choices[65][2] = "Aprendizaje organizativo";
 choices[65][3] = "An&aacute;lisis econ&oacute;mico del mercado";
 answers[65] = choices[65][1];
 units[65] = "77";
 comments[65] = "Id Pregunta: 6281. ";


//  Id pregunta: 6290 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  &iquest;C&oacute;mo pueden clasificarse los requisitos de un an&aacute;lisis de sistema de informaci&oacute;n seg&uacute;n Sommerville?";
 choices[66]= new Array();
 choices[66][0] = "Requisitos principales y requisitos secundarios";
 choices[66][1] = "Requisitos del cliente y requisitos de la empresa";
 choices[66][2] = "Requisitos a nivel de sistema y requisitos a nivel de software";
 choices[66][3] = "Ninguna de las anteriores";
 answers[66] = choices[66][2];
 units[66] = "78";
 comments[66] = "Id Pregunta: 6290. ";


//  Id pregunta: 6535 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  Dentro de la gu&iacute;a de servicios ISO 9004, la orientaci&oacute;n para la direcci&oacute;n se basa en distintos principios de gesti&oacute;n";
 choices[67]= new Array();
 choices[67][0] = "Enfoque al cliente";
 choices[67][1] = "Liderazgo";
 choices[67][2] = "Participaci&oacute;n del personal";
 choices[67][3] = "Todas las respuestas anteriores son correctas";
 answers[67] = choices[67][3];
 units[67] = "92";
 comments[67] = "Id Pregunta: 6535. NULL";


//  Id pregunta: 6622 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)  &iquest;Cu&aacute;l de los siguientes elementos es una Pr&aacute;ctica y no una T&eacute;cnica seg&uacute;n M&eacute;trica v3?";
 choices[68]= new Array();
 choices[68][0] = "Modelo de Procesos de la Organizaci&oacute;n (SADT)";
 choices[68][1] = "An&aacute;lisis Coste/Beneficio";
 choices[68][2] = "An&aacute;lisis de Impacto";
 choices[68][3] = "Casos de Uso";
 answers[68] = choices[68][2];
 units[68] = "86";
 comments[68] = "Id Pregunta: 6622. NULL";


//  Id pregunta: 6647 AÃ±o de creación de pregunta: 2010-01-01
 questions[69]= "70)  Seg&uacute;n la nomenclatura de Boehm en el modelo COCOMO los proyectos pueden ser:";
 choices[69]= new Array();
 choices[69][0] = "Org&aacute;nicos, semiorg&aacute;nicos y empotrados";
 choices[69][1] = "Org&aacute;nicos, acoplados y empotrados";
 choices[69][2] = "Org&aacute;nicos, acoplados y semiempotrados";
 choices[69][3] = "Org&aacute;nicos, empotrados y semiacoplados";
 answers[69] = choices[69][3];
 units[69] = "89";
 comments[69] = "Id Pregunta: 6647. NULL";


//  Id pregunta: 7293 AÃ±o de creación de pregunta: 2010-01-01
 questions[70]= "71)  Indique cu&aacute;l de las siguientes es una t&eacute;cnica utilizada en conversi&oacute;n texto-voz (TTS)";
 choices[70]= new Array();
 choices[70][0] = "S&iacute;ntesis por octetos";
 choices[70][1] = "S&iacute;ntesis por corpus";
 choices[70][2] = "Concatenaci&oacute;n de octetos";
 choices[70][3] = "Concatenaci&oacute;n de corpus";
 answers[70] = choices[70][1];
 units[70] = "94";
 comments[70] = "Id Pregunta: 7293. NULL";


//  Id pregunta: 8360 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  &iquest;Cu&aacute;l de los siguientes NO es un factor de calidad en el modelo de McCall?";
 choices[71]= new Array();
 choices[71][0] = "Accesibilidad";
 choices[71][1] = "Correcci&oacute;n";
 choices[71][2] = "Reusabilidad";
 choices[71][3] = "Interoperabilidad";
 answers[71] = choices[71][0];
 units[71] = "87.88";
 comments[71] = "Id Pregunta: 8360. Examen TIC A2 2010";


//  Id pregunta: 8387 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  &iquest;Cu&aacute;l de los siguientes productos resultan del proceso de Construcci&oacute;n del SI seg&uacute;n M&eacute;trica v3?";
 choices[72]= new Array();
 choices[72][0] = "Cat&aacute;logo de Requisitos.";
 choices[72][1] = "Especificaciones de Construcci&oacute;n del Sistema.";
 choices[72][2] = "Modelo de Datos.";
 choices[72][3] = "Manuales de Usuario.";
 answers[72] = choices[72][3];
 units[72] = "86";
 comments[72] = "Id Pregunta: 8387. Examen TIC A2 2010";


//  Id pregunta: 8515 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l de los siguientes modelos de ciclo de vida tiene en cuenta el an&aacute;lisis de riesgos?";
 choices[73]= new Array();
 choices[73][0] = "Extreme Programming.";
 choices[73][1] = "Modelo de ciclo de vida en cascada";
 choices[73][2] = "El modelo de ciclo de vida en V";
 choices[73][3] = "Modelo de ciclo de vida en espiral";
 answers[73] = choices[73][3];
 units[73] = "76";
 comments[73] = "Id Pregunta: 8515. Examen TIC A2 2010 interna";


//  Id pregunta: 8634 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  Seg&uacute;n M&eacute;trica v3, &iquest;cu&aacute;l de los siguientes NO es un grupo de actividad de la Gesti&oacute;n de Proyectos?";
 choices[74]= new Array();
 choices[74][0] = "Actividades de Seguimiento y Control.";
 choices[74][1] = "Actividades de Planificaci&oacute;n del Proyecto.";
 choices[74][2] = "Actividades de Finalizaci&oacute;n del Proyecto.";
 choices[74][3] = "Actividades de Inicio del Proyecto.";
 answers[74] = choices[74][1];
 units[74] = "86";
 comments[74] = "Id Pregunta: 8634. Examen TIC A2 2010 interna";


//  Id pregunta: 8635 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  &iquest;Qu&eacute; tipo de diagrama permite estimar la desviaci&oacute;n de un proyecto?";
 choices[75]= new Array();
 choices[75][0] = "Diagrama de Extrapolaci&oacute;n";
 choices[75][1] = "PERT";
 choices[75][2] = "CPM";
 choices[75][3] = "El histograma de recursos";
 answers[75] = choices[75][0];
 units[75] = "28";
 comments[75] = "Id Pregunta: 8635. Examen TIC A2 2010 interna";


//  Id pregunta: 8819 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  &iquest;Cu&aacute;l de estas normas especifica los requisitos para un buen sistema de gesti&oacute;n de calidad?";
 choices[76]= new Array();
 choices[76][0] = "ISO 9001";
 choices[76][1] = "ISO 9000";
 choices[76][2] = "ISO 9004";
 choices[76][3] = "ISO 19011";
 answers[76] = choices[76][0];
 units[76] = "87, 92";
 comments[76] = "Id Pregunta: 8819. Examen UPM A2 2011";


//  Id pregunta: 9176 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  Es un formato de imagen en mapa de bits";
 choices[77]= new Array();
 choices[77][0] = "ODG";
 choices[77][1] = "DXF";
 choices[77][2] = "XCF";
 choices[77][3] = "DWG";
 answers[77] = choices[77][2];
 units[77] = "93";
 comments[77] = "Id Pregunta: 9176. NULL";


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


//  Id pregunta: 9415 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  Cu&aacute;l de las siguientes no es una m&eacute;trica de l&iacute;neas de c&oacute;digo";
 choices[79]= new Array();
 choices[79][0] = "LOC";
 choices[79][1] = "DSI";
 choices[79][2] = "NSLOC";
 choices[79][3] = "LDSI";
 answers[79] = choices[79][3];
 units[79] = "89";
 comments[79] = "Id Pregunta: 9415. NULL";


//  Id pregunta: 9416 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  Cu&aacute;l de los siguientes no es un m&eacute;todo de an&aacute;lisis de Puntos de Funci&oacute;n?";
 choices[80]= new Array();
 choices[80][0] = "M&eacute;todo Albrecht";
 choices[80][1] = "M&eacute;todo MARK II";
 choices[80][2] = "La a) y la b) son correctas";
 choices[80][3] = "Ninguno de los anteriores";
 answers[80] = choices[80][2];
 units[80] = "89";
 comments[80] = "Id Pregunta: 9416. NULL";


//  Id pregunta: 9422 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  Cu&aacute;l de los siguientes no es uno de los tres tipos de proyecto contemplados en el COCOMO cl&aacute;sico/81";
 choices[81]= new Array();
 choices[81][0] = "Org&aacute;nico";
 choices[81][1] = "Acoplado";
 choices[81][2] = "Semiacoplado";
 choices[81][3] = "Empotrado";
 answers[81] = choices[81][1];
 units[81] = "89";
 comments[81] = "Id Pregunta: 9422. NULL";


//  Id pregunta: 9490 AÃ±o de creación de pregunta: 2013-01-01
 questions[82]= "83)  Seg&uacute;n M&eacute;tricav3, &iquest;qu&eacute; verificaciones no se llevan a cabo durante la validaci&oacute;n de requisitos?";
 choices[82]= new Array();
 choices[82][0] = "Verificaciones de integridad";
 choices[82][1] = "Verificaciones de consistencia";
 choices[82][2] = "Verificaciones de completitud";
 choices[82][3] = "Verificaciones de realismo";
 answers[82] = choices[82][0];
 units[82] = "78";
 comments[82] = "Id Pregunta: 9490. ";


//  Id pregunta: 9657 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  &iquest;Qu&eacute; lenguaje de programaci&oacute;n tiene una mayor correspondencia entre L&iacute;neas de C&oacute;digo (LDC) y Puntos de Funci&oacute;n?";
 choices[83]= new Array();
 choices[83][0] = "C";
 choices[83][1] = "Ensamblador";
 choices[83][2] = "Cobol";
 choices[83][3] = "Pascal";
 answers[83] = choices[83][1];
 units[83] = "89";
 comments[83] = "Id Pregunta: 9657. Ensamblador 320 LDC/PF, C 150 LDC/PF, Cobol 106 LDC/PF, Pascal 91 LDC/PF. Fuente: ASTIC";


//  Id pregunta: 9954 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  La actividad EVS-GC 1 de la interface de Gesti&oacute;n de la Configuraci&oacute;n (GC) de M&eacute;trica v3 recibe entre sus entradas un producto resultante de la actividad:";
 choices[84]= new Array();
 choices[84][0] = "EVS 4 - Estudio de Alternativas de Soluci&oacute;n";
 choices[84][1] = "EVS 5 - Valoraci&oacute;n de las Alternativas.";
 choices[84][2] = "EVS 3 - Definici&oacute;n de Requisitos del Sistema.";
 choices[84][3] = "EVS 1 - Establecimiento del Alcance del Sistema. ";
 answers[84] = choices[84][2];
 units[84] = "86";
 comments[84] = "Id Pregunta: 9954. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 9990 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  &iquest;Cu&aacute;l de los siguientes es sistemas de gesti&oacute;n de conocimiento tiene una versi&oacute;n con licencia de fuentes abiertas?";
 choices[85]= new Array();
 choices[85][0] = "Blackboard";
 choices[85][1] = "WebCT";
 choices[85][2] = "Dokeos";
 choices[85][3] = "Desire2Learn";
 answers[85] = choices[85][2];
 units[85] = "66";
 comments[85] = "Id Pregunta: 9990. ";


//  Id pregunta: 9991 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  &iquest;Cu&aacute;l es el formato al que se tienen que ajustar las facturas electr&oacute;nicas que se remitan a las Administraciones P&uacute;blicas, de acuerdo con la ley 25/2013, de 27 de diciembre, de impulso de la factura electr&oacute;nica y creaci&oacute;n del registro contable de facturas en el Sector P&uacute;blico?";
 choices[86]= new Array();
 choices[86][0] = "e-Factura, versi&oacute;n 2.3";
 choices[86][1] = "Facturae, versi&oacute;n 3.2, y versiones sucesivas que publique el Ministerio de Industria, Turismo y Comercio.";
 choices[86][2] = "Facturae, versi&oacute;n 3.2 y 3.2.1, seg&uacute;n resoluci&oacute;n 21 de marzo de 2014";
 choices[86][3] = "ebXML, versi&oacute;n 2.0, hasta que se apruebe la Ley que transpone la Directiva 2006/123/CE sobre actividades de servicio en el mercado interior.";
 answers[86] = choices[86][2];
 units[86] = "70";
 comments[86] = "Id Pregunta: 9991. NULL";


//  Id pregunta: 10104 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  En un DFD, de acuerdo a M&eacute;trica v.3:";
 choices[87]= new Array();
 choices[87][0] = "Existe un diagrama 0 (nivel 0)";
 choices[87][1] = "Existe un diagrama 1 (nivel 0)";
 choices[87][2] = "Existe un diagrama 1 (nivel 1)";
 choices[87][3] = "Existe un diagrama 0 (nivel 1)";
 answers[87] = choices[87][3];
 units[87] = "81";
 comments[87] = "Id Pregunta: 10104. NULL";


//  Id pregunta: 10644 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  &iquest;Cu&aacute;les son los dos modelos de autoevaluaci&oacute;n seg&uacute;n ISO 9004?";
 choices[88]= new Array();
 choices[88][0] = "El de los Criterios Operativos y el de los Criterios Aumentados.";
 choices[88][1] = "El de Estimulaci&oacute;n y el de Mantenimiento.";
 choices[88][2] = "El de Aproximaci&oacute;n Formal y el de Aproximaci&oacute;n Reactiva.";
 choices[88][3] = "El de los Elementos Clave y el de los Elementos Detallados";
 answers[88] = choices[88][3];
 units[88] = "92";
 comments[88] = "Id Pregunta: 10644. ";


//  Id pregunta: 10823 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  En M&eacute;trica v3 las actividades de la Interfaz de Gesti&oacute;n de Proyectos se dividen en los siguientes grupos:";
 choices[89]= new Array();
 choices[89][0] = "Actividades de Comienzo del Proyecto, Actividades de Seguimiento y Control y Actividades de Aceptaci&oacute;n.";
 choices[89][1] = "Actividades de Planificaci&oacute;n del Proyecto, Actividades de Control de proyectos y Actividades de Aceptaci&oacute;n.";
 choices[89][2] = "Actividades de Inicio del Proyecto, Actividades de Seguimiento y Control y Actividades de Finalizaci&oacute;n.";
 choices[89][3] = "Actividades de Inicio del Proyecto, Actividades de Control de Calidad y Actividades de Cierre.";
 answers[89] = choices[89][2];
 units[89] = "86";
 comments[89] = "Id Pregunta: 10823. Examen GSI 2014";


//  Id pregunta: 10842 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  Se&ntilde;ale qu&eacute; software NO est&aacute; relacionado con las pruebas del software de aplicaciones web:";
 choices[90]= new Array();
 choices[90][0] = "Badboy.";
 choices[90][1] = "Selenium.";
 choices[90][2] = "Jmeter.";
 choices[90][3] = "Cherokee.";
 answers[90] = choices[90][3];
 units[90] = "0";
 comments[90] = "Id Pregunta: 10842. Examen GSI 2014";


//  Id pregunta: 11066 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;Cuales de las siguientes afirmaciones, son caracter&iacute;sticas para cada proceso?";
 choices[91]= new Array();
 choices[91][0] = "Medible, puntual, entrega un resultado y responde a un evento espec&iacute;fico";
 choices[91][1] = "Medible, puntual, responde a un evento espec&iacute;fico y ofrece su principal resultado a un cliente o parte interesada";
 choices[91][2] = "Medible, entrega un resultado, responde a un evento espec&iacute;fico y ofrece su principal resultado a un cliente o parte interesada";
 choices[91][3] = "Medible, puntual, entrega un resultado, responde a un evento espec&iacute;fico y ofrece su principal resultado a un cliente o parte interesada";
 answers[91] = choices[91][2];
 units[91] = "98";
 comments[91] = "Id Pregunta: 11066. ";


//  Id pregunta: 11071 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  La definici&oacute;n de requerimientos funcionales para un nuevo servicio es parte de:";
 choices[92]= new Array();
 choices[92][0] = "Operaci&oacute;n del Servicio: Gesti&oacute;n de Aplicaciones";
 choices[92][1] = "Estrategia del Servicio: Gesti&oacute;n de la Cartera de Servicios";
 choices[92][2] = "Dise&ntilde;o del Servicio: Dise&ntilde;o de la Arquitectura Tecnol&oacute;gica";
 choices[92][3] = "Dise&ntilde;o del Servicio: Dise&ntilde;o de Soluciones del Servicio";
 answers[92] = choices[92][3];
 units[92] = "98";
 comments[92] = "Id Pregunta: 11071. ";


//  Id pregunta: 11296 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  En relaci&oacute;n a la gesti&oacute;n documental, de contenidos y portales &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[93]= new Array();
 choices[93][0] = "La gesti&oacute;n de portales suele constituir la capa de presentaci&oacute;n, y la documental la de persistencia";
 choices[93][1] = "La gesti&oacute;n de contenidos suele constituir la capa de persistencia, mientras que la gesti&oacute;n documental es la capa de negocio";
 choices[93][2] = "La gesti&oacute;n de portales suele constituir la capa de negocio y la gesti&oacute;n documental la de presentaci&oacute;n";
 choices[93][3] = "La gesti&oacute;n de portales suele constituir la capa de persistencia, mientras que la de contenidos es la de presentaci&oacute;n";
 answers[93] = choices[93][0];
 units[93] = "95";
 comments[93] = "Id Pregunta: 11296. ";


//  Id pregunta: 11377 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de los siguientes atributos debe entregar un servicio de TI a los clientes?";
 choices[94]= new Array();
 choices[94][0] = "Capacidades";
 choices[94][1] = "Coste";
 choices[94][2] = "Riesgo";
 choices[94][3] = "Valor";
 answers[94] = choices[94][3];
 units[94] = "98";
 comments[94] = "Id Pregunta: 11377. ";


//  Id pregunta: 11383 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes alternativas es la lista correcta de las cuatro P's del dise&ntilde;o del servicio?";
 choices[95]= new Array();
 choices[95][0] = "Planificaci&oacute;n, productos, posici&oacute;n, procesos";
 choices[95][1] = "Planificaci&oacute;n, perspectiva, posici&oacute;n, personas";
 choices[95][2] = "Perspectiva, asociados (partners), problemas, personas";
 choices[95][3] = "Personas, asociados (partners), productos, procesos";
 answers[95] = choices[95][3];
 units[95] = "98";
 comments[95] = "Id Pregunta: 11383. ";


//  Id pregunta: 11400 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Seg&uacute;n ITIL v3, &iquest;qu&eacute; fase del ciclo de vida del servicio provee un marco de referencia para evaluar las capacidades del servicio y los perfiles de riesgo antes que un nuevo servicio o un cambio sea desplegado?";
 choices[96]= new Array();
 choices[96][0] = "Estrategia del servicio";
 choices[96][1] = "Mejora continua del servicio";
 choices[96][2] = "Transici&oacute;n del servicio";
 choices[96][3] = "Operaci&oacute;n del servicio";
 answers[96] = choices[96][2];
 units[96] = "98";
 comments[96] = "Id Pregunta: 11400. ";


//  Id pregunta: 11545 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Cu&aacute;l de los siguientes no es un modelo de calidad del Software?";
 choices[97]= new Array();
 choices[97][0] = "GCAL de SISDEL";
 choices[97][1] = "FURPS";
 choices[97][2] = "ISO 9126-1";
 choices[97][3] = "Todos los anteriores son modelos de calidad del Software.";
 answers[97] = choices[97][0];
 units[97] = "88";
 comments[97] = "Id Pregunta: 11545. NULL";


//  Id pregunta: 11556 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Seg&uacute;n la metodolog&iacute;a &aacute;gil SCRUM, aquella reuni&oacute;n que se lleva a cabo todos los d&iacute;as y en la que &uacute;nicamente un miembro de cada equipo participa, se denomina:";
 choices[98]= new Array();
 choices[98][0] = "Daily Scrum";
 choices[98][1] = "Srum de Scrum";
 choices[98][2] = "Sprint Review Meeting";
 choices[98][3] = "Sprint Retrospective";
 answers[98] = choices[98][1];
 units[98] = "79";
 comments[98] = "Id Pregunta: 11556. NULL";


//  Id pregunta: 11647 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Indique cu&aacute;l no es un habilitador de CoBIT";
 choices[99]= new Array();
 choices[99][0] = "Procesos";
 choices[99][1] = "Gobierno";
 choices[99][2] = "Informaci&oacute;n";
 choices[99][3] = "Estructuras organizacionales";
 answers[99] = choices[99][1];
 units[99] = "98";
 comments[99] = "Id Pregunta: 11647. ";


