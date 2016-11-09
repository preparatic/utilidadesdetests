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

//  Id pregunta: 686 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  El R.D 209/2003:";
 choices[0]= new Array();
 choices[0][0] = "Sustituye completamente al R.D. 263/1996";
 choices[0][1] = "Ampl&iacute;a al R.D. 263/1996";
 choices[0][2] = "Complementa, pero no se superpone, al R.D. 263/1996";
 choices[0][3] = "Es completamente independiente del R.D. 263/1996, no tienen nada que ver";
 answers[0] = choices[0][1];
 units[0] = "30";
 comments[0] = "Id Pregunta: 686. ";


//  Id pregunta: 698 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  Un sistema multiproceso NUMA se diferencia de uno SMP en:";
 choices[1]= new Array();
 choices[1][0] = "Su menor escalabilidad.";
 choices[1][1] = "Su utilizaci&oacute;n de una red de &aacute;rea local en lugar de un bus para la comunicaci&oacute;n entre CPU's.";
 choices[1][2] = "Su utilizaci&oacute;n de m&aacute;s de un bus para comunicar CPU's y memoria.";
 choices[1][3] = "Su falta de mecanismos de coherencia de cache.";
 answers[1] = choices[1][2];
 units[1] = "45";
 comments[1] = "Id Pregunta: 698. ";


//  Id pregunta: 776 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  En telecomunicaciones, EFT son las siglas de:";
 choices[2]= new Array();
 choices[2][0] = "Enhanced Fiber Transmission, Transmisi&oacute;n mejorada por fibra &oacute;ptica";
 choices[2][1] = "Electronic Funds Transfer, Transferencia electr&oacute;nica de fondos";
 choices[2][2] = "Enhanced File Transfer, Transmisi&oacute;n mejorada de ficheros";
 choices[2][3] = "Electronic Forms Transfer, Transferencia electr&oacute;nica de formularios";
 answers[2] = choices[2][1];
 units[2] = "70";
 comments[2] = "Id Pregunta: 776. NULL";


//  Id pregunta: 791 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  Seg&uacute;n la licencia GNU GPL (General Public License), &iquest;cu&aacute;l de las siguientes sentencias no es correcta?";
 choices[3]= new Array();
 choices[3][0] = "Disponemos de la libertad de estudiar c&oacute;mo funciona el programa y adaptarlo seg&uacute;n nuestras necesidades";
 choices[3][1] = "Nuestro derecho de autor queda salvaguardado";
 choices[3][2] = "Podemos redistribuir todas las copias que queramos";
 choices[3][3] = "No se puede cobrar dinero por el software libre.";
 answers[3] = choices[3][3];
 units[3] = "61";
 comments[3] = "Id Pregunta: 791. ";


//  Id pregunta: 814 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  Apache:";
 choices[4]= new Array();
 choices[4][0] = "Es un servidor web disponible para plataformas Windows";
 choices[4][1] = "Es una licencia para software libre";
 choices[4][2] = "Es el servidor web libre m&aacute;s utilizado en sistemas Unix/Linux";
 choices[4][3] = "Todas las respuestas anteriores son correctas";
 answers[4] = choices[4][3];
 units[4] = "62";
 comments[4] = "Id Pregunta: 814. ";


//  Id pregunta: 839 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;Cu&aacute;l de las siguientes afirmaciones es incorrecta, si hablamos de las ventajas derivadas del uso de vistas en una Base de datos?:";
 choices[5]= new Array();
 choices[5][0] = "Pueden verse los mismos datos por diferentes usuarios";
 choices[5][1] = "Los intercambios de campos entre tablas f&iacute;sicas son transparentes a las vistas del usuario";
 choices[5][2] = "Los intercambios de campos entre tablas f&iacute;sicas no son transparentes a las vistas del usuario";
 choices[5][3] = "Ocultar campos de datos importantes a los usuarios que no deben ser manipulados";
 answers[5] = choices[5][2];
 units[5] = "57";
 comments[5] = "Id Pregunta: 839. ";


//  Id pregunta: 842 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre data-warehouse es verdadera?";
 choices[6]= new Array();
 choices[6][0] = "Los datos se agregan en conjuntos.";
 choices[6][1] = "La actualizaci&oacute;n de los datos se hace en tiempo real.";
 choices[6][2] = "Est&aacute;n orientados a procesos.";
 choices[6][3] = "&Uacute;nicamente se puede realizar data-mining sobre un sistema data-warehouse.";
 answers[6] = choices[6][0];
 units[6] = "68";
 comments[6] = "Id Pregunta: 842. ";


//  Id pregunta: 904 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Podr&iacute;a decir cu&aacute;l de los siguientes no es un sistema Unix?:";
 choices[7]= new Array();
 choices[7][0] = "AIX";
 choices[7][1] = "OpenVMS";
 choices[7][2] = "HP-UX";
 choices[7][3] = "Solaris";
 answers[7] = choices[7][1];
 units[7] = "53";
 comments[7] = "Id Pregunta: 904. ";


//  Id pregunta: 910 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Pueden convivir marcos, reglas y restricciones en un mismo sistema basado en conocimiento?:";
 choices[8]= new Array();
 choices[8][0] = "Si";
 choices[8][1] = "No, pero reglas y restricciones si";
 choices[8][2] = "No, pero reglas y marcos si";
 choices[8][3] = "No";
 answers[8] = choices[8][0];
 units[8] = "64";
 comments[8] = "Id Pregunta: 910. ";


//  Id pregunta: 978 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  De las siguientes afirmaciones, indique la correcta respecto a los lenguajes procedimentales:";
 choices[9]= new Array();
 choices[9][0] = "En un lenguaje procedimental, se indica c&oacute;mo hay que realizar la acci&oacute;n";
 choices[9][1] = "En un lenguaje procedimental, se indica que resultado se quiere obtener";
 choices[9][2] = "Los lenguajes procedimentales son lenguajes de cuarta generaci&oacute;n";
 choices[9][3] = "Es cierto &lsquo;a&rsquo; y &lsquo;c&rsquo;";
 answers[9] = choices[9][0];
 units[9] = "63";
 comments[9] = "Id Pregunta: 978. ";


//  Id pregunta: 986 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  Dentro de los discos &oacute;pticos, los denominados WORM:";
 choices[10]= new Array();
 choices[10][0] = "Permiten escribir, borrar y leer datos de la misma forma que un disco  duro magn&eacute;tico";
 choices[10][1] = "Permiten al usuario escribir sobre un disco de forma imborrable";
 choices[10][2] = "No permiten al usuario escribir sobre el disco, pero s&iacute; puede leerse";
 choices[10][3] = "Permiten al usuario escribir sobre un disco y el borrado por una sola vez";
 answers[10] = choices[10][1];
 units[10] = "48";
 comments[10] = "Id Pregunta: 986. ";


//  Id pregunta: 1026 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Entre los componentes de un sistema inform&aacute;tico:";
 choices[11]= new Array();
 choices[11][0] = "Dentro del subsistema l&oacute;gico, el software de tiempo real se considera software de base";
 choices[11][1] = "Los montadores/cargadores unen un programa compilado en c&oacute;digo objeto con subrutinas del sistema y del usuario";
 choices[11][2] = "La arquitectura distribuida se divide en SISD, SIMD, MISD, MIMD";
 choices[11][3] = "Overlap o solapamiento es el porcentaje de tiempo de CPU en que la CPU atiende al sistema operativo y a las funciones de supervisi&oacute;n y no a las funciones de usuario";
 answers[11] = choices[11][1];
 units[11] = "52";
 comments[11] = "Id Pregunta: 1026. ";


//  Id pregunta: 1029 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Firmar un mensaje electr&oacute;nico:";
 choices[12]= new Array();
 choices[12][0] = "Es lo mismo que cifrarlo";
 choices[12][1] = "Es lo mismo que codificarlo";
 choices[12][2] = "Garantiza la confidencialidad";
 choices[12][3] = "Garantiza la integridad, autenticaci&oacute;n y no repudio";
 answers[12] = choices[12][3];
 units[12] = "72";
 comments[12] = "Id Pregunta: 1029. ";


