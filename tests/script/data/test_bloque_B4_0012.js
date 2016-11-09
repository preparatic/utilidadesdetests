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

//  Id pregunta: 1488 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de las siguientes respuestas caracteriza FDDI?:";
 choices[0]= new Array();
 choices[0][0] = "Consiste en el control de dispositivos y datos que funcionan por desplazameinto de frecuencia";
 choices[0][1] = "Consiste en la t&eacute;cnica de control de los dispositivos para filtraje de datos en las redes de &aacute;rea local";
 choices[0][2] = "Consiste en dos bucles de fibra &oacute;ptica con protocolo de paso de testigo";
 choices[0][3] = "Consiste en un bucle de fibra &oacute;ptica que funciona como Ethernet (por contenci&oacute;n) pero a 100 Mbits/seg, y hay otro bucle como backup del primero";
 answers[0] = choices[0][2];
 units[0] = "101";
 comments[0] = "Id Pregunta: 1488. ";


//  Id pregunta: 2885 AÃ±o de creación de pregunta: 2005-01-01
 questions[1]= "2)  Los principales componentes de la Red SARA (Intranet Administrativa) son:";
 choices[1]= new Array();
 choices[1][0] = "&aacute;reas de conexi&oacute;n y red troncal";
 choices[1][1] = "&aacute;reas de conexi&oacute;n, red troncal, centro de servicios comunes, centro de acceso remoto y centros de servicios espec&iacute;ficos";
 choices[1][2] = "&aacute;reas de conexi&oacute;n, red troncal, centro de servicios comunes y centro de acceso remoto";
 choices[1][3] = "&aacute;reas de conexi&oacute;n, red troncal, redes perif&eacute;ricas, centro de servicios comunes, centro de acceso remoto y centros de servicios espec&iacute;ficos";
 answers[1] = choices[1][2];
 units[1] = "113.44";
 comments[1] = "Id Pregunta: 2885. NULL";


//  Id pregunta: 3041 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;Entre qu&eacute; niveles de la arquitectura TCP/IP se encuentra el protocolo SSL (Secure Socket Layer)?:";
 choices[2]= new Array();
 choices[2][0] = "Por encima del nivel de aplicaci&oacute;n";
 choices[2][1] = "Al mismo nivel que el nivel de aplicaci&oacute;n";
 choices[2][2] = "Entre el nivel de aplicaci&oacute;n y TCP";
 choices[2][3] = "Entre TCP e IP";
 answers[2] = choices[2][2];
 units[2] = "100";
 comments[2] = "Id Pregunta: 3041. NULL";


//  Id pregunta: 3072 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  La arquitectura 'fault tolerant' se caracteriza por :";
 choices[3]= new Array();
 choices[3][0] = "La ejecuci&oacute;n de una instrucci&oacute;n se divide en fases";
 choices[3][1] = "Las diferentes funciones del sistema se encuentran distribuidas en procesadores especializados";
 choices[3][2] = "Existe suficiente redundancia para asegurar un funcionamiento correcto en caso de fallo";
 choices[3][3] = "Todos los componentes del ordenador intercambian datos compartiendo los buses";
 answers[3] = choices[3][2];
 units[3] = "45";
 comments[3] = "Id Pregunta: 3072. NULL";


//  Id pregunta: 3086 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  Podemos definir protocolo como:";
 choices[4]= new Array();
 choices[4][0] = "Conjunto de reglas que controlan el intercambio de informaci&oacute;n entre entidades heterog&eacute;neas, tanto en la transmisi&oacute;n como en el control y recuperaci&oacute;n de errores";
 choices[4][1] = "Conjunto de reglas que controlan el intercambio de informaci&oacute;n  entre entidades homog&eacute;neas";
 choices[4][2] = "Conjunto de reglas responsables de la comunicaci&oacute;n directa entre 2 sistemas a trav&eacute;s del medio f&iacute;sico que los mantiene conectados";
 choices[4][3] = "Conjunto de reglas que permiten identificar de forma &uacute;nica e inequ&iacute;voca a un nodo o host";
 answers[4] = choices[4][1];
 units[4] = "100";
 comments[4] = "Id Pregunta: 3086. Seg&uacute;n el modelo OSI un protocolo establece reglas organizadas y convenidas entre entidades pares (horizontal)";


//  Id pregunta: 3124 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;C&oacute;mo se denominan los 2 modos de utilizaci&oacute;n de IPSec?";
 choices[5]= new Array();
 choices[5][0] = "balanceado y no balanceado";
 choices[5][1] = "t&uacute;nel y abierto";
 choices[5][2] = "datagrama y transporte";
 choices[5][3] = "transporte y t&uacute;nel";
 answers[5] = choices[5][3];
 units[5] = "111";
 comments[5] = "Id Pregunta: 3124. NULL";


//  Id pregunta: 3125 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;C&oacute;mo se identifica generalmente una estaci&oacute;n Ethernet?:";
 choices[6]= new Array();
 choices[6][0] = "Mediante la direcci&oacute;n Ethernet que el gestor de la red le asigna";
 choices[6][1] = "Mediante la configuraci&oacute;n de su sistema operativo para configurar su identificaci&oacute;n en la red";
 choices[6][2] = "Mediante la asignaci&oacute;n por el fabricante de la tarjeta de red de una direcci&oacute;n Ethernet &uacute;nica y exclusiva";
 choices[6][3] = "Mediante la asignaci&oacute;n aleatoria que cada usuario de la estaci&oacute;n puede realizar";
 answers[6] = choices[6][2];
 units[6] = "100";
 comments[6] = "Id Pregunta: 3125. La direcci&oacute;n MAC ,compuesta de 48 bits, identifica un&iacute;vocamente a la tarjeta de red. . Los 24 primeros bits son asignados por el IEE y los 24 &uacute;ltimos por el fabricante";


//  Id pregunta: 3183 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes respuestas referentes a las funciones de los distintos niveles OSI es falsa?:";
 choices[7]= new Array();
 choices[7][0] = "Las aplicaciones de correo electr&oacute;nico residen en el nivel de transporte";
 choices[7][1] = "Uno de los servicios que suministra el nivel de Sesi&oacute;n es permitir a un usuario entrar en un sistema remoto a tiempo compartido";
 choices[7][2] = "El nivel de presentaci&oacute;n se encarga del cifrado de la informaci&oacute;n por t&eacute;cnicas criptogr&aacute;ficas";
 choices[7][3] = "Las funciones del nivel de aplicaci&oacute;n est&aacute;n determinadas por los requerimientos de la aplicaci&oacute;n que cargue el usuario";
 answers[7] = choices[7][0];
 units[7] = "100";
 comments[7] = "Id Pregunta: 3183. NULL";


//  Id pregunta: 3188 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Dentro del modelo de referencia OSI, &iquest;cu&aacute;l es el componente de los procesos de aplicaci&oacute;n que se encarga de ejecutar los protocolos de nivel de aplicaci&oacute;n, y de proporcionar los elementos de servicio del nivel de aplicaci&oacute;n?:";
 choices[8]= new Array();
 choices[8][0] = "La entidad de aplicaci&oacute;n";
 choices[8][1] = "Los CASEs (Common Aplication Service Elements)";
 choices[8][2] = "Los SASEs (Specific Aplication Service Elements)";
 choices[8][3] = "El stack de comunicaciones";
 answers[8] = choices[8][0];
 units[8] = "100";
 comments[8] = "Id Pregunta: 3188. NULL";


//  Id pregunta: 3219 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l de los siguientes conceptos no aporta seguridad a una intranet?:";
 choices[9]= new Array();
 choices[9][0] = "Spoofing";
 choices[9][1] = "Firewalls";
 choices[9][2] = "NAT";
 choices[9][3] = "Proxy";
 answers[9] = choices[9][0];
 units[9] = "113";
 comments[9] = "Id Pregunta: 3219. ";


//  Id pregunta: 3231 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Cu&aacute;l de los siguientes protocolos de los est&aacute;ndares X.400 hace referencia a las comunicaciones entre agente de usuario, y es conocido como IPM (InterPersonal Messaging)?:";
 choices[10]= new Array();
 choices[10][0] = "P1";
 choices[10][1] = "P2";
 choices[10][2] = "P3";
 choices[10][3] = "P7";
 answers[10] = choices[10][1];
 units[10] = "106";
 comments[10] = "Id Pregunta: 3231. ";


