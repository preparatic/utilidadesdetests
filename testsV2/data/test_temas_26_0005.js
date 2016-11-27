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

//  Id pregunta: 733 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  El Administrador de una base de datos no tiene las siguientes responsabilidades:";
 choices[0]= new Array();
 choices[0][0] = "Optimizaci&oacute;n de las redundancias del espacio de almacenamiento";
 choices[0][1] = "Garantizar la seguridad f&iacute;sica de los datos ante fallos en el sistema, por ejemplo ca&iacute;das de tensi&oacute;n";
 choices[0][2] = "Participar en el dise&ntilde;o f&iacute;sico de los datos, definiendo la estructura f&iacute;sica de los &eacute;stos a partir del modelo de datos o de clases";
 choices[0][3] = "Determinar la interfaz de conexi&oacute;n con otros sistemas ya existentes";
 answers[0] = choices[0][3];
 units[0] = "57";
 comments[0] = "Id Pregunta: 733. Examen TIC MAP B 2004";


//  Id pregunta: 800 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Qu&eacute; versi&oacute;n de la API JDBC de Sun incorpora un  gestor de 'pool' de conexiones con el sistema gestor de base de datos?:";
 choices[1]= new Array();
 choices[1][0] = "JDBC 1.0";
 choices[1][1] = "JDBC 1.5";
 choices[1][2] = "JDBC 1.8";
 choices[1][3] = "JDBC 2.0";
 answers[1] = choices[1][3];
 units[1] = "57";
 comments[1] = "Id Pregunta: 800. ";


//  Id pregunta: 812 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  ALGOL, COBOL y FORTRAN son lenguajes de programaci&oacute;n de la d&eacute;cada de los:";
 choices[2]= new Array();
 choices[2][0] = "40s";
 choices[2][1] = "50s";
 choices[2][2] = "60s";
 choices[2][3] = "70s";
 answers[2] = choices[2][1];
 units[2] = "57";
 comments[2] = "Id Pregunta: 812. ";


//  Id pregunta: 936 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;Qu&eacute; norma de las que se relacionan a continuaci&oacute;n afecta a SQL?:";
 choices[3]= new Array();
 choices[3][0] = "ISO 9075";
 choices[3][1] = "ISO 9003";
 choices[3][2] = "ANSI 9003";
 choices[3][3] = "IEEE 9003";
 answers[3] = choices[3][0];
 units[3] = "58";
 comments[3] = "Id Pregunta: 936. ";


//  Id pregunta: 945 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  Bill Inmon, padre del Data Warehousing, define &eacute;ste como:";
 choices[4]= new Array();
 choices[4][0] = "Una colecci&oacute;n de datos orientada a materias, integrada, no vol&aacute;til y variante en el tiempo, destinada a ayudar a la toma de decisiones de gesti&oacute;n.";
 choices[4][1] = "Un sistema autom&aacute;tico de ayuda a la decisi&oacute;n que implanta la teor&iacute;a de la decisi&oacute;n multicriterio discreta.";
 choices[4][2] = "Una secuencia convergente de refinamientos sobre un conjunto diverso de soluciones a un problema de gesti&oacute;n.";
 choices[4][3] = "Ninguna de las afirmaciones anteriores es correcta.";
 answers[4] = choices[4][0];
 units[4] = "68";
 comments[4] = "Id Pregunta: 945. ";


//  Id pregunta: 950 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  Codd  estableci&oacute; en 1986 doce principios, de los cuales al menos seis deben satisfacerse para que una base de datos pueda considerarse totalmente relacional. Entre ellos est&aacute;n:";
 choices[5]= new Array();
 choices[5][0] = "Acceso garantizado, cat&aacute;logo din&aacute;mico e independencia f&iacute;sica de los datos";
 choices[5][1] = "Gesti&oacute;n de una base de datos relacional, representaci&oacute;n de la informaci&oacute;n y regla de inversi&oacute;n";
 choices[5][2] = "Independencia de integridad, distribuci&oacute;n dependiente y sublenguaje global de datos";
 choices[5][3] = "Actualizaci&oacute;n de vistas, inserciones de alto nivel y n&uacute;cleo funcional independiente";
 answers[5] = choices[5][0];
 units[5] = "58";
 comments[5] = "Id Pregunta: 950. ";


//  Id pregunta: 968 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Cuando en las entidades descritas en el modelo de datos existe una dependencia funcional de los atributos de todos los atributos que componen la clave, se dice que el modelo est&aacute; normalizado:";
 choices[6]= new Array();
 choices[6][0] = "En segunda forma normal";
 choices[6][1] = "En primera forma normal";
 choices[6][2] = "En tercera forma normal";
 choices[6][3] = "En cuarta forma normal";
 answers[6] = choices[6][0];
 units[6] = "58";
 comments[6] = "Id Pregunta: 968. ";


//  Id pregunta: 1067 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  Elija la respuesta falsa respecto de OLAP.";
 choices[7]= new Array();
 choices[7][0] = "Implica el uso de t&eacute;cnicas multidimensionales.";
 choices[7][1] = "Realiza el an&aacute;lisis Offline de los datos.";
 choices[7][2] = "Puede utilizar bases de datos relacionales.";
 choices[7][3] = "Puede presentar vistas de los datos en un numero reducido de dimensiones.";
 answers[7] = choices[7][1];
 units[7] = "68";
 comments[7] = "Id Pregunta: 1067. ";


//  Id pregunta: 1104 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  En la arquitectura ANSI/X3 SPARC a tres niveles de BD, indicar cu&aacute;l de los esquemas citados a continuaci&oacute;n no corresponde a dicha arquitectura:";
 choices[8]= new Array();
 choices[8][0] = "Esquema externo";
 choices[8][1] = "Esquema legal";
 choices[8][2] = "Esquema conceptual";
 choices[8][3] = "Esquema interno";
 answers[8] = choices[8][1];
 units[8] = "57";
 comments[8] = "Id Pregunta: 1104. ";


//  Id pregunta: 1128 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  En relaci&oacute;n con el diccionario de recursos de informaci&oacute;n de una base de datos, se define 'metadatos' como:";
 choices[9]= new Array();
 choices[9][0] = "El repositorio que contiene todos los datos de la organizaci&oacute;n";
 choices[9][1] = "La informaci&oacute;n relativa al propio diccionario de datos, su estructura y sus caracter&iacute;sticas";
 choices[9][2] = "La informaci&oacute;n de nivel conceptual que determina la visi&oacute;n global del sistema de informaci&oacute;n";
 choices[9][3] = "El conjunto de datos necesarios para deducir determinada informaci&oacute;n no especificada en la base de datos";
 answers[9] = choices[9][1];
 units[9] = "57";
 comments[9] = "Id Pregunta: 1128. ";


//  Id pregunta: 1131 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  En relaci&oacute;n con las caracter&iacute;sticas de una tabla de estructura relacional, indique cu&aacute;l de las siguientes afirmaciones es cierta:";
 choices[10]= new Array();
 choices[10][0] = "Cada columna debe estar identificada por un nombre espec&iacute;fico";
 choices[10][1] = "Un mismo dominio podr&aacute; servir para definir los valores de varias columnas diferentes";
 choices[10][2] = "Cada columna debe extraer sus valores de un dominio";
 choices[10][3] = "Todas las respuestas anteriores son ciertas";
 answers[10] = choices[10][3];
 units[10] = "58";
 comments[10] = "Id Pregunta: 1131. ";


//  Id pregunta: 1204 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  La 3FN (Tercera Forma Normal), definida por Codd, dice:";
 choices[11]= new Array();
 choices[11][0] = "Una relaci&oacute;n est&aacute; en 3FN (Tercera Forma Normal), si no incluye ning&uacute;n grupo repetitivo";
 choices[11][1] = "Una relaci&oacute;n est&aacute; en 3FN (Tercera Forma Normal), si todos los atributos que no forman parte de la clave primaria son mutuamente independientes y dependen funcionalmente de forma completa de la clave";
 choices[11][2] = "Una relaci&oacute;n est&aacute; en 3FN (Tercera Forma Normal), si est&aacute; en 2FN (Segunda Forma Normal) y adem&aacute;s cualquiera de sus atributos no primarios tienen una dependencia plena con cada una de las claves y no con partes de &eacute;sta";
 choices[11][3] = "Elimina dependencias multivaluadas";
 answers[11] = choices[11][1];
 units[11] = "58";
 comments[11] = "Id Pregunta: 1204. NULL";


