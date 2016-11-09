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

//  Id pregunta: 682 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  En I+D+I, &iquest;a qu&eacute; se refiere la segunda 'I'?";
 choices[0]= new Array();
 choices[0][0] = "A implementaci&oacute;n.";
 choices[0][1] = "A instalaci&oacute;n.";
 choices[0][2] = "A innovaci&oacute;n.";
 choices[0][3] = "A internet.";
 answers[0] = choices[0][2];
 units[0] = "103";
 comments[0] = "Id Pregunta: 682. ";


//  Id pregunta: 2884 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  La entidad p&uacute;blica empresarial Red.es tiene como misi&oacute;n:";
 choices[1]= new Array();
 choices[1][0] = "la gesti&oacute;n de registros de nombres y direcciones de dominio de internet bajo el c&oacute;digo de pa&iacute;s &quot;.es&quot; correspondiente a Espa&ntilde;a";
 choices[1][1] = "la de observar la evoluci&oacute;n del sector de las telecomunicaciones y de la sociedad de la informaci&oacute;n";
 choices[1][2] = "el asesoramiento a la Administraci&oacute;n General del Estado en materias TIC";
 choices[1][3] = "Todas las anteriores respuestas son correctas";
 answers[1] = choices[1][3];
 units[1] = "112";
 comments[1] = "Id Pregunta: 2884. ";


//  Id pregunta: 2976 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  El estandar de IEEE 802.9 se correspond e con?";
 choices[2]= new Array();
 choices[2][0] = "fibra optica ";
 choices[2][1] = "voz y datos";
 choices[2][2] = "seguridad lan";
 choices[2][3] = "ninguna de las anteriores";
 answers[2] = choices[2][1];
 units[2] = "101";
 comments[2] = "Id Pregunta: 2976. Examen Julio 2003";


//  Id pregunta: 2998 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  De los siguientes n&uacute;meros de puertos TCP y UDP indicar la falsa:";
 choices[3]= new Array();
 choices[3][0] = "21 para FTP";
 choices[3][1] = "23 para TELNET";
 choices[3][2] = "110 para POP3";
 choices[3][3] = "80 para DNS";
 answers[3] = choices[3][3];
 units[3] = "100";
 comments[3] = "Id Pregunta: 2998. NULL";


//  Id pregunta: 3016 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas de las redes GPRS es falsa?";
 choices[4]= new Array();
 choices[4][0] = "Alcanza velocidades de hasta 115kbps";
 choices[4][1] = "Conmutaci&oacute;n de paquetes";
 choices[4][2] = "Es orientado a conexi&oacute;n";
 choices[4][3] = "La tarificaci&oacute;n se produce por volumen de datos intercambiado";
 answers[4] = choices[4][2];
 units[4] = "108";
 comments[4] = "Id Pregunta: 3016. ";


//  Id pregunta: 3083 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  Los sistemas de multiplexaci&oacute;n por divisi&oacute;n en frecuencia, respecto a los por divisi&oacute;n en el tiempo:";
 choices[5]= new Array();
 choices[5][0] = "Tienen problemas de diafon&iacute;a, por lo que se dejan espacios de guarda";
 choices[5][1] = "Utilizan el ancho de banda completo del canal con una duraci&oacute;n fija";
 choices[5][2] = "No utilizan filtros";
 choices[5][3] = "Utilizan antenas de tipo dipolo";
 answers[5] = choices[5][0];
 units[5] = "108";
 comments[5] = "Id Pregunta: 3083. ";


//  Id pregunta: 3161 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Cu&aacute;l de las siguientes afirmaciones, relacionadas con el modelo OSI, es falsa?";
 choices[6]= new Array();
 choices[6][0] = "Un SAP es un recurso a trav&eacute;s del cual una entidad de nivel N+1 accede a los servicios de nivel N";
 choices[6][1] = "Una entidad N+1 s&oacute;lo puede estar conectada a un SAP";
 choices[6][2] = "Las entidades conectadas a trav&eacute;s de un SAP deben residir en el mismo subsistema";
 choices[6][3] = "Una direcci&oacute;n de SAP identifica a un &uacute;nico SAP";
 answers[6] = choices[6][1];
 units[6] = "100";
 comments[6] = "Id Pregunta: 3161. ";


//  Id pregunta: 3172 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes funciones no corresponde al nivel de transporte?:";
 choices[7]= new Array();
 choices[7][0] = "Dividir en fragmentos mas peque&ntilde;os la informaci&oacute;n que acepta del nivel de sesi&oacute;n, y pasarlos al nivel de red";
 choices[7][1] = "Asegurar el trasvase de informaci&oacute;n entre los 2 extremos de la comunicaci&oacute;n";
 choices[7][2] = "Permitir la comunicaci&oacute;n simult&aacute;nea de varias sesiones de trabajo";
 choices[7][3] = "Transportar la informaci&oacute;n entre nodos de conmutaci&oacute;n conectados directamente entre si";
 answers[7] = choices[7][3];
 units[7] = "100";
 comments[7] = "Id Pregunta: 3172. NULL";


//  Id pregunta: 3173 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Cu&aacute;l de las siguientes funciones no es propia de los protocolos de nivel de enlace?:";
 choices[8]= new Array();
 choices[8][0] = "Control de flujo";
 choices[8][1] = "Sincronizacion y entramado";
 choices[8][2] = "Control de los canales l&oacute;gicos";
 choices[8][3] = "Recuperaci&oacute;n de errores";
 answers[8] = choices[8][2];
 units[8] = "100";
 comments[8] = "Id Pregunta: 3173. NULL";


//  Id pregunta: 3190 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  Dentro del modelo OSI la funci&oacute;n de 'compresi&oacute;n de mensajes', corresponde al nivel:";
 choices[9]= new Array();
 choices[9][0] = "Nivel de red";
 choices[9][1] = "Nivel de transporte";
 choices[9][2] = "Nivel de sesi&oacute;n";
 choices[9][3] = "Nivel de presentaci&oacute;n";
 answers[9] = choices[9][3];
 units[9] = "100";
 comments[9] = "Id Pregunta: 3190. NULL";


//  Id pregunta: 3199 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  EDGE responde por:";
 choices[10]= new Array();
 choices[10][0] = "Enhanced Data for GPRS Evolution";
 choices[10][1] = "Extended Data for GSM Enhancement";
 choices[10][2] = "Enhanced Data for GSM Evolution";
 choices[10][3] = "Extended Data for GPRS Enhancement";
 answers[10] = choices[10][2];
 units[10] = "108";
 comments[10] = "Id Pregunta: 3199. ";


//  Id pregunta: 3214 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  El est&aacute;ndar 100Base-FX corresponde a:";
 choices[11]= new Array();
 choices[11][0] = "Ethernet con un par extra de hilos";
 choices[11][1] = "Fast Ethernet con cables de fibra &oacute;ptica";
 choices[11][2] = "Fast Ethernet con cableado de par trenzado";
 choices[11][3] = "Ninguno de los anteriores";
 answers[11] = choices[11][1];
 units[11] = "97";
 comments[11] = "Id Pregunta: 3214. NULL";


//  Id pregunta: 3234 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  &iquest;Cu&aacute;l de los siguientes protocolos no pertenece a la capa de aplicaci&oacute;n en la arquitectura TCP/IP?:";
 choices[12]= new Array();
 choices[12][0] = "SLIP";
 choices[12][1] = "SMTP";
 choices[12][2] = "DNS";
 choices[12][3] = "RPC";
 answers[12] = choices[12][0];
 units[12] = "100, 106, 116, 112";
 comments[12] = "Id Pregunta: 3234. ";


//  Id pregunta: 3238 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  &iquest;Cu&aacute;l es el puerto habitual usado por una conexi&oacute;n Telnet?:";
 choices[13]= new Array();
 choices[13][0] = "15";
 choices[13][1] = "21";
 choices[13][2] = "23";
 choices[13][3] = "80";
 answers[13] = choices[13][2];
 units[13] = "100, 112";
 comments[13] = "Id Pregunta: 3238. ";


