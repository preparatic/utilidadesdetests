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

//  Id pregunta: 2952 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  Los documentos que definen los est&aacute;ndares de facto de internet se denominan:";
 choices[0]= new Array();
 choices[0][0] = "RFC";
 choices[0][1] = "IETF";
 choices[0][2] = "IANA";
 choices[0][3] = "Se definen en la serie ITU-T X.(n&uacute;mero de est&aacute;ndar) ";
 answers[0] = choices[0][0];
 units[0] = "112";
 comments[0] = "Id Pregunta: 2952. Similar a examen TIC SS A 2003";


//  Id pregunta: 2960 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  Qu&eacute; es falso a prop&oacute;sito de GPRS";
 choices[1]= new Array();
 choices[1][0] = "Utiliza una configuraci&oacute;n de frecuencias fija";
 choices[1][1] = "Es una red de paquetes";
 choices[1][2] = "Funciona reservando ranuras de tiempo en frecuencias determinadas para el intercambio de paquetes";
 choices[1][3] = "Est&aacute; construida encima de redes GSM";
 answers[1] = choices[1][0];
 units[1] = "108";
 comments[1] = "Id Pregunta: 2960. Tanenbaum";


//  Id pregunta: 3088 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  Se dice que una l&iacute;nea es 'half duplex' cuando:";
 choices[2]= new Array();
 choices[2][0] = "Los terminales de datos de ambos extremos de la l&iacute;nea, pueden transmitir simult&aacute;neamente sin restricciones";
 choices[2][1] = "Los terminales de datos de ambos extremos de la l&iacute;nea, son se&ntilde;alizados por la red para poder comenzar su turno de transmisi&oacute;n";
 choices[2][2] = "Los terminales de datos de ambos extremos de la l&iacute;nea utilizan una se&ntilde;alizaci&oacute;n especial para cambiar el sentido de transmisi&oacute;n del canal";
 choices[2][3] = "Los terminales de datos de ambos extremos de la l&iacute;nea, pueden transmitir de forma ininterrumpida independientemente de la actividad del otro terminal";
 answers[2] = choices[2][2];
 units[2] = "99";
 comments[2] = "Id Pregunta: 3088. ";


//  Id pregunta: 3194 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  Dentro del modelo OSI la funci&oacute;n de 'permitir la comunicaci&oacute;n simult&aacute;nea, utilizando una o varias direcciones de red, de una o varias sesiones de trabajo', corresponde al nivel:";
 choices[3]= new Array();
 choices[3][0] = "Nivel de red";
 choices[3][1] = "Nivel de transporte";
 choices[3][2] = "Nivel de sesi&oacute;n";
 choices[3][3] = "Nivel de presentaci&oacute;n";
 answers[3] = choices[3][1];
 units[3] = "100";
 comments[3] = "Id Pregunta: 3194. NULL";


//  Id pregunta: 3198 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  DVB/DAVIC y DOCSIS son est&aacute;ndares de:";
 choices[4]= new Array();
 choices[4][0] = "tecnolog&iacute;a inal&aacute;mbrica";
 choices[4][1] = "m&oacute;dems de cable";
 choices[4][2] = "tecnolog&iacute;a xDSL";
 choices[4][3] = "grabaci&oacute;n cd CDROMs";
 answers[4] = choices[4][1];
 units[4] = "105";
 comments[4] = "Id Pregunta: 3198. ";


//  Id pregunta: 3208 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  El comando de FTP que presenta los mensajes del servidor es:";
 choices[5]= new Array();
 choices[5][0] = "Dir ";
 choices[5][1] = "Pwd ";
 choices[5][2] = "Verbose ";
 choices[5][3] = "Lcd";
 answers[5] = choices[5][2];
 units[5] = "100";
 comments[5] = "Id Pregunta: 3208. Verbose:activa o desactiva modalidad informativa";


//  Id pregunta: 3260 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Cu&aacute;ntos terminales pueden ser usados simult&aacute;neamente en una RDSI con acceso b&aacute;sico?:";
 choices[6]= new Array();
 choices[6][0] = "S&oacute;lo 1 canal puede estar ocupado en un momento determinado";
 choices[6][1] = "2, ya que puede haber comunicaciones simult&aacute;neas en los canales B de datos";
 choices[6][2] = "1 por cada canal B mientras que el canal D puede ser utilizado por varios terminales en modo paquete";
 choices[6][3] = "3, ya que cada canal solo puede ser utilizado por un terminal a la vez, independientemente de su tipo";
 answers[6] = choices[6][2];
 units[6] = "103";
 comments[6] = "Id Pregunta: 3260. ";


//  Id pregunta: 3290 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Qu&eacute; es un puente (bridge) en el mundo de las comunicaciones?:";
 choices[7]= new Array();
 choices[7][0] = "Un equipo que enlaza varias redes a nivel 3 de OSI";
 choices[7][1] = "Un equipo que enlaza varias redes a nivel 4 de OSI";
 choices[7][2] = "Un equipo que enlaza varias redes a nivel 5 de OSI";
 choices[7][3] = "Nada de lo anterior  ";
 answers[7] = choices[7][3];
 units[7] = "102";
 comments[7] = "Id Pregunta: 3290. ";


//  Id pregunta: 3300 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Qu&eacute; nos dice el teorema del muestreo o teorema de Nyquist?:";
 choices[8]= new Array();
 choices[8][0] = "Que la frecuencia de muestreo debe ser mayor o igual que el doble del ancho de banda m&aacute;ximo de la se&ntilde;al para evitar p&eacute;rdidas en la transmisi&oacute;n (recuperar la se&ntilde;al exacta sin distorsi&oacute;n)";
 choices[8][1] = "Que la frecuencia de muestreo debe ser menor o igual que el doble del ancho de banda m&aacute;ximo de la se&ntilde;al para evitar p&eacute;rdidas en la transmisi&oacute;n (recuperar la se&ntilde;al exacta sin distorsi&oacute;n)";
 choices[8][2] = "Que la frecuencia de muestreo debe ser mayor o igual que el triple del ancho de banda m&aacute;ximo de la se&ntilde;al para evitar p&eacute;rdidas en la transmisi&oacute;n (recuperar la se&ntilde;al exacta sin distorsi&oacute;n)";
 choices[8][3] = "Que la frecuencia de muestreo debe ser mayor o igual que el cu&aacute;druple del ancho de banda m&aacute;ximo de la se&ntilde;al para evitar p&eacute;rdidas en la transmisi&oacute;n (recuperar la se&ntilde;al exacta sin distorsi&oacute;n)";
 answers[8] = choices[8][0];
 units[8] = "99";
 comments[8] = "Id Pregunta: 3300. NULL";


//  Id pregunta: 3350 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  Cuando se emplean tablas en HTML, &iquest;cu&aacute;l es el comando que permite definir nuevas filas de una tabla?:";
 choices[9]= new Array();
 choices[9][0] = "&lt;TD&gt;&hellip;&lt;/TD&gt;";
 choices[9][1] = "&lt;TR&gt;&hellip;&lt;/TR&gt;";
 choices[9][2] = "&lt;TH&gt;&hellip;&lt;/TH&gt;";
 choices[9][3] = "&lt;TF&gt;&hellip;&lt;/TF&gt;";
 answers[9] = choices[9][1];
 units[9] = "69";
 comments[9] = "Id Pregunta: 3350. NULL";


//  Id pregunta: 3354 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  De las siguientes direcciones IP para Internet s&oacute;lo una puede asignarse de forma correcta seg&uacute;n las normas que regulan el formato de estas direcciones:";
 choices[10]= new Array();
 choices[10][0] = "1";
 choices[10][1] = "198.70.8.255";
 choices[10][2] = "64.3.53.255";
 choices[10][3] = "640.13.53.40";
 answers[10] = choices[10][2];
 units[10] = "100";
 comments[10] = "Id Pregunta: 3354. NULL";


//  Id pregunta: 3385 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  El modelo OSI (Open System Interconnection, Interconexi&oacute;n de Sistemas Abiertos):";
 choices[11]= new Array();
 choices[11][0] = "Dispone de 5 niveles: f&iacute;sico, enlace, red, transporte, aplicaci&oacute;n, usuario";
 choices[11][1] = "Dispone de 7 niveles: f&iacute;sico, enlace, red, transporte, sesi&oacute;n, presentaci&oacute;n, aplicaci&oacute;n";
 choices[11][2] = "No fue pensado en su momento para comunicaci&oacute;n cliente-servidor, sino m&aacute;s bien comunicaci&oacute;n peer- to-peer";
 choices[11][3] = "Las opciones c) y b) son correctas";
 answers[11] = choices[11][3];
 units[11] = "100";
 comments[11] = "Id Pregunta: 3385. NULL";


