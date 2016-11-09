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

//  Id pregunta: 1071 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  En cu&aacute;l de las siguientes tecnolog&iacute;as es l&iacute;der Europa:";
 choices[0]= new Array();
 choices[0][0] = "Asimilaci&oacute;n de Internet.";
 choices[0][1] = "Hardware de comunicaciones.";
 choices[0][2] = "Comunicaciones m&oacute;viles.";
 choices[0][3] = "Software de comunicaciones.";
 answers[0] = choices[0][2];
 units[0] = "108";
 comments[0] = "Id Pregunta: 1071. ";


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


//  Id pregunta: 2922 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  &iquest;Cu&aacute;l es el est&aacute;ndar de WLAN que permite transmitir a una velocidad efectiva de entre 12 y 24 Mbps y a una velocidad m&aacute;xima de 54 Mbps?";
 choices[2]= new Array();
 choices[2][0] = "IEEE 802.11a";
 choices[2][1] = "IEEE 802.11b";
 choices[2][2] = "IEEE 802.11g";
 choices[2][3] = "IEEE 802.11i";
 answers[2] = choices[2][2];
 units[2] = "101, 107";
 comments[2] = "Id Pregunta: 2922. Similar a examen TIC SS A 2003";


//  Id pregunta: 2959 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  LMDS";
 choices[3]= new Array();
 choices[3][0] = "Usa el ancho de banda de forma sim&eacute;trica para los canales de subida y bajada";
 choices[3][1] = "Utiliza para transmitir una frecuencia de 10 Gz";
 choices[3][2] = "Reserva un ancho de banda de 3,1 Gz";
 choices[3][3] = "Ofrece un servicio de bucle local a los usuarios";
 answers[3] = choices[3][3];
 units[3] = "107";
 comments[3] = "Id Pregunta: 2959. Tanenbaum";


//  Id pregunta: 2966 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  Indique a qu&eacute; velocidad aproximada dentro de la Jerarqu&iacute;a Digital S&iacute;ncrona corresponde a un contenedor OC-3 de la Jerarqu&iacute;a SONET:";
 choices[4]= new Array();
 choices[4][0] = "52 Mbps";
 choices[4][1] = "155 Mbps";
 choices[4][2] = "384 Mpbs";
 choices[4][3] = "Ninguno de los anteriores";
 answers[4] = choices[4][1];
 units[4] = "109";
 comments[4] = "Id Pregunta: 2966. ";


//  Id pregunta: 2990 AÃ±o de creación de pregunta: 2004-01-01
 questions[5]= "6)  Indicar cu&aacute;l de las siguientes afirmaciones sobre el estandar GPRS no es correcta";
 choices[5]= new Array();
 choices[5][0] = "La tarificaci&oacute;n es por la cantidad de tr&aacute;fico transmitido y por calidades de servicio";
 choices[5][1] = "Se asigna un canal por usuario que permanecer&aacute; asignado aunque no se envien datos";
 choices[5][2] = "La voz y los datos se multiplexan, permitiendo su envio y recepci&oacute;n simultaneamente";
 choices[5][3] = "La velocidad de conexi&oacute;n puede llegar a los 50kbps";
 answers[5] = choices[5][1];
 units[5] = "108";
 comments[5] = "Id Pregunta: 2990. ";


//  Id pregunta: 3100 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Correo electr&oacute;nico, compartici&oacute;n de documentos FTP y/o WWW, directorio, agenda, listas de tareas&hellip; Todos ellos son:";
 choices[6]= new Array();
 choices[6][0] = "herramientas groupware s&iacute;ncronas";
 choices[6][1] = "protocolos y aplicaciones TCP/IP";
 choices[6][2] = "herramientas groupware as&iacute;ncronas";
 choices[6][3] = "aplicaciones ofim&aacute;ticas instaladas por defecto en cualquier PDA";
 answers[6] = choices[6][2];
 units[6] = "107";
 comments[6] = "Id Pregunta: 3100. NULL";


//  Id pregunta: 3198 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  DVB/DAVIC y DOCSIS son est&aacute;ndares de:";
 choices[7]= new Array();
 choices[7][0] = "tecnolog&iacute;a inal&aacute;mbrica";
 choices[7][1] = "m&oacute;dems de cable";
 choices[7][2] = "tecnolog&iacute;a xDSL";
 choices[7][3] = "grabaci&oacute;n cd CDROMs";
 answers[7] = choices[7][1];
 units[7] = "105";
 comments[7] = "Id Pregunta: 3198. ";


//  Id pregunta: 3199 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  EDGE responde por:";
 choices[8]= new Array();
 choices[8][0] = "Enhanced Data for GPRS Evolution";
 choices[8][1] = "Extended Data for GSM Enhancement";
 choices[8][2] = "Enhanced Data for GSM Evolution";
 choices[8][3] = "Extended Data for GPRS Enhancement";
 answers[8] = choices[8][2];
 units[8] = "108";
 comments[8] = "Id Pregunta: 3199. ";


//  Id pregunta: 3264 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;En cu&aacute;l de los siguientes casos no recomendar&iacute;a utilizar una red VSAT?:";
 choices[9]= new Array();
 choices[9][0] = "En Redes de Area Extensa (WAN)";
 choices[9][1] = "En organizaci&oacute;n muy dispersa en la que s&oacute;lo es necesario realizar actualizaciones peri&oacute;dicas de informaci&oacute;n";
 choices[9][2] = "En entorno transaccional fuerte";
 choices[9][3] = "En organizaciones con oficinas en lugares remotos sin posibilidad de acceso al servicio telef&oacute;nico";
 answers[9] = choices[9][2];
 units[9] = "107";
 comments[9] = "Id Pregunta: 3264. VSAT presenta velocidades del orden de 56 a 64 Kbps, no recomendable para grandes vol&uacute;menes de transmisi&oacute;n de datos.";


//  Id pregunta: 3308 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Qu&eacute; relaci&oacute;n hay entre Jerarqu&iacute;a Digital S&iacute;ncrona y ATM?:";
 choices[10]= new Array();
 choices[10][0] = "Son dos est&aacute;ndares correspondientes al mismo nivel ISO-OSI, por lo que la decisi&oacute;n entre uno y otro es alternativa";
 choices[10][1] = "Las celdas ATM suelen viajar 'embebidas' en tramas JDS";
 choices[10][2] = "Las tramas JDS suelen viajar embebidas en tramas ATM";
 choices[10][3] = "ATM y JDS son dos nombres distintos para el mismo est&aacute;ndar";
 answers[10] = choices[10][1];
 units[10] = "109";
 comments[10] = "Id Pregunta: 3308. ";


//  Id pregunta: 3310 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Qu&eacute; se entiende por 'modem de cable'?:";
 choices[11]= new Array();
 choices[11][0] = "A un cable inversor utilizado para la conexi&oacute;n entre dos dispositivos por el puerto serie";
 choices[11][1] = "A un cable utilizado para unir dos PCs por el puerto paralelo";
 choices[11][2] = "A un dispositivo que permite la transmisi&oacute;n de datos a alta velocidad a trav&eacute;s de una red de cable";
 choices[11][3] = "A un modem que no necesita fuente de alimentaci&oacute;n y que es del tama&ntilde;o de una 'caja de cerillas' que pr&aacute;cticamente que embutido en un cable";
 answers[11] = choices[11][2];
 units[11] = "105";
 comments[11] = "Id Pregunta: 3310. ";


//  Id pregunta: 3361 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  De SDH y SONET podemos decir:";
 choices[12]= new Array();
 choices[12][0] = "son en realidad lo mismo pero con diferente denominaci&oacute;n en Norteam&eacute;rica y Europa";
 choices[12][1] = "son distintos en la disposici&oacute;n de los contenedores virtuales pero todas sus tasas de transmisi&oacute;n coinciden";
 choices[12][2] = "son compatibles en conjunto, adaptando las velocidades de diferentes niveles de capacidad";
 choices[12][3] = "son jerarqu&iacute;as de transmisi&oacute;n digital totalmente distintas e incompatibles entre s&iacute;";
 answers[12] = choices[12][2];
 units[12] = "109";
 comments[12] = "Id Pregunta: 3361. ";


