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

//  Id pregunta: 698 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  Un sistema multiproceso NUMA se diferencia de uno SMP en:";
 choices[0]= new Array();
 choices[0][0] = "Su menor escalabilidad.";
 choices[0][1] = "Su utilizaci&oacute;n de una red de &aacute;rea local en lugar de un bus para la comunicaci&oacute;n entre CPU's.";
 choices[0][2] = "Su utilizaci&oacute;n de m&aacute;s de un bus para comunicar CPU's y memoria.";
 choices[0][3] = "Su falta de mecanismos de coherencia de cache.";
 answers[0] = choices[0][2];
 units[0] = "45";
 comments[0] = "Id Pregunta: 698. ";


//  Id pregunta: 846 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no es propia de la memoria principal de un ordenador?:";
 choices[1]= new Array();
 choices[1][0] = "Volatilidad del contenido";
 choices[1][1] = "Tiempo de acceso peque&ntilde;o";
 choices[1][2] = "Direccionabilidad";
 choices[1][3] = "Acceso a trav&eacute;s de canal desde la unidad central de proceso";
 answers[1] = choices[1][3];
 units[1] = "47";
 comments[1] = "Id Pregunta: 846. ";


//  Id pregunta: 892 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;Cu&aacute;les son los condicionantes que originan la necesidad espec&iacute;fica de gestionar los entornos distribuidos?:";
 choices[2]= new Array();
 choices[2][0] = "Mayor complejidad de sistemas por su heterogeneidad, dispersi&oacute;n geogr&aacute;fica de los sistemas y recursos, variedad de servicios y distribuci&oacute;n de funciones de los aplicativos";
 choices[2][1] = "Mayores costes de mantenimiento de equipamiento f&iacute;sico y aplicaciones, menores costes de operaci&oacute;n, usuarios inoperativos y dispersi&oacute;n geogr&aacute;fica de los sistemas";
 choices[2][2] = "Dispersi&oacute;n geogr&aacute;fica de los sistemas, mayor coste del equipamiento que en soluciones centralizadas pero menores costes de operaci&oacute;n y aplicativos con funciones distribuidas";
 choices[2][3] = "Todos las respuestas anteriores son correctas";
 answers[2] = choices[2][0];
 units[2] = "50";
 comments[2] = "Id Pregunta: 892. ";


//  Id pregunta: 898 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;En qu&eacute; generaci&oacute;n aparecen los microprocesadores?:";
 choices[3]= new Array();
 choices[3][0] = "Segunda";
 choices[3][1] = "Tercera";
 choices[3][2] = "Cuarta";
 choices[3][3] = "Las generaciones solo se aplican a los lenguajes de programaci&oacute;n";
 answers[3] = choices[3][2];
 units[3] = "47";
 comments[3] = "Id Pregunta: 898. ";


//  Id pregunta: 914 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;Qu&eacute; diferencia hay entre las arquitecturas peer-to-peer y cliente/servidor?:";
 choices[4]= new Array();
 choices[4][0] = "En una arquitectura peer-to-peer un PC puede actuar simult&aacute;neamente como servidor y cliente";
 choices[4][1] = "En una arquitectura peer-to-peer las aplicaciones residen completamente en cada ordenador";
 choices[4][2] = "En una arquitectura cliente/servidor s&oacute;lo la presentaci&oacute;n reside en el cliente";
 choices[4][3] = "No hay diferencia; son la misma arquitectura";
 answers[4] = choices[4][0];
 units[4] = "50";
 comments[4] = "Id Pregunta: 914. ";


//  Id pregunta: 930 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;Qu&eacute; es SPICE?";
 choices[5]= new Array();
 choices[5][0] = "Una especificaci&oacute;n de SW para la Comunidad Europea.";
 choices[5][1] = "Un SW de simulaci&oacute;n de circuitos electr&oacute;nicos.";
 choices[5][2] = "Una directiva comunitaria sobre la emisi&oacute;n de ruidos medioambientales.";
 choices[5][3] = "Un est&aacute;ndar de facto sobre intercambio de datos seg&uacute;n EDI.";
 answers[5] = choices[5][1];
 units[5] = "46";
 comments[5] = "Id Pregunta: 930. ";


//  Id pregunta: 986 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Dentro de los discos &oacute;pticos, los denominados WORM:";
 choices[6]= new Array();
 choices[6][0] = "Permiten escribir, borrar y leer datos de la misma forma que un disco  duro magn&eacute;tico";
 choices[6][1] = "Permiten al usuario escribir sobre un disco de forma imborrable";
 choices[6][2] = "No permiten al usuario escribir sobre el disco, pero s&iacute; puede leerse";
 choices[6][3] = "Permiten al usuario escribir sobre un disco y el borrado por una sola vez";
 answers[6] = choices[6][1];
 units[6] = "48";
 comments[6] = "Id Pregunta: 986. ";


//  Id pregunta: 994 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  DIMM y SIMM son:";
 choices[7]= new Array();
 choices[7][0] = "2 formas de paralelismo en ordenadores (Distributed y Single)";
 choices[7][1] = "2 formas de gesti&oacute;n de memoria (Memory Management)";
 choices[7][2] = "2 tipos de encapsulado de memoria (Dual y Single)";
 choices[7][3] = "2 organismos de estandarizaci&oacute;n para Internet (Internet &amp; MultiMedia)";
 answers[7] = choices[7][2];
 units[7] = "47";
 comments[7] = "Id Pregunta: 994. ";


//  Id pregunta: 1024 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  El lenguaje Visual Basic, y la arquitectura DNA de Microsoft permiten arquitecturas Cliente/Servidor:";
 choices[8]= new Array();
 choices[8][0] = "De 2 niveles";
 choices[8][1] = "De N niveles";
 choices[8][2] = "Solo con clientes Microsoft";
 choices[8][3] = "B y C son ciertas";
 answers[8] = choices[8][1];
 units[8] = "50";
 comments[8] = "Id Pregunta: 1024. ";


//  Id pregunta: 1044 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  El primer boceto de la arquitectura de un ordenador fue propuesto por:";
 choices[9]= new Array();
 choices[9][0] = "Clive Sinclair";
 choices[9][1] = "John Von Neumann";
 choices[9][2] = "Edsger Dijkstra";
 choices[9][3] = "Steve Jobs";
 answers[9] = choices[9][1];
 units[9] = "47";
 comments[9] = "Id Pregunta: 1044. ";


//  Id pregunta: 1048 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  El protocolo MESI:";
 choices[10]= new Array();
 choices[10][0] = "Es utilizado para el inicio de sesi&oacute;n en redes GSM";
 choices[10][1] = "Permite el establecimiento de conexiones entre iguales &quot;peer to peer&quot; sobre redes IP";
 choices[10][2] = "Controla las colisiones en redes Token Ring";
 choices[10][3] = "Controla la coherencia cache en algunos procesadores";
 answers[10] = choices[10][3];
 units[10] = "47";
 comments[10] = "Id Pregunta: 1048. ";


//  Id pregunta: 1060 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  El t&eacute;rmino &quot;aleatorio&quot; en las memoria RAM se refiere a que:";
 choices[11]= new Array();
 choices[11][0] = "el acceso no sigue un cronograma concreto sino que puede producirse aleatoriamente en cualquier momento de un intervalo limitado";
 choices[11][1] = "el orden de varias operaciones de acceso (lectura y/o escritura) simult&aacute;neas es aleatorio para evitar colisiones, similar a la t&eacute;cnica usada en Ethernet";
 choices[11][2] = "se puede acceder a cualquier byte de memoria sin pasar por los bytes precedentes, esto es, no es un acceso secuencial";
 choices[11][3] = "ninguna de las razones anteriores es la correcta";
 answers[11] = choices[11][2];
 units[11] = "47";
 comments[11] = "Id Pregunta: 1060. ";


//  Id pregunta: 1108 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  En la historia de la computaci&oacute;n, Blaise Pascal destaca por:";
 choices[12]= new Array();
 choices[12][0] = "desarrollar el lenguaje Pascal.";
 choices[12][1] = "realizar la primera m&aacute;quina mec&aacute;nica para realizar adiciones.";
 choices[12][2] = "concebir la arquitectura del ordenador moderno.";
 choices[12][3] = "desarrollar algoritmos de optimizaci&oacute;n de redes.";
 answers[12] = choices[12][1];
 units[12] = "49";
 comments[12] = "Id Pregunta: 1108. ";


