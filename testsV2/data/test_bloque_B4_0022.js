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

//  Id pregunta: 1383 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  Un servicio de directorio:";
 choices[0]= new Array();
 choices[0][0] = "Es una base de datos, orientada a consulta, con replicaci&oacute;n, y estructura jer&aacute;rquica";
 choices[0][1] = "Puede ser utilizado como un repositorio para guardar la informaci&oacute;n de los usuarios";
 choices[0][2] = "Puede ser utilizado como medio de autenticaci&oacute;n en sistemas heterogeneos";
 choices[0][3] = "Todas las respuestas anteriores son ciertas";
 answers[0] = choices[0][3];
 units[0] = "106";
 comments[0] = "Id Pregunta: 1383. ";


//  Id pregunta: 2970 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  &iquest;Cu&aacute;les de los siguientes mecanismo no sirve para garantizar la privacidad de las comunicaciones por correo electr&oacute;nico?";
 choices[1]= new Array();
 choices[1][0] = "GPG";
 choices[1][1] = "PGP";
 choices[1][2] = "S/MIME";
 choices[1][3] = "Todos los anteriores valen";
 answers[1] = choices[1][3];
 units[1] = "106";
 comments[1] = "Id Pregunta: 2970. ";


//  Id pregunta: 2972 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  La tecnolog&iacute;a de acceso m&uacute;ltiple por divisi&oacute;n en c&oacute;digo de banda ancha denominada WCDMA, es utilizado por el sitema de telecomunicaciones m&oacute;vil?";
 choices[2]= new Array();
 choices[2][0] = "GPS";
 choices[2][1] = "ATM";
 choices[2][2] = "TNM";
 choices[2][3] = "UMTS";
 answers[2] = choices[2][3];
 units[2] = "108";
 comments[2] = "Id Pregunta: 2972. Examen Julio 2003";


//  Id pregunta: 3049 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;Qu&eacute; es GOPHER?:";
 choices[3]= new Array();
 choices[3][0] = "Un protocolo de comunicaci&oacute;n entre redes Ethernet";
 choices[3][1] = "Un sistema operativo multitarea y multipuesto desarrollado por NeXT";
 choices[3][2] = "Un sistema disponible en Internet para b&uacute;squeda y transmisi&oacute;n de ficheros";
 choices[3][3] = "Nada de lo anterior";
 answers[3] = choices[3][2];
 units[3] = "112";
 comments[3] = "Id Pregunta: 3049. ";


//  Id pregunta: 3056 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  Dentro del modelo de objetos de ASP 3.0 como se define el objeto ra&iacute;z:";
 choices[4]= new Array();
 choices[4][0] = "ObjectRoot";
 choices[4][1] = "ObjectContext";
 choices[4][2] = "Object1";
 choices[4][3] = "Ninguna de las anteriores";
 answers[4] = choices[4][1];
 units[4] = "115";
 comments[4] = "Id Pregunta: 3056. ";


//  Id pregunta: 3066 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  En una arquitectura de tres capas el acceso a  los datos corresponde a la capa de:";
 choices[5]= new Array();
 choices[5][0] = "Presentaci&oacute;n";
 choices[5][1] = "Aplicaci&oacute;n";
 choices[5][2] = "Datos";
 choices[5][3] = "En realidad las tres capas manipulan los datos";
 answers[5] = choices[5][2];
 units[5] = "113";
 comments[5] = "Id Pregunta: 3066. ";


//  Id pregunta: 3112 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;A qu&eacute; nivel del modelo OSI corresponde la funci&oacute;n de detecci&oacute;n de colisiones en los sistemas CSMA/CD?:";
 choices[6]= new Array();
 choices[6][0] = "Nivel 1 F&iacute;sico";
 choices[6][1] = "Nivel 2 Enlace";
 choices[6][2] = "Nivel 3 Red";
 choices[6][3] = "Nivel 4 Transporte";
 answers[6] = choices[6][0];
 units[6] = "100";
 comments[6] = "Id Pregunta: 3112. Es debatible la respuesta, pero el nivel fisico en su adaptaci&oacute;n al medio f&iacute;sico de comunicaci&oacute;n puede estar capacitado para detectar colisiones.Por ejemplo, un hub trabaja en capa f&iacute;sica y detecta colisiones";


//  Id pregunta: 3126 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;C&oacute;mo se llama el est&aacute;ndar  existente para la integraci&oacute;n de LAN en ATM?:";
 choices[7]= new Array();
 choices[7][0] = "LANE";
 choices[7][1] = "WLAN";
 choices[7][2] = "FDDI";
 choices[7][3] = "ANYLAN";
 answers[7] = choices[7][0];
 units[7] = "109";
 comments[7] = "Id Pregunta: 3126. ";


//  Id pregunta: 3130 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Cu&aacute;l de estas afirmaciones es cierta para un red de conmutaci&oacute;n de paquetes en modo datagrama?:";
 choices[8]= new Array();
 choices[8][0] = "Un paquete enviado posteriormente no puede llegar antes que otro enviado con anterioridad";
 choices[8][1] = "La red reordena los paquetes y los entrega en el destino en el orden de llegada ";
 choices[8][2] = "Cada paquete lleva en la cabecera informaci&oacute;n acerca del origen y el destino del paquete";
 choices[8][3] = "S&oacute;lo el paquete de llamada lleva en la cabecera informaci&oacute;n acerca del origen y el destino de la llamada";
 answers[8] = choices[8][2];
 units[8] = "100";
 comments[8] = "Id Pregunta: 3130. NULL";


//  Id pregunta: 3131 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l de estas afirmaciones es cierta para una red de conmutaci&oacute;n de circuitos?:";
 choices[9]= new Array();
 choices[9][0] = "No es necesario establecer una llamada";
 choices[9][1] = "Una vez establecida la llamada es posible establecer otra llamada por el mismo circuito";
 choices[9][2] = "Una vez establecida la llamada no es posible establecer otra llamada por el mismo circuito";
 choices[9][3] = "No existe ning&uacute;n tipo de encaminamiento";
 answers[9] = choices[9][2];
 units[9] = "101";
 comments[9] = "Id Pregunta: 3131. ";


//  Id pregunta: 3132 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Cu&aacute;l de estas afirmaciones es cierta para una red de conmutaci&oacute;n de paquetes?:";
 choices[10]= new Array();
 choices[10][0] = "Una vez establecida la llamada es posible establecer otra llamada por el mismo circuito";
 choices[10][1] = "Una vez establecida la llamada no es posible establecer otra llamada por el mismo circuito";
 choices[10][2] = "No existe ning&uacute;n tipo de encaminamiento";
 choices[10][3] = "Todos los  paquetes siguen el mismo camino por la red";
 answers[10] = choices[10][0];
 units[10] = "101";
 comments[10] = "Id Pregunta: 3132. ";


//  Id pregunta: 3148 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto a los elementos de red?:";
 choices[11]= new Array();
 choices[11][0] = "Los bridges usan la direcci&oacute;n MAC para determinar el destino del paquete recibido";
 choices[11][1] = "Los bridges generan autom&aacute;ticamente sus propias tablas (puerto, direcci&oacute;n MAC) leyendo las direcciones MAC del remitente de cada paquete recibido";
 choices[11][2] = "Si un bridge recibe un paquete cuya direcci&oacute;n MAC de destino no tiene un puerto asociado en su tabla, lo reenv&iacute;a por todos sus puertos (flooding)";
 choices[11][3] = "Los routers, para ser compatibles con distintos protocolos de acceso al medio, utilizan tambi&eacute;n la direcci&oacute;n MAC para determinar el destino del paquete recibido";
 answers[11] = choices[11][3];
 units[11] = "102";
 comments[11] = "Id Pregunta: 3148. NULL";


//  Id pregunta: 3174 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  &iquest;Cu&aacute;l de las siguientes modulaciones, utilizadas con la tecnolog&iacute;a LMDS, proporciona mayor eficiencia espectral?:";
 choices[12]= new Array();
 choices[12][0] = "QPSK";
 choices[12][1] = "4-QAM";
 choices[12][2] = "16-QAM";
 choices[12][3] = "64-QAM";
 answers[12] = choices[12][3];
 units[12] = "107";
 comments[12] = "Id Pregunta: 3174. NULL";


