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

//  Id pregunta: 754 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  Indicar la afirmaci&oacute;n INCORRECTA respecto MS ASP.NET";
 choices[0]= new Array();
 choices[0][0] = "ASP.NET puede utilizar cualquier lenguaje de programaci&oacute;n soportado por .NET";
 choices[0][1] = "Es compatible con p&aacute;ginas ASP existentes";
 choices[0][2] = "Necesita el .NET Framework para su ejecuci&oacute;n";
 choices[0][3] = "Se puede utilizar con servidores web que no sean IIS, como Apache o nginx";
 answers[0] = choices[0][3];
 units[0] = "59";
 comments[0] = "Id Pregunta: 754. NULL";


//  Id pregunta: 766 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  con respecto a las tecnolog&iacute;as de desarrollo web";
 choices[1]= new Array();
 choices[1][0] = "iis act&uacute;a como servidor web de microsoft";
 choices[1][1] = "no se puede acceder a una base de datos oracle desde un entorno microsoft";
 choices[1][2] = "las p&aacute;ginas asp suelen funcionar sobre servidores apache";
 choices[1][3] = "sql server suele estar asociado a la tecnolog&iacute;a php";
 answers[1] = choices[1][0];
 units[1] = "114,115";
 comments[1] = "Id Pregunta: 766. ";


//  Id pregunta: 825 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;C&oacute;mo se denomina en Java el miniprograma que corre solamente bajo un navegador y es descargado autom&aacute;ticamente como parte de una p&aacute;gina web?:";
 choices[2]= new Array();
 choices[2][0] = "JavaScript";
 choices[2][1] = "Applet";
 choices[2][2] = "Servlet";
 choices[2][3] = "XML";
 answers[2] = choices[2][1];
 units[2] = "60";
 comments[2] = "Id Pregunta: 825. JCED - Preparatic XVII";


//  Id pregunta: 931 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;Qu&eacute; es un applet de Java?:";
 choices[3]= new Array();
 choices[3][0] = "Una aplicaci&oacute;n escrita en Java";
 choices[3][1] = "Un control ActiveX";
 choices[3][2] = "Un programa de Java incrustado en una p&aacute;gina HTML";
 choices[3][3] = "Ninguna de las anteriores";
 answers[3] = choices[3][2];
 units[3] = "60";
 comments[3] = "Id Pregunta: 931. Se especifica en la pregunta que sea de Java, porque Flash tambi&eacute;n es un applet";


//  Id pregunta: 951 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  COM:";
 choices[4]= new Array();
 choices[4][0] = "Es la extensi&oacute;n del sistema MS/DOS ligada a ejecutables de menos de 64 Kb";
 choices[4][1] = "Es el TLD asociado a organizaciones comerciales de EEUU";
 choices[4][2] = "Son las siglas de Component Object Model, arquitectura de desarrollo de Microsoft, previa a .NET";
 choices[4][3] = "Todas las respuestas anteriores son ciertas";
 answers[4] = choices[4][3];
 units[4] = "116";
 comments[4] = "Id Pregunta: 951. ";


//  Id pregunta: 1165 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  Entre las caracter&iacute;sticas de JAVA que se describen a continuaci&oacute;n s&oacute;lo una es cierta. Se&ntilde;&aacute;lela:";
 choices[5]= new Array();
 choices[5][0] = "JAVA es similar a C++ pero m&aacute;s complejo que &eacute;ste";
 choices[5][1] = "La portabilidad de los programas JAVA no requiere recompilar.";
 choices[5][2] = "JAVA es del orden de 10 veces m&aacute;s r&aacute;pido que C++";
 choices[5][3] = "Todas las anteriores son ciertas";
 answers[5] = choices[5][1];
 units[5] = "60";
 comments[5] = "Id Pregunta: 1165. JCED - Preparatic XVII";


//  Id pregunta: 1195 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Indique una caracter&iacute;stica falsa de Java:";
 choices[6]= new Array();
 choices[6][0] = "Es interpretado y portable a distintas plataformas";
 choices[6][1] = "Soporta programaci&oacute;n multihilo (multithreading)";
 choices[6][2] = "Es un entorno seguro porque el sistema runtime incorpora protecci&oacute;n contra virus y alteraciones de c&oacute;digo";
 choices[6][3] = "Todas las anteriores son caracter&iacute;sticas de Java";
 answers[6] = choices[6][3];
 units[6] = "60";
 comments[6] = "Id Pregunta: 1195. JCED - Preparatic XVII";


//  Id pregunta: 1201 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  JDeveloper es:";
 choices[7]= new Array();
 choices[7][0] = "Un entorno de desarrollo integrado (IDE)";
 choices[7][1] = "Una base de datos";
 choices[7][2] = "Un gestor de contenidos";
 choices[7][3] = "Un gestor de informes";
 answers[7] = choices[7][0];
 units[7] = "60";
 comments[7] = "Id Pregunta: 1201. NULL";


//  Id pregunta: 1281 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Los programas fuente Java:";
 choices[8]= new Array();
 choices[8][0] = "Se compilan siempre";
 choices[8][1] = "Nunca se compilan, excepto para las m&aacute;quinas con procesador Java";
 choices[8][2] = "Siempre se interpretan para que puedan ejecutarse en m&aacute;quinas con diferente procesador, excepto para las m&aacute;quinas con procesador Java en que son ejecutables directamente";
 choices[8][3] = "Hay partes compiladas y partes interpretadas";
 answers[8] = choices[8][0];
 units[8] = "60";
 comments[8] = "Id Pregunta: 1281. Siempre se compilan a Bytecode.";


//  Id pregunta: 1283 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  Los servlets:";
 choices[9]= new Array();
 choices[9][0] = "Son componentes que extienden la funcionalidad de los servidores orientados a &ldquo;request/response&rdquo;";
 choices[9][1] = "Son a los servidores lo que los applets son a los navegadores  y sustituyen a los scripts CGI";
 choices[9][2] = "Pueden manejar concurrentemente varias peticiones a otros servlets y a otros servidores, lo cual los hace ideales para sistemas de conferencias online";
 choices[9][3] = "Todas las respuestas anteriores son correctas";
 answers[9] = choices[9][0];
 units[9] = "116";
 comments[9] = "Id Pregunta: 1283. ";


//  Id pregunta: 1620 AÃ±o de creación de pregunta: 2003-01-01
 questions[10]= "11)  Que caracter&iacute;stica de Java no es completamente cierta";
 choices[10]= new Array();
 choices[10][0] = "Es independiente del SO";
 choices[10][1] = "Es independiente de la plataforma";
 choices[10][2] = "Es independiente del HW";
 choices[10][3] = "Write once run everywhere ";
 answers[10] = choices[10][3];
 units[10] = "60";
 comments[10] = "Id Pregunta: 1620. El c&oacute;digo puede requerir alguna personalizaci&oacute;n para entorno en que se ejecute.";


//  Id pregunta: 1754 AÃ±o de creación de pregunta: 2006-01-01
 questions[11]= "12)  &iquest;Qu&eacute; es el CLR?";
 choices[11]= new Array();
 choices[11][0] = "Un lenguaje de programaci&oacute;n para .Net";
 choices[11][1] = "El entorno de ejecuci&oacute;n de .Net";
 choices[11][2] = "Una biblioteca de clases de objetos";
 choices[11][3] = "Un motor de bases de datos para dispositivos m&oacute;viles";
 answers[11] = choices[11][1];
 units[11] = "59";
 comments[11] = "Id Pregunta: 1754. ";


//  Id pregunta: 1780 AÃ±o de creación de pregunta: 2006-01-01
 questions[12]= "13)  Se&ntilde;ale cual de estos entornos de desarrollo en Java no es gratuito";
 choices[12]= new Array();
 choices[12][0] = "Jdeveloper";
 choices[12][1] = "Eclipse";
 choices[12][2] = "JBuilder";
 choices[12][3] = "NetBeans";
 answers[12] = choices[12][2];
 units[12] = "60";
 comments[12] = "Id Pregunta: 1780. NULL";


