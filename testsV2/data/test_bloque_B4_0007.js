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


//  Id pregunta: 2908 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  Dentro de  la metodolog&iacute;a MAGERIT V2 la definici&oacute;n: &quot;es el da&ntilde;o sobre el activo derivado de la materializaci&oacute;n de la amenaza&quot;, corresponde a:";
 choices[1]= new Array();
 choices[1][0] = "Amenazas";
 choices[1][1] = "Vulnerabilidad";
 choices[1][2] = "Impacto";
 choices[1][3] = "Riesgo";
 answers[1] = choices[1][2];
 units[1] = "33";
 comments[1] = "Id Pregunta: 2908. ";


//  Id pregunta: 2965 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  &iquest;Cu&aacute;l es el sistema de acceso que utiliza GPRS?";
 choices[2]= new Array();
 choices[2][0] = "OFDM/TDD";
 choices[2][1] = "CDMA/TDD";
 choices[2][2] = "CDMA/FDD";
 choices[2][3] = "Ninguno de los anteriores";
 answers[2] = choices[2][3];
 units[2] = "108";
 comments[2] = "Id Pregunta: 2965. ";


//  Id pregunta: 3003 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  El protocolo IPv6 define un campo de direcciones de:";
 choices[3]= new Array();
 choices[3][0] = "32 bits";
 choices[3][1] = "64 bits";
 choices[3][2] = "128 bits";
 choices[3][3] = "ninguna de las anteriores";
 answers[3] = choices[3][2];
 units[3] = "100";
 comments[3] = "Id Pregunta: 3003. NULL";


//  Id pregunta: 3026 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  Se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[4]= new Array();
 choices[4][0] = "La direcci&oacute;n IP no se asocia a la m&aacute;quina sino a la interfaz de red";
 choices[4][1] = "Hay 256 puertos llamados bien conocidos (well known)";
 choices[4][2] = "La direcci&oacute;n Ip y el puerto determinan un socket";
 choices[4][3] = "Una aplicaci&oacute;n se identifica por un puerto";
 answers[4] = choices[4][1];
 units[4] = "100";
 comments[4] = "Id Pregunta: 3026. SS-A 2004. Los puertos bien conocidos (well-known ports) son aquellos menores a 1024 y que se utilizan para los servicios b&aacute;sicos en Internet";


//  Id pregunta: 3073 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  La arquitectura Internet en tres capas diferencia:";
 choices[5]= new Array();
 choices[5][0] = "Nivel de presentaci&oacute;n, de aplicaci&oacute;n y de datos";
 choices[5][1] = "Nivel de navegador, de aplicaci&oacute;n y de datos";
 choices[5][2] = "Nivel de cliente, de servidor  y de navegador";
 choices[5][3] = "Las respuestas &lsquo;a&rsquo;, &lsquo;b&rsquo; y &lsquo;c&rsquo; son falsas";
 answers[5] = choices[5][0];
 units[5] = "113";
 comments[5] = "Id Pregunta: 3073. ";


//  Id pregunta: 3110 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;A qu&eacute; hace referencia el est&aacute;ndar IMAP-4?:";
 choices[6]= new Array();
 choices[6][0] = "Correo electr&oacute;nico";
 choices[6][1] = "Compresi&oacute;n de datos";
 choices[6][2] = "Directorio electr&oacute;nico";
 choices[6][3] = "Protocolo de transporte OSI";
 answers[6] = choices[6][0];
 units[6] = "106";
 comments[6] = "Id Pregunta: 3110. ";


//  Id pregunta: 3119 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;A qu&eacute; se denomina 'modem nulo'?:";
 choices[7]= new Array();
 choices[7][0] = "A un modem para transportar datos por lineas digitales y que por lo tanto no modula ni demodula nada";
 choices[7][1] = "A un modem sin microprocesador de control";
 choices[7][2] = "A un cable inversor que conecta dos ETDs entre s&iacute;";
 choices[7][3] = "A un equipo que modula y demodula una se&ntilde;al nula";
 answers[7] = choices[7][2];
 units[7] = "102";
 comments[7] = "Id Pregunta: 3119. ";


//  Id pregunta: 3120 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;C&oacute;mo se comunican una sonda RMON y un agente RMON?:";
 choices[8]= new Array();
 choices[8][0] = "Mediante mensajes SNMP";
 choices[8][1] = "Mediante mensajes LAP-B";
 choices[8][2] = "Mediante mensajes CMIP";
 choices[8][3] = "Mediante Data Streams";
 answers[8] = choices[8][0];
 units[8] = "104";
 comments[8] = "Id Pregunta: 3120. ";


//  Id pregunta: 3152 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto del correo electr&oacute;nico?:";
 choices[9]= new Array();
 choices[9][0] = "Seg&uacute;n MIME los textos se codifican en 7 bits";
 choices[9][1] = "MIME puede encapsular datos EDI";
 choices[9][2] = "SMTP no soporta servicios de seguridad";
 choices[9][3] = "MIME proporciona seguridad";
 answers[9] = choices[9][3];
 units[9] = "106";
 comments[9] = "Id Pregunta: 3152. ";


//  Id pregunta: 3187 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Cu&aacute;l de los siguiente elementos residen en la capa de aplicaci&oacute;n de la pila TCP/IP?:";
 choices[10]= new Array();
 choices[10][0] = "TFTP";
 choices[10][1] = "FTP";
 choices[10][2] = "DNS";
 choices[10][3] = "Todos los anteriores  ";
 answers[10] = choices[10][3];
 units[10] = "100";
 comments[10] = "Id Pregunta: 3187. NULL";


//  Id pregunta: 3243 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Cu&aacute;l es la funci&oacute;n que tiene la capa de presentaci&oacute;n (Presentation Layer) en la arquitectura de protocolos ISO de OSI?:";
 choices[11]= new Array();
 choices[11][0] = "Presentar la informaci&oacute;n al usuario final";
 choices[11][1] = "Ocuparse de las distintas representaciones de la informaci&oacute;n en distintas m&aacute;quinas, de tal forma que el significado sea el mismo aunque las representaciones sean diferentes";
 choices[11][2] = "Presentar la informaci&oacute;n a la red estableciendo puntos de sincronismo intermedios para evitar p&eacute;rdidas de informaci&oacute;n en caso de caidas de la red";
 choices[11][3] = "Todas las anteriores son funciones de la capa de sesi&oacute;n";
 answers[11] = choices[11][1];
 units[11] = "100";
 comments[11] = "Id Pregunta: 3243. NULL";


//  Id pregunta: 3265 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  &iquest;En qu&eacute; bandas de frecuencias se han concedido licencias LMDS en Espa&ntilde;a?:";
 choices[12]= new Array();
 choices[12][0] = "450 y 900 MHz";
 choices[12][1] = "450 y 900 GHz";
 choices[12][2] = "3,5 y 26 MHz";
 choices[12][3] = "3,5 y 26 GHz";
 answers[12] = choices[12][3];
 units[12] = "107";
 comments[12] = "Id Pregunta: 3265. NULL";


//  Id pregunta: 3268 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  &iquest;En qu&eacute; consiste la funci&oacute;n de filtrado en un bridge?:";
 choices[13]= new Array();
 choices[13][0] = "Permitir el paso de determinadas frecuencias &uacute;nicamente";
 choices[13][1] = "Eliminaci&oacute;n de las tramas err&oacute;neas";
 choices[13][2] = "Separaci&oacute;n del tr&aacute;fico de dos subredes";
 choices[13][3] = "Los bridges (puentes) no tienen capacidad de filtrado, ya que operan al nivel de enlace";
 answers[13] = choices[13][2];
 units[13] = "102";
 comments[13] = "Id Pregunta: 3268. ";


//  Id pregunta: 3321 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  &iquest;Sabe qui&eacute;n fue el impulsor de Bluetooth?:";
 choices[14]= new Array();
 choices[14][0] = "Nokia";
 choices[14][1] = "Sony";
 choices[14][2] = "Ericsson";
 choices[14][3] = "Nortel";
 answers[14] = choices[14][2];
 units[14] = "107";
 comments[14] = "Id Pregunta: 3321. NULL";


