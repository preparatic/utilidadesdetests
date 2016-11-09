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

//  Id pregunta: 39 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de las siguientes respuestas no puede considerarse como un est&aacute;ndar abierto?:";
 choices[0]= new Array();
 choices[0][0] = "SNA";
 choices[0][1] = "C++";
 choices[0][2] = "SQL";
 choices[0][3] = "TCP/IP";
 answers[0] = choices[0][0];
 units[0] = "40";
 comments[0] = "Id Pregunta: 39. ";


//  Id pregunta: 157 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  El porcentaje de tiempo que los distintos dispositivos del sistema est&aacute;n siendo utilizados en tareas del sistema, no directamente imputables a ninguno de los trabajos en curso se denomina:";
 choices[1]= new Array();
 choices[1][0] = "Overlap";
 choices[1][1] = "Swaping";
 choices[1][2] = "Throughput";
 choices[1][3] = "Overhead";
 answers[1] = choices[1][3];
 units[1] = "35";
 comments[1] = "Id Pregunta: 157. NULL";


//  Id pregunta: 210 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  En la Administraci&oacute;n P&uacute;blica se puede copiar un programa de ordenador para entregarlo a terceros s&oacute;lo:";
 choices[2]= new Array();
 choices[2][0] = "Cuando haya sido desarrollado a medida de las necesidades de la Administraci&oacute;n";
 choices[2][1] = "Cuando se trate de la copia de &quot;back-up&quot;";
 choices[2][2] = "Cuando los derechos de explotaci&oacute;n correspondan a la Administraci&oacute;n";
 choices[2][3] = "Cuando la Administraci&oacute;n haya adquirido una licencia de uso corporativa";
 answers[2] = choices[2][2];
 units[2] = "36";
 comments[2] = "Id Pregunta: 210. ";


//  Id pregunta: 240 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  En un gr&aacute;fico PERT los nodos representan:";
 choices[3]= new Array();
 choices[3][0] = "Actividades.";
 choices[3][1] = "Sucesos.";
 choices[3][2] = "El camino cr&iacute;tico.";
 choices[3][3] = "La holgura de una actividad.";
 answers[3] = choices[3][1];
 units[3] = "27";
 comments[3] = "Id Pregunta: 240. ";


//  Id pregunta: 245 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  En una auditor&iacute;a de un sistema EDI, &iquest;cu&aacute;les son las principales &aacute;reas de revisi&oacute;n y evaluaci&oacute;n, en las que los auditores  y el personal especializado de soporte deben centrarse?:";
 choices[4]= new Array();
 choices[4][0] = "Conocimiento del negocio, evaluaci&oacute;n de controles y pruebas";
 choices[4][1] = "Conocimiento del negocio, evaluaci&oacute;n del riesgo, evaluaci&oacute;n de los controles generales, evaluaci&oacute;n de los controles de operaci&oacute;n, pruebas, uso de herramientas asistidas por ordenador (CAAT)";
 choices[4][2] = "Conocimiento del negocio, evaluaci&oacute;n del riesgo,  evaluaci&oacute;n de controles y pruebas";
 choices[4][3] = "Conocimiento del negocio, controles administrativos y de gesti&oacute;n, evaluaci&oacute;n del riesgo, evaluaci&oacute;n del los controles de operci&oacute;n, pruebas y uso de herramientas asistidas por ordenador (CAAT)";
 answers[4] = choices[4][1];
 units[4] = "31,32,33";
 comments[4] = "Id Pregunta: 245. ";


//  Id pregunta: 306 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  La fase de formulaci&oacute;n de las pol&iacute;ticas p&uacute;blicas es:";
 choices[5]= new Array();
 choices[5][0] = "Una fase exclusiva de los actores p&uacute;blicos";
 choices[5][1] = "Una fase exclusiva del sector privado";
 choices[5][2] = "Una fase de colaboraci&oacute;n entre el sector p&uacute;blico y privado";
 choices[5][3] = "Una fase de los actores p&uacute;blicos en cuanto a objetivos a alcanzar y del sector privado en cuanto a posibles alternativas para llegar a ellos";
 answers[5] = choices[5][0];
 units[5] = "41";
 comments[5] = "Id Pregunta: 306. NULL";


//  Id pregunta: 498 AÃ±o de creación de pregunta: 2003-01-01
 questions[6]= "7)  El Director de la Agencia de Protecci&oacute;n de Datos, respecto al movimiento internacional de datos, puede: ";
 choices[6]= new Array();
 choices[6][0] = "Permitir el movimiento de datos a otros pa&iacute;ses sin garant&iacute;a de protecci&oacute;n de datos";
 choices[6][1] = "Permitir el movimiento de datos a otros pa&iacute;ses sin el mismo nivel garant&iacute;a de protecci&oacute;n de datos a discreci&oacute;n";
 choices[6][2] = "Permitir el movimiento de datos a otros pa&iacute;ses sin el mismo nivel garant&iacute;a de protecci&oacute;n de datos";
 choices[6][3] = "No puede permitir el movimiento internacional de datos a pa&iacute;ses con un nivel inferior de garant&iacute;a de protecci&oacute;n de datos.";
 answers[6] = choices[6][2];
 units[6] = "29";
 comments[6] = "Id Pregunta: 498. NULL";


//  Id pregunta: 671 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  Seg&uacute;n el R.D. 209/2003, una de las siguientes afirmaciones es err&oacute;nea:";
 choices[7]= new Array();
 choices[7][0] = "la utilizaci&oacute;n de una direcci&oacute;n electr&oacute;nica &uacute;nica debe ser expresamente notificada por el ciudadano interesado";
 choices[7][1] = "la direcci&oacute;n electr&oacute;nica &uacute;nica debe cumplir los requisitos de poseer identificadores de usuario y claves de acceso, y contener mecanismos de autenticaci&oacute;n y cifrado";
 choices[7][2] = "el CSI pasa a llamarse Consejo para el Impulso de la Administraci&oacute;n Electr&oacute;nica, CIAE";
 choices[7][3] = "los certificados anteriores emitidos por la AEAT y la TGSS deben ser sustituidos a partir de la entrada en vigor del R.D.";
 answers[7] = choices[7][2];
 units[7] = "30";
 comments[7] = "Id Pregunta: 671. ";


//  Id pregunta: 784 AÃ±o de creación de pregunta: 2004-01-01
 questions[8]= "9)  &iquest;Cual de estas tecnologias ser&iacute;a v&aacute;lida para la conexi&oacute;n en una red de area personal de los perif&eacute;ricos m&aacute;s habituales?";
 choices[8]= new Array();
 choices[8][0] = "Ethernet";
 choices[8][1] = "Bluetooth";
 choices[8][2] = "Wifi";
 choices[8][3] = "WLAN";
 answers[8] = choices[8][1];
 units[8] = "47";
 comments[8] = "Id Pregunta: 784. SS-A 2004";


//  Id pregunta: 939 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Qu&eacute; se entiende por autoridad de certificaci&oacute;n?:";
 choices[9]= new Array();
 choices[9][0] = "Un juez";
 choices[9][1] = "Una compa&ntilde;&iacute;a que certifica la seguridad de sus sistemas En la actualidad s&oacute;lo puede considerarse a Microsoft como tal,";
 choices[9][2] = "Son &oacute;rganos administrativos dependientes del Consejo Superior de Inform&aacute;tica que dictan las normas de certificaci&oacute;n digital, de acuerdo a las Directivas de la Uni&oacute;n Europea";
 choices[9][3] = "Son entidades que expiden certificados digitales de manera que garantizan la correspondencia entre la identidad de un usuario y su par de claves";
 answers[9] = choices[9][3];
 units[9] = "74";
 comments[9] = "Id Pregunta: 939. NULL";


//  Id pregunta: 957 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  Con las siglas SCSI se identifica:";
 choices[10]= new Array();
 choices[10][0] = "Un est&aacute;ndar de facto para la interconexi&oacute;n entre distintas capas de OSI";
 choices[10][1] = "Un est&aacute;ndar para la comunicaci&oacute;n entre el ordenador y los perif&eacute;ricos a &eacute;l conectados";
 choices[10][2] = "Una arquitectura de ordenadores";
 choices[10][3] = "Una tarjeta de video";
 answers[10] = choices[10][1];
 units[10] = "47";
 comments[10] = "Id Pregunta: 957. ";


//  Id pregunta: 1048 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  El protocolo MESI:";
 choices[11]= new Array();
 choices[11][0] = "Es utilizado para el inicio de sesi&oacute;n en redes GSM";
 choices[11][1] = "Permite el establecimiento de conexiones entre iguales &quot;peer to peer&quot; sobre redes IP";
 choices[11][2] = "Controla las colisiones en redes Token Ring";
 choices[11][3] = "Controla la coherencia cache en algunos procesadores";
 answers[11] = choices[11][3];
 units[11] = "47";
 comments[11] = "Id Pregunta: 1048. ";


//  Id pregunta: 1193 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Indique la afirmaci&oacute;n falsa, relativa a la arquitectura cliente/servidor:";
 choices[12]= new Array();
 choices[12][0] = "El di&aacute;logo entre cliente y servidor se inicia a requerimiento del servidor";
 choices[12][1] = "El servidor es el equipo que se encarga de suministrar servicios, como consultas a la base de datos, y el cliente es el equipo que muestra y formatea los datos";
 choices[12][2] = "Durante el desarrollo de las aplicaciones que siguen esta estructura, a veces hay que decidir que partes de la aplicaci&oacute;n se ejecutan en el servidor y cu&aacute;les en el cliente";
 choices[12][3] = "Las aplicaciones que se ejecutan en entorno Web siguen esta arquitectura";
 answers[12] = choices[12][0];
 units[12] = "50";
 comments[12] = "Id Pregunta: 1193. ";