//  Id pregunta: 2924 AÃ±o de creación de pregunta: 2004-01-01
 questions[13]= "14)  En relaci&oacute;n a los servicios web se&ntilde;ale la opci&oacute;n incorrecta";
 choices[13]= new Array();
 choices[13][0] = "SOAP (Simple Object access Protocol &oacute; Services-Oriented Architecture Protocol) es el protocolo de comunicaciones para los Servicios Web";
 choices[13][1] = "WSML (Web Service Markup Language) describe el interfaz externo de un Servicio Web y c&oacute;mo utilizarlo";
 choices[13][2] = "UDDI (Universal Discovery, Descripcion and Integration) es un protocolo para registros basados en web que contiene informaci&oacute;n acerca de servicios. Un registro UDDI es como el list&iacute;n de los servicios.";
 choices[13][3] = "Un Servicio Web se describe con un archivo WSDL, se registra en UDDI y se muestra en web a trav&eacute;s de SOAP.";
 answers[13] = choices[13][1];
 units[13] = "51";
 comments[13] = "Id Pregunta: 2924. Similar a examen TIC SS A 2003";


//  Id pregunta: 2949 AÃ±o de creación de pregunta: 2004-01-01
 questions[14]= "15)  ActiveX s&oacute;lo puede ejecutarse en:";
 choices[14]= new Array();
 choices[14][0] = "Java";
 choices[14][1] = "UNIX";
 choices[14][2] = "Microsoft/Intel";
 choices[14][3] = "Virtual Machine";
 answers[14] = choices[14][2];
 units[14] = "114";
 comments[14] = "Id Pregunta: 2949. Similar a examen TIC SS A 2003";


//  Id pregunta: 3033 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  &iquest;Cu&aacute;l de las siguientes afirmaciones no es cierta en una aplicaci&oacute;n web?:";
 choices[15]= new Array();
 choices[15][0] = "Las p&aacute;ginas ASP se ejecutan en el servidor web";
 choices[15][1] = "Los componentes ActiveX se ejecutan en el cliente";
 choices[15][2] = "Los componentes CGI se ejecutan en el servidor";
 choices[15][3] = "Los applets de Java se ejecutan en el servidor";
 answers[15] = choices[15][3];
 units[15] = "114";
 comments[15] = "Id Pregunta: 3033. ";


//  Id pregunta: 3038 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  &iquest;Cu&aacute;l de los siguientes no es un lenguaje de scripting?:";
 choices[16]= new Array();
 choices[16][0] = "JavaScript";
 choices[16][1] = "Jscript";
 choices[16][2] = "VBScript";
 choices[16][3] = "XMLScript";
 answers[16] = choices[16][3];
 units[16] = "114,115,116";
 comments[16] = "Id Pregunta: 3038. ";


//  Id pregunta: 3093 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Un CGI:";
 choices[17]= new Array();
 choices[17][0] = "Es una aplicaci&oacute;n dise&ntilde;ada para ejecutarse en el servidor web, devolviendo los resultados al usuario mediante el navegador";
 choices[17][1] = "Puede estar escrito en Pascal";
 choices[17][2] = "Puede ejecutarse en sistemas Windows";
 choices[17][3] = "Todas son ciertas";
 answers[17] = choices[17][3];
 units[17] = "114,115,116";
 comments[17] = "Id Pregunta: 3093. ";


//  Id pregunta: 3659 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Un control Active X:";
 choices[18]= new Array();
 choices[18][0] = "S&oacute;lo se pueden escribir en Java";
 choices[18][1] = "S&oacute;lo se pueden ejecutar en sistemas Windows/Intel";
 choices[18][2] = "S&oacute;lo pueden acceder a funciones dentro del contenedor en el que se ejecutan";
 choices[18][3] = "S&oacute;lo se pueden escribir en C/C++";
 answers[18] = choices[18][1];
 units[18] = "115";
 comments[18] = "Id Pregunta: 3659. NULL";


//  Id pregunta: 3862 AÃ±o de creación de pregunta: 2004-01-01
 questions[19]= "20)  Qu&eacute; servicio no ofrece DNS security";
 choices[19]= new Array();
 choices[19][0] = "Prueba del origen de datos";
 choices[19][1] = "Distribuci&oacute;n de clave p&uacute;blica";
 choices[19][2] = "Secreto del mensaje";
 choices[19][3] = "Autenticaci&oacute;n";
 answers[19] = choices[19][2];
 units[19] = "116";
 comments[19] = "Id Pregunta: 3862. Tanenbaum";


//  Id pregunta: 3875 AÃ±o de creación de pregunta: 2003-01-01
 questions[20]= "21)  &iquest;Cu&aacute;l de los siguientes no es un tipo de componente Java?:";
 choices[20]= new Array();
 choices[20][0] = "Enterprise Java Beans (EJB).";
 choices[20][1] = "Servlets.";
 choices[20][2] = "Java Platform Enterprise Edition (J2EE).";
 choices[20][3] = "JavaServer Pages (JSP).";
 answers[20] = choices[20][2];
 units[20] = "116";
 comments[20] = "Id Pregunta: 3875. Junta Andaluc&iacute;a";


//  Id pregunta: 4095 AÃ±o de creación de pregunta: 2006-01-01
 questions[21]= "22)  &iquest;Qu&eacute; tecnolog&iacute;a es util   para crear interfaces de usuario?";
 choices[21]= new Array();
 choices[21][0] = "JSF";
 choices[21][1] = "AJAX";
 choices[21][2] = "Ambas son utiles para crear interface de usuario";
 choices[21][3] = "Ninguna de las anteriores";
 answers[21] = choices[21][2];
 units[21] = "116";
 comments[21] = "Id Pregunta: 4095. ";


//  Id pregunta: 4096 AÃ±o de creación de pregunta: 2006-01-01
 questions[22]= "23)  Con que tecnolog&iacute;a se relaciona el Bytecode";
 choices[22]= new Array();
 choices[22][0] = "Java";
 choices[22][1] = ".Net";
 choices[22][2] = "Java Script";
 choices[22][3] = "Ninguna de las anteriores";
 answers[22] = choices[22][0];
 units[22] = "116";
 comments[22] = "Id Pregunta: 4096. ";


//  Id pregunta: 4097 AÃ±o de creación de pregunta: 2006-01-01
 questions[23]= "24)  Con que tecnolog&iacute;a no se puede implementar una arquitectura SOA";
 choices[23]= new Array();
 choices[23][0] = "J2EE";
 choices[23][1] = ".Net";
 choices[23][2] = "Software Libre";
 choices[23][3] = "Se puede con todas las anteriores";
 answers[23] = choices[23][3];
 units[23] = "116";
 comments[23] = "Id Pregunta: 4097. ";


//  Id pregunta: 4099 AÃ±o de creación de pregunta: 2006-01-01
 questions[24]= "25)  Un servlet de Java tiene como principales caracter&iacute;sticas (se&ntilde;ale la falsa)";
 choices[24]= new Array();
 choices[24][0] = "su instalaci&oacute;n, gesti&oacute;n y ejecuci&oacute;n se realiza en un componente denominado contenedor";
 choices[24][1] = "requieren escaso c&oacute;digo para conseguir un nivel aceptable de presentaci&oacute;n, por lo cual han desplazado en parte a los JSPs";
 choices[24][2] = "Heredan de la clase abstracta HttpServlet";
 choices[24][3] = "Son todas correctas";
 answers[24] = choices[24][1];
 units[24] = "116";
 comments[24] = "Id Pregunta: 4099. ";


//  Id pregunta: 4208 AÃ±o de creación de pregunta: 2006-01-01
 questions[25]= "26)  Los formatos de im&aacute;genes admitidos por los navegadores Internet Explorer 6.0, Netscape 8.0 y Opera 8.0, son:";
 choices[25]= new Array();
 choices[25][0] = "jpeg, tiff y spp";
 choices[25][1] = "jpeg, spp y psd";
 choices[25][2] = "jpeg, spp y tiff";
 choices[25][3] = "jpeg, gif y png";
 answers[25] = choices[25][3];
 units[25] = "114";
 comments[25] = "Id Pregunta: 4208. ";


//  Id pregunta: 4237 AÃ±o de creación de pregunta: 2007-01-01
 questions[26]= "27)  Indique que significan las siglas AJAX";
 choices[26]= new Array();
 choices[26][0] = "Asynchronous Java And  XML";
 choices[26][1] = "Asynchronous JavaScript And  XML";
 choices[26][2] = "Asynchronous JavaScript And  XSL";
 choices[26][3] = "Advanced JavaScript And  XML";
 answers[26] = choices[26][1];
 units[26] = "114";
 comments[26] = "Id Pregunta: 4237. ";


