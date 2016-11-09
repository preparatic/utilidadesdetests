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

//  Id pregunta: 744 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  Las aplicaciones Java son comprobadas:";
 choices[0]= new Array();
 choices[0][0] = "en tiempo de compilaci&oacute;n";
 choices[0][1] = "en tiempo de ejecuci&oacute;n";
 choices[0][2] = "en tiempo de compilaci&oacute;n y en tiempo de ejecuci&oacute;n";
 choices[0][3] = "en tiempo de compilaci&oacute;n siempre y en tiempo de ejecuci&oacute;n s&oacute;lo si se trata de un programa que no requiera ejecuci&oacute;n en tiempo real";
 answers[0] = choices[0][2];
 units[0] = "60";
 comments[0] = "Id Pregunta: 744. Similar a examen TIC SS A 2003";


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


//  Id pregunta: 924 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;Qu&eacute; es JDBC?:";
 choices[2]= new Array();
 choices[2][0] = "Un est&aacute;ndar que permite la definici&oacute;n de procedimientos escritos en Java para el establecimiento de una conexi&oacute;n a la base de datos v&iacute;a  ODBC";
 choices[2][1] = "Una API, que implementan los drivers de conexi&oacute;n a base de datos, y que permite el acceso a &eacute;stas &uacute;ltimas desde aplicaciones Java.";
 choices[2][2] = "Un driver que permite la conexi&oacute;n entre los distintos niveles de la arquitectura Internet";
 choices[2][3] = "El est&aacute;ndar de ODBC para base de datos relacionales";
 answers[2] = choices[2][1];
 units[2] = "60";
 comments[2] = "Id Pregunta: 924. NULL";


//  Id pregunta: 1003 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  El CLR de Microsoft.net es:";
 choices[3]= new Array();
 choices[3][0] = "Una librer&iacute;a para acceso a base de datos heterogeneas, empleando ADO.NET";
 choices[3][1] = "El encargado de compilar a un CIL (Common Intermediate Language)";
 choices[3][2] = "Una nueva estrategia de Microsoft, que defiende &quot;cero fallos&quot; en sus pr&oacute;ximos desarrollos software";
 choices[3][3] = "El mecanismo que se utiliza para enviar las peticiones SOAP a los servidores de aplicaciones remotos";
 answers[3] = choices[3][1];
 units[3] = "59";
 comments[3] = "Id Pregunta: 1003. ";


//  Id pregunta: 1100 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  En Java, al mecanismo que permite agrupar un conjunto de clases relacionadas se le denomina";
 choices[4]= new Array();
 choices[4][0] = "Superset o superconjunto";
 choices[4][1] = "Package o paquete";
 choices[4][2] = "Superclass o Superclase";
 choices[4][3] = "Colection o Colecci&oacute;n";
 answers[4] = choices[4][1];
 units[4] = "60";
 comments[4] = "Id Pregunta: 1100. JCED - Preparatic XVII";


//  Id pregunta: 1102 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  En Java:";
 choices[5]= new Array();
 choices[5][0] = "Los programas son applets, que se ejecutan en un navegador";
 choices[5][1] = "Los programas son de l&iacute;nea de comandos o basados en entornos de ventanas, como AWT o Swing";
 choices[5][2] = "Los programas son aplicaciones web de servidor";
 choices[5][3] = "Todas las anteriores respuestas son ciertas";
 answers[5] = choices[5][3];
 units[5] = "60";
 comments[5] = "Id Pregunta: 1102. NULL";


//  Id pregunta: 1197 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Java ME es:";
 choices[6]= new Array();
 choices[6][0] = "Una versi&oacute;n de Java que permite explotar las capacidades multimedia de los nuevos procesadores";
 choices[6][1] = "Una versi&oacute;n reducida de Java dise&ntilde;ada para ser ejecutada en dispositivos m&oacute;viles o embebidos.";
 choices[6][2] = "Una versi&oacute;n de Java que permite varias ejecuciones simult&aacute;neas y multiplexadas de un programa para ejecuci&oacute;n en procesadores en paralelo";
 choices[6][3] = "Una versi&oacute;n de Java optimizada para Macintosh";
 answers[6] = choices[6][1];
 units[6] = "60";
 comments[6] = "Id Pregunta: 1197. NULL";


//  Id pregunta: 1199 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  Java es un lenguaje de programaci&oacute;n que surgi&oacute; tras realizar pruebas fallidas para dise&ntilde;ar un sistema de programaci&oacute;n de electrodom&eacute;sticos. &iquest;Qu&eacute; empresa cre&oacute; este lenguaje?:";
 choices[7]= new Array();
 choices[7][0] = "Siemens";
 choices[7][1] = "Sun Microsystems";
 choices[7][2] = "General Electric";
 choices[7][3] = "IBM";
 answers[7] = choices[7][1];
 units[7] = "60";
 comments[7] = "Id Pregunta: 1199. NULL";


//  Id pregunta: 1413 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Una de las posibilidades clave de la estrategia .NET de Microsoft es el acceso remoto a objetos utilizando, entre otros protocolos, SOAP sobre HTTP. &iquest;Podr&iacute;a comentar qu&eacute; tecnolog&iacute;a de Microsoft, si bien no sobre HTTP, es la antecesora a .Net en este aspecto?:";
 choices[8]= new Array();
 choices[8][0] = "ODBC";
 choices[8][1] = "Visual Basic";
 choices[8][2] = "DCOM";
 choices[8][3] = "DNA";
 answers[8] = choices[8][2];
 units[8] = "59";
 comments[8] = "Id Pregunta: 1413. ";


//  Id pregunta: 1472 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  MPEG es:";
 choices[9]= new Array();
 choices[9][0] = "Mobile Photographs Evolution using GPRS, tecnolog&iacute;a para transmitir fotograf&iacute;as usando un m&oacute;vil GPRS";
 choices[9][1] = "Mobile Protocols Expert Group, grupo de trabajo de ISO experto en la aplicaci&oacute;n de distintos protocolos a la tecnolog&iacute;a inal&aacute;mbrica m&oacute;vil";
 choices[9][2] = "Multimedia Protocols for Evolution of GSM: conjunto de protocolos desarrollados para dispositivos m&oacute;viles que potencian las capacidades multimedia contempladas en la actual GSM";
 choices[9][3] = "Moving Pictures Expert Group, grupo de trabajo de ISO cuya misi&oacute;n es desarrollar est&aacute;ndares de compresi&oacute;n para audio y video";
 answers[9] = choices[9][3];
 units[9] = "114";
 comments[9] = "Id Pregunta: 1472. ";


//  Id pregunta: 1485 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa cuando hablamos del Modelo de Componentes Distribuidos (DCOM)?:";
 choices[10]= new Array();
 choices[10][0] = "DCOM especifica interfaces entre objetos de componentes dentro de una sola aplicaci&oacute;n o entre aplicaciones";
 choices[10][1] = "Dispone de API para el descubrimiento din&aacute;mico de los interfaces que exporta un objeto";
 choices[10][2] = "El modelo de objetos soporta la herencia m&uacute;ltiple, al igual que CORBA";
 choices[10][3] = "Un componente DCOM es capaz de soportar interfaces m&uacute;ltiples";
 answers[10] = choices[10][2];
 units[10] = "59";
 comments[10] = "Id Pregunta: 1485. JCED - Preparatic XVII";


//  Id pregunta: 1490 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  El creador de JAVA es:";
 choices[11]= new Array();
 choices[11][0] = "Microsoft";
 choices[11][1] = "IBM";
 choices[11][2] = "SUN Microsystems";
 choices[11][3] = "CERN";
 answers[11] = choices[11][2];
 units[11] = "116";
 comments[11] = "Id Pregunta: 1490. ";


//  Id pregunta: 1678 AÃ±o de creación de pregunta: 2004-01-01
 questions[12]= "13)  Indique la afirmaci&oacute;n verdadera respecta a ADO.NET";
 choices[12]= new Array();
 choices[12][0] = "Utiliza el objeto DATASET, estructura relacional que puede ser le&iacute;da, escrita y serializada usando XML";
 choices[12][1] = "Potencia el acceso a datos desconectados usando XML";
 choices[12][2] = "El DATASET de ADO.NET accede a los datos con independencia de la fuente de datos que lo aprovisiona";
 choices[12][3] = "Todas son ciertas";
 answers[12] = choices[12][3];
 units[12] = "59";
 comments[12] = "Id Pregunta: 1678. ";


