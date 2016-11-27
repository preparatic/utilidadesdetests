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

//  Id pregunta: 669 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  El &quot;Real Decreto por el que se regulan los registros y las notificaciones telem&aacute;ticas, as&iacute; como la utilizaci&oacute;n de medios telem&aacute;ticos para la sustituci&oacute;n de la aportaci&oacute;n de certificados por los ciudadanos&quot; es el:";
 choices[0]= new Array();
 choices[0][0] = "RD 263/1996";
 choices[0][1] = "RD 263/2003";
 choices[0][2] = "RD 209/2003";
 choices[0][3] = "RD 209/1996";
 answers[0] = choices[0][2];
 units[0] = "30";
 comments[0] = "Id Pregunta: 669. NULL";


//  Id pregunta: 713 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  En UNIX, &iquest;qui&eacute;n es el due&ntilde;o del proceso una vez ejecutada la instrucci&oacute;n lpr?";
 choices[1]= new Array();
 choices[1][0] = "root";
 choices[1][1] = "el usuario que la ha ejecutado";
 choices[1][2] = "el programa de control de la cola de impresora";
 choices[1][3] = "scheduler";
 answers[1] = choices[1][2];
 units[1] = "52, 53";
 comments[1] = "Id Pregunta: 713. Similar a examen TIC SS A 2003";


//  Id pregunta: 775 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  Los sistema multiagentes";
 choices[2]= new Array();
 choices[2][0] = "trabajan siempre asociados a arquitecturas de pizarra";
 choices[2][1] = "tienen un control centralizado por lo que no tienen autonom&iacute;a en los agentes";
 choices[2][2] = "cada uno de los agentes es capaz de decidir por si mismo";
 choices[2][3] = "Ninguna de las anteriores";
 answers[2] = choices[2][2];
 units[2] = "63";
 comments[2] = "Id Pregunta: 775. ";


//  Id pregunta: 811 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;Cu&aacute;l de los siguientes sistemas operativos no es un sistema multiusuario que permite a sus usuarios iniciar sesiones en ellos mediante terminales?";
 choices[3]= new Array();
 choices[3][0] = "Unix";
 choices[3][1] = "Z/OS";
 choices[3][2] = "Microsoft Windows";
 choices[3][3] = "Todas los sistemas anteriores lo permiten.";
 answers[3] = choices[3][3];
 units[3] = "52";
 comments[3] = "Id Pregunta: 811. ";


//  Id pregunta: 819 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  Seg&uacute;n la Ley 34/2002 de servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico, los contratos celebrados por la v&iacute;a electr&oacute;nica en los que intervenga como parte un consumidor se presumir&aacute;n celebrados en:";
 choices[4]= new Array();
 choices[4][0] = "El lugar en que est&eacute; establecido el prestador de servicios";
 choices[4][1] = "El lugar que figure en el registro mercantil";
 choices[4][2] = "El lugar en que &eacute;ste tenga su residencia habitual";
 choices[4][3] = "El lugar que figure en la cabecera de la p&aacute;gina";
 answers[4] = choices[4][2];
 units[4] = "30";
 comments[4] = "Id Pregunta: 819. Ley 34/2002, art&iacute;culo 29";


//  Id pregunta: 866 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;Cu&aacute;l de los siguientes es un protocolo de directorio?:";
 choices[5]= new Array();
 choices[5][0] = "MIME";
 choices[5][1] = "LDAP";
 choices[5][2] = "SMNP";
 choices[5][3] = "BGP";
 answers[5] = choices[5][1];
 units[5] = "73";
 comments[5] = "Id Pregunta: 866. ";


//  Id pregunta: 880 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Cu&aacute;l es el significado de ASCII?:";
 choices[6]= new Array();
 choices[6][0] = "American System Code for Input Information";
 choices[6][1] = "Asynchonous System Code fot International Information";
 choices[6][2] = "American Standard Code for Input Information";
 choices[6][3] = "American Standard Code for Information Interchange";
 answers[6] = choices[6][3];
 units[6] = "47";
 comments[6] = "Id Pregunta: 880. ";


//  Id pregunta: 899 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Es posible arrancar en GNU/Linux desde CD?:";
 choices[7]= new Array();
 choices[7][0] = "No, tiene que estar en disco duro obligatoriamente";
 choices[7][1] = "S&iacute;, en todos los casos";
 choices[7][2] = "S&iacute;, dependiendo de la versi&oacute;n de GNU/Linux";
 choices[7][3] = "No, aunque se podr&iacute;a parchear el arranque para que mirase el CD primero";
 answers[7] = choices[7][2];
 units[7] = "53";
 comments[7] = "Id Pregunta: 899. ";


//  Id pregunta: 950 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Codd  estableci&oacute; en 1986 doce principios, de los cuales al menos seis deben satisfacerse para que una base de datos pueda considerarse totalmente relacional. Entre ellos est&aacute;n:";
 choices[8]= new Array();
 choices[8][0] = "Acceso garantizado, cat&aacute;logo din&aacute;mico e independencia f&iacute;sica de los datos";
 choices[8][1] = "Gesti&oacute;n de una base de datos relacional, representaci&oacute;n de la informaci&oacute;n y regla de inversi&oacute;n";
 choices[8][2] = "Independencia de integridad, distribuci&oacute;n dependiente y sublenguaje global de datos";
 choices[8][3] = "Actualizaci&oacute;n de vistas, inserciones de alto nivel y n&uacute;cleo funcional independiente";
 answers[8] = choices[8][0];
 units[8] = "58";
 comments[8] = "Id Pregunta: 950. ";


//  Id pregunta: 985 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  Dentro de los criptosistemas el Data Encryption Standard es el m&aacute;s conocido por su f&aacute;cil implementaci&oacute;n. Indicar cu&aacute;l de las siguientes afirmaciones no le es aplicable:";
 choices[9]= new Array();
 choices[9][0] = "La clave es &uacute;nica y debe ser conocida por receptor y emisor";
 choices[9][1] = "La longitud de la clave es de 56 bits";
 choices[9][2] = "El ciclo de permutaci&oacute;n y sustituci&oacute;n se repite 16 veces";
 choices[9][3] = "Este m&eacute;todo de cifrado se conoce como de clave p&uacute;blica";
 answers[9] = choices[9][3];
 units[9] = "72";
 comments[9] = "Id Pregunta: 985. ";


//  Id pregunta: 992 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  Designer 2000 no contempla los procesos de:";
 choices[10]= new Array();
 choices[10][0] = "Planificaci&oacute;n";
 choices[10][1] = "An&aacute;lisis ";
 choices[10][2] = "Dise&ntilde;o";
 choices[10][3] = "Mantenimiento";
 answers[10] = choices[10][0];
 units[10] = "56";
 comments[10] = "Id Pregunta: 992. ";


//  Id pregunta: 998 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  El acr&oacute;nimo XML corresponde a:";
 choices[11]= new Array();
 choices[11][0] = "Extensible Markup Language";
 choices[11][1] = "Extended Markup Language";
 choices[11][2] = "Expressions Markup Language";
 choices[11][3] = "Extension Markup Language";
 answers[11] = choices[11][0];
 units[11] = "69";
 comments[11] = "Id Pregunta: 998. NULL";


//  Id pregunta: 1035 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  El modelo de referencia ANSI establece cuales son los componentes del SGBD. Entre ellos no se encuentra:";
 choices[12]= new Array();
 choices[12][0] = "Sistema de control de transformaci&oacute;n de datos";
 choices[12][1] = "Interfaz lenguaje de datos de usuario";
 choices[12][2] = "Interfaz lenguaje de manipulaci&oacute;n de datos";
 choices[12][3] = "Interfaz lenguaje de datos interno";
 answers[12] = choices[12][2];
 units[12] = "57";
 comments[12] = "Id Pregunta: 1035. ";


//  Id pregunta: 1048 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  El protocolo MESI:";
 choices[13]= new Array();
 choices[13][0] = "Es utilizado para el inicio de sesi&oacute;n en redes GSM";
 choices[13][1] = "Permite el establecimiento de conexiones entre iguales &quot;peer to peer&quot; sobre redes IP";
 choices[13][2] = "Controla las colisiones en redes Token Ring";
 choices[13][3] = "Controla la coherencia cache en algunos procesadores";
 answers[13] = choices[13][3];
 units[13] = "47";
 comments[13] = "Id Pregunta: 1048. ";


