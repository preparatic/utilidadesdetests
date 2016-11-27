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


//  Id pregunta: 719 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  Para realizar un programa que accede a una base de datos para presentar el resultado de una b&uacute;squeda, se utilizar&aacute;:";
 choices[1]= new Array();
 choices[1][0] = "Sentencias de lectura de los ficheros que componen la base de datos";
 choices[1][1] = "SQL embebido en un lenguaje de programaci&oacute;n";
 choices[1][2] = "SQL din&aacute;mico, ya que es m&aacute;s eficiente que el SQL est&aacute;tico";
 choices[1][3] = "SQL, escrito directamente sobre una sesi&oacute;n de la base de datos";
 answers[1] = choices[1][1];
 units[1] = "58";
 comments[1] = "Id Pregunta: 719. Examen TIC MAP B 2004";


//  Id pregunta: 744 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  Las aplicaciones Java son comprobadas:";
 choices[2]= new Array();
 choices[2][0] = "en tiempo de compilaci&oacute;n";
 choices[2][1] = "en tiempo de ejecuci&oacute;n";
 choices[2][2] = "en tiempo de compilaci&oacute;n y en tiempo de ejecuci&oacute;n";
 choices[2][3] = "en tiempo de compilaci&oacute;n siempre y en tiempo de ejecuci&oacute;n s&oacute;lo si se trata de un programa que no requiera ejecuci&oacute;n en tiempo real";
 answers[2] = choices[2][2];
 units[2] = "60";
 comments[2] = "Id Pregunta: 744. Similar a examen TIC SS A 2003";


//  Id pregunta: 754 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  Indicar la afirmaci&oacute;n INCORRECTA respecto MS ASP.NET";
 choices[3]= new Array();
 choices[3][0] = "ASP.NET puede utilizar cualquier lenguaje de programaci&oacute;n soportado por .NET";
 choices[3][1] = "Es compatible con p&aacute;ginas ASP existentes";
 choices[3][2] = "Necesita el .NET Framework para su ejecuci&oacute;n";
 choices[3][3] = "Se puede utilizar con servidores web que no sean IIS, como Apache o nginx";
 answers[3] = choices[3][3];
 units[3] = "59";
 comments[3] = "Id Pregunta: 754. NULL";


//  Id pregunta: 973 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  Dada una relaci&oacute;n R y dos de sus atributos X e Y, si cada valor de X tiene asociado con &eacute;l un &uacute;nico valorde Y en todo instante, se dice que:";
 choices[4]= new Array();
 choices[4][0] = "El atributo X es funcionalmente dependiente del atributo Y";
 choices[4][1] = "El atributo Y es funcionalmente dependiente del atributo X";
 choices[4][2] = "La relaci&oacute;n R no est&aacute; normalizada";
 choices[4][3] = "La relaci&oacute;n R no est&aacute; en Segunda Forma Normal";
 answers[4] = choices[4][1];
 units[4] = "58";
 comments[4] = "Id Pregunta: 973. ";


//  Id pregunta: 1007 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  El concepto de trabajo en grupo o groupware se construy&oacute; alrededor de:";
 choices[5]= new Array();
 choices[5][0] = "Los productos de correo electr&oacute;nico";
 choices[5][1] = "Los procesadores de texto";
 choices[5][2] = "Las redes locales de &aacute;mbito de oficina";
 choices[5][3] = "Las hojas de c&aacute;lculo";
 answers[5] = choices[5][0];
 units[5] = "71";
 comments[5] = "Id Pregunta: 1007. ";


//  Id pregunta: 1053 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  El SGBD permite la definici&oacute;n de la Base de Datos a tres niveles de abstracci&oacute;n: l&oacute;gico, f&iacute;sico y externo En el nivel l&oacute;gico:";
 choices[6]= new Array();
 choices[6][0] = "Se da una definici&oacute;n de las estructuras de datos que constituyen la base de datos";
 choices[6][1] = "Se elige una implementaci&oacute;n de cada una de las estructuras de datos";
 choices[6][2] = "Se definen vistas parciales de la base de datos para distintos grupos de usuarios";
 choices[6][3] = "Ninguna es cierta";
 answers[6] = choices[6][0];
 units[6] = "57";
 comments[6] = "Id Pregunta: 1053. ";


//  Id pregunta: 1064 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  El workflow es una categor&iacute;a de aplicaciones dentro del trabajo en grupo o groupware que permite:";
 choices[7]= new Array();
 choices[7][0] = "Desarrollo de aplicaciones multiusuario";
 choices[7][1] = "Desarrollo de aplicaciones de coordinaci&oacute;n de procesos";
 choices[7][2] = "Desarrollo de aplicaciones de flujo de datos";
 choices[7][3] = "Desarrollo de aplicaciones de mail inteligente";
 answers[7] = choices[7][1];
 units[7] = "71";
 comments[7] = "Id Pregunta: 1064. ";


//  Id pregunta: 1080 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  En el entorno de Bases de Datos, los &iacute;ndices son de vital importancia en las transacciones de acceso &iquest;Cu&aacute;l de las siguientes afirmaciones no es cierta?:";
 choices[8]= new Array();
 choices[8][0] = "El &iacute;ndice tambi&eacute;n es una tabla almacenada en disco";
 choices[8][1] = "Las tablas de &iacute;ndices se actualizan cuando se actualizan las tablas de datos";
 choices[8][2] = "La actualizaci&oacute;n de las tablas de &iacute;ndices es transparente al usuario";
 choices[8][3] = "Las actualizaciones de &iacute;ndices no consumen recursos";
 answers[8] = choices[8][3];
 units[8] = "57";
 comments[8] = "Id Pregunta: 1080. ";


//  Id pregunta: 1081 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  En el lenguaje de consulta en BBDD relacionales, se usan los t&eacute;rminos tabla, fila y columna para:";
 choices[9]= new Array();
 choices[9][0] = "Tupla, relaci&oacute;n y atributo, respectivamente";
 choices[9][1] = "Relaci&oacute;n, tupla y atributo, respectivamente";
 choices[9][2] = "Relaci&oacute;n, atributo y tupla, respectivamente";
 choices[9][3] = "Tupla, atributo y relaci&oacute;n, respectivamente";
 answers[9] = choices[9][1];
 units[9] = "58";
 comments[9] = "Id Pregunta: 1081. ";


//  Id pregunta: 1083 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  En el lenguaje Java a las variables de clase (class variables) se les denomina tambi&eacute;n:";
 choices[10]= new Array();
 choices[10][0] = "Private o privadas";
 choices[10][1] = "Static o est&aacute;ticas";
 choices[10][2] = "Final o final";
 choices[10][3] = "System o sistema";
 answers[10] = choices[10][1];
 units[10] = "60";
 comments[10] = "Id Pregunta: 1083. NULL";


//  Id pregunta: 1103 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  En Java, al declarar una variable de tipo array";
 choices[11]= new Array();
 choices[11][0] = "No es necesario indicar la longitud del objeto";
 choices[11][1] = "Es necesario indicar la longitud m&aacute;xima del objeto";
 choices[11][2] = "Es necesario indicar la longitud exacta del objeto";
 choices[11][3] = "Ninguna de las anteriores";
 answers[11] = choices[11][0];
 units[11] = "60";
 comments[11] = "Id Pregunta: 1103. JCED - Preparatic XVII. Solo se debe indicar la long max de cada dimensi&oacute;n del array si no se asigna en ese momento.";


//  Id pregunta: 1125 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  En referencia a simplificaci&oacute;n de expresiones booleanas: ";
 choices[12]= new Array();
 choices[12][0] = "Se usa el M&eacute;todo de Karnaugh.";
 choices[12][1] = "Se usa el M&eacute;todo de Shannon.";
 choices[12][2] = "Para funciones de m&aacute;s de 6 estados se usa el M&eacute;todo de Quine-McCluskey.";
 choices[12][3] = "Ninguna de las anteriores es v&aacute;lida.";
 answers[12] = choices[12][2];
 units[12] = "58";
 comments[12] = "Id Pregunta: 1125. ";


