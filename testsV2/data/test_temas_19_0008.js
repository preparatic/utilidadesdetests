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

//  Id pregunta: 2978 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  &iquest;Cu&aacute;s de los siguientes estandares de redes de &aacute;rea local se caracterizan por ir sobre 2 pares trenzados apantallados";
 choices[0]= new Array();
 choices[0][0] = "1000BaseLX";
 choices[0][1] = "1000BaseSX";
 choices[0][2] = "1000BaseCX";
 choices[0][3] = "1000BaseT";
 answers[0] = choices[0][2];
 units[0] = "101";
 comments[0] = "Id Pregunta: 2978. Examen Julio 2003";


//  Id pregunta: 2983 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  En la redes de ordenadores, en la topolog&iacute;a en estrella:";
 choices[1]= new Array();
 choices[1][0] = "Un ordenador se conecta al siguiente y el &uacute;ltimo al primero, formando un circulo cerrado";
 choices[1][1] = "Existe un nodo raiz del que cuelgan uno o varios nodos";
 choices[1][2] = "Existe un nodo central o hub al que se conectan todos los ordenadores";
 choices[1][3] = "Cada uno de los nodos est&aacute; conectado con todos los demas";
 answers[1] = choices[1][2];
 units[1] = "101";
 comments[1] = "Id Pregunta: 2983. NULL";


//  Id pregunta: 2985 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  &iquest;Cu&aacute;s de los siguientes servicios no proporciona el nivel de aplicaci&oacute;n en el modelo OSI de ISO?";
 choices[2]= new Array();
 choices[2][0] = "Determinaci&oacute;n de la calidad de servicio aceptable";
 choices[2][1] = "Acuerdo sobre los mecanismos de privacidad";
 choices[2][2] = "Reglas gramaticales para representaci&oacute;n de los datos y est&aacute;ndares acordados  para obtener  informaci&oacute;n entendible entre sistemas (ASCII, EDIC, ASN.1 )";
 choices[2][3] = "Selecci&oacute;n de la disciplina de di&aacute;logo, incluyendo los procedimientos de iniciaci&oacute;n y liberaci&oacute;n";
 answers[2] = choices[2][2];
 units[2] = "100";
 comments[2] = "Id Pregunta: 2985. Es la capa de presentaci&oacute;n la que se encarga de la sintaxis";


//  Id pregunta: 2987 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  Un spanning tree es";
 choices[3]= new Array();
 choices[3][0] = "Un &aacute;rbol de recubrimiento de una red";
 choices[3][1] = "Un arbol de decisi&oacute;n para algoritmos de inteligencia artificial como id3";
 choices[3][2] = "Un &aacute;rbol de resoluci&oacute;n en l&oacute;gica";
 choices[3][3] = "Un &aacute;rbol de perif&eacute;ricos de un puerto USB";
 answers[3] = choices[3][0];
 units[3] = "101, 102";
 comments[3] = "Id Pregunta: 2987. ";


//  Id pregunta: 3041 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;Entre qu&eacute; niveles de la arquitectura TCP/IP se encuentra el protocolo SSL (Secure Socket Layer)?:";
 choices[4]= new Array();
 choices[4][0] = "Por encima del nivel de aplicaci&oacute;n";
 choices[4][1] = "Al mismo nivel que el nivel de aplicaci&oacute;n";
 choices[4][2] = "Entre el nivel de aplicaci&oacute;n y TCP";
 choices[4][3] = "Entre TCP e IP";
 answers[4] = choices[4][2];
 units[4] = "100";
 comments[4] = "Id Pregunta: 3041. NULL";


//  Id pregunta: 3050 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;Qu&eacute; inconvenientes presenta la transmisi&oacute;n de informaci&oacute;n mediante rayo l&aacute;ser?:";
 choices[5]= new Array();
 choices[5][0] = "Posible causa de accidentes";
 choices[5][1] = "Coste excesivamente elevado";
 choices[5][2] = "Afectada fuertemente por condiciones climatol&oacute;gicas";
 choices[5][3] = "Genera fuertes interferencias electromagn&eacute;ticas en otros aparatos";
 answers[5] = choices[5][2];
 units[5] = "99";
 comments[5] = "Id Pregunta: 3050. ";


//  Id pregunta: 3086 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Podemos definir protocolo como:";
 choices[6]= new Array();
 choices[6][0] = "Conjunto de reglas que controlan el intercambio de informaci&oacute;n entre entidades heterog&eacute;neas, tanto en la transmisi&oacute;n como en el control y recuperaci&oacute;n de errores";
 choices[6][1] = "Conjunto de reglas que controlan el intercambio de informaci&oacute;n  entre entidades homog&eacute;neas";
 choices[6][2] = "Conjunto de reglas responsables de la comunicaci&oacute;n directa entre 2 sistemas a trav&eacute;s del medio f&iacute;sico que los mantiene conectados";
 choices[6][3] = "Conjunto de reglas que permiten identificar de forma &uacute;nica e inequ&iacute;voca a un nodo o host";
 answers[6] = choices[6][1];
 units[6] = "100";
 comments[6] = "Id Pregunta: 3086. Seg&uacute;n el modelo OSI un protocolo establece reglas organizadas y convenidas entre entidades pares (horizontal)";


//  Id pregunta: 3108 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &quot;Red con un alto grado de cohesi&oacute;n y transparencia que hace que el usuario no vea a las funciones como repartidas entre los distintos elementos de la red&quot;. Es la definici&oacute;n de:";
 choices[7]= new Array();
 choices[7][0] = "Sistema abierto";
 choices[7][1] = "Sistema distribuido";
 choices[7][2] = "Intranet  ";
 choices[7][3] = "Sistema aut&oacute;nomo";
 answers[7] = choices[7][1];
 units[7] = "100";
 comments[7] = "Id Pregunta: 3108. NULL";


//  Id pregunta: 3118 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;A qu&eacute; se denomina Hub en una red local?:";
 choices[8]= new Array();
 choices[8][0] = "A un conector que sirve para unir cada ordenador con el cableado principal";
 choices[8][1] = "A un dispositivo que tiene como funci&oacute;n concentrar el cableado de la red";
 choices[8][2] = "A un dispositivo que tiene como funci&oacute;n convertir cableado en modo balanceado a modo no balanceado";
 choices[8][3] = "A un terminador que tiene como funci&oacute;n adaptar impedancias";
 answers[8] = choices[8][1];
 units[8] = "102";
 comments[8] = "Id Pregunta: 3118. ";


//  Id pregunta: 3125 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;C&oacute;mo se identifica generalmente una estaci&oacute;n Ethernet?:";
 choices[9]= new Array();
 choices[9][0] = "Mediante la direcci&oacute;n Ethernet que el gestor de la red le asigna";
 choices[9][1] = "Mediante la configuraci&oacute;n de su sistema operativo para configurar su identificaci&oacute;n en la red";
 choices[9][2] = "Mediante la asignaci&oacute;n por el fabricante de la tarjeta de red de una direcci&oacute;n Ethernet &uacute;nica y exclusiva";
 choices[9][3] = "Mediante la asignaci&oacute;n aleatoria que cada usuario de la estaci&oacute;n puede realizar";
 answers[9] = choices[9][2];
 units[9] = "100";
 comments[9] = "Id Pregunta: 3125. La direcci&oacute;n MAC ,compuesta de 48 bits, identifica un&iacute;vocamente a la tarjeta de red. . Los 24 primeros bits son asignados por el IEE y los 24 &uacute;ltimos por el fabricante";


//  Id pregunta: 3156 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Cu&aacute;l de las siguientes afirmaciones es incorrecta respecto a los dispositivos a usar en la interconexi&oacute;n de redes locales?";
 choices[10]= new Array();
 choices[10][0] = "Los conmutadores se utilizan para resolver problemas de rendimiento de la red debido a anchos de banda peque&ntilde;os y embotellamientos";
 choices[10][1] = "Los encaminadores o routers son independientes del protocolo, ya que se sit&uacute;an en el nivel de red y eligen la ruta m&aacute;s eficiente de cada paquete que reciben";
 choices[10][2] = "El protocolo &quot;spanning tree&quot; tiene como misi&oacute;n evitar la formaci&oacute;n de bucles en la interconexi&oacute;n de elementos de una red";
 choices[10][3] = "Los repetidores obligan a que los 2 segmentos que interconectan tenga el mismo acceso al medio, la misma direcci&oacute;n de red y trabaje con los mismos protocolos";
 answers[10] = choices[10][1];
 units[10] = "102";
 comments[10] = "Id Pregunta: 3156. NULL";


