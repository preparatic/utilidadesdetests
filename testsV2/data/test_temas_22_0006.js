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

//  Id pregunta: 719 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  Para realizar un programa que accede a una base de datos para presentar el resultado de una b&uacute;squeda, se utilizar&aacute;:";
 choices[0]= new Array();
 choices[0][0] = "Sentencias de lectura de los ficheros que componen la base de datos";
 choices[0][1] = "SQL embebido en un lenguaje de programaci&oacute;n";
 choices[0][2] = "SQL din&aacute;mico, ya que es m&aacute;s eficiente que el SQL est&aacute;tico";
 choices[0][3] = "SQL, escrito directamente sobre una sesi&oacute;n de la base de datos";
 answers[0] = choices[0][1];
 units[0] = "58";
 comments[0] = "Id Pregunta: 719. Examen TIC MAP B 2004";


//  Id pregunta: 724 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  En la evoluci&oacute;n del Sistema Operativo Unix, a partir de los a&ntilde;os 70, surgieron diferentes variantes. &iquest;Cu&aacute;l de los siguientes sistemas no se corresponde con una de esas variantes?";
 choices[1]= new Array();
 choices[1][0] = "BSD";
 choices[1][1] = "MULTICS";
 choices[1][2] = "XENIX";
 choices[1][3] = "Sun OS";
 answers[1] = choices[1][1];
 units[1] = "53";
 comments[1] = "Id Pregunta: 724. Examen TIC MAP B 2004";


//  Id pregunta: 764 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  En el entorno de la seguridad de los sistemas operativos UNIX y redes de ordenadores, se llama socket:";
 choices[2]= new Array();
 choices[2][0] = "A la combinaci&oacute;n de una direcci&oacute;n de m&aacute;quina y un puerto";
 choices[2][1] = "A la combinaci&oacute;n de una direcci&oacute;n m&aacute;quina, un puerto y un usuario autenticado de una aplicaci&oacute;n";
 choices[2][2] = "A la conexi&oacute;n entre la m&aacute;quina receptora y la emisora en una red con protocolos TCP/IP";
 choices[2][3] = "Es el protocolo (puerto 113, TCP) que utiliza un mecanismo para determinar nombres de usuarios en conexiones TCP. Trabaja conjuntamente con procesos del tipo &quot;identd&quot; y programas &quot;TCP Wrappers&quot;";
 answers[2] = choices[2][0];
 units[2] = "53, 54";
 comments[2] = "Id Pregunta: 764. ";


//  Id pregunta: 863 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;Cu&aacute;l de los siguientes entornos UNIX  no puede ser considerado como SVR4?:";
 choices[3]= new Array();
 choices[3][0] = "4.2 BSD";
 choices[3][1] = "Solaris 2.3";
 choices[3][2] = "Unixware";
 choices[3][3] = "HP-UX";
 answers[3] = choices[3][0];
 units[3] = "53";
 comments[3] = "Id Pregunta: 863. ";


//  Id pregunta: 920 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;Qu&eacute; es el repositorio del Designer?:";
 choices[4]= new Array();
 choices[4][0] = "Un objeto para obtener listados";
 choices[4][1] = "Una base de datos donde se guardan las estructuras que se van creando";
 choices[4][2] = "Un formulario especial de licencias del Designer";
 choices[4][3] = "Una base de datos que almacena solo los usuarios con acceso al Designer";
 answers[4] = choices[4][1];
 units[4] = "56";
 comments[4] = "Id Pregunta: 920. ";


//  Id pregunta: 940 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;Qu&eacute; se entiende por modo supervisor?:";
 choices[5]= new Array();
 choices[5][0] = "Sistema en el que no se precisa 'password' para acceder al sistema, por tratarse del supervisor";
 choices[5][1] = "Sistema en el que la palabra clave de acceso al sistema permite acceder a todos los elementos del sistema inform&aacute;tico";
 choices[5][2] = "Dispositivos que pueden modificar el modo de operaci&oacute;n y prohibir determinadas ejecuciones importantes";
 choices[5][3] = "Es un modo del sistema operativo mediante el cual s&oacute;lo &eacute;l es capaz de acceder a los recursos del ordenador mediante instrucciones que no est&aacute;n disponibles para los programas de usuario";
 answers[5] = choices[5][3];
 units[5] = "52";
 comments[5] = "Id Pregunta: 940. ";


//  Id pregunta: 952 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Como podr&iacute;a hacer que un usuario de una base de datos ANSI SQL solo pudiera tener acceso a dos columnas de cada fila de una tabla:";
 choices[6]= new Array();
 choices[6][0] = "Utilizando la sentencia GRANT para conceder derechos al usuario sobre esas dos filas";
 choices[6][1] = "Creando una vista al efecto con solo esas dos columnas";
 choices[6][2] = "Utilizando la sentencia ALTER TABLE";
 choices[6][3] = "A y B son ciertas";
 answers[6] = choices[6][1];
 units[6] = "58";
 comments[6] = "Id Pregunta: 952. ";


//  Id pregunta: 992 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  Designer 2000 no contempla los procesos de:";
 choices[7]= new Array();
 choices[7][0] = "Planificaci&oacute;n";
 choices[7][1] = "An&aacute;lisis ";
 choices[7][2] = "Dise&ntilde;o";
 choices[7][3] = "Mantenimiento";
 answers[7] = choices[7][0];
 units[7] = "56";
 comments[7] = "Id Pregunta: 992. ";


//  Id pregunta: 1013 AÃ±o de creación de pregunta: 2003-01-01
 questions[8]= "9)  El Directorio Activo de Windows 2003:";
 choices[8]= new Array();
 choices[8][0] = "Permite crear repositorios virtuales en el mismo disco duro de un &uacute;nico servidor activo";
 choices[8][1] = "Permite crear vol&uacute;menes virtuales que pueden estar repartidos en varios discos de distintos ordenadores";
 choices[8][2] = "Permite crear un repositorio en el cual almacenar todala informaci&oacute;n relevante de la empresa en cuanto a su estructura";
 choices[8][3] = "Permite crear un volumen virtual que se active por requerimiento de los directivos de la empresa";
 answers[8] = choices[8][2];
 units[8] = "56";
 comments[8] = "Id Pregunta: 1013. ";


//  Id pregunta: 1130 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  En relaci&oacute;n con la teor&iacute;a de la normalizaci&oacute;n, que nos permite asegurar que un esquema relacional cumple unas ciertas propiedades, indicar cu&aacute;l de las siguientes corresponde a la definici&oacute;n de segunda forma normal:";
 choices[9]= new Array();
 choices[9][0] = "Si y s&oacute;lo si todo determinante es una clave candidata";
 choices[9][1] = "Si no existe ning&uacute;n atributo no principal que dependa transitivamente de alguna de las claves de relaci&oacute;n";
 choices[9][2] = "Cada atributo no principal tiene dependencia funcional completa respecto de cada una de las claves";
 choices[9][3] = "Si no existen grupos repetitivos";
 answers[9] = choices[9][2];
 units[9] = "58";
 comments[9] = "Id Pregunta: 1130. ";


//  Id pregunta: 1148 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  En un sistema operativo, el 'dispatcher' se encarga de:";
 choices[10]= new Array();
 choices[10][0] = "Asignar un proceso a un procesador que ha quedado libre";
 choices[10][1] = "Optimizar el uso de la memoria RAM";
 choices[10][2] = "Gestionar las interrupciones de entrada/salida";
 choices[10][3] = "Asignar nuevas p&aacute;ginas de memoria al proceso que se est&eacute; ejecutando si las necesita";
 answers[10] = choices[10][0];
 units[10] = "52";
 comments[10] = "Id Pregunta: 1148. ";


//  Id pregunta: 1220 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  La estructura secuencial encadenada:";
 choices[11]= new Array();
 choices[11][0] = "Es una estructura de f&aacute;cil gesti&oacute;n";
 choices[11][1] = "La inserciones de datos se autogestionan sin variar la estructura l&oacute;gica inicial";
 choices[11][2] = "Es el elemento precursor de la estructura relacional de las bases de datos";
 choices[11][3] = "La idea de apuntadores ha sido utilizada en los sistemas jer&aacute;rquicos y en red";
 answers[11] = choices[11][3];
 units[11] = "57";
 comments[11] = "Id Pregunta: 1220. ";


