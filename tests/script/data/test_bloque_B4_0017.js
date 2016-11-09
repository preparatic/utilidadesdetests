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

//  Id pregunta: 2924 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  En relaci&oacute;n a los servicios web se&ntilde;ale la opci&oacute;n incorrecta";
 choices[0]= new Array();
 choices[0][0] = "SOAP (Simple Object access Protocol &oacute; Services-Oriented Architecture Protocol) es el protocolo de comunicaciones para los Servicios Web";
 choices[0][1] = "WSML (Web Service Markup Language) describe el interfaz externo de un Servicio Web y c&oacute;mo utilizarlo";
 choices[0][2] = "UDDI (Universal Discovery, Descripcion and Integration) es un protocolo para registros basados en web que contiene informaci&oacute;n acerca de servicios. Un registro UDDI es como el list&iacute;n de los servicios.";
 choices[0][3] = "Un Servicio Web se describe con un archivo WSDL, se registra en UDDI y se muestra en web a trav&eacute;s de SOAP.";
 answers[0] = choices[0][1];
 units[0] = "51";
 comments[0] = "Id Pregunta: 2924. Similar a examen TIC SS A 2003";


//  Id pregunta: 2927 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  En una configuraci&oacute;n de red interna o intranet conectada a internet se entiende por DMZ a:";
 choices[1]= new Array();
 choices[1][0] = "El conjunto de Firewalls y filtros que permiten garantizar la seguridad de la red.";
 choices[1][1] = "Una red que enlaza la intranet con internet en la que se implementan todas las restricciones necesarias para la seguridad de la red.";
 choices[1][2] = "Una red que enlaza la intranet con internet en la que se implementan los servicios p&uacute;blicos que se deseen ofrecer, separada de ambas redes mediante sendos Firewalls.";
 choices[1][3] = "Una red que enlaza la intranet con internet en la que se implementan los servicios que requieren mayor protecci&oacute;n y privacidad, separada de ambas redes mediante sendos Firewalls.";
 answers[1] = choices[1][2];
 units[1] = "113";
 comments[1] = "Id Pregunta: 2927. ";


//  Id pregunta: 2948 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  &iquest;Qu&eacute; organismo trabaj&oacute; en la estandarizaci&oacute;n de las redes de cable?";
 choices[2]= new Array();
 choices[2][0] = "El IEEE 802.11";
 choices[2][1] = "El IEEE 802.14";
 choices[2][2] = "El ATU-C";
 choices[2][3] = "El UIT-T E.164";
 answers[2] = choices[2][1];
 units[2] = "105";
 comments[2] = "Id Pregunta: 2948. Examen TIC MAP B 2004";


//  Id pregunta: 2968 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  El componente de servidor J2EE de uso m&aacute;s apropiado para mantener una conversaci&oacute;n con un cliente es un EJB del tipo ...";
 choices[3]= new Array();
 choices[3][0] = "Stateless Session Bean";
 choices[3][1] = "Message Driven Bean";
 choices[3][2] = "Entity Bean con persistencia BMP";
 choices[3][3] = "Stateful Session Bean";
 answers[3] = choices[3][3];
 units[3] = "116";
 comments[3] = "Id Pregunta: 2968. ";


//  Id pregunta: 2988 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  &iquest;Cu&aacute;l de los siguientes protocolos de la familia TCP/IP no pertenece al grupo de protocolos de la capa de aplicaci&oacute;n?";
 choices[4]= new Array();
 choices[4][0] = "DNS: Sistema de nombres de dominio";
 choices[4][1] = "SNMP: Protocolo de gesti&oacute;n simple de red";
 choices[4][2] = "FTP: Protocolo de transferencia de archivos";
 choices[4][3] = "ARP: Protocolo de determinaci&oacute;n de direcciones";
 answers[4] = choices[4][3];
 units[4] = "100";
 comments[4] = "Id Pregunta: 2988. NULL";


//  Id pregunta: 2997 AÃ±o de creación de pregunta: 2004-01-01
 questions[5]= "6)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa en relaci&oacute;n al protocolo IPv6?";
 choices[5]= new Array();
 choices[5][0] = "Maneja direcciones de 16 bytes";
 choices[5][1] = "La cabecera del protocolo se ha ampliado respecto a la de IPv4";
 choices[5][2] = "Incluye funciones de autenticaci&oacute;n";
 choices[5][3] = "Incluye funciones de encriptaciones";
 answers[5] = choices[5][1];
 units[5] = "100";
 comments[5] = "Id Pregunta: 2997. Aunque la cabecera IPv6 tiene mayor tama&ntilde;o, los campos menos utilizados de IP v4 se han movido a OPCIONES";


//  Id pregunta: 3001 AÃ±o de creación de pregunta: 2004-01-01
 questions[6]= "7)  De los siguientes &iquest;Cu&aacute;l es un componente b&aacute;sico de un cortafuegos?";
 choices[6]= new Array();
 choices[6][0] = "El balanceados de carga (o asignador de tareas) que permite la ampliaci&oacute;n horizontal del &quot;basti&oacute;n&quot; mediante la asignaci&oacute;n de tramas IP entre varias subredes o m&aacute;quinas configuradas en forma id&eacute;ntica.";
 choices[6][1] = "Los servicios proxy, entendidos como aplicaciones SW para reenviar o bloquear conexiones a servicios como finger, telnet o ftp";
 choices[6][2] = "el sistema operativo LINUX en sus distribuciones seguras";
 choices[6][3] = "La monitorizaci&oacute;n de servicios de red tipo SMTP, POP3, HTTP, NNTP, PING,&hellip;,  a efectos de disponibilidad y rendimiento (performance)";
 answers[6] = choices[6][1];
 units[6] = "111";
 comments[6] = "Id Pregunta: 3001. NULL";


//  Id pregunta: 3039 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l de los siguientes objetos no es un objeto del modelo de objetos de ASP 3.0?:";
 choices[7]= new Array();
 choices[7][0] = "RESPONSE";
 choices[7][1] = "SESSION";
 choices[7][2] = "SERVER";
 choices[7][3] = "FORM";
 answers[7] = choices[7][3];
 units[7] = "115";
 comments[7] = "Id Pregunta: 3039. ";


//  Id pregunta: 3069 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Indique la afirmaci&oacute;n incorrecta respecto al correo electr&oacute;nico:";
 choices[8]= new Array();
 choices[8][0] = "Los mensajes se pueden recibir aunque el equipo est&eacute; desconectado";
 choices[8][1] = "No es necesaria la conexi&oacute;n directa emisor-receptor";
 choices[8][2] = "No permite enviar fax";
 choices[8][3] = "Todos los sistemas de correo electr&oacute;nico que cumplan las recomendaciones X.400 de la ITU-T pueden interconectarse a trav&eacute;s de la mensajer&iacute;a p&uacute;blica";
 answers[8] = choices[8][2];
 units[8] = "106";
 comments[8] = "Id Pregunta: 3069. ";


//  Id pregunta: 3184 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l de las siguientes respuestas sobre CDDI (o CuDDI o TP-DDI) es falsa?:";
 choices[9]= new Array();
 choices[9][0] = "CDDI tiene toda la tolerancia a fallos y velocidad que la FDDI";
 choices[9][1] = "CDDI usa una especificaci&oacute;n PMD ANSI diferente que la FDDI";
 choices[9][2] = "CDDI tiene la misma limitaci&oacute;n de distancia que la FDDI";
 choices[9][3] = "CDDI usa un cableado m&aacute;s econ&oacute;mico que la FDDI";
 answers[9] = choices[9][2];
 units[9] = "97";
 comments[9] = "Id Pregunta: 3184. NULL";


//  Id pregunta: 3207 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  El c&oacute;digo de los mensajes HTTP de respuesta que indican &eacute;xito en la petici&oacute;n comienzan por:";
 choices[10]= new Array();
 choices[10][0] = "1";
 choices[10][1] = "2";
 choices[10][2] = "3";
 choices[10][3] = "5";
 answers[10] = choices[10][1];
 units[10] = "112";
 comments[10] = "Id Pregunta: 3207. ";


//  Id pregunta: 3232 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Cu&aacute;l de los siguientes protocolos de servicios de Internet corresponde al que se encarga de recoger el correo del buz&oacute;n de usuario de la m&aacute;quina servidora y lo trae a un directorio del disco duro del PC del usuario?:";
 choices[11]= new Array();
 choices[11][0] = "POP3";
 choices[11][1] = "SMTP";
 choices[11][2] = "X.400";
 choices[11][3] = "MIME";
 answers[11] = choices[11][0];
 units[11] = "106";
 comments[11] = "Id Pregunta: 3232. ";


