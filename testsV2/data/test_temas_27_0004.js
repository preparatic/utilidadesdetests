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

//  Id pregunta: 743 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  Dentro del campo de los almacenes de datos, los supermercados de datos o Data Marts:";
 choices[0]= new Array();
 choices[0][0] = "Son muy vol&aacute;tiles dada la gran frecuencia de actualizaci&oacute;n.";
 choices[0][1] = "son una versi&oacute;n especial de Data Warehouse, duplicados en varias m&aacute;quinas para agilizar el acceso a los mismos, que contienen los datos muy resumidos en una arquitectura distribuida por niveles.";
 choices[0][2] = "S&oacute;lo pueden ser accedidos por el departamento al que pertenecen los datos.";
 choices[0][3] = "Ninguna de las anteriores.";
 answers[0] = choices[0][1];
 units[0] = "68";
 comments[0] = "Id Pregunta: 743. Similar a examen TIC SS A 2003";


//  Id pregunta: 751 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  El lenguaje Java Script:";
 choices[1]= new Array();
 choices[1][0] = "Permite escribir c&oacute;digo que se compila en el servidor para su ejecuci&oacute;n en el cliente";
 choices[1][1] = "Es interpretado por el navegador cuando se abre un fichero virtual en el que se encuentra c&oacute;digo javascript embebido";
 choices[1][2] = "S&oacute;lo puede ser compilado si el cliente tiene instalada una m&aacute;quina virtual java (JVM)";
 choices[1][3] = "Se ejecuta en la m&aacute;quina cliente una vez que ha sido descargado en forma de applets, ejecutables en cualquier m&aacute;quina";
 answers[1] = choices[1][1];
 units[1] = "61";
 comments[1] = "Id Pregunta: 751. Examen TIC MAP B 2004";


//  Id pregunta: 799 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;Qu&eacute; tipo de aplicaciones son Vuze, eMule, eDonkey&hellip;?:";
 choices[2]= new Array();
 choices[2][0] = "Chat";
 choices[2][1] = "Correo electr&oacute;nico";
 choices[2][2] = "Peer to Peer";
 choices[2][3] = "B2C";
 answers[2] = choices[2][2];
 units[2] = "62";
 comments[2] = "Id Pregunta: 799. ";


//  Id pregunta: 861 AÃ±o de creación de pregunta: 2003-01-01
 questions[3]= "4)  &iquest;Cu&aacute;l de los siguientes ejemplos de tipos de aprendizaje en miner&iacute;a de datos es no supervisado?";
 choices[3]= new Array();
 choices[3][0] = "Modelado y control.";
 choices[3][1] = "Sistemas de predicci&oacute;n.";
 choices[3][2] = "Descubrimiento de patrones.";
 choices[3][3] = "&Aacute;rboles de predicci&oacute;n.";
 answers[3] = choices[3][2];
 units[3] = "68";
 comments[3] = "Id Pregunta: 861. ";


//  Id pregunta: 888 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;Cu&aacute;l no es una caracter&iacute;stica b&aacute;sica de los sistemas OLAP?";
 choices[4]= new Array();
 choices[4][0] = "Permite actualizar la informaci&oacute;n de manera r&aacute;pida y f&aacute;cil.";
 choices[4][1] = "Permiten ahondar en la jerarqu&iacute;a de los datos para acceder a los de m&aacute;s bajo nivel.";
 choices[4][2] = "Ofrecen una visi&oacute;n m&uacute;ltidimensional y jerarquizada de los datos.";
 choices[4][3] = "Son capaces de analizar tendencias a lo largo de per&iacute;odos de tiempo.";
 answers[4] = choices[4][0];
 units[4] = "68";
 comments[4] = "Id Pregunta: 888. ";


//  Id pregunta: 900 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;Es posible averiguar el peso de un cuerpo a partir de una imagen o conjunto de im&aacute;genes?:";
 choices[5]= new Array();
 choices[5][0] = "No, ya que faltan magnitudes que no pueden obtenerse de una imagen.";
 choices[5][1] = "No, ya que aunque se dispongan de todos los datos el peso no se relaciona en nada con sus dimensiones.";
 choices[5][2] = "S&iacute;, mediante sencillos c&aacute;lculos aritm&eacute;ticos sobre los p&iacute;xeles, viendo c&oacute;mo var&iacute;a su tonalidad.";
 choices[5][3] = "S&iacute;, mediante t&eacute;cnicas de triangulaci&oacute;n y de c&aacute;lculo de tiempos de vuelo de se&ntilde;ales sonda se obtienen las dimensiones (por consiguiente el volumen), y mediante las im&aacute;genes de c&aacute;maras infrarrojas su densidad, obteniendo a partir de estas 2 magnitudes el peso.";
 answers[5] = choices[5][3];
 units[5] = "67";
 comments[5] = "Id Pregunta: 900. NULL";


//  Id pregunta: 910 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Pueden convivir marcos, reglas y restricciones en un mismo sistema basado en conocimiento?:";
 choices[6]= new Array();
 choices[6][0] = "Si";
 choices[6][1] = "No, pero reglas y restricciones si";
 choices[6][2] = "No, pero reglas y marcos si";
 choices[6][3] = "No";
 answers[6] = choices[6][0];
 units[6] = "64";
 comments[6] = "Id Pregunta: 910. ";


//  Id pregunta: 926 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Qu&eacute; es la l&oacute;gica borrosa o difusa -fuzzy logic-?:";
 choices[7]= new Array();
 choices[7][0] = "Es una rama de la l&oacute;gica binaria que invierte los conceptos para que el ordenador realice operaciones m&aacute;s eficientemente en l&oacute;gica negativa aunque para el ser humano se pierda comprensi&oacute;n";
 choices[7][1] = "Es una rama de la ingenier&iacute;a que trata la l&oacute;gica booleana mediante transformaciones puntuales de cambios de base para introducir variables auxiliares a conveniencia";
 choices[7][2] = "Es una rama de la ingenier&iacute;a que simplifica ecuaciones muy complejas para resolverlas mediante aproximaciones de los valores de la soluci&oacute;n seg&uacute;n grados de pertenencia a conjuntos m&aacute;s o menos subjetivos y probabil&iacute;sticos";
 choices[7][3] = "Nada de lo anterior es cierto";
 answers[7] = choices[7][2];
 units[7] = "63";
 comments[7] = "Id Pregunta: 926. ";


//  Id pregunta: 927 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Qu&eacute; es la miner&iacute;a de datos?";
 choices[8]= new Array();
 choices[8][0] = "Es el an&aacute;lisis de datos que permite extraer informaci&oacute;n de bases de datos mediante la b&uacute;squeda manual de patrones y relaciones.";
 choices[8][1] = "Es el an&aacute;lisis de datos que permite extraer informaci&oacute;n de bases de datos mediante la b&uacute;squeda automatizada de patrones y relaciones.";
 choices[8][2] = "Es el an&aacute;lisis de datos que permite extraer informaci&oacute;n de bases de datos mediante la b&uacute;squeda aleatoria de patrones y relaciones.";
 choices[8][3] = "Nada de lo anterior es correcto.";
 answers[8] = choices[8][1];
 units[8] = "68";
 comments[8] = "Id Pregunta: 927. ";


//  Id pregunta: 961 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  Considerando la orientaci&oacute;n l&oacute;gica en inteligencia artificial:";
 choices[9]= new Array();
 choices[9][0] = "La definici&oacute;n matem&aacute;tica de los mecanismos mediante los cuales ser&aacute; posible deducir f&oacute;rmulas a partir de otras es independiente de que se haya formalizado o no la estructura de las frases";
 choices[9][1] = "El sistema de Kleene, como ejemplo de sistema formal y de la teor&iacute;a de la demostraci&oacute;n, pertenece a la orientaci&oacute;n heur&iacute;stica y no a la orientaci&oacute;n l&oacute;gica";
 choices[9][2] = "La forma de representar las estructuras deductivas tiene dos l&iacute;neas principales: la de los sistemas formales y la de la sem&aacute;ntica";
 choices[9][3] = "Las soluciones de los Sistemas de Kleene est&aacute;n basadas en las formalizaciones del c&aacute;lculo proposicional y del c&aacute;lculo de predicados";
 answers[9] = choices[9][2];
 units[9] = "63";
 comments[9] = "Id Pregunta: 961. ";


