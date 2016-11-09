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

//  Id pregunta: 671 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  Seg&uacute;n el R.D. 209/2003, una de las siguientes afirmaciones es err&oacute;nea:";
 choices[0]= new Array();
 choices[0][0] = "la utilizaci&oacute;n de una direcci&oacute;n electr&oacute;nica &uacute;nica debe ser expresamente notificada por el ciudadano interesado";
 choices[0][1] = "la direcci&oacute;n electr&oacute;nica &uacute;nica debe cumplir los requisitos de poseer identificadores de usuario y claves de acceso, y contener mecanismos de autenticaci&oacute;n y cifrado";
 choices[0][2] = "el CSI pasa a llamarse Consejo para el Impulso de la Administraci&oacute;n Electr&oacute;nica, CIAE";
 choices[0][3] = "los certificados anteriores emitidos por la AEAT y la TGSS deben ser sustituidos a partir de la entrada en vigor del R.D.";
 answers[0] = choices[0][2];
 units[0] = "30";
 comments[0] = "Id Pregunta: 671. ";


//  Id pregunta: 709 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  &iquest;Qu&eacute; se necesita para poder aprovechar la tecnolog&iacute;a HyperThreading?";
 choices[1]= new Array();
 choices[1][0] = "Procesador Intel Pentium 4 y Windows 2003";
 choices[1][1] = "Procesador Sun SPARC y Solaris";
 choices[1][2] = "Procesador Intel Core 2 Duo y Linux";
 choices[1][3] = "Procesador Sun SPARC y Windows 2000";
 answers[1] = choices[1][0];
 units[1] = "47";
 comments[1] = "Id Pregunta: 709. Similar a examen TIC SS A 2004";


//  Id pregunta: 718 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  Entre los distintos niveles de abstracci&oacute;n de una base de datos &iquest;con cu&aacute;l de los siguientes conceptos se identifica el &quot;usuario final&quot;?";
 choices[2]= new Array();
 choices[2][0] = "Esquema externo";
 choices[2][1] = "Esquema conceptual";
 choices[2][2] = "Esquema interno";
 choices[2][3] = "Esquema global";
 answers[2] = choices[2][0];
 units[2] = "57";
 comments[2] = "Id Pregunta: 718. Examen TIC MAP B 2004";


//  Id pregunta: 764 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  En el entorno de la seguridad de los sistemas operativos UNIX y redes de ordenadores, se llama socket:";
 choices[3]= new Array();
 choices[3][0] = "A la combinaci&oacute;n de una direcci&oacute;n de m&aacute;quina y un puerto";
 choices[3][1] = "A la combinaci&oacute;n de una direcci&oacute;n m&aacute;quina, un puerto y un usuario autenticado de una aplicaci&oacute;n";
 choices[3][2] = "A la conexi&oacute;n entre la m&aacute;quina receptora y la emisora en una red con protocolos TCP/IP";
 choices[3][3] = "Es el protocolo (puerto 113, TCP) que utiliza un mecanismo para determinar nombres de usuarios en conexiones TCP. Trabaja conjuntamente con procesos del tipo &quot;identd&quot; y programas &quot;TCP Wrappers&quot;";
 answers[3] = choices[3][0];
 units[3] = "53, 54";
 comments[3] = "Id Pregunta: 764. ";


//  Id pregunta: 782 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  La Ley 34/2002 de servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico establece:";
 choices[4]= new Array();
 choices[4][0] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico que previamente no hubieran sido solicitadas o expresamente autorizadas por los destinatarios de las mismas";
 choices[4][1] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico";
 choices[4][2] = "Las comunicaciones comerciales realizadas por correo electr&oacute;nico incluir&aacute;n al comienzo del mensaje la palabra &quot;publicidad&quot;";
 choices[4][3] = "Las respuestas 'a' y 'c' son correctas";
 answers[4] = choices[4][3];
 units[4] = "30";
 comments[4] = "Id Pregunta: 782. Ley 34/2002, art&iacute;culo 20 y 21";


//  Id pregunta: 812 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  ALGOL, COBOL y FORTRAN son lenguajes de programaci&oacute;n de la d&eacute;cada de los:";
 choices[5]= new Array();
 choices[5][0] = "40s";
 choices[5][1] = "50s";
 choices[5][2] = "60s";
 choices[5][3] = "70s";
 answers[5] = choices[5][1];
 units[5] = "57";
 comments[5] = "Id Pregunta: 812. ";


//  Id pregunta: 852 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Cu&aacute;l de las siguientes no es una versi&oacute;n propietaria del sistema operativo Unix?:";
 choices[6]= new Array();
 choices[6][0] = "HP-UX";
 choices[6][1] = "Solaris";
 choices[6][2] = "IRIX";
 choices[6][3] = "Todas las anteriores lo son";
 answers[6] = choices[6][3];
 units[6] = "52, 53";
 comments[6] = "Id Pregunta: 852. ";


//  Id pregunta: 857 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas no es com&uacute;nmente utilizada para la extracci&oacute;n de informaci&oacute;n en un almac&eacute;n de datos?";
 choices[7]= new Array();
 choices[7][0] = "De consulta e informe.";
 choices[7][1] = "De an&aacute;lisis m&uacute;ltidimensional.";
 choices[7][2] = "De an&aacute;lisis predictivo.";
 choices[7][3] = "De inteligencia artificial.";
 answers[7] = choices[7][2];
 units[7] = "68";
 comments[7] = "Id Pregunta: 857. ";


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


//  Id pregunta: 941 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Qu&eacute; se entiende por quantum?:";
 choices[9]= new Array();
 choices[9][0] = "El porcentaje de tiempo durante el cual dos o m&aacute;s componentes est&aacute;n siendo utilizados simult&aacute;neamente";
 choices[9][1] = "El porcentaje de tiempo durante el cual los distintos dispositivos del sistema est&aacute;n siendo utilizados en tareas del sistema";
 choices[9][2] = "La cantidad de tiempo ininterrumpido de la CPU que un sistema de tiempo compartido asigna a los diferentes trabajos";
 choices[9][3] = "El n&uacute;mero de programas sacados de memoria por unidad de tiempo a causa de falta de espacio &oacute; para reorganizar el mismo";
 answers[9] = choices[9][2];
 units[9] = "52";
 comments[9] = "Id Pregunta: 941. ";


//  Id pregunta: 1018 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  El &iacute;ndice m&aacute;ximo de transporte de datos de un bus PCI es:";
 choices[10]= new Array();
 choices[10][0] = "64 Mbytes/segundo";
 choices[10][1] = "16 Mbytes/segundo";
 choices[10][2] = "132 Mbytes/segundo";
 choices[10][3] = "5 Mbytes/segundo";
 answers[10] = choices[10][2];
 units[10] = "47";
 comments[10] = "Id Pregunta: 1018. ";


//  Id pregunta: 1073 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  En el &aacute;mbito de la inteligencia artificial, &iquest;cu&aacute;l de las siguientes afirmaciones respecto de las redes sem&aacute;nticas es cierta?:";
 choices[11]= new Array();
 choices[11][0] = "La representaci&oacute;n de una red sem&aacute;ntica se realiza con nodos, correspondientes a ideas o conceptos, y arcos representando relaciones entre nodos";
 choices[11][1] = "Las redes se representan mediante sentencias condicionales que relacionan grupos de conceptos, los antecesores y los consecuentes";
 choices[11][2] = "Las redes representan patrones de un concepto e internamente est&aacute;n formados por ranuras representando caracter&iacute;sticas de las redes sem&aacute;nticas";
 choices[11][3] = "Las redes sem&aacute;nticas representan relaciones de equilibrio entre los atributos de uno o m&aacute;s objetos y el rango de valores de los mismos";
 answers[11] = choices[11][0];
 units[11] = "64";
 comments[11] = "Id Pregunta: 1073. ";


//  Id pregunta: 1091 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  En el proceso de cifrado basado en el m&eacute;todo DES de criptosistema sim&eacute;trico, en el cu&aacute;l existen n nodos de intercambio de mensajes, &iquest;cu&aacute;ntas claves debe gestionar cada uno de los nodos para comunicarse con el resto?:";
 choices[12]= new Array();
 choices[12][0] = "n";
 choices[12][1] = "n + 1";
 choices[12][2] = "n!";
 choices[12][3] = "Ninguna de las anteriores contestaciones es cierta";
 answers[12] = choices[12][3];
 units[12] = "72";
 comments[12] = "Id Pregunta: 1091. ";