//  Id pregunta: 1235 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  La multiprogramaci&oacute;n:";
 choices[12]= new Array();
 choices[12][0] = "Se basa en el concepto de tiempo compartido";
 choices[12][1] = "Aprovecha las ventajas de los canales de E/S y de las interrupciones";
 choices[12][2] = "Reduce el tiempo de espera de un programa pero no elimina los tiempos muertos producidos por operaciones de E/S";
 choices[12][3] = "La organizaci&oacute;n de los trabajos mediante colas o listas simplifica las funciones del supervisor respecto al de sistemas operativos convencionales";
 answers[12] = choices[12][1];
 units[12] = "52";
 comments[12] = "Id Pregunta: 1235. ";


//  Id pregunta: 1262 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Las rutinas de gesti&oacute;n de trabajos que lleva a cabo un sistema operativo:";
 choices[13]= new Array();
 choices[13][0] = "Proveen una interface l&oacute;gica entre el hardware y el resto del software";
 choices[13][1] = "Permiten que varios procesos puedan ejecutarse en el sistema de forma simult&aacute;nea";
 choices[13][2] = "Supervisan las interrupciones";
 choices[13][3] = "Supervisan las funciones de entrada/salida";
 answers[13] = choices[13][1];
 units[13] = "52";
 comments[13] = "Id Pregunta: 1262. ";


//  Id pregunta: 1278 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  Los problemas de exclusi&oacute;n mutua entre procesos:";
 choices[14]= new Array();
 choices[14][0] = "Se centran en tres grandes &aacute;reas : la exclusi&oacute;n mutua, el manejo de interrupciones y el 'dead lock'";
 choices[14][1] = "Los resuelve el n&uacute;cleo del sistema operativo mediante la funci&oacute;n de dispatching";
 choices[14][2] = "Afectan a la protecci&oacute;n de datos en memoria y se resuelven dotando al hardware de una serie de instrucciones privilegiadas que gestiona el n&uacute;cleo del sistema operativo";
 choices[14][3] = "Se resuelven mediante la implementaci&oacute;n de sem&aacute;foros";
 answers[14] = choices[14][3];
 units[14] = "52";
 comments[14] = "Id Pregunta: 1278. ";


//  Id pregunta: 1303 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  Para solucionar la posible colisi&oacute;n de distintas peticiones de actualizaci&oacute;n simult&aacute;neas sobre un mismo dato de la base de datos, utilizaremos la t&eacute;cnica denominada de:";
 choices[15]= new Array();
 choices[15][0] = "Bloqueo ";
 choices[15][1] = "Rollback";
 choices[15][2] = "Interbloqueo";
 choices[15][3] = "Inter-Roll";
 answers[15] = choices[15][0];
 units[15] = "57";
 comments[15] = "Id Pregunta: 1303. ";


//  Id pregunta: 1315 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  Respecto a la compatibilidad entre Windows y Linux:";
 choices[16]= new Array();
 choices[16][0] = "Windows no puede ejecutarse bajo Linux";
 choices[16][1] = "Linux no puede ejecutarse bajo Windows";
 choices[16][2] = "Ambos pueden ejecutarse simult&aacute;neamente de forma nativa";
 choices[16][3] = "Existen programas que permiten la ejecuci&oacute;n de cada uno de estos sistemas operativos como si fuera un programa embebido en el otro sistema operativo";
 answers[16] = choices[16][3];
 units[16] = "53,55";
 comments[16] = "Id Pregunta: 1315. ";


//  Id pregunta: 1363 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Si disponemos de las entidades EMPLEADO y FAMILIAR, y es condici&oacute;n de funcionamiento en la empresa que una vez desaparecidos los datos del empleado deben desaparecer los de sus familiares,  entonces:";
 choices[17]= new Array();
 choices[17][0] = "Se dise&ntilde;&oacute; mal, FAMILIAR no es una entidad";
 choices[17][1] = "FAMILIAR debe estar contenida en EMPLEADO";
 choices[17][2] = "FAMILIAR es una entidad d&eacute;bil";
 choices[17][3] = "FAMILIAR es una entidad dependiente";
 answers[17] = choices[17][2];
 units[17] = "58";
 comments[17] = "Id Pregunta: 1363. ";


//  Id pregunta: 1388 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Un productor de bases de datos es aqu&eacute;l que:";
 choices[18]= new Array();
 choices[18][0] = "&Uacute;nicamente recopila informaci&oacute;n y la pone a disposici&oacute;n de la sociedad en un soporte susceptible de tratamiento inform&aacute;tico";
 choices[18][1] = "Solo mantiene al d&iacute;a la informaci&oacute;n contenida en las bases";
 choices[18][2] = "Algunos de ellos no se limitan a recopilar la informaci&oacute;n, sino que la elaboran";
 choices[18][3] = "Son correctas las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo;";
 answers[18] = choices[18][2];
 units[18] = "57";
 comments[18] = "Id Pregunta: 1388. ";


//  Id pregunta: 1450 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  &iquest;Cu&aacute;l de las siguientes no es una herramienta caracter&iacute;stica de un SGBDD?:";
 choices[19]= new Array();
 choices[19][0] = "Diccionario de palabras vac&iacute;as";
 choices[19][1] = "Diccionario de sin&oacute;nimos, acr&oacute;nimos, abreviaturas, etc.";
 choices[19][2] = "Tesauro";
 choices[19][3] = "Corrector sem&aacute;ntico y gramatical";
 answers[19] = choices[19][3];
 units[19] = "58";
 comments[19] = "Id Pregunta: 1450. NULL";


//  Id pregunta: 1502 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  La utilidad &quot;ping&quot;:";
 choices[20]= new Array();
 choices[20][0] = "Se basa en los comandos &quot;echo request&quot; y &quot;echo reply&quot; del protocolo ICMP";
 choices[20][1] = "Se basa en el protocolo PING";
 choices[20][2] = "Se basa en el protocolo UDP";
 choices[20][3] = "Se basa en el protocolo TCP";
 answers[20] = choices[20][0];
 units[20] = "52,55";
 comments[20] = "Id Pregunta: 1502. ";


//  Id pregunta: 1514 AÃ±o de creación de pregunta: 2003-01-01
 questions[21]= "22)  &iquest;Se pueden ejecutar programas MS Windows bajo un entorno Linux?";
 choices[21]= new Array();
 choices[21][0] = "Nunca";
 choices[21][1] = "De forma nativa, linux es compatible binario con MS Windows";
 choices[21][2] = "S&iacute;, a trav&eacute;s de programas espec&iacute;fico para ello";
 choices[21][3] = "S&iacute;, a trav&eacute;s del comando SMB";
 answers[21] = choices[21][2];
 units[21] = "53,61";
 comments[21] = "Id Pregunta: 1514. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 1518 AÃ±o de creación de pregunta: 2003-01-01
 questions[22]= "23)  Al objeto de una base de datos ORACLE que tiene como funci&oacute;n establecer una referencia a datos almacenados en otra base de datos, se denomina:";
 choices[22]= new Array();
 choices[22][0] = "&Iacute;ndice no &uacute;nico.";
 choices[22][1] = "Vista.";
 choices[22][2] = "Database link.";
 choices[22][3] = "Clustered Cable.";
 answers[22] = choices[22][2];
 units[22] = "58";
 comments[22] = "Id Pregunta: 1518. Junta Andaluc&iacute;a";


//  Id pregunta: 1549 AÃ±o de creación de pregunta: 2003-01-01
 questions[23]= "24)  &iquest;Cu&aacute;l de estas afirmaciones es falsa con respecto al concepto transacci&oacute;n?";
 choices[23]= new Array();
 choices[23][0] = "Todas las operaciones que constituyen una transacci&oacute;n se ejecutan en su totalidad o no se ejecutan en absoluto, es decir constituyen una unidad at&oacute;mica e indivisible.";
 choices[23][1] = "Si la transacci&oacute;n debe ejecutarse en varios servidores y uno de ellos sufre una aver&iacute;a, las transacciones efectuadas en el resto de servidores no tendr&aacute;n efecto al objeto de asegurar la sincronizaci&oacute;n e integridad de los datos.";
 choices[23][2] = "El procedimiento de transacciones de &lsquo;two phase commit&rsquo; consta de una 1&ordf; fase de verificaci&oacute;n de la correcta terminaci&oacute;n de la transacci&oacute;n en cada uno de los sistemas participantes y una 2&ordf; fase de ejecuci&oacute;n o cancelaci&oacute;n de dicha transacci&oacute;n.";
 choices[23][3] = "El procesamiento de transacciones solo puede hacerse en modo no orientado a la conexi&oacute;n, nunca en modo interactivo.";
 answers[23] = choices[23][3];
 units[23] = "56,57";
 comments[23] = "Id Pregunta: 1549. ";


