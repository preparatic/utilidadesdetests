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

//  Id pregunta: 728 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  En una base de datos las vistas";
 choices[0]= new Array();
 choices[0][0] = "Definen la estructura y organizaci&oacute;n de los datos";
 choices[0][1] = "Permiten restringir el acceso, permitiendo que diferentes usuarios s&oacute;lo vean ciertas filas o ciertas columnas de una tabla";
 choices[0][2] = "Se crean autom&aacute;ticamente cuando una consulta se realiza m&aacute;s de una vez en la misma sesi&oacute;n";
 choices[0][3] = "S&oacute;lo pueden ser creadas por el usuario propietario del esquema";
 answers[0] = choices[0][1];
 units[0] = "57";
 comments[0] = "Id Pregunta: 728. Examen TIC MAP B 2004";


//  Id pregunta: 732 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  En un sistema de informaci&oacute;n de una universidad, en el que se almacenan las asignaturas en las que se matriculan los alumnos, &iquest;cu&aacute;l ser&iacute;a la mejor manera de almacenar las asignaturas de las matr&iacute;culas en la base de datos relacional atendiendo a criterios";
 choices[1]= new Array();
 choices[1][0] = "En la tabla ALUMNOS; con un campo para cada asignatura";
 choices[1][1] = "En la tabla MATR&Iacute;CULA, con un campo asignaturas, en el que se almacenar&iacute;an, delimitadas por separadores, las asignaturas";
 choices[1][2] = "En la tabla ASIGNATURAS de MATR&Iacute;CULA, que tendr&iacute;a tantos registros como asignaturas tenga la matr&iacute;cula. Cada registro constar&iacute;a del identificador de la matr&iacute;cula y el identificador de la asignatura";
 choices[1][3] = "En le tabla ASIGNATURAS de MATR&Iacute;CULA, que tendr&iacute;a un registro por matr&iacute;cula, con tantos campos como asignaturas. El n&uacute;mero m&aacute;ximo de asignaturas depender&iacute;a de la universidad";
 answers[1] = choices[1][2];
 units[1] = "56,57";
 comments[1] = "Id Pregunta: 732. Examen TIC MAP B 2004";


//  Id pregunta: 742 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  Entre las caracter&iacute;sticas de un Data Warehouse se encuentra que es un sistema:";
 choices[2]= new Array();
 choices[2][0] = "Independiente del tiempo.";
 choices[2][1] = "Integrado.";
 choices[2][2] = "Vol&aacute;til.";
 choices[2][3] = "Ninguna de las anteriores.";
 answers[2] = choices[2][1];
 units[2] = "68";
 comments[2] = "Id Pregunta: 742. Similar a examen TIC SS A 2003";


//  Id pregunta: 772 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  Qu&eacute; significan las siglas JNI";
 choices[3]= new Array();
 choices[3][0] = "Interfaz para llamar m&eacute;todos nativos ";
 choices[3][1] = "Sistema de directorio";
 choices[3][2] = "Sistema para datamining";
 choices[3][3] = "ninguna de las anteriores";
 answers[3] = choices[3][0];
 units[3] = "60";
 comments[3] = "Id Pregunta: 772. NULL";


//  Id pregunta: 808 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  A la vista de la tabla siguiente: VENTAS (COD_PIEZA, COD_ALMACEN, CANTIDAD, FECHA, DIRECCION_ALMACEN), donde la clave principal es  COD_PIEZA y COD_ALMACEN, podemos decir que:";
 choices[4]= new Array();
 choices[4][0] = "Cumple con la segunda forma normal";
 choices[4][1] = "Cumple con la segunda pero no con la tercera forma normal";
 choices[4][2] = "Cumple hasta la tercera forma normal pero no con la cuarta formal";
 choices[4][3] = "No cumple la segunda forma normal";
 answers[4] = choices[4][3];
 units[4] = "58";
 comments[4] = "Id Pregunta: 808. ";


//  Id pregunta: 834 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta respecto a los procedimientos almacenados en los sistemas de gesti&oacute;n de bases de datos relacionales?:";
 choices[5]= new Array();
 choices[5][0] = "Es un conjunto de instrucciones y l&oacute;gica de procedimiento de SQL compilado, verificado y almacenado en base de datos";
 choices[5][1] = "Instrucciones SQL embebidas en el c&oacute;digo de los programas y convertidas en un plan de acceso en el tiempo de preparaci&oacute;n del programa";
 choices[5][2] = "Instrucciones SQL embebidas en el c&oacute;digo de los programas y convertidas en un plan de acceso en el tiempo de ejecuci&oacute;n del programa";
 choices[5][3] = "Los procedimientos almacenados no admiten par&aacute;metros de entrada";
 answers[5] = choices[5][0];
 units[5] = "57";
 comments[5] = "Id Pregunta: 834. ";


//  Id pregunta: 835 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta sobre el &aacute;lgebra relacional?:";
 choices[6]= new Array();
 choices[6][0] = "El &aacute;lgebra relacional es un lenguaje procedimental";
 choices[6][1] = "Los operadores de selecci&oacute;n, proyecci&oacute;n, uni&oacute;n y diferencia forman un conjunto relacionalmente completo";
 choices[6][2] = "Todos los operadores de consulta son derivables de los operadores fundamentales";
 choices[6][3] = "El &lsquo;join&rsquo; es un operador de compuesto de selecci&oacute;n y proyecci&oacute;n";
 answers[6] = choices[6][0];
 units[6] = "57";
 comments[6] = "Id Pregunta: 835. ";


//  Id pregunta: 836 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta sobre el lenguaje SQL?:";
 choices[7]= new Array();
 choices[7][0] = "El SQL es un lenguaje de definici&oacute;n y manipulaci&oacute;n de datos";
 choices[7][1] = "Si una transacci&oacute;n finaliza con una sentencia COMMIT, los cambios son cancelados";
 choices[7][2] = "El SQL es un lenguaje est&aacute;ndar seg&uacute;n la norma ISO 9085 de 1987";
 choices[7][3] = "El SQL es un lenguaje est&aacute;ndar seg&uacute;n la norma ISO 9075 de 1987";
 answers[7] = choices[7][3];
 units[7] = "58";
 comments[7] = "Id Pregunta: 836. NULL";


//  Id pregunta: 952 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Como podr&iacute;a hacer que un usuario de una base de datos ANSI SQL solo pudiera tener acceso a dos columnas de cada fila de una tabla:";
 choices[8]= new Array();
 choices[8][0] = "Utilizando la sentencia GRANT para conceder derechos al usuario sobre esas dos filas";
 choices[8][1] = "Creando una vista al efecto con solo esas dos columnas";
 choices[8][2] = "Utilizando la sentencia ALTER TABLE";
 choices[8][3] = "A y B son ciertas";
 answers[8] = choices[8][1];
 units[8] = "58";
 comments[8] = "Id Pregunta: 952. ";


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


//  Id pregunta: 1003 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  El CLR de Microsoft.net es:";
 choices[10]= new Array();
 choices[10][0] = "Una librer&iacute;a para acceso a base de datos heterogeneas, empleando ADO.NET";
 choices[10][1] = "El encargado de compilar a un CIL (Common Intermediate Language)";
 choices[10][2] = "Una nueva estrategia de Microsoft, que defiende &quot;cero fallos&quot; en sus pr&oacute;ximos desarrollos software";
 choices[10][3] = "El mecanismo que se utiliza para enviar las peticiones SOAP a los servidores de aplicaciones remotos";
 answers[10] = choices[10][1];
 units[10] = "59";
 comments[10] = "Id Pregunta: 1003. ";


//  Id pregunta: 1040 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  El objetivo del aprendizaje no supervisado en miner&iacute;a de datos basado en modelado consiste en:";
 choices[11]= new Array();
 choices[11][0] = "Asignar nuevas situaciones a clases a partir de ejemplos existentes.";
 choices[11][1] = "Determinar el comportamiento futuro a partir de datos hist&oacute;ricos.";
 choices[11][2] = "Establecer grupos de parecidos.";
 choices[11][3] = "Descubren patrones y tendencias en los datos.";
 answers[11] = choices[11][3];
 units[11] = "68";
 comments[11] = "Id Pregunta: 1040. ";


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


//  Id pregunta: 1166 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Entre las caracter&iacute;sticas del Data Warehousing se encuentra:";
 choices[13]= new Array();
 choices[13][0] = "Estar orientado a objetos.";
 choices[13][1] = "Los datos de la empresa no son modificados.";
 choices[13][2] = "Estar destinado a ayudar a la toma de decisiones de gesti&oacute;n.";
 choices[13][3] = "Son ciertas las respuestas &lsquo;b&rsquo; y &lsquo;c&rsquo;.";
 answers[13] = choices[13][3];
 units[13] = "68";
 comments[13] = "Id Pregunta: 1166. ";