//  Id pregunta: 3392 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  El nivel de sesi&oacute;n del modelo de referencia OSI :";
 choices[12]= new Array();
 choices[12][0] = "Permite a un usuario que la sintaxis y la sem&aacute;ntica del mensaje sea entendida por el destinatario";
 choices[12][1] = "Se encarga de coordinar aplicaciones como el correo electr&oacute;nico o la transferencia de documentos";
 choices[12][2] = "Permite a un usuario entrar en un sistema remoto y, si es necesario, transferir ficheros entre dichos sistemas";
 choices[12][3] = "Asegura que todos los fragmentos del mensaje lleguen a su destino";
 answers[12] = choices[12][2];
 units[12] = "100";
 comments[12] = "Id Pregunta: 3392. NULL";


//  Id pregunta: 3425 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Indicar entre las siguientes normas del IEEE la que trata sobre redes de banda ancha";
 choices[13]= new Array();
 choices[13][0] = "802.6";
 choices[13][1] = "802.7";
 choices[13][2] = "802.8";
 choices[13][3] = "802.9";
 answers[13] = choices[13][1];
 units[13] = "101";
 comments[13] = "Id Pregunta: 3425. ";


//  Id pregunta: 3429 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  Indicar entre las siguientes normas del IEEE la que trata sobre seguridad LAN/MAN interoperable:";
 choices[14]= new Array();
 choices[14][0] = "802.10";
 choices[14][1] = "802.11";
 choices[14][2] = "802.12";
 choices[14][3] = "802.13";
 answers[14] = choices[14][0];
 units[14] = "101";
 comments[14] = "Id Pregunta: 3429. ";


//  Id pregunta: 3469 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  El servicio Archie se utiliza para:";
 choices[15]= new Array();
 choices[15][0] = "navegar usando men&uacute;s sin conocer la direcci&oacute;n de la informaci&oacute;n";
 choices[15][1] = "recibir de un servidor las direcciones de bases de datos m&aacute;s adecuadas para responder a la pregunta";
 choices[15][2] = "realizar b&uacute;squedas por los nombres de los ficheros de los servidores FTP";
 choices[15][3] = "buscar informaci&oacute;n seg&uacute;n un esquema de enlaces hipertexto";
 answers[15] = choices[15][2];
 units[15] = "112";
 comments[15] = "Id Pregunta: 3469. ";


//  Id pregunta: 3471 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  El servicio para navegar usando men&uacute;s que predominaba en Internet antes de la aparici&oacute;n de WWW se denomina:";
 choices[16]= new Array();
 choices[16][0] = "WAIS";
 choices[16][1] = "Gopher";
 choices[16][2] = "Archie";
 choices[16][3] = "Teletex";
 answers[16] = choices[16][1];
 units[16] = "112";
 comments[16] = "Id Pregunta: 3471. ";


//  Id pregunta: 3522 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  En funci&oacute;n del &aacute;rea geogr&aacute;fica que cubran y de sus caracter&iacute;sticas, se puede decir:";
 choices[17]= new Array();
 choices[17][0] = "Las redes de comunicaci&oacute;n se dividen en LAN (&aacute;rea local) y WAN (&aacute;rea extendida)";
 choices[17][1] = "Las redes WAN ofrecen bajas tasas de error";
 choices[17][2] = "En una red LAN los costes derivados del uso de la red pueden depender del tr&aacute;fico";
 choices[17][3] = "Las redes WAN pueden almacenar datos y despu&eacute;s enviarlos";
 answers[17] = choices[17][3];
 units[17] = "101";
 comments[17] = "Id Pregunta: 3522. ";


//  Id pregunta: 3560 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  En transmisi&oacute;n de datos, &iquest;qu&eacute; ventaja reporta el uso de c&eacute;lulas peque&ntilde;as de longitud fija?:";
 choices[18]= new Array();
 choices[18][0] = "Utilizaci&oacute;n m&aacute;s eficiente del enlace ya que un dispositivo puede enviar c&eacute;lulas sin necesidad de un slot 'libre' de tiempo";
 choices[18][1] = "Minimizaci&oacute;n de esperas intermitentes que pueden derivarse de la espera para que se transmita un paquete largo";
 choices[18][2] = "Una estaci&oacute;n puede enviar muchas c&eacute;lulas en fila sin tener que esperar para est&eacute; disponible su slot de tiempo";
 choices[18][3] = "Puede usarse un pol&iacute;tica de tr&aacute;fico para comparar el tr&aacute;fico real con el acordado";
 answers[18] = choices[18][1];
 units[18] = "109";
 comments[18] = "Id Pregunta: 3560. ";


//  Id pregunta: 3568 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  En una arquitectura de red OSI la responsabilidad de dividir los mensajes en unidades adecuadas a las especificaciones contratadas con la red X25 es de:";
 choices[19]= new Array();
 choices[19][0] = "Del nivel de transporte que le pasa al de red las unidades que debe enviar y el cometido del de red es enviarlos";
 choices[19][1] = "Del nivel de red ya que debe segmentar los fragmentos que le pasa el nivel de transporte en paquetes aceptables por la red X25";
 choices[19][2] = "Del nivel de enlace ya que es el responsable de hacer las tramas que coloca en el enlace";
 choices[19][3] = "De ninguno de ellos ya que el software de red del proveedor lo hace por su cuenta, para dividir el mensaje en paquetes con la longitud que m&aacute;s le convenga a sus conmutadores";
 answers[19] = choices[19][1];
 units[19] = "101, 102";
 comments[19] = "Id Pregunta: 3568. ";


//  Id pregunta: 3588 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  La autoridad de nombres y direcciones de Internet es:";
 choices[20]= new Array();
 choices[20][0] = "ICANN";
 choices[20][1] = "RIPE";
 choices[20][2] = "IETF";
 choices[20][3] = "NIC";
 answers[20] = choices[20][0];
 units[20] = "112";
 comments[20] = "Id Pregunta: 3588. ";


//  Id pregunta: 3755 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  OFTP es:";
 choices[21]= new Array();
 choices[21][0] = "Una versi&oacute;n de TCP/IP para OS/2";
 choices[21][1] = "Odette FTP, una variaci&oacute;n de FTP dise&ntilde;ada para intercambiar ficheros en el mundo de las empresas de automoci&oacute;n";
 choices[21][2] = "Other FTP, una implementaci&oacute;n libre de FTP que es compatible con cualquier plataforma existente en el mercado";
 choices[21][3] = "Own FTP, FTP dise&ntilde;ado por Microsoft para optimizaci&oacute;n del rendimiento del intercambio de archivos entre sus servidores";
 answers[21] = choices[21][1];
 units[21] = "112";
 comments[21] = "Id Pregunta: 3755. ";


//  Id pregunta: 3788 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Respecto a las normas internacionales de conmutaci&oacute;n de paquetes, es cierto que:";
 choices[22]= new Array();
 choices[22][0] = "X.75 especifica la interfaz entre DTE y DCE para terminales en modo paquete ";
 choices[22][1] = "X.29 es similar a X.28 pero para terminales de tecnolog&iacute;a posterior";
 choices[22][2] = "X.28 especifica el interfaz DTE-DCE para terminales de datos arr&iacute;tmicos";
 choices[22][3] = "X.28 especifica los procedimientos de control para circuitos internacionales";
 answers[22] = choices[22][2];
 units[22] = "103";
 comments[22] = "Id Pregunta: 3788. ";


//  Id pregunta: 3801 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Sabiendo que se dice que una fibra monomodo es aquella que transmite un &uacute;nico modo de propagaci&oacute;n de un haz monocrom&aacute;tico de luz. Indique cu&aacute;l de las afirmaciones siguientes es verdadera: ";
 choices[23]= new Array();
 choices[23][0] = "Las fibras &oacute;pticas monomodo son las m&aacute;s adecuadas para la transmisi&oacute;n de se&ntilde;ales con un ancho de banda peque&ntilde;o y a grandes distancias";
 choices[23][1] = "La fibras &oacute;pticas monomodo son las adecuadas para transmitir se&ntilde;ales de gran ancho de banda y a grandes distancias";
 choices[23][2] = "Las fibras &oacute;pticas monomodo son &uacute;nicamente adecuadas para la transmisi&oacute;n de se&ntilde;ales anal&oacute;gicas";
 choices[23][3] = "Todas las anteriores respuestas son correctas";
 answers[23] = choices[23][1];
 units[23] = "99";
 comments[23] = "Id Pregunta: 3801. ";