//  Id pregunta: 3289 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Qu&eacute; es un modem en banda base?:";
 choices[11]= new Array();
 choices[11][0] = "Equipo que efect&uacute;a &uacute;nicamente funciones de codificaci&oacute;n y decodificaci&oacute;n, aparte de las funciones de di&aacute;logo con el ETD y de interfaz con la l&iacute;nea de transmisi&oacute;n";
 choices[11][1] = "Equipo que adapta el ETD a las caracter&iacute;sticas el&eacute;ctricas de la l&iacute;nea de transmisi&oacute;n";
 choices[11][2] = "Equipo normalizado que realiza la modulaci&oacute;n y demodulaci&oacute;n teniendo como l&iacute;mite inferior de frecuencias 0 Hz";
 choices[11][3] = "Equipo que realiza la modulaci&oacute;n y demodulaci&oacute;n teniendo como l&iacute;mite inferior de frecuencias 0 HZ y l&iacute;mite superior dependiente de la velocidad de transmisi&oacute;n";
 answers[11] = choices[11][0];
 units[11] = "97";
 comments[11] = "Id Pregunta: 3289. NULL";


//  Id pregunta: 3301 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  &iquest;Qu&eacute; Ofertas tienen obligatoriamente que ser reguladas por la Administraci&oacute;n en materia de telecomunicaciones?:";
 choices[12]= new Array();
 choices[12][0] = "La Oferta de Referencia de Interconexi&oacute;n y la Oferta de Referencia de Cobertura";
 choices[12][1] = "La Oferta de Servicios P&uacute;blicos de Telefon&iacute;a y la Oferta de Bucle de Abonado";
 choices[12][2] = "La Oferta de Transmisi&oacute;n P&uacute;blica de Datos y la Oferta de Servicios P&uacute;blicos de Voz";
 choices[12][3] = "La Oferta de Referencia de Interconexi&oacute;n y la Oferta de Bucle de Abonado";
 answers[12] = choices[12][3];
 units[12] = "110";
 comments[12] = "Id Pregunta: 3301. ";


//  Id pregunta: 3326 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  A la funcionalidad que se cre&oacute; para permitir ofrecer servicios espec&iacute;ficos del operador de telefon&iacute;a m&oacute;vil, utilizando un mecanismo de transporte similar al de los servicios suplementarios del est&aacute;ndar GSM, se le denomina:";
 choices[13]= new Array();
 choices[13][0] = "VHE";
 choices[13][1] = "iMode";
 choices[13][2] = "USSD";
 choices[13][3] = "HSCSD";
 answers[13] = choices[13][2];
 units[13] = "107";
 comments[13] = "Id Pregunta: 3326. NULL";


//  Id pregunta: 3344 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  Control de temperatura, ahorro de gasto de energ&iacute;a seg&uacute;n la hora del d&iacute;a, gesti&oacute;n de alarmas a distancia&hellip;, son disciplinas englobadas en la:";
 choices[14]= new Array();
 choices[14][0] = "Teleinform&aacute;tica.";
 choices[14][1] = "Automatizaci&oacute;n de procesos y rob&oacute;tica.";
 choices[14][2] = "Dom&oacute;tica.";
 choices[14][3] = "Telem&aacute;tica industrial.";
 answers[14] = choices[14][2];
 units[14] = "47";
 comments[14] = "Id Pregunta: 3344. *: domotica";


//  Id pregunta: 3503 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  En el modelo de referencia OSI:";
 choices[15]= new Array();
 choices[15][0] = "El nivel de aplicaci&oacute;n controla el intercambio de datos entre los extremos";
 choices[15][1] = "El nivel de red pasa los datos al nivel de sesi&oacute;n";
 choices[15][2] = "El nivel f&iacute;sico establece las especificaciones el&eacute;ctricas de la transmisi&oacute;n";
 choices[15][3] = "El nivel de sesi&oacute;n recoge datos de la red y los pasa al nivel de aplicaci&oacute;n";
 answers[15] = choices[15][2];
 units[15] = "100";
 comments[15] = "Id Pregunta: 3503. NULL";


//  Id pregunta: 3590 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  La capa de adaptaci&oacute;n de ATM se encarga de:";
 choices[16]= new Array();
 choices[16][0] = "Establecer y liberar los circuitos virtuales";
 choices[16][1] = "Segmentar y reenviar los paquetes mayores de una celda";
 choices[16][2] = "Generar y extraer las cabeceras de las celdas";
 choices[16][3] = "Define las caracter&iacute;sticas f&iacute;sicas del medio de transmisi&oacute;n";
 answers[16] = choices[16][1];
 units[16] = "109";
 comments[16] = "Id Pregunta: 3590. ";


//  Id pregunta: 3620 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  La norma IEEE 802.11a define una velocidad m&aacute;xima de transferencia de:";
 choices[17]= new Array();
 choices[17][0] = "11 Mbps";
 choices[17][1] = "11 MBps";
 choices[17][2] = "54 Mbps";
 choices[17][3] = "54 MBps";
 answers[17] = choices[17][2];
 units[17] = "101,107";
 comments[17] = "Id Pregunta: 3620. ";


//  Id pregunta: 3622 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  La norma X400 de la ITU-T se refiere a:";
 choices[18]= new Array();
 choices[18][0] = "Servicios de directorio";
 choices[18][1] = "Correo electr&oacute;nico";
 choices[18][2] = "Interfaz RS-232";
 choices[18][3] = "Interfaz de comunicaci&oacute;n de paquetes";
 answers[18] = choices[18][1];
 units[18] = "106";
 comments[18] = "Id Pregunta: 3622. ";


//  Id pregunta: 3648 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  La tecnolog&iacute;a de red de &aacute;rea local Switched Ethernet:";
 choices[19]= new Array();
 choices[19][0] = "Utiliza el protocolo de acceso al medio CSMA/CD IEEE 802.3";
 choices[19][1] = "Se basa en el concepto de Microsegmentaci&oacute;n (se reduce el dominio de colisi&oacute;n de tal forma que solo dos nodos coexisten en cada dominio de colisi&oacute;n)";
 choices[19][2] = "Las dos anteriores son falsas";
 choices[19][3] = "Las dos anteriores son correctas";
 answers[19] = choices[19][1];
 units[19] = "102";
 comments[19] = "Id Pregunta: 3648. ";


//  Id pregunta: 3694 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Las direcciones en IPv6 se clasifican en:";
 choices[20]= new Array();
 choices[20][0] = "unicast, multicast y broadcast";
 choices[20][1] = "unicast, anycast y broadcast";
 choices[20][2] = "unicast, anycast y multicast";
 choices[20][3] = "unicast y multicast";
 answers[20] = choices[20][2];
 units[20] = "100";
 comments[20] = "Id Pregunta: 3694. NULL";


//  Id pregunta: 3795 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  Respecto a las interfaces en RDSI:";
 choices[21]= new Array();
 choices[21][0] = "La interfaz R es la definida para poder conectar los equipos no RDSI (X21, RS232&hellip;) a la especificaci&oacute;n RDSI";
 choices[21][1] = "La interfaz R es la utilizada por los equipos remotos";
 choices[21][2] = "La Interfaz R est&aacute; todav&iacute;a indefinida pues depende de las compa&ntilde;&iacute;as proveedoras de servicio";
 choices[21][3] = "Todas las respuestas anteriores son err&oacute;neas";
 answers[21] = choices[21][0];
 units[21] = "103";
 comments[21] = "Id Pregunta: 3795. ";


//  Id pregunta: 3829 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  S-HTTP:";
 choices[22]= new Array();
 choices[22][0] = "es lo mismo que HTTPS (HTTP + SSL)";
 choices[22][1] = "responde por Secure-HTTP, y est&aacute; escasamente implantado";
 choices[22][2] = "Est&aacute; dise&ntilde;ado por los creadores del protocolo HTTP";
 choices[22][3] = "Es un protocolo del nivel de transporte";
 answers[22] = choices[22][1];
 units[22] = "111";
 comments[22] = "Id Pregunta: 3829. NULL";


//  Id pregunta: 3899 AÃ±o de creación de pregunta: 2003-01-01
 questions[23]= "24)  Indicar la afirmaci&oacute;n falsa sobre SDH:";
 choices[23]= new Array();
 choices[23][0] = "Permite compatibilidad hacia adelante y hacia atr&aacute;s";
 choices[23][1] = "No permite la incorporaci&oacute;n de otras tecnolog&iacute;as de redes &oacute;pticas y de banda ancha";
 choices[23][2] = "SDH es el est&aacute;ndar europeo, mientras que SONET es el norteamericano";
 choices[23][3] = "Se dise&ntilde;&oacute; para sobrellevar las deficiencias de compatibilidad de los sistemas de transmisi&oacute;n PDH";
 answers[23] = choices[23][1];
 units[23] = "99";
 comments[23] = "Id Pregunta: 3899. ";


