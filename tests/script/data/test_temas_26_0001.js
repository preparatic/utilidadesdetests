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

//  Id pregunta: 743 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  Dentro del campo de los almacenes de datos, los supermercados de datos o Data Marts:";
 choices[0]= new Array();
 choices[0][0] = "Son muy vol&aacute;tiles dada la gran frecuencia de actualizaci&oacute;n.";
 choices[0][1] = "son una versi&oacute;n especial de Data Warehouse, duplicados en varias m&aacute;quinas para agilizar el acceso a los mismos, que contienen los datos muy resumidos en una arquitectura distribuida por niveles.";
 choices[0][2] = "S&oacute;lo pueden ser accedidos por el departamento al que pertenecen los datos.";
 choices[0][3] = "Ninguna de las anteriores.";
 answers[0] = choices[0][1];
 units[0] = "68";
 comments[0] = "Id Pregunta: 743. Similar a examen TIC SS A 2003";


//  Id pregunta: 827 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;C&oacute;mo son los tipos de datos en Java?:";
 choices[1]= new Array();
 choices[1][0] = "Pese a estar orientado a objetos el lenguaje, los tipos no est&aacute;n orientados a objetos";
 choices[1][1] = "Al estar orientado a objetos el lenguaje, los tipos est&aacute;n orientados a objetos";
 choices[1][2] = "Algunos de los tipos son orientados a objetos y otros no";
 choices[1][3] = "Debido a las peculiares caracteristicas de Java , los tipos de datos no pueden clasificarse en ninguna de las dos categor&iacute;as.";
 answers[1] = choices[1][2];
 units[1] = "60";
 comments[1] = "Id Pregunta: 827. String es un tipo de dato objeto";


//  Id pregunta: 832 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;Cu&aacute;l de las alternativas siguientes no corresponde a un operador fundamental del &aacute;lgebra relacional?:";
 choices[2]= new Array();
 choices[2][0] = "Join";
 choices[2][1] = "Selecci&oacute;n";
 choices[2][2] = "Diferencia";
 choices[2][3] = "Proyecci&oacute;n";
 answers[2] = choices[2][0];
 units[2] = "57";
 comments[2] = "Id Pregunta: 832. ";


//  Id pregunta: 888 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;Cu&aacute;l no es una caracter&iacute;stica b&aacute;sica de los sistemas OLAP?";
 choices[3]= new Array();
 choices[3][0] = "Permite actualizar la informaci&oacute;n de manera r&aacute;pida y f&aacute;cil.";
 choices[3][1] = "Permiten ahondar en la jerarqu&iacute;a de los datos para acceder a los de m&aacute;s bajo nivel.";
 choices[3][2] = "Ofrecen una visi&oacute;n m&uacute;ltidimensional y jerarquizada de los datos.";
 choices[3][3] = "Son capaces de analizar tendencias a lo largo de per&iacute;odos de tiempo.";
 answers[3] = choices[3][0];
 units[3] = "68";
 comments[3] = "Id Pregunta: 888. ";


//  Id pregunta: 896 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;En qu&eacute; consiste el an&aacute;lisis multidimensional de OLAP?";
 choices[4]= new Array();
 choices[4][0] = "En analizar los mismos datos desde distintas perspectivas.";
 choices[4][1] = "En consolidar los datos por distintas trayectorias.";
 choices[4][2] = "En encontrar nuevas relaciones entre variables.";
 choices[4][3] = "Todas las respuestas anteriores son correctas.";
 answers[4] = choices[4][3];
 units[4] = "68";
 comments[4] = "Id Pregunta: 896. ";


//  Id pregunta: 972 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  Cuando se quiere simular una base de datos multidimensional con una base de datos relacional y hay jerarqu&iacute;as en las dimensiones, lo m&aacute;s adecuado es el:";
 choices[5]= new Array();
 choices[5][0] = "Esquema en estrella.";
 choices[5][1] = "Esquema en tornillo.";
 choices[5][2] = "Esquema de hechos.";
 choices[5][3] = "Esquema en copo de nieve.";
 answers[5] = choices[5][3];
 units[5] = "68";
 comments[5] = "Id Pregunta: 972. ";


//  Id pregunta: 1034 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  El modelo de base de datos CODASYL:";
 choices[6]= new Array();
 choices[6][0] = "Es el modelo conceptual de datos que corresponde a los SGBD jer&aacute;rquicos";
 choices[6][1] = "Es el modelo l&oacute;gico de datos de un SGBD relacional";
 choices[6][2] = "Es el Modelo de Codd";
 choices[6][3] = "No se corresponde con nada de lo anterior";
 answers[6] = choices[6][3];
 units[6] = "57";
 comments[6] = "Id Pregunta: 1034. ";


//  Id pregunta: 1036 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  El modelo de referencia ANSI para SGBD, en cuanto a la definici&oacute;n de los datos:";
 choices[7]= new Array();
 choices[7][0] = "Crea cuatro tipos de esquemas: conceptual, l&oacute;gico, f&iacute;sico, de implementaci&oacute;n";
 choices[7][1] = "Establece la estrecha dependencia que debe existir entre los datos y las aplicaciones";
 choices[7][2] = "Define cinco niveles de interpretaci&oacute;n de los mismos, seg&uacute;n cinco aspectos: visualizaci&oacute;n, cardinalidad, muestreo, distancia y flexibilidad";
 choices[7][3] = "Establece los Metadatos (datos sobre los datos) que se almacenan en el Diccionario de Datos";
 answers[7] = choices[7][3];
 units[7] = "57";
 comments[7] = "Id Pregunta: 1036. ";


//  Id pregunta: 1090 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  En el modelo relacional, &iquest;qu&eacute; se entiende por integridad referencial?:";
 choices[8]= new Array();
 choices[8][0] = "Que todos los datos est&eacute;n referenciados por su clave y &eacute;sta sea &uacute;nica";
 choices[8][1] = "Que todo atributo que represente una relaci&oacute;n, o bien sea nulo, o bien exista en la clave primaria del elemento relacionado";
 choices[8][2] = "Que todo conjunto de operaciones que constituya una unidad, o bien progrese en conjunto, bien falle en conjunto, pero que no progrese nunca en situaciones intermedias";
 choices[8][3] = "Que se pueda referenciar la totalidad de la base de datos";
 answers[8] = choices[8][1];
 units[8] = "58";
 comments[8] = "Id Pregunta: 1090. NULL";


//  Id pregunta: 1181 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  Indicar cu&aacute;l de los siguientes no es un modelo de miner&iacute;a de datos:";
 choices[9]= new Array();
 choices[9][0] = "De verificaci&oacute;n.";
 choices[9][1] = "De descubrimiento.";
 choices[9][2] = "De predicci&oacute;n.";
 choices[9][3] = "De validaci&oacute;n.";
 answers[9] = choices[9][3];
 units[9] = "68";
 comments[9] = "Id Pregunta: 1181. ";


//  Id pregunta: 1201 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  JDeveloper es:";
 choices[10]= new Array();
 choices[10][0] = "Un entorno de desarrollo integrado (IDE)";
 choices[10][1] = "Una base de datos";
 choices[10][2] = "Un gestor de contenidos";
 choices[10][3] = "Un gestor de informes";
 answers[10] = choices[10][0];
 units[10] = "60";
 comments[10] = "Id Pregunta: 1201. NULL";


//  Id pregunta: 1284 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Los tipos de an&aacute;lisis desarrollados en Data Mining se dividen com&uacute;nmente en:";
 choices[11]= new Array();
 choices[11][0] = "Sint&aacute;ctico y sem&aacute;ntico.";
 choices[11][1] = "Estad&iacute;stico y de calidad.";
 choices[11][2] = "Gr&aacute;fico y textual.";
 choices[11][3] = "Supervisado y no supervisado.";
 answers[11] = choices[11][3];
 units[11] = "68";
 comments[11] = "Id Pregunta: 1284. ";


//  Id pregunta: 1286 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Los tipos de entidad dentro de un modelo entidad/asociaci&oacute;n son: ";
 choices[12]= new Array();
 choices[12][0] = "Regulares y d&eacute;biles";
 choices[12][1] = "Regulares e irregulares";
 choices[12][2] = "Externas, internas, regulares y d&eacute;biles";
 choices[12][3] = "Ninguna de las anteriores.";
 answers[12] = choices[12][0];
 units[12] = "58";
 comments[12] = "Id Pregunta: 1286. ";


