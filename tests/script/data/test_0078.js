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

//  Id pregunta: 77 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Qu&eacute; par&aacute;metro no interviene directamente en evaluar el rendimiento de un sistema?:";
 choices[0]= new Array();
 choices[0][0] = "Tiempo de respuesta";
 choices[0][1] = "Productividad o throughput";
 choices[0][2] = "Tipo de procesador";
 choices[0][3] = "Tasa de utilizaci&oacute;n de CPU";
 answers[0] = choices[0][2];
 units[0] = "35";
 comments[0] = "Id Pregunta: 77. NULL";


//  Id pregunta: 81 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Qu&eacute; se entiende por  'throughput'?:";
 choices[1]= new Array();
 choices[1][0] = "Es la cantidad de trabajo &uacute;til ejecutado por unidad de tiempo en un entorno de carga determinado";
 choices[1][1] = "Es la m&aacute;xima cantidad de trabajo &uacute;til que se puede realizar por unidad de tiempo en un entorno de carga determinado";
 choices[1][2] = "Es el tiempo transcurrido entre la entrega de un trabajo o una transacci&oacute;n al sistema y la recepci&oacute;n del resultado o la respuesta";
 choices[1][3] = "Ninguna de las respuestas anteriores es cierta";
 answers[1] = choices[1][0];
 units[1] = "35";
 comments[1] = "Id Pregunta: 81. NULL";


//  Id pregunta: 250 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  Entre las alternativas al HALON 1301 no se encuentra:";
 choices[2]= new Array();
 choices[2][0] = "FM-200";
 choices[2][1] = "Argonite";
 choices[2][2] = "Antifire";
 choices[2][3] = "Argonfire";
 answers[2] = choices[2][2];
 units[2] = "33";
 comments[2] = "Id Pregunta: 250. ";


//  Id pregunta: 268 AÃ±o de creación de pregunta: 2007-01-01
 questions[3]= "4)  Indicar la afirmaci&oacute;n correcta sobre MAGERIT:";
 choices[3]= new Array();
 choices[3][0] = "Magerit se ha estructurado en tres libros: &quot;M&eacute;todo&quot;, &quot;Cat&aacute;logo de Elementos&quot; y &quot;Gu&iacute;a de T&eacute;cnicas&quot;";
 choices[3][1] = "la metodolog&iacute;a se describe desde tres &aacute;ngulos";
 choices[3][2] = "Entre t&eacute;cnicas descritas en la Gu&iacute;a de T&eacute;cnicas se encuentra: el an&aacute;lisis mediante tablas, an&aacute;lisis algor&iacute;tmico, &aacute;rboles de ataque, y la valoraci&oacute;n Delphi.";
 choices[3][3] = "Las tres anteriores son correctas";
 answers[3] = choices[3][3];
 units[3] = "33";
 comments[3] = "Id Pregunta: 268. ";


//  Id pregunta: 569 AÃ±o de creación de pregunta: 2006-01-01
 questions[4]= "5)  Qu&eacute; se entiende como conocimiento t&aacute;cito";
 choices[4]= new Array();
 choices[4][0] = "Es un tipo de conocimiento formalizado, necesario para realizar una correcta &quot;gesti&oacute;n del conocimiento&quot; en las organizaciones";
 choices[4][1] = "Es el conocimiento objetivo y racional que puede ser expresado en palabras, oraciones, n&uacute;meros o f&oacute;rmulas, en general independiente de contexto alguno";
 choices[4][2] = "Es conocimiento altamente personal y f&iacute;cilmente transferible o comunicable. ";
 choices[4][3] = "Es aquel que se encuentra en la mente de las personas producto de la experiencia, la sabidur&iacute;a, la creatividad";
 answers[4] = choices[4][3];
 units[4] = "22";
 comments[4] = "Id Pregunta: 569. ";


//  Id pregunta: 637 AÃ±o de creación de pregunta: 2006-01-01
 questions[5]= "6)  Respecto a los m&eacute;todos del Payback, VAN y TIR, la respuesta correcta es:";
 choices[5]= new Array();
 choices[5][0] = "El m&eacute;todo del Payback sirve para determinar la rentabilidad exigida a una inversi&oacute;n.";
 choices[5][1] = "Los m&eacute;todos del VAN y el TIR siempre conducen a resultados coincidentes.";
 choices[5][2] = "Los m&eacute;todos del Payback y el VAN son similares (comparan los flujos de caja con la inversi&oacute;n inicial), pero el Payback no tiene en cuenta el cambio del valor del dinero con el tiempo y el VAN s&iacute;.";
 choices[5][3] = "El criterio de rentabilidad del TIR es: rentabilidad exigida &gt; TIR =&gt; inversi&oacute;n rentable.";
 answers[5] = choices[5][2];
 units[5] = "38";
 comments[5] = "Id Pregunta: 637. ";


//  Id pregunta: 687 AÃ±o de creación de pregunta: 2005-01-01
 questions[6]= "7)  La &uacute;nica empresa u organismo en Espa&ntilde;a que proporciona certificados digitales es la FNMT:";
 choices[6]= new Array();
 choices[6][0] = "Es completamente cierto";
 choices[6][1] = "Es cierto para certificados servidor";
 choices[6][2] = "Es completamente falso";
 choices[6][3] = "Es cierto s&oacute;lo para certificados de empleado p&uacute;blico, sede electr&oacute;nica y sello electr&oacute;nico";
 answers[6] = choices[6][2];
 units[6] = "73";
 comments[6] = "Id Pregunta: 687. ";


//  Id pregunta: 730 AÃ±o de creación de pregunta: 2004-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes arquitecturas RAID implementa &quot;mirroring&quot; o espejo de discos?";
 choices[7]= new Array();
 choices[7][0] = "RAID 1";
 choices[7][1] = "RAID 0";
 choices[7][2] = "RAID 2";
 choices[7][3] = "RAID 5";
 answers[7] = choices[7][0];
 units[7] = "48";
 comments[7] = "Id Pregunta: 730. Examen TIC MAP B 2004";


//  Id pregunta: 826 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;C&oacute;mo se llama al m&oacute;dulo, del cual una &uacute;nica copia cargada en memoria puede ser utilizada simult&aacute;neamente por  varios usuarios?:";
 choices[8]= new Array();
 choices[8][0] = "M&oacute;dulo concurrente";
 choices[8][1] = "M&oacute;dulo compartido";
 choices[8][2] = "M&oacute;dulo reentrante";
 choices[8][3] = "M&oacute;dulo reusable";
 answers[8] = choices[8][2];
 units[8] = "52";
 comments[8] = "Id Pregunta: 826. ";


//  Id pregunta: 874 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l de los siguientes sistemas de cifrado no es una alternativa aceptable para DES (Data Encryption Standard)?:";
 choices[9]= new Array();
 choices[9][0] = "RC-4";
 choices[9][1] = "IDEA";
 choices[9][2] = "Triple DES";
 choices[9][3] = "RSA";
 answers[9] = choices[9][3];
 units[9] = "72";
 comments[9] = "Id Pregunta: 874. ";


//  Id pregunta: 1151 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  En una operaci&oacute;n de acceso directo a memoria, el procesador debe enviar distintas informaciones necesarias para realizar la operaci&oacute;n. Indique cu&aacute;l de las siguientes alternativas se refiere a una informaci&oacute;n que no es necesaria en una operaci&oacute;n de DMA:";
 choices[10]= new Array();
 choices[10][0] = "Direcci&oacute;n de memoria";
 choices[10][1] = "Tama&ntilde;o de las palabras";
 choices[10][2] = "Sentido de la operaci&oacute;n";
 choices[10][3] = "Identificaci&oacute;n del perif&eacute;rico";
 answers[10] = choices[10][1];
 units[10] = "52";
 comments[10] = "Id Pregunta: 1151. ";


//  Id pregunta: 1191 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Indique cu&aacute;l de las siguientes expresiones corresponde a una sentencia correcta de consulta en SQL:";
 choices[11]= new Array();
 choices[11][0] = "SELECT Nombre, Apellido FROM PERSONAS IF Edad &gt;25";
 choices[11][1] = "SHOW Nombre, Apellido.FROM PERSONAS FOR Edad &gt;25";
 choices[11][2] = "SELECT Nombre, Apellido FROM PERSONAS WHERE Edad&gt; 25";
 choices[11][3] = "DISPLAY Nombre, Apellido FROM PERSONAS WHERE Edad &gt;25";
 answers[11] = choices[11][2];
 units[11] = "58";
 comments[11] = "Id Pregunta: 1191. ";


//  Id pregunta: 1471 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Los servicios interactivos multimedia se caracterizan por ser:";
 choices[12]= new Array();
 choices[12][0] = "bidereccionales sim&eacute;tricos";
 choices[12][1] = "bidireccionales asim&eacute;tricos con mayor volumen del cliente al servidor";
 choices[12][2] = "bidireccionales asim&eacute;tricos con mayor volumen del servidor al cliente";
 choices[12][3] = "unidireccionales del servidor al cliente";
 answers[12] = choices[12][2];
 units[12] = "50";
 comments[12] = "Id Pregunta: 1471. ";


