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

//  Id pregunta: 688 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  Indique cu&aacute;l de las siguientes afirmaciones es falsa:";
 choices[0]= new Array();
 choices[0][0] = "CISC (Complex Instruction Set Computer) es la arquitectura tradicional del ordenador personal, en la que la CPU utiliza su microc&oacute;digo para ejecutar un juego muy completo de instrucciones";
 choices[0][1] = "En los procesadores CISC las instrucciones pueden ser de longitud variable y usar todos los modos de direccionamiento, requiriendo para ello complejos circuitos decodificadores que ralentizan la ejecuci&oacute;n de cada instrucci&oacute;n";
 choices[0][2] = "Los procesadores RISC (Reduced Instruction Set Computer) fijan la longitud de todas las instrucciones haci&eacute;ndola constante prohibiendo el modo de direccionamiento indirecto";
 choices[0][3] = "Los procesadores RISC necesitan un mayor n&uacute;mero de transistores, lo cual los hace m&aacute;s caros de producir y m&aacute;s dif&iacute;ciles de dise&ntilde;ar";
 answers[0] = choices[0][3];
 units[0] = "46";
 comments[0] = "Id Pregunta: 688. Examen TIC MAP B 2004";


//  Id pregunta: 695 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  A la hora de evaluar el comportamiento de un sistema inform&aacute;tico, el &quot;throughput&quot; se puede definir como:";
 choices[1]= new Array();
 choices[1][0] = "El n&uacute;mero de CPUs necesarias para asegurar una velocidad de procesamiento determinada";
 choices[1][1] = "El n&uacute;mero de recursos inform&aacute;ticos disponibles en el sistema";
 choices[1][2] = "El cociente entre la velocidad de transmisi&oacute;n de la red y la velocidad media de las CPUs del sistema";
 choices[1][3] = "La cantidad de trabajo &uacute;til ejecutado por unidad de tiempo en un entorno de carga determinado";
 answers[1] = choices[1][3];
 units[1] = "48";
 comments[1] = "Id Pregunta: 695. ";


//  Id pregunta: 699 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  La principal ventaja de un sistema RAID-5 sobre otros sistemas RAID es:";
 choices[2]= new Array();
 choices[2][0] = "Ofrece la m&aacute;xima velocidad posible tanto en lectura como escritura.";
 choices[2][1] = "Ofrece la m&aacute;xima seguridad de los datos almacenados.";
 choices[2][2] = "Ofrece cierta seguridad y buena velocidad en lectura.";
 choices[2][3] = "Ofrece cierta seguridad y buena velocidad en escrituras aleatorias cortas.";
 answers[2] = choices[2][3];
 units[2] = "48";
 comments[2] = "Id Pregunta: 699. ";


//  Id pregunta: 709 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  &iquest;Qu&eacute; se necesita para poder aprovechar la tecnolog&iacute;a HyperThreading?";
 choices[3]= new Array();
 choices[3][0] = "Procesador Intel Pentium 4 y Windows 2003";
 choices[3][1] = "Procesador Sun SPARC y Solaris";
 choices[3][2] = "Procesador Intel Core 2 Duo y Linux";
 choices[3][3] = "Procesador Sun SPARC y Windows 2000";
 answers[3] = choices[3][0];
 units[3] = "47";
 comments[3] = "Id Pregunta: 709. Similar a examen TIC SS A 2004";


//  Id pregunta: 730 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  &iquest;Cu&aacute;l de las siguientes arquitecturas RAID implementa &quot;mirroring&quot; o espejo de discos?";
 choices[4]= new Array();
 choices[4][0] = "RAID 1";
 choices[4][1] = "RAID 0";
 choices[4][2] = "RAID 2";
 choices[4][3] = "RAID 5";
 answers[4] = choices[4][0];
 units[4] = "48";
 comments[4] = "Id Pregunta: 730. Examen TIC MAP B 2004";


//  Id pregunta: 790 AÃ±o de creación de pregunta: 2004-01-01
 questions[5]= "6)  &iquest;Cu&aacute;l es el protocolo que permite hacer tunneling en Fibre Channel?";
 choices[5]= new Array();
 choices[5][0] = "iSCSI";
 choices[5][1] = "sSCSI";
 choices[5][2] = "iFCP";
 choices[5][3] = "FCIP";
 answers[5] = choices[5][3];
 units[5] = "48";
 comments[5] = "Id Pregunta: 790. SS-A 2004";


//  Id pregunta: 798 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Qu&eacute; tienen en com&uacute;n Sony, Philips, Nokia, Panasonic, HP y Microsoft?:";
 choices[6]= new Array();
 choices[6][0] = "Fueron las &uacute;nicas multinacionales en el sector TIC con beneficios en 2002";
 choices[6][1] = "Todas se caracterizan por su pol&iacute;tica monopol&iacute;stica";
 choices[6][2] = "Todas fabrican perif&eacute;ricos m&oacute;viles ";
 choices[6][3] = "Todas pertenecen, entre otras, al DHWG (Digital Home Working Group)";
 answers[6] = choices[6][3];
 units[6] = "48";
 comments[6] = "Id Pregunta: 798. ";


//  Id pregunta: 815 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  Arquitectura &ldquo;fault tolerant&rdquo; significa:";
 choices[7]= new Array();
 choices[7][0] = "Que el sistema tiene elementos redundantes activos";
 choices[7][1] = "Que el sistema es capaz de funcionar correctamente a&uacute;n en el caso de fallo de algunos elementos";
 choices[7][2] = "Que el sistema tiene elementos redundantes pasivos";
 choices[7][3] = "Todas las anteriores son ciertas";
 answers[7] = choices[7][1];
 units[7] = "48";
 comments[7] = "Id Pregunta: 815. ";


//  Id pregunta: 880 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Cu&aacute;l es el significado de ASCII?:";
 choices[8]= new Array();
 choices[8][0] = "American System Code for Input Information";
 choices[8][1] = "Asynchonous System Code fot International Information";
 choices[8][2] = "American Standard Code for Input Information";
 choices[8][3] = "American Standard Code for Information Interchange";
 answers[8] = choices[8][3];
 units[8] = "47";
 comments[8] = "Id Pregunta: 880. ";


//  Id pregunta: 882 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l es el sistema operativo propio de un IBM AS/400?:";
 choices[9]= new Array();
 choices[9][0] = "OS/400";
 choices[9][1] = "Unix";
 choices[9][2] = "AIX";
 choices[9][3] = "MVS";
 answers[9] = choices[9][0];
 units[9] = "49";
 comments[9] = "Id Pregunta: 882. ";


//  Id pregunta: 897 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;En qu&eacute; consiste el 'refresco' de una memoria din&aacute;mica?:";
 choices[10]= new Array();
 choices[10][0] = "En el proceso de optimizaci&oacute;n de la temperatura de trabajo de este tipo de memorias";
 choices[10][1] = "En la operaci&oacute;n de reescritura peri&oacute;dica que hay que realizar en ellas para que no pierdan la informaci&oacute;n almacenada";
 choices[10][2] = "En la operaci&oacute;n de acceso peri&oacute;dico que hay que realizar a este tipo de memorias, para repetir la &uacute;ltima operaci&oacute;n realizada";
 choices[10][3] = "El refresco no es propio de las memorias din&aacute;micas";
 answers[10] = choices[10][1];
 units[10] = "47";
 comments[10] = "Id Pregunta: 897. ";


//  Id pregunta: 933 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Qu&eacute; es una tarjeta PCMCIA (tambi&eacute;n conocida PC Card)?:";
 choices[11]= new Array();
 choices[11][0] = "El nombre comercial que recibe la tarjeta de comunicaciones de los m&oacute;dems as&iacute;ncronos";
 choices[11][1] = "Una tarjeta de seguridad que consta de un microchip en el que se ha almacenado informaci&oacute;n referente a la identidad personal del usuario y a las autorizaciones de acceso que tiene al sistema inform&aacute;tico";
 choices[11][2] = "El nombre comercial que reciben las placas de comunicaciones Ethernet que se conectan al puerto paralelo";
 choices[11][3] = "Un conjunto de dispositivos de peque&ntilde;o tama&ntilde;o (ancho similar al de una tarjeta de cr&eacute;dito) y diferentes alturas que pueden contener desde tarjetas de comunicaciones, modems, disco duro, etc";
 answers[11] = choices[11][3];
 units[11] = "47";
 comments[11] = "Id Pregunta: 933. ";


