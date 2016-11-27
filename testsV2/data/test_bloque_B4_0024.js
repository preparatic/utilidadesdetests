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

//  Id pregunta: 2923 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  &iquest;Es posible hacer convivir varios protocolos incompatibles entre s&iacute; sobre una misma red?";
 choices[0]= new Array();
 choices[0][0] = "S&iacute;, utilizando tunneling o encapsulado de protocolos";
 choices[0][1] = "S&iacute;, pero s&oacute;lo si los protocolos pertenecen a la familia OSI";
 choices[0][2] = "S&iacute;, pero s&oacute;lo si los protocolos pertenecen a la familia TCP/IP";
 choices[0][3] = "No";
 answers[0] = choices[0][0];
 units[0] = "100";
 comments[0] = "Id Pregunta: 2923. Similar a examen TIC SS A 2003";


//  Id pregunta: 2937 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  La Ley General de Telecomunicaciones 9/2014 establece la creaci&oacute;n de un registro de operadores. &iquest;A qu&eacute; entidad encarga su llevanza?";
 choices[1]= new Array();
 choices[1][0] = "Agencia estatal de radiocomunicaciones";
 choices[1][1] = "Ministerio de Industria, Energ&iacute;a y Turismo";
 choices[1][2] = "Comisi&oacute;n Nacional de los Mercados y la Competencia";
 choices[1][3] = "Ministerio de Ciencia y Tecnolog&iacute;a";
 answers[1] = choices[1][1];
 units[1] = "110";
 comments[1] = "Id Pregunta: 2937. Similar a examen TIC MAP A 2004. Modificada seg&uacute;n Ley 9/2014";


//  Id pregunta: 2949 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  ActiveX s&oacute;lo puede ejecutarse en:";
 choices[2]= new Array();
 choices[2][0] = "Java";
 choices[2][1] = "UNIX";
 choices[2][2] = "Microsoft/Intel";
 choices[2][3] = "Virtual Machine";
 answers[2] = choices[2][2];
 units[2] = "114";
 comments[2] = "Id Pregunta: 2949. Similar a examen TIC SS A 2003";


//  Id pregunta: 2953 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  &iquest;Cu&aacute;l es el m&eacute;todo de acceso del est&aacute;ndar IEEE 802.4?";
 choices[3]= new Array();
 choices[3][0] = "CSMA/CD";
 choices[3][1] = "Token bus";
 choices[3][2] = "Token Ring";
 choices[3][3] = "Aloha ranurado";
 answers[3] = choices[3][1];
 units[3] = "101, 102";
 comments[3] = "Id Pregunta: 2953. Similar a examen TIC SS A 2003";


//  Id pregunta: 2961 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  Qu&eacute; es cierto respecto a los dispositivos britge y switch de interconexi&oacute;n de redes lcoales";
 choices[4]= new Array();
 choices[4][0] = "El switch opera en el nivel 2 y el bridge en el nivel 3 del modelo OSI";
 choices[4][1] = "Los switches se suelen emplear para interconectar servidores y los bridges para interconectar LANs";
 choices[4][2] = "Un switch pueden interconectar distintos tipos de LAN y un bridge no";
 choices[4][3] = "En los switches cada puerto forma su dominio de colisi&oacute;n propio mientras que los bridges tienen varios dominios de colisi&oacute;n por puerto.";
 answers[4] = choices[4][1];
 units[4] = "102";
 comments[4] = "Id Pregunta: 2961. Tanenbaum";


//  Id pregunta: 3012 AÃ±o de creación de pregunta: 2004-01-01
 questions[5]= "6)  &iquest;A qu&eacute; se corresponden las siglas 802.11e sobre redes inal&aacute;mbricas?";
 choices[5]= new Array();
 choices[5][0] = "A especificaciones de nivel f&iacute;sico ";
 choices[5][1] = "A especificaciones sobre calidad de servicio QoS";
 choices[5][2] = "A especificaciones de Seguridad";
 choices[5][3] = "A especificiaciones de roaming";
 answers[5] = choices[5][1];
 units[5] = "107";
 comments[5] = "Id Pregunta: 3012. NULL";


//  Id pregunta: 3019 AÃ±o de creación de pregunta: 2004-01-01
 questions[6]= "7)  Entre los ataques de seguridad que se producen a trav&eacute;s de redes como internet, aparece el concepto de Phishing. &iquest;Cu&aacute;l de las siguientes definiciones se ajustan a este concepto?";
 choices[6]= new Array();
 choices[6][0] = "Suplantaci&oacute;n de la direcci&oacute;n IP";
 choices[6][1] = "Suplantaci&oacute;n de identidades de organizaciones para conseguir informaci&oacute;n confidencial (contrase&ntilde;as o palabras de acceso)";
 choices[6][2] = "Escuchas en red con el fin de conseguir informaci&oacute;n confidencial (contrase&ntilde;as o palabras de acceso)";
 choices[6][3] = "Ninguna de las anteriores";
 answers[6] = choices[6][1];
 units[6] = "111";
 comments[6] = "Id Pregunta: 3019. NULL";


//  Id pregunta: 3093 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  Un CGI:";
 choices[7]= new Array();
 choices[7][0] = "Es una aplicaci&oacute;n dise&ntilde;ada para ejecutarse en el servidor web, devolviendo los resultados al usuario mediante el navegador";
 choices[7][1] = "Puede estar escrito en Pascal";
 choices[7][2] = "Puede ejecutarse en sistemas Windows";
 choices[7][3] = "Todas son ciertas";
 answers[7] = choices[7][3];
 units[7] = "114,115,116";
 comments[7] = "Id Pregunta: 3093. ";


//  Id pregunta: 3101 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Los sistemas de recuperaci&oacute;n de fallos hardware se basan siempre en:";
 choices[8]= new Array();
 choices[8][0] = "La redundancia del equipo o empleo de equipos fault-tolerant";
 choices[8][1] = "El establecimiento de una pol&iacute;tica de respaldo rigurosa";
 choices[8][2] = "Una pol&iacute;tica de mantenimiento de equipos adecuada";
 choices[8][3] = "Evitar manipulaciones indebidas en la instalaci&oacute;n inform&aacute;tica";
 answers[8] = choices[8][0];
 units[8] = "111";
 comments[8] = "Id Pregunta: 3101. NULL";


//  Id pregunta: 3108 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &quot;Red con un alto grado de cohesi&oacute;n y transparencia que hace que el usuario no vea a las funciones como repartidas entre los distintos elementos de la red&quot;. Es la definici&oacute;n de:";
 choices[9]= new Array();
 choices[9][0] = "Sistema abierto";
 choices[9][1] = "Sistema distribuido";
 choices[9][2] = "Intranet  ";
 choices[9][3] = "Sistema aut&oacute;nomo";
 answers[9] = choices[9][1];
 units[9] = "100";
 comments[9] = "Id Pregunta: 3108. NULL";


//  Id pregunta: 3139 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Cu&aacute;l de las siguientes afirmaciones acerca de IPv6 es correcta?:";
 choices[10]= new Array();
 choices[10][0] = "Existe una cabecera principal y cabeceras de extensi&oacute;n";
 choices[10][1] = "La cabecera se ha complicado y ha crecido bastante, al tener que incorporar algunos elementos como la seguridad y el esquema de direccionamiento extendido. El tama&ntilde;o ahora es de 64 bytes frente a los 20 bytes de IPv4";
 choices[10][2] = "Las nuevas direcciones tienen 20 bytes";
 choices[10][3] = "Todas son incorrectas";
 answers[10] = choices[10][0];
 units[10] = "100";
 comments[10] = "Id Pregunta: 3139. NULL";


//  Id pregunta: 3154 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa si nos referimos a la modulaci&oacute;n?:";
 choices[11]= new Array();
 choices[11][0] = "La modulaci&oacute;n/desmodulaci&oacute;n se realiza asociando los s&iacute;mbolos de un alfabeto a distintas se&ntilde;ales anal&oacute;gicas";
 choices[11][1] = "La modulaci&oacute;n FSK no afecta a la amplitud de la se&ntilde;al anal&oacute;gica";
 choices[11][2] = "La modulaci&oacute;n QPSK act&uacute;a sobre la amplitud de la se&ntilde;al anal&oacute;gica";
 choices[11][3] = "La modulaci&oacute;n QAM act&uacute;a sobre la fase y la amplitud de la se&ntilde;al anal&oacute;gica";
 answers[11] = choices[11][2];
 units[11] = "97";
 comments[11] = "Id Pregunta: 3154. NULL";