//  Id pregunta: 1504 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Los d&iacute;gitos de un teclado DTMF son:";
 choices[13]= new Array();
 choices[13][0] = "los n&uacute;meros del 0 al 9";
 choices[13][1] = "los n&uacute;meros del 0 al 9 m&aacute;s la tecla '*'";
 choices[13][2] = "los n&uacute;meros del 0 al 9 m&aacute;s la tecla '#'";
 choices[13][3] = "los n&uacute;meros del 0 al 9 m&aacute;s las teclas '*' y '#'";
 answers[13] = choices[13][3];
 units[13] = "47";
 comments[13] = "Id Pregunta: 1504. ";


//  Id pregunta: 1517 AÃ±o de creación de pregunta: 2003-01-01
 questions[14]= "15)  Al bloque de sentencias PL/SQL almacenado en el diccionario de datos, para ser invocado desde las aplicaciones, se denomina:";
 choices[14]= new Array();
 choices[14][0] = "Procedimiento";
 choices[14][1] = "Producto.";
 choices[14][2] = "Secuencia.";
 choices[14][3] = "Segmento.";
 answers[14] = choices[14][0];
 units[14] = "58";
 comments[14] = "Id Pregunta: 1517. Junta Andaluc&iacute;a";


//  Id pregunta: 1541 AÃ±o de creación de pregunta: 2003-01-01
 questions[15]= "16)  &iquest;Qu&eacute; es NUMA?";
 choices[15]= new Array();
 choices[15][0] = "Non-Uniform Memory Access";
 choices[15][1] = "Un nuevo procesador RISC";
 choices[15][2] = "Un nuevo procesador CISC";
 choices[15][3] = "Tipo de arquitectura de proceso paralelo en el que cada procesador comparte una zona de memoria";
 answers[15] = choices[15][0];
 units[15] = "45";
 comments[15] = "Id Pregunta: 1541. ";


//  Id pregunta: 1655 AÃ±o de creación de pregunta: 2004-01-01
 questions[16]= "17)  &iquest;Cu&aacute;les de los siguientes no son modos de operaci&oacute;n para algoritmos de cifrado por bloques?";
 choices[16]= new Array();
 choices[16][0] = "CTR";
 choices[16][1] = "CBC";
 choices[16][2] = "CFB";
 choices[16][3] = "DFB";
 answers[16] = choices[16][3];
 units[16] = "72";
 comments[16] = "Id Pregunta: 1655. ";


//  Id pregunta: 1833 AÃ±o de creación de pregunta: 2006-01-01
 questions[17]= "18)  Se&ntilde;alar la respuesta falsa";
 choices[17]= new Array();
 choices[17][0] = "HTML es un subconjunto de SGML";
 choices[17][1] = "XHTML es un subconjunto de XML";
 choices[17][2] = "XML es una ampliaci&oacute;n de HTML";
 choices[17][3] = "RTF es un subconjunto de SGML";
 answers[17] = choices[17][2];
 units[17] = "69";
 comments[17] = "Id Pregunta: 1833. NULL";


//  Id pregunta: 1869 AÃ±o de creación de pregunta: 2006-01-01
 questions[18]= "19)  La directiva europea del Parlamento y del Consejo relativa a la firma electr&oacute;nica es:";
 choices[18]= new Array();
 choices[18][0] = "Directiva 2000/31/CE";
 choices[18][1] = "Directiva 1999/93/CE";
 choices[18][2] = "Directiva 98/68/CE";
 choices[18][3] = "Directiva 1996/46/CE";
 answers[18] = choices[18][1];
 units[18] = "30";
 comments[18] = "Id Pregunta: 1869. NULL";


//  Id pregunta: 1999 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  En el modelo COCOMO de estimaci&oacute;n de esfuerzo de desarrollo de software, se distingue una jerarqu&iacute;a de modelos de estimaci&oacute;n. E esta jerarqu&iacute;a el modelo b&aacute;sico corresponde a:";
 choices[19]= new Array();
 choices[19][0] = "C&aacute;lculo del esfuerzo en funci&oacute;n de las l&iacute;neas de c&oacute;digo a desarrollar";
 choices[19][1] = "C&aacute;lculo del esfuerzo en funci&oacute;n de las l&iacute;neas de c&oacute;digo a desarrollar y de unos factores correctores";
 choices[19][2] = "C&aacute;lculo del esfuerzo de las l&iacute;neas de c&oacute;digo a desarrollar y de la etapa del ciclo de vida del sistema";
 choices[19][3] = "C&aacute;lculo del esfuerzo en funci&oacute;n de las l&iacute;neas de c&oacute;digo a desarrollar y del hardware usado";
 answers[19] = choices[19][0];
 units[19] = "89";
 comments[19] = "Id Pregunta: 1999. NULL";


//  Id pregunta: 2005 AÃ±o de creación de pregunta: 2004-01-01
 questions[20]= "21)  Son elementos de un DFD:";
 choices[20]= new Array();
 choices[20][0] = "eventos, nodos, entidades externas, flujos de datos";
 choices[20][1] = "eventos, entidades externas, procesos, almacenes de datos, flujos de datos";
 choices[20][2] = "entidades externas, procesos, almacenes de datos, flujos de datos";
 choices[20][3] = "entidades externas, nodos, flujos de datos";
 answers[20] = choices[20][2];
 units[20] = "86";
 comments[20] = "Id Pregunta: 2005. Similar a examen TIC MAP A 2004";


//  Id pregunta: 2358 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  Entre las nuevas tecnolog&iacute;as incorporadas a la Versi&oacute;n 3 de la metodolog&iacute;a de planificaci&oacute;n y desarrollo de sistemas de informaci&oacute;n METRICA del Consejo Superior de Administraci&oacute;n Electr&oacute;nica, respecto de su versi&oacute;n anterior, tenemos:";
 choices[21]= new Array();
 choices[21][0] = "Orientaci&oacute;n a objetos";
 choices[21][1] = "Entorno cliente/servidor";
 choices[21][2] = "Reutilizaci&oacute;n de m&oacute;dulos - componentes (tambi&eacute;n denominados productos) y bases de datos";
 choices[21][3] = "Todas las respuestas anteriores son correctas";
 answers[21] = choices[21][3];
 units[21] = "86";
 comments[21] = "Id Pregunta: 2358. NULL";


//  Id pregunta: 2427 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  La metodolog&iacute;a M&eacute;trica V.3 incorpora un proceso de mantenimiento de sistemas. &iquest;Podr&iacute;a determinar qu&eacute; actividad no est&aacute; incluida en el proceso?:";
 choices[22]= new Array();
 choices[22][0] = "Registro de la petici&oacute;n";
 choices[22][1] = "An&aacute;lisis de la petici&oacute;n";
 choices[22][2] = "Seguimiento y evaluaci&oacute;n de los cambios hasta la aceptaci&oacute;n";
 choices[22][3] = "Todas ellas son actividades del MSI";
 answers[22] = choices[22][3];
 units[22] = "86";
 comments[22] = "Id Pregunta: 2427. NULL";


//  Id pregunta: 2478 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Por configuraci&oacute;n se entiende:";
 choices[23]= new Array();
 choices[23][0] = "Actividad que tiene por objeto la evaluaci&oacute;n de conformidad de dise&ntilde;os, productos software, procesos o sistema.";
 choices[23][1] = "Proceso por el que el sistema de calidad de una empresa es auditado para comprobar el cumplimiento de determinadas normas.";
 choices[23][2] = "Descripci&oacute;n completa de un producto software y las interrelaciones de sus elementos.";
 choices[23][3] = "Proceso de determinaci&oacute;n de correcci&oacute;n de los  productos de una fase de desarrollo con respecto a los requisitos establecidos en la fase anterior.";
 answers[23] = choices[23][2];
 units[23] = "90";
 comments[23] = "Id Pregunta: 2478. ";


//  Id pregunta: 2504 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Un  m&eacute;todo orientado a los datos es:";
 choices[24]= new Array();
 choices[24][0] = "Diagramas HIPO";
 choices[24][1] = "Dise&ntilde;o Estructurado de Jackson";
 choices[24][2] = "Historia de la vida de una entidad";
 choices[24][3] = "Dise&ntilde;o estructurado: Yourdon-Constantine";
 answers[24] = choices[24][1];
 units[24] = "79";
 comments[24] = "Id Pregunta: 2504. ";


//  Id pregunta: 2665 AÃ±o de creación de pregunta: 2003-01-01
 questions[25]= "26)  El n&uacute;mero de bits por p&iacute;xel se define como:";
 choices[25]= new Array();
 choices[25][0] = "Profundidad del p&iacute;xel.";
 choices[25][1] = "Flexibilidad.";
 choices[25][2] = "Diafragma digital.";
 choices[25][3] = "ECW.";
 answers[25] = choices[25][0];
 units[25] = "93";
 comments[25] = "Id Pregunta: 2665. NULL";


//  Id pregunta: 2684 AÃ±o de creación de pregunta: 2003-01-01
 questions[26]= "27)  La copia de seguridad intermedia se utiliza:";
 choices[26]= new Array();
 choices[26][0] = "Para restaurar los archivos y carpetas a partir de la &uacute;ltima copia de seguridad normal y la mencinada copia.";
 choices[26][1] = "Cuando se desea hacer copias de seguridad de archivos entre copias de seguridad normales e incrementales, ya que no afecta a estas operaciones.";
 choices[26][2] = "Cuando se usa una combinaci&oacute;n de copias de seguridad normales e incrementales, ya que la restauraci&oacute;n de los datos debe realizarse con la &uacute;ltima copia de seguridad normal y todas las copias de seguridad intermedias.";
 choices[26][3] = "Cuando s&oacute;lo necesita la copia m&aacute;s reciente del archivo o la cinta que contiene la copia de seguridad para restaurar todos los archivos.";
 answers[26] = choices[26][1];
 units[26] = "96";
 comments[26] = "Id Pregunta: 2684. NULL";