//  Id pregunta: 3348 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  Cuando el comando &lsquo;ping 127.0.0.1&rsquo; produce un eco correcto:";
 choices[15]= new Array();
 choices[15][0] = "Significa que la tarjeta de red del ordenador donde se ejecuta funciona correctamente";
 choices[15][1] = "Significa que la pila de protocolos TCP/IP del ordenador donde se ejecuta funciona correctamente, aunque la tarjeta de red del mismo ordenador falle";
 choices[15][2] = "El mensaje de eco incluye el n&uacute;mero de saltos entre dos ordenadores en la red IP";
 choices[15][3] = "Nada de lo anterior es correcto";
 answers[15] = choices[15][1];
 units[15] = "100";
 comments[15] = "Id Pregunta: 3348. NULL";


//  Id pregunta: 3349 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  Cuando hablamos de Frame Relay, &iquest;En qu&eacute; consiste el CIR?:";
 choices[16]= new Array();
 choices[16][0] = "El el tanto por ciento de ocupaci&oacute;n de canal m&aacute;ximo en las horas punta, seg&uacute;n el contrato de calidad de servicio";
 choices[16][1] = "Es la tarifa m&iacute;nima de alquiler de circuito que nos da derecho al envio de un n&uacute;mero de tramas al mes (las tramas en horas valle se ponderan con un factor variable)";
 choices[16][2] = "El la velocidad m&aacute;xima de informaci&oacute;n que el transportista nos asegura en cualquier momento, pudiendo 'tirar a la basura' las que excedan ese valor, si hay saturaci&oacute;n en la red";
 choices[16][3] = "Es el n&uacute;mero m&aacute;ximo de tramas err&oacute;neas (en porcentaje) que el transportista nos asegura en el contrato de nuestra 'Calidad de Servicio'";
 answers[16] = choices[16][2];
 units[16] = "109";
 comments[16] = "Id Pregunta: 3349. ";


//  Id pregunta: 3420 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Indicar cu&aacute;l de las siguientes ventajas corresponde al uso de una pasarela de aplicaci&oacute;n como cortafuegos:";
 choices[17]= new Array();
 choices[17][0] = "Simplicidad";
 choices[17][1] = "Facilidad de control";
 choices[17][2] = "Rapidez";
 choices[17][3] = "Transparencia";
 answers[17] = choices[17][1];
 units[17] = "111";
 comments[17] = "Id Pregunta: 3420. NULL";


//  Id pregunta: 3438 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  El proceso de multiplexaci&oacute;n:";
 choices[18]= new Array();
 choices[18][0] = "Permite a dispositivos ejecutar diferentes aplicaciones software al mismo tiempo";
 choices[18][1] = "Interconecta m&uacute;ltiples redes que usan diferentes medio f&iacute;sico de enlace";
 choices[18][2] = "Permite que la informaci&oacute;n de encaminamiento (routing) de diferentes protocolos se intercambie y se use para actualizar las tablas de encaminamiento";
 choices[18][3] = "Permite que datos de fuentes diferentes sean transmitidos simult&aacute;neamente sobre un &uacute;nico enlace";
 answers[18] = choices[18][3];
 units[18] = "99, 100, 105";
 comments[18] = "Id Pregunta: 3438. *: multiplexacion";


//  Id pregunta: 3440 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  El protocolo ARP es:";
 choices[19]= new Array();
 choices[19][0] = "Automatic Resolution Protocol, Protocolo de resoluci&oacute;n autom&aacute;tica";
 choices[19][1] = "Adress Reservation Protocol, protocolo de reserva de direcciones";
 choices[19][2] = "Address Resolution Protocol, protocolo de resoluci&oacute;n de direcciones";
 choices[19][3] = "Automatic Response Protocol, protocolo de respuesta autom&aacute;tica";
 answers[19] = choices[19][2];
 units[19] = "102";
 comments[19] = "Id Pregunta: 3440. ";


//  Id pregunta: 3457 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  El protocolo SDLC es:";
 choices[20]= new Array();
 choices[20][0] = "Un protocolo est&aacute;ndar OSI de nivel 2";
 choices[20][1] = "Un protocolo 'propietario' de nivel 2";
 choices[20][2] = "Un protocolo est&aacute;ndar OSI de nivel 4";
 choices[20][3] = "Un protocolo 'propietario' de nivel 4";
 answers[20] = choices[20][1];
 units[20] = "100";
 comments[20] = "Id Pregunta: 3457. NULL";


//  Id pregunta: 3531 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  En la tecnolog&iacute;a de web-services, una de las afirmaciones siguientes no es correcta:";
 choices[21]= new Array();
 choices[21][0] = "SOAP deriva de XML-RPC";
 choices[21][1] = "Se emplea WSDL (Web Service Definition Language) como lenguaje de descripci&oacute;n de web services por sus proveedores";
 choices[21][2] = "UDDI (Universal Description Discovery and Integration) permite la publicaci&oacute;n y localizaci&oacute;n de los servicios web";
 choices[21][3] = "WSSL (Web Service Specification Language) se usa como lenguaje de especificaci&oacute;n de los servicios web";
 answers[21] = choices[21][3];
 units[21] = "51.69";
 comments[21] = "Id Pregunta: 3531. NULL";


//  Id pregunta: 3533 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  En las necesidades para establecer una aplicaci&oacute;n de videoconferencia, es falso que se requiera:";
 choices[22]= new Array();
 choices[22][0] = "una compresi&oacute;n / descompresi&oacute;n en tiempo real";
 choices[22][1] = "unos l&iacute;mites m&iacute;nimos y m&aacute;ximos para el retardo de comunicaci&oacute;n";
 choices[22][2] = "una sincronizaci&oacute;n de audio y de video";
 choices[22][3] = "un protocolo de se&ntilde;alizaci&oacute;n";
 answers[22] = choices[22][1];
 units[22] = "117";
 comments[22] = "Id Pregunta: 3533. ";


//  Id pregunta: 3563 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  En un entorno donde m&uacute;ltiples ordenadores cliente experimentan congesti&oacute;n accediendo a ficheros en unservidor centralizado:";
 choices[23]= new Array();
 choices[23][0] = "Un conmutador (switch) con un ancho de banda mayor dedicado a las puertas de los clientes ayudar&aacute; a aliviar la congesti&oacute;n en el servidor";
 choices[23][1] = "Un switch con el mismo ancho de banda para cada puerta asegurar&aacute; que se la carga de trabajo se distribuya";
 choices[23][2] = "Un an&aacute;lisis de las pautas de tr&aacute;fico y de los puntos cuellos de botella ayudar&aacute; a determinar el tipo de conmutador apropiado";
 choices[23][3] = "Un puente multipuerta proporcionar&aacute; acceso dedicado a la puerta del servidor y aliviar&aacute; la congesti&oacute;n";
 answers[23] = choices[23][2];
 units[23] = "102, 104";
 comments[23] = "Id Pregunta: 3563. ";


//  Id pregunta: 3575 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  En una red de &aacute;rea local que utiliza la t&eacute;cnica de acceso al medio conocida como contienda, una de las siguientes afirmaciones es falsa. Se&ntilde;&aacute;lela:";
 choices[24]= new Array();
 choices[24][0] = "Se pueden producir colisiones";
 choices[24][1] = "Cualquier estaci&oacute;n de la Red de &Aacute;rea Local puede transmitir en cualquier momento";
 choices[24][2] = "Se pueden establecer prioridades";
 choices[24][3] = "Ofrece buen rendimiento a baja carga";
 answers[24] = choices[24][2];
 units[24] = "101";
 comments[24] = "Id Pregunta: 3575. ";


//  Id pregunta: 3679 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Una transmisi&oacute;n de datos que consiste en un &uacute;nico paquete de datos se env&iacute;a a un subconjunto espec&iacute;fico de los nodos de una red se denomina:";
 choices[25]= new Array();
 choices[25][0] = "Broadcast";
 choices[25][1] = "Multicast";
 choices[25][2] = "Subnetcast";
 choices[25][3] = "Unicast";
 answers[25] = choices[25][1];
 units[25] = "100";
 comments[25] = "Id Pregunta: 3679. NULL";