//  Id pregunta: 3816 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Se&ntilde;ale cu&aacute;l de los siguientes protocolos realiza asignaci&oacute;n din&aacute;mica de direcciones IP:";
 choices[24]= new Array();
 choices[24][0] = "TCP";
 choices[24][1] = "DNS";
 choices[24][2] = "WINS";
 choices[24][3] = "DHCP";
 answers[24] = choices[24][3];
 units[24] = "113";
 comments[24] = "Id Pregunta: 3816. ";


//  Id pregunta: 3820 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Se&ntilde;ale la afirmaci&oacute;n err&oacute;nea respecto a los servicios de red:";
 choices[25]= new Array();
 choices[25][0] = "Los servicios de red orientados a conexi&oacute;n implican el uso de un encaminamiento &uacute;nico durante toda la duraci&oacute;n de una conexi&oacute;n.  El fallo de un dispositivo en red en cualquier punto a lo largo del encaminamiento seleccionado provocar&aacute; un fallo en la conex";
 choices[25][1] = "Los servicios de red no orientados a conexi&oacute;n no predeterminan el encaminamiento de los datos ni la secuencia de los paquetes de datos transmitidos.  Los paquetes de datos pueden ser encaminados sorteando fallos de dispositivos en red, y los recursos de r";
 choices[25][2] = "En los servicios de red no orientados a conexi&oacute;n, los paquetes de datos (datagramas) son recibidos en el mismo orden en que fueron transmitidos";
 choices[25][3] = "Los servicios de red no orientados a conexi&oacute;n son &uacute;tiles para la transmisi&oacute;n de paquetes de datos que permiten distintas demoras de propagaci&oacute;n y el reordenamiento de la secuencia de paquetes de datos en recepci&oacute;n";
 answers[25] = choices[25][2];
 units[25] = "101";
 comments[25] = "Id Pregunta: 3820. ";


//  Id pregunta: 3828 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  Separaci&oacute;n del tr&aacute;fico de voz y datos, reutilizaci&oacute;n de infraestructuras existentes,  necesidad de proximidad a la central local, inversiones en equipamientos del usuario&hellip;, son todas caracter&iacute;sticas propias de las tecnolog&iacute;as:";
 choices[26]= new Array();
 choices[26][0] = "de los m&oacute;dems de cable";
 choices[26][1] = "de los dispositivos WAP";
 choices[26][2] = "de xDSL";
 choices[26][3] = "de LMDS";
 answers[26] = choices[26][2];
 units[26] = "107";
 comments[26] = "Id Pregunta: 3828. NULL";


//  Id pregunta: 3853 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  WTLS:";
 choices[27]= new Array();
 choices[27][0] = "est&aacute; basado en el protocolo TLS, pero optimizado para dispositivos m&oacute;viles";
 choices[27][1] = "proporciona mayor seguridad que TLS";
 choices[27][2] = "es independiente de TLS, un protocolo dise&ntilde;ado espec&iacute;ficamente para redes inal&aacute;mbricas";
 choices[27][3] = "ningunas de las anteriores";
 answers[27] = choices[27][0];
 units[27] = "111";
 comments[27] = "Id Pregunta: 3853. NULL";


//  Id pregunta: 3857 AÃ±o de creación de pregunta: 2003-01-01
 questions[28]= "29)  El cortafuegos CheckPoint Firewall-1 es:";
 choices[28]= new Array();
 choices[28][0] = "Un cortafuegos de filtrado din&aacute;mico de paquetes";
 choices[28][1] = "Un cortafuegos de inspecci&oacute;n de estado";
 choices[28][2] = "Un cortafuegos h&iacute;brido que intercepta los paquetes entre las capas 3 y4 del modelo OSI";
 choices[28][3] = "No es nada de lo anterior";
 answers[28] = choices[28][1];
 units[28] = "111";
 comments[28] = "Id Pregunta: 3857. NULL";


//  Id pregunta: 3893 AÃ±o de creación de pregunta: 2003-01-01
 questions[29]= "30)  En la arquitectura TCP/IP, &iquest;cu&aacute;l de los siguientes protocolos no tiene estrictamente TCP/UDP en una capa m&aacute;s baja?:";
 choices[29]= new Array();
 choices[29][0] = "ICMP";
 choices[29][1] = "SNMP.";
 choices[29][2] = "SMTP.";
 choices[29][3] = "MIME.";
 answers[29] = choices[29][0];
 units[29] = "100";
 comments[29] = "Id Pregunta: 3893. Junta Andaluc&iacute;a";


//  Id pregunta: 3925 AÃ±o de creación de pregunta: 2003-01-01
 questions[30]= "31)  &iquest;Con qu&eacute; est&aacute; relacionado CSMA/CD?";
 choices[30]= new Array();
 choices[30][0] = "802.4";
 choices[30][1] = "802.3";
 choices[30][2] = " 802.5";
 choices[30][3] = " 802.6";
 answers[30] = choices[30][1];
 units[30] = "100";
 comments[30] = "Id Pregunta: 3925. NULL";


//  Id pregunta: 3935 AÃ±o de creación de pregunta: 2003-01-01
 questions[31]= "32)  &iquest;Qu&eacute; es cierto, en los diagramas de clases?";
 choices[31]= new Array();
 choices[31][0] = "Los atributos se representan debajo  en la caja de representaci&oacute;n de la clase ";
 choices[31][1] = "Las interfaces se representan mediante carpetas";
 choices[31][2] = "Los atributos se representan en medio  en la caja de representaci&oacute;n de la clase";
 choices[31][3] = "Los atributos se representan  en la zona superior de representaci&oacute;n de la clase";
 answers[31] = choices[31][0];
 units[31] = "82";
 comments[31] = "Id Pregunta: 3935. ";


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


//  Id pregunta: 4004 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  En el est&aacute;ndar de mensajer&iacute;a X400, el protocolo utilizado para la comunicaci&oacute;n entre el agente de transferencia de mensajes (MTA) y el agente de usuario (UA) se denomina:";
 choices[34]= new Array();
 choices[34][0] = "P1";
 choices[34][1] = "P2";
 choices[34][2] = "P3";
 choices[34][3] = "P7";
 answers[34] = choices[34][2];
 units[34] = "106";
 comments[34] = "Id Pregunta: 4004. ";


//  Id pregunta: 4006 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  En el protocolo de correo electr&oacute;nico SMTP, el formato de las cabeceras sigue el est&aacute;ndar RFC-822. Indique cu&aacute;l es la notaci&oacute;n empleada en la escritura de las cabeceras de acuerdo con dicho est&aacute;ndar RFC-822:";
 choices[35]= new Array();
 choices[35][0] = "ASCII";
 choices[35][1] = "ASN.1";
 choices[35][2] = "Base 64";
 choices[35][3] = "BNF";
 answers[35] = choices[35][3];
 units[35] = "106";
 comments[35] = "Id Pregunta: 4006. ";


//  Id pregunta: 4016 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  &iquest;Cu&aacute;l es el est&aacute;ndar de la ITU-T que designa a la tecnolog&iacute;a HDSL?";
 choices[36]= new Array();
 choices[36][0] = "G 992.1";
 choices[36][1] = "G 991.2";
 choices[36][2] = "G 992.2";
 choices[36][3] = "G 991.1";
 answers[36] = choices[36][3];
 units[36] = "107";
 comments[36] = "Id Pregunta: 4016. NULL";


//  Id pregunta: 4039 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  Seg&uacute;n establece la Ley 9/2014, General de Telecomunicaciones, es una infracci&oacute;n muy grave:";
 choices[37]= new Array();
 choices[37][0] = "La emisi&oacute;n de se&ntilde;ales de identificaci&oacute;n falsas o enga&ntilde;osas.";
 choices[37][1] = "El establecimiento de comunicaciones utilizando estaciones no autorizadas.";
 choices[37][2] = "El incumplimiento por los operadores de las obligaciones relativas a la integridad y seguridad en la prestaci&oacute;n de servicios o la explotaci&oacute;n de redes de comunicaciones electr&oacute;nica.";
 choices[37][3] = "No atender el requerimiento de cesaci&oacute;n hecho por la Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n, en los supuestos de producci&oacute;n de interferencias.";
 answers[37] = choices[37][3];
 units[37] = "110";
 comments[37] = "Id Pregunta: 4039. ";