//  Id pregunta: 3240 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  &iquest;Cu&aacute;l es el significado correcto en la actualidad de las siglas GSM?:";
 choices[14]= new Array();
 choices[14][0] = "Group System Mobile";
 choices[14][1] = "Global System Mobile";
 choices[14][2] = "Global Special Mobile";
 choices[14][3] = "Group  Special Mobile";
 answers[14] = choices[14][1];
 units[14] = "108";
 comments[14] = "Id Pregunta: 3240. ";


//  Id pregunta: 3242 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  &iquest;Cu&aacute;l es la funci&oacute;n principal del protocolo ICMP?:";
 choices[15]= new Array();
 choices[15][0] = "Convertir direcciones hardware en direcciones IP";
 choices[15][1] = "Convertir direcciones IP en direcciones hardware";
 choices[15][2] = "Estar orientado a la conexi&oacute;n y proporcionar una conexi&oacute;n full-duplex fiable";
 choices[15][3] = "Manejar el control de la informaci&oacute;n y de errores entre el router y el host";
 answers[15] = choices[15][3];
 units[15] = "100";
 comments[15] = "Id Pregunta: 3242. NULL";


//  Id pregunta: 3273 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  &iquest;Por qu&eacute; motivo no debe utilizarse una red Ethernet para comunicar dispositivos que deban trabajar en tiempo real cr&iacute;tico?:";
 choices[16]= new Array();
 choices[16][0] = "Porque el tiempo medio entre fallos de este tipo de redes es bajo";
 choices[16][1] = "Porque la velocidad de este tipo de redes es demasiado baja";
 choices[16][2] = "Porque el tiempo m&aacute;ximo que tarda un nodo en acceder a la red no est&aacute; acotado";
 choices[16][3] = "Porque este tipo de redes responde al modelo cliente servidor y no permite comunicar dispositivos entre s&iacute;";
 answers[16] = choices[16][2];
 units[16] = "100";
 comments[16] = "Id Pregunta: 3273. ";


//  Id pregunta: 3280 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  &iquest;Qu&eacute; elemento no forma parte del Servicio X.400 de OSI?:";
 choices[17]= new Array();
 choices[17][0] = "Agente de usuario (UA)";
 choices[17][1] = "Sistema de almacenamiento de mensajes (MS)";
 choices[17][2] = "Sistema de enrutamiento de mensajes (MRS)";
 choices[17][3] = "Sistema de mensajes interpersonales (IPMS)";
 answers[17] = choices[17][2];
 units[17] = "106";
 comments[17] = "Id Pregunta: 3280. ";


//  Id pregunta: 3298 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  &iquest;Qu&eacute; nivel del modelo OSI se encarga del enrutamiento de la informaci&oacute;n?:";
 choices[18]= new Array();
 choices[18][0] = "El nivel de red";
 choices[18][1] = "El nivel de enlace";
 choices[18][2] = "El nivel de transporte";
 choices[18][3] = "Se realiza conjuntamente entre el nivel de red y el nivel de transporte, a trav&eacute;s del interfaz entre estos niveles adyacentes";
 answers[18] = choices[18][0];
 units[18] = "100";
 comments[18] = "Id Pregunta: 3298. NULL";


//  Id pregunta: 3366 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  Dentro de las normas X.400, &iquest;a qu&eacute; corresponde el protocolo P2?:";
 choices[19]= new Array();
 choices[19][0] = "Es el protocolo que se establece entre dos agentes de transferencia de mensajes";
 choices[19][1] = "Es el protocolo que se establece entre el agente de usuario y el agente de transferencia de mensajes";
 choices[19][2] = "Es el protocolo que se establece entre dos agentes de usuario";
 choices[19][3] = "Es el protocolo que se establece entre el agente de usuario y el almacen de mensajes";
 answers[19] = choices[19][2];
 units[19] = "106";
 comments[19] = "Id Pregunta: 3366. ";


//  Id pregunta: 3379 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  El interfaz A-bis en GSM es el que va entre:";
 choices[20]= new Array();
 choices[20][0] = "BTS y BSC";
 choices[20][1] = "MSC y HLR";
 choices[20][2] = "HLR y VLR";
 choices[20][3] = "BSC y MSC";
 answers[20] = choices[20][0];
 units[20] = "108";
 comments[20] = "Id Pregunta: 3379. ";


//  Id pregunta: 3387 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  El m&oacute;dulo de transferencia s&iacute;ncrono (STM) principal de SDH  se transmite a una velocidad de:";
 choices[21]= new Array();
 choices[21][0] = "51.84 Mbps";
 choices[21][1] = "1984 kbps";
 choices[21][2] = "100 Mbps";
 choices[21][3] = "155.52 Mbps";
 answers[21] = choices[21][3];
 units[21] = "108";
 comments[21] = "Id Pregunta: 3387. ";


//  Id pregunta: 3412 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Funciones t&iacute;picas del nivel de sesi&oacute;n son:";
 choices[22]= new Array();
 choices[22][0] = "sincronizaci&oacute;n y control del testigo de datos";
 choices[22][1] = "presentaci&oacute;n y criptograf&iacute;a";
 choices[22][2] = "control de flujo y errores";
 choices[22][3] = "todas las anteriores";
 answers[22] = choices[22][0];
 units[22] = "100";
 comments[22] = "Id Pregunta: 3412. NULL";


//  Id pregunta: 3445 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  El protocolo de control de enlace normalizado por ISO y que corresponde exclusivamente al nivel 2 de su modelo de referencia es el:";
 choices[23]= new Array();
 choices[23][0] = "37288";
 choices[23][1] = "37316";
 choices[23][2] = "37347";
 choices[23][3] = "37377";
 answers[23] = choices[23][0];
 units[23] = "100";
 comments[23] = "Id Pregunta: 3445. NULL";


//  Id pregunta: 3487 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  En ATM: &quot;la capacidad de transferencia que se caracteriza por la ausencia de caracterizaci&oacute;n del tr&aacute;fico en el contrato de forma que la red transmite la informaci&oacute;n que le ofrece el usuario cuando puede y lo mejor que puede &quot;, se denomina:";
 choices[24]= new Array();
 choices[24][0] = "DBR (Deterministic Bit Rate)";
 choices[24][1] = "SBR (Statistic Bit Rate)";
 choices[24][2] = "ABT (ATM Block Transfer)";
 choices[24][3] = "ABR (Available Bit Rate)";
 answers[24] = choices[24][3];
 units[24] = "109";
 comments[24] = "Id Pregunta: 3487. ";


//  Id pregunta: 3506 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  En el modo de operaci&oacute;n denominado datagrama:";
 choices[25]= new Array();
 choices[25][0] = "Trabaja en modo 'conexi&oacute;n'";
 choices[25][1] = "Requiere el establecimiento previo de un circuito f&iacute;sico o virtual";
 choices[25][2] = "Los paquetes pueden viajar por rutas diferentes";
 choices[25][3] = "Requiere equipos terminales y software m&aacute;s sencillo";
 answers[25] = choices[25][2];
 units[25] = "100";
 comments[25] = "Id Pregunta: 3506. NULL";


//  Id pregunta: 3551 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  En relaci&oacute;n con la prestaci&oacute;n de servicios de telecomunicaciones en Espa&ntilde;a, &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?:";
 choices[26]= new Array();
 choices[26][0] = "Est&aacute; liberalizada la provisi&oacute;n de servicios, pero no la instalaci&oacute;n de redes de telecomunicaci&oacute;n";
 choices[26][1] = "S&oacute;lo est&aacute;n liberalizadas las comunicaciones telef&oacute;nicas y el acceso a internet";
 choices[26][2] = "S&oacute;lo Telef&oacute;nica de Espa&ntilde;a, Jazztel y Ono est&aacute;n autorizadas a alquilar circuitos punto a punto";
 choices[26][3] = "La instalaci&oacute;n y explotaci&oacute;n de redes y la provisi&oacute;n de servicios de telecomunicaciones est&aacute;n liberalizados";
 answers[26] = choices[26][3];
 units[26] = "110";
 comments[26] = "Id Pregunta: 3551. ";


