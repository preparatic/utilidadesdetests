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

//  Id pregunta: 2931 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  &iquest;Qu&eacute; m&aacute;scara habr&iacute;a que aplicar para crear 8 subredes en una red de clase A?";
 choices[0]= new Array();
 choices[0][0] = "255.240.0.0";
 choices[0][1] = "255.192.0.0";
 choices[0][2] = "255.0.0.0";
 choices[0][3] = "2";
 answers[0] = choices[0][0];
 units[0] = "100";
 comments[0] = "Id Pregunta: 2931. Similar a examen TIC MAP A 2004. Con esa m&aacute;scara tendriamos hasta 14 subredes. Se aplica la formula  2N -2 donde N es la cantidad de bits que tenemosque robarle a la porci&oacute;n de host asignada por defecto a una clase A";


//  Id pregunta: 2936 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  &iquest;Cu&aacute;l de los siguientes no es uno de los estadios en la estandarizaci&oacute;n del IAB?";
 choices[1]= new Array();
 choices[1][0] = "Borrador de Internet";
 choices[1][1] = "Est&aacute;ndar propuesto";
 choices[1][2] = "Borrador de est&aacute;ndar";
 choices[1][3] = "Est&aacute;ndar temporal";
 answers[1] = choices[1][3];
 units[1] = "112,42";
 comments[1] = "Id Pregunta: 2936. Similar a examen TIC MAP A 2004";


//  Id pregunta: 2945 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  Los Bridges:";
 choices[2]= new Array();
 choices[2][0] = "Filtran y encaminan la informaci&oacute;n por el trayecto &oacute;ptimo permitiendo la interconexi&oacute;n de redes heterog&eacute;neas a niveles 1 y 2";
 choices[2][1] = "Son elementos para la interconexi&oacute;n que operan en los niveles superiores al de red";
 choices[2][2] = "Son dispositivos que se encargan de regenerar la se&ntilde;al entre los dos segmentos de red que interconectan";
 choices[2][3] = "Operan a nivel de MAC (nivel 2), por tanto son transparentes a los protocolos de niveles supeiores";
 answers[2] = choices[2][3];
 units[2] = "102";
 comments[2] = "Id Pregunta: 2945. Examen TIC MAP B 2004";


//  Id pregunta: 2987 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  Un spanning tree es";
 choices[3]= new Array();
 choices[3][0] = "Un &aacute;rbol de recubrimiento de una red";
 choices[3][1] = "Un arbol de decisi&oacute;n para algoritmos de inteligencia artificial como id3";
 choices[3][2] = "Un &aacute;rbol de resoluci&oacute;n en l&oacute;gica";
 choices[3][3] = "Un &aacute;rbol de perif&eacute;ricos de un puerto USB";
 answers[3] = choices[3][0];
 units[3] = "101, 102";
 comments[3] = "Id Pregunta: 2987. ";


//  Id pregunta: 2989 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  &iquest;Qu&eacute; norma se encargaga de la estabdarizaci&oacute;n de redes inal&aacute;mbricas de &aacute;rea personal?";
 choices[4]= new Array();
 choices[4][0] = "El IEEE 802.11";
 choices[4][1] = "El IEEE 802.15";
 choices[4][2] = "El AUT-C";
 choices[4][3] = "El UIT-T E-164";
 answers[4] = choices[4][1];
 units[4] = "42";
 comments[4] = "Id Pregunta: 2989. ";


//  Id pregunta: 3043 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;Para qu&eacute; se utiliza el entrelazado de bits en la transmisi&oacute;n de informaci&oacute;n? ";
 choices[5]= new Array();
 choices[5][0] = "para proporcionar una sencilla manera de cifrado y conseguir la confidencialidad";
 choices[5][1] = "para evitar que fallos de transmisi&oacute;n afecten a bits consecutivos y se pierda informaci&oacute;n";
 choices[5][2] = "para obtener un c&oacute;digo de redundancia c&iacute;clica que prevenga de errores en recepci&oacute;n";
 choices[5][3] = "Adem&aacute;s de evitar  los fallos de transmisi&oacute;n (los llamados errores de r&aacute;faga) evita que se introduzca una mayor latencia en el sistema agilizando la comunicaci&oacute;n ";
 answers[5] = choices[5][1];
 units[5] = "100";
 comments[5] = "Id Pregunta: 3043. La principal desventaja del entrelazado es que introduce latencia al sistema, ya que tenemos que esperar a la recepci&oacute;n de todos los bits del mensaje para poder desentrelazar y emplear las t&eacute;cnicas de correcci&oacute;n de errores";


//  Id pregunta: 3107 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &quot;Bus lineal al que est&aacute;n conectadas varias estaciones y que termina en los extremos&quot; se corresponde con la definici&oacute;n de:";
 choices[6]= new Array();
 choices[6][0] = "intranet";
 choices[6][1] = "segmento";
 choices[6][2] = "pasarela";
 choices[6][3] = "puente";
 answers[6] = choices[6][1];
 units[6] = "100";
 comments[6] = "Id Pregunta: 3107. NULL";


//  Id pregunta: 3140 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes afirmaciones corresponde a alguno de los principios en virtud de los cuales se han definido siete niveles en el Modelo de Referencia OSI?:";
 choices[7]= new Array();
 choices[7][0] = "Definir un n&uacute;mero de capas muy elevado, de modo que la tarea de integrar las capas no sea m&aacute;s dif&iacute;cil de lo estrictamente necesario";
 choices[7][1] = "Crear niveles separados para aquellas funciones que son manifiestamente diferentes por raz&oacute;n del proceso realizado y de la tecnolog&iacute;a involucrada";
 choices[7][2] = "Crear una nueva capa siempre que exista necesidad de fragmentar de nuevo los datos en PDUs de menor tama&ntilde;o para de este modo optimizar el uso de la red";
 choices[7][3] = "Crear una nueva capa siempre que exista necesidad de un nuevo tipo de aplicaci&oacute;n final entre sistemas";
 answers[7] = choices[7][1];
 units[7] = "100";
 comments[7] = "Id Pregunta: 3140. NULL";


//  Id pregunta: 3202 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  El acr&oacute;nimo FCAPS en gesti&oacute;n de redes se refiere a:";
 choices[8]= new Array();
 choices[8][0] = "Failure, Configuration, Accountability, Performance, Security, los 5 aspectos m&aacute;s importantes en la gesti&oacute;n de red: fallos, configuraci&oacute;n, contabilidad, rendimiento y seguridad";
 choices[8][1] = "Failure, Configuration, Accountability, Performance, Software, los 5 aspectos m&aacute;s importantes en la gesti&oacute;n de red: fallos, configuraci&oacute;n, contabilidad, rendimiento y software de red";
 choices[8][2] = "Failure, Compatibility, Accountability, Performance, Security, los 5 aspectos m&aacute;s importantes en la gesti&oacute;n de red: fallos, compatibilidad, contabilidad, rendimiento y seguridad";
 choices[8][3] = "Failure, Configuration, Adaptability, Performance, Security, los 5 aspectos m&aacute;s importantes en la gesti&oacute;n de red: fallos, configuraci&oacute;n, adaptabilidad, rendimiento y seguridad";
 answers[8] = choices[8][0];
 units[8] = "104";
 comments[8] = "Id Pregunta: 3202. ";


//  Id pregunta: 3221 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares define un anillo l&oacute;gico sobre un bus f&iacute;sico?:";
 choices[9]= new Array();
 choices[9][0] = "802.2";
 choices[9][1] = "802.3";
 choices[9][2] = "802.4";
 choices[9][3] = "802.5";
 answers[9] = choices[9][2];
 units[9] = "100";
 comments[9] = "Id Pregunta: 3221. NULL";


//  Id pregunta: 3250 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Cu&aacute;les son las t&eacute;cnicas de compartici&oacute;n utilizadas para compartir el recurso com&uacute;n (medio de transmisi&oacute;n o nodo central) en las LAN?:";
 choices[10]= new Array();
 choices[10][0] = "Acceso m&uacute;ltiple mediante detecci&oacute;n de portadora con detecci&oacute;n de colisiones (CSMA/CD)";
 choices[10][1] = "Paso de testigo";
 choices[10][2] = "Acceso m&uacute;ltiple mediante detecci&oacute;n de portadora con detecci&oacute;n de colisiones (CSMA/CD), o paso de testigo,  seg&uacute;n el tipo de red";
 choices[10][3] = "Selecci&oacute;n, contienda y reserva";
 answers[10] = choices[10][3];
 units[10] = "100";
 comments[10] = "Id Pregunta: 3250. NULL";


