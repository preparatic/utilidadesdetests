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

//  Id pregunta: 1233 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  La modulaci&oacute;n QAM transmite a:";
 choices[0]= new Array();
 choices[0][0] = "1 bit por baudio.";
 choices[0][1] = "4 bits por baudio.";
 choices[0][2] = "2 bits por baudio.";
 choices[0][3] = "Depende de las portadoras utilizadas.";
 answers[0] = choices[0][1];
 units[0] = "107";
 comments[0] = "Id Pregunta: 1233. NULL";


//  Id pregunta: 1257 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  Las modulaciones angulares, respecto a las modulaciones lineales:";
 choices[1]= new Array();
 choices[1][0] = "Dan peor discriminaci&oacute;n en contra del ruido y la interferencia.";
 choices[1][1] = "Utilizan menor ancho de banda.";
 choices[1][2] = "Utilizan mayor energ&iacute;a para transmitir.";
 choices[1][3] = "Dan mejor discriminaci&oacute;n en contra del ruido y la interferencia.";
 answers[1] = choices[1][3];
 units[1] = "107, 108";
 comments[1] = "Id Pregunta: 1257. ";


//  Id pregunta: 1494 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;Qu&eacute; se entiende por audioconferencia?:";
 choices[2]= new Array();
 choices[2][0] = "Servicio que permite a m&aacute;s de dos usuarios participar simult&aacute;neamente en una &uacute;nica conversaci&oacute;n";
 choices[2][1] = "Servicio que permite a un usuario telef&oacute;nico depositar mensajes de voz en un audiobuz&oacute;n";
 choices[2][2] = "Servicio que suministra una informaci&oacute;n grabada de tipo gen&eacute;rico";
 choices[2][3] = "Servicio de telefon&iacute;a m&oacute;vil en grupo cerrado de usuarios";
 answers[2] = choices[2][0];
 units[2] = "117";
 comments[2] = "Id Pregunta: 1494. ";


//  Id pregunta: 2897 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  En GSM (Global System Mobile) el acceso al medio utilizado es:";
 choices[3]= new Array();
 choices[3][0] = "Acceso m&uacute;ltiple por divisi&oacute;n de tiempo.";
 choices[3][1] = "Acceso m&uacute;ltiple por divisi&oacute;n de frecuencia.";
 choices[3][2] = "Acceso m&uacute;ltiple por divisi&oacute;n de frecuencia y tiempo.";
 choices[3][3] = "Acceso m&uacute;ltiple por divisi&oacute;n en c&oacute;digo de banda ancha.";
 answers[3] = choices[3][2];
 units[3] = "108";
 comments[3] = "Id Pregunta: 2897. ";


//  Id pregunta: 2965 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  &iquest;Cu&aacute;l es el sistema de acceso que utiliza GPRS?";
 choices[4]= new Array();
 choices[4][0] = "OFDM/TDD";
 choices[4][1] = "CDMA/TDD";
 choices[4][2] = "CDMA/FDD";
 choices[4][3] = "Ninguno de los anteriores";
 answers[4] = choices[4][3];
 units[4] = "108";
 comments[4] = "Id Pregunta: 2965. ";


//  Id pregunta: 3011 AÃ±o de creación de pregunta: 2004-01-01
 questions[5]= "6)  &iquest;A qu&eacute; se corresponden las siglas 802.11f sobre redes inal&aacute;mbricas?";
 choices[5]= new Array();
 choices[5][0] = "A especificaciones de nivel f&iacute;sico ";
 choices[5][1] = "A especificaciones sobre calidad de servicio QoS";
 choices[5][2] = "A especificaciones de Seguridad";
 choices[5][3] = "A especificiaciones de comunicaci&oacute;n entre puntos de acceso";
 answers[5] = choices[5][3];
 units[5] = "107";
 comments[5] = "Id Pregunta: 3011. Es una recomendaci&oacute;n que permite mayor compatibilidad. Usa el protocolo IAPP que permite a un usuario itinerante cambiarse de un punto de acceso a otro mientras est&aacute; en movimiento sin importar qu&eacute; marcas de puntos de acceso se usan en la red.";


//  Id pregunta: 3015 AÃ±o de creación de pregunta: 2004-01-01
 questions[6]= "7)  Entre las carater&iacute;sticas de propagaci&oacute;n de las ondas de radiofrecuencia, cu&aacute;l de las siguientes afirmaciones no es correcta cuando se incrementa la frecuencia?";
 choices[6]= new Array();
 choices[6][0] = "Menor alcance de la se&ntilde;al";
 choices[6][1] = "menor ancho de banda";
 choices[6][2] = "mayor inmunidad al ruido";
 choices[6][3] = "mayor necesidad de visibilidad directa";
 answers[6] = choices[6][1];
 units[6] = "107";
 comments[6] = "Id Pregunta: 3015. NULL";


//  Id pregunta: 3157 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes afirmaciones no corresponde a la tecnolog&iacute;a ATM?:";
 choices[7]= new Array();
 choices[7][0] = "Es tecnolog&iacute;a de conmutaci&oacute;n de tipo 'Frame-Relay'";
 choices[7][1] = "Es tecnolog&iacute;a orientada a conexi&oacute;n, con tama&ntilde;o de paquete fijo de 53 bytes";
 choices[7][2] = "Permite multiplexar diferentes tipos de tr&aacute;fico, por ejemplo voz, datos y v&iacute;deo en circuitos virtuales";
 choices[7][3] = "Usa t&eacute;cnicas de multiplexaci&oacute;n estad&iacute;stica, pudiendo conmutar interfaces individuales de hasta 622 Mbit/s en la actualidad";
 answers[7] = choices[7][0];
 units[7] = "109";
 comments[7] = "Id Pregunta: 3157. ";


//  Id pregunta: 3174 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Cu&aacute;l de las siguientes modulaciones, utilizadas con la tecnolog&iacute;a LMDS, proporciona mayor eficiencia espectral?:";
 choices[8]= new Array();
 choices[8][0] = "QPSK";
 choices[8][1] = "4-QAM";
 choices[8][2] = "16-QAM";
 choices[8][3] = "64-QAM";
 answers[8] = choices[8][3];
 units[8] = "107";
 comments[8] = "Id Pregunta: 3174. NULL";


//  Id pregunta: 3185 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l de las siguientes respuestas sobre Emulacion de LAN en ATM es cierta?:";
 choices[9]= new Array();
 choices[9][0] = "Proporciona a las estaciones enganchadas via ATM las mismas capacidades que obtienen de una LAN tipo Ethernet o Token-Ring";
 choices[9][1] = "Requiere modificaciones de los protocolos de mayor nivel (de la capa de red)  para permitir operaciones via una red ATM";
 choices[9][2] = "Intenta emular el Media Access Control (MAC) real de la LAN espec&iacute;fica";
 choices[9][3] = "Define un esquema de encapsulado para Ethernet, Token-Ring y FDDI";
 answers[9] = choices[9][0];
 units[9] = "109";
 comments[9] = "Id Pregunta: 3185. ";


//  Id pregunta: 3240 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Cu&aacute;l es el significado correcto en la actualidad de las siglas GSM?:";
 choices[10]= new Array();
 choices[10][0] = "Group System Mobile";
 choices[10][1] = "Global System Mobile";
 choices[10][2] = "Global Special Mobile";
 choices[10][3] = "Group  Special Mobile";
 answers[10] = choices[10][1];
 units[10] = "108";
 comments[10] = "Id Pregunta: 3240. ";