//  Id pregunta: 3586 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  La actividad conocida como spamming es:";
 choices[27]= new Array();
 choices[27][0] = "uso de una direcci&oacute;n IP falsa para suplantar identidades en Internet";
 choices[27][1] = "uso de mecanismos de proxy para ocultar identidades y direcciones en Internet";
 choices[27][2] = "uso del correo electr&oacute;nico para enviar publicidad no solicitada";
 choices[27][3] = "uso de algoritmos de rastreo en Internet para localizar bases de datos y servidores";
 answers[27] = choices[27][2];
 units[27] = "111";
 comments[27] = "Id Pregunta: 3586. NULL";


//  Id pregunta: 3595 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  La direcci&oacute;n de un socket se conforma con:";
 choices[28]= new Array();
 choices[28][0] = "La direcci&oacute;n IP del host y el modo de acceso";
 choices[28][1] = "La direcci&oacute;n IP del host y la direcci&oacute;n de un puerto local";
 choices[28][2] = "La URL del host";
 choices[28][3] = "La URL del host y el modo de acceso";
 answers[28] = choices[28][1];
 units[28] = "100";
 comments[28] = "Id Pregunta: 3595. NULL";


//  Id pregunta: 3609 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  La funci&oacute;n de una MIB es:";
 choices[29]= new Array();
 choices[29][0] = "Representar un dispositivo dado en la jerarqu&iacute;a de una red gestionada";
 choices[29][1] = "Identificar las caracter&iacute;sticas espec&iacute;ficas de un dispositivo gestionado y asociar uno o m&aacute;s valores a sus caracter&iacute;sticas";
 choices[29][2] = "Mapear agentes SNMP a  NMSs (Network Management Systems) SNMP y mantener una tablas con estas relaciones";
 choices[29][3] = "Permitir representar a los datos de forma independiente de las t&eacute;cnicas de representaci&oacute;n y de las estructuras de sistemas en particular";
 answers[29] = choices[29][1];
 units[29] = "104";
 comments[29] = "Id Pregunta: 3609. ";


//  Id pregunta: 3719 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  Los conectores que se insertan en los hubs 10 base T son del tipo:";
 choices[30]= new Array();
 choices[30][0] = "RJ11";
 choices[30][1] = "RJ45";
 choices[30][2] = "RJ37";
 choices[30][3] = "V.24";
 answers[30] = choices[30][1];
 units[30] = "99";
 comments[30] = "Id Pregunta: 3719. ";


//  Id pregunta: 3724 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  Los est&aacute;ndares publicados por la IAB (Internet Activities Board) se denominan RFCs que son las siglas de:";
 choices[31]= new Array();
 choices[31][0] = "Recommendation File Contents";
 choices[31][1] = "Requisite File Coordination";
 choices[31][2] = "Request For Comments";
 choices[31][3] = "Register Full Condition";
 answers[31] = choices[31][2];
 units[31] = "112";
 comments[31] = "Id Pregunta: 3724. ";


//  Id pregunta: 3733 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  Los prefijos de subred de longitud arbitraria en IPv4, con notaci&oacute;n a.b.c.d/x donde x es el n&uacute;mero de bits de prefijo, son introducidos seg&uacute;n:";
 choices[32]= new Array();
 choices[32][0] = "CICR";
 choices[32][1] = "CIDR";
 choices[32][2] = "DICR";
 choices[32][3] = "DIDR";
 answers[32] = choices[32][1];
 units[32] = "100";
 comments[32] = "Id Pregunta: 3733. NULL";


//  Id pregunta: 3841 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  SS7 (Signaling System Number 7) forma parte de:";
 choices[33]= new Array();
 choices[33][0] = "RDSI (ISDN)";
 choices[33][1] = "Videotext";
 choices[33][2] = "ATM";
 choices[33][3] = "Frame Relay";
 answers[33] = choices[33][0];
 units[33] = "109";
 comments[33] = "Id Pregunta: 3841. ";


//  Id pregunta: 3879 AÃ±o de creación de pregunta: 2004-01-01
 questions[34]= "35)  El protocolo SMTP";
 choices[34]= new Array();
 choices[34][0] = "Define el formato de los mensajes";
 choices[34][1] = "Define la transferencia de mensajes";
 choices[34][2] = "Pone limitaciones al formato del mensaje";
 choices[34][3] = "b y c son ciertas";
 answers[34] = choices[34][3];
 units[34] = "106";
 comments[34] = "Id Pregunta: 3879. Tanenbaum";


//  Id pregunta: 3959 AÃ±o de creación de pregunta: 2003-01-01
 questions[35]= "36)  La jerarqu&iacute;a digital plesi&oacute;crona (JDP o PDH):";
 choices[35]= new Array();
 choices[35][0] = "Tiene la misma normativa de niveles en Europa y en Estados Unidos";
 choices[35][1] = " Tiene la misma normativa de niveles en jap&oacute;n y en Estados Unidos";
 choices[35][2] = "Tiene la misma normativa de niveles para todo el mundo";
 choices[35][3] = "Son tres normativas distintas para cada &aacute;rea";
 answers[35] = choices[35][3];
 units[35] = "107";
 comments[35] = "Id Pregunta: 3959. NULL";


//  Id pregunta: 4101 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[36]= new Array();
 choices[36][0] = "World Wide Web es un servicio b&aacute;sico de Internet";
 choices[36][1] = "World Wide Web es un servicio que utiliza el lenguaje HTML basado a su vez en  SGML.";
 choices[36][2] = "a) y b) son correctas";
 choices[36][3] = "a) y b) son incorrectas";
 answers[36] = choices[36][2];
 units[36] = "112";
 comments[36] = "Id Pregunta: 4101. ";


//  Id pregunta: 4127 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  Protocolo ligero que permite a programas dispersos sobre diferentes sistemas operativos interactuar entre ellos, incluso detr&aacute;s de un cortafuegos";
 choices[37]= new Array();
 choices[37][0] = "CORBA";
 choices[37][1] = "SOAP";
 choices[37][2] = "RMI";
 choices[37][3] = "DCOM";
 answers[37] = choices[37][1];
 units[37] = "50";
 comments[37] = "Id Pregunta: 4127. ";


//  Id pregunta: 4140 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  Cuando multitud de sistemas atacan un &uacute;nico sistema provocando su caida, estamos ante";
 choices[38]= new Array();
 choices[38][0] = "Un ataque de denegaci&oacute;n de servicio (DoS)";
 choices[38][1] = "Echelon, una red global de espias";
 choices[38][2] = "Un ataque distribuido de denegaci&oacute;n de servicio (DDoS)";
 choices[38][3] = "Un ataque de ingenier&iacute;a social";
 answers[38] = choices[38][2];
 units[38] = "112";
 comments[38] = "Id Pregunta: 4140. ";


//  Id pregunta: 4159 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  Que mecanismo proporciona seguridad a DNS";
 choices[39]= new Array();
 choices[39][0] = "Un par nombre/contrase&ntilde;a";
 choices[39][1] = "Un directorio TFTP";
 choices[39][2] = "Un nombre de dominio";
 choices[39][3] = "ninguna de las anteriores";
 answers[39] = choices[39][0];
 units[39] = "113";
 comments[39] = "Id Pregunta: 4159. ";


//  Id pregunta: 4167 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  Las comunicaciones satelite son f&aacute;cilmente interceptables porque";
 choices[40]= new Array();
 choices[40][0] = "las transmisiones son continuas 24 horas al d&iacute;a";
 choices[40][1] = "la huella del sat&eacute;lite no cambia";
 choices[40][2] = "la huella del sat&eacute;lite es muy amplia";
 choices[40][3] = "la posici&oacute;n del sat&eacute;lite es conocida";
 answers[40] = choices[40][2];
 units[40] = "105";
 comments[40] = "Id Pregunta: 4167. ";