//  Id pregunta: 3267 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;En qu&eacute; consiste el denominado MAC - Control de acceso al medio?:";
 choices[11]= new Array();
 choices[11][0] = "Es el protocolo de aplicaciones usado en redes punto a punto";
 choices[11][1] = "Es un mecanismo de seguridad en redes de comunicaciones para controlar el acceso a la informaci&oacute;n";
 choices[11][2] = "Es un subnivel del nivel de enlace de datos encargado de regular el acceso al medio de transmisi&oacute;n";
 choices[11][3] = "Es el mecanismo de transmisi&oacute;n espec&iacute;fico de las redes Ethernet";
 answers[11] = choices[11][2];
 units[11] = "100";
 comments[11] = "Id Pregunta: 3267. ";


//  Id pregunta: 3276 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  &iquest;Qu&eacute; afirmaci&oacute;n de las siguientes respecto del funcionamiento de TCP/IP no es cierta?";
 choices[12]= new Array();
 choices[12][0] = "Los routers no mantienen estado de las posibles conexiones extremo a extremo, y a nivel de red no existe el concepto de conexi&oacute;n";
 choices[12][1] = "Los paquetes entre un mismo par &lt;origen, destino&gt;, una vez seleccionada la ruta adecuada, deben seguir la misma ruta hasta el final de la transmisi&oacute;n";
 choices[12][2] = "No se garantiza capacidad m&iacute;nima, ni retardo m&aacute;ximo, ni variaciones acotadas de los retardos";
 choices[12][3] = "No se garantiza la entrega ni el orden de entrega, aunque s&iacute; la integridad del segmento";
 answers[12] = choices[12][1];
 units[12] = "100";
 comments[12] = "Id Pregunta: 3276. ";


//  Id pregunta: 3288 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  &iquest;Qu&eacute; es un convertidor anal&oacute;gico/digital (ADC)?:";
 choices[13]= new Array();
 choices[13][0] = "Un convertidos similar a uno digital";
 choices[13][1] = "Un programa que convierte formato anal&oacute;gico a formato digital";
 choices[13][2] = "Un sistema que lee valores continuos y saca valores discretos";
 choices[13][3] = "Nada de lo anterior es correcto";
 answers[13] = choices[13][2];
 units[13] = "97";
 comments[13] = "Id Pregunta: 3288. NULL";


//  Id pregunta: 3293 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  &iquest;Qu&eacute; funci&oacute;n principal realiza una PABX?:";
 choices[14]= new Array();
 choices[14][0] = "Conmutaci&oacute;n";
 choices[14][1] = "Recogida de informaci&oacute;n de gesti&oacute;n de red";
 choices[14][2] = "Visualizaci&oacute;n de informaci&oacute;n de gesti&oacute;n de red";
 choices[14][3] = "Consulta bajo demanda de la informaci&oacute;n de gesti&oacute;n de red";
 answers[14] = choices[14][0];
 units[14] = "103";
 comments[14] = "Id Pregunta: 3293. ";


//  Id pregunta: 3324 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  8802.3 es:";
 choices[15]= new Array();
 choices[15][0] = "El c&oacute;digo de acceso a la red digital";
 choices[15][1] = "Un est&aacute;ndar de redes de &aacute;rea local de ISO IEC JTC1";
 choices[15][2] = "Un est&aacute;ndar europeo de conmutaci&oacute;n de paquetes";
 choices[15][3] = "Un est&aacute;ndar ANSI que trata de m&oacute;dems";
 answers[15] = choices[15][1];
 units[15] = "101";
 comments[15] = "Id Pregunta: 3324. ";


//  Id pregunta: 3337 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  Cada capa del modelo de referencia de interconexi&oacute;n de sistemas abiertos (OSI) se comunica directamente:";
 choices[16]= new Array();
 choices[16][0] = "A trav&eacute;s de uno o m&aacute;s puntos de acceso de servicio (SAP - service access point), con la capa contigua superior y de igual forma con la capa contigua inferior";
 choices[16][1] = "A trav&eacute;s de la informaci&oacute;n de control (ICI - Interface Control Information) contenida en la cabecera del bloque de datos transferido, con la misma capa en el dispositivo de red con el que establece comunicaci&oacute;n";
 choices[16][2] = "A trav&eacute;s de la informaci&oacute;n de control (ICI - Interface Control Information) contenida en la cabecera del bloque de datos transferido, con la capa contigua superior y de igual forma con la capa contigua inferior";
 choices[16][3] = "Con las tres capas mencionadas en &lsquo;a&rsquo; y &lsquo;b&rsquo;";
 answers[16] = choices[16][3];
 units[16] = "100";
 comments[16] = "Id Pregunta: 3337. NULL";


//  Id pregunta: 3417 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  IAB, IETF, IRTF, IESG son:";
 choices[17]= new Array();
 choices[17][0] = "protocolos de Internet";
 choices[17][1] = "organismos relacionados con Internet";
 choices[17][2] = "organismos de estandarizaci&oacute;n en el campo de redes tanto inal&aacute;mbricas como cableadas";
 choices[17][3] = "protocolos de nivel de transporte, en particular de encaminamiento y optimizaci&oacute;n de rutas";
 answers[17] = choices[17][1];
 units[17] = "112";
 comments[17] = "Id Pregunta: 3417. ";


//  Id pregunta: 3421 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Indicar cu&aacute;l de los siguientes equipos no deber&iacute;a colocarse en una DMZ:";
 choices[18]= new Array();
 choices[18][0] = "Bastion host";
 choices[18][1] = "Servidor Web";
 choices[18][2] = "Servidor FTP";
 choices[18][3] = "Servidor de aplicaciones";
 answers[18] = choices[18][3];
 units[18] = "113";
 comments[18] = "Id Pregunta: 3421. ";


//  Id pregunta: 3427 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  Indicar entre las siguientes normas del IEEE la que trata sobre redes inal&aacute;mbricas:";
 choices[19]= new Array();
 choices[19][0] = "802.10";
 choices[19][1] = "802.11";
 choices[19][2] = "802.12";
 choices[19][3] = "802.13";
 answers[19] = choices[19][1];
 units[19] = "101";
 comments[19] = "Id Pregunta: 3427. ";


//  Id pregunta: 3443 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  El protocolo de aplicaciones inal&aacute;mbricas (WAP), para el acceso y creaci&oacute;n de informaci&oacute;n en internet, utiliza el lenguaje:";
 choices[20]= new Array();
 choices[20][0] = "HTML";
 choices[20][1] = "WML";
 choices[20][2] = "XML  ";
 choices[20][3] = "CGI";
 answers[20] = choices[20][1];
 units[20] = "108";
 comments[20] = "Id Pregunta: 3443. ";


//  Id pregunta: 3512 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  En el protocolo IPv6, el tama&ntilde;o maximo de trama es de:";
 choices[21]= new Array();
 choices[21][0] = "65535 Bytes";
 choices[21][1] = "Depende del campo 'Payload'";
 choices[21][2] = "No hay tama&ntilde;o m&aacute;ximo de trama en IPv6";
 choices[21][3] = "Depende de la versi&oacute;n utilizada";
 answers[21] = choices[21][0];
 units[21] = "100";
 comments[21] = "Id Pregunta: 3512. NULL";


//  Id pregunta: 3515 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  En el servicio de radiomensajer&iacute;a se distinguen tres modalidades.&iquest;Cu&aacute;l de las siguientes no corresponde a &eacute;stas?:";
 choices[22]= new Array();
 choices[22][0] = "Modalidad de aviso";
 choices[22][1] = "Modalidad telef&oacute;nica";
 choices[22][2] = "Modalidad num&eacute;rica";
 choices[22][3] = "Modalidad alfanum&eacute;rica";
 answers[22] = choices[22][1];
 units[22] = "108";
 comments[22] = "Id Pregunta: 3515. ";


//  Id pregunta: 3606 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  La f&oacute;rmula de Shannon para la capacidad de un canal es (B es el ancho de banda, S la potencia de la se&ntilde;al y N la potencia del ruido):";
 choices[23]= new Array();
 choices[23][0] = "R[bps] = B[Hz] &middot; log2(1 + S/N)";
 choices[23][1] = "R[bps] = B[Hz] &middot; ln(1 + S/N)";
 choices[23][2] = "R[bps] = B[Hz] &middot; log10(1 + S/N)";
 choices[23][3] = "R[bps] = B[kHz] &middot; log2(S/N)";
 answers[23] = choices[23][0];
 units[23] = "99";
 comments[23] = "Id Pregunta: 3606. *: teorema de shannon";