//  Id pregunta: 1304 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Para trabajar con una vista que contenga tuplas de varias tablas se utilizar&aacute; la sentencia SQL:";
 choices[13]= new Array();
 choices[13][0] = "CREATE TABLE";
 choices[13][1] = "CREATE VIEW";
 choices[13][2] = "ALTER TABLE";
 choices[13][3] = "ALTER VIEW";
 answers[13] = choices[13][1];
 units[13] = "58";
 comments[13] = "Id Pregunta: 1304. ";


//  Id pregunta: 1306 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  Peque&ntilde;as aplicaciones que pueden formar parte de la p&aacute;gina Web, y que pueden viajar a trav&eacute;s de Intenet para ejecutarse en el ordenador que las reciba se denominan:";
 choices[14]= new Array();
 choices[14][0] = "Controles Java";
 choices[14][1] = "Applets";
 choices[14][2] = "Servlets";
 choices[14][3] = "Aplicaciones CGI";
 answers[14] = choices[14][1];
 units[14] = "60";
 comments[14] = "Id Pregunta: 1306. NULL";


//  Id pregunta: 1337 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  Seg&uacute;n el est&aacute;ndar SQL, una transacci&oacute;n es una secuencia de operaciones que:";
 choices[15]= new Array();
 choices[15][0] = "Se inicia con una sentencia BEGIN TRANSACTION y termina con una sentencia END TRANSACTION";
 choices[15][1] = "Si se termina con un sentencia ROLLBACK, todos los cambios realizados por las diferentes transacciones desde el inicio de la sesi&oacute;n son cancelados";
 choices[15][2] = "Puede iniciarse con la ejecuci&oacute;n de una sentencia DML y se finaliza con una sentencia COMMIT o ROLLBACK";
 choices[15][3] = "Si no finaliza con una sentencia COMMIT, el sistema debe devolver un mensaje de error";
 answers[15] = choices[15][2];
 units[15] = "58";
 comments[15] = "Id Pregunta: 1337. ";


//  Id pregunta: 1340 AÃ±o de creación de pregunta: 2009-01-01
 questions[16]= "17)  Se&ntilde;alar cu&aacute;l de las siguientes no es una operaci&oacute;n anal&iacute;tica b&aacute;sica en un sistema OLAP:";
 choices[16]= new Array();
 choices[16][0] = "Actualizaci&oacute;n.";
 choices[16][1] = "Agregaci&oacute;n.";
 choices[16][2] = "Dril-down.";
 choices[16][3] = "Slice-Dice.";
 answers[16] = choices[16][0];
 units[16] = "68";
 comments[16] = "Id Pregunta: 1340. ";


//  Id pregunta: 1346 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Se&ntilde;ale la alternativa que contiene los operadores que, juntos, componen el operador &lsquo;join&rsquo; del &aacute;lgebra relacional:";
 choices[17]= new Array();
 choices[17][0] = "Selecci&oacute;n, proyecci&oacute;n y diferencia";
 choices[17][1] = "Selecci&oacute;n, proyecci&oacute;n y producto cartesiano";
 choices[17][2] = "Proyecci&oacute;n, producto cartesiano y diferencia";
 choices[17][3] = "Proyecci&oacute;n, producto cartesiano y uni&oacute;n";
 answers[17] = choices[17][1];
 units[17] = "58";
 comments[17] = "Id Pregunta: 1346. ";


//  Id pregunta: 1381 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Un conjunto de instrucciones dedicadas a la ejecuci&oacute;n de una tarea espec&iacute;fica sobre una base de datos en tiempo real recibe el nombre de:";
 choices[18]= new Array();
 choices[18][0] = "M&oacute;dulo";
 choices[18][1] = "M&oacute;dulo reentrante";
 choices[18][2] = "Transacci&oacute;n";
 choices[18][3] = "Actualizaci&oacute;n";
 answers[18] = choices[18][2];
 units[18] = "56,57";
 comments[18] = "Id Pregunta: 1381. ";


//  Id pregunta: 1388 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  Un productor de bases de datos es aqu&eacute;l que:";
 choices[19]= new Array();
 choices[19][0] = "&Uacute;nicamente recopila informaci&oacute;n y la pone a disposici&oacute;n de la sociedad en un soporte susceptible de tratamiento inform&aacute;tico";
 choices[19][1] = "Solo mantiene al d&iacute;a la informaci&oacute;n contenida en las bases";
 choices[19][2] = "Algunos de ellos no se limitan a recopilar la informaci&oacute;n, sino que la elaboran";
 choices[19][3] = "Son correctas las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo;";
 answers[19] = choices[19][2];
 units[19] = "57";
 comments[19] = "Id Pregunta: 1388. ";


//  Id pregunta: 1426 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Una transacci&oacute;n es un conjunto de acciones impregnadas de propiedades ACID, lo que significa:";
 choices[20]= new Array();
 choices[20][0] = "Atomicidad, consistencia, aislamiento y durabilidad";
 choices[20][1] = "Acci&oacute;n, correcci&oacute;n, integridad y dependencia";
 choices[20][2] = "Atomicidad, coexistencia, integridad y permanencia";
 choices[20][3] = "Actividad, convergencia, aislamiento y dependencia";
 answers[20] = choices[20][0];
 units[20] = "57";
 comments[20] = "Id Pregunta: 1426. ";


//  Id pregunta: 1445 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  La notaci&oacute;n sint&aacute;ctica conocida como BNF (Backus Normal Form) especifica:";
 choices[21]= new Array();
 choices[21][0] = "La funci&oacute;n, el formato, las reglas sint&aacute;cticas y generales de cada elemento SQL";
 choices[21][1] = "La sintaxis y la sem&aacute;ntica del SQL-DDL (Lenguaje de Definici&oacute;n de Esquema) y el SQL-DML (Lenguaje de M&oacute;dulos y de Manipulaci&oacute;n de Datos)";
 choices[21][2] = "Las autorizaciones para realizar determinadas funciones en las tablas";
 choices[21][3] = "Las restricciones para prevenir que dos filas tengan los mismos valores en determinadas columnas (unique) o para impedir que determinada columna contenga un valor nulo";
 answers[21] = choices[21][0];
 units[21] = "58";
 comments[21] = "Id Pregunta: 1445. ";


//  Id pregunta: 1527 AÃ±o de creación de pregunta: 2003-01-01
 questions[22]= "23)  El comando de SQL ' DELETE', &iquest;qu&eacute; hace?";
 choices[22]= new Array();
 choices[22][0] = "Borra una tabla determinada.";
 choices[22][1] = "Borra un &iacute;ndice de una tabla.";
 choices[22][2] = "Borra valores de una tabla.";
 choices[22][3] = "Borra tanto valores de una tabla, la tabla entera como &iacute;ndices de una tabla seg&uacute;n sea la sintaxis de la sentencia SQL.";
 answers[22] = choices[22][2];
 units[22] = "58";
 comments[22] = "Id Pregunta: 1527. ";


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


//  Id pregunta: 1600 AÃ±o de creación de pregunta: 2003-01-01
 questions[24]= "25)  En un SGBD (Sistema Gestor de Base de Datos), &iquest;qu&eacute; tipo de bloqueos puede haber?";
 choices[24]= new Array();
 choices[24][0] = "Bloqueo de lectura, de escritura, de registro y de p&aacute;gina.";
 choices[24][1] = "Bloqueo de registro y de p&aacute;gina pero nunca de lectura ni escritura.";
 choices[24][2] = "Bloqueo de lectura y de escritura pero nunca de registro ni de p&aacute;gina.";
 choices[24][3] = "Bloqueo de escritura y de registro pero nunca de lectura ni de p&aacute;gina.";
 answers[24] = choices[24][0];
 units[24] = "58";
 comments[24] = "Id Pregunta: 1600. ";


//  Id pregunta: 1611 AÃ±o de creación de pregunta: 2003-01-01
 questions[25]= "26)  La tercera forma normal enunciada por Codd dice:";
 choices[25]= new Array();
 choices[25][0] = "Un relaci&oacute;n est&aacute; en tercera forma normal, si est&aacute; en 2FN y adem&aacute;s ninguno de sus atributos no primarios tiene dependencias transitivas respecto de las claves";
 choices[25][1] = "Una relaci&oacute;n R est&aacute; en 3FN si todos los atributos que no forman parte de la clave son mutuamente independientes y dependen funcionalmente de forma completa de la clave primaria";
 choices[25][2] = "Ambos enunciados son correctos";
 choices[25][3] = "Ninguno es correcto";
 answers[25] = choices[25][2];
 units[25] = "58";
 comments[25] = "Id Pregunta: 1611. NULL";


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


