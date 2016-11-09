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

//  Id pregunta: 116 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  De las siguientes estructuras organizativas de un departamento de sistemas de informaci&oacute;n se&ntilde;ale la que considere m&aacute;s correcta:";
 choices[0]= new Array();
 choices[0][0] = "Establecer una estructura funcional en el departamento de sistemas y una sectorial en el de desarrollo";
 choices[0][1] = "Establecer una estructura sectorial en sistemas y una matricial en desarrollo";
 choices[0][2] = "Establecer una estructura matricial en sistemas y una matricial en desarrollo";
 choices[0][3] = "Establecer una estructura matricial en sistemas y una por proyectos en desarrollo";
 answers[0] = choices[0][0];
 units[0] = "22";
 comments[0] = "Id Pregunta: 116. ";


//  Id pregunta: 146 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  El instituto ANSI tiene homologados, desde hace tiempo, diversos lenguajes, entre los que no se encuentra el:";
 choices[1]= new Array();
 choices[1][0] = "COBOL";
 choices[1][1] = "PROLOG";
 choices[1][2] = "FORTRAN";
 choices[1][3] = "C";
 answers[1] = choices[1][2];
 units[1] = "42";
 comments[1] = "Id Pregunta: 146. Todos estan ya hologados, pero FORTRAN fue el ultimo en 2007";


//  Id pregunta: 393 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  Para garantizar al usuario el acceso al c&oacute;digo fuente del programa cedido en el caso de desaparici&oacute;n de la empresa titular de los derechos de propiedad intelectual se recurre a:";
 choices[2]= new Array();
 choices[2][0] = "El Convenio de Berna";
 choices[2][1] = "La Ley 16/993";
 choices[2][2] = "La Ley 22/1987";
 choices[2][3] = "El contrato de Escrow";
 answers[2] = choices[2][3];
 units[2] = "36";
 comments[2] = "Id Pregunta: 393. ";


//  Id pregunta: 520 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  &iquest;En qu&eacute; fase del ciclo de vida se deben contemplar los controles de aplicaci&oacute;n por primera vez?";
 choices[3]= new Array();
 choices[3][0] = "Dise&ntilde;o";
 choices[3][1] = "An&aacute;lisis";
 choices[3][2] = "Construcci&oacute;n";
 choices[3][3] = "Pruebas de aceptaci&oacute;n";
 answers[3] = choices[3][1];
 units[3] = "31, 32, 33";
 comments[3] = "Id Pregunta: 520. Auditor&iacute;a Inform&aacute;tica";


//  Id pregunta: 592 AÃ±o de creación de pregunta: 2006-01-01
 questions[4]= "5)  El retraso de una actividad:";
 choices[4]= new Array();
 choices[4][0] = "supone un retraso siempre en el proyecto";
 choices[4][1] = "supondr&aacute; un retraso si no pertenece al camino cr&iacute;tico";
 choices[4][2] = "no supone retraso alguno si no pertenece al camino critico y la actividad no pasa a formar parte de este al alargar su duraci&oacute;n";
 choices[4][3] = "no supone retraso nunca";
 answers[4] = choices[4][2];
 units[4] = "28";
 comments[4] = "Id Pregunta: 592. ";


//  Id pregunta: 642 AÃ±o de creación de pregunta: 2006-01-01
 questions[5]= "6)  Cu&aacute;l de las siguientes afirmaciones sobre sistemas abiertos es incorrecta:";
 choices[5]= new Array();
 choices[5][0] = "El modelo b&aacute;sico de referencia para la Interconexi&oacute;n de Sistemas Abiertos de ISO consiste en la arquitectura OSI, que se basa en las especificaciones de IEEE.";
 choices[5][1] = "La instituci&oacute;n p&uacute;blica IEEE genera las normas m&aacute;s avanzados dentro del campo de estandarizaci&oacute;n de redes locales.";
 choices[5][2] = "El programa IDABC tiene como uno de sus fines promover la colaboraci&oacute;n entre las administraciones p&uacute;blicas de los distintos pa&iacute;ses europeos.";
 choices[5][3] = "NIST fija los est&aacute;ndares federales de tratamiento de la informaci&oacute;n que las agencias gubernamentales deben seguir en la contrataci&oacute;n de software y hardware.";
 answers[5] = choices[5][1];
 units[5] = "40";
 comments[5] = "Id Pregunta: 642. ";


//  Id pregunta: 818 AÃ±o de creación de pregunta: 2009-01-01
 questions[6]= "7)  Seg&uacute;n la Ley 34/2002,  las Administraciones P&uacute;blicas adoptar&aacute;n las medidas necesarias para que las informaci&oacute;n disponible en sus p&aacute;ginas de Internet puedan ser accesibles para discapacitados. Esto est&aacute; de acuerdo con:";
 choices[6]= new Array();
 choices[6][0] = "A partir del 31 de diciembre de 2008, las p&aacute;ginas de Internet de las Administraciones P&uacute;blicas satisfar&aacute;n, como m&iacute;nimo, el nivel medio de los criterios de accesibilidad al contenido generalmente reconocidos. Excepcionalmente, esta obligaci&oacute;n no ser&aacute; aplicable cuando una funcionalidad o servicio no disponga de una soluci&oacute;n tecnol&oacute;gica que permita su accesibilidad.";
 choices[6][1] = "El nivel medio de los criterios de accesibilidad al contenido generalmente reconocidos, antes del 31 de diciembre de 2005";
 choices[6][2] = "Los criterios WAI antes del 31 de diciembre de 2008";
 choices[6][3] = "Los criterios WAI antes del 31 de diciembre de 2005";
 answers[6] = choices[6][0];
 units[6] = "30";
 comments[6] = "Id Pregunta: 818. Ley 34/2002, disposici&oacute;n adicional quinta, modificado por Ley 56/2007, art&iacute;culo 4";


//  Id pregunta: 924 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Qu&eacute; es JDBC?:";
 choices[7]= new Array();
 choices[7][0] = "Un est&aacute;ndar que permite la definici&oacute;n de procedimientos escritos en Java para el establecimiento de una conexi&oacute;n a la base de datos v&iacute;a  ODBC";
 choices[7][1] = "Una API, que implementan los drivers de conexi&oacute;n a base de datos, y que permite el acceso a &eacute;stas &uacute;ltimas desde aplicaciones Java.";
 choices[7][2] = "Un driver que permite la conexi&oacute;n entre los distintos niveles de la arquitectura Internet";
 choices[7][3] = "El est&aacute;ndar de ODBC para base de datos relacionales";
 answers[7] = choices[7][1];
 units[7] = "60";
 comments[7] = "Id Pregunta: 924. NULL";


//  Id pregunta: 935 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Qu&eacute; indica la directiva #pragma en lenguaje C?:";
 choices[8]= new Array();
 choices[8][0] = "Le indica al compilador que genere un mensaje de error si llega a ese punto del c&oacute;digo";
 choices[8][1] = "Es un #include condicional";
 choices[8][2] = "Permite al implementador del compilador definir otras instrucciones de preprocesamiento para el compilador";
 choices[8][3] = "Nada de lo anterior es correcto";
 answers[8] = choices[8][2];
 units[8] = "59";
 comments[8] = "Id Pregunta: 935. ";


//  Id pregunta: 974 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  Dada una tarjeta con microprocesador utilizada en un sistema de control de acceso, &iquest;cu&aacute;l de las siguientes afirmaciones es falsa?:";
 choices[9]= new Array();
 choices[9][0] = "Dispone de un sistema operativo con un juego de instrucciones grabado en memoria ROM";
 choices[9][1] = "Permite realizar algoritmos complejos de cifrado con clave asim&eacute;trica";
 choices[9][2] = "La lectura de su informaci&oacute;n se realiza mediante un diodo de l&aacute;ser";
 choices[9][3] = "Incorpora un microprocesador con memoria";
 answers[9] = choices[9][2];
 units[9] = "74";
 comments[9] = "Id Pregunta: 974. NULL";


//  Id pregunta: 1528 AÃ±o de creación de pregunta: 2003-01-01
 questions[10]= "11)  El sistema GPS (Global Positioning System), &iquest;de cu&aacute;ntos  sat&eacute;lites operativos se compone?";
 choices[10]= new Array();
 choices[10][0] = "16.";
 choices[10][1] = "24.";
 choices[10][2] = "32.";
 choices[10][3] = "64.";
 answers[10] = choices[10][1];
 units[10] = "67";
 comments[10] = "Id Pregunta: 1528. Junta Andaluc&iacute;a";


//  Id pregunta: 1677 AÃ±o de creación de pregunta: 2004-01-01
 questions[11]= "12)  &iquest;Qu&eacute; hace el comando SQL update?";
 choices[11]= new Array();
 choices[11][0] = "Modifica la estructura de una tabla agregando o eliminando campos";
 choices[11][1] = "Modifica la estructura de una vista";
 choices[11][2] = "Modifica los valores de los campos de una tabla";
 choices[11][3] = "Modifica la estructura de una tabla cambiando la definici&oacute;n de sus campos";
 answers[11] = choices[11][2];
 units[11] = "58";
 comments[11] = "Id Pregunta: 1677. ";