//  Id pregunta: 4168 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  Un test de penetraci&oacute;n proporciona todo lo siguiente salvo";
 choices[41]= new Array();
 choices[41][0] = "identificaci&oacute;n de fallos de seguridad";
 choices[41][1] = "demostraci&oacute;n de los efectos de los fallos de seguridad";
 choices[41][2] = "un m&eacute;todo de correcci&oacute;n de los fallos";
 choices[41][3] = "verificaci&oacute;n de los niveles actuales de resistencia a la infiltraci&oacute;n";
 answers[41] = choices[41][1];
 units[41] = "111";
 comments[41] = "Id Pregunta: 4168. NULL";


//  Id pregunta: 4181 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  Con el termino &quot;ventana de backup&quot; se define";
 choices[42]= new Array();
 choices[42][0] = "El espacio m&aacute;ximo disponible para un posible backup, dependiente de la capacidad de las cintas utilizadas";
 choices[42][1] = "La m&aacute;xima velocidad de transferencia de la cinta, que determina la duraci&oacute;n del mismo.";
 choices[42][2] = "El ancho de banda de la red de backup, que determina la duraci&oacute;n del mismo.";
 choices[42][3] = "El periodo de inactividad del sistema, que define el tiempo m&aacute;ximo disponible para realizar el backup.";
 answers[42] = choices[42][3];
 units[42] = "97";
 comments[42] = "Id Pregunta: 4181. NULL";


//  Id pregunta: 4193 AÃ±o de creación de pregunta: 2006-01-01
 questions[43]= "44)  La herramienta MRTG";
 choices[43]= new Array();
 choices[43][0] = "Puede generar gr&aacute;ficas de cantidad de tr&aacute;fico";
 choices[43][1] = "Utiliza SNMP";
 choices[43][2] = "Es una herramienta gratuita";
 choices[43][3] = "todas las anteriores";
 answers[43] = choices[43][3];
 units[43] = "104";
 comments[43] = "Id Pregunta: 4193. ";


//  Id pregunta: 4205 AÃ±o de creación de pregunta: 2006-01-01
 questions[44]= "45)  MPLS";
 choices[44]= new Array();
 choices[44][0] = "Da soporte al desarrollo de Redes Privadas Virtuales (VPNs) extremo a extremo";
 choices[44][1] = "Se configura internamente en la red de un operador de telecomunicaciones (ISP)";
 choices[44][2] = "Dadas sus capacidades de calidad de servicio (QoS) es recomendado en redes LAN empresariales";
 choices[44][3] = "todas las anteriores";
 answers[44] = choices[44][1];
 units[44] = "109";
 comments[44] = "Id Pregunta: 4205. ";


//  Id pregunta: 4230 AÃ±o de creación de pregunta: 2006-01-01
 questions[45]= "46)  Indique la tecnolog&iacute;a de transmisi&oacute;n que utiliza el est&aacute;ndar 802.16a del IEEE:";
 choices[45]= new Array();
 choices[45][0] = "DSSS";
 choices[45][1] = "FHSS";
 choices[45][2] = "OFDM";
 choices[45][3] = "DWDM";
 answers[45] = choices[45][2];
 units[45] = "107";
 comments[45] = "Id Pregunta: 4230. NULL";


//  Id pregunta: 4437 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  &iquest;Qu&eacute; se entiende por Indoor PLC?:";
 choices[46]= new Array();
 choices[46][0] = "MODEM que recoge la se&ntilde;al de la red el&eacute;ctrica a trav&eacute;s del enchufe.";
 choices[46][1] = "Vertiente de la tecnolog&iacute;a PLC que convierte la l&iacute;nea el&eacute;ctrica en una LAN.";
 choices[46][2] = "Equipo que conecta la red el&eacute;ctrica con la red de comunicaciones.";
 choices[46][3] = "Conjunto formado por el MODEM y el equipo terminal de datos que existen en la vivienda el usuario.";
 answers[46] = choices[46][1];
 units[46] = "107";
 comments[46] = "Id Pregunta: 4437. NULL";


//  Id pregunta: 4547 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  Los denominados cortafuegos &oacute; firewalls de filtrado de paquetes, se caracterizan porque:";
 choices[47]= new Array();
 choices[47][0] = "Analizan &uacute;nicamente la informaci&oacute;n incluida en la cabecera TCP/IP de cada paquete.";
 choices[47][1] = "Analizan la carga &uacute;til de datos de cada paquete.";
 choices[47][2] = "Autentifican los usuarios que acceden a la red.";
 choices[47][3] = "No permiten filtrar paquetes en funci&oacute;n del puerto destino de la comunicaci&oacute;n saliente.";
 answers[47] = choices[47][0];
 units[47] = "111";
 comments[47] = "Id Pregunta: 4547. NULL";


//  Id pregunta: 4690 AÃ±o de creación de pregunta: 2007-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l de los siguientes protocolos hace referencia a redes inal&aacute;mbricas?";
 choices[48]= new Array();
 choices[48][0] = "802.1";
 choices[48][1] = "802.3";
 choices[48][2] = " 802.11b";
 choices[48][3] = "802.3u";
 answers[48] = choices[48][2];
 units[48] = "107";
 comments[48] = "Id Pregunta: 4690. Examen 2006 JCYL";


//  Id pregunta: 4769 AÃ±o de creación de pregunta: 2007-01-01
 questions[49]= "50)  En el marco de las redes telem&aacute;ticas transeruopeas, la red s-TESTA";
 choices[49]= new Array();
 choices[49][0] = "Es la red Transversal Espa&ntilde;ola de Servicios Telem&aacute;ticos entre Administraciones, encargada de interconectar las distintas administraciones auton&oacute;micas";
 choices[49][1] = "Es una red IP aislada de Internet que interconecta las redes administrativas de los Estados miembros y de las Agencias e Instituciones europeas";
 choices[49][2] = "Es una red basada en tecnolog&iacute;a inal&aacute;mbrica, que pretende dar cobertura para el aacceso libre a Internet a todos los ciudadanos de la Uni&oacute;n Europea";
 choices[49][3] = "Ninguna de las anteriores";
 answers[49] = choices[49][1];
 units[49] = "103";
 comments[49] = "Id Pregunta: 4769. ";


//  Id pregunta: 5007 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  Seg&uacute;n la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones &iquest;Cada cuanto tiempo, la Comisi&oacute;n del Mercado de las Telecomunicaciones llevar&aacute; a cabo el an&aacute;lisis de los mercados de referencia relativos a redes y servicios de comunicaciones electr&oacute;nicas y el &aacute;mbito geogr&aacute;fico de los mismos?:";
 choices[50]= new Array();
 choices[50][0] = "En un plazo m&aacute;ximo de tres a&ntilde;os contado desde la adopci&oacute;n de una medida anterior relativa a ese mercado";
 choices[50][1] = "En el plazo m&aacute;ximo de dos a&ntilde;os desde la adopci&oacute;n de una recomendaci&oacute;n sobre mercados relevantes revisada, para los mercados no notificados previamente a la Comisi&oacute;n Europea";
 choices[50][2] = "Las dos anteriores son ciertas";
 choices[50][3] = "Todas las anteriores son falsas";
 answers[50] = choices[50][2];
 units[50] = "110";
 comments[50] = "Id Pregunta: 5007. Examen TIC A 2007. Modificado seg&uacute;n Ley 9/2014";