//  Id pregunta: 3175 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  &iquest;Cu&aacute;l de las siguientes no corresponde a una definici&oacute;n correcta de especificaci&oacute;n de la ITU-T?:";
 choices[13]= new Array();
 choices[13][0] = "X.25: interfaz entre ETD y ETCD para terminales en modo paquete en redes p&uacute;blicas de conmutaci&oacute;n de paquetes";
 choices[13][1] = "X.29: define los mecanismos y protocolos para la conexi&oacute;n de terminales as&iacute;ncronos a trav&eacute;s de la red X25, usando un PAD";
 choices[13][2] = "X.32: interfaz entre ETD y ETCD para terminales telegr&aacute;ficos accediendo a redes p&uacute;blicas de conmutaci&oacute;n de paquetes v&iacute;a red de conmutaci&oacute;n de circuitos";
 choices[13][3] = "X.75: interconexi&oacute;n de redes p&uacute;blicas de conmutaci&oacute;n de paquetes y conexi&oacute;n de nodos de las mismas";
 answers[13] = choices[13][2];
 units[13] = "109";
 comments[13] = "Id Pregunta: 3175. ";


//  Id pregunta: 3263 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  &iquest;D&oacute;nde se define el punto de referencia R en RDSI?:";
 choices[14]= new Array();
 choices[14][0] = "Entre el ET2 (Equipo terminal de tipo 2) y el adaptador de terminales";
 choices[14][1] = "Entre el ET1 (Equipo terminal de tipo 1) y el adaptador de terminales";
 choices[14][2] = "Entre el TR1 y el TR2";
 choices[14][3] = "Entre el equipo de usaurio y el TR2 o TR1 cuando no hay TR2";
 answers[14] = choices[14][0];
 units[14] = "103";
 comments[14] = "Id Pregunta: 3263. ";


//  Id pregunta: 3291 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  &iquest;Qu&eacute; estandariza el est&aacute;ndar MIME?:";
 choices[15]= new Array();
 choices[15][0] = "Protocolo de acceso al correo electr&oacute;nico";
 choices[15][1] = "Seguridad en Sistemas de correo electr&oacute;nico";
 choices[15][2] = "Transferencia de documentos multimedia a trav&eacute;s de correo electr&oacute;nico";
 choices[15][3] = "Agenda de direcciones de correo electr&oacute;nico";
 answers[15] = choices[15][2];
 units[15] = "106";
 comments[15] = "Id Pregunta: 3291. ";


//  Id pregunta: 3303 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  &iquest;Qu&eacute; organismo se encarga directamente de asignar los puertos en Internet, que son precisos a la hora de especificar los est&aacute;ndares?:";
 choices[16]= new Array();
 choices[16][0] = "IETF";
 choices[16][1] = "IESG";
 choices[16][2] = "ITU-T";
 choices[16][3] = "ICANN";
 answers[16] = choices[16][3];
 units[16] = "100,112";
 comments[16] = "Id Pregunta: 3303. ";


//  Id pregunta: 3307 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  &iquest;Qu&eacute; punto de referencia es el interfaz f&iacute;sico y l&oacute;gico entre Terminales no dise&ntilde;ados para conectarse directamente a la RDSI, como un terminal telef&oacute;nico convencional &oacute; m&aacute;quina de fax convencional (Grupo III), con el equipo Adaptador de Terminal?: ";
 choices[17]= new Array();
 choices[17][0] = "R";
 choices[17][1] = "S";
 choices[17][2] = "T";
 choices[17][3] = "U";
 answers[17] = choices[17][0];
 units[17] = "103";
 comments[17] = "Id Pregunta: 3307. ";


//  Id pregunta: 3313 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  &iquest;Qu&eacute; t&eacute;cnica de codificaci&oacute;n utiliza Bluetooth?:";
 choices[18]= new Array();
 choices[18][0] = "Spread spectrum con secuencia directa";
 choices[18][1] = "Spread spectrum con salto de frecuencia";
 choices[18][2] = "&quot;a&quot; y &quot;b&quot;";
 choices[18][3] = "Ninguna de las anteriores";
 answers[18] = choices[18][1];
 units[18] = "107";
 comments[18] = "Id Pregunta: 3313. NULL";


//  Id pregunta: 3396 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  El nivel fisico denominado 802.11b se conoce como:";
 choices[19]= new Array();
 choices[19][0] = "High Rate Sequence HR/DS PHY (high-rate, direct-sequence PHY)";
 choices[19][1] = "High Rate Sequence HR/DSSS PHY (High Rate / Direct Sequence Spread Spectrum Physical Layer)";
 choices[19][2] = "OFDM PHY";
 choices[19][3] = "Las respuestas 'a' y 'b' son correctas";
 answers[19] = choices[19][3];
 units[19] = "101,107";
 comments[19] = "Id Pregunta: 3396. ";


//  Id pregunta: 3461 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  El protocolo TCP (Transmisi&oacute;n Control Protocol):";
 choices[20]= new Array();
 choices[20][0] = "Es orientado a conexi&oacute;n y bidireccional";
 choices[20][1] = "Es orientado a conexi&oacute;n, pero no bidireccional";
 choices[20][2] = "Es no orientado a conexi&oacute;n y bidireccional";
 choices[20][3] = "Es no orientado a conexi&oacute;n, y no bidireccional";
 answers[20] = choices[20][0];
 units[20] = "100";
 comments[20] = "Id Pregunta: 3461. NULL";


//  Id pregunta: 3486 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  En ATM , &iquest;Qu&eacute; tipo de AAL (ATM Adaptation Layer) es el principal para datos, y juega un papel importante en emulaci&oacute;n de LAN?:";
 choices[21]= new Array();
 choices[21][0] = "AAL 1";
 choices[21][1] = "AAL 2";
 choices[21][2] = "AAL 3/4";
 choices[21][3] = "AAL 5";
 answers[21] = choices[21][3];
 units[21] = "109";
 comments[21] = "Id Pregunta: 3486. ";


//  Id pregunta: 3519 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  En Espa&ntilde;a la televisi&oacute;n por cable:";
 choices[22]= new Array();
 choices[22][0] = "Est&aacute; teniendo una implantaci&oacute;n similar a la existente en Alemania";
 choices[22][1] = "Carece de tecnolog&iacute;a suficiente para poder implantarse";
 choices[22][2] = "Se presta generalmente con redes h&iacute;bridasjunto a telefon&iacute;a y datos";
 choices[22][3] = "Todo lo anterior es correcto";
 answers[22] = choices[22][2];
 units[22] = "105";
 comments[22] = "Id Pregunta: 3519. ";


//  Id pregunta: 3537 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  En las transmisi&oacute;n de datos en tramas se suele incluir un campo denominado CRC. Indique cu&aacute;l de las opciones le parece correcta:";
 choices[23]= new Array();
 choices[23][0] = "Es un campo que indica el final de la trama y prepara al equipo receptor para la siguiente";
 choices[23][1] = "Es un campo de control del n&uacute;mero de bits incluidos en la trama, para conocer el final de la misma";
 choices[23][2] = "Es un campo de control de integridad de la trama, sirve para comprobar la ocurrencia de ciertos errores en la transmisi&oacute;n";
 choices[23][3] = "Es un campo de control de integridad de la trama, sirve para detectar cualquier error en la transmisi&oacute;n";
 answers[23] = choices[23][2];
 units[23] = "101";
 comments[23] = "Id Pregunta: 3537. ";


//  Id pregunta: 3552 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  En sistemas de informaci&oacute;n y comunicaciones, INAP es acr&oacute;nimo de:";
 choices[24]= new Array();
 choices[24][0] = "Integration Network Application Protocol";
 choices[24][1] = "Intelligent Network Application Protocol";
 choices[24][2] = "Inverse Naming Address Protocol";
 choices[24][3] = "Intelligent Network Application Part";
 answers[24] = choices[24][3];
 units[24] = "102";
 comments[24] = "Id Pregunta: 3552. ";