//  Id pregunta: 1680 AÃ±o de creación de pregunta: 2004-01-01
 questions[13]= "14)  &iquest;Qu&eacute; es un JNI?";
 choices[13]= new Array();
 choices[13][0] = "Es una interfaz que permite el acceso a bases de datos desde programas java";
 choices[13][1] = "Es una interfaz de programaci&oacute;n para gestionar entornos de ventanas en java";
 choices[13][2] = "Es una interfaz de programaci&oacute;n que facilita el acceso, generaci&oacute;n y desarrollo de componentes o programas para acceder a ficheros XML";
 choices[13][3] = "Es una interfaz est&aacute;ndar de programaci&oacute;n para llamar a m&eacute;todos nativos escritos en otros lenguajes, desde un programa java";
 answers[13] = choices[13][3];
 units[13] = "60";
 comments[13] = "Id Pregunta: 1680. NULL";


//  Id pregunta: 1759 AÃ±o de creación de pregunta: 2006-01-01
 questions[14]= "15)  En el entorno Microsoft.NET:";
 choices[14]= new Array();
 choices[14][0] = "MS SQL Server CompactEs una base datos empotrada, adaptada a aplicaciones m&oacute;viles u ocasionalmente conectadas.";
 choices[14][1] = "MS Web Deploy 3.0Es una herramienta para despliegue, gesti&oacute;n y migraci&oacute;on de aplicaciones complejas distribuidas compuestas por m&uacute;ltiples sitios, servidores o aplicaciones web.";
 choices[14][2] = "BizTalk ServerEs un ESB que permite la automatizacion de procesos de negocio, comunicando diferentes sistemas mediante mensajes en XML.";
 choices[14][3] = "Todas son correctas";
 answers[14] = choices[14][3];
 units[14] = "59";
 comments[14] = "Id Pregunta: 1759. ";


//  Id pregunta: 1763 AÃ±o de creación de pregunta: 2006-01-01
 questions[15]= "16)  El AWT de Java es";
 choices[15]= new Array();
 choices[15][0] = "Una interfaz gr&aacute;fica de usuario (GUI) plenamente independiente del SO";
 choices[15][1] = "Driver para conectarse a una base de datos";
 choices[15][2] = "Interfaz gr&aacute;fica pesada y dependiente del SO";
 choices[15][3] = "Paquete de desarrollo Java";
 answers[15] = choices[15][2];
 units[15] = "60";
 comments[15] = "Id Pregunta: 1763. NULL";


//  Id pregunta: 1766 AÃ±o de creación de pregunta: 2006-01-01
 questions[16]= "17)  El lenguaje Java, para las variables de clase, utiliza el modificador";
 choices[16]= new Array();
 choices[16][0] = "extern";
 choices[16][1] = "private";
 choices[16][2] = "final";
 choices[16][3] = "static";
 answers[16] = choices[16][3];
 units[16] = "60";
 comments[16] = "Id Pregunta: 1766. JCED - Preparatic XVII. Variables de clase es otra manera de llamar a las var est&aacute;ticas";


//  Id pregunta: 1768 AÃ±o de creación de pregunta: 2006-01-01
 questions[17]= "18)  Respecto al empaquetado de aplicaciones en JAVA ";
 choices[17]= new Array();
 choices[17][0] = "utiliza el algoritmo de compresi&oacute;n LZW";
 choices[17][1] = "Para facilitar el control y orden de todos estos ficheros es para lo que se han definido los ficheros JAR";
 choices[17][2] = "Un fichero JAR  puede incluir un subdirectorio de metainformaci&oacute;n llamado META-INF";
 choices[17][3] = "Todas son correctas";
 answers[17] = choices[17][3];
 units[17] = "60";
 comments[17] = "Id Pregunta: 1768. NULL";


//  Id pregunta: 1936 AÃ±o de creación de pregunta: 2006-01-01
 questions[18]= "19)  En JDBC &iquest;qu&eacute; tipo de driver no permite trabajar con applets?";
 choices[18]= new Array();
 choices[18][0] = "Driver Tipo 1";
 choices[18][1] = "Driver Tipo 2";
 choices[18][2] = "Driver Tipo 3";
 choices[18][3] = "Driver Tipo 4";
 answers[18] = choices[18][0];
 units[18] = "60";
 comments[18] = "Id Pregunta: 1936. NULL";


//  Id pregunta: 2968 AÃ±o de creación de pregunta: 2004-01-01
 questions[19]= "20)  El componente de servidor J2EE de uso m&aacute;s apropiado para mantener una conversaci&oacute;n con un cliente es un EJB del tipo ...";
 choices[19]= new Array();
 choices[19][0] = "Stateless Session Bean";
 choices[19][1] = "Message Driven Bean";
 choices[19][2] = "Entity Bean con persistencia BMP";
 choices[19][3] = "Stateful Session Bean";
 answers[19] = choices[19][3];
 units[19] = "116";
 comments[19] = "Id Pregunta: 2968. ";


//  Id pregunta: 3058 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Dentro del objeto ASP Server el m&eacute;todo que detiene la ejecuci&oacute;n de la p&aacute;gina actual y transfiere el control a la p&aacute;gina indicada en &ldquo;url&rdquo;, llevando el entorno del usuario actual a la nueva p&aacute;gina se denomina:";
 choices[20]= new Array();
 choices[20][0] = "Transfer (&ldquo;url&rdquo;)";
 choices[20][1] = "Execute (&ldquo;url&rdquo;)";
 choices[20][2] = "GotoURL (&ldquo;url&rdquo;)";
 choices[20][3] = "GoURL (&ldquo;url&rdquo;)";
 answers[20] = choices[20][1];
 units[20] = "115";
 comments[20] = "Id Pregunta: 3058. ";


//  Id pregunta: 3082 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  Los objetos que intervienen en la capa de aplicaci&oacute;n se denominan:";
 choices[21]= new Array();
 choices[21][0] = "Objetos de aplicaci&oacute;n";
 choices[21][1] = "Objetos de negocio";
 choices[21][2] = "Objetos distribuidos";
 choices[21][3] = "Objetos de servidor";
 answers[21] = choices[21][1];
 units[21] = "114,115,116";
 comments[21] = "Id Pregunta: 3082. ";


//  Id pregunta: 3656 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Un applet de Java es:";
 choices[22]= new Array();
 choices[22][0] = "Un int&eacute;rprete del lenguaje Java";
 choices[22][1] = "Una rutina Java que se ejecuta en el servidor recibiendo datos del browser o navegador";
 choices[22][2] = "Un programa Java, generalmente referenciado en una p&aacute;gina HTML, que se ejecuta en el cliente";
 choices[22][3] = "Un programa Java que accede a una base de datos relacional";
 answers[22] = choices[22][2];
 units[22] = "60";
 comments[22] = "Id Pregunta: 3656. NULL";


//  Id pregunta: 3784 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Respecto a J2ME y Symbian:";
 choices[23]= new Array();
 choices[23][0] = "Symbian soporta J2ME, y J2ME soporta Symbian";
 choices[23][1] = "Symbian soporta J2ME, y J2ME no soporta Symbian";
 choices[23][2] = "Symbian no soporta J2ME, y J2ME soporta Symbian";
 choices[23][3] = "Symbian no soporta J2ME, y J2ME no soporta Symbian";
 answers[23] = choices[23][1];
 units[23] = "60";
 comments[23] = "Id Pregunta: 3784. J2ME no es multiplataforma.";


//  Id pregunta: 3965 AÃ±o de creación de pregunta: 2003-01-01
 questions[24]= "25)  Respecto a SDH &iquest;cual de las siguientes opciones es falsa?";
 choices[24]= new Array();
 choices[24][0] = "Est&aacute; internacionalmente extendido";
 choices[24][1] = "Posee capacidad poderosa de administraci&oacute;n";
 choices[24][2] = "Brinda m&aacute;s ancho de banda que PDH";
 choices[24][3] = "Es un est&aacute;ndar norteamericano";
 answers[24] = choices[24][3];
 units[24] = "116";
 comments[24] = "Id Pregunta: 3965. Pregunta similar a la del ex&aacute;men de SS del 2003 salvo en las opciones";


//  Id pregunta: 3966 AÃ±o de creación de pregunta: 2003-01-01
 questions[25]= "26)  Respecto de Java y JavaScript se puede decir";
 choices[25]= new Array();
 choices[25][0] = "Los dos son lenguajes interpretados";
 choices[25][1] = "Java es compilado en tiempo de ejecuci&oacute;n y JavaScript interpretado                                                           ";
 choices[25][2] = "JavaScript es compilado en tiempo de ejecuci&oacute;n y Java interpretado";
 choices[25][3] = "Ambos son compilados";
 answers[25] = choices[25][1];
 units[25] = "114";
 comments[25] = "Id Pregunta: 3966. ";


