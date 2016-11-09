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

//  Id pregunta: 739 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  En la arquitectura cliente-servidor es falso que:";
 choices[0]= new Array();
 choices[0][0] = "Cliente y servidor tienen que estar obligatoriamente en distintas m&aacute;quinas";
 choices[0][1] = "Un servidor atiende a muchos clientes";
 choices[0][2] = "Hay m&aacute;s tr&aacute;fico de servidor a cliente que de cliente a servidor";
 choices[0][3] = "Todas las respuestas anteriores son verdaderas";
 answers[0] = choices[0][0];
 units[0] = "50";
 comments[0] = "Id Pregunta: 739. Similar a examen TIC SS A 2003";


//  Id pregunta: 771 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  &iquest;Qu&eacute; significado tienen las siguientes siglas COLD?";
 choices[1]= new Array();
 choices[1][0] = "Computer Output to laser Disk";
 choices[1][1] = "Computer on line disk";
 choices[1][2] = "Computer Optical Laser Disk";
 choices[1][3] = "ninguna de las anteriores";
 answers[1] = choices[1][0];
 units[1] = "48";
 comments[1] = "Id Pregunta: 771. ";


//  Id pregunta: 786 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  Se&ntilde;ale las caracter&iacute;sticas que m&aacute;s se ajustan al est&aacute;ndar IEEE 1394 (Firewire):";
 choices[2]= new Array();
 choices[2][0] = "Hasta 62 dispositivos, 25Mbytes/s";
 choices[2][1] = "Hasta 172 dispositivos, 1.5Mbytes/s";
 choices[2][2] = "Hasta 256 dispositivos, 17Mbytes/s";
 choices[2][3] = "Hasta 1024 dispositivos, 5Mbytes/s";
 answers[2] = choices[2][0];
 units[2] = "47";
 comments[2] = "Id Pregunta: 786. SS-A 2004";


//  Id pregunta: 792 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  En un sistema de memoria virtual, el &quot;bit de suciedad&quot; (dirty bit) se utiliza para:";
 choices[3]= new Array();
 choices[3][0] = "Saber si los datos siguen siendo v&aacute;lidos antes de que la CPU los utilice.";
 choices[3][1] = "Detectar corrupci&oacute;n de datos debida a fallos de hardware o a interferencias electromagn&eacute;ticas.";
 choices[3][2] = "Determinar si los datos se deben escribir en disco antes de ser reemplazados.";
 choices[3][3] = "Saber si los datos ya est&aacute;n disponibles en la memoria cache.";
 answers[3] = choices[3][2];
 units[3] = "47";
 comments[3] = "Id Pregunta: 792. ";


//  Id pregunta: 794 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;Qu&eacute; significan las siglas ASIC en el mundo de la arquitectura de computadores?:";
 choices[4]= new Array();
 choices[4][0] = "Circuitos integrados especializados";
 choices[4][1] = "Advanced Set Instructions Complex";
 choices[4][2] = "Nada";
 choices[4][3] = "Procesadores generales";
 answers[4] = choices[4][0];
 units[4] = "45";
 comments[4] = "Id Pregunta: 794. ";


//  Id pregunta: 831 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;Cree que puede ser posible poner 'virus' en un disquete protegido contra escritura?:";
 choices[5]= new Array();
 choices[5][0] = "No";
 choices[5][1] = "S&iacute;, usando una t&eacute;cnica especial";
 choices[5][2] = "S&oacute;lo si se formata el disco antes";
 choices[5][3] = "S&iacute;, si el disquete ya tiene virus";
 answers[5] = choices[5][0];
 units[5] = "47";
 comments[5] = "Id Pregunta: 831. ";


//  Id pregunta: 841 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Cu&aacute;l de las siguientes afirmaciones se ajusta m&aacute;s a la definici&oacute;n de MIPS?:";
 choices[6]= new Array();
 choices[6][0] = "Expresa la capacidad de ejecuci&oacute;n de instrucciones de una m&aacute;quina";
 choices[6][1] = "Expresa la velocidad de ejecuci&oacute;n en miles de intrucciones por segundo";
 choices[6][2] = "Expresa la potencia de c&aacute;lculo cient&iacute;fico de un computador";
 choices[6][3] = "Expresa la potencia de c&aacute;lculo de generaci&oacute;n de gr&aacute;ficos";
 answers[6] = choices[6][0];
 units[6] = "45";
 comments[6] = "Id Pregunta: 841. ";


//  Id pregunta: 906 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Podr&iacute;a ordenar los siguientes tipos de memoria seg&uacute;n su coste, de mayor a menor?:";
 choices[7]= new Array();
 choices[7][0] = "Registros, Cach&eacute;, Memoria Principal, Disco magn&eacute;tico, Cinta magn&eacute;tica";
 choices[7][1] = "Registros, Cach&eacute;, Disco magn&eacute;tico, Memoria Principal, Cinta magn&eacute;tica";
 choices[7][2] = "Cach&eacute;, Memoria Principal, Disco magn&eacute;tico, Registros, Cinta magn&eacute;tica";
 choices[7][3] = "Todas son falsas";
 answers[7] = choices[7][0];
 units[7] = "47";
 comments[7] = "Id Pregunta: 906. ";


//  Id pregunta: 912 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Qu&eacute; arquitectura paralela se caracteriza por ejecutar una instruccion sobre varios datos de manera simult&aacute;nea?:";
 choices[8]= new Array();
 choices[8][0] = "SIMD";
 choices[8][1] = "MIMD";
 choices[8][2] = "SISD";
 choices[8][3] = "MISD";
 answers[8] = choices[8][0];
 units[8] = "45";
 comments[8] = "Id Pregunta: 912. ";


//  Id pregunta: 922 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Qu&eacute; es el UART?:";
 choices[9]= new Array();
 choices[9][0] = "Universal Asynchronous Receiver Transmitter. Es un microprocesador que act&uacute;a de interfaz entre el bus (paralelo) de la CPU y el puerto serie";
 choices[9][1] = "Universal Asynchronous Receiver Transmitter. Es un dispositivo que adapta terminales as&iacute;ncronos a una red X.25";
 choices[9][2] = "Universal Audio Receiver Transmitter. Es un microprocesador incluido en la tarjeta de sonido que act&uacute;a como receptor y transmisor de las se&ntilde;ales de audio";
 choices[9][3] = "Ninguna de las respuestas anteriores es cierta";
 answers[9] = choices[9][0];
 units[9] = "47";
 comments[9] = "Id Pregunta: 922. ";


//  Id pregunta: 932 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Qu&eacute; es un monitor de teleproceso?:";
 choices[10]= new Array();
 choices[10][0] = "Un sistema operativo de proceso de transacciones";
 choices[10][1] = "Un sistema de gesti&oacute;n de la configuraci&oacute;n";
 choices[10][2] = "Una herramienta de monitorizaci&oacute;n del rendimiento";
 choices[10][3] = "Un sistema de procesamiento as&iacute;ncrono";
 answers[10] = choices[10][0];
 units[10] = "50";
 comments[10] = "Id Pregunta: 932. ";


//  Id pregunta: 957 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Con las siglas SCSI se identifica:";
 choices[11]= new Array();
 choices[11][0] = "Un est&aacute;ndar de facto para la interconexi&oacute;n entre distintas capas de OSI";
 choices[11][1] = "Un est&aacute;ndar para la comunicaci&oacute;n entre el ordenador y los perif&eacute;ricos a &eacute;l conectados";
 choices[11][2] = "Una arquitectura de ordenadores";
 choices[11][3] = "Una tarjeta de video";
 answers[11] = choices[11][1];
 units[11] = "47";
 comments[11] = "Id Pregunta: 957. ";


//  Id pregunta: 979 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  De las siguientes caracter&iacute;sticas de una memoria RAM est&aacute;tica, hay una falsa. Indique cu&aacute;l es:";
 choices[12]= new Array();
 choices[12][0] = "Permite las operaciones de lectura y escritura";
 choices[12][1] = "Requiere refresco";
 choices[12][2] = "Es de direccionamiento aleatorio";
 choices[12][3] = "Es vol&aacute;til";
 answers[12] = choices[12][1];
 units[12] = "47";
 comments[12] = "Id Pregunta: 979. ";


//  Id pregunta: 990 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Dentro del entorno IBM VTAM el rearranque autom&aacute;tico de los recursos de las redes se puede realizar con el producto:";
 choices[13]= new Array();
 choices[13][0] = "MVS";
 choices[13][1] = "NetView";
 choices[13][2] = "JES";
 choices[13][3] = "TSO";
 answers[13] = choices[13][2];
 units[13] = "49";
 comments[13] = "Id Pregunta: 990. ";


