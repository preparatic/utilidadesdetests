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

//  Id pregunta: 1487 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre FDDI es cierta?:";
 choices[0]= new Array();
 choices[0][0] = "FDDI, en el nivel f&iacute;sico,  utiliza una codificaci&oacute;n llamada &quot;4 de 5&quot; en lugar de la codificaci&oacute;n de Manchester";
 choices[0][1] = "La codificaci&oacute;n utilizada en FDDI no permite el autosincronismo aportado por la codificaci&oacute;n de Manchester";
 choices[0][2] = "La no utilizaci&oacute;n de una codificaci&oacute;n con autosincronismo en FDDI obliga a la necesidad de un pre&aacute;mbulo de 8 o m&aacute;s bytes que permita la sincronizaci&oacute;n de los relojes del emisor y el receptor";
 choices[0][3] = "Todas las respuestas anteriores son ciertas";
 answers[0] = choices[0][3];
 units[0] = "101";
 comments[0] = "Id Pregunta: 1487. ";


//  Id pregunta: 2896 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto de MAGERIT?:";
 choices[1]= new Array();
 choices[1][0] = "MAGERIT es un &oacute;rgano especializado del CSAE para establecer la pol&iacute;tica de seguridad de los sistemas de informaci&oacute;n en las Administraciones P&uacute;blicas";
 choices[1][1] = "MAGERIT es una metodolog&iacute;a para an&aacute;lisis y gesti&oacute;n de riesgos de los sistemas de informaci&oacute;n de las Administraciones P&uacute;blicas";
 choices[1][2] = "MAGERIT defiende que la seguridad debe ser independiente del medio";
 choices[1][3] = "El objetivo de MAGERIT es conseguir la confianza en la utilizaci&oacute;n de t&eacute;cnicas inform&aacute;ticas y telem&aacute;ticas";
 answers[1] = choices[1][0];
 units[1] = "33";
 comments[1] = "Id Pregunta: 2896. ";


//  Id pregunta: 2929 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  La tecnolog&iacute;a DCOM toma las siglas de:";
 choices[2]= new Array();
 choices[2][0] = "Distributed Communication Model";
 choices[2][1] = "Development of Concurrent Multisystems";
 choices[2][2] = "Dynamic Component-Oriented Measure";
 choices[2][3] = "Distributed Component Object Model";
 answers[2] = choices[2][3];
 units[2] = "114";
 comments[2] = "Id Pregunta: 2929. ";


//  Id pregunta: 2957 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  Dada la direcci&oacute;n IP 00001010.00000001.10000001.10000001 con m&aacute;scara de subred 11111111.11111111.11111111.11000000. Indique cu&aacute;l es, en binario, la direcci&oacute;n IP resultante de aplicar la operaci&oacute;n l&oacute;gica correspondiente entre ambas para calcular la subred ";
 choices[3]= new Array();
 choices[3][0] = "00001010.00000001.10000001.10000000";
 choices[3][1] = "00001010.00000001.10000001.00000000";
 choices[3][2] = "00001010.00000001.00000000.00000001";
 choices[3][3] = "00001010.00000001.10000001.11000000";
 answers[3] = choices[3][0];
 units[3] = "100";
 comments[3] = "Id Pregunta: 2957. Examen TIC MAP B 2004";


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


//  Id pregunta: 3009 AÃ±o de creación de pregunta: 2004-01-01
 questions[5]= "6)  &iquest;A qu&eacute; se corresponden las siglas 802.11i sobre redes inal&aacute;mbricas?";
 choices[5]= new Array();
 choices[5][0] = "A especificaciones de nivel f&iacute;sico ";
 choices[5][1] = "A especificaciones sobre calidad de servicio QoS";
 choices[5][2] = "A especificaciones de Seguridad";
 choices[5][3] = "A especificiaciones de roaming";
 answers[5] = choices[5][2];
 units[5] = "107";
 comments[5] = "Id Pregunta: 3009. NULL";


//  Id pregunta: 3060 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  El lenguaje de marcado que permite el desarrollo de servicios IVR basados en web se denomina:";
 choices[6]= new Array();
 choices[6][0] = "IVRML";
 choices[6][1] = "VML";
 choices[6][2] = "VoiceXML";
 choices[6][3] = "IVRXML";
 answers[6] = choices[6][2];
 units[6] = "94";
 comments[6] = "Id Pregunta: 3060. ";


//  Id pregunta: 3063 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  En las transmisiones de se&ntilde;ales el&eacute;ctricas a las perturbaciones producidas en sistemas no lineales y que consisten en la aparici&oacute;n en el receptor de nuevas componentes espectrales de segundo orden se las llama:";
 choices[7]= new Array();
 choices[7][0] = "Distorsi&oacute;n no lineal";
 choices[7][1] = "Distorsi&oacute;n lineal de segundo orden";
 choices[7][2] = "Intermodulaci&oacute;n";
 choices[7][3] = "Paradiafon&iacute;a";
 answers[7] = choices[7][2];
 units[7] = "99";
 comments[7] = "Id Pregunta: 3063. ";


