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

//  Id pregunta: 118 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  Dentro de la teor&iacute;a de la Decisi&oacute;n Multicriterio Discreta, el m&eacute;todo de la entrop&iacute;a se utiliza para:";
 choices[0]= new Array();
 choices[0][0] = "Asignar un peso a cada alternativa";
 choices[0][1] = "Normalizar las puntuaciones brutas otorgadas";
 choices[0][2] = "Ordenar las alternativas";
 choices[0][3] = "Suavizar la subjetividad del m&eacute;todo directo de asignaci&oacute;n de pesos";
 answers[0] = choices[0][3];
 units[0] = "34";
 comments[0] = "Id Pregunta: 118. NULL";


//  Id pregunta: 184 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  En el m&eacute;todo PERT, &iquest;cu&aacute;l de las afirmaciones es falsa?";
 choices[1]= new Array();
 choices[1][0] = "La holgura libre de una actividad es el margen sobrante suponiendo que el nudo de origen se alcanza lo m&aacute;s pronto posible y que al destino se llega tambi&eacute;n lo m&aacute;s pronto posible.";
 choices[1][1] = "La oscilaci&oacute;n de un nudo es el margen de tiempo existente entre el momento m&aacute;s tarde en el que es admisible llegar al mismo (tiempo early) y el momento m&aacute;s pronto en el que es posible llegar (tiempo last).";
 choices[1][2] = "La holgura total es el margen sobrante suponiendo que a la situaci&oacute;n representada por el nudo de origen se llega lo m&aacute;s pronto posible y que a la de destino se llega lo m&aacute;s tarde admisible.";
 choices[1][3] = "La mayor&iacute;a de los software de Gesti&oacute;n de Proyectos incorporan las t&eacute;cnicas PERT.";
 answers[1] = choices[1][1];
 units[1] = "27";
 comments[1] = "Id Pregunta: 184. ";


//  Id pregunta: 249 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  Entendemos por sistema de informaci&oacute;n:";
 choices[2]= new Array();
 choices[2][0] = "Conjunto de procedimientos autom&aacute;ticos y de funciones dirigidas a la recogida, elaboraci&oacute;n, evaluaci&oacute;n, almacenamiento, recuperaci&oacute;n, condensaci&oacute;n y distribuci&oacute;n de informaciones dentro de una organizaci&oacute;n";
 choices[2][1] = "Conjunto de procedimientos manuales y de funciones dirigidas a la recogida, elaboraci&oacute;n, evaluaci&oacute;n, almacenamiento, recuperaci&oacute;n, condensaci&oacute;n y distribuci&oacute;n de informaciones dentro de una organizaci&oacute;n";
 choices[2][2] = "Conjunto de procedimientos, manuales y autom&aacute;ticos, y de funciones dirigidas a la recogida, elaboraci&oacute;n, almacenamiento, recuperaci&oacute;n, condensaci&oacute;n, distribuci&oacute;n y evaluaci&oacute;n de informaciones dentro de una organizaci&oacute;n";
 choices[2][3] = "Conjunto de procedimientos, manuales y autom&aacute;ticos, y de funciones dirigidas a la recogida, elaboraci&oacute;n, evaluaci&oacute;n, almacenamiento, recuperaci&oacute;n, condensaci&oacute;n y distribuci&oacute;n de informaciones dentro de una organizaci&oacute;n";
 answers[2] = choices[2][3];
 units[2] = "21";
 comments[2] = "Id Pregunta: 249. ";


//  Id pregunta: 367 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  Los dominios de c&oacute;digo de pa&iacute;s en Internet est&aacute;n establecidos en la norma ISO:";
 choices[3]= new Array();
 choices[3][0] = "9735";
 choices[3][1] = "9075";
 choices[3][2] = "3166";
 choices[3][3] = "8422";
 answers[3] = choices[3][2];
 units[3] = "42";
 comments[3] = "Id Pregunta: 367. ";


//  Id pregunta: 392 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  Para determinar el nivel aceptable de seguridad hay que llegar a un equilibrio entre:";
 choices[4]= new Array();
 choices[4][0] = "El coste de los da&ntilde;os versus el coste de sus consecuencias";
 choices[4][1] = "El coste de las medidas de seguridad versus el presupuesto disponible";
 choices[4][2] = "Los costes y la probabilidad de los da&ntilde;os versus el coste de las medidas y seguridad para evitarlos";
 choices[4][3] = "El coste de los da&ntilde;os versus los da&ntilde;os que somos capaces de aceptar";
 answers[4] = choices[4][2];
 units[4] = "33";
 comments[4] = "Id Pregunta: 392. ";


//  Id pregunta: 403 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  Respecto a las caracter&iacute;sticas de un sistema abierto (es decir, aqu&eacute;l que cumple con las especificaciones de OSI), podemos decir que:";
 choices[5]= new Array();
 choices[5][0] = "Interoperabilidad es la posibilidad de enlazar ordenadores de distintas marcas con la seguridad de que han de trabajar conjuntamente, dando la sensaci&oacute;n de que funcionan como un &uacute;nico sistema";
 choices[5][1] = "Portabilidad es la posibilidad de que aplicaciones de distintos desarrolladores de software funcionen en m&aacute;quinas de diversos fabricantes";
 choices[5][2] = "Escalabilidad o capacidad de crecimiento es la posibilidad de utilizar el mismo entorno de software en diferentes gamas de ordenadores, desde ordenadores de sobremesa hasta mainframes";
 choices[5][3] = "Todas las respuestas anteriores son correctas";
 answers[5] = choices[5][3];
 units[5] = "40";
 comments[5] = "Id Pregunta: 403. ";


//  Id pregunta: 411 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Respecto al modelo de Nolan:";
 choices[6]= new Array();
 choices[6][0] = "Fue criticado por Strassman al no contemplar la aparici&oacute;n de las bases de datos";
 choices[6][1] = "Seg&uacute;n su autor es un modelo de 4 etapas, posteriormente corregido a 5 etapas";
 choices[6][2] = "Las 2 anteriores";
 choices[6][3] = "Ninguna de las anteriores";
 answers[6] = choices[6][0];
 units[6] = "22";
 comments[6] = "Id Pregunta: 411. nolan";


//  Id pregunta: 448 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  Se&ntilde;alar la afirmaci&oacute;n incorrecta respecto al control de proyectos:";
 choices[7]= new Array();
 choices[7][0] = "El diagrama de PERT permite evaluar el retraso de un proyecto";
 choices[7][1] = "Un retraso en la fecha de finalizaci&oacute;n de una etapa provoca un retraso de la fecha final del proyecto";
 choices[7][2] = "La fecha de finalizaci&oacute;n del proyecto se ve afectada por las fechas de finalizaci&oacute;n de las etapas que constituyen el camino cr&iacute;tico";
 choices[7][3] = "La duraci&oacute;n total del proyecto viene determinada por el camino cr&iacute;tico";
 answers[7] = choices[7][1];
 units[7] = "28";
 comments[7] = "Id Pregunta: 448. ";


//  Id pregunta: 633 AÃ±o de creación de pregunta: 2006-01-01
 questions[8]= "9)  Cu&aacute;l de las siguientes caracter&iacute;sticas no se considera fundamental que garantice un sistema DRM (Digital Rights Management):";
 choices[8]= new Array();
 choices[8][0] = "Limitar el n&uacute;mero de lecturas de un archivo.";
 choices[8][1] = "Proteger el contenido para evitar la lectura por terceros.";
 choices[8][2] = "Evitar que el archivo sea modificado.";
 choices[8][3] = "Garantizar que s&oacute;lo el destinatario sea capaz de leer el archivo.";
 answers[8] = choices[8][0];
 units[8] = "37";
 comments[8] = "Id Pregunta: 633. ";


//  Id pregunta: 682 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  En I+D+I, &iquest;a qu&eacute; se refiere la segunda 'I'?";
 choices[9]= new Array();
 choices[9][0] = "A implementaci&oacute;n.";
 choices[9][1] = "A instalaci&oacute;n.";
 choices[9][2] = "A innovaci&oacute;n.";
 choices[9][3] = "A internet.";
 answers[9] = choices[9][2];
 units[9] = "103";
 comments[9] = "Id Pregunta: 682. ";


//  Id pregunta: 820 AÃ±o de creación de pregunta: 2009-01-01
 questions[10]= "11)  Seg&uacute;n la Ley 34/2002, podr&aacute;n adoptarse las medidas legales necesarias para que se interrumpa la prestaci&oacute;n de un servicio que atente contra los siguientes principios. Se&ntilde;alar la respuesta incorrecta:";
 choices[10]= new Array();
 choices[10][0] = "Salvaguarda del orden p&uacute;blico";
 choices[10][1] = "Salvaguarda del inter&eacute;s general";
 choices[10][2] = "Respeto a la dignidad de la persona";
 choices[10][3] = "Protecci&oacute;n de la salud p&uacute;blica";
 answers[10] = choices[10][1];
 units[10] = "30";
 comments[10] = "Id Pregunta: 820. Ley 34/2002, art&iacute;culo 8";