//  Id pregunta: 1018 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  El &iacute;ndice m&aacute;ximo de transporte de datos de un bus PCI es:";
 choices[14]= new Array();
 choices[14][0] = "64 Mbytes/segundo";
 choices[14][1] = "16 Mbytes/segundo";
 choices[14][2] = "132 Mbytes/segundo";
 choices[14][3] = "5 Mbytes/segundo";
 answers[14] = choices[14][2];
 units[14] = "47";
 comments[14] = "Id Pregunta: 1018. ";


//  Id pregunta: 1050 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  El Registro de Instrucciones es un &oacute;rgano de control del procesador que sirve para:";
 choices[15]= new Array();
 choices[15][0] = "Llevar el control de las instrucciones m&aacute;quina que se van ejecutando";
 choices[15][1] = "Almacenar la instrucci&oacute;n que se ha de decodificar y ejecutar";
 choices[15][2] = "Es un contador que se va incrementado con los pulsos del reloj maestro";
 choices[15][3] = "Almacenar la direcci&oacute;n de la instrucci&oacute;n que se va a ejecutar";
 answers[15] = choices[15][1];
 units[15] = "47";
 comments[15] = "Id Pregunta: 1050. ";


//  Id pregunta: 1069 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  Elija la respuesta falsa. Un cluster de PCs con Linux, utiliza:";
 choices[16]= new Array();
 choices[16][0] = "MPI, como librer&iacute;a para paso de mensajes";
 choices[16][1] = "Tecnolog&iacute;a NUMA entre todas las m&aacute;quinas";
 choices[16][2] = "Redes de alta velocidad, como Myrinet, O Gigabit ethernet";
 choices[16][3] = "Todas son v&aacute;lidas";
 answers[16] = choices[16][1];
 units[16] = "45";
 comments[16] = "Id Pregunta: 1069. ";


//  Id pregunta: 1086 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  En el modelo cliente/servidor:";
 choices[17]= new Array();
 choices[17][0] = "Pueden elegirse distintos lenguajes de programaci&oacute;n para cada una de las partes";
 choices[17][1] = "Debe utilizarse siempre SQL para los procesos de tratamiento de datos";
 choices[17][2] = "El lenguaje para la parte cliente, debe permitir caracter&iacute;sticas de orientaci&oacute;n al objeto";
 choices[17][3] = "El lenguaje en el que se programen los procesos a ejecutarse en el cliente determina el que se debe utilizar para programar los procesos de los servidores";
 answers[17] = choices[17][0];
 units[17] = "50";
 comments[17] = "Id Pregunta: 1086. ";


//  Id pregunta: 1092 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  En el sector de los procesadores cient&iacute;ficos:";
 choices[18]= new Array();
 choices[18][0] = "Los modelos de procesadores paralelos utilizan chips convencionales, por lo que resultan siempre m&aacute;s econ&oacute;micos que los superordenadores de gran escala.";
 choices[18][1] = "Se utilizan sistemas operativos propietarios.";
 choices[18][2] = "Se emplea el proceso paralelo masivo (MPP).";
 choices[18][3] = "Los procesadores incorporados de terceras partes proporcionan capacidades de proceso en coma flotante y matricial para entornos de mainframe tradicional.";
 answers[18] = choices[18][3];
 units[18] = "45, 46";
 comments[18] = "Id Pregunta: 1092. ";


//  Id pregunta: 1206 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  La arquitectura centralizada tiene como ventaja respecto a la arquitectura distribuida:";
 choices[19]= new Array();
 choices[19][0] = "Que aporta unas posibilidades de trabajo mucho m&aacute;s flexibles y potentes";
 choices[19][1] = "Una m&iacute;nima dependencia de las comunicaciones";
 choices[19][2] = "Una menor complejidad";
 choices[19][3] = "Todas las anteriores";
 answers[19] = choices[19][2];
 units[19] = "50";
 comments[19] = "Id Pregunta: 1206. ";


//  Id pregunta: 1244 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  La t&eacute;cnica o tecnolog&iacute;a consistente en dise&ntilde;ar dispositivos microelectr&oacute;nicos de peque&ntilde;&iacute;simo tama&ntilde;o para, por ejemplo, introducirlos en el cuerpo humano e imitar el comportamiento de sus c&eacute;lulas, se denomina:";
 choices[20]= new Array();
 choices[20][0] = "Tecnolog&iacute;a milim&eacute;trica";
 choices[20][1] = "Microtecnolog&iacute;a";
 choices[20][2] = "Microb&oacute;tica";
 choices[20][3] = "Nanotecnolog&iacute;a";
 answers[20] = choices[20][3];
 units[20] = "47";
 comments[20] = "Id Pregunta: 1244. ";


//  Id pregunta: 1245 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  La teor&iacute;as matem&aacute;ticas de la l&oacute;gica y la probabilidad usada en la computaci&oacute;n desde sus inicios se deben a:";
 choices[21]= new Array();
 choices[21][0] = "Isaac Newton";
 choices[21][1] = "Charles Babbage";
 choices[21][2] = "David Hilbert";
 choices[21][3] = "George Boole";
 answers[21] = choices[21][3];
 units[21] = "46";
 comments[21] = "Id Pregunta: 1245. ";


//  Id pregunta: 1247 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  La Unidad Aritm&eacute;tico L&oacute;gica es la encargada de realizar operaciones realizadas por circuitos electr&oacute;nicos denominados operadores, que se pueden clasificar:";
 choices[22]= new Array();
 choices[22][0] = "Seg&uacute;n su realizaci&oacute;n, los operadores pueden ser aleatorios o secuenciales";
 choices[22][1] = "Por el tipo de operaci&oacute;n realizada : l&oacute;gicas (NOT, AND, OR, XOR) y aritm&eacute;ticas. (suma, resta multiplicaci&oacute;n, divisi&oacute;n, complementaci&oacute;n)";
 choices[22][2] = "En paralelo, se realiza sobre todos los d&iacute;gitos binarios de los operandos al mismo tiempo, en serie se procesa la operaci&oacute;n d&iacute;gito a d&iacute;gito";
 choices[22][3] = "De desplazamiento, utilizando un operador de suma-resta y el algoritmo adecuado";
 answers[22] = choices[22][2];
 units[22] = "47";
 comments[22] = "Id Pregunta: 1247. ";


//  Id pregunta: 1253 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Las aplicaciones cliente/servidor suelen clasificarse en:";
 choices[23]= new Array();
 choices[23][0] = "Aplicaciones de presentaci&oacute;n, de negocio o de gesti&oacute;n de datos";
 choices[23][1] = "Aplicaciones distribuidas o centralizadas";
 choices[23][2] = "Aplicaciones middleware y OLTP";
 choices[23][3] = "Aplicaciones de dos niveles y aplicaciones de tres niveles";
 answers[23] = choices[23][3];
 units[23] = "50";
 comments[23] = "Id Pregunta: 1253. ";


//  Id pregunta: 1279 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Los procedimientos b&aacute;sicos para realizar una transferencia elemental entre la UCP y un perif&eacute;rico son:";
 choices[24]= new Array();
 choices[24][0] = "E/S programada, acceso directo a memoria y canal de E/S";
 choices[24][1] = "E/S programada, interrupciones y acceso directo a memoria";
 choices[24][2] = "Memoria multipuerta y robo de ciclo";
 choices[24][3] = "Canal selector para perif&eacute;ricos r&aacute;pidos y canal multiplexor para perif&eacute;ricos lentos";
 answers[24] = choices[24][1];
 units[24] = "47";
 comments[24] = "Id Pregunta: 1279. ";


//  Id pregunta: 1290 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  MPI:";
 choices[25]= new Array();
 choices[25][0] = "Es una librer&iacute;a para programaci&oacute;n por paso de mensajes, en entornos distribuidos";
 choices[25][1] = "Es una m&aacute;quina virtual que ejecuta los programas, independientemente del lenguaje con el que se escribieran";
 choices[25][2] = "Es una manera de llamar a todas las aplicaciones que hacen uso de SOAP sobre HTTP";
 choices[25][3] = "Todas son falsas";
 answers[25] = choices[25][0];
 units[25] = "50";
 comments[25] = "Id Pregunta: 1290. JCED - Preparatic XVII";


//  Id pregunta: 1328 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  Se denomina firmware a:";
 choices[26]= new Array();
 choices[26][0] = "El software que suele suministrar el fabricante con sus equipos";
 choices[26][1] = "El c&oacute;digo de bajo nivel que es com&uacute;n a todos los ordenadores";
 choices[26][2] = "El componente f&iacute;sico que permite que el ordenador ejecute instrucciones m&aacute;quina";
 choices[26][3] = "Programa empotrado que establece la l&oacute;gica de bajo nivel que controla los circuitos electr&oacute;nicos de un dispositivo.";
 answers[26] = choices[26][3];
 units[26] = "47";
 comments[26] = "Id Pregunta: 1328. ";