//  Id pregunta: 4041 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  &iquest;Cada cu&aacute;nto tiempo se renuevan los cargos de Presidente, Vicepresidente y Consejeros de la Comisi&oacute;n Nacional de los Mercados y la Competencia?";
 choices[38]= new Array();
 choices[38][0] = "6 a&ntilde;os";
 choices[38][1] = "5 a&ntilde;os";
 choices[38][2] = "4 a&ntilde;os";
 choices[38][3] = "3 a&ntilde;os";
 answers[38] = choices[38][0];
 units[38] = "110";
 comments[38] = "Id Pregunta: 4041. ";


//  Id pregunta: 4053 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  En referencia a las amenazas que afectan a la seguridad en las redes de comunicaciones, se&ntilde;ale la respuesta incorrecta";
 choices[39]= new Array();
 choices[39][0] = "La interrupci&oacute;n puede ser tanto f&iacute;sica como l&oacute;gica";
 choices[39][1] = "El llamado sniffing es un tipo de intercepci&oacute;n";
 choices[39][2] = "Los ataques de tipo pasivo son f&aacute;ciles de detectar";
 choices[39][3] = "Los ataques pueden ser activos y pasivos";
 answers[39] = choices[39][2];
 units[39] = "111";
 comments[39] = "Id Pregunta: 4053. NULL";


//  Id pregunta: 4074 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  &iquest;Qu&eacute; tipo de software es m&aacute;s costoso cuando lo compramos?";
 choices[40]= new Array();
 choices[40][0] = "El libre";
 choices[40][1] = "El comercial";
 choices[40][2] = "Los dos anteriores son igual de  costosos";
 choices[40][3] = "No hay una respuesta en terminos generales y depende casi siempre del software concreto del que hablemos";
 answers[40] = choices[40][1];
 units[40] = "61";
 comments[40] = "Id Pregunta: 4074. ";


//  Id pregunta: 4111 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  Se&ntilde;ale la afirmaci&oacute;n incorrecta:";
 choices[41]= new Array();
 choices[41][0] = "En las  redes P2P no existen clientes ni servidores fijos.";
 choices[41][1] = "Se necesitan servidores intermedios que mantienen la relaci&oacute;n de direcciones IP  de los usuarios de la red.";
 choices[41][2] = "La informaci&oacute;n no puede ser intercambiada sin la intervenci&oacute;n de los servidores.";
 choices[41][3] = "Todas las respuestas son correctas.";
 answers[41] = choices[41][2];
 units[41] = "112";
 comments[41] = "Id Pregunta: 4111. ";


//  Id pregunta: 4131 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  Los datos de usuario es mejor guardarlos";
 choices[42]= new Array();
 choices[42][0] = "en la segunda partici&oacute;n o disco duro";
 choices[42][1] = "en la partici&oacute;n m&aacute;s cercana a la de la unidad de backup";
 choices[42][2] = "en la primera partici&oacute;n del disco duro";
 choices[42][3] = "ninguna de las anteriores";
 answers[42] = choices[42][0];
 units[42] = "97";
 comments[42] = "Id Pregunta: 4131. NULL";


//  Id pregunta: 4138 AÃ±o de creación de pregunta: 2006-01-01
 questions[43]= "44)  La capacidad de un cortafuegos de controlar el estado de las conexiones activas y usar esta informaci&oacute;n para decidir que paquetes de red deja pasar se llama";
 choices[43]= new Array();
 choices[43][0] = "An&aacute;lisis de puertos (Application firewall)";
 choices[43][1] = "Filtrado est&aacute;tico de paquetes (Static Packet filtering)";
 choices[43][2] = "Inspecci&oacute;n completa de estado (Stateful Packet filtering)";
 choices[43][3] = "Barrido ICMP (ICMP Scanning)";
 answers[43] = choices[43][2];
 units[43] = "113";
 comments[43] = "Id Pregunta: 4138. ";


//  Id pregunta: 4180 AÃ±o de creación de pregunta: 2006-01-01
 questions[44]= "45)  Caso de utilizar un &uacute;nico m&eacute;todo, se economiza tiempo de restauraci&oacute;n con backups de tipo";
 choices[44]= new Array();
 choices[44][0] = "Completo";
 choices[44][1] = "Diferencial";
 choices[44][2] = "Incremental";
 choices[44][3] = "Es indiferente";
 answers[44] = choices[44][0];
 units[44] = "97";
 comments[44] = "Id Pregunta: 4180. NULL";


//  Id pregunta: 4202 AÃ±o de creación de pregunta: 2006-01-01
 questions[45]= "46)  ADSL2+";
 choices[45]= new Array();
 choices[45][0] = "Soporta una distancia m&aacute;xima de 3,6Km. mayor que VDSL";
 choices[45][1] = "Utiliza frecuencias hasta 2.2 MHz.";
 choices[45][2] = "A la m&aacute;xima distancia tiene un ancho de bajada m&aacute;ximo de 4Mbps";
 choices[45][3] = "Todas las anteriores son correctas";
 answers[45] = choices[45][3];
 units[45] = "107";
 comments[45] = "Id Pregunta: 4202. NULL";


//  Id pregunta: 4341 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares de comunicaciones fue originalmente concebido como el est&aacute;ndar militar MIL-STD-1778?:";
 choices[46]= new Array();
 choices[46][0] = "IEEE 802.3.";
 choices[46][1] = "IEEE 802.11b.";
 choices[46][2] = "CCITT X 25.";
 choices[46][3] = "TCP.";
 answers[46] = choices[46][3];
 units[46] = "99";
 comments[46] = "Id Pregunta: 4341. ";


//  Id pregunta: 4355 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  La raz&oacute;n por la que en las comunicaciones WiFi se utilizan t&eacute;cnicas de expansi&oacute;n del espectro es:";
 choices[47]= new Array();
 choices[47][0] = "Para poder incrementar la longitud de onda.";
 choices[47][1] = "Para reducir los problemas de propagaci&oacute;n de la se&ntilde;al.";
 choices[47][2] = "Por razones de seguridad.";
 choices[47][3] = "WiFi no utiliza expansi&oacute;n del espectro.";
 answers[47] = choices[47][1];
 units[47] = "107";
 comments[47] = "Id Pregunta: 4355. NULL";


//  Id pregunta: 4430 AÃ±o de creación de pregunta: 2007-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l es la banda de frecuencia reservada a voz convencional en la tecnolog&iacute;a ADSL?";
 choices[48]= new Array();
 choices[48][0] = "0-10 KHz";
 choices[48][1] = "0-4 KHz";
 choices[48][2] = "0-56 KHz";
 choices[48][3] = "5-10 KHz";
 answers[48] = choices[48][1];
 units[48] = "107";
 comments[48] = "Id Pregunta: 4430. NULL";


//  Id pregunta: 4535 AÃ±o de creación de pregunta: 2007-01-01
 questions[49]= "50)  El protocolo UDP (User Datagram Protocol):";
 choices[49]= new Array();
 choices[49][0] = "Es un protocolo de transporte perteneciente a Ia familia de protocolos TCP/IP no orientado a conexi&oacute;n.";
 choices[49][1] = "Es un protocolo de nivel de red perteneciente a Ia familia de protocolos TCP/IP.";
 choices[49][2] = "Es un protocolo de transporte perteneciente a la familia de protocolos TCP/IP orientado a conexi&oacute;n.";
 choices[49][3] = "Es el protocolo de transporte utilizado por el protocolo de aplicaci&oacute;n FTP.";
 answers[49] = choices[49][0];
 units[49] = "100";
 comments[49] = "Id Pregunta: 4535. ";


//  Id pregunta: 4721 AÃ±o de creación de pregunta: 2007-01-01
 questions[50]= "51)  La gesti&oacute;n de nombres de dominio bajo el c&oacute;digo correspondientes a Espa&ntilde;a .es la tiene legalmenteencomendada:";
 choices[50]= new Array();
 choices[50][0] = "Internic.es";
 choices[50][1] = "Red.es";
 choices[50][2] = "Mityc.es";
 choices[50][3] = " Netsol.es";
 answers[50] = choices[50][1];
 units[50] = "112";
 comments[50] = "Id Pregunta: 4721. Examen 2006 JCYL";


