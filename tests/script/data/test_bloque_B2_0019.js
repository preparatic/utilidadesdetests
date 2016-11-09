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

//  Id pregunta: 697 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de las siguientes afirmaciones no es correcta?";
 choices[0]= new Array();
 choices[0][0] = "El elemento b&aacute;sico para la programaci&oacute;n concurrente en Java son los &quot;threads&quot;";
 choices[0][1] = "Java permite la herencia m&uacute;ltiple de clases";
 choices[0][2] = "El modelo de punteros de Java elimina la posibilidad de transformar un entero en un puntero";
 choices[0][3] = "La variable &quot;this&quot; de una clase Java hace referencia a la propia instancia de la clase sobre la que se est&aacute; ejecutando el c&oacute;digo actual";
 answers[0] = choices[0][1];
 units[0] = "60";
 comments[0] = "Id Pregunta: 697. JCED - Preparatic XVII";


//  Id pregunta: 704 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  &iquest;Cu&aacute;l de los siguientes no es un entorno de escritorio de Linux?";
 choices[1]= new Array();
 choices[1][0] = "Xfce";
 choices[1][1] = "Gnome";
 choices[1][2] = "KDE";
 choices[1][3] = "Metacity";
 answers[1] = choices[1][3];
 units[1] = "54";
 comments[1] = "Id Pregunta: 704. Metacity es el gestor de ventanas por defecto del entorno de escritorio GNOME";


//  Id pregunta: 730 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  &iquest;Cu&aacute;l de las siguientes arquitecturas RAID implementa &quot;mirroring&quot; o espejo de discos?";
 choices[2]= new Array();
 choices[2][0] = "RAID 1";
 choices[2][1] = "RAID 0";
 choices[2][2] = "RAID 2";
 choices[2][3] = "RAID 5";
 answers[2] = choices[2][0];
 units[2] = "48";
 comments[2] = "Id Pregunta: 730. Examen TIC MAP B 2004";


//  Id pregunta: 732 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  En un sistema de informaci&oacute;n de una universidad, en el que se almacenan las asignaturas en las que se matriculan los alumnos, &iquest;cu&aacute;l ser&iacute;a la mejor manera de almacenar las asignaturas de las matr&iacute;culas en la base de datos relacional atendiendo a criterios";
 choices[3]= new Array();
 choices[3][0] = "En la tabla ALUMNOS; con un campo para cada asignatura";
 choices[3][1] = "En la tabla MATR&Iacute;CULA, con un campo asignaturas, en el que se almacenar&iacute;an, delimitadas por separadores, las asignaturas";
 choices[3][2] = "En la tabla ASIGNATURAS de MATR&Iacute;CULA, que tendr&iacute;a tantos registros como asignaturas tenga la matr&iacute;cula. Cada registro constar&iacute;a del identificador de la matr&iacute;cula y el identificador de la asignatura";
 choices[3][3] = "En le tabla ASIGNATURAS de MATR&Iacute;CULA, que tendr&iacute;a un registro por matr&iacute;cula, con tantos campos como asignaturas. El n&uacute;mero m&aacute;ximo de asignaturas depender&iacute;a de la universidad";
 answers[3] = choices[3][2];
 units[3] = "56,57";
 comments[3] = "Id Pregunta: 732. Examen TIC MAP B 2004";


//  Id pregunta: 767 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  Los tipos de tarjetas inteligentes son ";
 choices[4]= new Array();
 choices[4][0] = "de acoplamiento";
 choices[4][1] = "de vecindad";
 choices[4][2] = "de proximidad";
 choices[4][3] = "todas las anteriores";
 answers[4] = choices[4][3];
 units[4] = "74";
 comments[4] = "Id Pregunta: 767. NULL";


//  Id pregunta: 781 AÃ±o de creación de pregunta: 2005-01-01
 questions[5]= "6)  La captura de los datos de una tarjeta de cr&eacute;dito por un tercero, en una transacci&oacute;n econ&oacute;mica realizada a trav&eacute;s de internet entre un comprador y una tienda de comercio electr&oacute;nico afecta a:";
 choices[5]= new Array();
 choices[5][0] = "La dimensi&oacute;n de integridad de la informaci&oacute;n en tr&aacute;nsito";
 choices[5][1] = "La dimensi&oacute;n de autenticaci&oacute;n del destinatario de la informaci&oacute;n en tr&aacute;nsito";
 choices[5][2] = "La dimensi&oacute;n de confidencialidad de la informaci&oacute;n en tr&aacute;nsito";
 choices[5][3] = "La dimensi&oacute;n de disponibilidad de la informaci&oacute;n en tr&aacute;nsito";
 answers[5] = choices[5][2];
 units[5] = "72";
 comments[5] = "Id Pregunta: 781. segurida y cifrado";


//  Id pregunta: 793 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Qu&eacute; significado tiene el concepto &ldquo;World Wide Grid&rdquo; (WWG)?:";
 choices[6]= new Array();
 choices[6][0] = "Compartici&oacute;n de informaci&oacute;n a trav&eacute;s de internet";
 choices[6][1] = "Compartici&oacute;n de datos e infraestructuras inform&aacute;ticas entre todas las disciplinas cient&iacute;ficas y todos los campos de la industria entre equipos dispersos";
 choices[6][2] = "La extensi&oacute;n de Internet a todos los rincones del mundo";
 choices[6][3] = "Ninguna de las anteriores";
 answers[6] = choices[6][1];
 units[6] = "45";
 comments[6] = "Id Pregunta: 793. ";


//  Id pregunta: 832 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l de las alternativas siguientes no corresponde a un operador fundamental del &aacute;lgebra relacional?:";
 choices[7]= new Array();
 choices[7][0] = "Join";
 choices[7][1] = "Selecci&oacute;n";
 choices[7][2] = "Diferencia";
 choices[7][3] = "Proyecci&oacute;n";
 answers[7] = choices[7][0];
 units[7] = "57";
 comments[7] = "Id Pregunta: 832. ";


//  Id pregunta: 838 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto al uso de mecanismos criptogr&aacute;ficos?:";
 choices[8]= new Array();
 choices[8][0] = "El uso de mecanismos criptogr&aacute;ficos puede aumentar la latencia de las comunicaciones";
 choices[8][1] = "El uso de mecanismos criptogr&aacute;ficos puede aumentar la confidencialidad";
 choices[8][2] = "El uso de mecanismos criptogr&aacute;ficos puede implementarse por software o por hardware";
 choices[8][3] = "El uso de mecanismos criptogr&aacute;ficos no puede proporcionar integridad en las comunicaciones";
 answers[8] = choices[8][3];
 units[8] = "72";
 comments[8] = "Id Pregunta: 838. ";


//  Id pregunta: 851 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l de las siguientes no es una operaci&oacute;n de la Unidad de Control?:";
 choices[9]= new Array();
 choices[9][0] = "Obtenci&oacute;n de la instrucci&oacute;n de memoria que indica el contador de secuencia e incremento del mismo";
 choices[9][1] = "Decodificaci&oacute;n de la instrucci&oacute;n obtenida e interpretaci&oacute;n de la misma";
 choices[9][2] = "Ejecuci&oacute;n de las operaciones aritm&eacute;ticas y l&oacute;gicas";
 choices[9][3] = "Control y resoluci&oacute;n de las situaciones conflictivas que se produzcan";
 answers[9] = choices[9][2];
 units[9] = "47";
 comments[9] = "Id Pregunta: 851. ";


//  Id pregunta: 860 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Cu&aacute;l de los siguientes dispositivos no tiene relaci&oacute;n con el almacenamiento de la informaci&oacute;n?:";
 choices[10]= new Array();
 choices[10][0] = "RAID";
 choices[10][1] = "OCR";
 choices[10][2] = "WORM";
 choices[10][3] = "DAT";
 answers[10] = choices[10][1];
 units[10] = "48";
 comments[10] = "Id Pregunta: 860. ";


//  Id pregunta: 864 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Cu&aacute;l de los siguientes es un lenguaje espec&iacute;fico de la ingenier&iacute;a del conocimiento?:";
 choices[11]= new Array();
 choices[11][0] = "C++";
 choices[11][1] = "Java";
 choices[11][2] = "PROLOG";
 choices[11][3] = "PASCAL";
 answers[11] = choices[11][2];
 units[11] = "64";
 comments[11] = "Id Pregunta: 864. ";


//  Id pregunta: 874 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  &iquest;Cu&aacute;l de los siguientes sistemas de cifrado no es una alternativa aceptable para DES (Data Encryption Standard)?:";
 choices[12]= new Array();
 choices[12][0] = "RC-4";
 choices[12][1] = "IDEA";
 choices[12][2] = "Triple DES";
 choices[12][3] = "RSA";
 answers[12] = choices[12][3];
 units[12] = "72";
 comments[12] = "Id Pregunta: 874. ";