//  Id pregunta: 1107 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  En la extracci&oacute;n del conocimiento en la miner&iacute;a de datos, &iquest;qu&eacute; ejemplo de los siguientes no se corresponde con aprendizaje supervisado?";
 choices[10]= new Array();
 choices[10][0] = "Sistemas de clasificaci&oacute;n.";
 choices[10][1] = "Patrones de comportamiento.";
 choices[10][2] = "Sistemas de predicci&oacute;n.";
 choices[10][3] = "Modelado y control.";
 answers[10] = choices[10][1];
 units[10] = "68";
 comments[10] = "Id Pregunta: 1107. ";


//  Id pregunta: 1122 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  En los m&eacute;todos de b&uacute;squeda heur&iacute;stica:";
 choices[11]= new Array();
 choices[11][0] = "El proceso de soluci&oacute;n se plantea como la b&uacute;squeda de estados que contiene todas las posibles soluciones";
 choices[11][1] = "Las estrategias de b&uacute;squeda en anchura pertenecen a la heur&iacute;stica deductiva";
 choices[11][2] = "La amplitud del espacio de estados en un problema dado, dif&iacute;cilmente puede dar lugar a una explosi&oacute;n combinatoria al tratar de enumerar todas las posibilidades";
 choices[11][3] = "En un caso extremo, una b&uacute;squeda ciega (sin funci&oacute;n heur&iacute;stica), obligar&aacute; a realizar una exploraci&oacute;n exhaustiva (en anchura o en profundidad)";
 answers[11] = choices[11][3];
 units[11] = "63";
 comments[11] = "Id Pregunta: 1122. ";


//  Id pregunta: 1177 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Indicar cu&aacute;l de las siguientes no es una estructura v&aacute;lida de marcos en las bases de conocimiento:";
 choices[12]= new Array();
 choices[12][0] = "Jerarqu&iacute;a circular";
 choices[12][1] = "Jerarqu&iacute;a simple";
 choices[12][2] = "Jerarqu&iacute;a m&uacute;ltiple";
 choices[12][3] = "Colecci&oacute;n lineal";
 answers[12] = choices[12][0];
 units[12] = "64";
 comments[12] = "Id Pregunta: 1177. ";


//  Id pregunta: 1180 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Indicar cu&aacute;l de los siguientes agentes software inteligentes no existe:";
 choices[13]= new Array();
 choices[13][0] = "Agentes interfaz";
 choices[13][1] = "Agentes de gesti&oacute;n";
 choices[13][2] = "Agentes de informaci&oacute;n";
 choices[13][3] = "Agentes virtuales";
 answers[13] = choices[13][1];
 units[13] = "63";
 comments[13] = "Id Pregunta: 1180. ";


//  Id pregunta: 1183 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  Indicar la respuesta falsa respecto a la representaci&oacute;n del conocimiento:";
 choices[14]= new Array();
 choices[14][0] = "En inteligencia artificial el conocimiento puede representarse mediante marcos";
 choices[14][1] = "En inteligencia artificial el conocimiento puede representarse mediante redes sem&aacute;nticas";
 choices[14][2] = "En inteligencia artificial el conocimiento puede representarse mediante DFDs";
 choices[14][3] = "En inteligencia artificial el conocimiento puede representarse mediante reglas de inferencia";
 answers[14] = choices[14][2];
 units[14] = "64";
 comments[14] = "Id Pregunta: 1183. ";


//  Id pregunta: 1190 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  Indique cu&aacute;l de las siguientes es una caracter&iacute;stica exclusiva del software libre frente a otros tipos de licencias de software:";
 choices[15]= new Array();
 choices[15][0] = "Fuentes abiertas";
 choices[15][1] = "Gratuidad";
 choices[15][2] = "Libre copia y distribuci&oacute;n del c&oacute;digo fuente";
 choices[15][3] = "Todas las caracteristicas anteriores son exclusivas del software libre";
 answers[15] = choices[15][2];
 units[15] = "61";
 comments[15] = "Id Pregunta: 1190. ";


//  Id pregunta: 1240 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  La resoluci&oacute;n distribuida de problemas (RDP) estudia sistemas inteligentes distribuidos, cuyos agentes cumplen unas caracter&iacute;sticas m&iacute;nimas de:";
 choices[16]= new Array();
 choices[16][0] = "Benevolencia, objetivos compartidos, dise&ntilde;o central";
 choices[16][1] = "Benevolencia, objetivos compartidos, dise&ntilde;o distribuido";
 choices[16][2] = "Benevolencia, objetivos propios. dise&ntilde;o distribuido";
 choices[16][3] = "Benevolencia,  objetivos propios, dise&ntilde;o central";
 answers[16] = choices[16][0];
 units[16] = "63";
 comments[16] = "Id Pregunta: 1240. ";


//  Id pregunta: 1284 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Los tipos de an&aacute;lisis desarrollados en Data Mining se dividen com&uacute;nmente en:";
 choices[17]= new Array();
 choices[17][0] = "Sint&aacute;ctico y sem&aacute;ntico.";
 choices[17][1] = "Estad&iacute;stico y de calidad.";
 choices[17][2] = "Gr&aacute;fico y textual.";
 choices[17][3] = "Supervisado y no supervisado.";
 answers[17] = choices[17][3];
 units[17] = "68";
 comments[17] = "Id Pregunta: 1284. ";


//  Id pregunta: 1449 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  &iquest;Cu&aacute;l de las siguientes licencias no es compatible con la licencia General Public License (GPL)?:";
 choices[18]= new Array();
 choices[18][0] = "Lesser General Public License (LGPL)";
 choices[18][1] = "Modified BSD License";
 choices[18][2] = "Mozilla Public License (MPL)";
 choices[18][3] = "X11 License";
 answers[18] = choices[18][2];
 units[18] = "61,62";
 comments[18] = "Id Pregunta: 1449. ";


//  Id pregunta: 1521 AÃ±o de creación de pregunta: 2003-01-01
 questions[19]= "20)  C&oacute;mo se llama la licencia bajo la que se distribuye el software del proyecto GNU";
 choices[19]= new Array();
 choices[19][0] = "MPL";
 choices[19][1] = "BSD";
 choices[19][2] = "GPL";
 choices[19][3] = "PPL";
 answers[19] = choices[19][2];
 units[19] = "61";
 comments[19] = "Id Pregunta: 1521. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 1524 AÃ±o de creación de pregunta: 2003-01-01
 questions[20]= "21)  Cu&aacute;l de las siguientes afirmaciones respecto a LINUX es falsa";
 choices[20]= new Array();
 choices[20][0] = "est&aacute; constituido por un n&uacute;cleo kernel; cada usuario debe construirse las librer&iacute;as y programa para poderlo utilizar";
 choices[20][1] = "es un sistema operativo compatible con UNIX";
 choices[20][2] = "es un software libre";
 choices[20][3] = "el sistema viene acompa&ntilde;ado del c&oacute;digo fuente";
 answers[20] = choices[20][0];
 units[20] = "61,62";
 comments[20] = "Id Pregunta: 1524. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 1525 AÃ±o de creación de pregunta: 2003-01-01
 questions[21]= "22)  Dentro de las t&eacute;cnicas de representaci&oacute;n del conocimiento indicar a que modelo pertenecen los algoritmos gen&eacute;ticos";
 choices[21]= new Array();
 choices[21][0] = "Modelo Simb&oacute;lico";
 choices[21][1] = " Modelo de conocimiento profundo";
 choices[21][2] = " Modelo Param&eacute;trico";
 choices[21][3] = "Razonamiento multinivel";
 answers[21] = choices[21][2];
 units[21] = "64";
 comments[21] = "Id Pregunta: 1525. ";


//  Id pregunta: 1532 AÃ±o de creación de pregunta: 2003-01-01
 questions[22]= "23)  &iquest; Cu&aacute;l de las siguientes no es una distribuci&oacute;n de Linux ?";
 choices[22]= new Array();
 choices[22][0] = "Debian";
 choices[22][1] = "Gentoo";
 choices[22][2] = "Max";
 choices[22][3] = "FreeBSD";
 answers[22] = choices[22][3];
 units[22] = "61,62";
 comments[22] = "Id Pregunta: 1532. ";


//  Id pregunta: 1534 AÃ±o de creación de pregunta: 2003-01-01
 questions[23]= "24)  &iquest; Cu&aacute;l de los siguientes no es un SGBD del tipo open source ?";
 choices[23]= new Array();
 choices[23][0] = "MySql";
 choices[23][1] = "PostgreSQL";
 choices[23][2] = "SQLite";
 choices[23][3] = "Zope";
 answers[23] = choices[23][3];
 units[23] = "61,62";
 comments[23] = "Id Pregunta: 1534. ";