//  Id pregunta: 3624 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  La normativa para sistemas de cableado de edificios es:";
 choices[24]= new Array();
 choices[24][0] = "EIA/TIA 568";
 choices[24][1] = "ISO/IEC DIS 11801";
 choices[24][2] = "EPHOS 2";
 choices[24][3] = "&quot;a&quot; y &quot;b&quot;";
 answers[24] = choices[24][3];
 units[24] = "99";
 comments[24] = "Id Pregunta: 3624. ";


//  Id pregunta: 3630 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  La pen&iacute;nsula ib&eacute;rica est&aacute; telem&aacute;ticamente unida a las islas Canarias:";
 choices[25]= new Array();
 choices[25][0] = "&uacute;nicamente mediante enlace por sat&eacute;lite";
 choices[25][1] = "&uacute;nicamente mediante enlace por cable submarino";
 choices[25][2] = "mediante cable submarino como enlace principal y por sat&eacute;lite como enlace de reserva";
 choices[25][3] = "mediante enlace por sat&eacute;lite como enlace principal y por cable submarino como enlace de reserva";
 answers[25] = choices[25][2];
 units[25] = "105,110";
 comments[25] = "Id Pregunta: 3630. ";


//  Id pregunta: 3671 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  Una de las siguientes afirmaciones es falsa con respecto a ADSL:";
 choices[26]= new Array();
 choices[26][0] = "El caudal de informaci&oacute;n es mayor en sentido red-usuario que en el sentido contrario";
 choices[26][1] = "La tarificaci&oacute;n no depende del uso sino del ancho de banda contratado";
 choices[26][2] = "Permite navegar por Internet y mantener una conversaci&oacute;n telef&oacute;nica simult&aacute;neamente";
 choices[26][3] = "Hay que hacer un nuevo tendido de cobre entre la central y el domicilio del abonado para poder instalarlo";
 answers[26] = choices[26][3];
 units[26] = "107";
 comments[26] = "Id Pregunta: 3671. NULL";


//  Id pregunta: 3697 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  Las diversas tecnolog&iacute;as usadas en red local y metropolitanas se han popularizado mediante diversos nombres y normas. Indique la opci&oacute;n correcta o si lo son todas ellas:";
 choices[27]= new Array();
 choices[27][0] = "Las redes Token Ring se caracterizan por tener una topolog&iacute;a en anillo l&oacute;gico y la norma que cumple es IEEE 802.4";
 choices[27][1] = "La red FDDI est&aacute; definida como una red en anillo f&iacute;sico y est&aacute; amparada por la norma ISO-9314";
 choices[27][2] = "Las redes Token Bus se caracterizan por tener una topolog&iacute;a en anillo f&iacute;sico y estar amparadas por la norma IEEE 802.3";
 choices[27][3] = "Todas las respuestas anteriores son ciertas";
 answers[27] = choices[27][1];
 units[27] = "101";
 comments[27] = "Id Pregunta: 3697. ";


//  Id pregunta: 3712 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  Los agentes SNMP son:";
 choices[28]= new Array();
 choices[28][0] = "M&oacute;dulos de software que se ejecutan en los dispositivos gestionados y cuya funci&oacute;n es que la informaci&oacute;n acerca del dispositivo est&eacute; disponible para los sistemas de gesti&oacute;n ";
 choices[28][1] = "Ordenadores dedicados a la tarea de preguntar a los dispositvos SNMP por la informaci&oacute;n relevante y catalogarla en una base de datos";
 choices[28][2] = "Oficiales de ISO que realizan peri&oacute;dicamente auditor&iacute;as en compa&ntilde;&iacute;as que tienen grandes redes gestionadas por SNMP";
 choices[28][3] = "Aplicaciones dise&ntilde;adas para monitorizar la actividad de sistemas gestionados SNMP y alertar al usuario en caso de alg&uacute;n problema";
 answers[28] = choices[28][0];
 units[28] = "104";
 comments[28] = "Id Pregunta: 3712. ";


//  Id pregunta: 3726 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  Los mensajes SMS:";
 choices[29]= new Array();
 choices[29][0] = "Viajan por un canal de se&ntilde;alizaci&oacute;n";
 choices[29][1] = "Viajan por un canal de voz";
 choices[29][2] = "Se codifican por pulsos";
 choices[29][3] = "Ninguna de las anteriores";
 answers[29] = choices[29][0];
 units[29] = "108";
 comments[29] = "Id Pregunta: 3726. ";


//  Id pregunta: 3885 AÃ±o de creación de pregunta: 2003-01-01
 questions[30]= "31)  &iquest;Qu&eacute; es JavaScript?";
 choices[30]= new Array();
 choices[30][0] = "Un lenguaje de validaci&oacute;n de formularios en p&aacute;ginas Web";
 choices[30][1] = "Es una implementaci&oacute;n del ECMA 262";
 choices[30][2] = "Es un lenguaje Java reducido para Internet que sustituye a CGI ";
 choices[30][3] = "Es un lenguaje que soporta objetos y funciones, pero no clases de objetos ni herencias entre ellos";
 answers[30] = choices[30][3];
 units[30] = "114";
 comments[30] = "Id Pregunta: 3885. ";


//  Id pregunta: 3916 AÃ±o de creación de pregunta: 2003-01-01
 questions[31]= "32)  Cuando una copia de seguridad incluye todos los archivos pero no los marca individualmente como copiados se habla de:";
 choices[31]= new Array();
 choices[31][0] = "Copia de seguridad incremental.";
 choices[31][1] = "Copia de seguridad diaria.";
 choices[31][2] = "Copia de seguridad intermedia.";
 choices[31][3] = "Copia de seguridad diferencial.";
 answers[31] = choices[31][2];
 units[31] = "97";
 comments[31] = "Id Pregunta: 3916. NULL";


//  Id pregunta: 3922 AÃ±o de creación de pregunta: 2003-01-01
 questions[32]= "33)  Un documento multimedia se define como:";
 choices[32]= new Array();
 choices[32][0] = "Compuestos de audio y v&iacute;deo.";
 choices[32][1] = "Compuestos de se&ntilde;ales ni digitales ni digitalizadas.";
 choices[32][2] = "Compuestos de diferentes fuentes y estructuras que incorpora documentos digitales o digitalizados.";
 choices[32][3] = "Compuestos de diferentes fuentes y estructuras que incorpora no s&oacute;lo documentos digitales o digitalizados, sino tambi&eacute;n a los procedentes de otros tipos de se&ntilde;ales.";
 answers[32] = choices[32][3];
 units[32] = "93";
 comments[32] = "Id Pregunta: 3922. NULL";


//  Id pregunta: 3955 AÃ±o de creación de pregunta: 2003-01-01
 questions[33]= "34)  Indicar la afirmaci&oacute;n falsa";
 choices[33]= new Array();
 choices[33][0] = "Los Servicios Web son m&aacute;s simples que la arquitectura CORBA";
 choices[33][1] = "Es muy dif&iacute;cil hacer interactuar una plataforma en COMcon otra en CORBA";
 choices[33][2] = "No es posible  que un  objeto CORBA  se  comunique  con un  objeto  JavaRMI,";
 choices[33][3] = "CORBA tiene m&uacute;ltiples implementaciones";
 answers[33] = choices[33][2];
 units[33] = "116";
 comments[33] = "Id Pregunta: 3955. Hubo una pregunta sobre CORBA en el ex&aacute;men de SS del 2003, diferente de &eacute;sta";


//  Id pregunta: 4011 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  La recomendaci&oacute;n ITU-T X-500 tambi&eacute;n se conoce como:";
 choices[34]= new Array();
 choices[34][0] = "ISO/IEC 9459";
 choices[34][1] = "ISO/IEC 9549";
 choices[34][2] = "ISO/IEC 9594";
 choices[34][3] = "ISO/IEC 9495";
 answers[34] = choices[34][2];
 units[34] = "106";
 comments[34] = "Id Pregunta: 4011. ";


//  Id pregunta: 4026 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  W-CDMA permite a UMTS trasmitir datos en un rango de velocidades que van desde los 144 Kbps a los 384 Kbps y hasta 2 Mbps en interior de edificios. Pero, &iquest;qu&eacute; t&eacute;cnica de duplexi&oacute;n usa W-CDMA?";
 choices[35]= new Array();
 choices[35][0] = "TDD";
 choices[35][1] = "FDD";
 choices[35][2] = "Las dos anteriores";
 choices[35][3] = "Ninguna de las anteriores";
 answers[35] = choices[35][2];
 units[35] = "108";
 comments[35] = "Id Pregunta: 4026. ";