//  Id pregunta: 3565 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  En un mensaje de correo electr&oacute;nico cifrado, seg&uacute;n el protocolo S-MIME,  se reciben cifrados:";
 choices[25]= new Array();
 choices[25][0] = "La direcci&oacute;n de correo electr&oacute;nico del destinatario y la direcci&oacute;n de correo electr&oacute;nico del remitente";
 choices[25][1] = "El cuerpo del mensaje y sus archivos adjuntos";
 choices[25][2] = "La &quot;traza&quot; del mensaje (servidores SMTP por los que ha sido encaminado)";
 choices[25][3] = "El asunto del mensaje, el tipo de contenido y la fecha";
 answers[25] = choices[25][1];
 units[25] = "106";
 comments[25] = "Id Pregunta: 3565. ";


//  Id pregunta: 3582 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  Entre las respuestas hay tres relacionadas. Indicar la que no lo est&aacute;:";
 choices[26]= new Array();
 choices[26][0] = "BOOTP";
 choices[26][1] = "SNMP";
 choices[26][2] = "DHCP";
 choices[26][3] = "ARP";
 answers[26] = choices[26][1];
 units[26] = "100";
 comments[26] = "Id Pregunta: 3582. NULL";


//  Id pregunta: 3616 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  La linea &quot;Connection: Keep Alive&quot;, dentro de un mensaje HTTP significa:";
 choices[27]= new Array();
 choices[27][0] = "Dice al servidor web que cierre la conexi&oacute;n";
 choices[27][1] = "Dice al servidor web que cierre la conexi&oacute;n desues de la peticion del cliente";
 choices[27][2] = "El resultado es el mismo en HTTP 1.0 y HTTP 1.1";
 choices[27][3] = "Le dice al servidor que cierra la conexi&oacute;n cuando el cliente lo pida";
 answers[27] = choices[27][3];
 units[27] = "112";
 comments[27] = "Id Pregunta: 3616. ";


//  Id pregunta: 3633 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  La prioridad de acceso en redes Token Ring:";
 choices[28]= new Array();
 choices[28][0] = "Usa los primeros 6 bits en el campo 'Priority' (prioridad) para controlar el acceso en red Token Ring";
 choices[28][1] = "Permite a los puentes de la red limitar tr&aacute;fico de broadcast sobre redes locales o remotas";
 choices[28][2] = "Es una funci&oacute;n del router (encaminador o canalizador) usada para control de acceso a ciertas puertas seg&uacute;n la prioridad de la direcci&oacute;n";
 choices[28][3] = "Permite que ciertas estaciones accedan a la red m&aacute;s frecuentemente que otras basadas en su prioridad";
 answers[28] = choices[28][3];
 units[28] = "101";
 comments[28] = "Id Pregunta: 3633. ";


//  Id pregunta: 3687 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  La versi&oacute;n europea de la tecnolog&iacute;a de sat&eacute;lites GPS americana se denomina:";
 choices[29]= new Array();
 choices[29][0] = "Kepler";
 choices[29][1] = "Galileo";
 choices[29][2] = "Marconi";
 choices[29][3] = "Hawking";
 answers[29] = choices[29][1];
 units[29] = "108";
 comments[29] = "Id Pregunta: 3687. ";


//  Id pregunta: 3734 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  Los prestadores de servicios de la sociedad de la informaci&oacute;n, seg&uacute;n la Ley 34/2002, tienen obligaci&oacute;n:";
 choices[30]= new Array();
 choices[30][0] = "De comunicar a la Agencia de Protecci&oacute;n de Datos peri&oacute;dicamente los datos de tr&aacute;fico relativos a comunicaciones electr&oacute;nicas";
 choices[30][1] = "De comunicar al Registro de la Propiedad y a la Conserjer&iacute;a de Administraciones P&uacute;blicas su nombre de dominio y direcci&oacute;n de internet";
 choices[30][2] = "De mantener datos para su utilizaci&oacute;n en el marco de una investigaci&oacute;n criminal o para la salvaguarda de la seguridad p&uacute;blica y la defensa nacional sin sujeci&oacute;n a lo dispuesto en la normativa sobre protecci&oacute;n de datos personales";
 choices[30][3] = "De almacenar los datos de conexi&oacute;n y tr&aacute;fico generados por las comunicaciones establecidas durante la prestaci&oacute;n de un servicio de la sociedad de la informaci&oacute;n por un periodo m&aacute;ximo de 12 meses";
 answers[30] = choices[30][3];
 units[30] = "110";
 comments[30] = "Id Pregunta: 3734. ";


//  Id pregunta: 3748 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  Mbone es:";
 choices[31]= new Array();
 choices[31][0] = "una versi&oacute;n avanzada de Internet 2";
 choices[31][1] = "un backbone especializado en tranmisi&oacute;n de datos multimedia s&oacute;lo en tiempo real";
 choices[31][2] = "el backbone que une todas las dependencias del MIT para intercambio de informaci&oacute;n cient&iacute;fica y tecnol&oacute;gica";
 choices[31][3] = "una red virtual sobre porciones de internet con islas IP multicast";
 answers[31] = choices[31][3];
 units[31] = "112";
 comments[31] = "Id Pregunta: 3748. ";


//  Id pregunta: 3856 AÃ±o de creación de pregunta: 2003-01-01
 questions[32]= "33)  El ataque de denegaci&oacute;n de servicio llamado Smurf consiste en:";
 choices[32]= new Array();
 choices[32][0] = "Dejar una conexi&oacute;n en estado semiabierto y no llegar a realizarse el paso final para establecer una conexi&oacute;n";
 choices[32][1] = "Se trata de mandar a un puerto abierto del servidor un paquete hecho con la direcci&oacute;n y puerto origen igual que la direcci&oacute;n y puerto destino";
 choices[32][2] = "Consiste en recolectar direcciones BroadCast para despu&eacute;s mandar una petici&oacute;n ICMP cada una de ellas, falsificando la direcci&oacute;n IP de origen";
 choices[32][3] = "Se trata de saturar la red mediante una cantidad repetitiva y enorme de peticiones de conexi&oacute;n";
 answers[32] = choices[32][2];
 units[32] = "111";
 comments[32] = "Id Pregunta: 3856. NULL";


//  Id pregunta: 3926 AÃ±o de creación de pregunta: 2003-01-01
 questions[33]= "34)  &iquest;Cual de los siguientes es un monitor de transacciones?";
 choices[33]= new Array();
 choices[33][0] = "Tuxedo ";
 choices[33][1] = "Tivoli";
 choices[33][2] = "Unicenter TNG";
 choices[33][3] = "Ninguno de los anteriores";
 answers[33] = choices[33][0];
 units[33] = "49";
 comments[33] = "Id Pregunta: 3926. Pregunta similar a la del ex&aacute;men de SS del 2003 salvo en algunas opciones";


//  Id pregunta: 3930 AÃ±o de creación de pregunta: 2003-01-01
 questions[34]= "35)  &iquest;Cu&aacute;l no es una extensi&oacute;n de fichero?";
 choices[34]= new Array();
 choices[34][0] = " .pdf";
 choices[34][1] = " .bmp";
 choices[34][2] = ".phf";
 choices[34][3] = ".doc";
 answers[34] = choices[34][2];
 units[34] = "56";
 comments[34] = "Id Pregunta: 3930. ";


//  Id pregunta: 3934 AÃ±o de creación de pregunta: 2003-01-01
 questions[35]= "36)  &iquest;En que nivel del modelo OSI se realiza el cifrado?";
 choices[35]= new Array();
 choices[35][0] = "1";
 choices[35][1] = "5";
 choices[35][2] = "7";
 choices[35][3] = "6";
 answers[35] = choices[35][3];
 units[35] = "72";
 comments[35] = "Id Pregunta: 3934. NULL";


//  Id pregunta: 3948 AÃ±o de creación de pregunta: 2003-01-01
 questions[36]= "37)  En la clasificaci&oacute;n de las redes de comunicaci&oacute;n por su extensi&oacute;n no se incluye:";
 choices[36]= new Array();
 choices[36][0] = "MAN (Metropolitan Area Network";
 choices[36][1] = "LAN (Local Area Network)";
 choices[36][2] = "SAN (State Areal Network)";
 choices[36][3] = "WAN (Wide Area Network)";
 answers[36] = choices[36][2];
 units[36] = "113,101";
 comments[36] = "Id Pregunta: 3948. ";


