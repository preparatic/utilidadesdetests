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

//  Id pregunta: 673 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  El &quot;proyecto CERES&quot;:";
 choices[0]= new Array();
 choices[0][0] = "Establece c&oacute;mo deben de ser los certificados que se usen para realizar la firma electr&oacute;nica";
 choices[0][1] = "Hace que se pueda usar a la Fabrica Nacional de la Moneda y Timbre de forma gratuita por todos los espa&ntilde;oles";
 choices[0][2] = "Se define en el &aacute;mbito de la relaci&oacute;n de los ciudadanos con las administraciones y &eacute;stas entre si.";
 choices[0][3] = "Designa a la Fabrica Nacional de la Moneda y Timbre como autoridad de certificaci&oacute;n para cualquier transacci&oacute;n electr&oacute;nica";
 answers[0] = choices[0][2];
 units[0] = "74";
 comments[0] = "Id Pregunta: 673. NULL";


//  Id pregunta: 688 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  Indique cu&aacute;l de las siguientes afirmaciones es falsa:";
 choices[1]= new Array();
 choices[1][0] = "CISC (Complex Instruction Set Computer) es la arquitectura tradicional del ordenador personal, en la que la CPU utiliza su microc&oacute;digo para ejecutar un juego muy completo de instrucciones";
 choices[1][1] = "En los procesadores CISC las instrucciones pueden ser de longitud variable y usar todos los modos de direccionamiento, requiriendo para ello complejos circuitos decodificadores que ralentizan la ejecuci&oacute;n de cada instrucci&oacute;n";
 choices[1][2] = "Los procesadores RISC (Reduced Instruction Set Computer) fijan la longitud de todas las instrucciones haci&eacute;ndola constante prohibiendo el modo de direccionamiento indirecto";
 choices[1][3] = "Los procesadores RISC necesitan un mayor n&uacute;mero de transistores, lo cual los hace m&aacute;s caros de producir y m&aacute;s dif&iacute;ciles de dise&ntilde;ar";
 answers[1] = choices[1][3];
 units[1] = "46";
 comments[1] = "Id Pregunta: 688. Examen TIC MAP B 2004";


//  Id pregunta: 689 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  De acuerdo con la Ley 34/2002 de servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico, la prestaci&oacute;n de servicios de la sociedad de la informaci&oacute;n:";
 choices[2]= new Array();
 choices[2][0] = "Estar&aacute; sujeta a autorizaci&oacute;n previa";
 choices[2][1] = "No estar&aacute; sujeta a autorizaci&oacute;n previa";
 choices[2][2] = "No estar&aacute; sujeta a autorizaci&oacute;n previa, salvo para servicios relacionados con la salud";
 choices[2][3] = "No estar&aacute; sujeta a autorizaci&oacute;n previa, salvo para servicios relacionados con la juventud y la infancia";
 answers[2] = choices[2][1];
 units[2] = "30";
 comments[2] = "Id Pregunta: 689. Ley 34/2002, art&iacute;culo 6";


//  Id pregunta: 784 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  &iquest;Cual de estas tecnologias ser&iacute;a v&aacute;lida para la conexi&oacute;n en una red de area personal de los perif&eacute;ricos m&aacute;s habituales?";
 choices[3]= new Array();
 choices[3][0] = "Ethernet";
 choices[3][1] = "Bluetooth";
 choices[3][2] = "Wifi";
 choices[3][3] = "WLAN";
 answers[3] = choices[3][1];
 units[3] = "47";
 comments[3] = "Id Pregunta: 784. SS-A 2004";


//  Id pregunta: 792 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  En un sistema de memoria virtual, el &quot;bit de suciedad&quot; (dirty bit) se utiliza para:";
 choices[4]= new Array();
 choices[4][0] = "Saber si los datos siguen siendo v&aacute;lidos antes de que la CPU los utilice.";
 choices[4][1] = "Detectar corrupci&oacute;n de datos debida a fallos de hardware o a interferencias electromagn&eacute;ticas.";
 choices[4][2] = "Determinar si los datos se deben escribir en disco antes de ser reemplazados.";
 choices[4][3] = "Saber si los datos ya est&aacute;n disponibles en la memoria cache.";
 answers[4] = choices[4][2];
 units[4] = "47";
 comments[4] = "Id Pregunta: 792. ";