//  Id pregunta: 3379 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  El interfaz A-bis en GSM es el que va entre:";
 choices[13]= new Array();
 choices[13][0] = "BTS y BSC";
 choices[13][1] = "MSC y HLR";
 choices[13][2] = "HLR y VLR";
 choices[13][3] = "BSC y MSC";
 answers[13] = choices[13][0];
 units[13] = "108";
 comments[13] = "Id Pregunta: 3379. ";


//  Id pregunta: 3395 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  El nivel fisico denominados 802.11a se conoce como:";
 choices[14]= new Array();
 choices[14][0] = "High Rate Sequence HR/DS PHY";
 choices[14][1] = "High Rate Sequence HR/DSSS PHY";
 choices[14][2] = "Orthogonal Frequency Division Multiplexing";
 choices[14][3] = "IR/PHY";
 answers[14] = choices[14][2];
 units[14] = "101,107";
 comments[14] = "Id Pregunta: 3395. ";


//  Id pregunta: 3401 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  El PMD:";
 choices[15]= new Array();
 choices[15][0] = "Es el acr&oacute;nimo de Physical Medium Dependent";
 choices[15][1] = "Pertenece al Nivel 2 de 802.11";
 choices[15][2] = "Es la uni&oacute;n entre MAC y PLCP";
 choices[15][3] = "Todas las anteriores respuestas son correctas";
 answers[15] = choices[15][0];
 units[15] = "109";
 comments[15] = "Id Pregunta: 3401. ";


//  Id pregunta: 3463 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  El protocolo utilizado para la comunicaci&oacute;n entre los nodos de una red GSM (MSC, HLR, VLR, ...) es el:";
 choices[16]= new Array();
 choices[16][0] = "ISUP";
 choices[16][1] = "MAP";
 choices[16][2] = "INAP";
 choices[16][3] = "RCP";
 answers[16] = choices[16][1];
 units[16] = "108";
 comments[16] = "Id Pregunta: 3463. ";


//  Id pregunta: 3484 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  El uso de la red de energ&iacute;a el&eacute;ctrica como una red de transmisi&oacute;n telem&aacute;tica de voz y datos es la tecnolog&iacute;a:";
 choices[17]= new Array();
 choices[17][0] = "LCC";
 choices[17][1] = "PCC";
 choices[17][2] = "LLC";
 choices[17][3] = "PLC";
 answers[17] = choices[17][3];
 units[17] = "107";
 comments[17] = "Id Pregunta: 3484. NULL";


//  Id pregunta: 3495 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  En el entorno de las redes inal&aacute;mbricas se denomina &quot;hot-spot&quot;:";
 choices[18]= new Array();
 choices[18][0] = "A la zona de cobertura con mayor demanda de tr&aacute;fico";
 choices[18][1] = "A los emplazamientos con cobertura WiFi";
 choices[18][2] = "A zonas de cobertura con potenciales problemas de interferencias";
 choices[18][3] = "A las zonas de sombra";
 answers[18] = choices[18][1];
 units[18] = "107";
 comments[18] = "Id Pregunta: 3495. NULL";


//  Id pregunta: 3516 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  En el servicio de telefon&iacute;a celular se utiliza el concepto de celda indicando:";
 choices[19]= new Array();
 choices[19][0] = "Zona de cobertura del terminal";
 choices[19][1] = "Distancia m&aacute;xima del terminal a la estaci&oacute;n repetidora";
 choices[19][2] = "Distancia m&iacute;nima entre estaciones repetidoras";
 choices[19][3] = "Zona de cobertura de una estaci&oacute;n base";
 answers[19] = choices[19][3];
 units[19] = "108";
 comments[19] = "Id Pregunta: 3516. ";


//  Id pregunta: 3533 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  En las necesidades para establecer una aplicaci&oacute;n de videoconferencia, es falso que se requiera:";
 choices[20]= new Array();
 choices[20][0] = "una compresi&oacute;n / descompresi&oacute;n en tiempo real";
 choices[20][1] = "unos l&iacute;mites m&iacute;nimos y m&aacute;ximos para el retardo de comunicaci&oacute;n";
 choices[20][2] = "una sincronizaci&oacute;n de audio y de video";
 choices[20][3] = "un protocolo de se&ntilde;alizaci&oacute;n";
 answers[20] = choices[20][1];
 units[20] = "117";
 comments[20] = "Id Pregunta: 3533. ";


//  Id pregunta: 3538 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  En LMDS las t&eacute;cnicas com&uacute;nmente usadas para la reutilizaci&oacute;n de frecuencias son:";
 choices[21]= new Array();
 choices[21][0] = "Minimizar la direccionalidad de las antenas de las celdas";
 choices[21][1] = "Maximizar el aislamiento entre sectores adyacentes a trav&eacute;s de la polarizaci&oacute;n";
 choices[21][2] = "Aumentar el tama&ntilde;o de celda";
 choices[21][3] = "Ninguna de las anteriores";
 answers[21] = choices[21][1];
 units[21] = "108";
 comments[21] = "Id Pregunta: 3538. ";


//  Id pregunta: 3553 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  En sistemas de informaci&oacute;n y comunicaciones, MAP es el acr&oacute;nimo de:";
 choices[22]= new Array();
 choices[22][0] = "Multimedia application Protocol";
 choices[22][1] = "Mediagateway Advanced Protocol";
 choices[22][2] = "Medium Access Protocol";
 choices[22][3] = "Mobile Application Part";
 answers[22] = choices[22][3];
 units[22] = "108";
 comments[22] = "Id Pregunta: 3553. ";


//  Id pregunta: 3590 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  La capa de adaptaci&oacute;n de ATM se encarga de:";
 choices[23]= new Array();
 choices[23][0] = "Establecer y liberar los circuitos virtuales";
 choices[23][1] = "Segmentar y reenviar los paquetes mayores de una celda";
 choices[23][2] = "Generar y extraer las cabeceras de las celdas";
 choices[23][3] = "Define las caracter&iacute;sticas f&iacute;sicas del medio de transmisi&oacute;n";
 answers[23] = choices[23][1];
 units[23] = "109";
 comments[23] = "Id Pregunta: 3590. ";


//  Id pregunta: 3625 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  La normativa referente a la Red Digital de Servicios Integrados para el uso por el usuario de los canales de 64 kbps, &iquest;a qu&eacute; nivel del modelo de referencia OSI corresponder&iacute;a?:";
 choices[24]= new Array();
 choices[24][0] = "Al nivel 8 : Administraci&oacute;n";
 choices[24][1] = "Al nivel 1 : F&iacute;sico";
 choices[24][2] = "Al nivel 3 : Red";
 choices[24][3] = "Al nivel 5 : Enlace";
 answers[24] = choices[24][1];
 units[24] = "102,104,109";
 comments[24] = "Id Pregunta: 3625. ";


//  Id pregunta: 3632 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  La primera empresa que propuso el uso de t&eacute;cnicas CDMA fue:";
 choices[25]= new Array();
 choices[25][0] = "AT&amp;T";
 choices[25][1] = "Qualcomm";
 choices[25][2] = "Motorola";
 choices[25][3] = "RCA";
 answers[25] = choices[25][1];
 units[25] = "108";
 comments[25] = "Id Pregunta: 3632. ";


//  Id pregunta: 3671 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  Una de las siguientes afirmaciones es falsa con respecto a ADSL:";
 choices[26]= new Array();
 choices[26][0] = "El caudal de informaci&oacute;n es mayor en sentido red-usuario que en el sentido contrario";
 choices[26][1] = "La tarificaci&oacute;n no depende del uso sino del ancho de banda contratado";
 choices[26][2] = "Permite navegar por Internet y mantener una conversaci&oacute;n telef&oacute;nica simult&aacute;neamente";
 choices[26][3] = "Hay que hacer un nuevo tendido de cobre entre la central y el domicilio del abonado para poder instalarlo";
 answers[26] = choices[26][3];
 units[26] = "107";
 comments[26] = "Id Pregunta: 3671. NULL";