//  Id pregunta: 1069 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  Elija la respuesta falsa. Un cluster de PCs con Linux, utiliza:";
 choices[14]= new Array();
 choices[14][0] = "MPI, como librer&iacute;a para paso de mensajes";
 choices[14][1] = "Tecnolog&iacute;a NUMA entre todas las m&aacute;quinas";
 choices[14][2] = "Redes de alta velocidad, como Myrinet, O Gigabit ethernet";
 choices[14][3] = "Todas son v&aacute;lidas";
 answers[14] = choices[14][1];
 units[14] = "45";
 comments[14] = "Id Pregunta: 1069. ";


//  Id pregunta: 1071 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  En cu&aacute;l de las siguientes tecnolog&iacute;as es l&iacute;der Europa:";
 choices[15]= new Array();
 choices[15][0] = "Asimilaci&oacute;n de Internet.";
 choices[15][1] = "Hardware de comunicaciones.";
 choices[15][2] = "Comunicaciones m&oacute;viles.";
 choices[15][3] = "Software de comunicaciones.";
 answers[15] = choices[15][2];
 units[15] = "108";
 comments[15] = "Id Pregunta: 1071. ";


//  Id pregunta: 1186 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  Indicar la respuesta incorrecta sobre los procedimientos de inferencia asociados a los marcos en inteligencia artificial:";
 choices[16]= new Array();
 choices[16][0] = "Deducci&oacute;n de valores de ranuras";
 choices[16][1] = "Actualizaci&oacute;n de valores de ranuras";
 choices[16][2] = "Herencia de ranuras";
 choices[16][3] = "Equiparaci&oacute;n de marcos";
 answers[16] = choices[16][2];
 units[16] = "64";
 comments[16] = "Id Pregunta: 1186. ";


//  Id pregunta: 1228 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  La memoria cach&eacute;:";
 choices[17]= new Array();
 choices[17][0] = "Es una memoria auxiliar que se a&ntilde;ade a la memoria principal";
 choices[17][1] = "Es una parte de la memoria principal m&aacute;s r&aacute;pida que el resto";
 choices[17][2] = "No se encarga de realizar la traducci&oacute;n de los identificadores de bloques";
 choices[17][3] = "No disminuye el fallo de p&aacute;ginas";
 answers[17] = choices[17][0];
 units[17] = "47";
 comments[17] = "Id Pregunta: 1228. ";


//  Id pregunta: 1258 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Las operaciones de la Unidad Aritm&eacute;tico-L&oacute;gica se clasifican en:";
 choices[18]= new Array();
 choices[18][0] = "Desplazamiento, l&oacute;gicas y aritm&eacute;ticas";
 choices[18][1] = "L&oacute;gicas y aritm&eacute;ticas";
 choices[18][2] = "Desplazamiento, l&oacute;gicas y adici&oacute;n";
 choices[18][3] = "L&oacute;gicas y adici&oacute;n";
 answers[18] = choices[18][0];
 units[18] = "47";
 comments[18] = "Id Pregunta: 1258. ";


//  Id pregunta: 1261 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  Las redes neuronales son:";
 choices[19]= new Array();
 choices[19][0] = "Redes de comunicaciones controladas por inteligencia artificial";
 choices[19][1] = "Redes de ordenadores que piensan";
 choices[19][2] = "Una tecnolog&iacute;a que emula el funcionamiento del cerebro humano";
 choices[19][3] = "Nada de lo anterior";
 answers[19] = choices[19][2];
 units[19] = "63";
 comments[19] = "Id Pregunta: 1261. ";


//  Id pregunta: 1309 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Pilar quier enviar un mensaje confidencial a Antonio, en un sistema de clave p&uacute;blica, por lo tanto existen las claves Pilar-privada / Pilar p&uacute;blica y Antonio privada / Antonio p&uacute;blica.  Pilar genera su mensaje, &iquest;con qu&eacute; clave de las cuatro lo cifrar&aacute;?:";
 choices[20]= new Array();
 choices[20][0] = "Pilar-privada";
 choices[20][1] = "Pilar-p&uacute;blica";
 choices[20][2] = "Antonio-privada";
 choices[20][3] = "Antonio-p&uacute;blica";
 answers[20] = choices[20][3];
 units[20] = "72";
 comments[20] = "Id Pregunta: 1309. ";


//  Id pregunta: 1328 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  Se denomina firmware a:";
 choices[21]= new Array();
 choices[21][0] = "El software que suele suministrar el fabricante con sus equipos";
 choices[21][1] = "El c&oacute;digo de bajo nivel que es com&uacute;n a todos los ordenadores";
 choices[21][2] = "El componente f&iacute;sico que permite que el ordenador ejecute instrucciones m&aacute;quina";
 choices[21][3] = "Programa empotrado que establece la l&oacute;gica de bajo nivel que controla los circuitos electr&oacute;nicos de un dispositivo.";
 answers[21] = choices[21][3];
 units[21] = "47";
 comments[21] = "Id Pregunta: 1328. ";


//  Id pregunta: 1345 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Se&ntilde;ale la afirmaci&oacute;n err&oacute;nea respecto a los algoritmos de cifrado:";
 choices[22]= new Array();
 choices[22][0] = "Si utilizamos el sistema de cifrado mediante clave p&uacute;blica en una red local de N nodos, para poder comunicarse con todos los dem&aacute;s, cada nodo deber&aacute; conocer N - 1 claves, y ser&aacute;n necesarias un total de N! / 2 x (N - 2)! parejas de claves";
 choices[22][1] = "Si utilizamos el sistema de cifrado mediante clave sim&eacute;trica en una red local de N nodos, para poder comunicarse con todos los dem&aacute;s, cada nodo deber&aacute; conocer N - 1 claves, y ser&aacute;n necesarias un total de N*(N-1)/2 claves";
 choices[22][2] = "Si utilizamos el sistema de cifrado mediante clave sim&eacute;trica en una red local de 10 nodos, para poder comunicarse con todos los dem&aacute;s, cada nodo deber&aacute; conocer 9 claves, y ser&aacute;n necesarias un total de 45 claves";
 choices[22][3] = "Los algoritmos de cifrado mediante clave sim&eacute;trica DES, RC-2 y RC-4 son p&uacute;blicos.  A partir de un bloque de caracteres &ldquo;en claro&rdquo;, estos algoritmos generan un bloque de caracteres ininteligible (cifrado) mediante un n&uacute;mero de sustituciones y permutaciones";
 answers[22] = choices[22][0];
 units[22] = "72";
 comments[22] = "Id Pregunta: 1345. ";


//  Id pregunta: 1350 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Se&ntilde;ale la respuesta falsa. El lenguaje C:";
 choices[23]= new Array();
 choices[23][0] = "Surgi&oacute; del lenguaje B.";
 choices[23][1] = "Es procedural.";
 choices[23][2] = "Fue dise&ntilde;ado por Dennis Ritchie.";
 choices[23][3] = "Es fuertemente tipado.";
 answers[23] = choices[23][3];
 units[23] = "";
 comments[23] = "Id Pregunta: 1350. ";


//  Id pregunta: 1371 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Si una relaci&oacute;n no posee grupos repetitivos y cada atributo que no pertenezca a la clave es identificado &uacute;nicamente y de forma total por la clave se dice que est&aacute; en:";
 choices[24]= new Array();
 choices[24][0] = "Primera forma normal";
 choices[24][1] = "Segunda forma normal";
 choices[24][2] = "Tercera forma normal";
 choices[24][3] = "Forma normal de Boyce-Codd";
 answers[24] = choices[24][1];
 units[24] = "58";
 comments[24] = "Id Pregunta: 1371. ";


//  Id pregunta: 1401 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Un sistema operativo debe evolucionar f&aacute;cilmente porque:";
 choices[25]= new Array();
 choices[25][0] = "Hay frecuentes actualizaciones de hardware, y nuevos tipos del mismo; hay nuevos servicios que implican nuevos mecanismos de control; y se presentan siempre fallos no previstos que es necesario corregir";
 choices[25][1] = "No debe evolucionar f&aacute;cilmente, pues debe estar prevista desde su generaci&oacute;n la incorporaci&oacute;n de nuevos elementos de hardware";
 choices[25][2] = "No debe evolucionar f&aacute;cilmente, para evitar la f&aacute;cil generaci&oacute;n de versiones no autorizadas por el propietario";
 choices[25][3] = "Hay frecuentes desapariciones y apariciones de empresas de software, que podr&iacute;an dar lugar a una descontinuidad de versiones";
 answers[25] = choices[25][0];
 units[25] = "52";
 comments[25] = "Id Pregunta: 1401. ";