//  Id pregunta: 876 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  &iquest;Cu&aacute;l entre las siguientes ventajas de las reglas en inteligencia artificial se puede considerar tambi&eacute;n una desventaja?:";
 choices[13]= new Array();
 choices[13][0] = "Eficiencia (est&aacute; marcada la direcci&oacute;n de inferencia)";
 choices[13][1] = "Facilidad de representaci&oacute;n (es una forma f&aacute;cil de representar el conocimiento)";
 choices[13][2] = "Modularidad (cada regla es independiente, no hay orden ni referencias entre ellas)";
 choices[13][3] = "Flexibilidad (cada regla se puede a&ntilde;adir o quitar sin repercusiones importantes)";
 answers[13] = choices[13][0];
 units[13] = "64";
 comments[13] = "Id Pregunta: 876. ";


//  Id pregunta: 983 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  Dentro de la inteligencia artificial, indicar la afirmaci&oacute;n correcta:";
 choices[14]= new Array();
 choices[14][0] = "El sistema de Kleene completo abarca tambi&eacute;n el c&aacute;lculo de predicados para lo cual se incluyen m&aacute;s axiomas y m&aacute;s reglas de demostraci&oacute;n";
 choices[14][1] = "El sistema de deducci&oacute;n natural se diferencia fundamentalmente de los de teor&iacute;a de la demostraci&oacute;n en que en &eacute;l no se demuestran las deducciones f&oacute;rmula a f&oacute;rmula, sino toda la deducci&oacute;n como si fuera una &uacute;nica f&oacute;rmula";
 choices[14][2] = "El sistema de deducci&oacute;n natural tiene mayor capacidad que el sistema de Kleene para admitir la definici&oacute;n de procedimientos eficientes de b&uacute;squeda sistem&aacute;tica de demostraciones";
 choices[14][3] = "Dentro de la teor&iacute;a sem&aacute;ntica, la descripci&oacute;n del sistema con este planteamiento con c&aacute;lculo posicional se realiza, entre otras con un conjunto de significados atribuibles a las proposiciones y con  una definici&oacute;n sint&aacute;ctica de conectivas";
 answers[14] = choices[14][3];
 units[14] = "63";
 comments[14] = "Id Pregunta: 983. ";


//  Id pregunta: 1012 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  El decibelio (dB) es una unidad de medida usada en escalas:";
 choices[15]= new Array();
 choices[15][0] = "lineales.";
 choices[15][1] = "polares.";
 choices[15][2] = "logar&iacute;tmicas.";
 choices[15][3] = "exponenciales.";
 answers[15] = choices[15][2];
 units[15] = "";
 comments[15] = "Id Pregunta: 1012. ";


//  Id pregunta: 1020 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  El inventor del primer sistema de conmutaci&oacute;n telef&oacute;nica era:";
 choices[16]= new Array();
 choices[16][0] = "Ingeniero Naval.";
 choices[16][1] = "Teleoperador.";
 choices[16][2] = "Enterrador.";
 choices[16][3] = "F&iacute;sico.";
 answers[16] = choices[16][2];
 units[16] = "";
 comments[16] = "Id Pregunta: 1020. ";


//  Id pregunta: 1065 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Elija la respuesta correcta respecto a las puertas l&oacute;gicas.";
 choices[17]= new Array();
 choices[17][0] = "Las puertas AND y OR forman un conjunto funcionalmente completo.";
 choices[17][1] = "Las puertas NOT y OR forman un conjunto funcionalmente completo.";
 choices[17][2] = "Las respuestas 'a' y 'b' son correctas.";
 choices[17][3] = "Ninguna de las anteriores es v&aacute;lida.";
 answers[17] = choices[17][1];
 units[17] = "";
 comments[17] = "Id Pregunta: 1065. ";


//  Id pregunta: 1085 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  En el modelo cliente/servidor, el funcionamiento de una operaci&oacute;n as&iacute;ncrona consiste en que:";
 choices[18]= new Array();
 choices[18][0] = "El proceso cliente lanza una petici&oacute;n y contin&uacute;a cuando el proceso servidor acusa recibo de la petici&oacute;n";
 choices[18][1] = "El proceso cliente lanza una petici&oacute;n y contin&uacute;a, esperando respuesta afirmativa o negativa a su petici&oacute;n";
 choices[18][2] = "El proceso cliente espera hasta que el proceso servidor ha cumplimentado la petici&oacute;n";
 choices[18][3] = "Las operaciones as&iacute;ncronas no son utilizables en este modelo";
 answers[18] = choices[18][1];
 units[18] = "50";
 comments[18] = "Id Pregunta: 1085. ";


//  Id pregunta: 1095 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  En el subsistema de almacenamiento de un ordenador, se define punto de memoria como:";
 choices[19]= new Array();
 choices[19][0] = "El elemento que almacena un bit";
 choices[19][1] = "El elemento que almacena una palabra";
 choices[19][2] = "El elemento que almacena un byte";
 choices[19][3] = "El elemento que almacena una unidad de datos l&oacute;gicos";
 answers[19] = choices[19][0];
 units[19] = "47";
 comments[19] = "Id Pregunta: 1095. ";


//  Id pregunta: 1111 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  En la programaci&oacute;n orientada a objetos de los sistemas expertos:";
 choices[20]= new Array();
 choices[20][0] = "Bajo este paradigma los programas se estructuran en procedimientos orientados al proceso";
 choices[20][1] = "Los objetos se comunican entre s&iacute; mediante arcos";
 choices[20][2] = "La especificaci&oacute;n de un objeto es independiente de su implementaci&oacute;n";
 choices[20][3] = "La propiedad de herencia afecta no s&oacute;lo a la componente est&aacute;tica de los objetos (m&eacute;todos) sino tambi&eacute;n a su componente din&aacute;mica";
 answers[20] = choices[20][2];
 units[20] = "64";
 comments[20] = "Id Pregunta: 1111. ";


//  Id pregunta: 1215 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  La considerada como primera m&aacute;quina realmente procesadora de informaci&oacute;n, llamada &quot;M&aacute;quina Diferencial&quot;, fue dise&ntilde;ada por:";
 choices[21]= new Array();
 choices[21][0] = "John Von Neumann.";
 choices[21][1] = "Blaise Pascal.";
 choices[21][2] = "Charles Babbage.";
 choices[21][3] = "Ninguno de los anteriores.";
 answers[21] = choices[21][2];
 units[21] = "45";
 comments[21] = "Id Pregunta: 1215. ";


//  Id pregunta: 1224 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  La informaci&oacute;n manejada por un Sistema de Informaci&oacute;n Geogr&aacute;fica que define las relaciones de tipo espacial existente entre los objetos modelizados, pertenece a la categor&iacute;a de:";
 choices[22]= new Array();
 choices[22][0] = "Informaci&oacute;n posicional.";
 choices[22][1] = "Informaci&oacute;n tem&aacute;tica.";
 choices[22][2] = "Informaci&oacute;n topol&oacute;gica.";
 choices[22][3] = "No existe tal tipo de informaci&oacute;n.";
 answers[22] = choices[22][2];
 units[22] = "67";
 comments[22] = "Id Pregunta: 1224. NULL";


//  Id pregunta: 1240 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  La resoluci&oacute;n distribuida de problemas (RDP) estudia sistemas inteligentes distribuidos, cuyos agentes cumplen unas caracter&iacute;sticas m&iacute;nimas de:";
 choices[23]= new Array();
 choices[23][0] = "Benevolencia, objetivos compartidos, dise&ntilde;o central";
 choices[23][1] = "Benevolencia, objetivos compartidos, dise&ntilde;o distribuido";
 choices[23][2] = "Benevolencia, objetivos propios. dise&ntilde;o distribuido";
 choices[23][3] = "Benevolencia,  objetivos propios, dise&ntilde;o central";
 answers[23] = choices[23][0];
 units[23] = "63";
 comments[23] = "Id Pregunta: 1240. ";


//  Id pregunta: 1260 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Las principales caracter&iacute;sticas de un almac&eacute;n de datos son:";
 choices[24]= new Array();
 choices[24][0] = "Organizado en torno a procesos, integrado, inpendiente del tiempo, no volatil";
 choices[24][1] = "Organizado en torno a temas, integrado, independiente del tiempo, volatil";
 choices[24][2] = "Organizado en torno a temas, integrado, dependiente del tiempo, no volatil";
 choices[24][3] = "Organizado en torno a procesos, integrado, dependiente del tiempo, volatil";
 answers[24] = choices[24][2];
 units[24] = "68";
 comments[24] = "Id Pregunta: 1260. NULL";