//  Id pregunta: 1589 AÃ±o de creación de pregunta: 2003-01-01
 questions[24]= "25)  En el sistema operativo UNIX los estados en los que puede estar un proceso :";
 choices[24]= new Array();
 choices[24][0] = "Son dos,   donde el proceso 0 corresponde al proceso intercambiador";
 choices[24][1] = "Son 8, donde el proceso 0 se denimina init, y es el antecesor de todos los procesos";
 choices[24][2] = "Son 9, entre los que se encuentran los procesos ejecuci&oacute;n en modo de usuario y ejecuci&oacute;n en modo n&uacute;cleo";
 choices[24][3] = "Son 8, entre ellos el proceso cerrado o nonato que significa que est&aacute; aguardando un suceso y tiene que intercambiarse desde la memoria secundaria";
 answers[24] = choices[24][2];
 units[24] = "53";
 comments[24] = "Id Pregunta: 1589. ";


//  Id pregunta: 1639 AÃ±o de creación de pregunta: 2004-01-01
 questions[25]= "26)  &iquest;Cu&aacute;l no es una funci&oacute;n del Administrador de Base de Datos?";
 choices[25]= new Array();
 choices[25][0] = "Dise&ntilde;o de la base de datos";
 choices[25][1] = "Supervisi&oacute;n del funcionamiento de la base de datos";
 choices[25][2] = "Correci&oacute;n de errores de entrada de datos";
 choices[25][3] = "Ninguna de las anteriores";
 answers[25] = choices[25][2];
 units[25] = "57";
 comments[25] = "Id Pregunta: 1639. ";


//  Id pregunta: 1671 AÃ±o de creación de pregunta: 2004-01-01
 questions[26]= "27)  &iquest;Para que se usa el comando &quot;chown&quot; en linux?";
 choices[26]= new Array();
 choices[26][0] = "Para cambiar los permisos sobre un recurso";
 choices[26][1] = "Para cambiar el propietario de un recurso";
 choices[26][2] = "Para cambiar el grupo al que pertenece un recurso";
 choices[26][3] = "Para cambiar la clave de acceso del usuario actual";
 answers[26] = choices[26][1];
 units[26] = "54";
 comments[26] = "Id Pregunta: 1671. NULL";


//  Id pregunta: 1674 AÃ±o de creación de pregunta: 2004-01-01
 questions[27]= "28)  &iquest;Cu&aacute;l de las siguientes comandos SQL pertenece al DDL (Lenguaje de definici&oacute;n de datos)?";
 choices[27]= new Array();
 choices[27][0] = "SELECT";
 choices[27][1] = "CREATE";
 choices[27][2] = "INSERT";
 choices[27][3] = "UPDATE";
 answers[27] = choices[27][1];
 units[27] = "58";
 comments[27] = "Id Pregunta: 1674. ";


//  Id pregunta: 1722 AÃ±o de creación de pregunta: 2006-01-01
 questions[28]= "29)  En los sistemas operativos actuales, cada nodo-i dispone de los siguientes apuntadores o &iacute;ndices:";
 choices[28]= new Array();
 choices[28][0] = "12 apuntadores directos, un indirecto simple, un indirecto doble y un indirecto triple ";
 choices[28][1] = "10 apuntadores directos, 1 indirecto simle y 1 indirecto doble ";
 choices[28][2] = "20 apuntadores directos, uno simple y uno doble";
 choices[28][3] = "todas son falsas";
 answers[28] = choices[28][0];
 units[28] = "53";
 comments[28] = "Id Pregunta: 1722. ";


//  Id pregunta: 1748 AÃ±o de creación de pregunta: 2006-01-01
 questions[29]= "30)  Identifique el t&eacute;rmino que no designa a una distribuci&oacute;n de Linux";
 choices[29]= new Array();
 choices[29][0] = "Ubuntu";
 choices[29][1] = "Debian";
 choices[29][2] = "Mandeva";
 choices[29][3] = "Red Hat";
 answers[29] = choices[29][2];
 units[29] = "52,53";
 comments[29] = "Id Pregunta: 1748. 57";


//  Id pregunta: 2052 AÃ±o de creación de pregunta: 2004-01-01
 questions[30]= "31)  En el modelo de datos relacional, al conjunto no vac&iacute;o de atributos de una relaci&oacute;n cuyos valores sirven para referenciar la clave primaria de otra relaci&oacute;n del mismo dominio, se denomina:";
 choices[30]= new Array();
 choices[30][0] = "Superclave";
 choices[30][1] = "Clave principal";
 choices[30][2] = "Tupla m&uacute;ltiple";
 choices[30][3] = "Clave ajena";
 answers[30] = choices[30][3];
 units[30] = "57";
 comments[30] = "Id Pregunta: 2052. Pregunta Junta Andalucia - A";


//  Id pregunta: 2170 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  La administraci&oacute;n de recursos de datos pueden consistir de:";
 choices[31]= new Array();
 choices[31][0] = "Administraci&oacute;n de datos y administraci&oacute;n de bases de datos";
 choices[31][1] = "Administraci&oacute;n de ordenadores y administraci&oacute;n de software";
 choices[31][2] = "Administraci&oacute;n de bases de datos y administraci&oacute;n de comunicaciones";
 choices[31][3] = "Planificaci&oacute;n e implementaci&oacute;n de bases de datos";
 answers[31] = choices[31][0];
 units[31] = "57";
 comments[31] = "Id Pregunta: 2170. ";


//  Id pregunta: 2337 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  En los Diagramas de Estructura de Datos se representa la visi&oacute;n de los datos que tienen las aplicaciones inform&aacute;ticas y que se denomina:";
 choices[32]= new Array();
 choices[32][0] = "Esquema Conceptual";
 choices[32][1] = "Esquema Externo";
 choices[32][2] = "Esquema Interno";
 choices[32][3] = "Esquema Funcional";
 answers[32] = choices[32][1];
 units[32] = "58,80,81";
 comments[32] = "Id Pregunta: 2337. ";


//  Id pregunta: 2338 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  En los Diagramas de Estructura de Datos utilizados para la representaci&oacute;n de un modelo l&oacute;gico relacional, las relaciones pueden tener cardinalidad:";
 choices[33]= new Array();
 choices[33][0] = "Uno-a-muchos";
 choices[33][1] = "Binaria";
 choices[33][2] = "Muchos-a-muchos";
 choices[33][3] = "Ninguna de las anteriores";
 answers[33] = choices[33][0];
 units[33] = "57,58,80";
 comments[33] = "Id Pregunta: 2338. ";


//  Id pregunta: 2738 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  Indique la afirmaci&oacute;n incorrecta";
 choices[34]= new Array();
 choices[34][0] = "Una relaci&oacute;n est&aacute; en segunda forma normal (2FN) solamente si todos los atributos son dependientes en forma completa de la clave.";
 choices[34][1] = "Cualquier relaci&oacute;n en primera forma normal que tiene una clave compuesta, est&aacute; autom&aacute;ticamente en segunda forma normal.";
 choices[34][2] = "Una relaci&oacute;n se encuentra en tercera forma normal (EFN) si no existen transitividades entre sus atributos y si ya se encuentra en 2 FN.";
 choices[34][3] = "Para poner una relaci&oacute;n en la cuarta forma normal debe estar en 3FN y deben existir una o m&aacute;s multidependencias.";
 answers[34] = choices[34][1];
 units[34] = "58";
 comments[34] = "Id Pregunta: 2738. ";


//  Id pregunta: 4498 AÃ±o de creación de pregunta: 2007-01-01
 questions[35]= "36)  Se dice que una entidad se encuentra en segunda forma normal (2FN);";
 choices[35]= new Array();
 choices[35][0] = "Si no tiene grupos repetitivos, independientemente de que los atributos no primarios tengan o no dependencia funcional completa con cada una de las claves y no con partes de estas.";
 choices[35][1] = "Si tiene grupos repetitivos, independientemente de que los atributos no primarios tengan o no dependencia funcional completa con cada una de las claves y no con partes de estas.";
 choices[35][2] = "Si tiene grupos repetitivos y cualquiera de sus atributos no primarios tienen una dependencia funcional completa con cada una de las claves y no con partes de estas.";
 choices[35][3] = "Si no tiene grupos repetitivos y cualquiera de sus atributos no primarios tienen una dependencia funcional completa con cada una de las claves y no con partes de estas.";
 answers[35] = choices[35][3];
 units[35] = "58";
 comments[35] = "Id Pregunta: 4498. ";