//  Id pregunta: 1070 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Elija la respuesta falsa. Un tablet PC se caracteriza por:";
 choices[12]= new Array();
 choices[12][0] = "Reconocer la escritura humana";
 choices[12][1] = "Ser portatil";
 choices[12][2] = "Caber en la palma de la mano";
 choices[12][3] = "Utilizar un sistema operativo de Microsoft";
 answers[12] = choices[12][2];
 units[12] = "47";
 comments[12] = "Id Pregunta: 1070. ";


//  Id pregunta: 1074 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  En el &aacute;mbito de las estructuras de datos, las siglas VSAM significan:";
 choices[13]= new Array();
 choices[13][0] = "Virtual Storage Access Method";
 choices[13][1] = "Verification System Access Method";
 choices[13][2] = "Very Short Access Method";
 choices[13][3] = "Valued Storage Archival Method";
 answers[13] = choices[13][0];
 units[13] = "48";
 comments[13] = "Id Pregunta: 1074. ";


//  Id pregunta: 1121 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  En los discos &oacute;pticos (CD-ROM, WROM etc) la densidad de grabaci&oacute;n es:";
 choices[14]= new Array();
 choices[14][0] = "Constante";
 choices[14][1] = "Variable, dependiendo de la distancia al centro";
 choices[14][2] = "Depende del tipo";
 choices[14][3] = "Igual que en los discos magn&eacute;ticos";
 answers[14] = choices[14][0];
 units[14] = "48";
 comments[14] = "Id Pregunta: 1121. ";


//  Id pregunta: 1134 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  En un desplazamiento c&iacute;clico a la izquierda de un bit, el contenido de &quot;100101&quot; se modifica en:";
 choices[15]= new Array();
 choices[15][0] = "&ldquo;110010&rdquo;.";
 choices[15][1] = "&quot;1010&rdquo;.";
 choices[15][2] = "&ldquo;110011&rdquo;.";
 choices[15][3] = "&ldquo;1011&rdquo;.";
 answers[15] = choices[15][3];
 units[15] = "49";
 comments[15] = "Id Pregunta: 1134. ";


//  Id pregunta: 1140 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  En un perif&eacute;rico de la CPU se distinguen:";
 choices[16]= new Array();
 choices[16][0] = "Las se&ntilde;ales de control y el acceso directo a memoria (DMA)";
 choices[16][1] = "Se&ntilde;ales de direcci&oacute;n y de datos";
 choices[16][2] = "E/S y acceso directo a memoria (DMA)";
 choices[16][3] = "Dispositivo perif&eacute;rico y controlador del perif&eacute;rico";
 answers[16] = choices[16][3];
 units[16] = "47";
 comments[16] = "Id Pregunta: 1140. ";


//  Id pregunta: 1149 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  En un sistema vectorial:";
 choices[17]= new Array();
 choices[17][0] = "Los MFLOPS pico son mayores que los MIPS";
 choices[17][1] = "Los MIPS pico son los mismos que los MFLOPs pico";
 choices[17][2] = "Ambas variables no tienen relaci&oacute;n directa";
 choices[17][3] = "Depende del lenguaje de programaci&oacute;n empleado";
 answers[17] = choices[17][0];
 units[17] = "45";
 comments[17] = "Id Pregunta: 1149. ";


//  Id pregunta: 1150 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  En una conexi&oacute;n RS-232 C o V24/V28 el conector tiene:";
 choices[18]= new Array();
 choices[18][0] = "15 pines";
 choices[18][1] = "32 pines";
 choices[18][2] = "24 pines";
 choices[18][3] = "25 pines";
 answers[18] = choices[18][3];
 units[18] = "47";
 comments[18] = "Id Pregunta: 1150. ";


//  Id pregunta: 1152 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  En una operaci&oacute;n de grabaci&oacute;n sobre una cinta magn&eacute;tica:";
 choices[19]= new Array();
 choices[19][0] = "Se escribe un car&aacute;cter";
 choices[19][1] = "Se escribe un bloque";
 choices[19][2] = "Se lee un dato";
 choices[19][3] = "Se escribe un registro l&oacute;gico";
 answers[19] = choices[19][1];
 units[19] = "48";
 comments[19] = "Id Pregunta: 1152. ";


//  Id pregunta: 1156 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  En una unidad de disco magn&eacute;tico, el tiempo de acceso a la informaci&oacute;n viene dado por:";
 choices[20]= new Array();
 choices[20][0] = "El tiempo de latencia";
 choices[20][1] = "El tiempo de b&uacute;squeda m&aacute;s el tiempo de latencia";
 choices[20][2] = "El tiempo de b&uacute;squeda m&aacute;s el tiempo de transferencia";
 choices[20][3] = "La longitud de la pista partido por la velocidad de rotaci&oacute;n m&aacute;s el tiempo de posicionamiento de la cabeza";
 answers[20] = choices[20][1];
 units[20] = "48";
 comments[20] = "Id Pregunta: 1156. ";


//  Id pregunta: 1231 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  La memoria RAM est&aacute;tica se diferencia de la RAM din&aacute;mica:";
 choices[21]= new Array();
 choices[21][0] = "En que la est&aacute;tica es m&aacute;s r&aacute;pida que la din&aacute;mica";
 choices[21][1] = "En que la est&aacute;tica es de s&oacute;lo lectura y la din&aacute;mica de lectura/escritura";
 choices[21][2] = "En que la est&aacute;tica no pierde su informaci&oacute;n si se interrumpe la alimentaci&oacute;n y la din&aacute;mica s&iacute;,";
 choices[21][3] = "En que la RAM est&aacute;tica no necesita ciclos de refresco y la din&aacute;mica s&iacute;";
 answers[21] = choices[21][3];
 units[21] = "47";
 comments[21] = "Id Pregunta: 1231. ";


//  Id pregunta: 1242 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  La sustituci&oacute;n de una placa en caliente significa:";
 choices[22]= new Array();
 choices[22][0] = "Que el ordenador debe tener energ&iacute;a en el bus";
 choices[22][1] = "Que se puede hacer con el ordenador funcionando, sin alterar su comportamiento";
 choices[22][2] = "Que debe hacerse inmediatamente despu&eacute;s de haber sacado la defectuosa, en menos tiempo del time out de uso de la placa (normalmente menos de 2 minutos)";
 choices[22][3] = "Son falsas todas las respuestas anteriores";
 answers[22] = choices[22][1];
 units[22] = "47";
 comments[22] = "Id Pregunta: 1242. ";


//  Id pregunta: 1250 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  La ventaja fundamental de las memorias cache es:";
 choices[23]= new Array();
 choices[23][0] = "Su alta velocidad";
 choices[23][1] = "Su seguridad";
 choices[23][2] = "La ampliaci&oacute;n de memoria principal que generan";
 choices[23][3] = "Su gran capacidad de direccionamiento";
 answers[23] = choices[23][0];
 units[23] = "47";
 comments[23] = "Id Pregunta: 1250. ";