//  Id pregunta: 4243 AÃ±o de creación de pregunta: 2007-01-01
 questions[27]= "28)  Qu&eacute; es AXIS";
 choices[27]= new Array();
 choices[27][0] = "Un servidor de aplicaciones";
 choices[27][1] = "Un lenguaje de programaci&oacute;n";
 choices[27][2] = "Una implementaci&oacute;n de SOAP para APACHE";
 choices[27][3] = "Un m&eacute;todo as&iacute;ncrono de comunicaci&oacute;n entre servidores.";
 answers[27] = choices[27][2];
 units[27] = "51";
 comments[27] = "Id Pregunta: 4243. NULL";


//  Id pregunta: 4310 AÃ±o de creación de pregunta: 2007-01-01
 questions[28]= "29)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre la arquitectura .Net no es correcta?:";
 choices[28]= new Array();
 choices[28][0] = "Las aplicaciones .Net s&oacute;lo pueden ejecutarse en los sistemas operativos Windows.";
 choices[28][1] = ".NET soporta la creaci&oacute;n de Servicios Web XML independientes de la plataforma, a trav&eacute;s de SOAP.";
 choices[28][2] = "El proceso de compilaci&oacute;n en .Net produce un fichero ejecutable al que se denomina portable executable (PE).";
 choices[28][3] = "Al c&oacute;digo escrito para ejecutarse en la plataforma .NET se le llama c&oacute;digo gestionado.";
 answers[28] = choices[28][0];
 units[28] = "59";
 comments[28] = "Id Pregunta: 4310. JCED - Preparatic XVII";


//  Id pregunta: 4385 AÃ±o de creación de pregunta: 2007-01-01
 questions[29]= "30)  J2EE es:";
 choices[29]= new Array();
 choices[29][0] = "Un producto.";
 choices[29][1] = "Un servicio.";
 choices[29][2] = "Un estandar.";
 choices[29][3] = "Un entorno de desarrollo.";
 answers[29] = choices[29][2];
 units[29] = "60";
 comments[29] = "Id Pregunta: 4385. Es una especificaci&oacute;n que es est&aacute;ndar.";


//  Id pregunta: 4569 AÃ±o de creación de pregunta: 2007-01-01
 questions[30]= "31)  Para hacer una Ilamada a un procedimiento almacenado trabajando con JDBC podemos utilizar un objeto CallableStatement. Si el procedimiento almacenado devuelve mas de un conjunto de resultados, &iquest;que m&eacute;todo deberemos invocar?:";
 choices[30]= new Array();
 choices[30][0] = "execute";
 choices[30][1] = "executeQuery";
 choices[30][2] = "executeProcedure";
 choices[30][3] = "executeUpdate";
 answers[30] = choices[30][0];
 units[30] = "60";
 comments[30] = "Id Pregunta: 4569. NULL";


//  Id pregunta: 4584 AÃ±o de creación de pregunta: 2007-01-01
 questions[31]= "32)  Cual de las siguientes opciones NO es un contenedor para Ia arquitectura J2EE";
 choices[31]= new Array();
 choices[31][0] = "contenedor web";
 choices[31][1] = "contenedor EJB";
 choices[31][2] = "contenedor de aplicaci&oacute;n cliente";
 choices[31][3] = "contenedor de base de datos";
 answers[31] = choices[31][3];
 units[31] = "60";
 comments[31] = "Id Pregunta: 4584. NULL";


//  Id pregunta: 4603 AÃ±o de creación de pregunta: 2007-01-01
 questions[32]= "33)  El driver JDBC-ODBC bridge, se utiliza";
 choices[32]= new Array();
 choices[32][0] = "cuando no existen drivers JDBC nativos.";
 choices[32][1] = "Para garantizar el &eacute;xito de los accesos a la BD.";
 choices[32][2] = "como variable de Ia tecnolog&iacute;a ODBC.";
 choices[32][3] = "para implementar operaciones ODBC, traduci&eacute;ndolas en operaciones JDBC";
 answers[32] = choices[32][0];
 units[32] = "60";
 comments[32] = "Id Pregunta: 4603. NULL";


//  Id pregunta: 4625 AÃ±o de creación de pregunta: 2007-01-01
 questions[33]= "34)  Cu&aacute;l de las siguientes caracter&iacute;sticas del protocolo SOAP es falsa";
 choices[33]= new Array();
 choices[33][0] = "Atraviesa firewalls y routers";
 choices[33][1] = "Depende del sistema operativo y del procesador";
 choices[33][2] = "Es un est&aacute;ndar de la industria";
 choices[33][3] = "Utiliza los mismos est&aacute;ndares de la Web";
 answers[33] = choices[33][1];
 units[33] = "51";
 comments[33] = "Id Pregunta: 4625. NULL";


//  Id pregunta: 4829 AÃ±o de creación de pregunta: 2007-01-01
 questions[34]= "35)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas NO es aplicable en una aplicaci&oacute;n desarrollada con la tecnolog&iacute;a Java WebStart?";
 choices[34]= new Array();
 choices[34][0] = "Permite ejecutar aplicaciones independientemente de cual sea la plataforma cliente";
 choices[34][1] = "Soporta m&uacute;ltiples versiones de entornos de ejecuci&oacute;n Java en el cliente";
 choices[34][2] = "Se requiere la firma de las aplicaciones que vayan a ejecutarse en ese entorno para garantizar la seguridaddel cliente";
 choices[34][3] = "La actualizaci&oacute;n de las aplicaciones se hace en el servidor, y el cliente s&oacute;lo precisa descargar loscomponentes actualizados";
 answers[34] = choices[34][2];
 units[34] = "116";
 comments[34] = "Id Pregunta: 4829. ";


//  Id pregunta: 4977 AÃ±o de creación de pregunta: 2003-01-01
 questions[35]= "36)  &iquest;Cu&aacute;l de las siguientes acciones no es necesaria para sindicar un documento de nuestra web mediante RSS?:";
 choices[35]= new Array();
 choices[35][0] = "Crear un documento RSS y guardarlo con una extensi&oacute;n .xml.";
 choices[35][1] = "Cargar el documento en nuestro sitio web.";
 choices[35][2] = "Registrase (web y documento) en un agregador RSS.";
 choices[35][3] = "Pagar el canon de registro a Red.Es.";
 answers[35] = choices[35][3];
 units[35] = "114";
 comments[35] = "Id Pregunta: 4977. Examen TIC B 2007";


//  Id pregunta: 4998 AÃ±o de creación de pregunta: 2003-01-01
 questions[36]= "37)  Indique cu&aacute;l de las siguientes afirmaciones es incorrecta en relaci&oacute;n con la m&aacute;quina virtual de Java:";
 choices[36]= new Array();
 choices[36][0] = "La implementaci&oacute;n de la m&aacute;quina virtual de Java es independiente de la plataforma sobre la que se ejecute";
 choices[36][1] = "La principal ventaja que aporta es la portabilidad de las aplicaciones escritas en Java entre diferentesplataformas";
 choices[36][2] = "Existen versiones de m&aacute;quina virtual implantadas por hardware";
 choices[36][3] = "El c&oacute;digo que ejecuta la m&aacute;quina virtual se llama &quot;Java Bytecode&quot;";
 answers[36] = choices[36][0];
 units[36] = "60";
 comments[36] = "Id Pregunta: 4998. Examen TIC A 2007";


//  Id pregunta: 5287 AÃ±o de creación de pregunta: 2003-01-01
 questions[37]= "38)  Indique cu&aacute;l de las siguientes tecnolog&iacute;as JAVA puede utilizarse para invocar dentro de una aplicaci&oacute;n a un parser DOM:";
 choices[37]= new Array();
 choices[37][0] = "JAX-RPC";
 choices[37][1] = "SAAJ";
 choices[37][2] = "JAXR";
 choices[37][3] = "JAXP";
 answers[37] = choices[37][3];
 units[37] = "116";
 comments[37] = "Id Pregunta: 5287. ";