//  Id pregunta: 1441 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Con AGP se pretende:";
 choices[13]= new Array();
 choices[13][0] = "Crear un interfaz dedicado entre el sistema de v&iacute;deo y el procesador";
 choices[13][1] = "Crear un interfaz dedicado entre el sistema de v&iacute;deo y el disco duro";
 choices[13][2] = "Aislar el subsistema de v&iacute;deo de la arquitectura ISA";
 choices[13][3] = "Separar los subsistemas de audio y v&iacute;deo del bus principal";
 answers[13] = choices[13][0];
 units[13] = "48";
 comments[13] = "Id Pregunta: 1441. ";


//  Id pregunta: 1552 AÃ±o de creación de pregunta: 2003-01-01
 questions[14]= "15)  &iquest;C&uacute;al de las siguientes afirmaciones sobre OLAP es falsa?";
 choices[14]= new Array();
 choices[14][0] = "Pueden presentar vistas de un n&uacute;mero reducido de dimensiones elegido por el usuario.";
 choices[14][1] = "Son capaces de analizar tendencias a lo largo de per&iacute;odos de tiempo.";
 choices[14][2] = "Permiten ahondar en la jerarqu&iacute;a de los datos para acceder a los de m&aacute;s bajo nivel.";
 choices[14][3] = "No pueden existir bases de datos OLAP relacionales.";
 answers[14] = choices[14][3];
 units[14] = "68";
 comments[14] = "Id Pregunta: 1552. ";


//  Id pregunta: 1617 AÃ±o de creación de pregunta: 2003-01-01
 questions[15]= "16)  Los thin clients son:";
 choices[15]= new Array();
 choices[15][0] = "Ordenadores sin disco duro que acceden a las aplicaciones a trav&eacute;s de un servidor.";
 choices[15][1] = "CD arrancable con una colecci&oacute;n de programas GNU/ LINUX.";
 choices[15][2] = "Una plataforma e-learning desarrollada por la universidad de Lovaina.";
 choices[15][3] = "Colecci&oacute;n de utilidades que permiten llevar a cabo un proceso de votaci&oacute;n electr&oacute;nica.";
 answers[15] = choices[15][0];
 units[15] = "50";
 comments[15] = "Id Pregunta: 1617. Junta Andaluc&iacute;a";


//  Id pregunta: 1889 AÃ±o de creación de pregunta: 2006-01-01
 questions[16]= "17)  Se&ntilde;ale la afirmaci&oacute;n verdadera:";
 choices[16]= new Array();
 choices[16][0] = "El esquema de copias de seguridad &quot;abuelo-padre-hijo&quot; requiere almacenar un m&aacute;ximo de 23 copias.";
 choices[16][1] = "RAID-5 tiene un buen rendimiento de lectura y escritura.";
 choices[16][2] = "Para vol&uacute;menes reflejados se requiere un m&iacute;nimo de 3 discos duros.";
 choices[16][3] = "Todas son correctas";
 answers[16] = choices[16][0];
 units[16] = "97";
 comments[16] = "Id Pregunta: 1889. NULL";


//  Id pregunta: 2004 AÃ±o de creación de pregunta: 2004-01-01
 questions[17]= "18)  Si una entidad reconocida como independiente, muestra la conformidad de una empresa, producto... con los requisitos definidos en normas o especificaciones t&eacute;cnicas, se denomina:";
 choices[17]= new Array();
 choices[17][0] = "Normalizaci&oacute;n";
 choices[17][1] = "Certificaci&oacute;n";
 choices[17][2] = "ISO 9001";
 choices[17][3] = "Acuerdo de nivel de servicio";
 answers[17] = choices[17][1];
 units[17] = "87";
 comments[17] = "Id Pregunta: 2004. NULL";


//  Id pregunta: 2108 AÃ±o de creación de pregunta: 2004-01-01
 questions[18]= "19)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas/pr&aacute;cticas se utilizar&aacute;n en todas las actividades del proceso de Mantenimiento de sistemas de informaci&oacute;n siguiendo METRICA V3?";
 choices[18]= new Array();
 choices[18][0] = "An&aacute;lisis de impacto";
 choices[18][1] = "Catalogaci&oacute;n";
 choices[18][2] = "Planificaci&oacute;n ";
 choices[18][3] = "Pruebas de regresi&oacute;n";
 answers[18] = choices[18][1];
 units[18] = "86";
 comments[18] = "Id Pregunta: 2108. Pregunta Junta Andalucia - A";


//  Id pregunta: 2176 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  La diferencia entre ciclo de vida y metodolog&iacute;a  es que &hellip;:";
 choices[19]= new Array();
 choices[19][0] = "El ciclo de vida indica el qu&eacute;, mientras que la metodolog&iacute;a indica el cu&aacute;ndo";
 choices[19][1] = "El ciclo de vida indica el cu&aacute;ndo, mientras que la metodolog&iacute;a indica el c&oacute;mo";
 choices[19][2] = "El ciclo de vida indica el qu&eacute;, mientras que la metodolog&iacute;a indica el c&oacute;mo";
 choices[19][3] = "El ciclo de vida indica el modo, mientras que la metodolog&iacute;a indica el qu&eacute;";
 answers[19] = choices[19][2];
 units[19] = "76";
 comments[19] = "Id Pregunta: 2176. ";


//  Id pregunta: 2240 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  CODE-AND-FIX:";
 choices[20]= new Array();
 choices[20][0] = "Es un m&eacute;todo de an&aacute;lisis";
 choices[20][1] = "Es un m&eacute;todo de dise&ntilde;o";
 choices[20][2] = "Es una forma de resolver los errores originados por otros programadores";
 choices[20][3] = "Ninguna de las anteriores";
 answers[20] = choices[20][3];
 units[20] = "76";
 comments[20] = "Id Pregunta: 2240. ";


//  Id pregunta: 2372 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  Es falso decir que EDIM utiliza entre otras t&eacute;cnicas:";
 choices[21]= new Array();
 choices[21][0] = "METRICA";
 choices[21][1] = "COCOMO";
 choices[21][2] = "Function Point Analysis";
 choices[21][3] = "Early Specification ForMethod";
 answers[21] = choices[21][0];
 units[21] = "89";
 comments[21] = "Id Pregunta: 2372. NULL";


//  Id pregunta: 2522 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  &iquest;Cu&aacute;l de los siguientes t&eacute;rminos no se asocia con una forma de codificar im&aacute;genes digitales?:";
 choices[22]= new Array();
 choices[22][0] = "Raster";
 choices[22][1] = "Vectorial";
 choices[22][2] = "Bitmap";
 choices[22][3] = "Multiplex";
 answers[22] = choices[22][3];
 units[22] = "93";
 comments[22] = "Id Pregunta: 2522. NULL";


//  Id pregunta: 2554 AÃ±o de creación de pregunta: 2004-01-01
 questions[23]= "24)  Se&ntilde;ale la afirmaci&oacute;n correcta entre las siguientes:";
 choices[23]= new Array();
 choices[23][0] = "M&aacute;s del 30% de los grandes proyectos inform&aacute;ticos alcanzan resultados satisfactorios";
 choices[23][1] = "Est&aacute;ndares como CMM, CMMI, SPICE y otros, son f&aacute;ciles de aplicar en la mayor&iacute;a de los proyectos inform&aacute;ticos";
 choices[23][2] = "Expertos de la OCDE vienen advirtiendo sobre las amenazas que para la implantaci&oacute;n de la administraci&oacute;n electronica suponen los reiterados fracasos de las administraciones en los grandes proyectos inform&aacute;ticos que vienen abordando.";
 choices[23][3] = "Los m&eacute;todos de programaci&oacute;n &aacute;giles han demostrado sobradamente su eficiencia para proyectos no triviales.";
 answers[23] = choices[23][2];
 units[23] = "87,88,92";
 comments[23] = "Id Pregunta: 2554. Pregunta Junta Andalucia - A";


//  Id pregunta: 2673 AÃ±o de creación de pregunta: 2003-01-01
 questions[24]= "25)  En los Sistemas de Recuperaci&oacute;n de Informaci&oacute;n la l&oacute;gica borrosa permite:";
 choices[24]= new Array();
 choices[24][0] = "Indexar parcialmente un documento mediante dos o m&aacute;s t&eacute;rminos.";
 choices[24][1] = "Clasificar los textos con arreglo a su relevancia estimada.";
 choices[24][2] = "T&eacute;cnicas de muestreo de la cuantificaci&oacute;n del grado de relevancia de las claves.";
 choices[24][3] = "Generar varias claves sin tener en cuenta el Tesauro.";
 answers[24] = choices[24][1];
 units[24] = "96";
 comments[24] = "Id Pregunta: 2673. NULL";


