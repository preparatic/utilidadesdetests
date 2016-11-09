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

//  Id pregunta: 1688 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  &iquest;Qu&eacute; es FALSO respecto al NRC?";
 choices[0]= new Array();
 choices[0][0] = "Es un elemento utilizado en la pasarela de pago PISTA";
 choices[0][1] = "Sus siglas significan: N&uacute;mero de Referencia Completo";
 choices[0][2] = "Se compone del n&uacute;mero de justificante m&aacute;s unos caracteres de control";
 choices[0][3] = "Para obtener los caracteres de control se aplica la funci&oacute;n MAC del algoritmo DES a los datos de la operaci&oacute;n, mediante la clave privada de la entidad";
 answers[0] = choices[0][0];
 units[0] = "70";
 comments[0] = "Id Pregunta: 1688. NULL";


//  Id pregunta: 1836 AÃ±o de creación de pregunta: 2006-01-01
 questions[1]= "2)  El comercio electr&oacute;nico que se produce cuando se realiza una venta de un producto por Internet se identifica como:";
 choices[1]= new Array();
 choices[1][0] = "B2B";
 choices[1][1] = "B2C";
 choices[1][2] = "B2A";
 choices[1][3] = "B2G";
 answers[1] = choices[1][1];
 units[1] = "70";
 comments[1] = "Id Pregunta: 1836. NULL";


//  Id pregunta: 1840 AÃ±o de creación de pregunta: 2006-01-01
 questions[2]= "3)  Se&ntilde;ale cu&aacute;l de las siguientes tecnolog&iacute;as no est&aacute; relacionada con el comercio electr&oacute;nico:";
 choices[2]= new Array();
 choices[2][0] = "EDIFACT";
 choices[2][1] = "ODETTE";
 choices[2][2] = "ANSI X13";
 choices[2][3] = "XML";
 answers[2] = choices[2][2];
 units[2] = "70";
 comments[2] = "Id Pregunta: 1840. NULL";


//  Id pregunta: 1841 AÃ±o de creación de pregunta: 2006-01-01
 questions[3]= "4)  Se&ntilde;ale  la correcta:";
 choices[3]= new Array();
 choices[3][0] = "El protocolo de seguridad en comercio electr&oacute;nico  3D Secure es utilizado por Visa y MarterCard";
 choices[3][1] = "Visa utiliza el protocolo Verified by Visa";
 choices[3][2] = "MasterCard Secure Code es el protocolo utilizado por Master Card";
 choices[3][3] = "Todas las anteriores";
 answers[3] = choices[3][3];
 units[3] = "70";
 comments[3] = "Id Pregunta: 1841. NULL";


//  Id pregunta: 2970 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  &iquest;Cu&aacute;les de los siguientes mecanismo no sirve para garantizar la privacidad de las comunicaciones por correo electr&oacute;nico?";
 choices[4]= new Array();
 choices[4][0] = "GPG";
 choices[4][1] = "PGP";
 choices[4][2] = "S/MIME";
 choices[4][3] = "Todos los anteriores valen";
 answers[4] = choices[4][3];
 units[4] = "106";
 comments[4] = "Id Pregunta: 2970. ";


//  Id pregunta: 2974 AÃ±o de creación de pregunta: 2004-01-01
 questions[5]= "6)  X.500 se constituye como un estandar de servicios de directorio electr&oacute;nico con caracter&iacute;sticas de:";
 choices[5]= new Array();
 choices[5][0] = "Actualizaci&oacute;n";
 choices[5][1] = "Acceso y actualizaci&oacute;n";
 choices[5][2] = "Modificaci&oacute;n ";
 choices[5][3] = "Ninguna de las anteriores";
 answers[5] = choices[5][1];
 units[5] = "106";
 comments[5] = "Id Pregunta: 2974. Examen Julio 2003";


//  Id pregunta: 2999 AÃ±o de creación de pregunta: 2004-01-01
 questions[6]= "7)  En 1988, la CCITT cre&oacute; el est&aacute;ndar X.500, sobre servicios de directorio que, posteriormente, fue adoptado por la ISO. El est&aacute;ndar X.500 organiza las entradas en el directorio de manera:";
 choices[6]= new Array();
 choices[6][0] = "Asociativa";
 choices[6][1] = "Jer&aacute;rquica";
 choices[6][2] = "En estrella";
 choices[6][3] = "Como una pila FIFO";
 answers[6] = choices[6][1];
 units[6] = "106";
 comments[6] = "Id Pregunta: 2999. ";


//  Id pregunta: 3055 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  Dentro de la norma X.400, &iquest; qu&eacute; se entiende por Agente de Usuario (UA)?:";
 choices[7]= new Array();
 choices[7][0] = "El usuario que puede ser una persona o programa de aplicaci&oacute;n";
 choices[7][1] = "Agente que almacena y retransmite los mensajes destinados a un usuario";
 choices[7][2] = "Agente que enruta los mensajes.";
 choices[7][3] = "Proceso de aplicaci&oacute;n que interactua con el sistema de transferencia de mensajes";
 answers[7] = choices[7][3];
 units[7] = "106";
 comments[7] = "Id Pregunta: 3055. ";


//  Id pregunta: 3081 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Las siglas ADMD y PRMD se usan dentro la norma X.400 refiri&eacute;ndose a:";
 choices[8]= new Array();
 choices[8][0] = "Estas siglas no se usan en dicha norma";
 choices[8][1] = "Dominios p&uacute;blicos o privados";
 choices[8][2] = "Administraci&oacute;n y privacidad de los datos";
 choices[8][3] = "Ninguna de las respuestas anteriores";
 answers[8] = choices[8][1];
 units[8] = "106";
 comments[8] = "Id Pregunta: 3081. ";


//  Id pregunta: 3110 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;A qu&eacute; hace referencia el est&aacute;ndar IMAP-4?:";
 choices[9]= new Array();
 choices[9][0] = "Correo electr&oacute;nico";
 choices[9][1] = "Compresi&oacute;n de datos";
 choices[9][2] = "Directorio electr&oacute;nico";
 choices[9][3] = "Protocolo de transporte OSI";
 answers[9] = choices[9][0];
 units[9] = "106";
 comments[9] = "Id Pregunta: 3110. ";


//  Id pregunta: 3158 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Cu&aacute;l de las siguientes afirmaciones no es cierta respecto a los nuevos dominios de primer nivel de internet introducidos en noviembre de 2000 ?";
 choices[10]= new Array();
 choices[10][0] = "Los dominios .name est&aacute;n reservados a individuos y se podr&aacute;n reservar nombres de dominio con la estructura 'MiNombre.MiApellido.name'";
 choices[10][1] = "Los dominios .pro est&aacute;n reservados a profesionales de determinadas categor&iacute;as, agrupados en subdominios, existiendo inicialmente para m&eacute;dicos (.med.pro), abogados (.law.pro) y auditores (.cpa.pro)";
 choices[10][2] = "el dominio .coop est&aacute; reservado a cooperativas y asociaciones de todo tipo (ONGs, partidos pol&iacute;ticos, asociaciones deportivas&hellip;), y el nombre del dominio deber&aacute; obligatoriamente ser el de la asociaci&oacute;n o cooperativa";
 choices[10][3] = "Los dominios .aero y .museum est&aacute;n reservados a la industria y servicios a&eacute;reos y a la comunidad de museos respectivamente";
 answers[10] = choices[10][2];
 units[10] = "112";
 comments[10] = "Id Pregunta: 3158. ";


//  Id pregunta: 3207 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  El c&oacute;digo de los mensajes HTTP de respuesta que indican &eacute;xito en la petici&oacute;n comienzan por:";
 choices[11]= new Array();
 choices[11][0] = "1";
 choices[11][1] = "2";
 choices[11][2] = "3";
 choices[11][3] = "5";
 answers[11] = choices[11][1];
 units[11] = "112";
 comments[11] = "Id Pregunta: 3207. ";


//  Id pregunta: 3209 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  El concepto y primer desarrollo del servicio WWW se debe a:";
 choices[12]= new Array();
 choices[12][0] = "Vinton Cerf";
 choices[12][1] = "Leonard Kleinrock";
 choices[12][2] = "Robert Kahn";
 choices[12][3] = "Tim Berners-Lee";
 answers[12] = choices[12][3];
 units[12] = "112";
 comments[12] = "Id Pregunta: 3209. ";