//  Id pregunta: 1835 AÃ±o de creación de pregunta: 2006-01-01
 questions[12]= "13)  &iquest;Qu&eacute; es un DTD?";
 choices[12]= new Array();
 choices[12][0] = "Define la forma en que los documentos XML deben conectarse entre s&iacute;";
 choices[12][1] = "Descripci&oacute;n del formato en el que se desea que aparezcan las entidades definidas en un documento";
 choices[12][2] = "Definici&oacute;n de la gram&aacute;tica de un documento";
 choices[12][3] = "Permite controlar el formato de los documentos HTML con descripciones particulares";
 answers[12] = choices[12][2];
 units[12] = "69";
 comments[12] = "Id Pregunta: 1835. NULL";


//  Id pregunta: 1846 AÃ±o de creación de pregunta: 2006-01-01
 questions[13]= "14)  &iquest;A qu&eacute; hace referencia las siglas WAPI?";
 choices[13]= new Array();
 choices[13][0] = "Wireless Advanced Privacy Infrastructure";
 choices[13][1] = "Workflow Application Programming Interface";
 choices[13][2] = "Wired Advanced Professional Institute";
 choices[13][3] = "Wireless Application Programming Interface";
 answers[13] = choices[13][1];
 units[13] = "71";
 comments[13] = "Id Pregunta: 1846. ";


//  Id pregunta: 1866 AÃ±o de creación de pregunta: 2006-01-01
 questions[14]= "15)  Los documentos de la serie PKCS son especificaciones producidas por los Laboratorios RSA. Se&ntilde;ale la falsa: ";
 choices[14]= new Array();
 choices[14][0] = "PKCS#3 Protocolo de acuerdo de claves  Diffie-Hellman";
 choices[14][1] = "PKCS#11 Cryptoki";
 choices[14][2] = "PKCS#1 Standard de encriptaci&oacute;n RSA";
 choices[14][3] = "La primera es falsa";
 answers[14] = choices[14][3];
 units[14] = "74";
 comments[14] = "Id Pregunta: 1866. NULL";


//  Id pregunta: 2020 AÃ±o de creación de pregunta: 2004-01-01
 questions[15]= "16)  En relaci&oacute;n con la &quot;reingenier&iacute;a de sistemas&quot; indique cu&aacute;l de las siguientes afirmaciones no es correcta:";
 choices[15]= new Array();
 choices[15][0] = "La reingenier&iacute;a es la mejora de los sistemas existentes de modo que la inversi&oacute;n resulte muy rentable, independientemente de que dicha mejora pueda ser obtenida con un nuevo desarrollo.";
 choices[15][1] = "La reingenier&iacute;a debe tener bajo coste, hacerse en poco tiempo, tener poco riesgo y dar un valor a&ntilde;adido.";
 choices[15][2] = "La reingener&iacute;a trabaja todos los niveles de abstracci&oacute;n, desde la implementaci&oacute;n hasta el dise&ntilde;o.";
 choices[15][3] = "La reingenier&iacute;a que s&oacute;lo requiere el conocimiento de los interfaces de sistema se llama ingenier&iacute;a inversa o modernizaci&oacute;n de caja blanca.";
 answers[15] = choices[15][3];
 units[15] = "91";
 comments[15] = "Id Pregunta: 2020. Examen TIC MAP B 2004";


//  Id pregunta: 2053 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  Funciones de un sistema de informaci&oacute;n son:";
 choices[16]= new Array();
 choices[16][0] = "Entrada de datos, almacenamiento y presentaci&oacute;n de los mismos";
 choices[16][1] = "Entrada de datos, comunicaciones y c&aacute;lculo";
 choices[16][2] = "Las respuestas &lsquo;a&rsquo;, &lsquo;b&rsquo; y &lsquo;d&rsquo; son correctas";
 choices[16][3] = "Almacenamiento de datos, c&aacute;lculo y comunicaciones";
 answers[16] = choices[16][2];
 units[16] = "21";
 comments[16] = "Id Pregunta: 2053. ";


//  Id pregunta: 2237 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Benchmarking es un concepto que indica:";
 choices[17]= new Array();
 choices[17][0] = "Un mecanismo para determinar reducciones de recursos";
 choices[17][1] = "Un sin&oacute;nimo de auditor&iacute;a";
 choices[17][2] = "Un proceso sistem&aacute;tico y continuo para evaluar los productos, servicios y trabajos de las organizaciones que son reconocidas como representantes de las mejores pr&aacute;cticas, con el prop&oacute;sito de realizar mejoras organizacionales";
 choices[17][3] = "Un programa inform&aacute;tico que al instalarse tiene como misi&oacute;n la optimizaci&oacute;n de la eficiencia de los sistemas a los que afecte su configuraci&oacute;n, tanto a nivel de espacio de disco como a nivel de rendimiento";
 answers[17] = choices[17][2];
 units[17] = "92";
 comments[17] = "Id Pregunta: 2237. NULL";


//  Id pregunta: 2732 AÃ±o de creación de pregunta: 2006-01-01
 questions[18]= "19)  &iquest;Cu&aacute;l de las siguientes no es una metodolog&iacute;a que cubra el desarrollo de planes de sistemas de informaci&oacute;n?";
 choices[18]= new Array();
 choices[18][0] = "M&eacute;trica";
 choices[18][1] = "Racines";
 choices[18][2] = "Method 1";
 choices[18][3] = "Eclipse";
 answers[18] = choices[18][3];
 units[18] = "77";
 comments[18] = "Id Pregunta: 2732. ";


//  Id pregunta: 2817 AÃ±o de creación de pregunta: 2006-01-01
 questions[19]= "20)  En el M&eacute;todo de los Puntos de Funci&oacute;n &quot;MARK II&quot;:";
 choices[19]= new Array();
 choices[19][0] = "Un sistema se configura como un conjunto de &quot;aplicaciones tipo&quot; l&oacute;gicas.";
 choices[19][1] = "Las consultas se tratan como una entrada m&aacute;s.";
 choices[19][2] = "Se emplea el concepto de &quot;fichero l&oacute;gico&quot;.";
 choices[19][3] = "Se consideran 19 caracter&iacute;sticas del sistema para calcular los valores de ajuste de la complejidad.";
 answers[19] = choices[19][3];
 units[19] = "89";
 comments[19] = "Id Pregunta: 2817. NULL";


//  Id pregunta: 2945 AÃ±o de creación de pregunta: 2004-01-01
 questions[20]= "21)  Los Bridges:";
 choices[20]= new Array();
 choices[20][0] = "Filtran y encaminan la informaci&oacute;n por el trayecto &oacute;ptimo permitiendo la interconexi&oacute;n de redes heterog&eacute;neas a niveles 1 y 2";
 choices[20][1] = "Son elementos para la interconexi&oacute;n que operan en los niveles superiores al de red";
 choices[20][2] = "Son dispositivos que se encargan de regenerar la se&ntilde;al entre los dos segmentos de red que interconectan";
 choices[20][3] = "Operan a nivel de MAC (nivel 2), por tanto son transparentes a los protocolos de niveles supeiores";
 answers[20] = choices[20][3];
 units[20] = "102";
 comments[20] = "Id Pregunta: 2945. Examen TIC MAP B 2004";


//  Id pregunta: 3209 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  El concepto y primer desarrollo del servicio WWW se debe a:";
 choices[21]= new Array();
 choices[21][0] = "Vinton Cerf";
 choices[21][1] = "Leonard Kleinrock";
 choices[21][2] = "Robert Kahn";
 choices[21][3] = "Tim Berners-Lee";
 answers[21] = choices[21][3];
 units[21] = "112";
 comments[21] = "Id Pregunta: 3209. ";


//  Id pregunta: 3307 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  &iquest;Qu&eacute; punto de referencia es el interfaz f&iacute;sico y l&oacute;gico entre Terminales no dise&ntilde;ados para conectarse directamente a la RDSI, como un terminal telef&oacute;nico convencional &oacute; m&aacute;quina de fax convencional (Grupo III), con el equipo Adaptador de Terminal?: ";
 choices[22]= new Array();
 choices[22][0] = "R";
 choices[22][1] = "S";
 choices[22][2] = "T";
 choices[22][3] = "U";
 answers[22] = choices[22][0];
 units[22] = "103";
 comments[22] = "Id Pregunta: 3307. ";


//  Id pregunta: 3424 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Indicar entre las siguientes normas del IEEE la que trata sobre redes de &aacute;rea metropolitana:";
 choices[23]= new Array();
 choices[23][0] = "802.6";
 choices[23][1] = "802.7";
 choices[23][2] = "802.8";
 choices[23][3] = "802.9";
 answers[23] = choices[23][0];
 units[23] = "101";
 comments[23] = "Id Pregunta: 3424. ";