//  Id pregunta: 2793 AÃ±o de creación de pregunta: 2006-01-01
 questions[25]= "26)  En la planificaci&oacute;n de SI, qu&eacute; producto de los siguientes no est&aacute; contemplado en M&eacute;trica V3";
 choices[25]= new Array();
 choices[25][0] = "Plan de proyectos";
 choices[25][1] = "Modelo de informaci&oacute;n";
 choices[25][2] = "Modelo de Sistemas de informaci&oacute;n";
 choices[25][3] = "Modelo de arquitectura";
 answers[25] = choices[25][3];
 units[25] = "86";
 comments[25] = "Id Pregunta: 2793. NULL";


//  Id pregunta: 2847 AÃ±o de creación de pregunta: 2006-01-01
 questions[26]= "27)  &iquest;El m&eacute;todo de interpolaci&oacute;n por el vecino m&aacute;s pr&oacute;ximo se emplea en?";
 choices[26]= new Array();
 choices[26][0] = "la correcci&oacute;n geom&eacute;trica";
 choices[26][1] = "la correcci&oacute;n radiom&eacute;trica";
 choices[26][2] = "el realce geom&eacute;trico";
 choices[26][3] = "el realce radiom&eacute;trico";
 answers[26] = choices[26][0];
 units[26] = "93";
 comments[26] = "Id Pregunta: 2847. NULL";


//  Id pregunta: 2922 AÃ±o de creación de pregunta: 2004-01-01
 questions[27]= "28)  &iquest;Cu&aacute;l es el est&aacute;ndar de WLAN que permite transmitir a una velocidad efectiva de entre 12 y 24 Mbps y a una velocidad m&aacute;xima de 54 Mbps?";
 choices[27]= new Array();
 choices[27][0] = "IEEE 802.11a";
 choices[27][1] = "IEEE 802.11b";
 choices[27][2] = "IEEE 802.11g";
 choices[27][3] = "IEEE 802.11i";
 answers[27] = choices[27][2];
 units[27] = "101, 107";
 comments[27] = "Id Pregunta: 2922. Similar a examen TIC SS A 2003";


//  Id pregunta: 3201 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  El acceso primario de la Red Digital de Servicios Integrados (en las normas europeas) est&aacute; constituido por:";
 choices[28]= new Array();
 choices[28][0] = "Un enlace con 30 canales B y un canal D utilizando una velocidad de transmisi&oacute;n de 2048 Kbps";
 choices[28][1] = "Un enlace con 30 canales D y un canal B utilizando una velocidad de transmisi&oacute;n de 2048 Kbps";
 choices[28][2] = "Un enlace con 30 canales B y un canal D utilizando una velocidad de transmisi&oacute;n de 1984 Kbps";
 choices[28][3] = "Un enlace con 30 canales D y un canal B utilizando una velocidad de transmisi&oacute;n de 1984 Kbps";
 answers[28] = choices[28][0];
 units[28] = "103";
 comments[28] = "Id Pregunta: 3201. ";


//  Id pregunta: 3436 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  El primer paso para establecer conexiones sobre un enlace PPP conlleva:";
 choices[29]= new Array();
 choices[29][0] = "El nodo iniciador PPP env&iacute;a un mensaje de inicio de sesi&oacute;n a su vecino PPP m&aacute;s cercano";
 choices[29][1] = "Antes de la activaci&oacute;n del enlace PPP, los routers a lo largo del path negocian las facilidades de autentificaci&oacute;n";
 choices[29][2] = "Los nodos PPP se anuncian para obtenci&oacute;n din&aacute;mica de direcci&oacute;n o preguntan a los servidores para uqe se les asigne una direcci&oacute;n";
 choices[29][3] = "El nodo iniciador envia tramas LCP (Link Control Protocol) para configurar el enlace de datos";
 answers[29] = choices[29][3];
 units[29] = "101";
 comments[29] = "Id Pregunta: 3436. ";


//  Id pregunta: 3639 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  La reserva de cualquier frecuencia del dominio p&uacute;blico radioel&eacute;ctrico implica que: ";
 choices[30]= new Array();
 choices[30][0] = "No es onerosa para el sujeto obligado";
 choices[30][1] = "Est&aacute; fijada en el Ley General de Presupuestos";
 choices[30][2] = "Seguir&aacute; las leyes de mercado y estimacion de su rentabilidad";
 choices[30][3] = "Las Administraciones P&uacute;blicas no estan exentas de su pago";
 answers[30] = choices[30][2];
 units[30] = "110";
 comments[30] = "Id Pregunta: 3639. ";


//  Id pregunta: 3657 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  Un BALUN:";
 choices[31]= new Array();
 choices[31][0] = "Es un adaptador de impedancias entre sistema asim&eacute;trico y sistema sim&eacute;trico.";
 choices[31][1] = "Adapta un conector RJ45 y BNC.";
 choices[31][2] = "Es un conector entre RJ11 y RJ45.";
 choices[31][3] = "S&oacute;lo se utiliza para fibra &oacute;ptica.";
 answers[31] = choices[31][0];
 units[31] = "99";
 comments[31] = "Id Pregunta: 3657. *: BALUN";


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


//  Id pregunta: 3889 AÃ±o de creación de pregunta: 2003-01-01
 questions[33]= "34)  En cuanto a los Servicios Web, no se puede decir que:";
 choices[33]= new Array();
 choices[33][0] = "Es independiente del lenguaje de programaci&oacute;n";
 choices[33][1] = "Es independiente de la plataforma";
 choices[33][2] = "Es independiente del lenguaje de programaci&oacute;n y de la plataforma";
 choices[33][3] = "Sus est&aacute;ndares son m&aacute;s complejos que los usados en CORBA";
 answers[33] = choices[33][3];
 units[33] = "51";
 comments[33] = "Id Pregunta: 3889. Nuevo tema. Arquitectura SOA";


//  Id pregunta: 4055 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  Un mensaje se puede cifrar";
 choices[34]= new Array();
 choices[34][0] = "Mediante mecanismos de cifrado sim&eacute;trico y asim&eacute;trico";
 choices[34][1] = "S&oacute;lo mediante mecanismos de cifrado sim&eacute;trico como DES";
 choices[34][2] = "S&oacute;lo mediante mecanismos de cifrado asim&eacute;trico como RSA";
 choices[34][3] = "Se puede cifrar con mecanismos de cifrado sim&eacute;trico, aunque por velocidad es preferible cifrar con criptograf&iacute;a de clave asim&eacute;trica";
 answers[34] = choices[34][0];
 units[34] = "111";
 comments[34] = "Id Pregunta: 4055. NULL";


//  Id pregunta: 4205 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  MPLS";
 choices[35]= new Array();
 choices[35][0] = "Da soporte al desarrollo de Redes Privadas Virtuales (VPNs) extremo a extremo";
 choices[35][1] = "Se configura internamente en la red de un operador de telecomunicaciones (ISP)";
 choices[35][2] = "Dadas sus capacidades de calidad de servicio (QoS) es recomendado en redes LAN empresariales";
 choices[35][3] = "todas las anteriores";
 answers[35] = choices[35][1];
 units[35] = "109";
 comments[35] = "Id Pregunta: 4205. ";


//  Id pregunta: 4235 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  En el sistema de transmisi&oacute;n de datos Modo de Transferencia As&iacute;ncrono (ATM), las c&eacute;lulas ATM son paquetes de datos";
 choices[36]= new Array();
 choices[36][0] = "De longitud variable seg&uacute;n sea el medio de transmisi&oacute;n";
 choices[36][1] = "De 5 bytes";
 choices[36][2] = "De 48 bytes";
 choices[36][3] = "De 53 bytes";
 answers[36] = choices[36][3];
 units[36] = "109";
 comments[36] = "Id Pregunta: 4235. ";


//  Id pregunta: 4289 AÃ±o de creación de pregunta: 2007-01-01
 questions[37]= "38)  Si tiene que desarrollar un procesador de textos siguiendo un modelo de ciclo de vida incremental, &iquest;qu&eacute; funcionalidad abordar&iacute;a primero?";
 choices[37]= new Array();
 choices[37][0] = "Las funciones de edici&oacute;n m&aacute;s sofisticadas.";
 choices[37][1] = "La gesti&oacute;n b&aacute;sica de archivos y producci&oacute;n de documentos.";
 choices[37][2] = "La m&aacute;s sencilla, para ir de menor a mayor complejidad.";
 choices[37][3] = "La funcionalidad m&aacute;s independiente del usuario, como por ejemplo, la correcci&oacute;n ortogr&aacute;fica y gramatical";
 answers[37] = choices[37][1];
 units[37] = "76";
 comments[37] = "Id Pregunta: 4289. ";


//  Id pregunta: 4328 AÃ±o de creación de pregunta: 2007-01-01
 questions[38]= "39)  &iquest;Cu&aacute;l de los siguientes no es un elemento relativo a las pruebas del plan de continuidad de una instalaci&oacute;n inform&aacute;tica?";
 choices[38]= new Array();
 choices[38][0] = "Evaluaci&oacute;n del personal involucrado en el ejercicio.";
 choices[38][1] = "Evaluaci&oacute;n de la coordinaci&oacute;n entre el equipo del plan y los proveedores externos.";
 choices[38][2] = "Evaluaci&oacute;n de la capacidad de recuperaci&oacute;n de procesos y datos vitales.";
 choices[38][3] = "Evaluaci&oacute;n de la posibilidad de establecer un acuerdo rec&iacute;proco de respaldo.";
 answers[38] = choices[38][3];
 units[38] = "";
 comments[38] = "Id Pregunta: 4328. ";