//  Id pregunta: 1056 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  El sistema Windows 2003, en su versi&oacute;n cliente:";
 choices[13]= new Array();
 choices[13][0] = "Es el primer sistema cliente de Microsoft en incluir de serie la estrategia.net";
 choices[13][1] = "Incluye facilidades avanzadas para discapacitados";
 choices[13][2] = "Las respuestas 'a' y 'b' son correctas";
 choices[13][3] = "No existe";
 answers[13] = choices[13][3];
 units[13] = "56";
 comments[13] = "Id Pregunta: 1056. ";


//  Id pregunta: 1060 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  El t&eacute;rmino &quot;aleatorio&quot; en las memoria RAM se refiere a que:";
 choices[14]= new Array();
 choices[14][0] = "el acceso no sigue un cronograma concreto sino que puede producirse aleatoriamente en cualquier momento de un intervalo limitado";
 choices[14][1] = "el orden de varias operaciones de acceso (lectura y/o escritura) simult&aacute;neas es aleatorio para evitar colisiones, similar a la t&eacute;cnica usada en Ethernet";
 choices[14][2] = "se puede acceder a cualquier byte de memoria sin pasar por los bytes precedentes, esto es, no es un acceso secuencial";
 choices[14][3] = "ninguna de las razones anteriores es la correcta";
 answers[14] = choices[14][2];
 units[14] = "47";
 comments[14] = "Id Pregunta: 1060. ";


//  Id pregunta: 1072 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  En cuanto a las t&eacute;cnicas de representaci&oacute;n del conocimiento, podemos afirmar que:";
 choices[15]= new Array();
 choices[15][0] = "Un Sistema Basado en el Conocimiento (SBC) es un sistema inform&aacute;tico cuya principal caracter&iacute;stica reside en que el conocimiento necesario para resolver un problema aparece como estructura procesable separada del procedimiento que la manipula";
 choices[15][1] = "Los mecanismos de inferencia son paradigmas de representaci&oacute;n utilizados en las bases de conocimiento de los SBC";
 choices[15][2] = "La representaci&oacute;n param&eacute;trica est&aacute; basada en una concepci&oacute;n epistemol&oacute;gica del mundo en t&eacute;rminos de conceptos";
 choices[15][3] = "Las representaciones de tipo simb&oacute;lico est&aacute;n basadas en una visi&oacute;n del mundo de tipo fisiol&oacute;gico, tales como las redes neuronales";
 answers[15] = choices[15][0];
 units[15] = "64";
 comments[15] = "Id Pregunta: 1072. ";


//  Id pregunta: 1114 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  En las bases de datos orientadas a objeto, para cuantificar el movimiento existente entre la entrada a las bases de datos y la salida se emplean dos sistemas que se conocen como:";
 choices[16]= new Array();
 choices[16][0] = "Creatividad y destructividad de los objetos";
 choices[16][1] = "Tasa e incremento de variaci&oacute;n de los objetos ";
 choices[16][2] = "Intervalo y tiempo de vida de los objetos";
 choices[16][3] = "Din&aacute;mica fuerte y din&aacute;mica d&eacute;bil";
 answers[16] = choices[16][3];
 units[16] = "57";
 comments[16] = "Id Pregunta: 1114. ";


//  Id pregunta: 1182 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Indique la afirmaci&oacute;n falsa sobre sistemas en tiempo real.";
 choices[17]= new Array();
 choices[17][0] = "El sistema operativo de tiempo real deber&aacute; contar con gesti&oacute;n de memoria virtual.";
 choices[17][1] = "Los sistemas de tiempo real se basan en la realimentaci&oacute;n de la informaci&oacute;n.";
 choices[17][2] = "El sistema deber&aacute; permanecer pr&aacute;cticamente inactivo para poder atender con la mayor rapidez posible cualquier evento de entrada.";
 choices[17][3] = "El sistema operativo de tiempo real deber&aacute; contar con bloqueo de los procesos cuando est&eacute;n espera y, normalmente, gesti&oacute;n FIFO de las colas de procesos bloqueados.";
 answers[17] = choices[17][0];
 units[17] = "83";
 comments[17] = "Id Pregunta: 1182. ";


//  Id pregunta: 1247 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  La Unidad Aritm&eacute;tico L&oacute;gica es la encargada de realizar operaciones realizadas por circuitos electr&oacute;nicos denominados operadores, que se pueden clasificar:";
 choices[18]= new Array();
 choices[18][0] = "Seg&uacute;n su realizaci&oacute;n, los operadores pueden ser aleatorios o secuenciales";
 choices[18][1] = "Por el tipo de operaci&oacute;n realizada : l&oacute;gicas (NOT, AND, OR, XOR) y aritm&eacute;ticas. (suma, resta multiplicaci&oacute;n, divisi&oacute;n, complementaci&oacute;n)";
 choices[18][2] = "En paralelo, se realiza sobre todos los d&iacute;gitos binarios de los operandos al mismo tiempo, en serie se procesa la operaci&oacute;n d&iacute;gito a d&iacute;gito";
 choices[18][3] = "De desplazamiento, utilizando un operador de suma-resta y el algoritmo adecuado";
 answers[18] = choices[18][2];
 units[18] = "47";
 comments[18] = "Id Pregunta: 1247. ";


//  Id pregunta: 1320 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  RPC's o Remote Procedure Calls est&aacute;n asocadas con:";
 choices[19]= new Array();
 choices[19][0] = "Redes y Sistemas distribuidos";
 choices[19][1] = "Modelo cliente-servidor";
 choices[19][2] = "Sesiones orientadas a no conexi&oacute;n";
 choices[19][3] = "Todas las respuestas anteriores son correctas";
 answers[19] = choices[19][3];
 units[19] = "50";
 comments[19] = "Id Pregunta: 1320. ";


//  Id pregunta: 1324 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  SAMBA:";
 choices[20]= new Array();
 choices[20][0] = "Implementa los protocolos de los servidores de archivos Windows";
 choices[20][1] = "Permite que un servidor Unix sea controlador de dominio en una red Windows";
 choices[20][2] = "Permite la compartici&oacute;n de las colas de impresi&oacute;n Unix con Windows y viceversa";
 choices[20][3] = "Todas las anteriores respuestas son ciertas";
 answers[20] = choices[20][3];
 units[20] = "54";
 comments[20] = "Id Pregunta: 1324. NULL";


//  Id pregunta: 1338 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  Seg&uacute;n la taxonom&iacute;a de Flynn de arquitecturas con proceso en paralelo, una m&aacute;quina MISD:";
 choices[21]= new Array();
 choices[21][0] = "Es la que se corresponde con la arquitectura de Von Neumann";
 choices[21][1] = "Es la estructura de un sistema con multiprocesador";
 choices[21][2] = "Es una superestructura pipe-line formada por varios procesadores, en la que cada uno hace parte del proceso sobre el flujo de datos que circula entre ellos";
 choices[21][3] = "No se corresponde con nada de lo anterior";
 answers[21] = choices[21][2];
 units[21] = "45";
 comments[21] = "Id Pregunta: 1338. ";


//  Id pregunta: 1339 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Seg&uacute;n la WfMC, un workflow se define como:";
 choices[22]= new Array();
 choices[22][0] = "Automatizaci&oacute;n de un procedimiento de negocio, durente la cual los documentos, la informaci&oacute;n o las tareas pasan de un participante a otro de acuerdo a un conjunto de reglas de procedimiento";
 choices[22][1] = "Una descripci&oacute;n de una pieza de trabajo que forma un paso l&oacute;gico dentro de un proceso";
 choices[22][2] = "La representaci&oacute;n del trabajo que tiene que ser procesado (por un participante) en el contexto de una actividad dentro de un proceso";
 choices[22][3] = "El software que controla la ejecuci&oacute;n de programas en los mainframes, enviando mensajes a las consolas cuando se detecta alguna incidencia";
 answers[22] = choices[22][0];
 units[22] = "71";
 comments[22] = "Id Pregunta: 1339. ";


