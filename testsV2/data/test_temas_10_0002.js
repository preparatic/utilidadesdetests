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

//  Id pregunta: 680 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de las siguientes operaciones se realiza a trav&eacute;s de servicios de transferencia electr&oacute;nica de fondos?:";
 choices[0]= new Array();
 choices[0][0] = "Autorizaci&oacute;n y control de transacciones con pago por tarjeta de cr&eacute;dito o d&eacute;bito";
 choices[0][1] = "Consultas de estado de cuenta";
 choices[0][2] = "Consulta o acceso a bancos de datos";
 choices[0][3] = "Todas las anteriores";
 answers[0] = choices[0][3];
 units[0] = "70";
 comments[0] = "Id Pregunta: 680. hay una errata en lugar de servidos ser&iacute;a servicios.";


//  Id pregunta: 1354 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  Se&ntilde;ale la respuesta falsa. Una pasarela de pagos:";
 choices[1]= new Array();
 choices[1][0] = "Permite a un comercio en internet cobrar a sus clientes, efectuando la transacci&oacute;n por medio de un tercero de confianza";
 choices[1][1] = "Es un aplicativo software que permite conectar al cliente con el comercio de forma segura";
 choices[1][2] = "Es un dispositivo hardware que se instala en el servidor web de la tienda viertual";
 choices[1][3] = "Abstrae el manejo de los pagos de la l&oacute;gica de la aplicaci&oacute;n de la tienda";
 answers[1] = choices[1][2];
 units[1] = "70";
 comments[1] = "Id Pregunta: 1354. NULL";


//  Id pregunta: 1653 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  &iquest;Cu&aacute;l de los siguientes protocolos se puede considerar como menos seguro para la realizaci&oacute;n de una transacci&oacute;n de comercio electr&oacute;nico?";
 choices[2]= new Array();
 choices[2][0] = "SET";
 choices[2][1] = "SSL";
 choices[2][2] = "3D-Secure";
 choices[2][3] = "SPA/UCAF";
 answers[2] = choices[2][1];
 units[2] = "70";
 comments[2] = "Id Pregunta: 1653. NULL";


//  Id pregunta: 1837 AÃ±o de creación de pregunta: 2006-01-01
 questions[3]= "4)  El protocolo SET (Secure Electronic Transaction) se puede transportar sobre:";
 choices[3]= new Array();
 choices[3][0] = "TCP";
 choices[3][1] = "SMTP";
 choices[3][2] = "HTTP";
 choices[3][3] = "Todas las anteriores";
 answers[3] = choices[3][3];
 units[3] = "70";
 comments[3] = "Id Pregunta: 1837. NULL";


//  Id pregunta: 1838 AÃ±o de creación de pregunta: 2006-01-01
 questions[4]= "5)  Indicar la respuesta falsa respecto al protocolo SET (Secure Electronic Transaction):";
 choices[4]= new Array();
 choices[4][0] = "Fue desarrollado por Visa y MasterCard";
 choices[4][1] = "Hace uso de criptograf&iacute;a mediante DES y RSA";
 choices[4][2] = "Garantiza la autenticaci&oacute;n e integridad de la comunicaci&oacute;n";
 choices[4][3] = "Fue desarrollado tras el fracso de la tecnolog&iacute;a 3D-Secure de Visa";
 answers[4] = choices[4][3];
 units[4] = "70";
 comments[4] = "Id Pregunta: 1838. NULL";


//  Id pregunta: 1842 AÃ±o de creación de pregunta: 2006-01-01
 questions[5]= "6)  La directiva 2002/38/CE:";
 choices[5]= new Array();
 choices[5][0] = "Ha regulado el fen&oacute;meno del comercio electr&oacute;nico en lo que se refiere al IVA";
 choices[5][1] = "Est&aacute;  incluida en el denominado paquete Telecom";
 choices[5][2] = "Es relativa a la protecci&oacute;n de datos personales y a la protecci&oacute;n de la intimidad en el sector de las comunicaciones electr&oacute;nicas";
 choices[5][3] = "Ninguna de las anteriores";
 answers[5] = choices[5][0];
 units[5] = "70";
 comments[5] = "Id Pregunta: 1842. NULL";


//  Id pregunta: 2936 AÃ±o de creación de pregunta: 2004-01-01
 questions[6]= "7)  &iquest;Cu&aacute;l de los siguientes no es uno de los estadios en la estandarizaci&oacute;n del IAB?";
 choices[6]= new Array();
 choices[6][0] = "Borrador de Internet";
 choices[6][1] = "Est&aacute;ndar propuesto";
 choices[6][2] = "Borrador de est&aacute;ndar";
 choices[6][3] = "Est&aacute;ndar temporal";
 answers[6] = choices[6][3];
 units[6] = "112,42";
 comments[6] = "Id Pregunta: 2936. Similar a examen TIC MAP A 2004";


//  Id pregunta: 2952 AÃ±o de creación de pregunta: 2004-01-01
 questions[7]= "8)  Los documentos que definen los est&aacute;ndares de facto de internet se denominan:";
 choices[7]= new Array();
 choices[7][0] = "RFC";
 choices[7][1] = "IETF";
 choices[7][2] = "IANA";
 choices[7][3] = "Se definen en la serie ITU-T X.(n&uacute;mero de est&aacute;ndar) ";
 answers[7] = choices[7][0];
 units[7] = "112";
 comments[7] = "Id Pregunta: 2952. Similar a examen TIC SS A 2003";


//  Id pregunta: 3040 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Cu&aacute;l de los siguientes protocolos de internet relacionados con el correo electr&oacute;nico permite descargar selectivamente los mensajes de entrada del servidor de correo?:";
 choices[8]= new Array();
 choices[8][0] = "SMTP (Simple Mail Transfer Protocol)";
 choices[8][1] = "POP3 (Post Office Protocol versi&oacute;n 3)";
 choices[8][2] = "IMAP4 (Internet Message Access Protocol versi&oacute;n 4)";
 choices[8][3] = "S/MIME (Secure Multipurpose Internet Mail Extensions)";
 answers[8] = choices[8][2];
 units[8] = "106";
 comments[8] = "Id Pregunta: 3040. ";


//  Id pregunta: 3069 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  Indique la afirmaci&oacute;n incorrecta respecto al correo electr&oacute;nico:";
 choices[9]= new Array();
 choices[9][0] = "Los mensajes se pueden recibir aunque el equipo est&eacute; desconectado";
 choices[9][1] = "No es necesaria la conexi&oacute;n directa emisor-receptor";
 choices[9][2] = "No permite enviar fax";
 choices[9][3] = "Todos los sistemas de correo electr&oacute;nico que cumplan las recomendaciones X.400 de la ITU-T pueden interconectarse a trav&eacute;s de la mensajer&iacute;a p&uacute;blica";
 answers[9] = choices[9][2];
 units[9] = "106";
 comments[9] = "Id Pregunta: 3069. ";


//  Id pregunta: 3162 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Cu&aacute;l de las siguientes asociaciaciones protocolos OSI-protocolos TCP/IP no es correcta?:";
 choices[10]= new Array();
 choices[10][0] = "SMTP-X.400";
 choices[10][1] = "TELNET-VT";
 choices[10][2] = "FTAM-FTP";
 choices[10][3] = "X.500-SNMP";
 answers[10] = choices[10][3];
 units[10] = "100, 104, 106";
 comments[10] = "Id Pregunta: 3162. ";


//  Id pregunta: 3231 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Cu&aacute;l de los siguientes protocolos de los est&aacute;ndares X.400 hace referencia a las comunicaciones entre agente de usuario, y es conocido como IPM (InterPersonal Messaging)?:";
 choices[11]= new Array();
 choices[11][0] = "P1";
 choices[11][1] = "P2";
 choices[11][2] = "P3";
 choices[11][3] = "P7";
 answers[11] = choices[11][1];
 units[11] = "106";
 comments[11] = "Id Pregunta: 3231. ";


//  Id pregunta: 3278 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  &iquest;Qu&eacute; define la norma X.400?:";
 choices[12]= new Array();
 choices[12][0] = "Sistema de tratamiento de alarmas";
 choices[12][1] = "Sistema de tratamiento de mensajes";
 choices[12][2] = "Sistema de transferencia de ficheros";
 choices[12][3] = "Sistema de gesti&oacute;n de red";
 answers[12] = choices[12][1];
 units[12] = "106";
 comments[12] = "Id Pregunta: 3278. ";


