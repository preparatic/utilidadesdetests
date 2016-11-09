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

//  Id pregunta: 732 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  En un sistema de informaci&oacute;n de una universidad, en el que se almacenan las asignaturas en las que se matriculan los alumnos, &iquest;cu&aacute;l ser&iacute;a la mejor manera de almacenar las asignaturas de las matr&iacute;culas en la base de datos relacional atendiendo a criterios";
 choices[0]= new Array();
 choices[0][0] = "En la tabla ALUMNOS; con un campo para cada asignatura";
 choices[0][1] = "En la tabla MATR&Iacute;CULA, con un campo asignaturas, en el que se almacenar&iacute;an, delimitadas por separadores, las asignaturas";
 choices[0][2] = "En la tabla ASIGNATURAS de MATR&Iacute;CULA, que tendr&iacute;a tantos registros como asignaturas tenga la matr&iacute;cula. Cada registro constar&iacute;a del identificador de la matr&iacute;cula y el identificador de la asignatura";
 choices[0][3] = "En le tabla ASIGNATURAS de MATR&Iacute;CULA, que tendr&iacute;a un registro por matr&iacute;cula, con tantos campos como asignaturas. El n&uacute;mero m&aacute;ximo de asignaturas depender&iacute;a de la universidad";
 answers[0] = choices[0][2];
 units[0] = "56,57";
 comments[0] = "Id Pregunta: 732. Examen TIC MAP B 2004";


//  Id pregunta: 833 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta respecto a la ejecuci&oacute;n de programas en una m&aacute;quina?:";
 choices[1]= new Array();
 choices[1][0] = "Los programas de proceso forman el grueso del sistema operativo ";
 choices[1][1] = "Los programas de control funcionan en modo usuario";
 choices[1][2] = "Los programas de control funcionan en modo kernel";
 choices[1][3] = "Ninguna de las anteriores";
 answers[1] = choices[1][2];
 units[1] = "52";
 comments[1] = "Id Pregunta: 833. ";


//  Id pregunta: 881 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;Cu&aacute;l es el sistema de mensajer&iacute;a t&iacute;pico de los sistemas Unix?:";
 choices[2]= new Array();
 choices[2][0] = "Exchange";
 choices[2][1] = "Sendmail";
 choices[2][2] = "Memo";
 choices[2][3] = "Groupwise";
 answers[2] = choices[2][1];
 units[2] = "53";
 comments[2] = "Id Pregunta: 881. ";


//  Id pregunta: 885 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;Cu&aacute;l es la diferencia de los comandos del sistema, tales como la orden de listado de directorio (dir &oacute; ls) en MSDOS y LINUX?:";
 choices[3]= new Array();
 choices[3][0] = "En MSDOS, los programas del sistema estaban contenidos en el nucleo, y en LINUX son archivos ejecutables";
 choices[3][1] = "En LINUX, los programas del sistema estan contenidos en el nucleo, y en MSDOS eran archivos ejecutables";
 choices[3][2] = "No existe diferencia, salvo de nombre en esos programas";
 choices[3][3] = "Todas son falsas";
 answers[3] = choices[3][0];
 units[3] = "54";
 comments[3] = "Id Pregunta: 885. NULL";


//  Id pregunta: 936 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;Qu&eacute; norma de las que se relacionan a continuaci&oacute;n afecta a SQL?:";
 choices[4]= new Array();
 choices[4][0] = "ISO 9075";
 choices[4][1] = "ISO 9003";
 choices[4][2] = "ANSI 9003";
 choices[4][3] = "IEEE 9003";
 answers[4] = choices[4][0];
 units[4] = "58";
 comments[4] = "Id Pregunta: 936. ";


//  Id pregunta: 958 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  Con referencia al modelo relacional, indique cu&aacute;l de las siguientes afirmaciones es cierta:";
 choices[5]= new Array();
 choices[5][0] = "El n&uacute;mero de dominios de una relaci&oacute;n define su grado";
 choices[5][1] = "La extensi&oacute;n u ocurrencia de una relaci&oacute;n es una tabla donde las filas corresponden a los atributos";
 choices[5][2] = "Cada atributo, o propiedad con inter&eacute;s informacional de una relaci&oacute;n, est&aacute; asociado a un dominio del que toma sus valores";
 choices[5][3] = "El orden de las filas dentro de una tabla es determinante";
 answers[5] = choices[5][2];
 units[5] = "58";
 comments[5] = "Id Pregunta: 958. ";


//  Id pregunta: 1005 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  El componente central de los sistemas operativos sencillos de proceso por lotes (batch) es el:";
 choices[6]= new Array();
 choices[6][0] = "Monitor";
 choices[6][1] = "Compilador";
 choices[6][2] = "Int&eacute;rprete";
 choices[6][3] = "Proceso en serie";
 answers[6] = choices[6][0];
 units[6] = "52";
 comments[6] = "Id Pregunta: 1005. ";


//  Id pregunta: 1034 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  El modelo de base de datos CODASYL:";
 choices[7]= new Array();
 choices[7][0] = "Es el modelo conceptual de datos que corresponde a los SGBD jer&aacute;rquicos";
 choices[7][1] = "Es el modelo l&oacute;gico de datos de un SGBD relacional";
 choices[7][2] = "Es el Modelo de Codd";
 choices[7][3] = "No se corresponde con nada de lo anterior";
 answers[7] = choices[7][3];
 units[7] = "57";
 comments[7] = "Id Pregunta: 1034. ";


//  Id pregunta: 1035 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  El modelo de referencia ANSI establece cuales son los componentes del SGBD. Entre ellos no se encuentra:";
 choices[8]= new Array();
 choices[8][0] = "Sistema de control de transformaci&oacute;n de datos";
 choices[8][1] = "Interfaz lenguaje de datos de usuario";
 choices[8][2] = "Interfaz lenguaje de manipulaci&oacute;n de datos";
 choices[8][3] = "Interfaz lenguaje de datos interno";
 answers[8] = choices[8][2];
 units[8] = "57";
 comments[8] = "Id Pregunta: 1035. ";


//  Id pregunta: 1090 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  En el modelo relacional, &iquest;qu&eacute; se entiende por integridad referencial?:";
 choices[9]= new Array();
 choices[9][0] = "Que todos los datos est&eacute;n referenciados por su clave y &eacute;sta sea &uacute;nica";
 choices[9][1] = "Que todo atributo que represente una relaci&oacute;n, o bien sea nulo, o bien exista en la clave primaria del elemento relacionado";
 choices[9][2] = "Que todo conjunto de operaciones que constituya una unidad, o bien progrese en conjunto, bien falle en conjunto, pero que no progrese nunca en situaciones intermedias";
 choices[9][3] = "Que se pueda referenciar la totalidad de la base de datos";
 answers[9] = choices[9][1];
 units[9] = "58";
 comments[9] = "Id Pregunta: 1090. NULL";


//  Id pregunta: 1094 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  En el sistema operativo Unix, las tuberias (pipes) son mecanismos de comunicaci&oacute;n que permiten la transferencia de datos entre dos procesos. &iquest;C&oacute;mo podr&iacute;amos crear una tuber&iacute;a con el nombre TUB?:";
 choices[10]= new Array();
 choices[10][0] = "mknod TUB p";
 choices[10][1] = "En Unix no se puede dar una nombre a una tuber&iacute;a";
 choices[10][2] = "mkp TUB";
 choices[10][3] = "mkpipe TUB";
 answers[10] = choices[10][0];
 units[10] = "53";
 comments[10] = "Id Pregunta: 1094. ";


//  Id pregunta: 1096 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  En el subsistema de E/S, &iquest;qu&eacute; diferencia a una 'operaci&oacute;n de entrada/salida' de una 'transferencia elemental'?:";
 choices[11]= new Array();
 choices[11][0] = "La primera transfiere uno o varios bloques de datos y la segunda s&oacute;lo mueve un dato o una palabra de control";
 choices[11][1] = "La primera no comprueba el estado del perif&eacute;rico y la segunda s&iacute; lo hace";
 choices[11][2] = "La primera se realiza por hardware y la segunda por software";
 choices[11][3] = "La primera sincroniza la UCP y el controlador del perif&eacute;rico mediante se&ntilde;ales el&eacute;ctricas, y la segunda no lo hace";
 answers[11] = choices[11][0];
 units[11] = "52";
 comments[11] = "Id Pregunta: 1096. ";