//  Id pregunta: 1415 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  Una de las siguientes caracter&iacute;sticas no es com&uacute;n a los discos WORM y WMRA:";
 choices[26]= new Array();
 choices[26][0] = "Poseen una gran capacidad de almacenamiento";
 choices[26][1] = "Son de f&aacute;cil manipulaci&oacute;n y transportabilidad";
 choices[26][2] = "Permiten escribir y borrar datos al igual que un disco magn&eacute;tico";
 choices[26][3] = "Son insensibles frente a las radiaciones electromagn&eacute;ticas";
 answers[26] = choices[26][2];
 units[26] = "48";
 comments[26] = "Id Pregunta: 1415. ";


//  Id pregunta: 1536 AÃ±o de creación de pregunta: 2003-01-01
 questions[27]= "28)  &iquest; Cu&aacute;l es el t&eacute;rmino con el que se denomina la personalizaci&oacute;n en apariencia y prestaciones de un ordenador ?";
 choices[27]= new Array();
 choices[27][0] = "Mobbing";
 choices[27][1] = "e-learning";
 choices[27][2] = "Modding";
 choices[27][3] = "customizing";
 answers[27] = choices[27][2];
 units[27] = "48";
 comments[27] = "Id Pregunta: 1536. NULL";


//  Id pregunta: 1565 AÃ±o de creación de pregunta: 2009-01-01
 questions[28]= "29)  &iquest;C&uacute;al es la afirmaci&oacute;n falsa si hablamos de LDAP?";
 choices[28]= new Array();
 choices[28][0] = "Usa TCP/IP";
 choices[28][1] = "Reemplaza a X.500";
 choices[28][2] = "El protocolo usa ASN.1 y los mensajes se codifican y transmiten usando BER ";
 choices[28][3] = "Permite la operaci&oacute;n MODIFY";
 answers[28] = choices[28][1];
 units[28] = "74";
 comments[28] = "Id Pregunta: 1565. RFC 4511";


//  Id pregunta: 1599 AÃ±o de creación de pregunta: 2003-01-01
 questions[29]= "30)  En un modelo de datos jer&aacute;rquico:";
 choices[29]= new Array();
 choices[29][0] = "Un registro no es subordinado directo de ning&uacute;n otro registro.";
 choices[29][1] = "Un registro es subordinado directo de como m&aacute;ximo otro registro.";
 choices[29][2] = "Un registro es subordinado directo de n registros, dependiendo de la topolog&iacute;a del modelo.";
 choices[29][3] = "Los registros estar organizados en una red de relaciones mediante un grafo.";
 answers[29] = choices[29][1];
 units[29] = "57";
 comments[29] = "Id Pregunta: 1599. Junta Andaluc&iacute;a";


//  Id pregunta: 1600 AÃ±o de creación de pregunta: 2003-01-01
 questions[30]= "31)  En un SGBD (Sistema Gestor de Base de Datos), &iquest;qu&eacute; tipo de bloqueos puede haber?";
 choices[30]= new Array();
 choices[30][0] = "Bloqueo de lectura, de escritura, de registro y de p&aacute;gina.";
 choices[30][1] = "Bloqueo de registro y de p&aacute;gina pero nunca de lectura ni escritura.";
 choices[30][2] = "Bloqueo de lectura y de escritura pero nunca de registro ni de p&aacute;gina.";
 choices[30][3] = "Bloqueo de escritura y de registro pero nunca de lectura ni de p&aacute;gina.";
 answers[30] = choices[30][0];
 units[30] = "58";
 comments[30] = "Id Pregunta: 1600. ";


//  Id pregunta: 1613 AÃ±o de creación de pregunta: 2003-01-01
 questions[31]= "32)  Las herramientas de administraci&oacute;n de datos de un SGBD";
 choices[31]= new Array();
 choices[31][0] = " Est&aacute;n entre  las facilidades de usuario y el sistema central de transformaci&oacute;n de datos ";
 choices[31][1] = " Tienen como interfaces LDU y LD";
 choices[31][2] = " Tienen como interfaces LD y LD-I";
 choices[31][3] = "Est&aacute;n entre el usuario y el sistema central de transformaci&oacute;n de datos ";
 answers[31] = choices[31][0];
 units[31] = "57";
 comments[31] = "Id Pregunta: 1613. ";


//  Id pregunta: 1630 AÃ±o de creación de pregunta: 2003-01-01
 questions[32]= "33)  Sobre lenguajes de comunicaci&oacute;n entre sistemas multiagente cual es cierta";
 choices[32]= new Array();
 choices[32][0] = "Se utiliza KQML porque aporta generalidad y ortogonalidad ";
 choices[32][1] = "Se utiliza KQML porque aporta generalidad y no ortogonalidad";
 choices[32][2] = "utiliza KIF porque aporta generalidad y ortogonalidad";
 choices[32][3] = "Se utiliza ARCHON porque aporta generalidad y ortogonalidad";
 answers[32] = choices[32][0];
 units[32] = "63";
 comments[32] = "Id Pregunta: 1630. ";


//  Id pregunta: 1661 AÃ±o de creación de pregunta: 2004-01-01
 questions[33]= "34)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones no es correcta:";
 choices[33]= new Array();
 choices[33][0] = "Uno de los principios de Unix es &quot;Todo es un archivo&quot;";
 choices[33][1] = "El Sistema  Operativo &quot;MULTICS&quot; se caracteriza por la gesti&oacute;n de procesos multiprograma y en tiempo compartido y su arquitectura modular.";
 choices[33][2] = "El Sistema Opreativo Unix se caracteriza, junto con MINIX, por la gesti&oacute;n de procesos multiprogramada y su arquitectura modular.";
 choices[33][3] = "El Sistema Operativo Unix se caracteriza por un sistema de gesti&oacute;n de procesos multiprogramada y en tiempo compartido y por su arquitectura monol&iacute;tica.";
 answers[33] = choices[33][3];
 units[33] = "53";
 comments[33] = "Id Pregunta: 1661. MAP-B 2003";


//  Id pregunta: 1691 AÃ±o de creación de pregunta: 2004-01-01
 questions[34]= "35)  Respecto a las herramientas, t&eacute;cnicas y terminolog&iacute;a OLAP indique cu&aacute;l de las siguientes afirmaciones es falsa.";
 choices[34]= new Array();
 choices[34][0] = "Trata de la s&iacute;ntesis, el an&aacute;lisis y la consolidaci&oacute;n din&aacute;mica de grandes vol&uacute;menes de datos multidimensionales.";
 choices[34][1] = "Las herramientas OLAP m&aacute;s eficientes en tiempo de respuesta trabajan sobre base de datos relacionales.";
 choices[34][2] = "Las bases de datos multidimensionales almacenan los datos de forma parecida a como lo hace una hoja de c&aacute;lculo aunque, a diferencia de &eacute;stas, es com&uacute;n que utilicen m&aacute;s de dos dimensiones.";
 choices[34][3] = "Se puede en establecer una jerarqu&iacute;a de niveles en cada dimensi&oacute;n para representar diversos grados de detalle.";
 answers[34] = choices[34][1];
 units[34] = "68";
 comments[34] = "Id Pregunta: 1691. ";


//  Id pregunta: 1697 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  Indicar la respuesta falsa:";
 choices[35]= new Array();
 choices[35][0] = "La profundidad de color es el m&aacute;ximo n&uacute;mero de colores representables";
 choices[35][1] = "El n&uacute;mero de bits de un procesador gr&aacute;fico es independiente de la profundidad o resoluci&oacute;n";
 choices[35][2] = "La resoluci&oacute;n es el n&uacute;mero m&iacute;nimo de pixels que se muestran en pantalla (Pixels en horizontal x Pixels en vertical)";
 choices[35][3] = "La frecuencia de refresco es el n&uacute;mero de veces que se renueva la informaci&oacute;n en pantalla por segundo";
 answers[35] = choices[35][2];
 units[35] = "47";
 comments[35] = "Id Pregunta: 1697. ";