//  Id pregunta: 1348 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  Se&ntilde;ale la respuesta correcta. La diferencia entre un procesador con tecnolog&iacute;a RISC y tecnolog&iacute;a CISC es:";
 choices[27]= new Array();
 choices[27][0] = "El RISC tiene m&aacute;s registros";
 choices[27][1] = "El CISC tiene un juego de instrucciones m&aacute;s amplio";
 choices[27][2] = "El RISC es m&aacute;s r&aacute;pido en la ejecuci&oacute;n de instrucciones";
 choices[27][3] = "Todas las respuestas anteriores son ciertas";
 answers[27] = choices[27][3];
 units[27] = "46";
 comments[27] = "Id Pregunta: 1348. ";


//  Id pregunta: 1367 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  Si se comparan los diferentes sistemas de almacenamiento secundario:";
 choices[28]= new Array();
 choices[28][0] = "La velocidad de transferencia es del mismo orden en una unidad de cinta DAT que en una unidad de disco magn&eacute;tico";
 choices[28][1] = "La capacidad de almacenamiento de una cinta de cartucho normal de 0,25&quot; es similar a la de un CD-ROM de 5&quot; 1/4";
 choices[28][2] = "Los discos WORM y los magneto-opticos ofrecen la posibilidad de borrar y reescribir informaci&oacute;n";
 choices[28][3] = "En las unidades de cinta no se puede intercalar informaci&oacute;n adicional, por el contrario, para hacerlo habr&iacute;a que regrabar todo el resto de la cinta";
 answers[28] = choices[28][3];
 units[28] = "48";
 comments[28] = "Id Pregunta: 1367. ";


//  Id pregunta: 1370 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  Si un ordenador tiene un tiempo de acceso a memoria de 60 nanosegundos, una longitud de palabra de 16 bits, memoria ECC y utiliza 24 bits para direccionamiento, se puede decir que la memoria m&aacute;xima que puede direccionar es de:";
 choices[29]= new Array();
 choices[29][0] = "8 Megabytes";
 choices[29][1] = "16 Megabytes";
 choices[29][2] = "32 Megabytes";
 choices[29][3] = "64 Megabytes";
 answers[29] = choices[29][2];
 units[29] = "47";
 comments[29] = "Id Pregunta: 1370. ";


//  Id pregunta: 1386 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  Un ordenador con multiprocesamiento sim&eacute;trico (SMP). Dentro de la clasificaci&oacute;n de M.J. Flinn se clasificar&iacute;a como:";
 choices[30]= new Array();
 choices[30][0] = "SISD";
 choices[30][1] = "MIMD";
 choices[30][2] = "MISD";
 choices[30][3] = "SIMD";
 answers[30] = choices[30][1];
 units[30] = "45";
 comments[30] = "Id Pregunta: 1386. ";


//  Id pregunta: 1393 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  Un sistema de almacenamiento RAID 0:";
 choices[31]= new Array();
 choices[31][0] = "Es un sistema tolerante a fallos de un disco";
 choices[31][1] = "Es un sistema que guarda en disco la informaci&oacute;n de paridad del resto de los discos";
 choices[31][2] = "Requiere al menos 5 discos";
 choices[31][3] = "Requiere como m&iacute;nimo dos discos y mejora el rendimiento en los accesos a los discos";
 answers[31] = choices[31][3];
 units[31] = "48";
 comments[31] = "Id Pregunta: 1393. ";


//  Id pregunta: 1397 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  Un sistema inform&aacute;tico SCADA es:";
 choices[32]= new Array();
 choices[32][0] = "un sistema de supervisi&oacute;n, control y adquisici&oacute;n de datos";
 choices[32][1] = "un sistema de procesamiento paralelo optimizado para c&aacute;lculo matem&aacute;tico";
 choices[32][2] = "un sistema &uacute;nico multiprocesador que experimenta el uso del plasma en la construcci&oacute;n de CPUs m&aacute;s r&aacute;pidas";
 choices[32][3] = "un sistema de realidad virtual con perif&eacute;ricos de inmersi&oacute;n en la escena y retorno de la informaci&oacute;n de los sensores";
 answers[32] = choices[32][0];
 units[32] = "49";
 comments[32] = "Id Pregunta: 1397. ";


//  Id pregunta: 1405 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  Un sistema SUN:";
 choices[33]= new Array();
 choices[33][0] = "Puede utilizar procesadores Sparc";
 choices[33][1] = "Puede utilizar procesadores MIPS";
 choices[33][2] = "Puede utilizar procesadores Intel";
 choices[33][3] = "A y C son ciertas";
 answers[33] = choices[33][3];
 units[33] = "48";
 comments[33] = "Id Pregunta: 1405. ";


//  Id pregunta: 1414 AÃ±o de creación de pregunta: 2002-01-01
 questions[34]= "35)  Una de las siguientes caracter&iacute;sticas es falsa para los ordenadores RISC. Indicar cu&aacute;l:";
 choices[34]= new Array();
 choices[34][0] = "Consideran m&aacute;s importante la simplicidad en las instrucciones que en la longitud de los programas";
 choices[34][1] = "Las primitivas del ensamblador tienden a ser las mismas que las microinstrucciones";
 choices[34][2] = "Son adecuados para c&aacute;lculos mediante operaciones en coma flotante";
 choices[34][3] = "No debe emplearse la microprogramaci&oacute;n";
 answers[34] = choices[34][2];
 units[34] = "45";
 comments[34] = "Id Pregunta: 1414. ";


//  Id pregunta: 1419 AÃ±o de creación de pregunta: 2002-01-01
 questions[35]= "36)  Una microinstrucci&oacute;n:";
 choices[35]= new Array();
 choices[35][0] = "Es una funci&oacute;n que acepta pocos par&aacute;metros en un lenguaje de programaci&oacute;n convencional";
 choices[35][1] = "En unidades de control microprogramadas, cada intrucci&oacute;n es un microprograma formado por microinstrucciones";
 choices[35][2] = "Son comandos del sistema operativo que tienen peque&ntilde;o tama&ntilde;o y que siempre se encuentran en memoria";
 choices[35][3] = "Todas son falsas";
 answers[35] = choices[35][1];
 units[35] = "47";
 comments[35] = "Id Pregunta: 1419. ";


//  Id pregunta: 1425 AÃ±o de creación de pregunta: 2002-01-01
 questions[36]= "37)  Una sala blanca es:";
 choices[36]= new Array();
 choices[36][0] = "Aquella especialmente dise&ntilde;ada para favorecer la ac&uacute;stica sin necesidad de altavoces ni micr&oacute;fonos";
 choices[36][1] = "Aquella especialmente dise&ntilde;ada para anular las ondas de los tel&eacute;fonos m&oacute;viles impidiendo as&iacute; su cobertura";
 choices[36][2] = "Aquella especialmente dise&ntilde;ada para realizar simulaciones de redes de &aacute;rea local por su escaso nivel de interferencia";
 choices[36][3] = "Aquella especialmente dise&ntilde;ada para la fabricaci&oacute;n de sustratos y componentes electr&oacute;nicos";
 answers[36] = choices[36][3];
 units[36] = "47";
 comments[36] = "Id Pregunta: 1425. ";


//  Id pregunta: 1446 AÃ±o de creación de pregunta: 2002-01-01
 questions[37]= "38)  &iquest;Cu&aacute;l de las siguientes afirmaciones no es correcta al referirnos a los dos tipos de interfaces existentes?:";
 choices[37]= new Array();
 choices[37][0] = "La utilizaci&oacute;n diaria de la interfaz basada en comandos es m&aacute;s &aacute;gil que la basada en men&uacute;, pero su aprendizaje es m&aacute;s costoso";
 choices[37][1] = "A medida que el usuario va ganando destreza la interfaz basada en men&uacute; tiende a hacerse tediosa debido al elevado n&uacute;mero de opciones y funciones que proporcionan";
 choices[37][2] = "Con la interfaz basada en men&uacute; el usuario tiene la continua sensaci&oacute;n de sentirse guiado";
 choices[37][3] = "La interfaz basada en comando es m&aacute;s intuitiva que la basada en men&uacute;";
 answers[37] = choices[37][3];
 units[37] = "47";
 comments[37] = "Id Pregunta: 1446. ";