//  Id pregunta: 3078 AÃ±o de creación de pregunta: 2005-01-01
 questions[8]= "9)  La intrusi&oacute;n de un virus inform&aacute;tico del tipo gusano (worm) en un ordenador puede afectar, en primer lugar, por ocupaci&oacute;n de todo el espacio disponible en disco:";
 choices[8]= new Array();
 choices[8][0] = "La dimensi&oacute;n de confidencialidad de la informaci&oacute;n almacenada";
 choices[8][1] = "La dimensi&oacute;n de disponibilidad de la informaci&oacute;n almacenada";
 choices[8][2] = "La dimensi&oacute;n de integridad de la informaci&oacute;n almacenada";
 choices[8][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;c&rsquo; son correctas";
 answers[8] = choices[8][1];
 units[8] = "111";
 comments[8] = "Id Pregunta: 3078. NULL";


//  Id pregunta: 3170 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l de las siguientes expresiones definen mejor las ventajas de un multiplexor estad&iacute;stico?:";
 choices[9]= new Array();
 choices[9][0] = "Pueden atender m&aacute;s circuitos que los multiplexores por divisi&oacute;n de tiempos (MDT)";
 choices[9][1] = "Permiten evaluar la eficacia de transmisi&oacute;n de los circuitos que multiplexa";
 choices[9][2] = "Permite utilizar una l&iacute;nea de transmisi&oacute;n de menor velocidad que el MDT equivalente";
 choices[9][3] = "Evita el uso de los filtros requeridos por el MDT";
 answers[9] = choices[9][2];
 units[9] = "101";
 comments[9] = "Id Pregunta: 3170. ";


//  Id pregunta: 3185 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Cu&aacute;l de las siguientes respuestas sobre Emulacion de LAN en ATM es cierta?:";
 choices[10]= new Array();
 choices[10][0] = "Proporciona a las estaciones enganchadas via ATM las mismas capacidades que obtienen de una LAN tipo Ethernet o Token-Ring";
 choices[10][1] = "Requiere modificaciones de los protocolos de mayor nivel (de la capa de red)  para permitir operaciones via una red ATM";
 choices[10][2] = "Intenta emular el Media Access Control (MAC) real de la LAN espec&iacute;fica";
 choices[10][3] = "Define un esquema de encapsulado para Ethernet, Token-Ring y FDDI";
 answers[10] = choices[10][0];
 units[10] = "109";
 comments[10] = "Id Pregunta: 3185. ";


//  Id pregunta: 3191 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Dentro del modelo OSI la funci&oacute;n de 'manejo de distintos terminales', corresponde al nivel:";
 choices[11]= new Array();
 choices[11][0] = "Nivel de red";
 choices[11][1] = "Nivel de transporte";
 choices[11][2] = "Nivel de sesi&oacute;n";
 choices[11][3] = "Nivel de presentaci&oacute;n";
 answers[11] = choices[11][3];
 units[11] = "100";
 comments[11] = "Id Pregunta: 3191. NULL";


//  Id pregunta: 3192 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Dentro del modelo OSI la funci&oacute;n de 'mantener la secuencialidad de la informaci&oacute;n', corresponde al nivel:";
 choices[12]= new Array();
 choices[12][0] = "Nivel de red";
 choices[12][1] = "Nivel de transporte";
 choices[12][2] = "Nivel de sesi&oacute;n";
 choices[12][3] = "Nivel de presentaci&oacute;n";
 answers[12] = choices[12][0];
 units[12] = "100";
 comments[12] = "Id Pregunta: 3192. NULL";


//  Id pregunta: 3193 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Dentro del modelo OSI la funci&oacute;n de 'permitir a un usuario entrar en un sistema remoto a tiempo compartido, o transferir ficheros entre dos m&aacute;quinas', corresponde al nivel:";
 choices[13]= new Array();
 choices[13][0] = "Nivel de red";
 choices[13][1] = "Nivel de transporte";
 choices[13][2] = "Nivel de sesi&oacute;n";
 choices[13][3] = "Nivel de presentaci&oacute;n";
 answers[13] = choices[13][2];
 units[13] = "100";
 comments[13] = "Id Pregunta: 3193. NULL";


//  Id pregunta: 3230 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  &iquest;Cu&aacute;l de los siguientes podr&iacute;a ser usado en un sistema aut&oacute;nomo para enrutamiento?:";
 choices[14]= new Array();
 choices[14][0] = "BGP (Border Gateway Protocol)";
 choices[14][1] = "EGP (Exterior Gateway Protocol)";
 choices[14][2] = "AGP (Autonomous Gateway Protocol)";
 choices[14][3] = "RIP (Routing Information Protocol)";
 answers[14] = choices[14][3];
 units[14] = "102";
 comments[14] = "Id Pregunta: 3230. ";


//  Id pregunta: 3266 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  &iquest;En qu&eacute; componente de una red GSM se centraliza la gesti&oacute;n de los servicios suplementarios?:";
 choices[15]= new Array();
 choices[15][0] = "MSC";
 choices[15][1] = "HLR";
 choices[15][2] = "VLR";
 choices[15][3] = "EIR";
 answers[15] = choices[15][1];
 units[15] = "108";
 comments[15] = "Id Pregunta: 3266. ";


//  Id pregunta: 3269 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  &iquest;En qu&eacute; nivel del modelo de Referencia OSI se llevar&iacute;a a cabo el cifrado de datos?:";
 choices[16]= new Array();
 choices[16][0] = "Nivel 5 : Comunicaci&oacute;n";
 choices[16][1] = "Nivel 2 : Enlace";
 choices[16][2] = "Nivel 6 : Presentaci&oacute;n";
 choices[16][3] = "Nivel 4 : Transporte";
 answers[16] = choices[16][2];
 units[16] = "100";
 comments[16] = "Id Pregunta: 3269. ";


//  Id pregunta: 3404 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Entre los modos de conexi&oacute;n de la Red Digital de Servicios Integrados se define el Acceso B&aacute;sico. Indique cu&aacute;l de las siguientes opciones lo define, o si son falsas todas las definiciones:";
 choices[17]= new Array();
 choices[17][0] = "Un Acceso B&aacute;sico se define como el constituido por dos canales B para conmutaci&oacute;n de circuitos y un canal D para se&ntilde;alizaci&oacute;n y conmutaci&oacute;n de paquetes";
 choices[17][1] = "Un Acceso B&aacute;sico se define como el constituido por treinta canales B para conmutaci&oacute;n de circuitos y un canal D para se&ntilde;alizaci&oacute;n y conmutaci&oacute;n de paquetes";
 choices[17][2] = "Un Acceso B&aacute;sico se define como el constituido por doce canales B para conmutaci&oacute;n de circuitos y un canal D para se&ntilde;alizaci&oacute;n y conmutaci&oacute;n de paquetes";
 choices[17][3] = "Ninguna de las anteriores";
 answers[17] = choices[17][0];
 units[17] = "103";
 comments[17] = "Id Pregunta: 3404. ";


//  Id pregunta: 3414 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  GPS es:";
 choices[18]= new Array();
 choices[18][0] = "General Packet System, Sistema general de paquetes, protocolo de tipo general del que GPRS (General Packet Radio System) es su particularizaci&oacute;n para las comunicaciones v&iacute;a radio";
 choices[18][1] = "Gaussian Phase Shifting, cambio de fase gaussiano, tipo de modulaci&oacute;n usada com&uacute;nmente en los intercambios de informaci&oacute;n mediante t&eacute;cnicas telem&aacute;ticas";
 choices[18][2] = "Group Pulling System, sistema de ofrecimiento a grupos, muy usado en tecnolog&iacute;as de difusi&oacute;n multimedia (en especial TV digital y canales de internet) para enviar informaci&oacute;n a colectivos";
 choices[18][3] = "Global Positioning System, sistema de posicionamiento global, usado como m&eacute;todo de localizaci&oacute;n v&iacute;a radio y usando sat&eacute;lites para el c&aacute;lculo de las coordenadas";
 answers[18] = choices[18][3];
 units[18] = "108";
 comments[18] = "Id Pregunta: 3414. NULL";


//  Id pregunta: 3423 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  Indicar entre las siguientes normas del IEEE la que trata sobre &lsquo;Demand Priority Access Method&rsquo;:";
 choices[19]= new Array();
 choices[19][0] = "802.10";
 choices[19][1] = "802.11";
 choices[19][2] = "802.12";
 choices[19][3] = "802.13";
 answers[19] = choices[19][2];
 units[19] = "101";
 comments[19] = "Id Pregunta: 3423. ";


//  Id pregunta: 3444 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  El protocolo de comunicaciones denominado HDLC, es un protocolo orientado a:";
 choices[20]= new Array();
 choices[20][0] = "Car&aacute;cter, de modos: ARM, ABM y SRM";
 choices[20][1] = "Bit , de modos: ARM, ABM y SRM";
 choices[20][2] = "Car&aacute;cter, con cadencia secuencial";
 choices[20][3] = "Bit, con cadencia secuencial";
 answers[20] = choices[20][1];
 units[20] = "100";
 comments[20] = "Id Pregunta: 3444. NULL";


//  Id pregunta: 3462 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  El protocolo TFTP (sic):";
 choices[21]= new Array();
 choices[21][0] = "Significa Trivial FTP";
 choices[21][1] = "Utiliza el conocido puerto 69";
 choices[21][2] = "Deber&iacute;a ser protegido especificamente en el Firewall";
 choices[21][3] = "Todas las anteriores respuestas son correctas";
 answers[21] = choices[21][3];
 units[21] = "112";
 comments[21] = "Id Pregunta: 3462. ";


//  Id pregunta: 3541 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  En los sistemas de conmutaci&oacute;n de paquetes:";
 choices[22]= new Array();
 choices[22][0] = "Se pueden distinguir dos tipos fundamentales : datagrama y circuito l&oacute;gico";
 choices[22][1] = "En estas redes existe un tiempo de espera producido por la sobrecarga de paquetes en algunos nodos";
 choices[22][2] = "Los tiempos de espera se reducen mediante diversas t&eacute;cnicas de encaminamiento";
 choices[22][3] = "Para evitar la congesti&oacute;n de la red se estudian las rutas &oacute;ptimas para cada par de nodos y se guardan en un nodo central";
 answers[22] = choices[22][2];
 units[22] = "101";
 comments[22] = "Id Pregunta: 3541. ";


//  Id pregunta: 3544 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  En notaci&oacute;n Kendall A/B/X/Y/Z: ";
 choices[23]= new Array();
 choices[23][0] = "A especifica la distribuci&oacute;n del tiempo de servicio.";
 choices[23][1] = "B especifica ls distribuci&oacute;n de las llegadas al sistema.";
 choices[23][2] = "Las dos anteriores son ciertas.";
 choices[23][3] = "Ninguna de las anteriores es v&aacute;lida.";
 answers[23] = choices[23][3];
 units[23] = "";
 comments[23] = "Id Pregunta: 3544. Kendall T&ordm; Colas";


//  Id pregunta: 3556 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  En telecomunicaciones se emplea mucho el concepto matem&aacute;tico de 'transformada'. &iquest;Podr&iacute;a decir a qu&eacute; se refiere este concepto?";
 choices[24]= new Array();
 choices[24][0] = "Es un cambio en la modulaci&oacute;n de la se&ntilde;al al pasar por las bobinas de 4 hilos.";
 choices[24][1] = "Es una operaci&oacute;n matem&aacute;tica que expresa una ecuaci&oacute;n en otros t&eacute;rminos mucho m&aacute;s f&aacute;cilmente tratables por un ordenador y m&aacute;s intuitivamente comprensibles por el ser humano.";
 choices[24][2] = "Es un cambio de base de las cantidades para poder operar con ellas en l&oacute;gica digital.";
 choices[24][3] = "Nada de lo anterior es cierto.";
 answers[24] = choices[24][1];
 units[24] = "99";
 comments[24] = "Id Pregunta: 3556. NULL";


//  Id pregunta: 3641 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  La separaci&oacute;n entre diferentes canales de radio en UMTS se hace mediante:";
 choices[25]= new Array();
 choices[25][0] = "Diferentes frecuencias";
 choices[25][1] = "Distintos intervalos temporales";
 choices[25][2] = "Diferentes c&oacute;digos";
 choices[25][3] = "Ninguna de las anteriores";
 answers[25] = choices[25][2];
 units[25] = "108";
 comments[25] = "Id Pregunta: 3641. ";


//  Id pregunta: 3669 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  Una de las capas o niveles del modelo de referencia de interconexi&oacute;n de sistemas abiertos (OSI) no corresponde a la operaci&oacute;n de los dispositivos mencionados. &iquest;Cual?:";
 choices[26]= new Array();
 choices[26][0] = "F&iacute;sico - Repetidor (&ldquo;repeater&rdquo;), Concentrador (&ldquo;hub&rdquo;), M&oacute;dem, TR1, AT";
 choices[26][1] = "Enlace - Puente (&ldquo;bridge&rdquo;), Conmutador (&ldquo;switch&rdquo;)";
 choices[26][2] = "Enlace - Conector V.24, Conector V.35";
 choices[26][3] = "Red - Encaminador (&ldquo;router&rdquo;)";
 answers[26] = choices[26][2];
 units[26] = "100,101";
 comments[26] = "Id Pregunta: 3669. ";


//  Id pregunta: 3741 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  Los servicios de telecomunicaciones de libre recepci&oacute;n:";
 choices[27]= new Array();
 choices[27][0] = "Son emisiones sonoras, television u otro g&eacute;nero";
 choices[27][1] = "Incluyen los de minima cobertura";
 choices[27][2] = "Pueden llegar hasta los 20 Watts ";
 choices[27][3] = "Todas los anteriores respuestas son correctas";
 answers[27] = choices[27][3];
 units[27] = "110";
 comments[27] = "Id Pregunta: 3741. ";


//  Id pregunta: 3743 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  Los sistemas de radio en los que los m&oacute;viles no est&aacute;n asignados a una &uacute;nica frecuencia sino que pueden usar una cualquiera de las frecuencias o canales disponibles se denomina:";
 choices[28]= new Array();
 choices[28][0] = "GSM";
 choices[28][1] = "TACS";
 choices[28][2] = "NMT";
 choices[28][3] = "Trunking";
 answers[28] = choices[28][3];
 units[28] = "108";
 comments[28] = "Id Pregunta: 3743. ";


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


//  Id pregunta: 3761 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  Para evitar el problema que suponen las cach&eacute;s y las sesiones a la hora de estudiar los accesos a una web se usa una t&eacute;cnica para garantizar el conocimiento de todos los accesos. Esta t&eacute;cnica se conoce como:";
 choices[30]= new Array();
 choices[30][0] = "cookies";
 choices[30][1] = "logs";
 choices[30][2] = "huellas";
 choices[30][3] = "ninguna de las anteriores";
 answers[30] = choices[30][2];
 units[30] = "112";
 comments[30] = "Id Pregunta: 3761. ";


//  Id pregunta: 3774 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  POP e IMAP son:";
 choices[31]= new Array();
 choices[31][0] = "protocolos de entrega de correo para servidores";
 choices[31][1] = "protocolos de acceso al correo para clientes";
 choices[31][2] = "Ninguna de las respuestas anteriores es correcta";
 choices[31][3] = "las respuestas a) y b) son correctas";
 answers[31] = choices[31][1];
 units[31] = "106";
 comments[31] = "Id Pregunta: 3774. ";


//  Id pregunta: 3798 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  Respecto de ADSL, puede decirse que:";
 choices[32]= new Array();
 choices[32][0] = "No requiere ning&uacute;n tipo de dispositivo conectado al PC";
 choices[32][1] = "Basta con un m&oacute;dem ADSL en casa del abonado";
 choices[32][2] = "Necesita que la central del abonado pueda dar el servicio";
 choices[32][3] = "El abonado ha de estar a como mucho 1000 m de su central";
 answers[32] = choices[32][2];
 units[32] = "107";
 comments[32] = "Id Pregunta: 3798. NULL";


//  Id pregunta: 3805 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  Se entiende por firma electr&oacute;nica avanzada:";
 choices[33]= new Array();
 choices[33][0] = "Firma electr&oacute;nica que permite la identificaci&oacute;n del signatario y ha sido creada por medios que &eacute;ste mantiene bajo su exclusivo control, de manera que est&eacute; vinculada &uacute;nicamente al mismo y a los datos a los que se refiere";
 choices[33][1] = "Conjunto de datos, en forma electr&oacute;nica, anejos a otros datos electr&oacute;nicos o asociados funcionalmente a ellos, como medio para identificar formalmente al autor del documento que la recoge";
 choices[33][2] = "Certificaci&oacute;n electr&oacute;nica que vincula unos datos de verificaci&oacute;n de firma a un signatario y confirma su identidad";
 choices[33][3] = "Firma electr&oacute;nica que permite la identificaci&oacute;n del signatario y ha sido creada por medios que &eacute;ste puede utilizar, con un alto nivel de confianza, bajo su exclusivo control, de manera que est&eacute; vinculada &uacute;nicamente al mismo y a los datos a los que se refiere";
 answers[33] = choices[33][3];
 units[33] = "30";
 comments[33] = "Id Pregunta: 3805. Ley 25/2015. Disposici&oacute;n Final Cuarta. Modificaci&oacute;n de la Ley 59/2003";


//  Id pregunta: 3817 AÃ±o de creación de pregunta: 2002-01-01
 questions[34]= "35)  Se&ntilde;ale cu&aacute;l es el mecanismo que utiliza el protocolo IP para gesti&oacute;n de flujo:";
 choices[34]= new Array();
 choices[34][0] = "Frenado brusco con trama de control &quot;rmr&quot;";
 choices[34][1] = "Frenado brusco con trama de control &quot;wack&quot;";
 choices[34][2] = "Ventana de cr&eacute;dito de tama&ntilde;o variable";
 choices[34][3] = "El protocolo IP no realiza control de flujo";
 answers[34] = choices[34][3];
 units[34] = "100";
 comments[34] = "Id Pregunta: 3817. NULL";


//  Id pregunta: 3896 AÃ±o de creación de pregunta: 2003-01-01
 questions[35]= "36)  En una red VoIP el elemento llamado &quot;SoftSwitch&quot; es el encargado de:  ";
 choices[35]= new Array();
 choices[35][0] = "Permitir la comunicaci&oacute;n entre la Red VoIP y las Redes tradicionales de Conmutaci&oacute;n de Circuitos";
 choices[35][1] = "Proporcionar una interfaz hacia la Red VoIP y una o mas interfaces tradicionales de voz hacia el cliente ";
 choices[35][2] = "Recibir la se&ntilde;alizaci&oacute;n de las llamadas y de enrutarlas hacia su destino";
 choices[35][3] = "Ninguna de las respuestas anteriores es cierta";
 answers[35] = choices[35][2];
 units[35] = "100";
 comments[35] = "Id Pregunta: 3896. NULL";


//  Id pregunta: 3976 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  La Directiva Europea sobre compatibilidad electro magnetica EMC es:";
 choices[36]= new Array();
 choices[36][0] = "89/336/EEC";
 choices[36][1] = "87/306/EEC";
 choices[36][2] = "87/95/EEC";
 choices[36][3] = "79/335/EEC";
 answers[36] = choices[36][0];
 units[36] = "99";
 comments[36] = "Id Pregunta: 3976. ";


//  Id pregunta: 3986 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  En relaci&oacute;n a los switches, se&ntilde;ale la respuesta falsa:";
 choices[37]= new Array();
 choices[37][0] = "Tienen mayor rendimiento que los puentes, y pueden trabajar a la velocidad nominal (wire speed) de la interfaz.";
 choices[37][1] = "En la conmutaci&oacute;n &quot;store-and-forward&quot; recibe la trama y la retransmite si es correcta, tras haber comprobado el CRC.";
 choices[37][2] = "En la conmutaci&oacute;n &quot;cut-throutgh&quot; si el CRC es err&oacute;neo la trama no se retransmite";
 choices[37][3] = "Mediante &quot;cut-through libre de fragmentos&quot; se reciben 64 bytes antes de retransmitir.";
 answers[37] = choices[37][2];
 units[37] = "102";
 comments[37] = "Id Pregunta: 3986. ";


//  Id pregunta: 4010 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  Indique la afirmaci&oacute;n correcta sobre los servicios de directorio:";
 choices[38]= new Array();
 choices[38][0] = "X.500 y LDAP codifican la informaci&oacute;n en ASN.1";
 choices[38][1] = "X.500 codifica la informaci&oacute;n en ASN.1 mientras que LDAP usa cadenas de caracteres";
 choices[38][2] = "LDAP codifica la informaci&oacute;n en ASN.1 mientras X.500 usa cadenas de caracteres";
 choices[38][3] = "X.500 y LDAP usan cadenas de caracteres para codificar la informaci&oacute;n";
 answers[38] = choices[38][1];
 units[38] = "106";
 comments[38] = "Id Pregunta: 4010. ";


//  Id pregunta: 4094 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  &iquest;En que se basa AJAX?";
 choices[39]= new Array();
 choices[39][0] = "En JavaScript";
 choices[39][1] = "En Java";
 choices[39][2] = "En JSP";
 choices[39][3] = "En JSF";
 answers[39] = choices[39][0];
 units[39] = "116";
 comments[39] = "Id Pregunta: 4094. ";


//  Id pregunta: 4100 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  A la hora de empaquetar aplicaciones J2EE utilizaremos";
 choices[40]= new Array();
 choices[40][0] = ".jar";
 choices[40][1] = ".jar y .war dependiendo del contenido y recursos que utilicemos";
 choices[40][2] = "b) es correcta y adem&aacute;s .ear, aunque fundamentalmente se restringe para los EJBs";
 choices[40][3] = "El empaquetamiento no se determina en J2EE";
 answers[40] = choices[40][2];
 units[40] = "116";
 comments[40] = "Id Pregunta: 4100. ";


//  Id pregunta: 4103 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  Los no dos de interconexi&oacute;n que forman el backbone de Iternet en la actualidad, reciben el nombre de:";
 choices[41]= new Array();
 choices[41][0] = "NBA";
 choices[41][1] = "NAT";
 choices[41][2] = "NSFNet";
 choices[41][3] = "NAP";
 answers[41] = choices[41][3];
 units[41] = "112";
 comments[41] = "Id Pregunta: 4103. ";


//  Id pregunta: 4172 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  Si pido a alguien su nombre le estoy pidiendo";
 choices[42]= new Array();
 choices[42][0] = "Identificaci&oacute;n";
 choices[42][1] = "Autorizaci&oacute;n";
 choices[42][2] = "Autenticaci&oacute;n";
 choices[42][3] = "Ninguna de las anteriores";
 answers[42] = choices[42][0];
 units[42] = "111";
 comments[42] = "Id Pregunta: 4172. NULL";


//  Id pregunta: 4335 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  Se&ntilde;ale cu&aacute;les de los siguientes son problemas de la transmisi&oacute;n de se&ntilde;ales el&eacute;ctricas sobre un medio que afectan a la calidad de las comunicaciones: I) Atenuaci&oacute;n II) Propagaci&oacute;n III)  distorsi&oacute;n.";
 choices[43]= new Array();
 choices[43][0] = "I y II.";
 choices[43][1] = "II y III.";
 choices[43][2] = "I y III.";
 choices[43][3] = "I, II y III.";
 answers[43] = choices[43][2];
 units[43] = "97";
 comments[43] = "Id Pregunta: 4335. NULL";


//  Id pregunta: 4338 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  Marcos es el administrador de una LAN Ethernet que consta de 10 estaciones de trabajo, 2 servidores y 3 impresoras, todo ello conectado a trav&eacute;s de un hub central de 20 puertos. El rendimiento de la red ha ca&iacute;do en picado como consecuencia de la instalaci&oacute;n de una nueva aplicaci&oacute;n, cr&iacute;tica para la Organizaci&oacute;n, que genera muchas colisiones de paquetes, ralentizando los accesos a datos y servicios. Los usuarios presionan al Director de Sistemas de Informaci&oacute;n para que se solucione el problema. El Director pide a Marcos su opini&oacute;n sobre la soluci&oacute;n m&aacute;s econ&oacute;mica y eficiente. El consejo de Marcos deber&iacute;a ser:";
 choices[44]= new Array();
 choices[44][0] = "Sustituir el cableado UTP por fibra &oacute;ptica para aumentar el ancho de banda.";
 choices[44][1] = "Sustituir los dos servidores actuales por un servidor tetraprocesador.";
 choices[44][2] = "Desinstalar la aplicaci&oacute;n que causa los problemas.";
 choices[44][3] = "Sustituir el hub por un switch.";
 answers[44] = choices[44][3];
 units[44] = "100";
 comments[44] = "Id Pregunta: 4338. ";


//  Id pregunta: 4536 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  Un enlace del tipo STM-1:";
 choices[45]= new Array();
 choices[45][0] = "Es un enlace PDH de 155,52 Mbps";
 choices[45][1] = "Es un enlace PDH de 622,08 Mbps.";
 choices[45][2] = "Es un enlace SDH de 622,08 Mbps.";
 choices[45][3] = "Es un enlace SDH de 155,52 Mbps.";
 answers[45] = choices[45][3];
 units[45] = "";
 comments[45] = "Id Pregunta: 4536. ";


//  Id pregunta: 4773 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  De acuerdo con lo establecido en la Ley 9/2014 General de Telecomunicaciones, &iquest;a cu&aacute;l de las siguientes entidades no le corresponde la competencia sancionadora en materia de telecomunicaciones?";
 choices[46]= new Array();
 choices[46][0] = "Al Secretario de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n";
 choices[46][1] = "A la Comisi&oacute;n Nacional de los Mercados y la Competencia";
 choices[46][2] = "A la Agencia Estatal de Radiocomunicaciones";
 choices[46][3] = "Todas tienen competencia sancionadora";
 answers[46] = choices[46][2];
 units[46] = "110";
 comments[46] = "Id Pregunta: 4773. ";


//  Id pregunta: 4796 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  &iquest;Cu&aacute;l de las siguientes afirmaciones relativas al conjunto de est&aacute;ndares IEEE (Institute of Electrical and ElectronicsEngineers) 802.11 es cierta?";
 choices[47]= new Array();
 choices[47][0] = "El est&aacute;ndar IEEE 802.11b utiliza la t&eacute;cnica de modulaci&oacute;n DSSS (Direct-sequence Spread Spectrum)";
 choices[47][1] = "El est&aacute;ndar IEEE 802.11a utiliza la t&eacute;cnica de modulaci&oacute;n FHSS (Frequency-hopping spread spectrum)";
 choices[47][2] = "El est&aacute;ndar IEEE 802.11 original utiliza la t&eacute;cnica de modulaci&oacute;n OFDM (Orthogonal Frequency-divisionMultiplexing)";
 choices[47][3] = "El est&aacute;ndar IEEE 802.11g utiliza la t&eacute;cnica de modulaci&oacute;n DWDM (Dense Wavelength Division Multiplexing)";
 answers[47] = choices[47][0];
 units[47] = "107";
 comments[47] = "Id Pregunta: 4796. NULL";


//  Id pregunta: 4815 AÃ±o de creación de pregunta: 2007-01-01
 questions[48]= "49)  Un administrador de red ha de asignar direcciones IP est&aacute;ticas a los servidores en la subred 192.168.20.24/29.Teniendo en cuenta que al router se le asigna la primera de las direcciones &uacute;tiles de dicha subred, &iquest;cu&aacute;l ser&iacute;a laconfiguraci&oacute;n IP a definir en uno de los citados servidores si se le quiere reservar la &uacute;ltima direcci&oacute;n IP asignabledentro de dicho rango?";
 choices[48]= new Array();
 choices[48][0] = "Direcci&oacute;n IP: 192.168.20.31. M&aacute;scara de red: 255.255.255.248. Puerta de enlace predeterminada:192.168.20.25";
 choices[48][1] = "Direcci&oacute;n IP: 192.168.20.254. M&aacute;scara de red: 255.255.255.0. Puerta de enlace predeterminada:192.168.20.1";
 choices[48][2] = "Direcci&oacute;n IP: 192.168.20.30. M&aacute;scara de red: 255.255.255.248. Puerta de enlace predeterminada:192.168.20.25";
 choices[48][3] = "Direcci&oacute;n IP: 192.168.20.28. M&aacute;scara de red: 255.255.255.248 Puerta de enlace predeterminada:192.168.20.1";
 answers[48] = choices[48][2];
 units[48] = "100";
 comments[48] = "Id Pregunta: 4815. ";


//  Id pregunta: 4834 AÃ±o de creación de pregunta: 2007-01-01
 questions[49]= "50)  &iquest;Cu&aacute;ntos bits ocupa la cabecera de un mensaje ICMPv4 (Internet Control Message Protocol version 4)?";
 choices[49]= new Array();
 choices[49][0] = "32";
 choices[49][1] = "64";
 choices[49][2] = "128";
 choices[49][3] = "256";
 answers[49] = choices[49][1];
 units[49] = "100";
 comments[49] = "Id Pregunta: 4834. ";


//  Id pregunta: 4865 AÃ±o de creación de pregunta: 2007-01-01
 questions[50]= "51)  El Servicio Universal contemplado en la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, NOgarantiza:";
 choices[50]= new Array();
 choices[50][0] = "Que el ciudadano pueda elegir, para la prestaci&oacute;n del servicio universal, a cualquiera de los operadoresregistrados a nivel nacional";
 choices[50][1] = "Que todos los usuarios finales puedan obtener una conexi&oacute;n a la red telef&oacute;nica p&uacute;blica desde una ubicaci&oacute;nfija y acceder a la prestaci&oacute;n del servicio telef&oacute;nico disponible al p&uacute;blico";
 choices[50][2] = "Que se ponga a disposici&oacute;n de los abonados al servicio telef&oacute;nico disponible al p&uacute;blico una gu&iacute;a general den&uacute;meros de abonados, ya sea impresa o electr&oacute;nica";
 choices[50][3] = "Que exista una oferta suficiente de tel&eacute;fonos p&uacute;blicos de pago, en todo el territorio nacional, que satisfagarazonablemente las necesidades de los usuarios finales";
 answers[50] = choices[50][0];
 units[50] = "110";
 comments[50] = "Id Pregunta: 4865. ";


//  Id pregunta: 4884 AÃ±o de creación de pregunta: 2007-01-01
 questions[51]= "52)  &iquest;Cu&aacute;l de las siguientes afirmaciones respecto a la gesti&oacute;n de redes NO es cierta?";
 choices[51]= new Array();
 choices[51][0] = "La base de informaci&oacute;n de administraci&oacute;n (MIB) tiene una estructura de base de datos y reside en laestaci&oacute;n de monitorizaci&oacute;n";
 choices[51][1] = "Uno de los modos de monitorizaci&oacute;n de SNMP (Simple Network Management Protocol) es el de sondeo, queconsiste en la interrupci&oacute;n por parte del agente SNMP a trav&eacute;s del puerto 162 de UDP (User DatagramProtocol)";
 choices[51][2] = "SNMPv3 (SNMP version 3) introduce capacidades de seguridad frente a las versiones anteriores, tales comocontrol de acceso, autenticaci&oacute;n y privacidad";
 choices[51][3] = "RMONv2 (Remote Monitoring version 2) permite la monitorizaci&oacute;n de segmentos de redes de &aacute;rea local y elchequeo de trafico a nivel de red y aplicaci&oacute;n";
 answers[51] = choices[51][0];
 units[51] = "104";
 comments[51] = "Id Pregunta: 4884. ";


//  Id pregunta: 4989 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  &iquest;Cu&aacute;l de las siguientes opciones se corresponde con una interfaz de Java que permite llamar a m&eacute;todos nativosescritos en otros lenguajes?:";
 choices[52]= new Array();
 choices[52][0] = "RMI";
 choices[52][1] = "JAXP";
 choices[52][2] = "JNDI";
 choices[52][3] = "JNI";
 answers[52] = choices[52][3];
 units[52] = "116";
 comments[52] = "Id Pregunta: 4989. Examen TIC A 2007";


//  Id pregunta: 5016 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  Indique cu&aacute;l es el puerto para la conexi&oacute;n de datos que abrir&aacute; el cliente en el modo PASV del Protocolo deTransferencia de Ficheros FTP (&quot;File Transfer Protocol&quot;):";
 choices[53]= new Array();
 choices[53][0] = "El puerto 20";
 choices[53][1] = "El puerto 21";
 choices[53][2] = "Un puerto por encima de 1023 elegido al azar por el cliente";
 choices[53][3] = "Un puerto por encima de 1023 elegido al azar por el servidor";
 answers[53] = choices[53][3];
 units[53] = "112";
 comments[53] = "Id Pregunta: 5016. Examen TIC A 2007- Anulada por el Tribunal";


//  Id pregunta: 5156 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  En el modelo de referencia TCP/IP:";
 choices[54]= new Array();
 choices[54][0] = "No se definen las capas de sesi&oacute;n ni de aplicaci&oacute;n.";
 choices[54][1] = "No se definen las capas de red ni de sesi&oacute;n.";
 choices[54][2] = "No se definen las capas de presentaci&oacute;n ni de aplicaci&oacute;n.";
 choices[54][3] = "No se definen las capas de sesi&oacute;n ni de presentaci&oacute;n.";
 answers[54] = choices[54][3];
 units[54] = "100";
 comments[54] = "Id Pregunta: 5156. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5305 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  Seg&uacute;n la Ley 9/2014, la aprobaci&oacute;n de los planes nacionales de numeraci&oacute;n corresponde a:";
 choices[55]= new Array();
 choices[55][0] = "Ministerio de Industria";
 choices[55][1] = "Gobierno";
 choices[55][2] = "Comisi&oacute;n Nacional de los Mercados y la Competencia";
 choices[55][3] = "Ninguno de los anteriores";
 answers[55] = choices[55][1];
 units[55] = "110";
 comments[55] = "Id Pregunta: 5305. ";


//  Id pregunta: 5569 AÃ±o de creación de pregunta: 2003-01-01
 questions[56]= "57)  &iquest;A qu&eacute; se dedica el grupo de trabajo 802.21 del IEEE?";
 choices[56]= new Array();
 choices[56][0] = "Grupo asesor en regulaci&oacute;n radioel&eacute;ctrica";
 choices[56][1] = "Grupo asesor en coexistencia de est&aacute;ndares 802";
 choices[56][2] = "Resilient Packet Ring";
 choices[56][3] = "Traspaso entre redes";
 answers[56] = choices[56][3];
 units[56] = "101";
 comments[56] = "Id Pregunta: 5569. ";


//  Id pregunta: 5607 AÃ±o de creación de pregunta: 2003-01-01
 questions[57]= "58)  Las areas funcionales definidas por ISO que todo sistema de gesti&oacute;n de red debe cubrir son:";
 choices[57]= new Array();
 choices[57][0] = "Gesti&oacute;n de Configuraci&oacute;n, Gesti&oacute;n de Fallos, Gesti&oacute;n de Prestaciones, Gesti&oacute;n de Contabilidad, Gesti&oacute;n de Seguridad";
 choices[57][1] = "Gesti&oacute;n de Configuraci&oacute;n, Gesti&oacute;n de Fallos, Gesti&oacute;n de Prestaciones, Gesti&oacute;n de Funcionalidad, Gesti&oacute;n de Seguridad";
 choices[57][2] = "Gesti&oacute;n de Configuraci&oacute;n, Gesti&oacute;n de Mantenimiento, Gesti&oacute;n de Prestaciones, Gesti&oacute;n de Funcionalidad, Gesti&oacute;n de Seguridad";
 choices[57][3] = "Ninguna de las anteriores";
 answers[57] = choices[57][0];
 units[57] = "104";
 comments[57] = "Id Pregunta: 5607. ";


//  Id pregunta: 5788 AÃ±o de creación de pregunta: 2009-01-01
 questions[58]= "59)  En un radioenlace:";
 choices[58]= new Array();
 choices[58][0] = "El enlace descendente trabaja siempre a frecuencias superiores que el enlace descendente";
 choices[58][1] = "El enlace ascendente trabaja a frecuencias iguales o inferiores que el enlace descendente";
 choices[58][2] = "El enlace descendente trabaja, a veces, a frecuencias inferiores que el enlace descendente";
 choices[58][3] = "El enlace ascendente trabaja, a veces, a frecuencias iguales o superiores que el enlace descendente";
 answers[58] = choices[58][1];
 units[58] = "108";
 comments[58] = "Id Pregunta: 5788. ";


//  Id pregunta: 5946 AÃ±o de creación de pregunta: 2009-01-01
 questions[59]= "60)  &iquest;qu&eacute; est&aacute;ndar define usuabilidad como &ldquo;La efectividad, eficiencia y satisfacci&oacute;n con la que un producto permite alcanzar objetivos espec&iacute;ficos a usuarios espec&iacute;ficos en un contexto de uso espec&iacute;fico&rdquo;?";
 choices[59]= new Array();
 choices[59][0] = "ISO/IEC 9241-5";
 choices[59][1] = "ISO/IEC 9241-11";
 choices[59][2] = "ISO/IEC 9243-5";
 choices[59][3] = "ISO/IEC 9243-11";
 answers[59] = choices[59][1];
 units[59] = "39";
 comments[59] = "Id Pregunta: 5946. ";


//  Id pregunta: 6047 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  El programa marco de la UE para la innovaci&oacute;n y competitividad se denomina:";
 choices[60]= new Array();
 choices[60][0] = "eTEN";
 choices[60][1] = "IDA";
 choices[60][2] = "CIP";
 choices[60][3] = "Ninguna de las respuestas es correcta";
 answers[60] = choices[60][2];
 units[60] = "103";
 comments[60] = "Id Pregunta: 6047. ";


//  Id pregunta: 6143 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  En relaci&oacute;n con los c&oacute;decs que se utilizan en sistemas de telefon&iacute;a:";
 choices[61]= new Array();
 choices[61][0] = "G.711 utiliza el algoritmo PCM y es el c&oacute;dec que garantiza la mayor calidad de sonido por lo que se suele utilizar en entornos LAN de VoIP";
 choices[61][1] = "G.729 es el algoritmo m&aacute;s extendido en sistemas de VoIP sobre WAN, ya que aunque tiene p&eacute;rdida por compresi&oacute;n la calidad de sonido (MOS) es buena";
 choices[61][2] = "El c&oacute;dec que se utiliza en GSM (GSM 06.10) proporciona una calidad de sonido peor que G.711 y G.729";
 choices[61][3] = "Todas las respuestas anteriores son correctas";
 answers[61] = choices[61][3];
 units[61] = "100, 109";
 comments[61] = "Id Pregunta: 6143. ";


//  Id pregunta: 6186 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  Indique, cu&aacute;l de los siguientes elementos no forma parte de una Intranet:";
 choices[62]= new Array();
 choices[62][0] = "Nomina del personal.";
 choices[62][1] = "Tabl&oacute;n de Anuncios.";
 choices[62][2] = "Motor de b&uacute;squeda de documentaci&oacute;n.";
 choices[62][3] = "Procesador de Textos.";
 answers[62] = choices[62][3];
 units[62] = "113";
 comments[62] = "Id Pregunta: 6186. ";


//  Id pregunta: 6225 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  &iquest;Cu&aacute;l se las siguientes afirmaciones es incorrecta?";
 choices[63]= new Array();
 choices[63][0] = "Polimorfismo: distintas instancias del mismo tipo interpretan un mismo mensaje de distinta forma";
 choices[63][1] = "Enlace din&aacute;mico, la llamada al m&eacute;todo se resuelve en tiempo de ejecuci&oacute;n";
 choices[63][2] = "Se pueden crear instancias de una clase abstracta";
 choices[63][3] = "Enlace est&aacute;tico se resuelve en tiempo de compilaci&oacute;n";
 answers[63] = choices[63][2];
 units[63] = "116";
 comments[63] = "Id Pregunta: 6225. TICB-2009, bloque desarrollo";


//  Id pregunta: 6232 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  Con respecto a MNG, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[64]= new Array();
 choices[64][0] = "Existen tres versiones de MNG de complejidad reducida: MNG-LC (baja complejidad),  MNG-VLC (complejidad muy baja) y MNG-RVLC (complejidad realmente muy baja).";
 choices[64][1] = "Es un formato de fichero, libre de derechos, para im&aacute;genes animadas, fuertemente vinculado a PNG.";
 choices[64][2] = "No est&aacute; soportado por el navegador Konqueror.";
 choices[64][3] = "Todas las anteriores respuestas son incorrectas.";
 answers[64] = choices[64][1];
 units[64] = "114";
 comments[64] = "Id Pregunta: 6232. ";


//  Id pregunta: 6487 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  &iquest;Por qu&eacute; se usan celdas de tama&ntilde;o fijo en ATM?";
 choices[65]= new Array();
 choices[65][0] = "Porque se reduce la sobrecarga de cabeceras de protocolo";
 choices[65][1] = "Porque se reduce el tiempo que una trama de alta prioridad deber&aacute; esperar en cola";
 choices[65][2] = "Porque mejora el enrutamiento";
 choices[65][3] = "Por analog&iacute;a con Ethernet";
 answers[65] = choices[65][1];
 units[65] = "109";
 comments[65] = "Id Pregunta: 6487. Castilla La Mancha 2009";


//  Id pregunta: 7277 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  Virtuozzo es un software para virutalizaci&oacute;n de";
 choices[66]= new Array();
 choices[66][0] = "Hardware";
 choices[66][1] = "Red";
 choices[66][2] = "Sistema operativo";
 choices[66][3] = "Escritorio";
 answers[66] = choices[66][2];
 units[66] = "119";
 comments[66] = "Id Pregunta: 7277. NULL";


//  Id pregunta: 7289 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  La recomendaci&oacute;n de la UIT H.323";
 choices[67]= new Array();
 choices[67][0] = "Se utiliza &uacute;nicamente en redes RDSI";
 choices[67][1] = "Permite audioconferencia pero no videoconferencia";
 choices[67][2] = "Se le puede a&ntilde;adir seguridad seg&uacute;n la recomendaci&oacute;n de la UIT H.325";
 choices[67][3] = "Fue definida para redes de conmutaci&oacute;n de circuitos";
 answers[67] = choices[67][2];
 units[67] = "117";
 comments[67] = "Id Pregunta: 7289. Examen TIC B 2009";


//  Id pregunta: 8325 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  En la radio digital (DAB):";
 choices[68]= new Array();
 choices[68][0] = "Los servicios pueden estructurarse y configurarse de forma din&aacute;mica";
 choices[68][1] = "El servicio ha sido dise&ntilde;ado para trabajar en frecuencias de 30 GHz a 3000 GHz";
 choices[68][2] = "La cobertura solo puede ser local";
 choices[68][3] = "Ninguna de las anteriores es correcta";
 answers[68] = choices[68][0];
 units[68] = "103";
 comments[68] = "Id Pregunta: 8325. Analista Ayto. Madrid 2010";


//  Id pregunta: 8327 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  ATM se caracteriza, entre otras, por que:";
 choices[69]= new Array();
 choices[69][0] = "Puede funcionar sobre cualquier capa f&iacute;sica";
 choices[69][1] = "Proporciona retransmisi&oacute;n de celdas en caso de detecci&oacute;n de error";
 choices[69][2] = "a y b son ciertas";
 choices[69][3] = "Todas las anteriores son falsas";
 answers[69] = choices[69][0];
 units[69] = "109";
 comments[69] = "Id Pregunta: 8327. Analista Ayto. Madrid 2010";


//  Id pregunta: 8378 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  La longitud de onda alrededor de la cual un medio de transmisi&oacute;n basado en fibra &oacute;ptica se dice que est&aacute; trabajando en 3&ordf; ventana es: ";
 choices[70]= new Array();
 choices[70][0] = "750 nm.";
 choices[70][1] = "820 nm.";
 choices[70][2] = "1310 nm.";
 choices[70][3] = "1550 nm.";
 answers[70] = choices[70][3];
 units[70] = "99";
 comments[70] = "Id Pregunta: 8378. Examen TIC A2 2010";


//  Id pregunta: 8450 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  La T&eacute;cnica de accesos CDMA se caracteriza entre otras porque:";
 choices[71]= new Array();
 choices[71][0] = "Varios usuarios comparten una misma portadora en intervalos diferentes de tiempo";
 choices[71][1] = "Varios Usuarios comparten la misma banda";
 choices[71][2] = "Requiere filtros muy selectivos para evitar las interferencias de canal adyacente";
 choices[71][3] = "Ninguna de las anteriores.";
 answers[71] = choices[71][1];
 units[71] = "101";
 comments[71] = "Id Pregunta: 8450. Analista Ayto. Madrid 2010";


//  Id pregunta: 8478 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  &iquest;Qu&eacute; tipo de codificaci&oacute;n se utiliza en las redes Ethernet?";
 choices[72]= new Array();
 choices[72][0] = "London";
 choices[72][1] = "Liverpool.";
 choices[72][2] = "Manchester.";
 choices[72][3] = "Boston.";
 answers[72] = choices[72][2];
 units[72] = "101";
 comments[72] = "Id Pregunta: 8478. Examen TIC A2 2010 interna";


//  Id pregunta: 8544 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  1 &iquest;En qu&eacute; RFC se describe el modelo de seguridad basado en usuario (USM o User-basad Security Model) para la versi&oacute;n 3 de SNMP?";
 choices[73]= new Array();
 choices[73][0] = "RFC 1157.";
 choices[73][1] = "RFC 1441";
 choices[73][2] = "RFC 3414";
 choices[73][3] = "RFC 3854";
 answers[73] = choices[73][2];
 units[73] = "104";
 comments[73] = "Id Pregunta: 8544. Examen TIC A2 2010 interna";


//  Id pregunta: 8683 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  En el subsistema de Operaci&oacute;n y Mantenimiento de GSM existe una Base de Datos denominada EIR (Equipment Identity Register). &iquest;Cu&aacute;l es su funci&oacute;n?";
 choices[74]= new Array();
 choices[74][0] = "Guardar la informaci&oacute;n de los m&oacute;viles bajo su &aacute;rea de cobertura en ese momento.";
 choices[74][1] = "Guardar la informaci&oacute;n de los m&oacute;viles que est&aacute;n autorizado para usar a red.";
 choices[74][2] = "Guardar la informaci&oacute;n de los m&oacute;viles que tienen prohibido utilizar- la red por alg&uacute;n motivo.";
 choices[74][3] = "Base de datos con la facturaci&oacute;n del m&oacute;vil que est&aacute; haciendo uso de la red.";
 answers[74] = choices[74][2];
 units[74] = "108";
 comments[74] = "Id Pregunta: 8683. Examen UPM A2 2011";


//  Id pregunta: 8844 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)   En los sistemas de colaboraci&oacute;n s&iacute;ncronos";
 choices[75]= new Array();
 choices[75][0] = " No es posible utilizar la tecnolog&iacute;a multicast ";
 choices[75][1] = " Todos est&aacute;n basados en interfaces WWW ";
 choices[75][2] = "Se ampl&iacute;an las funcionalidades de los sistemas de videoconferencia cl&aacute;sicos.";
 choices[75][3] = " Su est&aacute;ndar viene definido por el W3C";
 answers[75] = choices[75][2];
 units[75] = "117";
 comments[75] = "Id Pregunta: 8844. Examen UC3M 2010";


//  Id pregunta: 9327 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  El efecto de la diafon&iacute;a en un cable se define como:";
 choices[76]= new Array();
 choices[76][0] = "La p&eacute;rdida de potencia en la se&ntilde;al debido a la emisi&oacute;n electromagnetica al ambiente.";
 choices[76][1] = "La variacion de la velocidad de propagacion de la se&ntilde;al en funcion de la frecuencia";
 choices[76][2] = "La interferencia electromagnetica producida entre se&ntilde;ales que discurren simultaneamente entre pares paralelos.";
 choices[76][3] = "Es la distorsion de la se&ntilde;al por la influencia de se&ntilde;ales espureas del ambiente.";
 answers[76] = choices[76][2];
 units[76] = "99";
 comments[76] = "Id Pregunta: 9327. NULL";


//  Id pregunta: 9354 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  En una centralita que se une a la red p&uacute;blica mediante un primario RDSI:";
 choices[77]= new Array();
 choices[77][0] = "Se pueden establecer 30 comunicaciones en total (entre entrantes y salientes) de forma simult&aacute;nea con la red p&uacute;blica.";
 choices[77][1] = "Se pueden establecer 30 comunicaciones entrantes y 30 salientes simult&aacute;neas con la red p&uacute;blica.";
 choices[77][2] = "Se pueden establecer 32 comunicaciones totales: 30 entrantes y 2 salientes, de forma simult&aacute;nea con la red p&uacute;blica.";
 choices[77][3] = "Ninguna de las respuestas es correcta.";
 answers[77] = choices[77][0];
 units[77] = "103";
 comments[77] = "Id Pregunta: 9354. Pruebas selectivas Ingeniero de Telecomunicaci&oacute;n Ayto de Madrid 2010";


//  Id pregunta: 9389 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  Indique cu&aacute;l de las siguientes afirmaciones es FALSA:";
 choices[78]= new Array();
 choices[78][0] = "GSM (Global System Mobile) permite la utilizaci&oacute;n de los canales tanto para la transmisi&oacute;n de voz como de datos.";
 choices[78][1] = "GSM permite la utilizaci&oacute;n de t&eacute;cnicas de supresi&oacute;n de silencios.";
 choices[78][2] = "GSM emplea radiocanales de 5MHz de ancho de banda.";
 choices[78][3] = "Las recomendaciones GSM contemplan la posibilidad de utilizar un codificador de voz que permita dividir en ";
 answers[78] = choices[78][2];
 units[78] = "108";
 comments[78] = "Id Pregunta: 9389. Examen TIC A1 2011 Libre";


//  Id pregunta: 9390 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  El servicio universal de telecomunicaciones es:";
 choices[79]= new Array();
 choices[79][0] = "El conjunto definido de servicios cuya prestaci&oacute;n se garantiza en un &aacute;mbito compartido entre varios usuarios, con independencia de su localizaci&oacute;n geogr&aacute;fica, con una calidad determinada y a un precio asequible";
 choices[79][1] = "El conjunto definido de servicios cuya prestaci&oacute;n se garantiza a todos los usuarios finales con independencia de su localizaci&oacute;n geogr&aacute;fica, con una calidad determinada y a un precio asequible.";
 choices[79][2] = "El conjunto definido de servicios cuya prestaci&oacute;n se garantiza a los usuarios con las rentas m&aacute;s bajas con independencia de su localizaci&oacute;n geogr&aacute;fica, con una calidad determinada y a un precio asequible";
 choices[79][3] = "El conjunto definido de servicios cuya prestaci&oacute;n se garantiza a todos los centros de formaci&oacute;n con independencia de su localizaci&oacute;n geogr&aacute;fica, con una calidad determinada.";
 answers[79] = choices[79][1];
 units[79] = "110";
 comments[79] = "Id Pregunta: 9390. Examen TIC A1 2011 Libre";


//  Id pregunta: 9493 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  El cliente web:";
 choices[80]= new Array();
 choices[80][0] = "Puede realizar peticiones HTTP al servidor web";
 choices[80][1] = "Dispone de un int&eacute;rprete de scripting";
 choices[80][2] = "Puede tener plugins instalados";
 choices[80][3] = "Todas las anteriores son ciertas";
 answers[80] = choices[80][3];
 units[80] = "114";
 comments[80] = "Id Pregunta: 9493. NULL";


//  Id pregunta: 9494 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  &iquest;Cu&aacute;les de los siguientes no es un lenguaje de scripting?";
 choices[81]= new Array();
 choices[81][0] = "Javascript";
 choices[81][1] = "JEScript";
 choices[81][2] = "PerlScript";
 choices[81][3] = "VBScript";
 answers[81] = choices[81][1];
 units[81] = "114";
 comments[81] = "Id Pregunta: 9494. NULL";


//  Id pregunta: 9504 AÃ±o de creación de pregunta: 2013-01-01
 questions[82]= "83)  En el &aacute;mbito de los formatos de im&aacute;genes est&aacute;ticas, indique cual de las siguientes es la afirmaci&oacute;n correcta:";
 choices[82]= new Array();
 choices[82][0] = "GIF y PNG comprimen sin p&eacute;rdidas mientras que JPEG comprime con p&eacute;rdidas";
 choices[82][1] = "GIF y JPEG comprimen sin p&eacute;rdidas mientras que PNG comprime con p&eacute;rdidas";
 choices[82][2] = "JPEG y PNG comprimen sin p&eacute;rdidas mientras que GIF comprime con p&eacute;rdidas";
 choices[82][3] = "Todas las anteriores son falsas";
 answers[82] = choices[82][0];
 units[82] = "114";
 comments[82] = "Id Pregunta: 9504. NULL";


//  Id pregunta: 9527 AÃ±o de creación de pregunta: 2013-01-01
 questions[83]= "84)  Se&ntilde;ale la afimaci&oacute;n correcta respecto al protocolo SIP";
 choices[83]= new Array();
 choices[83][0] = "Proporciona servicios que implementan modelos de petici&oacute;n-respuesta";
 choices[83][1] = "Proporciona primitivas que implementan modelos de petici&oacute;n-respuesta";
 choices[83][2] = "Sobre SIP se monta RTP que se utiliza para negociar las capacidades de la comunicaci&oacute;n";
 choices[83][3] = "Los elementos involucrados en la videoconferencia est&aacute;n representados por URLs";
 answers[83] = choices[83][1];
 units[83] = "117";
 comments[83] = "Id Pregunta: 9527. NULL";


//  Id pregunta: 9740 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  En un despliegue de una aplicaci&oacute;n Java EE sobre WebSphere, fijar el mode del class loader como PARENT_LAST tiene el efecto de que busca las clases a cargar primero:";
 choices[84]= new Array();
 choices[84][0] = "En el m&oacute;dulo web, si no las encuentra busca en la aplicaci&oacute;n, y si no las encuentra, en las librer&iacute;as del sistema.";
 choices[84][1] = "En las librer&iacute;as del sistema, si no las encuentra busca en la aplicaci&oacute;n, y si no las encuentra, en el m&oacute;dulo web.";
 choices[84][2] = "En la aplicaci&oacute;n, y si no las encuentra busca en el m&oacute;dulo web, y si no las encuentra, en las librer&iacute;as del sistema.";
 choices[84][3] = "En las librer&iacute;as del sistema, si no las encuentra busca en el m&oacute;dulo web, y si no las encuentra en la aplicaci&oacute;n.";
 answers[84] = choices[84][0];
 units[84] = "116";
 comments[84] = "Id Pregunta: 9740. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9782 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Se&ntilde;ale cu&aacute;l de las siguientes opciones est&aacute; basada en el protocolo ICMP:";
 choices[85]= new Array();
 choices[85][0] = "SMTP";
 choices[85][1] = "SNMP";
 choices[85][2] = "PING";
 choices[85][3] = "DNS ";
 answers[85] = choices[85][2];
 units[85] = "100";
 comments[85] = "Id Pregunta: 9782. Examen TIC A2 2013";


//  Id pregunta: 9854 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  En seguridad inform&aacute;tica, cu&aacute;l de los siguientes procesos, puede considerarse un m&eacute;todo de hardening de un sistema: ";
 choices[86]= new Array();
 choices[86][0] = "La reducci&oacute;n de software innecesario en el sistema.";
 choices[86][1] = "La instalaci&oacute;n de software para comprobar el estado de la red.";
 choices[86][2] = "La conexi&oacute;n a sistemas de almacenamiento (SAN o NAS).";
 choices[86][3] = "La aplicaci&oacute;n de bonding (agrupaci&oacute;n o trunking) en las interfaces de red.";
 answers[86] = choices[86][0];
 units[86] = "111";
 comments[86] = "Id Pregunta: 9854. Examen Gesti&oacute;n de Inform&aacute;tica Universidad de Granada 2012";


//  Id pregunta: 10077 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  &iquest;Qu&eacute; banda de frecuencia se utiliza para la prestaci&oacute;n de los servicios de televisi&oacute;n terrestre con tecnolog&iacute;a digital, seg&uacute;n el Cuadro Nacional de Atribuciones de Frecuencia?";
 choices[87]= new Array();
 choices[87][0] = "100 a 224 MHz ";
 choices[87][1] = "225 a 356 MHz";
 choices[87][2] = "357 a 469 MHz ";
 choices[87][3] = "470 a 862 MHz";
 answers[87] = choices[87][3];
 units[87] = "105";
 comments[87] = "Id Pregunta: 10077. TIC A2, libre, Examen 2013";


//  Id pregunta: 10142 AÃ±o de creación de pregunta: 2010-01-01
 questions[88]= "89)  La TDT utiliza como t&eacute;cnica de modulaci&oacute;n de nivel f&iacute;sico";
 choices[88]= new Array();
 choices[88][0] = "CDMA";
 choices[88][1] = "COFDM ";
 choices[88][2] = "64-QAM";
 choices[88][3] = "Ninguna de las anteriores";
 answers[88] = choices[88][1];
 units[88] = "105";
 comments[88] = "Id Pregunta: 10142. Ayuntamiento Madrid 2014";


//  Id pregunta: 10199 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  &iquest;Qu&eacute; grupo de trabajo del IEEE estandariza el mecanismo de seguridad WPA2 (Wireless Protective Access 2)?";
 choices[89]= new Array();
 choices[89][0] = "802.11f";
 choices[89][1] = "802.11h";
 choices[89][2] = "802.11i";
 choices[89][3] = "802.11r";
 answers[89] = choices[89][2];
 units[89] = "107";
 comments[89] = "Id Pregunta: 10199. NULL";


//  Id pregunta: 10231 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  Un servlet encuentra una excepci&oacute;n mientras procesa una petici&oacute;n. &iquest;Qu&eacute; m&eacute;todo usar&aacute;s para enviar una respuesta de error al navegador?:";
 choices[90]= new Array();
 choices[90][0] = "sendError(int errorCode) de HttpServlet";
 choices[90][1] = "sendError(int errorCode) de HttpServletRequest";
 choices[90][2] = "sendError(int errorCode) de HttpServletResponse";
 choices[90][3] = "sendError(String errorMsg) de HttpServletRequest";
 answers[90] = choices[90][2];
 units[90] = "116";
 comments[90] = "Id Pregunta: 10231. NULL";


//  Id pregunta: 10234 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  Podemos considerar a SOAP como:";
 choices[91]= new Array();
 choices[91][0] = "Un protocolo XML para ser usado con tecnolog&iacute;a RMI";
 choices[91][1] = "Una especificaci&oacute;n que describe las normas en que se envian y reciben comunicaciones basadas en XML";
 choices[91][2] = "Sustituye al protocolo RPC en sistemas distribuidos que usan CORBA";
 choices[91][3] = "Ninguna de las anteriores";
 answers[91] = choices[91][1];
 units[91] = "116";
 comments[91] = "Id Pregunta: 10234. NULL";


//  Id pregunta: 10298 AÃ±o de creación de pregunta: 2014-01-01
 questions[92]= "93)  Se&ntilde;ale cu&aacute;l de las siguientes NO es una Protocol Data Unit (PDU) del protocolo SNMP v2/v3:";
 choices[92]= new Array();
 choices[92][0] = "GETREQUEST PDU";
 choices[92][1] = "SETRESPONSE PDU";
 choices[92][2] = "RESPONSE PDU";
 choices[92][3] = "INFORMREQUEST PDU";
 answers[92] = choices[92][1];
 units[92] = "104";
 comments[92] = "Id Pregunta: 10298. TIC A2, libre, examen 2013";


//  Id pregunta: 10514 AÃ±o de creación de pregunta: 2014-01-01
 questions[93]= "94)  &iquest;Qu&eacute; RFC define el Estandar SIP?";
 choices[93]= new Array();
 choices[93][0] = "RFC 3160";
 choices[93][1] = "RFC 6130";
 choices[93][2] = "RFC 3610";
 choices[93][3] = "RFC 3261";
 answers[93] = choices[93][3];
 units[93] = "109";
 comments[93] = "Id Pregunta: 10514. NULL";


//  Id pregunta: 10890 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Indique a qu&eacute; subred pertenece la siguiente direcci&oacute;n de broadcast 95.25.46.159:";
 choices[94]= new Array();
 choices[94][0] = "95.25.30.128/27";
 choices[94][1] = "95.25.30.128/25";
 choices[94][2] = "95.25.46.128/27";
 choices[94][3] = "95.25.46.128/25";
 answers[94] = choices[94][2];
 units[94] = "100";
 comments[94] = "Id Pregunta: 10890. Examen GSI 2014";


//  Id pregunta: 10893 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es correcta en relaci&oacute;n a la MTU (Maximum Transfer Unit) en redes IP, la MTU del camino es el valor de la:";
 choices[95]= new Array();
 choices[95][0] = "suma de todas las MTU entre el receptor y el emisor.";
 choices[95][1] = "media aritm&eacute;tica de todas las MTU entre el receptor y el emisor.";
 choices[95][2] = "MTU m&aacute;s baja de todos los enlaces a lo largo del camino entre nodos receptor y emisor.";
 choices[95][3] = "MTU m&aacute;s alta de todos los enlaces a lo largo del camino entre nodos receptor y emisor.";
 answers[95] = choices[95][2];
 units[95] = "100";
 comments[95] = "Id Pregunta: 10893. Examen GSI 2014";


//  Id pregunta: 11421 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Seg&uacute;n la Ley 9/2014, la reasignaci&oacute;n del uso de bandas de frecuencias con el objetivo de alcanzar un uso m&aacute;s eficiente del espectro radioel&eacute;ctrico es facultad de:";
 choices[96]= new Array();
 choices[96][0] = "El gobierno.";
 choices[96][1] = "La CNMC.";
 choices[96][2] = "El Ayuntamiento de la localidad.";
 choices[96][3] = "Los organismos internacionales.";
 answers[96] = choices[96][0];
 units[96] = "110";
 comments[96] = "Id Pregunta: 11421. ";


//  Id pregunta: 11672 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  En Java, para redirigir la petici&oacute;n a otra p&aacute;gina JSP se utiliza la etiqueta:";
 choices[97]= new Array();
 choices[97][0] = "page";
 choices[97][1] = "forward";
 choices[97][2] = "request";
 choices[97][3] = "pageContext";
 answers[97] = choices[97][1];
 units[97] = "116";
 comments[97] = "Id Pregunta: 11672. ";


//  Id pregunta: 11689 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Un cable RJ-45 cruzado se forma:";
 choices[98]= new Array();
 choices[98][0] = "conectando los pines 1 al 3 y el 2 al 6";
 choices[98][1] = "conectando los pines 1 al 8 el y el 2 al 7";
 choices[98][2] = "conectando los pines 1 al 3 y el 2 al 4";
 choices[98][3] = "conectando el pin 1 al pin 1 y el pin 2 al pin 2";
 answers[98] = choices[98][0];
 units[98] = "99";
 comments[98] = "Id Pregunta: 11689. NULL";


//  Id pregunta: 11757 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Cu&aacute;l de las siguientes dificultades no tiene que hacer frente el par telef&oacute;nico para la transmisi&oacute;n de alta velocidad de datos?";
 choices[99]= new Array();
 choices[99][0] = "Ruido impulsivo";
 choices[99][1] = "Ruido de fondo";
 choices[99][2] = "Diafon&iacute;a";
 choices[99][3] = "Medio costoso";
 answers[99] = choices[99][3];
 units[99] = "107";
 comments[99] = "Id Pregunta: 11757. ";


