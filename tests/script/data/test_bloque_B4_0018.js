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

//  Id pregunta: 752 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  A finales del a&ntilde;o 2003, la industria lanz&oacute; un est&aacute;ndar H.350 de videoconferencia con el fin de impulsar el despliegue de este tipo de sistemas. &iquest;Sabr&iacute;a indicar en qu&eacute; consiste fundamentalmente?";
 choices[0]= new Array();
 choices[0][0] = "Permite una conversaci&oacute;n y negociaci&oacute;n sobre la calidad de los terminales sobre un protocolo HTTP entre dos extremos remotos ";
 choices[0][1] = "Complementa el est&aacute;ndar H.323 para soportar transmisi&oacute;n por l&iacute;neas ADSL";
 choices[0][2] = "Define un servicio de directorio basado en LDAP para usuarios y equipos de videoconferencia.";
 choices[0][3] = "Todas las anteriores";
 answers[0] = choices[0][2];
 units[0] = "117";
 comments[0] = "Id Pregunta: 752. ";


//  Id pregunta: 2933 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  ECMAscript, con cu&aacute;l de los siguientes lenguajes de script se relaciona:";
 choices[1]= new Array();
 choices[1][0] = "JavaScript";
 choices[1][1] = "VBScript";
 choices[1][2] = "Jscript";
 choices[1][3] = "Perlscript";
 answers[1] = choices[1][0];
 units[1] = "114";
 comments[1] = "Id Pregunta: 2933. Similar a examen TIC MAP A 2004";


//  Id pregunta: 2935 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  &iquest;Cu&aacute;l es el est&aacute;ndar Gigabit Ethernet sobre 2 pares trenzados apantallados hasta una distancia de 25 m?";
 choices[2]= new Array();
 choices[2][0] = "1000BaseT";
 choices[2][1] = "1000BaseSX";
 choices[2][2] = "1000BaseLx";
 choices[2][3] = "1000BaseCX";
 answers[2] = choices[2][3];
 units[2] = "99";
 comments[2] = "Id Pregunta: 2935. Similar a examen TIC MAP A 2004";


//  Id pregunta: 2967 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  El sistema cableado del tipo conocido como de Par Trenzado sin Apantallar es:";
 choices[3]= new Array();
 choices[3][0] = "STP";
 choices[3][1] = "UTP";
 choices[3][2] = "FTP";
 choices[3][3] = "OM1";
 answers[3] = choices[3][1];
 units[3] = "99";
 comments[3] = "Id Pregunta: 2967. NULL";


//  Id pregunta: 2999 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  En 1988, la CCITT cre&oacute; el est&aacute;ndar X.500, sobre servicios de directorio que, posteriormente, fue adoptado por la ISO. El est&aacute;ndar X.500 organiza las entradas en el directorio de manera:";
 choices[4]= new Array();
 choices[4][0] = "Asociativa";
 choices[4][1] = "Jer&aacute;rquica";
 choices[4][2] = "En estrella";
 choices[4][3] = "Como una pila FIFO";
 answers[4] = choices[4][1];
 units[4] = "106";
 comments[4] = "Id Pregunta: 2999. ";


//  Id pregunta: 3018 AÃ±o de creación de pregunta: 2004-01-01
 questions[5]= "6)  Seg&uacute;n la ley 9/2014 general de telecomunicaciones, qu&eacute; organismo regular&aacute; los mercados de telecomunicaciones";
 choices[5]= new Array();
 choices[5][0] = "El ministerio de industria";
 choices[5][1] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia.";
 choices[5][2] = "Agencia Nacional de Radiocomunicaciones";
 choices[5][3] = "ninguna de las anteriores";
 answers[5] = choices[5][1];
 units[5] = "110";
 comments[5] = "Id Pregunta: 3018. ";


//  Id pregunta: 3028 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Qu&eacute; son dentro del entorno de aplicaciones basadas en arquitectura Internet los plug-ins?:";
 choices[6]= new Array();
 choices[6][0] = "Programas que desarrolla el usuario para personalizar el acceso a la informaci&oacute;n del servidor";
 choices[6][1] = "Programas que se agregan al navegador e interact&uacute;an con &eacute;l, con las p&aacute;ginas web y con los recursos locales";
 choices[6][2] = "Posibilidad de a&ntilde;adir nuevo hardware a trav&eacute;s del navegador de manera autom&aacute;tica";
 choices[6][3] = "Ninguna de las anteriores";
 answers[6] = choices[6][1];
 units[6] = "114";
 comments[6] = "Id Pregunta: 3028. ";


//  Id pregunta: 3033 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes afirmaciones no es cierta en una aplicaci&oacute;n web?:";
 choices[7]= new Array();
 choices[7][0] = "Las p&aacute;ginas ASP se ejecutan en el servidor web";
 choices[7][1] = "Los componentes ActiveX se ejecutan en el cliente";
 choices[7][2] = "Los componentes CGI se ejecutan en el servidor";
 choices[7][3] = "Los applets de Java se ejecutan en el servidor";
 answers[7] = choices[7][3];
 units[7] = "114";
 comments[7] = "Id Pregunta: 3033. ";


//  Id pregunta: 3075 AÃ±o de creación de pregunta: 2005-01-01
 questions[8]= "9)  La disponibilidad de un sistema se define como:";
 choices[8]= new Array();
 choices[8][0] = "La proporci&oacute;n de tiempo en la que es realmente utilizado";
 choices[8][1] = "El cociente entre el tiempo medio de reparaci&oacute;n y el tiempo medio entre fallos";
 choices[8][2] = "El porcentaje de tiempo que el sistema est&aacute; disponible";
 choices[8][3] = "La probabilidad de que un sistema falle en un instante dado";
 answers[8] = choices[8][2];
 units[8] = "45";
 comments[8] = "Id Pregunta: 3075. Definici&oacute;n dada en Magerit V2";


//  Id pregunta: 3089 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  Se dice que una tarea o rutina es as&iacute;ncrona cuando:";
 choices[9]= new Array();
 choices[9][0] = "Gestiona un enlace de terminales 'tontos'";
 choices[9][1] = "Lanza una transacci&oacute;n a un terminal as&iacute;ncrono y espera su contestaci&oacute;n";
 choices[9][2] = "La tarea que la lanza no espera a su terminaci&oacute;n para continuar";
 choices[9][3] = "Son rutinas especializadas de los Sistemas de Tiempo Real dedicadas a la supervis&oacute;n de eventos en los elementos anal&oacute;gicos que controlan";
 answers[9] = choices[9][2];
 units[9] = "112";
 comments[9] = "Id Pregunta: 3089. ";


//  Id pregunta: 3114 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;A qu&eacute; nivel OSI corresponden las funciones de encaminamiento?:";
 choices[10]= new Array();
 choices[10][0] = "El nivel de enlace";
 choices[10][1] = "El nivel de red";
 choices[10][2] = "El nivel de transporte";
 choices[10][3] = "El nivel de sesi&oacute;n";
 answers[10] = choices[10][1];
 units[10] = "100";
 comments[10] = "Id Pregunta: 3114. NULL";


//  Id pregunta: 3270 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;En qu&eacute; nivel OSI act&uacute;an los repetidores?";
 choices[11]= new Array();
 choices[11][0] = "Enlace";
 choices[11][1] = "Red";
 choices[11][2] = "Transporte";
 choices[11][3] = "F&iacute;sico";
 answers[11] = choices[11][3];
 units[11] = "100";
 comments[11] = "Id Pregunta: 3270. ";


//  Id pregunta: 3287 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  &iquest;Qu&eacute; es SDH?";
 choices[12]= new Array();
 choices[12][0] = "una familia de protocolos para transportar se&ntilde;ales digitales multimedia";
 choices[12][1] = "un conjunto de especificaciones de tasas de transmisi&oacute;n que transportan s&iacute;ncronamente se&ntilde;ales digitales de diferentes capacidades";
 choices[12][2] = "una torre de protocolos propietaria similar a SNA";
 choices[12][3] = "un conjunto de est&aacute;ndares americanos de transporte de se&ntilde;ales digitales entre sistemas digitales";
 answers[12] = choices[12][1];
 units[12] = "109";
 comments[12] = "Id Pregunta: 3287. ";


