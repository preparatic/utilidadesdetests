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

//  Id pregunta: 2890 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  La implantaci&oacute;n de SARA aporta:";
 choices[0]= new Array();
 choices[0][0] = "Servicios b&aacute;sicos horizontales";
 choices[0][1] = "Servicios sectoriales de los departamentos ministeriales";
 choices[0][2] = "Servicios horizontales de car&aacute;cter  avanzado";
 choices[0][3] = "Todas las respuestas anteriores son correctas";
 answers[0] = choices[0][3];
 units[0] = "113.44";
 comments[0] = "Id Pregunta: 2890. NULL";


//  Id pregunta: 2958 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  TCP es un protocolo";
 choices[1]= new Array();
 choices[1][0] = "Orientado a conexi&oacute;n";
 choices[1][1] = "Orientado a conexi&oacute;n y no orientado a conexi&oacute;n";
 choices[1][2] = "Orientado a conexi&oacute;n y con control de errores";
 choices[1][3] = "Orientado a conexi&oacute;n y no orientado a conexi&oacute;n y con control de errores";
 answers[1] = choices[1][2];
 units[1] = "100";
 comments[1] = "Id Pregunta: 2958. Tanenbaum";


//  Id pregunta: 2985 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  &iquest;Cu&aacute;s de los siguientes servicios no proporciona el nivel de aplicaci&oacute;n en el modelo OSI de ISO?";
 choices[2]= new Array();
 choices[2][0] = "Determinaci&oacute;n de la calidad de servicio aceptable";
 choices[2][1] = "Acuerdo sobre los mecanismos de privacidad";
 choices[2][2] = "Reglas gramaticales para representaci&oacute;n de los datos y est&aacute;ndares acordados  para obtener  informaci&oacute;n entendible entre sistemas (ASCII, EDIC, ASN.1 )";
 choices[2][3] = "Selecci&oacute;n de la disciplina de di&aacute;logo, incluyendo los procedimientos de iniciaci&oacute;n y liberaci&oacute;n";
 answers[2] = choices[2][2];
 units[2] = "100";
 comments[2] = "Id Pregunta: 2985. Es la capa de presentaci&oacute;n la que se encarga de la sintaxis";


//  Id pregunta: 3015 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  Entre las carater&iacute;sticas de propagaci&oacute;n de las ondas de radiofrecuencia, cu&aacute;l de las siguientes afirmaciones no es correcta cuando se incrementa la frecuencia?";
 choices[3]= new Array();
 choices[3][0] = "Menor alcance de la se&ntilde;al";
 choices[3][1] = "menor ancho de banda";
 choices[3][2] = "mayor inmunidad al ruido";
 choices[3][3] = "mayor necesidad de visibilidad directa";
 answers[3] = choices[3][1];
 units[3] = "107";
 comments[3] = "Id Pregunta: 3015. NULL";


//  Id pregunta: 3025 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  &iquest;Qu&eacute; no puede hacer un sistema de detecci&oacute;n de intrusos?";
 choices[4]= new Array();
 choices[4][0] = "Controlar el tr&aacute;fico de red dentro y fuera de los firewall";
 choices[4][1] = "Evitar que salten alarmas falsas";
 choices[4][2] = "Detectar tiempos de acceso anormales";
 choices[4][3] = "Guardar logs de los accesos";
 answers[4] = choices[4][0];
 units[4] = "111";
 comments[4] = "Id Pregunta: 3025. SS-A 2004";


//  Id pregunta: 3040 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;Cu&aacute;l de los siguientes protocolos de internet relacionados con el correo electr&oacute;nico permite descargar selectivamente los mensajes de entrada del servidor de correo?:";
 choices[5]= new Array();
 choices[5][0] = "SMTP (Simple Mail Transfer Protocol)";
 choices[5][1] = "POP3 (Post Office Protocol versi&oacute;n 3)";
 choices[5][2] = "IMAP4 (Internet Message Access Protocol versi&oacute;n 4)";
 choices[5][3] = "S/MIME (Secure Multipurpose Internet Mail Extensions)";
 answers[5] = choices[5][2];
 units[5] = "106";
 comments[5] = "Id Pregunta: 3040. ";


//  Id pregunta: 3116 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;A qu&eacute; norma 802 del IEEE corresponden las recomendaciones sobre LAN con CSMA/CD?:";
 choices[6]= new Array();
 choices[6][0] = "802.1";
 choices[6][1] = "802.2";
 choices[6][2] = "802.3";
 choices[6][3] = "802.4";
 answers[6] = choices[6][2];
 units[6] = "100";
 comments[6] = "Id Pregunta: 3116. NULL";


//  Id pregunta: 3158 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes afirmaciones no es cierta respecto a los nuevos dominios de primer nivel de internet introducidos en noviembre de 2000 ?";
 choices[7]= new Array();
 choices[7][0] = "Los dominios .name est&aacute;n reservados a individuos y se podr&aacute;n reservar nombres de dominio con la estructura 'MiNombre.MiApellido.name'";
 choices[7][1] = "Los dominios .pro est&aacute;n reservados a profesionales de determinadas categor&iacute;as, agrupados en subdominios, existiendo inicialmente para m&eacute;dicos (.med.pro), abogados (.law.pro) y auditores (.cpa.pro)";
 choices[7][2] = "el dominio .coop est&aacute; reservado a cooperativas y asociaciones de todo tipo (ONGs, partidos pol&iacute;ticos, asociaciones deportivas&hellip;), y el nombre del dominio deber&aacute; obligatoriamente ser el de la asociaci&oacute;n o cooperativa";
 choices[7][3] = "Los dominios .aero y .museum est&aacute;n reservados a la industria y servicios a&eacute;reos y a la comunidad de museos respectivamente";
 answers[7] = choices[7][2];
 units[7] = "112";
 comments[7] = "Id Pregunta: 3158. ";


//  Id pregunta: 3205 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  El cable coaxial Thick, comunmente conocido como 'amarillo':";
 choices[8]= new Array();
 choices[8][0] = "Sigue el est&aacute;ndar 10 Base 2";
 choices[8][1] = "Tiene un terminador tipo BNC";
 choices[8][2] = "Presenta una impedancia de 50 Ohm.";
 choices[8][3] = "Ninguna de las anteriores";
 answers[8] = choices[8][2];
 units[8] = "99";
 comments[8] = "Id Pregunta: 3205. NULL";


//  Id pregunta: 3209 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  El concepto y primer desarrollo del servicio WWW se debe a:";
 choices[9]= new Array();
 choices[9][0] = "Vinton Cerf";
 choices[9][1] = "Leonard Kleinrock";
 choices[9][2] = "Robert Kahn";
 choices[9][3] = "Tim Berners-Lee";
 answers[9] = choices[9][3];
 units[9] = "112";
 comments[9] = "Id Pregunta: 3209. ";


//  Id pregunta: 3355 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  De las siguientes funciones, &iquest;cu&aacute;l no es propia del protocolo de nivel de red?:";
 choices[10]= new Array();
 choices[10][0] = "Conmutaci&oacute;n";
 choices[10][1] = "Encaminamiento";
 choices[10][2] = "Multiplexaci&oacute;n";
 choices[10][3] = "Tarificaci&oacute;n";
 answers[10] = choices[10][3];
 units[10] = "100";
 comments[10] = "Id Pregunta: 3355. NULL";


//  Id pregunta: 3359 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  De los siguientes, &iquest;cu&aacute;l no es un servicio ofrecido por la norma FTAM de OSI?:";
 choices[11]= new Array();
 choices[11][0] = "Seguridad, gesti&oacute;n de permisos de acceso";
 choices[11][1] = "Transferencia, mover ficheros o parte de ellos";
 choices[11][2] = "Acceso, localizaci&oacute;n de un registro";
 choices[11][3] = "Gesti&oacute;n, creaci&oacute;n / borrado de ficheros";
 answers[11] = choices[11][0];
 units[11] = "112";
 comments[11] = "Id Pregunta: 3359. ";


//  Id pregunta: 3399 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  El orden consecutivo de las capas definidas en OSI, es:";
 choices[12]= new Array();
 choices[12][0] = "F&iacute;sico, enlace, red, transporte, presentaci&oacute;n y aplicaci&oacute;n";
 choices[12][1] = "F&iacute;sico, enlace, red, transporte, comunicaci&oacute;n, presentaci&oacute;n y aplicaci&oacute;n";
 choices[12][2] = "F&iacute;sico, enlace, red, transporte, sesi&oacute;n, presentaci&oacute;n y aplicaci&oacute;n";
 choices[12][3] = "Enlace, red, transporte, comunicaci&oacute;n, presentaci&oacute;n y aplicaci&oacute;n";
 answers[12] = choices[12][2];
 units[12] = "100";
 comments[12] = "Id Pregunta: 3399. NULL";