//  Id pregunta: 1660 AÃ±o de creación de pregunta: 2004-01-01
 questions[27]= "28)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es falsa:";
 choices[27]= new Array();
 choices[27][0] = "Los servicios OLAP son una herramienta de proceso anal&iacute;tico en l&iacute;nea.";
 choices[27][1] = "Pertenece al dominio de los almacenes de datos y se encuentra dentro del &aacute;mbito,  m&aacute;s amplio, de los sistemas de toma de decisiones (DSS) y de los sistemas de informaci&oacute;n ejecutiva (EIS).";
 choices[27][2] = "Una de sus principales metas es incrementar la velocidad de recuperaci&oacute;n de datos.";
 choices[27][3] = "Los servicios OLAP son una herramienta de proceso transaccional en l&iacute;nea.";
 answers[27] = choices[27][3];
 units[27] = "68";
 comments[27] = "Id Pregunta: 1660. MAP-B 2003";


//  Id pregunta: 1674 AÃ±o de creación de pregunta: 2004-01-01
 questions[28]= "29)  &iquest;Cu&aacute;l de las siguientes comandos SQL pertenece al DDL (Lenguaje de definici&oacute;n de datos)?";
 choices[28]= new Array();
 choices[28][0] = "SELECT";
 choices[28][1] = "CREATE";
 choices[28][2] = "INSERT";
 choices[28][3] = "UPDATE";
 answers[28] = choices[28][1];
 units[28] = "58";
 comments[28] = "Id Pregunta: 1674. ";


//  Id pregunta: 1680 AÃ±o de creación de pregunta: 2004-01-01
 questions[29]= "30)  &iquest;Qu&eacute; es un JNI?";
 choices[29]= new Array();
 choices[29][0] = "Es una interfaz que permite el acceso a bases de datos desde programas java";
 choices[29][1] = "Es una interfaz de programaci&oacute;n para gestionar entornos de ventanas en java";
 choices[29][2] = "Es una interfaz de programaci&oacute;n que facilita el acceso, generaci&oacute;n y desarrollo de componentes o programas para acceder a ficheros XML";
 choices[29][3] = "Es una interfaz est&aacute;ndar de programaci&oacute;n para llamar a m&eacute;todos nativos escritos en otros lenguajes, desde un programa java";
 answers[29] = choices[29][3];
 units[29] = "60";
 comments[29] = "Id Pregunta: 1680. NULL";


//  Id pregunta: 1749 AÃ±o de creación de pregunta: 2006-01-01
 questions[30]= "31)  Qu&eacute; t&eacute;cnica se utiliza para eliminar la posible colisi&oacute;n de distintas peticiones de actualizaci&oacute;n simult&aacute;neas sobre un mismo dato de la base de datos";
 choices[30]= new Array();
 choices[30][0] = "Como el rendimiento de la inversi&oacute;n expresado en t&eacute;rminos de porcentaje";
 choices[30][1] = "Bloqueo";
 choices[30][2] = "Inter-Roll";
 choices[30][3] = "Roll-back";
 answers[30] = choices[30][1];
 units[30] = "58";
 comments[30] = "Id Pregunta: 1749. ";


//  Id pregunta: 1750 AÃ±o de creación de pregunta: 2006-01-01
 questions[31]= "32)  qu&eacute; es JDBC";
 choices[31]= new Array();
 choices[31][0] = "un modelo de objetos ActiveX";
 choices[31][1] = "Una interfaz a nivel de llamadas (CLI) dise&ntilde;ada para programas escritos en C";
 choices[31][2] = "Un controlador de planificaci&oacute;n de procesos en monitores transaccionales (Job Database Control).";
 choices[31][3] = "Una interfaz de programaci&oacute;n de aplicaciones (API) Java para ejecutar sentencias SQL.";
 answers[31] = choices[31][3];
 units[31] = "58";
 comments[31] = "Id Pregunta: 1750. ";


//  Id pregunta: 1766 AÃ±o de creación de pregunta: 2006-01-01
 questions[32]= "33)  El lenguaje Java, para las variables de clase, utiliza el modificador";
 choices[32]= new Array();
 choices[32][0] = "extern";
 choices[32][1] = "private";
 choices[32][2] = "final";
 choices[32][3] = "static";
 answers[32] = choices[32][3];
 units[32] = "60";
 comments[32] = "Id Pregunta: 1766. JCED - Preparatic XVII. Variables de clase es otra manera de llamar a las var est&aacute;ticas";


//  Id pregunta: 1768 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  Respecto al empaquetado de aplicaciones en JAVA ";
 choices[33]= new Array();
 choices[33][0] = "utiliza el algoritmo de compresi&oacute;n LZW";
 choices[33][1] = "Para facilitar el control y orden de todos estos ficheros es para lo que se han definido los ficheros JAR";
 choices[33][2] = "Un fichero JAR  puede incluir un subdirectorio de metainformaci&oacute;n llamado META-INF";
 choices[33][3] = "Todas son correctas";
 answers[33] = choices[33][3];
 units[33] = "60";
 comments[33] = "Id Pregunta: 1768. NULL";


//  Id pregunta: 1822 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  Entre los modelos t&iacute;picos de bases de datos multidimensionales se encuentra:";
 choices[34]= new Array();
 choices[34][0] = "Modelo en estrella.";
 choices[34][1] = "El modelo de copo de nieve.";
 choices[34][2] = "Modelo constelaci&oacute;n.";
 choices[34][3] = "Todos los anteriores son correctos.";
 answers[34] = choices[34][3];
 units[34] = "68";
 comments[34] = "Id Pregunta: 1822. ";


//  Id pregunta: 1846 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  &iquest;A qu&eacute; hace referencia las siglas WAPI?";
 choices[35]= new Array();
 choices[35][0] = "Wireless Advanced Privacy Infrastructure";
 choices[35][1] = "Workflow Application Programming Interface";
 choices[35][2] = "Wired Advanced Professional Institute";
 choices[35][3] = "Wireless Application Programming Interface";
 answers[35] = choices[35][1];
 units[35] = "71";
 comments[35] = "Id Pregunta: 1846. ";


//  Id pregunta: 1917 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  La palabra clave de Visual Basic.NET &quot;overrides&quot; se utiliza para:";
 choices[36]= new Array();
 choices[36][0] = "Heredar todos los miembros no privados de la clase base";
 choices[36][1] = "Especificar qu&eacute; clase no se puede utilizar como clase base";
 choices[36][2] = "Indicar que el procedimiento reemplaza un procedimiento de la clase base";
 choices[36][3] = "Invocar c&oacute;digo escrito en una clase desde la propia clase";
 answers[36] = choices[36][2];
 units[36] = "59";
 comments[36] = "Id Pregunta: 1917. ";


//  Id pregunta: 1949 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones sobre el paquete javax.microedition.lcdui de J2ME es cierta";
 choices[37]= new Array();
 choices[37][0] = "Es un subconjunto del paquete Swing de J2SE";
 choices[37][1] = "Define las aplicaciones MIDP y su comportamiento con respecto al entorno de ejecuci&oacute;n";
 choices[37][2] = "Proporciona clases asociadas a la gesti&oacute;n del ciclo de vida de las MIDLETS";
 choices[37][3] = "Proporciona clases para el desarrollo de elementos gr&aacute;ficos de la API MIDP para entornos m&oacute;viles";
 answers[37] = choices[37][3];
 units[37] = "60";
 comments[37] = "Id Pregunta: 1949. NULL";


//  Id pregunta: 1953 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  En relaci&oacute;n al lenguaje Java, la clase THROWABLE tiene dos subclases:";
 choices[38]= new Array();
 choices[38][0] = "Error y Exception";
 choices[38][1] = "Error y Catch";
 choices[38][2] = "Throw y Finally";
 choices[38][3] = "Error y Throw";
 answers[38] = choices[38][0];
 units[38] = "60";
 comments[38] = "Id Pregunta: 1953. NULL";


//  Id pregunta: 2338 AÃ±o de creación de pregunta: 2002-01-01
 questions[39]= "40)  En los Diagramas de Estructura de Datos utilizados para la representaci&oacute;n de un modelo l&oacute;gico relacional, las relaciones pueden tener cardinalidad:";
 choices[39]= new Array();
 choices[39][0] = "Uno-a-muchos";
 choices[39][1] = "Binaria";
 choices[39][2] = "Muchos-a-muchos";
 choices[39][3] = "Ninguna de las anteriores";
 answers[39] = choices[39][0];
 units[39] = "57,58,80";
 comments[39] = "Id Pregunta: 2338. ";


