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

//  Id pregunta: 740 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  En inteligencia artificial, los marcos";
 choices[0]= new Array();
 choices[0][0] = "Internamente est&aacute;n formados por ranuras, cada una de las cuales representa una caracter&iacute;stica del marco";
 choices[0][1] = "Requieren de un proceso de entrenamiento previo, al igual que las redes neuronales.";
 choices[0][2] = "Utiliza como estrategias de inferencia en el proceso deductivo las estrategias en X, Y y Z";
 choices[0][3] = "Se representan mediante nodos y arcos";
 answers[0] = choices[0][0];
 units[0] = "64";
 comments[0] = "Id Pregunta: 740. Similar a examen TIC SS A 2003";


//  Id pregunta: 818 AÃ±o de creación de pregunta: 2009-01-01
 questions[1]= "2)  Seg&uacute;n la Ley 34/2002,  las Administraciones P&uacute;blicas adoptar&aacute;n las medidas necesarias para que las informaci&oacute;n disponible en sus p&aacute;ginas de Internet puedan ser accesibles para discapacitados. Esto est&aacute; de acuerdo con:";
 choices[1]= new Array();
 choices[1][0] = "A partir del 31 de diciembre de 2008, las p&aacute;ginas de Internet de las Administraciones P&uacute;blicas satisfar&aacute;n, como m&iacute;nimo, el nivel medio de los criterios de accesibilidad al contenido generalmente reconocidos. Excepcionalmente, esta obligaci&oacute;n no ser&aacute; aplicable cuando una funcionalidad o servicio no disponga de una soluci&oacute;n tecnol&oacute;gica que permita su accesibilidad.";
 choices[1][1] = "El nivel medio de los criterios de accesibilidad al contenido generalmente reconocidos, antes del 31 de diciembre de 2005";
 choices[1][2] = "Los criterios WAI antes del 31 de diciembre de 2008";
 choices[1][3] = "Los criterios WAI antes del 31 de diciembre de 2005";
 answers[1] = choices[1][0];
 units[1] = "30";
 comments[1] = "Id Pregunta: 818. Ley 34/2002, disposici&oacute;n adicional quinta, modificado por Ley 56/2007, art&iacute;culo 4";


//  Id pregunta: 873 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;Cu&aacute;l de los siguientes se considerar&aacute; siempre software de aplicaciones y no software de base?:";
 choices[2]= new Array();
 choices[2][0] = "Sistemas operativos";
 choices[2][1] = "Software de comunicaciones";
 choices[2][2] = "Software ofim&aacute;tico";
 choices[2][3] = "Sistemas de gesti&oacute;n de datos";
 answers[2] = choices[2][2];
 units[2] = "56";
 comments[2] = "Id Pregunta: 873. ";


//  Id pregunta: 884 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;Cu&aacute;l es la diferencia b&aacute;sica entre C y C++?";
 choices[3]= new Array();
 choices[3][0] = "C++ es la versi&oacute;n de C estandarizada por ANSI (tambi&eacute;n se le conoce como ANSI-C).";
 choices[3][1] = "C++ es un superconjunto de instrucciones de C para soportar programaci&oacute;n orientada a objetos.";
 choices[3][2] = "C++ es la versi&oacute;n de C preparada por los laboratorios Bell de ATT que permite embeber sentencias SQL.";
 choices[3][3] = "C++ es una versi&oacute;n 4GL del C est&aacute;ndar (lenguaje de 4&ordf; generaci&oacute;n) mientras que C es un lenguaje de 3&ordf; generaci&oacute;n.";
 answers[3] = choices[3][1];
 units[3] = "82, 84";
 comments[3] = "Id Pregunta: 884. ";


//  Id pregunta: 924 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;Qu&eacute; es JDBC?:";
 choices[4]= new Array();
 choices[4][0] = "Un est&aacute;ndar que permite la definici&oacute;n de procedimientos escritos en Java para el establecimiento de una conexi&oacute;n a la base de datos v&iacute;a  ODBC";
 choices[4][1] = "Una API, que implementan los drivers de conexi&oacute;n a base de datos, y que permite el acceso a &eacute;stas &uacute;ltimas desde aplicaciones Java.";
 choices[4][2] = "Un driver que permite la conexi&oacute;n entre los distintos niveles de la arquitectura Internet";
 choices[4][3] = "El est&aacute;ndar de ODBC para base de datos relacionales";
 answers[4] = choices[4][1];
 units[4] = "60";
 comments[4] = "Id Pregunta: 924. NULL";


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


//  Id pregunta: 1010 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  El creador de HTML fue:";
 choices[7]= new Array();
 choices[7][0] = "Tim Berners-Lee";
 choices[7][1] = "Ivar Jacobson";
 choices[7][2] = "Grady Booch";
 choices[7][3] = "Todas son falsas";
 answers[7] = choices[7][0];
 units[7] = "69";
 comments[7] = "Id Pregunta: 1010. NULL";


//  Id pregunta: 1011 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  El data warehousing consiste b&aacute;sicamente en:";
 choices[8]= new Array();
 choices[8][0] = "En realizar un BPR (Business Processing Re-engineering) mediante el an&aacute;lisis automatizado de los datos corporativos.";
 choices[8][1] = "En automatizar los procesos de almacenamiento de datos de toda la corporaci&oacute;n. El sistema se encarga de situar los datos, de manera transparente, en los medios f&iacute;sicos m&aacute;s adecuados (discos, cintas, etc&eacute;tera) y de gestionar las copias de salvaguarda.";
 choices[8][2] = "En generar din&aacute;mica y autom&aacute;ticamente, a partir de datos extra&iacute;dos de todas las B.D. operacionales del sistema, otra base de datos donde se va almacenando informaci&oacute;n integrada, resumida, consolidada, multidimensional y significativa.";
 choices[8][3] = "En independizar los datos de la corporaci&oacute;n de su localizaci&oacute;n f&iacute;sica, creando un sistema de informaci&oacute;n virtual que integra todos los datos de la corporaci&oacute;n, incluso si est&aacute;n repartidos en diferentes sedes.";
 answers[8] = choices[8][2];
 units[8] = "68";
 comments[8] = "Id Pregunta: 1011. ";


//  Id pregunta: 1046 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  El programa del sistema operativo cuya misi&oacute;n es resolver las referencias externas de uno o varios m&oacute;dulos objeto y formar una unidad ejecutable se denomina:";
 choices[9]= new Array();
 choices[9][0] = "Coordinador";
 choices[9][1] = "Montador";
 choices[9][2] = "Cargador";
 choices[9][3] = "Editor";
 answers[9] = choices[9][1];
 units[9] = "52";
 comments[9] = "Id Pregunta: 1046. ";


//  Id pregunta: 1100 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  En Java, al mecanismo que permite agrupar un conjunto de clases relacionadas se le denomina";
 choices[10]= new Array();
 choices[10][0] = "Superset o superconjunto";
 choices[10][1] = "Package o paquete";
 choices[10][2] = "Superclass o Superclase";
 choices[10][3] = "Colection o Colecci&oacute;n";
 answers[10] = choices[10][1];
 units[10] = "60";
 comments[10] = "Id Pregunta: 1100. JCED - Preparatic XVII";


//  Id pregunta: 1135 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  En un disco duro Winchester:";
 choices[11]= new Array();
 choices[11][0] = "Las cabezas tocan el disco en todo momento";
 choices[11][1] = "Las cabezas nunca tocan el disco";
 choices[11][2] = "Las cabezas tocan el disco para grabar";
 choices[11][3] = "Las cabezas solo tocan el disco para formatearlo a bajo nivel";
 answers[11] = choices[11][1];
 units[11] = "48";
 comments[11] = "Id Pregunta: 1135. ";


//  Id pregunta: 1167 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Entre las formas de representaci&oacute;n param&eacute;trica del conocimiento se encuentra:";
 choices[12]= new Array();
 choices[12][0] = "Reglas de producci&oacute;n";
 choices[12][1] = "Reglas sem&aacute;nticas";
 choices[12][2] = "Redes neuronales";
 choices[12][3] = "Restricciones";
 answers[12] = choices[12][2];
 units[12] = "64";
 comments[12] = "Id Pregunta: 1167. ";