//  Id pregunta: 1762 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  Se&ntilde;alar la afirmaci&oacute;n FALSA sobre los APPLETS de Java";
 choices[36]= new Array();
 choices[36][0] = "Programa Java que proporciona funcionalidad avanzada a una p&aacute;gina web";
 choices[36][1] = "S&oacute;lo utiliza recursos del cliente, no interviene nada el servidor.";
 choices[36][2] = "No puede leer o escribir ficheros en la m&aacute;quina local en la que se ejecute";
 choices[36][3] = "Todas las afirmaciones anteriores son verdaderas";
 answers[36] = choices[36][3];
 units[36] = "60";
 comments[36] = "Id Pregunta: 1762. B es falsa. Usa recursos del servidor para descargar el propio Applet y, en su caso, hacer consultas.";


//  Id pregunta: 1814 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  El modelo de datos vectorial utilizado en sistemas de informaci&oacute;n geogr&aacute;fica, utiliza los siguientes elementos de representaci&oacute;n para la informaci&oacute;n topol&oacute;gica (se&ntilde;ale la respuesta correcta):";
 choices[37]= new Array();
 choices[37][0] = "Puntos, arcos, politopos.";
 choices[37][1] = "Puntos, segmentos, pol&iacute;gonos.";
 choices[37][2] = "Puntos, arcos, pol&iacute;gonos.";
 choices[37][3] = "Puntos, arcos, segmentos.";
 answers[37] = choices[37][2];
 units[37] = "67";
 comments[37] = "Id Pregunta: 1814. NULL";


//  Id pregunta: 1852 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  Al ataque criptogr&aacute;fico consistente en el barrido del espacio de claves se le denomina:";
 choices[38]= new Array();
 choices[38][0] = "Fuerza bruta";
 choices[38][1] = "Criptoan&aacute;lisis diferencial";
 choices[38][2] = "Criptoan&aacute;lisis lineal";
 choices[38][3] = "An&aacute;lisis de temporizaci&oacute;n";
 answers[38] = choices[38][0];
 units[38] = "72";
 comments[38] = "Id Pregunta: 1852. ";


//  Id pregunta: 1927 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  En el entorno de escritorio KDE, Kate es:";
 choices[39]= new Array();
 choices[39][0] = "El navegador del escritorio";
 choices[39][1] = "Un generador de informes para la empresa";
 choices[39][2] = "Un editor de f&oacute;rmulas matem&aacute;ticas";
 choices[39][3] = "Un editor de texto";
 answers[39] = choices[39][3];
 units[39] = "54";
 comments[39] = "Id Pregunta: 1927. NULL";


//  Id pregunta: 1950 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  El protocolo SSL v.3";
 choices[40]= new Array();
 choices[40][0] = "Trabaja tanto sobre TCP como sobre UDP";
 choices[40][1] = "Hasta hace pocos a&ntilde;os los navegadores que incorporaban SSL ten&iacute;an su exportaci&oacute;n desde EE UU limitada a claves de 128 bits";
 choices[40][2] = "Es id&eacute;ntico al protocolo TLS, aunque este &uacute;ltimo est&aacute; normalizado por el IETF mediante un RFC";
 choices[40][3] = "Intercambia las claves secretas mediante el ensobrado digital (digital envelopment) o mediante Diffie-Hellman";
 answers[40] = choices[40][3];
 units[40] = "72";
 comments[40] = "Id Pregunta: 1950. ";


//  Id pregunta: 4344 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  De entre los siguientes, &iquest;cu&aacute;l no es uno de los servicios de certificaci&oacute;n ofrecidos actualmente por la F&aacute;brica Nacional de Moneda y Timbre?:";
 choices[41]= new Array();
 choices[41][0] = "Fechado digital.";
 choices[41][1] = "Validaci&oacute;n on-line de certificados.";
 choices[41][2] = "Voto electr&oacute;nico en Juntas Generales de Sociedades";
 choices[41][3] = "Login &uacute;nico en sistemas Windows, Linux y Unix";
 answers[41] = choices[41][3];
 units[41] = "74";
 comments[41] = "Id Pregunta: 4344. NULL";


//  Id pregunta: 4521 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  En una infraestructura PKI, Ia revocaci&oacute;n de un certificado requiere la presencia del usuario en:";
 choices[42]= new Array();
 choices[42][0] = "El proveedor de servicios de certificaci&oacute;n.";
 choices[42][1] = "En la F&aacute;brica Nacional de Moneda y Timbre.";
 choices[42][2] = "No hace falta, se puede hacer desde Internet.";
 choices[42][3] = "En una oficina de registro.";
 answers[42] = choices[42][3];
 units[42] = "74";
 comments[42] = "Id Pregunta: 4521. NULL";


//  Id pregunta: 4569 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  Para hacer una Ilamada a un procedimiento almacenado trabajando con JDBC podemos utilizar un objeto CallableStatement. Si el procedimiento almacenado devuelve mas de un conjunto de resultados, &iquest;que m&eacute;todo deberemos invocar?:";
 choices[43]= new Array();
 choices[43][0] = "execute";
 choices[43][1] = "executeQuery";
 choices[43][2] = "executeProcedure";
 choices[43][3] = "executeUpdate";
 answers[43] = choices[43][0];
 units[43] = "60";
 comments[43] = "Id Pregunta: 4569. NULL";


//  Id pregunta: 4740 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  Firmar un mensaje electr&oacute;nico";
 choices[44]= new Array();
 choices[44][0] = "Es lo mismo que cifrarlo";
 choices[44][1] = "Garantiza la confidencialidad";
 choices[44][2] = "Es lo mismo que codificarlo";
 choices[44][3] = "Garantiza la integridad, autenticaci&oacute;n y no repudio";
 answers[44] = choices[44][3];
 units[44] = "72";
 comments[44] = "Id Pregunta: 4740. Examen 2006 JCYL";


//  Id pregunta: 4869 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  En un sistema basado en el conocimiento, &iquest;qu&eacute; diferencia hay entre el conocimiento inferencial y el conocimiento estrat&eacute;gico o de control?";
 choices[45]= new Array();
 choices[45][0] = "El conocimiento inferencial est&aacute; contenido en la base de hechos y el de control es el que se obtiene mediante inferencia";
 choices[45][1] = "Los dos son equivalentes";
 choices[45][2] = "Los sistemas basados en el conocimiento no utilizan conocimiento estrat&eacute;gico";
 choices[45][3] = "El conocimiento inferencial procede de razonamientos y el estrat&eacute;gico permite decidir qu&eacute; regla se aplica en cada momento";
 answers[45] = choices[45][3];
 units[45] = "63";
 comments[45] = "Id Pregunta: 4869. ";


//  Id pregunta: 4955 AÃ±o de creación de pregunta: 2003-01-01
 questions[46]= "47)  &iquest;Cu&aacute;l de los siguientes es un Sistema de Gesti&oacute;n de Bases de Datos?:";
 choices[46]= new Array();
 choices[46][0] = "PostgreSQL.";
 choices[46][1] = "Gentoo.";
 choices[46][2] = "UbuntuBD.";
 choices[46][3] = "SQLCentos.";
 answers[46] = choices[46][0];
 units[46] = "57";
 comments[46] = "Id Pregunta: 4955. Examen TIC B 2007";


//  Id pregunta: 5077 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  &iquest;Cual de los siguientes es un est&aacute;ndar de W3C que permite referenciar partes de un documento XML?:";
 choices[47]= new Array();
 choices[47][0] = "XSL-FO";
 choices[47][1] = "Xpath";
 choices[47][2] = "XSLT";
 choices[47][3] = "Xforms";
 answers[47] = choices[47][1];
 units[47] = "69";
 comments[47] = "Id Pregunta: 5077. Examen TIC A 2007";