//  Id pregunta: 5127 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  &iquest;Qu&eacute; son los servicios web?";
 choices[51]= new Array();
 choices[51][0] = "Son los servicios POST y GET de petici&oacute;n de datos mediante formlarios web bajo el protocolo de aplicaci&oacute;n de HTTP";
 choices[51][1] = "Son los servicios de petici&oacute;n de p&aacute;ginas atendidos por un servidor web";
 choices[51][2] = "Una soluci&oacute;n a los problemas de comunicaci&oacute;n entre aplicaciones en la inform&aacute;tica";
 choices[51][3] = "Son los servicios multimedia ofrecido por los nuevos portales web.";
 answers[51] = choices[51][2];
 units[51] = "113";
 comments[51] = "Id Pregunta: 5127. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5301 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  Cu&aacute;l de las siguientes no es una clase de servicio ATM";
 choices[52]= new Array();
 choices[52][0] = "CBR";
 choices[52][1] = "HBR";
 choices[52][2] = "UBR";
 choices[52][3] = "NRT-VBR";
 answers[52] = choices[52][1];
 units[52] = "109";
 comments[52] = "Id Pregunta: 5301. ";


//  Id pregunta: 5624 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  Indique cu&aacute;l es el n&uacute;mero de protocolo ESP (Encapsulating Security Payload)";
 choices[53]= new Array();
 choices[53][0] = "51";
 choices[53][1] = "50";
 choices[53][2] = "49";
 choices[53][3] = "Ninguno de los anteriores";
 answers[53] = choices[53][1];
 units[53] = "111";
 comments[53] = "Id Pregunta: 5624. NULL";


//  Id pregunta: 5671 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  En una arquitectura Java EE, &iquest;d&oacute;nde situar&iacute;a un JSP?";
 choices[54]= new Array();
 choices[54][0] = "En el servidor web";
 choices[54][1] = "En el contenedor web";
 choices[54][2] = "En el contenedor de EJBs";
 choices[54][3] = "En el navegador Web";
 answers[54] = choices[54][1];
 units[54] = "116";
 comments[54] = "Id Pregunta: 5671. ";


//  Id pregunta: 5895 AÃ±o de creación de pregunta: 2009-01-01
 questions[55]= "56)  &iquest;C&oacute;mo se denominan los elementos que permiten insertar c&oacute;digo Java arbitrario en una p&aacute;gina JSP?";
 choices[55]= new Array();
 choices[55][0] = "Applets";
 choices[55][1] = "Codelets";
 choices[55][2] = "Scriptlets";
 choices[55][3] = "Ninguna de las anteriores";
 answers[55] = choices[55][2];
 units[55] = "116";
 comments[55] = "Id Pregunta: 5895. ";


//  Id pregunta: 5914 AÃ±o de creación de pregunta: 2009-01-01
 questions[56]= "57)  El formato GIF (Graphic Interchange Format):";
 choices[56]= new Array();
 choices[56][0] = "Almacena 8 bits por p&iacute;xel";
 choices[56][1] = "Almacena 32 bits por p&iacute;xel";
 choices[56][2] = "Admite una paleta de hasta 512 colores";
 choices[56][3] = "No admite el algor&iacute;tmo de compresi&oacute;n LZW (Lempel- Ziv-Welch)";
 answers[56] = choices[56][0];
 units[56] = "114";
 comments[56] = "Id Pregunta: 5914. MAP 2008 A1";


//  Id pregunta: 6073 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  En relaci&oacute;n con la TDT (Televisi&oacute;n Digital Terrestre), &iquest;como se denominan a las especificaciones t&eacute;cnicas aprobadas a nivel europeo para la emisi&oacute;n de TDT?";
 choices[57]= new Array();
 choices[57][0] = "TDT est&aacute;ndar";
 choices[57][1] = "DVB &ndash; T";
 choices[57][2] = "DVB - TDT";
 choices[57][3] = "Ninguna de las anteriores es correcta";
 answers[57] = choices[57][1];
 units[57] = "105";
 comments[57] = "Id Pregunta: 6073. ";


//  Id pregunta: 6110 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  El protocolo UDP proporciona servicios a las aplicaciones para:";
 choices[58]= new Array();
 choices[58][0] = "Controlar el flujo extremo a extremo.";
 choices[58][1] = "Eliminar paquetes duplicados.";
 choices[58][2] = "Multiplexar y demultiplexar.";
 choices[58][3] = "Reordenar paquetes.";
 answers[58] = choices[58][2];
 units[58] = "100";
 comments[58] = "Id Pregunta: 6110. TIC A 2009";


//  Id pregunta: 6455 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  Identifique el API de JAVA que facilita el acceso a registros UDDI";
 choices[59]= new Array();
 choices[59][0] = "SAAJ";
 choices[59][1] = "JAXR";
 choices[59][2] = "SOAP";
 choices[59][3] = "StAX";
 answers[59] = choices[59][1];
 units[59] = "116";
 comments[59] = "Id Pregunta: 6455. Castilla La Mancha 2009";


//  Id pregunta: 6490 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  Respecto al direccionamiento en el protocolo TCP, se puede afirmar que:";
 choices[60]= new Array();
 choices[60][0] = "La cabecera TCP incluye las direcciones IP origen y destino";
 choices[60][1] = "La cabecera TCP incluye las direcciones origen y destino y los puertos TCP origen y destino";
 choices[60][2] = "La cabecera TPC incluye los puertos TCP origen y destino";
 choices[60][3] = "La cabecera TCP no incluye ning&uacute;n elemento asociado al direccionamiento de las conexiones del nivel de transporte";
 answers[60] = choices[60][2];
 units[60] = "100";
 comments[60] = "Id Pregunta: 6490. Castilla La Mancha 2009";


//  Id pregunta: 6544 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  La informaci&oacute;n puede obtenerse a trav&eacute;s de se&ntilde;ales el&eacute;ctricas en las ondas. Una forma de combatirlo es a trav&eacute;s de";
 choices[61]= new Array();
 choices[61][0] = "Tempest";
 choices[61][1] = "Ruido Blanco";
 choices[61][2] = "Zonas de control";
 choices[61][3] = "Todas las respuestas anteriores son correctas";
 answers[61] = choices[61][3];
 units[61] = "111";
 comments[61] = "Id Pregunta: 6544. NULL";


//  Id pregunta: 6562 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  GSM no utiliza";
 choices[62]= new Array();
 choices[62][0] = "Esquema de protecci&oacute;n mediante salto RF";
 choices[62][1] = "Transmisi&oacute;n discontinua";
 choices[62][2] = "Transmisi&oacute;n continua";
 choices[62][3] = "Paging";
 answers[62] = choices[62][2];
 units[62] = "108";
 comments[62] = "Id Pregunta: 6562. NULL";


//  Id pregunta: 7248 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  En el protocolo IPv6, las direcciones constan de:";
 choices[63]= new Array();
 choices[63][0] = "6 bytes";
 choices[63][1] = "8 bytes";
 choices[63][2] = "16 bytes";
 choices[63][3] = "32 bytes";
 answers[63] = choices[63][2];
 units[63] = "100";
 comments[63] = "Id Pregunta: 7248. Examen TIC B 2009";


//  Id pregunta: 7257 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  &iquest;Qu&eacute; dato es INCORRECTO relativo al dividendo digital espa&ntilde;ol?";
 choices[64]= new Array();
 choices[64][0] = "Consiste en las bandas de frecuencias que han sido empleadas para la difusi&oacute;n de la TDT";
 choices[64][1] = "Ocupa la banda de frecuencias de 790 a 862 MHz";
 choices[64][2] = "Se refiere a las frecuencias usadas para la difusi&oacute;n en anal&oacute;gico";
 choices[64][3] = "En el futuro, ser&aacute; utilizado para servicios diferentes al de la televisi&oacute;n";
 answers[64] = choices[64][2];
 units[64] = "105";
 comments[64] = "Id Pregunta: 7257. Examen TIC B 2009";


//  Id pregunta: 8349 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  Dentro de los productos que engloba la plataforma .NET, las funciones de un servidor web las realiza:";
 choices[65]= new Array();
 choices[65][0] = "IIS (Internet Information Services)";
 choices[65][1] = "Apache";
 choices[65][2] = "Joomla";
 choices[65][3] = "Microsoft Web Server";
 answers[65] = choices[65][0];
 units[65] = "115";
 comments[65] = "Id Pregunta: 8349. Examen TIC A2 2010";