//  Id pregunta: 3969 AÃ±o de creación de pregunta: 2003-01-01
 questions[37]= "38)  Un &quot;proxy&quot; o apoderado de HTTP empleado para la conexi&oacute;n de usuarios de una organizaci&oacute;n a Internet:";
 choices[37]= new Array();
 choices[37][0] = "S&oacute;lo permite controlar qui&eacute;nes pueden acceder y a qu&eacute; servidores";
 choices[37][1] = "Es un elemento de seguridad";
 choices[37][2] = "Esencialmente sirve para mejorar los tiempos de acceso a Internet";
 choices[37][3] = "No es &uacute;til si ya se tiene un filtro de paquetes en el acceso a Internet";
 answers[37] = choices[37][1];
 units[37] = "106";
 comments[37] = "Id Pregunta: 3969. ";


//  Id pregunta: 3970 AÃ±o de creación de pregunta: 2003-01-01
 questions[38]= "39)  Un registro MX en un servidor DNS, &iquest; a qu&eacute; hace referencia?";
 choices[38]= new Array();
 choices[38][0] = "al servidor DNS principal";
 choices[38][1] = "al servidor web asociado al dominio";
 choices[38][2] = "al servidor de correo asociado al dominio";
 choices[38][3] = "al servidor seguro asociado al dominio";
 answers[38] = choices[38][2];
 units[38] = "106";
 comments[38] = "Id Pregunta: 3970. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 4014 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  Con respecto a la tecnolog&iacute;a WIMAX, se&ntilde;ale qu&eacute; est&aacute;ndar del IEEE ha sido dise&ntilde;ado para soportar roaming entre c&eacute;lulas y movilidad urbana (baja velocidad):";
 choices[39]= new Array();
 choices[39][0] = "802.16";
 choices[39][1] = "802.16a";
 choices[39][2] = "802.16c";
 choices[39][3] = "802.16e";
 answers[39] = choices[39][3];
 units[39] = "107";
 comments[39] = "Id Pregunta: 4014. NULL";


//  Id pregunta: 4033 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  &iquest;Cu&aacute;l de los siguientes acr&oacute;nimos relacionados con Frame Relay hace referencia al volumen de informaci&oacute;n comprometida?";
 choices[40]= new Array();
 choices[40][0] = "Be";
 choices[40][1] = "CIR";
 choices[40][2] = "Bc";
 choices[40][3] = "EIR";
 answers[40] = choices[40][2];
 units[40] = "109";
 comments[40] = "Id Pregunta: 4033. ";


//  Id pregunta: 4070 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  Podemos definir spoofing como";
 choices[41]= new Array();
 choices[41][0] = "captura de datos sensibles mediante la escucha no autorizada";
 choices[41][1] = "amenaza propia de virus y gusanos";
 choices[41][2] = "Suplantaci&oacute;n de la direcci&oacute;n IP ";
 choices[41][3] = "Un mecanismo de enga&ntilde;o basado en t&eacute;cnicas de ingenier&iacute;a social";
 answers[41] = choices[41][2];
 units[41] = "112";
 comments[41] = "Id Pregunta: 4070. ";


//  Id pregunta: 4076 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  &iquest;Cu&aacute;l de las siguientes afirmaciones no es cierta?";
 choices[42]= new Array();
 choices[42][0] = "El modelo en dos capas no permite la distribuci&oacute;n en dos capas diferentes el interfaz de usuario y la l&oacute;gica de negocio";
 choices[42][1] = "El modelo en 3 capas permite situar en una capa separada los datos";
 choices[42][2] = "El modelo en 3 capas permite una mayor seguridad que el modelo en 2 capas";
 choices[42][3] = "El modelo en 2 capas permite separar en una capa separada los datos";
 answers[42] = choices[42][0];
 units[42] = "113";
 comments[42] = "Id Pregunta: 4076. ";


//  Id pregunta: 4110 AÃ±o de creación de pregunta: 2006-01-01
 questions[43]= "44)  IRC es:";
 choices[43]= new Array();
 choices[43][0] = "Internet Random Card, un protocolo para acceder al servicio de videoconferencia a trav&eacute;s de Internet.";
 choices[43][1] = "Internet Requery Chat, un protocolo para acceder al servicio de Chat y que es usado por clientes como XChat.";
 choices[43][2] = "Internet Relay Chat, un protocolo para acceder al servicio de Chat y que es usado por clientes como mIRC.";
 choices[43][3] = "b) y c) son correctas.";
 answers[43] = choices[43][2];
 units[43] = "112";
 comments[43] = "Id Pregunta: 4110. ";


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


//  Id pregunta: 4123 AÃ±o de creación de pregunta: 2006-01-01
 questions[45]= "46)  Cuando sincronizamos datos entre una PDA bluetooth y el PC usamos una red";
 choices[45]= new Array();
 choices[45][0] = "LAN";
 choices[45][1] = "PAN";
 choices[45][2] = "NAS";
 choices[45][3] = "MAN";
 answers[45] = choices[45][1];
 units[45] = "107";
 comments[45] = "Id Pregunta: 4123. NULL";


//  Id pregunta: 4139 AÃ±o de creación de pregunta: 2006-01-01
 questions[46]= "47)  La transmisi&oacute;n de datos a trav&eacute;s de la red p&uacute;blica de forma que los nodos de enrutado no sean conscientes de que la transmisi&oacute;n es parte de una red privada se llama";
 choices[46]= new Array();
 choices[46][0] = "Tunel";
 choices[46][1] = "Red Privada Virtual (VPN)";
 choices[46][2] = "IPSec";
 choices[46][3] = "SSL";
 answers[46] = choices[46][0];
 units[46] = "111";
 comments[46] = "Id Pregunta: 4139. NULL";


//  Id pregunta: 4161 AÃ±o de creación de pregunta: 2006-01-01
 questions[47]= "48)  En seguridad, que elemento no forma parte de los servicios de AAA";
 choices[47]= new Array();
 choices[47][0] = "Registro (accounting)";
 choices[47][1] = "Autorizaci&oacute;n";
 choices[47][2] = "Adaptaci&oacute;n";
 choices[47][3] = "Autenticaci&oacute;n";
 answers[47] = choices[47][2];
 units[47] = "111";
 comments[47] = "Id Pregunta: 4161. NULL";


//  Id pregunta: 4170 AÃ±o de creación de pregunta: 2006-01-01
 questions[48]= "49)  La pol&iacute;tica de m&iacute;nimo privilegio trata de forzar los derechos de usuario m&aacute;s restrictivos";
 choices[48]= new Array();
 choices[48][0] = "Para ejecutar procesos de sistema";
 choices[48][1] = "En su descripci&oacute;n de puesto de trabajo";
 choices[48][2] = "Para realizar tareas autorizadas";
 choices[48][3] = "En el acceso a servicios de red";
 answers[48] = choices[48][2];
 units[48] = "111";
 comments[48] = "Id Pregunta: 4170. NULL";


//  Id pregunta: 4262 AÃ±o de creación de pregunta: 2007-01-01
 questions[49]= "50)  El protocolo RAS de la pila de protocolos H323 de la ITU:";
 choices[49]= new Array();
 choices[49][0] = "Son las siglas de Registration, Admission and Signalling";
 choices[49][1] = "Funciona sobre el protocolo de transporte TCP";
 choices[49][2] = "Es un protocolo de se&ntilde;alizacion entre los elementos de red y el Gateway";
 choices[49][3] = "El canal de se&ntilde;alizaci&oacute;n RAS se abre antes de que se establezca cualquier otro canal entre puntos extremos H.323";
 answers[49] = choices[49][3];
 units[49] = "109";
 comments[49] = "Id Pregunta: 4262. ";


//  Id pregunta: 4353 AÃ±o de creación de pregunta: 2007-01-01
 questions[50]= "51)  La telefon&iacute;a m&oacute;vil celular:";
 choices[50]= new Array();
 choices[50][0] = "Permite el paso din&aacute;mico de un terminal entre las c&eacute;lulas.";
 choices[50][1] = "No permite el cambio de c&eacute;lula durante la conversaci&oacute;n.";
 choices[50][2] = "Establece un tama&ntilde;o de c&eacute;lula mayor en ciudad que en espacios abiertos a fin de soportar la mayor densidad de tr&aacute;fico.";
 choices[50][3] = "S&oacute;lo funciona con tecnolog&iacute;a digital.";
 answers[50] = choices[50][0];
 units[50] = "108";
 comments[50] = "Id Pregunta: 4353. ";