//  Id pregunta: 3306 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  &iquest;Qu&eacute; punto de referencia es el interfaz f&iacute;sico y l&oacute;gico entre Terminales dise&ntilde;ados para conectarse directamente a la RDSI como los tel&eacute;fonos digitales RDSI, &oacute; Adaptadores de Terminal, con una Terminaci&oacute;n de Red de tipo 2?:";
 choices[13]= new Array();
 choices[13][0] = "R";
 choices[13][1] = "S";
 choices[13][2] = "T";
 choices[13][3] = "U";
 answers[13] = choices[13][1];
 units[13] = "103";
 comments[13] = "Id Pregunta: 3306. ";


//  Id pregunta: 3327 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  A la tecnolog&iacute;a que permite a un abonado disfrutar de servicios propios de su operadora cuando est&aacute; en itinerancia en otra operadora nacional o extranjera con la que se tengan acuerdos de roaming, se denomina:";
 choices[14]= new Array();
 choices[14][0] = "USSD";
 choices[14][1] = "CAMEL";
 choices[14][2] = "VHE";
 choices[14][3] = "I-Roaming";
 answers[14] = choices[14][1];
 units[14] = "107";
 comments[14] = "Id Pregunta: 3327. NULL";


//  Id pregunta: 3356 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  De los cuatro octetos que forman una direcci&oacute;n del protocolo IP indicar en qu&eacute; clase de red se utiliza un octeto para los n&uacute;meros de host:";
 choices[15]= new Array();
 choices[15][0] = "Clase B";
 choices[15][1] = "Clase D";
 choices[15][2] = "Clase A";
 choices[15][3] = "Clase C";
 answers[15] = choices[15][3];
 units[15] = "100";
 comments[15] = "Id Pregunta: 3356. NULL";


//  Id pregunta: 3446 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  El protocolo de gesti&oacute;n SNMP opera sobre el protocolo:";
 choices[16]= new Array();
 choices[16][0] = "UDP";
 choices[16][1] = "TCP";
 choices[16][2] = "&quot;a&quot; y &quot;b&quot; son ciertas";
 choices[16][3] = "&quot;a&quot; y &quot;b&quot; son falsas";
 answers[16] = choices[16][0];
 units[16] = "104";
 comments[16] = "Id Pregunta: 3446. ";


//  Id pregunta: 3451 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  El protocolo FTP (File Transfer Protocol):";
 choices[17]= new Array();
 choices[17][0] = "Tiene asignado el puerto 23";
 choices[17][1] = "Tiene asignados los puertos 20 y 21";
 choices[17][2] = "Tiene asignado el puerto 25";
 choices[17][3] = "Tiene asignado el puerto 80";
 answers[17] = choices[17][1];
 units[17] = "112";
 comments[17] = "Id Pregunta: 3451. ";


//  Id pregunta: 3477 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  El tiempo que tarda un terminal en poner una trama en la red:";
 choices[18]= new Array();
 choices[18][0] = "En las redes Ethernet no depende de la ocupaci&oacute;n de su segmento de red";
 choices[18][1] = "Es mejor en una red Token Ring que en una Ethernet si la red est&aacute; muy cargada";
 choices[18][2] = "No tiene cota m&aacute;xima en una red Token Bus";
 choices[18][3] = "Tiene una cota m&aacute;xima en una red Ethernet";
 answers[18] = choices[18][1];
 units[18] = "101";
 comments[18] = "Id Pregunta: 3477. ";


//  Id pregunta: 3483 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  El tr&aacute;fico vocal GSM suele calcularse para estimaciones de potencias y coberturas de se&ntilde;al en base a una f&oacute;rmula. &iquest;Cu&aacute;l es?:";
 choices[19]= new Array();
 choices[19][0] = "La f&oacute;rmula de Poisson";
 choices[19][1] = "La f&oacute;rmula de Okumura-Hata";
 choices[19][2] = "La f&oacute;rmula Erlang B";
 choices[19][3] = "La f&oacute;rmula Erlang C";
 answers[19] = choices[19][2];
 units[19] = "108";
 comments[19] = "Id Pregunta: 3483. ";


//  Id pregunta: 3517 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  En el tipo de conmutaci&oacute;n de paquetes conocido como datagrama:";
 choices[20]= new Array();
 choices[20][0] = "Los paquetes no han de llegar ordenados";
 choices[20][1] = "Se establece un enlace l&oacute;gico entre emisor y receptor";
 choices[20][2] = "Los mensajes no se trocean";
 choices[20][3] = "Los paquetes han de llegar ordenados";
 answers[20] = choices[20][0];
 units[20] = "101";
 comments[20] = "Id Pregunta: 3517. ";


//  Id pregunta: 3559 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  En Token Ring , un monitor activo:";
 choices[21]= new Array();
 choices[21][0] = "Transmite mensajes de monitorizaci&oacute;n a cada servidor en el anillo para facilitar el balance de carga entre ellos";
 choices[21][1] = "Espera por los mensajes de error, entonces env&iacute;a mensajes de notificaci&oacute;n para limitar (o reordenar) el tr&aacute;fico";
 choices[21][2] = "Escucha la prioridad del testigo y cuando se detecta, reserva la prioridad para la estaci&oacute;n emisora";
 choices[21][3] = "Elimina las tramas no recogidas y es el punto central de informaci&oacute;n de 'timing' para un anillo";
 answers[21] = choices[21][3];
 units[21] = "101";
 comments[21] = "Id Pregunta: 3559. ";


//  Id pregunta: 3608 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  La funci&oacute;n de asociar sesiones con conexiones de transporte corresponde a:";
 choices[22]= new Array();
 choices[22][0] = "Nivel 3 Red";
 choices[22][1] = "Nivel 4 Transporte";
 choices[22][2] = "Nivel 5 Sesi&oacute;n";
 choices[22][3] = "Nivel 6 Presentaci&oacute;n";
 answers[22] = choices[22][1];
 units[22] = "100";
 comments[22] = "Id Pregunta: 3608. NULL";


//  Id pregunta: 3621 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  La norma IEEE 802.4 es la especificaci&oacute;n que define la redes:";
 choices[23]= new Array();
 choices[23][0] = "Ethernet";
 choices[23][1] = "Token bus";
 choices[23][2] = "Token ring";
 choices[23][3] = "FDDI";
 answers[23] = choices[23][1];
 units[23] = "101";
 comments[23] = "Id Pregunta: 3621. ";


//  Id pregunta: 3696 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Las direcciones IPv6 tienen una longitud de:";
 choices[24]= new Array();
 choices[24][0] = "32 bits";
 choices[24][1] = "128 bits";
 choices[24][2] = "64 bits";
 choices[24][3] = "48 bits";
 answers[24] = choices[24][1];
 units[24] = "100";
 comments[24] = "Id Pregunta: 3696. NULL";


//  Id pregunta: 3731 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Los nodos B en UMTS son equivalentes a:";
 choices[25]= new Array();
 choices[25][0] = "SGSN en GPRS";
 choices[25][1] = "MSC en GSM";
 choices[25][2] = "BTS en GSM";
 choices[25][3] = "SMSC en GSM";
 answers[25] = choices[25][2];
 units[25] = "108";
 comments[25] = "Id Pregunta: 3731. ";


//  Id pregunta: 3771 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  PCM es:";
 choices[26]= new Array();
 choices[26][0] = "Modulaci&oacute;n por codificaci&oacute;n de pulsos";
 choices[26][1] = "M&oacute;biles adaptados al uso con ordenadores personales";
 choices[26][2] = "Modulaci&oacute;n por codificaci&oacute;n de fase";
 choices[26][3] = "Personalizaci&oacute;n de canales multimedia";
 answers[26] = choices[26][0];
 units[26] = "99";
 comments[26] = "Id Pregunta: 3771. *:PCM";