//  Id pregunta: 4352 AÃ±o de creación de pregunta: 2007-01-01
 questions[39]= "40)  El dispositivo necesario para tener acceso a Internet a trav&eacute;s de la red de cable-TV que ofrecen distintos operadores, se llama:";
 choices[39]= new Array();
 choices[39][0] = "CODEC.";
 choices[39][1] = "Router.";
 choices[39][2] = "MODEM cable.";
 choices[39][3] = "Splitter.";
 answers[39] = choices[39][2];
 units[39] = "105";
 comments[39] = "Id Pregunta: 4352. ";


//  Id pregunta: 4876 AÃ±o de creación de pregunta: 2007-01-01
 questions[40]= "41)  En el modelo de procesos de Reingenier&iacute;a del Software propuesto por Pressman, la actividad de modificaci&oacute;n del c&oacute;digo fuente de un m&oacute;dulo con la finalidad de adecuarlo para futuros cambios, recibe la denominaci&oacute;n de:";
 choices[40]= new Array();
 choices[40][0] = "Ingenier&iacute;a inversa de procesos.";
 choices[40][1] = "Reestructuraci&oacute;n del software.";
 choices[40][2] = "Ingenier&iacute;a de la integraci&oacute;n de m&oacute;dulos.";
 choices[40][3] = "Ingenier&iacute;a avanzada.";
 answers[40] = choices[40][1];
 units[40] = "91";
 comments[40] = "Id Pregunta: 4876. examen TIC 2006";


//  Id pregunta: 4878 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  El protocolo de escritura anticipada en el fichero diario (fichero log) de una base de datos establece que:";
 choices[41]= new Array();
 choices[41][0] = "La escritura de un elemento de datos deber&iacute;a hacerse antes de cualquier operaci&oacute;n en el diario";
 choices[41][1] = "El registro del diario de una operaci&oacute;n deber&iacute;a escribirse antes de que se escriban los datos reales";
 choices[41][2] = "Todos los registros del diario deber&iacute;an escribirse antes de que comenzara a ejecutarse una nuevatransacci&oacute;n";
 choices[41][3] = "El diario nunca necesita escribirse en disco";
 answers[41] = choices[41][1];
 units[41] = "97";
 comments[41] = "Id Pregunta: 4878. NULL";


//  Id pregunta: 5136 AÃ±o de creación de pregunta: 2003-01-01
 questions[42]= "43)  &iquest;En qu&eacute; modelo de ciclo de vida cada ciclo comienza identificando los objetivos, las alternativas y las restricciones del ciclo?";
 choices[42]= new Array();
 choices[42][0] = "Modelo incremental.";
 choices[42][1] = "Modelo en espiral.";
 choices[42][2] = "Modelo en cascada.";
 choices[42][3] = "Modelo fuente.";
 answers[42] = choices[42][1];
 units[42] = "76";
 comments[42] = "Id Pregunta: 5136. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5258 AÃ±o de creación de pregunta: 2003-01-01
 questions[43]= "44)  En relaci&oacute;n a Cocomo II:";
 choices[43]= new Array();
 choices[43][0] = "Surge en 1997 para solventar las limitaciones de Cocomo.";
 choices[43][1] = "Propone 3 modelos: Composici&oacute;n de la Aplicaci&oacute;n, Dise&ntilde;o previo y post-arquitectura.";
 choices[43][2] = "El modelo de Composici&oacute;n de la aplicaci&oacute;n se basa en l&iacute;neas de c&oacute;digo.";
 choices[43][3] = "Todas son correctas.";
 answers[43] = choices[43][0];
 units[43] = "88";
 comments[43] = "Id Pregunta: 5258. NULL";


//  Id pregunta: 5261 AÃ±o de creación de pregunta: 2003-01-01
 questions[44]= "45)  El Plan General de Garant&iacute;a de Calidad (PGGC) considera que los tipos de riesgos potenciales de un proyecto son:";
 choices[44]= new Array();
 choices[44][0] = "7";
 choices[44][1] = "5";
 choices[44][2] = "No considera ning&uacute;n tipo de riesgo potencial";
 choices[44][3] = "Depende del proyecto a considerar";
 answers[44] = choices[44][0];
 units[44] = "88";
 comments[44] = "Id Pregunta: 5261. NULL";


//  Id pregunta: 5527 AÃ±o de creación de pregunta: 2003-01-01
 questions[45]= "46)  En el reconocimiento &oacute;ptico de caracteres, la tasa de aciertos es";
 choices[45]= new Array();
 choices[45][0] = "El porcentaje de caracteres que se han reconocido incorrectamente del total de caracteres reconocidos";
 choices[45][1] = "La cantidad de espacio que hay entre dos letras";
 choices[45][2] = "La medida de la cantidad de espacio que hay entre dos l&iacute;neas";
 choices[45][3] = "El porcentaje de caracteres acertados del total de caracteres reconocidos";
 answers[45] = choices[45][3];
 units[45] = "94";
 comments[45] = "Id Pregunta: 5527. ";


//  Id pregunta: 5564 AÃ±o de creación de pregunta: 2003-01-01
 questions[46]= "47)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto al Resilient Packet Ring?";
 choices[46]= new Array();
 choices[46][0] = "Es una tecnolog&iacute;a de nivel 2";
 choices[46][1] = "Es el est&aacute;ndar 802.17";
 choices[46][2] = "Est&aacute; basado en una topolog&iacute;a de anillo dual";
 choices[46][3] = "Est&aacute; orientada a servicios s&iacute;ncronos";
 answers[46] = choices[46][3];
 units[46] = "101";
 comments[46] = "Id Pregunta: 5564. ";


//  Id pregunta: 5674 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  Indique la respuesta no correcta respecto a GIS modelo de datos r&aacute;ster.";
 choices[47]= new Array();
 choices[47][0] = "En el modelo de datos r&aacute;ster, la regi&oacute;n a modelizar se considera dividida seg&uacute;n una matriz o malla rectangular de celdas (p&iacute;xeles) de id&eacute;ntico tama&ntilde;o y de formageneralmente cuadrada.";
 choices[47][1] = "Como cr&iacute;ticas al modelo deben se&ntilde;alarse la carencia de informaci&oacute;n topol&oacute;gica acerca de las relaciones espaciales entre las entidades.";
 choices[47][2] = "En el modelo de datos r&aacute;ster permite una representaci&oacute;n expl&iacute;cita de entidades f&iacute;sicas del mundo real.";
 choices[47][3] = "Ofrece escasa eficiencia de cara a la representaci&oacute;n de la variabilidad espacial, al estar basado en una frecuencia de muestreo constante.";
 answers[47] = choices[47][2];
 units[47] = "67";
 comments[47] = "Id Pregunta: 5674. NULL";


//  Id pregunta: 5676 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  Indique la respuesta incorrecta en relaci&oacute;n a Sistemas de Informaci&oacute;n Geogr&aacute;ficos:";
 choices[48]= new Array();
 choices[48][0] = "El t&eacute;rmino Clearinghouse se refiere al conjunto de datos marco utilizado en el Proyecto Dublin Core.";
 choices[48][1] = "El est&aacute;ndar m&aacute;s extendido para la implementaci&oacute;n de servicios de cat&aacute;logo es el ISO 23950.";
 choices[48][2] = "ISO 19110 se ocupa de la metodolog&iacute;a de catalogaci&oacute;n de objetos geogr&aacute;ficos.";
 choices[48][3] = "ISO ha producido el ISO 19115 Metadatos.";
 answers[48] = choices[48][0];
 units[48] = "67";
 comments[48] = "Id Pregunta: 5676. NULL";


//  Id pregunta: 5896 AÃ±o de creación de pregunta: 2009-01-01
 questions[49]= "50)  &iquest;Qu&eacute; tecnolog&iacute;as podemos utilizar, entre otras, para evitar utilizar c&oacute;digo Java en las p&aacute;ginas JSP?";
 choices[49]= new Array();
 choices[49][0] = "JSTL y EL";
 choices[49][1] = "Scriptlets";
 choices[49][2] = "JavaScript";
 choices[49][3] = "No es posible hacer tal cosa; toda p&aacute;gina JSP debe contener algo de c&oacute;digo Java";
 answers[49] = choices[49][0];
 units[49] = "116";
 comments[49] = "Id Pregunta: 5896. ";


//  Id pregunta: 5919 AÃ±o de creación de pregunta: 2009-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes paquetes software se usa para construir grids?:";
 choices[50]= new Array();
 choices[50][0] = "Globus Toolkit";
 choices[50][1] = "Grid Squema Toolkit";
 choices[50][2] = "EYEE Toolkit";
 choices[50][3] = "WS-DAI";
 answers[50] = choices[50][0];
 units[50] = "45";
 comments[50] = "Id Pregunta: 5919. MAP 2008 A1";


//  Id pregunta: 5986 AÃ±o de creación de pregunta: 2010-01-01
 questions[51]= "52)  Las arquitecturas orientadas a servicios est&aacute;n basadas en una serie de principios b&aacute;sicos, uno de los cu&aacute;les es:";
 choices[51]= new Array();
 choices[51][0] = "Los servicios usan una arquitectura &quot;hub-in-spoke&quot;";
 choices[51][1] = "Se integran en sistemas SGDBR";
 choices[51][2] = "Los cambios en la implementaci&oacute;n afectan a los consumidores del servicio";
 choices[51][3] = "Deben estar accesibles y deben poder ser localizados para su consumo";
 answers[51] = choices[51][3];
 units[51] = "51";
 comments[51] = "Id Pregunta: 5986. TIC A 2009";