//  Id pregunta: 1356 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Se&ntilde;ale la sentencia correcta respecto a los m&eacute;todos de resoluci&oacute;n de problemas:";
 choices[11]= new Array();
 choices[11][0] = "El m&eacute;todo GPS (General Problem Solver) consiste en almacenar en un momento dado el camino recorrido desde la ra&iacute;z mediante el empleo de funciones recursivas";
 choices[11][1] = "El m&eacute;todo STRIPS (Stanford Research Institute Problem Solver) une la filosof&iacute;a GPS con las t&eacute;cnicas de b&uacute;squeda en profundidad";
 choices[11][2] = "El m&eacute;todo GPS consiste en descomponer un problema de manera sistem&aacute;tica en subproblemas";
 choices[11][3] = "El m&eacute;todo STRIPS no puede representar conceptos y deducir a partir de ellos nuevos hechos mediante las reglas de deducci&oacute;n";
 answers[11] = choices[11][2];
 units[11] = "63";
 comments[11] = "Id Pregunta: 1356. ";


//  Id pregunta: 1494 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  &iquest;Qu&eacute; se entiende por audioconferencia?:";
 choices[12]= new Array();
 choices[12][0] = "Servicio que permite a m&aacute;s de dos usuarios participar simult&aacute;neamente en una &uacute;nica conversaci&oacute;n";
 choices[12][1] = "Servicio que permite a un usuario telef&oacute;nico depositar mensajes de voz en un audiobuz&oacute;n";
 choices[12][2] = "Servicio que suministra una informaci&oacute;n grabada de tipo gen&eacute;rico";
 choices[12][3] = "Servicio de telefon&iacute;a m&oacute;vil en grupo cerrado de usuarios";
 answers[12] = choices[12][0];
 units[12] = "117";
 comments[12] = "Id Pregunta: 1494. ";


//  Id pregunta: 1772 AÃ±o de creación de pregunta: 2006-01-01
 questions[13]= "14)  &iquest;Qu&eacute; es un fichero JAR?";
 choices[13]= new Array();
 choices[13][0] = "Es el fichero que proporciona el entorno de ejecuci&oacute;n de java,  as&iacute; como una API gr&aacute;fica para el desarrollo de aplicaciones y applets.";
 choices[13][1] = "Es el fichero que empaqueta el entorno de ejecuci&oacute;n de java.";
 choices[13][2] = "Es el fichero que contiene el c&oacute;digo intermedio de java.";
 choices[13][3] = "Es un fichero en el que se re&uacute;nen las clases, im&aacute;genes, sonidos y otros ficheros necesarios para la ejecuci&oacute;n de un applet o una aplicaci&oacute;n Java.";
 answers[13] = choices[13][3];
 units[13] = "60";
 comments[13] = "Id Pregunta: 1772. NULL";


//  Id pregunta: 1783 AÃ±o de creación de pregunta: 2006-01-01
 questions[14]= "15)  En el proyecto RHODAS del MAP, para la renovaci&oacute;n del parque ofim&aacute;tico del ministerio mediante puestos de trabajo equipados con software libre, indique qu&eacute; entorno de escritorio fue elegido en la arquitectura de referencia:";
 choices[14]= new Array();
 choices[14][0] = "KDE";
 choices[14][1] = "Wine";
 choices[14][2] = "GNOME";
 choices[14][3] = "Konkeror";
 answers[14] = choices[14][0];
 units[14] = "61,62";
 comments[14] = "Id Pregunta: 1783. ";


//  Id pregunta: 1840 AÃ±o de creación de pregunta: 2006-01-01
 questions[15]= "16)  Se&ntilde;ale cu&aacute;l de las siguientes tecnolog&iacute;as no est&aacute; relacionada con el comercio electr&oacute;nico:";
 choices[15]= new Array();
 choices[15][0] = "EDIFACT";
 choices[15][1] = "ODETTE";
 choices[15][2] = "ANSI X13";
 choices[15][3] = "XML";
 answers[15] = choices[15][2];
 units[15] = "70";
 comments[15] = "Id Pregunta: 1840. NULL";


//  Id pregunta: 1893 AÃ±o de creación de pregunta: 2006-01-01
 questions[16]= "17)  Los controladores RAID hardware son mucho m&aacute;s r&aacute;pidos que los software. Tambi&eacute;n son mucho m&aacute;s";
 choices[16]= new Array();
 choices[16][0] = "seguros";
 choices[16][1] = "fiables";
 choices[16][2] = "voluminosos";
 choices[16][3] = "caros";
 answers[16] = choices[16][3];
 units[16] = "48";
 comments[16] = "Id Pregunta: 1893. ";


//  Id pregunta: 2049 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  En M&eacute;trica V3 no son T&eacute;cnicas de Gesti&oacute;n de Proyectos:";
 choices[17]= new Array();
 choices[17][0] = "WBS";
 choices[17][1] = "MARK II";
 choices[17][2] = "JAD";
 choices[17][3] = "PERT";
 answers[17] = choices[17][2];
 units[17] = "86";
 comments[17] = "Id Pregunta: 2049. NULL";


//  Id pregunta: 2098 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  En los sistemas de tiempo real, &iquest;qu&eacute; es m&aacute;s cr&iacute;tico?";
 choices[18]= new Array();
 choices[18][0] = "Fuertes restricciones del tiempo de respuesta.";
 choices[18][1] = "Informaci&oacute;n permanentemente actualizada.";
 choices[18][2] = "Alto rendimiento del sistema.";
 choices[18][3] = "La fiabilidad.";
 answers[18] = choices[18][0];
 units[18] = "83";
 comments[18] = "Id Pregunta: 2098. ";


//  Id pregunta: 2211 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  &iquest;Qu&eacute; es un m&eacute;todo en programaci&oacute;n orientada a objetos?:";
 choices[19]= new Array();
 choices[19][0] = "Una operaci&oacute;n sobre un objeto";
 choices[19][1] = "Un algoritmo";
 choices[19][2] = "Un conjunto de objetos";
 choices[19][3] = "Un atributo de un objeto";
 answers[19] = choices[19][0];
 units[19] = "82";
 comments[19] = "Id Pregunta: 2211. ";


//  Id pregunta: 2623 AÃ±o de creación de pregunta: 2003-01-01
 questions[20]= "21)  &iquest;Cu&aacute;l no pertenece al an&aacute;lisis DAFO?";
 choices[20]= new Array();
 choices[20][0] = "debilidades";
 choices[20][1] = "Amenazas";
 choices[20][2] = "Flexibilidad";
 choices[20][3] = "Oportunidades";
 answers[20] = choices[20][2];
 units[20] = "77";
 comments[20] = "Id Pregunta: 2623. ";


//  Id pregunta: 2646 AÃ±o de creación de pregunta: 2003-01-01
 questions[21]= "22)  En el modelo Entidad/Relaci&oacute;n extendido las relaciones d&eacute;biles:";
 choices[21]= new Array();
 choices[21][0] = "Son las que existen entre entidades d&eacute;biles";
 choices[21][1] = "&Uacute;nicamente las que existen entre una entidad regular y otra entidad d&eacute;bil cuya identificaci&oacute;n depende de la identificaci&oacute;n de la anterior.";
 choices[21][2] = "Son las que existen entre una entidad regular y otra entidad d&eacute;bil, independientemente de que la dependencia sea por identificaci&oacute;n o existencia.";
 choices[21][3] = "Son las que existen entre una entidad regular y otra entidad d&eacute;bil cuya existencia no depende de la existencia de la anterior.";
 answers[21] = choices[21][2];
 units[21] = "58,80";
 comments[21] = "Id Pregunta: 2646. ";


//  Id pregunta: 2813 AÃ±o de creación de pregunta: 2006-01-01
 questions[22]= "23)  El modelo de calidad EFQM";
 choices[22]= new Array();
 choices[22][0] = "Considera 8 criterios y 30 subcriterios";
 choices[22][1] = "Considera 9 criterios y 32 subcriterios";
 choices[22][2] = "Considera 9 criterios y 40 subcriterios";
 choices[22][3] = "El modelo de calidad EFQM no considera criterios sino factores";
 answers[22] = choices[22][1];
 units[22] = "88";
 comments[22] = "Id Pregunta: 2813. NULL";


//  Id pregunta: 2852 AÃ±o de creación de pregunta: 2006-01-01
 questions[23]= "24)  Indicar la falsa";
 choices[23]= new Array();
 choices[23][0] = "En la comparaci&oacute;n matricial se pueden utilizar filtros digitales que aclaran la informaci&oacute;n a almacenar, para optimizar el casamiento";
 choices[23][1] = "En la comparaci&oacute;n matricial escanea la forma de los caracteres y los compara con tablas de formas";
 choices[23][2] = "En el reconocimiento por patrones escanea la forma de los caracteres y los compara con tablas de formas";
 choices[23][3] = "El reconocimiento por patrones ofrece m&aacute;s flexibilidad que la comparaci&oacute;n matricial";
 answers[23] = choices[23][1];
 units[23] = "94";
 comments[23] = "Id Pregunta: 2852. ";