//  Id pregunta: 3706 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  Las t&eacute;cnica de acceso utilizada por el segmento de radio terrestre en UMTS es:";
 choices[27]= new Array();
 choices[27][0] = "FDMA";
 choices[27][1] = "TDMA";
 choices[27][2] = "CDMA";
 choices[27][3] = "WCDMA";
 answers[27] = choices[27][3];
 units[27] = "108";
 comments[27] = "Id Pregunta: 3706. ";


//  Id pregunta: 3717 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  Los conceptos de &quot;piconet&quot; y &quot;scatternet&quot; forman parte de la arquitectura de red utilizada con tecnolog&iacute;a:";
 choices[28]= new Array();
 choices[28][0] = "IrDA";
 choices[28][1] = "DECT";
 choices[28][2] = "Bluetooth";
 choices[28][3] = "WLAN";
 answers[28] = choices[28][2];
 units[28] = "107";
 comments[28] = "Id Pregunta: 3717. NULL";


//  Id pregunta: 3749 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  Mediante la tecnolog&iacute;a EDGE se pueden llegar a conseguir velocidades de:";
 choices[29]= new Array();
 choices[29][0] = "384 kbps";
 choices[29][1] = "2 Mbps";
 choices[29][2] = "115 kbps";
 choices[29][3] = "1544 kbps";
 answers[29] = choices[29][0];
 units[29] = "108";
 comments[29] = "Id Pregunta: 3749. ";


//  Id pregunta: 3778 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  Radius permite autentificaci&oacute;n:";
 choices[30]= new Array();
 choices[30][0] = "S&oacute;lo mediante PAP";
 choices[30][1] = "S&oacute;lo mediante CHAP";
 choices[30][2] = "S&oacute;lo para dispositivos fijos";
 choices[30][3] = "Ninguna de las anteriores";
 answers[30] = choices[30][3];
 units[30] = "107";
 comments[30] = "Id Pregunta: 3778. NULL";


//  Id pregunta: 3848 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  Uno de los siguientes no es un inconveniente de la telefon&iacute;a sobre IP. Indicar cu&aacute;l:";
 choices[31]= new Array();
 choices[31][0] = "degradaci&oacute;n de la calidad";
 choices[31][1] = "supresi&oacute;n de silencios";
 choices[31][2] = "falta actual de infraestructuras para soportar todo el tr&aacute;fico previsto";
 choices[31][3] = "problemas de ecos con los retardos";
 answers[31] = choices[31][1];
 units[31] = "108";
 comments[31] = "Id Pregunta: 3848. ";


//  Id pregunta: 3855 AÃ±o de creación de pregunta: 2003-01-01
 questions[32]= "33)  Dentro de las Frecuencias de sat&eacute;lite de uso comercial  se encuentra la banda Ku(BSS) que tiene como aplicaci&oacute;n:";
 choices[32]= new Array();
 choices[32][0] = "Datos y TV a altas velocidades ";
 choices[32][1] = "Radiodifusi&oacute;n de televisi&oacute;n por sat&eacute;lite.";
 choices[32][2] = "VSAT, video e Internet ";
 choices[32][3] = "Datos, voz y video ";
 answers[32] = choices[32][1];
 units[32] = "108";
 comments[32] = "Id Pregunta: 3855. ";


//  Id pregunta: 3880 AÃ±o de creación de pregunta: 2003-01-01
 questions[33]= "34)  &iquest;Cu&aacute;les de las siguientes tecnolog&iacute;as de acceso al medio se utiliza en UMTS?";
 choices[33]= new Array();
 choices[33][0] = "TDMA ";
 choices[33][1] = "FDMA";
 choices[33][2] = "CDMA";
 choices[33][3] = "Puede usar aualquiera de las tres anteriores";
 answers[33] = choices[33][2];
 units[33] = "108";
 comments[33] = "Id Pregunta: 3880. ";


//  Id pregunta: 3996 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  En las redes HFC (Hybrid Fiber Coaxial), la transmisi&oacute;n  de informaci&oacute;n desde el usuario hacia la cabecera se realiza dedicando una parte del espectro, en concreto utilizando el rango de frecuencias comprendido entre:";
 choices[34]= new Array();
 choices[34][0] = "50-100 Mhz (aproximadamente)";
 choices[34][1] = "200-300 Mhz (aproximadamente)";
 choices[34][2] = "5-50 Mhz (aproximadamente)";
 choices[34][3] = "100-200 Mhz (aproximadamente)";
 answers[34] = choices[34][2];
 units[34] = "105";
 comments[34] = "Id Pregunta: 3996. ";


//  Id pregunta: 3998 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  En relaci&oacute;n con las redes de distribuci&oacute;n HFC, se&ntilde;ale qu&eacute; afirmaci&oacute;n no es correcta:";
 choices[35]= new Array();
 choices[35][0] = "Los amplificadores de l&iacute;nea (Line Extender) son componentes activos.";
 choices[35][1] = "Los taps son componentes pasivos.";
 choices[35][2] = "Los amplificadores de l&iacute;nea (Line Extender), en sentido ascendente, utilizan configuraciones de amplificaci&oacute;n en paralelo denominadas &ldquo;power dubbing&rdquo; o &ldquo;feed forward&rdquo;.";
 choices[35][3] = "Los taps derivan parte de la energ&iacute;a que circula por el coaxial hacia las terminaciones donde se conectan las acometidas de usuario.";
 answers[35] = choices[35][2];
 units[35] = "105";
 comments[35] = "Id Pregunta: 3998. ";


//  Id pregunta: 4002 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  &iquest;Cu&aacute;l es el n&uacute;mero aproximado de usuarios a los que da servicio cada ONT (&quot;Optical Network Termination&quot;) en una red de cable?";
 choices[36]= new Array();
 choices[36][0] = "50";
 choices[36][1] = "500";
 choices[36][2] = "5.000";
 choices[36][3] = "50.000";
 answers[36] = choices[36][1];
 units[36] = "105";
 comments[36] = "Id Pregunta: 4002. ";


//  Id pregunta: 4003 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  &iquest;Cu&aacute;l es el significado del acr&oacute;nimo DOCSIS?";
 choices[37]= new Array();
 choices[37][0] = "Data Over Coaxial Service Interface Specification";
 choices[37][1] = "Data Over Cable Service Internet Specification";
 choices[37][2] = "Data Over Coaxial Service Internet Specification";
 choices[37][3] = "Data Over Cable Service Interface Specification";
 answers[37] = choices[37][3];
 units[37] = "105";
 comments[37] = "Id Pregunta: 4003. ";


//  Id pregunta: 4012 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  Con respecto a la tecnolog&iacute;a VDSL, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[38]= new Array();
 choices[38][0] = "El VDSL asim&eacute;trico permite alcanzar un caudal de hasta 52 Mbit/s en sentido descendente y 6,4 Mbit/s en sentido ascendente.";
 choices[38][1] = "El VDSL asim&eacute;trico permite alcanzar un caudal de hasta 54 Mbit/s en sentido descendente y 8,2 Mbit/s en sentido ascendente.";
 choices[38][2] = "El VDSL sim&eacute;trico permite alcanzar un caudal de hasta 30 Mbit/s.";
 choices[38][3] = "El VDSL sim&eacute;trico permite alcanzar un caudal de hasta 25 Mbit/s.";
 answers[38] = choices[38][0];
 units[38] = "107";
 comments[38] = "Id Pregunta: 4012. NULL";


//  Id pregunta: 4024 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  Ordene, de menor a mayor velocidad m&aacute;xima de transmisi&oacute;n de datos, las siguientes tecnolog&iacute;as de comunicaciones m&oacute;viles:";
 choices[39]= new Array();
 choices[39][0] = "HSCSD, GSM, GPRS, UMTS";
 choices[39][1] = "GSM. HSCSD, UMTS, GPRS";
 choices[39][2] = "GSM, HSCSD, GPRS, UMTS";
 choices[39][3] = "GSM, GPRS, HSCSD, UMTS";
 answers[39] = choices[39][2];
 units[39] = "108";
 comments[39] = "Id Pregunta: 4024. ";