//  Id pregunta: 1191 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  Indique cu&aacute;l de las siguientes expresiones corresponde a una sentencia correcta de consulta en SQL:";
 choices[14]= new Array();
 choices[14][0] = "SELECT Nombre, Apellido FROM PERSONAS IF Edad &gt;25";
 choices[14][1] = "SHOW Nombre, Apellido.FROM PERSONAS FOR Edad &gt;25";
 choices[14][2] = "SELECT Nombre, Apellido FROM PERSONAS WHERE Edad&gt; 25";
 choices[14][3] = "DISPLAY Nombre, Apellido FROM PERSONAS WHERE Edad &gt;25";
 answers[14] = choices[14][2];
 units[14] = "58";
 comments[14] = "Id Pregunta: 1191. ";


//  Id pregunta: 1252 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  Las actividades clave del data warehousing son:";
 choices[15]= new Array();
 choices[15][0] = "Recepci&oacute;n, almacenamiento, proceso y presentaci&oacute;n.";
 choices[15][1] = "Extracci&oacute;n de datos, almacenamiento de datos, OLAP, miner&iacute;a de datos y acceso a los datos.";
 choices[15][2] = "Carga de datos de prueba, entrenamiento, inferencia del conocimiento, carga de datos reales y c&aacute;lculo de decisiones.";
 choices[15][3] = "Gesti&oacute;n de los medios f&iacute;sicos de almacenamiento, localizaci&oacute;n transparente de los datos y salvaguarda y restauraci&oacute;n autom&aacute;ticas.";
 answers[15] = choices[15][1];
 units[15] = "68";
 comments[15] = "Id Pregunta: 1252. ";


//  Id pregunta: 1267 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  Las vistas de una base de datos:";
 choices[16]= new Array();
 choices[16][0] = "Son tablas virtuales que se definen sobre una o m&aacute;s tablas reales y de las que s&oacute;lo se almacena su definici&oacute;n";
 choices[16][1] = "Son las distintas formas de representaci&oacute;n del modelo conceptual de datos";
 choices[16][2] = "Son las formas en las que se puede almacenar f&iacute;sicamente la informaci&oacute;n, dependiendo de las caracter&iacute;sticas del sistema inform&aacute;tico";
 choices[16][3] = "No se corresponden con nada de lo anterior";
 answers[16] = choices[16][0];
 units[16] = "58";
 comments[16] = "Id Pregunta: 1267. ";


//  Id pregunta: 1281 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Los programas fuente Java:";
 choices[17]= new Array();
 choices[17][0] = "Se compilan siempre";
 choices[17][1] = "Nunca se compilan, excepto para las m&aacute;quinas con procesador Java";
 choices[17][2] = "Siempre se interpretan para que puedan ejecutarse en m&aacute;quinas con diferente procesador, excepto para las m&aacute;quinas con procesador Java en que son ejecutables directamente";
 choices[17][3] = "Hay partes compiladas y partes interpretadas";
 answers[17] = choices[17][0];
 units[17] = "60";
 comments[17] = "Id Pregunta: 1281. Siempre se compilan a Bytecode.";


//  Id pregunta: 1296 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Para borrar una tabla en SQL utilizar&eacute;:";
 choices[18]= new Array();
 choices[18][0] = "DELETE + Nombre de la tabla";
 choices[18][1] = "DROP + Nombre de la tabla";
 choices[18][2] = "REVOKE + Nombre de la tabla";
 choices[18][3] = "B y C son ciertas";
 answers[18] = choices[18][1];
 units[18] = "58";
 comments[18] = "Id Pregunta: 1296. ";


//  Id pregunta: 1310 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  Por clave ajena se entiende:";
 choices[19]= new Array();
 choices[19][0] = "Un conjunto no vacio de atributos de una relaci&oacute;n";
 choices[19][1] = "Un atributo no principal de una relaci&oacute;n que no tiene valor nulo";
 choices[19][2] = "Un descriptor de una relaci&oacute;n, cuyos valores coinciden con los valores de la clave primaria de otra relaci&oacute;n";
 choices[19][3] = "Es el atributo de una relaci&oacute;n que garantiza la integridad de la entidad";
 answers[19] = choices[19][2];
 units[19] = "58";
 comments[19] = "Id Pregunta: 1310. ";


//  Id pregunta: 1336 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Sean dos transacciones A y B:  1&ordm;) A accede al registro 1. 2&ordm;) B accede al registro 2. 3&ordm;) A pide el registro 2, pero debe esperar que B lo libere. 4&ordm;) B pide el registro 1, pero debe esperar que A lo libere.  Entonces:";
 choices[20]= new Array();
 choices[20][0] = "Se produjo alg&uacute;n fallo en el dise&ntilde;o l&oacute;gico de datos, pues &eacute;sto no debe suceder";
 choices[20][1] = "Estamos ante un caso de dise&ntilde;o defectuoso de los procesos A y B";
 choices[20][2] = "Se ha producido una situaci&oacute;n de 'deadlock'";
 choices[20][3] = "El transaccional desbloquear&aacute; los registros bloqueados y permitir&aacute; que las transacciones continuen sin m&aacute;s problemas";
 answers[20] = choices[20][2];
 units[20] = "58";
 comments[20] = "Id Pregunta: 1336. NULL";


//  Id pregunta: 1382 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  Un Data Mart es:";
 choices[21]= new Array();
 choices[21][0] = "Un proveedor de datos de pago v&iacute;a Internet.";
 choices[21][1] = "Una versi&oacute;n reducida del datawarehouse, adscrita a un solo departamento de la organizaci&oacute;n.";
 choices[21][2] = "Una aplicaci&oacute;n para el mantenimiento de la coherencia de los datos.";
 choices[21][3] = "Ninguna de las anteriores respuestas es correcta.";
 answers[21] = choices[21][1];
 units[21] = "68";
 comments[21] = "Id Pregunta: 1382. ";


//  Id pregunta: 1408 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Una base de datos multidimensional:";
 choices[22]= new Array();
 choices[22][0] = "Es igual que una relacional, solo que con sistema de indices inversos duplicados que acelera los accesos en un 40%.";
 choices[22][1] = "Est&aacute; formado por la relaci&oacute;n existente entre tablas de hechos y dimensiones.";
 choices[22][2] = "El t&eacute;rmino se aplica a las bases de datos con tecnolog&iacute;a ISAM, por las m&uacute;ltiples posibilidades que ofrecen.";
 choices[22][3] = "&Uacute;nicamente existe cundo las comunicaciones con el servidor han de ser as&iacute;ncronas en el tiempo.";
 answers[22] = choices[22][1];
 units[22] = "68";
 comments[22] = "Id Pregunta: 1408. ";


//  Id pregunta: 1412 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Una de las caracter&iacute;sticas de un sistema OLTP es: ";
 choices[23]= new Array();
 choices[23][0] = "Homogeneidad de datos almacenados.";
 choices[23][1] = "Alto rendimiento en las operaciones de inserci&oacute;n y actualizaci&oacute;n.";
 choices[23][2] = "Total organizaci&oacute;n.";
 choices[23][3] = "Facilidad para responder a consultas complejas.";
 answers[23] = choices[23][1];
 units[23] = "68";
 comments[23] = "Id Pregunta: 1412. ";


//  Id pregunta: 1462 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Indique cu&aacute;l de las siguientes afirmaciones es v&aacute;lida para el proceso &quot;Two Phase COMMIT&quot;:";
 choices[24]= new Array();
 choices[24][0] = "Es un programa con 2 versiones de trabajo";
 choices[24][1] = "Es una garant&iacute;a de consistencia entre bases de datos";
 choices[24][2] = "Es una funcionalidad para recuperaci&oacute;n de datos";
 choices[24][3] = "Es un equipo tolerante a fallos";
 answers[24] = choices[24][1];
 units[24] = "58";
 comments[24] = "Id Pregunta: 1462. NULL";


//  Id pregunta: 1518 AÃ±o de creación de pregunta: 2003-01-01
 questions[25]= "26)  Al objeto de una base de datos ORACLE que tiene como funci&oacute;n establecer una referencia a datos almacenados en otra base de datos, se denomina:";
 choices[25]= new Array();
 choices[25][0] = "&Iacute;ndice no &uacute;nico.";
 choices[25][1] = "Vista.";
 choices[25][2] = "Database link.";
 choices[25][3] = "Clustered Cable.";
 answers[25] = choices[25][2];
 units[25] = "58";
 comments[25] = "Id Pregunta: 1518. Junta Andaluc&iacute;a";


//  Id pregunta: 1569 AÃ±o de creación de pregunta: 2003-01-01
 questions[26]= "27)  &iquest;Cu&aacute;l no es un modelo de extracci&oacute;n de datos en miner&iacute;a de datos?";
 choices[26]= new Array();
 choices[26][0] = " De verificaci&oacute;n.";
 choices[26][1] = " De descubrimiento.";
 choices[26][2] = "Jer&aacute;rquico.";
 choices[26][3] = "Predictivo.";
 answers[26] = choices[26][2];
 units[26] = "68";
 comments[26] = "Id Pregunta: 1569. ";


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