//  Id pregunta: 3418 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  ICMP es:";
 choices[13]= new Array();
 choices[13][0] = "un protocolo de intercambio de correos electr&oacute;nicos";
 choices[13][1] = "un protocolo de gesti&oacute;n de internet";
 choices[13][2] = "un protocolo de mensajes para el control de internet";
 choices[13][3] = "ninguno de los anteriores";
 answers[13] = choices[13][2];
 units[13] = "100";
 comments[13] = "Id Pregunta: 3418. NULL";


//  Id pregunta: 3419 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  Indicar cu&aacute;l de las siguientes desventajas no corresponde al uso de un filtro de paquetes como cortafuegos:";
 choices[14]= new Array();
 choices[14][0] = "Sobrecarga";
 choices[14][1] = "Dificultad de la implementaci&oacute;n de reglas de filtrado";
 choices[14][2] = "Posibilidad de ataques de &quot;IP spoofing&quot;";
 choices[14][3] = "Posibilidad de ataques de &quot;source routing&quot;";
 answers[14] = choices[14][0];
 units[14] = "111";
 comments[14] = "Id Pregunta: 3419. NULL";


//  Id pregunta: 3463 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  El protocolo utilizado para la comunicaci&oacute;n entre los nodos de una red GSM (MSC, HLR, VLR, ...) es el:";
 choices[15]= new Array();
 choices[15][0] = "ISUP";
 choices[15][1] = "MAP";
 choices[15][2] = "INAP";
 choices[15][3] = "RCP";
 answers[15] = choices[15][1];
 units[15] = "108";
 comments[15] = "Id Pregunta: 3463. ";


//  Id pregunta: 3504 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  En el modelo de referencia para interconexi&oacute;n de sistemas abiertos (ISO OSI) indicar cu&aacute;l de las siguientes respuestas es verdadera:";
 choices[16]= new Array();
 choices[16][0] = "El est&aacute;ndar RS-232-C se ha desarrollado para las l&iacute;neas de comunicaci&oacute;n de la capa f&iacute;sica";
 choices[16][1] = "El nivel de enlace corresponde a la l&iacute;nea 4";
 choices[16][2] = "El protocolo de enlace de datos se ocupa de la estandarizaci&oacute;n de las interfaces el&eacute;ctricas, mec&aacute;nicas y de se&ntilde;alizaci&oacute;n";
 choices[16][3] = "Es un modelo de 9 capas";
 answers[16] = choices[16][0];
 units[16] = "100";
 comments[16] = "Id Pregunta: 3504. NULL";


//  Id pregunta: 3569 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  En una arquitectura de tres capas la manipulaci&oacute;n de los datos corresponde a la capa de:";
 choices[17]= new Array();
 choices[17][0] = "Presentaci&oacute;n";
 choices[17][1] = "Aplicaci&oacute;n";
 choices[17][2] = "Datos";
 choices[17][3] = "En realidad las tres capas manipulan los datos";
 answers[17] = choices[17][2];
 units[17] = "114";
 comments[17] = "Id Pregunta: 3569. ";


//  Id pregunta: 3591 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  La codificaci&oacute;n Manchester tambi&eacute;n es conocida como:";
 choices[18]= new Array();
 choices[18][0] = "C&oacute;digo NRZ polar";
 choices[18][1] = "C&oacute;digo NRZ bipolar";
 choices[18][2] = "C&oacute;digo NRZ normal";
 choices[18][3] = "C&oacute;digo bifase";
 answers[18] = choices[18][3];
 units[18] = "100";
 comments[18] = "Id Pregunta: 3591. NULL";


//  Id pregunta: 3610 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  La funci&oacute;n fundamental de un &quot;m&oacute;dem&quot; es:";
 choices[19]= new Array();
 choices[19][0] = "La adaptaci&oacute;n de las se&ntilde;ales digitales entre ordenadores, para su transmisi&oacute;n a trav&eacute;s de la l&iacute;nea telef&oacute;nica b&aacute;sica";
 choices[19][1] = "La adaptaci&oacute;n de las se&ntilde;ales anal&oacute;gicas entre ordenadores, para su transmisi&oacute;n a trav&eacute;s de la l&iacute;nea telef&oacute;nica b&aacute;sica";
 choices[19][2] = "La adaptaci&oacute;n de las se&ntilde;ales anal&oacute;gicas y digitales entre ordenadores, para su transmisi&oacute;n a trav&eacute;s de la l&iacute;nea telef&oacute;nica digital";
 choices[19][3] = "La adaptaci&oacute;n de las se&ntilde;ales anal&oacute;gicas entre ordenadores, para su transmisi&oacute;n a trav&eacute;s de un medio no anal&oacute;gico";
 answers[19] = choices[19][0];
 units[19] = "99";
 comments[19] = "Id Pregunta: 3610. modems";


//  Id pregunta: 3625 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  La normativa referente a la Red Digital de Servicios Integrados para el uso por el usuario de los canales de 64 kbps, &iquest;a qu&eacute; nivel del modelo de referencia OSI corresponder&iacute;a?:";
 choices[20]= new Array();
 choices[20][0] = "Al nivel 8 : Administraci&oacute;n";
 choices[20][1] = "Al nivel 1 : F&iacute;sico";
 choices[20][2] = "Al nivel 3 : Red";
 choices[20][3] = "Al nivel 5 : Enlace";
 answers[20] = choices[20][1];
 units[20] = "102,104,109";
 comments[20] = "Id Pregunta: 3625. ";


//  Id pregunta: 3628 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  La orden por la que se aprueba el reglamento de desarrollo en lo relativo al uso de dominio p&uacute;blico radioel&eacute;ctrico es:";
 choices[21]= new Array();
 choices[21][0] = "Orden de 10 de marzo de 2000";
 choices[21][1] = "Orden de 10 de marzo de 2001";
 choices[21][2] = "Orden de 10 de marzo de 2002";
 choices[21][3] = "Orden de 9 de marzo de 2000. Derogada por el Real Decreto 863/2008";
 answers[21] = choices[21][3];
 units[21] = "110";
 comments[21] = "Id Pregunta: 3628. ";


//  Id pregunta: 3637 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  La red digital de servicios integrados (RDSI):";
 choices[22]= new Array();
 choices[22][0] = "Procede de la evoluci&oacute;n de la red telef&oacute;nica conmutada";
 choices[22][1] = "El acceso b&aacute;sico disponen de dos canales B (64 Kbit/s) que emplean conmutaci&oacute;n de paquetes";
 choices[22][2] = "El acceso desde el terminal de abonado se realiza mediante fibra &oacute;ptica";
 choices[22][3] = "El acceso b&aacute;sico no se puede utilizar para conexi&oacute;n de centralitas digitales PABX's";
 answers[22] = choices[22][0];
 units[22] = "103";
 comments[22] = "Id Pregunta: 3637. ";


//  Id pregunta: 3653 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  UDDI: ";
 choices[23]= new Array();
 choices[23][0] = "Es una variante de alt&iacute;sima velocidad de la conocida FDDI";
 choices[23][1] = "Es una variante de FDDI adecuada para su desarrollo en LANs";
 choices[23][2] = "Significa User Definition Domain  Interface";
 choices[23][3] = "Ninguna de las anteriores es v&aacute;lida";
 answers[23] = choices[23][3];
 units[23] = "69";
 comments[23] = "Id Pregunta: 3653. NULL";


//  Id pregunta: 3737 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Los protocolos TP0 y TP2 de OSI est&aacute;n dise&ntilde;ados para redes de tipo A (fiables). &iquest;Cu&aacute;l de las siguentes afirmaciones es correcta?:";
 choices[24]= new Array();
 choices[24][0] = "TP0 no dispone de mecanismos de checksum y TP2 s&iacute;";
 choices[24][1] = "TP2 numera las TPDUs (Transport Protocolo Data Unit) y TP0 no";
 choices[24][2] = "En TP2 existen mecanismos de restablecimiento de la conexi&oacute;n mientras que en TP0 no";
 choices[24][3] = "Ambos permiten el multiplexado Ascendente (varias conexiones de transporte pueden usar la misma de red)";
 answers[24] = choices[24][1];
 units[24] = "100";
 comments[24] = "Id Pregunta: 3737. NULL";


