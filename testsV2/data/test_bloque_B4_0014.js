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

//  Id pregunta: 2891 AÃ±o de creación de pregunta: 2005-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de los siguientes servicios no ser&aacute; considerado un servicio b&aacute;sico a prestar dentro de la ed SARA (Intranet Administrativa)?:";
 choices[0]= new Array();
 choices[0][0] = "Servicio de DNS";
 choices[0][1] = "Servicio de Foros de discusi&oacute;n";
 choices[0][2] = "Servicio de Videoconferencia";
 choices[0][3] = "Servicio de Correo electr&oacute;nico";
 answers[0] = choices[0][2];
 units[0] = "113.44";
 comments[0] = "Id Pregunta: 2891. NULL";


//  Id pregunta: 2926 AÃ±o de creación de pregunta: 2009-01-01
 questions[1]= "2)  En GPRS la velocidad m&aacute;xima te&oacute;rica de conexi&oacute;n es:";
 choices[1]= new Array();
 choices[1][0] = "128 kbps";
 choices[1][1] = "171.2 kbps";
 choices[1][2] = "64.1 kbps";
 choices[1][3] = "56.6 kbps";
 answers[1] = choices[1][1];
 units[1] = "108";
 comments[1] = "Id Pregunta: 2926. Similar a examen TIC SS A 2003";


//  Id pregunta: 2971 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  Dada la m&aacute;scara de red 255.240.0.0, &iquest;Cu&aacute;nta subredes ser&iacute;a posible incluir dentro de una red tipo A?";
 choices[2]= new Array();
 choices[2][0] = "Ninguna";
 choices[2][1] = "16";
 choices[2][2] = "14";
 choices[2][3] = "8";
 answers[2] = choices[2][2];
 units[2] = "100";
 comments[2] = "Id Pregunta: 2971. Examen Julio 2003 Se aplica la formula  2^N -2 donde N es la cantidad de bits que tenemosque robarle a la porci&oacute;n de host asignada por defecto a una clase A";


//  Id pregunta: 3002 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  Dentro de la familia de protocolos TCP/IP hay algunos que se definen como no fiables en el sentido de que no aseguran la recepci&oacute;n final en el equipo destinatario de la informaci&oacute;n. De los siguientes indique cu&aacute;l es un protocolo fiable:";
 choices[3]= new Array();
 choices[3][0] = "IP";
 choices[3][1] = "UDP";
 choices[3][2] = "TCP";
 choices[3][3] = "FDDI";
 answers[3] = choices[3][2];
 units[3] = "100";
 comments[3] = "Id Pregunta: 3002. NULL";


//  Id pregunta: 3004 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  Una de las caracter&iacute;sticas b&aacute;sicas de ATM (Modelo de transferencia as&iacute;ncrono) es:";
 choices[4]= new Array();
 choices[4][0] = "Utiliza un formato de celda de longitud fija";
 choices[4][1] = "El tama&ntilde;o de la celda se negocia en el nivel de enlace";
 choices[4][2] = "El tama&ntilde;o de la celda se negocia a trav&eacute;s de red";
 choices[4][3] = "El tama&ntilde;o de la celda se negocia a trav&eacute;s de transorte";
 answers[4] = choices[4][0];
 units[4] = "109";
 comments[4] = "Id Pregunta: 3004. ";


//  Id pregunta: 3014 AÃ±o de creación de pregunta: 2004-01-01
 questions[5]= "6)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no se corresponden con las de FR?";
 choices[5]= new Array();
 choices[5][0] = "Orientado a conexi&oacute;n";
 choices[5][1] = "no fiable";
 choices[5][2] = "sin garant&iacute;as de caudal m&iacute;nimo";
 choices[5][3] = "ninguna de las anteriores";
 answers[5] = choices[5][2];
 units[5] = "109";
 comments[5] = "Id Pregunta: 3014. ";


//  Id pregunta: 3027 AÃ±o de creación de pregunta: 2004-01-01
 questions[6]= "7)  La tecnolog&iacute;a que se basa en el protocolo SWAP (shared wireless access protocol) y que tiene como objetivo la conectividad sin cables dentro del hogar se llama:";
 choices[6]= new Array();
 choices[6][0] = "Bluetooth";
 choices[6][1] = "HomeRF";
 choices[6][2] = "HiperLAN/2";
 choices[6][3] = "IrLMP";
 answers[6] = choices[6][1];
 units[6] = "107";
 comments[6] = "Id Pregunta: 3027. TAI 2004";


//  Id pregunta: 3102 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre SGBDDs no es correcta?:";
 choices[7]= new Array();
 choices[7][0] = "La indexaci&oacute;n por palabras es uno de los tipos fundamentales de algoritmos de indexaci&oacute;n";
 choices[7][1] = "La indexaci&oacute;n por campos es uno de los tipos fundamentales de algoritmos de indexaci&oacute;n";
 choices[7][2] = "Los procedimientos de b&uacute;squeda de los SGBDD se basan en la tecnolog&iacute;a de los ficheros inversos";
 choices[7][3] = "La indexaci&oacute;n por cadenas de palabras es uno de los tipos fundamentales de algoritmos de indexaci&oacute;n";
 answers[7] = choices[7][1];
 units[7] = "58";
 comments[7] = "Id Pregunta: 3102. ";


//  Id pregunta: 3111 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;A qu&eacute; nivel de OSI es equivalente el protocolo IP (Internet Protocol)?:";
 choices[8]= new Array();
 choices[8][0] = "Enlace";
 choices[8][1] = "Red";
 choices[8][2] = "Transporte";
 choices[8][3] = "Comunicaci&oacute;n";
 answers[8] = choices[8][1];
 units[8] = "100";
 comments[8] = "Id Pregunta: 3111. NULL";


//  Id pregunta: 3134 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l de estas afirmaciones no es cierta para un red de conmutaci&oacute;n de paquetes en modo circuito virtual?:";
 choices[9]= new Array();
 choices[9][0] = "La red se asegura de que el orden de entrega de los paquetes es correcto";
 choices[9][1] = "S&oacute;lo el paquete de llamada lleva en la cabecera informaci&oacute;n acerca del origen y el destino de la llamada";
 choices[9][2] = "El circuito l&oacute;gico establecido dura lo que dura la llamada";
 choices[9][3] = "Es necesario liberar el circuito virtual permanente para finalizar la llamada";
 answers[9] = choices[9][3];
 units[9] = "101";
 comments[9] = "Id Pregunta: 3134. ";


//  Id pregunta: 3138 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Cu&aacute;l de las siguentes es una de las ventajas de utilizar fibra &oacute;ptica, frente a la utilizaci&oacute;n de cable en una red de &aacute;rea local?:";
 choices[10]= new Array();
 choices[10][0] = "Dispositivos y adaptadores m&aacute;s baratos";
 choices[10][1] = "Menor n&uacute;mero de bytes necesarios para obtener el sincronismo";
 choices[10][2] = "Mayor confidencialidad de la informaci&oacute;n que circula";
 choices[10][3] = "Menor ancho de banda";
 answers[10] = choices[10][2];
 units[10] = "97";
 comments[10] = "Id Pregunta: 3138. NULL";


//  Id pregunta: 3141 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Cu&aacute;l de las siguientes afirmaciones corresponde a funciones o caracter&iacute;sticas de equipos repetidores?:";
 choices[11]= new Array();
 choices[11][0] = "Operan a nivel de LLC, pudiendo usarse para la interconexi&oacute;n de LANs heterog&eacute;neas de nivel 1 y 2 de OSI";
 choices[11][1] = "Operan a nivel 1 de OSI, pudiendo usarse para conectar diferentes tipos de medio f&iacute;sico";
 choices[11][2] = "Pueden analizar direcci&oacute;n de origen y destino, efectuando funciones de filtrado, pero sobre medios f&iacute;sicos homog&eacute;neos";
 choices[11][3] = "Permiten aislar los diferentes segmentos separando el tr&aacute;fico de cada uno";
 answers[11] = choices[11][1];
 units[11] = "101, 102";
 comments[11] = "Id Pregunta: 3141. ";