//  Id pregunta: 1453 AÃ±o de creación de pregunta: 2002-01-01
 questions[38]= "39)  &iquest;Cu&aacute;l es el objetivo del concepto WYSIWYG en los sistemas inform&aacute;ticos?:";
 choices[38]= new Array();
 choices[38][0] = "Lograr alta definici&oacute;n (resoluci&oacute;n) en los documentos impresos";
 choices[38][1] = "Que a la hora de imprimir se tenga claro c&oacute;mo queda el documento";
 choices[38][2] = "Disponer de fonts de todos los tama&ntilde;os deseados a partir de una font base dada";
 choices[38][3] = "Crear documentos multimedia";
 answers[38] = choices[38][1];
 units[38] = "47";
 comments[38] = "Id Pregunta: 1453. ";


//  Id pregunta: 1463 AÃ±o de creación de pregunta: 2002-01-01
 questions[39]= "40)  ISA, PCI, AGP, IDE, PCMCIA&hellip;, son:";
 choices[39]= new Array();
 choices[39][0] = "buses internos";
 choices[39][1] = "buses externos";
 choices[39][2] = "organismos de estandarizaci&oacute;n  ";
 choices[39][3] = "est&aacute;ndares de almacenamiento";
 answers[39] = choices[39][0];
 units[39] = "47";
 comments[39] = "Id Pregunta: 1463. ";


//  Id pregunta: 1501 AÃ±o de creación de pregunta: 2002-01-01
 questions[40]= "41)  Un PDA:";
 choices[40]= new Array();
 choices[40][0] = "No permite la navegaci&oacute;n en Internet";
 choices[40][1] = "No puede conectarse a un PC";
 choices[40][2] = "Puede llevar instalado Windows";
 choices[40][3] = "Todas las anteriores son ciertas";
 answers[40] = choices[40][2];
 units[40] = "47";
 comments[40] = "Id Pregunta: 1501. ";


//  Id pregunta: 1503 AÃ±o de creación de pregunta: 2002-01-01
 questions[41]= "42)  Las arquitecturas de discos magn&eacute;ticos denominadas RAID-3 se caracterizan por:";
 choices[41]= new Array();
 choices[41][0] = "La distribuci&oacute;n ('striping') de los datos en varios discos a nivel de byte y el control de paridad en un disco dedicado";
 choices[41][1] = "La distribuci&oacute;n ('striping') de los datos en varios discos a nivel de byte y el control de paridad distribuido";
 choices[41][2] = "Garantizar la disponibilidad de los datos mediante la redundancia completa en discos espejo";
 choices[41][3] = "Garantizar la disponibilidad de los datos mediante el control de paridad redundante";
 answers[41] = choices[41][0];
 units[41] = "48";
 comments[41] = "Id Pregunta: 1503. ";


//  Id pregunta: 1504 AÃ±o de creación de pregunta: 2002-01-01
 questions[42]= "43)  Los d&iacute;gitos de un teclado DTMF son:";
 choices[42]= new Array();
 choices[42][0] = "los n&uacute;meros del 0 al 9";
 choices[42][1] = "los n&uacute;meros del 0 al 9 m&aacute;s la tecla '*'";
 choices[42][2] = "los n&uacute;meros del 0 al 9 m&aacute;s la tecla '#'";
 choices[42][3] = "los n&uacute;meros del 0 al 9 m&aacute;s las teclas '*' y '#'";
 answers[42] = choices[42][3];
 units[42] = "47";
 comments[42] = "Id Pregunta: 1504. ";


//  Id pregunta: 1542 AÃ±o de creación de pregunta: 2003-01-01
 questions[43]= "44)  &iquest; Qu&eacute; es SAS ?";
 choices[43]= new Array();
 choices[43][0] = "Serial Attached SCSI";
 choices[43][1] = "Serial ATA";
 choices[43][2] = "Small Computer Systems Interface";
 choices[43][3] = "Un paquete estad&iacute;stico";
 answers[43] = choices[43][0];
 units[43] = "47";
 comments[43] = "Id Pregunta: 1542. ";


//  Id pregunta: 1550 AÃ±o de creación de pregunta: 2003-01-01
 questions[44]= "45)  &iquest;Cu&aacute;l de estos procesadores de 64 bits usa la t&eacute;cnica EPIC (&quot;Explicity Parallel Instruction Computing&quot;)?:";
 choices[44]= new Array();
 choices[44][0] = "PowerPC.";
 choices[44][1] = "Alpha.";
 choices[44][2] = "Ultrasparc.";
 choices[44][3] = "Itanium.";
 answers[44] = choices[44][3];
 units[44] = "47";
 comments[44] = "Id Pregunta: 1550. Junta Andaluc&iacute;a";


//  Id pregunta: 1560 AÃ±o de creación de pregunta: 2003-01-01
 questions[45]= "46)  &iquest;Cu&aacute;l de los siguientes bloques b&aacute;sicos no forma parte de la Unidad de Control?:";
 choices[45]= new Array();
 choices[45][0] = "Registro de memorizaci&oacute;n del estado presente.";
 choices[45][1] = "Bloque de calculo del pr&oacute;ximo estado.";
 choices[45][2] = "Bloque de calculo de la salida (micro&oacute;rdenes enviadas a la unidad de procesamiento).";
 choices[45][3] = "Bloque temporizador.";
 answers[45] = choices[45][3];
 units[45] = "47";
 comments[45] = "Id Pregunta: 1560. Junta Andaluc&iacute;a";


//  Id pregunta: 1622 AÃ±o de creación de pregunta: 2003-01-01
 questions[46]= "47)  Se&ntilde;ale cu&aacute;l de las siguientes frases es incorrecta, cuando hablamos de una arquitectura cliente-servidor:";
 choices[46]= new Array();
 choices[46][0] = "El entorno en que se desenvuelve una arquitectura cliente-servidor es homog&eacute;neo y por tanto tiene la ventaja de no requerir interfaz para su comunicaci&oacute;n";
 choices[46][1] = "Se distinguen dos tipos de arquitectura cliente-servidor: modelo de 2 capas y modelo de 3 capas";
 choices[46][2] = "Se trata de una arquitectura escalable, es decir susceptible de ampliarse tanto verticalmente (con mayor n&uacute;mero de servidores) como horizontalmente (con mayor n&uacute;mero de clientes)";
 choices[46][3] = "El proceso clinte proporciona la interfaz del usuario y el proceso servidor los medios para gestionar los recursos compartidos";
 answers[46] = choices[46][0];
 units[46] = "50";
 comments[46] = "Id Pregunta: 1622. ";


//  Id pregunta: 1644 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  Indicar la afirmaci&oacute;n falsa en torno a las matrices de discos RAID:";
 choices[47]= new Array();
 choices[47][0] = "Cuando se haya reemplazado el disco en el que se ha producido el error, los datos podr&aacute;n regenerarse usando la informaci&oacute;n redundante.";
 choices[47][1] = "Los archivos de datos individuales se escriben siempre en m&aacute;s de un disco de forma que, dependiendo del nivel de RAID utilizado, se puedan mejorar el rendimiento y la fiabilidad.";
 choices[47][2] = "En una soluci&oacute;n de hardware, la interfaz de controlador controla la creaci&oacute;n y regeneraci&oacute;n de la informaci&oacute;n redundante.";
 choices[47][3] = "Las estrategias para implementar una matriz redundante de discos independientes (RAID, Redundant Array oIndependent Disks) pueden utilizar soluciones de hardware o de software.";
 answers[47] = choices[47][1];
 units[47] = "48";
 comments[47] = "Id Pregunta: 1644. ";


//  Id pregunta: 1695 AÃ±o de creación de pregunta: 2006-01-01
 questions[48]= "49)  En la clasificaci&oacute;n de arquitectura de ordenadores de Flynn, los procesadores vectoriales corresponden a la clase de ordenadores:";
 choices[48]= new Array();
 choices[48][0] = "SISD ( Single Instruction Single Data)";
 choices[48][1] = "SIMD ( Single Instruction Multiple Data)";
 choices[48][2] = "MIMD (Multiple Instruction Multiple Data)";
 choices[48][3] = "MISD ( Multiple Instruction Single Data)";
 answers[48] = choices[48][1];
 units[48] = "45";
 comments[48] = "Id Pregunta: 1695. ";


//  Id pregunta: 1696 AÃ±o de creación de pregunta: 2006-01-01
 questions[49]= "50)  La m&iacute;nima unidad de informaci&oacute;n gr&aacute;fica que puede ser controlada, se denomina:";
 choices[49]= new Array();
 choices[49][0] = "Bit";
 choices[49][1] = "GIU";
 choices[49][2] = "Resoluci&oacute;n";
 choices[49][3] = "Pixel";
 answers[49] = choices[49][3];
 units[49] = "46";
 comments[49] = "Id Pregunta: 1696. ";