//  Id pregunta: 3265 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;En qu&eacute; bandas de frecuencias se han concedido licencias LMDS en Espa&ntilde;a?:";
 choices[11]= new Array();
 choices[11][0] = "450 y 900 MHz";
 choices[11][1] = "450 y 900 GHz";
 choices[11][2] = "3,5 y 26 MHz";
 choices[11][3] = "3,5 y 26 GHz";
 answers[11] = choices[11][3];
 units[11] = "107";
 comments[11] = "Id Pregunta: 3265. NULL";


//  Id pregunta: 3271 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  &iquest;En qu&eacute; tipo de aplicaci&oacute;n no ser&iacute;a adecuada la instalaci&oacute;n de una conexi&oacute;n Frame Relay?:";
 choices[12]= new Array();
 choices[12][0] = "Correo electr&oacute;nico";
 choices[12][1] = "Conexi&oacute;n de redes de area local";
 choices[12][2] = "Video";
 choices[12][3] = "Todas las anteriores son posibles aplicaciones de una red Frame Relay de alta velocidad";
 answers[12] = choices[12][2];
 units[12] = "109";
 comments[12] = "Id Pregunta: 3271. ";


//  Id pregunta: 3287 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  &iquest;Qu&eacute; es SDH?";
 choices[13]= new Array();
 choices[13][0] = "una familia de protocolos para transportar se&ntilde;ales digitales multimedia";
 choices[13][1] = "un conjunto de especificaciones de tasas de transmisi&oacute;n que transportan s&iacute;ncronamente se&ntilde;ales digitales de diferentes capacidades";
 choices[13][2] = "una torre de protocolos propietaria similar a SNA";
 choices[13][3] = "un conjunto de est&aacute;ndares americanos de transporte de se&ntilde;ales digitales entre sistemas digitales";
 answers[13] = choices[13][1];
 units[13] = "109";
 comments[13] = "Id Pregunta: 3287. ";


//  Id pregunta: 3349 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  Cuando hablamos de Frame Relay, &iquest;En qu&eacute; consiste el CIR?:";
 choices[14]= new Array();
 choices[14][0] = "El el tanto por ciento de ocupaci&oacute;n de canal m&aacute;ximo en las horas punta, seg&uacute;n el contrato de calidad de servicio";
 choices[14][1] = "Es la tarifa m&iacute;nima de alquiler de circuito que nos da derecho al envio de un n&uacute;mero de tramas al mes (las tramas en horas valle se ponderan con un factor variable)";
 choices[14][2] = "El la velocidad m&aacute;xima de informaci&oacute;n que el transportista nos asegura en cualquier momento, pudiendo 'tirar a la basura' las que excedan ese valor, si hay saturaci&oacute;n en la red";
 choices[14][3] = "Es el n&uacute;mero m&aacute;ximo de tramas err&oacute;neas (en porcentaje) que el transportista nos asegura en el contrato de nuestra 'Calidad de Servicio'";
 answers[14] = choices[14][2];
 units[14] = "109";
 comments[14] = "Id Pregunta: 3349. ";


//  Id pregunta: 3371 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  Dentro de una celda ATM, el campo GFC:";
 choices[15]= new Array();
 choices[15][0] = "S&oacute;lo esta presente en las celdas de los interfaces usuario-red";
 choices[15][1] = "Al igual que el campo CLP, &quot;marca&quot; la celda a lo largo de todo su transito por la red";
 choices[15][2] = "Tiene una longitud de 1 bit";
 choices[15][3] = "Proporciona la sincronizaci&oacute;n entre celdas";
 answers[15] = choices[15][0];
 units[15] = "109";
 comments[15] = "Id Pregunta: 3371. ";


//  Id pregunta: 3377 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  El est&aacute;ndar X.25 usa, a nivel de enlace, el protocolo:";
 choices[16]= new Array();
 choices[16][0] = "SDLC";
 choices[16][1] = "LAP-B";
 choices[16][2] = "Ethernet";
 choices[16][3] = "SAP";
 answers[16] = choices[16][1];
 units[16] = "100, 101, 109";
 comments[16] = "Id Pregunta: 3377. ";


//  Id pregunta: 3396 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  El nivel fisico denominado 802.11b se conoce como:";
 choices[17]= new Array();
 choices[17][0] = "High Rate Sequence HR/DS PHY (high-rate, direct-sequence PHY)";
 choices[17][1] = "High Rate Sequence HR/DSSS PHY (High Rate / Direct Sequence Spread Spectrum Physical Layer)";
 choices[17][2] = "OFDM PHY";
 choices[17][3] = "Las respuestas 'a' y 'b' son correctas";
 answers[17] = choices[17][3];
 units[17] = "101,107";
 comments[17] = "Id Pregunta: 3396. ";


//  Id pregunta: 3521 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  En Frame Relay FECN y BECN son:";
 choices[18]= new Array();
 choices[18][0] = "Mecanismos de control de errores";
 choices[18][1] = "Mecanismos de notificaci&oacute;n de congesti&oacute;n en la red";
 choices[18][2] = "Mecanismos de control de flujo";
 choices[18][3] = "Mecanismos de 'keepalive' (saber los nodos activos)";
 answers[18] = choices[18][1];
 units[18] = "109";
 comments[18] = "Id Pregunta: 3521. ";


//  Id pregunta: 3561 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  En UMTS un terminal puede comunicarse simult&aacute;neamente a trav&eacute;s de dos celdas diferentes. Esto:";
 choices[19]= new Array();
 choices[19][0] = "Es cierto tambi&eacute;n en GSM";
 choices[19][1] = "Es cierto tambi&eacute;n en GPRS";
 choices[19][2] = "Es cierto s&oacute;lo en UMTS";
 choices[19][3] = "Ninguna de las anteriores";
 answers[19] = choices[19][2];
 units[19] = "108";
 comments[19] = "Id Pregunta: 3561. Handover soft/softer";


//  Id pregunta: 3687 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  La versi&oacute;n europea de la tecnolog&iacute;a de sat&eacute;lites GPS americana se denomina:";
 choices[20]= new Array();
 choices[20][0] = "Kepler";
 choices[20][1] = "Galileo";
 choices[20][2] = "Marconi";
 choices[20][3] = "Hawking";
 answers[20] = choices[20][1];
 units[20] = "108";
 comments[20] = "Id Pregunta: 3687. ";


//  Id pregunta: 3715 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  Los circuitos de la red telef&oacute;nica conmutada anal&oacute;gica, vistos desde el interfaz LT - ETCD...:";
 choices[21]= new Array();
 choices[21][0] = "No est&aacute;n limitados en banda porque no hay multiplexaci&oacute;n de se&ntilde;ales";
 choices[21][1] = "Est&aacute;n limitados a una banda entre 300 Hz y 3.400 Hz";
 choices[21][2] = "Est&aacute;n limitados a 64 kbps";
 choices[21][3] = "Est&aacute;n limitados a 144 kbps";
 answers[21] = choices[21][1];
 units[21] = "108";
 comments[21] = "Id Pregunta: 3715. ";


