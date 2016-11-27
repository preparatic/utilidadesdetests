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

//  Id pregunta: 756 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  Respecto a los &quot;web services&quot;, &iquest;cu&aacute;l de las siguientes afirmaciones es falsa?";
 choices[0]= new Array();
 choices[0][0] = "Se describen mediante el lenguaje WSDL";
 choices[0][1] = "Para usarlos han de publicarse siempre en un registro UDDI";
 choices[0][2] = "Pueden interaccionar clientes  y servicios de distintas tecnolog&iacute;as";
 choices[0][3] = "Utilizan el protocolo SOAP";
 answers[0] = choices[0][1];
 units[0] = "51";
 comments[0] = "Id Pregunta: 756. NULL";


//  Id pregunta: 772 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  Qu&eacute; significan las siglas JNI";
 choices[1]= new Array();
 choices[1][0] = "Interfaz para llamar m&eacute;todos nativos ";
 choices[1][1] = "Sistema de directorio";
 choices[1][2] = "Sistema para datamining";
 choices[1][3] = "ninguna de las anteriores";
 answers[1] = choices[1][0];
 units[1] = "60";
 comments[1] = "Id Pregunta: 772. NULL";


//  Id pregunta: 795 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;Qu&eacute; son los midlets?:";
 choices[2]= new Array();
 choices[2][0] = "Son aplicaciones Java para la capa de middleware";
 choices[2][1] = "Son aplicaciones Java igualmente v&aacute;lidas para cliente o para servidor";
 choices[2][2] = "Son applets que s&oacute;lo se ejecutan bajo ciertas condiciones";
 choices[2][3] = "Son aplicaciones Java J2ME para dispositivos m&oacute;viles";
 answers[2] = choices[2][3];
 units[2] = "60";
 comments[2] = "Id Pregunta: 795. NULL";


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


//  Id pregunta: 827 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;C&oacute;mo son los tipos de datos en Java?:";
 choices[4]= new Array();
 choices[4][0] = "Pese a estar orientado a objetos el lenguaje, los tipos no est&aacute;n orientados a objetos";
 choices[4][1] = "Al estar orientado a objetos el lenguaje, los tipos est&aacute;n orientados a objetos";
 choices[4][2] = "Algunos de los tipos son orientados a objetos y otros no";
 choices[4][3] = "Debido a las peculiares caracteristicas de Java , los tipos de datos no pueden clasificarse en ninguna de las dos categor&iacute;as.";
 answers[4] = choices[4][2];
 units[4] = "60";
 comments[4] = "Id Pregunta: 827. String es un tipo de dato objeto";


//  Id pregunta: 935 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;Qu&eacute; indica la directiva #pragma en lenguaje C?:";
 choices[5]= new Array();
 choices[5][0] = "Le indica al compilador que genere un mensaje de error si llega a ese punto del c&oacute;digo";
 choices[5][1] = "Es un #include condicional";
 choices[5][2] = "Permite al implementador del compilador definir otras instrucciones de preprocesamiento para el compilador";
 choices[5][3] = "Nada de lo anterior es correcto";
 answers[5] = choices[5][2];
 units[5] = "59";
 comments[5] = "Id Pregunta: 935. ";


//  Id pregunta: 1198 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Java ME:";
 choices[6]= new Array();
 choices[6][0] = "Es una versi&oacute;n de la tecnolog&iacute;a Java2 para plataformas m&oacute;viles";
 choices[6][1] = "Es una version de la tecnolog&iacute;a Java2 orientada a electrodom&eacute;sticos";
 choices[6][2] = "Es una version de la tecnolog&iacute;a Java2 orientada a sistemas dom&oacute;ticos";
 choices[6][3] = "Todas las anteriores respuestas son falsas";
 answers[6] = choices[6][0];
 units[6] = "60";
 comments[6] = "Id Pregunta: 1198. NULL";


//  Id pregunta: 1270 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  Los applets de Java se ejecutan en el:";
 choices[7]= new Array();
 choices[7][0] = "Servidor web";
 choices[7][1] = "Cliente web";
 choices[7][2] = "Servidor de base de datos";
 choices[7][3] = "Servidor de webmail";
 answers[7] = choices[7][1];
 units[7] = "60";
 comments[7] = "Id Pregunta: 1270. NULL";


//  Id pregunta: 1306 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Peque&ntilde;as aplicaciones que pueden formar parte de la p&aacute;gina Web, y que pueden viajar a trav&eacute;s de Intenet para ejecutarse en el ordenador que las reciba se denominan:";
 choices[8]= new Array();
 choices[8][0] = "Controles Java";
 choices[8][1] = "Applets";
 choices[8][2] = "Servlets";
 choices[8][3] = "Aplicaciones CGI";
 answers[8] = choices[8][1];
 units[8] = "60";
 comments[8] = "Id Pregunta: 1306. NULL";


//  Id pregunta: 1923 AÃ±o de creación de pregunta: 2006-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa sobre el formato JAR?";
 choices[9]= new Array();
 choices[9][0] = "Utiliza el mismo algoritmo de compresi&oacute;n que los archivos .ZIP";
 choices[9][1] = "Es compatible con los sistemas de distribuci&oacute;n autom&aacute;tica";
 choices[9][2] = "Los ficheros con este formato son independientes de la plataforma";
 choices[9][3] = "Un fichero con este formato debe incluir obligatoriamente las firmas digitales de los fichero que contiene";
 answers[9] = choices[9][3];
 units[9] = "60";
 comments[9] = "Id Pregunta: 1923. NULL";


//  Id pregunta: 2928 AÃ±o de creación de pregunta: 2004-01-01
 questions[10]= "11)  En un entorno de servidor y cliente WWW, &iquest;cu&aacute;les de los siguientes lenguajes se utilizan para escribir c&oacute;digo que se ejecuta en el cliente?";
 choices[10]= new Array();
 choices[10][0] = "Java y JSP";
 choices[10][1] = "PHP y ASP";
 choices[10][2] = "JavaScript y Perl";
 choices[10][3] = "Java y JavaScript";
 answers[10] = choices[10][3];
 units[10] = "116";
 comments[10] = "Id Pregunta: 2928. ";


//  Id pregunta: 2939 AÃ±o de creación de pregunta: 2004-01-01
 questions[11]= "12)  La plataforma Java que se utiliza para el desarrollo de aplicaciones para PDA es:";
 choices[11]= new Array();
 choices[11][0] = "Micro Edition";
 choices[11][1] = "Standard Edition";
 choices[11][2] = "Enterprise Edition";
 choices[11][3] = "Cualquiera de ellas indistintamente dada su portabilidad";
 answers[11] = choices[11][0];
 units[11] = "116";
 comments[11] = "Id Pregunta: 2939. Similar a examen TIC MAP A 2004";


//  Id pregunta: 3038 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  &iquest;Cu&aacute;l de los siguientes no es un lenguaje de scripting?:";
 choices[12]= new Array();
 choices[12][0] = "JavaScript";
 choices[12][1] = "Jscript";
 choices[12][2] = "VBScript";
 choices[12][3] = "XMLScript";
 answers[12] = choices[12][3];
 units[12] = "114,115,116";
 comments[12] = "Id Pregunta: 3038. ";


//  Id pregunta: 3061 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  En ASP, &iquest;qu&eacute; objeto se utiliza para compartir informaci&oacute;n entre todos los usuarios de una aplicaci&oacute;n?:";
 choices[13]= new Array();
 choices[13][0] = "Application";
 choices[13][1] = "Request";
 choices[13][2] = "Server";
 choices[13][3] = "Session";
 answers[13] = choices[13][0];
 units[13] = "115";
 comments[13] = "Id Pregunta: 3061. ";


//  Id pregunta: 3866 AÃ±o de creación de pregunta: 2004-01-01
 questions[14]= "15)  Qu&eacute; m&eacute;todo no se emplea para generar contenido din&aacute;mico en el cliente";
 choices[14]= new Array();
 choices[14][0] = "Applets";
 choices[14][1] = "JavaScript";
 choices[14][2] = "ActiveX";
 choices[14][3] = "CGI";
 answers[14] = choices[14][3];
 units[14] = "114";
 comments[14] = "Id Pregunta: 3866. Tanenbaum";