//  Id pregunta: 1632 AÃ±o de creación de pregunta: 2003-01-01
 questions[28]= "29)  Una de las formas de almacenar las Bases de Datos es la organizaci&oacute;n Hash. &iquest;En qu&eacute; consiste?";
 choices[28]= new Array();
 choices[28][0] = "En la organizaci&oacute;n Hash se accede al registro deseado directamente a trav&eacute;s del &iacute;ndice o clave.";
 choices[28][1] = "Consiste en ir indexando tablas de &iacute;ndices hasta tener un solo bloque mediante sucesivas iteraciones.";
 choices[28][2] = "Consiste en tener una serie de grupos numerados de modo que cuando se va a acceder a un registro conociendo la clave primaria se aplica sobre ella una funci&oacute;n algor&iacute;tmica obteni&eacute;ndose el grupo en el que ha de estar el registro deseado.";
 choices[28][3] = "En la organizaci&oacute;n Hash los registros se almacenan utilizando dos &iacute;ndices, uno primario que se&ntilde;ala los registros de acceso m&aacute;s frecuentes y otro secundario definido con alg&uacute;n criterio.";
 answers[28] = choices[28][2];
 units[28] = "58";
 comments[28] = "Id Pregunta: 1632. NULL";


//  Id pregunta: 1662 AÃ±o de creación de pregunta: 2004-01-01
 questions[29]= "30)  De entre las siguientes maneras de manipular una base de datos SQL, indique la que no es correcta:";
 choices[29]= new Array();
 choices[29][0] = "Interactivamente, convocando directamente las sentencias SQL.";
 choices[29][1] = "Relacionalmente, invocando paralelamente sentencias SQL.";
 choices[29][2] = "Por m&oacute;dulos, agrupando sentencias SQL en m&oacute;dulos.";
 choices[29][3] = "Por medio de SQL embebido";
 answers[29] = choices[29][1];
 units[29] = "58";
 comments[29] = "Id Pregunta: 1662. MAP-B 2003";


//  Id pregunta: 1676 AÃ±o de creación de pregunta: 2004-01-01
 questions[30]= "31)  Indique la afirmaci&oacute;n correcta";
 choices[30]= new Array();
 choices[30][0] = "Una relaci&oacute;n est&aacute; en 4&ordf;FN si no incluye dependencias combinacionales";
 choices[30][1] = "Una relaci&oacute;n est&aacute; en 2&ordf;FN si no incluye grupos repetitivos y sus atributos no primarios tienen una dependencia plena respecto a cada una de las claves y no con partes de estas";
 choices[30][2] = "Una relaci&oacute;n est&aacute; en 1&ordf;FN si incluye alg&uacute;n grupo repetitivo";
 choices[30][3] = "Una relaci&oacute;n est&aacute; en 3&ordf;FN si y solo si est&aacute; en 1&ordf;FN pero no en 2&ordf;FN";
 answers[30] = choices[30][1];
 units[30] = "58";
 comments[30] = "Id Pregunta: 1676. ";


//  Id pregunta: 1677 AÃ±o de creación de pregunta: 2004-01-01
 questions[31]= "32)  &iquest;Qu&eacute; hace el comando SQL update?";
 choices[31]= new Array();
 choices[31][0] = "Modifica la estructura de una tabla agregando o eliminando campos";
 choices[31][1] = "Modifica la estructura de una vista";
 choices[31][2] = "Modifica los valores de los campos de una tabla";
 choices[31][3] = "Modifica la estructura de una tabla cambiando la definici&oacute;n de sus campos";
 answers[31] = choices[31][2];
 units[31] = "58";
 comments[31] = "Id Pregunta: 1677. ";


//  Id pregunta: 1691 AÃ±o de creación de pregunta: 2004-01-01
 questions[32]= "33)  Respecto a las herramientas, t&eacute;cnicas y terminolog&iacute;a OLAP indique cu&aacute;l de las siguientes afirmaciones es falsa.";
 choices[32]= new Array();
 choices[32][0] = "Trata de la s&iacute;ntesis, el an&aacute;lisis y la consolidaci&oacute;n din&aacute;mica de grandes vol&uacute;menes de datos multidimensionales.";
 choices[32][1] = "Las herramientas OLAP m&aacute;s eficientes en tiempo de respuesta trabajan sobre base de datos relacionales.";
 choices[32][2] = "Las bases de datos multidimensionales almacenan los datos de forma parecida a como lo hace una hoja de c&aacute;lculo aunque, a diferencia de &eacute;stas, es com&uacute;n que utilicen m&aacute;s de dos dimensiones.";
 choices[32][3] = "Se puede en establecer una jerarqu&iacute;a de niveles en cada dimensi&oacute;n para representar diversos grados de detalle.";
 answers[32] = choices[32][1];
 units[32] = "68";
 comments[32] = "Id Pregunta: 1691. ";


//  Id pregunta: 1745 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  Cu&aacute;les son las funciones de un SGBD";
 choices[33]= new Array();
 choices[33][0] = "Facilitar la compresi&oacute;n de un problema complejo como es el dise&ntilde;o de una base de datos";
 choices[33][1] = "Proporcionar un DDL (Lenguaje de Definici&oacute;n de Datos) o un DML (Lenguaje de Manipulaci&oacute;n de Datos)";
 choices[33][2] = "Proporcionar soluciones ante problemas de cuota de almacenamiento concurrente";
 choices[33][3] = "Proporcionar un diccionario de datos";
 answers[33] = choices[33][3];
 units[33] = "57";
 comments[33] = "Id Pregunta: 1745. ";


//  Id pregunta: 1746 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  Qu&eacute; tipo de arquitectura propone el comit&eacute; ANSI/X3/SPARC para la normalizaci&oacute;n de los SGBD";
 choices[34]= new Array();
 choices[34][0] = "Arquitectura de dos niveles: estructura global y vistas l&oacute;gicas";
 choices[34][1] = "Arquitectura de tres niveles: nivel interno o f&iacute;sico, conceptual y externo o l&oacute;gico";
 choices[34][2] = "Arquitectura de cuatro niveles: interno, f&iacute;sico, conceptual y l&oacute;gico";
 choices[34][3] = "Arquitectura de un &uacute;nico nivel denominado nivel global";
 answers[34] = choices[34][1];
 units[34] = "57";
 comments[34] = "Id Pregunta: 1746. ";


//  Id pregunta: 1754 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  &iquest;Qu&eacute; es el CLR?";
 choices[35]= new Array();
 choices[35][0] = "Un lenguaje de programaci&oacute;n para .Net";
 choices[35][1] = "El entorno de ejecuci&oacute;n de .Net";
 choices[35][2] = "Una biblioteca de clases de objetos";
 choices[35][3] = "Un motor de bases de datos para dispositivos m&oacute;viles";
 answers[35] = choices[35][1];
 units[35] = "59";
 comments[35] = "Id Pregunta: 1754. ";


//  Id pregunta: 1827 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  La operaci&oacute;n que permite navegar hacia un mayor nivel de agregaci&oacute;n en dimensiones en un Datawarehouse se conoce como:";
 choices[36]= new Array();
 choices[36][0] = "Drill-Down.";
 choices[36][1] = "Roll-Up.";
 choices[36][2] = "Drill-Through.";
 choices[36][3] = "Slice and Dice.";
 answers[36] = choices[36][1];
 units[36] = "68";
 comments[36] = "Id Pregunta: 1827. ";


//  Id pregunta: 1849 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  Un sistema de Workflow seg&uacute;n la WfMC debe incluir necesariamente la funci&oacute;n de:";
 choices[37]= new Array();
 choices[37][0] = "Gesti&oacute;n de notificaciones y colas de trabajo";
 choices[37][1] = "Autorizaciones y asignaci&oacute;n de responsabilidades";
 choices[37][2] = "Facilidades de enrrutamiento";
 choices[37][3] = "Todas las anteriores";
 answers[37] = choices[37][3];
 units[37] = "71";
 comments[37] = "Id Pregunta: 1849. ";


//  Id pregunta: 1923 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa sobre el formato JAR?";
 choices[38]= new Array();
 choices[38][0] = "Utiliza el mismo algoritmo de compresi&oacute;n que los archivos .ZIP";
 choices[38][1] = "Es compatible con los sistemas de distribuci&oacute;n autom&aacute;tica";
 choices[38][2] = "Los ficheros con este formato son independientes de la plataforma";
 choices[38][3] = "Un fichero con este formato debe incluir obligatoriamente las firmas digitales de los fichero que contiene";
 answers[38] = choices[38][3];
 units[38] = "60";
 comments[38] = "Id Pregunta: 1923. NULL";


//  Id pregunta: 2273 AÃ±o de creación de pregunta: 2002-01-01
 questions[39]= "40)  El Diccionario de Datos es utilizado por:";
 choices[39]= new Array();
 choices[39][0] = "El administrador de la base de datos y los programadores";
 choices[39][1] = "Los analistas y los programadores";
 choices[39][2] = "Los usuarios finales de las aplicaciones";
 choices[39][3] = "Los usuarios remotos";
 answers[39] = choices[39][0];
 units[39] = "57,81";
 comments[39] = "Id Pregunta: 2273. ";