//  Id pregunta: 2738 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  Indique la afirmaci&oacute;n incorrecta";
 choices[40]= new Array();
 choices[40][0] = "Una relaci&oacute;n est&aacute; en segunda forma normal (2FN) solamente si todos los atributos son dependientes en forma completa de la clave.";
 choices[40][1] = "Cualquier relaci&oacute;n en primera forma normal que tiene una clave compuesta, est&aacute; autom&aacute;ticamente en segunda forma normal.";
 choices[40][2] = "Una relaci&oacute;n se encuentra en tercera forma normal (EFN) si no existen transitividades entre sus atributos y si ya se encuentra en 2 FN.";
 choices[40][3] = "Para poner una relaci&oacute;n en la cuarta forma normal debe estar en 3FN y deben existir una o m&aacute;s multidependencias.";
 answers[40] = choices[40][1];
 units[40] = "58";
 comments[40] = "Id Pregunta: 2738. ";


//  Id pregunta: 4211 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  Indique cu&aacute;l de las siguientes afirmaciones es cierta referida a la arquitectura de desarrollo  .NET";
 choices[41]= new Array();
 choices[41][0] = "Biz Talk Server no resulta adecuado si el proceso implica m&uacute;ltiples documentos y servicios";
 choices[41][1] = "En el dise&ntilde;o de la capa de datos se puede disponer de uno o m&aacute;s or&iacute;genes de datos de tipos diferentes";
 choices[41][2] = "Se facilita el mantenimiento de la aplicaci&oacute;n si los componentes l&oacute;gicos de acceso a datos invocan a otros componentes l&oacute;gicos de acceso a datos";
 choices[41][3] = "Los componentes de interfaz de usuario no pueden restringir los tipos de entrada de datos, ya que esto &uacute;nicamente se permite en la base de datos";
 answers[41] = choices[41][1];
 units[41] = "59,115";
 comments[41] = "Id Pregunta: 4211. ";


//  Id pregunta: 4279 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  &iquest;C&oacute;mo se definir&iacute;a en el sistema de gesti&oacute;n de base de datos Oracle la restricci&oacute;n de integridad: &ldquo;Los trienios de un empleado no pueden disminuir&rdquo;?";
 choices[42]= new Array();
 choices[42][0] = "Mediante la sentencia &lsquo;ALTER TABLE&rsquo;.";
 choices[42][1] = "Mediante un trigger.";
 choices[42][2] = "Mediante una constraint de tipo CHECK.";
 choices[42][3] = "No se pueden definir restricciones de ese tipo.";
 answers[42] = choices[42][1];
 units[42] = "58";
 comments[42] = "Id Pregunta: 4279. ";


//  Id pregunta: 4282 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  En miner&iacute;a de datos, un Esquema Estrella:";
 choices[43]= new Array();
 choices[43][0] = "No tiene en cuenta elementos temporales tales como la fecha asociada a la informaci&oacute;n.";
 choices[43][1] = "Es una forma de representar la arquitectura f&iacute;sica del sistema OLAP.";
 choices[43][2] = "Es una t&eacute;cnica de dise&ntilde;o de bases de datos relacionales que sirve para simular el funcionamiento de bases de datos multidimensionales.";
 choices[43][3] = "Representa la centralizaci&oacute;n de la informaci&oacute;n en un solo SGBD para posibilitar su explotaci&oacute;n ndimensional.";
 answers[43] = choices[43][2];
 units[43] = "68";
 comments[43] = "Id Pregunta: 4282. ";


//  Id pregunta: 4483 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  &iquest;Cual de las siguientes sentencias es falsa?";
 choices[44]= new Array();
 choices[44][0] = "Una aplicaci&oacute;n ASP.NET se corresponde con un directorio virtual y todos los objetos ASP.NET incluidos en el mismo directorio virtual constituyen una aplicaci&oacute;n ASP.NET";
 choices[44][1] = "ADO.NET es el servicio de acceso a datos asociado a ASP.NET";
 choices[44][2] = "ASP.NET ofrece dos grupos de controles: controles Web y controles HTML";
 choices[44][3] = "Un formulario ASP.NET es un archivo HTML que se guarda en un fichero con extensi&oacute;n .net";
 answers[44] = choices[44][3];
 units[44] = "59";
 comments[44] = "Id Pregunta: 4483. ";


//  Id pregunta: 4570 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  &iquest;Cuantos tipos de drivers existen en JDBC?:";
 choices[45]= new Array();
 choices[45][0] = "2";
 choices[45][1] = "3";
 choices[45][2] = "4";
 choices[45][3] = "tantos como SGBD's";
 answers[45] = choices[45][2];
 units[45] = "60";
 comments[45] = "Id Pregunta: 4570. NULL";


//  Id pregunta: 4603 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  El driver JDBC-ODBC bridge, se utiliza";
 choices[46]= new Array();
 choices[46][0] = "cuando no existen drivers JDBC nativos.";
 choices[46][1] = "Para garantizar el &eacute;xito de los accesos a la BD.";
 choices[46][2] = "como variable de Ia tecnolog&iacute;a ODBC.";
 choices[46][3] = "para implementar operaciones ODBC, traduci&eacute;ndolas en operaciones JDBC";
 answers[46] = choices[46][0];
 units[46] = "60";
 comments[46] = "Id Pregunta: 4603. NULL";


//  Id pregunta: 4912 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  Seg&uacute;n la arquitectura est&aacute;ndar de los SGBD, ANSI/X3/SPARC &iquest;en qu&eacute; nivel se define el esquema de la base dedatos?:";
 choices[47]= new Array();
 choices[47][0] = "Nivel conceptual.";
 choices[47][1] = "Nivel f&iacute;sico.";
 choices[47][2] = "Nivel de aplicaci&oacute;n.";
 choices[47][3] = "Nivel l&oacute;gico.";
 answers[47] = choices[47][0];
 units[47] = "57";
 comments[47] = "Id Pregunta: 4912. Examen TIC B 2007";


//  Id pregunta: 5030 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  Los sistemas de almacenes de bases de datos pueden implementarse utilizando diferentes tipos de esquemas f&iacute;sicos : ROLAP, MOLAP, HOLAP,etc. &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[48]= new Array();
 choices[48][0] = "En ROLAP, f&iacute;sicamente el almac&eacute;n de datos se construye sobre estructuras basadas en matrices multidimensionales.";
 choices[48][1] = "Ejemplos de sistemas MOLAP son: Informix Metacube u Oracle Discover.";
 choices[48][2] = "Ejemplos de sistema ROLAP son: Oracle Express o el Hyperion Enterprise.";
 choices[48][3] = "En MOLAP, f&iacute;sicamente el almac&eacute;n de datos se construye sobre estructuras basadas en matrices multidimensionales, produci&eacute;ndose correspondencia entre el nivel l&oacute;gico y el nivel f&iacute;sico lo que en general aporta especializaci&oacute;n que se traduce generalmente en mayor eficiencia.";
 answers[48] = choices[48][3];
 units[48] = "68";
 comments[48] = "Id Pregunta: 5030. Examen TIC A 2007";


//  Id pregunta: 5061 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  En Java 2 el operador &gt;&gt;:";
 choices[49]= new Array();
 choices[49][0] = "Desplaza bits del operando hacia la izquierda las posiciones indicadas";
 choices[49][1] = "Desplaza bits del operando hacia la derecha las posiciones indicadas (sin signo)";
 choices[49][2] = "Desplaza bits del operando hacia la derecha las posiciones indicadas (con signo)";
 choices[49][3] = "Realiza una operaci&oacute;n l&oacute;gica OR exclusiva entre los dos operandos";
 answers[49] = choices[49][2];
 units[49] = "60";
 comments[49] = "Id Pregunta: 5061. Examen TIC A 2007";


