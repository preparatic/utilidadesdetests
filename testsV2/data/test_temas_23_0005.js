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


//  Id pregunta: 2925 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  En relaci&oacute;n con GPRS se&ntilde;ale la opci&oacute;n incorrecta";
 choices[1]= new Array();
 choices[1][0] = "El acceso radio es por paquetes de datos";
 choices[1][1] = "Hasta 8 usuarios pueden compartir eficientemente un &uacute;nico timeslot de radio";
 choices[1][2] = "La tarificaci&oacute;n es por tiempo de conexi&oacute;n";
 choices[1][3] = "La red GPRS se puede comunicar con redes TCP/IP";
 answers[1] = choices[1][2];
 units[1] = "108";
 comments[1] = "Id Pregunta: 2925. Similar a examen TIC SS A 2003";


//  Id pregunta: 2926 AÃ±o de creación de pregunta: 2009-01-01
 questions[2]= "3)  En GPRS la velocidad m&aacute;xima te&oacute;rica de conexi&oacute;n es:";
 choices[2]= new Array();
 choices[2][0] = "128 kbps";
 choices[2][1] = "171.2 kbps";
 choices[2][2] = "64.1 kbps";
 choices[2][3] = "56.6 kbps";
 answers[2] = choices[2][1];
 units[2] = "108";
 comments[2] = "Id Pregunta: 2926. Similar a examen TIC SS A 2003";