//  Id pregunta: 2781 AÃ±o de creación de pregunta: 2006-01-01
 questions[27]= "28)  El prototipado cl&aacute;sico, &iquest;en qu&eacute; fases del proyecto se aplica?";
 choices[27]= new Array();
 choices[27][0] = "En la fase de especificaci&oacute;n de requisitos";
 choices[27][1] = "En el dise&ntilde;o del sistema";
 choices[27][2] = "a) y b) son correctas";
 choices[27][3] = "Se aplica en todas las fases expecto implantaci&oacute;n y mantenimiento";
 answers[27] = choices[27][0];
 units[27] = "85";
 comments[27] = "Id Pregunta: 2781. ";


//  Id pregunta: 2878 AÃ±o de creación de pregunta: 2006-01-01
 questions[28]= "29)  &iquest; Cu&aacute;l de las siguientes normas se ha tenido en cuenta como referencia principal en M&Eacute;TRICA versi&oacute;n 3?";
 choices[28]= new Array();
 choices[28][0] = "ISO/IEC TR 16.502/SPICE";
 choices[28][1] = "ISO 12.207";
 choices[28][2] = "IEEE 600.11-1990";
 choices[28][3] = "UNE-EN-ISO 9001:2000";
 answers[28] = choices[28][1];
 units[28] = "86";
 comments[28] = "Id Pregunta: 2878. NULL";


//  Id pregunta: 3060 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  El lenguaje de marcado que permite el desarrollo de servicios IVR basados en web se denomina:";
 choices[29]= new Array();
 choices[29][0] = "IVRML";
 choices[29][1] = "VML";
 choices[29][2] = "VoiceXML";
 choices[29][3] = "IVRXML";
 answers[29] = choices[29][2];
 units[29] = "94";
 comments[29] = "Id Pregunta: 3060. ";


//  Id pregunta: 3316 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  &iquest;Qu&eacute; topolog&iacute;a tiene una red ethernet cableada con 10 Base T?:";
 choices[30]= new Array();
 choices[30][0] = "Bus";
 choices[30][1] = "Estrella";
 choices[30][2] = "Anillo";
 choices[30][3] = "Doble bus";
 answers[30] = choices[30][1];
 units[30] = "97";
 comments[30] = "Id Pregunta: 3316. NULL";


//  Id pregunta: 3564 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  En un firewall de paquetes IP, los paquetes entrantes:";
 choices[31]= new Array();
 choices[31][0] = "Primero se filtran, luego se hace el NAT";
 choices[31][1] = "Primero se hace NAT y luego se filtran";
 choices[31][2] = "Es igual que para los paquetes salientes";
 choices[31][3] = "Depende de la interfaz";
 answers[31] = choices[31][1];
 units[31] = "111";
 comments[31] = "Id Pregunta: 3564. NULL";


//  Id pregunta: 3664 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  Un router IP puede intercambiar tr&aacute;fico IP:";
 choices[32]= new Array();
 choices[32][0] = "Entre un interfaz Ethernet y un interfaz STM-1";
 choices[32][1] = "S&oacute;lo entre interfaces de un mismo nivel";
 choices[32][2] = "Nunca si existen m&aacute;quinas UNIX y Windows en cada una de las redes que conecta";
 choices[32][3] = "Ninguna de las anteriores";
 answers[32] = choices[32][0];
 units[32] = "102";
 comments[32] = "Id Pregunta: 3664. ";


//  Id pregunta: 3692 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  Las direcciones anycast en IPv6 se caracterizan por:";
 choices[33]= new Array();
 choices[33][0] = "identificar a una &uacute;nica interfaz";
 choices[33][1] = "identificar a un conjunto de interfaces, y cada paquete enviado a una direcci&oacute;n anycast se entrega a una de ellas, eligi&eacute;ndose la mejor desde el punto de vista de la topoog&iacute;a de red";
 choices[33][2] = "identificar a un conjunto de interfaces, y cada paquete enviado a una direcci&oacute;n anycast se entrega a todas las interfaces";
 choices[33][3] = "ninguna de las anteriores respuestas es correcta";
 answers[33] = choices[33][1];
 units[33] = "100";
 comments[33] = "Id Pregunta: 3692. NULL";


//  Id pregunta: 3779 AÃ±o de creación de pregunta: 2002-01-01
 questions[34]= "35)  Relativo a Frame Relay, &iquest;cu&aacute;l de las siguientes afirmaciones es verdadera?:";
 choices[34]= new Array();
 choices[34][0] = "Es un protocolo dise&ntilde;ado para trabajar sobre redes con alta tasa de errores";
 choices[34][1] = "Un usuario nunca podr&aacute; transmitir m&aacute;s datos de los contratados en el CIR";
 choices[34][2] = "Proporciona un servicio orientado a conexi&oacute;n no fiable";
 choices[34][3] = "En caso de congesti&oacute;n, las tramas son almacenadas y enviadas con posterioridad";
 answers[34] = choices[34][2];
 units[34] = "109";
 comments[34] = "Id Pregunta: 3779. ";


//  Id pregunta: 3801 AÃ±o de creación de pregunta: 2002-01-01
 questions[35]= "36)  Sabiendo que se dice que una fibra monomodo es aquella que transmite un &uacute;nico modo de propagaci&oacute;n de un haz monocrom&aacute;tico de luz. Indique cu&aacute;l de las afirmaciones siguientes es verdadera: ";
 choices[35]= new Array();
 choices[35][0] = "Las fibras &oacute;pticas monomodo son las m&aacute;s adecuadas para la transmisi&oacute;n de se&ntilde;ales con un ancho de banda peque&ntilde;o y a grandes distancias";
 choices[35][1] = "La fibras &oacute;pticas monomodo son las adecuadas para transmitir se&ntilde;ales de gran ancho de banda y a grandes distancias";
 choices[35][2] = "Las fibras &oacute;pticas monomodo son &uacute;nicamente adecuadas para la transmisi&oacute;n de se&ntilde;ales anal&oacute;gicas";
 choices[35][3] = "Todas las anteriores respuestas son correctas";
 answers[35] = choices[35][1];
 units[35] = "99";
 comments[35] = "Id Pregunta: 3801. ";


//  Id pregunta: 3810 AÃ±o de creación de pregunta: 2002-01-01
 questions[36]= "37)  Seg&uacute;n la recomendaci&oacute;n EIA/TIA 568:";
 choices[36]= new Array();
 choices[36][0] = "La distancia m&aacute;xima para el cableado horizontal var&iacute;a entre 70 m y 90 m";
 choices[36][1] = "La distancia entre equipo y roseta puede llegar a los 9 m";
 choices[36][2] = "Se consideran los cables coaxiales de 76 Ohm";
 choices[36][3] = "Ninguna de las anteriores";
 answers[36] = choices[36][0];
 units[36] = "99";
 comments[36] = "Id Pregunta: 3810. ";


//  Id pregunta: 3853 AÃ±o de creación de pregunta: 2002-01-01
 questions[37]= "38)  WTLS:";
 choices[37]= new Array();
 choices[37][0] = "est&aacute; basado en el protocolo TLS, pero optimizado para dispositivos m&oacute;viles";
 choices[37][1] = "proporciona mayor seguridad que TLS";
 choices[37][2] = "es independiente de TLS, un protocolo dise&ntilde;ado espec&iacute;ficamente para redes inal&aacute;mbricas";
 choices[37][3] = "ningunas de las anteriores";
 answers[37] = choices[37][0];
 units[37] = "111";
 comments[37] = "Id Pregunta: 3853. NULL";


//  Id pregunta: 3856 AÃ±o de creación de pregunta: 2003-01-01
 questions[38]= "39)  El ataque de denegaci&oacute;n de servicio llamado Smurf consiste en:";
 choices[38]= new Array();
 choices[38][0] = "Dejar una conexi&oacute;n en estado semiabierto y no llegar a realizarse el paso final para establecer una conexi&oacute;n";
 choices[38][1] = "Se trata de mandar a un puerto abierto del servidor un paquete hecho con la direcci&oacute;n y puerto origen igual que la direcci&oacute;n y puerto destino";
 choices[38][2] = "Consiste en recolectar direcciones BroadCast para despu&eacute;s mandar una petici&oacute;n ICMP cada una de ellas, falsificando la direcci&oacute;n IP de origen";
 choices[38][3] = "Se trata de saturar la red mediante una cantidad repetitiva y enorme de peticiones de conexi&oacute;n";
 answers[38] = choices[38][2];
 units[38] = "111";
 comments[38] = "Id Pregunta: 3856. NULL";


