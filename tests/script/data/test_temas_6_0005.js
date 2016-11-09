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

//  Id pregunta: 774 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  Indique cu&aacute;l de las siguientes afirmaciones relativas a los conceptos SMP(Symmetric MultiProcessing) y MPP (Massively Paralleling MultiProcessing) es falsa:";
 choices[0]= new Array();
 choices[0][0] = "En MPP todas las CPU comparten la misma memoria mientras que en SMP no";
 choices[0][1] = "La programaci&oacute;n con MPP es mucho m&aacute;s compleja ya que el programa que se ejecuta debe ser dividido en segmentos que se comuniquen entre s&iacute;";
 choices[0][2] = "MPP no sufre el cuello de botella que sufre SMP en el acceso a memoria";
 choices[0][3] = "Un cluster est&aacute; compuesto por dos o m&aacute;s ordenadores que se comportan coo una sola m&aacute;quina";
 answers[0] = choices[0][0];
 units[0] = "45";
 comments[0] = "Id Pregunta: 774. TAI 2004";


//  Id pregunta: 784 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  &iquest;Cual de estas tecnologias ser&iacute;a v&aacute;lida para la conexi&oacute;n en una red de area personal de los perif&eacute;ricos m&aacute;s habituales?";
 choices[1]= new Array();
 choices[1][0] = "Ethernet";
 choices[1][1] = "Bluetooth";
 choices[1][2] = "Wifi";
 choices[1][3] = "WLAN";
 answers[1] = choices[1][1];
 units[1] = "47";
 comments[1] = "Id Pregunta: 784. SS-A 2004";


//  Id pregunta: 793 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;Qu&eacute; significado tiene el concepto &ldquo;World Wide Grid&rdquo; (WWG)?:";
 choices[2]= new Array();
 choices[2][0] = "Compartici&oacute;n de informaci&oacute;n a trav&eacute;s de internet";
 choices[2][1] = "Compartici&oacute;n de datos e infraestructuras inform&aacute;ticas entre todas las disciplinas cient&iacute;ficas y todos los campos de la industria entre equipos dispersos";
 choices[2][2] = "La extensi&oacute;n de Internet a todos los rincones del mundo";
 choices[2][3] = "Ninguna de las anteriores";
 answers[2] = choices[2][1];
 units[2] = "45";
 comments[2] = "Id Pregunta: 793. ";


//  Id pregunta: 851 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;Cu&aacute;l de las siguientes no es una operaci&oacute;n de la Unidad de Control?:";
 choices[3]= new Array();
 choices[3][0] = "Obtenci&oacute;n de la instrucci&oacute;n de memoria que indica el contador de secuencia e incremento del mismo";
 choices[3][1] = "Decodificaci&oacute;n de la instrucci&oacute;n obtenida e interpretaci&oacute;n de la misma";
 choices[3][2] = "Ejecuci&oacute;n de las operaciones aritm&eacute;ticas y l&oacute;gicas";
 choices[3][3] = "Control y resoluci&oacute;n de las situaciones conflictivas que se produzcan";
 answers[3] = choices[3][2];
 units[3] = "47";
 comments[3] = "Id Pregunta: 851. ";


//  Id pregunta: 860 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;Cu&aacute;l de los siguientes dispositivos no tiene relaci&oacute;n con el almacenamiento de la informaci&oacute;n?:";
 choices[4]= new Array();
 choices[4][0] = "RAID";
 choices[4][1] = "OCR";
 choices[4][2] = "WORM";
 choices[4][3] = "DAT";
 answers[4] = choices[4][1];
 units[4] = "48";
 comments[4] = "Id Pregunta: 860. ";


//  Id pregunta: 887 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;Cu&aacute;l no es caracter&iacute;stica del puerto paralelo?:";
 choices[5]= new Array();
 choices[5][0] = "Transmite y recibe 8 bits a la vez";
 choices[5][1] = "Se define en el Nivel 2 de la ISO ";
 choices[5][2] = "Es un puerto RS-232-C de 25 pines";
 choices[5][3] = "Tambi&eacute;n se le conoce en los PC&acute;s como printer port";
 answers[5] = choices[5][1];
 units[5] = "47";
 comments[5] = "Id Pregunta: 887. ";


//  Id pregunta: 955 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Con 3 discos SCSI de 145 Gbytes en modalidad RAID 5, se obtiene una capacidad total neta de:";
 choices[6]= new Array();
 choices[6][0] = "145 Gbytes";
 choices[6][1] = "435 Gbytes";
 choices[6][2] = "290 Gbytes";
 choices[6][3] = "217.5 Gbytes";
 answers[6] = choices[6][2];
 units[6] = "48";
 comments[6] = "Id Pregunta: 955. ";


//  Id pregunta: 962 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  Considerando las memoria VRAM, indique la respuesta que es falsa:";
 choices[7]= new Array();
 choices[7][0] = "Incluyen una memoria DRAM y unos registros de desplazamiento que permiten acceso en forma serie";
 choices[7][1] = "Est&aacute;n especialmente dise&ntilde;adas para construir memorias de refresco de determinados gr&aacute;ficos";
 choices[7][2] = "Es un tipo de RAM que no es din&aacute;mica";
 choices[7][3] = "Equivale a Video RAM";
 answers[7] = choices[7][2];
 units[7] = "47";
 comments[7] = "Id Pregunta: 962. ";


//  Id pregunta: 984 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Dentro de las arquitecturas que podemos encontrar en el mundo del ordenador personal, en la denominada ISA (Industry Standard Architecture ) su bus de datos trabaja con:";
 choices[8]= new Array();
 choices[8][0] = "32 bits";
 choices[8][1] = "8 bits";
 choices[8][2] = "16 bits";
 choices[8][3] = "64 bits";
 answers[8] = choices[8][2];
 units[8] = "47";
 comments[8] = "Id Pregunta: 984. ";


//  Id pregunta: 997 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  EDSAC y ENIAC son ejemplos de:";
 choices[9]= new Array();
 choices[9][0] = "comit&eacute;s reguladores de auditor&iacute;as inform&aacute;ticas";
 choices[9][1] = "algoritmos criptogr&aacute;ficos de clave sim&eacute;trica";
 choices[9][2] = "est&aacute;ndares de tecnolog&iacute;as de almacenamiento";
 choices[9][3] = "ordenadores de mediados del siglo XX";
 answers[9] = choices[9][3];
 units[9] = "47";
 comments[9] = "Id Pregunta: 997. ";


//  Id pregunta: 1033 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  El middleware es un software que proporciona un conjunto de servicios para conseguir:";
 choices[10]= new Array();
 choices[10][0] = "Independencia respecto al lenguaje de programaci&oacute;n";
 choices[10][1] = "Transparencia de ubicaci&oacute;n de los recursos distribuidos";
 choices[10][2] = "Ubicar los datos a conveniencia del usuario para conseguir en cada caso los mejores rendimientos";
 choices[10][3] = "Reducir la complejidad de los desarrollos";
 answers[10] = choices[10][1];
 units[10] = "50";
 comments[10] = "Id Pregunta: 1033. ";


//  Id pregunta: 1038 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  El modo de ejecuci&oacute;n menos privilegiado de un procesador es conocido como:";
 choices[11]= new Array();
 choices[11][0] = "Modo del sistema";
 choices[11][1] = "Modo de usuario";
 choices[11][2] = "Modo de control";
 choices[11][3] = "Modo del n&uacute;cleo";
 answers[11] = choices[11][1];
 units[11] = "47";
 comments[11] = "Id Pregunta: 1038. ";


//  Id pregunta: 1043 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  El paralelismo expl&iacute;cito MIMD esta constituido por:";
 choices[12]= new Array();
 choices[12][0] = "Un s&oacute;lo flujo de instrucciones y varios de datos";
 choices[12][1] = "Varios flujos de Instrucciones y uno de datos";
 choices[12][2] = "Varios flujos de instrucciones y varios de datos";
 choices[12][3] = "Ninguna de las anteriores respuestas es cierta";
 answers[12] = choices[12][2];
 units[12] = "45";
 comments[12] = "Id Pregunta: 1043. ";