//  Id pregunta: 1187 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Indicar la respuesta incorrecta sobre los sistemas expertos en inteligencia artificial:";
 choices[13]= new Array();
 choices[13][0] = "La caracter&iacute;stica diferencial de los sistemas expertos es la ubicaci&oacute;n externa del conocimiento necesario para resolver un problema, que aparece como estructura procesable separada de los procedimientos que la manipulan";
 choices[13][1] = "Un entorno es b&aacute;sicamente un lenguaje m&aacute;s un conjunto de procedimientos hechos como ayuda a la construcci&oacute;n de sistemas expertos";
 choices[13][2] = "Una shell es b&aacute;sicamente un sistema experto con la base de conocimiento vac&iacute;a; es decir, la arquitectura del sistema final est&aacute; preestablecida";
 choices[13][3] = "Los lenguajes utilizados en la construcci&oacute;n de sistemas expertos son principalmente lenguajes orientados a la inteligencia artificial como el LISP o el PROLOG y lenguajes convencionales de prop&oacute;sito general tales como el C, FORTRAN, PASCAL, etc";
 answers[13] = choices[13][3];
 units[13] = "64";
 comments[13] = "Id Pregunta: 1187. ";


//  Id pregunta: 1212 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  La clave p&uacute;blica forma parte de un:";
 choices[14]= new Array();
 choices[14][0] = "Sistema criptogr&aacute;fico sim&eacute;trico";
 choices[14][1] = "Sistema criptogr&aacute;fico anal&oacute;gico";
 choices[14][2] = "Sistema criptogr&aacute;fico asim&eacute;trico";
 choices[14][3] = "Sistema criptogr&aacute;fico propietario de la Administraci&oacute;n P&uacute;blica";
 answers[14] = choices[14][2];
 units[14] = "72";
 comments[14] = "Id Pregunta: 1212. ";


//  Id pregunta: 1255 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  Las bases de datos tipo ORACLE o Mysql est&aacute;n estructuradas seg&uacute;n un modelo:";
 choices[15]= new Array();
 choices[15][0] = "Sem&aacute;ntico";
 choices[15][1] = "Conceptual";
 choices[15][2] = "Relacional";
 choices[15][3] = "Jer&aacute;rquico";
 answers[15] = choices[15][2];
 units[15] = "58";
 comments[15] = "Id Pregunta: 1255. ";


//  Id pregunta: 1259 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  Las operaciones que permiten pasar la informaci&oacute;n indicada por un operando al destino indicado por otro se llaman:";
 choices[16]= new Array();
 choices[16][0] = "De bifurcaci&oacute;n condicional";
 choices[16][1] = "Aritm&eacute;ticas";
 choices[16][2] = "De transferencia";
 choices[16][3] = "De desplazamiento";
 answers[16] = choices[16][2];
 units[16] = "47";
 comments[16] = "Id Pregunta: 1259. ";


//  Id pregunta: 1379 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Un almac&eacute;n de datos o &quot;data warehouse&quot;:";
 choices[17]= new Array();
 choices[17][0] = "Integra datos de diferentes sistemas de informaci&oacute;n de la organizaci&oacute;n para permitir su an&aacute;lisis posterior por la Direcci&oacute;n.";
 choices[17][1] = "Recopila datos de diferentes &quot;data marts&quot; para permitir su an&aacute;lisis por la Direcci&oacute;n mediante herramientas OLAP.";
 choices[17][2] = "Integra todas las bases de datos que existen en una organizaci&oacute;n para su consulta por la Direcci&oacute;n.";
 choices[17][3] = "Es una base de datos que contiene metainformaci&oacute;n sobre las bases de datos que existen en la organizaci&oacute;n.";
 answers[17] = choices[17][0];
 units[17] = "68";
 comments[17] = "Id Pregunta: 1379. ";


//  Id pregunta: 1418 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Una memoria EEPROM:";
 choices[18]= new Array();
 choices[18][0] = "Podemos programarla una &uacute;nica vez, s&oacute;lo cuando est&aacute; nueva";
 choices[18][1] = "Podemos reprogramarla tras borrarla el&eacute;ctricamente";
 choices[18][2] = "Podemos reprogramarla, tras borrarla con rayos UV";
 choices[18][3] = "Ninguna de las anteriores es correcta";
 answers[18] = choices[18][1];
 units[18] = "47";
 comments[18] = "Id Pregunta: 1418. ";


//  Id pregunta: 1423 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  Una relaci&oacute;n est&aacute; en segunda forma normal si:";
 choices[19]= new Array();
 choices[19][0] = "Est&aacute; en 1FN y todos son atributos toman un s&oacute;lo valor";
 choices[19][1] = "Est&aacute; en 1FN y todos sus atributos no pertenecientes a claves candidatas dependen de forma completa de la clave";
 choices[19][2] = "Est&aacute; en 1FN y sus atributos pertenecen al dominio de la informaci&oacute;n";
 choices[19][3] = "Est&aacute; en 1FN y ning&uacute;n atributo depende funcionalmente de la clave";
 answers[19] = choices[19][1];
 units[19] = "58";
 comments[19] = "Id Pregunta: 1423. ";


//  Id pregunta: 1482 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Un monitor cuya resoluci&oacute;n es de 640 x 480, tiene:";
 choices[20]= new Array();
 choices[20][0] = "480 l&iacute;neas de exploraci&oacute;n (resoluci&oacute;n vertical)";
 choices[20][1] = "640 lineas de exploraci&oacute;n (resoluci&oacute;n vertical)";
 choices[20][2] = "480 pixeles (resoluci&oacute;n horizontal)";
 choices[20][3] = "Ninguna de las anteriores es cierta";
 answers[20] = choices[20][0];
 units[20] = "47";
 comments[20] = "Id Pregunta: 1482. ";


//  Id pregunta: 1571 AÃ±o de creación de pregunta: 2003-01-01
 questions[21]= "22)  &iquest;Cu&aacute;ntos Gigabytes tiene un Terabyte?";
 choices[21]= new Array();
 choices[21][0] = "4";
 choices[21][1] = "256";
 choices[21][2] = "512";
 choices[21][3] = "1024";
 answers[21] = choices[21][3];
 units[21] = "48";
 comments[21] = "Id Pregunta: 1571. ";


//  Id pregunta: 1597 AÃ±o de creación de pregunta: 2003-01-01
 questions[22]= "23)  En relaci&oacute;n con la interfaz ODBC, se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es falsa:";
 choices[22]= new Array();
 choices[22][0] = "Es la implementaci&oacute;n realizada por Microsoft de las especificaciones CLI (Call Level Interface) para el acceso desde aplicaciones a sistemas gestores de base de datos";
 choices[22][1] = "La idea que sustenta el desarrollo de ODBC es la de permitir que una misma aplicaci&oacute;n pueda interactuar con distintos sistemas gestores de base de datos";
 choices[22][2] = "Dispone de flexibilidad como interfaz pero impide aprovechar las ventajas de la arquitectura cliente servidor";
 choices[22][3] = "Permite que lo que un sistema gestor pueda hacerle sea transparente a la aplicaci&oacute;n, aunque no implementa nuevas capacidades";
 answers[22] = choices[22][2];
 units[22] = "58";
 comments[22] = "Id Pregunta: 1597. NULL";


//  Id pregunta: 1610 AÃ±o de creación de pregunta: 2003-01-01
 questions[23]= "24)  La t&eacute;cnica criptogr&aacute;fica basada en un conjunto de m&eacute;todos que permiten tener comunicaci&oacute;n segura entre las partes, siempre y cuando previamente ambas partes hayan intercambiado una clave privada, se denomina:";
 choices[23]= new Array();
 choices[23][0] = "Criptograf&iacute;a asim&eacute;trica.";
 choices[23][1] = "Criptograf&iacute;a sim&eacute;trica.";
 choices[23][2] = "Criptograf&iacute;a de clave p&uacute;blica.";
 choices[23][3] = "Criptograf&iacute;a paralela.";
 answers[23] = choices[23][1];
 units[23] = "72";
 comments[23] = "Id Pregunta: 1610. Junta Andaluc&iacute;a";


//  Id pregunta: 1622 AÃ±o de creación de pregunta: 2003-01-01
 questions[24]= "25)  Se&ntilde;ale cu&aacute;l de las siguientes frases es incorrecta, cuando hablamos de una arquitectura cliente-servidor:";
 choices[24]= new Array();
 choices[24][0] = "El entorno en que se desenvuelve una arquitectura cliente-servidor es homog&eacute;neo y por tanto tiene la ventaja de no requerir interfaz para su comunicaci&oacute;n";
 choices[24][1] = "Se distinguen dos tipos de arquitectura cliente-servidor: modelo de 2 capas y modelo de 3 capas";
 choices[24][2] = "Se trata de una arquitectura escalable, es decir susceptible de ampliarse tanto verticalmente (con mayor n&uacute;mero de servidores) como horizontalmente (con mayor n&uacute;mero de clientes)";
 choices[24][3] = "El proceso clinte proporciona la interfaz del usuario y el proceso servidor los medios para gestionar los recursos compartidos";
 answers[24] = choices[24][0];
 units[24] = "50";
 comments[24] = "Id Pregunta: 1622. ";