//  Id pregunta: 3827 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Se&ntilde;ale la respuesta falsa respecto a los protocolos de gesti&oacute;n de red:";
 choices[24]= new Array();
 choices[24][0] = "El modelo de gesti&oacute;n OSI utiliza una base de informaci&oacute;n de gesti&oacute;n o MIB para almacenar la informaci&oacute;n estructurada que representa a los elementos de la red y sus atributos";
 choices[24][1] = "La estructura de informaci&oacute;n se denomina SMI (Estructura de informaci&oacute;n de Gestion) para estas estructuras el modelo OSI define un Sistema muy complejo de gesti&oacute;n orientado a objetos";
 choices[24][2] = "Con la especificaci&oacute;n SNMP versi&oacute;n 1 (Protocolo sencillo de gesti&oacute;n de red) no se puede comprobar el origen de un mensaje ni su autenficaci&oacute;n, lo que le hace vulnerable a ataques para modificar la configuraci&oacute;n de red";
 choices[24][3] = "SNMPv2 y SNMP son variantes de SMTP";
 answers[24] = choices[24][3];
 units[24] = "104";
 comments[24] = "Id Pregunta: 3827. ";


//  Id pregunta: 3870 AÃ±o de creación de pregunta: 2004-01-01
 questions[25]= "26)  Qu&eacute; es falso respecto a XHTML";
 choices[25]= new Array();
 choices[25][0] = "Obliga a anidar las etiquetas adecuadamente";
 choices[25][1] = "Se adapta mejor a los navegadores m&aacute;s avanzados";
 choices[25][2] = "Obliga a encerrar entre comillas los valores de los atributos";
 choices[25][3] = "Cada documento tiene que especificar su tipo";
 answers[25] = choices[25][1];
 units[25] = "113";
 comments[25] = "Id Pregunta: 3870. Tanenbaum";


//  Id pregunta: 4352 AÃ±o de creación de pregunta: 2007-01-01
 questions[26]= "27)  El dispositivo necesario para tener acceso a Internet a trav&eacute;s de la red de cable-TV que ofrecen distintos operadores, se llama:";
 choices[26]= new Array();
 choices[26][0] = "CODEC.";
 choices[26][1] = "Router.";
 choices[26][2] = "MODEM cable.";
 choices[26][3] = "Splitter.";
 answers[26] = choices[26][2];
 units[26] = "105";
 comments[26] = "Id Pregunta: 4352. ";


//  Id pregunta: 4386 AÃ±o de creación de pregunta: 2007-01-01
 questions[27]= "28)  En el entorno .NET se han desarrollado una serie de lenguajes de programaci&oacute;n para que sean compatibles con el marco de trabajo .NET. &iquest;Cu&aacute;l de los siguientes no es uno de esos lenguajes?";
 choices[27]= new Array();
 choices[27][0] = "Java";
 choices[27][1] = "C#";
 choices[27][2] = "Visual Basic";
 choices[27][3] = "C++";
 answers[27] = choices[27][0];
 units[27] = "59";
 comments[27] = "Id Pregunta: 4386. ";


//  Id pregunta: 4481 AÃ±o de creación de pregunta: 2007-01-01
 questions[28]= "29)  &iquest;Cual de los siguientes paquetes de Java contiene las clases b&aacute;sicas utilizadas habitualmente en la mayor&iacute;a de los programas Java?";
 choices[28]= new Array();
 choices[28][0] = "java.lang";
 choices[28][1] = "java.beans";
 choices[28][2] = "java.sql";
 choices[28][3] = "java.util";
 answers[28] = choices[28][0];
 units[28] = "60";
 comments[28] = "Id Pregunta: 4481. JCED - Preparatic XVII";


//  Id pregunta: 4553 AÃ±o de creación de pregunta: 2007-01-01
 questions[29]= "30)  En gesti&oacute;n de proyectos de tecnolog&iacute;as de la informaci&oacute;n indicar cu&aacute;l de los siguientes diagramas es de red y tiene una representaci&oacute;n gr&aacute;fica m&aacute;s sencilla no incluyendo actividades virtuales.";
 choices[29]= new Array();
 choices[29][0] = "Diagrama PERT (Program Evaluation and Review Technique).";
 choices[29][1] = "Diagrama PDM (Precedence Diagramming Method).";
 choices[29][2] = "Diagrama ADM (Arrow Diagramming Method).";
 choices[29][3] = "Ninguno de los anteriores.";
 answers[29] = choices[29][1];
 units[29] = "27";
 comments[29] = "Id Pregunta: 4553. Castilla la Mancha B 06";


//  Id pregunta: 4662 AÃ±o de creación de pregunta: 2007-01-01
 questions[30]= "31)  Tasa M&aacute;xima de Transferencia  de Informaci&oacute;n alcanzable con la tecnolog&iacute;a HSDPA ";
 choices[30]= new Array();
 choices[30][0] = "7.2Mbps";
 choices[30][1] = "14.4Mbps";
 choices[30][2] = "4.8Mbps";
 choices[30][3] = "10.7Mbps";
 answers[30] = choices[30][1];
 units[30] = "108";
 comments[30] = "Id Pregunta: 4662. ";


//  Id pregunta: 4742 AÃ±o de creación de pregunta: 2007-01-01
 questions[31]= "32)  Cual de las siguientes afirmaciones es incorrecta:";
 choices[31]= new Array();
 choices[31][0] = "PNG comprime mejor que el formato GIF las im&aacute;genes";
 choices[31][1] = "W3C desaconseja el uso del formato GIF por el posible pago de patentes";
 choices[31][2] = "PNG y GIF soportan animaci&oacute;n de im&aacute;genes";
 choices[31][3] = "PNG soporta un m&aacute;ximo de 256 colores";
 answers[31] = choices[31][2];
 units[31] = "93";
 comments[31] = "Id Pregunta: 4742. Examen 2006 JCYL";


//  Id pregunta: 4766 AÃ±o de creación de pregunta: 2007-01-01
 questions[32]= "33)  En la mayor&iacute;a de las instalaciones de cableado estrcturado, el par trenzado sin apantallar (UTP) es m&aacute;s utilizdo ue el par trenzado apantallado (STP) deboido a que";
 choices[32]= new Array();
 choices[32][0] = "STP es m&aacute;s costoso y m&aacute;s suceptible a problemas de ruido cuando la conexi&oacute;n a tierra no es de gran calidad";
 choices[32][1] = "Al ser STP mucho m&aacute;s fr&aacute;gil que UTP, reslta mucho m&aacute;s dif&iacute;cil canalizarlo";
 choices[32][2] = "Los conectores utilizados en UTP (RJ-45) son m&aacute;s econ&oacute;micos  fiables que los de STP (RJ 11)";
 choices[32][3] = "Es mucho m&aacute;s utilizado el par trenzado apantallado (STP)";
 answers[32] = choices[32][0];
 units[32] = "99";
 comments[32] = "Id Pregunta: 4766. ";


//  Id pregunta: 4879 AÃ±o de creación de pregunta: 2007-01-01
 questions[33]= "34)  Seg&uacute;n se establece en la Gu&iacute;a de Certificaci&oacute;n para Sistemas de e-Learning basados en Web de AICC (Aviation Industry Computer-based Training Committee), &iquest;cu&aacute;l es la longitud m&aacute;xima de la URL (Uniform Resource Locator)de arranque de una unidad de asignaci&oacute;n en caracteres?";
 choices[33]= new Array();
 choices[33][0] = "64";
 choices[33][1] = "128";
 choices[33][2] = "256";
 choices[33][3] = "1024";
 answers[33] = choices[33][2];
 units[33] = "66";
 comments[33] = "Id Pregunta: 4879. ";


//  Id pregunta: 5018 AÃ±o de creación de pregunta: 2003-01-01
 questions[34]= "35)  El grupo de trabajo IEEE 802.1ab se encarga:";
 choices[34]= new Array();
 choices[34][0] = "De especificar el algoritmo de intercambio de BPDUs a nivel 2 en una red Ethernet";
 choices[34][1] = "Del estudio de los protocolos para el descubrimiento de la topolog&iacute;a f&iacute;sica de una red Ethernet";
 choices[34][2] = "Del estudio de los protocolos PVST y PVGST (m&uacute;ltiples instancias de Spanning Tree)";
 choices[34][3] = "De la especificaci&oacute;n 1000Base-T";
 answers[34] = choices[34][1];
 units[34] = "101";
 comments[34] = "Id Pregunta: 5018. Examen TIC A 2007";


//  Id pregunta: 5188 AÃ±o de creación de pregunta: 2003-01-01
 questions[35]= "36)  En la programaci&oacute;n Orientada a Objetos, un Objeto es una entidad que se caracteriza porque tiene:";
 choices[35]= new Array();
 choices[35][0] = "Estado, Comportamiento e Identidad";
 choices[35][1] = "Comportamiento, Identidad y Relaciones";
 choices[35][2] = "Estado, Identidad y Relaciones";
 choices[35][3] = "Todas son falsas";
 answers[35] = choices[35][0];
 units[35] = "82";
 comments[35] = "Id Pregunta: 5188. ";