//  Id pregunta: 5494 AÃ±o de creación de pregunta: 2003-01-01
 questions[38]= "39)  SWT (Standard Widget Toolkit)";
 choices[38]= new Array();
 choices[38][0] = "El rendimiento de la librer&iacute;a AWT es mejor que la de SWT";
 choices[38][1] = "Es una librer&iacute;a que proporciona funcionalidades de componentes gr&aacute;ficos  para la plataforma Eclipse.";
 choices[38][2] = "a y b son ciertas";
 choices[38][3] = "Se ha desarrollado puramente en Java";
 answers[38] = choices[38][1];
 units[38] = "60";
 comments[38] = "Id Pregunta: 5494. NULL";


//  Id pregunta: 5497 AÃ±o de creación de pregunta: 2003-01-01
 questions[39]= "40)  Indica la afirmaci&oacute;n correcta sobre la tecnolog&iacute;a JavaServer Faces:";
 choices[39]= new Array();
 choices[39][0] = "Ha quedado obsoleta por el framework Spring";
 choices[39][1] = "Es la nueva API Java para desarrollo de transacciones distribuidas";
 choices[39][2] = "Es una novedad del Java 2";
 choices[39][3] = "Es un framework de la capa de presentaci&oacute;n para desarrollo de aplicaciones Web";
 answers[39] = choices[39][3];
 units[39] = "116";
 comments[39] = "Id Pregunta: 5497. ";


//  Id pregunta: 5515 AÃ±o de creación de pregunta: 2003-01-01
 questions[40]= "41)  Indique cu&aacute;l de los siguientes no es un servidor de aplicaciones para servicios web:";
 choices[40]= new Array();
 choices[40][0] = "JONAS";
 choices[40][1] = "XIMDEX";
 choices[40][2] = "WEBSPHERE";
 choices[40][3] = "WEBLOGIC";
 answers[40] = choices[40][1];
 units[40] = "115,116";
 comments[40] = "Id Pregunta: 5515. ";


//  Id pregunta: 5641 AÃ±o de creación de pregunta: 2003-01-01
 questions[41]= "42)  Indique cu&aacute;l de los siguientes no se trata de un principio gu&iacute;a que defina reglas b&aacute;sicas para el desarrollo, mantenimiento y uso de arquitecturas SOA:";
 choices[41]= new Array();
 choices[41][0] = "Conceptualizaci&oacute;n";
 choices[41][1] = "Interoperabilidad";
 choices[41][2] = "Componentizaci&oacute;n";
 choices[41][3] = "Reutilizaci&oacute;n";
 answers[41] = choices[41][0];
 units[41] = "51";
 comments[41] = "Id Pregunta: 5641. NULL";


//  Id pregunta: 5780 AÃ±o de creación de pregunta: 2009-01-01
 questions[42]= "43)  Se&ntilde;ale c&oacute;mo se denomina el conjunto de reglas que deben de seguir los lenguajes de programaci&oacute;n para que sean compatibles con .NET se denomina:";
 choices[42]= new Array();
 choices[42][0] = "CLS";
 choices[42][1] = "MSIL";
 choices[42][2] = "Bytecode";
 choices[42][3] = "JIT";
 answers[42] = choices[42][0];
 units[42] = "59";
 comments[42] = "Id Pregunta: 5780. MAP 2008 A2";


//  Id pregunta: 5891 AÃ±o de creación de pregunta: 2009-01-01
 questions[43]= "44)  &iquest;Qu&eacute; tecnolog&iacute;a Java permite la invocaci&oacute;n de m&eacute;todos de un objeto remoto?";
 choices[43]= new Array();
 choices[43][0] = "RMI";
 choices[43][1] = "JNI";
 choices[43][2] = "JDBC";
 choices[43][3] = "JRM";
 answers[43] = choices[43][0];
 units[43] = "60";
 comments[43] = "Id Pregunta: 5891. NULL";


//  Id pregunta: 5900 AÃ±o de creación de pregunta: 2009-01-01
 questions[44]= "45)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa sobre JPA?";
 choices[44]= new Array();
 choices[44][0] = "El mapeo de los objetos al modelo relacional se puede definir mediante anotaciones en las entidades (clases)";
 choices[44][1] = "El mapeo de los objetos al modelo relacional se puede definir mediante ficheros XML";
 choices[44][2] = "Una misma unidad de persistencia permite acceder a diferentes fuentes de datos";
 choices[44][3] = "Una entidad puede estar mapeada a m&aacute;s de una tabla relacional";
 answers[44] = choices[44][2];
 units[44] = "60";
 comments[44] = "Id Pregunta: 5900. NULL";


//  Id pregunta: 5914 AÃ±o de creación de pregunta: 2009-01-01
 questions[45]= "46)  El formato GIF (Graphic Interchange Format):";
 choices[45]= new Array();
 choices[45][0] = "Almacena 8 bits por p&iacute;xel";
 choices[45][1] = "Almacena 32 bits por p&iacute;xel";
 choices[45][2] = "Admite una paleta de hasta 512 colores";
 choices[45][3] = "No admite el algor&iacute;tmo de compresi&oacute;n LZW (Lempel- Ziv-Welch)";
 answers[45] = choices[45][0];
 units[45] = "114";
 comments[45] = "Id Pregunta: 5914. MAP 2008 A1";


//  Id pregunta: 5986 AÃ±o de creación de pregunta: 2010-01-01
 questions[46]= "47)  Las arquitecturas orientadas a servicios est&aacute;n basadas en una serie de principios b&aacute;sicos, uno de los cu&aacute;les es:";
 choices[46]= new Array();
 choices[46][0] = "Los servicios usan una arquitectura &quot;hub-in-spoke&quot;";
 choices[46][1] = "Se integran en sistemas SGDBR";
 choices[46][2] = "Los cambios en la implementaci&oacute;n afectan a los consumidores del servicio";
 choices[46][3] = "Deben estar accesibles y deben poder ser localizados para su consumo";
 answers[46] = choices[46][3];
 units[46] = "51";
 comments[46] = "Id Pregunta: 5986. TIC A 2009";


//  Id pregunta: 6082 AÃ±o de creación de pregunta: 2010-01-01
 questions[47]= "48)  Cu&aacute;l de los siguientes NO es un principio arquitect&oacute;nico b&aacute;sico intr&iacute;nsicamente aplicable a arquitecturas SOA:";
 choices[47]= new Array();
 choices[47][0] = "Encapsulaci&oacute;n";
 choices[47][1] = "D&eacute;bil acoplamiento";
 choices[47][2] = "Composici&oacute;n";
 choices[47][3] = "Polimorfismo";
 answers[47] = choices[47][3];
 units[47] = "51";
 comments[47] = "Id Pregunta: 6082. NULL";


//  Id pregunta: 6224 AÃ±o de creación de pregunta: 2010-01-01
 questions[48]= "49)  &iquest;Cu&aacute;les son las JSRs de las versiones v1 y v2 de la Java Portlet Specification?";
 choices[48]= new Array();
 choices[48][0] = "JSR 186 y JSR 268";
 choices[48][1] = "JSR 618 y JSR 628";
 choices[48][2] = "JSR 681 y JSR 682";
 choices[48][3] = "JSR 168 y JSR 286";
 answers[48] = choices[48][3];
 units[48] = "114";
 comments[48] = "Id Pregunta: 6224. ";


//  Id pregunta: 6455 AÃ±o de creación de pregunta: 2010-01-01
 questions[49]= "50)  Identifique el API de JAVA que facilita el acceso a registros UDDI";
 choices[49]= new Array();
 choices[49][0] = "SAAJ";
 choices[49][1] = "JAXR";
 choices[49][2] = "SOAP";
 choices[49][3] = "StAX";
 answers[49] = choices[49][1];
 units[49] = "116";
 comments[49] = "Id Pregunta: 6455. Castilla La Mancha 2009";


//  Id pregunta: 6519 AÃ±o de creación de pregunta: 2010-01-01
 questions[50]= "51)  NO es un framework de desarrollo en Java";
 choices[50]= new Array();
 choices[50][0] = "JavaServer Faces";
 choices[50][1] = "Spring";
 choices[50][2] = "Ruby on Rails";
 choices[50][3] = "Maverick ";
 answers[50] = choices[50][2];
 units[50] = "116";
 comments[50] = "Id Pregunta: 6519. NULL";