//  Id pregunta: 3784 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Respecto a J2ME y Symbian:";
 choices[25]= new Array();
 choices[25][0] = "Symbian soporta J2ME, y J2ME soporta Symbian";
 choices[25][1] = "Symbian soporta J2ME, y J2ME no soporta Symbian";
 choices[25][2] = "Symbian no soporta J2ME, y J2ME soporta Symbian";
 choices[25][3] = "Symbian no soporta J2ME, y J2ME no soporta Symbian";
 answers[25] = choices[25][1];
 units[25] = "60";
 comments[25] = "Id Pregunta: 3784. J2ME no es multiplataforma.";


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


//  Id pregunta: 3834 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  SIP es:";
 choices[27]= new Array();
 choices[27][0] = "una versi&oacute;n segura del protocolo IP";
 choices[27][1] = "un conjunto de protocolos para gesti&oacute;n de sesiones";
 choices[27][2] = "protocolo para instalaciones de software";
 choices[27][3] = "nada de lo anterior";
 answers[27] = choices[27][1];
 units[27] = "104";
 comments[27] = "Id Pregunta: 3834. ";


//  Id pregunta: 3837 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  SOAP:";
 choices[28]= new Array();
 choices[28][0] = "Es una especificaci&oacute;n para el intercambio de informaci&oacute;n estructurada en entornos descentralizados-distribuidos";
 choices[28][1] = "Fue propuesta originalmente por Microsoft";
 choices[28][2] = "Ninguna de las anteriores es v&aacute;lida";
 choices[28][3] = "Las respuestas 'a' y 'b' son ciertas";
 answers[28] = choices[28][3];
 units[28] = "113";
 comments[28] = "Id Pregunta: 3837. ";


//  Id pregunta: 3851 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  USSD es:";
 choices[29]= new Array();
 choices[29][0] = "Universal Serial Service Data";
 choices[29][1] = "Universal Synchronous Service Data";
 choices[29][2] = "Unstructured Supplementary Service Data";
 choices[29][3] = "Unsorted Simple Service Data";
 answers[29] = choices[29][2];
 units[29] = "107";
 comments[29] = "Id Pregunta: 3851. NULL";


//  Id pregunta: 3866 AÃ±o de creación de pregunta: 2004-01-01
 questions[30]= "31)  Qu&eacute; m&eacute;todo no se emplea para generar contenido din&aacute;mico en el cliente";
 choices[30]= new Array();
 choices[30][0] = "Applets";
 choices[30][1] = "JavaScript";
 choices[30][2] = "ActiveX";
 choices[30][3] = "CGI";
 answers[30] = choices[30][3];
 units[30] = "114";
 comments[30] = "Id Pregunta: 3866. Tanenbaum";


//  Id pregunta: 3883 AÃ±o de creación de pregunta: 2003-01-01
 questions[31]= "32)  &iquest;De qu&eacute; manera se puede balancear una granja de servidores?";
 choices[31]= new Array();
 choices[31][0] = "Se puede utilizar un balanceador hardware si hay comunicaci&oacute;n entre los nodos de la granja";
 choices[31][1] = "Se puede utilizar  un software cargado en cada nodo para repartir la carga entre los mismos";
 choices[31][2] = "Se puede hacer el balanceo con un balanceador hardware como con un balanceador software";
 choices[31][3] = "Ninguna de las respuestas es cierta";
 answers[31] = choices[31][2];
 units[31] = "113";
 comments[31] = "Id Pregunta: 3883. ";


//  Id pregunta: 3938 AÃ±o de creación de pregunta: 2003-01-01
 questions[32]= "33)  &iquest;Qu&eacute; funci&oacute;n tiene el protocolo ICMP?";
 choices[32]= new Array();
 choices[32][0] = "Control";
 choices[32][1] = "Transporte de paquetes";
 choices[32][2] = "Redirecci&oacute;n de tramas";
 choices[32][3] = "Control de congesti&oacute;n";
 answers[32] = choices[32][0];
 units[32] = "112";
 comments[32] = "Id Pregunta: 3938. ";


//  Id pregunta: 3950 AÃ±o de creación de pregunta: 2003-01-01
 questions[33]= "34)  En las redes de ordenadores, en la topolog&iacute;a en estrella:";
 choices[33]= new Array();
 choices[33][0] = "Un ordenador se conecta con el siguiente y el &uacute;ltimo con el primero, formando un circuito cerrado";
 choices[33][1] = "Existe un nodo ra&iacute;z del que cuelgan uno o varios nodos";
 choices[33][2] = "Existe un nodo central o hub al que se conectan todos los ordenadores";
 choices[33][3] = "Cada uno de los nodos est&aacute; conectado con todos los dem&aacute;s";
 answers[33] = choices[33][2];
 units[33] = "101";
 comments[33] = "Id Pregunta: 3950. ";


//  Id pregunta: 3963 AÃ±o de creación de pregunta: 2003-01-01
 questions[34]= "35)  Ordenar los siguientes dispositivos seg&uacute;n nivel OSI a puente b gateway c router d repetidor";
 choices[34]= new Array();
 choices[34][0] = "d a c b ";
 choices[34][1] = "a b c d";
 choices[34][2] = "b c d a";
 choices[34][3] = "b a d c ";
 answers[34] = choices[34][0];
 units[34] = "113";
 comments[34] = "Id Pregunta: 3963. ";


//  Id pregunta: 3971 AÃ±o de creación de pregunta: 2003-01-01
 questions[35]= "36)  Una de las caracter&iacute;sticas b&aacute;sicas de ATM (Modo de transferencia as&iacute;ncrono) es:";
 choices[35]= new Array();
 choices[35][0] = "Utiliza un formato de celda de longitud fija";
 choices[35][1] = "El tama&ntilde;o de la celda se negocia a nivel de enlace";
 choices[35][2] = "El tama&ntilde;o de la celda se negocia a trav&eacute;s de red";
 choices[35][3] = "El tama&ntilde;o de la celda se negocia a trav&eacute;s de transporte";
 answers[35] = choices[35][0];
 units[35] = "109";
 comments[35] = "Id Pregunta: 3971. ";


//  Id pregunta: 3978 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  Se&ntilde;ale la respuesta falsa sobre el coaxial tipo &quot;thick&quot;:";
 choices[36]= new Array();
 choices[36][0] = "Utiliza un conector BNC.";
 choices[36][1] = "Su impedancia es de 50 Ohm";
 choices[36][2] = "La longitud m&aacute;xima del segmento es de 500 m.";
 choices[36][3] = "Todas son falsas";
 answers[36] = choices[36][0];
 units[36] = "99";
 comments[36] = "Id Pregunta: 3978. ";


//  Id pregunta: 3996 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  En las redes HFC (Hybrid Fiber Coaxial), la transmisi&oacute;n  de informaci&oacute;n desde el usuario hacia la cabecera se realiza dedicando una parte del espectro, en concreto utilizando el rango de frecuencias comprendido entre:";
 choices[37]= new Array();
 choices[37][0] = "50-100 Mhz (aproximadamente)";
 choices[37][1] = "200-300 Mhz (aproximadamente)";
 choices[37][2] = "5-50 Mhz (aproximadamente)";
 choices[37][3] = "100-200 Mhz (aproximadamente)";
 answers[37] = choices[37][2];
 units[37] = "105";
 comments[37] = "Id Pregunta: 3996. ";


//  Id pregunta: 4001 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  En el caso de que una red de cable proporcione servicios de datos, &iquest;c&oacute;mo se denomina al equipo situado en la cabecera de la red que env&iacute;a y recibe los flujos de datos?";
 choices[38]= new Array();
 choices[38][0] = "Router";
 choices[38][1] = "Switch";
 choices[38][2] = "Gateway";
 choices[38][3] = "CMTS";
 answers[38] = choices[38][3];
 units[38] = "105";
 comments[38] = "Id Pregunta: 4001. ";


//  Id pregunta: 4002 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  &iquest;Cu&aacute;l es el n&uacute;mero aproximado de usuarios a los que da servicio cada ONT (&quot;Optical Network Termination&quot;) en una red de cable?";
 choices[39]= new Array();
 choices[39][0] = "50";
 choices[39][1] = "500";
 choices[39][2] = "5.000";
 choices[39][3] = "50.000";
 answers[39] = choices[39][1];
 units[39] = "105";
 comments[39] = "Id Pregunta: 4002. ";


//  Id pregunta: 4060 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  Cual de los siguientes dispositivos es m&aacute;s barato";
 choices[40]= new Array();
 choices[40][0] = "Adaptador Ethernet";
 choices[40][1] = "Adaptador Bluetooth";
 choices[40][2] = "Adaptador Wi-Fi";
 choices[40][3] = "Adaptador Wi-Max";
 answers[40] = choices[40][1];
 units[40] = "112";
 comments[40] = "Id Pregunta: 4060. ";