//  Id pregunta: 4083 AÃ±o de creación de pregunta: 2006-01-01
 questions[15]= "16)  &iquest;Cu&aacute;l de los siguientes software no funciona actualmente sobre Linux?";
 choices[15]= new Array();
 choices[15][0] = "PHP";
 choices[15][1] = "Java";
 choices[15][2] = "Lucene";
 choices[15][3] = "Jscript";
 answers[15] = choices[15][3];
 units[15] = "114";
 comments[15] = "Id Pregunta: 4083. ";


//  Id pregunta: 4091 AÃ±o de creación de pregunta: 2006-01-01
 questions[16]= "17)  En .NET el c&oacute;digo fuente se compila a un lenguaje intermedio";
 choices[16]= new Array();
 choices[16][0] = "que se llama Bytecode, igual que en Jaba";
 choices[16][1] = "denominado IL, Lenguaje intermedio";
 choices[16][2] = "No se compila, sino que el c&oacute;digo es interpretado directamente por un int&eacute;rprete CLR";
 choices[16][3] = "que depende de la m&aacute;quina en la que se va a ejecutar";
 answers[16] = choices[16][1];
 units[16] = "115";
 comments[16] = "Id Pregunta: 4091. ";


//  Id pregunta: 4098 AÃ±o de creación de pregunta: 2006-01-01
 questions[17]= "18)  El Patr&oacute;n MVC";
 choices[17]= new Array();
 choices[17][0] = "Hace referencia al Modelo Vista Componente";
 choices[17][1] = "minimiza el acoplamiento entre los componentes de distintas capas";
 choices[17][2] = "El Modelo se encarga de la presentaci&oacute;n al usuario";
 choices[17][3] = "Todas son incorrectas";
 answers[17] = choices[17][1];
 units[17] = "116";
 comments[17] = "Id Pregunta: 4098. ";


//  Id pregunta: 4117 AÃ±o de creación de pregunta: 2006-01-01
 questions[18]= "19)  El servicio que copia las p&aacute;ginas de un sitio web a servidores dispersos geogr&aacute;ficamente pafa agilizar la entrega al usuario se llama";
 choices[18]= new Array();
 choices[18][0] = "procesamiento distribuido";
 choices[18][1] = "multicast";
 choices[18][2] = "cluster";
 choices[18][3] = "entrega de contenido";
 answers[18] = choices[18][3];
 units[18] = "116";
 comments[18] = "Id Pregunta: 4117. ";


//  Id pregunta: 4463 AÃ±o de creación de pregunta: 2007-01-01
 questions[19]= "20)  Respecto a los servicios Web, podemos afirmar que:";
 choices[19]= new Array();
 choices[19][0] = "WDSL define los criterios para los registros basados en Ia red.";
 choices[19][1] = "XML busca Ia definici&oacute;n y descripci&oacute;n de los servicios Web";
 choices[19][2] = "SOAP proporciona una manera estandar de transportar mensajes para el use de servicios Web";
 choices[19][3] = "UUID define un protocolo de comunicaci&oacute;n f&iacute;sica entre ordenadores.";
 answers[19] = choices[19][2];
 units[19] = "51";
 comments[19] = "Id Pregunta: 4463. NULL";


//  Id pregunta: 4481 AÃ±o de creación de pregunta: 2007-01-01
 questions[20]= "21)  &iquest;Cual de los siguientes paquetes de Java contiene las clases b&aacute;sicas utilizadas habitualmente en la mayor&iacute;a de los programas Java?";
 choices[20]= new Array();
 choices[20][0] = "java.lang";
 choices[20][1] = "java.beans";
 choices[20][2] = "java.sql";
 choices[20][3] = "java.util";
 answers[20] = choices[20][0];
 units[20] = "60";
 comments[20] = "Id Pregunta: 4481. JCED - Preparatic XVII";


//  Id pregunta: 4482 AÃ±o de creación de pregunta: 2007-01-01
 questions[21]= "22)  Si consideramos el framework de Net &iquest;Que entender&iacute;amos por CTS( Common Type System, o Sistema de Tipos Com&uacute;n)?";
 choices[21]= new Array();
 choices[21][0] = "Es un est&aacute;ndar que establece como se representan los tipos de datos en memoria, independientemente del lenguaje que los defina.";
 choices[21][1] = "Es un sistema tipificado de Software";
 choices[21][2] = "Es un sistema com&uacute;n de tipos que permite interoperar entre distintas plataformas.";
 choices[21][3] = "Ninguna de las anteriores";
 answers[21] = choices[21][0];
 units[21] = "59";
 comments[21] = "Id Pregunta: 4482. ";


//  Id pregunta: 4483 AÃ±o de creación de pregunta: 2007-01-01
 questions[22]= "23)  &iquest;Cual de las siguientes sentencias es falsa?";
 choices[22]= new Array();
 choices[22][0] = "Una aplicaci&oacute;n ASP.NET se corresponde con un directorio virtual y todos los objetos ASP.NET incluidos en el mismo directorio virtual constituyen una aplicaci&oacute;n ASP.NET";
 choices[22][1] = "ADO.NET es el servicio de acceso a datos asociado a ASP.NET";
 choices[22][2] = "ASP.NET ofrece dos grupos de controles: controles Web y controles HTML";
 choices[22][3] = "Un formulario ASP.NET es un archivo HTML que se guarda en un fichero con extensi&oacute;n .net";
 answers[22] = choices[22][3];
 units[22] = "59";
 comments[22] = "Id Pregunta: 4483. ";


//  Id pregunta: 4515 AÃ±o de creación de pregunta: 2007-01-01
 questions[23]= "24)  El tipo FLOAT definido por la clase Types de JDBC corresponde al tipo JAVA:";
 choices[23]= new Array();
 choices[23][0] = "double";
 choices[23][1] = "int";
 choices[23][2] = "byte[]";
 choices[23][3] = "Ninguna de las anteriores";
 answers[23] = choices[23][0];
 units[23] = "60";
 comments[23] = "Id Pregunta: 4515. JCED - Preparatic XVII";


//  Id pregunta: 4570 AÃ±o de creación de pregunta: 2007-01-01
 questions[24]= "25)  &iquest;Cuantos tipos de drivers existen en JDBC?:";
 choices[24]= new Array();
 choices[24][0] = "2";
 choices[24][1] = "3";
 choices[24][2] = "4";
 choices[24][3] = "tantos como SGBD's";
 answers[24] = choices[24][2];
 units[24] = "60";
 comments[24] = "Id Pregunta: 4570. NULL";


//  Id pregunta: 4666 AÃ±o de creación de pregunta: 2007-01-01
 questions[25]= "26)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares no est&aacute; relacionado con procesos de negocio?";
 choices[25]= new Array();
 choices[25][0] = "BPMN";
 choices[25][1] = "BPEL";
 choices[25][2] = "XPDL";
 choices[25][3] = "WSDL";
 answers[25] = choices[25][3];
 units[25] = "51";
 comments[25] = "Id Pregunta: 4666. NULL";


//  Id pregunta: 4680 AÃ±o de creación de pregunta: 2007-01-01
 questions[26]= "27)  La API JDBC se utiliza:";
 choices[26]= new Array();
 choices[26][0] = "Para efectuar consultas, actualizaciones de la base de datos que tengan los drivers adecuados. Tambi&eacute;n sepueden utilizar procedimientos almacenados y control de transacciones, pr&aacute;cticamente todas las funciones quesoporta un SGBD relacional.";
 choices[26][1] = "La API JDBC s&oacute;lo incorpora unos drivers que soportan las funciones de un SGBD relacional";
 choices[26][2] = "Para efectuar consultas y actualizaciones del SGBD relacional. El control de transacciones y las llamadas aprocedimientos almacenados no est&aacute;n soportados.";
 choices[26][3] = "Para efectuar consultas, actualizaciones de la base de datos que tengan los drivers adecuados y algunas delas funciones que soporta un SGBD relacional.";
 answers[26] = choices[26][0];
 units[26] = "60";
 comments[26] = "Id Pregunta: 4680. Examen 2006 JCYL";


//  Id pregunta: 4723 AÃ±o de creación de pregunta: 2007-01-01
 questions[27]= "28)  En el directorio activo de Microsoft la definici&oacute;n de todas las definiciones de clases de todos los objetos yatributos del directorio activo se encuentra en el:";
 choices[27]= new Array();
 choices[27][0] = "Schema Naming Context";
 choices[27][1] = " Active Directory Schema MMC";
 choices[27][2] = "Configuration Naming Context";
 choices[27][3] = "Domain Naming Context";
 answers[27] = choices[27][0];
 units[27] = "59,115";
 comments[27] = "Id Pregunta: 4723. Examen 2006 JCYL";


