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

//  Id pregunta: 753 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  Un ejemplo de herramienta Open Source de administraci&oacute;n remota de sistemas Unix/Linux es:";
 choices[0]= new Array();
 choices[0][0] = "WebMin";
 choices[0][1] = "WMI (Web Management &amp; Instrumentation)";
 choices[0][2] = "syslog";
 choices[0][3] = "Performance Monitor";
 answers[0] = choices[0][0];
 units[0] = "53,61,62";
 comments[0] = "Id Pregunta: 753. ";


//  Id pregunta: 762 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  La orden chmod";
 choices[1]= new Array();
 choices[1][0] = "bloquea un archivo en windows";
 choices[1][1] = "cambia los permisos de un achivo en linux - unix";
 choices[1][2] = "crea un directorio modificable en unix";
 choices[1][3] = "Ninguna de las anteriores";
 answers[1] = choices[1][1];
 units[1] = "52,53";
 comments[1] = "Id Pregunta: 762. ";


//  Id pregunta: 800 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;Qu&eacute; versi&oacute;n de la API JDBC de Sun incorpora un  gestor de 'pool' de conexiones con el sistema gestor de base de datos?:";
 choices[2]= new Array();
 choices[2][0] = "JDBC 1.0";
 choices[2][1] = "JDBC 1.5";
 choices[2][2] = "JDBC 1.8";
 choices[2][3] = "JDBC 2.0";
 answers[2] = choices[2][3];
 units[2] = "57";
 comments[2] = "Id Pregunta: 800. ";