//  Id pregunta: 3881 AÃ±o de creación de pregunta: 2003-01-01
 questions[39]= "40)  &iquest;Cu&aacute;les son las capas que componen la arquitectura WAP?";
 choices[39]= new Array();
 choices[39][0] = "Aplicaci&oacute;n, Sesi&oacute;n, Transacciones y Transporte";
 choices[39][1] = "Aplicaci&oacute;n, Sesi&oacute;n,Presentaci&oacute;n, Transporte, y Red";
 choices[39][2] = "Aplicaci&oacute;n, Sesi&oacute;n, Seguridad y Transporte";
 choices[39][3] = "Ninguna de las opciones anteriores es correcta";
 answers[39] = choices[39][3];
 units[39] = "108";
 comments[39] = "Id Pregunta: 3881. ";


//  Id pregunta: 3977 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  En relaci&oacute;n a los cables de par trenzado UTP y STP, indique cu&aacute;l de las siguientes afirmaciones es cierta.";
 choices[40]= new Array();
 choices[40][0] = "Las categor&iacute;as 1 y 2 de UTP se emplean para transmisi&oacute;n de datos X.25";
 choices[40][1] = "La categor&iacute;a 4 de UTP especifica cables hasta 20 MHz, se utilizan para voz y datos hasta 16 Mbps";
 choices[40][2] = "El tipo 6 de cable STP emplea 4 pares trenzados de mayor calibre que los de tipo 1";
 choices[40][3] = "Los cables STP, a pesar de su menor inmunidad a las interferencias, son los de mayor implantaci&oacute;n en los cableados estructurados.";
 answers[40] = choices[40][1];
 units[40] = "99";
 comments[40] = "Id Pregunta: 3977. ";


//  Id pregunta: 4056 AÃ±o de creación de pregunta: 2004-01-01
 questions[41]= "42)  &iquest;Cu&aacute;l de las siguientes tecnolog&iacute;as no se puede utilizar actualmente para acceder a internet en Espa&ntilde;a?";
 choices[41]= new Array();
 choices[41][0] = "ADSL";
 choices[41][1] = "Cable";
 choices[41][2] = "Wi-Max";
 choices[41][3] = "Ninguna de las respuestas es correcta";
 answers[41] = choices[41][3];
 units[41] = "112";
 comments[41] = "Id Pregunta: 4056. ";


//  Id pregunta: 4059 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  Que tipo de LAN instalarias en un edificio nuevo";
 choices[42]= new Array();
 choices[42][0] = "Usaria cables porque son m&aacute;s seguros y fiables";
 choices[42][1] = "Usaria Wi-Max porque es una tecnologia que me evita tener que instalar cables";
 choices[42][2] = "Usaria Wi-Fi porque me da la misma funcionalidad que los cables pero con una instalaci&oacute;n m&aacute;s r&aacute;pida";
 choices[42][3] = "Cualquiera de las anteriores es valida";
 answers[42] = choices[42][0];
 units[42] = "112";
 comments[42] = "Id Pregunta: 4059. ";


//  Id pregunta: 4103 AÃ±o de creación de pregunta: 2006-01-01
 questions[43]= "44)  Los no dos de interconexi&oacute;n que forman el backbone de Iternet en la actualidad, reciben el nombre de:";
 choices[43]= new Array();
 choices[43][0] = "NBA";
 choices[43][1] = "NAT";
 choices[43][2] = "NSFNet";
 choices[43][3] = "NAP";
 answers[43] = choices[43][3];
 units[43] = "112";
 comments[43] = "Id Pregunta: 4103. ";


//  Id pregunta: 4109 AÃ±o de creación de pregunta: 2006-01-01
 questions[44]= "45)  Webmail es:";
 choices[44]= new Array();
 choices[44][0] = "Una soluci&oacute;n de correo electr&oacute;nico a trav&eacute;s de Internet en la que s&oacute;lo necesitas un programa de correo electr&oacute;nico especializado que accede a trav&eacute;s del protocolo POP3.";
 choices[44][1] = "Una soluci&oacute;n de correo electr&oacute;nico a trav&eacute;s de Internet en la que s&oacute;lo necesitas un Navegador.";
 choices[44][2] = "a) y b) son ciertas";
 choices[44][3] = "a) y b) son falsas";
 answers[44] = choices[44][1];
 units[44] = "112";
 comments[44] = "Id Pregunta: 4109. ";


//  Id pregunta: 4156 AÃ±o de creación de pregunta: 2006-01-01
 questions[45]= "46)  Metodolog&iacute;a administrativa de gesti&oacute;n de sistemas que establece procedimientos para la gesti&oacute;n de situaciones futuras probables";
 choices[45]= new Array();
 choices[45][0] = "Gesti&oacute;n de relaciones entre socios (PRM)";
 choices[45][1] = "Gesti&oacute;n basada en pol&iacute;ticas";
 choices[45][2] = "Tecnolog&iacute;a adaptativa";
 choices[45][3] = "Acuerdo de nivel de servicio (SLA)";
 answers[45] = choices[45][1];
 units[45] = "97";
 comments[45] = "Id Pregunta: 4156. NULL";


//  Id pregunta: 4192 AÃ±o de creación de pregunta: 2006-01-01
 questions[46]= "47)  Pueden encontrarse registros SOA, NS, CNAME, MX, etc. en el contexto de";
 choices[46]= new Array();
 choices[46][0] = "Un Servicio Web";
 choices[46][1] = "Una Arquitectura Orientada a Servicios (SOA)";
 choices[46][2] = "Un servidor DNS";
 choices[46][3] = "Unos identificadores XML de un servicio RSS";
 answers[46] = choices[46][2];
 units[46] = "106";
 comments[46] = "Id Pregunta: 4192. ";


//  Id pregunta: 4266 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  Indique cu&aacute;l de los siguientes no es un servicio LDAP";
 choices[47]= new Array();
 choices[47][0] = "READ";
 choices[47][1] = "COMPARE";
 choices[47][2] = "ADD";
 choices[47][3] = "ABANDON";
 answers[47] = choices[47][0];
 units[47] = "74";
 comments[47] = "Id Pregunta: 4266. NULL";


//  Id pregunta: 4294 AÃ±o de creación de pregunta: 2007-01-01
 questions[48]= "49)  M&eacute;trica versi&oacute;n 3:";
 choices[48]= new Array();
 choices[48][0] = "No establece diferencias entre los desarrollos orientados a objetos y los desarrollos estructurados.";
 choices[48][1] = "Cubre desarrollos estructurados y de orientaci&oacute;n a objetos";
 choices[48][2] = "Establece en el Proceso de Desarrollo de Sistemas de informaci&oacute;n 3 Procesos (EVS, DSI y CSI).";
 choices[48][3] = "No cubre desarrollos orientados a objeto";
 answers[48] = choices[48][1];
 units[48] = "86";
 comments[48] = "Id Pregunta: 4294. NULL";


//  Id pregunta: 4401 AÃ±o de creación de pregunta: 2007-01-01
 questions[49]= "50)  Un evento con consecuencias en detrimento de la seguridad del sistema de informaci&oacute;n se denomina, seg&uacute;n Magerit v.2:";
 choices[49]= new Array();
 choices[49][0] = "Incidente.";
 choices[49][1] = "Incidencia.";
 choices[49][2] = "Contingencia";
 choices[49][3] = "Impacto.";
 answers[49] = choices[49][0];
 units[49] = "33";
 comments[49] = "Id Pregunta: 4401. ";


//  Id pregunta: 4441 AÃ±o de creación de pregunta: 2007-01-01
 questions[50]= "51)  Seg&uacute;n el RD Legislativo 3/2011 de Contratos del Sector P&uacute;blico, el procedimiento de adjudicaci&oacute;n en el que solo podr&aacute;n participar los empresarios que, a su solicitud y en atenci&oacute;n a su solvencia, hayan sido seleccionados por el &oacute;rgano de contrataci&oacute;n, se llama:";
 choices[50]= new Array();
 choices[50][0] = "Procedimiento Negociado.";
 choices[50][1] = "Procedimiento Restringido.";
 choices[50][2] = "Procedimiento Cerrado";
 choices[50][3] = "Procedimiento Abierto.";
 answers[50] = choices[50][1];
 units[50] = "41";
 comments[50] = "Id Pregunta: 4441. ";


//  Id pregunta: 4478 AÃ±o de creación de pregunta: 2007-01-01
 questions[51]= "52)  &iquest;Que son el &quot;modelo cebolla&quot; y el &quot;modelo tostadora&quot;?";
 choices[51]= new Array();
 choices[51][0] = "Modelos de ciclo de vida de sistemas de informaci&oacute;n.";
 choices[51][1] = "Modelos de integraci&oacute;n de herramientas CASE.";
 choices[51][2] = "Modelos de diagrama de flujo de datos.";
 choices[51][3] = "Modelos de objetos para sistemas orientados al objeto.";
 answers[51] = choices[51][1];
 units[51] = "";
 comments[51] = "Id Pregunta: 4478. ";


//  Id pregunta: 4507 AÃ±o de creación de pregunta: 2007-01-01
 questions[52]= "53)  &iquest;Cuanto tiempo duraran los derechos de explotaci&oacute;n de una obra?";
 choices[52]= new Array();
 choices[52][0] = "Hasta la muerte de su autor";
 choices[52][1] = "Setenta anos despu&eacute;s de la fecha de divulgaci&oacute;n";
 choices[52][2] = "Toda la vida de su autor y setenta anos despu&eacute;s de su muerte";
 choices[52][3] = "Los derechos de explotaci&oacute;n de una obra nunca se extinguen";
 answers[52] = choices[52][2];
 units[52] = "36";
 comments[52] = "Id Pregunta: 4507. ";