//  Id pregunta: 4079 AÃ±o de creación de pregunta: 2006-01-01
 questions[26]= "27)  &iquest;Cu&aacute;l de los siguientes puede ser una alternativa a EJB?";
 choices[26]= new Array();
 choices[26][0] = "Hibernate";
 choices[26][1] = "JDBC";
 choices[26][2] = "Ninguna de las anteriores";
 choices[26][3] = "la opci&oacute;n a) y b)";
 answers[26] = choices[26][3];
 units[26] = "116";
 comments[26] = "Id Pregunta: 4079. ";


//  Id pregunta: 4087 AÃ±o de creación de pregunta: 2006-01-01
 questions[27]= "28)  Cual es el equivalente en .Net de los JSP de J2EE";
 choices[27]= new Array();
 choices[27][0] = "ASP.Net";
 choices[27][1] = "ASP.com";
 choices[27][2] = "ASP.org";
 choices[27][3] = "Ninguna de las anteriores";
 answers[27] = choices[27][0];
 units[27] = "115";
 comments[27] = "Id Pregunta: 4087. ";


//  Id pregunta: 4089 AÃ±o de creación de pregunta: 2006-01-01
 questions[28]= "29)  Cuando hablamos de tecnolog&iacute;a .NET, los interfaces de servicios";
 choices[28]= new Array();
 choices[28][0] = "Se denominan tambi&eacute;n fachadas empresariales";
 choices[28][1] = "permiten exponer el acceso a los datos como un servicio";
 choices[28][2] = "Interaccionan directamente con el usuario";
 choices[28][3] = "Ninguna de las anteriores es correcta";
 answers[28] = choices[28][0];
 units[28] = "115";
 comments[28] = "Id Pregunta: 4089. ";


//  Id pregunta: 4100 AÃ±o de creación de pregunta: 2006-01-01
 questions[29]= "30)  A la hora de empaquetar aplicaciones J2EE utilizaremos";
 choices[29]= new Array();
 choices[29][0] = ".jar";
 choices[29][1] = ".jar y .war dependiendo del contenido y recursos que utilicemos";
 choices[29][2] = "b) es correcta y adem&aacute;s .ear, aunque fundamentalmente se restringe para los EJBs";
 choices[29][3] = "El empaquetamiento no se determina en J2EE";
 answers[29] = choices[29][2];
 units[29] = "116";
 comments[29] = "Id Pregunta: 4100. ";


//  Id pregunta: 4211 AÃ±o de creación de pregunta: 2006-01-01
 questions[30]= "31)  Indique cu&aacute;l de las siguientes afirmaciones es cierta referida a la arquitectura de desarrollo  .NET";
 choices[30]= new Array();
 choices[30][0] = "Biz Talk Server no resulta adecuado si el proceso implica m&uacute;ltiples documentos y servicios";
 choices[30][1] = "En el dise&ntilde;o de la capa de datos se puede disponer de uno o m&aacute;s or&iacute;genes de datos de tipos diferentes";
 choices[30][2] = "Se facilita el mantenimiento de la aplicaci&oacute;n si los componentes l&oacute;gicos de acceso a datos invocan a otros componentes l&oacute;gicos de acceso a datos";
 choices[30][3] = "Los componentes de interfaz de usuario no pueden restringir los tipos de entrada de datos, ya que esto &uacute;nicamente se permite en la base de datos";
 answers[30] = choices[30][1];
 units[30] = "59,115";
 comments[30] = "Id Pregunta: 4211. ";


//  Id pregunta: 4369 AÃ±o de creación de pregunta: 2007-01-01
 questions[31]= "32)  Cu&aacute;l de las siguientes afirmaciones sobre la tecnolog&iacute;a de acceso a bases de datos ADO.NET no es correcta?";
 choices[31]= new Array();
 choices[31][0] = "El modelo de objetos ADO.NET provee una estructura de acceso a distintos or&iacute;genes de datos. Tiene 2 componentes principales: El Dataset y el proveedor de Datos .NET";
 choices[31][1] = "ADO.NET utiliza XML como formato para transmitir datos desde y hacia su base de datos y su aplicaci&oacute;n Web.";
 choices[31][2] = "ADO.NET es un conjunto de clases que se utiliza para acceder y manipular or&iacute;genes de datos como por ejemplo, una base de datos de SQL Server o una planilla Excel.";
 choices[31][3] = "ADO.NET utiliza un modelo de acceso pensando para entornos permanentemente conectados. Esto quiere decir que la aplicaci&oacute;n y el origen de datos deben estar en comunicaci&oacute;n permanente.";
 answers[31] = choices[31][3];
 units[31] = "59";
 comments[31] = "Id Pregunta: 4369. ";


//  Id pregunta: 4704 AÃ±o de creación de pregunta: 2007-01-01
 questions[32]= "33)  Un applet de Java se ejecutar&aacute; en casi cualquier navegador porque ..";
 choices[32]= new Array();
 choices[32][0] = "el servidor tiene un built-in de JVM.";
 choices[32][1] = "el navegador es capaz de interpretar el c&oacute;digo fuente";
 choices[32][2] = "el navegador tiene un built-in de JVM";
 choices[32][3] = "los applets no necesitan una JVM.";
 answers[32] = choices[32][2];
 units[32] = "60";
 comments[32] = "Id Pregunta: 4704. Examen 2006 JCYL";


//  Id pregunta: 4836 AÃ±o de creación de pregunta: 2007-01-01
 questions[33]= "34)  En ADO.NET para mostrar datos en un control DataGrid:";
 choices[33]= new Array();
 choices[33][0] = "Hay que vincular el control DataGrid a un objeto DataView, seleccionar &quot;Permitir ordenaci&oacute;n&quot; en elGenerador de propiedades y generar una rutina de tratamiento del evento SortCommand";
 choices[33][1] = "Hay que establecer la propiedad DataSource y DataMember del control Datalist y definir los datos vinculadospor cada control en las plantillas del control DataList";
 choices[33][2] = "Hay que asignar el objeto DataSource y opcionalmente el objeto DataKeyField en el Generador depropiedades";
 choices[33][3] = "Hay que seleccionar una opci&oacute;n de paginado del panel Paginaci&oacute;n del Generador de propiedades del controlDataGrid";
 answers[33] = choices[33][2];
 units[33] = "115";
 comments[33] = "Id Pregunta: 4836. ";


//  Id pregunta: 4856 AÃ±o de creación de pregunta: 2007-01-01
 questions[34]= "35)  En el entorno de trabajo necesario para desarrollar applets, el m&eacute;todo init de la clase Applet:";
 choices[34]= new Array();
 choices[34][0] = "Es invocado autom&aacute;ticamente despu&eacute;s de que Java llame al m&eacute;todo start";
 choices[34][1] = "Se utiliza siempre que el applet necesita inicializaci&oacute;n";
 choices[34][2] = "Es invocado autom&aacute;ticamente cuando el usuario sale de la p&aacute;gina en la que se encuentra el applet";
 choices[34][3] = "S&oacute;lo es invocado cuando el navegador se cierra normalmente";
 answers[34] = choices[34][1];
 units[34] = "116";
 comments[34] = "Id Pregunta: 4856. ";


//  Id pregunta: 4914 AÃ±o de creación de pregunta: 2003-01-01
 questions[35]= "36)  Entre los objetos utilizados por ADO.NET, no se encuentra:";
 choices[35]= new Array();
 choices[35][0] = "DataSet.";
 choices[35][1] = "DataReader.";
 choices[35][2] = "DataRequest.";
 choices[35][3] = "DataAdapter.";
 answers[35] = choices[35][2];
 units[35] = "115";
 comments[35] = "Id Pregunta: 4914. Examen TIC B 2007";


//  Id pregunta: 4951 AÃ±o de creación de pregunta: 2003-01-01
 questions[36]= "37)  Seg&uacute;n JAVA EE 5, &iquest;qu&eacute; tipo de Enterprise Bean puede recibir mensajes JMS (Java Message Service)?:";
 choices[36]= new Array();
 choices[36][0] = "Message-Driven Bean.";
 choices[36][1] = "Stateful Session Bean.";
 choices[36][2] = "Stateless Session Bean.";
 choices[36][3] = "Message-Oriented Bean.";
 answers[36] = choices[36][0];
 units[36] = "116";
 comments[36] = "Id Pregunta: 4951. Examen TIC B 2007";