//  Id pregunta: 1355 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Se&ntilde;ale la respuesta falsa. Una unidad de control cableada:";
 choices[23]= new Array();
 choices[23][0] = "Es m&aacute;s r&aacute;pida de lo normal";
 choices[23][1] = "Es muy cara de dise&ntilde;ar";
 choices[23][2] = "Es reprogramable f&aacute;cilmente";
 choices[23][3] = "Ninguna de las anteriores respuestas es falsa";
 answers[23] = choices[23][2];
 units[23] = "47";
 comments[23] = "Id Pregunta: 1355. ";


//  Id pregunta: 1356 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Se&ntilde;ale la sentencia correcta respecto a los m&eacute;todos de resoluci&oacute;n de problemas:";
 choices[24]= new Array();
 choices[24][0] = "El m&eacute;todo GPS (General Problem Solver) consiste en almacenar en un momento dado el camino recorrido desde la ra&iacute;z mediante el empleo de funciones recursivas";
 choices[24][1] = "El m&eacute;todo STRIPS (Stanford Research Institute Problem Solver) une la filosof&iacute;a GPS con las t&eacute;cnicas de b&uacute;squeda en profundidad";
 choices[24][2] = "El m&eacute;todo GPS consiste en descomponer un problema de manera sistem&aacute;tica en subproblemas";
 choices[24][3] = "El m&eacute;todo STRIPS no puede representar conceptos y deducir a partir de ellos nuevos hechos mediante las reglas de deducci&oacute;n";
 answers[24] = choices[24][2];
 units[24] = "63";
 comments[24] = "Id Pregunta: 1356. ";


//  Id pregunta: 1467 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  La extensi&oacute;n de los documentos de plantillas en MS Word es:";
 choices[25]= new Array();
 choices[25][0] = "Doc";
 choices[25][1] = "Dot";
 choices[25][2] = "Pln";
 choices[25][3] = "Std";
 answers[25] = choices[25][1];
 units[25] = "52";
 comments[25] = "Id Pregunta: 1467. ";


//  Id pregunta: 1483 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  Un monitor de 20 pulgadas efectivas y de 1600 x 1200 puntos con 256 tonos de grises produce una resoluci&oacute;n de:";
 choices[26]= new Array();
 choices[26][0] = "300 dpi";
 choices[26][1] = "30 dpi";
 choices[26][2] = "100 dpi";
 choices[26][3] = "50 dpi";
 answers[26] = choices[26][2];
 units[26] = "47";
 comments[26] = "Id Pregunta: 1483. ";


//  Id pregunta: 1486 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  &iquest;Cu&aacute;l de las siguientes afirmaciones no es verdadera respecto a la criptograf&iacute;a?:";
 choices[27]= new Array();
 choices[27][0] = "Los algoritmos &quot;stream&quot; son los mas rapidos";
 choices[27][1] = "Los algoritmos &quot;stream&quot; y &quot;block&quot; son equiparables";
 choices[27][2] = "La  velocidad no tiene ninguna correlaci&oacute;n con la longitud de clave ";
 choices[27][3] = "3DES es m&aacute;s seguro y lento que DES";
 answers[27] = choices[27][1];
 units[27] = "73";
 comments[27] = "Id Pregunta: 1486. ";


//  Id pregunta: 1501 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  Un PDA:";
 choices[28]= new Array();
 choices[28][0] = "No permite la navegaci&oacute;n en Internet";
 choices[28][1] = "No puede conectarse a un PC";
 choices[28][2] = "Puede llevar instalado Windows";
 choices[28][3] = "Todas las anteriores son ciertas";
 answers[28] = choices[28][2];
 units[28] = "47";
 comments[28] = "Id Pregunta: 1501. ";


//  Id pregunta: 1519 AÃ±o de creación de pregunta: 2003-01-01
 questions[29]= "30)  Caracter&iacute;stica falsa de los archivos .jar";
 choices[29]= new Array();
 choices[29][0] = "Es un acr&oacute;nimo de Java ARchives";
 choices[29][1] = " Puede incluir un subdirectorio META-INF";
 choices[29][2] = " Puede incluir un fichero MANIFEST.MF";
 choices[29][3] = "Puede incluir clases e im&aacute;genes pero no sonidos ";
 answers[29] = choices[29][3];
 units[29] = "60";
 comments[29] = "Id Pregunta: 1519. NULL";


//  Id pregunta: 1534 AÃ±o de creación de pregunta: 2003-01-01
 questions[30]= "31)  &iquest; Cu&aacute;l de los siguientes no es un SGBD del tipo open source ?";
 choices[30]= new Array();
 choices[30][0] = "MySql";
 choices[30][1] = "PostgreSQL";
 choices[30][2] = "SQLite";
 choices[30][3] = "Zope";
 answers[30] = choices[30][3];
 units[30] = "61,62";
 comments[30] = "Id Pregunta: 1534. ";


//  Id pregunta: 1544 AÃ±o de creación de pregunta: 2003-01-01
 questions[31]= "32)  &iquest;Qu&eacute; es Wine?";
 choices[31]= new Array();
 choices[31][0] = "Un emulador X11 para Windows";
 choices[31][1] = "Un emulador X11 para Linux";
 choices[31][2] = "Una implementaci&oacute;n de c&oacute;digo fuente abierto de la API de Windows que funciona sobre una plataforma X11";
 choices[31][3] = "Nada de lo anterior";
 answers[31] = choices[31][2];
 units[31] = "62";
 comments[31] = "Id Pregunta: 1544. ";


//  Id pregunta: 1561 AÃ±o de creación de pregunta: 2003-01-01
 questions[32]= "33)  &iquest;Cu&aacute;l de los siguientes no es un SO para tarjetas?";
 choices[32]= new Array();
 choices[32][0] = " Scfw";
 choices[32][1] = "MultOs";
 choices[32][2] = "Java Card";
 choices[32][3] = " Open Card ";
 answers[32] = choices[32][3];
 units[32] = "74";
 comments[32] = "Id Pregunta: 1561. ";


//  Id pregunta: 1710 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  Un sistema multiusuario es:";
 choices[33]= new Array();
 choices[33][0] = "Un sistema que posee varias CPUs y reparte la carga de trabajo de los programas de aplicaci&oacute;n y de sistemas para dar servicio a un n&uacute;mero concurrente de usuarios";
 choices[33][1] = "Un sistema que posee una sola CPU y reparte la carga de trabajo de los programas de aplicaci&oacute;n y de sistemas para dar servicio a un n&uacute;mero concurrente de usuarios";
 choices[33][2] = "Un sistema inform&aacute;tico que da servicio, mediante la utilizaci&oacute;n compartida de sus recursos, a un n&uacute;mero concurrente de usuarios";
 choices[33][3] = "Un sistema inform&aacute;tico que da servicio, mediante la utilizaci&oacute;n compartida de sus recursos, a un n&uacute;mero no concurrente de usuarios";
 answers[33] = choices[33][2];
 units[33] = "52";
 comments[33] = "Id Pregunta: 1710. ";


//  Id pregunta: 1721 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  Cu&aacute;l es la misi&oacute;n del planificador (scheduler) de un SO";
 choices[34]= new Array();
 choices[34][0] = "Seleccionar el proceso que se va a ejecutar a continuaci&oacute;n";
 choices[34][1] = "Poner en ejecuci&oacute;n el proceso seleccionado";
 choices[34][2] = "Controlar la memoria principal";
 choices[34][3] = "Expulsar al proceso en ejecuci&oacute;n";
 answers[34] = choices[34][0];
 units[34] = "52";
 comments[34] = "Id Pregunta: 1721. ";


//  Id pregunta: 1740 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  En un Active Directory el conjunto de atributos de un objeto dado se denomina:";
 choices[35]= new Array();
 choices[35][0] = "Container.";
 choices[35][1] = "Scheme.";
 choices[35][2] = "&Aacute;rbol.";
 choices[35][3] = "Site.";
 answers[35] = choices[35][1];
 units[35] = "56";
 comments[35] = "Id Pregunta: 1740. ";


//  Id pregunta: 1767 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  En Java a una colecci&oacute;n de clases relacionadas se denomina:";
 choices[36]= new Array();
 choices[36][0] = "Superset o superconjunto.";
 choices[36][1] = "Package o paquete.";
 choices[36][2] = "Superclass o Superclase.";
 choices[36][3] = "Colection o Colecci&oacute;n.";
 answers[36] = choices[36][1];
 units[36] = "60";
 comments[36] = "Id Pregunta: 1767. NULL";