//  Id pregunta: 3213 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  El error 404 seg&uacute;n el protocolo HTTP indica:";
 choices[13]= new Array();
 choices[13][0] = "mensaje de petici&oacute;n no reconocido";
 choices[13][1] = "redirecci&oacute;n por cambio de ubicaci&oacute;n del objeto pedido";
 choices[13][2] = "versi&oacute;n HTTP no soportada";
 choices[13][3] = "el objeto pedido no se encuentra en el servidor";
 answers[13] = choices[13][3];
 units[13] = "112";
 comments[13] = "Id Pregunta: 3213. ";


//  Id pregunta: 3216 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  El est&aacute;ndar de correo electr&oacute;nico desarrollado por ITU-T dentro de OSI es:";
 choices[14]= new Array();
 choices[14][0] = "SMTP (Simple Mail Transfer Protocol)";
 choices[14][1] = "MHS - X.400 (Message Handling System)";
 choices[14][2] = "PEM (Private Enhanced Mail)";
 choices[14][3] = "MIME (Multipurpose Internet Mail Extension)";
 answers[14] = choices[14][1];
 units[14] = "106";
 comments[14] = "Id Pregunta: 3216. ";


//  Id pregunta: 3238 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  &iquest;Cu&aacute;l es el puerto habitual usado por una conexi&oacute;n Telnet?:";
 choices[15]= new Array();
 choices[15][0] = "15";
 choices[15][1] = "21";
 choices[15][2] = "23";
 choices[15][3] = "80";
 answers[15] = choices[15][2];
 units[15] = "100, 112";
 comments[15] = "Id Pregunta: 3238. ";


//  Id pregunta: 3294 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  &iquest;Qu&eacute; hecho no es correcto en la evoluci&oacute;n del protocolo TCP/IP?:";
 choices[16]= new Array();
 choices[16][0] = "El desarrollador inicial fue ARPANET";
 choices[16][1] = "La publicaci&oacute;n fue por IAB";
 choices[16][2] = "La financiaci&oacute;n corri&oacute; a cargo de DARPA";
 choices[16][3] = "El desarrollador final fue CERN";
 answers[16] = choices[16][3];
 units[16] = "100,112";
 comments[16] = "Id Pregunta: 3294. ";


//  Id pregunta: 3320 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  &iquest;Sabe qu&eacute; organismo defini&oacute; el est&aacute;ndar TCP/IP?:";
 choices[17]= new Array();
 choices[17][0] = "American National Standard Institute (ANSI)";
 choices[17][1] = "Departamento de Defensa de EE.UU.";
 choices[17][2] = "International Standards Organization (ISO)";
 choices[17][3] = "Institute for Electrical and Electronic Engineers (IEEE)";
 answers[17] = choices[17][1];
 units[17] = "100,112";
 comments[17] = "Id Pregunta: 3320. ";