//  Id pregunta: 2883 AÃ±o de creación de pregunta: 2006-01-01
 questions[24]= "25)  &iquest;Cu&aacute;l de los siguientes subcriterios no corresponde al criterio &quot;Personas&quot; en el modelo EFQM?";
 choices[24]= new Array();
 choices[24][0] = "Planificaci&oacute;n, gesti&oacute;n y mejora de los recursos humanos";
 choices[24][1] = "Identificaci&oacute;n, desarrollo y mantenimiento del conocimiento y la capacidad de las personas de la organizaci&oacute;n";
 choices[24][2] = "Existencia de un autoliderazgo en las personas de la organizaci&oacute;n";
 choices[24][3] = "Recompensa, reconocimiento y atenci&oacute;n a las personas de la organizaci&oacute;n";
 answers[24] = choices[24][2];
 units[24] = "92";
 comments[24] = "Id Pregunta: 2883. NULL";


//  Id pregunta: 3219 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  &iquest;Cu&aacute;l de los siguientes conceptos no aporta seguridad a una intranet?:";
 choices[25]= new Array();
 choices[25][0] = "Spoofing";
 choices[25][1] = "Firewalls";
 choices[25][2] = "NAT";
 choices[25][3] = "Proxy";
 answers[25] = choices[25][0];
 units[25] = "113";
 comments[25] = "Id Pregunta: 3219. ";


//  Id pregunta: 3455 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  El protocolo OSPF:";
 choices[26]= new Array();
 choices[26][0] = "Es un protocolo de encaminamiento como el RIP";
 choices[26][1] = "Significa 'Open Systems Protocol Family'";
 choices[26][2] = "No usa el algoritmo tipo de estados de enlaces (link-state) para encaminar los datagramas";
 choices[26][3] = "Se describe en la RFC942 (Request for Comments)";
 answers[26] = choices[26][0];
 units[26] = "102";
 comments[26] = "Id Pregunta: 3455. ";


//  Id pregunta: 3525 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  En Internet, los distintos tipos de servicios utilizan protocolos espec&iacute;ficos. De las siguientes parejas servicios-protocolos, una es incorrecta. Se&ntilde;&aacute;lela:";
 choices[27]= new Array();
 choices[27][0] = "P&aacute;ginas Web-HTTP";
 choices[27][1] = "Correo electr&oacute;nico-SNMP";
 choices[27][2] = "Grupos de noticias-NNTP";
 choices[27][3] = "Transferencia de ficheros-FTP";
 answers[27] = choices[27][1];
 units[27] = "112";
 comments[27] = "Id Pregunta: 3525. ";


//  Id pregunta: 3838 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  Sobre los algoritmos de encaminamiento utilizados por los &ldquo;routers&rdquo;, indique cual de las siguientes afirmaciones es err&oacute;nea:";
 choices[28]= new Array();
 choices[28][0] = "Mediante los algoritmos de estados de enlaces cada &ldquo;router&rdquo; env&iacute;a su tabla de encaminamiento completa a todos los dem&aacute;s &ldquo;routers&rdquo; en la red al producirse cualquier cambio en la tabla. As&iacute; act&uacute;a el protocolo OSPF";
 choices[28][1] = "Mediante los algoritmos de vector distancia (tambi&eacute;n conocidos como algoritmos Bellman-Ford) cada &ldquo;router&rdquo; env&iacute;a su tabla de encaminado completa s&oacute;lo a los &ldquo;routers&rdquo; vecinos a intervalos regulares.  As&iacute; act&uacute;a el protocolo RIP";
 choices[28][2] = "Mediante los algoritmos de estados de enlaces (tambi&eacute;n conocidos como &ldquo;shortest path first&rdquo;) cada &ldquo;router&rdquo; env&iacute;a determinada informacion relativa al estado de sus enlaces a los demas routers lo que les permite construir una vision tolpologica de la red ";
 choices[28][3] = "Los algoritmos de estados de enlaces son menos propensos a provocar un bucle de encaminamiento, ya que convergen (determinan el encaminamiento &oacute;ptimo) m&aacute;s r&aacute;pidamente";
 answers[28] = choices[28][0];
 units[28] = "101";
 comments[28] = "Id Pregunta: 3838. ";


//  Id pregunta: 4118 AÃ±o de creación de pregunta: 2006-01-01
 questions[29]= "30)  Cuando dividimos la cantidad de trabajo que ejecuta un ordenador entre dos o m&aacute;s hablamos de";
 choices[29]= new Array();
 choices[29][0] = "clusters";
 choices[29][1] = "multicast";
 choices[29][2] = "balanceo de carga";
 choices[29][3] = "peering";
 answers[29] = choices[29][2];
 units[29] = "49";
 comments[29] = "Id Pregunta: 4118. ";


//  Id pregunta: 4226 AÃ±o de creación de pregunta: 2006-01-01
 questions[30]= "31)  Identifique el rango de frecuencias que se utiliza en el canal ascendente o de retorno en una red HFC (Hybrid Fiber Coaxial):";
 choices[30]= new Array();
 choices[30][0] = "De 50 a 550 Mhz";
 choices[30][1] = "De 5 a 50 MHz";
 choices[30][2] = "De 550 a 860 MHz";
 choices[30][3] = "De 5 a 860 MHz";
 answers[30] = choices[30][1];
 units[30] = "99";
 comments[30] = "Id Pregunta: 4226. ";


//  Id pregunta: 4350 AÃ±o de creación de pregunta: 2007-01-01
 questions[31]= "32)  La red G&Eacute;ANT:";
 choices[31]= new Array();
 choices[31][0] = "Es una red basada en IPv6 de &aacute;mbito mundial, que constituye el n&uacute;cleo de Internet.";
 choices[31][1] = "Es una red basada en IPv6, que sirve de desarrollo e investigaci&oacute;n para la nueva Internet 2.";
 choices[31][2] = "Es la siguiente evoluci&oacute;n l&oacute;gica de la Intranet Administrativa que une a diversos organismos de la Administraci&oacute;n General del Estado.";
 choices[31][3] = "Es una red paneuropea de investigaci&oacute;n, formada por la uni&oacute;n de las redes de investigaci&oacute;n, financiada por la Uni&oacute;n Europea";
 answers[31] = choices[31][3];
 units[31] = "103";
 comments[31] = "Id Pregunta: 4350. ";


//  Id pregunta: 4517 AÃ±o de creación de pregunta: 2007-01-01
 questions[32]= "33)  &iquest;Qu&eacute; es un almac&eacute;n de datos?";
 choices[32]= new Array();
 choices[32][0] = "Un sistema de almacenamiento masivo en discos RAID.";
 choices[32][1] = "Una base de datos OLTP.";
 choices[32][2] = "Un repositorio de informaci&oacute;n recopilada de distintas fuentes.";
 choices[32][3] = "Un sistema de almacenamiento innovador que viene integrado en el paquete de Suse&shy;Linux.";
 answers[32] = choices[32][2];
 units[32] = "81";
 comments[32] = "Id Pregunta: 4517. ";


//  Id pregunta: 4649 AÃ±o de creación de pregunta: 2007-01-01
 questions[33]= "34)  La tecnolog&iacute;a de radio LMDS (Local Multipoint Distribution System) se caracteriza entre otras cosas por ser:";
 choices[33]= new Array();
 choices[33][0] = "una tecnolog&iacute;a punto a punto";
 choices[33][1] = "no requiere de visibilidad directa entre enlaces";
 choices[33][2] = "tiene radios de cobertura t&iacute;picos mayores a 25 Km (kilometros)";
 choices[33][3] = "utilizada para entornos de alta concentraci&oacute;n de usuarios";
 answers[33] = choices[33][3];
 units[33] = "108";
 comments[33] = "Id Pregunta: 4649. ";


//  Id pregunta: 4667 AÃ±o de creación de pregunta: 2007-01-01
 questions[34]= "35)  En el contexto de SOA, las siglas ESB son el acr&oacute;nimo de:";
 choices[34]= new Array();
 choices[34][0] = "Execution Service Base";
 choices[34][1] = "Execution Service Board";
 choices[34][2] = "Enterprise Service Bus";
 choices[34][3] = "Enterprise Service Board";
 answers[34] = choices[34][2];
 units[34] = "51";
 comments[34] = "Id Pregunta: 4667. NULL";


//  Id pregunta: 4715 AÃ±o de creación de pregunta: 2007-01-01
 questions[35]= "36)  El hipertexto es:";
 choices[35]= new Array();
 choices[35][0] = "El conjunto de los elementos activos de un documento, que, al seleccionarse, enlazan con otros elementos";
 choices[35][1] = "Un documento HTML.";
 choices[35][2] = "Un documento HTML, XML o SGML.";
 choices[35][3] = "Ninguna de las anteriores";
 answers[35] = choices[35][0];
 units[35] = "112";
 comments[35] = "Id Pregunta: 4715. Examen 2006 JCYL";


