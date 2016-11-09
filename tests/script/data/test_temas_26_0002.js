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

//  Id pregunta: 755 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  En Java, respecto a la herencia de clases ...";
 choices[0]= new Array();
 choices[0][0] = "Es posible que una clase herede de m&aacute;s de una clase padre";
 choices[0][1] = "Una clase s&oacute;lo puede implementar un &uacute;nico interfaz";
 choices[0][2] = "La clase que hereda de una clase abstracta es siempre abstracta a su vez";
 choices[0][3] = "Todas las anteriores son falsas";
 answers[0] = choices[0][3];
 units[0] = "60";
 comments[0] = "Id Pregunta: 755. NULL";


//  Id pregunta: 760 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  En tecnolog&iacute;a microsoft, para trabajar con bases de datos,utilizaremos";
 choices[1]= new Array();
 choices[1][0] = "ODBC";
 choices[1][1] = "ADO";
 choices[1][2] = "OLE DB";
 choices[1][3] = "Cualquiera de los anteriores";
 answers[1] = choices[1][3];
 units[1] = "59";
 comments[1] = "Id Pregunta: 760. ";


//  Id pregunta: 785 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  &iquest;En qu&eacute; forma normal est&aacute; una tabla que no tiene grupos repetitivos,  en la que los atributos no principales dependan completamente de la clave principal, y dependan de otros atributos adem&aacute;s de la clave principal?:";
 choices[2]= new Array();
 choices[2][0] = "1FN";
 choices[2][1] = "2FN";
 choices[2][2] = "3FN";
 choices[2][3] = "Boyce-Cood";
 answers[2] = choices[2][1];
 units[2] = "58";
 comments[2] = "Id Pregunta: 785. SS-A 2004";


//  Id pregunta: 796 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;Qu&eacute; tecnolog&iacute;a para la creaci&oacute;n de p&aacute;ginas web din&aacute;micas puede correr sobre un servidor Windows 2008?:";
 choices[3]= new Array();
 choices[3][0] = "ASP.NET";
 choices[3][1] = "PHP";
 choices[3][2] = "Java EE (Servlets)";
 choices[3][3] = "Todas son v&aacute;lidas";
 answers[3] = choices[3][3];
 units[3] = "59";
 comments[3] = "Id Pregunta: 796. ";


//  Id pregunta: 857 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;Cu&aacute;l de las siguientes t&eacute;cnicas no es com&uacute;nmente utilizada para la extracci&oacute;n de informaci&oacute;n en un almac&eacute;n de datos?";
 choices[4]= new Array();
 choices[4][0] = "De consulta e informe.";
 choices[4][1] = "De an&aacute;lisis m&uacute;ltidimensional.";
 choices[4][2] = "De an&aacute;lisis predictivo.";
 choices[4][3] = "De inteligencia artificial.";
 answers[4] = choices[4][2];
 units[4] = "68";
 comments[4] = "Id Pregunta: 857. ";


//  Id pregunta: 929 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;Qu&eacute; es ROLAP?";
 choices[5]= new Array();
 choices[5][0] = "Una base de datos multidimensional.";
 choices[5][1] = "Un sistema de an&aacute;lisis on-line soportado por una base de datos relacional con extensiones multidimensionales.";
 choices[5][2] = "Una medida de rendimiento de los sistemas OLAP.";
 choices[5][3] = "Ninguna de las anteriores respuestas es correcta.";
 answers[5] = choices[5][1];
 units[5] = "68";
 comments[5] = "Id Pregunta: 929. ";


//  Id pregunta: 931 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Qu&eacute; es un applet de Java?:";
 choices[6]= new Array();
 choices[6][0] = "Una aplicaci&oacute;n escrita en Java";
 choices[6][1] = "Un control ActiveX";
 choices[6][2] = "Un programa de Java incrustado en una p&aacute;gina HTML";
 choices[6][3] = "Ninguna de las anteriores";
 answers[6] = choices[6][2];
 units[6] = "60";
 comments[6] = "Id Pregunta: 931. Se especifica en la pregunta que sea de Java, porque Flash tambi&eacute;n es un applet";


