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

//  Id pregunta: 715 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  Una base de datos relacional est&aacute; en tercera forma normal, si adem&aacute;s de estar en segunda forma normal";
 choices[0]= new Array();
 choices[0][0] = "Todos sus atributos no primos dependen no transitivamente de la llave primaria";
 choices[0][1] = "Los atributos no primos dependen funcionalmente de la llave primaria";
 choices[0][2] = "Por cada rengl&oacute;n columna contiene valores at&oacute;micos.";
 choices[0][3] = "No contiene ning&uacute;n grupo repetitivo";
 answers[0] = choices[0][0];
 units[0] = "58";
 comments[0] = "Id Pregunta: 715. Similar a examen TIC SS A 2003";


//  Id pregunta: 717 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  En relaci&oacute;n a la definici&oacute;n y caracter&iacute;sticas de una base de datos, &iquest;cu&aacute;l de las siguientes afirmaciones es falsa?";
 choices[1]= new Array();
 choices[1][0] = "En una base de datos se admite la redundancia controlada";
 choices[1][1] = "En una base de datos no debe darse la redundancia l&oacute;gica";
 choices[1][2] = "En una base de datos puede existir la redundancia f&iacute;sica";
 choices[1][3] = "En una base de datos puede admitirse la redundancia l&oacute;gica pero no f&iacute;sica";
 answers[1] = choices[1][3];
 units[1] = "57";
 comments[1] = "Id Pregunta: 717. Examen TIC MAP B 2004";


//  Id pregunta: 720 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  Indique cu&aacute;l de las siguientes definiciones es verdadera. &quot;ODBC es:";
 choices[2]= new Array();
 choices[2][0] = "Un lenguaje de programaci&oacute;n para acceder a datos en sistemas gestores de bases de datos no relacionales&quot;.";
 choices[2][1] = "Una interface de aplicaciones para acceder a datos en sistemas gestores de bases de datos tanto relacionales como no relacionales&quot;.";
 choices[2][2] = "Una aplicaci&oacute;n que permite a los usuarios almacenar, procesar y recuperar informaci&oacute;n en una base de datos&quot;.";
 choices[2][3] = "Un lenguaje de programaci&oacute;n est&aacute;ndar que controla e interact&uacute;a con un sistema de gesti&oacute;n de base de datos&quot;.";
 answers[2] = choices[2][1];
 units[2] = "58";
 comments[2] = "Id Pregunta: 720. Examen TIC MAP B 2004";


//  Id pregunta: 728 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  En una base de datos las vistas";
 choices[3]= new Array();
 choices[3][0] = "Definen la estructura y organizaci&oacute;n de los datos";
 choices[3][1] = "Permiten restringir el acceso, permitiendo que diferentes usuarios s&oacute;lo vean ciertas filas o ciertas columnas de una tabla";
 choices[3][2] = "Se crean autom&aacute;ticamente cuando una consulta se realiza m&aacute;s de una vez en la misma sesi&oacute;n";
 choices[3][3] = "S&oacute;lo pueden ser creadas por el usuario propietario del esquema";
 answers[3] = choices[3][1];
 units[3] = "57";
 comments[3] = "Id Pregunta: 728. Examen TIC MAP B 2004";


//  Id pregunta: 732 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  En un sistema de informaci&oacute;n de una universidad, en el que se almacenan las asignaturas en las que se matriculan los alumnos, &iquest;cu&aacute;l ser&iacute;a la mejor manera de almacenar las asignaturas de las matr&iacute;culas en la base de datos relacional atendiendo a criterios";
 choices[4]= new Array();
 choices[4][0] = "En la tabla ALUMNOS; con un campo para cada asignatura";
 choices[4][1] = "En la tabla MATR&Iacute;CULA, con un campo asignaturas, en el que se almacenar&iacute;an, delimitadas por separadores, las asignaturas";
 choices[4][2] = "En la tabla ASIGNATURAS de MATR&Iacute;CULA, que tendr&iacute;a tantos registros como asignaturas tenga la matr&iacute;cula. Cada registro constar&iacute;a del identificador de la matr&iacute;cula y el identificador de la asignatura";
 choices[4][3] = "En le tabla ASIGNATURAS de MATR&Iacute;CULA, que tendr&iacute;a un registro por matr&iacute;cula, con tantos campos como asignaturas. El n&uacute;mero m&aacute;ximo de asignaturas depender&iacute;a de la universidad";
 answers[4] = choices[4][2];
 units[4] = "56,57";
 comments[4] = "Id Pregunta: 732. Examen TIC MAP B 2004";


//  Id pregunta: 733 AÃ±o de creación de pregunta: 2004-01-01
 questions[5]= "6)  El Administrador de una base de datos no tiene las siguientes responsabilidades:";
 choices[5]= new Array();
 choices[5][0] = "Optimizaci&oacute;n de las redundancias del espacio de almacenamiento";
 choices[5][1] = "Garantizar la seguridad f&iacute;sica de los datos ante fallos en el sistema, por ejemplo ca&iacute;das de tensi&oacute;n";
 choices[5][2] = "Participar en el dise&ntilde;o f&iacute;sico de los datos, definiendo la estructura f&iacute;sica de los &eacute;stos a partir del modelo de datos o de clases";
 choices[5][3] = "Determinar la interfaz de conexi&oacute;n con otros sistemas ya existentes";
 answers[5] = choices[5][3];
 units[5] = "57";
 comments[5] = "Id Pregunta: 733. Examen TIC MAP B 2004";


//  Id pregunta: 764 AÃ±o de creación de pregunta: 2004-01-01
 questions[6]= "7)  En el entorno de la seguridad de los sistemas operativos UNIX y redes de ordenadores, se llama socket:";
 choices[6]= new Array();
 choices[6][0] = "A la combinaci&oacute;n de una direcci&oacute;n de m&aacute;quina y un puerto";
 choices[6][1] = "A la combinaci&oacute;n de una direcci&oacute;n m&aacute;quina, un puerto y un usuario autenticado de una aplicaci&oacute;n";
 choices[6][2] = "A la conexi&oacute;n entre la m&aacute;quina receptora y la emisora en una red con protocolos TCP/IP";
 choices[6][3] = "Es el protocolo (puerto 113, TCP) que utiliza un mecanismo para determinar nombres de usuarios en conexiones TCP. Trabaja conjuntamente con procesos del tipo &quot;identd&quot; y programas &quot;TCP Wrappers&quot;";
 answers[6] = choices[6][0];
 units[6] = "53, 54";
 comments[6] = "Id Pregunta: 764. ";


//  Id pregunta: 777 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  En teor&iacute;a de colas, &iquest;qu&eacute; se entiende por tiempo de respuesta?:";
 choices[7]= new Array();
 choices[7][0] = "El tiempo que una tarea emplea en un dispositivo del sistema, ya sea us&aacute;ndolo o esperando utilizarlo";
 choices[7][1] = "El tiempo que una tarea emplea usando los componentes del sistema";
 choices[7][2] = "El tiempo que una tarea espera para poder usar un recurso que est&aacute; siendo utilizado por otra";
 choices[7][3] = "La cantidad  de tiempo extra empleado en esperas";
 answers[7] = choices[7][0];
 units[7] = "53";
 comments[7] = "Id Pregunta: 777. ";


//  Id pregunta: 801 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Recuerda los nombres de los inventores del lenguaje C?:";
 choices[8]= new Array();
 choices[8][0] = "Hewlett y Packard";
 choices[8][1] = "Ritchie y Kernighan";
 choices[8][2] = "Stalling y Black";
 choices[8][3] = "Bell Laboratories";
 answers[8] = choices[8][1];
 units[8] = "53";
 comments[8] = "Id Pregunta: 801. ";


//  Id pregunta: 808 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  A la vista de la tabla siguiente: VENTAS (COD_PIEZA, COD_ALMACEN, CANTIDAD, FECHA, DIRECCION_ALMACEN), donde la clave principal es  COD_PIEZA y COD_ALMACEN, podemos decir que:";
 choices[9]= new Array();
 choices[9][0] = "Cumple con la segunda forma normal";
 choices[9][1] = "Cumple con la segunda pero no con la tercera forma normal";
 choices[9][2] = "Cumple hasta la tercera forma normal pero no con la cuarta formal";
 choices[9][3] = "No cumple la segunda forma normal";
 answers[9] = choices[9][3];
 units[9] = "58";
 comments[9] = "Id Pregunta: 808. ";