//  Id pregunta: 4723 AÃ±o de creación de pregunta: 2007-01-01
 questions[36]= "37)  En el directorio activo de Microsoft la definici&oacute;n de todas las definiciones de clases de todos los objetos yatributos del directorio activo se encuentra en el:";
 choices[36]= new Array();
 choices[36][0] = "Schema Naming Context";
 choices[36][1] = " Active Directory Schema MMC";
 choices[36][2] = "Configuration Naming Context";
 choices[36][3] = "Domain Naming Context";
 answers[36] = choices[36][0];
 units[36] = "59,115";
 comments[36] = "Id Pregunta: 4723. Examen 2006 JCYL";


//  Id pregunta: 5068 AÃ±o de creación de pregunta: 2003-01-01
 questions[37]= "38)  &iquest;Cu&aacute;l de las siguientes afirmaciones con respecto a los XML Schemas es incorrecta?:";
 choices[37]= new Array();
 choices[37][0] = "Los XML Schemas utilizan sintaxis XML";
 choices[37][1] = "Es imposible referenciar m&uacute;ltiples XML Schemas desde el mismo documento XML";
 choices[37][2] = "Los XML Schemas soportan namespaces";
 choices[37][3] = "Los XML Schemas permiten definir tipos de datos";
 answers[37] = choices[37][1];
 units[37] = "69";
 comments[37] = "Id Pregunta: 5068. Examen TIC A 2007";


//  Id pregunta: 5094 AÃ±o de creación de pregunta: 2003-01-01
 questions[38]= "39)  El &quot;modelo de informaci&oacute;n&quot; del directorio LDAP:";
 choices[38]= new Array();
 choices[38][0] = "Describe c&oacute;mo puede protegerse la informaci&oacute;n contenida en el directorio LDAP frente a accesos no autorizados";
 choices[38][1] = "Describe qu&eacute; operaciones pueden ser realizadas sobre la informaci&oacute;n almacenada en el directorio LDAP";
 choices[38][2] = "Define la estructura de la inforrmaci&oacute;n almacenada en el directorio LDAP";
 choices[38][3] = "Describe c&oacute;mo se organizan y referencian los datos";
 answers[38] = choices[38][2];
 units[38] = "74";
 comments[38] = "Id Pregunta: 5094. NULL";


//  Id pregunta: 5119 AÃ±o de creación de pregunta: 2003-01-01
 questions[39]= "40)  &iquest;En qu&eacute; variable de entorno UNIX se le reporta al servidor de X-Windows la direcci&oacute;n del cliente X donde debe abrir las ventanas?";
 choices[39]= new Array();
 choices[39][0] = "DISPLAY";
 choices[39][1] = "SCREEN";
 choices[39][2] = "XHOST";
 choices[39][3] = "XCLIENT";
 answers[39] = choices[39][0];
 units[39] = "54";
 comments[39] = "Id Pregunta: 5119. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5173 AÃ±o de creación de pregunta: 2003-01-01
 questions[40]= "41)  En la auditor&iacute;a inform&aacute;tica se conocen como pruebas sustantivas:";
 choices[40]= new Array();
 choices[40][0] = "Sirven para obtener una comprensi&oacute;n de cu&aacute;les son los controles administrativos que est&aacute;n establecidos.";
 choices[40][1] = "Sirven para ver si los controles est&aacute;n bien dise&ntilde;ados y funcionan eficazmente.";
 choices[40][2] = "Se utilizan para determinar si se cumplen los objetivos de salvaguarda de los activos, integridad de los datos, eficacia y eficiencia.";
 choices[40][3] = "Estas pruebas se utilizan para sacar consecuencias del an&aacute;lisis de determinada informaci&oacute;n.";
 answers[40] = choices[40][2];
 units[40] = "31";
 comments[40] = "Id Pregunta: 5173. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5454 AÃ±o de creación de pregunta: 2003-01-01
 questions[41]= "42)  &iquest;Cu&aacute;l de las siguientes es una caracter&iacute;stica importante de las bases de datos relacionales y SQL?";
 choices[41]= new Array();
 choices[41][0] = "La independencia de relaciones entre las tablas";
 choices[41][1] = "Elevada velocidad del SQL";
 choices[41][2] = "Potentes entornos de desarrollo";
 choices[41][3] = "F&aacute;ciles de instalar y usar";
 answers[41] = choices[41][0];
 units[41] = "58";
 comments[41] = "Id Pregunta: 5454. Castilla y Le&oacute;n";


//  Id pregunta: 5524 AÃ±o de creación de pregunta: 2003-01-01
 questions[42]= "43)  Indicar la respuesta falsa";
 choices[42]= new Array();
 choices[42][0] = "BMP es un formato de im&aacute;genes sin p&eacute;rdidas que no soporta animaciones ni fondos transparentes";
 choices[42][1] = "GIF es un formato de im&aacute;genes que utiliza el algoritmo de compresi&oacute;n LZW y es v&aacute;lido para animaciones y fondos transparente";
 choices[42][2] = "El formato JPEG sin p&eacute;rdidas permite multip&aacute;gina y es muy adecuado para conservar originales a alta resoluci&oacute;n";
 choices[42][3] = "PNG es un formato sin p&eacute;rdida recomendado por el W3C para la publicaci&oacute;n en web";
 answers[42] = choices[42][2];
 units[42] = "93";
 comments[42] = "Id Pregunta: 5524. NULL";


//  Id pregunta: 5581 AÃ±o de creación de pregunta: 2003-01-01
 questions[43]= "44)  &iquest;Cu&aacute;l de las siguientes plataformas de e-learning NO es libre?";
 choices[43]= new Array();
 choices[43][0] = "Atutor";
 choices[43][1] = "ILIAS";
 choices[43][2] = "LON-CAPA";
 choices[43][3] = "Blackboard";
 answers[43] = choices[43][3];
 units[43] = "66";
 comments[43] = "Id Pregunta: 5581. ";


//  Id pregunta: 5731 AÃ±o de creación de pregunta: 2003-01-01
 questions[44]= "45)  &iquest;Cu&aacute;l de los siguientes no es un tipo de workflow?";
 choices[44]= new Array();
 choices[44][0] = "Workflow de administraci&oacute;n";
 choices[44][1] = "Workflow de colaboraci&oacute;n";
 choices[44][2] = "Workflow de coordinaci&oacute;n";
 choices[44][3] = "Workflow de producci&oacute;n";
 answers[44] = choices[44][2];
 units[44] = "71";
 comments[44] = "Id Pregunta: 5731. ";


//  Id pregunta: 5823 AÃ±o de creación de pregunta: 2009-01-01
 questions[45]= "46)  Seg&uacute;n Magerit versi&oacute;n 2 en un proyecto de an&aacute;lisis de gesti&oacute;n de riesgos qu&eacute; documento de los citados a continuaci&oacute;n NO se genera en el Proceso de Planificaci&oacute;n:";
 choices[45]= new Array();
 choices[45][0] = "Tipolog&iacute;a de activos";
 choices[45][1] = "Dimensiones de seguridad relevantes";
 choices[45][2] = "Criterios de evaluaci&oacute;n";
 choices[45][3] = "Modelo de valor";
 answers[45] = choices[45][3];
 units[45] = "33";
 comments[45] = "Id Pregunta: 5823. MAP 2008 A1";


//  Id pregunta: 5921 AÃ±o de creación de pregunta: 2009-01-01
 questions[46]= "47)  En relaci&oacute;n a la ITU (International Telecommunication Union), indique cu&aacute;l de los siguientes NO se corresponde con un sector estrat&eacute;gico de la misma:";
 choices[46]= new Array();
 choices[46][0] = "Radiocomunicaciones (ITU-R)";
 choices[46][1] = "Estandarizaci&oacute;n (ITU-T)";
 choices[46][2] = "Seguridad (ITU-S)";
 choices[46][3] = "Desarrollo (ITU-D)";
 answers[46] = choices[46][2];
 units[46] = "42";
 comments[46] = "Id Pregunta: 5921. MAP 2008 A1";


//  Id pregunta: 5987 AÃ±o de creación de pregunta: 2010-01-01
 questions[47]= "48)  De acuerdo con la normativa vigente en materia de protecci&oacute;n jur&iacute;dica de los programas de ordenador, &iquest;durante cu&aacute;nto tiempoestar&aacute;n protegidos los derechos de explotaci&oacute;n de un manual de uso de un programa obra de una persona natural?";
 choices[47]= new Array();
 choices[47][0] = "100 a&ntilde;os desde su publicaci&oacute;n, despu&eacute;s pasa a dominio p&uacute;blico.";
 choices[47][1] = "Como es una obra impresa, tiene la consideraci&oacute;n de obra literaria y se protege durante la vida del autor y 60 a&ntilde;os despu&eacute;s de su muerte o declaraci&oacute;n de fallecimiento.";
 choices[47][2] = "A estos efectos, el manual se considera parte del programa y se protege durante la vida del autor y 70 a&ntilde;os despu&eacute;s de su muerte o declaraci&oacute;n de fallecimiento.";
 choices[47][3] = "Depende, si el manual est&aacute; impreso, entonces la protecci&oacute;n es la vida del autor y 50 a&ntilde;os despu&eacute;s de su muerte y si es un tutorial no impreso, entonces es la vida del autor y 40 a&ntilde;os despu&eacute;s de su muerte.";
 answers[47] = choices[47][2];
 units[47] = "36";
 comments[47] = "Id Pregunta: 5987. TIC A 2009";