//  Id pregunta: 1554 AÃ±o de creación de pregunta: 2003-01-01
 questions[24]= "25)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no est&aacute; asociada al concepto de Software Libre?:";
 choices[24]= new Array();
 choices[24][0] = "Redistribuci&oacute;n libre.";
 choices[24][1] = "Acceso al c&oacute;digo fuente del programa.";
 choices[24][2] = "Derecho de modificaci&oacute;n.";
 choices[24][3] = "Distribuci&oacute;n libre del programa pero no de la licencia.";
 answers[24] = choices[24][3];
 units[24] = "61";
 comments[24] = "Id Pregunta: 1554. Junta Andaluc&iacute;a";


//  Id pregunta: 1569 AÃ±o de creación de pregunta: 2003-01-01
 questions[25]= "26)  &iquest;Cu&aacute;l no es un modelo de extracci&oacute;n de datos en miner&iacute;a de datos?";
 choices[25]= new Array();
 choices[25][0] = " De verificaci&oacute;n.";
 choices[25][1] = " De descubrimiento.";
 choices[25][2] = "Jer&aacute;rquico.";
 choices[25][3] = "Predictivo.";
 answers[25] = choices[25][2];
 units[25] = "68";
 comments[25] = "Id Pregunta: 1569. ";


//  Id pregunta: 1573 AÃ±o de creación de pregunta: 2003-01-01
 questions[26]= "27)  &iquest;En qu&eacute; consiste el concepto de &quot;web sem&aacute;ntica&quot;?";
 choices[26]= new Array();
 choices[26][0] = "Se trata de un sistema de gesti&oacute;n de contenidos que permite buscar &aacute;gilmente el significado de todo tipo de t&eacute;rminos";
 choices[26][1] = "Se trata de que las p&aacute;ginas web puedan, no s&oacute;lo presentar informaci&oacute;n, sino &quot;entenderla&quot;";
 choices[26][2] = "Es un medio de documentos para personas";
 choices[26][3] = "Todas las anteriores son definiciones correctas";
 answers[26] = choices[26][1];
 units[26] = "64";
 comments[26] = "Id Pregunta: 1573. ";


//  Id pregunta: 1629 AÃ±o de creación de pregunta: 2003-01-01
 questions[27]= "28)  Sobre el entorno WINE de Linux se puede decir que:";
 choices[27]= new Array();
 choices[27][0] = "Es un emulador de Windows";
 choices[27][1] = "Es una implementaci&oacute;n de c&oacute;digo fuente abierto de la API de Windows que funciona sobre una plataforma X11";
 choices[27][2] = "Permite ejecutar todas las aplicaciones de Windows 32 sobre Linux";
 choices[27][3] = "Es un sistema de gesti&oacute;n de ventanas para Linux con la apariencia de Windows";
 answers[27] = choices[27][1];
 units[27] = "62";
 comments[27] = "Id Pregunta: 1629. ";


//  Id pregunta: 1647 AÃ±o de creación de pregunta: 2004-01-01
 questions[28]= "29)  &iquest;Cu&aacute;l de los siguientes son subsistemas usuales en un sistema de e-learning?";
 choices[28]= new Array();
 choices[28][0] = "LCMS (Learning Content Management System)";
 choices[28][1] = "LOMS (Learning Objects Management System)";
 choices[28][2] = "CRM (Customer Relationship Management)";
 choices[28][3] = "Todos los anteriores";
 answers[28] = choices[28][0];
 units[28] = "66";
 comments[28] = "Id Pregunta: 1647. ";


//  Id pregunta: 1685 AÃ±o de creación de pregunta: 2004-01-01
 questions[29]= "30)  Sobre el e-learnig";
 choices[29]= new Array();
 choices[29][0] = "Es el uso de las tecnolog&iacute;as multimedia para mejorar y desarrollar nuevas estrategias de aprendizaje";
 choices[29][1] = "Algunas de las facilidades que aporta el e-learning son la accesibilidad geogr&aacute;fica y la flexibilidad en el tiempo";
 choices[29][2] = "Las dos afirmaciones anteriores son correctas";
 choices[29][3] = "Todas las afirmaciones anteriores son falsas";
 answers[29] = choices[29][2];
 units[29] = "66";
 comments[29] = "Id Pregunta: 1685. ";


//  Id pregunta: 1686 AÃ±o de creación de pregunta: 2004-01-01
 questions[30]= "31)  &iquest;Con que otro nombre se conoce tambi&eacute;n a la informaci&oacute;n georreferenciada?";
 choices[30]= new Array();
 choices[30][0] = "Informaci&oacute;n espacial.";
 choices[30][1] = "Informaci&oacute;n geogr&aacute;fica.";
 choices[30][2] = "Geodatos.";
 choices[30][3] = "Todas las anteriores.";
 answers[30] = choices[30][3];
 units[30] = "67";
 comments[30] = "Id Pregunta: 1686. NULL";


//  Id pregunta: 1774 AÃ±o de creación de pregunta: 2006-01-01
 questions[31]= "32)  El Software Libre es bueno para las Administraciones P&uacute;blicas porque&hellip; Se&ntilde;ale la respuesta FALSA";
 choices[31]= new Array();
 choices[31][0] = "Es gratis";
 choices[31][1] = "Permite conocer exactamente el funcionamiento de los programas";
 choices[31][2] = "Facilita la conservaci&oacute;n de la informaci&oacute;n p&uacute;blica, libre de patentes y formatos propietarios";
 choices[31][3] = "Abre la posibilidad de contratar soporte t&eacute;cnico en un mercado en competencia";
 answers[31] = choices[31][0];
 units[31] = "61,62";
 comments[31] = "Id Pregunta: 1774. ";


//  Id pregunta: 1776 AÃ±o de creación de pregunta: 2006-01-01
 questions[32]= "33)  El modelo de proceso de desarrollo de fuente abierta, b&aacute;sicamente descentralizado y caracter&iacute;stico de productos como Linux, Apache, Mozilla, Perl y Lisp/Emacs, se ha dado en llamar:";
 choices[32]= new Array();
 choices[32][0] = "Mercado";
 choices[32][1] = "Bazar";
 choices[32][2] = "Catedral";
 choices[32][3] = "Iglesia";
 answers[32] = choices[32][1];
 units[32] = "61,62";
 comments[32] = "Id Pregunta: 1776. ";


//  Id pregunta: 1778 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  &iquest;Cual de los siguientes ser&iacute;a uno de los productos equivalentes a Excel en el software libre?";
 choices[33]= new Array();
 choices[33][0] = "Konqueror";
 choices[33][1] = "Kspread";
 choices[33][2] = "Apache";
 choices[33][3] = "Evolution";
 answers[33] = choices[33][1];
 units[33] = "61,62";
 comments[33] = "Id Pregunta: 1778. ";


//  Id pregunta: 1781 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  Cual de los siguientes no forma parte del paquete Open Office";
 choices[34]= new Array();
 choices[34][0] = "Impress";
 choices[34][1] = "Calc";
 choices[34][2] = "Math";
 choices[34][3] = "Text";
 answers[34] = choices[34][3];
 units[34] = "61,62";
 comments[34] = "Id Pregunta: 1781. ";


//  Id pregunta: 1788 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  Al realizar la b&uacute;squeda en un espacio de estados, el m&eacute;todo de backtraking &hellip;";
 choices[35]= new Array();
 choices[35][0] = "Solo se puede usar para b&uacute;squedas ciegas";
 choices[35][1] = "Permite ahorrar recursos de computaci&oacute;n";
 choices[35][2] = "Permite recorrer los &aacute;rboles solo en anchura";
 choices[35][3] = "Permite recorrer los &aacute;rboles solo en profundidad";
 answers[35] = choices[35][1];
 units[35] = "63";
 comments[35] = "Id Pregunta: 1788. ";


//  Id pregunta: 1790 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  Se&ntilde;ale de qu&eacute; etapa del desarrollo de la inteligencia artifical son propias las t&eacute;cnicas de b&uacute;squeda heur&iacute;stica";
 choices[36]= new Array();
 choices[36][0] = "Difusi&oacute;n actual";
 choices[36][1] = "Etapa de prototipos";
 choices[36][2] = "Sistemas expertos";
 choices[36][3] = "Etapa inicial";
 answers[36] = choices[36][0];
 units[36] = "63";
 comments[36] = "Id Pregunta: 1790. ";