//  Id pregunta: 4905 AÃ±o de creación de pregunta: 2003-01-01
 questions[28]= "29)  El formato de compresi&oacute;n de video DivX est&aacute; basado en:";
 choices[28]= new Array();
 choices[28][0] = "Apple QuickTime.";
 choices[28][1] = "HDMI/Blu-Ray.";
 choices[28][2] = "MPEG-4 parte 2.";
 choices[28][3] = "MP3 eXtended Revision.";
 answers[28] = choices[28][2];
 units[28] = "114";
 comments[28] = "Id Pregunta: 4905. Examen TIC B 2007";


//  Id pregunta: 5034 AÃ±o de creación de pregunta: 2003-01-01
 questions[29]= "30)  &iquest;Cu&aacute;l de los siguientes es un componente de la versi&oacute;n 2 del &quot;framework&quot; .NET de Microsoft?";
 choices[29]= new Array();
 choices[29][0] = "Visual Studio";
 choices[29][1] = "CLR (Common Language Runtime)";
 choices[29][2] = "BizTalk";
 choices[29][3] = "SQL Server";
 answers[29] = choices[29][1];
 units[29] = "59";
 comments[29] = "Id Pregunta: 5034. Examen TIC A 2007";


//  Id pregunta: 5123 AÃ±o de creación de pregunta: 2003-01-01
 questions[30]= "31)  &iquest;Qu&eacute; tipo de driver JDBC es aquel que convierte las llamadas JDBC a llamadas nativas de la base de datos?";
 choices[30]= new Array();
 choices[30][0] = "Tipo 1";
 choices[30][1] = "Tipo 2";
 choices[30][2] = "Tipo 3";
 choices[30][3] = "Tipo 4";
 answers[30] = choices[30][1];
 units[30] = "60";
 comments[30] = "Id Pregunta: 5123. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5280 AÃ±o de creación de pregunta: 2003-01-01
 questions[31]= "32)  Un applet de Java se ejecutar&aacute; en casi cualquier navegador porque ...";
 choices[31]= new Array();
 choices[31][0] = "el servidor tiene un built-in de JVM.";
 choices[31][1] = "el navegador es capaz de interpretar el c&oacute;digo fuente.";
 choices[31][2] = "el navegador tiene un built-in de JVM.";
 choices[31][3] = "los applets no necesitan una JVM.";
 answers[31] = choices[31][2];
 units[31] = "116";
 comments[31] = "Id Pregunta: 5280. ";


//  Id pregunta: 5283 AÃ±o de creación de pregunta: 2003-01-01
 questions[32]= "33)  En Java la herencia es un mecanismo por el que se pueden crear nuevos objetos definidos en t&eacute;rminos de objetos ya existentes. &iquest;Esta permitida la herencia multiple?";
 choices[32]= new Array();
 choices[32][0] = "Si.";
 choices[32][1] = "No.";
 choices[32][2] = "Si con ciertas restricciones.";
 choices[32][3] = "No con ciertas restricciones.";
 answers[32] = choices[32][1];
 units[32] = "60";
 comments[32] = "Id Pregunta: 5283. NULL";


//  Id pregunta: 5284 AÃ±o de creación de pregunta: 2003-01-01
 questions[33]= "34)  Indique cu&aacute;l de las siguientes opciones no se relaciona con un desarrollo JAVA: ";
 choices[33]= new Array();
 choices[33][0] = "Hibernate";
 choices[33][1] = "Biztalk";
 choices[33][2] = "Java Server Faces";
 choices[33][3] = "Spring";
 answers[33] = choices[33][1];
 units[33] = "116";
 comments[33] = "Id Pregunta: 5284. ";


//  Id pregunta: 5444 AÃ±o de creación de pregunta: 2003-01-01
 questions[34]= "35)  Un programa escrito Java puede ejecutarse en cualquier plataforma porque ";
 choices[34]= new Array();
 choices[34][0] = "el lenguaje Java se deriva de C++.";
 choices[34][1] = "la m&aacute;quina virtual de Java (JVM) interpreta el programa para cada sistema operativo";
 choices[34][2] = "el compilador es id&eacute;ntico al de C++.";
 choices[34][3] = "porque la APIs de Java han sido dise&ntilde;adas con ese fin";
 answers[34] = choices[34][1];
 units[34] = "60";
 comments[34] = "Id Pregunta: 5444. Castilla y Le&oacute;n";


//  Id pregunta: 5493 AÃ±o de creación de pregunta: 2003-01-01
 questions[35]= "36)  Indica la afirmaci&oacute;n correcta respecto a CLS o Common Language Specification:";
 choices[35]= new Array();
 choices[35][0] = "Es el conjunto de clases que se manejan en .NET";
 choices[35][1] = "Recoge la especificacion que debe cumplir todo lenguaje que se ejecuta sobre el framework .NET";
 choices[35][2] = "Es la especificacion del framework .NET";
 choices[35][3] = "Todas son falsas";
 answers[35] = choices[35][1];
 units[35] = "59";
 comments[35] = "Id Pregunta: 5493. ";


//  Id pregunta: 5496 AÃ±o de creación de pregunta: 2003-01-01
 questions[36]= "37)  &iquest;Cu&aacute;les son los contenedores de la tecnolog&iacute;a Java EE?";
 choices[36]= new Array();
 choices[36][0] = "EJB Container y Web Container";
 choices[36][1] = "EJB Container, Web Container y Application Client Container";
 choices[36][2] = "b) y Applet Container";
 choices[36][3] = "Ninguna de las anteriores";
 answers[36] = choices[36][2];
 units[36] = "60";
 comments[36] = "Id Pregunta: 5496. NULL";


//  Id pregunta: 5703 AÃ±o de creación de pregunta: 2003-01-01
 questions[37]= "38)  Se&ntilde;ale la afirmaci&oacute;n falsa sobre SOAP:";
 choices[37]= new Array();
 choices[37][0] = "Funciona s&oacute;lo sobre HTTP";
 choices[37][1] = "Tiene como base XML";
 choices[37][2] = "La cabecera header es opcional";
 choices[37][3] = "El desarrollo body contiene la informaci&oacute;n principal";
 answers[37] = choices[37][0];
 units[37] = "51";
 comments[37] = "Id Pregunta: 5703. NULL";


//  Id pregunta: 5705 AÃ±o de creación de pregunta: 2003-01-01
 questions[38]= "39)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares no est&aacute; asociado a los servicios web?";
 choices[38]= new Array();
 choices[38][0] = "SOAP";
 choices[38][1] = " UDDI";
 choices[38][2] = "CORBA";
 choices[38][3] = "HTTP";
 answers[38] = choices[38][2];
 units[38] = "51";
 comments[38] = "Id Pregunta: 5705. NULL";


//  Id pregunta: 5708 AÃ±o de creación de pregunta: 2009-01-01
 questions[39]= "40)  Seleccione la opci&oacute;n correcta:";
 choices[39]= new Array();
 choices[39][0] = "SOAP es un protocolo para el intercambio de mensajes SOA";
 choices[39][1] = "Dos aplicaciones que se comunican mediante SOAP deben estar escritas en el mismo lenguaje de programaci&oacute;n";
 choices[39][2] = "Los mensajes SOAP se pueden transportar, entre otros medios, sobre HTTP, SMTP o palomas mensajeras";
 choices[39][3] = "Para que dos aplicaciones se comuniquen mediante SOAP siempre ser&aacute; necesario alterar las configuraciones de los posibles firewalls entre ellas";
 answers[39] = choices[39][2];
 units[39] = "51";
 comments[39] = "Id Pregunta: 5708. MAP 2008 A2";


//  Id pregunta: 5778 AÃ±o de creación de pregunta: 2009-01-01
 questions[40]= "41)  En referencia a la arquitectura .NET, seleccione cu&aacute;l de las expresiones siguientes es FALSA:";
 choices[40]= new Array();
 choices[40][0] = "Las versiones 1.0, 1.1 y 2.0. de .NET Framework son totalmente independientes unas de otras, por lo que se pueden instalar en cualquier orden";
 choices[40][1] = "Cuando las versiones 1.0, 1.1 y 2.0 est&aacute;n en el mismo equipo, comparten un &uacute;nico Common Language Runtime";
 choices[40][2] = ".NET Framework 4.5 es la &uacute;ltima versi&oacute;n disponible del framework .NET";
 choices[40][3] = "Common Language Specification (CLS) es un conjunto de reglas pensado para promover la interoperabilidad entre los lenguajes";
 answers[40] = choices[40][1];
 units[40] = "59";
 comments[40] = "Id Pregunta: 5778. MAP 2008 A1";