//  Id pregunta: 3772 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  PGP, o Pretty Good Privacy:";
 choices[27]= new Array();
 choices[27][0] = "Fue desarrollado por Phil Zimmerman";
 choices[27][1] = "Utiliza IDEA o MD5 como encriptacion";
 choices[27][2] = "Utiliza TripleDES Como encriptacion";
 choices[27][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[27] = choices[27][0];
 units[27] = "106";
 comments[27] = "Id Pregunta: 3772. ";


//  Id pregunta: 3814 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  Se&ntilde;ale cu&aacute;l de las siguientes no es una arquitectura de comunicaciones:";
 choices[28]= new Array();
 choices[28][0] = "SNA";
 choices[28][1] = "SMTP";
 choices[28][2] = "OSI";
 choices[28][3] = "TCP/IP";
 answers[28] = choices[28][1];
 units[28] = "100";
 comments[28] = "Id Pregunta: 3814. NULL";


//  Id pregunta: 3946 AÃ±o de creación de pregunta: 2003-01-01
 questions[29]= "30)  El protocolo Internet versi&oacute;n 6 (IPv6) define un espacio de direcciones de:";
 choices[29]= new Array();
 choices[29][0] = "32 bits";
 choices[29][1] = "64 bits";
 choices[29][2] = "128 bits";
 choices[29][3] = "Ninguno de los anteriores";
 answers[29] = choices[29][2];
 units[29] = "100";
 comments[29] = "Id Pregunta: 3946. ";


//  Id pregunta: 3991 AÃ±o de creación de pregunta: 2006-01-01
 questions[30]= "31)  Respecto a los protocolos de routing:";
 choices[30]= new Array();
 choices[30][0] = "El protocolo de vector distancia es de routing interno (Interior Gateway Protocol).";
 choices[30][1] = "El IS-IS es utilizado como est&aacute;ndar de Internet.";
 choices[30][2] = "OSPF utiliza &aacute;reas dentro de un sistema aut&oacute;nomo, creando jerarqu&iacute;as.";
 choices[30][3] = "Todas son falsas";
 answers[30] = choices[30][0];
 units[30] = "102";
 comments[30] = "Id Pregunta: 3991. ";


//  Id pregunta: 3995 AÃ±o de creación de pregunta: 2006-01-01
 questions[31]= "32)  En SNMP:";
 choices[31]= new Array();
 choices[31][0] = "El agente env&iacute;a al cliente comandos Get Response";
 choices[31][1] = "El origen de SNMP es SGMP";
 choices[31][2] = "Su arquitectura consiste en agente, objetos y cliente";
 choices[31][3] = "Todas son verdaderas";
 answers[31] = choices[31][3];
 units[31] = "104";
 comments[31] = "Id Pregunta: 3995. ";


//  Id pregunta: 4028 AÃ±o de creación de pregunta: 2006-01-01
 questions[32]= "33)  Respecto a Frame Relay, que es verdadero respecto al CIR";
 choices[32]= new Array();
 choices[32][0] = "Todos los PVC deben tener el mismo CIR";
 choices[32][1] = "Es la velocidad que la red se compromete a  servir como minimo";
 choices[32][2] = "Es el volumen de tr&aacute;fico adicional sobre el volumen alcanzable.";
 choices[32][3] = "Es la velocidad m&aacute;xima de acceso a la red.";
 answers[32] = choices[32][1];
 units[32] = "109";
 comments[32] = "Id Pregunta: 4028. ";


//  Id pregunta: 4086 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  El formato para im&aacute;genes GIF";
 choices[33]= new Array();
 choices[33][0] = "Se basa en un algoritmo de compresi&oacute;n patentado, lo que te&oacute;ricamente limita su uso";
 choices[33][1] = "Significa Graphic Interleaved Format (Formato Gr&aacute;fico Entrelazado)";
 choices[33][2] = "Fue creado por Microsoft";
 choices[33][3] = "Ninguna de las anteriores es correcta";
 answers[33] = choices[33][0];
 units[33] = "114";
 comments[33] = "Id Pregunta: 4086. ";


//  Id pregunta: 4097 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  Con que tecnolog&iacute;a no se puede implementar una arquitectura SOA";
 choices[34]= new Array();
 choices[34][0] = "J2EE";
 choices[34][1] = ".Net";
 choices[34][2] = "Software Libre";
 choices[34][3] = "Se puede con todas las anteriores";
 answers[34] = choices[34][3];
 units[34] = "116";
 comments[34] = "Id Pregunta: 4097. ";


//  Id pregunta: 4107 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  La burbuja de las puntocom explot&oacute;:";
 choices[35]= new Array();
 choices[35][0] = "En el a&ntilde;o 1999";
 choices[35][1] = "A finales del 1999 y durante el 2000";
 choices[35][2] = "A finales del 2000 y durante el 2001";
 choices[35][3] = "A finales del 2001 y durante el 2002";
 answers[35] = choices[35][2];
 units[35] = "112";
 comments[35] = "Id Pregunta: 4107. ";


//  Id pregunta: 4137 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  El estandar de seguridad ubicado en la capa de procesamiento de paquetes en lugar de en la capa de aplicaci&oacute;n se llama";
 choices[36]= new Array();
 choices[36][0] = "SSL";
 choices[36][1] = "HTTPS";
 choices[36][2] = "FTP pasivo";
 choices[36][3] = "IPSec";
 answers[36] = choices[36][3];
 units[36] = "111";
 comments[36] = "Id Pregunta: 4137. NULL";


//  Id pregunta: 4179 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  Caso de utilizar un &uacute;nico m&eacute;todo, se economizan cintas con backups de tipo";
 choices[37]= new Array();
 choices[37][0] = "Completo";
 choices[37][1] = "Diferencial";
 choices[37][2] = "Incremental";
 choices[37][3] = "Es indiferente";
 answers[37] = choices[37][2];
 units[37] = "97";
 comments[37] = "Id Pregunta: 4179. NULL";


//  Id pregunta: 4349 AÃ±o de creación de pregunta: 2007-01-01
 questions[38]= "39)  La red de investigaci&oacute;n espa&ntilde;ola encargada de dar servicio Internet a universidades y centros de investigaci&oacute;n es:";
 choices[38]= new Array();
 choices[38][0] = "La intranet del CSIC";
 choices[38][1] = "No existe una red propia de investigaci&oacute;n, utilizando los servicios que ofrece Internet.";
 choices[38][2] = "RedIRIS.";
 choices[38][3] = "La Intranet Administrativa.";
 answers[38] = choices[38][2];
 units[38] = "103";
 comments[38] = "Id Pregunta: 4349. ";


//  Id pregunta: 4487 AÃ±o de creación de pregunta: 2007-01-01
 questions[39]= "40)  En un sistema de gesti&oacute;n de red, Ia base de datos MIB (Management Information Base):";
 choices[39]= new Array();
 choices[39][0] = "Identifica el elemento de administraci&oacute;n central de Ia red.";
 choices[39][1] = "Especifica los elementos y Ia parte de los datos que un nodo debe conservar, asi Como las operaciones que se permiten sobre cada uno de ellos";
 choices[39][2] = "Establece Ia conexi&oacute;n entre el nodo administrado y la estaci&oacute;n administradora central.";
 choices[39][3] = "Es una Unidad de Datos del Protocolo (6 PDU) de gesti&oacute;n de red.";
 answers[39] = choices[39][1];
 units[39] = "104";
 comments[39] = "Id Pregunta: 4487. ";


//  Id pregunta: 4542 AÃ±o de creación de pregunta: 2007-01-01
 questions[40]= "41)  La concesi&oacute;n por un municipio de una licencia de establecimiento de instalaci&oacute;n de una antena previa a la aprobaci&oacute;n del Plan Territorial de Despliegue de Red que incluya a dicha antena, ser&aacute;:";
 choices[40]= new Array();
 choices[40][0] = "Nula de pleno derecho.";
 choices[40][1] = "Valida a todos los efectos.";
 choices[40][2] = "Valida si el Plan Territorial de Despliegue de Red que incluye a dicha antena se aprueba durante el mes siguiente a Ia concesi&oacute;n.";
 choices[40][3] = "Nula si la antena no se aprueba en el mes siguiente a contar desde Ia fecha de la concesi&oacute;n de la licencia.";
 answers[40] = choices[40][0];
 units[40] = "110";
 comments[40] = "Id Pregunta: 4542. ";


//  Id pregunta: 4545 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  Indique cual de las siguientes afirmaciones es falsa:";
 choices[41]= new Array();
 choices[41][0] = "El sistema GPRS permite el env&iacute;o de paquetes de datos sobre la red GSM.";
 choices[41][1] = "El sistema GPRS utiliza los mismos recursos de la interfaz radio del sistema GSM.";
 choices[41][2] = "En una misma celda no pueden coexistir canales GPRS y GSM.";
 choices[41][3] = "Un canal GPRS solo se asigna al usuario cuando se transmiten o reciben paquetes, mientras que un canal GSM se asigna de forma permanente al usuario durante toda la llamada.";
 answers[41] = choices[41][2];
 units[41] = "108";
 comments[41] = "Id Pregunta: 4545. ";


//  Id pregunta: 4712 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  &iquest;Cu&aacute;l de los siguientes no es un t&eacute;rmino sobre Internet?";
 choices[42]= new Array();
 choices[42][0] = "Cookies.";
 choices[42][1] = "Spam.";
 choices[42][2] = "Netnannies.";
 choices[42][3] = "Brownies.";
 answers[42] = choices[42][3];
 units[42] = "112";
 comments[42] = "Id Pregunta: 4712. Examen 2006 JCYL";


//  Id pregunta: 4767 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  La diferencia esencial entre TCP y UDP es";
 choices[43]= new Array();
 choices[43][0] = "A diferencia de UDP, TCP dispone de mecanismos para el control de flujo y la transmisi&oacute;n fiable de paquetes";
 choices[43][1] = "A diferencia de UDP, TCP ofrece a la capa superior el servicio de multiplexaci&oacute;n por puerto";
 choices[43][2] = "A dferencia de UDP, TCP dispone de mecanismos para detectar errores de transmisi&oacute;n";
 choices[43][3] = "Todas las anteriores son ciertas";
 answers[43] = choices[43][0];
 units[43] = "100";
 comments[43] = "Id Pregunta: 4767. ";


//  Id pregunta: 5046 AÃ±o de creación de pregunta: 2003-01-01
 questions[44]= "45)  Indique cu&aacute;l de los siguientes NO es un tipo de EJB (&quot;Enterprise Java Beans&quot;) en J2EE 1.4:";
 choices[44]= new Array();
 choices[44][0] = "Beans de entidad";
 choices[44][1] = "Beans de aplicaci&oacute;n";
 choices[44][2] = "Beans de sesi&oacute;n";
 choices[44][3] = "Beans orientados a mensajes";
 answers[44] = choices[44][1];
 units[44] = "116";
 comments[44] = "Id Pregunta: 5046. Examen TIC A 2007";


//  Id pregunta: 5160 AÃ±o de creación de pregunta: 2003-01-01
 questions[45]= "46)  Un HUB es un dispositivo de interconexi&oacute;n utilizado para:";
 choices[45]= new Array();
 choices[45][0] = "Enlazar LANs separadas y proporcionar filtrado de paquetes entre ellas.";
 choices[45][1] = "Interconectar redes con protocolos y arquitecturas completamente diferentes, a todos los niveles de comunicaci&oacute;n.";
 choices[45][2] = "Concentrar y organizar el cableado en una red de &aacute;rea local.";
 choices[45][3] = "Controlar las comunicaciones, permit&eacute;ndolas o prohibi&eacute;ndolas seg&uacute;n las pol&iacute;ticas de red que haya definido la organizaci&oacute;n responsable de la red.";
 answers[45] = choices[45][2];
 units[45] = "102";
 comments[45] = "Id Pregunta: 5160. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5606 AÃ±o de creación de pregunta: 2003-01-01
 questions[46]= "47)  &iquest;En qu&eacute; Real Decreto se establece la elaboraci&oacute;n de un Plan Director de Telecomunicaciones como herramienta de planificaci&oacute;n en el &aacute;mbito de cada departamento ministerial?";
 choices[46]= new Array();
 choices[46][0] = "En el RD 551/2001";
 choices[46][1] = "En el 541/2002";
 choices[46][2] = "En el 451/2002";
 choices[46][3] = "En el 541/2001";
 answers[46] = choices[46][3];
 units[46] = "104";
 comments[46] = "Id Pregunta: 5606. ";


//  Id pregunta: 5608 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  Ventajas de la versi&oacute;n SNMPv3 sobre SNMPv2";
 choices[47]= new Array();
 choices[47][0] = "SNMPv2 presentaba debilidades en la recuperaci&oacute;n de grandes cantidades de informaci&oacute;n.";
 choices[47][1] = "Introduce mecanismos de autentificaci&oacute;n, privacidad y control de accesos m&aacute;s solidos";
 choices[47][2] = "SNMPv3 introdujo nuevas operaciones: GetBulk, Inform, Report";
 choices[47][3] = "Ninguna de las anteriores";
 answers[47] = choices[47][1];
 units[47] = "104";
 comments[47] = "Id Pregunta: 5608. ";


//  Id pregunta: 5938 AÃ±o de creación de pregunta: 2009-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l de estos no es un producto de virtualizaci&oacute;n de VMWare?";
 choices[48]= new Array();
 choices[48][0] = "VMWare Parallels";
 choices[48][1] = "VMWare ESXi";
 choices[48][2] = "VMWare Workstation";
 choices[48][3] = "VMWare Fusion";
 answers[48] = choices[48][0];
 units[48] = "119";
 comments[48] = "Id Pregunta: 5938. ";


//  Id pregunta: 6235 AÃ±o de creación de pregunta: 2010-01-01
 questions[49]= "50)  &iquest;Cu&aacute;l es el objetivo del Proyecto Mono de Ximian, actualmente impulsado por Novell?";
 choices[49]= new Array();
 choices[49][0] = "Crear una versi&oacute;n Java compatible con el Sistema Operativo GNU/Linux.";
 choices[49][1] = "Crear un Office open source, compatible con el Office de Microsoft.";
 choices[49][2] = "Crear un grupo de herramientas libres, basadas en GNU/Linux y compatibles con .NET seg&uacute;n lo especificado por el ECMA.";
 choices[49][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[49] = choices[49][2];
 units[49] = "115";
 comments[49] = "Id Pregunta: 6235. ";


//  Id pregunta: 6356 AÃ±o de creación de pregunta: 2010-01-01
 questions[50]= "51)  El registro de operadores creado al amparo de la Ley 32/2003, se crea dependiente de:";
 choices[50]= new Array();
 choices[50][0] = "La Comisi&oacute;n Nacional de Competencia";
 choices[50][1] = "La Secretaria de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n";
 choices[50][2] = "La Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos";
 choices[50][3] = "La Comisi&oacute;n del Mercado de las Telecomunicaciones";
 answers[50] = choices[50][3];
 units[50] = "110";
 comments[50] = "Id Pregunta: 6356. Art&iacute;culo 7 Ley 32/2003";


//  Id pregunta: 6474 AÃ±o de creación de pregunta: 2010-01-01
 questions[51]= "52)  &iquest;Cu&aacute;l de las plataformas desarrolladas por Java es una plataforma para crear aplicaciones servidor?";
 choices[51]= new Array();
 choices[51][0] = "Plataforma Java Technique Edition (JTE)";
 choices[51][1] = "Plataforma Java  Enterprise Edition (JEE)";
 choices[51][2] = "Plataforma Java Standard Edition (JSE)";
 choices[51][3] = "Plataforma Java Micro Edition (JME)";
 answers[51] = choices[51][1];
 units[51] = "116";
 comments[51] = "Id Pregunta: 6474. Castilla La Mancha 2009";


//  Id pregunta: 6480 AÃ±o de creación de pregunta: 2010-01-01
 questions[52]= "53)  &iquest;Qu&eacute; protocolo define las VLAN (Virtual LAN)?";
 choices[52]= new Array();
 choices[52][0] = "RFC 1032";
 choices[52][1] = "IEEE 802.3u";
 choices[52][2] = "IEEE 802.1q";
 choices[52][3] = "IEEE 802.11";
 answers[52] = choices[52][2];
 units[52] = "101";
 comments[52] = "Id Pregunta: 6480. Castilla La Mancha 2009";


//  Id pregunta: 6541 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)  Una tarjeta de memoria";
 choices[53]= new Array();
 choices[53][0] = "Puede procesar informaci&oacute;n";
 choices[53][1] = "Dependiendo de los tipos, puede o no procesar informaci&oacute;n";
 choices[53][2] = "Nunca puede procesar informaci&oacute;n";
 choices[53][3] = "Son un tipo de tarjeta inteligente";
 answers[53] = choices[53][2];
 units[53] = "111";
 comments[53] = "Id Pregunta: 6541. NULL";


//  Id pregunta: 7253 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  El protocolo UDP:";
 choices[54]= new Array();
 choices[54][0] = "Es orientado a conexi&oacute;n";
 choices[54][1] = "Genera un flujo unidireccional";
 choices[54][2] = "Realiza el control de redundancia c&iacute;clica (CRC) de los datos";
 choices[54][3] = "Emplea, al comenzar una comunicaci&oacute;n, el mecanismo denominado Three-Weay Hand Shaking";
 answers[54] = choices[54][1];
 units[54] = "100";
 comments[54] = "Id Pregunta: 7253. Examen TIC B 2009";


//  Id pregunta: 7283 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  &quot;&iquest;Cu&aacute;l de las siguientes no es una de las tres condiciones de Popek y Godbergh que debe cumplir toda arquitectura inform&aacute;tica para soportar adecuadamente &quot;&quot;virtualizaci&oacute;n&quot;&quot; de sistemas?&quot;";
 choices[55]= new Array();
 choices[55][0] = "Eficiencia";
 choices[55][1] = "Control de Recursos";
 choices[55][2] = "Equivalencia";
 choices[55][3] = "Escalabilidad";
 answers[55] = choices[55][3];
 units[55] = "119";
 comments[55] = "Id Pregunta: 7283. Examen TIC B 2009";


//  Id pregunta: 8168 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  Referente a la Recomendaci&oacute;n del W3C &quot;XML Signature Syntax and Processing&quot;, &iquest;cu&aacute;l es la afirmaci&oacute;n INCORRECTA?:";
 choices[56]= new Array();
 choices[56][0] = "S&oacute;lo es posible indicar el uso del algoritmo C14N en el elemento ds:SignedInfo.";
 choices[56][1] = "Explica tres posibles formas de aplicaci&oacute;n de la firma: detached, enveloping y enveloped.";
 choices[56][2] = "Permite firmar documentos en cualquier formato, no s&oacute;lo en formato XML.";
 choices[56][3] = "Es la base para la definici&oacute;n de XAdES.";
 answers[56] = choices[56][0];
 units[56] = "72";
 comments[56] = "Id Pregunta: 8168. Examen TIC A1 2010";


//  Id pregunta: 8176 AÃ±o de creación de pregunta: 2011-01-01
 questions[57]= "58)  Referente al protocolo Internet Protocol versi&oacute;n 4 (IPv4), &iquest;cu&aacute;l es la afirmaci&oacute;n correcta?:";
 choices[57]= new Array();
 choices[57][0] = "S&oacute;lo permite identificar hasta 256 protocolos para la parte de datos del datagrama.";
 choices[57][1] = "No permite volver a fragmentar un datagrama ya fragmentado (pues la fragmentaci&oacute;n se indica con el bit MF).";
 choices[57][2] = "La unidad de transferencia m&aacute;xima o Maximun Transmission Unit (MTU) es siempre de 65.535 bytes.";
 choices[57][3] = "Si los datagramas han sido fragmentados, al pasar a una red que puede manejar un PDU m&aacute;ximo mayor que la red de origen, previamente a ser reenviados, los fragmentos deben ser reensamblados.";
 answers[57] = choices[57][0];
 units[57] = "100";
 comments[57] = "Id Pregunta: 8176. Examen TIC A1 2010";


//  Id pregunta: 8195 AÃ±o de creación de pregunta: 2011-01-01
 questions[58]= "59)  La normativa vigente sobre Infraestructuras Comunes de Telecomunicaci&oacute;n (ICTs) establece que:";
 choices[58]= new Array();
 choices[58][0] = "Las dimensiones m&iacute;nimas de una ICT incluyen los elementos necesarios para la captaci&oacute;n y adaptaci&oacute;n de las se&ntilde;ales de radiodifusi&oacute;n sonora y televisi&oacute;n terrenales y por sat&eacute;lite.";
 choices[58][1] = "Su &aacute;mbito de aplicaci&oacute;n son todos los inmuebles de nueva construcci&oacute;n a partir de su entrada en vigor. ";
 choices[58][2] = "Finalizados los trabajos de ejecuci&oacute;n del Proyecto T&eacute;cnico, siempre se deber&aacute; presentar un Bolet&iacute;n de Instalaci&oacute;n. ";
 choices[58][3] = "Finalizados los trabajos de ejecuci&oacute;n del Proyecto T&eacute;cnico, siempre se deber&aacute; presentar un Certificado de Fin de Obra. ";
 answers[58] = choices[58][2];
 units[58] = "99";
 comments[58] = "Id Pregunta: 8195. Examen TIC A1 2010";


//  Id pregunta: 8280 AÃ±o de creación de pregunta: 2011-01-01
 questions[59]= "60)  Si ejecutamos el comando telnet para acceder a un servidor que tenga configurado lo necesario, &iquest;Cu&aacute;l de las afirmaciones es correcta?:";
 choices[59]= new Array();
 choices[59][0] = "S&oacute;lo podemos conectarnos al &quot;well-known port&quot; 23 (telnet).";
 choices[59][1] = "Accediendo al puerto 25 (smtp) ser&iacute;a posible enviar e-mails.";
 choices[59][2] = "Accediendo al puerto 22 (ssh) es posible securizar la comunicaci&oacute;n.";
 choices[59][3] = "Accediendo a cualquier puerto diferente del 23 el servidor reconoce el protocolo y redirige la comunicaci&oacute;n al puerto 23(telnet).";
 answers[59] = choices[59][1];
 units[59] = "112";
 comments[59] = "Id Pregunta: 8280. Examen TIC A1 2010";


//  Id pregunta: 8283 AÃ±o de creación de pregunta: 2011-01-01
 questions[60]= "61)  El formato de direcci&oacute;n EUI-64 es un formato est&aacute;ndar del IEEE, que permite a un nodo autoconfigurar o asignarse autom&aacute;ticamente su propia direcci&oacute;n IPv6 de nodo, a partir de la direcci&oacute;n IEEE 802 MAC de la tarjeta de red del:";
 choices[60]= new Array();
 choices[60][0] = "Router vecino y del prefijo de la direcci&oacute;n de red (/64) a la que est&aacute; conectado dicho nodo.";
 choices[60][1] = "Propio nodo y del prefijo de la direcci&oacute;n de red (/48) del router vecino al que est&aacute; conectado dicho nodo.";
 choices[60][2] = "Router vecino y del prefijo de la direcci&oacute;n de red (/48) a la que est&aacute; conectado dicho nodo.";
 choices[60][3] = "Propio nodo y del prefijo de la direcci&oacute;n de red (/64) a la que est&aacute; conectado dicho nodo.";
 answers[60] = choices[60][3];
 units[60] = "100";
 comments[60] = "Id Pregunta: 8283. Examen TIC A1 2010";


//  Id pregunta: 8314 AÃ±o de creación de pregunta: 2011-01-01
 questions[61]= "62)  El c&oacute;dec G.729 especificado por la ITU-T para la codificaci&oacute;n de voz para su uso en sistemas de Voz sobre IP, &iquest;a qu&eacute; tasas de bit puede operar?";
 choices[61]= new Array();
 choices[61][0] = "A 56 o 64 kbps.";
 choices[61][1] = "A 6.4, 8 o 11.8 kbps. ";
 choices[61][2] = "&Uacute;nicamente a 8 kbps. ";
 choices[61][3] = "A 5.3 o 6.4 kbps.";
 answers[61] = choices[61][1];
 units[61] = "100";
 comments[61] = "Id Pregunta: 8314. Examen TIC A2 2010";


//  Id pregunta: 8317 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  El protocolo de acceso de datos para redes de telefon&iacute;a m&oacute;vil calificado como generaci&oacute;n 3.75 (3.75 G) es: ";
 choices[62]= new Array();
 choices[62][0] = "GPRS. ";
 choices[62][1] = "HSDPA. ";
 choices[62][2] = "HSUPA. ";
 choices[62][3] = "UMTS. ";
 answers[62] = choices[62][2];
 units[62] = "108";
 comments[62] = "Id Pregunta: 8317. Examen TIC A2 2010";


//  Id pregunta: 8357 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  &iquest;Cu&aacute;l de las siguientes tecnolog&iacute;as de programaci&oacute;n se ejecuta en el servidor? ";
 choices[63]= new Array();
 choices[63][0] = "JavaScript";
 choices[63][1] = "Applets";
 choices[63][2] = "JSP";
 choices[63][3] = "VisualScript";
 answers[63] = choices[63][2];
 units[63] = "114";
 comments[63] = "Id Pregunta: 8357. Examen TIC A2 2010";


//  Id pregunta: 8381 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  La tecnolog&iacute;a de transmisi&oacute;n 100Base-FX:";
 choices[64]= new Array();
 choices[64][0] = "Utiliza cable UTP de categor&iacute;a 5 o superior.";
 choices[64][1] = "Tiene una longitud m&aacute;xima de 2 kil&oacute;metros para transmisiones half-duplex y 400 metros para transmisiones full-duplex.";
 choices[64][2] = "Es compatible con la tecnolog&iacute;a 10Base&bull;FL.";
 choices[64][3] = "Puede usar conectores MIC.";
 answers[64] = choices[64][3];
 units[64] = "99";
 comments[64] = "Id Pregunta: 8381. Examen TIC A2 2010";


//  Id pregunta: 8382 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  Una desventaja de la topolog&iacute;a f&iacute;sica de estrella es que:";
 choices[65]= new Array();
 choices[65][0] = "Requiere m&aacute;s cable que la topolog&iacute;a de bus.";
 choices[65][1] = "Se requieren terminadores.";
 choices[65][2] = "Es dif&iacute;cil conectar nuevos nodos a la red,";
 choices[65][3] = "Toda la red se caer&iacute;a si hubiera una ruptura en el cable principal.";
 answers[65] = choices[65][0];
 units[65] = "102";
 comments[65] = "Id Pregunta: 8382. Examen TIC A2 2010";


//  Id pregunta: 8419 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  &iquest;Qu&eacute; tecnolog&iacute;a inal&aacute;mbrica de corto alcance y alta frecuencia permite el intercambio de datos entre dispositivos, siendo su uso m&aacute;s frecuente el pago mediante el m&oacute;vil?";
 choices[66]= new Array();
 choices[66][0] = "Bluetooth";
 choices[66][1] = "PayPal Mobile";
 choices[66][2] = "NFC (Near Field Communication)";
 choices[66][3] = "3D Secure";
 answers[66] = choices[66][2];
 units[66] = "70, 107";
 comments[66] = "Id Pregunta: 8419. ";


//  Id pregunta: 8483 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  De las siguientes afirmaciones sobre el protocolo ICMP, &iquest;cu&aacute;l es cierta?";
 choices[67]= new Array();
 choices[67][0] = "Est&aacute; definido en las RFC 792 y 2463.";
 choices[67][1] = "Se considera un protocolo de nivel de transporte, al ir sobre datagramas IP.";
 choices[67][2] = "Permite conocer la direcci&oacute;n MAC asociada a una direcci&oacute;n IP.";
 choices[67][3] = "La cabecera tiene una longitud de 4 bytes en ICMPv4 y de 8 en ICMPv6.";
 answers[67] = choices[67][0];
 units[67] = "100";
 comments[67] = "Id Pregunta: 8483. Examen TIC A2 2010 interna";


//  Id pregunta: 8769 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  La m&aacute;xima longitud de un datagrama IP es:";
 choices[68]= new Array();
 choices[68][0] = "128 Kbytes";
 choices[68][1] = "64 Kbytes.";
 choices[68][2] = "32 Kbytes";
 choices[68][3] = "No tiene longitud m&aacute;xima";
 answers[68] = choices[68][1];
 units[68] = "100";
 comments[68] = "Id Pregunta: 8769. Examen TIC A2 2010 interna";


//  Id pregunta: 8890 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  &iquest;En que banda de frecuencias trabaja WiBro?";
 choices[69]= new Array();
 choices[69][0] = "10GHz-66GHz";
 choices[69][1] = "2,45MHz";
 choices[69][2] = "2,3GHz-2,4GHz";
 choices[69][3] = "2GHz-11GHz";
 answers[69] = choices[69][2];
 units[69] = "107";
 comments[69] = "Id Pregunta: 8890. NULL";


//  Id pregunta: 8926 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  Es una caracter&iacute;stica de la fibra &oacute;ptica:";
 choices[70]= new Array();
 choices[70][0] = "Un ancho de banda de 800Mhz.";
 choices[70][1] = "Gran resistencia a interferencias y ruido.";
 choices[70][2] = "El bajo coste de su instalaci&oacute;n.";
 choices[70][3] = "La facilidad de su instalaci&oacute;n";
 answers[70] = choices[70][1];
 units[70] = "99";
 comments[70] = "Id Pregunta: 8926. Operador Ayto. Madrid 2010";


//  Id pregunta: 9017 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  En un sistema de transmisi&oacute;n digital &hellip;";
 choices[71]= new Array();
 choices[71][0] = "El ruido es acumulativo.";
 choices[71][1] = "Cada repetidor puede regenerar la se&ntilde;al.";
 choices[71][2] = "No tiene influencia el ruido.";
 choices[71][3] = "Ninguna de las anteriores";
 answers[71] = choices[71][1];
 units[71] = "99";
 comments[71] = "Id Pregunta: 9017. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9362 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  Una red utiliza CSMA/CD. Opera a 1 Gbps con un cable de 500 metros de largo sin repetidores. La velocidad de propagaci&oacute;n en el cable es de 200.000 km/s &iquest;Cu&aacute;l es el tama&ntilde;o m&iacute;nimo de la trama?";
 choices[72]= new Array();
 choices[72][0] = "5000 bits";
 choices[72][1] = "10000 bits";
 choices[72][2] = "1250 bytes";
 choices[72][3] = "1000 bits";
 answers[72] = choices[72][0];
 units[72] = "101";
 comments[72] = "Id Pregunta: 9362. ";


//  Id pregunta: 9401 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  El modo de transporte del primer est&aacute;ndar ADSL, UIT-T/G.992.1 de 1999, era el ATM, a cuyo efecto, una trama Ethernet de 1.300 bytes se convert&iacute;a en (aproximadamente):";
 choices[73]= new Array();
 choices[73][0] = "1300 x 53 = 68.900 celdas ATM";
 choices[73][1] = "1300 / 48 = 27,1 ? 28 celdas ATM";
 choices[73][2] = "1300 / 53 = 24,5 ? 25 celdas ATM.";
 choices[73][3] = "Ninguna de las anteriores";
 answers[73] = choices[73][1];
 units[73] = "109";
 comments[73] = "Id Pregunta: 9401. T&eacute;cnico Teleco Ayto Madrid 2010";


//  Id pregunta: 9434 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  El art. 12 de la Ley 9/2014, General de Telecomunicaciones, indica los principios generales aplicables al acceso a las redes y recursos asociados y a su interconexi&oacute;n. Indique cual de las siguientes afirmaciones no es correcta:";
 choices[74]= new Array();
 choices[74][0] = "Los operadores de redes p&uacute;blicas de comunicaciones electr&oacute;nicas tendr&aacute;n el derecho y, cuando se solicite por otros operadores de redes p&uacute;blicas de comunicaciones electr&oacute;nicas, la obligaci&oacute;n de negociar la interconexi&oacute;n mutua con el fin de prestar servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico, con el objeto de garantizar as&iacute; la prestaci&oacute;n de servicios y su interoperabilidad.";
 choices[74][1] = "No existir&aacute;n restricciones que impidan que los operadores negocien entre s&iacute; acuerdos de acceso e interconexi&oacute;n";
 choices[74][2] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia intervendr&aacute; en las relaciones entre operadores, a petici&oacute;n del Consejo de Ministros.";
 choices[74][3] = "Los operadores que obtengan informaci&oacute;n de otros, en el proceso de negociaci&oacute;n de los acuerdos de acceso o de interconexi&oacute;n, destinar&aacute;n la informaci&oacute;n obtenida exclusivamente a los fines para los que fue solicitada.";
 answers[74] = choices[74][2];
 units[74] = "110";
 comments[74] = "Id Pregunta: 9434. Examen Xunta Galicia 2011 TIC A1";


//  Id pregunta: 9510 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  El lenguaje Java es un lenguaje:";
 choices[75]= new Array();
 choices[75][0] = "De herencia simple";
 choices[75][1] = "De herencia m&uacute;ltiple";
 choices[75][2] = "Que no permite la herencia";
 choices[75][3] = "Todas las anteriores son falsas";
 answers[75] = choices[75][0];
 units[75] = "116";
 comments[75] = "Id Pregunta: 9510. NULL";


//  Id pregunta: 9651 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  El c&oacute;digo intermedio en una compilaci&oacute;n .NET actualmente se llama:";
 choices[76]= new Array();
 choices[76][0] = "MSIL";
 choices[76][1] = "CIL";
 choices[76][2] = "CLS";
 choices[76][3] = "Bytecode";
 answers[76] = choices[76][1];
 units[76] = "115";
 comments[76] = "Id Pregunta: 9651. Antes se llamaba MSIL, ahora se llama CIL (Common Intermediate Language)";


//  Id pregunta: 9706 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  El protocolo TCP es un protocolo";
 choices[77]= new Array();
 choices[77][0] = "orientado a conexi&oacute;n, fiable y de flujo estructurado.";
 choices[77][1] = "orientado a conexi&oacute;n, fiable y de flujo no estructurado.";
 choices[77][2] = "orientado a conexi&oacute;n, no fiable y de flujo no estructurado.";
 choices[77][3] = "no orientado a conexi&oacute;n, no fiable y de flujo no estructurado.";
 answers[77] = choices[77][1];
 units[77] = "100";
 comments[77] = "Id Pregunta: 9706. Examen TIC-A1 2013";


//  Id pregunta: 9863 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  Indique la opci&oacute;n falsa:";
 choices[78]= new Array();
 choices[78][0] = "Las siglas HOTP hacen referencia la algoritmo HMAC-based One Time Password.";
 choices[78][1] = "HOTP es un est&aacute;ndar abierto.";
 choices[78][2] = "Son implementaciones de HOTP: Barada, Google Authenticator, LinOTP. ";
 choices[78][3] = "HOTP no puede ser utilizado para autenticar a un usuario en un sistema a trav&eacute;s de un servidor de autenticaci&oacute;n.";
 answers[78] = choices[78][3];
 units[78] = "118";
 comments[78] = "Id Pregunta: 9863. HOTP SI se puede utilizar para autenticar a un usuario en un sistema.";


//  Id pregunta: 9877 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  La norma ISO 27002";
 choices[79]= new Array();
 choices[79][0] = "es un est&aacute;ndar de facto para la prestaci&oacute;n de servicios de seguridad de la Tecnolog&iacute;a de la Informaci&oacute;n";
 choices[79][1] = "tiene como objetivo proporcionar una base com&uacute;n para la gesti&oacute;n de la seguridad dentro de las organizaciones.";
 choices[79][2] = "establece 36 dominios de control para la gesti&oacute;n de la seguridad.";
 choices[79][3] = "establece un sistema de certificaci&oacute;n adecuado a la norma.";
 answers[79] = choices[79][1];
 units[79] = "107";
 comments[79] = "Id Pregunta: 9877. TIC A1, Examen 2013";


//  Id pregunta: 9932 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  Indique la opci&oacute;n falsa:";
 choices[80]= new Array();
 choices[80][0] = "En la capa de red, el modelo OSI s&oacute;lo considera comunicaci&oacute;n orientada a conexi&oacute;n.";
 choices[80][1] = "Igualmente, en la capa de transporte se ofrece s&oacute;lo comunicaci&oacute;n orientada a conexi&oacute;n.";
 choices[80][2] = "El modelo TCP/IP en la capa de red s&oacute;lo tiene el modo sin conexi&oacute;n.";
 choices[80][3] = "Todas son verdaderas.";
 answers[80] = choices[80][0];
 units[80] = "100";
 comments[80] = "Id Pregunta: 9932. NULL";


//  Id pregunta: 9975 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  En una arquitectura web en .NET, indique cu&aacute;l es la opci&oacute;n correcta que define una Biblioteca de Clases Base (BCB):";
 choices[81]= new Array();
 choices[81][0] = "La Biblioteca de Clases Base es una API de alto nivel para permitir acceder a los servicios que ofrece el CLR (Common Language Runtime) a trav&eacute;s de objetos en una jerarqu&iacute;a denominada espacio de nombres.";
 choices[81][1] = "La Biblioteca de Clases Base es una API de bajo nivel para permitir acceder a los datos que ofrece el ASP.NET a trav&eacute;s de objetos en una jerarqu&iacute;a denominada espacio de nombres";
 choices[81][2] = "La Biblioteca de Clases Base es un conjunto de librer&iacute;as que permiten realizar las operaciones de acceso a datos.";
 choices[81][3] = "La Biblioteca de Clases Base es un conjunto de clases, interfaces y tipos valor que son la base para la compilaci&oacute;n del c&oacute;digo fuente a un c&oacute;digo intermedio denominado CIL (Common Intermediate Language).";
 answers[81] = choices[81][0];
 units[81] = "115";
 comments[81] = "Id Pregunta: 9975. Examen TICA1, Xunta de GaliciA, 2011";


//  Id pregunta: 10001 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  EuroDOCSIS";
 choices[82]= new Array();
 choices[82][0] = "Significa, en el &aacute;mbito de la Uni&oacute;n Europea, DOCument System Interface Service, y hace referencia a un est&aacute;ndar de gesti&oacute;n documental.";
 choices[82][1] = "es una extensi&oacute;n de DOCSIS especificada por ETSI para el &aacute;mbito Europeo.";
 choices[82][2] = "significa, en el &aacute;mbito de la zona Euro, Digital Open Currency System Interface Standard.";
 choices[82][3] = "es un est&aacute;ndar propietario de gesti&oacute;n documental de amplia implantaci&oacute;n enEuropa.";
 answers[82] = choices[82][1];
 units[82] = "105";
 comments[82] = "Id Pregunta: 10001. ";


//  Id pregunta: 10048 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  MPLS (Multiprotocol Label Switching) utiliza algunos conceptos, entre ellos:";
 choices[83]= new Array();
 choices[83][0] = "FEC (Forwarding Equivalent Class).";
 choices[83][1] = "LAPD (Link Access Protocol for D-channel).";
 choices[83][2] = "CIR (Commited Information Rate).";
 choices[83][3] = "MBS (Maximum Burst Size).";
 answers[83] = choices[83][0];
 units[83] = "100";
 comments[83] = "Id Pregunta: 10048. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10055 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  De los 32 bits que tiene una cabecera MPLS, &iquest;cu&aacute;ntos est&aacute;n reservados para el valor de la etiqueta MPLS seg&uacute;n la RFC 3032?";
 choices[84]= new Array();
 choices[84][0] = "32 ";
 choices[84][1] = "24";
 choices[84][2] = "20 ";
 choices[84][3] = "16";
 answers[84] = choices[84][2];
 units[84] = "100";
 comments[84] = "Id Pregunta: 10055. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10327 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  &iquest;Cual no es un lenguaje de scripting?";
 choices[85]= new Array();
 choices[85][0] = "JScript";
 choices[85][1] = "Node.js";
 choices[85][2] = "Groovy";
 choices[85][3] = "Hack";
 answers[85] = choices[85][1];
 units[85] = "114";
 comments[85] = "Id Pregunta: 10327. Node.js es un entorno de desarrollo, no un lenguaje";


//  Id pregunta: 10519 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Cu&aacute;l es el periodo m&aacute;ximo de inhabilitaci&oacute;n al que pueden dar lugar las infracciones muy graves:";
 choices[86]= new Array();
 choices[86][0] = "10 a&ntilde;os";
 choices[86][1] = "5 a&ntilde;os";
 choices[86][2] = "3 a&ntilde;os";
 choices[86][3] = "1 a&ntilde;o";
 answers[86] = choices[86][1];
 units[86] = "110";
 comments[86] = "Id Pregunta: 10519. ";


//  Id pregunta: 10995 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  Para prevenir un ataque de SQL Injection:";
 choices[87]= new Array();
 choices[87][0] = "Debe detenerse la base de datos para evitar su infecci&oacute;n por el c&oacute;digo malicioso.";
 choices[87][1] = "Debe evitarse el uso de procedimientos almacenados en la base de datos.";
 choices[87][2] = "Debe eliminarse del equipo del usuario el c&oacute;digo SQL descargado, para evitar su propagaci&oacute;n.";
 choices[87][3] = "Debe utilizarse instrucciones SQL parametrizadas.";
 answers[87] = choices[87][3];
 units[87] = "111";
 comments[87] = "Id Pregunta: 10995. TIC A1 AGE 2014";


//  Id pregunta: 11005 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  Respecto a la intranet de un ministerio se&ntilde;ale la respuesta correcta:";
 choices[88]= new Array();
 choices[88][0] = "No puede estar conectada a la Red Sara, para evitar fugas de informaci&oacute;n.";
 choices[88][1] = "Se incluye dentro de la zona desmilitarizada p&uacute;blica (DMZ), para garantizar el acceso por teletrabajo.";
 choices[88][2] = "No podr&aacute; usar un nombre interno como ministerio.age en su certificado SSL a partir de 2016.";
 choices[88][3] = "Debe usar el direccionamiento privado 10.0.0.0/24, 192.168.0.0/16 y 172.16.0.0/16.";
 answers[88] = choices[88][2];
 units[88] = "113";
 comments[88] = "Id Pregunta: 11005. TIC A1 AGE 2014";


//  Id pregunta: 11330 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  &iquest;Qu&eacute; planes nacionales se derivan de la Ley General de Telecomunicaciones?";
 choices[89]= new Array();
 choices[89][0] = "Numeraci&oacute;n y direccionamiento";
 choices[89][1] = "Denominaci&oacute;n";
 choices[89][2] = "Las dos anteriores";
 choices[89][3] = "Ninguna";
 answers[89] = choices[89][2];
 units[89] = "110";
 comments[89] = "Id Pregunta: 11330. ";


//  Id pregunta: 11414 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  Se&ntilde;alar la FALSAde acuerdo a la Ley 9/2014. Entre las facultades del gobierno para la administraci&oacute;n del espectro, se encuentran:";
 choices[90]= new Array();
 choices[90][0] = "Aprobar los planes de utilizaci&oacute;n del espectro bas&aacute;ndose en las propuestas del MINETUR.";
 choices[90][1] = "La adecuada utilizaci&oacute;n del espectro mediante el empleo de equipos y aparatos.";
 choices[90][2] = "La determinaci&oacute;n de los niveles de emisi&oacute;n radioel&eacute;ctrica tolerable.";
 choices[90][3] = "Las condiciones de otorgamiento de t&iacute;tulos habilitantes para uso del dominio p&uacute;blico para eventos de corta duraci&oacute;n.";
 answers[90] = choices[90][0];
 units[90] = "110";
 comments[90] = "Id Pregunta: 11414. ";


//  Id pregunta: 11446 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Seg&uacute;n la Ley 9/2014, a qui&eacute;n corresponde establecer los procedimientos y plazos para la habilitaci&oacute;n del ejercicio de los derechos de uso del Dominio P&uacute;blico Radioel&eacute;ctrico";
 choices[91]= new Array();
 choices[91][0] = "MINETUR.";
 choices[91][1] = "Gobierno de Espa&ntilde;a.";
 choices[91][2] = "CNMC.";
 choices[91][3] = "SETSI.";
 answers[91] = choices[91][1];
 units[91] = "110";
 comments[91] = "Id Pregunta: 11446. ";


//  Id pregunta: 11461 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Seg&uacute;n la Ley 9/2014, se&ntilde;ale la falsa:";
 choices[92]= new Array();
 choices[92][0] = "Corresponde al Gobierno la aprobaci&oacute;n por Real Decreto de los planes nacionales de numeraci&oacute;n, direccionamiento y denominaci&oacute;n.";
 choices[92][1] = "El MINETUR podr&aacute; mediante orden y previo informe del Gobierno, modificar la estructura y organizaci&oacute;n de los planes nacionales.";
 choices[92][2] = "Los costes derivados de la actualizaci&oacute;n de los elementos de la red deber&aacute;n ser sufragados por cada operador.";
 choices[92][3] = "Las decisiones relativas a los otorgamientos de derechos de uso se adoptar&aacute;n, comunicar&aacute;n y har&aacute;n p&uacute;blicas en el plazo m&aacute;ximo de tres semanas desde la recepci&oacute;n de la solicitud completa, salvo cuando se apliquen procedimientos de selecci&oacute;n comparativa o competitiva.";
 answers[92] = choices[92][1];
 units[92] = "110";
 comments[92] = "Id Pregunta: 11461. ";


//  Id pregunta: 11480 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Seg&uacute;n el art&iacute;culo 47 de la Ley 9/2014, NO es un derecho espec&iacute;fico de los usuarios finales de redes y servicios de comunicaciones electr&oacute;nicas:";
 choices[93]= new Array();
 choices[93][0] = "Derecho a continuidad del servicio.";
 choices[93][1] = "Derecho a acceder a los servicios de emergencia de forma gratuita.";
 choices[93][2] = "Derecho a la informaci&oacute;n, que deber&aacute; ser veraz, eficaz, suficiente, transparente, comparable sobre los servicios de comunicaciones electr&oacute;nicas disponibles al p&uacute;blico.";
 choices[93][3] = "Todos son derechos espec&iacute;ficos de los usuarios finales.";
 answers[93] = choices[93][1];
 units[93] = "110";
 comments[93] = "Id Pregunta: 11480. ";


//  Id pregunta: 11563 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Campos de la cabecera Atm que tienen un uso similar con campos de la cabecera Frame Relay.";
 choices[94]= new Array();
 choices[94][0] = "Command and Response y Cell Loss";
 choices[94][1] = "DLCI y PT";
 choices[94][2] = "VPI y VCI";
 choices[94][3] = "DE y CLP";
 answers[94] = choices[94][3];
 units[94] = "109";
 comments[94] = "Id Pregunta: 11563. NULL";


//  Id pregunta: 11697 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Cu&aacute;l no es una caracteristica de PPP?";
 choices[95]= new Array();
 choices[95][0] = "Se puede usar en circuitos anal&oacute;gicos";
 choices[95][1] = "solo soporta IP";
 choices[95][2] = "es capaz de encapsular varios protocolos";
 choices[95][3] = "Proporciona correcci&oacute;n de errores";
 answers[95] = choices[95][1];
 units[95] = "102";
 comments[95] = "Id Pregunta: 11697. NULL";


//  Id pregunta: 11708 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Qu&eacute; amenaza de seguridad se trata de SW que se adhiere a otro SW para ejecutar funciones no deseadas?";
 choices[96]= new Array();
 choices[96][0] = "Virus";
 choices[96][1] = "Gusano";
 choices[96][2] = "Caballo de Troya Proxy";
 choices[96][3] = "Caballo de Troya de denegaci&oacute;n de servicio";
 answers[96] = choices[96][0];
 units[96] = "111";
 comments[96] = "Id Pregunta: 11708. NULL";


//  Id pregunta: 11717 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Qu&eacute; factor determina en TCP el tama&ntilde;o de ventana? ";
 choices[97]= new Array();
 choices[97][0] = "la cantidad de datos que el destino puede procesar a la vez ";
 choices[97][1] = " el n&uacute;mero de servicios incluidos en el segmento TCP ";
 choices[97][2] = " la cantidad de datos que la fuente es capaz de enviar de una sola vez ";
 choices[97][3] = "la cantidad de datos a transmitir";
 answers[97] = choices[97][0];
 units[97] = "102";
 comments[97] = "Id Pregunta: 11717. NULL";


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


//  Id pregunta: 11730 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Qu&eacute;  protocolo, en el &aacute;mbito de Ipsec, proporciona confidencialidad de los datos y la autenticaci&oacute;n de paquetes IP?";
 choices[99]= new Array();
 choices[99][0] = "AH";
 choices[99][1] = "RSA";
 choices[99][2] = "IKE";
 choices[99][3] = "ESP";
 answers[99] = choices[99][3];
 units[99] = "111";
 comments[99] = "Id Pregunta: 11730. NULL";