//  Id pregunta: 1792 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  Los agentes de software inteligentes pueden clasificarse en tres &aacute;reas de acuerdo a sus &aacute;reas de aplicaci&oacute;n. Indique qu&eacute; terna define dichas &aacute;reas:";
 choices[37]= new Array();
 choices[37][0] = "Agentes virtuales, de informaci&oacute;n y de heur&iacute;sticas";
 choices[37][1] = "Agentes de informaci&oacute;n, de interfaz y de heur&iacute;sticas";
 choices[37][2] = "Agentes de interfaz, de informaci&oacute;n, y virtuales";
 choices[37][3] = "Agentes virtuales, de interfaz y de heur&iacute;sticas";
 answers[37] = choices[37][2];
 units[37] = "63";
 comments[37] = "Id Pregunta: 1792. ";


//  Id pregunta: 1794 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  Para representaci&oacute;n del conocimiento, las redes sem&aacute;nticas";
 choices[38]= new Array();
 choices[38][0] = "Utilizan redes donde los nodos son ideas y los arcos relaciones entre ellas";
 choices[38][1] = "Utilizan slots donde cada slot se corresponde con una idea ";
 choices[38][2] = "Generan nuevas soluciones mediante mutaciones aleatorias de la poblaci&oacute;n";
 choices[38][3] = "Utilizan redes donde cada nodo tiene un valor y cada arco un sentido y un valor.";
 answers[38] = choices[38][0];
 units[38] = "64";
 comments[38] = "Id Pregunta: 1794. ";


//  Id pregunta: 1800 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  En el campo de los sistemas expertos, se&ntilde;ale de las siguientes opciones aquella que enumere sistemas que utilicen representaci&oacute;n param&eacute;trica:";
 choices[39]= new Array();
 choices[39][0] = "Redes neuronales; representaci&oacute;n por marcos; sistemas basados en restricciones";
 choices[39][1] = "Algoritmos gen&eacute;ticos; redes neuronales y redes sem&aacute;nticas";
 choices[39][2] = "Redes neuronales, redes sem&aacute;nticas, y sistemas basados en marcos";
 choices[39][3] = "Redes neuronales y el perceptr&oacute;n";
 answers[39] = choices[39][3];
 units[39] = "64";
 comments[39] = "Id Pregunta: 1800. ";


//  Id pregunta: 1804 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  Se&ntilde;ale la afirmaci&oacute;n que sea FALSA acerca de la educaci&oacute;n virtual (e-learning)";
 choices[40]= new Array();
 choices[40][0] = "La educaci&oacute;n virtual exige a los alumnos m&aacute;s esfuerzo en aprender las t&eacute;cnicas que en el contenido";
 choices[40][1] = "Lo realmente complejo en la educaci&oacute;n virtual es la instalaci&oacute;n de las herramientas necesarias";
 choices[40][2] = "La educaci&oacute;n virtual no rivaliza con la educaci&oacute;n presencial";
 choices[40][3] = "La educaci&oacute;n virtual permite la evaluaci&oacute;n de los alumnos de forma completamente fiable";
 answers[40] = choices[40][3];
 units[40] = "66";
 comments[40] = "Id Pregunta: 1804. ";


//  Id pregunta: 1807 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  Se&ntilde;ale la opci&oacute;n que enumera tres de las especificaciones m&aacute;s robustas en el sector del e-learning";
 choices[41]= new Array();
 choices[41][0] = "AICC, IMS y SCORM";
 choices[41][1] = "AICC, EL-XML y SCORM";
 choices[41][2] = "ELEARN, FCC y SCORM";
 choices[41][3] = "SCORM, ELEARN y AICC";
 answers[41] = choices[41][0];
 units[41] = "66";
 comments[41] = "Id Pregunta: 1807. ";


//  Id pregunta: 1813 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  Los modelos digitales del terreno (MDT) son conjuntos de datos de gran utilidad, y t&iacute;picamente representados mediante un modelo de datos:";
 choices[42]= new Array();
 choices[42][0] = "Vectorial.";
 choices[42][1] = "R&aacute;ster.";
 choices[42][2] = "Alfanum&eacute;rico.";
 choices[42][3] = "De cotas u elevaciones.";
 answers[42] = choices[42][1];
 units[42] = "67";
 comments[42] = "Id Pregunta: 1813. NULL";


//  Id pregunta: 1820 AÃ±o de creación de pregunta: 2006-01-01
 questions[43]= "44)  El termino ETL se refiere a: ";
 choices[43]= new Array();
 choices[43][0] = "Extraction, Transfer &amp; Labeling.";
 choices[43][1] = "Explanation, Transformation &amp; Loading.";
 choices[43][2] = "Extraction, Transformation &amp; Loading.";
 choices[43][3] = "Extraction, Transfer &amp; Loading.";
 answers[43] = choices[43][2];
 units[43] = "68";
 comments[43] = "Id Pregunta: 1820. ";


//  Id pregunta: 1825 AÃ±o de creación de pregunta: 2006-01-01
 questions[44]= "45)  Las tablas primarias en el modelo dimensional de un Datawarehouse y que contienen los valores y metricas se conocen como:";
 choices[44]= new Array();
 choices[44][0] = "Tablas de dimensiones.";
 choices[44][1] = "Tablas maestras.";
 choices[44][2] = "Tablas de hechos.";
 choices[44][3] = "Tablas externas.";
 answers[44] = choices[44][2];
 units[44] = "68";
 comments[44] = "Id Pregunta: 1825. ";


//  Id pregunta: 1830 AÃ±o de creación de pregunta: 2006-01-01
 questions[45]= "46)  &iquest;Qu&eacute; son los Datamarts o supermercados de datos?";
 choices[45]= new Array();
 choices[45][0] = "Proporcionan informaci&oacute;n de c&oacute;mo se ha construido el almac&eacute;n de datos.";
 choices[45][1] = "Son datos muy resumidos para consultas frecuentes.";
 choices[45][2] = "Son lugares de Internet donde por una peque&ntilde;a cuota se puede obtener la  informaci&oacute;n solicitada.";
 choices[45][3] = "Son datos que est&aacute;n disponibles bajo una licencia Creative Commons.";
 answers[45] = choices[45][1];
 units[45] = "68";
 comments[45] = "Id Pregunta: 1830. ";


//  Id pregunta: 2404 AÃ±o de creación de pregunta: 2002-01-01
 questions[46]= "47)  &iquest;Qu&eacute; es EMACS?:";
 choices[46]= new Array();
 choices[46][0] = "Una plataforma de intercambio de ideas sobre mejoras futuras de ordenadores Apple";
 choices[46][1] = "Un editor ASCII con indentaciones autom&aacute;ticas y coloreado sint&aacute;ctico seg&uacute;n lenguaje";
 choices[46][2] = "Un est&aacute;ndar de facto de plataformas de comercio electr&oacute;nico";
 choices[46][3] = "Nada de lo anterior es correcto";
 answers[46] = choices[46][1];
 units[46] = "62";
 comments[46] = "Id Pregunta: 2404. ";


//  Id pregunta: 4072 AÃ±o de creación de pregunta: 2006-01-01
 questions[47]= "48)  &iquest;Qu&eacute; gestiona un CRM?";
 choices[47]= new Array();
 choices[47][0] = "Las relaciones con los clientes";
 choices[47][1] = "Las relaciones con los Empleados";
 choices[47][2] = "Las relaciones con clientes y empleados";
 choices[47][3] = "Ninguna de las anteriores";
 answers[47] = choices[47][0];
 units[47] = "65";
 comments[47] = "Id Pregunta: 4072. ";


//  Id pregunta: 4074 AÃ±o de creación de pregunta: 2006-01-01
 questions[48]= "49)  &iquest;Qu&eacute; tipo de software es m&aacute;s costoso cuando lo compramos?";
 choices[48]= new Array();
 choices[48][0] = "El libre";
 choices[48][1] = "El comercial";
 choices[48][2] = "Los dos anteriores son igual de  costosos";
 choices[48][3] = "No hay una respuesta en terminos generales y depende casi siempre del software concreto del que hablemos";
 answers[48] = choices[48][1];
 units[48] = "61";
 comments[48] = "Id Pregunta: 4074. ";