//  Id pregunta: 4989 AÃ±o de creación de pregunta: 2003-01-01
 questions[37]= "38)  &iquest;Cu&aacute;l de las siguientes opciones se corresponde con una interfaz de Java que permite llamar a m&eacute;todos nativosescritos en otros lenguajes?:";
 choices[37]= new Array();
 choices[37][0] = "RMI";
 choices[37][1] = "JAXP";
 choices[37][2] = "JNDI";
 choices[37][3] = "JNI";
 answers[37] = choices[37][3];
 units[37] = "116";
 comments[37] = "Id Pregunta: 4989. Examen TIC A 2007";


//  Id pregunta: 5516 AÃ±o de creación de pregunta: 2003-01-01
 questions[38]= "39)  Indique cu&aacute;l de los siguientes es un framework de c&oacute;digo abierto que se ocupa de la capa de persistencia entre la l&oacute;gica de negocio y la base de datos: ";
 choices[38]= new Array();
 choices[38][0] = "iBATIS";
 choices[38][1] = "JAVA SERVER FACES";
 choices[38][2] = "TAPESTRY";
 choices[38][3] = "STRUTS";
 answers[38] = choices[38][0];
 units[38] = "116";
 comments[38] = "Id Pregunta: 5516. ";


//  Id pregunta: 5701 AÃ±o de creación de pregunta: 2003-01-01
 questions[39]= "40)  BPEL se corresponde con:";
 choices[39]= new Array();
 choices[39][0] = "Un lenguaje estandarizado por OASIS para la composici&oacute;n de servicios web";
 choices[39][1] = "Un formato XML que se utiliza para describir servicios Web";
 choices[39][2] = "Un protocolo est&aacute;ndar creado por Microsoft, IBM y otros, que define c&oacute;mo dos objetos en diferentes procesos pueden comunicarse por medio de intercambio de datos XML";
 choices[39][3] = "Un consorcio internacional sin fines de lucro que orienta el desarrollo, la convergencia y la adopci&oacute;n de los est&aacute;ndares e-business";
 answers[39] = choices[39][0];
 units[39] = "51";
 comments[39] = "Id Pregunta: 5701. NULL";


//  Id pregunta: 5709 AÃ±o de creación de pregunta: 2009-01-01
 questions[40]= "41)  Como se denomina al conjunto de servicios y protocolos de los servicios web:";
 choices[40]= new Array();
 choices[40][0] = "Web Service Protocol Stack.";
 choices[40][1] = "Web Service Protocol Set.";
 choices[40][2] = "UDDI (Universal Description, Discovery and Integration).";
 choices[40][3] = "SOAP (Simple Object Access Protocol).";
 answers[40] = choices[40][0];
 units[40] = "51";
 comments[40] = "Id Pregunta: 5709. MAP 2008 A2";


//  Id pregunta: 5724 AÃ±o de creación de pregunta: 2009-01-01
 questions[41]= "42)  Indique qui&eacute;n desarroll&oacute; el lenguaje JavaScript";
 choices[41]= new Array();
 choices[41][0] = "Microsoft";
 choices[41][1] = "SUN";
 choices[41][2] = "Netscape";
 choices[41][3] = "W3C";
 answers[41] = choices[41][2];
 units[41] = "114";
 comments[41] = "Id Pregunta: 5724. MAP 2008 A1";


//  Id pregunta: 5868 AÃ±o de creación de pregunta: 2009-01-01
 questions[42]= "43)  En el &aacute;mbito de los patrones de dise&ntilde;o, &iquest;qu&eacute; es un singleton?";
 choices[42]= new Array();
 choices[42][0] = "Un objeto del que obtenemos referencias a otros";
 choices[42][1] = "Un objeto que adapta las llamadas a otro y act&uacute;a como intermediario";
 choices[42][2] = "Un objeto del que s&oacute;lo existe una instancia";
 choices[42][3] = "Una clase que no se puede instanciar";
 answers[42] = choices[42][2];
 units[42] = "116";
 comments[42] = "Id Pregunta: 5868. MAP 2008 A1";


//  Id pregunta: 5893 AÃ±o de creación de pregunta: 2009-01-01
 questions[43]= "44)  &iquest;Qu&eacute; es JNI?";
 choices[43]= new Array();
 choices[43][0] = "Un API de Java para acceder a servicios de nombre y directorio";
 choices[43][1] = "Un API de Java para invocar m&eacute;todos escritos en otros lenguajes";
 choices[43][2] = "Un API de Java para crear interfaces gr&aacute;ficas de usuario";
 choices[43][3] = "Ninguna de las anteriores";
 answers[43] = choices[43][1];
 units[43] = "60";
 comments[43] = "Id Pregunta: 5893. NULL";


//  Id pregunta: 5899 AÃ±o de creación de pregunta: 2009-01-01
 questions[44]= "45)  &iquest;Qu&eacute; es JPA?";
 choices[44]= new Array();
 choices[44][0] = "Una tecnolog&iacute;a Java de acceso a bases de datos alternativa a JDBC y con la cu&aacute;l no tiene nada que ver";
 choices[44][1] = "Una tecnolog&iacute;a Java de acceso a bases de datos de mayor nivel que JDBC, en la cu&aacute;l se apoya";
 choices[44][2] = "Es la capa que soporta la portabilidad entre gestores de bases de datos en JDBC";
 choices[44][3] = "Ninguna de las anteriores";
 answers[44] = choices[44][1];
 units[44] = "60";
 comments[44] = "Id Pregunta: 5899. NULL";


//  Id pregunta: 6084 AÃ±o de creación de pregunta: 2010-01-01
 questions[45]= "46)  &iquest;Qu&eacute; se entiende por SOI (Infraestructura Orientada a Servicios)?";
 choices[45]= new Array();
 choices[45][0] = "Una colecci&oacute;n de recursos de hardware y software que soportan la implantaci&oacute;n y el desarrollo de la arquitectura SOA.";
 choices[45][1] = "Se trata de una colecci&oacute;n de recursos de hardware y software que suponen una alternativa a SOA.";
 choices[45][2] = "Se trata de un concepto para el que &quot;The Open Group&quot; ha abierto un proyecto dentro del grupo de trabajo de SOA.";
 choices[45][3] = "Tanto A y C son correctas.";
 answers[45] = choices[45][3];
 units[45] = "51";
 comments[45] = "Id Pregunta: 6084. NULL";


//  Id pregunta: 6222 AÃ±o de creación de pregunta: 2010-01-01
 questions[46]= "47)  &iquest;Cu&aacute;l de las siguientes NO es una caracter&iacute;stica com&uacute;n a Portlets y Servlets?:";
 choices[46]= new Array();
 choices[46][0] = "Generan contenido din&aacute;micamente.";
 choices[46][1] = "Son manejados por un contenedor especializado.";
 choices[46][2] = "Est&aacute;n asociados directamente a una URL.";
 choices[46][3] = "Su ciclo de vida es controlado por el contenedor.";
 answers[46] = choices[46][2];
 units[46] = "114";
 comments[46] = "Id Pregunta: 6222. ";


//  Id pregunta: 6476 AÃ±o de creación de pregunta: 2010-01-01
 questions[47]= "48)  Indique la respuesta incorrecta sobre Java EE 5:";
 choices[47]= new Array();
 choices[47][0] = "Servlets, JavaServer Faces, JavaServer Pages y Applets son componentes web.";
 choices[47][1] = "Java EE 5 es un modelo multicapa distribuido, que contempla: capa cliente, capa web, capa de negocio y capa de sistemas de informaci&oacute;n empresarial";
 choices[47][2] = "El servidor Java EE proporciona el contenedor EJB";
 choices[47][3] = "La plataforma contempla dos tipos de clientes: el cliente basado en navegador (o cliente ligero) y el cliente de aplicaci&oacute;n (o cliente pesado)";
 answers[47] = choices[47][0];
 units[47] = "116";
 comments[47] = "Id Pregunta: 6476. Castilla La Mancha 2009";