//  Id pregunta: 1079 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  En el entorno cliente/servidor, TUXEDO es muy conocido como:";
 choices[13]= new Array();
 choices[13][0] = "Un monitor de proceso de transacciones";
 choices[13][1] = "Programa de sesi&oacute;n de IBM en los sistemas MVS";
 choices[13][2] = "Aplicaci&oacute;n para tranferencia de ficheros en sistemas Unix";
 choices[13][3] = "No existe la aplicaci&oacute;n TUXEDO";
 answers[13] = choices[13][0];
 units[13] = "50";
 comments[13] = "Id Pregunta: 1079. ";


//  Id pregunta: 1095 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  En el subsistema de almacenamiento de un ordenador, se define punto de memoria como:";
 choices[14]= new Array();
 choices[14][0] = "El elemento que almacena un bit";
 choices[14][1] = "El elemento que almacena una palabra";
 choices[14][2] = "El elemento que almacena un byte";
 choices[14][3] = "El elemento que almacena una unidad de datos l&oacute;gicos";
 answers[14] = choices[14][0];
 units[14] = "47";
 comments[14] = "Id Pregunta: 1095. ";


//  Id pregunta: 1123 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  En los ordenadores, por lo general, los programas que realizan tareas de arranque de la m&aacute;quina y de diagn&oacute;sticos se almacenan en:";
 choices[15]= new Array();
 choices[15][0] = "RAM";
 choices[15][1] = "ROM";
 choices[15][2] = "memoria interna del procesador";
 choices[15][3] = "disco duro asociado a la UAL y la UC";
 answers[15] = choices[15][1];
 units[15] = "47";
 comments[15] = "Id Pregunta: 1123. ";


//  Id pregunta: 1126 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  En relaci&oacute;n a las diferentes tecnolog&iacute;as de buses:";
 choices[16]= new Array();
 choices[16][0] = "ISA es posterior a MCA";
 choices[16][1] = "AGP es posterior a PCI";
 choices[16][2] = "XT es posterior a ISA";
 choices[16][3] = "EISA es anterior a MCA";
 answers[16] = choices[16][1];
 units[16] = "47";
 comments[16] = "Id Pregunta: 1126. ";


//  Id pregunta: 1135 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  En un disco duro Winchester:";
 choices[17]= new Array();
 choices[17][0] = "Las cabezas tocan el disco en todo momento";
 choices[17][1] = "Las cabezas nunca tocan el disco";
 choices[17][2] = "Las cabezas tocan el disco para grabar";
 choices[17][3] = "Las cabezas solo tocan el disco para formatearlo a bajo nivel";
 answers[17] = choices[17][1];
 units[17] = "48";
 comments[17] = "Id Pregunta: 1135. ";


//  Id pregunta: 1209 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  La capacidad efectiva de informaci&oacute;n &uacute;til de un disco es:";
 choices[18]= new Array();
 choices[18][0] = "El tama&ntilde;o en pulgadas del disco";
 choices[18][1] = "El n&uacute;mero de bits que pueden almacenarse en el disco sin formatar";
 choices[18][2] = "El n&uacute;mero de bit que pueden almacenarse en el disco formatado";
 choices[18][3] = "El n&uacute;mero de bit que pueden almacenarse en una pista";
 answers[18] = choices[18][2];
 units[18] = "48";
 comments[18] = "Id Pregunta: 1209. ";


//  Id pregunta: 1213 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  La compresi&oacute;n o compactaci&oacute;n de datos en los dispositivos de almacenamiento magn&eacute;tico, es una t&eacute;cnica efectiva para:";
 choices[19]= new Array();
 choices[19][0] = "Reducir la ocupaci&oacute;n de los registros en dispositivos DASD";
 choices[19][1] = "Reducir el n&uacute;mero de I-O's, mejorando la eficiencia del procesador";
 choices[19][2] = "Mejorar la eficiencia del buffer de datos";
 choices[19][3] = "Todas las anteriores respuestas son correctas";
 answers[19] = choices[19][3];
 units[19] = "48";
 comments[19] = "Id Pregunta: 1213. ";


//  Id pregunta: 1226 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  La ley emp&iacute;rica de Grosh establece:";
 choices[20]= new Array();
 choices[20][0] = "La potencia de c&aacute;lculo de los ordenadores es proporcional al cuadrado del tiempo que transcurre";
 choices[20][1] = "La potencia de c&aacute;lculo de lo ordenadores va en proporci&oacute;n directa con su coste";
 choices[20][2] = "El coste de un ordenador es proporcional a la raiz cuadrada de su potencia de c&aacute;lculo";
 choices[20][3] = "El coste de un ordenador es inversamente proporcional a la disminuci&oacute;n de su potencia";
 answers[20] = choices[20][2];
 units[20] = "45";
 comments[20] = "Id Pregunta: 1226. ";


//  Id pregunta: 1229 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  La memoria EPROM:";
 choices[21]= new Array();
 choices[21][0] = "Es vol&aacute;til y se puede leer y escribir en ella";
 choices[21][1] = "Es una memoria principal permanente pero que s&oacute;lo se puede leer";
 choices[21][2] = "Es borrable de acuerdo con unos procedimientos especiales";
 choices[21][3] = "S&oacute;lo permite acceso secuencial";
 answers[21] = choices[21][2];
 units[21] = "47";
 comments[21] = "Id Pregunta: 1229. ";


//  Id pregunta: 1259 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Las operaciones que permiten pasar la informaci&oacute;n indicada por un operando al destino indicado por otro se llaman:";
 choices[22]= new Array();
 choices[22][0] = "De bifurcaci&oacute;n condicional";
 choices[22][1] = "Aritm&eacute;ticas";
 choices[22][2] = "De transferencia";
 choices[22][3] = "De desplazamiento";
 answers[22] = choices[22][2];
 units[22] = "47";
 comments[22] = "Id Pregunta: 1259. ";


//  Id pregunta: 1335 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Se puede entender por 'driver':";
 choices[23]= new Array();
 choices[23][0] = "Un tipo especial de programa supervisor";
 choices[23][1] = "Un programa encargado de permitir el manejo de un determinado perif&eacute;rico por parte de una unidad central";
 choices[23][2] = "Un lector/grabador de discos &oacute;pticos";
 choices[23][3] = "Un lector/grabador de discos CD-ROM";
 answers[23] = choices[23][1];
 units[23] = "47";
 comments[23] = "Id Pregunta: 1335. ";


//  Id pregunta: 1338 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Seg&uacute;n la taxonom&iacute;a de Flynn de arquitecturas con proceso en paralelo, una m&aacute;quina MISD:";
 choices[24]= new Array();
 choices[24][0] = "Es la que se corresponde con la arquitectura de Von Neumann";
 choices[24][1] = "Es la estructura de un sistema con multiprocesador";
 choices[24][2] = "Es una superestructura pipe-line formada por varios procesadores, en la que cada uno hace parte del proceso sobre el flujo de datos que circula entre ellos";
 choices[24][3] = "No se corresponde con nada de lo anterior";
 answers[24] = choices[24][2];
 units[24] = "45";
 comments[24] = "Id Pregunta: 1338. ";


//  Id pregunta: 1342 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Se&ntilde;ale el enunciado falso:";
 choices[25]= new Array();
 choices[25][0] = "Los ordenadores de primera generaci&oacute;n eran dif&iacute;ciles de programar porque no exist&iacute;an los lenguajes simb&oacute;licos";
 choices[25][1] = "Los ordenadores de segunda generaci&oacute;n quedaron limitados al campo cient&iacute;fico y de la defensa";
 choices[25][2] = "Como consecuencia de la aparici&oacute;n de los transistores disminuyeron las necesidades de refrigeraci&oacute;n";
 choices[25][3] = "El ordenador ENIAC estaba basado en tecnolog&iacute;as de v&aacute;lvulas de vac&iacute;o";
 answers[25] = choices[25][1];
 units[25] = "50";
 comments[25] = "Id Pregunta: 1342. ";


