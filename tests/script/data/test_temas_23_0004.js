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

//  Id pregunta: 2948 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  &iquest;Qu&eacute; organismo trabaj&oacute; en la estandarizaci&oacute;n de las redes de cable?";
 choices[0]= new Array();
 choices[0][0] = "El IEEE 802.11";
 choices[0][1] = "El IEEE 802.14";
 choices[0][2] = "El ATU-C";
 choices[0][3] = "El UIT-T E.164";
 answers[0] = choices[0][1];
 units[0] = "105";
 comments[0] = "Id Pregunta: 2948. Examen TIC MAP B 2004";


//  Id pregunta: 2951 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  En ADSL la velocidad de transmisi&oacute;n no depende de:";
 choices[1]= new Array();
 choices[1][0] = "La longitud del bucle de abonado local";
 choices[1][1] = "Los empalmes, conectores y distribuidores que haya para llevar la se&ntilde;al a distintos equipos en el domicilio del usuario";
 choices[1][2] = "Diafon&iacute;a";
 choices[1][3] = "Todas las anteriores.";
 answers[1] = choices[1][3];
 units[1] = "107";
 comments[1] = "Id Pregunta: 2951. Similar a examen TIC SS A 2003";


//  Id pregunta: 2960 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  Qu&eacute; es falso a prop&oacute;sito de GPRS";
 choices[2]= new Array();
 choices[2][0] = "Utiliza una configuraci&oacute;n de frecuencias fija";
 choices[2][1] = "Es una red de paquetes";
 choices[2][2] = "Funciona reservando ranuras de tiempo en frecuencias determinadas para el intercambio de paquetes";
 choices[2][3] = "Est&aacute; construida encima de redes GSM";
 answers[2] = choices[2][0];
 units[2] = "108";
 comments[2] = "Id Pregunta: 2960. Tanenbaum";


//  Id pregunta: 3004 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  Una de las caracter&iacute;sticas b&aacute;sicas de ATM (Modelo de transferencia as&iacute;ncrono) es:";
 choices[3]= new Array();
 choices[3][0] = "Utiliza un formato de celda de longitud fija";
 choices[3][1] = "El tama&ntilde;o de la celda se negocia en el nivel de enlace";
 choices[3][2] = "El tama&ntilde;o de la celda se negocia a trav&eacute;s de red";
 choices[3][3] = "El tama&ntilde;o de la celda se negocia a trav&eacute;s de transorte";
 answers[3] = choices[3][0];
 units[3] = "109";
 comments[3] = "Id Pregunta: 3004. ";


//  Id pregunta: 3012 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  &iquest;A qu&eacute; se corresponden las siglas 802.11e sobre redes inal&aacute;mbricas?";
 choices[4]= new Array();
 choices[4][0] = "A especificaciones de nivel f&iacute;sico ";
 choices[4][1] = "A especificaciones sobre calidad de servicio QoS";
 choices[4][2] = "A especificaciones de Seguridad";
 choices[4][3] = "A especificiaciones de roaming";
 answers[4] = choices[4][1];
 units[4] = "107";
 comments[4] = "Id Pregunta: 3012. NULL";


//  Id pregunta: 3023 AÃ±o de creación de pregunta: 2004-01-01
 questions[5]= "6)  Frame Relay no es el tipo de red de &aacute;rea extensa adecuada para transportar:";
 choices[5]= new Array();
 choices[5][0] = "Ficheros de datos.";
 choices[5][1] = "V&iacute;deo de tiempo real.";
 choices[5][2] = "Descarga de p&aacute;ginas web.";
 choices[5][3] = "Es adecuada para transportar cualquier tipo de tr&aacute;fico.";
 answers[5] = choices[5][1];
 units[5] = "109";
 comments[5] = "Id Pregunta: 3023. ";


//  Id pregunta: 3122 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;C&oacute;mo se denominan en una red UMTS los componentes equivalentes a las BTS  de una red GSM?:";
 choices[6]= new Array();
 choices[6][0] = "UTRAN";
 choices[6][1] = "Nodos-B";
 choices[6][2] = "RNC";
 choices[6][3] = "RNS";
 answers[6] = choices[6][1];
 units[6] = "108";
 comments[6] = "Id Pregunta: 3122. ";


//  Id pregunta: 3179 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes proposiciones no es correcta en lo relativo a GPRS?:";
 choices[7]= new Array();
 choices[7][0] = "La conmutaci&oacute;n en GRPS se realiza a nivel de paquetes de datos";
 choices[7][1] = "La red GRPS se puede comunicar con redes TCP/IP";
 choices[7][2] = "La tarificaci&oacute;n no tiene recargo de establecimiento de llamada y es por tiempo de conexi&oacute;n";
 choices[7][3] = "El acceso radio es por paquetes de datos";
 answers[7] = choices[7][2];
 units[7] = "108";
 comments[7] = "Id Pregunta: 3179. ";


//  Id pregunta: 3261 AÃ±o de creación de pregunta: 2009-01-01
 questions[8]= "9)  En GPRS, es razonable facturar:";
 choices[8]= new Array();
 choices[8][0] = "por tiempo de conexi&oacute;n";
 choices[8][1] = "por n&uacute;mero de conexiones";
 choices[8][2] = "por portadoras en uso";
 choices[8][3] = "por volumen y calidad de servicio";
 answers[8] = choices[8][3];
 units[8] = "108";
 comments[8] = "Id Pregunta: 3261. ";


//  Id pregunta: 3272 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Entre que dos dispositivos se utiliza el NNI (network node interface)?:";
 choices[9]= new Array();
 choices[9][0] = "Dos switches ATM";
 choices[9][1] = "Dos sistemas finales ATM";
 choices[9][2] = "Un DSU/CSU y un router";
 choices[9][3] = "Un sistema final ATM y un switch";
 answers[9] = choices[9][0];
 units[9] = "109";
 comments[9] = "Id Pregunta: 3272. ";


//  Id pregunta: 3313 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Qu&eacute; t&eacute;cnica de codificaci&oacute;n utiliza Bluetooth?:";
 choices[10]= new Array();
 choices[10][0] = "Spread spectrum con secuencia directa";
 choices[10][1] = "Spread spectrum con salto de frecuencia";
 choices[10][2] = "&quot;a&quot; y &quot;b&quot;";
 choices[10][3] = "Ninguna de las anteriores";
 answers[10] = choices[10][1];
 units[10] = "107";
 comments[10] = "Id Pregunta: 3313. NULL";


//  Id pregunta: 3318 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Qu&eacute; velocidad de transmisi&oacute;n establece la norma 802.11g de comunicaciones inal&aacute;mbricas?:";
 choices[11]= new Array();
 choices[11][0] = "100 Mbps";
 choices[11][1] = "54 Mbps";
 choices[11][2] = "22 Mbps";
 choices[11][3] = "36 Mbps";
 answers[11] = choices[11][1];
 units[11] = "107";
 comments[11] = "Id Pregunta: 3318. NULL";


//  Id pregunta: 3370 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Dentro de los sistemas m&oacute;viles celulares el t&eacute;rmino 'handover' hace referencia a los problemas relativos a:";
 choices[12]= new Array();
 choices[12][0] = "Traspaso del m&oacute;vil de una c&eacute;lula a otra";
 choices[12][1] = "La incompatibilidad entre sistemas";
 choices[12][2] = "Los sistemas de directorio X.500";
 choices[12][3] = "Los problemas debidos a la saturaci&oacute;n del espectro radioel&eacute;ctrico";
 answers[12] = choices[12][0];
 units[12] = "108";
 comments[12] = "Id Pregunta: 3370. ";


//  Id pregunta: 3376 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  El est&aacute;ndar ITU-T para audio digital no comprimido en el sonido telef&oacute;nico es:";
 choices[13]= new Array();
 choices[13][0] = "Q.932";
 choices[13][1] = "G.722";
 choices[13][2] = "G.711";
 choices[13][3] = "Q.931";
 answers[13] = choices[13][2];
 units[13] = "117";
 comments[13] = "Id Pregunta: 3376. ";