//  Id pregunta: 1291 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  NAS:";
 choices[24]= new Array();
 choices[24][0] = "Es un dispositivo de almacenamiento conectado a red de alta capacidad";
 choices[24][1] = "Es un sistema de emisi&oacute;n de alarmas a trav&eacute;s de redes";
 choices[24][2] = "Es una base de datos orientada a objetos";
 choices[24][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[24] = choices[24][0];
 units[24] = "48";
 comments[24] = "Id Pregunta: 1291. ";


//  Id pregunta: 1312 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Referente al lenguaje m&aacute;quina de un ordenador, se puede afirmar que:";
 choices[25]= new Array();
 choices[25][0] = "El lenguaje m&aacute;quina es independiente de la CPU del ordenador";
 choices[25][1] = "El lenguaje m&aacute;quina, los datos se proporcionan mediante las direcciones de memoria donde &eacute;stos se encuentran";
 choices[25][2] = "Las instrucciones en lenguaje m&aacute;quina no tienen generalmente formato r&iacute;gido en cuanto a la posici&oacute;n de los distintos campos que las configuran";
 choices[25][3] = "El lenguaje m&aacute;quina era algo propio de los ordenadores de &eacute;pocas pasadas, hoy d&iacute;a la mayoria ejecuta directamente c&oacute;digo C";
 answers[25] = choices[25][1];
 units[25] = "47";
 comments[25] = "Id Pregunta: 1312. ";


//  Id pregunta: 1325 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  SAN:";
 choices[26]= new Array();
 choices[26][0] = "Es un fabricante americano de hardware y software";
 choices[26][1] = "Es una red de fibra &oacute;ptica dedicada para el almacenamiento";
 choices[26][2] = "Es una red de &aacute;rea local muy peque&ntilde;a (Simple Area Network)";
 choices[26][3] = "Corresponde con la tecnolog&iacute;a Software Adaptative Networking que permite que los nodos de conmutaci&oacute;n de las redes tengan procesamiento inteligente liberando a los clientes de incompatibilidades de protocolos y de gran cantidad de procesamiento";
 answers[26] = choices[26][1];
 units[26] = "48";
 comments[26] = "Id Pregunta: 1325. ";


//  Id pregunta: 1369 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  Si un disco tiene 7 pistas por cilindro y la capacidad  de cada  pista es de 2000 caracteres, para copiar una cinta que contiene 300 registros de 100 caracteres cada uno, &iquest;cu&aacute;ntos cilindros har&iacute;an falta?:";
 choices[27]= new Array();
 choices[27][0] = "3 cilindros";
 choices[27][1] = "2 cilindros";
 choices[27][2] = "4 cilindros";
 choices[27][3] = "5 cilindros";
 answers[27] = choices[27][0];
 units[27] = "48";
 comments[27] = "Id Pregunta: 1369. ";


//  Id pregunta: 1387 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  Un procesador superescalar es aqu&eacute;l que:";
 choices[28]= new Array();
 choices[28][0] = "Contiene varias unidades de ejecuci&oacute;n independientes de forma que puede ejecutar varias instrucciones simult&aacute;neamente";
 choices[28][1] = "Est&aacute; optimizado para maquinas multiprocesador, principalmente por su implementaci&oacute;n de algoritmos que aseguran la coherencia de las cach&eacute;s";
 choices[28][2] = "Contiene varias unidades de coma flotante posibilitando la paralelizaci&oacute;n de c&oacute;digo en servidores de c&aacute;lculo intensivo";
 choices[28][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[28] = choices[28][0];
 units[28] = "45";
 comments[28] = "Id Pregunta: 1387. ";


//  Id pregunta: 1430 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  Uno de los problemas m&aacute;s importantes en la aplicaci&oacute;n de los computadores paralelos consiste en:";
 choices[29]= new Array();
 choices[29][0] = "Su gran volumen";
 choices[29][1] = "Elevada potencia consumida";
 choices[29][2] = "Su dif&iacute;cil programaci&oacute;n";
 choices[29][3] = "El escaso hardware disponible";
 answers[29] = choices[29][2];
 units[29] = "45";
 comments[29] = "Id Pregunta: 1430. ";


//  Id pregunta: 1441 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  Con AGP se pretende:";
 choices[30]= new Array();
 choices[30][0] = "Crear un interfaz dedicado entre el sistema de v&iacute;deo y el procesador";
 choices[30][1] = "Crear un interfaz dedicado entre el sistema de v&iacute;deo y el disco duro";
 choices[30][2] = "Aislar el subsistema de v&iacute;deo de la arquitectura ISA";
 choices[30][3] = "Separar los subsistemas de audio y v&iacute;deo del bus principal";
 answers[30] = choices[30][0];
 units[30] = "48";
 comments[30] = "Id Pregunta: 1441. ";


//  Id pregunta: 1448 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  &iquest;Cu&aacute;l de las siguientes denominaciones no corresponde a un formato comercial de DVD?:";
 choices[31]= new Array();
 choices[31][0] = "DVD+RW";
 choices[31][1] = "DVD-R";
 choices[31][2] = "DVD-RE";
 choices[31][3] = "DVD RAM";
 answers[31] = choices[31][2];
 units[31] = "48";
 comments[31] = "Id Pregunta: 1448. ";


//  Id pregunta: 1470 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  Los perif&eacute;ricos conocidos como &quot;Pen-drive&quot; son:";
 choices[32]= new Array();
 choices[32][0] = "Unidades del tama&ntilde;o de un bol&iacute;grafo o un mechero que permiten aumentar la memoria RAM del ordenador o bien a&ntilde;adir un nuevo disco duro port&aacute;til y extra&iacute;ble";
 choices[32][1] = "L&aacute;pices &oacute;pticos que permiten dibujar en tabletas digitalizadoras y pantallas t&aacute;ctiles";
 choices[32][2] = "Esc&aacute;neres de mano de alta precisi&oacute;n";
 choices[32][3] = "Lectores de c&oacute;digos de barras de &uacute;ltima generaci&oacute;n";
 answers[32] = choices[32][0];
 units[32] = "47";
 comments[32] = "Id Pregunta: 1470. ";


//  Id pregunta: 1478 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  Se entiende por red de almacenamiento (Storage Area Network):";
 choices[33]= new Array();
 choices[33][0] = "El conjunto de ficheros y bases de datos interconectados por una red de area local";
 choices[33][1] = "Un sistema de ordenadores conectados por una WAN que permite el acceso mutuo a sus bases de datos";
 choices[33][2] = "Un sistema de comunicaciones que cuenta con cierta capacidad de memoria en sus encaminadores";
 choices[33][3] = "Un sistema que contempla el almacenamiento de datos e informaciones como un conjunto virtual embebido en una red de comunicaci&oacute;n";
 answers[33] = choices[33][3];
 units[33] = "48";
 comments[33] = "Id Pregunta: 1478. ";


//  Id pregunta: 1480 AÃ±o de creación de pregunta: 2002-01-01
 questions[34]= "35)  Suponiendo una densidad de grabaci&oacute;n lineal d = 10000 bits/cm, un radio R = 5 cm, una velocidad de giro de 3600 rpm y utilizaci&oacute;n de bits de paridad, la velocidad de transferencia es de:";
 choices[34]= new Array();
 choices[34][0] = "0.2 Mbytes/s";
 choices[34][1] = "10 Mbytes/s";
 choices[34][2] = "2.1 Mbytes/s";
 choices[34][3] = "18.9 Mbytes/s";
 answers[34] = choices[34][2];
 units[34] = "48";
 comments[34] = "Id Pregunta: 1480. ";


//  Id pregunta: 1489 AÃ±o de creación de pregunta: 2002-01-01
 questions[35]= "36)  El conocido est&aacute;ndar FireWire es el est&aacute;ndar IEEE:";
 choices[35]= new Array();
 choices[35][0] = "1284";
 choices[35][1] = "1394";
 choices[35][2] = "1384";
 choices[35][3] = "1294";
 answers[35] = choices[35][1];
 units[35] = "47";
 comments[35] = "Id Pregunta: 1489. ";


//  Id pregunta: 1510 AÃ±o de creación de pregunta: 2002-01-01
 questions[36]= "37)  Respecto a RAID, una de las siguientes afirmaciones es falsa:";
 choices[36]= new Array();
 choices[36][0] = "RAID 0 no ofrece protecci&oacute;n de datos, s&oacute;lo mejora el tiempo de acceso";
 choices[36][1] = "RAID 2 es similar al RAID 1 pero a&ntilde;adiendo redundancia";
 choices[36][2] = "RAID 5 es el m&aacute;s generalizado por su equilibrio de resultados";
 choices[36][3] = "RAID 4 es similar a RAID 0 pero con correcci&oacute;n de errores";
 answers[36] = choices[36][1];
 units[36] = "48";
 comments[36] = "Id Pregunta: 1510. ";


//  Id pregunta: 1511 AÃ±o de creación de pregunta: 2002-01-01
 questions[37]= "38)  Respecto al funcionamiento de USB, es falso que:";
 choices[37]= new Array();
 choices[37][0] = "no necesita drivers espec&iacute;ficos para configurar los dispositivos a &eacute;l conectados";
 choices[37][1] = "el ordenador identifica autom&aacute;ticamente el dispositivo que se conecta mientras opera &quot;en caliente&quot;";
 choices[37][2] = "La informaci&oacute;n se transmite de forma no balanceada, con la informaci&oacute;n y el control de sincronizaci&oacute;n en se&ntilde;ales separadas";
 choices[37][3] = "USB 1.1 puede funcionar a 1.5 Mbps y 12 Mbps, y USB 2.0, a 480 Mbps";
 answers[37] = choices[37][2];
 units[37] = "47";
 comments[37] = "Id Pregunta: 1511. ";


//  Id pregunta: 1541 AÃ±o de creación de pregunta: 2003-01-01
 questions[38]= "39)  &iquest;Qu&eacute; es NUMA?";
 choices[38]= new Array();
 choices[38][0] = "Non-Uniform Memory Access";
 choices[38][1] = "Un nuevo procesador RISC";
 choices[38][2] = "Un nuevo procesador CISC";
 choices[38][3] = "Tipo de arquitectura de proceso paralelo en el que cada procesador comparte una zona de memoria";
 answers[38] = choices[38][0];
 units[38] = "45";
 comments[38] = "Id Pregunta: 1541. ";


//  Id pregunta: 1612 AÃ±o de creación de pregunta: 2003-01-01
 questions[39]= "40)  La velocidad te&oacute;rica m&aacute;xima aproximada de un lector de CD-ROM 48x es de:";
 choices[39]= new Array();
 choices[39][0] = "150 KB/seg.";
 choices[39][1] = "3600 KB/seg.";
 choices[39][2] = "7200 KB/seg.";
 choices[39][3] = "3 MB/seg.";
 answers[39] = choices[39][2];
 units[39] = "48";
 comments[39] = "Id Pregunta: 1612. Junta Andaluc&iacute;a";


//  Id pregunta: 1637 AÃ±o de creación de pregunta: 2004-01-01
 questions[40]= "41)  El software que conecta dos aplicaciones heterog&eacute;neas, para compartir recursos de proceso de datos, se conoce como:";
 choices[40]= new Array();
 choices[40][0] = "Firmware";
 choices[40][1] = "Interfaz de usuario";
 choices[40][2] = "Middleware";
 choices[40][3] = "Everyware";
 answers[40] = choices[40][2];
 units[40] = "50";
 comments[40] = "Id Pregunta: 1637. ";


//  Id pregunta: 1643 AÃ±o de creación de pregunta: 2003-01-01
 questions[41]= "42)  Indicar cu&aacute;l es la afirmaci&oacute;n correcta en torno a las matrices de discos RAID:";
 choices[41]= new Array();
 choices[41][0] = "RAID-0. Tambi&eacute;n llamado modo &quot;stripe'' o distribuci&oacute;n por bandas. Las lecturas y escrituras se realizan en serie en los dispositivos.";
 choices[41][1] = "RAID-1. Se mantiene en un disco un duplicado exacto de la informaci&oacute;n del otro disco.";
 choices[41][2] = "RAID-5. Se guarda la informaci&oacute;n de paridad en un &uacute;nico disco y escribe los datos a los otros discos de forma parecida a un RAID-0.";
 choices[41][3] = "RAID-4. La informaci&oacute;n de paridad se distribuye uniformemente entre los discos participantes,";
 answers[41] = choices[41][1];
 units[41] = "48";
 comments[41] = "Id Pregunta: 1643. ";


//  Id pregunta: 1657 AÃ±o de creación de pregunta: 2004-01-01
 questions[42]= "43)  Acceso directo a memoria (DMA) es:";
 choices[42]= new Array();
 choices[42][0] = "Mecanismo por el que se transfieren datos entre un sistema de entrada/salida y el sistema de memoria sin la intervenci&oacute;n de la CPU.";
 choices[42][1] = "Un modo de funcionamiento opcional del hardware que permite acelerar el acceso a discos duros.";
 choices[42][2] = "Un modo de funcionamiento opcional del software que permite acelerar el acceso a discos duros.";
 choices[42][3] = "Un modo de acceso a dispositivos de entrada/salida en el que cada uno de ellos esta &quot;mapeado&quot; a una direcci&oacute;n de memoria.";
 answers[42] = choices[42][0];
 units[42] = "47";
 comments[42] = "Id Pregunta: 1657. ";


//  Id pregunta: 1663 AÃ±o de creación de pregunta: 2004-01-01
 questions[43]= "44)  Indique la afirmaci&oacute;n incorrecta, respecto a SMP";
 choices[43]= new Array();
 choices[43][0] = "Es una arquitectura de ordenador con performances muy r&aacute;pidas";
 choices[43][1] = "Tiene multiples CPU disponibles para efectuar procesos individuales completos simult&aacute;neamente";
 choices[43][2] = "Todas las CPU comparten la misma memoria";
 choices[43][3] = "Sus siglas son Symetric Massively Processing";
 answers[43] = choices[43][3];
 units[43] = "45";
 comments[43] = "Id Pregunta: 1663. ";


//  Id pregunta: 1669 AÃ±o de creación de pregunta: 2004-01-01
 questions[44]= "45)  &iquest;En que generaci&oacute;n aparecen los circuitos integrados LSI?";
 choices[44]= new Array();
 choices[44][0] = "En la primera generaci&oacute;n";
 choices[44][1] = "En la segunda generaci&oacute;n";
 choices[44][2] = "En la tercera generaci&oacute;n";
 choices[44][3] = "En la cuarta generaci&oacute;n";
 answers[44] = choices[44][3];
 units[44] = "47";
 comments[44] = "Id Pregunta: 1669. ";


//  Id pregunta: 1701 AÃ±o de creación de pregunta: 2006-01-01
 questions[45]= "46)  Cuando se utilizan t&eacute;cnicas de implementaci&oacute;n de elementos de procesamiento basadas enpipelining se dice que:";
 choices[45]= new Array();
 choices[45][0] = "El paralelismo sucede a nivel de procesador.";
 choices[45][1] = "El paralelismo sucede a nivel de multiprocesador.";
 choices[45][2] = "El paralelismo sucede a nivel de multicomputador.";
 choices[45][3] = "Ninguna de las anteriores.";
 answers[45] = choices[45][0];
 units[45] = "46";
 comments[45] = "Id Pregunta: 1701. ";


//  Id pregunta: 1705 AÃ±o de creación de pregunta: 2006-01-01
 questions[46]= "47)  En lo referente a PDAs:";
 choices[46]= new Array();
 choices[46][0] = "Responden a las siglas &quot;Personal Digital Agendas&quot;";
 choices[46][1] = "Tambi&eacute;n son conocidos por agendas electr&oacute;nicas o palmtops";
 choices[46][2] = "En lugar de teclado, utilizan un l&aacute;piz y un reconocedor de caracteres";
 choices[46][3] = "Pueden usarse como tel&eacute;fonos, pero no pueden mandar un fax";
 answers[46] = choices[46][1];
 units[46] = "47";
 comments[46] = "Id Pregunta: 1705. ";


//  Id pregunta: 1708 AÃ±o de creación de pregunta: 2006-01-01
 questions[47]= "48)  Se&ntilde;ale la opci&oacute;n correcta respecto a SAN, Storage Area Network:";
 choices[47]= new Array();
 choices[47][0] = "SAN se sit&uacute;a entre el servidor de aplicaciones y el sistema de ficheros";
 choices[47][1] = "SAN es una red separada de la LAN, de dispositivos de almacenamiento homog&eacute;neos";
 choices[47][2] = "La diferencia entre NAS y SAN es que &eacute;sta &uacute;ltima utiliza fibra &oacute;ptica para sus interconexiones ";
 choices[47][3] = "Todos los dispositivos de almacenamiento de la SAN son accesibles a todos los servidores de la LAN";
 answers[47] = choices[47][3];
 units[47] = "48";
 comments[47] = "Id Pregunta: 1708. ";


//  Id pregunta: 1709 AÃ±o de creación de pregunta: 2006-01-01
 questions[48]= "49)  &iquest;cu&aacute;l de los siguientes sistemas operativos es un sistema orientado a objetos?";
 choices[48]= new Array();
 choices[48][0] = "Windows";
 choices[48][1] = "Linux";
 choices[48][2] = "OS/400";
 choices[48][3] = "VMS";
 answers[48] = choices[48][2];
 units[48] = "49";
 comments[48] = "Id Pregunta: 1709. ";


//  Id pregunta: 1714 AÃ±o de creación de pregunta: 2006-01-01
 questions[49]= "50)  Se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[49]= new Array();
 choices[49][0] = "El procesamiento cooperativo es aquel en que 2 o m&aacute;s elementos l&oacute;gicos diferentes interact&uacute;an entre s&iacute; en la realizaci&oacute;n de una tarea com&uacute;n";
 choices[49][1] = "El procesamiento centralizado utiliza el host para ejecutar el 100% de la l&oacute;gica asociada a un programa";
 choices[49][2] = "Los procesamientos centralizados dan mayor flexibilidad y escalabilidad";
 choices[49][3] = "Los procesamientos cooperativos reducen los costes de inversi&oacute;n en equipamiento";
 answers[49] = choices[49][2];
 units[49] = "50";
 comments[49] = "Id Pregunta: 1714. ";


//  Id pregunta: 1715 AÃ±o de creación de pregunta: 2006-01-01
 questions[50]= "51)  La arquitectura cliente/servidor:";
 choices[50]= new Array();
 choices[50][0] = "Se conoce tambi&eacute;n como arquitectura de 3 capas o niveles, siendo la tercera una capa situada entre el cliente y el servidor donde reside la l&oacute;gica de negocio";
 choices[50][1] = "Involucra a un solo cliente que se comunica con un solo servidor";
 choices[50][2] = "es la m&aacute;s adecuada para aplicaciones en continua evoluci&oacute;n y con datos distribuidos";
 choices[50][3] = "permite la ejecuci&oacute;n de los tratamientos de clientes y servidor en el mismo equipo o en diferentes, indistintamente";
 answers[50] = choices[50][3];
 units[50] = "50";
 comments[50] = "Id Pregunta: 1715. ";


//  Id pregunta: 1904 AÃ±o de creación de pregunta: 2006-01-01
 questions[51]= "52)  Copia &quot;cercana&quot; de datos que permite un acceso m&aacute;s r&aacute;pido que el almacenamiento habitual";
 choices[51]= new Array();
 choices[51][0] = "registro";
 choices[51][1] = "cache";
 choices[51][2] = "buffer";
 choices[51][3] = "pipelining";
 answers[51] = choices[51][1];
 units[51] = "47";
 comments[51] = "Id Pregunta: 1904. ";


//  Id pregunta: 1909 AÃ±o de creación de pregunta: 2006-01-01
 questions[52]= "53)  Acerca de los sistemas MPP puede afirmarse:";
 choices[52]= new Array();
 choices[52][0] = "Constituyen una categor&iacute;a de los sistemas MISD donde se incluyen los arrays sist&oacute;licos.";
 choices[52][1] = "Constituyen una categor&iacute;a de los sistemas MIMD con una &uacute;nica memoria compartida.";
 choices[52][2] = "A su vez se dividen en sistemas de gesti&oacute;n UMA y sistemas de gesti&oacute;n NUMA.";
 choices[52][3] = "Categor&iacute;a de los sistemas MIMD con memoria distribuida.";
 answers[52] = choices[52][3];
 units[52] = "45";
 comments[52] = "Id Pregunta: 1909. ";


//  Id pregunta: 1911 AÃ±o de creación de pregunta: 2006-01-01
 questions[53]= "54)  Respecto de las arquitecturas Grid, es falso afirmar que:";
 choices[53]= new Array();
 choices[53][0] = "El porcentaje de dedicaci&oacute;n de cada m&aacute;quina de la arquitectura es fijo e independiente de la carga de cada una.";
 choices[53][1] = "Su nombre proviene del paradigma de la red el&eacute;ctrica.";
 choices[53][2] = "Los recursos que las componen se encuentran distribuidos geogr&aacute;ficamente.";
 choices[53][3] = "Sus creadores fueron Ian Foster y Carl Kesselman.";
 answers[53] = choices[53][0];
 units[53] = "45";
 comments[53] = "Id Pregunta: 1911. ";


//  Id pregunta: 3072 AÃ±o de creación de pregunta: 2002-01-01
 questions[54]= "55)  La arquitectura 'fault tolerant' se caracteriza por :";
 choices[54]= new Array();
 choices[54][0] = "La ejecuci&oacute;n de una instrucci&oacute;n se divide en fases";
 choices[54][1] = "Las diferentes funciones del sistema se encuentran distribuidas en procesadores especializados";
 choices[54][2] = "Existe suficiente redundancia para asegurar un funcionamiento correcto en caso de fallo";
 choices[54][3] = "Todos los componentes del ordenador intercambian datos compartiendo los buses";
 answers[54] = choices[54][2];
 units[54] = "45";
 comments[54] = "Id Pregunta: 3072. NULL";


//  Id pregunta: 3075 AÃ±o de creación de pregunta: 2005-01-01
 questions[55]= "56)  La disponibilidad de un sistema se define como:";
 choices[55]= new Array();
 choices[55][0] = "La proporci&oacute;n de tiempo en la que es realmente utilizado";
 choices[55][1] = "El cociente entre el tiempo medio de reparaci&oacute;n y el tiempo medio entre fallos";
 choices[55][2] = "El porcentaje de tiempo que el sistema est&aacute; disponible";
 choices[55][3] = "La probabilidad de que un sistema falle en un instante dado";
 answers[55] = choices[55][2];
 units[55] = "45";
 comments[55] = "Id Pregunta: 3075. Definici&oacute;n dada en Magerit V2";


//  Id pregunta: 3926 AÃ±o de creación de pregunta: 2003-01-01
 questions[56]= "57)  &iquest;Cual de los siguientes es un monitor de transacciones?";
 choices[56]= new Array();
 choices[56][0] = "Tuxedo ";
 choices[56][1] = "Tivoli";
 choices[56][2] = "Unicenter TNG";
 choices[56][3] = "Ninguno de los anteriores";
 answers[56] = choices[56][0];
 units[56] = "49";
 comments[56] = "Id Pregunta: 3926. Pregunta similar a la del ex&aacute;men de SS del 2003 salvo en algunas opciones";


//  Id pregunta: 4564 AÃ±o de creación de pregunta: 2007-01-01
 questions[57]= "58)  &iquest;Cual de las siguientes afirmaciones sobre dispositivos NAS es falsa?:";
 choices[57]= new Array();
 choices[57][0] = "Ia capacidad m&aacute;xima de almacenamiento de los dispositivos NAS es inferior al de las redes SAN";
 choices[57][1] = "los dispositivos NAS utilizan un protocolo SCSI para suministrar los archivos a los clientes";
 choices[57][2] = "la conexi&oacute;n entre los dispositivos NAS y la red se realiza a trav&eacute;s de TCP/IP";
 choices[57][3] = "los dispositivos NAS son unidades de almacenamiento, grandes servidores dedicados exclusivamente a tal fin que se conectan a la red";
 answers[57] = choices[57][1];
 units[57] = "48";
 comments[57] = "Id Pregunta: 4564. ";


//  Id pregunta: 4617 AÃ±o de creación de pregunta: 2007-01-01
 questions[58]= "59)  &iquest;Cual de las siguientes opciones es la correcta?";
 choices[58]= new Array();
 choices[58][0] = "un dispositivo NAS comparte bloques mientras que en una SAN se comparten ficheros.";
 choices[58][1] = "en el modelo NAS se utiliza una infraestructura de red de datos, mientras que en una SAN se crea una infraestructura de red nueva dedicada y orientada a compartir dispositivos de almacenamiento.";
 choices[58][2] = "una SAN puede ser compartida por varios servidores o estar dedicada a un &uacute;nico servidor, puede ser local pero no extenderse por &aacute;reas geogr&aacute;ficas mas amplias.";
 choices[58][3] = "en el modelo SAN se utiliza una infraestructura de red de datos, mientras que en una NAS se crea una infraestructura de red nueva dedicada y orientada a compartir dispositivos de almacenamiento.";
 answers[58] = choices[58][1];
 units[58] = "48";
 comments[58] = "Id Pregunta: 4617. ";


//  Id pregunta: 4746 AÃ±o de creación de pregunta: 2007-01-01
 questions[59]= "60)  Indicar la afirmaci&oacute;n correcta.";
 choices[59]= new Array();
 choices[59][0] = "Los servicios web pueden aprovechar la estructura de un GRID de manera eficiente";
 choices[59][1] = "Un GRID es una red de ordenadores que comparten recursos entre ellos para maximizar sus prestaciones totales";
 choices[59][2] = "Los recursos que se aportan por los miembros de una red GRID pueden ser de almacenamiento, memoria y procesamiento";
 choices[59][3] = "Para que una red GRID sea segura es preciso establecer una pol&iacute;tica de seguridad com&uacute;n a las subredes que lo conforman";
 answers[59] = choices[59][0];
 units[59] = "45";
 comments[59] = "Id Pregunta: 4746. ";


//  Id pregunta: 4826 AÃ±o de creación de pregunta: 2007-01-01
 questions[60]= "61)  En una aplicaci&oacute;n sobre arquitectura de tres capas, &iquest;d&oacute;nde se encuentran ubicadas las reglas de negocio?";
 choices[60]= new Array();
 choices[60][0] = "En el servidor de aplicaciones";
 choices[60][1] = "En el servidor de datos";
 choices[60][2] = "En el Cliente";
 choices[60][3] = "En el servidor http/ssl (Hipertext Transfer Protocol / Secure Sockets Layer)";
 answers[60] = choices[60][0];
 units[60] = "50";
 comments[60] = "Id Pregunta: 4826. ";


//  Id pregunta: 4868 AÃ±o de creación de pregunta: 2007-01-01
 questions[61]= "62)  &iquest;Cu&aacute;l de las siguientes afirmaciones relativa a los sistemas de almacenamiento y m&eacute;todos de acceso NO es cierta?";
 choices[61]= new Array();
 choices[61][0] = "El &iacute;ndice basado en &aacute;rbol B presenta mayores densidades que el basado en &aacute;rbol B*";
 choices[61][1] = "Un fichero de datos puede tener varios &iacute;ndices, pero como mucho uno puede ser denso";
 choices[61][2] = "Una clave de b&uacute;squeda no tiene por qu&eacute; ser un&iacute;voca";
 choices[61][3] = "Los niveles n-1 (con n &gt; 1) de un &iacute;ndice multinivel (no arb&oacute;reo) son &iacute;ndices no-densos que indizan el nivel n";
 answers[61] = choices[61][0];
 units[61] = "48";
 comments[61] = "Id Pregunta: 4868. ";


//  Id pregunta: 5120 AÃ±o de creación de pregunta: 2003-01-01
 questions[62]= "63)  En el tercer nivel del modelo de arquitectura cliente/servidor, llamado proceso distribuido, las funciones de presentaci&oacute;n residen en:";
 choices[62]= new Array();
 choices[62][0] = "El cliente";
 choices[62][1] = "El servidor";
 choices[62][2] = "La red";
 choices[62][3] = "Se reparten entre cliente y el servidor";
 answers[62] = choices[62][0];
 units[62] = "50";
 comments[62] = "Id Pregunta: 5120. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5630 AÃ±o de creación de pregunta: 2003-01-01
 questions[63]= "64)  Una soluci&oacute;n basada en Grid Computing ser&iacute;a adecuada para:";
 choices[63]= new Array();
 choices[63][0] = "Obtener rendimientos de pico";
 choices[63][1] = "Aplicaciones multiproceso";
 choices[63][2] = "Entornos de trabajo con productividad sostenida";
 choices[63][3] = "Ninguna de las anteriores";
 answers[63] = choices[63][2];
 units[63] = "45";
 comments[63] = "Id Pregunta: 5630. ";


//  Id pregunta: 5632 AÃ±o de creación de pregunta: 2003-01-01
 questions[64]= "65)  Una soluci&oacute;n CISC no se caracteriza por:";
 choices[64]= new Array();
 choices[64][0] = "Muchos modos de direccionamiento";
 choices[64][1] = "Unidad de control cableada";
 choices[64][2] = "N&uacute;mero de instrucciones muy elevado";
 choices[64][3] = "Varios formatos de instrucci&oacute;n (longitud variable)";
 answers[64] = choices[64][1];
 units[64] = "45";
 comments[64] = "Id Pregunta: 5632. ";


//  Id pregunta: 5635 AÃ±o de creación de pregunta: 2003-01-01
 questions[65]= "66)  La velocidad de transmisi&oacute;n seg&uacute;n la Recomendaci&oacute;n V.34 de la UIT-T es:";
 choices[65]= new Array();
 choices[65][0] = "33,2 Kbps";
 choices[65][1] = "33,4 Kbps";
 choices[65][2] = "33,6 Kbps";
 choices[65][3] = "33,8 Kbps";
 answers[65] = choices[65][2];
 units[65] = "47";
 comments[65] = "Id Pregunta: 5635. ";


//  Id pregunta: 7151 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  En la guerra de formatos sucesores del DVD, se ha impuesto el Blue-Ray, &iquest;cu&aacute;l es su capacidad de almacenamiento?";
 choices[66]= new Array();
 choices[66][0] = "40 GB para discos de una capa y 85 GB para discos de dos capas";
 choices[66][1] = "20 GB para discos de una capa y 100 GB para discos multicapas";
 choices[66][2] = "25 GB para discos de una capa y 50 GB para discos de dos capas";
 choices[66][3] = "30 GB para discos de una capa y 60 GB para discos de dos capas";
 answers[66] = choices[66][2];
 units[66] = "48";
 comments[66] = "Id Pregunta: 7151. Examen TIC B 2009";


//  Id pregunta: 7154 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  Si 100 personas reciben un correo electr&oacute;nico, destinado a toda la empresa, con un archivo adjunto de 1 MB, y cada destinatario decide guardar el archivo adjunto localmente, a la hora de hacer backup de esos escritorios se precisar&aacute;n 100 MB de espacio de copias de seguridad. &iquest;C&oacute;mo se denomina la tecnolog&iacute;a que permite reducir este espacio a un uno por ciento del espacio original necesario?";
 choices[67]= new Array();
 choices[67][0] = "Compresion LZ";
 choices[67][1] = "Filtrado de Kalman";
 choices[67][2] = "Renderizaci&oacute;n especulativa";
 choices[67][3] = "Deduplicaci&oacute;n";
 answers[67] = choices[67][3];
 units[67] = "48";
 comments[67] = "Id Pregunta: 7154. Examen TIC B 2009";


//  Id pregunta: 7155 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)  Una copia de seguridad que incluye todos los archivos creados o modificados desde la &uacute;ltima copia, y los marca individualmente como copiados, es una copia de seguridad:";
 choices[68]= new Array();
 choices[68][0] = "Diaria";
 choices[68][1] = "Intermedia";
 choices[68][2] = "Incremental";
 choices[68][3] = "Diferencial";
 answers[68] = choices[68][2];
 units[68] = "48";
 comments[68] = "Id Pregunta: 7155. Examen TIC B 2009";


//  Id pregunta: 8173 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  En los sistemas MIMD:";
 choices[69]= new Array();
 choices[69][0] = "Todos los datos est&aacute;n accesibles para todos los procesadores.";
 choices[69][1] = "No todas las instrucciones est&aacute;n disponibles para todos los procesadores.";
 choices[69][2] = "Emplean varios buses de altas prestaciones para transmitir instrucciones y datos simult&aacute;neamente.";
 choices[69][3] = "Pueden trabajar con memoria compartida o con memoria distribuida.";
 answers[69] = choices[69][3];
 units[69] = "45";
 comments[69] = "Id Pregunta: 8173. Examen TIC A1 2010";


//  Id pregunta: 8621 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas NO es propia del sistema de almacenamiento RAID 5?";
 choices[70]= new Array();
 choices[70][0] = "La paridad est&aacute; en un disco dedicado";
 choices[70][1] = "La divisi&oacute;n se produce a nivel de bloques";
 choices[70][2] = "Tiene un bajo coste de redundancia";
 choices[70][3] = "Se necesitan al menos 3 discos";
 answers[70] = choices[70][0];
 units[70] = "48";
 comments[70] = "Id Pregunta: 8621. Examen TIC A2 2010 interna";


//  Id pregunta: 8622 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  Se&ntilde;ale la respuesta correcta respecto a las cintas Ultrium LTO:";
 choices[71]= new Array();
 choices[71][0] = "Tienen un formato propietario";
 choices[71][1] = "Los lectores son compatibles con las cintas AIT de Sony.";
 choices[71][2] = "En su versi&oacute;n LTO 5. alcanza capacidades sin compresi&oacute;n de hasta 1,4 TB.";
 choices[71][3] = "No permiten ning&uacute;n tipo de cifrado.";
 answers[71] = choices[71][2];
 units[71] = "48";
 comments[71] = "Id Pregunta: 8622. Examen TIC A2 2010 interna";


//  Id pregunta: 8665 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  El protocolo MESI:";
 choices[72]= new Array();
 choices[72][0] = "Es utilizado para el inicio de sesi&oacute;n en redes GSM.";
 choices[72][1] = "Permite el establecimiento de conexiones entre iguales &quot;peer to peer&quot; sobre redes IP.";
 choices[72][2] = "Controla las colisiones en redes Token Ring.";
 choices[72][3] = "Controla la coherencia cach&eacute; en algunos procesadores.";
 answers[72] = choices[72][3];
 units[72] = "46, 52";
 comments[72] = "Id Pregunta: 8665. Examen UPM A2 2011";


//  Id pregunta: 8840 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)   Los conceptos de switch zoning y LUN masking en una red de almacenamiento FC (Fiber Channel)";
 choices[73]= new Array();
 choices[73][0] = " Permiten restringir la conectividad de red entre clientes FC, y gestionar su m&aacute;scara de red din&aacute;micamente ";
 choices[73][1] = " Son utilizados en la administraci&oacute;n de rob&oacute;ticas LTO para copias de seguridad de los discos virtuales";
 choices[73][2] = " Permiten al administrador restringir la visibilidad entre clientes por puerto o WWN, as&iacute; como el acceso a un disco virtual ";
 choices[73][3] = "Ambos conceptos son incompatibles en una red FC ";
 answers[73] = choices[73][2];
 units[73] = "48";
 comments[73] = "Id Pregunta: 8840. Examen UC3M 2010";


//  Id pregunta: 8978 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  Respecto al sistema operativo Android:";
 choices[74]= new Array();
 choices[74][0] = "Muchas de sus aplicaciones est&aacute;n escritas en Java";
 choices[74][1] = "No dispone de una m&aacute;quina virtual java";
 choices[74][2] = "Las respuestas a) y b) son ciertas";
 choices[74][3] = "Las respuestas a) y b) son falsas";
 answers[74] = choices[74][2];
 units[74] = "47";
 comments[74] = "Id Pregunta: 8978. ";


//  Id pregunta: 9121 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  &iquest;C&oacute;mo son los nodos de un cluster?";
 choices[75]= new Array();
 choices[75][0] = "Siempre homog&eacute;neos con el mismo sistema operativo.";
 choices[75][1] = "Pueden ser heterogeneos, con distintos sistemas operativos.";
 choices[75][2] = "S&oacute;lo se pueden crear clusters con tecnolog&iacute;a Microsoft.";
 choices[75][3] = "Ninguna respuesta es correcta.";
 answers[75] = choices[75][1];
 units[75] = "45";
 comments[75] = "Id Pregunta: 9121. ";


//  Id pregunta: 9123 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  &iquest;C&oacute;mo se puede enmarcar el proyecto SETIHome de investigaci&oacute;n de vida extraterrestre?";
 choices[76]= new Array();
 choices[76][0] = "Como una soluci&oacute;n de web 2.0";
 choices[76][1] = "Como un ejemplo pr&aacute;ctico de computaci&oacute;n Grid";
 choices[76][2] = "Una soluci&oacute;n basada en tecnolog&iacute;a Oracle.";
 choices[76][3] = "Ninguna respuesta es correcta.";
 answers[76] = choices[76][1];
 units[76] = "45";
 comments[76] = "Id Pregunta: 9123. ";


//  Id pregunta: 9127 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  La taxonom&iacute;a de Flynn clasifica los ordenadores en funci&oacute;n de";
 choices[77]= new Array();
 choices[77][0] = "la relaci&oacute;n mayor o menor entre memoria principal y almacenamiento externo";
 choices[77][1] = "el flujo que siguen los datos dentro de la m&aacute;quina y de las instrucciones sobre esos datos";
 choices[77][2] = "el m&eacute;todo de acceso a los dispositivos de almacenamiento externo";
 choices[77][3] = "la relaci&oacute;n entre la velocidad de acceso a datos seg&uacute;n est&eacute;n en memoria o almacenamiento externo";
 answers[77] = choices[77][1];
 units[77] = "45";
 comments[77] = "Id Pregunta: 9127. Examen TIC-A1 2011";


//  Id pregunta: 9128 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  La arquitectura de un ordenador viene definida por";
 choices[78]= new Array();
 choices[78][0] = "El repertorio de instrucciones";
 choices[78][1] = "El tipo de direccionamientos";
 choices[78][2] = "El tipo de operandos";
 choices[78][3] = "Todas las anteriores";
 answers[78] = choices[78][3];
 units[78] = "46";
 comments[78] = "Id Pregunta: 9128. ";


//  Id pregunta: 9135 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  &iquest;Para qu&eacute; se tiene instalado el software b&aacute;sico que se denomina BIOS?";
 choices[79]= new Array();
 choices[79][0] = "Es un software que se almacena en EPROM pero que no se puede considerar b&aacute;sico";
 choices[79][1] = "Se refresca cada vez que arranca el PC";
 choices[79][2] = "Es el primer software que se ejecuta en el proceso de arranque de una placa base";
 choices[79][3] = "No se puede reprogramar";
 answers[79] = choices[79][2];
 units[79] = "47";
 comments[79] = "Id Pregunta: 9135. ";


//  Id pregunta: 9137 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  &iquest;Qu&eacute; debe proporcionar c&oacute;mo m&iacute;nimo cualquier placa base en la actualidad?";
 choices[80]= new Array();
 choices[80][0] = "Un chipset";
 choices[80][1] = "Dos chipsets para vincular microprocesador y memoria";
 choices[80][2] = "Tres chipsets";
 choices[80][3] = "Dos chipsets, uno para vincular microprocesador y memoria y otro para vincular microprocesador y subsistema de E/S";
 answers[80] = choices[80][3];
 units[80] = "47";
 comments[80] = "Id Pregunta: 9137. ";


//  Id pregunta: 9220 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  &iquest;Qu&eacute; es Zoning?";
 choices[81]= new Array();
 choices[81][0] = "Es un concepto perteneciente a las redes SAN de FC";
 choices[81][1] = "Cada zona se comporta como si en la red SAN solo existienen los dispositivos que forman parte de ella.";
 choices[81][2] = "El servidor y la cabina debe estar en la misma zona y adicionalmente la cabina debe permitir el acceso del servicio a dicha LUN.";
 choices[81][3] = "Todas son v&aacute;lidas";
 answers[81] = choices[81][3];
 units[81] = "48";
 comments[81] = "Id Pregunta: 9220. ";


//  Id pregunta: 9222 AÃ±o de creación de pregunta: 2013-01-01
 questions[82]= "83)  Identificar que protocolo no est&aacute; dise&ntilde;ado especificamente para la extensi&oacute;n de las SAN sobre protocolo IP";
 choices[82]= new Array();
 choices[82][0] = "iFTP";
 choices[82][1] = "iSCSCI";
 choices[82][2] = "FCIP";
 choices[82][3] = "iFCP";
 answers[82] = choices[82][0];
 units[82] = "48";
 comments[82] = "Id Pregunta: 9222. Examen TIC-A1 2011";


//  Id pregunta: 9225 AÃ±o de creación de pregunta: 2013-01-01
 questions[83]= "84)  Un conjunto de procesadores interconectados por redes que ocultan dicha caracter&iacute;stica mostrando una visi&oacute;n al usuario de &ldquo;uniprocesador virtual&rdquo; es:";
 choices[83]= new Array();
 choices[83][0] = "S. O. Distribuido";
 choices[83][1] = "S.O. Cooperativos o basados en Middlewares";
 choices[83][2] = "S. O. En Red";
 choices[83][3] = "S.O. Centralizados";
 answers[83] = choices[83][0];
 units[83] = "50";
 comments[83] = "Id Pregunta: 9225. ";


//  Id pregunta: 9276 AÃ±o de creación de pregunta: 2013-01-01
 questions[84]= "85)  Indique la frase ERR&Oacute;NEA acerca de las t&eacute;cnicas de configuraci&oacute;n de servidores.";
 choices[84]= new Array();
 choices[84][0] = "Existen tres tipos de cluster: de alta disponibilidad, de alto rendimiento y de balanceo de carga.";
 choices[84][1] = "La principal limitaci&oacute;n t&eacute;cnica para un centro de respaldo en configuraci&oacute;n activo activo es el tiempo de latencia";
 choices[84][2] = "El balanceo de carga solo puede implementarse por software.";
 choices[84][3] = "La virtualizaci&oacute;n permite optimizar el uso del procesador y la memoria de los equipos f&iacute;sicos.";
 answers[84] = choices[84][2];
 units[84] = "49";
 comments[84] = "Id Pregunta: 9276. Examen TIC-A1 2011";


//  Id pregunta: 9669 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  La ley de Amdahl demuestra que:";
 choices[85]= new Array();
 choices[85][0] = "Cuantas m&aacute;s CPUs, m&aacute;s productividad.";
 choices[85][1] = "La productividad depende de la parte que sea paralelizable.";
 choices[85][2] = "Cuanto m&aacute;s c&oacute;digo, m&aacute;s CPUs hacen falta.";
 choices[85][3] = "El n&uacute;mero de procesadores es igual al n&uacute;mero de ALUs.";
 answers[85] = choices[85][1];
 units[85] = "45";
 comments[85] = "Id Pregunta: 9669. ";


//  Id pregunta: 9670 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  La gesti&oacute;n NUMA:";
 choices[86]= new Array();
 choices[86][0] = "Significa Not Uniform Memory Access.";
 choices[86][1] = "Significa Not Unit of Memory Available.";
 choices[86][2] = "Implica que se introducen criterios de preferencia en el acceso a memoria compartida.";
 choices[86][3] = "La a) y la c)";
 answers[86] = choices[86][3];
 units[86] = "45";
 comments[86] = "Id Pregunta: 9670. ";


//  Id pregunta: 9727 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  Los grandes sistemas, tambi&eacute;n llamados mainframe";
 choices[87]= new Array();
 choices[87][0] = "son desarrollados por muchos fabricantes.";
 choices[87][1] = "usan memoria distribuida y no compartida.";
 choices[87][2] = "son soluciones altamente propietarias.";
 choices[87][3] = "son sistemas d&eacute;bilmente acoplados.";
 answers[87] = choices[87][2];
 units[87] = "46";
 comments[87] = "Id Pregunta: 9727. Examen TIC-A1 2013";


//  Id pregunta: 9940 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  La taxonom&iacute;a de Flynn:";
 choices[88]= new Array();
 choices[88][0] = "se ha revisado recientemente para incluir los sistemas Big Data.";
 choices[88][1] = "es una clasificaci&oacute;n de computadores en funci&oacute;n de su arquitectura.";
 choices[88][2] = "es la base de la taxonom&iacute;a de Bloom.";
 choices[88][3] = "se propuso con motivo de los primeros PC de IBM.";
 answers[88] = choices[88][1];
 units[88] = "45";
 comments[88] = "Id Pregunta: 9940. TIC A1, Examen 2013";


//  Id pregunta: 10288 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  En el contexto de copias de seguridad o respaldo, un TMS es acr&oacute;nimo de:";
 choices[89]= new Array();
 choices[89][0] = "Tape Management System.";
 choices[89][1] = "Transaction Multiplexing System.";
 choices[89][2] = "Tape Mapping System.";
 choices[89][3] = "Transaction Management System.";
 answers[89] = choices[89][0];
 units[89] = "48";
 comments[89] = "Id Pregunta: 10288. TIC A2, libre, examen 2013";


//  Id pregunta: 10310 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  La tasa de transferencia m&aacute;xima que soporta el Serial Advanced Technology Attachment (SATA) Revision 3.0 es de hasta:";
 choices[90]= new Array();
 choices[90][0] = "300 MB/s.";
 choices[90][1] = "900 MB/s.";
 choices[90][2] = "600 MB/s.";
 choices[90][3] = "150 MB/s.";
 answers[90] = choices[90][2];
 units[90] = "48";
 comments[90] = "Id Pregunta: 10310. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10531 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  El ancho de banda m&aacute;ximo alcanzado por la familia de est&aacute;ndares USB es:";
 choices[91]= new Array();
 choices[91][0] = "10 Gbit/s full-duplex por USB 3.0";
 choices[91][1] = "10 Gbit/s half-duplex por USB 3.1";
 choices[91][2] = "10 Gbit/s full-duplex por USB 3.2";
 choices[91][3] = "10 Gbit/s full-duplex por USB 3.1";
 answers[91] = choices[91][3];
 units[91] = "46";
 comments[91] = "Id Pregunta: 10531. NULL";


//  Id pregunta: 10532 AÃ±o de creación de pregunta: 2014-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l de los siguientes grupos de propiedades son caracter&iacute;sticos de Cloud Computing?";
 choices[92]= new Array();
 choices[92][0] = "tenencia m&uacute;ltiple, escalabilidad, elasticidad, independencia de la localizaci&oacute;n";
 choices[92][1] = "A) m&aacute;s reusabilidad";
 choices[92][2] = "B) m&aacute;s interoperabilidad";
 choices[92][3] = "C) m&aacute;s desacoplamiento";
 answers[92] = choices[92][0];
 units[92] = "47";
 comments[92] = "Id Pregunta: 10532. NULL";


//  Id pregunta: 10876 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Entre las configuraciones de almacenamiento en RAID, NO ofrece redundancia de datos:";
 choices[93]= new Array();
 choices[93][0] = "Todas las configuraciones RAID garantizan la redundancia de la informaci&oacute;n.";
 choices[93][1] = "RAID 0.";
 choices[93][2] = "RAID 1.";
 choices[93][3] = "RAID 5.";
 answers[93] = choices[93][1];
 units[93] = "48";
 comments[93] = "Id Pregunta: 10876. Examen GSI 2014";


//  Id pregunta: 11091 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l de los siguientes NO es un modelo de programaci&oacute;n paralela?";
 choices[94]= new Array();
 choices[94][0] = "CUDA";
 choices[94][1] = "OpenCL";
 choices[94][2] = "OpenStack";
 choices[94][3] = "MPI";
 answers[94] = choices[94][2];
 units[94] = "45";
 comments[94] = "Id Pregunta: 11091. ";


//  Id pregunta: 11273 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Indique la respuesta INCORRECTA sobre VxLAN:";
 choices[95]= new Array();
 choices[95][0] = "Son las siglas en ingl&eacute;s de Virtual eXtended Local Area Network.";
 choices[95][1] = "Es un protocolo de encapsulamiento para crear redes de nivel 2 sobre el nivel 3.";
 choices[95][2] = "Al disponer de un identificador de segmento de red de 24 bits, permite una mayor escalabilidad que el est&aacute;ndar 802.1q.";
 choices[95][3] = "Permite direccionar hasta 16 millones de segmentos.";
 answers[95] = choices[95][0];
 units[95] = "47";
 comments[95] = "Id Pregunta: 11273. ";


//  Id pregunta: 11274 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Indique la respuesta INCORRECTA sobre OpenStack";
 choices[96]= new Array();
 choices[96][0] = "Sus servicios se encuentran disponibles por medio de una API compatible con Amazon EC2/S3.";
 choices[96][1] = "Swift es la Infraestructura de almacenamiento.";
 choices[96][2] = "Cantora es la Infraestructura de c&oacute;mputo.";
 choices[96][3] = "Glance son los  servicios de imagen.";
 answers[96] = choices[96][2];
 units[96] = "47";
 comments[96] = "Id Pregunta: 11274. ";


//  Id pregunta: 11344 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  En relaci&oacute;n con la taxonom&iacute;a de Flynn, una de las siguientes asociaciones no es correcta";
 choices[97]= new Array();
 choices[97][0] = "SISD - Monoprocesador";
 choices[97][1] = "MISD - Arquitectura sist&oacute;lica";
 choices[97][2] = "SIMD - Multiproceso";
 choices[97][3] = "SMP - Sistemas multicomputador";
 answers[97] = choices[97][3];
 units[97] = "46";
 comments[97] = "Id Pregunta: 11344. ";


//  Id pregunta: 11524 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  La arquitectura de un sistema de Grid Computing est&aacute; formada por las siguientes capas o niveles.";
 choices[98]= new Array();
 choices[98][0] = "Persistence Layer, Data Layer, Logic Layer (Business Layer), Service Layer y Presentation Layer";
 choices[98][1] = "Fabric Layer, Connectivity Layer, Resource Layer, Collective Layer y Applications Layer.";
 choices[98][2] = "Provider Layer, Communicator Layer, Mediator Layer, Coordinator Layer y Presenter Layer.";
 choices[98][3] = "Transport Layer, Security Layer, Transaction Layer, Session Layer y Application Layer.";
 answers[98] = choices[98][1];
 units[98] = "45";
 comments[98] = "Id Pregunta: 11524. Examen TIC Servicio Extreme&ntilde;o de Salud 2014";


//  Id pregunta: 11677 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  SATA III ofrece una transferencia de datos de:";
 choices[99]= new Array();
 choices[99][0] = "100 MB/s";
 choices[99][1] = "200 MB/s";
 choices[99][2] = "300 MB/s";
 choices[99][3] = "600 MB/s";
 answers[99] = choices[99][3];
 units[99] = "47, 48";
 comments[99] = "Id Pregunta: 11677. ";