//  Id pregunta: 3341 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Con referencia a los modems:";
 choices[12]= new Array();
 choices[12][0] = "La se&ntilde;al de entrada modula a la portadora, siendo ambas digitales";
 choices[12][1] = "Realizan los procesos de codificaci&oacute;n, modulaci&oacute;n, demodulaci&oacute;n, recepci&oacute;n y decodificaci&oacute;n";
 choices[12][2] = "Realizan s&oacute;lo los procesos de modulaci&oacute;n y demodulaci&oacute;n";
 choices[12][3] = "La se&ntilde;al de entrada puede ser anal&oacute;gica o digital y la moduladora es anal&oacute;gica para adaptarse a la l&iacute;nea de transmisi&oacute;n";
 answers[12] = choices[12][1];
 units[12] = "47";
 comments[12] = "Id Pregunta: 3341. modems";


//  Id pregunta: 3361 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  De SDH y SONET podemos decir:";
 choices[13]= new Array();
 choices[13][0] = "son en realidad lo mismo pero con diferente denominaci&oacute;n en Norteam&eacute;rica y Europa";
 choices[13][1] = "son distintos en la disposici&oacute;n de los contenedores virtuales pero todas sus tasas de transmisi&oacute;n coinciden";
 choices[13][2] = "son compatibles en conjunto, adaptando las velocidades de diferentes niveles de capacidad";
 choices[13][3] = "son jerarqu&iacute;as de transmisi&oacute;n digital totalmente distintas e incompatibles entre s&iacute;";
 answers[13] = choices[13][2];
 units[13] = "109";
 comments[13] = "Id Pregunta: 3361. ";


//  Id pregunta: 3407 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  Existen varios procedimientos de ataques en internet, como el &quot;hijacking&quot;. &iquest;En qu&eacute; consiste &eacute;ste?:";
 choices[14]= new Array();
 choices[14][0] = "Suplantaci&oacute;n de la direcci&oacute;n IP origen";
 choices[14][1] = "Repudiaci&oacute;n de la auditor&iacute;a del mensaje";
 choices[14][2] = "secuestro de una conexi&oacute;n TCP/IP por ejemplo durante una sesi&oacute;n Telnet permitiendo a un atacante inyectar comandos o realizar un DoS durante dicha sesi&oacute;n.";
 choices[14][3] = "Escucha de una comunicaci&oacute;n y grabaci&oacute;n de su contenido";
 answers[14] = choices[14][2];
 units[14] = "111";
 comments[14] = "Id Pregunta: 3407. NULL";


//  Id pregunta: 3434 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  Indique cu&aacute;l de las siguientes informaciones sobre la interconexi&oacute;n de redes locales desde el punto de vista del hardware es correcta:";
 choices[15]= new Array();
 choices[15][0] = "Las funciones del Enrutador consiste en compatibilizar dos medios de transmisi&oacute;n a nivel f&iacute;sico";
 choices[15][1] = "Los Repetidores operan posibilitando la conexi&oacute;n de elementos de red a nivel de enlace dentro del subnivel MAC (Medium Access Control)";
 choices[15][2] = "El Puente compatibiliza elementos de dos redes locales a nivel de red";
 choices[15][3] = "Las Pasarelas operan a nivel de transporte o en niveles superiores";
 answers[15] = choices[15][3];
 units[15] = "102";
 comments[15] = "Id Pregunta: 3434. ";


//  Id pregunta: 3605 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  La f&oacute;rmula de Little indica:";
 choices[16]= new Array();
 choices[16][0] = "N&uacute;mero medio de servidores esperando a ser requeridos por el usuario";
 choices[16][1] = "N&uacute;mero medio de usuarios esperando";
 choices[16][2] = "N&uacute;mero m&aacute;ximo de usuarios esperando que puede soportar el sistema";
 choices[16][3] = "N&uacute;mero medio de usuarios en el sistema";
 answers[16] = choices[16][3];
 units[16] = "26";
 comments[16] = "Id Pregunta: 3605. *: Formula de LITTLE";


//  Id pregunta: 3627 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  La operaci&oacute;n de gateways se entronca en:";
 choices[17]= new Array();
 choices[17][0] = "El nivel de enlace";
 choices[17][1] = "El nivel de aplicaci&oacute;n";
 choices[17][2] = "Interconexi&oacute;n de sistemas homogeneos";
 choices[17][3] = "Encaminadores y puentes";
 answers[17] = choices[17][1];
 units[17] = "102";
 comments[17] = "Id Pregunta: 3627. ";


//  Id pregunta: 3632 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  La primera empresa que propuso el uso de t&eacute;cnicas CDMA fue:";
 choices[18]= new Array();
 choices[18][0] = "AT&amp;T";
 choices[18][1] = "Qualcomm";
 choices[18][2] = "Motorola";
 choices[18][3] = "RCA";
 answers[18] = choices[18][1];
 units[18] = "108";
 comments[18] = "Id Pregunta: 3632. ";


//  Id pregunta: 3636 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  La Red Digital de Servicios Integrados (RDSI), permite los siguientes accesos o servicios:";
 choices[19]= new Array();
 choices[19][0] = "Circuitos virtuales permanentes";
 choices[19][1] = "Accesos B&aacute;sico 2B+D";
 choices[19][2] = "Circuitos virtuales punto a punto";
 choices[19][3] = "Todas las respuestas anteriores son correctas";
 answers[19] = choices[19][1];
 units[19] = "103";
 comments[19] = "Id Pregunta: 3636. ";


//  Id pregunta: 3661 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Un m&oacute;dem que siga el est&aacute;ndar V34 puede alcanzar una velocidad de:";
 choices[20]= new Array();
 choices[20][0] = "14400 bps";
 choices[20][1] = "28800 bps";
 choices[20][2] = "56000 bps";
 choices[20][3] = "Ninguna de las anteriores";
 answers[20] = choices[20][1];
 units[20] = "99";
 comments[20] = "Id Pregunta: 3661. modems";


//  Id pregunta: 3777 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  RADIUS es:";
 choices[21]= new Array();
 choices[21][0] = "una herramienta estandarizada de an&aacute;lisis de cobertura radioel&eacute;ctrica";
 choices[21][1] = "un protocolo de acceso inal&aacute;mbrico en la capa de acceso al medio radioel&eacute;ctrico";
 choices[21][2] = "un protocolo de gesti&oacute;n y mantenimiento de redes";
 choices[21][3] = "un protocolo de autenticaci&oacute;n, autorizaci&oacute;n y configuraci&oacute;n de accesos";
 answers[21] = choices[21][3];
 units[21] = "107";
 comments[21] = "Id Pregunta: 3777. NULL";


//  Id pregunta: 3809 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Seg&uacute;n la normativa UN-85, a cuanto asciende la m&aacute;xima potencia (PIRE) que un transmisor puede generar en redes inal&aacute;mbricas de banda 2,4 GHz?:";
 choices[22]= new Array();
 choices[22][0] = "10 mW";
 choices[22][1] = "1W";
 choices[22][2] = "100 mW";
 choices[22][3] = "1 mW";
 answers[22] = choices[22][2];
 units[22] = "99";
 comments[22] = "Id Pregunta: 3809. ";


//  Id pregunta: 3810 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Seg&uacute;n la recomendaci&oacute;n EIA/TIA 568:";
 choices[23]= new Array();
 choices[23][0] = "La distancia m&aacute;xima para el cableado horizontal var&iacute;a entre 70 m y 90 m";
 choices[23][1] = "La distancia entre equipo y roseta puede llegar a los 9 m";
 choices[23][2] = "Se consideran los cables coaxiales de 76 Ohm";
 choices[23][3] = "Ninguna de las anteriores";
 answers[23] = choices[23][0];
 units[23] = "99";
 comments[23] = "Id Pregunta: 3810. ";


//  Id pregunta: 3875 AÃ±o de creación de pregunta: 2003-01-01
 questions[24]= "25)  &iquest;Cu&aacute;l de los siguientes no es un tipo de componente Java?:";
 choices[24]= new Array();
 choices[24][0] = "Enterprise Java Beans (EJB).";
 choices[24][1] = "Servlets.";
 choices[24][2] = "Java Platform Enterprise Edition (J2EE).";
 choices[24][3] = "JavaServer Pages (JSP).";
 answers[24] = choices[24][2];
 units[24] = "116";
 comments[24] = "Id Pregunta: 3875. Junta Andaluc&iacute;a";