//  Id pregunta: 8531 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  &iquest;Qu&eacute; es un &quot;splitter&quot;. en el entorno de la tecnolog&iacute;a ADSL?";
 choices[66]= new Array();
 choices[66][0] = "Es un filtro separador de bandas en casa del abonado.";
 choices[66][1] = "Es un dispositivo opcional de mejora de calidad, &uacute;nicamente es Imprescindible en el caso de ADSL-lite.";
 choices[66][2] = "Es un efecto indeseable en la linea consistente en el acoplamiento inductivo y capacitivo entre diferentes hilos dentro del mismo mazo o mazos adyacentes.";
 choices[66][3] = "Es el mecanismo mediante el cual el operador establecido ha de ceder al nuevo operador a conexi&oacute;n a &quot;su&quot; abonado";
 answers[66] = choices[66][0];
 units[66] = "107";
 comments[66] = "Id Pregunta: 8531. Examen TIC A2 2010 interna";


//  Id pregunta: 8594 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  &iquest;Cu&aacute;l de las siguientes tecnolog&iacute;as de programaci&oacute;n se ejecutan en el servidor?";
 choices[67]= new Array();
 choices[67][0] = "Javascripts";
 choices[67][1] = "Applets";
 choices[67][2] = "JSP";
 choices[67][3] = "VisualScript";
 answers[67] = choices[67][2];
 units[67] = "116";
 comments[67] = "Id Pregunta: 8594. Examen TIC A2 2010 interna";


//  Id pregunta: 8598 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  Indique cual de las siguientes definiciones se corresponde con Biztalk:";
 choices[68]= new Array();
 choices[68][0] = "Es un servidor que permite gestionar procesos de negocio por medio de adaptadores dise&ntilde;ados al efecto, capacit&aacute;ndolo para operar diferentes tipos de software";
 choices[68][1] = "Es una librer&iacute;a de .NET que permite la comunicaci&oacute;n por IRC facilitando la implementaci&oacute;n de chats.";
 choices[68][2] = "Es un servidor web de NET especialmente adaptado para tecnolog&iacute;as m&oacute;viles";
 choices[68][3] = "Es un componente que pertenece a! CLR de NET que facilita la ejecuci&oacute;n de la aplicaci&oacute;n.";
 answers[68] = choices[68][0];
 units[68] = "115";
 comments[68] = "Id Pregunta: 8598. Examen TIC A2 2010 interna";


//  Id pregunta: 8656 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  En la recomendaci&oacute;n X.25, la capa f&iacute;sica en la interfaz est&aacute; definida por el protocolo:";
 choices[69]= new Array();
 choices[69][0] = "V.25";
 choices[69][1] = "V.21";
 choices[69][2] = "X.21";
 choices[69][3] = "X.24";
 answers[69] = choices[69][2];
 units[69] = "103";
 comments[69] = "Id Pregunta: 8656. Examen UPM A2 2011";


//  Id pregunta: 8817 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  Sobre la tecnolog&iacute;a ASP (Active Server Pages) se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[70]= new Array();
 choices[70][0] = "A diferencia de ASP.net, ASP utiliza el &quot;Common Language Runtime (CLR)&quot; para generar el c&oacute;digo HTML";
 choices[70][1] = "S&oacute;lo es compatible con el servidor IIS (Internet Information Server)";
 choices[70][2] = "Es un lenguaje de script que se incluye en un mismo archivo junto con el c&oacute;digo HTML";
 choices[70][3] = "Permite la utilizaci&oacute;n de diversos lenguajes de programaci&oacute;n, entre ellos Visual Basic Script y JScript";
 answers[70] = choices[70][0];
 units[70] = "115";
 comments[70] = "Id Pregunta: 8817. Examen UPM A2 2011";


//  Id pregunta: 8870 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  &iquest;Cu&aacute;l de las siguientes asociaciones &ldquo;protocolos OSI - protocolos TCP/IP&rdquo; no es correcta?:";
 choices[71]= new Array();
 choices[71][0] = "X.500-SNMP";
 choices[71][1] = "SMTP-X.400";
 choices[71][2] = "FTAM-FTP";
 choices[71][3] = "SMTP-X.25";
 answers[71] = choices[71][0];
 units[71] = "100";
 comments[71] = "Id Pregunta: 8870. Analista Ayto. Madrid 2010";


//  Id pregunta: 9010 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  &iquest;A qu&eacute; autoridad nacional de regulaci&oacute;n de las recogidas en la Ley 9/2014,  de 9 de mayo, General de Telecomunicaciones, puede reclamar un usuario final de servicios de comunicaciones en caso de disputa con su operador?";
 choices[72]= new Array();
 choices[72][0] = "El Consejo Asesor de las Telecomunicaciones y de la Sociedad de la Informaci&oacute;n.";
 choices[72][1] = "Ministerio de Industria, Energ&iacute;a y Turismo";
 choices[72][2] = "Comisi&oacute;n Nacional de los Mercados y la Competencia.";
 choices[72][3] = "El Ministerio de Econom&iacute;a";
 answers[72] = choices[72][1];
 units[72] = "110";
 comments[72] = "Id Pregunta: 9010. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9364 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  Una red Ethernet que sigue la especificaci&oacute;n 10GBASE-ER:";
 choices[73]= new Array();
 choices[73][0] = "Funciona sobre par de cobre.";
 choices[73][1] = "Funciona con fibra &oacute;ptica que opera en primera ventana.";
 choices[73][2] = "Funciona con fibra &oacute;ptica que opera en tercera ventana.";
 choices[73][3] = "Utiliza fibra &oacute;ptica multimodo.";
 answers[73] = choices[73][2];
 units[73] = "101";
 comments[73] = "Id Pregunta: 9364. pag.14 astic 2011";


//  Id pregunta: 9371 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  E-Line:";
 choices[74]= new Array();
 choices[74][0] = "Es un servicio que ofrecen los operadores de fibra de lineas dedicadas.";
 choices[74][1] = "Es un mecanismo para proporcionar comunicaciones punto a punto mediante t&uacute;neles IPSec.";
 choices[74][2] = "Es un mecanismo para proporcionar comunicaciones punto a punto, encapsulando el tr&aacute;fico Ethernet dentro de un tunel MPLS.";
 choices[74][3] = "Es un mecanismo para comunicar dos computadoras mediante PPP.";
 answers[74] = choices[74][2];
 units[74] = "101";
 comments[74] = "Id Pregunta: 9371. ";


//  Id pregunta: 9380 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  &iquest;De qu&eacute; est&aacute;ndar se estar&iacute;a hablando si se menciona una Interfaz aerea avanzada con velocidades de transmisi&oacute;n de 100 Mbps para dispositivos fijos y 1 Gbps para dispositivos m&oacute;viles?";
 choices[75]= new Array();
 choices[75][0] = "802.16e";
 choices[75][1] = "802.11-2012";
 choices[75][2] = "802.16m";
 choices[75][3] = "802.11ac";
 answers[75] = choices[75][2];
 units[75] = "101";
 comments[75] = "Id Pregunta: 9380. ";


//  Id pregunta: 9388 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  De las tecnolog&iacute;as 4G, se puede afirmar:";
 choices[76]= new Array();
 choices[76][0] = "WiMax alcanza velocidades de bajada inferiores a 100 Mbps";
 choices[76][1] = "LTE alcanza velocidades de bajada superiores a las que se alcanzan con WiMax";
 choices[76][2] = "WiMAX puede alcanzar velocidades de bajada superiores a 100 Mbps";
 choices[76][3] = "HSPA+ no puede superar los 25 Mbps de bajada puesto que no mantiene una conexi&oacute;n permanente con la estaci&oacute;n base";
 answers[76] = choices[76][2];
 units[76] = "108";
 comments[76] = "Id Pregunta: 9388. http://en.wikipedia.org/wiki/4G";