//  Id pregunta: 6520 AÃ±o de creación de pregunta: 2010-01-01
 questions[51]= "52)  La versi&oacute;n 2.0 de JavaServer Faces (JSF) est&aacute; definida en la especificaci&oacute;n:";
 choices[51]= new Array();
 choices[51][0] = "JSR 186";
 choices[51][1] = "JSR 168";
 choices[51][2] = "JSR 175";
 choices[51][3] = "JSR 314";
 answers[51] = choices[51][3];
 units[51] = "116";
 comments[51] = "Id Pregunta: 6520. NULL";


//  Id pregunta: 6521 AÃ±o de creación de pregunta: 2010-01-01
 questions[52]= "53)  JME es la plataforma dirigida al desarrollo de aplicaciones para dispositivos como tel&eacute;fonos m&oacute;viles o PDAs, y es el acr&oacute;nimo de:";
 choices[52]= new Array();
 choices[52][0] = "Java Mobile Edition";
 choices[52][1] = "Java Micro Edition";
 choices[52][2] = "Java Mobility Edition";
 choices[52][3] = "Java Mobile Enterprise";
 answers[52] = choices[52][1];
 units[52] = "116";
 comments[52] = "Id Pregunta: 6521. NULL";


//  Id pregunta: 7316 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)  Cu&aacute;l de las siguientes no es una tecnolog&iacute;a de acceso a datos de Microsoft:";
 choices[53]= new Array();
 choices[53][0] = "ADO.NET";
 choices[53][1] = "OLEDB";
 choices[53][2] = "DEA";
 choices[53][3] = "DAO";
 answers[53] = choices[53][2];
 units[53] = "59";
 comments[53] = "Id Pregunta: 7316. NULL";


//  Id pregunta: 7318 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  Se&ntilde;ala cu&aacute;l de los siguientes lenguajes de programaci&oacute;n no tiene alguna implementaci&oacute;n para el Framework .NET:";
 choices[54]= new Array();
 choices[54][0] = "COBOL";
 choices[54][1] = "Fortran";
 choices[54][2] = "Delphi";
 choices[54][3] = "Todos los lenguajes anteriores tienen alguna implementaci&oacute;n para el Framework .NET";
 answers[54] = choices[54][3];
 units[54] = "59";
 comments[54] = "Id Pregunta: 7318. NULL";


//  Id pregunta: 7776 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)   La palabra clave de Visual Basic.NET &laquo;overrides&raquo; se utiliza para:";
 choices[55]= new Array();
 choices[55][0] = " Heredar todos los miembros no privados de la clase espec&iacute;fica.";
 choices[55][1] = " Especificar qu&eacute; clase no se puede utilizar como clase b&aacute;sica.";
 choices[55][2] = " Indicar que el procedimiento anula un procedimiento de la clase b&aacute;sica.";
 choices[55][3] = " Invocar c&oacute;digo escrito en una clase desde la propia clase.";
 answers[55] = choices[55][2];
 units[55] = "115";
 comments[55] = "Id Pregunta: 7776. Map 2005";


//  Id pregunta: 8167 AÃ±o de creación de pregunta: 2011-01-01
 questions[56]= "57)  Respecto al API, Streaming API for XML (StAX), indicar la afirmaci&oacute;n correcta:";
 choices[56]= new Array();
 choices[56][0] = "Emplea &quot;push parsing&quot;.";
 choices[56][1] = "Permite vistas XML de datos no XML.";
 choices[56][2] = "Es un API unidireccional.";
 choices[56][3] = "El cliente del API no controla el thread de la aplicaci&oacute;n.";
 answers[56] = choices[56][1];
 units[56] = "116";
 comments[56] = "Id Pregunta: 8167. Examen TIC A1 2010";


//  Id pregunta: 8285 AÃ±o de creación de pregunta: 2011-01-01
 questions[57]= "58)  El fichero JAR de una distribuci&oacute;n JAVA , NO contiene:";
 choices[57]= new Array();
 choices[57][0] = "El fichero manifest.mf.";
 choices[57][1] = "Un fichero .class por cada clase compilada.";
 choices[57][2] = "Un fichero .sf por cada fichero firmado de la distribuci&oacute;n.";
 choices[57][3] = "Un fichero .crt con cada certificado digital utilizado para firmar las clases.";
 answers[57] = choices[57][3];
 units[57] = "60";
 comments[57] = "Id Pregunta: 8285. Examen TIC A1 2010";


//  Id pregunta: 8354 AÃ±o de creación de pregunta: 2011-01-01
 questions[58]= "59)  A partir de ASP.NET 2.0, &iquest;en qu&eacute; carpeta se guarda el c&oacute;digo compilado para controles, componentes y otro c&oacute;digo que pueda ser referenciado por la aplicaci&oacute;n (los archivos dll)?";
 choices[58]= new Array();
 choices[58][0] = "App_Data.";
 choices[58][1] = "Bin.";
 choices[58][2] = "App_WebReferences";
 choices[58][3] = "Compilation";
 answers[58] = choices[58][1];
 units[58] = "59,115";
 comments[58] = "Id Pregunta: 8354. Examen TIC A2 2010";


//  Id pregunta: 8355 AÃ±o de creación de pregunta: 2011-01-01
 questions[59]= "60)  La compa&ntilde;&iacute;a que desarroll&oacute; la tecnolog&iacute;a JSP es:";
 choices[59]= new Array();
 choices[59][0] = "Sun Microsystems.";
 choices[59][1] = "Microsoft.";
 choices[59][2] = "Google.";
 choices[59][3] = "IBM.";
 answers[59] = choices[59][0];
 units[59] = "116";
 comments[59] = "Id Pregunta: 8355. Examen TIC A2 2010";


//  Id pregunta: 8418 AÃ±o de creación de pregunta: 2011-01-01
 questions[60]= "61)  Dentro de las arquitecturas orientadas a servicios, &iquest;cu&aacute;l de las siguientes definiciones se ajusta mejor a lo que es un ESB (Enterprise Service Bus)? ";
 choices[60]= new Array();
 choices[60][0] = "Es el encargado de definir y verificar el cumplimiento de los acuerdos de nivel de servicio";
 choices[60][1] = "Es una infraestructura y un sistema de eventos que permiten conectar cualquier recurso de tecnolog&iacute;as de la informaci&oacute;n sin importar la tecnolog&iacute;a que utiliza el recurso";
 choices[60][2] = "Es el repositorio de datos donde est&aacute; almacenada la informaci&oacute;n que quiere ser compartida a trav&eacute;s de los web services";
 choices[60][3] = "Es el registro y repositorio de los web services";
 answers[60] = choices[60][1];
 units[60] = "51";
 comments[60] = "Id Pregunta: 8418. Examen TIC A2 2010";


//  Id pregunta: 8461 AÃ±o de creación de pregunta: 2011-01-01
 questions[61]= "62)  &iquest;Cu&aacute;l de estos NO es un est&aacute;ndar del W3C para Web Services?:";
 choices[61]= new Array();
 choices[61][0] = "UDDI";
 choices[61][1] = "SOAP";
 choices[61][2] = "WSDL";
 choices[61][3] = "XML";
 answers[61] = choices[61][0];
 units[61] = "51";
 comments[61] = "Id Pregunta: 8461. Analista Ayto. Madrid 2010";


//  Id pregunta: 8462 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  Entre los tipos de componentes que incluye la especificaci&oacute;n de aplicaciones basadas en J2EE 1.4 se encuentran:";
 choices[62]= new Array();
 choices[62][0] = "P&aacute;ginas Asp y VBScript";
 choices[62][1] = "Applet, Servlets, EJBs";
 choices[62][2] = "Javascript y p&aacute;ginas JSP";
 choices[62][3] = "Ninguna de las anteriores";
 answers[62] = choices[62][1];
 units[62] = "116";
 comments[62] = "Id Pregunta: 8462. Analista Ayto. Madrid 2010";


//  Id pregunta: 8463 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  &iquest;Qu&eacute; API proporciona un modo para que una aplicaci&oacute;n J2EE autentique y autorice a un usuario especifico o a un grupo de usuarios para su ejecuci&oacute;n?:";
 choices[63]= new Array();
 choices[63][0] = "JNDI";
 choices[63][1] = "JAAS";
 choices[63][2] = "JMS";
 choices[63][3] = "JNI";
 answers[63] = choices[63][1];
 units[63] = "116";
 comments[63] = "Id Pregunta: 8463. Analista Ayto. Madrid 2010";