//  Id pregunta: 1703 AÃ±o de creación de pregunta: 2006-01-01
 questions[50]= "51)  Se&ntilde;ale la opci&oacute;n correcta respecto a los puertos IEEE 1394:";
 choices[50]= new Array();
 choices[50][0] = "Apple los denomina Firewire y Sony i.Link";
 choices[50][1] = "No son &uacute;tiles para transferencias de alta velocidad";
 choices[50][2] = "La velocidad, superior a puertos USB, es independiente de los dispositivos conectados";
 choices[50][3] = "La velocidad, inferior a puertos USB, se reparte entre los dispositivos conectados";
 answers[50] = choices[50][0];
 units[50] = "47";
 comments[50] = "Id Pregunta: 1703. ";


//  Id pregunta: 1893 AÃ±o de creación de pregunta: 2006-01-01
 questions[51]= "52)  Los controladores RAID hardware son mucho m&aacute;s r&aacute;pidos que los software. Tambi&eacute;n son mucho m&aacute;s";
 choices[51]= new Array();
 choices[51][0] = "seguros";
 choices[51][1] = "fiables";
 choices[51][2] = "voluminosos";
 choices[51][3] = "caros";
 answers[51] = choices[51][3];
 units[51] = "48";
 comments[51] = "Id Pregunta: 1893. ";


//  Id pregunta: 1905 AÃ±o de creación de pregunta: 2006-01-01
 questions[52]= "53)  Espacio intermedio de almacenamiento utilizado hasta obtener una unidad de datos que permita su procesado";
 choices[52]= new Array();
 choices[52][0] = "registro";
 choices[52][1] = "cache";
 choices[52][2] = "buffer";
 choices[52][3] = "pipelining";
 answers[52] = choices[52][2];
 units[52] = "47";
 comments[52] = "Id Pregunta: 1905. ";


//  Id pregunta: 2940 AÃ±o de creación de pregunta: 2004-01-01
 questions[53]= "54)  El protocolo que permite llevar peticiones para bloques de dispositivos SCSI sobre una red IP es:";
 choices[53]= new Array();
 choices[53][0] = "uSCSI";
 choices[53][1] = "FCP";
 choices[53][2] = "iSCSI";
 choices[53][3] = "FCIP";
 answers[53] = choices[53][2];
 units[53] = "48,96,97";
 comments[53] = "Id Pregunta: 2940. Similar a examen TIC SS A 2004";


//  Id pregunta: 3797 AÃ±o de creación de pregunta: 2002-01-01
 questions[54]= "55)  Respecto al interfaz Centronics, no es cierto que:";
 choices[54]= new Array();
 choices[54][0] = "es un interfaz paralelo, unidireccional y as&iacute;ncrono";
 choices[54][1] = "es el interfaz tradicionalmente utilizado con las impresoras";
 choices[54][2] = "el cable lleva por un lado un conector DB-25 para el PC y por otro el conector de 36 pines para el perif&eacute;rico";
 choices[54][3] = "Todas las respuestas anteriores son ciertas";
 answers[54] = choices[54][3];
 units[54] = "48";
 comments[54] = "Id Pregunta: 3797. ";


//  Id pregunta: 4118 AÃ±o de creación de pregunta: 2006-01-01
 questions[55]= "56)  Cuando dividimos la cantidad de trabajo que ejecuta un ordenador entre dos o m&aacute;s hablamos de";
 choices[55]= new Array();
 choices[55][0] = "clusters";
 choices[55][1] = "multicast";
 choices[55][2] = "balanceo de carga";
 choices[55][3] = "peering";
 answers[55] = choices[55][2];
 units[55] = "49";
 comments[55] = "Id Pregunta: 4118. ";


//  Id pregunta: 4274 AÃ±o de creación de pregunta: 2007-01-01
 questions[56]= "57)  &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta respecto a las caracter&iacute;sticas de los puertos USB (Universal Serial Bus)?:";
 choices[56]= new Array();
 choices[56][0] = "Su rendimiento es superior al del puerto de serie, pero inferior al del puerto paralelo";
 choices[56][1] = "Pueden transferir datos a una velocidad de hasta 480 Mbps.";
 choices[56][2] = "S&oacute;lo permiten conectar 2^6=16 dispositivos a un mismo ordenador.";
 choices[56][3] = "Necesitan que el sistema operativo disponga de una utilidad USBMS (USB Management System).";
 answers[56] = choices[56][1];
 units[56] = "46";
 comments[56] = "Id Pregunta: 4274. ";


//  Id pregunta: 4858 AÃ±o de creación de pregunta: 2007-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[57]= new Array();
 choices[57][0] = "Mosix es un sistema basado en Linux que permite trabajar coordinadamente a m&uacute;ltiples ordenadorespertenecientes a una misma organizaci&oacute;n, u organizaciones distintas";
 choices[57][1] = "Un grid de Mosix puede dividirse en clusters virtuales. Un proceso ejecut&aacute;ndose en un cluster virtual nopuede ser transferido a otro cluster virtual";
 choices[57][2] = "El Entorno de Ejecuci&oacute;n Virtual de Mosix (MVE, Mosix Virtual Runtime Environment) garantiza que unproceso creado en un nodo del grid, pero que se est&aacute; ejecutando en otro, s&oacute;lo accede en &eacute;ste &uacute;ltimo a laCPU y la memoria";
 choices[57][3] = "En un grid Mosix cualquier proceso puede ser detenido en un punto de control y salvado a disco paraposteriormente reanudar su ejecuci&oacute;n desde dicho punto";
 answers[57] = choices[57][2];
 units[57] = "45";
 comments[57] = "Id Pregunta: 4858. ";


//  Id pregunta: 5040 AÃ±o de creación de pregunta: 2003-01-01
 questions[58]= "59)  &iquest;En cu&aacute;l de los siguientes modelos para el desarrollo de aplicaciones distribuidas o en red seg&uacute;n el modelo cliente/servidor,esta encuadrado COM+ (Common Object Model Plus)?:";
 choices[58]= new Array();
 choices[58][0] = "Modelos basados en llamadas a funciones (sockets)";
 choices[58][1] = "Modelos basados en llamadas a procedimientos remotos (RPC)";
 choices[58][2] = "Modelos basados en llamadas a objetos distribuidos";
 choices[58][3] = "Modelos basados en agentes m&oacute;viles";
 answers[58] = choices[58][2];
 units[58] = "50";
 comments[58] = "Id Pregunta: 5040. Examen TIC A 2007";


//  Id pregunta: 5060 AÃ±o de creación de pregunta: 2003-01-01
 questions[59]= "60)  &iquest;C&oacute;mo se denominan los servidores que se implementan en un formato de tarjeta/bandeja en la que se integranmemoria, procesadores y almacenamiento interno, que pueden ser insertados en chasis/bastidores especialessobre los que se comparten elementos comunes (habitualmente conexiones el&eacute;ctricas, conexiones de red de datosfuentes de alimentaci&oacute;n y ventiladores) y que normalmente comparten un sistema de gesti&oacute;n y administraci&oacute;ncom&uacute;n?:";
 choices[59]= new Array();
 choices[59][0] = "Clusters";
 choices[59][1] = "Servidores Grid";
 choices[59][2] = "Servidores Blades";
 choices[59][3] = "Ninguno de los anteriores";
 answers[59] = choices[59][2];
 units[59] = "48";
 comments[59] = "Id Pregunta: 5060. Examen TIC A 2007";


//  Id pregunta: 5636 AÃ±o de creación de pregunta: 2003-01-01
 questions[60]= "61)  Una soluci&oacute;n RAID 5 necesita como m&iacute;nimo:";
 choices[60]= new Array();
 choices[60][0] = "Dos discos";
 choices[60][1] = "Tres discos";
 choices[60][2] = "Un disco";
 choices[60][3] = "Cuatro discos";
 answers[60] = choices[60][1];
 units[60] = "48";
 comments[60] = "Id Pregunta: 5636. ";


//  Id pregunta: 5640 AÃ±o de creación de pregunta: 2003-01-01
 questions[61]= "62)  Acerca de los sistemas operativos, se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[61]= new Array();
 choices[61][0] = "Un  S.O. en Red da la visi&oacute;n de estar ejecut&aacute;ndose en una &uacute;nica m&aacute;quina, no en m&aacute;quinas independientes";
 choices[61][1] = "Los S.O. Distribuidos se ejecutan sobre un conjunto de nodos independientes conectados en red, pero no hacen creer al usuario que se trate de un sistema centralizado   ";
 choices[61][2] = "En un S.O. en Red cada m&aacute;quina ejecuta una copia del S.O. ";
 choices[61][3] = "Los sistemas operativos distribuidos fueron el punto de partida para la implementaci&oacute;n de sistemas operativos centralizados";
 answers[61] = choices[61][2];
 units[61] = "50";
 comments[61] = "Id Pregunta: 5640. ";