//  Id pregunta: 4281 AÃ±o de creación de pregunta: 2007-01-01
 questions[49]= "50)  Los sistemas conocidos como OLTP son utilizados para:";
 choices[49]= new Array();
 choices[49][0] = "Hacer consultas complejas sobre distintas Bases de Datos que se han consolidado en una central.";
 choices[49][1] = "Poder realizar informes a la Direcci&oacute;n.";
 choices[49][2] = "Son sistemas t&iacute;picamente utilizados como Sistemas de Informaci&oacute;n Geogr&aacute;fica.";
 choices[49][3] = "Captura de datos a partir de las operaciones diarias de una organizaci&oacute;n.";
 answers[49] = choices[49][3];
 units[49] = "68";
 comments[49] = "Id Pregunta: 4281. ";


//  Id pregunta: 4362 AÃ±o de creación de pregunta: 2007-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l de los siguientes no es un operador en el an&aacute;lisis de los almacenes de datos multidimensionales?";
 choices[50]= new Array();
 choices[50][0] = "Duck.";
 choices[50][1] = "Drill.";
 choices[50][2] = "Roll.";
 choices[50][3] = "Slice &amp; dice.";
 answers[50] = choices[50][0];
 units[50] = "68";
 comments[50] = "Id Pregunta: 4362. ";


//  Id pregunta: 4516 AÃ±o de creación de pregunta: 2007-01-01
 questions[51]= "52)  Respecto al software libre:";
 choices[51]= new Array();
 choices[51][0] = "Los usuarios de software libre deben tener Ia libertad de estudiar como funciona el programa y adaptarlo a sus necesidades.";
 choices[51][1] = "El &uacute;nico coste permitido por la distribuci&oacute;n de software libre es el coste de distribuci&oacute;n.";
 choices[51][2] = "Esta permitida la distribuci&oacute;n de software libre pero no su posterior modificaci&oacute;n.";
 choices[51][3] = "Solo basta con incluir el c&oacute;digo fuente, no es necesario incluir documento legal alguno.";
 answers[51] = choices[51][0];
 units[51] = "61";
 comments[51] = "Id Pregunta: 4516. NULL";


//  Id pregunta: 4622 AÃ±o de creación de pregunta: 2007-01-01
 questions[52]= "53)  Indique cual de las siguientes es una herramienta de e-learning: ";
 choices[52]= new Array();
 choices[52][0] = "Kerberos";
 choices[52][1] = "WebCT";
 choices[52][2] = "Kagera";
 choices[52][3] = "Tuxedo";
 answers[52] = choices[52][1];
 units[52] = "66";
 comments[52] = "Id Pregunta: 4622. ";


//  Id pregunta: 4747 AÃ±o de creación de pregunta: 2007-01-01
 questions[53]= "54)  En relaci&oacute;n a los modelos vectorial frente a r&aacute;ster en un SIG, se&ntilde;ale la opci&oacute;n verdadera.";
 choices[53]= new Array();
 choices[53][0] = "Las operaciones de c&aacute;lculo se simplifican al utilizar modelos vectoriales.";
 choices[53][1] = "No se deben mezclar datos raster con datos vectoriales entre capas o las prestaciones globales del SIG se ver&aacute;n comprometidas.";
 choices[53][2] = "La precisi&oacute;n gr&aacute;fica del modelo raster supera al modelo vectorial, al no tener que reescalar nada.";
 choices[53][3] = "La cartograf&iacute;a digital tradicional es fundamentalmente de tipo vectorial.";
 answers[53] = choices[53][3];
 units[53] = "67";
 comments[53] = "Id Pregunta: 4747. NULL";


//  Id pregunta: 5580 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  &iquest;Qu&eacute; es el blended learning?";
 choices[54]= new Array();
 choices[54][0] = "Un modelo de referencia del e-learning";
 choices[54][1] = "Una modalidad de e-learning que incluye ense&ntilde;anza presencial";
 choices[54][2] = "Una inciativa para estandarizar el e-learning";
 choices[54][3] = "Una clase de ense&ntilde;anza virtual";
 answers[54] = choices[54][1];
 units[54] = "66";
 comments[54] = "Id Pregunta: 5580. ";


//  Id pregunta: 5675 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  Indique la respuesta incorrecta respecto a GIS modelo de datos vectorial.";
 choices[55]= new Array();
 choices[55][0] = "La caracter&iacute;stica mas importante del modelo vectorial frente al r&aacute;ster es la capacidad de gestion topol&oacute;gica de sus elementos.";
 choices[55][1] = "La mayor riqueza y capacidad de representaci&oacute;n de la realidad espacial, se traduce en una mayor complejidad de este modelo vectorial en comparaci&oacute;n con el sencillo modelo r&aacute;ster.";
 choices[55][2] = "En el modelo de datos vectorial podemos hablar por tanto de una georreferenciaci&oacute;n continua, sin que la resoluci&oacute;n suponga una limitaci&oacute;n como suced&iacute;a en el modelo r&aacute;ster.";
 choices[55][3] = "Ninguna de las anteriores.";
 answers[55] = choices[55][3];
 units[55] = "67";
 comments[55] = "Id Pregunta: 5675. NULL";


//  Id pregunta: 6067 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  Dentro del &aacute;mbito del reconocimiento de patrones, &iquest;para que se usa el algoritmo 'FCM'?";
 choices[56]= new Array();
 choices[56][0] = "El &lsquo;Forward Chaining Method&rsquo; es uno de la procedimientos de inferencia b&aacute;sico de un sistema de reglas";
 choices[56][1] = "El &lsquo;Fuzzy C-Means&rsquo; es un algoritmo de agrupamiento (an&aacute;lisis cluster) que utiliza l&oacute;gica borrosa";
 choices[56][2] = "El algoritmo &lsquo;Final Cognitive Map&rsquo; captura los patrones mediante mapas cognitivos";
 choices[56][3] = "Ninguna de las anteriores es correcta";
 answers[56] = choices[56][1];
 units[56] = "63";
 comments[56] = "Id Pregunta: 6067. ";


//  Id pregunta: 6069 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  Sobre la representaci&oacute;n del conocimiento:";
 choices[57]= new Array();
 choices[57][0] = "Los algoritmos gen&eacute;ticos usan representaci&oacute;n param&eacute;trica";
 choices[57][1] = "Las redes neuronales usan representaci&oacute;n simb&oacute;lica";
 choices[57][2] = "Las dos respuestas anteriores son correctas";
 choices[57][3] = "Todas las respuestas anteriores no son correctas";
 answers[57] = choices[57][0];
 units[57] = "63,64";
 comments[57] = "Id Pregunta: 6069. ";


//  Id pregunta: 6174 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  Indique cual de entre los cuales NO es una funci&oacute;n del LMS:";
 choices[58]= new Array();
 choices[58][0] = "Seguimiento de la actividad del alumno.";
 choices[58][1] = "Publicaci&oacute;n de contenidos de formaci&oacute;n";
 choices[58][2] = "Comunicaci&oacute;n profesor-alumno.";
 choices[58][3] = "Matriculaci&oacute;n en cursos.";
 answers[58] = choices[58][1];
 units[58] = "66";
 comments[58] = "Id Pregunta: 6174. NULL";


//  Id pregunta: 6337 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  Para poder realizar consultas de OLAP a distintos niveles de generalizaci&oacute;n es conveniente:";
 choices[59]= new Array();
 choices[59][0] = "Haber definido en el dise&ntilde;o multidimensional jerarqu&iacute;as.";
 choices[59][1] = "No se pueden realizar consultas de OLAP a distintos niveles de generalizaci&oacute;n.";
 choices[59][2] = "Que se disponga del operador GENERALIZATION en el gestor.";
 choices[59][3] = "Si no se dispone del operador de GENERATE no se pueden realizar este tipo de consultas.";
 answers[59] = choices[59][0];
 units[59] = "68";
 comments[59] = "Id Pregunta: 6337. ";


//  Id pregunta: 6429 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  &iquest;Cu&aacute;l de los siguientes es un servidor de aplicaciones de software libre?";
 choices[60]= new Array();
 choices[60][0] = "Websphere";
 choices[60][1] = "WebLogic";
 choices[60][2] = "GlassFish";
 choices[60][3] = "Synaptic";
 answers[60] = choices[60][2];
 units[60] = "62";
 comments[60] = "Id Pregunta: 6429. NULL";