//  Id pregunta: 1353 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  Se&ntilde;ale la respuesta falsa. Frente a RAID 1, RAID 5:";
 choices[26]= new Array();
 choices[26][0] = "Es m&aacute;s r&aacute;pido en escritura";
 choices[26][1] = "Utiliza m&aacute;s discos";
 choices[26][2] = "Ofrece menos espacio utilizable en relaci&oacute;n con el tama&ntilde;o total de los discos";
 choices[26][3] = "Todas las respuestas anteriores son falsas";
 answers[26] = choices[26][1];
 units[26] = "48";
 comments[26] = "Id Pregunta: 1353. ";


//  Id pregunta: 1355 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  Se&ntilde;ale la respuesta falsa. Una unidad de control cableada:";
 choices[27]= new Array();
 choices[27][0] = "Es m&aacute;s r&aacute;pida de lo normal";
 choices[27][1] = "Es muy cara de dise&ntilde;ar";
 choices[27][2] = "Es reprogramable f&aacute;cilmente";
 choices[27][3] = "Ninguna de las anteriores respuestas es falsa";
 answers[27] = choices[27][2];
 units[27] = "47";
 comments[27] = "Id Pregunta: 1355. ";


//  Id pregunta: 1385 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  Un microprocesador, cuya frecuencia de reloj es de 300 Mhz y ejecuta 4 instrucciones/ciclo, puede ejecutar:";
 choices[28]= new Array();
 choices[28][0] = "1,2 Mips";
 choices[28][1] = "300 Mips";
 choices[28][2] = "300.000 instrucciones/segundo";
 choices[28][3] = "1200 Mips";
 answers[28] = choices[28][3];
 units[28] = "47";
 comments[28] = "Id Pregunta: 1385. ";


//  Id pregunta: 1415 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  Una de las siguientes caracter&iacute;sticas no es com&uacute;n a los discos WORM y WMRA:";
 choices[29]= new Array();
 choices[29][0] = "Poseen una gran capacidad de almacenamiento";
 choices[29][1] = "Son de f&aacute;cil manipulaci&oacute;n y transportabilidad";
 choices[29][2] = "Permiten escribir y borrar datos al igual que un disco magn&eacute;tico";
 choices[29][3] = "Son insensibles frente a las radiaciones electromagn&eacute;ticas";
 answers[29] = choices[29][2];
 units[29] = "48";
 comments[29] = "Id Pregunta: 1415. ";


//  Id pregunta: 1451 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  &iquest;Cu&aacute;l de las siguientes respuestas no est&aacute; relacionada con los interfaces de usuario?:";
 choices[30]= new Array();
 choices[30][0] = "Free Windows";
 choices[30][1] = "WYSIWYG";
 choices[30][2] = "X Windows";
 choices[30][3] = "Motif";
 answers[30] = choices[30][0];
 units[30] = "47";
 comments[30] = "Id Pregunta: 1451. ";


//  Id pregunta: 1536 AÃ±o de creación de pregunta: 2003-01-01
 questions[31]= "32)  &iquest; Cu&aacute;l es el t&eacute;rmino con el que se denomina la personalizaci&oacute;n en apariencia y prestaciones de un ordenador ?";
 choices[31]= new Array();
 choices[31][0] = "Mobbing";
 choices[31][1] = "e-learning";
 choices[31][2] = "Modding";
 choices[31][3] = "customizing";
 answers[31] = choices[31][2];
 units[31] = "48";
 comments[31] = "Id Pregunta: 1536. NULL";


//  Id pregunta: 1570 AÃ±o de creación de pregunta: 2013-01-01
 questions[32]= "33)  &iquest;Cu&aacute;ntos dispositivos se pueden conectar simult&aacute;neamente a un puerto USB versi&oacute;n 3?:";
 choices[32]= new Array();
 choices[32][0] = "63.";
 choices[32][1] = "127.";
 choices[32][2] = "256.";
 choices[32][3] = " 1024.";
 answers[32] = choices[32][1];
 units[32] = "47";
 comments[32] = "Id Pregunta: 1570. Similar Junta Andaluc&iacute;a";


//  Id pregunta: 1617 AÃ±o de creación de pregunta: 2003-01-01
 questions[33]= "34)  Los thin clients son:";
 choices[33]= new Array();
 choices[33][0] = "Ordenadores sin disco duro que acceden a las aplicaciones a trav&eacute;s de un servidor.";
 choices[33][1] = "CD arrancable con una colecci&oacute;n de programas GNU/ LINUX.";
 choices[33][2] = "Una plataforma e-learning desarrollada por la universidad de Lovaina.";
 choices[33][3] = "Colecci&oacute;n de utilidades que permiten llevar a cabo un proceso de votaci&oacute;n electr&oacute;nica.";
 answers[33] = choices[33][0];
 units[33] = "50";
 comments[33] = "Id Pregunta: 1617. Junta Andaluc&iacute;a";


//  Id pregunta: 1635 AÃ±o de creación de pregunta: 2003-01-01
 questions[34]= "35)  Indique la afirmaci&oacute;n correcta:";
 choices[34]= new Array();
 choices[34][0] = "Los dispositivos DVD usan un l&aacute;ser de longitud de onda m&aacute;s corta que el empleado en los CD-ROM. El l&aacute;ser usado en el DVD es de luz roja";
 choices[34][1] = "Los dispositivos DVD usan un l&aacute;ser de longitud de onda m&aacute;s larga que el empleado en los CD-ROM. El l&aacute;ser usado en el DVD es de luz roja";
 choices[34][2] = "Los dispositivos DVD usan un l&aacute;ser de longitud de onda m&aacute;s corta que el empleado en los CD-ROM. El l&aacute;ser usado en el DVD es de luz infrarroja";
 choices[34][3] = "Los dispositivos DVD usan un l&aacute;ser de longitud de onda m&aacute;s larga que el empleado en los CD-ROM. El l&aacute;ser usado en el DVD es de luz infrarroja";
 answers[34] = choices[34][0];
 units[34] = "48";
 comments[34] = "Id Pregunta: 1635. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 1664 AÃ±o de creación de pregunta: 2004-01-01
 questions[35]= "36)  &iquest;C&oacute;mo se conoce la taxonom&iacute;a, que clasifica las arquitecturas de ordenadores en SISD, SIMD, MISD, MIMD?";
 choices[35]= new Array();
 choices[35][0] = "Kuck";
 choices[35][1] = "Treleaven";
 choices[35][2] = "Flynn";
 choices[35][3] = "Gajski y Pier";
 answers[35] = choices[35][2];
 units[35] = "45";
 comments[35] = "Id Pregunta: 1664. ";


//  Id pregunta: 1698 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  En relaci&oacute;n a las tarjetas gr&aacute;ficas:";
 choices[36]= new Array();
 choices[36][0] = "La mayor parte ya son para bus PCI-E (PCI Express)";
 choices[36][1] = "Se pueden conectar al bus AGP, entre otros";
 choices[36][2] = "La resoluci&oacute;n m&aacute;s habitual es de 640 x 480";
 choices[36][3] = "Las respuestas a) y b) son correctas";
 answers[36] = choices[36][3];
 units[36] = "46";
 comments[36] = "Id Pregunta: 1698. ";


//  Id pregunta: 1706 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  Se dispone &uacute;nicamente de dos discos, con los que se pretende implementar una matriz redundante (RAID) con tolerancia a fallos y con el mejor rendimiento posible tanto en lectura como en escritura, &iquest;qu&eacute; tipo escoger&iacute;a?";
 choices[37]= new Array();
 choices[37][0] = "RAID-0";
 choices[37][1] = "RAID-1";
 choices[37][2] = "RAID-3";
 choices[37][3] = "RAID-0 &oacute; RAID-1";
 answers[37] = choices[37][1];
 units[37] = "48";
 comments[37] = "Id Pregunta: 1706. ";


//  Id pregunta: 1707 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  Se&ntilde;ale la opci&oacute;n correcta respecto a RAID, Redundant Array of Independent (or Inexpensive) Disks:";
 choices[38]= new Array();
 choices[38][0] = "RAID se puede implementar por software o hardware";
 choices[38][1] = "RAID se puede implementar s&oacute;lo por software";
 choices[38][2] = "RAID se puede implementar s&oacute;lo por hardware";
 choices[38][3] = "RAID no se puede implementar por software y hardware a la vez";
 answers[38] = choices[38][0];
 units[38] = "48";
 comments[38] = "Id Pregunta: 1707. ";