//  Id pregunta: 3333 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Bajo el protocolo PEM:";
 choices[18]= new Array();
 choices[18][0] = "Se distinguen 3 tipos de mensajes";
 choices[18][1] = "Un mensaje MIC-CLEAR soporta confidencialidad";
 choices[18][2] = "Un mensaje MIC-Only solo envia la cabecera";
 choices[18][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[18] = choices[18][0];
 units[18] = "106";
 comments[18] = "Id Pregunta: 3333. ";


//  Id pregunta: 3359 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  De los siguientes, &iquest;cu&aacute;l no es un servicio ofrecido por la norma FTAM de OSI?:";
 choices[19]= new Array();
 choices[19][0] = "Seguridad, gesti&oacute;n de permisos de acceso";
 choices[19][1] = "Transferencia, mover ficheros o parte de ellos";
 choices[19][2] = "Acceso, localizaci&oacute;n de un registro";
 choices[19][3] = "Gesti&oacute;n, creaci&oacute;n / borrado de ficheros";
 answers[19] = choices[19][0];
 units[19] = "112";
 comments[19] = "Id Pregunta: 3359. ";


//  Id pregunta: 3417 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  IAB, IETF, IRTF, IESG son:";
 choices[20]= new Array();
 choices[20][0] = "protocolos de Internet";
 choices[20][1] = "organismos relacionados con Internet";
 choices[20][2] = "organismos de estandarizaci&oacute;n en el campo de redes tanto inal&aacute;mbricas como cableadas";
 choices[20][3] = "protocolos de nivel de transporte, en particular de encaminamiento y optimizaci&oacute;n de rutas";
 answers[20] = choices[20][1];
 units[20] = "112";
 comments[20] = "Id Pregunta: 3417. ";


//  Id pregunta: 3462 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  El protocolo TFTP (sic):";
 choices[21]= new Array();
 choices[21][0] = "Significa Trivial FTP";
 choices[21][1] = "Utiliza el conocido puerto 69";
 choices[21][2] = "Deber&iacute;a ser protegido especificamente en el Firewall";
 choices[21][3] = "Todas las anteriores respuestas son correctas";
 answers[21] = choices[21][3];
 units[21] = "112";
 comments[21] = "Id Pregunta: 3462. ";


//  Id pregunta: 3471 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  El servicio para navegar usando men&uacute;s que predominaba en Internet antes de la aparici&oacute;n de WWW se denomina:";
 choices[22]= new Array();
 choices[22][0] = "WAIS";
 choices[22][1] = "Gopher";
 choices[22][2] = "Archie";
 choices[22][3] = "Teletex";
 answers[22] = choices[22][1];
 units[22] = "112";
 comments[22] = "Id Pregunta: 3471. ";


//  Id pregunta: 3510 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  En el protocolo HTTP, el m&eacute;todo de cliente TRACE:";
 choices[23]= new Array();
 choices[23][0] = "Pide al servidor que se declare a s&iacute; mismo dentro de la cabecera";
 choices[23][1] = "Pide a los proxies que se declaren a s&iacute; mismo dentro de la cabecera";
 choices[23][2] = "No existe";
 choices[23][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[23] = choices[23][1];
 units[23] = "112";
 comments[23] = "Id Pregunta: 3510. ";


//  Id pregunta: 3525 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  En Internet, los distintos tipos de servicios utilizan protocolos espec&iacute;ficos. De las siguientes parejas servicios-protocolos, una es incorrecta. Se&ntilde;&aacute;lela:";
 choices[24]= new Array();
 choices[24][0] = "P&aacute;ginas Web-HTTP";
 choices[24][1] = "Correo electr&oacute;nico-SNMP";
 choices[24][2] = "Grupos de noticias-NNTP";
 choices[24][3] = "Transferencia de ficheros-FTP";
 answers[24] = choices[24][1];
 units[24] = "112";
 comments[24] = "Id Pregunta: 3525. ";


//  Id pregunta: 3616 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  La linea &quot;Connection: Keep Alive&quot;, dentro de un mensaje HTTP significa:";
 choices[25]= new Array();
 choices[25][0] = "Dice al servidor web que cierre la conexi&oacute;n";
 choices[25][1] = "Dice al servidor web que cierre la conexi&oacute;n desues de la peticion del cliente";
 choices[25][2] = "El resultado es el mismo en HTTP 1.0 y HTTP 1.1";
 choices[25][3] = "Le dice al servidor que cierra la conexi&oacute;n cuando el cliente lo pida";
 answers[25] = choices[25][3];
 units[25] = "112";
 comments[25] = "Id Pregunta: 3616. ";


//  Id pregunta: 3755 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  OFTP es:";
 choices[26]= new Array();
 choices[26][0] = "Una versi&oacute;n de TCP/IP para OS/2";
 choices[26][1] = "Odette FTP, una variaci&oacute;n de FTP dise&ntilde;ada para intercambiar ficheros en el mundo de las empresas de automoci&oacute;n";
 choices[26][2] = "Other FTP, una implementaci&oacute;n libre de FTP que es compatible con cualquier plataforma existente en el mercado";
 choices[26][3] = "Own FTP, FTP dise&ntilde;ado por Microsoft para optimizaci&oacute;n del rendimiento del intercambio de archivos entre sus servidores";
 answers[26] = choices[26][1];
 units[26] = "112";
 comments[26] = "Id Pregunta: 3755. ";


//  Id pregunta: 3774 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  POP e IMAP son:";
 choices[27]= new Array();
 choices[27][0] = "protocolos de entrega de correo para servidores";
 choices[27][1] = "protocolos de acceso al correo para clientes";
 choices[27][2] = "Ninguna de las respuestas anteriores es correcta";
 choices[27][3] = "las respuestas a) y b) son correctas";
 answers[27] = choices[27][1];
 units[27] = "106";
 comments[27] = "Id Pregunta: 3774. ";


//  Id pregunta: 3811 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  Seg&uacute;n las RFCs 822 y 2822, sobre el formato de los mensajes de correo electr&oacute;nico, &eacute;stos se componen de:";
 choices[28]= new Array();
 choices[28][0] = "sobre, cabeceras y cuerpo";
 choices[28][1] = "cabeceras, cuerpo y cola";
 choices[28][2] = "sobre, cabeceras, cuerpo y cola";
 choices[28][3] = "cabeceras y cuerpo";
 answers[28] = choices[28][0];
 units[28] = "106";
 comments[28] = "Id Pregunta: 3811. ";


//  Id pregunta: 3845 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  Tengo una p&aacute;gina web personal, pero para financiar gastos tengo alojados &quot;banners&quot;.&iquest;En qu&eacute; me afecta la LSSI?: ";
 choices[29]= new Array();
 choices[29][0] = "No me afecta para nada";
 choices[29][1] = "La LSSI es aplicable";
 choices[29][2] = "S&oacute;lo para la publicidad";
 choices[29][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[29] = choices[29][1];
 units[29] = "112,30";
 comments[29] = "Id Pregunta: 3845. ";


//  Id pregunta: 3874 AÃ±o de creación de pregunta: 2004-01-01
 questions[30]= "31)  &iquest;Qu&eacute; es cierto respecto al protocolo POP3?";
 choices[30]= new Array();
 choices[30][0] = "Utiliza el protocolo TCP";
 choices[30][1] = "Utiliza servicios de DNS";
 choices[30][2] = "Permite eliminar los mensajes del buz&oacute;n";
 choices[30][3] = "A y c son ciertas";
 answers[30] = choices[30][3];
 units[30] = "106";
 comments[30] = "Id Pregunta: 3874. Tanenbaum";


//  Id pregunta: 3879 AÃ±o de creación de pregunta: 2004-01-01
 questions[31]= "32)  El protocolo SMTP";
 choices[31]= new Array();
 choices[31][0] = "Define el formato de los mensajes";
 choices[31][1] = "Define la transferencia de mensajes";
 choices[31][2] = "Pone limitaciones al formato del mensaje";
 choices[31][3] = "b y c son ciertas";
 answers[31] = choices[31][3];
 units[31] = "106";
 comments[31] = "Id Pregunta: 3879. Tanenbaum";


//  Id pregunta: 3938 AÃ±o de creación de pregunta: 2003-01-01
 questions[32]= "33)  &iquest;Qu&eacute; funci&oacute;n tiene el protocolo ICMP?";
 choices[32]= new Array();
 choices[32][0] = "Control";
 choices[32][1] = "Transporte de paquetes";
 choices[32][2] = "Redirecci&oacute;n de tramas";
 choices[32][3] = "Control de congesti&oacute;n";
 answers[32] = choices[32][0];
 units[32] = "112";
 comments[32] = "Id Pregunta: 3938. ";


//  Id pregunta: 3968 AÃ±o de creación de pregunta: 2003-01-01
 questions[33]= "34)  Sobre  SNMP indicar la correcta";
 choices[33]= new Array();
 choices[33][0] = "Conexi&oacute;n IP orientada a conexi&oacute;n";
 choices[33][1] = " Conexi&oacute;n IP no orientada a conexi&oacute;n";
 choices[33][2] = "Conexi&oacute;n UDP no orientada a conexi&oacute;n";
 choices[33][3] = "Conexi&oacute;n TCP orientada a conexi&oacute;n";
 answers[33] = choices[33][2];
 units[33] = "112";
 comments[33] = "Id Pregunta: 3968. ";


//  Id pregunta: 3970 AÃ±o de creación de pregunta: 2003-01-01
 questions[34]= "35)  Un registro MX en un servidor DNS, &iquest; a qu&eacute; hace referencia?";
 choices[34]= new Array();
 choices[34][0] = "al servidor DNS principal";
 choices[34][1] = "al servidor web asociado al dominio";
 choices[34][2] = "al servidor de correo asociado al dominio";
 choices[34][3] = "al servidor seguro asociado al dominio";
 answers[34] = choices[34][2];
 units[34] = "106";
 comments[34] = "Id Pregunta: 3970. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 4005 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  Con respecto al est&aacute;ndar de servicios de directorio X500 , el protocolo utilizado para intercambiar informaci&oacute;n administrativa entre dos DSA&rsquo;s (Directory Service Agent) se denomina:";
 choices[35]= new Array();
 choices[35][0] = "DMO";
 choices[35][1] = "DOP";
 choices[35][2] = "DMD";
 choices[35][3] = "DISP";
 answers[35] = choices[35][1];
 units[35] = "106";
 comments[35] = "Id Pregunta: 4005. ";


//  Id pregunta: 4006 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  En el protocolo de correo electr&oacute;nico SMTP, el formato de las cabeceras sigue el est&aacute;ndar RFC-822. Indique cu&aacute;l es la notaci&oacute;n empleada en la escritura de las cabeceras de acuerdo con dicho est&aacute;ndar RFC-822:";
 choices[36]= new Array();
 choices[36][0] = "ASCII";
 choices[36][1] = "ASN.1";
 choices[36][2] = "Base 64";
 choices[36][3] = "BNF";
 answers[36] = choices[36][3];
 units[36] = "106";
 comments[36] = "Id Pregunta: 4006. ";


//  Id pregunta: 4009 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  &iquest;Qu&eacute; recomendaci&oacute;n del mundo Internet define el formato de los mensajes de correo electr&oacute;nico?";
 choices[37]= new Array();
 choices[37][0] = "RFC 821";
 choices[37][1] = "RFC 820";
 choices[37][2] = "RFC 822";
 choices[37][3] = "RFC 823";
 answers[37] = choices[37][2];
 units[37] = "106";
 comments[37] = "Id Pregunta: 4009. ";


//  Id pregunta: 4010 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  Indique la afirmaci&oacute;n correcta sobre los servicios de directorio:";
 choices[38]= new Array();
 choices[38][0] = "X.500 y LDAP codifican la informaci&oacute;n en ASN.1";
 choices[38][1] = "X.500 codifica la informaci&oacute;n en ASN.1 mientras que LDAP usa cadenas de caracteres";
 choices[38][2] = "LDAP codifica la informaci&oacute;n en ASN.1 mientras X.500 usa cadenas de caracteres";
 choices[38][3] = "X.500 y LDAP usan cadenas de caracteres para codificar la informaci&oacute;n";
 answers[38] = choices[38][1];
 units[38] = "106";
 comments[38] = "Id Pregunta: 4010. ";


//  Id pregunta: 4069 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  El organismo encargado de conceder los dominios .es";
 choices[39]= new Array();
 choices[39][0] = "El Ministerio de Industria, Comercio y Turismo";
 choices[39][1] = "RedIRIS";
 choices[39][2] = "InterNIC";
 choices[39][3] = "Red.es";
 answers[39] = choices[39][3];
 units[39] = "112";
 comments[39] = "Id Pregunta: 4069. ";


//  Id pregunta: 4111 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  Se&ntilde;ale la afirmaci&oacute;n incorrecta:";
 choices[40]= new Array();
 choices[40][0] = "En las  redes P2P no existen clientes ni servidores fijos.";
 choices[40][1] = "Se necesitan servidores intermedios que mantienen la relaci&oacute;n de direcciones IP  de los usuarios de la red.";
 choices[40][2] = "La informaci&oacute;n no puede ser intercambiada sin la intervenci&oacute;n de los servidores.";
 choices[40][3] = "Todas las respuestas son correctas.";
 answers[40] = choices[40][2];
 units[40] = "112";
 comments[40] = "Id Pregunta: 4111. ";


//  Id pregunta: 4115 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  Se&ntilde;ale la afirmaci&oacute;n incorrecta:";
 choices[41]= new Array();
 choices[41][0] = "Un &ldquo;Webcrawler&rdquo; es motor de b&uacute;squeda de nuevo contenido en Internet";
 choices[41][1] = "Un robot &ldquo;Spider&rdquo; navega por la red de una p&aacute;gina a otra recogiendo informaci&oacute;n de los sitios que visita, esta informaci&oacute;n es almacenada en la base de datos del motor de b&uacute;squeda.";
 choices[41][2] = "Los robots &ldquo;Wanderers&rdquo; o vagabundos miden el tama&ntilde;o de la red en n&ordm; de servidores.";
 choices[41][3] = "Todas las respuestas son ciertas";
 answers[41] = choices[41][3];
 units[41] = "112";
 comments[41] = "Id Pregunta: 4115. ";


//  Id pregunta: 4120 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  El lugar de almacenamiento temporal de las im&aacute;genes descargadas desde una p&aacute;gina Web se llama";
 choices[42]= new Array();
 choices[42][0] = "RAM";
 choices[42][1] = "disco duro";
 choices[42][2] = "cookie";
 choices[42][3] = "cache";
 answers[42] = choices[42][3];
 units[42] = "112";
 comments[42] = "Id Pregunta: 4120. ";


//  Id pregunta: 4171 AÃ±o de creación de pregunta: 2006-01-01
 questions[43]= "44)  &iquest;C&oacute;mo evita SSL un ataque de &quot;hombre en el medio&quot;?";
 choices[43]= new Array();
 choices[43][0] = "Usa certificados para autenticar la clave p&uacute;blica del servidor";
 choices[43][1] = "Usa un valor aleatorio &uacute;nico por conexi&oacute;n en el protocolo de intercambio de credenciales";
 choices[43][2] = "Usa claves de 128 bits";
 choices[43][3] = "Cada mensaje enviado incluye un n&uacute;mero de secuencia";
 answers[43] = choices[43][1];
 units[43] = "70";
 comments[43] = "Id Pregunta: 4171. ";


//  Id pregunta: 4428 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  &iquest;Cu&aacute;l de los siguientes no es una caracter&iacute;stica de la arquitectura de red de Internet?";
 choices[44]= new Array();
 choices[44][0] = "Arquitectura abierta";
 choices[44][1] = "Control centralizado";
 choices[44][2] = "Basada en TCP/IP";
 choices[44][3] = "Organizaci&oacute;n jer&aacute;rquica";
 answers[44] = choices[44][1];
 units[44] = "112";
 comments[44] = "Id Pregunta: 4428. ";


//  Id pregunta: 4721 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  La gesti&oacute;n de nombres de dominio bajo el c&oacute;digo correspondientes a Espa&ntilde;a .es la tiene legalmenteencomendada:";
 choices[45]= new Array();
 choices[45][0] = "Internic.es";
 choices[45][1] = "Red.es";
 choices[45][2] = "Mityc.es";
 choices[45][3] = " Netsol.es";
 answers[45] = choices[45][1];
 units[45] = "112";
 comments[45] = "Id Pregunta: 4721. Examen 2006 JCYL";


//  Id pregunta: 4732 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  En el servidor http Apache al configurarlo como HostnameLookUps On lo que hacemos es:";
 choices[46]= new Array();
 choices[46][0] = "Ver si la petici&oacute;n origen proviene de un sistema conocido a trav&eacute;s del fichero /etc/hosts para almacenar el nombre en el fichero de log";
 choices[46][1] = "Ver si la petici&oacute;n origen proviene de un sistema conocido a trav&eacute;s del servicio dns inverso para almacenar el nombre en el fichero de log";
 choices[46][2] = "Ver si la petici&oacute;n origen tiene un nombre asociado a trav&eacute;s del o los servicios de resoluci&oacute;n de nombres ip para almacenar el nombre en el fichero del log";
 choices[46][3] = "Almacena en el log la ip y tambi&eacute;n el nombre del sistema origen de la petici&oacute;n http";
 answers[46] = choices[46][2];
 units[46] = "112";
 comments[46] = "Id Pregunta: 4732. Examen 2006 JCYL";


//  Id pregunta: 4817 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos de ISOC (Internet Society) tiene la responsabilidad de desarrollar lasespecificaciones de est&aacute;ndares en Internet?";
 choices[47]= new Array();
 choices[47][0] = "IESG (Internet Engineering Steering Group)";
 choices[47][1] = "IETF (Internet Engineering Task Force)";
 choices[47][2] = "IAB (Internet Architecture Board)";
 choices[47][3] = "IANA (Internet Assigned Number Authority)";
 answers[47] = choices[47][1];
 units[47] = "112,42";
 comments[47] = "Id Pregunta: 4817. ";


//  Id pregunta: 5001 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  &iquest;Qu&eacute; es una aplicaci&oacute;n CRM en un sitio de e-commerce interactivo?:";
 choices[48]= new Array();
 choices[48][0] = "Es la aplicaci&oacute;n usada para administrar la relaci&oacute;n con los clientes, describir perfiles de compras y dise&ntilde;arcampa&ntilde;as de marketing directo on-line";
 choices[48][1] = "Es el Cargo Resource Management, o aplicaci&oacute;n utilizada para gestionar los recursos de carga en las ventas";
 choices[48][2] = "Es el programa que se ejecuta al recibir una petici&oacute;n de una p&aacute;gina web din&aacute;mica";
 choices[48][3] = "Es el Catalog Resource Management, o aplicaci&oacute;n que genera un catalogo on-line de los productosdisponibles para la venta";
 answers[48] = choices[48][0];
 units[48] = "70";
 comments[48] = "Id Pregunta: 5001. Examen TIC A 2007";


//  Id pregunta: 5011 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  &iquest;Cu&aacute;l de los siguientes es un requisito de seguridad en una transacci&oacute;n electr&oacute;nica en la que intervenga un mediode pago?:";
 choices[49]= new Array();
 choices[49][0] = "Simultaneidad";
 choices[49][1] = "Interactividad";
 choices[49][2] = "No repudio";
 choices[49][3] = "Automatizaci&oacute;n";
 answers[49] = choices[49][2];
 units[49] = "70";
 comments[49] = "Id Pregunta: 5011. Examen TIC A 2007";


//  Id pregunta: 5044 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre RSS es err&oacute;nea?:";
 choices[50]= new Array();
 choices[50][0] = "RSS es un formato para la sindicaci&oacute;n de contenidos de p&aacute;ginas web.";
 choices[50][1] = "RSS es un agregador de contenidos de diversas p&aacute;ginas webs de noticias";
 choices[50][2] = "RSS es parte de la familia de los formatos XML";
 choices[50][3] = "Es un acr&oacute;nimo de &quot;Really Simple Syndication&quot;";
 answers[50] = choices[50][1];
 units[50] = "112";
 comments[50] = "Id Pregunta: 5044. Examen TIC A 2007";


//  Id pregunta: 5157 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  El protocolo SET:";
 choices[51]= new Array();
 choices[51][0] = "Es un protocolo para la realizaci&oacute;n de transacciones de pago seguras a trav&eacute;s de Internet.";
 choices[51][1] = "Es un protocolo para juegos en red.";
 choices[51][2] = "Es un protocolo para la interconexi&oacute;n de chats en Internet.";
 choices[51][3] = "Es un protocolo para la transmisi&oacute;n de voz comprimida a trav&eacute;s de Internet.";
 answers[51] = choices[51][0];
 units[51] = "70";
 comments[51] = "Id Pregunta: 5157. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5611 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  &iquest;Cu&aacute;l de los siguientes conceptos se definen en X.500?";
 choices[52]= new Array();
 choices[52][0] = "DIB, que se comunica con el DSA utilizando el protocolo DAP. DOP, protocolo que define las pol&iacute;ticas para el intercambio de informaci&oacute;n entre dos DSA's. DMO que gestiona un dominio DMD";
 choices[52][1] = "DISP, que permite la replica de la informaci&oacute;n que almacena un DSA a otros DSAs dentro de un mismo DMD. DIT, donde se almacena la informaci&oacute;n en un directorio X.500. DOP, protocolo que define las pol&iacute;ticas para el intercambio de informaci&oacute;n entre dos DSA's. ";
 choices[52][2] = "DISP, que permite la replica de la informaci&oacute;n que almacena un DSA a otros DSAs dentro de un mismo DMD. DAP, que es el protocolo utilizado por un DUA para comunicarse con un DSA. DOP, protocolo que define las pol&iacute;ticas para el intercambio de informaci&oacute;n entre dos DSA's. ";
 choices[52][3] = "Ninguna de las anteriores";
 answers[52] = choices[52][2];
 units[52] = "106";
 comments[52] = "Id Pregunta: 5611. ";


//  Id pregunta: 5945 AÃ±o de creación de pregunta: 2009-01-01
 questions[53]= "54)  &iquest;Cu&aacute;l de los siguientes no facilita la ergonom&iacute;a de un sitio Web 2.0?";
 choices[53]= new Array();
 choices[53][0] = "Universos Netvibes";
 choices[53][1] = "gadgets sociales";
 choices[53][2] = "widgets";
 choices[53][3] = "Mashups";
 answers[53] = choices[53][1];
 units[53] = "120";
 comments[53] = "Id Pregunta: 5945. ";


//  Id pregunta: 5947 AÃ±o de creación de pregunta: 2009-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l de las siguientes no es una ventaja de un sistema de gesti&oacute;n de identidades respecto de la gesti&oacute;n de usuarios tradicional?";
 choices[54]= new Array();
 choices[54][0] = "Proporciona un punto &uacute;nico de provisi&oacute;n de usuarios para todos los sistemas de la organizaci&oacute;n";
 choices[54][1] = "Sincronizaci&oacute;n entre sistemas";
 choices[54][2] = "No existe una gesti&oacute;n centralizada del ciclo de vida de los usuarios";
 choices[54][3] = "Unificaci&oacute;n de contrase&ntilde;as en recursos";
 answers[54] = choices[54][2];
 units[54] = "118";
 comments[54] = "Id Pregunta: 5947. ";


//  Id pregunta: 5949 AÃ±o de creación de pregunta: 2009-01-01
 questions[55]= "56)  &iquest;Cu&aacute;l de las siguientes no es un beneficio de un sistema de gesti&oacute;n de identidades respecto de la gesti&oacute;n de usuarios tradicional?";
 choices[55]= new Array();
 choices[55][0] = "Inexistencia de un interfaz de self-service para el usuario final";
 choices[55][1] = "Informes de auditoria";
 choices[55][2] = "Visi&oacute;n global del perfil del usuario";
 choices[55][3] = "Administraci&oacute;n delegada de usuarios";
 answers[55] = choices[55][0];
 units[55] = "118";
 comments[55] = "Id Pregunta: 5949. ";


//  Id pregunta: 5950 AÃ±o de creación de pregunta: 2009-01-01
 questions[56]= "57)  &iquest;Qu&eacute; es un sistema IDM (Identity Manager)?";
 choices[56]= new Array();
 choices[56][0] = "Es una plataforma que permite gestionar desde un s&oacute;lo punto el ciclo de vida de una identidad";
 choices[56][1] = "Es cualquier sistema de gesti&oacute;n de usuarios.";
 choices[56][2] = "Es una plataforma de gesti&oacute;n de PKI para proporcionar tarjetas de identificaci&oacute;n a los empleados de la organizaci&oacute;n.";
 choices[56][3] = "Es una plataforma que impide la descentralizaci&oacute;n de la administraci&oacute;n de los sistemas de control de acceso basados en roles.";
 answers[56] = choices[56][0];
 units[56] = "118";
 comments[56] = "Id Pregunta: 5950. ";


//  Id pregunta: 5989 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  Un servidor de telnet permite:";
 choices[57]= new Array();
 choices[57][0] = "A los usuarios entrar en otro ordenador y llevar a cabo tareas como si estuviesen trabajando en el ordenador remoto.";
 choices[57][1] = "Intercambiar informaci&oacute;n ofreciendo capacidades de discusi&oacute;n en tiempo real.";
 choices[57][2] = "Gestionar listas de correo, ya sea para env&iacute;o masivo o para gestionar foros de discusi&oacute;n.";
 choices[57][3] = "Distribuir contenido multimedia a las aplicaciones cliente.";
 answers[57] = choices[57][0];
 units[57] = "112";
 comments[57] = "Id Pregunta: 5989. TIC A 2009";


//  Id pregunta: 6042 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  En el &aacute;mbito de la Gesti&oacute;n de Identidades, &iquest;c&oacute;mo se denomina al conjunto de proveedores de servicios, identidades y atributos que disponen de acuerdos de servicio, comerciales y de negocio para que el usuario pueda realizar transacciones de forma transparente y sencilla entre todos ellos?";
 choices[58]= new Array();
 choices[58][0] = "Web Access Management";
 choices[58][1] = "WS - Security";
 choices[58][2] = "C&iacute;rculo de Confianza (CoT)";
 choices[58][3] = "SAML";
 answers[58] = choices[58][2];
 units[58] = "118";
 comments[58] = "Id Pregunta: 6042. ";


//  Id pregunta: 6043 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  El proyecto Fidelity, de gesti&oacute;n de identidad federado en &aacute;mbito europeo, est&aacute; basado en est&aacute;ndares de:";
 choices[59]= new Array();
 choices[59][0] = "W3C";
 choices[59][1] = "IEEE";
 choices[59][2] = "CEN";
 choices[59][3] = "Liberty Alliance";
 answers[59] = choices[59][3];
 units[59] = "118";
 comments[59] = "Id Pregunta: 6043. ";


//  Id pregunta: 6046 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  En el &aacute;mbito del Single Sign-On, &iquest;c&oacute;mo se denomina a la informaci&oacute;n confidencial agrupada (nombre de usuario, contrase&ntilde;a, etc) que se precisa para acceder a las aplicaciones?";
 choices[60]= new Array();
 choices[60][0] = "Credenciales";
 choices[60][1] = "Federaci&oacute;n";
 choices[60][2] = "Cookies";
 choices[60][3] = "Login";
 answers[60] = choices[60][0];
 units[60] = "118";
 comments[60] = "Id Pregunta: 6046. ";


//  Id pregunta: 6154 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  &iquest;Cu&aacute;ntas versiones de NFS hay actualmente en uso?";
 choices[61]= new Array();
 choices[61][0] = "Tres: NFSv2, NFSv3 y NFSv4.";
 choices[61][1] = "Dos: NFSv3 y NFSv4.";
 choices[61][2] = "Tres: NFSv3, NFSv4 y NFSv5.";
 choices[61][3] = "Tres: NFSv1, NFSv2 y NFSv3.";
 answers[61] = choices[61][0];
 units[61] = "112";
 comments[61] = "Id Pregunta: 6154. ";


//  Id pregunta: 6156 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  &iquest;Qu&eacute; tipo de licencia utiliza Samba?";
 choices[62]= new Array();
 choices[62][0] = "GPL";
 choices[62][1] = "GNU LGPL";
 choices[62][2] = "No utiliza ning&uacute;n tipo de licencia";
 choices[62][3] = "MGPL";
 answers[62] = choices[62][0];
 units[62] = "112";
 comments[62] = "Id Pregunta: 6156. ";


//  Id pregunta: 6340 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  &iquest;Qui&eacute;n acu&ntilde;&oacute; el t&eacute;rmino 'Web 2.0'?";
 choices[63]= new Array();
 choices[63][0] = "Tim Berners-Lee";
 choices[63][1] = "Tim O'Reilly";
 choices[63][2] = "Vinton Cerf";
 choices[63][3] = "Richard Stallman";
 answers[63] = choices[63][1];
 units[63] = "120";
 comments[63] = "Id Pregunta: 6340. NULL";


//  Id pregunta: 6341 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  &iquest;Qu&eacute; es un widget?";
 choices[64]= new Array();
 choices[64][0] = "Una aplicaci&oacute;n web que utiliza informaci&oacute;n de diversas fuentes relevantes para crear un nuevo servicio en base a ellas, normalmente empleando Servicios Web y APIs p&uacute;blicas. ";
 choices[64][1] = "Una red inform&aacute;tica entre pares, sin servidores centralizados, donde se puede compartir informaci&oacute;n de cualquier tipo.";
 choices[64][2] = "Una peque&ntilde;a aplicaci&oacute;n o m&oacute;dulo que realiza una funci&oacute;n concreta, generalmente de tipo visual, dentro de otras aplicaciones o sistemas operativos.";
 choices[64][3] = "Un enlace fijo que no var&iacute;a con el tiempo.";
 answers[64] = choices[64][2];
 units[64] = "120";
 comments[64] = "Id Pregunta: 6341. NULL";


//  Id pregunta: 6344 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  &iquest;Cu&aacute;l de las siguientes formas de presentar informaci&oacute;n se identifica mejor con la definici&oacute;n de folcsonom&iacute;a?";
 choices[65]= new Array();
 choices[65][0] = "&Aacute;rbol";
 choices[65][1] = "Directorio";
 choices[65][2] = "Nube de Tags";
 choices[65][3] = "Cubo";
 answers[65] = choices[65][2];
 units[65] = "120";
 comments[65] = "Id Pregunta: 6344. NULL";


//  Id pregunta: 6345 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  Identifique cu&aacute;l de los siguientes no es uno de los siete principios de la Web 2.0";
 choices[66]= new Array();
 choices[66][0] = "World Wide Web como plataforma de trabajo";
 choices[66][1] = "Las experiencias enriquecedoras de los usuarios";
 choices[66][2] = "El fin del ciclo de las actualizaciones de versiones del software.";
 choices[66][3] = "El software limitado a un solo dispositivo.";
 answers[66] = choices[66][3];
 units[66] = "120";
 comments[66] = "Id Pregunta: 6345. NULL";


//  Id pregunta: 6347 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  &iquest;Cu&aacute;l de las siguientes afirmaciones, relacionadas con el podcasting es cierta?";
 choices[67]= new Array();
 choices[67][0] = "Podcasting es la distribuci&oacute;n de archivos multimedia (normalmente audio o v&iacute;deo) mediante un sistema de sindicaci&oacute;n que permita suscribirse y usar un programa que lo descarga para que el usuario lo escuche en el momento que quiera.";
 choices[67][1] = "Habitualmente, no es necesario estar suscrito para descargar un podcast";
 choices[67][2] = "En Internet podemos encontrar todo tipo de podcast de todo tipo de tem&aacute;ticas";
 choices[67][3] = "Todas las anteriores son ciertas";
 answers[67] = choices[67][3];
 units[67] = "120";
 comments[67] = "Id Pregunta: 6347. NULL";


//  Id pregunta: 7322 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)  La Entidad P&uacute;blica Empresarial responsable de la gesti&oacute;n del Registro de nombres de dominio de Internet bajo el c&oacute;digo de pa&iacute;s .es se denomina:";
 choices[68]= new Array();
 choices[68][0] = "Oepm.es";
 choices[68][1] = "Red.es";
 choices[68][2] = "Funciona.es";
 choices[68][3] = "060.es";
 answers[68] = choices[68][1];
 units[68] = "112";
 comments[68] = "Id Pregunta: 7322. NULL";


//  Id pregunta: 7323 AÃ±o de creación de pregunta: 2010-01-01
 questions[69]= "70)  &iquest;Cu&aacute;l de los siguientes no es un est&aacute;ndar utilizado para el intercambio de datos relativos al comercio electr&oacute;nico?";
 choices[69]= new Array();
 choices[69][0] = "EDIFACT";
 choices[69][1] = "ebXML";
 choices[69][2] = "XMT ";
 choices[69][3] = "UBL";
 answers[69] = choices[69][2];
 units[69] = "70";
 comments[69] = "Id Pregunta: 7323. NULL";


//  Id pregunta: 8188 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  Los &quot;mashups&quot; en Web 2.0:";
 choices[70]= new Array();
 choices[70][0] = "Son un tipo de wikis con interfaces AJAX.";
 choices[70][1] = "Son una aplicaci&oacute;n de la teor&iacute;a &quot;Long Tail&quot;.";
 choices[70][2] = "Son aplicaciones web que combinan datos o servicios de otras fuentes.";
 choices[70][3] = "Siempre se implementan con t&eacute;cnicas de &quot;screen scraping&quot;.";
 answers[70] = choices[70][2];
 units[70] = "120";
 comments[70] = "Id Pregunta: 8188. Examen TIC A1 2010";


//  Id pregunta: 8217 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  En relaci&oacute;n a la facturaci&oacute;n electr&oacute;nica, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[71]= new Array();
 choices[71][0] = "La AEAT pone a disposici&oacute;n de los usuarios software distribuible para generar PDF417.";
 choices[71][1] = "El formato &quot;Facturae&quot; permite la inclusi&oacute;n de extensiones a nivel de l&iacute;nea, de factura o de lote de facturas.";
 choices[71][2] = "El certificado a usar para firmar la factura electr&oacute;nica y que &eacute;sta tenga validez ha de ser en todo caso el del obligado tributario.";
 choices[71][3] = "La Orden EHA/962/2007 dice que la obligaci&oacute;n de remisi&oacute;n y conservaci&oacute;n de facturas o documentos sustitutivos se cumplir&aacute; para la facturaci&oacute;n electr&oacute;nica mediante el uso de firma electr&oacute;nica reconocida.";
 answers[71] = choices[71][1];
 units[71] = "70";
 comments[71] = "Id Pregunta: 8217. Examen TIC A1 2010";


//  Id pregunta: 8280 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  Si ejecutamos el comando telnet para acceder a un servidor que tenga configurado lo necesario, &iquest;Cu&aacute;l de las afirmaciones es correcta?:";
 choices[72]= new Array();
 choices[72][0] = "S&oacute;lo podemos conectarnos al &quot;well-known port&quot; 23 (telnet).";
 choices[72][1] = "Accediendo al puerto 25 (smtp) ser&iacute;a posible enviar e-mails.";
 choices[72][2] = "Accediendo al puerto 22 (ssh) es posible securizar la comunicaci&oacute;n.";
 choices[72][3] = "Accediendo a cualquier puerto diferente del 23 el servidor reconoce el protocolo y redirige la comunicaci&oacute;n al puerto 23(telnet).";
 answers[72] = choices[72][1];
 units[72] = "112";
 comments[72] = "Id Pregunta: 8280. Examen TIC A1 2010";


//  Id pregunta: 8309 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  Respecto a la Web 2.0 se puede afirmar que: ";
 choices[73]= new Array();
 choices[73][0] = "Transforma software del web hacia la plataforma de escritorio. ";
 choices[73][1] = "Se trata de una actitud evolutiva, m&aacute;s que una tecnolog&iacute;a. ";
 choices[73][2] = "Pretende sustituir a las redes sociales, al manejar usuarios y comunidades. ";
 choices[73][3] = "Encapsula APIs o XML para impedir que las aplicaciones puedan ser manipuladas por otros.";
 answers[73] = choices[73][1];
 units[73] = "120";
 comments[73] = "Id Pregunta: 8309. Examen TIC A2 2010";


//  Id pregunta: 8310 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  La autoridad encargada de la asignaci&oacute;n de nombres de dominio de primer nivel gen&eacute;ricos (gTLD) y de c&oacute;digos de pa&iacute;ses (ocTLD) &uacute;nicos en lnternet es:";
 choices[74]= new Array();
 choices[74][0] = "IANA. ";
 choices[74][1] = "NIST.";
 choices[74][2] = "ICANN.";
 choices[74][3] = "IETF.";
 answers[74] = choices[74][2];
 units[74] = "112,42";
 comments[74] = "Id Pregunta: 8310. Examen TIC A2 2010";


//  Id pregunta: 8376 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  Se&ntilde;ale cu&aacute;l de las siguientes opciones NO es una herramienta de benchmarking de aplicaciones web: ";
 choices[75]= new Array();
 choices[75][0] = "JMeter.";
 choices[75][1] = "OpenSTA.";
 choices[75][2] = "ApacheBench.";
 choices[75][3] = "Junit.";
 answers[75] = choices[75][3];
 units[75] = "112";
 comments[75] = "Id Pregunta: 8376. Examen TIC A2 2010";


//  Id pregunta: 8385 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  &iquest;Cu&aacute;l de los siguientes protocolos de enrutamiento NO soporta VLSM (Variable Length Subnet Mask - M&aacute;scara de subred de tama&ntilde;o variable)?:";
 choices[76]= new Array();
 choices[76][0] = "RIPv2.";
 choices[76][1] = "EIGRP.";
 choices[76][2] = "IGRP.";
 choices[76][3] = "OSPF.";
 answers[76] = choices[76][2];
 units[76] = "112,102";
 comments[76] = "Id Pregunta: 8385. Examen TIC A2 2010";


//  Id pregunta: 8529 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  En el contexto de la Web 2.0, el conjunto formado por una colecci&oacute;n extensible de p&aacute;ginas web entrelazadas, un sistema hipertextual para almacenar y modificar informaci&oacute;n y una base de datos donde cada p&aacute;gina puede ser f&aacute;cilmente modificada por cualquier usuario que disponga de un navegador web est&aacute;ndar que admita la utilizaci&oacute;n de formularios, corresponde al concepto de:";
 choices[77]= new Array();
 choices[77][0] = "Wiki.";
 choices[77][1] = "Mashup.";
 choices[77][2] = "Blog.";
 choices[77][3] = "Agregador o feeder. ";
 answers[77] = choices[77][0];
 units[77] = "120";
 comments[77] = "Id Pregunta: 8529. Examen TIC A2 2010 interna";


//  Id pregunta: 8803 AÃ±o de creación de pregunta: 2011-01-01
 questions[78]= "79)  En el contexto de la Web 2.0, a la p&aacute;gina Web o aplicaci&oacute;n que usa o combina datos, presentaciones y funcionalidad procedentes de una o m&aacute;s fuentes para crear nuevos servicios, se conoce como";
 choices[78]= new Array();
 choices[78][0] = "folcsonom&iacute;a";
 choices[78][1] = "mashup";
 choices[78][2] = "podcast";
 choices[78][3] = "Wiki";
 answers[78] = choices[78][1];
 units[78] = "120";
 comments[78] = "Id Pregunta: 8803. Examen UPM A2 2011";


//  Id pregunta: 8994 AÃ±o de creación de pregunta: 2011-01-01
 questions[79]= "80)  Las Cookies que emplea el protocolo HTTP se especifican en el RFC:";
 choices[79]= new Array();
 choices[79][0] = "2965";
 choices[79][1] = "8080";
 choices[79][2] = "1065";
 choices[79][3] = "1265";
 answers[79] = choices[79][0];
 units[79] = "112";
 comments[79] = "Id Pregunta: 8994. Examen UPM A2 2011";


//  Id pregunta: 9169 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  Una empresa tiene una p&aacute;gina web con informaci&oacute;n sobre su actividad, productos, y servicios que vende, pero &eacute;stos no se pueden comprar a trav&eacute;s de su p&aacute;gina web. &iquest;Le afectan a la empresa las obligaciones establecidas en la Ley de Servicios de la Sociedad de la Informaci&oacute;n para los prestadores de servicios?";
 choices[80]= new Array();
 choices[80][0] = "S&iacute;, ya que se trata de una actividad con trascendencia econ&oacute;mica que se realiza por medios electr&oacute;nicos";
 choices[80][1] = "No, al no haber venta directa de productos por medios electr&oacute;nicos";
 choices[80][2] = "Si, cualquier servicio que se preste a trav&eacute;s de internet incurre en estas obligaciones";
 choices[80][3] = "No, la ley no establece obligaciones para los prestadores de servicios";
 answers[80] = choices[80][0];
 units[80] = "70";
 comments[80] = "Id Pregunta: 9169. Examen TIC A2 2011";


//  Id pregunta: 9173 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  Respecto a la normativa de facturaci&oacute;n, se&ntilde;ale la respuesta INCORRECTA:";
 choices[81]= new Array();
 choices[81][0] = "El Real Decreto 1619/2012 regula las obligaciones de facturaci&oacute;n desde el 1 de enero de 2014";
 choices[81][1] = "No se exigir&aacute; la obligaci&oacute;n de expedir factura en el caso de determinadas prestaciones de servicios financieros y de seguros, salvo cuando dichas operaciones se entiendan realizadas en el territorio de aplicaci&oacute;n del Impuesto, o en otro Estado miembro de la Uni&oacute;n Europea, y est&eacute;n sujetas y no exentas.";
 choices[81][2] = "Se establece un sistema de facturaci&oacute;n basado en dos tipos de facturas: la factura completa u ordinaria y la factura simplificada, que viene a sustituir a los denominados tiques.";
 choices[81][3] = "Todas son verdaderas";
 answers[81] = choices[81][0];
 units[81] = "70";
 comments[81] = "Id Pregunta: 9173. ";


//  Id pregunta: 9175 AÃ±o de creación de pregunta: 2013-01-01
 questions[82]= "83)  Se&ntilde;ale la afirmaci&oacute;n CORRECTA respecto a la Ley 34/2002:";
 choices[82]= new Array();
 choices[82][0] = "Los operadores de redes y servicios de comunicaciones electr&oacute;nicas, los proveedores de acceso a redes de telecomunicaciones y los prestadores de servicios de alojamiento de datos deber&aacute;n retener los datos de conexi&oacute;n y tr&aacute;fico generados por las comunicaciones establecidas durante la prestaci&oacute;n de un servicio de la sociedad de la informaci&oacute;n por un per&iacute;odo m&aacute;ximo de doce meses.";
 choices[82][1] = "Los contratos celebrados por v&iacute;a electr&oacute;nica en los que intervenga como parte un consumidor se presumir&aacute;n celebrados en el lugar en que el prestador de servicios tenga establecido su domicilio fiscal.";
 choices[82][2] = "El Real Decreto-ley 13/2012 traspone al ordenamiento jur&iacute;dico espa&ntilde;ol la Directiva 2009/136/CE que modifica la anterior Directiva 2002/58/CE.";
 choices[82][3] = "Las comunicaciones comerciales y las ofertas promocionales se regir&aacute;n en todos sus t&eacute;rminos por la Ley 34/2002";
 answers[82] = choices[82][2];
 units[82] = "70";
 comments[82] = "Id Pregunta: 9175. ";


//  Id pregunta: 9842 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  En la gesti&oacute;n unificada de usuarios, &iquest;a qu&eacute; se denomina Single Sign-On (SSO)?";
 choices[83]= new Array();
 choices[83][0] = "Procedimiento de cifrado para autenticar a un usuario.";
 choices[83][1] = "Procedimiento asociado al cifrado en Secure Socket Layer (SSL).";
 choices[83][2] = "Es un procedimiento de autenticaci&oacute;n que habilita al usuario para acceder a varios sistemas con una sola instancia de autenticaci&oacute;n. ";
 choices[83][3] = "Permite el acceso de los usuarios a servicios web a trav&eacute;s del protocolo HTTPS.";
 answers[83] = choices[83][2];
 units[83] = "118";
 comments[83] = "Id Pregunta: 9842. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Arag&oacute;n 2013";


//  Id pregunta: 9861 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  Indique la respuesta falsa:";
 choices[84]= new Array();
 choices[84][0] = "OAuth (Open Authorization) es un protocolo abierto que permite autorizaci&oacute;n segura de una API de modo est&aacute;ndar y simple para aplicaciones de escritorio, m&oacute;viles y web.";
 choices[84][1] = "OAuth y OpenID son protocolos id&eacute;nticos. ";
 choices[84][2] = "OpenID es un est&aacute;ndar de identificaci&oacute;n digital descentralizado, con el que un usuario puede identificarse en una p&aacute;gina web a trav&eacute;s de una URL o XRI.";
 choices[84][3] = "A diferencia de arquitecturas Single Sign-On, OpenId no especifica el mecanismo de autenticaci&oacute;n.";
 answers[84] = choices[84][1];
 units[84] = "118";
 comments[84] = "Id Pregunta: 9861. Oauth y OpenID son completamente diferentes. El resto de respuestas son ciertas.";


//  Id pregunta: 9991 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  &iquest;Cu&aacute;l es el formato al que se tienen que ajustar las facturas electr&oacute;nicas que se remitan a las Administraciones P&uacute;blicas, de acuerdo con la ley 25/2013, de 27 de diciembre, de impulso de la factura electr&oacute;nica y creaci&oacute;n del registro contable de facturas en el Sector P&uacute;blico?";
 choices[85]= new Array();
 choices[85][0] = "e-Factura, versi&oacute;n 2.3";
 choices[85][1] = "Facturae, versi&oacute;n 3.2, y versiones sucesivas que publique el Ministerio de Industria, Turismo y Comercio.";
 choices[85][2] = "Facturae, versi&oacute;n 3.2 y 3.2.1, seg&uacute;n resoluci&oacute;n 21 de marzo de 2014";
 choices[85][3] = "ebXML, versi&oacute;n 2.0, hasta que se apruebe la Ley que transpone la Directiva 2006/123/CE sobre actividades de servicio en el mercado interior.";
 answers[85] = choices[85][2];
 units[85] = "70";
 comments[85] = "Id Pregunta: 9991. NULL";


//  Id pregunta: 9992 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  &iquest;Cu&aacute;l de las siguientes no es una forma de pago admitida por la Pasarela de Pagos de la Agencia Tributaria?";
 choices[86]= new Array();
 choices[86][0] = "Pago mediante cargo en cuenta";
 choices[86][1] = "Pago con tarjeta";
 choices[86][2] = "Pago por cargo en cuenta de terceras personas, previo apoderamiento registrado en &ldquo;Registro de apoderamientos&rdquo;";
 choices[86][3] = "Pago mediante remesa de importaci&oacute;n para obligados contribuyentes con residencia en el extranjero";
 answers[86] = choices[86][3];
 units[86] = "70";
 comments[86] = "Id Pregunta: 9992. NULL";


//  Id pregunta: 10500 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  Cual de las siguientes afirmaciones es correcta con respecto al protocolo CAS, en el &aacute;mbito de los sitemas Single-Sign-On";
 choices[87]= new Array();
 choices[87][0] = "Fue concebido en la universidad de Oxford";
 choices[87][1] = "Es un protocolo SSO para todo tipo de aplicaciones, tanto web, como de escritorio.";
 choices[87][2] = "No existe el protocolo CAS, en ese &aacute;mbito";
 choices[87][3] = "CAS son las siglas de Central Authentication Service";
 answers[87] = choices[87][3];
 units[87] = "118";
 comments[87] = "Id Pregunta: 10500. NULL";


//  Id pregunta: 10507 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  &iquest;Cual es la RFC original del protocolo SMTP?";
 choices[88]= new Array();
 choices[88][0] = "821";
 choices[88][1] = "822";
 choices[88][2] = "823";
 choices[88][3] = "Ninguna de las anteriores";
 answers[88] = choices[88][0];
 units[88] = "106";
 comments[88] = "Id Pregunta: 10507. NULL";


//  Id pregunta: 10508 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  En la arquitectura X.400, &iquest;cual es el protocolo de comunicaci&oacute;n entre los Agentes de Usuario y el Repositorio de Mensajes?";
 choices[89]= new Array();
 choices[89][0] = "P2";
 choices[89][1] = "P7";
 choices[89][2] = "P3";
 choices[89][3] = "P1";
 answers[89] = choices[89][1];
 units[89] = "106";
 comments[89] = "Id Pregunta: 10508. http://www.x400.org/US/X400_Protocols.htm";


//  Id pregunta: 10509 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  Si el c&oacute;digo de respuesta de un servidor SMTP, que cumple la RFC 821, es 501, podemos decir que:";
 choices[90]= new Array();
 choices[90][0] = "La operaci&oacute;n se ha realizado con &eacute;xito.";
 choices[90][1] = "Se ha producido un Error Temporal. Es posible que, volver a mandar el comando, con el mismo formato pasado un tiempo, produzca un resultado satisfactorio";
 choices[90][2] = "Se ha producido un Error, debido a que los parametros del comando enviado no tienen la sintaxis correcta.";
 choices[90][3] = "No podemos decir nada";
 answers[90] = choices[90][2];
 units[90] = "106";
 comments[90] = "Id Pregunta: 10509. http://tools.ietf.org/html/rfc821#page-35";


//  Id pregunta: 10510 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  &iquest;Cual de los siguientes no es un protocolo de correo electr&oacute;nico?";
 choices[91]= new Array();
 choices[91][0] = "SMTP";
 choices[91][1] = "MIME";
 choices[91][2] = "POP2";
 choices[91][3] = "Todos lo son";
 answers[91] = choices[91][3];
 units[91] = "106";
 comments[91] = "Id Pregunta: 10510. POP2 es una versi&oacute;n obsoleta de POP, pero se pregunta por protocolos de correo. No por su actualidad o uso.";


//  Id pregunta: 10763 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Seg&uacute;n la gu&iacute;a de comunicaci&oacute;n digital. Si un sitio ofrece p&aacute;ginas espec&iacute;ficamente a dispositivos m&oacute;viles. &iquest;A qu&eacute; resoluci&oacute;n es aconsejable optimizar la resoluci&oacute;n?";
 choices[92]= new Array();
 choices[92][0] = "200 x 250 p&iacute;xeles";
 choices[92][1] = "400 x 450 p&iacute;xeles";
 choices[92][2] = "700 x 950 p&iacute;xeles";
 choices[92][3] = "700 x 1150 p&iacute;xeles";
 answers[92] = choices[92][0];
 units[92] = "120";
 comments[92] = "Id Pregunta: 10763. ";


//  Id pregunta: 10854 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  WebDAV (RFC 4918) son un conjunto de extensiones para el protocolo HTTP, entre ellos, el m&eacute;todo PROPPATCH que sirve para:";
 choices[93]= new Array();
 choices[93][0] = "Crear colecciones.";
 choices[93][1] = "Recuperar propiedades, almacenadas como XML, desde un recurso.";
 choices[93][2] = "Cambiar y borrar m&uacute;ltiples propiedades de un recurso en una simple operaci&oacute;n at&oacute;mica.";
 choices[93][3] = "Desbloquear un recurso.";
 answers[93] = choices[93][2];
 units[93] = "112";
 comments[93] = "Id Pregunta: 10854. Examen GSI 2014";


//  Id pregunta: 10883 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Se&ntilde;ale cu&aacute;l de las siguientes NO es una Protocol Data Unit (PDU) del protocolo SNMP v3:";
 choices[94]= new Array();
 choices[94][0] = "SetRequest PDU";
 choices[94][1] = "InformRequest PDU";
 choices[94][2] = "Report PDU";
 choices[94][3] = "GetBackRequest PDU";
 answers[94] = choices[94][3];
 units[94] = "112";
 comments[94] = "Id Pregunta: 10883. Examen GSI 2014";


//  Id pregunta: 10941 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Respecto al protocolo Oauth, se&ntilde;ale la respuesta correcta:";
 choices[95]= new Array();
 choices[95][0] = "Es propietario de Twitter, y permite gestionar el acceso a su API por parte de otras aplicaciones.";
 choices[95][1] = "Permite su uso en aplicaciones web y m&oacute;viles, pero no de escritorio.";
 choices[95][2] = "Permite el acceso a la identidad completa del usuario por parte del servidor de aplicaciones.";
 choices[95][3] = "Permite utilizar la cuenta de Facebook para acceder a otras aplicaciones.";
 answers[95] = choices[95][3];
 units[95] = "118";
 comments[95] = "Id Pregunta: 10941. TIC A1 AGE 2014";


//  Id pregunta: 10968 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Una de las siguientes opciones incluye tres herramientas de creaci&oacute;n de blogs. Se&ntilde;ale la respuesta correcta:";
 choices[96]= new Array();
 choices[96][0] = "Blogger, Tumblr y Pocket.";
 choices[96][1] = "Wordpress, Blogger y Pocket.";
 choices[96][2] = "Wordpress, Tumblr y Blogger.";
 choices[96][3] = "Blogger, Path y Wordpress.";
 answers[96] = choices[96][2];
 units[96] = "120";
 comments[96] = "Id Pregunta: 10968. TIC A1 AGE 2014";


//  Id pregunta: 11049 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Cu&aacute;l es una plataforma electr&oacute;nica de contrataci&oacute;n que permite la contrataci&oacute;n de todos los valores en circulaci&oacute;n del Tesoro P&uacute;blico?";
 choices[97]= new Array();
 choices[97][0] = "SEND";
 choices[97][1] = "FACTURAE";
 choices[97][2] = "COMPRAE";
 choices[97][3] = "TESORO-E";
 answers[97] = choices[97][0];
 units[97] = "70";
 comments[97] = "Id Pregunta: 11049. ";


//  Id pregunta: 11061 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Cu&aacute;l de los siguientes es un protocolo para el pago seguro en red?";
 choices[98]= new Array();
 choices[98][0] = "XMLDSig";
 choices[98][1] = "3D-Secure";
 choices[98][2] = "SSL";
 choices[98][3] = "SHA256";
 answers[98] = choices[98][1];
 units[98] = "70";
 comments[98] = "Id Pregunta: 11061. ";


//  Id pregunta: 11144 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Cu&aacute;l de los siguientes no es un protocolo de pago?";
 choices[99]= new Array();
 choices[99][0] = "SET";
 choices[99][1] = "Paypal";
 choices[99][2] = "3-D Secure";
 choices[99][3] = "Mastercard True Payment Protocol";
 answers[99] = choices[99][3];
 units[99] = "70";
 comments[99] = "Id Pregunta: 11144. ";