//  Id pregunta: 1624 AÃ±o de creación de pregunta: 2003-01-01
 questions[25]= "26)  Se&ntilde;ale la afirmaci&oacute;n correcta entre las siguientes:";
 choices[25]= new Array();
 choices[25][0] = "Mas del 30% de los grandes proyectos inform&aacute;ticos alcanzan resultados satisfactorios.";
 choices[25][1] = "Est&aacute;ndares como CMM, CMMI, SPICE y otros son f&aacute;ciles de aplicar en la mayor&iacute;a de los proyectos informaticos.";
 choices[25][2] = "Expertos de la OCDE vienen advirtiendo sobre las amenazas que para la implantaci&oacute;n de la administraci&oacute;n electr&oacute;nica suponen los reiterados fracasos de las administraciones en los grandes proyectos inform&aacute;ticos que vienen abordando.";
 choices[25][3] = "Los m&eacute;todos de programaci&oacute;n &aacute;giles han demostrado sobradamente su eficacia para proyectos no triviales.";
 answers[25] = choices[25][2];
 units[25] = "38";
 comments[25] = "Id Pregunta: 1624. Junta Andaluc&iacute;a";


//  Id pregunta: 1626 AÃ±o de creación de pregunta: 2003-01-01
 questions[26]= "27)  Si estamos hablando de GNOME, nos referimos a:";
 choices[26]= new Array();
 choices[26][0] = "Proyecto para generar un nuevo sistema operativo.";
 choices[26][1] = "Un proyecto para crear un entorno de escritorio sobre GNU/ LINUX.";
 choices[26][2] = "Un proyecto ofim&aacute;tico multiplataforma.";
 choices[26][3] = "Un cliente de mensajer&iacute;a instant&aacute;nea.";
 answers[26] = choices[26][1];
 units[26] = "62";
 comments[26] = "Id Pregunta: 1626. Junta Andaluc&iacute;a";


//  Id pregunta: 1641 AÃ±o de creación de pregunta: 2004-01-01
 questions[27]= "28)  Seg&uacute;n la LSSI, el env&iacute;o de comunicaciones comerciales o publicitarias sin la autorizaci&oacute;n previa del destinatario constituye una infracci&oacute;n ...";
 choices[27]= new Array();
 choices[27][0] = "Leve";
 choices[27][1] = "Grave";
 choices[27][2] = "Muy grave";
 choices[27][3] = "No constituye infracci&oacute;n";
 answers[27] = choices[27][0];
 units[27] = "30";
 comments[27] = "Id Pregunta: 1641. ";


//  Id pregunta: 1645 AÃ±o de creación de pregunta: 2004-01-01
 questions[28]= "29)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre la arquitectura hardware NUMA es cierta?";
 choices[28]= new Array();
 choices[28][0] = "Se tarda m&aacute;s en acceder a ciertas zonas de memoria que a otras";
 choices[28][1] = "Cada procesador tiene su propia memoria local";
 choices[28][2] = "Cada procesador puede acceder a las memorias de otros procesadores";
 choices[28][3] = "Todas las anteriores son ciertas";
 answers[28] = choices[28][3];
 units[28] = "45";
 comments[28] = "Id Pregunta: 1645. ";


//  Id pregunta: 1682 AÃ±o de creación de pregunta: 2004-01-01
 questions[29]= "30)  Respecto al software gratuito y al software libre podemos decir que";
 choices[29]= new Array();
 choices[29][0] = "El software gratuito siempre es libre";
 choices[29][1] = "El software libre siempre es gratuito";
 choices[29][2] = "El software libre y el software gratuito son dos terminos equivalentes";
 choices[29][3] = "Ninguna de las afirmaciones anteriores es correcta";
 answers[29] = choices[29][3];
 units[29] = "61";
 comments[29] = "Id Pregunta: 1682. ";


//  Id pregunta: 1685 AÃ±o de creación de pregunta: 2004-01-01
 questions[30]= "31)  Sobre el e-learnig";
 choices[30]= new Array();
 choices[30][0] = "Es el uso de las tecnolog&iacute;as multimedia para mejorar y desarrollar nuevas estrategias de aprendizaje";
 choices[30][1] = "Algunas de las facilidades que aporta el e-learning son la accesibilidad geogr&aacute;fica y la flexibilidad en el tiempo";
 choices[30][2] = "Las dos afirmaciones anteriores son correctas";
 choices[30][3] = "Todas las afirmaciones anteriores son falsas";
 answers[30] = choices[30][2];
 units[30] = "66";
 comments[30] = "Id Pregunta: 1685. ";


//  Id pregunta: 1687 AÃ±o de creación de pregunta: 2004-01-01
 questions[31]= "32)  Si comparamos una base de datos relacional y otra multidimensional, es FALSO que:";
 choices[31]= new Array();
 choices[31][0] = "Las BDR son mejores que las BDM para obtener vistas de unos datos en funci&oacute;n de otros.";
 choices[31][1] = "Las BDR est&aacute;n optimizadas para la inserci&oacute;n de registros y el control concurrente de usuarios.";
 choices[31][2] = "Las BDM tienen informaci&oacute;n m&aacute;s consistente que las BDR.";
 choices[31][3] = "Las BDM son mejores para el estudio a alto nivel de los datos, ya que ofrecen mayor flexibilidad y rapidez de acceso para el &aacute;nalisis de los mismos.";
 answers[31] = choices[31][0];
 units[31] = "68";
 comments[31] = "Id Pregunta: 1687. ";


//  Id pregunta: 1733 AÃ±o de creación de pregunta: 2006-01-01
 questions[32]= "33)  Entre los siguientes se&ntilde;ale el que no es un sistema de archivos de sistemas operativos de la familia UNIX";
 choices[32]= new Array();
 choices[32][0] = "ZFS";
 choices[32][1] = "XFS";
 choices[32][2] = "CFS";
 choices[32][3] = "NFS";
 answers[32] = choices[32][2];
 units[32] = "54";
 comments[32] = "Id Pregunta: 1733. CFS es Cluster File System";


//  Id pregunta: 1859 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  En relaci&oacute;n al protocolo OCSP (Online Certificate Status Protocol): ";
 choices[33]= new Array();
 choices[33][0] = "Se utiliza para conocer el estado de revocaci&oacute;n de un certificado X.509";
 choices[33][1] = "Los mensajes enviados v&iacute;a OCSP se codifican en ASN.1";
 choices[33][2] = "Se define en el RFC 2560";
 choices[33][3] = "Todas las anteriores respuestas son ciertas";
 answers[33] = choices[33][3];
 units[33] = "74";
 comments[33] = "Id Pregunta: 1859. NULL";


//  Id pregunta: 1860 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  Se&ntilde;ale la falsa:";
 choices[34]= new Array();
 choices[34][0] = "XML Signature asegura la integridad de partes de documentos XML transportados";
 choices[34][1] = "XML Signature puede aplicarse a cualquier contenido digital (objeto de datos), incluyendo XML";
 choices[34][2] = "XML Key Management es un protocolo para distribuir y registrar claves p&uacute;blicas. Lo que hace es ocultar la parte compleja que surge con PKI. Est&aacute; compuesto de: el registro de la clave p&uacute;blica (X-KRSS) y la informaci&oacute;n de clave p&uacute;blica (X-KISS).";
 choices[34][3] = "Todas las anteriores son falsas";
 answers[34] = choices[34][3];
 units[34] = "74";
 comments[34] = "Id Pregunta: 1860. NULL";


//  Id pregunta: 1902 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  Cada uno de los multiples elementos utilizados internamente por el procesador para el de almacenamiento de datos intermedios en la ejecuci&oacute;n de una instrucci&oacute;n";
 choices[35]= new Array();
 choices[35][0] = "registro";
 choices[35][1] = "cache";
 choices[35][2] = "buffer";
 choices[35][3] = "pipelining";
 answers[35] = choices[35][0];
 units[35] = "47";
 comments[35] = "Id Pregunta: 1902. ";


//  Id pregunta: 4237 AÃ±o de creación de pregunta: 2007-01-01
 questions[36]= "37)  Indique que significan las siglas AJAX";
 choices[36]= new Array();
 choices[36][0] = "Asynchronous Java And  XML";
 choices[36][1] = "Asynchronous JavaScript And  XML";
 choices[36][2] = "Asynchronous JavaScript And  XSL";
 choices[36][3] = "Advanced JavaScript And  XML";
 answers[36] = choices[36][1];
 units[36] = "114";
 comments[36] = "Id Pregunta: 4237. ";