//  Id pregunta: 6517 AÃ±o de creación de pregunta: 2010-01-01
 questions[48]= "49)  Se&ntilde;ale que afirmaci&oacute;n es FALSA en relaci&oacute;n a los archivos jar en java:";
 choices[48]= new Array();
 choices[48][0] = "El algoritmo de compresi&oacute;n que utilizan es LZW.";
 choices[48][1] = "Son independientes de la plataforma y cualquier JVM los interpreta.";
 choices[48][2] = "Todos los ficheros que contienen, tienen la extensi&oacute;n class.";
 choices[48][3] = "Pueden incluir un subdirectorio de metainformaci&oacute;n llamado META-INF.";
 answers[48] = choices[48][2];
 units[48] = "60";
 comments[48] = "Id Pregunta: 6517. NULL";


//  Id pregunta: 7320 AÃ±o de creación de pregunta: 2010-01-01
 questions[49]= "50)  Cu&aacute;l de las siguientes afirmaciones sobre Visual Studio .NET no es cierta:";
 choices[49]= new Array();
 choices[49][0] = "Es un IDE (Entorno Integrado de Desarrollo) desarrollado por Microsoft";
 choices[49][1] = "Permite la programaci&oacute;n WYSIWYG (What You See Is What You Get)";
 choices[49][2] = "Los programas desarrollados con Visual Studio .NET &uacute;nicamente pueden usar SQL Server para el almacenamiento de datos";
 choices[49][3] = "Las versiones Express Editions se ofrecen gratuitamente";
 answers[49] = choices[49][2];
 units[49] = "59";
 comments[49] = "Id Pregunta: 7320. NULL";


//  Id pregunta: 8349 AÃ±o de creación de pregunta: 2011-01-01
 questions[50]= "51)  Dentro de los productos que engloba la plataforma .NET, las funciones de un servidor web las realiza:";
 choices[50]= new Array();
 choices[50][0] = "IIS (Internet Information Services)";
 choices[50][1] = "Apache";
 choices[50][2] = "Joomla";
 choices[50][3] = "Microsoft Web Server";
 answers[50] = choices[50][0];
 units[50] = "115";
 comments[50] = "Id Pregunta: 8349. Examen TIC A2 2010";


//  Id pregunta: 8351 AÃ±o de creación de pregunta: 2011-01-01
 questions[51]= "52)  &iquest;Qu&eacute; librer&iacute;a de .Net permite aplicar el patr&oacute;n &quot;Inversion of Control&quot;?";
 choices[51]= new Array();
 choices[51][0] = "Unity Application Block,";
 choices[51][1] = "Logging Application Block.";
 choices[51][2] = "Ajax Control Toolkit";
 choices[51][3] = "Cached XML Data Mapper";
 answers[51] = choices[51][0];
 units[51] = "59,115";
 comments[51] = "Id Pregunta: 8351. Examen TIC A2 2010";


//  Id pregunta: 8352 AÃ±o de creación de pregunta: 2011-01-01
 questions[52]= "53)  &iquest;Cu&aacute;l de las siguientes partes del SOAP sirve para expresar instancias de tipos de datos definidos por la aplicaci&oacute;n?";
 choices[52]= new Array();
 choices[52][0] = "SOAP envelope.";
 choices[52][1] = "SOAP binding framework";
 choices[52][2] = "SOAP encoding rules.";
 choices[52][3] = "SOAP  RPC representation.";
 answers[52] = choices[52][2];
 units[52] = "51";
 comments[52] = "Id Pregunta: 8352. Examen TIC A2 2010";


//  Id pregunta: 8353 AÃ±o de creación de pregunta: 2011-01-01
 questions[53]= "54)  Indique cu&aacute;l de las siguientes definiciones se corresponde con Biztalk:";
 choices[53]= new Array();
 choices[53][0] = "Es un servidor que permite gestionar procesos de negocio por medio de adaptadores dise&ntilde;ados al efecto, capacit&aacute;ndolo para operar diferentes tipos de software.";
 choices[53][1] = "Es una libreria de .NET que permite la comunicaci&oacute;n por IRC facilitando la implementaci&oacute;n de chats.";
 choices[53][2] = "Es un servidor web de .NET especialmente adaptado para tecnolog&iacute;as m&oacute;viles";
 choices[53][3] = "Es un componente que pertenece al CLR de .NET y que facilita la ejecuci&oacute;n de la aplicaci&oacute;n.";
 answers[53] = choices[53][0];
 units[53] = "59,115";
 comments[53] = "Id Pregunta: 8353. Examen TIC A2 2010";


//  Id pregunta: 8464 AÃ±o de creación de pregunta: 2011-01-01
 questions[54]= "55)  El .NET Framework 3.5, facilita tareas de programaci&oacute;n de gesti&oacute;n de cadenas de texto, colecciones de datos, conectividad con base de datos, acceso a fichero, entre otros; adem&aacute;s incluye tipos para soportar varios escenarios de desarrollo especializado. &iquest;Cu&aacute;l de los siguientes servicios o aplicaciones pueden desarrollarse sobre .NET Framework?:";
 choices[54]= new Array();
 choices[54][0] = "Windows Forms";
 choices[54][1] = "Web Services";
 choices[54][2] = "Ambos";
 choices[54][3] = "Ninguno";
 answers[54] = choices[54][2];
 units[54] = "115";
 comments[54] = "Id Pregunta: 8464. Analista Ayto. Madrid 2010";


//  Id pregunta: 8593 AÃ±o de creación de pregunta: 2011-01-01
 questions[55]= "56)  La librer&iacute;a Java API for XML Processing (JAXP):";
 choices[55]= new Array();
 choices[55][0] = "Permite tratar documentos XML tanto a trav&eacute;s de! modelo SAX como a trav&eacute;s del modelo DOM.";
 choices[55][1] = "Trabaja &uacute;nicamente con el modelo DOM.";
 choices[55][2] = "No existe tal librer&iacute;a en el lenguaje Java";
 choices[55][3] = "No tiene una Implementaci&oacute;n propia para el parser y obligatoriamente debe utilizar el parser del modelo DOM";
 answers[55] = choices[55][0];
 units[55] = "116";
 comments[55] = "Id Pregunta: 8593. Examen TIC A2 2010 interna";


//  Id pregunta: 8596 AÃ±o de creación de pregunta: 2011-01-01
 questions[56]= "57)  Si queremos almacenar unas tablas de la base de datos y sus relaciones en memoria para operar con ellas, &iquest;cual de los siguientes objetos de .NET usar&iacute;a?";
 choices[56]= new Array();
 choices[56][0] = "DataTableRelation";
 choices[56][1] = "DataView";
 choices[56][2] = "DataTable";
 choices[56][3] = "DataSet";
 answers[56] = choices[56][3];
 units[56] = "115";
 comments[56] = "Id Pregunta: 8596. Examen TIC A2 2010 interna";


//  Id pregunta: 8602 AÃ±o de creación de pregunta: 2011-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l de los siguientes es el lenguaje est&aacute;ndar propuesto para la descripci&oacute;n de servicios web bajo protocolo SOAP? ";
 choices[57]= new Array();
 choices[57][0] = "WSDL";
 choices[57][1] = "UDDI";
 choices[57][2] = "XML";
 choices[57][3] = "REST";
 answers[57] = choices[57][0];
 units[57] = "51";
 comments[57] = "Id Pregunta: 8602. Examen TIC A2 2010 interna";


//  Id pregunta: 8794 AÃ±o de creación de pregunta: 2011-01-01
 questions[58]= "59)  &iquest;En qu&eacute; est&aacute;ndar se define el lenguaje SGML?";
 choices[58]= new Array();
 choices[58][0] = "ISO 8879";
 choices[58][1] = "RFC 8879";
 choices[58][2] = "IEEE 8879";
 choices[58][3] = "Ninguna de las anteriores";
 answers[58] = choices[58][0];
 units[58] = "69, 114";
 comments[58] = "Id Pregunta: 8794. Examen UPM A2 2011";


//  Id pregunta: 8802 AÃ±o de creación de pregunta: 2011-01-01
 questions[59]= "60)  &iquest;Qu&eacute; es un Scriptlet JSP?";
 choices[59]= new Array();
 choices[59][0] = "Cualquier bloque de c&oacute;digo Java v&aacute;lido que se encuentre entre los delimitadores &lt;&mdash; y --&gt;";
 choices[59][1] = "Cualquier bloque de c&oacute;digo Java v&aacute;lido que se encuentre entre los delimitadores &lt;* y *&gt;";
 choices[59][2] = "Cualquier bloque de c&oacute;digo Java v&aacute;lido que se encuentre entre los delimitadores &lt;+ y +&gt;";
 choices[59][3] = "Cualquier bloque de c&oacute;digo Java v&aacute;lido que se encuentre entre los delimitadores &lt;% y %&gt;";
 answers[59] = choices[59][3];
 units[59] = "116";
 comments[59] = "Id Pregunta: 8802. Examen UPM A2 2011";


