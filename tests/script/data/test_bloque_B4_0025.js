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

//  Id pregunta: 2934 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  &iquest;Qu&eacute; protocolo de correo permite acceder al correo electr&oacute;nico, manteniendo los mensajes en el servidor, de forma que pueda accederse al correo desde distintos terminales?";
 choices[0]= new Array();
 choices[0][0] = "POP-3";
 choices[0][1] = "SMTP";
 choices[0][2] = "IMAP";
 choices[0][3] = "MIME";
 answers[0] = choices[0][2];
 units[0] = "106";
 comments[0] = "Id Pregunta: 2934. Similar a examen TIC MAP A 2004";


//  Id pregunta: 2978 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  &iquest;Cu&aacute;s de los siguientes estandares de redes de &aacute;rea local se caracterizan por ir sobre 2 pares trenzados apantallados";
 choices[1]= new Array();
 choices[1][0] = "1000BaseLX";
 choices[1][1] = "1000BaseSX";
 choices[1][2] = "1000BaseCX";
 choices[1][3] = "1000BaseT";
 answers[1] = choices[1][2];
 units[1] = "101";
 comments[1] = "Id Pregunta: 2978. Examen Julio 2003";


//  Id pregunta: 2983 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  En la redes de ordenadores, en la topolog&iacute;a en estrella:";
 choices[2]= new Array();
 choices[2][0] = "Un ordenador se conecta al siguiente y el &uacute;ltimo al primero, formando un circulo cerrado";
 choices[2][1] = "Existe un nodo raiz del que cuelgan uno o varios nodos";
 choices[2][2] = "Existe un nodo central o hub al que se conectan todos los ordenadores";
 choices[2][3] = "Cada uno de los nodos est&aacute; conectado con todos los demas";
 answers[2] = choices[2][2];
 units[2] = "101";
 comments[2] = "Id Pregunta: 2983. NULL";


//  Id pregunta: 3036 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;Cu&aacute;l de los siguientes ataques afecta a la disponibilidad de la informaci&oacute;n?:";
 choices[3]= new Array();
 choices[3][0] = "e-mail Spamming";
 choices[3][1] = "DoS (Denial of Service)";
 choices[3][2] = "DDoS (Distributed Denial of Service)";
 choices[3][3] = "Todos los anteriores";
 answers[3] = choices[3][3];
 units[3] = "111";
 comments[3] = "Id Pregunta: 3036. NULL";


//  Id pregunta: 3061 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  En ASP, &iquest;qu&eacute; objeto se utiliza para compartir informaci&oacute;n entre todos los usuarios de una aplicaci&oacute;n?:";
 choices[4]= new Array();
 choices[4][0] = "Application";
 choices[4][1] = "Request";
 choices[4][2] = "Server";
 choices[4][3] = "Session";
 answers[4] = choices[4][0];
 units[4] = "115";
 comments[4] = "Id Pregunta: 3061. ";


//  Id pregunta: 3098 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  Una transmisi&oacute;n as&iacute;ncrona se caracteriza porque:";
 choices[5]= new Array();
 choices[5][0] = "Los caracteres se reciben a un ritmo diferente del que se transmiten";
 choices[5][1] = "El terminal receptor funciona a velocidad diferente del emisor";
 choices[5][2] = "Cada car&aacute;cter incorpora su propio sincronismo";
 choices[5][3] = "Se utilizan caracteres de sincronizaci&oacute;n sin periodicidad fija";
 answers[5] = choices[5][2];
 units[5] = "100";
 comments[5] = "Id Pregunta: 3098. Cada caracter a ser transmitido es delimitado por un bit de informaci&oacute;n denominado de cabecera o de arranque, y uno o dos bits denominados de terminaci&oacute;n o de parada";


//  Id pregunta: 3118 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;A qu&eacute; se denomina Hub en una red local?:";
 choices[6]= new Array();
 choices[6][0] = "A un conector que sirve para unir cada ordenador con el cableado principal";
 choices[6][1] = "A un dispositivo que tiene como funci&oacute;n concentrar el cableado de la red";
 choices[6][2] = "A un dispositivo que tiene como funci&oacute;n convertir cableado en modo balanceado a modo no balanceado";
 choices[6][3] = "A un terminador que tiene como funci&oacute;n adaptar impedancias";
 answers[6] = choices[6][1];
 units[6] = "102";
 comments[6] = "Id Pregunta: 3118. ";


//  Id pregunta: 3147 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto a las distintas formas de codificaci&oacute;n?:";
 choices[7]= new Array();
 choices[7][0] = "La codificaci&oacute;n aritm&eacute;tica es m&aacute;s eficiente (en bits/s&iacute;mbolo) que la de Huffman";
 choices[7][1] = "La codificaci&oacute;n de Huffman utiliza los c&oacute;digos m&aacute;s largos para los s&iacute;mbolos m&aacute;s improbables";
 choices[7][2] = "La codificaci&oacute;n de Huffman codifica cada s&iacute;mbolo de forma independiente";
 choices[7][3] = "La codificaci&oacute;n de Huffman utiliza c&oacute;digos de longitud uniforme para representar los diferentes s&iacute;mbolos";
 answers[7] = choices[7][3];
 units[7] = "97";
 comments[7] = "Id Pregunta: 3147. NULL";


//  Id pregunta: 3167 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Cu&aacute;l de las siguientes direcciones IPv6 es correcta?";
 choices[8]= new Array();
 choices[8][0] = ":FF56::12::13D4";
 choices[8][1] = "15::78A1:9982";
 choices[8][2] = "AAB2:12::15H3:149";
 choices[8][3] = "1234:5678:9012:3456:7890:1234:5678";
 answers[8] = choices[8][1];
 units[8] = "99";
 comments[8] = "Id Pregunta: 3167. NULL";