//  Id pregunta: 1260 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Las principales caracter&iacute;sticas de un almac&eacute;n de datos son:";
 choices[12]= new Array();
 choices[12][0] = "Organizado en torno a procesos, integrado, inpendiente del tiempo, no volatil";
 choices[12][1] = "Organizado en torno a temas, integrado, independiente del tiempo, volatil";
 choices[12][2] = "Organizado en torno a temas, integrado, dependiente del tiempo, no volatil";
 choices[12][3] = "Organizado en torno a procesos, integrado, dependiente del tiempo, volatil";
 answers[12] = choices[12][2];
 units[12] = "68";
 comments[12] = "Id Pregunta: 1260. NULL";


//  Id pregunta: 1270 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Los applets de Java se ejecutan en el:";
 choices[13]= new Array();
 choices[13][0] = "Servidor web";
 choices[13][1] = "Cliente web";
 choices[13][2] = "Servidor de base de datos";
 choices[13][3] = "Servidor de webmail";
 answers[13] = choices[13][1];
 units[13] = "60";
 comments[13] = "Id Pregunta: 1270. NULL";


//  Id pregunta: 1297 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  Para cuantificar el movimiento existente entre la entrada a una base de datos orientada a objetos y la salida se emplean dos sistemas. El denominado 'din&aacute;mica d&eacute;bil' se caracteriza por:";
 choices[14]= new Array();
 choices[14][0] = "Considerar la creaci&oacute;n y destrucci&oacute;n de objetos";
 choices[14][1] = "Definir el tiempo de vida de los objetos como el intervalo de existencia asociado a los mismos";
 choices[14][2] = "Reflejar el movimiento y cambios de valor de los atributos variables";
 choices[14][3] = "Modificar la sociedad de objetos entre s&iacute;, pero no la observabilidad de los mismos";
 answers[14] = choices[14][2];
 units[14] = "57";
 comments[14] = "Id Pregunta: 1297. ";


//  Id pregunta: 1365 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  Si hablamos de formas normales en el modelo relacional, una de las siguientes afirmaciones es falsa:";
 choices[15]= new Array();
 choices[15][0] = "Una informaci&oacute;n est&aacute; en primera forma normal si no incluye ning&uacute;n grupo repetitivo";
 choices[15][1] = "La cuarta forma normal elimina dependencias monovaluadas";
 choices[15][2] = "La segunda forma normal, implica, adem&aacute;s de estar en primera forma normal, que en una relaci&oacute;n cualquiera de sus atributos no primarios tienen una dependencia plena con cada una de las claves, y no con partes de &eacute;stas";
 choices[15][3] = "La quinta forma normal elimina dependencias combinacionales";
 answers[15] = choices[15][1];
 units[15] = "58";
 comments[15] = "Id Pregunta: 1365. ";


//  Id pregunta: 1371 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  Si una relaci&oacute;n no posee grupos repetitivos y cada atributo que no pertenezca a la clave es identificado &uacute;nicamente y de forma total por la clave se dice que est&aacute; en:";
 choices[16]= new Array();
 choices[16][0] = "Primera forma normal";
 choices[16][1] = "Segunda forma normal";
 choices[16][2] = "Tercera forma normal";
 choices[16][3] = "Forma normal de Boyce-Codd";
 answers[16] = choices[16][1];
 units[16] = "58";
 comments[16] = "Id Pregunta: 1371. ";


//  Id pregunta: 1407 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Una asociaci&oacute;n entre entidades es reflexiva cuando:";
 choices[17]= new Array();
 choices[17][0] = "El n&uacute;mero de entidades que participan en la asociaci&oacute;n es mayor que 2";
 choices[17][1] = "La cardinalidad de la asociaci&oacute;n es l";
 choices[17][2] = "Tiene &uacute;nicamente un atributo principal como clave";
 choices[17][3] = "Una entidad se relaciona con ella misma";
 answers[17] = choices[17][3];
 units[17] = "58";
 comments[17] = "Id Pregunta: 1407. ";


//  Id pregunta: 1423 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Una relaci&oacute;n est&aacute; en segunda forma normal si:";
 choices[18]= new Array();
 choices[18][0] = "Est&aacute; en 1FN y todos son atributos toman un s&oacute;lo valor";
 choices[18][1] = "Est&aacute; en 1FN y todos sus atributos no pertenecientes a claves candidatas dependen de forma completa de la clave";
 choices[18][2] = "Est&aacute; en 1FN y sus atributos pertenecen al dominio de la informaci&oacute;n";
 choices[18][3] = "Est&aacute; en 1FN y ning&uacute;n atributo depende funcionalmente de la clave";
 answers[18] = choices[18][1];
 units[18] = "58";
 comments[18] = "Id Pregunta: 1423. ";