//  Id pregunta: 5861 AÃ±o de creación de pregunta: 2009-01-01
 questions[62]= "63)  El sistema de redundancia que calcula dos bloques de paridad independientes por cada escritura, enviando cada uno de los bloques de paridad a un disco diferente y permite recuperarse del fallo simult&aacute;neo de dos discos es:";
 choices[62]= new Array();
 choices[62][0] = "RAID 0";
 choices[62][1] = "RAID 6";
 choices[62][2] = "RAID 5";
 choices[62][3] = "RAID 3";
 answers[62] = choices[62][1];
 units[62] = "48";
 comments[62] = "Id Pregunta: 5861. MAP 2008 A1";


//  Id pregunta: 6113 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones sobre &quot;grid computing&quot; es FALSA:";
 choices[63]= new Array();
 choices[63][0] = "La escalabilidad parametrizable es una caracter&iacute;stica muy importante de esta arquitectura.";
 choices[63][1] = "Son sistemas homog&eacute;neos.";
 choices[63][2] = "Los nodos no tienen que estar dedicados.";
 choices[63][3] = "Se puede conseguir cerca de un 100 % de utilizaci&oacute;n de la CPU.";
 answers[63] = choices[63][1];
 units[63] = "45";
 comments[63] = "Id Pregunta: 6113. TIC A 2009";


//  Id pregunta: 6447 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  &iquest;C&oacute;mo se denomina cada una de las particiones l&oacute;gicas de una Storage &Aacute;rea Network?";
 choices[64]= new Array();
 choices[64][0] = "LUN";
 choices[64][1] = "HBA";
 choices[64][2] = "Cl&uacute;ster";
 choices[64][3] = "Usci";
 answers[64] = choices[64][0];
 units[64] = "48";
 comments[64] = "Id Pregunta: 6447. Castilla La Mancha 2009";


//  Id pregunta: 8375 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  Dentro de las arquitecturas de almacenamiento, las siglas inglesas SSA responden a:";
 choices[65]= new Array();
 choices[65][0] = "Serialized Storage Area.";
 choices[65][1] = "Serial Storage Area.";
 choices[65][2] = "Serial Storage Architecture.";
 choices[65][3] = "Serialized Storage Architecture.";
 answers[65] = choices[65][2];
 units[65] = "48";
 comments[65] = "Id Pregunta: 8375. Examen TIC A2 2010";


//  Id pregunta: 8380 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  La velocidad de transferencia base (1X) de un disco Blu-ray es de:";
 choices[66]= new Array();
 choices[66][0] = "54 Mbits/s.";
 choices[66][1] = "4,5 MBytes/s.";
 choices[66][2] = "36 MBytes/s.";
 choices[66][3] = "9 MBytes/s.";
 answers[66] = choices[66][1];
 units[66] = "48";
 comments[66] = "Id Pregunta: 8380. Examen TIC A2 2010";


//  Id pregunta: 8624 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  &iquest;Qu&eacute; es el World Wide Name (WWN)?";
 choices[67]= new Array();
 choices[67][0] = "Un identificador &uacute;nico de 8 byles en una red de almacenamiento";
 choices[67][1] = "Uno de los servidores DNS ra&iacute;z";
 choices[67][2] = "Un nuevo dominio de Internet basado en IPv6 que va a sustituir los actuales dominios basados en IPv4.";
 choices[67][3] = "Un protocolo que permite identificar un equipo y sus recursos con independencia del tipo de red y sistema operativo";
 answers[67] = choices[67][0];
 units[67] = "48";
 comments[67] = "Id Pregunta: 8624. Examen TIC A2 2010 interna";


//  Id pregunta: 8628 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  De entre las siguientes opciones en el &aacute;mbito del almacenamiento en los sistemas de informaci&oacute;n, se&ntilde;ale la verdadera:";
 choices[68]= new Array();
 choices[68][0] = "SAS es una interfaz de transferencia de datos en serie";
 choices[68][1] = "SATA es una Interfaz de transferencia de datos en paralelo";
 choices[68][2] = "Los dispositivos SAS se identifican por el World Wide Web Name (WWWN).";
 choices[68][3] = "El conector SATA posee 68 pines";
 answers[68] = choices[68][0];
 units[68] = "48";
 comments[68] = "Id Pregunta: 8628. Examen TIC A2 2010 interna";


//  Id pregunta: 8908 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  La unidad Aritm&eacute;tico-L&oacute;gica (ALU):";
 choices[69]= new Array();
 choices[69][0] = "Contiene las instrucciones del programa.";
 choices[69][1] = "Contienen los datos de la aplicaci&oacute;n.";
 choices[69][2] = "Realiza las operaciones matem&aacute;ticas.";
 choices[69][3] = "Controla los dispositivos l&oacute;gicos a los que accede la CPU";
 answers[69] = choices[69][2];
 units[69] = "47";
 comments[69] = "Id Pregunta: 8908. Operador Ayto. Madrid 2010";


//  Id pregunta: 9113 AÃ±o de creación de pregunta: 2013-01-01
 questions[70]= "71)  &iquest;Cu&aacute;ndo se publicaron las taxonom&iacute;as de Flynn?";
 choices[70]= new Array();
 choices[70][0] = "En 1950";
 choices[70][1] = "Por primera vez en 1966 y por segunda vez en 1970";
 choices[70][2] = "En 1980";
 choices[70][3] = "En la d&eacute;cada de los noventa.";
 answers[70] = choices[70][1];
 units[70] = "45";
 comments[70] = "Id Pregunta: 9113. ";


//  Id pregunta: 9114 AÃ±o de creación de pregunta: 2013-01-01
 questions[71]= "72)  &iquest;Qu&eacute; se entiende como flujo de instrucciones?";
 choices[71]= new Array();
 choices[71][0] = "Conjunto de instrucciones en paralelo que son ejecutadas por varios procesadores.";
 choices[71][1] = "Conjunto de instrucciones secuenciales que son ejecutadas entre varios procesadores";
 choices[71][2] = "Flujo secuencial de instrucciones requeridas por el flujo de datos";
 choices[71][3] = "Conjunto de instrucciones secuenciales ejecutadas por un &uacute;nico procesador.";
 answers[71] = choices[71][3];
 units[71] = "45";
 comments[71] = "Id Pregunta: 9114. ";


//  Id pregunta: 9120 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  &iquest;C&oacute;mo son los multiprocesadores en los sistemas de gesti&oacute;n UMA?";
 choices[72]= new Array();
 choices[72][0] = "Fuertemente acoplados.";
 choices[72][1] = "Muy desacoplados";
 choices[72][2] = "Un procesador no depende de lo que hace otro";
 choices[72][3] = "Todas las respuestas con correctas";
 answers[72] = choices[72][0];
 units[72] = "45";
 comments[72] = "Id Pregunta: 9120. ";


//  Id pregunta: 9129 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  &iquest;Qu&eacute; es Parallel Sysplex?";
 choices[73]= new Array();
 choices[73][0] = "La soluci&oacute;n de clustering de IBM para z/OS";
 choices[73][1] = "Un tipo de registro l&oacute;gico";
 choices[73][2] = "Una aplicaci&oacute;n que permite conocer el estado de procesos de un sistema operativo";
 choices[73][3] = "Una herramienta de virtualizaci&oacute;n";
 answers[73] = choices[73][0];
 units[73] = "46";
 comments[73] = "Id Pregunta: 9129. ";


//  Id pregunta: 9130 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  &iquest;Qu&eacute; se suelen considerar como ejemplo de mainframe?";
 choices[74]= new Array();
 choices[74][0] = "Z/OS de IBM";
 choices[74][1] = "Superdome de HP";
 choices[74][2] = "Todas las respuestas anteriores";
 choices[74][3] = "Ninguna respuesta es v&aacute;lida";
 answers[74] = choices[74][1];
 units[74] = "46";
 comments[74] = "Id Pregunta: 9130. ";


//  Id pregunta: 9132 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  &iquest;Qu&eacute; es un bus de expansion (I/O)?";
 choices[75]= new Array();
 choices[75][0] = "Conjunto de l&iacute;neas de comunicaci&oacute;n encargado de llevar el bus de datos, el bus de direcci&oacute;n y el de control a la tarjeta de interfaz (Entrada/Salida) que se agrega a la tarjeta principal.";
 choices[75][1] = "Vincula a todos los componentes de la CPU";
 choices[75][2] = "Son l&iacute;neas de comunicaci&oacute;n por donde circulan los datos externos e internos del microprocesador.";
 choices[75][3] = "l&iacute;neas de comunicaci&oacute;n por donde viaja la informaci&oacute;n espec&iacute;fica sobre la localizaci&oacute;n de la direcci&oacute;n de memoria de datos o dispositivo al que se hace referencia";
 answers[75] = choices[75][0];
 units[75] = "47";
 comments[75] = "Id Pregunta: 9132. ";


