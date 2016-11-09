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

//  Id pregunta: 723 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de las siguientes denominaciones no se corresponde con ninguno de los tipos de Shell est&aacute;ndar en los sistemas operativos UNIX?";
 choices[0]= new Array();
 choices[0][0] = "Bourne Shell";
 choices[0][1] = "C Shell";
 choices[0][2] = "Xenix Shell";
 choices[0][3] = "Korn Shell";
 answers[0] = choices[0][2];
 units[0] = "53";
 comments[0] = "Id Pregunta: 723. Examen TIC MAP B 2004";


//  Id pregunta: 736 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  Las funciones de inspecci&oacute;n y control del cumplimiento de la Ley 34/2002, de Servicios de la Sociedad de la Informaci&oacute;n y de Comercio Electr&oacute;nico, m&aacute;s conocida como LSSI, est&aacute;n atribuidas a:";
 choices[1]= new Array();
 choices[1][0] = "Las Fuerzas y Cuerpos de seguridad del Estado";
 choices[1][1] = "La Inspecci&oacute;n Financiera y Tributaria";
 choices[1][2] = "La Asociaci&oacute;n de Usuarios de Internet";
 choices[1][3] = "El Ministerio de Industria, Energ&iacute;a y Turismo";
 answers[1] = choices[1][3];
 units[1] = "30";
 comments[1] = "Id Pregunta: 736. Examen TIC MAP B 2004. Ley 34/2002, art&iacute;culo 35 (extinto Mio. de Ciencia y Tecnolog&iacute;a)";


//  Id pregunta: 835 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta sobre el &aacute;lgebra relacional?:";
 choices[2]= new Array();
 choices[2][0] = "El &aacute;lgebra relacional es un lenguaje procedimental";
 choices[2][1] = "Los operadores de selecci&oacute;n, proyecci&oacute;n, uni&oacute;n y diferencia forman un conjunto relacionalmente completo";
 choices[2][2] = "Todos los operadores de consulta son derivables de los operadores fundamentales";
 choices[2][3] = "El &lsquo;join&rsquo; es un operador de compuesto de selecci&oacute;n y proyecci&oacute;n";
 answers[2] = choices[2][0];
 units[2] = "57";
 comments[2] = "Id Pregunta: 835. ";


//  Id pregunta: 846 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no es propia de la memoria principal de un ordenador?:";
 choices[3]= new Array();
 choices[3][0] = "Volatilidad del contenido";
 choices[3][1] = "Tiempo de acceso peque&ntilde;o";
 choices[3][2] = "Direccionabilidad";
 choices[3][3] = "Acceso a trav&eacute;s de canal desde la unidad central de proceso";
 answers[3] = choices[3][3];
 units[3] = "47";
 comments[3] = "Id Pregunta: 846. ";


//  Id pregunta: 875 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;Cu&aacute;l de los siguientes sistemas operativos son implementaciones de POSIX (IEEE 1003.1)?:";
 choices[4]= new Array();
 choices[4][0] = "Microsoft Windows para Trabajo en Grupo 3.11";
 choices[4][1] = "MVS de IBM";
 choices[4][2] = "System 7 de Apple";
 choices[4][3] = "ATT UNIX SVR4";
 answers[4] = choices[4][3];
 units[4] = "53";
 comments[4] = "Id Pregunta: 875. ";


//  Id pregunta: 905 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;Podr&iacute;a indicarnos que componente software presente en todos los miembros de la familia Office de Microsoft es un claro ejemplo de sistema basado en el conocimiento?:";
 choices[5]= new Array();
 choices[5][0] = "El motor de base de datos JET de Access";
 choices[5][1] = "Existen unas librerias presentes sobre todo en Excel, que hacen uso de tecnicas revolucionarias de Inteligencia Emocional";
 choices[5][2] = "Word posee un sistema muy avanzado para la conversi&oacute;n en p&aacute;gina web de sus documentos.";
 choices[5][3] = "El Ayudante de Office";
 answers[5] = choices[5][3];
 units[5] = "63";
 comments[5] = "Id Pregunta: 905. ";


//  Id pregunta: 906 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Podr&iacute;a ordenar los siguientes tipos de memoria seg&uacute;n su coste, de mayor a menor?:";
 choices[6]= new Array();
 choices[6][0] = "Registros, Cach&eacute;, Memoria Principal, Disco magn&eacute;tico, Cinta magn&eacute;tica";
 choices[6][1] = "Registros, Cach&eacute;, Disco magn&eacute;tico, Memoria Principal, Cinta magn&eacute;tica";
 choices[6][2] = "Cach&eacute;, Memoria Principal, Disco magn&eacute;tico, Registros, Cinta magn&eacute;tica";
 choices[6][3] = "Todas son falsas";
 answers[6] = choices[6][0];
 units[6] = "47";
 comments[6] = "Id Pregunta: 906. ";


//  Id pregunta: 935 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Qu&eacute; indica la directiva #pragma en lenguaje C?:";
 choices[7]= new Array();
 choices[7][0] = "Le indica al compilador que genere un mensaje de error si llega a ese punto del c&oacute;digo";
 choices[7][1] = "Es un #include condicional";
 choices[7][2] = "Permite al implementador del compilador definir otras instrucciones de preprocesamiento para el compilador";
 choices[7][3] = "Nada de lo anterior es correcto";
 answers[7] = choices[7][2];
 units[7] = "59";
 comments[7] = "Id Pregunta: 935. ";


//  Id pregunta: 936 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Qu&eacute; norma de las que se relacionan a continuaci&oacute;n afecta a SQL?:";
 choices[8]= new Array();
 choices[8][0] = "ISO 9075";
 choices[8][1] = "ISO 9003";
 choices[8][2] = "ANSI 9003";
 choices[8][3] = "IEEE 9003";
 answers[8] = choices[8][0];
 units[8] = "58";
 comments[8] = "Id Pregunta: 936. ";


//  Id pregunta: 958 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  Con referencia al modelo relacional, indique cu&aacute;l de las siguientes afirmaciones es cierta:";
 choices[9]= new Array();
 choices[9][0] = "El n&uacute;mero de dominios de una relaci&oacute;n define su grado";
 choices[9][1] = "La extensi&oacute;n u ocurrencia de una relaci&oacute;n es una tabla donde las filas corresponden a los atributos";
 choices[9][2] = "Cada atributo, o propiedad con inter&eacute;s informacional de una relaci&oacute;n, est&aacute; asociado a un dominio del que toma sus valores";
 choices[9][3] = "El orden de las filas dentro de una tabla es determinante";
 answers[9] = choices[9][2];
 units[9] = "58";
 comments[9] = "Id Pregunta: 958. ";


//  Id pregunta: 1028 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  Existen diversos tipos de modelos de datos convencionales:";
 choices[10]= new Array();
 choices[10][0] = "El modelo jer&aacute;rquico es m&aacute;s flexible que el de red o reticular";
 choices[10][1] = "El modelo relacional se basa en el &aacute;lgebra y c&aacute;lculo relacional";
 choices[10][2] = "Cronol&oacute;gicamente el modelo de red o reticular es anterior al jer&aacute;rquico";
 choices[10][3] = "En el modelo relacional se exige que el usuario conozca las vinculaciones entre entidades";
 answers[10] = choices[10][1];
 units[10] = "57";
 comments[10] = "Id Pregunta: 1028. ";


//  Id pregunta: 1064 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  El workflow es una categor&iacute;a de aplicaciones dentro del trabajo en grupo o groupware que permite:";
 choices[11]= new Array();
 choices[11][0] = "Desarrollo de aplicaciones multiusuario";
 choices[11][1] = "Desarrollo de aplicaciones de coordinaci&oacute;n de procesos";
 choices[11][2] = "Desarrollo de aplicaciones de flujo de datos";
 choices[11][3] = "Desarrollo de aplicaciones de mail inteligente";
 answers[11] = choices[11][1];
 units[11] = "71";
 comments[11] = "Id Pregunta: 1064. ";


//  Id pregunta: 1086 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  En el modelo cliente/servidor:";
 choices[12]= new Array();
 choices[12][0] = "Pueden elegirse distintos lenguajes de programaci&oacute;n para cada una de las partes";
 choices[12][1] = "Debe utilizarse siempre SQL para los procesos de tratamiento de datos";
 choices[12][2] = "El lenguaje para la parte cliente, debe permitir caracter&iacute;sticas de orientaci&oacute;n al objeto";
 choices[12][3] = "El lenguaje en el que se programen los procesos a ejecutarse en el cliente determina el que se debe utilizar para programar los procesos de los servidores";
 answers[12] = choices[12][0];
 units[12] = "50";
 comments[12] = "Id Pregunta: 1086. ";