//  Id pregunta: 5553 AÃ±o de creación de pregunta: 2003-01-01
 questions[36]= "37)  La clara identificaci&oacute;n de cualquier cambio de idioma que se pueda producir en el texto de un documento, ser&iacute;a un ejemplo de punto de verificaci&oacute;n de accesibilidad de prioridad: ";
 choices[36]= new Array();
 choices[36][0] = "1";
 choices[36][1] = "2";
 choices[36][2] = "3";
 choices[36][3] = "4";
 answers[36] = choices[36][0];
 units[36] = "39";
 comments[36] = "Id Pregunta: 5553. ";


//  Id pregunta: 5688 AÃ±o de creación de pregunta: 2003-01-01
 questions[37]= "38)  Se&ntilde;ale donde se encuentran los datos biom&eacute;tricos y de identidad en el chip criptogr&aacute;fico del DNI electr&oacute;nico:";
 choices[37]= new Array();
 choices[37][0] = "Zona de seguridad";
 choices[37][1] = "Zona p&uacute;blica";
 choices[37][2] = "Zona privada";
 choices[37][3] = "Zona confidencial";
 answers[37] = choices[37][0];
 units[37] = "74";
 comments[37] = "Id Pregunta: 5688. NULL";


//  Id pregunta: 5753 AÃ±o de creación de pregunta: 2009-01-01
 questions[38]= "39)  &iquest;Por qu&eacute; el algoritmo DSA no sirve para cifrar?";
 choices[38]= new Array();
 choices[38][0] = "Porque al realizar funciones modulo x (donde x es uno de los valores p&uacute;blicos del sistema) no se puede realizar su inversi&oacute;n";
 choices[38][1] = "Porque realiza un hash del mensaje, por tanto no es recuperable";
 choices[38][2] = "Porque tendr&iacute;amos que enviar la clave privada";
 choices[38][3] = "No es cierto, el algoritmo DSA s&iacute; sirve para cifrar";
 answers[38] = choices[38][1];
 units[38] = "72";
 comments[38] = "Id Pregunta: 5753. ";


//  Id pregunta: 5766 AÃ±o de creación de pregunta: 2009-01-01
 questions[39]= "40)  &iquest;A cu&aacute;l de las siguientes categor&iacute;as de m&eacute;todos de ordenaci&oacute;n de alternativas pertenece el m&eacute;todo PROMETHEE?";
 choices[39]= new Array();
 choices[39][0] = "Concordancia";
 choices[39][1] = "Permutaciones";
 choices[39][2] = "Relaciones de superaci&oacute;n";
 choices[39][3] = "Ponderaci&oacute;n lineal";
 answers[39] = choices[39][2];
 units[39] = "34";
 comments[39] = "Id Pregunta: 5766. ";


//  Id pregunta: 5889 AÃ±o de creación de pregunta: 2009-01-01
 questions[40]= "41)  En Inteligencia Artificial, la hip&oacute;tesis del mundo cerrado consiste en:";
 choices[40]= new Array();
 choices[40][0] = "Suponer falso todo lo que no est&aacute; almacenado en la base de hechos";
 choices[40][1] = "Suponer cierto todo lo que est&aacute; almacenado en la base de hechos";
 choices[40][2] = "Suponer unas veces cierto y otras falso la informaci&oacute;n almacenada en la base de hechos";
 choices[40][3] = "Ninguna de las anteriores";
 answers[40] = choices[40][0];
 units[40] = "63";
 comments[40] = "Id Pregunta: 5889. MAP 2008 A1";


//  Id pregunta: 6153 AÃ±o de creación de pregunta: 2010-01-01
 questions[41]= "42)  &iquest;Sobre qu&eacute; protocolo de la capa de presentaci&oacute;n est&aacute; implementado NFS?";
 choices[41]= new Array();
 choices[41][0] = "ONC RPC";
 choices[41][1] = "XDR";
 choices[41][2] = "NIS";
 choices[41][3] = "XML";
 answers[41] = choices[41][1];
 units[41] = "112";
 comments[41] = "Id Pregunta: 6153. ";


//  Id pregunta: 6249 AÃ±o de creación de pregunta: 2010-01-01
 questions[42]= "43)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta, de acuerdo con M&eacute;trica 3?";
 choices[42]= new Array();
 choices[42][0] = "El objetivo de la gesti&oacute;n de la configuraci&oacute;n es mantener la integridad de los productos que se obtienen a lo largo del desarrollo de los sistemas de informaci&oacute;n, garantizando que no se realicen cambios";
 choices[42][1] = "Ejecutables y c&oacute;digo fuente son elementos de configuraci&oacute;n software pero no lo son las especificaciones de requisitos";
 choices[42][2] = "La gesti&oacute;n de configuraci&oacute;n se realiza durante todas las actividades asociadas al desarrollo del sistema, y contin&uacute;a registrando los cambios hasta que &eacute;ste deja de utilizarse";
 choices[42][3] = "La gesti&oacute;n de configuraci&oacute;n aporta informaci&oacute;n precisa para valorar el impacto de los cambios en el mantenimiento correctivo. La gesti&oacute;n de configuraci&oacute;n no contempla el mantenimiento evolutivo";
 answers[42] = choices[42][2];
 units[42] = "86";
 comments[42] = "Id Pregunta: 6249. TICB-2009, bloque desarrollo";


//  Id pregunta: 6344 AÃ±o de creación de pregunta: 2010-01-01
 questions[43]= "44)  &iquest;Cu&aacute;l de las siguientes formas de presentar informaci&oacute;n se identifica mejor con la definici&oacute;n de folcsonom&iacute;a?";
 choices[43]= new Array();
 choices[43][0] = "&Aacute;rbol";
 choices[43][1] = "Directorio";
 choices[43][2] = "Nube de Tags";
 choices[43][3] = "Cubo";
 answers[43] = choices[43][2];
 units[43] = "120";
 comments[43] = "Id Pregunta: 6344. NULL";


//  Id pregunta: 6439 AÃ±o de creación de pregunta: 2010-01-01
 questions[44]= "45)  El paso a tablas de una relaci&oacute;n ternaria ocasiona:";
 choices[44]= new Array();
 choices[44][0] = "Una tabla para la relaci&oacute;n cuya clave es la concatenaci&oacute;n de las clasves de las entidades que participan en la relaci&oacute;n.";
 choices[44][1] = "Tres tablas, una para cada posible combinaci&oacute;n.";
 choices[44][2] = "Dos tablas son suficientes para mantener toda la informaci&oacute;n.";
 choices[44][3] = "No se permiten relaciones ternarias en el modelo E/R.";
 answers[44] = choices[44][0];
 units[44] = "80";
 comments[44] = "Id Pregunta: 6439. NULL";


//  Id pregunta: 6536 AÃ±o de creación de pregunta: 2010-01-01
 questions[45]= "46)  La gu&iacute;a de servicios ISO 9004 sigue un enfoque basado en procesos, como";
 choices[45]= new Array();
 choices[45][0] = "Responsabilidad de la direcci&oacute;n";
 choices[45][1] = "Realizaci&oacute;n del producto";
 choices[45][2] = "Medici&oacute;n, an&aacute;lisis y mejora";
 choices[45][3] = "Todas las respuestas anteriores son correctas";
 answers[45] = choices[45][3];
 units[45] = "92";
 comments[45] = "Id Pregunta: 6536. NULL";


//  Id pregunta: 6564 AÃ±o de creación de pregunta: 2010-01-01
 questions[46]= "47)  GPRS no se caracteriza por";
 choices[46]= new Array();
 choices[46][0] = "Servicio simult&aacute;neo de voz y datos";
 choices[46][1] = "No existe multiplexaci&oacute;n de voz y datos";
 choices[46][2] = "Servicio no orientado a conexi&oacute;n";
 choices[46][3] = "Tarificaci&oacute;n por volumen de datos intercambiado";
 answers[46] = choices[46][1];
 units[46] = "108";
 comments[46] = "Id Pregunta: 6564. NULL";


//  Id pregunta: 6639 AÃ±o de creación de pregunta: 2010-01-01
 questions[47]= "48)  &iquest;Cu&aacute;l de las siguientes afirmaciones NO es cierta cuando hablamos de la m&eacute;trica de Puntos de Funci&oacute;n?";
 choices[47]= new Array();
 choices[47][0] = "Se usa para estimar el tama&ntilde;o del software que se va a desarrollar";
 choices[47][1] = "Se usa para estimar la productividad del software que se va a desarrollar";
 choices[47][2] = "Ve la aplicaci&oacute;n como una caja negra";
 choices[47][3] = "Fue propuesta por Tom De Marco";
 answers[47] = choices[47][3];
 units[47] = "88";
 comments[47] = "Id Pregunta: 6639. NULL";