//  Id pregunta: 1424 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  Una relaci&oacute;n se dice que est&aacute; en tercera forma normal (3FN) de Boyce y Codd si:";
 choices[19]= new Array();
 choices[19][0] = "Est&aacute; en primera forma normal y adem&aacute;s cualquiera de sus atributos no primarios tienen una dependencia plena con cada una de las claves";
 choices[19][1] = "No contiene dependendencias multievaluadas";
 choices[19][2] = "Ninguno de sus atributos no primarios tiene dependencias transitivas respecto de las claves";
 choices[19][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[19] = choices[19][3];
 units[19] = "58";
 comments[19] = "Id Pregunta: 1424. ";


//  Id pregunta: 1431 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Uno de los siguientes grupos de componentes no pertenece al conjunto de componentes s&iacute;ncronos de groupware. Indicar cu&aacute;l:";
 choices[20]= new Array();
 choices[20][0] = "video, audio, editor texto";
 choices[20][1] = "gestor de tr&aacute;fico, control de estado, punteros";
 choices[20][2] = "bases de datos de objetos, motores workflow, notas post-it";
 choices[20][3] = "compartidor de aplicaciones, chat, pizarras";
 answers[20] = choices[20][2];
 units[20] = "71";
 comments[20] = "Id Pregunta: 1431. ";


//  Id pregunta: 1553 AÃ±o de creación de pregunta: 2003-01-01
 questions[21]= "22)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no es propia de un sistema de almacenamiento de datos Data-warehouse?:";
 choices[21]= new Array();
 choices[21][0] = "Almacenamiento de datos hist&oacute;ricos.";
 choices[21][1] = "Alta volatilidad de los datos.";
 choices[21][2] = "Organizaci&oacute;n tem&aacute;tica de los datos.";
 choices[21][3] = "Integraci&oacute;n del formato de los datos.";
 answers[21] = choices[21][1];
 units[21] = "71";
 comments[21] = "Id Pregunta: 1553. Junta Andaluc&iacute;a";


//  Id pregunta: 1567 AÃ±o de creación de pregunta: 2003-01-01
 questions[22]= "23)  &iquest;Cu&aacute;l no es una caracter&iacute;stica esencial del Datawarehouse?";
 choices[22]= new Array();
 choices[22][0] = "Orientado por temas";
 choices[22][1] = "Independiente del tiempo";
 choices[22][2] = " No vol&aacute;til";
 choices[22][3] = "Integrado";
 answers[22] = choices[22][1];
 units[22] = "71";
 comments[22] = "Id Pregunta: 1567. ";


//  Id pregunta: 1568 AÃ±o de creación de pregunta: 2003-01-01
 questions[23]= "24)  &iquest;C&uacute;al no es una funci&oacute;n de Workflow?";
 choices[23]= new Array();
 choices[23][0] = "Enrutamiento";
 choices[23][1] = "Asignaci&oacute;n de responsabilidades";
 choices[23][2] = "Generaci&oacute;n de formularios ";
 choices[23][3] = "Gesti&oacute;n de procedimiento";
 answers[23] = choices[23][2];
 units[23] = "71";
 comments[23] = "Id Pregunta: 1568. ";


//  Id pregunta: 1764 AÃ±o de creación de pregunta: 2006-01-01
 questions[24]= "25)  Se&ntilde;ale la afirmaci&oacute;n FALSA sobre los ficheros .jar de Java";
 choices[24]= new Array();
 choices[24][0] = "Est&aacute;ndar de empaquetado de ficheros compilados, para facilitar su distribuci&oacute;n y reutilizaci&oacute;n";
 choices[24][1] = "Utiliza para la compresi&oacute;n el algoritmo LZW";
 choices[24][2] = "Son ficheros independientes de la plataforma y cualquier JVM (Java Virtual Machine) ser&aacute; capaz de interpretarlos";
 choices[24][3] = "Todas las afirmaciones anteriores son verdaderas";
 answers[24] = choices[24][3];
 units[24] = "60";
 comments[24] = "Id Pregunta: 1764. A es falsa. Tambi&eacute;n puede incluir im&aacute;genes y otro tipo de archivos. Los .class no son compilados en el sentido estricto.";


//  Id pregunta: 1770 AÃ±o de creación de pregunta: 2006-01-01
 questions[25]= "26)  Respecto a los drivers utilizados en JDBC";
 choices[25]= new Array();
 choices[25][0] = "El driver de tipo 1 utiliza c&oacute;digo Java para hacer llamadas a una API nativa que debe estar en la m&aacute;quina que accede a la base de datos.";
 choices[25][1] = "El driver de tipo III no requiere ninguna instalaci&oacute;n adicional en la m&aacute;quina cliente, pero obliga a la existencia del middleware.";
 choices[25][2] = "La ventaja del driver tipo II es que da acceso a pr&aacute;cticamente todos los sistemas de gesti&oacute;n de base de datos del mercado";
 choices[25][3] = "todas son falsas";
 answers[25] = choices[25][1];
 units[25] = "60";
 comments[25] = "Id Pregunta: 1770. NULL";


//  Id pregunta: 1819 AÃ±o de creación de pregunta: 2006-01-01
 questions[26]= "27)  El fen&oacute;meno por el que se encuentran huecos entre las tablas de datos multidimensionales se conoce como:";
 choices[26]= new Array();
 choices[26][0] = "Data sparsity.";
 choices[26][1] = "Data cleansing.";
 choices[26][2] = "Data mining.";
 choices[26][3] = "Data explosion.";
 answers[26] = choices[26][0];
 units[26] = "68";
 comments[26] = "Id Pregunta: 1819. ";


//  Id pregunta: 1820 AÃ±o de creación de pregunta: 2006-01-01
 questions[27]= "28)  El termino ETL se refiere a: ";
 choices[27]= new Array();
 choices[27][0] = "Extraction, Transfer &amp; Labeling.";
 choices[27][1] = "Explanation, Transformation &amp; Loading.";
 choices[27][2] = "Extraction, Transformation &amp; Loading.";
 choices[27][3] = "Extraction, Transfer &amp; Loading.";
 answers[27] = choices[27][2];
 units[27] = "68";
 comments[27] = "Id Pregunta: 1820. ";


//  Id pregunta: 1821 AÃ±o de creación de pregunta: 2006-01-01
 questions[28]= "29)  Entre las ventajas de un Datawarehouse no se encuentra:";
 choices[28]= new Array();
 choices[28][0] = "Reducir el tiempo de respuesta de los sistemas operacionales.";
 choices[28][1] = "Presentar una visi&oacute;n &uacute;nica de la informaci&oacute;n de una empresa.";
 choices[28][2] = "Permitir que los usuarios sean autosuficientes para satisfacer sus propias necesidades de informaci&oacute;n. ";
 choices[28][3] = "La informaci&oacute;n de una empresa se mantiene consistente, segura, actualizada y f&aacute;cilmente accesible. ";
 answers[28] = choices[28][0];
 units[28] = "68";
 comments[28] = "Id Pregunta: 1821. ";


//  Id pregunta: 1823 AÃ±o de creación de pregunta: 2006-01-01
 questions[29]= "30)  Las especializaciones de los sistemas de Datawarehouse orientadas a departamentos o &aacute;reas de negocio concretas se denominan:";
 choices[29]= new Array();
 choices[29][0] = "Data Marts.";
 choices[29][1] = "Data Cleansing.";
 choices[29][2] = "Data Mining.";
 choices[29][3] = "Metadata.";
 answers[29] = choices[29][0];
 units[29] = "68";
 comments[29] = "Id Pregunta: 1823. ";


//  Id pregunta: 1939 AÃ±o de creación de pregunta: 2006-01-01
 questions[30]= "31)  Sobre la implementaci&oacute;n .NET de la seguridad basada en roles, escoja la afirmaci&oacute;n correcta:";
 choices[30]= new Array();
 choices[30][0] = "Se basa en cuentas/seguridad de Windows para identificar a los usuarios";
 choices[30][1] = "El motor de ejecuci&oacute;n dispone de funciones para que los administradores puedan crear y gestionar la asignaci&oacute;n de cuentas de usuario de Windows a roles de aplicaci&oacute;n";
 choices[30][2] = "Es necesario que los usuarios est&eacute;n asociados a cuentas de usuario de Windows";
 choices[30][3] = "La seguridad basada en roles de la estructura .NET es incompatible con la de COM+ 1.0";
 answers[30] = choices[30][1];
 units[30] = "59";
 comments[30] = "Id Pregunta: 1939. ";


//  Id pregunta: 2052 AÃ±o de creación de pregunta: 2004-01-01
 questions[31]= "32)  En el modelo de datos relacional, al conjunto no vac&iacute;o de atributos de una relaci&oacute;n cuyos valores sirven para referenciar la clave primaria de otra relaci&oacute;n del mismo dominio, se denomina:";
 choices[31]= new Array();
 choices[31][0] = "Superclave";
 choices[31][1] = "Clave principal";
 choices[31][2] = "Tupla m&uacute;ltiple";
 choices[31][3] = "Clave ajena";
 answers[31] = choices[31][3];
 units[31] = "57";
 comments[31] = "Id Pregunta: 2052. Pregunta Junta Andalucia - A";


//  Id pregunta: 2170 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  La administraci&oacute;n de recursos de datos pueden consistir de:";
 choices[32]= new Array();
 choices[32][0] = "Administraci&oacute;n de datos y administraci&oacute;n de bases de datos";
 choices[32][1] = "Administraci&oacute;n de ordenadores y administraci&oacute;n de software";
 choices[32][2] = "Administraci&oacute;n de bases de datos y administraci&oacute;n de comunicaciones";
 choices[32][3] = "Planificaci&oacute;n e implementaci&oacute;n de bases de datos";
 answers[32] = choices[32][0];
 units[32] = "57";
 comments[32] = "Id Pregunta: 2170. ";


//  Id pregunta: 2605 AÃ±o de creación de pregunta: 2003-01-01
 questions[33]= "34)  &iquest; Qu&eacute; diferencia fundamental existe entre el Diagrama de Estructura de Datos y el Modelo Entidad Relaci&oacute;n?";
 choices[33]= new Array();
 choices[33][0] = "Ninguna, son dos nombres que definen exactamente el mismo modelo.";
 choices[33][1] = "S&oacute;lo se diferencian en la representaci&oacute;n geom&eacute;trica de las entidades, que en el de Entidad Relaci&oacute;n son rect&aacute;ngulos y en el de Estructura de Datos son elipses, el resto es igual.";
 choices[33][2] = "En el modelo Entidad Relaci&oacute;n pueden existir relaciones n-arias mientras que en el de Estructura de Datos estas relaciones se representan cre&aacute;ndose una entidad auxiliar y dos relaciones 1:m.";
 choices[33][3] = " El Diagrama de Estructura de Datos no es un modelo que sirva para la representaci&oacute;n l&oacute;gica de los datos mientras que el Entidad Relaci&oacute;n s&iacute;.";
 answers[33] = choices[33][2];
 units[33] = "58,80";
 comments[33] = "Id Pregunta: 2605. ";


//  Id pregunta: 3784 AÃ±o de creación de pregunta: 2002-01-01
 questions[34]= "35)  Respecto a J2ME y Symbian:";
 choices[34]= new Array();
 choices[34][0] = "Symbian soporta J2ME, y J2ME soporta Symbian";
 choices[34][1] = "Symbian soporta J2ME, y J2ME no soporta Symbian";
 choices[34][2] = "Symbian no soporta J2ME, y J2ME soporta Symbian";
 choices[34][3] = "Symbian no soporta J2ME, y J2ME no soporta Symbian";
 answers[34] = choices[34][1];
 units[34] = "60";
 comments[34] = "Id Pregunta: 3784. J2ME no es multiplataforma.";


//  Id pregunta: 4310 AÃ±o de creación de pregunta: 2007-01-01
 questions[35]= "36)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre la arquitectura .Net no es correcta?:";
 choices[35]= new Array();
 choices[35][0] = "Las aplicaciones .Net s&oacute;lo pueden ejecutarse en los sistemas operativos Windows.";
 choices[35][1] = ".NET soporta la creaci&oacute;n de Servicios Web XML independientes de la plataforma, a trav&eacute;s de SOAP.";
 choices[35][2] = "El proceso de compilaci&oacute;n en .Net produce un fichero ejecutable al que se denomina portable executable (PE).";
 choices[35][3] = "Al c&oacute;digo escrito para ejecutarse en la plataforma .NET se le llama c&oacute;digo gestionado.";
 answers[35] = choices[35][0];
 units[35] = "59";
 comments[35] = "Id Pregunta: 4310. JCED - Preparatic XVII";


//  Id pregunta: 4369 AÃ±o de creación de pregunta: 2007-01-01
 questions[36]= "37)  Cu&aacute;l de las siguientes afirmaciones sobre la tecnolog&iacute;a de acceso a bases de datos ADO.NET no es correcta?";
 choices[36]= new Array();
 choices[36][0] = "El modelo de objetos ADO.NET provee una estructura de acceso a distintos or&iacute;genes de datos. Tiene 2 componentes principales: El Dataset y el proveedor de Datos .NET";
 choices[36][1] = "ADO.NET utiliza XML como formato para transmitir datos desde y hacia su base de datos y su aplicaci&oacute;n Web.";
 choices[36][2] = "ADO.NET es un conjunto de clases que se utiliza para acceder y manipular or&iacute;genes de datos como por ejemplo, una base de datos de SQL Server o una planilla Excel.";
 choices[36][3] = "ADO.NET utiliza un modelo de acceso pensando para entornos permanentemente conectados. Esto quiere decir que la aplicaci&oacute;n y el origen de datos deben estar en comunicaci&oacute;n permanente.";
 answers[36] = choices[36][3];
 units[36] = "59";
 comments[36] = "Id Pregunta: 4369. ";


//  Id pregunta: 4385 AÃ±o de creación de pregunta: 2007-01-01
 questions[37]= "38)  J2EE es:";
 choices[37]= new Array();
 choices[37][0] = "Un producto.";
 choices[37][1] = "Un servicio.";
 choices[37][2] = "Un estandar.";
 choices[37][3] = "Un entorno de desarrollo.";
 answers[37] = choices[37][2];
 units[37] = "60";
 comments[37] = "Id Pregunta: 4385. Es una especificaci&oacute;n que es est&aacute;ndar.";


//  Id pregunta: 4459 AÃ±o de creación de pregunta: 2007-01-01
 questions[38]= "39)  El uso de mecanismos como JDBC u ODBC:";
 choices[38]= new Array();
 choices[38][0] = "Proporciona independencia respecto al SGBD utilizado.";
 choices[38][1] = "Proporcionan generalmente un mayor rendimiento y funcionalidad que las APIs nativas de los SGBD.";
 choices[38][2] = "Tienen poca importancia en sistemas donde se acceden a SGBD heterog&eacute;neos.";
 choices[38][3] = "Se utilizan &uacute;nicamente en arquitecturas cliente-servidor, no en entornos de aplicaciones WEB.";
 answers[38] = choices[38][0];
 units[38] = "58";
 comments[38] = "Id Pregunta: 4459. ";


//  Id pregunta: 4481 AÃ±o de creación de pregunta: 2007-01-01
 questions[39]= "40)  &iquest;Cual de los siguientes paquetes de Java contiene las clases b&aacute;sicas utilizadas habitualmente en la mayor&iacute;a de los programas Java?";
 choices[39]= new Array();
 choices[39][0] = "java.lang";
 choices[39][1] = "java.beans";
 choices[39][2] = "java.sql";
 choices[39][3] = "java.util";
 answers[39] = choices[39][0];
 units[39] = "60";
 comments[39] = "Id Pregunta: 4481. JCED - Preparatic XVII";


//  Id pregunta: 4515 AÃ±o de creación de pregunta: 2007-01-01
 questions[40]= "41)  El tipo FLOAT definido por la clase Types de JDBC corresponde al tipo JAVA:";
 choices[40]= new Array();
 choices[40][0] = "double";
 choices[40][1] = "int";
 choices[40][2] = "byte[]";
 choices[40][3] = "Ninguna de las anteriores";
 answers[40] = choices[40][0];
 units[40] = "60";
 comments[40] = "Id Pregunta: 4515. JCED - Preparatic XVII";


//  Id pregunta: 4534 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  &iquest;Cu&aacute;l de las siguientes no es una herramienta de la Oracle Developer Suite? ";
 choices[41]= new Array();
 choices[41][0] = "Forms.";
 choices[41][1] = "Reports.";
 choices[41][2] = "Designer.";
 choices[41][3] = "Fusion.";
 answers[41] = choices[41][3];
 units[41] = "57,58";
 comments[41] = "Id Pregunta: 4534. ";


//  Id pregunta: 4685 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  En el &aacute;mbito de la miner&iacute;a de datos &iquest;c&oacute;mo se llama la herramienta con la que se establecen relaciones entre elementos?";
 choices[42]= new Array();
 choices[42][0] = "Clasificaci&oacute;n.";
 choices[42][1] = "Asociaci&oacute;n.";
 choices[42][2] = "Agrupaci&oacute;n.";
 choices[42][3] = "Secuenciaci&oacute;n.";
 answers[42] = choices[42][2];
 units[42] = "68";
 comments[42] = "Id Pregunta: 4685. Examen 2006 JCYL";


//  Id pregunta: 4911 AÃ±o de creación de pregunta: 2003-01-01
 questions[43]= "44)  En el contexto de Almac&eacute;n de datos (Data Warehouse) la creaci&oacute;n de &ldquo;duplicaciones&rdquo; locales o departamentales basadas en subconjuntos de la informaci&oacute;n contenida en el Data Warehouse central o maestro, se identifica con el t&eacute;rmino:";
 choices[43]= new Array();
 choices[43][0] = "Data Marts.";
 choices[43][1] = "Metadata.";
 choices[43][2] = "Middleware.";
 choices[43][3] = "Dataware.";
 answers[43] = choices[43][0];
 units[43] = "68";
 comments[43] = "Id Pregunta: 4911. Examen TIC B 2007";


//  Id pregunta: 4920 AÃ±o de creación de pregunta: 2003-01-01
 questions[44]= "45)  Los algoritmos &ldquo;no supervisados&rdquo; en Miner&iacute;a de Datos:";
 choices[44]= new Array();
 choices[44][0] = "Se llaman tambi&eacute;n 'predictivos'.";
 choices[44][1] = "Utilizan la t&eacute;cnica de '&aacute;rboles de decisi&oacute;n'.";
 choices[44][2] = "Sirven para descubrir patrones y tendencias en los datos actuales.";
 choices[44][3] = "Predicen el valor de un atributo de un conjunto de datos, conocidos otros atributos.";
 answers[44] = choices[44][2];
 units[44] = "68";
 comments[44] = "Id Pregunta: 4920. Examen TIC B 2007";


//  Id pregunta: 4955 AÃ±o de creación de pregunta: 2003-01-01
 questions[45]= "46)  &iquest;Cu&aacute;l de los siguientes es un Sistema de Gesti&oacute;n de Bases de Datos?:";
 choices[45]= new Array();
 choices[45][0] = "PostgreSQL.";
 choices[45][1] = "Gentoo.";
 choices[45][2] = "UbuntuBD.";
 choices[45][3] = "SQLCentos.";
 answers[45] = choices[45][0];
 units[45] = "57";
 comments[45] = "Id Pregunta: 4955. Examen TIC B 2007";


//  Id pregunta: 5032 AÃ±o de creación de pregunta: 2003-01-01
 questions[46]= "47)  Indicar cu&aacute;l es la afirmaci&oacute;n correcta respecto al modelo de datos relacional:";
 choices[46]= new Array();
 choices[46][0] = "Una clave candidata es el conjunto de atributos cuyos valores han de coincidir con los valores de la claveprimaria de otra relaci&oacute;n";
 choices[46][1] = "Una clave ajena es el conjunto de atributos que determinan un&iacute;voca y m&iacute;nimamente cada tupla";
 choices[46][2] = "En una relaci&oacute;n no pueden existir varias claves candidatas";
 choices[46][3] = "Para las claves ajenas, la regla de integridad referencial establece que los valores de la clave ajena puedenser nulos";
 answers[46] = choices[46][3];
 units[46] = "58";
 comments[46] = "Id Pregunta: 5032. Examen TIC A 2007";


//  Id pregunta: 5122 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  Si examinamos el modelo relacional dentro del marco de la arquitectura ANSI, podemos afirmar que:";
 choices[47]= new Array();
 choices[47][0] = "El modelo relacional no especifica nada respecto al esquema interno.";
 choices[47][1] = "En el nivel externo se encuentran las relaciones base, tambi&eacute;n denominadas tablas reales.";
 choices[47][2] = "En el nivel conceptual se encuentran las vistas.";
 choices[47][3] = "El modelo relacional define los tres niveles de la arquitectura ANSI.";
 answers[47] = choices[47][0];
 units[47] = "57";
 comments[47] = "Id Pregunta: 5122. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5493 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  Indica la afirmaci&oacute;n correcta respecto a CLS o Common Language Specification:";
 choices[48]= new Array();
 choices[48][0] = "Es el conjunto de clases que se manejan en .NET";
 choices[48][1] = "Recoge la especificacion que debe cumplir todo lenguaje que se ejecuta sobre el framework .NET";
 choices[48][2] = "Es la especificacion del framework .NET";
 choices[48][3] = "Todas son falsas";
 answers[48] = choices[48][1];
 units[48] = "59";
 comments[48] = "Id Pregunta: 5493. ";


//  Id pregunta: 5500 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no corresponde a la tecnolog&iacute;a de procedimiento anal&iacute;tico en l&iacute;nea (OLAP)?";
 choices[49]= new Array();
 choices[49][0] = "Proporciona respuestas r&aacute;pidas a consultas anal&iacute;ticas complejas e iterativas.";
 choices[49][1] = "Utiliza modelos de datos multidimensionales.";
 choices[49][2] = "Recuperan un dato individual con un alto rendimiento.";
 choices[49][3] = "Ofrece ventajas sobre las BBDD Relacionales a la hora de trabajar sobre datos agregados.";
 answers[49] = choices[49][2];
 units[49] = "68";
 comments[49] = "Id Pregunta: 5500. ";


//  Id pregunta: 5501 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l no es una caracter&iacute;stica b&aacute;sica de los sistemas OLAP?";
 choices[50]= new Array();
 choices[50][0] = "Utilizan t&eacute;cnicas multidimensionales para la extracci&oacute;n y el an&aacute;lisis de los datos.";
 choices[50][1] = "Permiten ahondar en la jerarqu&iacute;a de los datos para acceder a los de m&aacute;s bajo nivel.";
 choices[50][2] = "Ofrecen una visi&oacute;n m&uacute;ltidimensional y jerarquizada de los datos.";
 choices[50][3] = "Est&aacute;n pensados para el an&aacute;lisis y actualizaci&oacute;n de los datos de forma r&aacute;pida y jerarquizada.";
 answers[50] = choices[50][3];
 units[50] = "68";
 comments[50] = "Id Pregunta: 5501. ";


//  Id pregunta: 5711 AÃ±o de creación de pregunta: 2009-01-01
 questions[51]= "52)  &iquest;Cu&aacute;l de los siguientes no es un tipo de modelo de datos multidimensional?";
 choices[51]= new Array();
 choices[51][0] = "HOLAP.";
 choices[51][1] = "DOLAP.";
 choices[51][2] = "MOLAP.";
 choices[51][3] = "ROLAP.";
 answers[51] = choices[51][1];
 units[51] = "68";
 comments[51] = "Id Pregunta: 5711. ";


//  Id pregunta: 5900 AÃ±o de creación de pregunta: 2009-01-01
 questions[52]= "53)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa sobre JPA?";
 choices[52]= new Array();
 choices[52][0] = "El mapeo de los objetos al modelo relacional se puede definir mediante anotaciones en las entidades (clases)";
 choices[52][1] = "El mapeo de los objetos al modelo relacional se puede definir mediante ficheros XML";
 choices[52][2] = "Una misma unidad de persistencia permite acceder a diferentes fuentes de datos";
 choices[52][3] = "Una entidad puede estar mapeada a m&aacute;s de una tabla relacional";
 answers[52] = choices[52][2];
 units[52] = "60";
 comments[52] = "Id Pregunta: 5900. NULL";


//  Id pregunta: 5985 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)  La arquitectura ANSI/SPARC para sistemas de bases de datos se divide en los siguientes niveles:";
 choices[53]= new Array();
 choices[53][0] = "L&oacute;gico, de usuario y f&iacute;sico.";
 choices[53][1] = "Externo, intermedio e interno.";
 choices[53][2] = "Externo, conceptual e interno.";
 choices[53][3] = "De usuario, de administrador y f&iacute;sico.";
 answers[53] = choices[53][2];
 units[53] = "57";
 comments[53] = "Id Pregunta: 5985. TIC A 2009";


//  Id pregunta: 5991 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  Para eliminar una tabla de una base de datos relacional, se utiliza la sentencia DDL:";
 choices[54]= new Array();
 choices[54][0] = "Delete table.";
 choices[54][1] = "rm table.";
 choices[54][2] = "Delete table now.";
 choices[54][3] = "DROP TABLE.";
 answers[54] = choices[54][3];
 units[54] = "58";
 comments[54] = "Id Pregunta: 5991. TIC A 2009";


//  Id pregunta: 6133 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  ADO.NET es:";
 choices[55]= new Array();
 choices[55][0] = "Un conjunto de componentes software de la capa de l&oacute;gica de negocio.";
 choices[55][1] = "Un lenguaje de programaci&oacute;n para el entorno .NET.";
 choices[55][2] = "Un conjunto de componentes para el acceso a datos.";
 choices[55][3] = "Una biblioteca de clases b&aacute;sica de la capa de presentaci&oacute;n.";
 answers[55] = choices[55][2];
 units[55] = "59";
 comments[55] = "Id Pregunta: 6133. TIC A 2009";


//  Id pregunta: 6207 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  &iquest;Cu&aacute;l de los siguientes no es un servidor de aplicaciones J2EE?";
 choices[56]= new Array();
 choices[56][0] = "WebLogic";
 choices[56][1] = "WebSphere";
 choices[56][2] = "Apache Tomcat";
 choices[56][3] = "Jboss";
 answers[56] = choices[56][2];
 units[56] = "60";
 comments[56] = "Id Pregunta: 6207. TICB-2009, bloque desarrollo";


//  Id pregunta: 6220 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  Qu&eacute; subproyecto de 'Apache' basado en servlets permite a los desarrolladores crear r&aacute;pidamente aplicaciones web y permite personalizar el uso de sitios web y restringir el acceso a partes de la aplicaci&oacute;n";
 choices[57]= new Array();
 choices[57][0] = "Watchdog";
 choices[57][1] = "Turbine";
 choices[57][2] = "Lucene";
 choices[57][3] = "Avalon";
 answers[57] = choices[57][1];
 units[57] = "60";
 comments[57] = "Id Pregunta: 6220. TICB-2009, bloque desarrollo";


//  Id pregunta: 6258 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  &iquest;Cu&aacute;l de la lista siguiente responde a patrones creacionales de GoF (Gang of Four)?";
 choices[58]= new Array();
 choices[58][0] = "Facade, Composite, Bridge";
 choices[58][1] = "Strategy, Proxy, Iterator";
 choices[58][2] = "Builder, Abstract Factory, Prototype";
 choices[58][3] = "MVC, Session, Router";
 answers[58] = choices[58][2];
 units[58] = "60";
 comments[58] = "Id Pregunta: 6258. TICB-2009, bloque desarrollo";


//  Id pregunta: 6321 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  Las reglas de integridad en una base de datos relacional son:";
 choices[59]= new Array();
 choices[59][0] = "Integridad de claves con las claves ajenas";
 choices[59][1] = "Integridad de entidad e integridad referencial";
 choices[59][2] = "Integridad referente a las claves";
 choices[59][3] = "Restricciones de usuario y claves primarias no nulas";
 answers[59] = choices[59][1];
 units[59] = "58";
 comments[59] = "Id Pregunta: 6321. ";


//  Id pregunta: 6322 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no es propia del modelo relacional?";
 choices[60]= new Array();
 choices[60][0] = "Los datos se perciben como tablas.";
 choices[60][1] = "Los operadores que se utilizan toman como entrada tablas y a su salida presentan entidades.";
 choices[60][2] = "Los operadores que se utilizan toman como entrada tablas y como salida tablas.";
 choices[60][3] = "Dispone de una fuerte componente matem&aacute;tica que le da soporte.";
 answers[60] = choices[60][1];
 units[60] = "58";
 comments[60] = "Id Pregunta: 6322. NULL";


//  Id pregunta: 6330 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  &iquest;Cu&aacute;l de las siguientes acciones no se puede considerar del modo de operar del Data Mining?";
 choices[61]= new Array();
 choices[61][0] = "Adivinar futuros comportamientos.";
 choices[61][1] = "Crear modelos.";
 choices[61][2] = "Analizar relaciones.";
 choices[61][3] = "Detectar desviaciones.";
 answers[61] = choices[61][0];
 units[61] = "68";
 comments[61] = "Id Pregunta: 6330. ";


//  Id pregunta: 6456 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  Comparando las dos arquitecturas diferentes para los sistemas OLAP: relacional y multidimensional es cierto que:";
 choices[62]= new Array();
 choices[62][0] = "Los sistemas multidimensionales delegan la informaci&oacute;n entre tiempo de respuesta y el proceso batch al dise&ntilde;o del sistema.";
 choices[62][1] = "Los sistemas multidimensionales generalmente son adecuados para diez o menos dimensiones.";
 choices[62][2] = "Los sistemas multidimensionales soportan an&aacute;lisis OLAP contra grandes vol&uacute;menes de datos elementales.";
 choices[62][3] = "Los sistemas multidimensionales pueden crecer hasta un gran n&uacute;mero de dimensiones.";
 answers[62] = choices[62][1];
 units[62] = "68";
 comments[62] = "Id Pregunta: 6456. Castilla La Mancha 2009";


//  Id pregunta: 6517 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  Se&ntilde;ale que afirmaci&oacute;n es FALSA en relaci&oacute;n a los archivos jar en java:";
 choices[63]= new Array();
 choices[63][0] = "El algoritmo de compresi&oacute;n que utilizan es LZW.";
 choices[63][1] = "Son independientes de la plataforma y cualquier JVM los interpreta.";
 choices[63][2] = "Todos los ficheros que contienen, tienen la extensi&oacute;n class.";
 choices[63][3] = "Pueden incluir un subdirectorio de metainformaci&oacute;n llamado META-INF.";
 answers[63] = choices[63][2];
 units[63] = "60";
 comments[63] = "Id Pregunta: 6517. NULL";


//  Id pregunta: 7166 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  En Oracle, un tablespace es:";
 choices[64]= new Array();
 choices[64][0] = "El espacio que ocupa un fichero en donde reside un &iacute;ndice";
 choices[64][1] = "El espacio f&iacute;sico de almacenamiento de datos";
 choices[64][2] = "El espacio que ocupa un fichero en donde reside una tabla";
 choices[64][3] = "El espacio l&oacute;gico de almacenamiento de datos";
 answers[64] = choices[64][3];
 units[64] = "58";
 comments[64] = "Id Pregunta: 7166. Examen TIC B 2009";


//  Id pregunta: 7170 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  &iquest;Cu&aacute;l de las siguientes NO es una caracter&iacute;stica de un Data Mart?";
 choices[65]= new Array();
 choices[65][0] = "Especializado en el almacenamiento de los datos de un &aacute;rea de negocio espec&iacute;fica.";
 choices[65][1] = "Debe ser alimentado siempre desde un Data Warehouse.";
 choices[65][2] = "En los Data Mart OLAP la estructura para el an&aacute;lisis de su informaci&oacute;n se basa en los cubos OLAP.";
 choices[65][3] = "En los Data Mart OLTP la estructura para el an&aacute;lisis de su informaci&oacute;n est&aacute; montada sobre una base de datos OLTP, como en el Data Warehouse.";
 answers[65] = choices[65][1];
 units[65] = "68";
 comments[65] = "Id Pregunta: 7170. Examen TIC B 2009";


//  Id pregunta: 8170 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  Entre los lenguajes de especificaci&oacute;n de workflows, NO se encuentra:";
 choices[66]= new Array();
 choices[66][0] = "YAWL.";
 choices[66][1] = "ETL.";
 choices[66][2] = "XPDL.";
 choices[66][3] = "BPEL.";
 answers[66] = choices[66][1];
 units[66] = "71";
 comments[66] = "Id Pregunta: 8170. Examen TIC A1 2010";


//  Id pregunta: 8185 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  La tabla ESTUDIANTES(DNI#, Nombre, Apellido 1, Apellido 2, DNITutor, NombreTutor):";
 choices[67]= new Array();
 choices[67][0] = "No est&aacute; en primera forma normal.";
 choices[67][1] = "Est&aacute; en primera forma normal pero no en segunda forma normal.";
 choices[67][2] = "Est&aacute; en segunda forma normal pero no en tercera forma normal.";
 choices[67][3] = "Est&aacute; en tercera forma normal pero no en forma normal de Boyce Codd.";
 answers[67] = choices[67][2];
 units[67] = "58";
 comments[67] = "Id Pregunta: 8185. Examen TIC A1 2010";


//  Id pregunta: 8204 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  Respecto del modelo jer&aacute;rquico de base de datos, se&ntilde;ale qu&eacute; afirmaci&oacute;n es FALSA:";
 choices[68]= new Array();
 choices[68][0] = "Utiliza punteros para su implementaci&oacute;n f&iacute;sica.";
 choices[68][1] = "Permite que un nodo de nivel superior pueda tener un n&uacute;mero ilimitado de nodos de nivel inferior.";
 choices[68][2] = "Permite describir relaciones sim&eacute;tricas.";
 choices[68][3] = "Permite actualizaciones en cascada.";
 answers[68] = choices[68][2];
 units[68] = "57";
 comments[68] = "Id Pregunta: 8204. Examen TIC A1 2010";


//  Id pregunta: 8364 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  Entre las t&eacute;cnicas usadas en miner&iacute;a de datos se encuentran las redes neuronales artificiales, &iquest;cu&aacute;l de los siguientes es uno de sus modelos? ";
 choices[69]= new Array();
 choices[69][0] = "Redes de Shelman.";
 choices[69][1] = "Redes de Coperfield.";
 choices[69][2] = "Redes ART.";
 choices[69][3] = "M&aacute;quina de Gauss.";
 answers[69] = choices[69][2];
 units[69] = "68";
 comments[69] = "Id Pregunta: 8364. Examen TIC A2 2010";


//  Id pregunta: 8365 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  &iquest;En qu&eacute; tipo de t&eacute;cnica de miner&iacute;a de datos se utiliza el algoritmo IK-medoids?";
 choices[70]= new Array();
 choices[70][0] = "Predicci&oacute;n.";
 choices[70][1] = "Categorizaci&oacute;n.";
 choices[70][2] = "Clustering.";
 choices[70][3] = "Estad&iacute;sticas.";
 answers[70] = choices[70][2];
 units[70] = "68";
 comments[70] = "Id Pregunta: 8365. Examen TIC A2 2010";


//  Id pregunta: 8366 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  Sobre un Data Warehouse con informaci&oacute;n de las ventas nacionales de una compa&ntilde;&iacute;a, se quiere consultar los datos pero a nivel de ventas provinciales. &iquest;Qu&eacute; operaci&oacute;n debemos realizar en el almac&eacute;n de datos para obtener dichos datos?";
 choices[71]= new Array();
 choices[71][0] = "Drill-Down.";
 choices[71][1] = "Slice &amp; Dice.";
 choices[71][2] = "Roll-Up,";
 choices[71][3] = "Drill-Through.";
 answers[71] = choices[71][0];
 units[71] = "68";
 comments[71] = "Id Pregunta: 8366. Examen TIC A2 2010";


//  Id pregunta: 8416 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  Se dice que un SGBD cumple el ACID test si observa las propiedades de: ";
 choices[72]= new Array();
 choices[72][0] = "(A)tomicidad, (C)onsistencia, (I)ntegridad y (D)urabilidad";
 choices[72][1] = "(A)tomicidad, (C)onfidencialidad, (I)ntegridad y (D)urabilidad";
 choices[72][2] = "(A)tomicidad, (C)onfidencialidad, a(I)slamiento y (D)urabilidad";
 choices[72][3] = "(A)tomicidad, (C)onsistencia, a(I)slamiento y (D)urabilidad";
 answers[72] = choices[72][3];
 units[72] = "57";
 comments[72] = "Id Pregunta: 8416. Examen TIC A2 2010";


//  Id pregunta: 8595 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  &iquest;A qu&eacute; corresponden las siglas LINQ?";
 choices[73]= new Array();
 choices[73][0] = "Lenguaje que permite enlaces unidireccionales y bid&iacute;reccionales a otro recurso (como archivos, im&aacute;genes, documentos, programas, etc.) dentro de documentos XML";
 choices[73][1] = "Soluci&oacute;n utilizada en el campo de la Business Intelligence cuyo objetivo es agilizar la consulta a grandes cantidades de datos";
 choices[73][2] = "Conjunto de extensiones a NET Framework que abarca operaciones de consulta integrada de lenguaje, conjuntos y transformaciones.";
 choices[73][3] = "Texto o im&aacute;genes en un sitio web que un usuario puede pinchar para tener acceso o conectar con otro documento.";
 answers[73] = choices[73][2];
 units[73] = "59,115";
 comments[73] = "Id Pregunta: 8595. Examen TIC A2 2010 interna";


//  Id pregunta: 8604 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  &iquest;Cu&aacute;l de las siguientes utilidades permite realizar miner&iacute;a de datos?";
 choices[74]= new Array();
 choices[74][0] = "JDataMiner.";
 choices[74][1] = "Cubos OLAP de Excel.";
 choices[74][2] = "VNC.";
 choices[74][3] = "Extract to Learnt by SQLServer.";
 answers[74] = choices[74][1];
 units[74] = "68";
 comments[74] = "Id Pregunta: 8604. Examen TIC A2 2010 interna";


//  Id pregunta: 8617 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  &iquest;Cu&aacute;l de las siguientes NO es una funci&oacute;n del administrador de bases de datos?";
 choices[75]= new Array();
 choices[75][0] = "Dise&ntilde;ar la arquitectura de balanceo de carga de las aplicaciones instaladas en una granja de servidores.";
 choices[75][1] = "Balancear la distribuci&oacute;n de los datos entre los dispositivos de almacenamiento";
 choices[75][2] = "Optimizar las cargas masivas de datos, ya sean iniciales o parciales.";
 choices[75][3] = "Gestionar permisos y roles de usuarios para que sean los necesarios para sus funciones y se garantice la confidencialidad e integridad de los datos";
 answers[75] = choices[75][0];
 units[75] = "57,58";
 comments[75] = "Id Pregunta: 8617. Examen TIC A2 2010 interna";


//  Id pregunta: 8638 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  &iquest;Cu&aacute;l de las siguientes operaciones pertenece al lenguaje de manipulaci&oacute;n de datos en SQL?";
 choices[76]= new Array();
 choices[76][0] = "CREATE";
 choices[76][1] = "ALTER";
 choices[76][2] = "DELETE";
 choices[76][3] = "DROP";
 answers[76] = choices[76][2];
 units[76] = "57, 58";
 comments[76] = "Id Pregunta: 8638. Examen TIC A2 2010 interna";


//  Id pregunta: 8640 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  Si tenemos las dependencias funcionales (A, B) -&gt; C, B -&gt; D y la siguiente relaci&oacute;n (A, B, C, D) donde (A, B) es la clave candidata. &iquest;Cu&aacute;l seria el resultado de aplicar la 2&ordf; forma normal?";
 choices[77]= new Array();
 choices[77][0] = "(A, B, C), (A, B, D).";
 choices[77][1] = "(A, B, C), (B, D).";
 choices[77][2] = "(A, B, C),  (A, D).";
 choices[77][3] = "Ya est&aacute; en 2FN.";
 answers[77] = choices[77][1];
 units[77] = "57, 58";
 comments[77] = "Id Pregunta: 8640. Examen TIC A2 2010 interna";


//  Id pregunta: 8641 AÃ±o de creación de pregunta: 2011-01-01
 questions[78]= "79)  En la arquitectura ANSI SQL la capacidad do modificar el esquema interno sin tener que alterar el esquema conceptual (o los externos) es lo que se conoce como:";
 choices[78]= new Array();
 choices[78][0] = "Independencia f&iacute;sica.";
 choices[78][1] = "Independencia L&oacute;gica.";
 choices[78][2] = "Integridad de la entidad";
 choices[78][3] = "Integridad referencial.";
 answers[78] = choices[78][0];
 units[78] = "57, 58";
 comments[78] = "Id Pregunta: 8641. Examen TIC A2 2010 interna";


//  Id pregunta: 8811 AÃ±o de creación de pregunta: 2011-01-01
 questions[79]= "80)  Una p&aacute;gina ASP mezcla en el mismo archivo secuencias de comandos con c&oacute;digo HTML est&aacute;ndar con las secuencias de comandos asp mediante los delimitadores:";
 choices[79]= new Array();
 choices[79][0] = "&lt;% y %&gt;";
 choices[79][1] = "&lt;SCRIPT LANGUAGE=&quot;ASPScript&quot;&gt; &lt;/SCRIPl&gt;";
 choices[79][2] = "&lt;!- --&gt;";
 choices[79][3] = "Los comandos ASP no se mezclan en el mismo archive que el c&oacute;digo HTML, sino que se importan desde otro archivo";
 answers[79] = choices[79][0];
 units[79] = "59, 115";
 comments[79] = "Id Pregunta: 8811. Examen UPM A2 2011";


//  Id pregunta: 8854 AÃ±o de creación de pregunta: 2011-01-01
 questions[80]= "81)  La vulneraci&oacute;n de una restricci&oacute;n de integridad referencial es detectada por el servidor de base de datos de acuerdo a la declaraci&oacute;n de la:";
 choices[80]= new Array();
 choices[80][0] = "PRIMARY KEY";
 choices[80][1] = "FOREIGN KEY";
 choices[80][2] = "CANDIDATE KEY";
 choices[80][3] = "SUPERKEY";
 answers[80] = choices[80][1];
 units[80] = "58";
 comments[80] = "Id Pregunta: 8854. Analista Ayto. Madrid 2010";


//  Id pregunta: 8962 AÃ±o de creación de pregunta: 2011-01-01
 questions[81]= "82)  En los Esquemas de copo de nieve:";
 choices[81]= new Array();
 choices[81][0] = "Existe redundancia.";
 choices[81][1] = "No se ahorra espacio.";
 choices[81][2] = "No existe una tabla de hechos central.";
 choices[81][3] = "Las tablas est&aacute;n normalizadas.";
 answers[81] = choices[81][3];
 units[81] = "68";
 comments[81] = "Id Pregunta: 8962. ";


//  Id pregunta: 9613 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  &iquest;Qu&eacute; alternativas existen en otros sistemas de base de datos a las vistas materializadas de Oracle?";
 choices[82]= new Array();
 choices[82][0] = "Vistas indexadas";
 choices[82][1] = "Vistas normalizadas";
 choices[82][2] = "Vistas f&iacute;sicas";
 choices[82][3] = "No existen alternativas";
 answers[82] = choices[82][0];
 units[82] = "58";
 comments[82] = "Id Pregunta: 9613. En SQL Server se llaman vistas indexadas";


//  Id pregunta: 9709 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  La programaci&oacute;n funcional limita el uso de";
 choices[83]= new Array();
 choices[83][0] = "estados mutables.";
 choices[83][1] = "expresiones lambda.";
 choices[83][2] = "procedimientos como par&aacute;metros.";
 choices[83][3] = "lenguajes como Erlang, F# o Scala.";
 answers[83] = choices[83][0];
 units[83] = "60";
 comments[83] = "Id Pregunta: 9709. Examen TIC-A1 2013";


//  Id pregunta: 9731 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  ANSI/ISO SQL define ciertos niveles de aislamiento en transacciones en funci&oacute;n de qu&eacute; fen&oacute;menos puede que ocurran. Indique la respuesta correcta respecto al fen&oacute;meno &quot;lectura fantasma&quot;:";
 choices[84]= new Array();
 choices[84][0] = "Se permite en read uncommitted, read committed y repeatable read, pero no se permite en serializable.";
 choices[84][1] = "Se permite en read uncommitted y read committed, pero no se permite en repeatable read ni en serializable.";
 choices[84][2] = "Se permite en read uncommitted y repeatable read, pero no se permite en read committed ni en serializable.";
 choices[84][3] = "Se permite en read uncommitted, pero no se permite en read committed, repeatable read ni en serializable.";
 answers[84] = choices[84][0];
 units[84] = "57";
 comments[84] = "Id Pregunta: 9731. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9751 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  &iquest;Cu&aacute;l de las siguientes NO es una palabra reservada de MDX (MultiDimensional eXpressions) en SQL Server 2012?";
 choices[85]= new Array();
 choices[85][0] = "SELECT";
 choices[85][1] = "DRILL";
 choices[85][2] = "CUBE ";
 choices[85][3] = "MEMBER";
 answers[85] = choices[85][1];
 units[85] = "57";
 comments[85] = "Id Pregunta: 9751. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9753 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  &iquest;Qu&eacute; es el &quot;Data staging area&quot; en el contexto de los Data Warehouses?";
 choices[86]= new Array();
 choices[86][0] = "Es un almac&eacute;n previo de datos y sus procesos asociados, en el que se extraen los datos de las fuentes, se transforman y se adaptan antes de ser cargados en el almac&eacute;n de datos.";
 choices[86][1] = "Durante la fase de dise&ntilde;o de un almac&eacute;n de datos, es la base de datos no permanente usada para ensayar, demostrar y estudiar el rendimiento de los dise&ntilde;os propuestos.";
 choices[86][2] = "Es el &aacute;rea del almac&eacute;n (conceptual o f&iacute;sicamente separada en otra base de datos) donde se cachean las consultas preparadas, cuando &eacute;stas no pueden ejecutarse en tiempo real.";
 choices[86][3] = "Es una copia id&eacute;ntica de las bases de datos originales, cuando en ellas existe mucha carga y no es posible bloquearlas para asegurar la integridad referencial al copiar los datos.";
 answers[86] = choices[86][0];
 units[86] = "68";
 comments[86] = "Id Pregunta: 9753. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9981 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  &iquest;Con qu&eacute; siglas se identifica el Common Language Runtime de la plataforma .NET?";
 choices[87]= new Array();
 choices[87][0] = "CLRUN";
 choices[87][1] = "CLRNET";
 choices[87][2] = "COLR";
 choices[87][3] = "CLR";
 answers[87] = choices[87][3];
 units[87] = "59,115";
 comments[87] = "Id Pregunta: 9981. TIC A2, UPM, Examen 2010";


//  Id pregunta: 10167 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  &iquest;A qu&eacute; t&eacute;rmino corresponde la siguiente definici&oacute;n: &quot;Dada una relaci&oacute;n, un atributo o grupo de atributos B depende funcionalmente de A, pero no de ning&uacute;n subconjunto de atributos de A&quot;?";
 choices[88]= new Array();
 choices[88][0] = "Dependencia funcional";
 choices[88][1] = "Dependencia multivaluada";
 choices[88][2] = "Dependencia funcional trivial";
 choices[88][3] = "Dependencia funcional completa";
 answers[88] = choices[88][3];
 units[88] = "58";
 comments[88] = "Id Pregunta: 10167. ";


//  Id pregunta: 10171 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  En el lenguaje SQL, la funci&oacute;n de agregado COUNT, aplicada sobre una columna, contabiliza&hellip;";
 choices[89]= new Array();
 choices[89][0] = "N&ordm; de filas recuperadas por la consulta ";
 choices[89][1] = "N&ordm; de filas recuperadas por la consulta, exceptuando aquellas en que la columna referenciada tenga valor nulo";
 choices[89][2] = "N&ordm; de filas recuperadas por la consulta, incluyendo valores duplicados o nulos en la columna";
 choices[89][3] = "Si la columna sobre la que se aplica tiene valor nulo en todas las filas, la funci&oacute;n COUNT devolver&aacute; &quot;nulo&quot;";
 answers[89] = choices[89][1];
 units[89] = "58";
 comments[89] = "Id Pregunta: 10171. ";


//  Id pregunta: 10236 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  El objeto PreparedStatement de la api java.sql se utiliza para:";
 choices[90]= new Array();
 choices[90][0] = "Ejecutar una sentencia SQL de forma repetida variando los par&aacute;metros de la misma";
 choices[90][1] = "Nos permite acceder a procedimientos almacenados en la base de datos";
 choices[90][2] = "Es &uacute;til a la hora de trabajar con el metadata de la base de datos";
 choices[90][3] = "ninguna de las anteriores";
 answers[90] = choices[90][0];
 units[90] = "60";
 comments[90] = "Id Pregunta: 10236. NULL";


//  Id pregunta: 10623 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Indique qu&eacute; soluci&oacute;n tiene una mayor rapidez de repuesta para consultas multitabla:";
 choices[91]= new Array();
 choices[91][0] = "OLAP";
 choices[91][1] = "OLTP";
 choices[91][2] = "ETL";
 choices[91][3] = "OLTA";
 answers[91] = choices[91][0];
 units[91] = "68";
 comments[91] = "Id Pregunta: 10623. ";


//  Id pregunta: 10627 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Qu&eacute; tres niveles debe tener una base de datos seg&uacute;n la arquitectura propuesta por la normativa ANSI?";
 choices[92]= new Array();
 choices[92][0] = "Abstracto, concreto y l&oacute;gico.";
 choices[92][1] = "L&oacute;gico, sem&aacute;ntico y conceptual.";
 choices[92][2] = "Externo, interno y conceptual.";
 choices[92][3] = "Externo, interno y l&oacute;gico.";
 answers[92] = choices[92][2];
 units[92] = "57";
 comments[92] = "Id Pregunta: 10627. ";


//  Id pregunta: 10794 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Se quiere incluir una base de datos local en una aplicaci&oacute;n para m&oacute;viles Android. &iquest;Cu&aacute;l de las siguientes ser&iacute;a la m&aacute;s adecuada?";
 choices[93]= new Array();
 choices[93][0] = "SQLite.";
 choices[93][1] = "Oracle Pocket.";
 choices[93][2] = "SQL Server compact.";
 choices[93][3] = "MySQL micro edition.";
 answers[93] = choices[93][0];
 units[93] = "57";
 comments[93] = "Id Pregunta: 10794. Examen GSI 2014";


//  Id pregunta: 10852 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  En .NET, &iquest;qu&eacute; es el Managed Extensibility Framework (MEF)?";
 choices[94]= new Array();
 choices[94][0] = "Es una arquitectura que proporciona primitivos as&iacute;ncronos de paso de aprobaci&oacute;n de mensajes sin tipo.";
 choices[94][1] = "Es un modelo extensible de programaci&oacute;n, motor y herramientas para generar con rapidez aplicaciones de flujo de trabajo en Windows.";
 choices[94][2] = "Es una biblioteca de clases portable que permite escribir y compilar ensamblados administrados capaces de funcionar en m&uacute;ltiples plataformas de .NET.";
 choices[94][3] = "Es una biblioteca para crear aplicaciones ligeras y extensibles.";
 answers[94] = choices[94][3];
 units[94] = "59, 115";
 comments[94] = "Id Pregunta: 10852. Examen GSI 2014";


//  Id pregunta: 10862 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Seg&uacute;n la definici&oacute;n de DataWarehouse de William Inmon, se&ntilde;ale cu&aacute;l de las siguientes opciones NO es una caracter&iacute;stica de este tipo de sistemas:";
 choices[95]= new Array();
 choices[95][0] = "Integrado: los datos deben integrarse en una estructura consistente.";
 choices[95][1] = "Tem&aacute;tico: los datos se organizan por temas.";
 choices[95][2] = "Hist&oacute;rico: una variable puede tomar distintos valores en el tiempo.";
 choices[95][3] = "Vol&aacute;til: los datos no son permanentes en el sistema.";
 answers[95] = choices[95][3];
 units[95] = "68, 71";
 comments[95] = "Id Pregunta: 10862. Examen GSI 2014";


//  Id pregunta: 10866 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Se&ntilde;ale la respuesta FALSA acerca de la tecnolog&iacute;a Java Web Start:";
 choices[96]= new Array();
 choices[96][0] = "El software de Java Web Start permite descargar y ejecutar aplicaciones Java desde la Web.";
 choices[96][1] = "Garantiza que se est&aacute; ejecutando la &uacute;ltima versi&oacute;n de la aplicaci&oacute;n.";
 choices[96][2] = "Incluido en el JDK desde la versi&oacute;n 6, permitiendo instalar aplicaciones a trav&eacute;s de URLs con JMLP (Java Main Launch Protocol).";
 choices[96][3] = "Permite desplegar f&aacute;cilmente aplicaciones standalone de escritorio.";
 answers[96] = choices[96][2];
 units[96] = "60, 116";
 comments[96] = "Id Pregunta: 10866. Examen GSI 2014";


//  Id pregunta: 10920 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Apache Hadoop es un framework de software que implementa un sistema de ficheros basado en:";
 choices[97]= new Array();
 choices[97][0] = "HP Data File System.";
 choices[97][1] = "Google File System.";
 choices[97][2] = "Network File System.";
 choices[97][3] = "High Density File System.";
 answers[97] = choices[97][1];
 units[97] = "68";
 comments[97] = "Id Pregunta: 10920. TIC A1 AGE 2014";


//  Id pregunta: 11215 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Sobre la  tecnolog&iacute;a Java WebStart es cierto que:";
 choices[98]= new Array();
 choices[98][0] = "Permite la  instalaci&oacute;n de la aplicaci&oacute;n pero no su actualizaci&oacute;n.";
 choices[98][1] = "Permite la distribuci&oacute;n de aplicaciones Java sin instalaci&oacute;n adicional y desde cualquier navegador web.";
 choices[98][2] = "Utiliza JNLP (Java LaunchingProtocol) definido en la JSR-56 y basado en XML.";
 choices[98][3] = "Las dos anteriores son ciertas.";
 answers[98] = choices[98][3];
 units[98] = "60";
 comments[98] = "Id Pregunta: 11215. ";


//  Id pregunta: 11517 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Seg&uacute;n el Modelo de Referencia de WorkFlow de la WFMc (WorkFlow Management Coalition), se&ntilde;ale la INCORRECTA:";
 choices[99]= new Array();
 choices[99][0] = "WF Enacment Service es el servicio de representaci&oacute;n de workflow e interpreta la descripci&oacute;n de los procesos.";
 choices[99][1] = "El interfaz 2 establece la comunicaci&oacute;n con las aplicaciones de los clientes.";
 choices[99][2] = "La Interfaz 4 o WAPI, establece funciones de interoperabilidad e interpretaci&oacute;n com&uacute;n en la definici&oacute;n de procesos.";
 choices[99][3] = "La Interfaz 1 se encarga de la administraci&oacute;n y monitorizaci&oacute;n del flujo de trabajo.";
 answers[99] = choices[99][3];
 units[99] = "71";
 comments[99] = "Id Pregunta: 11517. NULL";