//  Id pregunta: 1712 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  Ordene de menor a mayor seg&uacute;n el n&uacute;mero de usuarios y carga de trabajo esperado:";
 choices[39]= new Array();
 choices[39][0] = "PDA, PC, estaci&oacute;n de trabajo, miniordenador, mainframe";
 choices[39][1] = "PDA, miniordenador, PC, estaci&oacute;n de trabajo, mainframe";
 choices[39][2] = "PDA, PC, miniordenador, estaci&oacute;n de trabajo, mainframe";
 choices[39][3] = "miniordenador, PDA, PC, estaci&oacute;n de trabajo, mainframe";
 answers[39] = choices[39][0];
 units[39] = "49";
 comments[39] = "Id Pregunta: 1712. ";


//  Id pregunta: 1908 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  Se&ntilde;ale la afirmaci&oacute;n correcta respecto de la Taxonom&iacute;a de Flynn:";
 choices[40]= new Array();
 choices[40][0] = "Se trata de una clasificaci&oacute;n de arquitecturas de computadores en funci&oacute;n del tipo de acceso a memoria.";
 choices[40][1] = "Se trata de una clasificaci&oacute;n de arquitecturas de computadores en funci&oacute;n de la tipolog&iacute;a de flujos de datos e instrucciones.";
 choices[40][2] = "Se trata de una clasificaci&oacute;n de arquitecturas de computadores en funci&oacute;n de la capacidad de procesamiento.";
 choices[40][3] = "Se trata de una clasificaci&oacute;n de arquitecturas de computadores en funci&oacute;n del acoplamiento entre los distintos procesadores.";
 answers[40] = choices[40][1];
 units[40] = "45";
 comments[40] = "Id Pregunta: 1908. ";


//  Id pregunta: 3344 AÃ±o de creación de pregunta: 2002-01-01
 questions[41]= "42)  Control de temperatura, ahorro de gasto de energ&iacute;a seg&uacute;n la hora del d&iacute;a, gesti&oacute;n de alarmas a distancia&hellip;, son disciplinas englobadas en la:";
 choices[41]= new Array();
 choices[41][0] = "Teleinform&aacute;tica.";
 choices[41][1] = "Automatizaci&oacute;n de procesos y rob&oacute;tica.";
 choices[41][2] = "Dom&oacute;tica.";
 choices[41][3] = "Telem&aacute;tica industrial.";
 answers[41] = choices[41][2];
 units[41] = "47";
 comments[41] = "Id Pregunta: 3344. *: domotica";


//  Id pregunta: 3464 AÃ±o de creación de pregunta: 2002-01-01
 questions[42]= "43)  El protocolo X.10 es conocido en:";
 choices[42]= new Array();
 choices[42][0] = "Aplicaciones de telefon&iacute;a m&oacute;vil.";
 choices[42][1] = "Aplicaciones de radares.";
 choices[42][2] = "Aplicaciones dom&oacute;ticas.";
 choices[42][3] = "Ninguna de las anteriores respuestas es correcta.";
 answers[42] = choices[42][2];
 units[42] = "47, 100";
 comments[42] = "Id Pregunta: 3464. *: domotica";


//  Id pregunta: 4314 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre granjas de servidores (web farms) no es correcta?";
 choices[43]= new Array();
 choices[43][0] = "Una granja es un tipo de sistema de procesamiento distribuido, que consiste en un grupo de servidores interconectados trabajando de forma conjunta como un &uacute;nico recurso de computaci&oacute;n integrado.";
 choices[43][1] = "En una granja de servidores, los servidores pueden tener sistemas operativos individuales o compartidos, y tambi&eacute;n debe ser instalados para proporcionar el balanceo de la carga cuando hay muchas peticiones al servidor";
 choices[43][2] = "La decisi&oacute;n para distribuir la carga a un servidor en particular debe ser una opci&oacute;n preprogramada est&aacute;ticamente, pues es imposible la reconfiguraci&oacute;n din&aacute;mica.";
 choices[43][3] = "La red es la parte m&aacute;s cr&iacute;tica de una granja. Su capacidad y funcionamiento influyen en el rendimiento del sistema completo";
 answers[43] = choices[43][2];
 units[43] = "49";
 comments[43] = "Id Pregunta: 4314. ";


//  Id pregunta: 4367 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de la tecnolog&iacute;a de procesadores NUMA (No Uniform Memory Access)?";
 choices[44]= new Array();
 choices[44][0] = "Acceso a m&uacute;ltiples memorias de forma equivalente.";
 choices[44][1] = "Facilidad de programaci&oacute;n.";
 choices[44][2] = "Escalabilidad.";
 choices[44][3] = "Procesamiento paralelo.";
 answers[44] = choices[44][0];
 units[44] = "45";
 comments[44] = "Id Pregunta: 4367. ";


//  Id pregunta: 4567 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  &iquest;Cual de las siguientes afirmaciones es correcta sobre el recurso Quorum de un cluster?";
 choices[45]= new Array();
 choices[45][0] = "contiene datos del firmware del hardware del fabricante de los servidores que forman el cluster.";
 choices[45][1] = "contiene los &Uacute;ltimos datos accedidos par el usuario.";
 choices[45][2] = "ofrece una configuraci&oacute;n consistente del cluster.";
 choices[45][3] = "no existe el recurso Quorum en un cluster.";
 answers[45] = choices[45][2];
 units[45] = "45";
 comments[45] = "Id Pregunta: 4567. ";


//  Id pregunta: 5059 AÃ±o de creación de pregunta: 2003-01-01
 questions[46]= "47)  &iquest;Cu&aacute;l es el m&iacute;nimo n&uacute;mero de discos necesario para un sistema RAID 0+1?:";
 choices[46]= new Array();
 choices[46][0] = "2";
 choices[46][1] = "3";
 choices[46][2] = "4";
 choices[46][3] = "5";
 answers[46] = choices[46][2];
 units[46] = "48";
 comments[46] = "Id Pregunta: 5059. Examen TIC A 2007";


//  Id pregunta: 5628 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  Se&ntilde;ale la diferencia entre SMP y clustering";
 choices[47]= new Array();
 choices[47][0] = "SMP utiliza memoria compartida y el clustering paso de mensaje";
 choices[47][1] = "SMP utiliza paralelismo puro y el clustering memoria compartida ";
 choices[47][2] = "SMP utiliza memoria compartida y el clustering paralelismo puro ";
 choices[47][3] = "SMP utiliza memoria compartida y el clustering paralelismo de datos";
 answers[47] = choices[47][0];
 units[47] = "45";
 comments[47] = "Id Pregunta: 5628. ";


//  Id pregunta: 5634 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  Se&ntilde;ale cu&aacute;l de las siguientes opciones es correcta:";
 choices[48]= new Array();
 choices[48][0] = "El bus ISA es posterior al bus PCI";
 choices[48][1] = "El bus EISA es anterior al bus ISA";
 choices[48][2] = "El bus PCI es anterior al bus AGP";
 choices[48][3] = "El bus USB es posterior al bus AGP";
 answers[48] = choices[48][2];
 units[48] = "47";
 comments[48] = "Id Pregunta: 5634. ";


//  Id pregunta: 5637 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es falsa en una soluci&oacute;n RAID.";
 choices[49]= new Array();
 choices[49][0] = "En RAID 0 un fallo en un disco provoca la p&eacute;rdida de todos los datos";
 choices[49][1] = "RAID 4 es como RAID 0 m&aacute;s un disco de paridad dedicado";
 choices[49][2] = "El RAID 1 no mejora el rendimiento en escritura respecto a RAID 0 ";
 choices[49][3] = "RAID 5 es uno de los niveles RAID m&aacute;s comunes, y hace uso de un disco de paridad dedicado";
 answers[49] = choices[49][3];
 units[49] = "48";
 comments[49] = "Id Pregunta: 5637. ";