//  Id pregunta: 9512 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  En relaci&oacute;n a las APIs de Java, indique la afirmaci&oacute;n falsa:";
 choices[77]= new Array();
 choices[77][0] = "JNDI es el API est&aacute;ndar para el acceso a directorios y servicios de nombres";
 choices[77][1] = "JTA permite que los componentes EE gestionen sus propias transacciones";
 choices[77][2] = "Java IDL permite a las aplicaciones Java EE invocar a objetos CORBA";
 choices[77][3] = "JAX-RPC no soporta WSDL";
 answers[77] = choices[77][3];
 units[77] = "116";
 comments[77] = "Id Pregunta: 9512. NULL";


//  Id pregunta: 9519 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  Java dispone de diferentes APIs con el fin de dar soporte para web services. La API que no est&aacute; relacionada con web services es:";
 choices[78]= new Array();
 choices[78][0] = "JAXR";
 choices[78][1] = "JAXB";
 choices[78][2] = "JAXP";
 choices[78][3] = "JTA";
 answers[78] = choices[78][3];
 units[78] = "116";
 comments[78] = "Id Pregunta: 9519. NULL";


//  Id pregunta: 9526 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  Se&ntilde;ale la afimaci&oacute;n falsa con respecto al protocolo H.329:";
 choices[79]= new Array();
 choices[79][0] = "Es un protocolo que define la se&ntilde;alizaci&oacute;n de llamadas";
 choices[79][1] = "Es un protocolo que permite la inclusi&oacute;n de tr&aacute;fico de datos";
 choices[79][2] = "Especifica un protocolo para el control y etiquetado de dos canales simult&aacute;neos en una &uacute;nica videoconferencia";
 choices[79][3] = "Simplifica y complementa al protocolo T.120";
 answers[79] = choices[79][0];
 units[79] = "117";
 comments[79] = "Id Pregunta: 9526. NULL";


//  Id pregunta: 9853 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  &iquest;Cu&aacute;l de las siguientes afirmaciones referentes a un sistema criptogr&aacute;fico de clave p&uacute;blica o asim&eacute;trico es falsa?: ";
 choices[80]= new Array();
 choices[80][0] = "La clave privada del emisor es la usada para garantizar la confidencialidad.";
 choices[80][1] = "La criptograf&iacute;a de clave p&uacute;blica se usa para la implantaci&oacute;n de servicios de seguridad avanzados como: autenticidad (firma digital), no repudio e integridad entre otros. ";
 choices[80][2] = "El uso de criptograf&iacute;a de clave p&uacute;blica, para servicios de confidencialidad, proporciona un rendimiento muy inferior (caracteres cifrados/segundo) al proporcionado por los algoritmos sim&eacute;tricos. ";
 choices[80][3] = "La gesti&oacute;n de claves de los sistemas criptogr&aacute;ficos asim&eacute;tricos es m&aacute;s sencilla que la existente en los sistemas convecionales sim&eacute;tricos de clave secreta. ";
 answers[80] = choices[80][0];
 units[80] = "111";
 comments[80] = "Id Pregunta: 9853. Examen Gesti&oacute;n de Inform&aacute;tica Universidad de Granada 2012";


//  Id pregunta: 9878 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  De acuerdo con la Ley 9/2014, General de Telecomunicaciones, &iquest;cu&aacute;l de las siguientes conductas se considera infracci&oacute;n muy grave?";
 choices[81]= new Array();
 choices[81][0] = "La producci&oacute;n deliberada de interferencias definidas como perjudiciales en la citada Ley.";
 choices[81][1] = "El establecimiento de comunicaciones con estaciones no autorizadas.";
 choices[81][2] = "La emisi&oacute;n de se&ntilde;ales de identificaci&oacute;n falsas o enga&ntilde;osas.";
 choices[81][3] = "La instalaci&oacute;n de estaciones radioel&eacute;ctricas sin autorizaci&oacute;n, cuando, de acuerdo con lo dispuesto en la normativa reguladora de las telecomunicaciones, sea necesaria.";
 answers[81] = choices[81][0];
 units[81] = "110";
 comments[81] = "Id Pregunta: 9878. TIC A1, Examen 2013";


//  Id pregunta: 9930 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  &iquest;Qu&eacute; ASE (Elemento de Servicio de Aplicaci&oacute;n) usan todas las aplicaciones?";
 choices[82]= new Array();
 choices[82][0] = "ACSE (Association Control Service Element).";
 choices[82][1] = "RTSE (Reliable Transfer Service Element).";
 choices[82][2] = "ROSE (Remote Operation Service Element).";
 choices[82][3] = "ATSE (Application Transfer Service Element).";
 answers[82] = choices[82][0];
 units[82] = "100";
 comments[82] = "Id Pregunta: 9930. NULL";


//  Id pregunta: 10039 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  &iquest;De qu&eacute; tipo es la direcci&oacute;n de IPv6 ff00::/8?";
 choices[83]= new Array();
 choices[83][0] = "No es v&aacute;lida.";
 choices[83][1] = "Unicast.";
 choices[83][2] = "Multicast. ";
 choices[83][3] = "Loopback.";
 answers[83] = choices[83][2];
 units[83] = "100";
 comments[83] = "Id Pregunta: 10039. TIC A2, promoci&oacute;n interna y libre, examen 2013";


//  Id pregunta: 10069 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  Analizando los problemas con la calidad de servicio en VoIP, &iquest;qu&eacute; se entiende por jitter?";
 choices[84]= new Array();
 choices[84][0] = "Una reflexi&oacute;n retardada de la se&ntilde;al ac&uacute;stica original.";
 choices[84][1] = "El tiempo que tarda un paquete en llegar desde la fuente al destino.";
 choices[84][2] = "Variaci&oacute;n en el tiempo de llegada de los paquetes, causada por congesti&oacute;n de red, perdida de sincronizaci&oacute;n o por las diferentes rutas seguidas.";
 choices[84][3] = "Cantidad de informaci&oacute;n o de datos que se puede enviar a trav&eacute;s de una conexi&oacute;n de red en un per&iacute;odo de tiempo dado.";
 answers[84] = choices[84][2];
 units[84] = "109";
 comments[84] = "Id Pregunta: 10069. TIC A2, libre, Examen 2013";


//  Id pregunta: 10073 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Sobre LTE (Long Term Evolution) es cierto que:";
 choices[85]= new Array();
 choices[85][0] = "Se conoce comercialmente como Generaci&oacute;n 3.0 G.";
 choices[85][1] = "Utiliza multiplexaci&oacute;n OFDM (Orthogonal frequency-division multiplexing) en el enlace descendente.";
 choices[85][2] = "Abandona el uso de antenas MIMO de la generaci&oacute;n anterior.";
 choices[85][3] = "Es un est&aacute;ndar norteamericano incompatible en Europa.";
 answers[85] = choices[85][1];
 units[85] = "107";
 comments[85] = "Id Pregunta: 10073. TIC A2, libre, Examen 2013";


//  Id pregunta: 10314 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Un conector tipo &quot;MT-Array&quot; es un conector para:";
 choices[86]= new Array();
 choices[86][0] = "Fibra &oacute;ptica.";
 choices[86][1] = "Mainframes.";
 choices[86][2] = "Buses PCI.";
 choices[86][3] = "Buses PCI.";
 answers[86] = choices[86][0];
 units[86] = "99";
 comments[86] = "Id Pregunta: 10314. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10328 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  Se&ntilde;ale la afirmaci&oacute;n falsa";
 choices[87]= new Array();
 choices[87][0] = "El servidor puede alojar un interprete de scripting";
 choices[87][1] = "El cliente puede alojar un interprerte de scripting";
 choices[87][2] = "Para usar el driver JDBC se necesita descargar un plug-in proporcionado por cada fabricante";
 choices[87][3] = "Un script del lado del cliente no puede solicitarle al servidor su certificado para establecer un canal autenticado bidireccionalmente";
 answers[87] = choices[87][2];
 units[87] = "114";
 comments[87] = "Id Pregunta: 10328. ";