//  Id pregunta: 6099 AÃ±o de creación de pregunta: 2010-01-01
 questions[52]= "53)  El teorema de Nyquist establece que el n&uacute;mero m&aacute;ximo de baudios que puede transmitirse por un canal:";
 choices[52]= new Array();
 choices[52][0] = "Puede ser superior al doble de su ancho de banda.";
 choices[52][1] = "No puede ser superior al doble de su ancho de banda.";
 choices[52][2] = "No tiene l&iacute;mite alguno.";
 choices[52][3] = "No puede ser superior al ancho de banda.";
 answers[52] = choices[52][1];
 units[52] = "99";
 comments[52] = "Id Pregunta: 6099. TIC A 2009";


//  Id pregunta: 6392 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)  &iquest;Cu&aacute;l de los siguientes contenidos deben contener obligatoriamente los certificados electr&oacute;nicos de sede electr&oacute;nica de la AGE y de sus organismos p&uacute;blicos vinculados o dependientes, de acuerdo al RD 1671/2009?";
 choices[53]= new Array();
 choices[53][0] = "Descripci&oacute;n de la sede electr&oacute;nica.";
 choices[53][1] = "Unidad administrativa suscriptora del certificado.";
 choices[53][2] = "Fechas de validez del certificado.";
 choices[53][3] = "Ninguna de las anteriores.";
 answers[53] = choices[53][1];
 units[53] = "43";
 comments[53] = "Id Pregunta: 6392. Art&iacute;culo 18 RD 1671/2009";


//  Id pregunta: 6448 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  En un sistema de almacenamiento en RAID 5:";
 choices[54]= new Array();
 choices[54][0] = "Se guardan dos paridades para cada bloque de informaci&oacute;n, cada una de ellas alojada en un disco diferente";
 choices[54][1] = "Se asigna un bloque de paridad por cada bloque de informaci&oacute;n, asignando un bloque alternativo de cada disco para almacenar esa paridad";
 choices[54][2] = "Se usa una divisi&oacute;n de datos a nivel de bloques con un disco de paridad dedicado";
 choices[54][3] = "Los datos se dividen a nivel de bits, en lugar de a nivel de bloques";
 answers[54] = choices[54][1];
 units[54] = "48";
 comments[54] = "Id Pregunta: 6448. Castilla La Mancha 2009";


//  Id pregunta: 6499 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  GPL es el acr&oacute;nimo de:";
 choices[55]= new Array();
 choices[55][0] = "GNU Public License";
 choices[55][1] = "Geek Public License";
 choices[55][2] = "General Propietary License";
 choices[55][3] = "General Public License";
 answers[55] = choices[55][3];
 units[55] = "61";
 comments[55] = "Id Pregunta: 6499. ";


//  Id pregunta: 6555 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  PKCS#10 define ";
 choices[56]= new Array();
 choices[56][0] = "Especifica un formato portable para almacenar o transportar las claves privadas de un usuario";
 choices[56][1] = "Sintaxis para las peticiones de certificados";
 choices[56][2] = "El formato del sobre digital";
 choices[56][3] = "La especificaci&oacute;n de un interfaz de acceso a dispositivos que almacenan informaci&oacute;n";
 answers[56] = choices[56][1];
 units[56] = "74";
 comments[56] = "Id Pregunta: 6555. NULL";


//  Id pregunta: 6557 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  Una Autoridad de Validaci&oacute;n (VA) puede realizar distintos tipos de servicios de validaci&oacute;n:";
 choices[57]= new Array();
 choices[57][0] = "Descarga de CRLs";
 choices[57][1] = "Via OCSP";
 choices[57][2] = "A y B son correctas";
 choices[57][3] = "A y B son incorrectas";
 answers[57] = choices[57][2];
 units[57] = "74";
 comments[57] = "Id Pregunta: 6557. NULL";


//  Id pregunta: 7166 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  En Oracle, un tablespace es:";
 choices[58]= new Array();
 choices[58][0] = "El espacio que ocupa un fichero en donde reside un &iacute;ndice";
 choices[58][1] = "El espacio f&iacute;sico de almacenamiento de datos";
 choices[58][2] = "El espacio que ocupa un fichero en donde reside una tabla";
 choices[58][3] = "El espacio l&oacute;gico de almacenamiento de datos";
 answers[58] = choices[58][3];
 units[58] = "58";
 comments[58] = "Id Pregunta: 7166. Examen TIC B 2009";


//  Id pregunta: 7171 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  Se&ntilde;ale la respuesta correcta en relaci&oacute;n al Almac&eacute;n de Datos (Data Warehouse):";
 choices[59]= new Array();
 choices[59][0] = "La estructura l&oacute;gica est&aacute; compuesta por los niveles centralizado, organizado en torno a temas e integrado.";
 choices[59][1] = "La estructura f&iacute;sica est&aacute; compuesta por los niveles de metadatos, datos detallados actuales y datos detallados hist&oacute;ricos.";
 choices[59][2] = "El almac&eacute;n de datos no es vol&aacute;til, no se pueden modificar datos almacenados, solamente se permite la consulta y la carga de nuevos datos.";
 choices[59][3] = "Entre los criterios m&aacute;s importantes a considerar para elegir el SGBD que gestionar&aacute; el almac&eacute;n, est&aacute; el esfuerzo necesario para determinar el estado de los datos disponibles en los sistemas OLTP de la organizaci&oacute;n.";
 answers[59] = choices[59][2];
 units[59] = "68";
 comments[59] = "Id Pregunta: 7171. Examen TIC B 2009";


//  Id pregunta: 7270 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  Los cortafuegos de filtrado de paquetes:";
 choices[60]= new Array();
 choices[60][0] = "Funcionan a nivel de red";
 choices[60][1] = "Funcionan a a nivel de aplicaci&oacute;n";
 choices[60][2] = "Funcionan a nivel de enlace";
 choices[60][3] = "Funcionan a nivel de sesi&oacute;n";
 answers[60] = choices[60][0];
 units[60] = "111";
 comments[60] = "Id Pregunta: 7270. Examen TIC B 2009";


//  Id pregunta: 7855 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)   &iquest;Cu&aacute;l de los siguientes subcriterios no corresponde al criterio &laquo;Personas&raquo; en el modelo EFQM?";
 choices[61]= new Array();
 choices[61][0] = " Planificaci&oacute;n, gesti&oacute;n y mejora de los recursos humanos.";
 choices[61][1] = " Identificaci&oacute;n, desarrollo y mantenimiento del conocimiento y la capacidad de las personas de la organizaci&oacute;n.";
 choices[61][2] = " Existencia de un autoliderazgo en las personas de la organizaci&oacute;n.";
 choices[61][3] = " Recompensa, reconocimiento y atenci&oacute;n a las personas de la organizaci&oacute;n.";
 answers[61] = choices[61][2];
 units[61] = "NULL";
 comments[61] = "Id Pregunta: 7855. Map 2005";


//  Id pregunta: 7917 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)   &iquest;Cu&aacute;l de las siguientes afirmaciones en relaci&oacute;n a la firma digital es cierta?";
 choices[62]= new Array();
 choices[62][0] = " Ofrece plenas garant&iacute;as de la integridad, confidencialidad y no repudio del documento firmado.";
 choices[62][1] = " Se puede conseguir mediante protocolos de cifrado de clave secreta.";
 choices[62][2] = " El DSS (Digital Signature Standard) est&aacute; adoptado como una norma por ISO/IEC (International Standards Organization/International Electrotechnical Commission).";
 choices[62][3] = " La firma ciega (Blind signature) se obtiene firmando directamente el correspondiente mensaje, en vez del resumen de &eacute;ste.";
 answers[62] = choices[62][1];
 units[62] = "NULL";
 comments[62] = "Id Pregunta: 7917. Map 2006";


//  Id pregunta: 7975 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)   Indique cu&aacute;l de las siguientes afirmaciones es incorrecta en relaci&oacute;n con la m&aacute;quina virtual de Java:";
 choices[63]= new Array();
 choices[63][0] = " La implementaci&oacute;n de la m&aacute;quina virtual de Java es independiente de la plataforma sobre la que se ejecute.";
 choices[63][1] = " La principal ventaja que aporta es la portabilidad de las aplicaciones escritas en Java entre diferentes plataformas.";
 choices[63][2] = " Existen versiones de m&aacute;quina virtual implantadas por hardware.";
 choices[63][3] = " El c&oacute;digo que ejecuta la m&aacute;quina virtual se llama &laquo;Java Bytecode&raquo;.";
 answers[63] = choices[63][0];
 units[63] = "NULL";
 comments[63] = "Id Pregunta: 7975. Map 2007";


//  Id pregunta: 7993 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)   La norma ISO 17799 recoge:";
 choices[64]= new Array();
 choices[64][0] = " Buenas pr&aacute;ticas para la gesti&oacute;n de la seguridad de la informaci&oacute;n.";
 choices[64][1] = " La reglamentaci&oacute;n de interconexi&oacute;n segura de redes inal&aacute;mbricas (WIFI).";
 choices[64][2] = " Normativa aplicable para el desarrollo de aplicaciones militares.";
 choices[64][3] = " Est&aacute;ndares de desarrollo de aplicaciones de uso dual (civil y militar).";
 answers[64] = choices[64][0];
 units[64] = "NULL";
 comments[64] = "Id Pregunta: 7993. Map 2007";