//  Id pregunta: 5466 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  Cual de las siguientes afirmaciones no es correcta a la hora de definir una tabla en Oracle";
 choices[48]= new Array();
 choices[48][0] = "S&oacute;lo deben ser num&eacute;ricas aquellas columnas que sean susceptibles de operaciones aritm&eacute;ticas";
 choices[48][1] = "Una &ldquo;clave inteligente&rdquo; o clave compuesta es m&aacute;s eficiente que una clave compuesta por varias columnas";
 choices[48][2] = "Oracle interpreta por defecto todos los objetos en may&uacute;scula a no ser que se escriba su nombre entre comillas dobles.";
 choices[48][3] = "La ordenaci&oacute;n de columnas num&eacute;ricas es diferente de la ordenaci&oacute;n de las columnas alfanum&eacute;ricas";
 answers[48] = choices[48][1];
 units[48] = "58";
 comments[48] = "Id Pregunta: 5466. Castilla y Le&oacute;n";


//  Id pregunta: 5628 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  Se&ntilde;ale la diferencia entre SMP y clustering";
 choices[49]= new Array();
 choices[49][0] = "SMP utiliza memoria compartida y el clustering paso de mensaje";
 choices[49][1] = "SMP utiliza paralelismo puro y el clustering memoria compartida ";
 choices[49][2] = "SMP utiliza memoria compartida y el clustering paralelismo puro ";
 choices[49][3] = "SMP utiliza memoria compartida y el clustering paralelismo de datos";
 answers[49] = choices[49][0];
 units[49] = "45";
 comments[49] = "Id Pregunta: 5628. ";


//  Id pregunta: 5643 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  Se&ntilde;ale cu&aacute;l de las siguientes opciones relativas a la tecnolog&iacute;a de web services es verdadera:";
 choices[50]= new Array();
 choices[50][0] = "UDDI se utiliza como lenguaje de definici&oacute;n de servicios web";
 choices[50][1] = "SOAP deriva de XML-RPC";
 choices[50][2] = "WSDL permita la localizaci&oacute;n y publicaci&oacute;n de servicios web";
 choices[50][3] = "Ninguna de las anteriores";
 answers[50] = choices[50][1];
 units[50] = "51";
 comments[50] = "Id Pregunta: 5643. NULL";


//  Id pregunta: 5723 AÃ±o de creación de pregunta: 2009-01-01
 questions[51]= "52)  Elija la opci&oacute;n correcta:";
 choices[51]= new Array();
 choices[51][0] = "Un documento XML v&aacute;lido es aqu&eacute;l que tiene una sintaxis XML v&aacute;lida.";
 choices[51][1] = "Un documento XML v&aacute;lido es aqu&eacute;l que cumple las reglas de un DTD.";
 choices[51][2] = "Un documento XML v&aacute;lido es aqu&eacute;l que est&aacute; bien formado y tambi&eacute;n cumple con las reglas de un DTD";
 choices[51][3] = "Un documento XML bien formado es aqu&eacute;l que cumple las reglas de un DTD";
 answers[51] = choices[51][2];
 units[51] = "69";
 comments[51] = "Id Pregunta: 5723. MAP 2008 A2";


//  Id pregunta: 5761 AÃ±o de creación de pregunta: 2009-01-01
 questions[52]= "53)  &iquest;Qu&eacute; versi&oacute;n de KDE introdujo los plasmoides?";
 choices[52]= new Array();
 choices[52][0] = "4.0";
 choices[52][1] = "5.3";
 choices[52][2] = "5.5";
 choices[52][3] = "6.0";
 answers[52] = choices[52][0];
 units[52] = "62";
 comments[52] = "Id Pregunta: 5761. ";


//  Id pregunta: 5859 AÃ±o de creación de pregunta: 2009-01-01
 questions[53]= "54)  Indique la ventaja de los sistemas RFID (Radio Frecuency Identification) de baja frecuencia:";
 choices[53]= new Array();
 choices[53][0] = "Soportan la lectura simult&aacute;nea de varias etiquetas";
 choices[53][1] = "El coste de las etiquetas es bajo debido al peque&ntilde;o tama&ntilde;o de su antena";
 choices[53][2] = "Poseen alta tasas de transmisi&oacute;n";
 choices[53][3] = "Su se&ntilde;al atraviesa materiales tales como el agua, la madera y el aluminio";
 answers[53] = choices[53][3];
 units[53] = "74";
 comments[53] = "Id Pregunta: 5859. Pregunta 39";


//  Id pregunta: 5912 AÃ±o de creación de pregunta: 2009-01-01
 questions[54]= "55)  El proyecto GNU fue concebido por:";
 choices[54]= new Array();
 choices[54][0] = "Tim O'Reilly";
 choices[54][1] = "Richard Stallman";
 choices[54][2] = "Tim Berners-Lee";
 choices[54][3] = "Robert Cailliau";
 answers[54] = choices[54][1];
 units[54] = "61";
 comments[54] = "Id Pregunta: 5912. MAP 2008 A1";


//  Id pregunta: 5983 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  &iquest;En cu&aacute;l de los siguientes componentes de XML se define la estructura de los datos que va a contener un formulario XML?";
 choices[55]= new Array();
 choices[55][0] = "Manifiestos (XSF).";
 choices[55][1] = "Vistas (XLS).";
 choices[55][2] = "Esquemas (XSD).";
 choices[55][3] = "Datos (XML).";
 answers[55] = choices[55][2];
 units[55] = "69";
 comments[55] = "Id Pregunta: 5983. TIC A 2009";


//  Id pregunta: 5984 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  El modelo de control de accesos donde es el sistema quien protege los recursos y donde todo recurso del sistema tiene unaetiqueta de seguridad se denomina:";
 choices[56]= new Array();
 choices[56][0] = "De acceso discrecional (DAC)";
 choices[56][1] = "De acceso obligatorio (MAC)";
 choices[56][2] = "Basado en roles (RBAC)";
 choices[56][3] = "De confidencialidad.";
 answers[56] = choices[56][1];
 units[56] = "73";
 comments[56] = "Id Pregunta: 5984. TIC A 2009";


//  Id pregunta: 6100 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  Acerca de las Autoridades de sellado de tiempo:";
 choices[57]= new Array();
 choices[57][0] = "Para expedir su certificado precisan conocer en su integridad el documento.";
 choices[57][1] = "En el modo de registros encadenados aplican iterativamente una funci&oacute;n resumen (hash) a la concatenaci&oacute;n del resumen del mensaje a sellar con el resultado de la iteraci&oacute;n anterior.";
 choices[57][2] = "En el modo de firma digital firman la concatenaci&oacute;n de los mensajes a sellar con el tiempo.";
 choices[57][3] = "No pueden ser simult&aacute;neamente Prestadores de Servicios de Certificaci&oacute;n seg&uacute;n la definici&oacute;n que de &eacute;stos da la Ley 59/2003 de firma electr&oacute;nica.";
 answers[57] = choices[57][1];
 units[57] = "74";
 comments[57] = "Id Pregunta: 6100. TIC A 2009";


//  Id pregunta: 6102 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  El lenguaje SQL92:";
 choices[58]= new Array();
 choices[58][0] = "Soporta la regla de integridad de entidad y en una tabla pueden existir dos filas iguales.";
 choices[58][1] = "Soporta la regla de integridad de entidad y en una tabla no pueden existir dos filas iguales.";
 choices[58][2] = "No soporta la regla de integridad de entidad y en una tabla pueden existir dos filas iguales.";
 choices[58][3] = "No soporta la regla de integridad de entidad y en una tabla no pueden existir dos filas iguales.";
 answers[58] = choices[58][0];
 units[58] = "58";
 comments[58] = "Id Pregunta: 6102. TIC A 2009";


//  Id pregunta: 6182 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  Entre las funciones de BPEL no se encuentra:";
 choices[59]= new Array();
 choices[59][0] = "Definir una interpretaci&oacute;n gr&aacute;fica de procesos.";
 choices[59][1] = "Definir procesos de negocio.";
 choices[59][2] = "Construir sobre servicios Web operaciones que participan en procedimientos empresariales.";
 choices[59][3] = "Orquestar servicios Web.";
 answers[59] = choices[59][0];
 units[59] = "71";
 comments[59] = "Id Pregunta: 6182. ";