//  Id pregunta: 3693 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  Las direcciones de tipo B en IPv4:";
 choices[26]= new Array();
 choices[26][0] = "Comienzan por '110'";
 choices[26][1] = "incluyen entre ellas a la direcci&oacute;n 193.168.25.73";
 choices[26][2] = "destina 16 bits para los sistemas";
 choices[26][3] = "es utilizada para direcciones multicast";
 answers[26] = choices[26][2];
 units[26] = "100";
 comments[26] = "Id Pregunta: 3693. NULL";


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


//  Id pregunta: 3711 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  LMDS es:";
 choices[28]= new Array();
 choices[28][0] = "una tecnolog&iacute;a de banda ancha para un bucle de abonado sin cable";
 choices[28][1] = "una tecnolog&iacute;a de banda estrecha para un bucle de abonado sin cable";
 choices[28][2] = "una tecnolog&iacute;a de realizaci&oacute;n de circuitos monol&iacute;ticos de microondas en banda S";
 choices[28][3] = "un est&aacute;ndar para la programaci&oacute;n de interfaces de dispositivos multimedia";
 answers[28] = choices[28][0];
 units[28] = "108";
 comments[28] = "Id Pregunta: 3711. ";


//  Id pregunta: 3738 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  Los puentes que evitan el bucle de paquetes cuando hay varios enlaces entre ellos se denominan:";
 choices[29]= new Array();
 choices[29][0] = "Adaptativos y redundantes";
 choices[29][1] = "Tipo 'source routing'";
 choices[29][2] = "Tipo 'spanning tree'";
 choices[29][3] = "De inversi&oacute;n de se&ntilde;ales f&iacute;sicas";
 answers[29] = choices[29][2];
 units[29] = "102";
 comments[29] = "Id Pregunta: 3738. ";


//  Id pregunta: 3752 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  MIME responde por:";
 choices[30]= new Array();
 choices[30][0] = "Multimedia Internet Mail Extensions";
 choices[30][1] = "Multimedia Information Mail Extensions";
 choices[30][2] = "Multipurpose Internet Mail Extensions";
 choices[30][3] = "Multipurpose Information Mail Extensions";
 answers[30] = choices[30][2];
 units[30] = "106";
 comments[30] = "Id Pregunta: 3752. ";


//  Id pregunta: 3758 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  Para conectar una intranet dispersa geogr&aacute;ficamente con aplicaciones cr&iacute;ticas, la mejor opci&oacute;n es:";
 choices[31]= new Array();
 choices[31][0] = "El acceso telef&oacute;nico conmutado";
 choices[31][1] = "Utilizar la t&eacute;cnica de Tunneling";
 choices[31][2] = "Utilizar l&iacute;neas privadas";
 choices[31][3] = "Utilizar Internet como mecanismo de interconexi&oacute;n de los equipos de la intranet";
 answers[31] = choices[31][1];
 units[31] = "113";
 comments[31] = "Id Pregunta: 3758. ";


//  Id pregunta: 3786 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  Respecto a la serie de est&aacute;ndares de redes inal&aacute;mbricas 802.x podemos decir que:";
 choices[32]= new Array();
 choices[32][0] = "802.11b es posterior a 802.11a";
 choices[32][1] = "802.11a admite una velocidad m&aacute;xima de 54 Mbps";
 choices[32][2] = "la serie 802.x tiene su origen en Europa, en el ETSI";
 choices[32][3] = "todo lo anterior es correcto";
 answers[32] = choices[32][1];
 units[32] = "107";
 comments[32] = "Id Pregunta: 3786. NULL";


//  Id pregunta: 3787 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  Respecto a las Infraestructuras Comunes de Telecomunicaciones (ICTs):";
 choices[33]= new Array();
 choices[33][0] = "Pueden ser llevadas a cabo y firmadas por cualquier persona independientemente de su formaci&oacute;n acad&eacute;mica";
 choices[33][1] = "&Uacute;nicamente pueden ser firmadas por ingenieros de telecomunicaci&oacute;n, y deben ser visadas por el Colegio de Ingenieros de Telecomunicaci&oacute;n";
 choices[33][2] = "Tienen distinta legislaci&oacute;n en Espa&ntilde;a seg&uacute;n la comunidad aut&oacute;noma de que se trate";
 choices[33][3] = "Nada de lo anterior es cierto";
 answers[33] = choices[33][1];
 units[33] = "110";
 comments[33] = "Id Pregunta: 3787. ";


//  Id pregunta: 3807 AÃ±o de creación de pregunta: 2002-01-01
 questions[34]= "35)  Seg&uacute;n el modelo internet SLIP y PPP pertenecen:";
 choices[34]= new Array();
 choices[34][0] = "Nivel de enlace";
 choices[34][1] = "Nivel de red";
 choices[34][2] = "Nivel de internet";
 choices[34][3] = "Nivel de aplicaci&oacute;n";
 answers[34] = choices[34][1];
 units[34] = "100";
 comments[34] = "Id Pregunta: 3807. NULL";


//  Id pregunta: 3812 AÃ±o de creación de pregunta: 2002-01-01
 questions[35]= "36)  Seleccione la respuesta err&oacute;nea respecto de UMTS:";
 choices[35]= new Array();
 choices[35][0] = "La velocidad est&aacute;ndar de UMTS se sit&uacute;a en 384 Kbps";
 choices[35][1] = "UMTS fue iniciativa de IEEE";
 choices[35][2] = "UMTS permite acceso a redes IP";
 choices[35][3] = "El &eacute;xito de UMTS est&aacute; supeditado a la acogida de GPRS";
 answers[35] = choices[35][1];
 units[35] = "108";
 comments[35] = "Id Pregunta: 3812. ";


//  Id pregunta: 3821 AÃ±o de creación de pregunta: 2002-01-01
 questions[36]= "37)  Se&ntilde;ale la afirmaci&oacute;n falsa relativa a la t&eacute;cnica de multiplexaci&oacute;n en el &aacute;mbito de las comunicaciones:";
 choices[36]= new Array();
 choices[36][0] = "Mejora la calidad de la se&ntilde;al transmitida";
 choices[36][1] = "Sirve para establecer varias comunicaciones independientes en un solo enlace";
 choices[36][2] = "Se puede realizar utilizando divisi&oacute;n en frecuencia o divisi&oacute;n en el tiempo";
 choices[36][3] = "Permite aprovechar al m&aacute;ximo la capacidad del enlace";
 answers[36] = choices[36][0];
 units[36] = "103";
 comments[36] = "Id Pregunta: 3821. ";


//  Id pregunta: 3876 AÃ±o de creación de pregunta: 2003-01-01
 questions[37]= "38)  &iquest;Cu&aacute;l de los siguientes protocolos se usa para se&ntilde;alizaci&oacute;n en VoIP?";
 choices[37]= new Array();
 choices[37][0] = "POTS";
 choices[37][1] = "RSVP";
 choices[37][2] = "DTMF";
 choices[37][3] = "SIP";
 answers[37] = choices[37][3];
 units[37] = "100";
 comments[37] = "Id Pregunta: 3876. NULL";


//  Id pregunta: 3901 AÃ±o de creación de pregunta: 2003-01-01
 questions[38]= "39)  La nueva norma llamada WiMAX es:";
 choices[38]= new Array();
 choices[38][0] = "La norma IEEE 802.12";
 choices[38][1] = "Una norma WLAN europea elaborada por el Instituto Europeo de Normas de Telecomunicaciones (ETSI) y es similar a IEEE 802.11a";
 choices[38][2] = "Una norma inal&aacute;mbrica fija que deber&iacute;a estar en condiciones de transmitir 32-56 km con velocidades m&aacute;ximas de datos cercanas a 70 Mbit/s";
 choices[38][3] = "Ninguna de las anteriores es cierta";
 answers[38] = choices[38][2];
 units[38] = "107";
 comments[38] = "Id Pregunta: 3901. NULL";


//  Id pregunta: 3936 AÃ±o de creación de pregunta: 2003-01-01
 questions[39]= "40)  &iquest;Qu&eacute; es falso respecto a un applet?";
 choices[39]= new Array();
 choices[39][0] = "Utiliza clases de la librer&iacute;a Java.applet";
 choices[39][1] = "Tienen un m&eacute;todo paint()";
 choices[39][2] = "Se pueden visualizar mediante appletviewer ";
 choices[39][3] = "Necesitan m&eacute;todo main() ";
 answers[39] = choices[39][3];
 units[39] = "107";
 comments[39] = "Id Pregunta: 3936. ";