//  Id pregunta: 3900 AÃ±o de creación de pregunta: 2003-01-01
 questions[25]= "26)  La Interfaz Aire de la norma IEEE 802.11g es:";
 choices[25]= new Array();
 choices[25][0] = "FHSS/DSSS";
 choices[25][1] = "DSSS";
 choices[25][2] = "OFDM";
 choices[25][3] = "DSSS/OFDM";
 answers[25] = choices[25][3];
 units[25] = "107";
 comments[25] = "Id Pregunta: 3900. NULL";


//  Id pregunta: 3920 AÃ±o de creación de pregunta: 2003-01-01
 questions[26]= "27)  Las copias de seguridad:";
 choices[26]= new Array();
 choices[26][0] = "Son un engorro innecesario.";
 choices[26][1] = "Nunca pueden recuperarse del todo.";
 choices[26][2] = "Conviene probar previamente los procedimientos a seguir y dejarlos ben documentados.";
 choices[26][3] = "Nacieron con el fin de ahorrar tiempo y molestias al personal no inform&aacute;tico del Departamento.";
 answers[26] = choices[26][2];
 units[26] = "97";
 comments[26] = "Id Pregunta: 3920. NULL";


//  Id pregunta: 3961 AÃ±o de creación de pregunta: 2003-01-01
 questions[27]= "28)  Mediante qu&eacute; tecnolog&iacute;a se puede conectar un PC a sus perif&eacute;ricos de forma inal&aacute;mbrica";
 choices[27]= new Array();
 choices[27][0] = "IMODE";
 choices[27][1] = "OFDM";
 choices[27][2] = "BLUETOOTH";
 choices[27][3] = " WIFI";
 answers[27] = choices[27][2];
 units[27] = "100";
 comments[27] = "Id Pregunta: 3961. ";


//  Id pregunta: 3975 AÃ±o de creación de pregunta: 2006-01-01
 questions[28]= "29)  El est&aacute;ndar EIA/TIA 568, aprobado en Julio de 1991,esta en conformidad con lo dispuesto por:";
 choices[28]= new Array();
 choices[28][0] = "CEN";
 choices[28][1] = "ISO";
 choices[28][2] = "ITU-T";
 choices[28][3] = "ANSI";
 answers[28] = choices[28][3];
 units[28] = "99";
 comments[28] = "Id Pregunta: 3975. ";


//  Id pregunta: 4072 AÃ±o de creación de pregunta: 2006-01-01
 questions[29]= "30)  &iquest;Qu&eacute; gestiona un CRM?";
 choices[29]= new Array();
 choices[29][0] = "Las relaciones con los clientes";
 choices[29][1] = "Las relaciones con los Empleados";
 choices[29][2] = "Las relaciones con clientes y empleados";
 choices[29][3] = "Ninguna de las anteriores";
 answers[29] = choices[29][0];
 units[29] = "65";
 comments[29] = "Id Pregunta: 4072. ";


//  Id pregunta: 4142 AÃ±o de creación de pregunta: 2006-01-01
 questions[30]= "31)  La principal diferencia entre S/MIME y PGP es";
 choices[30]= new Array();
 choices[30][0] = "PGP es software libre";
 choices[30][1] = "S/MIME requiere SSL";
 choices[30][2] = "PGP no se puede usar en un servicio de env&iacute;o de correo SMTP";
 choices[30][3] = "S/MIME requiere certificados digitales ";
 answers[30] = choices[30][3];
 units[30] = "106";
 comments[30] = "Id Pregunta: 4142. ";


//  Id pregunta: 4144 AÃ±o de creación de pregunta: 2006-01-01
 questions[31]= "32)  Un programa aparentemente in&oacute;cuo y &uacute;til que al instalarlo el usuario, es utilizado por un tercero para realizar acciones no autorizadas sobre el sistema se llama";
 choices[31]= new Array();
 choices[31][0] = "honeypot";
 choices[31][1] = "bomba l&oacute;gica";
 choices[31][2] = "virus";
 choices[31][3] = "troyano";
 answers[31] = choices[31][3];
 units[31] = "111";
 comments[31] = "Id Pregunta: 4144. NULL";


//  Id pregunta: 4150 AÃ±o de creación de pregunta: 2006-01-01
 questions[32]= "33)  Sniffer de paquetes desarrollado por el FBI para la monitorizaci&oacute;n de las transmisiones electr&oacute;nicas de criminales";
 choices[32]= new Array();
 choices[32][0] = "Carnivore";
 choices[32][1] = "Internet Key Exchange (IKE)";
 choices[32][2] = "Kerberos";
 choices[32][3] = "SSL";
 answers[32] = choices[32][0];
 units[32] = "111";
 comments[32] = "Id Pregunta: 4150. NULL";


//  Id pregunta: 4154 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  Capacidad que permite la descarga de actualizaciones software o bien la reconfiguraci&oacute;n de ordenadores por la noche, cuando normalmente est&aacute;n apagados";
 choices[33]= new Array();
 choices[33][0] = "firmware";
 choices[33][1] = "teclado virtual";
 choices[33][2] = "despertar remoto (remote wakeup)";
 choices[33][3] = "Autocomprobaci&oacute;n de arranque (Power-On Self-Test)";
 answers[33] = choices[33][2];
 units[33] = "113";
 comments[33] = "Id Pregunta: 4154. ";


//  Id pregunta: 4177 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  Un sitio caliente de respaldo se caracteriza por";
 choices[34]= new Array();
 choices[34][0] = "Altos costes de implementaci&oacute;n y mantenimiento";
 choices[34][1] = "Un tiempo reducido de recuperaci&oacute;n";
 choices[34][2] = "Un coste reducido de preparaci&oacute;n ante desastres";
 choices[34][3] = "La A y la B";
 answers[34] = choices[34][3];
 units[34] = "97";
 comments[34] = "Id Pregunta: 4177. NULL";


//  Id pregunta: 4492 AÃ±o de creación de pregunta: 2007-01-01
 questions[35]= "36)  Entre otras funciones, sa Comisi&oacute;n Nacional de los Mercados y la Competencia se encargar&aacute; de:";
 choices[35]= new Array();
 choices[35][0] = "La gesti&oacute;n de nombres de dominios de Internet.";
 choices[35][1] = "Arbitrar en los conflictos que puedan surgir entre operadores del sector de Ia comunicaci&oacute;n electr&oacute;nica cuando los interesados lo acuerden.";
 choices[35][2] = "Elaborar el Cuadro Nacional de Atribuci&oacute;n de Frecuencias.";
 choices[35][3] = "Elaboraci&oacute;n de proyectos y desarrollo de los Planes Nacionales de Radiodifusi&oacute;n y Televisi&oacute;n.";
 answers[35] = choices[35][1];
 units[35] = "110";
 comments[35] = "Id Pregunta: 4492. ";


//  Id pregunta: 4538 AÃ±o de creación de pregunta: 2007-01-01
 questions[36]= "37)  Dentro de Ia soluci&oacute;n de telefon&iacute;a IP de Cisco, el componente encargado de almacenar los mensajes del buz&oacute;n de voz recibe el nombre de:";
 choices[36]= new Array();
 choices[36][0] = "Cisco CallManager";
 choices[36][1] = "Cisco Unity";
 choices[36][2] = "Cisco VoiceCom";
 choices[36][3] = "CiscoWorks";
 answers[36] = choices[36][1];
 units[36] = "";
 comments[36] = "Id Pregunta: 4538. ";


//  Id pregunta: 4648 AÃ±o de creación de pregunta: 2007-01-01
 questions[37]= "38)  El protocolo CMIP de OSI se puede considerar el equivalente al siguiente protocolo de la familia TCP/IP:";
 choices[37]= new Array();
 choices[37][0] = "SMTP";
 choices[37][1] = "SNMP";
 choices[37][2] = "ARP";
 choices[37][3] = "HTTP";
 answers[37] = choices[37][1];
 units[37] = "100";
 comments[37] = "Id Pregunta: 4648. ";


//  Id pregunta: 4663 AÃ±o de creación de pregunta: 2009-01-01
 questions[38]= "39)  Modulaci&oacute;n empleada en la tecnolog&iacute;a HSDPA en R5 para el enlace descendente";
 choices[38]= new Array();
 choices[38][0] = "4QAM y QPSK";
 choices[38][1] = "8QAM y QPSK";
 choices[38][2] = "16 QAM y QPSK";
 choices[38][3] = "Ninguna de las anteriores";
 answers[38] = choices[38][2];
 units[38] = "108";
 comments[38] = "Id Pregunta: 4663. ";