//  Id pregunta: 3740 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Los sat&eacute;lites de comunicaciones utilizan frecuencias elevadas (bandas Ku y K )porque:";
 choices[22]= new Array();
 choices[22][0] = "Las ondas de mayor frecuencia permiten un mayor alcance y atravesar obst&aacute;culos";
 choices[22][1] = "Las frecuencias altas permiten enviar mayor cantidad de informaci&oacute;n por segundo";
 choices[22][2] = "En estas bandas la atenuaci&oacute;n es menor";
 choices[22][3] = "Aunque la atenuaci&oacute;n es menor en estas frecuencias su alcance es mayor";
 answers[22] = choices[22][1];
 units[22] = "108";
 comments[22] = "Id Pregunta: 3740. ";


//  Id pregunta: 3756 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  OSA Parlay es:";
 choices[23]= new Array();
 choices[23][0] = "Open Services Architecture, del Parlay Group, arquitectura que pretende establecer una capa de middleware para el desarrollo de aplicaciones est&aacute;ndares comunes para el desarrollo de servicios m&oacute;viles";
 choices[23][1] = "Open Software Association, con sede establecida en Parlay (Texas)";
 choices[23][2] = "Other Specification for Applicatios, un nuevo est&aacute;ndar dise&ntilde;ado por John Parlay (miembro destacado de ITU-T) que pretende establecer una capa universal de aplicaci&oacute;n que a&uacute;ne las capas de aplicaci&oacute;n de OSI y TCP/IP favoreciendo su total compatibilidad";
 choices[23][3] = "OSA Parlay no se corresponde con ning&uacute;n acr&oacute;nimo conocido";
 answers[23] = choices[23][0];
 units[23] = "108";
 comments[23] = "Id Pregunta: 3756. ";


//  Id pregunta: 3786 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Respecto a la serie de est&aacute;ndares de redes inal&aacute;mbricas 802.x podemos decir que:";
 choices[24]= new Array();
 choices[24][0] = "802.11b es posterior a 802.11a";
 choices[24][1] = "802.11a admite una velocidad m&aacute;xima de 54 Mbps";
 choices[24][2] = "la serie 802.x tiene su origen en Europa, en el ETSI";
 choices[24][3] = "todo lo anterior es correcto";
 answers[24] = choices[24][1];
 units[24] = "107";
 comments[24] = "Id Pregunta: 3786. NULL";


//  Id pregunta: 3828 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Separaci&oacute;n del tr&aacute;fico de voz y datos, reutilizaci&oacute;n de infraestructuras existentes,  necesidad de proximidad a la central local, inversiones en equipamientos del usuario&hellip;, son todas caracter&iacute;sticas propias de las tecnolog&iacute;as:";
 choices[25]= new Array();
 choices[25][0] = "de los m&oacute;dems de cable";
 choices[25][1] = "de los dispositivos WAP";
 choices[25][2] = "de xDSL";
 choices[25][3] = "de LMDS";
 answers[25] = choices[25][2];
 units[25] = "107";
 comments[25] = "Id Pregunta: 3828. NULL";


//  Id pregunta: 3833 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  SIM equivale a:";
 choices[26]= new Array();
 choices[26][0] = "Software for IMSI of Mobiles";
 choices[26][1] = "Secure Identification of Mobile Subscriber";
 choices[26][2] = "Subscriber Identity Module";
 choices[26][3] = "Synchronous Internet Media";
 answers[26] = choices[26][2];
 units[26] = "108";
 comments[26] = "Id Pregunta: 3833. ";


//  Id pregunta: 3881 AÃ±o de creación de pregunta: 2003-01-01
 questions[27]= "28)  &iquest;Cu&aacute;les son las capas que componen la arquitectura WAP?";
 choices[27]= new Array();
 choices[27][0] = "Aplicaci&oacute;n, Sesi&oacute;n, Transacciones y Transporte";
 choices[27][1] = "Aplicaci&oacute;n, Sesi&oacute;n,Presentaci&oacute;n, Transporte, y Red";
 choices[27][2] = "Aplicaci&oacute;n, Sesi&oacute;n, Seguridad y Transporte";
 choices[27][3] = "Ninguna de las opciones anteriores es correcta";
 answers[27] = choices[27][3];
 units[27] = "108";
 comments[27] = "Id Pregunta: 3881. ";


//  Id pregunta: 3903 AÃ±o de creación de pregunta: 2003-01-01
 questions[28]= "29)  Sobre ADSL es cierto que:";
 choices[28]= new Array();
 choices[28][0] = "No es compatible con RDSI";
 choices[28][1] = "Las portadoras que usa ADSL se modulan en cuadratura";
 choices[28][2] = "Los organismos de estandarizaci&oacute;n se han decantado por la t&eacute;cnica de modulaci&oacute;n CAP para ADSL";
 choices[28][3] = "ADSL opera en un margen defrecuencias que llega hasta los 20 KHz";
 answers[28] = choices[28][1];
 units[28] = "107";
 comments[28] = "Id Pregunta: 3903. Compatible con RDSI seg&uacute;n anexo B. CAP utiliza modulaci&oacute;n QAM en canal de bajada.";


//  Id pregunta: 3971 AÃ±o de creación de pregunta: 2003-01-01
 questions[29]= "30)  Una de las caracter&iacute;sticas b&aacute;sicas de ATM (Modo de transferencia as&iacute;ncrono) es:";
 choices[29]= new Array();
 choices[29][0] = "Utiliza un formato de celda de longitud fija";
 choices[29][1] = "El tama&ntilde;o de la celda se negocia a nivel de enlace";
 choices[29][2] = "El tama&ntilde;o de la celda se negocia a trav&eacute;s de red";
 choices[29][3] = "El tama&ntilde;o de la celda se negocia a trav&eacute;s de transporte";
 answers[29] = choices[29][0];
 units[29] = "109";
 comments[29] = "Id Pregunta: 3971. ";


//  Id pregunta: 3997 AÃ±o de creación de pregunta: 2006-01-01
 questions[30]= "31)  Con respecto al est&aacute;ndar DOCSIS 1.1 (Data over Cable Service Interface Specification), se&ntilde;ale qu&eacute; afirmaci&oacute;n no es correcta:";
 choices[30]= new Array();
 choices[30][0] = "Especifica mecanismos para garantizar la QoS de flujo de datos en tiempo real como la voz.";
 choices[30][1] = "La voz y los datos viajan por canales diferentes, pero permitiendo un tratamiento uniforme en la red HFC.";
 choices[30][2] = "En la versi&oacute;n europea de DOCSIS 1.1 se establece un m&aacute;ximo de 160 km entre el CMTS (Cable Modem Termination System).";
 choices[30][3] = "En DOCSIS 1.1 est&aacute; prevista la definici&oacute;n para el soporte de ATM.";
 answers[30] = choices[30][1];
 units[30] = "105";
 comments[30] = "Id Pregunta: 3997. ";


//  Id pregunta: 3999 AÃ±o de creación de pregunta: 2006-01-01
 questions[31]= "32)  &iquest;Cu&aacute;l fue el servicio para el que originalmente fueron dise&ntilde;adas las redes de cable?";
 choices[31]= new Array();
 choices[31][0] = "Televisi&oacute;n";
 choices[31][1] = "Telefon&iacute;a";
 choices[31][2] = "Transporte de datos";
 choices[31][3] = "Conexi&oacute;n a Internet";
 answers[31] = choices[31][0];
 units[31] = "105";
 comments[31] = "Id Pregunta: 3999. ";