//  Id pregunta: 5878 AÃ±o de creación de pregunta: 2009-01-01
 questions[50]= "51)  Indique cu&aacute;l de las siguientes afirmaciones es una caracter&iacute;stica de la tecnolog&iacute;a de Grid Computing:";
 choices[50]= new Array();
 choices[50][0] = "Los nodos tienen que estar dedicados";
 choices[50][1] = "Todos los sistemas deben ser homog&eacute;neos";
 choices[50][2] = "La escalabilidad es parametrizable";
 choices[50][3] = "Los recursos no se localizan din&aacute;micamente";
 answers[50] = choices[50][2];
 units[50] = "45";
 comments[50] = "Id Pregunta: 5878. MAP 2008 A1";


//  Id pregunta: 6095 AÃ±o de creación de pregunta: 2010-01-01
 questions[51]= "52)  &iquest;Cu&aacute;l de las siguientes corresponde a una de las categor&iacute;as de ordenadores contempladas en la taxonom&iacute;a de Flynn?";
 choices[51]= new Array();
 choices[51][0] = "SIDI.";
 choices[51][1] = "SDSP.";
 choices[51][2] = "SIMD.";
 choices[51][3] = "MIMP.";
 answers[51] = choices[51][2];
 units[51] = "45";
 comments[51] = "Id Pregunta: 6095. TIC A 2009";


//  Id pregunta: 6103 AÃ±o de creación de pregunta: 2010-01-01
 questions[52]= "53)  Indique cual de las siguientes es una caracter&iacute;stica de un servidor &quot;blade&quot;.";
 choices[52]= new Array();
 choices[52][0] = "No contienen fuente de alimentaci&oacute;n propia.";
 choices[52][1] = "Tiene prestaciones m&aacute;s bajas que un servidor tradicional.";
 choices[52][2] = "Solo se puede utilizar en entornos virtualizados.";
 choices[52][3] = "No tiene memoria propia.";
 answers[52] = choices[52][0];
 units[52] = "49";
 comments[52] = "Id Pregunta: 6103. TIC A 2009";


//  Id pregunta: 6446 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)  Los usuarios de dispositivos m&oacute;viles con Windows Mobile 6, pueden sincronizarse con Exchange Server mediante el uso, en el dispositivo m&oacute;vil, de:";
 choices[53]= new Array();
 choices[53][0] = "PalmSync";
 choices[53][1] = "StrongARM";
 choices[53][2] = "MobileSync";
 choices[53][3] = "ActiveSync";
 answers[53] = choices[53][3];
 units[53] = "47";
 comments[53] = "Id Pregunta: 6446. Castilla La Mancha 2009";


//  Id pregunta: 7156 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l de las siguientes afirmaciones es INCORRECTA?";
 choices[54]= new Array();
 choices[54][0] = "Los protocolos de comunicaciones NAS est&aacute;n basados en ficheros";
 choices[54][1] = "Los dispositivos NAS tienen mayor rendimiento y fiabilidad que los DAS";
 choices[54][2] = "En una red SAN el modo de acceso es a m&aacute;s bajo nivel que en NAS y DAS";
 choices[54][3] = "La mayor&iacute;a de las SAN usan el protocolo SCSI para la comunicaci&oacute;n entre servidores";
 answers[54] = choices[54][1];
 units[54] = "48";
 comments[54] = "Id Pregunta: 7156. Examen TIC B 2009";


//  Id pregunta: 8191 AÃ±o de creación de pregunta: 2011-01-01
 questions[55]= "56)  Indique cu&aacute;l de los siguientes sistemas NO permite direccionar ficheros de un Terabyte:";
 choices[55]= new Array();
 choices[55][0] = "AdvFS";
 choices[55][1] = "MFS";
 choices[55][2] = "JFS2 ";
 choices[55][3] = "XFS";
 answers[55] = choices[55][1];
 units[55] = "48, 52";
 comments[55] = "Id Pregunta: 8191. Examen TIC A1 2010";


//  Id pregunta: 8210 AÃ±o de creación de pregunta: 2011-01-01
 questions[56]= "57)  Se&ntilde;ale la afirmaci&oacute;n correcta sobre las redes SAN iSCSI:";
 choices[56]= new Array();
 choices[56][0] = "Intercambian tramas SCSI sobre FC.";
 choices[56][1] = "Es una red de almacenamiento de acceso a ficheros.";
 choices[56][2] = "No permite implementar iSCSI en software.";
 choices[56][3] = "Puede usar TCP/IP como transporte.";
 answers[56] = choices[56][3];
 units[56] = "48";
 comments[56] = "Id Pregunta: 8210. Examen TIC A1 2010";


//  Id pregunta: 8218 AÃ±o de creación de pregunta: 2011-01-01
 questions[57]= "58)  La distancia de Hamming entre las palabras 01000 y 01010 es:";
 choices[57]= new Array();
 choices[57][0] = "1";
 choices[57][1] = "2";
 choices[57][2] = "3";
 choices[57][3] = "4";
 answers[57] = choices[57][0];
 units[57] = "45";
 comments[57] = "Id Pregunta: 8218. Examen TIC A1 2010";


//  Id pregunta: 8377 AÃ±o de creación de pregunta: 2011-01-01
 questions[58]= "59)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre iSCSI es FALSA?:";
 choices[58]= new Array();
 choices[58][0] = "Es un est&aacute;ndar de la IETF.";
 choices[58][1] = "Utiliza por defecto los puertos TCP 860 y TCP 3260.";
 choices[58][2] = "Necesita una arquitectura de cableado independiente.";
 choices[58][3] = "Usa CHAP como principal m&eacute;todo de autenticaci&oacute;n.";
 answers[58] = choices[58][2];
 units[58] = "48";
 comments[58] = "Id Pregunta: 8377. Examen TIC A2 2010";


//  Id pregunta: 8753 AÃ±o de creación de pregunta: 2011-01-01
 questions[59]= "60)  Los actuales dise&ntilde;os l&oacute;gicos de los chipset para la arquitectura x86 se estructuran en dos bloques funcionales: el Northbridge y el Southbridge. Indique cu&aacute;l de los siguientes subsistemas son competencia del Northbridge.";
 choices[59]= new Array();
 choices[59][0] = "Acceso a la RAM y controlador AGP.";
 choices[59][1] = "Controladores IDE y SATA";
 choices[59][2] = "Controladores USB y FIREWIRE";
 choices[59][3] = "Super I/O (Puerto serie, paralelo), audio y LAN";
 answers[59] = choices[59][0];
 units[59] = "47";
 comments[59] = "Id Pregunta: 8753. Examen TIC A2 2010 interna";


//  Id pregunta: 8755 AÃ±o de creación de pregunta: 2011-01-01
 questions[60]= "61)  En relaci&oacute;n con la tecnolog&iacute;a &quot;grid computing&quot;, se&ntilde;ale la respuesta FALSA:";
 choices[60]= new Array();
 choices[60][0] = "Los nodos no tienen que estar dedicados.";
 choices[60][1] = "Son sistemas homog&eacute;neos (todos los nodos deben ser id&eacute;nticos).";
 choices[60][2] = "Se consigue reducci&oacute;n de costes, no es necesaria disponer de grandes y costosos servidores.";
 choices[60][3] = "La escalabilidad parametrizable es una caracter&iacute;stica muy Importante de esta arquitectura";
 answers[60] = choices[60][1];
 units[60] = "45";
 comments[60] = "Id Pregunta: 8755. Examen TIC A2 2010 interna";


//  Id pregunta: 8884 AÃ±o de creación de pregunta: 2011-01-01
 questions[61]= "62)  &iquest;Cu&aacute;l de los siguientes no es un &iacute;ndice para medir la potencia de un microprocesador?";
 choices[61]= new Array();
 choices[61][0] = "SPEC";
 choices[61][1] = "SPEint";
 choices[61][2] = "SPECfp";
 choices[61][3] = "SPEC#";
 answers[61] = choices[61][3];
 units[61] = "47";
 comments[61] = "Id Pregunta: 8884. ";