//  Id pregunta: 1199 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Java es un lenguaje de programaci&oacute;n que surgi&oacute; tras realizar pruebas fallidas para dise&ntilde;ar un sistema de programaci&oacute;n de electrodom&eacute;sticos. &iquest;Qu&eacute; empresa cre&oacute; este lenguaje?:";
 choices[13]= new Array();
 choices[13][0] = "Siemens";
 choices[13][1] = "Sun Microsystems";
 choices[13][2] = "General Electric";
 choices[13][3] = "IBM";
 answers[13] = choices[13][1];
 units[13] = "60";
 comments[13] = "Id Pregunta: 1199. NULL";


//  Id pregunta: 1225 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  La instrucci&oacute;n &quot;SELECT DISTINCT&quot; en SQL:";
 choices[14]= new Array();
 choices[14][0] = "Devuelve los resultados de la consulta, eliminando los duplicados";
 choices[14][1] = "Devuelve los datos de la tabla que no estaban en la consulta inmediatamente anterior";
 choices[14][2] = "Permite obtener los datos clave que distinguen a una fila de otra";
 choices[14][3] = "Todas las anteriores respuestas son falsas";
 answers[14] = choices[14][0];
 units[14] = "58";
 comments[14] = "Id Pregunta: 1225. ";


//  Id pregunta: 1236 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  La norma ANSI/SQL se corresponde con la norma ISO:";
 choices[15]= new Array();
 choices[15][0] = "ISO 7498";
 choices[15][1] = "ISO 9735";
 choices[15][2] = "ISO 9075";
 choices[15][3] = "ISO 9945-1";
 answers[15] = choices[15][2];
 units[15] = "58";
 comments[15] = "Id Pregunta: 1236. ";