//  Id pregunta: 6335 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  En un data warehouse:";
 choices[60]= new Array();
 choices[60][0] = "Jam&aacute;s se debe normalizar ninguna tabla.";
 choices[60][1] = "Es normal que algunas tablas de dimensi&oacute;n se desnormalicen buscando mayor eficiencia.";
 choices[60][2] = "Las tablas se mantienen en la m&aacute;xima forma normal para no perder consistencia dado el alto n&uacute;mero de operaciones de modificaci&oacute;n que se realizan.";
 choices[60][3] = "Todas las respuestas son falsas.";
 answers[60] = choices[60][1];
 units[60] = "68";
 comments[60] = "Id Pregunta: 6335. ";


//  Id pregunta: 6440 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  &iquest;Cu&aacute;l de los siguientes m&oacute;dulos no forma parte del ERP Oracle Applications?";
 choices[61]= new Array();
 choices[61][0] = "Oracle Payables";
 choices[61][1] = "Oracle Inventory";
 choices[61][2] = "Oracle Receivables";
 choices[61][3] = "Oracle Customers.";
 answers[61] = choices[61][3];
 units[61] = "65";
 comments[61] = "Id Pregunta: 6440. ";


//  Id pregunta: 6450 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  En un sistema operativo LINUX &iquest;qu&eacute; es un gestor GRUB?";
 choices[62]= new Array();
 choices[62][0] = "Un gestor de creaci&oacute;n y activaci&oacute;n de particiones swap, en el primer sector de la partici&oacute;n de arranque";
 choices[62][1] = "Un gestor que crea un &aacute;rea de swap en memoria RAM";
 choices[62][2] = "Un gestor que activa una partici&oacute;n de swap ya creada";
 choices[62][3] = "Un gestor de arranque multisistema creado por el proyecto GNU";
 answers[62] = choices[62][3];
 units[62] = "54";
 comments[62] = "Id Pregunta: 6450. Castilla La Mancha 2009";


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


//  Id pregunta: 6504 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  El proyecto POSIX est&aacute; auspiciado por:";
 choices[64]= new Array();
 choices[64][0] = "ISO";
 choices[64][1] = "IEEE";
 choices[64][2] = "GNU";
 choices[64][3] = "Berkley University";
 answers[64] = choices[64][1];
 units[64] = "53";
 comments[64] = "Id Pregunta: 6504. NULL";


//  Id pregunta: 6523 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  El API que permite a los desarrolladores Java generar y recoger mensajes SOAP con ficheros adjuntos es:";
 choices[65]= new Array();
 choices[65][0] = "JAXR";
 choices[65][1] = "JSXA";
 choices[65][2] = "SAAJ";
 choices[65][3] = "SWAJ";
 answers[65] = choices[65][2];
 units[65] = "116";
 comments[65] = "Id Pregunta: 6523. NULL";


//  Id pregunta: 7153 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  Para crear discos virtuales se utiliza tecnolog&iacute;a RAID se&ntilde;ale la opci&oacute;n falsa:";
 choices[66]= new Array();
 choices[66][0] = "El RAID 0 aporta mayor disponibilidad que el RAID  1";
 choices[66][1] = "El RAID  1 cuenta con una configuraci&oacute;n de discos en espejo";
 choices[66][2] = "El coste de RAID 1 es mayor que el de RAID 5.";
 choices[66][3] = "El RAID 5 usa divisi&oacute;n de datos a nivel de bloques distribuyendo la informaci&oacute;n de paridad entre todos los discos miembros del conjunto";
 answers[66] = choices[66][0];
 units[66] = "48";
 comments[66] = "Id Pregunta: 7153. Examen TIC B 2009";


//  Id pregunta: 7298 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  SQL*Loader es una herramienta utilizada para qu&eacute; servidor de bases de datos:";
 choices[67]= new Array();
 choices[67][0] = "MySQL";
 choices[67][1] = "Oracle";
 choices[67][2] = "SQL Server";
 choices[67][3] = "Todas las opciones son correctas";
 answers[67] = choices[67][1];
 units[67] = "57";
 comments[67] = "Id Pregunta: 7298. NULL";


//  Id pregunta: 8285 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  El fichero JAR de una distribuci&oacute;n JAVA , NO contiene:";
 choices[68]= new Array();
 choices[68][0] = "El fichero manifest.mf.";
 choices[68][1] = "Un fichero .class por cada clase compilada.";
 choices[68][2] = "Un fichero .sf por cada fichero firmado de la distribuci&oacute;n.";
 choices[68][3] = "Un fichero .crt con cada certificado digital utilizado para firmar las clases.";
 answers[68] = choices[68][3];
 units[68] = "60";
 comments[68] = "Id Pregunta: 8285. Examen TIC A1 2010";


//  Id pregunta: 8380 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  La velocidad de transferencia base (1X) de un disco Blu-ray es de:";
 choices[69]= new Array();
 choices[69][0] = "54 Mbits/s.";
 choices[69][1] = "4,5 MBytes/s.";
 choices[69][2] = "36 MBytes/s.";
 choices[69][3] = "9 MBytes/s.";
 answers[69] = choices[69][1];
 units[69] = "48";
 comments[69] = "Id Pregunta: 8380. Examen TIC A2 2010";


//  Id pregunta: 8436 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  &iquest;Cu&aacute;l de las siguientes no es una ventaja del cloud computing?";
 choices[70]= new Array();
 choices[70][0] = "Prestaci&oacute;n de servicios a nivel mundial";
 choices[70][1] = "Implementaci&oacute;n m&aacute;s r&aacute;pida y con menos riesgos";
 choices[70][2] = "Contribuye al uso eficiente de la energ&iacute;a";
 choices[70][3] = "Aumento de la seguridad";
 answers[70] = choices[70][3];
 units[70] = "47";
 comments[70] = "Id Pregunta: 8436. ";


//  Id pregunta: 8618 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  Con el objeto de asegurar la integridad de los datos, es necesario que una de las funciones del sistema gestor de base de datos sea la gesti&oacute;n de las transacciones. &iquest;Qu&eacute; propiedades deben tener &eacute;stas?";
 choices[71]= new Array();
 choices[71][0] = "Autenticaci&oacute;n, confidencialidad, integridad y disponibilidad.";
 choices[71][1] = "Eficiencia, eficacia, rapidez y estabilidad.";
 choices[71][2] = "Atomicidad, consistencia, aislamiento y persistencia.";
 choices[71][3] = "Serializaci&oacute;n, indexaci&oacute;n, independencia y transparencia.";
 answers[71] = choices[71][2];
 units[71] = "57,58";
 comments[71] = "Id Pregunta: 8618. Examen TIC A2 2010 interna";


//  Id pregunta: 8862 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  Al Sistema de Informaci&oacute;n Geogr&aacute;fica que basa su funcionalidad en una concepci&oacute;n impl&iacute;cita de las relaciones de vecindad entre los objetos geogr&aacute;ficos, se le llama:";
 choices[72]= new Array();
 choices[72][0] = "Sistema Vectorial.";
 choices[72][1] = "Sistema R&aacute;ster.";
 choices[72][2] = "Sistema georreferencial orientado a objetos.";
 choices[72][3] = "Sistema georreferencial basado en metadatos.";
 answers[72] = choices[72][1];
 units[72] = "67";
 comments[72] = "Id Pregunta: 8862. Analista Ayto. Madrid 2010";


//  Id pregunta: 9121 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  &iquest;C&oacute;mo son los nodos de un cluster?";
 choices[73]= new Array();
 choices[73][0] = "Siempre homog&eacute;neos con el mismo sistema operativo.";
 choices[73][1] = "Pueden ser heterogeneos, con distintos sistemas operativos.";
 choices[73][2] = "S&oacute;lo se pueden crear clusters con tecnolog&iacute;a Microsoft.";
 choices[73][3] = "Ninguna respuesta es correcta.";
 answers[73] = choices[73][1];
 units[73] = "45";
 comments[73] = "Id Pregunta: 9121. ";