//  Id pregunta: 4575 AÃ±o de creación de pregunta: 2007-01-01
 questions[37]= "38)  Indica cual de las siguientes definiciones de firma electr&oacute;nica es Ia que aparece en Ia Ley 59/2003, de 19 de diciembre:";
 choices[37]= new Array();
 choices[37][0] = "es el resultado de obtener por medio de mecanismos o dispositivos un patr&oacute;n que se asocie biun&iacute;voca mente a un individuo y a su voluntad de firmar.";
 choices[37][1] = "es el conjunto de datos en forma electr&oacute;nica, consignados junto a otros o asociados con ellos, que pueden ser utilizados como medio de identificaci&oacute;n del firmante.";
 choices[37][2] = "es el documento electr&oacute;nico que acredita electr&oacute;nicamente Ia identidad personal de su titular y permite la firma de documentos.";
 choices[37][3] = "es el conjunto de datos &uacute;nicos, como c&oacute;digos o claves criptogr&aacute;ficas privadas, que el firmante utiliza para firmar documentos.";
 answers[37] = choices[37][1];
 units[37] = "30";
 comments[37] = "Id Pregunta: 4575. Ley 59/2003, art&iacute;culo 3";


//  Id pregunta: 4822 AÃ±o de creación de pregunta: 2007-01-01
 questions[38]= "39)  &iquest;Qu&eacute; elementos de los siguientes pueden aparecer en un diagrama de Casos de Uso con la notaci&oacute;n de UML (Unified Modeling Language)?";
 choices[38]= new Array();
 choices[38][0] = "Objetos, casos de uso y actividades.";
 choices[38][1] = "Actores, objetos y relaciones.";
 choices[38][2] = "Casos de uso, actores y relaciones.";
 choices[38][3] = "Actores, casos de uso y actividades.";
 answers[38] = choices[38][2];
 units[38] = "84";
 comments[38] = "Id Pregunta: 4822. examen TIC 2006";


//  Id pregunta: 4923 AÃ±o de creación de pregunta: 2003-01-01
 questions[39]= "40)  Los DTD (Document Type Definition) en tecnolog&iacute;a XML:";
 choices[39]= new Array();
 choices[39][0] = "Definen la estructura del documento XML.";
 choices[39][1] = "Sirven para dar formato a la informaci&oacute;n.";
 choices[39][2] = "Siempre han de estar incluidos en el XML.";
 choices[39][3] = "Contienen elementos y atributos.";
 answers[39] = choices[39][0];
 units[39] = "69";
 comments[39] = "Id Pregunta: 4923. Examen TIC B 2007";


//  Id pregunta: 5438 AÃ±o de creación de pregunta: 2003-01-01
 questions[40]= "41)  Los sistemas colaborativos buscan";
 choices[40]= new Array();
 choices[40][0] = "Que todo el mundo participe en la toma de decisiones";
 choices[40][1] = "La puesta a disposici&oacute;n de un gran volumen de informaci&oacute;n";
 choices[40][2] = "Integrar el trabajo de muchos usuarios concurrentes en un solo proyecto";
 choices[40][3] = "El despliegue de un sistema de informaci&oacute;n que abarque a todo el personal de la organizaci&oacute;n";
 answers[40] = choices[40][2];
 units[40] = "71";
 comments[40] = "Id Pregunta: 5438. Castilla y Le&oacute;n";


//  Id pregunta: 5581 AÃ±o de creación de pregunta: 2003-01-01
 questions[41]= "42)  &iquest;Cu&aacute;l de las siguientes plataformas de e-learning NO es libre?";
 choices[41]= new Array();
 choices[41][0] = "Atutor";
 choices[41][1] = "ILIAS";
 choices[41][2] = "LON-CAPA";
 choices[41][3] = "Blackboard";
 answers[41] = choices[41][3];
 units[41] = "66";
 comments[41] = "Id Pregunta: 5581. ";


//  Id pregunta: 5676 AÃ±o de creación de pregunta: 2003-01-01
 questions[42]= "43)  Indique la respuesta incorrecta en relaci&oacute;n a Sistemas de Informaci&oacute;n Geogr&aacute;ficos:";
 choices[42]= new Array();
 choices[42][0] = "El t&eacute;rmino Clearinghouse se refiere al conjunto de datos marco utilizado en el Proyecto Dublin Core.";
 choices[42][1] = "El est&aacute;ndar m&aacute;s extendido para la implementaci&oacute;n de servicios de cat&aacute;logo es el ISO 23950.";
 choices[42][2] = "ISO 19110 se ocupa de la metodolog&iacute;a de catalogaci&oacute;n de objetos geogr&aacute;ficos.";
 choices[42][3] = "ISO ha producido el ISO 19115 Metadatos.";
 answers[42] = choices[42][0];
 units[42] = "67";
 comments[42] = "Id Pregunta: 5676. NULL";


//  Id pregunta: 5694 AÃ±o de creación de pregunta: 2003-01-01
 questions[43]= "44)  Se&ntilde;ale cual de los siguientes datos no se almacena en la zona privada del chip criptogr&aacute;fico del DNI electr&oacute;nico:";
 choices[43]= new Array();
 choices[43][0] = "Claves privadas del ciudadano";
 choices[43][1] = "Certificado de autenticaci&oacute;n";
 choices[43][2] = "Claves p&uacute;blicas del ciudadano";
 choices[43][3] = "Certificado de firma";
 answers[43] = choices[43][2];
 units[43] = "74";
 comments[43] = "Id Pregunta: 5694. NULL";


//  Id pregunta: 5721 AÃ±o de creación de pregunta: 2009-01-01
 questions[44]= "45)  El XSLT transforma:";
 choices[44]= new Array();
 choices[44][0] = "S&oacute;lo de XML a XML";
 choices[44][1] = "De XML a otro documento";
 choices[44][2] = "S&oacute;lo de XML a HTML";
 choices[44][3] = "De un documento a XML";
 answers[44] = choices[44][1];
 units[44] = "69";
 comments[44] = "Id Pregunta: 5721. MAP 2008 A1";


//  Id pregunta: 5747 AÃ±o de creación de pregunta: 2009-01-01
 questions[45]= "46)  &iquest;Cu&aacute;l es la longitud del resumen de la funci&oacute;n SHA-1?";
 choices[45]= new Array();
 choices[45][0] = "64 bits";
 choices[45][1] = "128 bits";
 choices[45][2] = "160 bits";
 choices[45][3] = "224 bits";
 answers[45] = choices[45][2];
 units[45] = "72";
 comments[45] = "Id Pregunta: 5747. ";


//  Id pregunta: 5758 AÃ±o de creación de pregunta: 2009-01-01
 questions[46]= "47)  En cuanto a la licencia LGPL, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[46]= new Array();
 choices[46][0] = "Un software con licencia LGPL puede ser modificado y redistribuido como software propietario siempre que se trate del driver de un dispositivo.";
 choices[46][1] = "Un software con licencia LGPL puede ser modificado y redistribuido como software propietario siempre que se trate de una librer&iacute;a sin interfaz con el usuario.";
 choices[46][2] = "Un software con licencia LGPL puede utilizar librer&iacute;as propietarias, y el conjunto tener la licencia LGPL.";
 choices[46][3] = "Un software propietario puede utilizar librer&iacute;as LGPL sin dejar de ser propietario.";
 answers[46] = choices[46][3];
 units[46] = "61";
 comments[46] = "Id Pregunta: 5758. ";


//  Id pregunta: 5852 AÃ±o de creación de pregunta: 2009-01-01
 questions[47]= "48)  Se&ntilde;ale la respuesta correcta sobre la firma digital:";
 choices[47]= new Array();
 choices[47][0] = "Ofrece plenas garant&iacute;as de la integridad, confidencialidad y no repudio del documento firmado";
 choices[47][1] = "Se puede conseguir mediante protocolos de cifrado de clave secreta";
 choices[47][2] = "El DSS (Digital Signature Standard) est&aacute; adoptado como una norma por ISO/IEC";
 choices[47][3] = "La firma ciega (Blind signature) se obtiene firmando directamente el correspondiente mensaje, en vez del resumen de &eacute;ste";
 answers[47] = choices[47][1];
 units[47] = "30";
 comments[47] = "Id Pregunta: 5852. Pregunta 32";


//  Id pregunta: 5861 AÃ±o de creación de pregunta: 2009-01-01
 questions[48]= "49)  El sistema de redundancia que calcula dos bloques de paridad independientes por cada escritura, enviando cada uno de los bloques de paridad a un disco diferente y permite recuperarse del fallo simult&aacute;neo de dos discos es:";
 choices[48]= new Array();
 choices[48][0] = "RAID 0";
 choices[48][1] = "RAID 6";
 choices[48][2] = "RAID 5";
 choices[48][3] = "RAID 3";
 answers[48] = choices[48][1];
 units[48] = "48";
 comments[48] = "Id Pregunta: 5861. MAP 2008 A1";