//  Id pregunta: 4043 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  Seg&uacute;n el art&iacute;culo 72 de la Ley 9/2014, &iquest;a cu&aacute;l de los siguientes organismos corresponde la funci&oacute;n inspectora en materia de telecomunicaciones?";
 choices[36]= new Array();
 choices[36][0] = "Comisi&oacute;n Nacional de los Mercados y la Competencia";
 choices[36][1] = "Ministerio de Industria, Energ&iacute;a y Turismo";
 choices[36][2] = "Corresponde a ambos";
 choices[36][3] = "No corresponde a ninguno";
 answers[36] = choices[36][2];
 units[36] = "110";
 comments[36] = "Id Pregunta: 4043. ";


//  Id pregunta: 4056 AÃ±o de creación de pregunta: 2004-01-01
 questions[37]= "38)  &iquest;Cu&aacute;l de las siguientes tecnolog&iacute;as no se puede utilizar actualmente para acceder a internet en Espa&ntilde;a?";
 choices[37]= new Array();
 choices[37][0] = "ADSL";
 choices[37][1] = "Cable";
 choices[37][2] = "Wi-Max";
 choices[37][3] = "Ninguna de las respuestas es correcta";
 answers[37] = choices[37][3];
 units[37] = "112";
 comments[37] = "Id Pregunta: 4056. ";


//  Id pregunta: 4065 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  Que tendencias se observan en los servicios de telecomunicaciones";
 choices[38]= new Array();
 choices[38][0] = "La convergencia de las redes de voz y datos";
 choices[38][1] = "La convergencia de las tecnolog&iacute;as de telefonia movil y las tecnolog&iacute;as wireless como wi-fi";
 choices[38][2] = "Ninguna de las anteriores";
 choices[38][3] = "tanto la opci&oacute;n a como la b";
 answers[38] = choices[38][3];
 units[38] = "102,107,108";
 comments[38] = "Id Pregunta: 4065. ";


//  Id pregunta: 4106 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  Un GigaPop es:";
 choices[39]= new Array();
 choices[39][0] = "1000 pops.";
 choices[39][1] = "Un nodo de interconexi&oacute;n del backbone de Internet 2.";
 choices[39][2] = "Ninguna de las anteriores";
 choices[39][3] = "a) y b) son ciertas.";
 answers[39] = choices[39][1];
 units[39] = "112";
 comments[39] = "Id Pregunta: 4106. ";


//  Id pregunta: 4108 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  Existen varias formas de acceder al servicio de correo electr&oacute;nico:";
 choices[40]= new Array();
 choices[40][0] = "B&aacute;sicamente dos, a trav&eacute;s de webmail o a trav&eacute;s de programas de correo electr&oacute;nico especializado.";
 choices[40][1] = "B&aacute;sicamente dos, a trav&eacute;s de webmail o a trav&eacute;s de programas denominados P2P (Peer To Peer).";
 choices[40][2] = "El correo electr&oacute;nico es en todo caso un servicio de pago.";
 choices[40][3] = "Ninguna de las anteriores es correcta";
 answers[40] = choices[40][0];
 units[40] = "112";
 comments[40] = "Id Pregunta: 4108. ";


//  Id pregunta: 4135 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  Los mensajes enviados por alguien para saber qu&eacute; servicios de la red se encuentran activos se llaman";
 choices[41]= new Array();
 choices[41][0] = "robo de bits";
 choices[41][1] = "Lenguaje de descripci&oacute;n de servicios Web (WSDL)";
 choices[41][2] = "Identificador de Perfil de Servicio (SPI)";
 choices[41][3] = "escaneo de puertos";
 answers[41] = choices[41][3];
 units[41] = "100";
 comments[41] = "Id Pregunta: 4135. ";


//  Id pregunta: 4149 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  M&eacute;todo seguro de autorizaci&oacute;n de acceso a un servicio en una red desarrollado en el proyecto Athena del MIT";
 choices[42]= new Array();
 choices[42][0] = "Carnivore";
 choices[42][1] = "Internet Key Exchange (IKE)";
 choices[42][2] = "Kerberos";
 choices[42][3] = "SSL";
 answers[42] = choices[42][2];
 units[42] = "111";
 comments[42] = "Id Pregunta: 4149. NULL";


//  Id pregunta: 4323 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  &iquest;Cu&aacute;l de los siguientes elementos, de resultar inadecuado, podr&iacute;a facilitar un ataque de negaci&oacute;n de servicio en un sistema de informaci&oacute;n?";
 choices[43]= new Array();
 choices[43][0] = "La configuraci&oacute;n del router y reglas aplicadas.";
 choices[43][1] = "El dise&ntilde;o de la red interna.";
 choices[43][2] = "Las t&eacute;cnicas de revisi&oacute;n de auditoria.";
 choices[43][3] = "Las t&eacute;cnicas de prueba de auditoria";
 answers[43] = choices[43][0];
 units[43] = "100";
 comments[43] = "Id Pregunta: 4323. ";


//  Id pregunta: 4541 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  &iquest;En que est&aacute;ndar se basa Ia tecnolog&iacute;a WIMAX?";
 choices[44]= new Array();
 choices[44][0] = "IEEE802.16";
 choices[44][1] = "IEEE802.11";
 choices[44][2] = "IEEE802.3";
 choices[44][3] = "IEEE802.2";
 answers[44] = choices[44][0];
 units[44] = "107";
 comments[44] = "Id Pregunta: 4541. NULL";


//  Id pregunta: 4655 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  Un detector de intrusiones act&uacute;a a: ";
 choices[45]= new Array();
 choices[45][0] = "nivel f&iacute;sico";
 choices[45][1] = "nivel de enlace";
 choices[45][2] = "nivel de red";
 choices[45][3] = "nivel de aplicaci&oacute;n";
 answers[45] = choices[45][3];
 units[45] = "111";
 comments[45] = "Id Pregunta: 4655. NULL";


//  Id pregunta: 4691 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  En la tecnolog&iacute;a de comunicaciones RDSI, los canales se dividen en";
 choices[46]= new Array();
 choices[46][0] = "A, B y C";
 choices[46][1] = "I, II y III";
 choices[46][2] = "B1, B2 y B3";
 choices[46][3] = "B, D y H";
 answers[46] = choices[46][3];
 units[46] = "107";
 comments[46] = "Id Pregunta: 4691. Examen 2006 JCYL";


//  Id pregunta: 4886 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  El impulso de las redes WLAN (Wireless Local Area Network) se ha visto rodeado de fuertes cr&iacute;ticas respecto a laseguridad que ofrecen a los usuarios, ya que las se&ntilde;ales se transportan a trav&eacute;s del aire, que es un entorno quepermite a un hacker/craker interceptar dichas se&ntilde;ales. &iquest;Cu&aacute;l de las siguientes afirmaciones respecto a losest&aacute;ndares y protocolos de seguridad desarrollados para las redes WLAN NO es cierta?";
 choices[47]= new Array();
 choices[47][0] = "El protocolo WEP (Wired Equivalent Privacy) se dise&ntilde;&oacute; para asegurar el enlace de radio entre dispositivosen redes IEEE (Institute of Electrical and Electronics Engineers) 802.11 y utiliza el algoritmo de cifradosim&eacute;trico RC4";
 choices[47][1] = "El protocolo WEP din&aacute;mico fue creado, como soluci&oacute;n temporal para resolver los problemas de seguridaddel protocolo WEP, y est&aacute; basado en el est&aacute;ndar IEEE 802.1x";
 choices[47][2] = "El protocolo WPA (Wi-Fi Protected Access) define los modos de trabajo WPA-PERSONAL y WPAENTERPRISE";
 choices[47][3] = "IEEE 802.1i es el est&aacute;ndar que ha definido una arquitectura m&aacute;s robusta y segura para las redesinal&aacute;mbricas";
 answers[47] = choices[47][3];
 units[47] = "107";
 comments[47] = "Id Pregunta: 4886. NULL";