//  Id pregunta: 1292 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  ODBC:";
 choices[16]= new Array();
 choices[16][0] = "Es un conjunto de drivers que permiten el acceso a datos heterog&eacute;neos";
 choices[16][1] = "Son drivers, exclusivos de Windows, para el acceso a base de datos";
 choices[16][2] = "Es la tecnologia empleada por Microsoft Access para gestionar los datos";
 choices[16][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[16] = choices[16][0];
 units[16] = "58";
 comments[16] = "Id Pregunta: 1292. ";


//  Id pregunta: 1303 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Para solucionar la posible colisi&oacute;n de distintas peticiones de actualizaci&oacute;n simult&aacute;neas sobre un mismo dato de la base de datos, utilizaremos la t&eacute;cnica denominada de:";
 choices[17]= new Array();
 choices[17][0] = "Bloqueo ";
 choices[17][1] = "Rollback";
 choices[17][2] = "Interbloqueo";
 choices[17][3] = "Inter-Roll";
 answers[17] = choices[17][0];
 units[17] = "57";
 comments[17] = "Id Pregunta: 1303. ";


//  Id pregunta: 1334 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Se puede decir que una base de datos es:";
 choices[18]= new Array();
 choices[18][0] = "Un elemento f&iacute;sico (hardware)";
 choices[18][1] = "Un dispositivo de almacenamiento";
 choices[18][2] = "Un conjunto de datos interrelacionados";
 choices[18][3] = "Una colecci&oacute;n de ficheros independientes entre s&iacute;";
 answers[18] = choices[18][2];
 units[18] = "57";
 comments[18] = "Id Pregunta: 1334. ";


//  Id pregunta: 1344 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  Se&ntilde;ale el modelo de miner&iacute;a de datos que comprueba la validez de las hip&oacute;tesis establecidas por el usuario.";
 choices[19]= new Array();
 choices[19][0] = "Modelo de descubrimiento.";
 choices[19][1] = "Modelo de verificaci&oacute;n.";
 choices[19][2] = "Modelo predictivo.";
 choices[19][3] = "Modelo de resumen.";
 answers[19] = choices[19][1];
 units[19] = "68";
 comments[19] = "Id Pregunta: 1344. ";


//  Id pregunta: 1389 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Un proveedor de servicios OLE DB es:";
 choices[20]= new Array();
 choices[20][0] = "Un componente OLE DB que en realidad no es propietario de los datos, y que puede proveer alg&uacute;n otro servicio";
 choices[20][1] = "Cualquier componente Software que expone sus datos a trav&eacute;s de una interfaz OLE DB";
 choices[20][2] = "Simult&aacute;neamente, un consumidor y un proveedor de datos";
 choices[20][3] = "Las respuestas 'a' y 'c' son correctas";
 answers[20] = choices[20][0];
 units[20] = "59";
 comments[20] = "Id Pregunta: 1389. ";


//  Id pregunta: 1547 AÃ±o de creación de pregunta: 2003-01-01
 questions[21]= "22)  &iquest;C&oacute;mo se crea un &iacute;ndice para una tabla?";
 choices[21]= new Array();
 choices[21][0] = "Se crea siempre en la misma sentencia en que se crea la tabla.";
 choices[21][1] = "Se crea siempre autom&aacute;ticamente sobre la clave primaria al crear la tabla.";
 choices[21][2] = "Con CREATE INDEX nombre-&iacute;ndice ON nombre-tabla (atrib [,atrib]*).";
 choices[21][3] = "Con INSERT INDEX nombre-&iacute;ndice ON nombre-tabla (atrib [,atrib]*).";
 answers[21] = choices[21][2];
 units[21] = "58";
 comments[21] = "Id Pregunta: 1547. NULL";


//  Id pregunta: 1599 AÃ±o de creación de pregunta: 2003-01-01
 questions[22]= "23)  En un modelo de datos jer&aacute;rquico:";
 choices[22]= new Array();
 choices[22][0] = "Un registro no es subordinado directo de ning&uacute;n otro registro.";
 choices[22][1] = "Un registro es subordinado directo de como m&aacute;ximo otro registro.";
 choices[22][2] = "Un registro es subordinado directo de n registros, dependiendo de la topolog&iacute;a del modelo.";
 choices[22][3] = "Los registros estar organizados en una red de relaciones mediante un grafo.";
 answers[22] = choices[22][1];
 units[22] = "57";
 comments[22] = "Id Pregunta: 1599. Junta Andaluc&iacute;a";


//  Id pregunta: 1639 AÃ±o de creación de pregunta: 2004-01-01
 questions[23]= "24)  &iquest;Cu&aacute;l no es una funci&oacute;n del Administrador de Base de Datos?";
 choices[23]= new Array();
 choices[23][0] = "Dise&ntilde;o de la base de datos";
 choices[23][1] = "Supervisi&oacute;n del funcionamiento de la base de datos";
 choices[23][2] = "Correci&oacute;n de errores de entrada de datos";
 choices[23][3] = "Ninguna de las anteriores";
 answers[23] = choices[23][2];
 units[23] = "57";
 comments[23] = "Id Pregunta: 1639. ";


//  Id pregunta: 1654 AÃ±o de creación de pregunta: 2004-01-01
 questions[24]= "25)  &iquest;Las siglas &quot;ACID&quot; qu&eacute; significan desde el punto de vista de las transacciones?";
 choices[24]= new Array();
 choices[24][0] = "Atomicity, Consistency, Isolation and Durability";
 choices[24][1] = "Atomicity, Consistency, Integration and Durability";
 choices[24][2] = "Authenticity, Confidentiality, Integration and Durability";
 choices[24][3] = "Ninguna de las anteriores";
 answers[24] = choices[24][0];
 units[24] = "58";
 comments[24] = "Id Pregunta: 1654. ";


//  Id pregunta: 1675 AÃ±o de creación de pregunta: 2004-01-01
 questions[25]= "26)  &iquest;Cu&aacute;l NO es uno de los principios de Codd?";
 choices[25]= new Array();
 choices[25][0] = "Acceso garantizado";
 choices[25][1] = "Independencia f&iacute;sica de los datos";
 choices[25][2] = "Gesti&oacute;n de una BDR";
 choices[25][3] = "Actualizaci&oacute;n de tablas";
 answers[25] = choices[25][3];
 units[25] = "58";
 comments[25] = "Id Pregunta: 1675. ";


//  Id pregunta: 1678 AÃ±o de creación de pregunta: 2004-01-01
 questions[26]= "27)  Indique la afirmaci&oacute;n verdadera respecta a ADO.NET";
 choices[26]= new Array();
 choices[26][0] = "Utiliza el objeto DATASET, estructura relacional que puede ser le&iacute;da, escrita y serializada usando XML";
 choices[26][1] = "Potencia el acceso a datos desconectados usando XML";
 choices[26][2] = "El DATASET de ADO.NET accede a los datos con independencia de la fuente de datos que lo aprovisiona";
 choices[26][3] = "Todas son ciertas";
 answers[26] = choices[26][3];
 units[26] = "59";
 comments[26] = "Id Pregunta: 1678. ";


//  Id pregunta: 1779 AÃ±o de creación de pregunta: 2006-01-01
 questions[27]= "28)  &iquest;Cu&aacute;l de los siguientes no es un servidor de aplicaciones J2EE?";
 choices[27]= new Array();
 choices[27][0] = "Tomcat";
 choices[27][1] = "Geronimo";
 choices[27][2] = "JBoss";
 choices[27][3] = "Los 3 lo son";
 answers[27] = choices[27][0];
 units[27] = "60";
 comments[27] = "Id Pregunta: 1779. De la especificaci&oacute;n JEE, Tomcat no cumple la especificaci&oacute;n EJB, solo servlets.";


//  Id pregunta: 1780 AÃ±o de creación de pregunta: 2006-01-01
 questions[28]= "29)  Se&ntilde;ale cual de estos entornos de desarrollo en Java no es gratuito";
 choices[28]= new Array();
 choices[28][0] = "Jdeveloper";
 choices[28][1] = "Eclipse";
 choices[28][2] = "JBuilder";
 choices[28][3] = "NetBeans";
 answers[28] = choices[28][2];
 units[28] = "60";
 comments[28] = "Id Pregunta: 1780. NULL";


//  Id pregunta: 1843 AÃ±o de creación de pregunta: 2006-01-01
 questions[29]= "30)  &iquest;Con que categoria de software esta m&aacute;s relacionado el BPM?";
 choices[29]= new Array();
 choices[29][0] = "Workflow";
 choices[29][1] = "B2B";
 choices[29][2] = "B2C";
 choices[29][3] = "SCM";
 answers[29] = choices[29][0];
 units[29] = "71";
 comments[29] = "Id Pregunta: 1843. ";


//  Id pregunta: 2646 AÃ±o de creación de pregunta: 2003-01-01
 questions[30]= "31)  En el modelo Entidad/Relaci&oacute;n extendido las relaciones d&eacute;biles:";
 choices[30]= new Array();
 choices[30][0] = "Son las que existen entre entidades d&eacute;biles";
 choices[30][1] = "&Uacute;nicamente las que existen entre una entidad regular y otra entidad d&eacute;bil cuya identificaci&oacute;n depende de la identificaci&oacute;n de la anterior.";
 choices[30][2] = "Son las que existen entre una entidad regular y otra entidad d&eacute;bil, independientemente de que la dependencia sea por identificaci&oacute;n o existencia.";
 choices[30][3] = "Son las que existen entre una entidad regular y otra entidad d&eacute;bil cuya existencia no depende de la existencia de la anterior.";
 answers[30] = choices[30][2];
 units[30] = "58,80";
 comments[30] = "Id Pregunta: 2646. ";


//  Id pregunta: 4073 AÃ±o de creación de pregunta: 2006-01-01
 questions[31]= "32)  &iquest;Una BD relacional puede distribuirse en diferentes maquinas?";
 choices[31]= new Array();
 choices[31][0] = "Si";
 choices[31][1] = "Si, pero solo en entorno Linux";
 choices[31][2] = "No";
 choices[31][3] = "No porque se violaria la integridad  referencial";
 answers[31] = choices[31][0];
 units[31] = "57";
 comments[31] = "Id Pregunta: 4073. ";


//  Id pregunta: 4277 AÃ±o de creación de pregunta: 2007-01-01
 questions[32]= "33)  Si para consolidar una transacci&oacute;n en un sistema relacional se utiliza la sentencia COMMIT, &iquest;qu&eacute; sentencia se utiliza para retroceder una transacci&oacute;n?";
 choices[32]= new Array();
 choices[32][0] = "NO COMMIT.";
 choices[32][1] = "ROLLBACK";
 choices[32][2] = "END TRANSACTION.";
 choices[32][3] = "BACK TRANSACTION.";
 answers[32] = choices[32][1];
 units[32] = "57";
 comments[32] = "Id Pregunta: 4277. ";


//  Id pregunta: 4304 AÃ±o de creación de pregunta: 2007-01-01
 questions[33]= "34)  En una base de datos relacional, para definir la estructura org&aacute;nica de un organismo p&uacute;blico, la mejor soluci&oacute;n ser&aacute;:";
 choices[33]= new Array();
 choices[33][0] = "Definir una tabla de departamentos con una relaci&oacute;n reflexiva &lsquo;pertenece a&rsquo;.";
 choices[33][1] = "Definir dos tablas de departamentos con una relaci&oacute;n &lsquo;pertenece a&rsquo; entre ellas.";
 choices[33][2] = "Definir una tabla de departamentos con una clave tipo &lsquo;TREE&rsquo; que recoja la estructura org&aacute;nica.";
 choices[33][3] = "Preguntar al usuario cu&aacute;ntos niveles de departamentos tiene el organismo, y definir en una tabla de departamentos tantos atributos como niveles posibles pueda haber.";
 answers[33] = choices[33][0];
 units[33] = "58";
 comments[33] = "Id Pregunta: 4304. ";


//  Id pregunta: 4359 AÃ±o de creación de pregunta: 2007-01-01
 questions[34]= "35)  Una de las caracter&iacute;sticas de un sistema OLTP es:";
 choices[34]= new Array();
 choices[34][0] = "Homogeneidad de datos almacenados.";
 choices[34][1] = "Alto rendimiento en las operaciones de inserci&oacute;n y actualizaci&oacute;n.";
 choices[34][2] = "Total organizaci&oacute;n.";
 choices[34][3] = "Facilidad para responder a consultas complejas.";
 answers[34] = choices[34][1];
 units[34] = "68";
 comments[34] = "Id Pregunta: 4359. ";


//  Id pregunta: 4362 AÃ±o de creación de pregunta: 2007-01-01
 questions[35]= "36)  &iquest;Cu&aacute;l de los siguientes no es un operador en el an&aacute;lisis de los almacenes de datos multidimensionales?";
 choices[35]= new Array();
 choices[35][0] = "Duck.";
 choices[35][1] = "Drill.";
 choices[35][2] = "Roll.";
 choices[35][3] = "Slice &amp; dice.";
 answers[35] = choices[35][0];
 units[35] = "68";
 comments[35] = "Id Pregunta: 4362. ";


//  Id pregunta: 4386 AÃ±o de creación de pregunta: 2007-01-01
 questions[36]= "37)  En el entorno .NET se han desarrollado una serie de lenguajes de programaci&oacute;n para que sean compatibles con el marco de trabajo .NET. &iquest;Cu&aacute;l de los siguientes no es uno de esos lenguajes?";
 choices[36]= new Array();
 choices[36][0] = "Java";
 choices[36][1] = "C#";
 choices[36][2] = "Visual Basic";
 choices[36][3] = "C++";
 answers[36] = choices[36][0];
 units[36] = "59";
 comments[36] = "Id Pregunta: 4386. ";


//  Id pregunta: 4514 AÃ±o de creación de pregunta: 2007-01-01
 questions[37]= "38)  En el modelo relacional se denomina dominio de un atributo a:";
 choices[37]= new Array();
 choices[37][0] = "El conjunto de valores permitidos para ese atributo.";
 choices[37][1] = "El peso del atributo, es decir si forma parte de una clave candidata o no.";
 choices[37][2] = "La clasificaci&oacute;n de los atributos de una relaci&oacute;n entre dominantes y dominados.";
 choices[37][3] = "El orden de los valores de ese atributo para todas las tuplas de la relaci&oacute;n donde se encuentra definido.";
 answers[37] = choices[37][0];
 units[37] = "58";
 comments[37] = "Id Pregunta: 4514. ";


//  Id pregunta: 4533 AÃ±o de creación de pregunta: 2007-01-01
 questions[38]= "39)  En java, &iquest;como se hace referencia al objeto actual sobre el que ha sido Ilamado el m&eacute;todo que se esta ejecutando?";
 choices[38]= new Array();
 choices[38][0] = "Con Ia referencia this.";
 choices[38][1] = "Con la referencia null.";
 choices[38][2] = "No es posible.";
 choices[38][3] = "Invocando el m&eacute;todo get.";
 answers[38] = choices[38][0];
 units[38] = "60";
 comments[38] = "Id Pregunta: 4533. NULL";


//  Id pregunta: 4534 AÃ±o de creación de pregunta: 2007-01-01
 questions[39]= "40)  &iquest;Cu&aacute;l de las siguientes no es una herramienta de la Oracle Developer Suite? ";
 choices[39]= new Array();
 choices[39][0] = "Forms.";
 choices[39][1] = "Reports.";
 choices[39][2] = "Designer.";
 choices[39][3] = "Fusion.";
 answers[39] = choices[39][3];
 units[39] = "57,58";
 comments[39] = "Id Pregunta: 4534. ";


//  Id pregunta: 4569 AÃ±o de creación de pregunta: 2007-01-01
 questions[40]= "41)  Para hacer una Ilamada a un procedimiento almacenado trabajando con JDBC podemos utilizar un objeto CallableStatement. Si el procedimiento almacenado devuelve mas de un conjunto de resultados, &iquest;que m&eacute;todo deberemos invocar?:";
 choices[40]= new Array();
 choices[40][0] = "execute";
 choices[40][1] = "executeQuery";
 choices[40][2] = "executeProcedure";
 choices[40][3] = "executeUpdate";
 answers[40] = choices[40][0];
 units[40] = "60";
 comments[40] = "Id Pregunta: 4569. NULL";


//  Id pregunta: 4790 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  &iquest;Qu&eacute; privilegio deber&iacute;a tener un usuario para poder dar permisos de acceso y modificaci&oacute;n sobre su esquema aotro usuario?";
 choices[41]= new Array();
 choices[41][0] = "CONNECT y RESOURCE";
 choices[41][1] = "DBA";
 choices[41][2] = "GRANT ANY ROLE";
 choices[41][3] = "SELECT ANY TABLE";
 answers[41] = choices[41][2];
 units[41] = "57";
 comments[41] = "Id Pregunta: 4790. ";


//  Id pregunta: 5020 AÃ±o de creación de pregunta: 2003-01-01
 questions[42]= "43)  &iquest;Cu&aacute;l de las siguientes afirmaciones define el tipo de procesamiento conocido como OLAP?";
 choices[42]= new Array();
 choices[42][0] = "Procesamiento transaccional en tiempo real que consiste en realizar transacciones, es decir actualizaciones y consultas a la base de datos con un objetivo operacional.";
 choices[42][1] = "Procesamiento anal&iacute;tico en tiempo real que engloba un conjunto de operaciones, exclusivamente de consulta, en las que se requiere agregar y cruzar gran cantidad de informaci&oacute;n.";
 choices[42][2] = "Procesamiento anal&iacute;tico en tiempo real que engloba un conjunto de operaciones de consulta y actualizaci&oacute;n, en las que se requiere agregar y cruzar gran cantidad de informaci&oacute;n.";
 choices[42][3] = "Procesamiento transaccional en tiempo real que engloba un conjunto de operaciones, de consulta y actualizaci&oacute;n, con el objetivo de realizar informes y res&uacute;menes para el apoyo en la toma de decisiones.";
 answers[42] = choices[42][1];
 units[42] = "68";
 comments[42] = "Id Pregunta: 5020. Examen TIC A 2007";


//  Id pregunta: 5425 AÃ±o de creación de pregunta: 2003-01-01
 questions[43]= "44)  En OLAP, &iquest;Qu&eacute; son las variables complejas?";
 choices[43]= new Array();
 choices[43][0] = "Las que tienen un tipo complejo.";
 choices[43][1] = "Las que se calculan a partir de otras variables.";
 choices[43][2] = "Las que necesitan m&aacute;s de una dimensi&oacute;n para ser almacenadas.";
 choices[43][3] = "Las que no son representables.";
 answers[43] = choices[43][0];
 units[43] = "68";
 comments[43] = "Id Pregunta: 5425. Castilla y Le&oacute;n";


//  Id pregunta: 5438 AÃ±o de creación de pregunta: 2003-01-01
 questions[44]= "45)  Los sistemas colaborativos buscan";
 choices[44]= new Array();
 choices[44][0] = "Que todo el mundo participe en la toma de decisiones";
 choices[44][1] = "La puesta a disposici&oacute;n de un gran volumen de informaci&oacute;n";
 choices[44][2] = "Integrar el trabajo de muchos usuarios concurrentes en un solo proyecto";
 choices[44][3] = "El despliegue de un sistema de informaci&oacute;n que abarque a todo el personal de la organizaci&oacute;n";
 answers[44] = choices[44][2];
 units[44] = "71";
 comments[44] = "Id Pregunta: 5438. Castilla y Le&oacute;n";


//  Id pregunta: 5444 AÃ±o de creación de pregunta: 2003-01-01
 questions[45]= "46)  Un programa escrito Java puede ejecutarse en cualquier plataforma porque ";
 choices[45]= new Array();
 choices[45][0] = "el lenguaje Java se deriva de C++.";
 choices[45][1] = "la m&aacute;quina virtual de Java (JVM) interpreta el programa para cada sistema operativo";
 choices[45][2] = "el compilador es id&eacute;ntico al de C++.";
 choices[45][3] = "porque la APIs de Java han sido dise&ntilde;adas con ese fin";
 answers[45] = choices[45][1];
 units[45] = "60";
 comments[45] = "Id Pregunta: 5444. Castilla y Le&oacute;n";


//  Id pregunta: 5455 AÃ±o de creación de pregunta: 2003-01-01
 questions[46]= "47)  Una Importante cuesti&oacute;n a considerar en la elecci&oacute;n de una sentencia SQL es";
 choices[46]= new Array();
 choices[46][0] = "N&uacute;mero de CPUs en el servidor";
 choices[46][1] = "Grado de paralelismo de las tablas";
 choices[46][2] = "Uso de &iacute;ndices de mapas de bits";
 choices[46][3] = "Calidad de las optimizaciones de las sentencias SQL";
 answers[46] = choices[46][3];
 units[46] = "58";
 comments[46] = "Id Pregunta: 5455. Castilla y Le&oacute;n";


//  Id pregunta: 5677 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  Indique cu&aacute;l de las siguientes opciones no est&aacute; relacionada con la Web Sem&aacute;ntica:";
 choices[47]= new Array();
 choices[47][0] = "RDF (Resource Description Framework).";
 choices[47][1] = "OWL (Web Ontology Language).";
 choices[47][2] = "XML (Extensible Markup Language)";
 choices[47][3] = "Ninguna de las anteriores";
 answers[47] = choices[47][3];
 units[47] = "71";
 comments[47] = "Id Pregunta: 5677. ";


//  Id pregunta: 5731 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l de los siguientes no es un tipo de workflow?";
 choices[48]= new Array();
 choices[48][0] = "Workflow de administraci&oacute;n";
 choices[48][1] = "Workflow de colaboraci&oacute;n";
 choices[48][2] = "Workflow de coordinaci&oacute;n";
 choices[48][3] = "Workflow de producci&oacute;n";
 answers[48] = choices[48][2];
 units[48] = "71";
 comments[48] = "Id Pregunta: 5731. ";


//  Id pregunta: 5734 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  &iquest;Cu&aacute;ntos interfaces tiene el modelo de referencia de workflow de WfMC?";
 choices[49]= new Array();
 choices[49][0] = "1";
 choices[49][1] = "3";
 choices[49][2] = "5";
 choices[49][3] = "7";
 answers[49] = choices[49][2];
 units[49] = "71";
 comments[49] = "Id Pregunta: 5734. ";


//  Id pregunta: 5779 AÃ±o de creación de pregunta: 2009-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l de los siguientes apartados NO es un grupo clave de la biblioteca de clases base en .NET?";
 choices[50]= new Array();
 choices[50][0] = "Windows Presentation Foundation";
 choices[50][1] = "ASP.NET";
 choices[50][2] = "ADO.NET";
 choices[50][3] = "ACY.NET";
 answers[50] = choices[50][3];
 units[50] = "59";
 comments[50] = "Id Pregunta: 5779. MAP 2008 A1";


//  Id pregunta: 5782 AÃ±o de creación de pregunta: 2009-01-01
 questions[51]= "52)  &iquest;Cu&aacute;l de los siguientes objetos no forma parte del proveedor de datos del modelo de objetos ADO.NET?";
 choices[51]= new Array();
 choices[51][0] = "Connection.";
 choices[51][1] = "Command.";
 choices[51][2] = "DataAdapter.";
 choices[51][3] = "DataSet.";
 answers[51] = choices[51][3];
 units[51] = "59";
 comments[51] = "Id Pregunta: 5782. MAP 2008 A2";


//  Id pregunta: 5783 AÃ±o de creación de pregunta: 2009-01-01
 questions[52]= "53)  De las siguientes cuestiones de la arquitectura .NET indique cu&aacute;l es FALSA.";
 choices[52]= new Array();
 choices[52][0] = "Las clases ASP.NET soportan el desarrollo de aplicaciones web y de servicios web XML.";
 choices[52][1] = "Las clases ADO.NET permiten a los desarrolladores interaccionar con los datos, como si fueran XML, a trav&eacute;s de las interfaces de OLE DB, ODBC y SQL Server";
 choices[52][2] = "CLR (Common Language runtime) se encarga de realizar la compilaci&oacute;n del c&oacute;digo fuente al Lenguaje Intermedio independiente de la platafoma.";
 choices[52][3] = "En la arquitectura . NET se permite la utilizaci&oacute;n de varios lenguajes de programaci&oacute;n.";
 answers[52] = choices[52][2];
 units[52] = "59";
 comments[52] = "Id Pregunta: 5783. MAP 2008 A2";


//  Id pregunta: 5892 AÃ±o de creación de pregunta: 2009-01-01
 questions[53]= "54)  &iquest;Qu&eacute; es JNDI?";
 choices[53]= new Array();
 choices[53][0] = "Un API de Java para acceder a servicios de nombre y directorio";
 choices[53][1] = "Un API de Java para invocar m&eacute;todos escritos en otros lenguajes";
 choices[53][2] = "Un API de Java para crear interfaces gr&aacute;ficas de usuario";
 choices[53][3] = "Ninguna de las anteriores";
 answers[53] = choices[53][0];
 units[53] = "60";
 comments[53] = "Id Pregunta: 5892. NULL";


//  Id pregunta: 6182 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  Entre las funciones de BPEL no se encuentra:";
 choices[54]= new Array();
 choices[54][0] = "Definir una interpretaci&oacute;n gr&aacute;fica de procesos.";
 choices[54][1] = "Definir procesos de negocio.";
 choices[54][2] = "Construir sobre servicios Web operaciones que participan en procedimientos empresariales.";
 choices[54][3] = "Orquestar servicios Web.";
 answers[54] = choices[54][0];
 units[54] = "71";
 comments[54] = "Id Pregunta: 6182. ";


//  Id pregunta: 6234 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  En el framwork .NET, la herramienta de desarrollo compila el c&oacute;digo fuente de cualquiera de los lenguajes soportados por .NET a un c&oacute;digo intermedio, inicialmente conocido como MSIL y actualmente llamado:";
 choices[55]= new Array();
 choices[55][0] = "CIL";
 choices[55][1] = "CLI";
 choices[55][2] = "JIT";
 choices[55][3] = "CLR";
 answers[55] = choices[55][0];
 units[55] = "59,115";
 comments[55] = "Id Pregunta: 6234. ";


//  Id pregunta: 6318 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  Si decimos que las filas de una tabla est&aacute;n ordenadas en alguna secuencia&nbsp;f&iacute;sica, independiente de cualquier ordenamiento que pueda imponerse a la tabla mediante &iacute;ndices, estamos refiri&eacute;ndonos a un sistema de base de datos:";
 choices[56]= new Array();
 choices[56][0] = "Orientado a objetos";
 choices[56][1] = "Relacional";
 choices[56][2] = "De lista invertida";
 choices[56][3] = "Jer&aacute;rquica";
 answers[56] = choices[56][2];
 units[56] = "58";
 comments[56] = "Id Pregunta: 6318. Un ejemplo de BD de lista invertida es ADABAS";


//  Id pregunta: 6324 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  La cl&aacute;usula INSERT para inserci&oacute;n de datos";
 choices[57]= new Array();
 choices[57][0] = "Tan s&oacute;lo permite la inserci&oacute;n de una tupla cada vez.";
 choices[57][1] = "Puede permitir la inserci&oacute;n de m&aacute;s de una tupla al mismo tiempo.";
 choices[57][2] = "No permite insertar valores nulos.";
 choices[57][3] = "Obliga a que la inserci&oacute;n de los valores sea en el orden en que se cre&oacute; la tabla.";
 answers[57] = choices[57][1];
 units[57] = "58";
 comments[57] = "Id Pregunta: 6324. ";


//  Id pregunta: 6331 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  Las consultas de data minig se realizan:";
 choices[58]= new Array();
 choices[58][0] = "Sobre las bases de datos de la organizaci&oacute;n.";
 choices[58][1] = "Sobre las bases de datos cuyos datos se han obtenido de las bases de datos operacionales de la organizaci&oacute;n.";
 choices[58][2] = "Sobre cualquier tipo de dato sin necesidad de un preproceso previo.";
 choices[58][3] = "No se realizan sobre bases de datos.";
 answers[58] = choices[58][1];
 units[58] = "68";
 comments[58] = "Id Pregunta: 6331. ";


//  Id pregunta: 6333 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  A la hora de aplicar m&eacute;todos de data mining:";
 choices[59]= new Array();
 choices[59][0] = "Lo &uacute;nico importante es que se disponga de muchos datos.";
 choices[59][1] = "Debe disponerse de muchos datos residentes en una base de datos relacional.";
 choices[59][2] = "Lo m&aacute;s importante es disponer de una buena herramienta comercial.";
 choices[59][3] = "Las bases de datos deben haberse integrado en un Data Warehouse para que los datos sean coherentes.";
 answers[59] = choices[59][3];
 units[59] = "68";
 comments[59] = "Id Pregunta: 6333. ";


//  Id pregunta: 6337 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  Para poder realizar consultas de OLAP a distintos niveles de generalizaci&oacute;n es conveniente:";
 choices[60]= new Array();
 choices[60][0] = "Haber definido en el dise&ntilde;o multidimensional jerarqu&iacute;as.";
 choices[60][1] = "No se pueden realizar consultas de OLAP a distintos niveles de generalizaci&oacute;n.";
 choices[60][2] = "Que se disponga del operador GENERALIZATION en el gestor.";
 choices[60][3] = "Si no se dispone del operador de GENERATE no se pueden realizar este tipo de consultas.";
 answers[60] = choices[60][0];
 units[60] = "68";
 comments[60] = "Id Pregunta: 6337. ";


//  Id pregunta: 6478 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  Durante la creaci&oacute;n de una base de datos Oracle se generan autom&aacute;ticamente dos usuarios. Estas dos cuentas son:";
 choices[61]= new Array();
 choices[61][0] = "SYS Y DBA";
 choices[61][1] = "SYS Y SYSTEM";
 choices[61][2] = "SYSTEM Y DBA";
 choices[61][3] = "MANAGER Y DBA";
 answers[61] = choices[61][1];
 units[61] = "57";
 comments[61] = "Id Pregunta: 6478. Castilla La Mancha 2009";


//  Id pregunta: 7296 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  Un proveedor de SW para miner&iacute;a de datos es:";
 choices[62]= new Array();
 choices[62][0] = "SAS.";
 choices[62][1] = "SPSS.";
 choices[62][2] = "A y B son correctas.";
 choices[62][3] = "A y B son incorrectas.";
 answers[62] = choices[62][2];
 units[62] = "68";
 comments[62] = "Id Pregunta: 7296. NULL";


//  Id pregunta: 7316 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  Cu&aacute;l de las siguientes no es una tecnolog&iacute;a de acceso a datos de Microsoft:";
 choices[63]= new Array();
 choices[63][0] = "ADO.NET";
 choices[63][1] = "OLEDB";
 choices[63][2] = "DEA";
 choices[63][3] = "DAO";
 answers[63] = choices[63][2];
 units[63] = "59";
 comments[63] = "Id Pregunta: 7316. NULL";


//  Id pregunta: 7319 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  &iquest;Qu&eacute; significan las siglas ASP de la tecnolog&iacute;a ASP.NET?";
 choices[64]= new Array();
 choices[64][0] = "Active Server Pages";
 choices[64][1] = "Active Side Pages";
 choices[64][2] = "Archive Server Pages";
 choices[64][3] = "Archive Side Pages";
 answers[64] = choices[64][0];
 units[64] = "59";
 comments[64] = "Id Pregunta: 7319. NULL";


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


//  Id pregunta: 8470 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  La regla 2 de Codd es la del:";
 choices[66]= new Array();
 choices[66][0] = "Tratamiento sistem&aacute;tico de valores nulos";
 choices[66][1] = "Acceso garantizado";
 choices[66][2] = "Actualizaci&oacute;n de vistas";
 choices[66][3] = "Integridad referencial";
 answers[66] = choices[66][1];
 units[66] = "57,58";
 comments[66] = "Id Pregunta: 8470. Analista Ayto. Madrid 2010";


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


//  Id pregunta: 8639 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  Si tenemos las dependencias funcionales (A, B) -&gt; C, B -&gt; D y la siguiente relaci&oacute;n (A, B, C, D) donde (A, B) es la clave candidata. &iquest;Cu&aacute;l seria el resultado de aplicar la 2&ordf; forma normal?";
 choices[68]= new Array();
 choices[68][0] = "(A, B, C), (A, B, D).";
 choices[68][1] = "(A, B, C), (B, D).";
 choices[68][2] = "(A, B, C),  (A, D).";
 choices[68][3] = "Ya est&aacute; en 2FN.";
 answers[68] = choices[68][1];
 units[68] = "57, 58";
 comments[68] = "Id Pregunta: 8639. Examen TIC A2 2010 interna";


//  Id pregunta: 8643 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  &iquest;Cu&aacute;l de las siguientes estructuras de datos requiere m&aacute;s capacidad de almacenamiento de informaci&oacute;n?";
 choices[69]= new Array();
 choices[69][0] = "&Aacute;rbol Binario";
 choices[69][1] = "Lista.";
 choices[69][2] = "Lista enlazada.";
 choices[69][3] = "&Aacute;rbol-B";
 answers[69] = choices[69][3];
 units[69] = "57";
 comments[69] = "Id Pregunta: 8643. Examen TIC A2 2010 interna";


//  Id pregunta: 8783 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  &iquest;Cu&aacute;l de las siguientes sentencias pertenece al lenguaje de definici&oacute;n de datos (LDD) de SQL?";
 choices[70]= new Array();
 choices[70][0] = "ROLLBACK";
 choices[70][1] = "UPDATE";
 choices[70][2] = "GRANT";
 choices[70][3] = "TRUNCATE";
 answers[70] = choices[70][3];
 units[70] = "57, 58";
 comments[70] = "Id Pregunta: 8783. Examen UPM A2 2011";


//  Id pregunta: 8798 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  &iquest;Para qu&eacute; se usa el componente ASP.NET?";
 choices[71]= new Array();
 choices[71][0] = "Para construir aplicaciones y servicios Web";
 choices[71][1] = "Para conectar las aplicaciones a las bases de datos";
 choices[71][2] = "Para construir la interface del usuario";
 choices[71][3] = "Para conectar los programas";
 answers[71] = choices[71][0];
 units[71] = "59, 115";
 comments[71] = "Id Pregunta: 8798. Examen UPM A2 2011";


//  Id pregunta: 8812 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  Las extensiones del Data Mining son:";
 choices[72]= new Array();
 choices[72][0] = "Web Mining y Text Mining.";
 choices[72][1] = "Web Mining, Text Mining e Hipertext Mining.";
 choices[72][2] = "Text Mining e Hipertext Mining.";
 choices[72][3] = "Web Mining e Hipertext Mining.";
 answers[72] = choices[72][0];
 units[72] = "68";
 comments[72] = "Id Pregunta: 8812. Examen UPM A2 2011";


//  Id pregunta: 8867 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  En el contexto de Almac&eacute;n de datos (Data Warehouse) a los subconjuntos de datos para &aacute;reas especificas se le llama:";
 choices[73]= new Array();
 choices[73][0] = "Metadata.";
 choices[73][1] = "Data Marts.";
 choices[73][2] = "Data Ware.";
 choices[73][3] = "Data Store.";
 answers[73] = choices[73][1];
 units[73] = "68";
 comments[73] = "Id Pregunta: 8867. Analista Ayto. Madrid 2010";


//  Id pregunta: 8878 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  La cl&aacute;usula HAVING de SQL:";
 choices[74]= new Array();
 choices[74][0] = "Establece un filtro para seleccionar las filas que se usar&aacute;n en la consulta.";
 choices[74][1] = "Precisa de la presencia de la cl&aacute;usula WHERE en la sentencia.";
 choices[74][2] = "Establece un filtro que se aplica a las tablas agrupadas.";
 choices[74][3] = "Establece una condici&oacute;n que deben cumplir las filas.";
 answers[74] = choices[74][2];
 units[74] = "57, 58";
 comments[74] = "Id Pregunta: 8878. Examen UPM A2 2011";


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


//  Id pregunta: 8881 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  ODBC son las siglas de:";
 choices[76]= new Array();
 choices[76][0] = "Open DataBase Consortium";
 choices[76][1] = "Open Data Business Connectivity";
 choices[76][2] = "Open DataBase Connectivity";
 choices[76][3] = "Object DataBase Consortium";
 answers[76] = choices[76][2];
 units[76] = "57, 58";
 comments[76] = "Id Pregunta: 8881. Examen UPM A2 2011";


//  Id pregunta: 8904 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  Un applet de Java de una p&aacute;gina Web &iquest;d&oacute;nde se ejecuta?:";
 choices[77]= new Array();
 choices[77][0] = "En el navegador del cliente.";
 choices[77][1] = "En el servidor Web.";
 choices[77][2] = "En el proxy.";
 choices[77][3] = "En el servidor de aplicaciones";
 answers[77] = choices[77][0];
 units[77] = "60";
 comments[77] = "Id Pregunta: 8904. Operador Ayto. Madrid 2010";


//  Id pregunta: 9594 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  En una arquitectura web en .NET, indique cu&aacute;l es la opci&oacute;n correcta que define una Biblioteca de Clases Base (BCB):";
 choices[78]= new Array();
 choices[78][0] = "La Biblioteca de Clases Base es una API de alto nivel para permitir accedera los servicios que ofrece el CLR (Common Language Runtime) a trav&eacute;s de objetos en una jerarqu&iacute;a denominada espacio de nombres.";
 choices[78][1] = "La Biblioteca de Clases Base es una API de bajo nivel para permitir accedera los datos que ofrece el ASP.NET a trav&eacute;s de objetos en una jerarqu&iacute;a denominada espacio de nombres";
 choices[78][2] = "La Biblioteca de Clases Base es un conjunto de librer&iacute;as que permiten realizar las operaciones de acceso a datos.";
 choices[78][3] = "La Biblioteca de Clases Base es un conjunto de clases, interfaces y tipos valor que son la base para la compilaci&oacute;n del c&oacute;digo fuente a un c&oacute;digo intermedio denominado CIL (Common Intermediate Language).";
 answers[78] = choices[78][0];
 units[78] = "59";
 comments[78] = "Id Pregunta: 9594. Xunta Libre 2011";


//  Id pregunta: 9752 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  Existen distintos tipos de algoritmos que se aplican en DataMining. &iquest;A qu&eacute; categor&iacute;a pertenece el algoritmo de Bayes Naive?";
 choices[79]= new Array();
 choices[79][0] = "Algoritmos de clasificaci&oacute;n.";
 choices[79][1] = "Algoritmos de regresi&oacute;n.";
 choices[79][2] = "Algoritmos de segmentaci&oacute;n. ";
 choices[79][3] = "Algoritmos de asociaci&oacute;n.";
 answers[79] = choices[79][0];
 units[79] = "68";
 comments[79] = "Id Pregunta: 9752. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9779 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  CODASYL, modelo de Sistemas Gestores de Bases de datos en red, es acr&oacute;nimo de:";
 choices[80]= new Array();
 choices[80][0] = "Conference on Data Systems Languages. ";
 choices[80][1] = "Concurrent Database Systems Languages. ";
 choices[80][2] = "Coherent Data Symmetric Location. ";
 choices[80][3] = "CODe And Systematic Language. ";
 answers[80] = choices[80][0];
 units[80] = "57";
 comments[80] = "Id Pregunta: 9779. Examen TIC A2 2013";


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


//  Id pregunta: 9923 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  En una transacci&oacute;n en un Sistema de Gesti&oacute;n de Bases de Datos (SGBD), &iquest;qu&eacute; se entiende por el punto de integridad?";
 choices[82]= new Array();
 choices[82][0] = "El momento despu&eacute;s en el que se inicia la transacci&oacute;n.";
 choices[82][1] = "El estado de la base de datos en el momento en que se inicia la transacci&oacute;n.";
 choices[82][2] = "Hacer un rollback en el caso de que haya un problema antes de completar la transacci&oacute;n.";
 choices[82][3] = "El retorno con la confirmaci&oacute;n de que la transacci&oacute;n se ha completado con &eacute;xito.";
 answers[82] = choices[82][1];
 units[82] = "57";
 comments[82] = "Id Pregunta: 9923. TIC A2, Examen 2013";


//  Id pregunta: 9973 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  Indique cu&aacute;l de los siguientes elementos NO se asocia a un sistema datawarehouse: ";
 choices[83]= new Array();
 choices[83][0] = "Un motor de transacciones.";
 choices[83][1] = "Las herramientas de Extracci&oacute;n, Transformaci&oacute;n y Carga de datos.";
 choices[83][2] = "Las herramientas de explotaci&oacute;n anal&iacute;tica de la informaci&oacute;n.";
 choices[83][3] = "La base de datos multidimensional";
 answers[83] = choices[83][0];
 units[83] = "68,71";
 comments[83] = "Id Pregunta: 9973. Examen TICA1, Xunta de GaliciA, 2011";


//  Id pregunta: 9983 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  No es cierto sobre la tecnolog&iacute;a de p&aacute;ginas web de Microsoft (ASP y ASP.Net):";
 choices[84]= new Array();
 choices[84][0] = "Una p&aacute;gina ASP puede escribirse con Java Script";
 choices[84][1] = "ASP se ejecuta del lado del servidor bajo IIS o motores PHT compatibles con ASP";
 choices[84][2] = "ASP.NET es una tecnolog&iacute;a orientada o objetos que se ejecuta del lado del servidor";
 choices[84][3] = "Una p&aacute;gina ASP puede escribirse con Visual Basic Script";
 answers[84] = choices[84][1];
 units[84] = "59,115";
 comments[84] = "Id Pregunta: 9983. Examen T&eacute;cnico especialista inform&aacute;tica, Servicio Salud C&aacute;ntabro, 2011";


//  Id pregunta: 10005 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Microsoft ActiveX Data Objects de la plataforma .NET";
 choices[85]= new Array();
 choices[85][0] = "permite trabajar desconectado del origen de datos.";
 choices[85][1] = "no se integra con XML.";
 choices[85][2] = "es el precursor de RDO ( Remote Data Objects).";
 choices[85][3] = "utiliza una forma secuencial de navegaci&oacute;n para acceder a las filas de una tabla.";
 answers[85] = choices[85][0];
 units[85] = "59, 114";
 comments[85] = "Id Pregunta: 10005. ";


//  Id pregunta: 10014 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  El t&eacute;rmino anglosaj&oacute;n &quot;ACID&quot; relacionado con una transacci&oacute;n de base de datos se corresponde con las propiedades:";
 choices[86]= new Array();
 choices[86][0] = "Autentication, Consistency, Integrity, Durability.";
 choices[86][1] = "Atomicity, Confidentiality, Identification, Durability.";
 choices[86][2] = "Atomicity, Consistency, Isolation, Durability.";
 choices[86][3] = "Availability, Consistency, Isolation, Durability.";
 answers[86] = choices[86][2];
 units[86] = "57";
 comments[86] = "Id Pregunta: 10014. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10170 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  &iquest;En qu&eacute; escenarios puede ser &uacute;til una vista materializada de Oracle?";
 choices[87]= new Array();
 choices[87][0] = "Funcionamiento de aplicaciones sin conexi&oacute;n";
 choices[87][1] = "Reducir tr&aacute;fico de red y desplazar carga soportada por un servidor de base de datos corporativo hacia servidores de bases de datos en delegaciones";
 choices[87][2] = "Replicar informaci&oacute;n restringi&eacute;ndola al &aacute;rea geogr&aacute;fica de inter&eacute;s";
 choices[87][3] = "Todas las anteriores";
 answers[87] = choices[87][3];
 units[87] = "58";
 comments[87] = "Id Pregunta: 10170. ";


//  Id pregunta: 10173 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  Los distintos niveles de aislamiento permiten evitar problemas de consistencia o p&eacute;rdida de datos derivados de la ejecuci&oacute;n concurrente de transacciones.";
 choices[88]= new Array();
 choices[88][0] = "Una Lectura No Repetible se produce cuando una transacci&oacute;n lee datos todav&iacute;a no confirmados, y que pueden ser finalmente revertidos por la transacci&oacute;n que hizo el cambio";
 choices[88][1] = "Evitar el problema de concurrencia denominado &quot;Lectura fantasma&quot; requiere aplicar como nivel de aislamiento SERIALIZABLE";
 choices[88][2] = "Con el nivel de aislamiento denominado &quot;READ COMMITTED&quot; pueden producirse problemas de Lectura sucia y Lectura Fantasma";
 choices[88][3] = "Todas las anteriores";
 answers[88] = choices[88][1];
 units[88] = "57";
 comments[88] = "Id Pregunta: 10173. ";


//  Id pregunta: 10284 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  Indique qu&eacute; soluci&oacute;n de las siguientes NO est&aacute; relacionada con los Sistemas Gestores de Base de Datos (SGBD):";
 choices[89]= new Array();
 choices[89][0] = "MongoDB";
 choices[89][1] = "MariaDB";
 choices[89][2] = "HeidiSQL";
 choices[89][3] = "MarcoDB";
 answers[89] = choices[89][3];
 units[89] = "57";
 comments[89] = "Id Pregunta: 10284. TIC A2, libre, examen 2013";


//  Id pregunta: 10285 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  RMAN es:";
 choices[90]= new Array();
 choices[90][0] = "Una especificaci&oacute;n de monitorizaci&oacute;n remota de IETF.";
 choices[90][1] = "Una invocaci&oacute;n de m&eacute;todos remotos utilizada en Java.";
 choices[90][2] = "Una herramienta de Oracle que permite hacer backups online de bases de datos.";
 choices[90][3] = "Una herramienta de IBM que permite realizar administraci&oacute;n remota de bases de datos.";
 answers[90] = choices[90][2];
 units[90] = "58";
 comments[90] = "Id Pregunta: 10285. TIC A2, libre, examen 2013";


//  Id pregunta: 10620 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Indique la respuesta incorrecta:";
 choices[91]= new Array();
 choices[91][0] = "Java es independiente de la plataforma.";
 choices[91][1] = "El entorno de ejecuci&oacute;n de Java es el responsable de gestionar el ciclo de vida de los objetos.";
 choices[91][2] = "El Global Interpreter Lock (GIL) permite la concurrencia del lenguaje Java.";
 choices[91][3] = "Un programa desarrollado en Java requiere una m&aacute;quina virtual para ejecutarse.";
 answers[91] = choices[91][2];
 units[91] = "60";
 comments[91] = "Id Pregunta: 10620. El GIL es un mecanismo de Python. Java s&iacute; es concurrente.";


//  Id pregunta: 10847 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  La especificaci&oacute;n &ldquo;Java Platform, Enterprise Edition 7 (Java EE 7)&rdquo; se encuentra definida en el JSR (Java Specification Request):";
 choices[92]= new Array();
 choices[92][0] = "JSR 342.";
 choices[92][1] = "JSR 366.";
 choices[92][2] = "JSR 324.";
 choices[92][3] = "JSR 224.";
 answers[92] = choices[92][0];
 units[92] = "60, 116";
 comments[92] = "Id Pregunta: 10847. Examen GSI 2014";


//  Id pregunta: 10849 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Al conjunto de documentos que definen patrones de dise&ntilde;o y pr&aacute;cticas recomendadas en la creaci&oacute;n de aplicaciones utilizando Java Enterprise Edition se denomina:";
 choices[93]= new Array();
 choices[93][0] = "Java BluePrints.";
 choices[93][1] = "Java Specification Request.";
 choices[93][2] = "Java Community Process.";
 choices[93][3] = "Java Pattern Spec.";
 answers[93] = choices[93][0];
 units[93] = "60, 116";
 comments[93] = "Id Pregunta: 10849. Examen GSI 2014";


//  Id pregunta: 11033 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Durante qu&eacute; procesos del desarrollo del Sistema de Informaci&oacute;n se realiza la modelizaci&oacute;n de los datos?";
 choices[94]= new Array();
 choices[94][0] = "Durante el an&aacute;lisis";
 choices[94][1] = "Durante el dise&ntilde;o";
 choices[94][2] = "Durante el an&aacute;lisis y durante el dise&ntilde;o";
 choices[94][3] = "No se utiliza la modelizaci&oacute;n de datos en el proceso de desarrollo del SI";
 answers[94] = choices[94][2];
 units[94] = "57";
 comments[94] = "Id Pregunta: 11033. ";


//  Id pregunta: 11034 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Cu&aacute;l de los siguientes tipos de modelados conceptuales se asocia correctamente a su descripci&oacute;n?";
 choices[95]= new Array();
 choices[95][0] = "a)&nbsp;&nbsp;&nbsp;&nbsp; Modelo de Datos &agrave; Modelo est&aacute;tico";
 choices[95][1] = "Modelo de Objetos &agrave; Modelo funcional";
 choices[95][2] = "Modelo de Procesos &agrave; Modelo din&aacute;mico";
 choices[95][3] = "Modelo de Estados &agrave; Modelo funcional";
 answers[95] = choices[95][0];
 units[95] = "57";
 comments[95] = "Id Pregunta: 11034. ";


//  Id pregunta: 11035 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Cu&aacute;l de las siguientes NO es una regla de Codd?";
 choices[96]= new Array();
 choices[96][0] = "Regla del Acceso Garantizado";
 choices[96][1] = "Regla de Actualizaci&oacute;n de Vistas";
 choices[96][2] = "Independencia L&oacute;gica de Datos";
 choices[96][3] = "Regla de la Subversi&oacute;n";
 answers[96] = choices[96][3];
 units[96] = "58";
 comments[96] = "Id Pregunta: 11035. La Regla 12 es de la No Subversi&oacute;n";


//  Id pregunta: 11137 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Cu&aacute;l de los siguientes es un operador derivado de algebra relacional?";
 choices[97]= new Array();
 choices[97][0] = "Intersecci&oacute;n";
 choices[97][1] = "Uni&oacute;n";
 choices[97][2] = "Proyecci&oacute;n";
 choices[97][3] = "Selecci&oacute;n";
 answers[97] = choices[97][0];
 units[97] = "58";
 comments[97] = "Id Pregunta: 11137. ";


//  Id pregunta: 11218 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Cu&aacute;l de las siguientes respuestas es falsa:";
 choices[98]= new Array();
 choices[98][0] = "Los compiladores nativos eliminan la independencia de la plataforma del c&oacute;digo compilado a cambio de proporcionar un mayor rendimiento.";
 choices[98][1] = "Los compiladores nativos AOT (Ahead-Of-time) compilan a c&oacute;digo m&aacute;quina nativo antes de la ejecuci&oacute;n de la aplicaci&oacute;n.";
 choices[98][2] = "Los compiladores JIT (Just in Time) compilan durante la ejecuci&oacute;n.";
 choices[98][3] = "Todas son verdaderas.";
 answers[98] = choices[98][3];
 units[98] = "60";
 comments[98] = "Id Pregunta: 11218. ";


//  Id pregunta: 11222 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  La tecnolog&iacute;a LINQ en el Framework .NET:";
 choices[99]= new Array();
 choices[99][0] = "Es el acr&oacute;nimo&nbsp;de Language Integrated Query.";
 choices[99][1] = "Permite realizar consultas a distintas fuentes de datos.";
 choices[99][2] = "No es compatible con ADO.NET Entity Framework.";
 choices[99][3] = "A) y B) son correctas.";
 answers[99] = choices[99][0];
 units[99] = "59";
 comments[99] = "Id Pregunta: 11222. ";