//  Id pregunta: 1815 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  &iquest;Qu&eacute; utilidad puede tener el Data Mining?";
 choices[37]= new Array();
 choices[37][0] = "Predecir valores futuros en base a los datos actuales.";
 choices[37][1] = "Descubrimiento de fraude.";
 choices[37][2] = "Descubrimiento de patrones en los datos.";
 choices[37][3] = "Todas las anteriores.";
 answers[37] = choices[37][3];
 units[37] = "68";
 comments[37] = "Id Pregunta: 1815. ";


//  Id pregunta: 1825 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  Las tablas primarias en el modelo dimensional de un Datawarehouse y que contienen los valores y metricas se conocen como:";
 choices[38]= new Array();
 choices[38][0] = "Tablas de dimensiones.";
 choices[38][1] = "Tablas maestras.";
 choices[38][2] = "Tablas de hechos.";
 choices[38][3] = "Tablas externas.";
 answers[38] = choices[38][2];
 units[38] = "68";
 comments[38] = "Id Pregunta: 1825. ";


//  Id pregunta: 1836 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  El comercio electr&oacute;nico que se produce cuando se realiza una venta de un producto por Internet se identifica como:";
 choices[39]= new Array();
 choices[39][0] = "B2B";
 choices[39][1] = "B2C";
 choices[39][2] = "B2A";
 choices[39][3] = "B2G";
 answers[39] = choices[39][1];
 units[39] = "70";
 comments[39] = "Id Pregunta: 1836. NULL";


//  Id pregunta: 1837 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  El protocolo SET (Secure Electronic Transaction) se puede transportar sobre:";
 choices[40]= new Array();
 choices[40][0] = "TCP";
 choices[40][1] = "SMTP";
 choices[40][2] = "HTTP";
 choices[40][3] = "Todas las anteriores";
 answers[40] = choices[40][3];
 units[40] = "70";
 comments[40] = "Id Pregunta: 1837. NULL";


//  Id pregunta: 1865 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  &iquest;Qu&eacute; es falso respecto a LDAP?";
 choices[41]= new Array();
 choices[41][0] = "Cada entrada cuenta con un nombre DN";
 choices[41][1] = "Representa todos los campos mediante ASN.1";
 choices[41][2] = "Ha eliminado opciones respecto a DAP";
 choices[41][3] = "Las entradas se pueden organizar en &aacute;rbol";
 answers[41] = choices[41][1];
 units[41] = "74";
 comments[41] = "Id Pregunta: 1865. RFC 4514";


//  Id pregunta: 1895 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  La t&eacute;cnica de ocultar un mensaje secreto dentro de un mensaje ordinario y extraerlo en destino se llama";
 choices[42]= new Array();
 choices[42][0] = "algoritmo de clave secreta";
 choices[42][1] = "bytecode";
 choices[42][2] = "esteganograf&iacute;a";
 choices[42][3] = "spyware";
 answers[42] = choices[42][2];
 units[42] = "74";
 comments[42] = "Id Pregunta: 1895. NULL";


//  Id pregunta: 1913 AÃ±o de creación de pregunta: 2006-01-01
 questions[43]= "44)  Dentro del an&aacute;lisis orientado a objetos, la cualidad que se refiere al tiempo durante el cual un objeto permanece accesible en la memoria del ordenador (principal o secundaria), se denomina:";
 choices[43]= new Array();
 choices[43][0] = "Reusabilidad";
 choices[43][1] = "Encapsulaci&oacute;n";
 choices[43][2] = "Abstracci&oacute;n";
 choices[43][3] = "Persistencia";
 answers[43] = choices[43][3];
 units[43] = "82";
 comments[43] = "Id Pregunta: 1913. ";


//  Id pregunta: 1954 AÃ±o de creación de pregunta: 2006-01-01
 questions[44]= "45)  En lo que concierne a los algoritmos de cifrado, la recomendaci&oacute;n PKCS#7 de la compa&ntilde;&iacute;a RSA se refiere a:";
 choices[44]= new Array();
 choices[44][0] = "Formato del sobre digital";
 choices[44][1] = "Formato del certificado digital";
 choices[44][2] = "Sintaxis de la clave privada";
 choices[44][3] = "Algoritmo Diffie-Hellman";
 answers[44] = choices[44][0];
 units[44] = "72";
 comments[44] = "Id Pregunta: 1954. ";


//  Id pregunta: 4242 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  Indique que significan las siglas POJO";
 choices[45]= new Array();
 choices[45][0] = "Plain Over Java Objects";
 choices[45][1] = "Plain Old JavaBean Objects";
 choices[45][2] = "Plain Old Java Objects";
 choices[45][3] = "Ninguna de las anteriores";
 answers[45] = choices[45][2];
 units[45] = "60.116";
 comments[45] = "Id Pregunta: 4242. NULL";


//  Id pregunta: 4243 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  Qu&eacute; es AXIS";
 choices[46]= new Array();
 choices[46][0] = "Un servidor de aplicaciones";
 choices[46][1] = "Un lenguaje de programaci&oacute;n";
 choices[46][2] = "Una implementaci&oacute;n de SOAP para APACHE";
 choices[46][3] = "Un m&eacute;todo as&iacute;ncrono de comunicaci&oacute;n entre servidores.";
 answers[46] = choices[46][2];
 units[46] = "51";
 comments[46] = "Id Pregunta: 4243. NULL";


//  Id pregunta: 4313 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  Indique la respuesta incorrecta. La utilizaci&oacute;n de &ldquo;web farms&rdquo; o granjas de servidores:";
 choices[47]= new Array();
 choices[47][0] = "Libera al usuario final de tener que saber qu&eacute; servidor est&aacute; procesando su petici&oacute;n.";
 choices[47][1] = "Reduce el riesgo de errores de operaciones, con el resultado de que los usuarios finales ven mejorada la fiabilidad y una mayor disponibilidad del sistema.";
 choices[47][2] = "Simplifica notablemente la gesti&oacute;n del sistema; las acciones que afectan a m&uacute;ltiples recursos pueden ser llevadas a cabo con un &uacute;nico comando, mientras que los recursos est&aacute; repartidos entre los m&uacute;ltiples sistemas en diferentes m&aacute;quinas.";
 choices[47][3] = "Minimiza el coste de una instalaci&oacute;n web.";
 answers[47] = choices[47][3];
 units[47] = "49";
 comments[47] = "Id Pregunta: 4313. ";


//  Id pregunta: 4328 AÃ±o de creación de pregunta: 2007-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l de los siguientes no es un elemento relativo a las pruebas del plan de continuidad de una instalaci&oacute;n inform&aacute;tica?";
 choices[48]= new Array();
 choices[48][0] = "Evaluaci&oacute;n del personal involucrado en el ejercicio.";
 choices[48][1] = "Evaluaci&oacute;n de la coordinaci&oacute;n entre el equipo del plan y los proveedores externos.";
 choices[48][2] = "Evaluaci&oacute;n de la capacidad de recuperaci&oacute;n de procesos y datos vitales.";
 choices[48][3] = "Evaluaci&oacute;n de la posibilidad de establecer un acuerdo rec&iacute;proco de respaldo.";
 answers[48] = choices[48][3];
 units[48] = "";
 comments[48] = "Id Pregunta: 4328. ";


//  Id pregunta: 4469 AÃ±o de creación de pregunta: 2007-01-01
 questions[49]= "50)  Los contratos celebrados por v&iacute;a electr&oacute;nica en los que intervenga como parte un consumidor se presumir&aacute;n celebrados en:";
 choices[49]= new Array();
 choices[49][0] = "El lugar donde este establecido el prestador de servicios";
 choices[49][1] = "El lugar donde el consumidor tenga su residencia habitual.";
 choices[49][2] = "El lugar donde este establecida la Comisi&oacute;n Nacional de los Mercados y la Compentencia";
 choices[49][3] = "El lugar donde este establecido el Ministerio competente.";
 answers[49] = choices[49][1];
 units[49] = "30";
 comments[49] = "Id Pregunta: 4469. Ley 34/2002, art&iacute;culo 29";


