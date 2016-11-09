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

//  Id pregunta: 68 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Qu&eacute; m&eacute;todo de ordenaci&oacute;n de alternativas atiende &uacute;nicamente al criterio de mayor peso y mayor puntuaci&oacute;n, resolviendo los empates con el siguiente de mayor peso?:";
 choices[0]= new Array();
 choices[0][0] = "Concordancia";
 choices[0][1] = "M&eacute;todo lexicogr&aacute;fico";
 choices[0][2] = "Ponderaci&oacute;n lineal";
 choices[0][3] = "Ninguno de los anteriores";
 answers[0] = choices[0][1];
 units[0] = "34";
 comments[0] = "Id Pregunta: 68. NULL";


//  Id pregunta: 90 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &ldquo;Aqu&eacute;l equipo de inform&aacute;tica que se adapta perfectamente a las capacidades y condiciones de quienes lo usan, permitiendo su uso de manera eficiente y sin riesgo para la salud ni la seguridad&rdquo; es la definici&oacute;n para:";
 choices[1]= new Array();
 choices[1][0] = "Ordenador adaptable";
 choices[1][1] = "Ordenador, seg&uacute;n la WAI (Web Accesibility Initiative)";
 choices[1][2] = "Ordenador ecol&oacute;gico";
 choices[1][3] = "Ordenador ergon&oacute;mico";
 answers[1] = choices[1][3];
 units[1] = "39";
 comments[1] = "Id Pregunta: 90. ";


//  Id pregunta: 258 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  Es caracter&iacute;stico de las organizaciones basadas en la informaci&oacute;n:";
 choices[2]= new Array();
 choices[2][0] = "Especialistas que adquieren poder mediante el control de la informaci&oacute;n";
 choices[2][1] = "Gestores que adquieren poder mediante la informaci&oacute;n que les llega";
 choices[2][2] = "Grupos de personas que trabajan juntas para resolver un problema y luego se dispersan cuando el trabajo est&aacute; hecho";
 choices[2][3] = "Especialistas que dirigen y organizan su trabajo mediante interacci&oacute;n con sus colegas";
 answers[2] = choices[2][2];
 units[2] = "22";
 comments[2] = "Id Pregunta: 258. ";


//  Id pregunta: 284 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  La caracter&iacute;stica que poseen los sistemas abiertos de permitir la utilizaci&oacute;n del mismo entorno de &quot;software&quot; en diferentes equipos f&iacute;sicos, desde ordenadores personales hasta grandes ordenadores, se denomina:";
 choices[3]= new Array();
 choices[3][0] = "Conectividad";
 choices[3][1] = "Integrabilidad";
 choices[3][2] = "Escalabilidad";
 choices[3][3] = "Interoperabilidad";
 answers[3] = choices[3][2];
 units[3] = "40";
 comments[3] = "Id Pregunta: 284. ";


//  Id pregunta: 332 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  En la Teor&iacute;a de Decisi&oacute;n Multicriterio Discreta (DMD), la normalizaci&oacute;n de puntuaciones:";
 choices[4]= new Array();
 choices[4][0] = "Homogeiniza las puntuaciones a una escala com&uacute;n (0,1)";
 choices[4][1] = "Permite la comparaci&oacute;n de criterios no homog&eacute;neos, medidos con unidades distintas y de distinto tipo (cuantitativos y cualitativos)";
 choices[4][2] = "Permite comparar criterio de sentido diferente (m&aacute;ximo, m&iacute;nimo)";
 choices[4][3] = "Todas las respuestas son correctas";
 answers[4] = choices[4][3];
 units[4] = "34";
 comments[4] = "Id Pregunta: 332. ";


//  Id pregunta: 365 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  Los criterios de Savage, Wald, Laplace, Hurwicz&hellip;, est&aacute;n relacionados con:";
 choices[5]= new Array();
 choices[5][0] = "Teor&iacute;as de medici&oacute;n del coste del HW y SW";
 choices[5][1] = "Teor&iacute;as de optimizaci&oacute;n de los recursos humanos";
 choices[5][2] = "Teor&iacute;as de la decisi&oacute;n ";
 choices[5][3] = "Teor&iacute;as de calidad del SW";
 answers[5] = choices[5][2];
 units[5] = "21";
 comments[5] = "Id Pregunta: 365. ";


//  Id pregunta: 460 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Si una tarea dentro de un diagrama PERT excede su duraci&oacute;n en un tiempo:";
 choices[6]= new Array();
 choices[6][0] = "La duraci&oacute;n del camino cr&iacute;tico no variar&aacute;";
 choices[6][1] = "La duraci&oacute;n del camino cr&iacute;tico variar&aacute; en la misma magnitud";
 choices[6][2] = "No se puede afirmar qu&eacute; ocurrir&aacute; con la duraci&oacute;n del camino cr&iacute;tico";
 choices[6][3] = "Se necesita que otra tarea disminuya su duraci&oacute;n en la misma magnitud para que la duracci&oacute;n del proyecto no varie";
 answers[6] = choices[6][2];
 units[6] = "28";
 comments[6] = "Id Pregunta: 460. ";


//  Id pregunta: 490 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  Las normas de V.61 a V.92 de la serie V de la ITU-T tratan de:";
 choices[7]= new Array();
 choices[7][0] = "control de errores de transmisi&oacute;n";
 choices[7][1] = "interfaces y m&oacute;dems para la banda vocal";
 choices[7][2] = "transmisi&oacute;n simult&aacute;nea de datos y otras se&ntilde;ales";
 choices[7][3] = "calidad de transmisi&oacute;n y mantenimiento";
 answers[7] = choices[7][2];
 units[7] = "42";
 comments[7] = "Id Pregunta: 490. ";


//  Id pregunta: 510 AÃ±o de creación de pregunta: 2003-01-01
 questions[8]= "9)  La Metodolog&iacute;a Magerit debe estar destinado a:";
 choices[8]= new Array();
 choices[8][0] = "S&oacute;lo interesa a directivos";
 choices[8][1] = "Interesa a tecn&oacute;logos y especialistas inform&aacute;ticos";
 choices[8][2] = "No est&aacute; actualizado para que los riesgos puedan contabilizarse en Euros";
 choices[8][3] = "Interesa a directivos, usuarios y desarrolladores";
 answers[8] = choices[8][3];
 units[8] = "31, 32, 33";
 comments[8] = "Id Pregunta: 510. ";


//  Id pregunta: 715 AÃ±o de creación de pregunta: 2004-01-01
 questions[9]= "10)  Una base de datos relacional est&aacute; en tercera forma normal, si adem&aacute;s de estar en segunda forma normal";
 choices[9]= new Array();
 choices[9][0] = "Todos sus atributos no primos dependen no transitivamente de la llave primaria";
 choices[9][1] = "Los atributos no primos dependen funcionalmente de la llave primaria";
 choices[9][2] = "Por cada rengl&oacute;n columna contiene valores at&oacute;micos.";
 choices[9][3] = "No contiene ning&uacute;n grupo repetitivo";
 answers[9] = choices[9][0];
 units[9] = "58";
 comments[9] = "Id Pregunta: 715. Similar a examen TIC SS A 2003";


//  Id pregunta: 731 AÃ±o de creación de pregunta: 2004-01-01
 questions[10]= "11)  Identifique cu&aacute;l de los siguientes nombres no se corresponde con la denominaci&oacute;n de alguna de las Redes Neuronales de una capa:";
 choices[10]= new Array();
 choices[10][0] = "Perceptron";
 choices[10][1] = "Adaline";
 choices[10][2] = "Art";
 choices[10][3] = "Madaline";
 answers[10] = choices[10][2];
 units[10] = "63,64";
 comments[10] = "Id Pregunta: 731. Examen TIC MAP B 2004";


//  Id pregunta: 940 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Qu&eacute; se entiende por modo supervisor?:";
 choices[11]= new Array();
 choices[11][0] = "Sistema en el que no se precisa 'password' para acceder al sistema, por tratarse del supervisor";
 choices[11][1] = "Sistema en el que la palabra clave de acceso al sistema permite acceder a todos los elementos del sistema inform&aacute;tico";
 choices[11][2] = "Dispositivos que pueden modificar el modo de operaci&oacute;n y prohibir determinadas ejecuciones importantes";
 choices[11][3] = "Es un modo del sistema operativo mediante el cual s&oacute;lo &eacute;l es capaz de acceder a los recursos del ordenador mediante instrucciones que no est&aacute;n disponibles para los programas de usuario";
 answers[11] = choices[11][3];
 units[11] = "52";
 comments[11] = "Id Pregunta: 940. ";