//  Id pregunta: 853 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Cu&aacute;l de las siguientes no representan una caracter&iacute;stica de Unix?:";
 choices[10]= new Array();
 choices[10][0] = "Multiusuario y multitarea";
 choices[10][1] = "Sistema jer&aacute;rquico de ficheros";
 choices[10][2] = "Comando de int&eacute;rpretes flexible";
 choices[10][3] = "Portable s&oacute;lo en ordenadores de m&aacute;s de 32 bits";
 answers[10] = choices[10][3];
 units[10] = "52, 53";
 comments[10] = "Id Pregunta: 853. ";


//  Id pregunta: 873 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Cu&aacute;l de los siguientes se considerar&aacute; siempre software de aplicaciones y no software de base?:";
 choices[11]= new Array();
 choices[11][0] = "Sistemas operativos";
 choices[11][1] = "Software de comunicaciones";
 choices[11][2] = "Software ofim&aacute;tico";
 choices[11][3] = "Sistemas de gesti&oacute;n de datos";
 answers[11] = choices[11][2];
 units[11] = "56";
 comments[11] = "Id Pregunta: 873. ";


//  Id pregunta: 875 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  &iquest;Cu&aacute;l de los siguientes sistemas operativos son implementaciones de POSIX (IEEE 1003.1)?:";
 choices[12]= new Array();
 choices[12][0] = "Microsoft Windows para Trabajo en Grupo 3.11";
 choices[12][1] = "MVS de IBM";
 choices[12][2] = "System 7 de Apple";
 choices[12][3] = "ATT UNIX SVR4";
 answers[12] = choices[12][3];
 units[12] = "53";
 comments[12] = "Id Pregunta: 875. ";