//  Id pregunta: 4515 AÃ±o de creación de pregunta: 2007-01-01
 questions[50]= "51)  El tipo FLOAT definido por la clase Types de JDBC corresponde al tipo JAVA:";
 choices[50]= new Array();
 choices[50][0] = "double";
 choices[50][1] = "int";
 choices[50][2] = "byte[]";
 choices[50][3] = "Ninguna de las anteriores";
 answers[50] = choices[50][0];
 units[50] = "60";
 comments[50] = "Id Pregunta: 4515. JCED - Preparatic XVII";


//  Id pregunta: 4566 AÃ±o de creación de pregunta: 2007-01-01
 questions[51]= "52)  &iquest;Cual de los siguientes es el sistema de archivos de encriptaci&oacute;n para NTFS?";
 choices[51]= new Array();
 choices[51][0] = "SEE.";
 choices[51][1] = "SCF.";
 choices[51][2] = "EFS.";
 choices[51][3] = "no existe tal sistema de archivos.";
 answers[51] = choices[51][2];
 units[51] = "56";
 comments[51] = "Id Pregunta: 4566. ";


//  Id pregunta: 4632 AÃ±o de creación de pregunta: 2007-01-01
 questions[52]= "53)  Con el cifrado se asegura";
 choices[52]= new Array();
 choices[52][0] = "la autenticidad";
 choices[52][1] = "la confidencialidad";
 choices[52][2] = "la integridad, la autenticidad y el no repudio en destino";
 choices[52][3] = "la integridad, la autenticidad y el no repudio en origen";
 answers[52] = choices[52][1];
 units[52] = "72";
 comments[52] = "Id Pregunta: 4632. ";


//  Id pregunta: 4707 AÃ±o de creación de pregunta: 2007-01-01
 questions[53]= "54)  T&eacute;cnica de cifrado utilizada por los clientes de correo-electr&oacute;nico";
 choices[53]= new Array();
 choices[53][0] = "MD5";
 choices[53][1] = "IDEA";
 choices[53][2] = "Curva El&iacute;ptica";
 choices[53][3] = "S/MIME";
 answers[53] = choices[53][2];
 units[53] = "72";
 comments[53] = "Id Pregunta: 4707. Examen 2006 JCYL";


//  Id pregunta: 4910 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l de los siguientes lenguajes de programaci&oacute;n no incluye entre sus caracter&iacute;sticas la genericidad odefinici&oacute;n de funciones gen&eacute;ricas utilizando el denominado polimorfismo param&eacute;trico?:";
 choices[54]= new Array();
 choices[54][0] = "ML.";
 choices[54][1] = "Haskell.";
 choices[54][2] = "Pascal.";
 choices[54][3] = "Miranda.";
 answers[54] = choices[54][2];
 units[54] = "";
 comments[54] = "Id Pregunta: 4910. Examen TIC B 2007";


//  Id pregunta: 5102 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  Seg&uacute;n la ley 34/2002, &iquest;cu&aacute;l de las siguientes es una infracci&oacute;n grave?";
 choices[55]= new Array();
 choices[55][0] = "El incumplimiento de la obligaci&oacute;n de suspender la transmisi&oacute;n, el alojamiento de datos, el acceso a la red o la prestaci&oacute;n de cualquier otro servicio equivalente de intermediaci&oacute;n, cuando un &oacute;rgano administrativo competente lo ordene";
 choices[55][1] = "No facilitar la informaci&oacute;n a que se refiere el art&iacute;culo 27.1 (Obligaciones previas al inicio del procedimiento de contrataci&oacute;n), cuando las partes no hayan pactado su exclusi&oacute;n o el destinatario sea un consumidor";
 choices[55][2] = "El incumplimiento de lo previsto en el art. 12 bis.";
 choices[55][3] = "El incumplimiento habitual de la obligaci&oacute;n de confirmar la recepci&oacute;n de una aceptaci&oacute;n, cuando no se haya pactado su exclusi&oacute;n o el contrato se haya celebrado con un consumidor";
 answers[55] = choices[55][3];
 units[55] = "30";
 comments[55] = "Id Pregunta: 5102. Ley 34/2002, art&iacute;culo 38";


//  Id pregunta: 5505 AÃ±o de creación de pregunta: 2003-01-01
 questions[56]= "57)  C&uacute;al es la respuesta correcta respecto a XBRL (eXtensible Business Reporting Language)?:";
 choices[56]= new Array();
 choices[56][0] = "Es un lenguaje basado en XML";
 choices[56][1] = "Permite el intercambio de informaci&oacute;n financiera de las empresas";
 choices[56][2] = "Es posible establecer taxonom&iacute;as que clasifiquen los datos seg&uacute;n etiquetas definidas";
 choices[56][3] = "Todas son correctas";
 answers[56] = choices[56][3];
 units[56] = "69";
 comments[56] = "Id Pregunta: 5505. NULL";


//  Id pregunta: 5618 AÃ±o de creación de pregunta: 2003-01-01
 questions[57]= "58)  Indicar cual de las siguientes no es una caracter&iacute;stica de UNIX:";
 choices[57]= new Array();
 choices[57][0] = " Multitarea y multiusuario";
 choices[57][1] = "Int&eacute;rprete de comandos flexible";
 choices[57][2] = "Portable s&oacute;lo en ordenadores de m&aacute;s de 32 bits";
 choices[57][3] = "Sistema jer&aacute;rquico de ficheros";
 answers[57] = choices[57][2];
 units[57] = "53";
 comments[57] = "Id Pregunta: 5618. ";


//  Id pregunta: 5636 AÃ±o de creación de pregunta: 2003-01-01
 questions[58]= "59)  Una soluci&oacute;n RAID 5 necesita como m&iacute;nimo:";
 choices[58]= new Array();
 choices[58][0] = "Dos discos";
 choices[58][1] = "Tres discos";
 choices[58][2] = "Un disco";
 choices[58][3] = "Cuatro discos";
 answers[58] = choices[58][1];
 units[58] = "48";
 comments[58] = "Id Pregunta: 5636. ";


//  Id pregunta: 5695 AÃ±o de creación de pregunta: 2003-01-01
 questions[59]= "60)  La firma realizada a trav&eacute;s del DNI electr&oacute;nico:";
 choices[59]= new Array();
 choices[59][0] = "Tiene valor jur&iacute;dico, pero no equivale a la firma manuscrita";
 choices[59][1] = " Tiene el mismo valor jur&iacute;dico que la firma manuscrita";
 choices[59][2] = "No tiene valor jur&iacute;dico";
 choices[59][3] = "Su valor jur&iacute;dico queda a discreci&oacute;n de un juez";
 answers[59] = choices[59][1];
 units[59] = "74";
 comments[59] = "Id Pregunta: 5695. NULL";


//  Id pregunta: 5748 AÃ±o de creación de pregunta: 2009-01-01
 questions[60]= "61)  &iquest;Qu&eacute; es una firma secuencial?";
 choices[60]= new Array();
 choices[60][0] = "Un documento que incluye las firmas de varios usuarios, todas ellas sobre el mismo documento original";
 choices[60][1] = "Un documento que incluye las firmas de varios usuarios, cada una de ellas incluyendo las firmas anteriores en el tiempo";
 choices[60][2] = "Un documento que incluye la firma de un usuario, y uno o varios documentos originales";
 choices[60][3] = "Un documento que contiene un documento original, la firma de uno o varios usuarios, y uno o varios sellos de tiempo";
 answers[60] = choices[60][1];
 units[60] = "74";
 comments[60] = "Id Pregunta: 5748. NULL";


//  Id pregunta: 6226 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  Qu&eacute; esquema de bases de datos incluye la descripci&oacute;n de todos los datos e interrelaciones entre &eacute;stos, as&iacute; como las restricciones de integridad y de confidencialidad";
 choices[61]= new Array();
 choices[61][0] = "Esquema interno";
 choices[61][1] = "Esquema conceptual";
 choices[61][2] = "Esquema externo";
 choices[61][3] = "Esquema f&iacute;sico";
 answers[61] = choices[61][1];
 units[61] = "57";
 comments[61] = "Id Pregunta: 6226. TICB-2009, bloque desarrollo";