//  Id pregunta: 4597 AÃ±o de creación de pregunta: 2007-01-01
 questions[51]= "52)  En Ia tecnolog&iacute;a ATM qu&eacute; tipo de protocolo utilizar&iacute;a en la capa de adaptaci&oacute;n al medio si estamos trabajando en modo orientado a conexi&oacute;n y con una tasa de bits constante:";
 choices[51]= new Array();
 choices[51][0] = "Tipo 1";
 choices[51][1] = "Tipo 2";
 choices[51][2] = "Tipo 3/4";
 choices[51][3] = "Tipo 5";
 answers[51] = choices[51][0];
 units[51] = "109";
 comments[51] = "Id Pregunta: 4597. ";


//  Id pregunta: 4733 AÃ±o de creación de pregunta: 2007-01-01
 questions[52]= "53)  Los registros glue de una zona DNS son aquellos que:";
 choices[52]= new Array();
 choices[52][0] = "Son los registros que mantienen la resoluci&oacute;n inversa.";
 choices[52][1] = " Son los registros que mantienen el espacio de nombres de la zona.";
 choices[52][2] = "Son los registros que permiten intercambiar informaci&oacute;n entre las diferentes zonas/subzonas";
 choices[52][3] = "Son los registros que permiten la consulta delegada de otros sistemas dns.";
 answers[52] = choices[52][1];
 units[52] = "112";
 comments[52] = "Id Pregunta: 4733. Examen 2006 JCYL";


//  Id pregunta: 4752 AÃ±o de creación de pregunta: 2007-01-01
 questions[53]= "54)  La interfaz entre la RNC de la UTRAN y el SGSN es:";
 choices[53]= new Array();
 choices[53][0] = "Iu";
 choices[53][1] = "Iub";
 choices[53][2] = " Gi";
 choices[53][3] = " Gb";
 answers[53] = choices[53][0];
 units[53] = "108";
 comments[53] = "Id Pregunta: 4752. ";


//  Id pregunta: 4829 AÃ±o de creación de pregunta: 2007-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas NO es aplicable en una aplicaci&oacute;n desarrollada con la tecnolog&iacute;a Java WebStart?";
 choices[54]= new Array();
 choices[54][0] = "Permite ejecutar aplicaciones independientemente de cual sea la plataforma cliente";
 choices[54][1] = "Soporta m&uacute;ltiples versiones de entornos de ejecuci&oacute;n Java en el cliente";
 choices[54][2] = "Se requiere la firma de las aplicaciones que vayan a ejecutarse en ese entorno para garantizar la seguridaddel cliente";
 choices[54][3] = "La actualizaci&oacute;n de las aplicaciones se hace en el servidor, y el cliente s&oacute;lo precisa descargar loscomponentes actualizados";
 answers[54] = choices[54][2];
 units[54] = "116";
 comments[54] = "Id Pregunta: 4829. ";


//  Id pregunta: 4883 AÃ±o de creación de pregunta: 2007-01-01
 questions[55]= "56)  Dentro de un sistema de cableado estructurado el denominado &quot;subsistema horizontal&quot; es aquel que:";
 choices[55]= new Array();
 choices[55][0] = "Interconecta las plantas del edificio y los cuadros de distribuci&oacute;n de cada planta";
 choices[55][1] = "Interconecta las rosetas con el cuadro de distribuci&oacute;n de planta";
 choices[55][2] = "Interconecta edificios en el entorno de un campus";
 choices[55][3] = "Interconecta a todo el cableado de un edificio";
 answers[55] = choices[55][1];
 units[55] = "99";
 comments[55] = "Id Pregunta: 4883. NULL";


//  Id pregunta: 4985 AÃ±o de creación de pregunta: 2003-01-01
 questions[56]= "57)  Seg&uacute;n la ley 9/2014, General de Telecomunicaciones, la competencia de control e inspecci&oacute;n del dominio p&uacute;blico radioel&eacute;ctrico corresponde a:";
 choices[56]= new Array();
 choices[56][0] = "El Ministerio de Industria, Energ&iacute;a y Turismo";
 choices[56][1] = "El Consejo Asesor de las Telecomunicaciones y de la Sociedad de la Informaci&oacute;n.";
 choices[56][2] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia.";
 choices[56][3] = "La Sociedad Estatal de Control e Inspecci&oacute;n Radioel&eacute;ctrica.";
 answers[56] = choices[56][0];
 units[56] = "110";
 comments[56] = "Id Pregunta: 4985. Examen TIC B 2007";


//  Id pregunta: 5158 AÃ±o de creación de pregunta: 2003-01-01
 questions[57]= "58)  Indique el est&aacute;ndar en el que se basan las redes Ethernet:";
 choices[57]= new Array();
 choices[57][0] = "IEEE 802.2";
 choices[57][1] = "IEEE 802.3";
 choices[57][2] = "IEEE 802.4";
 choices[57][3] = "IEEE 802.5";
 answers[57] = choices[57][1];
 units[57] = "101";
 comments[57] = "Id Pregunta: 5158. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5787 AÃ±o de creación de pregunta: 2009-01-01
 questions[58]= "59)  UMTS en su est&aacute;ndar contempla como posibilidades para transmisi&oacute;n d&uacute;plex:";
 choices[58]= new Array();
 choices[58][0] = "CMDA o TDMA";
 choices[58][1] = "FDD o TDD";
 choices[58][2] = "FDMA u OFDMA";
 choices[58][3] = "TCDMA";
 answers[58] = choices[58][1];
 units[58] = "108";
 comments[58] = "Id Pregunta: 5787. ";


//  Id pregunta: 5833 AÃ±o de creación de pregunta: 2009-01-01
 questions[59]= "60)  &iquest;Cu&aacute;l de los dispositivos de red -citados seguidamente- brinda internetworking y control de broadcast?";
 choices[59]= new Array();
 choices[59][0] = "Hub";
 choices[59][1] = "Puente";
 choices[59][2] = "NIC (Network Interface Card)";
 choices[59][3] = "Router";
 answers[59] = choices[59][3];
 units[59] = "102";
 comments[59] = "Id Pregunta: 5833. MAP 2008 A1";


//  Id pregunta: 6109 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  La competencia para la propuesta de planificaci&oacute;n, gesti&oacute;n y administraci&oacute;n del dominio p&uacute;blico radioel&eacute;ctrico, para la comprobaci&oacute;n t&eacute;cnica de emisiones radioel&eacute;ctricas, y para el control y la inspecci&oacute;n de las telecomunicaciones, as&iacute; como la aplicaci&oacute;n del r&eacute;gimen sancionador en la materia, la tiene:";
 choices[60]= new Array();
 choices[60][0] = "El Ministerio de Industria, Energ&iacute;a y Turismo.";
 choices[60][1] = "Comisi&oacute;n Nacional de los Mercados y la Competencia.";
 choices[60][2] = "La Uni&oacute;n Internacional de Telecomunicaciones.";
 choices[60][3] = "Red.es.";
 answers[60] = choices[60][0];
 units[60] = "110";
 comments[60] = "Id Pregunta: 6109. TIC A 2009";


//  Id pregunta: 6164 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  Se&ntilde;ale la informaci&oacute;n falsa:";
 choices[61]= new Array();
 choices[61][0] = "La telepresencia es la evoluci&oacute;n de los servicios de videoconferencia que se acerca hacia la realidad virtual.";
 choices[61][1] = "En una sesi&oacute;n de videoconferencia es posible incorporar herramientas de colaboraci&oacute;n.";
 choices[61][2] = "En soluciones de videoconferencia accesibles desde el exterior es posible tunelizar las comunicaciones por el puerto http o de lo contrario tener en cuenta las consideraciones con los Firewall.";
 choices[61][3] = "Todas las anteriores son correctas.";
 answers[61] = choices[61][3];
 units[61] = "117";
 comments[61] = "Id Pregunta: 6164. ";