//  Id pregunta: 5123 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  &iquest;Qu&eacute; tipo de driver JDBC es aquel que convierte las llamadas JDBC a llamadas nativas de la base de datos?";
 choices[50]= new Array();
 choices[50][0] = "Tipo 1";
 choices[50][1] = "Tipo 2";
 choices[50][2] = "Tipo 3";
 choices[50][3] = "Tipo 4";
 answers[50] = choices[50][1];
 units[50] = "60";
 comments[50] = "Id Pregunta: 5123. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5128 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  &iquest;Cu&aacute;l es el modelo conceptual m&aacute;s extendido para los almacenes de datos?";
 choices[51]= new Array();
 choices[51][0] = "Relacional.";
 choices[51][1] = "Multidimensional.";
 choices[51][2] = "Espacial.";
 choices[51][3] = "Temporal.";
 answers[51] = choices[51][1];
 units[51] = "68";
 comments[51] = "Id Pregunta: 5128. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5424 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  En la arquitectura ANSI/X3 SPARC a tres niveles de BD, indicar cu&aacute;l de los esquemas citados acontinuaci&oacute;n no corresponde a dicha arquitectura";
 choices[52]= new Array();
 choices[52][0] = "Esquema externo";
 choices[52][1] = "Esquema legal";
 choices[52][2] = "Esquema conceptual";
 choices[52][3] = "Esquema interno";
 answers[52] = choices[52][1];
 units[52] = "57";
 comments[52] = "Id Pregunta: 5424. Castilla y Le&oacute;n";


//  Id pregunta: 5712 AÃ±o de creación de pregunta: 2009-01-01
 questions[53]= "54)  Referido a OLAP, &iquest;cu&aacute;l es el significado m&aacute;s aproximado de Drill-Across?";
 choices[53]= new Array();
 choices[53][0] = "Navegar hacia un mayor nivel de agregaci&oacute;n.";
 choices[53][1] = "Moverse entre cubos.";
 choices[53][2] = "Descender a un menor nivel de agregaci&oacute;n.";
 choices[53][3] = "Elecci&oacute;n del n&uacute;mero de dimensiones a visualizar.";
 answers[53] = choices[53][1];
 units[53] = "68";
 comments[53] = "Id Pregunta: 5712. ";


//  Id pregunta: 5735 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l de las siguientes no corresponde a una interfase del modelo de referencia de workflow de WfMC?:";
 choices[54]= new Array();
 choices[54][0] = "Herramientas de definici&oacute;n de procesos";
 choices[54][1] = "Funciones de representaci&oacute;n";
 choices[54][2] = "Herramientas de administraci&oacute;n y monitorizaci&oacute;n";
 choices[54][3] = "Aplicaciones invocadas";
 answers[54] = choices[54][1];
 units[54] = "71";
 comments[54] = "Id Pregunta: 5735. ";


//  Id pregunta: 5891 AÃ±o de creación de pregunta: 2009-01-01
 questions[55]= "56)  &iquest;Qu&eacute; tecnolog&iacute;a Java permite la invocaci&oacute;n de m&eacute;todos de un objeto remoto?";
 choices[55]= new Array();
 choices[55][0] = "RMI";
 choices[55][1] = "JNI";
 choices[55][2] = "JDBC";
 choices[55][3] = "JRM";
 answers[55] = choices[55][0];
 units[55] = "60";
 comments[55] = "Id Pregunta: 5891. NULL";


//  Id pregunta: 5899 AÃ±o de creación de pregunta: 2009-01-01
 questions[56]= "57)  &iquest;Qu&eacute; es JPA?";
 choices[56]= new Array();
 choices[56][0] = "Una tecnolog&iacute;a Java de acceso a bases de datos alternativa a JDBC y con la cu&aacute;l no tiene nada que ver";
 choices[56][1] = "Una tecnolog&iacute;a Java de acceso a bases de datos de mayor nivel que JDBC, en la cu&aacute;l se apoya";
 choices[56][2] = "Es la capa que soporta la portabilidad entre gestores de bases de datos en JDBC";
 choices[56][3] = "Ninguna de las anteriores";
 answers[56] = choices[56][1];
 units[56] = "60";
 comments[56] = "Id Pregunta: 5899. NULL";


//  Id pregunta: 6102 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  El lenguaje SQL92:";
 choices[57]= new Array();
 choices[57][0] = "Soporta la regla de integridad de entidad y en una tabla pueden existir dos filas iguales.";
 choices[57][1] = "Soporta la regla de integridad de entidad y en una tabla no pueden existir dos filas iguales.";
 choices[57][2] = "No soporta la regla de integridad de entidad y en una tabla pueden existir dos filas iguales.";
 choices[57][3] = "No soporta la regla de integridad de entidad y en una tabla no pueden existir dos filas iguales.";
 answers[57] = choices[57][0];
 units[57] = "58";
 comments[57] = "Id Pregunta: 6102. TIC A 2009";


//  Id pregunta: 6183 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  XPDL, XML Process Definition Language, dentro de los 5 interfaces que defini&oacute; la WfMC, podr&iacute;a encuadrarse dentro del interfaz n&uacute;mero:";
 choices[58]= new Array();
 choices[58][0] = "1";
 choices[58][1] = "2";
 choices[58][2] = "3";
 choices[58][3] = "4";
 answers[58] = choices[58][0];
 units[58] = "71";
 comments[58] = "Id Pregunta: 6183. NULL";


//  Id pregunta: 6240 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  &iquest;Cu&aacute;l de las siguientes es una propiedad del modelo conceptual?";
 choices[59]= new Array();
 choices[59][0] = "Complejo";
 choices[59][1] = "M&aacute;ximo";
 choices[59][2] = "Expl&iacute;cito en todas sus restricciones";
 choices[59][3] = "Informal";
 answers[59] = choices[59][2];
 units[59] = "57";
 comments[59] = "Id Pregunta: 6240. TICB-2009, bloque desarrollo";


//  Id pregunta: 6317 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  &iquest;Cu&aacute;l de las siguientes sentencias es cierta respecto a las bases de datos relacionales?";
 choices[60]= new Array();
 choices[60][0] = "Soportan las interrelaciones l&oacute;gicas entre los datos.";
 choices[60][1] = "No soportan el acceso directo a un registro espec&iacute;fico.";
 choices[60][2] = "Es complicado el acceso a varios registros relacionados con un registro simple.";
 choices[60][3] = "El acceso a los datos es l&oacute;gico, dependiente de las t&eacute;cnicas de instrumentaci&oacute;n f&iacute;sica.";
 answers[60] = choices[60][0];
 units[60] = "58";
 comments[60] = "Id Pregunta: 6317. ";


//  Id pregunta: 6325 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  Para modificar la estructura de una tabla en SQL";
 choices[61]= new Array();
 choices[61][0] = "No se puede modificar la estuctura de la tabla despu&eacute;s de que se ha puesto en producci&oacute;n.";
 choices[61][1] = "Las tablas se modifican con el comando UPDATE.";
 choices[61][2] = "Las tablas se modifican con el comando ALTER.";
 choices[61][3] = "Existen distintos comandos, pero lo importante es que la tabla est&eacute; vacia.";
 answers[61] = choices[61][2];
 units[61] = "58";
 comments[61] = "Id Pregunta: 6325. ";


//  Id pregunta: 7165 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  &iquest;Cu&aacute;l de las siguientes es una sentencia SQL de tipo DDL (Data Definition Language)?";
 choices[62]= new Array();
 choices[62][0] = "SELECT";
 choices[62][1] = "DROP";
 choices[62][2] = "INSERT";
 choices[62][3] = "DELETE";
 answers[62] = choices[62][1];
 units[62] = "58";
 comments[62] = "Id Pregunta: 7165. Examen TIC B 2009";


//  Id pregunta: 7298 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  SQL*Loader es una herramienta utilizada para qu&eacute; servidor de bases de datos:";
 choices[63]= new Array();
 choices[63][0] = "MySQL";
 choices[63][1] = "Oracle";
 choices[63][2] = "SQL Server";
 choices[63][3] = "Todas las opciones son correctas";
 answers[63] = choices[63][1];
 units[63] = "57";
 comments[63] = "Id Pregunta: 7298. NULL";


//  Id pregunta: 8178 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  WS-BPEL (Web Service Business Process Execution Language), versi&oacute;n 2.0:";
 choices[64]= new Array();
 choices[64][0] = "Consta de una notaci&oacute;n gr&aacute;fica standard y de un lenguaje ejecutable para especificar interacciones entre servicios web.";
 choices[64][1] = "Permite la especificaci&oacute;n de procesos de negocio abstractos, pero no de procesos de negocio ejecutables.";
 choices[64][2] = "Utiliza XML Schema y WSDL 1.1 para la definici&oacute;n de tipos de datos e interfaces de servicios en la definici&oacute;n de procesos.";
 choices[64][3] = "Es una notaci&oacute;n gr&aacute;fica para la definici&oacute;n de servicios web.";
 answers[64] = choices[64][2];
 units[64] = "71";
 comments[64] = "Id Pregunta: 8178. Examen TIC A1 2010";