//  Id pregunta: 9134 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  &iquest;Cu&aacute;l no se considera una arquitectura de un sistema f&iacute;sico?";
 choices[76]= new Array();
 choices[76][0] = "de bus m&uacute;ltiple";
 choices[76][1] = "paralela";
 choices[76][2] = "Pipeline";
 choices[76][3] = "Fault Tolerant";
 answers[76] = choices[76][0];
 units[76] = "47";
 comments[76] = "Id Pregunta: 9134. ";


//  Id pregunta: 9140 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  &iquest;En qu&eacute; &iacute;ndices se puede medir la potencia de un ordenador?";
 choices[77]= new Array();
 choices[77][0] = "Miles de instrucciones por segundo (MIPS)";
 choices[77][1] = "SPEC. Ejecuta en el procesador un conjunto de programas y combina las medidas de prestaciones de &eacute;stos con la media aritm&eacute;tica o geom&eacute;trica.";
 choices[77][2] = "SPECint y SpeCfp. &Iacute;ndices que miden las velocidades en operaciones con enteros y comas flotantes. La medida resultante se denomina SPECifp";
 choices[77][3] = "Por el n&uacute;mero de cores que tenga el procesador";
 answers[77] = choices[77][1];
 units[77] = "47";
 comments[77] = "Id Pregunta: 9140. ";


//  Id pregunta: 9143 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  &iquest;Cu&aacute;l es la respuesta incorrecta respecto a los interfaces de disco duro?";
 choices[78]= new Array();
 choices[78][0] = "SAS (Serial Attached SCSI) es una interfaz de transferencia de datos en serie, sucesora del SCSI paralelo.";
 choices[78][1] = "Proporciona una arquitectura punto a punto m&aacute;s simple y robusta que su antecesora paralela.";
 choices[78][2] = "Una de sus principales caracter&iacute;sticas es el aumento de la velocidad de transferencia al aumentar el n&uacute;mero de dispositivos conectados";
 choices[78][3] = "Todas son correctas.";
 answers[78] = choices[78][3];
 units[78] = "47";
 comments[78] = "Id Pregunta: 9143. ";


//  Id pregunta: 9146 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  &iquest;Qu&eacute; es FAMOS?";
 choices[79]= new Array();
 choices[79][0] = "Floating Gate Avalanche-Injection Metal Oxide Semiconductor";
 choices[79][1] = "Floating Avalanche-Injection Metal Oxide Semiconductor";
 choices[79][2] = "Floating Gate Avalanche-Injection Metal for Operating Systems";
 choices[79][3] = "FAMOS no existe";
 answers[79] = choices[79][3];
 units[79] = "47";
 comments[79] = "Id Pregunta: 9146. ";


//  Id pregunta: 9150 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  &iquest;Qu&eacute; tipo de conexi&oacute;n inal&aacute;mbrica se suele distinguir en la conexi&oacute;n de los ratones al PC?";
 choices[80]= new Array();
 choices[80][0] = "Radio Frecuencia (banda de 5 Ghz), Infrarrojo, Bluetooth";
 choices[80][1] = "Radio Frecuencia (banda de 2,4 Ghz) e Infrarrojo.";
 choices[80][2] = "Radio Frecuencia (banda de 2,4 Ghz), Infrarrojo y Bluetooth.";
 choices[80][3] = "No se utilizan las conexiones inal&aacute;mbricas para los ratones al no considerarse suficientemente estables";
 answers[80] = choices[80][2];
 units[80] = "47";
 comments[80] = "Id Pregunta: 9150. ";


//  Id pregunta: 9151 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  &iquest;Qu&eacute; era Meego?";
 choices[81]= new Array();
 choices[81][0] = "la uni&oacute;n de los sistemas operativos Maemo y Moblin, con el que Intel y Google pretend&iacute;ann competir con el sistema iOs de Apple. Fue el inicio del sistema Android.";
 choices[81][1] = "Est&aacute; auspiciado por la Linux Foundation";
 choices[81][2] = "Una competencia al Android de Google.";
 choices[81][3] = "La B) y la C) son correctas.";
 answers[81] = choices[81][3];
 units[81] = "47";
 comments[81] = "Id Pregunta: 9151. ";


//  Id pregunta: 9211 AÃ±o de creación de pregunta: 2013-01-01
 questions[82]= "83)  Con relaci&oacute;n al bucle arbitrado y red conmutada en las conexiones FC, es cierto que...";
 choices[82]= new Array();
 choices[82][0] = "mediante bucle arbitrado se pueden conectar hasta 50 dispositivos en un anillo en el que se comparte el ancho de banda entre todos ellos.";
 choices[82][1] = "La red conmutada utiliza switches para construir una NAS.";
 choices[82][2] = "En la red conmutada no se comparte el ancho de banda";
 choices[82][3] = "Bucle arbitrado y red conmutada no son formas v&aacute;lidas de conexi&oacute;n FC.";
 answers[82] = choices[82][2];
 units[82] = "48";
 comments[82] = "Id Pregunta: 9211. ";


//  Id pregunta: 9213 AÃ±o de creación de pregunta: 2013-01-01
 questions[83]= "84)  Dentro de una red FC existen una serie de servicios b&aacute;sicos para su correcto funcionamiento y que son implementadas autom&aacute;ticamente de forma distribuida entre todos los switches que componen la red. Son los siguientes:";
 choices[83]= new Array();
 choices[83][0] = "SNS, RCSN, Login, Servicio de gesti&oacute;n y Servicio de tiempos.";
 choices[83][1] = "Servicio de gesti&oacute;n y servicio de tiempos";
 choices[83][2] = "Login";
 choices[83][3] = "Servidor de nombres que asigna los FCID y permite traducir de WWN a FCID.";
 answers[83] = choices[83][0];
 units[83] = "48";
 comments[83] = "Id Pregunta: 9213. ";


//  Id pregunta: 9216 AÃ±o de creación de pregunta: 2013-01-01
 questions[84]= "85)  Para extender las redes SAN qu&eacute; tipo de interconexiones se suelen utilizar:";
 choices[84]= new Array();
 choices[84][0] = "Sonet/SDH, WDM, ATM";
 choices[84][1] = "Sonet/SDH, WDM, ATM, iSCSI, FCIP, iFCP";
 choices[84][2] = "CWDM, DWDM, ATM, iSCSCI, FCIP, iFCP";
 choices[84][3] = "Sonet/SDN, WDM, ATM, iSCSI";
 answers[84] = choices[84][1];
 units[84] = "48";
 comments[84] = "Id Pregunta: 9216. ";


//  Id pregunta: 9217 AÃ±o de creación de pregunta: 2013-01-01
 questions[85]= "86)  &iquest;Qu&eacute; es iSCSI?";
 choices[85]= new Array();
 choices[85][0] = "Protocolo que permite establecer t&uacute;neles TCP/IP por el que se env&iacute;an tramas FC sin modificar.";
 choices[85][1] = "No transporta las tramas FC entre sedes remotas sino que transporta s&oacute;lo las capas superiores.";
 choices[85][2] = "Utiliza TCP/IP como red de transporte utilizando la misma infraestructura que se utilice para redes de comunicaciones.";
 choices[85][3] = "Ninguna es correcta.";
 answers[85] = choices[85][2];
 units[85] = "48";
 comments[85] = "Id Pregunta: 9217. ";


//  Id pregunta: 9219 AÃ±o de creación de pregunta: 2013-01-01
 questions[86]= "87)  &iquest;Qu&eacute; es LUN Masking?";
 choices[86]= new Array();
 choices[86][0] = "La cabina presenta una LUN a un servidor y este puede acceder.";
 choices[86][1] = "Se evita que un servidor pueda acceder a una LUN que pertenece a otro servidor.";
 choices[86][2] = "Es un m&eacute;todo de seguridad en red SAN de la interfaz SCSCI.";
 choices[86][3] = "Todos son v&aacute;lidas";
 answers[86] = choices[86][3];
 units[86] = "48";
 comments[86] = "Id Pregunta: 9219. ";


//  Id pregunta: 9221 AÃ±o de creación de pregunta: 2013-01-01
 questions[87]= "88)  &iquest;Qu&eacute; es el Fabric/switch/port binding?";
 choices[87]= new Array();
 choices[87][0] = "Un mecanismo de seguridad adicional ofrecido por las redes SAN.";
 choices[87][1] = "Puede limitar la conectividad de un determinado equipo a un determinado puerto de un switch dentro del fabric.";
 choices[87][2] = "El dispositivo s&oacute;lo podr&aacute; acceder a la SAN si se conecta f&iacute;sicamente al puerto permitido y s&oacute;lo un dispositivo con el WWN indicado puede conectarse a dicho puerto.";
 choices[87][3] = "Todas son correctas.";
 answers[87] = choices[87][3];
 units[87] = "48";
 comments[87] = "Id Pregunta: 9221. ";