//  Id pregunta: 4687 AÃ±o de creación de pregunta: 2007-01-01
 questions[39]= "40)  La fibra &oacute;ptica, con respecto al par trenzado";
 choices[39]= new Array();
 choices[39][0] = "Tiene m&aacute;s radiaci&oacute;n electromagn&eacute;tica";
 choices[39][1] = "Tiene m&aacute;s ancho de banda";
 choices[39][2] = "Es m&aacute;s f&aacute;cil de instalar";
 choices[39][3] = "Tiene mayor atenuaci&oacute;n";
 answers[39] = choices[39][1];
 units[39] = "99";
 comments[39] = "Id Pregunta: 4687. Examen 2006 JCYL";


//  Id pregunta: 4778 AÃ±o de creación de pregunta: 2007-01-01
 questions[40]= "41)  De acuerdo con la Ley 9/2014 General de Telecomunicaciones, el espectro radioel&eacute;ctrico es un bien de dominio p&uacute;blico, cuya titularidad y administraci&oacute;n corresponden a";
 choices[40]= new Array();
 choices[40][0] = "El Gobierno";
 choices[40][1] = "La Agencia Estatal de Radiocomunicaciones";
 choices[40][2] = "El Estado";
 choices[40][3] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia";
 answers[40] = choices[40][2];
 units[40] = "110";
 comments[40] = "Id Pregunta: 4778. ";


//  Id pregunta: 4854 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  &iquest;Cu&aacute;l de las siguientes afirmaciones en relaci&oacute;n a los dispositivos para la interconexi&oacute;n de redes de &aacute;rea local NOes cierta?";
 choices[41]= new Array();
 choices[41][0] = "Un puerto de un switch (conmutador) puede pertenecer a m&aacute;s de una VLAN (Virtual Local Area Networks)";
 choices[41][1] = "Los bridges (puentes) y los switches son capaces de aprender qu&eacute; estaciones est&aacute;n conectadas a cada unode sus puertos a partir de la direcci&oacute;n MAC (Media Access Control) de origen de las tramas emitidas pordicha estaci&oacute;n";
 choices[41][2] = "Los hubs (concentradores) de tercera generaci&oacute;n incrementan el n&uacute;mero de dominios de broadcast";
 choices[41][3] = "Un switch permite el uso eficiente del ancho de banda al crear dominios de colisi&oacute;n m&aacute;s peque&ntilde;os";
 answers[41] = choices[41][2];
 units[41] = "100";
 comments[41] = "Id Pregunta: 4854. NULL";


//  Id pregunta: 5048 AÃ±o de creación de pregunta: 2003-01-01
 questions[42]= "43)  &iquest;Qu&eacute; se utiliza para codificar la voz que se transmite por la red IP?:";
 choices[42]= new Array();
 choices[42][0] = "Retardo";
 choices[42][1] = "Encriptado";
 choices[42][2] = "C&oacute;decs";
 choices[42][3] = "Claves";
 answers[42] = choices[42][2];
 units[42] = "109";
 comments[42] = "Id Pregunta: 5048. Examen TIC A 2007";


//  Id pregunta: 5165 AÃ±o de creación de pregunta: 2003-01-01
 questions[43]= "44)  La Tecnolog&iacute;a empleada por la Televisi&oacute;n Digital Terrestre (TDT) permite que el despliegue de las redes de radiodifusi&oacute;n se efect&uacute;e:";
 choices[43]= new Array();
 choices[43][0] = "En redes de Frecuencia &Uacute;nica (SFN) y en redes Multifrecuencia (MFN).";
 choices[43][1] = "&Uacute;nicamente en redes de Frecuencia &Uacute;nica (SFN).";
 choices[43][2] = "&Uacute;nicamente en redes Multifrecuencia (MFN).";
 choices[43][3] = "En redes de Frecuencia (SFN) sin necesidad de sincronizar los transmisores radio.";
 answers[43] = choices[43][0];
 units[43] = "105";
 comments[43] = "Id Pregunta: 5165. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5302 AÃ±o de creación de pregunta: 2003-01-01
 questions[44]= "45)  Las celdas ATM";
 choices[44]= new Array();
 choices[44][0] = "Tienen un tama&ntilde;o fijo de 53 Bytes";
 choices[44][1] = "Tienen un tama&ntilde;o variable m&aacute;ximo de 53 Bytes";
 choices[44][2] = "Tienen un tama&ntilde;o fijo de 48 Bytes";
 choices[44][3] = "Ninguna de las anteriores";
 answers[44] = choices[44][0];
 units[44] = "109";
 comments[44] = "Id Pregunta: 5302. ";


//  Id pregunta: 5459 AÃ±o de creación de pregunta: 2003-01-01
 questions[45]= "46)  Una de las ventajas del protocolo PPP respecto al SLIP es:";
 choices[45]= new Array();
 choices[45][0] = "Permite conexiones s&iacute;ncronas y as&iacute;ncronas";
 choices[45][1] = "Permite varios protocolos de red sobre &eacute;l";
 choices[45][2] = "Permite crear redes privadas virtuales";
 choices[45][3] = "Todas las respuestas son correctas";
 answers[45] = choices[45][3];
 units[45] = "100, 101, 107, 111";
 comments[45] = "Id Pregunta: 5459. Castilla y Le&oacute;n";


//  Id pregunta: 5472 AÃ±o de creación de pregunta: 2003-01-01
 questions[46]= "47)  Cual de las siguientes tecnolog&iacute;as no sirve para la implementaci&oacute;n de redes privadas virtuales";
 choices[46]= new Array();
 choices[46][0] = "SSH";
 choices[46][1] = "SLIP";
 choices[46][2] = "IPSEC";
 choices[46][3] = "SSL/TLS";
 answers[46] = choices[46][1];
 units[46] = "102";
 comments[46] = "Id Pregunta: 5472. Castilla y Le&oacute;n";


//  Id pregunta: 5572 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  &iquest;C&uacute;al de los siguientes protocolos de encaminamiento NO es interno?";
 choices[47]= new Array();
 choices[47][0] = "BGP";
 choices[47][1] = "EIGRP";
 choices[47][2] = "OSPF";
 choices[47][3] = "IGRP";
 answers[47] = choices[47][0];
 units[47] = "102";
 comments[47] = "Id Pregunta: 5572. ";


//  Id pregunta: 5670 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  Cual de los siguientes no ser&iacute;a un patr&oacute;n de dise&ntilde;o J2EE";
 choices[48]= new Array();
 choices[48][0] = "abstraction inversion";
 choices[48][1] = "session fa&Ccedil;ade";
 choices[48][2] = "model view controler";
 choices[48][3] = "Data Access Objects";
 answers[48] = choices[48][0];
 units[48] = "116";
 comments[48] = "Id Pregunta: 5670. ";


//  Id pregunta: 5844 AÃ±o de creación de pregunta: 2009-01-01
 questions[49]= "50)  De entre los siguientes protocolos de encaminamiento interno, indique cu&aacute;l era clasificado por CISCO como h&iacute;brido por utilizar algoritmos basados en Vector Distancia y algoritmos basados en el Estado del Enlace";
 choices[49]= new Array();
 choices[49][0] = "EIGRP (Enhanced Interior Gateway Routing Protocol)";
 choices[49][1] = "IGRP (Interior Gateway Routing Protocol)";
 choices[49][2] = "OSPF (Open Shortest Path First)";
 choices[49][3] = "RIPv2 (Routing Information Protocol ver. 2)";
 answers[49] = choices[49][0];
 units[49] = "102";
 comments[49] = "Id Pregunta: 5844. MAP 2008 A1";


//  Id pregunta: 5863 AÃ±o de creación de pregunta: 2009-01-01
 questions[50]= "51)  Determine cu&aacute;l de las afirmaciones siguiente NO se corresponde con una caracter&iacute;stica definitoria de la tecnolog&iacute;a ATM:";
 choices[50]= new Array();
 choices[50][0] = "Las redes ATM est&aacute;n orientadas a la conexi&oacute;n, requiriendo del establecimiento de un circuito virtual antes de la trasferencia de informaci&oacute;n entre dos extremos";
 choices[50][1] = "ATM es independiente del trasporte f&iacute;sico, las celdas ATM pueden ser trasportadas en redes SONET, SDH, T3/E3 &Oacute; T1/E1";
 choices[50][2] = "ATM puede utilizarse tanto como plataforma de interconexi&oacute;n de redes, como una red para proporcionar servicios de banda ancha";
 choices[50][3] = "Las celdas son de longitud variable, con un m&aacute;ximo de 53 bytes, de los cuales 5 son de cabecera y los restantes son portadores de la informaci&oacute;n de usuario, gesti&oacute;n y se&ntilde;alizaci&oacute;n";
 answers[50] = choices[50][3];
 units[50] = "109";
 comments[50] = "Id Pregunta: 5863. MAP 2008 A1";