//  Id pregunta: 3947 AÃ±o de creación de pregunta: 2003-01-01
 questions[40]= "41)  En el modelo OSI de ISO indicar cu&aacute;l de los siguientes p&aacute;rrafos describe el nivel de Sesi&oacute;n:";
 choices[40]= new Array();
 choices[40][0] = "Proporciona el control de di&aacute;logo, con el fin de mantener un registro en la parte que est&aacute; hablando en cierto momento y proporciona facilidades en la sincronizaci&oacute;n";
 choices[40][1] = "Es una colecci&oacute;n de varios protocolos para actividades comunes, como el correo electr&oacute;nico, la transferencia de archivos y la conexi&oacute;n entre terminales remotos a las computadoras en una red";
 choices[40][2] = "Es la que se encarga de la elecci&oacute;n de la mejor ruta, conectando con orientaci&oacute;n a conexi&oacute;n o sin ella";
 choices[40][3] = "Es la que se encarga de los mecanismos de detecci&oacute;n y correcci&oacute;n de errores";
 answers[40] = choices[40][0];
 units[40] = "100";
 comments[40] = "Id Pregunta: 3947. ";


//  Id pregunta: 3982 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  Se&ntilde;ale la respuesta falsa:";
 choices[41]= new Array();
 choices[41][0] = "ICMP es un protocolo de nivel 3.";
 choices[41][1] = "TCP es orientado a conexi&oacute;n y no confirmado.";
 choices[41][2] = "UDP es no orientado a conexi&oacute;n";
 choices[41][3] = "La cabecera de IPv4 tiene un campo de offset de 1.5 bytes.";
 answers[41] = choices[41][1];
 units[41] = "100";
 comments[41] = "Id Pregunta: 3982. ";


//  Id pregunta: 4013 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  Con respecto a las redes locales y personales inal&aacute;mbricas, se&ntilde;ale qu&eacute; afirmaci&oacute;n no es correcta:";
 choices[42]= new Array();
 choices[42][0] = "El est&aacute;ndar 802.11b funciona en la banda de 2,4 GHz y utiliza DSSS en el nivel f&iacute;sico.";
 choices[42][1] = "El est&aacute;ndar 802.11a funciona en la banda de 5 GHz y utiliza OFDM en el nivel f&iacute;sico.";
 choices[42][2] = "El est&aacute;ndar 802.11g funciona en la banda de 2,4 GHz y puede utilizar OFDM o DSSS en el nivel f&iacute;sico.";
 choices[42][3] = "El est&aacute;ndar Bluetooth funciona en la banda de 2,4 GHz y utiliza OFDM en el nivel f&iacute;sico.";
 answers[42] = choices[42][3];
 units[42] = "107";
 comments[42] = "Id Pregunta: 4013. NULL";


//  Id pregunta: 4018 AÃ±o de creación de pregunta: 2006-01-01
 questions[43]= "44)  &iquest;Qu&eacute; modulaci&oacute;n usa el chip para PLC de DS2?";
 choices[43]= new Array();
 choices[43][0] = "GSMK";
 choices[43][1] = "DSSS";
 choices[43][2] = "QPSK";
 choices[43][3] = "OFDM";
 answers[43] = choices[43][3];
 units[43] = "107";
 comments[43] = "Id Pregunta: 4018. NULL";


//  Id pregunta: 4021 AÃ±o de creación de pregunta: 2006-01-01
 questions[44]= "45)  La arquitectura del sistema GPRS, adem&aacute;s de los elementos del sistema GSM, requiere una serie de nuevos elementos entre los que se encuentran:";
 choices[44]= new Array();
 choices[44][0] = "Los nodos GGSN y GSGN";
 choices[44][1] = "Los nodos SGSN y GSSN";
 choices[44][2] = "Los nodos GSGN y SSGN";
 choices[44][3] = "Los nodos GGSN y SGSN";
 answers[44] = choices[44][3];
 units[44] = "108";
 comments[44] = "Id Pregunta: 4021. ";


//  Id pregunta: 4029 AÃ±o de creación de pregunta: 2006-01-01
 questions[45]= "46)  En una trama Frame Relay, la longitud del campo de direcci&oacute;n, y por lo tanto del DLCI, se determina:";
 choices[45]= new Array();
 choices[45][0] = "Con la informaci&oacute;n contenida en la cabecera de la trama, en el campo VA.";
 choices[45][1] = "Con la informaci&oacute;n contenida en la cabecera de la trama, en el campo EA.";
 choices[45][2] = "Con la informaci&oacute;n contenida en la cabecera de la trama, en el campo CR.";
 choices[45][3] = "El campo de direcci&oacute;n es de longitud fija, por lo que no necesita de ning&uacute;n otro campo en la cabecera para indicar su longitud.";
 answers[45] = choices[45][1];
 units[45] = "109";
 comments[45] = "Id Pregunta: 4029. ";


//  Id pregunta: 4066 AÃ±o de creación de pregunta: 2006-01-01
 questions[46]= "47)  Que elemento de los siguientes no son propios de instalaciones de VoIP";
 choices[46]= new Array();
 choices[46][0] = "gatekeeper";
 choices[46][1] = "SIP";
 choices[46][2] = "router";
 choices[46][3] = "todos los anteriores";
 answers[46] = choices[46][3];
 units[46] = "117";
 comments[46] = "Id Pregunta: 4066. ";


//  Id pregunta: 4073 AÃ±o de creación de pregunta: 2006-01-01
 questions[47]= "48)  &iquest;Una BD relacional puede distribuirse en diferentes maquinas?";
 choices[47]= new Array();
 choices[47][0] = "Si";
 choices[47][1] = "Si, pero solo en entorno Linux";
 choices[47][2] = "No";
 choices[47][3] = "No porque se violaria la integridad  referencial";
 answers[47] = choices[47][0];
 units[47] = "57";
 comments[47] = "Id Pregunta: 4073. ";


//  Id pregunta: 4117 AÃ±o de creación de pregunta: 2006-01-01
 questions[48]= "49)  El servicio que copia las p&aacute;ginas de un sitio web a servidores dispersos geogr&aacute;ficamente pafa agilizar la entrega al usuario se llama";
 choices[48]= new Array();
 choices[48][0] = "procesamiento distribuido";
 choices[48][1] = "multicast";
 choices[48][2] = "cluster";
 choices[48][3] = "entrega de contenido";
 answers[48] = choices[48][3];
 units[48] = "116";
 comments[48] = "Id Pregunta: 4117. ";


//  Id pregunta: 4129 AÃ±o de creación de pregunta: 2006-01-01
 questions[49]= "50)  Servicio de directorio y registro de nombres basado en Java";
 choices[49]= new Array();
 choices[49][0] = "JNDI";
 choices[49][1] = "UDDI";
 choices[49][2] = "JINI";
 choices[49][3] = "LDAP";
 answers[49] = choices[49][0];
 units[49] = "106";
 comments[49] = "Id Pregunta: 4129. ";


//  Id pregunta: 4146 AÃ±o de creación de pregunta: 2006-01-01
 questions[50]= "51)  Una aplicaci&oacute;n que se localiza en un servidor con el fin de ofrecer seguridad a la red interna, por lo que ha sido especialmente configurado para la recepci&oacute;n de ataques es un...";
 choices[50]= new Array();
 choices[50][0] = "cortafuegos";
 choices[50][1] = "sonda";
 choices[50][2] = "honeypot";
 choices[50][3] = "basti&oacute;n";
 answers[50] = choices[50][3];
 units[50] = "111";
 comments[50] = "Id Pregunta: 4146. NULL";


//  Id pregunta: 4224 AÃ±o de creación de pregunta: 2006-01-01
 questions[51]= "52)  Las SDU (Service Data Unit) son unidades de datos";
 choices[51]= new Array();
 choices[51][0] = "Que se intercambian entre  entidades hom&oacute;logas";
 choices[51][1] = "Que proporcionan informaci&oacute;n de control entre niveles";
 choices[51][2] = "Correspondientes a las primitivas de comunicaci&oacute;n";
 choices[51][3] = "Que deben ser tratados por el nivel superior (N+1) de forma transparente";
 answers[51] = choices[51][3];
 units[51] = "100";
 comments[51] = "Id Pregunta: 4224. ";