//  Id pregunta: 8129 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)   De acuerdo con la Metodolog&iacute;a M&eacute;trica Versi&oacute;n 3, indique el concepto que NO es necesario tener en cuenta en el c&aacute;lculo del &laquo;Retorno de la Inversi&oacute;n&raquo;:";
 choices[65]= new Array();
 choices[65][0] = " Beneficio Neto Anual.";
 choices[65][1] = " Inversi&oacute;n Promedio.";
 choices[65][2] = " Coste desarrollo anualizado.";
 choices[65][3] = " Per&iacute;odo de Amortizaci&oacute;n.";
 answers[65] = choices[65][3];
 units[65] = "NULL";
 comments[65] = "Id Pregunta: 8129. Map 2008";


//  Id pregunta: 8130 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)   En referencia a la arquitectura .NET, seleccione cu&aacute;l de las expresiones siguientes es FALSA:";
 choices[66]= new Array();
 choices[66][0] = " Las versiones 1.0, 1.1 y 2.0. de .NET Framework son totalmente independientes unas de otras, por lo que se pueden instalar en cualquier orden.";
 choices[66][1] = " Cuando las versiones 1.0, 1.1 y 2.0 est&aacute;n en el mismo equipo, comparten un &uacute;nico Common Language Runtime.";
 choices[66][2] = " .NET Framework 3.5 ya est&aacute; disponible en la Web de Microsoft.";
 choices[66][3] = " Common Language Specification (CLS) es un conjunto de reglas pensado para promover la interoperabilidad entre los lenguajes.";
 answers[66] = choices[66][1];
 units[66] = "NULL";
 comments[66] = "Id Pregunta: 8130. Map 2008";


//  Id pregunta: 8156 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)   Determine cu&aacute;l de las afirmaciones siguientes NO se corresponde con una caracter&iacute;stica definitoria de la tecnolog&iacute;a ATM:";
 choices[67]= new Array();
 choices[67][0] = " Las redes ATM est&aacute;n orientadas a la conexi&oacute;n, requiriendo del establecimiento de un circuito virtual antes de la transferencia de informaci&oacute;n entre dos extremos.";
 choices[67][1] = " ATM es independiente del transporte f&iacute;sico, las celdas ATM pueden ser transportadas en redes SONET, SDH, T3/E3 o T1/E1.";
 choices[67][2] = " ATM puede utilizarse tanto como plataforma de interconexi&oacute;n de redes, como una red para proporcionar servicios de banda ancha.";
 choices[67][3] = " Las celdas son de longitud variable, con un m&aacute;ximo de 53 bytes, de los cuales 5 son de cabecera y los restantes son portadores de la informaci&oacute;n de usuario, gesti&oacute;n y se&ntilde;alizaci&oacute;n.";
 answers[67] = choices[67][3];
 units[67] = "NULL";
 comments[67] = "Id Pregunta: 8156. Map 2008";


//  Id pregunta: 8438 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  &iquest;Cu&aacute;l de los siguientes elementos no es obligatorio incluir en la disposici&oacute;n de creaci&oacute;n de un registro electr&oacute;nico seg&uacute;n el RD 1671/2009?";
 choices[68]= new Array();
 choices[68][0] = "&Oacute;rgano o unidad responsable de la gesti&oacute;n.";
 choices[68][1] = "Fecha y hora oficial y referencia al calendario de d&iacute;as inh&aacute;biles que sea aplicable.";
 choices[68][2] = "Medios de presentaci&oacute;n de documentaci&oacute;n complementaria a una comunicaci&oacute;n, escrito o solicitud previamente presentada en el registro electr&oacute;nico.";
 choices[68][3] = "Buzones de correo electr&oacute;nico corporativo y/o fax asignado a los empleados p&uacute;blicos o a las distintas unidades y &oacute;rganos.";
 answers[68] = choices[68][3];
 units[68] = "43";
 comments[68] = "Id Pregunta: 8438. ";


//  Id pregunta: 8485 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  Se est&aacute; planificando la configuraci&oacute;n de los equipos de un centro de tratamiento de la informaci&oacute;n, seg&uacute;n un Enfoque basado en el riesgo. De acuerdo con la metodolog&iacute;a MAGERIT, la tarea de valoraci&oacute;n de salvaguardias se encuadra en el proceso:";
 choices[69]= new Array();
 choices[69][0] = "Gesti&oacute;n de riesgos.";
 choices[69][1] = "An&aacute;lisis de salvaguardias.";
 choices[69][2] = "An&aacute;lisis de riesgos.";
 choices[69][3] = "Gesti&oacute;n de salvaguardias.";
 answers[69] = choices[69][2];
 units[69] = "33";
 comments[69] = "Id Pregunta: 8485. Examen TIC A2 2010 interna";


//  Id pregunta: 8511 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  De las siguientes normas, &iquest;cu&aacute;l est&aacute; referida al c&oacute;digo de buenas pr&aacute;cticas en gesti&oacute;n de la seguridad de la Informaci&oacute;n?";
 choices[70]= new Array();
 choices[70][0] = "ISO/lEC 13335-2.";
 choices[70][1] = "ISO/lEC 27002:2013.";
 choices[70][2] = "UNE 71502:2004.";
 choices[70][3] = "ISO 10646.";
 answers[70] = choices[70][1];
 units[70] = "111";
 comments[70] = "Id Pregunta: 8511. Examen TIC A2 2010";


//  Id pregunta: 8543 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  &iquest;Qu&eacute; codec de v&iacute;deo se utiliza en la TDT para los canales en alta definici&oacute;n (HD)?";
 choices[71]= new Array();
 choices[71][0] = "Huffyuv.";
 choices[71][1] = "MPEG-4";
 choices[71][2] = "MPEG-2";
 choices[71][3] = "Sorenson.";
 answers[71] = choices[71][1];
 units[71] = "105";
 comments[71] = "Id Pregunta: 8543. Examen TIC A2 2010 interna";


//  Id pregunta: 8882 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  La garant&iacute;a provisional";
 choices[72]= new Array();
 choices[72][0] = "Es potestativa para el &oacute;rgano de contrataci&oacute;n";
 choices[72][1] = "Con car&aacute;cter general se exige a los adjudicatarios de los contratos administrativos.";
 choices[72][2] = "El &oacute;rgano de contrataci&oacute;n podr&aacute; eximir al adjudicatario de la obligaci&oacute;n de constituir la garant&iacute;a&nbsp;provisional";
 choices[72][3] = "Su importe no podr&aacute; ser superior al 5% del presupuesto del contrato";
 answers[72] = choices[72][0];
 units[72] = "41";
 comments[72] = "Id Pregunta: 8882. ";


//  Id pregunta: 8987 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l de las siguientes no es una metodolog&iacute;a &aacute;gil?";
 choices[73]= new Array();
 choices[73][0] = "Scrum";
 choices[73][1] = "XP (eXtreme Programming)";
 choices[73][2] = "Getting Real";
 choices[73][3] = "Todas las anteriores";
 answers[73] = choices[73][3];
 units[73] = "79";
 comments[73] = "Id Pregunta: 8987. ";


//  Id pregunta: 8996 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  Las estaciones conectadas a una red de &aacute;rea local por medio de tarjetas de red de tipo Ethernet";
 choices[74]= new Array();
 choices[74][0] = "Acceden al medio de transmisi&oacute;n de forma aleatoria, por lo que pueden producirse colisiones.";
 choices[74][1] = "Acceden al medio de transmisi&oacute;n en per&iacute;odos de tiempo predeterminados, por lo que nunca se producen colisiones.";
 choices[74][2] = "Acceden al medio de transmisi&oacute;n en diferentes frecuencias de trabajo, por lo que pueden acceder varias simult&aacute;neamente sin que se produzcan colisiones.";
 choices[74][3] = "Nunca acceden si tras un primer intento se detect&oacute; una colisi&oacute;n.";
 answers[74] = choices[74][0];
 units[74] = "101";
 comments[74] = "Id Pregunta: 8996. Examen UPM A2 2011";


//  Id pregunta: 9049 AÃ±o de creación de pregunta: 2012-01-01
 questions[75]= "76)  La ley de contratos del sector p&uacute;blico establece entre sus herramientas un recurso especial de contrataci&oacute;n, se&ntilde;ale cual de la siguientes afirmaciones es FALSA.";
 choices[75]= new Array();
 choices[75][0] = "No se puede usar en casos de tramitaci&oacute;n de emergencia";
 choices[75][1] = "Es objeto de recurso,entre otros, las adjudicaciones realizadas por poderes adjudicadores.";
 choices[75][2] = "Los contratos de suministros no sujetos a regulaci&oacute;n armonizada pueden ser recurridos con este recurso especial. ";
 choices[75][3] = "El car&aacute;cter del recurso es potestativo, es decir, no es obligatorio interponerlo";
 answers[75] = choices[75][2];
 units[75] = "41";
 comments[75] = "Id Pregunta: 9049. Art. 40 RD Legislativo 3/2011";