//  Id pregunta: 1139 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  En un ordenador que emplea memoria virtual:";
 choices[13]= new Array();
 choices[13][0] = "Las direcciones que generan los programas se refieren a un espacio mayor que el espacio realmente disponible en memoria principal";
 choices[13][1] = "El mapa de direcciones l&oacute;gicas o virtual es igual al mapa de direcciones f&iacute;sicas o reales";
 choices[13][2] = "El espacio virtual emplea como soporte la memoria principal";
 choices[13][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[13] = choices[13][0];
 units[13] = "52";
 comments[13] = "Id Pregunta: 1139. ";


//  Id pregunta: 1190 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  Indique cu&aacute;l de las siguientes es una caracter&iacute;stica exclusiva del software libre frente a otros tipos de licencias de software:";
 choices[14]= new Array();
 choices[14][0] = "Fuentes abiertas";
 choices[14][1] = "Gratuidad";
 choices[14][2] = "Libre copia y distribuci&oacute;n del c&oacute;digo fuente";
 choices[14][3] = "Todas las caracteristicas anteriores son exclusivas del software libre";
 answers[14] = choices[14][2];
 units[14] = "61";
 comments[14] = "Id Pregunta: 1190. ";


//  Id pregunta: 1289 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  MPI:";
 choices[15]= new Array();
 choices[15][0] = "Es una librer&iacute;a para programaci&oacute;n distribuida por paso de mensajes";
 choices[15][1] = "Multi Peer Interface es una utilidad P2P que permite utilizar los recursos de los PC de una LAN como si de un servidor centralizado se tratara";
 choices[15][2] = "Permite el intercambio de archivos entre PCs de una misma red";
 choices[15][3] = "Las respuestas 'a' y 'c' son correctas";
 answers[15] = choices[15][0];
 units[15] = "50";
 comments[15] = "Id Pregunta: 1289. JCED - Preparatic XVII";


//  Id pregunta: 1296 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  Para borrar una tabla en SQL utilizar&eacute;:";
 choices[16]= new Array();
 choices[16][0] = "DELETE + Nombre de la tabla";
 choices[16][1] = "DROP + Nombre de la tabla";
 choices[16][2] = "REVOKE + Nombre de la tabla";
 choices[16][3] = "B y C son ciertas";
 answers[16] = choices[16][1];
 units[16] = "58";
 comments[16] = "Id Pregunta: 1296. ";


//  Id pregunta: 1348 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Se&ntilde;ale la respuesta correcta. La diferencia entre un procesador con tecnolog&iacute;a RISC y tecnolog&iacute;a CISC es:";
 choices[17]= new Array();
 choices[17][0] = "El RISC tiene m&aacute;s registros";
 choices[17][1] = "El CISC tiene un juego de instrucciones m&aacute;s amplio";
 choices[17][2] = "El RISC es m&aacute;s r&aacute;pido en la ejecuci&oacute;n de instrucciones";
 choices[17][3] = "Todas las respuestas anteriores son ciertas";
 answers[17] = choices[17][3];
 units[17] = "46";
 comments[17] = "Id Pregunta: 1348. ";


//  Id pregunta: 1394 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Un sistema de gesti&oacute;n de base de datos (SGBD) es relacional si, entre otras cosas:";
 choices[18]= new Array();
 choices[18][0] = "Soporta un lenguaje de manipulaci&oacute;n de datos basado en el c&aacute;lculo referencial";
 choices[18][1] = "Soporta un lenguaje de definici&oacute;n de datos de tipo referencial";
 choices[18][2] = "Es capaz de establecer relaciones con otros SGBD";
 choices[18][3] = "Toda la informaci&oacute;n se representa a nivel l&oacute;gico en forma de tablas";
 answers[18] = choices[18][3];
 units[18] = "58";
 comments[18] = "Id Pregunta: 1394. NULL";


//  Id pregunta: 1437 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  &iquest;Qu&eacute; es MIDI?:";
 choices[19]= new Array();
 choices[19][0] = "Un formato de codificaci&oacute;n de im&aacute;genes digitales";
 choices[19][1] = "Conjunto de especificaciones y tecnolog&iacute;as que proponen normas para el ensamblaje de la arquitectura de ordenadores";
 choices[19][2] = "Un protocolo para codificar instrucciones para que un sintetizador genere notas musicales";
 choices[19][3] = "Servicio de transferencia autom&aacute;tica de textos entre memorias de dos terminales";
 answers[19] = choices[19][2];
 units[19] = "47";
 comments[19] = "Id Pregunta: 1437. ";


//  Id pregunta: 1526 AÃ±o de creación de pregunta: 2003-01-01
 questions[20]= "21)  Dentro del &aacute;lgebra relacional, &iquest;qu&eacute; definici&oacute;n corresponde con la Uni&oacute;n Natural?";
 choices[20]= new Array();
 choices[20][0] = "Si X es un subconjunto de atributos de la relaci&oacute;n R, entonces la uni&oacute;n natural de R es la relaci&oacute;n formada por las columnas de R correspondientes a los atributos de X.";
 choices[20][1] = "La uni&oacute;n natural de dos relaciones R y S es el conjunto formado por todas las tuplas de R que no est&aacute;n en S. Este operador s&oacute;lo se puede aplicar a relaciones del mismo grado y con los mismos atributos.";
 choices[20][2] = "La uni&oacute;n natural de dos relaciones R y S, de grados m y n respectivamente es el conjunto formado por todas las posibles tuplas (mxn tuplas) de m+n elementos en las que los m primeros son de R y los n restantes pertenecen a S.";
 choices[20][3] = "Ninguna de las definiciones anteriores corresponde con la uni&oacute;n natural.";
 answers[20] = choices[20][3];
 units[20] = "58";
 comments[20] = "Id Pregunta: 1526. ";


//  Id pregunta: 1542 AÃ±o de creación de pregunta: 2003-01-01
 questions[21]= "22)  &iquest; Qu&eacute; es SAS ?";
 choices[21]= new Array();
 choices[21][0] = "Serial Attached SCSI";
 choices[21][1] = "Serial ATA";
 choices[21][2] = "Small Computer Systems Interface";
 choices[21][3] = "Un paquete estad&iacute;stico";
 answers[21] = choices[21][0];
 units[21] = "47";
 comments[21] = "Id Pregunta: 1542. ";


//  Id pregunta: 1547 AÃ±o de creación de pregunta: 2003-01-01
 questions[22]= "23)  &iquest;C&oacute;mo se crea un &iacute;ndice para una tabla?";
 choices[22]= new Array();
 choices[22][0] = "Se crea siempre en la misma sentencia en que se crea la tabla.";
 choices[22][1] = "Se crea siempre autom&aacute;ticamente sobre la clave primaria al crear la tabla.";
 choices[22][2] = "Con CREATE INDEX nombre-&iacute;ndice ON nombre-tabla (atrib [,atrib]*).";
 choices[22][3] = "Con INSERT INDEX nombre-&iacute;ndice ON nombre-tabla (atrib [,atrib]*).";
 answers[22] = choices[22][2];
 units[22] = "58";
 comments[22] = "Id Pregunta: 1547. NULL";


//  Id pregunta: 1572 AÃ±o de creación de pregunta: 2003-01-01
 questions[23]= "24)  &iquest;En cu&aacute;l de los siguientes modelos de arquitectura cliente-servidor, el cliente asume mayor carga de proceso?:";
 choices[23]= new Array();
 choices[23][0] = "Base de datos remota.";
 choices[23][1] = "Proceso distribuido.";
 choices[23][2] = "Presentaci&oacute;n remota.";
 choices[23][3] = "Presentaci&oacute;n distribuida.";
 answers[23] = choices[23][0];
 units[23] = "50";
 comments[23] = "Id Pregunta: 1572. Junta Andaluc&iacute;a";


//  Id pregunta: 1587 AÃ±o de creación de pregunta: 2003-01-01
 questions[24]= "25)  En el modelo de datos relacional, al conjunto no vac&iacute;o de atributos de una relaci&oacute;n cuyos valores sirven para referenciar la clave primaria de otra relaci&oacute;n del mismo dominio, se denomina:";
 choices[24]= new Array();
 choices[24][0] = "Superclave.";
 choices[24][1] = "Clave principal.";
 choices[24][2] = "Tupla m&uacute;ltiple.";
 choices[24][3] = "Clave ajena.";
 answers[24] = choices[24][3];
 units[24] = "58";
 comments[24] = "Id Pregunta: 1587. Junta Andaluc&iacute;a";


//  Id pregunta: 1644 AÃ±o de creación de pregunta: 2003-01-01
 questions[25]= "26)  Indicar la afirmaci&oacute;n falsa en torno a las matrices de discos RAID:";
 choices[25]= new Array();
 choices[25][0] = "Cuando se haya reemplazado el disco en el que se ha producido el error, los datos podr&aacute;n regenerarse usando la informaci&oacute;n redundante.";
 choices[25][1] = "Los archivos de datos individuales se escriben siempre en m&aacute;s de un disco de forma que, dependiendo del nivel de RAID utilizado, se puedan mejorar el rendimiento y la fiabilidad.";
 choices[25][2] = "En una soluci&oacute;n de hardware, la interfaz de controlador controla la creaci&oacute;n y regeneraci&oacute;n de la informaci&oacute;n redundante.";
 choices[25][3] = "Las estrategias para implementar una matriz redundante de discos independientes (RAID, Redundant Array oIndependent Disks) pueden utilizar soluciones de hardware o de software.";
 answers[25] = choices[25][1];
 units[25] = "48";
 comments[25] = "Id Pregunta: 1644. ";


//  Id pregunta: 1659 AÃ±o de creación de pregunta: 2004-01-01
 questions[26]= "27)  En las bases de datos, &iquest;qu&eacute; tipo de redundancia debe tolerarse?";
 choices[26]= new Array();
 choices[26][0] = "L&oacute;gica";
 choices[26][1] = "M&uacute;ltiple";
 choices[26][2] = "Controlada";
 choices[26][3] = "Ninguna";
 answers[26] = choices[26][2];
 units[26] = "58";
 comments[26] = "Id Pregunta: 1659. MAP-B 2003";


//  Id pregunta: 1671 AÃ±o de creación de pregunta: 2004-01-01
 questions[27]= "28)  &iquest;Para que se usa el comando &quot;chown&quot; en linux?";
 choices[27]= new Array();
 choices[27][0] = "Para cambiar los permisos sobre un recurso";
 choices[27][1] = "Para cambiar el propietario de un recurso";
 choices[27][2] = "Para cambiar el grupo al que pertenece un recurso";
 choices[27][3] = "Para cambiar la clave de acceso del usuario actual";
 answers[27] = choices[27][1];
 units[27] = "54";
 comments[27] = "Id Pregunta: 1671. NULL";


//  Id pregunta: 1714 AÃ±o de creación de pregunta: 2006-01-01
 questions[28]= "29)  Se&ntilde;ale la opci&oacute;n incorrecta:";
 choices[28]= new Array();
 choices[28][0] = "El procesamiento cooperativo es aquel en que 2 o m&aacute;s elementos l&oacute;gicos diferentes interact&uacute;an entre s&iacute; en la realizaci&oacute;n de una tarea com&uacute;n";
 choices[28][1] = "El procesamiento centralizado utiliza el host para ejecutar el 100% de la l&oacute;gica asociada a un programa";
 choices[28][2] = "Los procesamientos centralizados dan mayor flexibilidad y escalabilidad";
 choices[28][3] = "Los procesamientos cooperativos reducen los costes de inversi&oacute;n en equipamiento";
 answers[28] = choices[28][2];
 units[28] = "50";
 comments[28] = "Id Pregunta: 1714. ";


//  Id pregunta: 1766 AÃ±o de creación de pregunta: 2006-01-01
 questions[29]= "30)  El lenguaje Java, para las variables de clase, utiliza el modificador";
 choices[29]= new Array();
 choices[29][0] = "extern";
 choices[29][1] = "private";
 choices[29][2] = "final";
 choices[29][3] = "static";
 answers[29] = choices[29][3];
 units[29] = "60";
 comments[29] = "Id Pregunta: 1766. JCED - Preparatic XVII. Variables de clase es otra manera de llamar a las var est&aacute;ticas";


//  Id pregunta: 1795 AÃ±o de creación de pregunta: 2006-01-01
 questions[30]= "31)  Se&ntilde;alar cual no es una caracter&iacute;stica de las restricciones";
 choices[30]= new Array();
 choices[30][0] = "Permite sincronizar el comportamiento de los objetos buscando equilibrio entre sus atributos";
 choices[30][1] = "Permiten expresar m&uacute;ltiples relaciones causa-efecto mediante ecuaciones";
 choices[30][2] = "Pueden ser cualitativas (dominios discretos) o num&eacute;ricas.";
 choices[30][3] = "Representan sentencias condicionales donde a partir de antecedentes pueden obtenerse los consecuentes";
 answers[30] = choices[30][3];
 units[30] = "64";
 comments[30] = "Id Pregunta: 1795. ";


//  Id pregunta: 1838 AÃ±o de creación de pregunta: 2006-01-01
 questions[31]= "32)  Indicar la respuesta falsa respecto al protocolo SET (Secure Electronic Transaction):";
 choices[31]= new Array();
 choices[31][0] = "Fue desarrollado por Visa y MasterCard";
 choices[31][1] = "Hace uso de criptograf&iacute;a mediante DES y RSA";
 choices[31][2] = "Garantiza la autenticaci&oacute;n e integridad de la comunicaci&oacute;n";
 choices[31][3] = "Fue desarrollado tras el fracso de la tecnolog&iacute;a 3D-Secure de Visa";
 answers[31] = choices[31][3];
 units[31] = "70";
 comments[31] = "Id Pregunta: 1838. NULL";


//  Id pregunta: 4310 AÃ±o de creación de pregunta: 2007-01-01
 questions[32]= "33)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre la arquitectura .Net no es correcta?:";
 choices[32]= new Array();
 choices[32][0] = "Las aplicaciones .Net s&oacute;lo pueden ejecutarse en los sistemas operativos Windows.";
 choices[32][1] = ".NET soporta la creaci&oacute;n de Servicios Web XML independientes de la plataforma, a trav&eacute;s de SOAP.";
 choices[32][2] = "El proceso de compilaci&oacute;n en .Net produce un fichero ejecutable al que se denomina portable executable (PE).";
 choices[32][3] = "Al c&oacute;digo escrito para ejecutarse en la plataforma .NET se le llama c&oacute;digo gestionado.";
 answers[32] = choices[32][0];
 units[32] = "59";
 comments[32] = "Id Pregunta: 4310. JCED - Preparatic XVII";


//  Id pregunta: 4363 AÃ±o de creación de pregunta: 2007-01-01
 questions[33]= "34)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n al interfaz hombre-m&aacute;quina en sistemas Unix y Linux:";
 choices[33]= new Array();
 choices[33][0] = "GNOME (GNU Network Object Modelo Environment) est&aacute; totalmente orientado a objetos y al uso de COM+.";
 choices[33][1] = "La implementaci&oacute;n free Xfree86 del entorno de escritorio CDE (Common Desktop Environment) se incluye en la distribuci&oacute;n MacX Server.";
 choices[33][2] = "En X-Windows el modelo es cliente/servidor, basado en un protocolo de red: Xserver, Xclient.";
 choices[33][3] = "KDE (K Desktop Environment) se implementa &uacute;nicamente en sistemas Unix.";
 answers[33] = choices[33][2];
 units[33] = "54";
 comments[33] = "Id Pregunta: 4363. ";


//  Id pregunta: 4458 AÃ±o de creación de pregunta: 2007-01-01
 questions[34]= "35)  La cl&aacute;usula select en SQL se corresponde a:";
 choices[34]= new Array();
 choices[34][0] = "La operaci&oacute;n de proyecci&oacute;n en el &aacute;lgebra relacional.";
 choices[34][1] = "La operaci&oacute;n de uni&oacute;n en el &aacute;lgebra relacional.";
 choices[34][2] = "La operaci&oacute;n de evaluaci&oacute;n en el &aacute;lgebra relacional.";
 choices[34][3] = "La operaci&oacute;n de agregaci&oacute;n en el &aacute;lgebra relacional.";
 answers[34] = choices[34][0];
 units[34] = "58";
 comments[34] = "Id Pregunta: 4458. ";


//  Id pregunta: 4513 AÃ±o de creación de pregunta: 2007-01-01
 questions[35]= "36)  En un entorno Microsoft Windows 2003 Nativo:";
 choices[35]= new Array();
 choices[35][0] = "Los cambios del directorio del dominio se realizan en los PDC (controladores principales de dominio) y se replican en los BDC (controladores de dominio de respaldo).";
 choices[35][1] = "Los cambios del directorio del dominio se realizan en los BDC (controladores de dominio de respaldo) y se replican en los PDC (controladores principales de dominio).";
 choices[35][2] = "Los cambios del directorio del dominio se realizan en los DC (controladores de dominio).";
 choices[35][3] = "Los cambios del directorio del dominio se realizan indistintamente en los PDC (controladores principales de dominio), BDC (controladores de dominio de respaldo) o DC (controladores de dominio) y luego se replican autom&aacute;ticamente entre ellos.";
 answers[35] = choices[35][2];
 units[35] = "56";
 comments[35] = "Id Pregunta: 4513. ";


//  Id pregunta: 4514 AÃ±o de creación de pregunta: 2007-01-01
 questions[36]= "37)  En el modelo relacional se denomina dominio de un atributo a:";
 choices[36]= new Array();
 choices[36][0] = "El conjunto de valores permitidos para ese atributo.";
 choices[36][1] = "El peso del atributo, es decir si forma parte de una clave candidata o no.";
 choices[36][2] = "La clasificaci&oacute;n de los atributos de una relaci&oacute;n entre dominantes y dominados.";
 choices[36][3] = "El orden de los valores de ese atributo para todas las tuplas de la relaci&oacute;n donde se encuentra definido.";
 answers[36] = choices[36][0];
 units[36] = "58";
 comments[36] = "Id Pregunta: 4514. ";


//  Id pregunta: 4533 AÃ±o de creación de pregunta: 2007-01-01
 questions[37]= "38)  En java, &iquest;como se hace referencia al objeto actual sobre el que ha sido Ilamado el m&eacute;todo que se esta ejecutando?";
 choices[37]= new Array();
 choices[37][0] = "Con Ia referencia this.";
 choices[37][1] = "Con la referencia null.";
 choices[37][2] = "No es posible.";
 choices[37][3] = "Invocando el m&eacute;todo get.";
 answers[37] = choices[37][0];
 units[37] = "60";
 comments[37] = "Id Pregunta: 4533. NULL";


//  Id pregunta: 4588 AÃ±o de creación de pregunta: 2007-01-01
 questions[38]= "39)  &iquest;Qu&eacute; extensi&oacute;n tienen en Forms 4.5 los m&oacute;dulos Men&uacute; en binario?";
 choices[38]= new Array();
 choices[38][0] = ".mmb";
 choices[38][1] = ".mxb";
 choices[38][2] = ".bmx";
 choices[38][3] = ".bll";
 answers[38] = choices[38][0];
 units[38] = "";
 comments[38] = "Id Pregunta: 4588. ";


//  Id pregunta: 4625 AÃ±o de creación de pregunta: 2007-01-01
 questions[39]= "40)  Cu&aacute;l de las siguientes caracter&iacute;sticas del protocolo SOAP es falsa";
 choices[39]= new Array();
 choices[39][0] = "Atraviesa firewalls y routers";
 choices[39][1] = "Depende del sistema operativo y del procesador";
 choices[39][2] = "Es un est&aacute;ndar de la industria";
 choices[39][3] = "Utiliza los mismos est&aacute;ndares de la Web";
 answers[39] = choices[39][1];
 units[39] = "51";
 comments[39] = "Id Pregunta: 4625. NULL";


//  Id pregunta: 5090 AÃ±o de creación de pregunta: 2001-01-01
 questions[40]= "41)  &iquest;Cu&aacute;l de los siguientes no es un m&eacute;todo de actualizaci&oacute;n de CRLs?";
 choices[40]= new Array();
 choices[40][0] = "muestreo de CRLs";
 choices[40][1] = "env&iacute;o de CRL";
 choices[40][2] = "anuncio de CRL";
 choices[40][3] = "verificaci&oacute;n en l&iacute;nea";
 answers[40] = choices[40][1];
 units[40] = "73";
 comments[40] = "Id Pregunta: 5090. ";


//  Id pregunta: 5092 AÃ±o de creación de pregunta: 2003-01-01
 questions[41]= "42)  Las dimensiones del DNI electr&oacute;nico son:";
 choices[41]= new Array();
 choices[41][0] = "85,60 mm de ancho X 53,98 mm de alto";
 choices[41][1] = "8,6 mm de ancho X 5,9 mm de alto";
 choices[41][2] = "60 mm de ancho X 58 mm de alto";
 choices[41][3] = "85,60 mm de alto X 53,98 mm de ancho";
 answers[41] = choices[41][0];
 units[41] = "74";
 comments[41] = "Id Pregunta: 5092. NULL";


//  Id pregunta: 5499 AÃ±o de creación de pregunta: 2003-01-01
 questions[42]= "43)  Indica cu&aacute;l no es una ventaja de la tecnolog&iacute;a JSF:";
 choices[42]= new Array();
 choices[42][0] = "Ofrece un alto nivel de abstracci&oacute;n en el dise&ntilde;o de la interfaz";
 choices[42][1] = "JSF comparada con otras tecnolog&iacute;as MVC (Spring MVC, Struts, WebWork, Tapestry,&hellip;) est&aacute; mas orientada a componetes y eventos  ";
 choices[42][2] = "Para el desarrollo de aplicaciones se basa en la implementaci&oacute;n de complejas clases Java";
 choices[42][3] = "Permite la creaci&oacute;n de nuevos componentes graficos o widgets";
 answers[42] = choices[42][2];
 units[42] = "116";
 comments[42] = "Id Pregunta: 5499. ";


//  Id pregunta: 5517 AÃ±o de creación de pregunta: 2003-01-01
 questions[43]= "44)  Entre los sistemas operativos para dispositivos m&oacute;viles se encuentra:";
 choices[43]= new Array();
 choices[43][0] = "Symbian";
 choices[43][1] = "Hurd";
 choices[43][2] = "Mach";
 choices[43][3] = "BSD";
 answers[43] = choices[43][0];
 units[43] = "52";
 comments[43] = "Id Pregunta: 5517. ";


//  Id pregunta: 5600 AÃ±o de creación de pregunta: 2003-01-01
 questions[44]= "45)  Se&ntilde;ale la respuesta falsa sobre las redes neuronales";
 choices[44]= new Array();
 choices[44][0] = "Las redes de neuronas son un modelo de representaci&oacute;n del conocimiento de forma simb&oacute;lica";
 choices[44][1] = "Las neuronas se unen entre s&iacute; para formar una red. La fuerza de la uni&oacute;n se valora mediante un peso";
 choices[44][2] = "Para un funcionamiento correcto de la red es necesaria una fase previa de entrenamiento";
 choices[44][3] = "Un algoritmo muy utilizado para entrenar las redes es la retropropagaci&oacute;n";
 answers[44] = choices[44][0];
 units[44] = "64";
 comments[44] = "Id Pregunta: 5600. ";


//  Id pregunta: 5675 AÃ±o de creación de pregunta: 2003-01-01
 questions[45]= "46)  Indique la respuesta incorrecta respecto a GIS modelo de datos vectorial.";
 choices[45]= new Array();
 choices[45][0] = "La caracter&iacute;stica mas importante del modelo vectorial frente al r&aacute;ster es la capacidad de gestion topol&oacute;gica de sus elementos.";
 choices[45][1] = "La mayor riqueza y capacidad de representaci&oacute;n de la realidad espacial, se traduce en una mayor complejidad de este modelo vectorial en comparaci&oacute;n con el sencillo modelo r&aacute;ster.";
 choices[45][2] = "En el modelo de datos vectorial podemos hablar por tanto de una georreferenciaci&oacute;n continua, sin que la resoluci&oacute;n suponga una limitaci&oacute;n como suced&iacute;a en el modelo r&aacute;ster.";
 choices[45][3] = "Ninguna de las anteriores.";
 answers[45] = choices[45][3];
 units[45] = "67";
 comments[45] = "Id Pregunta: 5675. NULL";


//  Id pregunta: 5689 AÃ±o de creación de pregunta: 2003-01-01
 questions[46]= "47)  &iquest;Es capaz el DNI electr&oacute;nico de identificar biom&eacute;tricamente al ciudadano?";
 choices[46]= new Array();
 choices[46][0] = "S&iacute;, a trav&eacute;s del iris ocular";
 choices[46][1] = "S&iacute;, a trav&eacute;s de la firma manuscrita";
 choices[46][2] = "No, no dispone de esa capacidad";
 choices[46][3] = "S&iacute;, a trav&eacute;s de la huella dactilar";
 answers[46] = choices[46][3];
 units[46] = "74";
 comments[46] = "Id Pregunta: 5689. NULL";


//  Id pregunta: 5700 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  Las siglas UDDI corresponden a:";
 choices[47]= new Array();
 choices[47][0] = "Universal Description and Discovery Interface";
 choices[47][1] = "Universal Description, Discovery and Integration";
 choices[47][2] = "Universal Definition, Discovery and Integration";
 choices[47][3] = "Universal Definition and Discovery Interface";
 answers[47] = choices[47][1];
 units[47] = "51";
 comments[47] = "Id Pregunta: 5700. NULL";


//  Id pregunta: 5717 AÃ±o de creación de pregunta: 2009-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l de estos sistemas de archivos no est&aacute; soportado de forma nativa por el kernel de Linux?";
 choices[48]= new Array();
 choices[48][0] = "ZFS";
 choices[48][1] = "XFS";
 choices[48][2] = "ext4";
 choices[48][3] = "ReiserFS";
 answers[48] = choices[48][0];
 units[48] = "54";
 comments[48] = "Id Pregunta: 5717. ZFS es un sistema de archivos desarrollado por Sun para Solaris";


//  Id pregunta: 5740 AÃ±o de creación de pregunta: 2009-01-01
 questions[49]= "50)  &iquest;Puede haber firma electr&oacute;nica reconocida que no sea avanzada?";
 choices[49]= new Array();
 choices[49][0] = "S&iacute;, si el dispositivo de creaci&oacute;n de firma es seguro";
 choices[49][1] = "S&iacute;, si se usa un certificado reconocido";
 choices[49][2] = "No, en ning&uacute;n caso";
 choices[49][3] = "S&iacute;, si lo aceptan ambas partes";
 answers[49] = choices[49][2];
 units[49] = "30";
 comments[49] = "Id Pregunta: 5740. Ley 59/2003, art&iacute;culo 3 y resto de articulado";


//  Id pregunta: 5887 AÃ±o de creación de pregunta: 2009-01-01
 questions[50]= "51)  Los cifrados de clave p&uacute;blica:";
 choices[50]= new Array();
 choices[50][0] = "De Diffie-Hellman basan su fortaleza en la dificultad de resolver el problema de los logaritmos discretos";
 choices[50][1] = "A igualdad de longitud de clave los basados en curvas el&iacute;pticas son tan robustos como los basados en la aritm&eacute;tica modular";
 choices[50][2] = "La llegada de los ordenadores cu&aacute;nticos no los har&aacute; m&aacute;s vulnerables a los m&eacute;todos criptoanal&iacute;ticos empleados ahora";
 choices[50][3] = "Basados en el RSA requieren m&aacute;s tiempo para descifrar que para generar sus pares de claves";
 answers[50] = choices[50][0];
 units[50] = "72";
 comments[50] = "Id Pregunta: 5887. MAP 2008 A1";


//  Id pregunta: 5985 AÃ±o de creación de pregunta: 2010-01-01
 questions[51]= "52)  La arquitectura ANSI/SPARC para sistemas de bases de datos se divide en los siguientes niveles:";
 choices[51]= new Array();
 choices[51][0] = "L&oacute;gico, de usuario y f&iacute;sico.";
 choices[51][1] = "Externo, intermedio e interno.";
 choices[51][2] = "Externo, conceptual e interno.";
 choices[51][3] = "De usuario, de administrador y f&iacute;sico.";
 answers[51] = choices[51][2];
 units[51] = "57";
 comments[51] = "Id Pregunta: 5985. TIC A 2009";


//  Id pregunta: 6339 AÃ±o de creación de pregunta: 2010-01-01
 questions[52]= "53)  &iquest;Cu&aacute;l de los siguientes nombres no est&aacute;n relaiconados con una soluci&oacute;n ERP?";
 choices[52]= new Array();
 choices[52][0] = "Oracle Financials";
 choices[52][1] = "SAP";
 choices[52][2] = "IBM Websphere";
 choices[52][3] = "META4";
 answers[52] = choices[52][2];
 units[52] = "65";
 comments[52] = "Id Pregunta: 6339. ";


//  Id pregunta: 6555 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)  PKCS#10 define ";
 choices[53]= new Array();
 choices[53][0] = "Especifica un formato portable para almacenar o transportar las claves privadas de un usuario";
 choices[53][1] = "Sintaxis para las peticiones de certificados";
 choices[53][2] = "El formato del sobre digital";
 choices[53][3] = "La especificaci&oacute;n de un interfaz de acceso a dispositivos que almacenan informaci&oacute;n";
 answers[53] = choices[53][1];
 units[53] = "74";
 comments[53] = "Id Pregunta: 6555. NULL";


//  Id pregunta: 6570 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  El Directorio X.500 ";
 choices[54]= new Array();
 choices[54][0] = "Es una base de datos centralizada y accesible desde cualquier punto";
 choices[54][1] = "Es una base de datos distribuida y accesible desde cualquier punto";
 choices[54][2] = "Est&aacute; dise&ntilde;ado para guardar nombres, direcciones,  pero no la informaci&oacute;n necesaria para localizar y establecer comunicaci&oacute;n con una persona o recurso";
 choices[54][3] = "B y C son ciertas";
 answers[54] = choices[54][1];
 units[54] = "73";
 comments[54] = "Id Pregunta: 6570. NULL";


//  Id pregunta: 6587 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  El RD 1720/2007 s&oacute;lo desarrolla las medidas de seguridad en el tratamiento de datos de car&aacute;cter personal para los ficheros";
 choices[55]= new Array();
 choices[55][0] = "automatizados";
 choices[55][1] = "no automatizados";
 choices[55][2] = "A y B son correctas";
 choices[55][3] = "A y B son incorrectas";
 answers[55] = choices[55][2];
 units[55] = "29";
 comments[55] = "Id Pregunta: 6587. NULL";


//  Id pregunta: 6589 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  Para ficheros a los que aplican las medidas de seguridad de nivel medio debe llevarse a cabo una auditor&iacute;a, al menos";
 choices[56]= new Array();
 choices[56][0] = "Debe ser externa";
 choices[56][1] = "Bianual";
 choices[56][2] = "Bienal";
 choices[56][3] = "Todas las respuestas anteriores son incorrectas";
 answers[56] = choices[56][2];
 units[56] = "29";
 comments[56] = "Id Pregunta: 6589. NULL";


//  Id pregunta: 7151 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  En la guerra de formatos sucesores del DVD, se ha impuesto el Blue-Ray, &iquest;cu&aacute;l es su capacidad de almacenamiento?";
 choices[57]= new Array();
 choices[57][0] = "40 GB para discos de una capa y 85 GB para discos de dos capas";
 choices[57][1] = "20 GB para discos de una capa y 100 GB para discos multicapas";
 choices[57][2] = "25 GB para discos de una capa y 50 GB para discos de dos capas";
 choices[57][3] = "30 GB para discos de una capa y 60 GB para discos de dos capas";
 answers[57] = choices[57][2];
 units[57] = "48";
 comments[57] = "Id Pregunta: 7151. Examen TIC B 2009";


//  Id pregunta: 7167 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  Se&ntilde;ale cu&aacute;l de las siguientes licencias es la &uacute;nica que puede considerarse licencia de software libre compatible con la GNU GPL:";
 choices[58]= new Array();
 choices[58][0] = "Sun Community Source License";
 choices[58][1] = "Apache License. Version 2.0";
 choices[58][2] = "Microsoft Public License (MS-OL)";
 choices[58][3] = "GNU Lesser General Public License (LGPL)";
 answers[58] = choices[58][3];
 units[58] = "61";
 comments[58] = "Id Pregunta: 7167. Examen TIC B 2009";


//  Id pregunta: 7339 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  Uno de los objetivos de la seguridad es evitar que alteren los datos durante una transmisi&oacute;n, esto es conocido como:";
 choices[59]= new Array();
 choices[59][0] = "Integridad";
 choices[59][1] = "Confidencialidad";
 choices[59][2] = "No Repudio";
 choices[59][3] = "Disponibilidad";
 answers[59] = choices[59][0];
 units[59] = "72";
 comments[59] = "Id Pregunta: 7339. NULL";


//  Id pregunta: 8170 AÃ±o de creación de pregunta: 2011-01-01
 questions[60]= "61)  Entre los lenguajes de especificaci&oacute;n de workflows, NO se encuentra:";
 choices[60]= new Array();
 choices[60][0] = "YAWL.";
 choices[60][1] = "ETL.";
 choices[60][2] = "XPDL.";
 choices[60][3] = "BPEL.";
 answers[60] = choices[60][1];
 units[60] = "71";
 comments[60] = "Id Pregunta: 8170. Examen TIC A1 2010";


//  Id pregunta: 8201 AÃ±o de creación de pregunta: 2011-01-01
 questions[61]= "62)  Indique la afirmaci&oacute;n INCORRECTA acerca de la BCL (Base Class Library) del framework .Net: ";
 choices[61]= new Array();
 choices[61][0] = "Contiene clases para la manipulaci&oacute;n de archivos gr&aacute;ficos. ";
 choices[61][1] = "Se organiza en clases de acceso a datos, de l&oacute;gica de negocio y de presentaci&oacute;n. ";
 choices[61][2] = "No dispone de clases para la gesti&oacute;n de la seguridad. ";
 choices[61][3] = "No depende del lenguaje de programaci&oacute;n utilizado por el desarrollador. ";
 answers[61] = choices[61][2];
 units[61] = "59";
 comments[61] = "Id Pregunta: 8201. Examen TIC A1 2010";


//  Id pregunta: 8270 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  La gesti&oacute;n de memoria virtual en Unix:";
 choices[62]= new Array();
 choices[62][0] = "Mantiene siempre en memoria RAM los procesos del kernel.";
 choices[62][1] = "Utiliza siempre p&aacute;ginas de memoria de tama&ntilde;o variable.";
 choices[62][2] = "Asigna a los procesos, espacios de direcciones compartidos.";
 choices[62][3] = "No contempla la compartici&oacute;n de c&oacute;digo entre procesos.";
 answers[62] = choices[62][0];
 units[62] = "52,53";
 comments[62] = "Id Pregunta: 8270. Examen TIC A1 2010";


//  Id pregunta: 8290 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  Respecto al protocolo ligero de acceso a directorios (LDAPv3):";
 choices[63]= new Array();
 choices[63][0] = "No admite TCP/IP.";
 choices[63][1] = "No es un protocolo abierto.";
 choices[63][2] = "No requiere X.500.";
 choices[63][3] = "Ninguna de las anteriores es correcta.";
 answers[63] = choices[63][2];
 units[63] = "74";
 comments[63] = "Id Pregunta: 8290. Examen TIC A2 2010";


//  Id pregunta: 8471 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  &iquest;Cu&aacute;l es la velocidad del est&aacute;ndar USB 3.0?:";
 choices[64]= new Array();
 choices[64][0] = "600 MB/s";
 choices[64][1] = "480 MB/s";
 choices[64][2] = "4800 MB/s";
 choices[64][3] = "1092 MB/s";
 answers[64] = choices[64][0];
 units[64] = "47";
 comments[64] = "Id Pregunta: 8471. Analista Ayto. Madrid 2010";


//  Id pregunta: 8545 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  La especificaci&oacute;n PKCS#3 de RSA se refiere a:";
 choices[65]= new Array();
 choices[65][0] = "El est&aacute;ndar criptogr&aacute;fico RSA";
 choices[65][1] = "La sintaxis de la informaci&oacute;n de clave privada.";
 choices[65][2] = "El intercambio de claves Diffie-Hellman.";
 choices[65][3] = "La sintaxis del mensaje criptogr&aacute;fico";
 answers[65] = choices[65][2];
 units[65] = "72";
 comments[65] = "Id Pregunta: 8545. Examen TIC A2 2010 interna";


//  Id pregunta: 8621 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas NO es propia del sistema de almacenamiento RAID 5?";
 choices[66]= new Array();
 choices[66][0] = "La paridad est&aacute; en un disco dedicado";
 choices[66][1] = "La divisi&oacute;n se produce a nivel de bloques";
 choices[66][2] = "Tiene un bajo coste de redundancia";
 choices[66][3] = "Se necesitan al menos 3 discos";
 answers[66] = choices[66][0];
 units[66] = "48";
 comments[66] = "Id Pregunta: 8621. Examen TIC A2 2010 interna";


//  Id pregunta: 8736 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  La tarjeta DNIe tiene capacidad para la realizaci&oacute;n de firmas electr&oacute;nicas en:";
 choices[67]= new Array();
 choices[67][0] = "Modo raw y modo relleno PKCS#11";
 choices[67][1] = "&Uacute;nicamente en modo raw.";
 choices[67][2] = "&Uacute;nicamente en modo relleno PKCS#11";
 choices[67][3] = "Ninguna de las anteriores.";
 answers[67] = choices[67][0];
 units[67] = "74";
 comments[67] = "Id Pregunta: 8736. Examen TIC A2 2010 interna";


//  Id pregunta: 8822 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  Al modificar un programa protegido por licencia GPL, el resultado deberemos protegerlo con una licencia:";
 choices[68]= new Array();
 choices[68][0] = "GPL";
 choices[68][1] = "BSD";
 choices[68][2] = "EULA";
 choices[68][3] = "GNU";
 answers[68] = choices[68][0];
 units[68] = "61";
 comments[68] = "Id Pregunta: 8822. Examen UPM A2 2011";


//  Id pregunta: 8824 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)   Seg&uacute;n el Real Decreto legislativo 1/1996, de 12 de abril, por el que se aprueba el texto refundido de la Ley de Propiedad Intelectual, &quot;toda secuencia de instrucciones o indicaciones destinadas a ser utilizadas, directa o indirectamente, en un sistema inform&aacute;tico para realizar una funci&oacute;n o una tarea o para obtener un resultado determinado, cualquiera que fuere su forma de expresi&oacute;n o fijaci&oacute;n&quot; es:";
 choices[69]= new Array();
 choices[69][0] = " Un algoritmo";
 choices[69][1] = "Un m&eacute;todo";
 choices[69][2] = "Un programa de ordenador ";
 choices[69][3] = "Un procedimiento";
 answers[69] = choices[69][2];
 units[69] = "36,37";
 comments[69] = "Id Pregunta: 8824. Examen UC3M 2010";


//  Id pregunta: 8910 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  Los sistemas de cifrado sim&eacute;trico se basan en:";
 choices[70]= new Array();
 choices[70][0] = "Cifrar con la clave privada y descifrar con la clave p&uacute;blica, para garantizar la autenticidad del emisor.";
 choices[70][1] = "Cifrar con una sola clave, y no descifrar en el destino, para salvaguardar la integridad.";
 choices[70][2] = "Cifrar y descifrar con la misma clave.";
 choices[70][3] = "Cifrar con la clave p&uacute;blica y descifrar con la privada, para garantizar la confidencialidad";
 answers[70] = choices[70][2];
 units[70] = "72";
 comments[70] = "Id Pregunta: 8910. Operador Ayto. Madrid 2010";


//  Id pregunta: 9144 AÃ±o de creación de pregunta: 2013-01-01
 questions[71]= "72)  &iquest;C&oacute;mo es el conector SAS?";
 choices[71]= new Array();
 choices[71][0] = "El mismo que en la interfaz SATA y permite utilizar estos discos duros para aplicaciones con m&aacute;s necesidades de velocidad.";
 choices[71][1] = "El mismo que en la interfaz SATA y permite utilizar estos discos duros para aplicaciones con menos necesidad de velocidad, aunque con mayor costo.";
 choices[71][2] = "No tiene nada que ver con la interfaz SATA";
 choices[71][3] = "El mismo que en la interfaz SATA y permite utilizar estos discos duros para aplicaciones con menos necesidad de velocidad, pero con ahorro de costos.";
 answers[71] = choices[71][3];
 units[71] = "47";
 comments[71] = "Id Pregunta: 9144. ";


//  Id pregunta: 9197 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  &iquest;Est&aacute;n protegidos los manuales de uso de un programa de ordenador?";
 choices[72]= new Array();
 choices[72][0] = "Los manuales de uso de un programa de ordeandor no est&aacute;n protegidos.";
 choices[72][1] = "Si, como obra literaria.";
 choices[72][2] = "Como obra literaria, pero s&oacute;lo si tienen suficiente calidad artistica.";
 choices[72][3] = "Si, como parte integrante del concepto &quot;programa de ordenador&quot;.";
 answers[72] = choices[72][3];
 units[72] = "36";
 comments[72] = "Id Pregunta: 9197. ";


//  Id pregunta: 9241 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  &iquest;Qu&eacute; es Nemo?";
 choices[73]= new Array();
 choices[73][0] = "un gestor de archivos.";
 choices[73][1] = "Una aplicaci&oacute;n multimedia para m&oacute;viles.";
 choices[73][2] = "Una suite de ofim&aacute;tica.";
 choices[73][3] = "Un editor de texto.";
 answers[73] = choices[73][0];
 units[73] = "54";
 comments[73] = "Id Pregunta: 9241. ";


//  Id pregunta: 9249 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  &iquest;Qu&eacute; son los hives en Windows?";
 choices[74]= new Array();
 choices[74][0] = "Grupos de archivos";
 choices[74][1] = "La organizaci&oacute;n del registro organizado en un &uacute;nico volumen.";
 choices[74][2] = "Cada grupo masivo de archivos se mantiene en varios archivos separados.";
 choices[74][3] = "Todas son correctas.";
 answers[74] = choices[74][0];
 units[74] = "56";
 comments[74] = "Id Pregunta: 9249. ";


//  Id pregunta: 9261 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  Las siglas SSI (Single System Image) corresponden a: ";
 choices[75]= new Array();
 choices[75][0] = "Una interfaz &uacute;nica de acceso al sistema para un cl&uacute;ster de servidores. ";
 choices[75][1] = "Una imagen del sistema operativo de un ordenador que se utiliza para la creaci&oacute;n de clones.";
 choices[75][2] = "Una copia completa de un ordenador personal Windows que sirve para restaurar el sistema. ";
 choices[75][3] = "Una representaci&oacute;n de la memoria del sistema que se utiliza en .NET. ";
 answers[75] = choices[75][0];
 units[75] = "50";
 comments[75] = "Id Pregunta: 9261. Examen TICA2-2011";


//  Id pregunta: 9270 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  En un sistema de almacenamiento con 6 discos de 400 GB de capacidad cada uno, &iquest;cu&aacute;l de las siguientes configuraciones RAID tiene al menos 1 TB de capacidad y podr&iacute;a resistir el fallo de 3 discos en algunas ocasiones sin p&eacute;rdida de datos?";
 choices[76]= new Array();
 choices[76][0] = "RAID 6+0";
 choices[76][1] = "RAID 5+0";
 choices[76][2] = "RAID 5+1";
 choices[76][3] = "RAID 0+1";
 answers[76] = choices[76][3];
 units[76] = "48";
 comments[76] = "Id Pregunta: 9270. Examen TICA2-2011";


//  Id pregunta: 9616 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  &iquest;Desde qu&eacute; versi&oacute;n del SO Windows est&aacute; disponible la funcionalidad de bitlocker para USB?";
 choices[77]= new Array();
 choices[77][0] = "Windows XP";
 choices[77][1] = "Windows Vista";
 choices[77][2] = "Windows 7";
 choices[77][3] = "Windows 8";
 answers[77] = choices[77][2];
 units[77] = "56";
 comments[77] = "Id Pregunta: 9616. ";


//  Id pregunta: 9624 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)   Indique cual de las siguientes ediciones no corresponde a Windows Server 2012 ";
 choices[78]= new Array();
 choices[78][0] = "Bussiness";
 choices[78][1] = "Essentials";
 choices[78][2] = "Foundation";
 choices[78][3] = "Standard";
 answers[78] = choices[78][0];
 units[78] = "56";
 comments[78] = "Id Pregunta: 9624. Examen TIC A1 2013";


//  Id pregunta: 9634 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  &iquest;C&uacute;al es la interfaz gr&aacute;fica de usuario en una instalaci&oacute;n de Windows 2012 Server core?";
 choices[79]= new Array();
 choices[79][0] = "MetroUI";
 choices[79][1] = "Metacity";
 choices[79][2] = "KDE";
 choices[79][3] = "Ninguna";
 answers[79] = choices[79][3];
 units[79] = "56";
 comments[79] = "Id Pregunta: 9634. ";


//  Id pregunta: 9969 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  De las siguientes afirmaciones sobre XPDL seleccione la INCORRECTA:";
 choices[80]= new Array();
 choices[80][0] = "Permite escribir especificaciones de procesos Workflow de manera estandarizada";
 choices[80][1] = "Permite una representaci&oacute;n gr&aacute;fica de los procesos incluyendo coordenadas X e Y para cada nodo implementado.";
 choices[80][2] = "Proporciona una notaci&oacute;n gr&aacute;fica para facilitar la comunicaci&oacute;n humana entre usuarios";
 choices[80][3] = "Es un lenguaje de definici&oacute;n de Workflow creado por OASIS";
 answers[80] = choices[80][3];
 units[80] = "71";
 comments[80] = "Id Pregunta: 9969. Examen Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n, Servicio sanitario Extremadura, 2014";


//  Id pregunta: 10169 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  En una base de datos Oracle, &iquest;qu&eacute; afirmaci&oacute;n es correcta en relaci&oacute;n con las vistas materializadas?";
 choices[81]= new Array();
 choices[81][0] = "La materializaci&oacute;n de una vista es llevada a cabo por el usuario mediante la exportaci&oacute;n a disco de los datos devueltos por la vista";
 choices[81][1] = "Oracle no utiliza el t&eacute;rmino de &quot;vista materializada&quot;, si no el de &quot;snapshot&quot;";
 choices[81][2] = "Se define de manera similar a una vista com&uacute;n pero, en lugar de almacenar s&oacute;lo la definici&oacute;n de la vista, almacena el resultado de la consulta";
 choices[81][3] = "Desde la versi&oacute;n 8i, la nueva caracter&iacute;stica &quot;QUERY REWRITE&quot; otorga mayor funcionalidad a las snapshots frente a las vistas materializadas";
 answers[81] = choices[81][2];
 units[81] = "58";
 comments[81] = "Id Pregunta: 10169. ";


//  Id pregunta: 10223 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  Teniendo las siguientes sentencias, el resultado ser&aacute;:byte b1 = 126, b2 = 1;byte b3 = b1 + b2;System.out.println(&quot;b3 vale: &quot; + b3);";
 choices[82]= new Array();
 choices[82][0] = "127";
 choices[82][1] = "Da error, ya que se supera el valor m&aacute;ximo que admite un dato de tipo byte";
 choices[82][2] = "Da error y no compila ya que b3 deber&iacute;a ser de tipo int";
 choices[82][3] = "Da error ya que las variables est&aacute;n mal declaradas";
 answers[82] = choices[82][2];
 units[82] = "60";
 comments[82] = "Id Pregunta: 10223. La suma de la segunda l&iacute;nea solo acepta int. Si se suman bytes debe hacerse casting.";


//  Id pregunta: 10227 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  Cual de los siguientes m&eacute;todos son m&eacute;todosde la clase Thread:";
 choices[83]= new Array();
 choices[83][0] = "sleep(long msec);";
 choices[83][1] = "start();";
 choices[83][2] = "wait();";
 choices[83][3] = "A y B son correctas.";
 answers[83] = choices[83][3];
 units[83] = "60";
 comments[83] = "Id Pregunta: 10227. start() es un m&eacute;todo de Thread. Se cambia la opci&oacute;n D, notifyAll, por la actual.";


//  Id pregunta: 10240 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  Una vez creado un objeto StringTokenizer, cu&aacute;l es el m&eacute;todo que nos permite ir avanzando hasta el siguiente elemento del String:";
 choices[84]= new Array();
 choices[84][0] = "next()";
 choices[84][1] = "nextValue()";
 choices[84][2] = "nextToken()";
 choices[84][3] = "Ninguno de los anteriores";
 answers[84] = choices[84][2];
 units[84] = "60";
 comments[84] = "Id Pregunta: 10240. NULL";


//  Id pregunta: 10252 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  FooCorp modifica un software distribu&iacute;do bajo GPL, e incluye una tecnolog&iacute;a patentada por FooCorp. &iquest;Hay alg&uacute;n requisito en la licencia GPL sobre c&oacute;mo licenciar la patente aplicable?";
 choices[85]= new Array();
 choices[85][0] = "No";
 choices[85][1] = "S&iacute;, deben permitir a cualquiera que use la tecnolog&iacute;a patentada para cualquier prop&oacute;sito";
 choices[85][2] = "S&iacute;, deben permitir a cualquiera que utilice el c&oacute;digo GPL modificado para utilizar la tecnolog&iacute;a patentada.";
 choices[85][3] = "Si, deben hacer el c&oacute;digo accesible por todos";
 answers[85] = choices[85][2];
 units[85] = "61";
 comments[85] = "Id Pregunta: 10252. ";


//  Id pregunta: 10468 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  &iquest;Cu&aacute;les son los nuevos elementos de HTML5?";
 choices[86]= new Array();
 choices[86][0] = "header y footer.";
 choices[86][1] = "nav.";
 choices[86][2] = "sections y articles.";
 choices[86][3] = "Todas las anteriores.";
 answers[86] = choices[86][3];
 units[86] = "69";
 comments[86] = "Id Pregunta: 10468. NULL";


//  Id pregunta: 10794 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  Se quiere incluir una base de datos local en una aplicaci&oacute;n para m&oacute;viles Android. &iquest;Cu&aacute;l de las siguientes ser&iacute;a la m&aacute;s adecuada?";
 choices[87]= new Array();
 choices[87][0] = "SQLite.";
 choices[87][1] = "Oracle Pocket.";
 choices[87][2] = "SQL Server compact.";
 choices[87][3] = "MySQL micro edition.";
 answers[87] = choices[87][0];
 units[87] = "57";
 comments[87] = "Id Pregunta: 10794. Examen GSI 2014";


//  Id pregunta: 10797 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  &iquest;Cu&aacute;l de los siguientes lenguajes de programaci&oacute;n utiliza las instrucciones begin/rescue/ensure/end para tratar las excepciones?";
 choices[88]= new Array();
 choices[88][0] = "Perl.";
 choices[88][1] = "Python.";
 choices[88][2] = "Ruby.";
 choices[88][3] = "PHP.";
 answers[88] = choices[88][2];
 units[88] = "0";
 comments[88] = "Id Pregunta: 10797. Examen GSI 2014";


//  Id pregunta: 10871 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  Se&ntilde;ale entre las siguientes herramientas el gestor de copia de seguridad en l&iacute;nea utilizado por productos de base de datos Oracle:";
 choices[89]= new Array();
 choices[89][0] = "RFID";
 choices[89][1] = "RSYNC";
 choices[89][2] = "RMAN";
 choices[89][3] = "RMON";
 answers[89] = choices[89][2];
 units[89] = "57";
 comments[89] = "Id Pregunta: 10871. Examen GSI 2014";


//  Id pregunta: 10940 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  Tener la funcionalidad &quot;Thin Provisioning&quot; en una cabina de almacenamiento conectada a una red SAN nos permite:";
 choices[90]= new Array();
 choices[90][0] = "Asignar menor cantidad de GB/TB a los servidores, si no se ha alcanzado el m&aacute;ximo de ocupaci&oacute;n real de la cabina.";
 choices[90][1] = "Sobreasignar mayor cantidad de GB/TB a los servidores, si no se ha alcanzado el m&aacute;ximo de ocupaci&oacute;n real de la cabina.";
 choices[90][2] = "Asignar mediante peque&ntilde;os incrementos los nuevos discos que se incorporen en caliente.";
 choices[90][3] = "Provisionar una capa de control para la virtualizaci&oacute;n del almacenamiento en cloud.";
 answers[90] = choices[90][1];
 units[90] = "48";
 comments[90] = "Id Pregunta: 10940. TIC A1 AGE 2014";


//  Id pregunta: 11086 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Dado un mensaje, m, y su cifrado mediante OTP (one time pad), c. &iquest;se puede obtener la clave utilizada en el cifrado?";
 choices[91]= new Array();
 choices[91][0] = "No, no se puede";
 choices[91][1] = "S&iacute;, la clave es k = m XOR c";
 choices[91][2] = "S&oacute;lo pueden calcularse la mitad de los bits de la clave";
 choices[91][3] = "S&iacute;, la clave es k = m XOR m";
 answers[91] = choices[91][1];
 units[91] = "72";
 comments[91] = "Id Pregunta: 11086. ";


//  Id pregunta: 11129 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l de las siguientes sentencias es verdadera?";
 choices[92]= new Array();
 choices[92][0] = "El est&aacute;ndar SATA 3 soporta transferencias hasta 4.8 Gbps";
 choices[92][1] = "La versi&oacute;n ATA-8 soporta velocidades hasta 12 Gbps";
 choices[92][2] = "El SAS 600 consigue velocidades de hasta 16 Gbps";
 choices[92][3] = "Los discos SAS han sido progresivamente sustituidos por los SCSI,";
 answers[92] = choices[92][0];
 units[92] = "48";
 comments[92] = "Id Pregunta: 11129. ";


//  Id pregunta: 11138 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Cu&aacute;l de los siguientes tipos de drivers interacciona con un Middleware que ser&aacute; el que convierta las peticiones JDBC en el protocolo espec&iacute;fico del SGBD?";
 choices[93]= new Array();
 choices[93][0] = "Native-Api Driver";
 choices[93][1] = "Network Protocol Driver";
 choices[93][2] = "Native Protocol Driver";
 choices[93][3] = "JDBC-OBDC Bridge";
 answers[93] = choices[93][1];
 units[93] = "58";
 comments[93] = "Id Pregunta: 11138. ";


//  Id pregunta: 11258 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  En relaci&oacute;n con los efectos jur&iacute;dicos de las firmas electr&oacute;nicas, indique la respuesta correcta:";
 choices[94]= new Array();
 choices[94][0] = "No se denegar&aacute;n efectos jur&iacute;dicos ni admisibilidad como prueba en procedimientos judiciales a una firma electr&oacute;nica por el mero hecho de ser una firma electr&oacute;nica o porque no cumpla los requisitos de la firma electr&oacute;nica cualificada.";
 choices[94][1] = "Una firma electr&oacute;nica cualificada tendr&aacute; un efecto jur&iacute;dico equivalente al de una firma manuscrita.";
 choices[94][2] = "Una firma electr&oacute;nica b&aacute;sica, como usuario y contrase&ntilde;a, puede ser prueba en juicio.";
 choices[94][3] = "Todas son verdaderas.";
 answers[94] = choices[94][3];
 units[94] = "73";
 comments[94] = "Id Pregunta: 11258. ";


//  Id pregunta: 11511 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Cu&aacute;l de los siguientes sistemas de Big Data es utilizado por el Red Social Facebook?";
 choices[95]= new Array();
 choices[95][0] = "Hive";
 choices[95][1] = "Cassandra";
 choices[95][2] = "Hbase";
 choices[95][3] = "ZoneKeeper";
 answers[95] = choices[95][2];
 units[95] = "68";
 comments[95] = "Id Pregunta: 11511. NULL";


//  Id pregunta: 11514 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  De entre los siguientes est&aacute;ndares XML del W3C, &iquest;Cu&aacute;l define pol&iacute;ticas de control de acceso de usuarios?";
 choices[96]= new Array();
 choices[96][0] = "DSML";
 choices[96][1] = "XrML";
 choices[96][2] = "XKMS";
 choices[96][3] = "XACML";
 answers[96] = choices[96][3];
 units[96] = "72";
 comments[96] = "Id Pregunta: 11514. NULL";


//  Id pregunta: 11521 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  El &aacute;rbol formado por las entradas del directorio en LDAP, se llama:";
 choices[97]= new Array();
 choices[97][0] = "DIT";
 choices[97][1] = "Ltree";
 choices[97][2] = "LDS";
 choices[97][3] = "Ninguna de las anteriores.";
 answers[97] = choices[97][0];
 units[97] = "73";
 comments[97] = "Id Pregunta: 11521. NULL";


//  Id pregunta: 11533 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Se&ntilde;ale la respuesta correcta relativa a la seguridad en la parte de interfaz de usuario.";
 choices[98]= new Array();
 choices[98][0] = "Con Windows forms s&oacute;lo se tiene en cuenta la parte de seguridad basada en roles.";
 choices[98][1] = "Con Web forms s&oacute;lo se tiene en cuenta la parte de seguridad basada en c&oacute;digo";
 choices[98][2] = "Con Web forms se tiene en cuenta la seguridad basada en roles y en c&oacute;digo.";
 choices[98][3] = "Todas las anteriores son falsas.";
 answers[98] = choices[98][3];
 units[98] = "59";
 comments[98] = "Id Pregunta: 11533. NULL";


//  Id pregunta: 11614 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Se&ntilde;ale cu&aacute;l de los siguientes no es un operador b&aacute;sico en SQL:";
 choices[99]= new Array();
 choices[99][0] = "Proyecci&oacute;n";
 choices[99][1] = "Intersecci&oacute;n";
 choices[99][2] = "Producto cartesiano";
 choices[99][3] = "Uni&oacute;n";
 answers[99] = choices[99][1];
 units[99] = "58";
 comments[99] = "Id Pregunta: 11614. ";