//  Id pregunta: 4968 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  Los equipos utilizados para la interconexi&oacute;n de redes a nivel 5 seg&uacute;n el modelo OSI se denomina:";
 choices[51]= new Array();
 choices[51][0] = "Repetidores.";
 choices[51][1] = "Routers.";
 choices[51][2] = "Bridges.";
 choices[51][3] = "Gateways.";
 answers[51] = choices[51][3];
 units[51] = "102";
 comments[51] = "Id Pregunta: 4968. Examen TIC B 2007";


//  Id pregunta: 5275 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  Indique que respuesta no es correcta. La red transeuropea sTESTA: ";
 choices[52]= new Array();
 choices[52][0] = "Corresponde con una de las infraestructuras y servicios comunes de IDABC.";
 choices[52][1] = "Conecta a trav&eacute;s de Internet las redes administrativas de los Estados Miembros y las instituciones europeas.";
 choices[52][2] = "Permite el acceso a los servicios paneuropeos de Administraci&oacute;n Electr&oacute;nica mediante el enlace SARA-sTESTA.";
 choices[52][3] = "Ahorra a los Departamentos de la Administraci&oacute;n el coste de enlaces independientes con administraciones de otros estados miembros";
 answers[52] = choices[52][1];
 units[52] = "103";
 comments[52] = "Id Pregunta: 5275. ";


//  Id pregunta: 5605 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  &iquest;Qu&eacute; niveles implementa el m&oacute;dem de cable?";
 choices[53]= new Array();
 choices[53][0] = "El nivel f&iacute;sico, de control de acceso al medio e IP";
 choices[53][1] = "El nivel f&iacute;sico, enlace, de red y de transporte";
 choices[53][2] = "El nivel f&iacute;sico y de control de acceso al medio";
 choices[53][3] = "Depende, a partir de DOCSIS 2.0 se implementan el nivel f&iacute;sico y de control de acceso al medio e IP";
 answers[53] = choices[53][2];
 units[53] = "105";
 comments[53] = "Id Pregunta: 5605. ";


//  Id pregunta: 5611 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l de los siguientes conceptos se definen en X.500?";
 choices[54]= new Array();
 choices[54][0] = "DIB, que se comunica con el DSA utilizando el protocolo DAP. DOP, protocolo que define las pol&iacute;ticas para el intercambio de informaci&oacute;n entre dos DSA's. DMO que gestiona un dominio DMD";
 choices[54][1] = "DISP, que permite la replica de la informaci&oacute;n que almacena un DSA a otros DSAs dentro de un mismo DMD. DIT, donde se almacena la informaci&oacute;n en un directorio X.500. DOP, protocolo que define las pol&iacute;ticas para el intercambio de informaci&oacute;n entre dos DSA's. ";
 choices[54][2] = "DISP, que permite la replica de la informaci&oacute;n que almacena un DSA a otros DSAs dentro de un mismo DMD. DAP, que es el protocolo utilizado por un DUA para comunicarse con un DSA. DOP, protocolo que define las pol&iacute;ticas para el intercambio de informaci&oacute;n entre dos DSA's. ";
 choices[54][3] = "Ninguna de las anteriores";
 answers[54] = choices[54][2];
 units[54] = "106";
 comments[54] = "Id Pregunta: 5611. ";


//  Id pregunta: 5613 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  Se entiende por seguridad de los sistemas de informaci&oacute;n al conjunto de funciones, servicios y mecanismos que permitan garantizar las siguientes premisas:";
 choices[55]= new Array();
 choices[55][0] = "Autenticaci&oacute;n, confidenciabilidad, accesibilidad, servicios de no-repudiaci&oacute;n";
 choices[55][1] = "Accesibilidad, servicios de no-repudiaci&oacute;n, integridad, disponibilidad";
 choices[55][2] = "Integridad, confidencialidad, disponibilidad, servicios de no-repudiaci&oacute;n";
 choices[55][3] = "Autenticacion, confidencialidad, integridad, disponibilidad";
 answers[55] = choices[55][3];
 units[55] = "111";
 comments[55] = "Id Pregunta: 5613. NULL";


//  Id pregunta: 5623 AÃ±o de creación de pregunta: 2003-01-01
 questions[56]= "57)  En el protocolo SSL, el paso &quot;Server Key Exchange&quot; o Intercambio de clave del servidor es:";
 choices[56]= new Array();
 choices[56][0] = "Obligatorio";
 choices[56][1] = "Opcional, &uacute;nicamente cuando no existe certificado";
 choices[56][2] = "Nunca es necesario";
 choices[56][3] = "Ninguna de las anteriores";
 answers[56] = choices[56][1];
 units[56] = "111";
 comments[56] = "Id Pregunta: 5623. NULL";


//  Id pregunta: 5789 AÃ±o de creación de pregunta: 2009-01-01
 questions[57]= "58)  En comunicaciones m&oacute;viles:";
 choices[57]= new Array();
 choices[57][0] = "La raz&oacute;n por la que se usan frecuencia altas para las comunicaciones m&oacute;viles es porque se alcanzan m&aacute;s distancias que con frecuencias inferiores para la misma potencia radiada";
 choices[57][1] = "El sentido de transmisi&oacute;n de estaci&oacute;n m&oacute;vil a estaci&oacute;n terrena suele ocupar la banda inferior de las dos en que se dividen los sistemas TDD.";
 choices[57][2] = "Las bandas de frecuencia m&aacute;s bajas suelen estar asociadas a mayores anchos de banda que las bandas de frecuencias m&aacute;s altas.";
 choices[57][3] = "Todas las anteriores son falsas.";
 answers[57] = choices[57][3];
 units[57] = "108";
 comments[57] = "Id Pregunta: 5789. ";


//  Id pregunta: 5949 AÃ±o de creación de pregunta: 2009-01-01
 questions[58]= "59)  &iquest;Cu&aacute;l de las siguientes no es un beneficio de un sistema de gesti&oacute;n de identidades respecto de la gesti&oacute;n de usuarios tradicional?";
 choices[58]= new Array();
 choices[58][0] = "Inexistencia de un interfaz de self-service para el usuario final";
 choices[58][1] = "Informes de auditoria";
 choices[58][2] = "Visi&oacute;n global del perfil del usuario";
 choices[58][3] = "Administraci&oacute;n delegada de usuarios";
 answers[58] = choices[58][0];
 units[58] = "118";
 comments[58] = "Id Pregunta: 5949. ";


//  Id pregunta: 6346 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  &iquest;Cu&aacute;l de las siguientes definiciones describe lo que es Mashup?";
 choices[59]= new Array();
 choices[59][0] = "Aplicaci&oacute;n web que utiliza informaci&oacute;n de diversas fuentes para crear un servicio en base a ellas.";
 choices[59][1] = "T&eacute;cnica de desarrollo web que permite modificar la informaci&oacute;n de una p&aacute;gina web, sin tener que recargarla totalmente, agilizando la interacci&oacute;n con el usuario.";
 choices[59][2] = "Conjunto de especificaciones que posibilitan la comunicaci&oacute;n y provisi&oacute;n de servicios entre diferentes aplicaciones v&iacute;a web.";
 choices[59][3] = "Ninguna de las anteriores.";
 answers[59] = choices[59][0];
 units[59] = "120";
 comments[59] = "Id Pregunta: 6346. NULL";


//  Id pregunta: 6540 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  En el &aacute;mbito de la biometr&iacute;a";
 choices[60]= new Array();
 choices[60][0] = "Un error Tipo I significa que el sistema ha rechazado a un individuo autorizado";
 choices[60][1] = "Un error Tipo I significa que el sistema ha autorizado a un impostor";
 choices[60][2] = "Un error Tipo II significa que el sistema ha rechazado a un individuo autorizado";
 choices[60][3] = "Un error Tipo III significa que el sistema ha rechazado a un individuo autorizado";
 answers[60] = choices[60][0];
 units[60] = "111";
 comments[60] = "Id Pregunta: 6540. NULL";


//  Id pregunta: 6543 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  Un ejemplo de ataque al control de acceso es";
 choices[61]= new Array();
 choices[61][0] = "Denegaci&oacute;n de servicio";
 choices[61][1] = "Spoofing";
 choices[61][2] = "Ataques de diccionario";
 choices[61][3] = "Todas las respuestas anteriores son correctas";
 answers[61] = choices[61][3];
 units[61] = "111";
 comments[61] = "Id Pregunta: 6543. NULL";