//  Id pregunta: 8810 AÃ±o de creación de pregunta: 2011-01-01
 questions[60]= "61)  El objeto anchor de Javascript indica...";
 choices[60]= new Array();
 choices[60][0] = "Los enlaces internos del documento";
 choices[60][1] = "Los v&iacute;nculos externos del documento";
 choices[60][2] = "Array con todas las anclas del documento";
 choices[60][3] = "El ancho m&aacute;ximo de los elementos de un formulario";
 answers[60] = choices[60][0];
 units[60] = "114";
 comments[60] = "Id Pregunta: 8810. Examen UPM A2 2011";


//  Id pregunta: 8811 AÃ±o de creación de pregunta: 2011-01-01
 questions[61]= "62)  Una p&aacute;gina ASP mezcla en el mismo archivo secuencias de comandos con c&oacute;digo HTML est&aacute;ndar con las secuencias de comandos asp mediante los delimitadores:";
 choices[61]= new Array();
 choices[61][0] = "&lt;% y %&gt;";
 choices[61][1] = "&lt;SCRIPT LANGUAGE=&quot;ASPScript&quot;&gt; &lt;/SCRIPl&gt;";
 choices[61][2] = "&lt;!- --&gt;";
 choices[61][3] = "Los comandos ASP no se mezclan en el mismo archive que el c&oacute;digo HTML, sino que se importan desde otro archivo";
 answers[61] = choices[61][0];
 units[61] = "59, 115";
 comments[61] = "Id Pregunta: 8811. Examen UPM A2 2011";


//  Id pregunta: 8829 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)   En la arquitectura orientada a servicios, el est&aacute;ndar WSRP:";
 choices[62]= new Array();
 choices[62][0] = " Web Service for Remote Process, es utilizado para integrar servicios web con aplicaciones de las que necesiten datos para ejecutar su funcionalidad.";
 choices[62][1] = " Web Service for Remote Portlets, es utilizado para potenciar el uso de Servicios Web por la interfaz de aplicaci&oacute;n";
 choices[62][2] = " Web Service for Resource Planning, es utilizado para su integraci&oacute;n con los ERP de la organizaci&oacute;n";
 choices[62][3] = " Web Service for Redirect Processing, es utilizado para recoger cierta funcionalidad de otro Servicio Web necesaria para completar la suya";
 answers[62] = choices[62][1];
 units[62] = "114";
 comments[62] = "Id Pregunta: 8829. Examen UC3M 2010";


//  Id pregunta: 8852 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  Entre los tipos de componentes que pueden desarrollarse en aplicaciones basadas en J2EE 1.4 tenemos:";
 choices[63]= new Array();
 choices[63][0] = "P&aacute;ginas Asp y DLL";
 choices[63][1] = "Applet, Servlets, EJBs";
 choices[63][2] = "Javascript y p&aacute;ginas JSP";
 choices[63][3] = "Componentes COM";
 answers[63] = choices[63][1];
 units[63] = "116";
 comments[63] = "Id Pregunta: 8852. Analista Ayto. Madrid 2010";


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


//  Id pregunta: 8931 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  &iquest;Qu&eacute; formato de los siguientes no es de audio?";
 choices[65]= new Array();
 choices[65][0] = "VRML";
 choices[65][1] = "Ogg Vorbis";
 choices[65][2] = "MIDI";
 choices[65][3] = "WMA";
 answers[65] = choices[65][0];
 units[65] = "114";
 comments[65] = "Id Pregunta: 8931. ";


//  Id pregunta: 8985 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  En el contexto de web services &iquest;Qu&eacute; quiere decir OASIS?";
 choices[66]= new Array();
 choices[66][0] = "Organization for the Advancement of Structured Information Services";
 choices[66][1] = "Organization for the Advancement of Service Integration Standards";
 choices[66][2] = "Organization for the Advancement of Structured Information Standards";
 choices[66][3] = "Organization for the Application of Structured Information Standards";
 answers[66] = choices[66][2];
 units[66] = "51, 69";
 comments[66] = "Id Pregunta: 8985. NULL";


//  Id pregunta: 9042 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  Se&ntilde;ale la afirmaci&oacute;n correcta";
 choices[67]= new Array();
 choices[67][0] = "La &uacute;nica manera de implementar SOA es con un Enterprise Service Bus";
 choices[67][1] = "La &uacute;nica manera de implementar SOA es a trav&eacute;s de servicios Web";
 choices[67][2] = "SOA es un concepto que puede ser implementado de varias formas";
 choices[67][3] = "Todas son incorrectas";
 answers[67] = choices[67][2];
 units[67] = "51";
 comments[67] = "Id Pregunta: 9042. NULL";


//  Id pregunta: 9501 AÃ±o de creación de pregunta: 2013-01-01
 questions[68]= "69)  &iquest;Cu&aacute;l de los siguientes elementos no es un plugin?";
 choices[68]= new Array();
 choices[68][0] = "Lector Acrobat de Adobe";
 choices[68][1] = "Quicktime de Apple";
 choices[68][2] = "Cosmoplayer de Platinum";
 choices[68][3] = "Todos los anteriores son plugins";
 answers[68] = choices[68][3];
 units[68] = "114";
 comments[68] = "Id Pregunta: 9501. NULL";


//  Id pregunta: 9516 AÃ±o de creación de pregunta: 2013-01-01
 questions[69]= "70)  &iquest;Cu&aacute;l de las siguientes directivas JSP no existe?";
 choices[69]= new Array();
 choices[69][0] = "page";
 choices[69][1] = "map";
 choices[69][2] = "taglib";
 choices[69][3] = "include";
 answers[69] = choices[69][1];
 units[69] = "116";
 comments[69] = "Id Pregunta: 9516. NULL";


//  Id pregunta: 9518 AÃ±o de creación de pregunta: 2013-01-01
 questions[70]= "71)  Los EJB de tipo entity pueden ser:";
 choices[70]= new Array();
 choices[70][0] = "De dos tipos: RMP y CMP";
 choices[70][1] = "De dos tipos: BMP y CMP";
 choices[70][2] = "De tres tipos: BMP, CMP y JMP";
 choices[70][3] = "De tres tipos: BMP, CMP y SMP";
 answers[70] = choices[70][1];
 units[70] = "116";
 comments[70] = "Id Pregunta: 9518. NULL";


//  Id pregunta: 9596 AÃ±o de creación de pregunta: 2013-01-01
 questions[71]= "72)  En una arquitectura web en J2EE, indique cu&aacute;l es la opci&oacute;n correcta que representa la capa a la que pertenece la soluci&oacute;n JCA (J2EE Connector Architecture)";
 choices[71]= new Array();
 choices[71][0] = "Capa de cliente";
 choices[71][1] = "Capa de l&oacute;gica de negocio";
 choices[71][2] = "Capa de integraci&oacute;n";
 choices[71][3] = "Capa de sistemas de informaci&oacute;n";
 answers[71] = choices[71][3];
 units[71] = "60";
 comments[71] = "Id Pregunta: 9596. Xunta Libre 2011. JCE conecta un servidor JEE con un Sistema de Informaci&oacute;n Empresarial (EIS)";


//  Id pregunta: 9597 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  En el desarrollo de aplicaciones en .NET Framework, &iquest;cu&aacute;l de los siguientes no es un componente del marco .NET Framework?";
 choices[72]= new Array();
 choices[72][0] = "El entorno de ejecuci&oacute;n de lenguaje com&uacute;n (CLR) ";
 choices[72][1] = "La biblioteca de clases base (.NET Framework Base Classes) ";
 choices[72][2] = "El lenguaje de definici&oacute;n de la interfaz (IDL)";
 choices[72][3] = "El motor de generaci&oacute;n de la interfaz de usuario ";
 answers[72] = choices[72][2];
 units[72] = "59";
 comments[72] = "Id Pregunta: 9597. Xunta A2 2011";