//  Id pregunta: 4534 AÃ±o de creación de pregunta: 2007-01-01
 questions[36]= "37)  &iquest;Cu&aacute;l de las siguientes no es una herramienta de la Oracle Developer Suite? ";
 choices[36]= new Array();
 choices[36][0] = "Forms.";
 choices[36][1] = "Reports.";
 choices[36][2] = "Designer.";
 choices[36][3] = "Fusion.";
 answers[36] = choices[36][3];
 units[36] = "57,58";
 comments[36] = "Id Pregunta: 4534. ";


//  Id pregunta: 4790 AÃ±o de creación de pregunta: 2007-01-01
 questions[37]= "38)  &iquest;Qu&eacute; privilegio deber&iacute;a tener un usuario para poder dar permisos de acceso y modificaci&oacute;n sobre su esquema aotro usuario?";
 choices[37]= new Array();
 choices[37][0] = "CONNECT y RESOURCE";
 choices[37][1] = "DBA";
 choices[37][2] = "GRANT ANY ROLE";
 choices[37][3] = "SELECT ANY TABLE";
 answers[37] = choices[37][2];
 units[37] = "57";
 comments[37] = "Id Pregunta: 4790. ";


//  Id pregunta: 4849 AÃ±o de creación de pregunta: 2007-01-01
 questions[38]= "39)  &iquest;Cu&aacute;l de las siguientes afirmaciones NO es cierta?";
 choices[38]= new Array();
 choices[38][0] = "La aplicaci&oacute;n WINE es un emulador que permite ejecutar aplicaciones Windows en un entorno de software libre Linux";
 choices[38][1] = "El entorno de escritorio KDE no utiliza CORBA como arquitectura de comunicaciones entre procesos";
 choices[38][2] = "La biblioteca de componentes gr&aacute;ficos GTK+ se basa en las librer&iacute;as Glib, Pango y ATK";
 choices[38][3] = "La arquitectura actual de componentes de GNOME se denomina Bonobo";
 answers[38] = choices[38][0];
 units[38] = "53";
 comments[38] = "Id Pregunta: 4849. ";


//  Id pregunta: 4908 AÃ±o de creación de pregunta: 2003-01-01
 questions[39]= "40)  En referencia a Sistemas Operativos multiproceso tipo UNIX &iquest;qu&eacute; se entiende por &ldquo;proceso zombi&rdquo;?:";
 choices[39]= new Array();
 choices[39][0] = "Un proceso hijo que ha acabado de realizar sus tareas pero que el padre todav&iacute;a no ha ejecutado la orden de esperar a que el hijo acabe.";
 choices[39][1] = "Un proceso padre que se ha quedado bloqueado a la espera de que sus hijos acaben sus tareas pendientes.";
 choices[39][2] = "Un par de procesos en el que el primero est&aacute; a la espera de que el segundo proceso acabe y este segundo proceso";
 choices[39][3] = "Un proceso hijo que est&aacute; bloqueado a la espera de que el proceso padre le env&iacute;e datos que necesita.";
 answers[39] = choices[39][0];
 units[39] = "53,54";
 comments[39] = "Id Pregunta: 4908. Examen TIC B 2007";


//  Id pregunta: 4916 AÃ±o de creación de pregunta: 2003-01-01
 questions[40]= "41)  Se&ntilde;ale cu&aacute;l de los siguientes t&eacute;rminos NO constituye un estandar de interface de acceso a bases de datos:";
 choices[40]= new Array();
 choices[40][0] = "ODBC (Open Database Connectivity).";
 choices[40][1] = "RDO (Remote Data Objects.";
 choices[40][2] = "DMBS (DataBase Management System).";
 choices[40][3] = "OLE DB (Object Linking and Embedding for Databases).";
 answers[40] = choices[40][2];
 units[40] = "57";
 comments[40] = "Id Pregunta: 4916. Examen TIC B 2007";


//  Id pregunta: 5936 AÃ±o de creación de pregunta: 2009-01-01
 questions[41]= "42)  &iquest;Cu&aacute;l de estas afirmaciones es cierta con respecto al hypervisor de la herramienta de virtualizaci&oacute;n Xen?";
 choices[41]= new Array();
 choices[41][0] = "Los kernels que incorporan por defecto las distribuciones populares como Debian y Red Hat pueden realizar la funci&oacute;n de hypervisor de Xen.";
 choices[41][1] = "Para que un kernel gen&eacute;rico de Debian o Red Hat puede realizar la funci&oacute;n de hypervisor debemos cargar m&oacute;dulos espec&iacute;ficos en el arranque del sistema.";
 choices[41][2] = "En funci&oacute;n del tipo que sistema operativo que vayamos a alojar como hu&eacute;sped deberemos o no cargar m&oacute;dulos espec&iacute;ficos del kernel por defecto de Debian o Red Hat para que &eacute;ste realice la funci&oacute;n de hypervisor.";
 choices[41][3] = "El hypervisor de Xen es un kernel de Linux especial que debemos instalar, puesto que el kernel por defecto de Debian o Red Hat no puede realizar esas tareas.";
 answers[41] = choices[41][3];
 units[41] = "119";
 comments[41] = "Id Pregunta: 5936. ";


//  Id pregunta: 5937 AÃ±o de creación de pregunta: 2009-01-01
 questions[42]= "43)  Con la herramienta de virtualizaci&oacute;n Xen, &iquest;podemos virtualizar Microsoft Windows?";
 choices[42]= new Array();
 choices[42][0] = "S&iacute;, siempre que la CPU tenga soporte de x86 virtualization.";
 choices[42][1] = "S&iacute;, desde la versi&oacute;n 2.0";
 choices[42][2] = "S&iacute;, siempre que el sistema operativo anfitri&oacute;n tambi&eacute;n sea Microsoft Windows.";
 choices[42][3] = "S&iacute;, siempre que no queramos utilizar en el Windows hu&eacute;sped las Microsoft Enhanced Process Capabilities.";
 answers[42] = choices[42][0];
 units[42] = "119";
 comments[42] = "Id Pregunta: 5937. ";


//  Id pregunta: 5939 AÃ±o de creación de pregunta: 2009-01-01
 questions[43]= "44)  &iquest;Con cu&aacute;l de las siguientes herramientas podr&iacute;amos emular una CPU PowerPC sobre una CPU f&iacute;sica AMD64?";
 choices[43]= new Array();
 choices[43][0] = "Virtual Box";
 choices[43][1] = "Qemu";
 choices[43][2] = "VMWare ESXi";
 choices[43][3] = "Xen";
 answers[43] = choices[43][1];
 units[43] = "119";
 comments[43] = "Id Pregunta: 5939. ";


//  Id pregunta: 5941 AÃ±o de creación de pregunta: 2009-01-01
 questions[44]= "45)  Respecto a la virtualizaci&oacute;n, se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[44]= new Array();
 choices[44][0] = "La virtualizaci&oacute;n se utilizaba en el entorno de los mainframes antes de que se popularizara sobre arquitecturas como ix86 &oacute; amd64";
 choices[44][1] = "Una de las virtudes de la virtualizaci&oacute;n es su bajo requerimiento de memoria RAM";
 choices[44][2] = "El ahorro de energ&iacute;a es una de las razones que impulsa el uso de la virtualizaci&oacute;n en entornos de servidor";
 choices[44][3] = "Xen es una herramienta de virtualizaci&oacute;n de software libre que naci&oacute; en el departamento de computaci&oacute;n de la Universidad de Cambridge";
 answers[44] = choices[44][1];
 units[44] = "119";
 comments[44] = "Id Pregunta: 5941. ";


//  Id pregunta: 5974 AÃ±o de creación de pregunta: 2010-01-01
 questions[45]= "46)  Dadas las siguientes relaciones: A={ax,ay,az,by,bz,cx,cy} y B={x,z} &iquest;Cu&aacute;l ser&iacute;a el resultado de la operaci&oacute;n A dividido entre B?";
 choices[45]= new Array();
 choices[45][0] = "{a,b,c}.";
 choices[45][1] = "{ax,az,bz,cx}.";
 choices[45][2] = "{ay,by,cy}.";
 choices[45][3] = "{a}.";
 answers[45] = choices[45][3];
 units[45] = "58";
 comments[45] = "Id Pregunta: 5974. TIC A 2009";