//  Id pregunta: 4028 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  Respecto a Frame Relay, que es verdadero respecto al CIR";
 choices[40]= new Array();
 choices[40][0] = "Todos los PVC deben tener el mismo CIR";
 choices[40][1] = "Es la velocidad que la red se compromete a  servir como minimo";
 choices[40][2] = "Es el volumen de tr&aacute;fico adicional sobre el volumen alcanzable.";
 choices[40][3] = "Es la velocidad m&aacute;xima de acceso a la red.";
 answers[40] = choices[40][1];
 units[40] = "109";
 comments[40] = "Id Pregunta: 4028. ";


//  Id pregunta: 4036 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  ATM permite ofrecer servicios con una determinada calidad (QoS). &iquest;Cu&aacute;l es el par&aacute;metro de QoS que se usa para denominar la variaci&oacute;n del retardo pico a pico o &quot;jitter&quot;?";
 choices[41]= new Array();
 choices[41][0] = "CLR";
 choices[41][1] = "CDV";
 choices[41][2] = "CTD";
 choices[41][3] = "CER";
 answers[41] = choices[41][1];
 units[41] = "109";
 comments[41] = "Id Pregunta: 4036. ";


//  Id pregunta: 4153 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  Especificaci&oacute;n industrial que describe como m&oacute;viles, ordenadores y PDAs pueden interconectarse entre s&iacute; usando una conexi&oacute;n inal&aacute;mbrica de corta distancia";
 choices[42]= new Array();
 choices[42][0] = "Bluetooth";
 choices[42][1] = "EMI";
 choices[42][2] = "Wimax";
 choices[42][3] = "IrDA";
 answers[42] = choices[42][0];
 units[42] = "107";
 comments[42] = "Id Pregunta: 4153. NULL";


//  Id pregunta: 4167 AÃ±o de creación de pregunta: 2006-01-01
 questions[43]= "44)  Las comunicaciones satelite son f&aacute;cilmente interceptables porque";
 choices[43]= new Array();
 choices[43][0] = "las transmisiones son continuas 24 horas al d&iacute;a";
 choices[43][1] = "la huella del sat&eacute;lite no cambia";
 choices[43][2] = "la huella del sat&eacute;lite es muy amplia";
 choices[43][3] = "la posici&oacute;n del sat&eacute;lite es conocida";
 answers[43] = choices[43][2];
 units[43] = "105";
 comments[43] = "Id Pregunta: 4167. ";


//  Id pregunta: 4169 AÃ±o de creación de pregunta: 2006-01-01
 questions[44]= "45)  La principal raz&oacute;n para el desarrollo de circuitos privados de televisi&oacute;n (CCTV) como parte del programa de seguridad f&iacute;sica es";
 choices[44]= new Array();
 choices[44][0] = "Obtener pruebas para el enjuiciamiento";
 choices[44][1] = "Detener a los culpables";
 choices[44][2] = "Evitar la actividad ilegal";
 choices[44][3] = "Aumentar la visibilidad del guarda";
 answers[44] = choices[44][3];
 units[44] = "105";
 comments[44] = "Id Pregunta: 4169. ";


//  Id pregunta: 4234 AÃ±o de creación de pregunta: 2006-01-01
 questions[45]= "46)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre GPRS no es v&aacute;lida?";
 choices[45]= new Array();
 choices[45][0] = "Las velocidades de conexi&oacute;n pueden llegar hasta 192 Kbps";
 choices[45][1] = "Los usuarios permanecen conectados aunque no reciban o envien datos";
 choices[45][2] = "Se pueden realizar o recibir llamadas de voz mientras se est&aacute; conectado";
 choices[45][3] = "La tarificaci&oacute;n es por el volumen de datos transferidos";
 answers[45] = choices[45][0];
 units[45] = "108";
 comments[45] = "Id Pregunta: 4234. ";


//  Id pregunta: 4435 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  En relaci&oacute;n con las diferencias entre Wi-fi y Wi-MAX, se&ntilde;ale cu&aacute;l de las siguientes afirmaciones no es correcta:";
 choices[46]= new Array();
 choices[46][0] = "El control y gesti&oacute;n de errores debe ser m&aacute;s importante en Wimax por ser m&aacute;s sensible el rango de frecuencias en que trabaja.";
 choices[46][1] = "Wimax est&aacute; dise&ntilde;ado para transporte de tr&aacute;fico multimedia mientras que Wi-fi, si bien podr&iacute;a soportarlo, no fue espec&iacute;ficamente dise&ntilde;ado para ello.";
 choices[46][2] = "Las frecuencias disponibles para Wimax est&aacute; en valores del espectro mayores que las disponibles para Wifi.";
 choices[46][3] = "Wimax fue inicialmente dise&ntilde;ado para conexiones inal&aacute;mbricas estacionarios mientras que Wifi est&aacute; dise&ntilde;ado para Ethernet m&oacute;vil.";
 answers[46] = choices[46][1];
 units[46] = "107";
 comments[46] = "Id Pregunta: 4435. NULL";


//  Id pregunta: 4550 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  El Sistema de Comunicaciones Moviles Europeo de Tercera Generacion recibe el nombre de:";
 choices[47]= new Array();
 choices[47][0] = "UMTS";
 choices[47][1] = "EDGE";
 choices[47][2] = "DCS-1800.";
 choices[47][3] = "PHS";
 answers[47] = choices[47][0];
 units[47] = "108";
 comments[47] = "Id Pregunta: 4550. ";


//  Id pregunta: 4586 AÃ±o de creación de pregunta: 2007-01-01
 questions[48]= "49)  Las siglas HSDPA corresponden a:";
 choices[48]= new Array();
 choices[48][0] = "High-Speed Dynamic Packet Access";
 choices[48][1] = "High-Speed Downlink Packet Access";
 choices[48][2] = "High-Speed Data Packet Access";
 choices[48][3] = "Ninguna de las anteriores";
 answers[48] = choices[48][1];
 units[48] = "108";
 comments[48] = "Id Pregunta: 4586. ";


//  Id pregunta: 4597 AÃ±o de creación de pregunta: 2007-01-01
 questions[49]= "50)  En Ia tecnolog&iacute;a ATM qu&eacute; tipo de protocolo utilizar&iacute;a en la capa de adaptaci&oacute;n al medio si estamos trabajando en modo orientado a conexi&oacute;n y con una tasa de bits constante:";
 choices[49]= new Array();
 choices[49][0] = "Tipo 1";
 choices[49][1] = "Tipo 2";
 choices[49][2] = "Tipo 3/4";
 choices[49][3] = "Tipo 5";
 answers[49] = choices[49][0];
 units[49] = "109";
 comments[49] = "Id Pregunta: 4597. ";


//  Id pregunta: 4665 AÃ±o de creación de pregunta: 2009-01-01
 questions[50]= "51)  HSDPA (High Speed Download Packet Access) no cumple que:";
 choices[50]= new Array();
 choices[50][0] = "Es compatible en sentido inverso con W-CDMA.";
 choices[50][1] = "Utiliza t&eacute;cnicas de redundancia incremental en la retransmisi&oacute;n de tramas.";
 choices[50][2] = "Emplea Fast Packet Scheduling, con el cual la estaci&oacute;n base decide a qu&eacute; usuarios se les enviar&aacute; datos en el siguiente marco de 2 ms.";
 choices[50][3] = "Su velocidad pico para un usuario es de 1 Mbps.";
 answers[50] = choices[50][3];
 units[50] = "108";
 comments[50] = "Id Pregunta: 4665. ";


//  Id pregunta: 4753 AÃ±o de creación de pregunta: 2009-01-01
 questions[51]= "52)  En UMTS R99 o R3, la interfaz entre la UTRAN y el SGSN se establece sobre:";
 choices[51]= new Array();
 choices[51][0] = "Frame Relay";
 choices[51][1] = " ATM";
 choices[51][2] = "VPLS";
 choices[51][3] = "Cualquiera";
 answers[51] = choices[51][1];
 units[51] = "108";
 comments[51] = "Id Pregunta: 4753. ";