//  Id pregunta: 3143 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta respecto de la fibra &oacute;ptica?:";
 choices[12]= new Array();
 choices[12][0] = "La fibra &oacute;ptica monomodo permite mayor ancho de banda que la multimodo pero es m&aacute;s complicado de hacer el conexionado";
 choices[12][1] = "La fibra &oacute;ptica multimodo permite mayor ancho de banda que la monomodo pero es m&aacute;s complicado de hacer el conexionado";
 choices[12][2] = "La fibra &oacute;ptica monomodo permite menor ancho de banda que la multimodo";
 choices[12][3] = "Ninguna de las anteriores";
 answers[12] = choices[12][0];
 units[12] = "99";
 comments[12] = "Id Pregunta: 3143. NULL";


//  Id pregunta: 3204 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  La anchura est&aacute;ndar de un rack es:";
 choices[13]= new Array();
 choices[13][0] = "11 pulgadas";
 choices[13][1] = "25 pulgadas";
 choices[13][2] = "19 pulgadas";
 choices[13][3] = "15 pulgadas";
 answers[13] = choices[13][2];
 units[13] = "97";
 comments[13] = "Id Pregunta: 3204. NULL";


//  Id pregunta: 3357 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  De los protocolos para proporcionar seguridad en internet es cierto que:";
 choices[14]= new Array();
 choices[14][0] = "IPSec no es transparente a las aplicaciones";
 choices[14][1] = "PPP asegura s&oacute;lo un enlace, pero no la conexi&oacute;n completa";
 choices[14][2] = "WTLS es m&aacute;s complejo que TLS ya que se adapta al entorno inal&aacute;mbrico";
 choices[14][3] = "Los protocolos a nivel de aplicaci&oacute;n son comunes a grupos de aplicaciones seg&uacute;n su funcionalidad";
 answers[14] = choices[14][1];
 units[14] = "111";
 comments[14] = "Id Pregunta: 3357. NULL";


//  Id pregunta: 3377 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  El est&aacute;ndar X.25 usa, a nivel de enlace, el protocolo:";
 choices[15]= new Array();
 choices[15][0] = "SDLC";
 choices[15][1] = "LAP-B";
 choices[15][2] = "Ethernet";
 choices[15][3] = "SAP";
 answers[15] = choices[15][1];
 units[15] = "100, 101, 109";
 comments[15] = "Id Pregunta: 3377. ";


//  Id pregunta: 3397 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  El nivel f&iacute;sico incorpora un mecanismo de deteccion de canal libre que se denomina dentro de la especificaci&oacute;n 802.11:";
 choices[16]= new Array();
 choices[16][0] = "Carrier Detection";
 choices[16][1] = "Clear Channel Assessment";
 choices[16][2] = "Channel Check";
 choices[16][3] = "Carrier Assesment";
 answers[16] = choices[16][1];
 units[16] = "107";
 comments[16] = "Id Pregunta: 3397. NULL";


//  Id pregunta: 3424 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Indicar entre las siguientes normas del IEEE la que trata sobre redes de &aacute;rea metropolitana:";
 choices[17]= new Array();
 choices[17][0] = "802.6";
 choices[17][1] = "802.7";
 choices[17][2] = "802.8";
 choices[17][3] = "802.9";
 answers[17] = choices[17][0];
 units[17] = "101";
 comments[17] = "Id Pregunta: 3424. ";


//  Id pregunta: 3431 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Indicar la respuesta correcta: El protocolo HTTP, utilizado al navegar por Internet:";
 choices[18]= new Array();
 choices[18][0] = "Realiza una nueva conexi&oacute;n TCP con el servidor cada vez que se solicita una nueva p&aacute;gina web";
 choices[18][1] = "Abre una conexi&oacute;n TCP con el servidor la primera vez que se solicita una p&aacute;gina y la mantiene abierta mientras no se cambia de servidor";
 choices[18][2] = "HTTP no es un protocolo de comunicaciones, sino un lenguaje para la creaci&oacute;n de p&aacute;ginas web";
 choices[18][3] = "Ninguna de las anteriores";
 answers[18] = choices[18][0];
 units[18] = "112";
 comments[18] = "Id Pregunta: 3431. ";


//  Id pregunta: 3439 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  El protocolo ANSI X 3.28:";
 choices[19]= new Array();
 choices[19][0] = "Es un protocolo orientado al bit";
 choices[19][1] = "Tiene tres modos de operaci&oacute;n: modo de respuesta normal, modo de respuesta s&iacute;ncrono y modo balanceado as&iacute;ncrono";
 choices[19][2] = "Existen tres tipos de tramas : informaci&oacute;n, supervisi&oacute;n y no numeradas";
 choices[19][3] = "Es un protocolo de control de enlace";
 answers[19] = choices[19][3];
 units[19] = "99";
 comments[19] = "Id Pregunta: 3439. NULL";


//  Id pregunta: 3464 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  El protocolo X.10 es conocido en:";
 choices[20]= new Array();
 choices[20][0] = "Aplicaciones de telefon&iacute;a m&oacute;vil.";
 choices[20][1] = "Aplicaciones de radares.";
 choices[20][2] = "Aplicaciones dom&oacute;ticas.";
 choices[20][3] = "Ninguna de las anteriores respuestas es correcta.";
 answers[20] = choices[20][2];
 units[20] = "47, 100";
 comments[20] = "Id Pregunta: 3464. *: domotica";