//  Id pregunta: 1113 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  En la Unidad Central de Proceso (CPU):";
 choices[13]= new Array();
 choices[13][0] = "La unidad Aritm&eacute;tico-L&oacute;gica se compone de uno o varios operadores, un banco de registros y un dispositivo secuenciador";
 choices[13][1] = "La Unidad de Control tiene como misi&oacute;n la supervisi&oacute;n y ordenaci&oacute;n de todo el sistema de elementos que componen la CPU y su relaci&oacute;n con la memoria interna";
 choices[13][2] = "En el esquema dise&ntilde;ado por Charles Babbage en su modelo de ordenador, se considera a la Memoria Central como un elemento externo a la CPU";
 choices[13][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[13] = choices[13][1];
 units[13] = "47";
 comments[13] = "Id Pregunta: 1113. NULL";


//  Id pregunta: 1115 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  En las escala de integraci&oacute;n ULSI significa:";
 choices[14]= new Array();
 choices[14][0] = "Ultima Large Scale Integration";
 choices[14][1] = "Under Large Scale Integration";
 choices[14][2] = "Ultra Large Scale Integration";
 choices[14][3] = "Update Large Scale Integration";
 answers[14] = choices[14][2];
 units[14] = "47";
 comments[14] = "Id Pregunta: 1115. ";


//  Id pregunta: 1193 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  Indique la afirmaci&oacute;n falsa, relativa a la arquitectura cliente/servidor:";
 choices[15]= new Array();
 choices[15][0] = "El di&aacute;logo entre cliente y servidor se inicia a requerimiento del servidor";
 choices[15][1] = "El servidor es el equipo que se encarga de suministrar servicios, como consultas a la base de datos, y el cliente es el equipo que muestra y formatea los datos";
 choices[15][2] = "Durante el desarrollo de las aplicaciones que siguen esta estructura, a veces hay que decidir que partes de la aplicaci&oacute;n se ejecutan en el servidor y cu&aacute;les en el cliente";
 choices[15][3] = "Las aplicaciones que se ejecutan en entorno Web siguen esta arquitectura";
 answers[15] = choices[15][0];
 units[15] = "50";
 comments[15] = "Id Pregunta: 1193. ";


//  Id pregunta: 1210 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  La caracter&iacute;stica principal de la arquitectura 'pipeline' es:";
 choices[16]= new Array();
 choices[16][0] = "La existencia de varios procesadores especializados en tareas concretas que pueden realizarse en paralelo";
 choices[16][1] = "La divisi&oacute;n en fases de la ejecuci&oacute;n de una instrucci&oacute;n";
 choices[16][2] = "La redundancia de algunos dispositivos";
 choices[16][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[16] = choices[16][1];
 units[16] = "46";
 comments[16] = "Id Pregunta: 1210. ";


//  Id pregunta: 1215 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  La considerada como primera m&aacute;quina realmente procesadora de informaci&oacute;n, llamada &quot;M&aacute;quina Diferencial&quot;, fue dise&ntilde;ada por:";
 choices[17]= new Array();
 choices[17][0] = "John Von Neumann.";
 choices[17][1] = "Blaise Pascal.";
 choices[17][2] = "Charles Babbage.";
 choices[17][3] = "Ninguno de los anteriores.";
 answers[17] = choices[17][2];
 units[17] = "45";
 comments[17] = "Id Pregunta: 1215. ";


//  Id pregunta: 1228 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  La memoria cach&eacute;:";
 choices[18]= new Array();
 choices[18][0] = "Es una memoria auxiliar que se a&ntilde;ade a la memoria principal";
 choices[18][1] = "Es una parte de la memoria principal m&aacute;s r&aacute;pida que el resto";
 choices[18][2] = "No se encarga de realizar la traducci&oacute;n de los identificadores de bloques";
 choices[18][3] = "No disminuye el fallo de p&aacute;ginas";
 answers[18] = choices[18][0];
 units[18] = "47";
 comments[18] = "Id Pregunta: 1228. ";


//  Id pregunta: 1248 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  La Unidad de Control (UC) puede construirse con diferentes m&eacute;todos:";
 choices[19]= new Array();
 choices[19][0] = "L&oacute;gica cableada, se construye mediante puertas l&oacute;gicas y es m&aacute;s r&aacute;pida que la l&oacute;gica programada";
 choices[19][1] = "La UC microprogramada se suele utilizar en ordenadores de tama&ntilde;o medio, en los grandes es demasiado lenta";
 choices[19][2] = "La microprogramaci&oacute;n permite introducir instrucciones complejas, pero las modificaciones y correcciones son dif&iacute;ciles de implementar";
 choices[19][3] = "El dise&ntilde;o en microprogramaci&oacute;n es m&aacute;s laborioso y costoso";
 answers[19] = choices[19][1];
 units[19] = "47";
 comments[19] = "Id Pregunta: 1248. ";


//  Id pregunta: 1258 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Las operaciones de la Unidad Aritm&eacute;tico-L&oacute;gica se clasifican en:";
 choices[20]= new Array();
 choices[20][0] = "Desplazamiento, l&oacute;gicas y aritm&eacute;ticas";
 choices[20][1] = "L&oacute;gicas y aritm&eacute;ticas";
 choices[20][2] = "Desplazamiento, l&oacute;gicas y adici&oacute;n";
 choices[20][3] = "L&oacute;gicas y adici&oacute;n";
 answers[20] = choices[20][0];
 units[20] = "47";
 comments[20] = "Id Pregunta: 1258. ";


//  Id pregunta: 1264 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  Las siglas MIDI se corresponden con:";
 choices[21]= new Array();
 choices[21][0] = "Mathematical Investigation, Development &amp; Investigation";
 choices[21][1] = "Multimedia &amp; Internet Digital Interface";
 choices[21][2] = "Musical Instruments Digital Interface";
 choices[21][3] = "Las siglas MIDI no tienen correspondencia real en el mundo de la tecnolog&iacute;a";
 answers[21] = choices[21][2];
 units[21] = "47";
 comments[21] = "Id Pregunta: 1264. ";


//  Id pregunta: 1265 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Las tecnolog&iacute;as del proceso distribuido permiten la captura de la informaci&oacute;n en el lugar en que la actividad se desarrolla y, en consecuencia, el an&aacute;lisis del trabajo puede ser realizado desde ese momento. Una consecuencia b&aacute;sica de este fen&oacute;meno es:";
 choices[22]= new Array();
 choices[22][0] = "Utilizar menos tiempo para la gesti&oacute;n y supervisi&oacute;n";
 choices[22][1] = "Utilizar m&aacute;s tiempo para la gesti&oacute;n al aumentar el volumen de informaci&oacute;n disponible";
 choices[22][2] = "Aumentar la posibilidad de p&eacute;rdida de datos sensibles para la gesti&oacute;n";
 choices[22][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[22] = choices[22][0];
 units[22] = "50";
 comments[22] = "Id Pregunta: 1265. ";


//  Id pregunta: 1321 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  RS-232, USB, Centronics, ECP, EPP, SCSI, PS/2&hellip;, son:";
 choices[23]= new Array();
 choices[23][0] = "buses/interfaces internos";
 choices[23][1] = "buses/interfaces externos";
 choices[23][2] = "est&aacute;ndares inal&aacute;mbricos";
 choices[23][3] = "arquitecturas de ordenadores";
 answers[23] = choices[23][1];
 units[23] = "47";
 comments[23] = "Id Pregunta: 1321. ";


//  Id pregunta: 1375 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Symbian es:";
 choices[24]= new Array();
 choices[24][0] = "Un procesador de AMD";
 choices[24][1] = "Unas especificaciones a modo de sistema operativo o soporte para el desarrollo de aplicaciones software sobre dispositivos m&oacute;viles";
 choices[24][2] = "Un est&aacute;ndar de facto para el cableado de edificios";
 choices[24][3] = "Un m&eacute;todo de procesamiento sim&eacute;trico en paralelo";
 answers[24] = choices[24][1];
 units[24] = "47";
 comments[24] = "Id Pregunta: 1375. ";


//  Id pregunta: 1395 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Un sistema IBM z/Series:";
 choices[25]= new Array();
 choices[25][0] = "Puede ejecutar Linux";
 choices[25][1] = "Puede ejecutar OS/400";
 choices[25][2] = "Puede ejecutar Windows 2000";
 choices[25][3] = "Todas son ciertas";
 answers[25] = choices[25][0];
 units[25] = "45";
 comments[25] = "Id Pregunta: 1395. ";


//  Id pregunta: 1418 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  Una memoria EEPROM:";
 choices[26]= new Array();
 choices[26][0] = "Podemos programarla una &uacute;nica vez, s&oacute;lo cuando est&aacute; nueva";
 choices[26][1] = "Podemos reprogramarla tras borrarla el&eacute;ctricamente";
 choices[26][2] = "Podemos reprogramarla, tras borrarla con rayos UV";
 choices[26][3] = "Ninguna de las anteriores es correcta";
 answers[26] = choices[26][1];
 units[26] = "47";
 comments[26] = "Id Pregunta: 1418. ";


//  Id pregunta: 1436 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  &iquest;Qu&eacute; empresa desarroll&oacute; el primer rat&oacute;n como perif&eacute;rico de los ordenadores?:";
 choices[27]= new Array();
 choices[27][0] = "LaCie";
 choices[27][1] = "Toshiba";
 choices[27][2] = "Apple";
 choices[27][3] = "Rank Xerox";
 answers[27] = choices[27][3];
 units[27] = "47";
 comments[27] = "Id Pregunta: 1436. ";


//  Id pregunta: 1437 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  &iquest;Qu&eacute; es MIDI?:";
 choices[28]= new Array();
 choices[28][0] = "Un formato de codificaci&oacute;n de im&aacute;genes digitales";
 choices[28][1] = "Conjunto de especificaciones y tecnolog&iacute;as que proponen normas para el ensamblaje de la arquitectura de ordenadores";
 choices[28][2] = "Un protocolo para codificar instrucciones para que un sintetizador genere notas musicales";
 choices[28][3] = "Servicio de transferencia autom&aacute;tica de textos entre memorias de dos terminales";
 answers[28] = choices[28][2];
 units[28] = "47";
 comments[28] = "Id Pregunta: 1437. ";


//  Id pregunta: 1455 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  &iquest;Cu&aacute;ntas im&aacute;genes por segundo se emiten utilizando el est&aacute;ndar PAL?:";
 choices[29]= new Array();
 choices[29][0] = "30";
 choices[29][1] = "26";
 choices[29][2] = "15";
 choices[29][3] = "25";
 answers[29] = choices[29][3];
 units[29] = "47";
 comments[29] = "Id Pregunta: 1455. ";


//  Id pregunta: 1466 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  La definici&oacute;n de la ofim&aacute;tica como la utilizaci&oacute;n de tecnolog&iacute;a para mejorar la realizaci&oacute;n de funciones de oficina se debe a:";
 choices[30]= new Array();
 choices[30][0] = "Hammer y Sirbu";
 choices[30][1] = "Olson y Lucas";
 choices[30][2] = "Eli y Nutt";
 choices[30][3] = "Carter y Huzan";
 answers[30] = choices[30][0];
 units[30] = "47";
 comments[30] = "Id Pregunta: 1466. ";


//  Id pregunta: 1469 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  Los c&oacute;decs DivX permiten:";
 choices[31]= new Array();
 choices[31][0] = "Escuchar la radio en un PC";
 choices[31][1] = "Ver la TV en un PC";
 choices[31][2] = "Conectar cualquier dispositivo Bluetooth a un PC";
 choices[31][3] = "Ver v&iacute;deos en un PC";
 answers[31] = choices[31][3];
 units[31] = "48";
 comments[31] = "Id Pregunta: 1469. ";


//  Id pregunta: 1476 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  SCSI responde a las siglas de:";
 choices[32]= new Array();
 choices[32][0] = "Smart Computer System Interface, Interfaz elegante para sistemas de computadora";
 choices[32][1] = "Small Computer System Interface, Interfaz para peque&ntilde;os sistemas de computadora";
 choices[32][2] = "Synchonized Computer Serial Interface, Interfaz serie para ordenadores sincronizados";
 choices[32][3] = "Superb Computation Scale- Integration, escala de integraci&oacute;n para computaci&oacute;n s&uacute;per";
 answers[32] = choices[32][1];
 units[32] = "48";
 comments[32] = "Id Pregunta: 1476. ";


//  Id pregunta: 1479 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  Se&ntilde;ale cu&aacute;l de los siguientes es un principio de dise&ntilde;o RISC:";
 choices[33]= new Array();
 choices[33][0] = "Un amplio juego de instrucciones facilita el dise&ntilde;o de compiladores";
 choices[33][1] = "El modelo de ejecuci&oacute;n de pila es superior al de registros";
 choices[33][2] = "Los juegos de instrucciones amplios reducen el tama&ntilde;o de los programas";
 choices[33][3] = "No debe emplearse la microprogramaci&oacute;n";
 answers[33] = choices[33][3];
 units[33] = "46";
 comments[33] = "Id Pregunta: 1479. ";


//  Id pregunta: 1482 AÃ±o de creación de pregunta: 2002-01-01
 questions[34]= "35)  Un monitor cuya resoluci&oacute;n es de 640 x 480, tiene:";
 choices[34]= new Array();
 choices[34][0] = "480 l&iacute;neas de exploraci&oacute;n (resoluci&oacute;n vertical)";
 choices[34][1] = "640 lineas de exploraci&oacute;n (resoluci&oacute;n vertical)";
 choices[34][2] = "480 pixeles (resoluci&oacute;n horizontal)";
 choices[34][3] = "Ninguna de las anteriores es cierta";
 answers[34] = choices[34][0];
 units[34] = "47";
 comments[34] = "Id Pregunta: 1482. ";


//  Id pregunta: 1484 AÃ±o de creación de pregunta: 2002-01-01
 questions[35]= "36)  Una de las siguientes no es una caracter&iacute;stica que deba reunir un interfaz:";
 choices[35]= new Array();
 choices[35][0] = "Consistencia";
 choices[35][1] = "Naturalidad";
 choices[35][2] = "Obviedad";
 choices[35][3] = "Facilidad de uso y aprendizaje";
 answers[35] = choices[35][2];
 units[35] = "47";
 comments[35] = "Id Pregunta: 1484. ";


//  Id pregunta: 1608 AÃ±o de creación de pregunta: 2003-01-01
 questions[36]= "37)  La escalabilidad vertical tiene que ver con:";
 choices[36]= new Array();
 choices[36][0] = "Granjas de servidores";
 choices[36][1] = "Servidores en rack";
 choices[36][2] = "Cluster de seridores";
 choices[36][3] = "Nada de lo anterior";
 answers[36] = choices[36][3];
 units[36] = "45";
 comments[36] = "Id Pregunta: 1608. ";


//  Id pregunta: 1614 AÃ±o de creación de pregunta: 2003-01-01
 questions[37]= "38)  Las l&iacute;neas de un bus se pueden clasificar en grupos funcionales de:";
 choices[37]= new Array();
 choices[37][0] = "L&iacute;neas de direcci&oacute;n y de control.";
 choices[37][1] = "L&iacute;neas de entrada y salida.";
 choices[37][2] = "L&iacute;neas de datos, l&iacute;neas de direcci&oacute;n y l&iacute;neas de control.";
 choices[37][3] = "L&iacute;neas de control de operaci&oacute;n y de salida.";
 answers[37] = choices[37][2];
 units[37] = "47";
 comments[37] = "Id Pregunta: 1614. Junta Andaluc&iacute;a";


//  Id pregunta: 1645 AÃ±o de creación de pregunta: 2004-01-01
 questions[38]= "39)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre la arquitectura hardware NUMA es cierta?";
 choices[38]= new Array();
 choices[38][0] = "Se tarda m&aacute;s en acceder a ciertas zonas de memoria que a otras";
 choices[38][1] = "Cada procesador tiene su propia memoria local";
 choices[38][2] = "Cada procesador puede acceder a las memorias de otros procesadores";
 choices[38][3] = "Todas las anteriores son ciertas";
 answers[38] = choices[38][3];
 units[38] = "45";
 comments[38] = "Id Pregunta: 1645. ";


//  Id pregunta: 1646 AÃ±o de creación de pregunta: 2004-01-01
 questions[39]= "40)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre la configuraci&oacute;n de discos RAID 5 son  ciertas?";
 choices[39]= new Array();
 choices[39][0] = "Existe un disco de paridad dedicado";
 choices[39][1] = "La paridad de calcula bas&aacute;ndose en la operaci&oacute;n l&oacute;gica XOR";
 choices[39][2] = "Es la configuraci&oacute;n id&oacute;nea para aplicaciones de alta transferencia de datos";
 choices[39][3] = "Todas las anteriores son ciertas";
 answers[39] = choices[39][1];
 units[39] = "48";
 comments[39] = "Id Pregunta: 1646. ";


//  Id pregunta: 1650 AÃ±o de creación de pregunta: 2003-01-01
 questions[40]= "41)  Respecto a tecnolog&iacute;as RAID:";
 choices[40]= new Array();
 choices[40][0] = "RAID 0 aumenta el rendimiento ";
 choices[40][1] = "RAID 1 utiliza c&oacute;digos hamming";
 choices[40][2] = "RAID 2 utiliza discos espejo";
 choices[40][3] = "RAID 5 utiliza discos espejo";
 answers[40] = choices[40][0];
 units[40] = "48";
 comments[40] = "Id Pregunta: 1650. Pregunta similar a la del ex&aacute;men de SS del 2003 salvo en algunas opciones";


//  Id pregunta: 1667 AÃ±o de creación de pregunta: 2004-01-01
 questions[41]= "42)  &iquest;Cu&aacute;l de los siguientes libros sobre el DVD, hace referencia a Sistemas de escritura &uacute;nica, DVD-R?";
 choices[41]= new Array();
 choices[41][0] = "Libro A";
 choices[41][1] = "Libro B";
 choices[41][2] = "Libro C";
 choices[41][3] = "Libro D";
 answers[41] = choices[41][3];
 units[41] = "48";
 comments[41] = "Id Pregunta: 1667. ";


//  Id pregunta: 1697 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  Indicar la respuesta falsa:";
 choices[42]= new Array();
 choices[42][0] = "La profundidad de color es el m&aacute;ximo n&uacute;mero de colores representables";
 choices[42][1] = "El n&uacute;mero de bits de un procesador gr&aacute;fico es independiente de la profundidad o resoluci&oacute;n";
 choices[42][2] = "La resoluci&oacute;n es el n&uacute;mero m&iacute;nimo de pixels que se muestran en pantalla (Pixels en horizontal x Pixels en vertical)";
 choices[42][3] = "La frecuencia de refresco es el n&uacute;mero de veces que se renueva la informaci&oacute;n en pantalla por segundo";
 answers[42] = choices[42][2];
 units[42] = "47";
 comments[42] = "Id Pregunta: 1697. ";


//  Id pregunta: 1699 AÃ±o de creación de pregunta: 2006-01-01
 questions[43]= "44)  &iquest;Cu&aacute;l ser&iacute;a una caracter&iacute;stica esencial a la hora de valorar un equipo mini?";
 choices[43]= new Array();
 choices[43][0] = "Disponer de microprocesadores RISCs.";
 choices[43][1] = "La modularidad.";
 choices[43][2] = "Disponer de sistemas de almacenamiento basados en RAID.";
 choices[43][3] = "La posibilidad de interconexi&oacute;n al host.";
 answers[43] = choices[43][1];
 units[43] = "47";
 comments[43] = "Id Pregunta: 1699. ";


//  Id pregunta: 1711 AÃ±o de creación de pregunta: 2006-01-01
 questions[44]= "45)  Un mainframe:";
 choices[44]= new Array();
 choices[44][0] = "Es equivalente a una supercomputadora cara";
 choices[44][1] = "utiliza toda su potencia en ejecutar unos pocos programas lo m&aacute;s r&aacute;pidamente posible";
 choices[44][2] = "es multitarea y multiproceso, pero monousuario";
 choices[44][3] = "utiliza su potencia para ejecutar muchos programas concurrentemente";
 answers[44] = choices[44][3];
 units[44] = "49";
 comments[44] = "Id Pregunta: 1711. ";


//  Id pregunta: 1891 AÃ±o de creación de pregunta: 2006-01-01
 questions[45]= "46)  Datos repartidos en m&uacute;ltiples vol&uacute;menes con los &quot;bits de paridad&quot; en un &uacute;nico disco. Hablamos de:";
 choices[45]= new Array();
 choices[45][0] = "RAID 1";
 choices[45][1] = "RAID 3";
 choices[45][2] = "RAID 0+1";
 choices[45][3] = "RAID 5";
 answers[45] = choices[45][1];
 units[45] = "48";
 comments[45] = "Id Pregunta: 1891. ";


//  Id pregunta: 1902 AÃ±o de creación de pregunta: 2006-01-01
 questions[46]= "47)  Cada uno de los multiples elementos utilizados internamente por el procesador para el de almacenamiento de datos intermedios en la ejecuci&oacute;n de una instrucci&oacute;n";
 choices[46]= new Array();
 choices[46][0] = "registro";
 choices[46][1] = "cache";
 choices[46][2] = "buffer";
 choices[46][3] = "pipelining";
 answers[46] = choices[46][0];
 units[46] = "47";
 comments[46] = "Id Pregunta: 1902. ";


//  Id pregunta: 1910 AÃ±o de creación de pregunta: 2006-01-01
 questions[47]= "48)  Respecto de la SSI (Single System Image) de un cluster, es falso que:";
 choices[47]= new Array();
 choices[47][0] = "Es generada por un middleware que se situa entre el entorno de usuario y el sistema operativo.";
 choices[47][1] = "Podemos encontrar SSIs hardware, a nivel de kernel de sistema operativo y de aplicaci&oacute;n.";
 choices[47][2] = "La soluci&oacute;n de SSI m&aacute;s eficiente en cuanto a tiempos de ejecuci&oacute;n es la implementada en el kernel del sistema operativo.";
 choices[47][3] = "Genera una apariencia de recurso unificado a partir de un grupo de computadores interconectados.";
 answers[47] = choices[47][2];
 units[47] = "45";
 comments[47] = "Id Pregunta: 1910. ";


//  Id pregunta: 1912 AÃ±o de creación de pregunta: 2006-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l de las siguientes no es una ventaja de las arquitecturas Grid?:";
 choices[48]= new Array();
 choices[48][0] = "Resultados de supercomputaci&oacute;n (alta transaccionalidad) a bajo coste.";
 choices[48][1] = "La obsolescencia deja de ser un problema.";
 choices[48][2] = "Los nodos de la red no son dedicados. Podemos parametrizar exactamente el porcentaje de dedicaci&oacute;n a la red.";
 choices[48][3] = "No ser&aacute; necesario modificar las aplicaciones desarrolladas para que &eacute;stas puedan ser ejecutadas en la arquitetura Grid.";
 answers[48] = choices[48][3];
 units[48] = "45";
 comments[48] = "Id Pregunta: 1912. ";


//  Id pregunta: 4126 AÃ±o de creación de pregunta: 2006-01-01
 questions[49]= "50)  Protocolo que permite a programas dispersos sobre diferentes sistemas operativos interactuar entre ellos. Esta definici&oacute;n no corresponde con:";
 choices[49]= new Array();
 choices[49][0] = "CORBA";
 choices[49][1] = "SOAP";
 choices[49][2] = "RMI";
 choices[49][3] = "DCOM";
 answers[49] = choices[49][3];
 units[49] = "50";
 comments[49] = "Id Pregunta: 4126. ";


//  Id pregunta: 4127 AÃ±o de creación de pregunta: 2006-01-01
 questions[50]= "51)  Protocolo ligero que permite a programas dispersos sobre diferentes sistemas operativos interactuar entre ellos, incluso detr&aacute;s de un cortafuegos";
 choices[50]= new Array();
 choices[50][0] = "CORBA";
 choices[50][1] = "SOAP";
 choices[50][2] = "RMI";
 choices[50][3] = "DCOM";
 answers[50] = choices[50][1];
 units[50] = "50";
 comments[50] = "Id Pregunta: 4127. ";


//  Id pregunta: 4191 AÃ±o de creación de pregunta: 2006-01-01
 questions[51]= "52)  Para ver los saltos en la ruta entre dos servidores utilizo el comando";
 choices[51]= new Array();
 choices[51][0] = "ping";
 choices[51][1] = "netstat";
 choices[51][2] = "tracert o traceroute";
 choices[51][3] = "ipconfig / ifconfig";
 answers[51] = choices[51][2];
 units[51] = "50";
 comments[51] = "Id Pregunta: 4191. ";


//  Id pregunta: 4313 AÃ±o de creación de pregunta: 2007-01-01
 questions[52]= "53)  Indique la respuesta incorrecta. La utilizaci&oacute;n de &ldquo;web farms&rdquo; o granjas de servidores:";
 choices[52]= new Array();
 choices[52][0] = "Libera al usuario final de tener que saber qu&eacute; servidor est&aacute; procesando su petici&oacute;n.";
 choices[52][1] = "Reduce el riesgo de errores de operaciones, con el resultado de que los usuarios finales ven mejorada la fiabilidad y una mayor disponibilidad del sistema.";
 choices[52][2] = "Simplifica notablemente la gesti&oacute;n del sistema; las acciones que afectan a m&uacute;ltiples recursos pueden ser llevadas a cabo con un &uacute;nico comando, mientras que los recursos est&aacute; repartidos entre los m&uacute;ltiples sistemas en diferentes m&aacute;quinas.";
 choices[52][3] = "Minimiza el coste de una instalaci&oacute;n web.";
 answers[52] = choices[52][3];
 units[52] = "49";
 comments[52] = "Id Pregunta: 4313. ";


//  Id pregunta: 4454 AÃ±o de creación de pregunta: 2007-01-01
 questions[53]= "54)  El sistema de almacenamiento SAN:";
 choices[53]= new Array();
 choices[53][0] = "Se corresponde con una red independiente de almacenamiento de altas prestaciones basada en tecnolog&iacute;a de fibra &oacute;ptica.";
 choices[53][1] = "Se corresponde con el sistema de conexi&oacute;n directa (discos en RAID, cinta o disco &oacute;ptico) a un servidor que procesa todas as peticiones de archivos.";
 choices[53][2] = "Tiene una serie de limitaciones entre las que destaca su falta de escalabilidad, lo que hace que su use sea limitado.";
 choices[53][3] = "Se corresponde con un dispositivo de almacenamiento que se conecta a una LAN en la que est&aacute;n conectados los dem&aacute;s equipos , normalmente una Ethernet, y que posee una ip propia.";
 answers[53] = choices[53][0];
 units[53] = "48";
 comments[53] = "Id Pregunta: 4454. ";


//  Id pregunta: 4828 AÃ±o de creación de pregunta: 2007-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l de las siguientes NO es una caracter&iacute;stica del interfaz Serial ATA (Advanced Technology Attachment)?";
 choices[54]= new Array();
 choices[54][0] = "No precisa se&ntilde;al de reloj externa";
 choices[54][1] = "Por restricciones el&eacute;ctricas, el cable de conexi&oacute;n no puede exceder de 50 cent&iacute;metros";
 choices[54][2] = "Cada se&ntilde;al de datos se transmite por diferencia de voltajes entre dos l&iacute;neas";
 choices[54][3] = "La conexi&oacute;n entre puerto y dispositivo se hace en modo punto a punto y no mediante bus";
 answers[54] = choices[54][1];
 units[54] = "48";
 comments[54] = "Id Pregunta: 4828. ";


//  Id pregunta: 5118 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  &iquest;C&oacute;mo se denomina cada de una de las particiones l&oacute;gicas de una Storage Area Network?";
 choices[55]= new Array();
 choices[55][0] = "LUN";
 choices[55][1] = "HBA";
 choices[55][2] = "Cluster";
 choices[55][3] = "Uscsi";
 answers[55] = choices[55][0];
 units[55] = "48";
 comments[55] = "Id Pregunta: 5118. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5420 AÃ±o de creación de pregunta: 2003-01-01
 questions[56]= "57)  Defina Throughput";
 choices[56]= new Array();
 choices[56][0] = "Cantidad de trabajo &uacute;til ejecutado por unidad de tiempo en un entorno de carga determinado (medido en trabajos por hora o transacciones por segundo)";
 choices[56][1] = "M&aacute;xima cantidad de trabajo &uacute;til que se puede realizar por unidad de tiempo en un entorno de carga determinado (medido en trabajos por hora o transacciones por segundo)";
 choices[56][2] = "&quot;swing job&quot; o trabajo excedentario que se puede realizar antes de llegar a la saturaci&oacute;n (medido en trabajos por hora o transacciones por segundo)";
 choices[56][3] = "M&iacute;nima cantidad de trabajo &uacute;til que se puede realizar por unidad de tiempo en un entorno de carga determinado (medido en trabajos por hora o transacciones por segundo)";
 answers[56] = choices[56][0];
 units[56] = "45";
 comments[56] = "Id Pregunta: 5420. Castilla y Le&oacute;n";


//  Id pregunta: 5631 AÃ±o de creación de pregunta: 2003-01-01
 questions[57]= "58)  Una soluci&oacute;n RISC se caracteriza por:";
 choices[57]= new Array();
 choices[57][0] = "Pocos formatos de instrucci&oacute;n (longitud fija)";
 choices[57][1] = "Muchos modos de direccionamiento";
 choices[57][2] = "Dos instrucciones de almacenamiento (load/store)";
 choices[57][3] = "Tanto a) como c)";
 answers[57] = choices[57][3];
 units[57] = "46";
 comments[57] = "Id Pregunta: 5631. ";


//  Id pregunta: 5638 AÃ±o de creación de pregunta: 2003-01-01
 questions[58]= "59)  Indique cu&aacute;l de las siguientes opciones es err&oacute;nea:";
 choices[58]= new Array();
 choices[58][0] = "Un sistema de almacenamiento NAS tiene la ventaja de que no sobrecarga la red";
 choices[58][1] = "En un sistema de almacenamiento DAS se aprovechan los excedentes de los nodos";
 choices[58][2] = "Las siglas SAN hacen referencia a &quot;Storage Area Network&quot;";
 choices[58][3] = "Un dispositivo NAS comparte ficheros, mientras que en una SAN se comparten dispositivos de bloques";
 answers[58] = choices[58][0];
 units[58] = "48";
 comments[58] = "Id Pregunta: 5638. ";


//  Id pregunta: 5639 AÃ±o de creación de pregunta: 2003-01-01
 questions[59]= "60)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es err&oacute;nea:";
 choices[59]= new Array();
 choices[59][0] = "Un microcomputador dispone de una CPU basada en un &uacute;nico microprocesador (chip)";
 choices[59][1] = "Un computador &oacute;ptico se basa en las propiedades de la luz para el tratamiento de la informaci&oacute;n";
 choices[59][2] = "Un computador empotrado es un computador de prop&oacute;sito especial, dise&ntilde;ado para llevar a cabo una funci&oacute;n dedicada concreta";
 choices[59][3] = "Un nanocomputador se basa en tecnolog&iacute;a de silicio/semiconductores";
 answers[59] = choices[59][3];
 units[59] = "49";
 comments[59] = "Id Pregunta: 5639. ";


//  Id pregunta: 6448 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  En un sistema de almacenamiento en RAID 5:";
 choices[60]= new Array();
 choices[60][0] = "Se guardan dos paridades para cada bloque de informaci&oacute;n, cada una de ellas alojada en un disco diferente";
 choices[60][1] = "Se asigna un bloque de paridad por cada bloque de informaci&oacute;n, asignando un bloque alternativo de cada disco para almacenar esa paridad";
 choices[60][2] = "Se usa una divisi&oacute;n de datos a nivel de bloques con un disco de paridad dedicado";
 choices[60][3] = "Los datos se dividen a nivel de bits, en lugar de a nivel de bloques";
 answers[60] = choices[60][1];
 units[60] = "48";
 comments[60] = "Id Pregunta: 6448. Castilla La Mancha 2009";


//  Id pregunta: 7152 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  En un disco duro, la unidad m&aacute;s peque&ntilde;a en la que se puede escribir o leer informaci&oacute;n es:";
 choices[61]= new Array();
 choices[61][0] = "La pista";
 choices[61][1] = "El cilindro";
 choices[61][2] = "La cabeza de lectura/escritura";
 choices[61][3] = "El sector";
 answers[61] = choices[61][3];
 units[61] = "48";
 comments[61] = "Id Pregunta: 7152. Examen TIC B 2009";


//  Id pregunta: 7153 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  Para crear discos virtuales se utiliza tecnolog&iacute;a RAID se&ntilde;ale la opci&oacute;n falsa:";
 choices[62]= new Array();
 choices[62][0] = "El RAID 0 aporta mayor disponibilidad que el RAID  1";
 choices[62][1] = "El RAID  1 cuenta con una configuraci&oacute;n de discos en espejo";
 choices[62][2] = "El coste de RAID 1 es mayor que el de RAID 5.";
 choices[62][3] = "El RAID 5 usa divisi&oacute;n de datos a nivel de bloques distribuyendo la informaci&oacute;n de paridad entre todos los discos miembros del conjunto";
 answers[62] = choices[62][0];
 units[62] = "48";
 comments[62] = "Id Pregunta: 7153. Examen TIC B 2009";


//  Id pregunta: 8197 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  Indique cu&aacute;l es el cuadrado del n&uacute;mero hexadecimal 0xFFFF: ";
 choices[63]= new Array();
 choices[63][0] = "0x100000001. ";
 choices[63][1] = "0xFFFFFFFF.";
 choices[63][2] = "0xFFFE0001.";
 choices[63][3] = "0xFFFE0002";
 answers[63] = choices[63][2];
 units[63] = "46";
 comments[63] = "Id Pregunta: 8197. Examen TIC A1 2010";


//  Id pregunta: 8252 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  Cuando existe particionado a nivel de byte, m&aacute;s un disco de paridad dedicado, se trata de:";
 choices[64]= new Array();
 choices[64][0] = "RAID 3.";
 choices[64][1] = "RAID 4.";
 choices[64][2] = "RAID 5.";
 choices[64][3] = "RAID 6.";
 answers[64] = choices[64][0];
 units[64] = "48";
 comments[64] = "Id Pregunta: 8252. Examen TIC A1 2010";


//  Id pregunta: 8321 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  &iquest;Cu&aacute;l de las siguientes sentencias JCL (Job Control language) marca el final de un trabajo? ";
 choices[65]= new Array();
 choices[65][0] = "//";
 choices[65][1] = "// JOB ";
 choices[65][2] = "//*";
 choices[65][3] = "// DD ";
 answers[65] = choices[65][0];
 units[65] = "50";
 comments[65] = "Id Pregunta: 8321. Examen TIC A2 2010";


//  Id pregunta: 8406 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  Cu&aacute;l de las siguientes afirmaciones en referencia a la arquitectura de computadores CISC (Complex Instruction Set Computer) es FALSA?";
 choices[66]= new Array();
 choices[66][0] = "Se caracteriza por tener un juego de instrucciones muy amplio.";
 choices[66][1] = "Tiene muchos modos de direccionamiento";
 choices[66][2] = "Tiene varios formatos de instrucci&oacute;n (de longitud variable)";
 choices[66][3] = "Su unidad de control es cableada";
 answers[66] = choices[66][3];
 units[66] = "46";
 comments[66] = "Id Pregunta: 8406. Examen TIC A2 2010";


//  Id pregunta: 8420 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  &iquest;Qu&eacute; tipo de conector de alta velocidad (anteriormente conocido por su nombre clave Light Peak) hace uso de la tecnolog&iacute;a &oacute;ptica llegando a ofrecer anchos de banda de hasta 10 Gbps?";
 choices[67]= new Array();
 choices[67][0] = "FireWire";
 choices[67][1] = "Thunderbolt";
 choices[67][2] = "USB";
 choices[67][3] = "HDMI";
 answers[67] = choices[67][1];
 units[67] = "47";
 comments[67] = "Id Pregunta: 8420. ";


//  Id pregunta: 8460 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  En una SAN, la direcci&oacute;n f&iacute;sica de una HBA se denomina:";
 choices[68]= new Array();
 choices[68][0] = "WWN";
 choices[68][1] = "MAC";
 choices[68][2] = "SPOF";
 choices[68][3] = "IP";
 answers[68] = choices[68][0];
 units[68] = "48";
 comments[68] = "Id Pregunta: 8460. Analista Ayto. Madrid 2010";


//  Id pregunta: 8727 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  &iquest;Cu&aacute;l es el protocolo que permite hacer tunneling en Fibre Channel?";
 choices[69]= new Array();
 choices[69][0] = "iSCSI";
 choices[69][1] = "sSCSI";
 choices[69][2] = "iFCP";
 choices[69][3] = "FCIP";
 answers[69] = choices[69][3];
 units[69] = "48";
 comments[69] = "Id Pregunta: 8727. Examen UPM A2 2011";


//  Id pregunta: 8752 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  &iquest;En qu&eacute; generaci&oacute;n de ordenadores se empez&oacute; a utilizar el transistor?";
 choices[70]= new Array();
 choices[70][0] = "En la primera generaci&oacute;n,";
 choices[70][1] = "En la segunda generaci&oacute;n";
 choices[70][2] = "En la tercera generaci&oacute;n.";
 choices[70][3] = "En la cuarta generaci&oacute;n";
 answers[70] = choices[70][1];
 units[70] = "45";
 comments[70] = "Id Pregunta: 8752. Examen TIC A2 2010 interna";


//  Id pregunta: 8786 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  &iquest;A cu&aacute;l de las siguientes arquitecturas paralelas pertenecen las arquitecturas Pipeline?";
 choices[71]= new Array();
 choices[71][0] = "SISD";
 choices[71][1] = "SIMD";
 choices[71][2] = "MISD";
 choices[71][3] = "MIMD";
 answers[71] = choices[71][2];
 units[71] = "45";
 comments[71] = "Id Pregunta: 8786. Examen UPM A2 2011";


//  Id pregunta: 9118 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  &iquest;C&oacute;mo se pueden clasificar los sistemas SIMD?";
 choices[72]= new Array();
 choices[72][0] = "Con CPU particionada";
 choices[72][1] = "Con m&uacute;ltiples ALUS";
 choices[72][2] = "Como A) y como B)";
 choices[72][3] = "Ninguna respuesta es correcta";
 answers[72] = choices[72][2];
 units[72] = "45";
 comments[72] = "Id Pregunta: 9118. ";


//  Id pregunta: 9133 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  &iquest;C&oacute;mo se pueden clasificar los perif&eacute;ricos seg&uacute;n su funci&oacute;n?";
 choices[73]= new Array();
 choices[73][0] = "de entrada";
 choices[73][1] = "de salida";
 choices[73][2] = "Que realizan funciones de almacenamiento auxiliar";
 choices[73][3] = "Todas las anteriores";
 answers[73] = choices[73][3];
 units[73] = "47";
 comments[73] = "Id Pregunta: 9133. ";


//  Id pregunta: 9136 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  &iquest;Qu&eacute; es FSB?";
 choices[74]= new Array();
 choices[74][0] = "Front Side Bus. Representa el camino por el cual es posible integrar en la placa base los distintos componentes hardware para el intercambio de informaci&oacute;n entre microprocesador, memoria y el subsistema de Entrada/Salida";
 choices[74][1] = "First Serial Bus. Es el bus que se utiliza en la comunicaci&oacute;n con dispositivos serie como un m&oacute;dem";
 choices[74][2] = "Front Side Bus. Su velocidad siempre es superior a la velocidad interna del microprocesador.";
 choices[74][3] = "Front Side Bus. Se relaciona con el microprocesador mediante la frecuencia (velocidad)";
 answers[74] = choices[74][0];
 units[74] = "47";
 comments[74] = "Id Pregunta: 9136. ";


//  Id pregunta: 9138 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  &iquest;Cu&aacute;l no es una funci&oacute;n l&oacute;gica que suele integrar cualquiera de los chipsets actuales?";
 choices[75]= new Array();
 choices[75][0] = "soporte para el microprocesador";
 choices[75][1] = "Controlador de memoria (MMU, Memory Management Unit)";
 choices[75][2] = "Reloj de Tiempo Real (RTC)";
 choices[75][3] = "Controlador de temperatura.";
 answers[75] = choices[75][3];
 units[75] = "47";
 comments[75] = "Id Pregunta: 9138. ";


//  Id pregunta: 9148 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  &iquest;En qu&eacute; se diferencia la memoria flash de tipo NOR y la de tipo NAND?";
 choices[76]= new Array();
 choices[76][0] = "La de NAND usa un t&uacute;nel de inyecci&oacute;n para la escritura y para el borrado un t&uacute;nel de &ldquo;soltado&rdquo;";
 choices[76][1] = "Tienen un coste bastante inferior.";
 choices[76][2] = "S&oacute;lo permiten acceso secuencial (m&aacute;s orientado a dispositivos de almacenamiento masivo) frente a las memorias flash basadas en NOR que permiten lectura de acceso aleatorio.";
 choices[76][3] = "Todas son correctas.";
 answers[76] = choices[76][3];
 units[76] = "47";
 comments[76] = "Id Pregunta: 9148. ";


//  Id pregunta: 9149 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  &iquest;C&oacute;mo se clasifican los m&eacute;todos de grabaci&oacute;n en cinta magn&eacute;tica?";
 choices[77]= new Array();
 choices[77][0] = "Lineal, circular y transversal";
 choices[77][1] = "Circular, transversal y Helical";
 choices[77][2] = "Lineal, Transversal, Helical";
 choices[77][3] = "Trasnversal y Helical";
 answers[77] = choices[77][2];
 units[77] = "47";
 comments[77] = "Id Pregunta: 9149. ";


//  Id pregunta: 9210 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  &iquest;C&oacute;mo son las conexiones FC?";
 choices[78]= new Array();
 choices[78][0] = "Punto a punto";
 choices[78][1] = "Bucle arbitrado";
 choices[78][2] = "Red Conmutada";
 choices[78][3] = "Todas son v&aacute;lidas";
 answers[78] = choices[78][3];
 units[78] = "48";
 comments[78] = "Id Pregunta: 9210. ";


//  Id pregunta: 9218 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  &iquest;Qu&eacute; es WAFS?";
 choices[79]= new Array();
 choices[79][0] = "Wide Area File Service";
 choices[79][1] = "Una evoluci&oacute;n del empaquetado de audio WAV";
 choices[79][2] = "Un tipo de File System";
 choices[79][3] = "Una t&eacute;cnica de compresi&oacute;n de imagen.";
 answers[79] = choices[79][0];
 units[79] = "48";
 comments[79] = "Id Pregunta: 9218. ";


//  Id pregunta: 9227 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  &iquest;C&oacute;mo es por lo general el paso de mensajes mediante la primitiva send-receive?";
 choices[80]= new Array();
 choices[80][0] = "S&iacute;ncrona";
 choices[80][1] = "As&iacute;ncrona";
 choices[80][2] = "Se realiza una llamada desde un cliente a una funci&oacute;n o procedimiento de un servidor.";
 choices[80][3] = "Se instancia un objeto del servidor.";
 answers[80] = choices[80][1];
 units[80] = "50";
 comments[80] = "Id Pregunta: 9227. ";


//  Id pregunta: 9268 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  &iquest;C&oacute;mo se llama la conexi&oacute;n que recientemente ha lanzado Intel que supera en velocidad a USB 3.0, basada en LightPeak? ";
 choices[81]= new Array();
 choices[81][0] = "Thundercat";
 choices[81][1] = "LightFire";
 choices[81][2] = "Thunderbolt";
 choices[81][3] = "USB 4.0 ";
 answers[81] = choices[81][0];
 units[81] = "47";
 comments[81] = "Id Pregunta: 9268. Examen TICA2-2011";


//  Id pregunta: 9277 AÃ±o de creación de pregunta: 2013-01-01
 questions[82]= "83)  Indique la frase correcta acerca de las arquitecturas de microprocesadores:";
 choices[82]= new Array();
 choices[82][0] = "La arquitectura CISC es m&aacute;s moderna que la arquitectura RISC y busca ampliar el conjunto de instrucciones de &eacute;sta.";
 choices[82][1] = "La arquitectura RISC dispone de un n&uacute;mero reducido de instrucciones y gran variedad de registros de uso dedicado";
 choices[82][2] = "La arquitectura RISC maneja instrucciones con formato regular y complejos modos de direccionamiento.";
 choices[82][3] = "La arquitectura CISC dispone de instrucciones complejas y dependiendo de ellas maneja diferentes longitudes de palabra.";
 answers[82] = choices[82][3];
 units[82] = "46";
 comments[82] = "Id Pregunta: 9277. Examen TIC-A1 2011";


//  Id pregunta: 9665 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  Cu&aacute;l de las siguientes caracter&iacute;sticas no pertenece a un sistema multiprocesador o mainframe:";
 choices[83]= new Array();
 choices[83][0] = "Son soluciones altamente propietarias para entornos no heterog&eacute;neos.";
 choices[83][1] = "La forma de trabajo predominante en este tipo de sistemas es el BATCH.";
 choices[83][2] = "Se paralelizan sistem&aacute;ticamente las tareas y procesos, aprovechando su alto n&uacute;mero de procesadores.";
 choices[83][3] = "En el mercado hay un gran n&uacute;mero de fabricantes de dichos sistemas.";
 answers[83] = choices[83][3];
 units[83] = "45";
 comments[83] = "Id Pregunta: 9665. ";


//  Id pregunta: 9666 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  La taxonom&iacute;a de Flynn:";
 choices[84]= new Array();
 choices[84][0] = "Es una clasificaci&oacute;n cl&aacute;sica de computadores en funci&oacute;n de su arquitectura.";
 choices[84][1] = "Se basa en el flujo que siguen los datos y las instrucciones dentro de una m&aacute;quina.";
 choices[84][2] = "Se divide en cuatro categor&iacute;as.";
 choices[84][3] = "Todas las anteriores.";
 answers[84] = choices[84][3];
 units[84] = "45";
 comments[84] = "Id Pregunta: 9666. ";


//  Id pregunta: 9673 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  En Grid Computing:";
 choices[85]= new Array();
 choices[85][0] = "Podemos conseguir cerca del 100% de uso de CPU.";
 choices[85][1] = "Los nodos no tienen que estar dedicados, puesto que su caracter&iacute;stica m&aacute;s importante es que la escalabilidad es parametrizable.";
 choices[85][2] = "Son sistemas heterog&eacute;neos.";
 choices[85][3] = "Todas las anteriores.";
 answers[85] = choices[85][3];
 units[85] = "45";
 comments[85] = "Id Pregunta: 9673. ";


//  Id pregunta: 9723 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  &iquest;Cu&aacute;l de entre las siguientes es una de las caracter&iacute;sticas del Cloud Computing?";
 choices[86]= new Array();
 choices[86][0] = "El consumo a la carta: un consumidor puede proporcionarse las necesidades TIC que precise sin que medie el proveedor.";
 choices[86][1] = "El acceso a las capacidades disponibles en la red se puede hacer usando plataformas heterog&eacute;neas.";
 choices[86][2] = "Los recursos TIC del proveedor se reservan para ser usados por varios consumidores.";
 choices[86][3] = "Todas las respuestas anteriores son ciertas.";
 answers[86] = choices[86][3];
 units[86] = "47";
 comments[86] = "Id Pregunta: 9723. Examen TIC-A1 2013";


//  Id pregunta: 10313 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  Comparando NAS (Network-attached Storage) con SAN (Storage Area Network):";
 choices[87]= new Array();
 choices[87][0] = "NAS opera a nivel de fichero y SAN a nivel de bloque.";
 choices[87][1] = "NAS opera a nivel de bloque y SAN a nivel de fichero.";
 choices[87][2] = "Ambos operan a nivel de bloque.";
 choices[87][3] = "Ambos operan a nivel de fichero.";
 answers[87] = choices[87][0];
 units[87] = "48";
 comments[87] = "Id Pregunta: 10313. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10526 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  Seg&uacute;n la taxonomia de Flynn, un procesador vectorial ser&iacute;a considerado como";
 choices[88]= new Array();
 choices[88][0] = "SISD";
 choices[88][1] = "SIMD";
 choices[88][2] = "MISD";
 choices[88][3] = "MIMD";
 answers[88] = choices[88][1];
 units[88] = "45";
 comments[88] = "Id Pregunta: 10526. NULL";


//  Id pregunta: 10535 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  &iquest;Cu&aacute;l de las siguientes no es una ventaja de los discos duros de estado s&oacute;lido respecto a los tradicionales?";
 choices[89]= new Array();
 choices[89][0] = "Generan menos ruido y calor que los discos duros tradicionales";
 choices[89][1] = "Tienen un menor consumo energ&eacute;tico";
 choices[89][2] = "La latencia de acceso a los datos es menor";
 choices[89][3] = "Tienen mayor velocidad en operaciones I/O secuenciales";
 answers[89] = choices[89][3];
 units[89] = "48";
 comments[89] = "Id Pregunta: 10535. NULL";


//  Id pregunta: 10613 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  Indique cu&aacute;l es el orden correcto de las siguientes tecnolog&iacute;as de disco, de mayor a menor tiempo de latencia:";
 choices[90]= new Array();
 choices[90][0] = "SCSI, IDE y SATA.";
 choices[90][1] = "SATA, SSD y FC.";
 choices[90][2] = "SSD, SCSI e IDE.";
 choices[90][3] = "IDE, SSD y SAS.";
 answers[90] = choices[90][2];
 units[90] = "48";
 comments[90] = "Id Pregunta: 10613. ";


//  Id pregunta: 10786 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Globus Toolkit es:";
 choices[91]= new Array();
 choices[91][0] = "Un framework de IBM que proporciona caracter&iacute;sticas para desarrollar, hacer debug y testear aplicaciones AJAX.";
 choices[91][1] = "Un conjunto de herramientas open source para construir grids computacionales.";
 choices[91][2] = "Un framework que contiene APIs y widgets para facilitar el desarrollo de aplicaciones Web que utilicen tecnolog&iacute;a AJAX y programaci&oacute;n paralela.";
 choices[91][3] = "Una librer&iacute;a Python, modular y extensible, que ofrece una API para desarrollar aplicaciones distribuidas.";
 answers[91] = choices[91][1];
 units[91] = "45";
 comments[91] = "Id Pregunta: 10786. Examen GSI 2014";


//  Id pregunta: 10917 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  La tasa de transferencia m&aacute;xima que soporta el Serial Advanced Technology Attachment Express (SATA Express) es de hasta:";
 choices[92]= new Array();
 choices[92][0] = "6 Gbps.";
 choices[92][1] = "16 Gbps.";
 choices[92][2] = "8 Gbps.";
 choices[92][3] = "3 Gbps.";
 answers[92] = choices[92][1];
 units[92] = "46, 48";
 comments[92] = "Id Pregunta: 10917. Examen GSI 2014";


//  Id pregunta: 11029 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Cu&aacute;l es una plataforma pionera de software abierto que permite el desarrollo de clouds privados de infraestructuras como servicio (IaaS)?";
 choices[93]= new Array();
 choices[93][0] = "VMWARE";
 choices[93][1] = "EUCALYPTUS";
 choices[93][2] = "LYRIUS";
 choices[93][3] = "AMAPOLUS";
 answers[93] = choices[93][1];
 units[93] = "47";
 comments[93] = "Id Pregunta: 11029. ";


//  Id pregunta: 11089 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Supongamos que sustituimos un procesador utilizado como servidor web por otro 10 veces m&aacute;s r&aacute;pido. Si el procesador inicial est&aacute; ocupado con c&aacute;lculos el 40% del tiempo y esperando por E/S el 60%,  &iquest;qu&eacute; incremento global de velocidad se obtiene con la mejora?";
 choices[94]= new Array();
 choices[94][0] = "1.56";
 choices[94][1] = "10";
 choices[94][2] = "4";
 choices[94][3] = "6";
 answers[94] = choices[94][0];
 units[94] = "45";
 comments[94] = "Id Pregunta: 11089. Ley de Amdahl";


//  Id pregunta: 11090 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  El procesador intel i7 utiliza una jerarqu&iacute;a de cache de 3 niveles, L1, L2 y L3. Indicar la respuesta INCORRECTA";
 choices[95]= new Array();
 choices[95][0] = "Respecto al tama&ntilde;o de la memoria, L1&gt;L2&gt;L3";
 choices[95][1] = "Los tres niveles utilizan un tama&ntilde;o de bloque de 64 bytes";
 choices[95][2] = "El nivel 3, L3, es compartido por todos los cores del chip";
 choices[95][3] = "El nivel 1, L1, presenta la latencia m&aacute;s alta ";
 answers[95] = choices[95][3];
 units[95] = "45";
 comments[95] = "Id Pregunta: 11090. ";


//  Id pregunta: 11320 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Cu&aacute;l de las siguientes caracter&iacute;sticas responde a las que posee un disco de tipo SSD (Solid State Drive)";
 choices[96]= new Array();
 choices[96][0] = "Usan la misma interfaz que los discos duros convencionales y son por tanto f&aacute;cilmente intercambiables sin necesidades de tarjetas adicionales";
 choices[96][1] = "Usan platos giratorios magn&eacute;ticos";
 choices[96][2] = "Son m&aacute;s sensibles a los golpes que los discos convencionales";
 choices[96][3] = "";
 answers[96] = choices[96][0];
 units[96] = "47";
 comments[96] = "Id Pregunta: 11320. ";


//  Id pregunta: 11506 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Cu&aacute;ntos niveles madurez define el modelo de cloud computing SaaS (Software as a Service) de Microsoft?";
 choices[97]= new Array();
 choices[97][0] = "5";
 choices[97][1] = "4";
 choices[97][2] = "3";
 choices[97][3] = "6";
 answers[97] = choices[97][1];
 units[97] = "47";
 comments[97] = "Id Pregunta: 11506. NULL";


//  Id pregunta: 11525 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  En un entorno de computaci&oacute;n Grid, &iquest;qu&eacute; nombre reciben las agrupaciones din&aacute;micas de diferentes organizaciones f&iacute;sicas o individuos que comparten recursos y colaboran con el fin de lograr un objetivo com&uacute;n?";
 choices[98]= new Array();
 choices[98][0] = "Virtual Organizations (VO).";
 choices[98][1] = "Grid Domain Resources (GDR)";
 choices[98][2] = "Domain Group Policy (DGP).";
 choices[98][3] = "Organization Resource Group (ORG)";
 answers[98] = choices[98][0];
 units[98] = "45";
 comments[98] = "Id Pregunta: 11525. Examen TIC Servicio Extreme&ntilde;o de Salud 2014";


//  Id pregunta: 11528 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Cu&aacute;l de entre las siguientes es una de las caracter&iacute;sticas del Cloud?";
 choices[99]= new Array();
 choices[99][0] = "El consumo a la carta: un consumidor puede proporcionarse las necesidades TIC que precise sin que medie el proveedor.";
 choices[99][1] = "El acceso a las capacidades disponibles en la red se puede hacer usando plataformas heterog&eacute;neas.";
 choices[99][2] = "Los recursos TIC del proveedor se reservan para ser usados por varios consumidores.";
 choices[99][3] = "Todas las respuestas anteriores son ciertas.";
 answers[99] = choices[99][3];
 units[99] = "47";
 comments[99] = "Id Pregunta: 11528. Examen TIC Servicio Extreme&ntilde;o de Salud 2014";