//  Id pregunta: 6139 AÃ±o de creación de pregunta: 2010-01-01
 questions[46]= "47)  Linux se genera inspir&aacute;ndose en:";
 choices[46]= new Array();
 choices[46][0] = "Unix y MINIX.";
 choices[46][1] = "Unix y Windows.";
 choices[46][2] = "MINIX y Windows.";
 choices[46][3] = "Unix y OS/360 IBM.";
 answers[46] = choices[46][0];
 units[46] = "53";
 comments[46] = "Id Pregunta: 6139. TIC A 2010";


//  Id pregunta: 6322 AÃ±o de creación de pregunta: 2010-01-01
 questions[47]= "48)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no es propia del modelo relacional?";
 choices[47]= new Array();
 choices[47][0] = "Los datos se perciben como tablas.";
 choices[47][1] = "Los operadores que se utilizan toman como entrada tablas y a su salida presentan entidades.";
 choices[47][2] = "Los operadores que se utilizan toman como entrada tablas y como salida tablas.";
 choices[47][3] = "Dispone de una fuerte componente matem&aacute;tica que le da soporte.";
 answers[47] = choices[47][1];
 units[47] = "58";
 comments[47] = "Id Pregunta: 6322. NULL";


//  Id pregunta: 6324 AÃ±o de creación de pregunta: 2010-01-01
 questions[48]= "49)  La cl&aacute;usula INSERT para inserci&oacute;n de datos";
 choices[48]= new Array();
 choices[48][0] = "Tan s&oacute;lo permite la inserci&oacute;n de una tupla cada vez.";
 choices[48][1] = "Puede permitir la inserci&oacute;n de m&aacute;s de una tupla al mismo tiempo.";
 choices[48][2] = "No permite insertar valores nulos.";
 choices[48][3] = "Obliga a que la inserci&oacute;n de los valores sea en el orden en que se cre&oacute; la tabla.";
 answers[48] = choices[48][1];
 units[48] = "58";
 comments[48] = "Id Pregunta: 6324. ";


//  Id pregunta: 6451 AÃ±o de creación de pregunta: 2010-01-01
 questions[49]= "50)  &iquest;Cu&aacute;l de los siguientes es un JFS (Journaling File System)?";
 choices[49]= new Array();
 choices[49][0] = "FAT16";
 choices[49][1] = "ReiserFS";
 choices[49][2] = "ext32";
 choices[49][3] = "Linux extended";
 answers[49] = choices[49][1];
 units[49] = "52";
 comments[49] = "Id Pregunta: 6451. Castilla La Mancha 2009";


//  Id pregunta: 7163 AÃ±o de creación de pregunta: 2010-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre los ficheros de Linux es cierta?";
 choices[50]= new Array();
 choices[50][0] = "/etc/passwd: s&oacute;lo es accesible para root";
 choices[50][1] = "/etc/shadow: contiene las contrase&ntilde;as encriptadas de los usuarios ";
 choices[50][2] = "/etc/ftpusers: contienes los usuarios que pueden acceder al sistema v&iacute;a ftp";
 choices[50][3] = "/etc/dhcpconfig: contiene informaci&oacute;n de configuraci&oacute;n del cliente DHCP";
 answers[50] = choices[50][1];
 units[50] = "53,54";
 comments[50] = "Id Pregunta: 7163. Examen TIC B 2009";


//  Id pregunta: 7274 AÃ±o de creación de pregunta: 2010-01-01
 questions[51]= "52)  Entre las ventajas de la virtualizaci&oacute;n de hardware no se encuentra";
 choices[51]= new Array();
 choices[51][0] = "La reducci&oacute;n de costes de administraci&oacute;n";
 choices[51][1] = "La eficiencia energ&eacute;tica";
 choices[51][2] = "El incremento de rendimiento de las aplicaciones";
 choices[51][3] = "Mayor aprovechamiento de los servidores";
 answers[51] = choices[51][2];
 units[51] = "119";
 comments[51] = "Id Pregunta: 7274. NULL";


//  Id pregunta: 7278 AÃ±o de creación de pregunta: 2010-01-01
 questions[52]= "53)  VMWare es un software de virtualiaci&oacute;n de ";
 choices[52]= new Array();
 choices[52][0] = "Sistema operativo";
 choices[52][1] = "Red";
 choices[52][2] = "Paravirtualizaci&oacute;n";
 choices[52][3] = "Hardware";
 answers[52] = choices[52][3];
 units[52] = "119";
 comments[52] = "Id Pregunta: 7278. NULL";


//  Id pregunta: 7285 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)  &quot;La t&eacute;cnica de  virtualizaci&oacute;n de infraestructura TIC denominada &quot;&quot;paravirtualizaci&oacute;n&quot;&quot;, pone &eacute;nfasis (comparado con la virtualizaci&oacute;n &quot;&quot;normal&quot;&quot;) en:&quot;";
 choices[53]= new Array();
 choices[53][0] = "Compatibilidad e interoperabilidad";
 choices[53][1] = "Rendimiento";
 choices[53][2] = "Costes";
 choices[53][3] = "Inteligencia arti&iexcl;ficial";
 answers[53] = choices[53][1];
 units[53] = "119";
 comments[53] = "Id Pregunta: 7285. Examen TIC B 2009";


//  Id pregunta: 7777 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)   Marque cu&aacute;l de las siguientes afirmaciones es cierta con respecto al sistema de ficheros en red NFS:";
 choices[54]= new Array();
 choices[54][0] = " Proporciona una visi&oacute;n id&eacute;ntica del espacio de nombres para todos los usuarios del sistema con independencia de su localizaci&oacute;n.";
 choices[54][1] = " Una vez realizado el montaje remoto, proporciona transparencia de la localizaci&oacute;n en el nombrado de ficheros.";
 choices[54][2] = " Proporciona una sem&aacute;ntica igual a la que ofrece el sistema Unix en el acceso concurrente a los ficheros.";
 choices[54][3] = " Proporciona transparencia de la replicaci&oacute;n.";
 answers[54] = choices[54][1];
 units[54] = "54";
 comments[54] = "Id Pregunta: 7777. Map 2005";


//  Id pregunta: 8270 AÃ±o de creación de pregunta: 2011-01-01
 questions[55]= "56)  La gesti&oacute;n de memoria virtual en Unix:";
 choices[55]= new Array();
 choices[55][0] = "Mantiene siempre en memoria RAM los procesos del kernel.";
 choices[55][1] = "Utiliza siempre p&aacute;ginas de memoria de tama&ntilde;o variable.";
 choices[55][2] = "Asigna a los procesos, espacios de direcciones compartidos.";
 choices[55][3] = "No contempla la compartici&oacute;n de c&oacute;digo entre procesos.";
 answers[55] = choices[55][0];
 units[55] = "52,53";
 comments[55] = "Id Pregunta: 8270. Examen TIC A1 2010";


//  Id pregunta: 8367 AÃ±o de creación de pregunta: 2011-01-01
 questions[56]= "57)  &iquest;En qu&eacute; a&ntilde;o se ha producido la ultima revisi&oacute;n del est&aacute;ndar ANSI SQL?";
 choices[56]= new Array();
 choices[56][0] = "1992.";
 choices[56][1] = "2008";
 choices[56][2] = "2011";
 choices[56][3] = "2012";
 answers[56] = choices[56][2];
 units[56] = "57";
 comments[56] = "Id Pregunta: 8367. Similar a examen TIC A2 2010";


//  Id pregunta: 8373 AÃ±o de creación de pregunta: 2011-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l de los siguientes niveles de aislamiento previene de los problemas de lecturas sucias y lecturas no  repetibles, pero NO evita las lecturas fantasmas?";
 choices[57]= new Array();
 choices[57][0] = "Read Commited (lectura confirmada).";
 choices[57][1] = "Serializable.";
 choices[57][2] = "Read uncornmited (lectura no confirmada),";
 choices[57][3] = "Repeatable read (lectura repetible).";
 answers[57] = choices[57][3];
 units[57] = "57,58";
 comments[57] = "Id Pregunta: 8373. Examen TIC A2 2010";


//  Id pregunta: 8414 AÃ±o de creación de pregunta: 2011-01-01
 questions[58]= "59)  COBOL es el acr&oacute;nimo de: ";
 choices[58]= new Array();
 choices[58][0] = "COmputer BUsiness-Oriented Language (Lenguaje de Ordenador Orientado a Negocios). ";
 choices[58][1] = "COmmon Business-Oriented Language (Lenguaje Com&uacute;n Orientado a Negocios). ";
 choices[58][2] = "Common Object Business Oriented Language (Lenguaje Com&uacute;n Orientado a Objetos de Negocio). ";
 choices[58][3] = "No es un acr&oacute;nimo.";
 answers[58] = choices[58][1];
 units[58] = "57";
 comments[58] = "Id Pregunta: 8414. Examen TIC A2 2010";