//  Id pregunta: 806 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  A la estructura en disco que contiene la informaci&oacute;n de control de un fichero en un sistema de ficheros Unix se le denomina:";
 choices[5]= new Array();
 choices[5][0] = "I-nodo";
 choices[5][1] = "Cluster";
 choices[5][2] = "Bloque de control";
 choices[5][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[5] = choices[5][0];
 units[5] = "52,53";
 comments[5] = "Id Pregunta: 806. ";


//  Id pregunta: 868 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Cu&aacute;l de los siguientes no es un grupo de &aacute;reas de aplicaci&oacute;n de la inteligencia artifical?";
 choices[6]= new Array();
 choices[6][0] = "juegos, sistemas expertos, demostraci&oacute;n de teoremas";
 choices[6][1] = "lenguaje natural, razonamiento autom&aacute;tico, redes neuronales";
 choices[6][2] = "algoritmos gen&eacute;ticos, modelizaci&oacute;n del comportamiento humano, rob&oacute;tica";
 choices[6][3] = "todas son &aacute;reas de aplicaci&oacute;n de la inteligencia artificial";
 answers[6] = choices[6][3];
 units[6] = "63";
 comments[6] = "Id Pregunta: 868. ";


//  Id pregunta: 888 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l no es una caracter&iacute;stica b&aacute;sica de los sistemas OLAP?";
 choices[7]= new Array();
 choices[7][0] = "Permite actualizar la informaci&oacute;n de manera r&aacute;pida y f&aacute;cil.";
 choices[7][1] = "Permiten ahondar en la jerarqu&iacute;a de los datos para acceder a los de m&aacute;s bajo nivel.";
 choices[7][2] = "Ofrecen una visi&oacute;n m&uacute;ltidimensional y jerarquizada de los datos.";
 choices[7][3] = "Son capaces de analizar tendencias a lo largo de per&iacute;odos de tiempo.";
 answers[7] = choices[7][0];
 units[7] = "68";
 comments[7] = "Id Pregunta: 888. ";


//  Id pregunta: 917 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Qu&eacute; es Apache?:";
 choices[8]= new Array();
 choices[8][0] = "Una versi&oacute;n del sistema operativo Linux";
 choices[8][1] = "Un servidor web propiedad de Microsoft";
 choices[8][2] = "Una autoridad de certificaci&oacute;n ampliamente utilizada en Espa&ntilde;a";
 choices[8][3] = "Un servidor web del tipo &quot;software libre&quot;";
 answers[8] = choices[8][3];
 units[8] = "62";
 comments[8] = "Id Pregunta: 917. ";


//  Id pregunta: 1036 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  El modelo de referencia ANSI para SGBD, en cuanto a la definici&oacute;n de los datos:";
 choices[9]= new Array();
 choices[9][0] = "Crea cuatro tipos de esquemas: conceptual, l&oacute;gico, f&iacute;sico, de implementaci&oacute;n";
 choices[9][1] = "Establece la estrecha dependencia que debe existir entre los datos y las aplicaciones";
 choices[9][2] = "Define cinco niveles de interpretaci&oacute;n de los mismos, seg&uacute;n cinco aspectos: visualizaci&oacute;n, cardinalidad, muestreo, distancia y flexibilidad";
 choices[9][3] = "Establece los Metadatos (datos sobre los datos) que se almacenan en el Diccionario de Datos";
 answers[9] = choices[9][3];
 units[9] = "57";
 comments[9] = "Id Pregunta: 1036. ";


//  Id pregunta: 1037 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  El modelo de referencia ANSI/SPARC para la estandarizaci&oacute;n de los SGBD:";
 choices[10]= new Array();
 choices[10][0] = "El n&uacute;cleo de la arquitectura lo constituye el diccionario de datos";
 choices[10][1] = "Los metadatos no forman parte del diccionario";
 choices[10][2] = "Indica la forma de instrumentar las interacciones del SGBD";
 choices[10][3] = "La administraci&oacute;n de la empresa dise&ntilde;a los esquemas externos";
 answers[10] = choices[10][0];
 units[10] = "57";
 comments[10] = "Id Pregunta: 1037. ";


//  Id pregunta: 1116 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  En las m&aacute;quinas con tecnolog&iacute;a RISC:";
 choices[11]= new Array();
 choices[11][0] = "El n&uacute;mero de instrucciones es muy elevado";
 choices[11][1] = "Se emplea la microprogramaci&oacute;n";
 choices[11][2] = "No se emplea la microprogramaci&oacute;n";
 choices[11][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[11] = choices[11][2];
 units[11] = "46";
 comments[11] = "Id Pregunta: 1116. ";


//  Id pregunta: 1137 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  En un entorno transaccional, &iquest;cu&aacute;l de las siguientes acciones traer&iacute;a como resultado una disminuci&oacute;n del tiempo de respuesta?:";
 choices[12]= new Array();
 choices[12][0] = "Compactaci&oacute;n de datos en el dispositivo de almacenamiento magn&eacute;tico, para disminuir el n&uacute;mero de E/S al DASD";
 choices[12][1] = "Ampliaci&oacute;n de la partici&oacute;n de memoria principal para los programas activos, para disminuir la frecuencia de 'swapping'";
 choices[12][2] = "Ampliaci&oacute;n de la memoria virtual, para disminuir la paginaci&oacute;n";
 choices[12][3] = "Todas las anteriores respuestas son correctas";
 answers[12] = choices[12][1];
 units[12] = "52";
 comments[12] = "Id Pregunta: 1137. ";


//  Id pregunta: 1177 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Indicar cu&aacute;l de las siguientes no es una estructura v&aacute;lida de marcos en las bases de conocimiento:";
 choices[13]= new Array();
 choices[13][0] = "Jerarqu&iacute;a circular";
 choices[13][1] = "Jerarqu&iacute;a simple";
 choices[13][2] = "Jerarqu&iacute;a m&uacute;ltiple";
 choices[13][3] = "Colecci&oacute;n lineal";
 answers[13] = choices[13][0];
 units[13] = "64";
 comments[13] = "Id Pregunta: 1177. ";


//  Id pregunta: 1178 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  Indicar cu&aacute;l de las siguientes no es una tendencia en el desarrollo de Sistemas Basados en el Conocimiento (SBC):";
 choices[14]= new Array();
 choices[14][0] = "Los SBC se conciben como sistemas que han de integrarse dentro de otros, en vez de trabajar en solitario";
 choices[14][1] = "Cada vez son m&aacute;s frecuentadas los SBC h&iacute;bridos, que combinan diferentes t&eacute;cnicas de representaci&oacute;n del conocimiento, frente a los de reglas puros";
 choices[14][2] = "Cada vez m&aacute;s se concibe a los SBC como un sistema de procesamiento especial de la informaci&oacute;n";
 choices[14][3] = "Cada vez se presta m&aacute;s atenci&oacute;n a conceptos tales como: ciclo de vida del proyecto, mantenimiento de sistemas, soluciones y retorno esperable, y metodolog&iacute;as de construcci&oacute;n";
 answers[14] = choices[14][2];
 units[14] = "64";
 comments[14] = "Id Pregunta: 1178. ";


//  Id pregunta: 1204 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  La 3FN (Tercera Forma Normal), definida por Codd, dice:";
 choices[15]= new Array();
 choices[15][0] = "Una relaci&oacute;n est&aacute; en 3FN (Tercera Forma Normal), si no incluye ning&uacute;n grupo repetitivo";
 choices[15][1] = "Una relaci&oacute;n est&aacute; en 3FN (Tercera Forma Normal), si todos los atributos que no forman parte de la clave primaria son mutuamente independientes y dependen funcionalmente de forma completa de la clave";
 choices[15][2] = "Una relaci&oacute;n est&aacute; en 3FN (Tercera Forma Normal), si est&aacute; en 2FN (Segunda Forma Normal) y adem&aacute;s cualquiera de sus atributos no primarios tienen una dependencia plena con cada una de las claves y no con partes de &eacute;sta";
 choices[15][3] = "Elimina dependencias multivaluadas";
 answers[15] = choices[15][1];
 units[15] = "58";
 comments[15] = "Id Pregunta: 1204. NULL";


//  Id pregunta: 1256 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  Las m&aacute;quinas diferenciales y anal&iacute;ticas fueron idea de:";
 choices[16]= new Array();
 choices[16][0] = "Pascal";
 choices[16][1] = "Hollerith";
 choices[16][2] = "Aiken";
 choices[16][3] = "Babbage";
 answers[16] = choices[16][3];
 units[16] = "";
 comments[16] = "Id Pregunta: 1256. ";


//  Id pregunta: 1300 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Para la traducci&oacute;n de direcciones virtuales a f&iacute;sicas se utiliza:";
 choices[17]= new Array();
 choices[17][0] = "La paginaci&oacute;n";
 choices[17][1] = "La segmentaci&oacute;n";
 choices[17][2] = "Son ciertas &lsquo;a&rsquo; y &lsquo;b&rsquo;";
 choices[17][3] = "Todas son falsas";
 answers[17] = choices[17][2];
 units[17] = "52";
 comments[17] = "Id Pregunta: 1300. ";


//  Id pregunta: 1349 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Se&ntilde;ale la respuesta falsa respecto de Unix:";
 choices[18]= new Array();
 choices[18][0] = "Se cre&oacute; basandose en MULTICS";
 choices[18][1] = "Est&aacute; escrito en lenguaje C";
 choices[18][2] = "Se us&oacute; primero en la NASA";
 choices[18][3] = "Inicialmente era gratuito";
 answers[18] = choices[18][2];
 units[18] = "53";
 comments[18] = "Id Pregunta: 1349. ";


//  Id pregunta: 1357 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  SHA-1 es un algoritmo empleado por la criptograf&iacute;a sim&eacute;trica de:";
 choices[19]= new Array();
 choices[19][0] = "Res&uacute;men";
 choices[19][1] = "Bloques";
 choices[19][2] = "Flujos";
 choices[19][3] = "Las respuestas &lsquo;b&rsquo; y &lsquo;c&rsquo; son correctas";
 answers[19] = choices[19][0];
 units[19] = "72";
 comments[19] = "Id Pregunta: 1357. ";


//  Id pregunta: 1492 AÃ±o de creación de pregunta: 2009-01-01
 questions[20]= "21)  &iquest;Deben los prestadores de servicios de la sociedad de la informaci&oacute;n inscribirse en alg&uacute;n registro?:";
 choices[20]= new Array();
 choices[20][0] = "Es necesaria una autorizaci&oacute;n administrativa";
 choices[20][1] = "S&iacute;, pero a&uacute;n no se ha decidido donde";
 choices[20][2] = "No, pero los datos de su inscripci&oacute;n en el Registro Mercantil en el que, en su caso, se encuentren inscritos o de aquel otro registro p&uacute;blico en el que lo estuvieran para la adquisici&oacute;n de personalidad jur&iacute;dica o a los solos efectos de publicidad forman parte de la informaci&oacute;n general considerada en el art&iacute;culo 10 de la Ley 34/2002.";
 choices[20][3] = "No, pero se debe comunicar al Registro Mercantil el nombre de dominio si es utilizado para publicidad";
 answers[20] = choices[20][2];
 units[20] = "30";
 comments[20] = "Id Pregunta: 1492. Ley 34/2002, art&iacute;culo 9";


//  Id pregunta: 1495 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  Cuando la transmisi&oacute;n de datos entre dos sistemas se caracteriza por llevar un bit de comienzo y un bit de parada, separando a cada unidad de informaci&oacute;n, se trata de:";
 choices[21]= new Array();
 choices[21][0] = "Comunicaci&oacute;n s&iacute;ncrona";
 choices[21][1] = "Comunicaci&oacute;n as&iacute;ncrona";
 choices[21][2] = "Comunicaci&oacute;n semiduplex (half-duplex)";
 choices[21][3] = "Comunicaci&oacute;n duplex (full-duplex)";
 answers[21] = choices[21][1];
 units[21] = "100";
 comments[21] = "Id Pregunta: 1495. *: transmision datos";


//  Id pregunta: 1505 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Los procesos en UNIX que est&aacute;n en ejecuci&oacute;n:";
 choices[22]= new Array();
 choices[22][0] = "Tienen que residir en memoria";
 choices[22][1] = "Pueden tener p&aacute;ginas en memoria y p&aacute;ginas en disco";
 choices[22][2] = "Tienen que estar en memoria aun cuando no se est&eacute;n ejecutando";
 choices[22][3] = "Ninguna de las anteriores";
 answers[22] = choices[22][1];
 units[22] = "53";
 comments[22] = "Id Pregunta: 1505. ";


//  Id pregunta: 1537 AÃ±o de creación de pregunta: 2003-01-01
 questions[23]= "24)  &iquest;Cu&aacute;l es la diferencia entre MPP y SMP?";
 choices[23]= new Array();
 choices[23][0] = "En SMP todas las CPU comparten la misma memoria mientras en MPP cada CPU tiene su propia memoria. ";
 choices[23][1] = "En MPP todas las CPU comparten la misma memoria mientras en SMP cada CPU tiene su propia memoria.";
 choices[23][2] = "No hay ninguna diferencia ambas arquitecturas son iguales";
 choices[23][3] = "SMP se utiliza en mainframes mientras que MPP se utiliza en supercomputadores";
 answers[23] = choices[23][0];
 units[23] = "45";
 comments[23] = "Id Pregunta: 1537. ";


//  Id pregunta: 1562 AÃ±o de creación de pregunta: 2003-01-01
 questions[24]= "25)  &iquest;Cu&aacute;l de los siguientes objetivos est&aacute; al margen de la teor&iacute;a de la conmutaci&oacute;n?";
 choices[24]= new Array();
 choices[24][0] = "Obtener los circuitos l&oacute;gicos que representan a las diferentes funciones booleanas.";
 choices[24][1] = "Obtener el circuito de coste m&iacute;nimo.";
 choices[24][2] = "Obtener en un tiempo aceptable un circuito que reproduzca la funci&oacute;n booleana adecuada.";
 choices[24][3] = "Dise&ntilde;ar los circuitos que permitan la transmisi&oacute;n de los datos hasta un receptor situado a una cierta distancia.";
 answers[24] = choices[24][3];
 units[24] = "";
 comments[24] = "Id Pregunta: 1562. Junta Andaluc&iacute;a";


//  Id pregunta: 1567 AÃ±o de creación de pregunta: 2003-01-01
 questions[25]= "26)  &iquest;Cu&aacute;l no es una caracter&iacute;stica esencial del Datawarehouse?";
 choices[25]= new Array();
 choices[25][0] = "Orientado por temas";
 choices[25][1] = "Independiente del tiempo";
 choices[25][2] = " No vol&aacute;til";
 choices[25][3] = "Integrado";
 answers[25] = choices[25][1];
 units[25] = "71";
 comments[25] = "Id Pregunta: 1567. ";


//  Id pregunta: 1611 AÃ±o de creación de pregunta: 2003-01-01
 questions[26]= "27)  La tercera forma normal enunciada por Codd dice:";
 choices[26]= new Array();
 choices[26][0] = "Un relaci&oacute;n est&aacute; en tercera forma normal, si est&aacute; en 2FN y adem&aacute;s ninguno de sus atributos no primarios tiene dependencias transitivas respecto de las claves";
 choices[26][1] = "Una relaci&oacute;n R est&aacute; en 3FN si todos los atributos que no forman parte de la clave son mutuamente independientes y dependen funcionalmente de forma completa de la clave primaria";
 choices[26][2] = "Ambos enunciados son correctos";
 choices[26][3] = "Ninguno es correcto";
 answers[26] = choices[26][2];
 units[26] = "58";
 comments[26] = "Id Pregunta: 1611. NULL";


//  Id pregunta: 1698 AÃ±o de creación de pregunta: 2006-01-01
 questions[27]= "28)  En relaci&oacute;n a las tarjetas gr&aacute;ficas:";
 choices[27]= new Array();
 choices[27][0] = "La mayor parte ya son para bus PCI-E (PCI Express)";
 choices[27][1] = "Se pueden conectar al bus AGP, entre otros";
 choices[27][2] = "La resoluci&oacute;n m&aacute;s habitual es de 640 x 480";
 choices[27][3] = "Las respuestas a) y b) son correctas";
 answers[27] = choices[27][3];
 units[27] = "46";
 comments[27] = "Id Pregunta: 1698. ";


//  Id pregunta: 1743 AÃ±o de creación de pregunta: 2006-01-01
 questions[28]= "29)  En el entorno Microsoft WebDAV se utiliza para";
 choices[28]= new Array();
 choices[28][0] = "Recuperaci&oacute;n automatizada del sistema";
 choices[28][1] = "Para sincronizaci&oacute;n de copias de DFS.";
 choices[28][2] = "Compartici&oacute;n remota de documentos";
 choices[28][3] = "Encriptaci&oacute;n del sistema de archivos.";
 answers[28] = choices[28][2];
 units[28] = "56";
 comments[28] = "Id Pregunta: 1743. ";


//  Id pregunta: 1796 AÃ±o de creación de pregunta: 2006-01-01
 questions[29]= "30)  Indique cu&aacute;les son las facetas declarativas en la representaci&oacute;n del conocimiento mediante marcos (frameworks):";
 choices[29]= new Array();
 choices[29][0] = "if-needed; if-required e if-deleted";
 choices[29][1] = "if-needed; if-required e if-added";
 choices[29][2] = "if-needed; if-deleted e if-added";
 choices[29][3] = "Ninguna de las anteriores";
 answers[29] = choices[29][3];
 units[29] = "64";
 comments[29] = "Id Pregunta: 1796. ";


//  Id pregunta: 1835 AÃ±o de creación de pregunta: 2006-01-01
 questions[30]= "31)  &iquest;Qu&eacute; es un DTD?";
 choices[30]= new Array();
 choices[30][0] = "Define la forma en que los documentos XML deben conectarse entre s&iacute;";
 choices[30][1] = "Descripci&oacute;n del formato en el que se desea que aparezcan las entidades definidas en un documento";
 choices[30][2] = "Definici&oacute;n de la gram&aacute;tica de un documento";
 choices[30][3] = "Permite controlar el formato de los documentos HTML con descripciones particulares";
 answers[30] = choices[30][2];
 units[30] = "69";
 comments[30] = "Id Pregunta: 1835. NULL";


//  Id pregunta: 1846 AÃ±o de creación de pregunta: 2006-01-01
 questions[31]= "32)  &iquest;A qu&eacute; hace referencia las siglas WAPI?";
 choices[31]= new Array();
 choices[31][0] = "Wireless Advanced Privacy Infrastructure";
 choices[31][1] = "Workflow Application Programming Interface";
 choices[31][2] = "Wired Advanced Professional Institute";
 choices[31][3] = "Wireless Application Programming Interface";
 answers[31] = choices[31][1];
 units[31] = "71";
 comments[31] = "Id Pregunta: 1846. ";


//  Id pregunta: 1874 AÃ±o de creación de pregunta: 2006-01-01
 questions[32]= "33)  De acuerdo con la normativa relativa sobre firma electr&oacute;nica, se&ntilde;ale la falsa:";
 choices[32]= new Array();
 choices[32][0] = "La prestaci&oacute;n de servicios de certificaci&oacute;n no est&aacute; sujeta a autorizaci&oacute;n previa y se realizar&aacute; en r&eacute;gimen de libre competencia";
 choices[32][1] = "El firmante es una persona que posee el dispositivo de creaci&oacute;n de firma y que act&uacute;a en nombre propio o de una persona f&iacute;sica o jur&iacute;dica a la que representa.";
 choices[32][2] = "En el caso de certificados reconocidos, el per&iacute;odo de validez no podr&aacute; ser superior a 4 a&ntilde;os";
 choices[32][3] = "En el caso de certificados reconocidos, el per&iacute;odo de validez no podr&aacute; ser superior a 5 a&ntilde;os";
 answers[32] = choices[32][2];
 units[32] = "30";
 comments[32] = "Id Pregunta: 1874. Ley 9/2014, Disposici&oacute;n Final Sexta";


//  Id pregunta: 1925 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  Para la modelizaci&oacute;n de datos en el modelo de entidad-relaci&oacute;n &iquest;Qu&eacute; se entiende como grado de una tabla?";
 choices[33]= new Array();
 choices[33][0] = "El n&uacute;mero de filas de la tabla";
 choices[33][1] = "El n&uacute;mero de columnas de la tabla";
 choices[33][2] = "El n&uacute;mero de entidades de un tipo que se relacionan con las de otro tipo en funci&oacute;n de los atributos que caracterizan la relaci&oacute;n";
 choices[33][3] = "El n&uacute;mero de atributos de esa tabla que son claves primarias de otras tablas";
 answers[33] = choices[33][1];
 units[33] = "58";
 comments[33] = "Id Pregunta: 1925. NULL";


//  Id pregunta: 1939 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  Sobre la implementaci&oacute;n .NET de la seguridad basada en roles, escoja la afirmaci&oacute;n correcta:";
 choices[34]= new Array();
 choices[34][0] = "Se basa en cuentas/seguridad de Windows para identificar a los usuarios";
 choices[34][1] = "El motor de ejecuci&oacute;n dispone de funciones para que los administradores puedan crear y gestionar la asignaci&oacute;n de cuentas de usuario de Windows a roles de aplicaci&oacute;n";
 choices[34][2] = "Es necesario que los usuarios est&eacute;n asociados a cuentas de usuario de Windows";
 choices[34][3] = "La seguridad basada en roles de la estructura .NET es incompatible con la de COM+ 1.0";
 answers[34] = choices[34][1];
 units[34] = "59";
 comments[34] = "Id Pregunta: 1939. ";


//  Id pregunta: 4265 AÃ±o de creación de pregunta: 2007-01-01
 questions[35]= "36)  La configuraci&oacute;n RAID que ofrece la mejor relaci&oacute;n precio/rendimiento de entre las siguientes es:";
 choices[35]= new Array();
 choices[35][0] = "RAID 1";
 choices[35][1] = "RAID 2";
 choices[35][2] = "RAID 4";
 choices[35][3] = "RAID 5";
 answers[35] = choices[35][3];
 units[35] = "48";
 comments[35] = "Id Pregunta: 4265. ";


//  Id pregunta: 4307 AÃ±o de creación de pregunta: 2007-01-01
 questions[36]= "37)  &iquest;Cu&aacute;l de las siguientes opciones no es una heur&iacute;stica de dise&ntilde;o aplicable a los Diagramas de Estructura preliminares?:";
 choices[36]= new Array();
 choices[36][0] = "Aislar el centro de transformaci&oacute;n especificando los l&iacute;mites del flujo de entrada y salida.";
 choices[36][1] = "No utilizar variables globales.";
 choices[36][2] = "Optimizar los grados de entrada y salida de los m&oacute;dulos.";
 choices[36][3] = "No dejar que un dato se obtenga en un m&oacute;dulo lejano al m&oacute;dulo donde se utiliza.";
 answers[36] = choices[36][0];
 units[36] = "81";
 comments[36] = "Id Pregunta: 4307. ";


//  Id pregunta: 4347 AÃ±o de creación de pregunta: 2007-01-01
 questions[37]= "38)  De entre los siguientes, indique cu&aacute;l no es un sistema criptogr&aacute;fico de clave sim&eacute;trica:";
 choices[37]= new Array();
 choices[37][0] = "DES";
 choices[37][1] = "Triple DES.";
 choices[37][2] = "RSA";
 choices[37][3] = "IDEA";
 answers[37] = choices[37][2];
 units[37] = "73";
 comments[37] = "Id Pregunta: 4347. ";


//  Id pregunta: 4519 AÃ±o de creación de pregunta: 2007-01-01
 questions[38]= "39)  Una herramienta inform&aacute;tica especialmente dise&ntilde;ada para ayudar a los usuarios a trabajar en colaboraci&oacute;n de la forma mas eficaz es";
 choices[38]= new Array();
 choices[38][0] = "Un Data-Warehouse";
 choices[38][1] = "Un Workflow";
 choices[38][2] = "Un Groupware";
 choices[38][3] = "Un OLAP";
 answers[38] = choices[38][2];
 units[38] = "71";
 comments[38] = "Id Pregunta: 4519. ";


//  Id pregunta: 4621 AÃ±o de creación de pregunta: 2007-01-01
 questions[39]= "40)  &iquest;Como se denomina la licencia bajo la que se distribuye la mayor&iacute;a de los programas del proyecto GNU?:";
 choices[39]= new Array();
 choices[39][0] = "FDL";
 choices[39][1] = "GSL";
 choices[39][2] = "GPL";
 choices[39][3] = "GLL";
 answers[39] = choices[39][2];
 units[39] = "36";
 comments[39] = "Id Pregunta: 4621. ";


//  Id pregunta: 4704 AÃ±o de creación de pregunta: 2007-01-01
 questions[40]= "41)  Un applet de Java se ejecutar&aacute; en casi cualquier navegador porque ..";
 choices[40]= new Array();
 choices[40][0] = "el servidor tiene un built-in de JVM.";
 choices[40][1] = "el navegador es capaz de interpretar el c&oacute;digo fuente";
 choices[40][2] = "el navegador tiene un built-in de JVM";
 choices[40][3] = "los applets no necesitan una JVM.";
 answers[40] = choices[40][2];
 units[40] = "60";
 comments[40] = "Id Pregunta: 4704. Examen 2006 JCYL";


//  Id pregunta: 4846 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  &iquest;Cu&aacute;l de los siguientes NO es un formato v&aacute;lido para el empaquetamiento de aplicaciones en Java EE (Java Enterprise Edition)?";
 choices[41]= new Array();
 choices[41][0] = "WAR (Web Archive)";
 choices[41][1] = "EAR (Enterprise Archive)";
 choices[41][2] = "BAR (Bean Archive)";
 choices[41][3] = "JAR (Java Archive)";
 answers[41] = choices[41][2];
 units[41] = "60";
 comments[41] = "Id Pregunta: 4846. NULL";


//  Id pregunta: 5010 AÃ±o de creación de pregunta: 2003-01-01
 questions[42]= "43)  Seg&uacute;n la ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica, &iquest;cu&aacute;l de las siguientes NO es causa de extinci&oacute;n dela vigencia de un certificado?:";
 choices[42]= new Array();
 choices[42][0] = "Expiraci&oacute;n del per&iacute;odo de validez que figura en el certificado";
 choices[42][1] = "Revocaci&oacute;n formulada por el firmante, la persona f&iacute;sica o jur&iacute;dica representada por &eacute;ste, un terceroautorizado o la persona f&iacute;sica solicitante de un certificado electr&oacute;nico de persona jur&iacute;dica";
 choices[42][2] = "Resoluci&oacute;n judicial o administrativa que lo ordene";
 choices[42][3] = "Transferencia de la gesti&oacute;n de los certificados electr&oacute;nicos expedidos por el prestador a otro prestador deservicios de certificaci&oacute;n, cuando el firmante haya dado su consentimiento expreso";
 answers[42] = choices[42][3];
 units[42] = "30";
 comments[42] = "Id Pregunta: 5010. Examen TIC A 2007 (Ley 59/2003, art&iacute;culo 8)";


//  Id pregunta: 5067 AÃ±o de creación de pregunta: 2003-01-01
 questions[43]= "44)  &iquest;En cu&aacute;l de las siguientes zonas del chip del DNIe se almacenan los datos biom&eacute;tricos?:";
 choices[43]= new Array();
 choices[43][0] = "Zona p&uacute;blica";
 choices[43][1] = "Zona privada";
 choices[43][2] = "Zona de seguridad";
 choices[43][3] = "Zona compartida";
 answers[43] = choices[43][2];
 units[43] = "30";
 comments[43] = "Id Pregunta: 5067. Examen TIC A 2007";


//  Id pregunta: 5093 AÃ±o de creación de pregunta: 2003-01-01
 questions[44]= "45)  Los algoritmos de autenticaci&oacute;n y firma utilizados en el DNI se basan en:";
 choices[44]= new Array();
 choices[44][0] = "Cuatro pares de claves RSA";
 choices[44][1] = "Dos pares de claves DES";
 choices[44][2] = "Dos pares de claves DSA";
 choices[44][3] = "Dos pares de claves RSA";
 answers[44] = choices[44][3];
 units[44] = "74";
 comments[44] = "Id Pregunta: 5093. NULL";


//  Id pregunta: 5490 AÃ±o de creación de pregunta: 2003-01-01
 questions[45]= "46)  Qu&eacute; le ocurre a una transacci&oacute;n si recupera todos los datos que satisfacen una condici&oacute;n y despu&eacute;s otra transacci&oacute;n incorpora nuevos datos que satisfacen dicha condici&oacute;n, cuando repite la lectura inicial";
 choices[45]= new Array();
 choices[45][0] = "Nada";
 choices[45][1] = "Una lectura sucia";
 choices[45][2] = "Una lectura fantasma";
 choices[45][3] = "Una escritura sucia";
 answers[45] = choices[45][2];
 units[45] = "58";
 comments[45] = "Id Pregunta: 5490. ";


//  Id pregunta: 5602 AÃ±o de creación de pregunta: 2003-01-01
 questions[46]= "47)  Indique cu&aacute;l no es un procedimiento o faceta procedural de los slots en marcos";
 choices[46]= new Array();
 choices[46][0] = "if asked";
 choices[46][1] = "if needed";
 choices[46][2] = "if required";
 choices[46][3] = "if added";
 answers[46] = choices[46][0];
 units[46] = "64";
 comments[46] = "Id Pregunta: 5602. ";


//  Id pregunta: 5630 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  Una soluci&oacute;n basada en Grid Computing ser&iacute;a adecuada para:";
 choices[47]= new Array();
 choices[47][0] = "Obtener rendimientos de pico";
 choices[47][1] = "Aplicaciones multiproceso";
 choices[47][2] = "Entornos de trabajo con productividad sostenida";
 choices[47][3] = "Ninguna de las anteriores";
 answers[47] = choices[47][2];
 units[47] = "45";
 comments[47] = "Id Pregunta: 5630. ";


//  Id pregunta: 5674 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  Indique la respuesta no correcta respecto a GIS modelo de datos r&aacute;ster.";
 choices[48]= new Array();
 choices[48][0] = "En el modelo de datos r&aacute;ster, la regi&oacute;n a modelizar se considera dividida seg&uacute;n una matriz o malla rectangular de celdas (p&iacute;xeles) de id&eacute;ntico tama&ntilde;o y de formageneralmente cuadrada.";
 choices[48][1] = "Como cr&iacute;ticas al modelo deben se&ntilde;alarse la carencia de informaci&oacute;n topol&oacute;gica acerca de las relaciones espaciales entre las entidades.";
 choices[48][2] = "En el modelo de datos r&aacute;ster permite una representaci&oacute;n expl&iacute;cita de entidades f&iacute;sicas del mundo real.";
 choices[48][3] = "Ofrece escasa eficiencia de cara a la representaci&oacute;n de la variabilidad espacial, al estar basado en una frecuencia de muestreo constante.";
 answers[48] = choices[48][2];
 units[48] = "67";
 comments[48] = "Id Pregunta: 5674. NULL";


//  Id pregunta: 5687 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  Se&ntilde;ale cual de los siguientes datos se encuentra en la zona p&uacute;blica del chip criptogr&aacute;fico del DNI electr&oacute;nico:";
 choices[49]= new Array();
 choices[49][0] = "Certificado de autenticaci&oacute;n";
 choices[49][1] = "Certificados de la autoridad de certificaci&oacute;n";
 choices[49][2] = "Datos biom&eacute;tricos";
 choices[49][3] = "Claves privadas del ciudadano";
 answers[49] = choices[49][1];
 units[49] = "74";
 comments[49] = "Id Pregunta: 5687. NULL";


//  Id pregunta: 5690 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  &iquest;Qui&eacute;n expide los certificados del DNI electr&oacute;nico?";
 choices[50]= new Array();
 choices[50][0] = "El Ministerio de Administraciones P&uacute;blicas";
 choices[50][1] = "La plataforma @firma";
 choices[50][2] = "La Entidad P&uacute;blica Red.es";
 choices[50][3] = "La Direcci&oacute;n General de la Polic&iacute;a";
 answers[50] = choices[50][3];
 units[50] = "74";
 comments[50] = "Id Pregunta: 5690. NULL";


//  Id pregunta: 5739 AÃ±o de creación de pregunta: 2009-01-01
 questions[51]= "52)  &iquest;Qu&eacute; caracter&iacute;sticas debe reunir, entre otras, la firma electr&oacute;nica reconocida?";
 choices[51]= new Array();
 choices[51][0] = "Tener una clave privada de 512 bits o superior";
 choices[51][1] = "Usar un certificado reconocido";
 choices[51][2] = "Usar el algoritmo RSA";
 choices[51][3] = "Usar certificados con periodo de validez superior a dos a&ntilde;os";
 answers[51] = choices[51][1];
 units[51] = "72";
 comments[51] = "Id Pregunta: 5739. ";


//  Id pregunta: 5753 AÃ±o de creación de pregunta: 2009-01-01
 questions[52]= "53)  &iquest;Por qu&eacute; el algoritmo DSA no sirve para cifrar?";
 choices[52]= new Array();
 choices[52][0] = "Porque al realizar funciones modulo x (donde x es uno de los valores p&uacute;blicos del sistema) no se puede realizar su inversi&oacute;n";
 choices[52][1] = "Porque realiza un hash del mensaje, por tanto no es recuperable";
 choices[52][2] = "Porque tendr&iacute;amos que enviar la clave privada";
 choices[52][3] = "No es cierto, el algoritmo DSA s&iacute; sirve para cifrar";
 answers[52] = choices[52][1];
 units[52] = "72";
 comments[52] = "Id Pregunta: 5753. ";


//  Id pregunta: 5780 AÃ±o de creación de pregunta: 2009-01-01
 questions[53]= "54)  Se&ntilde;ale c&oacute;mo se denomina el conjunto de reglas que deben de seguir los lenguajes de programaci&oacute;n para que sean compatibles con .NET se denomina:";
 choices[53]= new Array();
 choices[53][0] = "CLS";
 choices[53][1] = "MSIL";
 choices[53][2] = "Bytecode";
 choices[53][3] = "JIT";
 answers[53] = choices[53][0];
 units[53] = "59";
 comments[53] = "Id Pregunta: 5780. MAP 2008 A2";


//  Id pregunta: 5846 AÃ±o de creación de pregunta: 2009-01-01
 questions[54]= "55)  &iquest;Cual de los siguientes est&aacute;ndares de Work-flow est&aacute; definido por WfMC (Workflow Management Coalition)?";
 choices[54]= new Array();
 choices[54][0] = "BPML";
 choices[54][1] = "BPEL";
 choices[54][2] = "BPMN";
 choices[54][3] = "XPDL";
 answers[54] = choices[54][3];
 units[54] = "71";
 comments[54] = "Id Pregunta: 5846. MAP 2008 A1";


//  Id pregunta: 5870 AÃ±o de creación de pregunta: 2009-01-01
 questions[55]= "56)  En la plataforma de e-learning Moodle, indique cu&aacute;l de las siguientes expresiones NO es correcta:";
 choices[55]= new Array();
 choices[55][0] = "Es una plataforma de libre distribuci&oacute;n de e-learning";
 choices[55][1] = "Soporta el aprendizaje colaborativo en cualquier lugar y en cualquier momento";
 choices[55][2] = "Es una aplicaci&oacute;n Web que funciona en cualquier computador en el que se pueda ejecutar PHP";
 choices[55][3] = "S&oacute;lo funciona con el sistema operativo Linux";
 answers[55] = choices[55][3];
 units[55] = "66";
 comments[55] = "Id Pregunta: 5870. MAP 2008 A1";


//  Id pregunta: 6177 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  Indique la afirmaci&oacute;n falsa:";
 choices[56]= new Array();
 choices[56][0] = "HTTP es un protocolo sin estado.";
 choices[56][1] = "HTTP es un protocolo estandarizado por IETF.";
 choices[56][2] = "HTTP es un protocolo estandarizado por W3C.";
 choices[56][3] = "La especificaci&oacute;n del protocolo HTTP es la RFC 2616.";
 answers[56] = choices[56][2];
 units[56] = "69";
 comments[56] = "Id Pregunta: 6177. NULL";


//  Id pregunta: 6198 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l es el framework para aplicaciones desarrolladas con Spring, asociado con el control y la gesti&oacute;n de la seguridad?";
 choices[57]= new Array();
 choices[57][0] = "Spring Security";
 choices[57][1] = "JSF";
 choices[57][2] = "Struts";
 choices[57][3] = "Jbuilder";
 answers[57] = choices[57][0];
 units[57] = "60, 116";
 comments[57] = "Id Pregunta: 6198. TIC-B 2009 bloque desarrollo";


//  Id pregunta: 6352 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  &iquest;Cu&aacute;l de las siguientes sentencias relativas al software libre es verdadera?";
 choices[58]= new Array();
 choices[58][0] = "El software libre es por definici&oacute;n gratuito";
 choices[58][1] = "Es lo mismo que el software de fuentes abiertas";
 choices[58][2] = "No existe software libre para Windows";
 choices[58][3] = "Ninguna de las anteriores";
 answers[58] = choices[58][3];
 units[58] = "61";
 comments[58] = "Id Pregunta: 6352. ";


//  Id pregunta: 6507 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  De que tarea NO se encarga el n&uacute;cleo independiente del kernel de UNIX:";
 choices[59]= new Array();
 choices[59][0] = "Interrupciones";
 choices[59][1] = "Ejecuci&oacute;n de procesos";
 choices[59][2] = "Planificar los procesos para su realizaci&oacute;n por la CPU";
 choices[59][3] = "Asignar memoria principal a un proceso en ejecuci&oacute;n";
 answers[59] = choices[59][0];
 units[59] = "53";
 comments[59] = "Id Pregunta: 6507. NULL";


//  Id pregunta: 6590 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  La realizaci&oacute;n de la auditor&iacute;a, dentro de las medidas de seguridad de nivel medio, de acuerdo al RD 1720/2007 debe llevarse a cabo:";
 choices[60]= new Array();
 choices[60][0] = "Por personal externo";
 choices[60][1] = "Por personal interno a la organizaci&oacute;n";
 choices[60][2] = "Por profesionales en materia de protecci&oacute;n de datos";
 choices[60][3] = "Todas las respuestas anteriores son incorrectas";
 answers[60] = choices[60][2];
 units[60] = "75";
 comments[60] = "Id Pregunta: 6590. NULL";


//  Id pregunta: 7174 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  A la hora de atacar un texto cifrado, el m&eacute;todo que explota las debilidades del algoritmo de cifrado o sus puntos menos fuertes para intentar deducir un texto nativo o deducir la clave de cifrado se denomina:";
 choices[61]= new Array();
 choices[61][0] = "Ataque por Fuerza Bruta";
 choices[61][1] = "CriptoAn&aacute;lisis";
 choices[61][2] = "An&aacute;lisis Diferencia de Cifrado";
 choices[61][3] = "CriptoCifrado";
 answers[61] = choices[61][1];
 units[61] = "72";
 comments[61] = "Id Pregunta: 7174. Examen TIC B 2009";


//  Id pregunta: 8261 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  El empleo de redes neuronales para el reconocimiento de caracteres:";
 choices[62]= new Array();
 choices[62][0] = "Usa mecanismos basados en l&oacute;gica borrosa.";
 choices[62][1] = "No permite explicar f&aacute;cilmente las razones por las que se obtiene un determinado resultado.";
 choices[62][2] = "Se basa en la obtenci&oacute;n de un vector de caracter&iacute;sticas";
 choices[62][3] = "Hace que el reconocimiento se vea m&aacute;s afectado por defectos de la imagen que otros m&eacute;todos como el de comparaci&oacute;n de matrices.";
 answers[62] = choices[62][1];
 units[62] = "63,64";
 comments[62] = "Id Pregunta: 8261. Examen TIC A1 2010";


//  Id pregunta: 8411 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  Indique la respuesta INCORRECTA sobre el protocolo SMB: ";
 choices[63]= new Array();
 choices[63][0] = "Protocolo de red que permite compartir archivos e impresoras (entre otras cosas) entre nodos de una red ";
 choices[63][1] = "Microsoft a&ntilde;adi&oacute; algunas extensiones al protocolo y lo renombr&oacute; como CIFS (Common Internet File Syslem).  ";
 choices[63][2] = "Las iniciales SMB responden a Service Message Block ";
 choices[63][3] = "SAMBA es una implementaci&oacute;n libre del protocolo para entornos GNU/Linux y Unix.";
 answers[63] = choices[63][2];
 units[63] = "52";
 comments[63] = "Id Pregunta: 8411. Examen TIC A2 2010";


//  Id pregunta: 8472 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  El PID 0 se asigna en Unix/Linux a:";
 choices[64]= new Array();
 choices[64][0] = "Swapper";
 choices[64][1] = "Init";
 choices[64][2] = "Page daemon";
 choices[64][3] = "Load";
 answers[64] = choices[64][0];
 units[64] = "53,54";
 comments[64] = "Id Pregunta: 8472. Analista Ayto. Madrid 2010";


//  Id pregunta: 8639 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  Si tenemos las dependencias funcionales (A, B) -&gt; C, B -&gt; D y la siguiente relaci&oacute;n (A, B, C, D) donde (A, B) es la clave candidata. &iquest;Cu&aacute;l seria el resultado de aplicar la 2&ordf; forma normal?";
 choices[65]= new Array();
 choices[65][0] = "(A, B, C), (A, B, D).";
 choices[65][1] = "(A, B, C), (B, D).";
 choices[65][2] = "(A, B, C),  (A, D).";
 choices[65][3] = "Ya est&aacute; en 2FN.";
 answers[65] = choices[65][1];
 units[65] = "57, 58";
 comments[65] = "Id Pregunta: 8639. Examen TIC A2 2010 interna";


//  Id pregunta: 8762 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  El grado de multiprogramaci&oacute;n en un sistema operativo corresponde a:";
 choices[66]= new Array();
 choices[66][0] = "El n&uacute;mero m&aacute;ximo de programas que realizan operaciones de E/S.";
 choices[66][1] = "El n&uacute;mero m&aacute;ximo de archivos en un directorio";
 choices[66][2] = "El n&uacute;mero m&aacute;ximo de procesos en memoria principal";
 choices[66][3] = "El n&uacute;mero m&aacute;ximo de programas que comparten variables";
 answers[66] = choices[66][2];
 units[66] = "52";
 comments[66] = "Id Pregunta: 8762. Examen TIC A2 2010 interna";


//  Id pregunta: 8775 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  &iquest;Cu&aacute;l de los siguientes comandos se utilizan para crear un cd boot de una instalaci&oacute;n de Linux?";
 choices[67]= new Array();
 choices[67][0] = "mkboot disk.";
 choices[67][1] = "bootfp disk.";
 choices[67][2] = "ww and rawrite.";
 choices[67][3] = "dd and rawrite.";
 answers[67] = choices[67][3];
 units[67] = "53";
 comments[67] = "Id Pregunta: 8775. Examen UPM A2 2011";


//  Id pregunta: 8925 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  &iquest;C&oacute;mo se denominan las dos series de datos de uso civil emitidas continuamente por cada sat&eacute;lite del sistema GPS?";
 choices[68]= new Array();
 choices[68][0] = "Almanaque y efem&eacute;rides.";
 choices[68][1] = "Multipath y atenuaci&oacute;n.";
 choices[68][2] = "Triangulaci&oacute;n y correcci&oacute;n.";
 choices[68][3] = "Latitud y longitud.";
 answers[68] = choices[68][0];
 units[68] = "67";
 comments[68] = "Id Pregunta: 8925. Operador Ayto. Madrid 2010";


//  Id pregunta: 8983 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  &iquest;Qu&eacute; es Windows PowerShell?";
 choices[69]= new Array();
 choices[69][0] = "El interfaz del sistema de gesti&oacute;n de energ&iacute;a de Windows";
 choices[69][1] = "Una interfaz de comandos y un lenguaje de scripting, integrado en .NET y orientado a los administradores de sistemas Windows";
 choices[69][2] = "&quot;Una versi&oacute;n para Windows del comando &quot;&quot;ps&quot;&quot; de Unix&quot;";
 choices[69][3] = "Nada de lo anterior";
 answers[69] = choices[69][1];
 units[69] = "56";
 comments[69] = "Id Pregunta: 8983. ";


//  Id pregunta: 9124 AÃ±o de creación de pregunta: 2013-01-01
 questions[70]= "71)  &iquest;Cu&aacute;les son aplicaciones generales para la computaci&oacute;n GRID?";
 choices[70]= new Array();
 choices[70][0] = "S&uacute;per computaci&oacute;n distribuida.";
 choices[70][1] = "Sistemas distribuidos en tiempo real";
 choices[70][2] = "Entornos virtuales de colaboraci&oacute;n (Tele-inmersi&oacute;n)";
 choices[70][3] = "Todas las respuetas anteriores son v&aacute;lidas";
 answers[70] = choices[70][3];
 units[70] = "45";
 comments[70] = "Id Pregunta: 9124. ";


//  Id pregunta: 9165 AÃ±o de creación de pregunta: 2013-01-01
 questions[71]= "72)  El est&aacute;ndar m&aacute;s extendido en el campo de los Sistemas de Informaci&oacute;n Geogr&aacute;fica para los servicios de cat&aacute;logo es:";
 choices[71]= new Array();
 choices[71][0] = "ISO 23950";
 choices[71][1] = "ISO 19125";
 choices[71][2] = "ISO 19115";
 choices[71][3] = "Ninguno de los anteriores se refiere a un est&aacute;ndar de servicio de cat&aacute;logo";
 answers[71] = choices[71][0];
 units[71] = "67";
 comments[71] = "Id Pregunta: 9165. NULL";


//  Id pregunta: 9195 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  El Texto Refundido de la Ley de Propiedad Intelectual establece que la duraci&oacute;n de la protecci&oacute;n de los derechos de explotaci&oacute;n sobre los programas de ordenador se extiende como m&aacute;ximo a:";
 choices[72]= new Array();
 choices[72][0] = "70 a&ntilde;os computados desde el d&iacute;a siguiente a la divulgaci&oacute;n l&iacute;cita del programa, si el autor es una persona jur&iacute;dica.";
 choices[72][1] = "40 a&ntilde;os desde el 1 de enero del a&ntilde;o siguiente a la divulgaci&oacute;n l&iacute;cita del programa o a su creaci&oacute;n si no se hubiera divulgado.";
 choices[72][2] = "toda la vida del autor y 70 a&ntilde;os despu&eacute;s de su muerte, si el autor es una persona f&iacute;sica.";
 choices[72][3] = "40 a&ntilde;os desde el 1 de enero del a&ntilde;o siguiente a la divulgaci&oacute;n l&iacute;cita del programa, cualquiera que sea la presonalidad del autor.";
 answers[72] = choices[72][2];
 units[72] = "36";
 comments[72] = "Id Pregunta: 9195. ";


//  Id pregunta: 9196 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  Cuando un trabajador asalariado crea un programa de ordenador, en el ejercicio de sus funciones:";
 choices[73]= new Array();
 choices[73][0] = "Los derechos de explotaci&oacute;n pertenecen al trabajador.";
 choices[73][1] = "Los derechos de explotaci&oacute;n pertenecen al empresario.";
 choices[73][2] = "Los derechos morales pertenecen al trabajador";
 choices[73][3] = "Los derechos morales pertenecen al empresario";
 answers[73] = choices[73][2];
 units[73] = "36";
 comments[73] = "Id Pregunta: 9196. ";


//  Id pregunta: 9239 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  &iquest;Qu&eacute; hace ifconfig -a?";
 choices[74]= new Array();
 choices[74][0] = "Instala Ubuntu sobre Windows.";
 choices[74][1] = "Muestra informaci&oacute;n sobre los diversos interfaces de red.";
 choices[74][2] = "Inicia la interfaz de red eth0.";
 choices[74][3] = "Detiene las interfaces de red.";
 answers[74] = choices[74][1];
 units[74] = "53";
 comments[74] = "Id Pregunta: 9239. ";


//  Id pregunta: 9250 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  &iquest;D&oacute;nde se almacena la informaci&oacute;n de inicio de sesi&oacute;n para los usuarios locales?";
 choices[75]= new Array();
 choices[75][0] = "En el DA de Microsoft.";
 choices[75][1] = "En la SAM (Security Access Manager)";
 choices[75][2] = "En una archivo de texto del sistema cifrado.";
 choices[75][3] = "En la COM (Component Object Model)";
 answers[75] = choices[75][1];
 units[75] = "56";
 comments[75] = "Id Pregunta: 9250. ";


//  Id pregunta: 9254 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  &iquest;Qu&eacute; es VAD?";
 choices[76]= new Array();
 choices[76][0] = "Virtual Address Descriptors";
 choices[76][1] = "Virtual Allocator Devices";
 choices[76][2] = "Descriptor de direcciones asignadas.";
 choices[76][3] = "No existe.";
 answers[76] = choices[76][0];
 units[76] = "56";
 comments[76] = "Id Pregunta: 9254. ";


//  Id pregunta: 9257 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  &iquest;Qu&eacute; incluye Windows 8?";
 choices[77]= new Array();
 choices[77][0] = "Una nueva pantalla de Inicio.";
 choices[77][1] = "Una nueva tienda de aplicaciones.";
 choices[77][2] = "Su intefaz de usuario se ha modificado para hacerlo m&aacute;s adecuado para pantallas t&aacute;ctiles.";
 choices[77][3] = "Todas son correctas.";
 answers[77] = choices[77][3];
 units[77] = "56";
 comments[77] = "Id Pregunta: 9257. ";


//  Id pregunta: 9268 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  &iquest;C&oacute;mo se llama la conexi&oacute;n que recientemente ha lanzado Intel que supera en velocidad a USB 3.0, basada en LightPeak? ";
 choices[78]= new Array();
 choices[78][0] = "Thundercat";
 choices[78][1] = "LightFire";
 choices[78][2] = "Thunderbolt";
 choices[78][3] = "USB 4.0 ";
 answers[78] = choices[78][0];
 units[78] = "47";
 comments[78] = "Id Pregunta: 9268. Examen TICA2-2011";


//  Id pregunta: 9269 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  Los dispositivos f&iacute;sicos que se utilizan para conectar servidores a trav&eacute;s de una red t&iacute;picamente de fibra con sus dispositivos de almacenamiento, se llaman:";
 choices[79]= new Array();
 choices[79][0] = "LUN";
 choices[79][1] = "ESX";
 choices[79][2] = "HBA";
 choices[79][3] = "IDS";
 answers[79] = choices[79][2];
 units[79] = "48";
 comments[79] = "Id Pregunta: 9269. Examen TICA2-2011";


//  Id pregunta: 9602 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  La comunicaci&oacute;n s&iacute;ncrona entre procesos UNIX tiene lugar mediante...";
 choices[80]= new Array();
 choices[80][0] = "Pipes";
 choices[80][1] = "Signals";
 choices[80][2] = "Events";
 choices[80][3] = "Sem&aacute;foros";
 answers[80] = choices[80][0];
 units[80] = "53";
 comments[80] = "Id Pregunta: 9602. ";


//  Id pregunta: 9629 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  En el sistema operativo Linux, &iquest;cu&aacute;l de las siguientes opciones busca la palabra 'libro' dentro de ficheros?";
 choices[81]= new Array();
 choices[81][0] = "find -type f | xwygs grep 'libro' ";
 choices[81][1] = "find -type f | xaygs grep 'libro'";
 choices[81][2] = "find -type f | xargs grep 'libro'";
 choices[81][3] = "find -type f | xargp grep 'libro'";
 answers[81] = choices[81][2];
 units[81] = "54";
 comments[81] = "Id Pregunta: 9629. Examen TIC A2 2013 - Las comillas en 'libro' son dobles";


//  Id pregunta: 9638 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  &iquest;Qu&eacute; se conoce como CPU Throttling en IIS 8.0?";
 choices[82]= new Array();
 choices[82][0] = "A reducir autom&aacute;ticamente la frecuencia de trabajo de la CPU para evitar el calentamiento de la m&aacute;quina";
 choices[82][1] = "A la asignaci&oacute;n de CPU a cada proceso en un entorno multiprocesador  ";
 choices[82][2] = "A los fallos de CPU ante una sobrecarga de trabajo";
 choices[82][3] = "A la limitaci&oacute;n autom&aacute;tica de los recursos de CPU entre los tenants del sistema";
 answers[82] = choices[82][3];
 units[82] = "56";
 comments[82] = "Id Pregunta: 9638. La respuesta A es el concepto original de CPU throttling, la D es lo que se entiende en un entorno de hosting";


//  Id pregunta: 9685 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  Las proyecciones (Georreferenciaci&oacute;n Directa):";
 choices[83]= new Array();
 choices[83][0] = "Son proyecciones cil&iacute;ndricas: Proyecci&oacute;n de Mercator, Proyecci&oacute;n de Peter, Proyecci&oacute;n ortogr&aacute;fica y la Proyecci&oacute;n conforme de Lambert.";
 choices[83][1] = "Son proyecciones azimutales: proyecci&oacute;n azimutal, proyecci&oacute;n azimutal de Lambert, proyecci&oacute;n gnom&oacute;nica y proyecci&oacute;n azimutal m&uacute;ltiple.";
 choices[83][2] = "Son proyecciones c&oacute;nicas: proyecci&oacute;n c&oacute;nica simple, proyecci&oacute;n conforme de Lambert y proyecci&oacute;n c&oacute;nica m&uacute;ltiple. ";
 choices[83][3] = "Son proyecciones estereogr&aacute;ficas: proyecci&oacute;n estereogr&aacute;fica, proyecci&oacute;n ortogr&aacute;fica, proyecciones modificadas y proyecci&oacute;n conforme gnom&oacute;nica. ";
 answers[83] = choices[83][2];
 units[83] = "67";
 comments[83] = "Id Pregunta: 9685. NULL";


//  Id pregunta: 9689 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  Un Datamart:";
 choices[84]= new Array();
 choices[84][0] = "Es una Base de Datos.";
 choices[84][1] = "Es m&aacute;s grande (en volumen de datos) que un Datawarehouse.";
 choices[84][2] = "Usa Sistemas de Gesti&oacute;n de Base de Datos multidimensionales.";
 choices[84][3] = "Todas son falsas.";
 answers[84] = choices[84][2];
 units[84] = "68";
 comments[84] = "Id Pregunta: 9689. ";


//  Id pregunta: 10278 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Se&ntilde;ale el m&eacute;todo de inferencia no aplicable a marcos";
 choices[85]= new Array();
 choices[85][0] = "Deducci&oacute;n de valores de slots";
 choices[85][1] = "Actualizaci&oacute;n de valores de slots";
 choices[85][2] = "Equiparaci&oacute;n";
 choices[85][3] = "Emparejamiento";
 answers[85] = choices[85][3];
 units[85] = "64";
 comments[85] = "Id Pregunta: 10278. NULL";


//  Id pregunta: 10285 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  RMAN es:";
 choices[86]= new Array();
 choices[86][0] = "Una especificaci&oacute;n de monitorizaci&oacute;n remota de IETF.";
 choices[86][1] = "Una invocaci&oacute;n de m&eacute;todos remotos utilizada en Java.";
 choices[86][2] = "Una herramienta de Oracle que permite hacer backups online de bases de datos.";
 choices[86][3] = "Una herramienta de IBM que permite realizar administraci&oacute;n remota de bases de datos.";
 answers[86] = choices[86][2];
 units[86] = "58";
 comments[86] = "Id Pregunta: 10285. TIC A2, libre, examen 2013";


//  Id pregunta: 10472 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  Respecto a los certificados X.509 v3:";
 choices[87]= new Array();
 choices[87][0] = "Las extensiones se clasifican en cr&iacute;ticas, no criticas y recomendables.";
 choices[87][1] = "Las extensiones no cr&iacute;ticas pueden ignorarse si no se pueden procesar o se decide no hacerlo.";
 choices[87][2] = "Un certificado s&oacute;lo puede contener una extensi&oacute;n de un determinado tipo.";
 choices[87][3] = "No pueden definirse extensiones para uso privado.";
 answers[87] = choices[87][1];
 units[87] = "73";
 comments[87] = "Id Pregunta: 10472. ";


//  Id pregunta: 10625 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  Se&ntilde;ale la respuesta correcta:";
 choices[88]= new Array();
 choices[88][0] = "Un proceso es equivalente a un hilo de ejecuci&oacute;n.";
 choices[88][1] = "Los hilos no pueden compartir entre ellos datos o espacios de direcciones.";
 choices[88][2] = "Se tarda m&aacute;s en eliminar un hilo que un proceso.";
 choices[88][3] = "Tanto los procesos como los hilos pueden crear sus propios hijos.";
 answers[88] = choices[88][3];
 units[88] = "52";
 comments[88] = "Id Pregunta: 10625. ";


//  Id pregunta: 10826 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  Se&ntilde;ale en qu&eacute; nivel de aislamiento, definido en ANSI/ISO SQL, puede ocurrir el problema de lecturas sucias en un sistema gestor de bases de datos relacional (SGDBR):";
 choices[89]= new Array();
 choices[89][0] = "Serializable.";
 choices[89][1] = "Repeatable Read (lecturas repetibles).";
 choices[89][2] = "Read Committed (lecturas comprometidas).";
 choices[89][3] = "Read Uncommitted (lecturas no comprometidas).";
 answers[89] = choices[89][3];
 units[89] = "57, 58";
 comments[89] = "Id Pregunta: 10826. Examen GSI 2014";


//  Id pregunta: 10928 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  La facturaci&oacute;n electr&oacute;nica ser&aacute; obligatoria para las Administraciones P&uacute;blicas en:";
 choices[90]= new Array();
 choices[90][0] = "Enero de 2015.";
 choices[90][1] = "Enero de 2016.";
 choices[90][2] = "Diciembre de 2016.";
 choices[90][3] = "Diciembre de 2015.";
 answers[90] = choices[90][0];
 units[90] = "70";
 comments[90] = "Id Pregunta: 10928. TIC A1 AGE 2014";


//  Id pregunta: 10957 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Los certificados electr&oacute;nicos contenidos en el DNI electr&oacute;nico tienen una vigencia de:";
 choices[91]= new Array();
 choices[91][0] = "30 meses.";
 choices[91][1] = "48 meses.";
 choices[91][2] = "24 meses.";
 choices[91][3] = "36 meses.";
 answers[91] = choices[91][0];
 units[91] = "74";
 comments[91] = "Id Pregunta: 10957. TIC A1 AGE 2014";


//  Id pregunta: 10977 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  En referencia al software &ldquo;Windows Mobile Device Center&rdquo;, se&ntilde;ale la respuesta correcta:";
 choices[92]= new Array();
 choices[92][0] = "Es un software de sincronizaci&oacute;n precursor del ActiveSync.";
 choices[92][1] = "Ofrece un controlador de base incorporado a la interfaz de dispositivos en el explorador de Windows.";
 choices[92][2] = "Permite que un dispositivo m&oacute;vil se sincronice con un pc o un servidor que ejecute Microsoft Exchange Server.";
 choices[92][3] = "Es un programa de sincronizaci&oacute;n desarrollado para su uso con sistemas operativos Linux.";
 answers[92] = choices[92][2];
 units[92] = "56";
 comments[92] = "Id Pregunta: 10977. TIC A1 AGE 2014";


//  Id pregunta: 10986 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  El 10 de enero de 2013 se public&oacute; una vulnerabilidad de d&iacute;a cero en Java 7 Update 10 y versiones anteriores de Java 7 que permit&iacute;a a un atacante escalar los privilegios de ejecuci&oacute;n de un applet. Se&ntilde;ale la opci&oacute;n INCORRECTA:";
 choices[93]= new Array();
 choices[93][0] = "Las vulnerabilidades de seguridad de Java han llevado a establecer un periodo mensual, los terceros viernes de cada mes, para los Oracle Java SE Critical Patch Updates.";
 choices[93][1] = "Las vulnerabilidades de seguridad de Java han llevado a Oracle a recomendar y facilitar la desactivaci&oacute;n de Java a partir de la versi&oacute;n 7 Update 10.";
 choices[93][2] = "Las vulnerabilidades de seguridad de Java han provocado que Oracle recomiende la desinstalaci&oacute;n de Java 6 de todos los equipos.";
 choices[93][3] = "Las vulnerabilidades de seguridad de Java han provocado que sea obligatorio firmar con un certificado reconocido los applets a partir de Java SE 7u21.";
 answers[93] = choices[93][0];
 units[93] = "60";
 comments[93] = "Id Pregunta: 10986. TIC A1 AGE 2014";


//  Id pregunta: 11280 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares de informaci&oacute;n geogr&aacute;fica NO corresponde a un servicio de visualizaci&oacute;n?";
 choices[94]= new Array();
 choices[94][0] = "WFS";
 choices[94][1] = "WMS";
 choices[94][2] = "WMTS";
 choices[94][3] = "WCS";
 answers[94] = choices[94][0];
 units[94] = "67";
 comments[94] = "Id Pregunta: 11280. ";


//  Id pregunta: 11507 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Cu&aacute;l de las siguientes afirmaciones hace referencia al tipo de Cuadro de Mandos Balance Scorecard?";
 choices[95]= new Array();
 choices[95][0] = "Muestra informaci&oacute;n a nivel estrat&eacute;gico, orientada a la consecuci&oacute;n de objetivos.";
 choices[95][1] = "&Uacute;nicamente utilizan indicadores clave de rendimiento (KPI)";
 choices[95][2] = "No utilizan indicadores orientados a objetivos (KGI).";
 choices[95][3] = "Todas las anteriores.";
 answers[95] = choices[95][0];
 units[95] = "65";
 comments[95] = "Id Pregunta: 11507. NULL";


//  Id pregunta: 11510 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Cu&aacute;l de los siguientes sistemas de Big Data es utilizado por el Red Social Twitter?";
 choices[96]= new Array();
 choices[96][0] = "Hive";
 choices[96][1] = "Cassandra";
 choices[96][2] = "Hbase";
 choices[96][3] = "ZoneKeeper";
 answers[96] = choices[96][1];
 units[96] = "68";
 comments[96] = "Id Pregunta: 11510. NULL";


//  Id pregunta: 11527 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Las distribuciones Debian o Ubuntu, entre otras, permiten instalar habitualmente nuevas utilidades a partir de ficheros .deb. Indique cu&aacute;l de las siguientes sentencias Linux es incorrecta:";
 choices[97]= new Array();
 choices[97][0] = "apt-update";
 choices[97][1] = "dpkg-reconfigure";
 choices[97][2] = "apt-cache search xorg";
 choices[97][3] = "dpkg";
 answers[97] = choices[97][0];
 units[97] = "53";
 comments[97] = "Id Pregunta: 11527. Examen TIC Servicio Extreme&ntilde;o de Salud 2014";


//  Id pregunta: 11609 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  El n&uacute;mero m&iacute;nimo de discos necesarios en RAID 6 es:";
 choices[98]= new Array();
 choices[98][0] = "2";
 choices[98][1] = "3";
 choices[98][2] = "4";
 choices[98][3] = "5";
 answers[98] = choices[98][2];
 units[98] = "48";
 comments[98] = "Id Pregunta: 11609. ";


//  Id pregunta: 11626 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Seg&uacute;n la Ley 25/2013:";
 choices[99]= new Array();
 choices[99][0] = "Las facturas electr&oacute;nicas que se remitan a las Administraciones P&uacute;blicas deber&aacute;n tener un formato estructurado y estar firmadas con firma electr&oacute;nica avanzada basada en un certificado reconocido.";
 choices[99][1] = "Las Entidades Locales podr&aacute;n adherirse a la utilizaci&oacute;n del Punto general de entrada de facturas electr&oacute;nicas que proporcione su Diputaci&oacute;n, Comunidad Aut&oacute;noma o el Estado.";
 choices[99][2] = "El Punto general de entrada de facturas electr&oacute;nicas proporcionar&aacute; un servicio autom&aacute;tico de puesta a disposici&oacute;n o de remisi&oacute;n electr&oacute;nica de las mismas a las oficinas contables competentes para su registro.";
 choices[99][3] = "Todas las anteriores son correctas";
 answers[99] = choices[99][3];
 units[99] = "70";
 comments[99] = "Id Pregunta: 11626. ";