//  Id pregunta: 1114 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  En las bases de datos orientadas a objeto, para cuantificar el movimiento existente entre la entrada a las bases de datos y la salida se emplean dos sistemas que se conocen como:";
 choices[12]= new Array();
 choices[12][0] = "Creatividad y destructividad de los objetos";
 choices[12][1] = "Tasa e incremento de variaci&oacute;n de los objetos ";
 choices[12][2] = "Intervalo y tiempo de vida de los objetos";
 choices[12][3] = "Din&aacute;mica fuerte y din&aacute;mica d&eacute;bil";
 answers[12] = choices[12][3];
 units[12] = "57";
 comments[12] = "Id Pregunta: 1114. ";


//  Id pregunta: 1128 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  En relaci&oacute;n con el diccionario de recursos de informaci&oacute;n de una base de datos, se define 'metadatos' como:";
 choices[13]= new Array();
 choices[13][0] = "El repositorio que contiene todos los datos de la organizaci&oacute;n";
 choices[13][1] = "La informaci&oacute;n relativa al propio diccionario de datos, su estructura y sus caracter&iacute;sticas";
 choices[13][2] = "La informaci&oacute;n de nivel conceptual que determina la visi&oacute;n global del sistema de informaci&oacute;n";
 choices[13][3] = "El conjunto de datos necesarios para deducir determinada informaci&oacute;n no especificada en la base de datos";
 answers[13] = choices[13][1];
 units[13] = "57";
 comments[13] = "Id Pregunta: 1128. ";


//  Id pregunta: 1137 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  En un entorno transaccional, &iquest;cu&aacute;l de las siguientes acciones traer&iacute;a como resultado una disminuci&oacute;n del tiempo de respuesta?:";
 choices[14]= new Array();
 choices[14][0] = "Compactaci&oacute;n de datos en el dispositivo de almacenamiento magn&eacute;tico, para disminuir el n&uacute;mero de E/S al DASD";
 choices[14][1] = "Ampliaci&oacute;n de la partici&oacute;n de memoria principal para los programas activos, para disminuir la frecuencia de 'swapping'";
 choices[14][2] = "Ampliaci&oacute;n de la memoria virtual, para disminuir la paginaci&oacute;n";
 choices[14][3] = "Todas las anteriores respuestas son correctas";
 answers[14] = choices[14][1];
 units[14] = "52";
 comments[14] = "Id Pregunta: 1137. ";


//  Id pregunta: 1142 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  En un sistema de memoria virtual, cuando un proceso en ejecuci&oacute;n genera un 'fallo de p&aacute;gina':";
 choices[15]= new Array();
 choices[15][0] = "Es un error grave del sistema operativo que ocasiona el aborto del programa";
 choices[15][1] = "El sistema operativo busca en memoria secundaria (disco) la p&aacute;gina que falta y la carga en memoria";
 choices[15][2] = "El sistema operativo busca en memoria secundaria la p&aacute;gina que falta y la intenta llevar a memoria; si no hay espacio para la nueva p&aacute;gina, interrumpe la ejecuci&oacute;n del programa, dando el control a otro proceso";
 choices[15][3] = "Un proceso en ejecuci&oacute;n nunca puede generar un fallo de p&aacute;gina ya que de lo contrario todo el equipo 'caer&aacute;' produciendose una reinicializaci&oacute;n de la m&aacute;quina";
 answers[15] = choices[15][1];
 units[15] = "52";
 comments[15] = "Id Pregunta: 1142. ";


//  Id pregunta: 1211 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  La cla&uacute;sula GROUP BY se utiliza para:";
 choices[16]= new Array();
 choices[16][0] = "Agrupar varios atributos para formar una clave";
 choices[16][1] = "Formar una vista con elementos de varias tablas";
 choices[16][2] = "Agrupar usuarios para asignar privilegio";
 choices[16][3] = "Obtener en una sentencia SELECT grupos de tuplas en lugar de tuplas individuales";
 answers[16] = choices[16][3];
 units[16] = "58";
 comments[16] = "Id Pregunta: 1211. ";


//  Id pregunta: 1222 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  La funci&oacute;n de planificar la secuencia de realizaci&oacute;n de las distintas tareas por la Unidad Central de Proceso es realizada por:";
 choices[17]= new Array();
 choices[17][0] = "El boot-strap";
 choices[17][1] = "El dispatcher";
 choices[17][2] = "El scheduler";
 choices[17][3] = "Ninguno de los anteriores";
 answers[17] = choices[17][2];
 units[17] = "52";
 comments[17] = "Id Pregunta: 1222. ";


//  Id pregunta: 1277 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Los operadores fundamentales del &aacute;lgebra relacional utilizada en los lenguajes relacionales de los SGBDR:";
 choices[18]= new Array();
 choices[18][0] = "Pueden combinarse para dar lugar a otros";
 choices[18][1] = "Permiten obtener cualquier subconjunto de los datos contenidos en una base de datos";
 choices[18][2] = "Son cinco: selecci&oacute;n, proyecci&oacute;n, uni&oacute;n, diferencia y producto cartesiano";
 choices[18][3] = "Todas las anteriores respuestas son correctas";
 answers[18] = choices[18][3];
 units[18] = "58";
 comments[18] = "Id Pregunta: 1277. ";


//  Id pregunta: 1296 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  Para borrar una tabla en SQL utilizar&eacute;:";
 choices[19]= new Array();
 choices[19][0] = "DELETE + Nombre de la tabla";
 choices[19][1] = "DROP + Nombre de la tabla";
 choices[19][2] = "REVOKE + Nombre de la tabla";
 choices[19][3] = "B y C son ciertas";
 answers[19] = choices[19][1];
 units[19] = "58";
 comments[19] = "Id Pregunta: 1296. ";


//  Id pregunta: 1302 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Para saber en Unix los ficheros que cuelgan de un directorio se utiliza el comando:";
 choices[20]= new Array();
 choices[20][0] = "ldir";
 choices[20][1] = "ls";
 choices[20][2] = "pwd";
 choices[20][3] = "ps";
 answers[20] = choices[20][1];
 units[20] = "52,53";
 comments[20] = "Id Pregunta: 1302. ";


//  Id pregunta: 1315 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  Respecto a la compatibilidad entre Windows y Linux:";
 choices[21]= new Array();
 choices[21][0] = "Windows no puede ejecutarse bajo Linux";
 choices[21][1] = "Linux no puede ejecutarse bajo Windows";
 choices[21][2] = "Ambos pueden ejecutarse simult&aacute;neamente de forma nativa";
 choices[21][3] = "Existen programas que permiten la ejecuci&oacute;n de cada uno de estos sistemas operativos como si fuera un programa embebido en el otro sistema operativo";
 answers[21] = choices[21][3];
 units[21] = "53,55";
 comments[21] = "Id Pregunta: 1315. ";


//  Id pregunta: 1352 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Se&ntilde;ale la respuesta falsa. El sistema de ficheros en Unix:";
 choices[22]= new Array();
 choices[22][0] = "Est&aacute; formado por i-nodos";
 choices[22][1] = "Se utiliza para acceder a los perif&eacute;ricos";
 choices[22][2] = "Tiene una estructura no basada en jerarqu&iacute;as";
 choices[22][3] = "Est&aacute; basado en listas enlazadas, con varios niveles de indireccion";
 answers[22] = choices[22][2];
 units[22] = "53";
 comments[22] = "Id Pregunta: 1352. ";


//  Id pregunta: 1394 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Un sistema de gesti&oacute;n de base de datos (SGBD) es relacional si, entre otras cosas:";
 choices[23]= new Array();
 choices[23][0] = "Soporta un lenguaje de manipulaci&oacute;n de datos basado en el c&aacute;lculo referencial";
 choices[23][1] = "Soporta un lenguaje de definici&oacute;n de datos de tipo referencial";
 choices[23][2] = "Es capaz de establecer relaciones con otros SGBD";
 choices[23][3] = "Toda la informaci&oacute;n se representa a nivel l&oacute;gico en forma de tablas";
 answers[23] = choices[23][3];
 units[23] = "58";
 comments[23] = "Id Pregunta: 1394. NULL";