//  Id pregunta: 8592 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  En J2EE &iquest;qu&eacute; es un fichero WAR?";
 choices[64]= new Array();
 choices[64][0] = "Contiene los recursos y librer&iacute;as necesarias para compilar un proyecto";
 choices[64][1] = "Contiene la aplicaci&oacute;n web lista para ser desplegada en cualquier contenedor de servlets/jsp.";
 choices[64][2] = "Contiene los m&oacute;dulos EJB de las aplicaciones";
 choices[64][3] = "No existen los ficheros WAR en J2EE";
 answers[64] = choices[64][1];
 units[64] = "116";
 comments[64] = "Id Pregunta: 8592. Examen TIC A2 2010 interna";


//  Id pregunta: 8809 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  La clase XPathNavigator de la biblioteca de clases de .NET, &iquest;para qu&eacute; sirve?:";
 choices[65]= new Array();
 choices[65][0] = "Para leer datos de cualquier almac&eacute;n de datos mediante un modelo de cursor";
 choices[65][1] = "Para proporcionar un iterador para un conjunto de nodos seleccionados";
 choices[65][2] = "Para encapsular una expresi&oacute;n XPath compilada";
 choices[65][3] = "Todas las anteriores son falsas";
 answers[65] = choices[65][0];
 units[65] = "59, 115";
 comments[65] = "Id Pregunta: 8809. Examen UPM A2 2011";


//  Id pregunta: 9040 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  &iquest;Cu&aacute;l de los siguientes es un motor para la creaci&oacute;n de servicios Web en Java?";
 choices[66]= new Array();
 choices[66][0] = "Apache Axis2";
 choices[66][1] = "Hibernate";
 choices[66][2] = "Struts";
 choices[66][3] = "TopLink";
 answers[66] = choices[66][0];
 units[66] = "60";
 comments[66] = "Id Pregunta: 9040. NULL";


//  Id pregunta: 9493 AÃ±o de creación de pregunta: 2013-01-01
 questions[67]= "68)  El cliente web:";
 choices[67]= new Array();
 choices[67][0] = "Puede realizar peticiones HTTP al servidor web";
 choices[67][1] = "Dispone de un int&eacute;rprete de scripting";
 choices[67][2] = "Puede tener plugins instalados";
 choices[67][3] = "Todas las anteriores son ciertas";
 answers[67] = choices[67][3];
 units[67] = "114";
 comments[67] = "Id Pregunta: 9493. NULL";


//  Id pregunta: 9497 AÃ±o de creación de pregunta: 2013-01-01
 questions[68]= "69)  Se&ntilde;ale la afimaci&oacute;n falsa con respecto a VBScript:";
 choices[68]= new Array();
 choices[68][0] = "Es una tecnolog&iacute;a abierta";
 choices[68][1] = "Genera ficheros con extensi&oacute;n .vbs";
 choices[68][2] = "Se comunica con las aplicaciones principales mediante ActiveX Scripting";
 choices[68][3] = "Dispone de mayor funcionalidad que JavaScript";
 answers[68] = choices[68][0];
 units[68] = "114";
 comments[68] = "Id Pregunta: 9497. NULL";


//  Id pregunta: 9499 AÃ±o de creación de pregunta: 2013-01-01
 questions[69]= "70)  Indica la afirmaci&oacute;n verdadera con respecto a los applets:";
 choices[69]= new Array();
 choices[69][0] = "Se descargan como documentos HTML y se ejecutan en el cliente";
 choices[69][1] = "El usuario no permite el acceso a los recursos locales por el s&oacute;lo hecho de aceptar un applet";
 choices[69][2] = "Se ejecutan en un componente independiente del navegador";
 choices[69][3] = "Todas las anteriores son ciertas";
 answers[69] = choices[69][3];
 units[69] = "114";
 comments[69] = "Id Pregunta: 9499. NULL";


//  Id pregunta: 9508 AÃ±o de creación de pregunta: 2013-01-01
 questions[70]= "71)  &iquest;En qu&eacute; versi&oacute;n se produjo el cambio de nomenclatura de la plataforma Java, pas&aacute;ndose a denominar Java Platform cuando anteriormente se le denominaba Java 2?";
 choices[70]= new Array();
 choices[70][0] = "Entre la versi&oacute;n 1.1 y 1.2";
 choices[70][1] = "Entre la versi&oacute;n 1.3 y 1.4";
 choices[70][2] = "Entre la versi&oacute;n 1.4 y 5.0";
 choices[70][3] = "La plataforma Java nunca se denomin&oacute; Java 2";
 answers[70] = choices[70][2];
 units[70] = "116";
 comments[70] = "Id Pregunta: 9508. NULL";


//  Id pregunta: 9512 AÃ±o de creación de pregunta: 2013-01-01
 questions[71]= "72)  En relaci&oacute;n a las APIs de Java, indique la afirmaci&oacute;n falsa:";
 choices[71]= new Array();
 choices[71][0] = "JNDI es el API est&aacute;ndar para el acceso a directorios y servicios de nombres";
 choices[71][1] = "JTA permite que los componentes EE gestionen sus propias transacciones";
 choices[71][2] = "Java IDL permite a las aplicaciones Java EE invocar a objetos CORBA";
 choices[71][3] = "JAX-RPC no soporta WSDL";
 answers[71] = choices[71][3];
 units[71] = "116";
 comments[71] = "Id Pregunta: 9512. NULL";


//  Id pregunta: 9513 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  Indique la afirmaci&oacute;n falsa en relaci&oacute;n a los servlets de Java:";
 choices[72]= new Array();
 choices[72][0] = "Se alojan en un contenedor web";
 choices[72][1] = "Es un elemento de la capa de presentaci&oacute;n";
 choices[72][2] = "Se pueden invocar desde una URL";
 choices[72][3] = "S&oacute;lo generan contenido est&aacute;tico";
 answers[72] = choices[72][3];
 units[72] = "116";
 comments[72] = "Id Pregunta: 9513. NULL";


//  Id pregunta: 9515 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l es la estructura est&aacute;ndar de una directiva JSP?";
 choices[73]= new Array();
 choices[73][0] = "&lt;@ directiva atributo1=&quot;valor1&quot; atributo2=&quot;valor2&quot;...&gt;";
 choices[73][1] = "&lt;%@ directiva atributo1=&quot;valor1&quot; atributo2=&quot;valor2&quot;...%&gt;";
 choices[73][2] = "&lt;!@ directiva atributo1=&quot;valor1&quot; atributo2=&quot;valor2&quot;...&gt;";
 choices[73][3] = "&lt;*@ directiva atributo1=&quot;valor1&quot; atributo2=&quot;valor2&quot;...*&gt;";
 answers[73] = choices[73][1];
 units[73] = "116";
 comments[73] = "Id Pregunta: 9515. NULL";


//  Id pregunta: 9520 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  Indique la afirmaci&oacute;n falsa:";
 choices[74]= new Array();
 choices[74][0] = "JAXP es una API de Java que permite el procesado de documentos XML";
 choices[74][1] = "JAXR es una API de Java que facilita el acceso a UDDI o ebXML";
 choices[74][2] = "SAAJ es una API de Java que permite generar y recoger mensajes SOAP";
 choices[74][3] = "JAX-RPC es una API Java que permite invocar objetos ORBA";
 answers[74] = choices[74][3];
 units[74] = "116";
 comments[74] = "Id Pregunta: 9520. NULL";


//  Id pregunta: 9709 AÃ±o de creación de pregunta: 2014-01-01
 questions[75]= "76)  La programaci&oacute;n funcional limita el uso de";
 choices[75]= new Array();
 choices[75][0] = "estados mutables.";
 choices[75][1] = "expresiones lambda.";
 choices[75][2] = "procedimientos como par&aacute;metros.";
 choices[75][3] = "lenguajes como Erlang, F# o Scala.";
 answers[75] = choices[75][0];
 units[75] = "60";
 comments[75] = "Id Pregunta: 9709. Examen TIC-A1 2013";