//  Id pregunta: 5044 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre RSS es err&oacute;nea?:";
 choices[48]= new Array();
 choices[48][0] = "RSS es un formato para la sindicaci&oacute;n de contenidos de p&aacute;ginas web.";
 choices[48][1] = "RSS es un agregador de contenidos de diversas p&aacute;ginas webs de noticias";
 choices[48][2] = "RSS es parte de la familia de los formatos XML";
 choices[48][3] = "Es un acr&oacute;nimo de &quot;Really Simple Syndication&quot;";
 answers[48] = choices[48][1];
 units[48] = "112";
 comments[48] = "Id Pregunta: 5044. Examen TIC A 2007";


//  Id pregunta: 5079 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  En la estructura de la trama del protocolo HDLC (&quot;High level Data Link Control&quot;) el n&uacute;mero de bits del delimitadordel comienzo de la trama es:";
 choices[49]= new Array();
 choices[49][0] = "Variable";
 choices[49][1] = "8";
 choices[49][2] = "16";
 choices[49][3] = "32";
 answers[49] = choices[49][1];
 units[49] = "101";
 comments[49] = "Id Pregunta: 5079. Examen TIC A 2007";


//  Id pregunta: 5130 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l es la longitud equivalente a una clave RSA de 1024 bits si utiliz&aacute;ramos un algoritmo de clave sim&eacute;trica?";
 choices[50]= new Array();
 choices[50][0] = "132";
 choices[50][1] = "80";
 choices[50][2] = "64";
 choices[50][3] = "512";
 answers[50] = choices[50][1];
 units[50] = "111";
 comments[50] = "Id Pregunta: 5130. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5474 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  En el servidor http Apache al configurarlo como HostnameLookUps On lo que hacemos es";
 choices[51]= new Array();
 choices[51][0] = "Ver si la petici&oacute;n origen proviene de un sistema conocido a trav&eacute;s del fichero /etc/hosts para almacenar el nombre en el fichero de log";
 choices[51][1] = "Ver si la petici&oacute;n origen proviene de un sistema conocido a trav&eacute;s del servicio dns inverso para almacenar el nombre en el fichero de log";
 choices[51][2] = "Ver si la petici&oacute;n origen tiene un nombre asociado a trav&eacute;s del o los servicios de resoluci&oacute;n de nombres ip para almacenar el nombre en el fichero del log";
 choices[51][3] = "Almacena en el log la ip y tambi&eacute;n el nombre del sistema origen de la petici&oacute;n http";
 answers[51] = choices[51][2];
 units[51] = "113";
 comments[51] = "Id Pregunta: 5474. Castilla y Le&oacute;n";


//  Id pregunta: 5906 AÃ±o de creación de pregunta: 2009-01-01
 questions[52]= "53)  En el &aacute;mbito de Internet, cuando hablamos de PHISHING nos estamos refiendo a:";
 choices[52]= new Array();
 choices[52][0] = "Un determinado virus inform&aacute;tico";
 choices[52][1] = "Difusi&oacute;n masiva de noticias falsas";
 choices[52][2] = "Suplantaci&oacute;n fraudulenta que intentan conseguir informaci&oacute;n valiosa";
 choices[52][3] = "Reenv&iacute;o de mensajes a mucha gente";
 answers[52] = choices[52][2];
 units[52] = "111";
 comments[52] = "Id Pregunta: 5906. MAP 2008 A1";


//  Id pregunta: 5917 AÃ±o de creación de pregunta: 2009-01-01
 questions[53]= "54)  La Ley 9/2014, General de Telecomunicaciones, establece los derechos de los consumidores y usuarios finales. &iquest;Cu&aacute;l de entre los siguientes apartados NO es contemplado por dicha ley como un derecho del usuario individual?";
 choices[53]= new Array();
 choices[53][0] = "Introducir cl&aacute;usulas de modificaci&oacute;n de los contratos con los operadores, para evitar un trato abusivo";
 choices[53][1] = "A recibir facturas no desglosadas cuando as&iacute; lo solicitasen";
 choices[53][2] = "A detener el desv&iacute;o autom&aacute;tico de llamadas efectuado a su terminal por parte de un tercero";
 choices[53][3] = "A impedir, mediante un procedimiento sencillo y gratuito, la prestaci&oacute;n de la identificaci&oacute;n de la l&iacute;nea de origen en la llamadas entrantes y a rechazar las llamadas en que dicha l&iacute;nea no aparezca identificada";
 answers[53] = choices[53][0];
 units[53] = "110";
 comments[53] = "Id Pregunta: 5917. MAP 2008 A1";


//  Id pregunta: 5942 AÃ±o de creación de pregunta: 2009-01-01
 questions[54]= "55)  Respecto a productos de virtualizaci&oacute;n, se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[54]= new Array();
 choices[54][0] = "Virtual Box es una soluci&oacute;n de virtualizaci&oacute;n de Oracle";
 choices[54][1] = "Hyper-V es una soluci&oacute;n de virtualizaci&oacute;n de Microsoft";
 choices[54][2] = "La distribuci&oacute;n de GNU/Linux Red Hat mantiene una infraestructura de virtualizaci&oacute;n para el kernel de Linux";
 choices[54][3] = "VMWare Player es una soluci&oacute;n de virtualizaci&oacute;n de escritorio gratuita y de fuentes abiertas de VMWare";
 answers[54] = choices[54][3];
 units[54] = "119";
 comments[54] = "Id Pregunta: 5942. ";


//  Id pregunta: 6051 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  &iquest;Qu&eacute; es CMOT?";
 choices[55]= new Array();
 choices[55][0] = "Significa Common Management Over TCP/IP y es una extensi&oacute;n de los est&aacute;ndares de gesti&oacute;n OSI para Internet";
 choices[55][1] = "Significa Common Mobile Online Trespassing y es un protocolo para realizar el traspaso de llamadas entre sistemas de telefon&iacute;a m&oacute;vil sobre VSAT ";
 choices[55][2] = "Significa Critical Mode Online Testing y es una herramienta para la realizaci&oacute;n de pruebas de rendimiento no intrusivas en aplicaciones de misi&oacute;n cr&iacute;tica ";
 choices[55][3] = "Ninguna de las respuestas anteriores es correcta ";
 answers[55] = choices[55][0];
 units[55] = "104";
 comments[55] = "Id Pregunta: 6051. ";


//  Id pregunta: 6071 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  &iquest;Qu&eacute; regula la normativa de ICT (Infraestructuras Comunes de Telecomunicaci&oacute;n)?";
 choices[56]= new Array();
 choices[56][0] = "El acceso a los servicios de telecomunicaci&oacute;n en el interior de los edificios";
 choices[56][1] = "Los servicios de difusi&oacute;n de radio y televisi&oacute;n por cable";
 choices[56][2] = "La consideraci&oacute;n de Internet como servicio universal";
 choices[56][3] = "Ninguna de las anteriores";
 answers[56] = choices[56][0];
 units[56] = "105";
 comments[56] = "Id Pregunta: 6071. ";


//  Id pregunta: 6145 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  Con respecto a la desagregaci&oacute;n del bucle de abonado:";
 choices[57]= new Array();
 choices[57][0] = "Existe una oferta de acceso al bucle de abonado (OBA) que obliga al operador establecido (&lsquo;incumbent&rsquo;) a abrir su red a los operadores alternativos";
 choices[57][1] = "La OBA exige que el operador establecido (&lsquo;incumbent&rsquo;) abra su red a los operadores alternativos para todos los servicios sin excepciones, si bien &eacute;stos deber&aacute;n abonar una cuota mensual por cada servicio desagregado";
 choices[57][2] = "Las respuestas a) y b) son correctas";
 choices[57][3] = "Las respuestas a) y b) son falsas";
 answers[57] = choices[57][0];
 units[57] = "107";
 comments[57] = "Id Pregunta: 6145. NULL";


//  Id pregunta: 6155 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  &iquest;C&oacute;mo fue renombrado el protocolo SMB por Microsoft?";
 choices[58]= new Array();
 choices[58][0] = "SAMBA";
 choices[58][1] = "CIFS";
 choices[58][2] = "MSRPC";
 choices[58][3] = "Ninguna de las anteriores.";
 answers[58] = choices[58][1];
 units[58] = "112";
 comments[58] = "Id Pregunta: 6155. ";


//  Id pregunta: 6485 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  En relaci&oacute;n con la transmisi&oacute;n en frecuencias radioel&eacute;ctricas, el medio de transmisi&oacute;n influye en la propagaci&oacute;n a trav&eacute;s de un conjunto de fen&oacute;menos f&iacute;sicos &iquest;Cu&aacute;l NO es uno de ellos?";
 choices[59]= new Array();
 choices[59][0] = "Reflexi&oacute;n";
 choices[59][1] = "Dispersi&oacute;n crom&aacute;tica";
 choices[59][2] = "Difracci&oacute;n";
 choices[59][3] = "Absorci&oacute;n";
 answers[59] = choices[59][1];
 units[59] = "99";
 comments[59] = "Id Pregunta: 6485. Castilla La Mancha 2009";