//  Id pregunta: 6551 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  Revisar los logs de seguridad es un tipo de seguridad";
 choices[62]= new Array();
 choices[62][0] = "Preventiva";
 choices[62][1] = "De detecci&oacute;n";
 choices[62][2] = "Disuasoria";
 choices[62][3] = "Correctiva";
 answers[62] = choices[62][1];
 units[62] = "111";
 comments[62] = "Id Pregunta: 6551. NULL";


//  Id pregunta: 7251 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  El protocolo FTP es un protocolo:";
 choices[63]= new Array();
 choices[63][0] = "Seguro";
 choices[63][1] = "No orientado a conexi&oacute;n";
 choices[63][2] = "De nivel de aplicaci&oacute;n";
 choices[63][3] = "Dise&ntilde;ado para gestionar se&ntilde;alizaci&oacute;n de red";
 answers[63] = choices[63][2];
 units[63] = "100";
 comments[63] = "Id Pregunta: 7251. Examen TIC B 2009";


//  Id pregunta: 7773 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)   El protocolo utilizado para acceder a Internet desde cualquier dispositivo inal&aacute;mbrico haciendo uso del lenguaje WML (Wireless Markup Language) es:";
 choices[64]= new Array();
 choices[64][0] = " WEP.";
 choices[64][1] = " WPA.";
 choices[64][2] = " WAP.";
 choices[64][3] = " WTP.";
 answers[64] = choices[64][2];
 units[64] = "107";
 comments[64] = "Id Pregunta: 7773. Map 2005";


//  Id pregunta: 8293 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  Entre las diferencias en los protocolos IPv4 e IPv6 NO se encuentra que:";
 choices[65]= new Array();
 choices[65][0] = "La implementaci&oacute;n del multicast es obligatoria en IPv6 y opcional en IPv4.";
 choices[65][1] = "MTU m&iacute;nimo de IPv6 es de 1280 bytes frente a los 576 bytes de IPv4.";
 choices[65][2] = "El encabezado de IPv6 sin opciones es menor que el encabezado de IPv4 sin opciones.";
 choices[65][3] = "El soporte para IPsec es obligatorio en IPv6 y opcional en IPv4.";
 answers[65] = choices[65][2];
 units[65] = "100";
 comments[65] = "Id Pregunta: 8293. Examen TIC A2 2010";


//  Id pregunta: 8320 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  Se&ntilde;ale cual de las siguientes caracter&iacute;sticas de seguridad est&aacute; incluida tanto en el est&aacute;ndar WPA2 como en el est&aacute;ndar WEP:";
 choices[66]= new Array();
 choices[66][0] = "Intercambio din&aacute;mico de claves.";
 choices[66][1] = "Autenticaci&oacute;n 802.1x";
 choices[66][2] = "Preshared Keys (PSK).";
 choices[66][3] = "Encriptaci&oacute;n AES.";
 answers[66] = choices[66][2];
 units[66] = "107";
 comments[66] = "Id Pregunta: 8320. Examen TIC A2 2010";


//  Id pregunta: 8435 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  &iquest;Qu&eacute; proyecto europeo pretende establecer una plataforma de interoperabilidad y reconocimiento mutuo transfronterizo entre las identidades electr&oacute;nicas existentes en cada Estado Europeo?";
 choices[67]= new Array();
 choices[67][0] = "Conecta";
 choices[67][1] = "Robinson";
 choices[67][2] = "Stork";
 choices[67][3] = "Interoperability card";
 answers[67] = choices[67][2];
 units[67] = "118";
 comments[67] = "Id Pregunta: 8435. ";


//  Id pregunta: 8445 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  Una compa&ntilde;&iacute;a va a abrir una nueva sede asumiendo la subred 255.255.248.0,&iquest;Cu&aacute;l de las siguientes direcciones IP se podr&iacute;a asignar a un ordenador de la nuevasede?:";
 choices[68]= new Array();
 choices[68][0] = "a) 172.16.20.0";
 choices[68][1] = "172.16.24.45";
 choices[68][2] = "Ambas respuestas son correctas";
 choices[68][3] = "Ninguna respuesta es correcta";
 answers[68] = choices[68][2];
 units[68] = "100";
 comments[68] = "Id Pregunta: 8445. Analista Ayto. Madrid 2010";


//  Id pregunta: 8535 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  &iquest;Qu&eacute; tecnolog&iacute;a de acceso permite un tipo de servicio tanto sim&eacute;trico como asim&eacute;trico?";
 choices[69]= new Array();
 choices[69][0] = "SHDSL";
 choices[69][1] = "HDSL";
 choices[69][2] = "ADSL2";
 choices[69][3] = "VDSL";
 answers[69] = choices[69][3];
 units[69] = "107";
 comments[69] = "Id Pregunta: 8535. Examen TIC A2 2010 interna";


//  Id pregunta: 8595 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  &iquest;A qu&eacute; corresponden las siglas LINQ?";
 choices[70]= new Array();
 choices[70][0] = "Lenguaje que permite enlaces unidireccionales y bid&iacute;reccionales a otro recurso (como archivos, im&aacute;genes, documentos, programas, etc.) dentro de documentos XML";
 choices[70][1] = "Soluci&oacute;n utilizada en el campo de la Business Intelligence cuyo objetivo es agilizar la consulta a grandes cantidades de datos";
 choices[70][2] = "Conjunto de extensiones a NET Framework que abarca operaciones de consulta integrada de lenguaje, conjuntos y transformaciones.";
 choices[70][3] = "Texto o im&aacute;genes en un sitio web que un usuario puede pinchar para tener acceso o conectar con otro documento.";
 answers[70] = choices[70][2];
 units[70] = "59,115";
 comments[70] = "Id Pregunta: 8595. Examen TIC A2 2010 interna";


//  Id pregunta: 8791 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  La longitud m&aacute;xima de un datagrama IP es";
 choices[71]= new Array();
 choices[71][0] = "32 KB";
 choices[71][1] = "64 KB";
 choices[71][2] = "128 KB";
 choices[71][3] = "512 KB";
 answers[71] = choices[71][1];
 units[71] = "100";
 comments[71] = "Id Pregunta: 8791. Examen UPM A2 2011";


//  Id pregunta: 8841 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  &iquest;Qu&eacute; est&aacute;ndar debe de cumplir un sistema de videoconferencia H.323 para poder compartir datos?";
 choices[72]= new Array();
 choices[72][0] = " H.239";
 choices[72][1] = " H.264";
 choices[72][2] = " H.263";
 choices[72][3] = " H.240";
 answers[72] = choices[72][0];
 units[72] = "117";
 comments[72] = "Id Pregunta: 8841. Examen UC3M 2010";


//  Id pregunta: 8931 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  &iquest;Qu&eacute; formato de los siguientes no es de audio?";
 choices[73]= new Array();
 choices[73][0] = "VRML";
 choices[73][1] = "Ogg Vorbis";
 choices[73][2] = "MIDI";
 choices[73][3] = "WMA";
 answers[73] = choices[73][0];
 units[73] = "114";
 comments[73] = "Id Pregunta: 8931. ";


//  Id pregunta: 8990 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  El est&aacute;ndar de telefon&iacute;a m&oacute;vil LTE (Long Term Evolution), emplea";
 choices[74]= new Array();
 choices[74][0] = "MIMO";
 choices[74][1] = "FDD";
 choices[74][2] = "TDD";
 choices[74][3] = "Todas las anteriores";
 answers[74] = choices[74][3];
 units[74] = "107";
 comments[74] = "Id Pregunta: 8990. NULL";


//  Id pregunta: 8996 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  Las estaciones conectadas a una red de &aacute;rea local por medio de tarjetas de red de tipo Ethernet";
 choices[75]= new Array();
 choices[75][0] = "Acceden al medio de transmisi&oacute;n de forma aleatoria, por lo que pueden producirse colisiones.";
 choices[75][1] = "Acceden al medio de transmisi&oacute;n en per&iacute;odos de tiempo predeterminados, por lo que nunca se producen colisiones.";
 choices[75][2] = "Acceden al medio de transmisi&oacute;n en diferentes frecuencias de trabajo, por lo que pueden acceder varias simult&aacute;neamente sin que se produzcan colisiones.";
 choices[75][3] = "Nunca acceden si tras un primer intento se detect&oacute; una colisi&oacute;n.";
 answers[75] = choices[75][0];
 units[75] = "101";
 comments[75] = "Id Pregunta: 8996. Examen UPM A2 2011";


