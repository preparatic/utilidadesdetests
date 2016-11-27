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

//  Id pregunta: 704 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de los siguientes no es un entorno de escritorio de Linux?";
 choices[0]= new Array();
 choices[0][0] = "Xfce";
 choices[0][1] = "Gnome";
 choices[0][2] = "KDE";
 choices[0][3] = "Metacity";
 answers[0] = choices[0][3];
 units[0] = "54";
 comments[0] = "Id Pregunta: 704. Metacity es el gestor de ventanas por defecto del entorno de escritorio GNOME";


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


//  Id pregunta: 725 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  Seg&uacute;n su comportamiento durante la ejecuci&oacute;n de un programa, las estructuras de datos se pueden clasificar en:";
 choices[2]= new Array();
 choices[2][0] = "Est&aacute;ticas y din&aacute;micas";
 choices[2][1] = "De clase y de objeto";
 choices[2][2] = "De iteraci&oacute;n, de recursi&oacute;n y de bifurcaci&oacute;n";
 choices[2][3] = "De flujo de control y de flujo de datos";
 answers[2] = choices[2][0];
 units[2] = "57";
 comments[2] = "Id Pregunta: 725. Examen TIC MAP B 2004";


//  Id pregunta: 726 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  En el estudio te&oacute;rico de las Estructuras de Datos, el conocido como &quot;m&eacute;todo de la baraja&quot; responde a un algoritmo de:";
 choices[3]= new Array();
 choices[3][0] = "B&uacute;squeda";
 choices[3][1] = "Ordenaci&oacute;n";
 choices[3][2] = "Iteraci&oacute;n";
 choices[3][3] = "Recursi&oacute;n";
 answers[3] = choices[3][1];
 units[3] = "57";
 comments[3] = "Id Pregunta: 726. Examen TIC MAP B 2004";


//  Id pregunta: 727 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  &iquest;Cu&aacute;l de los siguientes conceptos se clasifica dentro de la tipolog&iacute;a de &quot;Estructuras de datos no lineales&quot;?";
 choices[4]= new Array();
 choices[4][0] = "Pilas";
 choices[4][1] = "Listas";
 choices[4][2] = "Colas";
 choices[4][3] = "&Aacute;rboles";
 answers[4] = choices[4][3];
 units[4] = "57";
 comments[4] = "Id Pregunta: 727. Examen TIC MAP B 2004";


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


//  Id pregunta: 837 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto a Linux?:";
 choices[6]= new Array();
 choices[6][0] = "Est&aacute; constituido por un n&uacute;cleo Kernel, y cada usuario debe construirse las librer&iacute;as y programas para poderlo utilizar";
 choices[6][1] = "Es un sistema operativo compatible con Unix";
 choices[6][2] = "Es software libre";
 choices[6][3] = "El sistema viene acompa&ntilde;ado del c&oacute;digo fuente";
 answers[6] = choices[6][0];
 units[6] = "52, 53";
 comments[6] = "Id Pregunta: 837. ";


//  Id pregunta: 849 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes no es una distribuci&oacute;n de Linux?:";
 choices[7]= new Array();
 choices[7][0] = "Debian";
 choices[7][1] = "Gentoo Linux";
 choices[7][2] = "OpenBSD";
 choices[7][3] = "TurboLinux";
 answers[7] = choices[7][2];
 units[7] = "52, 53";
 comments[7] = "Id Pregunta: 849. ";


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


//  Id pregunta: 969 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  Cuando para un archivo disponemos de dos estructuras o zonas distintas, zona de registros y zona de &iacute;ndices, y no hay punteros entre los registros, entonces estamos hablando de archivos con organizaci&oacute;n:";
 choices[9]= new Array();
 choices[9][0] = "Secuencial";
 choices[9][1] = "Secuencial indexada";
 choices[9][2] = "Secuencial indexada encadenada";
 choices[9][3] = "Semi-indexada";
 answers[9] = choices[9][1];
 units[9] = "52";
 comments[9] = "Id Pregunta: 969. ";


//  Id pregunta: 977 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  De las cl&aacute;usulas de Horn, no es correcto afirmar que:";
 choices[10]= new Array();
 choices[10][0] = "Son aquellas que tienen, como mucho, un literal no negado";
 choices[10][1] = "Una hip&oacute;tesis es una cl&aacute;usula de Horn con un literal no negado";
 choices[10][2] = "Una pregunta es una cl&aacute;usula de Horn con ning&uacute;n literal no negado o teorema a demostrar";
 choices[10][3] = "En las bases de datos deductivas indefinidas, todos los axiomas son cl&aacute;usulas de Horn";
 answers[10] = choices[10][3];
 units[10] = "56";
 comments[10] = "Id Pregunta: 977. ";