//  Id pregunta: 3907 AÃ±o de creación de pregunta: 2003-01-01
 questions[24]= "25)  &iquest;Cu&aacute;l no es un objetivo del uso de t&eacute;cnicas CRM?";
 choices[24]= new Array();
 choices[24][0] = "Usar las relaciones cliente-proveedor para aumentar los beneficios";
 choices[24][1] = "Usar las diferentes fuentes de informaci&oacute;n e integrarlas para proporcionar un servicio excelente";
 choices[24][2] = "Poner en marcha una soluci&oacute;n estrat&eacute;gica proactiva";
 choices[24][3] = "Contar con soluciones parciales para cada etapa de la relaci&oacute;n con los ciudadanos";
 answers[24] = choices[24][3];
 units[24] = "65";
 comments[24] = "Id Pregunta: 3907. ";


//  Id pregunta: 3941 AÃ±o de creación de pregunta: 2003-01-01
 questions[25]= "26)  &iquest;Qu&eacute; nivel OSI garantiza la comunicaci&oacute;n extremo a extremo?";
 choices[25]= new Array();
 choices[25][0] = "3";
 choices[25][1] = "4";
 choices[25][2] = "5";
 choices[25][3] = "6";
 answers[25] = choices[25][1];
 units[25] = "107";
 comments[25] = "Id Pregunta: 3941. NULL";


//  Id pregunta: 3954 AÃ±o de creación de pregunta: 2003-01-01
 questions[26]= "27)  Indicar la afirmaci&oacute;n correcta:";
 choices[26]= new Array();
 choices[26][0] = "MPLS es un est&aacute;ndar ISO de conmutaci&oacute;nde paquetes, que trata de proporcionaralgunas de las caracter&iacute;sticasde las redes orientadas a conexi&oacute;na las redes no orientadasa conexi&oacute;n";
 choices[26][1] = "Una red MPLS est&aacute; compuestapor dos tipos principales denodos, los LER (Label End Routers)y los LSR (Label Switching Routers)";
 choices[26][2] = "MPLS es un est&aacute;ndar IP del IETF de conmutaci&oacute;nde paquetes, que trata de proporcionaralgunas de las caracter&iacute;sticasde las redes no orientadas a conexi&oacute;na las redes orientadasa conexi&oacute;n";
 choices[26][3] = "MPLS se implementahabitualmente como una soluci&oacute;n IPpura o de nivel 3";
 answers[26] = choices[26][3];
 units[26] = "100";
 comments[26] = "Id Pregunta: 3954. NULL";


//  Id pregunta: 3980 AÃ±o de creación de pregunta: 2006-01-01
 questions[27]= "28)  En el protocolo IPV6 las direcciones son de:";
 choices[27]= new Array();
 choices[27][0] = "16 bits";
 choices[27][1] = "16 bytes";
 choices[27][2] = "32 bits";
 choices[27][3] = "32 bytes";
 answers[27] = choices[27][1];
 units[27] = "100";
 comments[27] = "Id Pregunta: 3980. ";


//  Id pregunta: 4069 AÃ±o de creación de pregunta: 2006-01-01
 questions[28]= "29)  El organismo encargado de conceder los dominios .es";
 choices[28]= new Array();
 choices[28][0] = "El Ministerio de Industria, Comercio y Turismo";
 choices[28][1] = "RedIRIS";
 choices[28][2] = "InterNIC";
 choices[28][3] = "Red.es";
 answers[28] = choices[28][3];
 units[28] = "112";
 comments[28] = "Id Pregunta: 4069. ";


//  Id pregunta: 4115 AÃ±o de creación de pregunta: 2006-01-01
 questions[29]= "30)  Se&ntilde;ale la afirmaci&oacute;n incorrecta:";
 choices[29]= new Array();
 choices[29][0] = "Un &ldquo;Webcrawler&rdquo; es motor de b&uacute;squeda de nuevo contenido en Internet";
 choices[29][1] = "Un robot &ldquo;Spider&rdquo; navega por la red de una p&aacute;gina a otra recogiendo informaci&oacute;n de los sitios que visita, esta informaci&oacute;n es almacenada en la base de datos del motor de b&uacute;squeda.";
 choices[29][2] = "Los robots &ldquo;Wanderers&rdquo; o vagabundos miden el tama&ntilde;o de la red en n&ordm; de servidores.";
 choices[29][3] = "Todas las respuestas son ciertas";
 answers[29] = choices[29][3];
 units[29] = "112";
 comments[29] = "Id Pregunta: 4115. ";


//  Id pregunta: 4118 AÃ±o de creación de pregunta: 2006-01-01
 questions[30]= "31)  Cuando dividimos la cantidad de trabajo que ejecuta un ordenador entre dos o m&aacute;s hablamos de";
 choices[30]= new Array();
 choices[30][0] = "clusters";
 choices[30][1] = "multicast";
 choices[30][2] = "balanceo de carga";
 choices[30][3] = "peering";
 answers[30] = choices[30][2];
 units[30] = "49";
 comments[30] = "Id Pregunta: 4118. ";


//  Id pregunta: 4162 AÃ±o de creación de pregunta: 2006-01-01
 questions[31]= "32)  &iquest;Qu&eacute; termino define mejor una credencial Kerberos?";
 choices[31]= new Array();
 choices[31][0] = "Un ticket de autenticaci&oacute;n";
 choices[31][1] = "Un ticket de autorizaci&oacute;n";
 choices[31][2] = "Cada uno de los servicios y aplicaciones de una red que soportan Kerberos";
 choices[31][3] = "Un dominio, formado por usuarios, equipos y servicios registrados en un servidor Kerberos";
 answers[31] = choices[31][1];
 units[31] = "111";
 comments[31] = "Id Pregunta: 4162. NULL";


//  Id pregunta: 4204 AÃ±o de creación de pregunta: 2006-01-01
 questions[32]= "33)  El MTBF asociado a la disponibilidad de un sistema formado por dos equipos id&eacute;nticos que deben funcionar simult&aacute;neamente en todo momento";
 choices[32]= new Array();
 choices[32][0] = "Es mayor que el de cualquiera de ellos individualmente";
 choices[32][1] = "Es menor que el de cualquiera de ellos individualmente";
 choices[32][2] = "Es igual al de cualquiera de ellos individualmente";
 choices[32][3] = "No puede ser conocido a priori";
 answers[32] = choices[32][1];
 units[32] = "104";
 comments[32] = "Id Pregunta: 4204. ";


//  Id pregunta: 4226 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  Identifique el rango de frecuencias que se utiliza en el canal ascendente o de retorno en una red HFC (Hybrid Fiber Coaxial):";
 choices[33]= new Array();
 choices[33][0] = "De 50 a 550 Mhz";
 choices[33][1] = "De 5 a 50 MHz";
 choices[33][2] = "De 550 a 860 MHz";
 choices[33][3] = "De 5 a 860 MHz";
 answers[33] = choices[33][1];
 units[33] = "99";
 comments[33] = "Id Pregunta: 4226. ";


//  Id pregunta: 4420 AÃ±o de creación de pregunta: 2007-01-01
 questions[34]= "35)  &iquest;Qu&eacute; comando se utiliza para comprobar una conexi&oacute;n f&iacute;sica entre dos hosts?";
 choices[34]= new Array();
 choices[34][0] = "TPING.";
 choices[34][1] = "WINPING.";
 choices[34][2] = "TCPING.";
 choices[34][3] = "PING.";
 answers[34] = choices[34][3];
 units[34] = "100";
 comments[34] = "Id Pregunta: 4420. ";


//  Id pregunta: 4421 AÃ±o de creación de pregunta: 2007-01-01
 questions[35]= "36)  &iquest;A qu&eacute; nivel del modelo OSI se realiza el encapsulamiento Frame Relay y HDLC?";
 choices[35]= new Array();
 choices[35][0] = "Red.";
 choices[35][1] = "Sesi&oacute;n.";
 choices[35][2] = "Enlace de datos.";
 choices[35][3] = "Transporte.";
 answers[35] = choices[35][2];
 units[35] = "100";
 comments[35] = "Id Pregunta: 4421. NULL";


//  Id pregunta: 4425 AÃ±o de creación de pregunta: 2007-01-01
 questions[36]= "37)  La codificaci&oacute;n Manchester se caracteriza por:";
 choices[36]= new Array();
 choices[36][0] = "Usar 1 V para el valor &ldquo;1&rdquo; y -1 V para el valor &ldquo;0&rdquo;";
 choices[36][1] = "Dividir cada bit en dos intervalos iguales de 1 V y &ndash;1 V comenzando en el valor positivo para el &ldquo;1&rdquo; y en el valor negativo para el &ldquo;0&rdquo;";
 choices[36][2] = "Indicar el valor &ldquo;1&rdquo; con ausencia de tr&aacute;nsito en la tensi&oacute;n el&eacute;ctrica y el &ldquo;0&rdquo; con una transici&oacute;n";
 choices[36][3] = "La opci&oacute;n anterior, suprimiendo una de cada dos transiciones";
 answers[36] = choices[36][1];
 units[36] = "";
 comments[36] = "Id Pregunta: 4425. ";