//  Id pregunta: 1099 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  En inteligencia artificial:";
 choices[13]= new Array();
 choices[13][0] = "Los primeros trabajos se centraron en m&eacute;todos de b&uacute;squeda heur&iacute;stica y m&eacute;todos de deducci&oacute;n autom&aacute;tica";
 choices[13][1] = "La rob&oacute;tica no secuencializa las tareas (planificaci&oacute;n) para conseguir pasar de un estado actual a un estado objetivo";
 choices[13][2] = "La representaci&oacute;n del conocimiento pertenece al campo de los Sistemas de Gesti&oacute;n de Bases de Datos, pero no al de la inteligencia artificial";
 choices[13][3] = "Los m&eacute;todos heur&iacute;sticos buscan una formulaci&oacute;n te&oacute;rica para la representaci&oacute;n del conocimiento";
 answers[13] = choices[13][0];
 units[13] = "63";
 comments[13] = "Id Pregunta: 1099. ";


//  Id pregunta: 1101 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  En Java, cuando un programa deja de utilizar un objeto:";
 choices[14]= new Array();
 choices[14][0] = "El &quot;garbage collector&quot; lo elimina inmediatamente de la memoria";
 choices[14][1] = "Es necesario codificar la destrucci&oacute;n del objeto";
 choices[14][2] = "El objeto se destruye a s&iacute; mismo";
 choices[14][3] = "Ninguna de las anteriores";
 answers[14] = choices[14][3];
 units[14] = "60";
 comments[14] = "Id Pregunta: 1101. JCED - Preparatic XVII. El obj puede eliminarse cuando no hay referencias a &eacute;l.";


//  Id pregunta: 1102 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  En Java:";
 choices[15]= new Array();
 choices[15][0] = "Los programas son applets, que se ejecutan en un navegador";
 choices[15][1] = "Los programas son de l&iacute;nea de comandos o basados en entornos de ventanas, como AWT o Swing";
 choices[15][2] = "Los programas son aplicaciones web de servidor";
 choices[15][3] = "Todas las anteriores respuestas son ciertas";
 answers[15] = choices[15][3];
 units[15] = "60";
 comments[15] = "Id Pregunta: 1102. NULL";


//  Id pregunta: 1144 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  En un sistema monoprocesador con mezcla de procesos de c&aacute;lculo puro y procesos intensivos en E/S, el uso de una politica de planificaci&oacute;n FIFO provoca:";
 choices[16]= new Array();
 choices[16][0] = "Un tiempo de ejecuci&oacute;n excelente para los procesos con E/S intensiva o interactiva";
 choices[16][1] = "Una gran ineficiencia, ya que los procesos de calculo intensivo se adue&ntilde;an de la CPU";
 choices[16][2] = "Una respuesta equilibrada, sin aprovechar el sistema en su totalidad";
 choices[16][3] = "Todas son falsas";
 answers[16] = choices[16][1];
 units[16] = "52";
 comments[16] = "Id Pregunta: 1144. ";


//  Id pregunta: 1173 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Identifique las dos versiones hist&oacute;ricas generadas de Unix al final de los a&ntilde;os 80, motivadas por la coexistencia de dos desarrollos en paralelo:";
 choices[17]= new Array();
 choices[17][0] = "System V y BSD";
 choices[17][1] = "System IV y System V";
 choices[17][2] = "System V y Posix";
 choices[17][3] = "Posix y Motif";
 answers[17] = choices[17][0];
 units[17] = "53";
 comments[17] = "Id Pregunta: 1173. ";


//  Id pregunta: 1184 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Indicar la respuesta falsa sobre las redes sem&aacute;nticas en inteligencia artificial:";
 choices[18]= new Array();
 choices[18][0] = "Las redes sem&aacute;nticas conciben el pensamiento mediante un conjunto de ideas b&aacute;sicas y relaciones que interconectan unas con otras formando una red, de forma que el razonamiento se basa en una navegaci&oacute;n por dicha red";
 choices[18][1] = "El emparejamiento proporciona respuestas mediante la b&uacute;squeda de parejas de idea-relaci&oacute;n en la red";
 choices[18][2] = "Los mecanismos de inferencia en una red sem&aacute;ntica son la herencia y el emparejamiento";
 choices[18][3] = "El procedimiento de herencia extiende a las caracter&iacute;sticas asociadas a un concepto con las caracter&iacute;sticas de los nodos con los que le une la relaci&oacute;n es-un, de forma que el concepto hereda cualidades propias de otros conceptos m&aacute;s generales";
 answers[18] = choices[18][1];
 units[18] = "64";
 comments[18] = "Id Pregunta: 1184. ";


