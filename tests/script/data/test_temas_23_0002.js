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

//  Id pregunta: 1243 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  La t&eacute;cnica ADPCM:";
 choices[0]= new Array();
 choices[0][0] = "Se utiliza para comprimir im&aacute;genes est&aacute;ticas";
 choices[0][1] = "Se basa en la modelizaci&oacute;n por fractales";
 choices[0][2] = "Tambi&eacute;n es llamada LZW (Lempel, Ziv y Welch), y se usa para compresi&oacute;n de audio";
 choices[0][3] = "Ninguna de las anteriores es verdadera";
 answers[0] = choices[0][3];
 units[0] = "109";
 comments[0] = "Id Pregunta: 1243. ";


//  Id pregunta: 1475 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  Respecto a los formatos de compresi&oacute;n de video de la familia H.26x, es falso que:";
 choices[1]= new Array();
 choices[1][0] = "H.261 est&aacute; orientado a caudal constante, m&aacute;s id&oacute;neo para video sobre RDSI";
 choices[1][1] = "H.263 es m&aacute;s eficiente que H.261 y est&aacute; orientado a video sobre internet, con caudal variable";
 choices[1][2] = "No ofrecen compresi&oacute;n temporal, aunque s&iacute; compresi&oacute;n espacial";
 choices[1][3] = "Todo lo anterior es falso";
 answers[1] = choices[1][3];
 units[1] = "117";
 comments[1] = "Id Pregunta: 1475. ";


//  Id pregunta: 2947 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  La ventaja de utilizar Frame Relay frente a X.25 es:";
 choices[2]= new Array();
 choices[2][0] = "Hace m&aacute;s eficiente el proceso de comunicaci&oacute;n";
 choices[2][1] = "Es necesaria la disponibilidad de l&iacute;nease de alta velocidad";
 choices[2][2] = "La velocidad de acceso puede alcanzar los 64 Kbps frente a los 2 Mbps de X.25";
 choices[2][3] = "Permite realizar el control de errores en cada uno de los enlaces de la red";
 answers[2] = choices[2][0];
 units[2] = "109";
 comments[2] = "Id Pregunta: 2947. Examen TIC MAP B 2004";


//  Id pregunta: 2975 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  El sistema de comunicaciones m&oacute;viles GSM se compone de diversos elementos tales como el HLR y VLR que son?";
 choices[3]= new Array();
 choices[3][0] = "estaciones base";
 choices[3][1] = "bases de datos de usuarios";
 choices[3][2] = "MSC";
 choices[3][3] = "ninguna de las anteriores";
 answers[3] = choices[3][1];
 units[3] = "108";
 comments[3] = "Id Pregunta: 2975. Examen Julio 2003";


//  Id pregunta: 2991 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  &iquest;Cu&aacute;l de las siguientes aseveraciones en relaci&oacute;n con el est&aacute;ndar IEEE 802.11 es falsa?";
 choices[4]= new Array();
 choices[4][0] = "Los estandares IEEE 802.11 son de libre distribuci&oacute;n";
 choices[4][1] = "La especificaci&oacute;n de la capa MAC (Medium Access Control) del IEEE 802.11 es el CSMA/CA";
 choices[4][2] = "El nivel MAC del IEEE 802.11 define tres tipos de tramas: datos, administraci&oacute;n y control ";
 choices[4][3] = "La especifici&oacute;n IEEE 802.11b define transmisiones con velocidades hasta 54Mbps";
 answers[4] = choices[4][3];
 units[4] = "107";
 comments[4] = "Id Pregunta: 2991. NULL";


//  Id pregunta: 3005 AÃ±o de creación de pregunta: 2004-01-01
 questions[5]= "6)  La familia de redes locales inal&aacute;mbricas WLAN operan en las bandas de frecuencia:";
 choices[5]= new Array();
 choices[5][0] = "2.4 GHz y 5 Ghz";
 choices[5][1] = "10MHz y 100MHz";
 choices[5][2] = "1MHz y 10 MHz";
 choices[5][3] = "ninguna de las anteriores";
 answers[5] = choices[5][0];
 units[5] = "107";
 comments[5] = "Id Pregunta: 3005. NULL";


//  Id pregunta: 3009 AÃ±o de creación de pregunta: 2004-01-01
 questions[6]= "7)  &iquest;A qu&eacute; se corresponden las siglas 802.11i sobre redes inal&aacute;mbricas?";
 choices[6]= new Array();
 choices[6][0] = "A especificaciones de nivel f&iacute;sico ";
 choices[6][1] = "A especificaciones sobre calidad de servicio QoS";
 choices[6][2] = "A especificaciones de Seguridad";
 choices[6][3] = "A especificiaciones de roaming";
 answers[6] = choices[6][2];
 units[6] = "107";
 comments[6] = "Id Pregunta: 3009. NULL";


//  Id pregunta: 3010 AÃ±o de creación de pregunta: 2004-01-01
 questions[7]= "8)  &iquest;A qu&eacute; se corresponden las siglas 802.11d sobre redes inal&aacute;mbricas?";
 choices[7]= new Array();
 choices[7][0] = "A especificaciones de nivel f&iacute;sico ";
 choices[7][1] = "A especificaciones sobre calidad de servicio QoS";
 choices[7][2] = "A especificaciones de Seguridad";
 choices[7][3] = "A especificiaciones de roaming";
 answers[7] = choices[7][3];
 units[7] = "107";
 comments[7] = "Id Pregunta: 3010. NULL";


//  Id pregunta: 3017 AÃ±o de creación de pregunta: 2004-01-01
 questions[8]= "9)  &iquest;A que se corresponden las siglas DECT?";
 choices[8]= new Array();
 choices[8][0] = "Una red de microondas para uso militar";
 choices[8][1] = "Un sistema de telefonos inhal&aacute;brico";
 choices[8][2] = "Un sistema de telefon&iacute;na movil";
 choices[8][3] = "ninguna de las anteriores";
 answers[8] = choices[8][1];
 units[8] = "108";
 comments[8] = "Id Pregunta: 3017. ";


//  Id pregunta: 3164 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas corresponde con el est&aacute;ndar GSM?:";
 choices[9]= new Array();
 choices[9][0] = "Soporta una amplia gama de servicios de transmisi&oacute;n de datos en todas las velocidades est&aacute;ndar hasta los 64 kbps";
 choices[9][1] = "Se basa en los principios de la Red Digital de Servicios Integrados";
 choices[9][2] = "La informaci&oacute;n referente a los abonados se encuentra en una &uacute;nica base de datos";
 choices[9][3] = "En su componente radio se utiliza la banda de los 900 Mhz con el m&eacute;todo DMA, que proporciona ocho canales telef&oacute;nicos en una misma portadora y una codificaci&oacute;n de voz a 64 kbps";
 answers[9] = choices[9][1];
 units[9] = "108";
 comments[9] = "Id Pregunta: 3164. ";


//  Id pregunta: 3175 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Cu&aacute;l de las siguientes no corresponde a una definici&oacute;n correcta de especificaci&oacute;n de la ITU-T?:";
 choices[10]= new Array();
 choices[10][0] = "X.25: interfaz entre ETD y ETCD para terminales en modo paquete en redes p&uacute;blicas de conmutaci&oacute;n de paquetes";
 choices[10][1] = "X.29: define los mecanismos y protocolos para la conexi&oacute;n de terminales as&iacute;ncronos a trav&eacute;s de la red X25, usando un PAD";
 choices[10][2] = "X.32: interfaz entre ETD y ETCD para terminales telegr&aacute;ficos accediendo a redes p&uacute;blicas de conmutaci&oacute;n de paquetes v&iacute;a red de conmutaci&oacute;n de circuitos";
 choices[10][3] = "X.75: interconexi&oacute;n de redes p&uacute;blicas de conmutaci&oacute;n de paquetes y conexi&oacute;n de nodos de las mismas";
 answers[10] = choices[10][2];
 units[10] = "109";
 comments[10] = "Id Pregunta: 3175. ";