//  Id pregunta: 8928 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  La especificaci&oacute;n para crear un CDROM autoarrancable se denomina:";
 choices[62]= new Array();
 choices[62][0] = "UDF.";
 choices[62][1] = "Joliet.";
 choices[62][2] = "El Torito.";
 choices[62][3] = "Autorun";
 answers[62] = choices[62][2];
 units[62] = "48";
 comments[62] = "Id Pregunta: 8928. Operador Ayto. Madrid 2010";


//  Id pregunta: 8998 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  En un sistema de segmentaci&oacute;n, los segmentos que necesitan los programas pueden no estar residentes en la memoria principal. Esta situaci&oacute;n se indica haciendo uso del:";
 choices[63]= new Array();
 choices[63][0] = "Bit de segmentaci&oacute;n.";
 choices[63][1] = "Bit de ausencia.";
 choices[63][2] = "Bit de presencia.";
 choices[63][3] = "Bit de petici&oacute;n.";
 answers[63] = choices[63][2];
 units[63] = "45";
 comments[63] = "Id Pregunta: 8998. Examen UPM A2 2011";


//  Id pregunta: 9041 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  Sistema de Grid Computing";
 choices[64]= new Array();
 choices[64][0] = "Globus Toolkit";
 choices[64][1] = "Nimbus";
 choices[64][2] = "Eucaliptus";
 choices[64][3] = "Gluster";
 answers[64] = choices[64][0];
 units[64] = "45";
 comments[64] = "Id Pregunta: 9041. ";


//  Id pregunta: 9112 AÃ±o de creación de pregunta: 2013-01-01
 questions[65]= "66)  &iquest;Cu&aacute;l no es caracter&iacute;stica de los sistemas de mainframe o sistemas multiprocesor?";
 choices[65]= new Array();
 choices[65][0] = "La forma de trabajo predominante en este tipo de sistemas es el BATCH o procesamiento sin interacci&oacute;n";
 choices[65][1] = "El m&eacute;todo utilizado para dotar a estos sistemas de altas prestaciones";
 choices[65][2] = "Se trata de soluciones altamente propietarias, concebidas para entornos cerrados, no heterog&eacute;neos.";
 choices[65][3] = "Existen muy pocos fabricantes en el mercado que desarrollen este tipo de sistemas";
 answers[65] = choices[65][1];
 units[65] = "45";
 comments[65] = "Id Pregunta: 9112. ";


//  Id pregunta: 9115 AÃ±o de creación de pregunta: 2013-01-01
 questions[66]= "67)  &iquest;Qu&eacute; no presentan las soluciones SISD (Single Instruction stream, Single Data stream)";
 choices[66]= new Array();
 choices[66][0] = "Concurrencia y paralelizaci&oacute;n.";
 choices[66][1] = "S&oacute;lo concurrencia.";
 choices[66][2] = "&Uacute;nicamente paralelizaci&oacute;n.";
 choices[66][3] = "No existe SISD";
 answers[66] = choices[66][0];
 units[66] = "45";
 comments[66] = "Id Pregunta: 9115. ";


//  Id pregunta: 9116 AÃ±o de creación de pregunta: 2013-01-01
 questions[67]= "68)  &iquest;Qu&eacute; es la segmentaci&oacute;n?";
 choices[67]= new Array();
 choices[67][0] = "T&eacute;cnica de solapamiento de instrucciones mediante la divisi&oacute;n de su ejecuci&oacute;n en etapas o segmentos.";
 choices[67][1] = "Los segmentos est&aacute;n conectados entre s&iacute; y cada uno al siguiente.";
 choices[67][2] = "Todos los segmentos proceden y progresan a la vez";
 choices[67][3] = "Todas las respuestas son correctas";
 answers[67] = choices[67][3];
 units[67] = "45";
 comments[67] = "Id Pregunta: 9116. ";


//  Id pregunta: 9117 AÃ±o de creación de pregunta: 2013-01-01
 questions[68]= "69)  &iquest;C&oacute;mo es el procesamiento en un sistema SIMD?";
 choices[68]= new Array();
 choices[68][0] = "As&iacute;ncrono";
 choices[68][1] = "Secuencial";
 choices[68][2] = "S&iacute;ncrono";
 choices[68][3] = "Ninguna respuesta es correcta";
 answers[68] = choices[68][2];
 units[68] = "45";
 comments[68] = "Id Pregunta: 9117. ";


//  Id pregunta: 9124 AÃ±o de creación de pregunta: 2013-01-01
 questions[69]= "70)  &iquest;Cu&aacute;les son aplicaciones generales para la computaci&oacute;n GRID?";
 choices[69]= new Array();
 choices[69][0] = "S&uacute;per computaci&oacute;n distribuida.";
 choices[69][1] = "Sistemas distribuidos en tiempo real";
 choices[69][2] = "Entornos virtuales de colaboraci&oacute;n (Tele-inmersi&oacute;n)";
 choices[69][3] = "Todas las respuetas anteriores son v&aacute;lidas";
 answers[69] = choices[69][3];
 units[69] = "45";
 comments[69] = "Id Pregunta: 9124. ";


//  Id pregunta: 9126 AÃ±o de creación de pregunta: 2013-01-01
 questions[70]= "71)  Indique la frase ERR&Oacute;NEA acerca de las t&eacute;cnicas de configuraci&oacute;n de servidores";
 choices[70]= new Array();
 choices[70][0] = "Existen tres tipos de cluster: de alta disponibilidad, de alto rendimiento y de balanceo de carga";
 choices[70][1] = "La principal limitaci&oacute;n t&eacute;cnica para un centro de respaldo en configuraci&oacute;n activo activo es el tiempo de latencia";
 choices[70][2] = "El balanceo de carga solo puede implementarse por software";
 choices[70][3] = "La virtualizaci&oacute;n permite optimizar el uso del procesador y la memoria de los equipos f&iacute;sicos";
 answers[70] = choices[70][2];
 units[70] = "45";
 comments[70] = "Id Pregunta: 9126. Examen TIC-A1 2011";


//  Id pregunta: 9141 AÃ±o de creación de pregunta: 2013-01-01
 questions[71]= "72)  &iquest;De qu&eacute; tipo de registros puede disponer un procesador?";
 choices[71]= new Array();
 choices[71][0] = "Opacos";
 choices[71][1] = "Transparentes";
 choices[71][2] = "De control";
 choices[71][3] = "Ninguna respuesta es v&aacute;lida.";
 answers[71] = choices[71][1];
 units[71] = "47";
 comments[71] = "Id Pregunta: 9141. ";


//  Id pregunta: 9144 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  &iquest;C&oacute;mo es el conector SAS?";
 choices[72]= new Array();
 choices[72][0] = "El mismo que en la interfaz SATA y permite utilizar estos discos duros para aplicaciones con m&aacute;s necesidades de velocidad.";
 choices[72][1] = "El mismo que en la interfaz SATA y permite utilizar estos discos duros para aplicaciones con menos necesidad de velocidad, aunque con mayor costo.";
 choices[72][2] = "No tiene nada que ver con la interfaz SATA";
 choices[72][3] = "El mismo que en la interfaz SATA y permite utilizar estos discos duros para aplicaciones con menos necesidad de velocidad, pero con ahorro de costos.";
 answers[72] = choices[72][3];
 units[72] = "47";
 comments[72] = "Id Pregunta: 9144. ";


//  Id pregunta: 9145 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  &iquest;Cu&aacute;ntos cent&iacute;meros tiene el Blu-ray?";
 choices[73]= new Array();
 choices[73][0] = "12";
 choices[73][1] = "13";
 choices[73][2] = "11";
 choices[73][3] = "15";
 answers[73] = choices[73][0];
 units[73] = "47";
 comments[73] = "Id Pregunta: 9145. ";


//  Id pregunta: 9147 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  &iquest;Por qu&eacute; la memorias flash de tipo es mucho m&aacute;s r&aacute;pida que las EEPROM convencionales?";
 choices[74]= new Array();
 choices[74][0] = "Es falso. Las memorias EEPROM convencionales son mucho m&aacute;s r&aacute;pidas";
 choices[74][1] = "Se escriben bloques enteros para agilizar el proceso";
 choices[74][2] = "Para el borrado, se limpian bloques enteros para agilizar el proceso, ya que es la parte m&aacute;s lenta del proceso.";
 choices[74][3] = "Borran bit a bit.";
 answers[74] = choices[74][2];
 units[74] = "47";
 comments[74] = "Id Pregunta: 9147. ";