//  Id pregunta: 3291 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  &iquest;Qu&eacute; estandariza el est&aacute;ndar MIME?:";
 choices[13]= new Array();
 choices[13][0] = "Protocolo de acceso al correo electr&oacute;nico";
 choices[13][1] = "Seguridad en Sistemas de correo electr&oacute;nico";
 choices[13][2] = "Transferencia de documentos multimedia a trav&eacute;s de correo electr&oacute;nico";
 choices[13][3] = "Agenda de direcciones de correo electr&oacute;nico";
 answers[13] = choices[13][2];
 units[13] = "106";
 comments[13] = "Id Pregunta: 3291. ";


//  Id pregunta: 3431 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  Indicar la respuesta correcta: El protocolo HTTP, utilizado al navegar por Internet:";
 choices[14]= new Array();
 choices[14][0] = "Realiza una nueva conexi&oacute;n TCP con el servidor cada vez que se solicita una nueva p&aacute;gina web";
 choices[14][1] = "Abre una conexi&oacute;n TCP con el servidor la primera vez que se solicita una p&aacute;gina y la mantiene abierta mientras no se cambia de servidor";
 choices[14][2] = "HTTP no es un protocolo de comunicaciones, sino un lenguaje para la creaci&oacute;n de p&aacute;ginas web";
 choices[14][3] = "Ninguna de las anteriores";
 answers[14] = choices[14][0];
 units[14] = "112";
 comments[14] = "Id Pregunta: 3431. ";


//  Id pregunta: 3450 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  El protocolo FTP (File Transfer Protocol) utiliza canales diferentes para comandos y para datos:";
 choices[15]= new Array();
 choices[15][0] = "Un servidor FTP en modo activo emplea el puerto 21 para enviar datos al cliente";
 choices[15][1] = "Un servidor FTP emplea el puerto 21 para comandos, ya sea en modo activo o pasivo";
 choices[15][2] = "Un servidor FTP en modo pasivo emplea el puerto 21 para enviar datos al cliente";
 choices[15][3] = "Un servidor FTP emplea el puerto 20 para comandos, ya sea en modo activo o pasivo";
 answers[15] = choices[15][1];
 units[15] = "112";
 comments[15] = "Id Pregunta: 3450. ";


//  Id pregunta: 3451 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  El protocolo FTP (File Transfer Protocol):";
 choices[16]= new Array();
 choices[16][0] = "Tiene asignado el puerto 23";
 choices[16][1] = "Tiene asignados los puertos 20 y 21";
 choices[16][2] = "Tiene asignado el puerto 25";
 choices[16][3] = "Tiene asignado el puerto 80";
 answers[16] = choices[16][1];
 units[16] = "112";
 comments[16] = "Id Pregunta: 3451. ";


//  Id pregunta: 3466 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  El puerto com&uacute;nmente utilizado para aplicaciones de correo electr&oacute;nico es (SMTP) el:";
 choices[17]= new Array();
 choices[17][0] = "80";
 choices[17][1] = "25";
 choices[17][2] = "53";
 choices[17][3] = "21";
 answers[17] = choices[17][1];
 units[17] = "106";
 comments[17] = "Id Pregunta: 3466. ";


//  Id pregunta: 3469 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  El servicio Archie se utiliza para:";
 choices[18]= new Array();
 choices[18][0] = "navegar usando men&uacute;s sin conocer la direcci&oacute;n de la informaci&oacute;n";
 choices[18][1] = "recibir de un servidor las direcciones de bases de datos m&aacute;s adecuadas para responder a la pregunta";
 choices[18][2] = "realizar b&uacute;squedas por los nombres de los ficheros de los servidores FTP";
 choices[18][3] = "buscar informaci&oacute;n seg&uacute;n un esquema de enlaces hipertexto";
 answers[18] = choices[18][2];
 units[18] = "112";
 comments[18] = "Id Pregunta: 3469. ";


//  Id pregunta: 3511 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  En el protocolo HTTP, el m&eacute;todo HEAD:";
 choices[19]= new Array();
 choices[19][0] = "Es lo mismo que GET";
 choices[19][1] = "Recupera el cuerpo o Body del mensaje";
 choices[19][2] = "Las cabeceras no aparecen en GET pero s&iacute; en HEAD";
 choices[19][3] = "Se utiliza normalmente para ver la existencia del documento o su longitud";
 answers[19] = choices[19][3];
 units[19] = "112";
 comments[19] = "Id Pregunta: 3511. ";


//  Id pregunta: 3524 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  En Internet se encuentran a menudo las siglas FAQ. &iquest;Qu&eacute; significan?:";
 choices[20]= new Array();
 choices[20][0] = "Un curso sobre el tema";
 choices[20][1] = "Las direcciones m&aacute;s relevantes respecto al tema";
 choices[20][2] = "Las preguntas m&aacute;s frecuentes que se hacen";
 choices[20][3] = "Un descripci&oacute;n del contenido del nodo en cuesi&oacute;n";
 answers[20] = choices[20][2];
 units[20] = "112";
 comments[20] = "Id Pregunta: 3524. ";


//  Id pregunta: 3580 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  En X.400, &iquest;cu&aacute;les son las partes que definen un dominio de gesti&oacute;n?:";
 choices[21]= new Array();
 choices[21][0] = "Un PRMD y un IPM";
 choices[21][1] = "Un AU y un ADMD";
 choices[21][2] = "Un MTA y opcionalmente UA's, MS's y AU's";
 choices[21][3] = "Un AU y un PRMD";
 answers[21] = choices[21][1];
 units[21] = "106";
 comments[21] = "Id Pregunta: 3580. ";


//  Id pregunta: 3617 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  La linea &quot;GET / HTTP/1.1&quot;, dentro de un mensaje HTTP significa:";
 choices[22]= new Array();
 choices[22][0] = "Pide un documento localizado en / ";
 choices[22][1] = "La versi&oacute;n HTTP es 1.1";
 choices[22][2] = "No tiene indicaci&oacute;n del servidor";
 choices[22][3] = "Todas las anteriores respuestas son correctas";
 answers[22] = choices[22][3];
 units[22] = "112";
 comments[22] = "Id Pregunta: 3617. ";


//  Id pregunta: 3666 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Un sistema IVR es aquel que:";
 choices[23]= new Array();
 choices[23][0] = "Proporciona posibilidad de video interactivo (Interactive Video Response)";
 choices[23][1] = "Proporciona respuesta de voz interactiva (Interactive Voice Response)";
 choices[23][2] = "Mejora la calidad de la image de video (Immediate Video Refresh)";
 choices[23][3] = "Recuenta los votos electr&oacute;nicos aplicando confidencialidad (Immediate Vote Recounting)";
 answers[23] = choices[23][1];
 units[23] = "112";
 comments[23] = "Id Pregunta: 3666. ";


//  Id pregunta: 3724 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Los est&aacute;ndares publicados por la IAB (Internet Activities Board) se denominan RFCs que son las siglas de:";
 choices[24]= new Array();
 choices[24][0] = "Recommendation File Contents";
 choices[24][1] = "Requisite File Coordination";
 choices[24][2] = "Request For Comments";
 choices[24][3] = "Register Full Condition";
 answers[24] = choices[24][2];
 units[24] = "112";
 comments[24] = "Id Pregunta: 3724. ";


//  Id pregunta: 3752 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  MIME responde por:";
 choices[25]= new Array();
 choices[25][0] = "Multimedia Internet Mail Extensions";
 choices[25][1] = "Multimedia Information Mail Extensions";
 choices[25][2] = "Multipurpose Internet Mail Extensions";
 choices[25][3] = "Multipurpose Information Mail Extensions";
 answers[25] = choices[25][2];
 units[25] = "106";
 comments[25] = "Id Pregunta: 3752. ";