//  Id pregunta: 2737 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  &iquest;Cuando decimos que una entidad est&aacute; en 3FN?";
 choices[40]= new Array();
 choices[40][0] = "Si est&aacute; en 2FN y cada atributo que no pertenezca a la clave tiene una dependencia funcional completa de la clave.";
 choices[40][1] = "Si est&aacute; en 2FN y no contiene grupos repetitivos.";
 choices[40][2] = "Si est&aacute; en 2FN y no contiene atributos multivaluados.";
 choices[40][3] = "Si est&aacute; en 2FN y cada atributo que no pertenezca a la clave no depende transitivamente de dicha clave.";
 answers[40] = choices[40][3];
 units[40] = "58";
 comments[40] = "Id Pregunta: 2737. ";


//  Id pregunta: 4281 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  Los sistemas conocidos como OLTP son utilizados para:";
 choices[41]= new Array();
 choices[41][0] = "Hacer consultas complejas sobre distintas Bases de Datos que se han consolidado en una central.";
 choices[41][1] = "Poder realizar informes a la Direcci&oacute;n.";
 choices[41][2] = "Son sistemas t&iacute;picamente utilizados como Sistemas de Informaci&oacute;n Geogr&aacute;fica.";
 choices[41][3] = "Captura de datos a partir de las operaciones diarias de una organizaci&oacute;n.";
 answers[41] = choices[41][3];
 units[41] = "68";
 comments[41] = "Id Pregunta: 4281. ";


//  Id pregunta: 4389 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  En el entorno de base de datos, los &iacute;ndices son de vital importancia en las transacciones de acceso, &iquest;Cu&aacute;l de las siguientes afirmaciones no es correcta?";
 choices[42]= new Array();
 choices[42][0] = "El &iacute;ndice es tambi&eacute;n una tabla almacenada en un disco.";
 choices[42][1] = "Las tablas de &iacute;ndices se actualizan cuando se actualizan las tablas de datos.";
 choices[42][2] = "La actualizaci&oacute;n de las tablas de &iacute;ndices es transparente al usuario.";
 choices[42][3] = "Las actualizaciones de los &iacute;ndices no consumen recursos.";
 answers[42] = choices[42][3];
 units[42] = "58";
 comments[42] = "Id Pregunta: 4389. ";


//  Id pregunta: 4458 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  La cl&aacute;usula select en SQL se corresponde a:";
 choices[43]= new Array();
 choices[43][0] = "La operaci&oacute;n de proyecci&oacute;n en el &aacute;lgebra relacional.";
 choices[43][1] = "La operaci&oacute;n de uni&oacute;n en el &aacute;lgebra relacional.";
 choices[43][2] = "La operaci&oacute;n de evaluaci&oacute;n en el &aacute;lgebra relacional.";
 choices[43][3] = "La operaci&oacute;n de agregaci&oacute;n en el &aacute;lgebra relacional.";
 answers[43] = choices[43][0];
 units[43] = "58";
 comments[43] = "Id Pregunta: 4458. ";


//  Id pregunta: 4498 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  Se dice que una entidad se encuentra en segunda forma normal (2FN);";
 choices[44]= new Array();
 choices[44][0] = "Si no tiene grupos repetitivos, independientemente de que los atributos no primarios tengan o no dependencia funcional completa con cada una de las claves y no con partes de estas.";
 choices[44][1] = "Si tiene grupos repetitivos, independientemente de que los atributos no primarios tengan o no dependencia funcional completa con cada una de las claves y no con partes de estas.";
 choices[44][2] = "Si tiene grupos repetitivos y cualquiera de sus atributos no primarios tienen una dependencia funcional completa con cada una de las claves y no con partes de estas.";
 choices[44][3] = "Si no tiene grupos repetitivos y cualquiera de sus atributos no primarios tienen una dependencia funcional completa con cada una de las claves y no con partes de estas.";
 answers[44] = choices[44][3];
 units[44] = "58";
 comments[44] = "Id Pregunta: 4498. ";


//  Id pregunta: 4723 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  En el directorio activo de Microsoft la definici&oacute;n de todas las definiciones de clases de todos los objetos yatributos del directorio activo se encuentra en el:";
 choices[45]= new Array();
 choices[45][0] = "Schema Naming Context";
 choices[45][1] = " Active Directory Schema MMC";
 choices[45][2] = "Configuration Naming Context";
 choices[45][3] = "Domain Naming Context";
 answers[45] = choices[45][0];
 units[45] = "59,115";
 comments[45] = "Id Pregunta: 4723. Examen 2006 JCYL";


//  Id pregunta: 4998 AÃ±o de creación de pregunta: 2003-01-01
 questions[46]= "47)  Indique cu&aacute;l de las siguientes afirmaciones es incorrecta en relaci&oacute;n con la m&aacute;quina virtual de Java:";
 choices[46]= new Array();
 choices[46][0] = "La implementaci&oacute;n de la m&aacute;quina virtual de Java es independiente de la plataforma sobre la que se ejecute";
 choices[46][1] = "La principal ventaja que aporta es la portabilidad de las aplicaciones escritas en Java entre diferentesplataformas";
 choices[46][2] = "Existen versiones de m&aacute;quina virtual implantadas por hardware";
 choices[46][3] = "El c&oacute;digo que ejecuta la m&aacute;quina virtual se llama &quot;Java Bytecode&quot;";
 answers[46] = choices[46][0];
 units[46] = "60";
 comments[46] = "Id Pregunta: 4998. Examen TIC A 2007";


//  Id pregunta: 5034 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  &iquest;Cu&aacute;l de los siguientes es un componente de la versi&oacute;n 2 del &quot;framework&quot; .NET de Microsoft?";
 choices[47]= new Array();
 choices[47][0] = "Visual Studio";
 choices[47][1] = "CLR (Common Language Runtime)";
 choices[47][2] = "BizTalk";
 choices[47][3] = "SQL Server";
 answers[47] = choices[47][1];
 units[47] = "59";
 comments[47] = "Id Pregunta: 5034. Examen TIC A 2007";


//  Id pregunta: 5076 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l de las siguientes sentencias de SQL es una sentencia DDL?:";
 choices[48]= new Array();
 choices[48][0] = "UPDATE TABLE";
 choices[48][1] = "ALTER TABLE";
 choices[48][2] = "REVOKE ALL";
 choices[48][3] = "ROLLBACK";
 answers[48] = choices[48][1];
 units[48] = "58";
 comments[48] = "Id Pregunta: 5076. Examen TIC A 2007";


//  Id pregunta: 5283 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  En Java la herencia es un mecanismo por el que se pueden crear nuevos objetos definidos en t&eacute;rminos de objetos ya existentes. &iquest;Esta permitida la herencia multiple?";
 choices[49]= new Array();
 choices[49][0] = "Si.";
 choices[49][1] = "No.";
 choices[49][2] = "Si con ciertas restricciones.";
 choices[49][3] = "No con ciertas restricciones.";
 answers[49] = choices[49][1];
 units[49] = "60";
 comments[49] = "Id Pregunta: 5283. NULL";


//  Id pregunta: 5454 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l de las siguientes es una caracter&iacute;stica importante de las bases de datos relacionales y SQL?";
 choices[50]= new Array();
 choices[50][0] = "La independencia de relaciones entre las tablas";
 choices[50][1] = "Elevada velocidad del SQL";
 choices[50][2] = "Potentes entornos de desarrollo";
 choices[50][3] = "F&aacute;ciles de instalar y usar";
 answers[50] = choices[50][0];
 units[50] = "58";
 comments[50] = "Id Pregunta: 5454. Castilla y Le&oacute;n";


//  Id pregunta: 5466 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  Cual de las siguientes afirmaciones no es correcta a la hora de definir una tabla en Oracle";
 choices[51]= new Array();
 choices[51][0] = "S&oacute;lo deben ser num&eacute;ricas aquellas columnas que sean susceptibles de operaciones aritm&eacute;ticas";
 choices[51][1] = "Una &ldquo;clave inteligente&rdquo; o clave compuesta es m&aacute;s eficiente que una clave compuesta por varias columnas";
 choices[51][2] = "Oracle interpreta por defecto todos los objetos en may&uacute;scula a no ser que se escriba su nombre entre comillas dobles.";
 choices[51][3] = "La ordenaci&oacute;n de columnas num&eacute;ricas es diferente de la ordenaci&oacute;n de las columnas alfanum&eacute;ricas";
 answers[51] = choices[51][1];
 units[51] = "58";
 comments[51] = "Id Pregunta: 5466. Castilla y Le&oacute;n";