//  Id pregunta: 4626 AÃ±o de creación de pregunta: 2007-01-01
 questions[53]= "54)  Que comando se utiliza para convertir un sistema de ficheros ext2 a ext3 en las ultimas versiones de Suse Linux?";
 choices[53]= new Array();
 choices[53][0] = "tune2fs -c ldev/hdbX";
 choices[53][1] = "tune2fs -j /dev/hdbX";
 choices[53][2] = "make2fs /devlhdbX";
 choices[53][3] = "mount -t ext3 /dev/hdbX /mountpoint";
 answers[53] = choices[53][1];
 units[53] = "53";
 comments[53] = "Id Pregunta: 4626. ";


//  Id pregunta: 4699 AÃ±o de creación de pregunta: 2007-01-01
 questions[54]= "55)  IEFT (Internet Engineering Task Force) se encarga de:";
 choices[54]= new Array();
 choices[54][0] = "Coordinaci&oacute;n entre organizaciones como IEFT, IANA, etc.";
 choices[54][1] = "Asignaci&oacute;n de recursos";
 choices[54][2] = "La supervisi&oacute;n y aprobaci&oacute;n de normas";
 choices[54][3] = "Especificaci&oacute;n de est&aacute;ndares.";
 answers[54] = choices[54][3];
 units[54] = "42";
 comments[54] = "Id Pregunta: 4699. Examen 2006 JCYL";


//  Id pregunta: 4811 AÃ±o de creación de pregunta: 2007-01-01
 questions[55]= "56)  Sobre las funciones OLAP (Online Analytical Processing) definidas como extensiones a SQL (Structured Query Language) que forman parte de SQL:2003, &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[55]= new Array();
 choices[55][0] = "La funci&oacute;n ROLLUP puede aparecer en la cl&aacute;usula GROUP BY.";
 choices[55][1] = "La funci&oacute;n ROLLUP puede aparecer en la cl&aacute;usula ORDER BY.";
 choices[55][2] = "La funci&oacute;n CUBE puede aparecer en la cl&aacute;usula ORDER BY.";
 choices[55][3] = "La funci&oacute;n CUBE puede aparecer en la cl&aacute;usula FROM.";
 answers[55] = choices[55][0];
 units[55] = "68";
 comments[55] = "Id Pregunta: 4811. ";


//  Id pregunta: 4906 AÃ±o de creación de pregunta: 2003-01-01
 questions[56]= "57)  En un sistema con memoria virtual, la pol&iacute;tica de reemplazo &oacute;ptima es aqu&eacute;lla que aconseja reemplazar la p&aacute;gina:";
 choices[56]= new Array();
 choices[56][0] = "Que m&aacute;s tiempo lleva en memoria.";
 choices[56][1] = "Que m&aacute;s tiempo vaya a tardar en ser referenciada.";
 choices[56][2] = "Que lleva m&aacute;s tiempo sin ser referenciada.";
 choices[56][3] = "Que ha sido utilizada con menos frecuencia.";
 answers[56] = choices[56][1];
 units[56] = "52";
 comments[56] = "Id Pregunta: 4906. Examen TIC B 2007";


//  Id pregunta: 5133 AÃ±o de creación de pregunta: 2003-01-01
 questions[57]= "58)  Seg&uacute;n la LSSI, cu&aacute;les son las p&aacute;ginas web que deben cumplir criterios de accesibilidad:";
 choices[57]= new Array();
 choices[57][0] = "Todas, independientemente de su finalidad.";
 choices[57][1] = "Las de la Administraci&oacute;n P&uacute;blica a partir del 31 de Diciembre de 2004";
 choices[57][2] = "Las de la Administraci&oacute;n P&uacute;blica a partir del 31 de Diciembre de 2008";
 choices[57][3] = "S&oacute;lo las comerciales";
 answers[57] = choices[57][2];
 units[57] = "30";
 comments[57] = "Id Pregunta: 5133. Examen TIC A Castilla La Mancha 2007 (Ley 34/2002, disposici&oacute;n adicional quinta, modificado por Ley 56/2007, art&iacute;culo 4)";


//  Id pregunta: 5180 AÃ±o de creación de pregunta: 2003-01-01
 questions[58]= "59)  &iquest;Cu&aacute;l no es una metodolog&iacute;a de Desarrollo Orientada a Objetos?";
 choices[58]= new Array();
 choices[58][0] = "Merise";
 choices[58][1] = "Booch";
 choices[58][2] = "OMT";
 choices[58][3] = "RUP";
 answers[58] = choices[58][0];
 units[58] = "79";
 comments[58] = "Id Pregunta: 5180. ";


//  Id pregunta: 5213 AÃ±o de creación de pregunta: 2003-01-01
 questions[59]= "60)  El Marco Europeo de Interoperabilidad 2.0 se construye sobre la base de 12 principios. Indicar cu&aacute;l de los siguientes no es uno de ellos:";
 choices[59]= new Array();
 choices[59][0] = "Multiling&uuml;ismo";
 choices[59][1] = "Seguridad y privacidad";
 choices[59][2] = "Subsidiariedad y proporcionalidad";
 choices[59][3] = "Cooperaci&oacute;n intergubernamental";
 answers[59] = choices[59][3];
 units[59] = "30";
 comments[59] = "Id Pregunta: 5213. NULL";


//  Id pregunta: 5685 AÃ±o de creación de pregunta: 2003-01-01
 questions[60]= "61)  &iquest;En qu&eacute; consiste el eRecord Management?";
 choices[60]= new Array();
 choices[60][0] = "Gesti&oacute;n de documentos de tipo registro";
 choices[60][1] = "Destrucci&oacute;n controlada de informaci&oacute;n electr&oacute;nica";
 choices[60][2] = "Gesti&oacute;n de documentos importantes para una organizaci&oacute;n";
 choices[60][3] = "Almacenamiento con codificaci&oacute;n sim&eacute;trica de registros";
 answers[60] = choices[60][2];
 units[60] = "95";
 comments[60] = "Id Pregunta: 5685. NULL";


//  Id pregunta: 5715 AÃ±o de creación de pregunta: 2009-01-01
 questions[61]= "62)  &iquest;Qu&eacute; es abiword?";
 choices[61]= new Array();
 choices[61][0] = "Un comando para contar palabras o bytes en archivos de texto.";
 choices[61][1] = "Un procesador de texto";
 choices[61][2] = "Un conversor de formatos multimedia.";
 choices[61][3] = "Un editor de archivos de sonido.";
 answers[61] = choices[61][1];
 units[61] = "54";
 comments[61] = "Id Pregunta: 5715. NULL";


//  Id pregunta: 5763 AÃ±o de creación de pregunta: 2003-01-01
 questions[62]= "63)  Seg&uacute;n Bennet, Lientz y Swanson:";
 choices[62]= new Array();
 choices[62][0] = "El mantenimiento perfectivo son las acciones llevadas a cabo para mejorar la calidad interna de los sistemas en cualquiera de sus aspectos: reestructuraci&oacute;n del c&oacute;digo, definici&oacute;n m&aacute;s clara del sistema y optimizaci&oacute;n del rendimiento y eficiencia.";
 choices[62][1] = "El mantenimiento evolutivo son las incorporaciones, modificaciones y eliminaciones necesarias en un producto software para cubrir la expansi&oacute;n o cambio en las necesidades del usuario.";
 choices[62][2] = "El mantenimiento preventivo es la realizaci&oacute;n del mantenimiento anticip&aacute;ndose a problemas futuros.";
 choices[62][3] = "El mantenimiento adaptativo son las modificaciones que afectan a los entornos en los que el sistema opera, como por ejemplo la configuraci&oacute;n del hardware.";
 answers[62] = choices[62][2];
 units[62] = "90";
 comments[62] = "Id Pregunta: 5763. ";


//  Id pregunta: 5783 AÃ±o de creación de pregunta: 2009-01-01
 questions[63]= "64)  De las siguientes cuestiones de la arquitectura .NET indique cu&aacute;l es FALSA.";
 choices[63]= new Array();
 choices[63][0] = "Las clases ASP.NET soportan el desarrollo de aplicaciones web y de servicios web XML.";
 choices[63][1] = "Las clases ADO.NET permiten a los desarrolladores interaccionar con los datos, como si fueran XML, a trav&eacute;s de las interfaces de OLE DB, ODBC y SQL Server";
 choices[63][2] = "CLR (Common Language runtime) se encarga de realizar la compilaci&oacute;n del c&oacute;digo fuente al Lenguaje Intermedio independiente de la platafoma.";
 choices[63][3] = "En la arquitectura . NET se permite la utilizaci&oacute;n de varios lenguajes de programaci&oacute;n.";
 answers[63] = choices[63][2];
 units[63] = "59";
 comments[63] = "Id Pregunta: 5783. MAP 2008 A2";