//  Id pregunta: 6332 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  Si los datos contienen valores 'NULL' (valores desconocidos) antes de realizar una consulta de data mining:";
 choices[62]= new Array();
 choices[62][0] = "Debo eliminarlos.";
 choices[62][1] = "S&oacute;lo se eliminan si son pocos. Si son muchos se utiliza alguna t&eacute;cnica para predecir el valor de esos nulos y trabajar con las aproximaciones obtenidas.";
 choices[62][2] = "En la fase de preproceso se les asignar&aacute; un valor por defecto.";
 choices[62][3] = "Se asigna el valor de la media multiplicado por 2.";
 answers[62] = choices[62][1];
 units[62] = "68";
 comments[62] = "Id Pregunta: 6332. ";


//  Id pregunta: 6430 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  &iquest;Cu&aacute;l de las siguientes no es una suite ofim&aacute;tica de software libre?";
 choices[63]= new Array();
 choices[63][0] = "iWork";
 choices[63][1] = "Koffice";
 choices[63][2] = "OpenOffice.org";
 choices[63][3] = "Todas las anteriores son suites ofim&aacute;ticas de software libre";
 answers[63] = choices[63][0];
 units[63] = "62";
 comments[63] = "Id Pregunta: 6430. NULL";


//  Id pregunta: 6448 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  En un sistema de almacenamiento en RAID 5:";
 choices[64]= new Array();
 choices[64][0] = "Se guardan dos paridades para cada bloque de informaci&oacute;n, cada una de ellas alojada en un disco diferente";
 choices[64][1] = "Se asigna un bloque de paridad por cada bloque de informaci&oacute;n, asignando un bloque alternativo de cada disco para almacenar esa paridad";
 choices[64][2] = "Se usa una divisi&oacute;n de datos a nivel de bloques con un disco de paridad dedicado";
 choices[64][3] = "Los datos se dividen a nivel de bits, en lugar de a nivel de bloques";
 answers[64] = choices[64][1];
 units[64] = "48";
 comments[64] = "Id Pregunta: 6448. Castilla La Mancha 2009";


//  Id pregunta: 6571 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  El campo extensions en un certificado X.509 ";
 choices[65]= new Array();
 choices[65][0] = "Permite a&ntilde;adir nuevos campos al certificado sin modificar su definici&oacute;n ASN.1";
 choices[65][1] = "Presentan Informaci&oacute;n sobre claves certificadas y pol&iacute;ticas";
 choices[65][2] = "Presentan informaci&oacute;n adicional sobre el propietario del certificado y sobre su emisor";
 choices[65][3] = "Todas las respuestas anteriores son ciertas";
 answers[65] = choices[65][3];
 units[65] = "73";
 comments[65] = "Id Pregunta: 6571. NULL";


//  Id pregunta: 7346 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  &iquest;Qu&eacute; es HSM?";
 choices[66]= new Array();
 choices[66][0] = "Un dispositivo criptogr&aacute;fico basado en hardware  que genera, almacena y protege claves criptogr&aacute;ficas";
 choices[66][1] = "Un algoritmo de clave p&uacute;blica";
 choices[66][2] = "Un API gen&eacute;rico de acceso a dispositivos criptogr&aacute;ficos";
 choices[66][3] = "Un conjunto de pol&iacute;ticas de seguridad en el &aacute;mbito de la criptograf&iacute;a de clave p&uacute;bica";
 answers[66] = choices[66][0];
 units[66] = "72";
 comments[66] = "Id Pregunta: 7346. NULL";


//  Id pregunta: 8187 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  &iquest;Cu&aacute;l es el sistema de referencia geod&eacute;sico establecido por el RD 1071/2007, en el que se debe compilar toda la informaci&oacute;n geogr&aacute;fica y cartograf&iacute;a oficial espa&ntilde;ola a partir del 01 de Enero de 2015?:";
 choices[67]= new Array();
 choices[67][0] = "Exclusivamente el sistema ETRS89.";
 choices[67][1] = "Los sistemas ED50 y ETRS89.";
 choices[67][2] = "Los sistemas ETRS89 y REGCAN95.";
 choices[67][3] = "El sistema ETRS-C&oacute;nica Conforme de Lambert.";
 answers[67] = choices[67][2];
 units[67] = "67";
 comments[67] = "Id Pregunta: 8187. Examen TIC A1 2010";


//  Id pregunta: 8304 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  En los sistemas criptogr&aacute;ficos h&iacute;bridos: ";
 choices[68]= new Array();
 choices[68][0] = "Se prescinde del cifrado sim&eacute;trico.";
 choices[68][1] = "Se cifra la clave de sesi&oacute;n mediante un cifrado sim&eacute;trico ";
 choices[68][2] = "Se cifra la clave de sesi&oacute;n mediante un cifrado asim&eacute;trico";
 choices[68][3] = "Se omite el uso de certificados digitales, cuando se dispone de plataformas PKI.";
 answers[68] = choices[68][2];
 units[68] = "72";
 comments[68] = "Id Pregunta: 8304. Examen TIC A2 2010";


//  Id pregunta: 8788 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  Indique cu&aacute;l de las siguientes expresiones mostrar&aacute; el n&uacute;mero de veces que est&aacute; conectado el usuario root";
 choices[69]= new Array();
 choices[69][0] = "who | grep root | wc -l";
 choices[69][1] = "who root | wc -l";
 choices[69][2] = "who &gt;grep &mdash;v root&gt;wc";
 choices[69][3] = "who &lt;grep -v root&gt;wc";
 answers[69] = choices[69][0];
 units[69] = "53, 54";
 comments[69] = "Id Pregunta: 8788. Examen UPM A2 2011";


//  Id pregunta: 8915 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  Indicar cu&aacute;l de las siguientes afirmaciones es cierta en relaci&oacute;n con XML:";
 choices[70]= new Array();
 choices[70][0] = "Es un lenguaje de programaci&oacute;n para aplicaciones basadas en Internet.";
 choices[70][1] = "Es un lenguaje de marcado que, al igual que HTML, hace uso de etiquetas (&ldquo;tags&rdquo;).";
 choices[70][2] = "Es un lenguaje independiente de plataforma cuyo objetivo es definir c&oacute;mo un navegador est&aacute;ndar debe presentar la informaci&oacute;n definida en HTML.";
 choices[70][3] = "Es un lenguaje definido por Microsoft para implementar su arquitectura orientada a servicios";
 answers[70] = choices[70][1];
 units[70] = "69";
 comments[70] = "Id Pregunta: 8915. Operador Ayto. Madrid 2010";


//  Id pregunta: 8923 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  Cuando un antivirus utiliza t&eacute;cnicas heur&iacute;sticas significa que:";
 choices[71]= new Array();
 choices[71][0] = "monitoriza continuamente el sistema para detectar amenazas.";
 choices[71][1] = "puede eliminar troyanos y rootkits sin da&ntilde;ar el sistema.";
 choices[71][2] = "puede reconocer c&oacute;digos maliciosos aunque no se encuentren en su base de datos.";
 choices[71][3] = "interroga a otros equipos de confianza para obtener informaci&oacute;n sobre los ficheros";
 answers[71] = choices[71][2];
 units[71] = "63";
 comments[71] = "Id Pregunta: 8923. Operador Ayto. Madrid 2010";


//  Id pregunta: 8949 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  &iquest;A qui&eacute;n corresponde aprobar la relaci&oacute;n de prestadores de servicios de certificaci&oacute;n admitidos?";
 choices[72]= new Array();
 choices[72][0] = "Al Ministerio de Industria Turismo y Comercio";
 choices[72][1] = "Al Ministerio de la Presidencia";
 choices[72][2] = "Al Consejo Superior de Administraci&oacute;n Electr&oacute;nica";
 choices[72][3] = "Ninguna de las anteriores es cierta";
 answers[72] = choices[72][3];
 units[72] = "43";
 comments[72] = "Id Pregunta: 8949. ";


//  Id pregunta: 8955 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  En el arranque en Linux &iquest;cu&aacute;l de los siguientes procesos se ejecuta en primer lugar?:";
 choices[73]= new Array();
 choices[73][0] = "page daemon";
 choices[73][1] = "swapper";
 choices[73][2] = "init";
 choices[73][3] = "sbin";
 answers[73] = choices[73][1];
 units[73] = "53";
 comments[73] = "Id Pregunta: 8955. ";