//  Id pregunta: 7167 AÃ±o de creación de pregunta: 2010-01-01
 questions[48]= "49)  Se&ntilde;ale cu&aacute;l de las siguientes licencias es la &uacute;nica que puede considerarse licencia de software libre compatible con la GNU GPL:";
 choices[48]= new Array();
 choices[48][0] = "Sun Community Source License";
 choices[48][1] = "Apache License. Version 2.0";
 choices[48][2] = "Microsoft Public License (MS-OL)";
 choices[48][3] = "GNU Lesser General Public License (LGPL)";
 answers[48] = choices[48][3];
 units[48] = "61";
 comments[48] = "Id Pregunta: 7167. Examen TIC B 2009";


//  Id pregunta: 7245 AÃ±o de creación de pregunta: 2010-01-01
 questions[49]= "50)  &iquest;A qu&eacute; se corresponde el RFC 793?";
 choices[49]= new Array();
 choices[49][0] = "Al protocolo FTP";
 choices[49][1] = "Al protocolo HTTP";
 choices[49][2] = "Al protocolo TCP";
 choices[49][3] = "Al protocolo IP";
 answers[49] = choices[49][2];
 units[49] = "100";
 comments[49] = "Id Pregunta: 7245. Examen TIC B 2009";


//  Id pregunta: 7282 AÃ±o de creación de pregunta: 2010-01-01
 questions[50]= "51)  Generalmente el primer paso en un proceso de virtualizaci&oacute;n de infraestructuras TIC en una Organizaci&oacute;n suele ser un proyecto de:";
 choices[50]= new Array();
 choices[50][0] = "Consolidaci&oacute;n de servidores";
 choices[50][1] = "Virtualizaci&oacute;n de salvaguardas";
 choices[50][2] = "SaaS (Storage as a Service)";
 choices[50][3] = "Computing Mobility";
 answers[50] = choices[50][0];
 units[50] = "119";
 comments[50] = "Id Pregunta: 7282. Examen TIC B 2009";


//  Id pregunta: 7309 AÃ±o de creación de pregunta: 2010-01-01
 questions[51]= "52)  Indique cu&aacute;l de los siguientes es un lenguaje de marcado empleado en conversi&oacute;n texto-voz (TTS):";
 choices[51]= new Array();
 choices[51][0] = "TTSXML";
 choices[51][1] = "SVML";
 choices[51][2] = "SSML";
 choices[51][3] = "Todos son lenguajes de marcado utilizados en TTS";
 answers[51] = choices[51][2];
 units[51] = "94";
 comments[51] = "Id Pregunta: 7309. NULL";


//  Id pregunta: 7329 AÃ±o de creación de pregunta: 2010-01-01
 questions[52]= "53)  Se&ntilde;ale la afirmaci&oacute;n VERDADERA con respecto a AENOR:";
 choices[52]= new Array();
 choices[52][0] = "Es una Entidad P&uacute;blica Empresarial";
 choices[52][1] = "No tiene &aacute;nimo de lucro";
 choices[52][2] = "Depende org&aacute;nicamente de la Secretar&iacute;a de Estado de Telecomunicaciones y para la sociedad de la Informaci&oacute;n";
 choices[52][3] = "Est&aacute; reconocida como organismo de normalizaci&oacute;n y para actuar como entidad de certificaci&oacute;n por el Real Decreto 200/1995";
 answers[52] = choices[52][1];
 units[52] = "42";
 comments[52] = "Id Pregunta: 7329. www.aenor.es";


//  Id pregunta: 8174 AÃ±o de creación de pregunta: 2011-01-01
 questions[53]= "54)  La Recomendaci&oacute;n UIT-T I.411 &quot;Configuraciones de referencia de las interfaces Usuario-Red de la RDSI&quot;, define el punto de referencia T entre:";
 choices[53]= new Array();
 choices[53][0] = "La Terminaci&oacute;n de Red 1 (NT1) y la Terminaci&oacute;n de L&iacute;nea (LT).";
 choices[53][1] = "La Terminaci&oacute;n de Red 2 (NT2) y la Terminaci&oacute;n de Red 1 (NT1).";
 choices[53][2] = "El Equipo Terminal de Tipo 1 (TE1) y el Adaptador de Terminal (TA).";
 choices[53][3] = "El Equipo Terminal de Tipo 2 (TE2) y el Adaptador de Terminal (TA).";
 answers[53] = choices[53][1];
 units[53] = "103";
 comments[53] = "Id Pregunta: 8174. Examen TIC A1 2010";


//  Id pregunta: 8250 AÃ±o de creación de pregunta: 2011-01-01
 questions[54]= "55)  En el desarrollo de software &aacute;gil (Agile) se usan los siguientes niveles de planificaci&oacute;n:";
 choices[54]= new Array();
 choices[54][0] = "Planificaci&oacute;n de entregas, planificaci&oacute;n de iteraciones o sprints y planificaci&oacute;n diaria.";
 choices[54][1] = "Planificaci&oacute;n estrat&eacute;gica y planifiaci&oacute;n semanal.";
 choices[54][2] = "Planificaci&oacute;n de iteraciones o sprints, planificaci&oacute;n de hitos de cada iteraci&oacute;n o sprint y planificaci&oacute;n semanal.";
 choices[54][3] = "Planificaci&oacute;n estrat&eacute;gica, planificaci&oacute;n de recursos y planificaci&oacute;n de entregas.";
 answers[54] = choices[54][0];
 units[54] = "76";
 comments[54] = "Id Pregunta: 8250. Examen TIC A1 2010";


//  Id pregunta: 8269 AÃ±o de creación de pregunta: 2011-01-01
 questions[55]= "56)  &iquest;C&uacute;al de las siguientes organizaciones realiza actuaciones para la persecuci&oacute;n legal de la pirater&iacute;a inform&aacute;tica y para evitar la violaci&oacute;n de los derechos de copyright?:";
 choices[55]= new Array();
 choices[55][0] = "BSA ( Business Software Alliance).";
 choices[55][1] = "GSC ( General Software Committee).";
 choices[55][2] = "DRG (Digital Right Group).";
 choices[55][3] = "SSC (Secure Software Commission).";
 answers[55] = choices[55][0];
 units[55] = "37";
 comments[55] = "Id Pregunta: 8269. Examen TIC A1 2010";


//  Id pregunta: 8481 AÃ±o de creación de pregunta: 2011-01-01
 questions[56]= "57)  &iquest;Cu&aacute;l es el well-known port del protocolo SNMP en el modo petici&oacute;n-respuesta?";
 choices[56]= new Array();
 choices[56][0] = "169.";
 choices[56][1] = "161.";
 choices[56][2] = "171.";
 choices[56][3] = "179.";
 answers[56] = choices[56][1];
 units[56] = "104";
 comments[56] = "Id Pregunta: 8481. Examen TIC A2 2010 interna";


//  Id pregunta: 8513 AÃ±o de creación de pregunta: 2011-01-01
 questions[57]= "58)  En el contexto de la seguridad l&oacute;gica, si hablamos de una bomba l&oacute;gica &iquest;cu&aacute;l de las siguientes afirmaciones es verdadera? ";
 choices[57]= new Array();
 choices[57][0] = "El c&oacute;digo se replica al activarse";
 choices[57][1] = "Su efecto es retardado. ";
 choices[57][2] = "No se activan por eventos. ";
 choices[57][3] = "Es otra manera de referirse a los troyanos. ";
 answers[57] = choices[57][1];
 units[57] = "111";
 comments[57] = "Id Pregunta: 8513. Examen TIC A2 2010";


//  Id pregunta: 8596 AÃ±o de creación de pregunta: 2011-01-01
 questions[58]= "59)  Si queremos almacenar unas tablas de la base de datos y sus relaciones en memoria para operar con ellas, &iquest;cual de los siguientes objetos de .NET usar&iacute;a?";
 choices[58]= new Array();
 choices[58][0] = "DataTableRelation";
 choices[58][1] = "DataView";
 choices[58][2] = "DataTable";
 choices[58][3] = "DataSet";
 answers[58] = choices[58][3];
 units[58] = "115";
 comments[58] = "Id Pregunta: 8596. Examen TIC A2 2010 interna";


//  Id pregunta: 8602 AÃ±o de creación de pregunta: 2011-01-01
 questions[59]= "60)  &iquest;Cu&aacute;l de los siguientes es el lenguaje est&aacute;ndar propuesto para la descripci&oacute;n de servicios web bajo protocolo SOAP? ";
 choices[59]= new Array();
 choices[59][0] = "WSDL";
 choices[59][1] = "UDDI";
 choices[59][2] = "XML";
 choices[59][3] = "REST";
 answers[59] = choices[59][0];
 units[59] = "51";
 comments[59] = "Id Pregunta: 8602. Examen TIC A2 2010 interna";