//  Id pregunta: 6091 AÃ±o de creación de pregunta: 2010-01-01
 questions[48]= "49)  En relaci&oacute;n con las metodolog&iacute;as ligeras de desarrollo de software, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[48]= new Array();
 choices[48][0] = "Seg&uacute;n el Manifiesto &Aacute;gil, las personas y su interacci&oacute;n deben prevalecer sobre una aplicaci&oacute;n estricta de los procesos y las herramientas.";
 choices[48][1] = "Seg&uacute;n el Manifiesto &Aacute;gil, el seguimiento del plan debe prevalecer sobre la respuesta al cambio.";
 choices[48][2] = "La versi&oacute;n 3 de M&Eacute;TRICA, que soporta tanto desarrollos estructurados como orientados a objetos, es un claro ejemplo de metodolog&iacute;a ligera.";
 choices[48][3] = "La metodolog&iacute;a RUP-Proceso Unificado de Rational es una metodolog&iacute;a ligera.";
 answers[48] = choices[48][0];
 units[48] = "79";
 comments[48] = "Id Pregunta: 6091. TIC A 2009";


//  Id pregunta: 6141 AÃ±o de creación de pregunta: 2010-01-01
 questions[49]= "50)  &iquest;Qu&eacute; es el MOS (Mean Opinion Score)?";
 choices[49]= new Array();
 choices[49][0] = "Es una medida subjetiva de calidad de sonido, que se suele utilizar en sistemas de VoIP";
 choices[49][1] = "Es una de la pr&aacute;cticas que propone M&eacute;trica 3 para las reuniones de trabajo, junto con las reuniones, las entrevistas y el JAD (Joint Application Design)";
 choices[49][2] = "Es una t&eacute;cnica de estimaci&oacute;n de esfuerzo software, que se utiliza, por ejemplo, cuando no hay datos suficientes para estimar puntos funci&oacute;n";
 choices[49][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[49] = choices[49][0];
 units[49] = "100, 109";
 comments[49] = "Id Pregunta: 6141. ";


//  Id pregunta: 6142 AÃ±o de creación de pregunta: 2010-01-01
 questions[50]= "51)  En relaci&oacute;n con los c&oacute;decs que se utilizan para comprimir la voz en sistemas de VoIP:";
 choices[50]= new Array();
 choices[50][0] = "G.711 proporciona mejor calidad de sonido que G.729";
 choices[50][1] = "G.711 genera una tasa de transferencia menor que G.729";
 choices[50][2] = "Las dos respuestas anteriores son correctas";
 choices[50][3] = "Todas las respuestas anteriores son falsas";
 answers[50] = choices[50][0];
 units[50] = "100, 109";
 comments[50] = "Id Pregunta: 6142. ";


//  Id pregunta: 6213 AÃ±o de creación de pregunta: 2010-01-01
 questions[51]= "52)  Qu&eacute; diagrama nos permite mostrar la disposici&oacute;n de las particiones f&iacute;sicas del sistema de informaci&oacute;n y la asignaci&oacute;n de los componentes software a estas particiones:";
 choices[51]= new Array();
 choices[51][0] = "Diagrama de Componentes";
 choices[51][1] = "Diagrama de Descomposici&oacute;n";
 choices[51][2] = "Diagrama de Despliegue";
 choices[51][3] = "Diagrama de Estructura";
 answers[51] = choices[51][2];
 units[51] = "82";
 comments[51] = "Id Pregunta: 6213. TICB-2009, bloque desarrollo";


//  Id pregunta: 6257 AÃ±o de creación de pregunta: 2010-01-01
 questions[52]= "53)  De qu&eacute; modelo de ciclo de vida del software orientado a objetos son propios los conceptos amplitud, profundidad, madurez, alternativas y alcance";
 choices[52]= new Array();
 choices[52][0] = "Modelo de agrupamiento";
 choices[52][1] = "Modelo fuente";
 choices[52][2] = "Modelo remolino";
 choices[52][3] = "Modelo pinball";
 answers[52] = choices[52][2];
 units[52] = "76";
 comments[52] = "Id Pregunta: 6257. TICB-2009, bloque desarrollo";


//  Id pregunta: 6296 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)  &iquest;Qu&eacute; fases debe pasar la t&eacute;cnica de Brainstorming para que sea efectiva?";
 choices[53]= new Array();
 choices[53][0] = "Fase de Definici&oacute;n, Fase de Generaci&oacute;n y Fase de Consolidaci&oacute;n";
 choices[53][1] = "Fase de Generaci&oacute;n, Fase de Preparaci&oacute;n y Fase de Consolidaci&oacute;n";
 choices[53][2] = "Fase de Preparaci&oacute;n, Fase de Generaci&oacute;n y Fase de Conclusiones";
 choices[53][3] = "Fase de Preparaci&oacute;n, Fase de Generaci&oacute;n y Fase de Consolidaci&oacute;n";
 answers[53] = choices[53][3];
 units[53] = "78";
 comments[53] = "Id Pregunta: 6296. ";


//  Id pregunta: 6321 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  Las reglas de integridad en una base de datos relacional son:";
 choices[54]= new Array();
 choices[54][0] = "Integridad de claves con las claves ajenas";
 choices[54][1] = "Integridad de entidad e integridad referencial";
 choices[54][2] = "Integridad referente a las claves";
 choices[54][3] = "Restricciones de usuario y claves primarias no nulas";
 answers[54] = choices[54][1];
 units[54] = "58";
 comments[54] = "Id Pregunta: 6321. ";


//  Id pregunta: 6418 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  &iquest;Cu&aacute;l es la norma que supone la base de la certificaci&oacute;n europea en Accesibilidad Web?";
 choices[55]= new Array();
 choices[55][0] = "CWA 139803:2004";
 choices[55][1] = "CWA 15554:2006";
 choices[55][2] = "CWA 4568:2007";
 choices[55][3] = "CWA 17002:2005";
 answers[55] = choices[55][1];
 units[55] = "39";
 comments[55] = "Id Pregunta: 6418. NULL";


//  Id pregunta: 6458 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  Una infraestructura de clave p&uacute;blica (PKI) es ";
 choices[56]= new Array();
 choices[56][0] = "Un algoritmo de clave p&uacute;blica, cuya firma digital hace uso de funciones hash de 64 bits";
 choices[56][1] = "El conjunto de certificado de autenticaci&oacute;n y certificado de firma reconocida";
 choices[56][2] = "Una tercera parte de confianza que se encarga de la firma digital de los certificados de usuarios de entorno de clave p&uacute;blica";
 choices[56][3] = "Un conjunto de protocolos, servicios y est&aacute;ndares que soportan aplicaciones basadas en criptograf&iacute;a de clave p&uacute;blica";
 answers[56] = choices[56][3];
 units[56] = "74";
 comments[56] = "Id Pregunta: 6458. Castilla La Mancha 2009";


//  Id pregunta: 6482 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  &iquest;En qu&eacute; lenguaje est&aacute;n definidos los objetos gestionados en SNMP?";
 choices[57]= new Array();
 choices[57][0] = "C++";
 choices[57][1] = "ASN.1";
 choices[57][2] = "trap";
 choices[57][3] = "Java";
 answers[57] = choices[57][1];
 units[57] = "104";
 comments[57] = "Id Pregunta: 6482. Castilla La Mancha 2009";


//  Id pregunta: 6494 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  Seg&uacute;n la Ley Org&aacute;nica 15/1999, el censo promocional es una fuente de acceso p&uacute;blico s&oacute;lo:";
 choices[58]= new Array();
 choices[58][0] = "Durante los cinco &uacute;ltimos a&ntilde;os de vigencia";
 choices[58][1] = "Durante el &uacute;ltimo a&ntilde;o de vigencia";
 choices[58][2] = "Nunca es fuente de acceso p&uacute;blico";
 choices[58][3] = "Siempre que no aparezca el DNI";
 answers[58] = choices[58][1];
 units[58] = "29";
 comments[58] = "Id Pregunta: 6494. Castilla La Mancha 2009";


//  Id pregunta: 6542 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  Un usuario de Kerberos";
 choices[59]= new Array();
 choices[59][0] = "Recibe un ticket para garantizar el acceso TGT";
 choices[59][1] = "El ticket permite al usuario pedir acceso a los distintos recursos";
 choices[59][2] = "El servicio de generaci&oacute;n de tickets TGS genera los tickets con las claves de sesi&oacute;n.";
 choices[59][3] = "Todas las respuestas anteriores son correctas";
 answers[59] = choices[59][3];
 units[59] = "111";
 comments[59] = "Id Pregunta: 6542. NULL";


//  Id pregunta: 6580 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  IPv6";
 choices[60]= new Array();
 choices[60][0] = "Proporciona un formato de cabecera m&aacute;s complejo";
 choices[60][1] = "Proporciona la posibilidad de a&ntilde;adir extensiones pero no opciones";
 choices[60][2] = "A&ntilde;ade posibilidades para gestionar la calidad de servicios";
 choices[60][3] = "Todas las respuestas anteriores son correctas";
 answers[60] = choices[60][2];
 units[60] = "100";
 comments[60] = "Id Pregunta: 6580. NULL";


//  Id pregunta: 6621 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  &iquest;Cu&aacute;l de los siguientes elementos es una T&eacute;cnica y no una Pr&aacute;ctica seg&uacute;n M&eacute;trica v3?";
 choices[61]= new Array();
 choices[61][0] = "JAD (Join Application Design)";
 choices[61][1] = "An&aacute;lisis de Impacto";
 choices[61][2] = "Prototipado";
 choices[61][3] = "Normalizaci&oacute;n";
 answers[61] = choices[61][3];
 units[61] = "86";
 comments[61] = "Id Pregunta: 6621. NULL";


//  Id pregunta: 6632 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[62]= new Array();
 choices[62][0] = "Si aumenta la calidad del producto, los costes de la no-calidad disminuyen";
 choices[62][1] = "Si aumenta la calidad del producto, los costes de la no-calidad aumentan";
 choices[62][2] = "Si aumenta la calidad del producto, el coste del sistema de calidad no aumenta";
 choices[62][3] = "Si aumenta la calidad del producto, el coste del sistema de calidad disminuye";
 answers[62] = choices[62][0];
 units[62] = "87";
 comments[62] = "Id Pregunta: 6632. NULL";


//  Id pregunta: 7319 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  &iquest;Qu&eacute; significan las siglas ASP de la tecnolog&iacute;a ASP.NET?";
 choices[63]= new Array();
 choices[63][0] = "Active Server Pages";
 choices[63][1] = "Active Side Pages";
 choices[63][2] = "Archive Server Pages";
 choices[63][3] = "Archive Side Pages";
 answers[63] = choices[63][0];
 units[63] = "59";
 comments[63] = "Id Pregunta: 7319. NULL";


//  Id pregunta: 7830 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)   Cuando el autor sea una persona jur&iacute;dica, la duraci&oacute;n de los derechos de explotaci&oacute;n de un programa de ordenador ser&aacute; como m&aacute;ximo:";
 choices[64]= new Array();
 choices[64][0] = " 70 a&ntilde;os.";
 choices[64][1] = " 60 a&ntilde;os.";
 choices[64][2] = " 100 a&ntilde;os.";
 choices[64][3] = " 50 a&ntilde;os.";
 answers[64] = choices[64][0];
 units[64] = "NULL";
 comments[64] = "Id Pregunta: 7830. Map 2005";


//  Id pregunta: 8063 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)   De acuerdo al art&iacute;culo 172 del RDL 2/2000, de 16 de junio, la adquisici&oacute;n de programas de ordenador a medida se considera un contrato de:";
 choices[65]= new Array();
 choices[65][0] = " Suministro.";
 choices[65][1] = " Servicios.";
 choices[65][2] = " Leasing.";
 choices[65][3] = " Obra. Map 2008";
 answers[65] = choices[65][1];
 units[65] = "NULL";
 comments[65] = "Id Pregunta: 8063. Map 2007";


//  Id pregunta: 8109 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)   Un Data Warehouse es:";
 choices[66]= new Array();
 choices[66][0] = " Una colecci&oacute;n de datos invariante en el tiempo y no vol&aacute;til.";
 choices[66][1] = " Una colecci&oacute;n de datos orientado a temas, integrados, fijos en el tiempo y no vol&aacute;tiles.";
 choices[66][2] = " Una colecci&oacute;n de datos cambiantes en el tiempo y vol&aacute;til.";
 choices[66][3] = " Una colecci&oacute;n de datos orientado a temas, integrados, cambiantes en el tiempo y no vol&aacute;tiles.";
 answers[66] = choices[66][3];
 units[66] = "NULL";
 comments[66] = "Id Pregunta: 8109. Map 2008";


//  Id pregunta: 8382 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  Una desventaja de la topolog&iacute;a f&iacute;sica de estrella es que:";
 choices[67]= new Array();
 choices[67][0] = "Requiere m&aacute;s cable que la topolog&iacute;a de bus.";
 choices[67][1] = "Se requieren terminadores.";
 choices[67][2] = "Es dif&iacute;cil conectar nuevos nodos a la red,";
 choices[67][3] = "Toda la red se caer&iacute;a si hubiera una ruptura en el cable principal.";
 answers[67] = choices[67][0];
 units[67] = "102";
 comments[67] = "Id Pregunta: 8382. Examen TIC A2 2010";


//  Id pregunta: 8388 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  &iquest;Cu&aacute;l de las siguientes herramientas permite realizar pruebas de regresi&oacute;n en el software?";
 choices[68]= new Array();
 choices[68][0] = "Jmeter.";
 choices[68][1] = "Snort.";
 choices[68][2] = "Atrio.";
 choices[68][3] = "JBPM.";
 answers[68] = choices[68][0];
 units[68] = "86";
 comments[68] = "Id Pregunta: 8388. Examen TIC A2 2010";


//  Id pregunta: 8403 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  Indique cu&aacute;l NO es una de las condiciones que debe cumplir un documento electr&oacute;nico para ser considerado copia electr&oacute;nica aut&eacute;ntica:";
 choices[69]= new Array();
 choices[69][0] = "Que sea autorizada mediante firma electr&oacute;nica.";
 choices[69][1] = "Que incorpore un sello automatizado que refleje el car&aacute;cter de copia en la impresi&oacute;n del documento. ";
 choices[69][2] = "Que la copia sea obtenida conforme a las normas de competencia y procedimiento. ";
 choices[69][3] = "Que el documento electr&oacute;nico original se encuentre en poder de la Administraci&oacute;n.";
 answers[69] = choices[69][1];
 units[69] = "43";
 comments[69] = "Id Pregunta: 8403. Examen TIC A2 2010";


//  Id pregunta: 8451 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  El est&aacute;ndar 802.11b mas conocido como Wifi, trabaja en la banda libre de:";
 choices[70]= new Array();
 choices[70][0] = "2.4 GHz";
 choices[70][1] = "2.4 MHz";
 choices[70][2] = "2.4 THz";
 choices[70][3] = "2 GHz";
 answers[70] = choices[70][0];
 units[70] = "107";
 comments[70] = "Id Pregunta: 8451. Analista Ayto. Madrid 2010";


//  Id pregunta: 8478 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  &iquest;Qu&eacute; tipo de codificaci&oacute;n se utiliza en las redes Ethernet?";
 choices[71]= new Array();
 choices[71][0] = "London";
 choices[71][1] = "Liverpool.";
 choices[71][2] = "Manchester.";
 choices[71][3] = "Boston.";
 answers[71] = choices[71][2];
 units[71] = "101";
 comments[71] = "Id Pregunta: 8478. Examen TIC A2 2010 interna";


//  Id pregunta: 8519 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  Se&ntilde;ale la respuesta correcta de las siguientes afirmaciones sobre el modelo entidad/relaci&oacute;n extendido:";
 choices[72]= new Array();
 choices[72][0] = "Es un requisito el conocer el SGBD en el que se va a implementar.";
 choices[72][1] = "Es dependiente del entorno f&iacute;sico.";
 choices[72][2] = "Se centra en los datos, independientemente del procesamiento que los transforma";
 choices[72][3] = "Debe proporcionar a los usuarios toda la informaci&oacute;n que necesiten garantizando la eficiencia del proceso.";
 answers[72] = choices[72][2];
 units[72] = "57, 58";
 comments[72] = "Id Pregunta: 8519. Examen TIC A2 2010 interna";


//  Id pregunta: 8675 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  En una red MPLS, &iquest;qu&eacute; funci&oacute;n realiza el LSR?";
 choices[73]= new Array();
 choices[73][0] = "Es el elemento que conmuta etiquetas.";
 choices[73][1] = "Es el nombre de un circuito virtual MPLS.";
 choices[73][2] = "Es el elemento que inicia o termina el t&uacute;nel.";
 choices[73][3] = "Es el elemento que conmuta el tr&aacute;fico.";
 answers[73] = choices[73][0];
 units[73] = "100";
 comments[73] = "Id Pregunta: 8675. Examen UPM A2 2011";


//  Id pregunta: 8758 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  En un Sistema Operativo, una planificaci&oacute;n de procesos se denomina &quot;preemptive&quot;:";
 choices[74]= new Array();
 choices[74][0] = "Cuando un proceso no se puede desalojar de la CPU";
 choices[74][1] = "No existe tal denominaci&oacute;n.";
 choices[74][2] = "La prevenci&oacute;n de ejecutar procesos que consuman muchos recursos por el Sistema operativo";
 choices[74][3] = "Cuando un proceso se puedo desalojar de la CPU";
 answers[74] = choices[74][3];
 units[74] = "52";
 comments[74] = "Id Pregunta: 8758. Examen TIC A2 2010 interna";


//  Id pregunta: 8775 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  &iquest;Cu&aacute;l de los siguientes comandos se utilizan para crear un cd boot de una instalaci&oacute;n de Linux?";
 choices[75]= new Array();
 choices[75][0] = "mkboot disk.";
 choices[75][1] = "bootfp disk.";
 choices[75][2] = "ww and rawrite.";
 choices[75][3] = "dd and rawrite.";
 answers[75] = choices[75][3];
 units[75] = "53";
 comments[75] = "Id Pregunta: 8775. Examen UPM A2 2011";


//  Id pregunta: 8801 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  Con relaci&oacute;n a la programaci&oacute;n en java, &iquest;como se denomina el paquete que comprende una serie de clases que permiten crear y organizar ventanas, implementar componentes gr&aacute;ficas de la interfaz, mediante eventos, dibujar textos y gr&aacute;ficos, procesar im&aacute;genes y acceder a cada sistema nativo de ventanas?";
 choices[76]= new Array();
 choices[76][0] = "WT (Window Toolkit)";
 choices[76][1] = "AWT (Abstract Window Toolkit)";
 choices[76][2] = "JWS (Java Window Set)";
 choices[76][3] = "WS (Windows Set)";
 answers[76] = choices[76][1];
 units[76] = "60";
 comments[76] = "Id Pregunta: 8801. Examen UPM A2 2011";


//  Id pregunta: 8857 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  Si en fichero de estilos.css, se incluye: #inner { float: right; width: 130px; color: blue }, &iquest;c&oacute;mo se utilizar&iacute;a el estilo indicado en un p&aacute;rrafo de home.html?";
 choices[77]= new Array();
 choices[77][0] = "&lt;P style=&rdquo;inner&rdquo;&gt;";
 choices[77][1] = "&lt;P id=&rdquo;inner&rdquo;&gt;";
 choices[77][2] = "&lt;P class=&rdquo;inner&rdquo;&gt;";
 choices[77][3] = "&lt;P font=inner&gt;";
 answers[77] = choices[77][1];
 units[77] = "69";
 comments[77] = "Id Pregunta: 8857. Analista Ayto. Madrid 2010";


//  Id pregunta: 8879 AÃ±o de creación de pregunta: 2011-01-01
 questions[78]= "79)  El c&oacute;digo objeto se obtiene a partir de:";
 choices[78]= new Array();
 choices[78][0] = "El c&oacute;digo fuente.";
 choices[78][1] = "El c&oacute;digo m&aacute;quina.";
 choices[78][2] = "El c&oacute;digo clase.";
 choices[78][3] = "El c&oacute;digo de enlazado.";
 answers[78] = choices[78][0];
 units[78] = "82";
 comments[78] = "Id Pregunta: 8879. Examen UPM A2 2011";


//  Id pregunta: 8910 AÃ±o de creación de pregunta: 2011-01-01
 questions[79]= "80)  Los sistemas de cifrado sim&eacute;trico se basan en:";
 choices[79]= new Array();
 choices[79][0] = "Cifrar con la clave privada y descifrar con la clave p&uacute;blica, para garantizar la autenticidad del emisor.";
 choices[79][1] = "Cifrar con una sola clave, y no descifrar en el destino, para salvaguardar la integridad.";
 choices[79][2] = "Cifrar y descifrar con la misma clave.";
 choices[79][3] = "Cifrar con la clave p&uacute;blica y descifrar con la privada, para garantizar la confidencialidad";
 answers[79] = choices[79][2];
 units[79] = "72";
 comments[79] = "Id Pregunta: 8910. Operador Ayto. Madrid 2010";


//  Id pregunta: 9116 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  &iquest;Qu&eacute; es la segmentaci&oacute;n?";
 choices[80]= new Array();
 choices[80][0] = "T&eacute;cnica de solapamiento de instrucciones mediante la divisi&oacute;n de su ejecuci&oacute;n en etapas o segmentos.";
 choices[80][1] = "Los segmentos est&aacute;n conectados entre s&iacute; y cada uno al siguiente.";
 choices[80][2] = "Todos los segmentos proceden y progresan a la vez";
 choices[80][3] = "Todas las respuestas son correctas";
 answers[80] = choices[80][3];
 units[80] = "45";
 comments[80] = "Id Pregunta: 9116. ";


//  Id pregunta: 9328 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  &iquest;C&uacute;al de los siguientes aspectos NO se recogen en las";
 choices[81]= new Array();
 choices[81][0] = "El cableado deber&aacute; estar de acuerdo con los requerimientos de nivel f&iacute;sico de la iso 80211";
 choices[81][1] = "El cableado deber&aacute; estar de acuerdo con los requerimientos de nivel f&iacute;sico de la iso 8802";
 choices[81][2] = "Se deber&aacute; detallar la ubicaci&oacute;n de equipos activos en el cableado de backbone";
 choices[81][3] = "Se debe detallar el n&uacute;mero de z&oacute;calos del cableado horizontal";
 answers[81] = choices[81][3];
 units[81] = "99";
 comments[81] = "Id Pregunta: 9328. NULL";


//  Id pregunta: 9365 AÃ±o de creación de pregunta: 2013-01-01
 questions[82]= "83)  Acerca de Fibre Channel, se puede decir:";
 choices[82]= new Array();
 choices[82][0] = "El protocolo sigue el model de referencia OSI.";
 choices[82][1] = "Es un protocolo con 5 capas. ";
 choices[82][2] = "La capa FC3 es la capa de mapeo de protocolo.";
 choices[82][3] = "Los routers en Fibre Channel operan en la capa 3.";
 answers[82] = choices[82][1];
 units[82] = "101, 48";
 comments[82] = "Id Pregunta: 9365. ";


//  Id pregunta: 9381 AÃ±o de creación de pregunta: 2013-01-01
 questions[83]= "84)  &iquest;A qu&eacute; est&aacute;ndar se refiere WirelessMan-Advanced?";
 choices[83]= new Array();
 choices[83][0] = "802.16m";
 choices[83][1] = "802.16e";
 choices[83][2] = "802.16k";
 choices[83][3] = "802.16-2009";
 answers[83] = choices[83][0];
 units[83] = "101";
 comments[83] = "Id Pregunta: 9381. ";


//  Id pregunta: 9391 AÃ±o de creación de pregunta: 2013-01-01
 questions[84]= "85)  &iquest;A que hace referencia el t&eacute;rmino care-of address?";
 choices[84]= new Array();
 choices[84][0] = "Direcci&oacute;n IPv6 compatible con IPv4. ";
 choices[84][1] = "Direcci&oacute;n IPv4 mapeada en IPv6.";
 choices[84][2] = "Direcci&oacute;n IP temporal para un dispositivo m&oacute;vil.";
 choices[84][3] = "Direcci&oacute;n IP para transacciones de Terminales Punto de Venta (TPV).";
 answers[84] = choices[84][2];
 units[84] = "108";
 comments[84] = "Id Pregunta: 9391. Examen TIC A2 2011 Libre";


//  Id pregunta: 9479 AÃ±o de creación de pregunta: 2013-01-01
 questions[85]= "86)  &iquest;Qu&eacute; m&eacute;todos se pueden utilizar para comparar inversiones con diferente duraci&oacute;n?";
 choices[85]= new Array();
 choices[85][0] = "M&eacute;todo de la anualidad equivalente y m&eacute;todo de la cadena de reemplazo";
 choices[85][1] = "M&eacute;todo de la anualidad equivalente y tasa de rendimiento contable";
 choices[85][2] = "M&eacute;todo de la anualidad equivalente y m&eacute;todo de comparaci&oacute;n de costes";
 choices[85][3] = "M&eacute;todo del payback y m&eacute;todo de la cadena de reemplazo";
 answers[85] = choices[85][0];
 units[85] = "38";
 comments[85] = "Id Pregunta: 9479. ";


//  Id pregunta: 9519 AÃ±o de creación de pregunta: 2013-01-01
 questions[86]= "87)  Java dispone de diferentes APIs con el fin de dar soporte para web services. La API que no est&aacute; relacionada con web services es:";
 choices[86]= new Array();
 choices[86][0] = "JAXR";
 choices[86][1] = "JAXB";
 choices[86][2] = "JAXP";
 choices[86][3] = "JTA";
 answers[86] = choices[86][3];
 units[86] = "116";
 comments[86] = "Id Pregunta: 9519. NULL";


//  Id pregunta: 9549 AÃ±o de creación de pregunta: 2013-01-01
 questions[87]= "88)  Seg&uacute;n la Ley de Firma Electr&oacute;nica, indique cu&aacute;l NO es una circunstancia que se tendr&aacute; en cuenta para graduar la cuant&iacute;a de una sanci&oacute;n impuesta:";
 choices[87]= new Array();
 choices[87][0] = "El &aacute;mbito geogr&aacute;fico al que es aplicable la comisi&oacute;n de la infracci&oacute;n";
 choices[87][1] = "La existencia de intencionalidad, reincidencia o reiteraci&oacute;n";
 choices[87][2] = "El plazo de tiempo durante el cual se ha venido cometiendo la infracci&oacute;n";
 choices[87][3] = "El beneficio que haya reportado al infractor la infracci&oacute;n cometida.";
 answers[87] = choices[87][0];
 units[87] = "30";
 comments[87] = "Id Pregunta: 9549. Ley 59/2003, art&iacute;culo 33";


//  Id pregunta: 9611 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  &iquest;Qu&eacute; es el FSQL?";
 choices[88]= new Array();
 choices[88][0] = "Una versi&oacute;n de SQL que se usa en la ingenier&iacute;a hacia adelante.";
 choices[88][1] = "Una versi&oacute;n de SQL que se usa para l&oacute;gica difusa";
 choices[88][2] = "Una versi&oacute;n de SQL que se usa para memorias asociativas";
 choices[88][3] = "Una versi&oacute;n de SQL que se usa en sistemas distribuidos";
 answers[88] = choices[88][1];
 units[88] = "58";
 comments[88] = "Id Pregunta: 9611. NULL";


//  Id pregunta: 9706 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  El protocolo TCP es un protocolo";
 choices[89]= new Array();
 choices[89][0] = "orientado a conexi&oacute;n, fiable y de flujo estructurado.";
 choices[89][1] = "orientado a conexi&oacute;n, fiable y de flujo no estructurado.";
 choices[89][2] = "orientado a conexi&oacute;n, no fiable y de flujo no estructurado.";
 choices[89][3] = "no orientado a conexi&oacute;n, no fiable y de flujo no estructurado.";
 answers[89] = choices[89][1];
 units[89] = "100";
 comments[89] = "Id Pregunta: 9706. Examen TIC-A1 2013";


//  Id pregunta: 9766 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  &iquest;Qu&eacute; tipos de tratamiento del riesgo contempla MAGERIT v3?";
 choices[90]= new Array();
 choices[90][0] = "Eliminaci&oacute;n, Mitigaci&oacute;n, Compartici&oacute;n, Financiaci&oacute;n.";
 choices[90][1] = "Eliminaci&oacute;n, Reducci&oacute;n, Compartic&oacute;n, Financiaci&oacute;n.";
 choices[90][2] = "Exterminaci&oacute;n, Mitigaci&oacute;n, Compartici&oacute;n, Financiaci&oacute;n.";
 choices[90][3] = "Compartici&oacute;n, Reducci&oacute;n, Traspaso, Compartici&oacute;n.";
 answers[90] = choices[90][0];
 units[90] = "98";
 comments[90] = "Id Pregunta: 9766. NULL";


//  Id pregunta: 9864 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  &iquest;A qu&eacute; tipo de ataque pertenece el denominado ping de la muerte?";
 choices[91]= new Array();
 choices[91][0] = "Spoofing.";
 choices[91][1] = "Man in the middle.";
 choices[91][2] = "Denial of Service.";
 choices[91][3] = "Flooding.";
 answers[91] = choices[91][2];
 units[91] = "111";
 comments[91] = "Id Pregunta: 9864. Examen TIC del Servicio de Salud de Extremadura 2014";


//  Id pregunta: 9950 AÃ±o de creación de pregunta: 2014-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l de las siguientes actividades forma parte de la Planificaci&oacute;n de los Sistemas de Informaci&oacute;n seg&uacute;n M&eacute;trica 3?";
 choices[92]= new Array();
 choices[92][0] = "Estudio de los Sistemas de Informaci&oacute;n Actuales. ";
 choices[92][1] = "Definici&oacute;n de los Requisitos del Sistema.";
 choices[92][2] = "Valoraci&oacute;n de Alternativas.";
 choices[92][3] = "Definici&oacute;n del sistema. ";
 answers[92] = choices[92][0];
 units[92] = "86";
 comments[92] = "Id Pregunta: 9950. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10260 AÃ±o de creación de pregunta: 2014-01-01
 questions[93]= "94)  Si se deniega al interesado el ejercicio de su derecho de cancelaci&oacute;n de datos de car&aacute;cter personal, &eacute;ste puede:";
 choices[93]= new Array();
 choices[93][0] = "Ponerlo en conocimiento de la Agencia de Protecci&oacute;n de Datos y, si no est&aacute; de acuerdo con su resoluci&oacute;n, presentar recurso de alzada";
 choices[93][1] = "Ponerlo en conocimiento de la Agencia de Protecci&oacute;n de Datos y, si no est&aacute; de acuerdo con su resoluci&oacute;n, presentar recurso contencioso-administrativo";
 choices[93][2] = "Ponerlo en conocimiento de la Agencia de Protecci&oacute;n de Datos cuyos actos no son recurribles ni en v&iacute;a administrativa ni judicial";
 choices[93][3] = "Todas son incorrectas";
 answers[93] = choices[93][1];
 units[93] = "29";
 comments[93] = "Id Pregunta: 10260. Art&iacute;culo 18.2 y 18.4 de la Ley 15/1999";


//  Id pregunta: 11072 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Hay 7 diferentes estrategias de externalizaci&oacute;n que una compa&ntilde;&iacute;a puede emplear, &iquest;cu&aacute;l es la forma m&aacute;s reciente de outsourcing?";
 choices[94]= new Array();
 choices[94][0] = "Outsourcing del Proceso de Conocimiento";
 choices[94][1] = "Asociaci&oacute;n o multi-sourcing";
 choices[94][2] = "Outsourcing de Procesos de Negocio (Business Process Outsourcing BPO)";
 choices[94][3] = "Provisi&oacute;n de Servicios de Aplicaci&oacute;n";
 answers[94] = choices[94][0];
 units[94] = "98";
 comments[94] = "Id Pregunta: 11072. ";


//  Id pregunta: 11202 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Cu&aacute;l de los siguientes no es un pilar de la Agenda Digital Europea?";
 choices[95]= new Array();
 choices[95][0] = "Internacionalizaci&oacute;n de empresas tecnol&oacute;gicas";
 choices[95][1] = "Fomentar la alfabetizaci&oacute;n e inclusi&oacute;n digital";
 choices[95][2] = "Acceso r&aacute;pido y ultrarr&aacute;pido a internet";
 choices[95][3] = "Beneficios TIC para la Sociedad UE";
 answers[95] = choices[95][0];
 units[95] = "30";
 comments[95] = "Id Pregunta: 11202. ";


//  Id pregunta: 11226 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  A partir de que versi&oacute;n adopt&oacute; la antigua Sun Microsystem un cambio en la nomenclatura de las versiones en sus productos Java.";
 choices[96]= new Array();
 choices[96][0] = "Hasta la versi&oacute;n 1.2, siendo la versi&oacute;n 3.0 la primera en numerarse de esta forma.";
 choices[96][1] = "Hasta la versi&oacute;n 1.3, siendo la versi&oacute;n 4.0 la primera en numerarse de esta forma.";
 choices[96][2] = "Hasta la versi&oacute;n 1.4, siendo la versi&oacute;n 5.0 la primera en numerarse de esta forma.";
 choices[96][3] = "El versionado ha sido siempre 1.x.";
 answers[96] = choices[96][2];
 units[96] = "116";
 comments[96] = "Id Pregunta: 11226. ";


//  Id pregunta: 11432 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Seg&uacute;n la Ley 9/2014, &iquest;cu&aacute;l de los siguientes no es un derecho del usuario de telecomunicaciones?:";
 choices[97]= new Array();
 choices[97][0] = "A oponerse a recibir llamadas comerciales no deseadas, en todo caso.";
 choices[97][1] = "A que no se traten sus datos de localizaci&oacute;n, en todo caso.";
 choices[97][2] = "A no figurar en las gu&iacute;as de abonados, en todo caso.";
 choices[97][3] = "Ninguno es un derecho del usuario.";
 answers[97] = choices[97][3];
 units[97] = "110";
 comments[97] = "Id Pregunta: 11432. ";


//  Id pregunta: 11482 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Seg&uacute;n el art&iacute;culo 6 de la Ley de Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas 39/2015, relativo a los registros electr&oacute;nicos de apoderamientos, los poderes inscritos en dicho registro tendr&aacute;n una validez m&aacute;xima";
 choices[98]= new Array();
 choices[98][0] = "De 5 a&ntilde;os a contar desde la fecha de inscripci&oacute;n.";
 choices[98][1] = "De 4 a&ntilde;os a contar desde la fecha de inscripci&oacute;n.";
 choices[98][2] = "De 2 a&ntilde;os a contar desde la fecha de inscripci&oacute;n.";
 choices[98][3] = "De 10 a&ntilde;os a contar desde la fecha de inscripci&oacute;n.";
 answers[98] = choices[98][0];
 units[98] = "43";
 comments[98] = "Id Pregunta: 11482. NULL";


//  Id pregunta: 11758 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;C&oacute;mo se llama la plataforma de contrataci&oacute;n de la Administraci&oacute;n General del Estado?";
 choices[99]= new Array();
 choices[99][0] = "Conecta-Patrimonio";
 choices[99][1] = "Conecta-Centralizaci&oacute;n";
 choices[99][2] = "Plataforma-Centraliza";
 choices[99][3] = "Centralizacion-ofertas";
 answers[99] = choices[99][1];
 units[99] = "41";
 comments[99] = "Id Pregunta: 11758. ";