//  Id pregunta: 5872 AÃ±o de creación de pregunta: 2009-01-01
 questions[49]= "50)  Indique cu&aacute;l de las siguientes afirmaciones es CIERTA:";
 choices[49]= new Array();
 choices[49][0] = "Las funciones hash se utilizan en los mecanismos de cifrado/descifrado de mensajes";
 choices[49][1] = "Las funciones hash se pueden utilizar para garantizar la integridad de los mensajes transmitidos";
 choices[49][2] = "Las funciones hash generan valores cuya longitud, en bits, depende de la longitud del mensaje original";
 choices[49][3] = "Las funciones hash requieren el uso de claves de cifrado";
 answers[49] = choices[49][1];
 units[49] = "72";
 comments[49] = "Id Pregunta: 5872. MAP 2008 A1";


//  Id pregunta: 5988 AÃ±o de creación de pregunta: 2010-01-01
 questions[50]= "51)  Adem&aacute;s de controlar el correcto funcionamiento del sistema y poner los medios para corregir sus funciones, &iquest;qu&eacute; funci&oacute;n lecorresponder&iacute;a a un administrador de sistemas operativos?";
 choices[50]= new Array();
 choices[50][0] = "Colaborar en el desarrollo de nuevas versiones de los sistemas operativos o de parches para ellos.";
 choices[50][1] = "Planificar y realizar la adquisici&oacute;n de nuevo equipamiento.";
 choices[50][2] = "Instalar el sistema operativo, actualizar los parches, monitorizar el uso de recursos y corregir las posibles incidencias.";
 choices[50][3] = "Desarrollar los sistemas de informaci&oacute;n de la organizaci&oacute;n.";
 answers[50] = choices[50][2];
 units[50] = "52";
 comments[50] = "Id Pregunta: 5988. TIC A 2009";


//  Id pregunta: 6333 AÃ±o de creación de pregunta: 2010-01-01
 questions[51]= "52)  A la hora de aplicar m&eacute;todos de data mining:";
 choices[51]= new Array();
 choices[51][0] = "Lo &uacute;nico importante es que se disponga de muchos datos.";
 choices[51][1] = "Debe disponerse de muchos datos residentes en una base de datos relacional.";
 choices[51][2] = "Lo m&aacute;s importante es disponer de una buena herramienta comercial.";
 choices[51][3] = "Las bases de datos deben haberse integrado en un Data Warehouse para que los datos sean coherentes.";
 answers[51] = choices[51][3];
 units[51] = "68";
 comments[51] = "Id Pregunta: 6333. ";


//  Id pregunta: 6427 AÃ±o de creación de pregunta: 2010-01-01
 questions[52]= "53)  De las siguientes aplicaciones, &iquest;Cu&aacute;l no es un servidor de aplicaciones?";
 choices[52]= new Array();
 choices[52][0] = "Apache Geronimo";
 choices[52][1] = "Jboss";
 choices[52][2] = "eXo";
 choices[52][3] = "Resin";
 answers[52] = choices[52][2];
 units[52] = "62";
 comments[52] = "Id Pregunta: 6427. NULL";


//  Id pregunta: 6446 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)  Los usuarios de dispositivos m&oacute;viles con Windows Mobile 6, pueden sincronizarse con Exchange Server mediante el uso, en el dispositivo m&oacute;vil, de:";
 choices[53]= new Array();
 choices[53][0] = "PalmSync";
 choices[53][1] = "StrongARM";
 choices[53][2] = "MobileSync";
 choices[53][3] = "ActiveSync";
 answers[53] = choices[53][3];
 units[53] = "47";
 comments[53] = "Id Pregunta: 6446. Castilla La Mancha 2009";


//  Id pregunta: 7169 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  Los sistemas OLTP se utilizan para:";
 choices[54]= new Array();
 choices[54][0] = "Almacenar gran cantidad de datos de forma integrada, no vol&aacute;til y variable en el tiempo.";
 choices[54][1] = "Generar informes para la direcci&oacute;n.";
 choices[54][2] = "Captura de datos heterog&eacute;neos y sin organizaci&oacute;n de diferentes fuentes.";
 choices[54][3] = "Agiliza la consulta de grandes vol&uacute;menes de datos.";
 answers[54] = choices[54][2];
 units[54] = "68";
 comments[54] = "Id Pregunta: 7169. Examen TIC B 2009";


//  Id pregunta: 7173 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  &iquest;Qu&eacute; algoritmo de cifrado fue designado por la Administraci&oacute;n Federal Americana como est&aacute;ndar de cifrado sucesor del algoritmo DES?";
 choices[55]= new Array();
 choices[55][0] = "Triple DES";
 choices[55][1] = "AES";
 choices[55][2] = "IDEA";
 choices[55][3] = "Blowfish";
 answers[55] = choices[55][1];
 units[55] = "72";
 comments[55] = "Id Pregunta: 7173. Examen TIC B 2009";


//  Id pregunta: 7337 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  &iquest;Qui&eacute;n es el creador del software de cifrado PGP (Pretty Good Privacy)?";
 choices[56]= new Array();
 choices[56][0] = "Richard Stallman";
 choices[56][1] = "Phil Zimmermann";
 choices[56][2] = "Konrad Zuse";
 choices[56][3] = "Alan Turing";
 answers[56] = choices[56][1];
 units[56] = "72";
 comments[56] = "Id Pregunta: 7337. NULL";


//  Id pregunta: 8199 AÃ±o de creación de pregunta: 2011-01-01
 questions[57]= "58)  Comparando el m&eacute;todo HTTP GET con el m&eacute;todo HTTP POST, se cumple que: ";
 choices[57]= new Array();
 choices[57][0] = "S&oacute;lo HTTP GET est&aacute; definido como idempotente. ";
 choices[57][1] = "Ambos requieren declaraci&oacute;n expl&iacute;cita al usarlos en un tag HTML form. ";
 choices[57][2] = "S&oacute;lo HTTP POST puede soportar el env&iacute;o de varios par&aacute;metros en un form data set en una misma petici&oacute;n. ";
 choices[57][3] = "S&oacute;lo HTTP POST permite que el agente de usuario haga uso del mecanismo de conexiones persistentes del protocolo.";
 answers[57] = choices[57][0];
 units[57] = "69";
 comments[57] = "Id Pregunta: 8199. Examen TIC A1 2010";


//  Id pregunta: 8240 AÃ±o de creación de pregunta: 2011-01-01
 questions[58]= "59)  Seg&uacute;n el modelo de referencia de workflow de la WfMC (Workflow Management Coalition), &iquest;cu&aacute;l de los siguientes elementos interpreta la descripci&oacute;n de los workflows y controla las diferentes instancias de &eacute;stos, as&iacute; como a&ntilde;ade elementos a la lista de trabajo de los usuarios e invoca las aplicaciones necesarias? ";
 choices[58]= new Array();
 choices[58][0] = "El motor de workflow (Workflow engine).";
 choices[58][1] = "La interfaz de programaci&oacute;n de aplicaciones de workflow (WAPI o Workflow Application Programming Interface).";
 choices[58][2] = "El cliente de workflow (Workflow client)";
 choices[58][3] = "El servicio de representaci&oacute;n de workflow (Workflow Enactment Service).";
 answers[58] = choices[58][3];
 units[58] = "71";
 comments[58] = "Id Pregunta: 8240. Examen TIC A2 2010";


//  Id pregunta: 8251 AÃ±o de creación de pregunta: 2011-01-01
 questions[59]= "60)  Con respecto a sistemas de almacenamiento, indique cu&aacute;l de las siguientes asociaciones de t&eacute;rminos es correcta:";
 choices[59]= new Array();
 choices[59][0] = "Protocolos: CIFS, NDMP, iFCP, NFS.";
 choices[59][1] = "Dispositivos &oacute;pticos: DVD, MO, LTO, UDO.";
 choices[59][2] = "Redes SAN: SCSI, ESCON, FICON, WAFS.";
 choices[59][3] = "Formatos de cintas: FATA, TRAVAN, DLT, DAT.";
 answers[59] = choices[59][0];
 units[59] = "48";
 comments[59] = "Id Pregunta: 8251. Examen TIC A1 2010";