//  Id pregunta: 8617 AÃ±o de creación de pregunta: 2011-01-01
 questions[60]= "61)  &iquest;Cu&aacute;l de las siguientes NO es una funci&oacute;n del administrador de bases de datos?";
 choices[60]= new Array();
 choices[60][0] = "Dise&ntilde;ar la arquitectura de balanceo de carga de las aplicaciones instaladas en una granja de servidores.";
 choices[60][1] = "Balancear la distribuci&oacute;n de los datos entre los dispositivos de almacenamiento";
 choices[60][2] = "Optimizar las cargas masivas de datos, ya sean iniciales o parciales.";
 choices[60][3] = "Gestionar permisos y roles de usuarios para que sean los necesarios para sus funciones y se garantice la confidencialidad e integridad de los datos";
 answers[60] = choices[60][0];
 units[60] = "57,58";
 comments[60] = "Id Pregunta: 8617. Examen TIC A2 2010 interna";


//  Id pregunta: 8653 AÃ±o de creación de pregunta: 2011-01-01
 questions[61]= "62)  Seg&uacute;n M&eacute;trica v3, &iquest;cu&aacute;l de las siguientes es una prueba perteneciente a las pruebas del sistema?";
 choices[61]= new Array();
 choices[61][0] = "Pruebas globales.";
 choices[61][1] = "Pruebas Integradas.";
 choices[61][2] = "Pruebas funcionales.";
 choices[61][3] = "Pruebas unitarias.";
 answers[61] = choices[61][2];
 units[61] = "86";
 comments[61] = "Id Pregunta: 8653. Examen TIC A2 2010 interna";


//  Id pregunta: 8743 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  &iquest;Cu&aacute;l de las siguientes es una funci&oacute;n de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos, seg&uacute;n lo establecido en la LOPD?";
 choices[62]= new Array();
 choices[62][0] = "Redactar una memoria anual y remitirla al Ministerio del Interior";
 choices[62][1] = "Proporcionar aplicaciones inform&aacute;ticas para la gesti&oacute;n de datos de car&aacute;cter personal.";
 choices[62][2] = "Investigar posibles incumplimientos de la LOPD e informar a la autoridad con potestad sancionadora, seg&uacute;n el caso";
 choices[62][3] = "Redactar una memoria anual y remitirla al Ministerio de Justicia";
 answers[62] = choices[62][3];
 units[62] = "29";
 comments[62] = "Id Pregunta: 8743. Examen TIC A2 2010 interna";


//  Id pregunta: 8818 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  &iquest;Para cu&aacute;l de los siguientes supuestos no vale la calidad de software?";
 choices[63]= new Array();
 choices[63][0] = "Para dar confianza";
 choices[63][1] = "Para asegurar que el software funciona";
 choices[63][2] = "Para evaluar el proceso de desarrollo de software";
 choices[63][3] = "Para hacer los resultados del proceso m&aacute;s predecibles";
 answers[63] = choices[63][3];
 units[63] = "87, 92";
 comments[63] = "Id Pregunta: 8818. Examen UPM A2 2011";


//  Id pregunta: 8844 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)   En los sistemas de colaboraci&oacute;n s&iacute;ncronos";
 choices[64]= new Array();
 choices[64][0] = " No es posible utilizar la tecnolog&iacute;a multicast ";
 choices[64][1] = " Todos est&aacute;n basados en interfaces WWW ";
 choices[64][2] = "Se ampl&iacute;an las funcionalidades de los sistemas de videoconferencia cl&aacute;sicos.";
 choices[64][3] = " Su est&aacute;ndar viene definido por el W3C";
 answers[64] = choices[64][2];
 units[64] = "117";
 comments[64] = "Id Pregunta: 8844. Examen UC3M 2010";


//  Id pregunta: 8967 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  &iquest;Cu&aacute;l de los siguientes lenguajes de programaci&oacute;n es fuertemente tipado?";
 choices[65]= new Array();
 choices[65][0] = "Lisp.";
 choices[65][1] = "Perl.";
 choices[65][2] = "Php.";
 choices[65][3] = "Python.";
 answers[65] = choices[65][3];
 units[65] = "80,81,82,83,84";
 comments[65] = "Id Pregunta: 8967. ";


//  Id pregunta: 9068 AÃ±o de creación de pregunta: 2013-01-01
 questions[66]= "67)  Se&ntilde;ale la afirmaci&oacute;n FALSA respecto a las normas WCAG 2.0:";
 choices[66]= new Array();
 choices[66][0] = "Una de las mejoras respecto a WCAG 1.0 es la posibilidad de evaluarlas de manera autom&aacute;tica. ";
 choices[66][1] = "En Espa&ntilde;a se incorporan mediante la norma UNE 139803. ";
 choices[66][2] = "Constan de 14 pautas. ";
 choices[66][3] = "La pauta Adaptable dentro del principio Perceptible se refiere a &quot;Contenido presentado de diferentes formas sin perder informaci&oacute;n o estructura&quot;. ";
 answers[66] = choices[66][2];
 units[66] = "39";
 comments[66] = "Id Pregunta: 9068. ";


//  Id pregunta: 9172 AÃ±o de creación de pregunta: 2013-01-01
 questions[67]= "68)  La norma que regula las obligaciones de facturaci&oacute;n es:";
 choices[67]= new Array();
 choices[67][0] = "Orden PRE/2971/2007";
 choices[67][1] = "Real Decreto 1496/2003";
 choices[67][2] = "Real Decreto 1619/2012";
 choices[67][3] = "Real Decreto 1783/2012";
 answers[67] = choices[67][2];
 units[67] = "70";
 comments[67] = "Id Pregunta: 9172. ";


//  Id pregunta: 9199 AÃ±o de creación de pregunta: 2013-01-01
 questions[68]= "69)  &iquest;Cu&aacute;l no es un derecho de explotaci&oacute;n de un programa de ordenador?";
 choices[68]= new Array();
 choices[68][0] = "La reproducci&oacute;n del programa de ordenador.";
 choices[68][1] = "La transformaci&oacute;n del programa de ordenador.";
 choices[68][2] = "La distribuci&oacute;n p&uacute;blica del programa de ordenador.";
 choices[68][3] = "Todas las anteriores son verdaderas.";
 answers[68] = choices[68][3];
 units[68] = "36";
 comments[68] = "Id Pregunta: 9199. ";


//  Id pregunta: 9234 AÃ±o de creación de pregunta: 2013-01-01
 questions[69]= "70)  &iquest;Qu&eacute; es IPL?";
 choices[69]= new Array();
 choices[69][0] = "Es el equivalente al Boot en z/OS";
 choices[69][1] = "El primer programa que se ejecuta cuando se hace un TSO logon.";
 choices[69][2] = "Carga de programa en modo batch en z/OS.";
 choices[69][3] = "Ninguna es correcta.";
 answers[69] = choices[69][0];
 units[69] = "52, 55";
 comments[69] = "Id Pregunta: 9234. ";


//  Id pregunta: 9274 AÃ±o de creación de pregunta: 2013-01-01
 questions[70]= "71)  Se&ntilde;ale la frase ERR&Oacute;NEA acerca de los sistemas de tiempo compartido.";
 choices[70]= new Array();
 choices[70][0] = "El algoritmo de round robin se basa en asignar por turno per&iacute;odos de tiempo limitados a cada uno de los procesos";
 choices[70][1] = "El algoritmo del banquero impide asignar a un proceso un recurso de un tipo del que ya no queden m&aacute;s recursos libres.";
 choices[70][2] = "El aplazamiento indefinido se produce cuando un proceso solicita un recurso que otro proceso ha dejado de usar sin marcarlo como &ldquo;desocupado&rdquo;.";
 choices[70][3] = "El mecanismo de no apropiaci&oacute;n evita que puedan producirse &ldquo;deadlocks&rdquo; entre procesos.";
 answers[70] = choices[70][3];
 units[70] = "53";
 comments[70] = "Id Pregunta: 9274. Examen TIC-A1 2011";


//  Id pregunta: 9379 AÃ±o de creación de pregunta: 2013-01-01
 questions[71]= "72)  Acerca de las recomendaciones relativas a X.25, se puede afirmar:";
 choices[71]= new Array();
 choices[71][0] = "X.21 define el interfaz entre ETD y ETCD para terminales que operan en modo paquete en redes p&uacute;blicas";
 choices[71][1] = "X.25 especifica los procedimientos de conexi&oacute;n en redes p&uacute;blicas X.25 entre s&iacute;.";
 choices[71][2] = "X.75 define el Interfaz entre ETD y ETCD para un equipo de datos arr&iacute;tmico con acceso a la facilidad de empaquetado/desempaquetado de datos (PAD), en una red X.25";
 choices[71][3] = "X.75 especifica los procedimientos de conexi&oacute;n en redes p&uacute;blicas X.25 entre s&iacute;.";
 answers[71] = choices[71][3];
 units[71] = "101";
 comments[71] = "Id Pregunta: 9379. ";