//  Id pregunta: 3256 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Cu&aacute;ntos canales TDMA admite un sistema GSM 900?:";
 choices[11]= new Array();
 choices[11][0] = "992";
 choices[11][1] = "1000";
 choices[11][2] = "496";
 choices[11][3] = "2000";
 answers[11] = choices[11][0];
 units[11] = "108";
 comments[11] = "Id Pregunta: 3256. ";


//  Id pregunta: 3258 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  &iquest;Cuantos niveles f&iacute;sicos estandarizados define 802.11?:";
 choices[12]= new Array();
 choices[12][0] = "5";
 choices[12][1] = "3";
 choices[12][2] = "Solo 1";
 choices[12][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[12] = choices[12][0];
 units[12] = "107";
 comments[12] = "Id Pregunta: 3258. NULL";


//  Id pregunta: 3266 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  &iquest;En qu&eacute; componente de una red GSM se centraliza la gesti&oacute;n de los servicios suplementarios?:";
 choices[13]= new Array();
 choices[13][0] = "MSC";
 choices[13][1] = "HLR";
 choices[13][2] = "VLR";
 choices[13][3] = "EIR";
 answers[13] = choices[13][1];
 units[13] = "108";
 comments[13] = "Id Pregunta: 3266. ";


//  Id pregunta: 3302 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  &iquest;Qu&eacute; &oacute;rbita es la m&aacute;s ventajosa para una operadora de telecomunicaciones en t&eacute;rminos de coste a la hora de poner un nuevo sat&eacute;lite?:";
 choices[14]= new Array();
 choices[14][0] = "La el&iacute;ptica";
 choices[14][1] = "La circular";
 choices[14][2] = "La ovoide";
 choices[14][3] = "La geoestacionaria";
 answers[14] = choices[14][3];
 units[14] = "108";
 comments[14] = "Id Pregunta: 3302. ";


//  Id pregunta: 3321 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  &iquest;Sabe qui&eacute;n fue el impulsor de Bluetooth?:";
 choices[15]= new Array();
 choices[15][0] = "Nokia";
 choices[15][1] = "Sony";
 choices[15][2] = "Ericsson";
 choices[15][3] = "Nortel";
 answers[15] = choices[15][2];
 units[15] = "107";
 comments[15] = "Id Pregunta: 3321. NULL";


//  Id pregunta: 3332 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  Al servicio que permite a un usuario transmitir una imagen est&aacute;tica de una c&aacute;mara, a trav&eacute;s de la l&iacute;nea telef&oacute;nica, a un usuario remotamente situado, se denomina:";
 choices[16]= new Array();
 choices[16][0] = "Videoconferencia";
 choices[16][1] = "Video de baja velocidad";
 choices[16][2] = "Bases de datos de im&aacute;genes";
 choices[16][3] = "No existe este servicio";
 answers[16] = choices[16][1];
 units[16] = "108";
 comments[16] = "Id Pregunta: 3332. ";


//  Id pregunta: 3347 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no es una debilidad de las redes inal&aacute;mbricas frente a otro tipo de redes?:";
 choices[17]= new Array();
 choices[17][0] = "Poca seguridad";
 choices[17][1] = "Escasa protecci&oacute;n frente a interferencias";
 choices[17][2] = "Precio elevado";
 choices[17][3] = "Cobertura limitada";
 answers[17] = choices[17][2];
 units[17] = "107";
 comments[17] = "Id Pregunta: 3347. NULL";


//  Id pregunta: 3387 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  El m&oacute;dulo de transferencia s&iacute;ncrono (STM) principal de SDH  se transmite a una velocidad de:";
 choices[18]= new Array();
 choices[18][0] = "51.84 Mbps";
 choices[18][1] = "1984 kbps";
 choices[18][2] = "100 Mbps";
 choices[18][3] = "155.52 Mbps";
 answers[18] = choices[18][3];
 units[18] = "108";
 comments[18] = "Id Pregunta: 3387. ";


//  Id pregunta: 3410 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  Frame Relay, respecto a X25:";
 choices[19]= new Array();
 choices[19][0] = "No utiliza el concepto de circuito virtual";
 choices[19][1] = "Separa las arquitecturas de protocolos para los datos de usuario y los de control";
 choices[19][2] = "Tiene velocidades de acceso menores";
 choices[19][3] = "Nunca puede garantizar un caudal m&iacute;nimo";
 answers[19] = choices[19][1];
 units[19] = "109";
 comments[19] = "Id Pregunta: 3410. ";


//  Id pregunta: 3415 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  H.320 es el est&aacute;ndar para:";
 choices[20]= new Array();
 choices[20][0] = "transmisi&oacute;n de paquetes multiplexados en redes digitales";
 choices[20][1] = "m&oacute;dems de banda ancha con correcci&oacute;n de errores";
 choices[20][2] = "videoconferencia multipunto sobre RDSI";
 choices[20][3] = "videconferencia multipunto sobre internet";
 answers[20] = choices[20][2];
 units[20] = "103,117";
 comments[20] = "Id Pregunta: 3415. ";


//  Id pregunta: 3483 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  El tr&aacute;fico vocal GSM suele calcularse para estimaciones de potencias y coberturas de se&ntilde;al en base a una f&oacute;rmula. &iquest;Cu&aacute;l es?:";
 choices[21]= new Array();
 choices[21][0] = "La f&oacute;rmula de Poisson";
 choices[21][1] = "La f&oacute;rmula de Okumura-Hata";
 choices[21][2] = "La f&oacute;rmula Erlang B";
 choices[21][3] = "La f&oacute;rmula Erlang C";
 answers[21] = choices[21][2];
 units[21] = "108";
 comments[21] = "Id Pregunta: 3483. ";


//  Id pregunta: 3557 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  En telefon&iacute;a m&oacute;vil, &iquest;cu&aacute;l de los siguientes sistemas permite mayor densidad de tr&aacute;fico?:";
 choices[22]= new Array();
 choices[22][0] = "DECT";
 choices[22][1] = "DCS 1800";
 choices[22][2] = "GSM ";
 choices[22][3] = "NMT";
 answers[22] = choices[22][0];
 units[22] = "108";
 comments[22] = "Id Pregunta: 3557. ";


//  Id pregunta: 3558 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  En telefon&iacute;a m&oacute;vil, &iquest;es posible en Espa&ntilde;a cambiar de operador conservando el n&uacute;mero?:";
 choices[23]= new Array();
 choices[23][0] = "S&iacute;, siempre  ";
 choices[23][1] = "No, nunca";
 choices[23][2] = "No, salvo para empresas";
 choices[23][3] = "S&iacute;, dependiendo de los operadores implicados";
 answers[23] = choices[23][0];
 units[23] = "108";
 comments[23] = "Id Pregunta: 3558. ";


//  Id pregunta: 3723 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Los est&aacute;ndares MPT 1327 y TETRA servicios de:";
 choices[24]= new Array();
 choices[24][0] = "Radiob&uacute;squeda";
 choices[24][1] = "Radiomensajer&iacute;a";
 choices[24][2] = "Comunicaciones mar&iacute;timas";
 choices[24][3] = "Radiocomunicaciones privadas";
 answers[24] = choices[24][3];
 units[24] = "108";
 comments[24] = "Id Pregunta: 3723. ";


//  Id pregunta: 3726 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Los mensajes SMS:";
 choices[25]= new Array();
 choices[25][0] = "Viajan por un canal de se&ntilde;alizaci&oacute;n";
 choices[25][1] = "Viajan por un canal de voz";
 choices[25][2] = "Se codifican por pulsos";
 choices[25][3] = "Ninguna de las anteriores";
 answers[25] = choices[25][0];
 units[25] = "108";
 comments[25] = "Id Pregunta: 3726. ";


//  Id pregunta: 3742 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  Los sistemas celulares se sustentan en dos conceptos principales que son:";
 choices[26]= new Array();
 choices[26][0] = "La reutilizaci&oacute;n de frecuencias y el dimensionamiento celular";
 choices[26][1] = "La difracci&oacute;n y la propagaci&oacute;n multitrayecto";
 choices[26][2] = "La modulaci&oacute;n y la separaci&oacute;n entre canales";
 choices[26][3] = "La distribuci&oacute;n de usuarios y la localizaci&oacute;n";
 answers[26] = choices[26][0];
 units[26] = "108";
 comments[26] = "Id Pregunta: 3742. ";


//  Id pregunta: 3770 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  Para videoconferencia en LANs sin QoS (como por ejemplo Internet), se usan las recomendaciones del est&aacute;ndar:";
 choices[27]= new Array();
 choices[27][0] = "H.321";
 choices[27][1] = "H.320";
 choices[27][2] = "H.323";
 choices[27][3] = "H.324";
 answers[27] = choices[27][2];
 units[27] = "117";
 comments[27] = "Id Pregunta: 3770. ";


//  Id pregunta: 3777 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  RADIUS es:";
 choices[28]= new Array();
 choices[28][0] = "una herramienta estandarizada de an&aacute;lisis de cobertura radioel&eacute;ctrica";
 choices[28][1] = "un protocolo de acceso inal&aacute;mbrico en la capa de acceso al medio radioel&eacute;ctrico";
 choices[28][2] = "un protocolo de gesti&oacute;n y mantenimiento de redes";
 choices[28][3] = "un protocolo de autenticaci&oacute;n, autorizaci&oacute;n y configuraci&oacute;n de accesos";
 answers[28] = choices[28][3];
 units[28] = "107";
 comments[28] = "Id Pregunta: 3777. NULL";


//  Id pregunta: 3782 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  Respecto a EDGE puede decirse que:";
 choices[29]= new Array();
 choices[29][0] = "Ha sustuido a GSM en gran parte de Europa";
 choices[29][1] = "Sustiuir&aacute; a UMTS en vista del fracaso de esta &uacute;ltima tecnolog&iacute;a";
 choices[29][2] = "Es un desarrollo paralelo a iMode con amplia implantaci&oacute;n en Jap&oacute;n y Norteam&eacute;rica";
 choices[29][3] = "Nada de lo anterior es cierto";
 answers[29] = choices[29][3];
 units[29] = "108";
 comments[29] = "Id Pregunta: 3782. ";


//  Id pregunta: 3851 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  USSD es:";
 choices[30]= new Array();
 choices[30][0] = "Universal Serial Service Data";
 choices[30][1] = "Universal Synchronous Service Data";
 choices[30][2] = "Unstructured Supplementary Service Data";
 choices[30][3] = "Unsorted Simple Service Data";
 answers[30] = choices[30][2];
 units[30] = "107";
 comments[30] = "Id Pregunta: 3851. NULL";


//  Id pregunta: 3878 AÃ±o de creación de pregunta: 2003-01-01
 questions[31]= "32)  &iquest;C&uacute;al es la longitud por defecto del campo de informaci&oacute;n en una trama Frame-Relay?";
 choices[31]= new Array();
 choices[31][0] = "Es de 1 Byte";
 choices[31][1] = "Es de 1600 Bytes";
 choices[31][2] = "Es de 8.000 Bytes";
 choices[31][3] = "Ninguna de las anteriores es cierta";
 answers[31] = choices[31][1];
 units[31] = "109";
 comments[31] = "Id Pregunta: 3878. ";


//  Id pregunta: 3888 AÃ±o de creación de pregunta: 2004-01-01
 questions[32]= "33)  El est&aacute;ndar 802.11i relativo a seguridad en redes WiFi, &iquest;Qu&eacute; nuevo protocolo utiliza?";
 choices[32]= new Array();
 choices[32][0] = "WPA2";
 choices[32][1] = "WPA3";
 choices[32][2] = "TKIP";
 choices[32][3] = "WEP";
 answers[32] = choices[32][0];
 units[32] = "107";
 comments[32] = "Id Pregunta: 3888. NULL";


//  Id pregunta: 3898 AÃ±o de creación de pregunta: 2003-01-01
 questions[33]= "34)  Indicar la afirmaci&oacute;n falsa sobre Frame Relay";
 choices[33]= new Array();
 choices[33][0] = "Las redes Frame-Relay son orientadas a conexi&oacute;n";
 choices[33][1] = "Es capaz de detectar errores pero no de corregirlos";
 choices[33][2] = "CIR es la velocidad de acceso a la red";
 choices[33][3] = "Puede ser implementado en software";
 answers[33] = choices[33][2];
 units[33] = "109";
 comments[33] = "Id Pregunta: 3898. ";


//  Id pregunta: 3910 AÃ±o de creación de pregunta: 2003-01-01
 questions[34]= "35)  Al ajuste hacia niveles predeterminados de los valores troceados de una se&ntilde;al anal&oacute;gica se le denomina:";
 choices[34]= new Array();
 choices[34][0] = "Cuantificaci&oacute;n.";
 choices[34][1] = "Digitalizaci&oacute;n.";
 choices[34][2] = "Discretizaci&oacute;n.";
 choices[34][3] = "Codificaci&oacute;n.";
 answers[34] = choices[34][0];
 units[34] = "108";
 comments[34] = "Id Pregunta: 3910. ";


//  Id pregunta: 3936 AÃ±o de creación de pregunta: 2003-01-01
 questions[35]= "36)  &iquest;Qu&eacute; es falso respecto a un applet?";
 choices[35]= new Array();
 choices[35][0] = "Utiliza clases de la librer&iacute;a Java.applet";
 choices[35][1] = "Tienen un m&eacute;todo paint()";
 choices[35][2] = "Se pueden visualizar mediante appletviewer ";
 choices[35][3] = "Necesitan m&eacute;todo main() ";
 answers[35] = choices[35][3];
 units[35] = "107";
 comments[35] = "Id Pregunta: 3936. ";


//  Id pregunta: 3960 AÃ±o de creación de pregunta: 2003-01-01
 questions[36]= "37)  La tecnolog&iacute;a GPRS est&aacute; definida para transmitir datos a una velocidad te&oacute;rica m&aacute;xima (troughput) de:";
 choices[36]= new Array();
 choices[36][0] = "171,2 Kbits/s";
 choices[36][1] = "115 Kbits/s";
 choices[36][2] = "21,4 Kbits/s";
 choices[36][3] = "15,6 Kbits/s";
 answers[36] = choices[36][0];
 units[36] = "108";
 comments[36] = "Id Pregunta: 3960. ";


//  Id pregunta: 3972 AÃ±o de creación de pregunta: 2003-01-01
 questions[37]= "38)  Una de las siguientes afirmaciones no es correcta:";
 choices[37]= new Array();
 choices[37][0] = "El protocolo SIP se utiliza en la red de transporte de una red UMTS";
 choices[37][1] = "H.323 y SIP son protocolos que se utilizan en VoIP (Voz sobre IP)";
 choices[37][2] = "H.323 es un protocolo mucho m&aacute;s sencillo de implementar que SIP";
 choices[37][3] = "Los primeros productos comerciales de VoIP utilizaban H.323";
 answers[37] = choices[37][2];
 units[37] = "109";
 comments[37] = "Id Pregunta: 3972. ";


//  Id pregunta: 4020 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  En relaci&oacute;n a la numeraci&oacute;n del sistema de telefon&iacute;a m&oacute;vil GSM, el n&uacute;mero que identifica a un abonado de una red GSM dentro del plan de numeraci&oacute;n de la red telef&oacute;nica p&uacute;blica conmutada se denomina:";
 choices[38]= new Array();
 choices[38][0] = "MSRN";
 choices[38][1] = "IMEI";
 choices[38][2] = "MSISDN";
 choices[38][3] = "IMSI";
 answers[38] = choices[38][2];
 units[38] = "108";
 comments[38] = "Id Pregunta: 4020. ";


//  Id pregunta: 4030 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  El modelo de referencia de ATM involucra tres planos independientes denominados:";
 choices[39]= new Array();
 choices[39][0] = "Plano de usuario, plano de gesti&oacute;n y plano de administraci&oacute;n.";
 choices[39][1] = "Plano de informaci&oacute;n, plano de gesti&oacute;n y plano de administraci&oacute;n.";
 choices[39][2] = "Plano de usuario, plano de control y plano de administraci&oacute;n.";
 choices[39][3] = "Plano de informaci&oacute;n, plano de control y plano de gesti&oacute;n.";
 answers[39] = choices[39][2];
 units[39] = "109";
 comments[39] = "Id Pregunta: 4030. ";


//  Id pregunta: 4034 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  &iquest;C&oacute;mo se denomina la tecnolog&iacute;a de multiplexaci&oacute;n utilizada por ATM?";
 choices[40]= new Array();
 choices[40][0] = "Multiplexaci&oacute;n por divisi&oacute;n en el tiempo";
 choices[40][1] = "Multiplexaci&oacute;n estad&iacute;stica";
 choices[40][2] = "Multiplexaci&oacute;n por divisi&oacute;n en la frecuencia";
 choices[40][3] = "Ninguna de las anteriores";
 answers[40] = choices[40][1];
 units[40] = "109";
 comments[40] = "Id Pregunta: 4034. ";


//  Id pregunta: 4066 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  Que elemento de los siguientes no son propios de instalaciones de VoIP";
 choices[41]= new Array();
 choices[41][0] = "gatekeeper";
 choices[41][1] = "SIP";
 choices[41][2] = "router";
 choices[41][3] = "todos los anteriores";
 answers[41] = choices[41][3];
 units[41] = "117";
 comments[41] = "Id Pregunta: 4066. ";


//  Id pregunta: 4195 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  El estandar 802.11e se centra en";
 choices[42]= new Array();
 choices[42][0] = "Calidad de Servicio (QoS) sobre redes WLAN";
 choices[42][1] = "Autenticaci&oacute;n y cifrado para redes WLAN";
 choices[42][2] = "Nueva generaci&oacute;n de WLAN de redes de, al menos, 100 Mbps (en proceso de definici&oacute;n en 2006)";
 choices[42][3] = "Intercambio de informaci&oacute;n de capacidad entre clientes y puntos de acceso en redes WLAN";
 answers[42] = choices[42][0];
 units[42] = "107";
 comments[42] = "Id Pregunta: 4195. NULL";


//  Id pregunta: 4198 AÃ±o de creación de pregunta: 2006-01-01
 questions[43]= "44)  El estandar 802.11n se centra en";
 choices[43]= new Array();
 choices[43][0] = "Calidad de Servicio (QoS) sobre redes WLAN";
 choices[43][1] = "Autenticaci&oacute;n y cifrado para redes WLAN";
 choices[43][2] = "Nueva generaci&oacute;n de WLAN de redes de, al menos, 100 Mbps (en proceso de definici&oacute;n en 2006)";
 choices[43][3] = "Intercambio de informaci&oacute;n de capacidad entre clientes y puntos de acceso en redes WLAN";
 answers[43] = choices[43][2];
 units[43] = "107";
 comments[43] = "Id Pregunta: 4198. NULL";


//  Id pregunta: 4199 AÃ±o de creación de pregunta: 2006-01-01
 questions[44]= "45)  Estandar que permite redes inal&aacute;mbricas con frecuencias de 2.4 GHz.";
 choices[44]= new Array();
 choices[44][0] = "802.11a";
 choices[44][1] = "802.11b";
 choices[44][2] = "802.11g";
 choices[44][3] = "B y C son correctas";
 answers[44] = choices[44][3];
 units[44] = "107";
 comments[44] = "Id Pregunta: 4199. NULL";


//  Id pregunta: 4228 AÃ±o de creación de pregunta: 2006-01-01
 questions[45]= "46)  Indique cu&aacute;l de las siguientes respuestas no es correcta en relaci&oacute;n con los est&aacute;ndares 802.11x del IEEE:";
 choices[45]= new Array();
 choices[45][0] = "802.11a utiliza la banda de 5 GHz, 802.11b y 802.11g  la de 2,4 GHz";
 choices[45][1] = "802.11a alcanza velocidades de 54 Mbps, 802.11b y 802.11g de 11 Mbps";
 choices[45][2] = "802.11i se refiere a mejoras de seguridad";
 choices[45][3] = "802.11e se refiere a calidad de servicio";
 answers[45] = choices[45][1];
 units[45] = "107";
 comments[45] = "Id Pregunta: 4228. NULL";


//  Id pregunta: 4229 AÃ±o de creación de pregunta: 2006-01-01
 questions[46]= "47)  &iquest;Cu&aacute;l de los siguientes organismos de normalizaci&oacute;n ha promovido el est&aacute;ndar GSM?";
 choices[46]= new Array();
 choices[46][0] = "ISO (International Standards Organization)";
 choices[46][1] = "IEEE (Institute of Electrical Engineers)";
 choices[46][2] = "ETSI (European Telecommunications Standards Institute)";
 choices[46][3] = "CEN (Comit&eacute; Europeo de Normalizaci&oacute;n)";
 answers[46] = choices[46][2];
 units[46] = "108";
 comments[46] = "Id Pregunta: 4229. ";


//  Id pregunta: 4230 AÃ±o de creación de pregunta: 2006-01-01
 questions[47]= "48)  Indique la tecnolog&iacute;a de transmisi&oacute;n que utiliza el est&aacute;ndar 802.16a del IEEE:";
 choices[47]= new Array();
 choices[47][0] = "DSSS";
 choices[47][1] = "FHSS";
 choices[47][2] = "OFDM";
 choices[47][3] = "DWDM";
 answers[47] = choices[47][2];
 units[47] = "107";
 comments[47] = "Id Pregunta: 4230. NULL";


//  Id pregunta: 4426 AÃ±o de creación de pregunta: 2007-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l de las siguientes clases de servicio es m&aacute;s adecuada en ATM para la transmisi&oacute;n de video comprimido en tiempo real?";
 choices[48]= new Array();
 choices[48][0] = "UBR";
 choices[48][1] = "VBR-NTR";
 choices[48][2] = "VBR-RT";
 choices[48][3] = "CBR";
 answers[48] = choices[48][2];
 units[48] = "109";
 comments[48] = "Id Pregunta: 4426. ";


//  Id pregunta: 4434 AÃ±o de creación de pregunta: 2007-01-01
 questions[49]= "50)  &iquest;Cu&aacute;l es el ancho de banda que podr&aacute; obtener un usuario de una red UMTS si se est&aacute; desplazando en un veh&iacute;culo a 40 km/h en un entorno urbano?";
 choices[49]= new Array();
 choices[49][0] = "2 Mbps independientemente de la situaci&oacute;n del usuario";
 choices[49][1] = "100 kbps";
 choices[49][2] = "144 Kbps";
 choices[49][3] = "384 kbps";
 answers[49] = choices[49][3];
 units[49] = "108";
 comments[49] = "Id Pregunta: 4434. ";


//  Id pregunta: 4491 AÃ±o de creación de pregunta: 2007-01-01
 questions[50]= "51)  Indique cual de las siguientes afirmaciones sobre las redes Frame Relay es falsa: ";
 choices[50]= new Array();
 choices[50][0] = "Las redes Frame Relay son redes de conmutaci&oacute;n de paquetes";
 choices[50][1] = "Las redes Frame Relay disponen de t&eacute;cnicas de control de Ia congesti&oacute;n de Ia red.";
 choices[50][2] = "LAPB es el protocolo de nivel de enlace utilizado por Frame Relay.";
 choices[50][3] = "El CIR (Comitted Information Rate) es Ia velocidad de transmisi&oacute;n de datos que el operador de la red Frame Relay garantiza para una conexi&oacute;n determinada.";
 answers[50] = choices[50][2];
 units[50] = "109";
 comments[50] = "Id Pregunta: 4491. ";


//  Id pregunta: 4546 AÃ±o de creación de pregunta: 2007-01-01
 questions[51]= "52)  La capa de adaptaci&oacute;n de ATM (AAL o ATM Adaptation Layer) com&uacute;nmente utilizada para la transmisi&oacute;n de datagramas IP sobre redes ATM es:";
 choices[51]= new Array();
 choices[51][0] = "AAL 5.";
 choices[51][1] = "AAL 1.";
 choices[51][2] = "AAL 3/4.";
 choices[51][3] = "AAL 2.";
 answers[51] = choices[51][0];
 units[51] = "109";
 comments[51] = "Id Pregunta: 4546. ";


//  Id pregunta: 4596 AÃ±o de creación de pregunta: 2007-01-01
 questions[52]= "53)  Cuando un m&oacute;vil se enciende y no encuentra una estaci&oacute;n base de Ia red a la que pertenece";
 choices[52]= new Array();
 choices[52][0] = "se registra en el HLR (Home Location Register) de Ia red a la que accede";
 choices[52][1] = "se registra en el VLR (Visitors Location Register) de Ia red a la que pertenece";
 choices[52][2] = "se registra en el VLR (Visitors Location Register) de Ia red a la que accede";
 choices[52][3] = "no se registra en ninguna red";
 answers[52] = choices[52][2];
 units[52] = "108";
 comments[52] = "Id Pregunta: 4596. ";


//  Id pregunta: 4653 AÃ±o de creación de pregunta: 2007-01-01
 questions[53]= "54)  En Frame Relay La CIR es:";
 choices[53]= new Array();
 choices[53][0] = "la m&aacute;xima velocidad de datos del canal";
 choices[53][1] = "La tasa de informaci&oacute;n contratada";
 choices[53][2] = "La m&aacute;xima cantidad de datos que la red conviene en transmitir en un intervalo de tiempo T";
 choices[53][3] = "es La m&aacute;xima cantidad de datos en exceso que la red intenta transmitir en un intervalo de tiempo T";
 answers[53] = choices[53][1];
 units[53] = "109";
 comments[53] = "Id Pregunta: 4653. ";


//  Id pregunta: 4825 AÃ±o de creación de pregunta: 2007-01-01
 questions[54]= "55)  Una red ATM (Asynchronous Transfer Mode):";
 choices[54]= new Array();
 choices[54][0] = "Tiene c&eacute;lulas cuyo tama&ntilde;o es de 48 bytes";
 choices[54][1] = "No es apropiada para tr&aacute;fico con requisitos de tiempo real";
 choices[54][2] = "Tiene los campos VPI (Virtual Path Identifier) y VCI (Virtual Channel Identifier), utilizados para efectuarfunciones de encaminamiento de las c&eacute;lulas";
 choices[54][3] = "No tiene ning&uacute;n mecanismo para detectar la ocurrencia de errores de transmisi&oacute;n en las c&eacute;lulas";
 answers[54] = choices[54][2];
 units[54] = "109";
 comments[54] = "Id Pregunta: 4825. ";


//  Id pregunta: 5002 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  En las comunicaciones v&iacute;a sat&eacute;lite la transmisi&oacute;n de datos encapsulados sobre MPEG2 est&aacute; contemplada en lanorma del ETSI:";
 choices[55]= new Array();
 choices[55][0] = "ET 301-192";
 choices[55][1] = "ET 202-125";
 choices[55][2] = "ET 125-100";
 choices[55][3] = "ET 100-200";
 answers[55] = choices[55][0];
 units[55] = "105";
 comments[55] = "Id Pregunta: 5002. Examen TIC A 2007";


//  Id pregunta: 5289 AÃ±o de creación de pregunta: 2003-01-01
 questions[56]= "57)  Respecto a las comunicaciones m&oacute;viles, el paso de la generaci&oacute;n 2G a la generaci&oacute;n 2.5G ha requerido la realizaci&oacute;n de inversiones:";
 choices[56]= new Array();
 choices[56][0] = "En el acceso radio";
 choices[56][1] = "En la infraestructura de red, para permitir la conmutaci&oacute;n de paquetes";
 choices[56][2] = "No fue necesario modificar la infraestructura existente.";
 choices[56][3] = "Se hizo un despliegue totalmente nuevo, al basarse una en comunicaciones anal&oacute;gicas y otra en comunicadiones digitales";
 answers[56] = choices[56][1];
 units[56] = "108";
 comments[56] = "Id Pregunta: 5289. ";


//  Id pregunta: 5290 AÃ±o de creación de pregunta: 2003-01-01
 questions[57]= "58)  Respecto a las comunicaciones m&oacute;viles, el paso de la generaci&oacute;n 2G/2.5G a la generaci&oacute;n 3G ha requerido la realizaci&oacute;n de las inversiones m&aacute;s importantes";
 choices[57]= new Array();
 choices[57][0] = "En el acceso radio";
 choices[57][1] = "En la infraestructura de red, para permitir la conmutaci&oacute;n de paquetes";
 choices[57][2] = "No fue necesario modificar la infraestructura existente.";
 choices[57][3] = "Se hizo un despliegue totalmente nuevo, al basarse una en comunicaciones anal&oacute;gicas y otra en comunicadiones digitales";
 answers[57] = choices[57][0];
 units[57] = "108";
 comments[57] = "Id Pregunta: 5290. ";


//  Id pregunta: 5303 AÃ±o de creación de pregunta: 2003-01-01
 questions[58]= "59)  En Frame Relay, el par&aacute;metro que indica la velocidad media de transmisi&oacute;n, que la red se compromete a transmitir como m&iacute;nimo es:";
 choices[58]= new Array();
 choices[58][0] = "CIR";
 choices[58][1] = "Bc";
 choices[58][2] = "PIR";
 choices[58][3] = "Be";
 answers[58] = choices[58][0];
 units[58] = "109";
 comments[58] = "Id Pregunta: 5303. ";


//  Id pregunta: 5579 AÃ±o de creación de pregunta: 2003-01-01
 questions[59]= "60)  En el marco de la liberalizaci&oacute;n de las telecomunicaciones, &iquest;Cu&aacute;les de las siguientes acciones NO se pretende fomentar mediante la desagregaci&oacute;n del bucle de abonado?";
 choices[59]= new Array();
 choices[59][0] = "Incrementar el n&uacute;mero de abonados";
 choices[59][1] = "Incrementar la penetraci&oacute;n de servicios de banda ancha";
 choices[59][2] = "Reducir el precio de los servicios avanzados de telecomunicaciones";
 choices[59][3] = "Favorecer la competencia enlas redes de acceso";
 answers[59] = choices[59][0];
 units[59] = "107";
 comments[59] = "Id Pregunta: 5579. NULL";


//  Id pregunta: 5603 AÃ±o de creación de pregunta: 2003-01-01
 questions[60]= "61)  En una red de CATV &iquest;cu&aacute;l es el rango de frecuencias que se utiliza en sentido ascendente para el envio de informaci&oacute;n de usuario a cabecera?";
 choices[60]= new Array();
 choices[60][0] = "De 55 a 150";
 choices[60][1] = "De 550 a 860";
 choices[60][2] = "De 50 a 550";
 choices[60][3] = "De 5 a 50";
 answers[60] = choices[60][3];
 units[60] = "105";
 comments[60] = "Id Pregunta: 5603. ";


//  Id pregunta: 5785 AÃ±o de creación de pregunta: 2009-01-01
 questions[61]= "62)  &iquest;De acuerdo al est&aacute;ndar, cu&aacute;l es el ancho de banda que podr&aacute; obtener un usuario de una red UMTS R99 si se est&aacute; desplazando en un veh&iacute;culo a 40 km/h en un entorno urbano?";
 choices[61]= new Array();
 choices[61][0] = "2 Mbps independientemente de la situaci&oacute;n del usuario";
 choices[61][1] = "100 kbps";
 choices[61][2] = "144 Kbps";
 choices[61][3] = "384 kbps";
 answers[61] = choices[61][3];
 units[61] = "108";
 comments[61] = "Id Pregunta: 5785. ";


//  Id pregunta: 5978 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  La banda de 26 GHz se utiliza para:";
 choices[62]= new Array();
 choices[62][0] = "UMTS.";
 choices[62][1] = "LMDS.";
 choices[62][2] = "WiFi.";
 choices[62][3] = "Bluetooth.";
 answers[62] = choices[62][1];
 units[62] = "107";
 comments[62] = "Id Pregunta: 5978. TIC A 2009";


//  Id pregunta: 6142 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  En relaci&oacute;n con los c&oacute;decs que se utilizan para comprimir la voz en sistemas de VoIP:";
 choices[63]= new Array();
 choices[63][0] = "G.711 proporciona mejor calidad de sonido que G.729";
 choices[63][1] = "G.711 genera una tasa de transferencia menor que G.729";
 choices[63][2] = "Las dos respuestas anteriores son correctas";
 choices[63][3] = "Todas las respuestas anteriores son falsas";
 answers[63] = choices[63][0];
 units[63] = "100, 109";
 comments[63] = "Id Pregunta: 6142. ";


//  Id pregunta: 6145 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  Con respecto a la desagregaci&oacute;n del bucle de abonado:";
 choices[64]= new Array();
 choices[64][0] = "Existe una oferta de acceso al bucle de abonado (OBA) que obliga al operador establecido (&lsquo;incumbent&rsquo;) a abrir su red a los operadores alternativos";
 choices[64][1] = "La OBA exige que el operador establecido (&lsquo;incumbent&rsquo;) abra su red a los operadores alternativos para todos los servicios sin excepciones, si bien &eacute;stos deber&aacute;n abonar una cuota mensual por cada servicio desagregado";
 choices[64][2] = "Las respuestas a) y b) son correctas";
 choices[64][3] = "Las respuestas a) y b) son falsas";
 answers[64] = choices[64][0];
 units[64] = "107";
 comments[64] = "Id Pregunta: 6145. NULL";


//  Id pregunta: 6160 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  Se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[65]= new Array();
 choices[65][0] = "Las MCUs permiten sesiones de videoconferencia multipunto con tres o mas localizaciones.";
 choices[65][1] = "Las soluciones de videoconferencia sin MCUs requieren un menor ancho de banda.";
 choices[65][2] = "En las soluciones de videoconferencia con MCU cada equipo env&iacute;a la informaci&oacute;n de audio y video con la MCU y esta la env&iacute;a al destinatario. ";
 choices[65][3] = "Las soluciones de videoconferencia sin MCU necesitan equipos con mayor coste.";
 answers[65] = choices[65][1];
 units[65] = "117";
 comments[65] = "Id Pregunta: 6160. ";


//  Id pregunta: 6163 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  Con respecto al cifrado de los datos en videoconferencia:";
 choices[66]= new Array();
 choices[66][0] = "En H.320 sobre RDSI se desarrollaron los est&aacute;ndares H.233 y H.234.";
 choices[66][1] = "Para las videoconferencias basadas en H.323, se desarrollaron los est&aacute;ndares  H.235.";
 choices[66][2] = "Los sistemas basados en SIP usan SRTP.";
 choices[66][3] = "Todas las anteriores son correctas.";
 answers[66] = choices[66][3];
 units[66] = "117";
 comments[66] = "Id Pregunta: 6163. ";


//  Id pregunta: 6487 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  &iquest;Por qu&eacute; se usan celdas de tama&ntilde;o fijo en ATM?";
 choices[67]= new Array();
 choices[67][0] = "Porque se reduce la sobrecarga de cabeceras de protocolo";
 choices[67][1] = "Porque se reduce el tiempo que una trama de alta prioridad deber&aacute; esperar en cola";
 choices[67][2] = "Porque mejora el enrutamiento";
 choices[67][3] = "Por analog&iacute;a con Ethernet";
 answers[67] = choices[67][1];
 units[67] = "109";
 comments[67] = "Id Pregunta: 6487. Castilla La Mancha 2009";


//  Id pregunta: 6492 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)  Para los servicios de telefon&iacute;a m&oacute;vil, el modo de propagaci&oacute;n de la se&ntilde;al radioel&eacute;ctrica es:";
 choices[68]= new Array();
 choices[68][0] = "Onda de superficie";
 choices[68][1] = "Onda ionosf&eacute;rica";
 choices[68][2] = "Onda espacial";
 choices[68][3] = "Onda de dispersi&oacute;n troposf&eacute;rica";
 answers[68] = choices[68][2];
 units[68] = "108";
 comments[68] = "Id Pregunta: 6492. Castilla La Mancha 2009";


//  Id pregunta: 6565 AÃ±o de creación de pregunta: 2010-01-01
 questions[69]= "70)  La velocidad de transmisi&oacute;n en GPRS queda limitada por:";
 choices[69]= new Array();
 choices[69][0] = "El n&uacute;mero de timeslots que pueda ofrecer la c&eacute;lula donde se encuentra el terminal";
 choices[69][1] = "De la capacidad m&aacute;xima del dispositivo m&oacute;vil";
 choices[69][2] = "Del esquema de codificaci&oacute;n";
 choices[69][3] = "Todas las respuestas anteriores son ciertas";
 answers[69] = choices[69][3];
 units[69] = "108";
 comments[69] = "Id Pregunta: 6565. NULL";


//  Id pregunta: 7258 AÃ±o de creación de pregunta: 2010-01-01
 questions[70]= "71)  El dispositivo necesario para modular la se&ntilde;al de acceso a las redes de cable TV se denomina:";
 choices[70]= new Array();
 choices[70][0] = "Cablemodem";
 choices[70][1] = "HBA (Host Bus Adapter)";
 choices[70][2] = "Splitter";
 choices[70][3] = "HDMI (High-Definition Multi-media interface)";
 answers[70] = choices[70][0];
 units[70] = "105";
 comments[70] = "Id Pregunta: 7258. Examen TIC B 2009";


//  Id pregunta: 7261 AÃ±o de creación de pregunta: 2010-01-01
 questions[71]= "72)  El sistema bluetooth posee las siguientes caracter&iacute;sticas. Se&ntilde;ale cu&aacute;l es la INCORRECTA";
 choices[71]= new Array();
 choices[71][0] = "Funciona en la banda de frecuencias ISM (2,45 GHz)";
 choices[71][1] = "Se corresponde con el est&aacute;ndar IEEE 802.15";
 choices[71][2] = "&quot;La topolog&iacute;a de las redes Bluetooth se conoce como &quot;&quot;micronet&quot;&quot; o microrred&quot;";
 choices[71][3] = "Bluetooth v2.0 permite alcanzar velocidades de hasta 3 Mbps";
 answers[71] = choices[71][2];
 units[71] = "107";
 comments[71] = "Id Pregunta: 7261. Examen TIC B 2009";


//  Id pregunta: 7263 AÃ±o de creación de pregunta: 2010-01-01
 questions[72]= "73)  &iquest;Cu&aacute;l de las siguientes no es una tecnolog&iacute;a xSDL?";
 choices[72]= new Array();
 choices[72][0] = "HDSL";
 choices[72][1] = "VDSL";
 choices[72][2] = "ADSL";
 choices[72][3] = "EDSL";
 answers[72] = choices[72][3];
 units[72] = "107";
 comments[72] = "Id Pregunta: 7263. Examen TIC B 2009";


//  Id pregunta: 7265 AÃ±o de creación de pregunta: 2010-01-01
 questions[73]= "74)  En telefon&iacute;a m&oacute;vil, la tecnolog&iacute;a GSM utiliza las siguientes bases de datos de usuarios";
 choices[73]= new Array();
 choices[73][0] = "HLR y VLR";
 choices[73][1] = "VLR y MSC";
 choices[73][2] = "NMC y OMC";
 choices[73][3] = "AUC y NMC";
 answers[73] = choices[73][0];
 units[73] = "108";
 comments[73] = "Id Pregunta: 7265. Examen TIC B 2009";


//  Id pregunta: 8320 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  Se&ntilde;ale cual de las siguientes caracter&iacute;sticas de seguridad est&aacute; incluida tanto en el est&aacute;ndar WPA2 como en el est&aacute;ndar WEP:";
 choices[74]= new Array();
 choices[74][0] = "Intercambio din&aacute;mico de claves.";
 choices[74][1] = "Autenticaci&oacute;n 802.1x";
 choices[74][2] = "Preshared Keys (PSK).";
 choices[74][3] = "Encriptaci&oacute;n AES.";
 answers[74] = choices[74][2];
 units[74] = "107";
 comments[74] = "Id Pregunta: 8320. Examen TIC A2 2010";


//  Id pregunta: 8327 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  ATM se caracteriza, entre otras, por que:";
 choices[75]= new Array();
 choices[75][0] = "Puede funcionar sobre cualquier capa f&iacute;sica";
 choices[75][1] = "Proporciona retransmisi&oacute;n de celdas en caso de detecci&oacute;n de error";
 choices[75][2] = "a y b son ciertas";
 choices[75][3] = "Todas las anteriores son falsas";
 answers[75] = choices[75][0];
 units[75] = "109";
 comments[75] = "Id Pregunta: 8327. Analista Ayto. Madrid 2010";


//  Id pregunta: 8477 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  Indique cu&aacute;l de los siguientes es un est&aacute;ndar WiMAX para servicios m&oacute;viles:";
 choices[76]= new Array();
 choices[76][0] = "IEEE 802.16-2004";
 choices[76][1] = "IEEE 802.16d";
 choices[76][2] = "IEEE 802.16e.";
 choices[76][3] = "Wimax no permite acceso a servicios m&oacute;viles.";
 answers[76] = choices[76][2];
 units[76] = "107";
 comments[76] = "Id Pregunta: 8477. Examen TIC A2 2010 interna";


//  Id pregunta: 8523 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  &iquest;Qu&eacute; tama&ntilde;o tiene una celda ATM?";
 choices[77]= new Array();
 choices[77][0] = "48 bytes, de los cuales 44 son para transmisi&oacute;n de informaci&oacute;n y, el resto, para uso de campos de control.";
 choices[77][1] = "El campo de direcci&oacute;n o cabecera tiene una longitud de 2 octetos, ampiable hasta 4 y un campo de informaci&oacute;n de entre 1 y 8000 bytes (1600 por defecto).";
 choices[77][2] = "Los doce primeros octetos est&aacute;n presentes en cada celda, como cabecera de control, con un cuerpo de informaci&oacute;n de longitud variable.";
 choices[77][3] = "53 bytes, de los cuales 48 (opcionalmente 44) son para trasiego de informaci&oacute;n y, los restantes, para uso de campos de control (cabecera) con datos de direccionamiento";
 answers[77] = choices[77][3];
 units[77] = "109";
 comments[77] = "Id Pregunta: 8523. Examen TIC A2 2010 interna";


//  Id pregunta: 8540 AÃ±o de creación de pregunta: 2011-01-01
 questions[78]= "79)  &iquest;Cu&aacute;l de los siguientes algoritmos de cifrado NO se implementa en WiMax?";
 choices[78]= new Array();
 choices[78][0] = "3DES";
 choices[78][1] = "SEAL";
 choices[78][2] = "AES";
 choices[78][3] = "RSA";
 answers[78] = choices[78][1];
 units[78] = "107";
 comments[78] = "Id Pregunta: 8540. Examen TIC A2 2010 interna";


//  Id pregunta: 8542 AÃ±o de creación de pregunta: 2011-01-01
 questions[79]= "80)  &iquest;Cu&aacute;l es el est&aacute;ndar europeo de TDT?";
 choices[79]= new Array();
 choices[79][0] = "ISDB.";
 choices[79][1] = "MPEG-2";
 choices[79][2] = "DVB-T";
 choices[79][3] = "EDTV";
 answers[79] = choices[79][2];
 units[79] = "105";
 comments[79] = "Id Pregunta: 8542. Examen TIC A2 2010 interna";


//  Id pregunta: 9015 AÃ±o de creación de pregunta: 2011-01-01
 questions[80]= "81)  &iquest;Qu&eacute; utilidad tiene en la transmisi&oacute;n por radio el pico de absorci&oacute;n del ox&iacute;geno en 60 Ghz?:";
 choices[80]= new Array();
 choices[80][0] = "Permite la propagaci&oacute;n por conductos .";
 choices[80][1] = "Permite la reutilizaci&oacute;n espacial de frecuencias en esa banda.";
 choices[80][2] = "Permite la propagaci&oacute;n por dispersi&oacute;n en esa banda.";
 choices[80][3] = "Ninguna de las anteriores";
 answers[80] = choices[80][1];
 units[80] = "108";
 comments[80] = "Id Pregunta: 9015. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9402 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  Una red Frame Relay:";
 choices[81]= new Array();
 choices[81][0] = "Es adecuada para la transmisi&oacute;n de voz.";
 choices[81][1] = "Gestiona tr&aacute;fico por prioridades.";
 choices[81][2] = "Permite establecer circuitos virtuales permanentes.";
 choices[81][3] = "Ninguna de las anteriores";
 answers[81] = choices[81][2];
 units[81] = "109";
 comments[81] = "Id Pregunta: 9402. T&eacute;cnico Teleco Ayto Madrid 2010";


//  Id pregunta: 9522 AÃ±o de creación de pregunta: 2013-01-01
 questions[82]= "83)  En los sistemas de videoconferencia las MCU:";
 choices[82]= new Array();
 choices[82][0] = "Son un componente obligatorio";
 choices[82][1] = "Son un componente opcional";
 choices[82][2] = "Permiten la comunicaci&oacute;n &uacute;nicamente entre dos terminales";
 choices[82][3] = "Permiten sesiones de videoconferencia s&oacute;lo para dos localizaciones remotas simult&aacute;neas";
 answers[82] = choices[82][1];
 units[82] = "117";
 comments[82] = "Id Pregunta: 9522. NULL";


//  Id pregunta: 9528 AÃ±o de creación de pregunta: 2013-01-01
 questions[83]= "84)  &iquest;Qu&eacute; factor afecta a la calidad de servicio en internet?";
 choices[83]= new Array();
 choices[83][0] = "Ancho de banda";
 choices[83][1] = "Jitter o variaci&oacute;n de retardo";
 choices[83][2] = "Eco";
 choices[83][3] = "Todas las respuestas anteriores son correctas";
 answers[83] = choices[83][3];
 units[83] = "117";
 comments[83] = "Id Pregunta: 9528. NULL";


//  Id pregunta: 10071 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  El protocolo de acceso de datos para redes de telefon&iacute;a m&oacute;vil calificado como 3.5G es:";
 choices[84]= new Array();
 choices[84][0] = "GPRS ";
 choices[84][1] = "HSDPA";
 choices[84][2] = "HSUPA ";
 choices[84][3] = "UMTS";
 answers[84] = choices[84][1];
 units[84] = "108";
 comments[84] = "Id Pregunta: 10071. TIC A2, libre, Examen 2013";


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


//  Id pregunta: 10078 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  &iquest;Qu&eacute; nombre recibe el est&aacute;ndar de Televisi&oacute;n Digital Terrestre utilizado en Europa?";
 choices[86]= new Array();
 choices[86][0] = "ATSC ";
 choices[86][1] = "ISDB-T";
 choices[86][2] = "DVB-T ";
 choices[86][3] = "EDTVB";
 answers[86] = choices[86][2];
 units[86] = "105";
 comments[86] = "Id Pregunta: 10078. TIC A2, libre, Examen 2013";


//  Id pregunta: 10080 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  En el contexto de comunicaciones inal&aacute;mbricas, MIMO significa:";
 choices[87]= new Array();
 choices[87][0] = "Multiple Input Multiple Output.";
 choices[87][1] = "Massive Input Massive Output.";
 choices[87][2] = "Multiplexed Input Multiplexed Output.";
 choices[87][3] = "Mapped Input Mapped Output.";
 answers[87] = choices[87][0];
 units[87] = "108";
 comments[87] = "Id Pregunta: 10080. TIC A2, libre, Examen 2013";


//  Id pregunta: 10134 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  &iquest;El reglamento de Infraestructuras Comunes de Telecomunicaci&oacute;n se encuentra recogido en?:";
 choices[88]= new Array();
 choices[88][0] = "El Real Decreto 920 / 2006";
 choices[88][1] = "El Real Decreto 346 / 2011";
 choices[88][2] = "El Real Decreto 401 / 2003";
 choices[88][3] = "Ninguno de los anteriores";
 answers[88] = choices[88][1];
 units[88] = "105";
 comments[88] = "Id Pregunta: 10134. ";


//  Id pregunta: 10139 AÃ±o de creación de pregunta: 2010-01-01
 questions[89]= "90)  El TS (Trasport Stream) en MPEG-2:";
 choices[89]= new Array();
 choices[89][0] = "Su carga &uacute;til est&aacute; formada por paquetes de trenes elementales (Packetized elementary Streams, PES)";
 choices[89][1] = "Su tama&ntilde;o es de 188 bytes";
 choices[89][2] = "Su cabecera es de 4 bytes";
 choices[89][3] = "Todas las anteriores son ciertas";
 answers[89] = choices[89][3];
 units[89] = "105";
 comments[89] = "Id Pregunta: 10139. ";


//  Id pregunta: 10197 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  Indique la afirmaci&oacute;n correcta con respecto a la tecnolog&iacute;a bluetooth 4.0";
 choices[90]= new Array();
 choices[90][0] = "Comercialmente se le ha dado el nombre de Zigbee";
 choices[90][1] = "Supera en velocidad a la versi&oacute;n 2.0 de bluetooth";
 choices[90][2] = "Est&aacute; pensado para transmitir pocos paquetes usando poca energ&iacute;a";
 choices[90][3] = "El alcance supera los 100 metros";
 answers[90] = choices[90][2];
 units[90] = "107";
 comments[90] = "Id Pregunta: 10197. NULL";


//  Id pregunta: 10513 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  &iquest;Cual de los siguientes no es un tipo de tr&aacute;fico de ATM?";
 choices[91]= new Array();
 choices[91][0] = "UBR";
 choices[91][1] = "VBR";
 choices[91][2] = "SBR";
 choices[91][3] = "CBR";
 answers[91] = choices[91][2];
 units[91] = "109";
 comments[91] = "Id Pregunta: 10513. NULL";


//  Id pregunta: 10651 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Se&ntilde;ale la afirmaci&oacute;n incorrecta:";
 choices[92]= new Array();
 choices[92][0] = "La tarjeta SIM contiene la clave del algoritmo de autenticaci&oacute;n con la red GSM.";
 choices[92][1] = "En GSM se utilizan circuitos conmutados extremo a extremo.";
 choices[92][2] = "En la arquitectura de GSM, la interfaz Um se encuentra entre el Subsistema de Estaci&oacute;n Base (BSS) y el Subsistema de Red y  Conmutaci&oacute;n (NSS).";
 choices[92][3] = "En GSM, la separaci&oacute;n entre portadoras ascendente y descendente es de 45 Mhz.";
 answers[92] = choices[92][2];
 units[92] = "108";
 comments[92] = "Id Pregunta: 10651. ";


//  Id pregunta: 10915 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Un proyecto europeo cuyo objetivo estrat&eacute;gico fue mejorar y potenciar el uso de la tecnolog&iacute;a PLC se denomin&oacute; proyecto:";
 choices[93]= new Array();
 choices[93][0] = "CORDIS";
 choices[93][1] = "OPERA";
 choices[93][2] = "Dublin Core";
 choices[93][3] = "POIROT";
 answers[93] = choices[93][1];
 units[93] = "107";
 comments[93] = "Id Pregunta: 10915. Examen GSI 2014";


//  Id pregunta: 10948 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Para una red wifi, &iquest;c&uacute;al de los siguientes NO es un protocolo de seguridad que le sea aplicable?";
 choices[94]= new Array();
 choices[94][0] = "WPA2.";
 choices[94][1] = "WPA.";
 choices[94][2] = "WAP.";
 choices[94][3] = "WEP.";
 answers[94] = choices[94][2];
 units[94] = "107";
 comments[94] = "Id Pregunta: 10948. TIC A1 AGE 2014";


//  Id pregunta: 11190 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Cu&aacute;l de los siguientes protocolos se utiliza para videoconferencia sobre IP?";
 choices[95]= new Array();
 choices[95][0] = "ITU H.320";
 choices[95][1] = "ITU H.243";
 choices[95][2] = "ITU H.249";
 choices[95][3] = "ITU H.323";
 answers[95] = choices[95][3];
 units[95] = "117";
 comments[95] = "Id Pregunta: 11190. ";


//  Id pregunta: 11658 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  En LTE, el S-GW:";
 choices[96]= new Array();
 choices[96][0] = "Es el punto de interconexi&oacute;n a redes IP externas.";
 choices[96][1] = "Une la red de acceso con el n&uacute;cleo de red.";
 choices[96][2] = "Gestiona la QoS en los servicios.";
 choices[96][3] = "Almacena y actualiza la base de datos que contiene la informaci&oacute;n de suscripci&oacute;n del usuario.";
 answers[96] = choices[96][1];
 units[96] = "108";
 comments[96] = "Id Pregunta: 11658. ";


//  Id pregunta: 11659 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  En UMTS, la banda ascendente FDD usa el rango de frecuencias:";
 choices[97]= new Array();
 choices[97][0] = "1920 MHz a 1980 MHz";
 choices[97][1] = "1980 MHz a 2010 MHz";
 choices[97][2] = "2110 MHz a 2170 MHz";
 choices[97][3] = "2170 MHz a 2200 MHz";
 answers[97] = choices[97][0];
 units[97] = "108";
 comments[97] = "Id Pregunta: 11659. ";


//  Id pregunta: 11724 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Qu&eacute; protocolo de seguridad WLAN genera una nueva din&aacute;mica clave cada vez que un cliente establece una conexi&oacute;n con el punto de acceso?";
 choices[98]= new Array();
 choices[98][0] = "WEP";
 choices[98][1] = "PSK";
 choices[98][2] = "EAP";
 choices[98][3] = "WPA";
 answers[98] = choices[98][3];
 units[98] = "107";
 comments[98] = "Id Pregunta: 11724. NULL";


//  Id pregunta: 11737 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Qu&eacute; es una topolog&iacute;a  de red Ad-Hoc?";
 choices[99]= new Array();
 choices[99][0] = "Aquella en la que todos los elementos de una red se comunican con el resto de igual a igual";
 choices[99][1] = "Aquella en la que todos los elementos de una red se comunican a trav&eacute;s de un elemento com&uacute;n llamado control de accesos.";
 choices[99][2] = "Aquella en la que todos los elementos de una red se comunican siguiendo unas prioridades.";
 choices[99][3] = "Aquella que a nivel l&oacute;gico integra redes localizadas en diferentes redes externas.";
 answers[99] = choices[99][0];
 units[99] = "107";
 comments[99] = "Id Pregunta: 11737. ";