//  Id pregunta: 9742 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  Con respecto al Entity Framework &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[76]= new Array();
 choices[76][0] = "Para usar Entity framework se requiere una versi&oacute;n del framework de .Net de 2.0, o superior.";
 choices[76][1] = "Entity framework es la implementaci&oacute;n del Modelo Vista Controlador (MVC) en .NET.";
 choices[76][2] = "El contexto en el Entity Framework es el punto de arranque dentro del espacio de nombres.";
 choices[76][3] = "Entity es una clase u objeto que representa los datos de la aplicaci&oacute;n.";
 answers[76] = choices[76][3];
 units[76] = "59";
 comments[76] = "Id Pregunta: 9742. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9944 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  Se&ntilde;ale la respuesta correcta. En la programaci&oacute;n orientada a objetos en Java, s&iacute; una clase hereda de otra clase un m&eacute;todo abstracto:";
 choices[77]= new Array();
 choices[77][0] = "Tiene que implementar ese m&eacute;todo, si no es as&iacute;,la clase que hereda deber&aacute; ser definida abstracta. ";
 choices[77][1] = "Puede usar el m&eacute;todo de la clase de la que ha heredado.";
 choices[77][2] = "Puede usar el m&eacute;todo de la clase de la que ha heredado siempre que est&eacute; declarado como public. ";
 choices[77][3] = "No se puede heredar de una clase que tenga alg&uacute;n m&eacute;todo abstracto. ";
 answers[77] = choices[77][0];
 units[77] = "82, 60";
 comments[77] = "Id Pregunta: 9944. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 9964 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  En la plataforma .NET, &iquest;cu&aacute;l es el est&aacute;ndar que define como se declaran, usan y administran los tipos de datos en el Common Language Runtime (CLR) y que es una parte importante para que m&uacute;ltiples lenguajes sean soportados?";
 choices[78]= new Array();
 choices[78][0] = "System Data Type (SDT)";
 choices[78][1] = "Common Type System (CTS)";
 choices[78][2] = "Common Data Integration (CDI)";
 choices[78][3] = "Data Type Core (DTC)";
 answers[78] = choices[78][1];
 units[78] = "59,115";
 comments[78] = "Id Pregunta: 9964. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";


//  Id pregunta: 9975 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  En una arquitectura web en .NET, indique cu&aacute;l es la opci&oacute;n correcta que define una Biblioteca de Clases Base (BCB):";
 choices[79]= new Array();
 choices[79][0] = "La Biblioteca de Clases Base es una API de alto nivel para permitir acceder a los servicios que ofrece el CLR (Common Language Runtime) a trav&eacute;s de objetos en una jerarqu&iacute;a denominada espacio de nombres.";
 choices[79][1] = "La Biblioteca de Clases Base es una API de bajo nivel para permitir acceder a los datos que ofrece el ASP.NET a trav&eacute;s de objetos en una jerarqu&iacute;a denominada espacio de nombres";
 choices[79][2] = "La Biblioteca de Clases Base es un conjunto de librer&iacute;as que permiten realizar las operaciones de acceso a datos.";
 choices[79][3] = "La Biblioteca de Clases Base es un conjunto de clases, interfaces y tipos valor que son la base para la compilaci&oacute;n del c&oacute;digo fuente a un c&oacute;digo intermedio denominado CIL (Common Intermediate Language).";
 answers[79] = choices[79][0];
 units[79] = "115";
 comments[79] = "Id Pregunta: 9975. Examen TICA1, Xunta de GaliciA, 2011";


//  Id pregunta: 9981 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  &iquest;Con qu&eacute; siglas se identifica el Common Language Runtime de la plataforma .NET?";
 choices[80]= new Array();
 choices[80][0] = "CLRUN";
 choices[80][1] = "CLRNET";
 choices[80][2] = "COLR";
 choices[80][3] = "CLR";
 answers[80] = choices[80][3];
 units[80] = "59,115";
 comments[80] = "Id Pregunta: 9981. TIC A2, UPM, Examen 2010";


//  Id pregunta: 9983 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  No es cierto sobre la tecnolog&iacute;a de p&aacute;ginas web de Microsoft (ASP y ASP.Net):";
 choices[81]= new Array();
 choices[81][0] = "Una p&aacute;gina ASP puede escribirse con Java Script";
 choices[81][1] = "ASP se ejecuta del lado del servidor bajo IIS o motores PHT compatibles con ASP";
 choices[81][2] = "ASP.NET es una tecnolog&iacute;a orientada o objetos que se ejecuta del lado del servidor";
 choices[81][3] = "Una p&aacute;gina ASP puede escribirse con Visual Basic Script";
 answers[81] = choices[81][1];
 units[81] = "59,115";
 comments[81] = "Id Pregunta: 9983. Examen T&eacute;cnico especialista inform&aacute;tica, Servicio Salud C&aacute;ntabro, 2011";


//  Id pregunta: 10005 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  Microsoft ActiveX Data Objects de la plataforma .NET";
 choices[82]= new Array();
 choices[82][0] = "permite trabajar desconectado del origen de datos.";
 choices[82][1] = "no se integra con XML.";
 choices[82][2] = "es el precursor de RDO ( Remote Data Objects).";
 choices[82][3] = "utiliza una forma secuencial de navegaci&oacute;n para acceder a las filas de una tabla.";
 answers[82] = choices[82][0];
 units[82] = "59, 114";
 comments[82] = "Id Pregunta: 10005. ";


//  Id pregunta: 10235 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  Qu&eacute; m&eacute;todos se utilizan para obtener el valor de la cabecera de una petici&oacute;n HTTP:";
 choices[83]= new Array();
 choices[83][0] = "getHeaderValues() of HttpServletRequest";
 choices[83][1] = "getHeaderValue() of ServletRequest";
 choices[83][2] = "getHeader() of HttpServletRequest";
 choices[83][3] = "getHeader() of ServletRequest";
 answers[83] = choices[83][2];
 units[83] = "116";
 comments[83] = "Id Pregunta: 10235. NULL";


//  Id pregunta: 10323 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  No es una ventaja de la capa de aplicaci&oacute;n";
 choices[84]= new Array();
 choices[84][0] = "Compartici&oacute;n de objetos";
 choices[84][1] = "Independencia de la arquitectura de almacenamiento";
 choices[84][2] = "Redistribuci&oacute;n autom&aacute;tica de versiones firmadas";
 choices[84][3] = "Escalabilidad horizontal";
 answers[84] = choices[84][2];
 units[84] = "114";
 comments[84] = "Id Pregunta: 10323. ";


//  Id pregunta: 10461 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Respecto a REST (Represantional State Transfer) indique la respuesta incorrecta:";
 choices[85]= new Array();
 choices[85][0] = "Es un est&aacute;ndar para desarrollar y proporcionar servicios en internet.";
 choices[85][1] = "La identificaci&oacute;n de recursos se realiza de forma &uacute;nica global mediante URIs (Uniform Resource Identifiers).";
 choices[85][2] = "Los recursos identificados con URIs son los objeto l&oacute;gicos a los que se mandan los mensajes.";
 choices[85][3] = "Emplea un protocolo cliente/servidor sin estado.";
 answers[85] = choices[85][0];
 units[85] = "51";
 comments[85] = "Id Pregunta: 10461. ";


//  Id pregunta: 10866 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  Se&ntilde;ale la respuesta FALSA acerca de la tecnolog&iacute;a Java Web Start:";
 choices[86]= new Array();
 choices[86][0] = "El software de Java Web Start permite descargar y ejecutar aplicaciones Java desde la Web.";
 choices[86][1] = "Garantiza que se est&aacute; ejecutando la &uacute;ltima versi&oacute;n de la aplicaci&oacute;n.";
 choices[86][2] = "Incluido en el JDK desde la versi&oacute;n 6, permitiendo instalar aplicaciones a trav&eacute;s de URLs con JMLP (Java Main Launch Protocol).";
 choices[86][3] = "Permite desplegar f&aacute;cilmente aplicaciones standalone de escritorio.";
 answers[86] = choices[86][2];
 units[86] = "60, 116";
 comments[86] = "Id Pregunta: 10866. Examen GSI 2014";