//  Id pregunta: 9122 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  &iquest;Qu&eacute; se necesita para funcionar en un sistema grid?";
 choices[74]= new Array();
 choices[74][0] = "Al menos un ordenador que act&uacute;e como un servidor y que gestione el funcionamiento de los otros sistemas implicados";
 choices[74][1] = "Un mainframe";
 choices[74][2] = "Al menos un sistema Microsoft";
 choices[74][3] = "Todas las respuestas anteriores son v&aacute;lidas";
 answers[74] = choices[74][0];
 units[74] = "45";
 comments[74] = "Id Pregunta: 9122. ";


//  Id pregunta: 9203 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  De los siguientes elementos, &iquest; cu&aacute;les no est&aacute;n definidos por el lenguaje ODRL?";
 choices[75]= new Array();
 choices[75][0] = "Assets.";
 choices[75][1] = "Rights.";
 choices[75][2] = "Resources.";
 choices[75][3] = "Parties.";
 answers[75] = choices[75][2];
 units[75] = "37";
 comments[75] = "Id Pregunta: 9203. ";


//  Id pregunta: 9683 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  &iquest;Cu&aacute;l de las siguientes opciones representa elementos dentro de un GIS?";
 choices[76]= new Array();
 choices[76][0] = "Hardware, software, georreferenciaci&oacute;n, equipo cient&iacute;fico y procedimientos.";
 choices[76][1] = "Hardware, software, datos geogr&aacute;ficos, equipo humano y capas tem&aacute;ticas.";
 choices[76][2] = "Proyecci&oacute;n, georreferenciaci&oacute;n, programas, datos espaciales y equipo cient&iacute;fico.";
 choices[76][3] = "Hardware, software, informaci&oacute;n geogr&aacute;fica, equipo humano y procedimientos.";
 answers[76] = choices[76][3];
 units[76] = "67";
 comments[76] = "Id Pregunta: 9683. NULL";


//  Id pregunta: 9723 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  &iquest;Cu&aacute;l de entre las siguientes es una de las caracter&iacute;sticas del Cloud Computing?";
 choices[77]= new Array();
 choices[77][0] = "El consumo a la carta: un consumidor puede proporcionarse las necesidades TIC que precise sin que medie el proveedor.";
 choices[77][1] = "El acceso a las capacidades disponibles en la red se puede hacer usando plataformas heterog&eacute;neas.";
 choices[77][2] = "Los recursos TIC del proveedor se reservan para ser usados por varios consumidores.";
 choices[77][3] = "Todas las respuestas anteriores son ciertas.";
 answers[77] = choices[77][3];
 units[77] = "47";
 comments[77] = "Id Pregunta: 9723. Examen TIC-A1 2013";


//  Id pregunta: 9747 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  Indique en qu&eacute; consiste el m&eacute;todo QSOS:";
 choices[78]= new Array();
 choices[78][0] = "Est&aacute; destinado a representar la interacci&oacute;n entre los componentes de un sistema.";
 choices[78][1] = "Permite calificar, seleccionar y comparar software Open Source de una manera objetiva.";
 choices[78][2] = "Permite representar a trav&eacute;s de objetos la informaci&oacute;n que contiene una base de datos.";
 choices[78][3] = "Es un modelo matem&aacute;tico que permite calcular las futuras desviaciones en un proyecto software.";
 answers[78] = choices[78][1];
 units[78] = "61";
 comments[78] = "Id Pregunta: 9747. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9792 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  Respecto a las licencias de software libre y su compatibilidad con la GPL, se&ntilde;ale la sentencia correcta:";
 choices[79]= new Array();
 choices[79][0] = "Todas las versiones de la Apache license son incompatibles con las versiones de GPL (v1, v2 y v3). ";
 choices[79][1] = "Las versiones de Apache License anteriores a la v2.0 son incompatibles con GPLv3. ";
 choices[79][2] = "La GPLv2 no es compatible con la Apache License v2 porque tiene algunos requisitos que no est&aacute;n en esa versi&oacute;n de la Apache License, por ejemplo ciertas disposiciones sobre las indemnizaciones y la terminaci&oacute;n por patentes. ";
 choices[79][3] = "Si uso una librer&iacute;a bajo la GPLv3 en un proyecto GPLv2, se puede publicar ese proyecto bajo GPLv2 &uacute;nicamente, ya que solo interact&uacute;a con esa librer&iacute;a mediante mecanismos t&iacute;picos, no copia su c&oacute;digo en el proyecto. ";
 answers[79] = choices[79][1];
 units[79] = "61";
 comments[79] = "Id Pregunta: 9792. Examen TIC A2 2013";


//  Id pregunta: 9810 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  &iquest;Cu&aacute;l de las siguientes unidades de magnitud en relaci&oacute;n al almacenamiento de informaci&oacute;n es mayor?";
 choices[80]= new Array();
 choices[80][0] = "Pettabyte (PB).";
 choices[80][1] = "Terabyte (TB).";
 choices[80][2] = "Yottabyte (YB).";
 choices[80][3] = "Zettabyte (ZB).";
 answers[80] = choices[80][2];
 units[80] = "52";
 comments[80] = "Id Pregunta: 9810. Examen TIC-A2 2013-Libre";


//  Id pregunta: 10012 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  En un entorno de base de datos relacional, si se puede afirmar que los valores de una clave ajena coinciden con los valores de la clave primaria a la que hace referencia o son nulos  entonces se est&aacute; cumpliendo:";
 choices[81]= new Array();
 choices[81][0] = "Regla de los nulos.";
 choices[81][1] = "Regla de integridad de la entidad.";
 choices[81][2] = "Regla de la integridad referencial.";
 choices[81][3] = "Regla de los valores ajenos.";
 answers[81] = choices[81][2];
 units[81] = "58";
 comments[81] = "Id Pregunta: 10012. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10225 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  Cual de las siguientes sentencias captura el nombre de la carpeta en la que est&aacute; situado el archivo:";
 choices[82]= new Array();
 choices[82][0] = "String name = File.getParent(&quot;leeme.txt&quot;);";
 choices[82][1] = "String name = (new File(&quot;leeme.txt&quot;)).getParent();";
 choices[82][2] = "String name = (new File(&quot;c:\\leeme.txt&quot;)).getParentName();";
 choices[82][3] = "Directory dir = (new File(&ldquo;leeme.txt&rdquo;)).getParentDir();";
 answers[82] = choices[82][1];
 units[82] = "60";
 comments[82] = "Id Pregunta: 10225. NULL";


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


//  Id pregunta: 10474 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  En el &aacute;mbito de los certificados X.509:";
 choices[84]= new Array();
 choices[84][0] = "La CA de la PKI debe proporcional protocolos de gesti&oacute;n de certificados (registro, recuperaci&oacute;n de claves, etc) dsiponibles online.";
 choices[84][1] = "Una CRL es una lista de certificados revocados con un timestamp que determina su fecha de emisi&oacute;n y firmada en todo caso por la CA que emite los certificados.";
 choices[84][2] = "Una CRL tiene un alcance que define el tipo de certificados que incluir&aacute; dicha lista.";
 choices[84][3] = "Un certificado se a&ntilde;ade a la CRL en la siguiente actualizaci&oacute;n seg&uacute;n la pol&iacute;tica de actualizaciones definida.";
 answers[84] = choices[84][3];
 units[84] = "73";
 comments[84] = "Id Pregunta: 10474. ";


//  Id pregunta: 10609 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  &iquest;Cu&aacute;l de estas es la codificaci&oacute;n en formato binario de un certificado X.509v3?";
 choices[85]= new Array();
 choices[85][0] = "DER";
 choices[85][1] = "CERT";
 choices[85][2] = "PEM";
 choices[85][3] = "Ninguno de los anteriores.";
 answers[85] = choices[85][0];
 units[85] = "73";
 comments[85] = "Id Pregunta: 10609. ";


