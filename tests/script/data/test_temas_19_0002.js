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

//  Id pregunta: 1019 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  El interfaz socket:";
 choices[0]= new Array();
 choices[0][0] = "S&oacute;lo es aplicable a TCP/IP";
 choices[0][1] = "S&oacute;lo es aplicable a UNIX";
 choices[0][2] = "Es el &uacute;nico modelo en Unix para acceder a TCP/IP";
 choices[0][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[0] = choices[0][3];
 units[0] = "100";
 comments[0] = "Id Pregunta: 1019. NULL";


//  Id pregunta: 2889 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  En su esquema de numeraci&oacute;n para redes IP, la Administraci&oacute;n ha utilizado:";
 choices[1]= new Array();
 choices[1][0] = "A cada Ministerio se le asigna una red de tipo B con numeraciones consecutivas a partir de 110 ... 129";
 choices[1][1] = "A cada Ministerio se le asigna un rango de direcciones IP , que van desde la 10.1.0.0 para el MAP increment&aacute;ndose el segundo componente para cada Departamento Ministerial importante";
 choices[1][2] = "Ha asignado direcciones IP de cara a la pr&oacute;xima introducci&oacute;n de IPv6 en que la extensi&oacute;n de direcciones aumenta y permitir&aacute; a cada ordenador de la administraci&oacute;n tener una &uacute;nica direcci&oacute;n IP";
 choices[1][3] = "La Administraci&oacute;n no se ha pronunciado al respecto,  lo que ha hecho ha sido estructurar las direcciones de correo electr&oacute;nico, dejando libres a los responsables de cada Deparamento la elecci&oacute;n de sus direcciones";
 answers[1] = choices[1][1];
 units[1] = "100";
 comments[1] = "Id Pregunta: 2889. NULL";


//  Id pregunta: 2950 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  &iquest;Cu&aacute;l es el primer nivel OSI en el que se produce comunicaci&oacute;n extremo-extremo?";
 choices[2]= new Array();
 choices[2][0] = "Red";
 choices[2][1] = "Transporte";
 choices[2][2] = "Sesi&oacute;n";
 choices[2][3] = "Presentaci&oacute;n";
 answers[2] = choices[2][1];
 units[2] = "100";
 comments[2] = "Id Pregunta: 2950. Similar a examen TIC SS A 2003";


//  Id pregunta: 2956 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  Su ordenador tiene la direcci&oacute;n IP 10.2.40.16 y m&aacute;scara de subred de 26 bits. Indique cu&aacute;l de las siguientes direcciones IP puede corresponderso con su router por defecto:";
 choices[3]= new Array();
 choices[3][0] = "10.2.40.64";
 choices[3][1] = "10.2.41.45";
 choices[3][2] = "10.2.40.63";
 choices[3][3] = "10.2.40.1";
 answers[3] = choices[3][3];
 units[3] = "100";
 comments[3] = "Id Pregunta: 2956. Examen TIC MAP B 2004";


//  Id pregunta: 2973 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  Suponiendo que con el protocolo HDLC tuvieramos un tama&ntilde;o de ventana de 6000, se hubieran enviado 2000 paquetes y recibido 1001 reconocimientos. &iquest;Cu&aacute;nto paquete podriamos seguir enviando?";
 choices[4]= new Array();
 choices[4][0] = "3000";
 choices[4][1] = "6000";
 choices[4][2] = "5000";
 choices[4][3] = "4000";
 answers[4] = choices[4][2];
 units[4] = "100";
 comments[4] = "Id Pregunta: 2973. Examen Julio 2003";


//  Id pregunta: 2977 AÃ±o de creación de pregunta: 2004-01-01
 questions[5]= "6)  El subnivel de control de acceso al medio, MAC se encuentra encuadrado dentro del nivel?";
 choices[5]= new Array();
 choices[5][0] = "Enlace";
 choices[5][1] = "F&iacute;sico";
 choices[5][2] = " Red";
 choices[5][3] = " ninguna de las anteriores";
 answers[5] = choices[5][0];
 units[5] = "100";
 comments[5] = "Id Pregunta: 2977. Examen Julio 2003";


//  Id pregunta: 3076 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  La introducci&oacute;n de redundancias en un c&oacute;digo de representaci&oacute;n, por ejemplo la introducci&oacute;n de un bit de paridad (par o impar), se hace para:";
 choices[6]= new Array();
 choices[6][0] = "Detectar posibles errores en la transmisi&oacute;n de la informaci&oacute;n";
 choices[6][1] = "Aumentar la eficacia del c&oacute;digo";
 choices[6][2] = "Aumentar el n&uacute;mero de datos susceptibles de representaci&oacute;n";
 choices[6][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[6] = choices[6][0];
 units[6] = "100";
 comments[6] = "Id Pregunta: 3076. NULL";


//  Id pregunta: 3088 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  Se dice que una l&iacute;nea es 'half duplex' cuando:";
 choices[7]= new Array();
 choices[7][0] = "Los terminales de datos de ambos extremos de la l&iacute;nea, pueden transmitir simult&aacute;neamente sin restricciones";
 choices[7][1] = "Los terminales de datos de ambos extremos de la l&iacute;nea, son se&ntilde;alizados por la red para poder comenzar su turno de transmisi&oacute;n";
 choices[7][2] = "Los terminales de datos de ambos extremos de la l&iacute;nea utilizan una se&ntilde;alizaci&oacute;n especial para cambiar el sentido de transmisi&oacute;n del canal";
 choices[7][3] = "Los terminales de datos de ambos extremos de la l&iacute;nea, pueden transmitir de forma ininterrumpida independientemente de la actividad del otro terminal";
 answers[7] = choices[7][2];
 units[7] = "99";
 comments[7] = "Id Pregunta: 3088. ";


//  Id pregunta: 3129 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Cu&aacute; de los siguientes no es un servicio del nivel de enlace de datos del modelo de referencia OSI?:";
 choices[8]= new Array();
 choices[8][0] = "Establecimiento y liberaci&oacute;n de un enlace de datos";
 choices[8][1] = "Control de la transmisi&oacute;n y recuperaci&oacute;n de fallos";
 choices[8][2] = "Gesti&oacute;n del propio nivel";
 choices[8][3] = "Identificaci&oacute;n de circuitos de datos";
 answers[8] = choices[8][3];
 units[8] = "100";
 comments[8] = "Id Pregunta: 3129. NULL";


//  Id pregunta: 3140 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l de las siguientes afirmaciones corresponde a alguno de los principios en virtud de los cuales se han definido siete niveles en el Modelo de Referencia OSI?:";
 choices[9]= new Array();
 choices[9][0] = "Definir un n&uacute;mero de capas muy elevado, de modo que la tarea de integrar las capas no sea m&aacute;s dif&iacute;cil de lo estrictamente necesario";
 choices[9][1] = "Crear niveles separados para aquellas funciones que son manifiestamente diferentes por raz&oacute;n del proceso realizado y de la tecnolog&iacute;a involucrada";
 choices[9][2] = "Crear una nueva capa siempre que exista necesidad de fragmentar de nuevo los datos en PDUs de menor tama&ntilde;o para de este modo optimizar el uso de la red";
 choices[9][3] = "Crear una nueva capa siempre que exista necesidad de un nuevo tipo de aplicaci&oacute;n final entre sistemas";
 answers[9] = choices[9][1];
 units[9] = "100";
 comments[9] = "Id Pregunta: 3140. NULL";


//  Id pregunta: 3162 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Cu&aacute;l de las siguientes asociaciaciones protocolos OSI-protocolos TCP/IP no es correcta?:";
 choices[10]= new Array();
 choices[10][0] = "SMTP-X.400";
 choices[10][1] = "TELNET-VT";
 choices[10][2] = "FTAM-FTP";
 choices[10][3] = "X.500-SNMP";
 answers[10] = choices[10][3];
 units[10] = "100, 104, 106";
 comments[10] = "Id Pregunta: 3162. ";


//  Id pregunta: 3194 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Dentro del modelo OSI la funci&oacute;n de 'permitir la comunicaci&oacute;n simult&aacute;nea, utilizando una o varias direcciones de red, de una o varias sesiones de trabajo', corresponde al nivel:";
 choices[11]= new Array();
 choices[11][0] = "Nivel de red";
 choices[11][1] = "Nivel de transporte";
 choices[11][2] = "Nivel de sesi&oacute;n";
 choices[11][3] = "Nivel de presentaci&oacute;n";
 answers[11] = choices[11][1];
 units[11] = "100";
 comments[11] = "Id Pregunta: 3194. NULL";


//  Id pregunta: 3202 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  El acr&oacute;nimo FCAPS en gesti&oacute;n de redes se refiere a:";
 choices[12]= new Array();
 choices[12][0] = "Failure, Configuration, Accountability, Performance, Security, los 5 aspectos m&aacute;s importantes en la gesti&oacute;n de red: fallos, configuraci&oacute;n, contabilidad, rendimiento y seguridad";
 choices[12][1] = "Failure, Configuration, Accountability, Performance, Software, los 5 aspectos m&aacute;s importantes en la gesti&oacute;n de red: fallos, configuraci&oacute;n, contabilidad, rendimiento y software de red";
 choices[12][2] = "Failure, Compatibility, Accountability, Performance, Security, los 5 aspectos m&aacute;s importantes en la gesti&oacute;n de red: fallos, compatibilidad, contabilidad, rendimiento y seguridad";
 choices[12][3] = "Failure, Configuration, Adaptability, Performance, Security, los 5 aspectos m&aacute;s importantes en la gesti&oacute;n de red: fallos, configuraci&oacute;n, adaptabilidad, rendimiento y seguridad";
 answers[12] = choices[12][0];
 units[12] = "104";
 comments[12] = "Id Pregunta: 3202. ";


//  Id pregunta: 3244 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  &iquest;Cu&aacute;l es la funcionalidad de los multiplexores estad&iacute;sticos?:";
 choices[13]= new Array();
 choices[13][0] = "Que realizan un tipo de multiplexaci&oacute;n por divisi&oacute;n en frecuencias (FDM)";
 choices[13][1] = "Que realizan la transferencia de se&ntilde;ales anal&oacute;gicas, y la estad&iacute;stica de errores";
 choices[13][2] = "Que realizan un muestreo de l&iacute;neas seg&uacute;n el tr&aacute;fico, no asignando intervalos fijos";
 choices[13][3] = "Que dividen el ancho de banda, seg&uacute;n par&aacute;metros definibles, proporcionando informaci&oacute;n estad&iacute;stica de uso para que el usuario ajuste sus asignaciones";
 answers[13] = choices[13][2];
 units[13] = "101";
 comments[13] = "Id Pregunta: 3244. ";


//  Id pregunta: 3254 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  &iquest;Cu&aacute;ntas subredes son posibles en una red de clase C, con una m&aacute;scara de subnet de 255.255.255.224?:";
 choices[14]= new Array();
 choices[14][0] = "32";
 choices[14][1] = "30";
 choices[14][2] = "8";
 choices[14][3] = "6";
 answers[14] = choices[14][2];
 units[14] = "100";
 comments[14] = "Id Pregunta: 3254. Se usa la f&oacute;rmula 2^N=Y, siendo N el n&uacute;mero de bits ocupados seg&uacute;n la m&aacute;scara, correspodientes a la asignaci&oacute;n por defecto para Host (en este caso  224=11100000 2^3=8)";


//  Id pregunta: 3273 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  &iquest;Por qu&eacute; motivo no debe utilizarse una red Ethernet para comunicar dispositivos que deban trabajar en tiempo real cr&iacute;tico?:";
 choices[15]= new Array();
 choices[15][0] = "Porque el tiempo medio entre fallos de este tipo de redes es bajo";
 choices[15][1] = "Porque la velocidad de este tipo de redes es demasiado baja";
 choices[15][2] = "Porque el tiempo m&aacute;ximo que tarda un nodo en acceder a la red no est&aacute; acotado";
 choices[15][3] = "Porque este tipo de redes responde al modelo cliente servidor y no permite comunicar dispositivos entre s&iacute;";
 answers[15] = choices[15][2];
 units[15] = "100";
 comments[15] = "Id Pregunta: 3273. ";


//  Id pregunta: 3299 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  &iquest;Qu&eacute; nivel del modelo OSI subdividen los subniveles LLC y MAC especificados por el IEEE?:";
 choices[16]= new Array();
 choices[16][0] = "El nivel f&iacute;sico";
 choices[16][1] = "El nivel de enlace";
 choices[16][2] = "El nivel de red";
 choices[16][3] = "El nivel de transporte";
 answers[16] = choices[16][1];
 units[16] = "100";
 comments[16] = "Id Pregunta: 3299. NULL";


//  Id pregunta: 3309 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  &iquest;Qu&eacute; se entiende por &quot;punto de sincronizaci&oacute;n principal&quot;?:";
 choices[17]= new Array();
 choices[17][0] = "En el nivel de red, se trata de nodos de cada subred encargados de sincronizar las comunicaciones que pasan por ellos";
 choices[17][1] = "En el nivel de enlace, son lugares de acceso a primitivas de servicio para control de flujo";
 choices[17][2] = "En el nivel de transporte, son puntos de sincronizaci&oacute;n de inicio y fin de una conexi&oacute;n";
 choices[17][3] = "En el nivel de sesi&oacute;n, son puntos que estructuran la transferencia de datos dividi&eacute;ndola en unidades de di&aacute;logo separadas";
 answers[17] = choices[17][3];
 units[17] = "100";
 comments[17] = "Id Pregunta: 3309. NULL";


//  Id pregunta: 3320 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  &iquest;Sabe qu&eacute; organismo defini&oacute; el est&aacute;ndar TCP/IP?:";
 choices[18]= new Array();
 choices[18][0] = "American National Standard Institute (ANSI)";
 choices[18][1] = "Departamento de Defensa de EE.UU.";
 choices[18][2] = "International Standards Organization (ISO)";
 choices[18][3] = "Institute for Electrical and Electronic Engineers (IEEE)";
 answers[18] = choices[18][1];
 units[18] = "100,112";
 comments[18] = "Id Pregunta: 3320. ";


//  Id pregunta: 3325 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  A la fuente fundamental de datos de lo que ocurre en un servidor web se le denomina:";
 choices[19]= new Array();
 choices[19][0] = "registro de incidencias";
 choices[19][1] = "fichero de log";
 choices[19][2] = "lista de errores";
 choices[19][3] = "fichero de registros";
 answers[19] = choices[19][1];
 units[19] = "113";
 comments[19] = "Id Pregunta: 3325. ";


//  Id pregunta: 3328 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  A las huellas del cliente que permiten implementar aspectos de autenticaci&oacute;n, preferencias, gesti&oacute;n del estado en HTTP se les denomina:";
 choices[20]= new Array();
 choices[20][0] = "applet";
 choices[20][1] = "cookie";
 choices[20][2] = "socket";
 choices[20][3] = "control activeX";
 answers[20] = choices[20][1];
 units[20] = "113";
 comments[20] = "Id Pregunta: 3328. ";


//  Id pregunta: 3334 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  BGP es un 'exterior gateway protocol'. &iquest;Qu&eacute; significa esto?:";
 choices[21]= new Array();
 choices[21][0] = "Usa algoritmos propietarios para calcular la ruta &oacute;ptima";
 choices[21][1] = "Es un protocolo que se utiliza para acceder dentro de Internet y ser reconocido por los firewalls";
 choices[21][2] = "Filtra el tr&aacute;fico de las fuentes exteriores antes de encaminarlo";
 choices[21][3] = "Encamina o enruta el tr&aacute;fico entre sistemas aut&oacute;nomos diferentes";
 answers[21] = choices[21][3];
 units[21] = "100";
 comments[21] = "Id Pregunta: 3334. NULL";


//  Id pregunta: 3364 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Dentro de la familia de protocolos TCP/IP, el protocolo RARP se emplea para:";
 choices[22]= new Array();
 choices[22][0] = "Establecer un protocolo de rearranque remoto que activa el demonio BOOTP";
 choices[22][1] = "Obtener la direcci&oacute;n Ethernet (48 bits) a partir de la direcci&oacute;n IP (32 bits)";
 choices[22][2] = "Obtener la direcci&oacute;n IP (32 bits) a partir de la direcci&oacute;n Ethernet (48 bits)";
 choices[22][3] = "Manejar la tabla de direcciones IP en el socket 250 de UDP";
 answers[22] = choices[22][2];
 units[22] = "100";
 comments[22] = "Id Pregunta: 3364. NULL";


//  Id pregunta: 3368 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Dentro de los medios f&iacute;sicos de transmisi&oacute;n de informaci&oacute;n, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?:";
 choices[23]= new Array();
 choices[23][0] = "Con rayo laser se pueden obtener anchos de banda del orden de 1 Ghz";
 choices[23][1] = "La conducci&oacute;n en fibra &oacute;ptica se realiza cuando el &iacute;ndicede refracci&oacute;n del vidrio del n&uacute;cleo es ligeramente inferir al de la cubierta";
 choices[23][2] = "Una guiaonda es similar a un coaxial en cuanto a banda de frecuencias en que se utiliza";
 choices[23][3] = "Los radioenlaces de microondas pueden asimilarse a un cable coxial f&iacute;sico";
 answers[23] = choices[23][2];
 units[23] = "99";
 comments[23] = "Id Pregunta: 3368. ";


//  Id pregunta: 3395 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  El nivel fisico denominados 802.11a se conoce como:";
 choices[24]= new Array();
 choices[24][0] = "High Rate Sequence HR/DS PHY";
 choices[24][1] = "High Rate Sequence HR/DSSS PHY";
 choices[24][2] = "Orthogonal Frequency Division Multiplexing";
 choices[24][3] = "IR/PHY";
 answers[24] = choices[24][2];
 units[24] = "101,107";
 comments[24] = "Id Pregunta: 3395. ";


//  Id pregunta: 3396 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  El nivel fisico denominado 802.11b se conoce como:";
 choices[25]= new Array();
 choices[25][0] = "High Rate Sequence HR/DS PHY (high-rate, direct-sequence PHY)";
 choices[25][1] = "High Rate Sequence HR/DSSS PHY (High Rate / Direct Sequence Spread Spectrum Physical Layer)";
 choices[25][2] = "OFDM PHY";
 choices[25][3] = "Las respuestas 'a' y 'b' son correctas";
 answers[25] = choices[25][3];
 units[25] = "101,107";
 comments[25] = "Id Pregunta: 3396. ";


//  Id pregunta: 3412 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  Funciones t&iacute;picas del nivel de sesi&oacute;n son:";
 choices[26]= new Array();
 choices[26][0] = "sincronizaci&oacute;n y control del testigo de datos";
 choices[26][1] = "presentaci&oacute;n y criptograf&iacute;a";
 choices[26][2] = "control de flujo y errores";
 choices[26][3] = "todas las anteriores";
 answers[26] = choices[26][0];
 units[26] = "100";
 comments[26] = "Id Pregunta: 3412. NULL";


//  Id pregunta: 3447 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  El protocolo de gesti&oacute;n y administraci&oacute;n de redes que ha sido estandarizado por OSI es:";
 choices[27]= new Array();
 choices[27][0] = "SNMP (Simple Network Management Protocol)";
 choices[27][1] = "SMIP (Structure of Management Information Protocol)";
 choices[27][2] = "CMIP (Common Management Information Protocol)";
 choices[27][3] = "RMON (Remote Network Monitoring)";
 answers[27] = choices[27][2];
 units[27] = "104";
 comments[27] = "Id Pregunta: 3447. ";


//  Id pregunta: 3478 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  El tipo de fibra &oacute;ptica que permite la transmisi&oacute;n a m&aacute;s velocidad es:";
 choices[28]= new Array();
 choices[28][0] = "&Iacute;ndice gradual";
 choices[28][1] = "Multimodo";
 choices[28][2] = "Fibra &oacute;ptica de salto de &iacute;ndice";
 choices[28][3] = "Monomodo";
 answers[28] = choices[28][3];
 units[28] = "99";
 comments[28] = "Id Pregunta: 3478. ";


//  Id pregunta: 3502 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  En el modelo de referencia OSI, una interfaz:";
 choices[29]= new Array();
 choices[29][0] = "Define las primitivas y los servicios que una capa ofrece a todas las que est&aacute;n sobre ella";
 choices[29][1] = "Define los servicios y las primitivas que una capa ofrece a la inmediatamente superior";
 choices[29][2] = "Define la funcionalidad final que el sistema ofrece al usuario";
 choices[29][3] = "Define las reglas y convenios para que dos procesos en diferentes m&aacute;quinas comuniquen entre s&iacute;";
 answers[29] = choices[29][1];
 units[29] = "100";
 comments[29] = "Id Pregunta: 3502. NULL";


//  Id pregunta: 3503 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  En el modelo de referencia OSI:";
 choices[30]= new Array();
 choices[30][0] = "El nivel de aplicaci&oacute;n controla el intercambio de datos entre los extremos";
 choices[30][1] = "El nivel de red pasa los datos al nivel de sesi&oacute;n";
 choices[30][2] = "El nivel f&iacute;sico establece las especificaciones el&eacute;ctricas de la transmisi&oacute;n";
 choices[30][3] = "El nivel de sesi&oacute;n recoge datos de la red y los pasa al nivel de aplicaci&oacute;n";
 answers[30] = choices[30][2];
 units[30] = "100";
 comments[30] = "Id Pregunta: 3503. NULL";


//  Id pregunta: 3509 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  En el protocolo de transmisi&oacute;n s&iacute;ncrona HDLC ( High-level Data Link Control), &iquest;qu&eacute; no es una caracter&iacute;stica?:";
 choices[31]= new Array();
 choices[31][0] = "Cada bloque se inicia con &quot;01111110&quot;";
 choices[31][1] = "El indicador de fin de bloque es &quot;01111111&quot;";
 choices[31][2] = "Esta prohibido enviar secuencias de 6 o m&aacute;s '1'";
 choices[31][3] = "Por cada serie de 5 unos seguidos, se a&ntilde;ade un cero que el receptor eliminar&aacute;";
 answers[31] = choices[31][1];
 units[31] = "100";
 comments[31] = "Id Pregunta: 3509. NULL";


//  Id pregunta: 3563 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  En un entorno donde m&uacute;ltiples ordenadores cliente experimentan congesti&oacute;n accediendo a ficheros en unservidor centralizado:";
 choices[32]= new Array();
 choices[32][0] = "Un conmutador (switch) con un ancho de banda mayor dedicado a las puertas de los clientes ayudar&aacute; a aliviar la congesti&oacute;n en el servidor";
 choices[32][1] = "Un switch con el mismo ancho de banda para cada puerta asegurar&aacute; que se la carga de trabajo se distribuya";
 choices[32][2] = "Un an&aacute;lisis de las pautas de tr&aacute;fico y de los puntos cuellos de botella ayudar&aacute; a determinar el tipo de conmutador apropiado";
 choices[32][3] = "Un puente multipuerta proporcionar&aacute; acceso dedicado a la puerta del servidor y aliviar&aacute; la congesti&oacute;n";
 answers[32] = choices[32][2];
 units[32] = "102, 104";
 comments[32] = "Id Pregunta: 3563. ";


//  Id pregunta: 3573 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  En una conexi&oacute;n V.90:";
 choices[33]= new Array();
 choices[33][0] = "Los m&oacute;dems siempre han de sincronizarse a 56k.";
 choices[33][1] = "Los m&oacute;dems no establecen protocolo de negociaci&oacute;n de par&aacute;metros previo a la conexi&oacute;n.";
 choices[33][2] = "La negociaci&oacute;n se hace v&iacute;a protocolos TCP.";
 choices[33][3] = "La velocidad de conexi&oacute;n se negocia entre los dos m&oacute;dem de acuerdo a las caracter&iacute;sticas de la l&iacute;nea.";
 answers[33] = choices[33][3];
 units[33] = "100, 103";
 comments[33] = "Id Pregunta: 3573. modems";


//  Id pregunta: 3595 AÃ±o de creación de pregunta: 2002-01-01
 questions[34]= "35)  La direcci&oacute;n de un socket se conforma con:";
 choices[34]= new Array();
 choices[34][0] = "La direcci&oacute;n IP del host y el modo de acceso";
 choices[34][1] = "La direcci&oacute;n IP del host y la direcci&oacute;n de un puerto local";
 choices[34][2] = "La URL del host";
 choices[34][3] = "La URL del host y el modo de acceso";
 answers[34] = choices[34][1];
 units[34] = "100";
 comments[34] = "Id Pregunta: 3595. NULL";


//  Id pregunta: 3609 AÃ±o de creación de pregunta: 2002-01-01
 questions[35]= "36)  La funci&oacute;n de una MIB es:";
 choices[35]= new Array();
 choices[35][0] = "Representar un dispositivo dado en la jerarqu&iacute;a de una red gestionada";
 choices[35][1] = "Identificar las caracter&iacute;sticas espec&iacute;ficas de un dispositivo gestionado y asociar uno o m&aacute;s valores a sus caracter&iacute;sticas";
 choices[35][2] = "Mapear agentes SNMP a  NMSs (Network Management Systems) SNMP y mantener una tablas con estas relaciones";
 choices[35][3] = "Permitir representar a los datos de forma independiente de las t&eacute;cnicas de representaci&oacute;n y de las estructuras de sistemas en particular";
 answers[35] = choices[35][1];
 units[35] = "104";
 comments[35] = "Id Pregunta: 3609. ";


//  Id pregunta: 3634 AÃ±o de creación de pregunta: 2002-01-01
 questions[36]= "37)  La RDSI (o ISDN):";
 choices[36]= new Array();
 choices[36][0] = "Implementa todas las capas del modelo OSI";
 choices[36][1] = "Implementa los protocolos TCP/IP";
 choices[36][2] = "Tiene un ancho de banda suficiente para la transmisi&oacute;n de v&iacute;deo sin comprimir";
 choices[36][3] = "Tiene un ancho de banda inferior al t&iacute;pico de las redes locales";
 answers[36] = choices[36][3];
 units[36] = "103";
 comments[36] = "Id Pregunta: 3634. ";


//  Id pregunta: 3643 AÃ±o de creación de pregunta: 2002-01-01
 questions[37]= "38)  La t&eacute;cnica de acceso al medio utilizada en redes Ethernet se denomina:";
 choices[37]= new Array();
 choices[37][0] = "CSMA";
 choices[37][1] = "CSMA/CD";
 choices[37][2] = "CSMA/CA";
 choices[37][3] = "Ninguna de las anteriores";
 answers[37] = choices[37][1];
 units[37] = "101";
 comments[37] = "Id Pregunta: 3643. ";


//  Id pregunta: 3667 AÃ±o de creación de pregunta: 2002-01-01
 questions[38]= "39)  Una arquitectura de red jer&aacute;rquica:";
 choices[38]= new Array();
 choices[38][0] = "Asigna a cada sistema de comunicaciones de la red las mismas funciones";
 choices[38][1] = "Todas las sesiones de la red tienen lugar entre sistemas parejos";
 choices[38][2] = "Un sistema maestro es el encargado de toda la red y realiza funciones de gesti&oacute;n y control";
 choices[38][3] = "Todas las sesiones comparten las funciones de gesti&oacute;n de red";
 answers[38] = choices[38][2];
 units[38] = "104";
 comments[38] = "Id Pregunta: 3667. ";


//  Id pregunta: 3677 AÃ±o de creación de pregunta: 2002-01-01
 questions[39]= "40)  Una red de conmutaci&oacute;n de paquetes trabaja en modo datagrama cuando:";
 choices[39]= new Array();
 choices[39][0] = "La transmisi&oacute;n de paquetes no es orientada a la conexi&oacute;n";
 choices[39][1] = "Se establecen circuitos virtuales entre origen y destino";
 choices[39][2] = "Se establecen circuitos f&iacute;sicos entre origen y destino";
 choices[39][3] = "Los mensajes se dividen en paquetes de longitud fija para su env&iacute;o";
 answers[39] = choices[39][0];
 units[39] = "101";
 comments[39] = "Id Pregunta: 3677. ";


//  Id pregunta: 3685 AÃ±o de creación de pregunta: 2002-01-01
 questions[40]= "41)  La velocidad del est&aacute;ndar Gigabit Ethernet es:";
 choices[40]= new Array();
 choices[40][0] = "100 Mbps";
 choices[40][1] = "1000 Mbps";
 choices[40][2] = "10000 Mbps";
 choices[40][3] = "100000 Mbps";
 answers[40] = choices[40][1];
 units[40] = "101";
 comments[40] = "Id Pregunta: 3685. ";


//  Id pregunta: 3712 AÃ±o de creación de pregunta: 2002-01-01
 questions[41]= "42)  Los agentes SNMP son:";
 choices[41]= new Array();
 choices[41][0] = "M&oacute;dulos de software que se ejecutan en los dispositivos gestionados y cuya funci&oacute;n es que la informaci&oacute;n acerca del dispositivo est&eacute; disponible para los sistemas de gesti&oacute;n ";
 choices[41][1] = "Ordenadores dedicados a la tarea de preguntar a los dispositvos SNMP por la informaci&oacute;n relevante y catalogarla en una base de datos";
 choices[41][2] = "Oficiales de ISO que realizan peri&oacute;dicamente auditor&iacute;as en compa&ntilde;&iacute;as que tienen grandes redes gestionadas por SNMP";
 choices[41][3] = "Aplicaciones dise&ntilde;adas para monitorizar la actividad de sistemas gestionados SNMP y alertar al usuario en caso de alg&uacute;n problema";
 answers[41] = choices[41][0];
 units[41] = "104";
 comments[41] = "Id Pregunta: 3712. ";


//  Id pregunta: 3745 AÃ±o de creación de pregunta: 2002-01-01
 questions[42]= "43)  Los terminales dise&ntilde;ados para conectarse directamente a la RDSI, como los tel&eacute;fonos digitales RDSI, un ordenador equipado con tarjeta adaptadora a RDSI y software &ldquo;driver&rdquo; de la tarjeta adaptadora a RDSI se denominan:";
 choices[42]= new Array();
 choices[42][0] = "ET1";
 choices[42][1] = "ET2";
 choices[42][2] = "TR2";
 choices[42][3] = "AT";
 answers[42] = choices[42][0];
 units[42] = "103";
 comments[42] = "Id Pregunta: 3745. ";


//  Id pregunta: 3747 AÃ±o de creación de pregunta: 2002-01-01
 questions[43]= "44)  Los tipos diferentes de primitivas existentes en el modelo OSI son:";
 choices[43]= new Array();
 choices[43][0] = "Request, Answer, Finalization";
 choices[43][1] = "Request, Response, Indication, Confirmation";
 choices[43][2] = "Request, Response, Error, Indication, Confirmation, Replay";
 choices[43][3] = "Dependen del protocolo, cada protocolo tiene un conjunto distinto de tipos de primitivas";
 answers[43] = choices[43][1];
 units[43] = "100";
 comments[43] = "Id Pregunta: 3747. NULL";


//  Id pregunta: 3807 AÃ±o de creación de pregunta: 2002-01-01
 questions[44]= "45)  Seg&uacute;n el modelo internet SLIP y PPP pertenecen:";
 choices[44]= new Array();
 choices[44][0] = "Nivel de enlace";
 choices[44][1] = "Nivel de red";
 choices[44][2] = "Nivel de internet";
 choices[44][3] = "Nivel de aplicaci&oacute;n";
 answers[44] = choices[44][1];
 units[44] = "100";
 comments[44] = "Id Pregunta: 3807. NULL";


//  Id pregunta: 3809 AÃ±o de creación de pregunta: 2002-01-01
 questions[45]= "46)  Seg&uacute;n la normativa UN-85, a cuanto asciende la m&aacute;xima potencia (PIRE) que un transmisor puede generar en redes inal&aacute;mbricas de banda 2,4 GHz?:";
 choices[45]= new Array();
 choices[45][0] = "10 mW";
 choices[45][1] = "1W";
 choices[45][2] = "100 mW";
 choices[45][3] = "1 mW";
 answers[45] = choices[45][2];
 units[45] = "99";
 comments[45] = "Id Pregunta: 3809. ";


//  Id pregunta: 3817 AÃ±o de creación de pregunta: 2002-01-01
 questions[46]= "47)  Se&ntilde;ale cu&aacute;l es el mecanismo que utiliza el protocolo IP para gesti&oacute;n de flujo:";
 choices[46]= new Array();
 choices[46][0] = "Frenado brusco con trama de control &quot;rmr&quot;";
 choices[46][1] = "Frenado brusco con trama de control &quot;wack&quot;";
 choices[46][2] = "Ventana de cr&eacute;dito de tama&ntilde;o variable";
 choices[46][3] = "El protocolo IP no realiza control de flujo";
 answers[46] = choices[46][3];
 units[46] = "100";
 comments[46] = "Id Pregunta: 3817. NULL";


//  Id pregunta: 3827 AÃ±o de creación de pregunta: 2002-01-01
 questions[47]= "48)  Se&ntilde;ale la respuesta falsa respecto a los protocolos de gesti&oacute;n de red:";
 choices[47]= new Array();
 choices[47][0] = "El modelo de gesti&oacute;n OSI utiliza una base de informaci&oacute;n de gesti&oacute;n o MIB para almacenar la informaci&oacute;n estructurada que representa a los elementos de la red y sus atributos";
 choices[47][1] = "La estructura de informaci&oacute;n se denomina SMI (Estructura de informaci&oacute;n de Gestion) para estas estructuras el modelo OSI define un Sistema muy complejo de gesti&oacute;n orientado a objetos";
 choices[47][2] = "Con la especificaci&oacute;n SNMP versi&oacute;n 1 (Protocolo sencillo de gesti&oacute;n de red) no se puede comprobar el origen de un mensaje ni su autenficaci&oacute;n, lo que le hace vulnerable a ataques para modificar la configuraci&oacute;n de red";
 choices[47][3] = "SNMPv2 y SNMP son variantes de SMTP";
 answers[47] = choices[47][3];
 units[47] = "104";
 comments[47] = "Id Pregunta: 3827. ";


//  Id pregunta: 3860 AÃ±o de creación de pregunta: 2004-01-01
 questions[48]= "49)  El protocolo ARP";
 choices[48]= new Array();
 choices[48][0] = "Proporciona la traducci&oacute;n entre direcci&oacute;n IP y direcci&oacute;n LAN";
 choices[48][1] = "Proporciona una conversi&oacute;n entre direcci&oacute;n LAN y direcci&oacute;n IP";
 choices[48][2] = "Se utiliza en routers y bridges";
 choices[48][3] = "A y B son correctas";
 answers[48] = choices[48][0];
 units[48] = "100";
 comments[48] = "Id Pregunta: 3860. Tanenbaum";


//  Id pregunta: 3870 AÃ±o de creación de pregunta: 2004-01-01
 questions[49]= "50)  Qu&eacute; es falso respecto a XHTML";
 choices[49]= new Array();
 choices[49][0] = "Obliga a anidar las etiquetas adecuadamente";
 choices[49][1] = "Se adapta mejor a los navegadores m&aacute;s avanzados";
 choices[49][2] = "Obliga a encerrar entre comillas los valores de los atributos";
 choices[49][3] = "Cada documento tiene que especificar su tipo";
 answers[49] = choices[49][1];
 units[49] = "113";
 comments[49] = "Id Pregunta: 3870. Tanenbaum";


//  Id pregunta: 3954 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  Indicar la afirmaci&oacute;n correcta:";
 choices[50]= new Array();
 choices[50][0] = "MPLS es un est&aacute;ndar ISO de conmutaci&oacute;nde paquetes, que trata de proporcionaralgunas de las caracter&iacute;sticasde las redes orientadas a conexi&oacute;na las redes no orientadasa conexi&oacute;n";
 choices[50][1] = "Una red MPLS est&aacute; compuestapor dos tipos principales denodos, los LER (Label End Routers)y los LSR (Label Switching Routers)";
 choices[50][2] = "MPLS es un est&aacute;ndar IP del IETF de conmutaci&oacute;nde paquetes, que trata de proporcionaralgunas de las caracter&iacute;sticasde las redes no orientadas a conexi&oacute;na las redes orientadasa conexi&oacute;n";
 choices[50][3] = "MPLS se implementahabitualmente como una soluci&oacute;n IPpura o de nivel 3";
 answers[50] = choices[50][3];
 units[50] = "100";
 comments[50] = "Id Pregunta: 3954. NULL";


//  Id pregunta: 3975 AÃ±o de creación de pregunta: 2006-01-01
 questions[51]= "52)  El est&aacute;ndar EIA/TIA 568, aprobado en Julio de 1991,esta en conformidad con lo dispuesto por:";
 choices[51]= new Array();
 choices[51][0] = "CEN";
 choices[51][1] = "ISO";
 choices[51][2] = "ITU-T";
 choices[51][3] = "ANSI";
 answers[51] = choices[51][3];
 units[51] = "99";
 comments[51] = "Id Pregunta: 3975. ";


//  Id pregunta: 3984 AÃ±o de creación de pregunta: 2006-01-01
 questions[52]= "53)  En relaci&oacute;n con las redes de comunicaciones, &iquest;a qu&eacute; hace referencia el t&eacute;rmino &quot;VLAN trunking&quot;?";
 choices[52]= new Array();
 choices[52][0] = "Es el est&aacute;ndar 802.1Q";
 choices[52][1] = "Se refiere a etiquetar tramas ethernet";
 choices[52][2] = "Al proceso de transmitir m&uacute;ltiples VLAN por un &uacute;nico enlace";
 choices[52][3] = "A la se&ntilde;alizaci&oacute;n de VLAN";
 answers[52] = choices[52][2];
 units[52] = "101, 102";
 comments[52] = "Id Pregunta: 3984. ";


//  Id pregunta: 4077 AÃ±o de creación de pregunta: 2006-01-01
 questions[53]= "54)  La red externa a la que se conecta el departamento de compras para comunicarse con sus proveedores se llama";
 choices[53]= new Array();
 choices[53][0] = "Intranet";
 choices[53][1] = "inter-intranet";
 choices[53][2] = "extranet abierta";
 choices[53][3] = "extranet";
 answers[53] = choices[53][3];
 units[53] = "113";
 comments[53] = "Id Pregunta: 4077. ";


//  Id pregunta: 4141 AÃ±o de creación de pregunta: 2006-01-01
 questions[54]= "55)  El modo promiscuo se utiliza para";
 choices[54]= new Array();
 choices[54][0] = "Comunicarse con todos los ordenadores de una red";
 choices[54][1] = "Abrir un canal IRC (chat) a todos los usuarios conectados";
 choices[54][2] = "Habilitar redes TCP multicast";
 choices[54][3] = "Acceder a todos los paquetes del segmento de red";
 answers[54] = choices[54][3];
 units[54] = "102";
 comments[54] = "Id Pregunta: 4141. ";


//  Id pregunta: 4164 AÃ±o de creación de pregunta: 2006-01-01
 questions[55]= "56)  &iquest;Cu&aacute;l de los siguientes no es un servicio TCP?";
 choices[55]= new Array();
 choices[55][0] = "who";
 choices[55][1] = "whois";
 choices[55][2] = "finger";
 choices[55][3] = "identd";
 answers[55] = choices[55][0];
 units[55] = "100";
 comments[55] = "Id Pregunta: 4164. ";


//  Id pregunta: 4204 AÃ±o de creación de pregunta: 2006-01-01
 questions[56]= "57)  El MTBF asociado a la disponibilidad de un sistema formado por dos equipos id&eacute;nticos que deben funcionar simult&aacute;neamente en todo momento";
 choices[56]= new Array();
 choices[56][0] = "Es mayor que el de cualquiera de ellos individualmente";
 choices[56][1] = "Es menor que el de cualquiera de ellos individualmente";
 choices[56][2] = "Es igual al de cualquiera de ellos individualmente";
 choices[56][3] = "No puede ser conocido a priori";
 answers[56] = choices[56][1];
 units[56] = "104";
 comments[56] = "Id Pregunta: 4204. ";


//  Id pregunta: 4225 AÃ±o de creación de pregunta: 2006-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta para el protocolo TCP/IP?";
 choices[57]= new Array();
 choices[57][0] = "IP no proporciona control de errores para datos, ni sumas de comprobaci&oacute;n de cabeceras";
 choices[57][1] = "Si se pierde o da&ntilde;a alg&uacute;n datagrama durante la transmisi&oacute;n, TCP lo detecta y lo vuelve a retransmitir";
 choices[57][2] = "UDP garantiza la entrega de los datagramas y evita las duplicaciones";
 choices[57][3] = "ICMP garantiza la entrega fiable de un paquete IP";
 answers[57] = choices[57][1];
 units[57] = "100";
 comments[57] = "Id Pregunta: 4225. IPv6 no a&ntilde;ade CHECKSUM en su cabecera. La comprobaci&oacute;n de integridad se asume asegurada por checksum de la capa de enlace y checksum de nivel superiores (as&iacute; routers no necesitan recalcular checksum cada vez que alg&uacute;n campo cabecera cambia).";


//  Id pregunta: 4485 AÃ±o de creación de pregunta: 2007-01-01
 questions[58]= "59)  Las estaciones conectadas a una red de &aacute;rea local por medio de tarjetas de red de tipo Ethernet:";
 choices[58]= new Array();
 choices[58][0] = "Acceden al medio de transmisi&oacute;n en periodos de tiempo predeterminados, por lo que nunca se producen colisiones.";
 choices[58][1] = "Acceden el medio de transmisi&oacute;n de forma aleatoria, por lo que pueden producirse colisiones.";
 choices[58][2] = "Acceden al medio de transmisi&oacute;n en diferentes frecuencias de trabajo, por Io que pueden acceder varias simult&aacute;neamente sin que se produzcan colisiones";
 choices[58][3] = "Nunca acceden Si tras un primer intento se detecto una colisi&oacute;n.";
 answers[58] = choices[58][1];
 units[58] = "99";
 comments[58] = "Id Pregunta: 4485. ";


//  Id pregunta: 4766 AÃ±o de creación de pregunta: 2007-01-01
 questions[59]= "60)  En la mayor&iacute;a de las instalaciones de cableado estrcturado, el par trenzado sin apantallar (UTP) es m&aacute;s utilizdo ue el par trenzado apantallado (STP) deboido a que";
 choices[59]= new Array();
 choices[59][0] = "STP es m&aacute;s costoso y m&aacute;s suceptible a problemas de ruido cuando la conexi&oacute;n a tierra no es de gran calidad";
 choices[59][1] = "Al ser STP mucho m&aacute;s fr&aacute;gil que UTP, reslta mucho m&aacute;s dif&iacute;cil canalizarlo";
 choices[59][2] = "Los conectores utilizados en UTP (RJ-45) son m&aacute;s econ&oacute;micos  fiables que los de STP (RJ 11)";
 choices[59][3] = "Es mucho m&aacute;s utilizado el par trenzado apantallado (STP)";
 answers[59] = choices[59][0];
 units[59] = "99";
 comments[59] = "Id Pregunta: 4766. ";


//  Id pregunta: 4767 AÃ±o de creación de pregunta: 2007-01-01
 questions[60]= "61)  La diferencia esencial entre TCP y UDP es";
 choices[60]= new Array();
 choices[60][0] = "A diferencia de UDP, TCP dispone de mecanismos para el control de flujo y la transmisi&oacute;n fiable de paquetes";
 choices[60][1] = "A diferencia de UDP, TCP ofrece a la capa superior el servicio de multiplexaci&oacute;n por puerto";
 choices[60][2] = "A dferencia de UDP, TCP dispone de mecanismos para detectar errores de transmisi&oacute;n";
 choices[60][3] = "Todas las anteriores son ciertas";
 answers[60] = choices[60][0];
 units[60] = "100";
 comments[60] = "Id Pregunta: 4767. ";


//  Id pregunta: 5570 AÃ±o de creación de pregunta: 2003-01-01
 questions[61]= "62)  &iquest;Qu&eacute; afirmaci&oacute;n sobre los puentes NO es correcta?";
 choices[61]= new Array();
 choices[61][0] = "Da servicio a un n&uacute;mero de ordenadores mayor que el que puede cubrirse con una red local";
 choices[61][1] = "Puede conectar redees heterog&eacute;neas";
 choices[61][2] = "Puede conectar medios f&iacute;sicos distintos";
 choices[61][3] = "Un problema en una subred afecta a toda la red";
 answers[61] = choices[61][3];
 units[61] = "102";
 comments[61] = "Id Pregunta: 5570. ";


//  Id pregunta: 5867 AÃ±o de creación de pregunta: 2009-01-01
 questions[62]= "63)  &iquest;Cu&aacute;ntos bits utiliza el protocolo IPv6 (Internet Protocol version 6) para el campo de direcciones IP?";
 choices[62]= new Array();
 choices[62][0] = "16 bits";
 choices[62][1] = "32 bits";
 choices[62][2] = "64 bits";
 choices[62][3] = "128 bits";
 answers[62] = choices[62][3];
 units[62] = "100";
 comments[62] = "Id Pregunta: 5867. MAP 2008 A1";


//  Id pregunta: 6003 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  Un servidor web puede utilizar el mecanismo de &quot;cookies&quot; para:";
 choices[63]= new Array();
 choices[63][0] = "Extraer la direcci&oacute;n de correo de un usuario.";
 choices[63][1] = "Relacionar sucesivas conexiones de un cliente.";
 choices[63][2] = "Enviar un objeto al cliente cuando su copia cach&eacute; est&aacute; obsoleta.";
 choices[63][3] = "Enviar c&oacute;digo embebido en la p&aacute;gina HTML que se ejecutar&aacute; en el cliente.";
 answers[63] = choices[63][1];
 units[63] = "113";
 comments[63] = "Id Pregunta: 6003. TIC A 2009";


//  Id pregunta: 6062 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  Se ha establecido una conexi&oacute;n TCP sobre una red m&oacute;vil celular. La red m&oacute;vil sufre p&eacute;rdidas frecuentes por errores de transmisi&oacute;n debidos a las caracter&iacute;sticas del acceso radio. El emisor TCP:";
 choices[64]= new Array();
 choices[64][0] = "Distingue entre p&eacute;rdidas por errores de transmisi&oacute;n y p&eacute;rdidas por congesti&oacute;n, aplicando procedimientos de recuperaci&oacute;n diferentes.";
 choices[64][1] = "S&oacute;lo retransmite paquetes que se pierdan debido a congesti&oacute;n en la red.";
 choices[64][2] = "Indica al nivel de enlace que disminuya su tasa de env&iacute;o.";
 choices[64][3] = "Interpreta las p&eacute;rdidas debidas a errores de transmisi&oacute;n como congesti&oacute;n en la red, disminuyendo su tasa de env&iacute;o.";
 answers[64] = choices[64][3];
 units[64] = "100";
 comments[64] = "Id Pregunta: 6062. TIC A 2009";


//  Id pregunta: 6142 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  En relaci&oacute;n con los c&oacute;decs que se utilizan para comprimir la voz en sistemas de VoIP:";
 choices[65]= new Array();
 choices[65][0] = "G.711 proporciona mejor calidad de sonido que G.729";
 choices[65][1] = "G.711 genera una tasa de transferencia menor que G.729";
 choices[65][2] = "Las dos respuestas anteriores son correctas";
 choices[65][3] = "Todas las respuestas anteriores son falsas";
 answers[65] = choices[65][0];
 units[65] = "100, 109";
 comments[65] = "Id Pregunta: 6142. ";


//  Id pregunta: 7248 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  En el protocolo IPv6, las direcciones constan de:";
 choices[66]= new Array();
 choices[66][0] = "6 bytes";
 choices[66][1] = "8 bytes";
 choices[66][2] = "16 bytes";
 choices[66][3] = "32 bytes";
 answers[66] = choices[66][2];
 units[66] = "100";
 comments[66] = "Id Pregunta: 7248. Examen TIC B 2009";


//  Id pregunta: 7250 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  La direcci&oacute;n IPv4 172.30.120.135/12 es una direcci&oacute;n de tipo:";
 choices[67]= new Array();
 choices[67][0] = "Direcci&oacute;n de red broadcast";
 choices[67][1] = "Direcci&oacute;n de red privada";
 choices[67][2] = "Direcci&oacute;n de red de enlace local";
 choices[67][3] = "Direcci&oacute;n de red p&uacute;blica";
 answers[67] = choices[67][1];
 units[67] = "100";
 comments[67] = "Id Pregunta: 7250. Examen TIC B 2009";


//  Id pregunta: 7251 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)  El protocolo FTP es un protocolo:";
 choices[68]= new Array();
 choices[68][0] = "Seguro";
 choices[68][1] = "No orientado a conexi&oacute;n";
 choices[68][2] = "De nivel de aplicaci&oacute;n";
 choices[68][3] = "Dise&ntilde;ado para gestionar se&ntilde;alizaci&oacute;n de red";
 answers[68] = choices[68][2];
 units[68] = "100";
 comments[68] = "Id Pregunta: 7251. Examen TIC B 2009";


//  Id pregunta: 7254 AÃ±o de creación de pregunta: 2010-01-01
 questions[69]= "70)  MPLS (Multiprotocol Label Switching) opera:";
 choices[69]= new Array();
 choices[69][0] = "Sobre el protocolo IP, y por debajo del protocolo TCP";
 choices[69][1] = "Entre la capa de enlace de datos y la capa de red del modelo OSI";
 choices[69][2] = "Entre el protocolo TCP y los protocolos del nivel de Aplicaci&oacute;n";
 choices[69][3] = "Entre la capa del nivel de red y la capa de transporte del modelo TCP/IP";
 answers[69] = choices[69][1];
 units[69] = "100";
 comments[69] = "Id Pregunta: 7254. Examen TIC B 2009";


//  Id pregunta: 8297 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  Hablando del modelo OSI &iquest;Cu&aacute;l de las siguientes parejas NO es correcta?";
 choices[70]= new Array();
 choices[70][0] = "Nivel 4 - HDLC. ";
 choices[70][1] = "Nivel 1 - CSMA/CD.";
 choices[70][2] = "Nivel 3 - X.25.";
 choices[70][3] = "Nivel 2 - LAPB";
 answers[70] = choices[70][0];
 units[70] = "100";
 comments[70] = "Id Pregunta: 8297. Examen TIC A2 2010";


//  Id pregunta: 8325 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  En la radio digital (DAB):";
 choices[71]= new Array();
 choices[71][0] = "Los servicios pueden estructurarse y configurarse de forma din&aacute;mica";
 choices[71][1] = "El servicio ha sido dise&ntilde;ado para trabajar en frecuencias de 30 GHz a 3000 GHz";
 choices[71][2] = "La cobertura solo puede ser local";
 choices[71][3] = "Ninguna de las anteriores es correcta";
 answers[71] = choices[71][0];
 units[71] = "103";
 comments[71] = "Id Pregunta: 8325. Analista Ayto. Madrid 2010";


//  Id pregunta: 8625 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  &iquest;Cu&aacute;l de los siguientes problemas afecta a los medios de transmisi&oacute;n?";
 choices[72]= new Array();
 choices[72][0] = "Reverberaci&oacute;n.";
 choices[72][1] = "Ruido blanco";
 choices[72][2] = "Afon&iacute;a";
 choices[72][3] = "Todos son posibles problemas de los medios de transmisi&oacute;n";
 answers[72] = choices[72][1];
 units[72] = "99";
 comments[72] = "Id Pregunta: 8625. Examen TIC A2 2010 interna";


//  Id pregunta: 8728 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  El acr&oacute;nimo FCAPS en gesti&oacute;n de redes se refiere a:";
 choices[73]= new Array();
 choices[73][0] = "Failure, Configuration, Accountability, Performance, Software, los 5 aspectos m&aacute;s importantes en la gesti&oacute;n de red: fallos, configuraci&oacute;n, contabilidad, rendimiento y software de red.";
 choices[73][1] = "Failure, Compatibility, Accountability, Performance, Security, los 5 aspectos m&aacute;s importantes en la gesti&oacute;n de red: fallos, compatibilidad, contabilidad, rendimiento y seguridad.";
 choices[73][2] = "Failure, Configuration, Adaptability, Performance, Security, los 5 aspectos m&aacute;s importantes en la gesti&oacute;n de red: fallos, configuraci&oacute;n, adaptabilidad, rendimiento y seguridad.";
 choices[73][3] = "Failure, Configuration, Accountability, Performance, Security, los 5 aspectos m&aacute;s importantes en la gesti&oacute;n de red: fallos, configuraci&oacute;n, contabilidad, rendimiento y seguridad.";
 answers[73] = choices[73][3];
 units[73] = "104";
 comments[73] = "Id Pregunta: 8728. Examen UPM A2 2011";


//  Id pregunta: 8729 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  Un servidor DHCP no puede proveer a un equipo cliente de la configuraci&oacute;n de";
 choices[74]= new Array();
 choices[74][0] = "M&aacute;scara de subred";
 choices[74][1] = "Tiempo m&aacute;ximo de espera del ARP";
 choices[74][2] = "Servidor SMTP";
 choices[74][3] = "Software antivirus";
 answers[74] = choices[74][3];
 units[74] = "100";
 comments[74] = "Id Pregunta: 8729. Examen UPM A2 2011";


//  Id pregunta: 8778 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  Las actualizaciones de zonas entre servidores DNS se tienen lugar usando los puertos:";
 choices[75]= new Array();
 choices[75][0] = "53 TCP";
 choices[75][1] = "453 TCP";
 choices[75][2] = "456 UDP";
 choices[75][3] = "53 UDP";
 answers[75] = choices[75][0];
 units[75] = "100, 112";
 comments[75] = "Id Pregunta: 8778. Examen UPM A2 2011";


//  Id pregunta: 9022 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  Un CSS (Cent Call Second) se emplea en telefon&iacute;a como una medida de tr&aacute;fico telef&oacute;nico (volumen de tr&aacute;fico). Un CCS es el tr&aacute;fico telef&oacute;nico causado por una llamada de 100 segundos de duraci&oacute;n. &iquest;Cuantos CSS tiene un Erlang?";
 choices[76]= new Array();
 choices[76][0] = "1 CSS.";
 choices[76][1] = "100 CSS.";
 choices[76][2] = "36 CSS.";
 choices[76][3] = "10 CSS";
 answers[76] = choices[76][2];
 units[76] = "104";
 comments[76] = "Id Pregunta: 9022. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9026 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  A efectos de facturaci&oacute;n, en una red corporativa donde exista una salida/entrada directa a la red de m&oacute;viles (enlace desde la red corporativa a la red de m&oacute;viles directo) para todas las llamadas desde/a m&oacute;viles:";
 choices[77]= new Array();
 choices[77][0] = "Se considerar&aacute;n tres tipos de tarifas en funci&oacute;n del origen y destino de la llamada corporativa: fijo-m&oacute;vil, m&oacute;vil-fijo y m&oacute;vil-m&oacute;vil.";
 choices[77][1] = "Todas las llamadas corporativas fijo-m&oacute;vil y m&oacute;vil-fijo tendr&aacute;n consideraci&oacute;n de m&oacute;vil-m&oacute;vil.";
 choices[77][2] = "Esta es un servicio que no lo dan los operadores de m&oacute;viles y es preciso salir a m&oacute;viles a trav&eacute;s de la red p&uacute;blica de conmutaci&oacute;n de circuitos.";
 choices[77][3] = "Todas las llamadas corporativas fijo-m&oacute;vil y m&oacute;vil-fijo tendr&aacute;n consideraci&oacute;n de fijo-fijo.";
 answers[77] = choices[77][1];
 units[77] = "103";
 comments[77] = "Id Pregunta: 9026. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9028 AÃ±o de creación de pregunta: 2011-01-01
 questions[78]= "79)  Indica cual de estas afirmaciones es cierta";
 choices[78]= new Array();
 choices[78][0] = "En RDSI igual que en RTB el descolgado del tel&eacute;fono produce un &quot;corto&quot; de tal forma que la corriente que pasa por el bucle indica a la central que el abonado ha descolgado.";
 choices[78][1] = "En RDSI el terminador de red aun siendo activo en caso de ca&iacute;da de la alimentaci&oacute;n local es capaz de establecer/mantener la conversaci&oacute;n.";
 choices[78][2] = "Los terminales que cuelgan de la RTB (Red Telef&oacute;nica B&aacute;sica) no pueden establecer ning&uacute;n tipo de comunicaci&oacute;n con los que cuelgan de la RDSI (Red Digital de Servicios Integrados).";
 choices[78][3] = "Ninguna de las anteriores";
 answers[78] = choices[78][1];
 units[78] = "103";
 comments[78] = "Id Pregunta: 9028. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9326 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  Qu&eacute; clase de cable, seg&uacute;n la norma ISO 11801, elegir&iacute;a para permitir la transmisi&oacute;n de video en tiempo real?";
 choices[79]= new Array();
 choices[79][0] = "clase D";
 choices[79][1] = "clase F ";
 choices[79][2] = "clase E";
 choices[79][3] = "b) y c) son correctas.";
 answers[79] = choices[79][3];
 units[79] = "99";
 comments[79] = "Id Pregunta: 9326. NULL";


//  Id pregunta: 9333 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  Se&ntilde;ale la respuesta";
 choices[80]= new Array();
 choices[80][0] = "El subsistema vertical conecta el distribuidor de campus con los puntos de transicion (PT)";
 choices[80][1] = "El subsistema horizontal parte de los cuadros de distribucion de planta y llega a las rosetas de conexion.";
 choices[80][2] = "El subsistema horizontal conecta los puntos de transicion (PT) entre s&iacute;";
 choices[80][3] = "El cableado de campus comienza en los distribuidores de planta.";
 answers[80] = choices[80][1];
 units[80] = "99";
 comments[80] = "Id Pregunta: 9333. NULL";


//  Id pregunta: 9353 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  El sistema de se&ntilde;alizaci&oacute;n SS7:";
 choices[81]= new Array();
 choices[81][0] = "Se ocupa, entre otras cosas, del establecimiento de llamada.";
 choices[81][1] = "S&oacute;lo se emplea en RDSI";
 choices[81][2] = "Permite realizar llamadas, pero no intercambiar informaci&oacute;n de usuario.";
 choices[81][3] = "Ninguna de las respuestas es correcta.";
 answers[81] = choices[81][0];
 units[81] = "103";
 comments[81] = "Id Pregunta: 9353. Pruebas selectivas Ingeniero de Telecomunicaci&oacute;n Ayto de Madrid 2010";


//  Id pregunta: 9364 AÃ±o de creación de pregunta: 2013-01-01
 questions[82]= "83)  Una red Ethernet que sigue la especificaci&oacute;n 10GBASE-ER:";
 choices[82]= new Array();
 choices[82][0] = "Funciona sobre par de cobre.";
 choices[82][1] = "Funciona con fibra &oacute;ptica que opera en primera ventana.";
 choices[82][2] = "Funciona con fibra &oacute;ptica que opera en tercera ventana.";
 choices[82][3] = "Utiliza fibra &oacute;ptica multimodo.";
 answers[82] = choices[82][2];
 units[82] = "101";
 comments[82] = "Id Pregunta: 9364. pag.14 astic 2011";


//  Id pregunta: 9881 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  Se dispone de dos centros de proceso de datos (CPDs) separados una distancia de 80 km entre s&iacute;. En ambos CPDs se dispone de cabinas de almacenamiento SAN (Storage Area Network) que conforman un cluster geogr&aacute;fico entre s&iacute;. &iquest;Qu&eacute; tecnolog&iacute;a utilizar&iacute;a para unir ambas cabinas?";
 choices[83]= new Array();
 choices[83][0] = "CWDM, Coarse Wavelength Division Multiplexing.";
 choices[83][1] = "DWDM, Dense Wavelength Division Multiplexing.";
 choices[83][2] = "EWDM, Enhanced Wavelength Division Multiplexing.";
 choices[83][3] = "FWDM, Far Wavelength Division Multiplexing.";
 answers[83] = choices[83][1];
 units[83] = "99, 102";
 comments[83] = "Id Pregunta: 9881. TIC A1, Examen 2013";


//  Id pregunta: 10032 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  Si tenemos la siguiente direcci&oacute;n de broadcast 95.26.35.159, indicar a qu&eacute; subred pertenece.";
 choices[84]= new Array();
 choices[84][0] = "95.26.35.144/30 ";
 choices[84][1] = "95.26.35.144/29";
 choices[84][2] = "95.26.35.128/27 ";
 choices[84][3] = "95.26.35.128/25";
 answers[84] = choices[84][2];
 units[84] = "100";
 comments[84] = "Id Pregunta: 10032. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10064 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  En MPLS, la asignaci&oacute;n de un paquete a un FEC (Forwarding Equivalence Class) tiene lugar:";
 choices[85]= new Array();
 choices[85][0] = "S&oacute;lo una vez, cuando el paquete entra en la red MPLS.";
 choices[85][1] = "Antes de entrar en la red MPLS, en el &uacute;ltimo router convencional conectado antes del primer nodo MPLS.";
 choices[85][2] = "Al iniciar una conexi&oacute;n de red, negociando el host de origen con el primer nodo MPLS el FEC a usar.";
 choices[85][3] = "Cuando el primer paquete abandona la red MPLS, y se ha podido descubrir la ruta por medios convencionales.";
 answers[85] = choices[85][0];
 units[85] = "100";
 comments[85] = "Id Pregunta: 10064. TIC A2, libre, examen 2013";


//  Id pregunta: 10123 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Cu&aacute;l de los siguientes es un protocolo de encaminamiento externo:";
 choices[86]= new Array();
 choices[86][0] = "RIP";
 choices[86][1] = "OSPF";
 choices[86][2] = "BGP";
 choices[86][3] = "ISIS";
 answers[86] = choices[86][2];
 units[86] = "102";
 comments[86] = "Id Pregunta: 10123. ";


//  Id pregunta: 10129 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  Las siglas CMOT significan:";
 choices[87]= new Array();
 choices[87][0] = "Complex Management Over TCP";
 choices[87][1] = "Common Management Over TCP/IP";
 choices[87][2] = "Complex Management Over TCP/IP";
 choices[87][3] = "Complex Management Of Telecomucation";
 answers[87] = choices[87][1];
 units[87] = "104";
 comments[87] = "Id Pregunta: 10129. ";


//  Id pregunta: 10131 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  La operaci&oacute;n de SNMP GetBulk est&aacute; disponible desde:";
 choices[88]= new Array();
 choices[88][0] = "SNMPv1";
 choices[88][1] = "SNMPv2";
 choices[88][2] = "SNMPv3";
 choices[88][3] = "SNMPv4";
 answers[88] = choices[88][1];
 units[88] = "104";
 comments[88] = "Id Pregunta: 10131. ";


//  Id pregunta: 10668 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  &iquest;Qu&eacute; tipo de m&eacute;todo de acceso al medio es aquel en el que todos los nodos compiten por el uso del medio?";
 choices[89]= new Array();
 choices[89][0] = "Por contienda.";
 choices[89][1] = "Por contenci&oacute;n.";
 choices[89][2] = "Por paso de testigo.";
 choices[89][3] = "Por detecci&oacute;n de portadora.";
 answers[89] = choices[89][1];
 units[89] = "101";
 comments[89] = "Id Pregunta: 10668. ";


//  Id pregunta: 10802 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  &iquest;Cu&aacute;l de las siguientes respuestas NO se considera una de las cuatro primitivas de servicio que define el modelo OSI de ISO para la comunicaci&oacute;n entre niveles?";
 choices[90]= new Array();
 choices[90][0] = "Request.";
 choices[90][1] = "Invoke.";
 choices[90][2] = "Response.";
 choices[90][3] = "Confirmation.";
 answers[90] = choices[90][1];
 units[90] = "100";
 comments[90] = "Id Pregunta: 10802. Examen GSI 2014";


//  Id pregunta: 10893 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es correcta en relaci&oacute;n a la MTU (Maximum Transfer Unit) en redes IP, la MTU del camino es el valor de la:";
 choices[91]= new Array();
 choices[91][0] = "suma de todas las MTU entre el receptor y el emisor.";
 choices[91][1] = "media aritm&eacute;tica de todas las MTU entre el receptor y el emisor.";
 choices[91][2] = "MTU m&aacute;s baja de todos los enlaces a lo largo del camino entre nodos receptor y emisor.";
 choices[91][3] = "MTU m&aacute;s alta de todos los enlaces a lo largo del camino entre nodos receptor y emisor.";
 answers[91] = choices[91][2];
 units[91] = "100";
 comments[91] = "Id Pregunta: 10893. Examen GSI 2014";


//  Id pregunta: 11327 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  En MPLS, c&oacute;mo se llama el router que no es de frontera";
 choices[92]= new Array();
 choices[92][0] = "LSR";
 choices[92][1] = "LER";
 choices[92][2] = "LSP";
 choices[92][3] = "FEC";
 answers[92] = choices[92][0];
 units[92] = "100";
 comments[92] = "Id Pregunta: 11327. ";


//  Id pregunta: 11354 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  En cuanto a la segmentaci&oacute;n de dominios en una red se&ntilde;ale la verdadera";
 choices[93]= new Array();
 choices[93][0] = "Un switch segmenta dominios de colisi&oacute;n y de broadcast";
 choices[93][1] = "En una VLAN, un switch segmenta dominios de colisi&oacute;n de manera f&iacute;sica y de broadcast de manera l&oacute;gica";
 choices[93][2] = "Un router segmenta dominios de broadcast de manera f&iacute;sica";
 choices[93][3] = "En una VLAN, un switch segmenta dominios de colisi&oacute;n y de broadcast de manera f&iacute;sica";
 answers[93] = choices[93][2];
 units[93] = "102";
 comments[93] = "Id Pregunta: 11354. ";


//  Id pregunta: 11562 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Qu&eacute; es XFP?";
 choices[94]= new Array();
 choices[94][0] = "Puerto de conexi&oacute;n de alta velocidad con par trenzado.";
 choices[94][1] = "Puerto de conexi&oacute;n de alta velocidad de fibra &oacute;ptica.";
 choices[94][2] = "Puerto de conexi&oacute;n de alta velocidad de cable coaxial.";
 choices[94][3] = "Puerto de conexi&oacute;n de alta velocidad con capacidad para emplear distintos medios de transmisi&oacute;n.";
 answers[94] = choices[94][1];
 units[94] = "99";
 comments[94] = "Id Pregunta: 11562. NULL";


//  Id pregunta: 11689 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Un cable RJ-45 cruzado se forma:";
 choices[95]= new Array();
 choices[95][0] = "conectando los pines 1 al 3 y el 2 al 6";
 choices[95][1] = "conectando los pines 1 al 8 el y el 2 al 7";
 choices[95][2] = "conectando los pines 1 al 3 y el 2 al 4";
 choices[95][3] = "conectando el pin 1 al pin 1 y el pin 2 al pin 2";
 answers[95] = choices[95][0];
 units[95] = "99";
 comments[95] = "Id Pregunta: 11689. NULL";


//  Id pregunta: 11695 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Los mensajes intercambiados entre Bridges en STP se denominan:";
 choices[96]= new Array();
 choices[96][0] = "PDUs";
 choices[96][1] = "PDIs";
 choices[96][2] = "BPDU";
 choices[96][3] = "SPDU";
 answers[96] = choices[96][2];
 units[96] = "102";
 comments[96] = "Id Pregunta: 11695. NULL";


//  Id pregunta: 11711 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Cu&aacute;l de las siguientes afirmaciones es verdadera acerca de las VLANs?";
 choices[97]= new Array();
 choices[97][0] = "Se deben tener al menos dos VLANs definidas en cada red conmutada ";
 choices[97][1] = "Se deben tener al menos tres VLANs definidas en cada red conmutada ";
 choices[97][2] = "No deber&iacute;an tenerse m&aacute;s de 3 switches en cada red conmutada";
 choices[97][3] = "Actuan a nivel 2 del modelo OSI";
 answers[97] = choices[97][3];
 units[97] = "102";
 comments[97] = "Id Pregunta: 11711. NULL";


//  Id pregunta: 11736 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  El rango de direcciones 10.0.0.0/8";
 choices[98]= new Array();
 choices[98][0] = "Es un rango de direcciones de clase C.";
 choices[98][1] = "Es un rango de direcci&oacute;n p&uacute;blicas.";
 choices[98][2] = "Es un rango de direcciones privadas.";
 choices[98][3] = "Es un rango de direcciones &ldquo;multicast&rdquo;.";
 answers[98] = choices[98][2];
 units[98] = "99";
 comments[98] = "Id Pregunta: 11736. ";


//  Id pregunta: 11740 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Cuando aumenta el n&uacute;mero de colisiones en una red LAN porque se ha aumentado el tr&aacute;fico en la misma, &iquest;qu&eacute; es necesario aplicar?:";
 choices[99]= new Array();
 choices[99][0] = "Segmentaci&oacute;n de la LAN";
 choices[99][1] = "Cambio de forma de conexi&oacute;n";
 choices[99][2] = "Cambio de troncal";
 choices[99][3] = "Cambio de Sistema de cableado estructurado";
 answers[99] = choices[99][0];
 units[99] = "99";
 comments[99] = "Id Pregunta: 11740. ";