//  Id pregunta: 3235 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  &iquest;Cu&aacute;l de los siguientes protocolos no pertenece al nivel de aplicaci&oacute;n?:";
 choices[12]= new Array();
 choices[12][0] = "Telnet";
 choices[12][1] = "FTP";
 choices[12][2] = "SMTP";
 choices[12][3] = "RIP";
 answers[12] = choices[12][3];
 units[12] = "99";
 comments[12] = "Id Pregunta: 3235. NULL";


//  Id pregunta: 3253 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  &iquest;Cu&aacute;les son los servicios que proporciona el nivel de transporte (4 de OSI) al nivel de sesi&oacute;n (5 de OSI)?:";
 choices[13]= new Array();
 choices[13][0] = "Reinicio de enlaces, control de secuencia, transmisi&oacute;n de datos e indicaci&oacute;n de calidad del servicio";
 choices[13][1] = "Transmisi&oacute;n de datos, establecimiento de conexiones de transporte y liberaci&oacute;n de las mismas";
 choices[13][2] = "Reinicio de enlaces, control de secuencia, transmisi&oacute;n de datos, establecimiento de conexiones de transporte y liberaci&oacute;n de las mismas";
 choices[13][3] = "Control de calidad del servicio, establecimiento de conexiones de transporte y liberaci&oacute;n de las mismas";
 answers[13] = choices[13][1];
 units[13] = "100";
 comments[13] = "Id Pregunta: 3253. NULL";


//  Id pregunta: 3279 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  &iquest;Qu&eacute; elemento de la especificaci&oacute;n de RDSI ser&iacute;a una centralita digital de abonado?:";
 choices[14]= new Array();
 choices[14][0] = "Un TR1";
 choices[14][1] = "Un TR2";
 choices[14][2] = "RDSI no contempla el concepto de central de abonado, por lo que esta ser&iacute;a un equipo terminal (ET1) m&aacute;s";
 choices[14][3] = "RDSI no contempla el concepto de central de abonado, por lo que esta ser&iacute;a un equipo terminal (ET2) m&aacute;s";
 answers[14] = choices[14][1];
 units[14] = "103";
 comments[14] = "Id Pregunta: 3279. ";


//  Id pregunta: 3320 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  &iquest;Sabe qu&eacute; organismo defini&oacute; el est&aacute;ndar TCP/IP?:";
 choices[15]= new Array();
 choices[15][0] = "American National Standard Institute (ANSI)";
 choices[15][1] = "Departamento de Defensa de EE.UU.";
 choices[15][2] = "International Standards Organization (ISO)";
 choices[15][3] = "Institute for Electrical and Electronic Engineers (IEEE)";
 answers[15] = choices[15][1];
 units[15] = "100,112";
 comments[15] = "Id Pregunta: 3320. ";


//  Id pregunta: 3371 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  Dentro de una celda ATM, el campo GFC:";
 choices[16]= new Array();
 choices[16][0] = "S&oacute;lo esta presente en las celdas de los interfaces usuario-red";
 choices[16][1] = "Al igual que el campo CLP, &quot;marca&quot; la celda a lo largo de todo su transito por la red";
 choices[16][2] = "Tiene una longitud de 1 bit";
 choices[16][3] = "Proporciona la sincronizaci&oacute;n entre celdas";
 answers[16] = choices[16][0];
 units[16] = "109";
 comments[16] = "Id Pregunta: 3371. ";


//  Id pregunta: 3410 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Frame Relay, respecto a X25:";
 choices[17]= new Array();
 choices[17][0] = "No utiliza el concepto de circuito virtual";
 choices[17][1] = "Separa las arquitecturas de protocolos para los datos de usuario y los de control";
 choices[17][2] = "Tiene velocidades de acceso menores";
 choices[17][3] = "Nunca puede garantizar un caudal m&iacute;nimo";
 answers[17] = choices[17][1];
 units[17] = "109";
 comments[17] = "Id Pregunta: 3410. ";


//  Id pregunta: 3455 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  El protocolo OSPF:";
 choices[18]= new Array();
 choices[18][0] = "Es un protocolo de encaminamiento como el RIP";
 choices[18][1] = "Significa 'Open Systems Protocol Family'";
 choices[18][2] = "No usa el algoritmo tipo de estados de enlaces (link-state) para encaminar los datagramas";
 choices[18][3] = "Se describe en la RFC942 (Request for Comments)";
 answers[18] = choices[18][0];
 units[18] = "102";
 comments[18] = "Id Pregunta: 3455. ";


//  Id pregunta: 3470 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  El servicio de directorio definido por la ITU-T:";
 choices[19]= new Array();
 choices[19][0] = "Se incluye en casi todos los sistemas de correo electr&oacute;nico para consultar las direcciones de los usuarios existentes en la red";
 choices[19][1] = "Se especifica en el est&aacute;ndar X.600 del ITU";
 choices[19][2] = "Es soportado por un sistema de ficheros en red";
 choices[19][3] = "Se ha definido como un conjunto de modelos, servicios y protocolos accesibles a nivel mundial en forma independiente de la aplicaci&oacute;n";
 answers[19] = choices[19][3];
 units[19] = "106";
 comments[19] = "Id Pregunta: 3470. ";


//  Id pregunta: 3518 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  En Espa&ntilde;a la portabilidad del n&uacute;mero de abonado:";
 choices[20]= new Array();
 choices[20][0] = "Es obligatoria desde la Orden Ministerial de 4 de agosto de 1997";
 choices[20][1] = "Se basa en diferentes tecnolog&iacute;as: redirecci&oacute;n de llamada y red inteligente";
 choices[20][2] = "Permite a un abonado de un operador de telefon&iacute;a cambiar de operador conservando el n&uacute;mero";
 choices[20][3] = "Todas las respuestas anteriores son correctas";
 answers[20] = choices[20][3];
 units[20] = "110";
 comments[20] = "Id Pregunta: 3518. ";


//  Id pregunta: 3547 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  En notaci&oacute;n Kendall A/B/X/Y/Z: ";
 choices[21]= new Array();
 choices[21][0] = "B especifica la distribuci&oacute;n del tiempo de servicio.";
 choices[21][1] = "A especifica la distribuci&oacute;n de las llegadas al sistema.";
 choices[21][2] = "Z especifica la disciplina de cola.";
 choices[21][3] = "Todas las anteriores son v&aacute;lidas.";
 answers[21] = choices[21][3];
 units[21] = "";
 comments[21] = "Id Pregunta: 3547. Kendall T&ordm; Colas";


//  Id pregunta: 3571 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  En una comparaci&oacute;n entre modelos OSI y TCP/IP, es falso que:";
 choices[22]= new Array();
 choices[22][0] = "TCP/IP est&aacute; basado en protocolos existentes, mientras que OSI de ISO es independiente del protocolo";
 choices[22][1] = "En OSI los niveles 2 y 3 est&aacute;n sobrecargados, y los niveles 5 y 6 tienen poca funcionalidad";
 choices[22][2] = "En OSI, al igual que en TCP/IP, las primeras implementaciones no tuvieron apenas errores y se distribuyeron gratuitamente, lo que contribuy&oacute; a su difusi&oacute;n";
 choices[22][3] = "En OSI el nivel de transporte es s&oacute;lo orientado a conexi&oacute;n, y el de red soporta servicios orientados y no orientados a conexi&oacute;n, no como en TCP/IP";
 answers[22] = choices[22][2];
 units[22] = "100";
 comments[22] = "Id Pregunta: 3571. NULL";


//  Id pregunta: 3573 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  En una conexi&oacute;n V.90:";
 choices[23]= new Array();
 choices[23][0] = "Los m&oacute;dems siempre han de sincronizarse a 56k.";
 choices[23][1] = "Los m&oacute;dems no establecen protocolo de negociaci&oacute;n de par&aacute;metros previo a la conexi&oacute;n.";
 choices[23][2] = "La negociaci&oacute;n se hace v&iacute;a protocolos TCP.";
 choices[23][3] = "La velocidad de conexi&oacute;n se negocia entre los dos m&oacute;dem de acuerdo a las caracter&iacute;sticas de la l&iacute;nea.";
 answers[23] = choices[23][3];
 units[23] = "100, 103";
 comments[23] = "Id Pregunta: 3573. modems";