//  Id pregunta: 1416 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Una entidad d&eacute;bil es aquella que cumple que:";
 choices[24]= new Array();
 choices[24][0] = "La clave est&aacute; compuesta por atributos de la entidad";
 choices[24][1] = "La clave est&aacute; compuesta por atributos de la entidad y atributos de otras entidades";
 choices[24][2] = "Su existencia depende de la existencia de otra u otras entidades";
 choices[24][3] = "No puede tener relaciones cuya cardinalidad sea uno-a-uno";
 answers[24] = choices[24][2];
 units[24] = "58";
 comments[24] = "Id Pregunta: 1416. ";


//  Id pregunta: 1445 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  La notaci&oacute;n sint&aacute;ctica conocida como BNF (Backus Normal Form) especifica:";
 choices[25]= new Array();
 choices[25][0] = "La funci&oacute;n, el formato, las reglas sint&aacute;cticas y generales de cada elemento SQL";
 choices[25][1] = "La sintaxis y la sem&aacute;ntica del SQL-DDL (Lenguaje de Definici&oacute;n de Esquema) y el SQL-DML (Lenguaje de M&oacute;dulos y de Manipulaci&oacute;n de Datos)";
 choices[25][2] = "Las autorizaciones para realizar determinadas funciones en las tablas";
 choices[25][3] = "Las restricciones para prevenir que dos filas tengan los mismos valores en determinadas columnas (unique) o para impedir que determinada columna contenga un valor nulo";
 answers[25] = choices[25][0];
 units[25] = "58";
 comments[25] = "Id Pregunta: 1445. ";


//  Id pregunta: 1477 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  Se dice que el conjunto de instrucciones que ejecuta un procesador deber ser completo, es decir:";
 choices[26]= new Array();
 choices[26][0] = "Debe contener un gran n&uacute;mero de instrucciones";
 choices[26][1] = "Debe ser un conjunto de instrucciones muy potentes";
 choices[26][2] = "Debe permitir calcular cualquier tarea computable en un tiempo finito";
 choices[26][3] = "Debe realizar c&aacute;lculos a altas velocidades";
 answers[26] = choices[26][2];
 units[26] = "56";
 comments[26] = "Id Pregunta: 1477. ";


//  Id pregunta: 1526 AÃ±o de creación de pregunta: 2003-01-01
 questions[27]= "28)  Dentro del &aacute;lgebra relacional, &iquest;qu&eacute; definici&oacute;n corresponde con la Uni&oacute;n Natural?";
 choices[27]= new Array();
 choices[27][0] = "Si X es un subconjunto de atributos de la relaci&oacute;n R, entonces la uni&oacute;n natural de R es la relaci&oacute;n formada por las columnas de R correspondientes a los atributos de X.";
 choices[27][1] = "La uni&oacute;n natural de dos relaciones R y S es el conjunto formado por todas las tuplas de R que no est&aacute;n en S. Este operador s&oacute;lo se puede aplicar a relaciones del mismo grado y con los mismos atributos.";
 choices[27][2] = "La uni&oacute;n natural de dos relaciones R y S, de grados m y n respectivamente es el conjunto formado por todas las posibles tuplas (mxn tuplas) de m+n elementos en las que los m primeros son de R y los n restantes pertenecen a S.";
 choices[27][3] = "Ninguna de las definiciones anteriores corresponde con la uni&oacute;n natural.";
 answers[27] = choices[27][3];
 units[27] = "58";
 comments[27] = "Id Pregunta: 1526. ";


//  Id pregunta: 1576 AÃ±o de creación de pregunta: 2003-01-01
 questions[28]= "29)  &iquest;Qu&eacute; es un &lsquo;trigger&rsquo;?";
 choices[28]= new Array();
 choices[28][0] = "Es un procedimiento asociado a una acci&oacute;n (inserci&oacute;n, borrado o modificaci&oacute;n) y a una tabla que se ejecuta cada vez que se intenta realizar una determinada operaci&oacute;n sobre dicha tabla.";
 choices[28][1] = "Es un puntero interno al SGBD que apunta a las filas de las tablas sobre la que est&aacute; definido y sirve para acelerar el acceso a los datos de la base.";
 choices[28][2] = "Es un archivo privado del SGBD en el que se apuntan todas las operaciones que se realizan sobre la base de datos.";
 choices[28][3] = "Es un tipo de distribuci&oacute;n de las filas de una tabla que permite hacer accesos en paralelo a los datos de dicha tabla.";
 answers[28] = choices[28][0];
 units[28] = "58";
 comments[28] = "Id Pregunta: 1576. ";


//  Id pregunta: 1588 AÃ±o de creación de pregunta: 2003-01-01
 questions[29]= "30)  En el modelo l&oacute;gico relacional, &iquest;qu&eacute; afirmaci&oacute;n es cierta?";
 choices[29]= new Array();
 choices[29][0] = "La clave candidata es la clave que el analista escoge entre todas las claves primarias y a las que no escoge se las denomina claves alternativas.";
 choices[29][1] = "La clave alternativa es la clave primaria pero que puede tomar valores nulos.";
 choices[29][2] = "La clave primaria tiene menos atributos que la clave candidata.";
 choices[29][3] = "La clave primaria es la clave que el analista escoge entre todas las claves candidatas y no puede adoptar bajo ninguna circunstancia el valor nulo.";
 answers[29] = choices[29][3];
 units[29] = "58";
 comments[29] = "Id Pregunta: 1588. ";


//  Id pregunta: 1590 AÃ±o de creación de pregunta: 2003-01-01
 questions[30]= "31)  En la arquitectura de tres niveles para el dise&ntilde;o de bases de datos establecida por el ANSI, &iquest;qu&eacute; nivel se ocupa de las reglas de integridad, claves e &iacute;ndices?";
 choices[30]= new Array();
 choices[30][0] = "Nivel f&iacute;sico.";
 choices[30][1] = "Nivel conceptual.";
 choices[30][2] = "Nivel Externo.";
 choices[30][3] = "Ninguno de los tres niveles se ocupa de las reglas de integridad, claves e &iacute;ndices, lo hace el administrador de la base de datos.";
 answers[30] = choices[30][0];
 units[30] = "57";
 comments[30] = "Id Pregunta: 1590. ";


//  Id pregunta: 1595 AÃ±o de creación de pregunta: 2003-01-01
 questions[31]= "32)  En los sistemas gestores de bases de datos (SGBD) , &iquest;qu&eacute; diferencia hay entre el DDL y el DML?";
 choices[31]= new Array();
 choices[31][0] = "El DDL se utiliza embebido mediante un precompilador mientras que el DML solamente se puede utilizar con un compilador extendido.";
 choices[31][1] = "El DDL sirve para definir el esquema conceptual y los diferentes esquemas externos de la base de datos  mientras que el DML sirve para gestionar la informaci&oacute;n incluida en dicha base.";
 choices[31][2] = "El DDL se utiliza para definir y mantener las estructuras de la base de datos en el nivel conceptual mientras que el DML sirve para la definici&oacute;n y mantenimiento de las vistas en el nivel externo (usuario).";
 choices[31][3] = "El DDL es el lenguaje de base de datos de los sistemas MVS y el DML es el lenguaje de base de datos para los entornos DOS/VSE.";
 answers[31] = choices[31][1];
 units[31] = "58";
 comments[31] = "Id Pregunta: 1595. ";


//  Id pregunta: 1609 AÃ±o de creación de pregunta: 2003-01-01
 questions[32]= "33)  La forma normal Boyce-Codd (FNBC):";
 choices[32]= new Array();
 choices[32][0] = " Es mas restrictiva que la 4FN; toda FNBC es 4FN.";
 choices[32][1] = "Es menos restrictiva que la 4FN; toda 4FN es FNBC.";
 choices[32][2] = "Se denomina indistintamente 5FN.";
 choices[32][3] = "Se denomina indistintamente 5FN+ (quinta forma normal ampliada).";
 answers[32] = choices[32][1];
 units[32] = "58";
 comments[32] = "Id Pregunta: 1609. Junta Andaluc&iacute;a";


//  Id pregunta: 1619 AÃ±o de creación de pregunta: 2003-01-01
 questions[33]= "34)  Qu&eacute; capas se pueden distinguir en la arquitectura de ODBC";
 choices[33]= new Array();
 choices[33][0] = "Cuatro: Aplicaci&oacute;n, administrador de or&iacute;genes de datos, controladores ODBC y or&iacute;genes de datos";
 choices[33][1] = "Tres: Aplicaci&oacute;n, ficherosy controlador basado en archivos";
 choices[33][2] = "Tres: Aplicaci&oacute;n, administrador y controlador ODBC basado en un sistema gestor de bases de datos";
 choices[33][3] = "Cuatro: Aplicaci&oacute;n, procesador, ficheros y controlador Driver Manager";
 answers[33] = choices[33][0];
 units[33] = "58";
 comments[33] = "Id Pregunta: 1619. ";