//  Id pregunta: 9400 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  &iquest;Cu&aacute;l de las siguientes redes WAN esta orientada a conexi&oacute;n?";
 choices[72]= new Array();
 choices[72][0] = "Una red IP";
 choices[72][1] = "Una red ATM.";
 choices[72][2] = "Una red UMTS.";
 choices[72][3] = "Ninguna de las anteriores";
 answers[72] = choices[72][1];
 units[72] = "109";
 comments[72] = "Id Pregunta: 9400. T&eacute;cnico Teleco Ayto Madrid 2010";


//  Id pregunta: 9445 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  En programaci&oacute;n orientada a objetos, la propiedad por la cual un mismo mensaje puede originar conductas diferentes al ser recibido por distintos objetos se denomina:";
 choices[73]= new Array();
 choices[73][0] = "Sobrecarga.";
 choices[73][1] = "Herencia.";
 choices[73][2] = "Extensibilidad.";
 choices[73][3] = "Polimorfismo.";
 answers[73] = choices[73][3];
 units[73] = "82";
 comments[73] = "Id Pregunta: 9445. Examen AGE TIC A1 2011";


//  Id pregunta: 9484 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  Seg&uacute;n Pressman, el proceso de obtenci&oacute;n de requisitos";
 choices[74]= new Array();
 choices[74][0] = "Es un proceso iterativo";
 choices[74][1] = "Es un proceso de tres fases";
 choices[74][2] = "Es un proceso de 10 fases";
 choices[74][3] = "Todas las anteriores son falsas";
 answers[74] = choices[74][0];
 units[74] = "78";
 comments[74] = "Id Pregunta: 9484. ";


//  Id pregunta: 9584 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  Los certificados incorporados al DNI-e:";
 choices[75]= new Array();
 choices[75][0] = "Son dos: de autenticaci&oacute;n y de firma del ciudadano.";
 choices[75][1] = "Los usuarios finales pueden validarlos en la Direcci&oacute;n General de la Polic&iacute;a, que est&aacute; constituida como Autoridad de Validaci&oacute;n.";
 choices[75][2] = "Est&aacute;n basados en la recomendaci&oacute;n X. 509 v.3 sin extensi&oacute;n alguna.";
 choices[75][3] = "Est&aacute;n integrados en un chip certificado en el nivel de seguridad EAL4+ definido en la norma ISO/IEC 15408.";
 answers[75] = choices[75][3];
 units[75] = "43, 74";
 comments[75] = "Id Pregunta: 9584. Examen TIC A1 2011";


//  Id pregunta: 9784 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  En un documento XML los valores de un atributo:";
 choices[76]= new Array();
 choices[76][0] = "Deben ir siempre entre comillas.";
 choices[76][1] = "Deben ir entre comillas si no son n&uacute;meros o fechas.";
 choices[76][2] = "No deben ir entre comillas.";
 choices[76][3] = "Deben ir entre comillas si son n&uacute;meros o fechas.";
 answers[76] = choices[76][0];
 units[76] = "69";
 comments[76] = "Id Pregunta: 9784. Examen TIC A2 2013";


//  Id pregunta: 9899 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  Cual de los siguientes NO es un mecanismo de intercambio de informaci&oacute;n utilizable en una arquitectura distribuida";
 choices[77]= new Array();
 choices[77][0] = "mensajes XML sobre protocolo SMTP.";
 choices[77][1] = "mensajes SOAP sobre Servicios de Mensajes Java (JMS).";
 choices[77][2] = "OData.(Open Data Protocol)";
 choices[77][3] = "BPMN (Business Process Message Notation).";
 answers[77] = choices[77][3];
 units[77] = "50,51,79";
 comments[77] = "Id Pregunta: 9899. TIC A1, Examen 2013";


//  Id pregunta: 9924 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  En una base de datos relacional en la que se tiene informaci&oacute;n guardada en una tabla de provincias y adem&aacute;s se dispone de una tabla de municipios donde parte de la clave es la provincia, &iquest;se puede borrar un elemento de la tabla de provincias manteniendo la integridad del sistema?";
 choices[78]= new Array();
 choices[78][0] = "Si, una vez que los municipios ya existen no hay ning&uacute;n problema.";
 choices[78][1] = "Si, aunque no podr&iacute;a dar de alta nuevos municipios de esa provincia.";
 choices[78][2] = "S&oacute;lo si no hay ninguna poblaci&oacute;n perteneciente a esa provincia.";
 choices[78][3] = "No, la tabla de provincias no puede cambiar ya que son un elemento estable.";
 answers[78] = choices[78][2];
 units[78] = "58";
 comments[78] = "Id Pregunta: 9924. TIC A2, Examen 2013";


//  Id pregunta: 9931 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  En el modelo OSI, el nivel clave para el sistema de seguridad es:";
 choices[79]= new Array();
 choices[79][0] = "N3.";
 choices[79][1] = "N4.";
 choices[79][2] = "N6.";
 choices[79][3] = "N7.";
 answers[79] = choices[79][2];
 units[79] = "100";
 comments[79] = "Id Pregunta: 9931. NULL";


//  Id pregunta: 9965 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  &iquest;Cu&aacute;l de las siguientes afirmaciones es FALSA respecto al lenguaje de programaci&oacute;n C# de la  plataforma .NET?";
 choices[80]= new Array();
 choices[80][0] = "En C# una clase puede heredar directamente de una sola clase primaria pero puede implementar cualquier n&uacute;mero de interfaces.";
 choices[80][1] = "C# no admite la aritm&eacute;tica con punteros de manera predeterminada, sin embargo, si utiliza la palabra clave unsafe, puede definir un contexto no seguro en el que se pueden utilizar punteros";
 choices[80][2] = "Los programas en C# pueden constar de uno o varios archivos, y cada archivo puede contener cero o varios espacios de nombres (namespaces).";
 choices[80][3] = "Un espacio de nombres (namespace) puede contener tipos tales como clases (classes), estructuras (structs), interfaces (interfaces), enumeraciones (enumerations) y delegados (delegates), pero no puede contener otros espacios de nombres (namespaces).";
 answers[80] = choices[80][3];
 units[80] = "59,115";
 comments[80] = "Id Pregunta: 9965. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";


//  Id pregunta: 10072 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  El VLR en una arquitectura de red m&oacute;vil, es una base de datos:";
 choices[81]= new Array();
 choices[81][0] = "Donde est&aacute;n inscritos todos los clientes de un operador, que se utiliza para la gesti&oacute;n de abonados m&oacute;viles.";
 choices[81][1] = "Asociada a un MSC, donde se almacena informaci&oacute;n din&aacute;mica sobre los usuarios transe&uacute;ntes en el &aacute;rea geogr&aacute;fica cubierta por la MSC.";
 choices[81][2] = "Donde se guardan las identidades IMSI de los clientes junto con la clave secreta de identificaci&oacute;n de cada usuario.";
 choices[81][3] = "Que contiene las identidades de los equipos m&oacute;viles, el IMEI que permite identificar de forma inequ&iacute;voca a un terminal a escala internacional.";
 answers[81] = choices[81][1];
 units[81] = "108";
 comments[81] = "Id Pregunta: 10072. TIC A2, libre, Examen 2013";


//  Id pregunta: 10197 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  Indique la afirmaci&oacute;n correcta con respecto a la tecnolog&iacute;a bluetooth 4.0";
 choices[82]= new Array();
 choices[82][0] = "Comercialmente se le ha dado el nombre de Zigbee";
 choices[82][1] = "Supera en velocidad a la versi&oacute;n 2.0 de bluetooth";
 choices[82][2] = "Est&aacute; pensado para transmitir pocos paquetes usando poca energ&iacute;a";
 choices[82][3] = "El alcance supera los 100 metros";
 answers[82] = choices[82][2];
 units[82] = "107";
 comments[82] = "Id Pregunta: 10197. NULL";


//  Id pregunta: 10219 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  Las variables declaradas en un interface deben ser:";
 choices[83]= new Array();
 choices[83][0] = "public, static y final";
 choices[83][1] = "private static y final";
 choices[83][2] = "S&oacute;lo protected";
 choices[83][3] = "En un interface no se deben incluir variables";
 answers[83] = choices[83][0];
 units[83] = "60";
 comments[83] = "Id Pregunta: 10219. NULL";