//  Id pregunta: 9207 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  &iquest;Desde el punto de vista de la cantidad de la velocidad de acceso cu&aacute;l es la diferencia entre cintas y discos?";
 choices[75]= new Array();
 choices[75][0] = "La cinta est&aacute; orientada a almacenamiento de grandes cantidades de datos en los que el tiempo de acceso es cr&iacute;tico.";
 choices[75][1] = "Los discos son adecuados para el almacenamiento de datos con acceso &ldquo;on-line&rdquo;.";
 choices[75][2] = "Las cintas pr&aacute;cticamente ya no se utilizan.";
 choices[75][3] = "Los discos representan el soporte auxiliar de la informaci&oacute;n";
 answers[75] = choices[75][1];
 units[75] = "48";
 comments[75] = "Id Pregunta: 9207. ";


//  Id pregunta: 9209 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  &iquest;C&oacute;mo es el modelo de conectividad interno del almacenamiento?";
 choices[76]= new Array();
 choices[76][0] = "Bus SCSI y bus ATA/IDE de tipo serie";
 choices[76][1] = "SAS es la evoluci&oacute;n de ATA y SATA la evoluci&oacute;n de SCSI.";
 choices[76][2] = "SAS y SATA son evoluciones que modifican las capas bajas de forma que aseguran la compatibilidad a nivel de software.";
 choices[76][3] = "Ante la falta de escalabilidad, problemas de replicaci&oacute;n y redundancia del almacenamiento interno, para entornos empresariales se suele preferir el almacenamiento externo, en forma de una cabina de discos.";
 answers[76] = choices[76][3];
 units[76] = "48";
 comments[76] = "Id Pregunta: 9209. ";


//  Id pregunta: 9212 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  &iquest;C&oacute;mo se identifican los equipos pertenecientes a una red FC?";
 choices[77]= new Array();
 choices[77][0] = "Mediante la MAC";
 choices[77][1] = "Mediante su WWN";
 choices[77][2] = "Mediante una url";
 choices[77][3] = "Mediante un identificador que el administrador configure en el momento de la instalaci&oacute;n.";
 answers[77] = choices[77][1];
 units[77] = "48";
 comments[77] = "Id Pregunta: 9212. ";


//  Id pregunta: 9226 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  &iquest;Cu&aacute;les son los modelos m&aacute;s habituales de Sistemas Distribuidos?";
 choices[78]= new Array();
 choices[78][0] = "Cliente/Servidor";
 choices[78][1] = "Proxy/Cach&eacute;";
 choices[78][2] = "Modelo Peer to Peer";
 choices[78][3] = "Los anteriores y otros modelos como c&oacute;digo M&oacute;vil, Agente M&oacute;vil y Clientes ligeros";
 answers[78] = choices[78][3];
 units[78] = "50";
 comments[78] = "Id Pregunta: 9226. ";


//  Id pregunta: 9262 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  Si se quisiera un middleware para una grid, se elegir&iacute;a:";
 choices[79]= new Array();
 choices[79][0] = "Globus Toolkit. ";
 choices[79][1] = "Cluster Veritas.";
 choices[79][2] = "Arduino.";
 choices[79][3] = "Data protector. ";
 answers[79] = choices[79][0];
 units[79] = "45";
 comments[79] = "Id Pregunta: 9262. Examen TICA2-2011";


//  Id pregunta: 9267 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  &iquest;Con qu&eacute; dispositivo se relaciona la tecnolog&iacute;a de reconocimiento de pulso ac&uacute;stico?";
 choices[80]= new Array();
 choices[80][0] = "Memoria RAM";
 choices[80][1] = "Pantalla t?ctil.";
 choices[80][2] = "Tarjeta de sonido.";
 choices[80][3] = "Disco duro. ";
 answers[80] = choices[80][1];
 units[80] = "47";
 comments[80] = "Id Pregunta: 9267. Examen TICA2-2011";


//  Id pregunta: 9270 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  En un sistema de almacenamiento con 6 discos de 400 GB de capacidad cada uno, &iquest;cu&aacute;l de las siguientes configuraciones RAID tiene al menos 1 TB de capacidad y podr&iacute;a resistir el fallo de 3 discos en algunas ocasiones sin p&eacute;rdida de datos?";
 choices[81]= new Array();
 choices[81][0] = "RAID 6+0";
 choices[81][1] = "RAID 5+0";
 choices[81][2] = "RAID 5+1";
 choices[81][3] = "RAID 0+1";
 answers[81] = choices[81][3];
 units[81] = "48";
 comments[81] = "Id Pregunta: 9270. Examen TICA2-2011";


//  Id pregunta: 9672 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  En un cl&uacute;ster:";
 choices[82]= new Array();
 choices[82][0] = "Puede elegirse el porcentaje de procesamiento que cada nodo dedica al cl&uacute;ster.";
 choices[82][1] = "El algoritmo que distribuye el trabajo entre los nodos se conoce como 'Gang Scheduling'.";
 choices[82][2] = "El middleware m&aacute;s utilizado es Xware.";
 choices[82][3] = "Los nodos comparten una memoria central.";
 answers[82] = choices[82][1];
 units[82] = "45";
 comments[82] = "Id Pregunta: 9672. ";


//  Id pregunta: 9675 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  El serviceware permite:";
 choices[83]= new Array();
 choices[83][0] = "Gestionar el uso del Cl&uacute;ster que hace cada usuario.";
 choices[83][1] = "Gestionar el uso del Grid que hace cada usuario.";
 choices[83][2] = "Controlar la red de comunicaciones del Cl&uacute;ster.";
 choices[83][3] = "Controlar la red de comunicaciones del Grid.";
 answers[83] = choices[83][1];
 units[83] = "45";
 comments[83] = "Id Pregunta: 9675. ";


//  Id pregunta: 9811 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  La velocidad del est&aacute;ndar USB 3.0 es:";
 choices[84]= new Array();
 choices[84][0] = "Similar a la de USB 2.0.";
 choices[84][1] = "10 veces superior a la de USB 2.0.";
 choices[84][2] = "480 Mbps.";
 choices[84][3] = "15 veces superior a la de USB 2.0.";
 answers[84] = choices[84][1];
 units[84] = "46";
 comments[84] = "Id Pregunta: 9811. Examen TIC-A2 2013-Libre";


//  Id pregunta: 10290 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Indique cu&aacute;l de los siguientes NO es un mecanismo en la gesti&oacute;n de una SAN para incrementar la seguridad:";
 choices[85]= new Array();
 choices[85][0] = "Masking";
 choices[85][1] = "Cluning";
 choices[85][2] = "Zoning";
 choices[85][3] = "Port Binding";
 answers[85] = choices[85][1];
 units[85] = "48";
 comments[85] = "Id Pregunta: 10290. TIC A2, libre, examen 2013";


//  Id pregunta: 10303 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Internet Small Computer Systems Interface (iSCSI) seg&uacute;n el RFC 3720 es un protocolo de:";
 choices[86]= new Array();
 choices[86][0] = "Enlace.";
 choices[86][1] = "Red.";
 choices[86][2] = "Transporte.";
 choices[86][3] = "Aplicaci&oacute;n.";
 answers[86] = choices[86][2];
 units[86] = "48";
 comments[86] = "Id Pregunta: 10303. TIC A2, libre, examen 2013";


//  Id pregunta: 10525 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  Se&ntilde;ale la respuesta correcta respecto a las arquitecturas UMA (Uniform Memory Access) y NUMA (Non-Uniform Memory Access)";
 choices[87]= new Array();
 choices[87][0] = "en NUMA un procesador accede m&aacute;s deprisa a su memoria local que a la memoria compartida";
 choices[87][1] = "en UMA los procesadores acceden a la memoria compartida mediante un bus o conmutador";
 choices[87][2] = "A y B son incorrectas";
 choices[87][3] = "A y B son correctas";
 answers[87] = choices[87][3];
 units[87] = "45";
 comments[87] = "Id Pregunta: 10525. NULL";