//  Id pregunta: 4543 AÃ±o de creación de pregunta: 2007-01-01
 questions[52]= "53)  El sistema de radiodifusi&oacute;n digital de audio (DAB) emplea bloques de frecuencia cuyo ancho de banda es de:";
 choices[52]= new Array();
 choices[52][0] = "200 KHz.";
 choices[52][1] = "1,536 MHz.";
 choices[52][2] = "8 MHz.";
 choices[52][3] = "4,567 MHz";
 answers[52] = choices[52][1];
 units[52] = "";
 comments[52] = "Id Pregunta: 4543. ";


//  Id pregunta: 4646 AÃ±o de creación de pregunta: 2007-01-01
 questions[53]= "54)  Dentro del protocolo de Ia capa de transporte TCP (Transmision Control Protocol&quot;) cual de las siguientes primitivas no es de solicitud de servicio:";
 choices[53]= new Array();
 choices[53][0] = "Active open";
 choices[53][1] = "Send";
 choices[53][2] = "Open success";
 choices[53][3] = "Allocate";
 answers[53] = choices[53][2];
 units[53] = "100";
 comments[53] = "Id Pregunta: 4646. ";


//  Id pregunta: 4664 AÃ±o de creación de pregunta: 2007-01-01
 questions[54]= "55)  HSDPA corresponde a la generaci&oacute;n m&oacute;vil";
 choices[54]= new Array();
 choices[54][0] = "4G";
 choices[54][1] = "3.5G";
 choices[54][2] = "5G";
 choices[54][3] = "Ninguna de las anteriores";
 answers[54] = choices[54][1];
 units[54] = "108";
 comments[54] = "Id Pregunta: 4664. ";


//  Id pregunta: 4914 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  Entre los objetos utilizados por ADO.NET, no se encuentra:";
 choices[55]= new Array();
 choices[55][0] = "DataSet.";
 choices[55][1] = "DataReader.";
 choices[55][2] = "DataRequest.";
 choices[55][3] = "DataAdapter.";
 answers[55] = choices[55][2];
 units[55] = "115";
 comments[55] = "Id Pregunta: 4914. Examen TIC B 2007";


//  Id pregunta: 5035 AÃ±o de creación de pregunta: 2003-01-01
 questions[56]= "57)  Indique cu&aacute;l de las siguientes recomendaciones pertenece a las realizadas por el UIT-T:";
 choices[56]= new Array();
 choices[56][0] = "Serie X &ndash; orientadas a la transmisi&oacute;n de datos en redes anal&oacute;gicas telef&oacute;nicas.";
 choices[56][1] = "Serie V &ndash; orientadas a redes de datos y comunicaciones en sistemas abiertos";
 choices[56][2] = "Serie D &ndash; orientadas a la transmisi&oacute;n de documentos";
 choices[56][3] = "Serie I &ndash; red digital de servicios integrados";
 answers[56] = choices[56][3];
 units[56] = "99";
 comments[56] = "Id Pregunta: 5035. Examen TIC A 2007";


//  Id pregunta: 5162 AÃ±o de creación de pregunta: 2003-01-01
 questions[57]= "58)  Indique cu&aacute;l de las siguientes afirmaciones es FALSA:";
 choices[57]= new Array();
 choices[57][0] = "La tecnolog&iacute;a WIMAX permite operar en condiciones en las que no existe l&iacute;nea de visi&oacute;n directa entre la estaci&oacute;n base y el terminal.";
 choices[57][1] = "En Espa&ntilde;a, la tecnolog&iacute;a WIMAX s&oacute;lo puede utilizarse en la banda de uso libre de 5 GHz.";
 choices[57][2] = "La tecnolog&iacute;a WIMAX utiliza un esquema de modulaci&oacute;n multiportadora OFDM.";
 choices[57][3] = "La tecnolog&iacute;a WIMAX se basa en aspectos de la capa f&iacute;sica y de control de acceso al m&eacute;dio del est&aacute;ndar IEEE 802.16";
 answers[57] = choices[57][1];
 units[57] = "107";
 comments[57] = "Id Pregunta: 5162. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5169 AÃ±o de creación de pregunta: 2003-01-01
 questions[58]= "59)  El protocolo que contiene las especificaciones para garantizar la integridad y seguridad en mensajer&iacute;a de Servicios Web es:";
 choices[58]= new Array();
 choices[58][0] = "RSA";
 choices[58][1] = "WS-Security (WSS)";
 choices[58][2] = "X.509";
 choices[58][3] = "Kerberos";
 answers[58] = choices[58][1];
 units[58] = "111";
 comments[58] = "Id Pregunta: 5169. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5171 AÃ±o de creación de pregunta: 2003-01-01
 questions[59]= "60)  Las VPN's utilizan mecanismos basados en t&uacute;neles para:";
 choices[59]= new Array();
 choices[59][0] = "Habilitar la navegaci&oacute;n por Internet.";
 choices[59][1] = "Encapsular paquetes de un protocolo dentro de otros paquetes pudiendo acomodar as&iacute; protocolos incompatibles.";
 choices[59][2] = "Efectuar una tarificaci&oacute;n a la corporaci&oacute;n que habilita acceso VPN";
 choices[59][3] = "Deshabilitar la seguridad del acceso VPN una vez autenticado el cliente VPN.";
 answers[59] = choices[59][1];
 units[59] = "111";
 comments[59] = "Id Pregunta: 5171. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5609 AÃ±o de creación de pregunta: 2003-01-01
 questions[60]= "61)  Los mensajes MPDU en X.400 puedes ser:";
 choices[60]= new Array();
 choices[60][0] = "Sondas, Informes y los propios mensajes";
 choices[60][1] = "Sondas, Notificaciones, mensajes de control y el propio mensaje";
 choices[60][2] = "Notificaciones, Informes de entrega y los propios mensajes";
 choices[60][3] = "Solo los propios mensajes denominados IPM";
 answers[60] = choices[60][0];
 units[60] = "106";
 comments[60] = "Id Pregunta: 5609. ";


//  Id pregunta: 5667 AÃ±o de creación de pregunta: 2003-01-01
 questions[61]= "62)  Cual de los siguientes sistemas est&aacute; colocado tradicionalmente en la DMZ de una red";
 choices[61]= new Array();
 choices[61][0] = "Servidor de aplicaciones";
 choices[61][1] = "Proxy";
 choices[61][2] = "Servidor LDAP";
 choices[61][3] = "Servidor de base de datos";
 answers[61] = choices[61][1];
 units[61] = "111";
 comments[61] = "Id Pregunta: 5667. NULL";


//  Id pregunta: 5855 AÃ±o de creación de pregunta: 2009-01-01
 questions[62]= "63)  En referencia a WiMAX, seleccione cu&aacute;l de las siguientes opciones se corresponde con WiMAX m&oacute;vil:";
 choices[62]= new Array();
 choices[62][0] = "802.16i";
 choices[62][1] = "802.16e";
 choices[62][2] = "802.16f";
 choices[62][3] = "802.16n";
 answers[62] = choices[62][1];
 units[62] = "107";
 comments[62] = "Id Pregunta: 5855. Pregunta 35";


//  Id pregunta: 5950 AÃ±o de creación de pregunta: 2009-01-01
 questions[63]= "64)  &iquest;Qu&eacute; es un sistema IDM (Identity Manager)?";
 choices[63]= new Array();
 choices[63][0] = "Es una plataforma que permite gestionar desde un s&oacute;lo punto el ciclo de vida de una identidad";
 choices[63][1] = "Es cualquier sistema de gesti&oacute;n de usuarios.";
 choices[63][2] = "Es una plataforma de gesti&oacute;n de PKI para proporcionar tarjetas de identificaci&oacute;n a los empleados de la organizaci&oacute;n.";
 choices[63][3] = "Es una plataforma que impide la descentralizaci&oacute;n de la administraci&oacute;n de los sistemas de control de acceso basados en roles.";
 answers[63] = choices[63][0];
 units[63] = "118";
 comments[63] = "Id Pregunta: 5950. ";