//  Id pregunta: 8208 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  En una tabla de una base de datos relacional:";
 choices[65]= new Array();
 choices[65][0] = "La definici&oacute;n de un mayor n&uacute;mero de &iacute;ndices siempre supone mejora en el rendimiento de las operaciones de consulta.";
 choices[65][1] = "La definici&oacute;n de un mayor n&uacute;mero de &iacute;ndices siempre mejora el rendimiento de las operaciones de inserci&oacute;n.";
 choices[65][2] = "Nunca deben incluirse en los &iacute;ndices atributos que no forman parte de la cl&aacute;usula WHERE.";
 choices[65][3] = "Si las filas de un &iacute;ndice contienen todas las columnas referenciadas en el SELECT, se elimina la necesidad de acceder ala tabla.";
 answers[65] = choices[65][3];
 units[65] = "57, 58";
 comments[65] = "Id Pregunta: 8208. Examen TIC A1 2010";


//  Id pregunta: 8354 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  A partir de ASP.NET 2.0, &iquest;en qu&eacute; carpeta se guarda el c&oacute;digo compilado para controles, componentes y otro c&oacute;digo que pueda ser referenciado por la aplicaci&oacute;n (los archivos dll)?";
 choices[66]= new Array();
 choices[66][0] = "App_Data.";
 choices[66][1] = "Bin.";
 choices[66][2] = "App_WebReferences";
 choices[66][3] = "Compilation";
 answers[66] = choices[66][1];
 units[66] = "59,115";
 comments[66] = "Id Pregunta: 8354. Examen TIC A2 2010";


//  Id pregunta: 8459 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  &iquest;Cu&aacute;l de estos benchmarks se emplea para medir la capacidad de OLTP para una determinada configuraci&oacute;n hardware y software?";
 choices[67]= new Array();
 choices[67][0] = "TPC-C.";
 choices[67][1] = "TPC-R.";
 choices[67][2] = "TPC-H.";
 choices[67][3] = "TPC-A.";
 answers[67] = choices[67][0];
 units[67] = "68";
 comments[67] = "Id Pregunta: 8459. Analista Ayto. Madrid 2010";


//  Id pregunta: 8520 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  Tenemos las entidades &quot;opositor&quot; y &quot;oposici&oacute;n&quot; y sabemos que a los opositores se les permite apuntarse a varias oposiciones distintas. Si se quisiera crear el modelo conceptual de base de datos, &iquest;qu&eacute; relaci&oacute;n crear&iacute;a?:";
 choices[68]= new Array();
 choices[68][0] = "Una relaci&oacute;n N:M.";
 choices[68][1] = "Una relaci&oacute;n 1:N.";
 choices[68][2] = "Una relaci&oacute;n 1:1.";
 choices[68][3] = "El modelo conceptual no admite relaciones, s&oacute;lo el modelo relacional lo permite. ";
 answers[68] = choices[68][0];
 units[68] = "57, 58";
 comments[68] = "Id Pregunta: 8520. Examen TIC A2 2010 interna";


//  Id pregunta: 8618 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  Con el objeto de asegurar la integridad de los datos, es necesario que una de las funciones del sistema gestor de base de datos sea la gesti&oacute;n de las transacciones. &iquest;Qu&eacute; propiedades deben tener &eacute;stas?";
 choices[69]= new Array();
 choices[69][0] = "Autenticaci&oacute;n, confidencialidad, integridad y disponibilidad.";
 choices[69][1] = "Eficiencia, eficacia, rapidez y estabilidad.";
 choices[69][2] = "Atomicidad, consistencia, aislamiento y persistencia.";
 choices[69][3] = "Serializaci&oacute;n, indexaci&oacute;n, independencia y transparencia.";
 answers[69] = choices[69][2];
 units[69] = "57,58";
 comments[69] = "Id Pregunta: 8618. Examen TIC A2 2010 interna";


//  Id pregunta: 8644 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  &iquest;Cu&aacute;l es la definici&oacute;n correcta de 3FN?";
 choices[70]= new Array();
 choices[70][0] = "Una entidad est&aacute; en 3FN si est&aacute; en 2FN y todos los atributos que forman parte de las claves candidatas (atributos principales) tienen dependencia funcional completa respecto de &eacute;stas es decir, no hay dependencias funcionales de atributos no principales respecto de una parte de las claves.";
 choices[70][1] = "Una entidad est&aacute; en 3FN si est&aacute; en 2FN y lodos los atributos que no forman parte de las claves candidatas (atributos no principales) tienen dependencia funcional completa respecto de &eacute;stas, es decir, no hay dependencias funcionales de atributos no principales respecto de una parte de las claves Cada uno de los atributos de una entidad depende de toda la clave.";
 choices[70][2] = "Una entidad est&aacute; en 3FN si est&aacute; en 2FN y todos sus atributos principales dependen directamente de la clave primaria, es decir, no hay dependencias funcionales transitivas de atributos no principales respecto de las claves.";
 choices[70][3] = "Una entidad est&aacute; en 3FN si est&aacute; en 2FN y todos sus atributos no principales dependen directamente de la clave primaria, es decir, no hay dependencias funcionales transitivas de atributos no principales respecto de las claves.";
 answers[70] = choices[70][3];
 units[70] = "57 ,58";
 comments[70] = "Id Pregunta: 8644. Examen TIC A2 2010 interna";


//  Id pregunta: 8842 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)   De acuerdo con el modelo de cuadro de mando (Balanced Scorecard) de Kaplan y Nolan, &iquest;cu&aacute;l de las siguientes respuestas ser&iacute;a la correcta?";
 choices[71]= new Array();
 choices[71][0] = "La implantaci&oacute;n de un cuadro de mando se debe realizar estableciendo objetivos que se deben trasladar a indicadores o medidas espec&iacute;ficas.";
 choices[71][1] = "El cuadro de mando permite a los gestores priorizar las expectativas de los clientes sobre la situaci&oacute;n financiera de la organizaci&oacute;n.";
 choices[71][2] = "El cuadro de mando permite a los gestores priorizar la situaci&oacute;n financiera de la organizaci&oacute;n sobre las expectativas de los clientes.";
 choices[71][3] = "El cuadro de mando se establece teniendo en cuenta cinco perspectivas distintas: clientes, accionistas, perspectiva interna de la organizaci&oacute;n, innovaci&oacute;n-aprendizaje y perspectiva financiera.";
 answers[71] = choices[71][0];
 units[71] = "68";
 comments[71] = "Id Pregunta: 8842. Examen UC3M 2010";


//  Id pregunta: 8917 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  &iquest;Cu&aacute;ndo una relaci&oacute;n est&aacute; en Tercera Forma Normal?:";
 choices[72]= new Array();
 choices[72][0] = "Cuando est&aacute; en Segunda Forma Normal y adem&aacute;s no tiene grupos repetitivos.";
 choices[72][1] = "Cuando est&aacute; en Segunda Forma Normal y adem&aacute;s todos los atributos que no forman parte de la clave primaria tienen dependencia funcional completa respecto de cada una de las claves.";
 choices[72][2] = "Cuando est&aacute; en Segunda Forma Normal y adem&aacute;s no hay dependencias funcionales transitivas respecto de la clave primaria.";
 choices[72][3] = "Cuando est&aacute; en Segunda Forma Normal y la clave primaria no est&aacute; formada por un &uacute;nico atributo";
 answers[72] = choices[72][2];
 units[72] = "58";
 comments[72] = "Id Pregunta: 8917. Operador Ayto. Madrid 2010";


//  Id pregunta: 8929 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l de las siguientes es una operaci&oacute;n que implica un cambio en el n&uacute;mero de dimensiones contempladas en la visi&oacute;n de un sistema OLAP?";
 choices[73]= new Array();
 choices[73][0] = "Drill-Across.";
 choices[73][1] = "Drill-In.";
 choices[73][2] = "Roll-Up.";
 choices[73][3] = "Rotaci&oacute;n.";
 answers[73] = choices[73][2];
 units[73] = "68";
 comments[73] = "Id Pregunta: 8929. ";


//  Id pregunta: 8963 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  Uno de los instrumentos b&aacute;sicos de los Decision Support Systems orientados a modelos es:";
 choices[74]= new Array();
 choices[74][0] = "Procesos prueba-error.";
 choices[74][1] = "Informes resumen.";
 choices[74][2] = "Informes de excepci&oacute;n.";
 choices[74][3] = "Consultas ad-hoc.";
 answers[74] = choices[74][0];
 units[74] = "68";
 comments[74] = "Id Pregunta: 8963. ";