//  Id pregunta: 9223 AÃ±o de creación de pregunta: 2013-01-01
 questions[88]= "89)  La replicaci&oacute;n continua de datos (o copia en tiempo real)";
 choices[88]= new Array();
 choices[88][0] = "Es un sistema mucho m&aacute;s ventajoso que la replicaci&oacute;n discreta porque permite recuperar la informaci&oacute;n existente en cualquier momento del tiempo de forma mucho m&aacute;s r&aacute;pida";
 choices[88][1] = "Es un sistema mucho menos ventajoso que la replicaci&oacute;n discreta o backups porque requiere mucha m&aacute;s capacidad de almacenamiento";
 choices[88][2] = "Puede ser s&iacute;ncrona o as&iacute;ncrona. En el segundo caso es equivalente a replicaci&oacute;n discreta.";
 choices[88][3] = "No sirve por s&iacute; misma para garantizar la integridad de la informaci&oacute;n frente a determinadas situaciones";
 answers[88] = choices[88][3];
 units[88] = "48";
 comments[88] = "Id Pregunta: 9223. Examen TIC-A1 2011";


//  Id pregunta: 9229 AÃ±o de creación de pregunta: 2013-01-01
 questions[89]= "90)  &ldquo;Un sistema distribuido es una colecci&oacute;n de computadores independientes que aparece ante los usuarios del sistema como una &uacute;nica computadora&rdquo;, es una definici&oacute;n de:";
 choices[89]= new Array();
 choices[89][0] = "Tanenbaum";
 choices[89][1] = "Sloman &amp; Kramer.";
 choices[89][2] = "Shanon";
 choices[89][3] = "No se corresponde a la definici&oacute;n de un sistema distribuido.";
 answers[89] = choices[89][0];
 units[89] = "50";
 comments[89] = "Id Pregunta: 9229. ";


//  Id pregunta: 9260 AÃ±o de creación de pregunta: 2013-01-01
 questions[90]= "91)  La arquitectura de proceso paralelo en la cual cada procesador tiene su propia memoria local y adem&aacute;s puede acceder a las memorias de otros procesadores se conoce como:";
 choices[90]= new Array();
 choices[90][0] = "SMP ";
 choices[90][1] = "Grid ";
 choices[90][2] = "NUMA ";
 choices[90][3] = "Cluster ";
 answers[90] = choices[90][2];
 units[90] = "45";
 comments[90] = "Id Pregunta: 9260. Examen TICA2-2011";


//  Id pregunta: 9261 AÃ±o de creación de pregunta: 2013-01-01
 questions[91]= "92)  Las siglas SSI (Single System Image) corresponden a: ";
 choices[91]= new Array();
 choices[91][0] = "Una interfaz &uacute;nica de acceso al sistema para un cl&uacute;ster de servidores. ";
 choices[91][1] = "Una imagen del sistema operativo de un ordenador que se utiliza para la creaci&oacute;n de clones.";
 choices[91][2] = "Una copia completa de un ordenador personal Windows que sirve para restaurar el sistema. ";
 choices[91][3] = "Una representaci&oacute;n de la memoria del sistema que se utiliza en .NET. ";
 answers[91] = choices[91][0];
 units[91] = "50";
 comments[91] = "Id Pregunta: 9261. Examen TICA2-2011";


//  Id pregunta: 9269 AÃ±o de creación de pregunta: 2013-01-01
 questions[92]= "93)  Los dispositivos f&iacute;sicos que se utilizan para conectar servidores a trav&eacute;s de una red t&iacute;picamente de fibra con sus dispositivos de almacenamiento, se llaman:";
 choices[92]= new Array();
 choices[92][0] = "LUN";
 choices[92][1] = "ESX";
 choices[92][2] = "HBA";
 choices[92][3] = "IDS";
 answers[92] = choices[92][2];
 units[92] = "48";
 comments[92] = "Id Pregunta: 9269. Examen TICA2-2011";


//  Id pregunta: 9275 AÃ±o de creación de pregunta: 2013-01-01
 questions[93]= "94)  &iquest;Cu&aacute;l de los siguientes NO es un tipo de bus interno paralelo?";
 choices[93]= new Array();
 choices[93][0] = "ISA";
 choices[93][1] = "HTI";
 choices[93][2] = "PCI";
 choices[93][3] = "AGP";
 answers[93] = choices[93][1];
 units[93] = "47";
 comments[93] = "Id Pregunta: 9275. Examen TIC-A1 2011";


//  Id pregunta: 9365 AÃ±o de creación de pregunta: 2013-01-01
 questions[94]= "95)  Acerca de Fibre Channel, se puede decir:";
 choices[94]= new Array();
 choices[94][0] = "El protocolo sigue el model de referencia OSI.";
 choices[94][1] = "Es un protocolo con 5 capas. ";
 choices[94][2] = "La capa FC3 es la capa de mapeo de protocolo.";
 choices[94][3] = "Los routers en Fibre Channel operan en la capa 3.";
 answers[94] = choices[94][1];
 units[94] = "101, 48";
 comments[94] = "Id Pregunta: 9365. ";


//  Id pregunta: 9899 AÃ±o de creación de pregunta: 2014-01-01
 questions[95]= "96)  Cual de los siguientes NO es un mecanismo de intercambio de informaci&oacute;n utilizable en una arquitectura distribuida";
 choices[95]= new Array();
 choices[95][0] = "mensajes XML sobre protocolo SMTP.";
 choices[95][1] = "mensajes SOAP sobre Servicios de Mensajes Java (JMS).";
 choices[95][2] = "OData.(Open Data Protocol)";
 choices[95][3] = "BPMN (Business Process Message Notation).";
 answers[95] = choices[95][3];
 units[95] = "50,51,79";
 comments[95] = "Id Pregunta: 9899. TIC A1, Examen 2013";


//  Id pregunta: 10527 AÃ±o de creación de pregunta: 2014-01-01
 questions[96]= "97)  En el &aacute;mbito de los procesadores de ordenador, el concepto de pipelining hace referencia a:";
 choices[96]= new Array();
 choices[96][0] = "el encadenamiento de las instrucciones que se ejecutan en el procesador, de manera que la salida de una se conecta a la entrada de la siguiente ahorrando el paso por los registros, lo que acelera la ejecuci&oacute;n";
 choices[96][1] = "el particionado del procesador en etapas, lo que permite paralelizar las fases de ejecuci&oacute;n de instrucciones en el procesador";
 choices[96][2] = "el acceso a memoria mediante buses dedicados al efecto, denominados &quot;pipes&quot;, lo que prioriza las consultas del procesador a la memoria";
 choices[96][3] = "no se contempla el concepto de pipelining relacionado con los procesadores";
 answers[96] = choices[96][1];
 units[96] = "45";
 comments[96] = "Id Pregunta: 10527. NULL";


//  Id pregunta: 10917 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  La tasa de transferencia m&aacute;xima que soporta el Serial Advanced Technology Attachment Express (SATA Express) es de hasta:";
 choices[97]= new Array();
 choices[97][0] = "6 Gbps.";
 choices[97][1] = "16 Gbps.";
 choices[97][2] = "8 Gbps.";
 choices[97][3] = "3 Gbps.";
 answers[97] = choices[97][1];
 units[97] = "46, 48";
 comments[97] = "Id Pregunta: 10917. Examen GSI 2014";


//  Id pregunta: 11276 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Cual NO es una dimensi&oacute;n del cubo de clasificaci&oacute;n de las soluciones en la nube?";
 choices[98]= new Array();
 choices[98][0] = "Formas de implementaci&oacute;n: nube p&uacute;blica, privada, h&iacute;brida y comunitaria.";
 choices[98][1] = "Agentes intervinientes: proveedor, suscriptor, intermediario, habilitador y auditor.";
 choices[98][2] = "Familias de provisi&oacute;n del servicio: Iaas, Paas, Saas y BPaaS.";
 choices[98][3] = "Todas son dimensiones.";
 answers[98] = choices[98][3];
 units[98] = "47";
 comments[98] = "Id Pregunta: 11276. ";


//  Id pregunta: 11604 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  La versi&oacute;n de Android 6.0 recibe el nombre de:";
 choices[99]= new Array();
 choices[99][0] = "Lollipop";
 choices[99][1] = "Marshmallow";
 choices[99][2] = "McFlurry";
 choices[99][3] = "Cupcake";
 answers[99] = choices[99][1];
 units[99] = "46";
 comments[99] = "Id Pregunta: 11604. ";