//  Id pregunta: 10963 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  &iquest;Qu&eacute; es WCF (Windows Communication Foundation)?";
 choices[87]= new Array();
 choices[87][0] = "Es un est&aacute;ndar establecido por el IEEE para la definici&oacute;n de servicios electr&oacute;nicos de acceso a datos.";
 choices[87][1] = "Es una librer&iacute;a que permite la generaci&oacute;n de servicios web para aplicaci&oacute;n desarrolladas en .NET.";
 choices[87][2] = "Es una fundaci&oacute;n sin &aacute;nimo de lucro que gestiona los recursos comunes y propuestas de mejora de las aplicaciones de escritorio.";
 choices[87][3] = "Es el evento bianual en que se dictamina la pol&iacute;tica a seguir en el &aacute;mbito de las aplicaciones de escritorio.";
 answers[87] = choices[87][1];
 units[87] = "115";
 comments[87] = "Id Pregunta: 10963. TIC A1 AGE 2014";


//  Id pregunta: 10987 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  Al desarrollar una aplicaci&oacute;n para Android, respecto al fichero AndroidManifest.xml se&ntilde;ale la respuesta correcta:";
 choices[88]= new Array();
 choices[88][0] = "Debe renombrarse en el momento de la publicaci&oacute;n de la aplicaci&oacute;n en Google Play, con un identificador &uacute;nico.";
 choices[88][1] = "Declara los permisos que debe tener la aplicaci&oacute;n para acceder a las partes protegidas del API.";
 choices[88][2] = "Debe posicionarse en el directorio \etc\manifest.";
 choices[88][3] = "Establece las condiciones legales que el usuario debe aceptar para poder acceder a la aplicaci&oacute;n.";
 answers[88] = choices[88][1];
 units[88] = "60";
 comments[88] = "Id Pregunta: 10987. TIC A1 AGE 2014";


//  Id pregunta: 11043 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  &iquest;En qu&eacute; patr&oacute;n de dise&ntilde;o est&aacute; basada la arquitectura de Swing?";
 choices[89]= new Array();
 choices[89][0] = "Modelo-Vista-Controlador (MVC)";
 choices[89][1] = "Singleton";
 choices[89][2] = "Observer";
 choices[89][3] = "Facade";
 answers[89] = choices[89][0];
 units[89] = "60";
 comments[89] = "Id Pregunta: 11043. ";


//  Id pregunta: 11214 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  Respecto a los componentes de Java Platform SE cual de las siguientes afirmaciones es falsa:";
 choices[90]= new Array();
 choices[90][0] = "El JDK contiene todos los niveles, incluyendo JRE y adem&aacute;s herramientas como compiladores y depuradores de errores (debuggers).";
 choices[90][1] = "JRE no incluye la JVM.";
 choices[90][2] = "Las Java SE APIs est&aacute;n basadas en especificaciones JSR (Java Specification Request) las cuales son aprobadas dentro del Java CommunityProcess (JCP).";
 choices[90][3] = "La JVM es propiedad de Oracle.";
 answers[90] = choices[90][1];
 units[90] = "60";
 comments[90] = "Id Pregunta: 11214. ";


//  Id pregunta: 11217 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  En relaci&oacute;n con las interfaces de programaci&oacute;n para crear GUI en Java:";
 choices[91]= new Array();
 choices[91][0] = "La&nbsp;Java Foundation Classes&nbsp;(JFC) es un framework gr&aacute;fico para construir interfaces gr&aacute;ficas de usuario (GUIs)  basadas en&nbsp;Java y est&aacute; compuesto por AWT,Swing&nbsp;y&nbsp;Java 2D.";
 choices[91][1] = "Aunque Swing est&aacute; basado en AWT, se trata de una implementaci&oacute;n de controles gr&aacute;ficos en Java puro.";
 choices[91][2] = "JavaFX, aunque est&aacute; incluido en el JDK/JRE, no est&aacute; basado en ninguna especificaci&oacute;n est&aacute;ndar JSR sino que es un producto de Oracle.";
 choices[91][3] = "Todas las respuestas son verdaderas.";
 answers[91] = choices[91][3];
 units[91] = "60";
 comments[91] = "Id Pregunta: 11217. ";


//  Id pregunta: 11222 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  La tecnolog&iacute;a LINQ en el Framework .NET:";
 choices[92]= new Array();
 choices[92][0] = "Es el acr&oacute;nimo&nbsp;de Language Integrated Query.";
 choices[92][1] = "Permite realizar consultas a distintas fuentes de datos.";
 choices[92][2] = "No es compatible con ADO.NET Entity Framework.";
 choices[92][3] = "A) y B) son correctas.";
 answers[92] = choices[92][0];
 units[92] = "59";
 comments[92] = "Id Pregunta: 11222. ";


//  Id pregunta: 11223 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  En el Framework de .NET, los servicios web:";
 choices[93]= new Array();
 choices[93][0] = "Se definen en ficheros de extensi&oacute;n .asmx incluyendo la directiva WebService.";
 choices[93][1] = "ASP.NET no se puede integrar f&aacute;cilmente con tecnolog&iacute;as como AJAX para construir aplicaciones RIA.";
 choices[93][2] = "Los servicios Web WCF pueden ser SOAP o REST, aunque no soportan un formato no XML como JSON.";
 choices[93][3] = "Los servicios WCF (Windows Communication Foundation) siempre se ejecutan directamente sobre TCP.";
 answers[93] = choices[93][0];
 units[93] = "59";
 comments[93] = "Id Pregunta: 11223. ";


//  Id pregunta: 11225 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  En que capa del patr&oacute;n MVC es com&uacute;n el uso del patr&oacute;n DAO";
 choices[94]= new Array();
 choices[94][0] = "En el modelo.";
 choices[94][1] = "En el vista.";
 choices[94][2] = "En el controlador.";
 choices[94][3] = "No se usan simult&aacute;neamente.";
 answers[94] = choices[94][2];
 units[94] = "116";
 comments[94] = "Id Pregunta: 11225. ";


//  Id pregunta: 11232 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  SAAJ son las siglas de un API de Java que significa";
 choices[95]= new Array();
 choices[95][0] = "Service with Attachments API for Java.";
 choices[95][1] = "SOAP without Attachments API for Java.";
 choices[95][2] = "SOAP with Attachments API for Java.";
 choices[95][3] = "El acr&oacute;nimo est&aacute; invertido, realmente es Java Authentication and Authorization Service (JAAS).";
 answers[95] = choices[95][2];
 units[95] = "116";
 comments[95] = "Id Pregunta: 11232. ";


//  Id pregunta: 11322 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Las directivas JSP nos permiten configurar alguna informaci&oacute;n que pueda ser usada en nuestra p&aacute;gina JSP. Cu&aacute;l de las siguientes no es una directiva jsp";
 choices[96]= new Array();
 choices[96][0] = "DocRel";
 choices[96][1] = "Page";
 choices[96][2] = "Include";
 choices[96][3] = "Taglib";
 answers[96] = choices[96][0];
 units[96] = "115";
 comments[96] = "Id Pregunta: 11322. ";


//  Id pregunta: 11532 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  En .NET, la biblioteca de clases ";
 choices[97]= new Array();
 choices[97][0] = "S&oacute;lo implementa funciones para la capa de l&oacute;gica de negocio.";
 choices[97][1] = "S&oacute;lo implementa funciones para la capa de l&oacute;gica de negocio y acceso a datos.";
 choices[97][2] = "Es &uacute;nica para todos los lenguajes de la plataforma.";
 choices[97][3] = "Todas las anteriores son falsas.";
 answers[97] = choices[97][2];
 units[97] = "59";
 comments[97] = "Id Pregunta: 11532. NULL";


//  Id pregunta: 11668 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  POCO son las siglas de:";
 choices[98]= new Array();
 choices[98][0] = "Plain Old CLR Object";
 choices[98][1] = "Plain Old Class Object";
 choices[98][2] = "Plain Old COM Object";
 choices[98][3] = "Plain Old Connection Object";
 answers[98] = choices[98][0];
 units[98] = "115";
 comments[98] = "Id Pregunta: 11668. ";


//  Id pregunta: 11671 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Las gu&iacute;as de mejores pr&aacute;ticas de Java se denominan:";
 choices[99]= new Array();
 choices[99][0] = "Hibernate";
 choices[99][1] = "Spring";
 choices[99][2] = "BluePrints";
 choices[99][3] = "Struts";
 answers[99] = choices[99][2];
 units[99] = "116";
 comments[99] = "Id Pregunta: 11671. ";