//  Id pregunta: 8433 AÃ±o de creación de pregunta: 2011-01-01
 questions[59]= "60)  Uno de los problemas m&aacute;s serios que se pueden presentar en un ambiente de concurrencia es el &ldquo;abrazo mortal&rdquo; (deadlock), el cu&aacute;l se produce cuando se presentan al mismo tiempo 4 condiciones necesarias. &iquest;Cu&aacute;l de las siguientes no es una de ellas?";
 choices[59]= new Array();
 choices[59][0] = "Condici&oacute;n de no apropiaci&oacute;n";
 choices[59][1] = "Condici&oacute;n de espera circular";
 choices[59][2] = "Condici&oacute;n de exclusi&oacute;n mutua";
 choices[59][3] = "Condici&oacute;n de espera ocupada";
 answers[59] = choices[59][3];
 units[59] = "52";
 comments[59] = "Id Pregunta: 8433. ";


//  Id pregunta: 8470 AÃ±o de creación de pregunta: 2011-01-01
 questions[60]= "61)  La regla 2 de Codd es la del:";
 choices[60]= new Array();
 choices[60][0] = "Tratamiento sistem&aacute;tico de valores nulos";
 choices[60][1] = "Acceso garantizado";
 choices[60][2] = "Actualizaci&oacute;n de vistas";
 choices[60][3] = "Integridad referencial";
 answers[60] = choices[60][1];
 units[60] = "57,58";
 comments[60] = "Id Pregunta: 8470. Analista Ayto. Madrid 2010";


//  Id pregunta: 8472 AÃ±o de creación de pregunta: 2011-01-01
 questions[61]= "62)  El PID 0 se asigna en Unix/Linux a:";
 choices[61]= new Array();
 choices[61][0] = "Swapper";
 choices[61][1] = "Init";
 choices[61][2] = "Page daemon";
 choices[61][3] = "Load";
 answers[61] = choices[61][0];
 units[61] = "53,54";
 comments[61] = "Id Pregunta: 8472. Analista Ayto. Madrid 2010";


//  Id pregunta: 8630 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  &iquest;Cu&aacute;l de las siguientes es una regla de Codd?";
 choices[62]= new Array();
 choices[62][0] = "Regla de la no subversi&oacute;n.";
 choices[62][1] = "Regla de la no concurrencia.";
 choices[62][2] = "Regla de la restricci&oacute;n.";
 choices[62][3] = "Regla de la no replicaci&oacute;n de Informaci&oacute;n.";
 answers[62] = choices[62][0];
 units[62] = "57, 58";
 comments[62] = "Id Pregunta: 8630. Examen TIC A2 2010 interna";


//  Id pregunta: 8637 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  Una relaci&oacute;n muchos a muchos traducida desde un esquema entidad/relaci&oacute;n a un esquema relacional:";
 choices[63]= new Array();
 choices[63][0] = "No tiene claves.";
 choices[63][1] = "Impl&iacute;citamente, contiene una agrupaci&oacute;n de las claves primarias de las entidades relacionadas.";
 choices[63][2] = "No puedo admitir atributos que no pertenezcan a una de las entidades asociadas.";
 choices[63][3] = "Conserva la clave de la entidad fuerte.";
 answers[63] = choices[63][1];
 units[63] = "57, 58";
 comments[63] = "Id Pregunta: 8637. Examen TIC A2 2010 interna";


//  Id pregunta: 8639 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  Si tenemos las dependencias funcionales (A, B) -&gt; C, B -&gt; D y la siguiente relaci&oacute;n (A, B, C, D) donde (A, B) es la clave candidata. &iquest;Cu&aacute;l seria el resultado de aplicar la 2&ordf; forma normal?";
 choices[64]= new Array();
 choices[64][0] = "(A, B, C), (A, B, D).";
 choices[64][1] = "(A, B, C), (B, D).";
 choices[64][2] = "(A, B, C),  (A, D).";
 choices[64][3] = "Ya est&aacute; en 2FN.";
 answers[64] = choices[64][1];
 units[64] = "57, 58";
 comments[64] = "Id Pregunta: 8639. Examen TIC A2 2010 interna";


//  Id pregunta: 8854 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  La vulneraci&oacute;n de una restricci&oacute;n de integridad referencial es detectada por el servidor de base de datos de acuerdo a la declaraci&oacute;n de la:";
 choices[65]= new Array();
 choices[65][0] = "PRIMARY KEY";
 choices[65][1] = "FOREIGN KEY";
 choices[65][2] = "CANDIDATE KEY";
 choices[65][3] = "SUPERKEY";
 answers[65] = choices[65][1];
 units[65] = "58";
 comments[65] = "Id Pregunta: 8854. Analista Ayto. Madrid 2010";


//  Id pregunta: 8859 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  Los dos enfoques m&aacute;s habituales de la virtualizaci&oacute;n de servidores o estaciones de trabajo son:";
 choices[66]= new Array();
 choices[66][0] = "Hospedada y mediante hipervisor (bare metal)";
 choices[66][1] = "Paralela y mediante hipervisor (bare metal)";
 choices[66][2] = "Balanceada y mediante SPM (Service Platform Manager)";
 choices[66][3] = "Mediante hipervisor (bare metal) y mediante supervisor (full metal)";
 answers[66] = choices[66][0];
 units[66] = "119";
 comments[66] = "Id Pregunta: 8859. Analista Ayto. Madrid 2010";


//  Id pregunta: 8878 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  La cl&aacute;usula HAVING de SQL:";
 choices[67]= new Array();
 choices[67][0] = "Establece un filtro para seleccionar las filas que se usar&aacute;n en la consulta.";
 choices[67][1] = "Precisa de la presencia de la cl&aacute;usula WHERE en la sentencia.";
 choices[67][2] = "Establece un filtro que se aplica a las tablas agrupadas.";
 choices[67][3] = "Establece una condici&oacute;n que deben cumplir las filas.";
 answers[67] = choices[67][2];
 units[67] = "57, 58";
 comments[67] = "Id Pregunta: 8878. Examen UPM A2 2011";


//  Id pregunta: 8881 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  ODBC son las siglas de:";
 choices[68]= new Array();
 choices[68][0] = "Open DataBase Consortium";
 choices[68][1] = "Open Data Business Connectivity";
 choices[68][2] = "Open DataBase Connectivity";
 choices[68][3] = "Object DataBase Consortium";
 answers[68] = choices[68][2];
 units[68] = "57, 58";
 comments[68] = "Id Pregunta: 8881. Examen UPM A2 2011";


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


//  Id pregunta: 8981 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  &iquest;Qu&eacute; es Synaptics en el entorno Linux?";
 choices[70]= new Array();
 choices[70][0] = "Un editor de texto avanzado";
 choices[70][1] = "Un front-end del sistema de gesti&oacute;n de paquetes de software";
 choices[70][2] = "Un sistema de monitorizaci&oacute;n de recursos";
 choices[70][3] = "Un gestor de cuentas de usuario";
 answers[70] = choices[70][1];
 units[70] = "54";
 comments[70] = "Id Pregunta: 8981. ";


//  Id pregunta: 9233 AÃ±o de creación de pregunta: 2013-01-01
 questions[71]= "72)  &iquest;En qu&eacute; se basa la interfaz de usuario de iOS?";
 choices[71]= new Array();
 choices[71][0] = "Concepto de manipulaci&oacute;n directa usando gestos multit&aacute;ctiles.";
 choices[71][1] = "Ejecuci&oacute;n de comandos mediante la selecci&oacute;n de men&uacute;s.";
 choices[71][2] = "S&oacute;lo est&aacute; accesible en sistemas con Jailbreak.";
 choices[71][3] = "Su pantalla principal se denomina WinterBoard.";
 answers[71] = choices[71][0];
 units[71] = "52";
 comments[71] = "Id Pregunta: 9233. ";


//  Id pregunta: 9237 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  &iquest;Qu&eacute; es el n&uacute;cleo denominado &ldquo;vanilla&rdquo;?";
 choices[72]= new Array();
 choices[72][0] = "Kernel sin alteraciones suministrado por Linus Torvalds";
 choices[72][1] = "S&oacute;lo se puede descargar de su sitio oficial en http://www.kernel.org";
 choices[72][2] = "Las distintas distribuciones no se basan en el n&uacute;cleo &ldquo;vanilla&rdquo;";
 choices[72][3] = "Todas las anteriores son correctas.";
 answers[72] = choices[72][0];
 units[72] = "53";
 comments[72] = "Id Pregunta: 9237. ";