//  Id pregunta: 1199 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Java es un lenguaje de programaci&oacute;n que surgi&oacute; tras realizar pruebas fallidas para dise&ntilde;ar un sistema de programaci&oacute;n de electrodom&eacute;sticos. &iquest;Qu&eacute; empresa cre&oacute; este lenguaje?:";
 choices[12]= new Array();
 choices[12][0] = "Siemens";
 choices[12][1] = "Sun Microsystems";
 choices[12][2] = "General Electric";
 choices[12][3] = "IBM";
 answers[12] = choices[12][1];
 units[12] = "60";
 comments[12] = "Id Pregunta: 1199. NULL";


//  Id pregunta: 1647 AÃ±o de creación de pregunta: 2004-01-01
 questions[13]= "14)  &iquest;Cu&aacute;l de los siguientes son subsistemas usuales en un sistema de e-learning?";
 choices[13]= new Array();
 choices[13][0] = "LCMS (Learning Content Management System)";
 choices[13][1] = "LOMS (Learning Objects Management System)";
 choices[13][2] = "CRM (Customer Relationship Management)";
 choices[13][3] = "Todos los anteriores";
 answers[13] = choices[13][0];
 units[13] = "66";
 comments[13] = "Id Pregunta: 1647. ";


//  Id pregunta: 1768 AÃ±o de creación de pregunta: 2006-01-01
 questions[14]= "15)  Respecto al empaquetado de aplicaciones en JAVA ";
 choices[14]= new Array();
 choices[14][0] = "utiliza el algoritmo de compresi&oacute;n LZW";
 choices[14][1] = "Para facilitar el control y orden de todos estos ficheros es para lo que se han definido los ficheros JAR";
 choices[14][2] = "Un fichero JAR  puede incluir un subdirectorio de metainformaci&oacute;n llamado META-INF";
 choices[14][3] = "Todas son correctas";
 answers[14] = choices[14][3];
 units[14] = "60";
 comments[14] = "Id Pregunta: 1768. NULL";


//  Id pregunta: 1775 AÃ±o de creación de pregunta: 2006-01-01
 questions[15]= "16)  &iquest;Qu&eacute; es falso respecto a la licencia GPL?";
 choices[15]= new Array();
 choices[15][0] = "Los programas con licencia GPL carecen de derechos de autor";
 choices[15][1] = "Exige que los fuentes est&eacute;n a disposici&oacute;n de quien disponga de los binarios";
 choices[15][2] = "No permite su integraci&oacute;n con software propietario";
 choices[15][3] = "Permite modificaciones y redistribuci&oacute;n de estas";
 answers[15] = choices[15][0];
 units[15] = "61,62";
 comments[15] = "Id Pregunta: 1775. ";


//  Id pregunta: 1895 AÃ±o de creación de pregunta: 2006-01-01
 questions[16]= "17)  La t&eacute;cnica de ocultar un mensaje secreto dentro de un mensaje ordinario y extraerlo en destino se llama";
 choices[16]= new Array();
 choices[16][0] = "algoritmo de clave secreta";
 choices[16][1] = "bytecode";
 choices[16][2] = "esteganograf&iacute;a";
 choices[16][3] = "spyware";
 answers[16] = choices[16][2];
 units[16] = "74";
 comments[16] = "Id Pregunta: 1895. NULL";


