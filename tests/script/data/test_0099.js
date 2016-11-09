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

//  Id pregunta: 124 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  El  m&eacute;todo de ordenaci&oacute;n de alternativas que incorpora la posibilidad de valorar el riesgo y la incertidumbre es:";
 choices[0]= new Array();
 choices[0][0] = "El m&eacute;todo Promethee";
 choices[0][1] = "Utilidad multiatributo";
 choices[0][2] = "El m&eacute;todo de permutaci&oacute;n";
 choices[0][3] = "Ninguno de los restantes";
 answers[0] = choices[0][1];
 units[0] = "34";
 comments[0] = "Id Pregunta: 124. NULL";


//  Id pregunta: 305 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  La evoluci&oacute;n de la inform&aacute;tica desde la perspectiva estrat&eacute;gica:";
 choices[1]= new Array();
 choices[1][0] = "Proporciona un marco conceptual que permita a los directores entender el fen&oacute;meno inform&aacute;tico y tomar decisiones de planificaci&oacute;n";
 choices[1][1] = "Permite conocer cu&aacute;les han de ser las caracter&iacute;sticas del directivo que deba dirigir la organizaci&oacute;n y la estructura organizativa adecuada";
 choices[1][2] = "Permite analizar la situaci&oacute;n de un momento concreto";
 choices[1][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[1] = choices[1][0];
 units[1] = "23";
 comments[1] = "Id Pregunta: 305. ";


//  Id pregunta: 406 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  Respecto a los Ficheros y Registros de Poblaci&oacute;n de las Administraciones P&uacute;blicas, la Ley de Protecci&oacute;n de Datos se&ntilde;ala:";
 choices[2]= new Array();
 choices[2][0] = "Para su creaci&oacute;n es necesario el consentimiento del interesado";
 choices[2][1] = "Podr&aacute; solicitar su creaci&oacute;n cualquier persona interesada";
 choices[2][2] = "S&oacute;lo lo puede solicitar la Administraci&oacute;n General del Estado";
 choices[2][3] = "Estar&aacute;n formados con los datos del nombre, apellidos, domicilio, sexo y fecha de nacimiento";
 answers[2] = choices[2][3];
 units[2] = "29";
 comments[2] = "Id Pregunta: 406. ";


//  Id pregunta: 596 AÃ±o de creación de pregunta: 2006-01-01
 questions[3]= "4)  Seg&uacute;n el art&iacute;culo 44.3 proceder a la creaci&oacute;n de ficheros de titularidad p&uacute;blica o iniciar la recogida de datos de car&aacute;cter personal para los mismos, sin autorizaci&oacute;n de disposici&oacute;n general publicada en el BOE o diario oficial correspondiente constituye:";
 choices[3]= new Array();
 choices[3][0] = "no se necesita esperar a dicha publicaci&oacute;n en el BOE";
 choices[3][1] = "una infracci&oacute;n muy grave.";
 choices[3][2] = "una infracci&oacute;n grave.";
 choices[3][3] = "una infracci&oacute;n leve.";
 answers[3] = choices[3][2];
 units[3] = "29";
 comments[3] = "Id Pregunta: 596. ";


//  Id pregunta: 695 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  A la hora de evaluar el comportamiento de un sistema inform&aacute;tico, el &quot;throughput&quot; se puede definir como:";
 choices[4]= new Array();
 choices[4][0] = "El n&uacute;mero de CPUs necesarias para asegurar una velocidad de procesamiento determinada";
 choices[4][1] = "El n&uacute;mero de recursos inform&aacute;ticos disponibles en el sistema";
 choices[4][2] = "El cociente entre la velocidad de transmisi&oacute;n de la red y la velocidad media de las CPUs del sistema";
 choices[4][3] = "La cantidad de trabajo &uacute;til ejecutado por unidad de tiempo en un entorno de carga determinado";
 answers[4] = choices[4][3];
 units[4] = "48";
 comments[4] = "Id Pregunta: 695. ";


//  Id pregunta: 779 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  Indique una caracter&iacute;stica del software libre:";
 choices[5]= new Array();
 choices[5][0] = "Los usuarios pueden usar el software como deseen, para lo que deseen y en tantos ordenadores como deseen";
 choices[5][1] = "Los usuarios pueden redistribuir el software a otros usuarios";
 choices[5][2] = "Los usuarios deben tener acceso al c&oacute;digo fuente, escrito generalmente en un lenguaje de alto nivel";
 choices[5][3] = "Todas las respuestas son correctas";
 answers[5] = choices[5][3];
 units[5] = "61";
 comments[5] = "Id Pregunta: 779. ";


//  Id pregunta: 944 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Qu&eacute; significa RACF?:";
 choices[6]= new Array();
 choices[6][0] = "Resource Access Control Facility";
 choices[6][1] = "Relationship Access Control Facility";
 choices[6][2] = "Resource Aknowledgement Control Facility";
 choices[6][3] = "Ninguna de las anteriores es cierta";
 answers[6] = choices[6][0];
 units[6] = "52";
 comments[6] = "Id Pregunta: 944. ";


//  Id pregunta: 960 AÃ±o de creación de pregunta: 2005-01-01
 questions[7]= "8)  Con respecto a X.500 y LDAP, indicar la respuesta incorrecta:";
 choices[7]= new Array();
 choices[7][0] = "X.500 utiliza ASN.1 para la formaci&oacute;n de los mensajes, y LDAP utiliza cadenas de caracteres simples para la representaci&oacute;n de Distinguished Names ";
 choices[7][1] = "LDAP no posee el servicio de modificaci&oacute;n REMOVE perteneciente a DAP";
 choices[7][2] = "X.500 y LDAP funcionan sobre la pila de protocolos OSI y TCP/IP respectivamente";
 choices[7][3] = "Un dominio de gesti&oacute;n de directorio est&aacute; formado, como m&iacute;nimo, por: 1 DSA, 1 DUA y 1 esquema (visi&oacute;n externa del dominio)";
 answers[7] = choices[7][3];
 units[7] = "73";
 comments[7] = "Id Pregunta: 960. ";


//  Id pregunta: 984 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Dentro de las arquitecturas que podemos encontrar en el mundo del ordenador personal, en la denominada ISA (Industry Standard Architecture ) su bus de datos trabaja con:";
 choices[8]= new Array();
 choices[8][0] = "32 bits";
 choices[8][1] = "8 bits";
 choices[8][2] = "16 bits";
 choices[8][3] = "64 bits";
 answers[8] = choices[8][2];
 units[8] = "47";
 comments[8] = "Id Pregunta: 984. ";


//  Id pregunta: 998 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  El acr&oacute;nimo XML corresponde a:";
 choices[9]= new Array();
 choices[9][0] = "Extensible Markup Language";
 choices[9][1] = "Extended Markup Language";
 choices[9][2] = "Expressions Markup Language";
 choices[9][3] = "Extension Markup Language";
 answers[9] = choices[9][0];
 units[9] = "69";
 comments[9] = "Id Pregunta: 998. NULL";


//  Id pregunta: 1079 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  En el entorno cliente/servidor, TUXEDO es muy conocido como:";
 choices[10]= new Array();
 choices[10][0] = "Un monitor de proceso de transacciones";
 choices[10][1] = "Programa de sesi&oacute;n de IBM en los sistemas MVS";
 choices[10][2] = "Aplicaci&oacute;n para tranferencia de ficheros en sistemas Unix";
 choices[10][3] = "No existe la aplicaci&oacute;n TUXEDO";
 answers[10] = choices[10][0];
 units[10] = "50";
 comments[10] = "Id Pregunta: 1079. ";


//  Id pregunta: 1176 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Indicar cu&aacute;l de las siguientes no es un tipo de georreferenciaci&oacute;n:";
 choices[11]= new Array();
 choices[11][0] = "Directa.";
 choices[11][1] = "Discreta.";
 choices[11][2] = "Indirecta.";
 choices[11][3] = "Posicional.";
 answers[11] = choices[11][3];
 units[11] = "67";
 comments[11] = "Id Pregunta: 1176. NULL";


//  Id pregunta: 1203 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Kerberos utiliza algoritmos de cifrado:";
 choices[12]= new Array();
 choices[12][0] = "No utiliza algoritmos de cifrado, porque no cifra nada";
 choices[12][1] = "Utiliza algoritmos de cifrado RSA";
 choices[12][2] = "Utiliza algoritmos de cifrado tipo DES";
 choices[12][3] = "Lo &uacute;nico que utiliza es firma electr&oacute;nica";
 answers[12] = choices[12][2];
 units[12] = "72";
 comments[12] = "Id Pregunta: 1203. ";


//  Id pregunta: 1223 AÃ±o de creación de pregunta: 2005-01-01
 questions[13]= "14)  Los DN, en LDAP, se representan en:";
 choices[13]= new Array();
 choices[13][0] = "XML";
 choices[13][1] = "HTML";
 choices[13][2] = "Texto plano";
 choices[13][3] = "ASN.1";
 answers[13] = choices[13][2];
 units[13] = "74";
 comments[13] = "Id Pregunta: 1223. RFC 4514";


//  Id pregunta: 1357 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  SHA-1 es un algoritmo empleado por la criptograf&iacute;a sim&eacute;trica de:";
 choices[14]= new Array();
 choices[14][0] = "Res&uacute;men";
 choices[14][1] = "Bloques";
 choices[14][2] = "Flujos";
 choices[14][3] = "Las respuestas &lsquo;b&rsquo; y &lsquo;c&rsquo; son correctas";
 answers[14] = choices[14][0];
 units[14] = "72";
 comments[14] = "Id Pregunta: 1357. ";


//  Id pregunta: 1408 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  Una base de datos multidimensional:";
 choices[15]= new Array();
 choices[15][0] = "Es igual que una relacional, solo que con sistema de indices inversos duplicados que acelera los accesos en un 40%.";
 choices[15][1] = "Est&aacute; formado por la relaci&oacute;n existente entre tablas de hechos y dimensiones.";
 choices[15][2] = "El t&eacute;rmino se aplica a las bases de datos con tecnolog&iacute;a ISAM, por las m&uacute;ltiples posibilidades que ofrecen.";
 choices[15][3] = "&Uacute;nicamente existe cundo las comunicaciones con el servidor han de ser as&iacute;ncronas en el tiempo.";
 answers[15] = choices[15][1];
 units[15] = "68";
 comments[15] = "Id Pregunta: 1408. ";


//  Id pregunta: 1462 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  Indique cu&aacute;l de las siguientes afirmaciones es v&aacute;lida para el proceso &quot;Two Phase COMMIT&quot;:";
 choices[16]= new Array();
 choices[16][0] = "Es un programa con 2 versiones de trabajo";
 choices[16][1] = "Es una garant&iacute;a de consistencia entre bases de datos";
 choices[16][2] = "Es una funcionalidad para recuperaci&oacute;n de datos";
 choices[16][3] = "Es un equipo tolerante a fallos";
 answers[16] = choices[16][1];
 units[16] = "58";
 comments[16] = "Id Pregunta: 1462. NULL";


//  Id pregunta: 1637 AÃ±o de creación de pregunta: 2004-01-01
 questions[17]= "18)  El software que conecta dos aplicaciones heterog&eacute;neas, para compartir recursos de proceso de datos, se conoce como:";
 choices[17]= new Array();
 choices[17][0] = "Firmware";
 choices[17][1] = "Interfaz de usuario";
 choices[17][2] = "Middleware";
 choices[17][3] = "Everyware";
 answers[17] = choices[17][2];
 units[17] = "50";
 comments[17] = "Id Pregunta: 1637. ";


//  Id pregunta: 1824 AÃ±o de creación de pregunta: 2006-01-01
 questions[18]= "19)  Las herramientas para la elaboraci&oacute;n de informes y listados, tanto en detalle como sobre informaci&oacute;n agregada, a partir de la informaci&oacute;n de los Datawarehouse y datamarts se conocen como herramientas de:";
 choices[18]= new Array();
 choices[18][0] = "OLAP.";
 choices[18][1] = "Query &amp; reporting.";
 choices[18][2] = "Cuadro de mando anal&iacute;tico.";
 choices[18][3] = "Datamining.";
 answers[18] = choices[18][1];
 units[18] = "68";
 comments[18] = "Id Pregunta: 1824. ";


//  Id pregunta: 1830 AÃ±o de creación de pregunta: 2006-01-01
 questions[19]= "20)  &iquest;Qu&eacute; son los Datamarts o supermercados de datos?";
 choices[19]= new Array();
 choices[19][0] = "Proporcionan informaci&oacute;n de c&oacute;mo se ha construido el almac&eacute;n de datos.";
 choices[19][1] = "Son datos muy resumidos para consultas frecuentes.";
 choices[19][2] = "Son lugares de Internet donde por una peque&ntilde;a cuota se puede obtener la  informaci&oacute;n solicitada.";
 choices[19][3] = "Son datos que est&aacute;n disponibles bajo una licencia Creative Commons.";
 answers[19] = choices[19][1];
 units[19] = "68";
 comments[19] = "Id Pregunta: 1830. ";


//  Id pregunta: 2177 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  La diferencia entre el an&aacute;lisis y el dise&ntilde;o en la orientaci&oacute;n a objetos es:";
 choices[20]= new Array();
 choices[20][0] = "La transici&oacute;n es tan natural que realmente no hay transici&oacute;n.";
 choices[20][1] = "La transici&oacute;n la marca el momento en que se empiezan a construir objetos.";
 choices[20][2] = "El dise&ntilde;o empieza cuando comienzan a conectarse las clases.";
 choices[20][3] = "El an&aacute;lisis debe definir los objetos en el dominio del problema y el dise&ntilde;o define los objetos en el dominio de la soluci&oacute;n.";
 answers[20] = choices[20][3];
 units[20] = "82,84";
 comments[20] = "Id Pregunta: 2177. ";


//  Id pregunta: 2286 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  El modelo de UML que describe las necesidades de los usuarios es el:";
 choices[21]= new Array();
 choices[21][0] = "modelo de casos de uso";
 choices[21][1] = "modelo de despliegue";
 choices[21][2] = "modelo de interacci&oacute;n";
 choices[21][3] = "modelo de realizaci&oacute;n";
 answers[21] = choices[21][0];
 units[21] = "82";
 comments[21] = "Id Pregunta: 2286. ";


//  Id pregunta: 2288 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  El modelo en cascada, si hablamos de una fase en la que es necesario, aparte de otras labores, el analizar, entender y documentar el problema que el usuario trata de resolver con el sistema de informaci&oacute;n o aplicaci&oacute;n, nos estamos refiriendo a la fase de:";
 choices[22]= new Array();
 choices[22][0] = "Planificaci&oacute;n";
 choices[22][1] = "An&aacute;lisis";
 choices[22][2] = "Dise&ntilde;o";
 choices[22][3] = "Codificaci&oacute;n";
 answers[22] = choices[22][1];
 units[22] = "76";
 comments[22] = "Id Pregunta: 2288. ";


//  Id pregunta: 2518 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  &iquest;Cu&aacute;l de estas t&eacute;cnicas pierde parte de la  informaci&oacute;n al comprimirla?:";
 choices[23]= new Array();
 choices[23][0] = "Huffman";
 choices[23][1] = "JPEG";
 choices[23][2] = "TIFF";
 choices[23][3] = "LZW";
 answers[23] = choices[23][1];
 units[23] = "93";
 comments[23] = "Id Pregunta: 2518. NULL";


//  Id pregunta: 2629 AÃ±o de creación de pregunta: 2003-01-01
 questions[24]= "25)  &iquest;Qu&egrave; actividad del An&aacute;lisis del Sistema de Informaci&oacute;n s&oacute;lo se realiza en el caso de an&aacute;lisis orientado a objetos?";
 choices[24]= new Array();
 choices[24][0] = "ASI 6 -  Elaboraci&oacute;n del Modelo de datos";
 choices[24][1] = "ASI 8 &ndash; Definici&oacute;n de Interfaces de Usuario";
 choices[24][2] = "ASI 4 &ndash; An&aacute;lisis de los Casos de Uso";
 choices[24][3] = "ASI 3 &ndash; Identificaci&oacute;n de Subsistemas de An&aacute;lisis";
 answers[24] = choices[24][2];
 units[24] = "86";
 comments[24] = "Id Pregunta: 2629. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 2779 AÃ±o de creación de pregunta: 2006-01-01
 questions[25]= "26)  El modelo de ciclo de vida R.A.D se basa en:";
 choices[25]= new Array();
 choices[25][0] = "El modelo de desarrollo incremental";
 choices[25][1] = "El modelo en espiral";
 choices[25][2] = "El prototipado evolutivo";
 choices[25][3] = "Ninguno de los anteriores";
 answers[25] = choices[25][2];
 units[25] = "85";
 comments[25] = "Id Pregunta: 2779. ";


//  Id pregunta: 2869 AÃ±o de creación de pregunta: 2006-01-01
 questions[26]= "27)  Conjunto de planes, m&eacute;todos y herramientas dirigidas a modernizar, consolidar y coordinar las aplicaciones inform&aacute;ticas de una empresa";
 choices[26]= new Array();
 choices[26][0] = "EAI";
 choices[26][1] = "EDI";
 choices[26][2] = "Sistemas de Soporte a la Decisi&oacute;n";
 choices[26][3] = "ERP";
 answers[26] = choices[26][0];
 units[26] = "77";
 comments[26] = "Id Pregunta: 2869. ";


//  Id pregunta: 3018 AÃ±o de creación de pregunta: 2004-01-01
 questions[27]= "28)  Seg&uacute;n la ley 9/2014 general de telecomunicaciones, qu&eacute; organismo regular&aacute; los mercados de telecomunicaciones";
 choices[27]= new Array();
 choices[27][0] = "El ministerio de industria";
 choices[27][1] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia.";
 choices[27][2] = "Agencia Nacional de Radiocomunicaciones";
 choices[27][3] = "ninguna de las anteriores";
 answers[27] = choices[27][1];
 units[27] = "110";
 comments[27] = "Id Pregunta: 3018. ";


//  Id pregunta: 3043 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  &iquest;Para qu&eacute; se utiliza el entrelazado de bits en la transmisi&oacute;n de informaci&oacute;n? ";
 choices[28]= new Array();
 choices[28][0] = "para proporcionar una sencilla manera de cifrado y conseguir la confidencialidad";
 choices[28][1] = "para evitar que fallos de transmisi&oacute;n afecten a bits consecutivos y se pierda informaci&oacute;n";
 choices[28][2] = "para obtener un c&oacute;digo de redundancia c&iacute;clica que prevenga de errores en recepci&oacute;n";
 choices[28][3] = "Adem&aacute;s de evitar  los fallos de transmisi&oacute;n (los llamados errores de r&aacute;faga) evita que se introduzca una mayor latencia en el sistema agilizando la comunicaci&oacute;n ";
 answers[28] = choices[28][1];
 units[28] = "100";
 comments[28] = "Id Pregunta: 3043. La principal desventaja del entrelazado es que introduce latencia al sistema, ya que tenemos que esperar a la recepci&oacute;n de todos los bits del mensaje para poder desentrelazar y emplear las t&eacute;cnicas de correcci&oacute;n de errores";


//  Id pregunta: 3565 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  En un mensaje de correo electr&oacute;nico cifrado, seg&uacute;n el protocolo S-MIME,  se reciben cifrados:";
 choices[29]= new Array();
 choices[29][0] = "La direcci&oacute;n de correo electr&oacute;nico del destinatario y la direcci&oacute;n de correo electr&oacute;nico del remitente";
 choices[29][1] = "El cuerpo del mensaje y sus archivos adjuntos";
 choices[29][2] = "La &quot;traza&quot; del mensaje (servidores SMTP por los que ha sido encaminado)";
 choices[29][3] = "El asunto del mensaje, el tipo de contenido y la fecha";
 answers[29] = choices[29][1];
 units[29] = "106";
 comments[29] = "Id Pregunta: 3565. ";


//  Id pregunta: 3567 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  En un sistema en el que todos los usuarios necesitan el mismo servicio:";
 choices[30]= new Array();
 choices[30][0] = "Todos los usuarios esperan el mismo tiempo para ser atendidos.";
 choices[30][1] = "El tiempo total de servicio es el mismo y no depende del patr&oacute;n de llegadas.";
 choices[30][2] = "S&oacute;lo se puede acotar el tiempo m&iacute;nimo de espera.";
 choices[30][3] = "Ninguna de las anteriores es v&aacute;lida.";
 answers[30] = choices[30][3];
 units[30] = "26";
 comments[30] = "Id Pregunta: 3567. ";


//  Id pregunta: 3622 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  La norma X400 de la ITU-T se refiere a:";
 choices[31]= new Array();
 choices[31][0] = "Servicios de directorio";
 choices[31][1] = "Correo electr&oacute;nico";
 choices[31][2] = "Interfaz RS-232";
 choices[31][3] = "Interfaz de comunicaci&oacute;n de paquetes";
 answers[31] = choices[31][1];
 units[31] = "106";
 comments[31] = "Id Pregunta: 3622. ";


//  Id pregunta: 3750 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  MIB es:";
 choices[32]= new Array();
 choices[32][0] = "Una base de datos de informaci&oacute;n de gestion";
 choices[32][1] = "Un protocolo de gesti&oacute;n";
 choices[32][2] = "Un dominio de gesti&oacute;n";
 choices[32][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[32] = choices[32][0];
 units[32] = "104";
 comments[32] = "Id Pregunta: 3750. ";


//  Id pregunta: 3771 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  PCM es:";
 choices[33]= new Array();
 choices[33][0] = "Modulaci&oacute;n por codificaci&oacute;n de pulsos";
 choices[33][1] = "M&oacute;biles adaptados al uso con ordenadores personales";
 choices[33][2] = "Modulaci&oacute;n por codificaci&oacute;n de fase";
 choices[33][3] = "Personalizaci&oacute;n de canales multimedia";
 answers[33] = choices[33][0];
 units[33] = "99";
 comments[33] = "Id Pregunta: 3771. *:PCM";


//  Id pregunta: 3792 AÃ±o de creación de pregunta: 2002-01-01
 questions[34]= "35)  Respecto a los elementos de red de SDH puede decirse que:";
 choices[34]= new Array();
 choices[34][0] = "Un multiplexor integra tributarios en una estructura de orden superior";
 choices[34][1] = "Un ADM integra y extrae tributarios de la se&ntilde;al de l&iacute;nea";
 choices[34][2] = "Un crossconnect interconecta tributarios entre agregados y agregados entre s&iacute;";
 choices[34][3] = "Todas las afirmaciones anteriores son correctas";
 answers[34] = choices[34][3];
 units[34] = "105";
 comments[34] = "Id Pregunta: 3792. ";


//  Id pregunta: 3913 AÃ±o de creación de pregunta: 2004-01-01
 questions[35]= "36)  &iquest;Cu&aacute;l no es una propiedad de la seguridad inform&aacute;tica?";
 choices[35]= new Array();
 choices[35][0] = "Confidencialidad";
 choices[35][1] = "Integridad";
 choices[35][2] = "Autenticaci&oacute;n";
 choices[35][3] = "Disponibilidad";
 answers[35] = choices[35][3];
 units[35] = "97";
 comments[35] = "Id Pregunta: 3913. NULL";


//  Id pregunta: 3942 AÃ±o de creación de pregunta: 2003-01-01
 questions[36]= "37)  Con la API de Servlet con respecto a cookies se puede:";
 choices[36]= new Array();
 choices[36][0] = "S&oacute;lo se pueden leer cookies";
 choices[36][1] = "S&oacute;lo se pueden leer y especificar atributos de cookie pero no crear cookies";
 choices[36][2] = "Se pueden crear cookies";
 choices[36][3] = "S&oacute;lo se pueden situar los Cookies en las cabeceras de respuesta al cliente";
 answers[36] = choices[36][2];
 units[36] = "116";
 comments[36] = "Id Pregunta: 3942. Pregunta no perteneciente al test  del ex&aacute;men 2003 de SS (aunque en este ex&aacute;men hubo una pregunta de API de servlet)";


//  Id pregunta: 4045 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  &iquest;Cu&aacute;l de las siguientes infracciones est&aacute; tipificada como muy grave seg&uacute;n la Ley 9/2014 de Telecomunicaciones?";
 choices[37]= new Array();
 choices[37][0] = "La emisi&oacute;n de se&ntilde;ales de identificaci&oacute;n falsas o enga&ntilde;osas";
 choices[37][1] = "La interceptaci&oacute;n, sin autorizaci&oacute;n, de telecomunicaciones no destinadas al p&uacute;blico en general, as&iacute; como la divulgaci&oacute;n del contenido.";
 choices[37][2] = "El establecimiento de comunicaciones con estaciones no autorizadas";
 choices[37][3] = "Carecer de los preceptivos cuadros de tarifas o de precios cuando su exhibici&oacute;n se exija por la normativa vigente";
 answers[37] = choices[37][1];
 units[37] = "110";
 comments[37] = "Id Pregunta: 4045. ";


//  Id pregunta: 4078 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  &iquest;Es posible distribuir en una granja de servidores la l&oacute;gica de negocio de una empresa?";
 choices[38]= new Array();
 choices[38][0] = "Si utilizando .Net";
 choices[38][1] = "Si utilizando J2EE";
 choices[38][2] = "Si usando software libre";
 choices[38][3] = "todas las anteriores son ciertas";
 answers[38] = choices[38][3];
 units[38] = "113";
 comments[38] = "Id Pregunta: 4078. ";


//  Id pregunta: 4083 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  &iquest;Cu&aacute;l de los siguientes software no funciona actualmente sobre Linux?";
 choices[39]= new Array();
 choices[39][0] = "PHP";
 choices[39][1] = "Java";
 choices[39][2] = "Lucene";
 choices[39][3] = "Jscript";
 answers[39] = choices[39][3];
 units[39] = "114";
 comments[39] = "Id Pregunta: 4083. ";


//  Id pregunta: 4102 AÃ±o de creación de pregunta: 2004-01-01
 questions[40]= "41)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[40]= new Array();
 choices[40][0] = "El protocolo TCP/IP nace en la Universidad de Berkeley que lo incluy&oacute; en su UNIX.";
 choices[40][1] = "El protocolo TCP/IP fue creado por IBM que lo incluy&oacute; en su sistema operativo propietario y se extendi&oacute; posteriormente en el mercado.";
 choices[40][2] = "El protocolo TCP/IP nace con el objetivo de interconectar ordenadores de distintas clases.";
 choices[40][3] = "El protocolo TCP/IP nace con el objetivo de comunicar redes diferentes";
 answers[40] = choices[40][3];
 units[40] = "112";
 comments[40] = "Id Pregunta: 4102. ";


//  Id pregunta: 4288 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  La calidad del software entregado ser&aacute; alta si la EED (Eficacia de la Eliminaci&oacute;n de Defectos):";
 choices[41]= new Array();
 choices[41][0] = "Se acerca a uno";
 choices[41][1] = "Se acerca a cero.";
 choices[41][2] = "Es mayor que uno.";
 choices[41][3] = "Es negativa.";
 answers[41] = choices[41][0];
 units[41] = "87";
 comments[41] = "Id Pregunta: 4288. NULL";


//  Id pregunta: 4320 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  &iquest;Cu&aacute;l de los siguientes elementos se pueden anexar a archivos como una protecci&oacute;n contra los virus?";
 choices[42]= new Array();
 choices[42][0] = "Bloqueadores de conducta.";
 choices[42][1] = "Verificadores de redundancia c&iacute;clica (CRC)";
 choices[42][2] = "Inmunizadores.";
 choices[42][3] = "Monitores activos.";
 answers[42] = choices[42][2];
 units[42] = "";
 comments[42] = "Id Pregunta: 4320. ";


//  Id pregunta: 4461 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  Es un est&aacute;ndar de e-learning: ";
 choices[43]= new Array();
 choices[43][0] = "IEEE";
 choices[43][1] = "ADL";
 choices[43][2] = "LMS";
 choices[43][3] = "SCORM";
 answers[43] = choices[43][3];
 units[43] = "66";
 comments[43] = "Id Pregunta: 4461. ";


//  Id pregunta: 4575 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  Indica cual de las siguientes definiciones de firma electr&oacute;nica es Ia que aparece en Ia Ley 59/2003, de 19 de diciembre:";
 choices[44]= new Array();
 choices[44][0] = "es el resultado de obtener por medio de mecanismos o dispositivos un patr&oacute;n que se asocie biun&iacute;voca mente a un individuo y a su voluntad de firmar.";
 choices[44][1] = "es el conjunto de datos en forma electr&oacute;nica, consignados junto a otros o asociados con ellos, que pueden ser utilizados como medio de identificaci&oacute;n del firmante.";
 choices[44][2] = "es el documento electr&oacute;nico que acredita electr&oacute;nicamente Ia identidad personal de su titular y permite la firma de documentos.";
 choices[44][3] = "es el conjunto de datos &uacute;nicos, como c&oacute;digos o claves criptogr&aacute;ficas privadas, que el firmante utiliza para firmar documentos.";
 answers[44] = choices[44][1];
 units[44] = "30";
 comments[44] = "Id Pregunta: 4575. Ley 59/2003, art&iacute;culo 3";


//  Id pregunta: 4650 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  En los sistemas de radiocomunicaci&oacute;n, el concepto de PIRE es:";
 choices[45]= new Array();
 choices[45][0] = "La ganancla de la antena";
 choices[45][1] = "La potencla interna del elemento radlante";
 choices[45][2] = "el producto de la potencla suministrada por La antena por La ganancla isot&oacute;pica de esta";
 choices[45][3] = "la probabilidad de interferencla debida a La reflexi&oacute;n de la se&ntilde;al emitida.";
 answers[45] = choices[45][2];
 units[45] = "";
 comments[45] = "Id Pregunta: 4650. ";


//  Id pregunta: 4687 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  La fibra &oacute;ptica, con respecto al par trenzado";
 choices[46]= new Array();
 choices[46][0] = "Tiene m&aacute;s radiaci&oacute;n electromagn&eacute;tica";
 choices[46][1] = "Tiene m&aacute;s ancho de banda";
 choices[46][2] = "Es m&aacute;s f&aacute;cil de instalar";
 choices[46][3] = "Tiene mayor atenuaci&oacute;n";
 answers[46] = choices[46][1];
 units[46] = "99";
 comments[46] = "Id Pregunta: 4687. Examen 2006 JCYL";


//  Id pregunta: 4744 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  El estudio de las consecuencias que tendr&iacute;a una parada de X tiempo sobre la organizaci&oacute;n se contempla en la metodolog&iacute;a MAGERIT en:";
 choices[47]= new Array();
 choices[47][0] = "An&aacute;lisis de riesgos";
 choices[47][1] = "An&aacute;lisis de impacto";
 choices[47][2] = "Disponibilidad";
 choices[47][3] = "Es una metodolog&iacute;a de desarrollo, en ning&uacute;n caso trata an&aacute;lisis del riesgo";
 answers[47] = choices[47][1];
 units[47] = "32";
 comments[47] = "Id Pregunta: 4744. Examen 2006 JCYL";


//  Id pregunta: 4887 AÃ±o de creación de pregunta: 2007-01-01
 questions[48]= "49)  Son &oacute;rganos de contrataci&oacute;n";
 choices[48]= new Array();
 choices[48][0] = "Los Ministros y los Secretarios de Estado";
 choices[48][1] = "Los representantes legales de los Organismos aut&oacute;nomos y dem&aacute;s Entidades p&uacute;blicas estatales y los Directores Generales de las distintas Entidades gestoras y Servicios comunes de la Seguridad Social.";
 choices[48][2] = "a) y b) son correctas";
 choices[48][3] = "El Subsecretario de Econom&iacute;a y Hacienda";
 answers[48] = choices[48][2];
 units[48] = "41";
 comments[48] = "Id Pregunta: 4887. Art. 316 RD Legislativo 3/2011";


//  Id pregunta: 4932 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  La matriz Requisitos-Componentes empleada en los procesos de dise&ntilde;o y desarrollo de software, aparece en:";
 choices[49]= new Array();
 choices[49][0] = "El documento de especificaci&oacute;n de requisitos.";
 choices[49][1] = "El documento de dise&ntilde;o de software.";
 choices[49][2] = "Los documentos de cambios.";
 choices[49][3] = "El Plan de garant&iacute;a de calidad de software.";
 answers[49] = choices[49][1];
 units[49] = "78";
 comments[49] = "Id Pregunta: 4932. Examen TIC B 2007";


//  Id pregunta: 4991 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l de los siguientes NO es un servicio de Internet con arquitectura cliente/servidor?:";
 choices[50]= new Array();
 choices[50][0] = "ADSL";
 choices[50][1] = "Grupos noticias (news)";
 choices[50][2] = "FTP";
 choices[50][3] = "IRC";
 answers[50] = choices[50][0];
 units[50] = "112";
 comments[50] = "Id Pregunta: 4991. Examen TIC A 2007";


//  Id pregunta: 5058 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  Dadas las IPs de 2 hosts (172.16.17.30 y 172.16.28.15) y su m&aacute;scara (255.255.240.0). &iquest;Est&aacute;n en la misma subred?:";
 choices[51]= new Array();
 choices[51][0] = "S&iacute;";
 choices[51][1] = "No";
 choices[51][2] = "Depende de la direcci&oacute;n de la Puerta de Enlace";
 choices[51][3] = "Depende de la configuraci&oacute;n del switch";
 answers[51] = choices[51][0];
 units[51] = "100";
 comments[51] = "Id Pregunta: 5058. Examen TIC A 2007";


//  Id pregunta: 5436 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  Indicar lo que no contribuye a que la estimaci&oacute;n del esfuerzo de desarrollo sea tan dif&iacute;cil de realizar";
 choices[52]= new Array();
 choices[52][0] = "El hecho de que cada organizaci&oacute;n tiene sus propios recursos, procedimientos e historia, y es necesario ajustar los procesos de estimaci&oacute;n a esos par&aacute;metros &uacute;nicos";
 choices[52][1] = "La rapidez con la que cambian las tecnolog&iacute;as de la informaci&oacute;n y las metodolog&iacute;as del desarrollo";
 choices[52][2] = "La tendencia de los desarrolladores hacia la sobreestimaci&oacute;n";
 choices[52][3] = "El ignorar los aspectos no lineales del desarrollo del software (como son la coordinaci&oacute;n y la gesti&oacute;n";
 answers[52] = choices[52][2];
 units[52] = "89";
 comments[52] = "Id Pregunta: 5436. Castilla y Le&oacute;n";


//  Id pregunta: 5582 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  La nueva ley de contratos del sector p&uacute;blico es";
 choices[53]= new Array();
 choices[53][0] = "el Real Decreto Legislativo 2/2000";
 choices[53][1] = "la Ley 30/2007";
 choices[53][2] = "el Real Decreto Legislativo 3/2011";
 choices[53][3] = "el Real Decreto Legislativo 2/2002";
 answers[53] = choices[53][2];
 units[53] = "41";
 comments[53] = "Id Pregunta: 5582. NULL";


//  Id pregunta: 5649 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  El RD 1720/2007 trata sobre:";
 choices[54]= new Array();
 choices[54][0] = "Reglamento de desarrollo de la Ley del Estatuto B&aacute;sico del Empleado P&uacute;blico";
 choices[54][1] = "Reglamento sobre medidas de protecci&oacute;n contra radiaciones electromagn&eacute;ticas";
 choices[54][2] = "Reglamento sobre medidas que favorezcan la ergonom&iacute;a y ecolog&iacute;a en los puestos de trabajo";
 choices[54][3] = "Reglamento de desarrollo de la Ley Org&aacute;nica de protecci&oacute;n de datos de carater personal";
 answers[54] = choices[54][3];
 units[54] = "29";
 comments[54] = "Id Pregunta: 5649. ";


//  Id pregunta: 5687 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  Se&ntilde;ale cual de los siguientes datos se encuentra en la zona p&uacute;blica del chip criptogr&aacute;fico del DNI electr&oacute;nico:";
 choices[55]= new Array();
 choices[55][0] = "Certificado de autenticaci&oacute;n";
 choices[55][1] = "Certificados de la autoridad de certificaci&oacute;n";
 choices[55][2] = "Datos biom&eacute;tricos";
 choices[55][3] = "Claves privadas del ciudadano";
 answers[55] = choices[55][1];
 units[55] = "74";
 comments[55] = "Id Pregunta: 5687. NULL";


//  Id pregunta: 5810 AÃ±o de creación de pregunta: 2009-01-01
 questions[56]= "57)  Indique la respuesta correcta respecto al RD Legislativo 3/2011 de Contratos del Sector P&uacute;blico";
 choices[56]= new Array();
 choices[56][0] = "Regula la subasta electr&oacute;nica";
 choices[56][1] = "Proh&iacute;be la subasta electr&oacute;nica";
 choices[56][2] = "Suprime la adjudicaci&oacute;n directa";
 choices[56][3] = "No menciona la subasta electr&oacute;nica";
 answers[56] = choices[56][0];
 units[56] = "41";
 comments[56] = "Id Pregunta: 5810. MAP 2008 A1";


//  Id pregunta: 5984 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  El modelo de control de accesos donde es el sistema quien protege los recursos y donde todo recurso del sistema tiene unaetiqueta de seguridad se denomina:";
 choices[57]= new Array();
 choices[57][0] = "De acceso discrecional (DAC)";
 choices[57][1] = "De acceso obligatorio (MAC)";
 choices[57][2] = "Basado en roles (RBAC)";
 choices[57][3] = "De confidencialidad.";
 answers[57] = choices[57][1];
 units[57] = "73";
 comments[57] = "Id Pregunta: 5984. TIC A 2009";


//  Id pregunta: 6126 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  De los siguientes pares de t&eacute;rminos referidos al control de calidad, indique cu&aacute;l contiene dos conceptos equivalentes:";
 choices[58]= new Array();
 choices[58][0] = "Prevenci&oacute;n e inspecci&oacute;n.";
 choices[58][1] = "Causas comunes y causas aleatorias.";
 choices[58][2] = "Muestreo por atributos y muestreo por variables.";
 choices[58][3] = "Tolerancias y l&iacute;mites de control.";
 answers[58] = choices[58][1];
 units[58] = "87";
 comments[58] = "Id Pregunta: 6126. TIC A 2009";


//  Id pregunta: 6503 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  &iquest;Cu&aacute;l de los siguientes es un proyecto de estandarizaci&oacute;n de UNIX?";
 choices[59]= new Array();
 choices[59][0] = "GNU";
 choices[59][1] = "GPL";
 choices[59][2] = "POSIX";
 choices[59][3] = "Emacs";
 answers[59] = choices[59][2];
 units[59] = "53";
 comments[59] = "Id Pregunta: 6503. NULL";


//  Id pregunta: 6642 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  En un sistema Orientado a Objetos, cu&aacute;l de las siguientes NO es una m&eacute;trica para evaluar la calidad del dise&ntilde;o?";
 choices[60]= new Array();
 choices[60][0] = "M&eacute;tricas de Booch";
 choices[60][1] = "M&eacute;tricas MDOO";
 choices[60][2] = "M&eacute;tricas de Lorenz y Kidd";
 choices[60][3] = "M&eacute;tricas de Chidamber y Kemerer";
 answers[60] = choices[60][0];
 units[60] = "88";
 comments[60] = "Id Pregunta: 6642. NULL";


//  Id pregunta: 7259 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  En un servidor DNS, un registro MX hace referencia a:";
 choices[61]= new Array();
 choices[61][0] = "Un servidor web";
 choices[61][1] = "Un servidor de correo";
 choices[61][2] = "Un servidor seguro";
 choices[61][3] = "El servidor DNS principal";
 answers[61] = choices[61][1];
 units[61] = "106";
 comments[61] = "Id Pregunta: 7259. Examen TIC B 2009";


//  Id pregunta: 7275 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  &iquest;Cu&aacute;l de las siguientes no es una ventaja de las m&aacute;quinas virtuales con respecto al hardware f&iacute;sico?";
 choices[62]= new Array();
 choices[62][0] = "Aislamiento";
 choices[62][1] = "Independencia  del software";
 choices[62][2] = "Encapsulamiento";
 choices[62][3] = "Compatibilidad";
 answers[62] = choices[62][1];
 units[62] = "119";
 comments[62] = "Id Pregunta: 7275. NULL";


//  Id pregunta: 7960 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)   Dentro de un sistema de cableado estructurado el denominado &laquo;subsistema horizontal&raquo; es aquel que:";
 choices[63]= new Array();
 choices[63][0] = " Interconecta las plantas del edificio y los cuadros de distribuci&oacute;n de cada planta.";
 choices[63][1] = " Interconecta las rosetas con el cuadro de distribuci&oacute;n de planta.";
 choices[63][2] = " Interconecta edificios en el entorno de un campus.";
 choices[63][3] = " Interconecta a todo el cableado de un edificio.";
 answers[63] = choices[63][1];
 units[63] = "NULL";
 comments[63] = "Id Pregunta: 7960. Map 2006";


//  Id pregunta: 8071 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)   Indique c&oacute;mo se denomina el patr&oacute;n de dise&ntilde;o que define una dependencia de uno-a-muchos entre objetos, de forma que cuando un objeto cambia de estado se notifica y actualizan autom&aacute;ticamente todos los objetos que dependen de &eacute;l:";
 choices[64]= new Array();
 choices[64][0] = " Strategy.";
 choices[64][1] = " State.";
 choices[64][2] = " Observer.";
 choices[64][3] = " Command.";
 answers[64] = choices[64][2];
 units[64] = "NULL";
 comments[64] = "Id Pregunta: 8071. Map 2008";


//  Id pregunta: 8132 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)   &iquest;Cu&aacute;l de las siguientes NO es una pauta WAI de accesibilidad para diferentes componentes?";
 choices[65]= new Array();
 choices[65][0] = " ATAG.";
 choices[65][1] = " UAAG.";
 choices[65][2] = " WCED.";
 choices[65][3] = " WCAG.";
 answers[65] = choices[65][2];
 units[65] = "NULL";
 comments[65] = "Id Pregunta: 8132. Map 2008";


//  Id pregunta: 8190 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  Se&ntilde;ale cu&aacute;l NO es un campo de actuaci&oacute;n clave de la Agenda Digital para Europa:";
 choices[66]= new Array();
 choices[66][0] = "Mercado &uacute;nico digital din&aacute;mico. ";
 choices[66][1] = "Acceso ultrarr&aacute;pido a Internet. ";
 choices[66][2] = "Nativos digitales. ";
 choices[66][3] = "Inclusi&oacute;n digital. ";
 answers[66] = choices[66][2];
 units[66] = "30";
 comments[66] = "Id Pregunta: 8190. Examen TIC A1 2010";


//  Id pregunta: 8252 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  Cuando existe particionado a nivel de byte, m&aacute;s un disco de paridad dedicado, se trata de:";
 choices[67]= new Array();
 choices[67][0] = "RAID 3.";
 choices[67][1] = "RAID 4.";
 choices[67][2] = "RAID 5.";
 choices[67][3] = "RAID 6.";
 answers[67] = choices[67][0];
 units[67] = "48";
 comments[67] = "Id Pregunta: 8252. Examen TIC A1 2010";


//  Id pregunta: 8279 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  &iquest;Cu&aacute;l de las siguientes PDUs se a&ntilde;ade en SNMPv2 con respecto a las de SNMPv1?:";
 choices[68]= new Array();
 choices[68][0] = "Trap.";
 choices[68][1] = "GetResponse.";
 choices[68][2] = "GetBulkRequest.";
 choices[68][3] = "GetNextRequest.";
 answers[68] = choices[68][2];
 units[68] = "104";
 comments[68] = "Id Pregunta: 8279. Examen TIC A1 2010";


//  Id pregunta: 8350 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)   &iquest;Para que sirve la palabra clave &quot;static&quot; en Java? ";
 choices[69]= new Array();
 choices[69][0] = "Indica que aquel rn&eacute;todo o variable que precede es constante, es decir, no puede modificarse";
 choices[69][1] = "Permite indicar que el m&eacute;todo o la variable al que precede pertenece a la clase en lugar de al objeto";
 choices[69][2] = "Indica que la variable o m&eacute;todo al que precede no puede ser accedida desde otras clases";
 choices[69][3] = "Indica que la variable o m&eacute;todo al que precede no puede ser accedida desde la dase a la que pertenece.";
 answers[69] = choices[69][1];
 units[69] = "116";
 comments[69] = "Id Pregunta: 8350. Examen TIC A2 2010";


//  Id pregunta: 8366 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  Sobre un Data Warehouse con informaci&oacute;n de las ventas nacionales de una compa&ntilde;&iacute;a, se quiere consultar los datos pero a nivel de ventas provinciales. &iquest;Qu&eacute; operaci&oacute;n debemos realizar en el almac&eacute;n de datos para obtener dichos datos?";
 choices[70]= new Array();
 choices[70][0] = "Drill-Down.";
 choices[70][1] = "Slice &amp; Dice.";
 choices[70][2] = "Roll-Up,";
 choices[70][3] = "Drill-Through.";
 answers[70] = choices[70][0];
 units[70] = "68";
 comments[70] = "Id Pregunta: 8366. Examen TIC A2 2010";


//  Id pregunta: 8445 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  Una compa&ntilde;&iacute;a va a abrir una nueva sede asumiendo la subred 255.255.248.0,&iquest;Cu&aacute;l de las siguientes direcciones IP se podr&iacute;a asignar a un ordenador de la nuevasede?:";
 choices[71]= new Array();
 choices[71][0] = "a) 172.16.20.0";
 choices[71][1] = "172.16.24.45";
 choices[71][2] = "Ambas respuestas son correctas";
 choices[71][3] = "Ninguna respuesta es correcta";
 answers[71] = choices[71][2];
 units[71] = "100";
 comments[71] = "Id Pregunta: 8445. Analista Ayto. Madrid 2010";


//  Id pregunta: 8616 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  El mantenimiento que tiene por objeto adelantarse al deterioro de los equipos como consecuencia del uso y del paso del tiempo, se denomina:";
 choices[72]= new Array();
 choices[72][0] = "Mantenimiento adaptativo";
 choices[72][1] = "Mantenimiento preventivo";
 choices[72][2] = "Mantenimiento correctivo";
 choices[72][3] = "Mantenimiento evolutivo";
 answers[72] = choices[72][1];
 units[72] = "86";
 comments[72] = "Id Pregunta: 8616. Examen TIC A2 2010 interna";


//  Id pregunta: 8658 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  En una fibra &oacute;ptica multimodo de &iacute;ndice escalonado:";
 choices[73]= new Array();
 choices[73][0] = "El n&uacute;cleo tiene un &iacute;ndice de refracci&oacute;n constante en toda la secci&oacute;n cil&iacute;ndrica e inferior al del revestimiento";
 choices[73][1] = "El n&uacute;cleo tiene un &iacute;ndice de refracci&oacute;n escalonado en toda la cil&iacute;ndrica e inferior al del revestimiento";
 choices[73][2] = "El n&uacute;cleo tiene un &iacute;ndice de refracci&oacute;n escalonado en toda la cil&iacute;ndrica y superior al del revestimiento";
 choices[73][3] = "El n&uacute;cleo tiene un &iacute;ndice de refracci&oacute;n constante en toda la secci&oacute;n cil&iacute;ndrica y superior al del revestimiento";
 answers[73] = choices[73][3];
 units[73] = "99";
 comments[73] = "Id Pregunta: 8658. Examen UPM A2 2011";


//  Id pregunta: 8728 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  El acr&oacute;nimo FCAPS en gesti&oacute;n de redes se refiere a:";
 choices[74]= new Array();
 choices[74][0] = "Failure, Configuration, Accountability, Performance, Software, los 5 aspectos m&aacute;s importantes en la gesti&oacute;n de red: fallos, configuraci&oacute;n, contabilidad, rendimiento y software de red.";
 choices[74][1] = "Failure, Compatibility, Accountability, Performance, Security, los 5 aspectos m&aacute;s importantes en la gesti&oacute;n de red: fallos, compatibilidad, contabilidad, rendimiento y seguridad.";
 choices[74][2] = "Failure, Configuration, Adaptability, Performance, Security, los 5 aspectos m&aacute;s importantes en la gesti&oacute;n de red: fallos, configuraci&oacute;n, adaptabilidad, rendimiento y seguridad.";
 choices[74][3] = "Failure, Configuration, Accountability, Performance, Security, los 5 aspectos m&aacute;s importantes en la gesti&oacute;n de red: fallos, configuraci&oacute;n, contabilidad, rendimiento y seguridad.";
 answers[74] = choices[74][3];
 units[74] = "104";
 comments[74] = "Id Pregunta: 8728. Examen UPM A2 2011";


//  Id pregunta: 8779 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  El art&iacute;culo 3 de la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal, define como datos de car&aacute;cter personal:";
 choices[75]= new Array();
 choices[75][0] = "Cualquier informaci&oacute;n concerniente a personas f&iacute;sicas identificadas o no.";
 choices[75][1] = "Cualquier informaci&oacute;n concerniente a personas f&iacute;sicas y jur&iacute;dicas.";
 choices[75][2] = "Cualquier informaci&oacute;n concerniente a personas f&iacute;sicas identificadas o identificables.";
 choices[75][3] = "Cualquier informaci&oacute;n concerniente a personas identificadas.";
 answers[75] = choices[75][2];
 units[75] = "29";
 comments[75] = "Id Pregunta: 8779. Examen UPM A2 2011";


//  Id pregunta: 8986 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  &iquest;Cu&aacute;l de las siguientes es una recomendaci&oacute;n del formato Facturae";
 choices[76]= new Array();
 choices[76][0] = "Formato de firma XMLDSig ENVELOPED";
 choices[76][1] = "Algoritmo de canonicalizaci&oacute;n C14N";
 choices[76][2] = "Algoritmo de firma RSA sobre SHA1";
 choices[76][3] = "Todas las anteriores";
 answers[76] = choices[76][3];
 units[76] = "70";
 comments[76] = "Id Pregunta: 8986. NULL";


//  Id pregunta: 9401 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  El modo de transporte del primer est&aacute;ndar ADSL, UIT-T/G.992.1 de 1999, era el ATM, a cuyo efecto, una trama Ethernet de 1.300 bytes se convert&iacute;a en (aproximadamente):";
 choices[77]= new Array();
 choices[77][0] = "1300 x 53 = 68.900 celdas ATM";
 choices[77][1] = "1300 / 48 = 27,1 ? 28 celdas ATM";
 choices[77][2] = "1300 / 53 = 24,5 ? 25 celdas ATM.";
 choices[77][3] = "Ninguna de las anteriores";
 answers[77] = choices[77][1];
 units[77] = "109";
 comments[77] = "Id Pregunta: 9401. T&eacute;cnico Teleco Ayto Madrid 2010";


//  Id pregunta: 9548 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  Seg&uacute;n la Ley de Firma Electr&oacute;nica, se&ntilde;ale cu&aacute;l NO es un supuesto que exima al prestador de servicios de certificaci&oacute;n de la responsabilidad sobre los posibles da&ntilde;os y perjuicios causados a un firmante:";
 choices[78]= new Array();
 choices[78][0] = "Cuando el firmante no haya proporcionado al prestador informaci&oacute;n veraz, completa y exacta de los datos que deban constar en el certificado en el momento de emitir el mismo";
 choices[78][1] = "Cuado el firmante no haya comunicado al prestador cualquier cambio en las circunstancias reflejadas en el certificado electr&oacute;nico";
 choices[78][2] = "Cuando el firmante haya sido negligente en la conservaci&oacute;n de sus datos de creaci&oacute;n de firma";
 choices[78][3] = "Cuando el firmante utilice un certificado revocado sin que el prestador le haya notificado la suspensi&oacute;n de la vigencia";
 answers[78] = choices[78][3];
 units[78] = "30";
 comments[78] = "Id Pregunta: 9548. Ley 59/2003, art&iacute;culo 23";


//  Id pregunta: 9629 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  En el sistema operativo Linux, &iquest;cu&aacute;l de las siguientes opciones busca la palabra 'libro' dentro de ficheros?";
 choices[79]= new Array();
 choices[79][0] = "find -type f | xwygs grep 'libro' ";
 choices[79][1] = "find -type f | xaygs grep 'libro'";
 choices[79][2] = "find -type f | xargs grep 'libro'";
 choices[79][3] = "find -type f | xargp grep 'libro'";
 answers[79] = choices[79][2];
 units[79] = "54";
 comments[79] = "Id Pregunta: 9629. Examen TIC A2 2013 - Las comillas en 'libro' son dobles";


//  Id pregunta: 9738 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  Existen dos especificaciones complementarias que constituyen la especificaci&oacute;n completa del lenguaje de modelado UML 2.4.1. Estas especificaciones se denominan:";
 choices[80]= new Array();
 choices[80][0] = "Intrastructure e Hiperstructure.";
 choices[80][1] = "Basic y Complex.";
 choices[80][2] = "Infrastructure y Superstructure.";
 choices[80][3] = "Infrastructure y Substructure.";
 answers[80] = choices[80][2];
 units[80] = "82";
 comments[80] = "Id Pregunta: 9738. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9780 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  &iquest;Cu&aacute;l de las siguientes herramientas utiliza un SGBD (sistema de gesti&oacute;n de bases de datos) para asegurar la atomicidad y persistencia de las transacciones?";
 choices[81]= new Array();
 choices[81][0] = "M&oacute;dulo de comprobaci&oacute;n de la integridad. ";
 choices[81][1] = "El esquema conceptual. ";
 choices[81][2] = "Fichero diario. ";
 choices[81][3] = "Triggers. ";
 answers[81] = choices[81][2];
 units[81] = "57";
 comments[81] = "Id Pregunta: 9780. Examen TIC A2 2013";


//  Id pregunta: 9842 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  En la gesti&oacute;n unificada de usuarios, &iquest;a qu&eacute; se denomina Single Sign-On (SSO)?";
 choices[82]= new Array();
 choices[82][0] = "Procedimiento de cifrado para autenticar a un usuario.";
 choices[82][1] = "Procedimiento asociado al cifrado en Secure Socket Layer (SSL).";
 choices[82][2] = "Es un procedimiento de autenticaci&oacute;n que habilita al usuario para acceder a varios sistemas con una sola instancia de autenticaci&oacute;n. ";
 choices[82][3] = "Permite el acceso de los usuarios a servicios web a trav&eacute;s del protocolo HTTPS.";
 answers[82] = choices[82][2];
 units[82] = "118";
 comments[82] = "Id Pregunta: 9842. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Arag&oacute;n 2013";


//  Id pregunta: 9940 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  La taxonom&iacute;a de Flynn:";
 choices[83]= new Array();
 choices[83][0] = "se ha revisado recientemente para incluir los sistemas Big Data.";
 choices[83][1] = "es una clasificaci&oacute;n de computadores en funci&oacute;n de su arquitectura.";
 choices[83][2] = "es la base de la taxonom&iacute;a de Bloom.";
 choices[83][3] = "se propuso con motivo de los primeros PC de IBM.";
 answers[83] = choices[83][1];
 units[83] = "45";
 comments[83] = "Id Pregunta: 9940. TIC A1, Examen 2013";


//  Id pregunta: 10128 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  En la gesti&oacute;n de redes, el agente de gesti&oacute;n se encuentra en: ";
 choices[84]= new Array();
 choices[84][0] = "El elemento gestionado";
 choices[84][1] = "El nodo de gesti&oacute;n central";
 choices[84][2] = "Nodos intermedios que act&uacute;an como relay";
 choices[84][3] = "El agente de gesti&oacute;n no es un elemento de la gesti&oacute;n de red.";
 answers[84] = choices[84][0];
 units[84] = "104";
 comments[84] = "Id Pregunta: 10128. ";


//  Id pregunta: 10452 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  En el &aacute;mbito de la continuidad de negocio, el Punto de Recuperaci&oacute;n Objetivo o &quot;Recovery point objective RPO&quot;:";
 choices[85]= new Array();
 choices[85][0] = "Cuantifica la p&eacute;rdida de datos aceptable en caso de interrupci&oacute;n.";
 choices[85][1] = "Indica el punto m&aacute;s alejado en el tiempo en le que es aceptable recuperar los datos.";
 choices[85][2] = "Es la cantidad de tiempo permitida para la recuperaci&oacute;n de un recurso o funci&oacute;n de negocio despu&eacute;s de que ocurre un desastre.";
 choices[85][3] = "A y B.";
 answers[85] = choices[85][3];
 units[85] = "97";
 comments[85] = "Id Pregunta: 10452. NULL";


//  Id pregunta: 10545 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Europa 2020...";
 choices[86]= new Array();
 choices[86][0] = "La estrategia Europa 2020 trata de lograr un crecimiento inteligente, a trav&eacute;s de inversiones m&aacute;s eficaces en educaci&oacute;n, investigaci&oacute;n e innovaci&oacute;n, sostenible, gracias al impulso decidido a una econom&iacute;a baja en carbono, e integrador, que ponga el acento en la creaci&oacute;n de empleo y la reducci&oacute;n de la pobreza.";
 choices[86][1] = "La estrategia se centra en cinco ambiciosos objetivos en las &aacute;reas de empleo, innovaci&oacute;n, educaci&oacute;n, reducci&oacute;n de la pobreza y cambio clim&aacute;tico / energ&iacute;a.";
 choices[86][2] = "A y B son correctas";
 choices[86][3] = "Todas son incorrectas";
 answers[86] = choices[86][2];
 units[86] = "30";
 comments[86] = "Id Pregunta: 10545. ";


//  Id pregunta: 10757 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  &iquest;En cu&aacute;l de los siguientes puede participar actores del sector privado? ";
 choices[87]= new Array();
 choices[87][0] = "El Consejo de Seguridad Nacional.";
 choices[87][1] = "El Comit&eacute; Especializado de Ciberseguridad.";
 choices[87][2] = "El Comit&eacute; Especializado de Situaci&oacute;n.";
 choices[87][3] = "El Consejo Ejecutivo de Ciberseguridad.";
 answers[87] = choices[87][1];
 units[87] = "43";
 comments[87] = "Id Pregunta: 10757. ";


//  Id pregunta: 10828 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  En la Interfaz de Gesti&oacute;n de Proyectos de M&Eacute;TRICA v3, se&ntilde;ale entre los siguientes un producto correcto de salida que tiene la tarea &quot;GPI 1.1, identificaci&oacute;n de elementos a desarrollar&quot; en el caso de desarrollo estructurado:";
 choices[88]= new Array();
 choices[88][0] = "Planificaci&oacute;n General del Proyecto: Estrategia de desarrollo estructurado.";
 choices[88][1] = "Cat&aacute;logo de productos a generar.";
 choices[88][2] = "Cat&aacute;logo de clases.";
 choices[88][3] = "Cat&aacute;logo de entidades.";
 answers[88] = choices[88][3];
 units[88] = "86";
 comments[88] = "Id Pregunta: 10828. Examen GSI 2014";


//  Id pregunta: 10950 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  &iquest;C&uacute;al de las siguientes opciones es un sistema de gesti&oacute;n de contenidos?";
 choices[89]= new Array();
 choices[89][0] = "MongoDB";
 choices[89][1] = "Redis";
 choices[89][2] = "Cassandra";
 choices[89][3] = "Drupal";
 answers[89] = choices[89][3];
 units[89] = "95";
 comments[89] = "Id Pregunta: 10950. TIC A1 AGE 2014";


//  Id pregunta: 10952 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  En la estructura de un certificado X.509 v3 NO es obligatorio:";
 choices[90]= new Array();
 choices[90][0] = "El n&uacute;mero de serie.";
 choices[90][1] = "La validez no antes de.";
 choices[90][2] = "El identificador &uacute;nico de emisor.";
 choices[90][3] = "El emisor.";
 answers[90] = choices[90][2];
 units[90] = "73";
 comments[90] = "Id Pregunta: 10952. TIC A1 AGE 2014";


//  Id pregunta: 11074 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;A cual de las siguientes &aacute;reas debe la tecnolog&iacute;a ayudar a dar soporte durante la fase de Dise&ntilde;o del Servicio en el ciclo de Vida del Servicio?";
 choices[91]= new Array();
 choices[91][0] = "Dise&ntilde;o de hardware y software";
 choices[91][1] = "Dise&ntilde;o del entorno y dise&ntilde;o de los procesos";
 choices[91][2] = "Dise&ntilde;o de datos";
 choices[91][3] = "Todas ellas";
 answers[91] = choices[91][3];
 units[91] = "98";
 comments[91] = "Id Pregunta: 11074. ";


//  Id pregunta: 11232 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  SAAJ son las siglas de un API de Java que significa";
 choices[92]= new Array();
 choices[92][0] = "Service with Attachments API for Java.";
 choices[92][1] = "SOAP without Attachments API for Java.";
 choices[92][2] = "SOAP with Attachments API for Java.";
 choices[92][3] = "El acr&oacute;nimo est&aacute; invertido, realmente es Java Authentication and Authorization Service (JAAS).";
 answers[92] = choices[92][2];
 units[92] = "116";
 comments[92] = "Id Pregunta: 11232. ";


//  Id pregunta: 11289 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  En un gestor documental t&iacute;pico &iquest;d&oacute;nde se realiza el almacenamiento?";
 choices[93]= new Array();
 choices[93][0] = "Los metadatos en el Sistema de Ficheros, los documentos en Base de Datos";
 choices[93][1] = "Los metadatos en Base de Datos, los documentos en el Sistema de Ficheros";
 choices[93][2] = "Metadatos y documentos se almacenan en Base de Datos";
 choices[93][3] = "Ninguna de las anteriores";
 answers[93] = choices[93][1];
 units[93] = "95";
 comments[93] = "Id Pregunta: 11289. ";


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


//  Id pregunta: 11398 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes situaciones deber&iacute;a ser tratada como una incidencia?: 1. Un usuario es incapaz de acceder a un servicio durante el horario de servicio; 2. Un miembro autorizado del personal TI no puede acceder a un servicio durante el horario de servicio; 3. Un componente de red falla pero el usuario no percibe ninguna alteraci&oacute;n del servicio; 4. Un usuario contacta con el centro de servicio para informar que una aplicaci&oacute;n presenta un rendimiento lento";
 choices[95]= new Array();
 choices[95][0] = "Todas las anteriores";
 choices[95][1] = "Solo 1 y 4";
 choices[95][2] = "Solo 2 y 3";
 choices[95][3] = "Ninguna de las anteriores";
 answers[95] = choices[95][0];
 units[95] = "98";
 comments[95] = "Id Pregunta: 11398. ";


//  Id pregunta: 11451 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Seg&uacute;n la Ley 9/2014, el Gobierno, al administrar el espectro radioel&eacute;ctrico, debe:";
 choices[96]= new Array();
 choices[96][0] = "Determinar los niveles de emisi&oacute;n radioel&eacute;ctrica tolerable.";
 choices[96][1] = "Establecer el procedimiento para reasignar el uso de las bandas para un uso m&aacute;s eficiente del espectro.";
 choices[96][2] = "Utilizar el espectro de forma adecuada.";
 choices[96][3] = "Todas son atribuciones del Gobierno.";
 answers[96] = choices[96][3];
 units[96] = "110";
 comments[96] = "Id Pregunta: 11451. ";


//  Id pregunta: 11459 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Seg&uacute;n la Ley 9/2014, el Gobierno, en relaci&oacute;n a la administraci&oacute;n del dominio p&uacute;blico radioel&eacute;ctrico, establecer&aacute;:";
 choices[97]= new Array();
 choices[97][0] = "La adecuada utilizaci&oacute;n del espectro mediante el empleo de equipos p&uacute;blicos.";
 choices[97][1] = "La correcta utilizaci&oacute;n de frecuencias por parte de los operadores.";
 choices[97][2] = "La inspecci&oacute;n por un ente privado del nivel radioel&eacute;ctrico tolerable.";
 choices[97][3] = "Ninguna de las anteriores.";
 answers[97] = choices[97][3];
 units[97] = "110";
 comments[97] = "Id Pregunta: 11459. ";


//  Id pregunta: 11520 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Al instalar un cortafuegos en un servidor web, a&ntilde;adimos un mecanismo de salvaguarda que incrementa los niveles de:";
 choices[98]= new Array();
 choices[98][0] = "Confidencialidad.";
 choices[98][1] = "Disponibilidad.";
 choices[98][2] = "Integridad.";
 choices[98][3] = "Todas las anteriores.";
 answers[98] = choices[98][3];
 units[98] = "72";
 comments[98] = "Id Pregunta: 11520. NULL";


//  Id pregunta: 11733 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Si un equipo tiene una aver&iacute;a &iquest;cu&aacute;l de los siguientes indicadores nos da informaci&oacute;n sobre el tiempo medio requerido para reparar dicha aver&iacute;a?";
 choices[99]= new Array();
 choices[99][0] = "MTBF";
 choices[99][1] = "MTBR";
 choices[99][2] = "MTTR";
 choices[99][3] = "MTTF";
 answers[99] = choices[99][2];
 units[99] = "32";
 comments[99] = "Id Pregunta: 11733. ";