//  Id pregunta: 4063 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  Se&ntilde;ale la respuesta correcta en relaci&oacute;n a las extensiones MIME";
 choices[41]= new Array();
 choices[41][0] = "MIME es acr&oacute;nimo de MultiProtocol Internet Mail Extension";
 choices[41][1] = "permite enviar contenido multimedia a trav&eacute;s de HTTP";
 choices[41][2] = "el est&aacute;ndar de seguridad S-MIME permite el env&iacute;o seguro de mensajes y transacciones";
 choices[41][3] = "fue creado por Ia Asociaci&oacute;n de Amigos de Internet (IFA)";
 answers[41] = choices[41][2];
 units[41] = "112";
 comments[41] = "Id Pregunta: 4063. ";


//  Id pregunta: 4080 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  El teletrabajo por parte de un empleado de una empresa requiere un acceso";
 choices[42]= new Array();
 choices[42][0] = "a trav&eacute;s de su extranet, con los mecanismos de seguridad adecuados";
 choices[42][1] = "a su DMZ";
 choices[42][2] = "a su intranet";
 choices[42][3] = "requiere el establecimiento de un servidor VPN en el hogar del empleado";
 answers[42] = choices[42][2];
 units[42] = "113";
 comments[42] = "Id Pregunta: 4080. ";


//  Id pregunta: 4126 AÃ±o de creación de pregunta: 2006-01-01
 questions[43]= "44)  Protocolo que permite a programas dispersos sobre diferentes sistemas operativos interactuar entre ellos. Esta definici&oacute;n no corresponde con:";
 choices[43]= new Array();
 choices[43][0] = "CORBA";
 choices[43][1] = "SOAP";
 choices[43][2] = "RMI";
 choices[43][3] = "DCOM";
 answers[43] = choices[43][3];
 units[43] = "50";
 comments[43] = "Id Pregunta: 4126. ";


//  Id pregunta: 4160 AÃ±o de creación de pregunta: 2006-01-01
 questions[44]= "45)  Para que se usa el comando HELO en SMTP";
 choices[44]= new Array();
 choices[44][0] = "Para autenticar los clientes SMTP";
 choices[44][1] = "Para identificar los clientes SMTP";
 choices[44][2] = "Este comando no forma parte de SMTP";
 choices[44][3] = "El comando HELO es usado en SNMP (no en SMTP)";
 answers[44] = choices[44][1];
 units[44] = "106";
 comments[44] = "Id Pregunta: 4160. ";


//  Id pregunta: 4171 AÃ±o de creación de pregunta: 2006-01-01
 questions[45]= "46)  &iquest;C&oacute;mo evita SSL un ataque de &quot;hombre en el medio&quot;?";
 choices[45]= new Array();
 choices[45][0] = "Usa certificados para autenticar la clave p&uacute;blica del servidor";
 choices[45][1] = "Usa un valor aleatorio &uacute;nico por conexi&oacute;n en el protocolo de intercambio de credenciales";
 choices[45][2] = "Usa claves de 128 bits";
 choices[45][3] = "Cada mensaje enviado incluye un n&uacute;mero de secuencia";
 answers[45] = choices[45][1];
 units[45] = "70";
 comments[45] = "Id Pregunta: 4171. ";


//  Id pregunta: 4188 AÃ±o de creación de pregunta: 2006-01-01
 questions[46]= "47)  Es falso que se pueda utilizar como protocolo interno de encaminamiento en la red de un Ministerio";
 choices[46]= new Array();
 choices[46][0] = "Tablas est&aacute;ticas";
 choices[46][1] = "RIP";
 choices[46][2] = "OSPF";
 choices[46][3] = "BGP";
 answers[46] = choices[46][3];
 units[46] = "100";
 comments[46] = "Id Pregunta: 4188. NULL";


//  Id pregunta: 4231 AÃ±o de creación de pregunta: 2006-01-01
 questions[47]= "48)  Se desea contratar el servicio Frame Relay con un operador de comunicaciones, para una conexi&oacute;n entre dos puntos. En este caso se deber&aacute; tener en cuenta que el CIR para los Circuitos Virtuales Permanentes (CVP) contratados deber&aacute; cumplir lo siguiente";
 choices[47]= new Array();
 choices[47][0] = "El CIR es mayor que la velocidad de acceso";
 choices[47][1] = "El CIR es menor o igual que la velocidad de acceso";
 choices[47][2] = "El CIR es igual en los dos sentidos del CVP";
 choices[47][3] = "El CIR es distinto en los dos sentidos del CVP";
 answers[47] = choices[47][1];
 units[47] = "109";
 comments[47] = "Id Pregunta: 4231. ";


//  Id pregunta: 4234 AÃ±o de creación de pregunta: 2006-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre GPRS no es v&aacute;lida?";
 choices[48]= new Array();
 choices[48][0] = "Las velocidades de conexi&oacute;n pueden llegar hasta 192 Kbps";
 choices[48][1] = "Los usuarios permanecen conectados aunque no reciban o envien datos";
 choices[48][2] = "Se pueden realizar o recibir llamadas de voz mientras se est&aacute; conectado";
 choices[48][3] = "La tarificaci&oacute;n es por el volumen de datos transferidos";
 answers[48] = choices[48][0];
 units[48] = "108";
 comments[48] = "Id Pregunta: 4234. ";


//  Id pregunta: 4351 AÃ±o de creación de pregunta: 2007-01-01
 questions[49]= "50)  &iquest;Qu&eacute; se entiende por servicio universal, seg&uacute;n la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones?";
 choices[49]= new Array();
 choices[49][0] = "Que todos los usuarios finales puedan obtener una conexi&oacute;n a la red telef&oacute;nica p&uacute;blica.";
 choices[49][1] = "Que los usuarios finales con discapacidad tengan acceso a los mismos servicios que el resto de los usuarios finales.";
 choices[49][2] = "El conjunto definido de servicios cuya prestaci&oacute;n se garantiza para todos los usuarios finales con independencia de su localizaci&oacute;n geogr&aacute;fica, con una calidad determinada y a un precio asequible.";
 choices[49][3] = "Que se ponga a disposici&oacute;n de los abonados al servicio telef&oacute;nico disponible al p&uacute;blico una gu&iacute;a general de n&uacute;meros de abonados.";
 answers[49] = choices[49][2];
 units[49] = "110";
 comments[49] = "Id Pregunta: 4351. ";


//  Id pregunta: 4485 AÃ±o de creación de pregunta: 2007-01-01
 questions[50]= "51)  Las estaciones conectadas a una red de &aacute;rea local por medio de tarjetas de red de tipo Ethernet:";
 choices[50]= new Array();
 choices[50][0] = "Acceden al medio de transmisi&oacute;n en periodos de tiempo predeterminados, por lo que nunca se producen colisiones.";
 choices[50][1] = "Acceden el medio de transmisi&oacute;n de forma aleatoria, por lo que pueden producirse colisiones.";
 choices[50][2] = "Acceden al medio de transmisi&oacute;n en diferentes frecuencias de trabajo, por Io que pueden acceder varias simult&aacute;neamente sin que se produzcan colisiones";
 choices[50][3] = "Nunca acceden Si tras un primer intento se detecto una colisi&oacute;n.";
 answers[50] = choices[50][1];
 units[50] = "99";
 comments[50] = "Id Pregunta: 4485. ";


//  Id pregunta: 4688 AÃ±o de creación de pregunta: 2007-01-01
 questions[51]= "52)  &iquest;Cu&aacute;l de la siguientes afirmaciones es falsa?";
 choices[51]= new Array();
 choices[51][0] = " El protocolo IPv6 admite direcciones en IPv4";
 choices[51][1] = "El protocolo ARP est&aacute; en la capa de aplicaci&oacute;n";
 choices[51][2] = "Los protocolos ARP y RARP tienen funciones inversas";
 choices[51][3] = "En IP se puede indicar que un datagrama no debe ser fragmentado";
 answers[51] = choices[51][1];
 units[51] = "100";
 comments[51] = "Id Pregunta: 4688. Examen 2006 JCYL";


//  Id pregunta: 4768 AÃ±o de creación de pregunta: 2007-01-01
 questions[52]= "53)  En ATM, para la transmisi&oacute;n de servicios is&oacute;cronos se utilizan los protocolos de adaptaci&oacute;n AAL1 y AAL2. La diferencia entre ellos es";
 choices[52]= new Array();
 choices[52][0] = "AAL1 es de velocidad variable y AAL2 es de velocidad constante";
 choices[52][1] = "AAL1 es de velocidad constante y AAL2 es de velocidad variable";
 choices[52][2] = "AAL1 es orientado a conexi&oacute;n y AAL2 es de tipo datagrama";
 choices[52][3] = "AAL1 es de tipo datagrama y AAL2 es orientado a conexi&oacute;n";
 answers[52] = choices[52][1];
 units[52] = "109";
 comments[52] = "Id Pregunta: 4768. ";