//  Id pregunta: 8416 AÃ±o de creación de pregunta: 2011-01-01
 questions[60]= "61)  Se dice que un SGBD cumple el ACID test si observa las propiedades de: ";
 choices[60]= new Array();
 choices[60][0] = "(A)tomicidad, (C)onsistencia, (I)ntegridad y (D)urabilidad";
 choices[60][1] = "(A)tomicidad, (C)onfidencialidad, (I)ntegridad y (D)urabilidad";
 choices[60][2] = "(A)tomicidad, (C)onfidencialidad, a(I)slamiento y (D)urabilidad";
 choices[60][3] = "(A)tomicidad, (C)onsistencia, a(I)slamiento y (D)urabilidad";
 answers[60] = choices[60][3];
 units[60] = "57";
 comments[60] = "Id Pregunta: 8416. Examen TIC A2 2010";


//  Id pregunta: 8605 AÃ±o de creación de pregunta: 2011-01-01
 questions[61]= "62)  &iquest;Qu&eacute; es una copia de seguridad incremental?";
 choices[61]= new Array();
 choices[61][0] = "Aquella que copia tan solo los archivos modificados desde la &uacute;ltima copia de seguridad normal, y no marca &eacute;stos como copiados.";
 choices[61][1] = "Aquella que copia tanto los archivos creados como los modificados desde la &uacute;ltima copia de seguridad normal, y no marca lodos estos archivos como copiados";
 choices[61][2] = "Aquella que copia tan solo los archivos creados desde la &uacute;ltima copia de seguridad norma: y marca &eacute;stos como copiados.";
 choices[61][3] = "Aquella que copia tanto los archivos creados como los modificados desde la &uacute;ltima copia de segundad norma!, y marca todos estos archivos como copiados.";
 answers[61] = choices[61][3];
 units[61] = "96";
 comments[61] = "Id Pregunta: 8605. Examen TIC A2 2010 interna";


//  Id pregunta: 8644 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  &iquest;Cu&aacute;l es la definici&oacute;n correcta de 3FN?";
 choices[62]= new Array();
 choices[62][0] = "Una entidad est&aacute; en 3FN si est&aacute; en 2FN y todos los atributos que forman parte de las claves candidatas (atributos principales) tienen dependencia funcional completa respecto de &eacute;stas es decir, no hay dependencias funcionales de atributos no principales respecto de una parte de las claves.";
 choices[62][1] = "Una entidad est&aacute; en 3FN si est&aacute; en 2FN y lodos los atributos que no forman parte de las claves candidatas (atributos no principales) tienen dependencia funcional completa respecto de &eacute;stas, es decir, no hay dependencias funcionales de atributos no principales respecto de una parte de las claves Cada uno de los atributos de una entidad depende de toda la clave.";
 choices[62][2] = "Una entidad est&aacute; en 3FN si est&aacute; en 2FN y todos sus atributos principales dependen directamente de la clave primaria, es decir, no hay dependencias funcionales transitivas de atributos no principales respecto de las claves.";
 choices[62][3] = "Una entidad est&aacute; en 3FN si est&aacute; en 2FN y todos sus atributos no principales dependen directamente de la clave primaria, es decir, no hay dependencias funcionales transitivas de atributos no principales respecto de las claves.";
 answers[62] = choices[62][3];
 units[62] = "57 ,58";
 comments[62] = "Id Pregunta: 8644. Examen TIC A2 2010 interna";


//  Id pregunta: 8823 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  Seg&uacute;n el art&iacute;culo 3 de la Ley 59/2003, de 19 de diciembre, de Firma Electr&oacute;nica, una &quot;firma electr&oacute;nica que permite identificar al firmante y detectar cualquier cambio ulterior de los datos firmados, que est&aacute; vinculada al firmante de manera &uacute;nica y a los datos a que se refiere y que ha sido creada por medios que el firmante puede utilizar, con un alto nivel de confianza, bajo su exclusivo control&quot; es una:";
 choices[63]= new Array();
 choices[63][0] = " Firma electr&oacute;nica ";
 choices[63][1] = " Firma electr&oacute;nica avanzada";
 choices[63][2] = "Firma electr&oacute;nica reconocida";
 choices[63][3] = " Firma electr&oacute;nica validada";
 answers[63] = choices[63][1];
 units[63] = "73.74";
 comments[63] = "Id Pregunta: 8823. Examen UC3M 2010. Definici&oacute;n Firma-e avanzada modificada por Ley de segunda oportunidad 25/2015.";


//  Id pregunta: 8904 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  Un applet de Java de una p&aacute;gina Web &iquest;d&oacute;nde se ejecuta?:";
 choices[64]= new Array();
 choices[64][0] = "En el navegador del cliente.";
 choices[64][1] = "En el servidor Web.";
 choices[64][2] = "En el proxy.";
 choices[64][3] = "En el servidor de aplicaciones";
 answers[64] = choices[64][0];
 units[64] = "60";
 comments[64] = "Id Pregunta: 8904. Operador Ayto. Madrid 2010";


//  Id pregunta: 8921 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  El proceso de normalizaci&oacute;n tiene por objeto";
 choices[65]= new Array();
 choices[65][0] = "Establecer reglas de nombrado uniformes para las entidades, los atributos y las relaciones";
 choices[65][1] = "Obtener el dise&ntilde;o f&iacute;sico del modelo de datos";
 choices[65][2] = "Eliminar las dependencias entre atributos que originen anomal&iacute;as en el tratamiento de los datos";
 choices[65][3] = "Homogeneizar el n&uacute;mero de dimensiones de las tablas de la base de datos";
 answers[65] = choices[65][2];
 units[65] = "58";
 comments[65] = "Id Pregunta: 8921. Operador Ayto. Madrid 2010";


//  Id pregunta: 8959 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  Dentro de las soluciones propietarias de CRM no se encuentra:";
 choices[66]= new Array();
 choices[66][0] = "Compiere";
 choices[66][1] = "SPSS- Clementine";
 choices[66][2] = "Epiphany";
 choices[66][3] = "Todas son soluciones comerciales";
 answers[66] = choices[66][0];
 units[66] = "65";
 comments[66] = "Id Pregunta: 8959. ";


//  Id pregunta: 8965 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  Aquel est&aacute;ndar de la W3C de XMLDSig cuya XMLSignature se encuentra envolviendo el documento firmado es:";
 choices[67]= new Array();
 choices[67][0] = "Enveloped";
 choices[67][1] = "Detached";
 choices[67][2] = "Enveloping";
 choices[67][3] = "Todos los documentos firmados con XMLDSig est&aacute;n envueltos por la XMLDSig";
 answers[67] = choices[67][2];
 units[67] = "73";
 comments[67] = "Id Pregunta: 8965. ";


//  Id pregunta: 9053 AÃ±o de creación de pregunta: 2016-01-01
 questions[68]= "69)  &iquest;Cual de las siguientes NO es un fase de desarrollo web?";
 choices[68]= new Array();
 choices[68][0] = "An&aacute;lisis de requisitos";
 choices[68][1] = "Finalizaci&oacute;n";
 choices[68][2] = "Lanzamiento";
 choices[68][3] = "Desarrollo";
 answers[68] = choices[68][1];
 units[68] = "39";
 comments[68] = "Id Pregunta: 9053. ";


//  Id pregunta: 9091 AÃ±o de creación de pregunta: 2013-01-01
 questions[69]= "70)  La protecci&oacute;n de un programa de ordenador, &iquest;se extiende al c&oacute;digo objeto?";
 choices[69]= new Array();
 choices[69][0] = "No, puesto que no es una creaci&oacute;n intelectual, sino una compilaci&oacute;n autom&aacute;tica de la m&aacute;quina.";
 choices[69][1] = "No, puesto que es algo que no se puede entender, as&iacute; que no se puede proteger.";
 choices[69][2] = "Si, en todos los casos";
 choices[69][3] = "Todas las anteriores son falsas";
 answers[69] = choices[69][2];
 units[69] = "36";
 comments[69] = "Id Pregunta: 9091. ";


//  Id pregunta: 9099 AÃ±o de creación de pregunta: 2013-01-01
 questions[70]= "71)  &iquest;De los siguientes cual no forma parte del ciclo de vida de los derechos digitales?";
 choices[70]= new Array();
 choices[70][0] = "Empaquetado.";
 choices[70][1] = "Envio.";
 choices[70][2] = "Protecci&oacute;n y venta.";
 choices[70][3] = "Consumo.";
 answers[70] = choices[70][1];
 units[70] = "37";
 comments[70] = "Id Pregunta: 9099. ";