//  Id pregunta: 954 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  Comparando los conceptos de Groupware y CSCW (Computer Supported Cooperative Work):";
 choices[7]= new Array();
 choices[7][0] = "Groupware se refiere m&aacute;s a aspectos sociol&oacute;gicos y psicol&oacute;gicos";
 choices[7][1] = "CSCW aborda la tem&aacute;tica desde una perspectiva mucho m&aacute;s concreta y espec&iacute;fica";
 choices[7][2] = "Groupware se centra en las connotaciones tecnol&oacute;gicas, en aplicaciones concretas y en actividades grupales";
 choices[7][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[7] = choices[7][2];
 units[7] = "71";
 comments[7] = "Id Pregunta: 954. ";


//  Id pregunta: 1028 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Existen diversos tipos de modelos de datos convencionales:";
 choices[8]= new Array();
 choices[8][0] = "El modelo jer&aacute;rquico es m&aacute;s flexible que el de red o reticular";
 choices[8][1] = "El modelo relacional se basa en el &aacute;lgebra y c&aacute;lculo relacional";
 choices[8][2] = "Cronol&oacute;gicamente el modelo de red o reticular es anterior al jer&aacute;rquico";
 choices[8][3] = "En el modelo relacional se exige que el usuario conozca las vinculaciones entre entidades";
 answers[8] = choices[8][1];
 units[8] = "57";
 comments[8] = "Id Pregunta: 1028. ";


//  Id pregunta: 1035 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  El modelo de referencia ANSI establece cuales son los componentes del SGBD. Entre ellos no se encuentra:";
 choices[9]= new Array();
 choices[9][0] = "Sistema de control de transformaci&oacute;n de datos";
 choices[9][1] = "Interfaz lenguaje de datos de usuario";
 choices[9][2] = "Interfaz lenguaje de manipulaci&oacute;n de datos";
 choices[9][3] = "Interfaz lenguaje de datos interno";
 answers[9] = choices[9][2];
 units[9] = "57";
 comments[9] = "Id Pregunta: 1035. ";


//  Id pregunta: 1066 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  Elija el tipo de relaciones entre registros que el modelo en red es incapaz de mostrar:";
 choices[10]= new Array();
 choices[10][0] = "1 a 1";
 choices[10][1] = "1 a N";
 choices[10][2] = "N a M";
 choices[10][3] = "Es capaz de mostrar todas";
 answers[10] = choices[10][3];
 units[10] = "57";
 comments[10] = "Id Pregunta: 1066. ";


//  Id pregunta: 1101 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  En Java, cuando un programa deja de utilizar un objeto:";
 choices[11]= new Array();
 choices[11][0] = "El &quot;garbage collector&quot; lo elimina inmediatamente de la memoria";
 choices[11][1] = "Es necesario codificar la destrucci&oacute;n del objeto";
 choices[11][2] = "El objeto se destruye a s&iacute; mismo";
 choices[11][3] = "Ninguna de las anteriores";
 answers[11] = choices[11][3];
 units[11] = "60";
 comments[11] = "Id Pregunta: 1101. JCED - Preparatic XVII. El obj puede eliminarse cuando no hay referencias a &eacute;l.";


//  Id pregunta: 1198 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Java ME:";
 choices[12]= new Array();
 choices[12][0] = "Es una versi&oacute;n de la tecnolog&iacute;a Java2 para plataformas m&oacute;viles";
 choices[12][1] = "Es una version de la tecnolog&iacute;a Java2 orientada a electrodom&eacute;sticos";
 choices[12][2] = "Es una version de la tecnolog&iacute;a Java2 orientada a sistemas dom&oacute;ticos";
 choices[12][3] = "Todas las anteriores respuestas son falsas";
 answers[12] = choices[12][0];
 units[12] = "60";
 comments[12] = "Id Pregunta: 1198. NULL";


//  Id pregunta: 1251 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  La visi&oacute;n general que la empresa debe tener de toda la base de datos, corresponde al:";
 choices[13]= new Array();
 choices[13][0] = "Esquema conceptual";
 choices[13][1] = "Exquema externo";
 choices[13][2] = "Esquema interno";
 choices[13][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[13] = choices[13][0];
 units[13] = "57";
 comments[13] = "Id Pregunta: 1251. ";


//  Id pregunta: 1339 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  Seg&uacute;n la WfMC, un workflow se define como:";
 choices[14]= new Array();
 choices[14][0] = "Automatizaci&oacute;n de un procedimiento de negocio, durente la cual los documentos, la informaci&oacute;n o las tareas pasan de un participante a otro de acuerdo a un conjunto de reglas de procedimiento";
 choices[14][1] = "Una descripci&oacute;n de una pieza de trabajo que forma un paso l&oacute;gico dentro de un proceso";
 choices[14][2] = "La representaci&oacute;n del trabajo que tiene que ser procesado (por un participante) en el contexto de una actividad dentro de un proceso";
 choices[14][3] = "El software que controla la ejecuci&oacute;n de programas en los mainframes, enviando mensajes a las consolas cuando se detecta alguna incidencia";
 answers[14] = choices[14][0];
 units[14] = "71";
 comments[14] = "Id Pregunta: 1339. ";


//  Id pregunta: 1379 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  Un almac&eacute;n de datos o &quot;data warehouse&quot;:";
 choices[15]= new Array();
 choices[15][0] = "Integra datos de diferentes sistemas de informaci&oacute;n de la organizaci&oacute;n para permitir su an&aacute;lisis posterior por la Direcci&oacute;n.";
 choices[15][1] = "Recopila datos de diferentes &quot;data marts&quot; para permitir su an&aacute;lisis por la Direcci&oacute;n mediante herramientas OLAP.";
 choices[15][2] = "Integra todas las bases de datos que existen en una organizaci&oacute;n para su consulta por la Direcci&oacute;n.";
 choices[15][3] = "Es una base de datos que contiene metainformaci&oacute;n sobre las bases de datos que existen en la organizaci&oacute;n.";
 answers[15] = choices[15][0];
 units[15] = "68";
 comments[15] = "Id Pregunta: 1379. ";


//  Id pregunta: 1413 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  Una de las posibilidades clave de la estrategia .NET de Microsoft es el acceso remoto a objetos utilizando, entre otros protocolos, SOAP sobre HTTP. &iquest;Podr&iacute;a comentar qu&eacute; tecnolog&iacute;a de Microsoft, si bien no sobre HTTP, es la antecesora a .Net en este aspecto?:";
 choices[16]= new Array();
 choices[16][0] = "ODBC";
 choices[16][1] = "Visual Basic";
 choices[16][2] = "DCOM";
 choices[16][3] = "DNA";
 answers[16] = choices[16][2];
 units[16] = "59";
 comments[16] = "Id Pregunta: 1413. ";


//  Id pregunta: 1526 AÃ±o de creación de pregunta: 2003-01-01
 questions[17]= "18)  Dentro del &aacute;lgebra relacional, &iquest;qu&eacute; definici&oacute;n corresponde con la Uni&oacute;n Natural?";
 choices[17]= new Array();
 choices[17][0] = "Si X es un subconjunto de atributos de la relaci&oacute;n R, entonces la uni&oacute;n natural de R es la relaci&oacute;n formada por las columnas de R correspondientes a los atributos de X.";
 choices[17][1] = "La uni&oacute;n natural de dos relaciones R y S es el conjunto formado por todas las tuplas de R que no est&aacute;n en S. Este operador s&oacute;lo se puede aplicar a relaciones del mismo grado y con los mismos atributos.";
 choices[17][2] = "La uni&oacute;n natural de dos relaciones R y S, de grados m y n respectivamente es el conjunto formado por todas las posibles tuplas (mxn tuplas) de m+n elementos en las que los m primeros son de R y los n restantes pertenecen a S.";
 choices[17][3] = "Ninguna de las definiciones anteriores corresponde con la uni&oacute;n natural.";
 answers[17] = choices[17][3];
 units[17] = "58";
 comments[17] = "Id Pregunta: 1526. ";


//  Id pregunta: 1587 AÃ±o de creación de pregunta: 2003-01-01
 questions[18]= "19)  En el modelo de datos relacional, al conjunto no vac&iacute;o de atributos de una relaci&oacute;n cuyos valores sirven para referenciar la clave primaria de otra relaci&oacute;n del mismo dominio, se denomina:";
 choices[18]= new Array();
 choices[18][0] = "Superclave.";
 choices[18][1] = "Clave principal.";
 choices[18][2] = "Tupla m&uacute;ltiple.";
 choices[18][3] = "Clave ajena.";
 answers[18] = choices[18][3];
 units[18] = "58";
 comments[18] = "Id Pregunta: 1587. Junta Andaluc&iacute;a";


//  Id pregunta: 1588 AÃ±o de creación de pregunta: 2003-01-01
 questions[19]= "20)  En el modelo l&oacute;gico relacional, &iquest;qu&eacute; afirmaci&oacute;n es cierta?";
 choices[19]= new Array();
 choices[19][0] = "La clave candidata es la clave que el analista escoge entre todas las claves primarias y a las que no escoge se las denomina claves alternativas.";
 choices[19][1] = "La clave alternativa es la clave primaria pero que puede tomar valores nulos.";
 choices[19][2] = "La clave primaria tiene menos atributos que la clave candidata.";
 choices[19][3] = "La clave primaria es la clave que el analista escoge entre todas las claves candidatas y no puede adoptar bajo ninguna circunstancia el valor nulo.";
 answers[19] = choices[19][3];
 units[19] = "58";
 comments[19] = "Id Pregunta: 1588. ";


//  Id pregunta: 1590 AÃ±o de creación de pregunta: 2003-01-01
 questions[20]= "21)  En la arquitectura de tres niveles para el dise&ntilde;o de bases de datos establecida por el ANSI, &iquest;qu&eacute; nivel se ocupa de las reglas de integridad, claves e &iacute;ndices?";
 choices[20]= new Array();
 choices[20][0] = "Nivel f&iacute;sico.";
 choices[20][1] = "Nivel conceptual.";
 choices[20][2] = "Nivel Externo.";
 choices[20][3] = "Ninguno de los tres niveles se ocupa de las reglas de integridad, claves e &iacute;ndices, lo hace el administrador de la base de datos.";
 answers[20] = choices[20][0];
 units[20] = "57";
 comments[20] = "Id Pregunta: 1590. ";


//  Id pregunta: 1607 AÃ±o de creación de pregunta: 2003-01-01
 questions[21]= "22)  La ejecuci&oacute;n desde otro lenguaje de programaci&oacute;n, de un procedimiento escrito en SQL, se denomina:";
 choices[21]= new Array();
 choices[21][0] = "PL/SQL.";
 choices[21][1] = "JSQL.";
 choices[21][2] = "SQL embebido.";
 choices[21][3] = "SQL anfitri&oacute;n.";
 answers[21] = choices[21][2];
 units[21] = "58";
 comments[21] = "Id Pregunta: 1607. Junta Andaluc&iacute;a";


//  Id pregunta: 1609 AÃ±o de creación de pregunta: 2003-01-01
 questions[22]= "23)  La forma normal Boyce-Codd (FNBC):";
 choices[22]= new Array();
 choices[22][0] = " Es mas restrictiva que la 4FN; toda FNBC es 4FN.";
 choices[22][1] = "Es menos restrictiva que la 4FN; toda 4FN es FNBC.";
 choices[22][2] = "Se denomina indistintamente 5FN.";
 choices[22][3] = "Se denomina indistintamente 5FN+ (quinta forma normal ampliada).";
 answers[22] = choices[22][1];
 units[22] = "58";
 comments[22] = "Id Pregunta: 1609. Junta Andaluc&iacute;a";


//  Id pregunta: 1619 AÃ±o de creación de pregunta: 2003-01-01
 questions[23]= "24)  Qu&eacute; capas se pueden distinguir en la arquitectura de ODBC";
 choices[23]= new Array();
 choices[23][0] = "Cuatro: Aplicaci&oacute;n, administrador de or&iacute;genes de datos, controladores ODBC y or&iacute;genes de datos";
 choices[23][1] = "Tres: Aplicaci&oacute;n, ficherosy controlador basado en archivos";
 choices[23][2] = "Tres: Aplicaci&oacute;n, administrador y controlador ODBC basado en un sistema gestor de bases de datos";
 choices[23][3] = "Cuatro: Aplicaci&oacute;n, procesador, ficheros y controlador Driver Manager";
 answers[23] = choices[23][0];
 units[23] = "58";
 comments[23] = "Id Pregunta: 1619. ";


//  Id pregunta: 1631 AÃ±o de creación de pregunta: 2003-01-01
 questions[24]= "25)  Un debugger (depurador) de programas :";
 choices[24]= new Array();
 choices[24][0] = "Ensambla los distintos m&oacute;dulos de SW";
 choices[24][1] = "Ayuda a los programadores a localizar errores de programaci&oacute;n";
 choices[24][2] = "Escanea los archivos ejecutables para detectar virus";
 choices[24][3] = "Permite crear un CPU virtual donde ejercer las pruebas de Sw minimizando la penalizaci&oacute;n de rendimientos en la instalaci&oacute;n principal";
 answers[24] = choices[24][1];
 units[24] = "59";
 comments[24] = "Id Pregunta: 1631. ";


//  Id pregunta: 1681 AÃ±o de creación de pregunta: 2004-01-01
 questions[25]= "26)  Respecto a los cuatro tipos de drivers de JDBC, &iquest;Cu&aacute;l de ellos requiere la existencia de un servidor intermedio o middleware?";
 choices[25]= new Array();
 choices[25][0] = "Driver de tipo I";
 choices[25][1] = "Driver de tipo II";
 choices[25][2] = "Driver de tipo III";
 choices[25][3] = "Driver de tipo IV";
 answers[25] = choices[25][2];
 units[25] = "58";
 comments[25] = "Id Pregunta: 1681. ";


//  Id pregunta: 1759 AÃ±o de creación de pregunta: 2006-01-01
 questions[26]= "27)  En el entorno Microsoft.NET:";
 choices[26]= new Array();
 choices[26][0] = "MS SQL Server CompactEs una base datos empotrada, adaptada a aplicaciones m&oacute;viles u ocasionalmente conectadas.";
 choices[26][1] = "MS Web Deploy 3.0Es una herramienta para despliegue, gesti&oacute;n y migraci&oacute;on de aplicaciones complejas distribuidas compuestas por m&uacute;ltiples sitios, servidores o aplicaciones web.";
 choices[26][2] = "BizTalk ServerEs un ESB que permite la automatizacion de procesos de negocio, comunicando diferentes sistemas mediante mensajes en XML.";
 choices[26][3] = "Todas son correctas";
 answers[26] = choices[26][3];
 units[26] = "59";
 comments[26] = "Id Pregunta: 1759. ";


//  Id pregunta: 1767 AÃ±o de creación de pregunta: 2006-01-01
 questions[27]= "28)  En Java a una colecci&oacute;n de clases relacionadas se denomina:";
 choices[27]= new Array();
 choices[27][0] = "Superset o superconjunto.";
 choices[27][1] = "Package o paquete.";
 choices[27][2] = "Superclass o Superclase.";
 choices[27][3] = "Colection o Colecci&oacute;n.";
 answers[27] = choices[27][1];
 units[27] = "60";
 comments[27] = "Id Pregunta: 1767. NULL";


//  Id pregunta: 1771 AÃ±o de creación de pregunta: 2006-01-01
 questions[28]= "29)  Respecto a JNI";
 choices[28]= new Array();
 choices[28][0] = "Se sigue conservando la portabilidad universal";
 choices[28][1] = "Es la interfaz est&aacute;ndar de programaci&oacute;n para llamar a m&eacute;todos nativos escritos en otros lenguajes como C o C++.";
 choices[28][2] = " permite utilizar clases java desde aplicaciones nativas.";
 choices[28][3] = "B y C son correctas";
 answers[28] = choices[28][3];
 units[28] = "60";
 comments[28] = "Id Pregunta: 1771. NULL";


//  Id pregunta: 1815 AÃ±o de creación de pregunta: 2006-01-01
 questions[29]= "30)  &iquest;Qu&eacute; utilidad puede tener el Data Mining?";
 choices[29]= new Array();
 choices[29][0] = "Predecir valores futuros en base a los datos actuales.";
 choices[29][1] = "Descubrimiento de fraude.";
 choices[29][2] = "Descubrimiento de patrones en los datos.";
 choices[29][3] = "Todas las anteriores.";
 answers[29] = choices[29][3];
 units[29] = "68";
 comments[29] = "Id Pregunta: 1815. ";


//  Id pregunta: 1824 AÃ±o de creación de pregunta: 2006-01-01
 questions[30]= "31)  Las herramientas para la elaboraci&oacute;n de informes y listados, tanto en detalle como sobre informaci&oacute;n agregada, a partir de la informaci&oacute;n de los Datawarehouse y datamarts se conocen como herramientas de:";
 choices[30]= new Array();
 choices[30][0] = "OLAP.";
 choices[30][1] = "Query &amp; reporting.";
 choices[30][2] = "Cuadro de mando anal&iacute;tico.";
 choices[30][3] = "Datamining.";
 answers[30] = choices[30][1];
 units[30] = "68";
 comments[30] = "Id Pregunta: 1824. ";


//  Id pregunta: 1830 AÃ±o de creación de pregunta: 2006-01-01
 questions[31]= "32)  &iquest;Qu&eacute; son los Datamarts o supermercados de datos?";
 choices[31]= new Array();
 choices[31][0] = "Proporcionan informaci&oacute;n de c&oacute;mo se ha construido el almac&eacute;n de datos.";
 choices[31][1] = "Son datos muy resumidos para consultas frecuentes.";
 choices[31][2] = "Son lugares de Internet donde por una peque&ntilde;a cuota se puede obtener la  informaci&oacute;n solicitada.";
 choices[31][3] = "Son datos que est&aacute;n disponibles bajo una licencia Creative Commons.";
 answers[31] = choices[31][1];
 units[31] = "68";
 comments[31] = "Id Pregunta: 1830. ";


//  Id pregunta: 1832 AÃ±o de creación de pregunta: 2006-01-01
 questions[32]= "33)  OLAP significa:";
 choices[32]= new Array();
 choices[32][0] = "On-Line Automatic Prediction.";
 choices[32][1] = "On-Line Analytical Prediction.";
 choices[32][2] = "On-Line Automatic Processing.";
 choices[32][3] = "On-Line Analytical Processing.";
 answers[32] = choices[32][3];
 units[32] = "68";
 comments[32] = "Id Pregunta: 1832. ";


//  Id pregunta: 1847 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  Se&ntilde;ale la falsa:";
 choices[33]= new Array();
 choices[33][0] = "Bonita es un motor de workflow de sw libre que implementa las especificaciones de la WfMC.";
 choices[33][1] = "Evolution es un cliente para correo electr&oacute;nico y workgroup para sistemas Linux.";
 choices[33][2] = "JoNAS es un servidor de aplicaciones de SW libre";
 choices[33][3] = "Todas son incorrectas";
 answers[33] = choices[33][3];
 units[33] = "71";
 comments[33] = "Id Pregunta: 1847. ";


//  Id pregunta: 1848 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  ESTROFA:";
 choices[34]= new Array();
 choices[34][0] = "Especificaciones para el tratamiento de flujos automatizados";
 choices[34][1] = "Elaboradas por la COAXI hoy Consejo Superior de Administraci&oacute;n Electr&oacute;nica";
 choices[34][2] = "Elaboradas con el fin de homogeneizar terminolog&iacute;a y asesorar a los compradores p&uacute;blicos a la hora de la adquisici&oacute;n de productos de Data Warehouse";
 choices[34][3] = "Todos los anteriores";
 answers[34] = choices[34][0];
 units[34] = "71";
 comments[34] = "Id Pregunta: 1848. ";


//  Id pregunta: 1936 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  En JDBC &iquest;qu&eacute; tipo de driver no permite trabajar con applets?";
 choices[35]= new Array();
 choices[35][0] = "Driver Tipo 1";
 choices[35][1] = "Driver Tipo 2";
 choices[35][2] = "Driver Tipo 3";
 choices[35][3] = "Driver Tipo 4";
 answers[35] = choices[35][0];
 units[35] = "60";
 comments[35] = "Id Pregunta: 1936. NULL";


//  Id pregunta: 1947 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  La t&eacute;cnica que se emplea para la modelizaci&oacute;n sem&aacute;ntica de datos a la hora de dise&ntilde;ar un sistema de informaci&oacute;n, se denomina:";
 choices[36]= new Array();
 choices[36][0] = "Modelo Entidad/Relaci&oacute;n";
 choices[36][1] = "Diagrama de Flujo de Datos";
 choices[36][2] = "Diagrama de Contexto";
 choices[36][3] = "Modelo de Datos";
 answers[36] = choices[36][0];
 units[36] = "58";
 comments[36] = "Id Pregunta: 1947. ";


//  Id pregunta: 2051 AÃ±o de creación de pregunta: 2004-01-01
 questions[37]= "38)  En un modelo de datos jer&aacute;rquico";
 choices[37]= new Array();
 choices[37][0] = "Un registro no es subordinado directo de ning&uacute;n otro registro.";
 choices[37][1] = "Un registro es subordinado directo de c&oacute;mo m&aacute;ximo otro registro";
 choices[37][2] = "Un registro es subordinado directo de n registros, dependiendo de la topolog&iacute;a del modelo";
 choices[37][3] = "Los registros est&aacute;n organizados en una red de relaciones mediante un grafo";
 answers[37] = choices[37][1];
 units[37] = "57";
 comments[37] = "Id Pregunta: 2051. Pregunta Junta Andalucia - A";


//  Id pregunta: 2337 AÃ±o de creación de pregunta: 2002-01-01
 questions[38]= "39)  En los Diagramas de Estructura de Datos se representa la visi&oacute;n de los datos que tienen las aplicaciones inform&aacute;ticas y que se denomina:";
 choices[38]= new Array();
 choices[38][0] = "Esquema Conceptual";
 choices[38][1] = "Esquema Externo";
 choices[38][2] = "Esquema Interno";
 choices[38][3] = "Esquema Funcional";
 answers[38] = choices[38][1];
 units[38] = "58,80,81";
 comments[38] = "Id Pregunta: 2337. ";


//  Id pregunta: 2743 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  En el modelo entidad-relaci&oacute;n extendido el grado es:";
 choices[39]= new Array();
 choices[39][0] = "El n&uacute;mero de entidades que participan en una relaci&oacute;n";
 choices[39][1] = "Es el n&uacute;mero m&aacute;ximo de ocurrencias de cada tipo de entidad que pueden intervenir en una ocurrencia de la relaci&oacute;n que se est&aacute; tratando";
 choices[39][2] = "El n&uacute;mero de columnas de una tabla";
 choices[39][3] = "Es una propiedad o caracter&iacute;stica de un tipo de entidad";
 answers[39] = choices[39][0];
 units[39] = "58,80";
 comments[39] = "Id Pregunta: 2743. ";


//  Id pregunta: 3102 AÃ±o de creación de pregunta: 2002-01-01
 questions[40]= "41)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre SGBDDs no es correcta?:";
 choices[40]= new Array();
 choices[40][0] = "La indexaci&oacute;n por palabras es uno de los tipos fundamentales de algoritmos de indexaci&oacute;n";
 choices[40][1] = "La indexaci&oacute;n por campos es uno de los tipos fundamentales de algoritmos de indexaci&oacute;n";
 choices[40][2] = "Los procedimientos de b&uacute;squeda de los SGBDD se basan en la tecnolog&iacute;a de los ficheros inversos";
 choices[40][3] = "La indexaci&oacute;n por cadenas de palabras es uno de los tipos fundamentales de algoritmos de indexaci&oacute;n";
 answers[40] = choices[40][1];
 units[40] = "58";
 comments[40] = "Id Pregunta: 3102. ";


//  Id pregunta: 3656 AÃ±o de creación de pregunta: 2002-01-01
 questions[41]= "42)  Un applet de Java es:";
 choices[41]= new Array();
 choices[41][0] = "Un int&eacute;rprete del lenguaje Java";
 choices[41][1] = "Una rutina Java que se ejecuta en el servidor recibiendo datos del browser o navegador";
 choices[41][2] = "Un programa Java, generalmente referenciado en una p&aacute;gina HTML, que se ejecuta en el cliente";
 choices[41][3] = "Un programa Java que accede a una base de datos relacional";
 answers[41] = choices[41][2];
 units[41] = "60";
 comments[41] = "Id Pregunta: 3656. NULL";


//  Id pregunta: 3956 AÃ±o de creación de pregunta: 2003-01-01
 questions[42]= "43)  La depuraci&oacute;n (debug) de resultados intermedios durante la ejecuci&oacute;n de trabajos java:";
 choices[42]= new Array();
 choices[42][0] = "S&oacute;lo se permite desde la m&aacute;quina donde se ejecuta";
 choices[42][1] = "No se permite la ejecuci&oacute;n de paradas intermedias";
 choices[42][2] = "Hay una arquitectura que incluye depuraci&oacute;n en remoto";
 choices[42][3] = "No tiene sentido la depuraci&oacute;n en remoto";
 answers[42] = choices[42][2];
 units[42] = "60";
 comments[42] = "Id Pregunta: 3956. NULL";


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


//  Id pregunta: 4464 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  Indique cu&aacute;l de las siguientes afirmaciones sobre una base de datos OLAP es cierta:";
 choices[44]= new Array();
 choices[44][0] = "Cada datamart podr&aacute; tener unas medidas y dimensiones propias y diferentes a los dem&aacute;s.";
 choices[44][1] = "Todos los datamart deber&aacute;n tener las mismas medidas y dimensiones.";
 choices[44][2] = "Los datamart no tienen dimensiones.";
 choices[44][3] = "La dimensi&oacute;n de los datamart debe ser &uacute;nica, aunque las medidas pueden variar de unos datamart a otros.";
 answers[44] = choices[44][0];
 units[44] = "68";
 comments[44] = "Id Pregunta: 4464. ";


//  Id pregunta: 4482 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  Si consideramos el framework de Net &iquest;Que entender&iacute;amos por CTS( Common Type System, o Sistema de Tipos Com&uacute;n)?";
 choices[45]= new Array();
 choices[45][0] = "Es un est&aacute;ndar que establece como se representan los tipos de datos en memoria, independientemente del lenguaje que los defina.";
 choices[45][1] = "Es un sistema tipificado de Software";
 choices[45][2] = "Es un sistema com&uacute;n de tipos que permite interoperar entre distintas plataformas.";
 choices[45][3] = "Ninguna de las anteriores";
 answers[45] = choices[45][0];
 units[45] = "59";
 comments[45] = "Id Pregunta: 4482. ";


//  Id pregunta: 4519 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  Una herramienta inform&aacute;tica especialmente dise&ntilde;ada para ayudar a los usuarios a trabajar en colaboraci&oacute;n de la forma mas eficaz es";
 choices[46]= new Array();
 choices[46][0] = "Un Data-Warehouse";
 choices[46][1] = "Un Workflow";
 choices[46][2] = "Un Groupware";
 choices[46][3] = "Un OLAP";
 answers[46] = choices[46][2];
 units[46] = "71";
 comments[46] = "Id Pregunta: 4519. ";


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


//  Id pregunta: 4629 AÃ±o de creación de pregunta: 2007-01-01
 questions[48]= "49)  Se&ntilde;ale cu&aacute;l de los siguientes NO es un m&eacute;todo de almacenamiento OLAP.";
 choices[48]= new Array();
 choices[48][0] = "MOLAP.";
 choices[48][1] = "ROLAP.";
 choices[48][2] = "HOLAP.";
 choices[48][3] = "ZOLAP.";
 answers[48] = choices[48][3];
 units[48] = "68";
 comments[48] = "Id Pregunta: 4629. ";


//  Id pregunta: 4704 AÃ±o de creación de pregunta: 2007-01-01
 questions[49]= "50)  Un applet de Java se ejecutar&aacute; en casi cualquier navegador porque ..";
 choices[49]= new Array();
 choices[49][0] = "el servidor tiene un built-in de JVM.";
 choices[49][1] = "el navegador es capaz de interpretar el c&oacute;digo fuente";
 choices[49][2] = "el navegador tiene un built-in de JVM";
 choices[49][3] = "los applets no necesitan una JVM.";
 answers[49] = choices[49][2];
 units[49] = "60";
 comments[49] = "Id Pregunta: 4704. Examen 2006 JCYL";


//  Id pregunta: 4913 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  &iquest;Para cu&aacute;les de los siguientes sistemas se debe configurar la base de datos optimizando las inserciones, modificaciones y borrado de datos y asegurando un alto nivel de concurrencia?";
 choices[50]= new Array();
 choices[50][0] = "OLTP (sistemas transaccionales on line).";
 choices[50][1] = "DSS (sistemas de soporte a la decisi&oacute;n).";
 choices[50][2] = "Data Warehouse (almacenes de datos).";
 choices[50][3] = "ERP (sistemas de planificaci&oacute;n de recursos).";
 answers[50] = choices[50][0];
 units[50] = "68";
 comments[50] = "Id Pregunta: 4913. Examen TIC B 2007";


//  Id pregunta: 5155 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  En entornos Oracle, &iquest;cu&aacute;l de los siguientes NO es un componente de las herramientas Forms y Reports?";
 choices[51]= new Array();
 choices[51][0] = "Forms y Reports Developer (desarrollador)";
 choices[51][1] = "Forms y Reports Runtime (tiempo de ejecuci&oacute;n)";
 choices[51][2] = "Forms y Reports Compiler (compilador)";
 choices[51][3] = "Forms y Reports Designer (dise&ntilde;ador)";
 answers[51] = choices[51][3];
 units[51] = "58";
 comments[51] = "Id Pregunta: 5155. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5492 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  Respecto al DataSet de ADO.NET, se&ntilde;ala la falsa ";
 choices[52]= new Array();
 choices[52][0] = "se puedeutilizar con m&uacute;ltiples y distintos or&iacute;genes, excepto XML, que es su principal carencia";
 choices[52][1] = "Se compone de uno o mas DataTable";
 choices[52][2] = "Reproduce los elementos propios de un modelo de datos relacional";
 choices[52][3] = "est&aacute; expresamente dise&ntilde;ado para el acceso adatos independientemente del origen de datos. ";
 answers[52] = choices[52][0];
 units[52] = "59";
 comments[52] = "Id Pregunta: 5492. ";


//  Id pregunta: 5494 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  SWT (Standard Widget Toolkit)";
 choices[53]= new Array();
 choices[53][0] = "El rendimiento de la librer&iacute;a AWT es mejor que la de SWT";
 choices[53][1] = "Es una librer&iacute;a que proporciona funcionalidades de componentes gr&aacute;ficos  para la plataforma Eclipse.";
 choices[53][2] = "a y b son ciertas";
 choices[53][3] = "Se ha desarrollado puramente en Java";
 answers[53] = choices[53][1];
 units[53] = "60";
 comments[53] = "Id Pregunta: 5494. NULL";


//  Id pregunta: 5495 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  Los archivos EAR, seg&uacute;n la tecnolog&iacute;a Java EE:";
 choices[54]= new Array();
 choices[54][0] = "C&oacute;mprime s&oacute;lo archivos .class ";
 choices[54][1] = "Son un tipo de archivo JAR";
 choices[54][2] = "No existen tales archivos. S&oacute;lo hay archivos WAR";
 choices[54][3] = "Es un empaquetado de archivos XML";
 answers[54] = choices[54][1];
 units[54] = "60";
 comments[54] = "Id Pregunta: 5495. NULL";


//  Id pregunta: 5496 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  &iquest;Cu&aacute;les son los contenedores de la tecnolog&iacute;a Java EE?";
 choices[55]= new Array();
 choices[55][0] = "EJB Container y Web Container";
 choices[55][1] = "EJB Container, Web Container y Application Client Container";
 choices[55][2] = "b) y Applet Container";
 choices[55][3] = "Ninguna de las anteriores";
 answers[55] = choices[55][2];
 units[55] = "60";
 comments[55] = "Id Pregunta: 5496. NULL";


//  Id pregunta: 5784 AÃ±o de creación de pregunta: 2009-01-01
 questions[56]= "57)  En el framework .NET, &iquest;qu&eacute; c&oacute;digo se genera como salida del compilador just in time?";
 choices[56]= new Array();
 choices[56][0] = "Bytecode";
 choices[56][1] = "IL (intemediate language)";
 choices[56][2] = "C&oacute;digo m&aacute;quina";
 choices[56][3] = "C&oacute;digo ensamblador";
 answers[56] = choices[56][2];
 units[56] = "59";
 comments[56] = "Id Pregunta: 5784. MAP 2008 A2";


//  Id pregunta: 5894 AÃ±o de creación de pregunta: 2009-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes no corresponde a una tecnolog&iacute;a est&aacute;ndar Java?";
 choices[57]= new Array();
 choices[57][0] = "JSTL";
 choices[57][1] = "JavaScript";
 choices[57][2] = "JNDI";
 choices[57][3] = "JavaCard";
 answers[57] = choices[57][1];
 units[57] = "60";
 comments[57] = "Id Pregunta: 5894. NULL";


//  Id pregunta: 6198 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  &iquest;Cu&aacute;l es el framework para aplicaciones desarrolladas con Spring, asociado con el control y la gesti&oacute;n de la seguridad?";
 choices[58]= new Array();
 choices[58][0] = "Spring Security";
 choices[58][1] = "JSF";
 choices[58][2] = "Struts";
 choices[58][3] = "Jbuilder";
 answers[58] = choices[58][0];
 units[58] = "60, 116";
 comments[58] = "Id Pregunta: 6198. TIC-B 2009 bloque desarrollo";


//  Id pregunta: 6214 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  En una metodolog&iacute;a de dise&ntilde;o de bases de datos, &iquest;c&oacute;mo se llama la etapa cuyo objetivo es obtener una buena representaci&oacute;n de los recursos de informaci&oacute;n con independencia de los usuarios o el SGBD, y sin realizar consideraciones sobre la eficiencia?";
 choices[59]= new Array();
 choices[59][0] = "Dise&ntilde;o conceptual";
 choices[59][1] = "Dise&ntilde;o l&oacute;gico est&aacute;ndar";
 choices[59][2] = "Dise&ntilde;o l&oacute;gico espec&iacute;fico";
 choices[59][3] = "Dise&ntilde;o preliminar";
 answers[59] = choices[59][0];
 units[59] = "57";
 comments[59] = "Id Pregunta: 6214. TICB-2009, bloque desarrollo";


//  Id pregunta: 6242 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  &iquest;Cu&aacute;l de las siguientes APIs de JEE especifica la gesti&oacute;n de transacciones a trav&eacute;s de sistemas distribuidos?";
 choices[60]= new Array();
 choices[60][0] = "JNDE";
 choices[60][1] = "JNI";
 choices[60][2] = "JTA";
 choices[60][3] = "JAX";
 answers[60] = choices[60][2];
 units[60] = "60";
 comments[60] = "Id Pregunta: 6242. TICB-2009, bloque desarrollo";


//  Id pregunta: 6323 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  Toda sentencia SQL tiene al menos los siguientes elementos:";
 choices[61]= new Array();
 choices[61][0] = "SELECT, FROM";
 choices[61][1] = "SELECT, FROM y WHERE";
 choices[61][2] = "SELECT, FROM, o bien WHERE o bien HAVING";
 choices[61][3] = "SELECT, FROM y ORDER BY";
 answers[61] = choices[61][0];
 units[61] = "58";
 comments[61] = "Id Pregunta: 6323. ";


//  Id pregunta: 6328 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  La operaci&oacute;n de JOIN:";
 choices[62]= new Array();
 choices[62][0] = "Hace &uacute;nicamente el producto cartesiano.";
 choices[62][1] = "Realiza el producto cartesiano y elimina aquellas tuplas que tienen el mismo valor en los atributos comunes.";
 choices[62][2] = "Realiza el producto cartesiano y elimina aquellas tuplas que no tienen el mismo valor en los atributos comunes.";
 choices[62][3] = "Elimina los atributos que no est&aacute;n repetidos.";
 answers[62] = choices[62][2];
 units[62] = "58";
 comments[62] = "Id Pregunta: 6328. NULL";


//  Id pregunta: 6515 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  Se&ntilde;ale la afirmaci&oacute;n INCORRECTA con respecto al lenguaje de programaci&oacute;n Java:";
 choices[63]= new Array();
 choices[63][0] = "Una clase 'final' no puede tener clases que hereden de ella.";
 choices[63][1] = "Una clase abstracta (abstract) es una clase que puede tener clases que hereden de ella, pero no puede ser instanciada.";
 choices[63][2] = "Las variables y m&eacute;todos de instancia privados s&oacute;lo pueden ser accedidos desde dentro de la clase y desde las subclases. ";
 choices[63][3] = "No se permite herencia m&uacute;ltiple.";
 answers[63] = choices[63][2];
 units[63] = "60";
 comments[63] = "Id Pregunta: 6515. NULL";


//  Id pregunta: 7297 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  Indique cu&aacute;l de los siguientes es SW libre para miner&iacute;a de datos:";
 choices[64]= new Array();
 choices[64][0] = "SAS.";
 choices[64][1] = "Clementine.";
 choices[64][2] = "Weka.";
 choices[64][3] = "SPSS.";
 answers[64] = choices[64][2];
 units[64] = "68";
 comments[64] = "Id Pregunta: 7297. NULL";


//  Id pregunta: 8630 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  &iquest;Cu&aacute;l de las siguientes es una regla de Codd?";
 choices[65]= new Array();
 choices[65][0] = "Regla de la no subversi&oacute;n.";
 choices[65][1] = "Regla de la no concurrencia.";
 choices[65][2] = "Regla de la restricci&oacute;n.";
 choices[65][3] = "Regla de la no replicaci&oacute;n de Informaci&oacute;n.";
 answers[65] = choices[65][0];
 units[65] = "57, 58";
 comments[65] = "Id Pregunta: 8630. Examen TIC A2 2010 interna";


//  Id pregunta: 8637 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  Una relaci&oacute;n muchos a muchos traducida desde un esquema entidad/relaci&oacute;n a un esquema relacional:";
 choices[66]= new Array();
 choices[66][0] = "No tiene claves.";
 choices[66][1] = "Impl&iacute;citamente, contiene una agrupaci&oacute;n de las claves primarias de las entidades relacionadas.";
 choices[66][2] = "No puedo admitir atributos que no pertenezcan a una de las entidades asociadas.";
 choices[66][3] = "Conserva la clave de la entidad fuerte.";
 answers[66] = choices[66][1];
 units[66] = "57, 58";
 comments[66] = "Id Pregunta: 8637. Examen TIC A2 2010 interna";


//  Id pregunta: 8785 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  OLAP proporciona mayor velocidad de procesamiento en la sentencia SQL";
 choices[67]= new Array();
 choices[67][0] = "INSERT";
 choices[67][1] = "UPDATE";
 choices[67][2] = "DELETE";
 choices[67][3] = "SELECT";
 answers[67] = choices[67][3];
 units[67] = "57, 58";
 comments[67] = "Id Pregunta: 8785. Examen UPM A2 2011";


//  Id pregunta: 8799 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  &iquest;Con qu&eacute; siglas se identifica el Common Language Runtime de la plataforma .NET?";
 choices[68]= new Array();
 choices[68][0] = "CLRUN";
 choices[68][1] = "CLRNET";
 choices[68][2] = "COLR";
 choices[68][3] = "CLR";
 answers[68] = choices[68][3];
 units[68] = "59, 115";
 comments[68] = "Id Pregunta: 8799. Examen UPM A2 2011";


//  Id pregunta: 8805 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  En el contexto de Almac&eacute;n de datos (Data Warehouse) la creaci&oacute;n de subconjuntos de la informaci&oacute;n contenida en el Data Warehouse central o maestro, se identifica con...";
 choices[69]= new Array();
 choices[69][0] = "Data Marts.";
 choices[69][1] = "Metadata.";
 choices[69][2] = "Middleware.";
 choices[69][3] = "Cubos OLAP.";
 answers[69] = choices[69][0];
 units[69] = "68";
 comments[69] = "Id Pregunta: 8805. Examen UPM A2 2011";


//  Id pregunta: 8816 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  Una de las partes fundamentales de ADO.NET son los DataSets, los cuales contienen una serie de objetos formando una jerarqu&iacute;a, &iquest;cu&aacute;les son v&aacute;lidos?";
 choices[70]= new Array();
 choices[70][0] = "DataSet, DataTable, DataView, DataColumn, DataRow, DataRowView, DataRelation, Constraint";
 choices[70][1] = "DataSet, DataTable, DataView, DataColumn, DataRow, pero no DataRowView, ni DataRelation, ni Constraint";
 choices[70][2] = "ADOSet, ADOTable, ADOView, ADOColumn, ADORow, ADORowView, ADORelation, Constraint";
 choices[70][3] = "ADOSet, ADOTable, ADOView, ADOColumn, ADORow, pero no ADORowView, ni ADORelation, ni Constraint";
 answers[70] = choices[70][0];
 units[70] = "59";
 comments[70] = "Id Pregunta: 8816. Examen UPM A2 2011";


//  Id pregunta: 9039 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  &iquest;Qu&eacute; es en java una inner class?";
 choices[71]= new Array();
 choices[71][0] = "Es lo mismo que una clase abstracta";
 choices[71][1] = "Una clase declarada dentro de otra";
 choices[71][2] = "Una clase que no puede ser heredada";
 choices[71][3] = "Ninguno de los anteriores";
 answers[71] = choices[71][1];
 units[71] = "60";
 comments[71] = "Id Pregunta: 9039. NULL";


//  Id pregunta: 9454 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  Seg&uacute;n Codd, una entidad en la que todos los atributos dependen funcionalmente de la clave est&aacute;, al menos, en:";
 choices[72]= new Array();
 choices[72][0] = "Primera Forma Normal.";
 choices[72][1] = "Segunda Forma Normal.";
 choices[72][2] = "Tercera Forma Normal.";
 choices[72][3] = "Forma Normal de Boyce-Codd.";
 answers[72] = choices[72][0];
 units[72] = "58";
 comments[72] = "Id Pregunta: 9454. NULL";


//  Id pregunta: 9595 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  Para el concepto de struts, indique cu&aacute;l de las siguientes opciones es correcta:";
 choices[73]= new Array();
 choices[73][0] = "Struts es un framework que se basa en el patr&oacute;n MVC (Model View Controller) ";
 choices[73][1] = "Struts es un framework que se basa en la tecnolog&iacute;a JSF (Java Server Faces)";
 choices[73][2] = "Struts es un patr&oacute;n de dise&ntilde;o para plataformas .NET";
 choices[73][3] = "Struts es un patr&oacute;n de dise&ntilde;o para plataformas JEE ";
 answers[73] = choices[73][0];
 units[73] = "60";
 comments[73] = "Id Pregunta: 9595. Xunta Libre 2011";


//  Id pregunta: 9605 AÃ±o de creación de pregunta: 2014-01-01
 questions[74]= "75)  &iquest;Qu&eacute; base de datos usa un formato de almacenamiento XML?";
 choices[74]= new Array();
 choices[74][0] = "Oracle";
 choices[74][1] = "MongoDB";
 choices[74][2] = "eXist";
 choices[74][3] = "Redis";
 answers[74] = choices[74][2];
 units[74] = "58";
 comments[74] = "Id Pregunta: 9605. NULL";


//  Id pregunta: 9608 AÃ±o de creación de pregunta: 2014-01-01
 questions[75]= "76)  &iquest;Cual es una ventaja de los sistemas de base de datos NoSQL?";
 choices[75]= new Array();
 choices[75][0] = "Manejan eficientemente grandes cantidades de datos";
 choices[75][1] = "Ofrecen una gran eficiencia en operaciones en tiempo real";
 choices[75][2] = "Utilizan estructuras flexibles";
 choices[75][3] = "Todas las anteriores lo son";
 answers[75] = choices[75][3];
 units[75] = "58";
 comments[75] = "Id Pregunta: 9608. NULL";


//  Id pregunta: 9611 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  &iquest;Qu&eacute; es el FSQL?";
 choices[76]= new Array();
 choices[76][0] = "Una versi&oacute;n de SQL que se usa en la ingenier&iacute;a hacia adelante.";
 choices[76][1] = "Una versi&oacute;n de SQL que se usa para l&oacute;gica difusa";
 choices[76][2] = "Una versi&oacute;n de SQL que se usa para memorias asociativas";
 choices[76][3] = "Una versi&oacute;n de SQL que se usa en sistemas distribuidos";
 answers[76] = choices[76][1];
 units[76] = "58";
 comments[76] = "Id Pregunta: 9611. NULL";


//  Id pregunta: 9691 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  &iquest;Cu&aacute;l de las siguientes opciones representa tipos de modelos dimensionales?";
 choices[77]= new Array();
 choices[77][0] = "Modelo en estrella.";
 choices[77][1] = "Modelo Copo de nieve.";
 choices[77][2] = "Constelaciones.";
 choices[77][3] = "Todos son modelos dimensionales.";
 answers[77] = choices[77][3];
 units[77] = "68";
 comments[77] = "Id Pregunta: 9691. ";


//  Id pregunta: 9742 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  Con respecto al Entity Framework &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[78]= new Array();
 choices[78][0] = "Para usar Entity framework se requiere una versi&oacute;n del framework de .Net de 2.0, o superior.";
 choices[78][1] = "Entity framework es la implementaci&oacute;n del Modelo Vista Controlador (MVC) en .NET.";
 choices[78][2] = "El contexto en el Entity Framework es el punto de arranque dentro del espacio de nombres.";
 choices[78][3] = "Entity es una clase u objeto que representa los datos de la aplicaci&oacute;n.";
 answers[78] = choices[78][3];
 units[78] = "59";
 comments[78] = "Id Pregunta: 9742. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9750 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  &iquest;Cu&aacute;l de las siguientes respuestas se corresponde con una base de datos no SQL destinada a almacenar enormes cantidades de datos?";
 choices[79]= new Array();
 choices[79][0] = "Citrix";
 choices[79][1] = "Oracle";
 choices[79][2] = "MySql Extend";
 choices[79][3] = "Cassandra";
 answers[79] = choices[79][3];
 units[79] = "58";
 comments[79] = "Id Pregunta: 9750. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9959 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  ASP.NET proporciona varios modos de persistencia para las variables de sesi&oacute;n. Indique cu&aacute;l de las respuestas NO es un modo v&aacute;lido:";
 choices[80]= new Array();
 choices[80][0] = "InProc";
 choices[80][1] = "StateServer";
 choices[80][2] = "ClusterServer";
 choices[80][3] = "SqlServer";
 answers[80] = choices[80][2];
 units[80] = "59,115";
 comments[80] = "Id Pregunta: 9959. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";


//  Id pregunta: 9960 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  Seleccione la opci&oacute;n CORRECTA de entre las siguientes afirmaciones que hacen referencia al esquema de estrella";
 choices[81]= new Array();
 choices[81][0] = "Un esquema de estrella es un modelo de datos que tiene una tabla de dimensiones que contiene los datos para el an&aacute;lisis y est&aacute; rodeada de las tablas de hechos.";
 choices[81][1] = "En un esquema de estrella la tabla de hechos tendr&aacute; siempre una clave primaria simple";
 choices[81][2] = "Cuando a un esquema en estrella se aplican principios de normalizaci&oacute;n a una tabla de  dimensi&oacute;n, el resultado se conoce como esquema de copo de nieve.";
 choices[81][3] = "El esquema de estrella es un modelo dimensional implementado en una base de datos multidimensional";
 answers[81] = choices[81][2];
 units[81] = "68,71";
 comments[81] = "Id Pregunta: 9960. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";


//  Id pregunta: 9967 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  Seg&uacute;n la Workflow Management Coalition (WfMC) &iquest;cu&aacute;l de las siguientes funciones NO es caracter&iacute;stica de un Workflow?";
 choices[82]= new Array();
 choices[82][0] = "Funciones de Control de Procesos en Tiempo de ejecuci&oacute;n (Run-time Process Control Functions).";
 choices[82][1] = "Interacciones de Actividad en Tiempo de ejecuci&oacute;n (Run-time Activity Interactions).";
 choices[82][2] = "Distribuci&oacute;n e Interfaces del Sistema (Distribution &amp; System Interfaces).";
 choices[82][3] = "Lanzamiento de Procesos Programados (Scheduled Release Process).";
 answers[82] = choices[82][3];
 units[82] = "71";
 comments[82] = "Id Pregunta: 9967. Examen Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n, Servicio sanitario Extremadura, 2014";


//  Id pregunta: 9969 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  De las siguientes afirmaciones sobre XPDL seleccione la INCORRECTA:";
 choices[83]= new Array();
 choices[83][0] = "Permite escribir especificaciones de procesos Workflow de manera estandarizada";
 choices[83][1] = "Permite una representaci&oacute;n gr&aacute;fica de los procesos incluyendo coordenadas X e Y para cada nodo implementado.";
 choices[83][2] = "Proporciona una notaci&oacute;n gr&aacute;fica para facilitar la comunicaci&oacute;n humana entre usuarios";
 choices[83][3] = "Es un lenguaje de definici&oacute;n de Workflow creado por OASIS";
 answers[83] = choices[83][3];
 units[83] = "71";
 comments[83] = "Id Pregunta: 9969. Examen Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n, Servicio sanitario Extremadura, 2014";


//  Id pregunta: 9978 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  En el desarrollo de aplicaciones en .NET Framework disponemos de un Garbage Collector (recolector de basura). Indique cu&aacute;l de las siguientes afirmaciones es FALSA ";
 choices[84]= new Array();
 choices[84][0] = "La liberaci&oacute;n de un objeto en memoria es perfectamente posible sin intervenci&oacute;n expl&iacute;cita por parte del usuario ";
 choices[84][1] = "Para la liberaci&oacute;n expl&iacute;cita de memoria existen m&eacute;todos de finalizaci&oacute;n como Finalize() y Dispose()";
 choices[84][2] = "Se suele utilizar Dispose() cuando el objeto no se va a utilizar m&aacute;s definitivamente ";
 choices[84][3] = "Si se invoca expl&iacute;citamente el m&eacute;todo Dispose() de un objeto, este ser&aacute; liberado inmediatamente ";
 answers[84] = choices[84][3];
 units[84] = "59";
 comments[84] = "Id Pregunta: 9978. Examen TICA2, Xunta de GaliciA, 2011";


//  Id pregunta: 10016 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  La instrucci&oacute;n que aborta la transacci&oacute;n en un SGBD y la hace terminar en forma no exitosa se denomina:";
 choices[85]= new Array();
 choices[85][0] = "Undo.";
 choices[85][1] = "Rollback.";
 choices[85][2] = "Two Phase Commit.";
 choices[85][3] = "Commit.";
 answers[85] = choices[85][1];
 units[85] = "57";
 comments[85] = "Id Pregunta: 10016. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10026 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  El Entity Framework es:";
 choices[86]= new Array();
 choices[86][0] = "Un framework ORM (object-relational mapper) desarrollado por Microsoft e integrado en la plataforma .NET.";
 choices[86][1] = "Una utilidad que permite identificar las funcionalidades de un sistema inform&aacute;tico.";
 choices[86][2] = "Una herramienta de planificaci&oacute;n y gesti&oacute;n del software desarrollado por Microsoft.";
 choices[86][3] = "Un framework orientado a la realizaci&oacute;n de aplicaciones web implementado por Microsoft que respecta el modelo vista controlador.";
 answers[86] = choices[86][0];
 units[86] = "59";
 comments[86] = "Id Pregunta: 10026. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10163 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  En el modelo l&oacute;gico relacional, la cardinalidad de una relaci&oacute;n se corresponde con:";
 choices[87]= new Array();
 choices[87][0] = "N&uacute;mero de atributos de la relaci&oacute;n";
 choices[87][1] = "N&uacute;mero m&iacute;nimo de ocurrencias de una entidad que pueden participar en la relaci&oacute;n";
 choices[87][2] = "N&uacute;mero de entidades que participan en la relaci&oacute;n o asociaci&oacute;n";
 choices[87][3] = "N&uacute;mero de tuplas de la relaci&oacute;n";
 answers[87] = choices[87][3];
 units[87] = "58";
 comments[87] = "Id Pregunta: 10163. ";


//  Id pregunta: 10308 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  &iquest;Qu&eacute; es Transact-SQL?";
 choices[88]= new Array();
 choices[88][0] = "Un sistema gestor de base de datos de tipo NoSQL.";
 choices[88][1] = "Una extensi&oacute;n propietaria al est&aacute;ndar SQL.";
 choices[88][2] = "Una query que equivale a realizar consultas SELECT por lotes.";
 choices[88][3] = "Una biblioteca de clases para mapear objetos sobre una base de datos relacional.";
 answers[88] = choices[88][1];
 units[88] = "58";
 comments[88] = "Id Pregunta: 10308. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10826 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  Se&ntilde;ale en qu&eacute; nivel de aislamiento, definido en ANSI/ISO SQL, puede ocurrir el problema de lecturas sucias en un sistema gestor de bases de datos relacional (SGDBR):";
 choices[89]= new Array();
 choices[89][0] = "Serializable.";
 choices[89][1] = "Repeatable Read (lecturas repetibles).";
 choices[89][2] = "Read Committed (lecturas comprometidas).";
 choices[89][3] = "Read Uncommitted (lecturas no comprometidas).";
 answers[89] = choices[89][3];
 units[89] = "57, 58";
 comments[89] = "Id Pregunta: 10826. Examen GSI 2014";


//  Id pregunta: 10873 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  Respecto a la tecnolog&iacute;a de almacenamiento InnoDB se&ntilde;ale la respuesta afirmativa:";
 choices[90]= new Array();
 choices[90][0] = "InnoDB es una tecnolog&iacute;a de almacenamiento de datos de c&oacute;digo abierto para la base de datos Oracle.";
 choices[90][1] = "Es la tecnolog&iacute;a de almacenamiento de datos por defecto por el sistema administrador de bases de datos relacionales MySQL.";
 choices[90][2] = "Se basa en el c&oacute;digo ISAM.";
 choices[90][3] = "No permite las b&uacute;squedas denominadas full-text, que para conjuntos de datos grandes son mucho m&aacute;s eficientes.";
 answers[90] = choices[90][1];
 units[90] = "57";
 comments[90] = "Id Pregunta: 10873. Examen GSI 2014";


//  Id pregunta: 10874 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Cu&aacute;l de las siguientes NO es un tipo de declaraci&oacute;n v&aacute;lida en un trabajo basado en JCL:";
 choices[91]= new Array();
 choices[91][0] = "JOB";
 choices[91][1] = "COMMENT";
 choices[91][2] = "EXEC";
 choices[91][3] = "DD";
 answers[91] = choices[91][1];
 units[91] = "57, 58";
 comments[91] = "Id Pregunta: 10874. Examen GSI 2014";


//  Id pregunta: 10986 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  El 10 de enero de 2013 se public&oacute; una vulnerabilidad de d&iacute;a cero en Java 7 Update 10 y versiones anteriores de Java 7 que permit&iacute;a a un atacante escalar los privilegios de ejecuci&oacute;n de un applet. Se&ntilde;ale la opci&oacute;n INCORRECTA:";
 choices[92]= new Array();
 choices[92][0] = "Las vulnerabilidades de seguridad de Java han llevado a establecer un periodo mensual, los terceros viernes de cada mes, para los Oracle Java SE Critical Patch Updates.";
 choices[92][1] = "Las vulnerabilidades de seguridad de Java han llevado a Oracle a recomendar y facilitar la desactivaci&oacute;n de Java a partir de la versi&oacute;n 7 Update 10.";
 choices[92][2] = "Las vulnerabilidades de seguridad de Java han provocado que Oracle recomiende la desinstalaci&oacute;n de Java 6 de todos los equipos.";
 choices[92][3] = "Las vulnerabilidades de seguridad de Java han provocado que sea obligatorio firmar con un certificado reconocido los applets a partir de Java SE 7u21.";
 answers[92] = choices[92][0];
 units[92] = "60";
 comments[92] = "Id Pregunta: 10986. TIC A1 AGE 2014";


//  Id pregunta: 11042 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Cu&aacute;l de las siguientes afirmaciones acerca de los compiladores es correcta?";
 choices[93]= new Array();
 choices[93][0] = "Los compiladores AOT (Ahead-Of-Time) compilan a c&oacute;digo m&aacute;quina nativo antes de la ejecuci&oacute;n de la aplicaci&oacute;n";
 choices[93][1] = "Los compiladores JIT (Just in Time) compilan durante la ejecuci&oacute;n";
 choices[93][2] = "Los 2 respuestas anteriores son correctas";
 choices[93][3] = "Ninguna de las anteriores es correcta";
 answers[93] = choices[93][2];
 units[93] = "60";
 comments[93] = "Id Pregunta: 11042. ";


//  Id pregunta: 11220 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l de las siguientes no es una tecnolog&iacute;a de Microsoft .NET?";
 choices[94]= new Array();
 choices[94][0] = "Servicios: ASP.NET y WCF.";
 choices[94][1] = "Aplicaciones de escritorio: WinForms, WPF.";
 choices[94][2] = "Aplicaciones para dispositivos m&oacute;viles: Silverlait, WinFX.";
 choices[94][3] = "Aplicaciones en la nube: Azure.";
 answers[94] = choices[94][2];
 units[94] = "59";
 comments[94] = "Id Pregunta: 11220. ";


//  Id pregunta: 11224 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  En ADO.NET:";
 choices[95]= new Array();
 choices[95][0] = "Cualquier fuente de datos debe ser convertida a XML para ser accesible por Dataset";
 choices[95][1] = "DataReader proporciona un puente entre el objeto DataSet y el origen de datos.";
 choices[95][2] = "El DataSet contiene una colecci&oacute;n de uno o m&aacute;s objetos DataTable, formados por filas y columnas de datos pero sin incluir informaci&oacute;n de restricciones ni claves externas.";
 choices[95][3] = "ADO.NET Entity es un tipo de framework ORM.";
 answers[95] = choices[95][3];
 units[95] = "59";
 comments[95] = "Id Pregunta: 11224. ";


//  Id pregunta: 11509 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Cu&aacute;l de los siguientes NO hace referencia a un proyecto de Big Data?";
 choices[96]= new Array();
 choices[96][0] = "Flume";
 choices[96][1] = "Cassandra";
 choices[96][2] = "Galenicum";
 choices[96][3] = "Hbase";
 answers[96] = choices[96][2];
 units[96] = "68";
 comments[96] = "Id Pregunta: 11509. NULL";


//  Id pregunta: 11511 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Cu&aacute;l de los siguientes sistemas de Big Data es utilizado por el Red Social Facebook?";
 choices[97]= new Array();
 choices[97][0] = "Hive";
 choices[97][1] = "Cassandra";
 choices[97][2] = "Hbase";
 choices[97][3] = "ZoneKeeper";
 answers[97] = choices[97][2];
 units[97] = "68";
 comments[97] = "Id Pregunta: 11511. NULL";


//  Id pregunta: 11512 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Indique la FALSA respecto al concepto MapReduce.";
 choices[98]= new Array();
 choices[98][0] = "Es un paradigma de programaci&oacute;n utilizado en plataformas de Big Data";
 choices[98][1] = "Adem&aacute;s de los procesos Map y Reduce, incorpora una fase intermedia de Shuffle que permite balancear la carga de las tuplas de entrada.";
 choices[98][2] = "El proceso Map consiste en tomar las salidas del proceso Reduce y combina dichas tuplas en un conjunto m&aacute;s peque&ntilde;o.";
 choices[98][3] = "Proceso Map toma un conjunto de datos y lo convierte en otro conjunto, separando los elementos indiviudales en tuplas (pares clave/valor)";
 answers[98] = choices[98][2];
 units[98] = "68";
 comments[98] = "Id Pregunta: 11512. NULL";


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