//  Id pregunta: 4772 AÃ±o de creación de pregunta: 2007-01-01
 questions[53]= "54)  Se&ntilde;ale la respuesta correcta sobre la Ley 9/2014 General de Telecomunicaciones";
 choices[53]= new Array();
 choices[53][0] = "El objetivo de esta Ley es la regulaci&oacute;n de las telecomunicaciones, que comprenden la explotaci&oacute;n de las redes y la prestaci&oacute;n de servicios de comunicaciones electr&oacute;nicas y los recursos asociados";
 choices[53][1] = "Se excluye del &aacute;mbito de esta Ley la regulaci&oacute;n de los servicios de telecomunicaciones para la defensa nacional y la protecci&oacute;n civil.";
 choices[53][2] = "Las telecomunicaciones tienen la consideraci&oacute;n de servicio p&uacute;blico y se prestan en r&eacute;gimen de libre competencia";
 choices[53][3] = "La Ley regula tanto el sector de las telecomunicaciones como el de los contenidos audiovisuales";
 answers[53] = choices[53][0];
 units[53] = "110";
 comments[53] = "Id Pregunta: 4772. ";


//  Id pregunta: 4825 AÃ±o de creación de pregunta: 2007-01-01
 questions[54]= "55)  Una red ATM (Asynchronous Transfer Mode):";
 choices[54]= new Array();
 choices[54][0] = "Tiene c&eacute;lulas cuyo tama&ntilde;o es de 48 bytes";
 choices[54][1] = "No es apropiada para tr&aacute;fico con requisitos de tiempo real";
 choices[54][2] = "Tiene los campos VPI (Virtual Path Identifier) y VCI (Virtual Channel Identifier), utilizados para efectuarfunciones de encaminamiento de las c&eacute;lulas";
 choices[54][3] = "No tiene ning&uacute;n mecanismo para detectar la ocurrencia de errores de transmisi&oacute;n en las c&eacute;lulas";
 answers[54] = choices[54][2];
 units[54] = "109";
 comments[54] = "Id Pregunta: 4825. ";


//  Id pregunta: 4836 AÃ±o de creación de pregunta: 2007-01-01
 questions[55]= "56)  En ADO.NET para mostrar datos en un control DataGrid:";
 choices[55]= new Array();
 choices[55][0] = "Hay que vincular el control DataGrid a un objeto DataView, seleccionar &quot;Permitir ordenaci&oacute;n&quot; en elGenerador de propiedades y generar una rutina de tratamiento del evento SortCommand";
 choices[55][1] = "Hay que establecer la propiedad DataSource y DataMember del control Datalist y definir los datos vinculadospor cada control en las plantillas del control DataList";
 choices[55][2] = "Hay que asignar el objeto DataSource y opcionalmente el objeto DataKeyField en el Generador depropiedades";
 choices[55][3] = "Hay que seleccionar una opci&oacute;n de paginado del panel Paginaci&oacute;n del Generador de propiedades del controlDataGrid";
 answers[55] = choices[55][2];
 units[55] = "115";
 comments[55] = "Id Pregunta: 4836. ";


//  Id pregunta: 4958 AÃ±o de creación de pregunta: 2003-01-01
 questions[56]= "57)  Pedro es administrador corporativo de seguridad. Para &eacute;l, la Intranet y la DMZ son:";
 choices[56]= new Array();
 choices[56][0] = "El conjunto de aplicaciones que son de uso interno del personal del Organismo.";
 choices[56][1] = "El conjunto de servicios y personal que no son directamente accedidos desde el exterior.";
 choices[56][2] = "Dominios de seguridad, entendidos como el conjunto de m&aacute;quinas cuya configuraci&oacute;n es responsabilidad de undepartamento interno.";
 choices[56][3] = "El conjunto de ordenadores que no tienen acceso directo al exterior.";
 answers[56] = choices[56][2];
 units[56] = "111";
 comments[56] = "Id Pregunta: 4958. Examen TIC B 2007";


//  Id pregunta: 5266 AÃ±o de creación de pregunta: 2003-01-01
 questions[57]= "58)  802.13 es el est&aacute;ndar IEEE referente a";
 choices[57]= new Array();
 choices[57][0] = "USB sin hilos";
 choices[57][1] = "WiMax";
 choices[57][2] = "Bluetooth";
 choices[57][3] = "Ninguna de las anteriores";
 answers[57] = choices[57][3];
 units[57] = "101";
 comments[57] = "Id Pregunta: 5266. ";


//  Id pregunta: 5287 AÃ±o de creación de pregunta: 2003-01-01
 questions[58]= "59)  Indique cu&aacute;l de las siguientes tecnolog&iacute;as JAVA puede utilizarse para invocar dentro de una aplicaci&oacute;n a un parser DOM:";
 choices[58]= new Array();
 choices[58][0] = "JAX-RPC";
 choices[58][1] = "SAAJ";
 choices[58][2] = "JAXR";
 choices[58][3] = "JAXP";
 answers[58] = choices[58][3];
 units[58] = "116";
 comments[58] = "Id Pregunta: 5287. ";


//  Id pregunta: 5612 AÃ±o de creación de pregunta: 2003-01-01
 questions[59]= "60)  Alguno de los &oacute;rganos a trav&eacute;s del cu&aacute;l ISOC ejerce sus funciones son:";
 choices[59]= new Array();
 choices[59][0] = "IAB para la asignaci&oacute;n de recursos. IEFT para la especificaci&oacute;n de est&aacute;ndares.";
 choices[59][1] = "IEFT para la especificaci&oacute;n de est&aacute;ndares. IESG para la supervisi&oacute;n y aprobaci&oacute;n de normas";
 choices[59][2] = "IAB para la supervisi&oacute;n y aprobaci&oacute;n de normas. IESG para la coordinaci&oacute;n";
 choices[59][3] = "IEFT para la coordinaci&oacute;n. IANA para la asignaci&oacute;n de recursos";
 answers[59] = choices[59][2];
 units[59] = "112";
 comments[59] = "Id Pregunta: 5612. ";


//  Id pregunta: 5867 AÃ±o de creación de pregunta: 2009-01-01
 questions[60]= "61)  &iquest;Cu&aacute;ntos bits utiliza el protocolo IPv6 (Internet Protocol version 6) para el campo de direcciones IP?";
 choices[60]= new Array();
 choices[60][0] = "16 bits";
 choices[60][1] = "32 bits";
 choices[60][2] = "64 bits";
 choices[60][3] = "128 bits";
 answers[60] = choices[60][3];
 units[60] = "100";
 comments[60] = "Id Pregunta: 5867. MAP 2008 A1";


//  Id pregunta: 6005 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  El est&aacute;ndar WSDL:";
 choices[61]= new Array();
 choices[61][0] = "Es el protocolo para efectuar llamadas a m&eacute;todos de objetos remotos mediante peticiones XML.";
 choices[61][1] = "Describe la interfaz de servicio";
 choices[61][2] = "Es el registro p&uacute;blico de servicios.";
 choices[61][3] = "Es el protocolo de transporte.";
 answers[61] = choices[61][1];
 units[61] = "69";
 comments[61] = "Id Pregunta: 6005. TIC A 2009";


//  Id pregunta: 6159 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  En cuanto a SFTP, se puede afirmar:";
 choices[62]= new Array();
 choices[62][0] = "Se obtiene al ejecutar FTP sobre SSH.";
 choices[62][1] = "Las siglas SFTP significan Simple File Transfer Protocol.";
 choices[62][2] = "El protocolo SFTP en s&iacute; no facilita la autenticaci&oacute;n y la seguridad, sino que espera que el protocolo subyacente asegure a este.";
 choices[62][3] = "Todas las respuestas anteriores son correctas.";
 answers[62] = choices[62][2];
 units[62] = "112";
 comments[62] = "Id Pregunta: 6159. ";


//  Id pregunta: 6184 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  Indique la afirmaci&oacute;n falsa sobre los sistemas de correo electr&oacute;nico SMTP:";
 choices[63]= new Array();
 choices[63][0] = "Es posible establecer DNS blacklist y whitelist en el cliente de correo y/o en el servidor.";
 choices[63][1] = "SMTP permite enviar mensajes codificados seg&uacute;n ASCII de 7 bits y longitud m&aacute;xima de 1000 caracteres.";
 choices[63][2] = "La cabecera MIME-Version debe contener el valor 2.0";
 choices[63][3] = "La cabecera  de un mensaje de correo  SMTP se especifica en la RFC 822.";
 answers[63] = choices[63][2];
 units[63] = "106";
 comments[63] = "Id Pregunta: 6184. ";