//  Id pregunta: 5866 AÃ±o de creación de pregunta: 2009-01-01
 questions[51]= "52)  El protocolo Secure Shell, definido en la RFC (IETF Request for Comment) 4251:";
 choices[51]= new Array();
 choices[51][0] = "Permite la negociaci&oacute;n de los algoritmos criptogr&aacute;ficos a usar";
 choices[51][1] = "Proporciona, entre otros, los servicios de confidencialidad, no repudio e integridad";
 choices[51][2] = "Opcionalmente admite compresi&oacute;n, que en este caso debe aplicarse tras el cifrado del paquete";
 choices[51][3] = "Trabaja tanto sobre TCP como sobre UDP";
 answers[51] = choices[51][0];
 units[51] = "111";
 comments[51] = "Id Pregunta: 5866. MAP 2008 A1";


//  Id pregunta: 5884 AÃ±o de creación de pregunta: 2009-01-01
 questions[52]= "53)  En relaci&oacute;n a &quot;Internet Assigned Numbers Authority&quot; (IANA), indique cu&aacute;l NO es una de sus funciones:";
 choices[52]= new Array();
 choices[52][0] = "IANA coordina a nivel global el &quot;DNS root&quot;";
 choices[52][1] = "IANA gestiona el dominio .int (top-level)";
 choices[52][2] = "IANA asigna las direcciones IP";
 choices[52][3] = "IANA administra el dominio .ARPA en estrecha relaci&oacute;n con el Internet Architecture Board";
 answers[52] = choices[52][2];
 units[52] = "112";
 comments[52] = "Id Pregunta: 5884. MAP 2008 A1";


//  Id pregunta: 6049 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)  Sobre el modelo de gesti&oacute;n TMN (Telecommunication Management Network):";
 choices[53]= new Array();
 choices[53][0] = "Es un modelo de gesti&oacute;n de red orientado a grandes operadores de telecomunicaciones";
 choices[53][1] = "Sus principios est&aacute;n recogidos en la recomendaci&oacute;n M.3010 de la UIT-T";
 choices[53][2] = "Es especialmente apropiado para redes de conmutaci&oacute;n de circuitos";
 choices[53][3] = "Todas las respuestas anteriores son correctas ";
 answers[53] = choices[53][3];
 units[53] = "104";
 comments[53] = "Id Pregunta: 6049. ";


//  Id pregunta: 6142 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  En relaci&oacute;n con los c&oacute;decs que se utilizan para comprimir la voz en sistemas de VoIP:";
 choices[54]= new Array();
 choices[54][0] = "G.711 proporciona mejor calidad de sonido que G.729";
 choices[54][1] = "G.711 genera una tasa de transferencia menor que G.729";
 choices[54][2] = "Las dos respuestas anteriores son correctas";
 choices[54][3] = "Todas las respuestas anteriores son falsas";
 answers[54] = choices[54][0];
 units[54] = "100, 109";
 comments[54] = "Id Pregunta: 6142. ";


//  Id pregunta: 6153 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  &iquest;Sobre qu&eacute; protocolo de la capa de presentaci&oacute;n est&aacute; implementado NFS?";
 choices[55]= new Array();
 choices[55][0] = "ONC RPC";
 choices[55][1] = "XDR";
 choices[55][2] = "NIS";
 choices[55][3] = "XML";
 answers[55] = choices[55][1];
 units[55] = "112";
 comments[55] = "Id Pregunta: 6153. ";


//  Id pregunta: 6234 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  En el framwork .NET, la herramienta de desarrollo compila el c&oacute;digo fuente de cualquiera de los lenguajes soportados por .NET a un c&oacute;digo intermedio, inicialmente conocido como MSIL y actualmente llamado:";
 choices[56]= new Array();
 choices[56][0] = "CIL";
 choices[56][1] = "CLI";
 choices[56][2] = "JIT";
 choices[56][3] = "CLR";
 answers[56] = choices[56][0];
 units[56] = "59,115";
 comments[56] = "Id Pregunta: 6234. ";


//  Id pregunta: 6347 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes afirmaciones, relacionadas con el podcasting es cierta?";
 choices[57]= new Array();
 choices[57][0] = "Podcasting es la distribuci&oacute;n de archivos multimedia (normalmente audio o v&iacute;deo) mediante un sistema de sindicaci&oacute;n que permita suscribirse y usar un programa que lo descarga para que el usuario lo escuche en el momento que quiera.";
 choices[57][1] = "Habitualmente, no es necesario estar suscrito para descargar un podcast";
 choices[57][2] = "En Internet podemos encontrar todo tipo de podcast de todo tipo de tem&aacute;ticas";
 choices[57][3] = "Todas las anteriores son ciertas";
 answers[57] = choices[57][3];
 units[57] = "120";
 comments[57] = "Id Pregunta: 6347. NULL";


//  Id pregunta: 6547 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  Qu&eacute; pol&iacute;tica de control aplica cuando la infraestructura usa un modelo no discrecional?";
 choices[58]= new Array();
 choices[58][0] = "Basado en reglas";
 choices[58][1] = "Basado en roles";
 choices[58][2] = "Basado en identidades";
 choices[58][3] = "MAC";
 answers[58] = choices[58][1];
 units[58] = "111";
 comments[58] = "Id Pregunta: 6547. NULL";


//  Id pregunta: 6568 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  HSDPA introduce, respecto de UMTS, las siguientes mejoras:";
 choices[59]= new Array();
 choices[59][0] = "Tasas cercanas 200 Gbps";
 choices[59][1] = "Nueva portadora de 584 kbps";
 choices[59][2] = "Reducci&oacute;n del tiempo de latencia";
 choices[59][3] = "M&aacute;ximo de 10 GB de tr&aacute;fico al mes para el usuario";
 answers[59] = choices[59][2];
 units[59] = "108";
 comments[59] = "Id Pregunta: 6568. NULL";


//  Id pregunta: 7244 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  Cu&aacute;les de las siguientes afirmaciones es INCORRECTA sobre la fibra &oacute;ptica:";
 choices[60]= new Array();
 choices[60][0] = "No es posible acceder a los datos transmitidos por m&eacute;todos no destructivos";
 choices[60][1] = "Puede transmitir electricidad para alimentar repetidores intermedios";
 choices[60][2] = "Es inmune a las interferencias electromagn&eacute;ticas";
 choices[60][3] = "Las fibras son fr&aacute;giles y sus empalmes son dif&iacute;ciles";
 answers[60] = choices[60][1];
 units[60] = "99";
 comments[60] = "Id Pregunta: 7244. Examen TIC B 2009";


//  Id pregunta: 7263 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  &iquest;Cu&aacute;l de las siguientes no es una tecnolog&iacute;a xSDL?";
 choices[61]= new Array();
 choices[61][0] = "HDSL";
 choices[61][1] = "VDSL";
 choices[61][2] = "ADSL";
 choices[61][3] = "EDSL";
 answers[61] = choices[61][3];
 units[61] = "107";
 comments[61] = "Id Pregunta: 7263. Examen TIC B 2009";


//  Id pregunta: 7287 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  Las redes de pr&oacute;xima generaci&oacute;n (NGN) son seg&uacute;n la UIT (uni&oacute;n internacional de telecomunicaciones):";
 choices[62]= new Array();
 choices[62][0] = "Las redes que engloban las nuevas tecnolog&iacute;as inal&aacute;mbricas, tambi&eacute;n conocidas como redes de cuarta generaci&oacute;n (4G)";
 choices[62][1] = "Las redes que ser&aacute;n desplegadas para la generaci&oacute;n del siglo XXI, las cuales garantizar&aacute;n una cobertura real del 100%";
 choices[62][2] = "Las redes de los pr&oacute;ximos a&ntilde;os, basadas en el protocolo Internet IP y que ser&aacute;n utilizadas para todo tipo de servicios";
 choices[62][3] = "Las futuras redes basadas en conmutaci&oacute;n de circuitos, que proporcionar&aacute;n una calidad de servicio superior y permitir&aacute;n comunicaciones de voz y datos a altas velocidades";
 answers[62] = choices[62][2];
 units[62] = "100, 107";
 comments[62] = "Id Pregunta: 7287. Examen TIC B 2009";


//  Id pregunta: 7772 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)   Los formatos de im&aacute;genes admitidos por los navegadores Internet Explorer 6.0, Netscape 8.0 y Opera 8.0, son:";
 choices[63]= new Array();
 choices[63][0] = " jpeg, tiff y spp.";
 choices[63][1] = " jpeg, spp y psd.";
 choices[63][2] = " jpeg, spp y tiff.";
 choices[63][3] = " jpeg, gif y png.";
 answers[63] = choices[63][3];
 units[63] = "93";
 comments[63] = "Id Pregunta: 7772. Map 2005";