//  Id pregunta: 3381 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  El m&eacute;todo de Okumura-Hata se usa para:";
 choices[14]= new Array();
 choices[14][0] = "Resoluci&oacute;n de conflictos en negociaciones cuando los contendientes no desean verse en persona";
 choices[14][1] = "Calcular el coste de aplicaci&oacute;n de una u otra estrategia de adquisici&oacute;n de bienes y servicios inform&aacute;ticos y de telecomunicaci&oacute;n";
 choices[14][2] = "C&aacute;lculo de coberturas en enlaces radioel&eacute;ctricos";
 choices[14][3] = "No existe el m&eacute;todo de Okumura-Hata";
 answers[14] = choices[14][2];
 units[14] = "108";
 comments[14] = "Id Pregunta: 3381. ";


//  Id pregunta: 3400 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  El PLCP se incorpora como subnivel de:";
 choices[15]= new Array();
 choices[15][0] = "Nivel 2 de 802.11";
 choices[15][1] = "Nivel 1 de 802.11";
 choices[15][2] = "Nivel 1 de 802.3";
 choices[15][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[15] = choices[15][1];
 units[15] = "101,107";
 comments[15] = "Id Pregunta: 3400. ";


//  Id pregunta: 3413 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  Gen&eacute;ricamente, xDSL es un conjunto de t&eacute;cnicas para:";
 choices[16]= new Array();
 choices[16][0] = "Transmitir a trav&eacute;s de l&iacute;neas de cobre a alta velocidad";
 choices[16][1] = "Transmitir a trav&eacute;s de l&iacute;neas &oacute;pticas a alta velocidad";
 choices[16][2] = "Transmitir por ondas de radio";
 choices[16][3] = "Transmitir utilizando sat&eacute;lites";
 answers[16] = choices[16][0];
 units[16] = "107";
 comments[16] = "Id Pregunta: 3413. NULL";


//  Id pregunta: 3494 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  En el entorno de las comunicaciones m&oacute;viles, los t&eacute;rminos &quot;handover&quot; y &quot;handoff&quot;:";
 choices[17]= new Array();
 choices[17][0] = "Son sin&oacute;nimos";
 choices[17][1] = "&quot;Handover&quot; hace referencia a conmutaciones entre diferentes BTS y &quot;handoff&quot; a cambios de canal dentro de la misma BTS";
 choices[17][2] = "&quot;Handoff&quot; es equivalente a &quot;roaming&quot;";
 choices[17][3] = "&quot;Handoff&quot; no existe";
 answers[17] = choices[17][0];
 units[17] = "108";
 comments[17] = "Id Pregunta: 3494. ";


//  Id pregunta: 3572 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  En una comunicaci&oacute;n v&iacute;a radio entre el m&oacute;vil y la estaci&oacute;n base:";
 choices[18]= new Array();
 choices[18][0] = "El enlace ascendente es del m&oacute;vil a la estaci&oacute;n base";
 choices[18][1] = "El enlace descendente es de la estaci&oacute;n base al m&oacute;vil";
 choices[18][2] = "Las 2 respuestas anteriores son correctas";
 choices[18][3] = "Las respuestas 'a'y 'b' son incorrectas";
 answers[18] = choices[18][2];
 units[18] = "108";
 comments[18] = "Id Pregunta: 3572. ";


//  Id pregunta: 3607 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  La frecuencia de transmisi&oacute;n en MHz de M&oacute;vil a Estaci&oacute;n Base ('uplink') en GSM es:";
 choices[19]= new Array();
 choices[19][0] = "890-915";
 choices[19][1] = "800-825";
 choices[19][2] = "790-815";
 choices[19][3] = "960-985";
 answers[19] = choices[19][0];
 units[19] = "108";
 comments[19] = "Id Pregunta: 3607. ";


//  Id pregunta: 3614 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  La jerarqu&iacute;a digital MDH:";
 choices[20]= new Array();
 choices[20][0] = "Responde por Multimedia Digital Hierarchy";
 choices[20][1] = "Responde por Multiplexed Digital Hierarchy";
 choices[20][2] = "No existe ";
 choices[20][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[20] = choices[20][2];
 units[20] = "109";
 comments[20] = "Id Pregunta: 3614. ";


//  Id pregunta: 3620 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  La norma IEEE 802.11a define una velocidad m&aacute;xima de transferencia de:";
 choices[21]= new Array();
 choices[21][0] = "11 Mbps";
 choices[21][1] = "11 MBps";
 choices[21][2] = "54 Mbps";
 choices[21][3] = "54 MBps";
 answers[21] = choices[21][2];
 units[21] = "101,107";
 comments[21] = "Id Pregunta: 3620. ";


//  Id pregunta: 3630 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  La pen&iacute;nsula ib&eacute;rica est&aacute; telem&aacute;ticamente unida a las islas Canarias:";
 choices[22]= new Array();
 choices[22][0] = "&uacute;nicamente mediante enlace por sat&eacute;lite";
 choices[22][1] = "&uacute;nicamente mediante enlace por cable submarino";
 choices[22][2] = "mediante cable submarino como enlace principal y por sat&eacute;lite como enlace de reserva";
 choices[22][3] = "mediante enlace por sat&eacute;lite como enlace principal y por cable submarino como enlace de reserva";
 answers[22] = choices[22][2];
 units[22] = "105,110";
 comments[22] = "Id Pregunta: 3630. ";


//  Id pregunta: 3744 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Los sistemas m&oacute;viles celulares:";
 choices[23]= new Array();
 choices[23][0] = "Son de car&aacute;cter unidireccional";
 choices[23][1] = "No permiten la conexi&oacute;n a la red p&uacute;blica";
 choices[23][2] = "Permiten la reutilizaci&oacute;n de frecuencias";
 choices[23][3] = "No requieren separaci&oacute;n m&iacute;nima entre c&eacute;lulas";
 answers[23] = choices[23][2];
 units[23] = "108";
 comments[23] = "Id Pregunta: 3744. ";


//  Id pregunta: 3785 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Respecto a la clase de QoS definido por el ATM Forum, UBR, puede decirse que:";
 choices[24]= new Array();
 choices[24][0] = "Asegura una cantidad m&iacute;nima de datos que pueden transmitirse a trav&eacute;s de la red";
 choices[24][1] = "Garantiza al menos una tasa de c&eacute;lulas transmitidas";
 choices[24][2] = "No garantiza ni siquiera un retardo m&aacute;ximo";
 choices[24][3] = "Tiene una tasa de bits concreta incluida en la especificaci&oacute;n";
 answers[24] = choices[24][2];
 units[24] = "109";
 comments[24] = "Id Pregunta: 3785. ";


//  Id pregunta: 3789 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Respecto a las VPN o redes privadas virtuales a trav&eacute;s de internet se puede decir:";
 choices[25]= new Array();
 choices[25][0] = "que son m&aacute;s flexibles pero requieren un mayor mantenimiento";
 choices[25][1] = "que se ahorran costes pero su rendimiento es menor";
 choices[25][2] = "que se usa una infraestructura compartida pero garantizando la calidad de servicio";
 choices[25][3] = "todo lo anterior es correcto";
 answers[25] = choices[25][1];
 units[25] = "107";
 comments[25] = "Id Pregunta: 3789. ";


//  Id pregunta: 3792 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  Respecto a los elementos de red de SDH puede decirse que:";
 choices[26]= new Array();
 choices[26][0] = "Un multiplexor integra tributarios en una estructura de orden superior";
 choices[26][1] = "Un ADM integra y extrae tributarios de la se&ntilde;al de l&iacute;nea";
 choices[26][2] = "Un crossconnect interconecta tributarios entre agregados y agregados entre s&iacute;";
 choices[26][3] = "Todas las afirmaciones anteriores son correctas";
 answers[26] = choices[26][3];
 units[26] = "105";
 comments[26] = "Id Pregunta: 3792. ";


//  Id pregunta: 3804 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  Se conoce como tiempo de vuelo a:";
 choices[27]= new Array();
 choices[27][0] = "El tiempo desde que el cabeza de un disco comienza su movimiento hasta que se posa sobre una pista concreta de la superficie del disco";
 choices[27][1] = "El tiempo desde que una se&ntilde;al (onda) sale de un emisor v&iacute;a radio (aire) hasta que llega a su destino";
 choices[27][2] = "El tiempo que transcurre desde que se pulsa una tecla hasta que el sistema responde al comando requerido";
 choices[27][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[27] = choices[27][1];
 units[27] = "108";
 comments[27] = "Id Pregunta: 3804. ";


//  Id pregunta: 3812 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  Seleccione la respuesta err&oacute;nea respecto de UMTS:";
 choices[28]= new Array();
 choices[28][0] = "La velocidad est&aacute;ndar de UMTS se sit&uacute;a en 384 Kbps";
 choices[28][1] = "UMTS fue iniciativa de IEEE";
 choices[28][2] = "UMTS permite acceso a redes IP";
 choices[28][3] = "El &eacute;xito de UMTS est&aacute; supeditado a la acogida de GPRS";
 answers[28] = choices[28][1];
 units[28] = "108";
 comments[28] = "Id Pregunta: 3812. ";


//  Id pregunta: 3815 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  Se&ntilde;ale cu&aacute;l de los siguientes elementos NO es utilizado en las redes de fibra &oacute;ptica:";
 choices[29]= new Array();
 choices[29][0] = "Transceptor";
 choices[29][1] = "Repetidor";
 choices[29][2] = "Fibras &oacute;pticas";
 choices[29][3] = "Interfaces de RF";
 answers[29] = choices[29][3];
 units[29] = "105";
 comments[29] = "Id Pregunta: 3815. ";


//  Id pregunta: 3841 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  SS7 (Signaling System Number 7) forma parte de:";
 choices[30]= new Array();
 choices[30][0] = "RDSI (ISDN)";
 choices[30][1] = "Videotext";
 choices[30][2] = "ATM";
 choices[30][3] = "Frame Relay";
 answers[30] = choices[30][0];
 units[30] = "109";
 comments[30] = "Id Pregunta: 3841. ";


//  Id pregunta: 3902 AÃ±o de creación de pregunta: 2004-01-01
 questions[31]= "32)  Es posible la transmisi&oacute;n de datos entre dispositivos que siguen el estandar 802.11a y dispositivos que siguen el estandar 802.11b";
 choices[31]= new Array();
 choices[31][0] = "S&iacute;, porque ambos son dispositivos inal&aacute;mbricos WiFi";
 choices[31][1] = "No, porque su radio m&aacute;ximo de acci&oacute;n es diferente";
 choices[31][2] = "No";
 choices[31][3] = "Si siempre que utilicen el mismo canal dentro de la banda de frecuencias en que transmiten.";
 answers[31] = choices[31][2];
 units[31] = "107";
 comments[31] = "Id Pregunta: 3902. Porque operan en distintas frecuencias.";


//  Id pregunta: 3943 AÃ±o de creación de pregunta: 2003-01-01
 questions[32]= "33)  De las siguientes opciones cual no esta relacionada con ATM";
 choices[32]= new Array();
 choices[32][0] = "VPI";
 choices[32][1] = "VCI";
 choices[32][2] = "VHI";
 choices[32][3] = "SDH";
 answers[32] = choices[32][2];
 units[32] = "109";
 comments[32] = "Id Pregunta: 3943. ";


//  Id pregunta: 3952 AÃ±o de creación de pregunta: 2003-01-01
 questions[33]= "34)  Indicar cu&aacute;l no es una caracter&iacute;stica de GPRS";
 choices[33]= new Array();
 choices[33][0] = "Permite conmutaci&oacute;n de circuitos y paquetes";
 choices[33][1] = " Mayor velocidad 2 Mbps";
 choices[33][2] = " Desde Internet se la considera como otra subred cualquiera";
 choices[33][3] = "Es un servicio portador basado en conmutaci&oacute;n de paquetes sobre GSM";
 answers[33] = choices[33][1];
 units[33] = "108";
 comments[33] = "Id Pregunta: 3952. ";


//  Id pregunta: 3957 AÃ±o de creación de pregunta: 2003-01-01
 questions[34]= "35)  La especificaci&oacute;n H.323:";
 choices[34]= new Array();
 choices[34][0] = "Ha sido creada por la ISO, y define un conjunto de protocolos para transmitir voz, video y datos sobre IP";
 choices[34][1] = "Emplea a su vez otras especificaciones, como H.225 y H.245";
 choices[34][2] = "Hace uso del protocolo RTP para establecer las llamadas sobre la red IP";
 choices[34][3] = "Las respuestas b) y c) son correctas";
 answers[34] = choices[34][1];
 units[34] = "107";
 comments[34] = "Id Pregunta: 3957. NULL";


//  Id pregunta: 4013 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  Con respecto a las redes locales y personales inal&aacute;mbricas, se&ntilde;ale qu&eacute; afirmaci&oacute;n no es correcta:";
 choices[35]= new Array();
 choices[35][0] = "El est&aacute;ndar 802.11b funciona en la banda de 2,4 GHz y utiliza DSSS en el nivel f&iacute;sico.";
 choices[35][1] = "El est&aacute;ndar 802.11a funciona en la banda de 5 GHz y utiliza OFDM en el nivel f&iacute;sico.";
 choices[35][2] = "El est&aacute;ndar 802.11g funciona en la banda de 2,4 GHz y puede utilizar OFDM o DSSS en el nivel f&iacute;sico.";
 choices[35][3] = "El est&aacute;ndar Bluetooth funciona en la banda de 2,4 GHz y utiliza OFDM en el nivel f&iacute;sico.";
 answers[35] = choices[35][3];
 units[35] = "107";
 comments[35] = "Id Pregunta: 4013. NULL";


//  Id pregunta: 4015 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  De las siguientes tecnolog&iacute;as xDSL, &iquest;cu&aacute;l de ellas puede ser asim&eacute;trica?";
 choices[36]= new Array();
 choices[36][0] = "HDSL";
 choices[36][1] = "SDSL";
 choices[36][2] = "VDSL";
 choices[36][3] = "SHDSL";
 answers[36] = choices[36][2];
 units[36] = "107";
 comments[36] = "Id Pregunta: 4015. NULL";


//  Id pregunta: 4021 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  La arquitectura del sistema GPRS, adem&aacute;s de los elementos del sistema GSM, requiere una serie de nuevos elementos entre los que se encuentran:";
 choices[37]= new Array();
 choices[37][0] = "Los nodos GGSN y GSGN";
 choices[37][1] = "Los nodos SGSN y GSSN";
 choices[37][2] = "Los nodos GSGN y SSGN";
 choices[37][3] = "Los nodos GGSN y SGSN";
 answers[37] = choices[37][3];
 units[37] = "108";
 comments[37] = "Id Pregunta: 4021. ";


//  Id pregunta: 4031 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  En relaci&oacute;n con los m&eacute;todos de codificaci&oacute;n y compresi&oacute;n de voz, se&ntilde;ale qu&eacute; m&eacute;todo permite comprimir la voz humana llegando hasta los 8 kbps:";
 choices[38]= new Array();
 choices[38][0] = "CS-ACELP";
 choices[38][1] = "ADPCM";
 choices[38][2] = "LD-CELP";
 choices[38][3] = "PCM";
 answers[38] = choices[38][0];
 units[38] = "109";
 comments[38] = "Id Pregunta: 4031. ";


//  Id pregunta: 4197 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  El estandar 802.11k se centra en";
 choices[39]= new Array();
 choices[39][0] = "Calidad de Servicio (QoS) sobre redes WLAN";
 choices[39][1] = "Autenticaci&oacute;n y cifrado para redes WLAN";
 choices[39][2] = "Nueva generaci&oacute;n de WLAN de redes de, al menos, 100 Mbps (en proceso de definici&oacute;n en 2006)";
 choices[39][3] = "Intercambio de informaci&oacute;n de capacidad entre clientes y puntos de acceso en redes WLAN";
 answers[39] = choices[39][3];
 units[39] = "107";
 comments[39] = "Id Pregunta: 4197. NULL";


//  Id pregunta: 4235 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  En el sistema de transmisi&oacute;n de datos Modo de Transferencia As&iacute;ncrono (ATM), las c&eacute;lulas ATM son paquetes de datos";
 choices[40]= new Array();
 choices[40][0] = "De longitud variable seg&uacute;n sea el medio de transmisi&oacute;n";
 choices[40][1] = "De 5 bytes";
 choices[40][2] = "De 48 bytes";
 choices[40][3] = "De 53 bytes";
 answers[40] = choices[40][3];
 units[40] = "109";
 comments[40] = "Id Pregunta: 4235. ";


//  Id pregunta: 4352 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  El dispositivo necesario para tener acceso a Internet a trav&eacute;s de la red de cable-TV que ofrecen distintos operadores, se llama:";
 choices[41]= new Array();
 choices[41][0] = "CODEC.";
 choices[41][1] = "Router.";
 choices[41][2] = "MODEM cable.";
 choices[41][3] = "Splitter.";
 answers[41] = choices[41][2];
 units[41] = "105";
 comments[41] = "Id Pregunta: 4352. ";


//  Id pregunta: 4355 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  La raz&oacute;n por la que en las comunicaciones WiFi se utilizan t&eacute;cnicas de expansi&oacute;n del espectro es:";
 choices[42]= new Array();
 choices[42][0] = "Para poder incrementar la longitud de onda.";
 choices[42][1] = "Para reducir los problemas de propagaci&oacute;n de la se&ntilde;al.";
 choices[42][2] = "Por razones de seguridad.";
 choices[42][3] = "WiFi no utiliza expansi&oacute;n del espectro.";
 answers[42] = choices[42][1];
 units[42] = "107";
 comments[42] = "Id Pregunta: 4355. NULL";


//  Id pregunta: 4488 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  Indique cual de las siguientes afirmaciones es falsa:";
 choices[43]= new Array();
 choices[43][0] = "La tecnolog&iacute;a WiFi esta optimizada para usos en interiores y para rangos de cientos de metros, mientras que la tecnolog&iacute;a WIMAX esta optimizada para aplicaciones de exterior y para rangos de varios kil&oacute;metros.";
 choices[43][1] = "La tecnolog&iacute;a WiFi no requiere que exista l&iacute;nea de visi&oacute;n directa entre el terminal y el Punto de Acceso (AP), mientras que la tecnolog&iacute;a WIMAX requiere que exista una l&iacute;nea de visi&oacute;n directa entre la Estaci&oacute;n Base y la antena del terminal receptor";
 choices[43][2] = "La tecnolog&iacute;a WiFi es capaz de proporcionar capacidades brutas de hasta 54 Mbps en un canal de 20 MHz, mientras que WIMAX proporciona capacidades brutas de hasta 75 Mbps en un canal de 20 MHz.";
 choices[43][3] = "La tecnolog&iacute;a WiFi fue inicialmente dise&ntilde;ada para aplicaciones LAN inal&aacute;mbricas que soportaban decenas de usuarios con una suscripci&oacute;n por terminal, mientras que WIMAX puede soportar cientos de terminales con ilimitadas subscripciones por terminal.";
 answers[43] = choices[43][1];
 units[43] = "107";
 comments[43] = "Id Pregunta: 4488. NULL";


//  Id pregunta: 4541 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  &iquest;En que est&aacute;ndar se basa Ia tecnolog&iacute;a WIMAX?";
 choices[44]= new Array();
 choices[44][0] = "IEEE802.16";
 choices[44][1] = "IEEE802.11";
 choices[44][2] = "IEEE802.3";
 choices[44][3] = "IEEE802.2";
 answers[44] = choices[44][0];
 units[44] = "107";
 comments[44] = "Id Pregunta: 4541. NULL";


//  Id pregunta: 4647 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  De que canales y en que numero esta compuesto un enlace primario RDSI silo contratamos en Europa:";
 choices[45]= new Array();
 choices[45][0] = "2B+D";
 choices[45][1] = "30B+2D (el D a 64 Kbps)";
 choices[45][2] = "30B+D (el D a 16 Kbps)";
 choices[45][3] = "30B+D (el D a 64 Kbps)";
 answers[45] = choices[45][3];
 units[45] = "107";
 comments[45] = "Id Pregunta: 4647. NULL";


//  Id pregunta: 4978 AÃ±o de creación de pregunta: 2003-01-01
 questions[46]= "47)  Cu&aacute;l de las siguientes tecnolog&iacute;as xDSL proporciona mayor velocidad m&aacute;xima te&oacute;rica para la descarga deinformaci&oacute;n:";
 choices[46]= new Array();
 choices[46][0] = "ADSL2+.";
 choices[46][1] = "VDSL.";
 choices[46][2] = "SDSL.";
 choices[46][3] = "HDSL.";
 answers[46] = choices[46][1];
 units[46] = "107";
 comments[46] = "Id Pregunta: 4978. Examen TIC B 2007";


//  Id pregunta: 4980 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  Cu&aacute;l debe ser la frecuencia m&iacute;nima de muestreo de una se&ntilde;al anal&oacute;gica de voz transmitida por un canaltelef&oacute;nico para que pueda ser reconstruida con exactitud:";
 choices[47]= new Array();
 choices[47][0] = "8 muestras/segundo.";
 choices[47][1] = "8000 muestras/segundo.";
 choices[47][2] = "16 muestras/segundo.";
 choices[47][3] = "4000 muestras/segundo.";
 answers[47] = choices[47][1];
 units[47] = "108";
 comments[47] = "Id Pregunta: 4980. Examen TIC B 2007";


//  Id pregunta: 5021 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  Bluetooth es un enlace radio de corto alcance sin cables con un radio de:";
 choices[48]= new Array();
 choices[48][0] = "Hasta 5 metros y un rango de frecuencia de 2,402 GHz a 2,480 GHz";
 choices[48][1] = "Hasta 10 metros y un rango de frecuencia de 2,202 GHz a 2,404 GHz";
 choices[48][2] = "Hasta 10 metros y un rango de frecuencia de 2,402 GHz a 2,480 GHz";
 choices[48][3] = "Hasta 8 metros y un rango de frecuencia de 1,404 GHz a 2,480 GHz";
 answers[48] = choices[48][2];
 units[48] = "107";
 comments[48] = "Id Pregunta: 5021. Examen TIC A 2007";


//  Id pregunta: 5162 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  Indique cu&aacute;l de las siguientes afirmaciones es FALSA:";
 choices[49]= new Array();
 choices[49][0] = "La tecnolog&iacute;a WIMAX permite operar en condiciones en las que no existe l&iacute;nea de visi&oacute;n directa entre la estaci&oacute;n base y el terminal.";
 choices[49][1] = "En Espa&ntilde;a, la tecnolog&iacute;a WIMAX s&oacute;lo puede utilizarse en la banda de uso libre de 5 GHz.";
 choices[49][2] = "La tecnolog&iacute;a WIMAX utiliza un esquema de modulaci&oacute;n multiportadora OFDM.";
 choices[49][3] = "La tecnolog&iacute;a WIMAX se basa en aspectos de la capa f&iacute;sica y de control de acceso al m&eacute;dio del est&aacute;ndar IEEE 802.16";
 answers[49] = choices[49][1];
 units[49] = "107";
 comments[49] = "Id Pregunta: 5162. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5288 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  En una comparativa de UMTS frente a GSM, no es cierto que:";
 choices[50]= new Array();
 choices[50][0] = "UMTS utiliza frecuencias m&aacute;s elevadas";
 choices[50][1] = "En UMTS se producen menores p&eacute;rdidas de propagaci&oacute;n";
 choices[50][2] = "En UMTS el tama&ntilde;o de las c&eacute;lulas puede ser inferior";
 choices[50][3] = "La capacidad de una portadora de W-CDMA es mayor que la de una portadora GSM";
 answers[50] = choices[50][1];
 units[50] = "108";
 comments[50] = "Id Pregunta: 5288. ";


//  Id pregunta: 5605 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  &iquest;Qu&eacute; niveles implementa el m&oacute;dem de cable?";
 choices[51]= new Array();
 choices[51][0] = "El nivel f&iacute;sico, de control de acceso al medio e IP";
 choices[51][1] = "El nivel f&iacute;sico, enlace, de red y de transporte";
 choices[51][2] = "El nivel f&iacute;sico y de control de acceso al medio";
 choices[51][3] = "Depende, a partir de DOCSIS 2.0 se implementan el nivel f&iacute;sico y de control de acceso al medio e IP";
 answers[51] = choices[51][2];
 units[51] = "105";
 comments[51] = "Id Pregunta: 5605. ";


//  Id pregunta: 5855 AÃ±o de creación de pregunta: 2009-01-01
 questions[52]= "53)  En referencia a WiMAX, seleccione cu&aacute;l de las siguientes opciones se corresponde con WiMAX m&oacute;vil:";
 choices[52]= new Array();
 choices[52][0] = "802.16i";
 choices[52][1] = "802.16e";
 choices[52][2] = "802.16f";
 choices[52][3] = "802.16n";
 answers[52] = choices[52][1];
 units[52] = "107";
 comments[52] = "Id Pregunta: 5855. Pregunta 35";


//  Id pregunta: 5908 AÃ±o de creación de pregunta: 2009-01-01
 questions[53]= "54)  En referencia a la arquitectura Bluetooth, seleccione la opci&oacute;n correcta de entre las que aparecen a continuaci&oacute;n:";
 choices[53]= new Array();
 choices[53][0] = "La unidad b&aacute;sica de un sistema Bluetooth es una scatternet, que consta de un nodo maestro y hasta siete nodos esclavos activos a una distancia de 10 metros";
 choices[53][1] = "La unidad b&aacute;sica de un sistema Bluetooth es una piconet, que consta de un nodo maestro y hasta siete nodos esclavos activos a una distancia de 10 metros";
 choices[53][2] = "La unidad b&aacute;sica de un sistema Bluetooth es una scatternet, que consta de uno o m&aacute;s nodos maestros y m&aacute;s de siete nodos esclavos a una distancia de 10 metros";
 choices[53][3] = "La unidad b&aacute;sica de un sistema Bluetooth es una piconet, que consta de uno o m&aacute;s nodos maestro y mas de siete nodos esclavos a una distancia de 10 metros";
 answers[53] = choices[53][1];
 units[53] = "107";
 comments[53] = "Id Pregunta: 5908. MAP 2008 A1";


//  Id pregunta: 6144 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  Con respecto al ancho de banda de la conexi&oacute;n ADSL de un abonado";
 choices[54]= new Array();
 choices[54][0] = "La tasa de transferencia no es sensible a la distancia del abonado a la central, de forma que es similar a todos los abonados de una misma central";
 choices[54][1] = "La tasa de transferencia es sensible a la distancia del abonado a la central, de forma que los abonados que est&aacute;n m&aacute;s cerca de la central tendr&aacute;n posibilidad de velocidades m&aacute;s altas";
 choices[54][2] = "La tasa de transferencia del abonado depende principalmente del n&uacute;mero de abonados que est&aacute;n conectados simult&aacute;neamente, en ning&uacute;n caso de la distancia a la central";
 choices[54][3] = "Todas las respuestas anteriores son falsas";
 answers[54] = choices[54][1];
 units[54] = "107";
 comments[54] = "Id Pregunta: 6144. NULL";


//  Id pregunta: 6158 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  Indique la afirmaci&oacute;n correcta sobre los diferentes codecs de audio y video en videoconferencia H.323";
 choices[55]= new Array();
 choices[55][0] = "G711 y G722 son codecs de audio mientras que H261 y H263 son codecs  de video";
 choices[55][1] = "G711 y G722 son codecs de video mientras que H261 y H263 son codecs  de audio";
 choices[55][2] = "G711 y H261 son codecs de audio mientras que G722 y H263 son codecs  de video";
 choices[55][3] = "G711 y H261 son codecs de video mientras que G722 y H263 son codecs  de audio";
 answers[55] = choices[55][0];
 units[55] = "117";
 comments[55] = "Id Pregunta: 6158. ";


//  Id pregunta: 6162 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  Indique cual de las siguientes no es una funci&oacute;n de los gatekeepers:";
 choices[56]= new Array();
 choices[56][0] = "Control del Ancho de Banda.";
 choices[56][1] = "Rechazo de llamadas seg&uacute;n distintos criterios.";
 choices[56][2] = "Control de comunicaci&oacute;n con MCUs o gateways.";
 choices[56][3] = "Comunicaci&oacute;n con redes de conmutaci&oacute;n de circuitos.";
 answers[56] = choices[56][3];
 units[56] = "117";
 comments[56] = "Id Pregunta: 6162. ";


//  Id pregunta: 6486 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes es una desventaja de LMDS?";
 choices[57]= new Array();
 choices[57][0] = "La necesidad de desplegar fibra &oacute;ptica hasta las proximidades del cliente";
 choices[57][1] = "Requiere eliminar las bobinas de carga del bucle local";
 choices[57][2] = "Requiere licencia de uso del espectro radioel&eacute;ctrico para la operadora";
 choices[57][3] = "Es un servicio punto a punto";
 answers[57] = choices[57][2];
 units[57] = "108";
 comments[57] = "Id Pregunta: 6486. Castilla La Mancha 2009";


//  Id pregunta: 6559 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  CSMA (Acceso M&uacute;ltiple por divisi&oacute;n de c&oacute;digo) no se caracteriza por:";
 choices[58]= new Array();
 choices[58][0] = "Ancho de banda menor a los sistemas TDMA";
 choices[58][1] = "Ancho de banda mayor a los sistemas TDMA";
 choices[58][2] = "Se puede reutilizar la misma portadora en todas las c&eacute;lulas, sean adyacentes o no";
 choices[58][3] = "M&uacute;ltiples usuarios pueden transmitir de manera concurrente sobre el mismo radiocanal";
 answers[58] = choices[58][0];
 units[58] = "108";
 comments[58] = "Id Pregunta: 6559. NULL";


//  Id pregunta: 6560 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  Qu&eacute; afirmaci&oacute;n es falsa en relaci&oacute;n a la tecnolog&iacute;a 3.5G?";
 choices[59]= new Array();
 choices[59][0] = "Tecnolog&iacute;a HSDPA";
 choices[59][1] = "Capacidad enlace descendente: hasta 14.4 Mbps";
 choices[59][2] = "El uso del canal descendente puede ser compartido por varios usuarios";
 choices[59][3] = "Todas las respuestas anteriores son correctas";
 answers[59] = choices[59][3];
 units[59] = "108";
 comments[59] = "Id Pregunta: 6560. NULL";


//  Id pregunta: 6568 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  HSDPA introduce, respecto de UMTS, las siguientes mejoras:";
 choices[60]= new Array();
 choices[60][0] = "Tasas cercanas 200 Gbps";
 choices[60][1] = "Nueva portadora de 584 kbps";
 choices[60][2] = "Reducci&oacute;n del tiempo de latencia";
 choices[60][3] = "M&aacute;ximo de 10 GB de tr&aacute;fico al mes para el usuario";
 answers[60] = choices[60][2];
 units[60] = "108";
 comments[60] = "Id Pregunta: 6568. NULL";


//  Id pregunta: 7262 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  &quot;&iquest;Cu&aacute;l es el est&aacute;ndar WIMAX que permite movilidad conocido como &quot;&quot;WIMAX m&oacute;vil&quot;&quot;?&quot;";
 choices[61]= new Array();
 choices[61][0] = "802.16d";
 choices[61][1] = "802.16";
 choices[61][2] = "802.16h";
 choices[61][3] = "802.16e";
 answers[61] = choices[61][3];
 units[61] = "107";
 comments[61] = "Id Pregunta: 7262. Examen TIC B 2009";


//  Id pregunta: 7264 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  Existen diferencias entre ADSL2 y ADSL2+. Se&ntilde;ale la INCORRECTA:";
 choices[62]= new Array();
 choices[62][0] = "La velocidad m&aacute;xima. ADSL2+ alcanza mayores velocidades";
 choices[62][1] = "El ancho de banda. ADSL2+ ocupa mayor ancho de banda";
 choices[62][2] = "La infraestructura necesaria. ADSL2+ requiere una instalaci&oacute;n m&aacute;s compleja que ADSL2 para proporcionar la transici&oacute;n desde ADSL";
 choices[62][3] = "El n&uacute;mero de pares de cobre entrelazados. ADSL2+ requiere el doble de pares de cobre entrelazados";
 answers[62] = choices[62][3];
 units[62] = "107";
 comments[62] = "Id Pregunta: 7264. Examen TIC B 2009";


//  Id pregunta: 7266 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  El acceso al medio utilizado por GSM (Global System Mobile) es acceso m&uacute;ltiple por divisi&oacute;n de:";
 choices[63]= new Array();
 choices[63][0] = "Frecuencia";
 choices[63][1] = "Tiempo";
 choices[63][2] = "Tiempo y frecuencia";
 choices[63][3] = "C&oacute;digo de banda ancha (WCDMA)";
 answers[63] = choices[63][2];
 units[63] = "108";
 comments[63] = "Id Pregunta: 7266. Examen TIC B 2009";


//  Id pregunta: 8246 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  Para garantizar la protecci&oacute;n sanitaria frente a las ondas electromagn&eacute;ticas de telefon&iacute;a m&oacute;vil, los operadores de telefon&iacute;a m&oacute;vil deben:";
 choices[64]= new Array();
 choices[64][0] = "Situar las estaciones base fuera de las ciudades, de tal forma que al estar m&aacute;s alejadas, la potencia que reciban las personas debida a una comunicaci&oacute;n por telefon&iacute;a m&oacute;vil sea menor.";
 choices[64][1] = "Instalar las estaciones base de manera que el diagrama de emisi&oacute;n no incida sobre el propio edificio, terraza o &aacute;tico, si se instalan en una azotea.";
 choices[64][2] = "Fijar la potencia con la que emiten las estaciones base para que sea 1/4 de la SAR (Tasa de absorci&oacute;n espec&iacute;fica) de un tel&eacute;fono m&oacute;vil.";
 choices[64][3] = "Instalar las estaciones base en cualquier sitio, ya que la telefon&iacute;a m&oacute;vil emite ondas ionizantes que no afectan a la salud.";
 answers[64] = choices[64][1];
 units[64] = "108";
 comments[64] = "Id Pregunta: 8246. Examen TIC A1 2010";


//  Id pregunta: 8301 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  Dentro del nivel AAL de ATM, AAL2 se caracteriza por tener: ";
 choices[65]= new Array();
 choices[65][0] = "Retardo constante y tasa de bit variable. ";
 choices[65][1] = "Retardo variable y tasa de bit constante.";
 choices[65][2] = "Retardo variable y tasa de bit variable. ";
 choices[65][3] = "Retardo constante y tasa de bit constante.";
 answers[65] = choices[65][0];
 units[65] = "109";
 comments[65] = "Id Pregunta: 8301. Examen TIC A2 2010";


//  Id pregunta: 8311 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  Existe una variedad de tecnolog&iacute;as xDSL que se caracterizan por:";
 choices[66]= new Array();
 choices[66][0] = "La infraestructura f&iacute;sica que soporta el servicio: par de cobre, fibra &oacute;ptica u otros medios de transmisi&oacute;n.";
 choices[66][1] = "El n&uacute;mero de canales de alta velocidad disponibles. ";
 choices[66][2] = "Por la compatibilidad, o no, con la transmisi&oacute;n de voz, y la calidad de la misma.";
 choices[66][3] = "Su simetr&iacute;a/asimetr&iacute;a en los canales de subida y bajada de datos.";
 answers[66] = choices[66][3];
 units[66] = "107";
 comments[66] = "Id Pregunta: 8311. Examen TIC A2 2010";


//  Id pregunta: 8317 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  El protocolo de acceso de datos para redes de telefon&iacute;a m&oacute;vil calificado como generaci&oacute;n 3.75 (3.75 G) es: ";
 choices[67]= new Array();
 choices[67][0] = "GPRS. ";
 choices[67][1] = "HSDPA. ";
 choices[67][2] = "HSUPA. ";
 choices[67][3] = "UMTS. ";
 answers[67] = choices[67][2];
 units[67] = "108";
 comments[67] = "Id Pregunta: 8317. Examen TIC A2 2010";


//  Id pregunta: 8475 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  El est&aacute;ndar IEEE 802.16 hace referencia a:";
 choices[68]= new Array();
 choices[68][0] = "Bluetooth.";
 choices[68][1] = "Wi-Fi.";
 choices[68][2] = "Wimax.";
 choices[68][3] = "Wireless LAN.";
 answers[68] = choices[68][2];
 units[68] = "107";
 comments[68] = "Id Pregunta: 8475. Examen TIC A2 2010 interna";


//  Id pregunta: 8537 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  En las redes m&oacute;viles 3G de transici&oacute;n, encontramos tecnolog&iacute;as como HSPA evolucionado o HSPA+. &iquest;Cu&aacute;l es una de las caracter&iacute;sticas de mejora de esta tecnolog&iacute;a?";
 choices[69]= new Array();
 choices[69][0] = "Permite el uso de antenas MIMO";
 choices[69][1] = "Alcanza velocidades pico te&oacute;ncas de 100 Mbps.";
 choices[69][2] = "Proporciona capacidades sim&eacute;tricas para los enlaces ascendente y descendente";
 choices[69][3] = "La modulaci&oacute;n es GMSK, de gran eficiencia espectral";
 answers[69] = choices[69][0];
 units[69] = "108";
 comments[69] = "Id Pregunta: 8537. Examen TIC A2 2010 interna";


//  Id pregunta: 8539 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  &iquest;Qu&eacute; est&aacute;ndar de redes inal&aacute;mbricas permite a dispositivos en movimiento realizar itinerancia r&aacute;pida de un punto de acceso a otro?";
 choices[70]= new Array();
 choices[70][0] = "IEEE 802.11 h";
 choices[70][1] = "IEEE 802.11 l";
 choices[70][2] = "IEEE 802.11 p";
 choices[70][3] = "IEEE 802 11 r.";
 answers[70] = choices[70][3];
 units[70] = "107";
 comments[70] = "Id Pregunta: 8539. Examen TIC A2 2010 interna";


//  Id pregunta: 8543 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  &iquest;Qu&eacute; codec de v&iacute;deo se utiliza en la TDT para los canales en alta definici&oacute;n (HD)?";
 choices[71]= new Array();
 choices[71][0] = "Huffyuv.";
 choices[71][1] = "MPEG-4";
 choices[71][2] = "MPEG-2";
 choices[71][3] = "Sorenson.";
 answers[71] = choices[71][1];
 units[71] = "105";
 comments[71] = "Id Pregunta: 8543. Examen TIC A2 2010 interna";


//  Id pregunta: 8662 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  En el protocolo SIP de voz sobre IP, &iquest;cu&aacute;l no es una entidad l&oacute;gica?";
 choices[72]= new Array();
 choices[72][0] = "Agente de usuario";
 choices[72][1] = "Servidor proxy";
 choices[72][2] = "Agente de usuario inverso";
 choices[72][3] = "Agente proxy";
 answers[72] = choices[72][3];
 units[72] = "109";
 comments[72] = "Id Pregunta: 8662. Examen UPM A2 2011";


//  Id pregunta: 8664 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  La tecnolog&iacute;a que se basa en el protocolo SWAP (shared wireless access protocol) y que tiene como objetivo la conectividad sin cables dentro del hogar se llama:";
 choices[73]= new Array();
 choices[73][0] = "Bluetooth";
 choices[73][1] = "HomeRF";
 choices[73][2] = "HiperLAN/2";
 choices[73][3] = "IrLMP";
 answers[73] = choices[73][1];
 units[73] = "107";
 comments[73] = "Id Pregunta: 8664. Examen UPM A2 2011";


//  Id pregunta: 8685 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  &iquest;Qu&eacute; t&eacute;cnica de codificaci&oacute;n utiliza Bluetooth?:";
 choices[74]= new Array();
 choices[74][0] = "Spread spectrum con secuencia directa";
 choices[74][1] = "Spread spectrum con salto de frecuencia";
 choices[74][2] = "Spread spectrum con secuencia indirecta";
 choices[74][3] = "Spread spectrum sobre TCP/IP";
 answers[74] = choices[74][1];
 units[74] = "107";
 comments[74] = "Id Pregunta: 8685. Examen UPM A2 2011";


//  Id pregunta: 8890 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  &iquest;En que banda de frecuencias trabaja WiBro?";
 choices[75]= new Array();
 choices[75][0] = "10GHz-66GHz";
 choices[75][1] = "2,45MHz";
 choices[75][2] = "2,3GHz-2,4GHz";
 choices[75][3] = "2GHz-11GHz";
 answers[75] = choices[75][2];
 units[75] = "107";
 comments[75] = "Id Pregunta: 8890. NULL";


//  Id pregunta: 9012 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  Las p&eacute;rdidas debidas a absorci&oacute;n por gases atmosf&eacute;ricos deben tenerse en cuenta en:";
 choices[76]= new Array();
 choices[76][0] = "Radioenlaces de frecuencias superiores a 30 GHz.";
 choices[76][1] = "Radioenlaces de frecuencias superiores a 3 GHz.";
 choices[76][2] = "Radioenlaces de frecuencias superiores a 300 MHz.";
 choices[76][3] = "Radioenlaces de frecuencias superiores a 300 kHz";
 answers[76] = choices[76][1];
 units[76] = "108";
 comments[76] = "Id Pregunta: 9012. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9031 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  &iquest;Qu&eacute; tecnolog&iacute;a utiliza en exclusiva una modulacu&oacute;n DSSS?";
 choices[77]= new Array();
 choices[77][0] = "802.11a";
 choices[77][1] = "802.11b";
 choices[77][2] = "802.11g";
 choices[77][3] = "802.11n";
 answers[77] = choices[77][1];
 units[77] = "107";
 comments[77] = "Id Pregunta: 9031. NULL";


//  Id pregunta: 9059 AÃ±o de creación de pregunta: 2011-01-01
 questions[78]= "79)  Indica cu&aacute;l de los siguientes par&aacute;metros tiene en cuenta el algoritmo de adjudicaci&oacute;n de HSUPA.";
 choices[78]= new Array();
 choices[78][0] = "Ancho de banda disponible en cada estaci&oacute;n";
 choices[78][1] = "Consumo el&eacute;ctrico del Hardware";
 choices[78][2] = "Interferencia en el canal UPLOAD";
 choices[78][3] = "Todos los anteriores.";
 answers[78] = choices[78][3];
 units[78] = "108";
 comments[78] = "Id Pregunta: 9059. NULL";


//  Id pregunta: 9385 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  En LTE, las funciones de control de recursos de radio, control de calidad de servicio y movilidad se llevan a cabo en:";
 choices[79]= new Array();
 choices[79][0] = "Los Evolved Node-B";
 choices[79][1] = "Los Evolved RNC";
 choices[79][2] = "En las BSC";
 choices[79][3] = "En servidores remotos del operador, a los que se accede por conmutaci&oacute;n en una red IP";
 answers[79] = choices[79][0];
 units[79] = "108";
 comments[79] = "Id Pregunta: 9385. NULL";


//  Id pregunta: 9386 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  Sobre el interfaz radio de LTE, se puede afirmar";
 choices[80]= new Array();
 choices[80][0] = "Utiliza WCDMA";
 choices[80][1] = "Utiliza unicamente FDD para la duplexaci&oacute;n.";
 choices[80][2] = "Utiliza OFDM para la bajada y FDMA de portadora simple en la subida";
 choices[80][3] = "Combina TDMA y FDMA";
 answers[80] = choices[80][2];
 units[80] = "108";
 comments[80] = "Id Pregunta: 9386. NULL";


//  Id pregunta: 9387 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  Se&ntilde;ale la respuesta correcta acerca de LTE:";
 choices[81]= new Array();
 choices[81][0] = "El HSS (Home Subscriber Server) es una base de datos distribuida que contiene informaci&oacute;n de los usuarios, sin entrar en funciones de Autenticaci&oacute;n, funci&oacute;n que lleva a cabo el eAUC.";
 choices[81][1] = "El Serving Gateway (SGW) tiene la funci&oacute;n de reenv&iacute;o y enrutado de paquetes de usuario, adem&aacute;s de ser el elemento que gestiona la movilidad entre eNodosB. Tambi&eacute;n gestiona la movilidad entre diferentes tecnolog&iacute;as de 3GPP. ";
 choices[81][2] = "El PGW (PDN Gateway) tiene la funci&oacute;n de reenv&iacute;o y enrutado de paquetes de usuario, adem&aacute;s de ser el elemento que gestiona la movilidad entre eNodosB. Tambi&eacute;n gestiona la movilidad entre diferentes tecnolog&iacute;as de 3GPP. ";
 choices[81][3] = "El MME (Mobility Management Entity) es un elemento responsable del control de la estaci&oacute;n base, siendo el interfaz a la red conmutada de LTE";
 answers[81] = choices[81][1];
 units[81] = "108";
 comments[81] = "Id Pregunta: 9387. NULL";


//  Id pregunta: 9388 AÃ±o de creación de pregunta: 2013-01-01
 questions[82]= "83)  De las tecnolog&iacute;as 4G, se puede afirmar:";
 choices[82]= new Array();
 choices[82][0] = "WiMax alcanza velocidades de bajada inferiores a 100 Mbps";
 choices[82][1] = "LTE alcanza velocidades de bajada superiores a las que se alcanzan con WiMax";
 choices[82][2] = "WiMAX puede alcanzar velocidades de bajada superiores a 100 Mbps";
 choices[82][3] = "HSPA+ no puede superar los 25 Mbps de bajada puesto que no mantiene una conexi&oacute;n permanente con la estaci&oacute;n base";
 answers[82] = choices[82][2];
 units[82] = "108";
 comments[82] = "Id Pregunta: 9388. http://en.wikipedia.org/wiki/4G";


//  Id pregunta: 9391 AÃ±o de creación de pregunta: 2013-01-01
 questions[83]= "84)  &iquest;A que hace referencia el t&eacute;rmino care-of address?";
 choices[83]= new Array();
 choices[83][0] = "Direcci&oacute;n IPv6 compatible con IPv4. ";
 choices[83][1] = "Direcci&oacute;n IPv4 mapeada en IPv6.";
 choices[83][2] = "Direcci&oacute;n IP temporal para un dispositivo m&oacute;vil.";
 choices[83][3] = "Direcci&oacute;n IP para transacciones de Terminales Punto de Venta (TPV).";
 answers[83] = choices[83][2];
 units[83] = "108";
 comments[83] = "Id Pregunta: 9391. Examen TIC A2 2011 Libre";


//  Id pregunta: 9396 AÃ±o de creación de pregunta: 2013-01-01
 questions[84]= "85)  Las redes ATM emplean celdas de:";
 choices[84]= new Array();
 choices[84][0] = "Tama&ntilde;o variable: entre 5 e 10 bytes de cabecera, m&aacute;s 46 bytes de informaci&oacute;n";
 choices[84][1] = "Tama&ntilde;o fijo: 5 bytes de cabecera, m&aacute;s 48 bytes de informaci&oacute;n";
 choices[84][2] = "Tama&ntilde;o fijo: 8 bytes de cabecera, m&aacute;s 56 bytes de informaci&oacute;n.";
 choices[84][3] = "Tama&ntilde;o variable: 5 bytes de cabecera y entre 48 y 56 bytes de informaci&oacute;n.";
 answers[84] = choices[84][1];
 units[84] = "109";
 comments[84] = "Id Pregunta: 9396. Examen Xunta de Galicia A1 2011";


//  Id pregunta: 9399 AÃ±o de creación de pregunta: 2013-01-01
 questions[85]= "86)  En el modelo de referencia de ATM, &iquest;c&oacute;mo se denomina la capa que tiene las funciones de convergencia, y segmentaci&oacute;n y reensamblado?";
 choices[85]= new Array();
 choices[85][0] = "TC";
 choices[85][1] = "PM";
 choices[85][2] = "AAL";
 choices[85][3] = "ATM";
 answers[85] = choices[85][2];
 units[85] = "109";
 comments[85] = "Id Pregunta: 9399. TIC AGE A2 2011 Promo Int";


//  Id pregunta: 9401 AÃ±o de creación de pregunta: 2013-01-01
 questions[86]= "87)  El modo de transporte del primer est&aacute;ndar ADSL, UIT-T/G.992.1 de 1999, era el ATM, a cuyo efecto, una trama Ethernet de 1.300 bytes se convert&iacute;a en (aproximadamente):";
 choices[86]= new Array();
 choices[86][0] = "1300 x 53 = 68.900 celdas ATM";
 choices[86][1] = "1300 / 48 = 27,1 ? 28 celdas ATM";
 choices[86][2] = "1300 / 53 = 24,5 ? 25 celdas ATM.";
 choices[86][3] = "Ninguna de las anteriores";
 answers[86] = choices[86][1];
 units[86] = "109";
 comments[86] = "Id Pregunta: 9401. T&eacute;cnico Teleco Ayto Madrid 2010";


//  Id pregunta: 9525 AÃ±o de creación de pregunta: 2013-01-01
 questions[87]= "88)  Se&ntilde;ale la afimaci&oacute;n falsa con respecto al protocolo H.245:";
 choices[87]= new Array();
 choices[87][0] = "Es un protocolo para el control multimedia de las llamadas";
 choices[87][1] = "S&oacute;lo lo utiliza el protocolo H.323";
 choices[87][2] = "A parte del protocolo H.323, lo utilizan otros protocolos (como por ejemplo el protocolo H.234)";
 choices[87][3] = "Es un protocolo de gesti&oacute;n y control";
 answers[87] = choices[87][1];
 units[87] = "117";
 comments[87] = "Id Pregunta: 9525. NULL";


//  Id pregunta: 9896 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  Mediante la tecnolog&iacute;a EGPRS (Enhanced GPRS) se pueden llegar a conseguir velocidades de transmisi&oacute;n en modo paquetes de hasta";
 choices[88]= new Array();
 choices[88][0] = "384 kbps.";
 choices[88][1] = "115 kbps.";
 choices[88][2] = "2 Mbps.";
 choices[88][3] = "10 Mbps.";
 answers[88] = choices[88][0];
 units[88] = "108";
 comments[88] = "Id Pregunta: 9896. TIC A1, Examen 2013";


//  Id pregunta: 10047 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  Con respecto al campo Data Link Connection Identifier (DLCI) de Frame Relay se&ntilde;ale la respuesta correcta:";
 choices[89]= new Array();
 choices[89][0] = "Debe ser &uacute;nico en toda la red.";
 choices[89][1] = "Tiene una longitud total de 10 bits por defecto.";
 choices[89][2] = "Controla los mecanismos de notificaci&oacute;n de congesti&oacute;n.";
 choices[89][3] = "Los valores 0 a 128 del mismo est&aacute;n reservados para funciones especiales.";
 answers[89] = choices[89][1];
 units[89] = "109";
 comments[89] = "Id Pregunta: 10047. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10204 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  Indique qu&eacute; afirmaci&oacute;n es falsa en relaci&oacute;n a la tecnolog&iacute;a 4G de comunicaciones m&oacute;viles";
 choices[90]= new Array();
 choices[90][0] = "Su arquitectura de red, EPS (Evolved Packet System), est&aacute; formada por el n&uacute;cleo de red EPC (Evolved Packet Core) y la red de acceso LTE, conocida como E-UTRAN";
 choices[90][1] = "Desaparece el RNC (Radio Network Controller) y sus funciones se incorporan al eNode B (Evolved Node B)";
 choices[90][2] = "Desaparecen los soft handovers y solo existen hard handovers";
 choices[90][3] = "Mantiene en su arquitectura los HLR (Home Locationl Register) usados desde GSM";
 answers[90] = choices[90][3];
 units[90] = "108";
 comments[90] = "Id Pregunta: 10204. En la arquitectura se introduce un nuevo elemento llamado HSS (Home Subscriber Server) basado en la antigua HLR y AuC";


//  Id pregunta: 10512 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  &iquest;Que estandar establece el formato de la numeracion, las direcciones email y las direcciones web?";
 choices[91]= new Array();
 choices[91][0] = "E.122";
 choices[91][1] = "E.123";
 choices[91][2] = "E.231";
 choices[91][3] = "Ninguna de las anteriores";
 answers[91] = choices[91][1];
 units[91] = "109";
 comments[91] = "Id Pregunta: 10512. NULL";


//  Id pregunta: 10658 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l de estas tecnolog&iacute;as inal&aacute;mbricas puede alcanzar una cobertura de hasta 80 kil&oacute;metros?";
 choices[92]= new Array();
 choices[92][0] = "Zigbee";
 choices[92][1] = "WiMAX";
 choices[92][2] = "Ethernet";
 choices[92][3] = "Wibree";
 answers[92] = choices[92][1];
 units[92] = "107";
 comments[92] = "Id Pregunta: 10658. ";


//  Id pregunta: 10907 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Se&ntilde;ala la afirmaci&oacute;n INCORRECTA:";
 choices[93]= new Array();
 choices[93][0] = "La tecnolog&iacute;a VDSL permite transmisi&oacute;n asim&eacute;trica o sim&eacute;trica.";
 choices[93][1] = "VDSL utiliza 2 canales para transmisi&oacute;n de datos, uno para subida y el otro para descarga.";
 choices[93][2] = "La tecnolog&iacute;a HFC es una combinaci&oacute;n de cable y fibra &oacute;ptica.";
 choices[93][3] = "La tecnolog&iacute;a FTTH permite que la fibra &oacute;ptica llegue hasta la casa del cliente.";
 answers[93] = choices[93][1];
 units[93] = "107";
 comments[93] = "Id Pregunta: 10907. Examen GSI 2014";


//  Id pregunta: 10909 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Uno de los problemas en cuanto a la calidad del servicio (QoS) de una red VoIP es la latencia, se&ntilde;ale su definici&oacute;n correcta:";
 choices[94]= new Array();
 choices[94][0] = "Variaci&oacute;n en el tiempo de llegada de los paquetes, causada por congesti&oacute;n de red, p&eacute;rdida de sincronizaci&oacute;n o por las diferentes rutas seguidas.";
 choices[94][1] = "Es una reflexi&oacute;n retardada de la se&ntilde;al ac&uacute;stica original.";
 choices[94][2] = "El tiempo que tarda un paquete en llegar desde la fuente al destino.";
 choices[94][3] = "P&eacute;rdida que se produce al usar protocolos no orientados a conexi&oacute;n que no reenv&iacute;an paquetes perdidos. Adem&aacute;s tambi&eacute;n se produce por descartes de paquetes que no llegan a tiempo al receptor.";
 answers[94] = choices[94][2];
 units[94] = "108, 109";
 comments[94] = "Id Pregunta: 10909. Examen GSI 2014";


//  Id pregunta: 10910 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  La tecnolog&iacute;a de telefon&iacute;a m&oacute;vil GSM utiliza, entre otras, la siguiente base de datos de usuarios:";
 choices[95]= new Array();
 choices[95][0] = "MSC";
 choices[95][1] = "BSC";
 choices[95][2] = "NSS";
 choices[95][3] = "VLR";
 answers[95] = choices[95][3];
 units[95] = "108";
 comments[95] = "Id Pregunta: 10910. Examen GSI 2014";


//  Id pregunta: 10919 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Si se quiere interconectar mediante fibra &oacute;ptica dos dispositivos separados a menos de 100 metros en un CPD a una velocidad de 40Gb/s, la categor&iacute;a m&iacute;nima de fibra &oacute;ptica a usar deber&iacute;a ser:";
 choices[96]= new Array();
 choices[96][0] = "OM2";
 choices[96][1] = "OM3";
 choices[96][2] = "OM4";
 choices[96][3] = "OM5";
 answers[96] = choices[96][2];
 units[96] = "103, 107";
 comments[96] = "Id Pregunta: 10919. Examen GSI 2014";


//  Id pregunta: 11183 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;En qu&eacute; banda transmite UMTS?";
 choices[97]= new Array();
 choices[97][0] = "1.9-2.1 GHz";
 choices[97][1] = "2.4 GHz";
 choices[97][2] = "5 GHz";
 choices[97][3] = "10-66 GHz";
 answers[97] = choices[97][0];
 units[97] = "108";
 comments[97] = "Id Pregunta: 11183. ";


//  Id pregunta: 11576 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Indique la respuesta FALSA sobre la tecnolog&iacute;a HSDPA.";
 choices[98]= new Array();
 choices[98][0] = "Utiliza t&eacute;cnicas de redundancia incremental durante la transmisi&oacute;n de tramas.";
 choices[98][1] = "Incorpora una mejora del enlace ascendente de UMTS de manera que permite disponer de una nueva portadora a 384 Kbps.";
 choices[98][2] = "Utiliza FAST PACKET SCHEDULING, con el cual las estaci&oacute;n base decide a qu&eacute; usuarios se les enviar&aacute; datso en el siguiente marco de 4 ms.";
 choices[98][3] = "Mantiene la compatibilidad en sentido inverso con W-CDMA.";
 answers[98] = choices[98][2];
 units[98] = "108";
 comments[98] = "Id Pregunta: 11576. NULL";


//  Id pregunta: 11675 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Se&ntilde;ale la tecnolog&iacute;a que no hace uso de MIMO:";
 choices[99]= new Array();
 choices[99][0] = "HSPA+";
 choices[99][1] = "WiFi";
 choices[99][2] = "WiMAX";
 choices[99][3] = "Las 3 hacen uso de MIMO";
 answers[99] = choices[99][3];
 units[99] = "107, 108";
 comments[99] = "Id Pregunta: 11675. ";