//  Id pregunta: 10529 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  Ordene los siguientes dispositivos seg&uacute;n velocidad de transferencia, de menor a mayor:";
 choices[88]= new Array();
 choices[88][0] = "FireWire 800 &lt; USB 2.0 &lt; USB 3.0 &lt; Thunderbolt &lt; Thunderbolt 2.0";
 choices[88][1] = "USB 2.0 &lt; FireWire 800 &lt; USB 3.0 &lt; Thunderbolt &lt; Thunderbolt 2.0";
 choices[88][2] = "FireWire 800 &lt; USB 2.0 &lt; Thunderbolt &lt; USB 3.0 &lt; Thunderbolt 2.0";
 choices[88][3] = "USB 2.0 &lt; FireWire 800 &lt; Thunderbolt &lt; USB 3.0 &lt; Thunderbolt 2.0";
 answers[88] = choices[88][1];
 units[88] = "46";
 comments[88] = "Id Pregunta: 10529. NULL";


//  Id pregunta: 10530 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  Seleccione la afirmaci&oacute;n correcta:";
 choices[89]= new Array();
 choices[89][0] = "los buses paralelos permiten enviar mayor cantidad de informaci&oacute;n por unidad de tiempo que los buses serie";
 choices[89][1] = "el bus MCA (Micro Channel Architecture) empleado en los IBM PS/2 ten&iacute;a un ancho de palabra m&aacute;ximo de 16 bits";
 choices[89][2] = "los buses paralelos presentan una limitaci&oacute;n de velocidad relacionada con la variaci&oacute;n de retardo o jitter entre los diferentes bits de su ancho de palabra";
 choices[89][3] = "el bus PCI es un bus paralelo pero sus evoluciones posteriores, PCI-X y PCIe son buses serie";
 answers[89] = choices[89][2];
 units[89] = "46";
 comments[89] = "Id Pregunta: 10530. NULL";


//  Id pregunta: 10536 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  &iquest;Qu&eacute; es la tecnolog&iacute;a TRIM que emplean los discos duros de estado s&oacute;lido?";
 choices[90]= new Array();
 choices[90][0] = "Permite al disco SSD optimizar el almacenamiento de la informaci&oacute;n, de forma que todos los datos est&eacute;n contiguos, mejorando as&iacute; el rendimiento";
 choices[90][1] = "Permite al sistema operativo comunicarle al disco SSD qu&eacute; celdas no est&aacute;n en uso";
 choices[90][2] = "Permite que el disco SSD entre en hibernaci&oacute;n cuando no se usa, mejorando as&iacute; su vida &uacute;til";
 choices[90][3] = "Permite reducir el ruido y calor generado por el disco SSD, as&iacute; como su consumo energ&eacute;tico";
 answers[90] = choices[90][1];
 units[90] = "48";
 comments[90] = "Id Pregunta: 10536. NULL";


//  Id pregunta: 10537 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  &iquest;Qu&eacute; combinaci&oacute;n de discos RAID presenta un mayor rendimiento?";
 choices[91]= new Array();
 choices[91][0] = "RAID 0";
 choices[91][1] = "RAID 5";
 choices[91][2] = "RAID 1+0";
 choices[91][3] = "RAID 0+1";
 answers[91] = choices[91][0];
 units[91] = "48";
 comments[91] = "Id Pregunta: 10537. NULL";


//  Id pregunta: 10938 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Los switches FC (Fibre Channel) de las redes SAN (Storage Area Network) permiten en la actualidad el uso de &oacute;pticas SFP (Small Form-factor Pluggable) de:";
 choices[92]= new Array();
 choices[92][0] = "4 Gb/s, 8Gb/s, 16 Gb/s";
 choices[92][1] = "8 Gb/s, 16 Gb/s, 32 Gb/s";
 choices[92][2] = "16Gb/s, 32 Gb/s, 64Gb/s";
 choices[92][3] = "1Gbs, 10Gbs, 100Gbs";
 answers[92] = choices[92][0];
 units[92] = "48";
 comments[92] = "Id Pregunta: 10938. TIC A1 AGE 2014";


//  Id pregunta: 10991 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  El tipo de infraestructura de cloud computing que permite mantener las aplicaciones cr&iacute;ticas dentro de una infraestructura controlada y hacer uso de otros servicios y aplicaciones compartidos por varios clientes se denomina:";
 choices[93]= new Array();
 choices[93][0] = "Nube privada";
 choices[93][1] = "Nube h&iacute;brida";
 choices[93][2] = "Nube p&uacute;blica";
 choices[93][3] = "Infraestructura como Servicio (IaaS)";
 answers[93] = choices[93][1];
 units[93] = "47";
 comments[93] = "Id Pregunta: 10991. TIC A1 AGE 2014";


//  Id pregunta: 11127 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l de los siguientes no es un servicio de Amazon de Cloud Computing?";
 choices[94]= new Array();
 choices[94][0] = "Amazon CloudWatch";
 choices[94][1] = "Amazon Elastic Compute Cloud";
 choices[94][2] = "Amazon AppFabric";
 choices[94][3] = "Amazon Simple Storage Service";
 answers[94] = choices[94][2];
 units[94] = "47";
 comments[94] = "Id Pregunta: 11127. ";


//  Id pregunta: 11129 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Cu&aacute;l de las siguientes sentencias es verdadera?";
 choices[95]= new Array();
 choices[95][0] = "El est&aacute;ndar SATA 3 soporta transferencias hasta 4.8 Gbps";
 choices[95][1] = "La versi&oacute;n ATA-8 soporta velocidades hasta 12 Gbps";
 choices[95][2] = "El SAS 600 consigue velocidades de hasta 16 Gbps";
 choices[95][3] = "Los discos SAS han sido progresivamente sustituidos por los SCSI,";
 answers[95] = choices[95][0];
 units[95] = "48";
 comments[95] = "Id Pregunta: 11129. ";


//  Id pregunta: 11272 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Indique la opci&oacute;n correcta sobre las plataformas Open Source para el Cloud:";
 choices[96]= new Array();
 choices[96][0] = "OpenNebula fue desarrollado por el DSA (Distributed Systems Architecture Research Group) en la Universidad Complutense de Madrid y financiado por varios proyectos europeos y permite programar tanto en Java como en Ruby.";
 choices[96][1] = "OpenStack fue fundada por Rackspace y la NASA.";
 choices[96][2] = "CloudStack fue desarrollado por Cloud.com y dispone de versiones propietarias adem&aacute;s de la edici&oacute;n Community.";
 choices[96][3] = "Todas son verdaderas.";
 answers[96] = choices[96][3];
 units[96] = "47";
 comments[96] = "Id Pregunta: 11272. ";


//  Id pregunta: 11505 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Seg&uacute;n Popek y Goldberg, &iquest;Qu&eacute; caracteristicas debe de tener un sistema para que sea virtualizable?";
 choices[97]= new Array();
 choices[97][0] = "Equivalencia.";
 choices[97][1] = "Control de Recursos.";
 choices[97][2] = "Eficiencia.";
 choices[97][3] = "Todos los anteriores.";
 answers[97] = choices[97][3];
 units[97] = "47";
 comments[97] = "Id Pregunta: 11505. NULL";


//  Id pregunta: 11605 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  La tecnolog&iacute;a NFC opera a una frecuencia de:";
 choices[98]= new Array();
 choices[98][0] = "1,63 MHz";
 choices[98][1] = "13,56 MHz";
 choices[98][2] = "2,45 GHz";
 choices[98][3] = "5,4 GHz";
 answers[98] = choices[98][1];
 units[98] = "46";
 comments[98] = "Id Pregunta: 11605. ";


//  Id pregunta: 11609 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  El n&uacute;mero m&iacute;nimo de discos necesarios en RAID 6 es:";
 choices[99]= new Array();
 choices[99][0] = "2";
 choices[99][1] = "3";
 choices[99][2] = "4";
 choices[99][3] = "5";
 answers[99] = choices[99][2];
 units[99] = "48";
 comments[99] = "Id Pregunta: 11609. ";