//  Id pregunta: 8353 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  Indique cu&aacute;l de las siguientes definiciones se corresponde con Biztalk:";
 choices[64]= new Array();
 choices[64][0] = "Es un servidor que permite gestionar procesos de negocio por medio de adaptadores dise&ntilde;ados al efecto, capacit&aacute;ndolo para operar diferentes tipos de software.";
 choices[64][1] = "Es una libreria de .NET que permite la comunicaci&oacute;n por IRC facilitando la implementaci&oacute;n de chats.";
 choices[64][2] = "Es un servidor web de .NET especialmente adaptado para tecnolog&iacute;as m&oacute;viles";
 choices[64][3] = "Es un componente que pertenece al CLR de .NET y que facilita la ejecuci&oacute;n de la aplicaci&oacute;n.";
 answers[64] = choices[64][0];
 units[64] = "59,115";
 comments[64] = "Id Pregunta: 8353. Examen TIC A2 2010";


//  Id pregunta: 8384 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  Cu&aacute;l de los siguientes estados NO corresponde con ninguno de los estados en los que puede estar un puerto de un dispositivo de interconexi&oacute;n, seg&uacute;n lo definido en el est&aacute;ndar 802.1D para el protocolo Spanning Tree:";
 choices[65]= new Array();
 choices[65][0] = "Blocking (Bloqueando).";
 choices[65][1] = "Listening (Escuchando). ";
 choices[65][2] = "Learning (Aprendiendo).";
 choices[65][3] = "Receiving (Recibiendo).";
 answers[65] = choices[65][3];
 units[65] = "102";
 comments[65] = "Id Pregunta: 8384. Examen TIC A2 2010";


//  Id pregunta: 8661 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  De las siguientes, &iquest;cu&aacute;l no es una funci&oacute;n realizada por los mensajes enviados por el protocolo ICMP?";
 choices[66]= new Array();
 choices[66][0] = "Control de flujo";
 choices[66][1] = "Detecci&oacute;n de destinos inalcanzables";
 choices[66][2] = "Encapsulaci&oacute;n de datagramas";
 choices[66][3] = "Redirecci&oacute;n de rutas";
 answers[66] = choices[66][2];
 units[66] = "100";
 comments[66] = "Id Pregunta: 8661. Examen UPM A2 2011";


//  Id pregunta: 8768 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  Identificar la descripci&oacute;n del comando IP ERR&Oacute;NEO:";
 choices[67]= new Array();
 choices[67][0] = "NETSTAT: es una herramienta de l&iacute;nea de comandos que muestra un listado de las conexiones activas de un ordenador, tanto entrantes como salientes. Permite mostrar las estad&iacute;sticas de protocolos y las conexiones TCP/IP actuales";
 choices[67][1] = "IPCONFIG: Muestra o actualiza la configuraci&oacute;n de red TCP/IP";
 choices[67][2] = "NBTSTAT: Muestra estad&iacute;sticas del protocolo y conexiones TCP/IP actuales utilizando NBT. NBTStat es una herramienta que resulta de utilidad para solucionar problemas con la resoluci&oacute;n de nombres llevada a cabo por NetBIOS.";
 choices[67][3] = "TRACERT Muestra todas las direcciones IP intermedias por las que pasa un paquete entre el equipo remoto y la direcci&oacute;n IP especificada.";
 answers[67] = choices[67][3];
 units[67] = "100";
 comments[67] = "Id Pregunta: 8768. Examen TIC A2 2010 interna";


//  Id pregunta: 8776 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  &iquest;Que puerto utiliza NNTP?";
 choices[68]= new Array();
 choices[68][0] = "119";
 choices[68][1] = "53";
 choices[68][2] = "137";
 choices[68][3] = "139";
 answers[68] = choices[68][0];
 units[68] = "112";
 comments[68] = "Id Pregunta: 8776. Examen UPM A2 2011";


//  Id pregunta: 8919 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  &iquest;Qu&eacute; herramienta con versiones en Windows, Unix y otros sistemas, muestra informaci&oacute;n sobre el estado actual de todos los procesos IP que se est&aacute;n ejecutando, las sesiones activas y puede proporcionar estad&iacute;sticas bas&aacute;ndose en los puertos o protocolos.";
 choices[69]= new Array();
 choices[69][0] = "ROUTE";
 choices[69][1] = "NETSTAT";
 choices[69][2] = "NBTSTAT";
 choices[69][3] = "TRACERT";
 answers[69] = choices[69][1];
 units[69] = "104";
 comments[69] = "Id Pregunta: 8919. Operador Ayto. Madrid 2010";


//  Id pregunta: 9000 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  ATM ofrece las siguientes clases de servicio de tiempo real:";
 choices[70]= new Array();
 choices[70][0] = "CBR y GFR";
 choices[70][1] = "ABR y CBR";
 choices[70][2] = "ABR y GFR";
 choices[70][3] = "CBR y rt-VBR";
 answers[70] = choices[70][3];
 units[70] = "109";
 comments[70] = "Id Pregunta: 9000. Examen UPM A2 2011";


//  Id pregunta: 9080 AÃ±o de creación de pregunta: 2013-01-01
 questions[71]= "72)  &iquest;Cu&aacute;l es el est&aacute;ndar PKCS que fue la base para el est&aacute;ndar S/MIME?";
 choices[71]= new Array();
 choices[71][0] = "PKCS#1";
 choices[71][1] = "PKCS#6";
 choices[71][2] = "PKCS#7";
 choices[71][3] = "PKCS#8";
 answers[71] = choices[71][3];
 units[71] = "111";
 comments[71] = "Id Pregunta: 9080. NULL";


//  Id pregunta: 9355 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  Indica cual de estas afirmaciones es cierta";
 choices[72]= new Array();
 choices[72][0] = "En RDSI igual que en RTB el descolgado del tel&eacute;fono produce un &quot;corto&quot; de tal forma que la corriente que pasa por el bucle indica a la central que el abonado ha descolgado.";
 choices[72][1] = "En RDSI el terminador de red aun siendo activo en caso de ca&iacute;da de la alimentaci&oacute;n local es capaz de establecer/mantener la conversaci&oacute;n.";
 choices[72][2] = "Los terminales que cuelgan de la RTB (Red Telef&oacute;nica B&aacute;sica) no pueden establecer ning&uacute;n tipo de comunicaci&oacute;n con los que cuelgan de la RDSI (Red Digital de Servicios Integrados).";
 choices[72][3] = "Todas las respuestas son correctas.";
 answers[72] = choices[72][1];
 units[72] = "103";
 comments[72] = "Id Pregunta: 9355. Pruebas selectivas Ingeniero de Telecomunicaci&oacute;n Ayto de Madrid 2010";


//  Id pregunta: 9391 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  &iquest;A que hace referencia el t&eacute;rmino care-of address?";
 choices[73]= new Array();
 choices[73][0] = "Direcci&oacute;n IPv6 compatible con IPv4. ";
 choices[73][1] = "Direcci&oacute;n IPv4 mapeada en IPv6.";
 choices[73][2] = "Direcci&oacute;n IP temporal para un dispositivo m&oacute;vil.";
 choices[73][3] = "Direcci&oacute;n IP para transacciones de Terminales Punto de Venta (TPV).";
 answers[73] = choices[73][2];
 units[73] = "108";
 comments[73] = "Id Pregunta: 9391. Examen TIC A2 2011 Libre";


//  Id pregunta: 9503 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  Respecto al formato de im&aacute;genes GIF, indique la afirmaci&oacute;n falsa:";
 choices[74]= new Array();
 choices[74][0] = "Utiliza el algoritmo de compresi&oacute;n patentado LZW";
 choices[74][1] = "Fue creado en 1987 por Apple";
 choices[74][2] = "Fue creado en 1987 por Compuserve";
 choices[74][3] = "La paleta de color soporta hasta 256 colores";
 answers[74] = choices[74][1];
 units[74] = "114";
 comments[74] = "Id Pregunta: 9503. NULL";


//  Id pregunta: 9521 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  &iquest;Cu&aacute;les de los siguientes no es un framework de desarrollo en Java?";
 choices[75]= new Array();
 choices[75][0] = "Apache Struts";
 choices[75][1] = "Hibernate";
 choices[75][2] = "Tapestry";
 choices[75][3] = "Todos los anteriores son frameworks de desarrollo en Java";
 answers[75] = choices[75][3];
 units[75] = "116";
 comments[75] = "Id Pregunta: 9521. NULL";