//  Id pregunta: 10312 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  En el &aacute;mbito de las redes SAN, &iquest;a qu&eacute; se refiere el t&eacute;rmino LUN?";
 choices[84]= new Array();
 choices[84][0] = "A un switch con conexi&oacute;n de fibra.";
 choices[84][1] = "A la interfaz de red de los servidores para conectarse a la SAN.";
 choices[84][2] = "A una unidad de discos agrupados en una cabina de almacenamiento.";
 choices[84][3] = "Al gateway para conectar una NAS a una red SAN.";
 answers[84] = choices[84][2];
 units[84] = "48";
 comments[84] = "Id Pregunta: 10312. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10315 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Los conectores LC son:";
 choices[85]= new Array();
 choices[85][0] = "Conectores para PCI.";
 choices[85][1] = "Conectores de par trenzado.";
 choices[85][2] = "Conectores exclusivos para Mainframe.";
 choices[85][3] = "Conectores de fibra &oacute;ptica.";
 answers[85] = choices[85][3];
 units[85] = "99";
 comments[85] = "Id Pregunta: 10315. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10525 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Se&ntilde;ale la respuesta correcta respecto a las arquitecturas UMA (Uniform Memory Access) y NUMA (Non-Uniform Memory Access)";
 choices[86]= new Array();
 choices[86][0] = "en NUMA un procesador accede m&aacute;s deprisa a su memoria local que a la memoria compartida";
 choices[86][1] = "en UMA los procesadores acceden a la memoria compartida mediante un bus o conmutador";
 choices[86][2] = "A y B son incorrectas";
 choices[86][3] = "A y B son correctas";
 answers[86] = choices[86][3];
 units[86] = "45";
 comments[86] = "Id Pregunta: 10525. NULL";


//  Id pregunta: 10557 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  Cual es la &uacute;ltima versi&oacute;n de COBIT";
 choices[87]= new Array();
 choices[87][0] = "v4";
 choices[87][1] = "V4.1";
 choices[87][2] = "v5";
 choices[87][3] = "v6";
 answers[87] = choices[87][2];
 units[87] = "31, 32, 33";
 comments[87] = "Id Pregunta: 10557. Isaca lanz&oacute; el 10 de abril del 2012 COBIT 5";


//  Id pregunta: 10630 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  &iquest;Cu&aacute;l de estas no es una novedad de M&eacute;trica v3 con respecto a M&eacute;trica v2?";
 choices[88]= new Array();
 choices[88][0] = "Propone un conjunto de t&eacute;cnicas para obtener los productos intermedios y finales.";
 choices[88][1] = "Cubre tanto el desarrollo estructurado como el desarrollo orientado a objetos.";
 choices[88][2] = "Su estructura est&aacute; basada en procesos de entrada, transformaci&oacute;n y salida seg&uacute;n ISO 12207.";
 choices[88][3] = "Se incluyen interfaces para aspectos de gesti&oacute;n.";
 answers[88] = choices[88][0];
 units[88] = "86";
 comments[88] = "Id Pregunta: 10630. ";


//  Id pregunta: 11014 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  &iquest;Cu&aacute;ntos servicios se incluyen en la primera Declaracion de Servicios Compartidos por parte de la Comisi&oacute;n de Estrategia TIC en Septiembre de 2015?";
 choices[89]= new Array();
 choices[89][0] = "12";
 choices[89][1] = "14";
 choices[89][2] = "16";
 choices[89][3] = "10";
 answers[89] = choices[89][1];
 units[89] = "30";
 comments[89] = "Id Pregunta: 11014. ";


//  Id pregunta: 11071 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  La definici&oacute;n de requerimientos funcionales para un nuevo servicio es parte de:";
 choices[90]= new Array();
 choices[90][0] = "Operaci&oacute;n del Servicio: Gesti&oacute;n de Aplicaciones";
 choices[90][1] = "Estrategia del Servicio: Gesti&oacute;n de la Cartera de Servicios";
 choices[90][2] = "Dise&ntilde;o del Servicio: Dise&ntilde;o de la Arquitectura Tecnol&oacute;gica";
 choices[90][3] = "Dise&ntilde;o del Servicio: Dise&ntilde;o de Soluciones del Servicio";
 answers[90] = choices[90][3];
 units[90] = "98";
 comments[90] = "Id Pregunta: 11071. ";


//  Id pregunta: 11097 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  De acuerdo con el RD 1720/2007 del 11 de Junio, el l&iacute;mite de n&uacute;meros de accesos es una medida de seguridad que debe aplicarse cuando la informaci&oacute;n es de:";
 choices[91]= new Array();
 choices[91][0] = "Nivel b&aacute;sico";
 choices[91][1] = "Nivel medio";
 choices[91][2] = "Nivel alto";
 choices[91][3] = "Nivel muy alto";
 answers[91] = choices[91][1];
 units[91] = "29";
 comments[91] = "Id Pregunta: 11097. ";


//  Id pregunta: 11101 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l de los siguientes es un principio b&aacute;sico del Esquema Nacional de Interoperabilidad?";
 choices[92]= new Array();
 choices[92][0] = "La interoperabilidad como cualidad integral";
 choices[92][1] = "Car&aacute;cter multidimensional de la interoperabilidad";
 choices[92][2] = "Enfoque de soluciones multilaterales";
 choices[92][3] = "Todos los anteriores";
 answers[92] = choices[92][3];
 units[92] = "30";
 comments[92] = "Id Pregunta: 11101. ";


//  Id pregunta: 11236 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Indique la afirmaci&oacute;n falsa sobre el Framework Spring";
 choices[93]= new Array();
 choices[93][0] = "La versi&oacute;n para la plataforma .NET llamada Spring.net.";
 choices[93][1] = "Soporta programaci&oacute;n basada en aspectos (aspect-oriented programming, AOP).";
 choices[93][2] = "Permite la Integraci&oacute;n con frameworks de persistencia como Hibernate.";
 choices[93][3] = "Como framework MVC utiliza Struts.";
 answers[93] = choices[93][3];
 units[93] = "116";
 comments[93] = "Id Pregunta: 11236. ";


//  Id pregunta: 11353 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Las redes conmutadas ethernet, tienen una serie de ventajas. Se&ntilde;ale la que no se encuentra entre ellas";
 choices[94]= new Array();
 choices[94][0] = "Redes half-duplex";
 choices[94][1] = "Autonegociaci&oacute;n";
 choices[94][2] = "Trunking";
 choices[94][3] = "Uso del comando pause";
 answers[94] = choices[94][0];
 units[94] = "102";
 comments[94] = "Id Pregunta: 11353. ";


//  Id pregunta: 11404 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de los siguientes es un prop&oacute;sito b&aacute;sico de la gesti&oacute;n de relaciones con el negocio?";
 choices[95]= new Array();
 choices[95][0] = "Llevar a cabo actividades operacionales para dar soporte de servicios";
 choices[95][1] = "Asegurar que todos los objetivos dentro del acuerdo de nivel de servicio se cumplan";
 choices[95][2] = "Maximizar el valor del contrato y la eficiencia operacional de los servicios que son entregados";
 choices[95][3] = "Entender las necesidades del cliente y asegurar que se cumplen";
 answers[95] = choices[95][3];
 units[95] = "98";
 comments[95] = "Id Pregunta: 11404. ";


//  Id pregunta: 11410 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Seg&uacute;n la Ley 9/2014, &iquest;a qui&eacute;n corresponde la elaboraci&oacute;n de propuestas de planes nacionales para ser elevados al gobierno y desarrollo normativo de estos planes?";
 choices[96]= new Array();
 choices[96][0] = "CNMC.";
 choices[96][1] = "ORECE.";
 choices[96][2] = "SETSI.";
 choices[96][3] = "MINETUR.";
 answers[96] = choices[96][3];
 units[96] = "110";
 comments[96] = "Id Pregunta: 11410. ";


//  Id pregunta: 11566 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Las direcciones IPv6 que permiten la configuraci&oacute;n autom&aacute;tica cuando no hay routers presentes son:";
 choices[97]= new Array();
 choices[97][0] = "Global Multicast";
 choices[97][1] = "Link Unique Address";
 choices[97][2] = "Link Local";
 choices[97][3] = "Este procedimiento no est&aacute; permitido por el protocolo IPv6";
 answers[97] = choices[97][2];
 units[97] = "100";
 comments[97] = "Id Pregunta: 11566. NULL";


//  Id pregunta: 11743 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Qu&eacute; algoritmo utiliza el cifrado por bloques?";
 choices[98]= new Array();
 choices[98][0] = "ElGamal";
 choices[98][1] = "DSA";
 choices[98][2] = "RSA";
 choices[98][3] = "DES";
 answers[98] = choices[98][3];
 units[98] = "111";
 comments[98] = "Id Pregunta: 11743. ";


//  Id pregunta: 11771 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Las especificaciones t&eacute;cnicas de un pliego de prescripciones";
 choices[99]= new Array();
 choices[99][0] = "deben permitir descartar ciertas empresas o productos con los que no se han tenido buenas experiencias";
 choices[99][1] = "todas son falsas&nbsp;";
 choices[99][2] = "deben hacer referencia a la fabricaci&oacute;n o procedencia determinada del producto o servicio";
 choices[99][3] = "deben hacer referencia a la marca de mayor calidad del producto o servicio";
 answers[99] = choices[99][1];
 units[99] = "41";
 comments[99] = "Id Pregunta: 11771. ";