//  Id pregunta: 4429 AÃ±o de creación de pregunta: 2007-01-01
 questions[37]= "38)  No tiene la consideraci&oacute;n de Autoridad Nacional de Reglamentaci&oacute;n de Telecomunicaciones, de conformidad con el art. 68 de la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, General de Telecomunicaciones:";
 choices[37]= new Array();
 choices[37][0] = "El Gobierno.";
 choices[37][1] = "El Consejo Asesor de las Telecomunicaciones y de la Sociedad de la Informaci&oacute;n.";
 choices[37][2] = "Los &oacute;rganos superiores y directivos del Ministerio de Econom&iacute;a y Competitividad que, de conformidad con la estructura org&aacute;nica del departamento, asuman las competencias asignadas a este ministerio en materias reguladas por esta Ley.";
 choices[37][3] = "La Comisi&oacute;n Nacional de los Mercados y la Competencia.";
 answers[37] = choices[37][1];
 units[37] = "110";
 comments[37] = "Id Pregunta: 4429. ";


//  Id pregunta: 4491 AÃ±o de creación de pregunta: 2007-01-01
 questions[38]= "39)  Indique cual de las siguientes afirmaciones sobre las redes Frame Relay es falsa: ";
 choices[38]= new Array();
 choices[38][0] = "Las redes Frame Relay son redes de conmutaci&oacute;n de paquetes";
 choices[38][1] = "Las redes Frame Relay disponen de t&eacute;cnicas de control de Ia congesti&oacute;n de Ia red.";
 choices[38][2] = "LAPB es el protocolo de nivel de enlace utilizado por Frame Relay.";
 choices[38][3] = "El CIR (Comitted Information Rate) es Ia velocidad de transmisi&oacute;n de datos que el operador de la red Frame Relay garantiza para una conexi&oacute;n determinada.";
 answers[38] = choices[38][2];
 units[38] = "109";
 comments[38] = "Id Pregunta: 4491. ";


//  Id pregunta: 4645 AÃ±o de creación de pregunta: 2007-01-01
 questions[39]= "40)  Para establecer una conexi&oacute;n TCP, el emisor env&iacute;a un segmento TCP en el que:";
 choices[39]= new Array();
 choices[39][0] = "el bit CON a 1 y el bit FIN a 0";
 choices[39][1] = "el bit CON a 1 y el bit ACK a 0.";
 choices[39][2] = "el bit SYN a 1 y el bit FIN a 0";
 choices[39][3] = "el bit SYN a 1 y el bit ACK a 0.";
 answers[39] = choices[39][2];
 units[39] = "100";
 comments[39] = "Id Pregunta: 4645. ";


//  Id pregunta: 4751 AÃ±o de creación de pregunta: 2009-01-01
 questions[40]= "41)  &iquest;Cu&aacute;l de los siguientes sistemas de telefon&iacute;a se dise&ntilde;o para trabajar en espacios reducidos y altas densidades de tr&aacute;fico?";
 choices[40]= new Array();
 choices[40][0] = "GSM 900";
 choices[40][1] = "TACS";
 choices[40][2] = "DECT";
 choices[40][3] = "PAS";
 answers[40] = choices[40][2];
 units[40] = "108";
 comments[40] = "Id Pregunta: 4751. ";


//  Id pregunta: 4753 AÃ±o de creación de pregunta: 2009-01-01
 questions[41]= "42)  En UMTS R99 o R3, la interfaz entre la UTRAN y el SGSN se establece sobre:";
 choices[41]= new Array();
 choices[41][0] = "Frame Relay";
 choices[41][1] = " ATM";
 choices[41][2] = "VPLS";
 choices[41][3] = "Cualquiera";
 answers[41] = choices[41][1];
 units[41] = "108";
 comments[41] = "Id Pregunta: 4753. ";


//  Id pregunta: 4795 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  &iquest;Cu&aacute;l de las siguientes afirmaciones relativas a los protocolos de transporte TCP (Transport Control Protocol) yUDP (User Datagram Protocol) es cierta?";
 choices[42]= new Array();
 choices[42][0] = "No existe forma de determinar si un datagrama UDP se ha recibido con errores";
 choices[42][1] = "TCP no debe ser usado por aplicaciones que requieran una entrega fiable de datos";
 choices[42][2] = "TCP es un protocolo de transporte orientado a conexi&oacute;n pero no fiable, ya que se transporta sobre IP(Internet Protocol), que es un protocolo de red no fiable";
 choices[42][3] = "Si durante la transmisi&oacute;n se da&ntilde;a un datagrama, UDP lo detecta pero no lo retransmite";
 answers[42] = choices[42][3];
 units[42] = "100";
 comments[42] = "Id Pregunta: 4795. NULL";


//  Id pregunta: 4905 AÃ±o de creación de pregunta: 2003-01-01
 questions[43]= "44)  El formato de compresi&oacute;n de video DivX est&aacute; basado en:";
 choices[43]= new Array();
 choices[43][0] = "Apple QuickTime.";
 choices[43][1] = "HDMI/Blu-Ray.";
 choices[43][2] = "MPEG-4 parte 2.";
 choices[43][3] = "MP3 eXtended Revision.";
 answers[43] = choices[43][2];
 units[43] = "114";
 comments[43] = "Id Pregunta: 4905. Examen TIC B 2007";


//  Id pregunta: 4951 AÃ±o de creación de pregunta: 2003-01-01
 questions[44]= "45)  Seg&uacute;n JAVA EE 5, &iquest;qu&eacute; tipo de Enterprise Bean puede recibir mensajes JMS (Java Message Service)?:";
 choices[44]= new Array();
 choices[44][0] = "Message-Driven Bean.";
 choices[44][1] = "Stateful Session Bean.";
 choices[44][2] = "Stateless Session Bean.";
 choices[44][3] = "Message-Oriented Bean.";
 answers[44] = choices[44][0];
 units[44] = "116";
 comments[44] = "Id Pregunta: 4951. Examen TIC B 2007";


//  Id pregunta: 4977 AÃ±o de creación de pregunta: 2003-01-01
 questions[45]= "46)  &iquest;Cu&aacute;l de las siguientes acciones no es necesaria para sindicar un documento de nuestra web mediante RSS?:";
 choices[45]= new Array();
 choices[45][0] = "Crear un documento RSS y guardarlo con una extensi&oacute;n .xml.";
 choices[45][1] = "Cargar el documento en nuestro sitio web.";
 choices[45][2] = "Registrase (web y documento) en un agregador RSS.";
 choices[45][3] = "Pagar el canon de registro a Red.Es.";
 answers[45] = choices[45][3];
 units[45] = "114";
 comments[45] = "Id Pregunta: 4977. Examen TIC B 2007";


//  Id pregunta: 5026 AÃ±o de creación de pregunta: 2003-01-01
 questions[46]= "47)  En relaci&oacute;n con las ventanas de cr&eacute;dito (de recepci&oacute;n y de envio) que utiliza el protocolo TCP para el control deflujo, indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[46]= new Array();
 choices[46][0] = "Permiten que el emisor no tenga que esperar un ACK (acknowledge) para cada segmento de datostransmitido";
 choices[46][1] = "El tama&ntilde;o del b&uacute;fer de esta ventanas est&aacute; limitado a 4096 bytes";
 choices[46][2] = "Impiden que se reenv&iacute;en paquetes pasado un time-out";
 choices[46][3] = "Hace que el canal de comunicaci&oacute;n est&eacute; m&aacute;s tiempo ocupado para transmitir la misma informaci&oacute;n.";
 answers[46] = choices[46][0];
 units[46] = "100";
 comments[46] = "Id Pregunta: 5026. Examen TIC A 2007";


//  Id pregunta: 5028 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  En una red donde se utilizan redes virtuales (802.1q), &iquest;cu&aacute;l es el tama&ntilde;o m&aacute;ximo de las tramas etiquetadas quecirculan por la red?:";
 choices[47]= new Array();
 choices[47][0] = "1522 bytes";
 choices[47][1] = "1500 bytes";
 choices[47][2] = "1496 bytes";
 choices[47][3] = "1518 bytes";
 answers[47] = choices[47][0];
 units[47] = "100, 102";
 comments[47] = "Id Pregunta: 5028. Examen TIC A 2007";


//  Id pregunta: 5280 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  Un applet de Java se ejecutar&aacute; en casi cualquier navegador porque ...";
 choices[48]= new Array();
 choices[48][0] = "el servidor tiene un built-in de JVM.";
 choices[48][1] = "el navegador es capaz de interpretar el c&oacute;digo fuente.";
 choices[48][2] = "el navegador tiene un built-in de JVM.";
 choices[48][3] = "los applets no necesitan una JVM.";
 answers[48] = choices[48][2];
 units[48] = "116";
 comments[48] = "Id Pregunta: 5280. ";