//  Id pregunta: 5781 AÃ±o de creación de pregunta: 2009-01-01
 questions[41]= "42)  Se&ntilde;ale cu&aacute;l de los siguientes objetos forma parte de los componentes proveedores de datos .NET Framework de ADO.NET";
 choices[41]= new Array();
 choices[41][0] = "DataSet";
 choices[41][1] = "DataTable";
 choices[41][2] = "DataAdapter";
 choices[41][3] = "RecordSet";
 answers[41] = choices[41][2];
 units[41] = "59";
 comments[41] = "Id Pregunta: 5781. MAP 2008 A2";


//  Id pregunta: 5783 AÃ±o de creación de pregunta: 2009-01-01
 questions[42]= "43)  De las siguientes cuestiones de la arquitectura .NET indique cu&aacute;l es FALSA.";
 choices[42]= new Array();
 choices[42][0] = "Las clases ASP.NET soportan el desarrollo de aplicaciones web y de servicios web XML.";
 choices[42][1] = "Las clases ADO.NET permiten a los desarrolladores interaccionar con los datos, como si fueran XML, a trav&eacute;s de las interfaces de OLE DB, ODBC y SQL Server";
 choices[42][2] = "CLR (Common Language runtime) se encarga de realizar la compilaci&oacute;n del c&oacute;digo fuente al Lenguaje Intermedio independiente de la platafoma.";
 choices[42][3] = "En la arquitectura . NET se permite la utilizaci&oacute;n de varios lenguajes de programaci&oacute;n.";
 answers[42] = choices[42][2];
 units[42] = "59";
 comments[42] = "Id Pregunta: 5783. MAP 2008 A2";


//  Id pregunta: 5854 AÃ±o de creación de pregunta: 2009-01-01
 questions[43]= "44)  En java, el atributo &quot;final&quot; en la declaraci&oacute;n de una variable de una clase significa que:";
 choices[43]= new Array();
 choices[43][0] = "S&oacute;lo las clases de su paquete pueden acceder a ella";
 choices[43][1] = "S&oacute;lo puede ser escrita una vez y no puede ser reescrita por clases hijas";
 choices[43][2] = "S&oacute;lo se puede acceder a trav&eacute;s de m&eacute;todos get y set";
 choices[43][3] = "Que forma parte del interface que implementa la clase";
 answers[43] = choices[43][1];
 units[43] = "116";
 comments[43] = "Id Pregunta: 5854. Pregunta 34";


//  Id pregunta: 5898 AÃ±o de creación de pregunta: 2009-01-01
 questions[44]= "45)  &iquest;Cu&aacute;l de las siguientes corresponde a una tecnolog&iacute;a Java para acceder a bases de datos relacionales?";
 choices[44]= new Array();
 choices[44][0] = "JRDB";
 choices[44][1] = "JPA";
 choices[44][2] = "ORM";
 choices[44][3] = "Ninguna de las anteriores";
 answers[44] = choices[44][1];
 units[44] = "60";
 comments[44] = "Id Pregunta: 5898. NULL";


//  Id pregunta: 6111 AÃ±o de creación de pregunta: 2010-01-01
 questions[45]= "46)  &iquest;Cu&aacute;les de los siguientes son los perfiles WS-I?:";
 choices[45]= new Array();
 choices[45][0] = "WS-I Basic Profile, WS-I Basic Infrastructure Profile, WS-I Basic Security Profile (BSP), WS-I Reliable Secure Profile.";
 choices[45][1] = "WS-I Basic Profile, WS-I Basic Infrastructure Profile (BIP) y WS-I Reliable Secure Profile.";
 choices[45][2] = "WS-I Basic Infrastructure Profile (BIP), WS-I Basic Security Profile (BSP) y  WS-I Reliable Secure Profile.";
 choices[45][3] = "WS-I Basic Profile, WS-I Basic Security Profile (BSP) y WS-I Reliable Secure Profile.";
 answers[45] = choices[45][3];
 units[45] = "51";
 comments[45] = "Id Pregunta: 6111. NULL";


//  Id pregunta: 6232 AÃ±o de creación de pregunta: 2010-01-01
 questions[46]= "47)  Con respecto a MNG, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[46]= new Array();
 choices[46][0] = "Existen tres versiones de MNG de complejidad reducida: MNG-LC (baja complejidad),  MNG-VLC (complejidad muy baja) y MNG-RVLC (complejidad realmente muy baja).";
 choices[46][1] = "Es un formato de fichero, libre de derechos, para im&aacute;genes animadas, fuertemente vinculado a PNG.";
 choices[46][2] = "No est&aacute; soportado por el navegador Konqueror.";
 choices[46][3] = "Todas las anteriores respuestas son incorrectas.";
 answers[46] = choices[46][1];
 units[46] = "114";
 comments[46] = "Id Pregunta: 6232. ";


//  Id pregunta: 6234 AÃ±o de creación de pregunta: 2010-01-01
 questions[47]= "48)  En el framwork .NET, la herramienta de desarrollo compila el c&oacute;digo fuente de cualquiera de los lenguajes soportados por .NET a un c&oacute;digo intermedio, inicialmente conocido como MSIL y actualmente llamado:";
 choices[47]= new Array();
 choices[47][0] = "CIL";
 choices[47][1] = "CLI";
 choices[47][2] = "JIT";
 choices[47][3] = "CLR";
 answers[47] = choices[47][0];
 units[47] = "59,115";
 comments[47] = "Id Pregunta: 6234. ";


//  Id pregunta: 6242 AÃ±o de creación de pregunta: 2010-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l de las siguientes APIs de JEE especifica la gesti&oacute;n de transacciones a trav&eacute;s de sistemas distribuidos?";
 choices[48]= new Array();
 choices[48][0] = "JNDE";
 choices[48][1] = "JNI";
 choices[48][2] = "JTA";
 choices[48][3] = "JAX";
 answers[48] = choices[48][2];
 units[48] = "60";
 comments[48] = "Id Pregunta: 6242. TICB-2009, bloque desarrollo";


//  Id pregunta: 6247 AÃ±o de creación de pregunta: 2010-01-01
 questions[49]= "50)  &iquest;Qu&eacute; m&oacute;dulo de Apache se incluye para aportar seguridad a Axis2?";
 choices[49]= new Array();
 choices[49][0] = "My Sql";
 choices[49][1] = "Php";
 choices[49][2] = "Rampart";
 choices[49][3] = "Addressing";
 answers[49] = choices[49][2];
 units[49] = "60";
 comments[49] = "Id Pregunta: 6247. TICB-2009, bloque desarrollo";


//  Id pregunta: 6477 AÃ±o de creación de pregunta: 2010-01-01
 questions[50]= "51)  &iquest;Qu&eacute; componentes incluye la .net framework class library?";
 choices[50]= new Array();
 choices[50][0] = "Common language runtime (CLR) and the .NET framework class library";
 choices[50][1] = "ADO.NET, ASP.NET, Windows Forms, and Windows Presentation Foundation (WPF)";
 choices[50][2] = "ASP.NET applications, Web Forms and Web Services";
 choices[50][3] = "Windows Presentation Foundation (WPF), ASP.NET Portal, Windows Form Portal";
 answers[50] = choices[50][1];
 units[50] = "115";
 comments[50] = "Id Pregunta: 6477. Castilla La Mancha 2009";


//  Id pregunta: 6518 AÃ±o de creación de pregunta: 2010-01-01
 questions[51]= "52)  El API de Java para llamar a m&eacute;todos escritos en otros lenguajes es:";
 choices[51]= new Array();
 choices[51][0] = "JDI";
 choices[51][1] = "JCI";
 choices[51][2] = "JTEE";
 choices[51][3] = "JNI";
 answers[51] = choices[51][3];
 units[51] = "60";
 comments[51] = "Id Pregunta: 6518. NULL";