//  Id pregunta: 3761 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  Para evitar el problema que suponen las cach&eacute;s y las sesiones a la hora de estudiar los accesos a una web se usa una t&eacute;cnica para garantizar el conocimiento de todos los accesos. Esta t&eacute;cnica se conoce como:";
 choices[26]= new Array();
 choices[26][0] = "cookies";
 choices[26][1] = "logs";
 choices[26][2] = "huellas";
 choices[26][3] = "ninguna de las anteriores";
 answers[26] = choices[26][2];
 units[26] = "112";
 comments[26] = "Id Pregunta: 3761. ";


//  Id pregunta: 3769 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  Para usar DNS en una LAN que utiliza Traducciones de Direcciones (NAT) en el firewall:";
 choices[27]= new Array();
 choices[27][0] = "Es recomendable un DNS interno";
 choices[27][1] = "Es recomendable ofrecer el servicio DNS en el firewall";
 choices[27][2] = "Es necesario utilizar un DNS externo al existir NAT";
 choices[27][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[27] = choices[27][0];
 units[27] = "112";
 comments[27] = "Id Pregunta: 3769. ";


//  Id pregunta: 3772 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  PGP, o Pretty Good Privacy:";
 choices[28]= new Array();
 choices[28][0] = "Fue desarrollado por Phil Zimmerman";
 choices[28][1] = "Utiliza IDEA o MD5 como encriptacion";
 choices[28][2] = "Utiliza TripleDES Como encriptacion";
 choices[28][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[28] = choices[28][0];
 units[28] = "106";
 comments[28] = "Id Pregunta: 3772. ";


//  Id pregunta: 3802 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  SAP es:";
 choices[29]= new Array();
 choices[29][0] = "Service Access Protocol, Protocolo de Acceso al Servicio";
 choices[29][1] = "System Analysis Program, Programa de An&aacute;lisis de Sistema";
 choices[29][2] = "Service Access Point, Punto de Acceso al Servicio";
 choices[29][3] = "Sistema de Administraci&oacute;n P&uacute;blica";
 answers[29] = choices[29][2];
 units[29] = "112";
 comments[29] = "Id Pregunta: 3802. ";


//  Id pregunta: 3872 AÃ±o de creación de pregunta: 2003-01-01
 questions[30]= "31)  &iquest;Cu&aacute;l de las siguientes series no es congruente?:";
 choices[30]= new Array();
 choices[30][0] = "http, https.";
 choices[30][1] = "smtp, pop-3, mime.";
 choices[30][2] = "xml, xsl, xjar.";
 choices[30][3] = "direcci&oacute;n IP, m&aacute;scara, dominio.";
 answers[30] = choices[30][2];
 units[30] = "106";
 comments[30] = "Id Pregunta: 3872. Junta Andaluc&iacute;a";


//  Id pregunta: 3974 AÃ±o de creación de pregunta: 2006-01-01
 questions[31]= "32)  &iquest;Cu&aacute;l de los siguientes productos o marcas comerciales  esta relacionado con un Buscador / Indexador?";
 choices[31]= new Array();
 choices[31][0] = "Verity";
 choices[31][1] = "Lucene";
 choices[31][2] = "Los dos anteriores";
 choices[31][3] = "Ninguno de los anteriores";
 answers[31] = choices[31][2];
 units[31] = "112";
 comments[31] = "Id Pregunta: 3974. ";


//  Id pregunta: 4007 AÃ±o de creación de pregunta: 2006-01-01
 questions[32]= "33)  &iquest;En qu&eacute; RFC se encuentra definido el protocolo SMTP (&quot;Simple Mail Transfer Protocol&quot;)?";
 choices[32]= new Array();
 choices[32][0] = "RFC 821";
 choices[32][1] = "RFC 820";
 choices[32][2] = "RFC 823";
 choices[32][3] = "RFC 822";
 answers[32] = choices[32][0];
 units[32] = "106";
 comments[32] = "Id Pregunta: 4007. ";


//  Id pregunta: 4057 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  Existen experiencias de uso real de VoIP en Espa&ntilde;a";
 choices[33]= new Array();
 choices[33][0] = "Si";
 choices[33][1] = "No";
 choices[33][2] = "Si, pero solo en las AAPP";
 choices[33][3] = "No, porque a&uacute;n no hay regulaci&oacute;n que lo permita";
 answers[33] = choices[33][0];
 units[33] = "112";
 comments[33] = "Id Pregunta: 4057. ";


//  Id pregunta: 4059 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  Que tipo de LAN instalarias en un edificio nuevo";
 choices[34]= new Array();
 choices[34][0] = "Usaria cables porque son m&aacute;s seguros y fiables";
 choices[34][1] = "Usaria Wi-Max porque es una tecnologia que me evita tener que instalar cables";
 choices[34][2] = "Usaria Wi-Fi porque me da la misma funcionalidad que los cables pero con una instalaci&oacute;n m&aacute;s r&aacute;pida";
 choices[34][3] = "Cualquiera de las anteriores es valida";
 answers[34] = choices[34][0];
 units[34] = "112";
 comments[34] = "Id Pregunta: 4059. ";


//  Id pregunta: 4062 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  El protocolo de transporte TCP, est&aacute;ndar de internet, NO tiene entre sus caracter&iacute;sticas";
 choices[35]= new Array();
 choices[35][0] = "la entrega fiable de paquetes";
 choices[35][1] = "la detecci&oacute;n y el control de la congesti&oacute;n";
 choices[35][2] = "es orientado a conexi&oacute;n";
 choices[35][3] = "su RFC es 793";
 answers[35] = choices[35][1];
 units[35] = "112,100";
 comments[35] = "Id Pregunta: 4062. ";


//  Id pregunta: 4063 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  Se&ntilde;ale la respuesta correcta en relaci&oacute;n a las extensiones MIME";
 choices[36]= new Array();
 choices[36][0] = "MIME es acr&oacute;nimo de MultiProtocol Internet Mail Extension";
 choices[36][1] = "permite enviar contenido multimedia a trav&eacute;s de HTTP";
 choices[36][2] = "el est&aacute;ndar de seguridad S-MIME permite el env&iacute;o seguro de mensajes y transacciones";
 choices[36][3] = "fue creado por Ia Asociaci&oacute;n de Amigos de Internet (IFA)";
 answers[36] = choices[36][2];
 units[36] = "112";
 comments[36] = "Id Pregunta: 4063. ";


//  Id pregunta: 4070 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  Podemos definir spoofing como";
 choices[37]= new Array();
 choices[37][0] = "captura de datos sensibles mediante la escucha no autorizada";
 choices[37][1] = "amenaza propia de virus y gusanos";
 choices[37][2] = "Suplantaci&oacute;n de la direcci&oacute;n IP ";
 choices[37][3] = "Un mecanismo de enga&ntilde;o basado en t&eacute;cnicas de ingenier&iacute;a social";
 answers[37] = choices[37][2];
 units[37] = "112";
 comments[37] = "Id Pregunta: 4070. ";


//  Id pregunta: 4101 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[38]= new Array();
 choices[38][0] = "World Wide Web es un servicio b&aacute;sico de Internet";
 choices[38][1] = "World Wide Web es un servicio que utiliza el lenguaje HTML basado a su vez en  SGML.";
 choices[38][2] = "a) y b) son correctas";
 choices[38][3] = "a) y b) son incorrectas";
 answers[38] = choices[38][2];
 units[38] = "112";
 comments[38] = "Id Pregunta: 4101. ";


//  Id pregunta: 4102 AÃ±o de creación de pregunta: 2004-01-01
 questions[39]= "40)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[39]= new Array();
 choices[39][0] = "El protocolo TCP/IP nace en la Universidad de Berkeley que lo incluy&oacute; en su UNIX.";
 choices[39][1] = "El protocolo TCP/IP fue creado por IBM que lo incluy&oacute; en su sistema operativo propietario y se extendi&oacute; posteriormente en el mercado.";
 choices[39][2] = "El protocolo TCP/IP nace con el objetivo de interconectar ordenadores de distintas clases.";
 choices[39][3] = "El protocolo TCP/IP nace con el objetivo de comunicar redes diferentes";
 answers[39] = choices[39][3];
 units[39] = "112";
 comments[39] = "Id Pregunta: 4102. ";


//  Id pregunta: 4103 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  Los no dos de interconexi&oacute;n que forman el backbone de Iternet en la actualidad, reciben el nombre de:";
 choices[40]= new Array();
 choices[40][0] = "NBA";
 choices[40][1] = "NAT";
 choices[40][2] = "NSFNet";
 choices[40][3] = "NAP";
 answers[40] = choices[40][3];
 units[40] = "112";
 comments[40] = "Id Pregunta: 4103. ";


//  Id pregunta: 4105 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  Internet 2:";
 choices[41]= new Array();
 choices[41][0] = "Es una red telem&aacute;tica superpuesta a la red Internet y que hace las funciones de backup.";
 choices[41][1] = "Es una red de fibra &oacute;ptica cuyo backbone est&aacute; constituido por GigaPop.";
 choices[41][2] = "Prev&eacute; velocidades de hasta 622 Mbps para usuarios particulares.";
 choices[41][3] = "Ninguna respuesta es correcta";
 answers[41] = choices[41][2];
 units[41] = "112";
 comments[41] = "Id Pregunta: 4105. ";


//  Id pregunta: 4107 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  La burbuja de las puntocom explot&oacute;:";
 choices[42]= new Array();
 choices[42][0] = "En el a&ntilde;o 1999";
 choices[42][1] = "A finales del 1999 y durante el 2000";
 choices[42][2] = "A finales del 2000 y durante el 2001";
 choices[42][3] = "A finales del 2001 y durante el 2002";
 answers[42] = choices[42][2];
 units[42] = "112";
 comments[42] = "Id Pregunta: 4107. ";


//  Id pregunta: 4108 AÃ±o de creación de pregunta: 2006-01-01
 questions[43]= "44)  Existen varias formas de acceder al servicio de correo electr&oacute;nico:";
 choices[43]= new Array();
 choices[43][0] = "B&aacute;sicamente dos, a trav&eacute;s de webmail o a trav&eacute;s de programas de correo electr&oacute;nico especializado.";
 choices[43][1] = "B&aacute;sicamente dos, a trav&eacute;s de webmail o a trav&eacute;s de programas denominados P2P (Peer To Peer).";
 choices[43][2] = "El correo electr&oacute;nico es en todo caso un servicio de pago.";
 choices[43][3] = "Ninguna de las anteriores es correcta";
 answers[43] = choices[43][0];
 units[43] = "112";
 comments[43] = "Id Pregunta: 4108. ";


//  Id pregunta: 4116 AÃ±o de creación de pregunta: 2006-01-01
 questions[44]= "45)  Wikipedia es:";
 choices[44]= new Array();
 choices[44][0] = "Un diccionario de pago.";
 choices[44][1] = "Un diccionario libre con licencia GFDL.";
 choices[44][2] = "Una enciclopedia de pago publicada en varios idiomas.";
 choices[44][3] = "Una enciclopedia libre escrita por voluntarios.";
 answers[44] = choices[44][3];
 units[44] = "112";
 comments[44] = "Id Pregunta: 4116. ";


//  Id pregunta: 4129 AÃ±o de creación de pregunta: 2006-01-01
 questions[45]= "46)  Servicio de directorio y registro de nombres basado en Java";
 choices[45]= new Array();
 choices[45][0] = "JNDI";
 choices[45][1] = "UDDI";
 choices[45][2] = "JINI";
 choices[45][3] = "LDAP";
 answers[45] = choices[45][0];
 units[45] = "106";
 comments[45] = "Id Pregunta: 4129. ";


//  Id pregunta: 4192 AÃ±o de creación de pregunta: 2006-01-01
 questions[46]= "47)  Pueden encontrarse registros SOA, NS, CNAME, MX, etc. en el contexto de";
 choices[46]= new Array();
 choices[46][0] = "Un Servicio Web";
 choices[46][1] = "Una Arquitectura Orientada a Servicios (SOA)";
 choices[46][2] = "Un servidor DNS";
 choices[46][3] = "Unos identificadores XML de un servicio RSS";
 answers[46] = choices[46][2];
 units[46] = "106";
 comments[46] = "Id Pregunta: 4192. ";


//  Id pregunta: 4493 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  La conexi&oacute;n de una red privada a Internet por medio de una pasarela (o &quot;gateway&quot;) NAT permite:";
 choices[47]= new Array();
 choices[47][0] = "Asignar din&aacute;micamente direcciones IP publicas a un ordenador";
 choices[47][1] = "Actuar como cortafuegos filtrando los paquetes de datos recibidos.";
 choices[47][2] = "Asignar din&aacute;micamente direcciones IP privadas dentro de una red privada.";
 choices[47][3] = "Que varios ordenadores accedan a Internet al mismo tiempo por medio de una &uacute;nica direcci&oacute;n IP publica.";
 answers[47] = choices[47][3];
 units[47] = "112";
 comments[47] = "Id Pregunta: 4493. ";


//  Id pregunta: 4712 AÃ±o de creación de pregunta: 2007-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l de los siguientes no es un t&eacute;rmino sobre Internet?";
 choices[48]= new Array();
 choices[48][0] = "Cookies.";
 choices[48][1] = "Spam.";
 choices[48][2] = "Netnannies.";
 choices[48][3] = "Brownies.";
 answers[48] = choices[48][3];
 units[48] = "112";
 comments[48] = "Id Pregunta: 4712. Examen 2006 JCYL";


//  Id pregunta: 4733 AÃ±o de creación de pregunta: 2007-01-01
 questions[49]= "50)  Los registros glue de una zona DNS son aquellos que:";
 choices[49]= new Array();
 choices[49][0] = "Son los registros que mantienen la resoluci&oacute;n inversa.";
 choices[49][1] = " Son los registros que mantienen el espacio de nombres de la zona.";
 choices[49][2] = "Son los registros que permiten intercambiar informaci&oacute;n entre las diferentes zonas/subzonas";
 choices[49][3] = "Son los registros que permiten la consulta delegada de otros sistemas dns.";
 answers[49] = choices[49][1];
 units[49] = "112";
 comments[49] = "Id Pregunta: 4733. Examen 2006 JCYL";


//  Id pregunta: 4972 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l es la versi&oacute;n ampliada del protocolo BOOTP?:";
 choices[50]= new Array();
 choices[50][0] = "DHCP.";
 choices[50][1] = "RARP.";
 choices[50][2] = "DNS.";
 choices[50][3] = "WINS.";
 answers[50] = choices[50][0];
 units[50] = "112";
 comments[50] = "Id Pregunta: 4972. Examen TIC B 2007";


//  Id pregunta: 4991 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  &iquest;Cu&aacute;l de los siguientes NO es un servicio de Internet con arquitectura cliente/servidor?:";
 choices[51]= new Array();
 choices[51][0] = "ADSL";
 choices[51][1] = "Grupos noticias (news)";
 choices[51][2] = "FTP";
 choices[51][3] = "IRC";
 answers[51] = choices[51][0];
 units[51] = "112";
 comments[51] = "Id Pregunta: 4991. Examen TIC A 2007";


//  Id pregunta: 4999 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  El protocolo DHCP (&quot;Dynamic Host Configuration Protocol&quot;) permite:";
 choices[52]= new Array();
 choices[52][0] = "Resolver la direcci&oacute;n del nombre de un host.";
 choices[52][1] = "Eliminar paquetes TCP (Transmission Control Protocol)";
 choices[52][2] = "Asignar din&aacute;micamente direcciones IP";
 choices[52][3] = "Enrutar paquetes IP";
 answers[52] = choices[52][2];
 units[52] = "112";
 comments[52] = "Id Pregunta: 4999. Examen TIC A 2007";


//  Id pregunta: 5509 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  &iquest;C&oacute;mo se garantiza la integridad de la factura electr&oacute;nica?";
 choices[53]= new Array();
 choices[53][0] = "Con firma electr&oacute;nica avanzada basada en un certificado reconocido";
 choices[53][1] = "Mediante sello electr&oacute;nico avanzado basado en un certificado reconocido que identifique a la persona jur&iacute;dica o entidad sin personalidad jur&iacute;dica que selle la factura electr&oacute;nica, a trav&eacute;s de su denominaci&oacute;n o raz&oacute;n social y su n&uacute;mero de identificaci&oacute;n fiscal.";
 choices[53][2] = "A y B son correctas";
 choices[53][3] = "No es necesario garantizar la integridad de la factura pues ya se ve en el remitente";
 answers[53] = choices[53][2];
 units[53] = "70";
 comments[53] = "Id Pregunta: 5509. NULL";


//  Id pregunta: 5612 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  Alguno de los &oacute;rganos a trav&eacute;s del cu&aacute;l ISOC ejerce sus funciones son:";
 choices[54]= new Array();
 choices[54][0] = "IAB para la asignaci&oacute;n de recursos. IEFT para la especificaci&oacute;n de est&aacute;ndares.";
 choices[54][1] = "IEFT para la especificaci&oacute;n de est&aacute;ndares. IESG para la supervisi&oacute;n y aprobaci&oacute;n de normas";
 choices[54][2] = "IAB para la supervisi&oacute;n y aprobaci&oacute;n de normas. IESG para la coordinaci&oacute;n";
 choices[54][3] = "IEFT para la coordinaci&oacute;n. IANA para la asignaci&oacute;n de recursos";
 answers[54] = choices[54][2];
 units[54] = "112";
 comments[54] = "Id Pregunta: 5612. ";


//  Id pregunta: 5627 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  Indique cu&aacute;l de estos productos no forman parte de los que proporcionan seguridad en el correo electr&oacute;nico";
 choices[55]= new Array();
 choices[55][0] = "PGP";
 choices[55][1] = "PEM";
 choices[55][2] = "MOSS";
 choices[55][3] = "Single MIME";
 answers[55] = choices[55][3];
 units[55] = "106";
 comments[55] = "Id Pregunta: 5627. Ser&iacute;a S/MIME";


//  Id pregunta: 5820 AÃ±o de creación de pregunta: 2009-01-01
 questions[56]= "57)  Indique cu&aacute;l de los siguientes NO se corresponde con un tipo de registro de recurso del Sistema de Nombres de Dominio (DNS &quot; Domain Name System&quot;):";
 choices[56]= new Array();
 choices[56][0] = "HINFO &quot;Host Information&quot;";
 choices[56][1] = "SOA &quot; Start Of Authority&quot;";
 choices[56][2] = "TTL &quot;Time-To- Live&quot;";
 choices[56][3] = "WKS &quot;Well-Now-Services&quot;";
 answers[56] = choices[56][2];
 units[56] = "106";
 comments[56] = "Id Pregunta: 5820. MAP 2008 A1";


//  Id pregunta: 5884 AÃ±o de creación de pregunta: 2009-01-01
 questions[57]= "58)  En relaci&oacute;n a &quot;Internet Assigned Numbers Authority&quot; (IANA), indique cu&aacute;l NO es una de sus funciones:";
 choices[57]= new Array();
 choices[57][0] = "IANA coordina a nivel global el &quot;DNS root&quot;";
 choices[57][1] = "IANA gestiona el dominio .int (top-level)";
 choices[57][2] = "IANA asigna las direcciones IP";
 choices[57][3] = "IANA administra el dominio .ARPA en estrecha relaci&oacute;n con el Internet Architecture Board";
 answers[57] = choices[57][2];
 units[57] = "112";
 comments[57] = "Id Pregunta: 5884. MAP 2008 A1";


//  Id pregunta: 6045 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  En relaci&oacute;n con el Single Sign On";
 choices[58]= new Array();
 choices[58][0] = "Los sistemas Web Single Sign On utilizan 'cookies' para reconocer a los usuarios y su estado de autenticaci&oacute;n";
 choices[58][1] = "Los usuarios de los sistemas SSO mediante Kerberos reciben un 'ticket' al registrarse que luego se presenta en las aplicaciones cliente";
 choices[58][2] = "Las dos respuestas anteriores son correctas";
 choices[58][3] = "Todas las respuestas anteriores son incorrectas";
 answers[58] = choices[58][2];
 units[58] = "118";
 comments[58] = "Id Pregunta: 6045. ";


//  Id pregunta: 6122 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  Un navegador web que tenga que acceder al objeto http://orga.net:5050/imagen.jpg, interrogar&aacute; al servidor local de DNS:";
 choices[59]= new Array();
 choices[59][0] = "Sobre el registro de tipo NS correspondiente al nombre orga.net.";
 choices[59][1] = "Sobre el registro de tipo A correspondiente al nombre orga.net.";
 choices[59][2] = "Sobre el registro de tipo NET correspondiente al nombre orga.net en cualquier puerto.";
 choices[59][3] = "Sobre el registro de tipo SRV correspondiente al nombre orga.net en el puerto 5050.";
 answers[59] = choices[59][1];
 units[59] = "112";
 comments[59] = "Id Pregunta: 6122. TIC A 2009";


//  Id pregunta: 6159 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  En cuanto a SFTP, se puede afirmar:";
 choices[60]= new Array();
 choices[60][0] = "Se obtiene al ejecutar FTP sobre SSH.";
 choices[60][1] = "Las siglas SFTP significan Simple File Transfer Protocol.";
 choices[60][2] = "El protocolo SFTP en s&iacute; no facilita la autenticaci&oacute;n y la seguridad, sino que espera que el protocolo subyacente asegure a este.";
 choices[60][3] = "Todas las respuestas anteriores son correctas.";
 answers[60] = choices[60][2];
 units[60] = "112";
 comments[60] = "Id Pregunta: 6159. ";


//  Id pregunta: 6184 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  Indique la afirmaci&oacute;n falsa sobre los sistemas de correo electr&oacute;nico SMTP:";
 choices[61]= new Array();
 choices[61][0] = "Es posible establecer DNS blacklist y whitelist en el cliente de correo y/o en el servidor.";
 choices[61][1] = "SMTP permite enviar mensajes codificados seg&uacute;n ASCII de 7 bits y longitud m&aacute;xima de 1000 caracteres.";
 choices[61][2] = "La cabecera MIME-Version debe contener el valor 2.0";
 choices[61][3] = "La cabecera  de un mensaje de correo  SMTP se especifica en la RFC 822.";
 answers[61] = choices[61][2];
 units[61] = "106";
 comments[61] = "Id Pregunta: 6184. ";


//  Id pregunta: 6342 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  &iquest;Cu&aacute;l de los siguientes servicios o aplicaciones no se asocia a la Web 2.0?";
 choices[62]= new Array();
 choices[62][0] = "Facebook";
 choices[62][1] = "Wikipedia";
 choices[62][2] = "Flickr";
 choices[62][3] = "Geocities";
 answers[62] = choices[62][3];
 units[62] = "120";
 comments[62] = "Id Pregunta: 6342. NULL";


//  Id pregunta: 6349 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  &iquest;Cu&aacute;l de los siguientes no es un servicio de marcadores sociales en web?";
 choices[63]= new Array();
 choices[63][0] = "Delicious";
 choices[63][1] = "Digg";
 choices[63][2] = "Visconti";
 choices[63][3] = "Reddit";
 answers[63] = choices[63][2];
 units[63] = "120";
 comments[63] = "Id Pregunta: 6349. NULL";


//  Id pregunta: 6453 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  &iquest;Qu&eacute; m&eacute;todo de HTTP se debe utilizar para comprobar la validez de una p&aacute;gina sin que la llamada retorne el cuerpo del mensaje?";
 choices[64]= new Array();
 choices[64][0] = "GET";
 choices[64][1] = "HEAD";
 choices[64][2] = "POST";
 choices[64][3] = "SERVICE";
 answers[64] = choices[64][1];
 units[64] = "112";
 comments[64] = "Id Pregunta: 6453. Castilla La Mancha 2009";


//  Id pregunta: 7259 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  En un servidor DNS, un registro MX hace referencia a:";
 choices[65]= new Array();
 choices[65][0] = "Un servidor web";
 choices[65][1] = "Un servidor de correo";
 choices[65][2] = "Un servidor seguro";
 choices[65][3] = "El servidor DNS principal";
 answers[65] = choices[65][1];
 units[65] = "106";
 comments[65] = "Id Pregunta: 7259. Examen TIC B 2009";


//  Id pregunta: 7260 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  La diferencia entre los protocolos POP  e IMAP es que:";
 choices[66]= new Array();
 choices[66][0] = "Uno es un protocolo de env&iacute;o de correo electr&oacute;nico, y el otro lo es de recepci&oacute;n";
 choices[66][1] = "Uno es un protocolo de env&iacute;o de correo electr&oacute;nico, y el otro lo es de env&iacute;o y recepci&oacute;n";
 choices[66][2] = "Uno establece una comunicaci&oacute;n bidireccional y el otro no";
 choices[66][3] = "La capa de ubicaci&oacute;n de cada uno de ellos en el modelo TCP/IP es distinta";
 answers[66] = choices[66][2];
 units[66] = "106";
 comments[66] = "Id Pregunta: 7260. Examen TIC B 2009";


//  Id pregunta: 7271 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  Una conexi&oacute;n FTP puede funcionar en modo activo o pasivo. Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[67]= new Array();
 choices[67][0] = "El modo pasivo sirve, para que una vez iniciada una transferencia de archivos, poder iniciar otra transferencia sin tener que esperar a la finalizaci&oacute;n de la primera";
 choices[67][1] = "El modo pasivo es muy recomendable cuando el cliente tiene una conexi&oacute;n con cortafuegos, ya que en esta modalidad, tanto el canal de control como el canal de datos los abre el cliente";
 choices[67][2] = "En el modo pasivo se fuerza que, tanto el cliente como el servidor usen los puertos 20 y 21 para el env&iacute;o de los datos y la informaci&oacute;n de control rec&iacute;procamente y evitar problemas con los cortafuegos";
 choices[67][3] = "El modo pasivo, facilita que tanto la informaci&oacute;n de control como la de datos se transmita por el mismo puerto (el 21 en el servidor y cualquier puerto en el cliente)";
 answers[67] = choices[67][1];
 units[67] = "112";
 comments[67] = "Id Pregunta: 7271. NULL";


//  Id pregunta: 7286 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)  &iquest;Cu&aacute;l de los siguientes elementos se puede decir que genuinamente forma parte de la web 2.0?";
 choices[68]= new Array();
 choices[68][0] = "Sindicaci&oacute;n de contenidos";
 choices[68][1] = "Sistemas de administraci&oacute;n de contenidos (CMS)";
 choices[68][2] = "P&aacute;ginas personales";
 choices[68][3] = "Directorios (taxonom&iacute;as)";
 answers[68] = choices[68][0];
 units[68] = "120";
 comments[68] = "Id Pregunta: 7286. Examen TIC B 2009";


//  Id pregunta: 7321 AÃ±o de creación de pregunta: 2010-01-01
 questions[69]= "70)  Seg&uacute;n la ley 34/2002 de Servicios de la Sociedad de la Informaci&oacute;n y Comercio Electr&oacute;nico cu&aacute;l de los siguientes servicios se encuentra excluidos del &aacute;mbito de aplicaci&oacute;n de la Ley:";
 choices[69]= new Array();
 choices[69][0] = "Los servicios prestados por notarios y registradores de la propiedad y mercantiles en el ejercicio de sus respectivas funciones p&uacute;blicas";
 choices[69][1] = "Los servicios prestados por prestadores de servicios de la sociedad de la informaci&oacute;n establecidos en Espa&ntilde;a";
 choices[69][2] = "Los servicios de la sociedad de la informaci&oacute;n que los prestadores residentes o domiciliados en otro Estado ofrezcan a trav&eacute;s de un establecimiento permanente situado en Espa&ntilde;a";
 choices[69][3] = "Servicios que afecten a derechos de propiedad intelectual o industrial prestados por prestadores de servicios establecidos en otro Estado miembro de la Uni&oacute;n Europea o del Espacio Econ&oacute;mico Europeo cuando el destinatario de los servicios radique en Espa&ntilde;a";
 answers[69] = choices[69][0];
 units[69] = "70";
 comments[69] = "Id Pregunta: 7321. NULL";


//  Id pregunta: 7324 AÃ±o de creación de pregunta: 2010-01-01
 questions[70]= "71)  Se&ntilde;ala cu&aacute;l de las siguientes no es una tecnolog&iacute;a empleada en el pago a trav&eacute;s de Internet:";
 choices[70]= new Array();
 choices[70][0] = "3D Secure";
 choices[70][1] = "UCAF";
 choices[70][2] = "Urbinet ";
 choices[70][3] = "SET ";
 answers[70] = choices[70][2];
 units[70] = "70";
 comments[70] = "Id Pregunta: 7324. NULL";


//  Id pregunta: 7325 AÃ±o de creación de pregunta: 2010-01-01
 questions[71]= "72)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones no es correcta respecto a 'facturae':";
 choices[71]= new Array();
 choices[71][0] = "Es el formato a utilizar para la facturaci&oacute;n electr&oacute;nica a las Administraciones P&uacute;blicas";
 choices[71][1] = "Se trata de un formato basado en el est&aacute;ndar XML (Extensible Markup Language)";
 choices[71][2] = "Puede hacer uso de firma electr&oacute;nica avanzada para garantizar la autenticidad e integridad";
 choices[71][3] = "No permite el uso de XADES para la firma electr&oacute;nica avanzada";
 answers[71] = choices[71][3];
 units[71] = "70";
 comments[71] = "Id Pregunta: 7325. NULL";


//  Id pregunta: 8164 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  En el marco de los servicios de Directorio, se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es cierta:";
 choices[72]= new Array();
 choices[72][0] = "El est&aacute;ndar X.500 define cuatro clases de objetos que pueden ser representados en el directorio y que se codifican utilizando la notaci&oacute;n ASN.1.";
 choices[72][1] = "El protocolo LDAP, para el acceso a directorios X.500, es una evoluci&oacute;n de DAP, que soporta OSI y TCP/IP.";
 choices[72][2] = "En su versi&oacute;n 2, LDAP incorpora la posibilidad de acceso an&oacute;nimo y la de acceso cifrado.";
 choices[72][3] = "La operaci&oacute;n de a&ntilde;adir una entrada a un directorio, s&oacute;lo requiere que el nombre distinguido (DN) de la entrada a a&ntilde;adir,no exista previamente en &eacute;l.";
 answers[72] = choices[72][0];
 units[72] = "106";
 comments[72] = "Id Pregunta: 8164. Examen TIC A1 2010";


//  Id pregunta: 8308 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l es el acr&oacute;nimo del organismo responsable de definir toda la arquitectura de Internet? ";
 choices[73]= new Array();
 choices[73][0] = "IETF. ";
 choices[73][1] = "ICANN. ";
 choices[73][2] = "IAB. ";
 choices[73][3] = "IRTF.";
 answers[73] = choices[73][2];
 units[73] = "112,42";
 comments[73] = "Id Pregunta: 8308. Examen TIC A2 2010";


//  Id pregunta: 8435 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  &iquest;Qu&eacute; proyecto europeo pretende establecer una plataforma de interoperabilidad y reconocimiento mutuo transfronterizo entre las identidades electr&oacute;nicas existentes en cada Estado Europeo?";
 choices[74]= new Array();
 choices[74][0] = "Conecta";
 choices[74][1] = "Robinson";
 choices[74][2] = "Stork";
 choices[74][3] = "Interoperability card";
 answers[74] = choices[74][2];
 units[74] = "118";
 comments[74] = "Id Pregunta: 8435. ";


//  Id pregunta: 8547 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  Un registro MX, en un servidor DNS, &iquest;a qu&eacute; hace referencia?:";
 choices[75]= new Array();
 choices[75][0] = "Al servidor DNS principal";
 choices[75][1] = "Al servidor de correo asociado al dominio";
 choices[75][2] = "Al servidor seguro asociado al dominio";
 choices[75][3] = "Ninguna de las anteriores es correcta";
 answers[75] = choices[75][1];
 units[75] = "106";
 comments[75] = "Id Pregunta: 8547. Analista Ayto. Madrid 2010";


//  Id pregunta: 8667 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  En relaci&oacute;n a los puertos utilizados en el protocolo FTP se&ntilde;ale la afirmaci&oacute;n correcta.";
 choices[76]= new Array();
 choices[76][0] = "Utiliza el 21 para datos y el 20 para control";
 choices[76][1] = "Utiliza el 20 para datos y el 21 para control";
 choices[76][2] = "Utiliza el 23 para datos y el 25 para control";
 choices[76][3] = "Utiliza el 25 para datos y el 23 para control";
 answers[76] = choices[76][1];
 units[76] = "112";
 comments[76] = "Id Pregunta: 8667. Examen UPM A2 2011";


//  Id pregunta: 8778 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  Las actualizaciones de zonas entre servidores DNS se tienen lugar usando los puertos:";
 choices[77]= new Array();
 choices[77][0] = "53 TCP";
 choices[77][1] = "453 TCP";
 choices[77][2] = "456 UDP";
 choices[77][3] = "53 UDP";
 answers[77] = choices[77][0];
 units[77] = "100, 112";
 comments[77] = "Id Pregunta: 8778. Examen UPM A2 2011";


//  Id pregunta: 8843 AÃ±o de creación de pregunta: 2011-01-01
 questions[78]= "79)   Se entiende por SSO ";
 choices[78]= new Array();
 choices[78][0] = " Un procedimiento de autenticaci&oacute;n que permite acceder a diversos recursos inform&aacute;ticos utilizando una &uacute;nica identificaci&oacute;n";
 choices[78][1] = " Un sistema basado el claves SSL para la gesti&oacute;n remota de claves sim&eacute;tricas";
 choices[78][2] = " Un sistema de gesti&oacute;n y almacenamiento de claves fraccionadas con coherencia asim&eacute;trica";
 choices[78][3] = " Un procedimiento de comunicaciones seguras entre objetos basado en sockets";
 answers[78] = choices[78][0];
 units[78] = "118";
 comments[78] = "Id Pregunta: 8843. Examen UC3M 2010";


//  Id pregunta: 8909 AÃ±o de creación de pregunta: 2011-01-01
 questions[79]= "80)  Indicar cu&aacute;l de las siguientes herramientas y protocolos permite el control remoto de puestos de usuario:";
 choices[79]= new Array();
 choices[79][0] = "NNTP.";
 choices[79][1] = "VNC.";
 choices[79][2] = "NTP.";
 choices[79][3] = "FTP";
 answers[79] = choices[79][1];
 units[79] = "118";
 comments[79] = "Id Pregunta: 8909. Operador Ayto. Madrid 2010";


//  Id pregunta: 9168 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  Modos de funcionamiento de la tecnolog&iacute;a NFC(near field communicator):";
 choices[80]= new Array();
 choices[80][0] = "Independiente/Infraestructura";
 choices[80][1] = "Activo/Pasivo";
 choices[80][2] = "Manual/Continuo";
 choices[80][3] = "Modo voz/Modo voz + datos";
 answers[80] = choices[80][1];
 units[80] = "70";
 comments[80] = "Id Pregunta: 9168. Examen TIC A2 2011";


//  Id pregunta: 9468 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  Indique qu&eacute; mensaje utiliza el emisor SMTP para comprobar si el servidor acepta el uso de extensiones de servicio SMTP";
 choices[81]= new Array();
 choices[81][0] = "DATA";
 choices[81][1] = "EHLO";
 choices[81][2] = "HELO";
 choices[81][3] = "MAIL";
 answers[81] = choices[81][1];
 units[81] = "106";
 comments[81] = "Id Pregunta: 9468. ";


//  Id pregunta: 9469 AÃ±o de creación de pregunta: 2013-01-01
 questions[82]= "83)  En relaci&oacute;n al est&aacute;ndar X.400 indique la afirmaci&oacute;n verdadera";
 choices[82]= new Array();
 choices[82][0] = "Tiene que funcionar necesariamente sobre redes IP";
 choices[82][1] = "El Subsistema de transferencia de mensajes (MTS) contempla la definici&oacute;n de agentes de usuario (UA) que son los componentes l&oacute;gicos que interact&uacute;an con el usuario para el env&iacute;o y recepci&oacute;n de los mensajes electr&oacute;nicos";
 choices[82][2] = "Una MPDU puede ser de tres tipos: sondas, informes de notificaci&oacute;n o entrega y el mensaje en s&iacute;";
 choices[82][3] = "P2 es el protocolo definido para la comunicaci&oacute;n entre el MTA y el agente del usuario (UA) a trav&eacute;s del elemento MS o repositorio de mensajes";
 answers[82] = choices[82][2];
 units[82] = "106";
 comments[82] = "Id Pregunta: 9469. ";


//  Id pregunta: 9470 AÃ±o de creación de pregunta: 2013-01-01
 questions[83]= "84)  Indique la afirmaci&oacute;n verdadera en relaci&oacute;n con el protocolo PEM de seguridad en el correo electr&oacute;nico";
 choices[83]= new Array();
 choices[83][0] = "PEM es un protocolo de seguridad extremo a extremo entre Agentes de Usuario (UA)";
 choices[83][1] = "PEM proporciona autenticaci&oacute;n en origen y confidencialidad, pero no proporciona integridad";
 choices[83][2] = "Sus siglas hacen referencia a &quot;Private Extended Mail&quot;";
 choices[83][3] = "Todas las anteriores son verdaderas";
 answers[83] = choices[83][0];
 units[83] = "106";
 comments[83] = "Id Pregunta: 9470. ";


//  Id pregunta: 9471 AÃ±o de creación de pregunta: 2013-01-01
 questions[84]= "85)  Respecto al est&aacute;ndar de servicios de directorio X.500, se&ntilde;ale la afirmaci&oacute;n falsa";
 choices[84]= new Array();
 choices[84][0] = "El DIB se divide en distintos trozos de informaci&oacute;n que se estructuran en una jerarqu&iacute;a en &aacute;rbol denominada DIT";
 choices[84][1] = "Cada parte del DIB se almacena en un servidor denominado DSA";
 choices[84][2] = "El intercambio de informaci&oacute;n entre dos DSA est&aacute; basado en los protocolos DSP y DOP";
 choices[84][3] = "El DSA se comunica con el DIB utilizando el protocolo DAP";
 answers[84] = choices[84][3];
 units[84] = "106";
 comments[84] = "Id Pregunta: 9471. ";


//  Id pregunta: 9472 AÃ±o de creación de pregunta: 2013-01-01
 questions[85]= "86)  Se&ntilde;ale la afirmaci&oacute;n falsa en relaci&oacute;n con el protocolo LDAP";
 choices[85]= new Array();
 choices[85][0] = "LDAP env&iacute;a los comandos y respuestas siguiendo la notaci&oacute;n ASN.1";
 choices[85][1] = "El desarrollo de la especificaci&oacute;n LDAP se realiza a trav&eacute;s del IETF";
 choices[85][2] = "La funci&oacute;n LAUTH permite autenticar al cliente frente al directorio";
 choices[85][3] = "La unidad b&aacute;sica de informaci&oacute;n almacenada en el directorio es la entrada (entry)";
 answers[85] = choices[85][2];
 units[85] = "106";
 comments[85] = "Id Pregunta: 9472. ";


//  Id pregunta: 9794 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  El Lenguaje de Ontolog&iacute;as Web (OWL) proporciona tres sublenguajes, cada uno con nivel de expresividad mayor que el anterior. Se&ntilde;ale el que NO es correcto:";
 choices[86]= new Array();
 choices[86][0] = "OWL Lite.";
 choices[86][1] = "OWL DL.";
 choices[86][2] = "OWL Extension.";
 choices[86][3] = "OWL Full.";
 answers[86] = choices[86][2];
 units[86] = "120";
 comments[86] = "Id Pregunta: 9794. Examen TIC A2 2013";


//  Id pregunta: 9863 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  Indique la opci&oacute;n falsa:";
 choices[87]= new Array();
 choices[87][0] = "Las siglas HOTP hacen referencia la algoritmo HMAC-based One Time Password.";
 choices[87][1] = "HOTP es un est&aacute;ndar abierto.";
 choices[87][2] = "Son implementaciones de HOTP: Barada, Google Authenticator, LinOTP. ";
 choices[87][3] = "HOTP no puede ser utilizado para autenticar a un usuario en un sistema a trav&eacute;s de un servidor de autenticaci&oacute;n.";
 answers[87] = choices[87][3];
 units[87] = "118";
 comments[87] = "Id Pregunta: 9863. HOTP SI se puede utilizar para autenticar a un usuario en un sistema.";


//  Id pregunta: 9883 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  El protocolo SET (Secure Electronic Transaction)";
 choices[88]= new Array();
 choices[88][0] = "Fue desarrollado en 1990 mediante acuerdo bilateral entre Visa e IBM.";
 choices[88][1] = "impide que el vendedor acceda a la informaci&oacute;n de pago.";
 choices[88][2] = "permite que el banco acceda a los datos del pedido para tramitar el pago.";
 choices[88][3] = "no abarca ni liquidaciones de pagos ni anulaciones.";
 answers[88] = choices[88][1];
 units[88] = "70";
 comments[88] = "Id Pregunta: 9883. TIC A1, Examen 2013";


//  Id pregunta: 9993 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  &iquest;Cu&aacute;l de las siguientes normas no hace referencia a la factura electr&oacute;nica?";
 choices[89]= new Array();
 choices[89][0] = "Ley 11/2007";
 choices[89][1] = "Real Decreto 1619/2012";
 choices[89][2] = "Ley 25/2013";
 choices[89][3] = "Real Decreto Legislativo 3/2011";
 answers[89] = choices[89][0];
 units[89] = "70";
 comments[89] = "Id Pregunta: 9993. NULL";


//  Id pregunta: 10011 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  &iquest;Que disposici&oacute;n legal determina el procedimiento para la expedici&oacute;n del DNI electr&oacute;nico y sus certificados de firma electr&oacute;nica?";
 choices[90]= new Array();
 choices[90][0] = "Ley 11/2007, de 22 de junio.";
 choices[90][1] = "RD 4/2010, de 8 de enero.";
 choices[90][2] = "RD 1553/2005, de 23 de diciembre.";
 choices[90][3] = "Ley 26/2007, de 28 de diciembre.";
 answers[90] = choices[90][2];
 units[90] = "70";
 comments[90] = "Id Pregunta: 10011. ";


//  Id pregunta: 10037 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  Con respecto al protocolo DNS. &iquest;Cu&aacute;l de las siguientes opciones NO es una parte de un mensaje DNS?";
 choices[91]= new Array();
 choices[91][0] = "Cabecera.";
 choices[91][1] = "Checksum.";
 choices[91][2] = "Registros de recursos de Respuesta.";
 choices[91][3] = "Registros de recursos de Autoridad.";
 answers[91] = choices[91][1];
 units[91] = "112";
 comments[91] = "Id Pregunta: 10037. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10498 AÃ±o de creación de pregunta: 2014-01-01
 questions[92]= "93)  En el &aacute;mbito de las redes e internet, &iquest;qu&eacute; significan las siglas TOR?";
 choices[92]= new Array();
 choices[92][0] = "The Outer Router";
 choices[92][1] = "The Ominous Router";
 choices[92][2] = "The Onion Router";
 choices[92][3] = "Ninguna es correcta";
 answers[92] = choices[92][2];
 units[92] = "112";
 comments[92] = "Id Pregunta: 10498. http://es.wikipedia.org/wiki/Tor";


//  Id pregunta: 10605 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Para que un organismo utilice la pasarela de pagos de la AEAT:";
 choices[93]= new Array();
 choices[93][0] = "Necesita un certificado de sede electr&oacute;nica.";
 choices[93][1] = "Debe implementar una interfaz REST.";
 choices[93][2] = "Debe poseer un certificado de persona f&iacute;sica, jur&iacute;dica o de componente.";
 choices[93][3] = "La DTIC recomienda que cada organismo implemente su propia pasarela de pagos.";
 answers[93] = choices[93][2];
 units[93] = "70";
 comments[93] = "Id Pregunta: 10605. ";


//  Id pregunta: 10669 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  El t&eacute;rmino Web 2.0 se refiere a:";
 choices[94]= new Array();
 choices[94][0] = "Una generaci&oacute;n de Web basada en comunidades de usuarios que fomenta la colaboraci&oacute;n y el intercambio &aacute;gil de informaci&oacute;n entre los usuarios.";
 choices[94][1] = "Una asociaci&oacute;n de redes sociales.";
 choices[94][2] = "Un concepto original de la web basado en p&aacute;ginas HTML din&aacute;micas.";
 choices[94][3] = "Un conjunto de aplicaciones online del campo de la dom&oacute;tica.";
 answers[94] = choices[94][0];
 units[94] = "120";
 comments[94] = "Id Pregunta: 10669. ";


//  Id pregunta: 10921 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  SAML (Security Assertion Markup Language):";
 choices[95]= new Array();
 choices[95][0] = "Establece protocolos de seguridad para el intercambio de identidades.";
 choices[95][1] = "Establece protocolos de seguridad para el firmado de estructuras XML.";
 choices[95][2] = "Es un est&aacute;ndar establecido por IEEE como alternativa a WS-Security en sistemas de autenticaci&oacute;n Single Sign-On.";
 choices[95][3] = "Es un est&aacute;ndar establecido por OASIS como alternativa a WS-Security en sistemas de autenticaci&oacute;n Single Sign-On.";
 answers[95] = choices[95][0];
 units[95] = "118";
 comments[95] = "Id Pregunta: 10921. TIC A1 AGE 2014";


//  Id pregunta: 10928 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  La facturaci&oacute;n electr&oacute;nica ser&aacute; obligatoria para las Administraciones P&uacute;blicas en:";
 choices[96]= new Array();
 choices[96][0] = "Enero de 2015.";
 choices[96][1] = "Enero de 2016.";
 choices[96][2] = "Diciembre de 2016.";
 choices[96][3] = "Diciembre de 2015.";
 answers[96] = choices[96][0];
 units[96] = "70";
 comments[96] = "Id Pregunta: 10928. TIC A1 AGE 2014";


//  Id pregunta: 10993 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  En relaci&oacute;n con el Punto General de Entrada de Facturas Electr&oacute;nicas de la Administraci&oacute;n General del Estado (FACe), se&ntilde;ale la respuesta correcta:";
 choices[97]= new Array();
 choices[97][0] = "Las Comunidades Aut&oacute;nomas y las Entidades Locales deber&aacute;n utilizar FACe, en todos los casos.";
 choices[97][1] = "Las Comunidades Aut&oacute;nomas y Entidades Locales deber&aacute;n crear su propio punto general de facturas electr&oacute;nicas e interoperar con el FACe.";
 choices[97][2] = "Las Comunidades Aut&oacute;nomas y Entidades Locales deber&aacute;n crear su propio punto general de facturas electr&oacute;nicas, sin necesidad de interoperar con FACe.";
 choices[97][3] = "Las Comunidades Aut&oacute;nomas y Entidades Locales podr&aacute;n crear su propio punto general de entrada de facturas electr&oacute;nicas, previa justificaci&oacute;n de su no adhesi&oacute;n a FACe en t&eacute;rminos de eficiencia, y con anterioridad a la realizaci&oacute;n de cualquier inversi&oacute;n al respecto.";
 answers[97] = choices[97][3];
 units[97] = "70";
 comments[97] = "Id Pregunta: 10993. TIC A1 AGE 2014";


//  Id pregunta: 11189 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Cu&aacute;l de los siguientes puertos utiliza el protocolo TCP WhoIS?";
 choices[98]= new Array();
 choices[98][0] = "43";
 choices[98][1] = "21";
 choices[98][2] = "23";
 choices[98][3] = "69";
 answers[98] = choices[98][0];
 units[98] = "112";
 comments[98] = "Id Pregunta: 11189. ";


//  Id pregunta: 11534 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Seg&uacute;n la Ley 34/2002 de Servicios de la Sociedad de la Informaci&oacute;n y Comercio electr&oacute;nico, el procedimiento de cooperaci&oacute;n intracomunitario en el que se propone la realizaci&oacute;n de acciones urgentes contra un prestador de servicios de la sociedad de la informaci&oacute;n establecido en la U.E que haya incumplido alguno de los preceptos de la Ley, requiere notificaci&oacute;n al Consejo Europeo y al Estado Miembro en el que opera dicho Prestador en un Plazo M&Aacute;XIMO de:";
 choices[99]= new Array();
 choices[99][0] = "1 mes desde la adopci&oacute;n de las acciones urgentes.";
 choices[99][1] = "30 d&iacute;as desde la adopci&oacute;n de las acciones urgentes.";
 choices[99][2] = "15 d&iacute;as desde la adopci&oacute;n de acciones urgentes.";
 choices[99][3] = "Ninguna de las anteriores.";
 answers[99] = choices[99][2];
 units[99] = "70";
 comments[99] = "Id Pregunta: 11534. NULL";