//  Id pregunta: 5515 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  Indique cu&aacute;l de los siguientes no es un servidor de aplicaciones para servicios web:";
 choices[49]= new Array();
 choices[49][0] = "JONAS";
 choices[49][1] = "XIMDEX";
 choices[49][2] = "WEBSPHERE";
 choices[49][3] = "WEBLOGIC";
 answers[49] = choices[49][1];
 units[49] = "115,116";
 comments[49] = "Id Pregunta: 5515. ";


//  Id pregunta: 5516 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  Indique cu&aacute;l de los siguientes es un framework de c&oacute;digo abierto que se ocupa de la capa de persistencia entre la l&oacute;gica de negocio y la base de datos: ";
 choices[50]= new Array();
 choices[50][0] = "iBATIS";
 choices[50][1] = "JAVA SERVER FACES";
 choices[50][2] = "TAPESTRY";
 choices[50][3] = "STRUTS";
 answers[50] = choices[50][0];
 units[50] = "116";
 comments[50] = "Id Pregunta: 5516. ";


//  Id pregunta: 5625 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  Indique cu&aacute;l de los siguientes no es un ataque en seguridad inform&aacute;tica";
 choices[51]= new Array();
 choices[51][0] = "Pharming";
 choices[51][1] = "Phishing ";
 choices[51][2] = "Gloofing";
 choices[51][3] = "Spoofing";
 answers[51] = choices[51][2];
 units[51] = "111";
 comments[51] = "Id Pregunta: 5625. NULL";


//  Id pregunta: 5885 AÃ±o de creación de pregunta: 2009-01-01
 questions[52]= "53)  En referencia a la Comisi&oacute;n Nacional de los Mercados y la Competencia, elija cu&aacute;l de las siguientes opciones es VERDADERA:";
 choices[52]= new Array();
 choices[52][0] = "Tiene su sede principal en Barcelona.";
 choices[52][1] = "Interviene en conflictos planteados entre operadores en materia de acceso e interconexi&oacute;n";
 choices[52][2] = "En la actualidad est&aacute; compuesto por un Presidente, un Consejo y tres Vicepresidentes";
 choices[52][3] = "Los recursos de la Comisi&oacute;n provienen, en su totalidad, de subvenciones del Estado";
 answers[52] = choices[52][1];
 units[52] = "110";
 comments[52] = "Id Pregunta: 5885. MAP 2008 A1";


//  Id pregunta: 5937 AÃ±o de creación de pregunta: 2009-01-01
 questions[53]= "54)  Con la herramienta de virtualizaci&oacute;n Xen, &iquest;podemos virtualizar Microsoft Windows?";
 choices[53]= new Array();
 choices[53][0] = "S&iacute;, siempre que la CPU tenga soporte de x86 virtualization.";
 choices[53][1] = "S&iacute;, desde la versi&oacute;n 2.0";
 choices[53][2] = "S&iacute;, siempre que el sistema operativo anfitri&oacute;n tambi&eacute;n sea Microsoft Windows.";
 choices[53][3] = "S&iacute;, siempre que no queramos utilizar en el Windows hu&eacute;sped las Microsoft Enhanced Process Capabilities.";
 answers[53] = choices[53][0];
 units[53] = "119";
 comments[53] = "Id Pregunta: 5937. ";


//  Id pregunta: 5947 AÃ±o de creación de pregunta: 2009-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l de las siguientes no es una ventaja de un sistema de gesti&oacute;n de identidades respecto de la gesti&oacute;n de usuarios tradicional?";
 choices[54]= new Array();
 choices[54][0] = "Proporciona un punto &uacute;nico de provisi&oacute;n de usuarios para todos los sistemas de la organizaci&oacute;n";
 choices[54][1] = "Sincronizaci&oacute;n entre sistemas";
 choices[54][2] = "No existe una gesti&oacute;n centralizada del ciclo de vida de los usuarios";
 choices[54][3] = "Unificaci&oacute;n de contrase&ntilde;as en recursos";
 answers[54] = choices[54][2];
 units[54] = "118";
 comments[54] = "Id Pregunta: 5947. ";


//  Id pregunta: 6223 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  El Java Community Process (JCP) utiliza documentos formales que describen las especificaciones y tecnolog&iacute;as propuestas para que sean a&ntilde;adidas a la plataforma Java. Estos documentos reciben el nombre de:";
 choices[55]= new Array();
 choices[55][0] = "JSR (Java Specification Request)";
 choices[55][1] = "JRS (Java Request Specification)";
 choices[55][2] = "JPS (Java Proposal Specification)";
 choices[55][3] = "JSP (Java Specification Proposal)";
 answers[55] = choices[55][0];
 units[55] = "114";
 comments[55] = "Id Pregunta: 6223. ";


//  Id pregunta: 6479 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  El dispositivo que permite la interconexi&oacute;n de redes LAN y que trabaja en el nivel 2 del modelo OSI se denomina";
 choices[56]= new Array();
 choices[56][0] = "Repetidor";
 choices[56][1] = "Puente (bridge)";
 choices[56][2] = "Pasarela (gateway)";
 choices[56][3] = "Encaminador (router)";
 answers[56] = choices[56][1];
 units[56] = "102";
 comments[56] = "Id Pregunta: 6479. Castilla La Mancha 2009";


//  Id pregunta: 8262 AÃ±o de creación de pregunta: 2011-01-01
 questions[57]= "58)  &iquest;Qu&eacute; m&eacute;todo NO existe en la clase java HttpServlet?:";
 choices[57]= new Array();
 choices[57][0] = "doPut";
 choices[57][1] = "doTrace.";
 choices[57][2] = "doErrorC";
 choices[57][3] = "doOptions.";
 answers[57] = choices[57][2];
 units[57] = "116";
 comments[57] = "Id Pregunta: 8262. Examen TIC A1 2010";


//  Id pregunta: 8312 AÃ±o de creación de pregunta: 2011-01-01
 questions[58]= "59)  &iquest;Cu&aacute;l de las siguientes NO es una tecnolog&iacute;a xDSL? ";
 choices[58]= new Array();
 choices[58][0] = "VDSL.";
 choices[58][1] = "DDSL. ";
 choices[58][2] = "HDSL. ";
 choices[58][3] = "ADSL. ";
 answers[58] = choices[58][1];
 units[58] = "107";
 comments[58] = "Id Pregunta: 8312. Examen TIC A2 2010";


//  Id pregunta: 8467 AÃ±o de creación de pregunta: 2011-01-01
 questions[59]= "60)  La RDSI (red digital de servicios integrados), ofrece una conexi&oacute;n digital extremo a extremo para el intercambio de informaci&oacute;n al integrar servicios de voz y de datos sobre la estructura de la red telef&oacute;nica p&uacute;blica. El acceso primario, en Europa, esta constituido por:";
 choices[59]= new Array();
 choices[59][0] = "2 canales B y 2 canales D";
 choices[59][1] = "30 canales B y 30 canales D";
 choices[59][2] = "30 canales B y un canal D";
 choices[59][3] = "30 canales B y dos canales D";
 answers[59] = choices[59][2];
 units[59] = "103";
 comments[59] = "Id Pregunta: 8467. Analista Ayto. Madrid 2010";


//  Id pregunta: 8511 AÃ±o de creación de pregunta: 2011-01-01
 questions[60]= "61)  De las siguientes normas, &iquest;cu&aacute;l est&aacute; referida al c&oacute;digo de buenas pr&aacute;cticas en gesti&oacute;n de la seguridad de la Informaci&oacute;n?";
 choices[60]= new Array();
 choices[60][0] = "ISO/lEC 13335-2.";
 choices[60][1] = "ISO/lEC 27002:2013.";
 choices[60][2] = "UNE 71502:2004.";
 choices[60][3] = "ISO 10646.";
 answers[60] = choices[60][1];
 units[60] = "111";
 comments[60] = "Id Pregunta: 8511. Examen TIC A2 2010";


//  Id pregunta: 8590 AÃ±o de creación de pregunta: 2011-01-01
 questions[61]= "62)  &iquest;Cu&aacute;l de las siguientes utilidades permite desarrollar en JAVA?";
 choices[61]= new Array();
 choices[61][0] = "JRE";
 choices[61][1] = "M&aacute;quina Virtual de Java";
 choices[61][2] = "JDK";
 choices[61][3] = "AWT";
 answers[61] = choices[61][2];
 units[61] = "116";
 comments[61] = "Id Pregunta: 8590. Examen TIC A2 2010 interna";