//  Id pregunta: 9175 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  Se&ntilde;ale la afirmaci&oacute;n CORRECTA respecto a la Ley 34/2002:";
 choices[74]= new Array();
 choices[74][0] = "Los operadores de redes y servicios de comunicaciones electr&oacute;nicas, los proveedores de acceso a redes de telecomunicaciones y los prestadores de servicios de alojamiento de datos deber&aacute;n retener los datos de conexi&oacute;n y tr&aacute;fico generados por las comunicaciones establecidas durante la prestaci&oacute;n de un servicio de la sociedad de la informaci&oacute;n por un per&iacute;odo m&aacute;ximo de doce meses.";
 choices[74][1] = "Los contratos celebrados por v&iacute;a electr&oacute;nica en los que intervenga como parte un consumidor se presumir&aacute;n celebrados en el lugar en que el prestador de servicios tenga establecido su domicilio fiscal.";
 choices[74][2] = "El Real Decreto-ley 13/2012 traspone al ordenamiento jur&iacute;dico espa&ntilde;ol la Directiva 2009/136/CE que modifica la anterior Directiva 2002/58/CE.";
 choices[74][3] = "Las comunicaciones comerciales y las ofertas promocionales se regir&aacute;n en todos sus t&eacute;rminos por la Ley 34/2002";
 answers[74] = choices[74][2];
 units[74] = "70";
 comments[74] = "Id Pregunta: 9175. ";


//  Id pregunta: 9199 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  &iquest;Cu&aacute;l no es un derecho de explotaci&oacute;n de un programa de ordenador?";
 choices[75]= new Array();
 choices[75][0] = "La reproducci&oacute;n del programa de ordenador.";
 choices[75][1] = "La transformaci&oacute;n del programa de ordenador.";
 choices[75][2] = "La distribuci&oacute;n p&uacute;blica del programa de ordenador.";
 choices[75][3] = "Todas las anteriores son verdaderas.";
 answers[75] = choices[75][3];
 units[75] = "36";
 comments[75] = "Id Pregunta: 9199. ";


//  Id pregunta: 9218 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  &iquest;Qu&eacute; es WAFS?";
 choices[76]= new Array();
 choices[76][0] = "Wide Area File Service";
 choices[76][1] = "Una evoluci&oacute;n del empaquetado de audio WAV";
 choices[76][2] = "Un tipo de File System";
 choices[76][3] = "Una t&eacute;cnica de compresi&oacute;n de imagen.";
 answers[76] = choices[76][0];
 units[76] = "48";
 comments[76] = "Id Pregunta: 9218. ";


//  Id pregunta: 9231 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  &iquest;Qu&eacute; es la barra y la l&iacute;nea en tecnolog&iacute;a mainframe de IBM?";
 choices[77]= new Array();
 choices[77][0] = "Espacio de direccionamiento que alcanza los 64 MB y los 2 GB respectivamente.";
 choices[77][1] = "Espacio de direccionamiento que alcanza los 2 GB y los 64 MB respectivamente";
 choices[77][2] = "Espacio de direccionamiento que alcanza los 2 GB y los 16 MB respectivamente.";
 choices[77][3] = "Ninguna es correcta.";
 answers[77] = choices[77][2];
 units[77] = "52,55";
 comments[77] = "Id Pregunta: 9231. ";


//  Id pregunta: 9247 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  &iquest;Qu&eacute; interfaces admit&iacute;a NT?";
 choices[78]= new Array();
 choices[78][0] = "OS/2";
 choices[78][1] = "POSIX";
 choices[78][2] = "OS/2, POSIX y Win32.";
 choices[78][3] = "Aunque admit&iacute;a OS/2, todav&iacute;a se sigue utilizando en Windows XP.";
 answers[78] = choices[78][2];
 units[78] = "56";
 comments[78] = "Id Pregunta: 9247. ";


//  Id pregunta: 9618 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  &iquest;Cuantos atributos tiene un archivo en el sistema de ficheros NTFS?";
 choices[79]= new Array();
 choices[79][0] = "9";
 choices[79][1] = "11";
 choices[79][2] = "13";
 choices[79][3] = "15";
 answers[79] = choices[79][2];
 units[79] = "56";
 comments[79] = "Id Pregunta: 9618. ";


//  Id pregunta: 9623 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  &iquest;En qu&eacute; consisten los segmentos de memoria virtual en el Sistema Operativo Windows?";
 choices[80]= new Array();
 choices[80][0] = "Bloques de memoria virtual de longitud variable que pertenecen al mismo proceso";
 choices[80][1] = "Bloques de memoria virtual de longitud fija que pertenecen al mismo proceso";
 choices[80][2] = "Bloques memoria virtual de longitud fija que no tienen relaci&oacute;n entre ellos";
 choices[80][3] = "Ninguno de los anteriores";
 answers[80] = choices[80][3];
 units[80] = "56";
 comments[80] = "Id Pregunta: 9623. Windows no usa memoria virtual segmentada, s&oacute;lo paginada";


//  Id pregunta: 9630 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  Para entornos Unix, indica c&oacute;mo se asigna el sticky bit a un directorio:";
 choices[81]= new Array();
 choices[81][0] = "chmod u+s /directorio/fichero";
 choices[81][1] = "chmog g+s /directorio";
 choices[81][2] = "chmod 177 /directorio ";
 choices[81][3] = "chmod +t /directorio ";
 answers[81] = choices[81][3];
 units[81] = "54";
 comments[81] = "Id Pregunta: 9630. Examen TIC A2 2013";


//  Id pregunta: 9674 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  La arquitectura del Grid se compone de las siguientes capas:";
 choices[82]= new Array();
 choices[82][0] = "Capa de red, de &ldquo;middleware&rdquo; y de aplicaci&oacute;n.";
 choices[82][1] = "Capa de red, de &ldquo;middleware&rdquo;, de recursos y de aplicaci&oacute;n.";
 choices[82][2] = "Capa de recursos, de &ldquo;middleware&rdquo; y de aplicaci&oacute;n.";
 choices[82][3] = "Ninguna de las anteriores.";
 answers[82] = choices[82][1];
 units[82] = "45";
 comments[82] = "Id Pregunta: 9674. ";


//  Id pregunta: 9713 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  Se&ntilde;ale la respuesta INCORRECTA respecto a las funciones criptogr&aacute;ficas hash o resumen.";
 choices[83]= new Array();
 choices[83][0] = "MD5 genera un hash de 128 bits.";
 choices[83][1] = "SHA-1 genera un hash de 160 bits.";
 choices[83][2] = "Se conoce por SHA-2 a un conjunto de funciones de la familia SHA que generan hashes de longitud 224, 256, 384 y 512 bits.";
 choices[83][3] = "La longitud m&iacute;nima del hash soportada en SHA-3 es 256 bits.";
 answers[83] = choices[83][3];
 units[83] = "72";
 comments[83] = "Id Pregunta: 9713. Examen TIC-A1 2013";


//  Id pregunta: 9777 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  &iquest;Cu&aacute;l de los siguientes NO es un gestor de ventanas de Linux?";
 choices[84]= new Array();
 choices[84][0] = "Metacity de GNOME. ";
 choices[84][1] = "KWIN de KDE.";
 choices[84][2] = "GTK de CDE.";
 choices[84][3] = "Enlightenment de GNOME.";
 answers[84] = choices[84][2];
 units[84] = "54";
 comments[84] = "Id Pregunta: 9777. Examen TIC A2 2013 - Duplicada";


//  Id pregunta: 9968 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  El Servicio de Representaci&oacute;n de Workflow (Workflow Enactment Service) seg&uacute;n la Workflow Management Coalition (WfMC) se encarga de:";
 choices[85]= new Array();
 choices[85][0] = "Interpretar la descripci&oacute;n de procesos y controlar las diferentes instancias de los procesos,secuencia de actividades, a&ntilde;adir elementos a la lista de trabajo de los usuarios, e invocar las aplicaciones necesarias.";
 choices[85][1] = "El modelado y dise&ntilde;o de los procesos, el cual puede ser interpretado en tiempo de ejecuci&oacute;n por el o los motores de Workflow.";
 choices[85][2] = "La definici&oacute;n de los mecanismos requeridos por los desarrolladores de productos Workflow para implementar la comunicaci&oacute;n de un motor Workflow con otros.";
 choices[85][3] = "La interacci&oacute;n entre los participantes del flujo de trabajo y el servicio de lanzamiento de flujo de trabajo";
 answers[85] = choices[85][0];
 units[85] = "71";
 comments[85] = "Id Pregunta: 9968. Examen Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n, Servicio sanitario Extremadura, 2014";