//  Id pregunta: 6222 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  &iquest;Cu&aacute;l de las siguientes NO es una caracter&iacute;stica com&uacute;n a Portlets y Servlets?:";
 choices[64]= new Array();
 choices[64][0] = "Generan contenido din&aacute;micamente.";
 choices[64][1] = "Son manejados por un contenedor especializado.";
 choices[64][2] = "Est&aacute;n asociados directamente a una URL.";
 choices[64][3] = "Su ciclo de vida es controlado por el contenedor.";
 answers[64] = choices[64][2];
 units[64] = "114";
 comments[64] = "Id Pregunta: 6222. ";


//  Id pregunta: 6341 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  &iquest;Qu&eacute; es un widget?";
 choices[65]= new Array();
 choices[65][0] = "Una aplicaci&oacute;n web que utiliza informaci&oacute;n de diversas fuentes relevantes para crear un nuevo servicio en base a ellas, normalmente empleando Servicios Web y APIs p&uacute;blicas. ";
 choices[65][1] = "Una red inform&aacute;tica entre pares, sin servidores centralizados, donde se puede compartir informaci&oacute;n de cualquier tipo.";
 choices[65][2] = "Una peque&ntilde;a aplicaci&oacute;n o m&oacute;dulo que realiza una funci&oacute;n concreta, generalmente de tipo visual, dentro de otras aplicaciones o sistemas operativos.";
 choices[65][3] = "Un enlace fijo que no var&iacute;a con el tiempo.";
 answers[65] = choices[65][2];
 units[65] = "120";
 comments[65] = "Id Pregunta: 6341. NULL";


//  Id pregunta: 6573 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  De las siguientes afirmaciones, &iquest;cu&aacute;l es la correcta?";
 choices[66]= new Array();
 choices[66][0] = "ARP y RARP son unos protocolos de facto para transmitir datos a trav&eacute;s de Internet";
 choices[66][1] = "ARP traduce la direcci&oacute;n IP a su correspondiente direcci&oacute;n MAC";
 choices[66][2] = "ICMP traduce la direcci&oacute;n MAC a su correspondiente direcci&oacute;n IP";
 choices[66][3] = "Todas las respuestas anteriores son correctas";
 answers[66] = choices[66][1];
 units[66] = "100";
 comments[66] = "Id Pregunta: 6573. NULL";


//  Id pregunta: 6577 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  El filtrado de paquetes no proporciona";
 choices[67]= new Array();
 choices[67][0] = "Bajo nivel de seguridad";
 choices[67][1] = "Protecci&oacute;n sobre la capa de red";
 choices[67][2] = "Alto rendimiento y escalabilidad";
 choices[67][3] = "Todas las respuestas anteriores son correctas";
 answers[67] = choices[67][1];
 units[67] = "111";
 comments[67] = "Id Pregunta: 6577. NULL";


//  Id pregunta: 7249 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)  En el protocolo MPLS, la cabecera de las etiquetas MPLS contienen los siguientes. Se&ntilde;ale la INCORRECTA";
 choices[68]= new Array();
 choices[68][0] = "Tipo de tr&aacute;fico (3 bits) usado para se&ntilde;alar la calidad de servicio";
 choices[68][1] = "Tiempo de vida (8 bits)";
 choices[68][2] = "Flag que determina final de la pila de etiquetas (1 bit)";
 choices[68][3] = "Comprobaci&oacute;n de redundancia c&iacute;clica (4 bits)";
 answers[68] = choices[68][3];
 units[68] = "100";
 comments[68] = "Id Pregunta: 7249. Examen TIC B 2009";


//  Id pregunta: 7256 AÃ±o de creación de pregunta: 2010-01-01
 questions[69]= "70)  La funci&oacute;n de un hub es ";
 choices[69]= new Array();
 choices[69][0] = "Reenviar los paquetes en funci&oacute;n de la direcci&oacute;n MAC de destino";
 choices[69][1] = "Repetir la informaci&oacute;n que llega a un puerto por el resto de puertos";
 choices[69][2] = "Dirigir correctamente tr&aacute;fico de una red a otra";
 choices[69][3] = "Asignar diferentes preferencias a los mensajes que fluyen por la red";
 answers[69] = choices[69][1];
 units[69] = "102";
 comments[69] = "Id Pregunta: 7256. Examen TIC B 2009";


//  Id pregunta: 7269 AÃ±o de creación de pregunta: 2010-01-01
 questions[70]= "71)  El Centro Criptol&oacute;gico Nacional (CCN) es el organismo responsable de velar por la seguridad de las TIC en las administraciones p&uacute;blicas, y de formar en este campo a sus profesionales. El CCN depende de:";
 choices[70]= new Array();
 choices[70][0] = "El Consejo Superior para la Administraci&oacute;n Electr&oacute;nica (Ministerio de la Presidencia)";
 choices[70][1] = "La F&aacute;brica Nacional de Moneda y Timbre (Ministerio de Econom&iacute;a y Hacienda)";
 choices[70][2] = "La Direcci&oacute;n General de la Polic&iacute;a y la Guardia Civil (Ministerio del Interior)";
 choices[70][3] = "El Centro Nacional de Inteligencia (Ministerio de Defensa)";
 answers[70] = choices[70][3];
 units[70] = "111";
 comments[70] = "Id Pregunta: 7269. Examen TIC B 2009";


//  Id pregunta: 7275 AÃ±o de creación de pregunta: 2010-01-01
 questions[71]= "72)  &iquest;Cu&aacute;l de las siguientes no es una ventaja de las m&aacute;quinas virtuales con respecto al hardware f&iacute;sico?";
 choices[71]= new Array();
 choices[71][0] = "Aislamiento";
 choices[71][1] = "Independencia  del software";
 choices[71][2] = "Encapsulamiento";
 choices[71][3] = "Compatibilidad";
 answers[71] = choices[71][1];
 units[71] = "119";
 comments[71] = "Id Pregunta: 7275. NULL";


//  Id pregunta: 7284 AÃ±o de creación de pregunta: 2010-01-01
 questions[72]= "73)  Una de las grandes ventajas que aporta la virtualizaci&oacute;n de infraestructuras en un centro de datos es:";
 choices[72]= new Array();
 choices[72][0] = "Reducci&oacute;n de personal de operaciones";
 choices[72][1] = "Reducci&oacute;n de costes de mantenimiento preventivo";
 choices[72][2] = "Gesti&oacute;n del ciclo de vida de la informaci&oacute;n (ILM) m&aacute;s eficaz";
 choices[72][3] = "Gesti&oacute;n agrupada (pooled) de recursos a lo largo de toda la Organizaci&oacute;n";
 answers[72] = choices[72][3];
 units[72] = "119";
 comments[72] = "Id Pregunta: 7284. Examen TIC B 2009";


//  Id pregunta: 8292 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l de los siguientes NO se encuentra entre los elementos de un Sistema de Gesti&oacute;n de Red?";
 choices[73]= new Array();
 choices[73][0] = "Gestor DHCP.";
 choices[73][1] = "MIB.";
 choices[73][2] = "Agente-SMAP.";
 choices[73][3] = "NMS.";
 answers[73] = choices[73][0];
 units[73] = "104";
 comments[73] = "Id Pregunta: 8292. Examen TIC A2 2010";


//  Id pregunta: 8311 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  Existe una variedad de tecnolog&iacute;as xDSL que se caracterizan por:";
 choices[74]= new Array();
 choices[74][0] = "La infraestructura f&iacute;sica que soporta el servicio: par de cobre, fibra &oacute;ptica u otros medios de transmisi&oacute;n.";
 choices[74][1] = "El n&uacute;mero de canales de alta velocidad disponibles. ";
 choices[74][2] = "Por la compatibilidad, o no, con la transmisi&oacute;n de voz, y la calidad de la misma.";
 choices[74][3] = "Su simetr&iacute;a/asimetr&iacute;a en los canales de subida y bajada de datos.";
 answers[74] = choices[74][3];
 units[74] = "107";
 comments[74] = "Id Pregunta: 8311. Examen TIC A2 2010";