//  Id pregunta: 5951 AÃ±o de creación de pregunta: 2009-01-01
 questions[64]= "65)  &iquest;Qu&eacute; es SSO?";
 choices[64]= new Array();
 choices[64][0] = "Es un Sistema Operativo para proporcionar la autorizaci&oacute;n de utilizaci&oacute;n de recursos basado en certificados de usuario.";
 choices[64][1] = "Es un m&eacute;todo de control de acceso que permite a un usuario validarse una &uacute;nica vez y tener acceso a diferentes recursos sin tener que volver a introducir sus credenciales";
 choices[64][2] = "Es una plataforma que almacena todas las contrase&ntilde;as del usuario para que &eacute;ste no tenga que teclearlas cada vez que accede a las distintas aplicaciones";
 choices[64][3] = "Es la plataforma PKI que emite certificados de empleado p&uacute;blico para la AGE";
 answers[64] = choices[64][1];
 units[64] = "118";
 comments[64] = "Id Pregunta: 5951. ";


//  Id pregunta: 6044 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  &iquest;Cu&aacute;l de estas herramientas NO est&aacute; relacionada con la gesti&oacute;n de identidades?";
 choices[65]= new Array();
 choices[65][0] = "Oracle Identity Management";
 choices[65][1] = "BMC Remedy Action Request System";
 choices[65][2] = "IBM Tivoli Identity Manager";
 choices[65][3] = "Novell Nsure";
 answers[65] = choices[65][1];
 units[65] = "118";
 comments[65] = "Id Pregunta: 6044. ";


//  Id pregunta: 6072 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  Seg&uacute;n la normativa de ICT (Infraestructuras Comunes de Telecomunicaci&oacute;n), todo edificio de nueva construcci&oacute;n debe contar con un proyecto t&eacute;cnico que prevea la conexi&oacute;n a los puntos de conexi&oacute;n de las viviendas o locales de:";
 choices[66]= new Array();
 choices[66][0] = "Las se&ntilde;ales de radiodifusi&oacute;n sonora y televisi&oacute;n terrenales";
 choices[66][1] = "El servicio de telefon&iacute;a disponible al p&uacute;blico";
 choices[66][2] = "Los servicios de telecomunicaciones de banda ancha";
 choices[66][3] = "Todas las anteriores son correctas";
 answers[66] = choices[66][3];
 units[66] = "105";
 comments[66] = "Id Pregunta: 6072. ";


//  Id pregunta: 6105 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  Una organizaci&oacute;n dispone para numerar su red del prefijo 192.168.1.0/24. Entonces:";
 choices[67]= new Array();
 choices[67][0] = "Podr&iacute;a dar a una de sus subredes el prefijo 190.18.1.0/20.";
 choices[67][1] = "Podr&iacute;a generar 16 prefijos, cada uno con capacidad para numerar 14 m&aacute;quinas.";
 choices[67][2] = "Podr&iacute;a generar 8 prefijos, cada uno con capacidad para numerar 254 m&aacute;quinas.";
 choices[67][3] = "Podr&iacute;a generar 4 prefijos, cada uno con capacidad para numerar 126 m&aacute;quinas.";
 answers[67] = choices[67][1];
 units[67] = "100";
 comments[67] = "Id Pregunta: 6105. TIC A 2009";


//  Id pregunta: 6122 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)  Un navegador web que tenga que acceder al objeto http://orga.net:5050/imagen.jpg, interrogar&aacute; al servidor local de DNS:";
 choices[68]= new Array();
 choices[68][0] = "Sobre el registro de tipo NS correspondiente al nombre orga.net.";
 choices[68][1] = "Sobre el registro de tipo A correspondiente al nombre orga.net.";
 choices[68][2] = "Sobre el registro de tipo NET correspondiente al nombre orga.net en cualquier puerto.";
 choices[68][3] = "Sobre el registro de tipo SRV correspondiente al nombre orga.net en el puerto 5050.";
 answers[68] = choices[68][1];
 units[68] = "112";
 comments[68] = "Id Pregunta: 6122. TIC A 2009";


//  Id pregunta: 6343 AÃ±o de creación de pregunta: 2010-01-01
 questions[69]= "70)  Uno de los objetivos perseguidos por la Web 2.0 es:";
 choices[69]= new Array();
 choices[69][0] = "Que las aplicaciones no est&eacute;n disponibles en un solo dispositivo.";
 choices[69][1] = "Que sea el proveedor del servicio el que cree todos los contenidos.";
 choices[69][2] = "Que la comunicaci&oacute;n entre los usuarios este centralizada.";
 choices[69][3] = "Que los sistemas sean fuertemente acoplados.";
 answers[69] = choices[69][0];
 units[69] = "120";
 comments[69] = "Id Pregunta: 6343. NULL";


//  Id pregunta: 6542 AÃ±o de creación de pregunta: 2010-01-01
 questions[70]= "71)  Un usuario de Kerberos";
 choices[70]= new Array();
 choices[70][0] = "Recibe un ticket para garantizar el acceso TGT";
 choices[70][1] = "El ticket permite al usuario pedir acceso a los distintos recursos";
 choices[70][2] = "El servicio de generaci&oacute;n de tickets TGS genera los tickets con las claves de sesi&oacute;n.";
 choices[70][3] = "Todas las respuestas anteriores son correctas";
 answers[70] = choices[70][3];
 units[70] = "111";
 comments[70] = "Id Pregunta: 6542. NULL";


//  Id pregunta: 8301 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  Dentro del nivel AAL de ATM, AAL2 se caracteriza por tener: ";
 choices[71]= new Array();
 choices[71][0] = "Retardo constante y tasa de bit variable. ";
 choices[71][1] = "Retardo variable y tasa de bit constante.";
 choices[71][2] = "Retardo variable y tasa de bit variable. ";
 choices[71][3] = "Retardo constante y tasa de bit constante.";
 answers[71] = choices[71][0];
 units[71] = "109";
 comments[71] = "Id Pregunta: 8301. Examen TIC A2 2010";


//  Id pregunta: 8323 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  La normativa que establece las condiciones t&eacute;cnicas para la emisi&oacute;n del servido de televisi&oacute;n digital terrestre (TDT) en alta definici&oacute;n, es: ";
 choices[72]= new Array();
 choices[72][0] = "Ley 7/2010. ";
 choices[72][1] = "Real Decreto 691/2010. ";
 choices[72][2] = "Directiva 98/48/CE. ";
 choices[72][3] = "Real Decreto 944/2005. ";
 answers[72] = choices[72][1];
 units[72] = "105, 110";
 comments[72] = "Id Pregunta: 8323. Examen TIC A2 2010";


//  Id pregunta: 8351 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  &iquest;Qu&eacute; librer&iacute;a de .Net permite aplicar el patr&oacute;n &quot;Inversion of Control&quot;?";
 choices[73]= new Array();
 choices[73][0] = "Unity Application Block,";
 choices[73][1] = "Logging Application Block.";
 choices[73][2] = "Ajax Control Toolkit";
 choices[73][3] = "Cached XML Data Mapper";
 answers[73] = choices[73][0];
 units[73] = "59,115";
 comments[73] = "Id Pregunta: 8351. Examen TIC A2 2010";


//  Id pregunta: 8354 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  A partir de ASP.NET 2.0, &iquest;en qu&eacute; carpeta se guarda el c&oacute;digo compilado para controles, componentes y otro c&oacute;digo que pueda ser referenciado por la aplicaci&oacute;n (los archivos dll)?";
 choices[74]= new Array();
 choices[74][0] = "App_Data.";
 choices[74][1] = "Bin.";
 choices[74][2] = "App_WebReferences";
 choices[74][3] = "Compilation";
 answers[74] = choices[74][1];
 units[74] = "59,115";
 comments[74] = "Id Pregunta: 8354. Examen TIC A2 2010";


//  Id pregunta: 8504 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  &iquest;Cu&aacute;l de los siguientes NO es un campo de control en el segmento TCP? ";
 choices[75]= new Array();
 choices[75][0] = "URG";
 choices[75][1] = "PSH";
 choices[75][2] = "END";
 choices[75][3] = "ACK";
 answers[75] = choices[75][2];
 units[75] = "100";
 comments[75] = "Id Pregunta: 8504. Examen TIC A2 2010";