//  Id pregunta: 1004 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  El comando 'kill' en Linux:";
 choices[11]= new Array();
 choices[11][0] = "Se utiliza para eliminar un proceso, siempre que se est&eacute; autorizado";
 choices[11][1] = "Se utiliza para comunicarse con los procesos y enviarles se&ntilde;ales";
 choices[11][2] = "Desconecta a un usuario";
 choices[11][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[11] = choices[11][1];
 units[11] = "53";
 comments[11] = "Id Pregunta: 1004. ";


//  Id pregunta: 1009 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  El control de la ejecuci&oacute;n de un programa JCL se realiza por medio de:";
 choices[12]= new Array();
 choices[12][0] = "El subsistema del control de trabajos del sistema operativo";
 choices[12][1] = "El cortafuegos";
 choices[12][2] = "El subsistema de seguridad Kerberos";
 choices[12][3] = "El filtro de paquetes IP";
 answers[12] = choices[12][0];
 units[12] = "52";
 comments[12] = "Id Pregunta: 1009. ";


//  Id pregunta: 1080 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  En el entorno de Bases de Datos, los &iacute;ndices son de vital importancia en las transacciones de acceso &iquest;Cu&aacute;l de las siguientes afirmaciones no es cierta?:";
 choices[13]= new Array();
 choices[13][0] = "El &iacute;ndice tambi&eacute;n es una tabla almacenada en disco";
 choices[13][1] = "Las tablas de &iacute;ndices se actualizan cuando se actualizan las tablas de datos";
 choices[13][2] = "La actualizaci&oacute;n de las tablas de &iacute;ndices es transparente al usuario";
 choices[13][3] = "Las actualizaciones de &iacute;ndices no consumen recursos";
 answers[13] = choices[13][3];
 units[13] = "57";
 comments[13] = "Id Pregunta: 1080. ";


//  Id pregunta: 1081 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  En el lenguaje de consulta en BBDD relacionales, se usan los t&eacute;rminos tabla, fila y columna para:";
 choices[14]= new Array();
 choices[14][0] = "Tupla, relaci&oacute;n y atributo, respectivamente";
 choices[14][1] = "Relaci&oacute;n, tupla y atributo, respectivamente";
 choices[14][2] = "Relaci&oacute;n, atributo y tupla, respectivamente";
 choices[14][3] = "Tupla, atributo y relaci&oacute;n, respectivamente";
 answers[14] = choices[14][1];
 units[14] = "58";
 comments[14] = "Id Pregunta: 1081. ";


//  Id pregunta: 1097 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  En electr&oacute;nica digital, un conjunto de funciones es completo en un &aacute;lgebra de Boole:";
 choices[15]= new Array();
 choices[15][0] = "Si y s&oacute;lo si cualquier forma booleana puede realizarse con dichas funciones.";
 choices[15][1] = "Si un conjunto m&iacute;nimo puede realizarse con dichas funciones.";
 choices[15][2] = "Si y s&oacute;lo si contiene a todas las funciones l&oacute;gicas siguientes AND, OR, NOT, NAND, XOR.";
 choices[15][3] = "Ninguna de las anteriores es v&aacute;lida.";
 answers[15] = choices[15][0];
 units[15] = "58";
 comments[15] = "Id Pregunta: 1097. ";


//  Id pregunta: 1131 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  En relaci&oacute;n con las caracter&iacute;sticas de una tabla de estructura relacional, indique cu&aacute;l de las siguientes afirmaciones es cierta:";
 choices[16]= new Array();
 choices[16][0] = "Cada columna debe estar identificada por un nombre espec&iacute;fico";
 choices[16][1] = "Un mismo dominio podr&aacute; servir para definir los valores de varias columnas diferentes";
 choices[16][2] = "Cada columna debe extraer sus valores de un dominio";
 choices[16][3] = "Todas las respuestas anteriores son ciertas";
 answers[16] = choices[16][3];
 units[16] = "58";
 comments[16] = "Id Pregunta: 1131. ";


//  Id pregunta: 1159 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  En Unix la gesti&oacute;n de procesos se realiza:";
 choices[17]= new Array();
 choices[17][0] = "Cuanta m&aacute;s CPU ha consumido un proceso mayor se hace su prioridad, ya que se considera que debe ser uno de los procesos principales del sistema";
 choices[17][1] = "Existe una &uacute;nica cola de procesos. La prioridad se asigna seg&uacute;n el orden de llegada de los mismos";
 choices[17][2] = "El mecanismo de planificaci&oacute;n funciona mediante un timeout que ordena a un driver llamar a una subrutina del kernel cuando ha transcurrido un determinado tiempo";
 choices[17][3] = "El scheduler asigna rodajas de tiempo (time slicers) a los distintos procesos. La duraci&oacute;n de cada rodaja es variable seg&uacute;n la prioridad que tenga asignada el proceso";
 answers[17] = choices[17][3];
 units[17] = "54";
 comments[17] = "Id Pregunta: 1159. ";


//  Id pregunta: 1221 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  La estructuraci&oacute;n en niveles l&oacute;gicos de E/S de un sistema inform&aacute;tico puede hacerse de la siguiente forma:";
 choices[18]= new Array();
 choices[18][0] = "Transferencia elemental, transferencia compleja, transferencia m&uacute;ltiple";
 choices[18][1] = "Lenguaje de alto nivel, instrucciones de m&aacute;quina y macroinstrucciones";
 choices[18][2] = "Rutinas de entrada-salida, sistemas operativos, ensambladores";
 choices[18][3] = "Transferencia elemental, de bloque, operaci&oacute;n de entrada/salida";
 answers[18] = choices[18][3];
 units[18] = "52";
 comments[18] = "Id Pregunta: 1221. ";


//  Id pregunta: 1337 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  Seg&uacute;n el est&aacute;ndar SQL, una transacci&oacute;n es una secuencia de operaciones que:";
 choices[19]= new Array();
 choices[19][0] = "Se inicia con una sentencia BEGIN TRANSACTION y termina con una sentencia END TRANSACTION";
 choices[19][1] = "Si se termina con un sentencia ROLLBACK, todos los cambios realizados por las diferentes transacciones desde el inicio de la sesi&oacute;n son cancelados";
 choices[19][2] = "Puede iniciarse con la ejecuci&oacute;n de una sentencia DML y se finaliza con una sentencia COMMIT o ROLLBACK";
 choices[19][3] = "Si no finaliza con una sentencia COMMIT, el sistema debe devolver un mensaje de error";
 answers[19] = choices[19][2];
 units[19] = "58";
 comments[19] = "Id Pregunta: 1337. ";


//  Id pregunta: 1365 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Si hablamos de formas normales en el modelo relacional, una de las siguientes afirmaciones es falsa:";
 choices[20]= new Array();
 choices[20][0] = "Una informaci&oacute;n est&aacute; en primera forma normal si no incluye ning&uacute;n grupo repetitivo";
 choices[20][1] = "La cuarta forma normal elimina dependencias monovaluadas";
 choices[20][2] = "La segunda forma normal, implica, adem&aacute;s de estar en primera forma normal, que en una relaci&oacute;n cualquiera de sus atributos no primarios tienen una dependencia plena con cada una de las claves, y no con partes de &eacute;stas";
 choices[20][3] = "La quinta forma normal elimina dependencias combinacionales";
 answers[20] = choices[20][1];
 units[20] = "58";
 comments[20] = "Id Pregunta: 1365. ";


//  Id pregunta: 1422 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  Una relaci&oacute;n est&aacute; en primera forma normal si:";
 choices[21]= new Array();
 choices[21][0] = "La clave &uacute;nica permite la dependencia funcional";
 choices[21][1] = "No contiene claves dependientes de otra extranjera";
 choices[21][2] = "La clave extranjera est&aacute; normalizada";
 choices[21][3] = "No contiene grupos repetitivos";
 answers[21] = choices[21][3];
 units[21] = "58";
 comments[21] = "Id Pregunta: 1422. ";


//  Id pregunta: 1423 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Una relaci&oacute;n est&aacute; en segunda forma normal si:";
 choices[22]= new Array();
 choices[22][0] = "Est&aacute; en 1FN y todos son atributos toman un s&oacute;lo valor";
 choices[22][1] = "Est&aacute; en 1FN y todos sus atributos no pertenecientes a claves candidatas dependen de forma completa de la clave";
 choices[22][2] = "Est&aacute; en 1FN y sus atributos pertenecen al dominio de la informaci&oacute;n";
 choices[22][3] = "Est&aacute; en 1FN y ning&uacute;n atributo depende funcionalmente de la clave";
 answers[22] = choices[22][1];
 units[22] = "58";
 comments[22] = "Id Pregunta: 1423. ";


//  Id pregunta: 1457 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  &iquest;Podr&iacute;a indicar la organizaci&oacute;n que ha desarrollado el est&aacute;ndar &lsquo;motif&rsquo;?:";
 choices[23]= new Array();
 choices[23][0] = "Sun Microsystems";
 choices[23][1] = "OSF (Open Group)";
 choices[23][2] = "Departamento de Defensa de EE.UU.";
 choices[23][3] = "MIT (Massachusets Institute of Technology)";
 answers[23] = choices[23][1];
 units[23] = "54";
 comments[23] = "Id Pregunta: 1457. NULL";


//  Id pregunta: 1460 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  En un servidor de archivos jer&aacute;rquico cada nodo del &aacute;rbol puede tener: ";
 choices[24]= new Array();
 choices[24][0] = "Una etiqueta o un registro de datos, pero no ambos";
 choices[24][1] = "Un registro de datos";
 choices[24][2] = "Una etiqueta, un registro de datos, ambos o ninguno";
 choices[24][3] = "Una etiqueta y un registro de datos obligatoriamente";
 answers[24] = choices[24][2];
 units[24] = "53";
 comments[24] = "Id Pregunta: 1460. ";


//  Id pregunta: 1462 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Indique cu&aacute;l de las siguientes afirmaciones es v&aacute;lida para el proceso &quot;Two Phase COMMIT&quot;:";
 choices[25]= new Array();
 choices[25][0] = "Es un programa con 2 versiones de trabajo";
 choices[25][1] = "Es una garant&iacute;a de consistencia entre bases de datos";
 choices[25][2] = "Es una funcionalidad para recuperaci&oacute;n de datos";
 choices[25][3] = "Es un equipo tolerante a fallos";
 answers[25] = choices[25][1];
 units[25] = "58";
 comments[25] = "Id Pregunta: 1462. NULL";


//  Id pregunta: 1467 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  La extensi&oacute;n de los documentos de plantillas en MS Word es:";
 choices[26]= new Array();
 choices[26][0] = "Doc";
 choices[26][1] = "Dot";
 choices[26][2] = "Pln";
 choices[26][3] = "Std";
 answers[26] = choices[26][1];
 units[26] = "52";
 comments[26] = "Id Pregunta: 1467. ";


//  Id pregunta: 1497 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  La aplicaci&oacute;n que permite conocer si un sistema est&aacute; accesible es:";
 choices[27]= new Array();
 choices[27][0] = "traceroute";
 choices[27][1] = "ping";
 choices[27][2] = "wake";
 choices[27][3] = "setup";
 answers[27] = choices[27][1];
 units[27] = "52,55";
 comments[27] = "Id Pregunta: 1497. ";


//  Id pregunta: 1517 AÃ±o de creación de pregunta: 2003-01-01
 questions[28]= "29)  Al bloque de sentencias PL/SQL almacenado en el diccionario de datos, para ser invocado desde las aplicaciones, se denomina:";
 choices[28]= new Array();
 choices[28][0] = "Procedimiento";
 choices[28][1] = "Producto.";
 choices[28][2] = "Secuencia.";
 choices[28][3] = "Segmento.";
 answers[28] = choices[28][0];
 units[28] = "58";
 comments[28] = "Id Pregunta: 1517. Junta Andaluc&iacute;a";


//  Id pregunta: 1598 AÃ±o de creación de pregunta: 2003-01-01
 questions[29]= "30)  En sistema operativo UNIX indicar, entre las siguientes caracter&iacute;sticas cu&aacute;l no corresponde a cualquier sistema de archivo usado: VFS, NFS, etc&hellip;";
 choices[29]= new Array();
 choices[29][0] = "Capacidad de crear y destruir archivos";
 choices[29][1] = "Crecimiento din&aacute;mico de archivos";
 choices[29][2] = "Tratamiento de cualquier dispositivo perof&eacute;rico como archivo";
 choices[29][3] = "Estructura matricial";
 answers[29] = choices[29][3];
 units[29] = "53,54";
 comments[29] = "Id Pregunta: 1598. ";


//  Id pregunta: 1599 AÃ±o de creación de pregunta: 2003-01-01
 questions[30]= "31)  En un modelo de datos jer&aacute;rquico:";
 choices[30]= new Array();
 choices[30][0] = "Un registro no es subordinado directo de ning&uacute;n otro registro.";
 choices[30][1] = "Un registro es subordinado directo de como m&aacute;ximo otro registro.";
 choices[30][2] = "Un registro es subordinado directo de n registros, dependiendo de la topolog&iacute;a del modelo.";
 choices[30][3] = "Los registros estar organizados en una red de relaciones mediante un grafo.";
 answers[30] = choices[30][1];
 units[30] = "57";
 comments[30] = "Id Pregunta: 1599. Junta Andaluc&iacute;a";


//  Id pregunta: 1659 AÃ±o de creación de pregunta: 2004-01-01
 questions[31]= "32)  En las bases de datos, &iquest;qu&eacute; tipo de redundancia debe tolerarse?";
 choices[31]= new Array();
 choices[31][0] = "L&oacute;gica";
 choices[31][1] = "M&uacute;ltiple";
 choices[31][2] = "Controlada";
 choices[31][3] = "Ninguna";
 answers[31] = choices[31][2];
 units[31] = "58";
 comments[31] = "Id Pregunta: 1659. MAP-B 2003";


//  Id pregunta: 1675 AÃ±o de creación de pregunta: 2004-01-01
 questions[32]= "33)  &iquest;Cu&aacute;l NO es uno de los principios de Codd?";
 choices[32]= new Array();
 choices[32][0] = "Acceso garantizado";
 choices[32][1] = "Independencia f&iacute;sica de los datos";
 choices[32][2] = "Gesti&oacute;n de una BDR";
 choices[32][3] = "Actualizaci&oacute;n de tablas";
 answers[32] = choices[32][3];
 units[32] = "58";
 comments[32] = "Id Pregunta: 1675. ";


//  Id pregunta: 1681 AÃ±o de creación de pregunta: 2004-01-01
 questions[33]= "34)  Respecto a los cuatro tipos de drivers de JDBC, &iquest;Cu&aacute;l de ellos requiere la existencia de un servidor intermedio o middleware?";
 choices[33]= new Array();
 choices[33][0] = "Driver de tipo I";
 choices[33][1] = "Driver de tipo II";
 choices[33][2] = "Driver de tipo III";
 choices[33][3] = "Driver de tipo IV";
 answers[33] = choices[33][2];
 units[33] = "58";
 comments[33] = "Id Pregunta: 1681. ";


//  Id pregunta: 1719 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  Un proceso pasa por los estados, RUN, READY IN, READY OUT, WAITING IN y WAITING OUT. Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es correcta";
 choices[34]= new Array();
 choices[34][0] = "RUN, ejecut&aacute;ndose actualmente, s&oacute;lo puede estar en estado RUN un proceso por m&aacute;quina, independientemente del n&uacute;mero de procesadores que exista en el sistema.";
 choices[34][1] = "READY IN, est&aacute; preparado para ser ejeutado en cuanto la CPU se quede libre, estando residente en la memoria secundaria.";
 choices[34][2] = "READY OUT, est&aacute; preparado para ser ejecutado en cuanto la CPU se quede libre, estando residente en memoria principal.";
 choices[34][3] = "WAITING IN y WAITING OUT, el proceso est&aacute; esperando la finalizaci&oacute;n de alg&uacute;n evento (normalmente de E/S), estando residente en memoria principal o secundaria respectivamente.";
 answers[34] = choices[34][3];
 units[34] = "53";
 comments[34] = "Id Pregunta: 1719. ";


//  Id pregunta: 1725 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  Respecto a la pol&iacute;tica de planificaci&oacute;n de procesos de turno rotatorio o &quot;Round Robin&quot;, es FALSO afirmar que";
 choices[35]= new Array();
 choices[35][0] = "Penaliza a los procesos cortos";
 choices[35][1] = "La penalizaci&oacute;n a los procesos intensivos en E/S puede resolverse con una cola prioritaria para los procesos que salieron de ejecuci&oacute;n por E/S";
 choices[35][2] = "Cada proceso recibe una fracci&oacute;n de tiempo antes de ser expulsado";
 choices[35][3] = "La selecci&oacute;n del siguiente proceso se realiza seg&uacute;n la pol&iacute;tica FCFS (First come, First served)";
 answers[35] = choices[35][0];
 units[35] = "52";
 comments[35] = "Id Pregunta: 1725. ";


//  Id pregunta: 1736 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  &iquest;Qu&eacute; es MOSIX?";
 choices[36]= new Array();
 choices[36][0] = "Un sistema operativo monousuario";
 choices[36][1] = "Conjunto de herramientas para crear cl&uacute;sters basados en Linux";
 choices[36][2] = "El m&oacute;dulo encargado de la E/S en Linux";
 choices[36][3] = "API para ejecutar sentencias SQL";
 answers[36] = choices[36][1];
 units[36] = "55";
 comments[36] = "Id Pregunta: 1736. ";


//  Id pregunta: 1739 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  En el Directorio Activo, el conjunto de atributos de un objeto dado, se denomina";
 choices[37]= new Array();
 choices[37][0] = "Contenedor";
 choices[37][1] = "Esquema";
 choices[37][2] = "&Aacute;rbol";
 choices[37][3] = "P&aacute;gina";
 answers[37] = choices[37][1];
 units[37] = "56";
 comments[37] = "Id Pregunta: 1739. ";


//  Id pregunta: 1927 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  En el entorno de escritorio KDE, Kate es:";
 choices[38]= new Array();
 choices[38][0] = "El navegador del escritorio";
 choices[38][1] = "Un generador de informes para la empresa";
 choices[38][2] = "Un editor de f&oacute;rmulas matem&aacute;ticas";
 choices[38][3] = "Un editor de texto";
 answers[38] = choices[38][3];
 units[38] = "54";
 comments[38] = "Id Pregunta: 1927. NULL";


//  Id pregunta: 4048 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  &iquest;En cual de los siguientes lenguajes de programaci&oacute;n ser&iacute;a m&aacute;s razonable desarrollar un sistema operativo moderno?";
 choices[39]= new Array();
 choices[39][0] = "Java";
 choices[39][1] = "C#";
 choices[39][2] = "C / C++";
 choices[39][3] = "OS Builder";
 answers[39] = choices[39][2];
 units[39] = "52";
 comments[39] = "Id Pregunta: 4048. NULL";


//  Id pregunta: 4275 AÃ±o de creación de pregunta: 2007-01-01
 questions[40]= "41)  &iquest;Cu&aacute;l de los siguientes sistemas operativos es un sistema orientado a objetos?";
 choices[40]= new Array();
 choices[40][0] = "Windows.";
 choices[40][1] = "Linux.";
 choices[40][2] = "OS/400.";
 choices[40][3] = "VMS";
 answers[40] = choices[40][2];
 units[40] = "52";
 comments[40] = "Id Pregunta: 4275. ";


//  Id pregunta: 4312 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  Identifique cu&aacute;l de las siguientes alternativas sobre lenguajes de comandos o de control de &oacute;rdenes del Sistema UNIX es correcta:";
 choices[41]= new Array();
 choices[41][0] = "Bourne Shell (desarrollado por AT&amp;T).";
 choices[41][1] = "Korn Shell (desarrollado por Berkeley y Korn).";
 choices[41][2] = "C Shell (desarrollado por AT&amp;T)";
 choices[41][3] = "Korn Shell (desarrollado por Korn).";
 answers[41] = choices[41][0];
 units[41] = "54";
 comments[41] = "Id Pregunta: 4312. ";


//  Id pregunta: 4459 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  El uso de mecanismos como JDBC u ODBC:";
 choices[42]= new Array();
 choices[42][0] = "Proporciona independencia respecto al SGBD utilizado.";
 choices[42][1] = "Proporcionan generalmente un mayor rendimiento y funcionalidad que las APIs nativas de los SGBD.";
 choices[42][2] = "Tienen poca importancia en sistemas donde se acceden a SGBD heterog&eacute;neos.";
 choices[42][3] = "Se utilizan &uacute;nicamente en arquitecturas cliente-servidor, no en entornos de aplicaciones WEB.";
 answers[42] = choices[42][0];
 units[42] = "58";
 comments[42] = "Id Pregunta: 4459. ";


//  Id pregunta: 4496 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  Metacity";
 choices[43]= new Array();
 choices[43][0] = "Es el gestor de eventos de GNOME 2";
 choices[43][1] = "Es el gestor de ventanas de GNOME 2";
 choices[43][2] = "Es el gestor de eventos de KDE";
 choices[43][3] = "Es el gestor de eventos de MOLINUX";
 answers[43] = choices[43][1];
 units[43] = "54";
 comments[43] = "Id Pregunta: 4496. ";


//  Id pregunta: 5066 AÃ±o de creación de pregunta: 2003-01-01
 questions[44]= "45)  GNOME es un entorno de escritorio libre para sistemas operativos libres. Seleccione la afirmaci&oacute;n correcta sobre &eacute;l:";
 choices[44]= new Array();
 choices[44][0] = "Ha sido la base sobre la cual se ha desarrollado el c&oacute;digo de la interfaz gr&aacute;fica de Windows VISTA";
 choices[44][1] = "Desde sus or&iacute;genes ha utilizado la biblioteca de controles gr&aacute;ficos GTK";
 choices[44][2] = "Cada vez que se a&ntilde;ade un icono al escritorio requiere que se recompile el Kernel";
 choices[44][3] = "Solamente admite una profundidad de color de 8 bits";
 answers[44] = choices[44][1];
 units[44] = "54";
 comments[44] = "Id Pregunta: 5066. Examen TIC A 2007";


//  Id pregunta: 5121 AÃ±o de creación de pregunta: 2003-01-01
 questions[45]= "46)  Con un tama&ntilde;o de bloque de 1 KB, &iquest;cu&aacute;l es el tama&ntilde;o m&aacute;ximo de un fichero con el sistema de archivos ext3?";
 choices[45]= new Array();
 choices[45][0] = "64GB";
 choices[45][1] = "32GB";
 choices[45][2] = "16GB";
 choices[45][3] = "8GB";
 answers[45] = choices[45][2];
 units[45] = "52";
 comments[45] = "Id Pregunta: 5121. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5466 AÃ±o de creación de pregunta: 2003-01-01
 questions[46]= "47)  Cual de las siguientes afirmaciones no es correcta a la hora de definir una tabla en Oracle";
 choices[46]= new Array();
 choices[46][0] = "S&oacute;lo deben ser num&eacute;ricas aquellas columnas que sean susceptibles de operaciones aritm&eacute;ticas";
 choices[46][1] = "Una &ldquo;clave inteligente&rdquo; o clave compuesta es m&aacute;s eficiente que una clave compuesta por varias columnas";
 choices[46][2] = "Oracle interpreta por defecto todos los objetos en may&uacute;scula a no ser que se escriba su nombre entre comillas dobles.";
 choices[46][3] = "La ordenaci&oacute;n de columnas num&eacute;ricas es diferente de la ordenaci&oacute;n de las columnas alfanum&eacute;ricas";
 answers[46] = choices[46][1];
 units[46] = "58";
 comments[46] = "Id Pregunta: 5466. Castilla y Le&oacute;n";


//  Id pregunta: 5518 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  Respecto a la concepci&oacute;n de un sistema operativo como gestor de recursos, un sistema operativo de prop&oacute;sito espec&iacute;fico de control en tiempo real no precisa gestionar:";
 choices[47]= new Array();
 choices[47][0] = "trabajos o procesos";
 choices[47][1] = "memoria principal";
 choices[47][2] = "almacenamiento secundario";
 choices[47][3] = "dispositivos de entrada/salida";
 answers[47] = choices[47][2];
 units[47] = "52";
 comments[47] = "Id Pregunta: 5518. ";


//  Id pregunta: 5617 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  En UNIX, el t&eacute;rmino &ldquo;vi&rdquo; se refiere a :";
 choices[48]= new Array();
 choices[48][0] = "Un comando que lista las 20 primeras l&iacute;neas de un fichero";
 choices[48][1] = "Un comando que indica el proceso activo";
 choices[48][2] = "Un editor de texto";
 choices[48][3] = "Ninguna de las anteriores";
 answers[48] = choices[48][2];
 units[48] = "53";
 comments[48] = "Id Pregunta: 5617. ";


//  Id pregunta: 5725 AÃ±o de creación de pregunta: 2009-01-01
 questions[49]= "50)  Los SGBD soportan 3 tipos de lenguajes: Lenguaje de Consulta de Datos, Lenguaje de Definici&oacute;n de Datos y Lenguaje de Manipulaci&oacute;n de Datos. Concretamente, el est&aacute;ndar SQL ISO 9075:1987 contempla en su definici&oacute;n:";
 choices[49]= new Array();
 choices[49][0] = "Lenguaje de Consulta de datos.";
 choices[49][1] = "Lenguaje de Consulta y de Manipulaci&oacute;n de datos.";
 choices[49][2] = "Lenguaje de Consulta y de Definici&oacute;n de datos.";
 choices[49][3] = "Lenguaje de Consulta, de Manipulaci&oacute;n y de Definici&oacute;n de datos.";
 answers[49] = choices[49][3];
 units[49] = "58";
 comments[49] = "Id Pregunta: 5725. MAP 2008 A2";


//  Id pregunta: 5858 AÃ±o de creación de pregunta: 2009-01-01
 questions[50]= "51)  &iquest;Qu&eacute; comando crea enlaces simb&oacute;licos en UNIX?";
 choices[50]= new Array();
 choices[50][0] = "ln";
 choices[50][1] = "mkdir";
 choices[50][2] = "ls";
 choices[50][3] = "mv";
 answers[50] = choices[50][0];
 units[50] = "53";
 comments[50] = "Id Pregunta: 5858. Pregunta 38";


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


//  Id pregunta: 6102 AÃ±o de creación de pregunta: 2010-01-01
 questions[52]= "53)  El lenguaje SQL92:";
 choices[52]= new Array();
 choices[52][0] = "Soporta la regla de integridad de entidad y en una tabla pueden existir dos filas iguales.";
 choices[52][1] = "Soporta la regla de integridad de entidad y en una tabla no pueden existir dos filas iguales.";
 choices[52][2] = "No soporta la regla de integridad de entidad y en una tabla pueden existir dos filas iguales.";
 choices[52][3] = "No soporta la regla de integridad de entidad y en una tabla no pueden existir dos filas iguales.";
 answers[52] = choices[52][0];
 units[52] = "58";
 comments[52] = "Id Pregunta: 6102. TIC A 2009";


//  Id pregunta: 6214 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)  En una metodolog&iacute;a de dise&ntilde;o de bases de datos, &iquest;c&oacute;mo se llama la etapa cuyo objetivo es obtener una buena representaci&oacute;n de los recursos de informaci&oacute;n con independencia de los usuarios o el SGBD, y sin realizar consideraciones sobre la eficiencia?";
 choices[53]= new Array();
 choices[53][0] = "Dise&ntilde;o conceptual";
 choices[53][1] = "Dise&ntilde;o l&oacute;gico est&aacute;ndar";
 choices[53][2] = "Dise&ntilde;o l&oacute;gico espec&iacute;fico";
 choices[53][3] = "Dise&ntilde;o preliminar";
 answers[53] = choices[53][0];
 units[53] = "57";
 comments[53] = "Id Pregunta: 6214. TICB-2009, bloque desarrollo";


//  Id pregunta: 6325 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  Para modificar la estructura de una tabla en SQL";
 choices[54]= new Array();
 choices[54][0] = "No se puede modificar la estuctura de la tabla despu&eacute;s de que se ha puesto en producci&oacute;n.";
 choices[54][1] = "Las tablas se modifican con el comando UPDATE.";
 choices[54][2] = "Las tablas se modifican con el comando ALTER.";
 choices[54][3] = "Existen distintos comandos, pero lo importante es que la tabla est&eacute; vacia.";
 answers[54] = choices[54][2];
 units[54] = "58";
 comments[54] = "Id Pregunta: 6325. ";


//  Id pregunta: 6506 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  El sistema operativo Ubuntu est&aacute; desarrollado por:";
 choices[55]= new Array();
 choices[55][0] = "Red Hat";
 choices[55][1] = "Novell";
 choices[55][2] = "Canonical";
 choices[55][3] = "MIT";
 answers[55] = choices[55][2];
 units[55] = "53";
 comments[55] = "Id Pregunta: 6506. NULL";


//  Id pregunta: 6513 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  &iquest;Cu&aacute;l no es un entorno de escritorio para Linux?";
 choices[56]= new Array();
 choices[56][0] = "KDE";
 choices[56][1] = "GNOME";
 choices[56][2] = "XCFE";
 choices[56][3] = "SUSE";
 answers[56] = choices[56][3];
 units[56] = "54";
 comments[56] = "Id Pregunta: 6513. ";


//  Id pregunta: 7159 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  En relaci&oacute;n a la administraci&oacute;n de procesos de los sistemas operativos, &iquest;en qu&eacute; consiste la planificaci&oacute;n round-robin?";
 choices[57]= new Array();
 choices[57][0] = "En asignar un tiempo de ejecuci&oacute;n a cada proceso";
 choices[57][1] = "En ejecutar primero el proceso m&aacute;s corto";
 choices[57][2] = "En asignar a cada proceso una prioridad y ejecutar el proceso que m&aacute;s prioridad tenga";
 choices[57][3] = "En ejecutar los procesos de forma aleatoria";
 answers[57] = choices[57][0];
 units[57] = "52";
 comments[57] = "Id Pregunta: 7159. Examen TIC B 2009";


//  Id pregunta: 7279 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  Una maqueta virtual se puede definir como ";
 choices[58]= new Array();
 choices[58][0] = "Un programa inform&aacute;tico que simula el funcionamiento de un terminal de un ordenador central ";
 choices[58][1] = "Un prototipo de aplicaci&oacute;n";
 choices[58][2] = "Un tipo de virtualizaci&oacute;n de servidor";
 choices[58][3] = "Un servidor de terminales";
 answers[58] = choices[58][0];
 units[58] = "119";
 comments[58] = "Id Pregunta: 7279. NULL";


//  Id pregunta: 7280 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  En un entorno de virtualizaci&oacute;n de m&aacute;quinas, &iquest;cu&aacute;l de los siguientes elementos est&aacute; m&aacute;s pr&oacute;ximo al hardware?";
 choices[59]= new Array();
 choices[59][0] = "Hipervisor";
 choices[59][1] = "VMM (Virtual Machine Monitor)";
 choices[59][2] = "Sistema operativo hospedado";
 choices[59][3] = "HBA (host Bus Adapter)";
 answers[59] = choices[59][0];
 units[59] = "119";
 comments[59] = "Id Pregunta: 7280. Examen TIC B 2009";


//  Id pregunta: 7284 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  Una de las grandes ventajas que aporta la virtualizaci&oacute;n de infraestructuras en un centro de datos es:";
 choices[60]= new Array();
 choices[60][0] = "Reducci&oacute;n de personal de operaciones";
 choices[60][1] = "Reducci&oacute;n de costes de mantenimiento preventivo";
 choices[60][2] = "Gesti&oacute;n del ciclo de vida de la informaci&oacute;n (ILM) m&aacute;s eficaz";
 choices[60][3] = "Gesti&oacute;n agrupada (pooled) de recursos a lo largo de toda la Organizaci&oacute;n";
 answers[60] = choices[60][3];
 units[60] = "119";
 comments[60] = "Id Pregunta: 7284. Examen TIC B 2009";


//  Id pregunta: 8268 AÃ±o de creación de pregunta: 2011-01-01
 questions[61]= "62)  Al hablar de virtualizaci&oacute;n de servidores, se llama hypervisor:";
 choices[61]= new Array();
 choices[61][0] = "A la capa de software sobre la que se ejecutan las m&aacute;quinas virtuales.";
 choices[61][1] = "A la aplicaci&oacute;n que monitoriza una m&aacute;quina virtual.";
 choices[61][2] = "A un producto comercial de virtualizaci&oacute;n.";
 choices[61][3] = "Al gestor de memoria de la m&aacute;quina f&iacute;sica.";
 answers[61] = choices[61][0];
 units[61] = "119";
 comments[61] = "Id Pregunta: 8268. Examen TIC A1 2010";


//  Id pregunta: 8520 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  Tenemos las entidades &quot;opositor&quot; y &quot;oposici&oacute;n&quot; y sabemos que a los opositores se les permite apuntarse a varias oposiciones distintas. Si se quisiera crear el modelo conceptual de base de datos, &iquest;qu&eacute; relaci&oacute;n crear&iacute;a?:";
 choices[62]= new Array();
 choices[62][0] = "Una relaci&oacute;n N:M.";
 choices[62][1] = "Una relaci&oacute;n 1:N.";
 choices[62][2] = "Una relaci&oacute;n 1:1.";
 choices[62][3] = "El modelo conceptual no admite relaciones, s&oacute;lo el modelo relacional lo permite. ";
 answers[62] = choices[62][0];
 units[62] = "57, 58";
 comments[62] = "Id Pregunta: 8520. Examen TIC A2 2010 interna";


//  Id pregunta: 8611 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  Si sobre el fichero &quot;ejemplo.txt&quot; queremos dar permisos totales al due&ntilde;o, de lectura y ejecuci&oacute;n al grupo y s&oacute;lo de lectura al resto de usuarios, usaremos la instrucci&oacute;n:";
 choices[63]= new Array();
 choices[63][0] = "chmod 766 ejemplo.txt";
 choices[63][1] = "chmod 751 ejemplo.txt";
 choices[63][2] = "chmod 761 ejemplo.txt";
 choices[63][3] = "chmod 754 ejemplo.txt";
 answers[63] = choices[63][3];
 units[63] = "53,54";
 comments[63] = "Id Pregunta: 8611. Examen TIC A2 2010 interna";


//  Id pregunta: 8618 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  Con el objeto de asegurar la integridad de los datos, es necesario que una de las funciones del sistema gestor de base de datos sea la gesti&oacute;n de las transacciones. &iquest;Qu&eacute; propiedades deben tener &eacute;stas?";
 choices[64]= new Array();
 choices[64][0] = "Autenticaci&oacute;n, confidencialidad, integridad y disponibilidad.";
 choices[64][1] = "Eficiencia, eficacia, rapidez y estabilidad.";
 choices[64][2] = "Atomicidad, consistencia, aislamiento y persistencia.";
 choices[64][3] = "Serializaci&oacute;n, indexaci&oacute;n, independencia y transparencia.";
 answers[64] = choices[64][2];
 units[64] = "57,58";
 comments[64] = "Id Pregunta: 8618. Examen TIC A2 2010 interna";


//  Id pregunta: 8640 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  Si tenemos las dependencias funcionales (A, B) -&gt; C, B -&gt; D y la siguiente relaci&oacute;n (A, B, C, D) donde (A, B) es la clave candidata. &iquest;Cu&aacute;l seria el resultado de aplicar la 2&ordf; forma normal?";
 choices[65]= new Array();
 choices[65][0] = "(A, B, C), (A, B, D).";
 choices[65][1] = "(A, B, C), (B, D).";
 choices[65][2] = "(A, B, C),  (A, D).";
 choices[65][3] = "Ya est&aacute; en 2FN.";
 answers[65] = choices[65][1];
 units[65] = "57, 58";
 comments[65] = "Id Pregunta: 8640. Examen TIC A2 2010 interna";


//  Id pregunta: 8641 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  En la arquitectura ANSI SQL la capacidad do modificar el esquema interno sin tener que alterar el esquema conceptual (o los externos) es lo que se conoce como:";
 choices[66]= new Array();
 choices[66][0] = "Independencia f&iacute;sica.";
 choices[66][1] = "Independencia L&oacute;gica.";
 choices[66][2] = "Integridad de la entidad";
 choices[66][3] = "Integridad referencial.";
 answers[66] = choices[66][0];
 units[66] = "57, 58";
 comments[66] = "Id Pregunta: 8641. Examen TIC A2 2010 interna";


//  Id pregunta: 8783 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  &iquest;Cu&aacute;l de las siguientes sentencias pertenece al lenguaje de definici&oacute;n de datos (LDD) de SQL?";
 choices[67]= new Array();
 choices[67][0] = "ROLLBACK";
 choices[67][1] = "UPDATE";
 choices[67][2] = "GRANT";
 choices[67][3] = "TRUNCATE";
 answers[67] = choices[67][3];
 units[67] = "57, 58";
 comments[67] = "Id Pregunta: 8783. Examen UPM A2 2011";


//  Id pregunta: 8921 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  El proceso de normalizaci&oacute;n tiene por objeto";
 choices[68]= new Array();
 choices[68][0] = "Establecer reglas de nombrado uniformes para las entidades, los atributos y las relaciones";
 choices[68][1] = "Obtener el dise&ntilde;o f&iacute;sico del modelo de datos";
 choices[68][2] = "Eliminar las dependencias entre atributos que originen anomal&iacute;as en el tratamiento de los datos";
 choices[68][3] = "Homogeneizar el n&uacute;mero de dimensiones de las tablas de la base de datos";
 answers[68] = choices[68][2];
 units[68] = "58";
 comments[68] = "Id Pregunta: 8921. Operador Ayto. Madrid 2010";


//  Id pregunta: 8952 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  El manejador de dispositivos es:";
 choices[69]= new Array();
 choices[69][0] = "Un p rograma de usuario final";
 choices[69][1] = "Hardware que controla un dispositivo";
 choices[69][2] = "Software que controla un dispositivo";
 choices[69][3] = "Todas las anteriores son ciertas";
 answers[69] = choices[69][2];
 units[69] = "53,54";
 comments[69] = "Id Pregunta: 8952. ";


//  Id pregunta: 8955 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  En el arranque en Linux &iquest;cu&aacute;l de los siguientes procesos se ejecuta en primer lugar?:";
 choices[70]= new Array();
 choices[70][0] = "page daemon";
 choices[70][1] = "swapper";
 choices[70][2] = "init";
 choices[70][3] = "sbin";
 answers[70] = choices[70][1];
 units[70] = "53";
 comments[70] = "Id Pregunta: 8955. ";


//  Id pregunta: 8982 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  &iquest;Qu&eacute; es procfs en Unix?";
 choices[71]= new Array();
 choices[71][0] = "Un sistema de ficheros especial con informaci&oacute;n sobre procesos y otros recursos del sistema";
 choices[71][1] = "&quot;La versi&oacute;n profesional del sistema de ficheros &quot;&quot;C&quot;&quot; (cfs)&quot;";
 choices[71][2] = "Un comando que devuelve informaci&oacute;n sobre los procesos relacionados con el sistema de ficheros";
 choices[71][3] = "Nada de lo anterior";
 answers[71] = choices[71][0];
 units[71] = "54";
 comments[71] = "Id Pregunta: 8982. ";


//  Id pregunta: 8983 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  &iquest;Qu&eacute; es Windows PowerShell?";
 choices[72]= new Array();
 choices[72][0] = "El interfaz del sistema de gesti&oacute;n de energ&iacute;a de Windows";
 choices[72][1] = "Una interfaz de comandos y un lenguaje de scripting, integrado en .NET y orientado a los administradores de sistemas Windows";
 choices[72][2] = "&quot;Una versi&oacute;n para Windows del comando &quot;&quot;ps&quot;&quot; de Unix&quot;";
 choices[72][3] = "Nada de lo anterior";
 answers[72] = choices[72][1];
 units[72] = "56";
 comments[72] = "Id Pregunta: 8983. ";


//  Id pregunta: 9243 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  &iquest;Qu&eacute; es main en relaci&oacute;n a Ubuntu?";
 choices[73]= new Array();
 choices[73][0] = "Contiene s&oacute;lo los paquetes que cumplen los requisitos de la licencia de Ubuntu.";
 choices[73][1] = "Contiene los programas soportados por los desarrollores de Ubuntu que no est&aacute;n disponibles bajo ning&uacute;n tipo de licencia libre.";
 choices[73][2] = "Son los programas que no reciben apoyo por parte del equipo de Ubuntu.";
 choices[73][3] = "Son programas comerciales.";
 answers[73] = choices[73][0];
 units[73] = "54";
 comments[73] = "Id Pregunta: 9243. ";


//  Id pregunta: 9252 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  &iquest;Cu&aacute;l es la relaci&oacute;n entre trabajos, procesos, hilos y fibras en Windows?";
 choices[74]= new Array();
 choices[74][0] = "Los trabajos contienen procesos.";
 choices[74][1] = "Los procesos contienen hilos.";
 choices[74][2] = "Los hilos contienen fibras.";
 choices[74][3] = "Todas son correctas.";
 answers[74] = choices[74][3];
 units[74] = "56";
 comments[74] = "Id Pregunta: 9252. ";


//  Id pregunta: 9255 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  &iquest;Qu&eacute; es BitLocker?";
 choices[75]= new Array();
 choices[75][0] = "Una funcionalidad de Windows que permite el cifrado de discos duros completos.";
 choices[75][1] = "Se proporciona desde Windows Vista.";
 choices[75][2] = "Con Windows 7 incorpora la funcionalidad de BiLocker-ToGo para dispositivos USB.";
 choices[75][3] = "Todas son correctas";
 answers[75] = choices[75][3];
 units[75] = "56";
 comments[75] = "Id Pregunta: 9255. ";


//  Id pregunta: 9274 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  Se&ntilde;ale la frase ERR&Oacute;NEA acerca de los sistemas de tiempo compartido.";
 choices[76]= new Array();
 choices[76][0] = "El algoritmo de round robin se basa en asignar por turno per&iacute;odos de tiempo limitados a cada uno de los procesos";
 choices[76][1] = "El algoritmo del banquero impide asignar a un proceso un recurso de un tipo del que ya no queden m&aacute;s recursos libres.";
 choices[76][2] = "El aplazamiento indefinido se produce cuando un proceso solicita un recurso que otro proceso ha dejado de usar sin marcarlo como &ldquo;desocupado&rdquo;.";
 choices[76][3] = "El mecanismo de no apropiaci&oacute;n evita que puedan producirse &ldquo;deadlocks&rdquo; entre procesos.";
 answers[76] = choices[76][3];
 units[76] = "53";
 comments[76] = "Id Pregunta: 9274. Examen TIC-A1 2011";


//  Id pregunta: 9278 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  Indique la frase EQUIVOCADA acerca del sistema de archivos de Windows";
 choices[77]= new Array();
 choices[77][0] = "NTFS es el sistema de archivo por defecto en Windows XP y Windows 7 y utiliza direcciones de bloques (LCN) de 64 bits";
 choices[77][1] = "Los archivos NTFS presentan varios atributos, cada uno de los cuales se representan con una secuencia de bytes.";
 choices[77][2] = "Una partici&oacute;n de disco NTFS se organiza como una secuencia lineal de bloques de tama&ntilde;o fijo.";
 choices[77][3] = "Un volumen NTFS cuenta con dos tablas MFT, una para describir los archivos (MTF-F) y otra para los directorios (MTF-D).";
 answers[77] = choices[77][3];
 units[77] = "56";
 comments[77] = "Id Pregunta: 9278. Examen TIC-A1 2011";


//  Id pregunta: 9454 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  Seg&uacute;n Codd, una entidad en la que todos los atributos dependen funcionalmente de la clave est&aacute;, al menos, en:";
 choices[78]= new Array();
 choices[78][0] = "Primera Forma Normal.";
 choices[78][1] = "Segunda Forma Normal.";
 choices[78][2] = "Tercera Forma Normal.";
 choices[78][3] = "Forma Normal de Boyce-Codd.";
 answers[78] = choices[78][0];
 units[78] = "58";
 comments[78] = "Id Pregunta: 9454. NULL";


//  Id pregunta: 9457 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  Seg&uacute;n Codd, una entidad que no contiene grupos repetitivos est&aacute;, al menos, en:";
 choices[79]= new Array();
 choices[79][0] = "Primera Forma Normal.";
 choices[79][1] = "Segunda Forma Normal.";
 choices[79][2] = "Tercera Forma Normal.";
 choices[79][3] = "Forma Normal de Boyce-Codd.";
 answers[79] = choices[79][0];
 units[79] = "58";
 comments[79] = "Id Pregunta: 9457. ";


//  Id pregunta: 9605 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  &iquest;Qu&eacute; base de datos usa un formato de almacenamiento XML?";
 choices[80]= new Array();
 choices[80][0] = "Oracle";
 choices[80][1] = "MongoDB";
 choices[80][2] = "eXist";
 choices[80][3] = "Redis";
 answers[80] = choices[80][2];
 units[80] = "58";
 comments[80] = "Id Pregunta: 9605. NULL";


//  Id pregunta: 9610 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  &iquest;Qu&eacute; versi&oacute;n de SQL permiti&oacute; por primera vez manipular y publicar datos XML?";
 choices[81]= new Array();
 choices[81][0] = "SQL 2000";
 choices[81][1] = "SQL-2003";
 choices[81][2] = "SQL-2006";
 choices[81][3] = "SQL-2008";
 answers[81] = choices[81][2];
 units[81] = "58";
 comments[81] = "Id Pregunta: 9610. NULL";


//  Id pregunta: 9615 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  &iquest;C&oacute;mo se llama la interfaz gr&aacute;fica del sistema operativo Mac OS X?";
 choices[82]= new Array();
 choices[82][0] = "Safari";
 choices[82][1] = "Lion";
 choices[82][2] = "Aqua";
 choices[82][3] = "Terra";
 answers[82] = choices[82][2];
 units[82] = "52";
 comments[82] = "Id Pregunta: 9615. ";


//  Id pregunta: 9633 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  En un sistema UNIX, &iquest;cu&aacute;l es la diferencia entre los ficheros /etc/passwd y /etc/shadow?";
 choices[83]= new Array();
 choices[83][0] = "/etc/shadow es una copia exacta del fichero /etc/password pero s&oacute;lo visible por root";
 choices[83][1] = "/etc/password alberga las passwords de los usuarios y /etc/shadow alberga la historia de comandos realizadas por los mismos";
 choices[83][2] = "/etc/passwd es legible por todos los usuarios, mientras que /etc/shadow es legible s&oacute;lo por root";
 choices[83][3] = "/etc/passwd alberga las passwords de los usuarios mientras que /etc/shadow alberga el nombre de los usuarios";
 answers[83] = choices[83][2];
 units[83] = "53";
 comments[83] = "Id Pregunta: 9633. Examen TIC A2 2013";


//  Id pregunta: 9634 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  &iquest;C&uacute;al es la interfaz gr&aacute;fica de usuario en una instalaci&oacute;n de Windows 2012 Server core?";
 choices[84]= new Array();
 choices[84][0] = "MetroUI";
 choices[84][1] = "Metacity";
 choices[84][2] = "KDE";
 choices[84][3] = "Ninguna";
 answers[84] = choices[84][3];
 units[84] = "56";
 comments[84] = "Id Pregunta: 9634. ";


//  Id pregunta: 9638 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  &iquest;Qu&eacute; se conoce como CPU Throttling en IIS 8.0?";
 choices[85]= new Array();
 choices[85][0] = "A reducir autom&aacute;ticamente la frecuencia de trabajo de la CPU para evitar el calentamiento de la m&aacute;quina";
 choices[85][1] = "A la asignaci&oacute;n de CPU a cada proceso en un entorno multiprocesador  ";
 choices[85][2] = "A los fallos de CPU ante una sobrecarga de trabajo";
 choices[85][3] = "A la limitaci&oacute;n autom&aacute;tica de los recursos de CPU entre los tenants del sistema";
 answers[85] = choices[85][3];
 units[85] = "56";
 comments[85] = "Id Pregunta: 9638. La respuesta A es el concepto original de CPU throttling, la D es lo que se entiende en un entorno de hosting";


//  Id pregunta: 9775 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  En el sistema operativo Linux, &iquest;cu&aacute;l de las siguientes opciones busca la palabra &quot;libro&quot; dentro de ficheros?";
 choices[86]= new Array();
 choices[86][0] = "find -type f | xwygs grep &quot;libro&quot;";
 choices[86][1] = "find -type f | xaygs grep &quot;libro&quot; ";
 choices[86][2] = "find -type f | xargs grep &quot;libro&quot; ";
 choices[86][3] = "find -type f | xargp grep &quot;libro&quot; ";
 answers[86] = choices[86][2];
 units[86] = "54";
 comments[86] = "Id Pregunta: 9775. Examen TIC A2 2013 - Duplicada";


//  Id pregunta: 9780 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  &iquest;Cu&aacute;l de las siguientes herramientas utiliza un SGBD (sistema de gesti&oacute;n de bases de datos) para asegurar la atomicidad y persistencia de las transacciones?";
 choices[87]= new Array();
 choices[87][0] = "M&oacute;dulo de comprobaci&oacute;n de la integridad. ";
 choices[87][1] = "El esquema conceptual. ";
 choices[87][2] = "Fichero diario. ";
 choices[87][3] = "Triggers. ";
 answers[87] = choices[87][2];
 units[87] = "57";
 comments[87] = "Id Pregunta: 9780. Examen TIC A2 2013";


//  Id pregunta: 9923 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  En una transacci&oacute;n en un Sistema de Gesti&oacute;n de Bases de Datos (SGBD), &iquest;qu&eacute; se entiende por el punto de integridad?";
 choices[88]= new Array();
 choices[88][0] = "El momento despu&eacute;s en el que se inicia la transacci&oacute;n.";
 choices[88][1] = "El estado de la base de datos en el momento en que se inicia la transacci&oacute;n.";
 choices[88][2] = "Hacer un rollback en el caso de que haya un problema antes de completar la transacci&oacute;n.";
 choices[88][3] = "El retorno con la confirmaci&oacute;n de que la transacci&oacute;n se ha completado con &eacute;xito.";
 answers[88] = choices[88][1];
 units[88] = "57";
 comments[88] = "Id Pregunta: 9923. TIC A2, Examen 2013";


//  Id pregunta: 10168 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  En relaci&oacute;n con los operandos del &aacute;lgebra relacional, se cumple que:";
 choices[89]= new Array();
 choices[89][0] = "La Uni&oacute;n de las relaciones R y S puede aplicarse a&uacute;n cuando R y S no tengan igual grado y/o compatibilidad de dominios";
 choices[89][1] = "El Outer Join incluye en la relaci&oacute;n resultante las tuplas de una o ambas relaciones que en los atributos comunes no tienen valores iguales o correspondientes";
 choices[89][2] = "El grado de la relaci&oacute;n resultante de la Uni&oacute;n Natural o Natural Join entre dos relaciones R y S es igual al grado de R + el grado de S";
 choices[89][3] = "La intersecci&oacute;n es un operador fundamental del &aacute;lgebra relacional";
 answers[89] = choices[89][1];
 units[89] = "58";
 comments[89] = "Id Pregunta: 10168. ";


//  Id pregunta: 10169 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  En una base de datos Oracle, &iquest;qu&eacute; afirmaci&oacute;n es correcta en relaci&oacute;n con las vistas materializadas?";
 choices[90]= new Array();
 choices[90][0] = "La materializaci&oacute;n de una vista es llevada a cabo por el usuario mediante la exportaci&oacute;n a disco de los datos devueltos por la vista";
 choices[90][1] = "Oracle no utiliza el t&eacute;rmino de &quot;vista materializada&quot;, si no el de &quot;snapshot&quot;";
 choices[90][2] = "Se define de manera similar a una vista com&uacute;n pero, en lugar de almacenar s&oacute;lo la definici&oacute;n de la vista, almacena el resultado de la consulta";
 choices[90][3] = "Desde la versi&oacute;n 8i, la nueva caracter&iacute;stica &quot;QUERY REWRITE&quot; otorga mayor funcionalidad a las snapshots frente a las vistas materializadas";
 answers[90] = choices[90][2];
 units[90] = "58";
 comments[90] = "Id Pregunta: 10169. ";


//  Id pregunta: 10171 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  En el lenguaje SQL, la funci&oacute;n de agregado COUNT, aplicada sobre una columna, contabiliza&hellip;";
 choices[91]= new Array();
 choices[91][0] = "N&ordm; de filas recuperadas por la consulta ";
 choices[91][1] = "N&ordm; de filas recuperadas por la consulta, exceptuando aquellas en que la columna referenciada tenga valor nulo";
 choices[91][2] = "N&ordm; de filas recuperadas por la consulta, incluyendo valores duplicados o nulos en la columna";
 choices[91][3] = "Si la columna sobre la que se aplica tiene valor nulo en todas las filas, la funci&oacute;n COUNT devolver&aacute; &quot;nulo&quot;";
 answers[91] = choices[91][1];
 units[91] = "58";
 comments[91] = "Id Pregunta: 10171. ";


//  Id pregunta: 10188 AÃ±o de creación de pregunta: 2014-01-01
 questions[92]= "93)  Entre los modelos de bases de datos prerelacionales, se verifica que:";
 choices[92]= new Array();
 choices[92][0] = "El modelo jer&aacute;rquico es incapaz de representar las relaciones reflexivas o las relaciones N:M";
 choices[92][1] = "Los modelos jer&aacute;rquico y CODASYL son en esencia modelos de datos en red, que aplican ciertas restricciones";
 choices[92][2] = "El Conjunto o SET es uno de los elementos m&aacute;s importantes del modelo CODASYL, como elemento b&aacute;sico para la representaci&oacute;n de interrelaciones 1:N y por tanto 1:1.";
 choices[92][3] = "Todas las anteriores";
 answers[92] = choices[92][3];
 units[92] = "57";
 comments[92] = "Id Pregunta: 10188. ";


//  Id pregunta: 10788 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  En un sistema de memoria paginada, la tabla donde se almacena la correspondencia entre direcciones l&oacute;gicas y f&iacute;sicas, se denomina:";
 choices[93]= new Array();
 choices[93][0] = "TLB: Translation Lookaside Buffer.";
 choices[93][1] = "TTL: Translation Table Location.";
 choices[93][2] = "ATL: Address Translation Lookup.";
 choices[93][3] = "ATB: Address Table Buffer.";
 answers[93] = choices[93][0];
 units[93] = "52";
 comments[93] = "Id Pregunta: 10788. Examen GSI 2014";


//  Id pregunta: 10791 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l de los siguientes comandos Unix impide que el archivo de nombre &quot;miarchivo&quot; sea modificado y ejecutado por el grupo al que pertenece dicho archivo?";
 choices[94]= new Array();
 choices[94][0] = "chmod 766 miarchivo";
 choices[94][1] = "chmod a+xw miarchivo";
 choices[94][2] = "chmod 644 miarchivo";
 choices[94][3] = "chmod u=rwx go=wx miarchivo";
 answers[94] = choices[94][2];
 units[94] = "53, 54";
 comments[94] = "Id Pregunta: 10791. Examen GSI 2014";


//  Id pregunta: 10870 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  En Linux, la primera partici&oacute;n l&oacute;gica en el disco duro maestro IDE del canal primario se identifica con:";
 choices[95]= new Array();
 choices[95][0] = "/dev/sda1";
 choices[95][1] = "/dev/hda1";
 choices[95][2] = "/dev/hda5";
 choices[95][3] = "/dev/hda2";
 answers[95] = choices[95][2];
 units[95] = "53, 54";
 comments[95] = "Id Pregunta: 10870. Examen GSI 2014";


//  Id pregunta: 10874 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Cu&aacute;l de las siguientes NO es un tipo de declaraci&oacute;n v&aacute;lida en un trabajo basado en JCL:";
 choices[96]= new Array();
 choices[96][0] = "JOB";
 choices[96][1] = "COMMENT";
 choices[96][2] = "EXEC";
 choices[96][3] = "DD";
 answers[96] = choices[96][1];
 units[96] = "57, 58";
 comments[96] = "Id Pregunta: 10874. Examen GSI 2014";


//  Id pregunta: 10930 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  En SQL Server, la cardinalidad m&aacute;xima de una tabla de hechos que es la tabla central de n tablas dimensionales es:";
 choices[97]= new Array();
 choices[97][0] = "La multiplicaci&oacute;n de las cardinalidades de cada una de las n tablas dimensionales.";
 choices[97][1] = "La suma de las cardinalidades de cada una de las n tablas dimensionales.";
 choices[97][2] = "La mayor de las cardinalidades presentes en las n tablas dimensionales.";
 choices[97][3] = "La mayor de las cardinalidades presentes en las n tablas dimensionales elevado a n.";
 answers[97] = choices[97][0];
 units[97] = "57";
 comments[97] = "Id Pregunta: 10930. TIC A1 AGE 2014";


//  Id pregunta: 11133 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Cu&aacute;l de las siguientes versiones del sistema de archivos UNIX fue creada por ATT?";
 choices[98]= new Array();
 choices[98][0] = "Virtual File System";
 choices[98][1] = "Fast File System";
 choices[98][2] = "Network File System";
 choices[98][3] = "Remote File System";
 answers[98] = choices[98][2];
 units[98] = "53";
 comments[98] = "Id Pregunta: 11133. ";


//  Id pregunta: 11134 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Cu&aacute;l de las siguientes no es una Shell de Linux?";
 choices[99]= new Array();
 choices[99][0] = "Shell X";
 choices[99][1] = "Shell de Korn";
 choices[99][2] = "Shell de Bourne";
 choices[99][3] = "Shell C";
 answers[99] = choices[99][0];
 units[99] = "54";
 comments[99] = "Id Pregunta: 11134. ";