//  Id pregunta: 7317 AÃ±o de creación de pregunta: 2010-01-01
 questions[52]= "53)  Cu&aacute;l de los siguientes no forma parte del Framework o Marco de Trabajo .NET:";
 choices[52]= new Array();
 choices[52][0] = "MSIL";
 choices[52][1] = "JVM";
 choices[52][2] = "Biblioteca de Clases Base o BCL";
 choices[52][3] = "CLR (Common Language Runtime)";
 answers[52] = choices[52][1];
 units[52] = "59";
 comments[52] = "Id Pregunta: 7317. NULL";


//  Id pregunta: 8350 AÃ±o de creación de pregunta: 2011-01-01
 questions[53]= "54)   &iquest;Para que sirve la palabra clave &quot;static&quot; en Java? ";
 choices[53]= new Array();
 choices[53][0] = "Indica que aquel rn&eacute;todo o variable que precede es constante, es decir, no puede modificarse";
 choices[53][1] = "Permite indicar que el m&eacute;todo o la variable al que precede pertenece a la clase en lugar de al objeto";
 choices[53][2] = "Indica que la variable o m&eacute;todo al que precede no puede ser accedida desde otras clases";
 choices[53][3] = "Indica que la variable o m&eacute;todo al que precede no puede ser accedida desde la dase a la que pertenece.";
 answers[53] = choices[53][1];
 units[53] = "116";
 comments[53] = "Id Pregunta: 8350. Examen TIC A2 2010";


//  Id pregunta: 8357 AÃ±o de creación de pregunta: 2011-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l de las siguientes tecnolog&iacute;as de programaci&oacute;n se ejecuta en el servidor? ";
 choices[54]= new Array();
 choices[54][0] = "JavaScript";
 choices[54][1] = "Applets";
 choices[54][2] = "JSP";
 choices[54][3] = "VisualScript";
 answers[54] = choices[54][2];
 units[54] = "114";
 comments[54] = "Id Pregunta: 8357. Examen TIC A2 2010";


//  Id pregunta: 8594 AÃ±o de creación de pregunta: 2011-01-01
 questions[55]= "56)  &iquest;Cu&aacute;l de las siguientes tecnolog&iacute;as de programaci&oacute;n se ejecutan en el servidor?";
 choices[55]= new Array();
 choices[55][0] = "Javascripts";
 choices[55][1] = "Applets";
 choices[55][2] = "JSP";
 choices[55][3] = "VisualScript";
 answers[55] = choices[55][2];
 units[55] = "116";
 comments[55] = "Id Pregunta: 8594. Examen TIC A2 2010 interna";


//  Id pregunta: 8595 AÃ±o de creación de pregunta: 2011-01-01
 questions[56]= "57)  &iquest;A qu&eacute; corresponden las siglas LINQ?";
 choices[56]= new Array();
 choices[56][0] = "Lenguaje que permite enlaces unidireccionales y bid&iacute;reccionales a otro recurso (como archivos, im&aacute;genes, documentos, programas, etc.) dentro de documentos XML";
 choices[56][1] = "Soluci&oacute;n utilizada en el campo de la Business Intelligence cuyo objetivo es agilizar la consulta a grandes cantidades de datos";
 choices[56][2] = "Conjunto de extensiones a NET Framework que abarca operaciones de consulta integrada de lenguaje, conjuntos y transformaciones.";
 choices[56][3] = "Texto o im&aacute;genes en un sitio web que un usuario puede pinchar para tener acceso o conectar con otro documento.";
 answers[56] = choices[56][2];
 units[56] = "59,115";
 comments[56] = "Id Pregunta: 8595. Examen TIC A2 2010 interna";


//  Id pregunta: 8798 AÃ±o de creación de pregunta: 2011-01-01
 questions[57]= "58)  &iquest;Para qu&eacute; se usa el componente ASP.NET?";
 choices[57]= new Array();
 choices[57][0] = "Para construir aplicaciones y servicios Web";
 choices[57][1] = "Para conectar las aplicaciones a las bases de datos";
 choices[57][2] = "Para construir la interface del usuario";
 choices[57][3] = "Para conectar los programas";
 answers[57] = choices[57][0];
 units[57] = "59, 115";
 comments[57] = "Id Pregunta: 8798. Examen UPM A2 2011";


//  Id pregunta: 8817 AÃ±o de creación de pregunta: 2011-01-01
 questions[58]= "59)  Sobre la tecnolog&iacute;a ASP (Active Server Pages) se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[58]= new Array();
 choices[58][0] = "A diferencia de ASP.net, ASP utiliza el &quot;Common Language Runtime (CLR)&quot; para generar el c&oacute;digo HTML";
 choices[58][1] = "S&oacute;lo es compatible con el servidor IIS (Internet Information Server)";
 choices[58][2] = "Es un lenguaje de script que se incluye en un mismo archivo junto con el c&oacute;digo HTML";
 choices[58][3] = "Permite la utilizaci&oacute;n de diversos lenguajes de programaci&oacute;n, entre ellos Visual Basic Script y JScript";
 answers[58] = choices[58][0];
 units[58] = "115";
 comments[58] = "Id Pregunta: 8817. Examen UPM A2 2011";


//  Id pregunta: 8920 AÃ±o de creación de pregunta: 2011-01-01
 questions[59]= "60)  Las siglas SOAP significan";
 choices[59]= new Array();
 choices[59][0] = "Simple Object Access Protocol, o protocolo simple de acceso a objetos";
 choices[59][1] = "Single Object Access Protocol, o protocolo de acceso a objetos individuales";
 choices[59][2] = "Single Object Authorization Protocolo, o protocolo de autorizaci&oacute;n de objetos individuales";
 choices[59][3] = "Sevice Oriented Access Protocol, o protocolo de acceso orientado a servicios";
 answers[59] = choices[59][0];
 units[59] = "51";
 comments[59] = "Id Pregunta: 8920. Operador Ayto. Madrid 2010";


//  Id pregunta: 9030 AÃ±o de creación de pregunta: 2011-01-01
 questions[60]= "61)  &iquest;Cu&aacute;l de los siguientes no es un mapeador objeto-relacional?";
 choices[60]= new Array();
 choices[60][0] = "Postgress";
 choices[60][1] = "Hibernate";
 choices[60][2] = "TopLink";
 choices[60][3] = "Ibatis";
 answers[60] = choices[60][0];
 units[60] = "116";
 comments[60] = "Id Pregunta: 9030. ";


//  Id pregunta: 9039 AÃ±o de creación de pregunta: 2011-01-01
 questions[61]= "62)  &iquest;Qu&eacute; es en java una inner class?";
 choices[61]= new Array();
 choices[61][0] = "Es lo mismo que una clase abstracta";
 choices[61][1] = "Una clase declarada dentro de otra";
 choices[61][2] = "Una clase que no puede ser heredada";
 choices[61][3] = "Ninguno de los anteriores";
 answers[61] = choices[61][1];
 units[61] = "60";
 comments[61] = "Id Pregunta: 9039. NULL";


//  Id pregunta: 9494 AÃ±o de creación de pregunta: 2013-01-01
 questions[62]= "63)  &iquest;Cu&aacute;les de los siguientes no es un lenguaje de scripting?";
 choices[62]= new Array();
 choices[62][0] = "Javascript";
 choices[62][1] = "JEScript";
 choices[62][2] = "PerlScript";
 choices[62][3] = "VBScript";
 answers[62] = choices[62][1];
 units[62] = "114";
 comments[62] = "Id Pregunta: 9494. NULL";


//  Id pregunta: 9496 AÃ±o de creación de pregunta: 2013-01-01
 questions[63]= "64)  Se&ntilde;ale la afimaci&oacute;n falsa con respecto a JScript:";
 choices[63]= new Array();
 choices[63][0] = "Es una implementaci&oacute;n de Microsoft del est&aacute;ndar ECMAScript";
 choices[63][1] = "Es necesario declarar los tipos de datos";
 choices[63][2] = "Es sensible a las may&uacute;sculas y min&uacute;sculas para los nombres de funci&oacute;n";
 choices[63][3] = "Es un lenguaje interpretado y basado en objetos";
 answers[63] = choices[63][1];
 units[63] = "114";
 comments[63] = "Id Pregunta: 9496. NULL";


//  Id pregunta: 9498 AÃ±o de creación de pregunta: 2013-01-01
 questions[64]= "65)  Se&ntilde;ale la afimaci&oacute;n falsa con respecto a PerlScript:";
 choices[64]= new Array();
 choices[64][0] = "No se permite su uso en el servidor";
 choices[64][1] = "Es un lenguaje orientado al entorno Microsoft";
 choices[64][2] = "Es un lenguaje de scripting";
 choices[64][3] = "Permite el uso de PERL en los scripts web del cliente";
 answers[64] = choices[64][0];
 units[64] = "114";
 comments[64] = "Id Pregunta: 9498. NULL";