//  Id pregunta: 5901 AÃ±o de creación de pregunta: 2009-01-01
 questions[64]= "65)  Indique qu&eacute; concepto NO interviene en el m&eacute;todo de ponderaci&oacute;n lineal:";
 choices[64]= new Array();
 choices[64][0] = "Puntuaciones normalizadas";
 choices[64][1] = "Factor de ponderaci&oacute;n de los criterios";
 choices[64][2] = "Coeficiente de concordancia";
 choices[64][3] = "Funci&oacute;n de valor o de evaluaci&oacute;n";
 answers[64] = choices[64][2];
 units[64] = "34";
 comments[64] = "Id Pregunta: 5901. MAP 2008 A1";


//  Id pregunta: 5954 AÃ±o de creación de pregunta: 2009-01-01
 questions[65]= "66)  Respecto al uso de Lenguas Oficiales, la Ley 11/2007 de AECSP, especifica lo siguiente:";
 choices[65]= new Array();
 choices[65][0] = "Las sedes electr&oacute;nicas cuyo titular sit&uacute;e su domicilio social sobre territorios con r&eacute;gimen de cooficialidad ling&uuml;&iacute;stica posibilitar&aacute;n el acceso a sus contenidos y servicios en las lenguas correspondientes";
 choices[65][1] = "Se podr&aacute; permitir el uso de las lenguas oficiales del Estado en las relaciones por medios electr&oacute;nicos de los ciudadanos con las Administraciones P&uacute;blicas, en los t&eacute;rminos previstos en la Ley 30/1992, de R&eacute;gimen Jur&iacute;dico de las Administraciones P&uacute;blicas y del Procedimiento Administrativo Com&uacute;n y en la normativa que en cada caso resulte de aplicaci&oacute;n.";
 choices[65][2] = "Los sistemas y aplicaciones utilizados en la gesti&oacute;n electr&oacute;nica de los procedimientos se adaptar&aacute;n a lo dispuesto en cuanto al uso de lenguas cooficiales en el art&iacute;culo 36 de la Ley 30/1992, de R&eacute;gimen Jur&iacute;dico de las Administraciones P&uacute;blicas y el Procedimiento Administrativo Com&uacute;n.";
 choices[65][3] = "Cada Administraci&oacute;n P&uacute;blica afectada determinar&aacute; el calendario para el cumplimiento progresivo de lo previsto en la presente disposici&oacute;n, debiendo garantizar su cumplimiento total a partir del 31 de diciembre de 2009";
 answers[65] = choices[65][2];
 units[65] = "43";
 comments[65] = "Id Pregunta: 5954. Disposici&oacute;n Adicional sexta. ";


//  Id pregunta: 5982 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  SIP (Session Initiation Protocol) es un protocolo que sirve para:";
 choices[66]= new Array();
 choices[66][0] = "Establecer videoconferencias sobre redes con calidad de servicio (ancho de banda garantizado).";
 choices[66][1] = "Realizar el transporte de flujos multimedia.";
 choices[66][2] = "Iniciar una sesi&oacute;n de correo web.";
 choices[66][3] = "Control y se&ntilde;alizaci&oacute;n, permite establecer y gestionar llamadas/conexiones de flujos multimedia.";
 answers[66] = choices[66][3];
 units[66] = "117";
 comments[66] = "Id Pregunta: 5982. TIC A 2009";


//  Id pregunta: 6154 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  &iquest;Cu&aacute;ntas versiones de NFS hay actualmente en uso?";
 choices[67]= new Array();
 choices[67][0] = "Tres: NFSv2, NFSv3 y NFSv4.";
 choices[67][1] = "Dos: NFSv3 y NFSv4.";
 choices[67][2] = "Tres: NFSv3, NFSv4 y NFSv5.";
 choices[67][3] = "Tres: NFSv1, NFSv2 y NFSv3.";
 answers[67] = choices[67][0];
 units[67] = "112";
 comments[67] = "Id Pregunta: 6154. ";


//  Id pregunta: 6335 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)  En un data warehouse:";
 choices[68]= new Array();
 choices[68][0] = "Jam&aacute;s se debe normalizar ninguna tabla.";
 choices[68][1] = "Es normal que algunas tablas de dimensi&oacute;n se desnormalicen buscando mayor eficiencia.";
 choices[68][2] = "Las tablas se mantienen en la m&aacute;xima forma normal para no perder consistencia dado el alto n&uacute;mero de operaciones de modificaci&oacute;n que se realizan.";
 choices[68][3] = "Todas las respuestas son falsas.";
 answers[68] = choices[68][1];
 units[68] = "68";
 comments[68] = "Id Pregunta: 6335. ";


//  Id pregunta: 6417 AÃ±o de creación de pregunta: 2010-01-01
 questions[69]= "70)  El reglamento sobre las condiciones b&aacute;sicas para el acceso de las personas con discapacidad a las tecnolog&iacute;as, productos y servicios relacionados con la sociedad de la informaci&oacute;n y medios de comunicaci&oacute;n social es el:";
 choices[69]= new Array();
 choices[69][0] = "RD 1494/2007";
 choices[69][1] = "RD 1497/2004";
 choices[69][2] = "RD 1449/2007";
 choices[69][3] = "RD 1479/2007";
 answers[69] = choices[69][0];
 units[69] = "39";
 comments[69] = "Id Pregunta: 6417. NULL";


//  Id pregunta: 6454 AÃ±o de creación de pregunta: 2010-01-01
 questions[70]= "71)  &iquest;Cu&aacute;l de las siguientes definiciones corresponde al modelo r&aacute;ster de un SIG?";
 choices[70]= new Array();
 choices[70][0] = "El modelo r&aacute;ster estructura el espacio en una serie de elementos discretos por medio de una ret&iacute;cula regular, generalmente compuesta por celdas cuadradas, tambi&eacute;n llamadas p&iacute;xeles.";
 choices[70][1] = "El modelo r&aacute;ster representa cada objeto geogr&aacute;fico de forma independiente mediante las primitivas gr&aacute;ficas (puntos, l&iacute;neas y pol&iacute;gonos).";
 choices[70][2] = "El modelo r&aacute;ster estructura el espacio en una serie de elementos discretos que se clasifican en puntos, l&iacute;neas o pol&iacute;gonos.";
 choices[70][3] = "El modelo r&aacute;ster representa cada objeto geogr&aacute;fico de forma independiente mediante primitivas gr&aacute;ficas, tambi&eacute;n llamadas p&iacute;xeles, a los cuales se les asocia informaci&oacute;n estructurada a modo de tablas en bases de datos relacionales.";
 answers[70] = choices[70][0];
 units[70] = "67";
 comments[70] = "Id Pregunta: 6454. Castilla La Mancha 2009";


//  Id pregunta: 6601 AÃ±o de creación de pregunta: 2010-01-01
 questions[71]= "72)  Un contrato de servicios de la entidad p&uacute;blica empresarial Red.es estar&aacute; sujeto a regulaci&oacute;n armonizada si su valor estimado es: ";
 choices[71]= new Array();
 choices[71][0] = "Superior a 134.000 euros";
 choices[71][1] = "Superior a 125.000";
 choices[71][2] = "Superior a 206.000";
 choices[71][3] = "Superior a 207.000 euros.";
 answers[71] = choices[71][3];
 units[71] = "41";
 comments[71] = "Id Pregunta: 6601. ";


//  Id pregunta: 7330 AÃ±o de creación de pregunta: 2010-01-01
 questions[72]= "73)  &iquest;Qu&eacute; tipos de miembro tiene AENOR?";
 choices[72]= new Array();
 choices[72][0] = "Natos, Corporativos, Adheridos y de Honor";
 choices[72][1] = "Adheridos, de Pleno Derecho y Suscritos";
 choices[72][2] = "Correspondientes, Individuales, Corporativos y de Honor";
 choices[72][3] = "Corporativos, Adheridos, Individuales y de Honor";
 answers[72] = choices[72][3];
 units[72] = "42";
 comments[72] = "Id Pregunta: 7330. www.aenor.es";


//  Id pregunta: 7345 AÃ±o de creación de pregunta: 2010-01-01
 questions[73]= "74)  El est&aacute;ndar de sintaxis de intercambio de informaci&oacute;n personal es:";
 choices[73]= new Array();
 choices[73][0] = "PKCS#7";
 choices[73][1] = "PKCS#9";
 choices[73][2] = "PKCS#12";
 choices[73][3] = "PKCS#14";
 answers[73] = choices[73][2];
 units[73] = "72";
 comments[73] = "Id Pregunta: 7345. NULL";


//  Id pregunta: 7816 AÃ±o de creación de pregunta: 2010-01-01
 questions[74]= "75)   En un sistema de ficheros Unix que tiene un tama&ntilde;o de bloque de 2 KB y nodos-i con doce direcciones directas, una indirecta simple, una indirecta doble y una indirecta triple, que adem&aacute;s utiliza direcciones de bloque de 4 bytes, para representar un fichero de 2 MB:";
 choices[74]= new Array();
 choices[74][0] = " Se utilizar&aacute; un bloque de indexaci&oacute;n simple y uno de indexaci&oacute;n doble.";
 choices[74][1] = " Se utilizar&aacute; un bloque de indexaci&oacute;n simple y dos de indexaci&oacute;n doble.";
 choices[74][2] = " Se utilizar&aacute;n dos bloques de indexaci&oacute;n simple y uno de indexaci&oacute;n doble.";
 choices[74][3] = " Se utilizar&aacute;n dos bloques de indexaci&oacute;n simple.";
 answers[74] = choices[74][2];
 units[74] = "NULL";
 comments[74] = "Id Pregunta: 7816. Map 2005";