//  Id pregunta: 934 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  &iquest;Qu&eacute; es VMS?:";
 choices[13]= new Array();
 choices[13][0] = "Un sistema de almacenamiento de voz, fax o datos cuando el usuario no puede atender dichas llamadas (buz&oacute;n)";
 choices[13][1] = "Un sistema operativo tipo Unix originalmente desarrollado por DEC para sus m&aacute;quinas VAX";
 choices[13][2] = "Las 2 respuestas anteriores son correctas";
 choices[13][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[13] = choices[13][2];
 units[13] = "52";
 comments[13] = "Id Pregunta: 934. ";


//  Id pregunta: 944 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  &iquest;Qu&eacute; significa RACF?:";
 choices[14]= new Array();
 choices[14][0] = "Resource Access Control Facility";
 choices[14][1] = "Relationship Access Control Facility";
 choices[14][2] = "Resource Aknowledgement Control Facility";
 choices[14][3] = "Ninguna de las anteriores es cierta";
 answers[14] = choices[14][0];
 units[14] = "52";
 comments[14] = "Id Pregunta: 944. ";


//  Id pregunta: 964 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  Considere un sistema con un espacio l&oacute;gico de memoria de 128k p&aacute;ginas, cada una con 8k palabras de 16 bits y una memoria f&iacute;sica de 64 Mb. &iquest;Cu&aacute;ntos bits hay en la direcci&oacute;n l&oacute;gica?:";
 choices[15]= new Array();
 choices[15][0] = "32";
 choices[15][1] = "30";
 choices[15][2] = "26";
 choices[15][3] = "25";
 answers[15] = choices[15][1];
 units[15] = "52";
 comments[15] = "Id Pregunta: 964. ";


//  Id pregunta: 1036 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  El modelo de referencia ANSI para SGBD, en cuanto a la definici&oacute;n de los datos:";
 choices[16]= new Array();
 choices[16][0] = "Crea cuatro tipos de esquemas: conceptual, l&oacute;gico, f&iacute;sico, de implementaci&oacute;n";
 choices[16][1] = "Establece la estrecha dependencia que debe existir entre los datos y las aplicaciones";
 choices[16][2] = "Define cinco niveles de interpretaci&oacute;n de los mismos, seg&uacute;n cinco aspectos: visualizaci&oacute;n, cardinalidad, muestreo, distancia y flexibilidad";
 choices[16][3] = "Establece los Metadatos (datos sobre los datos) que se almacenan en el Diccionario de Datos";
 answers[16] = choices[16][3];
 units[16] = "57";
 comments[16] = "Id Pregunta: 1036. ";


//  Id pregunta: 1046 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  El programa del sistema operativo cuya misi&oacute;n es resolver las referencias externas de uno o varios m&oacute;dulos objeto y formar una unidad ejecutable se denomina:";
 choices[17]= new Array();
 choices[17][0] = "Coordinador";
 choices[17][1] = "Montador";
 choices[17][2] = "Cargador";
 choices[17][3] = "Editor";
 answers[17] = choices[17][1];
 units[17] = "52";
 comments[17] = "Id Pregunta: 1046. ";


//  Id pregunta: 1053 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  El SGBD permite la definici&oacute;n de la Base de Datos a tres niveles de abstracci&oacute;n: l&oacute;gico, f&iacute;sico y externo En el nivel l&oacute;gico:";
 choices[18]= new Array();
 choices[18][0] = "Se da una definici&oacute;n de las estructuras de datos que constituyen la base de datos";
 choices[18][1] = "Se elige una implementaci&oacute;n de cada una de las estructuras de datos";
 choices[18][2] = "Se definen vistas parciales de la base de datos para distintos grupos de usuarios";
 choices[18][3] = "Ninguna es cierta";
 answers[18] = choices[18][0];
 units[18] = "57";
 comments[18] = "Id Pregunta: 1053. ";


//  Id pregunta: 1066 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  Elija el tipo de relaciones entre registros que el modelo en red es incapaz de mostrar:";
 choices[19]= new Array();
 choices[19][0] = "1 a 1";
 choices[19][1] = "1 a N";
 choices[19][2] = "N a M";
 choices[19][3] = "Es capaz de mostrar todas";
 answers[19] = choices[19][3];
 units[19] = "57";
 comments[19] = "Id Pregunta: 1066. ";


//  Id pregunta: 1104 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  En la arquitectura ANSI/X3 SPARC a tres niveles de BD, indicar cu&aacute;l de los esquemas citados a continuaci&oacute;n no corresponde a dicha arquitectura:";
 choices[20]= new Array();
 choices[20][0] = "Esquema externo";
 choices[20][1] = "Esquema legal";
 choices[20][2] = "Esquema conceptual";
 choices[20][3] = "Esquema interno";
 answers[20] = choices[20][1];
 units[20] = "57";
 comments[20] = "Id Pregunta: 1104. ";


//  Id pregunta: 1124 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  En programaci&oacute;n concurrente, el problema de la exclusi&oacute;n mutua consiste en:";
 choices[21]= new Array();
 choices[21][0] = "2 procesos no pueden estar a la vez en la secci&oacute;n cr&iacute;tica";
 choices[21][1] = "Todo proceso debe de poder entrar en la seccion critica";
 choices[21][2] = "Un proceso de fuera de la secci&oacute;n critica no puede bloquear el acceso a otro";
 choices[21][3] = "Todas son ciertas";
 answers[21] = choices[21][3];
 units[21] = "52";
 comments[21] = "Id Pregunta: 1124. ";


//  Id pregunta: 1127 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  En relaci&oacute;n con el concepto de memoria virtual, una de las siguientes afirmaciones es falsa. Indique cu&aacute;l:";
 choices[22]= new Array();
 choices[22][0] = "El mecanismo de traducci&oacute;n de las direcciones de las memorias virtuales se basa en una memoria asociativa que contiene la tabla de p&aacute;ginas f&iacute;sicas y sus equivalentes l&oacute;gicas";
 choices[22][1] = "Generalmente existe una memoria asociativa de alta velocidad que sirve para albergar aquellos elementos de la tabla de p&aacute;ginas/segmentos utilizadas m&aacute;s recientemente";
 choices[22][2] = "La viabilidad de la memoria virtual se basa en el principio de la proximidad de las referencias a memorias";
 choices[22][3] = "La memoria virtual paginada da lugar a la fragmentaci&oacute;n externa";
 answers[22] = choices[22][3];
 units[22] = "52";
 comments[22] = "Id Pregunta: 1127. ";


//  Id pregunta: 1162 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  En Unix, &iquest;qu&eacute; informaci&oacute;n contienen los directorios?:";
 choices[23]= new Array();
 choices[23][0] = "El n&uacute;mero de i-nodo, el nombre del fichero, el uid del propietario, el gid del grupo y los permisos de acceso";
 choices[23][1] = "El n&uacute;mero de i-nodo y el nombre del fichero";
 choices[23][2] = "El nombre del fichero y la direcci&oacute;n del bloque de disco donde comienza el principio de los datos";
 choices[23][3] = "El nombre del fichero y la direcci&oacute;n dentro de la TOC (Table of Contents) del disco donde empieza la concatenaci&oacute;n de asignaci&oacute;n de espacio";
 answers[23] = choices[23][1];
 units[23] = "53";
 comments[23] = "Id Pregunta: 1162. NULL";


//  Id pregunta: 1204 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  La 3FN (Tercera Forma Normal), definida por Codd, dice:";
 choices[24]= new Array();
 choices[24][0] = "Una relaci&oacute;n est&aacute; en 3FN (Tercera Forma Normal), si no incluye ning&uacute;n grupo repetitivo";
 choices[24][1] = "Una relaci&oacute;n est&aacute; en 3FN (Tercera Forma Normal), si todos los atributos que no forman parte de la clave primaria son mutuamente independientes y dependen funcionalmente de forma completa de la clave";
 choices[24][2] = "Una relaci&oacute;n est&aacute; en 3FN (Tercera Forma Normal), si est&aacute; en 2FN (Segunda Forma Normal) y adem&aacute;s cualquiera de sus atributos no primarios tienen una dependencia plena con cada una de las claves y no con partes de &eacute;sta";
 choices[24][3] = "Elimina dependencias multivaluadas";
 answers[24] = choices[24][1];
 units[24] = "58";
 comments[24] = "Id Pregunta: 1204. NULL";


//  Id pregunta: 1302 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Para saber en Unix los ficheros que cuelgan de un directorio se utiliza el comando:";
 choices[25]= new Array();
 choices[25][0] = "ldir";
 choices[25][1] = "ls";
 choices[25][2] = "pwd";
 choices[25][3] = "ps";
 answers[25] = choices[25][1];
 units[25] = "52,53";
 comments[25] = "Id Pregunta: 1302. ";


//  Id pregunta: 1334 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  Se puede decir que una base de datos es:";
 choices[26]= new Array();
 choices[26][0] = "Un elemento f&iacute;sico (hardware)";
 choices[26][1] = "Un dispositivo de almacenamiento";
 choices[26][2] = "Un conjunto de datos interrelacionados";
 choices[26][3] = "Una colecci&oacute;n de ficheros independientes entre s&iacute;";
 answers[26] = choices[26][2];
 units[26] = "57";
 comments[26] = "Id Pregunta: 1334. ";


//  Id pregunta: 1343 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  Se&ntilde;ale el enunciado falso:";
 choices[27]= new Array();
 choices[27][0] = "Los sistemas transaccionales deben bloquear los registros que vayan a modificar";
 choices[27][1] = "Cuando la aplicaci&oacute;n indica que la transacci&oacute;n ha terminado es cuando se actualizan las bases de datos y se suelen liberar los registros intervinientes";
 choices[27][2] = "Todos los aspectos de una transacci&oacute;n deben completarse o el sistema debe actuar como si ninguna se hubiera completado";
 choices[27][3] = "Los efectos de una transacci&oacute;n deben ser visibles por las dem&aacute;s transacciones antes que la transacci&oacute;n se complete";
 answers[27] = choices[27][3];
 units[27] = "58";
 comments[27] = "Id Pregunta: 1343. ";


//  Id pregunta: 1347 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  Se&ntilde;ale la respuesta correcta. El software de base comprende:";
 choices[28]= new Array();
 choices[28][0] = "El sistema operativo, el sistema de gesti&oacute;n de datos , el software de comunicaciones y las utilidades";
 choices[28][1] = "El sistema operativo,  el software de comunicaciones y las utilidades";
 choices[28][2] = "El sistema operativo, el sistema de gesti&oacute;n de datos  y las utilidades";
 choices[28][3] = "El sistema operativo y las utilidades";
 answers[28] = choices[28][0];
 units[28] = "55";
 comments[28] = "Id Pregunta: 1347. ";


//  Id pregunta: 1349 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  Se&ntilde;ale la respuesta falsa respecto de Unix:";
 choices[29]= new Array();
 choices[29][0] = "Se cre&oacute; basandose en MULTICS";
 choices[29][1] = "Est&aacute; escrito en lenguaje C";
 choices[29][2] = "Se us&oacute; primero en la NASA";
 choices[29][3] = "Inicialmente era gratuito";
 answers[29] = choices[29][2];
 units[29] = "53";
 comments[29] = "Id Pregunta: 1349. ";


//  Id pregunta: 1376 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  Todas las respuestas son nombres de compa&ntilde;&iacute;as que han desarrollado sistemas operativos de red, excepto una. &iquest;Cu&aacute;l?:";
 choices[30]= new Array();
 choices[30][0] = "Alcatel";
 choices[30][1] = "Microsoft";
 choices[30][2] = "Novell";
 choices[30][3] = "Banyan";
 answers[30] = choices[30][0];
 units[30] = "52";
 comments[30] = "Id Pregunta: 1376. ";


//  Id pregunta: 1378 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  Un &quot;service pack&quot; en el entorno del sistema operativo Windows 2000:";
 choices[31]= new Array();
 choices[31][0] = "Es una aplicaci&oacute;n auxiliar que amplia las funcionalidades del sistema operativo";
 choices[31][1] = "Es un componente del servicio de paquetes";
 choices[31][2] = "Es un paquete integrado que incluye el sistema operativo y programas de aplicaci&oacute;n";
 choices[31][3] = "Es un conjunto de correcciones o partes del sistema operativo que corrige fallos o vulnerabilidades de seguridad y tambi&eacute;n puede ampliar las funcionalidades de dicho sistema";
 answers[31] = choices[31][3];
 units[31] = "56";
 comments[31] = "Id Pregunta: 1378. ";


//  Id pregunta: 1391 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  Un 'Recordset' es:";
 choices[32]= new Array();
 choices[32][0] = "Un conjunto de variables en un lenguaje orientado a objetos";
 choices[32][1] = "Una referencia al resultado de una consulta o tabla de base de datos";
 choices[32][2] = "La unidad b&aacute;sica para acceder a vol&uacute;menes de disco montados por NFS";
 choices[32][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[32] = choices[32][1];
 units[32] = "58";
 comments[32] = "Id Pregunta: 1391. ";


//  Id pregunta: 1400 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  Un sistema operativo b&aacute;sico se compone de:";
 choices[33]= new Array();
 choices[33][0] = "Gesti&oacute;n de E/S";
 choices[33][1] = "Gesti&oacute;n de Memoria";
 choices[33][2] = "Planificaci&oacute;n";
 choices[33][3] = "Todas son ciertas";
 answers[33] = choices[33][3];
 units[33] = "52";
 comments[33] = "Id Pregunta: 1400. ";


//  Id pregunta: 1401 AÃ±o de creación de pregunta: 2002-01-01
 questions[34]= "35)  Un sistema operativo debe evolucionar f&aacute;cilmente porque:";
 choices[34]= new Array();
 choices[34][0] = "Hay frecuentes actualizaciones de hardware, y nuevos tipos del mismo; hay nuevos servicios que implican nuevos mecanismos de control; y se presentan siempre fallos no previstos que es necesario corregir";
 choices[34][1] = "No debe evolucionar f&aacute;cilmente, pues debe estar prevista desde su generaci&oacute;n la incorporaci&oacute;n de nuevos elementos de hardware";
 choices[34][2] = "No debe evolucionar f&aacute;cilmente, para evitar la f&aacute;cil generaci&oacute;n de versiones no autorizadas por el propietario";
 choices[34][3] = "Hay frecuentes desapariciones y apariciones de empresas de software, que podr&iacute;an dar lugar a una descontinuidad de versiones";
 answers[34] = choices[34][0];
 units[34] = "52";
 comments[34] = "Id Pregunta: 1401. ";


//  Id pregunta: 1529 AÃ±o de creación de pregunta: 2003-01-01
 questions[35]= "36)  El Standard IEEE 1387.2-1995: Software Administration, define el est&aacute;ndar POSIX-7.2:";
 choices[35]= new Array();
 choices[35][0] = "Este est&aacute;ndar provee un conjunto de utilidades de empaquetado y administraci&oacute;n de software que simplifican las labores de distribuci&oacute;n y gesti&oacute;n del software en m&aacute;quinas aisladas pero no en entornos heterog&eacute;neos.";
 choices[35][1] = "Este est&aacute;ndar provee un conjunto de utilidades de empaquetado y administraci&oacute;n de software que simplifican las labores de distribuci&oacute;n y gesti&oacute;n del software en m&aacute;quinas aisladas o en entornos heterog&eacute;neos.";
 choices[35][2] = " POSIX (Portable Operating System Interface) es un grupo de interfaces est&aacute;ndares de sistema operativo, y la 7.2 esta dise&ntilde;ada espec&iacute;ficamente para soportar la portabilidad de aplicaciones en c&oacute;digo fuente.";
 choices[35][3] = "Este est&aacute;ndar provee un entorno de computaci&oacute;n en el cual las aplicaciones pueden ser portadas a todos los productos certificados, que pueden ser de distintos proveedores. Contiene est&aacute;ndares para el sistema operativo, protocolos de red, lenguajes de p";
 answers[35] = choices[35][1];
 units[35] = "53";
 comments[35] = "Id Pregunta: 1529. Junta Andaluc&iacute;a";


//  Id pregunta: 1676 AÃ±o de creación de pregunta: 2004-01-01
 questions[36]= "37)  Indique la afirmaci&oacute;n correcta";
 choices[36]= new Array();
 choices[36][0] = "Una relaci&oacute;n est&aacute; en 4&ordf;FN si no incluye dependencias combinacionales";
 choices[36][1] = "Una relaci&oacute;n est&aacute; en 2&ordf;FN si no incluye grupos repetitivos y sus atributos no primarios tienen una dependencia plena respecto a cada una de las claves y no con partes de estas";
 choices[36][2] = "Una relaci&oacute;n est&aacute; en 1&ordf;FN si incluye alg&uacute;n grupo repetitivo";
 choices[36][3] = "Una relaci&oacute;n est&aacute; en 3&ordf;FN si y solo si est&aacute; en 1&ordf;FN pero no en 2&ordf;FN";
 answers[36] = choices[36][1];
 units[36] = "58";
 comments[36] = "Id Pregunta: 1676. ";


//  Id pregunta: 1728 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  El permiso de Unix 500 permite:";
 choices[37]= new Array();
 choices[37][0] = "Lectura y escritura para el propietario del archivo";
 choices[37][1] = "Lectura y ejecuci&oacute;n para  el propietario del archivo";
 choices[37][2] = "lectura y escritura para todos los usuarios";
 choices[37][3] = "lectura y ejecuci&oacute;n para todos los usuarios del mismo grupo que lo ha creado";
 answers[37] = choices[37][1];
 units[37] = "54";
 comments[37] = "Id Pregunta: 1728. NULL";


//  Id pregunta: 1730 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  El Bourne shell:";
 choices[38]= new Array();
 choices[38][0] = "Est&aacute; basado en el lenguaje C";
 choices[38][1] = "Es posterior al shell de korn";
 choices[38][2] = "No es un shell de Unix s&oacute;lo de Linux";
 choices[38][3] = "Es el shell m&aacute;s antiguo";
 answers[38] = choices[38][3];
 units[38] = "54";
 comments[38] = "Id Pregunta: 1730. NULL";


//  Id pregunta: 1734 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  Un sistema operativo trata de obtener el m&aacute;ximo rendimiento del hardware que controla. La multitarea y la existencia de varios procesadores son algunas herramientas para conseguirlo. Se&ntilde;ale qu&eacute; afirmaci&oacute;n es cierta:";
 choices[39]= new Array();
 choices[39][0] = "No existe incompatibilidad en emplear multiprogramaci&oacute;n y tiempo compartido en un sistema multiprocesador.";
 choices[39][1] = "Una transacci&oacute;n se inicia con la petici&oacute;n de un terminal y acaba con la respuesta de la CPU.";
 choices[39][2] = "En un sistema con time-sharing, la asignaci&oacute;n de prioridades a unos procesos respecto de otros no mejora el rendimiento.";
 choices[39][3] = "El sistema operativo no es responsable de la sincronizaci&oacute;n de procesos, son las aplicaciones quienes se encargan de esa tarea.";
 answers[39] = choices[39][0];
 units[39] = "55";
 comments[39] = "Id Pregunta: 1734. ";


//  Id pregunta: 1737 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  El sistema operativo WindowsNT se basaba en una estructura de n&uacute;cleo de sistema operativo";
 choices[40]= new Array();
 choices[40][0] = "Microkernel";
 choices[40][1] = "Monol&iacute;tico";
 choices[40][2] = "Anillo";
 choices[40][3] = "Red";
 answers[40] = choices[40][0];
 units[40] = "56";
 comments[40] = "Id Pregunta: 1737. ";


//  Id pregunta: 1742 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  Una de las caracter&iacute;sticas de Windows 2003, que le diferencia de otras versiones anteriores, es que soporta de forma nativa:";
 choices[41]= new Array();
 choices[41][0] = "Active Directory.";
 choices[41][1] = "XML";
 choices[41][2] = "TCP/IP.";
 choices[41][3] = "HTML.";
 answers[41] = choices[41][1];
 units[41] = "56";
 comments[41] = "Id Pregunta: 1742. ";


//  Id pregunta: 1749 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  Qu&eacute; t&eacute;cnica se utiliza para eliminar la posible colisi&oacute;n de distintas peticiones de actualizaci&oacute;n simult&aacute;neas sobre un mismo dato de la base de datos";
 choices[42]= new Array();
 choices[42][0] = "Como el rendimiento de la inversi&oacute;n expresado en t&eacute;rminos de porcentaje";
 choices[42][1] = "Bloqueo";
 choices[42][2] = "Inter-Roll";
 choices[42][3] = "Roll-back";
 answers[42] = choices[42][1];
 units[42] = "58";
 comments[42] = "Id Pregunta: 1749. ";


//  Id pregunta: 2051 AÃ±o de creación de pregunta: 2004-01-01
 questions[43]= "44)  En un modelo de datos jer&aacute;rquico";
 choices[43]= new Array();
 choices[43][0] = "Un registro no es subordinado directo de ning&uacute;n otro registro.";
 choices[43][1] = "Un registro es subordinado directo de c&oacute;mo m&aacute;ximo otro registro";
 choices[43][2] = "Un registro es subordinado directo de n registros, dependiendo de la topolog&iacute;a del modelo";
 choices[43][3] = "Los registros est&aacute;n organizados en una red de relaciones mediante un grafo";
 answers[43] = choices[43][1];
 units[43] = "57";
 comments[43] = "Id Pregunta: 2051. Pregunta Junta Andalucia - A";


//  Id pregunta: 2119 AÃ±o de creación de pregunta: 2002-01-01
 questions[44]= "45)  &iquest;Cu&aacute;l de estas funciones no es propia del administrador del sistema de gesti&oacute;n de bases de datos?:";
 choices[44]= new Array();
 choices[44][0] = "Catalogar en el diccionario de datos los correspondientes al sistema de informaci&oacute;n";
 choices[44][1] = "Dise&ntilde;ar el modelo f&iacute;sico de datos";
 choices[44][2] = "Dar de alta y baja a los usuarios de las bases de datos";
 choices[44][3] = "Garantizar la ejecuci&oacute;n de los procedimientos de salvaguarda";
 answers[44] = choices[44][0];
 units[44] = "57";
 comments[44] = "Id Pregunta: 2119. ";


//  Id pregunta: 3102 AÃ±o de creación de pregunta: 2002-01-01
 questions[45]= "46)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre SGBDDs no es correcta?:";
 choices[45]= new Array();
 choices[45][0] = "La indexaci&oacute;n por palabras es uno de los tipos fundamentales de algoritmos de indexaci&oacute;n";
 choices[45][1] = "La indexaci&oacute;n por campos es uno de los tipos fundamentales de algoritmos de indexaci&oacute;n";
 choices[45][2] = "Los procedimientos de b&uacute;squeda de los SGBDD se basan en la tecnolog&iacute;a de los ficheros inversos";
 choices[45][3] = "La indexaci&oacute;n por cadenas de palabras es uno de los tipos fundamentales de algoritmos de indexaci&oacute;n";
 answers[45] = choices[45][1];
 units[45] = "58";
 comments[45] = "Id Pregunta: 3102. ";


//  Id pregunta: 4304 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  En una base de datos relacional, para definir la estructura org&aacute;nica de un organismo p&uacute;blico, la mejor soluci&oacute;n ser&aacute;:";
 choices[46]= new Array();
 choices[46][0] = "Definir una tabla de departamentos con una relaci&oacute;n reflexiva &lsquo;pertenece a&rsquo;.";
 choices[46][1] = "Definir dos tablas de departamentos con una relaci&oacute;n &lsquo;pertenece a&rsquo; entre ellas.";
 choices[46][2] = "Definir una tabla de departamentos con una clave tipo &lsquo;TREE&rsquo; que recoja la estructura org&aacute;nica.";
 choices[46][3] = "Preguntar al usuario cu&aacute;ntos niveles de departamentos tiene el organismo, y definir en una tabla de departamentos tantos atributos como niveles posibles pueda haber.";
 answers[46] = choices[46][0];
 units[46] = "58";
 comments[46] = "Id Pregunta: 4304. ";


//  Id pregunta: 4315 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  En el Sistema operativo UN&Iacute;X la expresi&oacute;n que identifica la cuenta del &ldquo;superusuario&rdquo; (que puede llevar a cabo todas las facetas de la administraci&oacute;n de sistemas) es&hellip;";
 choices[47]= new Array();
 choices[47][0] = "Usuario daemon.";
 choices[47][1] = "Usuario adm.";
 choices[47][2] = "Usuario bin.";
 choices[47][3] = "Usuario root.";
 answers[47] = choices[47][3];
 units[47] = "55";
 comments[47] = "Id Pregunta: 4315. ";


//  Id pregunta: 4389 AÃ±o de creación de pregunta: 2007-01-01
 questions[48]= "49)  En el entorno de base de datos, los &iacute;ndices son de vital importancia en las transacciones de acceso, &iquest;Cu&aacute;l de las siguientes afirmaciones no es correcta?";
 choices[48]= new Array();
 choices[48][0] = "El &iacute;ndice es tambi&eacute;n una tabla almacenada en un disco.";
 choices[48][1] = "Las tablas de &iacute;ndices se actualizan cuando se actualizan las tablas de datos.";
 choices[48][2] = "La actualizaci&oacute;n de las tablas de &iacute;ndices es transparente al usuario.";
 choices[48][3] = "Las actualizaciones de los &iacute;ndices no consumen recursos.";
 answers[48] = choices[48][3];
 units[48] = "58";
 comments[48] = "Id Pregunta: 4389. ";


//  Id pregunta: 4398 AÃ±o de creación de pregunta: 2007-01-01
 questions[49]= "50)  En el modelo relacional, &iquest;qu&eacute; se entiende por integridad referencial?";
 choices[49]= new Array();
 choices[49][0] = "Que todos los datos est&eacute;n referenciados por su clave y &eacute;sta sea &uacute;nica.";
 choices[49][1] = "Que todo atributo que represente una relaci&oacute;n sea nulo, o bien exista en la clave primaria del elemento relacionado.";
 choices[49][2] = "Que todo conjunto de operaciones que constituya una unidad, progrese en conjunto o bien falle en conjunto, pero que no progrese nunca en situaciones intermedias";
 choices[49][3] = "Que se pueda referenciar la totalidad de la base de datos.";
 answers[49] = choices[49][1];
 units[49] = "58";
 comments[49] = "Id Pregunta: 4398. ";


//  Id pregunta: 4566 AÃ±o de creación de pregunta: 2007-01-01
 questions[50]= "51)  &iquest;Cual de los siguientes es el sistema de archivos de encriptaci&oacute;n para NTFS?";
 choices[50]= new Array();
 choices[50][0] = "SEE.";
 choices[50][1] = "SCF.";
 choices[50][2] = "EFS.";
 choices[50][3] = "no existe tal sistema de archivos.";
 answers[50] = choices[50][2];
 units[50] = "56";
 comments[50] = "Id Pregunta: 4566. ";


//  Id pregunta: 4683 AÃ±o de creación de pregunta: 2007-01-01
 questions[51]= "52)  En la arquitectura ANSI/X3 SPARC a tres niveles de BD, indicar cu&aacute;l de los esquemas citados acontinuaci&oacute;n no corresponde a dicha arquitectura";
 choices[51]= new Array();
 choices[51][0] = "Esquema externo";
 choices[51][1] = "Esquema legal";
 choices[51][2] = "Esquema conceptual";
 choices[51][3] = "Esquema interno";
 answers[51] = choices[51][1];
 units[51] = "57";
 comments[51] = "Id Pregunta: 4683. Examen 2006 JCYL";


//  Id pregunta: 5454 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  &iquest;Cu&aacute;l de las siguientes es una caracter&iacute;stica importante de las bases de datos relacionales y SQL?";
 choices[52]= new Array();
 choices[52][0] = "La independencia de relaciones entre las tablas";
 choices[52][1] = "Elevada velocidad del SQL";
 choices[52][2] = "Potentes entornos de desarrollo";
 choices[52][3] = "F&aacute;ciles de instalar y usar";
 answers[52] = choices[52][0];
 units[52] = "58";
 comments[52] = "Id Pregunta: 5454. Castilla y Le&oacute;n";


//  Id pregunta: 5517 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  Entre los sistemas operativos para dispositivos m&oacute;viles se encuentra:";
 choices[53]= new Array();
 choices[53][0] = "Symbian";
 choices[53][1] = "Hurd";
 choices[53][2] = "Mach";
 choices[53][3] = "BSD";
 answers[53] = choices[53][0];
 units[53] = "52";
 comments[53] = "Id Pregunta: 5517. ";


//  Id pregunta: 5672 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  Indique la respuesta incorrecta en las siguientes afirmaciones respecto al Directorio Activo:";
 choices[54]= new Array();
 choices[54][0] = "El modelo de datos de Active Directory deriva del modelo de datos X.500";
 choices[54][1] = "Active Directory utiliza DNS como servicio de ubicaci&oacute;n";
 choices[54][2] = "El identificador &uacute;nico global de objetos, GUID, es un n&uacute;mero de 64 bitsdel que se garantiza su unicidad, y que se asigna a los objetos cuando secrean.";
 choices[54][3] = "En la lista de protocolos compatibles se incluye LDAP, en sus versiones 2 y 3.";
 answers[54] = choices[54][2];
 units[54] = "56";
 comments[54] = "Id Pregunta: 5672. ";


//  Id pregunta: 5988 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  Adem&aacute;s de controlar el correcto funcionamiento del sistema y poner los medios para corregir sus funciones, &iquest;qu&eacute; funci&oacute;n lecorresponder&iacute;a a un administrador de sistemas operativos?";
 choices[55]= new Array();
 choices[55][0] = "Colaborar en el desarrollo de nuevas versiones de los sistemas operativos o de parches para ellos.";
 choices[55][1] = "Planificar y realizar la adquisici&oacute;n de nuevo equipamiento.";
 choices[55][2] = "Instalar el sistema operativo, actualizar los parches, monitorizar el uso de recursos y corregir las posibles incidencias.";
 choices[55][3] = "Desarrollar los sistemas de informaci&oacute;n de la organizaci&oacute;n.";
 answers[55] = choices[55][2];
 units[55] = "52";
 comments[55] = "Id Pregunta: 5988. TIC A 2009";


//  Id pregunta: 6097 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  El sistema operativo MSDOS es:";
 choices[56]= new Array();
 choices[56][0] = "Multiprocesador asim&eacute;trico.";
 choices[56][1] = "Multiprocesador sim&eacute;trico.";
 choices[56][2] = "Multiusuario.";
 choices[56][3] = "Monoprocesador.";
 answers[56] = choices[56][3];
 units[56] = "52";
 comments[56] = "Id Pregunta: 6097. TIC A 2009";


//  Id pregunta: 6240 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes es una propiedad del modelo conceptual?";
 choices[57]= new Array();
 choices[57][0] = "Complejo";
 choices[57][1] = "M&aacute;ximo";
 choices[57][2] = "Expl&iacute;cito en todas sus restricciones";
 choices[57][3] = "Informal";
 answers[57] = choices[57][2];
 units[57] = "57";
 comments[57] = "Id Pregunta: 6240. TICB-2009, bloque desarrollo";


//  Id pregunta: 6326 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  El comando COUNT:";
 choices[58]= new Array();
 choices[58][0] = "Siempre va acompa&ntilde;ado de *";
 choices[58][1] = "Sirve para contar las ocurrencias del atributo al que acompa&ntilde;e.";
 choices[58][2] = "S&oacute;lo aparece despu&eacute;s del WHERE.";
 choices[58][3] = "Obliga a que aparezca la cl&aacute;usula GROUP BY.";
 answers[58] = choices[58][1];
 units[58] = "58";
 comments[58] = "Id Pregunta: 6326. ";


//  Id pregunta: 6450 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  En un sistema operativo LINUX &iquest;qu&eacute; es un gestor GRUB?";
 choices[59]= new Array();
 choices[59][0] = "Un gestor de creaci&oacute;n y activaci&oacute;n de particiones swap, en el primer sector de la partici&oacute;n de arranque";
 choices[59][1] = "Un gestor que crea un &aacute;rea de swap en memoria RAM";
 choices[59][2] = "Un gestor que activa una partici&oacute;n de swap ya creada";
 choices[59][3] = "Un gestor de arranque multisistema creado por el proyecto GNU";
 answers[59] = choices[59][3];
 units[59] = "54";
 comments[59] = "Id Pregunta: 6450. Castilla La Mancha 2009";


//  Id pregunta: 6503 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  &iquest;Cu&aacute;l de los siguientes es un proyecto de estandarizaci&oacute;n de UNIX?";
 choices[60]= new Array();
 choices[60][0] = "GNU";
 choices[60][1] = "GPL";
 choices[60][2] = "POSIX";
 choices[60][3] = "Emacs";
 answers[60] = choices[60][2];
 units[60] = "53";
 comments[60] = "Id Pregunta: 6503. NULL";


//  Id pregunta: 6505 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  El kernel desarrollado por el proyecto GNU es conocido como:";
 choices[61]= new Array();
 choices[61][0] = "Hurd";
 choices[61][1] = "Linux";
 choices[61][2] = "Emacs";
 choices[61][3] = "Debian";
 answers[61] = choices[61][0];
 units[61] = "53";
 comments[61] = "Id Pregunta: 6505. NULL";


//  Id pregunta: 6507 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  De que tarea NO se encarga el n&uacute;cleo independiente del kernel de UNIX:";
 choices[62]= new Array();
 choices[62][0] = "Interrupciones";
 choices[62][1] = "Ejecuci&oacute;n de procesos";
 choices[62][2] = "Planificar los procesos para su realizaci&oacute;n por la CPU";
 choices[62][3] = "Asignar memoria principal a un proceso en ejecuci&oacute;n";
 answers[62] = choices[62][0];
 units[62] = "53";
 comments[62] = "Id Pregunta: 6507. NULL";


//  Id pregunta: 6512 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  NO es una distribuci&oacute;n Linux:";
 choices[63]= new Array();
 choices[63][0] = "Knoppix";
 choices[63][1] = "Suse";
 choices[63][2] = "Red Hot";
 choices[63][3] = "Fedora";
 answers[63] = choices[63][2];
 units[63] = "54";
 comments[63] = "Id Pregunta: 6512. ";


//  Id pregunta: 7160 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  Seleccione la afirmaci&oacute;n cierta respecto al Sistema Operativo UNIX";
 choices[64]= new Array();
 choices[64][0] = "UNIX no permite la comunicaci&oacute;n entre procesos";
 choices[64][1] = "loctl es un comando que permite crear un fichero";
 choices[64][2] = "Las normas POSIX definen la organizaci&oacute;n de la memoria";
 choices[64][3] = "Cada fichero lleva asociada una estructura llamada nodo-i (inode)";
 answers[64] = choices[64][3];
 units[64] = "53";
 comments[64] = "Id Pregunta: 7160. Examen TIC B 2009";


//  Id pregunta: 8271 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  La familia de WINDOWS SERVER 2003 soporta clusters de servidor de hasta:";
 choices[65]= new Array();
 choices[65][0] = "16 nodos.";
 choices[65][1] = "4 nodos.";
 choices[65][2] = "8 nodos.";
 choices[65][3] = "32 nodos.";
 answers[65] = choices[65][2];
 units[65] = "56";
 comments[65] = "Id Pregunta: 8271. Examen TIC A1 2010";


//  Id pregunta: 8519 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  Se&ntilde;ale la respuesta correcta de las siguientes afirmaciones sobre el modelo entidad/relaci&oacute;n extendido:";
 choices[66]= new Array();
 choices[66][0] = "Es un requisito el conocer el SGBD en el que se va a implementar.";
 choices[66][1] = "Es dependiente del entorno f&iacute;sico.";
 choices[66][2] = "Se centra en los datos, independientemente del procesamiento que los transforma";
 choices[66][3] = "Debe proporcionar a los usuarios toda la informaci&oacute;n que necesiten garantizando la eficiencia del proceso.";
 answers[66] = choices[66][2];
 units[66] = "57, 58";
 comments[66] = "Id Pregunta: 8519. Examen TIC A2 2010 interna";


//  Id pregunta: 8520 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  Tenemos las entidades &quot;opositor&quot; y &quot;oposici&oacute;n&quot; y sabemos que a los opositores se les permite apuntarse a varias oposiciones distintas. Si se quisiera crear el modelo conceptual de base de datos, &iquest;qu&eacute; relaci&oacute;n crear&iacute;a?:";
 choices[67]= new Array();
 choices[67][0] = "Una relaci&oacute;n N:M.";
 choices[67][1] = "Una relaci&oacute;n 1:N.";
 choices[67][2] = "Una relaci&oacute;n 1:1.";
 choices[67][3] = "El modelo conceptual no admite relaciones, s&oacute;lo el modelo relacional lo permite. ";
 answers[67] = choices[67][0];
 units[67] = "57, 58";
 comments[67] = "Id Pregunta: 8520. Examen TIC A2 2010 interna";


//  Id pregunta: 8613 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  En relaci&oacute;n con la administraci&oacute;n de un sistema operativo Linux, indique cu&aacute;l de los siguientes comandos NO est&aacute; destinado a realizar copias de seguridad:";
 choices[68]= new Array();
 choices[68][0] = "tar con los par&aacute;metros cvf";
 choices[68][1] = "tar con los par&aacute;metros tvf";
 choices[68][2] = "cpio en conjunci&oacute;n con el comando ls";
 choices[68][3] = "cpio en conjunci&oacute;n con el comando find";
 answers[68] = choices[68][1];
 units[68] = "53,54";
 comments[68] = "Id Pregunta: 8613. Examen TIC A2 2010 interna";


//  Id pregunta: 8756 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  &iquest;Cu&aacute;l de los siguientes NO es un sistema operativo para dispositivos m&oacute;viles?";
 choices[69]= new Array();
 choices[69][0] = "Android.";
 choices[69][1] = " SymbianOS.";
 choices[69][2] = "HTC Mobile.";
 choices[69][3] = "RIM BlackBerry.";
 answers[69] = choices[69][2];
 units[69] = "52";
 comments[69] = "Id Pregunta: 8756. Examen TIC A2 2010 interna";


//  Id pregunta: 8757 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  En un esquema de multiprogramaci&oacute;n en memoria real, independientemente de que est&eacute; basado en particiones de tama&ntilde;o fijas o de tama&ntilde;o variable, &iquest;en qu&eacute; consiste el algoritmo del &quot;siguiente ajuste&quot; para elegir el tama&ntilde;o de la partici&oacute;n en la que alojar un programa?";
 choices[70]= new Array();
 choices[70][0] = "Se asigna el primer hueco que sea mayor al tama&ntilde;o deseado";
 choices[70][1] = "Se asigna el primer hueco que sea mayor al tama&ntilde;o deseado, pero dejando un apuntador al lugar en donde se asigno el &uacute;ltimo hueco";
 choices[70][2] = "Se asigna el hueco cuyo tama&ntilde;o exceda en la mayor cantidad al tama&ntilde;o deseado";
 choices[70][3] = "Se asigna el hueco cuyo tama&ntilde;o exceda en la menor cantidad al tama&ntilde;o deseado.";
 answers[70] = choices[70][1];
 units[70] = "52";
 comments[70] = "Id Pregunta: 8757. Examen TIC A2 2010 interna";


//  Id pregunta: 8764 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)   En la planificaci&oacute;n por prioridad circular o &quot;Round Robin&quot;:";
 choices[71]= new Array();
 choices[71][0] = "El proceso preparado que pasa a ejecuci&oacute;n corresponde al de tiempo de ejecuci&oacute;n restante m&aacute;s corto";
 choices[71][1] = "De acuerdo a su prioridad, cada proceso preparado pasa a ejecuci&oacute;n durante una cota de tiempo llamada &quot;cuanto&quot;";
 choices[71][2] = "De forma secuencial, cada proceso preparado pasa a ejecuci&oacute;n durante un intervalo de tiempo llamada &quot;cuanto&quot;";
 choices[71][3] = "El proceso preparado que pasa a ejecuci&oacute;n corresponde al de mayor prioridad asignada";
 answers[71] = choices[71][2];
 units[71] = "52";
 comments[71] = "Id Pregunta: 8764. Examen TIC A2 2010 interna";


//  Id pregunta: 8788 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  Indique cu&aacute;l de las siguientes expresiones mostrar&aacute; el n&uacute;mero de veces que est&aacute; conectado el usuario root";
 choices[72]= new Array();
 choices[72][0] = "who | grep root | wc -l";
 choices[72][1] = "who root | wc -l";
 choices[72][2] = "who &gt;grep &mdash;v root&gt;wc";
 choices[72][3] = "who &lt;grep -v root&gt;wc";
 answers[72] = choices[72][0];
 units[72] = "53, 54";
 comments[72] = "Id Pregunta: 8788. Examen UPM A2 2011";


//  Id pregunta: 8795 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  &iquest;Qu&eacute; comando de unix no tiene que ver con el control de trabajos de ejecuci&oacute;n?";
 choices[73]= new Array();
 choices[73][0] = "jobs";
 choices[73][1] = "fg";
 choices[73][2] = "pg";
 choices[73][3] = "bg";
 answers[73] = choices[73][2];
 units[73] = "53, 54";
 comments[73] = "Id Pregunta: 8795. Examen UPM A2 2011";


//  Id pregunta: 8855 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  &iquest;Qu&eacute; tipo de driver JDBC conecta a la base de datos directamente usando su protocolo nativo?";
 choices[74]= new Array();
 choices[74][0] = "Type 1 JDBC Driver";
 choices[74][1] = "Type 2 JDBC Driver";
 choices[74][2] = "Type 3 JDBC Driver";
 choices[74][3] = "Type 4 JDBC Driver";
 answers[74] = choices[74][3];
 units[74] = "58, 60";
 comments[74] = "Id Pregunta: 8855. Analista Ayto. Madrid 2010";


//  Id pregunta: 8927 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  En la mayor&iacute;a de los sistemas Linux, el directorio /home contiene:";
 choices[75]= new Array();
 choices[75][0] = "los directorios de trabajo de los usuarios.";
 choices[75][1] = "los sistemas de archivos montados temporalmente.";
 choices[75][2] = "el c&oacute;digo fuente del kernel.";
 choices[75][3] = "los ficheros de los controladores de dispositivos";
 answers[75] = choices[75][0];
 units[75] = "53, 54";
 comments[75] = "Id Pregunta: 8927. Operador Ayto. Madrid 2010";


//  Id pregunta: 9234 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  &iquest;Qu&eacute; es IPL?";
 choices[76]= new Array();
 choices[76][0] = "Es el equivalente al Boot en z/OS";
 choices[76][1] = "El primer programa que se ejecuta cuando se hace un TSO logon.";
 choices[76][2] = "Carga de programa en modo batch en z/OS.";
 choices[76][3] = "Ninguna es correcta.";
 answers[76] = choices[76][0];
 units[76] = "52, 55";
 comments[76] = "Id Pregunta: 9234. ";


//  Id pregunta: 9245 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  &iquest;C&oacute;mo surgi&oacute; Windows?";
 choices[77]= new Array();
 choices[77][0] = "En la interfaz de usuario de Apple Lisa, precursora de Apple Macintosh.";
 choices[77][1] = "Fue una interfaz gr&aacute;fica para MS-DOS";
 choices[77][2] = "Windows 1.0 sali&oacute; al mercado en 1985.";
 choices[77][3] = "Todas son correctas.";
 answers[77] = choices[77][3];
 units[77] = "56";
 comments[77] = "Id Pregunta: 9245. ";


//  Id pregunta: 9250 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  &iquest;D&oacute;nde se almacena la informaci&oacute;n de inicio de sesi&oacute;n para los usuarios locales?";
 choices[78]= new Array();
 choices[78][0] = "En el DA de Microsoft.";
 choices[78][1] = "En la SAM (Security Access Manager)";
 choices[78][2] = "En una archivo de texto del sistema cifrado.";
 choices[78][3] = "En la COM (Component Object Model)";
 answers[78] = choices[78][1];
 units[78] = "56";
 comments[78] = "Id Pregunta: 9250. ";


//  Id pregunta: 9257 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  &iquest;Qu&eacute; incluye Windows 8?";
 choices[79]= new Array();
 choices[79][0] = "Una nueva pantalla de Inicio.";
 choices[79][1] = "Una nueva tienda de aplicaciones.";
 choices[79][2] = "Su intefaz de usuario se ha modificado para hacerlo m&aacute;s adecuado para pantallas t&aacute;ctiles.";
 choices[79][3] = "Todas son correctas.";
 answers[79] = choices[79][3];
 units[79] = "56";
 comments[79] = "Id Pregunta: 9257. ";


//  Id pregunta: 9258 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  &iquest;Qu&eacute; requisitos m&iacute;nimos de hardware tiene Windows 8?";
 choices[80]= new Array();
 choices[80][0] = "2 GB de RAM para versi&oacute;n de 64 bits y 1 GB para versi&oacute;n de 32 bits.";
 choices[80][1] = "1 GB para versi&oacute;n de 64 bits y 2 para versi&oacute;n de 32 bits.";
 choices[80][2] = "16 GB de espacio libre para versi&oacute;n de 64 bits.";
 choices[80][3] = "Ninguna es correcta.";
 answers[80] = choices[80][0];
 units[80] = "56";
 comments[80] = "Id Pregunta: 9258. ";


//  Id pregunta: 9273 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  Indique la frase acertada sobre la gesti&oacute;n de procesos en los sistemas UNIX.";
 choices[81]= new Array();
 choices[81][0] = "El estado de un proceso en un sistema Unix se codifica usando 3 bits,";
 choices[81][1] = "El control de procesos en Unix permite la comunicaci&oacute;n s&iacute;ncrona entre procesos mediante paso de mensajes";
 choices[81][2] = "Los procesos &ldquo;daemon&rdquo; son procesos interactivos del usuario root.";
 choices[81][3] = "Los sistemas Unix permiten variar la prioridad de un proceso en tiempo de ejecuci&oacute;n pero no los permisos con que se ejecuta";
 answers[81] = choices[81][1];
 units[81] = "53";
 comments[81] = "Id Pregunta: 9273. Examen TIC-A1 2011";


//  Id pregunta: 9608 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  &iquest;Cual es una ventaja de los sistemas de base de datos NoSQL?";
 choices[82]= new Array();
 choices[82][0] = "Manejan eficientemente grandes cantidades de datos";
 choices[82][1] = "Ofrecen una gran eficiencia en operaciones en tiempo real";
 choices[82][2] = "Utilizan estructuras flexibles";
 choices[82][3] = "Todas las anteriores lo son";
 answers[82] = choices[82][3];
 units[82] = "58";
 comments[82] = "Id Pregunta: 9608. NULL";


//  Id pregunta: 9613 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  &iquest;Qu&eacute; alternativas existen en otros sistemas de base de datos a las vistas materializadas de Oracle?";
 choices[83]= new Array();
 choices[83][0] = "Vistas indexadas";
 choices[83][1] = "Vistas normalizadas";
 choices[83][2] = "Vistas f&iacute;sicas";
 choices[83][3] = "No existen alternativas";
 answers[83] = choices[83][0];
 units[83] = "58";
 comments[83] = "Id Pregunta: 9613. En SQL Server se llaman vistas indexadas";


//  Id pregunta: 9619 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  &iquest;En qu&eacute; parte del SO Windows se encuentra el Dispatcher?";
 choices[84]= new Array();
 choices[84][0] = "Ejecutivo";
 choices[84][1] = "Microkernel";
 choices[84][2] = "HAL";
 choices[84][3] = "Drivers";
 answers[84] = choices[84][1];
 units[84] = "56";
 comments[84] = "Id Pregunta: 9619. ";


//  Id pregunta: 9621 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  &iquest;C&uacute;al de los siguientes es un medio para la sincronizaci&oacute;n entre procesos Windows?";
 choices[85]= new Array();
 choices[85][0] = "Signals";
 choices[85][1] = "Mutex";
 choices[85][2] = "Sockets";
 choices[85][3] = "RPCs";
 answers[85] = choices[85][1];
 units[85] = "56";
 comments[85] = "Id Pregunta: 9621. ";


//  Id pregunta: 9623 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  &iquest;En qu&eacute; consisten los segmentos de memoria virtual en el Sistema Operativo Windows?";
 choices[86]= new Array();
 choices[86][0] = "Bloques de memoria virtual de longitud variable que pertenecen al mismo proceso";
 choices[86][1] = "Bloques de memoria virtual de longitud fija que pertenecen al mismo proceso";
 choices[86][2] = "Bloques memoria virtual de longitud fija que no tienen relaci&oacute;n entre ellos";
 choices[86][3] = "Ninguno de los anteriores";
 answers[86] = choices[86][3];
 units[86] = "56";
 comments[86] = "Id Pregunta: 9623. Windows no usa memoria virtual segmentada, s&oacute;lo paginada";


//  Id pregunta: 9627 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  En el sistema operativo UNIX la expresi&oacute;n &ldquo;daemon&rdquo; se refiere a un proceso del sistema que:";
 choices[87]= new Array();
 choices[87][0] = "Siempre se ejecuta en segundo plano (background)";
 choices[87][1] = "Siempre es de corta duraci&oacute;n";
 choices[87][2] = "Est&aacute; siempre ejecut&aacute;ndose";
 choices[87][3] = "nunca se ejecuta bajo control de los subsistemas de temporarizaci&oacute;n. ";
 answers[87] = choices[87][0];
 units[87] = "53";
 comments[87] = "Id Pregunta: 9627. Examen TIC A1 2013";


//  Id pregunta: 9629 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  En el sistema operativo Linux, &iquest;cu&aacute;l de las siguientes opciones busca la palabra 'libro' dentro de ficheros?";
 choices[88]= new Array();
 choices[88][0] = "find -type f | xwygs grep 'libro' ";
 choices[88][1] = "find -type f | xaygs grep 'libro'";
 choices[88][2] = "find -type f | xargs grep 'libro'";
 choices[88][3] = "find -type f | xargp grep 'libro'";
 answers[88] = choices[88][2];
 units[88] = "54";
 comments[88] = "Id Pregunta: 9629. Examen TIC A2 2013 - Las comillas en 'libro' son dobles";


//  Id pregunta: 9636 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  &iquest;Qu&eacute; n&uacute;mero m&aacute;ximo de m&aacute;quinas virtuales por anfitri&oacute;n soporta el sistema Hyper-V de Windows 2012 Server?";
 choices[89]= new Array();
 choices[89][0] = "256";
 choices[89][1] = "512";
 choices[89][2] = "1024";
 choices[89][3] = "2048";
 answers[89] = choices[89][2];
 units[89] = "56";
 comments[89] = "Id Pregunta: 9636. ";


//  Id pregunta: 9812 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  &iquest;Cu&aacute;l de los siguientes nombres NO se corresponde con una versi&oacute;n del sistema operativo Android?";
 choices[90]= new Array();
 choices[90][0] = "Kit Kat.";
 choices[90][1] = "Ice Cream Sandwich.";
 choices[90][2] = "Donut.";
 choices[90][3] = "Candy Marzipan.";
 answers[90] = choices[90][3];
 units[90] = "52,53,54";
 comments[90] = "Id Pregunta: 9812. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9918 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  En el modelo entidad-relaci&oacute;n extendido, tal y como se describe en el documento de T&eacute;cnicas y Pr&aacute;cticas de M&eacute;trica v3, un atributo es:";
 choices[91]= new Array();
 choices[91][0] = "La dependencia de existencia de un tipo de entidad d&eacute;bil respecto de uno fuerte.";
 choices[91][1] = "Una propiedad o caracter&iacute;stica de un tipo de entidad.";
 choices[91][2] = "El elemento que es a la vez un tipo de entidad y una relaci&oacute;n con otro tipo de entidad.";
 choices[91][3] = "El n&uacute;mero m&aacute;ximo de ocurrencias de cada tipo de entidad en una ocurrencia de la relaci&oacute;n.";
 answers[91] = choices[91][1];
 units[91] = "86, 58";
 comments[91] = "Id Pregunta: 9918. TIC A2, Examen 2013";


//  Id pregunta: 10167 AÃ±o de creación de pregunta: 2014-01-01
 questions[92]= "93)  &iquest;A qu&eacute; t&eacute;rmino corresponde la siguiente definici&oacute;n: &quot;Dada una relaci&oacute;n, un atributo o grupo de atributos B depende funcionalmente de A, pero no de ning&uacute;n subconjunto de atributos de A&quot;?";
 choices[92]= new Array();
 choices[92][0] = "Dependencia funcional";
 choices[92][1] = "Dependencia multivaluada";
 choices[92][2] = "Dependencia funcional trivial";
 choices[92][3] = "Dependencia funcional completa";
 answers[92] = choices[92][3];
 units[92] = "58";
 comments[92] = "Id Pregunta: 10167. ";


//  Id pregunta: 10173 AÃ±o de creación de pregunta: 2014-01-01
 questions[93]= "94)  Los distintos niveles de aislamiento permiten evitar problemas de consistencia o p&eacute;rdida de datos derivados de la ejecuci&oacute;n concurrente de transacciones.";
 choices[93]= new Array();
 choices[93][0] = "Una Lectura No Repetible se produce cuando una transacci&oacute;n lee datos todav&iacute;a no confirmados, y que pueden ser finalmente revertidos por la transacci&oacute;n que hizo el cambio";
 choices[93][1] = "Evitar el problema de concurrencia denominado &quot;Lectura fantasma&quot; requiere aplicar como nivel de aislamiento SERIALIZABLE";
 choices[93][2] = "Con el nivel de aislamiento denominado &quot;READ COMMITTED&quot; pueden producirse problemas de Lectura sucia y Lectura Fantasma";
 choices[93][3] = "Todas las anteriores";
 answers[93] = choices[93][1];
 units[93] = "57";
 comments[93] = "Id Pregunta: 10173. ";


//  Id pregunta: 10618 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  El planificador de Windows:";
 choices[94]= new Array();
 choices[94][0] = "Se ejecuta en el hilo de planificaci&oacute;n central del kernel.";
 choices[94][1] = "Su c&oacute;digo se ejecuta cuando se completa una operaci&oacute;n de E/S.";
 choices[94][2] = "Windows no tiene planificador.";
 choices[94][3] = "Est&aacute; escrito en Python.";
 answers[94] = choices[94][1];
 units[94] = "56";
 comments[94] = "Id Pregunta: 10618. ";


//  Id pregunta: 10798 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Apache Cassandra es:";
 choices[95]= new Array();
 choices[95][0] = "Un servidor de comunicaciones.";
 choices[95][1] = "Una base de datos NoSQL distribuida.";
 choices[95][2] = "Un sistema de claves privadas.";
 choices[95][3] = "Un protocolo de comunicaciones.";
 answers[95] = choices[95][1];
 units[95] = "57";
 comments[95] = "Id Pregunta: 10798. Examen GSI 2014";


//  Id pregunta: 11031 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Cu&aacute;l se corresponde con el nivel alto de planificaci&oacute;n del procesador?";
 choices[96]= new Array();
 choices[96][0] = "Scheduler";
 choices[96][1] = "Planificator";
 choices[96][2] = "High Planificator";
 choices[96][3] = "Dispatcher";
 answers[96] = choices[96][0];
 units[96] = "52";
 comments[96] = "Id Pregunta: 11031. ";


//  Id pregunta: 11032 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Cu&aacute;l es una biblioteca de render avanzado de controles de aplicaci&oacute;n en GNOME?";
 choices[97]= new Array();
 choices[97][0] = "Metacity";
 choices[97][1] = "Pango";
 choices[97][2] = "Cairo";
 choices[97][3] = "Gconf";
 answers[97] = choices[97][2];
 units[97] = "54";
 comments[97] = "Id Pregunta: 11032. ";


//  Id pregunta: 11527 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Las distribuciones Debian o Ubuntu, entre otras, permiten instalar habitualmente nuevas utilidades a partir de ficheros .deb. Indique cu&aacute;l de las siguientes sentencias Linux es incorrecta:";
 choices[98]= new Array();
 choices[98][0] = "apt-update";
 choices[98][1] = "dpkg-reconfigure";
 choices[98][2] = "apt-cache search xorg";
 choices[98][3] = "dpkg";
 answers[98] = choices[98][0];
 units[98] = "53";
 comments[98] = "Id Pregunta: 11527. Examen TIC Servicio Extreme&ntilde;o de Salud 2014";


//  Id pregunta: 11613 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  En SQL, para borrar los datos de una tabla pero seguir conserv&aacute;ndola se emplea:";
 choices[99]= new Array();
 choices[99][0] = "DROP TABLE";
 choices[99][1] = "TRUNCATE TABLE";
 choices[99][2] = "DELETE TABLE";
 choices[99][3] = "MODIFY TABLE";
 answers[99] = choices[99][1];
 units[99] = "58";
 comments[99] = "Id Pregunta: 11613. ";