//  Id pregunta: 6564 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  GPRS no se caracteriza por";
 choices[60]= new Array();
 choices[60][0] = "Servicio simult&aacute;neo de voz y datos";
 choices[60][1] = "No existe multiplexaci&oacute;n de voz y datos";
 choices[60][2] = "Servicio no orientado a conexi&oacute;n";
 choices[60][3] = "Tarificaci&oacute;n por volumen de datos intercambiado";
 answers[60] = choices[60][1];
 units[60] = "108";
 comments[60] = "Id Pregunta: 6564. NULL";


//  Id pregunta: 6574 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa?";
 choices[61]= new Array();
 choices[61][0] = "ICMP trabaja en la capa de enlace";
 choices[61][1] = "ICMP informa a los hosts, routers y otros dispositivos de problemas en la red";
 choices[61][2] = "ICMP es el principal componente de la utilidad ping";
 choices[61][3] = "Todas las respuestas anteriores son correctas";
 answers[61] = choices[61][0];
 units[61] = "100";
 comments[61] = "Id Pregunta: 6574. NULL";


//  Id pregunta: 8177 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  &iquest;Cu&aacute;l es la afirmaci&oacute;n INCORRECTA respecto a los Sistemas de Cableado?:";
 choices[62]= new Array();
 choices[62][0] = "Las ventanas hist&oacute;ricamente definidas para transmisi&oacute;n en fibra &oacute;ptica se encuentran situadas alrededor de los 850, 1310 y 1550 nm.";
 choices[62][1] = "La diafon&iacute;a se clasifica en paradiafon&iacute;a y telediafon&iacute;a.";
 choices[62][2] = "La propagaci&oacute;n en las fibras &oacute;pticas depende de la reflexi&oacute;n interna que se produce gracias a que el revestimiento tiene un &iacute;ndice de refracci&oacute;n mayor que el del n&uacute;cleo.";
 choices[62][3] = "La fibra monomodo se puede lograr reduciendo el di&aacute;metro del n&uacute;cleo.";
 answers[62] = choices[62][2];
 units[62] = "99";
 comments[62] = "Id Pregunta: 8177. Examen TIC A1 2010";


//  Id pregunta: 8309 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  Respecto a la Web 2.0 se puede afirmar que: ";
 choices[63]= new Array();
 choices[63][0] = "Transforma software del web hacia la plataforma de escritorio. ";
 choices[63][1] = "Se trata de una actitud evolutiva, m&aacute;s que una tecnolog&iacute;a. ";
 choices[63][2] = "Pretende sustituir a las redes sociales, al manejar usuarios y comunidades. ";
 choices[63][3] = "Encapsula APIs o XML para impedir que las aplicaciones puedan ser manipuladas por otros.";
 answers[63] = choices[63][1];
 units[63] = "120";
 comments[63] = "Id Pregunta: 8309. Examen TIC A2 2010";


//  Id pregunta: 8452 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  &iquest;Cu&aacute;l es uno de los inconvenientes de usar un Hub?:";
 choices[64]= new Array();
 choices[64][0] = "Un Hub no puede extender la distancia operativa de la red";
 choices[64][1] = "Un Hub no puede filtrar el tr&aacute;fico de la red";
 choices[64][2] = "Un Hub no puede amplificar se&ntilde;ales debilitadas";
 choices[64][3] = "Un Hub no cumple ninguna de las anteriores";
 answers[64] = choices[64][1];
 units[64] = "102";
 comments[64] = "Id Pregunta: 8452. Analista Ayto. Madrid 2010";


//  Id pregunta: 8468 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  GPRS es un servicio que soporta la transmisi&oacute;n de paquetes via radio:";
 choices[65]= new Array();
 choices[65][0] = "Utilizando el protocolo HSDPA y el mismo BSS de GSM";
 choices[65][1] = "Utilizando el protocolo IP y el mismo BSS de GSM";
 choices[65][2] = "Utilizando el protocolo IP y transmisi&oacute;n WCDMA de banda ancha";
 choices[65][3] = "Ninguna de las anteriores";
 answers[65] = choices[65][1];
 units[65] = "108";
 comments[65] = "Id Pregunta: 8468. Analista Ayto. Madrid 2010";


//  Id pregunta: 8482 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta, considerando diferencias entre IPv4 e IPv6?";
 choices[66]= new Array();
 choices[66][0] = "Ipv6 duplica el tama&ntilde;o de la direcci&oacute;n desde los 32 bits a los 64 bits.";
 choices[66][1] = "Algunos campos de la cabecera de Ipv4 han sido eliminados o convertidos en opcionales para reducir el coste de proceso normal de los paquetes y limitar el coste en ancho de banda de la cabecera Ipv6.";
 choices[66][2] = "IPV6 complica la cabecera, al a&ntilde;adir campos a los que ya tenia la cabecea Ipv4, para permitir mayor capacidad de configuraci&oacute;n, lo que supone, por contra, un mayor coste de proceso, que se compensar&aacute; por la mayor potencia del hardware.";
 choices[66][3] = "IPv6 triplica el tama&ntilde;o de la direcci&oacute;n desde los 32 bits a los 96 bits.";
 answers[66] = choices[66][1];
 units[66] = "100";
 comments[66] = "Id Pregunta: 8482. Examen TIC A2 2010 interna";


//  Id pregunta: 8529 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  En el contexto de la Web 2.0, el conjunto formado por una colecci&oacute;n extensible de p&aacute;ginas web entrelazadas, un sistema hipertextual para almacenar y modificar informaci&oacute;n y una base de datos donde cada p&aacute;gina puede ser f&aacute;cilmente modificada por cualquier usuario que disponga de un navegador web est&aacute;ndar que admita la utilizaci&oacute;n de formularios, corresponde al concepto de:";
 choices[67]= new Array();
 choices[67][0] = "Wiki.";
 choices[67][1] = "Mashup.";
 choices[67][2] = "Blog.";
 choices[67][3] = "Agregador o feeder. ";
 answers[67] = choices[67][0];
 units[67] = "120";
 comments[67] = "Id Pregunta: 8529. Examen TIC A2 2010 interna";


//  Id pregunta: 8623 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  &iquest;Cu&aacute;l de las siguientes NO es una plataforma de virtualizaci&oacute;n?";
 choices[68]= new Array();
 choices[68][0] = "Xen";
 choices[68][1] = "Alfresco";
 choices[68][2] = "VMWare";
 choices[68][3] = "Virtuozzo";
 answers[68] = choices[68][1];
 units[68] = "119";
 comments[68] = "Id Pregunta: 8623. Examen TIC A2 2010 interna";


//  Id pregunta: 8667 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  En relaci&oacute;n a los puertos utilizados en el protocolo FTP se&ntilde;ale la afirmaci&oacute;n correcta.";
 choices[69]= new Array();
 choices[69][0] = "Utiliza el 21 para datos y el 20 para control";
 choices[69][1] = "Utiliza el 20 para datos y el 21 para control";
 choices[69][2] = "Utiliza el 23 para datos y el 25 para control";
 choices[69][3] = "Utiliza el 25 para datos y el 23 para control";
 answers[69] = choices[69][1];
 units[69] = "112";
 comments[69] = "Id Pregunta: 8667. Examen UPM A2 2011";


//  Id pregunta: 8912 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  El sistema de radiocomunicaciones digitales TETRA:";
 choices[70]= new Array();
 choices[70][0] = "Tiene capacidades de transmisi&oacute;n de datos.";
 choices[70][1] = "No permite comunicaciones uno a muchos.";
 choices[70][2] = "Permite una mayor densidad de usuarios que GSM.";
 choices[70][3] = "Es exclusivamente anal&oacute;gico";
 answers[70] = choices[70][0];
 units[70] = "108";
 comments[70] = "Id Pregunta: 8912. Operador Ayto. Madrid 2010";


//  Id pregunta: 9468 AÃ±o de creación de pregunta: 2013-01-01
 questions[71]= "72)  Indique qu&eacute; mensaje utiliza el emisor SMTP para comprobar si el servidor acepta el uso de extensiones de servicio SMTP";
 choices[71]= new Array();
 choices[71][0] = "DATA";
 choices[71][1] = "EHLO";
 choices[71][2] = "HELO";
 choices[71][3] = "MAIL";
 answers[71] = choices[71][1];
 units[71] = "106";
 comments[71] = "Id Pregunta: 9468. ";