//  Id pregunta: 4017 AÃ±o de creación de pregunta: 2006-01-01
 questions[32]= "33)  La separaci&oacute;n entre subportadoras en la modulaci&oacute;n DMT de ADSL es de:";
 choices[32]= new Array();
 choices[32][0] = "4,3125 KHz";
 choices[32][1] = "4,3215 KHz";
 choices[32][2] = "4,315 KHz";
 choices[32][3] = "4,3175 KHz";
 answers[32] = choices[32][0];
 units[32] = "107";
 comments[32] = "Id Pregunta: 4017. NULL";


//  Id pregunta: 4025 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  &iquest;Cu&aacute;l es el ancho de banda de separaci&oacute;n entre las portadoras ascendentes y descendentes en GSM?";
 choices[33]= new Array();
 choices[33][0] = "15 MHz";
 choices[33][1] = "25 MHz";
 choices[33][2] = "35 MHz";
 choices[33][3] = "45 MHz";
 answers[33] = choices[33][3];
 units[33] = "108";
 comments[33] = "Id Pregunta: 4025. ";


//  Id pregunta: 4026 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  W-CDMA permite a UMTS trasmitir datos en un rango de velocidades que van desde los 144 Kbps a los 384 Kbps y hasta 2 Mbps en interior de edificios. Pero, &iquest;qu&eacute; t&eacute;cnica de duplexi&oacute;n usa W-CDMA?";
 choices[34]= new Array();
 choices[34][0] = "TDD";
 choices[34][1] = "FDD";
 choices[34][2] = "Las dos anteriores";
 choices[34][3] = "Ninguna de las anteriores";
 answers[34] = choices[34][2];
 units[34] = "108";
 comments[34] = "Id Pregunta: 4026. ";


//  Id pregunta: 4029 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  En una trama Frame Relay, la longitud del campo de direcci&oacute;n, y por lo tanto del DLCI, se determina:";
 choices[35]= new Array();
 choices[35][0] = "Con la informaci&oacute;n contenida en la cabecera de la trama, en el campo VA.";
 choices[35][1] = "Con la informaci&oacute;n contenida en la cabecera de la trama, en el campo EA.";
 choices[35][2] = "Con la informaci&oacute;n contenida en la cabecera de la trama, en el campo CR.";
 choices[35][3] = "El campo de direcci&oacute;n es de longitud fija, por lo que no necesita de ning&uacute;n otro campo en la cabecera para indicar su longitud.";
 answers[35] = choices[35][1];
 units[35] = "109";
 comments[35] = "Id Pregunta: 4029. ";


//  Id pregunta: 4065 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  Que tendencias se observan en los servicios de telecomunicaciones";
 choices[36]= new Array();
 choices[36][0] = "La convergencia de las redes de voz y datos";
 choices[36][1] = "La convergencia de las tecnolog&iacute;as de telefonia movil y las tecnolog&iacute;as wireless como wi-fi";
 choices[36][2] = "Ninguna de las anteriores";
 choices[36][3] = "tanto la opci&oacute;n a como la b";
 answers[36] = choices[36][3];
 units[36] = "102,107,108";
 comments[36] = "Id Pregunta: 4065. ";


//  Id pregunta: 4124 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  La tecnolog&iacute;a que permite varios canales independientes en una &uacute;nica fibra &oacute;ptica mediante el uso de diferentes frecuencias de luz se llama";
 choices[37]= new Array();
 choices[37][0] = "Multiplexado por divisi&oacute;n de frecuencia (FDM)";
 choices[37][1] = "Multiplexado por divisi&oacute;n de tiempo (TDM)";
 choices[37][2] = "Multiplexado por divisi&oacute;n densa de la longitud de onda (DWDM)";
 choices[37][3] = "Multiplexado tradicional (MUX)";
 answers[37] = choices[37][2];
 units[37] = "105";
 comments[37] = "Id Pregunta: 4124. ";


//  Id pregunta: 4209 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  El protocolo utilizado para acceder a Internet desde cualquier dispositivo inal&aacute;mbrico haciendo uso del lenguaje WML (Wireless Markup Language) es:";
 choices[38]= new Array();
 choices[38][0] = "WEP";
 choices[38][1] = "WPA";
 choices[38][2] = "WAP";
 choices[38][3] = "WTP";
 answers[38] = choices[38][2];
 units[38] = "108";
 comments[38] = "Id Pregunta: 4209. ";


//  Id pregunta: 4430 AÃ±o de creación de pregunta: 2007-01-01
 questions[39]= "40)  &iquest;Cu&aacute;l es la banda de frecuencia reservada a voz convencional en la tecnolog&iacute;a ADSL?";
 choices[39]= new Array();
 choices[39][0] = "0-10 KHz";
 choices[39][1] = "0-4 KHz";
 choices[39][2] = "0-56 KHz";
 choices[39][3] = "5-10 KHz";
 answers[39] = choices[39][1];
 units[39] = "107";
 comments[39] = "Id Pregunta: 4430. NULL";


//  Id pregunta: 4663 AÃ±o de creación de pregunta: 2009-01-01
 questions[40]= "41)  Modulaci&oacute;n empleada en la tecnolog&iacute;a HSDPA en R5 para el enlace descendente";
 choices[40]= new Array();
 choices[40][0] = "4QAM y QPSK";
 choices[40][1] = "8QAM y QPSK";
 choices[40][2] = "16 QAM y QPSK";
 choices[40][3] = "Ninguna de las anteriores";
 answers[40] = choices[40][2];
 units[40] = "108";
 comments[40] = "Id Pregunta: 4663. ";


//  Id pregunta: 4690 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  &iquest;Cu&aacute;l de los siguientes protocolos hace referencia a redes inal&aacute;mbricas?";
 choices[41]= new Array();
 choices[41][0] = "802.1";
 choices[41][1] = "802.3";
 choices[41][2] = " 802.11b";
 choices[41][3] = "802.3u";
 answers[41] = choices[41][2];
 units[41] = "107";
 comments[41] = "Id Pregunta: 4690. Examen 2006 JCYL";


//  Id pregunta: 4751 AÃ±o de creación de pregunta: 2009-01-01
 questions[42]= "43)  &iquest;Cu&aacute;l de los siguientes sistemas de telefon&iacute;a se dise&ntilde;o para trabajar en espacios reducidos y altas densidades de tr&aacute;fico?";
 choices[42]= new Array();
 choices[42][0] = "GSM 900";
 choices[42][1] = "TACS";
 choices[42][2] = "DECT";
 choices[42][3] = "PAS";
 answers[42] = choices[42][2];
 units[42] = "108";
 comments[42] = "Id Pregunta: 4751. ";


//  Id pregunta: 4796 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  &iquest;Cu&aacute;l de las siguientes afirmaciones relativas al conjunto de est&aacute;ndares IEEE (Institute of Electrical and ElectronicsEngineers) 802.11 es cierta?";
 choices[43]= new Array();
 choices[43][0] = "El est&aacute;ndar IEEE 802.11b utiliza la t&eacute;cnica de modulaci&oacute;n DSSS (Direct-sequence Spread Spectrum)";
 choices[43][1] = "El est&aacute;ndar IEEE 802.11a utiliza la t&eacute;cnica de modulaci&oacute;n FHSS (Frequency-hopping spread spectrum)";
 choices[43][2] = "El est&aacute;ndar IEEE 802.11 original utiliza la t&eacute;cnica de modulaci&oacute;n OFDM (Orthogonal Frequency-divisionMultiplexing)";
 choices[43][3] = "El est&aacute;ndar IEEE 802.11g utiliza la t&eacute;cnica de modulaci&oacute;n DWDM (Dense Wavelength Division Multiplexing)";
 answers[43] = choices[43][0];
 units[43] = "107";
 comments[43] = "Id Pregunta: 4796. NULL";