//  Id pregunta: 8790 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre IPv6 es correcta?";
 choices[75]= new Array();
 choices[75][0] = "Las direcciones no son jer&aacute;rquicas y se asignan aleatoriamente";
 choices[75][1] = "Hay 2.7 billones de direcciones disponibles para asignar";
 choices[75][2] = "Las direcciones broadcast se reemplazan con direcciones multicast";
 choices[75][3] = "Un interfaz de red &uacute;nicamente podr&aacute; ser configurado con una &uacute;nica direcci&oacute;n";
 answers[75] = choices[75][2];
 units[75] = "100";
 comments[75] = "Id Pregunta: 8790. Examen UPM A2 2011";


//  Id pregunta: 8859 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  Los dos enfoques m&aacute;s habituales de la virtualizaci&oacute;n de servidores o estaciones de trabajo son:";
 choices[76]= new Array();
 choices[76][0] = "Hospedada y mediante hipervisor (bare metal)";
 choices[76][1] = "Paralela y mediante hipervisor (bare metal)";
 choices[76][2] = "Balanceada y mediante SPM (Service Platform Manager)";
 choices[76][3] = "Mediante hipervisor (bare metal) y mediante supervisor (full metal)";
 answers[76] = choices[76][0];
 units[76] = "119";
 comments[76] = "Id Pregunta: 8859. Analista Ayto. Madrid 2010";


//  Id pregunta: 8871 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  El primer paso para establecer conexiones sobre un enlace PPP conlleva:";
 choices[77]= new Array();
 choices[77][0] = "El nodo iniciador env&iacute;a tramas LCP (Link Control Protocol) para configurar el enlace de datos";
 choices[77][1] = "Antes de la activaci&oacute;n del enlace PPP, los routers a lo largo del path negocian las facilidades de autentificaci&oacute;n";
 choices[77][2] = "El nodo iniciador PPP env&iacute;a un mensaje de inicio de sesi&oacute;n a su vecino PPP m&aacute;s cercano";
 choices[77][3] = "El nodo iniciador PPP env&iacute;a un mensaje de inicio de sesi&oacute;n a todos los nodos adyacentes";
 answers[77] = choices[77][0];
 units[77] = "102";
 comments[77] = "Id Pregunta: 8871. Analista Ayto. Madrid 2010";


//  Id pregunta: 8997 AÃ±o de creación de pregunta: 2011-01-01
 questions[78]= "79)  Una red bluetooth de tipo piconet tiene un m&aacute;ximo de:";
 choices[78]= new Array();
 choices[78][0] = "1 maestro y 7 esclavos";
 choices[78][1] = "1 maestro y 15 esclavos";
 choices[78][2] = "1 maestro y 16 esclavos";
 choices[78][3] = "1 maestro y 32 esclavos";
 answers[78] = choices[78][0];
 units[78] = "107";
 comments[78] = "Id Pregunta: 8997. Examen UPM A2 2011";


//  Id pregunta: 9466 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  Respecto al direccionamiento de los mensajes en X.400 indique, de las siguientes afirmaciones, la falsa:";
 choices[79]= new Array();
 choices[79][0] = "El campo P hace referencia al dominio concreto al que pertenece el usuario dentro de la organizaci&oacute;n";
 choices[79][1] = "En el campo C de la direcci&oacute;n de correo se almacena el c&oacute;digo ISO para el nombre del pa&iacute;s al que pertenece una direcci&oacute;n de correo";
 choices[79][2] = "El campo CN indica el nombre com&uacute;n que puede, a su vez, dividirse en los subcampos S (apellido) y N (nombre)";
 choices[79][3] = "La omisi&oacute;n del campo ADMD indica el valor &quot;blank&quot;, por lo que no se trata de un campo obligatorio";
 answers[79] = choices[79][2];
 units[79] = "106";
 comments[79] = "Id Pregunta: 9466. ";


//  Id pregunta: 9505 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  &iquest;Cu&aacute;les de los siguientes no es un formato de sonido?";
 choices[80]= new Array();
 choices[80][0] = "MIDI";
 choices[80][1] = "Ogg Vorbis 1.0";
 choices[80][2] = "WAV";
 choices[80][3] = "VRML";
 answers[80] = choices[80][3];
 units[80] = "114";
 comments[80] = "Id Pregunta: 9505. NULL";


//  Id pregunta: 9715 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  En relaci&oacute;n con los protocolos de encaminamiento";
 choices[81]= new Array();
 choices[81][0] = "RIP y OSPF son protocolos de vector distancia.";
 choices[81][1] = "IGRP y EIGRP son protocolos de estado de enlace.";
 choices[81][2] = "RIP es un protocolo de encaminamiento interno y BGP lo es de encaminamiento externo.";
 choices[81][3] = "IS-IS y OSPF son protocolos de encaminamiento externo.";
 answers[81] = choices[81][2];
 units[81] = "102";
 comments[81] = "Id Pregunta: 9715. Examen TIC-A1 2013";


//  Id pregunta: 10037 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  Con respecto al protocolo DNS. &iquest;Cu&aacute;l de las siguientes opciones NO es una parte de un mensaje DNS?";
 choices[82]= new Array();
 choices[82][0] = "Cabecera.";
 choices[82][1] = "Checksum.";
 choices[82][2] = "Registros de recursos de Respuesta.";
 choices[82][3] = "Registros de recursos de Autoridad.";
 answers[82] = choices[82][1];
 units[82] = "112";
 comments[82] = "Id Pregunta: 10037. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10123 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  Cu&aacute;l de los siguientes es un protocolo de encaminamiento externo:";
 choices[83]= new Array();
 choices[83][0] = "RIP";
 choices[83][1] = "OSPF";
 choices[83][2] = "BGP";
 choices[83][3] = "ISIS";
 answers[83] = choices[83][2];
 units[83] = "102";
 comments[83] = "Id Pregunta: 10123. ";


//  Id pregunta: 10429 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  La virtualizaci&oacute;n basada en VDI (Virtual Desktop Infrastructure) ";
 choices[84]= new Array();
 choices[84][0] = "permite ratios de consolidaci&oacute;n de 10 a 1 respecto a servidores de terminales. ";
 choices[84][1] = "est&aacute; basado en la soluci&oacute;n XenApp de Citrix.";
 choices[84][2] = "aporta aislamiento y control sobre los puestos de trabajo gestionados.";
 choices[84][3] = "no est&aacute; dise&ntilde;ado para soportar el perfil de Desarrolladores, por el control limitado del entorno.  ";
 answers[84] = choices[84][2];
 units[84] = "119";
 comments[84] = "Id Pregunta: 10429. Examen TIC A1 2013";


//  Id pregunta: 10440 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  En el direccionamiento IPv4, clase C ";
 choices[85]= new Array();
 choices[85][0] = "los tres primeros bits est&aacute;n fijados a 110, y se pueden tener 2^21 redes con 254 nodos posibles. ";
 choices[85][1] = "los tres primeros bits est&aacute;n fijados a 101, y se pueden tener 2^21 redes  con 254 nodos posibles. ";
 choices[85][2] = "los tres primeros bits est&aacute;n fijados a 110, y se pueden tener 2^22 redes  con 126 nodos posibles. ";
 choices[85][3] = "los tres primeros bits est&aacute;n fijados a 101, y se pueden tener 2^22 redes  con 128 nodos posibles. ";
 answers[85] = choices[85][0];
 units[85] = "100";
 comments[85] = "Id Pregunta: 10440. Examen TIC A1 2013";


//  Id pregunta: 10492 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  &iquest;Cual de los siguientes no es un tipo de ataque ?";
 choices[86]= new Array();
 choices[86][0] = "Ataque por entrop&iacute;a";
 choices[86][1] = "Ataque por fuerza bruta";
 choices[86][2] = "Ataque con Tablas Arcoiris";
 choices[86][3] = "Todos son tipos de ataques";
 answers[86] = choices[86][0];
 units[86] = "111";
 comments[86] = "Id Pregunta: 10492. No hay referencias a ataques por entropia. En la guia CCN-STIC 436, por ejemplo, se pueden encontrar referencias a taques con Tablas Arcoiris, tambien en Wikipedia";


//  Id pregunta: 10664 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  La licencia del framework .NET:";
 choices[87]= new Array();
 choices[87][0] = "Propietaria";
 choices[87][1] = "Comercial";
 choices[87][2] = "Open Source";
 choices[87][3] = "Mixta";
 answers[87] = choices[87][2];
 units[87] = "115";
 comments[87] = "Id Pregunta: 10664. MIT License desde 2014";


//  Id pregunta: 10879 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  Se&ntilde;ale qu&eacute; norma del IEEE normaliza la tecnolog&iacute;a Power over Ethernet Plus (PoE +):";
 choices[88]= new Array();
 choices[88][0] = "IEEE 802.3ab";
 choices[88][1] = "IEEE 802.3at";
 choices[88][2] = "IEEE 802.3ap";
 choices[88][3] = "No es un est&aacute;ndar del IEEE sino que es una categor&iacute;a de EIA/TIA 568b.";
 answers[88] = choices[88][1];
 units[88] = "107";
 comments[88] = "Id Pregunta: 10879. Examen GSI 2014";