//  Id pregunta: 8513 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  En el contexto de la seguridad l&oacute;gica, si hablamos de una bomba l&oacute;gica &iquest;cu&aacute;l de las siguientes afirmaciones es verdadera? ";
 choices[76]= new Array();
 choices[76][0] = "El c&oacute;digo se replica al activarse";
 choices[76][1] = "Su efecto es retardado. ";
 choices[76][2] = "No se activan por eventos. ";
 choices[76][3] = "Es otra manera de referirse a los troyanos. ";
 answers[76] = choices[76][1];
 units[76] = "111";
 comments[76] = "Id Pregunta: 8513. Examen TIC A2 2010";


//  Id pregunta: 8541 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  &iquest;En qu&eacute; a&ntilde;o ha concluido el apag&oacute;n anal&oacute;gico en Espa&ntilde;a?";
 choices[77]= new Array();
 choices[77][0] = "2007";
 choices[77][1] = "2008";
 choices[77][2] = "2009";
 choices[77][3] = "2010";
 answers[77] = choices[77][3];
 units[77] = "105";
 comments[77] = "Id Pregunta: 8541. Examen TIC A2 2010 interna";


//  Id pregunta: 8597 AÃ±o de creación de pregunta: 2011-01-01
 questions[78]= "79)  &iquest;Cu&aacute;l de las siguientes tecnolog&iacute;as NO usa JAVA como lenguaje?";
 choices[78]= new Array();
 choices[78][0] = "JavaScript";
 choices[78][1] = "JavaBeans";
 choices[78][2] = "Servlets";
 choices[78][3] = "JSP";
 answers[78] = choices[78][0];
 units[78] = "116";
 comments[78] = "Id Pregunta: 8597. Examen TIC A2 2010 interna";


//  Id pregunta: 8658 AÃ±o de creación de pregunta: 2011-01-01
 questions[79]= "80)  En una fibra &oacute;ptica multimodo de &iacute;ndice escalonado:";
 choices[79]= new Array();
 choices[79][0] = "El n&uacute;cleo tiene un &iacute;ndice de refracci&oacute;n constante en toda la secci&oacute;n cil&iacute;ndrica e inferior al del revestimiento";
 choices[79][1] = "El n&uacute;cleo tiene un &iacute;ndice de refracci&oacute;n escalonado en toda la cil&iacute;ndrica e inferior al del revestimiento";
 choices[79][2] = "El n&uacute;cleo tiene un &iacute;ndice de refracci&oacute;n escalonado en toda la cil&iacute;ndrica y superior al del revestimiento";
 choices[79][3] = "El n&uacute;cleo tiene un &iacute;ndice de refracci&oacute;n constante en toda la secci&oacute;n cil&iacute;ndrica y superior al del revestimiento";
 answers[79] = choices[79][3];
 units[79] = "99";
 comments[79] = "Id Pregunta: 8658. Examen UPM A2 2011";


//  Id pregunta: 8847 AÃ±o de creación de pregunta: 2011-01-01
 questions[80]= "81)  &iquest;Cu&aacute;l es la tecnolog&iacute;a que permite una mayor velocidad de transferencia de datos?";
 choices[80]= new Array();
 choices[80][0] = " EDGE";
 choices[80][1] = "HSDPA";
 choices[80][2] = " UMTS/3G";
 choices[80][3] = "GPRS";
 answers[80] = choices[80][1];
 units[80] = "108";
 comments[80] = "Id Pregunta: 8847. Examen UC3M 2010";


//  Id pregunta: 9024 AÃ±o de creación de pregunta: 2011-01-01
 questions[81]= "82)  El sistema de se&ntilde;alizaci&oacute;n SS7:";
 choices[81]= new Array();
 choices[81][0] = "Se ocupa, entre otras cosas, del establecimiento de llamada.";
 choices[81][1] = "S&oacute;lo se emplea en RDSI.";
 choices[81][2] = "Permite realizar llamadas, pero no intercambiar informaci&oacute;n de usuario.";
 choices[81][3] = "Ninguna de las anteriores";
 answers[81] = choices[81][0];
 units[81] = "103";
 comments[81] = "Id Pregunta: 9024. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9058 AÃ±o de creación de pregunta: 2011-01-01
 questions[82]= "83)  &iquest;Qu&eacute; categor&iacute;as de HSDPA pueden alcanzar 10 Mbits/s?";
 choices[82]= new Array();
 choices[82][0] = "9 y 10";
 choices[82][1] = "9";
 choices[82][2] = "10";
 choices[82][3] = "12";
 answers[82] = choices[82][0];
 units[82] = "108";
 comments[82] = "Id Pregunta: 9058. NULL";


//  Id pregunta: 9347 AÃ±o de creación de pregunta: 2013-01-01
 questions[83]= "84)  La red S-TESTA ";
 choices[83]= new Array();
 choices[83][0] = "Es accesible directamente desde cada Ministerio.";
 choices[83][1] = "El EuroDomain es un Dominio Local de servicios centralizados.";
 choices[83][2] = "Algunas aplicaciones que usan sus servicios son OLAF, DG TREN o DG FISH.";
 choices[83][3] = "Da acceso y opera a trav&eacute;s de Internet.";
 answers[83] = choices[83][2];
 units[83] = "103";
 comments[83] = "Id Pregunta: 9347. http://ec.europa.eu/isa/";


//  Id pregunta: 9368 AÃ±o de creación de pregunta: 2013-01-01
 questions[84]= "85)  En la tecnolog&iacute;a de Resilient Packet Ring, sobre los m&eacute;todos de protecci&oacute;n ante fallos, se puede afirmar:";
 choices[84]= new Array();
 choices[84][0] = "En Steering, ante la existencia de un evento de protecci&oacute;n, se comunica a todas las estaciones su situaci&oacute;n, de manera que eligen el sentido en que tienen que enviar la informaci&oacute;n.";
 choices[84][1] = "En Wrapping, ante la existencia de un evento de protecci&oacute;n, se comunica a todas las estaciones su situaci&oacute;n, de manera que eligen el sentido en que tienen que enviar la informaci&oacute;n.";
 choices[84][2] = "Se basan principalmente en c&oacute;digos de Hamming.";
 choices[84][3] = "El principal m&eacute;todo de correcci&oacute;n de fallos es FEC (Forward Error Correction).";
 answers[84] = choices[84][0];
 units[84] = "101";
 comments[84] = "Id Pregunta: 9368. ";


//  Id pregunta: 9379 AÃ±o de creación de pregunta: 2013-01-01
 questions[85]= "86)  Acerca de las recomendaciones relativas a X.25, se puede afirmar:";
 choices[85]= new Array();
 choices[85][0] = "X.21 define el interfaz entre ETD y ETCD para terminales que operan en modo paquete en redes p&uacute;blicas";
 choices[85][1] = "X.25 especifica los procedimientos de conexi&oacute;n en redes p&uacute;blicas X.25 entre s&iacute;.";
 choices[85][2] = "X.75 define el Interfaz entre ETD y ETCD para un equipo de datos arr&iacute;tmico con acceso a la facilidad de empaquetado/desempaquetado de datos (PAD), en una red X.25";
 choices[85][3] = "X.75 especifica los procedimientos de conexi&oacute;n en redes p&uacute;blicas X.25 entre s&iacute;.";
 answers[85] = choices[85][3];
 units[85] = "101";
 comments[85] = "Id Pregunta: 9379. ";


//  Id pregunta: 9382 AÃ±o de creación de pregunta: 2013-01-01
 questions[86]= "87)  La ley de Cooper afirma que:";
 choices[86]= new Array();
 choices[86][0] = "El n&uacute;mero m&aacute;ximo de conversaciones de voz o su equivalente en tr&aacute;fico de datos que pueden ser llevados a cabo en todo el espectro radioel&eacute;ctrico &uacute;til en una determinada &aacute;rea, se dobla cada 30 meses.";
 choices[86][1] = "Tijeras cortan papel, papel cubre a piedra, piedra aplasta lagarto, lagarto envenena a Spock.";
 choices[86][2] = "&Eacute;l n&uacute;mero de MFLOPS que un procesador puede realizar, aumenta siguiendo un ritmo logar&iacute;tmico.";
 choices[86][3] = "El rendimiento de un sistema aumenta linealmente con el n&uacute;mero de unidades de procesamiento que posea.";
 answers[86] = choices[86][0];
 units[86] = "108";
 comments[86] = "Id Pregunta: 9382. NULL";


