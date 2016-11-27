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

//  Id pregunta: 1109 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  En la multiplexaci&oacute;n por divisi&oacute;n en frecuencia, &iquest;cu&aacute;l de estas afirmaciones es correcta?";
 choices[0]= new Array();
 choices[0][0] = "Las se&ntilde;ales a enviar usan todo el ancho de banda disponible.";
 choices[0][1] = "Las se&ntilde;ales a enviar s&oacute;lo usan el ancho de banda asignado.";
 choices[0][2] = "Las se&ntilde;ales se env&iacute;an s&oacute;lo en el tiempo asignado por todo ancho de banda.";
 choices[0][3] = "Las se&ntilde;ales se env&iacute;an s&oacute;lo en el tiempo asignado por el ancho de banda asignado.";
 answers[0] = choices[0][1];
 units[0] = "107.108";
 comments[0] = "Id Pregunta: 1109. NULL";


//  Id pregunta: 2914 AÃ±o de creación de pregunta: 2003-01-01
 questions[1]= "2)  En una red MPLS, &iquest; qu&eacute; funci&oacute;n realiza el LER?";
 choices[1]= new Array();
 choices[1][0] = "Es el elemento que conmuta etiquetas";
 choices[1][1] = "Es el nombre de un circuito virtual MPLS";
 choices[1][2] = "Es el elemento que inicia o termina el t&uacute;nel";
 choices[1][3] = "Es el elemento que conmuta el tr&aacute;fico en funci&oacute;n de las etiquetas";
 answers[1] = choices[1][2];
 units[1] = "100";
 comments[1] = "Id Pregunta: 2914. ITSEC";


//  Id pregunta: 2964 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  De acuerdo con lo previsto en la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, la Comisi&oacute;n Nacional de los Mercados y la Competencia es:";
 choices[2]= new Array();
 choices[2][0] = "Un Organismo Aut&oacute;nomo de los previstos en el art&iacute;culo 42 de la Ley 6/1997, de 14 de abril, de Organizaci&oacute;n y Funcionamiento de la Administraci&oacute;n General de Estado";
 choices[2][1] = "Una Entidad P&uacute;blica Empresarial de las previstas en el art&iacute;culo 54 de la Ley 6/1997, de 14 de abril, de Organizaci&oacute;n y Funcionamiento de la Administraci&oacute;n General de Estado";
 choices[2][2] = "Una Sociedad Estatal de las previstas en la disposici&oacute;n adicional trig&eacute;simo sexta de la Ley 6/1997, de 14 de abril, de Organizaci&oacute;n y Funcionamiento de la Administraci&oacute;n General de Estado";
 choices[2][3] = "Un Organismo p&uacute;blico de los previstos en el apartado 1 de la disposici&oacute;n adicional d&eacute;cima de la Ley 6/1997, de 14 de abril, de Organizaci&oacute;n y Funcionamiento de la Administraci&oacute;n General de Estado";
 answers[2] = choices[2][3];
 units[2] = "110";
 comments[2] = "Id Pregunta: 2964. Examen TIC MAP B 2004.Modificada seg&uacute;n Ley 9/2014";


//  Id pregunta: 2977 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  El subnivel de control de acceso al medio, MAC se encuentra encuadrado dentro del nivel?";
 choices[3]= new Array();
 choices[3][0] = "Enlace";
 choices[3][1] = "F&iacute;sico";
 choices[3][2] = " Red";
 choices[3][3] = " ninguna de las anteriores";
 answers[3] = choices[3][0];
 units[3] = "100";
 comments[3] = "Id Pregunta: 2977. Examen Julio 2003";


//  Id pregunta: 2994 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  Indique la afirmaci&oacute;n falsa. De acuerdo con lo previsto en la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, el servicio universal debe garantizar:";
 choices[4]= new Array();
 choices[4][0] = "La puesta a disposici&oacute;n de los abonados de una gu&iacute;a general de n&uacute;meros de abonados, ya sea impresa o electr&oacute;nica, o ambas, y que se actualice, como m&iacute;nimo, una vez al a&ntilde;o";
 choices[4][1] = "La obtenci&oacute;n por todos los usuarios finales de una conexi&oacute;n a la red telef&oacute;nica p&uacute;blica desde una ubicaci&oacute;n fija as&iacute; como el acceso a la prestaci&oacute;n del servicio telef&oacute;nico disponible al p&uacute;blico debiendo incluir entre otros el acceso funcional a internet.";
 choices[4][2] = "La existencia de una oferta suficiente de tel&eacute;fonos p&uacute;blicos de pago";
 choices[4][3] = "La obtenci&oacute;n por todos los usuarios finales de telefon&iacute;a m&oacute;vil en condiciones de igualdad y no discriminaci&oacute;n, con una calidad determinada que ser&aacute; fijada reglamentariamente y a un precio asequible.";
 answers[4] = choices[4][3];
 units[4] = "110";
 comments[4] = "Id Pregunta: 2994. Examen TIC MAP B 2004";


//  Id pregunta: 3030 AÃ±o de creación de pregunta: 2005-01-01
 questions[5]= "6)  Al instalar un cortafuegos (firewall) para la protecci&oacute;n de un servidor web, a&ntilde;adimos un mecanismo de salvaguarda que incrementa los niveles de:";
 choices[5]= new Array();
 choices[5][0] = "La dimensi&oacute;n de confidencialidad de la informaci&oacute;n";
 choices[5][1] = "La dimensi&oacute;n de disponibilidad de la informaci&oacute;n";
 choices[5][2] = "La dimensi&oacute;n de integridad de la informaci&oacute;n";
 choices[5][3] = "Todas las anteriores";
 answers[5] = choices[5][3];
 units[5] = "111";
 comments[5] = "Id Pregunta: 3030. Magerit V2";