//  Id pregunta: 9717 AÃ±o de creación de pregunta: 2014-01-01
 questions[73]= "74)  En referencia a la tecnolog&iacute;a CORBA (Common Object Request Broker Architecture) es INCORRECTO que";
 choices[73]= new Array();
 choices[73][0] = "El protocolo de comunicaciones en el que se basa se denomina GIOP (General InterORB Protocol)";
 choices[73][1] = "El lenguaje para especificaciones de interfaces se denomina IPOL (Independent Platform Object Language).";
 choices[73][2] = "Se basa en un modelo de arquitectura distribuida para entornos heterog&eacute;neos";
 choices[73][3] = "Es una propuesta del Object Management Group.";
 answers[73] = choices[73][1];
 units[73] = "51";
 comments[73] = "Id Pregunta: 9717. Examen TIC-A1 2013";


//  Id pregunta: 9740 AÃ±o de creación de pregunta: 2014-01-01
 questions[74]= "75)  En un despliegue de una aplicaci&oacute;n Java EE sobre WebSphere, fijar el mode del class loader como PARENT_LAST tiene el efecto de que busca las clases a cargar primero:";
 choices[74]= new Array();
 choices[74][0] = "En el m&oacute;dulo web, si no las encuentra busca en la aplicaci&oacute;n, y si no las encuentra, en las librer&iacute;as del sistema.";
 choices[74][1] = "En las librer&iacute;as del sistema, si no las encuentra busca en la aplicaci&oacute;n, y si no las encuentra, en el m&oacute;dulo web.";
 choices[74][2] = "En la aplicaci&oacute;n, y si no las encuentra busca en el m&oacute;dulo web, y si no las encuentra, en las librer&iacute;as del sistema.";
 choices[74][3] = "En las librer&iacute;as del sistema, si no las encuentra busca en el m&oacute;dulo web, y si no las encuentra en la aplicaci&oacute;n.";
 answers[74] = choices[74][0];
 units[74] = "116";
 comments[74] = "Id Pregunta: 9740. Examen TIC-A2 2013-Libre";


//  Id pregunta: 10019 AÃ±o de creación de pregunta: 2014-01-01
 questions[75]= "76)  Se&ntilde;ale de entre los siguientes cu&aacute;l NO es un framework de pruebas unitarias para Microsoft .NET:";
 choices[75]= new Array();
 choices[75][0] = "xUnit";
 choices[75][1] = "xUnit.net";
 choices[75][2] = "NUnit";
 choices[75][3] = "csUnit";
 answers[75] = choices[75][0];
 units[75] = "59";
 comments[75] = "Id Pregunta: 10019. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10023 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  Throwable es la superclase de todos los errores y excepciones de Java SE 7. &iquest;A qu&eacute; paquete de Java pertenece Throwable?";
 choices[76]= new Array();
 choices[76][0] = "java.lang";
 choices[76][1] = "java.error";
 choices[76][2] = "java.util";
 choices[76][3] = "Throwable no es una clase, es un interface, y &eacute;ste pertenece al paquete java.io.";
 answers[76] = choices[76][0];
 units[76] = "60";
 comments[76] = "Id Pregunta: 10023. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10028 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  Indique cu&aacute;l de los siguientes es un framework software de Apache que soporta aplicaciones distribuidas que trabajan con miles de nodos y vol&uacute;menes de datos del orden de petabytes:";
 choices[77]= new Array();
 choices[77][0] = "Joost";
 choices[77][1] = "Netflix";
 choices[77][2] = "Cassandra ";
 choices[77][3] = "Hadoop";
 answers[77] = choices[77][3];
 units[77] = "116";
 comments[77] = "Id Pregunta: 10028. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10224 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  Para que la siguiente sentencia compile:float a = 100.21;I)&nbsp; Necesita hacer un casting a float: float a = (float) 100.21;II)&nbsp; Hay que colocar una f tras el valor num&eacute;rico: float a = 100.21f;III)&nbsp; Hay que prescindir de la fracci&oacute;n decimal: float a = 100;";
 choices[78]= new Array();
 choices[78][0] = "Compila bien sin cambios";
 choices[78][1] = "No compila, pero ninguna de las anteriores permite compilar";
 choices[78][2] = "S&oacute;lo es v&aacute;lida I)";
 choices[78][3] = "I), II) y III) son v&aacute;lidas";
 answers[78] = choices[78][3];
 units[78] = "60";
 comments[78] = "Id Pregunta: 10224. NULL";


//  Id pregunta: 10227 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  Cual de los siguientes m&eacute;todos son m&eacute;todosde la clase Thread:";
 choices[79]= new Array();
 choices[79][0] = "sleep(long msec);";
 choices[79][1] = "start();";
 choices[79][2] = "wait();";
 choices[79][3] = "A y B son correctas.";
 answers[79] = choices[79][3];
 units[79] = "60";
 comments[79] = "Id Pregunta: 10227. start() es un m&eacute;todo de Thread. Se cambia la opci&oacute;n D, notifyAll, por la actual.";


//  Id pregunta: 10233 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  &iquest;En que casos una sesi&oacute;n ser&aacute; invalidada?:";
 choices[80]= new Array();
 choices[80][0] = "No se recibe una petici&oacute;n del cliente superado el plazo de session timeout";
 choices[80][1] = "El cliente envia una petici&oacute;n KILL_SESSION";
 choices[80][2] = "El contenedor de servlets invalida una sesi&oacute;n por sobrecarga en el servidor";
 choices[80][3] = "El usuario cierra la ventana del navegador";
 answers[80] = choices[80][0];
 units[80] = "116";
 comments[80] = "Id Pregunta: 10233. NULL";


//  Id pregunta: 10237 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  La tecnolog&iacute;a que nos permite trabajar en Java con servicios de directorio como LDAP, Active Directory, se conoce como:";
 choices[81]= new Array();
 choices[81][0] = "Java Messaging Services (JMS)";
 choices[81][1] = "Java Naming and Directory Interface (JNDI)";
 choices[81][2] = "Remote Method Invocation (RMI)";
 choices[81][3] = "JavaBeans Activation Framework (JMF)";
 answers[81] = choices[81][1];
 units[81] = "116";
 comments[81] = "Id Pregunta: 10237. NULL";


//  Id pregunta: 10328 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  Se&ntilde;ale la afirmaci&oacute;n falsa";
 choices[82]= new Array();
 choices[82][0] = "El servidor puede alojar un interprete de scripting";
 choices[82][1] = "El cliente puede alojar un interprerte de scripting";
 choices[82][2] = "Para usar el driver JDBC se necesita descargar un plug-in proporcionado por cada fabricante";
 choices[82][3] = "Un script del lado del cliente no puede solicitarle al servidor su certificado para establecer un canal autenticado bidireccionalmente";
 answers[82] = choices[82][2];
 units[82] = "114";
 comments[82] = "Id Pregunta: 10328. ";


//  Id pregunta: 10431 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  En la arquitectura SOA (Arquitectura Orientada a Servicios)";
 choices[83]= new Array();
 choices[83][0] = "se hace incompatible el uso de servicios web.";
 choices[83][1] = "los servicios encapsulan sus funcionalidades. ";
 choices[83][2] = "los servicios mantienen un fuerte acoplamiento.";
 choices[83][3] = "os servicios dependen fuertemente de la plataforma subyacente.";
 answers[83] = choices[83][1];
 units[83] = "51";
 comments[83] = "Id Pregunta: 10431. Examen TIC A1 2013";


//  Id pregunta: 10460 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  Respecto a JSON (Javascript Object Notation), indicar la respuesta incorrecta:";
 choices[84]= new Array();
 choices[84][0] = "Es una parte de la definici&oacute;n del est&aacute;ndar ECMA-262.";
 choices[84][1] = "Es una alternativa a XML en AJAX.";
 choices[84][2] = "Requiere analizadores sint&aacute;cticos complejos.";
 choices[84][3] = "Suele emplearse en entornos donde el tama&ntilde;o del flujo de datos entre cliente y servidor es importante.";
 answers[84] = choices[84][2];
 units[84] = "51";
 comments[84] = "Id Pregunta: 10460. NULL";


//  Id pregunta: 10463 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Respecto a REST, indique la respuesta correcta:";
 choices[85]= new Array();
 choices[85][0] = "Los m&eacute;todos HEAD, POST, PUT y DELETE definen la interfaz de los recursos.";
 choices[85][1] = "Al igual que SOAP est&aacute; basado en verbos u operaciones para definir la funcionalidad de las aplicaciones.";
 choices[85][2] = "Los servicios web tipo REST permiten el uso de WS-Security.";
 choices[85][3] = "Permiten mayor escalabilidad al no requerir mantenimiento del estado.";
 answers[85] = choices[85][3];
 units[85] = "51";
 comments[85] = "Id Pregunta: 10463. ";