//  Id pregunta: 9523 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  Se&ntilde;ale la afirmaci&oacute;n falsa con respecto al est&aacute;ndar H.320:";
 choices[76]= new Array();
 choices[76][0] = "Es un est&aacute;ndar para videoconferencia sobre RDSI";
 choices[76][1] = "Utiliza como est&aacute;ndares de cifrado H.233 y H.244";
 choices[76][2] = "Uno de los tama&ntilde;os de cuadro es CIF (352x288) ";
 choices[76][3] = "Uno de los tama&ntilde;os de cuadro es QCIF (176x144) ";
 answers[76] = choices[76][1];
 units[76] = "117";
 comments[76] = "Id Pregunta: 9523. NULL";


//  Id pregunta: 9744 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  &iquest;Qu&eacute; significan las siglas MVC en el contexto de ASP.NET?";
 choices[77]= new Array();
 choices[77][0] = "Model View Controller.";
 choices[77][1] = "Multiple Views Canvas.";
 choices[77][2] = "Mobile Video Compatible.";
 choices[77][3] = "Mobile View Connector.";
 answers[77] = choices[77][0];
 units[77] = "113";
 comments[77] = "Id Pregunta: 9744. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9842 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  En la gesti&oacute;n unificada de usuarios, &iquest;a qu&eacute; se denomina Single Sign-On (SSO)?";
 choices[78]= new Array();
 choices[78][0] = "Procedimiento de cifrado para autenticar a un usuario.";
 choices[78][1] = "Procedimiento asociado al cifrado en Secure Socket Layer (SSL).";
 choices[78][2] = "Es un procedimiento de autenticaci&oacute;n que habilita al usuario para acceder a varios sistemas con una sola instancia de autenticaci&oacute;n. ";
 choices[78][3] = "Permite el acceso de los usuarios a servicios web a trav&eacute;s del protocolo HTTPS.";
 answers[78] = choices[78][2];
 units[78] = "118";
 comments[78] = "Id Pregunta: 9842. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Arag&oacute;n 2013";


//  Id pregunta: 9928 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  En IPv4 el n&uacute;mero m&aacute;ximo de fragmentos por datagrama son:";
 choices[79]= new Array();
 choices[79][0] = "8192.";
 choices[79][1] = "1024.";
 choices[79][2] = "512.";
 choices[79][3] = "2048.";
 answers[79] = choices[79][0];
 units[79] = "100";
 comments[79] = "Id Pregunta: 9928. NULL";


//  Id pregunta: 10060 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  En una empresa con 2.000 puestos de usuario en su red local de comunicaciones existen 3 subredes con estos direccionamientos: red A: 10.X.X.X, red B: 192.168.1.X y red C: 195.57.72.X.Teniendo en cuenta que en la ubicaci&oacute;n de los equipos de usuarios y servidores se busca mantener la red operativa y a la vez con la m&aacute;xima seguridad posible, &iquest;d&oacute;nde se ubicar&iacute;an los servidores de Base de Datos de los que se alimentan tanto los servidores web p&uacute;blicos como los de la intranet?";
 choices[80]= new Array();
 choices[80][0] = "Red A.";
 choices[80][1] = "Red B.";
 choices[80][2] = "Red C.";
 choices[80][3] = "Habr&iacute;a dos servidores de bases de datos, el p&uacute;blico en la red C y el privado en la red B.";
 answers[80] = choices[80][1];
 units[80] = "100";
 comments[80] = "Id Pregunta: 10060. TIC A2, libre, Examen 2013";


//  Id pregunta: 10139 AÃ±o de creación de pregunta: 2010-01-01
 questions[81]= "82)  El TS (Trasport Stream) en MPEG-2:";
 choices[81]= new Array();
 choices[81][0] = "Su carga &uacute;til est&aacute; formada por paquetes de trenes elementales (Packetized elementary Streams, PES)";
 choices[81][1] = "Su tama&ntilde;o es de 188 bytes";
 choices[81][2] = "Su cabecera es de 4 bytes";
 choices[81][3] = "Todas las anteriores son ciertas";
 answers[81] = choices[81][3];
 units[81] = "105";
 comments[81] = "Id Pregunta: 10139. ";


//  Id pregunta: 10319 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  &iquest;Cu&aacute;l es la direcci&oacute;n MAC de difusi&oacute;n de red o broadcast que se utiliza en Ethernet (IEEE 802.3)?";
 choices[82]= new Array();
 choices[82][0] = "255.255.255.255";
 choices[82][1] = "FF::FF";
 choices[82][2] = "FF:FF:FF:FF:FF:FF:FF:FF";
 choices[82][3] = "FF:FF:FF:FF:FF:FF";
 answers[82] = choices[82][3];
 units[82] = "101";
 comments[82] = "Id Pregunta: 10319. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10434 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  Los sistemas de videoconferencia";
 choices[83]= new Array();
 choices[83][0] = "pueden utilizar conmutaci&oacute;n de circuitos sobre la RDSI usando el protocolo H.326. ";
 choices[83][1] = "pueden utilizar redes IP con el protocolo H.323. ";
 choices[83][2] = "pueden utilizar redes IP s&oacute;lo si usan el protocolo SIP.";
 choices[83][3] = "pueden utilizar conmutaci&oacute;n de paquetes sobre RDSI, multiplexando las se&ntilde;ales de las distintas localizaciones si usan el protocolo H.328. ";
 answers[83] = choices[83][1];
 units[83] = "117";
 comments[83] = "Id Pregunta: 10434. Examen TIC A1 2013";


//  Id pregunta: 10520 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  En relaci&oacute;n al Consejo Asesor de las Telecomunicaciones y de la Sociedad de la Informaci&oacute;n indique cu&aacute;l de las siguientes afirmaciones es falsa:";
 choices[84]= new Array();
 choices[84][0] = "Es presidido por el Ministro de Industria, Energ&iacute;a y Turismo";
 choices[84][1] = "Es un &oacute;rgano asesor del Gobierno en materia de telecomunicaciones y sociedad de la informaci&oacute;n";
 choices[84][2] = "Su composici&oacute;n y su r&eacute;gimen se establecen mediante Orden Ministerial";
 choices[84][3] = "Sus miembros representar&aacute;n entre otros a los sindicatos";
 answers[84] = choices[84][2];
 units[84] = "110";
 comments[84] = "Id Pregunta: 10520. ";


//  Id pregunta: 10521 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Indique cu&aacute;l de las siguientes afirmaciones es verdadera:";
 choices[85]= new Array();
 choices[85][0] = "Las multas coercitivas son incompatibles con las sanciones";
 choices[85][1] = "El importe m&aacute;ximo de las multas coercitivas son 30000 euros";
 choices[85][2] = "El importe de las multas coercitivas  Fondo nacional del servicio universal ";
 choices[85][3] = "Ninguna de las anteriores es cierta";
 answers[85] = choices[85][1];
 units[85] = "110";
 comments[85] = "Id Pregunta: 10521. ";


//  Id pregunta: 10669 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  El t&eacute;rmino Web 2.0 se refiere a:";
 choices[86]= new Array();
 choices[86][0] = "Una generaci&oacute;n de Web basada en comunidades de usuarios que fomenta la colaboraci&oacute;n y el intercambio &aacute;gil de informaci&oacute;n entre los usuarios.";
 choices[86][1] = "Una asociaci&oacute;n de redes sociales.";
 choices[86][2] = "Un concepto original de la web basado en p&aacute;ginas HTML din&aacute;micas.";
 choices[86][3] = "Un conjunto de aplicaciones online del campo de la dom&oacute;tica.";
 answers[86] = choices[86][0];
 units[86] = "120";
 comments[86] = "Id Pregunta: 10669. ";


//  Id pregunta: 10854 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  WebDAV (RFC 4918) son un conjunto de extensiones para el protocolo HTTP, entre ellos, el m&eacute;todo PROPPATCH que sirve para:";
 choices[87]= new Array();
 choices[87][0] = "Crear colecciones.";
 choices[87][1] = "Recuperar propiedades, almacenadas como XML, desde un recurso.";
 choices[87][2] = "Cambiar y borrar m&uacute;ltiples propiedades de un recurso en una simple operaci&oacute;n at&oacute;mica.";
 choices[87][3] = "Desbloquear un recurso.";
 answers[87] = choices[87][2];
 units[87] = "112";
 comments[87] = "Id Pregunta: 10854. Examen GSI 2014";