//  Id pregunta: 3574 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  En una red de &aacute;rea extensa (WAN):";
 choices[24]= new Array();
 choices[24][0] = "Los tiempos de propagaci&oacute;n son bajos";
 choices[24][1] = "Las velocidades de transmisi&oacute;n de datos son lentas, sobre todo comparadas con las LAN";
 choices[24][2] = "Baja tasa de errores, haciendo innecesario procedimientos efectivos para la detecci&oacute;n y su recuperaci&oacute;n";
 choices[24][3] = "Los retrasos son predecibles";
 answers[24] = choices[24][1];
 units[24] = "101";
 comments[24] = "Id Pregunta: 3574. ";


//  Id pregunta: 3578 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  En una red que usa conmutaci&oacute;n de paquetes:";
 choices[25]= new Array();
 choices[25][0] = "La longitud de la unidades de datos (paquetes) que puedan presentarse a la red es ilimitada";
 choices[25][1] = "Cuanto mayor sea la longitud de los paquetes, mayor ser&aacute; el tiempo de espera hasta su retransmisi&oacute;n, por lo que se procurar&aacute; que tama&ntilde;o de los paquetes sea el menor posible";
 choices[25][2] = "Si un mensaje supera la m&aacute;xima longitud permitida, se divide en unidades de datos m&aacute;s peque&ntilde;as";
 choices[25][3] = "La ITU-T en su recomendaci&oacute;n X.25 no propone ning&uacute;n m&aacute;ximo para la longitud de los paquetes";
 answers[25] = choices[25][2];
 units[25] = "101";
 comments[25] = "Id Pregunta: 3578. ";


//  Id pregunta: 3600 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  La distancia m&aacute;xima entre estaciones en el est&aacute;ndar 10Base2 es de:";
 choices[26]= new Array();
 choices[26][0] = "100 metros";
 choices[26][1] = "185 metros";
 choices[26][2] = "200 metros";
 choices[26][3] = "500 metros";
 answers[26] = choices[26][1];
 units[26] = "99";
 comments[26] = "Id Pregunta: 3600. ";