//  Id pregunta: 9492 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  En una arquitectura de tres niveles, &iquest;en qu&eacute; nivel se procesa la l&oacute;gica de la aplicaci&oacute;n?";
 choices[72]= new Array();
 choices[72][0] = "Nivel de aplicaci&oacute;n";
 choices[72][1] = "Nivel de presentaci&oacute;n";
 choices[72][2] = "Nivel de datos";
 choices[72][3] = "Nivel de usuario";
 answers[72] = choices[72][0];
 units[72] = "114";
 comments[72] = "Id Pregunta: 9492. NULL";


//  Id pregunta: 9520 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  Indique la afirmaci&oacute;n falsa:";
 choices[73]= new Array();
 choices[73][0] = "JAXP es una API de Java que permite el procesado de documentos XML";
 choices[73][1] = "JAXR es una API de Java que facilita el acceso a UDDI o ebXML";
 choices[73][2] = "SAAJ es una API de Java que permite generar y recoger mensajes SOAP";
 choices[73][3] = "JAX-RPC es una API Java que permite invocar objetos ORBA";
 answers[73] = choices[73][3];
 units[73] = "116";
 comments[73] = "Id Pregunta: 9520. NULL";


//  Id pregunta: 9522 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  En los sistemas de videoconferencia las MCU:";
 choices[74]= new Array();
 choices[74][0] = "Son un componente obligatorio";
 choices[74][1] = "Son un componente opcional";
 choices[74][2] = "Permiten la comunicaci&oacute;n &uacute;nicamente entre dos terminales";
 choices[74][3] = "Permiten sesiones de videoconferencia s&oacute;lo para dos localizaciones remotas simult&aacute;neas";
 answers[74] = choices[74][1];
 units[74] = "117";
 comments[74] = "Id Pregunta: 9522. NULL";


//  Id pregunta: 9927 AÃ±o de creación de pregunta: 2014-01-01
 questions[75]= "76)  Entre los conceptos fundamentales del modelo OSI no est&aacute;:";
 choices[75]= new Array();
 choices[75][0] = "Interfaz: normas de comunicaci&oacute;n entre capas.";
 choices[75][1] = "Primitivas de servicio: llamadas entrantes o salientes en cada una de las capas.";
 choices[75][2] = "Protocolo: conjunto de reglas organizadas y convenidas entre los participantes en una comunicaci&oacute;n.";
 choices[75][3] = "Servicio: cada capa recibe servicios de las entidades que se encuentran sobre ella y presta servicios a las entidades que se encuentran debajo.";
 answers[75] = choices[75][3];
 units[75] = "100";
 comments[75] = "Id Pregunta: 9927. NULL";


//  Id pregunta: 9994 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  &iquest;Cu&aacute;l es la herramienta utilizada para organizar reuniones virtuales dentro de la Red SARA?";
 choices[76]= new Array();
 choices[76][0] = "Conect@";
 choices[76][1] = "Re&uacute;nete";
 choices[76][2] = "Acceda en Cloud";
 choices[76][3] = "TelePresence";
 answers[76] = choices[76][1];
 units[76] = "120";
 comments[76] = "Id Pregunta: 9994. NULL";


//  Id pregunta: 10080 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  En el contexto de comunicaciones inal&aacute;mbricas, MIMO significa:";
 choices[77]= new Array();
 choices[77][0] = "Multiple Input Multiple Output.";
 choices[77][1] = "Massive Input Massive Output.";
 choices[77][2] = "Multiplexed Input Multiplexed Output.";
 choices[77][3] = "Mapped Input Mapped Output.";
 answers[77] = choices[77][0];
 units[77] = "108";
 comments[77] = "Id Pregunta: 10080. TIC A2, libre, Examen 2013";


//  Id pregunta: 10116 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  Respecto al protocolo Spanning Tree Protocol , es falso que:";
 choices[78]= new Array();
 choices[78][0] = "Se usa para definir caminos &uacute;nicos en la red de Nivel 2";
 choices[78][1] = "Permite realizar encaminamiento entre nodos";
 choices[78][2] = "Evita bucles en la red.";
 choices[78][3] = "Converge m&aacute;s lentamente que RSTP";
 answers[78] = choices[78][1];
 units[78] = "101";
 comments[78] = "Id Pregunta: 10116. Es de nivel 2";


//  Id pregunta: 10126 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  La red espa&ntilde;ola para investigaci&oacute;n y educaci&oacute;n es:";
 choices[79]= new Array();
 choices[79][0] = "GEANT";
 choices[79][1] = "IRIS";
 choices[79][2] = "TESTA";
 choices[79][3] = "SARA";
 answers[79] = choices[79][1];
 units[79] = "103";
 comments[79] = "Id Pregunta: 10126. ";


//  Id pregunta: 10198 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  Bluetooth 2.0 incluye un mecanismo llamado EDR (Enhanced Data Rate) para incrementar la velocidad de transmisi&oacute;n. Indique cual es la m&aacute;xima velocidad que se alcanza con este mecanismo:";
 choices[80]= new Array();
 choices[80][0] = "3 Mbps";
 choices[80][1] = "2 Mbps";
 choices[80][2] = "5 Mbps";
 choices[80][3] = "1 Mbps";
 answers[80] = choices[80][0];
 units[80] = "107";
 comments[80] = "Id Pregunta: 10198. 3 Mbps se alcanza usando la modulaci&oacute;n 8DPSK, mientras que con la modulaci&oacute;n pi/4-DQPSK se alcanzan 2 Mbps";


//  Id pregunta: 10203 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  Indique qu&eacute; afirmaci&oacute;n es falsa en relaci&oacute;n a la tecnolog&iacute;a 4G de comunicaciones m&oacute;viles";
 choices[81]= new Array();
 choices[81][0] = "Su arquitectura de red, EPS (Evolved Packet System), est&aacute; formada por el n&uacute;cleo de red EPC (Evolved Packet Core) y la red de acceso LTE, conocida como E-UTRAN";
 choices[81][1] = "Descarta el uso de la t&eacute;cnica HARQ (Hybrid Automatic Repeat Request) introducida en la release 5 (HSDPA)";
 choices[81][2] = "La transmisi&oacute;n multiantena est&aacute; basada en SFBC (Space Frequency Block Coding) y FSTD (Frequency-Shift Time Diversity)";
 choices[81][3] = "Se la conoce con el nombre de LTE (Long Term Evolution)";
 answers[81] = choices[81][1];
 units[81] = "108";
 comments[81] = "Id Pregunta: 10203. La t&eacute;cnica HARQ sigue us&aacute;ndose en 4G";


//  Id pregunta: 10499 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  &iquest;Cual de los siguientes es un servicio comun de reuniones virtuales para las Administraciones Publicas?";
 choices[82]= new Array();
 choices[82][0] = "Reunete";
 choices[82][1] = "Webex";
 choices[82][2] = "Meetic";
 choices[82][3] = "VirtualMeeting";
 answers[82] = choices[82][0];
 units[82] = "117";
 comments[82] = "Id Pregunta: 10499. http://administracionelectronica.gob.es/ctt/reunete";


//  Id pregunta: 10510 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  &iquest;Cual de los siguientes no es un protocolo de correo electr&oacute;nico?";
 choices[83]= new Array();
 choices[83][0] = "SMTP";
 choices[83][1] = "MIME";
 choices[83][2] = "POP2";
 choices[83][3] = "Todos lo son";
 answers[83] = choices[83][3];
 units[83] = "106";
 comments[83] = "Id Pregunta: 10510. POP2 es una versi&oacute;n obsoleta de POP, pero se pregunta por protocolos de correo. No por su actualidad o uso.";


//  Id pregunta: 10653 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  La cabecera de autenticaci&oacute;n (AH) de IPSec:";
 choices[84]= new Array();
 choices[84][0] = "Proporciona integridad, no repudio en origen y protecci&oacute;n contra replay.";
 choices[84][1] = "Proporciona confidencialidad, autenticidad de origen e integridad.";
 choices[84][2] = "Crea la asociaci&oacute;n de seguridad.";
 choices[84][3] = "Ninguna de las anteriores.";
 answers[84] = choices[84][0];
 units[84] = "111";
 comments[84] = "Id Pregunta: 10653. ";