//  Id pregunta: 5725 AÃ±o de creación de pregunta: 2009-01-01
 questions[52]= "53)  Los SGBD soportan 3 tipos de lenguajes: Lenguaje de Consulta de Datos, Lenguaje de Definici&oacute;n de Datos y Lenguaje de Manipulaci&oacute;n de Datos. Concretamente, el est&aacute;ndar SQL ISO 9075:1987 contempla en su definici&oacute;n:";
 choices[52]= new Array();
 choices[52][0] = "Lenguaje de Consulta de datos.";
 choices[52][1] = "Lenguaje de Consulta y de Manipulaci&oacute;n de datos.";
 choices[52][2] = "Lenguaje de Consulta y de Definici&oacute;n de datos.";
 choices[52][3] = "Lenguaje de Consulta, de Manipulaci&oacute;n y de Definici&oacute;n de datos.";
 answers[52] = choices[52][3];
 units[52] = "58";
 comments[52] = "Id Pregunta: 5725. MAP 2008 A2";


//  Id pregunta: 5726 AÃ±o de creación de pregunta: 2009-01-01
 questions[53]= "54)  Indique la afirmaci&oacute;n correcta. Seg&uacute;n M&eacute;trica v 3, en las Relaciones 1:N se propaga el identificador de la entidad de cardinalidad m&aacute;xima 1 a la que es N, teniendo en cuenta que:";
 choices[53]= new Array();
 choices[53][0] = "Si la relaci&oacute;n es de asociaci&oacute;n, la clave propagada es clave ajena en la tabla a la que se ha propagado.";
 choices[53][1] = "Si la relaci&oacute;n es de asociaci&oacute;n, la clave propagada es la clave primaria en la tabla a la que se ha propagado.";
 choices[53][2] = "Si la relaci&oacute;n es de dependencia, la clave propagada es la clave ajena.";
 choices[53][3] = "Si la relaci&oacute;n es de dependencia la clave propagada es la clave primaria.";
 answers[53] = choices[53][0];
 units[53] = "58";
 comments[53] = "Id Pregunta: 5726. MAP 2008 A2";


//  Id pregunta: 6116 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  En un sistema de base de datos relacional, la regla de integridad de las entidades consiste en que:";
 choices[54]= new Array();
 choices[54][0] = "Una relaci&oacute;n debe tener al menos una clave primaria.";
 choices[54][1] = "Ning&uacute;n componente de la clave primaria de una relaci&oacute;n puede aceptar nulos.";
 choices[54][2] = "La clave primaria de una relaci&oacute;n es la &uacute;nica forma de identificar un&iacute;vocamente a una tupla.";
 choices[54][3] = "Si existen varias claves candidatas, la clave primaria es la que tiene menos campos.";
 answers[54] = choices[54][1];
 units[54] = "58";
 comments[54] = "Id Pregunta: 6116. TIC A 2009";


//  Id pregunta: 6129 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  En la arquitectura Java, &iquest;qu&eacute; se entiende por JSR?";
 choices[55]= new Array();
 choices[55][0] = "Un applet.";
 choices[55][1] = "Es una especificaci&oacute;n en la que se describe una tecnolog&iacute;a, sus partes, las relaciones entre las mismas y los roles de las personas que usar&aacute;n dicha tecnolog&iacute;a.";
 choices[55][2] = "Es una especificaci&oacute;n que describe la manera en que la parte servidora atender&aacute; las peticiones hechas por un applet o un javascript. Es el acr&oacute;nimo de Java Server Request.";
 choices[55][3] = "Un JavaBean.";
 answers[55] = choices[55][1];
 units[55] = "60";
 comments[55] = "Id Pregunta: 6129. TIC A 2009";


//  Id pregunta: 6243 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas acerca de OLAP es correcta?";
 choices[56]= new Array();
 choices[56][0] = "La principal caracter&iacute;stica que potencia a OLAP, es que es lo m&aacute;s r&aacute;pido a la hora de ejecutar sentencias SQL de tipo UPDATE, en contraposici&oacute;n con OLTP que es la mejor opci&oacute;n para operaciones de tipo DELETE.";
 choices[56][1] = "La principal caracter&iacute;stica que potencia a OLAP, es que es lo m&aacute;s r&aacute;pido a la hora de ejecutar sentencias SQL de tipo SELECT, en contraposici&oacute;n con OLTP que es la mejor opci&oacute;n para operaciones de tipo INSERT, UPDATE, DELETE.";
 choices[56][2] = "La principal caracter&iacute;stica que potencia a OLAP, es que es lo m&aacute;s r&aacute;pido a la hora de ejecutar sentencias SQL de tipo DELETE, en contraposici&oacute;n con OLTP que es la mejor opci&oacute;n para operaciones de tipo UPDATE.";
 choices[56][3] = "La principal caracter&iacute;stica que potencia a OLAP, es que es lo m&aacute;s r&aacute;pido a la hora de ejecutar sentencias SQL de tipo DELETE, en contraposici&oacute;n con OLTP que es la mejor opci&oacute;n para operaciones de tipo SELECT, INSERT y UPDATE.";
 answers[56] = choices[56][1];
 units[56] = "68";
 comments[56] = "Id Pregunta: 6243. TICB-2009, bloque desarrollo";


//  Id pregunta: 6319 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  En un modelo relacional, la regla de integridad de las entidades dice :";
 choices[57]= new Array();
 choices[57][0] = "Ning&uacute;n componente de la clave primaria de una relaci&oacute;n base puede aceptar       nulos.";
 choices[57][1] = "La base de datos no debe contener valores de clave ajena sin concordancia.";
 choices[57][2] = "En una clave primaria compuesta, cada valor individual de la clave primaria puede ser nulo aunque no en su totalidad.";
 choices[57][3] = "Ning&uacute;n componente de una clave ajena de una relaci&oacute;n puede aceptar nulos.";
 answers[57] = choices[57][0];
 units[57] = "58";
 comments[57] = "Id Pregunta: 6319. ";


//  Id pregunta: 6332 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  Si los datos contienen valores 'NULL' (valores desconocidos) antes de realizar una consulta de data mining:";
 choices[58]= new Array();
 choices[58][0] = "Debo eliminarlos.";
 choices[58][1] = "S&oacute;lo se eliminan si son pocos. Si son muchos se utiliza alguna t&eacute;cnica para predecir el valor de esos nulos y trabajar con las aproximaciones obtenidas.";
 choices[58][2] = "En la fase de preproceso se les asignar&aacute; un valor por defecto.";
 choices[58][3] = "Se asigna el valor de la media multiplicado por 2.";
 answers[58] = choices[58][1];
 units[58] = "68";
 comments[58] = "Id Pregunta: 6332. ";


//  Id pregunta: 6518 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  El API de Java para llamar a m&eacute;todos escritos en otros lenguajes es:";
 choices[59]= new Array();
 choices[59][0] = "JDI";
 choices[59][1] = "JCI";
 choices[59][2] = "JTEE";
 choices[59][3] = "JNI";
 answers[59] = choices[59][3];
 units[59] = "60";
 comments[59] = "Id Pregunta: 6518. NULL";


//  Id pregunta: 8201 AÃ±o de creación de pregunta: 2011-01-01
 questions[60]= "61)  Indique la afirmaci&oacute;n INCORRECTA acerca de la BCL (Base Class Library) del framework .Net: ";
 choices[60]= new Array();
 choices[60][0] = "Contiene clases para la manipulaci&oacute;n de archivos gr&aacute;ficos. ";
 choices[60][1] = "Se organiza en clases de acceso a datos, de l&oacute;gica de negocio y de presentaci&oacute;n. ";
 choices[60][2] = "No dispone de clases para la gesti&oacute;n de la seguridad. ";
 choices[60][3] = "No depende del lenguaje de programaci&oacute;n utilizado por el desarrollador. ";
 answers[60] = choices[60][2];
 units[60] = "59";
 comments[60] = "Id Pregunta: 8201. Examen TIC A1 2010";


//  Id pregunta: 8353 AÃ±o de creación de pregunta: 2011-01-01
 questions[61]= "62)  Indique cu&aacute;l de las siguientes definiciones se corresponde con Biztalk:";
 choices[61]= new Array();
 choices[61][0] = "Es un servidor que permite gestionar procesos de negocio por medio de adaptadores dise&ntilde;ados al efecto, capacit&aacute;ndolo para operar diferentes tipos de software.";
 choices[61][1] = "Es una libreria de .NET que permite la comunicaci&oacute;n por IRC facilitando la implementaci&oacute;n de chats.";
 choices[61][2] = "Es un servidor web de .NET especialmente adaptado para tecnolog&iacute;as m&oacute;viles";
 choices[61][3] = "Es un componente que pertenece al CLR de .NET y que facilita la ejecuci&oacute;n de la aplicaci&oacute;n.";
 answers[61] = choices[61][0];
 units[61] = "59,115";
 comments[61] = "Id Pregunta: 8353. Examen TIC A2 2010";