//  Id pregunta: 6205 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  En Java, &iquest;Qu&eacute; es JSON?";
 choices[62]= new Array();
 choices[62][0] = "Un formato ligero para el intercambio de datos";
 choices[62][1] = "Tecnolog&iacute;a con la finalidad principal de facilitar la integraci&oacute;n en la misma p&aacute;gina Web de aplicaciones y servicios a priori independientes";
 choices[62][2] = "Servicios interactivos en red dando al usuario el control de los datos";
 choices[62][3] = "Componentes modulares de interfaz de usuario gestionados y visualizados en un portal web";
 answers[62] = choices[62][0];
 units[62] = "116";
 comments[62] = "Id Pregunta: 6205. TICB-2009, bloque desarrollo";


//  Id pregunta: 6344 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  &iquest;Cu&aacute;l de las siguientes formas de presentar informaci&oacute;n se identifica mejor con la definici&oacute;n de folcsonom&iacute;a?";
 choices[63]= new Array();
 choices[63][0] = "&Aacute;rbol";
 choices[63][1] = "Directorio";
 choices[63][2] = "Nube de Tags";
 choices[63][3] = "Cubo";
 answers[63] = choices[63][2];
 units[63] = "120";
 comments[63] = "Id Pregunta: 6344. NULL";


//  Id pregunta: 6345 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  Identifique cu&aacute;l de los siguientes no es uno de los siete principios de la Web 2.0";
 choices[64]= new Array();
 choices[64][0] = "World Wide Web como plataforma de trabajo";
 choices[64][1] = "Las experiencias enriquecedoras de los usuarios";
 choices[64][2] = "El fin del ciclo de las actualizaciones de versiones del software.";
 choices[64][3] = "El software limitado a un solo dispositivo.";
 answers[64] = choices[64][3];
 units[64] = "120";
 comments[64] = "Id Pregunta: 6345. NULL";


//  Id pregunta: 6355 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  Cuando el Regristro de Operadores constate que la notificaci&oacute;n, de un interesado en la explotaci&oacute;n de una determinada red o en la prestaci&oacute;n de un determinado serviciode comunicaciones electr&oacute;nicas, no re&uacute;ne los requisitos, dictar&aacute; resoluci&oacute;n motivada en un plazo m&aacute;ximo de:";
 choices[65]= new Array();
 choices[65][0] = "1 mes";
 choices[65][1] = "10 d&iacute;as";
 choices[65][2] = "15 d&iacute;as";
 choices[65][3] = "2 meses";
 answers[65] = choices[65][2];
 units[65] = "110";
 comments[65] = "Id Pregunta: 6355. Art&iacute;culo 7 Ley 9/2014";


//  Id pregunta: 7262 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  &quot;&iquest;Cu&aacute;l es el est&aacute;ndar WIMAX que permite movilidad conocido como &quot;&quot;WIMAX m&oacute;vil&quot;&quot;?&quot;";
 choices[66]= new Array();
 choices[66][0] = "802.16d";
 choices[66][1] = "802.16";
 choices[66][2] = "802.16h";
 choices[66][3] = "802.16e";
 answers[66] = choices[66][3];
 units[66] = "107";
 comments[66] = "Id Pregunta: 7262. Examen TIC B 2009";


//  Id pregunta: 8188 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  Los &quot;mashups&quot; en Web 2.0:";
 choices[67]= new Array();
 choices[67][0] = "Son un tipo de wikis con interfaces AJAX.";
 choices[67][1] = "Son una aplicaci&oacute;n de la teor&iacute;a &quot;Long Tail&quot;.";
 choices[67][2] = "Son aplicaciones web que combinan datos o servicios de otras fuentes.";
 choices[67][3] = "Siempre se implementan con t&eacute;cnicas de &quot;screen scraping&quot;.";
 answers[67] = choices[67][2];
 units[67] = "120";
 comments[67] = "Id Pregunta: 8188. Examen TIC A1 2010";


//  Id pregunta: 8539 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  &iquest;Qu&eacute; est&aacute;ndar de redes inal&aacute;mbricas permite a dispositivos en movimiento realizar itinerancia r&aacute;pida de un punto de acceso a otro?";
 choices[68]= new Array();
 choices[68][0] = "IEEE 802.11 h";
 choices[68][1] = "IEEE 802.11 l";
 choices[68][2] = "IEEE 802.11 p";
 choices[68][3] = "IEEE 802 11 r.";
 answers[68] = choices[68][3];
 units[68] = "107";
 comments[68] = "Id Pregunta: 8539. Examen TIC A2 2010 interna";


//  Id pregunta: 8729 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  Un servidor DHCP no puede proveer a un equipo cliente de la configuraci&oacute;n de";
 choices[69]= new Array();
 choices[69][0] = "M&aacute;scara de subred";
 choices[69][1] = "Tiempo m&aacute;ximo de espera del ARP";
 choices[69][2] = "Servidor SMTP";
 choices[69][3] = "Software antivirus";
 answers[69] = choices[69][3];
 units[69] = "100";
 comments[69] = "Id Pregunta: 8729. Examen UPM A2 2011";


//  Id pregunta: 8810 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  El objeto anchor de Javascript indica...";
 choices[70]= new Array();
 choices[70][0] = "Los enlaces internos del documento";
 choices[70][1] = "Los v&iacute;nculos externos del documento";
 choices[70][2] = "Array con todas las anclas del documento";
 choices[70][3] = "El ancho m&aacute;ximo de los elementos de un formulario";
 answers[70] = choices[70][0];
 units[70] = "114";
 comments[70] = "Id Pregunta: 8810. Examen UPM A2 2011";


//  Id pregunta: 8811 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  Una p&aacute;gina ASP mezcla en el mismo archivo secuencias de comandos con c&oacute;digo HTML est&aacute;ndar con las secuencias de comandos asp mediante los delimitadores:";
 choices[71]= new Array();
 choices[71][0] = "&lt;% y %&gt;";
 choices[71][1] = "&lt;SCRIPT LANGUAGE=&quot;ASPScript&quot;&gt; &lt;/SCRIPl&gt;";
 choices[71][2] = "&lt;!- --&gt;";
 choices[71][3] = "Los comandos ASP no se mezclan en el mismo archive que el c&oacute;digo HTML, sino que se importan desde otro archivo";
 answers[71] = choices[71][0];
 units[71] = "59, 115";
 comments[71] = "Id Pregunta: 8811. Examen UPM A2 2011";


//  Id pregunta: 8843 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)   Se entiende por SSO ";
 choices[72]= new Array();
 choices[72][0] = " Un procedimiento de autenticaci&oacute;n que permite acceder a diversos recursos inform&aacute;ticos utilizando una &uacute;nica identificaci&oacute;n";
 choices[72][1] = " Un sistema basado el claves SSL para la gesti&oacute;n remota de claves sim&eacute;tricas";
 choices[72][2] = " Un sistema de gesti&oacute;n y almacenamiento de claves fraccionadas con coherencia asim&eacute;trica";
 choices[72][3] = " Un procedimiento de comunicaciones seguras entre objetos basado en sockets";
 answers[72] = choices[72][0];
 units[72] = "118";
 comments[72] = "Id Pregunta: 8843. Examen UC3M 2010";


//  Id pregunta: 8869 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  &iquest;Es posible hacer convivir varios protocolos incompatibles entre s&iacute; sobre una misma red?";
 choices[73]= new Array();
 choices[73][0] = "No";
 choices[73][1] = "S&iacute;, utilizando tunneling o encapsulado de protocolos";
 choices[73][2] = "S&iacute;, pero s&oacute;lo si los protocolos pertenecen a la familia OSI";
 choices[73][3] = "S&iacute;, pero solamente dentro del conjunto de est&aacute;ndares IEEE 802";
 answers[73] = choices[73][1];
 units[73] = "100";
 comments[73] = "Id Pregunta: 8869. Analista Ayto. Madrid 2010";