//  Id pregunta: 4816 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  Dentro de una red GPRS (General Packet Radio Service), &iquest;cu&aacute;l de las siguientes funciones es propia del GGSN(Gateway GPRS Support Node)?";
 choices[44]= new Array();
 choices[44][0] = "La gesti&oacute;n de la movilidad";
 choices[44][1] = "El cifrado y autenticaci&oacute;n";
 choices[44][2] = "La conexi&oacute;n al HLR (Home Location Register)";
 choices[44][3] = "La conexi&oacute;n a los ISP (Internet Service Provider)";
 answers[44] = choices[44][3];
 units[44] = "108";
 comments[44] = "Id Pregunta: 4816. ";


//  Id pregunta: 4886 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  El impulso de las redes WLAN (Wireless Local Area Network) se ha visto rodeado de fuertes cr&iacute;ticas respecto a laseguridad que ofrecen a los usuarios, ya que las se&ntilde;ales se transportan a trav&eacute;s del aire, que es un entorno quepermite a un hacker/craker interceptar dichas se&ntilde;ales. &iquest;Cu&aacute;l de las siguientes afirmaciones respecto a losest&aacute;ndares y protocolos de seguridad desarrollados para las redes WLAN NO es cierta?";
 choices[45]= new Array();
 choices[45][0] = "El protocolo WEP (Wired Equivalent Privacy) se dise&ntilde;&oacute; para asegurar el enlace de radio entre dispositivosen redes IEEE (Institute of Electrical and Electronics Engineers) 802.11 y utiliza el algoritmo de cifradosim&eacute;trico RC4";
 choices[45][1] = "El protocolo WEP din&aacute;mico fue creado, como soluci&oacute;n temporal para resolver los problemas de seguridaddel protocolo WEP, y est&aacute; basado en el est&aacute;ndar IEEE 802.1x";
 choices[45][2] = "El protocolo WPA (Wi-Fi Protected Access) define los modos de trabajo WPA-PERSONAL y WPAENTERPRISE";
 choices[45][3] = "IEEE 802.1i es el est&aacute;ndar que ha definido una arquitectura m&aacute;s robusta y segura para las redesinal&aacute;mbricas";
 answers[45] = choices[45][3];
 units[45] = "107";
 comments[45] = "Id Pregunta: 4886. NULL";


//  Id pregunta: 4979 AÃ±o de creación de pregunta: 2003-01-01
 questions[46]= "47)  En ADSL, las velocidades de datos dependen de diversos factores. &iquest;Cu&aacute;l no es uno de ellos?:";
 choices[46]= new Array();
 choices[46][0] = "Longitud de la l&iacute;nea de cobre.";
 choices[46][1] = "La presencia de derivaciones puenteadas.";
 choices[46][2] = "La informaci&oacute;n de se&ntilde;alizaci&oacute;n que se debe transmitir simult&aacute;neamente.";
 choices[46][3] = "La interferencia de acoplamientos cruzados.";
 answers[46] = choices[46][2];
 units[46] = "107";
 comments[46] = "Id Pregunta: 4979. Examen TIC B 2007";


//  Id pregunta: 5166 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  &iquest;Qu&eacute; tama&ntilde;o de celda se utiliza en ATM (Asynchronous Transfer Mode)?";
 choices[47]= new Array();
 choices[47][0] = "Tiene un tama&ntilde;o variable, al tratarse de conmutaci&oacute;n de paquetes de longitud variable.";
 choices[47][1] = "53 bytes";
 choices[47][2] = "1024 bytes";
 choices[47][3] = "64 bytes";
 answers[47] = choices[47][1];
 units[47] = "109";
 comments[47] = "Id Pregunta: 5166. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5170 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  El transporte de voz en tiempo real a trav&eacute;s de redes IP se efect&uacute;a por medio de los protocolos:";
 choices[48]= new Array();
 choices[48][0] = "MPLS sobre UDP";
 choices[48][1] = "RVSP";
 choices[48][2] = "RTP sobre TCP";
 choices[48][3] = "RTP sobre UDP";
 answers[48] = choices[48][3];
 units[48] = "109";
 comments[48] = "Id Pregunta: 5170. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5302 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  Las celdas ATM";
 choices[49]= new Array();
 choices[49][0] = "Tienen un tama&ntilde;o fijo de 53 Bytes";
 choices[49][1] = "Tienen un tama&ntilde;o variable m&aacute;ximo de 53 Bytes";
 choices[49][2] = "Tienen un tama&ntilde;o fijo de 48 Bytes";
 choices[49][3] = "Ninguna de las anteriores";
 answers[49] = choices[49][0];
 units[49] = "109";
 comments[49] = "Id Pregunta: 5302. ";


//  Id pregunta: 5604 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  Los sistemas en el segunado nivel troncal trabajan en ";
 choices[50]= new Array();
 choices[50][0] = "La segunda ventana &oacute;ptica (1330nm). Es en estos nodos donde se realiza la inserci&oacute;n de programaci&oacute;n local resultando m&aacute;s econ&oacute;mico que se lleve a cabo a nivel el&eacute;ctrico.";
 choices[50][1] = "La tercera ventana &oacute;ptica (1550nm) con la ventaja de tener un mayor alcance.";
 choices[50][2] = "La segunda ventana &oacute;ptica (1330nm), ya que en dicha ventana existen amplificadores &oacute;pticos comerciales de alto rendimiento ";
 choices[50][3] = "La tercera ventana &oacute;ptica (1550nm) siendo necesario hacer una doble conversi&oacute;n (opto-el&eacute;ctrica y electro-&oacute;ptica)";
 answers[50] = choices[50][0];
 units[50] = "105";
 comments[50] = "Id Pregunta: 5604. ";


//  Id pregunta: 5730 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  &iquest;Cual de las siguientes puede ser utilizada para videoconferencia?";
 choices[51]= new Array();
 choices[51][0] = "ATM";
 choices[51][1] = "H.323";
 choices[51][2] = "VRVS";
 choices[51][3] = "Todas las anteriores";
 answers[51] = choices[51][3];
 units[51] = "117";
 comments[51] = "Id Pregunta: 5730. ";


//  Id pregunta: 5836 AÃ±o de creación de pregunta: 2009-01-01
 questions[52]= "53)  De entre los est&aacute;ndares siguientes, &iquest;cu&aacute;l se corresponde con la tecnolog&iacute;a WLAN?";
 choices[52]= new Array();
 choices[52][0] = "802.11 del IEEE";
 choices[52][1] = "802.5 del IEEE";
 choices[52][2] = "802.8 del IEEE";
 choices[52][3] = "802.3 del IEEE";
 answers[52] = choices[52][0];
 units[52] = "107";
 comments[52] = "Id Pregunta: 5836. MAP 2008 A1";