//  Id pregunta: 5165 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  La Tecnolog&iacute;a empleada por la Televisi&oacute;n Digital Terrestre (TDT) permite que el despliegue de las redes de radiodifusi&oacute;n se efect&uacute;e:";
 choices[52]= new Array();
 choices[52][0] = "En redes de Frecuencia &Uacute;nica (SFN) y en redes Multifrecuencia (MFN).";
 choices[52][1] = "&Uacute;nicamente en redes de Frecuencia &Uacute;nica (SFN).";
 choices[52][2] = "&Uacute;nicamente en redes Multifrecuencia (MFN).";
 choices[52][3] = "En redes de Frecuencia (SFN) sin necesidad de sincronizar los transmisores radio.";
 answers[52] = choices[52][0];
 units[52] = "105";
 comments[52] = "Id Pregunta: 5165. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5304 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  El protocolo Frame Relay:";
 choices[53]= new Array();
 choices[53][0] = "Es no orientado a conexi&oacute;n";
 choices[53][1] = "Sus tramas tienen tama&ntilde;o fijo de 1024B";
 choices[53][2] = "S&oacute;lo permite Circuitos Virtuales Permanentes y no conmutados";
 choices[53][3] = "Es orientado a conexi&oacute;n";
 answers[53] = choices[53][3];
 units[53] = "109";
 comments[53] = "Id Pregunta: 5304. ";


//  Id pregunta: 5787 AÃ±o de creación de pregunta: 2009-01-01
 questions[54]= "55)  UMTS en su est&aacute;ndar contempla como posibilidades para transmisi&oacute;n d&uacute;plex:";
 choices[54]= new Array();
 choices[54][0] = "CMDA o TDMA";
 choices[54][1] = "FDD o TDD";
 choices[54][2] = "FDMA u OFDMA";
 choices[54][3] = "TCDMA";
 answers[54] = choices[54][1];
 units[54] = "108";
 comments[54] = "Id Pregunta: 5787. ";


//  Id pregunta: 5877 AÃ±o de creación de pregunta: 2009-01-01
 questions[55]= "56)  &iquest;Cu&aacute;l de las siguientes afirmaciones es CIERTA para los sistemas de comunicaciones m&oacute;viles?:";
 choices[55]= new Array();
 choices[55][0] = "La implementaci&oacute;n de Clase 1 de WTLS para WAP proporciona autenticaci&oacute;n terminal-servidor";
 choices[55][1] = "Con WTLS la negociaci&oacute;n de los datagramas se hace mediante UDP";
 choices[55][2] = "WTLS no admite la utilizaci&oacute;n de algoritmos criptogr&aacute;ficos basados en curvas el&iacute;pticas";
 choices[55][3] = "WML es el lenguaje de navegaci&oacute;n para terminales m&oacute;viles WAP";
 answers[55] = choices[55][3];
 units[55] = "108";
 comments[55] = "Id Pregunta: 5877. MAP 2008 A1";


//  Id pregunta: 6072 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  Seg&uacute;n la normativa de ICT (Infraestructuras Comunes de Telecomunicaci&oacute;n), todo edificio de nueva construcci&oacute;n debe contar con un proyecto t&eacute;cnico que prevea la conexi&oacute;n a los puntos de conexi&oacute;n de las viviendas o locales de:";
 choices[56]= new Array();
 choices[56][0] = "Las se&ntilde;ales de radiodifusi&oacute;n sonora y televisi&oacute;n terrenales";
 choices[56][1] = "El servicio de telefon&iacute;a disponible al p&uacute;blico";
 choices[56][2] = "Los servicios de telecomunicaciones de banda ancha";
 choices[56][3] = "Todas las anteriores son correctas";
 answers[56] = choices[56][3];
 units[56] = "105";
 comments[56] = "Id Pregunta: 6072. ";


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