//  Id pregunta: 9014 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  &iquest;Qu&eacute; t&eacute;cnica pueden emplearse para corregir la interferencia entre s&iacute;mbolos en un demodulador digital?";
 choices[74]= new Array();
 choices[74][0] = "el filtrado de coseno alzado de la moduladora";
 choices[74][1] = "el filtrado de pre&eacute;nfasis de la moduladora";
 choices[74][2] = "el filtrado de de retardo de grupo constante";
 choices[74][3] = "Ninguna de las anteriores";
 answers[74] = choices[74][0];
 units[74] = "99";
 comments[74] = "Id Pregunta: 9014. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9019 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  La funci&oacute;n de un repetidor en una l&iacute;nea telef&oacute;nica es &hellip;";
 choices[75]= new Array();
 choices[75][0] = "Amplificar la potencia de las se&ntilde;ales vocales.";
 choices[75][1] = "Compensar la atenuaci&oacute;n y corregir la deformaci&oacute;n de las corrientes vocales.";
 choices[75][2] = "Corregir la paradiafon&iacute;a de la l&iacute;nea.";
 choices[75][3] = "Ninguna de las anteriores";
 answers[75] = choices[75][1];
 units[75] = "99";
 comments[75] = "Id Pregunta: 9019. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9498 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  Se&ntilde;ale la afimaci&oacute;n falsa con respecto a PerlScript:";
 choices[76]= new Array();
 choices[76][0] = "No se permite su uso en el servidor";
 choices[76][1] = "Es un lenguaje orientado al entorno Microsoft";
 choices[76][2] = "Es un lenguaje de scripting";
 choices[76][3] = "Permite el uso de PERL en los scripts web del cliente";
 answers[76] = choices[76][0];
 units[76] = "114";
 comments[76] = "Id Pregunta: 9498. NULL";


//  Id pregunta: 9509 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  &iquest;Qu&eacute; son las Java EE Blueprints?";
 choices[77]= new Array();
 choices[77][0] = "Un conjunto de pr&aacute;cticas obligatorias al desarrollar en Java";
 choices[77][1] = "Un conjunto de buenas pr&aacute;cticas al desarrollar en Java";
 choices[77][2] = "Una API de desarrollo en Java";
 choices[77][3] = "Java EE Blueprints no existe";
 answers[77] = choices[77][1];
 units[77] = "116";
 comments[77] = "Id Pregunta: 9509. NULL";


//  Id pregunta: 9712 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  En el contexto de las redes de telecomunicaciones, SNMP";
 choices[78]= new Array();
 choices[78][0] = "es un protocolo de la capa de aplicaci&oacute;n que facilita el intercambio de informaci&oacute;n de administraci&oacute;n entre dispositivos de red.";
 choices[78][1] = "es el acr&oacute;nimo en ingl&eacute;s de Service Network Management Protocol.";
 choices[78][2] = "es un protocolo de la capa de transporte que facilita el intercambio de informaci&oacute;n de administraci&oacute;n entre dispositivos de red.";
 choices[78][3] = "son las siglas en ingl&eacute;s de Standard Network Management Protocol.";
 answers[78] = choices[78][0];
 units[78] = "106";
 comments[78] = "Id Pregunta: 9712. Examen TIC-A1 2013";


//  Id pregunta: 9795 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  Se&ntilde;ale de los siguientes el que NO es un lector de feeds RSS:";
 choices[79]= new Array();
 choices[79][0] = "Digg";
 choices[79][1] = "Feedly";
 choices[79][2] = "Mephisto";
 choices[79][3] = "Netvibes ";
 answers[79] = choices[79][2];
 units[79] = "120";
 comments[79] = "Id Pregunta: 9795. Examen TIC A2 2013";


//  Id pregunta: 10031 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  Indicar cu&aacute;l de las siguientes direcciones IP puede ser asignada a un host en la siguiente subred 135.26.41.80/28";
 choices[80]= new Array();
 choices[80][0] = "135.26.41.94";
 choices[80][1] = "135.26.41.95";
 choices[80][2] = "135.26.41.96 ";
 choices[80][3] = "135.26.41.97";
 answers[80] = choices[80][0];
 units[80] = "100";
 comments[80] = "Id Pregunta: 10031. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10033 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  De las siguientes cabeceras IPv6 (RFC 2460), &iquest;cu&aacute;l de las siguientes cabeceras NO es de extensi&oacute;n?";
 choices[81]= new Array();
 choices[81][0] = "Fragmentacion. ";
 choices[81][1] = "Opciones de salto a salto.";
 choices[81][2] = "Autenticaci&oacute;n. ";
 choices[81][3] = "L&iacute;mite de saltos.";
 answers[81] = choices[81][3];
 units[81] = "100";
 comments[81] = "Id Pregunta: 10033. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10047 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  Con respecto al campo Data Link Connection Identifier (DLCI) de Frame Relay se&ntilde;ale la respuesta correcta:";
 choices[82]= new Array();
 choices[82][0] = "Debe ser &uacute;nico en toda la red.";
 choices[82][1] = "Tiene una longitud total de 10 bits por defecto.";
 choices[82][2] = "Controla los mecanismos de notificaci&oacute;n de congesti&oacute;n.";
 choices[82][3] = "Los valores 0 a 128 del mismo est&aacute;n reservados para funciones especiales.";
 answers[82] = choices[82][1];
 units[82] = "109";
 comments[82] = "Id Pregunta: 10047. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10072 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  El VLR en una arquitectura de red m&oacute;vil, es una base de datos:";
 choices[83]= new Array();
 choices[83][0] = "Donde est&aacute;n inscritos todos los clientes de un operador, que se utiliza para la gesti&oacute;n de abonados m&oacute;viles.";
 choices[83][1] = "Asociada a un MSC, donde se almacena informaci&oacute;n din&aacute;mica sobre los usuarios transe&uacute;ntes en el &aacute;rea geogr&aacute;fica cubierta por la MSC.";
 choices[83][2] = "Donde se guardan las identidades IMSI de los clientes junto con la clave secreta de identificaci&oacute;n de cada usuario.";
 choices[83][3] = "Que contiene las identidades de los equipos m&oacute;viles, el IMEI que permite identificar de forma inequ&iacute;voca a un terminal a escala internacional.";
 answers[83] = choices[83][1];
 units[83] = "108";
 comments[83] = "Id Pregunta: 10072. TIC A2, libre, Examen 2013";


//  Id pregunta: 10121 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  En el encaminamiento por vector-distancia cada router:";
 choices[84]= new Array();
 choices[84][0] = "Env&iacute;a una tabla a sus routers vecinos con la distancia de &eacute;l a todos los destinos. ";
 choices[84][1] = "Env&iacute;a una tabla a todos los routers con la distancia de &eacute;l a todos los destinos.";
 choices[84][2] = "Env&iacute;a una tabla a sus routers vecinos con la distancia de &eacute;l a todos sus vecinos.";
 choices[84][3] = "Env&iacute;a una tabla a todos los routers con la distancia de &eacute;l a todos sus vecinos.";
 answers[84] = choices[84][0];
 units[84] = "102";
 comments[84] = "Id Pregunta: 10121. ";


//  Id pregunta: 10197 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Indique la afirmaci&oacute;n correcta con respecto a la tecnolog&iacute;a bluetooth 4.0";
 choices[85]= new Array();
 choices[85][0] = "Comercialmente se le ha dado el nombre de Zigbee";
 choices[85][1] = "Supera en velocidad a la versi&oacute;n 2.0 de bluetooth";
 choices[85][2] = "Est&aacute; pensado para transmitir pocos paquetes usando poca energ&iacute;a";
 choices[85][3] = "El alcance supera los 100 metros";
 answers[85] = choices[85][2];
 units[85] = "107";
 comments[85] = "Id Pregunta: 10197. NULL";


//  Id pregunta: 10323 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  No es una ventaja de la capa de aplicaci&oacute;n";
 choices[86]= new Array();
 choices[86][0] = "Compartici&oacute;n de objetos";
 choices[86][1] = "Independencia de la arquitectura de almacenamiento";
 choices[86][2] = "Redistribuci&oacute;n autom&aacute;tica de versiones firmadas";
 choices[86][3] = "Escalabilidad horizontal";
 answers[86] = choices[86][2];
 units[86] = "114";
 comments[86] = "Id Pregunta: 10323. ";