//  Id pregunta: 5982 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)  SIP (Session Initiation Protocol) es un protocolo que sirve para:";
 choices[53]= new Array();
 choices[53][0] = "Establecer videoconferencias sobre redes con calidad de servicio (ancho de banda garantizado).";
 choices[53][1] = "Realizar el transporte de flujos multimedia.";
 choices[53][2] = "Iniciar una sesi&oacute;n de correo web.";
 choices[53][3] = "Control y se&ntilde;alizaci&oacute;n, permite establecer y gestionar llamadas/conexiones de flujos multimedia.";
 answers[53] = choices[53][3];
 units[53] = "117";
 comments[53] = "Id Pregunta: 5982. TIC A 2009";


//  Id pregunta: 6483 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  &iquest;Es compatible el servicio ADSL y el servicio RDSI sobre el mismo par de cobre?";
 choices[54]= new Array();
 choices[54][0] = "S&iacute;";
 choices[54][1] = "No";
 choices[54][2] = "S&oacute;lo si no se ofrece tambi&eacute;n el servicio RTC";
 choices[54][3] = "S&oacute;lo si el cliente no tiene una centralita PBX";
 answers[54] = choices[54][0];
 units[54] = "107";
 comments[54] = "Id Pregunta: 6483. Castilla La Mancha 2009. Compatibilidad para ADSL 2+ seg&uacute;n Anexo B";


//  Id pregunta: 6566 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  UMTS ";
 choices[55]= new Array();
 choices[55][0] = "Reutiliza el subsistema de red de GSM";
 choices[55][1] = "Reutiliza el subsistema de red de GPRS";
 choices[55][2] = "El sistema de acceso radio es nuevo";
 choices[55][3] = "Todas las respuestas anteriores son ciertas";
 answers[55] = choices[55][3];
 units[55] = "108";
 comments[55] = "Id Pregunta: 6566. NULL";


//  Id pregunta: 8312 AÃ±o de creación de pregunta: 2011-01-01
 questions[56]= "57)  &iquest;Cu&aacute;l de las siguientes NO es una tecnolog&iacute;a xDSL? ";
 choices[56]= new Array();
 choices[56][0] = "VDSL.";
 choices[56][1] = "DDSL. ";
 choices[56][2] = "HDSL. ";
 choices[56][3] = "ADSL. ";
 answers[56] = choices[56][1];
 units[56] = "107";
 comments[56] = "Id Pregunta: 8312. Examen TIC A2 2010";


//  Id pregunta: 8451 AÃ±o de creación de pregunta: 2011-01-01
 questions[57]= "58)  El est&aacute;ndar 802.11b mas conocido como Wifi, trabaja en la banda libre de:";
 choices[57]= new Array();
 choices[57][0] = "2.4 GHz";
 choices[57][1] = "2.4 MHz";
 choices[57][2] = "2.4 THz";
 choices[57][3] = "2 GHz";
 answers[57] = choices[57][0];
 units[57] = "107";
 comments[57] = "Id Pregunta: 8451. Analista Ayto. Madrid 2010";


//  Id pregunta: 8532 AÃ±o de creación de pregunta: 2011-01-01
 questions[58]= "59)  En relaci&oacute;n con la tecnolog&iacute;a ADSL, un multiplexor localizado en la central telef&oacute;nica que concentra el tr&aacute;fico de enlaces ADSL de usuario, se denomina:";
 choices[58]= new Array();
 choices[58][0] = "DSLAM";
 choices[58][1] = "DSLM";
 choices[58][2] = "ADSLM";
 choices[58][3] = "ADSLAM";
 answers[58] = choices[58][0];
 units[58] = "107";
 comments[58] = "Id Pregunta: 8532. Examen TIC A2 2010 interna";


//  Id pregunta: 8538 AÃ±o de creación de pregunta: 2011-01-01
 questions[59]= "60)  &iquest;En qu&eacute; banda de frecuencias y hasta qu&eacute; velocidad funciona el est&aacute;ndar 802.11a?";
 choices[59]= new Array();
 choices[59][0] = "2.4 GHz y hasta 11 Mbps";
 choices[59][1] = " 5 GHz y hasta 54Mbps.";
 choices[59][2] = "2.4 GHz y hasta 54 Mbps.";
 choices[59][3] = "5 GHz y hasta 11 Mbps";
 answers[59] = choices[59][1];
 units[59] = "107";
 comments[59] = "Id Pregunta: 8538. Examen TIC A2 2010 interna";


//  Id pregunta: 8671 AÃ±o de creación de pregunta: 2011-01-01
 questions[60]= "61)  Con respecto a los est&aacute;ndares de redes inal&aacute;mbricas &iquest;cu&aacute;l de las siguientes combinaciones es correcta?";
 choices[60]= new Array();
 choices[60][0] = "802.11a-2.4Ghz";
 choices[60][1] = "802.11b -2.4Ghz";
 choices[60][2] = "802.11g-5Ghz";
 choices[60][3] = "802.11x-2.4Ghz";
 answers[60] = choices[60][1];
 units[60] = "107";
 comments[60] = "Id Pregunta: 8671. Examen UPM A2 2011";


//  Id pregunta: 8672 AÃ±o de creación de pregunta: 2011-01-01
 questions[61]= "62)  Indique cu&aacute;l de las siguientes no es una entidad definida dentro de IP m&oacute;vil:";
 choices[61]= new Array();
 choices[61][0] = "Nodo local (Home Nodo)";
 choices[61][1] = "Agente local (Home Agent)";
 choices[61][2] = "Direcci&oacute;n de auxilio (Care-of-Address)";
 choices[61][3] = "Nodo m&oacute;vil (Mobile Nodo)";
 answers[61] = choices[61][0];
 units[61] = "100,109";
 comments[61] = "Id Pregunta: 8672. Examen UPM A2 2011";


//  Id pregunta: 8841 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  &iquest;Qu&eacute; est&aacute;ndar debe de cumplir un sistema de videoconferencia H.323 para poder compartir datos?";
 choices[62]= new Array();
 choices[62][0] = " H.239";
 choices[62][1] = " H.264";
 choices[62][2] = " H.263";
 choices[62][3] = " H.240";
 answers[62] = choices[62][0];
 units[62] = "117";
 comments[62] = "Id Pregunta: 8841. Examen UC3M 2010";


//  Id pregunta: 8847 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  &iquest;Cu&aacute;l es la tecnolog&iacute;a que permite una mayor velocidad de transferencia de datos?";
 choices[63]= new Array();
 choices[63][0] = " EDGE";
 choices[63][1] = "HSDPA";
 choices[63][2] = " UMTS/3G";
 choices[63][3] = "GPRS";
 answers[63] = choices[63][1];
 units[63] = "108";
 comments[63] = "Id Pregunta: 8847. Examen UC3M 2010";


//  Id pregunta: 9001 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  &iquest;Cu&aacute;l es el tama&ntilde;o de las celdas ATM?";
 choices[64]= new Array();
 choices[64][0] = "48 octetos";
 choices[64][1] = "64 octetos";
 choices[64][2] = "53 octetos";
 choices[64][3] = "32 octetos";
 answers[64] = choices[64][2];
 units[64] = "109";
 comments[64] = "Id Pregunta: 9001. Examen UPM A2 2011";