//  Id pregunta: 1654 AÃ±o de creación de pregunta: 2004-01-01
 questions[34]= "35)  &iquest;Las siglas &quot;ACID&quot; qu&eacute; significan desde el punto de vista de las transacciones?";
 choices[34]= new Array();
 choices[34][0] = "Atomicity, Consistency, Isolation and Durability";
 choices[34][1] = "Atomicity, Consistency, Integration and Durability";
 choices[34][2] = "Authenticity, Confidentiality, Integration and Durability";
 choices[34][3] = "Ninguna de las anteriores";
 answers[34] = choices[34][0];
 units[34] = "58";
 comments[34] = "Id Pregunta: 1654. ";


//  Id pregunta: 1670 AÃ±o de creación de pregunta: 2004-01-01
 questions[35]= "36)  Indique la opci&oacute;n correcta respecto a un fichero con permisos de acceso 705";
 choices[35]= new Array();
 choices[35][0] = "Permite la lectura y escritura del propietario";
 choices[35][1] = "Permite la escritura del grupo";
 choices[35][2] = "Permite la escritura y ejecuci&oacute;n por parte de cualquier usuario";
 choices[35][3] = "Permite la lectura y escritura de cualquier usuario";
 answers[35] = choices[35][0];
 units[35] = "54";
 comments[35] = "Id Pregunta: 1670. NULL";


//  Id pregunta: 1716 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  Los sistemas operativos multitarea:";
 choices[36]= new Array();
 choices[36][0] = "se conocen tambi&eacute;n como sistemas multiproceso";
 choices[36][1] = "el procesador cambia de una tarea a otra dando la apariencia de que se realizan concurrentemente";
 choices[36][2] = "son &quot;preemptive&quot; si cada tarea controla el tiempo que utiliza la CPU";
 choices[36][3] = "son &quot;cooperative&quot; si el sistema operativo controla el tiempo que cada tarea utiliza la CPU";
 answers[36] = choices[36][1];
 units[36] = "52";
 comments[36] = "Id Pregunta: 1716. NULL";


//  Id pregunta: 1724 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  El estandar 1003.9 especifica:";
 choices[37]= new Array();
 choices[37][0] = "Extensiones para la seguridad";
 choices[37][1] = " Administraci&oacute;n del Sistema";
 choices[37][2] = " Lenguaje Fortran.";
 choices[37][3] = "Acceso transparente a archivos.";
 answers[37] = choices[37][2];
 units[37] = "53";
 comments[37] = "Id Pregunta: 1724. ";


//  Id pregunta: 1741 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  En Windows 2000/2003, el EFS utiliza un algoritmo de encriptaci&oacute;n basado en:";
 choices[38]= new Array();
 choices[38][0] = "ARS.";
 choices[38][1] = "NFS.";
 choices[38][2] = "DES.";
 choices[38][3] = "SED.";
 answers[38] = choices[38][2];
 units[38] = "56";
 comments[38] = "Id Pregunta: 1741. ";


//  Id pregunta: 1922 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  Considere un sistema operativo Windows con memoria virtual paginada. Indique qu&eacute; aseveraci&oacute;n es cierta";
 choices[39]= new Array();
 choices[39][0] = "El tama&ntilde;o de la tabla de p&aacute;ginas es directamente proporcional al tama&ntilde;o de la p&aacute;gina";
 choices[39][1] = "El sistema operativo no puede modificar las tablas de p&aacute;ginas de un proceso";
 choices[39][2] = "El tama&ntilde;o de la memoria virtual est&aacute; determinado, entre otros, por el tama&ntilde;o de la direcci&oacute;n del procesador";
 choices[39][3] = "Los fallos de p&aacute;gina son tratados por el hardware";
 answers[39] = choices[39][2];
 units[39] = "56";
 comments[39] = "Id Pregunta: 1922. ";


//  Id pregunta: 2273 AÃ±o de creación de pregunta: 2002-01-01
 questions[40]= "41)  El Diccionario de Datos es utilizado por:";
 choices[40]= new Array();
 choices[40][0] = "El administrador de la base de datos y los programadores";
 choices[40][1] = "Los analistas y los programadores";
 choices[40][2] = "Los usuarios finales de las aplicaciones";
 choices[40][3] = "Los usuarios remotos";
 answers[40] = choices[40][0];
 units[40] = "57,81";
 comments[40] = "Id Pregunta: 2273. ";


//  Id pregunta: 2742 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  Una entidad est&aacute; en tercera forma normal (3FN) si:";
 choices[41]= new Array();
 choices[41][0] = "No tiene grupos repetitivos";
 choices[41][1] = "Si est&aacute; en 2FN y todos sus atributos no principales dependen directamente de la clave primaria";
 choices[41][2] = "Si est&aacute; en 2FN y no tiene grupos repetitivos";
 choices[41][3] = "Un atributo s&oacute;lo puede tomar un &uacute;nico valor de un dominio simple";
 answers[41] = choices[41][1];
 units[41] = "58";
 comments[41] = "Id Pregunta: 2742. ";


//  Id pregunta: 4190 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  Para listar las conexiones en un servidor utilizo el comando";
 choices[42]= new Array();
 choices[42][0] = "ping";
 choices[42][1] = "netstat";
 choices[42][2] = "tracert o traceroute";
 choices[42][3] = "ipconfig / ifconfig";
 answers[42] = choices[42][1];
 units[42] = "54";
 comments[42] = "Id Pregunta: 4190. ";


//  Id pregunta: 4278 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  Qu&eacute; son las restricciones de integridad?";
 choices[43]= new Array();
 choices[43][0] = "Son condiciones sobre el almacenamiento f&iacute;sico de los datos de la base de datos.";
 choices[43][1] = "Son condiciones que deben cumplir los datos almacenados en la base de datos relacional.";
 choices[43][2] = "Son las restricciones que el sistema de gesti&oacute;n de base de datos impone a los ficheros de la base de datos.";
 choices[43][3] = "Son una serie de caracter&iacute;sticas que deben cumplir las transacciones.";
 answers[43] = choices[43][1];
 units[43] = "58";
 comments[43] = "Id Pregunta: 4278. ";


//  Id pregunta: 4283 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  Se presentan a continuaci&oacute;n una lista de comandos UNIX, y una lista de funciones. 1) &ldquo;Is&rdquo;. 2) &ldquo;pwd&rdquo;. 3) &ldquo;cat&rdquo;. 4) &ldquo;more&rdquo;. I ) Lista los archivos del directorio activo. II) Muestra en pantalla el contenido de un archivo p&aacute;gina a p&aacute;gina. III) Muestra el camino completo del directorio actual. IV) Imprime en la salida est&aacute;ndar el contenido de un archivo. El orden correcto de emparejamiento entre comandos y funciones es:";
 choices[44]= new Array();
 choices[44][0] = "1-I, 2-II, 3-III y 4-IV.";
 choices[44][1] = "1-I, 2-III, 3-IV y 4-II.";
 choices[44][2] = "1-II, 2-III, 3-IV y 4-IV.";
 choices[44][3] = "1-III, 2-IV, 3-I y 4-II.";
 answers[44] = choices[44][1];
 units[44] = "54";
 comments[44] = "Id Pregunta: 4283. ";


//  Id pregunta: 4396 AÃ±o de creación de pregunta: 2009-01-01
 questions[45]= "46)  En GNU/Linux se utilizan diversos programas para la gesti&oacute;n de versiones, &iquest;cu&aacute;l de los siguientes no es uno de ellos?";
 choices[45]= new Array();
 choices[45][0] = "mercurial";
 choices[45][1] = "ksafe";
 choices[45][2] = "git";
 choices[45][3] = "bazaar";
 answers[45] = choices[45][1];
 units[45] = "54";
 comments[45] = "Id Pregunta: 4396. ";