//  Id pregunta: 9244 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  &iquest;C&oacute;mo divide el software Ubuntu?";
 choices[73]= new Array();
 choices[73][0] = "En secciones llamadas componentes.";
 choices[73][1] = "Los componentes principales son main, restricted, universe, commercial y multiverse.";
 choices[73][2] = "El componente multiverse contiene los paquetes sin soporte debido a que no cumple los requisitos de Software Libre.";
 choices[73][3] = "Todas son correctas.";
 answers[73] = choices[73][3];
 units[73] = "54";
 comments[73] = "Id Pregunta: 9244. ";


//  Id pregunta: 9266 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  Si queremos programar la ejecuci&oacute;n del script &quot;/home/user/script.sh&quot; todos los mi&eacute;rcoles y domingos cada 4 horas, la entrada a a&ntilde;adir en el fichero cron ser&iacute;a:";
 choices[74]= new Array();
 choices[74][0] = "0 */4 * * 3,7 /home/user/script.sh";
 choices[74][1] = "* 4 * * 0,3 /home/user/script.sh ";
 choices[74][2] = "0 */4 wed,sun * * /home/user/script.sh ";
 choices[74][3] = "* */4 * * 3-7 /home/user/script.sh ";
 answers[74] = choices[74][0];
 units[74] = "53";
 comments[74] = "Id Pregunta: 9266. Examen TICA2-2011";


//  Id pregunta: 9455 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  Seg&uacute;n Codd, una entidad en la que todos los atributos tienen dependencia funcional completa de la clave est&aacute;, al menos, en:";
 choices[75]= new Array();
 choices[75][0] = "Primera Forma Normal.";
 choices[75][1] = "Segunda Forma Normal.";
 choices[75][2] = "Tercera Forma Normal.";
 choices[75][3] = "Forma Normal de Boyce-Codd.";
 answers[75] = choices[75][1];
 units[75] = "58";
 comments[75] = "Id Pregunta: 9455. NULL";


//  Id pregunta: 9630 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  Para entornos Unix, indica c&oacute;mo se asigna el sticky bit a un directorio:";
 choices[76]= new Array();
 choices[76][0] = "chmod u+s /directorio/fichero";
 choices[76][1] = "chmog g+s /directorio";
 choices[76][2] = "chmod 177 /directorio ";
 choices[76][3] = "chmod +t /directorio ";
 answers[76] = choices[76][3];
 units[76] = "54";
 comments[76] = "Id Pregunta: 9630. Examen TIC A2 2013";


//  Id pregunta: 9637 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  &iquest;C&oacute;mo puede ejecutarse Windows 2012 Server en procesadores de 32 bits?";
 choices[77]= new Array();
 choices[77][0] = "No puede";
 choices[77][1] = "Con una versi&oacute;n espec&iacute;fica para estos procesadores";
 choices[77][2] = "Con un programa de emulaci&oacute;n";
 choices[77][3] = "Con una m&aacute;quina virtual";
 answers[77] = choices[77][0];
 units[77] = "56";
 comments[77] = "Id Pregunta: 9637. ";


//  Id pregunta: 9719 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  En Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaciones, CRUD";
 choices[78]= new Array();
 choices[78][0] = "es el acr&oacute;nimo de Crear, Leer/Obtener, Actualizar y Borrar (Create, Read/Retrieve, Update, Delete).";
 choices[78][1] = "es la base de arquitecturas Web RESTful (basadas en REST).";
 choices[78][2] = "tiene su origen en sentencias de base de datos relacionales.";
 choices[78][3] = "las opciones a, b y c son ciertas.";
 answers[78] = choices[78][3];
 units[78] = "58";
 comments[78] = "Id Pregunta: 9719. Examen TIC-A1 2013";


//  Id pregunta: 9743 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  Se&ntilde;ale, entre los siguientes, cu&aacute;l es un cliente WebDAV de l&iacute;nea de comandos para entornos Unix:";
 choices[79]= new Array();
 choices[79][0] = "cadaver";
 choices[79][1] = "audacity";
 choices[79][2] = "mahout";
 choices[79][3] = "CalDAV";
 answers[79] = choices[79][0];
 units[79] = "54";
 comments[79] = "Id Pregunta: 9743. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9774 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  TinyOS, cuyo dise&ntilde;o est&aacute; orientado a sistemas embebidos inal&aacute;mbricos de baja potencia, est&aacute; escrito en el lenguaje:";
 choices[80]= new Array();
 choices[80][0] = "Java ";
 choices[80][1] = "Python ";
 choices[80][2] = ".Net";
 choices[80][3] = "nesC ";
 answers[80] = choices[80][3];
 units[80] = "52";
 comments[80] = "Id Pregunta: 9774. Examen TIC A2 2013";


//  Id pregunta: 9919 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  Dentro del dise&ntilde;o conceptual de datos, en una jerarqu&iacute;a de generalizaci&oacute;n se dice que un subconjunto (caso particular de generalizaci&oacute;n con una sola entidad como subentidad) siempre es una jerarqu&iacute;a:";
 choices[81]= new Array();
 choices[81][0] = "Total y exclusiva.";
 choices[81][1] = "Parcial y superpuesta.";
 choices[81][2] = "Parcial y exclusiva.";
 choices[81][3] = "Total y superpuesta.";
 answers[81] = choices[81][2];
 units[81] = "58";
 comments[81] = "Id Pregunta: 9919. TIC A2, Examen 2013";


//  Id pregunta: 9920 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  &iquest;Cu&aacute;l de los siguientes es un Sistema Gestor de Bases de Datos Orientado a Objetos?";
 choices[82]= new Array();
 choices[82][0] = "Microsoft SQL Server.";
 choices[82][1] = "Versant.";
 choices[82][2] = "MariaDB.";
 choices[82][3] = "MySQL.";
 answers[82] = choices[82][1];
 units[82] = "57";
 comments[82] = "Id Pregunta: 9920. TIC A2, Examen 2013";


//  Id pregunta: 10016 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  La instrucci&oacute;n que aborta la transacci&oacute;n en un SGBD y la hace terminar en forma no exitosa se denomina:";
 choices[83]= new Array();
 choices[83][0] = "Undo.";
 choices[83][1] = "Rollback.";
 choices[83][2] = "Two Phase Commit.";
 choices[83][3] = "Commit.";
 answers[83] = choices[83][1];
 units[83] = "57";
 comments[83] = "Id Pregunta: 10016. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10162 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  Un dominio en un modelo relacional&hellip;";
 choices[84]= new Array();
 choices[84][0] = "Puede definirse por intensi&oacute;n, es decir, especificando tipo de datos y restricciones";
 choices[84][1] = "Es un conjunto nominado, infinito y homog&eacute;neo de valores at&oacute;micos";
 choices[84][2] = "S&oacute;lo puede definirse por extensi&oacute;n o enumeraci&oacute;n de los posibles valores del dominio";
 choices[84][3] = "Todas las anteriores";
 answers[84] = choices[84][0];
 units[84] = "58";
 comments[84] = "Id Pregunta: 10162. ";


//  Id pregunta: 10187 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  ACID es un acr&oacute;nimo que, en el contexto de las bases de datos, hace referencia a un conjunto de caracter&iacute;sticas que deben asumir las transacciones para garantizar su procesamiento fiable. De entre &eacute;stas:";
 choices[85]= new Array();
 choices[85][0] = "La Consistencia (C) hace referencia a que las operaciones llevadas a cabo por la transacci&oacute;n ser&aacute;n completadas y confirmadas en su totalidad, o ser&aacute;n deshechas, de modo que no quede ninguna operaci&oacute;n a medias.";
 choices[85][1] = "La caracter&iacute;stica de Integridad (I) garantiza que la base de datos se transforma desde un estado &iacute;ntegro o v&aacute;lido a otro estado &iacute;ntegro o v&aacute;lido.";
 choices[85][2] = "a) y b) son verdaderas";
 choices[85][3] = "a) y b) son falsas";
 answers[85] = choices[85][3];
 units[85] = "57";
 comments[85] = "Id Pregunta: 10187. ";