//  Id pregunta: 9013 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  A la hora de planificar las frecuencias para un radioenlace de dos vanos A-B y B-C en la banda de 13 GHz:";
 choices[65]= new Array();
 choices[65][0] = "Si en el punto intermedio B se recibe en la semibanda baja, en B se debe transmitir en la semibanda alta.";
 choices[65][1] = "Para un sentido de transmisi&oacute;n dado, se deben emplear la misma semibanda en los dos vanos A-B y B-C.";
 choices[65][2] = "Siempre se debe respetar el sentido (transmisi&oacute;n o recepci&oacute;n) asignado a cada semibanda en el CNAF para la banda de 1GHz.";
 choices[65][3] = "Ninguna de las anteriores";
 answers[65] = choices[65][0];
 units[65] = "108";
 comments[65] = "Id Pregunta: 9013. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9394 AÃ±o de creación de pregunta: 2013-01-01
 questions[66]= "67)  Se&ntilde;ale la respuesta falsa con respecto a LTE:";
 choices[66]= new Array();
 choices[66][0] = "Emplea radiocanales de frecuencia fija de 15 Mhz";
 choices[66][1] = "Utiliza canales de ancho de banda adaptativos.";
 choices[66][2] = "Puede trabajar en muchas bandas frecuenciales diferentes";
 choices[66][3] = "Utiliza modulaciones QPSK, 16QAM y 64QAM";
 answers[66] = choices[66][0];
 units[66] = "108";
 comments[66] = "Id Pregunta: 9394. NULL";


//  Id pregunta: 9397 AÃ±o de creación de pregunta: 2013-01-01
 questions[67]= "68)  MOS (&quot;Mean Opinion Score&quot;) es un &iacute;ndice subjetivo que sirve para medir la calidad de la voz. Su rango de valores est&aacute; entre 1 y 5. Si toma el valor 4, significa:";
 choices[67]= new Array();
 choices[67][0] = "La calidad es equiparable a una conversi&oacute;n cara a cara o escuchar la radio. ";
 choices[67][1] = "Apenas se entiende nada.";
 choices[67][2] = "Se perciben imperfecciones pero el sonido es claro";
 choices[67][3] = "Se requiere un esfuerzo considerable para seguir la comunicaci&oacute;n.";
 answers[67] = choices[67][2];
 units[67] = "109";
 comments[67] = "Id Pregunta: 9397. TIC AGE A2 2011 libre";


//  Id pregunta: 9400 AÃ±o de creación de pregunta: 2013-01-01
 questions[68]= "69)  &iquest;Cu&aacute;l de las siguientes redes WAN esta orientada a conexi&oacute;n?";
 choices[68]= new Array();
 choices[68][0] = "Una red IP";
 choices[68][1] = "Una red ATM.";
 choices[68][2] = "Una red UMTS.";
 choices[68][3] = "Ninguna de las anteriores";
 answers[68] = choices[68][1];
 units[68] = "109";
 comments[68] = "Id Pregunta: 9400. T&eacute;cnico Teleco Ayto Madrid 2010";


//  Id pregunta: 10056 AÃ±o de creación de pregunta: 2014-01-01
 questions[69]= "70)  Indique de entre las siguientes cu&aacute;l es la definici&oacute;n de secr&aacute;fono:";
 choices[69]= new Array();
 choices[69][0] = "Equipo de frontera que, situado fuera de la red interna, ofrece servicios al exterior.";
 choices[69][1] = "Equipo infectado por un atacante remoto no detectado.";
 choices[69][2] = "Equipo que genera y entrega claves criptogr&aacute;ficas para su distribuci&oacute;n.";
 choices[69][3] = "Equipo para realizar el cifrado anal&oacute;gico de la voz.";
 answers[69] = choices[69][3];
 units[69] = "109";
 comments[69] = "Id Pregunta: 10056. TIC A2, promoci&oacute;n interna y libre, examen 2013";


//  Id pregunta: 10070 AÃ±o de creación de pregunta: 2014-01-01
 questions[70]= "71)  Qu&eacute; datos NO incorporar&aacute; una descripci&oacute;n de sesi&oacute;n SDP (Session Description Protocol - RFC 4566) en una iniciaci&oacute;n de sesi&oacute;n utilizada en SIP (Session Initiation Protocol):";
 choices[70]= new Array();
 choices[70][0] = "Tipo de medio.";
 choices[70][1] = "Protocolo de transporte (RTP/UDP/IP, H 320, etc.).";
 choices[70][2] = "Formato del medio (video H.261, video MPEG, etc.).";
 choices[70][3] = "Tama&ntilde;o de los datos.";
 answers[70] = choices[70][3];
 units[70] = "109";
 comments[70] = "Id Pregunta: 10070. TIC A2, libre, Examen 2013";


//  Id pregunta: 10076 AÃ±o de creación de pregunta: 2014-01-01
 questions[71]= "72)  Los t&eacute;rminos scatternet y piconet est&aacute;n relacionados con la tecnolog&iacute;a:";
 choices[71]= new Array();
 choices[71][0] = "RDSI ";
 choices[71][1] = "Bluetooth";
 choices[71][2] = "DECT ";
 choices[71][3] = "Wimax";
 answers[71] = choices[71][1];
 units[71] = "107";
 comments[71] = "Id Pregunta: 10076. TIC A2, libre, Examen 2013";


//  Id pregunta: 10077 AÃ±o de creación de pregunta: 2014-01-01
 questions[72]= "73)  &iquest;Qu&eacute; banda de frecuencia se utiliza para la prestaci&oacute;n de los servicios de televisi&oacute;n terrestre con tecnolog&iacute;a digital, seg&uacute;n el Cuadro Nacional de Atribuciones de Frecuencia?";
 choices[72]= new Array();
 choices[72][0] = "100 a 224 MHz ";
 choices[72][1] = "225 a 356 MHz";
 choices[72][2] = "357 a 469 MHz ";
 choices[72][3] = "470 a 862 MHz";
 answers[72] = choices[72][3];
 units[72] = "105";
 comments[72] = "Id Pregunta: 10077. TIC A2, libre, Examen 2013";


//  Id pregunta: 10295 AÃ±o de creación de pregunta: 2014-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l es el grupo de trabajo correspondiente al est&aacute;ndar WRAN (Wireless Regional Area Network)?:";
 choices[73]= new Array();
 choices[73][0] = "802.19";
 choices[73][1] = "802.20";
 choices[73][2] = "802.21";
 choices[73][3] = "802.22";
 answers[73] = choices[73][3];
 units[73] = "107";
 comments[73] = "Id Pregunta: 10295. TIC A2, libre, examen 2013";


//  Id pregunta: 10499 AÃ±o de creación de pregunta: 2014-01-01
 questions[74]= "75)  &iquest;Cual de los siguientes es un servicio comun de reuniones virtuales para las Administraciones Publicas?";
 choices[74]= new Array();
 choices[74][0] = "Reunete";
 choices[74][1] = "Webex";
 choices[74][2] = "Meetic";
 choices[74][3] = "VirtualMeeting";
 answers[74] = choices[74][0];
 units[74] = "117";
 comments[74] = "Id Pregunta: 10499. http://administracionelectronica.gob.es/ctt/reunete";