//  Id pregunta: 4513 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  En un entorno Microsoft Windows 2003 Nativo:";
 choices[46]= new Array();
 choices[46][0] = "Los cambios del directorio del dominio se realizan en los PDC (controladores principales de dominio) y se replican en los BDC (controladores de dominio de respaldo).";
 choices[46][1] = "Los cambios del directorio del dominio se realizan en los BDC (controladores de dominio de respaldo) y se replican en los PDC (controladores principales de dominio).";
 choices[46][2] = "Los cambios del directorio del dominio se realizan en los DC (controladores de dominio).";
 choices[46][3] = "Los cambios del directorio del dominio se realizan indistintamente en los PDC (controladores principales de dominio), BDC (controladores de dominio de respaldo) o DC (controladores de dominio) y luego se replican autom&aacute;ticamente entre ellos.";
 answers[46] = choices[46][2];
 units[46] = "56";
 comments[46] = "Id Pregunta: 4513. ";


//  Id pregunta: 4568 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  Indique cual de los siguientes no es un lenguaje relacional:";
 choices[47]= new Array();
 choices[47][0] = "RQL";
 choices[47][1] = "QUEL";
 choices[47][2] = "QBE";
 choices[47][3] = "SQL";
 answers[47] = choices[47][0];
 units[47] = "58";
 comments[47] = "Id Pregunta: 4568. ";


//  Id pregunta: 4907 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  En el &aacute;mbito de los sistemas operativos, entre los algoritmos de planificaci&oacute;n de procesos que utilizan &ldquo;quantum&rdquo; NO se incluye:";
 choices[48]= new Array();
 choices[48][0] = "Round Robin.";
 choices[48][1] = "Planificaci&oacute;n con colas de niveles m&uacute;ltiples.";
 choices[48][2] = "Planificaci&oacute;n con colas de retroalimentaci&oacute;n de niveles m&uacute;ltiples.";
 choices[48][3] = "Planificaci&oacute;n del tiempo restante m&aacute;s corto (SRT).";
 answers[48] = choices[48][3];
 units[48] = "52";
 comments[48] = "Id Pregunta: 4907. Examen TIC B 2007";


//  Id pregunta: 4921 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  En el UNIX System V, los i-nodos tienen una tabla de direcciones con:";
 choices[49]= new Array();
 choices[49][0] = "11 entradas.";
 choices[49][1] = "12 entradas.";
 choices[49][2] = "13 entradas.";
 choices[49][3] = "14 entradas.";
 answers[49] = choices[49][2];
 units[49] = "53,54";
 comments[49] = "Id Pregunta: 4921. Examen TIC B 2007";


//  Id pregunta: 4962 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l de los siguientes es un comando de monitorizaci&oacute;n Unix (procesos que se est&aacute;n ejecutando y recursos que se utilizan)?:";
 choices[50]= new Array();
 choices[50][0] = "mount.";
 choices[50][1] = "chmod.";
 choices[50][2] = "top.";
 choices[50][3] = "dd.";
 answers[50] = choices[50][2];
 units[50] = "54";
 comments[50] = "Id Pregunta: 4962. Examen TIC B 2007";


//  Id pregunta: 5008 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  Indique cu&aacute;l de las siguientes afirmaciones sobre JDBC es incorrecta:";
 choices[51]= new Array();
 choices[51][0] = "Es independiente del lenguaje de programaci&oacute;n";
 choices[51][1] = "Es independiente del sistema operativo";
 choices[51][2] = "Es independiente de la base de datos";
 choices[51][3] = "Es un tipo de API";
 answers[51] = choices[51][0];
 units[51] = "58";
 comments[51] = "Id Pregunta: 5008. Examen TIC A 2007";


//  Id pregunta: 5076 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  &iquest;Cu&aacute;l de las siguientes sentencias de SQL es una sentencia DDL?:";
 choices[52]= new Array();
 choices[52][0] = "UPDATE TABLE";
 choices[52][1] = "ALTER TABLE";
 choices[52][2] = "REVOKE ALL";
 choices[52][3] = "ROLLBACK";
 answers[52] = choices[52][1];
 units[52] = "58";
 comments[52] = "Id Pregunta: 5076. Examen TIC A 2007";


//  Id pregunta: 5119 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  &iquest;En qu&eacute; variable de entorno UNIX se le reporta al servidor de X-Windows la direcci&oacute;n del cliente X donde debe abrir las ventanas?";
 choices[53]= new Array();
 choices[53][0] = "DISPLAY";
 choices[53][1] = "SCREEN";
 choices[53][2] = "XHOST";
 choices[53][3] = "XCLIENT";
 answers[53] = choices[53][0];
 units[53] = "54";
 comments[53] = "Id Pregunta: 5119. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5447 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  &iquest;Por qu&eacute; el recorrido completo de tablas de gran tama&ntilde;o es un asunto cr&iacute;tico en la definici&oacute;n de sentencias SQL?";
 choices[54]= new Array();
 choices[54][0] = "Porque es indicativo de una futura ejecuci&oacute;n &oacute;ptima";
 choices[54][1] = "Porque es muy probable que se requiera adaptaciones para el uso de &iacute;ndices";
 choices[54][2] = "Porque el recorrido completo de tablas deber&iacute;a ser normalizado desde el dise&ntilde;o de la base de datos";
 choices[54][3] = "Porque el recorrido completo de una tabla nunca es &oacute;ptimo";
 answers[54] = choices[54][1];
 units[54] = "58";
 comments[54] = "Id Pregunta: 5447. Castilla y Le&oacute;n";


//  Id pregunta: 5488 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  Un procedimiento almacenado:";
 choices[55]= new Array();
 choices[55][0] = "Es una tabla SQL especial que permite ejecutar procesos batch";
 choices[55][1] = "S&oacute;lo puede ser  usado por el DBA";
 choices[55][2] = "Se define mediante la palabra clave CREATE TRIGGER";
 choices[55][3] = "Es un conjunto de comandos SQL que pueden almacenarse en el servidor";
 answers[55] = choices[55][3];
 units[55] = "58";
 comments[55] = "Id Pregunta: 5488. ";


//  Id pregunta: 5519 AÃ±o de creación de pregunta: 2003-01-01
 questions[56]= "57)  VMWARE se encuadra como un sistema operativo del tipo:";
 choices[56]= new Array();
 choices[56][0] = "sistema operativo monol&iacute;tico";
 choices[56][1] = "sistema operativo con capas";
 choices[56][2] = "sistema operativo con m&aacute;quina virtual";
 choices[56][3] = "sistema operativo tipo microkernel";
 answers[56] = choices[56][2];
 units[56] = "52";
 comments[56] = "Id Pregunta: 5519. ";


//  Id pregunta: 5620 AÃ±o de creación de pregunta: 2003-01-01
 questions[57]= "58)  En UNIX, al primer proceso que se ejecuta (process 0) se le llama:";
 choices[57]= new Array();
 choices[57][0] = "Kernel";
 choices[57][1] = "Swapper";
 choices[57][2] = "Shell";
 choices[57][3] = "Page daemon";
 answers[57] = choices[57][1];
 units[57] = "53";
 comments[57] = "Id Pregunta: 5620. ";


//  Id pregunta: 5717 AÃ±o de creación de pregunta: 2009-01-01
 questions[58]= "59)  &iquest;Cu&aacute;l de estos sistemas de archivos no est&aacute; soportado de forma nativa por el kernel de Linux?";
 choices[58]= new Array();
 choices[58][0] = "ZFS";
 choices[58][1] = "XFS";
 choices[58][2] = "ext4";
 choices[58][3] = "ReiserFS";
 answers[58] = choices[58][0];
 units[58] = "54";
 comments[58] = "Id Pregunta: 5717. ZFS es un sistema de archivos desarrollado por Sun para Solaris";


//  Id pregunta: 5991 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  Para eliminar una tabla de una base de datos relacional, se utiliza la sentencia DDL:";
 choices[59]= new Array();
 choices[59][0] = "Delete table.";
 choices[59][1] = "rm table.";
 choices[59][2] = "Delete table now.";
 choices[59][3] = "DROP TABLE.";
 answers[59] = choices[59][3];
 units[59] = "58";
 comments[59] = "Id Pregunta: 5991. TIC A 2009";


//  Id pregunta: 6226 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  Qu&eacute; esquema de bases de datos incluye la descripci&oacute;n de todos los datos e interrelaciones entre &eacute;stos, as&iacute; como las restricciones de integridad y de confidencialidad";
 choices[60]= new Array();
 choices[60][0] = "Esquema interno";
 choices[60][1] = "Esquema conceptual";
 choices[60][2] = "Esquema externo";
 choices[60][3] = "Esquema f&iacute;sico";
 answers[60] = choices[60][1];
 units[60] = "57";
 comments[60] = "Id Pregunta: 6226. TICB-2009, bloque desarrollo";