//  Id pregunta: 8803 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  En el contexto de la Web 2.0, a la p&aacute;gina Web o aplicaci&oacute;n que usa o combina datos, presentaciones y funcionalidad procedentes de una o m&aacute;s fuentes para crear nuevos servicios, se conoce como";
 choices[62]= new Array();
 choices[62][0] = "folcsonom&iacute;a";
 choices[62][1] = "mashup";
 choices[62][2] = "podcast";
 choices[62][3] = "Wiki";
 answers[62] = choices[62][1];
 units[62] = "120";
 comments[62] = "Id Pregunta: 8803. Examen UPM A2 2011";


//  Id pregunta: 8913 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  &iquest;Cu&aacute;l de las siguientes acciones NO es realizada por un switch de nivel 2?:";
 choices[63]= new Array();
 choices[63][0] = "Conversi&oacute;n de protocolos.";
 choices[63][1] = "Aprendizaje de direcciones MAC.";
 choices[63][2] = "Reducci&oacute;n de colisiones respecto a un hub.";
 choices[63][3] = "Posibilitar m&uacute;ltiples transmisiones simult&aacute;neas sin interferir en otras sub-redes";
 answers[63] = choices[63][0];
 units[63] = "102";
 comments[63] = "Id Pregunta: 8913. Operador Ayto. Madrid 2010";


//  Id pregunta: 8994 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  Las Cookies que emplea el protocolo HTTP se especifican en el RFC:";
 choices[64]= new Array();
 choices[64][0] = "2965";
 choices[64][1] = "8080";
 choices[64][2] = "1065";
 choices[64][3] = "1265";
 answers[64] = choices[64][0];
 units[64] = "112";
 comments[64] = "Id Pregunta: 8994. Examen UPM A2 2011";


//  Id pregunta: 9009 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  No tiene la consideraci&oacute;n de Autoridad Nacional de Reglamentaci&oacute;n de Telecomunicaciones, de conformidad con el art. 46 de la Ley 32/2003, de 3 de noviembre, General de Telecomunicaciones:";
 choices[65]= new Array();
 choices[65][0] = "Comisi&oacute;n Nacional de los Mercados y la Competencia.";
 choices[65][1] = "El Consejo Asesor de las Telecomunicaciones y de la Sociedad de la Informaci&oacute;n.";
 choices[65][2] = "El Gobierno.";
 choices[65][3] = "Los &oacute;rganos superiores y directivos del Ministerio de Econom&iacute;a y Competitividad que, de conformidad con la estructura org&aacute;nica del departamento, asuman las competencias asignadas a este ministerio en materias reguladas por esta Ley.";
 answers[65] = choices[65][1];
 units[65] = "110";
 comments[65] = "Id Pregunta: 9009. Teleco Ayto. Madrid 2010. Modificada seg&uacute;n Ley 9/2014";


//  Id pregunta: 9018 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  Cuando una l&iacute;nea de transmisi&oacute;n cumple la condici&oacute;n de Heaviside:";
 choices[66]= new Array();
 choices[66][0] = "El retardo es m&iacute;nimo.";
 choices[66][1] = "El retardo es m&aacute;ximo.";
 choices[66][2] = "El retardo es constante.";
 choices[66][3] = "No existe retardo";
 answers[66] = choices[66][2];
 units[66] = "99";
 comments[66] = "Id Pregunta: 9018. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9027 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  Las centralitas MD-110 del servicio Ibercom que constituyen una RAI";
 choices[67]= new Array();
 choices[67][0] = "Se interconectan mediante una RPV (red privada virtual) establecida por el operador en sus centrales p&uacute;blicas.";
 choices[67][1] = "Necesariamente se conectan mediante un CF (centro frontal).";
 choices[67][2] = "Se interconectan entre si mediante un bus compartido.";
 choices[67][3] = "Ninguna de las anteriores";
 answers[67] = choices[67][1];
 units[67] = "103";
 comments[67] = "Id Pregunta: 9027. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9059 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  Indica cu&aacute;l de los siguientes par&aacute;metros tiene en cuenta el algoritmo de adjudicaci&oacute;n de HSUPA.";
 choices[68]= new Array();
 choices[68][0] = "Ancho de banda disponible en cada estaci&oacute;n";
 choices[68][1] = "Consumo el&eacute;ctrico del Hardware";
 choices[68][2] = "Interferencia en el canal UPLOAD";
 choices[68][3] = "Todos los anteriores.";
 answers[68] = choices[68][3];
 units[68] = "108";
 comments[68] = "Id Pregunta: 9059. NULL";


//  Id pregunta: 9335 AÃ±o de creación de pregunta: 2013-01-01
 questions[69]= "70)  &iquest;C&oacute;mo se denomina al subsistema de cableado estructurado que interconecta los armarios de planta de un edificio?";
 choices[69]= new Array();
 choices[69][0] = "Subsistema campus";
 choices[69][1] = "Subsistema horizontal";
 choices[69][2] = "Subsistema intermodal";
 choices[69][3] = "Subsistema troncal";
 answers[69] = choices[69][3];
 units[69] = "99";
 comments[69] = "Id Pregunta: 9335. TIC a2 AGE 2011";


//  Id pregunta: 9353 AÃ±o de creación de pregunta: 2013-01-01
 questions[70]= "71)  El sistema de se&ntilde;alizaci&oacute;n SS7:";
 choices[70]= new Array();
 choices[70][0] = "Se ocupa, entre otras cosas, del establecimiento de llamada.";
 choices[70][1] = "S&oacute;lo se emplea en RDSI";
 choices[70][2] = "Permite realizar llamadas, pero no intercambiar informaci&oacute;n de usuario.";
 choices[70][3] = "Ninguna de las respuestas es correcta.";
 answers[70] = choices[70][0];
 units[70] = "103";
 comments[70] = "Id Pregunta: 9353. Pruebas selectivas Ingeniero de Telecomunicaci&oacute;n Ayto de Madrid 2010";


//  Id pregunta: 9359 AÃ±o de creación de pregunta: 2013-01-01
 questions[71]= "72)  &iquest;Qu&eacute; tecnolog&iacute;a permite la multiplexaci&oacute;n de mayor n&uacute;mero de longitudes de onda por una &uacute;nica fibra &oacute;ptica?";
 choices[71]= new Array();
 choices[71][0] = "CWDM ";
 choices[71][1] = "SDH ";
 choices[71][2] = "WDM ";
 choices[71][3] = "DWDM ";
 answers[71] = choices[71][3];
 units[71] = "99";
 comments[71] = "Id Pregunta: 9359. Escala de Gesti&oacute;n de Sistemas de Sistemas de Informaci&oacute;n de la Xunta de Galicia. Acceso Libre 2011.";


//  Id pregunta: 9398 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  En el modelo de referencia de ATM, &iquest;cu&aacute;ntos planos se especifican?";
 choices[72]= new Array();
 choices[72][0] = "Dos (usuario y se&ntilde;alizaci&oacute;n). ";
 choices[72][1] = "Tres (usuario, control/se&ntilde;alizaci&oacute;n y administraci&oacute;n).";
 choices[72][2] = "Dos (datos estructurados y datos no estructurados). ";
 choices[72][3] = "Tres (datos, voz y video). ";
 answers[72] = choices[72][1];
 units[72] = "109";
 comments[72] = "Id Pregunta: 9398. TIC AGE A2 2011 Promo Int";


//  Id pregunta: 9429 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  Los prestadores de servicios de instalaci&oacute;n de telecomunicaciones";
 choices[73]= new Array();
 choices[73][0] = "Deber&aacute;n, con anterioridad al inicio de la actividad, presentar al Registro de empresas instaladoras de telecomunicaci&oacute;n, por medios electr&oacute;nicos o telem&aacute;ticos, una declaraci&oacute;n responsable sobre el cumplimiento de los requisitos exigibles para el ejercicio de la actividad. ";
 choices[73][1] = "Deber&aacute;n, con anterioridad al inicio de la actividad, presentar al Registro de empresas instaladoras de telecomunicaci&oacute;n una autorizaci&oacute;n para formar parte del registro de instaladores, demostrando el cumplimiento de los requisitos relativos a la capacidad t&eacute;cnica y a la cualificaci&oacute;n profesional para el ejercicio de la actividad, medios t&eacute;cnicos y cobertura m&iacute;nima del seguro en los t&eacute;rminos que se determinen reglamentariamente. En 15 d&iacute;as sin respuesta, se entender&aacute; estimada la solicitud.";
 choices[73][2] = "Deber&aacute;n, con anterioridad al inicio de la actividad, presentar al Registro de empresas instaladoras de telecomunicaci&oacute;n una autorizaci&oacute;n para formar parte del registro de instaladores, demostrando el cumplimiento de los requisitos relativos a la capacidad t&eacute;cnica y a la cualificaci&oacute;n profesional para el ejercicio de la actividad, medios t&eacute;cnicos y cobertura m&iacute;nima del seguro en los t&eacute;rminos que se determinen reglamentariamente. En 30 d&iacute;as sin respuesta, se entender&aacute; estimada la solicitud.";
 choices[73][3] = "Deber&aacute;n, con anterioridad al inicio de la actividad, presentar al Registro de empresas instaladoras de telecomunicaci&oacute;n una autorizaci&oacute;n para formar parte del registro de instaladores, demostrando el cumplimiento de los requisitos relativos a la capacidad t&eacute;cnica y a la cualificaci&oacute;n profesional para el ejercicio de la actividad, medios t&eacute;cnicos y cobertura m&iacute;nima del seguro en los t&eacute;rminos que se determinen reglamentariamente. En un mes sin respuesta, se entender&aacute; estimada la solicitud.";
 answers[73] = choices[73][0];
 units[73] = "110";
 comments[73] = "Id Pregunta: 9429. ";