//  Id pregunta: 10308 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  &iquest;Qu&eacute; es Transact-SQL?";
 choices[86]= new Array();
 choices[86][0] = "Un sistema gestor de base de datos de tipo NoSQL.";
 choices[86][1] = "Una extensi&oacute;n propietaria al est&aacute;ndar SQL.";
 choices[86][2] = "Una query que equivale a realizar consultas SELECT por lotes.";
 choices[86][3] = "Una biblioteca de clases para mapear objetos sobre una base de datos relacional.";
 answers[86] = choices[86][1];
 units[86] = "58";
 comments[86] = "Id Pregunta: 10308. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10432 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  Indique cual de las siguientes ediciones no corresponde a Windows Server 2012 ";
 choices[87]= new Array();
 choices[87][0] = "Business";
 choices[87][1] = "Essentials";
 choices[87][2] = "Foundation";
 choices[87][3] = "Standard";
 answers[87] = choices[87][0];
 units[87] = "56";
 comments[87] = "Id Pregunta: 10432. Examen TIC A1 2013";


//  Id pregunta: 10436 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  En lo referente a las instalaciones por defecto de las interfaces gr&aacute;ficas de los sistemas Linux-Unix ";
 choices[88]= new Array();
 choices[88][0] = "Gnome utiliza &ldquo;Telepathy&rdquo; como librer&iacute;a para las comunicaciones y &ldquo;Plasma&rdquo; para la representaci&oacute;n gr&aacute;fica de la interfaz. ";
 choices[88][1] = "KDE utiliza la librer&iacute;a &ldquo;Pulse Audio&rdquo; para la gesti&oacute;n de sonido  y &ldquo;GTK+&rdquo; para la representaci&oacute;n de la interfaz de usuario. ";
 choices[88][2] = "KDE utiliza la librer&iacute;a &ldquo;Phonon&rdquo; para la creaci&oacute;n de contenido multimedia y &ldquo;Goya&rdquo; para la representaci&oacute;n gr&aacute;fica de partes de la interfaz. ";
 choices[88][3] = "Gnome utiliza &ldquo;Sonnet&rdquo; como librer&iacute;a para la representaci&oacute;n de la interfaz de usuario y &ldquo;Pulse Audio&rdquo; para la gesti&oacute;n de sonido. ";
 answers[88] = choices[88][2];
 units[88] = "54";
 comments[88] = "Id Pregunta: 10436. Examen TIC A1 2013";


//  Id pregunta: 10667 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[89]= new Array();
 choices[89][0] = "Con telnet toda la informaci&oacute;n entre cliente y servidor viaja cifrada.";
 choices[89][1] = "X11 dota de una interfaz gr&aacute;fica a los sistemas Microsoft.";
 choices[89][2] = "La infraestructura de escritorio virtual crea un entorno de sistema operativo independiente en el propio escritorio.";
 choices[89][3] = "Citrix es un software comercial para virtualizaci&oacute;n de escritorio.";
 answers[89] = choices[89][3];
 units[89] = "119";
 comments[89] = "Id Pregunta: 10667. ";


//  Id pregunta: 10793 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  En Android, las aplicaciones se distribuyen en paquetes:";
 choices[90]= new Array();
 choices[90][0] = "yum";
 choices[90][1] = "apk";
 choices[90][2] = "ipa";
 choices[90][3] = "gpm";
 answers[90] = choices[90][1];
 units[90] = "52";
 comments[90] = "Id Pregunta: 10793. Examen GSI 2014";


//  Id pregunta: 10830 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones sobre la arquitectura ANSI/SPARC es correcta:";
 choices[91]= new Array();
 choices[91][0] = "El nivel externo tambi&eacute;n recibe el nombre de nivel f&iacute;sico.";
 choices[91][1] = "El nivel interno tambi&eacute;n recibe el nombre de nivel l&oacute;gico.";
 choices[91][2] = "El nivel externo define los datos que se almacenan en la base de datos y las relaciones entre ellos.";
 choices[91][3] = "El nivel externo contiene las vistas externas de la base de datos y permite ver a cada tipo de usuario s&oacute;lo aquella parte del esquema que es de su inter&eacute;s.";
 answers[91] = choices[91][3];
 units[91] = "57";
 comments[91] = "Id Pregunta: 10830. Examen GSI 2014";


//  Id pregunta: 10874 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Cu&aacute;l de las siguientes NO es un tipo de declaraci&oacute;n v&aacute;lida en un trabajo basado en JCL:";
 choices[92]= new Array();
 choices[92][0] = "JOB";
 choices[92][1] = "COMMENT";
 choices[92][2] = "EXEC";
 choices[92][3] = "DD";
 answers[92] = choices[92][1];
 units[92] = "57, 58";
 comments[92] = "Id Pregunta: 10874. Examen GSI 2014";


//  Id pregunta: 11009 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  El 3 de Noviembre de 2014 se ha liberado una nueva versi&oacute;n del sistema operativo Android. Se denomina:";
 choices[93]= new Array();
 choices[93][0] = "Android 4.3 Jelly Bean";
 choices[93][1] = "Android 5.0 Lollipop.";
 choices[93][2] = "Android 6.0 Marshmallow.";
 choices[93][3] = "Android 4.4 KitKat.";
 answers[93] = choices[93][1];
 units[93] = "52";
 comments[93] = "Id Pregunta: 11009. TIC A1 AGE 2014";


//  Id pregunta: 11034 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l de los siguientes tipos de modelados conceptuales se asocia correctamente a su descripci&oacute;n?";
 choices[94]= new Array();
 choices[94][0] = "a)&nbsp;&nbsp;&nbsp;&nbsp; Modelo de Datos &agrave; Modelo est&aacute;tico";
 choices[94][1] = "Modelo de Objetos &agrave; Modelo funcional";
 choices[94][2] = "Modelo de Procesos &agrave; Modelo din&aacute;mico";
 choices[94][3] = "Modelo de Estados &agrave; Modelo funcional";
 answers[94] = choices[94][0];
 units[94] = "57";
 comments[94] = "Id Pregunta: 11034. ";


//  Id pregunta: 11035 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Cu&aacute;l de las siguientes NO es una regla de Codd?";
 choices[95]= new Array();
 choices[95][0] = "Regla del Acceso Garantizado";
 choices[95][1] = "Regla de Actualizaci&oacute;n de Vistas";
 choices[95][2] = "Independencia L&oacute;gica de Datos";
 choices[95][3] = "Regla de la Subversi&oacute;n";
 answers[95] = choices[95][3];
 units[95] = "58";
 comments[95] = "Id Pregunta: 11035. La Regla 12 es de la No Subversi&oacute;n";


//  Id pregunta: 11038 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Qu&eacute; Base de Datos NO est&aacute; disponible para Linux?";
 choices[96]= new Array();
 choices[96][0] = "Oracle";
 choices[96][1] = "SQL Server";
 choices[96][2] = "PostgreSQL";
 choices[96][3] = "MySQL";
 answers[96] = choices[96][1];
 units[96] = "58";
 comments[96] = "Id Pregunta: 11038. ";


//  Id pregunta: 11132 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;A qu&eacute; se refiere un problema de fragmentaci&oacute;n interna de la memoria de un sistema operativo?";
 choices[97]= new Array();
 choices[97][0] = "Cuando el programa es m&aacute;s peque&ntilde;o que el marco de p&aacute;gina asignado";
 choices[97][1] = "Cuando quedan zonas de memoria libres peque&ntilde;as que no se pueden utilizar";
 choices[97][2] = "Cuando un programa utiliza zonas de memoria diferentes en cada sesi&oacute;n para escribir sus datos.";
 choices[97][3] = "Ninguna de las anteriores";
 answers[97] = choices[97][0];
 units[97] = "52";
 comments[97] = "Id Pregunta: 11132. ";


//  Id pregunta: 11136 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Cu&aacute;l de los siguientes no es un lenguaje para interactuar con la SGBD?";
 choices[98]= new Array();
 choices[98][0] = "DDL - Data Definition Language";
 choices[98][1] = "DML - Data Manipulation Language";
 choices[98][2] = "DCL - Data Control Language";
 choices[98][3] = "Todos los anteriores son lenguajes para interactuar con la SGBD";
 answers[98] = choices[98][3];
 units[98] = "57";
 comments[98] = "Id Pregunta: 11136. ";


//  Id pregunta: 11679 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  El comando top de Linux permite:";
 choices[99]= new Array();
 choices[99][0] = "Moverse por una b&uacute;squeda";
 choices[99][1] = "Acceder al directorio inmediatamente inferior";
 choices[99][2] = "Conocer el consumo de CPU de todos los procesos";
 choices[99][3] = "Todas las anteriores son falsas";
 answers[99] = choices[99][2];
 units[99] = "53, 54";
 comments[99] = "Id Pregunta: 11679. ";