//  Id pregunta: 6431 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  &iquest;Qu&eacute; es Putty?";
 choices[61]= new Array();
 choices[61][0] = "Un cliente SSH";
 choices[61][1] = "Un software de virtualizaci&oacute;n";
 choices[61][2] = "Una suite ofim&aacute;tica";
 choices[61][3] = "Ninguna de las anteriores";
 answers[61] = choices[61][0];
 units[61] = "62";
 comments[61] = "Id Pregunta: 6431. NULL";


//  Id pregunta: 6452 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  &iquest;C&oacute;mo se denomina la herramienta de presentaciones de Open Office 3.0?";
 choices[62]= new Array();
 choices[62][0] = "DRAW";
 choices[62][1] = "IMPRESS";
 choices[62][2] = "POWEPOINT";
 choices[62][3] = "IMAGE";
 answers[62] = choices[62][1];
 units[62] = "62";
 comments[62] = "Id Pregunta: 6452. Castilla La Mancha 2009";


//  Id pregunta: 6454 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  &iquest;Cu&aacute;l de las siguientes definiciones corresponde al modelo r&aacute;ster de un SIG?";
 choices[63]= new Array();
 choices[63][0] = "El modelo r&aacute;ster estructura el espacio en una serie de elementos discretos por medio de una ret&iacute;cula regular, generalmente compuesta por celdas cuadradas, tambi&eacute;n llamadas p&iacute;xeles.";
 choices[63][1] = "El modelo r&aacute;ster representa cada objeto geogr&aacute;fico de forma independiente mediante las primitivas gr&aacute;ficas (puntos, l&iacute;neas y pol&iacute;gonos).";
 choices[63][2] = "El modelo r&aacute;ster estructura el espacio en una serie de elementos discretos que se clasifican en puntos, l&iacute;neas o pol&iacute;gonos.";
 choices[63][3] = "El modelo r&aacute;ster representa cada objeto geogr&aacute;fico de forma independiente mediante primitivas gr&aacute;ficas, tambi&eacute;n llamadas p&iacute;xeles, a los cuales se les asocia informaci&oacute;n estructurada a modo de tablas en bases de datos relacionales.";
 answers[63] = choices[63][0];
 units[63] = "67";
 comments[63] = "Id Pregunta: 6454. Castilla La Mancha 2009";


//  Id pregunta: 6456 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  Comparando las dos arquitecturas diferentes para los sistemas OLAP: relacional y multidimensional es cierto que:";
 choices[64]= new Array();
 choices[64][0] = "Los sistemas multidimensionales delegan la informaci&oacute;n entre tiempo de respuesta y el proceso batch al dise&ntilde;o del sistema.";
 choices[64][1] = "Los sistemas multidimensionales generalmente son adecuados para diez o menos dimensiones.";
 choices[64][2] = "Los sistemas multidimensionales soportan an&aacute;lisis OLAP contra grandes vol&uacute;menes de datos elementales.";
 choices[64][3] = "Los sistemas multidimensionales pueden crecer hasta un gran n&uacute;mero de dimensiones.";
 answers[64] = choices[64][1];
 units[64] = "68";
 comments[64] = "Id Pregunta: 6456. Castilla La Mancha 2009";


//  Id pregunta: 7167 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  Se&ntilde;ale cu&aacute;l de las siguientes licencias es la &uacute;nica que puede considerarse licencia de software libre compatible con la GNU GPL:";
 choices[65]= new Array();
 choices[65][0] = "Sun Community Source License";
 choices[65][1] = "Apache License. Version 2.0";
 choices[65][2] = "Microsoft Public License (MS-OL)";
 choices[65][3] = "GNU Lesser General Public License (LGPL)";
 answers[65] = choices[65][3];
 units[65] = "61";
 comments[65] = "Id Pregunta: 7167. Examen TIC B 2009";


//  Id pregunta: 7169 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  Los sistemas OLTP se utilizan para:";
 choices[66]= new Array();
 choices[66][0] = "Almacenar gran cantidad de datos de forma integrada, no vol&aacute;til y variable en el tiempo.";
 choices[66][1] = "Generar informes para la direcci&oacute;n.";
 choices[66][2] = "Captura de datos heterog&eacute;neos y sin organizaci&oacute;n de diferentes fuentes.";
 choices[66][3] = "Agiliza la consulta de grandes vol&uacute;menes de datos.";
 answers[66] = choices[66][2];
 units[66] = "68";
 comments[66] = "Id Pregunta: 7169. Examen TIC B 2009";


//  Id pregunta: 7296 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  Un proveedor de SW para miner&iacute;a de datos es:";
 choices[67]= new Array();
 choices[67][0] = "SAS.";
 choices[67][1] = "SPSS.";
 choices[67][2] = "A y B son correctas.";
 choices[67][3] = "A y B son incorrectas.";
 answers[67] = choices[67][2];
 units[67] = "68";
 comments[67] = "Id Pregunta: 7296. NULL";


//  Id pregunta: 7299 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)  Indique cu&aacute;l de las siguientes es una medida de centralidad en una red social:";
 choices[68]= new Array();
 choices[68][0] = "Grado (degree)";
 choices[68][1] = "Cercan&iacute;a (closeness)";
 choices[68][2] = "Intermediaci&oacute;n (betweenness)";
 choices[68][3] = "Todas son medidas de centralidad";
 answers[68] = choices[68][3];
 units[68] = "63";
 comments[68] = "Id Pregunta: 7299. ";


//  Id pregunta: 8187 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  &iquest;Cu&aacute;l es el sistema de referencia geod&eacute;sico establecido por el RD 1071/2007, en el que se debe compilar toda la informaci&oacute;n geogr&aacute;fica y cartograf&iacute;a oficial espa&ntilde;ola a partir del 01 de Enero de 2015?:";
 choices[69]= new Array();
 choices[69][0] = "Exclusivamente el sistema ETRS89.";
 choices[69][1] = "Los sistemas ED50 y ETRS89.";
 choices[69][2] = "Los sistemas ETRS89 y REGCAN95.";
 choices[69][3] = "El sistema ETRS-C&oacute;nica Conforme de Lambert.";
 answers[69] = choices[69][2];
 units[69] = "67";
 comments[69] = "Id Pregunta: 8187. Examen TIC A1 2010";


//  Id pregunta: 8254 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  Seleccione la respuesta correcta acerca de los sistemas de representaci&oacute;n del conocimiento:";
 choices[70]= new Array();
 choices[70][0] = "La representaci&oacute;n del conocimiento mediante ternas Objeto, Atributo, Valor, no tiene mecanismos inferenciales.";
 choices[70][1] = "Las redes sem&aacute;nticas no tienen capacidad de representar acciones.";
 choices[70][2] = "La representaci&oacute;n en marcos admite el concepto de herencia, pero las redes sem&aacute;nticas no.";
 choices[70][3] = "En los sistemas de razonamiento mon&oacute;tono el conocimiento no var&iacute;a durante el proceso de razonamiento.";
 answers[70] = choices[70][0];
 units[70] = "64";
 comments[70] = "Id Pregunta: 8254. Examen TIC A1 2010";


//  Id pregunta: 8261 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  El empleo de redes neuronales para el reconocimiento de caracteres:";
 choices[71]= new Array();
 choices[71][0] = "Usa mecanismos basados en l&oacute;gica borrosa.";
 choices[71][1] = "No permite explicar f&aacute;cilmente las razones por las que se obtiene un determinado resultado.";
 choices[71][2] = "Se basa en la obtenci&oacute;n de un vector de caracter&iacute;sticas";
 choices[71][3] = "Hace que el reconocimiento se vea m&aacute;s afectado por defectos de la imagen que otros m&eacute;todos como el de comparaci&oacute;n de matrices.";
 answers[71] = choices[71][1];
 units[71] = "63,64";
 comments[71] = "Id Pregunta: 8261. Examen TIC A1 2010";


//  Id pregunta: 8459 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  &iquest;Cu&aacute;l de estos benchmarks se emplea para medir la capacidad de OLTP para una determinada configuraci&oacute;n hardware y software?";
 choices[72]= new Array();
 choices[72][0] = "TPC-C.";
 choices[72][1] = "TPC-R.";
 choices[72][2] = "TPC-H.";
 choices[72][3] = "TPC-A.";
 answers[72] = choices[72][0];
 units[72] = "68";
 comments[72] = "Id Pregunta: 8459. Analista Ayto. Madrid 2010";