//  Id pregunta: 9506 AÃ±o de creación de pregunta: 2013-01-01
 questions[65]= "66)  En el patr&oacute;n MVC:";
 choices[65]= new Array();
 choices[65][0] = "Modelo son los componentes que se encargan de la l&oacute;gica de negocio, Vista son los componentes que se encargan de la presentaci&oacute;n o interfaz de usuario y Controlador son los componentes que se encargan del flujo de control de la aplicaci&oacute;n";
 choices[65][1] = "Modelo son los componentes que se encargan de la carga de datos, Vista son los componentes que se encargan de la presentaci&oacute;n o interfaz de usuario y Controlador son los componentes que se encargan del flujo de control de la aplicaci&oacute;n";
 choices[65][2] = "Modelo son los componentes que se encargan de la l&oacute;gica de negocio, Vista son los componentes que se encargan de la presentaci&oacute;n o interfaz en el servidor y Controlador son los componentes que se encargan del flujo de control de la aplicaci&oacute;n";
 choices[65][3] = "Modelo son los componentes que se encargan de la l&oacute;gica de negocio, Vista son los componentes que se encargan de la presentaci&oacute;n o interfaz de usuario y Controlador son los componentes que se encargan del flujo de control del personal que accede al servidor";
 answers[65] = choices[65][0];
 units[65] = "116";
 comments[65] = "Id Pregunta: 9506. NULL";


//  Id pregunta: 9514 AÃ±o de creación de pregunta: 2013-01-01
 questions[66]= "67)  &iquest;Cu&aacute;les de los siguientes m&eacute;todos no existe dentro de la clase abstracta HttpServlet?";
 choices[66]= new Array();
 choices[66][0] = "doGet()";
 choices[66][1] = "doDelete()";
 choices[66][2] = "doPut()";
 choices[66][3] = "Todos los m&eacute;todos anteriores existen en el clase HttpServlet";
 answers[66] = choices[66][3];
 units[66] = "116";
 comments[66] = "Id Pregunta: 9514. NULL";


//  Id pregunta: 9517 AÃ±o de creación de pregunta: 2013-01-01
 questions[67]= "68)  Respecto a los EJB, indique la afirmaci&oacute;n incorrecta:";
 choices[67]= new Array();
 choices[67][0] = "Son objetos de servidor que encapsulan la l&oacute;gica de negocio de una aplicaci&oacute;n y se pueden ejecutar de forma distribuida";
 choices[67][1] = "S&oacute;lo existen tres tipos: session, entity y message-driven";
 choices[67][2] = "Se ejecutan en contenedores EJB";
 choices[67][3] = "Los EJB de tipo session pueden ser a su vez SLSB y SFSB";
 answers[67] = choices[67][0];
 units[67] = "116";
 comments[67] = "Id Pregunta: 9517. NULL";


//  Id pregunta: 9594 AÃ±o de creación de pregunta: 2013-01-01
 questions[68]= "69)  En una arquitectura web en .NET, indique cu&aacute;l es la opci&oacute;n correcta que define una Biblioteca de Clases Base (BCB):";
 choices[68]= new Array();
 choices[68][0] = "La Biblioteca de Clases Base es una API de alto nivel para permitir accedera los servicios que ofrece el CLR (Common Language Runtime) a trav&eacute;s de objetos en una jerarqu&iacute;a denominada espacio de nombres.";
 choices[68][1] = "La Biblioteca de Clases Base es una API de bajo nivel para permitir accedera los datos que ofrece el ASP.NET a trav&eacute;s de objetos en una jerarqu&iacute;a denominada espacio de nombres";
 choices[68][2] = "La Biblioteca de Clases Base es un conjunto de librer&iacute;as que permiten realizar las operaciones de acceso a datos.";
 choices[68][3] = "La Biblioteca de Clases Base es un conjunto de clases, interfaces y tipos valor que son la base para la compilaci&oacute;n del c&oacute;digo fuente a un c&oacute;digo intermedio denominado CIL (Common Intermediate Language).";
 answers[68] = choices[68][0];
 units[68] = "59";
 comments[68] = "Id Pregunta: 9594. Xunta Libre 2011";


//  Id pregunta: 9718 AÃ±o de creación de pregunta: 2014-01-01
 questions[69]= "70)  &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[69]= new Array();
 choices[69][0] = "CORBA es un tipo de middleware.";
 choices[69][1] = "Las RPCs (Remote Procedure Call) requieren Sistema Operativo UNIX/LINUX.";
 choices[69][2] = "El modelo Proxy/Cach&eacute; es precursor del modelo cliente-servidor.";
 choices[69][3] = "Los applets son un modelo de sistemas distribuidos P2P.";
 answers[69] = choices[69][0];
 units[69] = "51";
 comments[69] = "Id Pregunta: 9718. Examen TIC-A1 2013";


//  Id pregunta: 9741 AÃ±o de creación de pregunta: 2014-01-01
 questions[70]= "71)  &iquest;Qu&eacute; significa CDI en el contexto de Java EE 7?";
 choices[70]= new Array();
 choices[70][0] = "Contexts and Dependency Injection.";
 choices[70][1] = "Common Display Interface.";
 choices[70][2] = "Context-Dependent Interface.";
 choices[70][3] = "Case-Driven Implementation.";
 answers[70] = choices[70][0];
 units[70] = "60";
 comments[70] = "Id Pregunta: 9741. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9959 AÃ±o de creación de pregunta: 2014-01-01
 questions[71]= "72)  ASP.NET proporciona varios modos de persistencia para las variables de sesi&oacute;n. Indique cu&aacute;l de las respuestas NO es un modo v&aacute;lido:";
 choices[71]= new Array();
 choices[71][0] = "InProc";
 choices[71][1] = "StateServer";
 choices[71][2] = "ClusterServer";
 choices[71][3] = "SqlServer";
 answers[71] = choices[71][2];
 units[71] = "59,115";
 comments[71] = "Id Pregunta: 9959. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";


//  Id pregunta: 9965 AÃ±o de creación de pregunta: 2014-01-01
 questions[72]= "73)  &iquest;Cu&aacute;l de las siguientes afirmaciones es FALSA respecto al lenguaje de programaci&oacute;n C# de la  plataforma .NET?";
 choices[72]= new Array();
 choices[72][0] = "En C# una clase puede heredar directamente de una sola clase primaria pero puede implementar cualquier n&uacute;mero de interfaces.";
 choices[72][1] = "C# no admite la aritm&eacute;tica con punteros de manera predeterminada, sin embargo, si utiliza la palabra clave unsafe, puede definir un contexto no seguro en el que se pueden utilizar punteros";
 choices[72][2] = "Los programas en C# pueden constar de uno o varios archivos, y cada archivo puede contener cero o varios espacios de nombres (namespaces).";
 choices[72][3] = "Un espacio de nombres (namespace) puede contener tipos tales como clases (classes), estructuras (structs), interfaces (interfaces), enumeraciones (enumerations) y delegados (delegates), pero no puede contener otros espacios de nombres (namespaces).";
 answers[72] = choices[72][3];
 units[72] = "59,115";
 comments[72] = "Id Pregunta: 9965. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";


//  Id pregunta: 9981 AÃ±o de creación de pregunta: 2014-01-01
 questions[73]= "74)  &iquest;Con qu&eacute; siglas se identifica el Common Language Runtime de la plataforma .NET?";
 choices[73]= new Array();
 choices[73][0] = "CLRUN";
 choices[73][1] = "CLRNET";
 choices[73][2] = "COLR";
 choices[73][3] = "CLR";
 answers[73] = choices[73][3];
 units[73] = "59,115";
 comments[73] = "Id Pregunta: 9981. TIC A2, UPM, Examen 2010";


//  Id pregunta: 10222 AÃ±o de creación de pregunta: 2014-01-01
 questions[74]= "75)  Conociendo que la variable es de tipo byte y su valor es 12, cual ser&aacute; el resultado de la sentencia:System.out.println(busca == 6 + 6 ? &quot;true&quot; : &quot;false&quot;);";
 choices[74]= new Array();
 choices[74][0] = "Da un error de compilaci&oacute;n";
 choices[74][1] = "TRUE";
 choices[74][2] = "FALSE";
 choices[74][3] = "12";
 answers[74] = choices[74][1];
 units[74] = "60";
 comments[74] = "Id Pregunta: 10222. NULL";