//  Id pregunta: 3052 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  Bluetooth:";
 choices[3]= new Array();
 choices[3][0] = "Es una tecnolog&iacute;a de enlace radio para redes LAN de peque&ntilde;o alcance";
 choices[3][1] = "Es una tecnolog&iacute;a de enlace de radio para redes PAN";
 choices[3][2] = "Es el resultado de la aplicaci&oacute;n de las &uacute;ltimas t&eacute;cnicas inform&aacute;ticas al mundo de la odontolog&iacute;a";
 choices[3][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[3] = choices[3][1];
 units[3] = "107";
 comments[3] = "Id Pregunta: 3052. NULL";


//  Id pregunta: 3083 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  Los sistemas de multiplexaci&oacute;n por divisi&oacute;n en frecuencia, respecto a los por divisi&oacute;n en el tiempo:";
 choices[4]= new Array();
 choices[4][0] = "Tienen problemas de diafon&iacute;a, por lo que se dejan espacios de guarda";
 choices[4][1] = "Utilizan el ancho de banda completo del canal con una duraci&oacute;n fija";
 choices[4][2] = "No utilizan filtros";
 choices[4][3] = "Utilizan antenas de tipo dipolo";
 answers[4] = choices[4][0];
 units[4] = "108";
 comments[4] = "Id Pregunta: 3083. ";


//  Id pregunta: 3123 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;C&oacute;mo se denominan en una red UMTS los componentes responsables de la decisiones de &quot;handover&quot;?:";
 choices[5]= new Array();
 choices[5][0] = "UTRAN";
 choices[5][1] = "Nodos-B";
 choices[5][2] = "RNC";
 choices[5][3] = "RNS";
 answers[5] = choices[5][2];
 units[5] = "108";
 comments[5] = "Id Pregunta: 3123. ";


//  Id pregunta: 3128 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;C&oacute;mo se suele representar la trama de un STM-1 en SDH?";
 choices[6]= new Array();
 choices[6][0] = "como una fila de 2430 octetos separados por bloques funcionales";
 choices[6][1] = "como una matriz de 270 filas y 9 columnas de octetos separados en bloques funcionales";
 choices[6][2] = "como una columna de 2430 octetos separados por bloques funcionales";
 choices[6][3] = "como una matriz de 270 columnas y 9 filas de octetos separados en bloques funcionales";
 answers[6] = choices[6][3];
 units[6] = "109";
 comments[6] = "Id Pregunta: 3128. ";


//  Id pregunta: 3177 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes no es una tecnolog&iacute;a xDSL?";
 choices[7]= new Array();
 choices[7][0] = "HDSL";
 choices[7][1] = "VDSL";
 choices[7][2] = "ADSL";
 choices[7][3] = "MDSL";
 answers[7] = choices[7][3];
 units[7] = "107";
 comments[7] = "Id Pregunta: 3177. NULL";


//  Id pregunta: 3312 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Qu&eacute; tama&ntilde;o de celdas se utiliza en ATM?:";
 choices[8]= new Array();
 choices[8][0] = "Un m&aacute;ximo de 64 bytes";
 choices[8][1] = "El tama&ntilde;o m&aacute;ximo depende del contrato con el proveedor del servicio, siendo m&uacute;ltiplo de 64 bytes";
 choices[8][2] = "1024 bits";
 choices[8][3] = "424 bits";
 answers[8] = choices[8][3];
 units[8] = "109";
 comments[8] = "Id Pregunta: 3312. ";


//  Id pregunta: 3397 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  El nivel f&iacute;sico incorpora un mecanismo de deteccion de canal libre que se denomina dentro de la especificaci&oacute;n 802.11:";
 choices[9]= new Array();
 choices[9][0] = "Carrier Detection";
 choices[9][1] = "Clear Channel Assessment";
 choices[9][2] = "Channel Check";
 choices[9][3] = "Carrier Assesment";
 answers[9] = choices[9][1];
 units[9] = "107";
 comments[9] = "Id Pregunta: 3397. NULL";


//  Id pregunta: 3405 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  Es falso que las &quot;Etiquetas RF/ID&quot;:";
 choices[10]= new Array();
 choices[10][0] = "Permiten s&oacute;lo lectura a una distancia de 1 metro. La escritura se debe hacer con contacto.";
 choices[10][1] = "Las etiquetas RF/ID pueden contener hasta 64 bytes";
 choices[10][2] = "Son etiquetas con una espiral en su interior de 5 x 5 cm";
 choices[10][3] = "Su principal aplicaci&oacute;n es inventario o seguridad";
 answers[10] = choices[10][0];
 units[10] = "107";
 comments[10] = "Id Pregunta: 3405. *: RF/ID";


//  Id pregunta: 3409 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Frame Relay se caracteriza por ofrecer un servicio:";
 choices[11]= new Array();
 choices[11][0] = "Orientado a conexi&oacute;n";
 choices[11][1] = "Fiable";
 choices[11][2] = "Sin garant&iacute;as de caudal m&iacute;nimo";
 choices[11][3] = "Con correcci&oacute;n de errores cada vez que se env&iacute;a un paquete al nodo siguiente";
 answers[11] = choices[11][0];
 units[11] = "109";
 comments[11] = "Id Pregunta: 3409. ";


//  Id pregunta: 3475 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  El t&eacute;rmino VHE hace referencia a:";
 choices[12]= new Array();
 choices[12][0] = "Un componente de una red UMTS";
 choices[12][1] = "Un componente de una red GSM";
 choices[12][2] = "Un conjunto de servicios cuya apariencia es independiente de la red";
 choices[12][3] = "Un rango de frecuencias";
 answers[12] = choices[12][2];
 units[12] = "108";
 comments[12] = "Id Pregunta: 3475. ";


//  Id pregunta: 3486 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  En ATM , &iquest;Qu&eacute; tipo de AAL (ATM Adaptation Layer) es el principal para datos, y juega un papel importante en emulaci&oacute;n de LAN?:";
 choices[13]= new Array();
 choices[13][0] = "AAL 1";
 choices[13][1] = "AAL 2";
 choices[13][2] = "AAL 3/4";
 choices[13][3] = "AAL 5";
 answers[13] = choices[13][3];
 units[13] = "109";
 comments[13] = "Id Pregunta: 3486. ";


//  Id pregunta: 3487 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  En ATM: &quot;la capacidad de transferencia que se caracteriza por la ausencia de caracterizaci&oacute;n del tr&aacute;fico en el contrato de forma que la red transmite la informaci&oacute;n que le ofrece el usuario cuando puede y lo mejor que puede &quot;, se denomina:";
 choices[14]= new Array();
 choices[14][0] = "DBR (Deterministic Bit Rate)";
 choices[14][1] = "SBR (Statistic Bit Rate)";
 choices[14][2] = "ABT (ATM Block Transfer)";
 choices[14][3] = "ABR (Available Bit Rate)";
 answers[14] = choices[14][3];
 units[14] = "109";
 comments[14] = "Id Pregunta: 3487. ";


//  Id pregunta: 3515 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  En el servicio de radiomensajer&iacute;a se distinguen tres modalidades.&iquest;Cu&aacute;l de las siguientes no corresponde a &eacute;stas?:";
 choices[15]= new Array();
 choices[15][0] = "Modalidad de aviso";
 choices[15][1] = "Modalidad telef&oacute;nica";
 choices[15][2] = "Modalidad num&eacute;rica";
 choices[15][3] = "Modalidad alfanum&eacute;rica";
 answers[15] = choices[15][1];
 units[15] = "108";
 comments[15] = "Id Pregunta: 3515. ";


//  Id pregunta: 3535 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  En las t&eacute;cnicas celulares aplicadas a telefon&iacute;a m&oacute;vil, &iquest;cu&aacute;l es la geometr&iacute;a m&aacute;s adecuada de una c&eacute;lula en t&eacute;rminos de m&aacute;xima cobertura y m&iacute;nima intereferencia?:";
 choices[16]= new Array();
 choices[16][0] = "La cuadrada";
 choices[16][1] = "La circular";
 choices[16][2] = "La triangular";
 choices[16][3] = "La hexagonal";
 answers[16] = choices[16][3];
 units[16] = "108";
 comments[16] = "Id Pregunta: 3535. ";


//  Id pregunta: 3560 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  En transmisi&oacute;n de datos, &iquest;qu&eacute; ventaja reporta el uso de c&eacute;lulas peque&ntilde;as de longitud fija?:";
 choices[17]= new Array();
 choices[17][0] = "Utilizaci&oacute;n m&aacute;s eficiente del enlace ya que un dispositivo puede enviar c&eacute;lulas sin necesidad de un slot 'libre' de tiempo";
 choices[17][1] = "Minimizaci&oacute;n de esperas intermitentes que pueden derivarse de la espera para que se transmita un paquete largo";
 choices[17][2] = "Una estaci&oacute;n puede enviar muchas c&eacute;lulas en fila sin tener que esperar para est&eacute; disponible su slot de tiempo";
 choices[17][3] = "Puede usarse un pol&iacute;tica de tr&aacute;fico para comparar el tr&aacute;fico real con el acordado";
 answers[17] = choices[17][1];
 units[17] = "109";
 comments[17] = "Id Pregunta: 3560. ";


//  Id pregunta: 3641 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  La separaci&oacute;n entre diferentes canales de radio en UMTS se hace mediante:";
 choices[18]= new Array();
 choices[18][0] = "Diferentes frecuencias";
 choices[18][1] = "Distintos intervalos temporales";
 choices[18][2] = "Diferentes c&oacute;digos";
 choices[18][3] = "Ninguna de las anteriores";
 answers[18] = choices[18][2];
 units[18] = "108";
 comments[18] = "Id Pregunta: 3641. ";


//  Id pregunta: 3651 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  La tecnolog&iacute;a/protocolo que da soporte al tipo de conmutaci&oacute;n/transmisi&oacute;n en el que se descarta la trama err&oacute;nea y son los mecanismos de la capa de transporte los que se encargan de recobrar la informaci&oacute;n se denomina:";
 choices[19]= new Array();
 choices[19][0] = "ATM";
 choices[19][1] = "Frame Relay";
 choices[19][2] = "ADSL";
 choices[19][3] = "PCLC";
 answers[19] = choices[19][1];
 units[19] = "109";
 comments[19] = "Id Pregunta: 3651. ";


//  Id pregunta: 3672 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Una de las siguientes caracter&iacute;sticas es falsa para la tecnolog&iacute;a GPS. Indicar cu&aacute;l:";
 choices[20]= new Array();
 choices[20][0] = "El sistema lo forma una constelaci&oacute;n de 32 sat&eacute;lites, que orbitan alrededor de la Tierra a 12600 millas, con 5 estaciones fijas de monitorizaci&oacute;n y seguimiento";
 choices[20][1] = "La posici&oacute;n se expresa en latitud y longitud gracias a la triangulaci&oacute;n producida por al menos 4 sat&eacute;lites trabajando simult&aacute;neamente";
 choices[20][2] = "Entre sus aplicaciones principales est&aacute; la gesti&oacute;n de flotas, la provisi&oacute;n de servicios de telefon&iacute;a m&oacute;vil basados en localizaci&oacute;n o las radios privadas y p&uacute;blicas de tipo trunking";
 choices[20][3] = "Es un sistema de origen estadounidense proveniente del campo militar, y la versi&oacute;n de la que puede disponer el gran p&uacute;blico no es tan precisa como la del campo militar";
 answers[20] = choices[20][0];
 units[20] = "108";
 comments[20] = "Id Pregunta: 3672. ";


//  Id pregunta: 3684 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  La velocidad de transmisi&oacute;n que se puede alcanzar con tecnolog&iacute;a Bluetooth versi&oacute;n 1.1 es de:";
 choices[21]= new Array();
 choices[21][0] = "1 Mbps";
 choices[21][1] = "384 kbps";
 choices[21][2] = "5 Mbps";
 choices[21][3] = "11 Mbps";
 answers[21] = choices[21][0];
 units[21] = "107";
 comments[21] = "Id Pregunta: 3684. NULL";


//  Id pregunta: 3686 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  La 'velocidad' seg&uacute;n demanda es propia de la t&eacute;cnica:";
 choices[22]= new Array();
 choices[22][0] = "ATM (Asynchronous Transfer Mode)";
 choices[22][1] = "STM (Synchronous Transfer Mode)";
 choices[22][2] = "ATM y STM";
 choices[22][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[22] = choices[22][0];
 units[22] = "109";
 comments[22] = "Id Pregunta: 3686. ";


//  Id pregunta: 3691 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Las caracter&iacute;sticas: Separaci&oacute;n de portadoras = 200 KHz, Ancho de banda = 75 MHz, Distancia duplex = 95 MHz, corresponden a un sistema:";
 choices[23]= new Array();
 choices[23][0] = "GSM 900";
 choices[23][1] = "GSM 1800";
 choices[23][2] = "PCS 1900";
 choices[23][3] = "UMTS";
 answers[23] = choices[23][1];
 units[23] = "108";
 comments[23] = "Id Pregunta: 3691. ";


//  Id pregunta: 3711 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  LMDS es:";
 choices[24]= new Array();
 choices[24][0] = "una tecnolog&iacute;a de banda ancha para un bucle de abonado sin cable";
 choices[24][1] = "una tecnolog&iacute;a de banda estrecha para un bucle de abonado sin cable";
 choices[24][2] = "una tecnolog&iacute;a de realizaci&oacute;n de circuitos monol&iacute;ticos de microondas en banda S";
 choices[24][3] = "un est&aacute;ndar para la programaci&oacute;n de interfaces de dispositivos multimedia";
 answers[24] = choices[24][0];
 units[24] = "108";
 comments[24] = "Id Pregunta: 3711. ";


//  Id pregunta: 3779 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Relativo a Frame Relay, &iquest;cu&aacute;l de las siguientes afirmaciones es verdadera?:";
 choices[25]= new Array();
 choices[25][0] = "Es un protocolo dise&ntilde;ado para trabajar sobre redes con alta tasa de errores";
 choices[25][1] = "Un usuario nunca podr&aacute; transmitir m&aacute;s datos de los contratados en el CIR";
 choices[25][2] = "Proporciona un servicio orientado a conexi&oacute;n no fiable";
 choices[25][3] = "En caso de congesti&oacute;n, las tramas son almacenadas y enviadas con posterioridad";
 answers[25] = choices[25][2];
 units[25] = "109";
 comments[25] = "Id Pregunta: 3779. ";


//  Id pregunta: 3796 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  Respecto a WAP, &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[26]= new Array();
 choices[26][0] = "Sustituye a GSM";
 choices[26][1] = "Es una evoluci&oacute;n de GPRS";
 choices[26][2] = "Puede implementarse sobre GPRS";
 choices[26][3] = "S&oacute;lo puede implementarse sobre GSM";
 answers[26] = choices[26][2];
 units[26] = "108";
 comments[26] = "Id Pregunta: 3796. ";


//  Id pregunta: 3803 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  Se conoce como radiaci&oacute;n:";
 choices[27]= new Array();
 choices[27][0] = "A la propiedad que tiene el radio como elemento altamente energ&eacute;tico para su aplicaci&oacute;n en procesadores de &uacute;ltima generaci&oacute;n";
 choices[27][1] = "A la propiedad de emisi&oacute;n de energ&iacute;a de los cuerpos, reaccionando al entorno, lo que permite aprovechar dicha circusntancia para transmitir informaci&oacute;n de manera controlada";
 choices[27][2] = "A la propiedad de determinados is&oacute;topos inestables tales que el radio existente entre los electrones y el n&uacute;cleo de los &aacute;tomos es variable con la temperatura y el tiempo";
 choices[27][3] = "Todo lo anterior es falso";
 answers[27] = choices[27][1];
 units[27] = "105";
 comments[27] = "Id Pregunta: 3803. ";


//  Id pregunta: 3900 AÃ±o de creación de pregunta: 2003-01-01
 questions[28]= "29)  La Interfaz Aire de la norma IEEE 802.11g es:";
 choices[28]= new Array();
 choices[28][0] = "FHSS/DSSS";
 choices[28][1] = "DSSS";
 choices[28][2] = "OFDM";
 choices[28][3] = "DSSS/OFDM";
 answers[28] = choices[28][3];
 units[28] = "107";
 comments[28] = "Id Pregunta: 3900. NULL";


//  Id pregunta: 3901 AÃ±o de creación de pregunta: 2003-01-01
 questions[29]= "30)  La nueva norma llamada WiMAX es:";
 choices[29]= new Array();
 choices[29][0] = "La norma IEEE 802.12";
 choices[29][1] = "Una norma WLAN europea elaborada por el Instituto Europeo de Normas de Telecomunicaciones (ETSI) y es similar a IEEE 802.11a";
 choices[29][2] = "Una norma inal&aacute;mbrica fija que deber&iacute;a estar en condiciones de transmitir 32-56 km con velocidades m&aacute;ximas de datos cercanas a 70 Mbit/s";
 choices[29][3] = "Ninguna de las anteriores es cierta";
 answers[29] = choices[29][2];
 units[29] = "107";
 comments[29] = "Id Pregunta: 3901. NULL";


//  Id pregunta: 3905 AÃ±o de creación de pregunta: 2003-01-01
 questions[30]= "31)  Sobre el est&aacute;ndar IEEE 802.20 se puede afirmar que:";
 choices[30]= new Array();
 choices[30][0] = "No existe a&uacute;n ese est&aacute;ndar";
 choices[30][1] = "Es el est&aacute;ndar relativo a redes inal&aacute;mbricas metropolitanas de banda ancha ";
 choices[30][2] = "Es el est&aacute;ndar de acesso inal&aacute;mbrico m&oacute;vil de banda ancha";
 choices[30][3] = "Nada de lo anterior es cierto";
 answers[30] = choices[30][2];
 units[30] = "107";
 comments[30] = "Id Pregunta: 3905. NULL";


//  Id pregunta: 3941 AÃ±o de creación de pregunta: 2003-01-01
 questions[31]= "32)  &iquest;Qu&eacute; nivel OSI garantiza la comunicaci&oacute;n extremo a extremo?";
 choices[31]= new Array();
 choices[31][0] = "3";
 choices[31][1] = "4";
 choices[31][2] = "5";
 choices[31][3] = "6";
 answers[31] = choices[31][1];
 units[31] = "107";
 comments[31] = "Id Pregunta: 3941. NULL";


//  Id pregunta: 3951 AÃ±o de creación de pregunta: 2003-01-01
 questions[32]= "33)  En telefon&iacute;a movil GSM qu&eacute; dos bases de datos se utilizan para guardar datos del cliente";
 choices[32]= new Array();
 choices[32][0] = "VLR y HLR ";
 choices[32][1] = "MSC y VLR";
 choices[32][2] = "NMC y OMC";
 choices[32][3] = "GMSC y NMC";
 answers[32] = choices[32][0];
 units[32] = "108";
 comments[32] = "Id Pregunta: 3951. ";


//  Id pregunta: 3958 AÃ±o de creación de pregunta: 2003-01-01
 questions[33]= "34)  La familia de redes locales inal&aacute;mbricas WLAN operan en las bandas de frecuencias:";
 choices[33]= new Array();
 choices[33][0] = "2,4 GHz y 5 GHz";
 choices[33][1] = "10 MHz y 100 MHz";
 choices[33][2] = "1 MHz y 10 MHz";
 choices[33][3] = "Ninguna de las anteriores";
 answers[33] = choices[33][0];
 units[33] = "107";
 comments[33] = "Id Pregunta: 3958. NULL";


//  Id pregunta: 4018 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  &iquest;Qu&eacute; modulaci&oacute;n usa el chip para PLC de DS2?";
 choices[34]= new Array();
 choices[34][0] = "GSMK";
 choices[34][1] = "DSSS";
 choices[34][2] = "QPSK";
 choices[34][3] = "OFDM";
 answers[34] = choices[34][3];
 units[34] = "107";
 comments[34] = "Id Pregunta: 4018. NULL";


//  Id pregunta: 4023 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  &iquest;Cu&aacute;l de los siguientes no es un elemento de la arquitectura GSM?";
 choices[35]= new Array();
 choices[35][0] = "HLR";
 choices[35][1] = "MSC";
 choices[35][2] = "SGSN";
 choices[35][3] = "BTS";
 answers[35] = choices[35][2];
 units[35] = "108";
 comments[35] = "Id Pregunta: 4023. ";


//  Id pregunta: 4196 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  El estandar 802.11i se centra en";
 choices[36]= new Array();
 choices[36][0] = "Calidad de Servicio (QoS) sobre redes WLAN";
 choices[36][1] = "Autenticaci&oacute;n y cifrado para redes WLAN";
 choices[36][2] = "Nueva generaci&oacute;n de WLAN de redes de, al menos, 100 Mbps (en proceso de definici&oacute;n en 2006)";
 choices[36][3] = "Intercambio de informaci&oacute;n de capacidad entre clientes y puntos de acceso en redes WLAN";
 answers[36] = choices[36][1];
 units[36] = "107";
 comments[36] = "Id Pregunta: 4196. NULL";


//  Id pregunta: 4202 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  ADSL2+";
 choices[37]= new Array();
 choices[37][0] = "Soporta una distancia m&aacute;xima de 3,6Km. mayor que VDSL";
 choices[37][1] = "Utiliza frecuencias hasta 2.2 MHz.";
 choices[37][2] = "A la m&aacute;xima distancia tiene un ancho de bajada m&aacute;ximo de 4Mbps";
 choices[37][3] = "Todas las anteriores son correctas";
 answers[37] = choices[37][3];
 units[37] = "107";
 comments[37] = "Id Pregunta: 4202. NULL";


//  Id pregunta: 4545 AÃ±o de creación de pregunta: 2007-01-01
 questions[38]= "39)  Indique cual de las siguientes afirmaciones es falsa:";
 choices[38]= new Array();
 choices[38][0] = "El sistema GPRS permite el env&iacute;o de paquetes de datos sobre la red GSM.";
 choices[38][1] = "El sistema GPRS utiliza los mismos recursos de la interfaz radio del sistema GSM.";
 choices[38][2] = "En una misma celda no pueden coexistir canales GPRS y GSM.";
 choices[38][3] = "Un canal GPRS solo se asigna al usuario cuando se transmiten o reciben paquetes, mientras que un canal GSM se asigna de forma permanente al usuario durante toda la llamada.";
 answers[38] = choices[38][2];
 units[38] = "108";
 comments[38] = "Id Pregunta: 4545. ";


//  Id pregunta: 4662 AÃ±o de creación de pregunta: 2007-01-01
 questions[39]= "40)  Tasa M&aacute;xima de Transferencia  de Informaci&oacute;n alcanzable con la tecnolog&iacute;a HSDPA ";
 choices[39]= new Array();
 choices[39][0] = "7.2Mbps";
 choices[39][1] = "14.4Mbps";
 choices[39][2] = "4.8Mbps";
 choices[39][3] = "10.7Mbps";
 answers[39] = choices[39][1];
 units[39] = "108";
 comments[39] = "Id Pregunta: 4662. ";


//  Id pregunta: 4691 AÃ±o de creación de pregunta: 2007-01-01
 questions[40]= "41)  En la tecnolog&iacute;a de comunicaciones RDSI, los canales se dividen en";
 choices[40]= new Array();
 choices[40][0] = "A, B y C";
 choices[40][1] = "I, II y III";
 choices[40][2] = "B1, B2 y B3";
 choices[40][3] = "B, D y H";
 answers[40] = choices[40][3];
 units[40] = "107";
 comments[40] = "Id Pregunta: 4691. Examen 2006 JCYL";


//  Id pregunta: 4752 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  La interfaz entre la RNC de la UTRAN y el SGSN es:";
 choices[41]= new Array();
 choices[41][0] = "Iu";
 choices[41][1] = "Iub";
 choices[41][2] = " Gi";
 choices[41][3] = " Gb";
 answers[41] = choices[41][0];
 units[41] = "108";
 comments[41] = "Id Pregunta: 4752. ";


//  Id pregunta: 4806 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  El est&aacute;ndar del IEEE (Institute of Electrical and Electronics Engineers) que funciona bajo el est&aacute;ndar 802.11 y seaplica a la intercomunicaci&oacute;n entre puntos de acceso de distintos fabricantes, permitiendo el roaming o itineranciade clientes es el:";
 choices[42]= new Array();
 choices[42][0] = "802.11e";
 choices[42][1] = "802.11f";
 choices[42][2] = "802.11h";
 choices[42][3] = "802.11i";
 answers[42] = choices[42][1];
 units[42] = "107";
 comments[42] = "Id Pregunta: 4806. NULL";


//  Id pregunta: 4835 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  &iquest;Cu&aacute;l de las siguientes afirmaciones respecto al protocolo Real-Time Transport Protocol (RTP) NO es cierta?";
 choices[43]= new Array();
 choices[43][0] = "Permite monitorizar la calidad del servicio que se est&aacute; ofreciendo para servicios con caracter&iacute;sticas detiempo real";
 choices[43][1] = "Proporciona servicios de entrega punto a punto de datos con caracter&iacute;sticas de tiempo real, como audio y";
 choices[43][2] = "Est&aacute; definido en la norma RFC (Request for Comments) 3550, la cual sustituye a la RFC 1889";
 choices[43][3] = "La mayor&iacute;a de las aplicaciones, como por ejemplo VoIP, utilizan RTP sobre UDP (User Datagram Protocol)con el fin de aprovechar los servicios de multiplexi&oacute;n y verificaci&oacute;n de datos (checksum) que ofrece esteprotocolo";
 answers[43] = choices[43][0];
 units[43] = "100, 117";
 comments[43] = "Id Pregunta: 4835. ";


//  Id pregunta: 4974 AÃ±o de creación de pregunta: 2003-01-01
 questions[44]= "45)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre el protocolo Frame Relay es correcta?:";
 choices[44]= new Array();
 choices[44][0] = "Frame Relay tiene el grave inconveniente de su importante &ldquo;overhead&rdquo;, producido por los mecanismos de controlde errores y de flujo.";
 choices[44][1] = "Las especificaciones de Frame Relay fueron definidas por ANSI, fundamentalmente como medida para superar lalentitud de X.25, eliminando reconocimiento nodo a nodo.";
 choices[44][2] = "El protocolo Frame Relay opera en la capa 3 e inferiores del modelo OSI, y mediante la conmutaci&oacute;n de paquetes,a trav&eacute;s de una red de conmutadores, entre identificadores de conexi&oacute;n.";
 choices[44][3] = "Frame Relay es el nombre consuetudinario del protocolo ITU X-75.";
 answers[44] = choices[44][1];
 units[44] = "109";
 comments[44] = "Id Pregunta: 4974. Examen TIC B 2007";


//  Id pregunta: 5012 AÃ±o de creación de pregunta: 2003-01-01
 questions[45]= "46)  ATM (&quot;Asynchronous Transfer Mode&quot;) emplea celdas:";
 choices[45]= new Array();
 choices[45][0] = "De tama&ntilde;o variable: entre 5 y 10 octetos de cabecera, m&aacute;s 46 octetos de informaci&oacute;n";
 choices[45][1] = "De tama&ntilde;o fijo : 5 octetos de cabecera, m&aacute;s 48 octetos de informaci&oacute;n";
 choices[45][2] = "De tama&ntilde;o fijo: 8 octetos de cabecera, m&aacute;s 58 octetos de informaci&oacute;n";
 choices[45][3] = "De tama&ntilde;o variable : 5 octetos de cabecera y entre 48 y 56 octetos de informaci&oacute;n";
 answers[45] = choices[45][1];
 units[45] = "109";
 comments[45] = "Id Pregunta: 5012. Examen TIC A 2007";


//  Id pregunta: 5048 AÃ±o de creación de pregunta: 2003-01-01
 questions[46]= "47)  &iquest;Qu&eacute; se utiliza para codificar la voz que se transmite por la red IP?:";
 choices[46]= new Array();
 choices[46][0] = "Retardo";
 choices[46][1] = "Encriptado";
 choices[46][2] = "C&oacute;decs";
 choices[46][3] = "Claves";
 answers[46] = choices[46][2];
 units[46] = "109";
 comments[46] = "Id Pregunta: 5048. Examen TIC A 2007";


//  Id pregunta: 5164 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  Seg&uacute;n el Plan T&eacute;cnico Nacional de la Radiodifusi&oacute;n Sonora Digital Terrenal, cada bloque de frecuencias (de 1,536 MHz) integrar&aacute;:";
 choices[47]= new Array();
 choices[47][0] = "Al menos cuatro programas diferentes";
 choices[47][1] = "Un &uacute;nico programa";
 choices[47][2] = "Tantos programas diferentes como estime el concesionario";
 choices[47][3] = "Al menos seis programas diferentes";
 answers[47] = choices[47][3];
 units[47] = "105";
 comments[47] = "Id Pregunta: 5164. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5513 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  Indique cu&aacute;l es una caracter&iacute;stica t&eacute;cnica de W-CDMA, utilizada en UMTS:";
 choices[48]= new Array();
 choices[48][0] = "Emplea radiocanales de 50MHz de ancho de banda";
 choices[48][1] = "Permite transmisiones multic&oacute;digo";
 choices[48][2] = "No admite duplexaci&oacute;n por divisi&oacute;n en frecuencia (FDD) ";
 choices[48][3] = "No admite duplexaci&oacute;n por divisi&oacute;n en el tiempo (TDD)";
 answers[48] = choices[48][1];
 units[48] = "108";
 comments[48] = "Id Pregunta: 5513. ";


//  Id pregunta: 5788 AÃ±o de creación de pregunta: 2009-01-01
 questions[49]= "50)  En un radioenlace:";
 choices[49]= new Array();
 choices[49][0] = "El enlace descendente trabaja siempre a frecuencias superiores que el enlace descendente";
 choices[49][1] = "El enlace ascendente trabaja a frecuencias iguales o inferiores que el enlace descendente";
 choices[49][2] = "El enlace descendente trabaja, a veces, a frecuencias inferiores que el enlace descendente";
 choices[49][3] = "El enlace ascendente trabaja, a veces, a frecuencias iguales o superiores que el enlace descendente";
 answers[49] = choices[49][1];
 units[49] = "108";
 comments[49] = "Id Pregunta: 5788. ";


//  Id pregunta: 5789 AÃ±o de creación de pregunta: 2009-01-01
 questions[50]= "51)  En comunicaciones m&oacute;viles:";
 choices[50]= new Array();
 choices[50][0] = "La raz&oacute;n por la que se usan frecuencia altas para las comunicaciones m&oacute;viles es porque se alcanzan m&aacute;s distancias que con frecuencias inferiores para la misma potencia radiada";
 choices[50][1] = "El sentido de transmisi&oacute;n de estaci&oacute;n m&oacute;vil a estaci&oacute;n terrena suele ocupar la banda inferior de las dos en que se dividen los sistemas TDD.";
 choices[50][2] = "Las bandas de frecuencia m&aacute;s bajas suelen estar asociadas a mayores anchos de banda que las bandas de frecuencias m&aacute;s altas.";
 choices[50][3] = "Todas las anteriores son falsas.";
 answers[50] = choices[50][3];
 units[50] = "108";
 comments[50] = "Id Pregunta: 5789. ";


//  Id pregunta: 5828 AÃ±o de creación de pregunta: 2009-01-01
 questions[51]= "52)  Con respecto a la tecnolog&iacute;a conocida como &quot;SONET&quot; (terminolog&iacute;a de EEUU) &oacute; SDH / JDS (terminolog&iacute;a en Europa), &iquest;cu&aacute;l de las expresiones siguientes es INCORRECTA?";
 choices[51]= new Array();
 choices[51][0] = "Especialmente concebida para funcionar sobre fibra &oacute;ptica, con velocidades normalizadas que son m&uacute;ltiplos de una se&ntilde;al base de 155 Mbps denominada STM-1";
 choices[51][1] = "Proporciona flexibilidad en acceso, capacidad de gesti&oacute;n, seguridad y protecci&oacute;n pero no permite integraci&oacute;n de voz, datos y multimedia";
 choices[51][2] = "La inclusi&oacute;n de canales de control dentro de una trama SDH posibilita un control software total de la red";
 choices[51][3] = "En una red SDH los elementos de red se monitorizan extremo a extremo y se gestiona el mantenimiento de la integridad de la misma, lo que permite la inmediata identificaci&oacute;n de fallo en un enlace &oacute; nodo de la red";
 answers[51] = choices[51][1];
 units[51] = "109";
 comments[51] = "Id Pregunta: 5828. MAP 2008 A1";


//  Id pregunta: 5902 AÃ±o de creación de pregunta: 2009-01-01
 questions[52]= "53)  La tecnolog&iacute;a conocida como de Acceso M&uacute;ltiple por Divisi&oacute;n en c&oacute;digo de banda ancha (WCDMA), &iquest;a qu&eacute; est&aacute;ndar corresponde?";
 choices[52]= new Array();
 choices[52][0] = "GPRS";
 choices[52][1] = "UMTS";
 choices[52][2] = "GSM";
 choices[52][3] = "DECT";
 answers[52] = choices[52][1];
 units[52] = "108";
 comments[52] = "Id Pregunta: 5902. MAP 2008 A1";


//  Id pregunta: 6002 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)  Seg&uacute;n la Decisi&oacute;n de la CEPT ECC/DEC/(04)08, un sistema WIFI en la banda de 5.470-5.725 Mhz debe tener una potencia is&oacute;tropa radiada equivalente:";
 choices[53]= new Array();
 choices[53][0] = "Inferior o igual a 1 W.";
 choices[53][1] = "Superior a 1 W e inferior o igual a 2 W.";
 choices[53][2] = "Superior a 2 W e inferior o igual a 5 W.";
 choices[53][3] = "Superior a 5 W e inferior o igual a 10 W.";
 answers[53] = choices[53][0];
 units[53] = "107";
 comments[53] = "Id Pregunta: 6002. TIC A 2009";


//  Id pregunta: 6071 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  &iquest;Qu&eacute; regula la normativa de ICT (Infraestructuras Comunes de Telecomunicaci&oacute;n)?";
 choices[54]= new Array();
 choices[54][0] = "El acceso a los servicios de telecomunicaci&oacute;n en el interior de los edificios";
 choices[54][1] = "Los servicios de difusi&oacute;n de radio y televisi&oacute;n por cable";
 choices[54][2] = "La consideraci&oacute;n de Internet como servicio universal";
 choices[54][3] = "Ninguna de las anteriores";
 answers[54] = choices[54][0];
 units[54] = "105";
 comments[54] = "Id Pregunta: 6071. ";


//  Id pregunta: 6074 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  &iquest;Qui&eacute;n es el responsable del est&aacute;ndar DVB-T para la emisi&oacute;n de TDT?";
 choices[55]= new Array();
 choices[55][0] = "CEN/CENELEC";
 choices[55][1] = "ETSI";
 choices[55][2] = "UIT-T";
 choices[55][3] = "IEEE";
 answers[55] = choices[55][1];
 units[55] = "105";
 comments[55] = "Id Pregunta: 6074. ";


//  Id pregunta: 6143 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  En relaci&oacute;n con los c&oacute;decs que se utilizan en sistemas de telefon&iacute;a:";
 choices[56]= new Array();
 choices[56][0] = "G.711 utiliza el algoritmo PCM y es el c&oacute;dec que garantiza la mayor calidad de sonido por lo que se suele utilizar en entornos LAN de VoIP";
 choices[56][1] = "G.729 es el algoritmo m&aacute;s extendido en sistemas de VoIP sobre WAN, ya que aunque tiene p&eacute;rdida por compresi&oacute;n la calidad de sonido (MOS) es buena";
 choices[56][2] = "El c&oacute;dec que se utiliza en GSM (GSM 06.10) proporciona una calidad de sonido peor que G.711 y G.729";
 choices[56][3] = "Todas las respuestas anteriores son correctas";
 answers[56] = choices[56][3];
 units[56] = "100, 109";
 comments[56] = "Id Pregunta: 6143. ";


//  Id pregunta: 6561 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  GSM se caracteriza por";
 choices[57]= new Array();
 choices[57][0] = "Enlace ascendente 880-905 MHz";
 choices[57][1] = "Enlace ascendente 890-915 MHz";
 choices[57][2] = "Enlace descendente 890-915 MHz";
 choices[57][3] = "Todas las respuestas anteriores son incorrectos";
 answers[57] = choices[57][1];
 units[57] = "108";
 comments[57] = "Id Pregunta: 6561. NULL";


//  Id pregunta: 6562 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  GSM no utiliza";
 choices[58]= new Array();
 choices[58][0] = "Esquema de protecci&oacute;n mediante salto RF";
 choices[58][1] = "Transmisi&oacute;n discontinua";
 choices[58][2] = "Transmisi&oacute;n continua";
 choices[58][3] = "Paging";
 answers[58] = choices[58][2];
 units[58] = "108";
 comments[58] = "Id Pregunta: 6562. NULL";


//  Id pregunta: 6564 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  GPRS no se caracteriza por";
 choices[59]= new Array();
 choices[59][0] = "Servicio simult&aacute;neo de voz y datos";
 choices[59][1] = "No existe multiplexaci&oacute;n de voz y datos";
 choices[59][2] = "Servicio no orientado a conexi&oacute;n";
 choices[59][3] = "Tarificaci&oacute;n por volumen de datos intercambiado";
 answers[59] = choices[59][1];
 units[59] = "108";
 comments[59] = "Id Pregunta: 6564. NULL";


//  Id pregunta: 7287 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  Las redes de pr&oacute;xima generaci&oacute;n (NGN) son seg&uacute;n la UIT (uni&oacute;n internacional de telecomunicaciones):";
 choices[60]= new Array();
 choices[60][0] = "Las redes que engloban las nuevas tecnolog&iacute;as inal&aacute;mbricas, tambi&eacute;n conocidas como redes de cuarta generaci&oacute;n (4G)";
 choices[60][1] = "Las redes que ser&aacute;n desplegadas para la generaci&oacute;n del siglo XXI, las cuales garantizar&aacute;n una cobertura real del 100%";
 choices[60][2] = "Las redes de los pr&oacute;ximos a&ntilde;os, basadas en el protocolo Internet IP y que ser&aacute;n utilizadas para todo tipo de servicios";
 choices[60][3] = "Las futuras redes basadas en conmutaci&oacute;n de circuitos, que proporcionar&aacute;n una calidad de servicio superior y permitir&aacute;n comunicaciones de voz y datos a altas velocidades";
 answers[60] = choices[60][2];
 units[60] = "100, 107";
 comments[60] = "Id Pregunta: 7287. Examen TIC B 2009";


//  Id pregunta: 7289 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  La recomendaci&oacute;n de la UIT H.323";
 choices[61]= new Array();
 choices[61][0] = "Se utiliza &uacute;nicamente en redes RDSI";
 choices[61][1] = "Permite audioconferencia pero no videoconferencia";
 choices[61][2] = "Se le puede a&ntilde;adir seguridad seg&uacute;n la recomendaci&oacute;n de la UIT H.325";
 choices[61][3] = "Fue definida para redes de conmutaci&oacute;n de circuitos";
 answers[61] = choices[61][2];
 units[61] = "117";
 comments[61] = "Id Pregunta: 7289. Examen TIC B 2009";


//  Id pregunta: 8184 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  Conforme a la especificaci&oacute;n 3GPP TS 03.60, GPRS se implementa l&oacute;gicamente a&ntilde;adiendo a la estructura de GSM los nodos Serving GPRS Support Node (SGSN) y Gateway GPRS Support Node (GGSN). &iquest;Cu&aacute;l es la afirmaci&oacute;n correcta?:";
 choices[62]= new Array();
 choices[62][0] = "Entre ambos tipos de nodos se define la Intefaz Gn si est&aacute;n situados en la misma red m&oacute;vil (PLMN).";
 choices[62][1] = "El SGSN es el nodo de interconexi&oacute;n con la Red de Conmutaci&oacute;n de Paquetes o Packet Data Network (PDN).";
 choices[62][2] = "La funcionalidad proporcionada por SGSN y GGSN debe residir en diferentes nodos f&iacute;sicos.";
 choices[62][3] = "Entre ambos tipos de nodos se define la Intefaz Gi si est&aacute;n situados en distinta red m&oacute;vil (PLMN).";
 answers[62] = choices[62][0];
 units[62] = "108";
 comments[62] = "Id Pregunta: 8184. Examen TIC A1 2010";


//  Id pregunta: 8212 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  Los equipos &quot;Bluetooth&quot; emplean:";
 choices[63]= new Array();
 choices[63][0] = "Transmisi&oacute;n por espectro expandido mediante secuencia directa.";
 choices[63][1] = "Transmisi&oacute;n por espectro expandido mediante salto de frecuencias.";
 choices[63][2] = "Un algoritmo de control de acceso al medio basado en CDMA/CD.";
 choices[63][3] = "Un algoritmo de control de acceso al medio basado en CDMA/CA.";
 answers[63] = choices[63][1];
 units[63] = "107";
 comments[63] = "Id Pregunta: 8212. Examen TIC A1 2010";


//  Id pregunta: 8219 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  En relaci&oacute;n a la seguridad en redes inal&aacute;mbricas, cu&aacute;l de las siguientes afirmaciones es FALSA:";
 choices[64]= new Array();
 choices[64][0] = "Entre los mecanismos b&aacute;sicos de seguridad aplicables en redes inal&aacute;mbricas, se encuentran: 1. Ocultaci&oacute;n del SSID (identificador de red). 2. Filtrado MAC. 3. Ajuste de potencia. 4. Uso de mecanismos de autenticaci&oacute;n y cifrado.";
 choices[64][1] = "El ataque DoS, &quot;Clear Channel Assesments&quot;, basado en falsear el mecanismo CCA, afecta a dispositivos 802.11a, 802.11b y 802.11g.";
 choices[64][2] = "Una RSN &quot;Robust Security Network&quot; es una red de seguridad en la que todas las asociaciones entre sus miembros se basan en fuertes mecanismos criptogr&aacute;ficos y de autenticaci&oacute;n.";
 choices[64][3] = "AirMagnet, Airodump, Aireplay, Kismet y Netstumbler, son herramientas inform&aacute;ticas que permiten estudiar redes inal&aacute;mbricas.";
 answers[64] = choices[64][1];
 units[64] = "107";
 comments[64] = "Id Pregunta: 8219. Examen TIC A1 2010";


//  Id pregunta: 8267 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  Referente a la pila de protocolos de la familia ITU H.323 para el tr&aacute;fico multimedia sobre redes IP, la afirmaci&oacute;n correcta es:";
 choices[65]= new Array();
 choices[65][0] = "Requiere el uso del protocolo Registration, Admission and Status (RAS) entre los terminales.";
 choices[65][1] = "Emplea el protocolo TCP/IP para el env&iacute;o de la informaci&oacute;n multimedia pues UDP no garantiza el control de flujo y errores.";
 choices[65][2] = "Emplea Real-Time Control Protocol (RTCP) para la se&ntilde;alizaci&oacute;n (establecimiento, control y finalizaci&oacute;n) de llamadas.";
 choices[65][3] = "Emplea el protocolo T.120 para la inclusi&oacute;n de tr&aacute;fico de datos.";
 answers[65] = choices[65][3];
 units[65] = "117";
 comments[65] = "Id Pregunta: 8267. Examen TIC A1 2010";


//  Id pregunta: 8319 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  De las siguientes opciones, se&ntilde;ale aquella que representa la m&aacute;xima velocidad a la que un dispositivo inal&aacute;mbrico puede enviar datos conforme al est&aacute;ndar IEEE indicado:";
 choices[66]= new Array();
 choices[66][0] = "802.11a usando DSSS, a 11 Mbps. ";
 choices[66][1] = "802.11a usando DSSS, a 54 Mbps. ";
 choices[66][2] = "802.11b usando OFDM, a 54 Mbps";
 choices[66][3] = "802.11g usando OFDM, a 54 Mbps.";
 answers[66] = choices[66][3];
 units[66] = "107";
 comments[66] = "Id Pregunta: 8319. Examen TIC A2 2010";


//  Id pregunta: 8328 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  La tecnologia IDSL (ISDN Digital Subscriber Line):";
 choices[67]= new Array();
 choices[67][0] = "Se utiliza para transportar voz y datos";
 choices[67][1] = "Es asim&eacute;trica";
 choices[67][2] = "Utiliza 3 pares de hilos";
 choices[67][3] = "Alcanza una distancia m&aacute;xima de 5,5 Km.";
 answers[67] = choices[67][3];
 units[67] = "109";
 comments[67] = "Id Pregunta: 8328. Analista Ayto. Madrid 2010";


//  Id pregunta: 8419 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  &iquest;Qu&eacute; tecnolog&iacute;a inal&aacute;mbrica de corto alcance y alta frecuencia permite el intercambio de datos entre dispositivos, siendo su uso m&aacute;s frecuente el pago mediante el m&oacute;vil?";
 choices[68]= new Array();
 choices[68][0] = "Bluetooth";
 choices[68][1] = "PayPal Mobile";
 choices[68][2] = "NFC (Near Field Communication)";
 choices[68][3] = "3D Secure";
 answers[68] = choices[68][2];
 units[68] = "70, 107";
 comments[68] = "Id Pregunta: 8419. ";


//  Id pregunta: 8468 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  GPRS es un servicio que soporta la transmisi&oacute;n de paquetes via radio:";
 choices[69]= new Array();
 choices[69][0] = "Utilizando el protocolo HSDPA y el mismo BSS de GSM";
 choices[69][1] = "Utilizando el protocolo IP y el mismo BSS de GSM";
 choices[69][2] = "Utilizando el protocolo IP y transmisi&oacute;n WCDMA de banda ancha";
 choices[69][3] = "Ninguna de las anteriores";
 answers[69] = choices[69][1];
 units[69] = "108";
 comments[69] = "Id Pregunta: 8468. Analista Ayto. Madrid 2010";


//  Id pregunta: 8531 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  &iquest;Qu&eacute; es un &quot;splitter&quot;. en el entorno de la tecnolog&iacute;a ADSL?";
 choices[70]= new Array();
 choices[70][0] = "Es un filtro separador de bandas en casa del abonado.";
 choices[70][1] = "Es un dispositivo opcional de mejora de calidad, &uacute;nicamente es Imprescindible en el caso de ADSL-lite.";
 choices[70][2] = "Es un efecto indeseable en la linea consistente en el acoplamiento inductivo y capacitivo entre diferentes hilos dentro del mismo mazo o mazos adyacentes.";
 choices[70][3] = "Es el mecanismo mediante el cual el operador establecido ha de ceder al nuevo operador a conexi&oacute;n a &quot;su&quot; abonado";
 answers[70] = choices[70][0];
 units[70] = "107";
 comments[70] = "Id Pregunta: 8531. Examen TIC A2 2010 interna";


//  Id pregunta: 8533 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  &iquest;Qu&eacute; m&eacute;todo de codificaci&oacute;n de la voz NO realiza compresi&oacute;n?";
 choices[71]= new Array();
 choices[71][0] = "LD-CELP (Low-Delay Code-Excited Linear Prediction).";
 choices[71][1] = "CS-ACELP (Conjugate-Structured Algebraic Code-Excited Linear Prediction)";
 choices[71][2] = "PCM (Pulse-Code Modulation).";
 choices[71][3] = "ADPCM (Adaptative Differential Pulse Code Modulation)";
 answers[71] = choices[71][2];
 units[71] = "117";
 comments[71] = "Id Pregunta: 8533. Examen TIC A2 2010 interna";


//  Id pregunta: 8535 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  &iquest;Qu&eacute; tecnolog&iacute;a de acceso permite un tipo de servicio tanto sim&eacute;trico como asim&eacute;trico?";
 choices[72]= new Array();
 choices[72][0] = "SHDSL";
 choices[72][1] = "HDSL";
 choices[72][2] = "ADSL2";
 choices[72][3] = "VDSL";
 answers[72] = choices[72][3];
 units[72] = "107";
 comments[72] = "Id Pregunta: 8535. Examen TIC A2 2010 interna";


//  Id pregunta: 8541 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  &iquest;En qu&eacute; a&ntilde;o ha concluido el apag&oacute;n anal&oacute;gico en Espa&ntilde;a?";
 choices[73]= new Array();
 choices[73][0] = "2007";
 choices[73][1] = "2008";
 choices[73][2] = "2009";
 choices[73][3] = "2010";
 answers[73] = choices[73][3];
 units[73] = "105";
 comments[73] = "Id Pregunta: 8541. Examen TIC A2 2010 interna";


//  Id pregunta: 8844 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)   En los sistemas de colaboraci&oacute;n s&iacute;ncronos";
 choices[74]= new Array();
 choices[74][0] = " No es posible utilizar la tecnolog&iacute;a multicast ";
 choices[74][1] = " Todos est&aacute;n basados en interfaces WWW ";
 choices[74][2] = "Se ampl&iacute;an las funcionalidades de los sistemas de videoconferencia cl&aacute;sicos.";
 choices[74][3] = " Su est&aacute;ndar viene definido por el W3C";
 answers[74] = choices[74][2];
 units[74] = "117";
 comments[74] = "Id Pregunta: 8844. Examen UC3M 2010";


//  Id pregunta: 8990 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  El est&aacute;ndar de telefon&iacute;a m&oacute;vil LTE (Long Term Evolution), emplea";
 choices[75]= new Array();
 choices[75][0] = "MIMO";
 choices[75][1] = "FDD";
 choices[75][2] = "TDD";
 choices[75][3] = "Todas las anteriores";
 answers[75] = choices[75][3];
 units[75] = "107";
 comments[75] = "Id Pregunta: 8990. NULL";


//  Id pregunta: 9000 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  ATM ofrece las siguientes clases de servicio de tiempo real:";
 choices[76]= new Array();
 choices[76][0] = "CBR y GFR";
 choices[76][1] = "ABR y CBR";
 choices[76][2] = "ABR y GFR";
 choices[76][3] = "CBR y rt-VBR";
 answers[76] = choices[76][3];
 units[76] = "109";
 comments[76] = "Id Pregunta: 9000. Examen UPM A2 2011";


//  Id pregunta: 9383 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  Se&ntilde;ale la respuesta incorrecta en relaci&oacute;n con 4G:";
 choices[77]= new Array();
 choices[77][0] = "Admite la utilizaci&oacute;n de antenas MIMO";
 choices[77][1] = "Para el servicio de voz utiliza el canal VOL, cuyo acceso se negocia previamente a trav&eacute;s del canal VOL-ALLOC";
 choices[77][2] = "Utiliza modulaciones adaptativas para el aprovechamiento &oacute;ptimo del canal.";
 choices[77][3] = "Utiliza multiplexaci&oacute;n estad&iacute;stica en el dominio de la frecuencia.";
 answers[77] = choices[77][1];
 units[77] = "108";
 comments[77] = "Id Pregunta: 9383. NULL";


//  Id pregunta: 9398 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  En el modelo de referencia de ATM, &iquest;cu&aacute;ntos planos se especifican?";
 choices[78]= new Array();
 choices[78][0] = "Dos (usuario y se&ntilde;alizaci&oacute;n). ";
 choices[78][1] = "Tres (usuario, control/se&ntilde;alizaci&oacute;n y administraci&oacute;n).";
 choices[78][2] = "Dos (datos estructurados y datos no estructurados). ";
 choices[78][3] = "Tres (datos, voz y video). ";
 answers[78] = choices[78][1];
 units[78] = "109";
 comments[78] = "Id Pregunta: 9398. TIC AGE A2 2011 Promo Int";


//  Id pregunta: 9403 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  RTP (Real time protocol) se utiliza en ToIP (telefon&iacute;a IP) para";
 choices[79]= new Array();
 choices[79][0] = "Mantener sincronizados los relojes de los tel&eacute;fonos.";
 choices[79][1] = "Nada. Lo que se utiliza es RTCP (real time control protocol)";
 choices[79][2] = "Transmitir la voz: una vez codificada se encapsula como payload de RTP en datagramas UDP.";
 choices[79][3] = "Ninguna de las anteriores";
 answers[79] = choices[79][2];
 units[79] = "109";
 comments[79] = "Id Pregunta: 9403. T&eacute;cnico Teleco Ayto Madrid 2010";


//  Id pregunta: 9405 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  QSIG es";
 choices[80]= new Array();
 choices[80][0] = "Un protocolo de se&ntilde;alizaci&oacute;n normalizado a nivel internacional para su uso entre Private Automatic Branch eXchanges (PABX).";
 choices[80][1] = "Un sistema de calidad aplicado a la telefon&iacute;a SIP.";
 choices[80][2] = "Una extensi&oacute;n a SS7 que puede enviarse sobre IP.";
 choices[80][3] = "Ninguna de las anteriores";
 answers[80] = choices[80][0];
 units[80] = "109";
 comments[80] = "Id Pregunta: 9405. T&eacute;cnico Teleco Ayto Madrid 2010";


//  Id pregunta: 9526 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  Se&ntilde;ale la afimaci&oacute;n falsa con respecto al protocolo H.329:";
 choices[81]= new Array();
 choices[81][0] = "Es un protocolo que define la se&ntilde;alizaci&oacute;n de llamadas";
 choices[81][1] = "Es un protocolo que permite la inclusi&oacute;n de tr&aacute;fico de datos";
 choices[81][2] = "Especifica un protocolo para el control y etiquetado de dos canales simult&aacute;neos en una &uacute;nica videoconferencia";
 choices[81][3] = "Simplifica y complementa al protocolo T.120";
 answers[81] = choices[81][0];
 units[81] = "117";
 comments[81] = "Id Pregunta: 9526. NULL";


//  Id pregunta: 9938 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  &iquest;Cu&aacute;l es la principal raz&oacute;n por la que en las comunicaciones UMTS y Wi-Fi seutilizan t&eacute;cnicas de expansi&oacute;n del espectro o espectro ensanchado?";
 choices[82]= new Array();
 choices[82][0] = "Para mejorar la resistencia a las interferencias.";
 choices[82][1] = "Para mejorar las seguridad en el acceso al informaci&oacute;n transmitida.";
 choices[82][2] = "Para incrementar la longitud de onda y reducir el consumo energ&eacute;tico.";
 choices[82][3] = "Wi-Fi no utiliza estas t&eacute;cnicas.";
 answers[82] = choices[82][0];
 units[82] = "107, 108";
 comments[82] = "Id Pregunta: 9938. TIC A1, Examen 2013";


//  Id pregunta: 10001 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  EuroDOCSIS";
 choices[83]= new Array();
 choices[83][0] = "Significa, en el &aacute;mbito de la Uni&oacute;n Europea, DOCument System Interface Service, y hace referencia a un est&aacute;ndar de gesti&oacute;n documental.";
 choices[83][1] = "es una extensi&oacute;n de DOCSIS especificada por ETSI para el &aacute;mbito Europeo.";
 choices[83][2] = "significa, en el &aacute;mbito de la zona Euro, Digital Open Currency System Interface Standard.";
 choices[83][3] = "es un est&aacute;ndar propietario de gesti&oacute;n documental de amplia implantaci&oacute;n enEuropa.";
 answers[83] = choices[83][1];
 units[83] = "105";
 comments[83] = "Id Pregunta: 10001. ";


//  Id pregunta: 10046 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  El algoritmo PLC (Packet Loss Concealment):";
 choices[84]= new Array();
 choices[84][0] = "Lo utiliza Frame Relay para el reenv&iacute;o de tramas p&eacute;rdidas por la congesti&oacute;n en el sentido de la transmisi&oacute;n.";
 choices[84][1] = "Algoritmo de ocultamiento de p&eacute;rdida de paquetes utilizado por VoIP.";
 choices[84][2] = "Utilizado por TCP para la retransmisi&oacute;n de paquetes despu&eacute;s de una trama NACK (negative acknowledgement).";
 choices[84][3] = "Algoritmo de descarte de paquetes en situaci&oacute;n de congesti&oacute;n en redes Frame Relay.";
 answers[84] = choices[84][1];
 units[84] = "109";
 comments[84] = "Id Pregunta: 10046. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10063 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  &iquest;Cu&aacute;l de los siguientes canales de acceso NO se emplea en RDSI?";
 choices[85]= new Array();
 choices[85][0] = "B ";
 choices[85][1] = "D";
 choices[85][2] = "H ";
 choices[85][3] = "I";
 answers[85] = choices[85][3];
 units[85] = "103, 109";
 comments[85] = "Id Pregunta: 10063. TIC A2, libre, Examen 2013";


//  Id pregunta: 10069 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Analizando los problemas con la calidad de servicio en VoIP, &iquest;qu&eacute; se entiende por jitter?";
 choices[86]= new Array();
 choices[86][0] = "Una reflexi&oacute;n retardada de la se&ntilde;al ac&uacute;stica original.";
 choices[86][1] = "El tiempo que tarda un paquete en llegar desde la fuente al destino.";
 choices[86][2] = "Variaci&oacute;n en el tiempo de llegada de los paquetes, causada por congesti&oacute;n de red, perdida de sincronizaci&oacute;n o por las diferentes rutas seguidas.";
 choices[86][3] = "Cantidad de informaci&oacute;n o de datos que se puede enviar a trav&eacute;s de una conexi&oacute;n de red en un per&iacute;odo de tiempo dado.";
 answers[86] = choices[86][2];
 units[86] = "109";
 comments[86] = "Id Pregunta: 10069. TIC A2, libre, Examen 2013";


//  Id pregunta: 10138 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  &iquest;Qu&eacute; novedad introduce el est&aacute;ndar DOCSIS 3.1?";
 choices[87]= new Array();
 choices[87][0] = "No existe dicho est&aacute;ndar";
 choices[87][1] = "Puede soportar hasta 10 Gbit/s de bajada";
 choices[87][2] = "Permite el uso de tecnolog&iacute;as S-CDMA";
 choices[87][3] = "Permite el ajuste de diferentes niveles de calidad de servicio, seg&uacute;n el servicio empleado";
 answers[87] = choices[87][1];
 units[87] = "105";
 comments[87] = "Id Pregunta: 10138. ";


//  Id pregunta: 10200 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  &iquest;Cual de las siguientes afirmaciones es correcta respecto al estandar IEEE 802.11ac?";
 choices[88]= new Array();
 choices[88][0] = "Mejora las tasas de transferencia hasta 1 Gbit/s dentro de la banda de 5 GHz ampliando el ancho de banda hasta 80 MHz, usando hasta 4 flujos MIMO y con modulaci&oacute;n de alta densidad (256 QAM)";
 choices[88][1] = "Mejora las tasas de transferencia hasta 1 Gbit/s dentro de la banda de 2,4 GHz ampliando el ancho de banda hasta 160 MHz, usando hasta 8 flujos MIMO y con modulaci&oacute;n de alta densidad (512 QAM)";
 choices[88][2] = "Mejora las tasas de transferencia hasta 1 Gbit/s dentro de la banda de 2,4 GHz ampliando el ancho de banda hasta 80 MHz, usando hasta 4 flujos MIMO y con modulaci&oacute;n de alta densidad (256 QAM)";
 choices[88][3] = "Mejora las tasas de transferencia hasta 1 Gbit/s dentro de la banda de 5 GHz ampliando el ancho de banda hasta 160 MHz, usando hasta 8 flujos MIMO y con modulaci&oacute;n de alta densidad (256 QAM)";
 answers[88] = choices[88][3];
 units[88] = "107";
 comments[88] = "Id Pregunta: 10200. NULL";


//  Id pregunta: 10434 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  Los sistemas de videoconferencia";
 choices[89]= new Array();
 choices[89][0] = "pueden utilizar conmutaci&oacute;n de circuitos sobre la RDSI usando el protocolo H.326. ";
 choices[89][1] = "pueden utilizar redes IP con el protocolo H.323. ";
 choices[89][2] = "pueden utilizar redes IP s&oacute;lo si usan el protocolo SIP.";
 choices[89][3] = "pueden utilizar conmutaci&oacute;n de paquetes sobre RDSI, multiplexando las se&ntilde;ales de las distintas localizaciones si usan el protocolo H.328. ";
 answers[89] = choices[89][1];
 units[89] = "117";
 comments[89] = "Id Pregunta: 10434. Examen TIC A1 2013";


//  Id pregunta: 10444 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas sobre las redes GPRS es FALSA?";
 choices[90]= new Array();
 choices[90][0] = "Puede alcanzar velocidades de hasta 236 kbps de descarga. ";
 choices[90][1] = "Son redes orientadas a conexi&oacute;n.";
 choices[90][2] = "Pueden ofrecer servicios de mensajer&iacute;a instant&aacute;nea.";
 choices[90][3] = "Ofrecen servicios de transmisi&oacute;n digital de datos.";
 answers[90] = choices[90][1];
 units[90] = "108";
 comments[90] = "Id Pregunta: 10444. Examen TIC A1 2013";


//  Id pregunta: 10514 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  &iquest;Qu&eacute; RFC define el Estandar SIP?";
 choices[91]= new Array();
 choices[91][0] = "RFC 3160";
 choices[91][1] = "RFC 6130";
 choices[91][2] = "RFC 3610";
 choices[91][3] = "RFC 3261";
 answers[91] = choices[91][3];
 units[91] = "109";
 comments[91] = "Id Pregunta: 10514. NULL";


//  Id pregunta: 10879 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Se&ntilde;ale qu&eacute; norma del IEEE normaliza la tecnolog&iacute;a Power over Ethernet Plus (PoE +):";
 choices[92]= new Array();
 choices[92][0] = "IEEE 802.3ab";
 choices[92][1] = "IEEE 802.3at";
 choices[92][2] = "IEEE 802.3ap";
 choices[92][3] = "No es un est&aacute;ndar del IEEE sino que es una categor&iacute;a de EIA/TIA 568b.";
 answers[92] = choices[92][1];
 units[92] = "107";
 comments[92] = "Id Pregunta: 10879. Examen GSI 2014";


//  Id pregunta: 10913 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Se&ntilde;ale la afirmaci&oacute;n correcta respecto al est&aacute;ndar IEEE 802.11ac-2013:";
 choices[93]= new Array();
 choices[93][0] = "Ampl&iacute;a ancho de banda de canal a 160 MHz y opera en la banda de 2,4 GHz.";
 choices[93][1] = "Ampl&iacute;a ancho de banda de canal a 40 MHz y opera en la banda de 2,4 GHz.";
 choices[93][2] = "Ampl&iacute;a ancho de banda de canal a 80 MHz y opera en la banda de 60 GHz.";
 choices[93][3] = "Ampl&iacute;a ancho de banda de canal a 160 MHz y opera en la banda de 5 GHz.";
 answers[93] = choices[93][3];
 units[93] = "107";
 comments[93] = "Id Pregunta: 10913. Examen GSI 2014";


//  Id pregunta: 10964 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Respecto a RTMP (Real Time Messaging Protocol), se&ntilde;ale la respuesta correcta:";
 choices[94]= new Array();
 choices[94][0] = "Junto con ICMP proporciona las funciones de monitorizaci&oacute;n y control de TCP/IP.";
 choices[94][1] = "Permite la gesti&oacute;n conjunta de mensajer&iacute;a instant&aacute;nea y mensajes cortos GSM.";
 choices[94][2] = "Se emplea para la emisi&oacute;n en tiempo real de streaming de v&iacute;deo.";
 choices[94][3] = "Define el est&aacute;ndar de comunicaciones para los procesadores de sistemas de tiempo real cr&iacute;tico.";
 answers[94] = choices[94][2];
 units[94] = "117";
 comments[94] = "Id Pregunta: 10964. TIC A1 AGE 2014";


//  Id pregunta: 11182 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;C&oacute;mo se denominan los sistemas de comunicaciones m&oacute;viles que realizan la transmisi&oacute;n y recepci&oacute;n de forma secuencial en un sentido cada vez?";
 choices[95]= new Array();
 choices[95][0] = "Paralelos";
 choices[95][1] = "D&uacute;plex";
 choices[95][2] = "Semi-duplex";
 choices[95][3] = "Ninguno de los anteriores";
 answers[95] = choices[95][2];
 units[95] = "108";
 comments[95] = "Id Pregunta: 11182. ";


//  Id pregunta: 11572 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Cu&aacute;l no es una modulaci&oacute;n para DSL?";
 choices[96]= new Array();
 choices[96][0] = "CAP";
 choices[96][1] = "FSK";
 choices[96][2] = "DMT";
 choices[96][3] = "WDMT";
 answers[96] = choices[96][1];
 units[96] = "107";
 comments[96] = "Id Pregunta: 11572. NULL";


//  Id pregunta: 11573 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Se&ntilde;ale la respuesta incorrecta sobre ADSL 2";
 choices[97]= new Array();
 choices[97][0] = "Emplea un ancho de banda mayor que el ADSL original";
 choices[97][1] = "Puede emplear varias l&iacute;neas telef&oacute;nicas para un &uacute;nica comunicaci&oacute;n";
 choices[97][2] = "Est&aacute; basado en la tecnolog&iacute;a STTH";
 choices[97][3] = "Puede emplear el ancho de banda para telefon&iacute;a obteniendo un amayor velocidad de transmisi&oacute;n de datos.";
 answers[97] = choices[97][2];
 units[97] = "107";
 comments[97] = "Id Pregunta: 11573. NULL";


//  Id pregunta: 11577 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  En una red H.323, &iquest;Qu&iacute;en tiene las funciones de DNS?";
 choices[98]= new Array();
 choices[98][0] = "MCU";
 choices[98][1] = "LMU";
 choices[98][2] = "GateKeeper";
 choices[98][3] = "GateControler";
 answers[98] = choices[98][2];
 units[98] = "117";
 comments[98] = "Id Pregunta: 11577. NULL";


//  Id pregunta: 11579 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  La velocidad y el ancho de banda en las celdas LTE es:";
 choices[99]= new Array();
 choices[99][0] = "Subida hasta 326Mbps y ancho de canal de 5Mhz";
 choices[99][1] = "Subida hasta 2Mbps y ancho de canal de 5Mhz";
 choices[99][2] = "Subida hasta 256Mbps y ancho de canal de 200Khz";
 choices[99][3] = "Subida hasta 1Gpbs y ancho de canal de 160Mhz";
 answers[99] = choices[99][0];
 units[99] = "107";
 comments[99] = "Id Pregunta: 11579. NULL";