//  Id pregunta: 8606 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l de los siguientes NO es un servidor OLAP?";
 choices[73]= new Array();
 choices[73][0] = "Microstrategy OLAP Services.";
 choices[73][1] = "MDX OLAP server.";
 choices[73][2] = "Oracle Database OLAP.";
 choices[73][3] = "Mondrian OLAP Server.";
 answers[73] = choices[73][1];
 units[73] = "68";
 comments[73] = "Id Pregunta: 8606. Examen TIC A2 2010 interna";


//  Id pregunta: 8805 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  En el contexto de Almac&eacute;n de datos (Data Warehouse) la creaci&oacute;n de subconjuntos de la informaci&oacute;n contenida en el Data Warehouse central o maestro, se identifica con...";
 choices[74]= new Array();
 choices[74][0] = "Data Marts.";
 choices[74][1] = "Metadata.";
 choices[74][2] = "Middleware.";
 choices[74][3] = "Cubos OLAP.";
 answers[74] = choices[74][0];
 units[74] = "68";
 comments[74] = "Id Pregunta: 8805. Examen UPM A2 2011";


//  Id pregunta: 8959 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  Dentro de las soluciones propietarias de CRM no se encuentra:";
 choices[75]= new Array();
 choices[75][0] = "Compiere";
 choices[75][1] = "SPSS- Clementine";
 choices[75][2] = "Epiphany";
 choices[75][3] = "Todas son soluciones comerciales";
 answers[75] = choices[75][0];
 units[75] = "65";
 comments[75] = "Id Pregunta: 8959. ";


//  Id pregunta: 8960 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  Los pilares de CRM son:";
 choices[76]= new Array();
 choices[76][0] = "Estrategia, personas, servicios, tecnologias";
 choices[76][1] = "Estrategia, personas, gestion, tecnologias";
 choices[76][2] = "Estrategia, clientes, servicios, tecnologias";
 choices[76][3] = "Estrategias, personas, procesos, tecnologias";
 answers[76] = choices[76][3];
 units[76] = "65";
 comments[76] = "Id Pregunta: 8960. ";


//  Id pregunta: 9152 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  Respecto a los LMS, indique la respuesta FALSA: ";
 choices[77]= new Array();
 choices[77][0] = "Permite el an&aacute;lisis de los resultados de la formaci&oacute;n";
 choices[77][1] = "Incluye funciones de gesti&oacute;n de procesos de creaci&oacute;n de contenido";
 choices[77][2] = "Permite el intercambio de datos entre profesores y alumnos";
 choices[77][3] = "Est&aacute; dedicado a la difusi&oacute;n de los contenidos docentes";
 answers[77] = choices[77][1];
 units[77] = "66";
 comments[77] = "Id Pregunta: 9152. ";


//  Id pregunta: 9154 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  Indique cu&aacute;l de las siguientes es una soluci&oacute;n de software libre de eLearning:";
 choices[78]= new Array();
 choices[78][0] = "Ganesha";
 choices[78][1] = "OpenSCORM";
 choices[78][2] = "Blackboard";
 choices[78][3] = "WebCT";
 answers[78] = choices[78][0];
 units[78] = "66";
 comments[78] = "Id Pregunta: 9154. ";


//  Id pregunta: 9156 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  La gu&iacute;a AGR010 de la AICC NO tiene entre sus objetivos:";
 choices[79]= new Array();
 choices[79][0] = "El mecanismo que utiliza el CMI para lanzar el contenido CBT";
 choices[79][1] = "Los mecanismos y datos comunes para la comunicaci&oacute;n entre CMI y CBT";
 choices[79][2] = "Las interfaces de usuario comunes entre el CBT y cualquier LMS";
 choices[79][3] = "Una definici&oacute;n com&uacute;n para la organizaci&oacute;n y secuencia del contenido CBT dentro de un curso";
 answers[79] = choices[79][2];
 units[79] = "66";
 comments[79] = "Id Pregunta: 9156. ";


//  Id pregunta: 9165 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  El est&aacute;ndar m&aacute;s extendido en el campo de los Sistemas de Informaci&oacute;n Geogr&aacute;fica para los servicios de cat&aacute;logo es:";
 choices[80]= new Array();
 choices[80][0] = "ISO 23950";
 choices[80][1] = "ISO 19125";
 choices[80][2] = "ISO 19115";
 choices[80][3] = "Ninguno de los anteriores se refiere a un est&aacute;ndar de servicio de cat&aacute;logo";
 answers[80] = choices[80][0];
 units[80] = "67";
 comments[80] = "Id Pregunta: 9165. NULL";


//  Id pregunta: 9574 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  Al hablar de software libre y de su uso en la Administraci&oacute;n se&ntilde;ale la frase correcta:";
 choices[81]= new Array();
 choices[81][0] = "La Ley 11/2007 obliga a las administraciones p&uacute;blicas a poner las aplicaciones de cuyos derechos de propiedad son titulares a disposici&oacute;n de cualquier otra Administraci&oacute;n Auton&oacute;mica.";
 choices[81][1] = "Una licencia de c&oacute;digo de fuente abierta seg&uacute;n la FSF obliga a hacer p&uacute;blicas todas las mejoras, poni&eacute;ndolas a disposici&oacute;n de la comunidad.";
 choices[81][2] = "Una licencia LGPL no restringe la posibilidad de incluir el software protegido por la licencia en productos protegidos por licencias no GPL.";
 choices[81][3] = "El Real Decreto 4/2010 del Esquema Nacional de Interoperabilidad prev&eacute; un cat&aacute;logo &uacute;nicamente de est&aacute;ndares abiertos de uso obligatorio por las administraciones p&uacute;blicas.";
 answers[81] = choices[81][2];
 units[81] = "43, 61, 62";
 comments[81] = "Id Pregunta: 9574. Examen TIC A1 2011";


//  Id pregunta: 9614 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  &iquest;C&uacute;al es un m&eacute;todo aceptado de desnormalizaci&oacute;n de bases de datos?";
 choices[82]= new Array();
 choices[82][0] = "Vistas materializadas.";
 choices[82][1] = "Esquemas de copo de nieve.";
 choices[82][2] = "Cubos OLAP.";
 choices[82][3] = "Todos los anteriores.";
 answers[82] = choices[82][3];
 units[82] = "68";
 comments[82] = "Id Pregunta: 9614. ";


//  Id pregunta: 9626 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  &iquest;Cu&aacute;l de las siguientes aplicaciones, incluida en KOffice, se emplea para generaci&oacute;n de informes?";
 choices[83]= new Array();
 choices[83][0] = "Kexi.";
 choices[83][1] = "Kivio.";
 choices[83][2] = "Konqueror.";
 choices[83][3] = "Kugar.";
 answers[83] = choices[83][3];
 units[83] = "62";
 comments[83] = "Id Pregunta: 9626. Examen TIC A1 2013";


//  Id pregunta: 9643 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  &iquest;Cu&aacute;l de los siguientes proyectos est&aacute; relacionado con el intercambio de contenidos docentes y la coordinaci&oacute;n entre promotores de formaci&oacute;n en la Administraci&oacute;n General del Estado?";
 choices[84]= new Array();
 choices[84][0] = "Comp@rte";
 choices[84][1] = "Racionaliz@";
 choices[84][2] = "Compartir";
 choices[84][3] = "Educ@";
 answers[84] = choices[84][2];
 units[84] = "66";
 comments[84] = "Id Pregunta: 9643. ";


//  Id pregunta: 9682 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Son tipos de mapas:";
 choices[85]= new Array();
 choices[85][0] = "Topogr&aacute;fico, topol&oacute;gico, tem&aacute;tico y superficial.";
 choices[85][1] = "Topogr&aacute;fico, azimutal, tem&aacute;tico y plano.";
 choices[85][2] = "Referencial, topol&oacute;gico, tem&aacute;tico y plano. ";
 choices[85][3] = "Cil&iacute;ndrico, azimutal, c&oacute;nico y estereogr&aacute;fico.";
 answers[85] = choices[85][2];
 units[85] = "67";
 comments[85] = "Id Pregunta: 9682. NULL";