//  Id pregunta: 10619 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  Se&ntilde;ale cu&aacute;l de estas aplicaciones puede implementarse con el entorno .NET:";
 choices[86]= new Array();
 choices[86][0] = "Aplicaci&oacute;n de escritorio escrita en C++.";
 choices[86][1] = "Sitio web din&aacute;mico.";
 choices[86][2] = "Una plataforma de e-learning.";
 choices[86][3] = "Todas las anteriores.";
 answers[86] = choices[86][3];
 units[86] = "59";
 comments[86] = "Id Pregunta: 10619. ";


//  Id pregunta: 10847 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  La especificaci&oacute;n &ldquo;Java Platform, Enterprise Edition 7 (Java EE 7)&rdquo; se encuentra definida en el JSR (Java Specification Request):";
 choices[87]= new Array();
 choices[87][0] = "JSR 342.";
 choices[87][1] = "JSR 366.";
 choices[87][2] = "JSR 324.";
 choices[87][3] = "JSR 224.";
 answers[87] = choices[87][0];
 units[87] = "60, 116";
 comments[87] = "Id Pregunta: 10847. Examen GSI 2014";


//  Id pregunta: 10848 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  Elija la respuesta correcta respecto Java EE 7:";
 choices[88]= new Array();
 choices[88][0] = "Para crear un nuevo servlet se debe invocar al procedimiento init ().";
 choices[88][1] = "Para destruir un servlet se debe invocar al m&eacute;todo destroy().";
 choices[88][2] = "La clase ServletConfig sirve para pasarle informaci&oacute;n al servlet durante su inicializaci&oacute;n.";
 choices[88][3] = "La clase ServletSession proporciona a las aplicaciones las herramientas para la gesti&oacute;n de la sesi&oacute;n.";
 answers[88] = choices[88][2];
 units[88] = "60, 116";
 comments[88] = "Id Pregunta: 10848. Examen GSI 2014";


//  Id pregunta: 10850 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  Los proveedores de datos .NET Framework incluyen un objeto DbConnection para conectarse al origen de datos. Se&ntilde;ale, entre las siguientes clases, cu&aacute;l NO pertenece a un proveedor de datos incluido en el .NET Framework 4.5:";
 choices[89]= new Array();
 choices[89][0] = "EntityConnection.";
 choices[89][1] = "SqlConnection.";
 choices[89][2] = "SqlCeConnection.";
 choices[89][3] = "OleOdbcConnection.";
 answers[89] = choices[89][3];
 units[89] = "59, 115";
 comments[89] = "Id Pregunta: 10850. Examen GSI 2014";


//  Id pregunta: 10851 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  La plataforma inform&aacute;tica y de servicios en Internet hospedada en centros de datos administrados o respaldados por Microsoft se llama:";
 choices[90]= new Array();
 choices[90][0] = "Bajoo.";
 choices[90][1] = "Azure.";
 choices[90][2] = "Heroku.";
 choices[90][3] = "Adrive.";
 answers[90] = choices[90][1];
 units[90] = "59, 115";
 comments[90] = "Id Pregunta: 10851. Examen GSI 2014";


//  Id pregunta: 10852 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  En .NET, &iquest;qu&eacute; es el Managed Extensibility Framework (MEF)?";
 choices[91]= new Array();
 choices[91][0] = "Es una arquitectura que proporciona primitivos as&iacute;ncronos de paso de aprobaci&oacute;n de mensajes sin tipo.";
 choices[91][1] = "Es un modelo extensible de programaci&oacute;n, motor y herramientas para generar con rapidez aplicaciones de flujo de trabajo en Windows.";
 choices[91][2] = "Es una biblioteca de clases portable que permite escribir y compilar ensamblados administrados capaces de funcionar en m&uacute;ltiples plataformas de .NET.";
 choices[91][3] = "Es una biblioteca para crear aplicaciones ligeras y extensibles.";
 answers[91] = choices[91][3];
 units[91] = "59, 115";
 comments[91] = "Id Pregunta: 10852. Examen GSI 2014";


//  Id pregunta: 10853 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Se&ntilde;ale la respuesta INCORRECTA respecto a la tecnolog&iacute;a de Servicios Web REST:";
 choices[92]= new Array();
 choices[92][0] = "JAX-RS es una API Java que proporciona soporte en la creaci&oacute;n de servicios web de acuerdo con REST.";
 choices[92][1] = "Jersey es una implementaci&oacute;n de referencia de servicios web REST.";
 choices[92][2] = "REST publica recursos que son accesibles a trav&eacute;s de m&eacute;todos http, por ejemplo POST y GET.";
 choices[92][3] = "Los recursos REST permiten s&oacute;lo 3 operaciones: CREATE, UPDATE y DELETE.";
 answers[92] = choices[92][3];
 units[92] = "51";
 comments[92] = "Id Pregunta: 10853. Examen GSI 2014";


//  Id pregunta: 10992 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Respecto a los formatos de ficheros de im&aacute;genes, se&ntilde;ale la respuesta correcta:";
 choices[93]= new Array();
 choices[93][0] = "El formato de ficheros GIF utiliza un algoritmo de compresi&oacute;n sin p&eacute;rdidas hasta los 256 colores.";
 choices[93][1] = "El formato BMP es el formato t&iacute;pico usado por el sistema operativo Linux.";
 choices[93][2] = "Los archivos RAW son compatibles con los formatos TIFF y JPEG.";
 choices[93][3] = "El formato WMK es el m&aacute;s utilizado para los sistemas de grabaci&oacute;n de video.";
 answers[93] = choices[93][0];
 units[93] = "114";
 comments[93] = "Id Pregunta: 10992. TIC A1 AGE 2014";


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


//  Id pregunta: 11229 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Cu&aacute;l de las siguientes respuestas es cierta sobre la tecnolog&iacute;a Java Server Faces (JSF)?";
 choices[95]= new Array();
 choices[95][0] = "JSF 2.0 est&aacute; definido especificaci&oacute;n Java EE JSR-314.";
 choices[95][1] = "La implementaci&oacute;n de referencia de la especificaci&oacute;n JSF es el proyecto Oracle Mojarra.";
 choices[95][2] = "JSF 2 utiliza Facelets como su sistema de plantillas por defecto.";
 choices[95][3] = "Todas las respuestas son ciertas.";
 answers[95] = choices[95][3];
 units[95] = "116";
 comments[95] = "Id Pregunta: 11229. ";


//  Id pregunta: 11231 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  En relaci&oacute;n con las tecnolog&iacute;as JAXP y StAX seleccione la respuesta err&oacute;nea";
 choices[96]= new Array();
 choices[96][0] = "La forma de realizar el parsing es distinta, de tipo push en el caso de StAX frente al tipo pull de SAX.";
 choices[96][1] = "La API JAXP nos facilita el acceso, la generaci&oacute;n, validaci&oacute;n y transformaci&oacute;n de ficheros XML.";
 choices[96][2] = "La API StAX es bidireccional, permitiendo tanto la lectura como la escritura de documentos XML.";
 choices[96][3] = "La API StAX expone m&eacute;todos para el procesamiento de documentos XML de forma iterativa y basada en eventos.";
 answers[96] = choices[96][0];
 units[96] = "116";
 comments[96] = "Id Pregunta: 11231. ";


//  Id pregunta: 11317 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Una de las siguientes afirmaciones es falsa respecto a las variables est&aacute;ticas en Java";
 choices[97]= new Array();
 choices[97][0] = "Sus valores son compartidos por todos los objetos de la clase";
 choices[97][1] = "Si se invoca desde la clase en la que se encuentra definido, basta con escribir su nombre";
 choices[97][2] = "Si se le invoca desde una clase distinta, debe anteponerse a su nombre, el de la clase en la que se encuentra seguido del operador punto (.) &lt;NombreClase&gt;.variableEstatica";
 choices[97][3] = "Se define mediante el modificador de acceso public";
 answers[97] = choices[97][3];
 units[97] = "116";
 comments[97] = "Id Pregunta: 11317. El identificador que caracteriza a una variable de clase es static y no es considerada de acceso. Las de acceso son: public, private y protected.";


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


//  Id pregunta: 11610 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  BPEL est&aacute; estandarizado por:";
 choices[99]= new Array();
 choices[99][0] = "BMPI";
 choices[99][1] = "OASIS";
 choices[99][2] = "WfMC";
 choices[99][3] = "W3C";
 answers[99] = choices[99][1];
 units[99] = "51";
 comments[99] = "Id Pregunta: 11610. ";