//  Id pregunta: 806 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  A la estructura en disco que contiene la informaci&oacute;n de control de un fichero en un sistema de ficheros Unix se le denomina:";
 choices[3]= new Array();
 choices[3][0] = "I-nodo";
 choices[3][1] = "Cluster";
 choices[3][2] = "Bloque de control";
 choices[3][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[3] = choices[3][0];
 units[3] = "52,53";
 comments[3] = "Id Pregunta: 806. ";


//  Id pregunta: 811 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;Cu&aacute;l de los siguientes sistemas operativos no es un sistema multiusuario que permite a sus usuarios iniciar sesiones en ellos mediante terminales?";
 choices[4]= new Array();
 choices[4][0] = "Unix";
 choices[4][1] = "Z/OS";
 choices[4][2] = "Microsoft Windows";
 choices[4][3] = "Todas los sistemas anteriores lo permiten.";
 answers[4] = choices[4][3];
 units[4] = "52";
 comments[4] = "Id Pregunta: 811. ";


//  Id pregunta: 826 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;C&oacute;mo se llama al m&oacute;dulo, del cual una &uacute;nica copia cargada en memoria puede ser utilizada simult&aacute;neamente por  varios usuarios?:";
 choices[5]= new Array();
 choices[5][0] = "M&oacute;dulo concurrente";
 choices[5][1] = "M&oacute;dulo compartido";
 choices[5][2] = "M&oacute;dulo reentrante";
 choices[5][3] = "M&oacute;dulo reusable";
 answers[5] = choices[5][2];
 units[5] = "52";
 comments[5] = "Id Pregunta: 826. ";


//  Id pregunta: 832 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Cu&aacute;l de las alternativas siguientes no corresponde a un operador fundamental del &aacute;lgebra relacional?:";
 choices[6]= new Array();
 choices[6][0] = "Join";
 choices[6][1] = "Selecci&oacute;n";
 choices[6][2] = "Diferencia";
 choices[6][3] = "Proyecci&oacute;n";
 answers[6] = choices[6][0];
 units[6] = "57";
 comments[6] = "Id Pregunta: 832. ";


//  Id pregunta: 834 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta respecto a los procedimientos almacenados en los sistemas de gesti&oacute;n de bases de datos relacionales?:";
 choices[7]= new Array();
 choices[7][0] = "Es un conjunto de instrucciones y l&oacute;gica de procedimiento de SQL compilado, verificado y almacenado en base de datos";
 choices[7][1] = "Instrucciones SQL embebidas en el c&oacute;digo de los programas y convertidas en un plan de acceso en el tiempo de preparaci&oacute;n del programa";
 choices[7][2] = "Instrucciones SQL embebidas en el c&oacute;digo de los programas y convertidas en un plan de acceso en el tiempo de ejecuci&oacute;n del programa";
 choices[7][3] = "Los procedimientos almacenados no admiten par&aacute;metros de entrada";
 answers[7] = choices[7][0];
 units[7] = "57";
 comments[7] = "Id Pregunta: 834. ";


//  Id pregunta: 852 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Cu&aacute;l de las siguientes no es una versi&oacute;n propietaria del sistema operativo Unix?:";
 choices[8]= new Array();
 choices[8][0] = "HP-UX";
 choices[8][1] = "Solaris";
 choices[8][2] = "IRIX";
 choices[8][3] = "Todas las anteriores lo son";
 answers[8] = choices[8][3];
 units[8] = "52, 53";
 comments[8] = "Id Pregunta: 852. ";


//  Id pregunta: 963 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  Considere un sistema con memoria virtual cuya CPU tiene una utilizaci&oacute;n del 15% y donde el dispositivo de paginaci&oacute;n est&aacute; ocupado el 97% del tiempo. &iquest;Qu&eacute; indican estas medidas?:";
 choices[9]= new Array();
 choices[9][0] = "El grado de multiprogramaci&oacute;n es demasiado bajo";
 choices[9][1] = "El dispositivo de paginaci&oacute;n es demasiado peque&ntilde;o";
 choices[9][2] = "La CPU es demasiado lenta";
 choices[9][3] = "El grado de multiprogramaci&oacute;n es demasiado alto";
 answers[9] = choices[9][3];
 units[9] = "52";
 comments[9] = "Id Pregunta: 963. ";


//  Id pregunta: 966 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  C-Shell es:";
 choices[10]= new Array();
 choices[10][0] = "Una parte del sistema operativo MVS";
 choices[10][1] = "Un int&eacute;rprete de comandos del sistema operativo Unix";
 choices[10][2] = "Un compilador de C";
 choices[10][3] = "Nada de lo anterior";
 answers[10] = choices[10][1];
 units[10] = "54";
 comments[10] = "Id Pregunta: 966. NULL";


//  Id pregunta: 1030 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Frecuencia de paginaci&oacute;n es:";
 choices[11]= new Array();
 choices[11][0] = "N&uacute;mero de peticiones de servicio por unidad de tiempo";
 choices[11][1] = "N&uacute;mero de programas sacados de memoria por unidad de tiempo";
 choices[11][2] = "N&uacute;mero de trabajos de un programa en un entorno de memoria virtual por unidad de tiempo";
 choices[11][3] = "N&uacute;mero de fallos de p&aacute;gina que se producen por unidad de tiempo";
 answers[11] = choices[11][3];
 units[11] = "52";
 comments[11] = "Id Pregunta: 1030. ";


//  Id pregunta: 1106 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  En la estructura del sistema operativo Unix:";
 choices[12]= new Array();
 choices[12][0] = "Una de las funciones del kernel o n&uacute;cleo es la de gestionar el sistema de archivos";
 choices[12][1] = "El tratamiento de cualquier dispositivo perif&eacute;rico como un archivo";
 choices[12][2] = "La shell muestra la interfaz entre el Unix y el usuario, incorpora una serie de utilidades para realizar las tareas solicitadas por el usuario";
 choices[12][3] = "Dentro del kernel existen dos subsistemas: la interfaz de llamadas al sistema, y el planificador (scheduler)";
 answers[12] = choices[12][1];
 units[12] = "53";
 comments[12] = "Id Pregunta: 1106. ";


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


//  Id pregunta: 1160 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  En Unix un proceso puede crear otro proceso Unix si:";
 choices[14]= new Array();
 choices[14][0] = "Tiene privilegios suficientes";
 choices[14][1] = "Tiene mayor prioridad que un determinado umbral";
 choices[14][2] = "Tiene suficientes recursos disponibles";
 choices[14][3] = "No puede ";
 answers[14] = choices[14][2];
 units[14] = "53";
 comments[14] = "Id Pregunta: 1160. ";


//  Id pregunta: 1164 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  En Windows 200x, los controladores de un dominio:";
 choices[15]= new Array();
 choices[15][0] = "Uno es primario (PDC) y los dem&aacute;s secundarios (BDC)";
 choices[15][1] = "Son todos secundarios, y asumen el rol de primario solo cuando llega una petici&oacute;n, volviendo despu&eacute;s a ser secundarios";
 choices[15][2] = "Hay varios primarios, y varios secundarios";
 choices[15][3] = "Todos son primarios";
 answers[15] = choices[15][3];
 units[15] = "56";
 comments[15] = "Id Pregunta: 1164. ";


//  Id pregunta: 1173 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  Identifique las dos versiones hist&oacute;ricas generadas de Unix al final de los a&ntilde;os 80, motivadas por la coexistencia de dos desarrollos en paralelo:";
 choices[16]= new Array();
 choices[16][0] = "System V y BSD";
 choices[16][1] = "System IV y System V";
 choices[16][2] = "System V y Posix";
 choices[16][3] = "Posix y Motif";
 answers[16] = choices[16][0];
 units[16] = "53";
 comments[16] = "Id Pregunta: 1173. ";


//  Id pregunta: 1194 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Indique la respuesta falsa relativa a la monitorizaci&oacute;n del sistema operativo:";
 choices[17]= new Array();
 choices[17][0] = "Se puede hacer en tiempo real utilizando monitores del sistema";
 choices[17][1] = "Incluye herramientas de seguridad para asignar o denegar permisos de usuario en el sistema";
 choices[17][2] = "Se puede hacer a posteriori, utilizando herramientas que realicen an&aacute;lisis estad&iacute;sticos de los logs del sistema";
 choices[17][3] = "Permite detectar los cuellos de botella del sistema";
 answers[17] = choices[17][1];
 units[17] = "52";
 comments[17] = "Id Pregunta: 1194. ";


//  Id pregunta: 1225 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  La instrucci&oacute;n &quot;SELECT DISTINCT&quot; en SQL:";
 choices[18]= new Array();
 choices[18][0] = "Devuelve los resultados de la consulta, eliminando los duplicados";
 choices[18][1] = "Devuelve los datos de la tabla que no estaban en la consulta inmediatamente anterior";
 choices[18][2] = "Permite obtener los datos clave que distinguen a una fila de otra";
 choices[18][3] = "Todas las anteriores respuestas son falsas";
 answers[18] = choices[18][0];
 units[18] = "58";
 comments[18] = "Id Pregunta: 1225. ";


//  Id pregunta: 1286 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  Los tipos de entidad dentro de un modelo entidad/asociaci&oacute;n son: ";
 choices[19]= new Array();
 choices[19][0] = "Regulares y d&eacute;biles";
 choices[19][1] = "Regulares e irregulares";
 choices[19][2] = "Externas, internas, regulares y d&eacute;biles";
 choices[19][3] = "Ninguna de las anteriores.";
 answers[19] = choices[19][0];
 units[19] = "58";
 comments[19] = "Id Pregunta: 1286. ";


//  Id pregunta: 1292 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  ODBC:";
 choices[20]= new Array();
 choices[20][0] = "Es un conjunto de drivers que permiten el acceso a datos heterog&eacute;neos";
 choices[20][1] = "Son drivers, exclusivos de Windows, para el acceso a base de datos";
 choices[20][2] = "Es la tecnologia empleada por Microsoft Access para gestionar los datos";
 choices[20][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[20] = choices[20][0];
 units[20] = "58";
 comments[20] = "Id Pregunta: 1292. ";


//  Id pregunta: 1297 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  Para cuantificar el movimiento existente entre la entrada a una base de datos orientada a objetos y la salida se emplean dos sistemas. El denominado 'din&aacute;mica d&eacute;bil' se caracteriza por:";
 choices[21]= new Array();
 choices[21][0] = "Considerar la creaci&oacute;n y destrucci&oacute;n de objetos";
 choices[21][1] = "Definir el tiempo de vida de los objetos como el intervalo de existencia asociado a los mismos";
 choices[21][2] = "Reflejar el movimiento y cambios de valor de los atributos variables";
 choices[21][3] = "Modificar la sociedad de objetos entre s&iacute;, pero no la observabilidad de los mismos";
 answers[21] = choices[21][2];
 units[21] = "57";
 comments[21] = "Id Pregunta: 1297. ";


//  Id pregunta: 1310 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Por clave ajena se entiende:";
 choices[22]= new Array();
 choices[22][0] = "Un conjunto no vacio de atributos de una relaci&oacute;n";
 choices[22][1] = "Un atributo no principal de una relaci&oacute;n que no tiene valor nulo";
 choices[22][2] = "Un descriptor de una relaci&oacute;n, cuyos valores coinciden con los valores de la clave primaria de otra relaci&oacute;n";
 choices[22][3] = "Es el atributo de una relaci&oacute;n que garantiza la integridad de la entidad";
 answers[22] = choices[22][2];
 units[22] = "58";
 comments[22] = "Id Pregunta: 1310. ";


//  Id pregunta: 1402 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Un sistema que reparte un quantum de procesador entre sus usuarios interactivos podr&iacute;a calificarse de:";
 choices[23]= new Array();
 choices[23][0] = "Tiempo compartido";
 choices[23][1] = "Tiempo real";
 choices[23][2] = "Batch";
 choices[23][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[23] = choices[23][0];
 units[23] = "52";
 comments[23] = "Id Pregunta: 1402. ";


//  Id pregunta: 1468 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  La ley de Fitt, en el contexto del dise&ntilde;o de interfaces de usuario, nos dice que:";
 choices[24]= new Array();
 choices[24][0] = "si algo del interfaz puede dise&ntilde;arse mal, se dise&ntilde;ar&aacute; mal y el usuario lo rechazar&aacute;";
 choices[24][1] = "con el 20% del trabajo se realiza el 80% de la interfaz";
 choices[24][2] = "con el 80% del dise&ntilde;o se ocupa el 20% del trabajo";
 choices[24][3] = "el tiempo en localizar un objetivo visual en el interfaz es una funci&oacute;n de la distancia y el tama&ntilde;o del objetivo";
 answers[24] = choices[24][3];
 units[24] = "52";
 comments[24] = "Id Pregunta: 1468. ";


//  Id pregunta: 1520 AÃ±o de creación de pregunta: 2003-01-01
 questions[25]= "26)  C&oacute;mo objetos de una base de datos ORACLE, &iquest;cu&aacute;l es la diferencia principal entre una funci&oacute;n y un procedimiento?:";
 choices[25]= new Array();
 choices[25][0] = "Una funci&oacute;n no puede ejecutarse de forma nativa; un procedimiento si.";
 choices[25][1] = "Una funci&oacute;n puede invocar otra funci&oacute;n; un procedimiento no.";
 choices[25][2] = "Una funci&oacute;n est&aacute; almacenada en la base de datos; un procedimiento no.";
 choices[25][3] = "Una funci&oacute;n puede devolver un valor al programa que la invoca; un procedimiento no.";
 answers[25] = choices[25][3];
 units[25] = "58";
 comments[25] = "Id Pregunta: 1520. Junta Andaluc&iacute;a";


//  Id pregunta: 1527 AÃ±o de creación de pregunta: 2003-01-01
 questions[26]= "27)  El comando de SQL ' DELETE', &iquest;qu&eacute; hace?";
 choices[26]= new Array();
 choices[26][0] = "Borra una tabla determinada.";
 choices[26][1] = "Borra un &iacute;ndice de una tabla.";
 choices[26][2] = "Borra valores de una tabla.";
 choices[26][3] = "Borra tanto valores de una tabla, la tabla entera como &iacute;ndices de una tabla seg&uacute;n sea la sintaxis de la sentencia SQL.";
 answers[26] = choices[26][2];
 units[26] = "58";
 comments[26] = "Id Pregunta: 1527. ";


//  Id pregunta: 1533 AÃ±o de creación de pregunta: 2003-01-01
 questions[27]= "28)  &iquest; Cu&aacute;l de las siguientes no es una herramienta de copia remota de ficheros ?";
 choices[27]= new Array();
 choices[27][0] = "rcp";
 choices[27][1] = "rsync";
 choices[27][2] = "ftp";
 choices[27][3] = "vtam";
 answers[27] = choices[27][3];
 units[27] = "54";
 comments[27] = "Id Pregunta: 1533. NULL";


//  Id pregunta: 1545 AÃ±o de creación de pregunta: 2003-01-01
 questions[28]= "29)  &iquest; Qu&eacute; escritorio de software libre utiliza CORBA como mecanismo de IPC ?";
 choices[28]= new Array();
 choices[28][0] = "KDE";
 choices[28][1] = "GNOME";
 choices[28][2] = "ambos ";
 choices[28][3] = "Ninguno de los 2";
 answers[28] = choices[28][1];
 units[28] = "53,61";
 comments[28] = "Id Pregunta: 1545. ";


//  Id pregunta: 1547 AÃ±o de creación de pregunta: 2003-01-01
 questions[29]= "30)  &iquest;C&oacute;mo se crea un &iacute;ndice para una tabla?";
 choices[29]= new Array();
 choices[29][0] = "Se crea siempre en la misma sentencia en que se crea la tabla.";
 choices[29][1] = "Se crea siempre autom&aacute;ticamente sobre la clave primaria al crear la tabla.";
 choices[29][2] = "Con CREATE INDEX nombre-&iacute;ndice ON nombre-tabla (atrib [,atrib]*).";
 choices[29][3] = "Con INSERT INDEX nombre-&iacute;ndice ON nombre-tabla (atrib [,atrib]*).";
 answers[29] = choices[29][2];
 units[29] = "58";
 comments[29] = "Id Pregunta: 1547. NULL";


//  Id pregunta: 1556 AÃ±o de creación de pregunta: 2003-01-01
 questions[30]= "31)  &iquest;Cu&aacute;l de las siguientes no es una t&eacute;cnica utilizada para el c&aacute;lculo de una funci&oacute;n de correspondencia que asigna a los bloques de la memoria principal posiciones definidas en la memoria cach&eacute;?:";
 choices[30]= new Array();
 choices[30][0] = "Directa.";
 choices[30][1] = "Totalmente asociativa.";
 choices[30][2] = "Asociativa por conjuntos.";
 choices[30][3] = "Suprayectiva.";
 answers[30] = choices[30][3];
 units[30] = "52";
 comments[30] = "Id Pregunta: 1556. Junta Andaluc&iacute;a";


//  Id pregunta: 1574 AÃ±o de creación de pregunta: 2003-01-01
 questions[31]= "32)  &iquest;Qu&eacute; es JDBC?:";
 choices[31]= new Array();
 choices[31][0] = " Un modelo de objetos ActiveX.";
 choices[31][1] = "Una interfaz a nivel de llamadas (CLI) dise&ntilde;ada para programas escritos en C.";
 choices[31][2] = "Un controlador de planificaci&oacute;n de procesos en monitores transaccionales (Job Database Control).";
 choices[31][3] = " Una interfaz de programaci&oacute;n de aplicaciones (API) Java para ejecutar sentencias SQL.";
 answers[31] = choices[31][3];
 units[31] = "58";
 comments[31] = "Id Pregunta: 1574. Junta Andaluc&iacute;a";


//  Id pregunta: 1585 AÃ±o de creación de pregunta: 2003-01-01
 questions[32]= "33)  En el contexto del Sistema Gestor de Base de Datos (SGBD) ORACLE, al conjunto compartido de estructuras de memoria y procesos que acceden a un grupo de ficheros de la base de datos, se denomina:";
 choices[32]= new Array();
 choices[32][0] = "R&eacute;plica.";
 choices[32][1] = "Segmento.";
 choices[32][2] = "Instancia.";
 choices[32][3] = "Tablespace.";
 answers[32] = choices[32][2];
 units[32] = "58";
 comments[32] = "Id Pregunta: 1585. Junta Andaluc&iacute;a";


//  Id pregunta: 1618 AÃ±o de creación de pregunta: 2003-01-01
 questions[33]= "34)  Para cambiar los privilegios de un fichero en UNIX qu&eacute; comando se utiliza";
 choices[33]= new Array();
 choices[33][0] = "pwd";
 choices[33][1] = "chmod";
 choices[33][2] = "rmdir";
 choices[33][3] = "cat";
 answers[33] = choices[33][1];
 units[33] = "54";
 comments[33] = "Id Pregunta: 1618. NULL";


//  Id pregunta: 1623 AÃ±o de creación de pregunta: 2003-01-01
 questions[34]= "35)  Se&ntilde;ale cu&aacute;l de las siguientes respuestas es incorrecta";
 choices[34]= new Array();
 choices[34][0] = "Los ordenadores de segunda generaci&oacute;n, basados en circuitos integrados y multiprogramaci&oacute;n, se programaban en FORTRAN y lenguaje ensamblador, y se usaban para c&aacute;lculos cient&iacute;ficos u de ingenier&iacute;a";
 choices[34][1] = "Los sistemas operativos de tercera generaci&oacute;n permitieron desarrollar la t&eacute;cnica del &quot;spooling&quot; reduciendo considerablemente la necesidad de transporte de cintas magn&eacute;ticas";
 choices[34][2] = "En los sistemas operativos de 4 generaci&oacute;n se desarrolla por primera vez la t&eacute;cnica de multiprogramaci&oacute;n, una variante de los sistemas de tiempo compartido";
 choices[34][3] = "La primera generaci&oacute;n de sistemas operativos surge como consecuencia de los exitosos trabajos realizados por Babbage al desarrollar su m&aacute;quina anal&iacute;tica";
 answers[34] = choices[34][0];
 units[34] = "52";
 comments[34] = "Id Pregunta: 1623. ";


//  Id pregunta: 1632 AÃ±o de creación de pregunta: 2003-01-01
 questions[35]= "36)  Una de las formas de almacenar las Bases de Datos es la organizaci&oacute;n Hash. &iquest;En qu&eacute; consiste?";
 choices[35]= new Array();
 choices[35][0] = "En la organizaci&oacute;n Hash se accede al registro deseado directamente a trav&eacute;s del &iacute;ndice o clave.";
 choices[35][1] = "Consiste en ir indexando tablas de &iacute;ndices hasta tener un solo bloque mediante sucesivas iteraciones.";
 choices[35][2] = "Consiste en tener una serie de grupos numerados de modo que cuando se va a acceder a un registro conociendo la clave primaria se aplica sobre ella una funci&oacute;n algor&iacute;tmica obteni&eacute;ndose el grupo en el que ha de estar el registro deseado.";
 choices[35][3] = "En la organizaci&oacute;n Hash los registros se almacenan utilizando dos &iacute;ndices, uno primario que se&ntilde;ala los registros de acceso m&aacute;s frecuentes y otro secundario definido con alg&uacute;n criterio.";
 answers[35] = choices[35][2];
 units[35] = "58";
 comments[35] = "Id Pregunta: 1632. NULL";


//  Id pregunta: 1661 AÃ±o de creación de pregunta: 2004-01-01
 questions[36]= "37)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones no es correcta:";
 choices[36]= new Array();
 choices[36][0] = "Uno de los principios de Unix es &quot;Todo es un archivo&quot;";
 choices[36][1] = "El Sistema  Operativo &quot;MULTICS&quot; se caracteriza por la gesti&oacute;n de procesos multiprograma y en tiempo compartido y su arquitectura modular.";
 choices[36][2] = "El Sistema Opreativo Unix se caracteriza, junto con MINIX, por la gesti&oacute;n de procesos multiprogramada y su arquitectura modular.";
 choices[36][3] = "El Sistema Operativo Unix se caracteriza por un sistema de gesti&oacute;n de procesos multiprogramada y en tiempo compartido y por su arquitectura monol&iacute;tica.";
 answers[36] = choices[36][3];
 units[36] = "53";
 comments[36] = "Id Pregunta: 1661. MAP-B 2003";


//  Id pregunta: 1717 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  La posibilidad de un sistema operativo de ejecutar diferentes partes de un programa simult&aacute;neamente, se denomina:";
 choices[37]= new Array();
 choices[37][0] = "Multitasking";
 choices[37][1] = "Multithreading";
 choices[37][2] = "Multiuser";
 choices[37][3] = "Multiprocessing";
 answers[37] = choices[37][1];
 units[37] = "52";
 comments[37] = "Id Pregunta: 1717. ";


//  Id pregunta: 1914 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  El entorno de escritorio KDE:";
 choices[38]= new Array();
 choices[38][0] = "Utiliza como gestor de ventanas uno propio";
 choices[38][1] = "No posee gestor de ventanas propio";
 choices[38][2] = "Define sus interfaces mediante tecnolog&iacute;a CORBA";
 choices[38][3] = "No proporciona diferentes configuraciones para distintos idiomas";
 answers[38] = choices[38][0];
 units[38] = "54";
 comments[38] = "Id Pregunta: 1914. KDE Windows Manager es el gestor de ventanas propio de KDE";


//  Id pregunta: 1918 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  Marque cu&aacute;l de las siguientes afirmaciones es cierta con respecto al sistema de ficheros en red NFS";
 choices[39]= new Array();
 choices[39][0] = "Proporciona una visi&oacute;n id&eacute;ntica del espacio de nombres para todos los usuarios del sistema con independencia de su localizaci&oacute;n";
 choices[39][1] = "Una vez realizado el montaje remoto, proporciona transparencia de la localizaci&oacute;n en el nombrado de ficheros";
 choices[39][2] = "Proporciona una sem&aacute;ntica igual a la que ofrece el sistema Unix en el acceso concurrente a los ficheros";
 choices[39][3] = "Proporciona transparencia de la replicaci&oacute;n";
 answers[39] = choices[39][1];
 units[39] = "53";
 comments[39] = "Id Pregunta: 1918. ";


//  Id pregunta: 1942 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es correcta con respecto a los procesos arrancados por el superusuario (root) en un sistema operativo Linux";
 choices[40]= new Array();
 choices[40][0] = "Su c&oacute;digo se ejecuta con el procesador en modo n&uacute;cleo (kernel)";
 choices[40][1] = "Pueden ejecutarse con menos prioridad de planificaci&oacute;n que un proceso de usuario normal";
 choices[40][2] = "Tiene acceso directo a los dispositivos de E/S";
 choices[40][3] = "Acceden directamente al mapa de memoria de otros procesos";
 answers[40] = choices[40][1];
 units[40] = "54";
 comments[40] = "Id Pregunta: 1942. ";


//  Id pregunta: 2277 AÃ±o de creación de pregunta: 2002-01-01
 questions[41]= "42)  El Lenguaje de Definici&oacute;n de Datos (LDD) describe:";
 choices[41]= new Array();
 choices[41][0] = "Las propiedades din&aacute;micas de las entidades";
 choices[41][1] = "Las propiedades est&aacute;ticas de las entidades";
 choices[41][2] = "Los dos tipos de propiedades, es indiferente";
 choices[41][3] = "No define propiedades, define comportamientos";
 answers[41] = choices[41][1];
 units[41] = "57";
 comments[41] = "Id Pregunta: 2277. ";


//  Id pregunta: 2512 AÃ±o de creación de pregunta: 2002-01-01
 questions[42]= "43)  Una relaci&oacute;n que est&eacute; en 3FN:";
 choices[42]= new Array();
 choices[42][0] = "No tiene por qu&eacute; estar en 1FN";
 choices[42][1] = "Tiene dependencias funcionales transitivas";
 choices[42][2] = "Tiene atributos multivaluados";
 choices[42][3] = "Ninguna de las anteriores";
 answers[42] = choices[42][3];
 units[42] = "58";
 comments[42] = "Id Pregunta: 2512. NULL";


//  Id pregunta: 4277 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  Si para consolidar una transacci&oacute;n en un sistema relacional se utiliza la sentencia COMMIT, &iquest;qu&eacute; sentencia se utiliza para retroceder una transacci&oacute;n?";
 choices[43]= new Array();
 choices[43][0] = "NO COMMIT.";
 choices[43][1] = "ROLLBACK";
 choices[43][2] = "END TRANSACTION.";
 choices[43][3] = "BACK TRANSACTION.";
 answers[43] = choices[43][1];
 units[43] = "57";
 comments[43] = "Id Pregunta: 4277. ";


//  Id pregunta: 4325 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  Entre las capacidades que deben ser consideradas por el Administrador de una base de datos para evaluar la seguridad e integridad de los datos de un SGBD, no se encuentra...";
 choices[44]= new Array();
 choices[44][0] = "Control de concurrencia";
 choices[44][1] = "Control de herencia.";
 choices[44][2] = "Control de acceso.";
 choices[44][3] = "Las facilidades de cifrado.";
 answers[44] = choices[44][1];
 units[44] = "26,57";
 comments[44] = "Id Pregunta: 4325. ";


//  Id pregunta: 4363 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  Se&ntilde;ale la afirmaci&oacute;n correcta en relaci&oacute;n al interfaz hombre-m&aacute;quina en sistemas Unix y Linux:";
 choices[45]= new Array();
 choices[45][0] = "GNOME (GNU Network Object Modelo Environment) est&aacute; totalmente orientado a objetos y al uso de COM+.";
 choices[45][1] = "La implementaci&oacute;n free Xfree86 del entorno de escritorio CDE (Common Desktop Environment) se incluye en la distribuci&oacute;n MacX Server.";
 choices[45][2] = "En X-Windows el modelo es cliente/servidor, basado en un protocolo de red: Xserver, Xclient.";
 choices[45][3] = "KDE (K Desktop Environment) se implementa &uacute;nicamente en sistemas Unix.";
 answers[45] = choices[45][2];
 units[45] = "54";
 comments[45] = "Id Pregunta: 4363. ";


//  Id pregunta: 4618 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  En UNIX SVR4 para ejecutar una instrucci&oacute;n en segundo plano, escribimos Ia instrucci&oacute;n, un espacio en blanco y a continuaci&oacute;n el s&iacute;mbolo:";
 choices[46]= new Array();
 choices[46][0] = "!";
 choices[46][1] = "&amp;";
 choices[46][2] = "#";
 choices[46][3] = "@";
 answers[46] = choices[46][1];
 units[46] = "53";
 comments[46] = "Id Pregunta: 4618. ";


//  Id pregunta: 4810 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  &iquest;Cu&aacute;l es la Forma Normal (FN) m&aacute;s avanzada en la que se encuentra la relaci&oacute;n R( {A,B,C,D}, {A--&gt;B; B--&gt;C; C--&gt;D} ) ?";
 choices[47]= new Array();
 choices[47][0] = "Primera FN";
 choices[47][1] = "Segunda FN";
 choices[47][2] = "Tercera FN";
 choices[47][3] = "FNBC (Forma Normal de Boyce-Codd)";
 answers[47] = choices[47][1];
 units[47] = "57";
 comments[47] = "Id Pregunta: 4810. ";


//  Id pregunta: 4912 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  Seg&uacute;n la arquitectura est&aacute;ndar de los SGBD, ANSI/X3/SPARC &iquest;en qu&eacute; nivel se define el esquema de la base dedatos?:";
 choices[48]= new Array();
 choices[48][0] = "Nivel conceptual.";
 choices[48][1] = "Nivel f&iacute;sico.";
 choices[48][2] = "Nivel de aplicaci&oacute;n.";
 choices[48][3] = "Nivel l&oacute;gico.";
 answers[48] = choices[48][0];
 units[48] = "57";
 comments[48] = "Id Pregunta: 4912. Examen TIC B 2007";


//  Id pregunta: 4965 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  El &ldquo;throughput&rdquo;, como medida de rendimiento de un sistema inform&aacute;tico, se define mejor como:";
 choices[49]= new Array();
 choices[49][0] = "Tiempo transcurrido entre la realizaci&oacute;n de una petici&oacute;n al sistema y la recepci&oacute;n de la respuesta.";
 choices[49][1] = "El n&uacute;mero de usuarios simult&aacute;neos trabajando en el sistema.";
 choices[49][2] = "El porcentaje de tiempo de los dispositivos est&aacute;n trabajando en tareas del sistema, no imputables a ning&uacute;n trabajo de usuario.";
 choices[49][3] = "Cantidad de trabajo &uacute;til ejecutado por unidad de tiempo en un entorno de carga determinado. Por ejemplo, transacciones por segundo.";
 answers[49] = choices[49][3];
 units[49] = "52";
 comments[49] = "Id Pregunta: 4965. Examen TIC B 2007";


//  Id pregunta: 5122 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  Si examinamos el modelo relacional dentro del marco de la arquitectura ANSI, podemos afirmar que:";
 choices[50]= new Array();
 choices[50][0] = "El modelo relacional no especifica nada respecto al esquema interno.";
 choices[50][1] = "En el nivel externo se encuentran las relaciones base, tambi&eacute;n denominadas tablas reales.";
 choices[50][2] = "En el nivel conceptual se encuentran las vistas.";
 choices[50][3] = "El modelo relacional define los tres niveles de la arquitectura ANSI.";
 answers[50] = choices[50][0];
 units[50] = "57";
 comments[50] = "Id Pregunta: 5122. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5455 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  Una Importante cuesti&oacute;n a considerar en la elecci&oacute;n de una sentencia SQL es";
 choices[51]= new Array();
 choices[51][0] = "N&uacute;mero de CPUs en el servidor";
 choices[51][1] = "Grado de paralelismo de las tablas";
 choices[51][2] = "Uso de &iacute;ndices de mapas de bits";
 choices[51][3] = "Calidad de las optimizaciones de las sentencias SQL";
 answers[51] = choices[51][3];
 units[51] = "58";
 comments[51] = "Id Pregunta: 5455. Castilla y Le&oacute;n";


//  Id pregunta: 5510 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  &iquest;Cu&aacute;l de los siguientes es un escritorio de Linux?";
 choices[52]= new Array();
 choices[52][0] = " X11";
 choices[52][1] = "Genome";
 choices[52][2] = "KDE";
 choices[52][3] = "Ninguno de ellos";
 answers[52] = choices[52][2];
 units[52] = "52";
 comments[52] = "Id Pregunta: 5510. ";


//  Id pregunta: 5619 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  En UNIX, un archivo se compone de:";
 choices[53]= new Array();
 choices[53][0] = "Un conjunto de i-nodos m&aacute;s un conjunto de bloques de datos";
 choices[53][1] = "Una secuencia de bytes";
 choices[53][2] = "Un conjunto de bloques de datos m&aacute;s la estructura de punteros que determina d&oacute;nde se encuentran &eacute;stos";
 choices[53][3] = "Un bloque de datos m&aacute;s una cabecera de direccionamiento";
 answers[53] = choices[53][1];
 units[53] = "53";
 comments[53] = "Id Pregunta: 5619. ";


//  Id pregunta: 5940 AÃ±o de creación de pregunta: 2009-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l de las siguientes son las siglas de una infraestructura de virtualizaci&oacute;n del kernel de Linux?";
 choices[54]= new Array();
 choices[54][0] = "VLM";
 choices[54][1] = "LVM";
 choices[54][2] = "VKM";
 choices[54][3] = "KVM";
 answers[54] = choices[54][3];
 units[54] = "119";
 comments[54] = "Id Pregunta: 5940. ";


//  Id pregunta: 6317 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  &iquest;Cu&aacute;l de las siguientes sentencias es cierta respecto a las bases de datos relacionales?";
 choices[55]= new Array();
 choices[55][0] = "Soportan las interrelaciones l&oacute;gicas entre los datos.";
 choices[55][1] = "No soportan el acceso directo a un registro espec&iacute;fico.";
 choices[55][2] = "Es complicado el acceso a varios registros relacionados con un registro simple.";
 choices[55][3] = "El acceso a los datos es l&oacute;gico, dependiente de las t&eacute;cnicas de instrumentaci&oacute;n f&iacute;sica.";
 answers[55] = choices[55][0];
 units[55] = "58";
 comments[55] = "Id Pregunta: 6317. ";


//  Id pregunta: 6319 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  En un modelo relacional, la regla de integridad de las entidades dice :";
 choices[56]= new Array();
 choices[56][0] = "Ning&uacute;n componente de la clave primaria de una relaci&oacute;n base puede aceptar       nulos.";
 choices[56][1] = "La base de datos no debe contener valores de clave ajena sin concordancia.";
 choices[56][2] = "En una clave primaria compuesta, cada valor individual de la clave primaria puede ser nulo aunque no en su totalidad.";
 choices[56][3] = "Ning&uacute;n componente de una clave ajena de una relaci&oacute;n puede aceptar nulos.";
 answers[56] = choices[56][0];
 units[56] = "58";
 comments[56] = "Id Pregunta: 6319. ";


//  Id pregunta: 6504 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  El proyecto POSIX est&aacute; auspiciado por:";
 choices[57]= new Array();
 choices[57][0] = "ISO";
 choices[57][1] = "IEEE";
 choices[57][2] = "GNU";
 choices[57][3] = "Berkley University";
 answers[57] = choices[57][1];
 units[57] = "53";
 comments[57] = "Id Pregunta: 6504. NULL";


//  Id pregunta: 6508 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  En un entorno UNIX/Linux, los procesos no interactivos o de background se denominan:";
 choices[58]= new Array();
 choices[58][0] = "Zombies";
 choices[58][1] = "Swaps";
 choices[58][2] = "Pipes";
 choices[58][3] = "Daemons";
 answers[58] = choices[58][3];
 units[58] = "53";
 comments[58] = "Id Pregunta: 6508. NULL";


//  Id pregunta: 7158 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  Entre las funciones de un sistema operativo se encuentra la gesti&oacute;n de procesos. Seleccione cual de las siguientes afirmaciones es correcta:";
 choices[59]= new Array();
 choices[59][0] = "Cualquier proceso puede causar la terminaci&oacute;n de otro proceso realizando una llamada al sistema";
 choices[59][1] = "Si un proceso se encuentra en estado &quot;Terminado&quot; (o Finalizado) significa que se ha ejecutado en su totalidad";
 choices[59][2] = "Se dice que un proceso se encuentra en estado &quot;Zombi&quot; cuando est&aacute; esperando a que otro proceso termine de ejecutarse";
 choices[59][3] = "Cuando un nuevo usuario entra en el sistema se crea un nuevo proceso que quedar&aacute; en estado &quot;listo&quot; (preparado para se ejecutado)";
 answers[59] = choices[59][3];
 units[59] = "52";
 comments[59] = "Id Pregunta: 7158. Examen TIC B 2009";


//  Id pregunta: 7273 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  Se&ntilde;ale  la opci&oacute;n que no corresponde a un  tipo de virtualizaci&oacute;n";
 choices[60]= new Array();
 choices[60][0] = "Virtualizaci&oacute;n de Sistema Operativo";
 choices[60][1] = "Paravirtualizaci&oacute;n";
 choices[60][2] = "Virtualizaci&oacute;n de datos";
 choices[60][3] = "Virtualizaci&oacute;n de red";
 answers[60] = choices[60][2];
 units[60] = "119";
 comments[60] = "Id Pregunta: 7273. NULL";


//  Id pregunta: 7275 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  &iquest;Cu&aacute;l de las siguientes no es una ventaja de las m&aacute;quinas virtuales con respecto al hardware f&iacute;sico?";
 choices[61]= new Array();
 choices[61][0] = "Aislamiento";
 choices[61][1] = "Independencia  del software";
 choices[61][2] = "Encapsulamiento";
 choices[61][3] = "Compatibilidad";
 answers[61] = choices[61][1];
 units[61] = "119";
 comments[61] = "Id Pregunta: 7275. NULL";


//  Id pregunta: 8204 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  Respecto del modelo jer&aacute;rquico de base de datos, se&ntilde;ale qu&eacute; afirmaci&oacute;n es FALSA:";
 choices[62]= new Array();
 choices[62][0] = "Utiliza punteros para su implementaci&oacute;n f&iacute;sica.";
 choices[62][1] = "Permite que un nodo de nivel superior pueda tener un n&uacute;mero ilimitado de nodos de nivel inferior.";
 choices[62][2] = "Permite describir relaciones sim&eacute;tricas.";
 choices[62][3] = "Permite actualizaciones en cascada.";
 answers[62] = choices[62][2];
 units[62] = "57";
 comments[62] = "Id Pregunta: 8204. Examen TIC A1 2010";


//  Id pregunta: 8249 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  Asumiendo que el cliente y el servidor se ejecutan en diferentes m&aacute;quinas, y considerando como local aquella m&aacute;quina con acceso a la pantalla y al teclado, la combinaci&oacute;n correcta respecto a Xwindows(X11) y Microsoft Terminal Server (TS) es:";
 choices[63]= new Array();
 choices[63][0] = "El cliente X11 y el cliente TS se ejecutan de manera local y el servidor X11 y el servidor TS de manera remota.";
 choices[63][1] = "El cliente X11 y el servidor TS se ejecutan de manera local y el servidor X11 y el cliente TS de manera remota.";
 choices[63][2] = "El servidor X11 y el cliente TS se ejecutan de manera local y el cliente X11 y el servidor TS de manera remota.";
 choices[63][3] = "El servidor X11 y el servidor TS se ejecutan de manera local y el cliente X11 y el cliente TS de manera remota.";
 answers[63] = choices[63][2];
 units[63] = "119";
 comments[63] = "Id Pregunta: 8249. Examen TIC A1 2010";


//  Id pregunta: 8273 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  En general, al pasar una relaci&oacute;n 1:N con atributos propios, del modelo entidad - relaci&oacute;n al modelo relacional:";
 choices[64]= new Array();
 choices[64][0] = "Se crea una nueva tabla cuya clave principal es el atributo de la relaci&oacute;n.";
 choices[64][1] = "Se crea una nueva tabla cuya clave es la concatenaci&oacute;n de las claves de las dos entidades y tiene un campo adicional para el atributo de la relaci&oacute;n.";
 choices[64][2] = "La clave de la entidad que participa con cardinalidad N y el atributo de la relaci&oacute;n, pasan a la tabla de cardinalidad 1.";
 choices[64][3] = "La clave de la entidad que participa con cardinalidad 1 y el atributo de la relaci&oacute;n, pasan a la tabla de cardinalidad N.";
 answers[64] = choices[64][3];
 units[64] = "58";
 comments[64] = "Id Pregunta: 8273. Examen TIC A1 2010";


//  Id pregunta: 8373 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  &iquest;Cu&aacute;l de los siguientes niveles de aislamiento previene de los problemas de lecturas sucias y lecturas no  repetibles, pero NO evita las lecturas fantasmas?";
 choices[65]= new Array();
 choices[65][0] = "Read Commited (lectura confirmada).";
 choices[65][1] = "Serializable.";
 choices[65][2] = "Read uncornmited (lectura no confirmada),";
 choices[65][3] = "Repeatable read (lectura repetible).";
 answers[65] = choices[65][3];
 units[65] = "57,58";
 comments[65] = "Id Pregunta: 8373. Examen TIC A2 2010";


//  Id pregunta: 8411 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  Indique la respuesta INCORRECTA sobre el protocolo SMB: ";
 choices[66]= new Array();
 choices[66][0] = "Protocolo de red que permite compartir archivos e impresoras (entre otras cosas) entre nodos de una red ";
 choices[66][1] = "Microsoft a&ntilde;adi&oacute; algunas extensiones al protocolo y lo renombr&oacute; como CIFS (Common Internet File Syslem).  ";
 choices[66][2] = "Las iniciales SMB responden a Service Message Block ";
 choices[66][3] = "SAMBA es una implementaci&oacute;n libre del protocolo para entornos GNU/Linux y Unix.";
 answers[66] = choices[66][2];
 units[66] = "52";
 comments[66] = "Id Pregunta: 8411. Examen TIC A2 2010";


//  Id pregunta: 8415 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  &iquest;Cu&aacute;l de las siguientes NO es una de las llamadas doce reglas de Codd? ";
 choices[67]= new Array();
 choices[67][0] = "Independencia f&iacute;sica de los datos. ";
 choices[67][1] = "Independencia de distribuci&oacute;n. ";
 choices[67][2] = "Independencia de actualizaci&oacute;n. ";
 choices[67][3] = "Independencia de integridad. ";
 answers[67] = choices[67][2];
 units[67] = "58";
 comments[67] = "Id Pregunta: 8415. Examen TIC A2 2010";


//  Id pregunta: 8617 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  &iquest;Cu&aacute;l de las siguientes NO es una funci&oacute;n del administrador de bases de datos?";
 choices[68]= new Array();
 choices[68][0] = "Dise&ntilde;ar la arquitectura de balanceo de carga de las aplicaciones instaladas en una granja de servidores.";
 choices[68][1] = "Balancear la distribuci&oacute;n de los datos entre los dispositivos de almacenamiento";
 choices[68][2] = "Optimizar las cargas masivas de datos, ya sean iniciales o parciales.";
 choices[68][3] = "Gestionar permisos y roles de usuarios para que sean los necesarios para sus funciones y se garantice la confidencialidad e integridad de los datos";
 answers[68] = choices[68][0];
 units[68] = "57,58";
 comments[68] = "Id Pregunta: 8617. Examen TIC A2 2010 interna";


//  Id pregunta: 8623 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  &iquest;Cu&aacute;l de las siguientes NO es una plataforma de virtualizaci&oacute;n?";
 choices[69]= new Array();
 choices[69][0] = "Xen";
 choices[69][1] = "Alfresco";
 choices[69][2] = "VMWare";
 choices[69][3] = "Virtuozzo";
 answers[69] = choices[69][1];
 units[69] = "119";
 comments[69] = "Id Pregunta: 8623. Examen TIC A2 2010 interna";


//  Id pregunta: 8629 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre el modelo entidad/relaci&oacute;n es correcta?";
 choices[70]= new Array();
 choices[70][0] = "En la especializaci&oacute;n un supertipo so descompone en uno o varios subtipos, los cuales heredan todos los atributos y relaciones del supertipo.";
 choices[70][1] = "La generalizaci&oacute;n consiste en relacionar dos tipos de entidades que normalmente son de dominios independientes, pero coyunturalmente se asocian.";
 choices[70][2] = "La agregaci&oacute;n permite abstraer un tipo de entidad de nivel superior (supertipo) a partir de varios tipos de entidad (subtipos).";
 choices[70][3] = "La asociaci&oacute;n consiste en construir un nuevo tipo de entidad como composici&oacute;n de otros.";
 answers[70] = choices[70][0];
 units[70] = "57, 58";
 comments[70] = "Id Pregunta: 8629. Examen TIC A2 2010 interna";


//  Id pregunta: 8638 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  &iquest;Cu&aacute;l de las siguientes operaciones pertenece al lenguaje de manipulaci&oacute;n de datos en SQL?";
 choices[71]= new Array();
 choices[71][0] = "CREATE";
 choices[71][1] = "ALTER";
 choices[71][2] = "DELETE";
 choices[71][3] = "DROP";
 answers[71] = choices[71][2];
 units[71] = "57, 58";
 comments[71] = "Id Pregunta: 8638. Examen TIC A2 2010 interna";


//  Id pregunta: 8639 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  Si tenemos las dependencias funcionales (A, B) -&gt; C, B -&gt; D y la siguiente relaci&oacute;n (A, B, C, D) donde (A, B) es la clave candidata. &iquest;Cu&aacute;l seria el resultado de aplicar la 2&ordf; forma normal?";
 choices[72]= new Array();
 choices[72][0] = "(A, B, C), (A, B, D).";
 choices[72][1] = "(A, B, C), (B, D).";
 choices[72][2] = "(A, B, C),  (A, D).";
 choices[72][3] = "Ya est&aacute; en 2FN.";
 answers[72] = choices[72][1];
 units[72] = "57, 58";
 comments[72] = "Id Pregunta: 8639. Examen TIC A2 2010 interna";


//  Id pregunta: 8761 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  Sean dos procesos: P1, con tiempo de ejecuci&oacute;n de 20ms, y P2, con 15ms. El planificador a corto plazo act&uacute;a seg&uacute;n un Round Robin con cuanto de 10ms y tiempo de conmutaci&oacute;n de tarea de 5ms Marcar el tiempo de retorno (regreso) de P2, teniendo en cuenta que se empieza ejecutando P1.";
 choices[73]= new Array();
 choices[73][0] = "35";
 choices[73][1] = "40";
 choices[73][2] = "50";
 choices[73][3] = "55";
 answers[73] = choices[73][2];
 units[73] = "52";
 comments[73] = "Id Pregunta: 8761. Examen TIC A2 2010 interna";


//  Id pregunta: 8828 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)   Si hablamos de virtualizaci&oacute;n &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[74]= new Array();
 choices[74][0] = " La virtualizaci&oacute;n del sistema operativo ofrece un conjunto de librer&iacute;as que hace que las aplicaciones que se ejecutan aparenten que lo hacen en una m&aacute;quina dedicada ";
 choices[74][1] = " La virtualizaci&oacute;n del sistema operativo es la mejor soluci&oacute;n para configuraciones heterog&eacute;neas";
 choices[74][2] = " La virtualizaci&oacute;n del sistema operativo hace que las aplicaciones funcionen siempre igual de r&aacute;pido que en el mismo sistema dedicado";
 choices[74][3] = " En emulaci&oacute;n hardware o VMM las aplicaciones no pueden migrarse entre m&aacute;quinas diferentes";
 answers[74] = choices[74][0];
 units[74] = "119";
 comments[74] = "Id Pregunta: 8828. Examen UC3M 2010";


//  Id pregunta: 8880 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  Un driver JDBC de tipo 4 es aquel que cumple:";
 choices[75]= new Array();
 choices[75][0] = "Es un driver escrito en java que habla con un middleware en el lado del servidor.";
 choices[75][1] = "Es un driver escrito en java que emplea el protocolo nativo de la base de datos.";
 choices[75][2] = "Es un driver que habla con la librer&iacute;a nativa de base de datos en el cliente y esta comunica por red con la base de datos.";
 choices[75][3] = "JDBC solamente tiene drivers de hasta tipo 3 inclusive.";
 answers[75] = choices[75][1];
 units[75] = "57, 58";
 comments[75] = "Id Pregunta: 8880. Examen UPM A2 2011";


//  Id pregunta: 8917 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  &iquest;Cu&aacute;ndo una relaci&oacute;n est&aacute; en Tercera Forma Normal?:";
 choices[76]= new Array();
 choices[76][0] = "Cuando est&aacute; en Segunda Forma Normal y adem&aacute;s no tiene grupos repetitivos.";
 choices[76][1] = "Cuando est&aacute; en Segunda Forma Normal y adem&aacute;s todos los atributos que no forman parte de la clave primaria tienen dependencia funcional completa respecto de cada una de las claves.";
 choices[76][2] = "Cuando est&aacute; en Segunda Forma Normal y adem&aacute;s no hay dependencias funcionales transitivas respecto de la clave primaria.";
 choices[76][3] = "Cuando est&aacute; en Segunda Forma Normal y la clave primaria no est&aacute; formada por un &uacute;nico atributo";
 answers[76] = choices[76][2];
 units[76] = "58";
 comments[76] = "Id Pregunta: 8917. Operador Ayto. Madrid 2010";


//  Id pregunta: 8951 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  &iquest;Qu&eacute; situaci&oacute;n se da si la direcci&oacute;n virtual y su correspondiente f&iacute;sica coincide?";
 choices[77]= new Array();
 choices[77][0] = "El sistema carece de memoria virtual";
 choices[77][1] = "El sistema no es multiprogramado";
 choices[77][2] = "El espacio l&oacute;gico y el f&iacute;sico del proceso es el mismo";
 choices[77][3] = "Todas las anteriores son falsas";
 answers[77] = choices[77][2];
 units[77] = "53,54";
 comments[77] = "Id Pregunta: 8951. ";


//  Id pregunta: 8953 AÃ±o de creación de pregunta: 2011-01-01
 questions[78]= "79)  KDE puede arrancar un n&uacute;mero m&aacute;ximo de escritorios virtuales &iquest;cu&aacute;l es ese n&uacute;mero?:";
 choices[78]= new Array();
 choices[78][0] = "16";
 choices[78][1] = "8";
 choices[78][2] = "4";
 choices[78][3] = "6";
 answers[78] = choices[78][1];
 units[78] = "53,54";
 comments[78] = "Id Pregunta: 8953. ";


//  Id pregunta: 8954 AÃ±o de creación de pregunta: 2011-01-01
 questions[79]= "80)  &iquest;Para qu&eacute; se utiliza el comando fdisk?:";
 choices[79]= new Array();
 choices[79][0] = "Para formatear una partici&oacute;n";
 choices[79][1] = "Para formatear un disco completo";
 choices[79][2] = "Para crear una partici&oacute;n";
 choices[79][3] = "Para crear i-nodos";
 answers[79] = choices[79][2];
 units[79] = "53,54";
 comments[79] = "Id Pregunta: 8954. ";


//  Id pregunta: 9043 AÃ±o de creación de pregunta: 2011-01-01
 questions[80]= "81)  Cu&aacute;l no es una implementaci&oacute;n de Linux";
 choices[80]= new Array();
 choices[80][0] = "Debian";
 choices[80][1] = "Ubuntu";
 choices[80][2] = "Red Hat";
 choices[80][3] = "Mono";
 answers[80] = choices[80][3];
 units[80] = "53";
 comments[80] = "Id Pregunta: 9043. ";


//  Id pregunta: 9249 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  &iquest;Qu&eacute; son los hives en Windows?";
 choices[81]= new Array();
 choices[81][0] = "Grupos de archivos";
 choices[81][1] = "La organizaci&oacute;n del registro organizado en un &uacute;nico volumen.";
 choices[81][2] = "Cada grupo masivo de archivos se mantiene en varios archivos separados.";
 choices[81][3] = "Todas son correctas.";
 answers[81] = choices[81][0];
 units[81] = "56";
 comments[81] = "Id Pregunta: 9249. ";


//  Id pregunta: 9265 AÃ±o de creación de pregunta: 2013-01-01
 questions[82]= "83)  En el editor &quot;vi&quot; el comando &quot;dd&quot; &iquest;Qu&eacute; funci&oacute;n realiza?";
 choices[82]= new Array();
 choices[82][0] = "No realiza ninguna acci&oacute;n.";
 choices[82][1] = "Borra la l&iacute;nea anterior.";
 choices[82][2] = "Borra la l&iacute;nea actual";
 choices[82][3] = "Borra la l&iacute;nea posterior.";
 answers[82] = choices[82][2];
 units[82] = "53";
 comments[82] = "Id Pregunta: 9265. Examen TICA2-2011";


//  Id pregunta: 9271 AÃ±o de creación de pregunta: 2013-01-01
 questions[83]= "84)  En relaci&oacute;n a los sistemas Ubuntu Server, &iquest;qu&eacute; implica una versi&oacute;n LTS? ";
 choices[83]= new Array();
 choices[83][0] = "Que es una versi&oacute;n inestable o en fase de desarrollo del kernel. ";
 choices[83][1] = "Que es una versi&oacute;n Lite o ligera, especialmente adaptada para tabletas. ";
 choices[83][2] = "Que existe soporte para esa versi&oacute;n durante al menos 5 a&ntilde;os desde el lanzamiento. ";
 choices[83][3] = "Que existe soporte para esa versi&oacute;n durante al menos 4 a&ntilde;os desde el lanzamiento.";
 answers[83] = choices[83][2];
 units[83] = "54";
 comments[83] = "Id Pregunta: 9271. Examen TICA2-2011";


//  Id pregunta: 9622 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  &iquest;En qu&eacute; consisten los fallos de p&aacute;gina suaves?";
 choices[84]= new Array();
 choices[84][0] = "En actualizar la tabla de p&aacute;ginas";
 choices[84][1] = "En traer la p&aacute;gina del disco porque no se encuentra en memoria";
 choices[84][2] = "En modificar el bit de acceso de la p&aacute;gina";
 choices[84][3] = "En modificar el bit de &quot;p&aacute;gina sucia&quot;";
 answers[84] = choices[84][0];
 units[84] = "52";
 comments[84] = "Id Pregunta: 9622. ";


//  Id pregunta: 9628 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Indique cu&aacute;l de los siguientes sistemas de archivos se corresponde con el nuevo desarrollado por Microsoft y que fue presentado junto a Windows Server 2012:";
 choices[85]= new Array();
 choices[85][0] = "ReFS";
 choices[85][1] = "NTFS";
 choices[85][2] = "HPFS";
 choices[85][3] = "CSFS";
 answers[85] = choices[85][0];
 units[85] = "56";
 comments[85] = "Id Pregunta: 9628. Examen TIC A2 2013";


//  Id pregunta: 9810 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  &iquest;Cu&aacute;l de las siguientes unidades de magnitud en relaci&oacute;n al almacenamiento de informaci&oacute;n es mayor?";
 choices[86]= new Array();
 choices[86][0] = "Pettabyte (PB).";
 choices[86][1] = "Terabyte (TB).";
 choices[86][2] = "Yottabyte (YB).";
 choices[86][3] = "Zettabyte (ZB).";
 answers[86] = choices[86][2];
 units[86] = "52";
 comments[86] = "Id Pregunta: 9810. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9813 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  La t&eacute;cnica que permite solapar instrucciones mediante la divisi&oacute;n de su ejecuci&oacute;n en etapas se denomina:";
 choices[87]= new Array();
 choices[87][0] = "Parametrizaci&oacute;n.";
 choices[87][1] = "Segmentaci&oacute;n.";
 choices[87][2] = "Multiplexaci&oacute;n.";
 choices[87][3] = "Paginaci&oacute;n.";
 answers[87] = choices[87][1];
 units[87] = "52";
 comments[87] = "Id Pregunta: 9813. Examen TIC-A2 2013-Libre";


//  Id pregunta: 10014 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  El t&eacute;rmino anglosaj&oacute;n &quot;ACID&quot; relacionado con una transacci&oacute;n de base de datos se corresponde con las propiedades:";
 choices[88]= new Array();
 choices[88][0] = "Autentication, Consistency, Integrity, Durability.";
 choices[88][1] = "Atomicity, Confidentiality, Identification, Durability.";
 choices[88][2] = "Atomicity, Consistency, Isolation, Durability.";
 choices[88][3] = "Availability, Consistency, Isolation, Durability.";
 answers[88] = choices[88][2];
 units[88] = "57";
 comments[88] = "Id Pregunta: 10014. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10161 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta en relaci&oacute;n con el c&aacute;lculo relacional?";
 choices[89]= new Array();
 choices[89][0] = "Lenguaje formal de consulta / acceso a un modelo relacional basado en la teor&iacute;a de conjuntos";
 choices[89][1] = "Lenguaje te&oacute;rico y de car&aacute;cter procedural que define un conjunto de operaciones aplicables sobre un modelo relacional";
 choices[89][2] = "Formalismo para expresar operaciones de consulta / acceso a un modelo relacional basado en la l&oacute;gica de predicados";
 choices[89][3] = "Ninguna de las anteriores";
 answers[89] = choices[89][2];
 units[89] = "58";
 comments[89] = "Id Pregunta: 10161. ";


//  Id pregunta: 10186 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  Aplicando la t&eacute;cnica del Modelo E/R Extendido se elabora el modelo de datos de la aplicaci&oacute;n que, en la arquitectura de base de datos estandarizada como ANSI/X3/SPARC, se corresponde con el nivel o esquema:";
 choices[90]= new Array();
 choices[90][0] = "Externo";
 choices[90][1] = "L&oacute;gico";
 choices[90][2] = "Interno";
 choices[90][3] = "Conceptual";
 answers[90] = choices[90][3];
 units[90] = "57,80";
 comments[90] = "Id Pregunta: 10186. ";


//  Id pregunta: 10285 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  RMAN es:";
 choices[91]= new Array();
 choices[91][0] = "Una especificaci&oacute;n de monitorizaci&oacute;n remota de IETF.";
 choices[91][1] = "Una invocaci&oacute;n de m&eacute;todos remotos utilizada en Java.";
 choices[91][2] = "Una herramienta de Oracle que permite hacer backups online de bases de datos.";
 choices[91][3] = "Una herramienta de IBM que permite realizar administraci&oacute;n remota de bases de datos.";
 answers[91] = choices[91][2];
 units[91] = "58";
 comments[91] = "Id Pregunta: 10285. TIC A2, libre, examen 2013";


//  Id pregunta: 10433 AÃ±o de creación de pregunta: 2014-01-01
 questions[92]= "93)  En una base de datos Oracle, &iquest;cu&aacute;l de las siguientes sentencias no est&aacute; relacionada con la asignaci&oacute;n de permisos a usuarios? ";
 choices[92]= new Array();
 choices[92][0] = "CREATE VIEW.";
 choices[92][1] = "GRANT.";
 choices[92][2] = "CREATE PROFILE.";
 choices[92][3] = "CREATE ROLE.";
 answers[92] = choices[92][0];
 units[92] = "58";
 comments[92] = "Id Pregunta: 10433. Examen TIC A1 2013";


//  Id pregunta: 10625 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Se&ntilde;ale la respuesta correcta:";
 choices[93]= new Array();
 choices[93][0] = "Un proceso es equivalente a un hilo de ejecuci&oacute;n.";
 choices[93][1] = "Los hilos no pueden compartir entre ellos datos o espacios de direcciones.";
 choices[93][2] = "Se tarda m&aacute;s en eliminar un hilo que un proceso.";
 choices[93][3] = "Tanto los procesos como los hilos pueden crear sus propios hijos.";
 answers[93] = choices[93][3];
 units[93] = "52";
 comments[93] = "Id Pregunta: 10625. ";


//  Id pregunta: 10826 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Se&ntilde;ale en qu&eacute; nivel de aislamiento, definido en ANSI/ISO SQL, puede ocurrir el problema de lecturas sucias en un sistema gestor de bases de datos relacional (SGDBR):";
 choices[94]= new Array();
 choices[94][0] = "Serializable.";
 choices[94][1] = "Repeatable Read (lecturas repetibles).";
 choices[94][2] = "Read Committed (lecturas comprometidas).";
 choices[94][3] = "Read Uncommitted (lecturas no comprometidas).";
 answers[94] = choices[94][3];
 units[94] = "57, 58";
 comments[94] = "Id Pregunta: 10826. Examen GSI 2014";


//  Id pregunta: 10869 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  En Linux, guardamos en un fichero llamado log.txt todas las incidencias de una m&aacute;quina con la siguiente estructura fecha#descIncidencia, &iquest;qu&eacute; comando deber&iacute;amos usar para contar el n&uacute;mero de filas que tienen la palabra &quot;error&quot;?";
 choices[95]= new Array();
 choices[95][0] = "grep error log.txt | wc &ndash;l";
 choices[95][1] = "grep wc &ndash;l |error log.txt";
 choices[95][2] = "grep error log.txt | ls -l |cut -r&quot;#&quot; -f2";
 choices[95][3] = "grep cut -r&quot;#&quot; -f2|ls -l | error log.txt";
 answers[95] = choices[95][0];
 units[95] = "53, 54";
 comments[95] = "Id Pregunta: 10869. Examen GSI 2014";


//  Id pregunta: 11039 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Cu&aacute;l de las siguientes afirmaciones acerca del modelo l&oacute;gico relacional es correcta?";
 choices[96]= new Array();
 choices[96][0] = "Fue creado por Peter Chen";
 choices[96][1] = "Est&aacute; basado en la teor&iacute;a de conjuntos y la l&oacute;gica de predicados";
 choices[96][2] = "Las estructuras de datos son complejas";
 choices[96][3] = "No permite incorporar aspectos sem&aacute;nticos mediante el establecimiento de reglas de integridad";
 answers[96] = choices[96][1];
 units[96] = "58";
 comments[96] = "Id Pregunta: 11039. ";


//  Id pregunta: 11299 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  De entre las siguientes, escoge la falsa en relaci&oacute;n con SQL:";
 choices[97]= new Array();
 choices[97][0] = "Las relaciones participantes en un producto cartesiano, deben tener el mismo grado.";
 choices[97][1] = "Para todas las operaciones de &aacute;lgebra relacional, las 2 relaciones deben tener el mismo grado, excepto en el producto cartesiano.";
 choices[97][2] = "El SQL es estandarizado por ISO/IEC JTC1 Subcomit&eacute; 21.";
 choices[97][3] = "En SQL embebido los c&oacute;digos de retorno con signo negativo son errores.";
 answers[97] = choices[97][0];
 units[97] = "58";
 comments[97] = "Id Pregunta: 11299. El producto cartesiano es la &uacute;nica operaci&oacute;n del &aacute;lgebra relacional, que no necesita que las relaciones tengan el mismo grado, es decir el mismo n&uacute;mero de columnas.";


//  Id pregunta: 11523 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  En el entorno gr&aacute;fico KDE, &iquest;Qu&eacute; aplicaci&oacute;n permite generar informes?";
 choices[98]= new Array();
 choices[98][0] = "Kchart";
 choices[98][1] = "Kugar";
 choices[98][2] = "Kplato";
 choices[98][3] = "Kspread";
 answers[98] = choices[98][1];
 units[98] = "54";
 comments[98] = "Id Pregunta: 11523. NULL";


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