//  Id pregunta: 8373 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  &iquest;Cu&aacute;l de los siguientes niveles de aislamiento previene de los problemas de lecturas sucias y lecturas no  repetibles, pero NO evita las lecturas fantasmas?";
 choices[62]= new Array();
 choices[62][0] = "Read Commited (lectura confirmada).";
 choices[62][1] = "Serializable.";
 choices[62][2] = "Read uncornmited (lectura no confirmada),";
 choices[62][3] = "Repeatable read (lectura repetible).";
 answers[62] = choices[62][3];
 units[62] = "57,58";
 comments[62] = "Id Pregunta: 8373. Examen TIC A2 2010";


//  Id pregunta: 8414 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  COBOL es el acr&oacute;nimo de: ";
 choices[63]= new Array();
 choices[63][0] = "COmputer BUsiness-Oriented Language (Lenguaje de Ordenador Orientado a Negocios). ";
 choices[63][1] = "COmmon Business-Oriented Language (Lenguaje Com&uacute;n Orientado a Negocios). ";
 choices[63][2] = "Common Object Business Oriented Language (Lenguaje Com&uacute;n Orientado a Objetos de Negocio). ";
 choices[63][3] = "No es un acr&oacute;nimo.";
 answers[63] = choices[63][1];
 units[63] = "57";
 comments[63] = "Id Pregunta: 8414. Examen TIC A2 2010";


//  Id pregunta: 8519 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  Se&ntilde;ale la respuesta correcta de las siguientes afirmaciones sobre el modelo entidad/relaci&oacute;n extendido:";
 choices[64]= new Array();
 choices[64][0] = "Es un requisito el conocer el SGBD en el que se va a implementar.";
 choices[64][1] = "Es dependiente del entorno f&iacute;sico.";
 choices[64][2] = "Se centra en los datos, independientemente del procesamiento que los transforma";
 choices[64][3] = "Debe proporcionar a los usuarios toda la informaci&oacute;n que necesiten garantizando la eficiencia del proceso.";
 answers[64] = choices[64][2];
 units[64] = "57, 58";
 comments[64] = "Id Pregunta: 8519. Examen TIC A2 2010 interna";


//  Id pregunta: 8603 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  &iquest;Qu&eacute; categor&iacute;a de sistema OLAP est&aacute; basado u orientado a la web?";
 choices[65]= new Array();
 choices[65][0] = "SOLAP.";
 choices[65][1] = "DOLAP.";
 choices[65][2] = "WOLAP.";
 choices[65][3] = "RTOLAP.";
 answers[65] = choices[65][2];
 units[65] = "68";
 comments[65] = "Id Pregunta: 8603. Examen TIC A2 2010 interna";


//  Id pregunta: 8629 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre el modelo entidad/relaci&oacute;n es correcta?";
 choices[66]= new Array();
 choices[66][0] = "En la especializaci&oacute;n un supertipo so descompone en uno o varios subtipos, los cuales heredan todos los atributos y relaciones del supertipo.";
 choices[66][1] = "La generalizaci&oacute;n consiste en relacionar dos tipos de entidades que normalmente son de dominios independientes, pero coyunturalmente se asocian.";
 choices[66][2] = "La agregaci&oacute;n permite abstraer un tipo de entidad de nivel superior (supertipo) a partir de varios tipos de entidad (subtipos).";
 choices[66][3] = "La asociaci&oacute;n consiste en construir un nuevo tipo de entidad como composici&oacute;n de otros.";
 answers[66] = choices[66][0];
 units[66] = "57, 58";
 comments[66] = "Id Pregunta: 8629. Examen TIC A2 2010 interna";


//  Id pregunta: 8637 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  Una relaci&oacute;n muchos a muchos traducida desde un esquema entidad/relaci&oacute;n a un esquema relacional:";
 choices[67]= new Array();
 choices[67][0] = "No tiene claves.";
 choices[67][1] = "Impl&iacute;citamente, contiene una agrupaci&oacute;n de las claves primarias de las entidades relacionadas.";
 choices[67][2] = "No puedo admitir atributos que no pertenezcan a una de las entidades asociadas.";
 choices[67][3] = "Conserva la clave de la entidad fuerte.";
 answers[67] = choices[67][1];
 units[67] = "57, 58";
 comments[67] = "Id Pregunta: 8637. Examen TIC A2 2010 interna";


//  Id pregunta: 8638 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  &iquest;Cu&aacute;l de las siguientes operaciones pertenece al lenguaje de manipulaci&oacute;n de datos en SQL?";
 choices[68]= new Array();
 choices[68][0] = "CREATE";
 choices[68][1] = "ALTER";
 choices[68][2] = "DELETE";
 choices[68][3] = "DROP";
 answers[68] = choices[68][2];
 units[68] = "57, 58";
 comments[68] = "Id Pregunta: 8638. Examen TIC A2 2010 interna";


//  Id pregunta: 8641 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  En la arquitectura ANSI SQL la capacidad do modificar el esquema interno sin tener que alterar el esquema conceptual (o los externos) es lo que se conoce como:";
 choices[69]= new Array();
 choices[69][0] = "Independencia f&iacute;sica.";
 choices[69][1] = "Independencia L&oacute;gica.";
 choices[69][2] = "Integridad de la entidad";
 choices[69][3] = "Integridad referencial.";
 answers[69] = choices[69][0];
 units[69] = "57, 58";
 comments[69] = "Id Pregunta: 8641. Examen TIC A2 2010 interna";


//  Id pregunta: 8881 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  ODBC son las siglas de:";
 choices[70]= new Array();
 choices[70][0] = "Open DataBase Consortium";
 choices[70][1] = "Open Data Business Connectivity";
 choices[70][2] = "Open DataBase Connectivity";
 choices[70][3] = "Object DataBase Consortium";
 answers[70] = choices[70][2];
 units[70] = "57, 58";
 comments[70] = "Id Pregunta: 8881. Examen UPM A2 2011";


//  Id pregunta: 8921 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  El proceso de normalizaci&oacute;n tiene por objeto";
 choices[71]= new Array();
 choices[71][0] = "Establecer reglas de nombrado uniformes para las entidades, los atributos y las relaciones";
 choices[71][1] = "Obtener el dise&ntilde;o f&iacute;sico del modelo de datos";
 choices[71][2] = "Eliminar las dependencias entre atributos que originen anomal&iacute;as en el tratamiento de los datos";
 choices[71][3] = "Homogeneizar el n&uacute;mero de dimensiones de las tablas de la base de datos";
 answers[71] = choices[71][2];
 units[71] = "58";
 comments[71] = "Id Pregunta: 8921. Operador Ayto. Madrid 2010";


//  Id pregunta: 9457 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  Seg&uacute;n Codd, una entidad que no contiene grupos repetitivos est&aacute;, al menos, en:";
 choices[72]= new Array();
 choices[72][0] = "Primera Forma Normal.";
 choices[72][1] = "Segunda Forma Normal.";
 choices[72][2] = "Tercera Forma Normal.";
 choices[72][3] = "Forma Normal de Boyce-Codd.";
 answers[72] = choices[72][0];
 units[72] = "58";
 comments[72] = "Id Pregunta: 9457. ";


//  Id pregunta: 9596 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  En una arquitectura web en J2EE, indique cu&aacute;l es la opci&oacute;n correcta que representa la capa a la que pertenece la soluci&oacute;n JCA (J2EE Connector Architecture)";
 choices[73]= new Array();
 choices[73][0] = "Capa de cliente";
 choices[73][1] = "Capa de l&oacute;gica de negocio";
 choices[73][2] = "Capa de integraci&oacute;n";
 choices[73][3] = "Capa de sistemas de informaci&oacute;n";
 answers[73] = choices[73][3];
 units[73] = "60";
 comments[73] = "Id Pregunta: 9596. Xunta Libre 2011. JCE conecta un servidor JEE con un Sistema de Informaci&oacute;n Empresarial (EIS)";


//  Id pregunta: 9606 AÃ±o de creación de pregunta: 2014-01-01
 questions[74]= "75)   En el Modelo de Referencia ANSI  de las Facilidades de usuario (MRFU), las FU se encargan de:";
 choices[74]= new Array();
 choices[74][0] = " Aislar al usuario de detalles concretos sobre las herramientas de gesti&oacute;n de datos (HGD)";
 choices[74][1] = " Transformar una demanda de usuario en una petici&oacute;n funcional para las HGD";
 choices[74][2] = "Trasformar la salida de las HGD en un formato de presentaci&oacute;n para el usuario";
 choices[74][3] = "Todas las anteriores";
 answers[74] = choices[74][3];
 units[74] = "57";
 comments[74] = "Id Pregunta: 9606. ";


//  Id pregunta: 9614 AÃ±o de creación de pregunta: 2014-01-01
 questions[75]= "76)  &iquest;C&uacute;al es un m&eacute;todo aceptado de desnormalizaci&oacute;n de bases de datos?";
 choices[75]= new Array();
 choices[75][0] = "Vistas materializadas.";
 choices[75][1] = "Esquemas de copo de nieve.";
 choices[75][2] = "Cubos OLAP.";
 choices[75][3] = "Todos los anteriores.";
 answers[75] = choices[75][3];
 units[75] = "68";
 comments[75] = "Id Pregunta: 9614. ";