//  Id pregunta: 10490 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  Seg&uacute;n la Ley 9/2014, que tipo de infracci&oacute;n es: La realizaci&oacute;n de actividades sin disponer de la habilitaci&oacute;n oportuna en las materias reguladas por esta Ley, cuando legalmente sea necesaria.";
 choices[87]= new Array();
 choices[87][0] = "Muy Grave";
 choices[87][1] = "Grave";
 choices[87][2] = "Leve";
 choices[87][3] = "No es Infraccion";
 answers[87] = choices[87][0];
 units[87] = "110";
 comments[87] = "Id Pregunta: 10490. Art 76.1 de la Ley 9/2014";


//  Id pregunta: 10523 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  A cu&aacute;l de los siguientes organismos corresponde la gesti&oacute;n del registro de los nombres y direcciones de dominio de internet bajo el c&oacute;digo de pa&iacute;s correspondiente a Espa&ntilde;a (.es):";
 choices[88]= new Array();
 choices[88][0] = "El Gobierno";
 choices[88][1] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia";
 choices[88][2] = "Red.es";
 choices[88][3] = "El Consejo Asesor de las Telecomunicaciones y de la Sociedad de la Informaci&oacute;n";
 answers[88] = choices[88][2];
 units[88] = "110";
 comments[88] = "Id Pregunta: 10523. ";


//  Id pregunta: 10541 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  &iquest;Qu&eacute; cabeceras del datagrama IP son revisadas por los routers intermedios en IPv6?";
 choices[89]= new Array();
 choices[89][0] = "todas las cabeceras";
 choices[89][1] = "ninguna";
 choices[89][2] = "todas las cabeceras menos las opcionales";
 choices[89][3] = "la cabecera hop-to-hop y el resto de cabeceras menos las cabeceras opcionales";
 answers[89] = choices[89][3];
 units[89] = "100";
 comments[89] = "Id Pregunta: 10541. NULL";


//  Id pregunta: 10968 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  Una de las siguientes opciones incluye tres herramientas de creaci&oacute;n de blogs. Se&ntilde;ale la respuesta correcta:";
 choices[90]= new Array();
 choices[90][0] = "Blogger, Tumblr y Pocket.";
 choices[90][1] = "Wordpress, Blogger y Pocket.";
 choices[90][2] = "Wordpress, Tumblr y Blogger.";
 choices[90][3] = "Blogger, Path y Wordpress.";
 answers[90] = choices[90][2];
 units[90] = "120";
 comments[90] = "Id Pregunta: 10968. TIC A1 AGE 2014";


//  Id pregunta: 11180 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas se a&ntilde;ade en la Versi&oacute;n 3 del protocolo SNMP?";
 choices[91]= new Array();
 choices[91][0] = "Permite a los agentes informar de forma espontanea al gestor de un evento";
 choices[91][1] = "Enviar mensajes no solicitados al gestor";
 choices[91][2] = "Mecanismos de autentificaci&oacute;n, privacidad y control de accesos verdaderamente s&oacute;lidos.";
 choices[91][3] = "Permite que el agente informe espont&aacute;neamente de excepciones y errores en el protocolo";
 answers[91] = choices[91][2];
 units[91] = "104";
 comments[91] = "Id Pregunta: 11180. ";


//  Id pregunta: 11454 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Seg&uacute;n la Ley 9/2014, cu&aacute;les de las siguientes son facultades del Gobierno para la administraci&oacute;n del espectro:";
 choices[92]= new Array();
 choices[92][0] = "El procedimiento para la determinaci&oacute;n, control e inspecci&oacute;n de los niveles &uacute;nicos de emisi&oacute;n radioel&eacute;ctrica tolerable.";
 choices[92][1] = "El procedimiento para la reasignaci&oacute;n del uso de bandas de frecuencias para alcanzar un uso m&aacute;s eficiente del espectro radioel&eacute;ctrico.";
 choices[92][2] = "El uso del espectro radioel&eacute;ctrico para controlar el uso de los operadores.";
 choices[92][3] = "a y b son correctas.";
 answers[92] = choices[92][3];
 units[92] = "110";
 comments[92] = "Id Pregunta: 11454. ";


//  Id pregunta: 11477 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Seg&uacute;n la ley 9/2014, un abonado puede cambiar de operador, conservando su n&uacute;mero, y tiene derecho a que el cambio se haga:";
 choices[93]= new Array();
 choices[93][0] = "En un d&iacute;a laborable.";
 choices[93][1] = "Conservando su n&uacute;mero, se puede tardar m&aacute;s de un d&iacute;a laborable sin recibir compensaci&oacute;n.";
 choices[93][2] = "Un operador puede transferir el usuario a otro operador, incluso en contra de la voluntad del abonado.";
 choices[93][3] = "Ninguna es correcta.";
 answers[93] = choices[93][0];
 units[93] = "110";
 comments[93] = "Id Pregunta: 11477. ";


//  Id pregunta: 11568 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Protocolo que permite el aprendizaje de redes y evita que se produzcan bucles a nivel de enlace.";
 choices[94]= new Array();
 choices[94][0] = "802.1D";
 choices[94][1] = "802.Q";
 choices[94][2] = "Spanning Tree Algorithm";
 choices[94][3] = "Algotirmo de Dijkstra";
 answers[94] = choices[94][0];
 units[94] = "102";
 comments[94] = "Id Pregunta: 11568. Como pregunta por protocolo es la a), y no el algoritmo c) que utiliza dicho protocolo.";


//  Id pregunta: 11674 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Son plataformas para almacenar y compartir fotos:";
 choices[95]= new Array();
 choices[95][0] = "Flickr, Backpackit y Picasa";
 choices[95][1] = "Photobucket, Picasa y ThisLife";
 choices[95][2] = "ThisLife, Drupal y Flickr";
 choices[95][3] = "Photobucket, Backpackit y Feedreader";
 answers[95] = choices[95][1];
 units[95] = "120";
 comments[95] = "Id Pregunta: 11674. ";


//  Id pregunta: 11684 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Cuando un switch recibe una trama y no posee la direcci&oacute;n de destino, el switch:";
 choices[96]= new Array();
 choices[96][0] = "env&iacute;a la trama por todos los puertos";
 choices[96][1] = "env&iacute;a un ARP para obtener la direcci&oacute;n de destino de la trama";
 choices[96][2] = "reenv&iacute;a la trama por todos los puertos, excepto por el que fue recibido";
 choices[96][3] = "descarta la trama";
 answers[96] = choices[96][2];
 units[96] = "100";
 comments[96] = "Id Pregunta: 11684. NULL";


//  Id pregunta: 11712 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Cu&aacute;l de los siguientes protocolos utiliza caracter&iacute;sticas tanto de los protocolos de vector distancia como de los de estado de enlace?";
 choices[97]= new Array();
 choices[97][0] = "OSPF";
 choices[97][1] = "RIP";
 choices[97][2] = "RIPv2";
 choices[97][3] = "EIGRP";
 answers[97] = choices[97][3];
 units[97] = "102";
 comments[97] = "Id Pregunta: 11712. NULL";


//  Id pregunta: 11725 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)   &iquest;Qu&eacute; protocolo soporta la transmisi&oacute;n de informaci&oacute;n en tiempo real?";
 choices[98]= new Array();
 choices[98][0] = "UDP";
 choices[98][1] = "RTP";
 choices[98][2] = "SMTP";
 choices[98][3] = "NTP";
 answers[98] = choices[98][1];
 units[98] = "100";
 comments[98] = "Id Pregunta: 11725. NULL";


//  Id pregunta: 11735 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Diferencia entre un virus y un &ldquo;Caballo de Troya&rdquo;:";
 choices[99]= new Array();
 choices[99][0] = "El virus suele utilizar canales encubiertos.";
 choices[99][1] = "El virus presenta un mecaniso de replicaci&oacute;n.";
 choices[99][2] = "El &ldquo;Caballo de Troya&rdquo; advierte de su presencia.";
 choices[99][3] = "El &ldquo;Caballo de Troya&rdquo; no esconde funciones potencialmente maliciosas.";
 answers[99] = choices[99][1];
 units[99] = "111";
 comments[99] = "Id Pregunta: 11735. ";