//  Id pregunta: 3171 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l de las siguientes funciones corresponder&iacute;an al nivel de red en el Modelo de referencia OSI?:";
 choices[9]= new Array();
 choices[9][0] = "Compartici&oacute;n de circuito f&iacute;sico";
 choices[9][1] = "Establecimiento de varias comunicaciones simult&aacute;neas";
 choices[9][2] = "Cifrado de datos";
 choices[9][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[9] = choices[9][3];
 units[9] = "100";
 comments[9] = "Id Pregunta: 3171. NULL";


//  Id pregunta: 3201 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  El acceso primario de la Red Digital de Servicios Integrados (en las normas europeas) est&aacute; constituido por:";
 choices[10]= new Array();
 choices[10][0] = "Un enlace con 30 canales B y un canal D utilizando una velocidad de transmisi&oacute;n de 2048 Kbps";
 choices[10][1] = "Un enlace con 30 canales D y un canal B utilizando una velocidad de transmisi&oacute;n de 2048 Kbps";
 choices[10][2] = "Un enlace con 30 canales B y un canal D utilizando una velocidad de transmisi&oacute;n de 1984 Kbps";
 choices[10][3] = "Un enlace con 30 canales D y un canal B utilizando una velocidad de transmisi&oacute;n de 1984 Kbps";
 answers[10] = choices[10][0];
 units[10] = "103";
 comments[10] = "Id Pregunta: 3201. ";


//  Id pregunta: 3247 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Cu&aacute;l es la velocidad del canal D en un acceso b&aacute;sico RDSI en Europa?:";
 choices[11]= new Array();
 choices[11][0] = "8 Kbps";
 choices[11][1] = "16 Kbps";
 choices[11][2] = "32 Kbps";
 choices[11][3] = "64 Kbps";
 answers[11] = choices[11][1];
 units[11] = "103";
 comments[11] = "Id Pregunta: 3247. ";


//  Id pregunta: 3259 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  &iquest;Cu&aacute;ntos octetos usa la cabecera de la nueva versi&oacute;n de IP (Ipv6)?:";
 choices[12]= new Array();
 choices[12][0] = "32";
 choices[12][1] = "8";
 choices[12][2] = "12";
 choices[12][3] = "40";
 answers[12] = choices[12][3];
 units[12] = "100";
 comments[12] = "Id Pregunta: 3259. ";


//  Id pregunta: 3264 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  &iquest;En cu&aacute;l de los siguientes casos no recomendar&iacute;a utilizar una red VSAT?:";
 choices[13]= new Array();
 choices[13][0] = "En Redes de Area Extensa (WAN)";
 choices[13][1] = "En organizaci&oacute;n muy dispersa en la que s&oacute;lo es necesario realizar actualizaciones peri&oacute;dicas de informaci&oacute;n";
 choices[13][2] = "En entorno transaccional fuerte";
 choices[13][3] = "En organizaciones con oficinas en lugares remotos sin posibilidad de acceso al servicio telef&oacute;nico";
 answers[13] = choices[13][2];
 units[13] = "107";
 comments[13] = "Id Pregunta: 3264. VSAT presenta velocidades del orden de 56 a 64 Kbps, no recomendable para grandes vol&uacute;menes de transmisi&oacute;n de datos.";


//  Id pregunta: 3296 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  &iquest;Qu&eacute; mecanismo de acceso al medio utiliza una red Token Ring?:";
 choices[14]= new Array();
 choices[14][0] = "Interrogaci&oacute;n y respuesta (Polling Selecting)";
 choices[14][1] = "Paso de testigo";
 choices[14][2] = "CSMA/CD";
 choices[14][3] = "DQDB";
 answers[14] = choices[14][1];
 units[14] = "100";
 comments[14] = "Id Pregunta: 3296. NULL";


//  Id pregunta: 3325 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  A la fuente fundamental de datos de lo que ocurre en un servidor web se le denomina:";
 choices[15]= new Array();
 choices[15][0] = "registro de incidencias";
 choices[15][1] = "fichero de log";
 choices[15][2] = "lista de errores";
 choices[15][3] = "fichero de registros";
 answers[15] = choices[15][1];
 units[15] = "113";
 comments[15] = "Id Pregunta: 3325. ";


//  Id pregunta: 3334 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  BGP es un 'exterior gateway protocol'. &iquest;Qu&eacute; significa esto?:";
 choices[16]= new Array();
 choices[16][0] = "Usa algoritmos propietarios para calcular la ruta &oacute;ptima";
 choices[16][1] = "Es un protocolo que se utiliza para acceder dentro de Internet y ser reconocido por los firewalls";
 choices[16][2] = "Filtra el tr&aacute;fico de las fuentes exteriores antes de encaminarlo";
 choices[16][3] = "Encamina o enruta el tr&aacute;fico entre sistemas aut&oacute;nomos diferentes";
 answers[16] = choices[16][3];
 units[16] = "100";
 comments[16] = "Id Pregunta: 3334. NULL";


//  Id pregunta: 3339 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Comparando las tecnolog&iacute;as ATM y Frame Relay:";
 choices[17]= new Array();
 choices[17][0] = "En ATM la informaci&oacute;n est&aacute; estructurada en celdas de tama&ntilde;o fijo de 53 octetos, de forma distinta a Frame Relay";
 choices[17][1] = "En Frame Relay no hay informaci&oacute;n de control de flujo, pero en ATM s&iacute;";
 choices[17][2] = "En ATM no hay informaci&oacute;n de control de errores, pero en Frame Relay s&iacute;";
 choices[17][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[17] = choices[17][0];
 units[17] = "109";
 comments[17] = "Id Pregunta: 3339. ";


//  Id pregunta: 3368 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Dentro de los medios f&iacute;sicos de transmisi&oacute;n de informaci&oacute;n, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?:";
 choices[18]= new Array();
 choices[18][0] = "Con rayo laser se pueden obtener anchos de banda del orden de 1 Ghz";
 choices[18][1] = "La conducci&oacute;n en fibra &oacute;ptica se realiza cuando el &iacute;ndicede refracci&oacute;n del vidrio del n&uacute;cleo es ligeramente inferir al de la cubierta";
 choices[18][2] = "Una guiaonda es similar a un coaxial en cuanto a banda de frecuencias en que se utiliza";
 choices[18][3] = "Los radioenlaces de microondas pueden asimilarse a un cable coxial f&iacute;sico";
 answers[18] = choices[18][2];
 units[18] = "99";
 comments[18] = "Id Pregunta: 3368. ";


//  Id pregunta: 3389 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  El nivel 6 del modelo OSI es:";
 choices[19]= new Array();
 choices[19][0] = "Transporte";
 choices[19][1] = "Presentaci&oacute;n";
 choices[19][2] = "Sesi&oacute;n";
 choices[19][3] = "Aplicaci&oacute;n";
 answers[19] = choices[19][1];
 units[19] = "100";
 comments[19] = "Id Pregunta: 3389. NULL";


//  Id pregunta: 3395 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  El nivel fisico denominados 802.11a se conoce como:";
 choices[20]= new Array();
 choices[20][0] = "High Rate Sequence HR/DS PHY";
 choices[20][1] = "High Rate Sequence HR/DSSS PHY";
 choices[20][2] = "Orthogonal Frequency Division Multiplexing";
 choices[20][3] = "IR/PHY";
 answers[20] = choices[20][2];
 units[20] = "101,107";
 comments[20] = "Id Pregunta: 3395. ";


//  Id pregunta: 3398 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  El n&uacute;mero m&aacute;ximo que se puede conectar al bus pasivo de usuario en una instalaci&oacute;n b&aacute;sica RDSI es de:";
 choices[21]= new Array();
 choices[21][0] = "2";
 choices[21][1] = "4";
 choices[21][2] = "8";
 choices[21][3] = "16";
 answers[21] = choices[21][2];
 units[21] = "103";
 comments[21] = "Id Pregunta: 3398. ";


//  Id pregunta: 3405 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Es falso que las &quot;Etiquetas RF/ID&quot;:";
 choices[22]= new Array();
 choices[22][0] = "Permiten s&oacute;lo lectura a una distancia de 1 metro. La escritura se debe hacer con contacto.";
 choices[22][1] = "Las etiquetas RF/ID pueden contener hasta 64 bytes";
 choices[22][2] = "Son etiquetas con una espiral en su interior de 5 x 5 cm";
 choices[22][3] = "Su principal aplicaci&oacute;n es inventario o seguridad";
 answers[22] = choices[22][0];
 units[22] = "107";
 comments[22] = "Id Pregunta: 3405. *: RF/ID";


//  Id pregunta: 3450 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  El protocolo FTP (File Transfer Protocol) utiliza canales diferentes para comandos y para datos:";
 choices[23]= new Array();
 choices[23][0] = "Un servidor FTP en modo activo emplea el puerto 21 para enviar datos al cliente";
 choices[23][1] = "Un servidor FTP emplea el puerto 21 para comandos, ya sea en modo activo o pasivo";
 choices[23][2] = "Un servidor FTP en modo pasivo emplea el puerto 21 para enviar datos al cliente";
 choices[23][3] = "Un servidor FTP emplea el puerto 20 para comandos, ya sea en modo activo o pasivo";
 answers[23] = choices[23][1];
 units[23] = "112";
 comments[23] = "Id Pregunta: 3450. ";


//  Id pregunta: 3454 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  El protocolo IP se dise&ntilde;&oacute; en la RFC:";
 choices[24]= new Array();
 choices[24][0] = "793";
 choices[24][1] = "791";
 choices[24][2] = "768";
 choices[24][3] = "821";
 answers[24] = choices[24][1];
 units[24] = "100";
 comments[24] = "Id Pregunta: 3454. NULL";


//  Id pregunta: 3456 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  El protocolo que facilita un mecanismo para asignar din&aacute;micamente las direcciones IP, en el que las direcciones pueden ser rechazadas por los clientes, es:";
 choices[25]= new Array();
 choices[25][0] = "ARP";
 choices[25][1] = "RARP";
 choices[25][2] = "RIP";
 choices[25][3] = "DHCP";
 answers[25] = choices[25][3];
 units[25] = "100";
 comments[25] = "Id Pregunta: 3456. NULL";


//  Id pregunta: 3466 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  El puerto com&uacute;nmente utilizado para aplicaciones de correo electr&oacute;nico es (SMTP) el:";
 choices[26]= new Array();
 choices[26][0] = "80";
 choices[26][1] = "25";
 choices[26][2] = "53";
 choices[26][3] = "21";
 answers[26] = choices[26][1];
 units[26] = "106";
 comments[26] = "Id Pregunta: 3466. ";


//  Id pregunta: 3482 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  El tr&aacute;fico perdido en un periodo de tiempo T :";
 choices[27]= new Array();
 choices[27][0] = "Se puede medir como el numero de llamadas perdidas Cl por la duraci&oacute;n media de las llamadas durante un tiempo T";
 choices[27][1] = "No tiene sentido pr&aacute;ctico porque no se pueden conocer realmente el n&uacute;mero de llamadas perdidas";
 choices[27][2] = "No puede medirse, s&oacute;lo puede medirse el n&uacute;mero de llamadas perdidas y nunca el tr&aacute;fico perdido";
 choices[27][3] = "Ninguna de las anteriores es v&aacute;lida";
 answers[27] = choices[27][2];
 units[27] = "99";
 comments[27] = "Id Pregunta: 3482. NULL";


//  Id pregunta: 3484 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  El uso de la red de energ&iacute;a el&eacute;ctrica como una red de transmisi&oacute;n telem&aacute;tica de voz y datos es la tecnolog&iacute;a:";
 choices[28]= new Array();
 choices[28][0] = "LCC";
 choices[28][1] = "PCC";
 choices[28][2] = "LLC";
 choices[28][3] = "PLC";
 answers[28] = choices[28][3];
 units[28] = "107";
 comments[28] = "Id Pregunta: 3484. NULL";


//  Id pregunta: 3505 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  En el modelo OSI un encaminador o router:";
 choices[29]= new Array();
 choices[29][0] = "Trabaja en el nivel 4";
 choices[29][1] = "Trabaja en el nivel 7";
 choices[29][2] = "Trabaja en el nivel 3";
 choices[29][3] = "Trabaja en el nivel 5";
 answers[29] = choices[29][2];
 units[29] = "102";
 comments[29] = "Id Pregunta: 3505. ";


//  Id pregunta: 3540 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  En los m&oacute;dems en banda base:";
 choices[30]= new Array();
 choices[30][0] = "No se realiza modulaci&oacute;n ni demodulaci&oacute;n.";
 choices[30][1] = "Emplean modulaci&oacute;n de amplitud con banda lateral &uacute;nica.";
 choices[30][2] = "Emplean modulaci&oacute;n QAM (modulaci&oacute;n en amplitud de cuadratura).";
 choices[30][3] = "Usan modulaci&oacute;n PSK y ASK combinadas.";
 answers[30] = choices[30][0];
 units[30] = "101";
 comments[30] = "Id Pregunta: 3540. modems";


//  Id pregunta: 3553 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  En sistemas de informaci&oacute;n y comunicaciones, MAP es el acr&oacute;nimo de:";
 choices[31]= new Array();
 choices[31][0] = "Multimedia application Protocol";
 choices[31][1] = "Mediagateway Advanced Protocol";
 choices[31][2] = "Medium Access Protocol";
 choices[31][3] = "Mobile Application Part";
 answers[31] = choices[31][3];
 units[31] = "108";
 comments[31] = "Id Pregunta: 3553. ";


//  Id pregunta: 3599 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  La direcci&oacute;n loopback en IPv6 es:";
 choices[32]= new Array();
 choices[32][0] = "0:0:0:0:0:0:0:1";
 choices[32][1] = "0:0:0:0:0:0:0:0";
 choices[32][2] = "FFFF:FFFF:FFFF:FFFF:FFFF:FFFF:FFFF:FFFF:";
 choices[32][3] = "F:F:F:F:F:F:F:F";
 answers[32] = choices[32][0];
 units[32] = "100";
 comments[32] = "Id Pregunta: 3599. NULL";


//  Id pregunta: 3656 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  Un applet de Java es:";
 choices[33]= new Array();
 choices[33][0] = "Un int&eacute;rprete del lenguaje Java";
 choices[33][1] = "Una rutina Java que se ejecuta en el servidor recibiendo datos del browser o navegador";
 choices[33][2] = "Un programa Java, generalmente referenciado en una p&aacute;gina HTML, que se ejecuta en el cliente";
 choices[33][3] = "Un programa Java que accede a una base de datos relacional";
 answers[33] = choices[33][2];
 units[33] = "60";
 comments[33] = "Id Pregunta: 3656. NULL";


//  Id pregunta: 3662 AÃ±o de creación de pregunta: 2002-01-01
 questions[34]= "35)  Un protocolo, seg&uacute;n el modelo OSI:";
 choices[34]= new Array();
 choices[34][0] = "especifica reglas sint&aacute;cticas, sem&aacute;nticas y gram&aacute;ticas que determinan la comunicaci&oacute;n entre entidades del mismo nivel";
 choices[34][1] = "especifica reglas sint&aacute;cticas, sem&aacute;nticas y gram&aacute;ticas que determinan la comunicaci&oacute;n entre entidades de distinto nivel";
 choices[34][2] = "no especifica reglas de comportamiento, s&oacute;lo de sintaxis entre los mensajes intercambiados";
 choices[34][3] = "es especificado en un lenguaje de prop&oacute;sito general, por lo general dependiente de la m&aacute;quina en la que se ejecute dicho protocolo";
 answers[34] = choices[34][0];
 units[34] = "100";
 comments[34] = "Id Pregunta: 3662. NULL";


//  Id pregunta: 3720 AÃ±o de creación de pregunta: 2002-01-01
 questions[35]= "36)  Los conmutadores o switches LAN construyen una tabla de conmutaci&oacute;n que consiste en:";
 choices[35]= new Array();
 choices[35][0] = "Direcciones MAC y su interfaz de salida asociada";
 choices[35][1] = "Direcciones MAC y el n&uacute;mero de hops (elementos atravesados) hasta su destino";
 choices[35][2] = "Direcciones de red y su interfaz de salida apropiada";
 choices[35][3] = "Direcciones de red  y el n&uacute;mero de hops (elementos atravesados) hasta su destino";
 answers[35] = choices[35][0];
 units[35] = "102";
 comments[35] = "Id Pregunta: 3720. ";


//  Id pregunta: 3735 AÃ±o de creación de pregunta: 2002-01-01
 questions[36]= "37)  Los problemas principales de IPv4 que hacen necesario IPv6 son:";
 choices[36]= new Array();
 choices[36][0] = "los relativos a la escasez de direcciones";
 choices[36][1] = "los relativos al tama&ntilde;o de las tablas de encaminamiento";
 choices[36][2] = "los relativos a la calidad de servicio";
 choices[36][3] = "todos los anteriores";
 answers[36] = choices[36][3];
 units[36] = "100";
 comments[36] = "Id Pregunta: 3735. NULL";


//  Id pregunta: 3791 AÃ±o de creación de pregunta: 2002-01-01
 questions[37]= "38)  Respecto a los dispositivos de interconexi&oacute;n de redes locales, es falso que:";
 choices[37]= new Array();
 choices[37][0] = "El repetidor compatibiliza 2 medios de transmisi&oacute;n a nivel f&iacute;sico";
 choices[37][1] = "Los puentes operan a nivel de enlace, subnivel LLC para un mismo nivel MAC";
 choices[37][2] = "Los enrutadores conectan LANs con LANs, MANs o WANs";
 choices[37][3] = "Las pasarelas trabajan a nivel de red o superior";
 answers[37] = choices[37][1];
 units[37] = "102";
 comments[37] = "Id Pregunta: 3791. ";


//  Id pregunta: 3793 AÃ±o de creación de pregunta: 2002-01-01
 questions[38]= "39)  Respecto a los enrutadores, encaminadores o 'routers' se puede afirmar que:";
 choices[38]= new Array();
 choices[38][0] = "En la red de &aacute;rea local, son imprescindibles entre los ordenadores personales y su servidor";
 choices[38][1] = "Facilitan la uni&oacute;n a nivel f&iacute;sico entre dos redes distintas 10baseT y SNA";
 choices[38][2] = "Unen dos redes locales a nivel de red , ya que se suele decir que son equipos h&iacute;bridos";
 choices[38][3] = "Unen las redes WAN o MAN que tienen igual subnivel de control LLC";
 answers[38] = choices[38][2];
 units[38] = "102";
 comments[38] = "Id Pregunta: 3793. ";


//  Id pregunta: 3858 AÃ±o de creación de pregunta: 2003-01-01
 questions[39]= "40)  El modo de transferencia as&iacute;ncrono (ATM), utiliza:";
 choices[39]= new Array();
 choices[39][0] = "Celdas de tama&ntilde;o variable con una cabecera fija de 5 octetos y un campo de informaci&oacute;n variable de hasta 64 octetos.";
 choices[39][1] = "Celdas de tama&ntilde;o variable con una cabecera fija de 8 octetos, y un campo de informaci&oacute;n variable de hasta 48 octetos.";
 choices[39][2] = "Celdas de tama&ntilde;o fijo con una cabecera fija de 5 octetos y un campo de informaci&oacute;n fijo de 48 octetos.";
 choices[39][3] = "Celdas de tama&ntilde;o variable con una cabecera fija de 8 octetos y un campo de informaci&oacute;n fijo de 64 octetos.";
 answers[39] = choices[39][2];
 units[39] = "109";
 comments[39] = "Id Pregunta: 3858. Junta Andaluc&iacute;a";


//  Id pregunta: 3865 AÃ±o de creación de pregunta: 2003-01-01
 questions[40]= "41)  &iquest;Qu&eacute; son los IDS?";
 choices[40]= new Array();
 choices[40][0] = "Sistemas que permiten a los hackers rastrear puertos";
 choices[40][1] = "Sistemas que permiten detectar actividad inadecuada, incorrecta o an&oacute;mala en un sistema";
 choices[40][2] = "Sistemas que simulan uno o m&aacute;s sistemas f&aacute;ciles de atacar con el fin de tentar a los intrusos";
 choices[40][3] = "Ninguno de los anteriores";
 answers[40] = choices[40][1];
 units[40] = "111";
 comments[40] = "Id Pregunta: 3865. NULL";


//  Id pregunta: 3872 AÃ±o de creación de pregunta: 2003-01-01
 questions[41]= "42)  &iquest;Cu&aacute;l de las siguientes series no es congruente?:";
 choices[41]= new Array();
 choices[41][0] = "http, https.";
 choices[41][1] = "smtp, pop-3, mime.";
 choices[41][2] = "xml, xsl, xjar.";
 choices[41][3] = "direcci&oacute;n IP, m&aacute;scara, dominio.";
 answers[41] = choices[41][2];
 units[41] = "106";
 comments[41] = "Id Pregunta: 3872. Junta Andaluc&iacute;a";


//  Id pregunta: 3960 AÃ±o de creación de pregunta: 2003-01-01
 questions[42]= "43)  La tecnolog&iacute;a GPRS est&aacute; definida para transmitir datos a una velocidad te&oacute;rica m&aacute;xima (troughput) de:";
 choices[42]= new Array();
 choices[42][0] = "171,2 Kbits/s";
 choices[42][1] = "115 Kbits/s";
 choices[42][2] = "21,4 Kbits/s";
 choices[42][3] = "15,6 Kbits/s";
 answers[42] = choices[42][0];
 units[42] = "108";
 comments[42] = "Id Pregunta: 3960. ";


//  Id pregunta: 3993 AÃ±o de creación de pregunta: 2006-01-01
 questions[43]= "44)  En el protocolo SNMPv2, un mensaje PDU GetRequest:";
 choices[43]= new Array();
 choices[43][0] = "Permite respuestas parciales al solicitar el valor de varios objetos.";
 choices[43][1] = "No permite respuestas parciales al solicitar el valor de varios objetos";
 choices[43][2] = "Es emitida por el agente al gestor.";
 choices[43][3] = "Es id&eacute;ntico al mensaje PDU GetBulkRequest.";
 answers[43] = choices[43][0];
 units[43] = "104";
 comments[43] = "Id Pregunta: 3993. ";


//  Id pregunta: 4027 AÃ±o de creación de pregunta: 2006-01-01
 questions[44]= "45)  &iquest;Qu&eacute; modulaci&oacute;n se usa en GSM?";
 choices[44]= new Array();
 choices[44][0] = "QPSK";
 choices[44][1] = "BPSK";
 choices[44][2] = "QAM";
 choices[44][3] = "GMSK";
 answers[44] = choices[44][3];
 units[44] = "108";
 comments[44] = "Id Pregunta: 4027. ";


//  Id pregunta: 4045 AÃ±o de creación de pregunta: 2006-01-01
 questions[45]= "46)  &iquest;Cu&aacute;l de las siguientes infracciones est&aacute; tipificada como muy grave seg&uacute;n la Ley 9/2014 de Telecomunicaciones?";
 choices[45]= new Array();
 choices[45][0] = "La emisi&oacute;n de se&ntilde;ales de identificaci&oacute;n falsas o enga&ntilde;osas";
 choices[45][1] = "La interceptaci&oacute;n, sin autorizaci&oacute;n, de telecomunicaciones no destinadas al p&uacute;blico en general, as&iacute; como la divulgaci&oacute;n del contenido.";
 choices[45][2] = "El establecimiento de comunicaciones con estaciones no autorizadas";
 choices[45][3] = "Carecer de los preceptivos cuadros de tarifas o de precios cuando su exhibici&oacute;n se exija por la normativa vigente";
 answers[45] = choices[45][1];
 units[45] = "110";
 comments[45] = "Id Pregunta: 4045. ";


//  Id pregunta: 4062 AÃ±o de creación de pregunta: 2006-01-01
 questions[46]= "47)  El protocolo de transporte TCP, est&aacute;ndar de internet, NO tiene entre sus caracter&iacute;sticas";
 choices[46]= new Array();
 choices[46][0] = "la entrega fiable de paquetes";
 choices[46][1] = "la detecci&oacute;n y el control de la congesti&oacute;n";
 choices[46][2] = "es orientado a conexi&oacute;n";
 choices[46][3] = "su RFC es 793";
 answers[46] = choices[46][1];
 units[46] = "112,100";
 comments[46] = "Id Pregunta: 4062. ";


//  Id pregunta: 4075 AÃ±o de creación de pregunta: 2006-01-01
 questions[47]= "48)  &iquest;Qu&eacute; beneficios puede tener la distribuci&oacute;n del software en varias maquinas ?";
 choices[47]= new Array();
 choices[47][0] = "Normalmente no presenta beneficios pero en algunas ocasiones es necesario";
 choices[47][1] = "Nunca tiene beneficios";
 choices[47][2] = "Es m&aacute;s optimo que los sistemas SMP";
 choices[47][3] = "Mayor disponibilidad";
 answers[47] = choices[47][3];
 units[47] = "113";
 comments[47] = "Id Pregunta: 4075. ";


//  Id pregunta: 4099 AÃ±o de creación de pregunta: 2006-01-01
 questions[48]= "49)  Un servlet de Java tiene como principales caracter&iacute;sticas (se&ntilde;ale la falsa)";
 choices[48]= new Array();
 choices[48][0] = "su instalaci&oacute;n, gesti&oacute;n y ejecuci&oacute;n se realiza en un componente denominado contenedor";
 choices[48][1] = "requieren escaso c&oacute;digo para conseguir un nivel aceptable de presentaci&oacute;n, por lo cual han desplazado en parte a los JSPs";
 choices[48][2] = "Heredan de la clase abstracta HttpServlet";
 choices[48][3] = "Son todas correctas";
 answers[48] = choices[48][1];
 units[48] = "116";
 comments[48] = "Id Pregunta: 4099. ";


//  Id pregunta: 4114 AÃ±o de creación de pregunta: 2006-01-01
 questions[49]= "50)  Sobre los buscadores en Internet se&ntilde;ale la respuesta correcta:";
 choices[49]= new Array();
 choices[49][0] = "Los buscadores de &iacute;ndices tem&aacute;ticos son sistemas de b&uacute;squeda que incorporan autom&aacute;ticamente p&aacute;ginas web clasificadas por temas.";
 choices[49][1] = "Los motores de b&uacute;squeda utilizan &ldquo;robots&rdquo; de b&uacute;squeda para incluir las p&aacute;ginas web.";
 choices[49][2] = "a) y b) son falsas";
 choices[49][3] = "a) y b) son verdaderas";
 answers[49] = choices[49][1];
 units[49] = "112";
 comments[49] = "Id Pregunta: 4114. ";


//  Id pregunta: 4128 AÃ±o de creación de pregunta: 2006-01-01
 questions[50]= "51)  Lenguaje utilizado para describir los servicios web ofrecidos a los usuarios";
 choices[50]= new Array();
 choices[50][0] = "XML";
 choices[50][1] = "Xerces";
 choices[50][2] = "UDDI";
 choices[50][3] = "WSDL";
 answers[50] = choices[50][3];
 units[50] = "112,51";
 comments[50] = "Id Pregunta: 4128. ";


//  Id pregunta: 4136 AÃ±o de creación de pregunta: 2006-01-01
 questions[51]= "52)  El mecanismo usado para garantizar que solo los usuarios autorizados pueden usar o copiar aplicaciones software espec&iacute;ficas se llama";
 choices[51]= new Array();
 choices[51][0] = "informe de an&aacute;lisis de programa autorizado";
 choices[51][1] = "clave";
 choices[51][2] = "acuerdo de nivel de servicio (SLA)";
 choices[51][3] = "dongle";
 answers[51] = choices[51][3];
 units[51] = "37";
 comments[51] = "Id Pregunta: 4136. ";


//  Id pregunta: 4169 AÃ±o de creación de pregunta: 2006-01-01
 questions[52]= "53)  La principal raz&oacute;n para el desarrollo de circuitos privados de televisi&oacute;n (CCTV) como parte del programa de seguridad f&iacute;sica es";
 choices[52]= new Array();
 choices[52][0] = "Obtener pruebas para el enjuiciamiento";
 choices[52][1] = "Detener a los culpables";
 choices[52][2] = "Evitar la actividad ilegal";
 choices[52][3] = "Aumentar la visibilidad del guarda";
 answers[52] = choices[52][3];
 units[52] = "105";
 comments[52] = "Id Pregunta: 4169. ";


//  Id pregunta: 4212 AÃ±o de creación de pregunta: 2006-01-01
 questions[53]= "54)  La direcci&oacute;n  de broadcast de una red de &aacute;rea local clase A, siendo uno de sus nodos la direcci&oacute;n IP 100.254.254.254 es";
 choices[53]= new Array();
 choices[53][0] = "100.255.255.255";
 choices[53][1] = "0.0.0.255";
 choices[53][2] = "100.0.0.0";
 choices[53][3] = "100.254.254.255";
 answers[53] = choices[53][0];
 units[53] = "100";
 comments[53] = "Id Pregunta: 4212. ";


//  Id pregunta: 4216 AÃ±o de creación de pregunta: 2006-01-01
 questions[54]= "55)  El entorno Microsoft, WebDAV";
 choices[54]= new Array();
 choices[54][0] = "Se basa en las llamadas a procedimientos remotos para la replicaci&oacute;n entre controladores de dominio";
 choices[54][1] = "Es un protocolo seguro de transferencia de archivos sobre Internet e intranets";
 choices[54][2] = "Es una interfaz ActiveX que permite la distribuci&oacute;n de aplicaciones en un entorno de red";
 choices[54][3] = "Aumenta la seguridad entre los controladores de dominio gracias a la utilizaci&oacute;n de Kerberos";
 answers[54] = choices[54][1];
 units[54] = "115";
 comments[54] = "Id Pregunta: 4216. ";


//  Id pregunta: 4352 AÃ±o de creación de pregunta: 2007-01-01
 questions[55]= "56)  El dispositivo necesario para tener acceso a Internet a trav&eacute;s de la red de cable-TV que ofrecen distintos operadores, se llama:";
 choices[55]= new Array();
 choices[55][0] = "CODEC.";
 choices[55][1] = "Router.";
 choices[55][2] = "MODEM cable.";
 choices[55][3] = "Splitter.";
 answers[55] = choices[55][2];
 units[55] = "105";
 comments[55] = "Id Pregunta: 4352. ";


//  Id pregunta: 4488 AÃ±o de creación de pregunta: 2007-01-01
 questions[56]= "57)  Indique cual de las siguientes afirmaciones es falsa:";
 choices[56]= new Array();
 choices[56][0] = "La tecnolog&iacute;a WiFi esta optimizada para usos en interiores y para rangos de cientos de metros, mientras que la tecnolog&iacute;a WIMAX esta optimizada para aplicaciones de exterior y para rangos de varios kil&oacute;metros.";
 choices[56][1] = "La tecnolog&iacute;a WiFi no requiere que exista l&iacute;nea de visi&oacute;n directa entre el terminal y el Punto de Acceso (AP), mientras que la tecnolog&iacute;a WIMAX requiere que exista una l&iacute;nea de visi&oacute;n directa entre la Estaci&oacute;n Base y la antena del terminal receptor";
 choices[56][2] = "La tecnolog&iacute;a WiFi es capaz de proporcionar capacidades brutas de hasta 54 Mbps en un canal de 20 MHz, mientras que WIMAX proporciona capacidades brutas de hasta 75 Mbps en un canal de 20 MHz.";
 choices[56][3] = "La tecnolog&iacute;a WiFi fue inicialmente dise&ntilde;ada para aplicaciones LAN inal&aacute;mbricas que soportaban decenas de usuarios con una suscripci&oacute;n por terminal, mientras que WIMAX puede soportar cientos de terminales con ilimitadas subscripciones por terminal.";
 answers[56] = choices[56][1];
 units[56] = "107";
 comments[56] = "Id Pregunta: 4488. NULL";


//  Id pregunta: 4586 AÃ±o de creación de pregunta: 2007-01-01
 questions[57]= "58)  Las siglas HSDPA corresponden a:";
 choices[57]= new Array();
 choices[57][0] = "High-Speed Dynamic Packet Access";
 choices[57][1] = "High-Speed Downlink Packet Access";
 choices[57][2] = "High-Speed Data Packet Access";
 choices[57][3] = "Ninguna de las anteriores";
 answers[57] = choices[57][1];
 units[57] = "108";
 comments[57] = "Id Pregunta: 4586. ";


//  Id pregunta: 4984 AÃ±o de creación de pregunta: 2003-01-01
 questions[58]= "59)  &iquest;Cu&aacute;l de las siguientes conductas se considera infracci&oacute;n muy grave, seg&uacute;n la Ley 9/2014, General de Telecomunicaciones?";
 choices[58]= new Array();
 choices[58][0] = "La producci&oacute;n deliberada de interferencias definidas como perjudiciales en la citada Ley.";
 choices[58][1] = "La emisi&oacute;n de se&ntilde;ales de identificaci&oacute;n falsas o enga&ntilde;osas.";
 choices[58][2] = "Carecer de los preceptivos cuadros de tarifas o de precios exigidos por la normativa vigente.";
 choices[58][3] = "El establecimiento de comunicaciones con estaciones no autorizadas.";
 answers[58] = choices[58][0];
 units[58] = "110";
 comments[58] = "Id Pregunta: 4984. Examen TIC B 2007";


//  Id pregunta: 5036 AÃ±o de creación de pregunta: 2003-01-01
 questions[59]= "60)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre el Protocolo SSL (&quot;Secure Socket Layer&quot;) es correcta?:";
 choices[59]= new Array();
 choices[59][0] = "S&oacute;lo proporciona servicios de seguridad para el protocolo HTTP (&quot;HyperText Transfer Protocol&quot;)";
 choices[59][1] = "Utiliza mecanismos de criptograf&iacute;a asim&eacute;trica para garantizar la confidencialidad de los datos a transmitir";
 choices[59][2] = "El protocolo se implementa entre los niveles de Transporte y de Red";
 choices[59][3] = "Los servicios de seguridad que proporciona son transparentes al usuario y a la aplicaci&oacute;n";
 answers[59] = choices[59][3];
 units[59] = "111";
 comments[59] = "Id Pregunta: 5036. Examen TIC A 2007";


//  Id pregunta: 5168 AÃ±o de creación de pregunta: 2003-01-01
 questions[60]= "61)  En una VPN (Virtual Private Network) de acceso remoto,";
 choices[60]= new Array();
 choices[60][0] = "Al tratarse de una red privada, no es necesario ning&uacute;n tipo de encapsulamiento de los paquetes de datos para protegerlos de posibles ataques.";
 choices[60][1] = "No es necesario verificar la identidad de los usuarios";
 choices[60][2] = "No permite cifrado de datos.";
 choices[60][3] = "Los paquetes de datos viajan por un tunel definido en la red p&uacute;blica";
 answers[60] = choices[60][3];
 units[60] = "111";
 comments[60] = "Id Pregunta: 5168. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5278 AÃ±o de creación de pregunta: 2003-01-01
 questions[61]= "62)  Indique cu&aacute;l de los siguientes formatos no se corresponde con un tipo de formato de imagen est&aacute;tica:";
 choices[61]= new Array();
 choices[61][0] = "PNG";
 choices[61][1] = "JPEG";
 choices[61][2] = "GIF";
 choices[61][3] = "MNG";
 answers[61] = choices[61][3];
 units[61] = "114";
 comments[61] = "Id Pregunta: 5278. ";


//  Id pregunta: 5666 AÃ±o de creación de pregunta: 2003-01-01
 questions[62]= "63)  La cl&aacute;usula 1 del Manual Europeo para las Compras P&uacute;blicas de Sistemas Abiertos (EPHOS 2) establece que:";
 choices[62]= new Array();
 choices[62][0] = "El cableado ser&aacute; conforme a EIA/TIA 568";
 choices[62][1] = "El cableado deber&aacute; estar de acuerdo con los requerimientos del Nivel F&iacute;sico especificado en IS 8802-3.";
 choices[62][2] = "El cableado ser&aacute; conforme a ISO/IEC DIS 11801";
 choices[62][3] = "El cableado deber&aacute; estar de acuerdo con los requerimientos del Nivel F&iacute;sico especificado en EN 50081-1";
 answers[62] = choices[62][2];
 units[62] = "99";
 comments[62] = "Id Pregunta: 5666. ";


//  Id pregunta: 5845 AÃ±o de creación de pregunta: 2009-01-01
 questions[63]= "64)  En referencia a los grupos de trabajo IEEE 802, indique cu&aacute;l de los siguientes grupos est&aacute; relacionado con las redes m&oacute;viles inal&aacute;mbricas de banda ancha (MBWA):";
 choices[63]= new Array();
 choices[63][0] = "802.3";
 choices[63][1] = "802.11";
 choices[63][2] = "802.15";
 choices[63][3] = "802.20";
 answers[63] = choices[63][3];
 units[63] = "101";
 comments[63] = "Id Pregunta: 5845. MAP 2008 A1";


//  Id pregunta: 5902 AÃ±o de creación de pregunta: 2009-01-01
 questions[64]= "65)  La tecnolog&iacute;a conocida como de Acceso M&uacute;ltiple por Divisi&oacute;n en c&oacute;digo de banda ancha (WCDMA), &iquest;a qu&eacute; est&aacute;ndar corresponde?";
 choices[64]= new Array();
 choices[64][0] = "GPRS";
 choices[64][1] = "UMTS";
 choices[64][2] = "GSM";
 choices[64][3] = "DECT";
 answers[64] = choices[64][1];
 units[64] = "108";
 comments[64] = "Id Pregunta: 5902. MAP 2008 A1";


//  Id pregunta: 6124 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  &iquest;Qu&eacute; son las t&eacute;cnicas esteganogr&aacute;ficas?";
 choices[65]= new Array();
 choices[65][0] = "Son t&eacute;cnicas de firma electr&oacute;nica, tipo XMLDSig.";
 choices[65][1] = "Son t&eacute;cnicas dirigidas a ayudar en las auditorias inform&aacute;ticas y en particular en la optimizaci&oacute;n de los sistemas de impresi&oacute;n.";
 choices[65][2] = "Son t&eacute;cnicas de dise&ntilde;o asistido por ordenador y enfocadas a la producci&oacute;n de material gr&aacute;fico.";
 choices[65][3] = "Son t&eacute;cnicas dirigidas al ocultamiento de mensajes u objetos dentro de otros";
 answers[65] = choices[65][3];
 units[65] = "86";
 comments[65] = "Id Pregunta: 6124. TIC A 2009";


//  Id pregunta: 6154 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  &iquest;Cu&aacute;ntas versiones de NFS hay actualmente en uso?";
 choices[66]= new Array();
 choices[66][0] = "Tres: NFSv2, NFSv3 y NFSv4.";
 choices[66][1] = "Dos: NFSv3 y NFSv4.";
 choices[66][2] = "Tres: NFSv3, NFSv4 y NFSv5.";
 choices[66][3] = "Tres: NFSv1, NFSv2 y NFSv3.";
 answers[66] = choices[66][0];
 units[66] = "112";
 comments[66] = "Id Pregunta: 6154. ";


//  Id pregunta: 6358 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  &iquest;A qui&eacute;n corresponde establecer las obligaciones espec&iacute;ficas para los mercados de referencia establecidas en el art&iacute;culo 13 de la Ley 9/2014?";
 choices[67]= new Array();
 choices[67][0] = "A la Secretaria de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n";
 choices[67][1] = "Al Gobierno";
 choices[67][2] = "A la Comisi&oacute;n Nacional de los Mercados y la Competencia";
 choices[67][3] = "Al Ministerio de Ciencia y Tecnolog&iacute;a";
 answers[67] = choices[67][2];
 units[67] = "110";
 comments[67] = "Id Pregunta: 6358. Art&iacute;culo 13.4 Ley 9/2014";


//  Id pregunta: 7246 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)  &iquest;Qu&eacute; valor tiene el primer n&uacute;mero de una red de clase C en internet?";
 choices[68]= new Array();
 choices[68][0] = "Menor o igual que 127";
 choices[68][1] = "Entre 192 y 223";
 choices[68][2] = "Mayor o igual que 224";
 choices[68][3] = "Entre 128 y 191";
 answers[68] = choices[68][1];
 units[68] = "100";
 comments[68] = "Id Pregunta: 7246. Examen TIC B 2009";


//  Id pregunta: 7280 AÃ±o de creación de pregunta: 2010-01-01
 questions[69]= "70)  En un entorno de virtualizaci&oacute;n de m&aacute;quinas, &iquest;cu&aacute;l de los siguientes elementos est&aacute; m&aacute;s pr&oacute;ximo al hardware?";
 choices[69]= new Array();
 choices[69][0] = "Hipervisor";
 choices[69][1] = "VMM (Virtual Machine Monitor)";
 choices[69][2] = "Sistema operativo hospedado";
 choices[69][3] = "HBA (host Bus Adapter)";
 answers[69] = choices[69][0];
 units[69] = "119";
 comments[69] = "Id Pregunta: 7280. Examen TIC B 2009";


//  Id pregunta: 8278 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  &iquest;Cu&aacute;l de los siguientes algoritmos de encaminamiento est&aacute; basado en el estado del enlace?:";
 choices[70]= new Array();
 choices[70][0] = "RIP versi&oacute;n 1.";
 choices[70][1] = "OSPF.";
 choices[70][2] = "BGP.";
 choices[70][3] = "RIP versi&oacute;n 2.";
 answers[70] = choices[70][1];
 units[70] = "102";
 comments[70] = "Id Pregunta: 8278. Examen TIC A1 2010";


//  Id pregunta: 8484 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  &iquest;Sobre qu&eacute; protocolo se encapsulan los paquetes DHCP?";
 choices[71]= new Array();
 choices[71][0] = "HTTP.";
 choices[71][1] = "UDP.";
 choices[71][2] = "TCP.";
 choices[71][3] = "IP.";
 answers[71] = choices[71][1];
 units[71] = "100";
 comments[71] = "Id Pregunta: 8484. Examen TIC A2 2010 interna";


//  Id pregunta: 8528 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  En IPSec, el modo de funcionamiento en el que s&oacute;lo los datos son cifrados o autenticados, y el enrutamiento permanece intacto por lo que asegura la comunicaci&oacute;n extremo a extremo, se denomina:";
 choices[72]= new Array();
 choices[72][0] = "Modo t&uacute;nel.";
 choices[72][1] = "Modo transporte.";
 choices[72][2] = "Modo encapsulado.";
 choices[72][3] = "Modo transparente.";
 answers[72] = choices[72][1];
 units[72] = "111";
 comments[72] = "Id Pregunta: 8528. Examen TIC A2 2010 interna";


//  Id pregunta: 8888 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  &iquest;C&oacute;mo se llama la PDU de nivel 3?";
 choices[73]= new Array();
 choices[73][0] = "Paquete";
 choices[73][1] = "SPDU";
 choices[73][2] = "Trama";
 choices[73][3] = "TPDU";
 answers[73] = choices[73][0];
 units[73] = "100";
 comments[73] = "Id Pregunta: 8888. NULL";


//  Id pregunta: 9012 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  Las p&eacute;rdidas debidas a absorci&oacute;n por gases atmosf&eacute;ricos deben tenerse en cuenta en:";
 choices[74]= new Array();
 choices[74][0] = "Radioenlaces de frecuencias superiores a 30 GHz.";
 choices[74][1] = "Radioenlaces de frecuencias superiores a 3 GHz.";
 choices[74][2] = "Radioenlaces de frecuencias superiores a 300 MHz.";
 choices[74][3] = "Radioenlaces de frecuencias superiores a 300 kHz";
 answers[74] = choices[74][1];
 units[74] = "108";
 comments[74] = "Id Pregunta: 9012. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9030 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  &iquest;Cu&aacute;l de los siguientes no es un mapeador objeto-relacional?";
 choices[75]= new Array();
 choices[75][0] = "Postgress";
 choices[75][1] = "Hibernate";
 choices[75][2] = "TopLink";
 choices[75][3] = "Ibatis";
 answers[75] = choices[75][0];
 units[75] = "116";
 comments[75] = "Id Pregunta: 9030. ";


//  Id pregunta: 9060 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  Respecto a LMDS:";
 choices[76]= new Array();
 choices[76][0] = "Al ser de frecuencias bajas, no tiene problemas con las zonas de sombra.";
 choices[76][1] = "Son redes de lento despliegue";
 choices[76][2] = "Funciona en la banda de los 28 a 31 Ghz y una difusi&oacute;n m&aacute;xima de 7 km";
 choices[76][3] = "Se la conoce como proveedor de servicios sin cable";
 answers[76] = choices[76][2];
 units[76] = "108";
 comments[76] = "Id Pregunta: 9060. NULL";


//  Id pregunta: 9369 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  Ante situaciones de congesti&oacute;n, Resilient Packet Ring:";
 choices[77]= new Array();
 choices[77][0] = "Reacciona descartando paquetes.";
 choices[77][1] = "Utiliza el algoritmo Fairness, que sirve para los servicios de clase A1, B-CIR, B-EIR y C; y que limita el tr&aacute;fico en la red, asign&aacute;ndose diferentes rangos de velocidad a los clientes en base a la cantidad de ancho de banda disponible en el anillo y que se puede reutilizar de las diferentes clases.";
 choices[77][2] = "Utiliza el algoritmo Fairness, que sirve para todos los tipos de tr&aacute;fico y que limita el tr&aacute;fico en la red, asign&aacute;ndose diferentes rangos de velocidad a los clientes en base a la cantidad de ancho de banda disponible en el anillo.";
 choices[77][3] = "No tiene control de congesti&oacute;n.";
 answers[77] = choices[77][1];
 units[77] = "101";
 comments[77] = "Id Pregunta: 9369. ";


//  Id pregunta: 9513 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  Indique la afirmaci&oacute;n falsa en relaci&oacute;n a los servlets de Java:";
 choices[78]= new Array();
 choices[78][0] = "Se alojan en un contenedor web";
 choices[78][1] = "Es un elemento de la capa de presentaci&oacute;n";
 choices[78][2] = "Se pueden invocar desde una URL";
 choices[78][3] = "S&oacute;lo generan contenido est&aacute;tico";
 answers[78] = choices[78][3];
 units[78] = "116";
 comments[78] = "Id Pregunta: 9513. NULL";


//  Id pregunta: 9524 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  Se&ntilde;ale la afirmaci&oacute;n falsa con respecto al est&aacute;ndar H.323:";
 choices[79]= new Array();
 choices[79][0] = "Es un est&aacute;ndar para videoconferencia sobre redes IP";
 choices[79][1] = "El gatekeeper es un componente principal";
 choices[79][2] = "Utiliza el protocolo H.235 como seguridad (autenticaci&oacute;n, integridad, etc.)";
 choices[79][3] = "Es un est&aacute;ndar para videoconferencia sobre RDSI";
 answers[79] = choices[79][3];
 units[79] = "117";
 comments[79] = "Id Pregunta: 9524. NULL";


//  Id pregunta: 10034 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  El puerto 69 es utilizado por:";
 choices[80]= new Array();
 choices[80][0] = "TFTP (Trivial File Transfer Protocol).";
 choices[80][1] = "Finger.";
 choices[80][2] = "IMAP (Internet Message Access Protocol).";
 choices[80][3] = "SFTP (Secure File Transfer Protocol).";
 answers[80] = choices[80][0];
 units[80] = "100";
 comments[80] = "Id Pregunta: 10034. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10201 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  &iquest;Cual de las siguientes afirmaciones es correcta respecto a la tecnolog&iacute;a 4G de comunicaciones m&oacute;viles?";
 choices[81]= new Array();
 choices[81][0] = "Corresponde a la release 7 del 3GPP (3rd Generation Partnership Project)";
 choices[81][1] = "Usa una nueva interfaz aire basada en OFDMA (Orthogonal Frequency Division Multiple Access)";
 choices[81][2] = "Reutiliza los RNC (Radio Network Controller) de la red 3G incorporando las funciones de los nodos B";
 choices[81][3] = "El ancho de banda de los canales pasa de los 5 MHz de 3G a los 20MHz";
 answers[81] = choices[81][1];
 units[81] = "108";
 comments[81] = "Id Pregunta: 10201. Se trata de la release 8. Desaparece el RNC y sus funciones se incorporan al eNode B (Evolved Node B). El ancho de banda no es fijo sino variable entre 1,25MHz y 20MHz.";


//  Id pregunta: 10320 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  &iquest;Cu&aacute;l de los siguientes puertos utiliza el protocolo SNMP?";
 choices[82]= new Array();
 choices[82][0] = "110";
 choices[82][1] = "119";
 choices[82][2] = "161";
 choices[82][3] = "25";
 answers[82] = choices[82][2];
 units[82] = "104";
 comments[82] = "Id Pregunta: 10320. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10496 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  &iquest;Cual de las siguientes es una implementaci&oacute;n del protocolo LDAP?";
 choices[83]= new Array();
 choices[83][0] = "eDirectory";
 choices[83][1] = "iPlanet";
 choices[83][2] = "Active Directory";
 choices[83][3] = "Todos lo son";
 answers[83] = choices[83][3];
 units[83] = "74, 106";
 comments[83] = "Id Pregunta: 10496. eDirectory es la implementaci&oacute;n de Novell, e iPlanet la de Sun";


//  Id pregunta: 10505 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  &iquest;Cual de las siguientes normas se refiere a la Compatibilidad Electromagnetica?";
 choices[84]= new Array();
 choices[84][0] = "Real Decreto 158/2006";
 choices[84][1] = "Directiva 2004/108/CE";
 choices[84][2] = "Directiva 2006/123/CE";
 choices[84][3] = "Ninguna de las anteriores";
 answers[84] = choices[84][1];
 units[84] = "99";
 comments[84] = "Id Pregunta: 10505. El RD es el Real Decreto 1580/2006 y la directiva 2006/123 es la de servicios";


//  Id pregunta: 10511 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  &iquest;Qu&eacute; recomendaci&oacute;n define la Interfaz usuario-red de la red digital de servicios integrados de banda ancha?";
 choices[85]= new Array();
 choices[85][0] = "I.413";
 choices[85][1] = "I.411";
 choices[85][2] = "I.431";
 choices[85][3] = "I.314";
 answers[85] = choices[85][0];
 units[85] = "109";
 comments[85] = "Id Pregunta: 10511. NULL";


//  Id pregunta: 10524 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Qu&eacute; a&ntilde;o establece como objetivo la Estrategia Nacional de Redes Ultrarr&aacute;pidas para que al menos el 50% de los hogares puedan disponer de acceso a servicios de velocidades superiores a 100 Mbps.";
 choices[86]= new Array();
 choices[86][0] = "2016";
 choices[86][1] = "2017";
 choices[86][2] = "2018";
 choices[86][3] = "2020";
 answers[86] = choices[86][3];
 units[86] = "110";
 comments[86] = "Id Pregunta: 10524. ";


//  Id pregunta: 10902 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  La arquitectura de cortafuegos que combina un router con un host basti&oacute;n y donde el principal nivel de seguridad proviene del filtrado de paquetes se denomina:";
 choices[87]= new Array();
 choices[87][0] = "Screened Subnet.";
 choices[87][1] = "Dual-Homed Host.";
 choices[87][2] = "Router-Homed Host.";
 choices[87][3] = "Screened Host.";
 answers[87] = choices[87][3];
 units[87] = "111";
 comments[87] = "Id Pregunta: 10902. Examen GSI 2014";


//  Id pregunta: 10908 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  Seg&uacute;n la norma de la ITU-T asociada a la recomendaci&oacute;n G.726, de Modulaci&oacute;n por impulsos codificados diferencial adaptativa, indicar la respuesta correcta que se corresponde con su bit rate (kbit/s):";
 choices[88]= new Array();
 choices[88][0] = "16, 24, 32 &oacute; 40";
 choices[88][1] = "6, 12, 24 &oacute; 48";
 choices[88][2] = "4, 8, 16 &oacute; 40";
 choices[88][3] = "8, 16, 32 &oacute; 64";
 answers[88] = choices[88][0];
 units[88] = "117";
 comments[88] = "Id Pregunta: 10908. Examen GSI 2014";


//  Id pregunta: 10934 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  &iquest;Cu&aacute;l de estas afirmaciones NO corresponde al CCN-CERT?";
 choices[89]= new Array();
 choices[89][0] = "El CCN-CERT es la Capacidad de Respuesta a incidentes de Seguridad de la Informaci&oacute;n del Centro Criptol&oacute;gico Nacional.";
 choices[89][1] = "Los servicios del CCN-CERT est&aacute;n dirigidos exclusivamente a la Administraci&oacute;n General del Estado.";
 choices[89][2] = "CARMEN, LUCIA e IN&Eacute;S son herramientas desarrolladas por CCN-CERT.";
 choices[89][3] = "Las funciones del CCN-CERT quedan recogidas en el RD 3/2010, de 8 de enero, regulador del Esquema Nacional de Seguridad.";
 answers[89] = choices[89][1];
 units[89] = "111";
 comments[89] = "Id Pregunta: 10934. TIC A1 AGE 2014";


//  Id pregunta: 11232 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  SAAJ son las siglas de un API de Java que significa";
 choices[90]= new Array();
 choices[90][0] = "Service with Attachments API for Java.";
 choices[90][1] = "SOAP without Attachments API for Java.";
 choices[90][2] = "SOAP with Attachments API for Java.";
 choices[90][3] = "El acr&oacute;nimo est&aacute; invertido, realmente es Java Authentication and Authorization Service (JAAS).";
 answers[90] = choices[90][2];
 units[90] = "116";
 comments[90] = "Id Pregunta: 11232. ";


//  Id pregunta: 11422 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Seg&uacute;n la Ley 9/2014, se&ntilde;ale la respuesta correcta:";
 choices[91]= new Array();
 choices[91][0] = "El MINETUR fijar&aacute; las caracter&iacute;sticas y condiciones para la conservaci&oacute;n de n&uacute;meros";
 choices[91][1] = "Los planes nacionales designar&aacute;n los servicios de uso de los n&uacute;meros.";
 choices[91][2] = "La CNMC establece el uso de los recursos num&eacute;ricos.";
 choices[91][3] = "El MINETUR fijar&aacute; por Real Decreto los planes nacionales de numeraci&oacute;n y direccionamiento.";
 answers[91] = choices[91][1];
 units[91] = "110";
 comments[91] = "Id Pregunta: 11422. ";


//  Id pregunta: 11444 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Seg&uacute;n la Ley 9/2014, el otorgamiento de los derechos de uso de los recursos de numeraci&oacute;n, direccionamiento y denominaci&oacute;n corresponden a:";
 choices[92]= new Array();
 choices[92][0] = "MINETUR.";
 choices[92][1] = "CNMC.";
 choices[92][2] = "MINECO.";
 choices[92][3] = "ORECE.";
 answers[92] = choices[92][0];
 units[92] = "110";
 comments[92] = "Id Pregunta: 11444. ";


//  Id pregunta: 11447 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Seg&uacute;n la Ley 9/2014, el retraso en la conservaci&oacute;n de los n&uacute;meros por parte del operador, da derecho a los abonados a:";
 choices[93]= new Array();
 choices[93][0] = "Una compensaci&oacute;n.";
 choices[93][1] = "Nada.";
 choices[93][2] = "Alegar a recibir una segunda l&iacute;nea.";
 choices[93][3] = "Servicio gratuito durante los 3 primeros a&ntilde;os.";
 answers[93] = choices[93][0];
 units[93] = "110";
 comments[93] = "Id Pregunta: 11447. ";


//  Id pregunta: 11466 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Seg&uacute;n la Ley 9/2014, el usuario tiene derecho durante una llamada:";
 choices[94]= new Array();
 choices[94][0] = "A impedir la presentaci&oacute;n de la identificaci&oacute;n de su l&iacute;nea.";
 choices[94][1] = "A impedir la presentaci&oacute;n de la identificaci&oacute;n de la l&iacute;nea de origen.";
 choices[94][2] = "A ambas.";
 choices[94][3] = "A ninguna.";
 answers[94] = choices[94][2];
 units[94] = "110";
 comments[94] = "Id Pregunta: 11466. ";


//  Id pregunta: 11562 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Qu&eacute; es XFP?";
 choices[95]= new Array();
 choices[95][0] = "Puerto de conexi&oacute;n de alta velocidad con par trenzado.";
 choices[95][1] = "Puerto de conexi&oacute;n de alta velocidad de fibra &oacute;ptica.";
 choices[95][2] = "Puerto de conexi&oacute;n de alta velocidad de cable coaxial.";
 choices[95][3] = "Puerto de conexi&oacute;n de alta velocidad con capacidad para emplear distintos medios de transmisi&oacute;n.";
 answers[95] = choices[95][1];
 units[95] = "99";
 comments[95] = "Id Pregunta: 11562. NULL";


//  Id pregunta: 11665 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Las dimensiones can&oacute;nicas de la seguridad son:";
 choices[96]= new Array();
 choices[96][0] = "Disponibilidad, confidencialidad y trazabilidad";
 choices[96][1] = "Confidencialidad, autenticidad y disponibilidad";
 choices[96][2] = "Integridad, trazabilidad y autenticidad";
 choices[96][3] = "Confidencialidad, integridad y disponibilidad";
 answers[96] = choices[96][3];
 units[96] = "111";
 comments[96] = "Id Pregunta: 11665. ";


//  Id pregunta: 11683 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Cuando el servidor web envia una respuesta, seg&uacute;n el modelo OSI los datos primero se encapsulan en un";
 choices[97]= new Array();
 choices[97][0] = "Paquete";
 choices[97][1] = "Segmento";
 choices[97][2] = "Trama";
 choices[97][3] = "Frame";
 answers[97] = choices[97][1];
 units[97] = "100";
 comments[97] = "Id Pregunta: 11683. NULL";


//  Id pregunta: 11713 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Cu&aacute;l de los siguientes elementos es utilizado en las listas de acceso IP est&aacute;ndar como base para permitir o denegar paquetes?";
 choices[98]= new Array();
 choices[98][0] = "Direccion destino IP";
 choices[98][1] = "Direccion origen IP";
 choices[98][2] = "Protocolo";
 choices[98][3] = "Puerto";
 answers[98] = choices[98][1];
 units[98] = "102";
 comments[98] = "Id Pregunta: 11713. NULL";


//  Id pregunta: 11723 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Qu&eacute; mensaje DHCP se utiliza para localizar cualquier servidor DHCP disponible en la red?";
 choices[99]= new Array();
 choices[99][0] = "DHCPREQUEST";
 choices[99][1] = "DHCPACK";
 choices[99][2] = "DHCPDISCOVER";
 choices[99][3] = "DHCPOFFER";
 answers[99] = choices[99][2];
 units[99] = "102";
 comments[99] = "Id Pregunta: 11723. NULL";