//  Id pregunta: 6321 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  Las reglas de integridad en una base de datos relacional son:";
 choices[61]= new Array();
 choices[61][0] = "Integridad de claves con las claves ajenas";
 choices[61][1] = "Integridad de entidad e integridad referencial";
 choices[61][2] = "Integridad referente a las claves";
 choices[61][3] = "Restricciones de usuario y claves primarias no nulas";
 answers[61] = choices[61][1];
 units[61] = "58";
 comments[61] = "Id Pregunta: 6321. ";


//  Id pregunta: 7166 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  En Oracle, un tablespace es:";
 choices[62]= new Array();
 choices[62][0] = "El espacio que ocupa un fichero en donde reside un &iacute;ndice";
 choices[62][1] = "El espacio f&iacute;sico de almacenamiento de datos";
 choices[62][2] = "El espacio que ocupa un fichero en donde reside una tabla";
 choices[62][3] = "El espacio l&oacute;gico de almacenamiento de datos";
 answers[62] = choices[62][3];
 units[62] = "58";
 comments[62] = "Id Pregunta: 7166. Examen TIC B 2009";


//  Id pregunta: 8185 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  La tabla ESTUDIANTES(DNI#, Nombre, Apellido 1, Apellido 2, DNITutor, NombreTutor):";
 choices[63]= new Array();
 choices[63][0] = "No est&aacute; en primera forma normal.";
 choices[63][1] = "Est&aacute; en primera forma normal pero no en segunda forma normal.";
 choices[63][2] = "Est&aacute; en segunda forma normal pero no en tercera forma normal.";
 choices[63][3] = "Est&aacute; en tercera forma normal pero no en forma normal de Boyce Codd.";
 answers[63] = choices[63][2];
 units[63] = "58";
 comments[63] = "Id Pregunta: 8185. Examen TIC A1 2010";


//  Id pregunta: 8274 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  En relaci&oacute;n con la seguridad en UNIX y particularmente con la auditor&iacute;a del sistema, cu&aacute;l de los siguientes archivos de registro de equipos UNIX se guardan en texto claro, y pueden visualizarse con una orden como cat o similares:";
 choices[64]= new Array();
 choices[64][0] = "syslog, wtmp, lastlog, sulog. ";
 choices[64][1] = "syslogd, utmpx, faillog, loginlog. ";
 choices[64][2] = "syslog, debug, sulog, loginlog. ";
 choices[64][3] = "syslog, btmp, lastlog, loginlog. ";
 answers[64] = choices[64][2];
 units[64] = "53, 54";
 comments[64] = "Id Pregunta: 8274. Examen TIC A1 2010";


//  Id pregunta: 8409 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  Si en un sistema UNIX, se quiere que el archivo test.txt pueda ser le&iacute;do, modificado (escrito) y ejecutado por su propietario, le&iacute;do y ejecutado por los usuarios que pertenecen al mismo grupo que el propietario, y tan s&oacute;lo le&iacute;do por el resto, &iquest;qu&eacute; instrucci&oacute;n de las siguientes se debe ejecutar?";
 choices[65]= new Array();
 choices[65][0] = "chmod 652 test.txt ";
 choices[65][1] = "chmod 754 test.txt ";
 choices[65][2] = "chmod 654 test.txt ";
 choices[65][3] = "chmod 752 test.txt ";
 answers[65] = choices[65][1];
 units[65] = "53, 54";
 comments[65] = "Id Pregunta: 8409. Examen TIC A2 2010";


//  Id pregunta: 8412 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  &iquest;Qu&eacute; realiza la sentencia &quot;df -h | grep / unidad/temporal | grep -v grep I wc -l&quot; en el sistema operativo Linux? ";
 choices[66]= new Array();
 choices[66][0] = "Cuenta el n&uacute;mero de f&iacute;cheros que se llaman temporal. ";
 choices[66][1] = "Lista las unidades extra&iacute;bles del sistema. ";
 choices[66][2] = "Cuenta el n&uacute;mero de filesystems que contienen /unidad/temporal en su path de montaje. ";
 choices[66][3] = "Cuenta el n&uacute;mero de procesos cuyo nombre contiene /unidad/temporal. ";
 answers[66] = choices[66][2];
 units[66] = "53, 54";
 comments[66] = "Id Pregunta: 8412. Examen TIC A2 2010";


//  Id pregunta: 8472 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  El PID 0 se asigna en Unix/Linux a:";
 choices[67]= new Array();
 choices[67][0] = "Swapper";
 choices[67][1] = "Init";
 choices[67][2] = "Page daemon";
 choices[67][3] = "Load";
 answers[67] = choices[67][0];
 units[67] = "53,54";
 comments[67] = "Id Pregunta: 8472. Analista Ayto. Madrid 2010";


//  Id pregunta: 8641 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  En la arquitectura ANSI SQL la capacidad do modificar el esquema interno sin tener que alterar el esquema conceptual (o los externos) es lo que se conoce como:";
 choices[68]= new Array();
 choices[68][0] = "Independencia f&iacute;sica.";
 choices[68][1] = "Independencia L&oacute;gica.";
 choices[68][2] = "Integridad de la entidad";
 choices[68][3] = "Integridad referencial.";
 answers[68] = choices[68][0];
 units[68] = "57, 58";
 comments[68] = "Id Pregunta: 8641. Examen TIC A2 2010 interna";


//  Id pregunta: 8762 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  El grado de multiprogramaci&oacute;n en un sistema operativo corresponde a:";
 choices[69]= new Array();
 choices[69][0] = "El n&uacute;mero m&aacute;ximo de programas que realizan operaciones de E/S.";
 choices[69][1] = "El n&uacute;mero m&aacute;ximo de archivos en un directorio";
 choices[69][2] = "El n&uacute;mero m&aacute;ximo de procesos en memoria principal";
 choices[69][3] = "El n&uacute;mero m&aacute;ximo de programas que comparten variables";
 answers[69] = choices[69][2];
 units[69] = "52";
 comments[69] = "Id Pregunta: 8762. Examen TIC A2 2010 interna";


//  Id pregunta: 8880 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  Un driver JDBC de tipo 4 es aquel que cumple:";
 choices[70]= new Array();
 choices[70][0] = "Es un driver escrito en java que habla con un middleware en el lado del servidor.";
 choices[70][1] = "Es un driver escrito en java que emplea el protocolo nativo de la base de datos.";
 choices[70][2] = "Es un driver que habla con la librer&iacute;a nativa de base de datos en el cliente y esta comunica por red con la base de datos.";
 choices[70][3] = "JDBC solamente tiene drivers de hasta tipo 3 inclusive.";
 answers[70] = choices[70][1];
 units[70] = "57, 58";
 comments[70] = "Id Pregunta: 8880. Examen UPM A2 2011";


//  Id pregunta: 8918 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  Indicar qu&eacute; es cierto acerca de las interrupciones de Entrada/Salida:";
 choices[71]= new Array();
 choices[71][0] = "Cuando se produce una interrupci&oacute;n, el registro contador de programa de la CPU cambia su valor, apuntando a la direcci&oacute;n de comienzo de la rutina de tratamiento de la interrupci&oacute;n.";
 choices[71][1] = "Los controladores DMA, al acceder directamente a la memoria principal, no hacen uso de interrupciones.";
 choices[71][2] = "Las interrupciones son generadas por la CPU para informar a los dispositivos perif&eacute;ricos de diferentes situaciones excepcionales en la ejecuci&oacute;n de los programas.";
 choices[71][3] = "Ninguna de las anteriores es cierta";
 answers[71] = choices[71][0];
 units[71] = "52";
 comments[71] = "Id Pregunta: 8918. Operador Ayto. Madrid 2010";


//  Id pregunta: 8951 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  &iquest;Qu&eacute; situaci&oacute;n se da si la direcci&oacute;n virtual y su correspondiente f&iacute;sica coincide?";
 choices[72]= new Array();
 choices[72][0] = "El sistema carece de memoria virtual";
 choices[72][1] = "El sistema no es multiprogramado";
 choices[72][2] = "El espacio l&oacute;gico y el f&iacute;sico del proceso es el mismo";
 choices[72][3] = "Todas las anteriores son falsas";
 answers[72] = choices[72][2];
 units[72] = "53,54";
 comments[72] = "Id Pregunta: 8951. ";