//  Id pregunta: 3167 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Cu&aacute;l de las siguientes direcciones IPv6 es correcta?";
 choices[11]= new Array();
 choices[11][0] = ":FF56::12::13D4";
 choices[11][1] = "15::78A1:9982";
 choices[11][2] = "AAB2:12::15H3:149";
 choices[11][3] = "1234:5678:9012:3456:7890:1234:5678";
 answers[11] = choices[11][1];
 units[11] = "99";
 comments[11] = "Id Pregunta: 3167. NULL";


//  Id pregunta: 3171 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  &iquest;Cu&aacute;l de las siguientes funciones corresponder&iacute;an al nivel de red en el Modelo de referencia OSI?:";
 choices[12]= new Array();
 choices[12][0] = "Compartici&oacute;n de circuito f&iacute;sico";
 choices[12][1] = "Establecimiento de varias comunicaciones simult&aacute;neas";
 choices[12][2] = "Cifrado de datos";
 choices[12][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[12] = choices[12][3];
 units[12] = "100";
 comments[12] = "Id Pregunta: 3171. NULL";


//  Id pregunta: 3181 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  &iquest;Cu&aacute;l de las siguientes respuestas es falsa respecto a los medios f&iacute;sicos de transmisi&oacute;n de informaci&oacute;n?:";
 choices[13]= new Array();
 choices[13][0] = "Con cableado de par trenzado se pueden alcanzar varios megabits por segundo";
 choices[13][1] = "El cable coaxial se utiliza para redes de &aacute;rea local";
 choices[13][2] = "La fibra &oacute;ptica monomodo es m&aacute;s barata que la fibra &oacute;ptica multimodo";
 choices[13][3] = "La propagaci&oacute;n de las microondas se ve afectada por los fen&oacute;menos atmosf&eacute;ricos";
 answers[13] = choices[13][2];
 units[13] = "99";
 comments[13] = "Id Pregunta: 3181. NULL";


//  Id pregunta: 3189 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  Dentro del modelo OSI la funci&oacute;n de 'compatibilizaci&oacute;n de ficheros de distintos formatos', corresponde al nivel:";
 choices[14]= new Array();
 choices[14][0] = "Nivel de red";
 choices[14][1] = "Nivel de transporte";
 choices[14][2] = "Nivel de sesi&oacute;n";
 choices[14][3] = "Nivel de presentaci&oacute;n";
 answers[14] = choices[14][3];
 units[14] = "100";
 comments[14] = "Id Pregunta: 3189. NULL";


//  Id pregunta: 3192 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  Dentro del modelo OSI la funci&oacute;n de 'mantener la secuencialidad de la informaci&oacute;n', corresponde al nivel:";
 choices[15]= new Array();
 choices[15][0] = "Nivel de red";
 choices[15][1] = "Nivel de transporte";
 choices[15][2] = "Nivel de sesi&oacute;n";
 choices[15][3] = "Nivel de presentaci&oacute;n";
 answers[15] = choices[15][0];
 units[15] = "100";
 comments[15] = "Id Pregunta: 3192. NULL";


//  Id pregunta: 3193 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  Dentro del modelo OSI la funci&oacute;n de 'permitir a un usuario entrar en un sistema remoto a tiempo compartido, o transferir ficheros entre dos m&aacute;quinas', corresponde al nivel:";
 choices[16]= new Array();
 choices[16][0] = "Nivel de red";
 choices[16][1] = "Nivel de transporte";
 choices[16][2] = "Nivel de sesi&oacute;n";
 choices[16][3] = "Nivel de presentaci&oacute;n";
 answers[16] = choices[16][2];
 units[16] = "100";
 comments[16] = "Id Pregunta: 3193. NULL";


//  Id pregunta: 3205 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  El cable coaxial Thick, comunmente conocido como 'amarillo':";
 choices[17]= new Array();
 choices[17][0] = "Sigue el est&aacute;ndar 10 Base 2";
 choices[17][1] = "Tiene un terminador tipo BNC";
 choices[17][2] = "Presenta una impedancia de 50 Ohm.";
 choices[17][3] = "Ninguna de las anteriores";
 answers[17] = choices[17][2];
 units[17] = "99";
 comments[17] = "Id Pregunta: 3205. NULL";


//  Id pregunta: 3269 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  &iquest;En qu&eacute; nivel del modelo de Referencia OSI se llevar&iacute;a a cabo el cifrado de datos?:";
 choices[18]= new Array();
 choices[18][0] = "Nivel 5 : Comunicaci&oacute;n";
 choices[18][1] = "Nivel 2 : Enlace";
 choices[18][2] = "Nivel 6 : Presentaci&oacute;n";
 choices[18][3] = "Nivel 4 : Transporte";
 answers[18] = choices[18][2];
 units[18] = "100";
 comments[18] = "Id Pregunta: 3269. ";


//  Id pregunta: 3275 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  &iquest;Qu&eacute; afirmaci&oacute;n de las siguientes es verdadera en relaci&oacute;n con las funciones de conexi&oacute;n del modelo OSI?";
 choices[19]= new Array();
 choices[19][0] = "El multiplexado es la conexi&oacute;n de varias conexiones de nivel N en una conexi&oacute;n de nivel N-1";
 choices[19][1] = "La concatenaci&oacute;n consiste en unir varias N-PDU en una (N-1)PDU";
 choices[19][2] = "La segmentaci&oacute;n consiste en dividir una N-SDU en varias (N-1)SDU";
 choices[19][3] = "El reensamblado es la operaci&oacute;n contraria a la concatenaci&oacute;n";
 answers[19] = choices[19][0];
 units[19] = "100";
 comments[19] = "Id Pregunta: 3275. ";


//  Id pregunta: 3292 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  &iquest;Qu&eacute; funci&oacute;n cumple el punto de referencia S en RDSI?:";
 choices[20]= new Array();
 choices[20][0] = "Conexi&oacute;n de un TR1 a un TR2";
 choices[20][1] = "Conexi&oacute;n de un TE1 o un TA a un TR2";
 choices[20][2] = "Conexi&oacute;n de un TE2 a un TR2";
 choices[20][3] = "Conexi&oacute;n de un TE1 a un TE2";
 answers[20] = choices[20][1];
 units[20] = "103";
 comments[20] = "Id Pregunta: 3292. ";


//  Id pregunta: 3306 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  &iquest;Qu&eacute; punto de referencia es el interfaz f&iacute;sico y l&oacute;gico entre Terminales dise&ntilde;ados para conectarse directamente a la RDSI como los tel&eacute;fonos digitales RDSI, &oacute; Adaptadores de Terminal, con una Terminaci&oacute;n de Red de tipo 2?:";
 choices[21]= new Array();
 choices[21][0] = "R";
 choices[21][1] = "S";
 choices[21][2] = "T";
 choices[21][3] = "U";
 answers[21] = choices[21][1];
 units[21] = "103";
 comments[21] = "Id Pregunta: 3306. ";


//  Id pregunta: 3345 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  CSMA/CD es:";
 choices[22]= new Array();
 choices[22][0] = "Un m&eacute;todo de paso de testigo en bus";
 choices[22][1] = "Un sistema operativo no propietario";
 choices[22][2] = "Un m&eacute;todo de detecci&oacute;n de se&ntilde;al en bus";
 choices[22][3] = "Un m&eacute;todo de paso de testigo en anillo";
 answers[22] = choices[22][2];
 units[22] = "101";
 comments[22] = "Id Pregunta: 3345. ";


//  Id pregunta: 3354 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  De las siguientes direcciones IP para Internet s&oacute;lo una puede asignarse de forma correcta seg&uacute;n las normas que regulan el formato de estas direcciones:";
 choices[23]= new Array();
 choices[23][0] = "1";
 choices[23][1] = "198.70.8.255";
 choices[23][2] = "64.3.53.255";
 choices[23][3] = "640.13.53.40";
 answers[23] = choices[23][2];
 units[23] = "100";
 comments[23] = "Id Pregunta: 3354. NULL";


//  Id pregunta: 3377 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  El est&aacute;ndar X.25 usa, a nivel de enlace, el protocolo:";
 choices[24]= new Array();
 choices[24][0] = "SDLC";
 choices[24][1] = "LAP-B";
 choices[24][2] = "Ethernet";
 choices[24][3] = "SAP";
 answers[24] = choices[24][1];
 units[24] = "100, 101, 109";
 comments[24] = "Id Pregunta: 3377. ";


//  Id pregunta: 3425 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Indicar entre las siguientes normas del IEEE la que trata sobre redes de banda ancha";
 choices[25]= new Array();
 choices[25][0] = "802.6";
 choices[25][1] = "802.7";
 choices[25][2] = "802.8";
 choices[25][3] = "802.9";
 answers[25] = choices[25][1];
 units[25] = "101";
 comments[25] = "Id Pregunta: 3425. ";


//  Id pregunta: 3427 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  Indicar entre las siguientes normas del IEEE la que trata sobre redes inal&aacute;mbricas:";
 choices[26]= new Array();
 choices[26][0] = "802.10";
 choices[26][1] = "802.11";
 choices[26][2] = "802.12";
 choices[26][3] = "802.13";
 answers[26] = choices[26][1];
 units[26] = "101";
 comments[26] = "Id Pregunta: 3427. ";


//  Id pregunta: 3432 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  Indicar la respuesta verdadera respecto a la pila de protocolos TCP/IP:";
 choices[27]= new Array();
 choices[27][0] = "NNTP usa UDP";
 choices[27][1] = "NTP utiliza &uacute;nicamente TCP";
 choices[27][2] = "FTP utiliza TCP";
 choices[27][3] = "NTP no es necesario en un entorno multihost";
 answers[27] = choices[27][2];
 units[27] = "100";
 comments[27] = "Id Pregunta: 3432. NULL";


//  Id pregunta: 3440 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  El protocolo ARP es:";
 choices[28]= new Array();
 choices[28][0] = "Automatic Resolution Protocol, Protocolo de resoluci&oacute;n autom&aacute;tica";
 choices[28][1] = "Adress Reservation Protocol, protocolo de reserva de direcciones";
 choices[28][2] = "Address Resolution Protocol, protocolo de resoluci&oacute;n de direcciones";
 choices[28][3] = "Automatic Response Protocol, protocolo de respuesta autom&aacute;tica";
 answers[28] = choices[28][2];
 units[28] = "102";
 comments[28] = "Id Pregunta: 3440. ";


//  Id pregunta: 3454 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  El protocolo IP se dise&ntilde;&oacute; en la RFC:";
 choices[29]= new Array();
 choices[29][0] = "793";
 choices[29][1] = "791";
 choices[29][2] = "768";
 choices[29][3] = "821";
 answers[29] = choices[29][1];
 units[29] = "100";
 comments[29] = "Id Pregunta: 3454. NULL";


//  Id pregunta: 3474 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  El teorema del muestreo, que nos indica la frecuencia con la que debemos muestrear una se&ntilde;al para no perder informaci&oacute;n al digitalizarla, es debido a:";
 choices[30]= new Array();
 choices[30][0] = "Shannon";
 choices[30][1] = "Oppenheim";
 choices[30][2] = "Shafer";
 choices[30][3] = "Nyquist";
 answers[30] = choices[30][3];
 units[30] = "99";
 comments[30] = "Id Pregunta: 3474. *: Teorema Nyquist";


//  Id pregunta: 3532 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  En las LAN el proceso 'token passing' o paso de testigo supone:";
 choices[31]= new Array();
 choices[31][0] = "Escuchar el tr&aacute;fico del testigo y transmitir si no se detecta nada";
 choices[31][1] = "Utilizar la posesi&oacute;n del testigo para garantizar el derecho a transmitir";
 choices[31][2] = "A&ntilde;adir tramas de testigo a las tramas de datos para acceder a la red";
 choices[31][3] = "El testigo circula en un anillo hasta que alcanza su destino";
 answers[31] = choices[31][1];
 units[31] = "101";
 comments[31] = "Id Pregunta: 3532. ";


//  Id pregunta: 3556 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  En telecomunicaciones se emplea mucho el concepto matem&aacute;tico de 'transformada'. &iquest;Podr&iacute;a decir a qu&eacute; se refiere este concepto?";
 choices[32]= new Array();
 choices[32][0] = "Es un cambio en la modulaci&oacute;n de la se&ntilde;al al pasar por las bobinas de 4 hilos.";
 choices[32][1] = "Es una operaci&oacute;n matem&aacute;tica que expresa una ecuaci&oacute;n en otros t&eacute;rminos mucho m&aacute;s f&aacute;cilmente tratables por un ordenador y m&aacute;s intuitivamente comprensibles por el ser humano.";
 choices[32][2] = "Es un cambio de base de las cantidades para poder operar con ellas en l&oacute;gica digital.";
 choices[32][3] = "Nada de lo anterior es cierto.";
 answers[32] = choices[32][1];
 units[32] = "99";
 comments[32] = "Id Pregunta: 3556. NULL";


//  Id pregunta: 3575 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  En una red de &aacute;rea local que utiliza la t&eacute;cnica de acceso al medio conocida como contienda, una de las siguientes afirmaciones es falsa. Se&ntilde;&aacute;lela:";
 choices[33]= new Array();
 choices[33][0] = "Se pueden producir colisiones";
 choices[33][1] = "Cualquier estaci&oacute;n de la Red de &Aacute;rea Local puede transmitir en cualquier momento";
 choices[33][2] = "Se pueden establecer prioridades";
 choices[33][3] = "Ofrece buen rendimiento a baja carga";
 answers[33] = choices[33][2];
 units[33] = "101";
 comments[33] = "Id Pregunta: 3575. ";


//  Id pregunta: 3638 AÃ±o de creación de pregunta: 2002-01-01
 questions[34]= "35)  La representaci&oacute;n autom&aacute;tica de IPv4 sobre IPv6 (para que nodos &quot;s&oacute;lo IPv4&quot; puedan trabajar con IPv6) se expresa con la notaci&oacute;n:";
 choices[34]= new Array();
 choices[34][0] = "::&lt;direcci&oacute;n_IPv4&gt;";
 choices[34][1] = "::FFFF:&lt;direcci&oacute;n_IPv4&gt;";
 choices[34][2] = ":&lt;direcci&oacute;n_IPv4&gt;";
 choices[34][3] = "&lt;direcci&oacute;n_IPv4&gt;::";
 answers[34] = choices[34][1];
 units[34] = "100";
 comments[34] = "Id Pregunta: 3638. NULL";


//  Id pregunta: 3697 AÃ±o de creación de pregunta: 2002-01-01
 questions[35]= "36)  Las diversas tecnolog&iacute;as usadas en red local y metropolitanas se han popularizado mediante diversos nombres y normas. Indique la opci&oacute;n correcta o si lo son todas ellas:";
 choices[35]= new Array();
 choices[35][0] = "Las redes Token Ring se caracterizan por tener una topolog&iacute;a en anillo l&oacute;gico y la norma que cumple es IEEE 802.4";
 choices[35][1] = "La red FDDI est&aacute; definida como una red en anillo f&iacute;sico y est&aacute; amparada por la norma ISO-9314";
 choices[35][2] = "Las redes Token Bus se caracterizan por tener una topolog&iacute;a en anillo f&iacute;sico y estar amparadas por la norma IEEE 802.3";
 choices[35][3] = "Todas las respuestas anteriores son ciertas";
 answers[35] = choices[35][1];
 units[35] = "101";
 comments[35] = "Id Pregunta: 3697. ";


//  Id pregunta: 3705 AÃ±o de creación de pregunta: 2002-01-01
 questions[36]= "37)  Las siglas UTP corresponden a:";
 choices[36]= new Array();
 choices[36][0] = "Cable coaxial fino";
 choices[36][1] = "Cable coaxial grueso";
 choices[36][2] = "Fibra &oacute;ptica sin apantallar";
 choices[36][3] = "Par trenzado sin apantallar";
 answers[36] = choices[36][3];
 units[36] = "99";
 comments[36] = "Id Pregunta: 3705. ";


//  Id pregunta: 3793 AÃ±o de creación de pregunta: 2002-01-01
 questions[37]= "38)  Respecto a los enrutadores, encaminadores o 'routers' se puede afirmar que:";
 choices[37]= new Array();
 choices[37][0] = "En la red de &aacute;rea local, son imprescindibles entre los ordenadores personales y su servidor";
 choices[37][1] = "Facilitan la uni&oacute;n a nivel f&iacute;sico entre dos redes distintas 10baseT y SNA";
 choices[37][2] = "Unen dos redes locales a nivel de red , ya que se suele decir que son equipos h&iacute;bridos";
 choices[37][3] = "Unen las redes WAN o MAN que tienen igual subnivel de control LLC";
 answers[37] = choices[37][2];
 units[37] = "102";
 comments[37] = "Id Pregunta: 3793. ";


//  Id pregunta: 3830 AÃ±o de creación de pregunta: 2002-01-01
 questions[38]= "39)  Si alguien habla de &quot;la arquitectura DNA&quot; se est&aacute; refiriendo a:";
 choices[38]= new Array();
 choices[38][0] = "Un modelo de inteligencia artificial basado en algoritmos gen&eacute;ticos";
 choices[38][1] = "Una determinada arquitectura de red registrada por una compa&ntilde;&iacute;a privada";
 choices[38][2] = "Una determinada arquitectura de red normalizada por ISO";
 choices[38][3] = "Un tipo de procesador RISC";
 answers[38] = choices[38][1];
 units[38] = "101";
 comments[38] = "Id Pregunta: 3830. ";


//  Id pregunta: 3836 AÃ±o de creación de pregunta: 2002-01-01
 questions[39]= "40)  SOAP es:";
 choices[39]= new Array();
 choices[39][0] = "Synchronized Objects Application Protocol, protocolo de aplicaci&oacute;n sincronizada para objetos";
 choices[39][1] = "System Open Access Protocol, protocolo de acceso abierto a sistemas";
 choices[39][2] = "Simple Object Access Protocol, protocolo de acceso simple a objetos";
 choices[39][3] = "SOAP no se corresponde con ningun acr&oacute;nimo aplicable en tecnolog&iacute;a";
 answers[39] = choices[39][2];
 units[39] = "113";
 comments[39] = "Id Pregunta: 3836. ";


//  Id pregunta: 3861 AÃ±o de creación de pregunta: 2004-01-01
 questions[40]= "41)  Cu&aacute;l no es una caracter&iacute;stica de IPv6";
 choices[40]= new Array();
 choices[40][0] = "Tama&ntilde;o de paquete m&aacute;ximo de 64 Kb";
 choices[40][1] = "Soporte para autenticaci&oacute;n y privacidad";
 choices[40][2] = "Aumenta el tama&ntilde;o de las tablas de enrutado";
 choices[40][3] = "Elimina el checksum del paquete";
 answers[40] = choices[40][2];
 units[40] = "100";
 comments[40] = "Id Pregunta: 3861. Tanenbaum";


//  Id pregunta: 3887 AÃ±o de creación de pregunta: 2003-01-01
 questions[41]= "42)  &iquest;Qu&eacute; significa aplicaciones de tres niveles en la arquitectura Cliente/Servidor?";
 choices[41]= new Array();
 choices[41][0] = "La l&oacute;gica de presentaci&oacute;n, la l&oacute;gica de aplicaci&oacute;n y la l&oacute;gica de datos se pueden distribuir entre los m&uacute;ltiples procesadores de la red.";
 choices[41][1] = "Los servicios de presentaci&oacute;n, la l&oacute;gica de aplicaci&oacute;n y el acceso a datos se ejecutan en la estaci&oacute;n cliente mientras que la base de datos est&aacute; situada f&iacute;sicamente en el servidor.";
 choices[41][2] = "La gesti&oacute;n de datos, la l&oacute;gica de aplicaci&oacute;n y la l&oacute;gica de presentaci&oacute;n se encuentran en el servidor mientras que los servicios de presentaci&oacute;n se hallan en el cliente.";
 choices[41][3] = "En una arquitectura Cliente/Servidor no existen aplicaciones a tres niveles.";
 answers[41] = choices[41][0];
 units[41] = "113";
 comments[41] = "Id Pregunta: 3887. ";


//  Id pregunta: 3890 AÃ±o de creación de pregunta: 2003-01-01
 questions[42]= "43)  En el Modelo de referencia para la interconexi&oacute;n de sistemas abiertos (OSI), indicar cu&aacute;l de los siguientes niveles no soporta la funci&oacute;n o servicio de correcci&oacute;n de errores:";
 choices[42]= new Array();
 choices[42][0] = "F&iacute;sico";
 choices[42][1] = "Enlace";
 choices[42][2] = "Red";
 choices[42][3] = "Aplicaci&oacute;n";
 answers[42] = choices[42][0];
 units[42] = "100";
 comments[42] = "Id Pregunta: 3890. NULL";


//  Id pregunta: 3894 AÃ±o de creación de pregunta: 2003-01-01
 questions[43]= "44)  En un servicio primario RDSI se pueden constituir los siguientes canales:";
 choices[43]= new Array();
 choices[43][0] = "30 canales de voz o datos tipo B de 64 Kbps cada uno y un canal de se&ntilde;alizaci&oacute;n tipo D a 64 Kbps.";
 choices[43][1] = "30 canales de voz o datos tipo B de 64 Kbps cada uno y 2 canales de se&ntilde;alizaci&oacute;n tipo D a 16 Kbps.";
 choices[43][2] = " 32 canales de voz o datos tipo B de 64 Kbps cada uno y un canal de se&ntilde;alizaci&oacute;n tipo D a 64 Kbps.";
 choices[43][3] = "32 canales de voz o datos tipo B de 64 Kbps cada uno y 2 canales de se&ntilde;alizaci&oacute;n tipo D a 16 Kbps.";
 answers[43] = choices[43][0];
 units[43] = "103";
 comments[43] = "Id Pregunta: 3894. Junta Andaluc&iacute;a";


//  Id pregunta: 3939 AÃ±o de creación de pregunta: 2003-01-01
 questions[44]= "45)  &iquest;Qu&eacute; influy&oacute; en el origen de XML?";
 choices[44]= new Array();
 choices[44][0] = "SGML y SOAP";
 choices[44][1] = "SGML";
 choices[44][2] = "SGML y HTTP";
 choices[44][3] = "http y SGML";
 answers[44] = choices[44][1];
 units[44] = "100";
 comments[44] = "Id Pregunta: 3939. ";


//  Id pregunta: 3949 AÃ±o de creación de pregunta: 2003-01-01
 questions[45]= "46)  En las redes basadas en servidores centrales que utilizan el modelo b&aacute;sico cliente-servidor:";
 choices[45]= new Array();
 choices[45][0] = "Un ordenador pone sus recursos a disposici&oacute;n del resto de ordenadores de la red, de forma que cada estaci&oacute;n recupera datos del servidor y los procesa como si fuesen locales";
 choices[45][1] = "Cada ordenador conectado a la red puede compartir la informaci&oacute;n y los recursos determinados previamente con los dem&aacute;s ordenadores de la red";
 choices[45][2] = "Los ordenadores utilizan enlaces a trav&eacute;s de los puertos serie o paralelo para transferir archivos o compartir perif&eacute;ricos";
 choices[45][3] = "Los ordenadores se encuentran conectados permanentemente entre s&iacute;, a trav&eacute;s de un sistema cerrado punto a punto";
 answers[45] = choices[45][0];
 units[45] = "100";
 comments[45] = "Id Pregunta: 3949. NULL";


//  Id pregunta: 3977 AÃ±o de creación de pregunta: 2006-01-01
 questions[46]= "47)  En relaci&oacute;n a los cables de par trenzado UTP y STP, indique cu&aacute;l de las siguientes afirmaciones es cierta.";
 choices[46]= new Array();
 choices[46][0] = "Las categor&iacute;as 1 y 2 de UTP se emplean para transmisi&oacute;n de datos X.25";
 choices[46][1] = "La categor&iacute;a 4 de UTP especifica cables hasta 20 MHz, se utilizan para voz y datos hasta 16 Mbps";
 choices[46][2] = "El tipo 6 de cable STP emplea 4 pares trenzados de mayor calibre que los de tipo 1";
 choices[46][3] = "Los cables STP, a pesar de su menor inmunidad a las interferencias, son los de mayor implantaci&oacute;n en los cableados estructurados.";
 answers[46] = choices[46][1];
 units[46] = "99";
 comments[46] = "Id Pregunta: 3977. ";


//  Id pregunta: 3985 AÃ±o de creación de pregunta: 2006-01-01
 questions[47]= "48)  En las tramas 802.3 el pre&aacute;mbulo est&aacute; formado por:";
 choices[47]= new Array();
 choices[47][0] = "Un patr&oacute;n alternativo de unos y ceros";
 choices[47][1] = "El flag de sincronizaci&oacute;n 01111110";
 choices[47][2] = "El tipo de protocolo de nivel superior";
 choices[47][3] = "El c&oacute;digo de redundancia c&iacute;clica";
 answers[47] = choices[47][0];
 units[47] = "101";
 comments[47] = "Id Pregunta: 3985. ";


//  Id pregunta: 3987 AÃ±o de creación de pregunta: 2006-01-01
 questions[48]= "49)  Se&ntilde;ale la afirmaci&oacute;n verdadera acerca de la Multiplexaci&oacute;n CWDM:";
 choices[48]= new Array();
 choices[48][0] = "El plan de longitudes de onda define 18, pero s&oacute;lo son &uacute;tiles 16.";
 choices[48][1] = "La separaci&oacute;n entre longitudes de onda es de 50 nm y la m&aacute;xima distancia alcanza los 100 km si se emplean todos los canales.";
 choices[48][2] = "Las conexiones simult&aacute;neas que pueden transmitirse en una fibra &oacute;ptica tienen que cumplir el mismo protocolo a fin de impedir la interferencia entre canales.";
 choices[48][3] = "Puede transportar ATM, pero es incompatible con Gigabit Ethernet";
 answers[48] = choices[48][0];
 units[48] = "101";
 comments[48] = "Id Pregunta: 3987. ";


//  Id pregunta: 3995 AÃ±o de creación de pregunta: 2006-01-01
 questions[49]= "50)  En SNMP:";
 choices[49]= new Array();
 choices[49][0] = "El agente env&iacute;a al cliente comandos Get Response";
 choices[49][1] = "El origen de SNMP es SGMP";
 choices[49][2] = "Su arquitectura consiste en agente, objetos y cliente";
 choices[49][3] = "Todas son verdaderas";
 answers[49] = choices[49][3];
 units[49] = "104";
 comments[49] = "Id Pregunta: 3995. ";


//  Id pregunta: 4487 AÃ±o de creación de pregunta: 2007-01-01
 questions[50]= "51)  En un sistema de gesti&oacute;n de red, Ia base de datos MIB (Management Information Base):";
 choices[50]= new Array();
 choices[50][0] = "Identifica el elemento de administraci&oacute;n central de Ia red.";
 choices[50][1] = "Especifica los elementos y Ia parte de los datos que un nodo debe conservar, asi Como las operaciones que se permiten sobre cada uno de ellos";
 choices[50][2] = "Establece Ia conexi&oacute;n entre el nodo administrado y la estaci&oacute;n administradora central.";
 choices[50][3] = "Es una Unidad de Datos del Protocolo (6 PDU) de gesti&oacute;n de red.";
 answers[50] = choices[50][1];
 units[50] = "104";
 comments[50] = "Id Pregunta: 4487. ";


//  Id pregunta: 4540 AÃ±o de creación de pregunta: 2007-01-01
 questions[51]= "52)  El protocolo utilizado para gestionar un dispositivo en una red TCP/IP es:";
 choices[51]= new Array();
 choices[51][0] = "RCP";
 choices[51][1] = "SNMP";
 choices[51][2] = "SMTP";
 choices[51][3] = "ICMP";
 answers[51] = choices[51][1];
 units[51] = "100";
 comments[51] = "Id Pregunta: 4540. ";


//  Id pregunta: 4646 AÃ±o de creación de pregunta: 2007-01-01
 questions[52]= "53)  Dentro del protocolo de Ia capa de transporte TCP (Transmision Control Protocol&quot;) cual de las siguientes primitivas no es de solicitud de servicio:";
 choices[52]= new Array();
 choices[52][0] = "Active open";
 choices[52][1] = "Send";
 choices[52][2] = "Open success";
 choices[52][3] = "Allocate";
 answers[52] = choices[52][2];
 units[52] = "100";
 comments[52] = "Id Pregunta: 4646. ";


//  Id pregunta: 4969 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  &iquest;Cu&aacute;l de las siguientes redes no admite asignar niveles de prioridad en el tr&aacute;fico transmitido?:";
 choices[53]= new Array();
 choices[53][0] = "802.6.";
 choices[53][1] = "802.3.";
 choices[53][2] = "802.4.";
 choices[53][3] = "802.5.";
 answers[53] = choices[53][1];
 units[53] = "101";
 comments[53] = "Id Pregunta: 4969. Examen TIC B 2007";


//  Id pregunta: 5266 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  802.13 es el est&aacute;ndar IEEE referente a";
 choices[54]= new Array();
 choices[54][0] = "USB sin hilos";
 choices[54][1] = "WiMax";
 choices[54][2] = "Bluetooth";
 choices[54][3] = "Ninguna de las anteriores";
 answers[54] = choices[54][3];
 units[54] = "101";
 comments[54] = "Id Pregunta: 5266. ";


//  Id pregunta: 5273 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  La utilizaci&oacute;n de caracteres ajenos al alfabeto anglosaj&oacute;n en un nombre de dominio dentro de una red TCP/IP";
 choices[55]= new Array();
 choices[55][0] = "no es posible nunca";
 choices[55][1] = "solo es posible en redes privadas";
 choices[55][2] = "es posible en redes p&uacute;blicas y privadas que implementen la familia de RFCs relativas a los nombres de dominio internacionalizados";
 choices[55][3] = "es una posibilidad desde la creaci&oacute;n de la familia de protocolos pero que no ha sido desarrollada";
 answers[55] = choices[55][2];
 units[55] = "100";
 comments[55] = "Id Pregunta: 5273. ";


//  Id pregunta: 5276 AÃ±o de creación de pregunta: 2003-01-01
 questions[56]= "57)  Indique cu&aacute;l de los siguientes no es un servicio b&aacute;sico de la red SARA de las administraciones:";
 choices[56]= new Array();
 choices[56][0] = "SMTP";
 choices[56][1] = "PROXY";
 choices[56][2] = "DHCP";
 choices[56][3] = "DNS";
 answers[56] = choices[56][2];
 units[56] = "103";
 comments[56] = "Id Pregunta: 5276. ";


//  Id pregunta: 5569 AÃ±o de creación de pregunta: 2003-01-01
 questions[57]= "58)  &iquest;A qu&eacute; se dedica el grupo de trabajo 802.21 del IEEE?";
 choices[57]= new Array();
 choices[57][0] = "Grupo asesor en regulaci&oacute;n radioel&eacute;ctrica";
 choices[57][1] = "Grupo asesor en coexistencia de est&aacute;ndares 802";
 choices[57][2] = "Resilient Packet Ring";
 choices[57][3] = "Traspaso entre redes";
 answers[57] = choices[57][3];
 units[57] = "101";
 comments[57] = "Id Pregunta: 5569. ";


//  Id pregunta: 5572 AÃ±o de creación de pregunta: 2003-01-01
 questions[58]= "59)  &iquest;C&uacute;al de los siguientes protocolos de encaminamiento NO es interno?";
 choices[58]= new Array();
 choices[58][0] = "BGP";
 choices[58][1] = "EIGRP";
 choices[58][2] = "OSPF";
 choices[58][3] = "IGRP";
 answers[58] = choices[58][0];
 units[58] = "102";
 comments[58] = "Id Pregunta: 5572. ";


//  Id pregunta: 5606 AÃ±o de creación de pregunta: 2003-01-01
 questions[59]= "60)  &iquest;En qu&eacute; Real Decreto se establece la elaboraci&oacute;n de un Plan Director de Telecomunicaciones como herramienta de planificaci&oacute;n en el &aacute;mbito de cada departamento ministerial?";
 choices[59]= new Array();
 choices[59][0] = "En el RD 551/2001";
 choices[59][1] = "En el 541/2002";
 choices[59][2] = "En el 451/2002";
 choices[59][3] = "En el 541/2001";
 answers[59] = choices[59][3];
 units[59] = "104";
 comments[59] = "Id Pregunta: 5606. ";


//  Id pregunta: 5845 AÃ±o de creación de pregunta: 2009-01-01
 questions[60]= "61)  En referencia a los grupos de trabajo IEEE 802, indique cu&aacute;l de los siguientes grupos est&aacute; relacionado con las redes m&oacute;viles inal&aacute;mbricas de banda ancha (MBWA):";
 choices[60]= new Array();
 choices[60][0] = "802.3";
 choices[60][1] = "802.11";
 choices[60][2] = "802.15";
 choices[60][3] = "802.20";
 answers[60] = choices[60][3];
 units[60] = "101";
 comments[60] = "Id Pregunta: 5845. MAP 2008 A1";


//  Id pregunta: 5975 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  Suponga que dos sistemas A y B est&aacute;n conectados mediante un enlace transcontinental de capacidad C=64 Mbps y retardo de propagaci&oacute;n Rp=2 ms. A comienza a transmitir a B un fichero de 15 MB. &iquest;Cu&aacute;ntos octetos ha transmitido A cuando el primer bit de la transmisi&oacute;n llega a B?";
 choices[61]= new Array();
 choices[61][0] = "128.000.";
 choices[61][1] = "32.000.";
 choices[61][2] = "16.000.";
 choices[61][3] = "4.000.";
 answers[61] = choices[61][2];
 units[61] = "99";
 comments[61] = "Id Pregunta: 5975. TIC A 2009";


//  Id pregunta: 5976 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  &iquest;Cu&aacute;l de los siguientes es un servidor web basado en software de c&oacute;digo abierto?";
 choices[62]= new Array();
 choices[62][0] = "Internet Information Server.";
 choices[62][1] = "Weblogic.";
 choices[62][2] = "Websphere.";
 choices[62][3] = "Apache.";
 answers[62] = choices[62][3];
 units[62] = "113";
 comments[62] = "Id Pregunta: 5976. TIC A 2009";


//  Id pregunta: 6490 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  Respecto al direccionamiento en el protocolo TCP, se puede afirmar que:";
 choices[63]= new Array();
 choices[63][0] = "La cabecera TCP incluye las direcciones IP origen y destino";
 choices[63][1] = "La cabecera TCP incluye las direcciones origen y destino y los puertos TCP origen y destino";
 choices[63][2] = "La cabecera TPC incluye los puertos TCP origen y destino";
 choices[63][3] = "La cabecera TCP no incluye ning&uacute;n elemento asociado al direccionamiento de las conexiones del nivel de transporte";
 answers[63] = choices[63][2];
 units[63] = "100";
 comments[63] = "Id Pregunta: 6490. Castilla La Mancha 2009";


//  Id pregunta: 6580 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  IPv6";
 choices[64]= new Array();
 choices[64][0] = "Proporciona un formato de cabecera m&aacute;s complejo";
 choices[64][1] = "Proporciona la posibilidad de a&ntilde;adir extensiones pero no opciones";
 choices[64][2] = "A&ntilde;ade posibilidades para gestionar la calidad de servicios";
 choices[64][3] = "Todas las respuestas anteriores son correctas";
 answers[64] = choices[64][2];
 units[64] = "100";
 comments[64] = "Id Pregunta: 6580. NULL";


//  Id pregunta: 7255 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  Seg&uacute;n la RFC 2373 correpondiente a la arquitectura de direccionamiento para IPv6. El prefijo que es usado para direcciones multidifusi&oacute;n (multicast) es";
 choices[65]= new Array();
 choices[65][0] = "3F";
 choices[65][1] = "FE";
 choices[65][2] = "FC";
 choices[65][3] = "FF";
 answers[65] = choices[65][3];
 units[65] = "100";
 comments[65] = "Id Pregunta: 7255. Examen TIC B 2009";


//  Id pregunta: 8291 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  Dada la red 193.163.14.192/27, podemos decir que: ";
 choices[66]= new Array();
 choices[66][0] = "La direcci&oacute;n de broadcast de dicha red es la 193.168.14.255.";
 choices[66][1] = "Admite hasta 30 hosts, sin contar las direcciones de identificaci&oacute;n de red y de broadcast.";
 choices[66][2] = "La direcci&oacute;n IP 193.168.14.225 pertenece a dicha red.";
 choices[66][3] = "Es una red con direccionamiento privado.";
 answers[66] = choices[66][1];
 units[66] = "100";
 comments[66] = "Id Pregunta: 8291. Examen TIC A2 2010";


//  Id pregunta: 8293 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  Entre las diferencias en los protocolos IPv4 e IPv6 NO se encuentra que:";
 choices[67]= new Array();
 choices[67][0] = "La implementaci&oacute;n del multicast es obligatoria en IPv6 y opcional en IPv4.";
 choices[67][1] = "MTU m&iacute;nimo de IPv6 es de 1280 bytes frente a los 576 bytes de IPv4.";
 choices[67][2] = "El encabezado de IPv6 sin opciones es menor que el encabezado de IPv4 sin opciones.";
 choices[67][3] = "El soporte para IPsec es obligatorio en IPv6 y opcional en IPv4.";
 answers[67] = choices[67][2];
 units[67] = "100";
 comments[67] = "Id Pregunta: 8293. Examen TIC A2 2010";


//  Id pregunta: 8326 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  El protocolo LAPB:";
 choices[68]= new Array();
 choices[68][0] = "Se implementa en la capa de aplicaci&oacute;n del modelo OSI";
 choices[68][1] = "Utiliza tramas con el mismo formato que HDLC";
 choices[68][2] = "Utiliza todo el juego de comandos de HDLC";
 choices[68][3] = "Se implementa en la capa de red del modelo OSI";
 answers[68] = choices[68][1];
 units[68] = "101";
 comments[68] = "Id Pregunta: 8326. Analista Ayto. Madrid 2010";


//  Id pregunta: 8385 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  &iquest;Cu&aacute;l de los siguientes protocolos de enrutamiento NO soporta VLSM (Variable Length Subnet Mask - M&aacute;scara de subred de tama&ntilde;o variable)?:";
 choices[69]= new Array();
 choices[69][0] = "RIPv2.";
 choices[69][1] = "EIGRP.";
 choices[69][2] = "IGRP.";
 choices[69][3] = "OSPF.";
 answers[69] = choices[69][2];
 units[69] = "112,102";
 comments[69] = "Id Pregunta: 8385. Examen TIC A2 2010";


//  Id pregunta: 8478 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  &iquest;Qu&eacute; tipo de codificaci&oacute;n se utiliza en las redes Ethernet?";
 choices[70]= new Array();
 choices[70][0] = "London";
 choices[70][1] = "Liverpool.";
 choices[70][2] = "Manchester.";
 choices[70][3] = "Boston.";
 answers[70] = choices[70][2];
 units[70] = "101";
 comments[70] = "Id Pregunta: 8478. Examen TIC A2 2010 interna";


//  Id pregunta: 8772 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  El protocolo PXE utiliza los siguientes protocolos:";
 choices[71]= new Array();
 choices[71][0] = "BOOTP/DHCP, FTP y TCP/IP.";
 choices[71][1] = "TFTP, TCP/IP y direccionamiento est&aacute;tico en los clientes.";
 choices[71][2] = "TCP/IP, BOOTP/DHCP y TFTP.";
 choices[71][3] = "Ninguna de las anteriores.";
 answers[71] = choices[71][2];
 units[71] = "100";
 comments[71] = "Id Pregunta: 8772. Examen UPM A2 2011";


//  Id pregunta: 8773 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  Se ha puesto un servicio de DHCP en una subred. &iquest;Es posible que otra subred pueda usar el servicio DHCP y que este servicio asigne direcciones a los clientes de ambas?";
 choices[72]= new Array();
 choices[72][0] = "No, porque solo funciona con broadcast las peticiones.";
 choices[72][1] = "Si, porque las peticiones son unicast y llegar&aacute;n al servidor de DHCP";
 choices[72][2] = "Es posible pero hace falta un DHCP Relay.";
 choices[72][3] = "Si, con solo configurar el servidor DHCP para servir a la otra subred.";
 answers[72] = choices[72][2];
 units[72] = "100";
 comments[72] = "Id Pregunta: 8773. Examen UPM A2 2011";


//  Id pregunta: 8887 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l de los siguientes no es tipo de primitiva?";
 choices[73]= new Array();
 choices[73][0] = "Received";
 choices[73][1] = "Indication";
 choices[73][2] = "Response";
 choices[73][3] = "Request";
 answers[73] = choices[73][0];
 units[73] = "100";
 comments[73] = "Id Pregunta: 8887. ";


//  Id pregunta: 8906 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  Dentro de las categor&iacute;as de cable con est&aacute;ndar oficial, &iquest;cu&aacute;l de las siguientes utilizar&iacute;a para implementar una red de &aacute;rea local con velocidad prevista de transmisi&oacute;n de 100Mbps? :";
 choices[74]= new Array();
 choices[74][0] = "Par trenzado sin apantallar Categor&iacute;a 2.";
 choices[74][1] = "UTP Categor&iacute;a 3.";
 choices[74][2] = "UTP Categor&iacute;a 5.";
 choices[74][3] = "Par trenzado sin apantallar categor&iacute;a 3";
 answers[74] = choices[74][2];
 units[74] = "99, 101";
 comments[74] = "Id Pregunta: 8906. Operador Ayto. Madrid 2010";


//  Id pregunta: 8911 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  &iquest;C&oacute;mo se expresan habitualmente las direcciones MAC?:";
 choices[75]= new Array();
 choices[75][0] = "En notaci&oacute;n decimal.";
 choices[75][1] = "En notaci&oacute;n hexadecimal.";
 choices[75][2] = "En notaci&oacute;n octal.";
 choices[75][3] = "En notaci&oacute;n binaria";
 answers[75] = choices[75][1];
 units[75] = "101";
 comments[75] = "Id Pregunta: 8911. Operador Ayto. Madrid 2010";


//  Id pregunta: 9332 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  Respecto a la tecnologia";
 choices[76]= new Array();
 choices[76][0] = "Dense WDM soporta menos canales que Coarse WDM y se usa en distancias mas cortas.";
 choices[76][1] = "Coarse WDM utiliza luz muy direccional para aprovechar el bajo numero de canales";
 choices[76][2] = "Dense WDM y Coarse WDM son tecnologias no interoperables";
 choices[76][3] = "Coarse WDM alcanza distancias de 1000 km";
 answers[76] = choices[76][2];
 units[76] = "99";
 comments[76] = "Id Pregunta: 9332. Corregida la respuesta A.";


//  Id pregunta: 9345 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  De entre las siguientes, existe una que no es una iniciativa comunitaria relacionada con el &aacute;mbito TIC:";
 choices[77]= new Array();
 choices[77][0] = "ISA";
 choices[77][1] = "eTIN";
 choices[77][2] = "IDAbc";
 choices[77][3] = "CIP 2007-2013";
 answers[77] = choices[77][1];
 units[77] = "103";
 comments[77] = "Id Pregunta: 9345. Fuente: Temario ASTIC p&aacute;gina 15 y ss 2011";


//  Id pregunta: 9360 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  &iquest;Cu&aacute;l de estas afirmaciones es cierta en relaci&oacute;n con las redes de &aacute;rea local?";
 choices[78]= new Array();
 choices[78][0] = "El subnivel LLC se encarga del control l&oacute;gico del enlace, por lo que gestiona el tipo de acceso al medio.";
 choices[78][1] = "El subnivel MAC controla el acceso al medio, creando una trama que se adapta a la topolog&iacute;a de la red f&iacute;sica.";
 choices[78][2] = "El subnivel MAC se encarga del control l&oacute;gico del enlace.";
 choices[78][3] = "El subnivel MAC es el responsable de las funciones de entramado, control de errores y control de flujo.";
 answers[78] = choices[78][1];
 units[78] = "101";
 comments[78] = "Id Pregunta: 9360. pag. 5 ASTIC 2011";


//  Id pregunta: 9361 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  De entre los diferentes tipos de CSMA (Carrier Sense Multiple Access), se puede afirmar:";
 choices[79]= new Array();
 choices[79][0] = "En CSMA 1-persistente, si el medio est&aacute; libre, el emisor transmite, si no, espera un tiempo aleatorio.";
 choices[79][1] = "En CSMA p-Persistente, el emisor escucha el canal y transmite tan pronto como &eacute;ste est&eacute; libre.";
 choices[79][2] = "En CSMA no-persistente, si el emisor tiene el canal libre, transmite con probabilidad &quot;p&quot; y si detecta que existe alguien transmitiendo, espera un tiempo aleatorio con probabilidad &quot;q=(1-p)&quot;";
 choices[79][3] = "En CSMA 1-persistente, el emisor escucha el canal y transmite tan pronto como &eacute;ste est&eacute; libre ";
 answers[79] = choices[79][3];
 units[79] = "101";
 comments[79] = "Id Pregunta: 9361. pag. 7 ASTIC 2011";


//  Id pregunta: 9365 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  Acerca de Fibre Channel, se puede decir:";
 choices[80]= new Array();
 choices[80][0] = "El protocolo sigue el model de referencia OSI.";
 choices[80][1] = "Es un protocolo con 5 capas. ";
 choices[80][2] = "La capa FC3 es la capa de mapeo de protocolo.";
 choices[80][3] = "Los routers en Fibre Channel operan en la capa 3.";
 answers[80] = choices[80][1];
 units[80] = "101, 48";
 comments[80] = "Id Pregunta: 9365. ";


//  Id pregunta: 9881 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  Se dispone de dos centros de proceso de datos (CPDs) separados una distancia de 80 km entre s&iacute;. En ambos CPDs se dispone de cabinas de almacenamiento SAN (Storage Area Network) que conforman un cluster geogr&aacute;fico entre s&iacute;. &iquest;Qu&eacute; tecnolog&iacute;a utilizar&iacute;a para unir ambas cabinas?";
 choices[81]= new Array();
 choices[81][0] = "CWDM, Coarse Wavelength Division Multiplexing.";
 choices[81][1] = "DWDM, Dense Wavelength Division Multiplexing.";
 choices[81][2] = "EWDM, Enhanced Wavelength Division Multiplexing.";
 choices[81][3] = "FWDM, Far Wavelength Division Multiplexing.";
 answers[81] = choices[81][1];
 units[81] = "99, 102";
 comments[81] = "Id Pregunta: 9881. TIC A1, Examen 2013";


//  Id pregunta: 9925 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  Respecto al protocolo HDLC, indique la falsa:";
 choices[82]= new Array();
 choices[82][0] = "Significa High-Level Data Link Control y est&aacute; basado en el ISO 3339.";
 choices[82][1] = "Usa transmisi&oacute;n s&iacute;ncrona y todos los intercambios se realizan a trav&eacute;s de tramas.";
 choices[82][2] = "Utiliza un formato &uacute;nico de tramas, tanto para datos como para informaci&oacute;n de control.";
 choices[82][3] = "Es el protocolo m&aacute;s importante para el enlace de datos, siendo la base para otros protocolos de nivel 2.";
 answers[82] = choices[82][0];
 units[82] = "100";
 comments[82] = "Id Pregunta: 9925. NULL";


//  Id pregunta: 10041 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  El est&aacute;ndar ANSI/TIA-942 establece distintos niveles en relaci&oacute;n a ciertos requisitos de seguridad en los Centros de Proceso de Datos (CPD). &iquest;Cu&aacute;l es el nivel m&aacute;s exigente?a) Tier 5 b) Tier 4";
 choices[83]= new Array();
 choices[83][0] = "Tier 5 ";
 choices[83][1] = "Tier 4";
 choices[83][2] = "Tier 3 ";
 choices[83][3] = "Tier 0";
 answers[83] = choices[83][1];
 units[83] = "99";
 comments[83] = "Id Pregunta: 10041. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10059 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  Seg&uacute;n la ANSI/TIA-942 el porcentaje de disponibilidad de 99.982% en un CPD corresponde a:";
 choices[84]= new Array();
 choices[84][0] = "TIER I ";
 choices[84][1] = "TIER II";
 choices[84][2] = "TIER III ";
 choices[84][3] = "TIER IV";
 answers[84] = choices[84][2];
 units[84] = "99";
 comments[84] = "Id Pregunta: 10059. TIC A2, libre, Examen 2013";


//  Id pregunta: 10115 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Cu&aacute;l de los siguientes contenedores SDH no es posible:";
 choices[85]= new Array();
 choices[85][0] = "STM-1";
 choices[85][1] = "STM-16";
 choices[85][2] = "STM-128";
 choices[85][3] = "STM-256";
 answers[85] = choices[85][2];
 units[85] = "101";
 comments[85] = "Id Pregunta: 10115. ";


//  Id pregunta: 10116 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Respecto al protocolo Spanning Tree Protocol , es falso que:";
 choices[86]= new Array();
 choices[86][0] = "Se usa para definir caminos &uacute;nicos en la red de Nivel 2";
 choices[86][1] = "Permite realizar encaminamiento entre nodos";
 choices[86][2] = "Evita bucles en la red.";
 choices[86][3] = "Converge m&aacute;s lentamente que RSTP";
 answers[86] = choices[86][1];
 units[86] = "101";
 comments[86] = "Id Pregunta: 10116. Es de nivel 2";


//  Id pregunta: 10296 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  En redes de &aacute;rea local, &iquest;cu&aacute;l de los siguientes es un m&eacute;todo de acceso al medio compartido con escucha porcontienda?";
 choices[87]= new Array();
 choices[87][0] = "Paso de testigo en anillo.";
 choices[87][1] = "CSMA no persistente.";
 choices[87][2] = "ALOHA ranurado.";
 choices[87][3] = "Contenci&oacute;n.";
 answers[87] = choices[87][1];
 units[87] = "101";
 comments[87] = "Id Pregunta: 10296. TIC A2, libre, examen 2013";


//  Id pregunta: 10300 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  Indicar de las siguientes, cu&aacute;l es una cabecera de extensi&oacute;n IPv6:";
 choices[88]= new Array();
 choices[88][0] = "Cabecera siguiente.";
 choices[88][1] = "Enrutamiento.";
 choices[88][2] = "Longitud de la carga &uacute;til.";
 choices[88][3] = "L&iacute;mite de saltos.";
 answers[88] = choices[88][1];
 units[88] = "100";
 comments[88] = "Id Pregunta: 10300. TIC A2, libre, examen 2013";


//  Id pregunta: 10670 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  En una granja de servidores:";
 choices[89]= new Array();
 choices[89][0] = "Los servidores suelen estar en localizaciones distintas.";
 choices[89][1] = "Los servidores se reparten las tareas que podr&iacute;a ejecutar un solo servidor.";
 choices[89][2] = "Suelen haber equipos de respaldo (backup)";
 choices[89][3] = "Ninguna de las anteriores.";
 answers[89] = choices[89][2];
 units[89] = "113";
 comments[89] = "Id Pregunta: 10670. ";


//  Id pregunta: 10801 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  Una red TCP usa el protocolo de ventana deslizante como mecanismo de control de flujo. Supongamos que se establece el tama&ntilde;o de la ventana en 4 y los paquetes se numeran del 1 en adelante. Con estas condiciones, el emisor podr&aacute; enviar al receptor el paquete n&uacute;mero 5:";
 choices[90]= new Array();
 choices[90][0] = "&Uacute;nicamente cuando reciba el ACK del paquete 4.";
 choices[90][1] = "Cuando haya recibido al menos dos ACK.";
 choices[90][2] = "Cuando reciba cualquier ACK.";
 choices[90][3] = "Cuando se cumpla el timeout de env&iacute;o del paquete 1.";
 answers[90] = choices[90][2];
 units[90] = "100";
 comments[90] = "Id Pregunta: 10801. Examen GSI 2014";


//  Id pregunta: 10896 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Diferencia entre el protocolo RIP v1 y RIP v2:";
 choices[91]= new Array();
 choices[91][0] = "RIP v1 es un protocolo de estado del enlace mientras que el RIP v2 es de vector de distancia.";
 choices[91][1] = "RIP v1 encapsula los mensajes en paquetes UDP y RIP v2 en paquetes TCP.";
 choices[91][2] = "RIP v1 no admite subredes y RIP v2 si las admite.";
 choices[91][3] = "RIP v1 es un protocolo de encaminamiento din&aacute;mico de tipo IGP Y RIP v2 es un protocolo de encaminamiento din&aacute;mico de tipo BGP.";
 answers[91] = choices[91][2];
 units[91] = "102";
 comments[91] = "Id Pregunta: 10896. Examen GSI 2014";


//  Id pregunta: 11567 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Las cabeceras de MPLS";
 choices[92]= new Array();
 choices[92][0] = "Pueden reutilizar campos de cabeceras de otros protocolos.";
 choices[92][1] = "Emplean enrutamiento desde origen por conmutaci&oacute;n de paquetes.";
 choices[92][2] = "Los routers son los mismos que se emplean en cualquier red IP";
 choices[92][3] = "La b y c son correctas.";
 answers[92] = choices[92][0];
 units[92] = "100";
 comments[92] = "Id Pregunta: 11567. NULL";


//  Id pregunta: 11568 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Protocolo que permite el aprendizaje de redes y evita que se produzcan bucles a nivel de enlace.";
 choices[93]= new Array();
 choices[93][0] = "802.1D";
 choices[93][1] = "802.Q";
 choices[93][2] = "Spanning Tree Algorithm";
 choices[93][3] = "Algotirmo de Dijkstra";
 answers[93] = choices[93][0];
 units[93] = "102";
 comments[93] = "Id Pregunta: 11568. Como pregunta por protocolo es la a), y no el algoritmo c) que utiliza dicho protocolo.";


//  Id pregunta: 11656 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Se&ntilde;ale la frase incorrecta:";
 choices[94]= new Array();
 choices[94][0] = "La versi&oacute;n 3 de SNMP proporciona mejoras en materia de seguridad con respecto a la versi&oacute;n 2.";
 choices[94][1] = "SNMP es un protocolo de la capa de aplicaci&oacute;n.";
 choices[94][2] = "Las versiones 1, 2 y 3 son compatibles entre s&iacute;.";
 choices[94][3] = "Los mensajes GetNextRequest se utilizan para recorrer una tabla de objetos.";
//  Id pregunta: 11684 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Cuando un switch recibe una trama y no posee la direcci&oacute;n de destino, el switch:";
 choices[95]= new Array();
 choices[95][0] = "env&iacute;a la trama por todos los puertos";
 choices[95][1] = "env&iacute;a un ARP para obtener la direcci&oacute;n de destino de la trama";
 choices[95][2] = "reenv&iacute;a la trama por todos los puertos, excepto por el que fue recibido";
 choices[95][3] = "descarta la trama";
 answers[95] = choices[95][2];
 units[95] = "100";
 comments[95] = "Id Pregunta: 11684. NULL";


//  Id pregunta: 11687 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Al conectar un PC y un HUB se debe usar:";
 choices[96]= new Array();
 choices[96][0] = "Straight-through cable";
 choices[96][1] = "Consola";
 choices[96][2] = "Crossover cable";
 choices[96][3] = "RJ 11";
 answers[96] = choices[96][0];
 units[96] = "99";
 comments[96] = "Id Pregunta: 11687. NULL";


//  Id pregunta: 11714 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Cu&aacute;les de los siguientes protocolos no incluye la suite PPP?";
 choices[97]= new Array();
 choices[97][0] = "LAPB";
 choices[97][1] = "HDLC";
 choices[97][2] = "LCP";
 choices[97][3] = "SDLC";
 answers[97] = choices[97][0];
 units[97] = "100";
 comments[97] = "Id Pregunta: 11714. NULL";


//  Id pregunta: 11721 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Qu&eacute; comando se puede utilizar en un PC con S.O. Windows para obtener la configuraci&oacute;n IP de ese equipo?";
 choices[98]= new Array();
 choices[98][0] = "ifconfig -a";
 choices[98][1] = "netstat -rn";
 choices[98][2] = "iptables -L";
 choices[98][3] = "ipconfig";
 answers[98] = choices[98][3];
 units[98] = "102";
 comments[98] = "Id Pregunta: 11721. NULL";


//  Id pregunta: 11754 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Cu&aacute;l de los siguientes tipos de cables no presenta apantallamiento?";
 choices[99]= new Array();
 choices[99][0] = "STP";
 choices[99][1] = "S/STP";
 choices[99][2] = "FTP";
 choices[99][3] = "UTP";
 answers[99] = choices[99][3];
 units[99] = "99";
 comments[99] = "Id Pregunta: 11754. ";