//  Id pregunta: 6141 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  &iquest;Qu&eacute; es el MOS (Mean Opinion Score)?";
 choices[58]= new Array();
 choices[58][0] = "Es una medida subjetiva de calidad de sonido, que se suele utilizar en sistemas de VoIP";
 choices[58][1] = "Es una de la pr&aacute;cticas que propone M&eacute;trica 3 para las reuniones de trabajo, junto con las reuniones, las entrevistas y el JAD (Joint Application Design)";
 choices[58][2] = "Es una t&eacute;cnica de estimaci&oacute;n de esfuerzo software, que se utiliza, por ejemplo, cuando no hay datos suficientes para estimar puntos funci&oacute;n";
 choices[58][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[58] = choices[58][0];
 units[58] = "100, 109";
 comments[58] = "Id Pregunta: 6141. ";


//  Id pregunta: 6164 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  Se&ntilde;ale la informaci&oacute;n falsa:";
 choices[59]= new Array();
 choices[59][0] = "La telepresencia es la evoluci&oacute;n de los servicios de videoconferencia que se acerca hacia la realidad virtual.";
 choices[59][1] = "En una sesi&oacute;n de videoconferencia es posible incorporar herramientas de colaboraci&oacute;n.";
 choices[59][2] = "En soluciones de videoconferencia accesibles desde el exterior es posible tunelizar las comunicaciones por el puerto http o de lo contrario tener en cuenta las consideraciones con los Firewall.";
 choices[59][3] = "Todas las anteriores son correctas.";
 answers[59] = choices[59][3];
 units[59] = "117";
 comments[59] = "Id Pregunta: 6164. ";


//  Id pregunta: 6563 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  GPRS no se caracteriza por";
 choices[60]= new Array();
 choices[60][0] = "Los paquetes se envian a intervalos de tiempo irregulares";
 choices[60][1] = "El nodo GGSN es el nodo pasarela que realiza la interfaz con las redes de datos externas";
 choices[60][2] = "No requiere gesti&oacute;n de movilidad";
 choices[60][3] = "Todas las respuestas anteriores son correctas";
 answers[60] = choices[60][2];
 units[60] = "108";
 comments[60] = "Id Pregunta: 6563. NULL";


//  Id pregunta: 6578 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  La telefon&iacute;a IP";
 choices[61]= new Array();
 choices[61][0] = "Combina datos, voz y video en un &uacute;nico paquete";
 choices[61][1] = "Separa la red de datos de la voz";
 choices[61][2] = "Los procesos utilizados no dependen del tiempo";
 choices[61][3] = "A y C son correctas";
 answers[61] = choices[61][0];
 units[61] = "117";
 comments[61] = "Id Pregunta: 6578. NULL";


//  Id pregunta: 7257 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  &iquest;Qu&eacute; dato es INCORRECTO relativo al dividendo digital espa&ntilde;ol?";
 choices[62]= new Array();
 choices[62][0] = "Consiste en las bandas de frecuencias que han sido empleadas para la difusi&oacute;n de la TDT";
 choices[62][1] = "Ocupa la banda de frecuencias de 790 a 862 MHz";
 choices[62][2] = "Se refiere a las frecuencias usadas para la difusi&oacute;n en anal&oacute;gico";
 choices[62][3] = "En el futuro, ser&aacute; utilizado para servicios diferentes al de la televisi&oacute;n";
 answers[62] = choices[62][2];
 units[62] = "105";
 comments[62] = "Id Pregunta: 7257. Examen TIC B 2009";


//  Id pregunta: 7773 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)   El protocolo utilizado para acceder a Internet desde cualquier dispositivo inal&aacute;mbrico haciendo uso del lenguaje WML (Wireless Markup Language) es:";
 choices[63]= new Array();
 choices[63][0] = " WEP.";
 choices[63][1] = " WPA.";
 choices[63][2] = " WAP.";
 choices[63][3] = " WTP.";
 answers[63] = choices[63][2];
 units[63] = "107";
 comments[63] = "Id Pregunta: 7773. Map 2005";


//  Id pregunta: 8175 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  Indique la Potencia a la entrada del receptor del sistema de telecomunicaciones compuesto de los siguientes elementos:- Una antena receptora a la que le llega una Potencia de entrada de 10exp-8 mW.- Un amplificador con ganancia G1 = 1000.- Una longitud de cable de 10m con atenuaci&oacute;n del mismo de 0&rsquo;3 dB/m.- Un amplificador con ganancia G2 = 100.- Un receptor.";
 choices[64]= new Array();
 choices[64][0] = "-63 dBW.";
 choices[64][1] = "+33 dBm.";
 choices[64][2] = "1exp-6 W.";
 choices[64][3] = "-53 dBm.";
 answers[64] = choices[64][0];
 units[64] = "107";
 comments[64] = "Id Pregunta: 8175. Examen TIC A1 2010";


//  Id pregunta: 8313 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  &iquest;Cu&aacute;l es el est&aacute;ndar correspondiente al m&eacute;todo de compresi&oacute;n ADPCM (Adaptative Differential Pulse Code Modulation) de la voz? ";
 choices[65]= new Array();
 choices[65][0] = "G.711.";
 choices[65][1] = "G.726.";
 choices[65][2] = "G.728. ";
 choices[65][3] = "G.729. ";
 answers[65] = choices[65][1];
 units[65] = "117";
 comments[65] = "Id Pregunta: 8313. Examen TIC A2 2010";


//  Id pregunta: 8316 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  En el &aacute;mbito de las tecnolog&iacute;as de comunicaciones m&oacute;viles, el orden cronol&oacute;gico de protocolos, de mayor a menor antig&uuml;edad es:";
 choices[66]= new Array();
 choices[66][0] = "GSM, UMTS, HSUPA, HSDPA.";
 choices[66][1] = "GSM, UMTS, HSDPA, HSUPA.";
 choices[66][2] = "GSM, HSUPA, HSDPA, UMTS. ";
 choices[66][3] = "UMTS, GSM, HSDPA, HSUPA.";
 answers[66] = choices[66][1];
 units[66] = "108";
 comments[66] = "Id Pregunta: 8316. Examen TIC A2 2010";


//  Id pregunta: 8318 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  &iquest;En qu&eacute; banda de frecuencias y hasta qu&eacute; velocidad funciona el est&aacute;ndar 802.11a? ";
 choices[67]= new Array();
 choices[67][0] = "2,4 GHz y hasta 11Mbps. ";
 choices[67][1] = "5 GHz y hasta 54Mbps. ";
 choices[67][2] = "2,4 GHz y hasta 54 Mbps. ";
 choices[67][3] = "5 GHz y hasta 11 Mbps.";
 answers[67] = choices[67][1];
 units[67] = "107";
 comments[67] = "Id Pregunta: 8318. Examen TIC A2 2010";


//  Id pregunta: 8526 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  En relaci&oacute;n con los mecanismos de seguridad en redes Wi-Fi, indique la afirmaci&oacute;n FALSA:";
 choices[68]= new Array();
 choices[68][0] = "Las especificaciones WEP y WPA usan RC4 como algoritmo de cifrado.";
 choices[68][1] = "La especificaci&oacute;n WPA2 mejora la segundad al usar AES como algoritmo de cifrado.";
 choices[68][2] = "En el est&aacute;ndar IEEE 802.11 i es donde se detalla la especificaci&oacute;n de WPA2.";
 choices[68][3] = "El est&aacute;ndar IEEE 802.11g incrementa la seguridad introduciendo 3DES como algoritmo de cifrado.";
 answers[68] = choices[68][3];
 units[68] = "107";
 comments[68] = "Id Pregunta: 8526. Examen TIC A2 2010 interna";


//  Id pregunta: 8660 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  La se&ntilde;ales de banda Ku, &iquest;en que rango de frecuencias trabajan?";
 choices[69]= new Array();
 choices[69][0] = "1-8 MHz";
 choices[69][1] = "4-8 GHz";
 choices[69][2] = "12-18 GHz";
 choices[69][3] = "4-8 MHz";
 answers[69] = choices[69][2];
 units[69] = "108";
 comments[69] = "Id Pregunta: 8660. Examen UPM A2 2011";


//  Id pregunta: 8663 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  En la tecnolog&iacute;a VDSL, &iquest;cu&aacute;ntos canales se utilizan para la transmisi&oacute;n de los datos?";
 choices[70]= new Array();
 choices[70][0] = "4 (2 de bajada y 2 para subida)";
 choices[70][1] = "3 (2 de bajada y 1 de subida)";
 choices[70][2] = "2 (1 de bajada y 1 de subida)";
 choices[70][3] = "5 (3 de bajada y 2 de subida)";
 answers[70] = choices[70][0];
 units[70] = "107";
 comments[70] = "Id Pregunta: 8663. Examen UPM A2 2011";


//  Id pregunta: 8886 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  &iquest;Qu&eacute; Informaci&oacute;n contiene una SIM?";
 choices[71]= new Array();
 choices[71][0] = "IMSI";
 choices[71][1] = "PIN";
 choices[71][2] = "OMC";
 choices[71][3] = "La respuesta A y B son correctas";
 answers[71] = choices[71][3];
 units[71] = "108";
 comments[71] = "Id Pregunta: 8886. ";


//  Id pregunta: 8991 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  En radio, &iquest;Qu&eacute; quiere decir MIMO?";
 choices[72]= new Array();
 choices[72][0] = "Maximum Input, Minimum Output";
 choices[72][1] = "Minimum Input, Maximum Output";
 choices[72][2] = "Multiple-Input Multible-Output";
 choices[72][3] = "Ninguna de las anteriores";
 answers[72] = choices[72][2];
 units[72] = "107";
 comments[72] = "Id Pregunta: 8991. NULL";


//  Id pregunta: 9048 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  Cu&aacute;l es la afirmaci&oacute;n correcta sobre IEEE 802";
 choices[73]= new Array();
 choices[73][0] = "802.8 es el grupo asesor de banda ancha";
 choices[73][1] = "802.7 es el grupo asesor en fibras &oacute;pticas";
 choices[73][2] = "802.10 era el grupo asesor en seguridad";
 choices[73][3] = "802.3 trata sobre el control l&oacute;gico de enlace";
 answers[73] = choices[73][2];
 units[73] = "107";
 comments[73] = "Id Pregunta: 9048. NULL";


//  Id pregunta: 9058 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  &iquest;Qu&eacute; categor&iacute;as de HSDPA pueden alcanzar 10 Mbits/s?";
 choices[74]= new Array();
 choices[74][0] = "9 y 10";
 choices[74][1] = "9";
 choices[74][2] = "10";
 choices[74][3] = "12";
 answers[74] = choices[74][0];
 units[74] = "108";
 comments[74] = "Id Pregunta: 9058. NULL";


//  Id pregunta: 9382 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  La ley de Cooper afirma que:";
 choices[75]= new Array();
 choices[75][0] = "El n&uacute;mero m&aacute;ximo de conversaciones de voz o su equivalente en tr&aacute;fico de datos que pueden ser llevados a cabo en todo el espectro radioel&eacute;ctrico &uacute;til en una determinada &aacute;rea, se dobla cada 30 meses.";
 choices[75][1] = "Tijeras cortan papel, papel cubre a piedra, piedra aplasta lagarto, lagarto envenena a Spock.";
 choices[75][2] = "&Eacute;l n&uacute;mero de MFLOPS que un procesador puede realizar, aumenta siguiendo un ritmo logar&iacute;tmico.";
 choices[75][3] = "El rendimiento de un sistema aumenta linealmente con el n&uacute;mero de unidades de procesamiento que posea.";
 answers[75] = choices[75][0];
 units[75] = "108";
 comments[75] = "Id Pregunta: 9382. NULL";


//  Id pregunta: 9392 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  En las comunicaciones m&oacute;viles, permitir que se mantenga la conexi&oacute;n cuando un dispositivo m&oacute;vil se cambia dentro de la red a la que pertenece de la zona cubierta por una estaci&oacute;n base a otra, se conoce como:";
 choices[76]= new Array();
 choices[76][0] = "Roaming.";
 choices[76][1] = "Cobertura.";
 choices[76][2] = "Talk-out.";
 choices[76][3] = "hand-off o handover.";
 answers[76] = choices[76][3];
 units[76] = "108";
 comments[76] = "Id Pregunta: 9392. Examen TIC A2 2011 Libre";


//  Id pregunta: 9395 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  Se&ntilde;ale la incorrecta en relaci&oacute;n con HSDPA";
 choices[77]= new Array();
 choices[77][0] = "Utiliza la t&eacute;cnica de HARQ (Hybrid Automatica Repeat Request)";
 choices[77][1] = "Hace uso de una modulaci&oacute;n adaptativa, que cambia seg&uacute;n las condiciones del canal.";
 choices[77][2] = "Existen diferentes versiones de HSDPA que proporcionan diferentes velocidades.";
 choices[77][3] = "Mediante Fast-Packet Scheduling, se asignan espacios de tiempo fijos, por prioridades, haciendo que los usuarios se turnen para que tengan un ancho de banda tambi&eacute;n fijo para la descarga de datos.";
 answers[77] = choices[77][3];
 units[77] = "108";
 comments[77] = "Id Pregunta: 9395. NULL";


//  Id pregunta: 9404 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  Indique los factores que m&aacute;s intervienen en la calidad de la voz sobre IP";
 choices[78]= new Array();
 choices[78][0] = "La latencia y la variaci&oacute;n de latencia (Jitter) de la red de transmisi&oacute;n de paquetes.";
 choices[78][1] = "La calidad de los procesadores de se&ntilde;al (DSP) asociados al codec G.711.";
 choices[78][2] = "La utilizaci&oacute;n de SIP o H.323.";
 choices[78][3] = "Ninguna de las anteriores";
 answers[78] = choices[78][0];
 units[78] = "109";
 comments[78] = "Id Pregunta: 9404. T&eacute;cnico Teleco Ayto Madrid 2010";


//  Id pregunta: 9523 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  Se&ntilde;ale la afirmaci&oacute;n falsa con respecto al est&aacute;ndar H.320:";
 choices[79]= new Array();
 choices[79][0] = "Es un est&aacute;ndar para videoconferencia sobre RDSI";
 choices[79][1] = "Utiliza como est&aacute;ndares de cifrado H.233 y H.244";
 choices[79][2] = "Uno de los tama&ntilde;os de cuadro es CIF (352x288) ";
 choices[79][3] = "Uno de los tama&ntilde;os de cuadro es QCIF (176x144) ";
 answers[79] = choices[79][1];
 units[79] = "117";
 comments[79] = "Id Pregunta: 9523. NULL";


//  Id pregunta: 9524 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  Se&ntilde;ale la afirmaci&oacute;n falsa con respecto al est&aacute;ndar H.323:";
 choices[80]= new Array();
 choices[80][0] = "Es un est&aacute;ndar para videoconferencia sobre redes IP";
 choices[80][1] = "El gatekeeper es un componente principal";
 choices[80][2] = "Utiliza el protocolo H.235 como seguridad (autenticaci&oacute;n, integridad, etc.)";
 choices[80][3] = "Es un est&aacute;ndar para videoconferencia sobre RDSI";
 answers[80] = choices[80][3];
 units[80] = "117";
 comments[80] = "Id Pregunta: 9524. NULL";


//  Id pregunta: 9527 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  Se&ntilde;ale la afimaci&oacute;n correcta respecto al protocolo SIP";
 choices[81]= new Array();
 choices[81][0] = "Proporciona servicios que implementan modelos de petici&oacute;n-respuesta";
 choices[81][1] = "Proporciona primitivas que implementan modelos de petici&oacute;n-respuesta";
 choices[81][2] = "Sobre SIP se monta RTP que se utiliza para negociar las capacidades de la comunicaci&oacute;n";
 choices[81][3] = "Los elementos involucrados en la videoconferencia est&aacute;n representados por URLs";
 answers[81] = choices[81][1];
 units[81] = "117";
 comments[81] = "Id Pregunta: 9527. NULL";


//  Id pregunta: 9877 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  La norma ISO 27002";
 choices[82]= new Array();
 choices[82][0] = "es un est&aacute;ndar de facto para la prestaci&oacute;n de servicios de seguridad de la Tecnolog&iacute;a de la Informaci&oacute;n";
 choices[82][1] = "tiene como objetivo proporcionar una base com&uacute;n para la gesti&oacute;n de la seguridad dentro de las organizaciones.";
 choices[82][2] = "establece 36 dominios de control para la gesti&oacute;n de la seguridad.";
 choices[82][3] = "establece un sistema de certificaci&oacute;n adecuado a la norma.";
 answers[82] = choices[82][1];
 units[82] = "107";
 comments[82] = "Id Pregunta: 9877. TIC A1, Examen 2013";


//  Id pregunta: 9938 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  &iquest;Cu&aacute;l es la principal raz&oacute;n por la que en las comunicaciones UMTS y Wi-Fi seutilizan t&eacute;cnicas de expansi&oacute;n del espectro o espectro ensanchado?";
 choices[83]= new Array();
 choices[83][0] = "Para mejorar la resistencia a las interferencias.";
 choices[83][1] = "Para mejorar las seguridad en el acceso al informaci&oacute;n transmitida.";
 choices[83][2] = "Para incrementar la longitud de onda y reducir el consumo energ&eacute;tico.";
 choices[83][3] = "Wi-Fi no utiliza estas t&eacute;cnicas.";
 answers[83] = choices[83][0];
 units[83] = "107, 108";
 comments[83] = "Id Pregunta: 9938. TIC A1, Examen 2013";


//  Id pregunta: 9941 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  El formato MP3:";
 choices[84]= new Array();
 choices[84][0] = "fue dise&ntilde;ado en 1984 en el Instituto Karlsruher.";
 choices[84][1] = "utiliza el algoritmo de compresi&oacute;n Lempel-Ziv-Welch (LZW).";
 choices[84][2] = "fue aprobado por el &ldquo;Motion Picture Experts Group&rdquo; en 1992.";
 choices[84][3] = "permite compresiones del orden de 10 a 1 respecto al formato CD, conp&eacute;rdida de informaci&oacute;n.";
 answers[84] = choices[84][3];
 units[84] = "117";
 comments[84] = "Id Pregunta: 9941. TIC A1, Examen 2013";


//  Id pregunta: 10042 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  De entre los siguientes, &iquest;qu&eacute; protocolo es utilizado para reservar recursos de red a una determinada aplicaci&oacute;n?";
 choices[85]= new Array();
 choices[85][0] = "RSVP ";
 choices[85][1] = "ARP";
 choices[85][2] = "802.1ar ";
 choices[85][3] = "H.264";
 answers[85] = choices[85][0];
 units[85] = "100, 109";
 comments[85] = "Id Pregunta: 10042. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10068 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Entre los tipos de modulaci&oacute;n en las tecnolog&iacute;as xDSL se encuentra:";
 choices[86]= new Array();
 choices[86][0] = "SDH (Synchronous Digital Hierarchy).";
 choices[86][1] = "SGL (Splitterless G. Lite).";
 choices[86][2] = "SHDSL (Single-pair High-speed Digital Subscriber Line).";
 choices[86][3] = "CAP (Carrierless Amplitude Phase).";
 answers[86] = choices[86][3];
 units[86] = "107";
 comments[86] = "Id Pregunta: 10068. TIC A2, libre, Examen 2013";


//  Id pregunta: 10145 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  &iquest;Qu&eacute; es el dividendo digital?";
 choices[87]= new Array();
 choices[87][0] = "Una parte del espectro radioel&eacute;ctrico que ha quedado liberada tras la implantaci&oacute;n de la TDT.";
 choices[87][1] = "Una parte del espectro digital.";
 choices[87][2] = "Una compresi&oacute;n del espectro debido a la utilizaci&oacute;n de se&ntilde;ales digitales.";
 choices[87][3] = "Una reasignaci&oacute;n de frecuencias dentro de la banda que utiliza la TDT.";
 answers[87] = choices[87][0];
 units[87] = "105";
 comments[87] = "Id Pregunta: 10145. TIC A 2011";


//  Id pregunta: 10195 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  &iquest;Cual es la afirmaci&oacute;n falsa respecto a VDSL2 (Very-High-Bit-Rate Digital Subscriber Line 2)?";
 choices[88]= new Array();
 choices[88][0] = "Corresponde a la norma ITU-T G.993.2";
 choices[88][1] = "No permite la modalidad sim&eacute;trica";
 choices[88][2] = "Puede alcanzar velocidades de 100 Mbps a 1 Km de distancia de la central ";
 choices[88][3] = "A distancias mayores de 2 Km la velocidad equivale a un ADSL2";
 answers[88] = choices[88][1];
 units[88] = "107";
 comments[88] = "Id Pregunta: 10195. NULL";


//  Id pregunta: 10196 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  &iquest;Cual de la siguientes t&eacute;cnicas de modulaci&oacute;n no es usada por las tecnolog&iacute;as xDSL?";
 choices[89]= new Array();
 choices[89][0] = "2B1Q";
 choices[89][1] = "CAP";
 choices[89][2] = "DMT";
 choices[89][3] = "WDM";
 answers[89] = choices[89][3];
 units[89] = "107";
 comments[89] = "Id Pregunta: 10196. La tecnolog&iacute;a usada en algunas xDSL es DWMT, no WDM";


//  Id pregunta: 10198 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  Bluetooth 2.0 incluye un mecanismo llamado EDR (Enhanced Data Rate) para incrementar la velocidad de transmisi&oacute;n. Indique cual es la m&aacute;xima velocidad que se alcanza con este mecanismo:";
 choices[90]= new Array();
 choices[90][0] = "3 Mbps";
 choices[90][1] = "2 Mbps";
 choices[90][2] = "5 Mbps";
 choices[90][3] = "1 Mbps";
 answers[90] = choices[90][0];
 units[90] = "107";
 comments[90] = "Id Pregunta: 10198. 3 Mbps se alcanza usando la modulaci&oacute;n 8DPSK, mientras que con la modulaci&oacute;n pi/4-DQPSK se alcanzan 2 Mbps";


//  Id pregunta: 10201 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  &iquest;Cual de las siguientes afirmaciones es correcta respecto a la tecnolog&iacute;a 4G de comunicaciones m&oacute;viles?";
 choices[91]= new Array();
 choices[91][0] = "Corresponde a la release 7 del 3GPP (3rd Generation Partnership Project)";
 choices[91][1] = "Usa una nueva interfaz aire basada en OFDMA (Orthogonal Frequency Division Multiple Access)";
 choices[91][2] = "Reutiliza los RNC (Radio Network Controller) de la red 3G incorporando las funciones de los nodos B";
 choices[91][3] = "El ancho de banda de los canales pasa de los 5 MHz de 3G a los 20MHz";
 answers[91] = choices[91][1];
 units[91] = "108";
 comments[91] = "Id Pregunta: 10201. Se trata de la release 8. Desaparece el RNC y sus funciones se incorporan al eNode B (Evolved Node B). El ancho de banda no es fijo sino variable entre 1,25MHz y 20MHz.";


//  Id pregunta: 10203 AÃ±o de creación de pregunta: 2014-01-01
 questions[92]= "93)  Indique qu&eacute; afirmaci&oacute;n es falsa en relaci&oacute;n a la tecnolog&iacute;a 4G de comunicaciones m&oacute;viles";
 choices[92]= new Array();
 choices[92][0] = "Su arquitectura de red, EPS (Evolved Packet System), est&aacute; formada por el n&uacute;cleo de red EPC (Evolved Packet Core) y la red de acceso LTE, conocida como E-UTRAN";
 choices[92][1] = "Descarta el uso de la t&eacute;cnica HARQ (Hybrid Automatic Repeat Request) introducida en la release 5 (HSDPA)";
 choices[92][2] = "La transmisi&oacute;n multiantena est&aacute; basada en SFBC (Space Frequency Block Coding) y FSTD (Frequency-Shift Time Diversity)";
 choices[92][3] = "Se la conoce con el nombre de LTE (Long Term Evolution)";
 answers[92] = choices[92][1];
 units[92] = "108";
 comments[92] = "Id Pregunta: 10203. La t&eacute;cnica HARQ sigue us&aacute;ndose en 4G";


//  Id pregunta: 10659 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Se&ntilde;ale aquella opci&oacute;n que no es una WPAN:";
 choices[93]= new Array();
 choices[93][0] = "NFC";
 choices[93][1] = "IRDA";
 choices[93][2] = "Wibree";
 choices[93][3] = "CSMA";
 answers[93] = choices[93][3];
 units[93] = "107";
 comments[93] = "Id Pregunta: 10659. ";


//  Id pregunta: 10665 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Polycom, Radvision y Lifesize son:";
 choices[94]= new Array();
 choices[94][0] = "Sistemas de videoconferencia";
 choices[94][1] = "Sistemas de telefon&iacute;a";
 choices[94][2] = "Conectores RDSI";
 choices[94][3] = "C&oacute;decs de video.";
 answers[94] = choices[94][0];
 units[94] = "117";
 comments[94] = "Id Pregunta: 10665. ";


//  Id pregunta: 10909 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Uno de los problemas en cuanto a la calidad del servicio (QoS) de una red VoIP es la latencia, se&ntilde;ale su definici&oacute;n correcta:";
 choices[95]= new Array();
 choices[95][0] = "Variaci&oacute;n en el tiempo de llegada de los paquetes, causada por congesti&oacute;n de red, p&eacute;rdida de sincronizaci&oacute;n o por las diferentes rutas seguidas.";
 choices[95][1] = "Es una reflexi&oacute;n retardada de la se&ntilde;al ac&uacute;stica original.";
 choices[95][2] = "El tiempo que tarda un paquete en llegar desde la fuente al destino.";
 choices[95][3] = "P&eacute;rdida que se produce al usar protocolos no orientados a conexi&oacute;n que no reenv&iacute;an paquetes perdidos. Adem&aacute;s tambi&eacute;n se produce por descartes de paquetes que no llegan a tiempo al receptor.";
 answers[95] = choices[95][2];
 units[95] = "108, 109";
 comments[95] = "Id Pregunta: 10909. Examen GSI 2014";


//  Id pregunta: 11181 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Cu&aacute;ntas conexiones activas permite mantener un dispositivo con el est&aacute;ndar Bluetooth?";
 choices[96]= new Array();
 choices[96][0] = "7";
 choices[96][1] = "8";
 choices[96][2] = "12";
 choices[96][3] = "16";
 answers[96] = choices[96][0];
 units[96] = "107";
 comments[96] = "Id Pregunta: 11181. ";


//  Id pregunta: 11191 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;A partir de cuanto tiempo de retardo hace que la calidad de una videoconferencia sea cr&iacute;tica?";
 choices[97]= new Array();
 choices[97][0] = "50 ms";
 choices[97][1] = "150 ms";
 choices[97][2] = "300 ms";
 choices[97][3] = "600 ms";
 answers[97] = choices[97][2];
 units[97] = "117";
 comments[97] = "Id Pregunta: 11191. ";


//  Id pregunta: 11571 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Cu&aacute;l es un protocolo estandar para la gesti&oacute;n de VLANs?";
 choices[98]= new Array();
 choices[98][0] = "VTP";
 choices[98][1] = "GVRP";
 choices[98][2] = "HSRP";
 choices[98][3] = "VRRP";
 answers[98] = choices[98][1];
 units[98] = "109";
 comments[98] = "Id Pregunta: 11571. a) protocolo de CISCO. c) y d) protocolos de redundancia. ";


//  Id pregunta: 11660 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  En una trama de Frame Relay, la m&iacute;nima longitud posible del campo DLCI es:";
 choices[99]= new Array();
 choices[99][0] = "8 bits";
 choices[99][1] = "10 bits";
 choices[99][2] = "17 bits";
 choices[99][3] = "24 bits";
 answers[99] = choices[99][1];
 units[99] = "109";
 comments[99] = "Id Pregunta: 11660. ";