//  Id pregunta: 9689 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  Un Datamart:";
 choices[76]= new Array();
 choices[76][0] = "Es una Base de Datos.";
 choices[76][1] = "Es m&aacute;s grande (en volumen de datos) que un Datawarehouse.";
 choices[76][2] = "Usa Sistemas de Gesti&oacute;n de Base de Datos multidimensionales.";
 choices[76][3] = "Todas son falsas.";
 answers[76] = choices[76][2];
 units[76] = "68";
 comments[76] = "Id Pregunta: 9689. ";


//  Id pregunta: 9780 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  &iquest;Cu&aacute;l de las siguientes herramientas utiliza un SGBD (sistema de gesti&oacute;n de bases de datos) para asegurar la atomicidad y persistencia de las transacciones?";
 choices[77]= new Array();
 choices[77][0] = "M&oacute;dulo de comprobaci&oacute;n de la integridad. ";
 choices[77][1] = "El esquema conceptual. ";
 choices[77][2] = "Fichero diario. ";
 choices[77][3] = "Triggers. ";
 answers[77] = choices[77][2];
 units[77] = "57";
 comments[77] = "Id Pregunta: 9780. Examen TIC A2 2013";


//  Id pregunta: 9921 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  En M&eacute;trica v3, en relaci&oacute;n al modelo entidad/relaci&oacute;n extendido, dentro de las relaciones d&eacute;biles, &iquest;qu&eacute; dos divisiones se distinguen?";
 choices[78]= new Array();
 choices[78][0] = "Dependencia en existencia y dependencia en identificaci&oacute;n.";
 choices[78][1] = "Dependencia en composici&oacute;n y dependencia en identificaci&oacute;n.";
 choices[78][2] = "Dependencia en existencia y dependencia en discriminaci&oacute;n.";
 choices[78][3] = "Dependencia en composici&oacute;n y dependencia en discriminaci&oacute;n.";
 answers[78] = choices[78][0];
 units[78] = "86,58";
 comments[78] = "Id Pregunta: 9921. TIC A2, Examen 2013";


//  Id pregunta: 9961 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  &iquest;Cu&aacute;l de las siguientes opciones NO es un operador espec&iacute;fico de un sistema o herramienta OLAP?";
 choices[79]= new Array();
 choices[79][0] = "DRILL";
 choices[79][1] = "POLL";
 choices[79][2] = "PIVOT";
 choices[79][3] = "SLICE &amp; DICE";
 answers[79] = choices[79][1];
 units[79] = "68,71";
 comments[79] = "Id Pregunta: 9961. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";


//  Id pregunta: 9962 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  Los dos componentes principales de ADO.NET para el acceso a los datos y su manipulaci&oacute;n son:";
 choices[80]= new Array();
 choices[80][0] = ".NET Framework Data Connectivity y ADO.NET DataSet";
 choices[80][1] = ".NET Framework Data Providers y ADO.NET ResultSet";
 choices[80][2] = ".NET Framework Data Connectivity y ADO.NET ResultSet";
 choices[80][3] = ".NET Framework Data Providers y ADO.NET DataSet";
 answers[80] = choices[80][3];
 units[80] = "59,115";
 comments[80] = "Id Pregunta: 9962. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";


//  Id pregunta: 9964 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  En la plataforma .NET, &iquest;cu&aacute;l es el est&aacute;ndar que define como se declaran, usan y administran los tipos de datos en el Common Language Runtime (CLR) y que es una parte importante para que m&uacute;ltiples lenguajes sean soportados?";
 choices[81]= new Array();
 choices[81][0] = "System Data Type (SDT)";
 choices[81][1] = "Common Type System (CTS)";
 choices[81][2] = "Common Data Integration (CDI)";
 choices[81][3] = "Data Type Core (DTC)";
 answers[81] = choices[81][1];
 units[81] = "59,115";
 comments[81] = "Id Pregunta: 9964. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";


//  Id pregunta: 9966 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  El subconjunto de datos de un Almac&eacute;n de Datos se denomina:";
 choices[82]= new Array();
 choices[82][0] = "Data Warehouse.";
 choices[82][1] = "OLAP";
 choices[82][2] = "Data Mart.";
 choices[82][3] = "Data Mining.";
 answers[82] = choices[82][2];
 units[82] = "68,71";
 comments[82] = "Id Pregunta: 9966. Examen Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n, Servicio sanitario Extremadura, 2014";


//  Id pregunta: 9968 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  El Servicio de Representaci&oacute;n de Workflow (Workflow Enactment Service) seg&uacute;n la Workflow Management Coalition (WfMC) se encarga de:";
 choices[83]= new Array();
 choices[83][0] = "Interpretar la descripci&oacute;n de procesos y controlar las diferentes instancias de los procesos,secuencia de actividades, a&ntilde;adir elementos a la lista de trabajo de los usuarios, e invocar las aplicaciones necesarias.";
 choices[83][1] = "El modelado y dise&ntilde;o de los procesos, el cual puede ser interpretado en tiempo de ejecuci&oacute;n por el o los motores de Workflow.";
 choices[83][2] = "La definici&oacute;n de los mecanismos requeridos por los desarrolladores de productos Workflow para implementar la comunicaci&oacute;n de un motor Workflow con otros.";
 choices[83][3] = "La interacci&oacute;n entre los participantes del flujo de trabajo y el servicio de lanzamiento de flujo de trabajo";
 answers[83] = choices[83][0];
 units[83] = "71";
 comments[83] = "Id Pregunta: 9968. Examen Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n, Servicio sanitario Extremadura, 2014";


//  Id pregunta: 10013 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  Indique los cuatro niveles de aislamiento que define ANSI SQL 92:";
 choices[84]= new Array();
 choices[84][0] = "Lecturas no confirmadas (read uncommited), lecturas confirmadas (read commited), lecturas repetibles (repeatable read), transacciones secuenciables (serializable).";
 choices[84][1] = "Escrituras no confirmadas (write uncommited), escrituras confirmadas (write commited), escrituras repetibles (repeatable write), transacciones secuenciables (serializable).";
 choices[84][2] = "Escrituras no confirmadas (write uncommited), escrituras confirmadas (write commited), lecturas repetibles (repeatable read), transacciones secuenciables (serializable).";
 choices[84][3] = "Lecturas no confirmadas (read uncommited), lecturas confirmadas (read commited), escrituras repetibles (repeatable write), transacciones secuenciables (serializable).";
 answers[84] = choices[84][0];
 units[84] = "57";
 comments[84] = "Id Pregunta: 10013. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10015 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  En relaci&oacute;n con la concurrencia en bases de datos, el tama&ntilde;o del elemento de datos adecuado para el bloqueo (granularidad) afecta al grado de concurrencia de forma que, a menor tama&ntilde;o del elemento que es bloqueado:";
 choices[85]= new Array();
 choices[85][0] = "Aumenta el grado de concurrencia, aumenta la carga de trabajo para la gesti&oacute;n de bloqueos y el espacio ocupado por la informaci&oacute;n de bloqueos.";
 choices[85][1] = "Disminuye el grado de concurrencia, aumenta la carga de trabajo para la gesti&oacute;n de bloqueos y el espacio ocupado por la informaci&oacute;n de bloqueos.";
 choices[85][2] = "Disminuye el grado de concurrencia, disminuyendo la carga de trabajo para la gesti&oacute;n de bloqueos y el espacio ocupado por la informaci&oacute;n de bloqueos.";
 choices[85][3] = "Aumenta el grado de concurrencia, disminuyendo la carga de trabajo para la gesti&oacute;n de bloqueos y el espacio ocupado por la informaci&oacute;n de bloqueos.";
 answers[85] = choices[85][0];
 units[85] = "58";
 comments[85] = "Id Pregunta: 10015. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10023 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Throwable es la superclase de todos los errores y excepciones de Java SE 7. &iquest;A qu&eacute; paquete de Java pertenece Throwable?";
 choices[86]= new Array();
 choices[86][0] = "java.lang";
 choices[86][1] = "java.error";
 choices[86][2] = "java.util";
 choices[86][3] = "Throwable no es una clase, es un interface, y &eacute;ste pertenece al paquete java.io.";
 answers[86] = choices[86][0];
 units[86] = "60";
 comments[86] = "Id Pregunta: 10023. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10161 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta en relaci&oacute;n con el c&aacute;lculo relacional?";
 choices[87]= new Array();
 choices[87][0] = "Lenguaje formal de consulta / acceso a un modelo relacional basado en la teor&iacute;a de conjuntos";
 choices[87][1] = "Lenguaje te&oacute;rico y de car&aacute;cter procedural que define un conjunto de operaciones aplicables sobre un modelo relacional";
 choices[87][2] = "Formalismo para expresar operaciones de consulta / acceso a un modelo relacional basado en la l&oacute;gica de predicados";
 choices[87][3] = "Ninguna de las anteriores";
 answers[87] = choices[87][2];
 units[87] = "58";
 comments[87] = "Id Pregunta: 10161. ";