//  Id pregunta: 10867 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  El comando ping es el acr&oacute;nimo de:";
 choices[88]= new Array();
 choices[88][0] = "Packet Internet Group.";
 choices[88][1] = "Packet Internet Gangway.";
 choices[88][2] = "Packet Internet Gate.";
 choices[88][3] = "Packet Internet Groper.";
 answers[88] = choices[88][3];
 units[88] = "112";
 comments[88] = "Id Pregunta: 10867. Examen GSI 2014";


//  Id pregunta: 10888 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  ICMP env&iacute;a mensajes en forma de datagramas que permiten al conjunto del protocolo TCP/IP realizar entre otras las siguientes funciones, se&ntilde;ale la FALSA:";
 choices[89]= new Array();
 choices[89][0] = "Control de flujo.";
 choices[89][1] = "Detecci&oacute;n de destinos inalcanzables.";
 choices[89][2] = "Encriptaci&oacute;n de paquetes.";
 choices[89][3] = "Pruebas de conectividad.";
 answers[89] = choices[89][2];
 units[89] = "100";
 comments[89] = "Id Pregunta: 10888. Examen GSI 2014";


//  Id pregunta: 10906 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  Se&ntilde;ale la respuesta correcta seg&uacute;n lo que dicta el art&iacute;culo 79 de la Ley 9/2014, General de Telecomunicaciones:";
 choices[90]= new Array();
 choices[90][0] = "Por la comisi&oacute;n de infracciones muy graves se impondr&aacute; al infractor multa por importe de hasta 30 millones de euros.";
 choices[90][1] = "Las infracciones muy graves, en funci&oacute;n de sus circunstancias, podr&aacute;n dar lugar a la inhabilitaci&oacute;n hasta de 10 a&ntilde;os del operador para la explotaci&oacute;n de redes o la prestaci&oacute;n de servicios de comunicaciones electr&oacute;nicas.";
 choices[90][2] = "Por la comisi&oacute;n de infracciones graves se impondr&aacute; al infractor multa por importe de hasta 5 millones de euros.";
 choices[90][3] = "Por la comisi&oacute;n de infracciones leves se impondr&aacute; al infractor una multa por importe de hasta 50 mil euros.";
 answers[90] = choices[90][3];
 units[90] = "110";
 comments[90] = "Id Pregunta: 10906. Examen GSI 2014";


//  Id pregunta: 11187 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;Cu&aacute;l de los siguientes ataques se basa en la suplantaci&oacute;n de identidad mediante t&eacute;cnicas de ingenier&iacute;a social?";
 choices[91]= new Array();
 choices[91][0] = "Phishing";
 choices[91][1] = "Man in the middle";
 choices[91][2] = "Eavesdropping";
 choices[91][3] = "Sniffing";
 answers[91] = choices[91][0];
 units[91] = "111";
 comments[91] = "Id Pregunta: 11187. ";


//  Id pregunta: 11318 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  La Ley 25/2007, establece las condiciones de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones. De entre los datos que hay que almacenar, no se encuentra:";
 choices[92]= new Array();
 choices[92][0] = "Datos para determinar fecha, hora y duraci&oacute;n de un comunici&oacute;n.";
 choices[92][1] = "Tipo de comunicaci&oacute;n.";
 choices[92][2] = "Datos de llamadas no conectadas";
 choices[92][3] = "Datos de llamadas infructuosas";
 answers[92] = choices[92][2];
 units[92] = "110";
 comments[92] = "Id Pregunta: 11318. Recogido de la redacci&oacute;n de la propia Ley. &quot;Art&iacute;culo 4. Los datos relativos a las llamadas no conectadas est&aacute;n excluidos de las obligaciones de conservaci&oacute;n contenidas en esta Ley...&quot;";


//  Id pregunta: 11425 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Seg&uacute;n la Ley 9/2014, la determinaci&oacute;n, el control y la inspecci&oacute;n de los niveles &uacute;nicos de emisi&oacute;n radioel&eacute;ctrica corresponden:";
 choices[93]= new Array();
 choices[93][0] = "Al MINETUR.";
 choices[93][1] = "A la CNMC.";
 choices[93][2] = "Al Gobierno.";
 choices[93][3] = "Ninguno de los anteriores.";
 answers[93] = choices[93][2];
 units[93] = "110";
 comments[93] = "Id Pregunta: 11425. ";


//  Id pregunta: 11441 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Seg&uacute;n la Ley 9/2014, los usuarios finales de redes y servicios de comunicaciones electr&oacute;nicas tendr&aacute;n derecho a:";
 choices[94]= new Array();
 choices[94][0] = "Impedir la presentaci&oacute;n de la identificaci&oacute;n de su l&iacute;nea en las llamadas que genere, mediante procedimiento sencillo y gratuito.";
 choices[94][1] = "Impedir la presentaci&oacute;n de la identificaci&oacute;n de la l&iacute;nea origen en las llamadas entrantes, mediante un procedimiento sencillo y gratuito.";
 choices[94][2] = "Rechazar las llamadas entrantes en que la l&iacute;nea origen no aparezca identificada, mediante un procedimiento sencillo y gratuito.";
 choices[94][3] = "Todas las anteriores.";
 answers[94] = choices[94][3];
 units[94] = "110";
 comments[94] = "Id Pregunta: 11441. ";


//  Id pregunta: 11468 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Seg&uacute;n la Ley 9/2014, &iquest;cu&aacute;l de las siguientes NO es una facultad del Gobierno para la administraci&oacute;n del espectro?";
 choices[95]= new Array();
 choices[95][0] = "La adecuada utilizaci&oacute;n del espectro mediante equipos y aparatos.";
 choices[95][1] = "Establecer condiciones discriminatorias respecto a los t&iacute;tulos habilitantes para el uso del dominio p&uacute;blico radioel&eacute;ctrico.";
 choices[95][2] = "Garantizar el uso efectivo y eficaz de las frecuencias.";
 choices[95][3] = "Elaborar y aprobar los planes de utilizaci&oacute;n del espectro.";
 answers[95] = choices[95][1];
 units[95] = "110";
 comments[95] = "Id Pregunta: 11468. ";


//  Id pregunta: 11569 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;De qu&eacute; tama&ntilde;o es el campo de comprobaci&oacute;n de erorres en la tecnolog&iacute;a Ethernet?";
 choices[96]= new Array();
 choices[96][0] = "16";
 choices[96][1] = "32";
 choices[96][2] = "64";
 choices[96][3] = "48";
 answers[96] = choices[96][1];
 units[96] = "100";
 comments[96] = "Id Pregunta: 11569. NULL";


//  Id pregunta: 11656 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Se&ntilde;ale la frase incorrecta:";
 choices[97]= new Array();
 choices[97][0] = "La versi&oacute;n 3 de SNMP proporciona mejoras en materia de seguridad con respecto a la versi&oacute;n 2.";
 choices[97][1] = "SNMP es un protocolo de la capa de aplicaci&oacute;n.";
 choices[97][2] = "Las versiones 1, 2 y 3 son compatibles entre s&iacute;.";
 choices[97][3] = "Los mensajes GetNextRequest se utilizan para recorrer una tabla de objetos.";
//  Id pregunta: 11726 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;C&oacute;mo se puede mejorar la cancelaci&oacute;n de campo magn&eacute;tico en cables UTP? ";
 choices[98]= new Array();
 choices[98][0] = "Aumentando el n&uacute;mero de vueltas en cada par de hilos ";
 choices[98][1] = "Disminuir el n&uacute;mero de cables que se utilizan para transportar datos";
 choices[98][2] = "Aumentando el espesor del recubrimiento de PVC que encierra todos los pares de hilo";
 choices[98][3] = "Aumentando el espesor de los hilos de cobre";
 answers[98] = choices[98][0];
 units[98] = "99";
 comments[98] = "Id Pregunta: 11726. NULL";


//  Id pregunta: 11738 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Qu&eacute; es un sistema IDM (Identity Manager)?";
 choices[99]= new Array();
 choices[99][0] = "Es una plataforma que permite gestionar desde un s&oacute;lo punto el ciclo de vida de una identidad";
 choices[99][1] = "Es cualquier sistema de gesti&oacute;n de usuarios.";
 choices[99][2] = "Es una plataforma de gesti&oacute;n de PKI para proporcionar tarjetas de identificaci&oacute;n a los empleados de la organizaci&oacute;n.";
 choices[99][3] = "Es una plataforma que impide la descentralizaci&oacute;n de la administraci&oacute;n de los sistemas de control de acceso basados en roles.";
 answers[99] = choices[99][0];
 units[99] = "118";
 comments[99] = "Id Pregunta: 11738. ";