//  Id pregunta: 10223 AÃ±o de creación de pregunta: 2014-01-01
 questions[75]= "76)  Teniendo las siguientes sentencias, el resultado ser&aacute;:byte b1 = 126, b2 = 1;byte b3 = b1 + b2;System.out.println(&quot;b3 vale: &quot; + b3);";
 choices[75]= new Array();
 choices[75][0] = "127";
 choices[75][1] = "Da error, ya que se supera el valor m&aacute;ximo que admite un dato de tipo byte";
 choices[75][2] = "Da error y no compila ya que b3 deber&iacute;a ser de tipo int";
 choices[75][3] = "Da error ya que las variables est&aacute;n mal declaradas";
 answers[75] = choices[75][2];
 units[75] = "60";
 comments[75] = "Id Pregunta: 10223. La suma de la segunda l&iacute;nea solo acepta int. Si se suman bytes debe hacerse casting.";


//  Id pregunta: 10229 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  Cuales de los siguientes objetos son interfaces:";
 choices[76]= new Array();
 choices[76][0] = "java.util.List";
 choices[76][1] = "java.util.TreeMap";
 choices[76][2] = "java.util.AbstractList";
 choices[76][3] = "java.util.Collections";
 answers[76] = choices[76][0];
 units[76] = "60";
 comments[76] = "Id Pregunta: 10229. NULL";


//  Id pregunta: 10232 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  &iquest;Cual de las siguientes clases o interfaces es usado para recuperar informaci&oacute;n de la sesi&oacute;n asociada con el usuario?:";
 choices[77]= new Array();
 choices[77][0] = "GenericServlet";
 choices[77][1] = "ServletConfig";
 choices[77][2] = "ServletContext";
 choices[77][3] = "HttpServletRequest";
 answers[77] = choices[77][3];
 units[77] = "116";
 comments[77] = "Id Pregunta: 10232. NULL";


//  Id pregunta: 10234 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  Podemos considerar a SOAP como:";
 choices[78]= new Array();
 choices[78][0] = "Un protocolo XML para ser usado con tecnolog&iacute;a RMI";
 choices[78][1] = "Una especificaci&oacute;n que describe las normas en que se envian y reciben comunicaciones basadas en XML";
 choices[78][2] = "Sustituye al protocolo RPC en sistemas distribuidos que usan CORBA";
 choices[78][3] = "Ninguna de las anteriores";
 answers[78] = choices[78][1];
 units[78] = "116";
 comments[78] = "Id Pregunta: 10234. NULL";


//  Id pregunta: 10241 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  Teniendo el siguiente c&oacute;digo, despu&eacute;s de ejecutarse &iquest;que respuestas son correctas?:int [] x = new int[25];";
 choices[79]= new Array();
 choices[79][0] = "x[24] es 0";
 choices[79][1] = "x[24] es indefinido";
 choices[79][2] = "x[25] es 0";
 choices[79][3] = "x[0] es igual a null";
 answers[79] = choices[79][0];
 units[79] = "60";
 comments[79] = "Id Pregunta: 10241. NULL";


//  Id pregunta: 10243 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  Dentro del archivo struts-config existe el atributo &lt;exception&gt;, puedes se&ntilde;alar la respuesta correcta que explica la funci&oacute;n del elemento scope:";
 choices[80]= new Array();
 choices[80][0] = "El alcance del Objeto ActionError relativo al m&oacute;dulo o aplicaci&oacute;n web";
 choices[80][1] = "El contexto que se usa para acceder al objeto ActionError para esta Exception";
 choices[80][2] = "Resuelve el nombre del manejador de excepiones de la clase Java";
 choices[80][3] = "Hace referencia a la clase Java registrada para manejar estas excepciones";
 answers[80] = choices[80][1];
 units[80] = "116";
 comments[80] = "Id Pregunta: 10243. NULL";


//  Id pregunta: 10459 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  Indique cu&aacute;l es el m&eacute;todo indicado por el W3C para la optimizaci&oacute;n de la transmisi&oacute;n de mensajes SOAP:";
 choices[81]= new Array();
 choices[81][0] = "XOP XML-binary Optimized Protocol";
 choices[81][1] = "XOP XML-binary Optimized Packaging";
 choices[81][2] = "MTOM Message Transmission Optimization Mechanism";
 choices[81][3] = "REST Represantional State Transfer";
 answers[81] = choices[81][2];
 units[81] = "51";
 comments[81] = "Id Pregunta: 10459. NULL";


//  Id pregunta: 10660 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  Indique la afirmaci&oacute;n incorrecta:";
 choices[82]= new Array();
 choices[82][0] = "JavaScript es orientado a objetos.";
 choices[82][1] = "JavaScript no puede ejecutarse en el lado del servidor.";
 choices[82][2] = "Para interactuar con una p&aacute;gina web, JavaScript utiliza una implementaci&oacute;n de DOM (Document Object Model).";
 choices[82][3] = "La tecnolog&iacute;a AJAX utiliza JavaScript de forma as&iacute;ncrona.";
 answers[82] = choices[82][1];
 units[82] = "114";
 comments[82] = "Id Pregunta: 10660. ";


//  Id pregunta: 10661 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  Indique la afirmaci&oacute;n incorrecta:";
 choices[83]= new Array();
 choices[83][0] = "ActiveX es una evoluci&oacute;n de las tecnolog&iacute;as Component Object Model (COM) y Object Linking and Embedding (OLE).";
 choices[83][1] = "La tecnolog&iacute;a ActiveX est&aacute; limitada al sistema operativo Windows.";
 choices[83][2] = "Para introducir un control ActiveX en una p&aacute;gina HTML es necesario utilizar la etiqueta &lt;object&gt;";
 choices[83][3] = "Todas las anteriores son correctas.";
 answers[83] = choices[83][1];
 units[83] = "114";
 comments[83] = "Id Pregunta: 10661. ";


//  Id pregunta: 10847 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  La especificaci&oacute;n &ldquo;Java Platform, Enterprise Edition 7 (Java EE 7)&rdquo; se encuentra definida en el JSR (Java Specification Request):";
 choices[84]= new Array();
 choices[84][0] = "JSR 342.";
 choices[84][1] = "JSR 366.";
 choices[84][2] = "JSR 324.";
 choices[84][3] = "JSR 224.";
 answers[84] = choices[84][0];
 units[84] = "60, 116";
 comments[84] = "Id Pregunta: 10847. Examen GSI 2014";


//  Id pregunta: 10848 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  Elija la respuesta correcta respecto Java EE 7:";
 choices[85]= new Array();
 choices[85][0] = "Para crear un nuevo servlet se debe invocar al procedimiento init ().";
 choices[85][1] = "Para destruir un servlet se debe invocar al m&eacute;todo destroy().";
 choices[85][2] = "La clase ServletConfig sirve para pasarle informaci&oacute;n al servlet durante su inicializaci&oacute;n.";
 choices[85][3] = "La clase ServletSession proporciona a las aplicaciones las herramientas para la gesti&oacute;n de la sesi&oacute;n.";
 answers[85] = choices[85][2];
 units[85] = "60, 116";
 comments[85] = "Id Pregunta: 10848. Examen GSI 2014";


//  Id pregunta: 10849 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  Al conjunto de documentos que definen patrones de dise&ntilde;o y pr&aacute;cticas recomendadas en la creaci&oacute;n de aplicaciones utilizando Java Enterprise Edition se denomina:";
 choices[86]= new Array();
 choices[86][0] = "Java BluePrints.";
 choices[86][1] = "Java Specification Request.";
 choices[86][2] = "Java Community Process.";
 choices[86][3] = "Java Pattern Spec.";
 answers[86] = choices[86][0];
 units[86] = "60, 116";
 comments[86] = "Id Pregunta: 10849. Examen GSI 2014";


//  Id pregunta: 10851 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  La plataforma inform&aacute;tica y de servicios en Internet hospedada en centros de datos administrados o respaldados por Microsoft se llama:";
 choices[87]= new Array();
 choices[87][0] = "Bajoo.";
 choices[87][1] = "Azure.";
 choices[87][2] = "Heroku.";
 choices[87][3] = "Adrive.";
 answers[87] = choices[87][1];
 units[87] = "59, 115";
 comments[87] = "Id Pregunta: 10851. Examen GSI 2014";