//  Id pregunta: 7947 AÃ±o de creación de pregunta: 2010-01-01
 questions[75]= "76)   Seg&uacute;n la recomendaci&oacute;n X.509 v.3, las Listas de certificados revocados (CRL):";
 choices[75]= new Array();
 choices[75][0] = " Permiten conocer el estado de un certificado en el instante de la consulta.";
 choices[75][1] = " Para cada certificado revocado indican, entre otros, el nombre del titular del certificado y la correspondiente clave p&uacute;blica.";
 choices[75][2] = " Pueden contener certificados revocados por diversas Autoridades de Certificaci&oacute;n.";
 choices[75][3] = " Las delta CRL son los subconjuntos en los que se divide una CRL y que instaladas en m&aacute;quinas distintas facilitan su tratamiento.";
 answers[75] = choices[75][2];
 units[75] = "NULL";
 comments[75] = "Id Pregunta: 7947. Map 2006";


//  Id pregunta: 8267 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  Referente a la pila de protocolos de la familia ITU H.323 para el tr&aacute;fico multimedia sobre redes IP, la afirmaci&oacute;n correcta es:";
 choices[76]= new Array();
 choices[76][0] = "Requiere el uso del protocolo Registration, Admission and Status (RAS) entre los terminales.";
 choices[76][1] = "Emplea el protocolo TCP/IP para el env&iacute;o de la informaci&oacute;n multimedia pues UDP no garantiza el control de flujo y errores.";
 choices[76][2] = "Emplea Real-Time Control Protocol (RTCP) para la se&ntilde;alizaci&oacute;n (establecimiento, control y finalizaci&oacute;n) de llamadas.";
 choices[76][3] = "Emplea el protocolo T.120 para la inclusi&oacute;n de tr&aacute;fico de datos.";
 answers[76] = choices[76][3];
 units[76] = "117";
 comments[76] = "Id Pregunta: 8267. Examen TIC A1 2010";


//  Id pregunta: 8744 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  El impulso de la factura electr&oacute;nica, como obligatoria en el marco de la contrataci&oacute;n en el sector p&uacute;blico estatal se establece en la ley:";
 choices[77]= new Array();
 choices[77][0] = "34/2002, de 11 de Julio, de Servicios de la Sociedad de la Informaci&oacute;n y de Comercio Electr&oacute;nico.";
 choices[77][1] = "56/2007, de 28 de diciembre, de Medidas de Impulso de la Sociedad de la Informaci&oacute;n";
 choices[77][2] = "59/2003, de 19 de diciembre, de Firma Electr&oacute;nica.";
 choices[77][3] = "11/2007. de 22 de junio, de Acceso Electr&oacute;nico de los Ciudadanos a los Servicios P&uacute;blicos";
 answers[77] = choices[77][1];
 units[77] = "70";
 comments[77] = "Id Pregunta: 8744. Examen TIC A2 2010 interna";


//  Id pregunta: 9121 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  &iquest;C&oacute;mo son los nodos de un cluster?";
 choices[78]= new Array();
 choices[78][0] = "Siempre homog&eacute;neos con el mismo sistema operativo.";
 choices[78][1] = "Pueden ser heterogeneos, con distintos sistemas operativos.";
 choices[78][2] = "S&oacute;lo se pueden crear clusters con tecnolog&iacute;a Microsoft.";
 choices[78][3] = "Ninguna respuesta es correcta.";
 answers[78] = choices[78][1];
 units[78] = "45";
 comments[78] = "Id Pregunta: 9121. ";


//  Id pregunta: 9196 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  Cuando un trabajador asalariado crea un programa de ordenador, en el ejercicio de sus funciones:";
 choices[79]= new Array();
 choices[79][0] = "Los derechos de explotaci&oacute;n pertenecen al trabajador.";
 choices[79][1] = "Los derechos de explotaci&oacute;n pertenecen al empresario.";
 choices[79][2] = "Los derechos morales pertenecen al trabajador";
 choices[79][3] = "Los derechos morales pertenecen al empresario";
 answers[79] = choices[79][2];
 units[79] = "36";
 comments[79] = "Id Pregunta: 9196. ";


//  Id pregunta: 9297 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  &iquest;Cu&aacute;l es el dominio de CobiT m&aacute;s afectado de cara a la Continuidad del Negocio?";
 choices[80]= new Array();
 choices[80][0] = "Planificaci&oacute;n y Organizaci&oacute;n.";
 choices[80][1] = "Adquisici&oacute;n e implementaci&oacute;n.";
 choices[80][2] = "Entrega y Soporte.";
 choices[80][3] = "Supervisi&oacute;n y Evaluaci&oacute;n.";
 answers[80] = choices[80][2];
 units[80] = "32";
 comments[80] = "Id Pregunta: 9297. ";


//  Id pregunta: 9505 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  &iquest;Cu&aacute;les de los siguientes no es un formato de sonido?";
 choices[81]= new Array();
 choices[81][0] = "MIDI";
 choices[81][1] = "Ogg Vorbis 1.0";
 choices[81][2] = "WAV";
 choices[81][3] = "VRML";
 answers[81] = choices[81][3];
 units[81] = "114";
 comments[81] = "Id Pregunta: 9505. NULL";


//  Id pregunta: 9578 AÃ±o de creación de pregunta: 2013-01-01
 questions[82]= "83)  El Comit&eacute; de Estrategia TIC:";
 choices[82]= new Array();
 choices[82][0] = "Es el &oacute;rgano existente en los departamentos ministeriales, en el &aacute;mbito de la Administraci&oacute;n General del Estado, competente en materia de administraci&oacute;n electr&oacute;nica.";
 choices[82][1] = "Es el &oacute;rgano t&eacute;cnico adscrito a la Comisi&oacute;n Europea que canaliza la colaboraci&oacute;n entre la Administraci&oacute;n General del Estado y el resto de pa&iacute;ses de la Uni&oacute;n Europea en materia de administraci&oacute;n electr&oacute;nica.";
 choices[82][2] = "Es el &oacute;rgano colegiado encargado de la definici&oacute;n y supervisi&oacute;n de la aplicaci&oacute;n de la Estrategia TIC de la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos.";
 choices[82][3] = "Es el &oacute;rgano t&eacute;cnico adscrito a la Comisi&oacute;n Europea encargado de unificar los criterios en materia de tratamiento y protecci&oacute;n de datos de car&aacute;cter personal en el &aacute;mbito de la Uni&oacute;n Europea";
 answers[82] = choices[82][2];
 units[82] = "43";
 comments[82] = "Id Pregunta: 9578. Examen TIC A1 2011, adaptado a RD 806/2014.";


//  Id pregunta: 9898 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  Tras la realizaci&oacute;n de un an&aacute;lisis de riesgos de acuerdo con MAGERIT 3.0, el informe que detalla los activos, sus dependencias, las dimensiones en que son valiosos y la estimaci&oacute;n de dicho valor, se denomina";
 choices[83]= new Array();
 choices[83][0] = "modelo de valor.";
 choices[83][1] = "declaraci&oacute;n de aplicabilidad.";
 choices[83][2] = "mapa de riesgos.";
 choices[83][3] = "estado de riesgo.";
 answers[83] = choices[83][0];
 units[83] = "31,32,33";
 comments[83] = "Id Pregunta: 9898. TIC A1, Examen 2013";


//  Id pregunta: 9956 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  &iquest;Cu&aacute;l de las siguientes es una herramienta que ayuda a realizar seguimiento a los requisitos a lo largo del ciclo de vida del proyecto para asegurar que se est&aacute;n cumpliendo de manera eficaz?";
 choices[84]= new Array();
 choices[84][0] = "Cuestionarios";
 choices[84][1] = "Casos de uso.";
 choices[84][2] = "Matriz de trazabilidad de requisitos.";
 choices[84][3] = "Prototipos";
 answers[84] = choices[84][2];
 units[84] = "78";
 comments[84] = "Id Pregunta: 9956. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10053 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Un archivo .PFX, de uso en certificados electr&oacute;nicos:";
 choices[85]= new Array();
 choices[85][0] = "Contiene la clave privada.";
 choices[85][1] = "Cumple la sintaxis PKCS #21.";
 choices[85][2] = "Est&aacute; codificado en un formato no binario.";
 choices[85][3] = "No se puede convertir a formato .PEM.";
 answers[85] = choices[85][0];
 units[85] = "72";
 comments[85] = "Id Pregunta: 10053. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10289 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  &iquest;Cu&aacute;l de los siguientes comandos de Solaris 11 NO devuelve informaci&oacute;n relativa a discos?";
 choices[86]= new Array();
 choices[86][0] = "iostat";
 choices[86][1] = "df";
 choices[86][2] = "sar";
 choices[86][3] = "nc";
 answers[86] = choices[86][3];
 units[86] = "48";
 comments[86] = "Id Pregunta: 10289. TIC A2, libre, examen 2013";