//  Id pregunta: 9020 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  La &quot;dispersi&oacute;n modal&quot; en una fibra &oacute;ptica:";
 choices[76]= new Array();
 choices[76][0] = "S&oacute;lo se produce en fibras monomodo.";
 choices[76][1] = "S&oacute;lo se produce en fibras multimodo.";
 choices[76][2] = "Se produce en ambos tipos de fibra.";
 choices[76][3] = "No se produce en la fibra &oacute;ptica";
 answers[76] = choices[76][1];
 units[76] = "99";
 comments[76] = "Id Pregunta: 9020. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9351 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  Respecto de RDSI, se puede afirmar:";
 choices[77]= new Array();
 choices[77][0] = "En la capa de enlace, el canal D hace uso del Procedimiento de Acceso al Enlace en el Canal D (o LAPD)";
 choices[77][1] = "En la capa de enlace, el canal B hace uso del Procedimiento de Acceso al Enlace en el Canal B (o LAPB)";
 choices[77][2] = "La transmisi&oacute;n d&uacute;plex en la capa f&iacute;sica se efect&uacute;a a 192 kbps mediante tramas de 40 bits cada una y una duraci&oacute;n de 275 us";
 choices[77][3] = "En la capa de red, se usa el protocolo LAPB, para gestionar las conexiones";
 answers[77] = choices[77][0];
 units[77] = "103";
 comments[77] = "Id Pregunta: 9351. Pag. 8 astic 2011";


//  Id pregunta: 9352 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  &iquest;Cu&aacute;l es la velocidad disponible de un acceso primario RDSI en Europa?";
 choices[78]= new Array();
 choices[78][0] = "1544 Kbps";
 choices[78][1] = "64 Kbps";
 choices[78][2] = "2048 Kbps";
 choices[78][3] = "1024 Kbps";
 answers[78] = choices[78][2];
 units[78] = "103";
 comments[78] = "Id Pregunta: 9352. Pruebas selectivas para Gesti&oacute;n de Sistemas e Inform&aacute;tica de la UPM 2011. Libre";


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


//  Id pregunta: 9394 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  Se&ntilde;ale la respuesta falsa con respecto a LTE:";
 choices[80]= new Array();
 choices[80][0] = "Emplea radiocanales de frecuencia fija de 15 Mhz";
 choices[80][1] = "Utiliza canales de ancho de banda adaptativos.";
 choices[80][2] = "Puede trabajar en muchas bandas frecuenciales diferentes";
 choices[80][3] = "Utiliza modulaciones QPSK, 16QAM y 64QAM";
 answers[80] = choices[80][0];
 units[80] = "108";
 comments[80] = "Id Pregunta: 9394. NULL";


//  Id pregunta: 9424 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  Seg&uacute;n la ley 9/2014, para poder explotar redes y prestar servicios de comunicaciones electr&oacute;nicas a terceros";
 choices[81]= new Array();
 choices[81][0] = "Es imprescindible que la persona f&iacute;sica o jur&iacute;dica sea espa&ntilde;ola.";
 choices[81][1] = "La persona f&iacute;sica o jur&iacute;dica debe ser nacional de un Estado miembro de la Uni&oacute;n Europea.";
 choices[81][2] = "Puede ser de cualquier nacionalidad";
 choices[81][3] = "Puede ser de cualquier nacionalidad cuando as&iacute; est&eacute; previsto en acuerdos internacionales.";
 answers[81] = choices[81][3];
 units[81] = "110";
 comments[81] = "Id Pregunta: 9424. ";


//  Id pregunta: 9506 AÃ±o de creación de pregunta: 2013-01-01
 questions[82]= "83)  En el patr&oacute;n MVC:";
 choices[82]= new Array();
 choices[82][0] = "Modelo son los componentes que se encargan de la l&oacute;gica de negocio, Vista son los componentes que se encargan de la presentaci&oacute;n o interfaz de usuario y Controlador son los componentes que se encargan del flujo de control de la aplicaci&oacute;n";
 choices[82][1] = "Modelo son los componentes que se encargan de la carga de datos, Vista son los componentes que se encargan de la presentaci&oacute;n o interfaz de usuario y Controlador son los componentes que se encargan del flujo de control de la aplicaci&oacute;n";
 choices[82][2] = "Modelo son los componentes que se encargan de la l&oacute;gica de negocio, Vista son los componentes que se encargan de la presentaci&oacute;n o interfaz en el servidor y Controlador son los componentes que se encargan del flujo de control de la aplicaci&oacute;n";
 choices[82][3] = "Modelo son los componentes que se encargan de la l&oacute;gica de negocio, Vista son los componentes que se encargan de la presentaci&oacute;n o interfaz de usuario y Controlador son los componentes que se encargan del flujo de control del personal que accede al servidor";
 answers[82] = choices[82][0];
 units[82] = "116";
 comments[82] = "Id Pregunta: 9506. NULL";


//  Id pregunta: 9693 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  Indique cu&aacute;l es la respuesta falsa. Los principios que se aplicaron para llegar a las siete capas del modelo OSI fueron:";
 choices[83]= new Array();
 choices[83][0] = "Cada capa debe realizar una funci&oacute;n bien definida.";
 choices[83][1] = "No debe dise&ntilde;arse la funci&oacute;n de cada capa pensando en la definici&oacute;n de protocolos estandarizados internacionalmente.";
 choices[83][2] = "Se debe crear una capa siempre que exista un nivel diferente de abstracci&oacute;n.";
 choices[83][3] = "Los l&iacute;mites de las capas deben elegirse a modo de minimizar el flujo de informaci&oacute;n a trav&eacute;s de las interfaces.";
 answers[83] = choices[83][1];
 units[83] = "100";
 comments[83] = "Id Pregunta: 9693. NULL";


//  Id pregunta: 9790 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  &iquest;Cu&aacute;l es el objetivo principal perseguido por un keylogger?";
 choices[84]= new Array();
 choices[84][0] = "&quot;Intercepci&oacute;n&quot; y captura de datos.";
 choices[84][1] = "Suplantaci&oacute;n de identidad. ";
 choices[84][2] = "Denegaci&oacute;n de servicio.";
 choices[84][3] = "Manipulaci&oacute;n de un recurso. ";
 answers[84] = choices[84][0];
 units[84] = "111";
 comments[84] = "Id Pregunta: 9790. Examen TIC A2 2013";


//  Id pregunta: 9847 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  &iquest;C&oacute;mo se denomina el m&oacute;dulo criptogr&aacute;fico necesario para poder operar con el DNI electr&oacute;nico en un entorno UNIX?";
 choices[85]= new Array();
 choices[85][0] = "Cryptographic Service Provider (CSP).";
 choices[85][1] = "PKCS#11.";
 choices[85][2] = "PGP.";
 choices[85][3] = "Smart Card Mini-Driver.";
 answers[85] = choices[85][1];
 units[85] = "111";
 comments[85] = "Id Pregunta: 9847. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Extremadura 2014";


//  Id pregunta: 10117 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Cu&aacute;l de los siguientes equipos trabaja a nivel 1 de red:";
 choices[86]= new Array();
 choices[86][0] = "Router";
 choices[86][1] = "Switch";
 choices[86][2] = "Bridge";
 choices[86][3] = "Hub";
 answers[86] = choices[86][3];
 units[86] = "102";
 comments[86] = "Id Pregunta: 10117. ";


//  Id pregunta: 10120 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  Los enlaces por los que se env&iacute;an datos de m&aacute;s de una VLAN se denominan:";
 choices[87]= new Array();
 choices[87][0] = "M&uacute;ltiples";
 choices[87][1] = "Trunk";
 choices[87][2] = "VLAN- Link";
 choices[87][3] = "Data-Link";
 answers[87] = choices[87][1];
 units[87] = "102";
 comments[87] = "Id Pregunta: 10120. ";


//  Id pregunta: 10513 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  &iquest;Cual de los siguientes no es un tipo de tr&aacute;fico de ATM?";
 choices[88]= new Array();
 choices[88][0] = "UBR";
 choices[88][1] = "VBR";
 choices[88][2] = "SBR";
 choices[88][3] = "CBR";
 answers[88] = choices[88][2];
 units[88] = "109";
 comments[88] = "Id Pregunta: 10513. NULL";