//  Id pregunta: 10662 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  El teorema de Nyquist establece que:";
 choices[85]= new Array();
 choices[85][0] = "El n&uacute;mero m&aacute;ximo de baudios que puede transmitirse por un canal no puede ser superior al doble de su ancho de banda.";
 choices[85][1] = "La relaci&oacute;n se&ntilde;al a ruido presente en el medio de transmisi&oacute;n no puede ser superior al doble de su ancho de banda.";
 choices[85][2] = "La eficiencia espectral es la relaci&oacute;n entre la velocidad de transmisi&oacute;n y el n&uacute;mero m&aacute;ximo de baudios que pueden transmitirse.";
 choices[85][3] = "Ninguna de las anteriores.";
 answers[85] = choices[85][0];
 units[85] = "99";
 comments[85] = "Id Pregunta: 10662. ";


//  Id pregunta: 10810 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  &iquest;Qu&eacute; tipo de ataque es un &quot;ataque smurf&quot;?";
 choices[86]= new Array();
 choices[86][0] = "Denegaci&oacute;n de servicio.";
 choices[86][1] = "Hombre intermedio.";
 choices[86][2] = "Fuerza Bruta.";
 choices[86][3] = "Ingenier&iacute;a social.";
 answers[86] = choices[86][0];
 units[86] = "111";
 comments[86] = "Id Pregunta: 10810. Examen GSI 2014";


//  Id pregunta: 10878 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  &iquest;Cu&aacute;l de los siguientes NO es un producto de virtualizaci&oacute;n?";
 choices[87]= new Array();
 choices[87][0] = "Virtual PC.";
 choices[87][1] = "XEN.";
 choices[87][2] = "Atheros.";
 choices[87][3] = "VirtualBox.";
 answers[87] = choices[87][2];
 units[87] = "119";
 comments[87] = "Id Pregunta: 10878. Examen GSI 2014";


//  Id pregunta: 10883 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  Se&ntilde;ale cu&aacute;l de las siguientes NO es una Protocol Data Unit (PDU) del protocolo SNMP v3:";
 choices[88]= new Array();
 choices[88][0] = "SetRequest PDU";
 choices[88][1] = "InformRequest PDU";
 choices[88][2] = "Report PDU";
 choices[88][3] = "GetBackRequest PDU";
 answers[88] = choices[88][3];
 units[88] = "112";
 comments[88] = "Id Pregunta: 10883. Examen GSI 2014";


//  Id pregunta: 10898 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  &iquest;Qui&eacute;n elabor&oacute; la especificaci&oacute;n Transport Layer Security (TLS)?";
 choices[89]= new Array();
 choices[89][0] = "UIT (Uni&oacute;n Internacional de Telecomunicaciones).";
 choices[89][1] = "IETF (Internet Engineering Task Force).";
 choices[89][2] = "Netscape Communications.";
 choices[89][3] = "ETSI (European Telecommunications Standards Institute).";
 answers[89] = choices[89][1];
 units[89] = "111";
 comments[89] = "Id Pregunta: 10898. Examen GSI 2014";


//  Id pregunta: 10945 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  Respecto a Bluetooth es correcto que:";
 choices[90]= new Array();
 choices[90][0] = "No utiliza la misma banda de frecuencia que Wi-Fi (802.11), por lo que no se interfieren mutuamente.";
 choices[90][1] = "Con 802.11 AMP puede llegar a 24 Mbps.";
 choices[90][2] = "Debe evitarse en entornos escolares debido a que emite radiaci&oacute;n ionizante.";
 choices[90][3] = "Debe emitirse con un m&iacute;nimo de 10 watios.";
 answers[90] = choices[90][1];
 units[90] = "107";
 comments[90] = "Id Pregunta: 10945. TIC A1 AGE 2014";


//  Id pregunta: 11175 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;Qu&eacute; organismo es el responsable del est&aacute;ndar X.500?";
 choices[91]= new Array();
 choices[91][0] = "ITU-T";
 choices[91][1] = "ISO";
 choices[91][2] = "IETF";
 choices[91][3] = "IEEE";
 answers[91] = choices[91][2];
 units[91] = "106";
 comments[91] = "Id Pregunta: 11175. ";


//  Id pregunta: 11184 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares Wifi incluye WPA2?";
 choices[92]= new Array();
 choices[92][0] = "802.e";
 choices[92][1] = "802.f";
 choices[92][2] = "802.h";
 choices[92][3] = "802.i";
 answers[92] = choices[92][3];
 units[92] = "107";
 comments[92] = "Id Pregunta: 11184. ";


//  Id pregunta: 11229 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Cu&aacute;l de las siguientes respuestas es cierta sobre la tecnolog&iacute;a Java Server Faces (JSF)?";
 choices[93]= new Array();
 choices[93][0] = "JSF 2.0 est&aacute; definido especificaci&oacute;n Java EE JSR-314.";
 choices[93][1] = "La implementaci&oacute;n de referencia de la especificaci&oacute;n JSF es el proyecto Oracle Mojarra.";
 choices[93][2] = "JSF 2 utiliza Facelets como su sistema de plantillas por defecto.";
 choices[93][3] = "Todas las respuestas son ciertas.";
 answers[93] = choices[93][3];
 units[93] = "116";
 comments[93] = "Id Pregunta: 11229. ";


//  Id pregunta: 11315 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Indique cu&aacute;l de las siguientes afirmaciones NO es correcta en relaci&oacute;n a Magerit ";
 choices[94]= new Array();
 choices[94][0] = "En Magerit 3, vulnerabilidad de un activo es la potencialidad o posibilidad de ocurrencia de la materializaci&oacute;n de una amenaza sobre dicho activo";
 choices[94][1] = "Se permite estructurar el conjunto de activos en capas";
 choices[94][2] = "Se consideran activos esenciales, la informaci&oacute;n que se maneja y los servicios prestados";
 choices[94][3] = "Define que los activos est&aacute;n expuestos a amenazas que interesan por su valor";
 answers[94] = choices[94][0];
 units[94] = "108";
 comments[94] = "Id Pregunta: 11315. En Magerit 3, esa es la definici&oacute;n del riesgo";


//  Id pregunta: 11458 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre la Ley General de Telecomunicaciones 9/2014 es correcta?:";
 choices[95]= new Array();
 choices[95][0] = "La Comisi&oacute;n Nacional de los Mercados y de la Competencia suministrar&aacute; a las empresas que hagan gu&iacute;as de abonados los datos que faciliten los operadores.";
 choices[95][1] = "Los usuarios finales tienen derecho a cambiar de operador en el plazo de 1 d&iacute;a laborable.";
 choices[95][2] = "La llamada a los servicios de emergencias tienen un coste definido por el operador.";
 choices[95][3] = "Ninguna de las anteriores.";
 answers[95] = choices[95][1];
 units[95] = "110";
 comments[95] = "Id Pregunta: 11458. ";


//  Id pregunta: 11649 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Se&ntilde;ale cu&aacute;l de los siguientes no es un conector de fibra &oacute;ptica:";
 choices[96]= new Array();
 choices[96][0] = "FC";
 choices[96][1] = "LC";
 choices[96][2] = "SC";
 choices[96][3] = "NC";
 answers[96] = choices[96][3];
 units[96] = "99";
 comments[96] = "Id Pregunta: 11649. ";


//  Id pregunta: 11691 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  En el contexto de NAT IP,&iquest; qu&eacute; direcci&oacute;n se usa para representar equipos internos en el exterior?";
 choices[97]= new Array();
 choices[97][0] = "Local interna";
 choices[97][1] = "Global interna";
 choices[97][2] = "Local externa";
 choices[97][3] = "Global interna";
 answers[97] = choices[97][1];
 units[97] = "111";
 comments[97] = "Id Pregunta: 11691. NULL";


//  Id pregunta: 11693 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Qu&eacute; es PAT?";
 choices[98]= new Array();
 choices[98][0] = "Port Address Translation";
 choices[98][1] = "Protocol Access Translation";
 choices[98][2] = "Port Acknowledge Timeout";
 choices[98][3] = "PDU access token";
 answers[98] = choices[98][0];
 units[98] = "111";
 comments[98] = "Id Pregunta: 11693. NULL";


//  Id pregunta: 11704 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Las direcciones globales en ipv6 empiezan de la manera siguiente:";
 choices[99]= new Array();
 choices[99][0] = "2000::/3";
 choices[99][1] = "FF00::/10";
 choices[99][2] = "FE00::/12";
 choices[99][3] = "::1/128";
 answers[99] = choices[99][0];
 units[99] = "100";
 comments[99] = "Id Pregunta: 11704. NULL";


