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

//  Id pregunta: 776 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  En telecomunicaciones, EFT son las siglas de:";
 choices[0]= new Array();
 choices[0][0] = "Enhanced Fiber Transmission, Transmisi&oacute;n mejorada por fibra &oacute;ptica";
 choices[0][1] = "Electronic Funds Transfer, Transferencia electr&oacute;nica de fondos";
 choices[0][2] = "Enhanced File Transfer, Transmisi&oacute;n mejorada de ficheros";
 choices[0][3] = "Electronic Forms Transfer, Transferencia electr&oacute;nica de formularios";
 answers[0] = choices[0][1];
 units[0] = "70";
 comments[0] = "Id Pregunta: 776. NULL";


//  Id pregunta: 1383 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  Un servicio de directorio:";
 choices[1]= new Array();
 choices[1][0] = "Es una base de datos, orientada a consulta, con replicaci&oacute;n, y estructura jer&aacute;rquica";
 choices[1][1] = "Puede ser utilizado como un repositorio para guardar la informaci&oacute;n de los usuarios";
 choices[1][2] = "Puede ser utilizado como medio de autenticaci&oacute;n en sistemas heterogeneos";
 choices[1][3] = "Todas las respuestas anteriores son ciertas";
 answers[1] = choices[1][3];
 units[1] = "106";
 comments[1] = "Id Pregunta: 1383. ";


//  Id pregunta: 1506 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  Los servicios que ofrece  el protocolo SET (Secure Electronico Transaction) son:";
 choices[2]= new Array();
 choices[2][0] = "Autenticaci&oacute;n, disponibilidad, integridad y gesti&oacute;n de pago";
 choices[2][1] = "Autenticaci&oacute;n, confidencialidad, integridad y gesti&oacute;n de pago";
 choices[2][2] = "Disponibilidad, confidencialidad, autenticaci&oacute;n y gesti&oacute;n de pago";
 choices[2][3] = "Autenticaci&oacute;n, integridad, disponibilidad y confidencialidad";
 answers[2] = choices[2][1];
 units[2] = "70";
 comments[2] = "Id Pregunta: 1506. NULL";


//  Id pregunta: 1839 AÃ±o de creación de pregunta: 2006-01-01
 questions[3]= "4)  &iquest;A qu&eacute; hacen referencia las siglas NRC en un sistema de pasarela de pagos?";
 choices[3]= new Array();
 choices[3][0] = "N&uacute;mero de Registro de Control";
 choices[3][1] = "N&uacute;mero de Referencia de Control";
 choices[3][2] = "N&uacute;mero de Referencia Completo";
 choices[3][3] = "N&uacute;mero de Registro Completo";
 answers[3] = choices[3][2];
 units[3] = "70";
 comments[3] = "Id Pregunta: 1839. NULL";


//  Id pregunta: 2713 AÃ±o de creación de pregunta: 2003-01-01
 questions[4]= "5)  &iquest;Cu&aacute;l fue el primer navegador web?";
 choices[4]= new Array();
 choices[4][0] = "Explorer One";
 choices[4][1] = "Netscape";
 choices[4][2] = "Gopher";
 choices[4][3] = "Mosaic";
 answers[4] = choices[4][3];
 units[4] = "112";
 comments[4] = "Id Pregunta: 2713. ";


//  Id pregunta: 2884 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  La entidad p&uacute;blica empresarial Red.es tiene como misi&oacute;n:";
 choices[5]= new Array();
 choices[5][0] = "la gesti&oacute;n de registros de nombres y direcciones de dominio de internet bajo el c&oacute;digo de pa&iacute;s &quot;.es&quot; correspondiente a Espa&ntilde;a";
 choices[5][1] = "la de observar la evoluci&oacute;n del sector de las telecomunicaciones y de la sociedad de la informaci&oacute;n";
 choices[5][2] = "el asesoramiento a la Administraci&oacute;n General del Estado en materias TIC";
 choices[5][3] = "Todas las anteriores respuestas son correctas";
 answers[5] = choices[5][3];
 units[5] = "112";
 comments[5] = "Id Pregunta: 2884. ";


//  Id pregunta: 2934 AÃ±o de creación de pregunta: 2004-01-01
 questions[6]= "7)  &iquest;Qu&eacute; protocolo de correo permite acceder al correo electr&oacute;nico, manteniendo los mensajes en el servidor, de forma que pueda accederse al correo desde distintos terminales?";
 choices[6]= new Array();
 choices[6][0] = "POP-3";
 choices[6][1] = "SMTP";
 choices[6][2] = "IMAP";
 choices[6][3] = "MIME";
 answers[6] = choices[6][2];
 units[6] = "106";
 comments[6] = "Id Pregunta: 2934. Similar a examen TIC MAP A 2004";


//  Id pregunta: 3000 AÃ±o de creación de pregunta: 2004-01-01
 questions[7]= "8)  LDAP ( Lightweght Directory Access Protocol):";
 choices[7]= new Array();
 choices[7][0] = "Surge como evoluci&oacute;n del protocolo DAP  (Directory Access Protocol). LDAP es un protocolo a nivel de aplicaci&oacute;n, por lo que tanto el cliente como el servidor deben implementar completamente la torre de protocolos OSI";
 choices[7][1] = "Surge como alternativa al DAP y utiliza TCP/IP en lugar de los protocolos OSI, lo cu&aacute;l es una ventaja ya que TCP/IP requiere menos recursos y est&aacute; m&aacute;s disponible, especialmente en ordenadores de sobremesa.";
 choices[7][2] = "Abandona el modelo cliente/servidor de implementaci&oacute;n, de modo que una aplicaci&oacute;n que desea acceder al directorio lo hace directamente contra la base de datos cuyo esquema est&aacute; disponible (ISO 9594)";
 choices[7][3] = "Es un servicio de directorio centralizado frente a los modelos distribuidos donde los datos podr&iacute;an estar fraccionados y/o replicados. As&iacute; pues con LDAP un &uacute;nico servidor da todo el servicio de directorio respondiendo a todas las consultas de los clientes";
 answers[7] = choices[7][1];
 units[7] = "106";
 comments[7] = "Id Pregunta: 3000. ";


//  Id pregunta: 3008 AÃ±o de creación de pregunta: 2004-01-01
 questions[8]= "9)  &iquest;Es admisible cierto grado de inconsistencia temporal en la informaci&oacute;n dado sistemas como X.500 o LDAP?";
 choices[8]= new Array();
 choices[8][0] = "S&iacute;";
 choices[8][1] = "No";
 choices[8][2] = "S&iacute;, pero s&oacute;lo para LDAP";
 choices[8][3] = "ninguna de las anteriores";
 answers[8] = choices[8][0];
 units[8] = "106";
 comments[8] = "Id Pregunta: 3008. ";


//  Id pregunta: 3049 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Qu&eacute; es GOPHER?:";
 choices[9]= new Array();
 choices[9][0] = "Un protocolo de comunicaci&oacute;n entre redes Ethernet";
 choices[9][1] = "Un sistema operativo multitarea y multipuesto desarrollado por NeXT";
 choices[9][2] = "Un sistema disponible en Internet para b&uacute;squeda y transmisi&oacute;n de ficheros";
 choices[9][3] = "Nada de lo anterior";
 answers[9] = choices[9][2];
 units[9] = "112";
 comments[9] = "Id Pregunta: 3049. ";


//  Id pregunta: 3071 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  IRC es:";
 choices[10]= new Array();
 choices[10][0] = "Internet Relay Chat";
 choices[10][1] = "InfraRed Channel";
 choices[10][2] = "Investigation Resource Commitee";
 choices[10][3] = "Internet Resource Commitee";
 answers[10] = choices[10][0];
 units[10] = "112";
 comments[10] = "Id Pregunta: 3071. ";