//  Id pregunta: 10540 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  Se&ntilde;ale la respuesta correcta en lo referente a la detecci&oacute;n y correcci&oacute;n de errores en telecomunicaciones";
 choices[88]= new Array();
 choices[88][0] = "CRC (C&oacute;digo de Redundancia C&iacute;clico) permite detectar y corregir errores en recepci&oacute;n";
 choices[88][1] = "un c&oacute;digo Hamming de distancia 3 permite detectar 2 errores y corregir 1";
 choices[88][2] = "Reed-Solomon solamente permite detectar errores, no corregirlos";
 choices[88][3] = "todas las anteriores son incorrectas";
 answers[88] = choices[88][1];
 units[88] = "100";
 comments[88] = "Id Pregunta: 10540. NULL";


//  Id pregunta: 11179 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  &iquest;Cu&aacute;l de los siguientes protocolos de encaminamiento es de nivel interno?";
 choices[89]= new Array();
 choices[89][0] = "OSPF";
 choices[89][1] = "IS-IS";
 choices[89][2] = "RIP";
 choices[89][3] = "Todos los anteriores";
 answers[89] = choices[89][3];
 units[89] = "103";
 comments[89] = "Id Pregunta: 11179. ";


//  Id pregunta: 11305 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  Cu&aacute;l de las siguientes es una caracter&iacute;stca de SIP";
 choices[90]= new Array();
 choices[90][0] = "M&aacute;s cercano a http y datos";
 choices[90][1] = "Est&aacute;ndar de la ITU-T";
 choices[90][2] = "Las tareas de se&ntilde;alizaci&oacute;n dependen de un servidor central, con terminales &quot;tontos&quot; en los extremos.";
 choices[90][3] = "Presentado como evoluci&oacute;n de SS7, dise&ntilde;ado para el control de la se&ntilde;alizaci&oacute;n en redes de conmutaci&oacute;n de circuitos.";
 answers[90] = choices[90][0];
 units[90] = "104";
 comments[90] = "Id Pregunta: 11305. Es un est&aacute;ndar de IETF. ";


//  Id pregunta: 11439 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Seg&uacute;n la Ley 9/2014, una de las facultades del Gobierno para la administraci&oacute;n del espectro es:";
 choices[91]= new Array();
 choices[91][0] = "Adecuada utilizaci&oacute;n del espectro mediante el empleo de equipos y aparatos.";
 choices[91][1] = "Aprobar los planes de utilizaci&oacute;n del espectro elaborados por el MINETUR.";
 choices[91][2] = "Aplicar procedimientos para la reasignaci&oacute;n del uso de bandas de frecuencias.";
 choices[91][3] = "Otorgar t&iacute;tulos habilitantes para el uso del dominio p&uacute;blico radioel&eacute;ctrico para fines experimentales o eventos de corta duraci&oacute;n.";
 answers[91] = choices[91][0];
 units[91] = "110";
 comments[91] = "Id Pregunta: 11439. ";


//  Id pregunta: 11451 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Seg&uacute;n la Ley 9/2014, el Gobierno, al administrar el espectro radioel&eacute;ctrico, debe:";
 choices[92]= new Array();
 choices[92][0] = "Determinar los niveles de emisi&oacute;n radioel&eacute;ctrica tolerable.";
 choices[92][1] = "Establecer el procedimiento para reasignar el uso de las bandas para un uso m&aacute;s eficiente del espectro.";
 choices[92][2] = "Utilizar el espectro de forma adecuada.";
 choices[92][3] = "Todas son atribuciones del Gobierno.";
 answers[92] = choices[92][3];
 units[92] = "110";
 comments[92] = "Id Pregunta: 11451. ";


//  Id pregunta: 11463 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Seg&uacute;n la Ley 9/2014, los costes derivados de la actualizaci&oacute;n de los elementos de la red y de los sistemas necesarios para hacer posible la conservaci&oacute;n de los n&uacute;meros que deber&aacute;n ser sufragados por:";
 choices[93]= new Array();
 choices[93][0] = "El Gobierno.";
 choices[93][1] = "El usuario a trav&eacute;s de la cuota de l&iacute;nea.";
 choices[93][2] = "Cada operador.";
 choices[93][3] = "Entre cada operador y los usuarios.";
 answers[93] = choices[93][2];
 units[93] = "110";
 comments[93] = "Id Pregunta: 11463. ";


//  Id pregunta: 11467 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Indique la opci&oacute;n FALSA entre las siguientes sobre la Ley General de Telecomunicaciones 9/2014:";
 choices[94]= new Array();
 choices[94][0] = "Los planes nacionales de numeraci&oacute;n, direccionamiento y denominaci&oacute;n se aprueban por real decreto.";
 choices[94][1] = "El MINETUR podr&aacute;, mediante orden ministerial y previo informe de la CNMC, modificar la estructura y organizaci&oacute;n de los planes nacionales.";
 choices[94][2] = "La CNMC podr&aacute; fijar mediante circular la conservaci&oacute;n de los n&uacute;meros.";
 choices[94][3] = "La CNMC podr&aacute; fijar mediante resoluci&oacute;n las condiciones de conservaci&oacute;n de los n&uacute;meros.";
 answers[94] = choices[94][3];
 units[94] = "110";
 comments[94] = "Id Pregunta: 11467. ";


//  Id pregunta: 11474 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Seg&uacute;n la Ley 9/2014, indique la respuesta INCORRECTA:";
 choices[95]= new Array();
 choices[95][0] = "El MINUETUR publicar&aacute; procedimientos de resoluci&oacute;n de controversias.";
 choices[95][1] = "El abonado puede decidir si figura en la gu&iacute;a.";
 choices[95][2] = "El cambio de operador con conservaci&oacute;n del n&uacute;mero se realizar&aacute; en un plazo m&aacute;ximo de 72 horas.";
 choices[95][3] = "Los usuarios tiene derecho de acceso gratuito a servicios de emergencia.";
 answers[95] = choices[95][2];
 units[95] = "110";
 comments[95] = "Id Pregunta: 11474. ";


//  Id pregunta: 11566 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Las direcciones IPv6 que permiten la configuraci&oacute;n autom&aacute;tica cuando no hay routers presentes son:";
 choices[96]= new Array();
 choices[96][0] = "Global Multicast";
 choices[96][1] = "Link Unique Address";
 choices[96][2] = "Link Local";
 choices[96][3] = "Este procedimiento no est&aacute; permitido por el protocolo IPv6";
 answers[96] = choices[96][2];
 units[96] = "100";
 comments[96] = "Id Pregunta: 11566. NULL";


//  Id pregunta: 11671 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Las gu&iacute;as de mejores pr&aacute;ticas de Java se denominan:";
 choices[97]= new Array();
 choices[97][0] = "Hibernate";
 choices[97][1] = "Spring";
 choices[97][2] = "BluePrints";
 choices[97][3] = "Struts";
 answers[97] = choices[97][2];
 units[97] = "116";
 comments[97] = "Id Pregunta: 11671. ";


//  Id pregunta: 11710 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Qu&eacute; m&eacute;todo de conmutaci&oacute;n LAN ejecuta un CRC en cada trama?";
 choices[98]= new Array();
 choices[98][0] = "Metodo de corte";
 choices[98][1] = "Verificaci&oacute;n de fragmentos";
 choices[98][2] = "Libre de fragmentos";
 choices[98][3] = "Almacenamiento y env&iacute;o";
 answers[98] = choices[98][3];
 units[98] = "102";
 comments[98] = "Id Pregunta: 11710. NULL";


//  Id pregunta: 11721 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Qu&eacute; comando se puede utilizar en un PC con S.O. Windows para obtener la configuraci&oacute;n IP de ese equipo?";
 choices[99]= new Array();
 choices[99][0] = "ifconfig -a";
 choices[99][1] = "netstat -rn";
 choices[99][2] = "iptables -L";
 choices[99][3] = "ipconfig";
 answers[99] = choices[99][3];
 units[99] = "102";
 comments[99] = "Id Pregunta: 11721. NULL";