//  Id pregunta: 10665 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  Polycom, Radvision y Lifesize son:";
 choices[89]= new Array();
 choices[89][0] = "Sistemas de videoconferencia";
 choices[89][1] = "Sistemas de telefon&iacute;a";
 choices[89][2] = "Conectores RDSI";
 choices[89][3] = "C&oacute;decs de video.";
 answers[89] = choices[89][0];
 units[89] = "117";
 comments[89] = "Id Pregunta: 10665. ";


//  Id pregunta: 10907 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  Se&ntilde;ala la afirmaci&oacute;n INCORRECTA:";
 choices[90]= new Array();
 choices[90][0] = "La tecnolog&iacute;a VDSL permite transmisi&oacute;n asim&eacute;trica o sim&eacute;trica.";
 choices[90][1] = "VDSL utiliza 2 canales para transmisi&oacute;n de datos, uno para subida y el otro para descarga.";
 choices[90][2] = "La tecnolog&iacute;a HFC es una combinaci&oacute;n de cable y fibra &oacute;ptica.";
 choices[90][3] = "La tecnolog&iacute;a FTTH permite que la fibra &oacute;ptica llegue hasta la casa del cliente.";
 answers[90] = choices[90][1];
 units[90] = "107";
 comments[90] = "Id Pregunta: 10907. Examen GSI 2014";


//  Id pregunta: 11227 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;Cu&aacute;l de los siguientes no es un m&eacute;todo de la clase HttpServlet?";
 choices[91]= new Array();
 choices[91][0] = "doGet(). Se ejecuta cuando se recibe una petici&oacute;n HTTP GET.";
 choices[91][1] = "doPush(). Se ejecuta cuando se recibe una petici&oacute;n HTTP PUSH.";
 choices[91][2] = "doPost(). Se ejecuta cuando se recibe una petici&oacute;n HTTP POST.";
 choices[91][3] = "doPut(). Se ejecuta cuando se recibe una petici&oacute;n HTTP PUT.";
 answers[91] = choices[91][1];
 units[91] = "116";
 comments[91] = "Id Pregunta: 11227. ";


//  Id pregunta: 11236 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Indique la afirmaci&oacute;n falsa sobre el Framework Spring";
 choices[92]= new Array();
 choices[92][0] = "La versi&oacute;n para la plataforma .NET llamada Spring.net.";
 choices[92][1] = "Soporta programaci&oacute;n basada en aspectos (aspect-oriented programming, AOP).";
 choices[92][2] = "Permite la Integraci&oacute;n con frameworks de persistencia como Hibernate.";
 choices[92][3] = "Como framework MVC utiliza Struts.";
 answers[92] = choices[92][3];
 units[92] = "116";
 comments[92] = "Id Pregunta: 11236. ";


//  Id pregunta: 11419 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Seg&uacute;n la Ley 9/2014, respecto a la protecci&oacute;n de los datos personales es falso que:";
 choices[93]= new Array();
 choices[93][0] = "S&oacute;lo se tratar&aacute;n los datos de localizaci&oacute;n cuando sean an&oacute;nimos o previo consentimiento.";
 choices[93][1] = "Los datos se har&aacute;n siempre an&oacute;nimos o se cancelar&aacute;n cuando no sean necesarios.";
 choices[93][2] = "Los datos ser&aacute;n usados para promoci&oacute;n comercial cuando se haya prestado consentimiento.";
 choices[93][3] = "Se pueden tratar datos de localizaci&oacute;n de forma an&oacute;nima hasta que expire el plazo de impugnaci&oacute;n de factura.";
 answers[93] = choices[93][1];
 units[93] = "110";
 comments[93] = "Id Pregunta: 11419. ";


//  Id pregunta: 11424 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Se&ntilde;ale la falsa, en relaci&oacute;n a derechos de los usuarios, seg&uacute;n se indica en la Ley 9/2014:";
 choices[94]= new Array();
 choices[94][0] = "Derecho a resolver el contrato en cualquier momento.";
 choices[94][1] = "Derecho al cambio de operador con conservaci&oacute;n del n&uacute;mero.";
 choices[94][2] = "Derecho a la continuidad del servicio, sin indemnizaci&oacute;n por parte del operador si la interrupci&oacute;n es inferior a 60 minutos.";
 choices[94][3] = "Derecho a acceder gratuitamente a llamadas de emergencia.";
 answers[94] = choices[94][2];
 units[94] = "110";
 comments[94] = "Id Pregunta: 11424. ";


//  Id pregunta: 11429 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Seg&uacute;n la Ley 9/2014, la aprobaci&oacute;n de los planes nacionales de numeraci&oacute;n, direccionamiento y denominaci&oacute;n:";
 choices[95]= new Array();
 choices[95][0] = "Corresponde al Gobierno, mediante Real Decreto.";
 choices[95][1] = "Corresponde a la CNMC, mediante Resoluci&oacute;n.";
 choices[95][2] = "Corresponde al MINETUR, mediante Real Decreto.";
 choices[95][3] = "Corresponde al Gobierno, mediante Resoluci&oacute;n.";
 answers[95] = choices[95][0];
 units[95] = "110";
 comments[95] = "Id Pregunta: 11429. ";


//  Id pregunta: 11661 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  El incumplimiento por los operadores, o por los propietarios de los correspondientes recursos asociados, de las obligaciones establecidas para la utilizaci&oacute;n compartida de los tramos finales de las redes de acceso, se recoge en la Ley 9/2014, General de Telecomunicaciones como una infracci&oacute;n:";
 choices[96]= new Array();
 choices[96][0] = "Leve";
 choices[96][1] = "Grave";
 choices[96][2] = "Muy grave";
 choices[96][3] = "Dicha infracci&oacute;n no se encuentra recogida en la Ley 9/2014.";
 answers[96] = choices[96][1];
 units[96] = "110";
 comments[96] = "Id Pregunta: 11661. ";


//  Id pregunta: 11662 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  De acuerdo a la Ley 9/2014, General de Telecomunicaciones, los derechos de uso privativo del dominio p&uacute;blico radioel&eacute;ctrico con limitaci&oacute;n de n&uacute;mero:";
 choices[97]= new Array();
 choices[97][0] = "Se otorgar&aacute;n, por un per&iacute;odo que finalizar&aacute; el 31 de diciembre del a&ntilde;o natural en que cumplan su quinto a&ntilde;o de vigencia, sin perjuicio de su posible renovaci&oacute;n.";
 choices[97][1] = "Se otorgar&aacute;n, por un per&iacute;odo que finalizar&aacute; el 31 de diciembre del a&ntilde;o natural en que cumplan su quinto a&ntilde;o de vigencia, sin posibilidad de renovaci&oacute;n.";
 choices[97][2] = "Tendr&aacute;n la duraci&oacute;n prevista en los correspondientes procedimientos de licitaci&oacute;n, con un m&aacute;ximo de veinte a&ntilde;os, incluyendo pr&oacute;rrogas, sin posibilidad de renovaci&oacute;n autom&aacute;tica. ";
 choices[97][3] = "Tendr&aacute;n la duraci&oacute;n prevista en los correspondientes procedimientos de licitaci&oacute;n, con un m&aacute;ximo de veinte a&ntilde;os, salvo pr&oacute;rrogas, sin posibilidad de renovaci&oacute;n autom&aacute;tica. ";
 answers[97] = choices[97][2];
 units[97] = "110";
 comments[97] = "Id Pregunta: 11662. ";


//  Id pregunta: 11670 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Los Enterprise Java Beans (EJB) con funcionamiento as&iacute;ncrono son:";
 choices[98]= new Array();
 choices[98][0] = "Message driven beans";
 choices[98][1] = "Session beans";
 choices[98][2] = "Entity beans";
 choices[98][3] = "Todos los anteriores tienen funcionamiento as&iacute;ncrono.";
 answers[98] = choices[98][0];
 units[98] = "116";
 comments[98] = "Id Pregunta: 11670. ";


//  Id pregunta: 11685 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  La capa de Red del modelo OSI equivale a la capa siguiente del modelo TCP:";
 choices[99]= new Array();
 choices[99][0] = "Internet";
 choices[99][1] = "Application";
 choices[99][2] = "Red";
 choices[99][3] = "Data Link";
 answers[99] = choices[99][0];
 units[99] = "100";
 comments[99] = "Id Pregunta: 11685. NULL";