//  Id pregunta: 3031 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  ASP significa:";
 choices[6]= new Array();
 choices[6][0] = "Application Service Provider";
 choices[6][1] = "Active Server Pages";
 choices[6][2] = "Las 2 respuestas anteriores son correctas";
 choices[6][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[6] = choices[6][2];
 units[6] = "114";
 comments[6] = "Id Pregunta: 3031. ";


//  Id pregunta: 3052 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  Bluetooth:";
 choices[7]= new Array();
 choices[7][0] = "Es una tecnolog&iacute;a de enlace radio para redes LAN de peque&ntilde;o alcance";
 choices[7][1] = "Es una tecnolog&iacute;a de enlace de radio para redes PAN";
 choices[7][2] = "Es el resultado de la aplicaci&oacute;n de las &uacute;ltimas t&eacute;cnicas inform&aacute;ticas al mundo de la odontolog&iacute;a";
 choices[7][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[7] = choices[7][1];
 units[7] = "107";
 comments[7] = "Id Pregunta: 3052. NULL";


//  Id pregunta: 3065 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  En un sistema de alimentaci&oacute;n ininterrumpida, a qu&eacute; se denomina 'red de reserva':";
 choices[8]= new Array();
 choices[8][0] = "A la suministrada por la compa&ntilde;ia el&eacute;ctrica";
 choices[8][1] = "A la que suministra el ondulador (inversor) a la carga";
 choices[8][2] = "A la carga remanente en las bater&iacute;as";
 choices[8][3] = "A la que entrega el rectificador";
 answers[8] = choices[8][0];
 units[8] = "111";
 comments[8] = "Id Pregunta: 3065. NULL";


//  Id pregunta: 3087 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  Se dice que una l&iacute;nea es 'full duplex' cuando:";
 choices[9]= new Array();
 choices[9][0] = "Los terminales de datos de ambos extremos de la l&iacute;nea, tiene que usarla de forma alternativa en cada sentido de transmisi&oacute;n";
 choices[9][1] = "Los terminales de datos de ambos extremos de la l&iacute;nea, pueden transmitir simult&aacute;neamente sin restricciones";
 choices[9][2] = "Los terminales de datos de ambos extremos de la l&iacute;nea utilizan una se&ntilde;alizaci&oacute;n especial para cambiar el sentido de transmisi&oacute;n del canal";
 choices[9][3] = "Los terminales de datos de ambos extremos de la l&iacute;nea, son se&ntilde;alizados por la red para poder comenzar su turno de transmisi&oacute;n";
 answers[9] = choices[9][1];
 units[9] = "99";
 comments[9] = "Id Pregunta: 3087. ";


//  Id pregunta: 3150 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto de la seguridad en el correo electr&oacute;nico?:";
 choices[10]= new Array();
 choices[10][0] = "Los usuarios MOSS y PEM necesitan certificados X.509";
 choices[10][1] = "PEM requiere que primero se firme el contenido del correo electr&oacute;nico y, a continuaci&oacute;n, se encripte";
 choices[10][2] = "PEM restringe su uso al entorno texto";
 choices[10][3] = "La extension de PEM con MIME se denomina MOSS";
 answers[10] = choices[10][0];
 units[10] = "106";
 comments[10] = "Id Pregunta: 3150. ";


//  Id pregunta: 3160 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Cu&aacute;l de las siguientes afirmaciones respecto de los protocolos de gesti&oacute;n de red SNMP y CMIP/CMIS no es cierta?:";
 choices[11]= new Array();
 choices[11][0] = "CMIS/CMIP soporta una arquitectura de objetos (entidades gestionables) m&aacute;s complejos que SNMP";
 choices[11][1] = "CMIS/CMIP contiene las especificaciones para el uso de protocolos SNMP sobre redes OSI mediante la norma CMOT";
 choices[11][2] = "Las aplicaciones de gesti&oacute;n de red basadas en protocolos SNMP est&aacute;n mucho m&aacute;s extendidas en el mercado que las basadas en CMIP";
 choices[11][3] = "CMIS/CMIP es desarrollo conjunto de CCITT e ISO, mientras que SNMP es producto de IETF";
 answers[11] = choices[11][1];
 units[11] = "104";
 comments[11] = "Id Pregunta: 3160. ";


//  Id pregunta: 3180 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  &iquest;Cu&aacute;l de las siguientes respuestas define el formato de la trama en Ethernet V2?:";
 choices[12]= new Array();
 choices[12][0] = "CRC, longitud trama, direcci&oacute;n origen, direcci&oacute;n destino, datos";
 choices[12][1] = "Pre&aacute;mbulo, tipo trama, direcci&oacute;n origen, direcci&oacute;n destino, datos y CRC";
 choices[12][2] = "Pre&aacute;mbulo, direcci&oacute;n destino, direcci&oacute;n origen, tipo trama, datos y CRC";
 choices[12][3] = "Pre&aacute;mbulo, direcci&oacute;n origen, direcci&oacute;n destino, longitud trama, datos y CRC";
 answers[12] = choices[12][2];
 units[12] = "100";
 comments[12] = "Id Pregunta: 3180. NULL";


//  Id pregunta: 3181 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  &iquest;Cu&aacute;l de las siguientes respuestas es falsa respecto a los medios f&iacute;sicos de transmisi&oacute;n de informaci&oacute;n?:";
 choices[13]= new Array();
 choices[13][0] = "Con cableado de par trenzado se pueden alcanzar varios megabits por segundo";
 choices[13][1] = "El cable coaxial se utiliza para redes de &aacute;rea local";
 choices[13][2] = "La fibra &oacute;ptica monomodo es m&aacute;s barata que la fibra &oacute;ptica multimodo";
 choices[13][3] = "La propagaci&oacute;n de las microondas se ve afectada por los fen&oacute;menos atmosf&eacute;ricos";
 answers[13] = choices[13][2];
 units[13] = "99";
 comments[13] = "Id Pregunta: 3181. NULL";


//  Id pregunta: 3200 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  El acceso b&aacute;sico en RDSI:";
 choices[14]= new Array();
 choices[14][0] = "Es utilizado exclusivamente por un &uacute;nico terminal";
 choices[14][1] = "Puede ser compartido hasta por un m&aacute;ximo de diecis&eacute;is terminales";
 choices[14][2] = "Puede ser compartido hasta por un m&aacute;ximo de ocho terminales";
 choices[14][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[14] = choices[14][2];
 units[14] = "103";
 comments[14] = "Id Pregunta: 3200. ";


//  Id pregunta: 3218 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  El est&aacute;ndar IEEE que suministra una descripci&oacute;n de los procedimientos del protocolo a nivel de enlace en una red de &aacute;rea local para la transferencia de datos y su control entre cualquier pareja de puntos de acceso al servicio es:";
 choices[15]= new Array();
 choices[15][0] = "802.1";
 choices[15][1] = "802.2";
 choices[15][2] = "802.10";
 choices[15][3] = "802.12";
 answers[15] = choices[15][1];
 units[15] = "100";
 comments[15] = "Id Pregunta: 3218. NULL";


//  Id pregunta: 3224 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  &iquest;Cu&aacute;l de los siguientes no debe ser un requisito de los sistemas de cableado?:";
 choices[16]= new Array();
 choices[16][0] = "Alto grado de flexibilidad";
 choices[16][1] = "M&iacute;nimas interrupciones";
 choices[16][2] = "Bajo costo en tiempo de diagn&oacute;stico y reparaci&oacute;n";
 choices[16][3] = "Eliminaci&oacute;n de las tecnolog&iacute;as obsoletas";
 answers[16] = choices[16][3];
 units[16] = "97";
 comments[16] = "Id Pregunta: 3224. NULL";


//  Id pregunta: 3272 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  &iquest;Entre que dos dispositivos se utiliza el NNI (network node interface)?:";
 choices[17]= new Array();
 choices[17][0] = "Dos switches ATM";
 choices[17][1] = "Dos sistemas finales ATM";
 choices[17][2] = "Un DSU/CSU y un router";
 choices[17][3] = "Un sistema final ATM y un switch";
 answers[17] = choices[17][0];
 units[17] = "109";
 comments[17] = "Id Pregunta: 3272. ";


//  Id pregunta: 3277 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  &iquest;Qu&eacute; ancho de banda tiene un acceso b&aacute;sico de RDSI en Europa?:";
 choices[18]= new Array();
 choices[18][0] = "64 kbps";
 choices[18][1] = "144 kbps";
 choices[18][2] = "128 kbps";
 choices[18][3] = "2048 kbps";
 answers[18] = choices[18][1];
 units[18] = "103";
 comments[18] = "Id Pregunta: 3277. ";


//  Id pregunta: 3328 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  A las huellas del cliente que permiten implementar aspectos de autenticaci&oacute;n, preferencias, gesti&oacute;n del estado en HTTP se les denomina:";
 choices[19]= new Array();
 choices[19][0] = "applet";
 choices[19][1] = "cookie";
 choices[19][2] = "socket";
 choices[19][3] = "control activeX";
 answers[19] = choices[19][1];
 units[19] = "113";
 comments[19] = "Id Pregunta: 3328. ";


//  Id pregunta: 3333 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Bajo el protocolo PEM:";
 choices[20]= new Array();
 choices[20][0] = "Se distinguen 3 tipos de mensajes";
 choices[20][1] = "Un mensaje MIC-CLEAR soporta confidencialidad";
 choices[20][2] = "Un mensaje MIC-Only solo envia la cabecera";
 choices[20][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[20] = choices[20][0];
 units[20] = "106";
 comments[20] = "Id Pregunta: 3333. ";


//  Id pregunta: 3346 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  CTI es:";
 choices[21]= new Array();
 choices[21][0] = "Computer Telephony Integration, el uso conjunto de telefon&iacute;a y ordenadores en el funcionamiento de un centro de atenci&oacute;n de llamadas";
 choices[21][1] = "el conjunto formado por la intranet, los tel&eacute;fonos de los puestos de ofim&aacute;tica y los ordenadores de los usuarios";
 choices[21][2] = "las siglas del Comit&eacute; para las Telecomunicaciones y la Innovaci&oacute;n, organismo sin &aacute;nimo de lucro encargado de observar las tendencias tecnol&oacute;gicas en telecomunicaciones y su aplicaci&oacute;n a los proyectos de la Administraci&oacute;n del Estado";
 choices[21][3] = "nada de lo anterior";
 answers[21] = choices[21][0];
 units[21] = "108";
 comments[21] = "Id Pregunta: 3346. ";


//  Id pregunta: 3516 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  En el servicio de telefon&iacute;a celular se utiliza el concepto de celda indicando:";
 choices[22]= new Array();
 choices[22][0] = "Zona de cobertura del terminal";
 choices[22][1] = "Distancia m&aacute;xima del terminal a la estaci&oacute;n repetidora";
 choices[22][2] = "Distancia m&iacute;nima entre estaciones repetidoras";
 choices[22][3] = "Zona de cobertura de una estaci&oacute;n base";
 answers[22] = choices[22][3];
 units[22] = "108";
 comments[22] = "Id Pregunta: 3516. ";


//  Id pregunta: 3521 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  En Frame Relay FECN y BECN son:";
 choices[23]= new Array();
 choices[23][0] = "Mecanismos de control de errores";
 choices[23][1] = "Mecanismos de notificaci&oacute;n de congesti&oacute;n en la red";
 choices[23][2] = "Mecanismos de control de flujo";
 choices[23][3] = "Mecanismos de 'keepalive' (saber los nodos activos)";
 answers[23] = choices[23][1];
 units[23] = "109";
 comments[23] = "Id Pregunta: 3521. ";


//  Id pregunta: 3529 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  En la Red Digital de Servicios Integrados (RDSI), un acceso b&aacute;sico permite:    ";
 choices[24]= new Array();
 choices[24][0] = "Obligatoriamente un canal de voz, otro de datos y un tercero de se&ntilde;alizaci&oacute;n";
 choices[24][1] = "Tres conversaciones telef&oacute;nicas simult&aacute;neas";
 choices[24][2] = "Dos conversaciones telef&oacute;nicas simult&aacute;neas";
 choices[24][3] = "Un canal de datos y dos canales de v&iacute;deo";
 answers[24] = choices[24][2];
 units[24] = "103";
 comments[24] = "Id Pregunta: 3529. ";


//  Id pregunta: 3530 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  En la Red Digital de Servicios Integrados, indique cu&aacute;l de las siguientes afirmaciones no es correcta:";
 choices[25]= new Array();
 choices[25][0] = "Existen definidos 2 tipos de acceso: b&aacute;sico y primario";
 choices[25][1] = "El acceso primario est&aacute; constituido por 30 canales B de 64 kbps y 1 canal D de 16 kbps";
 choices[25][2] = "Es posible la conexi&oacute;n a la RDSI a trav&eacute;s de un modem m&aacute;s un adaptador anal&oacute;gico-digital";
 choices[25][3] = "Proporciona conexiones digitales extremo a extremo";
 answers[25] = choices[25][1];
 units[25] = "103";
 comments[25] = "Id Pregunta: 3530. ";


//  Id pregunta: 3587 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  La aplicaci&oacute;n 'traceroute' basada en ICMP:";
 choices[26]= new Array();
 choices[26][0] = "permite conocer si un sistema est&aacute; accesible";
 choices[26][1] = "permite establecer la ruta a seguir por un conjunto de datagramas IP";
 choices[26][2] = "permite conocer la ruta seguida por un datagrama IP";
 choices[26][3] = "permite obtener un mapa de la red utilizada";
 answers[26] = choices[26][2];
 units[26] = "100";
 comments[26] = "Id Pregunta: 3587. NULL";


//  Id pregunta: 3593 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  La conocida RFC 793 se corresponde con:";
 choices[27]= new Array();
 choices[27][0] = "el protocolo TCP";
 choices[27][1] = "la arquitectura TCP/IP";
 choices[27][2] = "el protocolo IP";
 choices[27][3] = "el protocolo SMTP";
 answers[27] = choices[27][0];
 units[27] = "100";
 comments[27] = "Id Pregunta: 3593. NULL";


//  Id pregunta: 3594 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  La diferencia entre protocolo e interfaz seg&uacute;n OSI es:";
 choices[28]= new Array();
 choices[28][0] = "entre otras, un protocolo se refiere a entidades de distintos niveles y un interfaz a entidades del mismo nivel";
 choices[28][1] = "ambos conceptos se refieren a entidades de distintos niveles";
 choices[28][2] = "ambos conceptos se refieren a entidades del mismo nivel";
 choices[28][3] = "entre otras, un protocolo se refiere a entidades del mismo nivel y un interfaz a entidades de distintos niveles";
 answers[28] = choices[28][3];
 units[28] = "100";
 comments[28] = "Id Pregunta: 3594. NULL";


//  Id pregunta: 3660 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  Un LED es:";
 choices[29]= new Array();
 choices[29][0] = "Un diodo emisor de luz, usado para generar luz a partir de energ&iacute;a el&eacute;ctrica, a menudo a modo de peque&ntilde;os pilotos de aviso";
 choices[29][1] = "Un tipo de vocoder que permite una generaci&oacute;n progresiva de la voz humana";
 choices[29][2] = "Un m&eacute;todo de gesti&oacute;n de proyectos espec&iacute;ficos de I+D con todas las particularidades que estos conllevan";
 choices[29][3] = "Nada de lo anterior";
 answers[29] = choices[29][0];
 units[29] = "99";
 comments[29] = "Id Pregunta: 3660. ";


//  Id pregunta: 3790 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  Respecto a los cortafuegos de filtrado de paquetes:";
 choices[30]= new Array();
 choices[30][0] = "act&uacute;an como routers inteligentes o screening routers";
 choices[30][1] = "se componen de un conjunto de aplicaciones intermedias, una por servicio";
 choices[30][2] = "desempe&ntilde;an funciones de proxy";
 choices[30][3] = "ninguna de las anteriores respuestas es correcta";
 answers[30] = choices[30][0];
 units[30] = "111";
 comments[30] = "Id Pregunta: 3790. NULL";


//  Id pregunta: 3794 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  Respecto a los est&aacute;ndares de comunicaciones inal&aacute;mbricas:";
 choices[31]= new Array();
 choices[31][0] = "WiFi y HomeRF son compatibles";
 choices[31][1] = "HomeRF est&aacute;, hoy por hoy, m&aacute;s implantada en el mercado asi&aacute;tico que WiFi";
 choices[31][2] = "WiFi responde por Wireless Fidelity";
 choices[31][3] = "Hay 3 tecnolog&iacute;as de despliegue de una red inal&aacute;mbrica: infraestructura, ad hoc, por extensi&oacute;n";
 answers[31] = choices[31][2];
 units[31] = "100";
 comments[31] = "Id Pregunta: 3794. NULL";


//  Id pregunta: 3832 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  Siguiendo la terminolog&iacute;a OSI, se&ntilde;alar qu&eacute; respuesta no se refiere a una de las categor&iacute;as en las que se puede dividir los procesos de aplicaci&oacute;n:";
 choices[32]= new Array();
 choices[32][0] = "Procesos de gesti&oacute;n del sistema";
 choices[32][1] = "Procesos de gesti&oacute;n de las aplicaciones";
 choices[32][2] = "Procesos de gesti&oacute;n del control de flujo";
 choices[32][3] = "Procesos de usuario";
 answers[32] = choices[32][2];
 units[32] = "100";
 comments[32] = "Id Pregunta: 3832. NULL";


//  Id pregunta: 3839 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  Sobre los algoritmos Hash o funci&oacute;n resumen:";
 choices[33]= new Array();
 choices[33][0] = "Todos tienen una clave de longitud de 160 bits";
 choices[33][1] = "La longitud de la clave depender&aacute; del algoritmo utilizado";
 choices[33][2] = "Es imposible que la longitud de la clave sea menos de 160";
 choices[33][3] = "Da igual la longitud de clave";
 answers[33] = choices[33][1];
 units[33] = "111";
 comments[33] = "Id Pregunta: 3839. NULL";


//  Id pregunta: 3840 AÃ±o de creación de pregunta: 2002-01-01
 questions[34]= "35)  Sobre los sistemas de gesti&oacute;n de red (NMS - &ldquo;Network Management Systems&rdquo;), indique cual de las siguientes afirmaciones es err&oacute;nea:";
 choices[34]= new Array();
 choices[34][0] = "La mayor&iacute;a de los sistemas de gesti&oacute;n de red utilizan la misma estructura: Los dispositivos en red ejecutan un software (agente de gesti&oacute;n de red) que les permite transmitir alarmas ante la aparici&oacute;n de un problema hacia una estaci&oacute;n de gesti&oacute;n de red.";
 choices[34][1] = "Entre los protocolos de gesti&oacute;n de red mas utilizados se encuentra SNMP (&ldquo;Simple Network Management Protocol&rdquo;) est&aacute;ndar ISO/OSI, y CMIP (&ldquo;Common Management Information Protocol&rdquo;) que forma parte de la familia de protocolos TCP/IP";
 choices[34][2] = "Los agentes de gesti&oacute;n de red son m&oacute;dulos de software que compilan informaci&oacute;n sobre los dispositivos de red en los que residen en una base de datos de estructura jer&aacute;rquica denominada MIB (&ldquo;Management Information Base&rdquo;). ";
 choices[34][3] = "El modelo de sistema de gesti&oacute;n de red de ISO se compone de cinco &aacute;reas conceptuales: Gesti&oacute;n de prestaciones, gesti&oacute;n de configuraci&oacute;n, gesti&oacute;n contable, gesti&oacute;n de fallos y gesti&oacute;n de seguridad";
 answers[34] = choices[34][1];
 units[34] = "104";
 comments[34] = "Id Pregunta: 3840. ";


//  Id pregunta: 3869 AÃ±o de creación de pregunta: 2003-01-01
 questions[35]= "36)  &iquest;C&uacute;al de las siguientes afirmaciones sobre el virus Blaster es correcta?";
 choices[35]= new Array();
 choices[35][0] = "Es un gusano que inspecciona la agenda de direcciones y env&iacute;a un mensaje replicado a todas ellas";
 choices[35][1] = "Es un gusano que usa una vulnerabilidad de Windows por la que el atacante puede tener permisos de ejecuci&oacute;n locales";
 choices[35][2] = "Es un gusano que se propaga a trav&eacute;s del correo electr&oacute;nico en un mensaje escrito en ingl&eacute;s de caracter&iacute;sticas variables, as&iacute; como a trav&eacute;s de los programas de intercambio de ficheros punto a punto ";
 choices[35][3] = "Es un gusano que busca en todas las unidades de disco direcciones de correo electr&oacute;nico y se autoenv&iacute;a a ellas utilizando su propio motor SMTP";
 answers[35] = choices[35][1];
 units[35] = "111";
 comments[35] = "Id Pregunta: 3869. NULL";


//  Id pregunta: 3880 AÃ±o de creación de pregunta: 2003-01-01
 questions[36]= "37)  &iquest;Cu&aacute;les de las siguientes tecnolog&iacute;as de acceso al medio se utiliza en UMTS?";
 choices[36]= new Array();
 choices[36][0] = "TDMA ";
 choices[36][1] = "FDMA";
 choices[36][2] = "CDMA";
 choices[36][3] = "Puede usar aualquiera de las tres anteriores";
 answers[36] = choices[36][2];
 units[36] = "108";
 comments[36] = "Id Pregunta: 3880. ";


//  Id pregunta: 3905 AÃ±o de creación de pregunta: 2003-01-01
 questions[37]= "38)  Sobre el est&aacute;ndar IEEE 802.20 se puede afirmar que:";
 choices[37]= new Array();
 choices[37][0] = "No existe a&uacute;n ese est&aacute;ndar";
 choices[37][1] = "Es el est&aacute;ndar relativo a redes inal&aacute;mbricas metropolitanas de banda ancha ";
 choices[37][2] = "Es el est&aacute;ndar de acesso inal&aacute;mbrico m&oacute;vil de banda ancha";
 choices[37][3] = "Nada de lo anterior es cierto";
 answers[37] = choices[37][2];
 units[37] = "107";
 comments[37] = "Id Pregunta: 3905. NULL";


//  Id pregunta: 3917 AÃ±o de creación de pregunta: 2003-01-01
 questions[38]= "39)  El m&iacute;nimo espacio de almacenamiento posible y el m&eacute;todo de copia de seguridad m&aacute;s r&aacute;pido se alcanzan:";
 choices[38]= new Array();
 choices[38][0] = "Usando una combinaci&oacute;n de copias de seguridad normales e incrementales.";
 choices[38][1] = "Usando una combinaci&oacute;n de copias de seguridad normales y diferenciales.";
 choices[38][2] = "Al crear por primera vez un conjunto de copia.";
 choices[38][3] = "Nunca pueden alcanzarse ambos a la vez.";
 answers[38] = choices[38][0];
 units[38] = "97";
 comments[38] = "Id Pregunta: 3917. NULL";


//  Id pregunta: 3964 AÃ±o de creación de pregunta: 2003-01-01
 questions[39]= "40)  Registro basado en XML para listar servicios Web que se ponen a disposici&oacute;n de otros";
 choices[39]= new Array();
 choices[39][0] = " UDDI";
 choices[39][1] = "WSDL";
 choices[39][2] = " SOAP";
 choices[39][3] = " JAXP";
 answers[39] = choices[39][0];
 units[39] = "69";
 comments[39] = "Id Pregunta: 3964. NULL";


//  Id pregunta: 3974 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  &iquest;Cu&aacute;l de los siguientes productos o marcas comerciales  esta relacionado con un Buscador / Indexador?";
 choices[40]= new Array();
 choices[40][0] = "Verity";
 choices[40][1] = "Lucene";
 choices[40][2] = "Los dos anteriores";
 choices[40][3] = "Ninguno de los anteriores";
 answers[40] = choices[40][2];
 units[40] = "112";
 comments[40] = "Id Pregunta: 3974. ";


//  Id pregunta: 3979 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  &iquest;Cu&aacute;l de las siguientes afirmaciones es verdadera?";
 choices[41]= new Array();
 choices[41][0] = "Cable de Categor&iacute;a 4 (seg&uacute;n EIA/TIA)  que permite obtener velocidades de transmisi&oacute;n de 2 Mbit/s con distancias de 100 metros.";
 choices[41][1] = "Cable de Categor&iacute;a 5 (seg&uacute;n EIA/TIA) que permite obtener velocidades de transmisi&oacute;n de 10 Mbit/s con distancias de 100 metros.";
 choices[41][2] = "Las especificaciones de la EIA/TIA-569 y las del SYSTIMAX IBS establecen la necesidad de al menos dos armarios de distribuci&oacute;n por planta para hasta 1000 metros cuadrados.";
 choices[41][3] = "El cableado horizontal debe emplear una topolog&iacute;a en estrella con una longitud m&aacute;xima de 90 metros (entre armario y roseta).";
 answers[41] = choices[41][3];
 units[41] = "99";
 comments[41] = "Id Pregunta: 3979. ";


//  Id pregunta: 3989 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  La t&eacute;cnica NAT no permite:";
 choices[42]= new Array();
 choices[42][0] = "Implementar una pasarela FTP.";
 choices[42][1] = "Optimizar el uso de direccionamiento IP p&uacute;blico.";
 choices[42][2] = "Aislar el espacio de direccionamiento p&uacute;blico del privado.";
 choices[42][3] = "Asignar direcciones din&aacute;micas para acceso a Internet.";
 answers[42] = choices[42][0];
 units[42] = "102";
 comments[42] = "Id Pregunta: 3989. ";


//  Id pregunta: 4061 AÃ±o de creación de pregunta: 2006-01-01
 questions[43]= "44)  El puerto reservado para el protocolo SMTP es";
 choices[43]= new Array();
 choices[43][0] = "80";
 choices[43][1] = "25";
 choices[43][2] = "110";
 choices[43][3] = "69";
 answers[43] = choices[43][1];
 units[43] = "112";
 comments[43] = "Id Pregunta: 4061. ";


//  Id pregunta: 4071 AÃ±o de creación de pregunta: 2006-01-01
 questions[44]= "45)  &iquest;Cu&aacute;l de las siguientes categorias de software no estan incluidas tipicamente en un ERP ?";
 choices[44]= new Array();
 choices[44][0] = "Gesti&oacute;n de Nomina";
 choices[44][1] = "Gesti&oacute;n de RRHH";
 choices[44][2] = "Gesti&oacute;n de Contabilidad";
 choices[44][3] = "Gesti&oacute;n de Clientes";
 answers[44] = choices[44][3];
 units[44] = "65";
 comments[44] = "Id Pregunta: 4071. ";


//  Id pregunta: 4208 AÃ±o de creación de pregunta: 2006-01-01
 questions[45]= "46)  Los formatos de im&aacute;genes admitidos por los navegadores Internet Explorer 6.0, Netscape 8.0 y Opera 8.0, son:";
 choices[45]= new Array();
 choices[45][0] = "jpeg, tiff y spp";
 choices[45][1] = "jpeg, spp y psd";
 choices[45][2] = "jpeg, spp y tiff";
 choices[45][3] = "jpeg, gif y png";
 answers[45] = choices[45][3];
 units[45] = "114";
 comments[45] = "Id Pregunta: 4208. ";


//  Id pregunta: 4494 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  El protocolo L2TP es com&uacute;nmente utilizado por las VPN (Redes Privadas Virtuales) para:";
 choices[46]= new Array();
 choices[46][0] = "Efectuar el proceso de encriptado de los datos transmitidos a trav&eacute;s de Ia red publica.";
 choices[46][1] = "Efectuar Ia autentificaci&oacute;n de los usuarios.";
 choices[46][2] = "Crear t&uacute;neles de nivel OSI 2 que encapsulan los datagramas IP transmitidos a trav&eacute;s de Ia red publica.";
 choices[46][3] = "Filtrar los datos recibidos por cada usuario.";
 answers[46] = choices[46][2];
 units[46] = "111";
 comments[46] = "Id Pregunta: 4494. NULL";


//  Id pregunta: 4595 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  Seg&uacute;n se indica en el Real Decreto 944/2005 cual es el porcentaje m&aacute;ximo del total de Ia capacidad de transmisi&oacute;n del multiple digital que se podr&aacute; utilizar para prestar servicios adicionales distintos del de difusi&oacute;n de televisi&oacute;n:";
 choices[47]= new Array();
 choices[47][0] = "20%";
 choices[47][1] = "40%";
 choices[47][2] = "50%";
 choices[47][3] = "60%";
 answers[47] = choices[47][0];
 units[47] = "110";
 comments[47] = "Id Pregunta: 4595. ";


//  Id pregunta: 4596 AÃ±o de creación de pregunta: 2007-01-01
 questions[48]= "49)  Cuando un m&oacute;vil se enciende y no encuentra una estaci&oacute;n base de Ia red a la que pertenece";
 choices[48]= new Array();
 choices[48][0] = "se registra en el HLR (Home Location Register) de Ia red a la que accede";
 choices[48][1] = "se registra en el VLR (Visitors Location Register) de Ia red a la que pertenece";
 choices[48][2] = "se registra en el VLR (Visitors Location Register) de Ia red a la que accede";
 choices[48][3] = "no se registra en ninguna red";
 answers[48] = choices[48][2];
 units[48] = "108";
 comments[48] = "Id Pregunta: 4596. ";


//  Id pregunta: 4978 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  Cu&aacute;l de las siguientes tecnolog&iacute;as xDSL proporciona mayor velocidad m&aacute;xima te&oacute;rica para la descarga deinformaci&oacute;n:";
 choices[49]= new Array();
 choices[49][0] = "ADSL2+.";
 choices[49][1] = "VDSL.";
 choices[49][2] = "SDSL.";
 choices[49][3] = "HDSL.";
 answers[49] = choices[49][1];
 units[49] = "107";
 comments[49] = "Id Pregunta: 4978. Examen TIC B 2007";


//  Id pregunta: 5161 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  &iquest;Cu&aacute;ntos canales telef&oacute;nicos de voz (tipo B) soporta el Acceso RDSI Primario?";
 choices[50]= new Array();
 choices[50][0] = "2";
 choices[50][1] = "30";
 choices[50][2] = "24";
 choices[50][3] = "120";
 answers[50] = choices[50][1];
 units[50] = "103";
 comments[50] = "Id Pregunta: 5161. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5273 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  La utilizaci&oacute;n de caracteres ajenos al alfabeto anglosaj&oacute;n en un nombre de dominio dentro de una red TCP/IP";
 choices[51]= new Array();
 choices[51][0] = "no es posible nunca";
 choices[51][1] = "solo es posible en redes privadas";
 choices[51][2] = "es posible en redes p&uacute;blicas y privadas que implementen la familia de RFCs relativas a los nombres de dominio internacionalizados";
 choices[51][3] = "es una posibilidad desde la creaci&oacute;n de la familia de protocolos pero que no ha sido desarrollada";
 answers[51] = choices[51][2];
 units[51] = "100";
 comments[51] = "Id Pregunta: 5273. ";


//  Id pregunta: 5277 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  Indique cu&aacute;l no es una ventaja de la fibra &oacute;ptica frente a los cableados de cobre:";
 choices[52]= new Array();
 choices[52][0] = "Mayor ancho de banda.";
 choices[52][1] = "Inmunidad al ruido electromagn&eacute;tico.";
 choices[52][2] = "Instalaci&oacute;n y conexionado m&aacute;s sencilla.";
 choices[52][3] = "Menor tama&ntilde;o y peso.";
 answers[52] = choices[52][2];
 units[52] = "99";
 comments[52] = "Id Pregunta: 5277. ";


//  Id pregunta: 5283 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  En Java la herencia es un mecanismo por el que se pueden crear nuevos objetos definidos en t&eacute;rminos de objetos ya existentes. &iquest;Esta permitida la herencia multiple?";
 choices[53]= new Array();
 choices[53][0] = "Si.";
 choices[53][1] = "No.";
 choices[53][2] = "Si con ciertas restricciones.";
 choices[53][3] = "No con ciertas restricciones.";
 answers[53] = choices[53][1];
 units[53] = "60";
 comments[53] = "Id Pregunta: 5283. NULL";


//  Id pregunta: 5457 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  Diga cu&aacute;l de las siguientes afirmaciones es cierta";
 choices[54]= new Array();
 choices[54][0] = "En las WAN los retardos son altos, por la gran distancia que cubre";
 choices[54][1] = "Las WAN son las LAN inal&aacute;mbricas (Wireless).";
 choices[54][2] = "Las LAN, MAN y WAN son la misma cosa, solo cambia la distancia que abarcan";
 choices[54][3] = "Ninguna de las anteriores";
 answers[54] = choices[54][0];
 units[54] = "101";
 comments[54] = "Id Pregunta: 5457. Castilla y Le&oacute;n";


//  Id pregunta: 5865 AÃ±o de creación de pregunta: 2009-01-01
 questions[55]= "56)  En referencia al direccionamiento de IPv6 definido en el RFC 1884, indique cu&aacute;l de los apartados siguientes es VERDADERO:";
 choices[55]= new Array();
 choices[55][0] = "Una direcci&oacute;n IPv6 tiene la forma x:x:x:x:x:x:x:x donde cada &quot;x&quot; representa un valor en hexadecimal correspondiente a 8 bits";
 choices[55][1] = "En una direcci&oacute;n IPv6, se pueden sustituir todas las apariciones de cadenas de ceros por &quot;::&quot;";
 choices[55][2] = "Una forma alternativa de representaci&oacute;n de las direcciones en un entorno mixto de IPv4 e IPv6 es d.d.d.d:x:x:x:x:x:x donde las &quot;d&quot; son los valores decimales de los 8bits m&aacute;s significativos de la direcci&oacute;n IPv4, y las &quot;x&quot; son valores hexadecimales de los tramos menos significativos de la direcci&oacute;n IPv6";
 choices[55][3] = "La direcci&oacute;n 0:0:0:0:0:0:0:0 es conocida como &quot;unspecified address&quot;. y nunca debe ser asignada a un nodo";
 answers[55] = choices[55][3];
 units[55] = "100";
 comments[55] = "Id Pregunta: 5865. MAP 2008 A1";


//  Id pregunta: 5881 AÃ±o de creación de pregunta: 2009-01-01
 questions[56]= "57)  Por IP-SPOOFING entendemos:";
 choices[56]= new Array();
 choices[56][0] = "Captura de passwords";
 choices[56][1] = "Uso fraudulento de direcciones de enlace";
 choices[56][2] = "Suplantaci&oacute;n de direcciones de red";
 choices[56][3] = "Propagaci&oacute;n de virus";
 answers[56] = choices[56][2];
 units[56] = "111";
 comments[56] = "Id Pregunta: 5881. MAP 2008 A1";


//  Id pregunta: 6144 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  Con respecto al ancho de banda de la conexi&oacute;n ADSL de un abonado";
 choices[57]= new Array();
 choices[57][0] = "La tasa de transferencia no es sensible a la distancia del abonado a la central, de forma que es similar a todos los abonados de una misma central";
 choices[57][1] = "La tasa de transferencia es sensible a la distancia del abonado a la central, de forma que los abonados que est&aacute;n m&aacute;s cerca de la central tendr&aacute;n posibilidad de velocidades m&aacute;s altas";
 choices[57][2] = "La tasa de transferencia del abonado depende principalmente del n&uacute;mero de abonados que est&aacute;n conectados simult&aacute;neamente, en ning&uacute;n caso de la distancia a la central";
 choices[57][3] = "Todas las respuestas anteriores son falsas";
 answers[57] = choices[57][1];
 units[57] = "107";
 comments[57] = "Id Pregunta: 6144. NULL";


//  Id pregunta: 6157 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  &iquest;Qu&eacute; protocolo de la capa de transporte utiliza TFTP?";
 choices[58]= new Array();
 choices[58][0] = "TCP, al igual que FTP";
 choices[58][1] = "TCP";
 choices[58][2] = "UDP";
 choices[58][3] = "UDP, al igual que FTP.";
 answers[58] = choices[58][2];
 units[58] = "112";
 comments[58] = "Id Pregunta: 6157. ";


//  Id pregunta: 6559 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  CSMA (Acceso M&uacute;ltiple por divisi&oacute;n de c&oacute;digo) no se caracteriza por:";
 choices[59]= new Array();
 choices[59][0] = "Ancho de banda menor a los sistemas TDMA";
 choices[59][1] = "Ancho de banda mayor a los sistemas TDMA";
 choices[59][2] = "Se puede reutilizar la misma portadora en todas las c&eacute;lulas, sean adyacentes o no";
 choices[59][3] = "M&uacute;ltiples usuarios pueden transmitir de manera concurrente sobre el mismo radiocanal";
 answers[59] = choices[59][0];
 units[59] = "108";
 comments[59] = "Id Pregunta: 6559. NULL";


//  Id pregunta: 7258 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  El dispositivo necesario para modular la se&ntilde;al de acceso a las redes de cable TV se denomina:";
 choices[60]= new Array();
 choices[60][0] = "Cablemodem";
 choices[60][1] = "HBA (Host Bus Adapter)";
 choices[60][2] = "Splitter";
 choices[60][3] = "HDMI (High-Definition Multi-media interface)";
 answers[60] = choices[60][0];
 units[60] = "105";
 comments[60] = "Id Pregunta: 7258. Examen TIC B 2009";


//  Id pregunta: 7273 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  Se&ntilde;ale  la opci&oacute;n que no corresponde a un  tipo de virtualizaci&oacute;n";
 choices[61]= new Array();
 choices[61][0] = "Virtualizaci&oacute;n de Sistema Operativo";
 choices[61][1] = "Paravirtualizaci&oacute;n";
 choices[61][2] = "Virtualizaci&oacute;n de datos";
 choices[61][3] = "Virtualizaci&oacute;n de red";
 answers[61] = choices[61][2];
 units[61] = "119";
 comments[61] = "Id Pregunta: 7273. NULL";


//  Id pregunta: 8169 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  &iquest;Cu&aacute;l de las siguientes afirmaciones respecto a la &quot;Ley General de Telecomunicaciones&quot; es cierta?:";
 choices[62]= new Array();
 choices[62][0] = "Corresponde a la Comisi&oacute;n Nacional de los Mercados y la Competencia la aprobaci&oacute;n de los planes nacionales de numeraci&oacute;n y, en su caso, de direccionamiento y nombres, teniendo en cuenta las decisiones aplicables que se adopten en el seno de las organizaciones y los foros internacionales.";
 choices[62][1] = "Corresponde al Ministerio de Industria, Energ&iacute;a y Turismo el otorgamiento de los derechos de uso de los recursos p&uacute;blicos regulados en los planes nacionales de numeraci&oacute;n, direccionamiento y denominaci&oacute;n";
 choices[62][2] = "El procedimiento y los plazos para la asignaci&oacute;n de n&uacute;meros, as&iacute; como las condiciones asociadas al uso de los n&uacute;meros, que ser&aacute;n no discriminatorias, proporcionadas y transparentes, se establecer&aacute;n reglamentariamente. Transcurrido el plazo m&aacute;ximo sin haberse notificado la resoluci&oacute;n expresa, se podr&aacute; entender aprobada la solicitud por silencio administrativo.";
 choices[62][3] = "Quedan incluidos en el &aacute;mbito de esta Ley, el r&eacute;gimen aplicable a los contenidos de car&aacute;cter audiovisual transmitidos a trav&eacute;s de las redes.";
 answers[62] = choices[62][1];
 units[62] = "110";
 comments[62] = "Id Pregunta: 8169. Examen TIC A1 2010. Modificado seg&uacute;n Ley 9/2014";


//  Id pregunta: 8184 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  Conforme a la especificaci&oacute;n 3GPP TS 03.60, GPRS se implementa l&oacute;gicamente a&ntilde;adiendo a la estructura de GSM los nodos Serving GPRS Support Node (SGSN) y Gateway GPRS Support Node (GGSN). &iquest;Cu&aacute;l es la afirmaci&oacute;n correcta?:";
 choices[63]= new Array();
 choices[63][0] = "Entre ambos tipos de nodos se define la Intefaz Gn si est&aacute;n situados en la misma red m&oacute;vil (PLMN).";
 choices[63][1] = "El SGSN es el nodo de interconexi&oacute;n con la Red de Conmutaci&oacute;n de Paquetes o Packet Data Network (PDN).";
 choices[63][2] = "La funcionalidad proporcionada por SGSN y GGSN debe residir en diferentes nodos f&iacute;sicos.";
 choices[63][3] = "Entre ambos tipos de nodos se define la Intefaz Gi si est&aacute;n situados en distinta red m&oacute;vil (PLMN).";
 answers[63] = choices[63][0];
 units[63] = "108";
 comments[63] = "Id Pregunta: 8184. Examen TIC A1 2010";


//  Id pregunta: 8295 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  El protocolo FTP es un protocolo: ";
 choices[64]= new Array();
 choices[64][0] = "Seguro.";
 choices[64][1] = "Orientado a conexi&oacute;n.";
 choices[64][2] = "De nivel de enlace.";
 choices[64][3] = "Dise&ntilde;ado para gestionar se&ntilde;alizaci&oacute;n de red. ";
 answers[64] = choices[64][1];
 units[64] = "100";
 comments[64] = "Id Pregunta: 8295. Examen TIC A2 2010";


//  Id pregunta: 8306 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  EI ataque conocido como &quot;ARP Spoofing&quot;: ";
 choices[65]= new Array();
 choices[65][0] = "Se impide con el uso de conmutadores (switches) en vez de concentradores (hubs).";
 choices[65][1] = "Se efect&uacute;a en el nivel 3 de OSI ya que falsifica direcciones IPs. ";
 choices[65][2] = "Sirve para interceptar tr&aacute;fico en una red de &aacute;rea local (LAN), pero no para modificarlo. ";
 choices[65][3] = "Puede impedirse mediante DHCP snooping.";
 answers[65] = choices[65][3];
 units[65] = "111";
 comments[65] = "Id Pregunta: 8306. Examen TIC A2 2010";


//  Id pregunta: 8537 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  En las redes m&oacute;viles 3G de transici&oacute;n, encontramos tecnolog&iacute;as como HSPA evolucionado o HSPA+. &iquest;Cu&aacute;l es una de las caracter&iacute;sticas de mejora de esta tecnolog&iacute;a?";
 choices[66]= new Array();
 choices[66][0] = "Permite el uso de antenas MIMO";
 choices[66][1] = "Alcanza velocidades pico te&oacute;ncas de 100 Mbps.";
 choices[66][2] = "Proporciona capacidades sim&eacute;tricas para los enlaces ascendente y descendente";
 choices[66][3] = "La modulaci&oacute;n es GMSK, de gran eficiencia espectral";
 answers[66] = choices[66][0];
 units[66] = "108";
 comments[66] = "Id Pregunta: 8537. Examen TIC A2 2010 interna";


//  Id pregunta: 8542 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  &iquest;Cu&aacute;l es el est&aacute;ndar europeo de TDT?";
 choices[67]= new Array();
 choices[67][0] = "ISDB.";
 choices[67][1] = "MPEG-2";
 choices[67][2] = "DVB-T";
 choices[67][3] = "EDTV";
 answers[67] = choices[67][2];
 units[67] = "105";
 comments[67] = "Id Pregunta: 8542. Examen TIC A2 2010 interna";


//  Id pregunta: 8672 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  Indique cu&aacute;l de las siguientes no es una entidad definida dentro de IP m&oacute;vil:";
 choices[68]= new Array();
 choices[68][0] = "Nodo local (Home Nodo)";
 choices[68][1] = "Agente local (Home Agent)";
 choices[68][2] = "Direcci&oacute;n de auxilio (Care-of-Address)";
 choices[68][3] = "Nodo m&oacute;vil (Mobile Nodo)";
 answers[68] = choices[68][0];
 units[68] = "100,109";
 comments[68] = "Id Pregunta: 8672. Examen UPM A2 2011";


//  Id pregunta: 8829 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)   En la arquitectura orientada a servicios, el est&aacute;ndar WSRP:";
 choices[69]= new Array();
 choices[69][0] = " Web Service for Remote Process, es utilizado para integrar servicios web con aplicaciones de las que necesiten datos para ejecutar su funcionalidad.";
 choices[69][1] = " Web Service for Remote Portlets, es utilizado para potenciar el uso de Servicios Web por la interfaz de aplicaci&oacute;n";
 choices[69][2] = " Web Service for Resource Planning, es utilizado para su integraci&oacute;n con los ERP de la organizaci&oacute;n";
 choices[69][3] = " Web Service for Redirect Processing, es utilizado para recoger cierta funcionalidad de otro Servicio Web necesaria para completar la suya";
 answers[69] = choices[69][1];
 units[69] = "114";
 comments[69] = "Id Pregunta: 8829. Examen UC3M 2010";


//  Id pregunta: 9332 AÃ±o de creación de pregunta: 2013-01-01
 questions[70]= "71)  Respecto a la tecnologia";
 choices[70]= new Array();
 choices[70][0] = "Dense WDM soporta menos canales que Coarse WDM y se usa en distancias mas cortas.";
 choices[70][1] = "Coarse WDM utiliza luz muy direccional para aprovechar el bajo numero de canales";
 choices[70][2] = "Dense WDM y Coarse WDM son tecnologias no interoperables";
 choices[70][3] = "Coarse WDM alcanza distancias de 1000 km";
 answers[70] = choices[70][2];
 units[70] = "99";
 comments[70] = "Id Pregunta: 9332. Corregida la respuesta A.";


//  Id pregunta: 9365 AÃ±o de creación de pregunta: 2013-01-01
 questions[71]= "72)  Acerca de Fibre Channel, se puede decir:";
 choices[71]= new Array();
 choices[71][0] = "El protocolo sigue el model de referencia OSI.";
 choices[71][1] = "Es un protocolo con 5 capas. ";
 choices[71][2] = "La capa FC3 es la capa de mapeo de protocolo.";
 choices[71][3] = "Los routers en Fibre Channel operan en la capa 3.";
 answers[71] = choices[71][1];
 units[71] = "101, 48";
 comments[71] = "Id Pregunta: 9365. ";


//  Id pregunta: 9402 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  Una red Frame Relay:";
 choices[72]= new Array();
 choices[72][0] = "Es adecuada para la transmisi&oacute;n de voz.";
 choices[72][1] = "Gestiona tr&aacute;fico por prioridades.";
 choices[72][2] = "Permite establecer circuitos virtuales permanentes.";
 choices[72][3] = "Ninguna de las anteriores";
 answers[72] = choices[72][2];
 units[72] = "109";
 comments[72] = "Id Pregunta: 9402. T&eacute;cnico Teleco Ayto Madrid 2010";


//  Id pregunta: 9426 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  Cuando un municipio elabora un instrumento de planificaci&oacute;n territorial o urban&iacute;stica";
 choices[73]= new Array();
 choices[73][0] = "Deber&aacute;n obtener un informe sobre la adecuaci&oacute;n de dichos instrumentos de planificaci&oacute;n con la Ley 9/2014 y con la normativa sectorial de telecomunicaciones y sobre las necesidades de redes p&uacute;blicas de comunicaciones electr&oacute;nicas en el &aacute;mbito territorial a que se refieran.";
 choices[73][1] = "El informe lo emite el Ministerio de Industria, Energ&iacute;a y Turismo.";
 choices[73][2] = "Los instrumentos de planificaci&oacute;n territorial o urban&iacute;stica no son competencia estatal, por lo que no se debe emitir ning&uacute;n informe.";
 choices[73][3] = "a) y b) son correctas";
 answers[73] = choices[73][3];
 units[73] = "110";
 comments[73] = "Id Pregunta: 9426. ";


//  Id pregunta: 9852 AÃ±o de creación de pregunta: 2014-01-01
 questions[74]= "75)  &iquest;Cu&aacute;l de los siguientes puertos es el puerto est&aacute;ndar de POP3 sobre SSL?";
 choices[74]= new Array();
 choices[74][0] = "995";
 choices[74][1] = "993";
 choices[74][2] = "220";
 choices[74][3] = "465";
 answers[74] = choices[74][0];
 units[74] = "111";
 comments[74] = "Id Pregunta: 9852. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Extremadura 2014";


//  Id pregunta: 9926 AÃ±o de creación de pregunta: 2014-01-01
 questions[75]= "76)  En relaci&oacute;n con el campo TTL, indique la falsa:";
 choices[75]= new Array();
 choices[75][0] = "Sirve para limitar la vida de un paquete. ";
 choices[75][1] = "Evita que los paquetes est&eacute;n dando vueltas eternamente por la red.";
 choices[75][2] = "Permite una vida m&aacute;xima de 512 segundos.";
 choices[75][3] = "En la pr&aacute;ctica, cuenta saltos.";
 answers[75] = choices[75][2];
 units[75] = "100";
 comments[75] = "Id Pregunta: 9926. NULL";


//  Id pregunta: 10111 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  El est&aacute;ndar Wimax est&aacute; especificado en la norma:";
 choices[76]= new Array();
 choices[76][0] = "IEEE 802.11";
 choices[76][1] = "IEEE 802.16";
 choices[76][2] = "IEEE 802.15";
 choices[76][3] = "IEEE 802.19";
 answers[76] = choices[76][1];
 units[76] = "101";
 comments[76] = "Id Pregunta: 10111. ";


//  Id pregunta: 10125 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  La red TESTA tiene el rango de direcciones:";
 choices[77]= new Array();
 choices[77][0] = "10.0.0.0";
 choices[77][1] = "192.0.0.0";
 choices[77][2] = "62.0.0.0";
 choices[77][3] = "62.62.0.0";
 answers[77] = choices[77][3];
 units[77] = "103";
 comments[77] = "Id Pregunta: 10125. ";


//  Id pregunta: 10133 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  La operaci&oacute;n TRAP de SNMP permite:";
 choices[78]= new Array();
 choices[78][0] = "Solicitar informaci&oacute;n desde el gestor";
 choices[78][1] = "Actualizar informaci&oacute;n desde el gestor al agente";
 choices[78][2] = "Enviar informaci&oacute;n desde el agente al gestor sin que la solicite";
 choices[78][3] = "Enviar informaci&oacute;n de un agente a otro";
 answers[78] = choices[78][2];
 units[78] = "104";
 comments[78] = "Id Pregunta: 10133. ";


//  Id pregunta: 10232 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  &iquest;Cual de las siguientes clases o interfaces es usado para recuperar informaci&oacute;n de la sesi&oacute;n asociada con el usuario?:";
 choices[79]= new Array();
 choices[79][0] = "GenericServlet";
 choices[79][1] = "ServletConfig";
 choices[79][2] = "ServletContext";
 choices[79][3] = "HttpServletRequest";
 answers[79] = choices[79][3];
 units[79] = "116";
 comments[79] = "Id Pregunta: 10232. NULL";


//  Id pregunta: 10503 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  &iquest;Qu&eacute; estandar internacional especifica clases de cableado de proposito general?";
 choices[80]= new Array();
 choices[80][0] = "ISO/IEC 11801";
 choices[80][1] = "EN 50173";
 choices[80][2] = "ISO/IEC 18101";
 choices[80][3] = "EN 50137";
 answers[80] = choices[80][0];
 units[80] = "99";
 comments[80] = "Id Pregunta: 10503. ";


//  Id pregunta: 10518 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  En relaci&oacute;n al uso del dominio p&uacute;blico radioel&eacute;ctrico, cu&aacute;l de las siguientes afirmaciones es falsa:";
 choices[81]= new Array();
 choices[81][0] = "El uso com&uacute;n del dominio p&uacute;blico radioel&eacute;ctrico no precisar&aacute; de ning&uacute;n t&iacute;tulo habilitante ";
 choices[81][1] = "El uso especial del dominio p&uacute;blico radioel&eacute;ctrico precisar&aacute; de una autorizaci&oacute;n general. ";
 choices[81][2] = "El derecho de uso especial por radioaficionados u otros sin contenido econ&oacute;mico no precisar&aacute; de t&iacute;tulo habilitante";
 choices[81][3] = "El uso privativo del dominio p&uacute;blico radioel&eacute;ctrico requerir&aacute; de una concesi&oacute;n administrativa ";
 answers[81] = choices[81][2];
 units[81] = "110";
 comments[81] = "Id Pregunta: 10518. ";


//  Id pregunta: 10880 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  La direcci&oacute;n can&oacute;nica de un puente o bridge es la direcci&oacute;n:";
 choices[82]= new Array();
 choices[82][0] = "MAC del interface principal del puente.";
 choices[82][1] = "IP del interface principal del puente.";
 choices[82][2] = "MAC del puente.";
 choices[82][3] = "Del interface de rango num&eacute;rico m&aacute;s alto del puente.";
 answers[82] = choices[82][2];
 units[82] = "102";
 comments[82] = "Id Pregunta: 10880. Examen GSI 2014";


//  Id pregunta: 10949 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  La cuarta generaci&oacute;n de telefon&iacute;a m&oacute;vil (4G) incluye:";
 choices[83]= new Array();
 choices[83][0] = "El requisito establecido por la UIT de velocidades m&aacute;ximas de transmisi&oacute;n de datos mejoradas: 100 Mbit/s para una movilidad alta y de 1 Gbit/s para una movilidad baja.";
 choices[83][1] = "El requisito establecido por la UIT de velocidades m&aacute;ximas de transmisi&oacute;n de datos mejoradas: 10 Mbit/s para una movilidad alta y de 100 Mbit/s para una movilidad baja.";
 choices[83][2] = "El requisito establecido por el IEEE de velocidades m&aacute;ximas de transmisi&oacute;n de datos mejoradas: 100 Mbit/s para una movilidad alta y de 1 Gbit/s para una movilidad baja.";
 choices[83][3] = "El requisito establecido por el IEEE de velocidades m&aacute;ximas de transmisi&oacute;n de datos mejoradas: 10 Mbit/s para una movilidad alta y de 100 Mbit/s para una movilidad baja.";
 answers[83] = choices[83][0];
 units[83] = "108";
 comments[83] = "Id Pregunta: 10949. TIC A1 AGE 2014";


//  Id pregunta: 11176 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  &iquest;Cu&aacute;l de los siguientes Grupos de Trabajo del Comit&eacute; de Estandarizaci&oacute;n 802 permanece Activo?";
 choices[84]= new Array();
 choices[84][0] = "802.3 CSMA/CD Ethernet";
 choices[84][1] = "802.14 Redes CATV";
 choices[84][2] = "802.10 Seguridad en Est&aacute;ndares IEEE";
 choices[84][3] = "802.4 Token Bus";
 answers[84] = choices[84][0];
 units[84] = "101";
 comments[84] = "Id Pregunta: 11176. ";


//  Id pregunta: 11177 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  &iquest;Qu&eacute; tipo de tr&aacute;fico proporciona el nivel de servicio A del est&aacute;ndar 802.17 Resilient Packet Ring?";
 choices[85]= new Array();
 choices[85][0] = "Tr&aacute;fico con requisitos latencia y jitter predecible";
 choices[85][1] = "Tr&aacute;fico con requisitos de baja latencia y bajo jitter";
 choices[85][2] = "Tr&aacute;fico con requisitos de baja latencia y alto jitter";
 choices[85][3] = "Tr&aacute;fico de servicios Best Effort";
 answers[85] = choices[85][1];
 units[85] = "101";
 comments[85] = "Id Pregunta: 11177. ";


//  Id pregunta: 11181 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  &iquest;Cu&aacute;ntas conexiones activas permite mantener un dispositivo con el est&aacute;ndar Bluetooth?";
 choices[86]= new Array();
 choices[86][0] = "7";
 choices[86][1] = "8";
 choices[86][2] = "12";
 choices[86][3] = "16";
 answers[86] = choices[86][0];
 units[86] = "107";
 comments[86] = "Id Pregunta: 11181. ";


//  Id pregunta: 11189 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  &iquest;Cu&aacute;l de los siguientes puertos utiliza el protocolo TCP WhoIS?";
 choices[87]= new Array();
 choices[87][0] = "43";
 choices[87][1] = "21";
 choices[87][2] = "23";
 choices[87][3] = "69";
 answers[87] = choices[87][0];
 units[87] = "112";
 comments[87] = "Id Pregunta: 11189. ";


//  Id pregunta: 11237 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  El framework Hibernate";
 choices[88]= new Array();
 choices[88][0] = "Est&aacute; disponible tambi&eacute;n para&nbsp;.Net&nbsp;con el nombre de&nbsp;NHibernate.";
 choices[88][1] = "Hibernate se distribuye bajo los t&eacute;rminos de la licencia&nbsp;GNU LGPL.";
 choices[88][2] = "Se apoya en Java Reflection API y en la librer&iacute;a de generaci&oacute;n de c&oacute;digo Javassist.";
 choices[88][3] = "Todas las respuestas son correctas.";
 answers[88] = choices[88][3];
 units[88] = "116";
 comments[88] = "Id Pregunta: 11237. ";


//  Id pregunta: 11426 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  Los abonados podr&aacute;n conservar sus n&uacute;meros de tel&eacute;fono seg&uacute;n la Ley 9/2014:";
 choices[89]= new Array();
 choices[89][0] = "Siempre.";
 choices[89][1] = "S&oacute;lo si lo solicitan previamente al operador al que quieren cambiar.";
 choices[89][2] = "S&oacute;lo si se lo comunican a la CNMC.";
 choices[89][3] = "No est&aacute; regulado en la Ley.";
 answers[89] = choices[89][1];
 units[89] = "110";
 comments[89] = "Id Pregunta: 11426. ";


//  Id pregunta: 11431 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  Seg&uacute;n la Ley 9/2014, &iquest;cu&aacute;l de las siguientes no es una facultad del Gobierno?:";
 choices[90]= new Array();
 choices[90][0] = "La elaboraci&oacute;n de los planes de utilizaci&oacute;n del espectro.";
 choices[90][1] = "La aprobaci&oacute;n de los planes de utilizaci&oacute;n del espectro.";
 choices[90][2] = "La elaboraci&oacute;n de los planes nacionales de numeraci&oacute;n.";
 choices[90][3] = "La aprobaci&oacute;n de los planes nacionales de numeraci&oacute;n.";
 answers[90] = choices[90][2];
 units[90] = "110";
 comments[90] = "Id Pregunta: 11431. ";


//  Id pregunta: 11437 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;Cu&aacute;l de las siguientes cuestiones sobre la Ley 9/2014 es correcta?:";
 choices[91]= new Array();
 choices[91][0] = "Los abonados conservar&aacute;n los n&uacute;meros que le hayan sido asignados autom&aacute;ticamente.";
 choices[91][1] = "Los costes derivados de la actualizaci&oacute;n de los elementos de red ser&aacute;n sufragados por el abonado.";
 choices[91][2] = "Los abonados conservar&aacute;n los n&uacute;meros que le hayan sido asignados previa solicitud.";
 choices[91][3] = "Corresponde al MINETUR la aprobaci&oacute;n por RD de los planes nacionales de numeraci&oacute;n, direccionamiento y denominaci&oacute;n.";
 answers[91] = choices[91][2];
 units[91] = "110";
 comments[91] = "Id Pregunta: 11437. ";


//  Id pregunta: 11572 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l no es una modulaci&oacute;n para DSL?";
 choices[92]= new Array();
 choices[92][0] = "CAP";
 choices[92][1] = "FSK";
 choices[92][2] = "DMT";
 choices[92][3] = "WDMT";
 answers[92] = choices[92][1];
 units[92] = "107";
 comments[92] = "Id Pregunta: 11572. NULL";


//  Id pregunta: 11577 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  En una red H.323, &iquest;Qu&iacute;en tiene las funciones de DNS?";
 choices[93]= new Array();
 choices[93][0] = "MCU";
 choices[93][1] = "LMU";
 choices[93][2] = "GateKeeper";
 choices[93][3] = "GateControler";
 answers[93] = choices[93][2];
 units[93] = "117";
 comments[93] = "Id Pregunta: 11577. NULL";


//  Id pregunta: 11652 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  En IPv6, desaparece el direccionamiento:";
 choices[94]= new Array();
 choices[94][0] = "Unicast";
 choices[94][1] = "Multicast";
 choices[94][2] = "Anycast";
 choices[94][3] = "Broadcast";
 answers[94] = choices[94][3];
 units[94] = "100";
 comments[94] = "Id Pregunta: 11652. ";


//  Id pregunta: 11654 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Son protocolos de estado del enlace:";
 choices[95]= new Array();
 choices[95][0] = "OSPF y RIPv2";
 choices[95][1] = "IS-IS y OSPF";
 choices[95][2] = "IGRP y RIPv2";
 choices[95][3] = "RIPv2 e IS-IS";
 answers[95] = choices[95][1];
 units[95] = "102";
 comments[95] = "Id Pregunta: 11654. ";


//  Id pregunta: 11682 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Cu&aacute;l es el nombre de la PDU de capa 2 del modelo OSI?";
 choices[96]= new Array();
 choices[96][0] = "MAC";
 choices[96][1] = "Segmento";
 choices[96][2] = "Paquete";
 choices[96][3] = "Trama";
 answers[96] = choices[96][3];
 units[96] = "100";
 comments[96] = "Id Pregunta: 11682. NULL";


//  Id pregunta: 11702 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Qu&eacute; caracter&iacute;stica no se a&ntilde;ade en SNMPv3 respecto a SNMPv2?";
 choices[97]= new Array();
 choices[97][0] = "Autenticaci&oacute;n";
 choices[97][1] = "Cifrado";
 choices[97][2] = "Deteccion de errores";
 choices[97][3] = "Integridad del mensaje";
 answers[97] = choices[97][2];
 units[97] = "104";
 comments[97] = "Id Pregunta: 11702. NULL";


//  Id pregunta: 11709 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  En el &aacute;mbito de la seguridad,&iquest;a qu&eacute; atienden las siglas AAA?";
 choices[98]= new Array();
 choices[98][0] = "Authentication, Authorization and Accounting";
 choices[98][1] = "Acknowledge, Authorization and Accounting";
 choices[98][2] = "Authentication, Authorization and Access";
 choices[98][3] = "Authentication, Approval and Accounting";
 answers[98] = choices[98][0];
 units[98] = "111";
 comments[98] = "Id Pregunta: 11709. NULL";


//  Id pregunta: 11727 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Qu&eacute; afirmaci&oacute;n describe una caracter&iacute;stica de IPsec?";
 choices[99]= new Array();
 choices[99][0] = "IPsec puede proteger el tr&aacute;fico en las capas 1 a 3.";
 choices[99][1] = "IPsec funciona independiente del protocolo de capa 2";
 choices[99][2] = "El cifrado puede causar problemas con el enrutamiento.";
 choices[99][3] = "Se trata de una suite propietaria";
 answers[99] = choices[99][1];
 units[99] = "111";
 comments[99] = "Id Pregunta: 11727. NULL";