//  Id pregunta: 9472 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  Se&ntilde;ale la afirmaci&oacute;n falsa en relaci&oacute;n con el protocolo LDAP";
 choices[74]= new Array();
 choices[74][0] = "LDAP env&iacute;a los comandos y respuestas siguiendo la notaci&oacute;n ASN.1";
 choices[74][1] = "El desarrollo de la especificaci&oacute;n LDAP se realiza a trav&eacute;s del IETF";
 choices[74][2] = "La funci&oacute;n LAUTH permite autenticar al cliente frente al directorio";
 choices[74][3] = "La unidad b&aacute;sica de informaci&oacute;n almacenada en el directorio es la entrada (entry)";
 answers[74] = choices[74][2];
 units[74] = "106";
 comments[74] = "Id Pregunta: 9472. ";


//  Id pregunta: 9497 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  Se&ntilde;ale la afimaci&oacute;n falsa con respecto a VBScript:";
 choices[75]= new Array();
 choices[75][0] = "Es una tecnolog&iacute;a abierta";
 choices[75][1] = "Genera ficheros con extensi&oacute;n .vbs";
 choices[75][2] = "Se comunica con las aplicaciones principales mediante ActiveX Scripting";
 choices[75][3] = "Dispone de mayor funcionalidad que JavaScript";
 answers[75] = choices[75][0];
 units[75] = "114";
 comments[75] = "Id Pregunta: 9497. NULL";


//  Id pregunta: 9500 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  Indica la afirmaci&oacute;n verdadera con respecto a los controles ActiveX:";
 choices[76]= new Array();
 choices[76][0] = "Permiten que los componentes software interact&uacute;en entre s&iacute; en un entorno de red, independientemente del lenguaje en el que han sido programados";
 choices[76][1] = "Se pueden escribir en Java, C++, VB, etc";
 choices[76][2] = "Internet Explorer soporta ActiveX de forma nativa";
 choices[76][3] = "Todas las anteriores son ciertas";
 answers[76] = choices[76][3];
 units[76] = "114";
 comments[76] = "Id Pregunta: 9500. NULL";


//  Id pregunta: 9516 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  &iquest;Cu&aacute;l de las siguientes directivas JSP no existe?";
 choices[77]= new Array();
 choices[77][0] = "page";
 choices[77][1] = "map";
 choices[77][2] = "taglib";
 choices[77][3] = "include";
 answers[77] = choices[77][1];
 units[77] = "116";
 comments[77] = "Id Pregunta: 9516. NULL";


//  Id pregunta: 9528 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  &iquest;Qu&eacute; factor afecta a la calidad de servicio en internet?";
 choices[78]= new Array();
 choices[78][0] = "Ancho de banda";
 choices[78][1] = "Jitter o variaci&oacute;n de retardo";
 choices[78][2] = "Eco";
 choices[78][3] = "Todas las respuestas anteriores son correctas";
 answers[78] = choices[78][3];
 units[78] = "117";
 comments[78] = "Id Pregunta: 9528. NULL";


//  Id pregunta: 9846 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  El algoritmo DES:";
 choices[79]= new Array();
 choices[79][0] = "Es un algoritmo de cifrado asim&eacute;trico que codifica bloques de 64 bits empleando claves de 32 bits, con una permutaci&oacute;n al principio y otra al final del proceso.";
 choices[79][1] = "Es un algoritmo de cifrado por bloques que codifica bloques de 54 bits, y su estructura consta de 16 etapas.";
 choices[79][2] = "Es un algoritmo de cifrado sim&eacute;trico cuya estructura es una variaci&oacute;n de la red de Feistel.";
 choices[79][3] = "Es un algoritmo de cifrado de flujo que codifica flujos de 64 bits, empleando una clave de 64, aunque s&oacute;lo 56 bits son utilizados. Los 8 bits restantes comprueban la paridad.";
 answers[79] = choices[79][2];
 units[79] = "111";
 comments[79] = "Id Pregunta: 9846. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Extremadura 2014";


//  Id pregunta: 9849 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  &iquest;Cu&aacute;l de las siguientes afirmaciones acerca de una DMZ (DeMilitarized Zone) o red perimetral pone en riesgo nuestra red interna?";
 choices[80]= new Array();
 choices[80][0] = "Las conexiones desde la red interna o privada a la DMZ est&aacute;n permitidas.";
 choices[80][1] = "Las conexiones desde la red externa o p&uacute;blica a la DMZ est&aacute;n permitidas.";
 choices[80][2] = "Las conexiones desde la DMZ a la red interna o privada est&aacute;n permitidas.";
 choices[80][3] = "Las conexiones desde la DMZ a la red externa o p&uacute;blica est&aacute;n permitidas.";
 answers[80] = choices[80][2];
 units[80] = "111";
 comments[80] = "Id Pregunta: 9849. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Extremadura 2014";


//  Id pregunta: 10046 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  El algoritmo PLC (Packet Loss Concealment):";
 choices[81]= new Array();
 choices[81][0] = "Lo utiliza Frame Relay para el reenv&iacute;o de tramas p&eacute;rdidas por la congesti&oacute;n en el sentido de la transmisi&oacute;n.";
 choices[81][1] = "Algoritmo de ocultamiento de p&eacute;rdida de paquetes utilizado por VoIP.";
 choices[81][2] = "Utilizado por TCP para la retransmisi&oacute;n de paquetes despu&eacute;s de una trama NACK (negative acknowledgement).";
 choices[81][3] = "Algoritmo de descarte de paquetes en situaci&oacute;n de congesti&oacute;n en redes Frame Relay.";
 answers[81] = choices[81][1];
 units[81] = "109";
 comments[81] = "Id Pregunta: 10046. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10074 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  Se&ntilde;ale cuales de las siguiente afirmaciones NO es una caracter&iacute;stica del protocolo EAP-TTLS:";
 choices[82]= new Array();
 choices[82][0] = "En la creaci&oacute;n del t&uacute;nel TLS el servidor se autentica mediante certificado.";
 choices[82][1] = "El cliente puede usar un m&eacute;todo de autenticaci&oacute;n distinto a EAP.";
 choices[82][2] = "Est&aacute; soportado de forma nativa en sistemas operativos Windows 7.";
 choices[82][3] = "Los mensajes de autenticaci&oacute;n del cliente son enviados cifrados al servidor.";
 answers[82] = choices[82][2];
 units[82] = "111";
 comments[82] = "Id Pregunta: 10074. TIC A2, libre, examen 2013";


//  Id pregunta: 10076 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  Los t&eacute;rminos scatternet y piconet est&aacute;n relacionados con la tecnolog&iacute;a:";
 choices[83]= new Array();
 choices[83][0] = "RDSI ";
 choices[83][1] = "Bluetooth";
 choices[83][2] = "DECT ";
 choices[83][3] = "Wimax";
 answers[83] = choices[83][1];
 units[83] = "107";
 comments[83] = "Id Pregunta: 10076. TIC A2, libre, Examen 2013";


//  Id pregunta: 10115 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  Cu&aacute;l de los siguientes contenedores SDH no es posible:";
 choices[84]= new Array();
 choices[84][0] = "STM-1";
 choices[84][1] = "STM-16";
 choices[84][2] = "STM-128";
 choices[84][3] = "STM-256";
 answers[84] = choices[84][2];
 units[84] = "101";
 comments[84] = "Id Pregunta: 10115. ";


//  Id pregunta: 10294 AÃ±o de creación de pregunta: 2010-01-01
 questions[85]= "86)  Indique cu&aacute;l de los siguientes es un tipo v&aacute;lido de cable de par trenzado seg&uacute;n su aislamiento o apantallamiento:";
 choices[85]= new Array();
 choices[85][0] = "scp";
 choices[85][1] = "htp";
 choices[85][2] = "ftp";
 choices[85][3] = "ssh";
 answers[85] = choices[85][2];
 units[85] = "99";
 comments[85] = "Id Pregunta: 10294. TIC A2, libre, examen 2013";