//  Id pregunta: 10013 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Indique los cuatro niveles de aislamiento que define ANSI SQL 92:";
 choices[86]= new Array();
 choices[86][0] = "Lecturas no confirmadas (read uncommited), lecturas confirmadas (read commited), lecturas repetibles (repeatable read), transacciones secuenciables (serializable).";
 choices[86][1] = "Escrituras no confirmadas (write uncommited), escrituras confirmadas (write commited), escrituras repetibles (repeatable write), transacciones secuenciables (serializable).";
 choices[86][2] = "Escrituras no confirmadas (write uncommited), escrituras confirmadas (write commited), lecturas repetibles (repeatable read), transacciones secuenciables (serializable).";
 choices[86][3] = "Lecturas no confirmadas (read uncommited), lecturas confirmadas (read commited), escrituras repetibles (repeatable write), transacciones secuenciables (serializable).";
 answers[86] = choices[86][0];
 units[86] = "57";
 comments[86] = "Id Pregunta: 10013. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10016 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  La instrucci&oacute;n que aborta la transacci&oacute;n en un SGBD y la hace terminar en forma no exitosa se denomina:";
 choices[87]= new Array();
 choices[87][0] = "Undo.";
 choices[87][1] = "Rollback.";
 choices[87][2] = "Two Phase Commit.";
 choices[87][3] = "Commit.";
 answers[87] = choices[87][1];
 units[87] = "57";
 comments[87] = "Id Pregunta: 10016. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10236 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  El objeto PreparedStatement de la api java.sql se utiliza para:";
 choices[88]= new Array();
 choices[88][0] = "Ejecutar una sentencia SQL de forma repetida variando los par&aacute;metros de la misma";
 choices[88][1] = "Nos permite acceder a procedimientos almacenados en la base de datos";
 choices[88][2] = "Es &uacute;til a la hora de trabajar con el metadata de la base de datos";
 choices[88][3] = "ninguna de las anteriores";
 answers[88] = choices[88][0];
 units[88] = "60";
 comments[88] = "Id Pregunta: 10236. NULL";


//  Id pregunta: 10293 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  Uno de los siguientes t&eacute;rminos NO se corresponde con un tipo de antena satelital:";
 choices[89]= new Array();
 choices[89][0] = "Cassegrain";
 choices[89][1] = "Krenwinkel";
 choices[89][2] = "Gregorian";
 choices[89][3] = "Offset";
 answers[89] = choices[89][1];
 units[89] = "67";
 comments[89] = "Id Pregunta: 10293. TIC A2, libre, examen 2013";


//  Id pregunta: 10372 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  &iquest;Qu&eacute; es Kleopatra?";
 choices[90]= new Array();
 choices[90][0] = "El equivalente en Android al servicio Kerberos de Windows";
 choices[90][1] = "Una aplicaci&oacute;n de gesti&oacute;n criptogr&aacute;fica basada en GPG";
 choices[90][2] = "Un navegador del entorno KDE";
 choices[90][3] = "La &uacute;ltima versi&oacute;n de Debian";
 answers[90] = choices[90][1];
 units[90] = "72";
 comments[90] = "Id Pregunta: 10372. ";


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


//  Id pregunta: 10952 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  En la estructura de un certificado X.509 v3 NO es obligatorio:";
 choices[92]= new Array();
 choices[92][0] = "El n&uacute;mero de serie.";
 choices[92][1] = "La validez no antes de.";
 choices[92][2] = "El identificador &uacute;nico de emisor.";
 choices[92][3] = "El emisor.";
 answers[92] = choices[92][2];
 units[92] = "73";
 comments[92] = "Id Pregunta: 10952. TIC A1 AGE 2014";


//  Id pregunta: 11034 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Cu&aacute;l de los siguientes tipos de modelados conceptuales se asocia correctamente a su descripci&oacute;n?";
 choices[93]= new Array();
 choices[93][0] = "a)&nbsp;&nbsp;&nbsp;&nbsp; Modelo de Datos &agrave; Modelo est&aacute;tico";
 choices[93][1] = "Modelo de Objetos &agrave; Modelo funcional";
 choices[93][2] = "Modelo de Procesos &agrave; Modelo din&aacute;mico";
 choices[93][3] = "Modelo de Estados &agrave; Modelo funcional";
 answers[93] = choices[93][0];
 units[93] = "57";
 comments[93] = "Id Pregunta: 11034. ";


//  Id pregunta: 11352 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  De las siguientes afirmaciones, seleccione la correcta en relaci&oacute;n con lo regulado en la Ley 25/2013, de 27 de diciembre, de impulso de la factura electr&oacute;nica y creaci&oacute;n del registro contable de facturas en el Sector P&uacute;blico";
 choices[94]= new Array();
 choices[94][0] = "La Ley 25/2013 tiene como &aacute;mbito de actuaci&oacute;n, las facturas emitidas en el marco de las relaciones jur&iacute;dicas entre proveedores de bienes y servicios y las Administraciones P&uacute;blicas";
 choices[94][1] = "Impulso del uso de la factura electr&oacute;nica en el sector p&uacute;blico, con car&aacute;cter obligatorio para determinados sujetos a partir del uno de enero de 2015.";
 choices[94][2] = "Obligaci&oacute;n de las empresas de presentaci&oacute;n en un registro administrativo de las facturas expedidas por los servicios que presten o bienes que entreguen a una Administraci&oacute;n P&uacute;blica, en un plazo de 20 d&iacute;as desde la prestaci&oacute;n o entrega";
 choices[94][3] = "Se establece la creaci&oacute;n obligatoria para la Administraci&oacute;n P&uacute;blica estatal, de puntos generales de entrada de facturas electr&oacute;nicas";
 answers[94] = choices[94][0];
 units[94] = "70";
 comments[94] = "Id Pregunta: 11352. Es obligatorio a partir del 15 de enero de 2015. El plazo para la entrega de la factura, son 30 d&iacute;as. La creaci&oacute;n es obligatoria para todas las administraciones p&uacute;blicas.";


//  Id pregunta: 11506 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Cu&aacute;ntos niveles madurez define el modelo de cloud computing SaaS (Software as a Service) de Microsoft?";
 choices[95]= new Array();
 choices[95][0] = "5";
 choices[95][1] = "4";
 choices[95][2] = "3";
 choices[95][3] = "6";
 answers[95] = choices[95][1];
 units[95] = "47";
 comments[95] = "Id Pregunta: 11506. NULL";


//  Id pregunta: 11611 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Una condici&oacute;n del bloqueo mutuo es:";
 choices[96]= new Array();
 choices[96][0] = "Condici&oacute;n de exclusi&oacute;n mutua";
 choices[96][1] = "Condici&oacute;n de ocupar y esperar un recurso";
 choices[96][2] = "Condici&oacute;n de espera circular";
 choices[96][3] = "Las 3 son condiciones necesarias del bloqueo mutuo.";
 answers[96] = choices[96][3];
 units[96] = "52";
 comments[96] = "Id Pregunta: 11611. ";


//  Id pregunta: 11613 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  En SQL, para borrar los datos de una tabla pero seguir conserv&aacute;ndola se emplea:";
 choices[97]= new Array();
 choices[97][0] = "DROP TABLE";
 choices[97][1] = "TRUNCATE TABLE";
 choices[97][2] = "DELETE TABLE";
 choices[97][3] = "MODIFY TABLE";
 answers[97] = choices[97][1];
 units[97] = "58";
 comments[97] = "Id Pregunta: 11613. ";


//  Id pregunta: 11621 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Se&ntilde;ale la respuesta incorrecta con respecto a los MOOC:";
 choices[98]= new Array();
 choices[98][0] = "Son similar a cualquier curso en l&iacute;nea.";
 choices[98][1] = "El n&uacute;mero de participantes es ilimitado.";
 choices[98][2] = "MOOC son las siglas de Masive Open Online Course.";
 choices[98][3] = "Se basan en la interacci&oacute;n social.";
 answers[98] = choices[98][0];
 units[98] = "66";
 comments[98] = "Id Pregunta: 11621. ";


//  Id pregunta: 11627 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Camellia es un algoritmo:";
 choices[99]= new Array();
 choices[99][0] = "Sim&eacute;trico de bloque";
 choices[99][1] = "Sim&eacute;trico de flujo";
 choices[99][2] = "Asim&eacute;trico";
 choices[99][3] = "De funci&oacute;n hash";
 answers[99] = choices[99][0];
 units[99] = "72";
 comments[99] = "Id Pregunta: 11627. ";