//  Id pregunta: 9040 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  &iquest;Cu&aacute;l de los siguientes es un motor para la creaci&oacute;n de servicios Web en Java?";
 choices[75]= new Array();
 choices[75][0] = "Apache Axis2";
 choices[75][1] = "Hibernate";
 choices[75][2] = "Struts";
 choices[75][3] = "TopLink";
 answers[75] = choices[75][0];
 units[75] = "60";
 comments[75] = "Id Pregunta: 9040. NULL";


//  Id pregunta: 9450 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  Seleccione la frase EQUIVOCADA acerca del &aacute;lgebra relacional.";
 choices[76]= new Array();
 choices[76][0] = "Los operadores b&aacute;sicos son uni&oacute;n, diferencia, producto cartesiano, proyecci&oacute;n y selecci&oacute;n.";
 choices[76][1] = "Los operadores uni&oacute;n y diferencia requieren que las relaciones operando est&eacute;n definidas sobre el mismo conjunto de atributos.";
 choices[76][2] = "El producto cartesiano de una relaci&oacute;n de orden&quot;n&quot; y &quot;x&quot; tuplas y otra relaci&oacute;n de orden &quot;m&quot; y &quot;z&quot; tuplas es una relaci&oacute;n de orden n*m y de (x+z) tuplas. (F, es de orden n+m y x*z tuplas)";
 choices[76][3] = "La operaci&oacute;n join sobre dos relaciones que presentan atributos comunes puede tener cero tuplas.";
 answers[76] = choices[76][2];
 units[76] = "58";
 comments[76] = "Id Pregunta: 9450. Examen AGE TIC A1 2011";


//  Id pregunta: 9607 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  &iquest;C&uacute;al de las siguientes caracter&iacute;sticas es propia de los sistemas de base de datos NoSQL?";
 choices[77]= new Array();
 choices[77][0] = "Soportan operaciones JOIN";
 choices[77][1] = " Garantizan completamente ACID";
 choices[77][2] = "Requieren estructuras fijas, como tablas";
 choices[77][3] = "Escalan bien horizontalmente";
 answers[77] = choices[77][3];
 units[77] = "58";
 comments[77] = "Id Pregunta: 9607. ";


//  Id pregunta: 9778 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  &iquest;Con qu&eacute; directiva se declara una p&aacute;gina maestra en ASP.Net?";
 choices[78]= new Array();
 choices[78][0] = "Master";
 choices[78][1] = "MasterPage";
 choices[78][2] = "Master.Page";
 choices[78][3] = "Page ";
 answers[78] = choices[78][0];
 units[78] = "59, 115";
 comments[78] = "Id Pregunta: 9778. Examen TIC A2 2013";


//  Id pregunta: 9920 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  &iquest;Cu&aacute;l de los siguientes es un Sistema Gestor de Bases de Datos Orientado a Objetos?";
 choices[79]= new Array();
 choices[79][0] = "Microsoft SQL Server.";
 choices[79][1] = "Versant.";
 choices[79][2] = "MariaDB.";
 choices[79][3] = "MySQL.";
 answers[79] = choices[79][1];
 units[79] = "57";
 comments[79] = "Id Pregunta: 9920. TIC A2, Examen 2013";


//  Id pregunta: 9922 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  Sean dos transacciones (T1 y T2), T1 con estampa de tiempo igual a 8 y T2 con estampa de tiempo igual a 10 (T1 es m&aacute;s antiguo que T2). Suponiendo que T2 tiene un bloqueo en un elemento y T1 pide bloqueo para ese mismo elemento, si aplicamos el enfoque WOUND-WAIT para resoluci&oacute;n del conflicto:";
 choices[80]= new Array();
 choices[80][0] = "T1 esperar&aacute; hasta que T2 se completa y libera su bloqueo.";
 choices[80][1] = "T1 se apropia del elemento que ten&iacute;a bloqueo T2. T2 se aborta y se reinicia usando la misma estampa de tiempo.";
 choices[80][2] = "T1 se reinicia con la misma estampa de tiempo y T2 se reprograma usando la misma estampa de tiempo.";
 choices[80][3] = "T1 se apropia del elemento que ten&iacute;a bloqueo T2. T2 se reinicia usando distinta estampa de tiempo.";
 answers[80] = choices[80][1];
 units[80] = "57";
 comments[80] = "Id Pregunta: 9922. TIC A2, Examen 2013";


//  Id pregunta: 9924 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  En una base de datos relacional en la que se tiene informaci&oacute;n guardada en una tabla de provincias y adem&aacute;s se dispone de una tabla de municipios donde parte de la clave es la provincia, &iquest;se puede borrar un elemento de la tabla de provincias manteniendo la integridad del sistema?";
 choices[81]= new Array();
 choices[81][0] = "Si, una vez que los municipios ya existen no hay ning&uacute;n problema.";
 choices[81][1] = "Si, aunque no podr&iacute;a dar de alta nuevos municipios de esa provincia.";
 choices[81][2] = "S&oacute;lo si no hay ninguna poblaci&oacute;n perteneciente a esa provincia.";
 choices[81][3] = "No, la tabla de provincias no puede cambiar ya que son un elemento estable.";
 answers[81] = choices[81][2];
 units[81] = "58";
 comments[81] = "Id Pregunta: 9924. TIC A2, Examen 2013";


//  Id pregunta: 9965 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  &iquest;Cu&aacute;l de las siguientes afirmaciones es FALSA respecto al lenguaje de programaci&oacute;n C# de la  plataforma .NET?";
 choices[82]= new Array();
 choices[82][0] = "En C# una clase puede heredar directamente de una sola clase primaria pero puede implementar cualquier n&uacute;mero de interfaces.";
 choices[82][1] = "C# no admite la aritm&eacute;tica con punteros de manera predeterminada, sin embargo, si utiliza la palabra clave unsafe, puede definir un contexto no seguro en el que se pueden utilizar punteros";
 choices[82][2] = "Los programas en C# pueden constar de uno o varios archivos, y cada archivo puede contener cero o varios espacios de nombres (namespaces).";
 choices[82][3] = "Un espacio de nombres (namespace) puede contener tipos tales como clases (classes), estructuras (structs), interfaces (interfaces), enumeraciones (enumerations) y delegados (delegates), pero no puede contener otros espacios de nombres (namespaces).";
 answers[82] = choices[82][3];
 units[82] = "59,115";
 comments[82] = "Id Pregunta: 9965. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";


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


//  Id pregunta: 10024 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  Se&ntilde;ale la afirmaci&oacute;n CORRECTA con respecto a un bean de sesi&oacute;n en JavaEE 7:";
 choices[84]= new Array();
 choices[84][0] = "Una aplicaci&oacute;n requerir&aacute; normalmente menos beans de sesi&oacute;n stateless que stateful para respaldar al mismo n&uacute;mero de clientes.";
 choices[84][1] = "Los stateful permiten compartir estado entre varios clientes.";
 choices[84][2] = "Un bean de sesi&oacute;n singleton es instanciado varias veces, seg&uacute;n necesidad, pero va a existir una copia (el singleton) todo el ciclo de vida de la aplicaci&oacute;n.";
 choices[84][3] = "Los stateful est&aacute;n respaldados por una base de datos y pueden implementar un servicio web.";
 answers[84] = choices[84][0];
 units[84] = "60";
 comments[84] = "Id Pregunta: 10024. TIC A2, Promoci&oacute;n Interna, 2013. Un stateless puede servirle a varios clientes. Stateful suele servir solo a 1 cliente.";


//  Id pregunta: 10168 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  En relaci&oacute;n con los operandos del &aacute;lgebra relacional, se cumple que:";
 choices[85]= new Array();
 choices[85][0] = "La Uni&oacute;n de las relaciones R y S puede aplicarse a&uacute;n cuando R y S no tengan igual grado y/o compatibilidad de dominios";
 choices[85][1] = "El Outer Join incluye en la relaci&oacute;n resultante las tuplas de una o ambas relaciones que en los atributos comunes no tienen valores iguales o correspondientes";
 choices[85][2] = "El grado de la relaci&oacute;n resultante de la Uni&oacute;n Natural o Natural Join entre dos relaciones R y S es igual al grado de R + el grado de S";
 choices[85][3] = "La intersecci&oacute;n es un operador fundamental del &aacute;lgebra relacional";
 answers[85] = choices[85][1];
 units[85] = "58";
 comments[85] = "Id Pregunta: 10168. ";