//  Id pregunta: 8953 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  KDE puede arrancar un n&uacute;mero m&aacute;ximo de escritorios virtuales &iquest;cu&aacute;l es ese n&uacute;mero?:";
 choices[73]= new Array();
 choices[73][0] = "16";
 choices[73][1] = "8";
 choices[73][2] = "4";
 choices[73][3] = "6";
 answers[73] = choices[73][1];
 units[73] = "53,54";
 comments[73] = "Id Pregunta: 8953. ";


//  Id pregunta: 8984 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  &iquest;Cu&aacute;l de las siguientes no es una edici&oacute;n de Windows 7?";
 choices[74]= new Array();
 choices[74][0] = "Starter";
 choices[74][1] = "Home Premium";
 choices[74][2] = "Ultimate";
 choices[74][3] = "Business";
 answers[74] = choices[74][3];
 units[74] = "56";
 comments[74] = "Id Pregunta: 8984. ";


//  Id pregunta: 9246 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  &iquest;Qu&eacute; es ntoskrnl.exe?";
 choices[75]= new Array();
 choices[75][0] = "Un virus que tuvo mucha incidencia en equipos en el 2012.";
 choices[75][1] = "El n&uacute;cleo del sistema operativo Windows 7.";
 choices[75][2] = "Es el programa en modo Kernel NTOS";
 choices[75][3] = "Proporciona los nuevos interfaces de llamadas al sistema de Windows.";
 answers[75] = choices[75][2];
 units[75] = "56";
 comments[75] = "Id Pregunta: 9246. ";


//  Id pregunta: 9248 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  &iquest;En qu&eacute; se diferencia la API de Windows y Unix en cuanto a filosof&iacute;a?";
 choices[76]= new Array();
 choices[76][0] = "En Unix las funciones de sistema operativo son simples, con pocos par&aacute;metros.";
 choices[76][1] = "Win32 ofrece interfaces muy extensas con muchos par&aacute;metros.";
 choices[76][2] = "En Unix suele haber pocas formas de realizar una operaci&oacute;n, mientras en Win32 hay a menudo 3 o 4 formas de realizar lo mismo.";
 choices[76][3] = "Todas son correctas.";
 answers[76] = choices[76][3];
 units[76] = "56";
 comments[76] = "Id Pregunta: 9248. ";


//  Id pregunta: 9254 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  &iquest;Qu&eacute; es VAD?";
 choices[77]= new Array();
 choices[77][0] = "Virtual Address Descriptors";
 choices[77][1] = "Virtual Allocator Devices";
 choices[77][2] = "Descriptor de direcciones asignadas.";
 choices[77][3] = "No existe.";
 answers[77] = choices[77][0];
 units[77] = "56";
 comments[77] = "Id Pregunta: 9254. ";


//  Id pregunta: 9256 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  &iquest;Qu&eacute; mejora Windows Server 2008 R2?";
 choices[78]= new Array();
 choices[78][0] = "Nuevo proceso de reparaci&oacute;n de sistemas NTFS.";
 choices[78][1] = "Creaci&oacute;n de sesiones de usuario secuenciales.";
 choices[78][2] = "Sistema de archivo FAT";
 choices[78][3] = "ASLR, protecci&oacute;n contra malware en la carga de controladores en disco.";
 answers[78] = choices[78][0];
 units[78] = "56";
 comments[78] = "Id Pregunta: 9256. ";


//  Id pregunta: 9450 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  Seleccione la frase EQUIVOCADA acerca del &aacute;lgebra relacional.";
 choices[79]= new Array();
 choices[79][0] = "Los operadores b&aacute;sicos son uni&oacute;n, diferencia, producto cartesiano, proyecci&oacute;n y selecci&oacute;n.";
 choices[79][1] = "Los operadores uni&oacute;n y diferencia requieren que las relaciones operando est&eacute;n definidas sobre el mismo conjunto de atributos.";
 choices[79][2] = "El producto cartesiano de una relaci&oacute;n de orden&quot;n&quot; y &quot;x&quot; tuplas y otra relaci&oacute;n de orden &quot;m&quot; y &quot;z&quot; tuplas es una relaci&oacute;n de orden n*m y de (x+z) tuplas. (F, es de orden n+m y x*z tuplas)";
 choices[79][3] = "La operaci&oacute;n join sobre dos relaciones que presentan atributos comunes puede tener cero tuplas.";
 answers[79] = choices[79][2];
 units[79] = "58";
 comments[79] = "Id Pregunta: 9450. Examen AGE TIC A1 2011";


//  Id pregunta: 9600 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  Marcar la respuesta correcta:";
 choices[80]= new Array();
 choices[80][0] = "UNIX se desarroll&oacute; a partir del sistema MINIX.";
 choices[80][1] = "El lenguaje original de desarrollo de UNIX era el B, posteriormente se desarroll&oacute; en C";
 choices[80][2] = " El n&uacute;cleo original del sistema operativo UNIX fue dise&ntilde;ado por A. Tanenbaum.";
 choices[80][3] = "Todas las anteriores son incorrectas";
 answers[80] = choices[80][1];
 units[80] = "53";
 comments[80] = "Id Pregunta: 9600. ";


//  Id pregunta: 9604 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  &iquest;C&uacute;al es la estructura m&aacute;s antigua de un modelo SGBD?";
 choices[81]= new Array();
 choices[81][0] = "Relacional";
 choices[81][1] = "En red";
 choices[81][2] = "Jer&aacute;rquico";
 choices[81][3] = "Multidimensional";
 answers[81] = choices[81][2];
 units[81] = "57";
 comments[81] = "Id Pregunta: 9604. ";


//  Id pregunta: 9609 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  &iquest;Qu&eacute; establece el teorema de CAP o de Brewer?";
 choices[82]= new Array();
 choices[82][0] = "El n&uacute;mero medio de clientes en un sistema es igual a la tasa promedio de llegada de clientes al sistema, por el tiempo medio que el cliente est&aacute; en un sistema.";
 choices[82][1] = "En un sistema de computaci&oacute;n distribuida es imposible garantizar simult&aacute;neamente la consistencia, disponibilidad y la tolerancia  a fallos.";
 choices[82][2] = "En una relaci&oacute;n, los valores de una clave externa de una tabla, deben coincidir con los valores de una clave primaria de la otra tabla con la que est&aacute; relacionada o bien ser todos nulos.";
 choices[82][3] = "Todas las respuestas son incorrectas.";
 answers[82] = choices[82][1];
 units[82] = "52";
 comments[82] = "Id Pregunta: 9609. ";


//  Id pregunta: 9612 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  &iquest;Qu&eacute; es una vista materializada?";
 choices[83]= new Array();
 choices[83][0] = "El resultado de una consulta de la base de datos almacenado en el disco duro";
 choices[83][1] = "El resultado de una consulta de la base de datos almacenado en una tabla cach&eacute;";
 choices[83][2] = "El resultado de una consulta de la base de datos realizada mediante procedimientos almacenados";
 choices[83][3] = "El resultado de una operaci&oacute;n de &ldquo;triggers&rdquo;";
 answers[83] = choices[83][1];
 units[83] = "58";
 comments[83] = "Id Pregunta: 9612. NULL";


//  Id pregunta: 9620 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  Las fibras (threads) en el SO Windows...";
 choices[84]= new Array();
 choices[84][0] = "Se ejecutan en modo usuario";
 choices[84][1] = "Usan multitarea preemptiva";
 choices[84][2] = "Usan multitarea colaborativa";
 choices[84][3] = "a) y c) son ciertas";
 answers[84] = choices[84][3];
 units[84] = "56";
 comments[84] = "Id Pregunta: 9620. ";


//  Id pregunta: 9624 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)   Indique cual de las siguientes ediciones no corresponde a Windows Server 2012 ";
 choices[85]= new Array();
 choices[85][0] = "Bussiness";
 choices[85][1] = "Essentials";
 choices[85][2] = "Foundation";
 choices[85][3] = "Standard";
 answers[85] = choices[85][0];
 units[85] = "56";
 comments[85] = "Id Pregunta: 9624. Examen TIC A1 2013";