//  Id pregunta: 9070 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  &iquest;Cu&aacute;ntas gu&iacute;as de accesibilidad del WAI existen actualmente (abril de 2013)?";
 choices[76]= new Array();
 choices[76][0] = "Tres: ATAG, WCAG y UUAG. ";
 choices[76][1] = "Seis: ATAG, WCAG, UAAG, XAG, FCAG y WAI-RIA. ";
 choices[76][2] = "Cuatro: ATAG, WCAG, UAAG y XAG. ";
 choices[76][3] = "Cinco: ATAG, WCAG, UAAG, XAG y WAI-RIA. ";
 answers[76] = choices[76][3];
 units[76] = "39";
 comments[76] = "Id Pregunta: 9070. ";


//  Id pregunta: 9175 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  Se&ntilde;ale la afirmaci&oacute;n CORRECTA respecto a la Ley 34/2002:";
 choices[77]= new Array();
 choices[77][0] = "Los operadores de redes y servicios de comunicaciones electr&oacute;nicas, los proveedores de acceso a redes de telecomunicaciones y los prestadores de servicios de alojamiento de datos deber&aacute;n retener los datos de conexi&oacute;n y tr&aacute;fico generados por las comunicaciones establecidas durante la prestaci&oacute;n de un servicio de la sociedad de la informaci&oacute;n por un per&iacute;odo m&aacute;ximo de doce meses.";
 choices[77][1] = "Los contratos celebrados por v&iacute;a electr&oacute;nica en los que intervenga como parte un consumidor se presumir&aacute;n celebrados en el lugar en que el prestador de servicios tenga establecido su domicilio fiscal.";
 choices[77][2] = "El Real Decreto-ley 13/2012 traspone al ordenamiento jur&iacute;dico espa&ntilde;ol la Directiva 2009/136/CE que modifica la anterior Directiva 2002/58/CE.";
 choices[77][3] = "Las comunicaciones comerciales y las ofertas promocionales se regir&aacute;n en todos sus t&eacute;rminos por la Ley 34/2002";
 answers[77] = choices[77][2];
 units[77] = "70";
 comments[77] = "Id Pregunta: 9175. ";


//  Id pregunta: 9252 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  &iquest;Cu&aacute;l es la relaci&oacute;n entre trabajos, procesos, hilos y fibras en Windows?";
 choices[78]= new Array();
 choices[78][0] = "Los trabajos contienen procesos.";
 choices[78][1] = "Los procesos contienen hilos.";
 choices[78][2] = "Los hilos contienen fibras.";
 choices[78][3] = "Todas son correctas.";
 answers[78] = choices[78][3];
 units[78] = "56";
 comments[78] = "Id Pregunta: 9252. ";


//  Id pregunta: 9357 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  &iquest;Qu&eacute; cable de fibra &oacute;ptica de los que se indican a continuaci&oacute;n tiene las caracter&iacute;sticas que lo identifican como un cable de fibra monomodo?";
 choices[79]= new Array();
 choices[79][0] = "Fibra 62.5/125 um";
 choices[79][1] = "Fibra 50/125 um";
 choices[79][2] = "Fibra 200/380 um ";
 choices[79][3] = "Fibra 10/125 um";
 answers[79] = choices[79][3];
 units[79] = "99";
 comments[79] = "Id Pregunta: 9357. Escala de Gesti&oacute;n de Sistemas de Sistemas de Informaci&oacute;n de la Xunta de Galicia. Promoci&oacute;n interna 2011.";


//  Id pregunta: 9679 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  En la comparaci&oacute;n en una proyecci&oacute;n Mercator del un &aacute;rea del Atl&aacute;ntico Norte, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[80]= new Array();
 choices[80][0] = "El rumbo loxodr&oacute;mico se toma seg&uacute;n el c&iacute;rculo m&aacute;ximo terrestre o distancia m&aacute;s corta curva en el mapa.";
 choices[80][1] = "El rumbo ortodr&oacute;mico se toma seg&uacute;n los puntos cardinales, l&iacute;nea recta en el mapa.";
 choices[80][2] = "El rumbo loxodr&oacute;mico se toma seg&uacute;n los puntos cardinales, l&iacute;nea recta en el mapa.";
 choices[80][3] = "No existen tales conceptos en la proyecci&oacute;n de Mercator.";
 answers[80] = choices[80][2];
 units[80] = "67";
 comments[80] = "Id Pregunta: 9679. NULL";


//  Id pregunta: 9934 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  En la Capa de Sesi&oacute;n (nivel 5) &iquest;cu&aacute;ntos tipos de puntos de sincronizaci&oacute;n existen?";
 choices[81]= new Array();
 choices[81][0] = "2, uno mayor y otro menor.";
 choices[81][1] = "3, mayor, mediano y menor.";
 choices[81][2] = "Ninguno.";
 choices[81][3] = "Depende del protocolo implementado.";
 answers[81] = choices[81][0];
 units[81] = "100";
 comments[81] = "Id Pregunta: 9934. NULL";


//  Id pregunta: 10270 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  &iquest;En cu&aacute;l de los siguientes casos no es necesaria autorizaci&oacute;n del director de la AEPD para hacer una transferencia internacional de datos personales?";
 choices[82]= new Array();
 choices[82][0] = "Cuando se refiera a transferencias dinerarias conforme a su legislaci&oacute;n espec&iacute;fica ";
 choices[82][1] = "Cuando la transferencia sea precisa para el reconocimiento, ejercicio o defensa de un derecho en un proceso judicial ";
 choices[82][2] = "Cuando la transferencia se haga a efectos de prestar o solicitar auxilio judicial internacional ";
 choices[82][3] = "En los tres casos anteriores";
 answers[82] = choices[82][3];
 units[82] = "29";
 comments[82] = "Id Pregunta: 10270. Art&iacute;culo 34 de la Ley 15/1999";


//  Id pregunta: 10279 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  En reglas, la inferencia mediante encadenamiento hacia adelante:";
 choices[83]= new Array();
 choices[83][0] = "Requiere en primer lugar que se introduzcan las premisas en la base de hechos";
 choices[83][1] = "Se crea un conjunto conflicto con las reglas cuyo consecuente es el objetivo de la inferencia";
 choices[83][2] = "La regla que se va a disparar siempre se elige de forma aleatoria";
 choices[83][3] = "Si la regla disparada es deductiva, se ejecuta la acci&oacute;n asociada";
 answers[83] = choices[83][0];
 units[83] = "64";
 comments[83] = "Id Pregunta: 10279. NULL";


//  Id pregunta: 10534 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  En los discos duros magn&eacute;ticos, &iquest;que significa el tiempo de latencia media?";
 choices[84]= new Array();
 choices[84][0] = "Tiempo medio que tarda el cabezal en situarse en la pista deseada";
 choices[84][1] = "Tiempo medio que tarda el cabezal en situarse en la pista y sector deseados";
 choices[84][2] = "Tiempo medio que tarda el cabezal en situarse en el sector deseado, una vez posicionado en la pista";
 choices[84][3] = "Tiempo medio que tarda la controladora en procesar un requerimiento de datos";
 answers[84] = choices[84][2];
 units[84] = "48";
 comments[84] = "Id Pregunta: 10534. NULL";


//  Id pregunta: 10680 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  En qu&eacute; T&iacute;tulo de la Ley 39/2015 se recogen los &quot;Derechos de las personas en sus relaciones con las Administraciones P&uacute;blicas.&quot;";
 choices[85]= new Array();
 choices[85][0] = "T&iacute;tulo I";
 choices[85][1] = "T&iacute;tulo II";
 choices[85][2] = "T&iacute;tulo III";
 choices[85][3] = "T&iacute;tulo IV";
 answers[85] = choices[85][1];
 units[85] = "30";
 comments[85] = "Id Pregunta: 10680. ";


//  Id pregunta: 10768 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  &iquest;Cu&aacute;l de los siguientes servicios no ha sido declarado como servicio compartido?";
 choices[86]= new Array();
 choices[86][0] = "Servicio multicanal de atenci&oacute;n al ciudadano";
 choices[86][1] = "Servicio de gesti&oacute;n de archivo electr&oacute;nico";
 choices[86][2] = "Servicio de videoconferencia";
 choices[86][3] = "Servicio com&uacute;n de gesti&oacute;n econ&oacute;mico-presupuestaria";
 answers[86] = choices[86][2];
 units[86] = "24";
 comments[86] = "Id Pregunta: 10768. ";


//  Id pregunta: 10783 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  Seg&uacute;n el art&iacute;culo 40 de la Ley 11/2007, de acceso electr&oacute;nico de los ciudadanos a los Servicios P&uacute;blicos, sobre el Comit&eacute; Sectorial de administraci&oacute;n electr&oacute;nica, &iquest;cu&aacute;l de las siguientes opciones es una funci&oacute;n de dicho &oacute;rgano?";
 choices[87]= new Array();
 choices[87][0] = "Desarrollar la normativa en materia de administraci&oacute;n electr&oacute;nica a nivel nacional.";
 choices[87][1] = "Asegurar la compatibilidad e interoperabilidad de los sistemas y aplicaciones empleados por las Administraciones P&uacute;blicas.";
 choices[87][2] = "Elaborar un informe anual sobre el nivel de avance de la administraci&oacute;n electr&oacute;nica a nivel nacional, auton&oacute;mico y municipal.";
 choices[87][3] = "Estimular el crecimiento en el empleo de la administraci&oacute;n electr&oacute;nica por parte de ciudadanos y empresas.";
 answers[87] = choices[87][1];
 units[87] = "43";
 comments[87] = "Id Pregunta: 10783. Examen GSI 2014";