//  Id pregunta: 10511 AÃ±o de creación de pregunta: 2014-01-01
 questions[75]= "76)  &iquest;Qu&eacute; recomendaci&oacute;n define la Interfaz usuario-red de la red digital de servicios integrados de banda ancha?";
 choices[75]= new Array();
 choices[75][0] = "I.413";
 choices[75][1] = "I.411";
 choices[75][2] = "I.431";
 choices[75][3] = "I.314";
 answers[75] = choices[75][0];
 units[75] = "109";
 comments[75] = "Id Pregunta: 10511. NULL";


//  Id pregunta: 10650 AÃ±o de creación de pregunta: 2015-01-01
 questions[76]= "77)  Indique el orden correcto, de mayor a menor, en velocidad de transmisi&oacute;n:";
 choices[76]= new Array();
 choices[76][0] = "LTE, UMTS y GPRS.";
 choices[76][1] = "W-CDMA, WiMAX y EDGE.EGDE, UMTS y LTE.";
 choices[76][2] = "";
 choices[76][3] = "WiMAX, GPRS y LTE.";
 answers[76] = choices[76][0];
 units[76] = "108";
 comments[76] = "Id Pregunta: 10650. ";


//  Id pregunta: 10942 AÃ±o de creación de pregunta: 2015-01-01
 questions[77]= "78)  En relaci&oacute;n con las soluciones MDM (Mobile Device Management), se&ntilde;ale la respuesta correcta:";
 choices[77]= new Array();
 choices[77][0] = "En ning&uacute;n caso contemplan la tendencia BYOD (Bring Your Own Device) que permite a los usuarios de una organizaci&oacute;n hacer uso de sus dispositivos m&oacute;viles personales para el acceso al entorno, servicios y datos corporativos.";
 choices[77][1] = "Sirven para gestionar la pol&iacute;tica de seguridad establecida en la organizaci&oacute;n no siendo adecuados para el inventario de dispositivos m&oacute;viles.";
 choices[77][2] = "Los fabricantes de las principales plataformas m&oacute;viles no proporcionan soluciones MDM por lo que hay que recurrir siempre a soluciones de terceros.";
 choices[77][3] = "Permiten la monitorizaci&oacute;n autom&aacute;tica de los dispositivos m&oacute;viles y la generaci&oacute;n de alertas al incumplirse la pol&iacute;tica de seguridad establecida en la organizaci&oacute;n.";
 answers[77] = choices[77][3];
 units[77] = "108";
 comments[77] = "Id Pregunta: 10942. TIC A1 AGE 2014";


//  Id pregunta: 10949 AÃ±o de creación de pregunta: 2015-01-01
 questions[78]= "79)  La cuarta generaci&oacute;n de telefon&iacute;a m&oacute;vil (4G) incluye:";
 choices[78]= new Array();
 choices[78][0] = "El requisito establecido por la UIT de velocidades m&aacute;ximas de transmisi&oacute;n de datos mejoradas: 100 Mbit/s para una movilidad alta y de 1 Gbit/s para una movilidad baja.";
 choices[78][1] = "El requisito establecido por la UIT de velocidades m&aacute;ximas de transmisi&oacute;n de datos mejoradas: 10 Mbit/s para una movilidad alta y de 100 Mbit/s para una movilidad baja.";
 choices[78][2] = "El requisito establecido por el IEEE de velocidades m&aacute;ximas de transmisi&oacute;n de datos mejoradas: 100 Mbit/s para una movilidad alta y de 1 Gbit/s para una movilidad baja.";
 choices[78][3] = "El requisito establecido por el IEEE de velocidades m&aacute;ximas de transmisi&oacute;n de datos mejoradas: 10 Mbit/s para una movilidad alta y de 100 Mbit/s para una movilidad baja.";
 answers[78] = choices[78][0];
 units[78] = "108";
 comments[78] = "Id Pregunta: 10949. TIC A1 AGE 2014";


//  Id pregunta: 11184 AÃ±o de creación de pregunta: 2015-01-01
 questions[79]= "80)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares Wifi incluye WPA2?";
 choices[79]= new Array();
 choices[79][0] = "802.e";
 choices[79][1] = "802.f";
 choices[79][2] = "802.h";
 choices[79][3] = "802.i";
 answers[79] = choices[79][3];
 units[79] = "107";
 comments[79] = "Id Pregunta: 11184. ";


//  Id pregunta: 11315 AÃ±o de creación de pregunta: 2015-01-01
 questions[80]= "81)  Indique cu&aacute;l de las siguientes afirmaciones NO es correcta en relaci&oacute;n a Magerit ";
 choices[80]= new Array();
 choices[80][0] = "En Magerit 3, vulnerabilidad de un activo es la potencialidad o posibilidad de ocurrencia de la materializaci&oacute;n de una amenaza sobre dicho activo";
 choices[80][1] = "Se permite estructurar el conjunto de activos en capas";
 choices[80][2] = "Se consideran activos esenciales, la informaci&oacute;n que se maneja y los servicios prestados";
 choices[80][3] = "Define que los activos est&aacute;n expuestos a amenazas que interesan por su valor";
 answers[80] = choices[80][0];
 units[80] = "108";
 comments[80] = "Id Pregunta: 11315. En Magerit 3, esa es la definici&oacute;n del riesgo";


//  Id pregunta: 11564 AÃ±o de creación de pregunta: 2015-01-01
 questions[81]= "82)  En las redes m&oacute;viles 4G, LTE, el interfaz existente entre los eNodeB y la MME (entidad de gesti&oacute;n de la movilidad), se denomina:";
 choices[81]= new Array();
 choices[81][0] = "x2";
 choices[81][1] = "S1";
 choices[81][2] = "Um";
 choices[81][3] = "Abis";
 answers[81] = choices[81][0];
 units[81] = "108";
 comments[81] = "Id Pregunta: 11564. NULL";


//  Id pregunta: 11570 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  El nivel de enlace para la se&ntilde;alizaci&oacute;n por canal D de un enlace RDSI es:";
 choices[82]= new Array();
 choices[82][0] = "V.120";
 choices[82][1] = "LAPB";
 choices[82][2] = "Q.921";
 choices[82][3] = "Q.931";
 answers[82] = choices[82][2];
 units[82] = "109";
 comments[82] = "Id Pregunta: 11570. NULL";


//  Id pregunta: 11574 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  &iquest;Qu&eacute; tecnolog&iacute;a se caracteriza por dimensionar un sistema de colas sin p&eacute;rdidas con multiplexaci&oacute;n de frecuencias, alta velocidad en el establecimiento de conexiones, estructura celular, transmisi&oacute;n digital y para grupos cerrados de usuarios?";
 choices[83]= new Array();
 choices[83][0] = "DECT";
 choices[83][1] = "TETRA";
 choices[83][2] = "PMR";
 choices[83][3] = "CDCS";
 answers[83] = choices[83][1];
 units[83] = "108";
 comments[83] = "Id Pregunta: 11574. NULL";


//  Id pregunta: 11657 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  El est&aacute;ndar WiFi que permite establecer comunicaciones entre autom&oacute;viles es:";
 choices[84]= new Array();
 choices[84][0] = "IEEE 802.11j";
 choices[84][1] = "IEEE 802.11k";
 choices[84][2] = "IEEE 802.11n";
 choices[84][3] = "IEEE 802.11p";
 answers[84] = choices[84][3];
 units[84] = "107";
 comments[84] = "Id Pregunta: 11657. ";