//  Id pregunta: 10914 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  En un escenario de movilidad IP &iquest;de qu&eacute; se encarga el Agente Base (Home Agent)?";
 choices[89]= new Array();
 choices[89][0] = "Es el nodo que cambia su punto de conexi&oacute;n a la red sin cambiar su direcci&oacute;n IP o perder las conexiones establecidas.";
 choices[89][1] = "Es el router situado en la red origen del nodo m&oacute;vil que intercepta el tr&aacute;fico destinado al nodo m&oacute;vil y se lo reenv&iacute;a mediante t&uacute;neles IP, realizando adem&aacute;s tareas de localizaci&oacute;n de los nodos m&oacute;viles.";
 choices[89][2] = "Es el router situado en la red visitada que proporciona servicios de encaminamiento a los nodos m&oacute;viles registrados.";
 choices[89][3] = "Es el router situado en la red visitada que facilita una nueva direcci&oacute;n IP al nodo m&oacute;vil.";
 answers[89] = choices[89][1];
 units[89] = "100";
 comments[89] = "Id Pregunta: 10914. Examen GSI 2014";


//  Id pregunta: 10924 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  Para la instalaci&oacute;n del cableado estructurado de un edificio de oficinas, en el que se cuenta con redes Ethernet y Gigabit Ethernet, se&ntilde;ale la respuesta correcta:";
 choices[90]= new Array();
 choices[90][0] = "Es necesario contar con un switch FC en cada una de las plantas del edificio para la interconexi&oacute;n del cableado UTP/STP.";
 choices[90][1] = "Puede emplearse cableado UTP (Unshielded Twisted Pair) de la categor&iacute;a 1 y 2.";
 choices[90][2] = "Puede emplearse cableado UTP (Unshielded Twisted Pair) de la categor&iacute;a 5 y 6.";
 choices[90][3] = "Puede emplearse cableado UTP (Unshielded Twisted Pair) de la categor&iacute;a 3 y 4.";
 answers[90] = choices[90][2];
 units[90] = "99";
 comments[90] = "Id Pregunta: 10924. TIC A1 AGE 2014";


//  Id pregunta: 10958 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Para la direcci&oacute;n de loopback, es correcto que:";
 choices[91]= new Array();
 choices[91][0] = "Se ha reservado una direcci&oacute;n en IPv4 (127.0.0.1) y una direcci&oacute;n en IPv6 (::127.0.0.1)";
 choices[91][1] = "Se ha reservado una direcci&oacute;n en IPv4 (127.0.0.1) y una direcci&oacute;n en IPv6 (::1)";
 choices[91][2] = "Se han reservado 256 direcciones en IPv4 (127.0.0.0/24) y 256 direcciones en IPv6 (::127.0.0.1-255)";
 choices[91][3] = "Se han reservado 16.777.214 direcciones en IPv4 (127.0.0.0/8) y una direcci&oacute;n en IPv6 (::1)";
 answers[91] = choices[91][3];
 units[91] = "100";
 comments[91] = "Id Pregunta: 10958. TIC A1 AGE 2014";


//  Id pregunta: 11185 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l de las siguientes funciones no corresponde al MINETUR?";
 choices[92]= new Array();
 choices[92][0] = "Gestionar el Registro de Operadores";
 choices[92][1] = "Establecer obligaciones espec&iacute;ficas de operadores con poder significativo";
 choices[92][2] = "Proponer al gobierno la aprobaci&oacute;n de los planes de numeraci&oacute;n";
 choices[92][3] = "Administraci&oacute;n del dominio p&uacute;blico radioel&eacute;ctrico";
 answers[92] = choices[92][1];
 units[92] = "110";
 comments[92] = "Id Pregunta: 11185. ";


//  Id pregunta: 11417 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Seg&uacute;n la Ley 9/2014, &iquest;cu&aacute;l de los siguientes no es un derecho espec&iacute;fico de los usuarios finales de redes y servicios de comunicaciones?";
 choices[93]= new Array();
 choices[93][0] = "Derecho de acceder a los servicios de emergencia de forma gratuita.";
 choices[93][1] = "A impedir mediante un procedimiento sencillo y gratuito la presentaci&oacute;n de la identificaci&oacute;n de su l&iacute;nea a las llamadas emitidas.";
 choices[93][2] = "El derecho a la continuidad de servicio y a obtener una compensaci&oacute;n autom&aacute;tica por su interrupci&oacute;n.";
 choices[93][3] = "A figurar en las gu&iacute;as de abonados obteniendo una retribuci&oacute;n econ&oacute;mica por ello a cargo del Fondo General del Servicio P&uacute;blico.";
 answers[93] = choices[93][3];
 units[93] = "110";
 comments[93] = "Id Pregunta: 11417. ";


//  Id pregunta: 11436 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Seg&uacute;n la Ley 9/2014, un usuario final podr&aacute; resolver un contrato de redes y servicios de telecomunicaciones:";
 choices[94]= new Array();
 choices[94][0] = "Solo al finalizar el contrato";
 choices[94][1] = "Anticipadamente con penalizaci&oacute;n";
 choices[94][2] = "Anticipadamente sin penalizaci&oacute;n.";
 choices[94][3] = "Ninguna de las anteriores.";
 answers[94] = choices[94][2];
 units[94] = "110";
 comments[94] = "Id Pregunta: 11436. ";


//  Id pregunta: 11473 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Seg&uacute;n la Ley 9/2014, corresponde al MINETUR:";
 choices[95]= new Array();
 choices[95][0] = "Inspecci&oacute;n de niveles &uacute;nicos de emisi&oacute;n radioel&eacute;ctrica tolerable.";
 choices[95][1] = "Aprobaci&oacute;n de los planes de utilizaci&oacute;n del espectro.";
 choices[95][2] = "Elaboraci&oacute;n de los planes de utilizaci&oacute;n del espectro.";
 choices[95][3] = "Ninguna de las anteriores.";
 answers[95] = choices[95][3];
 units[95] = "110";
 comments[95] = "Id Pregunta: 11473. ";


//  Id pregunta: 11576 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Indique la respuesta FALSA sobre la tecnolog&iacute;a HSDPA.";
 choices[96]= new Array();
 choices[96][0] = "Utiliza t&eacute;cnicas de redundancia incremental durante la transmisi&oacute;n de tramas.";
 choices[96][1] = "Incorpora una mejora del enlace ascendente de UMTS de manera que permite disponer de una nueva portadora a 384 Kbps.";
 choices[96][2] = "Utiliza FAST PACKET SCHEDULING, con el cual las estaci&oacute;n base decide a qu&eacute; usuarios se les enviar&aacute; datso en el siguiente marco de 4 ms.";
 choices[96][3] = "Mantiene la compatibilidad en sentido inverso con W-CDMA.";
 answers[96] = choices[96][2];
 units[96] = "108";
 comments[96] = "Id Pregunta: 11576. NULL";


//  Id pregunta: 11694 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;cu&aacute;l no es un estado de puerto en el protocolo STP?";
 choices[97]= new Array();
 choices[97][0] = "Listening";
 choices[97][1] = "Learning";
 choices[97][2] = "Forwarding";
 choices[97][3] = "Broadcasting";
 answers[97] = choices[97][3];
 units[97] = "102";
 comments[97] = "Id Pregunta: 11694. NULL";


//  Id pregunta: 11700 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Una WAN X.25 est&aacute;ndar corresponde a una red f&iacute;sica:";
 choices[98]= new Array();
 choices[98][0] = "Punto a punto";
 choices[98][1] = "Broadcast multi-acceso";
 choices[98][2] = "No broadcast multi-acceso";
 choices[98][3] = "Broadcast punto a multipunto";
 answers[98] = choices[98][2];
 units[98] = "104";
 comments[98] = "Id Pregunta: 11700. NULL";


//  Id pregunta: 11715 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Cu&aacute;l es la forma en que un administrador puede configurar VLAN?";
 choices[99]= new Array();
 choices[99][0] = "Est&aacute;ticamente o Dinamicamente";
 choices[99][1] = "Din&aacute;micamente o a trav&eacute;s de una base de datos de VLAN";
 choices[99][2] = "A trav&eacute;s de un servidor DHCP";
 choices[99][3] = "A trav&eacute;s de  una base de datos";
 answers[99] = choices[99][0];
 units[99] = "102";
 comments[99] = "Id Pregunta: 11715. NULL";