//  Id pregunta: 10853 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  Se&ntilde;ale la respuesta INCORRECTA respecto a la tecnolog&iacute;a de Servicios Web REST:";
 choices[88]= new Array();
 choices[88][0] = "JAX-RS es una API Java que proporciona soporte en la creaci&oacute;n de servicios web de acuerdo con REST.";
 choices[88][1] = "Jersey es una implementaci&oacute;n de referencia de servicios web REST.";
 choices[88][2] = "REST publica recursos que son accesibles a trav&eacute;s de m&eacute;todos http, por ejemplo POST y GET.";
 choices[88][3] = "Los recursos REST permiten s&oacute;lo 3 operaciones: CREATE, UPDATE y DELETE.";
 answers[88] = choices[88][3];
 units[88] = "51";
 comments[88] = "Id Pregunta: 10853. Examen GSI 2014";


//  Id pregunta: 10854 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  WebDAV (RFC 4918) son un conjunto de extensiones para el protocolo HTTP, entre ellos, el m&eacute;todo PROPPATCH que sirve para:";
 choices[89]= new Array();
 choices[89][0] = "Crear colecciones.";
 choices[89][1] = "Recuperar propiedades, almacenadas como XML, desde un recurso.";
 choices[89][2] = "Cambiar y borrar m&uacute;ltiples propiedades de un recurso en una simple operaci&oacute;n at&oacute;mica.";
 choices[89][3] = "Desbloquear un recurso.";
 answers[89] = choices[89][2];
 units[89] = "112";
 comments[89] = "Id Pregunta: 10854. Examen GSI 2014";


//  Id pregunta: 11001 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  &iquest;En qu&eacute; circunstancias los prestadores de servicios de la sociedad de la informaci&oacute;n no son responsables por la informaci&oacute;n que proporcionen a los destinatarios de sus servicios?";
 choices[90]= new Array();
 choices[90][0] = "Cuando el proveedor de contenidos al que se enlace o cuya localizaci&oacute;n se facilite actu&eacute; bajo la direcci&oacute;n, autoridad o control del prestador que facilite la localizaci&oacute;n de esos contenidos.";
 choices[90][1] = "Siempre que tengan conocimiento de la ilicitud de la informaci&oacute;n o de que lesiona derechos o bienes de un tercero susceptible de indemnizaci&oacute;n y aleguen la imposibilidad de suprimir o inutilizar el enlace.";
 choices[90][2] = "Cuando el proveedor de contenidos al que se enlace o cuya localizaci&oacute;n se facilite desconozca el contenido il&iacute;cito de dicha informaci&oacute;n.";
 choices[90][3] = "Siempre que no tengan conocimiento efectivo de la ilicitud de la informaci&oacute;n o de que lesiona derechos o bienes de un tercero susceptible de indemnizaci&oacute;n o si lo tienen, act&uacute;en de forma diligente para suprimir o inutilizar el enlace.";
 answers[90] = choices[90][3];
 units[90] = "30";
 comments[90] = "Id Pregunta: 11001. TIC A1 AGE 2014";


//  Id pregunta: 11102 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  La NTI de Digitalizaci&oacute;n de Documentos indica que el nivel de resoluci&oacute;n m&iacute;nimo ser&aacute; para blanco y negro de:";
 choices[91]= new Array();
 choices[91][0] = "200 p&iacute;xeles por pulgada";
 choices[91][1] = "125 p&iacute;xeles por pulgada";
 choices[91][2] = "256 p&iacute;xeles por pulgada";
 choices[91][3] = "80 p&iacute;xeles por pulgada";
 answers[91] = choices[91][0];
 units[91] = "30";
 comments[91] = "Id Pregunta: 11102. ";


//  Id pregunta: 11386 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes definiciones respecto de la base de datos de errores conocidos (KEDB) es la mejor?";
 choices[92]= new Array();
 choices[92][0] = "La KEDB es la misma base de datos que el sistema de gesti&oacute;n del conocimiento del servicio (SKMS)";
 choices[92][1] = "La KEDB deber&iacute;a de usarse durante la fase de diagn&oacute;stico de incidencias para intentar acelerar el proceso de resoluci&oacute;n";
 choices[92][2] = "Debe tenerse cuidado para evitar duplicar registros en la KEDB. Esto puede ser realizado al ser posible dar acceso de creaci&oacute;n de nuevos registros a muchos t&eacute;cnicos";
 choices[92][3] = "Acceder a la KEDB deber&iacute;a estar limitado al centro de servicio a usuarios";
 answers[92] = choices[92][1];
 units[92] = "98";
 comments[92] = "Id Pregunta: 11386. ";


//  Id pregunta: 11445 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Seg&uacute;n la Ley 9/2014, marque la respuesta correcta respecto a la protecci&oacute;n de datos personales y la privacidad en relaci&oacute;n con las gu&iacute;as de abonados:";
 choices[93]= new Array();
 choices[93][0] = "A figurar en las gu&iacute;as de abonados.";
 choices[93][1] = "A ser informado de la inclusi&oacute;n de sus datos en las gu&iacute;as de abonados.";
 choices[93][2] = "A no figurar en las gu&iacute;as de abonados.";
 choices[93][3] = "Todas las anteriores.";
 answers[93] = choices[93][3];
 units[93] = "110";
 comments[93] = "Id Pregunta: 11445. ";


//  Id pregunta: 11462 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Cu&aacute;l de los siguientes no es un derecho de los usuarios recogido en la Ley 9/2014:";
 choices[94]= new Array();
 choices[94][0] = "Derecho a figurar en las gu&iacute;as de abonados.";
 choices[94][1] = "A recibir facturas no desglosadas a petici&oacute;n del usuario.";
 choices[94][2] = "A no figurar en las gu&iacute;as de abonados.";
 choices[94][3] = "A recibir llamadas autom&aacute;ticas sin intervenci&oacute;n humana o mensajes de fax, con fines de comunicaci&oacute;n comercial sin haber prestado su consentimiento previo e informado para ello.";
 answers[94] = choices[94][3];
 units[94] = "110";
 comments[94] = "Id Pregunta: 11462. ";


//  Id pregunta: 11504 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Cu&aacute;l de los siguientes es un rol descrito en la Arquitectura de Referencia del Cloud Compunting versi&oacute;n 4.0 de IBM (CCRA)?";
 choices[95]= new Array();
 choices[95][0] = "Consumer.";
 choices[95][1] = "Provider.";
 choices[95][2] = "Creator.";
 choices[95][3] = "Todos los anteriores.";
 answers[95] = choices[95][3];
 units[95] = "47";
 comments[95] = "Id Pregunta: 11504. NULL";


//  Id pregunta: 11512 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Indique la FALSA respecto al concepto MapReduce.";
 choices[96]= new Array();
 choices[96][0] = "Es un paradigma de programaci&oacute;n utilizado en plataformas de Big Data";
 choices[96][1] = "Adem&aacute;s de los procesos Map y Reduce, incorpora una fase intermedia de Shuffle que permite balancear la carga de las tuplas de entrada.";
 choices[96][2] = "El proceso Map consiste en tomar las salidas del proceso Reduce y combina dichas tuplas en un conjunto m&aacute;s peque&ntilde;o.";
 choices[96][3] = "Proceso Map toma un conjunto de datos y lo convierte en otro conjunto, separando los elementos indiviudales en tuplas (pares clave/valor)";
 answers[96] = choices[96][2];
 units[96] = "68";
 comments[96] = "Id Pregunta: 11512. NULL";


//  Id pregunta: 11595 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Con respecto a la Comisi&oacute;n de Estrategia TIC, se&ntilde;ale la incorrecta:";
 choices[97]= new Array();
 choices[97][0] = "La Comisi&oacute;n de Estrategia TIC se adscribe al Ministerio de Hacienda y Administraciones P&uacute;blicas a trav&eacute;s de la Secretar&iacute;a de Estado de Administraciones P&uacute;blicas.";
 choices[97][1] = "Una de sus funciones es declarar los medios o servicios compartidos.";
 choices[97][2] = "Las reuniones de su Pleno se celebrar&aacute;n, al menos, cuatro veces al a&ntilde;o por convocatoria de su Presidente, bien a iniciativa propia, bien cuando lo soliciten, al menos, la mitad de sus miembros.";
 choices[97][3] = "Podr&aacute;n constituirse los grupos de trabajo que se requieran para el adecuado desarrollo de sus funciones.";
 answers[97] = choices[97][2];
 units[97] = "43";
 comments[97] = "Id Pregunta: 11595. ";


//  Id pregunta: 11721 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Qu&eacute; comando se puede utilizar en un PC con S.O. Windows para obtener la configuraci&oacute;n IP de ese equipo?";
 choices[98]= new Array();
 choices[98][0] = "ifconfig -a";
 choices[98][1] = "netstat -rn";
 choices[98][2] = "iptables -L";
 choices[98][3] = "ipconfig";
 answers[98] = choices[98][3];
 units[98] = "102";
 comments[98] = "Id Pregunta: 11721. NULL";


//  Id pregunta: 11744 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Qu&eacute; dimensi&oacute;n de seguridad es obligatoria de evaluar para el responsable del servicio?&nbsp;  ";
 choices[99]= new Array();
 choices[99][0] = "autenticacion";
 choices[99][1] = "trazabilidad";
 choices[99][2] = "integridad";
 choices[99][3] = "disponibilidad";
 answers[99] = choices[99][3];
 units[99] = "43";
 comments[99] = "Id Pregunta: 11744. ";