//  Id pregunta: 10300 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Indicar de las siguientes, cu&aacute;l es una cabecera de extensi&oacute;n IPv6:";
 choices[86]= new Array();
 choices[86][0] = "Cabecera siguiente.";
 choices[86][1] = "Enrutamiento.";
 choices[86][2] = "Longitud de la carga &uacute;til.";
 choices[86][3] = "L&iacute;mite de saltos.";
 answers[86] = choices[86][1];
 units[86] = "100";
 comments[86] = "Id Pregunta: 10300. TIC A2, libre, examen 2013";


//  Id pregunta: 10500 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  Cual de las siguientes afirmaciones es correcta con respecto al protocolo CAS, en el &aacute;mbito de los sitemas Single-Sign-On";
 choices[87]= new Array();
 choices[87][0] = "Fue concebido en la universidad de Oxford";
 choices[87][1] = "Es un protocolo SSO para todo tipo de aplicaciones, tanto web, como de escritorio.";
 choices[87][2] = "No existe el protocolo CAS, en ese &aacute;mbito";
 choices[87][3] = "CAS son las siglas de Central Authentication Service";
 answers[87] = choices[87][3];
 units[87] = "118";
 comments[87] = "Id Pregunta: 10500. NULL";


//  Id pregunta: 10651 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  Se&ntilde;ale la afirmaci&oacute;n incorrecta:";
 choices[88]= new Array();
 choices[88][0] = "La tarjeta SIM contiene la clave del algoritmo de autenticaci&oacute;n con la red GSM.";
 choices[88][1] = "En GSM se utilizan circuitos conmutados extremo a extremo.";
 choices[88][2] = "En la arquitectura de GSM, la interfaz Um se encuentra entre el Subsistema de Estaci&oacute;n Base (BSS) y el Subsistema de Red y  Conmutaci&oacute;n (NSS).";
 choices[88][3] = "En GSM, la separaci&oacute;n entre portadoras ascendente y descendente es de 45 Mhz.";
 answers[88] = choices[88][2];
 units[88] = "108";
 comments[88] = "Id Pregunta: 10651. ";


//  Id pregunta: 10652 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  Indique cu&aacute;l de &eacute;stos no es un m&eacute;todo EAP:";
 choices[89]= new Array();
 choices[89][0] = "PEAP";
 choices[89][1] = "EAP-PSK";
 choices[89][2] = "EAP-PAP";
 choices[89][3] = "EAP-TTLS";
 answers[89] = choices[89][2];
 units[89] = "111";
 comments[89] = "Id Pregunta: 10652. ";


//  Id pregunta: 10918 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  &iquest;Qu&eacute; caracter&iacute;sticas de seguridad presenta SNMPv3, tal y como se mencionan en la RFC 3418 (MIB for the SNMP Protocol)?";
 choices[90]= new Array();
 choices[90][0] = "Se recomienda que los implementadores usen el modelo de seguridad basado en usuario y el control de acceso basado en vistas.";
 choices[90][1] = "Se obliga a que los implementadores usen el modelo basado en usuario y el control de acceso basado en vistas.";
 choices[90][2] = "En dicha RFC no se menciona ning&uacute;n elemento de seguridad.";
 choices[90][3] = "En temas de seguridad, s&oacute;lo hace menci&oacute;n al uso obligatorio del algoritmo de encriptaci&oacute;n CBC (Cipher Block Chaining) de DES, conocido tambi&eacute;n por DES-56.";
 answers[90] = choices[90][0];
 units[90] = "104";
 comments[90] = "Id Pregunta: 10918. Examen GSI 2014";


//  Id pregunta: 10921 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  SAML (Security Assertion Markup Language):";
 choices[91]= new Array();
 choices[91][0] = "Establece protocolos de seguridad para el intercambio de identidades.";
 choices[91][1] = "Establece protocolos de seguridad para el firmado de estructuras XML.";
 choices[91][2] = "Es un est&aacute;ndar establecido por IEEE como alternativa a WS-Security en sistemas de autenticaci&oacute;n Single Sign-On.";
 choices[91][3] = "Es un est&aacute;ndar establecido por OASIS como alternativa a WS-Security en sistemas de autenticaci&oacute;n Single Sign-On.";
 answers[91] = choices[91][0];
 units[91] = "118";
 comments[91] = "Id Pregunta: 10921. TIC A1 AGE 2014";


//  Id pregunta: 11230 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l de las siguientes no es un API de la especificaci&oacute;n J2EE?";
 choices[92]= new Array();
 choices[92][0] = "JNDI.";
 choices[92][1] = "API Java IDL.";
 choices[92][2] = "JTA (Java Transaction API).";
 choices[92][3] = "JMS (Java Mobile Service).";
 answers[92] = choices[92][3];
 units[92] = "116";
 comments[92] = "Id Pregunta: 11230. ";


//  Id pregunta: 11301 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  De las siguientes opciones se&ntilde;ale la que no corresponde a una caracter&iacute;stica de las redes de banda ancha";
 choices[93]= new Array();
 choices[93][0] = "Se cambia la informaci&oacute;n de impulsos digitales por ondas moduladas.";
 choices[93][1] = "Conexion permanente, permitiendo a su vez la utilizacion de otra banda diferente del medio para otros fines";
 choices[93][2] = "Las se&ntilde;ales digitales pueden ser transmitidas directamente sin actuar sobre ellas";
 choices[93][3] = "Se utilizan dos o m&aacute;s canales de datos simult&aacute;neos en una &uacute;nica conexi&oacute;n";
 answers[93] = choices[93][2];
 units[93] = "99";
 comments[93] = "Id Pregunta: 11301. Es una caracter&iacute;stica de la banda base";


//  Id pregunta: 11440 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Seg&uacute;n la Ley 9/2014, los abonados podr&aacute;n conservar los n&uacute;meros que les hayan sido asignados:";
 choices[94]= new Array();
 choices[94][0] = "Siempre que se mantenga el mismo operador.";
 choices[94][1] = "Sin ning&uacute;n requisito previo.";
 choices[94][2] = "Previa solicitud.";
 choices[94][3] = "Seg&uacute;n fije la CNMC mediante resoluci&oacute;n.";
 answers[94] = choices[94][2];
 units[94] = "110";
 comments[94] = "Id Pregunta: 11440. ";


//  Id pregunta: 11564 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  En las redes m&oacute;viles 4G, LTE, el interfaz existente entre los eNodeB y la MME (entidad de gesti&oacute;n de la movilidad), se denomina:";
 choices[95]= new Array();
 choices[95][0] = "x2";
 choices[95][1] = "S1";
 choices[95][2] = "Um";
 choices[95][3] = "Abis";
 answers[95] = choices[95][0];
 units[95] = "108";
 comments[95] = "Id Pregunta: 11564. NULL";


//  Id pregunta: 11581 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Cu&aacute;l de las siguientes funciones de seguridad no ofrece SSL?";
 choices[96]= new Array();
 choices[96][0] = "No repudio";
 choices[96][1] = "Confidencialidad";
 choices[96][2] = "Integridad.";
 choices[96][3] = "Ofrece todas las anteriores";
 answers[96] = choices[96][0];
 units[96] = "111";
 comments[96] = "Id Pregunta: 11581. NULL";


//  Id pregunta: 11687 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Al conectar un PC y un HUB se debe usar:";
 choices[97]= new Array();
 choices[97][0] = "Straight-through cable";
 choices[97][1] = "Consola";
 choices[97][2] = "Crossover cable";
 choices[97][3] = "RJ 11";
 answers[97] = choices[97][0];
 units[97] = "99";
 comments[97] = "Id Pregunta: 11687. NULL";


//  Id pregunta: 11707 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Cu&aacute;l es una caracter&iacute;stica de los Caballos de Troya?";
 choices[98]= new Array();
 choices[98][0] = "Un caballo de troya proxy abre el puerto 21 en el sistema objetivo";
 choices[98][1] = "Un caballo de troya es dificil de detectar, porque detiene su ejecuci&oacute;n cuando la aplicaci&oacute;n que lo ejecut&oacute; se cierra.";
 choices[98][2] = "Un caballo de Troya puede cargarse en un virus o un gusano";
 choices[98][3] = "Un caballo de Troya FTP compromete el funcionamiento de cortafuegos";
 answers[98] = choices[98][2];
 units[98] = "111";
 comments[98] = "Id Pregunta: 11707. NULL";


//  Id pregunta: 11743 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Qu&eacute; algoritmo utiliza el cifrado por bloques?";
 choices[99]= new Array();
 choices[99][0] = "ElGamal";
 choices[99][1] = "DSA";
 choices[99][2] = "RSA";
 choices[99][3] = "DES";
 answers[99] = choices[99][3];
 units[99] = "111";
 comments[99] = "Id Pregunta: 11743. ";