//  Id pregunta: 10164 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  &iquest;En qu&eacute; consiste la regla de Independencia de Integridad establecida por Codd?";
 choices[88]= new Array();
 choices[88][0] = "Los programas de aplicaci&oacute;n y actividades del terminal permanecer&aacute;n inalterados a nivel l&oacute;gico cuando se realicen cambios sobre las tablas base que preservan la informaci&oacute;n";
 choices[88][1] = "Los limitantes de integridad han de poder ser definidos utilizando el sublenguaje de datos relacional y almacenables en el cat&aacute;logo din&aacute;mico";
 choices[88][2] = "La independencia de integridad requiere la definici&oacute;n de claves ajenas con la opci&oacute;n &quot;CASCADE&quot;, a fin que se propaguen a la clave ajena los cambios realizados sobre la clave primaria referenciada";
 choices[88][3] = "Si en una relaci&oacute;n hay una clave ajena, sus valores deben coincidir con los valores de la clave primaria a que se refiere, o deben ser completamente nulos";
 answers[88] = choices[88][1];
 units[88] = "58";
 comments[88] = "Id Pregunta: 10164. ";


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


//  Id pregunta: 10188 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  Entre los modelos de bases de datos prerelacionales, se verifica que:";
 choices[90]= new Array();
 choices[90][0] = "El modelo jer&aacute;rquico es incapaz de representar las relaciones reflexivas o las relaciones N:M";
 choices[90][1] = "Los modelos jer&aacute;rquico y CODASYL son en esencia modelos de datos en red, que aplican ciertas restricciones";
 choices[90][2] = "El Conjunto o SET es uno de los elementos m&aacute;s importantes del modelo CODASYL, como elemento b&aacute;sico para la representaci&oacute;n de interrelaciones 1:N y por tanto 1:1.";
 choices[90][3] = "Todas las anteriores";
 answers[90] = choices[90][3];
 units[90] = "57";
 comments[90] = "Id Pregunta: 10188. ";


//  Id pregunta: 10241 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  Teniendo el siguiente c&oacute;digo, despu&eacute;s de ejecutarse &iquest;que respuestas son correctas?:int [] x = new int[25];";
 choices[91]= new Array();
 choices[91][0] = "x[24] es 0";
 choices[91][1] = "x[24] es indefinido";
 choices[91][2] = "x[25] es 0";
 choices[91][3] = "x[0] es igual a null";
 answers[91] = choices[91][0];
 units[91] = "60";
 comments[91] = "Id Pregunta: 10241. NULL";


//  Id pregunta: 10872 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Qu&eacute; es Navicat Premium en el entorno de administraci&oacute;n de bases de datos?";
 choices[92]= new Array();
 choices[92][0] = "Es un conjunto de herramientas multiplataforma de software libre creado para ayudar a los administradores y desarrolladores de aplicaciones de bases de datos Oracle. Tambi&eacute;n suministra soporte para MySQL y PostgreSQL.";
 choices[92][1] = "Es una herramienta de IBM que permite realizar administraci&oacute;n remota de bases de datos.";
 choices[92][2] = "Es una base de datos NoSQL distribuida y basada en un modelo de almacenamiento de clave-valor, escrita en Java.";
 choices[92][3] = "Es un administrador de bases de datos propietario, de m&uacute;ltiples conexiones, que permite conectarse a diversas bases de datos como MySQL, MariaDB, SQL Server, etc. Simult&aacute;neamente en una sola aplicaci&oacute;n.";
 answers[92] = choices[92][3];
 units[92] = "57";
 comments[92] = "Id Pregunta: 10872. Examen GSI 2014";


//  Id pregunta: 10930 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  En SQL Server, la cardinalidad m&aacute;xima de una tabla de hechos que es la tabla central de n tablas dimensionales es:";
 choices[93]= new Array();
 choices[93][0] = "La multiplicaci&oacute;n de las cardinalidades de cada una de las n tablas dimensionales.";
 choices[93][1] = "La suma de las cardinalidades de cada una de las n tablas dimensionales.";
 choices[93][2] = "La mayor de las cardinalidades presentes en las n tablas dimensionales.";
 choices[93][3] = "La mayor de las cardinalidades presentes en las n tablas dimensionales elevado a n.";
 answers[93] = choices[93][0];
 units[93] = "57";
 comments[93] = "Id Pregunta: 10930. TIC A1 AGE 2014";


//  Id pregunta: 10987 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Al desarrollar una aplicaci&oacute;n para Android, respecto al fichero AndroidManifest.xml se&ntilde;ale la respuesta correcta:";
 choices[94]= new Array();
 choices[94][0] = "Debe renombrarse en el momento de la publicaci&oacute;n de la aplicaci&oacute;n en Google Play, con un identificador &uacute;nico.";
 choices[94][1] = "Declara los permisos que debe tener la aplicaci&oacute;n para acceder a las partes protegidas del API.";
 choices[94][2] = "Debe posicionarse en el directorio \etc\manifest.";
 choices[94][3] = "Establece las condiciones legales que el usuario debe aceptar para poder acceder a la aplicaci&oacute;n.";
 answers[94] = choices[94][1];
 units[94] = "60";
 comments[94] = "Id Pregunta: 10987. TIC A1 AGE 2014";


//  Id pregunta: 11040 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;C&oacute;mo se denomina a la restricci&oacute;n del Modelo L&oacute;gico Relacional por la que si en una relaci&oacute;n hay alguna clave ajena, sus valores deben coincidir con los valores de la clave primaria a la que hace referencia, o bien, deben ser completamente nulos?";
 choices[95]= new Array();
 choices[95][0] = "Aserci&oacute;n (ASSERTION)";
 choices[95][1] = "Verificaci&oacute;n (CHECK)";
 choices[95][2] = "Restricci&oacute;n de clave primaria";
 choices[95][3] = "Integridad referencial";
 answers[95] = choices[95][3];
 units[95] = "58";
 comments[95] = "Id Pregunta: 11040. ";


//  Id pregunta: 11043 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;En qu&eacute; patr&oacute;n de dise&ntilde;o est&aacute; basada la arquitectura de Swing?";
 choices[96]= new Array();
 choices[96][0] = "Modelo-Vista-Controlador (MVC)";
 choices[96][1] = "Singleton";
 choices[96][2] = "Observer";
 choices[96][3] = "Facade";
 answers[96] = choices[96][0];
 units[96] = "60";
 comments[96] = "Id Pregunta: 11043. ";


//  Id pregunta: 11217 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  En relaci&oacute;n con las interfaces de programaci&oacute;n para crear GUI en Java:";
 choices[97]= new Array();
 choices[97][0] = "La&nbsp;Java Foundation Classes&nbsp;(JFC) es un framework gr&aacute;fico para construir interfaces gr&aacute;ficas de usuario (GUIs)  basadas en&nbsp;Java y est&aacute; compuesto por AWT,Swing&nbsp;y&nbsp;Java 2D.";
 choices[97][1] = "Aunque Swing est&aacute; basado en AWT, se trata de una implementaci&oacute;n de controles gr&aacute;ficos en Java puro.";
 choices[97][2] = "JavaFX, aunque est&aacute; incluido en el JDK/JRE, no est&aacute; basado en ninguna especificaci&oacute;n est&aacute;ndar JSR sino que es un producto de Oracle.";
 choices[97][3] = "Todas las respuestas son verdaderas.";
 answers[97] = choices[97][3];
 units[97] = "60";
 comments[97] = "Id Pregunta: 11217. ";


//  Id pregunta: 11299 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  De entre las siguientes, escoge la falsa en relaci&oacute;n con SQL:";
 choices[98]= new Array();
 choices[98][0] = "Las relaciones participantes en un producto cartesiano, deben tener el mismo grado.";
 choices[98][1] = "Para todas las operaciones de &aacute;lgebra relacional, las 2 relaciones deben tener el mismo grado, excepto en el producto cartesiano.";
 choices[98][2] = "El SQL es estandarizado por ISO/IEC JTC1 Subcomit&eacute; 21.";
 choices[98][3] = "En SQL embebido los c&oacute;digos de retorno con signo negativo son errores.";
 answers[98] = choices[98][0];
 units[98] = "58";
 comments[98] = "Id Pregunta: 11299. El producto cartesiano es la &uacute;nica operaci&oacute;n del &aacute;lgebra relacional, que no necesita que las relaciones tengan el mismo grado, es decir el mismo n&uacute;mero de columnas.";


//  Id pregunta: 11510 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Cu&aacute;l de los siguientes sistemas de Big Data es utilizado por el Red Social Twitter?";
 choices[99]= new Array();
 choices[99][0] = "Hive";
 choices[99][1] = "Cassandra";
 choices[99][2] = "Hbase";
 choices[99][3] = "ZoneKeeper";
 answers[99] = choices[99][1];
 units[99] = "68";
 comments[99] = "Id Pregunta: 11510. NULL";