//  Id pregunta: 9123 AÃ±o de creación de pregunta: 2013-01-01
 questions[71]= "72)  &iquest;C&oacute;mo se puede enmarcar el proyecto SETIHome de investigaci&oacute;n de vida extraterrestre?";
 choices[71]= new Array();
 choices[71][0] = "Como una soluci&oacute;n de web 2.0";
 choices[71][1] = "Como un ejemplo pr&aacute;ctico de computaci&oacute;n Grid";
 choices[71][2] = "Una soluci&oacute;n basada en tecnolog&iacute;a Oracle.";
 choices[71][3] = "Ninguna respuesta es correcta.";
 answers[71] = choices[71][1];
 units[71] = "45";
 comments[71] = "Id Pregunta: 9123. ";


//  Id pregunta: 9209 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  &iquest;C&oacute;mo es el modelo de conectividad interno del almacenamiento?";
 choices[72]= new Array();
 choices[72][0] = "Bus SCSI y bus ATA/IDE de tipo serie";
 choices[72][1] = "SAS es la evoluci&oacute;n de ATA y SATA la evoluci&oacute;n de SCSI.";
 choices[72][2] = "SAS y SATA son evoluciones que modifican las capas bajas de forma que aseguran la compatibilidad a nivel de software.";
 choices[72][3] = "Ante la falta de escalabilidad, problemas de replicaci&oacute;n y redundancia del almacenamiento interno, para entornos empresariales se suele preferir el almacenamiento externo, en forma de una cabina de discos.";
 answers[72] = choices[72][3];
 units[72] = "48";
 comments[72] = "Id Pregunta: 9209. ";


//  Id pregunta: 9213 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  Dentro de una red FC existen una serie de servicios b&aacute;sicos para su correcto funcionamiento y que son implementadas autom&aacute;ticamente de forma distribuida entre todos los switches que componen la red. Son los siguientes:";
 choices[73]= new Array();
 choices[73][0] = "SNS, RCSN, Login, Servicio de gesti&oacute;n y Servicio de tiempos.";
 choices[73][1] = "Servicio de gesti&oacute;n y servicio de tiempos";
 choices[73][2] = "Login";
 choices[73][3] = "Servidor de nombres que asigna los FCID y permite traducir de WWN a FCID.";
 answers[73] = choices[73][0];
 units[73] = "48";
 comments[73] = "Id Pregunta: 9213. ";


//  Id pregunta: 9232 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  &iquest;Qu&eacute; es Jelly Bean?";
 choices[74]= new Array();
 choices[74][0] = "Sistema operativo de Apple para dispositivos m&oacute;viles";
 choices[74][1] = "Sistema operativo de Apple para ordenadores de sobremesa.";
 choices[74][2] = "Una versi&oacute;n de Android.";
 choices[74][3] = "No existe.";
 answers[74] = choices[74][2];
 units[74] = "52";
 comments[74] = "Id Pregunta: 9232. ";


//  Id pregunta: 9233 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  &iquest;En qu&eacute; se basa la interfaz de usuario de iOS?";
 choices[75]= new Array();
 choices[75][0] = "Concepto de manipulaci&oacute;n directa usando gestos multit&aacute;ctiles.";
 choices[75][1] = "Ejecuci&oacute;n de comandos mediante la selecci&oacute;n de men&uacute;s.";
 choices[75][2] = "S&oacute;lo est&aacute; accesible en sistemas con Jailbreak.";
 choices[75][3] = "Su pantalla principal se denomina WinterBoard.";
 answers[75] = choices[75][0];
 units[75] = "52";
 comments[75] = "Id Pregunta: 9233. ";


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


//  Id pregunta: 9235 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  &iquest;Qu&eacute; es DJL?";
 choices[77]= new Array();
 choices[77][0] = "Un administrador de juegos escrito en Python que permite instalar juegos en Linux.";
 choices[77][1] = "Gestor de juegos que sirve tanto para lanzar los juegos instalados como para instalar juegos desde la red.";
 choices[77][2] = "No existe";
 choices[77][3] = "A) y B) son correctas.";
 answers[77] = choices[77][3];
 units[77] = "54";
 comments[77] = "Id Pregunta: 9235. ";


//  Id pregunta: 9236 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  Antes de la serie 2.6 del kernel de linux, &iquest;qu&eacute; versiones del n&uacute;cleo existieron?";
 choices[78]= new Array();
 choices[78][0] = "Versi&oacute;n de producci&oacute;n y de desarrollo.";
 choices[78][1] = "Versi&oacute;n estable hasta el momento y versiones experimentales que se usaban para programar, comprobar y verificar nuevas caracter&iacute;sticas.";
 choices[78][2] = "La versi&oacute;n estable era el resultado final de las versiones de desarrollo o experimentales.";
 choices[78][3] = "Todas son correctas.";
 answers[78] = choices[78][3];
 units[78] = "53";
 comments[78] = "Id Pregunta: 9236. ";


//  Id pregunta: 9262 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  Si se quisiera un middleware para una grid, se elegir&iacute;a:";
 choices[79]= new Array();
 choices[79][0] = "Globus Toolkit. ";
 choices[79][1] = "Cluster Veritas.";
 choices[79][2] = "Arduino.";
 choices[79][3] = "Data protector. ";
 answers[79] = choices[79][0];
 units[79] = "45";
 comments[79] = "Id Pregunta: 9262. Examen TICA2-2011";


//  Id pregunta: 9601 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  &iquest;Qu&eacute; componentes se ubican en el n&uacute;cleo dependiente del sistema operativo UNIX?";
 choices[80]= new Array();
 choices[80][0] = "Las interrupciones";
 choices[80][1] = "El scheduler";
 choices[80][2] = "Los drivers de los dispositivos";
 choices[80][3] = "a) y c) son correctas";
 answers[80] = choices[80][3];
 units[80] = "53";
 comments[80] = "Id Pregunta: 9601. ";


//  Id pregunta: 9608 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  &iquest;Cual es una ventaja de los sistemas de base de datos NoSQL?";
 choices[81]= new Array();
 choices[81][0] = "Manejan eficientemente grandes cantidades de datos";
 choices[81][1] = "Ofrecen una gran eficiencia en operaciones en tiempo real";
 choices[81][2] = "Utilizan estructuras flexibles";
 choices[81][3] = "Todas las anteriores lo son";
 answers[81] = choices[81][3];
 units[81] = "58";
 comments[81] = "Id Pregunta: 9608. NULL";


//  Id pregunta: 9671 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  Los sistemas multicomputador pueden dividirse, seg&uacute;n la taxonom&iacute;a de Flynn en:";
 choices[82]= new Array();
 choices[82][0] = "SISD, SIMD, MISD y MIMD.";
 choices[82][1] = "UMA y NUMA.";
 choices[82][2] = "MMC y MMD.";
 choices[82][3] = "Ninguna de las anteriores.";
 answers[82] = choices[82][3];
 units[82] = "45";
 comments[82] = "Id Pregunta: 9671. ";


//  Id pregunta: 9675 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  El serviceware permite:";
 choices[83]= new Array();
 choices[83][0] = "Gestionar el uso del Cl&uacute;ster que hace cada usuario.";
 choices[83][1] = "Gestionar el uso del Grid que hace cada usuario.";
 choices[83][2] = "Controlar la red de comunicaciones del Cl&uacute;ster.";
 choices[83][3] = "Controlar la red de comunicaciones del Grid.";
 answers[83] = choices[83][1];
 units[83] = "45";
 comments[83] = "Id Pregunta: 9675. ";


//  Id pregunta: 9686 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  Respecto a las proyecciones (Georreferenciaci&oacute;n Directa) (elija la falsa):";
 choices[84]= new Array();
 choices[84][0] = "Ofrecen la posibilidad de localizar un fen&oacute;meno geogr&aacute;fico de un determinado nombre, devolviendo la localizaci&oacute;n mediante las coordenadas geogr&aacute;ficas del mismo.";
 choices[84][1] = "Se pueden acotar indicando la extensi&oacute;n espacial de la b&uacute;squeda.";
 choices[84][2] = "Describen el conjunto de reglas de simbolizaci&oacute;n de los fen&oacute;menos geogr&aacute;ficos que detectan.";
 choices[84][3] = "Si hay varios que cumplen los criterios de b&uacute;squeda, el servicio suele proponer atributos adicionales.";
 answers[84] = choices[84][2];
 units[84] = "67";
 comments[84] = "Id Pregunta: 9686. NULL";


//  Id pregunta: 9780 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  &iquest;Cu&aacute;l de las siguientes herramientas utiliza un SGBD (sistema de gesti&oacute;n de bases de datos) para asegurar la atomicidad y persistencia de las transacciones?";
 choices[85]= new Array();
 choices[85][0] = "M&oacute;dulo de comprobaci&oacute;n de la integridad. ";
 choices[85][1] = "El esquema conceptual. ";
 choices[85][2] = "Fichero diario. ";
 choices[85][3] = "Triggers. ";
 answers[85] = choices[85][2];
 units[85] = "57";
 comments[85] = "Id Pregunta: 9780. Examen TIC A2 2013";