//  Id pregunta: 3614 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  La jerarqu&iacute;a digital MDH:";
 choices[27]= new Array();
 choices[27][0] = "Responde por Multimedia Digital Hierarchy";
 choices[27][1] = "Responde por Multiplexed Digital Hierarchy";
 choices[27][2] = "No existe ";
 choices[27][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[27] = choices[27][2];
 units[27] = "109";
 comments[27] = "Id Pregunta: 3614. ";


//  Id pregunta: 3680 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  Uno de los protocolos m&aacute;s populares usados en las redes Ethernet (y 802.3) es el protocolo 'spanning tree' y es usado por los puentes:";
 choices[28]= new Array();
 choices[28][0] = "Puentes transparentes";
 choices[28][1] = "Puentes 'source routing'";
 choices[28][2] = "Puentes TCP/IP";
 choices[28][3] = "Ninguno de ellos";
 answers[28] = choices[28][0];
 units[28] = "102";
 comments[28] = "Id Pregunta: 3680. ";


//  Id pregunta: 3729 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  Los m&oacute;dems usan t&eacute;cnicas de modulaci&oacute;n para transmitir datos sobre las l&iacute;neas telef&oacute;nicas. Indique cu&aacute;l de las siguientes no es una de estas t&eacute;cnicas:";
 choices[29]= new Array();
 choices[29][0] = "Modulaci&oacute;n de fase";
 choices[29][1] = "Modulaci&oacute;n de frecuencia";
 choices[29][2] = "Modulaci&oacute;n QAM";
 choices[29][3] = "Modulaci&oacute;n PCM";
 answers[29] = choices[29][3];
 units[29] = "99";
 comments[29] = "Id Pregunta: 3729. modems";


//  Id pregunta: 3745 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  Los terminales dise&ntilde;ados para conectarse directamente a la RDSI, como los tel&eacute;fonos digitales RDSI, un ordenador equipado con tarjeta adaptadora a RDSI y software &ldquo;driver&rdquo; de la tarjeta adaptadora a RDSI se denominan:";
 choices[30]= new Array();
 choices[30][0] = "ET1";
 choices[30][1] = "ET2";
 choices[30][2] = "TR2";
 choices[30][3] = "AT";
 answers[30] = choices[30][0];
 units[30] = "103";
 comments[30] = "Id Pregunta: 3745. ";


//  Id pregunta: 3747 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  Los tipos diferentes de primitivas existentes en el modelo OSI son:";
 choices[31]= new Array();
 choices[31][0] = "Request, Answer, Finalization";
 choices[31][1] = "Request, Response, Indication, Confirmation";
 choices[31][2] = "Request, Response, Error, Indication, Confirmation, Replay";
 choices[31][3] = "Dependen del protocolo, cada protocolo tiene un conjunto distinto de tipos de primitivas";
 answers[31] = choices[31][1];
 units[31] = "100";
 comments[31] = "Id Pregunta: 3747. NULL";


//  Id pregunta: 3753 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  MPLS se encapsula en la torre de protocolos:";
 choices[32]= new Array();
 choices[32][0] = "por encima del protocolo IP y por debajo del protocolo TCP";
 choices[32][1] = "por encima del protocolo TCP y por debajo de otros protocolos de transporte";
 choices[32][2] = "por encima de los protocolos del nivel de enlace y por debajo de IP";
 choices[32][3] = "por encima de los protocolos del nivel de transporte";
 answers[32] = choices[32][2];
 units[32] = "102";
 comments[32] = "Id Pregunta: 3753. ";


//  Id pregunta: 3785 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  Respecto a la clase de QoS definido por el ATM Forum, UBR, puede decirse que:";
 choices[33]= new Array();
 choices[33][0] = "Asegura una cantidad m&iacute;nima de datos que pueden transmitirse a trav&eacute;s de la red";
 choices[33][1] = "Garantiza al menos una tasa de c&eacute;lulas transmitidas";
 choices[33][2] = "No garantiza ni siquiera un retardo m&aacute;ximo";
 choices[33][3] = "Tiene una tasa de bits concreta incluida en la especificaci&oacute;n";
 answers[33] = choices[33][2];
 units[33] = "109";
 comments[33] = "Id Pregunta: 3785. ";


//  Id pregunta: 3830 AÃ±o de creación de pregunta: 2002-01-01
 questions[34]= "35)  Si alguien habla de &quot;la arquitectura DNA&quot; se est&aacute; refiriendo a:";
 choices[34]= new Array();
 choices[34][0] = "Un modelo de inteligencia artificial basado en algoritmos gen&eacute;ticos";
 choices[34][1] = "Una determinada arquitectura de red registrada por una compa&ntilde;&iacute;a privada";
 choices[34][2] = "Una determinada arquitectura de red normalizada por ISO";
 choices[34][3] = "Un tipo de procesador RISC";
 answers[34] = choices[34][1];
 units[34] = "101";
 comments[34] = "Id Pregunta: 3830. ";


//  Id pregunta: 3861 AÃ±o de creación de pregunta: 2004-01-01
 questions[35]= "36)  Cu&aacute;l no es una caracter&iacute;stica de IPv6";
 choices[35]= new Array();
 choices[35][0] = "Tama&ntilde;o de paquete m&aacute;ximo de 64 Kb";
 choices[35][1] = "Soporte para autenticaci&oacute;n y privacidad";
 choices[35][2] = "Aumenta el tama&ntilde;o de las tablas de enrutado";
 choices[35][3] = "Elimina el checksum del paquete";
 answers[35] = choices[35][2];
 units[35] = "100";
 comments[35] = "Id Pregunta: 3861. Tanenbaum";


//  Id pregunta: 3897 AÃ±o de creación de pregunta: 2003-01-01
 questions[36]= "37)  Entre las atribuciones de la Comisi&oacute;n Nacional de los Mercados y la Competencia NO se encuentran:";
 choices[36]= new Array();
 choices[36][0] = "Definir y analizar los mercados de referencia relativos a redes y servicios de comunicaciones electr&oacute;nicas.";
 choices[36][1] = "Establecer, cuando proceda, las obligaciones espec&iacute;ficas que correspondan a los operadores con poder significativo en mercados de referencia.";
 choices[36][2] = "Vigilancia del cumplimiento de las distintas normas aplicables al sector";
 choices[36][3] = "Ninguna de las anteriores";
 answers[36] = choices[36][2];
 units[36] = "110";
 comments[36] = "Id Pregunta: 3897. NULL";


//  Id pregunta: 3910 AÃ±o de creación de pregunta: 2003-01-01
 questions[37]= "38)  Al ajuste hacia niveles predeterminados de los valores troceados de una se&ntilde;al anal&oacute;gica se le denomina:";
 choices[37]= new Array();
 choices[37][0] = "Cuantificaci&oacute;n.";
 choices[37][1] = "Digitalizaci&oacute;n.";
 choices[37][2] = "Discretizaci&oacute;n.";
 choices[37][3] = "Codificaci&oacute;n.";
 answers[37] = choices[37][0];
 units[37] = "108";
 comments[37] = "Id Pregunta: 3910. ";


//  Id pregunta: 3940 AÃ±o de creación de pregunta: 2003-01-01
 questions[38]= "39)  &iquest;Qu&eacute; mensajes son necesarios para establecer una conexi&oacute;n TCP?:";
 choices[38]= new Array();
 choices[38][0] = "SYN y ACK";
 choices[38][1] = "SYN, SYN-ACK y ACK";
 choices[38][2] = "SYN, SYN-ACK, ACK y NSI";
 choices[38][3] = "Ninguna de las anteriores";
 answers[38] = choices[38][1];
 units[38] = "100";
 comments[38] = "Id Pregunta: 3940. ";


//  Id pregunta: 3997 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  Con respecto al est&aacute;ndar DOCSIS 1.1 (Data over Cable Service Interface Specification), se&ntilde;ale qu&eacute; afirmaci&oacute;n no es correcta:";
 choices[39]= new Array();
 choices[39][0] = "Especifica mecanismos para garantizar la QoS de flujo de datos en tiempo real como la voz.";
 choices[39][1] = "La voz y los datos viajan por canales diferentes, pero permitiendo un tratamiento uniforme en la red HFC.";
 choices[39][2] = "En la versi&oacute;n europea de DOCSIS 1.1 se establece un m&aacute;ximo de 160 km entre el CMTS (Cable Modem Termination System).";
 choices[39][3] = "En DOCSIS 1.1 est&aacute; prevista la definici&oacute;n para el soporte de ATM.";
 answers[39] = choices[39][1];
 units[39] = "105";
 comments[39] = "Id Pregunta: 3997. ";


//  Id pregunta: 4015 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  De las siguientes tecnolog&iacute;as xDSL, &iquest;cu&aacute;l de ellas puede ser asim&eacute;trica?";
 choices[40]= new Array();
 choices[40][0] = "HDSL";
 choices[40][1] = "SDSL";
 choices[40][2] = "VDSL";
 choices[40][3] = "SHDSL";
 answers[40] = choices[40][2];
 units[40] = "107";
 comments[40] = "Id Pregunta: 4015. NULL";


//  Id pregunta: 4023 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  &iquest;Cu&aacute;l de los siguientes no es un elemento de la arquitectura GSM?";
 choices[41]= new Array();
 choices[41][0] = "HLR";
 choices[41][1] = "MSC";
 choices[41][2] = "SGSN";
 choices[41][3] = "BTS";
 answers[41] = choices[41][2];
 units[41] = "108";
 comments[41] = "Id Pregunta: 4023. ";


//  Id pregunta: 4052 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  Que sentido tiene pasar de IPv4 a IPV6";
 choices[42]= new Array();
 choices[42][0] = "El principal motivo es aumentar el ancho de banda";
 choices[42][1] = "Los nodos de internet cambiar&aacute;n a este protocolo el 1 de enero de 2014";
 choices[42][2] = "IPv6 permite un uso optimo de las tecnolog&iacute;as wireless";
 choices[42][3] = "Ninguna de las anteriores es correcta";
 answers[42] = choices[42][3];
 units[42] = "100";
 comments[42] = "Id Pregunta: 4052. NULL";


//  Id pregunta: 4079 AÃ±o de creación de pregunta: 2006-01-01
 questions[43]= "44)  &iquest;Cu&aacute;l de los siguientes puede ser una alternativa a EJB?";
 choices[43]= new Array();
 choices[43][0] = "Hibernate";
 choices[43][1] = "JDBC";
 choices[43][2] = "Ninguna de las anteriores";
 choices[43][3] = "la opci&oacute;n a) y b)";
 answers[43] = choices[43][3];
 units[43] = "116";
 comments[43] = "Id Pregunta: 4079. ";


//  Id pregunta: 4165 AÃ±o de creación de pregunta: 2006-01-01
 questions[44]= "45)  Cuando las tareas de operaci&oacute;n y programaci&oacute;n no est&aacute;n segregadas, el responsable de seguridad debe de proveer controles";
 choices[44]= new Array();
 choices[44][0] = "compensatorios";
 choices[44][1] = "administrativos";
 choices[44][2] = "correctivos";
 choices[44][3] = "de acceso";
 answers[44] = choices[44][0];
 units[44] = "111";
 comments[44] = "Id Pregunta: 4165. NULL";


//  Id pregunta: 4190 AÃ±o de creación de pregunta: 2006-01-01
 questions[45]= "46)  Para listar las conexiones en un servidor utilizo el comando";
 choices[45]= new Array();
 choices[45][0] = "ping";
 choices[45][1] = "netstat";
 choices[45][2] = "tracert o traceroute";
 choices[45][3] = "ipconfig / ifconfig";
 answers[45] = choices[45][1];
 units[45] = "54";
 comments[45] = "Id Pregunta: 4190. ";


//  Id pregunta: 4195 AÃ±o de creación de pregunta: 2006-01-01
 questions[46]= "47)  El estandar 802.11e se centra en";
 choices[46]= new Array();
 choices[46][0] = "Calidad de Servicio (QoS) sobre redes WLAN";
 choices[46][1] = "Autenticaci&oacute;n y cifrado para redes WLAN";
 choices[46][2] = "Nueva generaci&oacute;n de WLAN de redes de, al menos, 100 Mbps (en proceso de definici&oacute;n en 2006)";
 choices[46][3] = "Intercambio de informaci&oacute;n de capacidad entre clientes y puntos de acceso en redes WLAN";
 answers[46] = choices[46][0];
 units[46] = "107";
 comments[46] = "Id Pregunta: 4195. NULL";


//  Id pregunta: 4206 AÃ±o de creación de pregunta: 2006-01-01
 questions[47]= "48)  La fibra &oacute;ptica m&aacute;s popular es";
 choices[47]= new Array();
 choices[47][0] = "9/125 um";
 choices[47][1] = "62.5/125 um";
 choices[47][2] = "50/125 um";
 choices[47][3] = "100/140 um";
 answers[47] = choices[47][1];
 units[47] = "99";
 comments[47] = "Id Pregunta: 4206. ";


//  Id pregunta: 4228 AÃ±o de creación de pregunta: 2006-01-01
 questions[48]= "49)  Indique cu&aacute;l de las siguientes respuestas no es correcta en relaci&oacute;n con los est&aacute;ndares 802.11x del IEEE:";
 choices[48]= new Array();
 choices[48][0] = "802.11a utiliza la banda de 5 GHz, 802.11b y 802.11g  la de 2,4 GHz";
 choices[48][1] = "802.11a alcanza velocidades de 54 Mbps, 802.11b y 802.11g de 11 Mbps";
 choices[48][2] = "802.11i se refiere a mejoras de seguridad";
 choices[48][3] = "802.11e se refiere a calidad de servicio";
 answers[48] = choices[48][1];
 units[48] = "107";
 comments[48] = "Id Pregunta: 4228. NULL";


//  Id pregunta: 4715 AÃ±o de creación de pregunta: 2007-01-01
 questions[49]= "50)  El hipertexto es:";
 choices[49]= new Array();
 choices[49][0] = "El conjunto de los elementos activos de un documento, que, al seleccionarse, enlazan con otros elementos";
 choices[49][1] = "Un documento HTML.";
 choices[49][2] = "Un documento HTML, XML o SGML.";
 choices[49][3] = "Ninguna de las anteriores";
 answers[49] = choices[49][0];
 units[49] = "112";
 comments[49] = "Id Pregunta: 4715. Examen 2006 JCYL";


//  Id pregunta: 4807 AÃ±o de creación de pregunta: 2007-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes afirmaciones respecto a ADSL (Asymmetrical Digital Subscriber Line) NO es cierta?";
 choices[50]= new Array();
 choices[50][0] = "Una caracter&iacute;stica importante de ADSL, definido en la recomendaci&oacute;n G.992.1 de ITU-T (InternationalTelecommunications Union-Telecommunications), es la compartici&oacute;n del espectro disponible en el partelef&oacute;nico con el servicio telef&oacute;nico, permitiendo el acceso simult&aacute;neo a ambos servicios. Esto se logramediante el empleo de unos filtros denominados &quot;splitters&quot;";
 choices[50][1] = "En un primer momento, las principales t&eacute;cnicas de modulaci&oacute;n utilizadas en ADSL eran CAP (Carrier-lessAmplitude and Phase Modulation) y DMT (Discrete Multi-Tone), aunque finalmente los organismos deestandarizaci&oacute;n se decantaron por esta &uacute;ltima";
 choices[50][2] = "ADSL2+ es una evoluci&oacute;n del sistema ADSL y ADSL2 basado en la recomendaci&oacute;n de la ITU-T G.992.5,que posibilita adem&aacute;s el uso de modulaci&oacute;n WCDMA (Wide Code Division Multiple Access)";
 choices[50][3] = "El est&aacute;ndar ITU-T G.992.2, tambi&eacute;n denominado &quot;G.Lite&quot; o &quot;ADSL Lite&quot; es una variante de ADSL queproporciona menor caudal, pero tiene la ventaja de no requerir splitters";
 answers[50] = choices[50][2];
 units[50] = "107";
 comments[50] = "Id Pregunta: 4807. NULL";


//  Id pregunta: 5002 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  En las comunicaciones v&iacute;a sat&eacute;lite la transmisi&oacute;n de datos encapsulados sobre MPEG2 est&aacute; contemplada en lanorma del ETSI:";
 choices[51]= new Array();
 choices[51][0] = "ET 301-192";
 choices[51][1] = "ET 202-125";
 choices[51][2] = "ET 125-100";
 choices[51][3] = "ET 100-200";
 answers[51] = choices[51][0];
 units[51] = "105";
 comments[51] = "Id Pregunta: 5002. Examen TIC A 2007";


//  Id pregunta: 5012 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  ATM (&quot;Asynchronous Transfer Mode&quot;) emplea celdas:";
 choices[52]= new Array();
 choices[52][0] = "De tama&ntilde;o variable: entre 5 y 10 octetos de cabecera, m&aacute;s 46 octetos de informaci&oacute;n";
 choices[52][1] = "De tama&ntilde;o fijo : 5 octetos de cabecera, m&aacute;s 48 octetos de informaci&oacute;n";
 choices[52][2] = "De tama&ntilde;o fijo: 8 octetos de cabecera, m&aacute;s 58 octetos de informaci&oacute;n";
 choices[52][3] = "De tama&ntilde;o variable : 5 octetos de cabecera y entre 48 y 56 octetos de informaci&oacute;n";
 answers[52] = choices[52][1];
 units[52] = "109";
 comments[52] = "Id Pregunta: 5012. Examen TIC A 2007";


//  Id pregunta: 5038 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  &iquest;Cu&aacute;l de las siguientes alternativas NO se corresponde con el dise&ntilde;o b&aacute;sico de la arquitectura de un conmutadormultinivel Gigabit Ethernet?:";
 choices[53]= new Array();
 choices[53][0] = "Bus compartido.";
 choices[53][1] = "Memoria compartida.";
 choices[53][2] = "I/O compartida.";
 choices[53][3] = "Crossbar";
 answers[53] = choices[53][0];
 units[53] = "102";
 comments[53] = "Id Pregunta: 5038. Examen TIC A 2007";


//  Id pregunta: 5154 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  &iquest;Cu&aacute;les son los componentes primordiales de .NET Framework?";
 choices[54]= new Array();
 choices[54][0] = "ASP.net y ADO.net";
 choices[54][1] = "Common Language Runtime (CLR) y Clases Framework";
 choices[54][2] = "Common Language Specification (CLS) y Polimorfismo.";
 choices[54][3] = "Hypertext Markup Language (HTML) y Unified Modeling Language (UML)";
 answers[54] = choices[54][1];
 units[54] = "115";
 comments[54] = "Id Pregunta: 5154. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5568 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  &iquest;A qu&eacute; se dedica el grupo de trabajo 802.19 del IEEE?";
 choices[55]= new Array();
 choices[55][0] = "Grupo asesor en regulaci&oacute;n radioel&eacute;ctrica";
 choices[55][1] = "Grupo asesor en coexistencia de est&aacute;ndares 802";
 choices[55][2] = "Resilient Packet Ring";
 choices[55][3] = "Traspaso entre redes";
 answers[55] = choices[55][1];
 units[55] = "101";
 comments[55] = "Id Pregunta: 5568. ";


//  Id pregunta: 5570 AÃ±o de creación de pregunta: 2003-01-01
 questions[56]= "57)  &iquest;Qu&eacute; afirmaci&oacute;n sobre los puentes NO es correcta?";
 choices[56]= new Array();
 choices[56][0] = "Da servicio a un n&uacute;mero de ordenadores mayor que el que puede cubrirse con una red local";
 choices[56][1] = "Puede conectar redees heterog&eacute;neas";
 choices[56][2] = "Puede conectar medios f&iacute;sicos distintos";
 choices[56][3] = "Un problema en una subred afecta a toda la red";
 answers[56] = choices[56][3];
 units[56] = "102";
 comments[56] = "Id Pregunta: 5570. ";


//  Id pregunta: 5578 AÃ±o de creación de pregunta: 2003-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l de estas afirmaciones NO es correcta?";
 choices[57]= new Array();
 choices[57][0] = "La recomendaci&oacute;n aplicable para HDSL es la G991.1";
 choices[57][1] = "La recomendaci&oacute;n aplicable para ADSL-lite es G992.2";
 choices[57][2] = "La recomendaci&oacute;n aplicable para el ADSL2 es G992.3 y G992.4";
 choices[57][3] = "La recomendaci&oacute;n aplicable del SHDSL es la G992.1";
 answers[57] = choices[57][3];
 units[57] = "107";
 comments[57] = "Id Pregunta: 5578. NULL";


//  Id pregunta: 5836 AÃ±o de creación de pregunta: 2009-01-01
 questions[58]= "59)  De entre los est&aacute;ndares siguientes, &iquest;cu&aacute;l se corresponde con la tecnolog&iacute;a WLAN?";
 choices[58]= new Array();
 choices[58][0] = "802.11 del IEEE";
 choices[58][1] = "802.5 del IEEE";
 choices[58][2] = "802.8 del IEEE";
 choices[58][3] = "802.3 del IEEE";
 answers[58] = choices[58][0];
 units[58] = "107";
 comments[58] = "Id Pregunta: 5836. MAP 2008 A1";


//  Id pregunta: 5976 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  &iquest;Cu&aacute;l de los siguientes es un servidor web basado en software de c&oacute;digo abierto?";
 choices[59]= new Array();
 choices[59][0] = "Internet Information Server.";
 choices[59][1] = "Weblogic.";
 choices[59][2] = "Websphere.";
 choices[59][3] = "Apache.";
 answers[59] = choices[59][3];
 units[59] = "113";
 comments[59] = "Id Pregunta: 5976. TIC A 2009";


//  Id pregunta: 6050 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  La organizaci&oacute;n que publica los est&aacute;ndares sobre SNMP es:";
 choices[60]= new Array();
 choices[60][0] = "UIT-T";
 choices[60][1] = "IETF";
 choices[60][2] = "ISO/IEC";
 choices[60][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[60] = choices[60][1];
 units[60] = "104";
 comments[60] = "Id Pregunta: 6050. ";


//  Id pregunta: 6074 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  &iquest;Qui&eacute;n es el responsable del est&aacute;ndar DVB-T para la emisi&oacute;n de TDT?";
 choices[61]= new Array();
 choices[61][0] = "CEN/CENELEC";
 choices[61][1] = "ETSI";
 choices[61][2] = "UIT-T";
 choices[61][3] = "IEEE";
 answers[61] = choices[61][1];
 units[61] = "105";
 comments[61] = "Id Pregunta: 6074. ";


//  Id pregunta: 6185 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  Indique, cual de entre los siguientes elementos de un sistema de correo X.400 se corresponde con un servidor de correo:";
 choices[62]= new Array();
 choices[62][0] = "UA.";
 choices[62][1] = "MTA.";
 choices[62][2] = "GW.";
 choices[62][3] = "MS.";
 answers[62] = choices[62][1];
 units[62] = "106";
 comments[62] = "Id Pregunta: 6185. ";


//  Id pregunta: 7245 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  &iquest;A qu&eacute; se corresponde el RFC 793?";
 choices[63]= new Array();
 choices[63][0] = "Al protocolo FTP";
 choices[63][1] = "Al protocolo HTTP";
 choices[63][2] = "Al protocolo TCP";
 choices[63][3] = "Al protocolo IP";
 answers[63] = choices[63][2];
 units[63] = "100";
 comments[63] = "Id Pregunta: 7245. Examen TIC B 2009";


//  Id pregunta: 8249 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  Asumiendo que el cliente y el servidor se ejecutan en diferentes m&aacute;quinas, y considerando como local aquella m&aacute;quina con acceso a la pantalla y al teclado, la combinaci&oacute;n correcta respecto a Xwindows(X11) y Microsoft Terminal Server (TS) es:";
 choices[64]= new Array();
 choices[64][0] = "El cliente X11 y el cliente TS se ejecutan de manera local y el servidor X11 y el servidor TS de manera remota.";
 choices[64][1] = "El cliente X11 y el servidor TS se ejecutan de manera local y el servidor X11 y el cliente TS de manera remota.";
 choices[64][2] = "El servidor X11 y el cliente TS se ejecutan de manera local y el cliente X11 y el servidor TS de manera remota.";
 choices[64][3] = "El servidor X11 y el servidor TS se ejecutan de manera local y el cliente X11 y el cliente TS de manera remota.";
 answers[64] = choices[64][2];
 units[64] = "119";
 comments[64] = "Id Pregunta: 8249. Examen TIC A1 2010";


//  Id pregunta: 8294 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  Un socket necesita, para estar correctamente definido, especificar el protocolo de nivel de: ";
 choices[65]= new Array();
 choices[65][0] = "Enlace.";
 choices[65][1] = "Red.";
 choices[65][2] = "Transporte.";
 choices[65][3] = "Aplicaci&oacute;n.";
 answers[65] = choices[65][2];
 units[65] = "111";
 comments[65] = "Id Pregunta: 8294. Examen TIC A2 2010";


//  Id pregunta: 8308 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  &iquest;Cu&aacute;l es el acr&oacute;nimo del organismo responsable de definir toda la arquitectura de Internet? ";
 choices[66]= new Array();
 choices[66][0] = "IETF. ";
 choices[66][1] = "ICANN. ";
 choices[66][2] = "IAB. ";
 choices[66][3] = "IRTF.";
 answers[66] = choices[66][2];
 units[66] = "112,42";
 comments[66] = "Id Pregunta: 8308. Examen TIC A2 2010";


//  Id pregunta: 8474 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  &iquest;Cu&aacute;l de los siguientes modos de propagaci&oacute;n de la fibra &oacute;ptica permite un mayor alcance y capacidad?";
 choices[67]= new Array();
 choices[67][0] = "Monomodo";
 choices[67][1] = "Multimodo con salto de &iacute;ndice de refracci&oacute;n.";
 choices[67][2] = "Multimodo con &iacute;ndice de refracci&oacute;n gradual. ";
 choices[67][3] = "Ultramodo de alta dispersi&oacute;n modal.";
 answers[67] = choices[67][0];
 units[67] = "99";
 comments[67] = "Id Pregunta: 8474. Examen TIC A2 2010 interna";


//  Id pregunta: 8479 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  &iquest;Cu&aacute;l de las siguientes operaciones se incorpora en SNMP v2?";
 choices[68]= new Array();
 choices[68][0] = "SetRequest";
 choices[68][1] = "GetBulkRequest";
 choices[68][2] = "GetNextRequest";
 choices[68][3] = "Trap";
 answers[68] = choices[68][1];
 units[68] = "104";
 comments[68] = "Id Pregunta: 8479. Examen TIC A2 2010 interna";


//  Id pregunta: 8670 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  Un acceso RDSI primario consta de";
 choices[69]= new Array();
 choices[69][0] = "Dos canales B y un canal D";
 choices[69][1] = "Dos canales B y ning&uacute;n canal D";
 choices[69][2] = "Treinta canales B y un canal D";
 choices[69][3] = "Treinta canales B y dos canales D";
 answers[69] = choices[69][2];
 units[69] = "103";
 comments[69] = "Id Pregunta: 8670. Examen UPM A2 2011";


//  Id pregunta: 8680 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  a) A que componente del protocolo SIP corresponde la funci&oacute;n de &quot;aceptar peticiones de registros de usuarios y guardar la informaci&oacute;n de estas peticiones para suministrar un servicio de localizaci&oacute;n y traducci&oacute;n de direcciones en el dominio que controla&quot;:";
 choices[70]= new Array();
 choices[70][0] = "Proxy Server.";
 choices[70][1] = "Account Server.";
 choices[70][2] = "Redirect Server.";
 choices[70][3] = "Registrar Server.";
 answers[70] = choices[70][3];
 units[70] = "109";
 comments[70] = "Id Pregunta: 8680. Examen UPM A2 2011";


//  Id pregunta: 8685 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  &iquest;Qu&eacute; t&eacute;cnica de codificaci&oacute;n utiliza Bluetooth?:";
 choices[71]= new Array();
 choices[71][0] = "Spread spectrum con secuencia directa";
 choices[71][1] = "Spread spectrum con salto de frecuencia";
 choices[71][2] = "Spread spectrum con secuencia indirecta";
 choices[71][3] = "Spread spectrum sobre TCP/IP";
 answers[71] = choices[71][1];
 units[71] = "107";
 comments[71] = "Id Pregunta: 8685. Examen UPM A2 2011";


//  Id pregunta: 8787 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  &iquest;Qu&eacute; protocolo puede encontrar la direcci&oacute;n MAC de un computador, dada su direcci&oacute;n IP?";
 choices[72]= new Array();
 choices[72][0] = "RARP";
 choices[72][1] = "DHCP";
 choices[72][2] = "ARP";
 choices[72][3] = "Proxy RARP";
 answers[72] = choices[72][2];
 units[72] = "100";
 comments[72] = "Id Pregunta: 8787. Examen UPM A2 2011";


//  Id pregunta: 9015 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  &iquest;Qu&eacute; utilidad tiene en la transmisi&oacute;n por radio el pico de absorci&oacute;n del ox&iacute;geno en 60 Ghz?:";
 choices[73]= new Array();
 choices[73][0] = "Permite la propagaci&oacute;n por conductos .";
 choices[73][1] = "Permite la reutilizaci&oacute;n espacial de frecuencias en esa banda.";
 choices[73][2] = "Permite la propagaci&oacute;n por dispersi&oacute;n en esa banda.";
 choices[73][3] = "Ninguna de las anteriores";
 answers[73] = choices[73][1];
 units[73] = "108";
 comments[73] = "Id Pregunta: 9015. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9023 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  Para dimensionar los Centros de Atenci&oacute;n de Llamadas (Call Center) hay que tener en cuenta, a la hora de determinar el n&uacute;mero de operadores en una franja horaria:";
 choices[74]= new Array();
 choices[74][0] = "El n&uacute;mero de llamadas entrantes, y utilizar la f&oacute;rmula Erlang B.";
 choices[74][1] = "El n&uacute;mero de llamadas entrantes y su duraci&oacute;n, y utilizar la f&oacute;rmula Erlang C.";
 choices[74][2] = "En un Centro de Atenci&oacute;n de Llamadas el n&uacute;mero de enlaces es igual que el de agentes.";
 choices[74][3] = "Ninguna de las anteriores";
 answers[74] = choices[74][1];
 units[74] = "104";
 comments[74] = "Id Pregunta: 9023. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9048 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  Cu&aacute;l es la afirmaci&oacute;n correcta sobre IEEE 802";
 choices[75]= new Array();
 choices[75][0] = "802.8 es el grupo asesor de banda ancha";
 choices[75][1] = "802.7 es el grupo asesor en fibras &oacute;pticas";
 choices[75][2] = "802.10 era el grupo asesor en seguridad";
 choices[75][3] = "802.3 trata sobre el control l&oacute;gico de enlace";
 answers[75] = choices[75][2];
 units[75] = "107";
 comments[75] = "Id Pregunta: 9048. NULL";


//  Id pregunta: 9370 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  En una red metropolitana Ethernet basada en MPLS";
 choices[76]= new Array();
 choices[76][0] = "En la red del operador se transportan tramas de Ethernet sobre MPLS";
 choices[76][1] = "Las tramas de Ethernet se transportan sobre MPLS y en la red del operador se vuelve a utilizar Ethernet como tecnolog&iacute;a para el transporte de MPLS.";
 choices[76][2] = "En la salida de las diferentes redes de &aacute;rea local que componen la red metropolitana, se a&ntilde;ade una cabecera IP sobre la que se aplican las etiquetas MPLS.";
 choices[76][3] = "Ninguna de las respuestas es correcta.";
 answers[76] = choices[76][1];
 units[76] = "101";
 comments[76] = "Id Pregunta: 9370. ";


//  Id pregunta: 9393 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  Ordene, de menor a mayor velocidad m&aacute;xima de transmisi&oacute;n de datos, las siguientes tecnolog&iacute;as de comunicaciones m&oacute;viles:";
 choices[77]= new Array();
 choices[77][0] = "GSM, GPRS, EDGE, HSPA+.";
 choices[77][1] = "GSM. GPRS, UMTS, HSCSD.";
 choices[77][2] = "GSM, HSUPA, GPRS, UMTS.";
 choices[77][3] = "Ninguna de las respuestas es correcta.";
 answers[77] = choices[77][0];
 units[77] = "108";
 comments[77] = "Id Pregunta: 9393. Examen Teleco Ayto Madrid 2010.";


//  Id pregunta: 9467 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  En lo referente a la mensajer&iacute;a en Internet indique la afirmaci&oacute;n falsa:";
 choices[78]= new Array();
 choices[78][0] = "MIME se desarrolla en los RFCs 2045 a 2049";
 choices[78][1] = "Si un servidor que no soporta extensiones SMTP recibe un mensaje HELO, devuelve un error de sintaxis al emisor SMTP, quien deber&aacute; enviar en su lugar un mensaje de tipo EHLO";
 choices[78][2] = "El RFC 1870 permite a un receptor especificar el tama&ntilde;o m&aacute;ximo de mensaje que puede recibir";
 choices[78][3] = "El protocolo SMTP se apoya en el sistema de resoluci&oacute;n de nombres de dominio de Internet";
 answers[78] = choices[78][1];
 units[78] = "106";
 comments[78] = "Id Pregunta: 9467. ";


//  Id pregunta: 9515 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  &iquest;Cu&aacute;l es la estructura est&aacute;ndar de una directiva JSP?";
 choices[79]= new Array();
 choices[79][0] = "&lt;@ directiva atributo1=&quot;valor1&quot; atributo2=&quot;valor2&quot;...&gt;";
 choices[79][1] = "&lt;%@ directiva atributo1=&quot;valor1&quot; atributo2=&quot;valor2&quot;...%&gt;";
 choices[79][2] = "&lt;!@ directiva atributo1=&quot;valor1&quot; atributo2=&quot;valor2&quot;...&gt;";
 choices[79][3] = "&lt;*@ directiva atributo1=&quot;valor1&quot; atributo2=&quot;valor2&quot;...*&gt;";
 answers[79] = choices[79][1];
 units[79] = "116";
 comments[79] = "Id Pregunta: 9515. NULL";


//  Id pregunta: 9525 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  Se&ntilde;ale la afimaci&oacute;n falsa con respecto al protocolo H.245:";
 choices[80]= new Array();
 choices[80][0] = "Es un protocolo para el control multimedia de las llamadas";
 choices[80][1] = "S&oacute;lo lo utiliza el protocolo H.323";
 choices[80][2] = "A parte del protocolo H.323, lo utilizan otros protocolos (como por ejemplo el protocolo H.234)";
 choices[80][3] = "Es un protocolo de gesti&oacute;n y control";
 answers[80] = choices[80][1];
 units[80] = "117";
 comments[80] = "Id Pregunta: 9525. NULL";


//  Id pregunta: 9529 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  Un valor 3 en la escala MOS (Mean Opinion Score) indica que la calidad de la se&ntilde;al es:";
 choices[81]= new Array();
 choices[81][0] = "Adecuada";
 choices[81][1] = "Pobre";
 choices[81][2] = "Buena";
 choices[81][3] = "Ninguna de las anteriores es correcta";
 answers[81] = choices[81][0];
 units[81] = "117";
 comments[81] = "Id Pregunta: 9529. NULL";


//  Id pregunta: 9848 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  Indique cu&aacute;l de las siguientes afirmaciones relacionadas con IPsec es FALSA:";
 choices[82]= new Array();
 choices[82][0] = "IPv6 incluye expl&iacute;citamente la posibilidad de utilizarlo.";
 choices[82][1] = "Puede operar en modo t&uacute;nel o en modo transporte.";
 choices[82][2] = "El protocolo AH proporciona confidencialidad.";
 choices[82][3] = "El protocolo ESP proporciona autenticaci&oacute;n.";
 answers[82] = choices[82][2];
 units[82] = "111";
 comments[82] = "Id Pregunta: 9848. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Extremadura 2014";


//  Id pregunta: 9851 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  &iquest;Qu&eacute; es SAML?";
 choices[83]= new Array();
 choices[83][0] = "Un est&aacute;ndar abierto que define un esquema para el intercambio de datos de autenticaci&oacute;n y autorizaci&oacute;n.";
 choices[83][1] = "Un servicio proveedor de identidades.";
 choices[83][2] = "Un protocolo para la verificaci&oacute;n de identidades.";
 choices[83][3] = "Un software de definici&oacute;n de autoridades.";
 answers[83] = choices[83][0];
 units[83] = "118";
 comments[83] = "Id Pregunta: 9851. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Extremadura 2014";


//  Id pregunta: 9938 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  &iquest;Cu&aacute;l es la principal raz&oacute;n por la que en las comunicaciones UMTS y Wi-Fi seutilizan t&eacute;cnicas de expansi&oacute;n del espectro o espectro ensanchado?";
 choices[84]= new Array();
 choices[84][0] = "Para mejorar la resistencia a las interferencias.";
 choices[84][1] = "Para mejorar las seguridad en el acceso al informaci&oacute;n transmitida.";
 choices[84][2] = "Para incrementar la longitud de onda y reducir el consumo energ&eacute;tico.";
 choices[84][3] = "Wi-Fi no utiliza estas t&eacute;cnicas.";
 answers[84] = choices[84][0];
 units[84] = "107, 108";
 comments[84] = "Id Pregunta: 9938. TIC A1, Examen 2013";


//  Id pregunta: 9996 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  &iquest;Cu&aacute;l de los siguientes NO es un modelo de reparto del espectro utilizado por GSM (Global System for Mobile communications)?";
 choices[85]= new Array();
 choices[85][0] = "SDMA, Space Division Multiple Access o acceso m&uacute;ltiple por divisi&oacute;n delespacio.";
 choices[85][1] = "TDMA, Time Division Multiple Access, o acceso m&uacute;ltiple por divisi&oacute;n deltiempo.";
 choices[85][2] = "CDMA, Cell Division Multiple Access o acceso m&uacute;ltiple por divisi&oacute;n entreceldas.";
 choices[85][3] = "FHMA, Frequency Hops Multiple Access o acceso m&uacute;ltiple por saltos defrecuencia.";
 answers[85] = choices[85][2];
 units[85] = "108";
 comments[85] = "Id Pregunta: 9996. ";


//  Id pregunta: 10025 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Se&ntilde;ale cu&aacute;l de las siguientes opciones se ajusta a la siguiente definici&oacute;n: plataforma basada en Java que permite crear rich internet applications (RIA) que se comportan de la misma forma en distintas plataformas:";
 choices[86]= new Array();
 choices[86][0] = "Flex";
 choices[86][1] = "JavaFX";
 choices[86][2] = "AJAX";
 choices[86][3] = "Silverlight";
 answers[86] = choices[86][1];
 units[86] = "116";
 comments[86] = "Id Pregunta: 10025. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10027 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  Elija la respuesta correcta:";
 choices[87]= new Array();
 choices[87][0] = "La JavaServer Pages Standard Tag Library (JSTL) es una colecci&oacute;n de bibliotecas de etiquetas con utilidades ampliamente utilizadas en el desarrollo de p&aacute;ginas web.";
 choices[87][1] = "Apache Struts es un framework de desarrollo bajo el modelo vista controlador que sirve para crear Aplicaciones web con Smalltalk.";
 choices[87][2] = "El Unified Expression Language (EL) integra los JSP con los servlets.";
 choices[87][3] = "Los Applets y las Java Server Pages (JSPs) son dos m&eacute;todos de creaci&oacute;n de p&aacute;ginas web din&aacute;micas en servidor usando el lenguaje Java.";
 answers[87] = choices[87][0];
 units[87] = "115";
 comments[87] = "Id Pregunta: 10027. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10204 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  Indique qu&eacute; afirmaci&oacute;n es falsa en relaci&oacute;n a la tecnolog&iacute;a 4G de comunicaciones m&oacute;viles";
 choices[88]= new Array();
 choices[88][0] = "Su arquitectura de red, EPS (Evolved Packet System), est&aacute; formada por el n&uacute;cleo de red EPC (Evolved Packet Core) y la red de acceso LTE, conocida como E-UTRAN";
 choices[88][1] = "Desaparece el RNC (Radio Network Controller) y sus funciones se incorporan al eNode B (Evolved Node B)";
 choices[88][2] = "Desaparecen los soft handovers y solo existen hard handovers";
 choices[88][3] = "Mantiene en su arquitectura los HLR (Home Locationl Register) usados desde GSM";
 answers[88] = choices[88][3];
 units[88] = "108";
 comments[88] = "Id Pregunta: 10204. En la arquitectura se introduce un nuevo elemento llamado HSS (Home Subscriber Server) basado en la antigua HLR y AuC";


//  Id pregunta: 10297 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  En SNMP &iquest;qu&eacute; puerto utilizan las traps y en qu&eacute; sentido se transmiten?";
 choices[89]= new Array();
 choices[89][0] = "Puerto 162 y las env&iacute;a el agente al gestor.";
 choices[89][1] = "Puerto 162 y las env&iacute;a el gestor al agente.";
 choices[89][2] = "Puerto 161 y las env&iacute;a el agente al gestor.";
 choices[89][3] = "Puerto 161 y las env&iacute;a el gestor al agente.";
 answers[89] = choices[89][0];
 units[89] = "104";
 comments[89] = "Id Pregunta: 10297. TIC A2, libre, examen 2013";


//  Id pregunta: 10322 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  &iquest;Cual lenguage escoger&iacute;a para desarrollar la capa de presentaci&oacute;n?";
 choices[90]= new Array();
 choices[90][0] = "Pl/sql";
 choices[90][1] = "Queryscript";
 choices[90][2] = "Jquery";
 choices[90][3] = "PyScripter";
 answers[90] = choices[90][2];
 units[90] = "114";
 comments[90] = "Id Pregunta: 10322. PyScripter es un entorno de desarrollo, no un lenguaje";


//  Id pregunta: 10656 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;Seg&uacute;n la Ley 9/2014, cu&aacute;ndo finaliza el per&iacute;odo por el que se otorgan los derechos de uso privativo del dominio p&uacute;blico radioel&eacute;ctrico sin limitaci&oacute;n de n&uacute;mero?";
 choices[91]= new Array();
 choices[91][0] = "El 31 de diciembre del a&ntilde;o natural en que cumplan su quinto a&ntilde;o de vigencia.";
 choices[91][1] = "A los 20 a&ntilde;os desde el otorgamiento.";
 choices[91][2] = "El 31 de noviembre del a&ntilde;o natural en que cumplan su quinto a&ntilde;o de vigencia.";
 choices[91][3] = "A los cinco a&ntilde;os desde el otorgamiento.";
 answers[91] = choices[91][0];
 units[91] = "110";
 comments[91] = "Id Pregunta: 10656. ";


//  Id pregunta: 10666 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Single Sign-on...";
 choices[92]= new Array();
 choices[92][0] = "&hellip; es un procedimiento de autenticaci&oacute;n que habilita al usuario para acceder a varios sistemas con una sola instancia de identificaci&oacute;n.";
 choices[92][1] = "&hellip; un conjunto de librer&iacute;as open source para identidades federadas.";
 choices[92][2] = "&hellip; una especificaci&oacute;n de mensajes SAML.";
 choices[92][3] = "&hellip; es una informaci&oacute;n almacenada en el navegador del usuario para su consulta posterior.";
 answers[92] = choices[92][0];
 units[92] = "118";
 comments[92] = "Id Pregunta: 10666. ";


//  Id pregunta: 11324 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  De las siguientes definiciones, seleccione la correcta para la definici&oacute;n de ARP";
 choices[93]= new Array();
 choices[93][0] = "Es un protocolo de nivel de enlace responsable de encontrar la direcci&oacute;n hardware (MAC)";
 choices[93][1] = "Es un protocolo de nivel de RED responsable de encontrar la direcci&oacute;n hardware (MAC)";
 choices[93][2] = "Es un protocolo de nivel de enlace responsable de encontrar la direcci&oacute;n de red (IP)";
 choices[93][3] = "Es un protocolo de nivel de red responsable de encontrar la direcci&oacute;n de red (IP)";
 answers[93] = choices[93][0];
 units[93] = "113";
 comments[93] = "Id Pregunta: 11324. ";


//  Id pregunta: 11354 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  En cuanto a la segmentaci&oacute;n de dominios en una red se&ntilde;ale la verdadera";
 choices[94]= new Array();
 choices[94][0] = "Un switch segmenta dominios de colisi&oacute;n y de broadcast";
 choices[94][1] = "En una VLAN, un switch segmenta dominios de colisi&oacute;n de manera f&iacute;sica y de broadcast de manera l&oacute;gica";
 choices[94][2] = "Un router segmenta dominios de broadcast de manera f&iacute;sica";
 choices[94][3] = "En una VLAN, un switch segmenta dominios de colisi&oacute;n y de broadcast de manera f&iacute;sica";
 answers[94] = choices[94][2];
 units[94] = "102";
 comments[94] = "Id Pregunta: 11354. ";


//  Id pregunta: 11430 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Seg&uacute;n la Ley 9/2014, &iquest;a qui&eacute;n corresponde la elaboraci&oacute;n y aprobaci&oacute;n de los planes de utilizaci&oacute;n del espectro?";
 choices[95]= new Array();
 choices[95][0] = "CNMC.";
 choices[95][1] = "MINETUR.";
 choices[95][2] = "Gobierno.";
 choices[95][3] = "SETSI.";
 answers[95] = choices[95][2];
 units[95] = "110";
 comments[95] = "Id Pregunta: 11430. ";


//  Id pregunta: 11472 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Seg&uacute;n la Ley 9/2014, se&ntilde;ale la respuesta CORRECTA (facultades del Gobierno):";
 choices[96]= new Array();
 choices[96][0] = "Elaborar y aprobar planes de utilizaci&oacute;n del espectro.";
 choices[96][1] = "Determinaci&oacute;n, control e inspecci&oacute;n de los niveles de emisi&oacute;n.";
 choices[96][2] = "Determinar el operador del servicio universal.";
 choices[96][3] = "Todas son atribuciones del Gobierno.";
 answers[96] = choices[96][2];
 units[96] = "110";
 comments[96] = "Id Pregunta: 11472. ";


//  Id pregunta: 11476 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Seg&uacute;n la Ley 9/2014, el cambio de operador con conservaci&oacute;n del n&uacute;mero:";
 choices[97]= new Array();
 choices[97][0] = "Es un derecho del abonado, pero adem&aacute;s el operador puede transferirle a otro operador sin su consentimiento.";
 choices[97][1] = "Es un derecho del abonado, aunque el operador podr&aacute; rechazar dicho cambio.";
 choices[97][2] = "Es un derecho del abonado que el operador debe realizar en el plazo m&iacute;nimo de un d&iacute;a laborable.";
 choices[97][3] = "EL retraso por parte del operador no da derecho al abonado a obtener compensaci&oacute;n.";
 answers[97] = choices[97][2];
 units[97] = "110";
 comments[97] = "Id Pregunta: 11476. ";


//  Id pregunta: 11669 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Con respecto a WCF, se&ntilde;ale la incorrecta:";
 choices[98]= new Array();
 choices[98][0] = "Los servicios WCF pueden ejecutarse sobre TCP.";
 choices[98][1] = "WCF son las siglas de Windows Communication Foundation.";
 choices[98][2] = "WCF usa siempre SOAP.";
 choices[98][3] = "Las tres anteriores son ciertas.";
 answers[98] = choices[98][2];
 units[98] = "115";
 comments[98] = "Id Pregunta: 11669. ";


//  Id pregunta: 11716 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Cuantos mensajes se intercambian durante el proceso de terminaci&oacute;n de la sesi&oacute;n TCP entre el cliente y el servidor?";
 choices[99]= new Array();
 choices[99][0] = "2";
 choices[99][1] = "4";
 choices[99][2] = "6";
 choices[99][3] = "8";
 answers[99] = choices[99][1];
 units[99] = "102";
 comments[99] = "Id Pregunta: 11716. NULL";