//  Id pregunta: 10785 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  La velocidad del USB 3.0 es:";
 choices[86]= new Array();
 choices[86][0] = "15 veces superior a la del USB 2.0.";
 choices[86][1] = "Similar a la del USB 2.0.";
 choices[86][2] = "10 veces superior a la del USB 2.0.";
 choices[86][3] = "480 Mbps.";
 answers[86] = choices[86][2];
 units[86] = "46";
 comments[86] = "Id Pregunta: 10785. Examen GSI 2014";


//  Id pregunta: 10788 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  En un sistema de memoria paginada, la tabla donde se almacena la correspondencia entre direcciones l&oacute;gicas y f&iacute;sicas, se denomina:";
 choices[87]= new Array();
 choices[87][0] = "TLB: Translation Lookaside Buffer.";
 choices[87][1] = "TTL: Translation Table Location.";
 choices[87][2] = "ATL: Address Translation Lookup.";
 choices[87][3] = "ATB: Address Table Buffer.";
 answers[87] = choices[87][0];
 units[87] = "52";
 comments[87] = "Id Pregunta: 10788. Examen GSI 2014";


//  Id pregunta: 10901 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  En el contexto de la web sem&aacute;ntica, se&ntilde;ale la definici&oacute;n correcta de ontolog&iacute;a:";
 choices[88]= new Array();
 choices[88][0] = "Es una especificaci&oacute;n expl&iacute;cita de una conceptualizaci&oacute;n.";
 choices[88][1] = "Es un sistema de clasificaci&oacute;n abierto y/o colaborativo basado en etiquetas.";
 choices[88][2] = "Es un conjunto de nombres en el cual todos los nombres son &uacute;nicos.";
 choices[88][3] = "Es un sistema de clasificaci&oacute;n que permite agrupar un conjunto de elementos dentro de unas categor&iacute;as predefinidas que pueden estar contenidas unas en otras, o relacionadas de cualquier otra manera.";
 answers[88] = choices[88][0];
 units[88] = "0";
 comments[88] = "Id Pregunta: 10901. Examen GSI 2014";


//  Id pregunta: 10947 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  Dentro de las soluciones en el &aacute;mbito de BigData, la arquitectura Hadoop consta del m&oacute;dulo MapReduce que consiste en:";
 choices[89]= new Array();
 choices[89][0] = "Un framework para escribir aplicaciones que procesan grandes cantidades de datos en paralelo.";
 choices[89][1] = "Una base de datos no relacional y distribuida, con varios maestros, escalable y sin puntos &uacute;nicos de fallo.";
 choices[89][2] = "Un sistema de archivos distribuido que proporciona acceso de alto rendimiento a los datos de la aplicaci&oacute;n.";
 choices[89][3] = "Una infraestructura de data warehouse que proporciona los datos resumidos y consultas ad hoc.";
 answers[89] = choices[89][0];
 units[89] = "68";
 comments[89] = "Id Pregunta: 10947. TIC A1 AGE 2014";


//  Id pregunta: 10983 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  Respecto a los ficheros de firma electr&oacute;nica y los documentos firmados electr&oacute;nicamente, se&ntilde;ale la respuesta correcta:";
 choices[90]= new Array();
 choices[90][0] = "El documento firmado siempre va inclu&iacute;do en el fichero de firma, tanto en XAdES como en CAdES.";
 choices[90][1] = "En CAdES, el documento puede no incluirse en el fichero de firma. Estas firmas se llaman expl&iacute;citas.";
 choices[90][2] = "El documento firmado se incluye en el fichero de firma en XAdES, y no se puede incluir en CAdES.";
 choices[90][3] = "En XAdES, s&oacute;lo se puede firmar de forma impl&iacute;cita, en la que el documento no se incluye en el resultado de firma y solamente se incluye una referencia al lugar en el que se encuentra.";
 answers[90] = choices[90][1];
 units[90] = "72";
 comments[90] = "Id Pregunta: 10983. TIC A1 AGE 2014";


//  Id pregunta: 11047 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;Cu&aacute;l es la &uacute;ltima versi&oacute;n de HTTP a fecha Octubre 2015?";
 choices[91]= new Array();
 choices[91][0] = "1.1";
 choices[91][1] = "2";
 choices[91][2] = "1.3";
 choices[91][3] = "3";
 answers[91] = choices[91][1];
 units[91] = "69";
 comments[91] = "Id Pregunta: 11047. ";


//  Id pregunta: 11060 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Se&ntilde;ale la respuesta FALSA sobre 3D-Secure";
 choices[92]= new Array();
 choices[92][0] = "Es un protocolo basado en XML ";
 choices[92][1] = "Se utiliza para asegurar el pago con tarjeta en Internet";
 choices[92][2] = "Es susceptible de ataques &quot;man-in-the-middle&quot;";
 choices[92][3] = "Todas son correctas";
 answers[92] = choices[92][3];
 units[92] = "70";
 comments[92] = "Id Pregunta: 11060. ";


//  Id pregunta: 11131 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Cu&aacute;l de los siguiente no es un organismo de estandarizaci&oacute;n de arquitecturas SOA?";
 choices[93]= new Array();
 choices[93][0] = "Business Process Management Initiative (BPMI)";
 choices[93][1] = "Object Management Group (OMG)";
 choices[93][2] = "OASIS";
 choices[93][3] = "Microsoft-IBM Workflow Management Coallition";
 answers[93] = choices[93][3];
 units[93] = "51";
 comments[93] = "Id Pregunta: 11131. ";


//  Id pregunta: 11144 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l de los siguientes no es un protocolo de pago?";
 choices[94]= new Array();
 choices[94][0] = "SET";
 choices[94][1] = "Paypal";
 choices[94][2] = "3-D Secure";
 choices[94][3] = "Mastercard True Payment Protocol";
 answers[94] = choices[94][3];
 units[94] = "70";
 comments[94] = "Id Pregunta: 11144. ";


//  Id pregunta: 11146 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Cu&aacute;l de los siguientes cifrados sim&eacute;tricos es de flujo?";
 choices[95]= new Array();
 choices[95][0] = "RC-4";
 choices[95][1] = "IDEA";
 choices[95][2] = "RC-5";
 choices[95][3] = "AES";
 answers[95] = choices[95][0];
 units[95] = "72";
 comments[95] = "Id Pregunta: 11146. ";


//  Id pregunta: 11257 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Sobre la criptograf&iacute;a h&iacute;brida:";
 choices[96]= new Array();
 choices[96][0] = "El transmisor cifra el mensaje con una clave sim&eacute;trica o de sesi&oacute;n, y a su vez cifra esa clave sim&eacute;trica con la clave privada del destinatario.";
 choices[96][1] = "Es utilizada por Pretty Good Privacy.";
 choices[96][2] = "Tambi&eacute;n se conocen como &ldquo;sobre digital&rdquo;.";
 choices[96][3] = "B) y C) son correctas.";
 answers[96] = choices[96][3];
 units[96] = "72";
 comments[96] = "Id Pregunta: 11257. ";


//  Id pregunta: 11515 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  En el est&aacute;ndar XADES de firma electr&oacute;nica, el perfil que incluye un TimeStamp a las referencias de las CRLs, es:";
 choices[97]= new Array();
 choices[97][0] = "XADES-X";
 choices[97][1] = "XADES-T";
 choices[97][2] = "XADES-XL";
 choices[97][3] = "XADES-C";
 answers[97] = choices[97][0];
 units[97] = "72";
 comments[97] = "Id Pregunta: 11515. NULL";


//  Id pregunta: 11677 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  SATA III ofrece una transferencia de datos de:";
 choices[98]= new Array();
 choices[98][0] = "100 MB/s";
 choices[98][1] = "200 MB/s";
 choices[98][2] = "300 MB/s";
 choices[98][3] = "600 MB/s";
 answers[98] = choices[98][3];
 units[98] = "47, 48";
 comments[98] = "Id Pregunta: 11677. ";


//  Id pregunta: 11678 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  UDDI se corresponde con las siglas:";
 choices[99]= new Array();
 choices[99][0] = "Universal Description, Discovery and Integration";
 choices[99][1] = "Uniform Description, Discovery and Integration";
 choices[99][2] = "Universal Description, Discovery and Information";
 choices[99][3] = "Unic Description, Discovery and Information";
 answers[99] = choices[99][0];
 units[99] = "51, 69";
 comments[99] = "Id Pregunta: 11678. ";