//  Id pregunta: 10445 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  En el marco de la prueba de software, la cobertura de declaraciones de c&oacute;digo (code statement coverage) NO se utiliza para ";
 choices[87]= new Array();
 choices[87][0] = "definir &quot;hecho&quot; (done) en las metodolog&iacute;as &aacute;giles. ";
 choices[87][1] = "detectar c&oacute;digo muerto o inalcanzable.";
 choices[87][2] = "certificar software de misi&oacute;n cr&iacute;tica.";
 choices[87][3] = "detectar errores de condiciones de carrera (race condition bugs). ";
 answers[87] = choices[87][3];
 units[87] = "88";
 comments[87] = "Id Pregunta: 10445. Examen TIC A1 2013";


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


//  Id pregunta: 10674 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  La Ley 39/2015 del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas establece su entrada en vigor.";
 choices[89]= new Array();
 choices[89][0] = "6 meses despu&eacute;s de su publicaci&oacute;n para todas sus previsiones normativas.";
 choices[89][1] = "1 a&ntilde;o despu&eacute;s de su publicaci&oacute;n para todas sus previsiones normativas.";
 choices[89][2] = "1 a&ntilde;o despu&eacute;s de su aprobaci&oacute;n para todas sus previsiones normativas.";
 choices[89][3] = "Ninguna de las anteriores.";
 answers[89] = choices[89][3];
 units[89] = "30";
 comments[89] = "Id Pregunta: 10674. ";


//  Id pregunta: 10684 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  Seg&uacute;n la Ley 39/2015 en referencia al plazo de notificaci&oacute;n, se establece que:";
 choices[90]= new Array();
 choices[90][0] = "El plazo m&aacute;ximo en el que debe notificarse la resoluci&oacute;n expresa ser&aacute; el fijado por la norma reguladora del correspondiente procedimiento.";
 choices[90][1] = "El plazo no podr&aacute; exceder de seis meses salvo que una norma con rango de Ley establezca uno mayor o as&iacute; venga previsto en el Derecho de la Uni&oacute;n Europea.";
 choices[90][2] = "Ambas";
 choices[90][3] = "Ninguna de las anteriores.";
 answers[90] = choices[90][2];
 units[90] = "30";
 comments[90] = "Id Pregunta: 10684. ";


//  Id pregunta: 10932 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  En el modelo CMMI, el &aacute;rea de proceso &quot;An&aacute;lisis causal y resoluci&oacute;n&quot; se encuentra en el nivel de madurez:";
 choices[91]= new Array();
 choices[91][0] = "Nivel 2 - Gestionado.";
 choices[91][1] = "Nivel 5 - Optimizaci&oacute;n.";
 choices[91][2] = "Nivel 4 - Gestionado cuantitativamente.";
 choices[91][3] = "Nivel 3 - Definido.";
 answers[91] = choices[91][1];
 units[91] = "87";
 comments[91] = "Id Pregunta: 10932. TIC A1 AGE 2014";


//  Id pregunta: 11015 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l de los siguientes no est&aacute; incluido dentro de la primera Declaraci&oacute;n de Servicios Compartidos realizada por la Comisi&oacute;n de Estrategia TIC en Septiembre de 2015?";
 choices[92]= new Array();
 choices[92][0] = "Servicio unificado de radiocomunicaciones";
 choices[92][1] = "Servicio de alojamiento de infraestructuras TIC";
 choices[92][2] = "Servicio de gesti&oacute;n de notificaciones";
 choices[92][3] = "Servicio de gesti&oacute;n de n&oacute;mina";
 answers[92] = choices[92][0];
 units[92] = "30";
 comments[92] = "Id Pregunta: 11015. El servicio incluido es el unificado de telecomunicaciones";


//  Id pregunta: 11092 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Cu&aacute;les son las 4 fases de  la evoluci&oacute;n de la inversi&oacute;n en sistemas de informaci&oacute;n en el tiempo de acuerdo con el modelo de Gibson y Nolan?";
 choices[93]= new Array();
 choices[93][0] = "Iniciaci&oacute;n, expansi&oacute;n, formalizaci&oacute;n, madurez";
 choices[93][1] = "Iniciaci&oacute;n, control, integraci&oacute;n, madurez";
 choices[93][2] = "Iniciaci&oacute;n, dise&ntilde;o, implementaci&oacute;n, transici&oacute;n";
 choices[93][3] = "Iniciaci&oacute;n, control, administraci&oacute;n, madurez";
 answers[93] = choices[93][0];
 units[93] = "21";
 comments[93] = "Id Pregunta: 11092. ";


//  Id pregunta: 11213 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;De qu&eacute; plan de la Agenda Digital Espa&ntilde;ola es fruto la Estrategia de Ciberseguridad?";
 choices[94]= new Array();
 choices[94][0] = "Plan de Desarrollo e Innovaci&oacute;n TIC";
 choices[94][1] = "Plan de Confianza en el &aacute;mbito Digital";
 choices[94][2] = "Plan de Seguridad Integral en las Comunicaciones TIC";
 choices[94][3] = "Plan de Aseguramiento de la Econom&iacute;a Digital y los Contenidos Digitales";
 answers[94] = choices[94][1];
 units[94] = "30";
 comments[94] = "Id Pregunta: 11213. ";


//  Id pregunta: 11237 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  El framework Hibernate";
 choices[95]= new Array();
 choices[95][0] = "Est&aacute; disponible tambi&eacute;n para&nbsp;.Net&nbsp;con el nombre de&nbsp;NHibernate.";
 choices[95][1] = "Hibernate se distribuye bajo los t&eacute;rminos de la licencia&nbsp;GNU LGPL.";
 choices[95][2] = "Se apoya en Java Reflection API y en la librer&iacute;a de generaci&oacute;n de c&oacute;digo Javassist.";
 choices[95][3] = "Todas las respuestas son correctas.";
 answers[95] = choices[95][3];
 units[95] = "116";
 comments[95] = "Id Pregunta: 11237. ";


//  Id pregunta: 11484 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  El Derecho de Acceso a la Informaci&oacute;n P&uacute;blica, regulado en la Ley 19/2013 de Transparencia, acceso a la informaci&oacute;n p&uacute;blica y Buen Gobierno";
 choices[96]= new Array();
 choices[96][0] = "Ser&aacute; gratuito, y el plazo m&aacute;ximo de resoluci&oacute;n en el que se conceda o deniegue el acceso es de 1 mes.";
 choices[96][1] = "Ser&aacute; gratuito, y el plazo m&aacute;ximo de resoluci&oacute;n en el que se conceda o deniegue el acceso es de 30 d&iacute;as.";
 choices[96][2] = "Requiere pago de tasa p&uacute;blica, y el plazo m&aacute;ximo de resoluci&oacute;n en el que se conceda o deniegue el acceso es de 30 d&iacute;as.";
 choices[96][3] = "Ser&aacute; gratuito, y el plazo m&aacute;ximo de resoluci&oacute;n en el que se conceda o deniegue el acceso es de 15 d&iacute;as.";
 answers[96] = choices[96][0];
 units[96] = "43";
 comments[96] = "Id Pregunta: 11484. NULL";


//  Id pregunta: 11596 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Con respecto a las Comisiones Ministeriales de Administraci&oacute;n Digital, se&ntilde;ale la respuesta correcta:";
 choices[97]= new Array();
 choices[97][0] = "Definen las prioridades de inversi&oacute;n en materias TIC de acuerdo con los objetivos establecidos por el Gobierno.";
 choices[97][1] = "Impulsan la colaboraci&oacute;n y cooperaci&oacute;n con las comunidades aut&oacute;nomas y las entidades locales para la puesta en marcha de servicios interadministrativos integrados y la compartici&oacute;n de infraestructuras t&eacute;cnicas y los servicios comunes que permitan la racionalizaci&oacute;n de los recursos TIC a todos los niveles del Estado.";
 choices[97][2] = "Act&uacute;an como Observatorio de la Administraci&oacute;n Electr&oacute;nica y Transformaci&oacute;n Digital.";
 choices[97][3] = "Impulsan la digitalizaci&oacute;n de los servicios y procedimientos del departamento con el fin de homogeneizarlos, simplificarlos, mejorar su calidad y facilidad de uso, as&iacute; como las prestaciones ofrecidas a los ciudadanos y empresas, optimizando la utilizaci&oacute;n de los recursos TIC disponibles.";
 answers[97] = choices[97][3];
 units[97] = "43";
 comments[97] = "Id Pregunta: 11596. ";


//  Id pregunta: 11608 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  La privacidad de la informaci&oacute;n en el uso de cloud computing supone un tipo de riesgo:";
 choices[98]= new Array();
 choices[98][0] = "Contractual";
 choices[98][1] = "Legal";
 choices[98][2] = "Organizativo";
 choices[98][3] = "T&eacute;cnico";
 answers[98] = choices[98][1];
 units[98] = "47";
 comments[98] = "Id Pregunta: 11608. ";


//  Id pregunta: 11710 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Qu&eacute; m&eacute;todo de conmutaci&oacute;n LAN ejecuta un CRC en cada trama?";
 choices[99]= new Array();
 choices[99][0] = "Metodo de corte";
 choices[99][1] = "Verificaci&oacute;n de fragmentos";
 choices[99][2] = "Libre de fragmentos";
 choices[99][3] = "Almacenamiento y env&iacute;o";
 answers[99] = choices[99][3];
 units[99] = "102";
 comments[99] = "Id Pregunta: 11710. NULL";