//  Id pregunta: 2354 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Entre las causas m&aacute;s habituales que provocan el descontento de los usuarios respecto de los productos de software obtenidos tenemos:";
 choices[17]= new Array();
 choices[17][0] = "Mantenimiento permanente.";
 choices[17][1] = "Coste cerrado del producto.";
 choices[17][2] = "Necesidades no satisfechas por la dificultad del producto para adaptarse a otros requerimientos.";
 choices[17][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;c&rsquo; son correctas.";
 answers[17] = choices[17][2];
 units[17] = "91";
 comments[17] = "Id Pregunta: 2354. ";


//  Id pregunta: 2665 AÃ±o de creación de pregunta: 2003-01-01
 questions[18]= "19)  El n&uacute;mero de bits por p&iacute;xel se define como:";
 choices[18]= new Array();
 choices[18][0] = "Profundidad del p&iacute;xel.";
 choices[18][1] = "Flexibilidad.";
 choices[18][2] = "Diafragma digital.";
 choices[18][3] = "ECW.";
 answers[18] = choices[18][0];
 units[18] = "93";
 comments[18] = "Id Pregunta: 2665. NULL";


//  Id pregunta: 2744 AÃ±o de creación de pregunta: 2006-01-01
 questions[19]= "20)  Son objetivos que persigue el An&aacute;lisis de Sistemas de Informaci&oacute;n:";
 choices[19]= new Array();
 choices[19][0] = "Identificar las necesidades del cliente";
 choices[19][1] = "Crear una definici&oacute;n clara y precisa del sistema, que sea la base para todo lo que sigue despu&eacute;s";
 choices[19][2] = "Establecer las restricciones de coste y tiempo que incidir&aacute;n en el futuro desarrollo";
 choices[19][3] = "Todas las anteriores";
 answers[19] = choices[19][3];
 units[19] = "80";
 comments[19] = "Id Pregunta: 2744. ";


//  Id pregunta: 3131 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  &iquest;Cu&aacute;l de estas afirmaciones es cierta para una red de conmutaci&oacute;n de circuitos?:";
 choices[20]= new Array();
 choices[20][0] = "No es necesario establecer una llamada";
 choices[20][1] = "Una vez establecida la llamada es posible establecer otra llamada por el mismo circuito";
 choices[20][2] = "Una vez establecida la llamada no es posible establecer otra llamada por el mismo circuito";
 choices[20][3] = "No existe ning&uacute;n tipo de encaminamiento";
 answers[20] = choices[20][2];
 units[20] = "101";
 comments[20] = "Id Pregunta: 3131. ";


//  Id pregunta: 3161 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  &iquest;Cu&aacute;l de las siguientes afirmaciones, relacionadas con el modelo OSI, es falsa?";
 choices[21]= new Array();
 choices[21][0] = "Un SAP es un recurso a trav&eacute;s del cual una entidad de nivel N+1 accede a los servicios de nivel N";
 choices[21][1] = "Una entidad N+1 s&oacute;lo puede estar conectada a un SAP";
 choices[21][2] = "Las entidades conectadas a trav&eacute;s de un SAP deben residir en el mismo subsistema";
 choices[21][3] = "Una direcci&oacute;n de SAP identifica a un &uacute;nico SAP";
 answers[21] = choices[21][1];
 units[21] = "100";
 comments[21] = "Id Pregunta: 3161. ";


//  Id pregunta: 3197 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Dentro del modelo OSI, podemos afirmar que:";
 choices[22]= new Array();
 choices[22][0] = "El nivel 2 no hay control de flujo";
 choices[22][1] = "El nivel 3 se enfrenta a problemas de encaminamiento";
 choices[22][2] = "El nivel 4 se encarga de los problemas de interconexi&oacute;n de redes";
 choices[22][3] = "En el nivel 5 se tratan los aspectos sint&aacute;ctico y sem&aacute;ntico de la informaci&oacute;n";
 answers[22] = choices[22][1];
 units[22] = "100";
 comments[22] = "Id Pregunta: 3197. NULL";


//  Id pregunta: 3211 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  El entorno que utiliza un teletrabajador para conectarse con su empresa a trav&eacute;s de internet se denomina:";
 choices[23]= new Array();
 choices[23][0] = "intranet";
 choices[23][1] = "collaboration-net";
 choices[23][2] = "teleworking-net";
 choices[23][3] = "extranet";
 answers[23] = choices[23][3];
 units[23] = "113";
 comments[23] = "Id Pregunta: 3211. ";


//  Id pregunta: 3568 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  En una arquitectura de red OSI la responsabilidad de dividir los mensajes en unidades adecuadas a las especificaciones contratadas con la red X25 es de:";
 choices[24]= new Array();
 choices[24][0] = "Del nivel de transporte que le pasa al de red las unidades que debe enviar y el cometido del de red es enviarlos";
 choices[24][1] = "Del nivel de red ya que debe segmentar los fragmentos que le pasa el nivel de transporte en paquetes aceptables por la red X25";
 choices[24][2] = "Del nivel de enlace ya que es el responsable de hacer las tramas que coloca en el enlace";
 choices[24][3] = "De ninguno de ellos ya que el software de red del proveedor lo hace por su cuenta, para dividir el mensaje en paquetes con la longitud que m&aacute;s le convenga a sus conmutadores";
 answers[24] = choices[24][1];
 units[24] = "101, 102";
 comments[24] = "Id Pregunta: 3568. ";


//  Id pregunta: 3612 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  La interconexi&oacute;n de redes privadas a trav&eacute;s de la red 'p&uacute;blica' Internet manteniendo sus propias direcciones IP se consigue por medio de:";
 choices[25]= new Array();
 choices[25][0] = "Firewalls";
 choices[25][1] = "Proxies a nivel de aplicaci&oacute;n";
 choices[25][2] = "Tunneling o encapsulado";
 choices[25][3] = "Cifrado de las cabeceras IP";
 answers[25] = choices[25][2];
 units[25] = "103,113";
 comments[25] = "Id Pregunta: 3612. ";


//  Id pregunta: 4100 AÃ±o de creación de pregunta: 2006-01-01
 questions[26]= "27)  A la hora de empaquetar aplicaciones J2EE utilizaremos";
 choices[26]= new Array();
 choices[26][0] = ".jar";
 choices[26][1] = ".jar y .war dependiendo del contenido y recursos que utilicemos";
 choices[26][2] = "b) es correcta y adem&aacute;s .ear, aunque fundamentalmente se restringe para los EJBs";
 choices[26][3] = "El empaquetamiento no se determina en J2EE";
 answers[26] = choices[26][2];
 units[26] = "116";
 comments[26] = "Id Pregunta: 4100. ";


//  Id pregunta: 4227 AÃ±o de creación de pregunta: 2006-01-01
 questions[27]= "28)  &iquest;Qu&eacute; tipo de conector corresponde a un cable coaxial grueso (&quot;Thick&quot;)?";
 choices[27]= new Array();
 choices[27][0] = "BNC";
 choices[27][1] = "N-series";
 choices[27][2] = "TNC";
 choices[27][3] = "SMA-series";
 answers[27] = choices[27][1];
 units[27] = "99";
 comments[27] = "Id Pregunta: 4227. ";


//  Id pregunta: 4428 AÃ±o de creación de pregunta: 2007-01-01
 questions[28]= "29)  &iquest;Cu&aacute;l de los siguientes no es una caracter&iacute;stica de la arquitectura de red de Internet?";
 choices[28]= new Array();
 choices[28][0] = "Arquitectura abierta";
 choices[28][1] = "Control centralizado";
 choices[28][2] = "Basada en TCP/IP";
 choices[28][3] = "Organizaci&oacute;n jer&aacute;rquica";
 answers[28] = choices[28][1];
 units[28] = "112";
 comments[28] = "Id Pregunta: 4428. ";


//  Id pregunta: 4445 AÃ±o de creación de pregunta: 2007-01-01
 questions[29]= "30)  Indique el apartado que no debe incluir necesariamente el manual de calidad que Ia organizaci&oacute;n debe establecer y mantener, seg&uacute;n la norma ISO 9001.";
 choices[29]= new Array();
 choices[29][0] = "Las declaraciones documentadas de la pol&iacute;tica de calidad y de objetivos de la calidad.";
 choices[29][1] = "El alcance del sistema de gesti&oacute;n de calidad.";
 choices[29][2] = "Los procedimientos documentados establecidos para el sistema de gesti&oacute;n de calidad.";
 choices[29][3] = "La descripci&oacute;n de Ia interacci&oacute;n entre los procesos del sistema de gesti&oacute;n de calidad.";
 answers[29] = choices[29][0];
 units[29] = "92";
 comments[29] = "Id Pregunta: 4445. NULL";


//  Id pregunta: 4681 AÃ±o de creación de pregunta: 2007-01-01
 questions[30]= "31)  Seg&uacute;n la ley de propiedad intelectual (RDL 1/96 de 22 de abril) &iquest;qu&eacute; es una obra compuesta?";
 choices[30]= new Array();
 choices[30][0] = "Es el resultado de la colaboraci&oacute;n entre varios autores";
 choices[30][1] = "Una obra en la que, por su complejidad, no es posible establecer un autor";
 choices[30][2] = "Es una obra nueva que incorpora otra existente sin colaboraci&oacute;n del autor de &eacute;sta";
 choices[30][3] = "La citada ley no hace referencia a tal concepto";
 answers[30] = choices[30][2];
 units[30] = "36,37";
 comments[30] = "Id Pregunta: 4681. Examen 2006 JCYL";


//  Id pregunta: 4720 AÃ±o de creación de pregunta: 2007-01-01
 questions[31]= "32)  Los principales factores de calidad seg&uacute;n Bertrand Meyer son:";
 choices[31]= new Array();
 choices[31][0] = "Eficiencia y fiabilidad";
 choices[31][1] = "Fiabilidad y modularidad";
 choices[31][2] = "Fiabilidad y extensibilidad";
 choices[31][3] = "Correcci&oacute;n y verificabilidad";
 answers[31] = choices[31][1];
 units[31] = "88";
 comments[31] = "Id Pregunta: 4720. Examen 2006 JCYL";


//  Id pregunta: 4923 AÃ±o de creación de pregunta: 2003-01-01
 questions[32]= "33)  Los DTD (Document Type Definition) en tecnolog&iacute;a XML:";
 choices[32]= new Array();
 choices[32][0] = "Definen la estructura del documento XML.";
 choices[32][1] = "Sirven para dar formato a la informaci&oacute;n.";
 choices[32][2] = "Siempre han de estar incluidos en el XML.";
 choices[32][3] = "Contienen elementos y atributos.";
 answers[32] = choices[32][0];
 units[32] = "69";
 comments[32] = "Id Pregunta: 4923. Examen TIC B 2007";


//  Id pregunta: 4994 AÃ±o de creación de pregunta: 2003-01-01
 questions[33]= "34)  &iquest;A qu&eacute; proceso principal de la metodolog&iacute;a M&eacute;trica versi&oacute;n 3 pertenece el proceso &quot;Implantaci&oacute;n y aceptaci&oacute;n de sistemas (IAS)&quot;?";
 choices[33]= new Array();
 choices[33][0] = "Desarrollo de sistemas de informaci&oacute;n";
 choices[33][1] = "Planificaci&oacute;n de sistemas de informaci&oacute;n";
 choices[33][2] = "An&aacute;lisis de sistema de informaci&oacute;n";
 choices[33][3] = "Mantenimiento de sistemas de informaci&oacute;n";
 answers[33] = choices[33][0];
 units[33] = "86";
 comments[33] = "Id Pregunta: 4994. Examen TIC A 2007";


//  Id pregunta: 5243 AÃ±o de creación de pregunta: 2003-01-01
 questions[34]= "35)  Indique la pr&aacute;ctica cuyo objeto es ayudar a la planificaci&oacute;n de las actividades y recursos de una organizaci&oacute;n, facilitando la asignaci&oacute;n de prioridades dentro de ella:";
 choices[34]= new Array();
 choices[34][0] = "Matriz TOWS";
 choices[34][1] = "An&aacute;lisis coste/beneficio";
 choices[34][2] = "Factores cr&iacute;ticos de &eacute;xito";
 choices[34][3] = "An&aacute;lisis de impacto en la organizaci&oacute;n";
 answers[34] = choices[34][2];
 units[34] = "77";
 comments[34] = "Id Pregunta: 5243. ";


//  Id pregunta: 5413 AÃ±o de creación de pregunta: 2003-01-01
 questions[35]= "36)  La propiedad de un objeto denominada persistencia consiste en";
 choices[35]= new Array();
 choices[35][0] = "Que un objeto ocupa un determinado espacio de memoria y existe durante una cierta cantidad de tiempo. Es un concepto din&aacute;mico. La permanencia del objeto es el tiempo durante el cual se le asigna espacio y permanece accesible en la memoria del ordenador";
 choices[35][1] = "Un objeto ocupa un determinado espacio de memoria durante toda la vida de la aplicaci&oacute;n. La permanencia del objeto es que est&aacute; accesible en la memoria del ordenador";
 choices[35][2] = "Un objeto est&aacute; accesible ocupe o no memoria en el ordenador, el S.O. se encarga de cargar y descargar el objeto de la memoria RAM";
 choices[35][3] = "La persistencia de un objeto consiste en que aunque su instancia haya sido eliminada el objeto sigue accesible";
 answers[35] = choices[35][0];
 units[35] = "82";
 comments[35] = "Id Pregunta: 5413. Examen 2006 JCYL";


//  Id pregunta: 5418 AÃ±o de creación de pregunta: 2003-01-01
 questions[36]= "37)  La planificaci&oacute;n y gesti&oacute;n de un proyecto se encarga a una persona, que denominaremos &quot;Jefe de proyecto&quot;. El Plan de proyecto contendr&aacute;:";
 choices[36]= new Array();
 choices[36][0] = "Un grafico de Gant para estimar el coste, otro de PERT para las restricciones y usaremos COCOMO para las  etapas.";
 choices[36][1] = "Estrictamente la Metodolog&iacute;a que el Departamento especifique.";
 choices[36][2] = "Un grafico de GANTT para las etapas, un gr&aacute;fico de PERT para la representaci&oacute;n de las restricciones y usaremos COCOMO para estimar el coste.";
 choices[36][3] = "La Metodolog&iacute;a del Departamento que se suministre v&iacute;a web.";
 answers[36] = choices[36][2];
 units[36] = "27";
 comments[36] = "Id Pregunta: 5418. Castilla y Le&oacute;n";


//  Id pregunta: 5728 AÃ±o de creación de pregunta: 2003-01-01
 questions[37]= "38)  &iquest;Cu&aacute;l de las siguientes no es un tipo de herramienta de Groupware?";
 choices[37]= new Array();
 choices[37][0] = "Herramientas de coordinaci&oacute;n";
 choices[37][1] = "Herramientas de control";
 choices[37][2] = "Herramientas de colaboraci&oacute;n";
 choices[37][3] = "Herramientas de comunicaci&oacute;n";
 answers[37] = choices[37][1];
 units[37] = "71";
 comments[37] = "Id Pregunta: 5728. ";


//  Id pregunta: 5787 AÃ±o de creación de pregunta: 2009-01-01
 questions[38]= "39)  UMTS en su est&aacute;ndar contempla como posibilidades para transmisi&oacute;n d&uacute;plex:";
 choices[38]= new Array();
 choices[38][0] = "CMDA o TDMA";
 choices[38][1] = "FDD o TDD";
 choices[38][2] = "FDMA u OFDMA";
 choices[38][3] = "TCDMA";
 answers[38] = choices[38][1];
 units[38] = "108";
 comments[38] = "Id Pregunta: 5787. ";


//  Id pregunta: 5801 AÃ±o de creación de pregunta: 2009-01-01
 questions[39]= "40)  El Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica depende de:";
 choices[39]= new Array();
 choices[39][0] = "La Conferencia Sectorial de Administraci&oacute;n P&uacute;blica.";
 choices[39][1] = "La Comisi&oacute;n Permanente del Consejo Superior de Administraci&oacute;n Electr&oacute;nica.";
 choices[39][2] = "El Director General para el impulso de la Administraci&oacute;n electr&oacute;nica.";
 choices[39][3] = "Presidencia del Gobierno.";
 answers[39] = choices[39][0];
 units[39] = "30";
 comments[39] = "Id Pregunta: 5801. MAP 2008 A2";


//  Id pregunta: 5873 AÃ±o de creación de pregunta: 2009-01-01
 questions[40]= "41)  &iquest;Cu&aacute;l de los siguientes apartados NO es una t&eacute;cnica utilizada en reconocimiento de voz?";
 choices[40]= new Array();
 choices[40][0] = "Modelos de Markov";
 choices[40][1] = "Redes Neuronales";
 choices[40][2] = "DTW (Dynamic Time Warping)";
 choices[40][3] = "OSR (Online Speech Recognition)";
 answers[40] = choices[40][3];
 units[40] = "94";
 comments[40] = "Id Pregunta: 5873. MAP 2008 A1";


//  Id pregunta: 5938 AÃ±o de creación de pregunta: 2009-01-01
 questions[41]= "42)  &iquest;Cu&aacute;l de estos no es un producto de virtualizaci&oacute;n de VMWare?";
 choices[41]= new Array();
 choices[41][0] = "VMWare Parallels";
 choices[41][1] = "VMWare ESXi";
 choices[41][2] = "VMWare Workstation";
 choices[41][3] = "VMWare Fusion";
 answers[41] = choices[41][0];
 units[41] = "119";
 comments[41] = "Id Pregunta: 5938. ";


//  Id pregunta: 6008 AÃ±o de creación de pregunta: 2010-01-01
 questions[42]= "43)  La t&eacute;cnica JAD (Joint Application Design) para el an&aacute;lisis de requisitos:";
 choices[42]= new Array();
 choices[42][0] = "Consiste en la realizaci&oacute;n de entrevistas con diversas personas, elaborando un acta para cada entrevista que se les remitir&aacute; posteriormente para su aprobaci&oacute;n.";
 choices[42][1] = "Consiste en realizar un taller donde los trabajadores del conocimiento y especialistas de TI se re&uacute;nen en diversas sesiones, a veces por varios d&iacute;as, para definir y revisar los requerimientos del negocio para el sistema.";
 choices[42][2] = "Define seis categor&iacute;as de aspectos que el analista debe estudiar con los usuarios empleando para ello otras t&eacute;cnicas de an&aacute;lisis de requisitos.";
 choices[42][3] = "Es una t&eacute;cnica cuyo objetivo principal es realizar un control de versiones de un determinado producto software.";
 answers[42] = choices[42][1];
 units[42] = "78";
 comments[42] = "Id Pregunta: 6008. TIC A 2009";


//  Id pregunta: 6118 AÃ±o de creación de pregunta: 2010-01-01
 questions[43]= "44)  Con respecto a BPEL (Business Process Execution Language):";
 choices[43]= new Array();
 choices[43][0] = "Es un lenguaje de coreogr&aacute;fico, no de orquestaci&oacute;n.";
 choices[43][1] = "Es un lenguaje de orquestaci&oacute;n, no un lenguaje coreogr&aacute;fico.";
 choices[43][2] = "Fue creado por WfMC.";
 choices[43][3] = "Es un lenguaje de orquestaci&oacute;n y coreogr&aacute;fico creado por OASIS.";
 answers[43] = choices[43][1];
 units[43] = "51";
 comments[43] = "Id Pregunta: 6118. NULL";


//  Id pregunta: 6162 AÃ±o de creación de pregunta: 2010-01-01
 questions[44]= "45)  Indique cual de las siguientes no es una funci&oacute;n de los gatekeepers:";
 choices[44]= new Array();
 choices[44][0] = "Control del Ancho de Banda.";
 choices[44][1] = "Rechazo de llamadas seg&uacute;n distintos criterios.";
 choices[44][2] = "Control de comunicaci&oacute;n con MCUs o gateways.";
 choices[44][3] = "Comunicaci&oacute;n con redes de conmutaci&oacute;n de circuitos.";
 answers[44] = choices[44][3];
 units[44] = "117";
 comments[44] = "Id Pregunta: 6162. ";


//  Id pregunta: 6234 AÃ±o de creación de pregunta: 2010-01-01
 questions[45]= "46)  En el framwork .NET, la herramienta de desarrollo compila el c&oacute;digo fuente de cualquiera de los lenguajes soportados por .NET a un c&oacute;digo intermedio, inicialmente conocido como MSIL y actualmente llamado:";
 choices[45]= new Array();
 choices[45][0] = "CIL";
 choices[45][1] = "CLI";
 choices[45][2] = "JIT";
 choices[45][3] = "CLR";
 answers[45] = choices[45][0];
 units[45] = "59,115";
 comments[45] = "Id Pregunta: 6234. ";


//  Id pregunta: 6271 AÃ±o de creación de pregunta: 2010-01-01
 questions[46]= "47)  Qu&eacute; estandar define el ciclo de vida de un sistema de informac&oacute;n como el marco de referencia que contiene los procesos, las actividades y las tareas involucradas en el desarrollo, la explotaci&oacute;n y el mantenimiento de un producto de software, abarcando la vida del sistema desde la definici&oacute;n de los requisitos hasta la finalizaci&oacute;n de su uso.";
 choices[46]= new Array();
 choices[46][0] = "ISO-12207";
 choices[46][1] = "ISO-9800";
 choices[46][2] = "ISO-17702";
 choices[46][3] = "ISO-11200";
 answers[46] = choices[46][0];
 units[46] = "76";
 comments[46] = "Id Pregunta: 6271. ";


//  Id pregunta: 6318 AÃ±o de creación de pregunta: 2010-01-01
 questions[47]= "48)  Si decimos que las filas de una tabla est&aacute;n ordenadas en alguna secuencia&nbsp;f&iacute;sica, independiente de cualquier ordenamiento que pueda imponerse a la tabla mediante &iacute;ndices, estamos refiri&eacute;ndonos a un sistema de base de datos:";
 choices[47]= new Array();
 choices[47][0] = "Orientado a objetos";
 choices[47][1] = "Relacional";
 choices[47][2] = "De lista invertida";
 choices[47][3] = "Jer&aacute;rquica";
 answers[47] = choices[47][2];
 units[47] = "58";
 comments[47] = "Id Pregunta: 6318. Un ejemplo de BD de lista invertida es ADABAS";


//  Id pregunta: 6465 AÃ±o de creación de pregunta: 2010-01-01
 questions[48]= "49)  Seg&uacute;n el interfaz de Aseguramiento de la Calidad de M&eacute;trica v3, el establecimiento del Plan de Aseguramiento de la Calidad debe comenzar en el proceso:";
 choices[48]= new Array();
 choices[48][0] = "Planificaci&oacute;n del Sistema de Informaci&oacute;n";
 choices[48][1] = "Estudio de Viabilidad del Sistema";
 choices[48][2] = "An&aacute;lisis del Sistema de Informaci&oacute;n";
 choices[48][3] = "Dise&ntilde;o del Sistema de Informaci&oacute;n";
 answers[48] = choices[48][1];
 units[48] = "86";
 comments[48] = "Id Pregunta: 6465. Castilla La Mancha 2009";


//  Id pregunta: 6532 AÃ±o de creación de pregunta: 2010-01-01
 questions[49]= "50)  El marco general para la mejora de la calidad de la AGE se establece en:";
 choices[49]= new Array();
 choices[49][0] = "RD 951/2003";
 choices[49][1] = "RD 952/2003";
 choices[49][2] = "RD 951/2005";
 choices[49][3] = "RD 951/2006";
 answers[49] = choices[49][2];
 units[49] = "87";
 comments[49] = "Id Pregunta: 6532. NULL";


//  Id pregunta: 6540 AÃ±o de creación de pregunta: 2010-01-01
 questions[50]= "51)  En el &aacute;mbito de la biometr&iacute;a";
 choices[50]= new Array();
 choices[50][0] = "Un error Tipo I significa que el sistema ha rechazado a un individuo autorizado";
 choices[50][1] = "Un error Tipo I significa que el sistema ha autorizado a un impostor";
 choices[50][2] = "Un error Tipo II significa que el sistema ha rechazado a un individuo autorizado";
 choices[50][3] = "Un error Tipo III significa que el sistema ha rechazado a un individuo autorizado";
 answers[50] = choices[50][0];
 units[50] = "111";
 comments[50] = "Id Pregunta: 6540. NULL";


//  Id pregunta: 6579 AÃ±o de creación de pregunta: 2010-01-01
 questions[51]= "52)  El protocolo IP";
 choices[51]= new Array();
 choices[51][0] = "Define el datagrama";
 choices[51][1] = "Define el esquema de direccionamiento";
 choices[51][2] = "Mueve los datos entre la capa de red y de transporte";
 choices[51][3] = "Todas las respuestas anteriores son correctas";
 answers[51] = choices[51][3];
 units[51] = "100";
 comments[51] = "Id Pregunta: 6579. NULL";


//  Id pregunta: 6588 AÃ±o de creación de pregunta: 2010-01-01
 questions[52]= "53)  En el caso de ficheros no automatizados a los que aplican medidas de seguridad de nivel alto, entre otras debe implementarse:";
 choices[52]= new Array();
 choices[52][0] = "Control de accesos autorizados";
 choices[52][1] = "Identificaci&oacute;n de accesos para documentos accesibles por m&uacute;ltiples usuarios";
 choices[52][2] = "No es necesaria identificaci&oacute;n de acceso para ficheros accesibles por una &uacute;nica persona";
 choices[52][3] = "Todas las respuestas anteriores son correctas";
 answers[52] = choices[52][3];
 units[52] = "29";
 comments[52] = "Id Pregunta: 6588. NULL";


//  Id pregunta: 6611 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)  Que NO se puede incluir en un DFD de nivel 2";
 choices[53]= new Array();
 choices[53][0] = "Procesos";
 choices[53][1] = "Decisiones L&oacute;gicas";
 choices[53][2] = "Flujos de Datos";
 choices[53][3] = "Almacenes de Datos";
 answers[53] = choices[53][1];
 units[53] = "81";
 comments[53] = "Id Pregunta: 6611. NULL";


//  Id pregunta: 6616 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  Seg&uacute;n M&eacute;trica el grupo de Aseguramiento de la Calidad participa en el proyecto bajo el perfil de";
 choices[54]= new Array();
 choices[54][0] = "Consultor";
 choices[54][1] = "Analista";
 choices[54][2] = "Calidad";
 choices[54][3] = "Experto";
 answers[54] = choices[54][1];
 units[54] = "86";
 comments[54] = "Id Pregunta: 6616. NULL";


//  Id pregunta: 7168 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  &iquest;Cu&aacute;l de los siguientes NO es uno de los libros que componente MAGERIT v2?";
 choices[55]= new Array();
 choices[55][0] = "M&eacute;todo";
 choices[55][1] = "Cat&aacute;logo de Elementos";
 choices[55][2] = "Cat&aacute;logo de Riesgos";
 choices[55][3] = "Gu&iacute;a de T&eacute;cnicas";
 answers[55] = choices[55][2];
 units[55] = "33";
 comments[55] = "Id Pregunta: 7168. Examen TIC B 2009";


//  Id pregunta: 7252 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  &iquest;Cu&aacute;l de las siguientes opciones representa la m&aacute;scara 255.255.240.0?";
 choices[56]= new Array();
 choices[56][0] = "/20";
 choices[56][1] = "/22";
 choices[56][2] = "/24";
 choices[56][3] = "/240";
 answers[56] = choices[56][0];
 units[56] = "100";
 comments[56] = "Id Pregunta: 7252. Examen TIC B 2009";


//  Id pregunta: 7327 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  &iquest;En qu&eacute; categor&iacute;as se dividen los miembros de ISO?";
 choices[57]= new Array();
 choices[57][0] = "Natos, Correspondientes y Suscritos";
 choices[57][1] = "Natos, Asociados y Suscritos";
 choices[57][2] = "Natos, Asociados, Correspondientes y Suscritos";
 choices[57][3] = "Natos, de Pleno Derecho y Asociados";
 answers[57] = choices[57][0];
 units[57] = "42";
 comments[57] = "Id Pregunta: 7327. NULL";


//  Id pregunta: 8139 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)   En referencia a la Comisi&oacute;n del Mercado de las Telecomunicaciones, elija cu&aacute;l de las siguientes opciones es VERDADERA:";
 choices[58]= new Array();
 choices[58][0] = " Tiene su localizaci&oacute;n geogr&aacute;fica en Madrid.";
 choices[58][1] = " Interviene en conflictos planteados entre operadores en materia de acceso e interconexi&oacute;n.";
 choices[58][2] = " En la actualidad est&aacute; compuesto por un Presidente, un Consejo y tres Vicepresidentes.";
 choices[58][3] = " Los recursos de la Comisi&oacute;n provienen, en su totalidad, de subvenciones del Estado.";
 answers[58] = choices[58][1];
 units[58] = "NULL";
 comments[58] = "Id Pregunta: 8139. Map 2008";


//  Id pregunta: 8228 AÃ±o de creación de pregunta: 2011-01-01
 questions[59]= "60)  En programaci&oacute;n orientada a objetos, la capacidad de un objeto de una clase dada A de aparecer y comportarse como si fuera de la clase B se conoce como:";
 choices[59]= new Array();
 choices[59][0] = "Herencia.";
 choices[59][1] = "Extensibilidad.";
 choices[59][2] = "Sobrecarga.";
 choices[59][3] = "Polimorfismo.";
 answers[59] = choices[59][3];
 units[59] = "82";
 comments[59] = "Id Pregunta: 8228. Examen TIC A1 2010";


//  Id pregunta: 8289 AÃ±o de creación de pregunta: 2011-01-01
 questions[60]= "61)  Una red administrada a trav&eacute;s de SNMP contempla tres componentes claves. &iquest;Cu&aacute;l de los siguientes NO es uno de ellos?";
 choices[60]= new Array();
 choices[60][0] = "Dispositivos administrados. ";
 choices[60][1] = "Agentes.";
 choices[60][2] = "Sistemas administradores de red (NMS).";
 choices[60][3] = "Registro de ubicaci&oacute;n de visitantes (VLR).";
 answers[60] = choices[60][3];
 units[60] = "104";
 comments[60] = "Id Pregunta: 8289. Examen TIC A2 2010";


//  Id pregunta: 8305 AÃ±o de creación de pregunta: 2011-01-01
 questions[61]= "62)  &iquest;Cu&aacute;l de los siguientes perfiles de XAdES incluye los certificados y listas de revocaci&oacute;n (consultas OCSP o CRLs) para poder verificar el documento firmado en el futuro incluso si las fuentes originales no estuvieran disponibles?";
 choices[61]= new Array();
 choices[61][0] = "XAdES-X.";
 choices[61][1] = "XAdES-X-L.";
 choices[61][2] = "XAdES-C. ";
 choices[61][3] = "Esta funcionalidad no se soporta en XAdES.";
 answers[61] = choices[61][1];
 units[61] = "72, 73, 74";
 comments[61] = "Id Pregunta: 8305. Examen TIC A2 2010";


//  Id pregunta: 8353 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  Indique cu&aacute;l de las siguientes definiciones se corresponde con Biztalk:";
 choices[62]= new Array();
 choices[62][0] = "Es un servidor que permite gestionar procesos de negocio por medio de adaptadores dise&ntilde;ados al efecto, capacit&aacute;ndolo para operar diferentes tipos de software.";
 choices[62][1] = "Es una libreria de .NET que permite la comunicaci&oacute;n por IRC facilitando la implementaci&oacute;n de chats.";
 choices[62][2] = "Es un servidor web de .NET especialmente adaptado para tecnolog&iacute;as m&oacute;viles";
 choices[62][3] = "Es un componente que pertenece al CLR de .NET y que facilita la ejecuci&oacute;n de la aplicaci&oacute;n.";
 answers[62] = choices[62][0];
 units[62] = "59,115";
 comments[62] = "Id Pregunta: 8353. Examen TIC A2 2010";


//  Id pregunta: 8390 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  Cuando un sistema se debe modificar para que contemple un cambio en las necesidades de los usuarios, se hace referencia al:";
 choices[63]= new Array();
 choices[63][0] = "Mantenimiento Correctivo.";
 choices[63][1] = "Mantenimiento Evolutivo.";
 choices[63][2] = "Mantenimiento Adaptativo.";
 choices[63][3] = "Mantenimiento Perfectivo.";
 answers[63] = choices[63][1];
 units[63] = "86";
 comments[63] = "Id Pregunta: 8390. Examen TIC A2 2010";


//  Id pregunta: 8393 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  &iquest;Cu&aacute;l de las siguientes es una caracter&iacute;stica propia del Proceso Unificado de Desarrollo del Software (PUDS)?";
 choices[64]= new Array();
 choices[64][0] = "Se basa en las Historias de Usuario.";
 choices[64][1] = "Proceso centrado en la arquitectura.";
 choices[64][2] = "Existe una continua refactorizaci&oacute;n del c&oacute;digo.";
 choices[64][3] = "No contempla la gesti&oacute;n del proyecto.";
 answers[64] = choices[64][1];
 units[64] = "79";
 comments[64] = "Id Pregunta: 8393. Examen TIC A2 2010";


//  Id pregunta: 8505 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  &iquest;C&oacute;mo se comenta una l&iacute;nea en XML (eXtensible Markup Language)? ";
 choices[65]= new Array();
 choices[65][0] = "/* Esto es un comentario */";
 choices[65][1] = "// Esto es un comentario ";
 choices[65][2] = "# Esto es un comentario";
 choices[65][3] = "&lt;!-- Esto es un comentario --&gt;";
 answers[65] = choices[65][3];
 units[65] = "69";
 comments[65] = "Id Pregunta: 8505. Examen TIC A2 2010";


//  Id pregunta: 8611 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  Si sobre el fichero &quot;ejemplo.txt&quot; queremos dar permisos totales al due&ntilde;o, de lectura y ejecuci&oacute;n al grupo y s&oacute;lo de lectura al resto de usuarios, usaremos la instrucci&oacute;n:";
 choices[66]= new Array();
 choices[66][0] = "chmod 766 ejemplo.txt";
 choices[66][1] = "chmod 751 ejemplo.txt";
 choices[66][2] = "chmod 761 ejemplo.txt";
 choices[66][3] = "chmod 754 ejemplo.txt";
 answers[66] = choices[66][3];
 units[66] = "53,54";
 comments[66] = "Id Pregunta: 8611. Examen TIC A2 2010 interna";


//  Id pregunta: 8612 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  Para la gesti&oacute;n del sistema operativo queremos	llevar un inventar&iacute;o. &iquest;Cu&aacute;l de los siguientes recursos NO es necesario en el mismo?";
 choices[67]= new Array();
 choices[67][0] = "Listado de todos los equipos";
 choices[67][1] = "Listado de software usado en cada equipo.";
 choices[67][2] = "Esquema de la red.";
 choices[67][3] = "Todos son necesarios.";
 answers[67] = choices[67][3];
 units[67] = "52";
 comments[67] = "Id Pregunta: 8612. Examen TIC A2 2010 interna";


//  Id pregunta: 8744 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  El impulso de la factura electr&oacute;nica, como obligatoria en el marco de la contrataci&oacute;n en el sector p&uacute;blico estatal se establece en la ley:";
 choices[68]= new Array();
 choices[68][0] = "34/2002, de 11 de Julio, de Servicios de la Sociedad de la Informaci&oacute;n y de Comercio Electr&oacute;nico.";
 choices[68][1] = "56/2007, de 28 de diciembre, de Medidas de Impulso de la Sociedad de la Informaci&oacute;n";
 choices[68][2] = "59/2003, de 19 de diciembre, de Firma Electr&oacute;nica.";
 choices[68][3] = "11/2007. de 22 de junio, de Acceso Electr&oacute;nico de los Ciudadanos a los Servicios P&uacute;blicos";
 answers[68] = choices[68][1];
 units[68] = "70";
 comments[68] = "Id Pregunta: 8744. Examen TIC A2 2010 interna";


//  Id pregunta: 8869 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  &iquest;Es posible hacer convivir varios protocolos incompatibles entre s&iacute; sobre una misma red?";
 choices[69]= new Array();
 choices[69][0] = "No";
 choices[69][1] = "S&iacute;, utilizando tunneling o encapsulado de protocolos";
 choices[69][2] = "S&iacute;, pero s&oacute;lo si los protocolos pertenecen a la familia OSI";
 choices[69][3] = "S&iacute;, pero solamente dentro del conjunto de est&aacute;ndares IEEE 802";
 answers[69] = choices[69][1];
 units[69] = "100";
 comments[69] = "Id Pregunta: 8869. Analista Ayto. Madrid 2010";


//  Id pregunta: 8990 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  El est&aacute;ndar de telefon&iacute;a m&oacute;vil LTE (Long Term Evolution), emplea";
 choices[70]= new Array();
 choices[70][0] = "MIMO";
 choices[70][1] = "FDD";
 choices[70][2] = "TDD";
 choices[70][3] = "Todas las anteriores";
 answers[70] = choices[70][3];
 units[70] = "107";
 comments[70] = "Id Pregunta: 8990. NULL";


//  Id pregunta: 9000 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  ATM ofrece las siguientes clases de servicio de tiempo real:";
 choices[71]= new Array();
 choices[71][0] = "CBR y GFR";
 choices[71][1] = "ABR y CBR";
 choices[71][2] = "ABR y GFR";
 choices[71][3] = "CBR y rt-VBR";
 answers[71] = choices[71][3];
 units[71] = "109";
 comments[71] = "Id Pregunta: 9000. Examen UPM A2 2011";


//  Id pregunta: 9028 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  Indica cual de estas afirmaciones es cierta";
 choices[72]= new Array();
 choices[72][0] = "En RDSI igual que en RTB el descolgado del tel&eacute;fono produce un &quot;corto&quot; de tal forma que la corriente que pasa por el bucle indica a la central que el abonado ha descolgado.";
 choices[72][1] = "En RDSI el terminador de red aun siendo activo en caso de ca&iacute;da de la alimentaci&oacute;n local es capaz de establecer/mantener la conversaci&oacute;n.";
 choices[72][2] = "Los terminales que cuelgan de la RTB (Red Telef&oacute;nica B&aacute;sica) no pueden establecer ning&uacute;n tipo de comunicaci&oacute;n con los que cuelgan de la RDSI (Red Digital de Servicios Integrados).";
 choices[72][3] = "Ninguna de las anteriores";
 answers[72] = choices[72][1];
 units[72] = "103";
 comments[72] = "Id Pregunta: 9028. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9038 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  Indique la pauta de accesibilidad correcta seg&uacute;n la norma WCAG 1.0";
 choices[73]= new Array();
 choices[73][0] = "Dise&ntilde;o dependiente del dispositivo";
 choices[73][1] = "Evite parpadeos en la pantalla";
 choices[73][2] = "Utilice siempre CSS";
 choices[73][3] = "No se base s&oacute;lo en el color";
 answers[73] = choices[73][3];
 units[73] = "39";
 comments[73] = "Id Pregunta: 9038. ";


//  Id pregunta: 9120 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  &iquest;C&oacute;mo son los multiprocesadores en los sistemas de gesti&oacute;n UMA?";
 choices[74]= new Array();
 choices[74][0] = "Fuertemente acoplados.";
 choices[74][1] = "Muy desacoplados";
 choices[74][2] = "Un procesador no depende de lo que hace otro";
 choices[74][3] = "Todas las respuestas con correctas";
 answers[74] = choices[74][0];
 units[74] = "45";
 comments[74] = "Id Pregunta: 9120. ";


//  Id pregunta: 9190 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  En relaci&oacute;n a los programas de ordenadro, indicar mediante que ley se protegen.";
 choices[75]= new Array();
 choices[75][0] = "Mediante la Ley 23/2006 por la que se modifica el texto refundido de la Ley de Propiedad Intelectual";
 choices[75][1] = "Mediante la Ley de Propiedad Intelectual";
 choices[75][2] = "Mediante la Directiva de derechos de autor 2001/29";
 choices[75][3] = "Mediante la Ley de Patentes";
 answers[75] = choices[75][1];
 units[75] = "36";
 comments[75] = "Id Pregunta: 9190. ";


//  Id pregunta: 9218 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  &iquest;Qu&eacute; es WAFS?";
 choices[76]= new Array();
 choices[76][0] = "Wide Area File Service";
 choices[76][1] = "Una evoluci&oacute;n del empaquetado de audio WAV";
 choices[76][2] = "Un tipo de File System";
 choices[76][3] = "Una t&eacute;cnica de compresi&oacute;n de imagen.";
 answers[76] = choices[76][0];
 units[76] = "48";
 comments[76] = "Id Pregunta: 9218. ";


//  Id pregunta: 9357 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  &iquest;Qu&eacute; cable de fibra &oacute;ptica de los que se indican a continuaci&oacute;n tiene las caracter&iacute;sticas que lo identifican como un cable de fibra monomodo?";
 choices[77]= new Array();
 choices[77][0] = "Fibra 62.5/125 um";
 choices[77][1] = "Fibra 50/125 um";
 choices[77][2] = "Fibra 200/380 um ";
 choices[77][3] = "Fibra 10/125 um";
 answers[77] = choices[77][3];
 units[77] = "99";
 comments[77] = "Id Pregunta: 9357. Escala de Gesti&oacute;n de Sistemas de Sistemas de Informaci&oacute;n de la Xunta de Galicia. Promoci&oacute;n interna 2011.";


//  Id pregunta: 9371 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  E-Line:";
 choices[78]= new Array();
 choices[78][0] = "Es un servicio que ofrecen los operadores de fibra de lineas dedicadas.";
 choices[78][1] = "Es un mecanismo para proporcionar comunicaciones punto a punto mediante t&uacute;neles IPSec.";
 choices[78][2] = "Es un mecanismo para proporcionar comunicaciones punto a punto, encapsulando el tr&aacute;fico Ethernet dentro de un tunel MPLS.";
 choices[78][3] = "Es un mecanismo para comunicar dos computadoras mediante PPP.";
 answers[78] = choices[78][2];
 units[78] = "101";
 comments[78] = "Id Pregunta: 9371. ";


//  Id pregunta: 9389 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  Indique cu&aacute;l de las siguientes afirmaciones es FALSA:";
 choices[79]= new Array();
 choices[79][0] = "GSM (Global System Mobile) permite la utilizaci&oacute;n de los canales tanto para la transmisi&oacute;n de voz como de datos.";
 choices[79][1] = "GSM permite la utilizaci&oacute;n de t&eacute;cnicas de supresi&oacute;n de silencios.";
 choices[79][2] = "GSM emplea radiocanales de 5MHz de ancho de banda.";
 choices[79][3] = "Las recomendaciones GSM contemplan la posibilidad de utilizar un codificador de voz que permita dividir en ";
 answers[79] = choices[79][2];
 units[79] = "108";
 comments[79] = "Id Pregunta: 9389. Examen TIC A1 2011 Libre";


//  Id pregunta: 9601 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  &iquest;Qu&eacute; componentes se ubican en el n&uacute;cleo dependiente del sistema operativo UNIX?";
 choices[80]= new Array();
 choices[80][0] = "Las interrupciones";
 choices[80][1] = "El scheduler";
 choices[80][2] = "Los drivers de los dispositivos";
 choices[80][3] = "a) y c) son correctas";
 answers[80] = choices[80][3];
 units[80] = "53";
 comments[80] = "Id Pregunta: 9601. ";


//  Id pregunta: 9608 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  &iquest;Cual es una ventaja de los sistemas de base de datos NoSQL?";
 choices[81]= new Array();
 choices[81][0] = "Manejan eficientemente grandes cantidades de datos";
 choices[81][1] = "Ofrecen una gran eficiencia en operaciones en tiempo real";
 choices[81][2] = "Utilizan estructuras flexibles";
 choices[81][3] = "Todas las anteriores lo son";
 answers[81] = choices[81][3];
 units[81] = "58";
 comments[81] = "Id Pregunta: 9608. NULL";


//  Id pregunta: 9801 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  Seg&uacute;n la Ley Org&aacute;nica 15/1999 de protecci&oacute;n de datos, cuando se trata de ficheros de titularidad p&uacute;blica, el plazo para comunicar a la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos la inscripci&oacute;n de ficheros en el Registro General (RGPD) es:";
 choices[82]= new Array();
 choices[82][0] = "No hace falta dicha comunicaci&oacute;n al tratarse de ficheros de titularidad p&uacute;blica. ";
 choices[82][1] = "De 10 d&iacute;as desde que se publica su norma o acuerdo de creaci&oacute;n en el diario oficial correspondiente. ";
 choices[82][2] = "De 3 meses desde que se publica su norma o acuerdo de creaci&oacute;n en el diario oficial correspondiente. ";
 choices[82][3] = "De 30 d&iacute;as desde que se publica su norma o acuerdo de creaci&oacute;n en el diario oficial correspondiente. ";
 answers[82] = choices[82][3];
 units[82] = "29";
 comments[82] = "Id Pregunta: 9801. Examen TIC-A2 2013-Libre";


//  Id pregunta: 10120 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  Los enlaces por los que se env&iacute;an datos de m&aacute;s de una VLAN se denominan:";
 choices[83]= new Array();
 choices[83][0] = "M&uacute;ltiples";
 choices[83][1] = "Trunk";
 choices[83][2] = "VLAN- Link";
 choices[83][3] = "Data-Link";
 answers[83] = choices[83][1];
 units[83] = "102";
 comments[83] = "Id Pregunta: 10120. ";


//  Id pregunta: 10149 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  La Ley 34/2002, de servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico, en relaci&oacute;n a la imposici&oacute;n de Sanciones indica";
 choices[84]= new Array();
 choices[84][0] = "El &oacute;rgano sancionador establecer&aacute; la cuant&iacute;a de la sanci&oacute;n aplicando la escala relativa a la clase de infracciones que preceda inmediatamente en gravedad a aquella en que se integra la considerada cuando el infractor haya reconocido espont&aacute;neamente su culpabilidad.";
 choices[84][1] = "La cuant&iacute;a de las multas que se impongan se graduar&aacute; atendiendo a La adhesi&oacute;n a un c&oacute;digo de conducta o a un sistema de autorregulaci&oacute;n publicitaria aplicable respecto a la infracci&oacute;n cometida.";
 choices[84][2] = "Las dos anteriores son ciertas";
 choices[84][3] = "Las afirmaciones anteriores son falsas";
 answers[84] = choices[84][2];
 units[84] = "30";
 comments[84] = "Id Pregunta: 10149. ";


//  Id pregunta: 10240 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Una vez creado un objeto StringTokenizer, cu&aacute;l es el m&eacute;todo que nos permite ir avanzando hasta el siguiente elemento del String:";
 choices[85]= new Array();
 choices[85][0] = "next()";
 choices[85][1] = "nextValue()";
 choices[85][2] = "nextToken()";
 choices[85][3] = "Ninguno de los anteriores";
 answers[85] = choices[85][2];
 units[85] = "60";
 comments[85] = "Id Pregunta: 10240. NULL";


//  Id pregunta: 10243 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Dentro del archivo struts-config existe el atributo &lt;exception&gt;, puedes se&ntilde;alar la respuesta correcta que explica la funci&oacute;n del elemento scope:";
 choices[86]= new Array();
 choices[86][0] = "El alcance del Objeto ActionError relativo al m&oacute;dulo o aplicaci&oacute;n web";
 choices[86][1] = "El contexto que se usa para acceder al objeto ActionError para esta Exception";
 choices[86][2] = "Resuelve el nombre del manejador de excepiones de la clase Java";
 choices[86][3] = "Hace referencia a la clase Java registrada para manejar estas excepciones";
 answers[86] = choices[86][1];
 units[86] = "116";
 comments[86] = "Id Pregunta: 10243. NULL";


//  Id pregunta: 10302 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  En IPv6 (RFC 2460), &iquest;cu&aacute;nto ocupa el campo &quot;tipo de enrutamiento&quot;?";
 choices[87]= new Array();
 choices[87][0] = "15 bits.";
 choices[87][1] = "8 bits.";
 choices[87][2] = "10 bits.";
 choices[87][3] = "3 bits.";
 answers[87] = choices[87][1];
 units[87] = "100";
 comments[87] = "Id Pregunta: 10302. TIC A2, libre, examen 2013";


//  Id pregunta: 10504 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  &iquest;Cual es la impedancia de los cables definida en la ISO 11801 para las versiones de la norma posteriores a 2002?";
 choices[88]= new Array();
 choices[88][0] = "120 ?";
 choices[88][1] = "150 ?";
 choices[88][2] = "100 ?";
 choices[88][3] = "Todos los anteriores";
 answers[88] = choices[88][2];
 units[88] = "99";
 comments[88] = "Id Pregunta: 10504. A partir del 2002, solo se consideran validas las impedancias de 100 ?";


//  Id pregunta: 10515 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  &iquest;Cu&aacute;l de las siguientes respuestas NO se emplea para realizar pruebas de carga?";
 choices[89]= new Array();
 choices[89][0] = "Jmeter";
 choices[89][1] = "Loadrunner";
 choices[89][2] = "Grinder";
 choices[89][3] = "Turbine";
 answers[89] = choices[89][3];
 units[89] = "86";
 comments[89] = "Id Pregunta: 10515. TIC A2, libre, examen 2013";


//  Id pregunta: 10654 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  Se&ntilde;ale cu&aacute;l de estas entidades no pertenece a una arquitectura SAML:";
 choices[90]= new Array();
 choices[90][0] = "AP (Authentication Provider)";
 choices[90][1] = "SP (Service Provider)";
 choices[90][2] = "IdP (Identity Provider) ";
 choices[90][3] = "Todos los anteriores son componentes de la arquitectura SAML.";
 answers[90] = choices[90][0];
 units[90] = "111";
 comments[90] = "Id Pregunta: 10654. ";


//  Id pregunta: 10676 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  La Ley 39/2015 del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas se compone de:";
 choices[91]= new Array();
 choices[91][0] = "T&iacute;tulo preliminar, 6 T&iacute;tulos y 123 Art&iacute;culos.";
 choices[91][1] = "T&iacute;tulo preliminar, 6 T&iacute;tulos y 133 Art&iacute;culos.";
 choices[91][2] = "T&iacute;tulo preliminar, 5 T&iacute;tulos y 123 Art&iacute;culos.";
 choices[91][3] = "T&iacute;tulo preliminar, 5 T&iacute;tulos y 133 Art&iacute;culos.";
 answers[91] = choices[91][1];
 units[91] = "30";
 comments[91] = "Id Pregunta: 10676. ";


//  Id pregunta: 10893 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es correcta en relaci&oacute;n a la MTU (Maximum Transfer Unit) en redes IP, la MTU del camino es el valor de la:";
 choices[92]= new Array();
 choices[92][0] = "suma de todas las MTU entre el receptor y el emisor.";
 choices[92][1] = "media aritm&eacute;tica de todas las MTU entre el receptor y el emisor.";
 choices[92][2] = "MTU m&aacute;s baja de todos los enlaces a lo largo del camino entre nodos receptor y emisor.";
 choices[92][3] = "MTU m&aacute;s alta de todos los enlaces a lo largo del camino entre nodos receptor y emisor.";
 answers[92] = choices[92][2];
 units[92] = "100";
 comments[92] = "Id Pregunta: 10893. Examen GSI 2014";


//  Id pregunta: 11034 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Cu&aacute;l de los siguientes tipos de modelados conceptuales se asocia correctamente a su descripci&oacute;n?";
 choices[93]= new Array();
 choices[93][0] = "a)&nbsp;&nbsp;&nbsp;&nbsp; Modelo de Datos &agrave; Modelo est&aacute;tico";
 choices[93][1] = "Modelo de Objetos &agrave; Modelo funcional";
 choices[93][2] = "Modelo de Procesos &agrave; Modelo din&aacute;mico";
 choices[93][3] = "Modelo de Estados &agrave; Modelo funcional";
 answers[93] = choices[93][0];
 units[93] = "57";
 comments[93] = "Id Pregunta: 11034. ";


//  Id pregunta: 11238 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Entre los principios del texto refundido de la ley de contratos del sector p&uacute;blico no se encuentra:";
 choices[94]= new Array();
 choices[94][0] = "Libertad de acceso a las licitaciones.";
 choices[94][1] = "Publicidad y transparencia de los procedimientos.";
 choices[94][2] = "No discriminaci&oacute;n e igualdad de trato entre los candidatos.";
 choices[94][3] = "Mejorar la competencia.";
 answers[94] = choices[94][3];
 units[94] = "41";
 comments[94] = "Id Pregunta: 11238. ";


//  Id pregunta: 11265 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  La versi&oacute;n 3 de ITIL enfoca la gesti&oacute;n de servicios a partir del ciclo de vida de un servicio, se&ntilde;ale en concepto correcto entre los que se muestran a continuaci&oacute;n: ";
 choices[95]= new Array();
 choices[95][0] = "Funci&oacute;n: es una subdivisi&oacute;n de una organizaci&oacute;n que est&aacute; especializada en realizar un tipo de trabajo concreto y tiene la responsabilidad de obtener resultados concretos.";
 choices[95][1] = "Actividad: es un conjunto estructurado de procesos dise&ntilde;ado para cumplir uno objetivo concreto.";
 choices[95][2] = "Gesti&oacute;n de Servicio: es un conjunto de actividades y responsabilidades asignadas a una persona o un grupo.";
 choices[95][3] = "Rol: es un conjunto de capacidades organizativas especializadas, cuyo fin es generar valor para los clientes en forma de servicios.";
 answers[95] = choices[95][0];
 units[95] = "98";
 comments[95] = "Id Pregunta: 11265. ";


//  Id pregunta: 11373 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Seg&uacute;n ITIL v3, &iquest;qu&eacute; proceso es responsable de revisar regularmente los acuerdos de nivel operativo (OLA)?";
 choices[96]= new Array();
 choices[96][0] = "Gesti&oacute;n de suministradores";
 choices[96][1] = "Gesti&oacute;n de niveles de servicio";
 choices[96][2] = "Gesti&oacute;n del porfolio de servicios";
 choices[96][3] = "Gesti&oacute;n de demanda";
 answers[96] = choices[96][1];
 units[96] = "98";
 comments[96] = "Id Pregunta: 11373. ";


//  Id pregunta: 11442 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Seg&uacute;n la Ley 9/2014, &iquest;qui&eacute;n establece los procedimientos para la habilitaci&oacute;n del ejercicio de los derechos del uso del dominio p&uacute;blico radioel&eacute;ctrico?:";
 choices[97]= new Array();
 choices[97][0] = "La CNMC.";
 choices[97][1] = "El gobierno.";
 choices[97][2] = "El Estado.";
 choices[97][3] = "El MINETUR.";
 answers[97] = choices[97][1];
 units[97] = "110";
 comments[97] = "Id Pregunta: 11442. ";


//  Id pregunta: 11728 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Cu&aacute;l es uno de los beneficios de la utilizaci&oacute;n de las VPN para el acceso remoto?";
 choices[98]= new Array();
 choices[98][0] = "Menor sobrecarga de protocolo";
 choices[98][1] = "Potencial reducci&oacute;n de los costos de conectividad";
 choices[98][2] = "Aumento de la calidad de servicio";
 choices[98][3] = "Facilidad de soluci&oacute;n de problemas";
 answers[98] = choices[98][1];
 units[98] = "111";
 comments[98] = "Id Pregunta: 11728. NULL";


//  Id pregunta: 11750 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  En relaci&oacute;n a la Comisi&oacute;n de Transparencia y Buen Gobierno";
 choices[99]= new Array();
 choices[99][0] = "Al menos dos veces al a&ntilde;o convocar&aacute; a los representantes de los organismos que, con funciones similares a las desarrolladas por ella, hayan sido creados por las Comunidades Aut&oacute;nomas en ejercicio de sus competencias.";
 choices[99][1] = "Pertenece al Ministerio de Industria, Energia y Turismo.";
 choices[99][2] = "A esta reuni&oacute;n podr&aacute; ser convocado un representante de la Administraci&oacute;n Local propuesto por la Federaci&oacute;n Espa&ntilde;ola de Municipios y Provincias.";
 choices[99][3] = "No se ha creado a&uacute;n.";
 answers[99] = choices[99][2];
 units[99] = "41";
 comments[99] = "Id Pregunta: 11750. ";