//  Id pregunta: 3089 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Se dice que una tarea o rutina es as&iacute;ncrona cuando:";
 choices[11]= new Array();
 choices[11][0] = "Gestiona un enlace de terminales 'tontos'";
 choices[11][1] = "Lanza una transacci&oacute;n a un terminal as&iacute;ncrono y espera su contestaci&oacute;n";
 choices[11][2] = "La tarea que la lanza no espera a su terminaci&oacute;n para continuar";
 choices[11][3] = "Son rutinas especializadas de los Sistemas de Tiempo Real dedicadas a la supervis&oacute;n de eventos en los elementos anal&oacute;gicos que controlan";
 answers[11] = choices[11][2];
 units[11] = "112";
 comments[11] = "Id Pregunta: 3089. ";


//  Id pregunta: 3105 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Respecto a los buscadores de internet:";
 choices[12]= new Array();
 choices[12][0] = "los basados en el modelo enciclopedia clasifican las p&aacute;ginas seg&uacute;n su contenido sint&aacute;ctico";
 choices[12][1] = "los basados en palabras clave construyen tablas o &iacute;ndices inversos a partir de las palabras clave de un texto";
 choices[12][2] = "los metabuscadores, al usar varios buscadores simult&aacute;neamente, son mejores que todos los buscadores que usan juntos";
 choices[12][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[12] = choices[12][1];
 units[12] = "112";
 comments[12] = "Id Pregunta: 3105. ";


//  Id pregunta: 3150 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto de la seguridad en el correo electr&oacute;nico?:";
 choices[13]= new Array();
 choices[13][0] = "Los usuarios MOSS y PEM necesitan certificados X.509";
 choices[13][1] = "PEM requiere que primero se firme el contenido del correo electr&oacute;nico y, a continuaci&oacute;n, se encripte";
 choices[13][2] = "PEM restringe su uso al entorno texto";
 choices[13][3] = "La extension de PEM con MIME se denomina MOSS";
 answers[13] = choices[13][0];
 units[13] = "106";
 comments[13] = "Id Pregunta: 3150. ";


//  Id pregunta: 3152 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto del correo electr&oacute;nico?:";
 choices[14]= new Array();
 choices[14][0] = "Seg&uacute;n MIME los textos se codifican en 7 bits";
 choices[14][1] = "MIME puede encapsular datos EDI";
 choices[14][2] = "SMTP no soporta servicios de seguridad";
 choices[14][3] = "MIME proporciona seguridad";
 answers[14] = choices[14][3];
 units[14] = "106";
 comments[14] = "Id Pregunta: 3152. ";


//  Id pregunta: 3223 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  &iquest;Cu&aacute;l de los siguientes m&oacute;dulos no pertenece al  est&aacute;ndar de correo electr&oacute;nico X.400?:";
 choices[15]= new Array();
 choices[15][0] = "Agente de usuario";
 choices[15][1] = "Agente de transferencia de mensajes";
 choices[15][2] = "Agente de usuario remoto";
 choices[15][3] = "Agente de correo extendido";
 answers[15] = choices[15][3];
 units[15] = "106";
 comments[15] = "Id Pregunta: 3223. ";


//  Id pregunta: 3232 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  &iquest;Cu&aacute;l de los siguientes protocolos de servicios de Internet corresponde al que se encarga de recoger el correo del buz&oacute;n de usuario de la m&aacute;quina servidora y lo trae a un directorio del disco duro del PC del usuario?:";
 choices[16]= new Array();
 choices[16][0] = "POP3";
 choices[16][1] = "SMTP";
 choices[16][2] = "X.400";
 choices[16][3] = "MIME";
 answers[16] = choices[16][0];
 units[16] = "106";
 comments[16] = "Id Pregunta: 3232. ";


//  Id pregunta: 3234 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  &iquest;Cu&aacute;l de los siguientes protocolos no pertenece a la capa de aplicaci&oacute;n en la arquitectura TCP/IP?:";
 choices[17]= new Array();
 choices[17][0] = "SLIP";
 choices[17][1] = "SMTP";
 choices[17][2] = "DNS";
 choices[17][3] = "RPC";
 answers[17] = choices[17][0];
 units[17] = "100, 106, 116, 112";
 comments[17] = "Id Pregunta: 3234. ";


//  Id pregunta: 3303 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  &iquest;Qu&eacute; organismo se encarga directamente de asignar los puertos en Internet, que son precisos a la hora de especificar los est&aacute;ndares?:";
 choices[18]= new Array();
 choices[18][0] = "IETF";
 choices[18][1] = "IESG";
 choices[18][2] = "ITU-T";
 choices[18][3] = "ICANN";
 answers[18] = choices[18][3];
 units[18] = "100,112";
 comments[18] = "Id Pregunta: 3303. ";


//  Id pregunta: 3329 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  Abilene es:";
 choices[19]= new Array();
 choices[19][0] = "el nombre con el que se conoce en la comunidad cient&iacute;fica a Internet2";
 choices[19][1] = "un proyecto de red troncal de altas prestaciones que interconecta GigaPops y que da apoyo al proyecto Internet2 ";
 choices[19][2] = "un nuevo est&aacute;ndar con el que se pretende implantar IPv6 progresivamente sustituyendo a IPv4";
 choices[19][3] = "una entidad de I+D a nivel mundial encargada del desarrollo de tecnolog&iacute;a inal&aacute;mbrica para comunicaciones a nivel interestelar";
 answers[19] = choices[19][1];
 units[19] = "112";
 comments[19] = "Id Pregunta: 3329. ";


//  Id pregunta: 3343 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Con voz sobre IP:";
 choices[20]= new Array();
 choices[20][0] = "Se alcanza la misma calidad que con llamadas telef&oacute;nicas convencionales";
 choices[20][1] = "Se pueden realizar llamadas internacionales al mismo precio que una llamada local, el precio de la conexi&oacute;n con el nodo de acceso a Internet";
 choices[20][2] = "Las 2 respuestas anteriores son correctas";
 choices[20][3] = "Las 2 respuestas anteriores son falsas";
 answers[20] = choices[20][2];
 units[20] = "112";
 comments[20] = "Id Pregunta: 3343. *";


//  Id pregunta: 3366 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  Dentro de las normas X.400, &iquest;a qu&eacute; corresponde el protocolo P2?:";
 choices[21]= new Array();
 choices[21][0] = "Es el protocolo que se establece entre dos agentes de transferencia de mensajes";
 choices[21][1] = "Es el protocolo que se establece entre el agente de usuario y el agente de transferencia de mensajes";
 choices[21][2] = "Es el protocolo que se establece entre dos agentes de usuario";
 choices[21][3] = "Es el protocolo que se establece entre el agente de usuario y el almacen de mensajes";
 answers[21] = choices[21][2];
 units[21] = "106";
 comments[21] = "Id Pregunta: 3366. ";


//  Id pregunta: 3380 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  El localizador de recursos, URL, tiene como formato general:";
 choices[22]= new Array();
 choices[22][0] = "m&eacute;todo:/servidor[:puerto]//directorio/fichero";
 choices[22][1] = "servidor://m&eacute;todo[:puerto]//directorio/fichero";
 choices[22][2] = "m&eacute;todo://servidor[:puerto]/directorio/fichero";
 choices[22][3] = "m&eacute;todo://servidor[:direcci&oacute;n:puerto]/directorio/fichero";
 answers[22] = choices[22][2];
 units[22] = "112";
 comments[22] = "Id Pregunta: 3380. ";


//  Id pregunta: 3465 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  El puerto 53 es usado com&uacute;nmente en internet para el protocolo:";
 choices[23]= new Array();
 choices[23][0] = "DNS";
 choices[23][1] = "HTTP";
 choices[23][2] = "FTP ";
 choices[23][3] = "Telnet";
 answers[23] = choices[23][0];
 units[23] = "112";
 comments[23] = "Id Pregunta: 3465. ";


//  Id pregunta: 3470 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  El servicio de directorio definido por la ITU-T:";
 choices[24]= new Array();
 choices[24][0] = "Se incluye en casi todos los sistemas de correo electr&oacute;nico para consultar las direcciones de los usuarios existentes en la red";
 choices[24][1] = "Se especifica en el est&aacute;ndar X.600 del ITU";
 choices[24][2] = "Es soportado por un sistema de ficheros en red";
 choices[24][3] = "Se ha definido como un conjunto de modelos, servicios y protocolos accesibles a nivel mundial en forma independiente de la aplicaci&oacute;n";
 answers[24] = choices[24][3];
 units[24] = "106";
 comments[24] = "Id Pregunta: 3470. ";


//  Id pregunta: 3565 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  En un mensaje de correo electr&oacute;nico cifrado, seg&uacute;n el protocolo S-MIME,  se reciben cifrados:";
 choices[25]= new Array();
 choices[25][0] = "La direcci&oacute;n de correo electr&oacute;nico del destinatario y la direcci&oacute;n de correo electr&oacute;nico del remitente";
 choices[25][1] = "El cuerpo del mensaje y sus archivos adjuntos";
 choices[25][2] = "La &quot;traza&quot; del mensaje (servidores SMTP por los que ha sido encaminado)";
 choices[25][3] = "El asunto del mensaje, el tipo de contenido y la fecha";
 answers[25] = choices[25][1];
 units[25] = "106";
 comments[25] = "Id Pregunta: 3565. ";


//  Id pregunta: 3588 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  La autoridad de nombres y direcciones de Internet es:";
 choices[26]= new Array();
 choices[26][0] = "ICANN";
 choices[26][1] = "RIPE";
 choices[26][2] = "IETF";
 choices[26][3] = "NIC";
 answers[26] = choices[26][0];
 units[26] = "112";
 comments[26] = "Id Pregunta: 3588. ";


//  Id pregunta: 3622 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  La norma X400 de la ITU-T se refiere a:";
 choices[27]= new Array();
 choices[27][0] = "Servicios de directorio";
 choices[27][1] = "Correo electr&oacute;nico";
 choices[27][2] = "Interfaz RS-232";
 choices[27][3] = "Interfaz de comunicaci&oacute;n de paquetes";
 answers[27] = choices[27][1];
 units[27] = "106";
 comments[27] = "Id Pregunta: 3622. ";


//  Id pregunta: 3725 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  Los mensajes de respuesta HTTP de c&oacute;digo 5xx se corresponden con:";
 choices[28]= new Array();
 choices[28][0] = "error en el cliente";
 choices[28][1] = "redirecci&oacute;n por cambio de ubicaci&oacute;n del objeto pedido";
 choices[28][2] = "error en el servidor";
 choices[28][3] = "petici&oacute;n con &eacute;xito";
 answers[28] = choices[28][2];
 units[28] = "112";
 comments[28] = "Id Pregunta: 3725. ";


//  Id pregunta: 3748 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  Mbone es:";
 choices[29]= new Array();
 choices[29][0] = "una versi&oacute;n avanzada de Internet 2";
 choices[29][1] = "un backbone especializado en tranmisi&oacute;n de datos multimedia s&oacute;lo en tiempo real";
 choices[29][2] = "el backbone que une todas las dependencias del MIT para intercambio de informaci&oacute;n cient&iacute;fica y tecnol&oacute;gica";
 choices[29][3] = "una red virtual sobre porciones de internet con islas IP multicast";
 answers[29] = choices[29][3];
 units[29] = "112";
 comments[29] = "Id Pregunta: 3748. ";


//  Id pregunta: 3808 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  Seg&uacute;n la norma X.400, &iquest;de cu&aacute;ntas partes consta un mensaje interpersonal (IM)?:";
 choices[30]= new Array();
 choices[30][0] = "Una";
 choices[30][1] = "Dos";
 choices[30][2] = "Tres";
 choices[30][3] = "Tantas como tipos de informaci&oacute;n contenga el mensaje";
 answers[30] = choices[30][1];
 units[30] = "106";
 comments[30] = "Id Pregunta: 3808. ";


//  Id pregunta: 3877 AÃ±o de creación de pregunta: 2003-01-01
 questions[31]= "32)  &iquest;Cu&aacute;l de los siguientes servicios de telecomunicaciones no es de valor a&ntilde;adido?:";
 choices[31]= new Array();
 choices[31][0] = " Correo vocal.";
 choices[31][1] = " Servicios de transmisi&oacute;n de datos con conmutaci&oacute;n de circuitos.";
 choices[31][2] = "Intercambio electr&oacute;nico de datos.";
 choices[31][3] = "Almacenamiento y recuperaci&oacute;n de datos en l&iacute;nea.";
 answers[31] = choices[31][1];
 units[31] = "112";
 comments[31] = "Id Pregunta: 3877. Junta Andaluc&iacute;a";


//  Id pregunta: 3969 AÃ±o de creación de pregunta: 2003-01-01
 questions[32]= "33)  Un &quot;proxy&quot; o apoderado de HTTP empleado para la conexi&oacute;n de usuarios de una organizaci&oacute;n a Internet:";
 choices[32]= new Array();
 choices[32][0] = "S&oacute;lo permite controlar qui&eacute;nes pueden acceder y a qu&eacute; servidores";
 choices[32][1] = "Es un elemento de seguridad";
 choices[32][2] = "Esencialmente sirve para mejorar los tiempos de acceso a Internet";
 choices[32][3] = "No es &uacute;til si ya se tiene un filtro de paquetes en el acceso a Internet";
 answers[32] = choices[32][1];
 units[32] = "106";
 comments[32] = "Id Pregunta: 3969. ";


//  Id pregunta: 4004 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  En el est&aacute;ndar de mensajer&iacute;a X400, el protocolo utilizado para la comunicaci&oacute;n entre el agente de transferencia de mensajes (MTA) y el agente de usuario (UA) se denomina:";
 choices[33]= new Array();
 choices[33][0] = "P1";
 choices[33][1] = "P2";
 choices[33][2] = "P3";
 choices[33][3] = "P7";
 answers[33] = choices[33][2];
 units[33] = "106";
 comments[33] = "Id Pregunta: 4004. ";


//  Id pregunta: 4008 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  &iquest;Cu&aacute;l es el puerto est&aacute;ndar TCP que usa el protocolo IMAP (&quot;Interactive Mail Access Protocol&quot;)?";
 choices[34]= new Array();
 choices[34][0] = "110";
 choices[34][1] = "25";
 choices[34][2] = "143";
 choices[34][3] = "21";
 answers[34] = choices[34][2];
 units[34] = "106";
 comments[34] = "Id Pregunta: 4008. ";


//  Id pregunta: 4011 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  La recomendaci&oacute;n ITU-T X-500 tambi&eacute;n se conoce como:";
 choices[35]= new Array();
 choices[35][0] = "ISO/IEC 9459";
 choices[35][1] = "ISO/IEC 9549";
 choices[35][2] = "ISO/IEC 9594";
 choices[35][3] = "ISO/IEC 9495";
 answers[35] = choices[35][2];
 units[35] = "106";
 comments[35] = "Id Pregunta: 4011. ";


//  Id pregunta: 4056 AÃ±o de creación de pregunta: 2004-01-01
 questions[36]= "37)  &iquest;Cu&aacute;l de las siguientes tecnolog&iacute;as no se puede utilizar actualmente para acceder a internet en Espa&ntilde;a?";
 choices[36]= new Array();
 choices[36][0] = "ADSL";
 choices[36][1] = "Cable";
 choices[36][2] = "Wi-Max";
 choices[36][3] = "Ninguna de las respuestas es correcta";
 answers[36] = choices[36][3];
 units[36] = "112";
 comments[36] = "Id Pregunta: 4056. ";


//  Id pregunta: 4060 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  Cual de los siguientes dispositivos es m&aacute;s barato";
 choices[37]= new Array();
 choices[37][0] = "Adaptador Ethernet";
 choices[37][1] = "Adaptador Bluetooth";
 choices[37][2] = "Adaptador Wi-Fi";
 choices[37][3] = "Adaptador Wi-Max";
 answers[37] = choices[37][1];
 units[37] = "112";
 comments[37] = "Id Pregunta: 4060. ";


//  Id pregunta: 4061 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  El puerto reservado para el protocolo SMTP es";
 choices[38]= new Array();
 choices[38][0] = "80";
 choices[38][1] = "25";
 choices[38][2] = "110";
 choices[38][3] = "69";
 answers[38] = choices[38][1];
 units[38] = "112";
 comments[38] = "Id Pregunta: 4061. ";


//  Id pregunta: 4068 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  En la estructura de la actual internet podemos diferenciar varios niveles jer&aacute;rquicos";
 choices[39]= new Array();
 choices[39][0] = "3, red troncal - redes de proveedores de &aacute;mbito local - redes corporativas";
 choices[39][1] = "4, red troncal - redes de proveedores de tr&aacute;nsito y acceso internacional - redes de proveedores de acceso local - redes corporativas";
 choices[39][2] = "5, red troncal - redes de proveedores de tr&aacute;nsito y acceso internacional - redes de proveedores de acceso local - redes corporativas - redes locales";
 choices[39][3] = "Internet es la red de redes y no tiene ning&uacute;n tipo de jerarqu&iacute;a en sus infraestructuras";
 answers[39] = choices[39][1];
 units[39] = "112";
 comments[39] = "Id Pregunta: 4068. ";


//  Id pregunta: 4106 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  Un GigaPop es:";
 choices[40]= new Array();
 choices[40][0] = "1000 pops.";
 choices[40][1] = "Un nodo de interconexi&oacute;n del backbone de Internet 2.";
 choices[40][2] = "Ninguna de las anteriores";
 choices[40][3] = "a) y b) son ciertas.";
 answers[40] = choices[40][1];
 units[40] = "112";
 comments[40] = "Id Pregunta: 4106. ";


//  Id pregunta: 4110 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  IRC es:";
 choices[41]= new Array();
 choices[41][0] = "Internet Random Card, un protocolo para acceder al servicio de videoconferencia a trav&eacute;s de Internet.";
 choices[41][1] = "Internet Requery Chat, un protocolo para acceder al servicio de Chat y que es usado por clientes como XChat.";
 choices[41][2] = "Internet Relay Chat, un protocolo para acceder al servicio de Chat y que es usado por clientes como mIRC.";
 choices[41][3] = "b) y c) son correctas.";
 answers[41] = choices[41][2];
 units[41] = "112";
 comments[41] = "Id Pregunta: 4110. ";


//  Id pregunta: 4112 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  Las siglas NNTP corresponden a:";
 choices[42]= new Array();
 choices[42][0] = "Native News Transport Protocol";
 choices[42][1] = "Native Network Transport Protocol";
 choices[42][2] = "Network News Transport Protocol";
 choices[42][3] = "Todas las anteriores son falsas";
 answers[42] = choices[42][2];
 units[42] = "112";
 comments[42] = "Id Pregunta: 4112. ";


//  Id pregunta: 4113 AÃ±o de creación de pregunta: 2006-01-01
 questions[43]= "44)  Se&ntilde;ale la afirmaci&oacute;n correcta sobre NFS:";
 choices[43]= new Array();
 choices[43][0] = "NFS es un sistema de archivos distribuido para un entorno de red de &aacute;rea local.";
 choices[43][1] = "Permite acceder a ficheros remotos como si fueran ficheros del sistema local siempre que se est&eacute; dentro de la misma red de &aacute;rea local.";
 choices[43][2] = "Originalmente fue desarrollado por Sun Microsystems.";
 choices[43][3] = "Todas las anteriores son ciertas.";
 answers[43] = choices[43][3];
 units[43] = "112";
 comments[43] = "Id Pregunta: 4113. ";


//  Id pregunta: 4114 AÃ±o de creación de pregunta: 2006-01-01
 questions[44]= "45)  Sobre los buscadores en Internet se&ntilde;ale la respuesta correcta:";
 choices[44]= new Array();
 choices[44][0] = "Los buscadores de &iacute;ndices tem&aacute;ticos son sistemas de b&uacute;squeda que incorporan autom&aacute;ticamente p&aacute;ginas web clasificadas por temas.";
 choices[44][1] = "Los motores de b&uacute;squeda utilizan &ldquo;robots&rdquo; de b&uacute;squeda para incluir las p&aacute;ginas web.";
 choices[44][2] = "a) y b) son falsas";
 choices[44][3] = "a) y b) son verdaderas";
 answers[44] = choices[44][1];
 units[44] = "112";
 comments[44] = "Id Pregunta: 4114. ";


//  Id pregunta: 4119 AÃ±o de creación de pregunta: 2006-01-01
 questions[45]= "46)  La t&eacute;cnica usada para llevar a los visitantes a una nueva p&aacute;gina web cuando un URL ha cambiado se llama";
 choices[45]= new Array();
 choices[45][0] = "Redirecci&oacute;n";
 choices[45][1] = "CGI";
 choices[45][2] = "Identificador Uniforme de Recursos";
 choices[45][3] = "ASP";
 answers[45] = choices[45][0];
 units[45] = "112";
 comments[45] = "Id Pregunta: 4119. ";


//  Id pregunta: 4128 AÃ±o de creación de pregunta: 2006-01-01
 questions[46]= "47)  Lenguaje utilizado para describir los servicios web ofrecidos a los usuarios";
 choices[46]= new Array();
 choices[46][0] = "XML";
 choices[46][1] = "Xerces";
 choices[46][2] = "UDDI";
 choices[46][3] = "WSDL";
 answers[46] = choices[46][3];
 units[46] = "112,51";
 comments[46] = "Id Pregunta: 4128. ";


//  Id pregunta: 4140 AÃ±o de creación de pregunta: 2006-01-01
 questions[47]= "48)  Cuando multitud de sistemas atacan un &uacute;nico sistema provocando su caida, estamos ante";
 choices[47]= new Array();
 choices[47][0] = "Un ataque de denegaci&oacute;n de servicio (DoS)";
 choices[47][1] = "Echelon, una red global de espias";
 choices[47][2] = "Un ataque distribuido de denegaci&oacute;n de servicio (DDoS)";
 choices[47][3] = "Un ataque de ingenier&iacute;a social";
 answers[47] = choices[47][2];
 units[47] = "112";
 comments[47] = "Id Pregunta: 4140. ";


//  Id pregunta: 4142 AÃ±o de creación de pregunta: 2006-01-01
 questions[48]= "49)  La principal diferencia entre S/MIME y PGP es";
 choices[48]= new Array();
 choices[48][0] = "PGP es software libre";
 choices[48][1] = "S/MIME requiere SSL";
 choices[48][2] = "PGP no se puede usar en un servicio de env&iacute;o de correo SMTP";
 choices[48][3] = "S/MIME requiere certificados digitales ";
 answers[48] = choices[48][3];
 units[48] = "106";
 comments[48] = "Id Pregunta: 4142. ";


//  Id pregunta: 4160 AÃ±o de creación de pregunta: 2006-01-01
 questions[49]= "50)  Para que se usa el comando HELO en SMTP";
 choices[49]= new Array();
 choices[49][0] = "Para autenticar los clientes SMTP";
 choices[49][1] = "Para identificar los clientes SMTP";
 choices[49][2] = "Este comando no forma parte de SMTP";
 choices[49][3] = "El comando HELO es usado en SNMP (no en SMTP)";
 answers[49] = choices[49][1];
 units[49] = "106";
 comments[49] = "Id Pregunta: 4160. ";


//  Id pregunta: 4286 AÃ±o de creación de pregunta: 2007-01-01
 questions[50]= "51)  Los documentos electr&oacute;nicos conformados de acuerdo con la norma XML utilizan el juego de caracteres:";
 choices[50]= new Array();
 choices[50][0] = "ASCII de 16 bits.";
 choices[50][1] = "ASCII de 8 bits.";
 choices[50][2] = "UNICODE.";
 choices[50][3] = "MIME";
 answers[50] = choices[50][2];
 units[50] = "70";
 comments[50] = "Id Pregunta: 4286. NULL";


//  Id pregunta: 4340 AÃ±o de creación de pregunta: 2007-01-01
 questions[51]= "52)  &iquest;Cu&aacute;l es el puerto est&aacute;ndar utilizado por el protocolo POP3?:";
 choices[51]= new Array();
 choices[51][0] = "21.";
 choices[51][1] = "23.";
 choices[51][2] = "25";
 choices[51][3] = "110";
 answers[51] = choices[51][3];
 units[51] = "112";
 comments[51] = "Id Pregunta: 4340. ";


//  Id pregunta: 4715 AÃ±o de creación de pregunta: 2007-01-01
 questions[52]= "53)  El hipertexto es:";
 choices[52]= new Array();
 choices[52][0] = "El conjunto de los elementos activos de un documento, que, al seleccionarse, enlazan con otros elementos";
 choices[52][1] = "Un documento HTML.";
 choices[52][2] = "Un documento HTML, XML o SGML.";
 choices[52][3] = "Ninguna de las anteriores";
 answers[52] = choices[52][0];
 units[52] = "112";
 comments[52] = "Id Pregunta: 4715. Examen 2006 JCYL";


//  Id pregunta: 4973 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  Indique la afirmaci&oacute;n correcta en relaci&oacute;n con SMTP (Simple Mail Transfer Protocol), definido en la RFC821:";
 choices[53]= new Array();
 choices[53][0] = "Puede transmitir ficheros ejecutables y objetos binarios en general.";
 choices[53][1] = "Se crea para superar las deficiencias de MIME (Multipurpose Internet Mail Extensi&oacute;n).";
 choices[53][2] = "Se limita a caracteres ASCII de 7 bits.";
 choices[53][3] = "Es un protocolo de nivel de Presentaci&oacute;n del modelo OSI.";
 answers[53] = choices[53][2];
 units[53] = "106";
 comments[53] = "Id Pregunta: 4973. Examen TIC B 2007";


//  Id pregunta: 5016 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  Indique cu&aacute;l es el puerto para la conexi&oacute;n de datos que abrir&aacute; el cliente en el modo PASV del Protocolo deTransferencia de Ficheros FTP (&quot;File Transfer Protocol&quot;):";
 choices[54]= new Array();
 choices[54][0] = "El puerto 20";
 choices[54][1] = "El puerto 21";
 choices[54][2] = "Un puerto por encima de 1023 elegido al azar por el cliente";
 choices[54][3] = "Un puerto por encima de 1023 elegido al azar por el servidor";
 answers[54] = choices[54][3];
 units[54] = "112";
 comments[54] = "Id Pregunta: 5016. Examen TIC A 2007- Anulada por el Tribunal";


//  Id pregunta: 5056 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  Indique qu&eacute; informaci&oacute;n de las siguientes NO aporta un URL (Localizador Universal de Recurso) para identificar unrecurso de la web:";
 choices[55]= new Array();
 choices[55][0] = "El nombre del recurso";
 choices[55][1] = "El tipo del recurso";
 choices[55][2] = "Donde se encuentra el recurso";
 choices[55][3] = "El protocolo que hay que usar para obtener el recurso";
 answers[55] = choices[55][1];
 units[55] = "112";
 comments[55] = "Id Pregunta: 5056. Examen TIC A 2007";


//  Id pregunta: 5507 AÃ±o de creación de pregunta: 2003-01-01
 questions[56]= "57)  Qu&eacute; formato se emplea para la emision de facturas electr&oacute;nicas por parte de la AGE?";
 choices[56]= new Array();
 choices[56][0] = "XBRL";
 choices[56][1] = "ebXML";
 choices[56][2] = "UBL";
 choices[56][3] = "Facturae";
 answers[56] = choices[56][3];
 units[56] = "70";
 comments[56] = "Id Pregunta: 5507. NULL";


//  Id pregunta: 5610 AÃ±o de creación de pregunta: 2003-01-01
 questions[57]= "58)  El protocolo SMTP es estrictamente el est&aacute;ndar";
 choices[57]= new Array();
 choices[57][0] = "STD 11 que describe el formato de los mensajes de correos";
 choices[57][1] = "El STD 10 que especifica el protocolo concreto para el enviio de correo entre dos &quot;hosts&quot; TCP/IP";
 choices[57][2] = "El STD 12 para el intercambio de correo entre dos ordenadores";
 choices[57][3] = "STD 10 para describir el procedimineto de enrutado de los mensajes que se basa en el sistema de nombres de dominio";
 answers[57] = choices[57][1];
 units[57] = "106";
 comments[57] = "Id Pregunta: 5610. ";


//  Id pregunta: 5851 AÃ±o de creación de pregunta: 2009-01-01
 questions[58]= "59)  Respecto al correo electr&oacute;nico, &iquest;Qu&eacute; afirmaci&oacute;n NO es correcta?";
 choices[58]= new Array();
 choices[58][0] = "IMAP es un protocolo de env&iacute;o de correo";
 choices[58][1] = "POP es un protocolo de acceso a correo";
 choices[58][2] = "SMTP es un protocolo de transporte de mensajes";
 choices[58][3] = "MIME permite acentos en los mensajes de correo";
 answers[58] = choices[58][0];
 units[58] = "106";
 comments[58] = "Id Pregunta: 5851. Pregunta 31";


//  Id pregunta: 5944 AÃ±o de creación de pregunta: 2009-01-01
 questions[59]= "60)  El concepto de Web 2.0 agrupa 3 nociones fundamentales, &iquest;cu&aacute;l de las siguientes no es una de ellas?";
 choices[59]= new Array();
 choices[59][0] = "La posibilidad de participaci&oacute;n activa y de colaboraci&oacute;n de los usuarios en la producci&oacute;n de contenidos";
 choices[59][1] = "Las nuevas interfaces se acercan progresivamente a los est&aacute;ndares de cliente pesado";
 choices[59][2] = "Empleo de contenidos multimedia en las p&aacute;ginas web";
 choices[59][3] = "La capacidad de mezcla de diferentes servicios de distintos sitios en la mismap&aacute;gina.";
 answers[59] = choices[59][2];
 units[59] = "120";
 comments[59] = "Id Pregunta: 5944. ";


//  Id pregunta: 5951 AÃ±o de creación de pregunta: 2009-01-01
 questions[60]= "61)  &iquest;Qu&eacute; es SSO?";
 choices[60]= new Array();
 choices[60][0] = "Es un Sistema Operativo para proporcionar la autorizaci&oacute;n de utilizaci&oacute;n de recursos basado en certificados de usuario.";
 choices[60][1] = "Es un m&eacute;todo de control de acceso que permite a un usuario validarse una &uacute;nica vez y tener acceso a diferentes recursos sin tener que volver a introducir sus credenciales";
 choices[60][2] = "Es una plataforma que almacena todas las contrase&ntilde;as del usuario para que &eacute;ste no tenga que teclearlas cada vez que accede a las distintas aplicaciones";
 choices[60][3] = "Es la plataforma PKI que emite certificados de empleado p&uacute;blico para la AGE";
 answers[60] = choices[60][1];
 units[60] = "118";
 comments[60] = "Id Pregunta: 5951. ";


//  Id pregunta: 6152 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  &iquest;C&oacute;mo se denomina el sistema global de discusi&oacute;n en internet que evoluciona de las redes UUCP?";
 choices[61]= new Array();
 choices[61][0] = "WWW";
 choices[61][1] = "FTP";
 choices[61][2] = "Usenet";
 choices[61][3] = "ICP";
 answers[61] = choices[61][2];
 units[61] = "112";
 comments[61] = "Id Pregunta: 6152. ";


//  Id pregunta: 6153 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  &iquest;Sobre qu&eacute; protocolo de la capa de presentaci&oacute;n est&aacute; implementado NFS?";
 choices[62]= new Array();
 choices[62][0] = "ONC RPC";
 choices[62][1] = "XDR";
 choices[62][2] = "NIS";
 choices[62][3] = "XML";
 answers[62] = choices[62][1];
 units[62] = "112";
 comments[62] = "Id Pregunta: 6153. ";


//  Id pregunta: 6155 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  &iquest;C&oacute;mo fue renombrado el protocolo SMB por Microsoft?";
 choices[63]= new Array();
 choices[63][0] = "SAMBA";
 choices[63][1] = "CIFS";
 choices[63][2] = "MSRPC";
 choices[63][3] = "Ninguna de las anteriores.";
 answers[63] = choices[63][1];
 units[63] = "112";
 comments[63] = "Id Pregunta: 6155. ";


//  Id pregunta: 6185 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  Indique, cual de entre los siguientes elementos de un sistema de correo X.400 se corresponde con un servidor de correo:";
 choices[64]= new Array();
 choices[64][0] = "UA.";
 choices[64][1] = "MTA.";
 choices[64][2] = "GW.";
 choices[64][3] = "MS.";
 answers[64] = choices[64][1];
 units[64] = "106";
 comments[64] = "Id Pregunta: 6185. ";


//  Id pregunta: 6346 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  &iquest;Cu&aacute;l de las siguientes definiciones describe lo que es Mashup?";
 choices[65]= new Array();
 choices[65][0] = "Aplicaci&oacute;n web que utiliza informaci&oacute;n de diversas fuentes para crear un servicio en base a ellas.";
 choices[65][1] = "T&eacute;cnica de desarrollo web que permite modificar la informaci&oacute;n de una p&aacute;gina web, sin tener que recargarla totalmente, agilizando la interacci&oacute;n con el usuario.";
 choices[65][2] = "Conjunto de especificaciones que posibilitan la comunicaci&oacute;n y provisi&oacute;n de servicios entre diferentes aplicaciones v&iacute;a web.";
 choices[65][3] = "Ninguna de las anteriores.";
 answers[65] = choices[65][0];
 units[65] = "120";
 comments[65] = "Id Pregunta: 6346. NULL";


//  Id pregunta: 6348 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  &iquest;Qu&eacute; es MySpace?";
 choices[66]= new Array();
 choices[66][0] = "Una red social";
 choices[66][1] = "Un servicio FTP";
 choices[66][2] = "Un servicio de mensajer&iacute;a instant&aacute;nea";
 choices[66][3] = "Un escritorio virtual";
 answers[66] = choices[66][0];
 units[66] = "120";
 comments[66] = "Id Pregunta: 6348. NULL";


//  Id pregunta: 6489 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  &iquest;Qu&eacute; comandos se usan en POP3 para descargarse y borrar los dos primeros mensajes del buz&oacute;n de correo?";
 choices[67]= new Array();
 choices[67][0] = "RETR 1 DELE 1 RETR 2 DELE 2";
 choices[67][1] = "RETE 1,2 DELE 1,2";
 choices[67][2] = "RETR 1-2 DELE 1-2";
 choices[67][3] = "RETR 1 RETR 2";
 answers[67] = choices[67][0];
 units[67] = "106";
 comments[67] = "Id Pregunta: 6489. Castilla La Mancha 2009";


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


//  Id pregunta: 8427 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  &iquest;Cu&aacute;l de los siguientes t&eacute;rminos no es un tipo de SSO (Single Sign-On)?";
 choices[69]= new Array();
 choices[69][0] = "Enterprise SSO";
 choices[69][1] = "Web SSO";
 choices[69][2] = "Kerberos";
 choices[69][3] = "Novell";
 answers[69] = choices[69][3];
 units[69] = "118";
 comments[69] = "Id Pregunta: 8427. ";


//  Id pregunta: 8434 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  &iquest;Cu&aacute;l de las siguientes normativas no regula la factura electr&oacute;nica?";
 choices[70]= new Array();
 choices[70][0] = "Orden EHA/962/2007";
 choices[70][1] = "Orden PRE/2971/2007";
 choices[70][2] = "Ley 30/2007";
 choices[70][3] = "Ley 59/2003";
 answers[70] = choices[70][3];
 units[70] = "70";
 comments[70] = "Id Pregunta: 8434. NULL";


//  Id pregunta: 8530 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  La Web sem&aacute;ntica pretende dotar a la Web de mayor significado, gracias a una informaci&oacute;n mejor definida. Para ello se utilizan tecnolog&iacute;as como:";
 choices[71]= new Array();
 choices[71][0] = "RTF.";
 choices[71][1] = "RML.";
 choices[71][2] = "OWL.";
 choices[71][3] = "Jabsys.";
 answers[71] = choices[71][2];
 units[71] = "120";
 comments[71] = "Id Pregunta: 8530. Examen TIC A2 2010 interna";


//  Id pregunta: 8614 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  &iquest;Cual de las siguientes soluciones comerciales de Escritorio Remoto se distribuye bajo licencia propietaria?";
 choices[72]= new Array();
 choices[72][0] = "Vinagre";
 choices[72][1] = "DameWare Mini Remote Control";
 choices[72][2] = "TightVNC";
 choices[72][3] = "RdesKtop";
 answers[72] = choices[72][1];
 units[72] = "118";
 comments[72] = "Id Pregunta: 8614. Examen TIC A2 2010 interna";


//  Id pregunta: 8744 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  El impulso de la factura electr&oacute;nica, como obligatoria en el marco de la contrataci&oacute;n en el sector p&uacute;blico estatal se establece en la ley:";
 choices[73]= new Array();
 choices[73][0] = "34/2002, de 11 de Julio, de Servicios de la Sociedad de la Informaci&oacute;n y de Comercio Electr&oacute;nico.";
 choices[73][1] = "56/2007, de 28 de diciembre, de Medidas de Impulso de la Sociedad de la Informaci&oacute;n";
 choices[73][2] = "59/2003, de 19 de diciembre, de Firma Electr&oacute;nica.";
 choices[73][3] = "11/2007. de 22 de junio, de Acceso Electr&oacute;nico de los Ciudadanos a los Servicios P&uacute;blicos";
 answers[73] = choices[73][1];
 units[73] = "70";
 comments[73] = "Id Pregunta: 8744. Examen TIC A2 2010 interna";


//  Id pregunta: 8776 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  &iquest;Que puerto utiliza NNTP?";
 choices[74]= new Array();
 choices[74][0] = "119";
 choices[74][1] = "53";
 choices[74][2] = "137";
 choices[74][3] = "139";
 answers[74] = choices[74][0];
 units[74] = "112";
 comments[74] = "Id Pregunta: 8776. Examen UPM A2 2011";


//  Id pregunta: 8986 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  &iquest;Cu&aacute;l de las siguientes es una recomendaci&oacute;n del formato Facturae";
 choices[75]= new Array();
 choices[75][0] = "Formato de firma XMLDSig ENVELOPED";
 choices[75][1] = "Algoritmo de canonicalizaci&oacute;n C14N";
 choices[75][2] = "Algoritmo de firma RSA sobre SHA1";
 choices[75][3] = "Todas las anteriores";
 answers[75] = choices[75][3];
 units[75] = "70";
 comments[75] = "Id Pregunta: 8986. NULL";


//  Id pregunta: 9170 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  Se&ntilde;ale cu&aacute;l de los siguientes no es un bloque de primer nivel en una factura en formato Facturae;";
 choices[76]= new Array();
 choices[76][0] = "Datos del emisor";
 choices[76][1] = "Detalle de la factura";
 choices[76][2] = "Importe de la factura";
 choices[76][3] = "Datos de la firma electr&oacute;nica ";
 answers[76] = choices[76][2];
 units[76] = "70";
 comments[76] = "Id Pregunta: 9170. ";


//  Id pregunta: 9171 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  Cu&aacute;l de los siguientes productos de UN/CEFACT es un est&aacute;ndar:";
 choices[77]= new Array();
 choices[77][0] = "UN/CCL (Core Components Library)";
 choices[77][1] = "ebXML CCTS (Core Components Technical Specification)";
 choices[77][2] = "XML Naming and Design Rules";
 choices[77][3] = "UNECE TDED ISO 7273";
 answers[77] = choices[77][0];
 units[77] = "70";
 comments[77] = "Id Pregunta: 9171. ";


//  Id pregunta: 9172 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  La norma que regula las obligaciones de facturaci&oacute;n es:";
 choices[78]= new Array();
 choices[78][0] = "Orden PRE/2971/2007";
 choices[78][1] = "Real Decreto 1496/2003";
 choices[78][2] = "Real Decreto 1619/2012";
 choices[78][3] = "Real Decreto 1783/2012";
 answers[78] = choices[78][2];
 units[78] = "70";
 comments[78] = "Id Pregunta: 9172. ";


//  Id pregunta: 9174 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  Si hablamos de UBL, &iquest;cu&aacute;l de las siguientes afirmaciones es INCORRECTA?";
 choices[79]= new Array();
 choices[79][0] = "Fue desarrollado por OASIS";
 choices[79][1] = "Es una librer&iacute;a est&aacute;ndar de documentos XML dedicada a la representaci&oacute;n de facturas ";
 choices[79][2] = "Est&aacute; basada en el concepto de Core Components";
 choices[79][3] = "El desarrollo de su variante NES, NESUBL, es la base del proyecto PEPPOL de contrataci&oacute;n online paneuropea";
 answers[79] = choices[79][1];
 units[79] = "70";
 comments[79] = "Id Pregunta: 9174. ";


//  Id pregunta: 9466 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  Respecto al direccionamiento de los mensajes en X.400 indique, de las siguientes afirmaciones, la falsa:";
 choices[80]= new Array();
 choices[80][0] = "El campo P hace referencia al dominio concreto al que pertenece el usuario dentro de la organizaci&oacute;n";
 choices[80][1] = "En el campo C de la direcci&oacute;n de correo se almacena el c&oacute;digo ISO para el nombre del pa&iacute;s al que pertenece una direcci&oacute;n de correo";
 choices[80][2] = "El campo CN indica el nombre com&uacute;n que puede, a su vez, dividirse en los subcampos S (apellido) y N (nombre)";
 choices[80][3] = "La omisi&oacute;n del campo ADMD indica el valor &quot;blank&quot;, por lo que no se trata de un campo obligatorio";
 answers[80] = choices[80][2];
 units[80] = "106";
 comments[80] = "Id Pregunta: 9466. ";


//  Id pregunta: 9467 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  En lo referente a la mensajer&iacute;a en Internet indique la afirmaci&oacute;n falsa:";
 choices[81]= new Array();
 choices[81][0] = "MIME se desarrolla en los RFCs 2045 a 2049";
 choices[81][1] = "Si un servidor que no soporta extensiones SMTP recibe un mensaje HELO, devuelve un error de sintaxis al emisor SMTP, quien deber&aacute; enviar en su lugar un mensaje de tipo EHLO";
 choices[81][2] = "El RFC 1870 permite a un receptor especificar el tama&ntilde;o m&aacute;ximo de mensaje que puede recibir";
 choices[81][3] = "El protocolo SMTP se apoya en el sistema de resoluci&oacute;n de nombres de dominio de Internet";
 answers[81] = choices[81][1];
 units[81] = "106";
 comments[81] = "Id Pregunta: 9467. ";


//  Id pregunta: 9712 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  En el contexto de las redes de telecomunicaciones, SNMP";
 choices[82]= new Array();
 choices[82][0] = "es un protocolo de la capa de aplicaci&oacute;n que facilita el intercambio de informaci&oacute;n de administraci&oacute;n entre dispositivos de red.";
 choices[82][1] = "es el acr&oacute;nimo en ingl&eacute;s de Service Network Management Protocol.";
 choices[82][2] = "es un protocolo de la capa de transporte que facilita el intercambio de informaci&oacute;n de administraci&oacute;n entre dispositivos de red.";
 choices[82][3] = "son las siglas en ingl&eacute;s de Standard Network Management Protocol.";
 answers[82] = choices[82][0];
 units[82] = "106";
 comments[82] = "Id Pregunta: 9712. Examen TIC-A1 2013";


//  Id pregunta: 9850 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  El proceso mediante el cual un usuario se autentica una vez en el sistema de la organizaci&oacute;n y es capaz de acceder al resto de servicios se denomina:";
 choices[83]= new Array();
 choices[83][0] = "Single Login On";
 choices[83][1] = "Simple Login On";
 choices[83][2] = "Single Sign On";
 choices[83][3] = "Simple Sign On";
 answers[83] = choices[83][2];
 units[83] = "118";
 comments[83] = "Id Pregunta: 9850. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Extremadura 2014";


//  Id pregunta: 9851 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  &iquest;Qu&eacute; es SAML?";
 choices[84]= new Array();
 choices[84][0] = "Un est&aacute;ndar abierto que define un esquema para el intercambio de datos de autenticaci&oacute;n y autorizaci&oacute;n.";
 choices[84][1] = "Un servicio proveedor de identidades.";
 choices[84][2] = "Un protocolo para la verificaci&oacute;n de identidades.";
 choices[84][3] = "Un software de definici&oacute;n de autoridades.";
 answers[84] = choices[84][0];
 units[84] = "118";
 comments[84] = "Id Pregunta: 9851. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Extremadura 2014";


//  Id pregunta: 9994 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  &iquest;Cu&aacute;l es la herramienta utilizada para organizar reuniones virtuales dentro de la Red SARA?";
 choices[85]= new Array();
 choices[85][0] = "Conect@";
 choices[85][1] = "Re&uacute;nete";
 choices[85][2] = "Acceda en Cloud";
 choices[85][3] = "TelePresence";
 answers[85] = choices[85][1];
 units[85] = "120";
 comments[85] = "Id Pregunta: 9994. NULL";


//  Id pregunta: 10066 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Indicar de qu&eacute; zonas se encarga RIPE-NCC como Registro Regional de Internet (RIR):";
 choices[86]= new Array();
 choices[86][0] = "Am&eacute;rica Central, Am&eacute;rica del Norte y del Sur.";
 choices[86][1] = "Europa y Norte de &Aacute;frica.";
 choices[86][2] = "Europa, Am&eacute;rica Central y Am&eacute;rica del Sur.";
 choices[86][3] = "Europa, Oriente Medio y Asia Central.";
 answers[86] = choices[86][3];
 units[86] = "112";
 comments[86] = "Id Pregunta: 10066. TIC A2, libre, Examen 2013";


//  Id pregunta: 10067 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  &iquest;C&oacute;mo se llama la clasificaci&oacute;n no jer&aacute;rquica de la informaci&oacute;n mediante etiquetas/tags por parte de los usuarios de la misma?";
 choices[87]= new Array();
 choices[87][0] = "Web 3.0. ";
 choices[87][1] = "Labelling.";
 choices[87][2] = "Taxonom&iacute;a.";
 choices[87][3] = "Folcsonom&iacute;a.";
 answers[87] = choices[87][3];
 units[87] = "120";
 comments[87] = "Id Pregunta: 10067. TIC A2, libre, Examen 2013";


//  Id pregunta: 10604 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  SET es:";
 choices[88]= new Array();
 choices[88][0] = "Una tecnolog&iacute;a definida por MasterCard con el fin de verificar la identidad de los titulares que efect&uacute;an compras por Internet.";
 choices[88][1] = "Un sistema de micropagos.";
 choices[88][2] = "Un protocolo est&aacute;ndar para el pago remoto con tarjetas de cr&eacute;dito.";
 choices[88][3] = "Un negocio de comercio electr&oacute;nico que permite realizar pagos o transferencias monetarias a trav&eacute;s de Internet.";
 answers[88] = choices[88][2];
 units[88] = "70";
 comments[88] = "Id Pregunta: 10604. ";


//  Id pregunta: 10666 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  Single Sign-on...";
 choices[89]= new Array();
 choices[89][0] = "&hellip; es un procedimiento de autenticaci&oacute;n que habilita al usuario para acceder a varios sistemas con una sola instancia de identificaci&oacute;n.";
 choices[89][1] = "&hellip; un conjunto de librer&iacute;as open source para identidades federadas.";
 choices[89][2] = "&hellip; una especificaci&oacute;n de mensajes SAML.";
 choices[89][3] = "&hellip; es una informaci&oacute;n almacenada en el navegador del usuario para su consulta posterior.";
 answers[89] = choices[89][0];
 units[89] = "118";
 comments[89] = "Id Pregunta: 10666. ";


//  Id pregunta: 10886 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  El puerto del protocolo FTP sobre TLS/SSL (FTPS) es:";
 choices[90]= new Array();
 choices[90][0] = "2121";
 choices[90][1] = "2020";
 choices[90][2] = "980";
 choices[90][3] = "990";
 answers[90] = choices[90][3];
 units[90] = "112";
 comments[90] = "Id Pregunta: 10886. Examen GSI 2014";


//  Id pregunta: 10962 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Respecto al formato de factura electr&oacute;nica Facturae 3.2, se&ntilde;ale la respuesta correcta:";
 choices[91]= new Array();
 choices[91][0] = "Es de tipo PDF-A, para facilitar su impresi&oacute;n.";
 choices[91][1] = "Es un formato certificado con la Norma SICRES 3.0, para la compatibilidad e interconexi&oacute;n de los Registros Contables de Facturas.";
 choices[91][2] = "Es un formato no estructurado compuesto por dos bloques obligatorios y cuatro opcionales.";
 choices[91][3] = "Incluye firma Electr&oacute;nica en XML Advanced Electronic Signature (XADES)";
 answers[91] = choices[91][3];
 units[91] = "70";
 comments[91] = "Id Pregunta: 10962. TIC A1 AGE 2014";


//  Id pregunta: 10985 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Respecto a la imagen institucional en redes sociales de la AGE es correcto que:";
 choices[92]= new Array();
 choices[92][0] = "En las redes sociales que lo permitan, el fondo de todas las p&aacute;ginas tendr&aacute; color amarillo.";
 choices[92][1] = "El fondo de las p&aacute;ginas se dise&ntilde;ar&aacute; optimizado a un tama&ntilde;o para pantallas de 800 x 600 p&iacute;xeles de anchura.";
 choices[92][2] = "Las dimensiones de la imagen del perfil ser&aacute;n las mismas para todas las redes sociales.";
 choices[92][3] = "La imagen del perfil deber&aacute; incluir siempre la denominaci&oacute;n ministerial.";
 answers[92] = choices[92][0];
 units[92] = "120";
 comments[92] = "Id Pregunta: 10985. TIC A1 AGE 2014";


//  Id pregunta: 11060 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Se&ntilde;ale la respuesta FALSA sobre 3D-Secure";
 choices[93]= new Array();
 choices[93][0] = "Es un protocolo basado en XML ";
 choices[93][1] = "Se utiliza para asegurar el pago con tarjeta en Internet";
 choices[93][2] = "Es susceptible de ataques &quot;man-in-the-middle&quot;";
 choices[93][3] = "Todas son correctas";
 answers[93] = choices[93][3];
 units[93] = "70";
 comments[93] = "Id Pregunta: 11060. ";


//  Id pregunta: 11062 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Respecto a la factura electr&oacute;nica:";
 choices[94]= new Array();
 choices[94][0] = "S&oacute;lo es obligatoria en el &aacute;mbito de la AGE";
 choices[94][1] = "Reglamentariamente pueden excluirse las de importe inferior a 5000&euro;";
 choices[94][2] = "No est&aacute;n obligadas las agrupaciones de inter&eacute;s econ&oacute;mico europeas";
 choices[94][3] = "Todas son correctas";
 answers[94] = choices[94][1];
 units[94] = "70";
 comments[94] = "Id Pregunta: 11062. ";


//  Id pregunta: 11145 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Cu&aacute;l de los siguientes es el formato oficial de facturaci&oacute;n electr&oacute;nica de la Administraci&oacute;n General del Estado?";
 choices[95]= new Array();
 choices[95][0] = "GS2-XML";
 choices[95][1] = "UBL";
 choices[95][2] = "Facturae";
 choices[95][3] = "Eb-XML";
 answers[95] = choices[95][2];
 units[95] = "70";
 comments[95] = "Id Pregunta: 11145. ";


//  Id pregunta: 11174 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Cu&aacute;l de los siguientes es una herramienta utilizada para el cifrado de correos electr&oacute;nicos";
 choices[96]= new Array();
 choices[96][0] = "PGP";
 choices[96][1] = "S/MME";
 choices[96][2] = "Todos los anteriores";
 choices[96][3] = "Ninguno de los anteriores";
 answers[96] = choices[96][2];
 units[96] = "106";
 comments[96] = "Id Pregunta: 11174. ";


//  Id pregunta: 11321 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Cu&aacute;l de los siguientes conceptos no est&aacute; relacionada con la web sem&aacute;ntica";
 choices[97]= new Array();
 choices[97][0] = "SPARQL";
 choices[97][1] = "OWL";
 choices[97][2] = "DCAT";
 choices[97][3] = "XSN";
 answers[97] = choices[97][3];
 units[97] = "120";
 comments[97] = "Id Pregunta: 11321. ";


//  Id pregunta: 11352 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  De las siguientes afirmaciones, seleccione la correcta en relaci&oacute;n con lo regulado en la Ley 25/2013, de 27 de diciembre, de impulso de la factura electr&oacute;nica y creaci&oacute;n del registro contable de facturas en el Sector P&uacute;blico";
 choices[98]= new Array();
 choices[98][0] = "La Ley 25/2013 tiene como &aacute;mbito de actuaci&oacute;n, las facturas emitidas en el marco de las relaciones jur&iacute;dicas entre proveedores de bienes y servicios y las Administraciones P&uacute;blicas";
 choices[98][1] = "Impulso del uso de la factura electr&oacute;nica en el sector p&uacute;blico, con car&aacute;cter obligatorio para determinados sujetos a partir del uno de enero de 2015.";
 choices[98][2] = "Obligaci&oacute;n de las empresas de presentaci&oacute;n en un registro administrativo de las facturas expedidas por los servicios que presten o bienes que entreguen a una Administraci&oacute;n P&uacute;blica, en un plazo de 20 d&iacute;as desde la prestaci&oacute;n o entrega";
 choices[98][3] = "Se establece la creaci&oacute;n obligatoria para la Administraci&oacute;n P&uacute;blica estatal, de puntos generales de entrada de facturas electr&oacute;nicas";
 answers[98] = choices[98][0];
 units[98] = "70";
 comments[98] = "Id Pregunta: 11352. Es obligatorio a partir del 15 de enero de 2015. El plazo para la entrega de la factura, son 30 d&iacute;as. La creaci&oacute;n es obligatoria para todas las administraciones p&uacute;blicas.";


//  Id pregunta: 11626 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Seg&uacute;n la Ley 25/2013:";
 choices[99]= new Array();
 choices[99][0] = "Las facturas electr&oacute;nicas que se remitan a las Administraciones P&uacute;blicas deber&aacute;n tener un formato estructurado y estar firmadas con firma electr&oacute;nica avanzada basada en un certificado reconocido.";
 choices[99][1] = "Las Entidades Locales podr&aacute;n adherirse a la utilizaci&oacute;n del Punto general de entrada de facturas electr&oacute;nicas que proporcione su Diputaci&oacute;n, Comunidad Aut&oacute;noma o el Estado.";
 choices[99][2] = "El Punto general de entrada de facturas electr&oacute;nicas proporcionar&aacute; un servicio autom&aacute;tico de puesta a disposici&oacute;n o de remisi&oacute;n electr&oacute;nica de las mismas a las oficinas contables competentes para su registro.";
 choices[99][3] = "Todas las anteriores son correctas";
 answers[99] = choices[99][3];
 units[99] = "70";
 comments[99] = "Id Pregunta: 11626. ";