//  Id pregunta: 9731 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  ANSI/ISO SQL define ciertos niveles de aislamiento en transacciones en funci&oacute;n de qu&eacute; fen&oacute;menos puede que ocurran. Indique la respuesta correcta respecto al fen&oacute;meno &quot;lectura fantasma&quot;:";
 choices[86]= new Array();
 choices[86][0] = "Se permite en read uncommitted, read committed y repeatable read, pero no se permite en serializable.";
 choices[86][1] = "Se permite en read uncommitted y read committed, pero no se permite en repeatable read ni en serializable.";
 choices[86][2] = "Se permite en read uncommitted y repeatable read, pero no se permite en read committed ni en serializable.";
 choices[86][3] = "Se permite en read uncommitted, pero no se permite en read committed, repeatable read ni en serializable.";
 answers[86] = choices[86][0];
 units[86] = "57";
 comments[86] = "Id Pregunta: 9731. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9776 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  Para entornos Unix, indica c&oacute;mo se asigna el sticky bit a un directorio:";
 choices[87]= new Array();
 choices[87][0] = "chmod u+s /directorio/fichero ";
 choices[87][1] = "chmog g+s /directorio ";
 choices[87][2] = "chmod 177 /directorio ";
 choices[87][3] = "chmod +t /directorio ";
 answers[87] = choices[87][3];
 units[87] = "53";
 comments[87] = "Id Pregunta: 9776. Examen TIC A2 2013";


//  Id pregunta: 9921 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  En M&eacute;trica v3, en relaci&oacute;n al modelo entidad/relaci&oacute;n extendido, dentro de las relaciones d&eacute;biles, &iquest;qu&eacute; dos divisiones se distinguen?";
 choices[88]= new Array();
 choices[88][0] = "Dependencia en existencia y dependencia en identificaci&oacute;n.";
 choices[88][1] = "Dependencia en composici&oacute;n y dependencia en identificaci&oacute;n.";
 choices[88][2] = "Dependencia en existencia y dependencia en discriminaci&oacute;n.";
 choices[88][3] = "Dependencia en composici&oacute;n y dependencia en discriminaci&oacute;n.";
 answers[88] = choices[88][0];
 units[88] = "86,58";
 comments[88] = "Id Pregunta: 9921. TIC A2, Examen 2013";


//  Id pregunta: 10166 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  Sea la relaci&oacute;n SOLICITUD (CODIGO, FECHA, DNI_SOLICITANTE, NOM_SOLICITANTE, TEL_SOLICITANTE) y el atributo CODIGO su clave primaria, &iquest;en qu&eacute; forma normal se encuentra?";
 choices[89]= new Array();
 choices[89][0] = "Sin normalizar";
 choices[89][1] = "1&ordf; Forma Normal";
 choices[89][2] = "2&ordf; Forma Normal";
 choices[89][3] = "3&ordf; Forma Normal";
 answers[89] = choices[89][0];
 units[89] = "58";
 comments[89] = "Id Pregunta: 10166. ";


//  Id pregunta: 10172 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  Respecto los distintos tipos de drivers JDBC, se verifica que:";
 choices[90]= new Array();
 choices[90][0] = "Los drivers JDBC de tipo III son recomendables si la aplicaci&oacute;n Java ha de acceder a diferentes bases de datos o se desconoce el SGBD destino";
 choices[90][1] = "El uso de drivers JDBC de tipo IV evita problemas de dependencia tecnol&oacute;gica del fabricante";
 choices[90][2] = "Al permitir que la aplicaci&oacute;n Java interact&uacute;e con diferentes SGBD, un driver de tipo III no es 100% Java, ya que incluye c&oacute;digo espec&iacute;fico o nativo de cada SGBD";
 choices[90][3] = "Todas las anteriores";
 answers[90] = choices[90][0];
 units[90] = "58";
 comments[90] = "Id Pregunta: 10172. ";


//  Id pregunta: 10284 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  Indique qu&eacute; soluci&oacute;n de las siguientes NO est&aacute; relacionada con los Sistemas Gestores de Base de Datos (SGBD):";
 choices[91]= new Array();
 choices[91][0] = "MongoDB";
 choices[91][1] = "MariaDB";
 choices[91][2] = "HeidiSQL";
 choices[91][3] = "MarcoDB";
 answers[91] = choices[91][3];
 units[91] = "57";
 comments[91] = "Id Pregunta: 10284. TIC A2, libre, examen 2013";


//  Id pregunta: 10309 AÃ±o de creación de pregunta: 2014-01-01
 questions[92]= "93)  Una sentencia JCL comienza con:";
 choices[92]= new Array();
 choices[92][0] = "//";
 choices[92][1] = "*+";
 choices[92][2] = "#&gt;";
 choices[92][3] = "$&gt;";
 answers[92] = choices[92][0];
 units[92] = "55";
 comments[92] = "Id Pregunta: 10309. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10493 AÃ±o de creación de pregunta: 2014-01-01
 questions[93]= "94)  &iquest;Qu&eacute; comando Linux permite conocer los archivos que tiene abiertos un proceso?";
 choices[93]= new Array();
 choices[93][0] = "ps -a";
 choices[93][1] = "top";
 choices[93][2] = "fork";
 choices[93][3] = "lsof";
 answers[93] = choices[93][3];
 units[93] = "53";
 comments[93] = "Id Pregunta: 10493. ps y top muestra informaci&oacute;n de los procesos, pero no de los archivos abiertos, solo lsof hace eso";


//  Id pregunta: 10789 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l de las siguientes opciones NO corresponde a un sistema de ficheros empleado en Sistemas Operativos GNU/Linux?";
 choices[94]= new Array();
 choices[94][0] = "ext3";
 choices[94][1] = "mini fs";
 choices[94][2] = "ReiserFS";
 choices[94][3] = "Reiser4";
 answers[94] = choices[94][1];
 units[94] = "53, 54";
 comments[94] = "Id Pregunta: 10789. Examen GSI 2014";


//  Id pregunta: 10790 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  El algoritmo de Peterson corresponde a:";
 choices[95]= new Array();
 choices[95][0] = "Un algoritmo de ordenaci&oacute;n de listas.";
 choices[95][1] = "Un m&eacute;todo de ordenaci&oacute;n en un sistema distribuido.";
 choices[95][2] = "Una pol&iacute;tica de sustituci&oacute;n de p&aacute;ginas al producirse un fallo de p&aacute;gina.";
 choices[95][3] = "Una soluci&oacute;n al problema de la exclusi&oacute;n mutua.";
 answers[95] = choices[95][3];
 units[95] = "52";
 comments[95] = "Id Pregunta: 10790. Examen GSI 2014";


//  Id pregunta: 10794 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Se quiere incluir una base de datos local en una aplicaci&oacute;n para m&oacute;viles Android. &iquest;Cu&aacute;l de las siguientes ser&iacute;a la m&aacute;s adecuada?";
 choices[96]= new Array();
 choices[96][0] = "SQLite.";
 choices[96][1] = "Oracle Pocket.";
 choices[96][2] = "SQL Server compact.";
 choices[96][3] = "MySQL micro edition.";
 answers[96] = choices[96][0];
 units[96] = "57";
 comments[96] = "Id Pregunta: 10794. Examen GSI 2014";


//  Id pregunta: 10870 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  En Linux, la primera partici&oacute;n l&oacute;gica en el disco duro maestro IDE del canal primario se identifica con:";
 choices[97]= new Array();
 choices[97][0] = "/dev/sda1";
 choices[97][1] = "/dev/hda1";
 choices[97][2] = "/dev/hda5";
 choices[97][3] = "/dev/hda2";
 answers[97] = choices[97][2];
 units[97] = "53, 54";
 comments[97] = "Id Pregunta: 10870. Examen GSI 2014";


//  Id pregunta: 10878 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Cu&aacute;l de los siguientes NO es un producto de virtualizaci&oacute;n?";
 choices[98]= new Array();
 choices[98][0] = "Virtual PC.";
 choices[98][1] = "XEN.";
 choices[98][2] = "Atheros.";
 choices[98][3] = "VirtualBox.";
 answers[98] = choices[98][2];
 units[98] = "119";
 comments[98] = "Id Pregunta: 10878. Examen GSI 2014";


//  Id pregunta: 11037 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Qu&eacute; versi&oacute;n de SQL incorpor&oacute; las reglas de integridad referencial?";
 choices[99]= new Array();
 choices[99][0] = "SQL-86";
 choices[99][1] = "SQL-89";
 choices[99][2] = "SQL-92";
 choices[99][3] = "SQL-1999";
 answers[99] = choices[99][1];
 units[99] = "58";
 comments[99] = "Id Pregunta: 11037. ";