//  Id pregunta: 9686 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Respecto a las proyecciones (Georreferenciaci&oacute;n Directa) (elija la falsa):";
 choices[86]= new Array();
 choices[86][0] = "Ofrecen la posibilidad de localizar un fen&oacute;meno geogr&aacute;fico de un determinado nombre, devolviendo la localizaci&oacute;n mediante las coordenadas geogr&aacute;ficas del mismo.";
 choices[86][1] = "Se pueden acotar indicando la extensi&oacute;n espacial de la b&uacute;squeda.";
 choices[86][2] = "Describen el conjunto de reglas de simbolizaci&oacute;n de los fen&oacute;menos geogr&aacute;ficos que detectan.";
 choices[86][3] = "Si hay varios que cumplen los criterios de b&uacute;squeda, el servicio suele proponer atributos adicionales.";
 answers[86] = choices[86][2];
 units[86] = "67";
 comments[86] = "Id Pregunta: 9686. NULL";


//  Id pregunta: 9689 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  Un Datamart:";
 choices[87]= new Array();
 choices[87][0] = "Es una Base de Datos.";
 choices[87][1] = "Es m&aacute;s grande (en volumen de datos) que un Datawarehouse.";
 choices[87][2] = "Usa Sistemas de Gesti&oacute;n de Base de Datos multidimensionales.";
 choices[87][3] = "Todas son falsas.";
 answers[87] = choices[87][2];
 units[87] = "68";
 comments[87] = "Id Pregunta: 9689. ";


//  Id pregunta: 9961 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  &iquest;Cu&aacute;l de las siguientes opciones NO es un operador espec&iacute;fico de un sistema o herramienta OLAP?";
 choices[88]= new Array();
 choices[88][0] = "DRILL";
 choices[88][1] = "POLL";
 choices[88][2] = "PIVOT";
 choices[88][3] = "SLICE &amp; DICE";
 answers[88] = choices[88][1];
 units[88] = "68,71";
 comments[88] = "Id Pregunta: 9961. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";


//  Id pregunta: 10247 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  Pedro crea una librer&iacute;a (LibPeter) y la publica bajo licencia LGPL. FooCorp distribuye una versi&oacute;n modificada de la misma junto con su software propietario. &iquest;Cu&aacute;l de las siguientes no es una obligaci&oacute;n de FooCorp?";
 choices[89]= new Array();
 choices[89][0] = "FooCorp debe proveer un mecanismo para que su software propietario pueda enlazar con nuevas versiones de LibPeter";
 choices[89][1] = "FooCorp debe proveer el c&oacute;digo fuente completo de la versi&oacute;n modificada de LibPeter";
 choices[89][2] = "FooCorp debe comunicar todas sus modificaciones a LibPeter";
 choices[89][3] = "FooCorp debe publicar el c&oacute;digo fuente de su software propietario";
 answers[89] = choices[89][3];
 units[89] = "61";
 comments[89] = "Id Pregunta: 10247. ";


//  Id pregunta: 10277 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  En cuanto a las estrategias de inferencia en marcos";
 choices[90]= new Array();
 choices[90][0] = "La estrategia en Z intenta deducir el valor del slot primero a nivel local";
 choices[90][1] = "La estrategia en N intenta deducir el valor del slot primero usando una &uacute;nica faceta ascendiendo por la jerarqu&iacute;a";
 choices[90][2] = "Ambas son ciertas";
 choices[90][3] = "Ninguna es cierta";
 answers[90] = choices[90][2];
 units[90] = "64";
 comments[90] = "Id Pregunta: 10277. NULL";


//  Id pregunta: 10278 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  Se&ntilde;ale el m&eacute;todo de inferencia no aplicable a marcos";
 choices[91]= new Array();
 choices[91][0] = "Deducci&oacute;n de valores de slots";
 choices[91][1] = "Actualizaci&oacute;n de valores de slots";
 choices[91][2] = "Equiparaci&oacute;n";
 choices[91][3] = "Emparejamiento";
 answers[91] = choices[91][3];
 units[91] = "64";
 comments[91] = "Id Pregunta: 10278. NULL";


//  Id pregunta: 10623 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Indique qu&eacute; soluci&oacute;n tiene una mayor rapidez de repuesta para consultas multitabla:";
 choices[92]= new Array();
 choices[92][0] = "OLAP";
 choices[92][1] = "OLTP";
 choices[92][2] = "ETL";
 choices[92][3] = "OLTA";
 answers[92] = choices[92][0];
 units[92] = "68";
 comments[92] = "Id Pregunta: 10623. ";


//  Id pregunta: 10813 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Se&ntilde;ale cu&aacute;les de los siguientes formatos de archivo en la actualidad NO se consideran de formato abierto de texto para documentos:";
 choices[93]= new Array();
 choices[93][0] = "PDF";
 choices[93][1] = "EPUB";
 choices[93][2] = "RTF";
 choices[93][3] = "FLAC";
 answers[93] = choices[93][3];
 units[93] = "61, 62";
 comments[93] = "Id Pregunta: 10813. Examen GSI 2014";


//  Id pregunta: 10920 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Apache Hadoop es un framework de software que implementa un sistema de ficheros basado en:";
 choices[94]= new Array();
 choices[94][0] = "HP Data File System.";
 choices[94][1] = "Google File System.";
 choices[94][2] = "Network File System.";
 choices[94][3] = "High Density File System.";
 answers[94] = choices[94][1];
 units[94] = "68";
 comments[94] = "Id Pregunta: 10920. TIC A1 AGE 2014";


//  Id pregunta: 11142 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Seleccione la respuesta verdadera";
 choices[95]= new Array();
 choices[95][0] = "Los m&eacute;todos de aprendizaje no supervisado se utilizan para t&eacute;cnicas de clustering o agrupaci&oacute;n";
 choices[95][1] = "Los m&eacute;todos de aprendizaje supervisado y no supervisado parten de la misma base de datos de conocimiento";
 choices[95][2] = "Los m&eacute;todos de aprendizaje no supervisado permiten clasificar una muestra en funci&oacute;n de las clases conocidas";
 choices[95][3] = "Las redes neuronales son t&eacute;cnicas de aprendizaje no supervisado";
 answers[95] = choices[95][0];
 units[95] = "63";
 comments[95] = "Id Pregunta: 11142. ";


//  Id pregunta: 11143 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Cu&aacute;l de las siguientes no es una soluci&oacute;n CRM?";
 choices[96]= new Array();
 choices[96][0] = "Oracle Siebel CRM";
 choices[96][1] = "Microsoft Dynamics CRM";
 choices[96][2] = "Jive Software";
 choices[96][3] = "IBM RightNow Sugar CRM";
 answers[96] = choices[96][3];
 units[96] = "65";
 comments[96] = "Id Pregunta: 11143. ";


//  Id pregunta: 11279 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Los servicios WMS de OGC se consideran servicios de:";
 choices[97]= new Array();
 choices[97][0] = "Localizaci&oacute;n";
 choices[97][1] = "Descarga";
 choices[97][2] = "Transformaci&oacute;n";
 choices[97][3] = "Visualizaci&oacute;n";
 answers[97] = choices[97][3];
 units[97] = "67";
 comments[97] = "Id Pregunta: 11279. ";


//  Id pregunta: 11285 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Qu&eacute; se entiende por un SIG dual?";
 choices[98]= new Array();
 choices[98][0] = "El que  mantiene  la  informaci&oacute;n  gr&aacute;fica con una clave identificadora &uacute;nica que sirve  para  realizar  b&uacute;squedas  en  el  SGBD  que  contiene la informaci&oacute;n  alfanum&eacute;rica";
 choices[98][1] = "El que contiene  un  modelo  de  comportamiento  a  lo  largo  del tiempo  para  alg&uacute;n  aspecto  de  la  realidad. ";
 choices[98][2] = "El que aplica una concepci&oacute;n orientada  al objeto, en la  que los elementos contengan informaci&oacute;n sobre  sus propiedades, comportamiento etc..";
 choices[98][3] = "El que contempla al mismo tiempo un modelo r&aacute;ster y uno vectorial";
 answers[98] = choices[98][0];
 units[98] = "67";
 comments[98] = "Id Pregunta: 11285. ";


//  Id pregunta: 11616 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  La libertad de distribuci&oacute;n, seg&uacute;n la definici&oacute;n de SW libre de Richard Stallman se identifica como la libertad n&uacute;mero:";
 choices[99]= new Array();
 choices[99][0] = "0";
 choices[99][1] = "1";
 choices[99][2] = "2";
 choices[99][3] = "3";
 answers[99] = choices[99][2];
 units[99] = "61";
 comments[99] = "Id Pregunta: 11616. ";