//  Id pregunta: 3488 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  En comunicaciones de datos, &iquest;sabe lo que es  'overrun'?:";
 choices[21]= new Array();
 choices[21][0] = "Cuando el sistema operativo o el procesador de comunicaciones paran por un exceso de temperatura";
 choices[21][1] = "Un switch que permite al sistema tener m&aacute;s rendimiento (bits /seg) bajo ciertas condiciones";
 choices[21][2] = "Una situaci&oacute;n en la que algunos paquetes pueden perderse debido a que llegan m&aacute;s r&aacute;pidamente de lo que pueden ser procesados";
 choices[21][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[21] = choices[21][2];
 units[21] = "102";
 comments[21] = "Id Pregunta: 3488. ";


//  Id pregunta: 3535 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  En las t&eacute;cnicas celulares aplicadas a telefon&iacute;a m&oacute;vil, &iquest;cu&aacute;l es la geometr&iacute;a m&aacute;s adecuada de una c&eacute;lula en t&eacute;rminos de m&aacute;xima cobertura y m&iacute;nima intereferencia?:";
 choices[22]= new Array();
 choices[22][0] = "La cuadrada";
 choices[22][1] = "La circular";
 choices[22][2] = "La triangular";
 choices[22][3] = "La hexagonal";
 answers[22] = choices[22][3];
 units[22] = "108";
 comments[22] = "Id Pregunta: 3535. ";


//  Id pregunta: 3545 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  En notaci&oacute;n Kendall A/B/X/Y/Z: ";
 choices[23]= new Array();
 choices[23][0] = "X especifica la distribuci&oacute;n del tiempo de servicio.";
 choices[23][1] = "Y especifica la distribuci&oacute;n de las llegadas al sistema.";
 choices[23][2] = "Z especifica la disciplina de cola.";
 choices[23][3] = "La notaci&oacute;n empleada en teor&iacute;a de tr&aacute;fico se debe a Erlang y no a Kendall.";
 answers[23] = choices[23][2];
 units[23] = "";
 comments[23] = "Id Pregunta: 3545. Kendall T&ordm; Colas";


//  Id pregunta: 3566 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  En un protocolo de nivel de enlace se denomina ventana a:";
 choices[24]= new Array();
 choices[24][0] = "Al env&iacute;o de una trama de control que indica al emisor que la trama de informaci&oacute;n ha llegado correctamente";
 choices[24][1] = "Al envio por el emisor de las tramas de informaci&oacute;n numeradas secuencialmente";
 choices[24][2] = "Al envio de los asentimientos numerados por cada una de las tramas de informaci&oacute;n recibidas";
 choices[24][3] = "Al n&uacute;mero m&aacute;ximo de tramas que en un momento dado pueden estar pendientes de confirmaci&oacute;n";
 answers[24] = choices[24][3];
 units[24] = "101";
 comments[24] = "Id Pregunta: 3566. ";


//  Id pregunta: 3638 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  La representaci&oacute;n autom&aacute;tica de IPv4 sobre IPv6 (para que nodos &quot;s&oacute;lo IPv4&quot; puedan trabajar con IPv6) se expresa con la notaci&oacute;n:";
 choices[25]= new Array();
 choices[25][0] = "::&lt;direcci&oacute;n_IPv4&gt;";
 choices[25][1] = "::FFFF:&lt;direcci&oacute;n_IPv4&gt;";
 choices[25][2] = ":&lt;direcci&oacute;n_IPv4&gt;";
 choices[25][3] = "&lt;direcci&oacute;n_IPv4&gt;::";
 answers[25] = choices[25][1];
 units[25] = "100";
 comments[25] = "Id Pregunta: 3638. NULL";


//  Id pregunta: 3692 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  Las direcciones anycast en IPv6 se caracterizan por:";
 choices[26]= new Array();
 choices[26][0] = "identificar a una &uacute;nica interfaz";
 choices[26][1] = "identificar a un conjunto de interfaces, y cada paquete enviado a una direcci&oacute;n anycast se entrega a una de ellas, eligi&eacute;ndose la mejor desde el punto de vista de la topoog&iacute;a de red";
 choices[26][2] = "identificar a un conjunto de interfaces, y cada paquete enviado a una direcci&oacute;n anycast se entrega a todas las interfaces";
 choices[26][3] = "ninguna de las anteriores respuestas es correcta";
 answers[26] = choices[26][1];
 units[26] = "100";
 comments[26] = "Id Pregunta: 3692. NULL";


//  Id pregunta: 3707 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  Las tramas son las unidades del nivel de enlace mientras que los paquetes pertenecen al nivel de:";
 choices[27]= new Array();
 choices[27][0] = "Nivel o estrato f&iacute;sico";
 choices[27][1] = "Nivel o estrato de red";
 choices[27][2] = "Nivel o estrato de sesi&oacute;n";
 choices[27][3] = "Nivel o estrato de transporte";
 answers[27] = choices[27][1];
 units[27] = "100";
 comments[27] = "Id Pregunta: 3707. NULL";


//  Id pregunta: 3714 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  Los barcos cableros:";
 choices[28]= new Array();
 choices[28][0] = "No existen";
 choices[28][1] = "Son barcos-factor&iacute;a que fabrican cableado de altas prestaciones en alta mar aprovechando las mejores condiciones fiscales de las aguas internacionales";
 choices[28][2] = "Son barcos cuya misi&oacute;n principal es instalar en el fondo marino los cables submarinos de alta capacidad que unen distintos puntos separados mediante mares u oc&eacute;anos";
 choices[28][3] = "Todo lo anterior es falso";
 answers[28] = choices[28][2];
 units[28] = "99";
 comments[28] = "Id Pregunta: 3714. ";


//  Id pregunta: 3723 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  Los est&aacute;ndares MPT 1327 y TETRA servicios de:";
 choices[29]= new Array();
 choices[29][0] = "Radiob&uacute;squeda";
 choices[29][1] = "Radiomensajer&iacute;a";
 choices[29][2] = "Comunicaciones mar&iacute;timas";
 choices[29][3] = "Radiocomunicaciones privadas";
 answers[29] = choices[29][3];
 units[29] = "108";
 comments[29] = "Id Pregunta: 3723. ";


//  Id pregunta: 3744 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  Los sistemas m&oacute;viles celulares:";
 choices[30]= new Array();
 choices[30][0] = "Son de car&aacute;cter unidireccional";
 choices[30][1] = "No permiten la conexi&oacute;n a la red p&uacute;blica";
 choices[30][2] = "Permiten la reutilizaci&oacute;n de frecuencias";
 choices[30][3] = "No requieren separaci&oacute;n m&iacute;nima entre c&eacute;lulas";
 answers[30] = choices[30][2];
 units[30] = "108";
 comments[30] = "Id Pregunta: 3744. ";


//  Id pregunta: 3760 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  Para establecer una comunicaci&oacute;n punto a punto seg&uacute;n TCP/IP es necesario conocer:";
 choices[31]= new Array();
 choices[31][0] = "direcci&oacute;n y puerto origen";
 choices[31][1] = "direcci&oacute;n y puerto destino";
 choices[31][2] = "s&oacute;lo direcciones origen y destino";
 choices[31][3] = "las respuestas a) y b) son correctas";
 answers[31] = choices[31][3];
 units[31] = "100";
 comments[31] = "Id Pregunta: 3760. NULL";


//  Id pregunta: 3800 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  S/MIME utiliza los siguientes algoritmos de  firma:";
 choices[32]= new Array();
 choices[32][0] = "RC2";
 choices[32][1] = "MD5";
 choices[32][2] = "RSA";
 choices[32][3] = "todos los anteriores";
 answers[32] = choices[32][3];
 units[32] = "111";
 comments[32] = "Id Pregunta: 3800. NULL";


//  Id pregunta: 3878 AÃ±o de creación de pregunta: 2003-01-01
 questions[33]= "34)  &iquest;C&uacute;al es la longitud por defecto del campo de informaci&oacute;n en una trama Frame-Relay?";
 choices[33]= new Array();
 choices[33][0] = "Es de 1 Byte";
 choices[33][1] = "Es de 1600 Bytes";
 choices[33][2] = "Es de 8.000 Bytes";
 choices[33][3] = "Ninguna de las anteriores es cierta";
 answers[33] = choices[33][1];
 units[33] = "109";
 comments[33] = "Id Pregunta: 3878. ";


//  Id pregunta: 3881 AÃ±o de creación de pregunta: 2003-01-01
 questions[34]= "35)  &iquest;Cu&aacute;les son las capas que componen la arquitectura WAP?";
 choices[34]= new Array();
 choices[34][0] = "Aplicaci&oacute;n, Sesi&oacute;n, Transacciones y Transporte";
 choices[34][1] = "Aplicaci&oacute;n, Sesi&oacute;n,Presentaci&oacute;n, Transporte, y Red";
 choices[34][2] = "Aplicaci&oacute;n, Sesi&oacute;n, Seguridad y Transporte";
 choices[34][3] = "Ninguna de las opciones anteriores es correcta";
 answers[34] = choices[34][3];
 units[34] = "108";
 comments[34] = "Id Pregunta: 3881. ";


//  Id pregunta: 3888 AÃ±o de creación de pregunta: 2004-01-01
 questions[35]= "36)  El est&aacute;ndar 802.11i relativo a seguridad en redes WiFi, &iquest;Qu&eacute; nuevo protocolo utiliza?";
 choices[35]= new Array();
 choices[35][0] = "WPA2";
 choices[35][1] = "WPA3";
 choices[35][2] = "TKIP";
 choices[35][3] = "WEP";
 answers[35] = choices[35][0];
 units[35] = "107";
 comments[35] = "Id Pregunta: 3888. NULL";


//  Id pregunta: 3890 AÃ±o de creación de pregunta: 2003-01-01
 questions[36]= "37)  En el Modelo de referencia para la interconexi&oacute;n de sistemas abiertos (OSI), indicar cu&aacute;l de los siguientes niveles no soporta la funci&oacute;n o servicio de correcci&oacute;n de errores:";
 choices[36]= new Array();
 choices[36][0] = "F&iacute;sico";
 choices[36][1] = "Enlace";
 choices[36][2] = "Red";
 choices[36][3] = "Aplicaci&oacute;n";
 answers[36] = choices[36][0];
 units[36] = "100";
 comments[36] = "Id Pregunta: 3890. NULL";


//  Id pregunta: 3911 AÃ±o de creación de pregunta: 2003-01-01
 questions[37]= "38)  Algoritmo de compresi&oacute;n de im&aacute;genes sin p&eacute;rdidas:";
 choices[37]= new Array();
 choices[37][0] = "ECW.";
 choices[37][1] = "RLE.";
 choices[37][2] = "MPEG.";
 choices[37][3] = "TXA.";
 answers[37] = choices[37][1];
 units[37] = "93";
 comments[37] = "Id Pregunta: 3911. NULL";


//  Id pregunta: 3912 AÃ±o de creación de pregunta: 2003-01-01
 questions[38]= "39)  Cuando una copia de seguridad copia los archivos creados o modificados desde la &uacute;ltima copia de seguridad normal o incremental, poniendo una marca de copiado a los archivos se habla de:";
 choices[38]= new Array();
 choices[38][0] = "Copia de seguridad incremental.";
 choices[38][1] = "Copia de seguridad diaria.";
 choices[38][2] = "Copia de seguridad intermedia.";
 choices[38][3] = "Copia de seguridad diferencial.";
 answers[38] = choices[38][0];
 units[38] = "97";
 comments[38] = "Id Pregunta: 3912. NULL";


//  Id pregunta: 3932 AÃ±o de creación de pregunta: 2003-01-01
 questions[39]= "40)  &iquest;Cu&aacute;ntas clases de redes est&aacute;n definidas en Internet?";
 choices[39]= new Array();
 choices[39][0] = "Tres";
 choices[39][1] = "Cuatro";
 choices[39][2] = "Cinco";
 choices[39][3] = "Seis";
 answers[39] = choices[39][1];
 units[39] = "100";
 comments[39] = "Id Pregunta: 3932. Red Troncal, Redes de Proveedores de Tr&aacute;nsito y Acceso Internacional, Redes de Proveedores de Acceso Local, Redes Corporativas";


//  Id pregunta: 3984 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  En relaci&oacute;n con las redes de comunicaciones, &iquest;a qu&eacute; hace referencia el t&eacute;rmino &quot;VLAN trunking&quot;?";
 choices[40]= new Array();
 choices[40][0] = "Es el est&aacute;ndar 802.1Q";
 choices[40][1] = "Se refiere a etiquetar tramas ethernet";
 choices[40][2] = "Al proceso de transmitir m&uacute;ltiples VLAN por un &uacute;nico enlace";
 choices[40][3] = "A la se&ntilde;alizaci&oacute;n de VLAN";
 answers[40] = choices[40][2];
 units[40] = "101, 102";
 comments[40] = "Id Pregunta: 3984. ";


//  Id pregunta: 4034 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  &iquest;C&oacute;mo se denomina la tecnolog&iacute;a de multiplexaci&oacute;n utilizada por ATM?";
 choices[41]= new Array();
 choices[41][0] = "Multiplexaci&oacute;n por divisi&oacute;n en el tiempo";
 choices[41][1] = "Multiplexaci&oacute;n estad&iacute;stica";
 choices[41][2] = "Multiplexaci&oacute;n por divisi&oacute;n en la frecuencia";
 choices[41][3] = "Ninguna de las anteriores";
 answers[41] = choices[41][1];
 units[41] = "109";
 comments[41] = "Id Pregunta: 4034. ";


//  Id pregunta: 4036 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  ATM permite ofrecer servicios con una determinada calidad (QoS). &iquest;Cu&aacute;l es el par&aacute;metro de QoS que se usa para denominar la variaci&oacute;n del retardo pico a pico o &quot;jitter&quot;?";
 choices[42]= new Array();
 choices[42][0] = "CLR";
 choices[42][1] = "CDV";
 choices[42][2] = "CTD";
 choices[42][3] = "CER";
 answers[42] = choices[42][1];
 units[42] = "109";
 comments[42] = "Id Pregunta: 4036. ";


//  Id pregunta: 4059 AÃ±o de creación de pregunta: 2006-01-01
 questions[43]= "44)  Que tipo de LAN instalarias en un edificio nuevo";
 choices[43]= new Array();
 choices[43][0] = "Usaria cables porque son m&aacute;s seguros y fiables";
 choices[43][1] = "Usaria Wi-Max porque es una tecnologia que me evita tener que instalar cables";
 choices[43][2] = "Usaria Wi-Fi porque me da la misma funcionalidad que los cables pero con una instalaci&oacute;n m&aacute;s r&aacute;pida";
 choices[43][3] = "Cualquiera de las anteriores es valida";
 answers[43] = choices[43][0];
 units[43] = "112";
 comments[43] = "Id Pregunta: 4059. ";


//  Id pregunta: 4089 AÃ±o de creación de pregunta: 2006-01-01
 questions[44]= "45)  Cuando hablamos de tecnolog&iacute;a .NET, los interfaces de servicios";
 choices[44]= new Array();
 choices[44][0] = "Se denominan tambi&eacute;n fachadas empresariales";
 choices[44][1] = "permiten exponer el acceso a los datos como un servicio";
 choices[44][2] = "Interaccionan directamente con el usuario";
 choices[44][3] = "Ninguna de las anteriores es correcta";
 answers[44] = choices[44][0];
 units[44] = "115";
 comments[44] = "Id Pregunta: 4089. ";


//  Id pregunta: 4098 AÃ±o de creación de pregunta: 2006-01-01
 questions[45]= "46)  El Patr&oacute;n MVC";
 choices[45]= new Array();
 choices[45][0] = "Hace referencia al Modelo Vista Componente";
 choices[45][1] = "minimiza el acoplamiento entre los componentes de distintas capas";
 choices[45][2] = "El Modelo se encarga de la presentaci&oacute;n al usuario";
 choices[45][3] = "Todas son incorrectas";
 answers[45] = choices[45][1];
 units[45] = "116";
 comments[45] = "Id Pregunta: 4098. ";


//  Id pregunta: 4125 AÃ±o de creación de pregunta: 2006-01-01
 questions[46]= "47)  Lenguaje de marca que utiliza s&iacute;mbolos autodefinidos e ilimitados";
 choices[46]= new Array();
 choices[46][0] = "HTML";
 choices[46][1] = "XHTML";
 choices[46][2] = "XML";
 choices[46][3] = "W3C";
 answers[46] = choices[46][2];
 units[46] = "112.69";
 comments[46] = "Id Pregunta: 4125. NULL";


//  Id pregunta: 4133 AÃ±o de creación de pregunta: 2006-01-01
 questions[47]= "48)  Las im&aacute;genes se utilizan para";
 choices[47]= new Array();
 choices[47][0] = "El plataformado de equipos";
 choices[47][1] = "almacenar datos antiguos para asegurar la compatibilidad";
 choices[47][2] = "la realizaci&oacute;n de un backup t&iacute;pico";
 choices[47][3] = "todas las anteriores";
 answers[47] = choices[47][0];
 units[47] = "97";
 comments[47] = "Id Pregunta: 4133. NULL";


//  Id pregunta: 4141 AÃ±o de creación de pregunta: 2006-01-01
 questions[48]= "49)  El modo promiscuo se utiliza para";
 choices[48]= new Array();
 choices[48][0] = "Comunicarse con todos los ordenadores de una red";
 choices[48][1] = "Abrir un canal IRC (chat) a todos los usuarios conectados";
 choices[48][2] = "Habilitar redes TCP multicast";
 choices[48][3] = "Acceder a todos los paquetes del segmento de red";
 answers[48] = choices[48][3];
 units[48] = "102";
 comments[48] = "Id Pregunta: 4141. ";


//  Id pregunta: 4209 AÃ±o de creación de pregunta: 2006-01-01
 questions[49]= "50)  El protocolo utilizado para acceder a Internet desde cualquier dispositivo inal&aacute;mbrico haciendo uso del lenguaje WML (Wireless Markup Language) es:";
 choices[49]= new Array();
 choices[49][0] = "WEP";
 choices[49][1] = "WPA";
 choices[49][2] = "WAP";
 choices[49][3] = "WTP";
 answers[49] = choices[49][2];
 units[49] = "108";
 comments[49] = "Id Pregunta: 4209. ";


//  Id pregunta: 4225 AÃ±o de creación de pregunta: 2006-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta para el protocolo TCP/IP?";
 choices[50]= new Array();
 choices[50][0] = "IP no proporciona control de errores para datos, ni sumas de comprobaci&oacute;n de cabeceras";
 choices[50][1] = "Si se pierde o da&ntilde;a alg&uacute;n datagrama durante la transmisi&oacute;n, TCP lo detecta y lo vuelve a retransmitir";
 choices[50][2] = "UDP garantiza la entrega de los datagramas y evita las duplicaciones";
 choices[50][3] = "ICMP garantiza la entrega fiable de un paquete IP";
 answers[50] = choices[50][1];
 units[50] = "100";
 comments[50] = "Id Pregunta: 4225. IPv6 no a&ntilde;ade CHECKSUM en su cabecera. La comprobaci&oacute;n de integridad se asume asegurada por checksum de la capa de enlace y checksum de nivel superiores (as&iacute; routers no necesitan recalcular checksum cada vez que alg&uacute;n campo cabecera cambia).";


//  Id pregunta: 4416 AÃ±o de creación de pregunta: 2007-01-01
 questions[51]= "52)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre transmisi&oacute;n de datos no es correcta?";
 choices[51]= new Array();
 choices[51][0] = "En el caso de medios de transmisi&oacute;n guiados, es el medio en s&iacute; mismo lo que m&aacute;s limitaciones impone a la transmisi&oacute;n.";
 choices[51][1] = "En los medios no guiados, las caracter&iacute;sticas de la transmisi&oacute;n est&aacute;n en gran medida determinadas por la frecuencia de la portadora.";
 choices[51][2] = "En general, a frecuencias bajas las antenas son direccionales, concentr&aacute;ndose toda la energ&iacute;a en un haz.";
 choices[51][3] = "Si todos los dem&aacute;s factores permanecen constantes, al aumentar el ancho de banda de la se&ntilde;al se puede incrementar la velocidad de transmisi&oacute;n.";
 answers[51] = choices[51][2];
 units[51] = "";
 comments[51] = "Id Pregunta: 4416. ";


//  Id pregunta: 4489 AÃ±o de creación de pregunta: 2007-01-01
 questions[52]= "53)  Seg&uacute;n el RD 944/2005 de 29 de Julio por el que se aprob6 el Plan T&eacute;cnico Nacional para Ia Televisi&oacute;n Digital Terrestre, cada m&uacute;ltiple digital de cobertura nacional o auton&oacute;mica integrara:";
 choices[52]= new Array();
 choices[52][0] = "Al menos cuatro canales digitales diferentes, siendo posible utilizar pasta el 20 % de la capacidad del m&uacute;ltiple para Ia transmisi&oacute;n de servicios adicionales de datos.";
 choices[52][1] = "Al menos cuatro canales digitales sin posibilidad de emitir ning&uacute;n otro servicio adicional de datos.";
 choices[52][2] = "Al menos cuatro canales digitales diferentes siendo obligatoria Ia emision de servicios de datos adicionales.";
 choices[52][3] = "Al menos cuatro canales digitales diferentes, siendo obligatoria la difusi&oacute;n de las Gu&iacute;as Electr&oacute;nicas de Programaci&oacute;n correspondientes a dichos canales.";
 answers[52] = choices[52][0];
 units[52] = "110";
 comments[52] = "Id Pregunta: 4489. ";


//  Id pregunta: 4777 AÃ±o de creación de pregunta: 2007-01-01
 questions[53]= "54)  De acuerdo con la Ley 9/2014 General de Telecomunicaciones, la gesti&oacute;n y control de los planes nacionales de numeraci&oacute;n corresponde a ";
 choices[53]= new Array();
 choices[53][0] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia";
 choices[53][1] = "El Ministerio de Industria, Turismo y Comercio";
 choices[53][2] = "El Gobierno";
 choices[53][3] = "La Agencia Estatal de Radiocomunicaciones";
 answers[53] = choices[53][1];
 units[53] = "110";
 comments[53] = "Id Pregunta: 4777. ";


//  Id pregunta: 5064 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l de las siguientes grupos de trabajo del IEEE dedica su actividad al campo de las redes de &aacute;reametropolitana?:";
 choices[54]= new Array();
 choices[54][0] = "802.3";
 choices[54][1] = "802.4";
 choices[54][2] = "802.5";
 choices[54][3] = "802.6";
 answers[54] = choices[54][3];
 units[54] = "101";
 comments[54] = "Id Pregunta: 5064. Examen TIC A 2007";


//  Id pregunta: 5170 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  El transporte de voz en tiempo real a trav&eacute;s de redes IP se efect&uacute;a por medio de los protocolos:";
 choices[55]= new Array();
 choices[55][0] = "MPLS sobre UDP";
 choices[55][1] = "RVSP";
 choices[55][2] = "RTP sobre TCP";
 choices[55][3] = "RTP sobre UDP";
 answers[55] = choices[55][3];
 units[55] = "109";
 comments[55] = "Id Pregunta: 5170. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5308 AÃ±o de creación de pregunta: 2003-01-01
 questions[56]= "57)  &ldquo;La emisi&oacute;n de se&ntilde;ales de identificaci&oacute;n falsas o enga&ntilde;osas&rdquo; est&aacute; catalogada por la Ley 9/2014 como infracci&oacute;n:";
 choices[56]= new Array();
 choices[56][0] = "Muy grave";
 choices[56][1] = "Grave";
 choices[56][2] = "Leve";
 choices[56][3] = "No est&aacute; considerado infracci&oacute;n";
 answers[56] = choices[56][1];
 units[56] = "110";
 comments[56] = "Id Pregunta: 5308. ";


//  Id pregunta: 5429 AÃ±o de creación de pregunta: 2003-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa?";
 choices[57]= new Array();
 choices[57][0] = "El protocolo IPv6 admite direcciones en IPv4";
 choices[57][1] = "El protocolo ARP est&aacute; en la capa de aplicaci&oacute;n";
 choices[57][2] = "Los protocolos ARP y RARP tienen funciones inversas";
 choices[57][3] = "En IP se puede indicar que un datagrama no debe ser fragmentado";
 answers[57] = choices[57][1];
 units[57] = "100";
 comments[57] = "Id Pregunta: 5429. Castilla y Le&oacute;n";


//  Id pregunta: 5922 AÃ±o de creación de pregunta: 2009-01-01
 questions[58]= "59)  &iquest;Cu&aacute;l de los siguientes NO es un tipo de ataque activo?";
 choices[58]= new Array();
 choices[58][0] = "Interrupci&oacute;n";
 choices[58][1] = "Interceptaci&oacute;n";
 choices[58][2] = "Modificaci&oacute;n";
 choices[58][3] = "Generaci&oacute;n";
 answers[58] = choices[58][1];
 units[58] = "111";
 comments[58] = "Id Pregunta: 5922. MAP 2008 A1";


//  Id pregunta: 5943 AÃ±o de creación de pregunta: 2009-01-01
 questions[59]= "60)  En el contexto de la virtualizaci&oacute;n, &iquest;qu&eacute; es el hypervisor?";
 choices[59]= new Array();
 choices[59][0] = "Un m&oacute;dulo en el sistema operativo hu&eacute;sped que monitoriza el uso de recursos del mismo";
 choices[59][1] = "La extensi&oacute;n del gestor de procesos del sistema operativo anfitri&oacute;n que permite compartir memoria a los procesos de distintos sistemas operativos hu&eacute;spedes";
 choices[59][2] = "Es la plataforma que permite ejecutar concurrentemente varios sistemas operativos en una m&aacute;quina";
 choices[59][3] = "Es un m&oacute;dulo en el sistema operativo anfitri&oacute;n que monitoriza el uso de la Virtualization API Standard que realizan los sistemas operativos hu&eacute;spedes";
 answers[59] = choices[59][2];
 units[59] = "119";
 comments[59] = "Id Pregunta: 5943. ";


//  Id pregunta: 6066 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  Cuando un sistema en una red local env&iacute;a un datagrama IP a otro sistema en una subred distinta, utiliza el protocolo ARP para obtener:";
 choices[60]= new Array();
 choices[60][0] = "La direcci&oacute;n MAC del sistema final destino.";
 choices[60][1] = "La direcci&oacute;n IP del sistema final destino.";
 choices[60][2] = "La identificaci&oacute;n del puerto TCP o UDP del sistema final destino.";
 choices[60][3] = "La direcci&oacute;n MAC del router.";
 answers[60] = choices[60][3];
 units[60] = "100";
 comments[60] = "Id Pregunta: 6066. TIC A 2009";


//  Id pregunta: 6483 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  &iquest;Es compatible el servicio ADSL y el servicio RDSI sobre el mismo par de cobre?";
 choices[61]= new Array();
 choices[61][0] = "S&iacute;";
 choices[61][1] = "No";
 choices[61][2] = "S&oacute;lo si no se ofrece tambi&eacute;n el servicio RTC";
 choices[61][3] = "S&oacute;lo si el cliente no tiene una centralita PBX";
 answers[61] = choices[61][0];
 units[61] = "107";
 comments[61] = "Id Pregunta: 6483. Castilla La Mancha 2009. Compatibilidad para ADSL 2+ seg&uacute;n Anexo B";


//  Id pregunta: 6538 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  En relaci&oacute;n a las t&eacute;cnicas de control de acceso";
 choices[62]= new Array();
 choices[62][0] = "DAC permite a los propietarios de los datos elegir los sujetos que tienen acceso a los mismos";
 choices[62][1] = "MAC usa un sistema de etiquetado";
 choices[62][2] = "El control de acceso no discrecional usa un m&eacute;todo basado en roles para determinar los permisos";
 choices[62][3] = "Todas las respuestas anteriores son correctas";
 answers[62] = choices[62][3];
 units[62] = "111";
 comments[62] = "Id Pregunta: 6538. NULL";


//  Id pregunta: 7250 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  La direcci&oacute;n IPv4 172.30.120.135/12 es una direcci&oacute;n de tipo:";
 choices[63]= new Array();
 choices[63][0] = "Direcci&oacute;n de red broadcast";
 choices[63][1] = "Direcci&oacute;n de red privada";
 choices[63][2] = "Direcci&oacute;n de red de enlace local";
 choices[63][3] = "Direcci&oacute;n de red p&uacute;blica";
 answers[63] = choices[63][1];
 units[63] = "100";
 comments[63] = "Id Pregunta: 7250. Examen TIC B 2009";


//  Id pregunta: 7252 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  &iquest;Cu&aacute;l de las siguientes opciones representa la m&aacute;scara 255.255.240.0?";
 choices[64]= new Array();
 choices[64][0] = "/20";
 choices[64][1] = "/22";
 choices[64][2] = "/24";
 choices[64][3] = "/240";
 answers[64] = choices[64][0];
 units[64] = "100";
 comments[64] = "Id Pregunta: 7252. Examen TIC B 2009";


//  Id pregunta: 7266 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  El acceso al medio utilizado por GSM (Global System Mobile) es acceso m&uacute;ltiple por divisi&oacute;n de:";
 choices[65]= new Array();
 choices[65][0] = "Frecuencia";
 choices[65][1] = "Tiempo";
 choices[65][2] = "Tiempo y frecuencia";
 choices[65][3] = "C&oacute;digo de banda ancha (WCDMA)";
 answers[65] = choices[65][2];
 units[65] = "108";
 comments[65] = "Id Pregunta: 7266. Examen TIC B 2009";


//  Id pregunta: 7279 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  Una maqueta virtual se puede definir como ";
 choices[66]= new Array();
 choices[66][0] = "Un programa inform&aacute;tico que simula el funcionamiento de un terminal de un ordenador central ";
 choices[66][1] = "Un prototipo de aplicaci&oacute;n";
 choices[66][2] = "Un tipo de virtualizaci&oacute;n de servidor";
 choices[66][3] = "Un servidor de terminales";
 answers[66] = choices[66][0];
 units[66] = "119";
 comments[66] = "Id Pregunta: 7279. NULL";


//  Id pregunta: 8267 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  Referente a la pila de protocolos de la familia ITU H.323 para el tr&aacute;fico multimedia sobre redes IP, la afirmaci&oacute;n correcta es:";
 choices[67]= new Array();
 choices[67][0] = "Requiere el uso del protocolo Registration, Admission and Status (RAS) entre los terminales.";
 choices[67][1] = "Emplea el protocolo TCP/IP para el env&iacute;o de la informaci&oacute;n multimedia pues UDP no garantiza el control de flujo y errores.";
 choices[67][2] = "Emplea Real-Time Control Protocol (RTCP) para la se&ntilde;alizaci&oacute;n (establecimiento, control y finalizaci&oacute;n) de llamadas.";
 choices[67][3] = "Emplea el protocolo T.120 para la inclusi&oacute;n de tr&aacute;fico de datos.";
 answers[67] = choices[67][3];
 units[67] = "117";
 comments[67] = "Id Pregunta: 8267. Examen TIC A1 2010";


//  Id pregunta: 8328 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  La tecnologia IDSL (ISDN Digital Subscriber Line):";
 choices[68]= new Array();
 choices[68][0] = "Se utiliza para transportar voz y datos";
 choices[68][1] = "Es asim&eacute;trica";
 choices[68][2] = "Utiliza 3 pares de hilos";
 choices[68][3] = "Alcanza una distancia m&aacute;xima de 5,5 Km.";
 answers[68] = choices[68][3];
 units[68] = "109";
 comments[68] = "Id Pregunta: 8328. Analista Ayto. Madrid 2010";


//  Id pregunta: 8592 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  En J2EE &iquest;qu&eacute; es un fichero WAR?";
 choices[69]= new Array();
 choices[69][0] = "Contiene los recursos y librer&iacute;as necesarias para compilar un proyecto";
 choices[69][1] = "Contiene la aplicaci&oacute;n web lista para ser desplegada en cualquier contenedor de servlets/jsp.";
 choices[69][2] = "Contiene los m&oacute;dulos EJB de las aplicaciones";
 choices[69][3] = "No existen los ficheros WAR en J2EE";
 answers[69] = choices[69][1];
 units[69] = "116";
 comments[69] = "Id Pregunta: 8592. Examen TIC A2 2010 interna";


//  Id pregunta: 8596 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  Si queremos almacenar unas tablas de la base de datos y sus relaciones en memoria para operar con ellas, &iquest;cual de los siguientes objetos de .NET usar&iacute;a?";
 choices[70]= new Array();
 choices[70][0] = "DataTableRelation";
 choices[70][1] = "DataView";
 choices[70][2] = "DataTable";
 choices[70][3] = "DataSet";
 answers[70] = choices[70][3];
 units[70] = "115";
 comments[70] = "Id Pregunta: 8596. Examen TIC A2 2010 interna";


//  Id pregunta: 8614 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  &iquest;Cual de las siguientes soluciones comerciales de Escritorio Remoto se distribuye bajo licencia propietaria?";
 choices[71]= new Array();
 choices[71][0] = "Vinagre";
 choices[71][1] = "DameWare Mini Remote Control";
 choices[71][2] = "TightVNC";
 choices[71][3] = "RdesKtop";
 answers[71] = choices[71][1];
 units[71] = "118";
 comments[71] = "Id Pregunta: 8614. Examen TIC A2 2010 interna";


//  Id pregunta: 8625 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  &iquest;Cu&aacute;l de los siguientes problemas afecta a los medios de transmisi&oacute;n?";
 choices[72]= new Array();
 choices[72][0] = "Reverberaci&oacute;n.";
 choices[72][1] = "Ruido blanco";
 choices[72][2] = "Afon&iacute;a";
 choices[72][3] = "Todos son posibles problemas de los medios de transmisi&oacute;n";
 answers[72] = choices[72][1];
 units[72] = "99";
 comments[72] = "Id Pregunta: 8625. Examen TIC A2 2010 interna";


//  Id pregunta: 8628 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  De entre las siguientes opciones en el &aacute;mbito del almacenamiento en los sistemas de informaci&oacute;n, se&ntilde;ale la verdadera:";
 choices[73]= new Array();
 choices[73][0] = "SAS es una interfaz de transferencia de datos en serie";
 choices[73][1] = "SATA es una Interfaz de transferencia de datos en paralelo";
 choices[73][2] = "Los dispositivos SAS se identifican por el World Wide Web Name (WWWN).";
 choices[73][3] = "El conector SATA posee 68 pines";
 answers[73] = choices[73][0];
 units[73] = "48";
 comments[73] = "Id Pregunta: 8628. Examen TIC A2 2010 interna";


//  Id pregunta: 8657 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  La codificaci&oacute;n Manchester-Diferencial se utiliza en:";
 choices[74]= new Array();
 choices[74][0] = "Firma digital";
 choices[74][1] = "Modulaci&oacute;n de se&ntilde;ales";
 choices[74][2] = "T&eacute;cnicas criptogr&aacute;ficas";
 choices[74][3] = "Seguridad Wi-Fi";
 answers[74] = choices[74][1];
 units[74] = "99, 101";
 comments[74] = "Id Pregunta: 8657. Examen UPM A2 2011";


//  Id pregunta: 9021 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  Un articulista est&aacute; escribiendo sobre las ventajas econ&oacute;micas de los sistemas WDM (Wavelength-Division Multiplexing), que se manifiestan principalmente en los sistemas:";
 choices[75]= new Array();
 choices[75][0] = "De baja capacidad y elevado alcance.";
 choices[75][1] = "De alta capacidad y reducido alcance.";
 choices[75][2] = "De alta capacidad y elevado alcance.";
 choices[75][3] = "Ninguna de las anteriores";
 answers[75] = choices[75][2];
 units[75] = "99";
 comments[75] = "Id Pregunta: 9021. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9026 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  A efectos de facturaci&oacute;n, en una red corporativa donde exista una salida/entrada directa a la red de m&oacute;viles (enlace desde la red corporativa a la red de m&oacute;viles directo) para todas las llamadas desde/a m&oacute;viles:";
 choices[76]= new Array();
 choices[76][0] = "Se considerar&aacute;n tres tipos de tarifas en funci&oacute;n del origen y destino de la llamada corporativa: fijo-m&oacute;vil, m&oacute;vil-fijo y m&oacute;vil-m&oacute;vil.";
 choices[76][1] = "Todas las llamadas corporativas fijo-m&oacute;vil y m&oacute;vil-fijo tendr&aacute;n consideraci&oacute;n de m&oacute;vil-m&oacute;vil.";
 choices[76][2] = "Esta es un servicio que no lo dan los operadores de m&oacute;viles y es preciso salir a m&oacute;viles a trav&eacute;s de la red p&uacute;blica de conmutaci&oacute;n de circuitos.";
 choices[76][3] = "Todas las llamadas corporativas fijo-m&oacute;vil y m&oacute;vil-fijo tendr&aacute;n consideraci&oacute;n de fijo-fijo.";
 answers[76] = choices[76][1];
 units[76] = "103";
 comments[76] = "Id Pregunta: 9026. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9029 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  &iquest;Cu&aacute;l de los siguientes no es un servidor de streaming?";
 choices[77]= new Array();
 choices[77][0] = "Wowza Media Server";
 choices[77][1] = "Icecast";
 choices[77][2] = "Darwin Streaming Server";
 choices[77][3] = "FlowCast";
 answers[77] = choices[77][3];
 units[77] = "117";
 comments[77] = "Id Pregunta: 9029. ";


//  Id pregunta: 9031 AÃ±o de creación de pregunta: 2011-01-01
 questions[78]= "79)  &iquest;Qu&eacute; tecnolog&iacute;a utiliza en exclusiva una modulacu&oacute;n DSSS?";
 choices[78]= new Array();
 choices[78][0] = "802.11a";
 choices[78][1] = "802.11b";
 choices[78][2] = "802.11g";
 choices[78][3] = "802.11n";
 answers[78] = choices[78][1];
 units[78] = "107";
 comments[78] = "Id Pregunta: 9031. NULL";


//  Id pregunta: 9363 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  Una red de anillo en contienda.";
 choices[79]= new Array();
 choices[79][0] = "Nunca se pasa un testigo";
 choices[79][1] = "Lo m&aacute;s razonable es utilizar este m&eacute;todo en situaciones de demanda baja de transmisi&oacute;n.";
 choices[79][2] = "Mejora las prestaciones de la red en situaciones alta demanda de transmisi&oacute;n.";
 choices[79][3] = "Es imposible detectar las colisiones bajo este esquema de funcionamiento.";
 answers[79] = choices[79][1];
 units[79] = "101";
 comments[79] = "Id Pregunta: 9363. ";


//  Id pregunta: 9367 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  Los niveles de servicio de Resilient Packet Ring son:";
 choices[80]= new Array();
 choices[80][0] = "Clase A: Servicio best effort";
 choices[80][1] = "Clase B: Con latencia y jitter predecible.";
 choices[80][2] = "Clase C: Para tr&aacute;fico con requisitos de baja latencia y bajo jitter.";
 choices[80][3] = "Todas las respuestas son correctas.";
 answers[80] = choices[80][1];
 units[80] = "101";
 comments[80] = "Id Pregunta: 9367. ";


//  Id pregunta: 9396 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  Las redes ATM emplean celdas de:";
 choices[81]= new Array();
 choices[81][0] = "Tama&ntilde;o variable: entre 5 e 10 bytes de cabecera, m&aacute;s 46 bytes de informaci&oacute;n";
 choices[81][1] = "Tama&ntilde;o fijo: 5 bytes de cabecera, m&aacute;s 48 bytes de informaci&oacute;n";
 choices[81][2] = "Tama&ntilde;o fijo: 8 bytes de cabecera, m&aacute;s 56 bytes de informaci&oacute;n.";
 choices[81][3] = "Tama&ntilde;o variable: 5 bytes de cabecera y entre 48 y 56 bytes de informaci&oacute;n.";
 answers[81] = choices[81][1];
 units[81] = "109";
 comments[81] = "Id Pregunta: 9396. Examen Xunta de Galicia A1 2011";


//  Id pregunta: 9844 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  Indique cu&aacute;l de las siguientes afirmaciones es VERDADERA:";
 choices[82]= new Array();
 choices[82][0] = "En un criptosistema sim&eacute;trico el conocimiento de la clave p&uacute;blica no permite calcular la clave privada";
 choices[82][1] = "En un criptosistema de clave p&uacute;blica el conocimiento de la clave p&uacute;blica permite calcular la clave privada.";
 choices[82][2] = "En un criptosistema de clave privada el conocimiento de la clave p&uacute;blica permite calcular la clave privada.";
 choices[82][3] = "En un criptosistema asim&eacute;trico el conocimiento de la clave p&uacute;blica no permite calcular la clave privada.";
 answers[82] = choices[82][3];
 units[82] = "111";
 comments[82] = "Id Pregunta: 9844. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Extremadura 2014";


//  Id pregunta: 9859 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  La informaci&oacute;n contenida en el chip del DNI electr&oacute;nico est&aacute; contenida en tres zonas con diferentes niveles de acceso. Indique qu&eacute; informaci&oacute;n est&aacute; contenida en la Zona de seguridad:";
 choices[83]= new Array();
 choices[83][0] = "Certificado de autenticaci&oacute;n";
 choices[83][1] = "Datos de filiaci&oacute;n del ciudadano.";
 choices[83][2] = "Claves Diffie-Hellman.";
 choices[83][3] = "Certificados X-509 de componente.";
 answers[83] = choices[83][1];
 units[83] = "111";
 comments[83] = "Id Pregunta: 9859. Examen TIC del Servicio de Salud de Extremadura 2014";


//  Id pregunta: 9862 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  Indique la respuesta falsa:";
 choices[84]= new Array();
 choices[84][0] = "El estandar de autenticaci&oacute;n OAuth fue crado por la OATH (Initiative for Open Authentication).";
 choices[84][1] = "OAuth 2.0 no es compatible con OAuth 1.0. ";
 choices[84][2] = "Graph API de Facebook solo soporta OAuth 2.0. ";
 choices[84][3] = "Google soporta Oauth 2.0. como m&eacute;todo recomendado de autenticaci&oacute;n para todas sus APIs.";
 answers[84] = choices[84][0];
 units[84] = "118";
 comments[84] = "Id Pregunta: 9862. Oauth y OATH son conceptos diferentes. ";


//  Id pregunta: 9865 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  En el marco del modelo est&aacute;ndar de gesti&oacute;n de red definido por la ISO y la ITU-TX.700, son &aacute;reas de gesti&oacute;n: ";
 choices[85]= new Array();
 choices[85][0] = "la gesti&oacute;n de fallos, de contabilidad, de configuraci&oacute;n, de calidad defuncionamiento y de seguridad.";
 choices[85][1] = "la gesti&oacute;n de fallos, de la demanda, de configuraci&oacute;n, de rendimiento y deseguridad.";
 choices[85][2] = "la gesti&oacute;n de fallos, de monitorizaci&oacute;n, de configuraci&oacute;n y de seguridad";
 choices[85][3] = "la gesti&oacute;n de monitorizaci&oacute;n, de trazabilidad, de configuraci&oacute;n y de seguridad";
 answers[85] = choices[85][0];
 units[85] = "104";
 comments[85] = "Id Pregunta: 9865. TIC A1, Examen 2013";


//  Id pregunta: 10118 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Seleccionar la correcta:";
 choices[86]= new Array();
 choices[86][0] = "Tanto los router como los switches definen dominios de colisi&oacute;n y difusi&oacute;n";
 choices[86][1] = "Los router definen dominios de colisi&oacute;n pero no de difusi&oacute;n";
 choices[86][2] = "Los router definen dominios de difusi&oacute;n y de colisi&oacute;n";
 choices[86][3] = "Los switches definen dominios de colisi&oacute;n y difusi&oacute;n.";
 answers[86] = choices[86][2];
 units[86] = "102";
 comments[86] = "Id Pregunta: 10118. ";


//  Id pregunta: 10129 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  Las siglas CMOT significan:";
 choices[87]= new Array();
 choices[87][0] = "Complex Management Over TCP";
 choices[87][1] = "Common Management Over TCP/IP";
 choices[87][2] = "Complex Management Over TCP/IP";
 choices[87][3] = "Complex Management Of Telecomucation";
 answers[87] = choices[87][1];
 units[87] = "104";
 comments[87] = "Id Pregunta: 10129. ";


//  Id pregunta: 10299 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  En la administraci&oacute;n de un dispositivo switch &iquest;qu&eacute; es un trunk?";
 choices[88]= new Array();
 choices[88][0] = "Un puerto de velocidad GigaEthernet o 10 GigaEthernet.";
 choices[88][1] = "Un enlace que agrega tr&aacute;fico de varias VLANs.";
 choices[88][2] = "Un adaptador fibra - par trenzado.";
 choices[88][3] = "Una versi&oacute;n estable del firmware del dispositivo.";
 answers[88] = choices[88][1];
 units[88] = "102";
 comments[88] = "Id Pregunta: 10299. TIC A2, libre, examen 2013";


//  Id pregunta: 10491 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  Cual es el importe m&aacute;ximo de una sanci&oacute;n muy grave seg&uacute;n la Ley 9/2014, si no se puede calcular el beneficio bruto obtenido";
 choices[89]= new Array();
 choices[89][0] = "10 millones de euros";
 choices[89][1] = "No hay un l&iacute;mite";
 choices[89][2] = "20 millones de euros";
 choices[89][3] = "El qu&iacute;ntuplo del beneficio bruto obtenido";
 answers[89] = choices[89][2];
 units[89] = "110";
 comments[89] = "Id Pregunta: 10491. Art 79.1.a) de la Ley 9/2014. La respuesta D no es correcta puesto que en la pregunta se especifica que no se puede calcular el beneficio bruto obtenido";


//  Id pregunta: 10988 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  La Comisi&oacute;n Nacional de los Mercados y la Competencia (CNMC), en relaci&oacute;n con las telecomunicaciones:";
 choices[90]= new Array();
 choices[90][0] = "Autoriza operadores de telecomunicaciones.";
 choices[90][1] = "Autoriza distribuidores de equipamiento de redes y servicios de la sociedad de la informaci&oacute;n.";
 choices[90][2] = "Define los mercados de referencia relativos a redes y servicios electr&oacute;nicos.";
 choices[90][3] = "Define las actuaciones de los operadores, en relaci&oacute;n con los posibles conflictos de los anchos de banda en el espacio radioel&eacute;ctrico.";
 answers[90] = choices[90][2];
 units[90] = "110";
 comments[90] = "Id Pregunta: 10988. TIC A1 AGE 2014";


//  Id pregunta: 11188 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;Cu&aacute;l de los siguientes es un protocolo de autenticaci&oacute;n PPP (Point to Point)?";
 choices[91]= new Array();
 choices[91][0] = "RADIUS &ndash; Remote Authentication Dial In User Service";
 choices[91][1] = "Kerberos";
 choices[91][2] = "CHAP Challenge Handshake Authentication Protocol";
 choices[91][3] = "Todos los anteriores";
 answers[91] = choices[91][2];
 units[91] = "111";
 comments[91] = "Id Pregunta: 11188. ";


//  Id pregunta: 11225 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  En que capa del patr&oacute;n MVC es com&uacute;n el uso del patr&oacute;n DAO";
 choices[92]= new Array();
 choices[92][0] = "En el modelo.";
 choices[92][1] = "En el vista.";
 choices[92][2] = "En el controlador.";
 choices[92][3] = "No se usan simult&aacute;neamente.";
 answers[92] = choices[92][2];
 units[92] = "116";
 comments[92] = "Id Pregunta: 11225. ";


//  Id pregunta: 11410 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Seg&uacute;n la Ley 9/2014, &iquest;a qui&eacute;n corresponde la elaboraci&oacute;n de propuestas de planes nacionales para ser elevados al gobierno y desarrollo normativo de estos planes?";
 choices[93]= new Array();
 choices[93][0] = "CNMC.";
 choices[93][1] = "ORECE.";
 choices[93][2] = "SETSI.";
 choices[93][3] = "MINETUR.";
 answers[93] = choices[93][3];
 units[93] = "110";
 comments[93] = "Id Pregunta: 11410. ";


//  Id pregunta: 11416 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Seg&uacute;n la Ley 9/2014, los planes nacionales de numeraci&oacute;n se aprueban mediante:";
 choices[94]= new Array();
 choices[94][0] = "Orden Ministerial del MINETUR.";
 choices[94][1] = "Resoluci&oacute;n de la CNMC.";
 choices[94][2] = "Real Decreto.";
 choices[94][3] = "Ninguna de las anteriores.";
 answers[94] = choices[94][2];
 units[94] = "110";
 comments[94] = "Id Pregunta: 11416. ";


//  Id pregunta: 11452 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Seg&uacute;n la Ley 9/2014, se&ntilde;ale la correcta:";
 choices[95]= new Array();
 choices[95][0] = "El Gobierno aprueba por ley los planes nacionales de numeraci&oacute;n, direccionamiento y denominaci&oacute;n (PNDD).";
 choices[95][1] = "El MINETUR debe regular el uso de los recursos p&uacute;blicos asociados a los PNDD.";
 choices[95][2] = "Los costes derivados de la actualizaci&oacute;n de los elementos de la red corren a cuenta del operador.";
 choices[95][3] = "El MINETUR requiere informe de la SETSI para modificar los planes nacionales.";
 answers[95] = choices[95][1];
 units[95] = "110";
 comments[95] = "Id Pregunta: 11452. ";


//  Id pregunta: 11657 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  El est&aacute;ndar WiFi que permite establecer comunicaciones entre autom&oacute;viles es:";
 choices[96]= new Array();
 choices[96][0] = "IEEE 802.11j";
 choices[96][1] = "IEEE 802.11k";
 choices[96][2] = "IEEE 802.11n";
 choices[96][3] = "IEEE 802.11p";
 answers[96] = choices[96][3];
 units[96] = "107";
 comments[96] = "Id Pregunta: 11657. ";


//  Id pregunta: 11675 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Se&ntilde;ale la tecnolog&iacute;a que no hace uso de MIMO:";
 choices[97]= new Array();
 choices[97][0] = "HSPA+";
 choices[97][1] = "WiFi";
 choices[97][2] = "WiMAX";
 choices[97][3] = "Las 3 hacen uso de MIMO";
 answers[97] = choices[97][3];
 units[97] = "107, 108";
 comments[97] = "Id Pregunta: 11675. ";


//  Id pregunta: 11737 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Qu&eacute; es una topolog&iacute;a  de red Ad-Hoc?";
 choices[98]= new Array();
 choices[98][0] = "Aquella en la que todos los elementos de una red se comunican con el resto de igual a igual";
 choices[98][1] = "Aquella en la que todos los elementos de una red se comunican a trav&eacute;s de un elemento com&uacute;n llamado control de accesos.";
 choices[98][2] = "Aquella en la que todos los elementos de una red se comunican siguiendo unas prioridades.";
 choices[98][3] = "Aquella que a nivel l&oacute;gico integra redes localizadas en diferentes redes externas.";
 answers[98] = choices[98][0];
 units[98] = "107";
 comments[98] = "Id Pregunta: 11737. ";


//  Id pregunta: 11755 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[99]= new Array();
 choices[99][0] = "OS1: Fibra monomodo, con una relaci&oacute;n n&uacute;cleo/revestimiento de 9/125 ?m. Supera distancias de 100 Km trabajando a 10 Gbps.";
 choices[99][1] = "OM1 (Optical Multimode 1): fibra &oacute;ptica multimodo, con relaci&oacute;n 62.5/125 ?m. Alcanza distancias m&aacute;ximas de 3000 metros a 10 Gbps.";
 choices[99][2] = "OM2: relaci&oacute;n 50/125 ?m, permite distancias m&aacute;ximas aproximadas de 500 metros a 1 Gbps.";
 choices[99][3] = "Ninguna es correcta";
 answers[99] = choices[99][2];
 units[99] = "99";
 comments[99] = "Id Pregunta: 11755. ";