//  Id pregunta: 9392 AÃ±o de creación de pregunta: 2013-01-01
 questions[87]= "88)  En las comunicaciones m&oacute;viles, permitir que se mantenga la conexi&oacute;n cuando un dispositivo m&oacute;vil se cambia dentro de la red a la que pertenece de la zona cubierta por una estaci&oacute;n base a otra, se conoce como:";
 choices[87]= new Array();
 choices[87][0] = "Roaming.";
 choices[87][1] = "Cobertura.";
 choices[87][2] = "Talk-out.";
 choices[87][3] = "hand-off o handover.";
 answers[87] = choices[87][3];
 units[87] = "108";
 comments[87] = "Id Pregunta: 9392. Examen TIC A2 2011 Libre";


//  Id pregunta: 10036 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  &iquest;Qu&eacute; protocolo utiliza la orden &quot;traceroute&quot; para obtener la ruta que se sigue desde nuestro equipo hasta otro en Internet?";
 choices[88]= new Array();
 choices[88][0] = "Ping ";
 choices[88][1] = "ICMP";
 choices[88][2] = "PPP";
 choices[88][3] = "RSVP";
 answers[88] = choices[88][1];
 units[88] = "100";
 comments[88] = "Id Pregunta: 10036. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10068 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  Entre los tipos de modulaci&oacute;n en las tecnolog&iacute;as xDSL se encuentra:";
 choices[89]= new Array();
 choices[89][0] = "SDH (Synchronous Digital Hierarchy).";
 choices[89][1] = "SGL (Splitterless G. Lite).";
 choices[89][2] = "SHDSL (Single-pair High-speed Digital Subscriber Line).";
 choices[89][3] = "CAP (Carrierless Amplitude Phase).";
 answers[89] = choices[89][3];
 units[89] = "107";
 comments[89] = "Id Pregunta: 10068. TIC A2, libre, Examen 2013";


//  Id pregunta: 10106 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  En el m&eacute;todo de acceso al medio CSMA-p, el emisor:";
 choices[90]= new Array();
 choices[90][0] = "Env&iacute;a datos en cuanto los tiene disponibles.";
 choices[90][1] = "Escucha el medio y los env&iacute;a cuando &eacute;ste est&aacute; libre";
 choices[90][2] = "Escucha el medio y los env&iacute;a cuando &eacute;ste est&aacute; libre con una probabilidad p";
 choices[90][3] = "Escucha el medio y los env&iacute;a cuando &eacute;ste est&aacute; libre con una probabilidad 1-p";
 answers[90] = choices[90][2];
 units[90] = "101";
 comments[90] = "Id Pregunta: 10106. ";


//  Id pregunta: 10112 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  El est&aacute;ndar para definici&oacute;n de VLAN es:";
 choices[91]= new Array();
 choices[91][0] = "IEEE 802.1D";
 choices[91][1] = "IEEE 802.1P";
 choices[91][2] = "IEEE 802.1Q";
 choices[91][3] = "IEEE 802.2";
 answers[91] = choices[91][2];
 units[91] = "101";
 comments[91] = "Id Pregunta: 10112. ";


//  Id pregunta: 10113 AÃ±o de creación de pregunta: 2014-01-01
 questions[92]= "93)  El tama&ntilde;o de trama m&iacute;nimo en Ethernet es:";
 choices[92]= new Array();
 choices[92][0] = "48 bytes";
 choices[92][1] = "24 bytes";
 choices[92][2] = "128 bytes";
 choices[92][3] = "64 bytes";
 answers[92] = choices[92][3];
 units[92] = "101";
 comments[92] = "Id Pregunta: 10113. ";


//  Id pregunta: 10134 AÃ±o de creación de pregunta: 2014-01-01
 questions[93]= "94)  &iquest;El reglamento de Infraestructuras Comunes de Telecomunicaci&oacute;n se encuentra recogido en?:";
 choices[93]= new Array();
 choices[93][0] = "El Real Decreto 920 / 2006";
 choices[93][1] = "El Real Decreto 346 / 2011";
 choices[93][2] = "El Real Decreto 401 / 2003";
 choices[93][3] = "Ninguno de los anteriores";
 answers[93] = choices[93][1];
 units[93] = "105";
 comments[93] = "Id Pregunta: 10134. ";


//  Id pregunta: 10196 AÃ±o de creación de pregunta: 2014-01-01
 questions[94]= "95)  &iquest;Cual de la siguientes t&eacute;cnicas de modulaci&oacute;n no es usada por las tecnolog&iacute;as xDSL?";
 choices[94]= new Array();
 choices[94][0] = "2B1Q";
 choices[94][1] = "CAP";
 choices[94][2] = "DMT";
 choices[94][3] = "WDM";
 answers[94] = choices[94][3];
 units[94] = "107";
 comments[94] = "Id Pregunta: 10196. La tecnolog&iacute;a usada en algunas xDSL es DWMT, no WDM";


//  Id pregunta: 10659 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Se&ntilde;ale aquella opci&oacute;n que no es una WPAN:";
 choices[95]= new Array();
 choices[95][0] = "NFC";
 choices[95][1] = "IRDA";
 choices[95][2] = "Wibree";
 choices[95][3] = "CSMA";
 answers[95] = choices[95][3];
 units[95] = "107";
 comments[95] = "Id Pregunta: 10659. ";


//  Id pregunta: 10763 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Seg&uacute;n la gu&iacute;a de comunicaci&oacute;n digital. Si un sitio ofrece p&aacute;ginas espec&iacute;ficamente a dispositivos m&oacute;viles. &iquest;A qu&eacute; resoluci&oacute;n es aconsejable optimizar la resoluci&oacute;n?";
 choices[96]= new Array();
 choices[96][0] = "200 x 250 p&iacute;xeles";
 choices[96][1] = "400 x 450 p&iacute;xeles";
 choices[96][2] = "700 x 950 p&iacute;xeles";
 choices[96][3] = "700 x 1150 p&iacute;xeles";
 answers[96] = choices[96][0];
 units[96] = "120";
 comments[96] = "Id Pregunta: 10763. ";


//  Id pregunta: 10909 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Uno de los problemas en cuanto a la calidad del servicio (QoS) de una red VoIP es la latencia, se&ntilde;ale su definici&oacute;n correcta:";
 choices[97]= new Array();
 choices[97][0] = "Variaci&oacute;n en el tiempo de llegada de los paquetes, causada por congesti&oacute;n de red, p&eacute;rdida de sincronizaci&oacute;n o por las diferentes rutas seguidas.";
 choices[97][1] = "Es una reflexi&oacute;n retardada de la se&ntilde;al ac&uacute;stica original.";
 choices[97][2] = "El tiempo que tarda un paquete en llegar desde la fuente al destino.";
 choices[97][3] = "P&eacute;rdida que se produce al usar protocolos no orientados a conexi&oacute;n que no reenv&iacute;an paquetes perdidos. Adem&aacute;s tambi&eacute;n se produce por descartes de paquetes que no llegan a tiempo al receptor.";
 answers[97] = choices[97][2];
 units[97] = "108, 109";
 comments[97] = "Id Pregunta: 10909. Examen GSI 2014";


//  Id pregunta: 11449 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Seg&uacute;n la Ley 9/2014, las condiciones asociadas a los t&iacute;tulos habilitantes para el uso del dominio p&uacute;blico radioel&eacute;ctrico no incluyen:";
 choices[98]= new Array();
 choices[98][0] = "Proporcionadas.";
 choices[98][1] = "No discriminatorias.";
 choices[98][2] = "Transparentes.";
 choices[98][3] = "Neutrales.";
 answers[98] = choices[98][3];
 units[98] = "110";
 comments[98] = "Id Pregunta: 11449. ";


//  Id pregunta: 11734 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Qu&eacute; especificaci&oacute;n permite los enlaces bidireccionales como mecanismo hipertextual en un documento XML?";
 choices[99]= new Array();
 choices[99][0] = "DTD";
 choices[99][1] = "XUA";
 choices[99][2] = "XLL";
 choices[99][3] = "XSL";
 answers[99] = choices[99][2];
 units[99] = "69";
 comments[99] = "Id Pregunta: 11734. ";