//  Id pregunta: 10222 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Conociendo que la variable es de tipo byte y su valor es 12, cual ser&aacute; el resultado de la sentencia:System.out.println(busca == 6 + 6 ? &quot;true&quot; : &quot;false&quot;);";
 choices[86]= new Array();
 choices[86][0] = "Da un error de compilaci&oacute;n";
 choices[86][1] = "TRUE";
 choices[86][2] = "FALSE";
 choices[86][3] = "12";
 answers[86] = choices[86][1];
 units[86] = "60";
 comments[86] = "Id Pregunta: 10222. NULL";


//  Id pregunta: 10228 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  Se&ntilde;ala las respuestas correctas sobre los objetos java.util.Vector y java.util.Hashtable:";
 choices[87]= new Array();
 choices[87][0] = "Un Vector puede almacenar referencias de objetos y tipos de datos primitivos";
 choices[87][1] = "Un Vector almacena referencias de objetos en el orden en que son a&ntilde;adidas";
 choices[87][2] = "A y B son ciertas";
 choices[87][3] = "La Hashtable almacena referencias de objetos en el orden en que son a&ntilde;adidas";
 answers[87] = choices[87][2];
 units[87] = "60";
 comments[87] = "Id Pregunta: 10228. La A es cierta tambi&eacute;n. As&iacute; que se cambia la C por la respuesta actual.";


//  Id pregunta: 10615 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  Marque la herramienta que no es una soluci&oacute;n ORM (Object-Relational Mapping):";
 choices[88]= new Array();
 choices[88][0] = "IBATIS";
 choices[88][1] = "Hibernate";
 choices[88][2] = "CODD";
 choices[88][3] = "Todas lo son.";
 answers[88] = choices[88][2];
 units[88] = "58";
 comments[88] = "Id Pregunta: 10615. ";


//  Id pregunta: 10621 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  Se&ntilde;ale la respuesta correcta:";
 choices[89]= new Array();
 choices[89][0] = "Para desarrollar una aplicaci&oacute;n distribuida en Java es imprescindible la utilizaci&oacute;n de un servidor de aplicaciones.";
 choices[89][1] = "Weblogic es un contenedor de servlets.";
 choices[89][2] = "Wildfly es la versi&oacute;n gratuita de Jboss.";
 choices[89][3] = "Spring es un m&oacute;dulo de Java EE.";
//  Id pregunta: 10624 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  Una sistema de gesti&oacute;n de base de datos NoSQL...";
 choices[90]= new Array();
 choices[90][0] = "&hellip; es un sistema de base de datos relacional que no utiliza SQL.";
 choices[90][1] = "&hellip; almacena sus datos en estructuras fijas (tablas).";
 choices[90][2] = "&hellip; garantiza completamente las propiedades ACID.";
 choices[90][3] = "&hellip; tienen como ventaja principal la gran escalabilidad y rendimiento.";
 answers[90] = choices[90][3];
 units[90] = "68";
 comments[90] = "Id Pregunta: 10624. ";


//  Id pregunta: 10798 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Apache Cassandra es:";
 choices[91]= new Array();
 choices[91][0] = "Un servidor de comunicaciones.";
 choices[91][1] = "Una base de datos NoSQL distribuida.";
 choices[91][2] = "Un sistema de claves privadas.";
 choices[91][3] = "Un protocolo de comunicaciones.";
 answers[91] = choices[91][1];
 units[91] = "57";
 comments[91] = "Id Pregunta: 10798. Examen GSI 2014";


//  Id pregunta: 10848 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Elija la respuesta correcta respecto Java EE 7:";
 choices[92]= new Array();
 choices[92][0] = "Para crear un nuevo servlet se debe invocar al procedimiento init ().";
 choices[92][1] = "Para destruir un servlet se debe invocar al m&eacute;todo destroy().";
 choices[92][2] = "La clase ServletConfig sirve para pasarle informaci&oacute;n al servlet durante su inicializaci&oacute;n.";
 choices[92][3] = "La clase ServletSession proporciona a las aplicaciones las herramientas para la gesti&oacute;n de la sesi&oacute;n.";
 answers[92] = choices[92][2];
 units[92] = "60, 116";
 comments[92] = "Id Pregunta: 10848. Examen GSI 2014";


//  Id pregunta: 10863 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  De acuerdo a las operaciones que se requieran desarrollar, los Data Marts pueden adoptar diversas arquitecturas, se&ntilde;ale la caracter&iacute;stica correspondiente a la arquitectura Top-Down:";
 choices[93]= new Array();
 choices[93][0] = "Se definen previamente los Data Marts (DM) y luego se integran en un Data Warehouse (DW) centralizado. Los DM se cargan a trav&eacute;s de procesos ETL.";
 choices[93][1] = "Se define previamente un DW y un DM principal que se cargan a trav&eacute;s de procesos ETL. El DW alimentar&aacute; a otros DW, y el DM principal alimentar&aacute; a otros DM.";
 choices[93][2] = "Se define una base de datos (BD) principal que se carga mediante procesos ETL desde todas las BD corporativas, esta BD alimenta en exclusiva a todos los DM y DW existentes.";
 choices[93][3] = "Primero se define el DW, el cual es cargado a trav&eacute;s de procesos ETL y luego este alimenta a los diferentes DM. Cada DM recibir&aacute; los datos que correspondan al tema/departamento que traten.";
 answers[93] = choices[93][3];
 units[93] = "68, 71";
 comments[93] = "Id Pregunta: 10863. Examen GSI 2014";


//  Id pregunta: 11038 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Qu&eacute; Base de Datos NO est&aacute; disponible para Linux?";
 choices[94]= new Array();
 choices[94][0] = "Oracle";
 choices[94][1] = "SQL Server";
 choices[94][2] = "PostgreSQL";
 choices[94][3] = "MySQL";
 answers[94] = choices[94][1];
 units[94] = "58";
 comments[94] = "Id Pregunta: 11038. ";


//  Id pregunta: 11041 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Qu&eacute; versi&oacute;n de Java incorpora de forma completa la librer&iacute;a JavaFX?";
 choices[95]= new Array();
 choices[95][0] = "5";
 choices[95][1] = "6";
 choices[95][2] = "7";
 choices[95][3] = "8";
 answers[95] = choices[95][3];
 units[95] = "60";
 comments[95] = "Id Pregunta: 11041. Viiene incluida desde la versi&oacute;n 7u6, pero no se incorpora de forma completa hasta la versi&oacute;n 8";


//  Id pregunta: 11216 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  El Java Plug-in:";
 choices[96]= new Array();
 choices[96][0] = " Dispone de un panel que permite configurar ciertos aspectos de seguridad y de gesti&oacute;n de certificados, entre otros.";
 choices[96][1] = "Sirve de puente entre los navegadores y los distintos entornos de ejecuci&oacute;n de java (JRE) que se hayan instalado en la m&aacute;quina cliente.";
 choices[96][2] = "Se incluye dentro del JRE.";
 choices[96][3] = "Todas las respuestas son verdaderas.";
 answers[96] = choices[96][3];
 units[96] = "60";
 comments[96] = "Id Pregunta: 11216. ";


//  Id pregunta: 11221 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Cu&aacute;l es el nombre de la biblioteca de clases del Framework de .NET?";
 choices[97]= new Array();
 choices[97][0] = "FCL";
 choices[97][1] = "CLR";
 choices[97][2] = "CLS";
 choices[97][3] = "JIT";
 answers[97] = choices[97][0];
 units[97] = "59";
 comments[97] = "Id Pregunta: 11221. ";


//  Id pregunta: 11531 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Entre las ventajas de los ensamblados en .NET, en relaci&oacute;n a las distintas versiones de una aplicaci&oacute;n, se puede citar:";
 choices[98]= new Array();
 choices[98][0] = "No existe ninguna ventaja con respecto a las versiones previas";
 choices[98][1] = "Se facilitan utilidades para poder instalar y desinstalar del registro los ensamblados.";
 choices[98][2] = "El CRL proporciona en tiempo de ejecuci&oacute;n, informaci&oacute;n sobre las incompatibilidades entre las distintas versiones de los ensamblados.";
 choices[98][3] = "Ninguna de las anteriores es cierta.";
 answers[98] = choices[98][3];
 units[98] = "59";
 comments[98] = "Id Pregunta: 11531. NULL";


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