//  Id pregunta: 1265 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Las tecnolog&iacute;as del proceso distribuido permiten la captura de la informaci&oacute;n en el lugar en que la actividad se desarrolla y, en consecuencia, el an&aacute;lisis del trabajo puede ser realizado desde ese momento. Una consecuencia b&aacute;sica de este fen&oacute;meno es:";
 choices[25]= new Array();
 choices[25][0] = "Utilizar menos tiempo para la gesti&oacute;n y supervisi&oacute;n";
 choices[25][1] = "Utilizar m&aacute;s tiempo para la gesti&oacute;n al aumentar el volumen de informaci&oacute;n disponible";
 choices[25][2] = "Aumentar la posibilidad de p&eacute;rdida de datos sensibles para la gesti&oacute;n";
 choices[25][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[25] = choices[25][0];
 units[25] = "50";
 comments[25] = "Id Pregunta: 1265. ";


//  Id pregunta: 1293 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  OLTP son las siglas en ingl&eacute;s de software del tipo:";
 choices[26]= new Array();
 choices[26][0] = "Gestores de bases de datos orientadas a objetos.";
 choices[26][1] = "Gestores estandarizados de bases de datos documentales.";
 choices[26][2] = "Sistemas de Gestion Transaccional.";
 choices[26][3] = "Programas de an&aacute;lisis tipo data warehouse.";
 answers[26] = choices[26][2];
 units[26] = "83";
 comments[26] = "Id Pregunta: 1293. ";


//  Id pregunta: 1303 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  Para solucionar la posible colisi&oacute;n de distintas peticiones de actualizaci&oacute;n simult&aacute;neas sobre un mismo dato de la base de datos, utilizaremos la t&eacute;cnica denominada de:";
 choices[27]= new Array();
 choices[27][0] = "Bloqueo ";
 choices[27][1] = "Rollback";
 choices[27][2] = "Interbloqueo";
 choices[27][3] = "Inter-Roll";
 answers[27] = choices[27][0];
 units[27] = "57";
 comments[27] = "Id Pregunta: 1303. ";


//  Id pregunta: 1353 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  Se&ntilde;ale la respuesta falsa. Frente a RAID 1, RAID 5:";
 choices[28]= new Array();
 choices[28][0] = "Es m&aacute;s r&aacute;pido en escritura";
 choices[28][1] = "Utiliza m&aacute;s discos";
 choices[28][2] = "Ofrece menos espacio utilizable en relaci&oacute;n con el tama&ntilde;o total de los discos";
 choices[28][3] = "Todas las respuestas anteriores son falsas";
 answers[28] = choices[28][1];
 units[28] = "48";
 comments[28] = "Id Pregunta: 1353. ";


//  Id pregunta: 1358 AÃ±o de creación de pregunta: 2005-01-01
 questions[29]= "30)  &iquest;Qu&eacute; se conoce por SHA-2?:";
 choices[29]= new Array();
 choices[29][0] = "Una funci&oacute;n de compresi&oacute;n";
 choices[29][1] = "Un mecanismo de intercambio de claves";
 choices[29][2] = "Una infraestructura de clave p&uacute;blica (PKI))";
 choices[29][3] = "Un conjunto de funciones resumen";
 answers[29] = choices[29][3];
 units[29] = "72";
 comments[29] = "Id Pregunta: 1358. ";


//  Id pregunta: 1365 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  Si hablamos de formas normales en el modelo relacional, una de las siguientes afirmaciones es falsa:";
 choices[30]= new Array();
 choices[30][0] = "Una informaci&oacute;n est&aacute; en primera forma normal si no incluye ning&uacute;n grupo repetitivo";
 choices[30][1] = "La cuarta forma normal elimina dependencias monovaluadas";
 choices[30][2] = "La segunda forma normal, implica, adem&aacute;s de estar en primera forma normal, que en una relaci&oacute;n cualquiera de sus atributos no primarios tienen una dependencia plena con cada una de las claves, y no con partes de &eacute;stas";
 choices[30][3] = "La quinta forma normal elimina dependencias combinacionales";
 answers[30] = choices[30][1];
 units[30] = "58";
 comments[30] = "Id Pregunta: 1365. ";


//  Id pregunta: 1369 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  Si un disco tiene 7 pistas por cilindro y la capacidad  de cada  pista es de 2000 caracteres, para copiar una cinta que contiene 300 registros de 100 caracteres cada uno, &iquest;cu&aacute;ntos cilindros har&iacute;an falta?:";
 choices[31]= new Array();
 choices[31][0] = "3 cilindros";
 choices[31][1] = "2 cilindros";
 choices[31][2] = "4 cilindros";
 choices[31][3] = "5 cilindros";
 answers[31] = choices[31][0];
 units[31] = "48";
 comments[31] = "Id Pregunta: 1369. ";


//  Id pregunta: 1389 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  Un proveedor de servicios OLE DB es:";
 choices[32]= new Array();
 choices[32][0] = "Un componente OLE DB que en realidad no es propietario de los datos, y que puede proveer alg&uacute;n otro servicio";
 choices[32][1] = "Cualquier componente Software que expone sus datos a trav&eacute;s de una interfaz OLE DB";
 choices[32][2] = "Simult&aacute;neamente, un consumidor y un proveedor de datos";
 choices[32][3] = "Las respuestas 'a' y 'c' son correctas";
 answers[32] = choices[32][0];
 units[32] = "59";
 comments[32] = "Id Pregunta: 1389. ";


//  Id pregunta: 1414 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  Una de las siguientes caracter&iacute;sticas es falsa para los ordenadores RISC. Indicar cu&aacute;l:";
 choices[33]= new Array();
 choices[33][0] = "Consideran m&aacute;s importante la simplicidad en las instrucciones que en la longitud de los programas";
 choices[33][1] = "Las primitivas del ensamblador tienden a ser las mismas que las microinstrucciones";
 choices[33][2] = "Son adecuados para c&aacute;lculos mediante operaciones en coma flotante";
 choices[33][3] = "No debe emplearse la microprogramaci&oacute;n";
 answers[33] = choices[33][2];
 units[33] = "45";
 comments[33] = "Id Pregunta: 1414. ";


//  Id pregunta: 1432 AÃ±o de creación de pregunta: 2002-01-01
 questions[34]= "35)  XML:";
 choices[34]= new Array();
 choices[34][0] = "Es un lenguaje de presentaci&oacute;n, similar a HTML, pero m&aacute;s avanzado";
 choices[34][1] = "Est&aacute; orientado a especificar la estructura de los datos, no la forma de presentarlos";
 choices[34][2] = "Es similar a HTML pero con una orientaci&oacute;n hacia el mundo del dise&ntilde;o dado que permite realizar maginas web mas vistosas y din&aacute;micas";
 choices[34][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[34] = choices[34][1];
 units[34] = "69";
 comments[34] = "Id Pregunta: 1432. NULL";


//  Id pregunta: 1485 AÃ±o de creación de pregunta: 2002-01-01
 questions[35]= "36)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa cuando hablamos del Modelo de Componentes Distribuidos (DCOM)?:";
 choices[35]= new Array();
 choices[35][0] = "DCOM especifica interfaces entre objetos de componentes dentro de una sola aplicaci&oacute;n o entre aplicaciones";
 choices[35][1] = "Dispone de API para el descubrimiento din&aacute;mico de los interfaces que exporta un objeto";
 choices[35][2] = "El modelo de objetos soporta la herencia m&uacute;ltiple, al igual que CORBA";
 choices[35][3] = "Un componente DCOM es capaz de soportar interfaces m&uacute;ltiples";
 answers[35] = choices[35][2];
 units[35] = "59";
 comments[35] = "Id Pregunta: 1485. JCED - Preparatic XVII";


//  Id pregunta: 1489 AÃ±o de creación de pregunta: 2002-01-01
 questions[36]= "37)  El conocido est&aacute;ndar FireWire es el est&aacute;ndar IEEE:";
 choices[36]= new Array();
 choices[36][0] = "1284";
 choices[36][1] = "1394";
 choices[36][2] = "1384";
 choices[36][3] = "1294";
 answers[36] = choices[36][1];
 units[36] = "47";
 comments[36] = "Id Pregunta: 1489. ";


//  Id pregunta: 1503 AÃ±o de creación de pregunta: 2002-01-01
 questions[37]= "38)  Las arquitecturas de discos magn&eacute;ticos denominadas RAID-3 se caracterizan por:";
 choices[37]= new Array();
 choices[37][0] = "La distribuci&oacute;n ('striping') de los datos en varios discos a nivel de byte y el control de paridad en un disco dedicado";
 choices[37][1] = "La distribuci&oacute;n ('striping') de los datos en varios discos a nivel de byte y el control de paridad distribuido";
 choices[37][2] = "Garantizar la disponibilidad de los datos mediante la redundancia completa en discos espejo";
 choices[37][3] = "Garantizar la disponibilidad de los datos mediante el control de paridad redundante";
 answers[37] = choices[37][0];
 units[37] = "48";
 comments[37] = "Id Pregunta: 1503. ";


//  Id pregunta: 1533 AÃ±o de creación de pregunta: 2003-01-01
 questions[38]= "39)  &iquest; Cu&aacute;l de las siguientes no es una herramienta de copia remota de ficheros ?";
 choices[38]= new Array();
 choices[38][0] = "rcp";
 choices[38][1] = "rsync";
 choices[38][2] = "ftp";
 choices[38][3] = "vtam";
 answers[38] = choices[38][3];
 units[38] = "54";
 comments[38] = "Id Pregunta: 1533. NULL";


//  Id pregunta: 1552 AÃ±o de creación de pregunta: 2003-01-01
 questions[39]= "40)  &iquest;C&uacute;al de las siguientes afirmaciones sobre OLAP es falsa?";
 choices[39]= new Array();
 choices[39][0] = "Pueden presentar vistas de un n&uacute;mero reducido de dimensiones elegido por el usuario.";
 choices[39][1] = "Son capaces de analizar tendencias a lo largo de per&iacute;odos de tiempo.";
 choices[39][2] = "Permiten ahondar en la jerarqu&iacute;a de los datos para acceder a los de m&aacute;s bajo nivel.";
 choices[39][3] = "No pueden existir bases de datos OLAP relacionales.";
 answers[39] = choices[39][3];
 units[39] = "68";
 comments[39] = "Id Pregunta: 1552. ";


//  Id pregunta: 1576 AÃ±o de creación de pregunta: 2003-01-01
 questions[40]= "41)  &iquest;Qu&eacute; es un &lsquo;trigger&rsquo;?";
 choices[40]= new Array();
 choices[40][0] = "Es un procedimiento asociado a una acci&oacute;n (inserci&oacute;n, borrado o modificaci&oacute;n) y a una tabla que se ejecuta cada vez que se intenta realizar una determinada operaci&oacute;n sobre dicha tabla.";
 choices[40][1] = "Es un puntero interno al SGBD que apunta a las filas de las tablas sobre la que est&aacute; definido y sirve para acelerar el acceso a los datos de la base.";
 choices[40][2] = "Es un archivo privado del SGBD en el que se apuntan todas las operaciones que se realizan sobre la base de datos.";
 choices[40][3] = "Es un tipo de distribuci&oacute;n de las filas de una tabla que permite hacer accesos en paralelo a los datos de dicha tabla.";
 answers[40] = choices[40][0];
 units[40] = "58";
 comments[40] = "Id Pregunta: 1576. ";


//  Id pregunta: 1584 AÃ±o de creación de pregunta: 2003-01-01
 questions[41]= "42)  En el contexto del modelo de componentes software basados en Java, &iquest;qu&eacute; es un contenedor?:";
 choices[41]= new Array();
 choices[41][0] = "Un proceso donde se ejecutan los componentes Java.";
 choices[41][1] = "Una biblioteca de clases Java.";
 choices[41][2] = "Una interfaz de usuario.";
 choices[41][3] = "Un fichero XML que describe los componentes de aplicaci&oacute;n.";
 answers[41] = choices[41][0];
 units[41] = "60";
 comments[41] = "Id Pregunta: 1584. Junta Andaluc&iacute;a";


//  Id pregunta: 1662 AÃ±o de creación de pregunta: 2004-01-01
 questions[42]= "43)  De entre las siguientes maneras de manipular una base de datos SQL, indique la que no es correcta:";
 choices[42]= new Array();
 choices[42][0] = "Interactivamente, convocando directamente las sentencias SQL.";
 choices[42][1] = "Relacionalmente, invocando paralelamente sentencias SQL.";
 choices[42][2] = "Por m&oacute;dulos, agrupando sentencias SQL en m&oacute;dulos.";
 choices[42][3] = "Por medio de SQL embebido";
 answers[42] = choices[42][1];
 units[42] = "58";
 comments[42] = "Id Pregunta: 1662. MAP-B 2003";


//  Id pregunta: 1669 AÃ±o de creación de pregunta: 2004-01-01
 questions[43]= "44)  &iquest;En que generaci&oacute;n aparecen los circuitos integrados LSI?";
 choices[43]= new Array();
 choices[43][0] = "En la primera generaci&oacute;n";
 choices[43][1] = "En la segunda generaci&oacute;n";
 choices[43][2] = "En la tercera generaci&oacute;n";
 choices[43][3] = "En la cuarta generaci&oacute;n";
 answers[43] = choices[43][3];
 units[43] = "47";
 comments[43] = "Id Pregunta: 1669. ";


//  Id pregunta: 1680 AÃ±o de creación de pregunta: 2004-01-01
 questions[44]= "45)  &iquest;Qu&eacute; es un JNI?";
 choices[44]= new Array();
 choices[44][0] = "Es una interfaz que permite el acceso a bases de datos desde programas java";
 choices[44][1] = "Es una interfaz de programaci&oacute;n para gestionar entornos de ventanas en java";
 choices[44][2] = "Es una interfaz de programaci&oacute;n que facilita el acceso, generaci&oacute;n y desarrollo de componentes o programas para acceder a ficheros XML";
 choices[44][3] = "Es una interfaz est&aacute;ndar de programaci&oacute;n para llamar a m&eacute;todos nativos escritos en otros lenguajes, desde un programa java";
 answers[44] = choices[44][3];
 units[44] = "60";
 comments[44] = "Id Pregunta: 1680. NULL";


//  Id pregunta: 1693 AÃ±o de creación de pregunta: 2006-01-01
 questions[45]= "46)  Para definir un sistema SIMD se podr&iacute;a decir que &hellip;:";
 choices[45]= new Array();
 choices[45][0] = "Una instrucci&oacute;n no puede actuar sobre alguno de los elementos de procesamiento.";
 choices[45][1] = "Una instrucci&oacute;n act&uacute;a sobre un elemento de procesamiento.";
 choices[45][2] = "Una instrucci&oacute;n act&uacute;a sobre uno o varios elementos de procesamiento.";
 choices[45][3] = "Ninguna de las anteriores.";
 answers[45] = choices[45][2];
 units[45] = "45";
 comments[45] = "Id Pregunta: 1693. ";


//  Id pregunta: 1696 AÃ±o de creación de pregunta: 2006-01-01
 questions[46]= "47)  La m&iacute;nima unidad de informaci&oacute;n gr&aacute;fica que puede ser controlada, se denomina:";
 choices[46]= new Array();
 choices[46][0] = "Bit";
 choices[46][1] = "GIU";
 choices[46][2] = "Resoluci&oacute;n";
 choices[46][3] = "Pixel";
 answers[46] = choices[46][3];
 units[46] = "46";
 comments[46] = "Id Pregunta: 1696. ";


//  Id pregunta: 1748 AÃ±o de creación de pregunta: 2006-01-01
 questions[47]= "48)  Identifique el t&eacute;rmino que no designa a una distribuci&oacute;n de Linux";
 choices[47]= new Array();
 choices[47][0] = "Ubuntu";
 choices[47][1] = "Debian";
 choices[47][2] = "Mandeva";
 choices[47][3] = "Red Hat";
 answers[47] = choices[47][2];
 units[47] = "52,53";
 comments[47] = "Id Pregunta: 1748. 57";


//  Id pregunta: 1754 AÃ±o de creación de pregunta: 2006-01-01
 questions[48]= "49)  &iquest;Qu&eacute; es el CLR?";
 choices[48]= new Array();
 choices[48][0] = "Un lenguaje de programaci&oacute;n para .Net";
 choices[48][1] = "El entorno de ejecuci&oacute;n de .Net";
 choices[48][2] = "Una biblioteca de clases de objetos";
 choices[48][3] = "Un motor de bases de datos para dispositivos m&oacute;viles";
 answers[48] = choices[48][1];
 units[48] = "59";
 comments[48] = "Id Pregunta: 1754. ";


//  Id pregunta: 1758 AÃ±o de creación de pregunta: 2006-01-01
 questions[49]= "50)  En la arquitectura de la plataforma .NET ";
 choices[49]= new Array();
 choices[49][0] = "CLR es el entorno de ejecuci&oacute;n para .NET";
 choices[49][1] = "CLS  define las reglas que debe cumplir todo lenguaje que quiera trabajar con .NET.";
 choices[49][2] = "WebForms se utiliza para el desarrollo de aplicaciones dirigidas a Internet";
 choices[49][3] = "Todas son correctas";
 answers[49] = choices[49][3];
 units[49] = "59";
 comments[49] = "Id Pregunta: 1758. ";


//  Id pregunta: 1778 AÃ±o de creación de pregunta: 2006-01-01
 questions[50]= "51)  &iquest;Cual de los siguientes ser&iacute;a uno de los productos equivalentes a Excel en el software libre?";
 choices[50]= new Array();
 choices[50][0] = "Konqueror";
 choices[50][1] = "Kspread";
 choices[50][2] = "Apache";
 choices[50][3] = "Evolution";
 answers[50] = choices[50][1];
 units[50] = "61,62";
 comments[50] = "Id Pregunta: 1778. ";


//  Id pregunta: 1805 AÃ±o de creación de pregunta: 2006-01-01
 questions[51]= "52)  La iniciativa ADL (Advanced Distributed Learning) public&oacute; en el a&ntilde;o 2000 un modelo que trata de estandarizar los contenidos formativos digitales y que se conoce como";
 choices[51]= new Array();
 choices[51][0] = "SCORM";
 choices[51][1] = "B-Learning";
 choices[51][2] = "DFC";
 choices[51][3] = "ADL 2000";
 answers[51] = choices[51][0];
 units[51] = "66";
 comments[51] = "Id Pregunta: 1805. ";


//  Id pregunta: 1806 AÃ±o de creación de pregunta: 2006-01-01
 questions[52]= "53)  Dentro del terreno del e-learning, se&ntilde;ale qu&eacute; opci&oacute;n describe el &quot;blended learning&quot; de forma m&aacute;s exacta:";
 choices[52]= new Array();
 choices[52][0] = "Aquel modo de aprender que combina la ense&ntilde;anza presencial con la tecnolog&iacute;a no presencial";
 choices[52][1] = "Aprendizaje e-learning mediante combinaci&oacute;n de informaci&oacute;n alfanum&eacute;rica, gr&aacute;fica e hipertextual";
 choices[52][2] = "Aprendizaje mediante la profusi&oacute;n de elementos multimedia";
 choices[52][3] = "Aprendizaje basado en la mezcla cultural del alumnado, con experiencias diversas";
 answers[52] = choices[52][0];
 units[52] = "66";
 comments[52] = "Id Pregunta: 1806. &quot;blended learning&quot; = aprendizaje semipresencial";


//  Id pregunta: 1809 AÃ±o de creación de pregunta: 2006-01-01
 questions[53]= "54)  &iquest;Cu&aacute;l es la utilidad de la proyecci&oacute;n en los GIS?";
 choices[53]= new Array();
 choices[53][0] = "Permite reconocer los datos geogr&aacute;ficos utilizando fotograf&iacute;as, preferiblemente desde sat&eacute;lite.";
 choices[53][1] = "Soluciona los problemas de representar la curvatura terrestre en un plano.";
 choices[53][2] = "Facilita la realizaci&oacute;n de zooms sin perder resoluci&oacute;n tanto hacia dentro como hacia fuera.";
 choices[53][3] = "Permite cambiar la longitud de onda de las fotograf&iacute;as para poder visualizar cosas que no se pueden ver en el espectro visible.";
 answers[53] = choices[53][1];
 units[53] = "67";
 comments[53] = "Id Pregunta: 1809. NULL";


//  Id pregunta: 1832 AÃ±o de creación de pregunta: 2006-01-01
 questions[54]= "55)  OLAP significa:";
 choices[54]= new Array();
 choices[54][0] = "On-Line Automatic Prediction.";
 choices[54][1] = "On-Line Analytical Prediction.";
 choices[54][2] = "On-Line Automatic Processing.";
 choices[54][3] = "On-Line Analytical Processing.";
 answers[54] = choices[54][3];
 units[54] = "68";
 comments[54] = "Id Pregunta: 1832. ";


//  Id pregunta: 1840 AÃ±o de creación de pregunta: 2006-01-01
 questions[55]= "56)  Se&ntilde;ale cu&aacute;l de las siguientes tecnolog&iacute;as no est&aacute; relacionada con el comercio electr&oacute;nico:";
 choices[55]= new Array();
 choices[55][0] = "EDIFACT";
 choices[55][1] = "ODETTE";
 choices[55][2] = "ANSI X13";
 choices[55][3] = "XML";
 answers[55] = choices[55][2];
 units[55] = "70";
 comments[55] = "Id Pregunta: 1840. NULL";


//  Id pregunta: 1875 AÃ±o de creación de pregunta: 2006-01-01
 questions[56]= "57)  De acuerdo con la ley 59/2003, se&ntilde;ale la falsa:";
 choices[56]= new Array();
 choices[56][0] = "Por la comisi&oacute;n de infracciones muy graves, se impondr&aacute; al infractor multa de 150.001 a 600.000 euros";
 choices[56][1] = "Por la comisi&oacute;n de infracciones graves, se impondr&aacute; al infractor multa de 30.001 a 150.000 euros";
 choices[56][2] = "Por la comisi&oacute;n de infracciones leves, se impondr&aacute; al infractor una multa por importe de hasta 30.000 euros";
 choices[56][3] = "Ninguna de las anteriores";
 answers[56] = choices[56][3];
 units[56] = "30";
 comments[56] = "Id Pregunta: 1875. Ley 59/2003, art&iacute;culo 32";


//  Id pregunta: 1931 AÃ±o de creación de pregunta: 2006-01-01
 questions[57]= "58)  Seleccione la afirmaci&oacute;n incorrecta sobre la relaci&oacute;n de la especificaci&oacute;n Learning Design con otras especificaciones";
 choices[57]= new Array();
 choices[57][0] = "IMS DR puede ser transformado a las caracter&iacute;sticas de Learning Design, particularmente con la clase &quot;abstract person&quot;";
 choices[57][1] = "Learning Design puede ser integrado dentro la estructura de IMS Content Package en la secci&oacute;n de &lt;organization&gt;";
 choices[57][2] = "Learning Design puede incorporar preguntas y test definidos con IMS QTI";
 choices[57][3] = "Learning Design incluye expresiones, metadatos y vocabularios de IMS y IEEE metadata";
 answers[57] = choices[57][0];
 units[57] = "66";
 comments[57] = "Id Pregunta: 1931. ";


//  Id pregunta: 4287 AÃ±o de creación de pregunta: 2007-01-01
 questions[58]= "59)  Un programador tiene que codificar un procedimiento que act&uacute;a sobre un conjunto de datos de N elementos. Para ello conoce tres posibles algoritmos: Alfa, Beta y Gamma. El algoritmo Alfa tiene un rendimiento en tiempo de Nlog10N (logaritmo decimal). Beta rinde 2^N (dos elevado a N), y Gamma produce un rendimiento igual a N(N-1)/2. &iquest;Cu&aacute;l de los tres algoritmos es m&aacute;s eficiente si el resto de condiciones son id&eacute;nticas?";
 choices[58]= new Array();
 choices[58][0] = "Alfa.";
 choices[58][1] = "Beta.";
 choices[58][2] = "Gamma.";
 choices[58][3] = "No se puede determinar";
 answers[58] = choices[58][0];
 units[58] = "";
 comments[58] = "Id Pregunta: 4287. ";


//  Id pregunta: 4306 AÃ±o de creación de pregunta: 2007-01-01
 questions[59]= "60)  El sistema m&aacute;s econ&oacute;mico y sencillo para proporcionar autenticaci&oacute;n y autorizaci&oacute;n es:";
 choices[59]= new Array();
 choices[59][0] = "Utilizaci&oacute;n de passwords (palabras de paso).";
 choices[59][1] = "Utilizaci&oacute;n de certificados digitales";
 choices[59][2] = "Utilizaci&oacute;n de mecanismos biom&eacute;tricos.";
 choices[59][3] = "Utilizaci&oacute;n de un cortafuego (firewall).";
 answers[59] = choices[59][0];
 units[59] = "74";
 comments[59] = "Id Pregunta: 4306. NULL";


//  Id pregunta: 4369 AÃ±o de creación de pregunta: 2007-01-01
 questions[60]= "61)  Cu&aacute;l de las siguientes afirmaciones sobre la tecnolog&iacute;a de acceso a bases de datos ADO.NET no es correcta?";
 choices[60]= new Array();
 choices[60][0] = "El modelo de objetos ADO.NET provee una estructura de acceso a distintos or&iacute;genes de datos. Tiene 2 componentes principales: El Dataset y el proveedor de Datos .NET";
 choices[60][1] = "ADO.NET utiliza XML como formato para transmitir datos desde y hacia su base de datos y su aplicaci&oacute;n Web.";
 choices[60][2] = "ADO.NET es un conjunto de clases que se utiliza para acceder y manipular or&iacute;genes de datos como por ejemplo, una base de datos de SQL Server o una planilla Excel.";
 choices[60][3] = "ADO.NET utiliza un modelo de acceso pensando para entornos permanentemente conectados. Esto quiere decir que la aplicaci&oacute;n y el origen de datos deben estar en comunicaci&oacute;n permanente.";
 answers[60] = choices[60][3];
 units[60] = "59";
 comments[60] = "Id Pregunta: 4369. ";


//  Id pregunta: 4465 AÃ±o de creación de pregunta: 2007-01-01
 questions[61]= "62)  El algoritmo MD5:";
 choices[61]= new Array();
 choices[61][0] = "Es un algoritmo de cifrado asim&eacute;trico.";
 choices[61][1] = "Es un algoritmo de cifrado sim&eacute;trico.";
 choices[61][2] = "Es un algoritmo de funci&oacute;n hash.";
 choices[61][3] = "Es un algoritmo de almacenamiento de la clave privada";
 answers[61] = choices[61][2];
 units[61] = "72";
 comments[61] = "Id Pregunta: 4465. ";


//  Id pregunta: 4630 AÃ±o de creación de pregunta: 2007-01-01
 questions[62]= "63)  NO es una autoridad de certificaci&oacute;n electr&oacute;nica en Espa&ntilde;a";
 choices[62]= new Array();
 choices[62][0] = "IDCAT";
 choices[62][1] = "CAMERFIRMA";
 choices[62][2] = "CATCERT";
 choices[62][3] = "IZEMPE";
 answers[62] = choices[62][0];
 units[62] = "";
 comments[62] = "Id Pregunta: 4630. ";


//  Id pregunta: 4748 AÃ±o de creación de pregunta: 2007-01-01
 questions[63]= "64)  Indique la afirmaci&oacute;n cierta.";
 choices[63]= new Array();
 choices[63][0] = "El resultado de cifrar de nuevo un texto cifrado con otro algoritmo aporta una seguridad adicional, eso s&iacute;, implicando una carga extra de trabajo tanto para cifrar como para luego descifrar el texto";
 choices[63][1] = "Los cifradores de flujo no aportan informaci&oacute;n alguna al criptoanalista que observa el texto cifrado";
 choices[63][2] = "La calidad del algoritmo HASH es independiente de la calidad de la dispersi&oacute;n obtenida en dicho algoritmo";
 choices[63][3] = "El ataque del cumplea&ntilde;os no es aplicable a las funciones HASH, ya que no son reversibles";
 answers[63] = choices[63][1];
 units[63] = "72";
 comments[63] = "Id Pregunta: 4748. ";


//  Id pregunta: 4860 AÃ±o de creación de pregunta: 2007-01-01
 questions[64]= "65)  Los certificados de clave p&uacute;blica:";
 choices[64]= new Array();
 choices[64][0] = "Que se ajustan a la recomendaci&oacute;n X.509 v.2 no admiten extensiones";
 choices[64][1] = "Ocupan m&aacute;s de 100 kbytes";
 choices[64][2] = "Que se ajustan a la recomendaci&oacute;n X.509 v.3 s&oacute;lo admiten como algoritmo de cifrado el RSA (Rivest ShamirAdleman)";
 choices[64][3] = "Fueron propuestos por Diffie y Hellman en su art&iacute;culo en que establecieron las bases de los criptosistemasde clave p&uacute;blica";
 answers[64] = choices[64][0];
 units[64] = "73";
 comments[64] = "Id Pregunta: 4860. ";


//  Id pregunta: 5017 AÃ±o de creación de pregunta: 2003-01-01
 questions[65]= "66)  &iquest;Cu&aacute;l es una caracter&iacute;stica de los sistemas de informaci&oacute;n geogr&aacute;fica basados en formato r&aacute;ster?:";
 choices[65]= new Array();
 choices[65][0] = "Utiliza puntos, l&iacute;neas y pol&iacute;gonos para almacenar la informaci&oacute;n.";
 choices[65][1] = "La precisi&oacute;n de localizaci&oacute;n es mayor que en la de otros formatos.";
 choices[65][2] = "Se construye utilizando ret&iacute;culas de tama&ntilde;o regular.";
 choices[65][3] = "No es adecuado para modelos que incluyan evoluci&oacute;n temporal.";
 answers[65] = choices[65][2];
 units[65] = "67";
 comments[65] = "Id Pregunta: 5017. Examen TIC A 2007";


//  Id pregunta: 5091 AÃ±o de creación de pregunta: 2003-01-01
 questions[66]= "67)  La informaci&oacute;n en el chip del DNI est&aacute; distribuida en tres zonas, con diferentes niveles y condiciones de acceso. &iquest;Cu&aacute;l no es una de ellas?";
 choices[66]= new Array();
 choices[66][0] = "Zona privada";
 choices[66][1] = "Zona de control";
 choices[66][2] = "Zona de seguridad";
 choices[66][3] = "Zona p&uacute;blica";
 answers[66] = choices[66][1];
 units[66] = "74";
 comments[66] = "Id Pregunta: 5091. NULL";


//  Id pregunta: 5119 AÃ±o de creación de pregunta: 2003-01-01
 questions[67]= "68)  &iquest;En qu&eacute; variable de entorno UNIX se le reporta al servidor de X-Windows la direcci&oacute;n del cliente X donde debe abrir las ventanas?";
 choices[67]= new Array();
 choices[67][0] = "DISPLAY";
 choices[67][1] = "SCREEN";
 choices[67][2] = "XHOST";
 choices[67][3] = "XCLIENT";
 answers[67] = choices[67][0];
 units[67] = "54";
 comments[67] = "Id Pregunta: 5119. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5131 AÃ±o de creación de pregunta: 2003-01-01
 questions[68]= "69)  &iquest;Cu&aacute;l de las siguiente afirmaciones es cierta respecto a la firma electr&oacute;nica?";
 choices[68]= new Array();
 choices[68][0] = "La firma de documento se encuentra siempre dentro del documento original.";
 choices[68][1] = "En los certificados de persona jur&iacute;dica la identificaci&oacute;n de la persona solicitante se incluye en el certificado electr&oacute;nico.";
 choices[68][2] = "La extinci&oacute;n de un certificado s&oacute;lo puede ser por resoluci&oacute;n judicial que lo ordene.";
 choices[68][3] = "La extinci&oacute;n o suspensi&oacute;n de la vigencia de un certificado electr&oacute;nico tendr&aacute; efectos retroactivos.";
 answers[68] = choices[68][1];
 units[68] = "30";
 comments[68] = "Id Pregunta: 5131. Examen TIC A Castilla La Mancha 2007 (Ley 59/2003, art&iacute;culo 7.2)";


//  Id pregunta: 5452 AÃ±o de creación de pregunta: 2003-01-01
 questions[69]= "70)  El entorno de escritorio GNOME";
 choices[69]= new Array();
 choices[69][0] = "es uno de los entornos m&aacute;s avanzados y completos para Linux";
 choices[69][1] = "usa poco recursos del sistema porque no usa mucho espacio de disco o memoria";
 choices[69][2] = "es el escritorio por defecto de algunas distribuciones como Red Hat y Debian";
 choices[69][3] = "es el GUI elegido por los sistemas UNIX comerciales";
 answers[69] = choices[69][2];
 units[69] = "54";
 comments[69] = "Id Pregunta: 5452. Castilla y Le&oacute;n";


//  Id pregunta: 5696 AÃ±o de creación de pregunta: 2003-01-01
 questions[70]= "71)  Los certificados del DNI electr&oacute;nico:";
 choices[70]= new Array();
 choices[70][0] = "Se expiden voluntariamente a petici&oacute;n del ciudadano";
 choices[70][1] = " Se expiden siempre y vienen activados";
 choices[70][2] = "S&oacute;lo se expiden a quien autorice la Direcci&oacute;n General de la Polic&iacute;a";
 choices[70][3] = "Se expiden siempre, pero se activan voluntariamente con el consentimiento del ciudadano";
 answers[70] = choices[70][3];
 units[70] = "74";
 comments[70] = "Id Pregunta: 5696. NULL";


//  Id pregunta: 5708 AÃ±o de creación de pregunta: 2009-01-01
 questions[71]= "72)  Seleccione la opci&oacute;n correcta:";
 choices[71]= new Array();
 choices[71][0] = "SOAP es un protocolo para el intercambio de mensajes SOA";
 choices[71][1] = "Dos aplicaciones que se comunican mediante SOAP deben estar escritas en el mismo lenguaje de programaci&oacute;n";
 choices[71][2] = "Los mensajes SOAP se pueden transportar, entre otros medios, sobre HTTP, SMTP o palomas mensajeras";
 choices[71][3] = "Para que dos aplicaciones se comuniquen mediante SOAP siempre ser&aacute; necesario alterar las configuraciones de los posibles firewalls entre ellas";
 answers[71] = choices[71][2];
 units[71] = "51";
 comments[71] = "Id Pregunta: 5708. MAP 2008 A2";


//  Id pregunta: 5743 AÃ±o de creación de pregunta: 2009-01-01
 questions[72]= "73)  En criptograf&iacute;a sim&eacute;trica, &iquest;qu&eacute; es una sustituci&oacute;n monoalfab&eacute;tica?";
 choices[72]= new Array();
 choices[72][0] = "La que cifra los caracteres de uno en uno";
 choices[72][1] = "La que sustituye cada letra por varias letras";
 choices[72][2] = "Aquella en que cada letra es sustituida siempre por la misma dentro de un mismo mensaje";
 choices[72][3] = "La que sustituye las letras en grupos de longitud variable, dependiendo de su posici&oacute;n dentro del mensaje";
 answers[72] = choices[72][2];
 units[72] = "72";
 comments[72] = "Id Pregunta: 5743. ";


//  Id pregunta: 5779 AÃ±o de creación de pregunta: 2009-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l de los siguientes apartados NO es un grupo clave de la biblioteca de clases base en .NET?";
 choices[73]= new Array();
 choices[73][0] = "Windows Presentation Foundation";
 choices[73][1] = "ASP.NET";
 choices[73][2] = "ADO.NET";
 choices[73][3] = "ACY.NET";
 answers[73] = choices[73][3];
 units[73] = "59";
 comments[73] = "Id Pregunta: 5779. MAP 2008 A1";


//  Id pregunta: 6175 AÃ±o de creación de pregunta: 2010-01-01
 questions[74]= "75)  &iquest;Cual es la &uacute;ltima versi&oacute;n del protocolo SCORM?";
 choices[74]= new Array();
 choices[74][0] = "SCORM 1.0";
 choices[74][1] = "SCORM 1.1";
 choices[74][2] = "SCORM 1.2";
 choices[74][3] = "SCORM 2004";
 answers[74] = choices[74][3];
 units[74] = "66";
 comments[74] = "Id Pregunta: 6175. ";


//  Id pregunta: 8197 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  Indique cu&aacute;l es el cuadrado del n&uacute;mero hexadecimal 0xFFFF: ";
 choices[75]= new Array();
 choices[75][0] = "0x100000001. ";
 choices[75][1] = "0xFFFFFFFF.";
 choices[75][2] = "0xFFFE0001.";
 choices[75][3] = "0xFFFE0002";
 answers[75] = choices[75][2];
 units[75] = "46";
 comments[75] = "Id Pregunta: 8197. Examen TIC A1 2010";


//  Id pregunta: 8271 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  La familia de WINDOWS SERVER 2003 soporta clusters de servidor de hasta:";
 choices[76]= new Array();
 choices[76][0] = "16 nodos.";
 choices[76][1] = "4 nodos.";
 choices[76][2] = "8 nodos.";
 choices[76][3] = "32 nodos.";
 answers[76] = choices[76][2];
 units[76] = "56";
 comments[76] = "Id Pregunta: 8271. Examen TIC A1 2010";


//  Id pregunta: 8414 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  COBOL es el acr&oacute;nimo de: ";
 choices[77]= new Array();
 choices[77][0] = "COmputer BUsiness-Oriented Language (Lenguaje de Ordenador Orientado a Negocios). ";
 choices[77][1] = "COmmon Business-Oriented Language (Lenguaje Com&uacute;n Orientado a Negocios). ";
 choices[77][2] = "Common Object Business Oriented Language (Lenguaje Com&uacute;n Orientado a Objetos de Negocio). ";
 choices[77][3] = "No es un acr&oacute;nimo.";
 answers[77] = choices[77][1];
 units[77] = "57";
 comments[77] = "Id Pregunta: 8414. Examen TIC A2 2010";


//  Id pregunta: 8760 AÃ±o de creación de pregunta: 2011-01-01
 questions[78]= "79)  Una se&ntilde;al en UNIX es un mecanismo de comunicaci&oacute;n:";
 choices[78]= new Array();
 choices[78][0] = "Bidireccional";
 choices[78][1] = "S&iacute;ncrono.";
 choices[78][2] = "Entre procesos.";
 choices[78][3] = "En el fichero de cabecera &lt;stdio.h&gt; est&aacute;n definidas todas las se&ntilde;ales, n&uacute;mero y nombre.";
 answers[78] = choices[78][2];
 units[78] = "53, 54";
 comments[78] = "Id Pregunta: 8760. Examen TIC A2 2010 interna";


//  Id pregunta: 8816 AÃ±o de creación de pregunta: 2011-01-01
 questions[79]= "80)  Una de las partes fundamentales de ADO.NET son los DataSets, los cuales contienen una serie de objetos formando una jerarqu&iacute;a, &iquest;cu&aacute;les son v&aacute;lidos?";
 choices[79]= new Array();
 choices[79][0] = "DataSet, DataTable, DataView, DataColumn, DataRow, DataRowView, DataRelation, Constraint";
 choices[79][1] = "DataSet, DataTable, DataView, DataColumn, DataRow, pero no DataRowView, ni DataRelation, ni Constraint";
 choices[79][2] = "ADOSet, ADOTable, ADOView, ADOColumn, ADORow, ADORowView, ADORelation, Constraint";
 choices[79][3] = "ADOSet, ADOTable, ADOView, ADOColumn, ADORow, pero no ADORowView, ni ADORelation, ni Constraint";
 answers[79] = choices[79][0];
 units[79] = "59";
 comments[79] = "Id Pregunta: 8816. Examen UPM A2 2011";


//  Id pregunta: 8895 AÃ±o de creación de pregunta: 2011-01-01
 questions[80]= "81)  &iquest;Cu&aacute;l de las siguientes no corresponde a una funci&oacute;n digest?";
 choices[80]= new Array();
 choices[80][0] = "HMAC";
 choices[80][1] = "MD5";
 choices[80][2] = "MD8";
 choices[80][3] = "SHA";
 answers[80] = choices[80][2];
 units[80] = "74";
 comments[80] = "Id Pregunta: 8895. NULL";


//  Id pregunta: 9244 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  &iquest;C&oacute;mo divide el software Ubuntu?";
 choices[81]= new Array();
 choices[81][0] = "En secciones llamadas componentes.";
 choices[81][1] = "Los componentes principales son main, restricted, universe, commercial y multiverse.";
 choices[81][2] = "El componente multiverse contiene los paquetes sin soporte debido a que no cumple los requisitos de Software Libre.";
 choices[81][3] = "Todas son correctas.";
 answers[81] = choices[81][3];
 units[81] = "54";
 comments[81] = "Id Pregunta: 9244. ";


//  Id pregunta: 9684 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  &iquest;Cu&aacute;l de las siguientes opciones representa tipolog&iacute;as de sistemas SIG?";
 choices[82]= new Array();
 choices[82][0] = "SIG empresarial, SIG de sobremesa, Visualizadores SIG y WebSIG.";
 choices[82][1] = "SIG de componentes, Gesti&oacute;n Catastral y Servicios Posicionales.";
 choices[82][2] = "Ninguna es correcta. ";
 choices[82][3] = "Son correctas a y b.";
 answers[82] = choices[82][2];
 units[82] = "67";
 comments[82] = "Id Pregunta: 9684. NULL";


//  Id pregunta: 9752 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  Existen distintos tipos de algoritmos que se aplican en DataMining. &iquest;A qu&eacute; categor&iacute;a pertenece el algoritmo de Bayes Naive?";
 choices[83]= new Array();
 choices[83][0] = "Algoritmos de clasificaci&oacute;n.";
 choices[83][1] = "Algoritmos de regresi&oacute;n.";
 choices[83][2] = "Algoritmos de segmentaci&oacute;n. ";
 choices[83][3] = "Algoritmos de asociaci&oacute;n.";
 answers[83] = choices[83][0];
 units[83] = "68";
 comments[83] = "Id Pregunta: 9752. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9797 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  El uso conjunto de los certificados ubicados en el DNI electr&oacute;nico proporcionan las siguientes garant&iacute;as";
 choices[84]= new Array();
 choices[84][0] = "Disponibilidad, autenticidad de origen,confidencialidad y no repudio de origen. ";
 choices[84][1] = "Disponibilidad, integridad, autenticidad de origen. ";
 choices[84][2] = "Integridad, autenticidad de origen y no repudio de origen.";
 choices[84][3] = "Integridad, confidencialidad, autenticid ad de origen y no repudio de destino. ";
 answers[84] = choices[84][2];
 units[84] = "74";
 comments[84] = "Id Pregunta: 9797. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9920 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  &iquest;Cu&aacute;l de los siguientes es un Sistema Gestor de Bases de Datos Orientado a Objetos?";
 choices[85]= new Array();
 choices[85][0] = "Microsoft SQL Server.";
 choices[85][1] = "Versant.";
 choices[85][2] = "MariaDB.";
 choices[85][3] = "MySQL.";
 answers[85] = choices[85][1];
 units[85] = "57";
 comments[85] = "Id Pregunta: 9920. TIC A2, Examen 2013";


//  Id pregunta: 10005 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Microsoft ActiveX Data Objects de la plataforma .NET";
 choices[86]= new Array();
 choices[86][0] = "permite trabajar desconectado del origen de datos.";
 choices[86][1] = "no se integra con XML.";
 choices[86][2] = "es el precursor de RDO ( Remote Data Objects).";
 choices[86][3] = "utiliza una forma secuencial de navegaci&oacute;n para acceder a las filas de una tabla.";
 answers[86] = choices[86][0];
 units[86] = "59, 114";
 comments[86] = "Id Pregunta: 10005. ";


//  Id pregunta: 10241 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  Teniendo el siguiente c&oacute;digo, despu&eacute;s de ejecutarse &iquest;que respuestas son correctas?:int [] x = new int[25];";
 choices[87]= new Array();
 choices[87][0] = "x[24] es 0";
 choices[87][1] = "x[24] es indefinido";
 choices[87][2] = "x[25] es 0";
 choices[87][3] = "x[0] es igual a null";
 answers[87] = choices[87][0];
 units[87] = "60";
 comments[87] = "Id Pregunta: 10241. NULL";


//  Id pregunta: 10272 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  &iquest;Cu&aacute;l de los siguientes m&eacute;todos de b&uacute;squeda es de tipo heur&iacute;stico?";
 choices[88]= new Array();
 choices[88][0] = "B&uacute;squeda de profundida limitada";
 choices[88][1] = "B&uacute;squeda primero el mejor";
 choices[88][2] = "B&uacute;squeda de coste uniforme";
 choices[88][3] = "B&uacute;squeda bidireccional";
 answers[88] = choices[88][1];
 units[88] = "63";
 comments[88] = "Id Pregunta: 10272. NULL";


//  Id pregunta: 10290 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  Indique cu&aacute;l de los siguientes NO es un mecanismo en la gesti&oacute;n de una SAN para incrementar la seguridad:";
 choices[89]= new Array();
 choices[89][0] = "Masking";
 choices[89][1] = "Cluning";
 choices[89][2] = "Zoning";
 choices[89][3] = "Port Binding";
 answers[89] = choices[89][1];
 units[89] = "48";
 comments[89] = "Id Pregunta: 10290. TIC A2, libre, examen 2013";


//  Id pregunta: 10475 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  Si usamos el m&eacute;todo de comprobaci&oacute;n de la validez de un certificado mediante CRL en vez de OCSP puede ocurrir que (marcar la correcta respecto a CRL que no ocurrir&iacute;a usando OCSP)&hellip;";
 choices[90]= new Array();
 choices[90][0] = "El certificado que estamos validando est&eacute; malformado";
 choices[90][1] = "La autoridad de certificaci&oacute;n que emiti&oacute; el certificado sea incorrecta";
 choices[90][2] = "El certificado haya sido revocado desde la anterior emisi&oacute;n de CRL pero la consulta lo d&eacute; por v&aacute;lido";
 choices[90][3] = "El certificado haya expirado pero no se pueda verificar  la fecha de fin de validez y la comprobaci&oacute;n lo d&eacute; por v&aacute;lido cuando est&aacute; expirado.";
 answers[90] = choices[90][2];
 units[90] = "73";
 comments[90] = "Id Pregunta: 10475. ";


//  Id pregunta: 10533 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  Seg&uacute;n el modelo de madurez de Cloud Computing de Forrester, el nivel en el que el proveedor de SaaS ha creado un software espec&iacute;fico para tal prop&oacute;sito y que emplea, entre otras, la tenencia m&uacute;ltiple, es:";
 choices[91]= new Array();
 choices[91][0] = "nivel 1";
 choices[91][1] = "nivel 2";
 choices[91][2] = "nivel 3";
 choices[91][3] = "nivel 4";
 answers[91] = choices[91][2];
 units[91] = "47";
 comments[91] = "Id Pregunta: 10533. http://blogs.msdn.com/b/architectsrule/archive/2008/08/18/saas-maturity-model-according-to-forrester.aspx";


//  Id pregunta: 10621 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Se&ntilde;ale la respuesta correcta:";
 choices[92]= new Array();
 choices[92][0] = "Para desarrollar una aplicaci&oacute;n distribuida en Java es imprescindible la utilizaci&oacute;n de un servidor de aplicaciones.";
 choices[92][1] = "Weblogic es un contenedor de servlets.";
 choices[92][2] = "Wildfly es la versi&oacute;n gratuita de Jboss.";
 choices[92][3] = "Spring es un m&oacute;dulo de Java EE.";
//  Id pregunta: 10853 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Se&ntilde;ale la respuesta INCORRECTA respecto a la tecnolog&iacute;a de Servicios Web REST:";
 choices[93]= new Array();
 choices[93][0] = "JAX-RS es una API Java que proporciona soporte en la creaci&oacute;n de servicios web de acuerdo con REST.";
 choices[93][1] = "Jersey es una implementaci&oacute;n de referencia de servicios web REST.";
 choices[93][2] = "REST publica recursos que son accesibles a trav&eacute;s de m&eacute;todos http, por ejemplo POST y GET.";
 choices[93][3] = "Los recursos REST permiten s&oacute;lo 3 operaciones: CREATE, UPDATE y DELETE.";
 answers[93] = choices[93][3];
 units[93] = "51";
 comments[93] = "Id Pregunta: 10853. Examen GSI 2014";


//  Id pregunta: 10875 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Se&ntilde;ale de los siguientes cu&aacute;l NO es un cliente Subversion para control de versiones:";
 choices[94]= new Array();
 choices[94][0] = "TortoiseCVS";
 choices[94][1] = "Subversive";
 choices[94][2] = "Sventon";
 choices[94][3] = "Subclipse";
 answers[94] = choices[94][0];
 units[94] = "0";
 comments[94] = "Id Pregunta: 10875. Examen GSI 2014";


//  Id pregunta: 10877 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Cu&aacute;l de las siguientes relaciones NO es correcta:";
 choices[95]= new Array();
 choices[95][0] = "1024 Petabytes = 1 Zettabyte.";
 choices[95][1] = "1024 Zettabytes = 1 Yottabyte.";
 choices[95][2] = "1024 Yottabytes = 1 Brontobyte.";
 choices[95][3] = "1024 Brontobytes = 1 Geopbyte.";
 answers[95] = choices[95][0];
 units[95] = "0";
 comments[95] = "Id Pregunta: 10877. Examen GSI 2014";


//  Id pregunta: 11091 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Cu&aacute;l de los siguientes NO es un modelo de programaci&oacute;n paralela?";
 choices[96]= new Array();
 choices[96][0] = "CUDA";
 choices[96][1] = "OpenCL";
 choices[96][2] = "OpenStack";
 choices[96][3] = "MPI";
 answers[96] = choices[96][2];
 units[96] = "45";
 comments[96] = "Id Pregunta: 11091. ";


//  Id pregunta: 11142 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Seleccione la respuesta verdadera";
 choices[97]= new Array();
 choices[97][0] = "Los m&eacute;todos de aprendizaje no supervisado se utilizan para t&eacute;cnicas de clustering o agrupaci&oacute;n";
 choices[97][1] = "Los m&eacute;todos de aprendizaje supervisado y no supervisado parten de la misma base de datos de conocimiento";
 choices[97][2] = "Los m&eacute;todos de aprendizaje no supervisado permiten clasificar una muestra en funci&oacute;n de las clases conocidas";
 choices[97][3] = "Las redes neuronales son t&eacute;cnicas de aprendizaje no supervisado";
 answers[97] = choices[97][0];
 units[97] = "63";
 comments[97] = "Id Pregunta: 11142. ";


//  Id pregunta: 11143 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Cu&aacute;l de las siguientes no es una soluci&oacute;n CRM?";
 choices[98]= new Array();
 choices[98][0] = "Oracle Siebel CRM";
 choices[98][1] = "Microsoft Dynamics CRM";
 choices[98][2] = "Jive Software";
 choices[98][3] = "IBM RightNow Sugar CRM";
 answers[98] = choices[98][3];
 units[98] = "65";
 comments[98] = "Id Pregunta: 11143. ";


//  Id pregunta: 11741 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  En UNIX, un archivo se compone de:";
 choices[99]= new Array();
 choices[99][0] = "Un conjunto de i-nodos m&aacute;s un conjunto de bloques de datos.";
 choices[99][1] = "Una secuencia de bytes.";
 choices[99][2] = "Un conjunto de bloques de datos m&aacute;s la estructura de punteros que determina d&oacute;nde se encuentran &eacute;stos.";
 choices[99][3] = "Un bloque de datos m&aacute;s una cabecera de direccionamiento.";
 answers[99] = choices[99][2];
 units[99] = "53.54";
 comments[99] = "Id Pregunta: 11741. ";