//  Id pregunta: 1210 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  La caracter&iacute;stica principal de la arquitectura 'pipeline' es:";
 choices[19]= new Array();
 choices[19][0] = "La existencia de varios procesadores especializados en tareas concretas que pueden realizarse en paralelo";
 choices[19][1] = "La divisi&oacute;n en fases de la ejecuci&oacute;n de una instrucci&oacute;n";
 choices[19][2] = "La redundancia de algunos dispositivos";
 choices[19][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[19] = choices[19][1];
 units[19] = "46";
 comments[19] = "Id Pregunta: 1210. ";


//  Id pregunta: 1264 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Las siglas MIDI se corresponden con:";
 choices[20]= new Array();
 choices[20][0] = "Mathematical Investigation, Development &amp; Investigation";
 choices[20][1] = "Multimedia &amp; Internet Digital Interface";
 choices[20][2] = "Musical Instruments Digital Interface";
 choices[20][3] = "Las siglas MIDI no tienen correspondencia real en el mundo de la tecnolog&iacute;a";
 answers[20] = choices[20][2];
 units[20] = "47";
 comments[20] = "Id Pregunta: 1264. ";


//  Id pregunta: 1271 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  Los certificados digitales o 'digital IDs' est&aacute;n definidos en:";
 choices[21]= new Array();
 choices[21][0] = "RSA Public Key Structure";
 choices[21][1] = "X.509v3 de ITU";
 choices[21][2] = "RFC 1661 de IAB";
 choices[21][3] = "Verisign doc 1992/21";
 answers[21] = choices[21][1];
 units[21] = "73";
 comments[21] = "Id Pregunta: 1271. ";


//  Id pregunta: 1336 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Sean dos transacciones A y B:  1&ordm;) A accede al registro 1. 2&ordm;) B accede al registro 2. 3&ordm;) A pide el registro 2, pero debe esperar que B lo libere. 4&ordm;) B pide el registro 1, pero debe esperar que A lo libere.  Entonces:";
 choices[22]= new Array();
 choices[22][0] = "Se produjo alg&uacute;n fallo en el dise&ntilde;o l&oacute;gico de datos, pues &eacute;sto no debe suceder";
 choices[22][1] = "Estamos ante un caso de dise&ntilde;o defectuoso de los procesos A y B";
 choices[22][2] = "Se ha producido una situaci&oacute;n de 'deadlock'";
 choices[22][3] = "El transaccional desbloquear&aacute; los registros bloqueados y permitir&aacute; que las transacciones continuen sin m&aacute;s problemas";
 answers[22] = choices[22][2];
 units[22] = "58";
 comments[22] = "Id Pregunta: 1336. NULL";


//  Id pregunta: 1397 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Un sistema inform&aacute;tico SCADA es:";
 choices[23]= new Array();
 choices[23][0] = "un sistema de supervisi&oacute;n, control y adquisici&oacute;n de datos";
 choices[23][1] = "un sistema de procesamiento paralelo optimizado para c&aacute;lculo matem&aacute;tico";
 choices[23][2] = "un sistema &uacute;nico multiprocesador que experimenta el uso del plasma en la construcci&oacute;n de CPUs m&aacute;s r&aacute;pidas";
 choices[23][3] = "un sistema de realidad virtual con perif&eacute;ricos de inmersi&oacute;n en la escena y retorno de la informaci&oacute;n de los sensores";
 answers[23] = choices[23][0];
 units[23] = "49";
 comments[23] = "Id Pregunta: 1397. ";


//  Id pregunta: 1410 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Una cinta DAT DDS3 tiene una capacidad de:";
 choices[24]= new Array();
 choices[24][0] = "32,1 Gb sin comprimir";
 choices[24][1] = "40 Gb comprimido";
 choices[24][2] = "80 Gb comprimido";
 choices[24][3] = "12 Gb sin comprimir";
 answers[24] = choices[24][3];
 units[24] = "48";
 comments[24] = "Id Pregunta: 1410. ";


//  Id pregunta: 1480 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Suponiendo una densidad de grabaci&oacute;n lineal d = 10000 bits/cm, un radio R = 5 cm, una velocidad de giro de 3600 rpm y utilizaci&oacute;n de bits de paridad, la velocidad de transferencia es de:";
 choices[25]= new Array();
 choices[25][0] = "0.2 Mbytes/s";
 choices[25][1] = "10 Mbytes/s";
 choices[25][2] = "2.1 Mbytes/s";
 choices[25][3] = "18.9 Mbytes/s";
 answers[25] = choices[25][2];
 units[25] = "48";
 comments[25] = "Id Pregunta: 1480. ";


//  Id pregunta: 1513 AÃ±o de creación de pregunta: 2003-01-01
 questions[26]= "27)  &iquest;Qui&eacute;n puede relizar servicios de certificaci&oacute;n?";
 choices[26]= new Array();
 choices[26][0] = "Una persona f&iacute;sica";
 choices[26][1] = "Una persona jur&iacute;dica";
 choices[26][2] = "Ambas";
 choices[26][3] = "S&oacute;lo el Estado";
 answers[26] = choices[26][2];
 units[26] = "30";
 comments[26] = "Id Pregunta: 1513. Ley 59/2003, art&iacute;culo 2.2";


//  Id pregunta: 1591 AÃ±o de creación de pregunta: 2003-01-01
 questions[27]= "28)  En la creaci&oacute;n de una Base de Datos, &iquest;para qu&eacute; se utiliza el comando &lsquo;ASSERT&rsquo;?";
 choices[27]= new Array();
 choices[27][0] = "Para asignar un &iacute;ndice a una tabla de la Base de Datos.";
 choices[27][1] = "Para establecer reglas de integridad.";
 choices[27][2] = "Para asignar una vista a una o varias tablas de la Base de Datos.";
 choices[27][3] = "Para hacer copias de seguridad de la Base de Datos.";
 answers[27] = choices[27][1];
 units[27] = "58";
 comments[27] = "Id Pregunta: 1591. NULL";


//  Id pregunta: 1623 AÃ±o de creación de pregunta: 2003-01-01
 questions[28]= "29)  Se&ntilde;ale cu&aacute;l de las siguientes respuestas es incorrecta";
 choices[28]= new Array();
 choices[28][0] = "Los ordenadores de segunda generaci&oacute;n, basados en circuitos integrados y multiprogramaci&oacute;n, se programaban en FORTRAN y lenguaje ensamblador, y se usaban para c&aacute;lculos cient&iacute;ficos u de ingenier&iacute;a";
 choices[28][1] = "Los sistemas operativos de tercera generaci&oacute;n permitieron desarrollar la t&eacute;cnica del &quot;spooling&quot; reduciendo considerablemente la necesidad de transporte de cintas magn&eacute;ticas";
 choices[28][2] = "En los sistemas operativos de 4 generaci&oacute;n se desarrolla por primera vez la t&eacute;cnica de multiprogramaci&oacute;n, una variante de los sistemas de tiempo compartido";
 choices[28][3] = "La primera generaci&oacute;n de sistemas operativos surge como consecuencia de los exitosos trabajos realizados por Babbage al desarrollar su m&aacute;quina anal&iacute;tica";
 answers[28] = choices[28][0];
 units[28] = "52";
 comments[28] = "Id Pregunta: 1623. ";


//  Id pregunta: 1664 AÃ±o de creación de pregunta: 2004-01-01
 questions[29]= "30)  &iquest;C&oacute;mo se conoce la taxonom&iacute;a, que clasifica las arquitecturas de ordenadores en SISD, SIMD, MISD, MIMD?";
 choices[29]= new Array();
 choices[29][0] = "Kuck";
 choices[29][1] = "Treleaven";
 choices[29][2] = "Flynn";
 choices[29][3] = "Gajski y Pier";
 answers[29] = choices[29][2];
 units[29] = "45";
 comments[29] = "Id Pregunta: 1664. ";


//  Id pregunta: 1670 AÃ±o de creación de pregunta: 2004-01-01
 questions[30]= "31)  Indique la opci&oacute;n correcta respecto a un fichero con permisos de acceso 705";
 choices[30]= new Array();
 choices[30][0] = "Permite la lectura y escritura del propietario";
 choices[30][1] = "Permite la escritura del grupo";
 choices[30][2] = "Permite la escritura y ejecuci&oacute;n por parte de cualquier usuario";
 choices[30][3] = "Permite la lectura y escritura de cualquier usuario";
 answers[30] = choices[30][0];
 units[30] = "54";
 comments[30] = "Id Pregunta: 1670. NULL";


//  Id pregunta: 1706 AÃ±o de creación de pregunta: 2006-01-01
 questions[31]= "32)  Se dispone &uacute;nicamente de dos discos, con los que se pretende implementar una matriz redundante (RAID) con tolerancia a fallos y con el mejor rendimiento posible tanto en lectura como en escritura, &iquest;qu&eacute; tipo escoger&iacute;a?";
 choices[31]= new Array();
 choices[31][0] = "RAID-0";
 choices[31][1] = "RAID-1";
 choices[31][2] = "RAID-3";
 choices[31][3] = "RAID-0 &oacute; RAID-1";
 answers[31] = choices[31][1];
 units[31] = "48";
 comments[31] = "Id Pregunta: 1706. ";


//  Id pregunta: 1720 AÃ±o de creación de pregunta: 2006-01-01
 questions[32]= "33)  A qu&eacute; corresponde el est&aacute;ndar POSIX 1003.7";
 choices[32]= new Array();
 choices[32][0] = "Int&eacute;rprete y comandos";
 choices[32][1] = "Lenguaje Ada";
 choices[32][2] = "Administraci&oacute;n del sistema";
 choices[32][3] = "Procedimientos de biblioteca";
 answers[32] = choices[32][2];
 units[32] = "53";
 comments[32] = "Id Pregunta: 1720. ";


//  Id pregunta: 1725 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  Respecto a la pol&iacute;tica de planificaci&oacute;n de procesos de turno rotatorio o &quot;Round Robin&quot;, es FALSO afirmar que";
 choices[33]= new Array();
 choices[33][0] = "Penaliza a los procesos cortos";
 choices[33][1] = "La penalizaci&oacute;n a los procesos intensivos en E/S puede resolverse con una cola prioritaria para los procesos que salieron de ejecuci&oacute;n por E/S";
 choices[33][2] = "Cada proceso recibe una fracci&oacute;n de tiempo antes de ser expulsado";
 choices[33][3] = "La selecci&oacute;n del siguiente proceso se realiza seg&uacute;n la pol&iacute;tica FCFS (First come, First served)";
 answers[33] = choices[33][0];
 units[33] = "52";
 comments[33] = "Id Pregunta: 1725. ";


//  Id pregunta: 1912 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  &iquest;Cu&aacute;l de las siguientes no es una ventaja de las arquitecturas Grid?:";
 choices[34]= new Array();
 choices[34][0] = "Resultados de supercomputaci&oacute;n (alta transaccionalidad) a bajo coste.";
 choices[34][1] = "La obsolescencia deja de ser un problema.";
 choices[34][2] = "Los nodos de la red no son dedicados. Podemos parametrizar exactamente el porcentaje de dedicaci&oacute;n a la red.";
 choices[34][3] = "No ser&aacute; necesario modificar las aplicaciones desarrolladas para que &eacute;stas puedan ser ejecutadas en la arquitetura Grid.";
 answers[34] = choices[34][3];
 units[34] = "45";
 comments[34] = "Id Pregunta: 1912. ";


//  Id pregunta: 4277 AÃ±o de creación de pregunta: 2007-01-01
 questions[35]= "36)  Si para consolidar una transacci&oacute;n en un sistema relacional se utiliza la sentencia COMMIT, &iquest;qu&eacute; sentencia se utiliza para retroceder una transacci&oacute;n?";
 choices[35]= new Array();
 choices[35][0] = "NO COMMIT.";
 choices[35][1] = "ROLLBACK";
 choices[35][2] = "END TRANSACTION.";
 choices[35][3] = "BACK TRANSACTION.";
 answers[35] = choices[35][1];
 units[35] = "57";
 comments[35] = "Id Pregunta: 4277. ";


//  Id pregunta: 4286 AÃ±o de creación de pregunta: 2007-01-01
 questions[36]= "37)  Los documentos electr&oacute;nicos conformados de acuerdo con la norma XML utilizan el juego de caracteres:";
 choices[36]= new Array();
 choices[36][0] = "ASCII de 16 bits.";
 choices[36][1] = "ASCII de 8 bits.";
 choices[36][2] = "UNICODE.";
 choices[36][3] = "MIME";
 answers[36] = choices[36][2];
 units[36] = "70";
 comments[36] = "Id Pregunta: 4286. NULL";


//  Id pregunta: 4346 AÃ±o de creación de pregunta: 2007-01-01
 questions[37]= "38)  Cu&aacute;l es la longitud de la clave utilizada por el sistema criptogr&aacute;fico sim&eacute;trico DES?";
 choices[37]= new Array();
 choices[37][0] = "56 Bits";
 choices[37][1] = "168 Bits";
 choices[37][2] = "256 Bits.";
 choices[37][3] = "Puede ser cualquiera, pero la habitual es 1.024 Bits.";
 answers[37] = choices[37][0];
 units[37] = "73";
 comments[37] = "Id Pregunta: 4346. ";


//  Id pregunta: 4585 AÃ±o de creación de pregunta: 2007-01-01
 questions[38]= "39)  &iquest;Que tipos de directivas pueden utilizarse en las p&aacute;ginas JSP?";
 choices[38]= new Array();
 choices[38][0] = "impl&iacute;citas y explicitas";
 choices[38][1] = "page, include y taglib, entre otras";
 choices[38][2] = "request, response, pageContext y session";
 choices[38][3] = "declarativas, scriptlets y de expresi&oacute;n.";
 answers[38] = choices[38][1];
 units[38] = "116";
 comments[38] = "Id Pregunta: 4585. JCED - Preparatic XVII";


//  Id pregunta: 4623 AÃ±o de creación de pregunta: 2007-01-01
 questions[39]= "40)  En un entorno de informaci&oacute;n geogr&aacute;fica, GIS, indicar cu&aacute;l de las siguientes expresiones es la correcta:";
 choices[39]= new Array();
 choices[39][0] = "El DM es la herramienta que gestiona la capa superior del GIS, el metamodelo de los datos.";
 choices[39][1] = "El DM es una herramienta de alcance mas amplio que el GIS.";
 choices[39][2] = "El DM es una herramienta que explota los datos que genera un GIS.";
 choices[39][3] = "Ninguna herramienta DM puede trabajar directarmente con las bases de datos de un GIS";
 answers[39] = choices[39][2];
 units[39] = "67";
 comments[39] = "Id Pregunta: 4623. NULL";


//  Id pregunta: 4701 AÃ±o de creación de pregunta: 2007-01-01
 questions[40]= "41)  &iquest;C&oacute;mo se puede describir el formato de los datos en XML?";
 choices[40]= new Array();
 choices[40][0] = "Usando XSL";
 choices[40][1] = "Usando un DTD";
 choices[40][2] = "Usando un Nodo de Descripci&oacute;n (Description Node)";
 choices[40][3] = "Usando XSLT";
 answers[40] = choices[40][1];
 units[40] = "69";
 comments[40] = "Id Pregunta: 4701. Examen 2006 JCYL";


//  Id pregunta: 4830 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  En relaci&oacute;n a los lenguajes XML (eXtensible Markup Language) y RDF (Resource Description Framework), &iquest;cu&aacute;l delas siguientes afirmaciones es cierta?";
 choices[41]= new Array();
 choices[41][0] = "XML Schema proporciona soporte para la interoperabilidad sem&aacute;ntica";
 choices[41][1] = "RDF utiliza XML como sintaxis com&uacute;n para el intercambio de metadatos";
 choices[41][2] = "RDF est&aacute; compuesto &uacute;nicamente de propiedades y enunciados";
 choices[41][3] = "XML Schema no tiene tipos predefinidos";
 answers[41] = choices[41][1];
 units[41] = "69";
 comments[41] = "Id Pregunta: 4830. NULL";


//  Id pregunta: 4847 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  Las aplicaciones a medida desarrolladas a petici&oacute;n de la Administraci&oacute;n General del Estado son consideradas:";
 choices[42]= new Array();
 choices[42][0] = "Software libre";
 choices[42][1] = "Software propietario";
 choices[42][2] = "Software de dominio p&uacute;blico";
 choices[42][3] = "Software de fuentes abiertas, de acuerdo con los criterios de normalizaci&oacute;n y conservaci&oacute;n de lasaplicaciones utilizadas para el ejercicio de potestades";
 answers[42] = choices[42][1];
 units[42] = "37";
 comments[42] = "Id Pregunta: 4847. ";


//  Id pregunta: 4848 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  Un sistema de ficheros tipo Unix tiene un tama&ntilde;o de bloque de 2 KB y nodos-i con doce direcciones directas, unaindirecta simple, una indirecta doble y una indirecta triple. Adem&aacute;s utiliza direcciones de bloque de 4 bytes. Pararepresentar un fichero de 2 MB:";
 choices[43]= new Array();
 choices[43][0] = "Se utilizar&aacute;n un bloque de indexaci&oacute;n simple y uno de indexaci&oacute;n doble";
 choices[43][1] = "Se utilizar&aacute;n un bloque de indexaci&oacute;n simple y dos de indexaci&oacute;n doble";
 choices[43][2] = "Se utilizar&aacute;n dos bloques de indexaci&oacute;n simple y uno de indexaci&oacute;n doble";
 choices[43][3] = "Se utilizar&aacute;n dos bloques de indexaci&oacute;n simple";
 answers[43] = choices[43][0];
 units[43] = "52";
 comments[43] = "Id Pregunta: 4848. ";


//  Id pregunta: 4879 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  Seg&uacute;n se establece en la Gu&iacute;a de Certificaci&oacute;n para Sistemas de e-Learning basados en Web de AICC (Aviation Industry Computer-based Training Committee), &iquest;cu&aacute;l es la longitud m&aacute;xima de la URL (Uniform Resource Locator)de arranque de una unidad de asignaci&oacute;n en caracteres?";
 choices[44]= new Array();
 choices[44][0] = "64";
 choices[44][1] = "128";
 choices[44][2] = "256";
 choices[44][3] = "1024";
 answers[44] = choices[44][2];
 units[44] = "66";
 comments[44] = "Id Pregunta: 4879. ";


//  Id pregunta: 4913 AÃ±o de creación de pregunta: 2003-01-01
 questions[45]= "46)  &iquest;Para cu&aacute;les de los siguientes sistemas se debe configurar la base de datos optimizando las inserciones, modificaciones y borrado de datos y asegurando un alto nivel de concurrencia?";
 choices[45]= new Array();
 choices[45][0] = "OLTP (sistemas transaccionales on line).";
 choices[45][1] = "DSS (sistemas de soporte a la decisi&oacute;n).";
 choices[45][2] = "Data Warehouse (almacenes de datos).";
 choices[45][3] = "ERP (sistemas de planificaci&oacute;n de recursos).";
 answers[45] = choices[45][0];
 units[45] = "68";
 comments[45] = "Id Pregunta: 4913. Examen TIC B 2007";


//  Id pregunta: 4921 AÃ±o de creación de pregunta: 2003-01-01
 questions[46]= "47)  En el UNIX System V, los i-nodos tienen una tabla de direcciones con:";
 choices[46]= new Array();
 choices[46][0] = "11 entradas.";
 choices[46][1] = "12 entradas.";
 choices[46][2] = "13 entradas.";
 choices[46][3] = "14 entradas.";
 answers[46] = choices[46][2];
 units[46] = "53,54";
 comments[46] = "Id Pregunta: 4921. Examen TIC B 2007";


//  Id pregunta: 5000 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  El est&aacute;ndar WMS (Web Map Service), que permite publicar cartograf&iacute;a en Internet, &iquest;a cu&aacute;l de las siguientes organizaciones pertenece?:";
 choices[47]= new Array();
 choices[47][0] = "ISO (International Standards Organization).";
 choices[47][1] = "OGC (Open Geospatial Consortium).";
 choices[47][2] = "FGDC (Federal Geographic Data Committee).";
 choices[47][3] = "Consejo Superior Geogr&aacute;fico.";
 answers[47] = choices[47][1];
 units[47] = "67";
 comments[47] = "Id Pregunta: 5000. Examen TIC A1 2007";


//  Id pregunta: 5083 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  En relaci&oacute;n con las notificaciones telem&aacute;ticas &iquest;cu&aacute;l de las siguientes afirmaciones es verdadera?:";
 choices[48]= new Array();
 choices[48][0] = "Se puede solicitar para un procedimiento la notificaci&oacute;n ordinaria y la notificaci&oacute;n telem&aacute;tica";
 choices[48][1] = "Cuando existiendo constancia de la recepci&oacute;n de la notificaci&oacute;n en la direcci&oacute;n electr&oacute;nica, transcurrierandiez d&iacute;as naturales sin que el interesado acceda a su contenido, se entender&aacute; que la notificaci&oacute;n ha sidorechazada";
 choices[48][2] = "Seg&uacute;n el RD 209/2003, de 21 de febrero, la Administraci&oacute;n P&uacute;blica puede obligar, en determinados casos, aque la pr&aacute;ctica de la notificaci&oacute;n a los interesados se realice por medios telem&aacute;ticos";
 choices[48][3] = "Si el interesado lo solicita, se puede realizar la notificaci&oacute;n telem&aacute;tica a su buz&oacute;n de correo personal queutiliza habitualmente";
 answers[48] = choices[48][1];
 units[48] = "30";
 comments[48] = "Id Pregunta: 5083. Examen TIC A 2007";


//  Id pregunta: 5120 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  En el tercer nivel del modelo de arquitectura cliente/servidor, llamado proceso distribuido, las funciones de presentaci&oacute;n residen en:";
 choices[49]= new Array();
 choices[49][0] = "El cliente";
 choices[49][1] = "El servidor";
 choices[49][2] = "La red";
 choices[49][3] = "Se reparten entre cliente y el servidor";
 answers[49] = choices[49][0];
 units[49] = "50";
 comments[49] = "Id Pregunta: 5120. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5447 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  &iquest;Por qu&eacute; el recorrido completo de tablas de gran tama&ntilde;o es un asunto cr&iacute;tico en la definici&oacute;n de sentencias SQL?";
 choices[50]= new Array();
 choices[50][0] = "Porque es indicativo de una futura ejecuci&oacute;n &oacute;ptima";
 choices[50][1] = "Porque es muy probable que se requiera adaptaciones para el uso de &iacute;ndices";
 choices[50][2] = "Porque el recorrido completo de tablas deber&iacute;a ser normalizado desde el dise&ntilde;o de la base de datos";
 choices[50][3] = "Porque el recorrido completo de una tabla nunca es &oacute;ptimo";
 answers[50] = choices[50][1];
 units[50] = "58";
 comments[50] = "Id Pregunta: 5447. Castilla y Le&oacute;n";


//  Id pregunta: 5492 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  Respecto al DataSet de ADO.NET, se&ntilde;ala la falsa ";
 choices[51]= new Array();
 choices[51][0] = "se puedeutilizar con m&uacute;ltiples y distintos or&iacute;genes, excepto XML, que es su principal carencia";
 choices[51][1] = "Se compone de uno o mas DataTable";
 choices[51][2] = "Reproduce los elementos propios de un modelo de datos relacional";
 choices[51][3] = "est&aacute; expresamente dise&ntilde;ado para el acceso adatos independientemente del origen de datos. ";
 answers[51] = choices[51][0];
 units[51] = "59";
 comments[51] = "Id Pregunta: 5492. ";


//  Id pregunta: 5506 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  La sindicaci&oacute;n de contenidos web:";
 choices[52]= new Array();
 choices[52][0] = "Se emplea el lenguaje RSS (Really Simple Sindication)";
 choices[52][1] = "Actualmente se emplea el estandar Atom 1.0";
 choices[52][2] = "Permite recuperar contenido de un sitio web y publicarlo en otro";
 choices[52][3] = "Todas son correctas";
 answers[52] = choices[52][3];
 units[52] = "69";
 comments[52] = "Id Pregunta: 5506. NULL";


//  Id pregunta: 5724 AÃ±o de creación de pregunta: 2009-01-01
 questions[53]= "54)  Indique qui&eacute;n desarroll&oacute; el lenguaje JavaScript";
 choices[53]= new Array();
 choices[53][0] = "Microsoft";
 choices[53][1] = "SUN";
 choices[53][2] = "Netscape";
 choices[53][3] = "W3C";
 answers[53] = choices[53][2];
 units[53] = "114";
 comments[53] = "Id Pregunta: 5724. MAP 2008 A1";


//  Id pregunta: 5783 AÃ±o de creación de pregunta: 2009-01-01
 questions[54]= "55)  De las siguientes cuestiones de la arquitectura .NET indique cu&aacute;l es FALSA.";
 choices[54]= new Array();
 choices[54][0] = "Las clases ASP.NET soportan el desarrollo de aplicaciones web y de servicios web XML.";
 choices[54][1] = "Las clases ADO.NET permiten a los desarrolladores interaccionar con los datos, como si fueran XML, a trav&eacute;s de las interfaces de OLE DB, ODBC y SQL Server";
 choices[54][2] = "CLR (Common Language runtime) se encarga de realizar la compilaci&oacute;n del c&oacute;digo fuente al Lenguaje Intermedio independiente de la platafoma.";
 choices[54][3] = "En la arquitectura . NET se permite la utilizaci&oacute;n de varios lenguajes de programaci&oacute;n.";
 answers[54] = choices[54][2];
 units[54] = "59";
 comments[54] = "Id Pregunta: 5783. MAP 2008 A2";


//  Id pregunta: 5862 AÃ±o de creación de pregunta: 2009-01-01
 questions[55]= "56)  Con relaci&oacute;n a la especificaci&oacute;n P3P1.1, indique cu&aacute;l de las expresiones siguientes es FALSA:";
 choices[55]= new Array();
 choices[55][0] = "Es una especificaci&oacute;n desarrollada por la W3C";
 choices[55][1] = "P3P permite que los sitios Web muestren sus pr&aacute;cticas de privacidad en un formato est&aacute;ndar";
 choices[55][2] = "P3P est&aacute; basado en CCXML";
 choices[55][3] = "El lenguaje APPEL permite describir colecciones de preferencias relacionadas con las directivas P3P";
 answers[55] = choices[55][2];
 units[55] = "111";
 comments[55] = "Id Pregunta: 5862. MAP 2008 A1";


//  Id pregunta: 5876 AÃ±o de creación de pregunta: 2009-01-01
 questions[56]= "57)  &iquest;Qu&eacute; es Atom?";
 choices[56]= new Array();
 choices[56][0] = "Sistema de an&aacute;lisis XML";
 choices[56][1] = "Tecnolog&iacute;a de sindicaci&oacute;n de contenidos";
 choices[56][2] = "Lenguaje que permite el intercambio de informaci&oacute;n financiera de las empresas";
 choices[56][3] = "Sintaxis de una DTD";
 answers[56] = choices[56][1];
 units[56] = "69";
 comments[56] = "Id Pregunta: 5876. MAP 2008 A1";


//  Id pregunta: 6173 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  Dentro de  una soluci&oacute;n e-learning, donde se encuadrar&iacute;a un sistema LMS:";
 choices[57]= new Array();
 choices[57][0] = "Plataforma de formaci&oacute;n.";
 choices[57][1] = "Contenidos de formaci&oacute;n.";
 choices[57][2] = "Herramientas de comunicaci&oacute;n.";
 choices[57][3] = "Ninguna de las anteriores.";
 answers[57] = choices[57][0];
 units[57] = "66";
 comments[57] = "Id Pregunta: 6173. ";


//  Id pregunta: 6250 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  Uno de los siguientes es un elemento de Java EE:";
 choices[58]= new Array();
 choices[58][0] = "Contenedor HTTP";
 choices[58][1] = "Servidor JDBC";
 choices[58][2] = "Contenedor Enterprise Java Beans";
 choices[58][3] = "Contenedor JDBC";
 answers[58] = choices[58][2];
 units[58] = "60";
 comments[58] = "Id Pregunta: 6250. TICB-2009, bloque desarrollo";


//  Id pregunta: 6329 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  Una actualizaci&oacute;n de los datos del Data Warehouse consistir&aacute; b&aacute;sicamente en:";
 choices[59]= new Array();
 choices[59][0] = "Modificar los valores de ciertos registros (tuplas de las relaciones subyacentes).";
 choices[59][1] = "Borrar los registros de tasa de utilizaci&oacute;n baja.";
 choices[59][2] = "Inserci&oacute;n de nuevos datos (que eventualmente diferir&aacute;n de otros ya existentes s&oacute;lo en la marca temporal).";
 choices[59][3] = "Un Data Warehouse no se actualiza pues contiene s&oacute;lo datos hist&oacute;ricos.";
 answers[59] = choices[59][2];
 units[59] = "68";
 comments[59] = "Id Pregunta: 6329. ";


//  Id pregunta: 6447 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  &iquest;C&oacute;mo se denomina cada una de las particiones l&oacute;gicas de una Storage &Aacute;rea Network?";
 choices[60]= new Array();
 choices[60][0] = "LUN";
 choices[60][1] = "HBA";
 choices[60][2] = "Cl&uacute;ster";
 choices[60][3] = "Usci";
 answers[60] = choices[60][0];
 units[60] = "48";
 comments[60] = "Id Pregunta: 6447. Castilla La Mancha 2009";


//  Id pregunta: 6497 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  El kernel de Linux fue desarrollado por:";
 choices[61]= new Array();
 choices[61][0] = "Linus Torvalds";
 choices[61][1] = "Benjamin Linus";
 choices[61][2] = "Richard Stallman";
 choices[61][3] = "Steve Jobs";
 answers[61] = choices[61][0];
 units[61] = "53";
 comments[61] = "Id Pregunta: 6497. NULL";


//  Id pregunta: 7152 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  En un disco duro, la unidad m&aacute;s peque&ntilde;a en la que se puede escribir o leer informaci&oacute;n es:";
 choices[62]= new Array();
 choices[62][0] = "La pista";
 choices[62][1] = "El cilindro";
 choices[62][2] = "La cabeza de lectura/escritura";
 choices[62][3] = "El sector";
 answers[62] = choices[62][3];
 units[62] = "48";
 comments[62] = "Id Pregunta: 7152. Examen TIC B 2009";


//  Id pregunta: 7156 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  &iquest;Cu&aacute;l de las siguientes afirmaciones es INCORRECTA?";
 choices[63]= new Array();
 choices[63][0] = "Los protocolos de comunicaciones NAS est&aacute;n basados en ficheros";
 choices[63][1] = "Los dispositivos NAS tienen mayor rendimiento y fiabilidad que los DAS";
 choices[63][2] = "En una red SAN el modo de acceso es a m&aacute;s bajo nivel que en NAS y DAS";
 choices[63][3] = "La mayor&iacute;a de las SAN usan el protocolo SCSI para la comunicaci&oacute;n entre servidores";
 answers[63] = choices[63][1];
 units[63] = "48";
 comments[63] = "Id Pregunta: 7156. Examen TIC B 2009";


//  Id pregunta: 8548 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  &iquest;Cu&aacute;l de los siguientes t&eacute;rminos se corresponde con la tecnolog&iacute;a que proporciona una infraestructura para la definici&oacute;n de servicios que pueden ser consumidos de manera uniforme, sin conocer los detalles e los sistemas que los proporcionan?";
 choices[64]= new Array();
 choices[64][0] = "EAI (Enterprise Application Integration)";
 choices[64][1] = "UDDI (Universal Description, Discovery and Integration)";
 choices[64][2] = "ESB (Enterprise Service Bus)";
 choices[64][3] = "ORB (Object Request Broker)";
 answers[64] = choices[64][2];
 units[64] = "51";
 comments[64] = "Id Pregunta: 8548. Analista Ayto. Madrid 2010";


//  Id pregunta: 8679 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  El permiso de Unix 500 pemiite:";
 choices[65]= new Array();
 choices[65][0] = "Lectura y escritura para el propietario del archivo";
 choices[65][1] = "Lectura y ejecuci&oacute;n para el propietario del archivo";
 choices[65][2] = "Lectura y escritura para todos los usuarios";
 choices[65][3] = "Lectura y ejecuci&oacute;n para todos los usuarios del mismo grupo que lo ha creado";
 answers[65] = choices[65][1];
 units[65] = "53";
 comments[65] = "Id Pregunta: 8679. Examen UPM A2 2011";


//  Id pregunta: 8757 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  En un esquema de multiprogramaci&oacute;n en memoria real, independientemente de que est&eacute; basado en particiones de tama&ntilde;o fijas o de tama&ntilde;o variable, &iquest;en qu&eacute; consiste el algoritmo del &quot;siguiente ajuste&quot; para elegir el tama&ntilde;o de la partici&oacute;n en la que alojar un programa?";
 choices[66]= new Array();
 choices[66][0] = "Se asigna el primer hueco que sea mayor al tama&ntilde;o deseado";
 choices[66][1] = "Se asigna el primer hueco que sea mayor al tama&ntilde;o deseado, pero dejando un apuntador al lugar en donde se asigno el &uacute;ltimo hueco";
 choices[66][2] = "Se asigna el hueco cuyo tama&ntilde;o exceda en la mayor cantidad al tama&ntilde;o deseado";
 choices[66][3] = "Se asigna el hueco cuyo tama&ntilde;o exceda en la menor cantidad al tama&ntilde;o deseado.";
 answers[66] = choices[66][1];
 units[66] = "52";
 comments[66] = "Id Pregunta: 8757. Examen TIC A2 2010 interna";


//  Id pregunta: 8789 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  Al aplicar el algoritmo SHA-1 sobre una cadena de texto inicial obtendremos siempre un resultado:";
 choices[67]= new Array();
 choices[67][0] = "De menor longitud que la cadena inicial";
 choices[67][1] = "De la misma longitud que la cadena inicial";
 choices[67][2] = "De mayor longitud que la cadena inicial";
 choices[67][3] = "Ninguna de las anteriores";
 answers[67] = choices[67][3];
 units[67] = "72";
 comments[67] = "Id Pregunta: 8789. Examen UPM A2 2011";


//  Id pregunta: 8901 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  &iquest;cu&aacute;l de los siguientes no es un ERP?";
 choices[68]= new Array();
 choices[68][0] = "SAP";
 choices[68][1] = "Tango";
 choices[68][2] = "Calipso";
 choices[68][3] = "Twister";
 answers[68] = choices[68][3];
 units[68] = "65";
 comments[68] = "Id Pregunta: 8901. ";


//  Id pregunta: 8954 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  &iquest;Para qu&eacute; se utiliza el comando fdisk?:";
 choices[69]= new Array();
 choices[69][0] = "Para formatear una partici&oacute;n";
 choices[69][1] = "Para formatear un disco completo";
 choices[69][2] = "Para crear una partici&oacute;n";
 choices[69][3] = "Para crear i-nodos";
 answers[69] = choices[69][2];
 units[69] = "53,54";
 comments[69] = "Id Pregunta: 8954. ";


//  Id pregunta: 9160 AÃ±o de creación de pregunta: 2013-01-01
 questions[70]= "71)  Cu&aacute;l NO es un tipo de compresi&oacute;n utilizado para el almacenamiento de informaci&oacute;n raster:";
 choices[70]= new Array();
 choices[70][0] = "Run Length Encoding (RLE)";
 choices[70][1] = "Quadtrees";
 choices[70][2] = "Tiff";
 choices[70][3] = "Wavelets";
 answers[70] = choices[70][2];
 units[70] = "67";
 comments[70] = "Id Pregunta: 9160. NULL";


//  Id pregunta: 9253 AÃ±o de creación de pregunta: 2013-01-01
 questions[71]= "72)  &iquest;C&oacute;mo es la administraci&oacute;n de memoria en Windows 7?";
 choices[71]= new Array();
 choices[71][0] = "Todos los procesos de usuario comparten un espacio de direcciones virtuales.";
 choices[71][1] = "Cada proceso de usuario tiene su propio espacio de direcciones virtuales.";
 choices[71][2] = "No se gestiona.";
 choices[71][3] = "Ninguna es correcta.";
 answers[71] = choices[71][1];
 units[71] = "56";
 comments[71] = "Id Pregunta: 9253. ";


//  Id pregunta: 9256 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  &iquest;Qu&eacute; mejora Windows Server 2008 R2?";
 choices[72]= new Array();
 choices[72][0] = "Nuevo proceso de reparaci&oacute;n de sistemas NTFS.";
 choices[72][1] = "Creaci&oacute;n de sesiones de usuario secuenciales.";
 choices[72][2] = "Sistema de archivo FAT";
 choices[72][3] = "ASLR, protecci&oacute;n contra malware en la carga de controladores en disco.";
 answers[72] = choices[72][0];
 units[72] = "56";
 comments[72] = "Id Pregunta: 9256. ";


//  Id pregunta: 9615 AÃ±o de creación de pregunta: 2014-01-01
 questions[73]= "74)  &iquest;C&oacute;mo se llama la interfaz gr&aacute;fica del sistema operativo Mac OS X?";
 choices[73]= new Array();
 choices[73][0] = "Safari";
 choices[73][1] = "Lion";
 choices[73][2] = "Aqua";
 choices[73][3] = "Terra";
 answers[73] = choices[73][2];
 units[73] = "52";
 comments[73] = "Id Pregunta: 9615. ";


//  Id pregunta: 9622 AÃ±o de creación de pregunta: 2014-01-01
 questions[74]= "75)  &iquest;En qu&eacute; consisten los fallos de p&aacute;gina suaves?";
 choices[74]= new Array();
 choices[74][0] = "En actualizar la tabla de p&aacute;ginas";
 choices[74][1] = "En traer la p&aacute;gina del disco porque no se encuentra en memoria";
 choices[74][2] = "En modificar el bit de acceso de la p&aacute;gina";
 choices[74][3] = "En modificar el bit de &quot;p&aacute;gina sucia&quot;";
 answers[74] = choices[74][0];
 units[74] = "52";
 comments[74] = "Id Pregunta: 9622. ";


//  Id pregunta: 9718 AÃ±o de creación de pregunta: 2014-01-01
 questions[75]= "76)  &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[75]= new Array();
 choices[75][0] = "CORBA es un tipo de middleware.";
 choices[75][1] = "Las RPCs (Remote Procedure Call) requieren Sistema Operativo UNIX/LINUX.";
 choices[75][2] = "El modelo Proxy/Cach&eacute; es precursor del modelo cliente-servidor.";
 choices[75][3] = "Los applets son un modelo de sistemas distribuidos P2P.";
 answers[75] = choices[75][0];
 units[75] = "51";
 comments[75] = "Id Pregunta: 9718. Examen TIC-A1 2013";


//  Id pregunta: 9753 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  &iquest;Qu&eacute; es el &quot;Data staging area&quot; en el contexto de los Data Warehouses?";
 choices[76]= new Array();
 choices[76][0] = "Es un almac&eacute;n previo de datos y sus procesos asociados, en el que se extraen los datos de las fuentes, se transforman y se adaptan antes de ser cargados en el almac&eacute;n de datos.";
 choices[76][1] = "Durante la fase de dise&ntilde;o de un almac&eacute;n de datos, es la base de datos no permanente usada para ensayar, demostrar y estudiar el rendimiento de los dise&ntilde;os propuestos.";
 choices[76][2] = "Es el &aacute;rea del almac&eacute;n (conceptual o f&iacute;sicamente separada en otra base de datos) donde se cachean las consultas preparadas, cuando &eacute;stas no pueden ejecutarse en tiempo real.";
 choices[76][3] = "Es una copia id&eacute;ntica de las bases de datos originales, cuando en ellas existe mucha carga y no es posible bloquearlas para asegurar la integridad referencial al copiar los datos.";
 answers[76] = choices[76][0];
 units[76] = "68";
 comments[76] = "Id Pregunta: 9753. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9772 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  Indique cu&aacute;l de los siguientes sistemas de archivos se corresponde con el nuevo desarrollado por Microsoft y que fue presentado junto a Windows Server 2012:";
 choices[77]= new Array();
 choices[77][0] = "ReFS";
 choices[77][1] = "NTFS ";
 choices[77][2] = "HPFS";
 choices[77][3] = "CSFS ";
 answers[77] = choices[77][0];
 units[77] = "56";
 comments[77] = "Id Pregunta: 9772. Examen TIC A2 2013";


//  Id pregunta: 9899 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  Cual de los siguientes NO es un mecanismo de intercambio de informaci&oacute;n utilizable en una arquitectura distribuida";
 choices[78]= new Array();
 choices[78][0] = "mensajes XML sobre protocolo SMTP.";
 choices[78][1] = "mensajes SOAP sobre Servicios de Mensajes Java (JMS).";
 choices[78][2] = "OData.(Open Data Protocol)";
 choices[78][3] = "BPMN (Business Process Message Notation).";
 answers[78] = choices[78][3];
 units[78] = "50,51,79";
 comments[78] = "Id Pregunta: 9899. TIC A1, Examen 2013";


//  Id pregunta: 9923 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  En una transacci&oacute;n en un Sistema de Gesti&oacute;n de Bases de Datos (SGBD), &iquest;qu&eacute; se entiende por el punto de integridad?";
 choices[79]= new Array();
 choices[79][0] = "El momento despu&eacute;s en el que se inicia la transacci&oacute;n.";
 choices[79][1] = "El estado de la base de datos en el momento en que se inicia la transacci&oacute;n.";
 choices[79][2] = "Hacer un rollback en el caso de que haya un problema antes de completar la transacci&oacute;n.";
 choices[79][3] = "El retorno con la confirmaci&oacute;n de que la transacci&oacute;n se ha completado con &eacute;xito.";
 answers[79] = choices[79][1];
 units[79] = "57";
 comments[79] = "Id Pregunta: 9923. TIC A2, Examen 2013";


//  Id pregunta: 10000 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  Las siglas &ldquo;SOAP&rdquo;, en el marco de los servicios web, corresponden a";
 choices[80]= new Array();
 choices[80][0] = "Service Oriented Architecture Protocol.";
 choices[80][1] = "Simple Oriented Access Paradigm.";
 choices[80][2] = "Service Object Architecture Paradigm.";
 choices[80][3] = "Simple Object Access Protocol.";
 answers[80] = choices[80][3];
 units[80] = "69";
 comments[80] = "Id Pregunta: 10000. ";


//  Id pregunta: 10229 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  Cuales de los siguientes objetos son interfaces:";
 choices[81]= new Array();
 choices[81][0] = "java.util.List";
 choices[81][1] = "java.util.TreeMap";
 choices[81][2] = "java.util.AbstractList";
 choices[81][3] = "java.util.Collections";
 answers[81] = choices[81][0];
 units[81] = "60";
 comments[81] = "Id Pregunta: 10229. NULL";


//  Id pregunta: 10292 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  &iquest;A qu&eacute; altitud aproximada est&aacute; la &oacute;rbita de los sat&eacute;lites que forman el sistema GPS?";
 choices[82]= new Array();
 choices[82][0] = "5.200 km";
 choices[82][1] = "20.200 km";
 choices[82][2] = "36.200 km";
 choices[82][3] = "45.200 km";
 answers[82] = choices[82][1];
 units[82] = "67";
 comments[82] = "Id Pregunta: 10292. TIC A2, libre, examen 2013";


//  Id pregunta: 10432 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  Indique cual de las siguientes ediciones no corresponde a Windows Server 2012 ";
 choices[83]= new Array();
 choices[83][0] = "Business";
 choices[83][1] = "Essentials";
 choices[83][2] = "Foundation";
 choices[83][3] = "Standard";
 answers[83] = choices[83][0];
 units[83] = "56";
 comments[83] = "Id Pregunta: 10432. Examen TIC A1 2013";


//  Id pregunta: 10458 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  &iquest;Cu&aacute;l no es una novedad de HTML 5? ";
 choices[84]= new Array();
 choices[84][0] = "Application Cache";
 choices[84][1] = "Elementos sem&aacute;nticos.";
 choices[84][2] = "Web workers";
 choices[84][3] = "Elementos de desarrollo para plataformas m&oacute;viles.";
 answers[84] = choices[84][3];
 units[84] = "69";
 comments[84] = "Id Pregunta: 10458. NULL";


//  Id pregunta: 10470 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Respecto a los certificados X.509 y las PKI, indique la respuesta correcta:";
 choices[85]= new Array();
 choices[85][0] = "Exigen el uso de X.500 o LDAP  para la distribuci&oacute;n de certificados y CRLs.";
 choices[85][1] = "Cuando el estado de revocaci&oacute;n se proporciona mediante CRLs, la Autoridad de Certificaci&oacute;n es tambi&eacute;n la emisora de las CRLs.";
 choices[85][2] = "La emisi&oacute;n de CRLs es un mecanismo obligatorio de consulta de estado de los certificados.";
 choices[85][3] = "Una CRL completa lista todos los certificados no expirados dentro su alcance revocados por los motivos de revocaci&oacute;n dentro del alcance de la CRL.";
 answers[85] = choices[85][3];
 units[85] = "73";
 comments[85] = "Id Pregunta: 10470. ";


//  Id pregunta: 10525 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Se&ntilde;ale la respuesta correcta respecto a las arquitecturas UMA (Uniform Memory Access) y NUMA (Non-Uniform Memory Access)";
 choices[86]= new Array();
 choices[86][0] = "en NUMA un procesador accede m&aacute;s deprisa a su memoria local que a la memoria compartida";
 choices[86][1] = "en UMA los procesadores acceden a la memoria compartida mediante un bus o conmutador";
 choices[86][2] = "A y B son incorrectas";
 choices[86][3] = "A y B son correctas";
 answers[86] = choices[86][3];
 units[86] = "45";
 comments[86] = "Id Pregunta: 10525. NULL";


//  Id pregunta: 10536 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  &iquest;Qu&eacute; es la tecnolog&iacute;a TRIM que emplean los discos duros de estado s&oacute;lido?";
 choices[87]= new Array();
 choices[87][0] = "Permite al disco SSD optimizar el almacenamiento de la informaci&oacute;n, de forma que todos los datos est&eacute;n contiguos, mejorando as&iacute; el rendimiento";
 choices[87][1] = "Permite al sistema operativo comunicarle al disco SSD qu&eacute; celdas no est&aacute;n en uso";
 choices[87][2] = "Permite que el disco SSD entre en hibernaci&oacute;n cuando no se usa, mejorando as&iacute; su vida &uacute;til";
 choices[87][3] = "Permite reducir el ruido y calor generado por el disco SSD, as&iacute; como su consumo energ&eacute;tico";
 answers[87] = choices[87][1];
 units[87] = "48";
 comments[87] = "Id Pregunta: 10536. NULL";


//  Id pregunta: 10809 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  Indique la afirmaci&oacute;n FALSA respecto a VoiceXML:";
 choices[88]= new Array();
 choices[88][0] = "Es un lenguaje basado en XML.";
 choices[88][1] = "VoiceXML tiene como origen el Phone Markup Language (PML) de AT&amp;T.";
 choices[88][2] = "Es una recomendaci&oacute;n de la W3C.";
 choices[88][3] = "La &uacute;ltima versi&oacute;n es la VoiceXML 2.0.";
 answers[88] = choices[88][3];
 units[88] = "69";
 comments[88] = "Id Pregunta: 10809. Examen GSI 2014";


//  Id pregunta: 10870 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  En Linux, la primera partici&oacute;n l&oacute;gica en el disco duro maestro IDE del canal primario se identifica con:";
 choices[89]= new Array();
 choices[89][0] = "/dev/sda1";
 choices[89][1] = "/dev/hda1";
 choices[89][2] = "/dev/hda5";
 choices[89][3] = "/dev/hda2";
 answers[89] = choices[89][2];
 units[89] = "53, 54";
 comments[89] = "Id Pregunta: 10870. Examen GSI 2014";


//  Id pregunta: 11033 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  &iquest;Durante qu&eacute; procesos del desarrollo del Sistema de Informaci&oacute;n se realiza la modelizaci&oacute;n de los datos?";
 choices[90]= new Array();
 choices[90][0] = "Durante el an&aacute;lisis";
 choices[90][1] = "Durante el dise&ntilde;o";
 choices[90][2] = "Durante el an&aacute;lisis y durante el dise&ntilde;o";
 choices[90][3] = "No se utiliza la modelizaci&oacute;n de datos en el proceso de desarrollo del SI";
 answers[90] = choices[90][2];
 units[90] = "57";
 comments[90] = "Id Pregunta: 11033. ";


//  Id pregunta: 11042 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;Cu&aacute;l de las siguientes afirmaciones acerca de los compiladores es correcta?";
 choices[91]= new Array();
 choices[91][0] = "Los compiladores AOT (Ahead-Of-Time) compilan a c&oacute;digo m&aacute;quina nativo antes de la ejecuci&oacute;n de la aplicaci&oacute;n";
 choices[91][1] = "Los compiladores JIT (Just in Time) compilan durante la ejecuci&oacute;n";
 choices[91][2] = "Los 2 respuestas anteriores son correctas";
 choices[91][3] = "Ninguna de las anteriores es correcta";
 answers[91] = choices[91][2];
 units[91] = "60";
 comments[91] = "Id Pregunta: 11042. ";


//  Id pregunta: 11221 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l es el nombre de la biblioteca de clases del Framework de .NET?";
 choices[92]= new Array();
 choices[92][0] = "FCL";
 choices[92][1] = "CLR";
 choices[92][2] = "CLS";
 choices[92][3] = "JIT";
 answers[92] = choices[92][0];
 units[92] = "59";
 comments[92] = "Id Pregunta: 11221. ";


//  Id pregunta: 11279 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Los servicios WMS de OGC se consideran servicios de:";
 choices[93]= new Array();
 choices[93][0] = "Localizaci&oacute;n";
 choices[93][1] = "Descarga";
 choices[93][2] = "Transformaci&oacute;n";
 choices[93][3] = "Visualizaci&oacute;n";
 answers[93] = choices[93][3];
 units[93] = "67";
 comments[93] = "Id Pregunta: 11279. ";


//  Id pregunta: 11281 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Qu&eacute; es un servicio WPS?";
 choices[94]= new Array();
 choices[94][0] = "Un servicio de descarga de datos vectoriales";
 choices[94][1] = "Un servicio de visualizaci&oacute;n de coberturas r&aacute;ster";
 choices[94][2] = "Un servicio de transformaci&oacute;n";
 choices[94][3] = "No es un tipo de servicio";
 answers[94] = choices[94][2];
 units[94] = "67";
 comments[94] = "Id Pregunta: 11281. ";


//  Id pregunta: 11300 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  En relaci&oacute;n con un Prestador de Servicios de Certificaci&oacute;n (PSC) es cierto que";
 choices[95]= new Array();
 choices[95][0] = "Es una persona jur&iacute;dica que expide certificados";
 choices[95][1] = "Es una persona f&iacute;sica o jur&iacute;dica que expide certificados";
 choices[95][2] = "Es una persona f&iacute;sica o jur&iacute;dica que expide certificados u otros servicios relacionados con la firma electr&oacute;nica";
 choices[95][3] = "Es una persona jur&iacute;dica que expide certificados u otros servicios relacionados con la firma electr&oacute;nica";
 answers[95] = choices[95][2];
 units[95] = "74";
 comments[95] = "Id Pregunta: 11300. ";


//  Id pregunta: 11302 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Se&ntilde;ale la norma que no est&aacute; asociada correctamente a su contenido";
 choices[96]= new Array();
 choices[96][0] = "ISO 15408 - Common criteria";
 choices[96][1] = "RFC 2527 - DPC (Declaraci&oacute;n de Pr&aacute;cticas de Certificaci&oacute;n)";
 choices[96][2] = "CWA 14890 - Protocolo de autenticaci&oacute;n mutua, usado para el certificado de componente del DNI";
 choices[96][3] = "RFC 5246 - IPSEC";
 answers[96] = choices[96][3];
 units[96] = "33,74,111";
 comments[96] = "Id Pregunta: 11302. El RFC 5246 describe TLS. IPSEC es descrito en RFC 4305";


//  Id pregunta: 11513 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Indique cu&aacute;l de los siguientes algoritmos criptogr&aacute;ficos NO ha sido autorizado para uso en el Esquema Nacional de Seguridad seg&uacute;n la gu&iacute;a CCN-STIC 807.";
 choices[97]= new Array();
 choices[97][0] = "MD5";
 choices[97][1] = "TDEA";
 choices[97][2] = "AES";
 choices[97][3] = "RSA";
 answers[97] = choices[97][0];
 units[97] = "72";
 comments[97] = "Id Pregunta: 11513. NULL";


//  Id pregunta: 11534 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Seg&uacute;n la Ley 34/2002 de Servicios de la Sociedad de la Informaci&oacute;n y Comercio electr&oacute;nico, el procedimiento de cooperaci&oacute;n intracomunitario en el que se propone la realizaci&oacute;n de acciones urgentes contra un prestador de servicios de la sociedad de la informaci&oacute;n establecido en la U.E que haya incumplido alguno de los preceptos de la Ley, requiere notificaci&oacute;n al Consejo Europeo y al Estado Miembro en el que opera dicho Prestador en un Plazo M&Aacute;XIMO de:";
 choices[98]= new Array();
 choices[98][0] = "1 mes desde la adopci&oacute;n de las acciones urgentes.";
 choices[98][1] = "30 d&iacute;as desde la adopci&oacute;n de las acciones urgentes.";
 choices[98][2] = "15 d&iacute;as desde la adopci&oacute;n de acciones urgentes.";
 choices[98][3] = "Ninguna de las anteriores.";
 answers[98] = choices[98][2];
 units[98] = "70";
 comments[98] = "Id Pregunta: 11534. NULL";


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