//  Id pregunta: 9783 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  El lenguaje de marcado PMML (Predictive Model Markup Language) es un lenguaje relacionado con las t&eacute;cnicas relativas a:";
 choices[86]= new Array();
 choices[86][0] = "Virtualizaci&oacute;n de escritorio. ";
 choices[86][1] = "Virtualizaci&oacute;n de servidores. ";
 choices[86][2] = "Sistemas SAN. ";
 choices[86][3] = "Miner&iacute;a de datos.";
 answers[86] = choices[86][3];
 units[86] = "68";
 comments[86] = "Id Pregunta: 9783. Examen TIC A2 2013";


//  Id pregunta: 9866 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  En relaci&oacute;n con lenguajes de marcado, indique cu&aacute;l de las siguientes afirmaciones es INCORRECTA";
 choices[87]= new Array();
 choices[87][0] = "XSLT es un lenguaje de marcado para las transformaciones de documentos XML.";
 choices[87][1] = "El XML describe el contenido de la informaci&oacute;n y la estructura, mientras que HTML est&aacute; orientado a la presentaci&oacute;n de la informaci&oacute;n.";
 choices[87][2] = "XPath permite buscar y seleccionar parte de un fichero XML sin utilizar su estructura.";
 choices[87][3] = "CSS permite dar formato tanto a ficheros HTML como a ficheros XML.";
 answers[87] = choices[87][2];
 units[87] = "69";
 comments[87] = "Id Pregunta: 9866. TIC A1, Examen 2013";


//  Id pregunta: 9973 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  Indique cu&aacute;l de los siguientes elementos NO se asocia a un sistema datawarehouse: ";
 choices[88]= new Array();
 choices[88][0] = "Un motor de transacciones.";
 choices[88][1] = "Las herramientas de Extracci&oacute;n, Transformaci&oacute;n y Carga de datos.";
 choices[88][2] = "Las herramientas de explotaci&oacute;n anal&iacute;tica de la informaci&oacute;n.";
 choices[88][3] = "La base de datos multidimensional";
 answers[88] = choices[88][0];
 units[88] = "68,71";
 comments[88] = "Id Pregunta: 9973. Examen TICA1, Xunta de GaliciA, 2011";


//  Id pregunta: 10004 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  XML y HTML5 se caracterizan porque ambos";
 choices[89]= new Array();
 choices[89][0] = "se apoyan en JavaScript.";
 choices[89][1] = "se basan en el protocolo HTTP.";
 choices[89][2] = "son lenguajes de marcado.";
 choices[89][3] = "son conformes a SOAP.";
 answers[89] = choices[89][2];
 units[89] = "69";
 comments[89] = "Id Pregunta: 10004. ";


//  Id pregunta: 10839 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  De las siguientes herramientas de teleaprendizaje para formaci&oacute;n de usuarios y personal t&eacute;cnico, indique cu&aacute;l es de software propietario:";
 choices[90]= new Array();
 choices[90][0] = "Catedr@.";
 choices[90][1] = "Dokeos.";
 choices[90][2] = "Moodle.";
 choices[90][3] = "Claroline.";
 answers[90] = choices[90][0];
 units[90] = "66";
 comments[90] = "Id Pregunta: 10839. Examen GSI 2014";


//  Id pregunta: 10856 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  La herramienta que incluye JAXB para convertir un XML Schema a representaciones de clases Java se denomina:";
 choices[91]= new Array();
 choices[91][0] = "jconverter";
 choices[91][1] = "schemagen";
 choices[91][2] = "xjc";
 choices[91][3] = "jaxbws";
 answers[91] = choices[91][2];
 units[91] = "69";
 comments[91] = "Id Pregunta: 10856. Examen GSI 2014";


//  Id pregunta: 10930 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  En SQL Server, la cardinalidad m&aacute;xima de una tabla de hechos que es la tabla central de n tablas dimensionales es:";
 choices[92]= new Array();
 choices[92][0] = "La multiplicaci&oacute;n de las cardinalidades de cada una de las n tablas dimensionales.";
 choices[92][1] = "La suma de las cardinalidades de cada una de las n tablas dimensionales.";
 choices[92][2] = "La mayor de las cardinalidades presentes en las n tablas dimensionales.";
 choices[92][3] = "La mayor de las cardinalidades presentes en las n tablas dimensionales elevado a n.";
 answers[92] = choices[92][0];
 units[92] = "57";
 comments[92] = "Id Pregunta: 10930. TIC A1 AGE 2014";


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


//  Id pregunta: 11054 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Qu&eacute; elemento de X.500 es el conjunto de toda la informaci&oacute;n disponible en el Servicio de Directorio?";
 choices[94]= new Array();
 choices[94][0] = "DIB";
 choices[94][1] = "DSA";
 choices[94][2] = "DUA";
 choices[94][3] = "DISP";
 answers[94] = choices[94][0];
 units[94] = "73";
 comments[94] = "Id Pregunta: 11054. ";


//  Id pregunta: 11128 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Los riesgos del Cloud Computing, de acuerdo con el &uacute;ltimo informe del ENISA pueden clasificarse como:";
 choices[95]= new Array();
 choices[95][0] = "Riesgos pol&iacute;ticos y organizativos, riesgos t&eacute;cnicos y riesgos legales";
 choices[95][1] = "Riesgos propios, riesgos compartidos y riesgos derivados";
 choices[95][2] = "Riesgos de usuarios, de la plataforma y del servicio";
 choices[95][3] = "Ninguna de las anteriores";
 answers[95] = choices[95][0];
 units[95] = "47";
 comments[95] = "Id Pregunta: 11128. ";


//  Id pregunta: 11151 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Cu&aacute;ntos niveles de seguridad define el proyecto STORK?";
 choices[96]= new Array();
 choices[96][0] = "3";
 choices[96][1] = "4";
 choices[96][2] = "5";
 choices[96][3] = "6";
 answers[96] = choices[96][1];
 units[96] = "73";
 comments[96] = "Id Pregunta: 11151. ";


//  Id pregunta: 11252 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Seg&uacute;n el Principio de Reconocimiento Mutuo que establece el Reglamento 910/2014, se reconocer&aacute; en un Estado miembro, a efectos de la autenticaci&oacute;n transfronteriza para un servicio en l&iacute;nea, el medio de identificaci&oacute;n electr&oacute;nica expedido en otro Estado miembro, siempre que:";
 choices[97]= new Array();
 choices[97][0] = "El nivel de seguridad de este medio de identificaci&oacute;n electr&oacute;nica corresponda a un nivel igual o superior al requerido por el organismo del sector p&uacute;blico para acceder a dicho servicio en l&iacute;nea, independientemente del nivel de seguridad del medio de identificaci&oacute;n.";
 choices[97][1] = "El medio de identificaci&oacute;n est&eacute; expedido seg&uacute;n los incluidos en la lista publicada por la Comisi&oacute;n.";
 choices[97][2] = "Las respuestas A) y B) son correctas.";
 choices[97][3] = "Este reconocimiento se producir&aacute; a m&aacute;s tardar 6 meses despu&eacute;s de que la Comisi&oacute;n publique la lista.";
 answers[97] = choices[97][1];
 units[97] = "73";
 comments[97] = "Id Pregunta: 11252. ";


//  Id pregunta: 11277 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;En el contexto de los Sistemas de Informaci&oacute;n Geogr&aacute;fica &iquest;cu&aacute;l de los siguientes usos ser&iacute;a un mashup?";
 choices[98]= new Array();
 choices[98][0] = "B&uacute;squeda de una direcci&oacute;n (geocodificaci&oacute;n directa)";
 choices[98][1] = "Carga de una capa WMS externa usando la API de OpenLayers";
 choices[98][2] = "Descarga de datos vectoriales en GML o KML";
 choices[98][3] = "Todas las anteriores";
 answers[98] = choices[98][1];
 units[98] = "67";
 comments[98] = "Id Pregunta: 11277. ";


//  Id pregunta: 11536 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  La licencia de la GNU utilizada espec&iacute;ficamente para licenciar Software en la redes de computadores es:";
 choices[99]= new Array();
 choices[99][0] = "GFDL";
 choices[99][1] = "GPL";
 choices[99][2] = "Affero GPL";
 choices[99][3] = "EUPL";
 answers[99] = choices[99][2];
 units[99] = "62";
 comments[99] = "Id Pregunta: 11536. NULL";