//  Id pregunta: 10986 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  El 10 de enero de 2013 se public&oacute; una vulnerabilidad de d&iacute;a cero en Java 7 Update 10 y versiones anteriores de Java 7 que permit&iacute;a a un atacante escalar los privilegios de ejecuci&oacute;n de un applet. Se&ntilde;ale la opci&oacute;n INCORRECTA:";
 choices[88]= new Array();
 choices[88][0] = "Las vulnerabilidades de seguridad de Java han llevado a establecer un periodo mensual, los terceros viernes de cada mes, para los Oracle Java SE Critical Patch Updates.";
 choices[88][1] = "Las vulnerabilidades de seguridad de Java han llevado a Oracle a recomendar y facilitar la desactivaci&oacute;n de Java a partir de la versi&oacute;n 7 Update 10.";
 choices[88][2] = "Las vulnerabilidades de seguridad de Java han provocado que Oracle recomiende la desinstalaci&oacute;n de Java 6 de todos los equipos.";
 choices[88][3] = "Las vulnerabilidades de seguridad de Java han provocado que sea obligatorio firmar con un certificado reconocido los applets a partir de Java SE 7u21.";
 answers[88] = choices[88][0];
 units[88] = "60";
 comments[88] = "Id Pregunta: 10986. TIC A1 AGE 2014";


//  Id pregunta: 11041 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  &iquest;Qu&eacute; versi&oacute;n de Java incorpora de forma completa la librer&iacute;a JavaFX?";
 choices[89]= new Array();
 choices[89][0] = "5";
 choices[89][1] = "6";
 choices[89][2] = "7";
 choices[89][3] = "8";
 answers[89] = choices[89][3];
 units[89] = "60";
 comments[89] = "Id Pregunta: 11041. Viiene incluida desde la versi&oacute;n 7u6, pero no se incorpora de forma completa hasta la versi&oacute;n 8";


//  Id pregunta: 11131 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  &iquest;Cu&aacute;l de los siguiente no es un organismo de estandarizaci&oacute;n de arquitecturas SOA?";
 choices[90]= new Array();
 choices[90][0] = "Business Process Management Initiative (BPMI)";
 choices[90][1] = "Object Management Group (OMG)";
 choices[90][2] = "OASIS";
 choices[90][3] = "Microsoft-IBM Workflow Management Coallition";
 answers[90] = choices[90][3];
 units[90] = "51";
 comments[90] = "Id Pregunta: 11131. ";


//  Id pregunta: 11215 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Sobre la  tecnolog&iacute;a Java WebStart es cierto que:";
 choices[91]= new Array();
 choices[91][0] = "Permite la  instalaci&oacute;n de la aplicaci&oacute;n pero no su actualizaci&oacute;n.";
 choices[91][1] = "Permite la distribuci&oacute;n de aplicaciones Java sin instalaci&oacute;n adicional y desde cualquier navegador web.";
 choices[91][2] = "Utiliza JNLP (Java LaunchingProtocol) definido en la JSR-56 y basado en XML.";
 choices[91][3] = "Las dos anteriores son ciertas.";
 answers[91] = choices[91][3];
 units[91] = "60";
 comments[91] = "Id Pregunta: 11215. ";


//  Id pregunta: 11218 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Cu&aacute;l de las siguientes respuestas es falsa:";
 choices[92]= new Array();
 choices[92][0] = "Los compiladores nativos eliminan la independencia de la plataforma del c&oacute;digo compilado a cambio de proporcionar un mayor rendimiento.";
 choices[92][1] = "Los compiladores nativos AOT (Ahead-Of-time) compilan a c&oacute;digo m&aacute;quina nativo antes de la ejecuci&oacute;n de la aplicaci&oacute;n.";
 choices[92][2] = "Los compiladores JIT (Just in Time) compilan durante la ejecuci&oacute;n.";
 choices[92][3] = "Todas son verdaderas.";
 answers[92] = choices[92][3];
 units[92] = "60";
 comments[92] = "Id Pregunta: 11218. ";


//  Id pregunta: 11228 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Cu&aacute;l de los siguientes pasos es incorrecto para desplegar un servlet en un servidor web?";
 choices[93]= new Array();
 choices[93][0] = "Indicando en el web.xml la URL a la que responder&aacute; y la clase que lo implementar&aacute;.";
 choices[93][1] = "Implementado la clase del servlet, que implementar&aacute; la interfaz de IhttpServlet.";
 choices[93][2] = "Implementado la clase del servlet, que heredar&aacute; de la clase abstracta HttpServlet.";
 choices[93][3] = "Copiar la clase compilada en el directorio del servidor WEB-INF\classes\.";
 answers[93] = choices[93][1];
 units[93] = "116";
 comments[93] = "Id Pregunta: 11228. ";


//  Id pregunta: 11230 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l de las siguientes no es un API de la especificaci&oacute;n J2EE?";
 choices[94]= new Array();
 choices[94][0] = "JNDI.";
 choices[94][1] = "API Java IDL.";
 choices[94][2] = "JTA (Java Transaction API).";
 choices[94][3] = "JMS (Java Mobile Service).";
 answers[94] = choices[94][3];
 units[94] = "116";
 comments[94] = "Id Pregunta: 11230. ";


//  Id pregunta: 11233 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  El fichero Enterprise Archive (.ear) de empaquetado de aplicaciones web.";
 choices[95]= new Array();
 choices[95][0] = "Uno o m&aacute;s ficheros WAR.";
 choices[95][1] = "Uno o m&aacute;s ficheros JAR con las clases de la aplicaci&oacute;n.";
 choices[95][2] = "Un descriptor de despliegue de la aplicaci&oacute;n.";
 choices[95][3] = "Todas las respuestas son correctas.";
 answers[95] = choices[95][3];
 units[95] = "116";
 comments[95] = "Id Pregunta: 11233. ";


//  Id pregunta: 11235 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Respecto al Framework de Java Struts:";
 choices[96]= new Array();
 choices[96][0] = "El controlador consiste en un servlet llamado ActionServlet.";
 choices[96][1] = "No dispone  de una librer&iacute;a de etiquetas espec&iacute;fica (custom tag library).";
 choices[96][2] = " La &quot;uni&oacute;n&quot; de Struts 1 y JSF ha sido finalmente adoptada como la versi&oacute;n 2.0 de Apache Struts.";
 choices[96][3] = "No soporta internacionalizaci&oacute;n.";
 answers[96] = choices[96][0];
 units[96] = "116";
 comments[96] = "Id Pregunta: 11235. ";


//  Id pregunta: 11237 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  El framework Hibernate";
 choices[97]= new Array();
 choices[97][0] = "Est&aacute; disponible tambi&eacute;n para&nbsp;.Net&nbsp;con el nombre de&nbsp;NHibernate.";
 choices[97][1] = "Hibernate se distribuye bajo los t&eacute;rminos de la licencia&nbsp;GNU LGPL.";
 choices[97][2] = "Se apoya en Java Reflection API y en la librer&iacute;a de generaci&oacute;n de c&oacute;digo Javassist.";
 choices[97][3] = "Todas las respuestas son correctas.";
 answers[97] = choices[97][3];
 units[97] = "116";
 comments[97] = "Id Pregunta: 11237. ";


//  Id pregunta: 11331 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  De los servicios Java, indique la afirmaci&oacute;n que NO es correcta";
 choices[98]= new Array();
 choices[98][0] = "JPA ha reemplazado a los Entity beans, que desaparecieron en la versi&oacute;n 5 de Java";
 choices[98][1] = "JNI se utiliza para el acceso a directorios";
 choices[98][2] = "JAX-WS hace que la creaci&oacute;n de Web Services en Java sea m&aacute;s sencilla";
 choices[98][3] = "JAXP permite el acceso a ficheros XML";
 answers[98] = choices[98][1];
 units[98] = "116";
 comments[98] = "Id Pregunta: 11331. Es JNDI el que se corresponde con esa descripci&oacute;n";


//  Id pregunta: 11672 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  En Java, para redirigir la petici&oacute;n a otra p&aacute;gina JSP se utiliza la etiqueta:";
 choices[99]= new Array();
 choices[99][0] = "page";
 choices[99][1] = "forward";
 choices[99][2] = "request";
 choices[99][3] = "pageContext";
 answers[99] = choices[99][1];
 units[99] = "116";
 comments[99] = "Id Pregunta: 11672. ";


