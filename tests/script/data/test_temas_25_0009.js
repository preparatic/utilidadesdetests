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

//  Id pregunta: 90 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &ldquo;Aqu&eacute;l equipo de inform&aacute;tica que se adapta perfectamente a las capacidades y condiciones de quienes lo usan, permitiendo su uso de manera eficiente y sin riesgo para la salud ni la seguridad&rdquo; es la definici&oacute;n para:";
 choices[0]= new Array();
 choices[0][0] = "Ordenador adaptable";
 choices[0][1] = "Ordenador, seg&uacute;n la WAI (Web Accesibility Initiative)";
 choices[0][2] = "Ordenador ecol&oacute;gico";
 choices[0][3] = "Ordenador ergon&oacute;mico";
 answers[0] = choices[0][3];
 units[0] = "39";
 comments[0] = "Id Pregunta: 90. ";


//  Id pregunta: 308 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  La gu&iacute;a de portabilidad de X/OPEN actualmente en vigor es:";
 choices[1]= new Array();
 choices[1][0] = "XGP3";
 choices[1][1] = "XGP4";
 choices[1][2] = "XGP5";
 choices[1][3] = "Todas las respuestas anteriores son correctas";
 answers[1] = choices[1][1];
 units[1] = "40";
 comments[1] = "Id Pregunta: 308. XPG";


//  Id pregunta: 321 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  La norma 1003.1-1988 de IEEE se corresponde con la norma ISO:";
 choices[2]= new Array();
 choices[2][0] = "7498";
 choices[2][1] = "9735";
 choices[2][2] = "9075";
 choices[2][3] = "9945";
 answers[2] = choices[2][3];
 units[2] = "40";
 comments[2] = "Id Pregunta: 321. ";


//  Id pregunta: 454 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  Se&ntilde;ale la opci&oacute;n que es uno de los objetivos fundamentales de los sistemas abiertos seg&uacute;n X/Open:";
 choices[3]= new Array();
 choices[3][0] = "Portabilidad de aplicaciones en c&oacute;digo fuente";
 choices[3][1] = "Conectividad de aplicaciones a trav&eacute;s de servicios portables de red, independientes de los protocolos subyacentes y soporte de protocolos comunes";
 choices[3][2] = "Consistencia de la interfaz de usuario";
 choices[3][3] = "Todas son objetivos fundamentales";
 answers[3] = choices[3][3];
 units[3] = "40";
 comments[3] = "Id Pregunta: 454. ";


//  Id pregunta: 464 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  Todo sistema etiquetado como X/Open implementa como m&iacute;nimo:";
 choices[4]= new Array();
 choices[4][0] = "Lenguajes COBOL, FORTRAN, PASCAL, C e interoperatividad de PC";
 choices[4][1] = "POSIX y comunicaciones entre procesos";
 choices[4][2] = "Lenguajes C y ADA, junto con gesti&oacute;n de datos ISAM y SQL";
 choices[4][3] = "POSIX y lenguaje C";
 answers[4] = choices[4][3];
 units[4] = "40";
 comments[4] = "Id Pregunta: 464. ";


//  Id pregunta: 796 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;Qu&eacute; tecnolog&iacute;a para la creaci&oacute;n de p&aacute;ginas web din&aacute;micas puede correr sobre un servidor Windows 2008?:";
 choices[5]= new Array();
 choices[5][0] = "ASP.NET";
 choices[5][1] = "PHP";
 choices[5][2] = "Java EE (Servlets)";
 choices[5][3] = "Todas son v&aacute;lidas";
 answers[5] = choices[5][3];
 units[5] = "59";
 comments[5] = "Id Pregunta: 796. ";


//  Id pregunta: 879 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Cu&aacute;l es el modelo de objeto de documento que utilizan los parsers o analizadores de XML?:";
 choices[6]= new Array();
 choices[6][0] = "DOKM";
 choices[6][1] = "DOM";
 choices[6][2] = "JDOC";
 choices[6][3] = "Todas son falsas";
 answers[6] = choices[6][1];
 units[6] = "69";
 comments[6] = "Id Pregunta: 879. NULL";


//  Id pregunta: 1003 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  El CLR de Microsoft.net es:";
 choices[7]= new Array();
 choices[7][0] = "Una librer&iacute;a para acceso a base de datos heterogeneas, empleando ADO.NET";
 choices[7][1] = "El encargado de compilar a un CIL (Common Intermediate Language)";
 choices[7][2] = "Una nueva estrategia de Microsoft, que defiende &quot;cero fallos&quot; en sus pr&oacute;ximos desarrollos software";
 choices[7][3] = "El mecanismo que se utiliza para enviar las peticiones SOAP a los servidores de aplicaciones remotos";
 answers[7] = choices[7][1];
 units[7] = "59";
 comments[7] = "Id Pregunta: 1003. ";


//  Id pregunta: 1025 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Entre las siguientes caract&eacute;risticas del HTML (Hyper Text Markup Language) hay una incorrecta. Se&ntilde;&aacute;lela:";
 choices[8]= new Array();
 choices[8][0] = "No se necesita ning&uacute;n compilador especial para realizar p&aacute;gina Web";
 choices[8][1] = "Los tipos de letra (fuentes o fonts) vienen declarados dentro del texto en 'claro'";
 choices[8][2] = "La &uacute;ltima especificaci&oacute;n de este lenguaje es la HTML 2.0";
 choices[8][3] = "Las p&aacute;gina Web, pueden interactuar con los usuarios a trav&eacute;s de los CGI (Common Gateway Interfaces) o de los applets de Java";
 answers[8] = choices[8][2];
 units[8] = "69";
 comments[8] = "Id Pregunta: 1025. NULL";


//  Id pregunta: 1238 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  La principal diferencia entre HTML y XML es que:";
 choices[9]= new Array();
 choices[9][0] = "HTML es un lenguaje orientado a textos, aunque maneja gr&aacute;ficos con dificultad, XML es mucho mas versatil y suple las carencias de HTML";
 choices[9][1] = "XML es un lenguaje de descripci&oacute;n de contenidos, y HTML de presentaci&oacute;n, es posible incluso que documentos XML se transformen en HTML";
 choices[9][2] = "XML es un subconjunto de HTML";
 choices[9][3] = "B y C son ciertas";
 answers[9] = choices[9][1];
 units[9] = "69";
 comments[9] = "Id Pregunta: 1238. NULL";


//  Id pregunta: 1306 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  Peque&ntilde;as aplicaciones que pueden formar parte de la p&aacute;gina Web, y que pueden viajar a trav&eacute;s de Intenet para ejecutarse en el ordenador que las reciba se denominan:";
 choices[10]= new Array();
 choices[10][0] = "Controles Java";
 choices[10][1] = "Applets";
 choices[10][2] = "Servlets";
 choices[10][3] = "Aplicaciones CGI";
 answers[10] = choices[10][1];
 units[10] = "60";
 comments[10] = "Id Pregunta: 1306. NULL";


//  Id pregunta: 1389 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Un proveedor de servicios OLE DB es:";
 choices[11]= new Array();
 choices[11][0] = "Un componente OLE DB que en realidad no es propietario de los datos, y que puede proveer alg&uacute;n otro servicio";
 choices[11][1] = "Cualquier componente Software que expone sus datos a trav&eacute;s de una interfaz OLE DB";
 choices[11][2] = "Simult&aacute;neamente, un consumidor y un proveedor de datos";
 choices[11][3] = "Las respuestas 'a' y 'c' son correctas";
 answers[11] = choices[11][0];
 units[11] = "59";
 comments[11] = "Id Pregunta: 1389. ";


//  Id pregunta: 1392 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Un registro MX, en un servidor DNS, &iquest;a qu&eacute; hace referencia?:";
 choices[12]= new Array();
 choices[12][0] = "Al servidor DNS principal";
 choices[12][1] = "Al servidor web asociado al dominio";
 choices[12][2] = "Al servidor de correo asociado al dominio";
 choices[12][3] = "Al servidor seguro asociado al dominio";
 answers[12] = choices[12][2];
 units[12] = "73";
 comments[12] = "Id Pregunta: 1392. ";


//  Id pregunta: 1433 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  XQL es:";
 choices[13]= new Array();
 choices[13][0] = "Extended Query Language";
 choices[13][1] = "XML Query Language";
 choices[13][2] = "No se corresponde con ningun acr&oacute;nimo usado en inform&aacute;tica o telecomunicaciones";
 choices[13][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[13] = choices[13][1];
 units[13] = "69";
 comments[13] = "Id Pregunta: 1433. NULL";


//  Id pregunta: 1486 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  &iquest;Cu&aacute;l de las siguientes afirmaciones no es verdadera respecto a la criptograf&iacute;a?:";
 choices[14]= new Array();
 choices[14][0] = "Los algoritmos &quot;stream&quot; son los mas rapidos";
 choices[14][1] = "Los algoritmos &quot;stream&quot; y &quot;block&quot; son equiparables";
 choices[14][2] = "La  velocidad no tiene ninguna correlaci&oacute;n con la longitud de clave ";
 choices[14][3] = "3DES es m&aacute;s seguro y lento que DES";
 answers[14] = choices[14][1];
 units[14] = "73";
 comments[14] = "Id Pregunta: 1486. ";


//  Id pregunta: 1551 AÃ±o de creación de pregunta: 2003-01-01
 questions[15]= "16)  &iquest;Cu&aacute;l de estos tipos NO es un tipo de middleware?";
 choices[15]= new Array();
 choices[15][0] = "RPC.";
 choices[15][1] = "X-500.";
 choices[15][2] = "ORB.";
 choices[15][3] = "Conversaciones o di&aacute;logos continuos entre dos o m&aacute;s sistemas sobre una conexi&oacute;n l&oacute;gica.";
 answers[15] = choices[15][1];
 units[15] = "73";
 comments[15] = "Id Pregunta: 1551. ";


//  Id pregunta: 1584 AÃ±o de creación de pregunta: 2003-01-01
 questions[16]= "17)  En el contexto del modelo de componentes software basados en Java, &iquest;qu&eacute; es un contenedor?:";
 choices[16]= new Array();
 choices[16][0] = "Un proceso donde se ejecutan los componentes Java.";
 choices[16][1] = "Una biblioteca de clases Java.";
 choices[16][2] = "Una interfaz de usuario.";
 choices[16][3] = "Un fichero XML que describe los componentes de aplicaci&oacute;n.";
 answers[16] = choices[16][0];
 units[16] = "60";
 comments[16] = "Id Pregunta: 1584. Junta Andaluc&iacute;a";


//  Id pregunta: 1764 AÃ±o de creación de pregunta: 2006-01-01
 questions[17]= "18)  Se&ntilde;ale la afirmaci&oacute;n FALSA sobre los ficheros .jar de Java";
 choices[17]= new Array();
 choices[17][0] = "Est&aacute;ndar de empaquetado de ficheros compilados, para facilitar su distribuci&oacute;n y reutilizaci&oacute;n";
 choices[17][1] = "Utiliza para la compresi&oacute;n el algoritmo LZW";
 choices[17][2] = "Son ficheros independientes de la plataforma y cualquier JVM (Java Virtual Machine) ser&aacute; capaz de interpretarlos";
 choices[17][3] = "Todas las afirmaciones anteriores son verdaderas";
 answers[17] = choices[17][3];
 units[17] = "60";
 comments[17] = "Id Pregunta: 1764. A es falsa. Tambi&eacute;n puede incluir im&aacute;genes y otro tipo de archivos. Los .class no son compilados en el sentido estricto.";


//  Id pregunta: 1857 AÃ±o de creación de pregunta: 2006-01-01
 questions[18]= "19)  En relaci&oacute;n a los certificados X.509:";
 choices[18]= new Array();
 choices[18][0] = "Se codifican mediante la notaci&oacute;n ASN.1";
 choices[18][1] = "Permite el uso en sus campos de nombres X.500 y DNS";
 choices[18][2] = "Se han definido extensiones que permiten incluir informaci&oacute;n espec&iacute;fica";
 choices[18][3] = "Todas las anteriores son ciertas";
 answers[18] = choices[18][3];
 units[18] = "73";
 comments[18] = "Id Pregunta: 1857. ";


//  Id pregunta: 1915 AÃ±o de creación de pregunta: 2006-01-01
 questions[19]= "20)  En el entorno del lenguaje Java, AWT se refiere a:";
 choices[19]= new Array();
 choices[19][0] = "Una extensi&oacute;n de Swing";
 choices[19][1] = "Una biblioteca de clases Java para el desarrollo de interfaces gr&aacute;ficas de usuario";
 choices[19][2] = "Un conjunto de clases gr&aacute;ficas bajo licencia de IBM/Taligent";
 choices[19][3] = "Una familia de fuentes de caracteres";
 answers[19] = choices[19][1];
 units[19] = "60";
 comments[19] = "Id Pregunta: 1915. NULL";


//  Id pregunta: 1939 AÃ±o de creación de pregunta: 2006-01-01
 questions[20]= "21)  Sobre la implementaci&oacute;n .NET de la seguridad basada en roles, escoja la afirmaci&oacute;n correcta:";
 choices[20]= new Array();
 choices[20][0] = "Se basa en cuentas/seguridad de Windows para identificar a los usuarios";
 choices[20][1] = "El motor de ejecuci&oacute;n dispone de funciones para que los administradores puedan crear y gestionar la asignaci&oacute;n de cuentas de usuario de Windows a roles de aplicaci&oacute;n";
 choices[20][2] = "Es necesario que los usuarios est&eacute;n asociados a cuentas de usuario de Windows";
 choices[20][3] = "La seguridad basada en roles de la estructura .NET es incompatible con la de COM+ 1.0";
 answers[20] = choices[20][1];
 units[20] = "59";
 comments[20] = "Id Pregunta: 1939. ";


//  Id pregunta: 3350 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  Cuando se emplean tablas en HTML, &iquest;cu&aacute;l es el comando que permite definir nuevas filas de una tabla?:";
 choices[21]= new Array();
 choices[21][0] = "&lt;TD&gt;&hellip;&lt;/TD&gt;";
 choices[21][1] = "&lt;TR&gt;&hellip;&lt;/TR&gt;";
 choices[21][2] = "&lt;TH&gt;&hellip;&lt;/TH&gt;";
 choices[21][3] = "&lt;TF&gt;&hellip;&lt;/TF&gt;";
 answers[21] = choices[21][1];
 units[21] = "69";
 comments[21] = "Id Pregunta: 3350. NULL";


//  Id pregunta: 3653 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  UDDI: ";
 choices[22]= new Array();
 choices[22][0] = "Es una variante de alt&iacute;sima velocidad de la conocida FDDI";
 choices[22][1] = "Es una variante de FDDI adecuada para su desarrollo en LANs";
 choices[22][2] = "Significa User Definition Domain  Interface";
 choices[22][3] = "Ninguna de las anteriores es v&aacute;lida";
 answers[22] = choices[22][3];
 units[22] = "69";
 comments[22] = "Id Pregunta: 3653. NULL";


//  Id pregunta: 3956 AÃ±o de creación de pregunta: 2003-01-01
 questions[23]= "24)  La depuraci&oacute;n (debug) de resultados intermedios durante la ejecuci&oacute;n de trabajos java:";
 choices[23]= new Array();
 choices[23][0] = "S&oacute;lo se permite desde la m&aacute;quina donde se ejecuta";
 choices[23][1] = "No se permite la ejecuci&oacute;n de paradas intermedias";
 choices[23][2] = "Hay una arquitectura que incluye depuraci&oacute;n en remoto";
 choices[23][3] = "No tiene sentido la depuraci&oacute;n en remoto";
 answers[23] = choices[23][2];
 units[23] = "60";
 comments[23] = "Id Pregunta: 3956. NULL";


//  Id pregunta: 4211 AÃ±o de creación de pregunta: 2006-01-01
 questions[24]= "25)  Indique cu&aacute;l de las siguientes afirmaciones es cierta referida a la arquitectura de desarrollo  .NET";
 choices[24]= new Array();
 choices[24][0] = "Biz Talk Server no resulta adecuado si el proceso implica m&uacute;ltiples documentos y servicios";
 choices[24][1] = "En el dise&ntilde;o de la capa de datos se puede disponer de uno o m&aacute;s or&iacute;genes de datos de tipos diferentes";
 choices[24][2] = "Se facilita el mantenimiento de la aplicaci&oacute;n si los componentes l&oacute;gicos de acceso a datos invocan a otros componentes l&oacute;gicos de acceso a datos";
 choices[24][3] = "Los componentes de interfaz de usuario no pueden restringir los tipos de entrada de datos, ya que esto &uacute;nicamente se permite en la base de datos";
 answers[24] = choices[24][1];
 units[24] = "59,115";
 comments[24] = "Id Pregunta: 4211. ";


//  Id pregunta: 4221 AÃ±o de creación de pregunta: 2006-01-01
 questions[25]= "26)  Indique cu&aacute;l de las siguientes afirmaciones sobre los lenguajes RDF y OWL empleados en la web sem&aacute;ntica es cierta";
 choices[25]= new Array();
 choices[25][0] = "La codificaci&oacute;n de un grafo RDF en forma de sentencias RDF debe ser siempre un documento XML bien formado";
 choices[25][1] = "La codificaci&oacute;n de un grafo RDF en forma de sentencias RDF debe ser siempre un documento XML v&aacute;lido";
 choices[25][2] = "En OWL DL, una clase no puede ser instancia de otra clase";
 choices[25][3] = "OWL Full ofrece garant&iacute;as computacionales de completitud";
 answers[25] = choices[25][2];
 units[25] = "69";
 comments[25] = "Id Pregunta: 4221. NULL";


//  Id pregunta: 4380 AÃ±o de creación de pregunta: 2007-01-01
 questions[26]= "27)  Un sistema pide a los usuarios c&oacute;digo de usuario y clave para identificarse. Los datos de los usuarios se almacenan en la base de datos, a excepci&oacute;n de las claves que se guardan en un fichero encriptado del sistema, que se actualiza cuando los usuarios cambian su clave. Este sistema ha demostrado ser lento y poco seguro. Se&ntilde;ale la opci&oacute;n m&aacute;s adecuada para mejorarlo:";
 choices[26]= new Array();
 choices[26][0] = "Indexar el fichero para que el acceso sea m&aacute;s r&aacute;pido.";
 choices[26][1] = "Guardar las claves encriptadas en un campo de la tabla de usuarios.";
 choices[26][2] = "Dividir el fichero en varios ficheros para mejorar el acceso, guardando en un campo de la tabla de usuarios el nombre del fichero donde reside la clave de cada usuario.";
 choices[26][3] = "No guardar la clave, gener&aacute;ndola mediante una funci&oacute;n hash aplicada al c&oacute;digo.";
 answers[26] = choices[26][1];
 units[26] = "73";
 comments[26] = "Id Pregunta: 4380. ";


//  Id pregunta: 4846 AÃ±o de creación de pregunta: 2007-01-01
 questions[27]= "28)  &iquest;Cu&aacute;l de los siguientes NO es un formato v&aacute;lido para el empaquetamiento de aplicaciones en Java EE (Java Enterprise Edition)?";
 choices[27]= new Array();
 choices[27][0] = "WAR (Web Archive)";
 choices[27][1] = "EAR (Enterprise Archive)";
 choices[27][2] = "BAR (Bean Archive)";
 choices[27][3] = "JAR (Java Archive)";
 answers[27] = choices[27][2];
 units[27] = "60";
 comments[27] = "Id Pregunta: 4846. NULL";


//  Id pregunta: 4880 AÃ±o de creación de pregunta: 2007-01-01
 questions[28]= "29)  &iquest;Cu&aacute;l de los siguientes apartados de la especificaci&oacute;n 7816 de ISO/IEC (International Standards Organization /International Electrotechnical Commission) relativa a tarjetas inteligentes recoge sus especificaciones el&eacute;ctricas yprotocolos de comunicaci&oacute;n?";
 choices[28]= new Array();
 choices[28][0] = "7816-2";
 choices[28][1] = "7816-3";
 choices[28][2] = "7816-4";
 choices[28][3] = "7816-5";
 answers[28] = choices[28][1];
 units[28] = "73";
 comments[28] = "Id Pregunta: 4880. ";


//  Id pregunta: 5001 AÃ±o de creación de pregunta: 2003-01-01
 questions[29]= "30)  &iquest;Qu&eacute; es una aplicaci&oacute;n CRM en un sitio de e-commerce interactivo?:";
 choices[29]= new Array();
 choices[29][0] = "Es la aplicaci&oacute;n usada para administrar la relaci&oacute;n con los clientes, describir perfiles de compras y dise&ntilde;arcampa&ntilde;as de marketing directo on-line";
 choices[29][1] = "Es el Cargo Resource Management, o aplicaci&oacute;n utilizada para gestionar los recursos de carga en las ventas";
 choices[29][2] = "Es el programa que se ejecuta al recibir una petici&oacute;n de una p&aacute;gina web din&aacute;mica";
 choices[29][3] = "Es el Catalog Resource Management, o aplicaci&oacute;n que genera un catalogo on-line de los productosdisponibles para la venta";
 answers[29] = choices[29][0];
 units[29] = "70";
 comments[29] = "Id Pregunta: 5001. Examen TIC A 2007";


//  Id pregunta: 5004 AÃ±o de creación de pregunta: 2003-01-01
 questions[30]= "31)  &iquest;Cu&aacute;l de estas afirmaciones sobre accesibilidad es cierta de acuerdo con las gu&iacute;as del W3C?";
 choices[30]= new Array();
 choices[30][0] = "Una p&aacute;gina web accesible debe tener textos equivalentes para cualquier elemento no textual";
 choices[30][1] = "Un p&aacute;gina web accesible debe contener solo texto";
 choices[30][2] = "Una p&aacute;gina web accesible no debe utilizar colores";
 choices[30][3] = "Una p&aacute;gina web accesible debe utilizar un &uacute;nico tipo de letra establecido en estas gu&iacute;as";
 answers[30] = choices[30][0];
 units[30] = "39";
 comments[30] = "Id Pregunta: 5004. Examen TIC A 2007";


//  Id pregunta: 5444 AÃ±o de creación de pregunta: 2003-01-01
 questions[31]= "32)  Un programa escrito Java puede ejecutarse en cualquier plataforma porque ";
 choices[31]= new Array();
 choices[31][0] = "el lenguaje Java se deriva de C++.";
 choices[31][1] = "la m&aacute;quina virtual de Java (JVM) interpreta el programa para cada sistema operativo";
 choices[31][2] = "el compilador es id&eacute;ntico al de C++.";
 choices[31][3] = "porque la APIs de Java han sido dise&ntilde;adas con ese fin";
 answers[31] = choices[31][1];
 units[31] = "60";
 comments[31] = "Id Pregunta: 5444. Castilla y Le&oacute;n";


//  Id pregunta: 5492 AÃ±o de creación de pregunta: 2003-01-01
 questions[32]= "33)  Respecto al DataSet de ADO.NET, se&ntilde;ala la falsa ";
 choices[32]= new Array();
 choices[32][0] = "se puedeutilizar con m&uacute;ltiples y distintos or&iacute;genes, excepto XML, que es su principal carencia";
 choices[32][1] = "Se compone de uno o mas DataTable";
 choices[32][2] = "Reproduce los elementos propios de un modelo de datos relacional";
 choices[32][3] = "est&aacute; expresamente dise&ntilde;ado para el acceso adatos independientemente del origen de datos. ";
 answers[32] = choices[32][0];
 units[32] = "59";
 comments[32] = "Id Pregunta: 5492. ";


//  Id pregunta: 5555 AÃ±o de creación de pregunta: 2003-01-01
 questions[33]= "34)  La prioridad de un punto de verifiaci&oacute;n de las pautas de accesibilidad al contenido, que permite que un desarrollador pueda satisfacer dicho punto, en otro caso uno o m&aacute;s usuarios encontrar&aacute;n alguna dificultad para acceder a la informaci&oacute;n, &iquest;es Prioridad? ";
 choices[33]= new Array();
 choices[33][0] = "1";
 choices[33][1] = "2";
 choices[33][2] = "3";
 choices[33][3] = "4";
 answers[33] = choices[33][2];
 units[33] = "39";
 comments[33] = "Id Pregunta: 5555. ";


//  Id pregunta: 5710 AÃ±o de creación de pregunta: 2009-01-01
 questions[34]= "35)  En las iniciales IDABC, la &quot;I&quot; y la &quot;D&quot; corresonden a:";
 choices[34]= new Array();
 choices[34][0] = "Innovative y Delivery";
 choices[34][1] = "Interoperable y Delivery";
 choices[34][2] = "Innovative y Development";
 choices[34][3] = "Interoperable y Development";
 answers[34] = choices[34][1];
 units[34] = "40";
 comments[34] = "Id Pregunta: 5710. ";


//  Id pregunta: 5745 AÃ±o de creación de pregunta: 2009-01-01
 questions[35]= "36)  Respecto al algoritmo DSA, &iquest;cu&aacute;l de estas afirmaciones es falsa?";
 choices[35]= new Array();
 choices[35][0] = "Sirve para firmar documentos";
 choices[35][1] = "Sirve para autenticar";
 choices[35][2] = "Sirve para cifrar";
 choices[35][3] = "Es un est&aacute;ndar de FIPS para firmas digitales";
 answers[35] = choices[35][2];
 units[35] = "73";
 comments[35] = "Id Pregunta: 5745. ";


//  Id pregunta: 5883 AÃ±o de creación de pregunta: 2009-01-01
 questions[36]= "37)  &iquest;Qu&eacute; es WebDAV?";
 choices[36]= new Array();
 choices[36][0] = "Protocolo de acceso y edici&oacute;n de carpetas mediante HTTP";
 choices[36][1] = "Sistema web de creaci&oacute;n de formularios";
 choices[36][2] = "Sistema web seguro de compartici&oacute;n de procesamiento";
 choices[36][3] = "Sistema web de mensajer&iacute;a y alertas";
 answers[36] = choices[36][0];
 units[36] = "73";
 comments[36] = "Id Pregunta: 5883. MAP 2008 A1";


//  Id pregunta: 6194 AÃ±o de creación de pregunta: 2010-01-01
 questions[37]= "38)  El Real Decreto 1671/2009 tiene como &aacute;mbito";
 choices[37]= new Array();
 choices[37][0] = "La Administraci&oacute;n General del Estado";
 choices[37][1] = "La Administraci&oacute;n General del Estado, as&iacute; como los organismos vinculados o dependientes de &eacute;sta";
 choices[37][2] = "La Administraci&oacute;n General del Estado, los organismos vinculados o dependientes de &eacute;sta, las Comunidades Aut&oacute;nomas y los Entes Locales";
 choices[37][3] = "Todas las Administraciones P&uacute;blicas";
 answers[37] = choices[37][1];
 units[37] = "43";
 comments[37] = "Id Pregunta: 6194. Articulo 1";


//  Id pregunta: 6234 AÃ±o de creación de pregunta: 2010-01-01
 questions[38]= "39)  En el framwork .NET, la herramienta de desarrollo compila el c&oacute;digo fuente de cualquiera de los lenguajes soportados por .NET a un c&oacute;digo intermedio, inicialmente conocido como MSIL y actualmente llamado:";
 choices[38]= new Array();
 choices[38][0] = "CIL";
 choices[38][1] = "CLI";
 choices[38][2] = "JIT";
 choices[38][3] = "CLR";
 answers[38] = choices[38][0];
 units[38] = "59,115";
 comments[38] = "Id Pregunta: 6234. ";


//  Id pregunta: 6242 AÃ±o de creación de pregunta: 2010-01-01
 questions[39]= "40)  &iquest;Cu&aacute;l de las siguientes APIs de JEE especifica la gesti&oacute;n de transacciones a trav&eacute;s de sistemas distribuidos?";
 choices[39]= new Array();
 choices[39][0] = "JNDE";
 choices[39][1] = "JNI";
 choices[39][2] = "JTA";
 choices[39][3] = "JAX";
 answers[39] = choices[39][2];
 units[39] = "60";
 comments[39] = "Id Pregunta: 6242. TICB-2009, bloque desarrollo";


//  Id pregunta: 6258 AÃ±o de creación de pregunta: 2010-01-01
 questions[40]= "41)  &iquest;Cu&aacute;l de la lista siguiente responde a patrones creacionales de GoF (Gang of Four)?";
 choices[40]= new Array();
 choices[40][0] = "Facade, Composite, Bridge";
 choices[40][1] = "Strategy, Proxy, Iterator";
 choices[40][2] = "Builder, Abstract Factory, Prototype";
 choices[40][3] = "MVC, Session, Router";
 answers[40] = choices[40][2];
 units[40] = "60";
 comments[40] = "Id Pregunta: 6258. TICB-2009, bloque desarrollo";


//  Id pregunta: 6363 AÃ±o de creación de pregunta: 2010-01-01
 questions[41]= "42)  &iquest;Cu&aacute;l de los siguientes es un principio del Esquema Nacional de Seguridad?";
 choices[41]= new Array();
 choices[41][0] = "Enfoque de soluciones de seguridad multilaterales";
 choices[41][1] = "Car&aacute;cter multidimensional de la seguridad";
 choices[41][2] = "Reevaluaci&oacute;n peri&oacute;dica";
 choices[41][3] = "Todos los anteriores";
 answers[41] = choices[41][2];
 units[41] = "43";
 comments[41] = "Id Pregunta: 6363. Art&iacute;culo 4 ENS";


//  Id pregunta: 6371 AÃ±o de creación de pregunta: 2010-01-01
 questions[42]= "43)  En el Esquema Nacional de Seguridad, las dimensiones de seguridad se adscribir&aacute;n a uno de los siguientes niveles:";
 choices[42]= new Array();
 choices[42][0] = "Bajo, Medio o Alto";
 choices[42][1] = "Limitado, Grave o Muy Grave";
 choices[42][2] = "B&aacute;sico, Medio o Alto";
 choices[42][3] = "B&aacute;sico, Medio, Alto o Muy Alto";
 answers[42] = choices[42][0];
 units[42] = "43";
 comments[42] = "Id Pregunta: 6371. Anexo I ENS. Y las categor&iacute;as pueden ser b&aacute;sica, media o alta.";


//  Id pregunta: 6375 AÃ±o de creación de pregunta: 2010-01-01
 questions[43]= "44)  Seg&uacute;n el Esquema Nacional de Interoperabilidad, un esquema abierto es aquel que cumple las siguientes condiciones:";
 choices[43]= new Array();
 choices[43][0] = "Que sea p&uacute;blico y su utilizaci&oacute;n sea disponible de manera gratuita o a un coste que no suponga una dificultad de acceso, y que su uso y aplicaci&oacute;n no est&eacute; condicionado al pago de un derecho de propiedad intelectual o industrial.";
 choices[43][1] = "Que sea p&uacute;blico y su utilizaci&oacute;n sea disponible de manera gratuita, y que su uso y aplicaci&oacute;n no est&eacute; condicionado al pago de un derecho de propiedad intelectual o industrial.";
 choices[43][2] = "Que sea p&uacute;blico y su utilizaci&oacute;n sea disponible de manera gratuita, y que su uso y aplicaci&oacute;n no est&eacute; condicionado al pago de un derecho de propiedad intelectual o industrial, o que este pago no suponga una dificultad de acceso.";
 choices[43][3] = "Que sea p&uacute;blico y su utilizaci&oacute;n sea disponible de manera gratuita o a un coste que no suponga una dificultad de acceso, y que su uso y aplicaci&oacute;n no est&eacute; condicionado al pago de un derecho de propiedad intelectual o industrial o que este pago no suponga una dificultad de acceso.";
 answers[43] = choices[43][0];
 units[43] = "43";
 comments[43] = "Id Pregunta: 6375. Anexo ENI";


//  Id pregunta: 6388 AÃ±o de creación de pregunta: 2010-01-01
 questions[44]= "45)  En relaci&oacute;n a las sedes electr&oacute;nicas derivadas, o subsedes, se&ntilde;ale la respuesta incorrecta:";
 choices[44]= new Array();
 choices[44][0] = "Las sedes electr&oacute;nicas derivadas, o subsedes, deber&aacute;n resultar accesibles desde la direcci&oacute;n electr&oacute;nica de la sede principal.";
 choices[44][1] = "Las sedes electr&oacute;nicas derivadas, o subsedes podran ser accesibles mediante acceso electr&oacute;nico directo.";
 choices[44][2] = "Su &aacute;mbito de aplicaci&oacute;n comprender&aacute; &oacute;rgano u &oacute;rganos con rango, al menos, de direcci&oacute;n general.";
 choices[44][3] = "Las sedes electr&oacute;nicas derivadas deber&aacute;n cumplir los mismos requisitos que las sedes electr&oacute;nicas principales, salvo en lo relativo a la publicaci&oacute;n de la orden o resoluci&oacute;n por la que se crea, que se realizar&aacute; a trav&eacute;s de la sede de la que dependan.";
 answers[44] = choices[44][2];
 units[44] = "43";
 comments[44] = "Id Pregunta: 6388. Art&iacute;culo 4 RD 1671/2009";


//  Id pregunta: 6395 AÃ±o de creación de pregunta: 2010-01-01
 questions[45]= "46)  &iquest;Cu&aacute;l de los siguientes medios no ser&iacute;a valido, en ning&uacute;n caso, para la pr&aacute;ctica de notificaciones por medios electr&oacute;nicos, en los &oacute;rganos y organismos p&uacute;blicos de la Administraci&oacute;n General del Estado, de acuerdo al RD 1671/2009?";
 choices[45]= new Array();
 choices[45][0] = "Direcci&oacute;n electr&oacute;nica habilitada";
 choices[45][1] = "Comparecencia electr&oacute;nica en la sede";
 choices[45][2] = "Sistema de correo electr&oacute;nico con acuse de recibo que deje constancia de la recepci&oacute;n";
 choices[45][3] = "Todos los anteriores son v&aacute;lidos";
 answers[45] = choices[45][3];
 units[45] = "43";
 comments[45] = "Id Pregunta: 6395. Art&iacute;culo 35 RD 1671/2009";


//  Id pregunta: 6423 AÃ±o de creación de pregunta: 2010-01-01
 questions[46]= "47)  &iquest;Cu&aacute;l de las siguientes personas puso en marcha el W3C?";
 choices[46]= new Array();
 choices[46][0] = "Tim O'Reilly";
 choices[46][1] = "Vinton Cerf";
 choices[46][2] = "Tim Berners-Lee";
 choices[46][3] = "Ninguna de las anteriores";
 answers[46] = choices[46][2];
 units[46] = "39";
 comments[46] = "Id Pregunta: 6423. NULL";


//  Id pregunta: 7146 AÃ±o de creación de pregunta: 2010-01-01
 questions[47]= "48)  &iquest;Qu&eacute; art&iacute;culo de la Ley 11/2007 de 22 de Junio hace referencia a los Esquemas Nacionales de Interoperabilidad y Seguridad?";
 choices[47]= new Array();
 choices[47][0] = "Art&iacute;culo 52";
 choices[47][1] = "Art&iacute;culo 44";
 choices[47][2] = "Art&iacute;culo 42";
 choices[47][3] = "Art&iacute;culo 50";
 answers[47] = choices[47][2];
 units[47] = "43";
 comments[47] = "Id Pregunta: 7146. Examen TIC B 2009";


//  Id pregunta: 7172 AÃ±o de creación de pregunta: 2010-01-01
 questions[48]= "49)  En un documento XML, la parte donde se definen los enlaces a otros documentos, a c&oacute;digo ejecutable, etc. Es:";
 choices[48]= new Array();
 choices[48][0] = "DTD";
 choices[48][1] = "XSL";
 choices[48][2] = "XLL";
 choices[48][3] = "DHTML";
 answers[48] = choices[48][2];
 units[48] = "69";
 comments[48] = "Id Pregunta: 7172. Examen TIC B 2009";


//  Id pregunta: 7317 AÃ±o de creación de pregunta: 2010-01-01
 questions[49]= "50)  Cu&aacute;l de los siguientes no forma parte del Framework o Marco de Trabajo .NET:";
 choices[49]= new Array();
 choices[49][0] = "MSIL";
 choices[49][1] = "JVM";
 choices[49][2] = "Biblioteca de Clases Base o BCL";
 choices[49][3] = "CLR (Common Language Runtime)";
 answers[49] = choices[49][1];
 units[49] = "59";
 comments[49] = "Id Pregunta: 7317. NULL";


//  Id pregunta: 7779 AÃ±o de creación de pregunta: 2010-01-01
 questions[50]= "51)   Seg&uacute;n la recomendaci&oacute;n X.509 v.3:";
 choices[50]= new Array();
 choices[50][0] = " La autenticaci&oacute;n simple conlleva el uso exclusivo de contrase&ntilde;as transmitidas en claro.";
 choices[50][1] = " La autenticaci&oacute;n robusta (strong) de un sentido conlleva siempre el empleo de funciones resumen (hash).";
 choices[50][2] = " La autenticaci&oacute;n robusta (strong) de dos sentidos comporta siempre el uso de credenciales obtenidas mediante t&eacute;cnicas criptogr&aacute;ficas.";
 choices[50][3] = " La autenticaci&oacute;n robusta (strong) de tres sentidos debe incorporar siempre sellos de tiempo.";
 answers[50] = choices[50][2];
 units[50] = "73";
 comments[50] = "Id Pregunta: 7779. Map 2005";


//  Id pregunta: 8199 AÃ±o de creación de pregunta: 2011-01-01
 questions[51]= "52)  Comparando el m&eacute;todo HTTP GET con el m&eacute;todo HTTP POST, se cumple que: ";
 choices[51]= new Array();
 choices[51][0] = "S&oacute;lo HTTP GET est&aacute; definido como idempotente. ";
 choices[51][1] = "Ambos requieren declaraci&oacute;n expl&iacute;cita al usarlos en un tag HTML form. ";
 choices[51][2] = "S&oacute;lo HTTP POST puede soportar el env&iacute;o de varios par&aacute;metros en un form data set en una misma petici&oacute;n. ";
 choices[51][3] = "S&oacute;lo HTTP POST permite que el agente de usuario haga uso del mecanismo de conexiones persistentes del protocolo.";
 answers[51] = choices[51][0];
 units[51] = "69";
 comments[51] = "Id Pregunta: 8199. Examen TIC A1 2010";


//  Id pregunta: 8243 AÃ±o de creación de pregunta: 2011-01-01
 questions[52]= "53)  &iquest;Cu&aacute;l de las siguientes funciones NO corresponde al Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica seg&uacute;n lo recogido en la Ley 11/2007 y modificaciones normativas posteriores?:";
 choices[52]= new Array();
 choices[52][0] = "Asegurar la cooperaci&oacute;n entre las administraciones p&uacute;blicas para proporcionar al ciudadano informaci&oacute;n clara, actualizada e inequivoca.";
 choices[52][1] = "Velar por el cumplimiento de los fines y principios establecidos en la Ley 11/2007";
 choices[52][2] = "Proponer planes programas conjuntos de actuaci&oacute;n para impulsar el desarrollo de la Administraci&oacute;n Electr&oacute;nica en Espa&ntilde;a";
 choices[52][3] = "Aprobar los Cat&aacute;logos de determinaci&oacute;n de tipo referidos a bienes y servicios electr&oacute;nicos.";
 answers[52] = choices[52][3];
 units[52] = "43";
 comments[52] = "Id Pregunta: 8243. Examen TIC A1 2010";


//  Id pregunta: 8402 AÃ±o de creación de pregunta: 2011-01-01
 questions[53]= "54)  El directorio de Sedes Electr&oacute;nicas de la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos es gestionado por:";
 choices[53]= new Array();
 choices[53][0] = "La Presidencia del Gobierno";
 choices[53][1] = "El Ministerio de la Presidencia.";
 choices[53][2] = "La Red SARA. ";
 choices[53][3] = "La Comisi&oacute;n de Estrategia TIC";
 answers[53] = choices[53][1];
 units[53] = "43";
 comments[53] = "Id Pregunta: 8402. Examen TIC A2 2010. Actualizada referencia a CETIC por Disp. Ad. 2&ordf; RD 806/2014.";


//  Id pregunta: 8424 AÃ±o de creación de pregunta: 2011-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l de los siguientes grupos de medidas de seguridad no se define en el anexo II del Esquema Nacional de Seguridad, Real Decreto 3/2010 del 8 de enero?";
 choices[54]= new Array();
 choices[54][0] = "Medidas de protecci&oacute;n";
 choices[54][1] = "Marco organizativo";
 choices[54][2] = "Marco operacional";
 choices[54][3] = "Marco tecnol&oacute;gico";
 answers[54] = choices[54][3];
 units[54] = "43";
 comments[54] = "Id Pregunta: 8424. NULL";


//  Id pregunta: 8465 AÃ±o de creación de pregunta: 2011-01-01
 questions[55]= "56)  &iquest;Cu&aacute;l de las siguientes NO es una etiqueta HTML?:";
 choices[55]= new Array();
 choices[55][0] = "&lt;em&gt;&lt;/em&gt;";
 choices[55][1] = "&lt;meta&gt;";
 choices[55][2] = "&lt;tc&gt;&lt;/tc&gt;";
 choices[55][3] = "&lt;body&gt;&lt;/body&gt;";
 answers[55] = choices[55][2];
 units[55] = "69";
 comments[55] = "Id Pregunta: 8465. Analista Ayto. Madrid 2010";


//  Id pregunta: 8782 AÃ±o de creación de pregunta: 2011-01-01
 questions[56]= "57)  Seg&uacute;n la Ley 11/2007, de 22 de junio, de Acceso Electr&oacute;nico de los Ciudadanos a los Servicios P&uacute;blicos, se entiende por documento electr&oacute;nico:";
 choices[56]= new Array();
 choices[56][0] = "El conjunto de datos en forma electr&oacute;nica, consignados junto a otros o asociados con ellos, que pueden ser utilizados como medio de identificaci&oacute;n del firmante.";
 choices[56][1] = "El conjunto de elementos intervinientes en la creaci&oacute;n de una firma electr&oacute;nica.";
 choices[56][2] = "La informaci&oacute;n de cualquier naturaleza en forma electr&oacute;nica, archivada en un soporte electr&oacute;nico seg&uacute;n un formato determinado y susceptible de identificaci&oacute;n y tratamiento diferenciado.";
 choices[56][3] = "El documento firmado electr&oacute;nicamente por un prestador de servicios de certificaci&oacute;n que vincula unos datos de verificaci&oacute;n de firma avanzada y confirma su identidad.";
 answers[56] = choices[56][2];
 units[56] = "43";
 comments[56] = "Id Pregunta: 8782. Examen UPM A2 2011";


//  Id pregunta: 8801 AÃ±o de creación de pregunta: 2011-01-01
 questions[57]= "58)  Con relaci&oacute;n a la programaci&oacute;n en java, &iquest;como se denomina el paquete que comprende una serie de clases que permiten crear y organizar ventanas, implementar componentes gr&aacute;ficas de la interfaz, mediante eventos, dibujar textos y gr&aacute;ficos, procesar im&aacute;genes y acceder a cada sistema nativo de ventanas?";
 choices[57]= new Array();
 choices[57][0] = "WT (Window Toolkit)";
 choices[57][1] = "AWT (Abstract Window Toolkit)";
 choices[57][2] = "JWS (Java Window Set)";
 choices[57][3] = "WS (Windows Set)";
 answers[57] = choices[57][1];
 units[57] = "60";
 comments[57] = "Id Pregunta: 8801. Examen UPM A2 2011";


//  Id pregunta: 8811 AÃ±o de creación de pregunta: 2011-01-01
 questions[58]= "59)  Una p&aacute;gina ASP mezcla en el mismo archivo secuencias de comandos con c&oacute;digo HTML est&aacute;ndar con las secuencias de comandos asp mediante los delimitadores:";
 choices[58]= new Array();
 choices[58][0] = "&lt;% y %&gt;";
 choices[58][1] = "&lt;SCRIPT LANGUAGE=&quot;ASPScript&quot;&gt; &lt;/SCRIPl&gt;";
 choices[58][2] = "&lt;!- --&gt;";
 choices[58][3] = "Los comandos ASP no se mezclan en el mismo archive que el c&oacute;digo HTML, sino que se importan desde otro archivo";
 answers[58] = choices[58][0];
 units[58] = "59, 115";
 comments[58] = "Id Pregunta: 8811. Examen UPM A2 2011";


//  Id pregunta: 8816 AÃ±o de creación de pregunta: 2011-01-01
 questions[59]= "60)  Una de las partes fundamentales de ADO.NET son los DataSets, los cuales contienen una serie de objetos formando una jerarqu&iacute;a, &iquest;cu&aacute;les son v&aacute;lidos?";
 choices[59]= new Array();
 choices[59][0] = "DataSet, DataTable, DataView, DataColumn, DataRow, DataRowView, DataRelation, Constraint";
 choices[59][1] = "DataSet, DataTable, DataView, DataColumn, DataRow, pero no DataRowView, ni DataRelation, ni Constraint";
 choices[59][2] = "ADOSet, ADOTable, ADOView, ADOColumn, ADORow, ADORowView, ADORelation, Constraint";
 choices[59][3] = "ADOSet, ADOTable, ADOView, ADOColumn, ADORow, pero no ADORowView, ni ADORelation, ni Constraint";
 answers[59] = choices[59][0];
 units[59] = "59";
 comments[59] = "Id Pregunta: 8816. Examen UPM A2 2011";


//  Id pregunta: 8915 AÃ±o de creación de pregunta: 2011-01-01
 questions[60]= "61)  Indicar cu&aacute;l de las siguientes afirmaciones es cierta en relaci&oacute;n con XML:";
 choices[60]= new Array();
 choices[60][0] = "Es un lenguaje de programaci&oacute;n para aplicaciones basadas en Internet.";
 choices[60][1] = "Es un lenguaje de marcado que, al igual que HTML, hace uso de etiquetas (&ldquo;tags&rdquo;).";
 choices[60][2] = "Es un lenguaje independiente de plataforma cuyo objetivo es definir c&oacute;mo un navegador est&aacute;ndar debe presentar la informaci&oacute;n definida en HTML.";
 choices[60][3] = "Es un lenguaje definido por Microsoft para implementar su arquitectura orientada a servicios";
 answers[60] = choices[60][1];
 units[60] = "69";
 comments[60] = "Id Pregunta: 8915. Operador Ayto. Madrid 2010";


//  Id pregunta: 8932 AÃ±o de creación de pregunta: 2011-01-01
 questions[61]= "62)  &iquest;Cu&aacute;l de las siguientes leyes aplica en las relaciones de los ciudadanos con el Ministerio de Justicia?";
 choices[61]= new Array();
 choices[61][0] = "Ley 18/2011";
 choices[61][1] = "Ley 11/2007";
 choices[61][2] = "Las dos anteriores";
 choices[61][3] = "Ninguna de las anteriores";
 answers[61] = choices[61][1];
 units[61] = "43";
 comments[61] = "Id Pregunta: 8932. ";


//  Id pregunta: 8935 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  De acuerdo con la ley 18/2011, &iquest;cu&aacute;l no es un derecho de los profesionales de la justicia en relaci&oacute;n con la utilizaci&oacute;n de los medios electr&oacute;nicos en la actividad judicial?";
 choices[62]= new Array();
 choices[62][0] = "A obtener copias electr&oacute;nicas de los documentos que formen parte de procedimientos en los que sean representantes procesales de la parte personada";
 choices[62][1] = "A utilizar los sistemas de firma electr&oacute;nica del Documento Nacional de Identidad o cualquier otro reconocido, siempre que dicho sistema le identifique de forma un&iacute;voca como profesional";
 choices[62][2] = "A obtener copias electr&oacute;nicas de los documentos electr&oacute;nicos que formen parte de procedimientos en los que acrediten inter&eacute;s leg&iacute;timo";
 choices[62][3] = "Todos los anteriores lo son";
 answers[62] = choices[62][0];
 units[62] = "43";
 comments[62] = "Id Pregunta: 8935. ";


//  Id pregunta: 8945 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  &iquest;Cu&aacute;l de los siguientes es un principio b&aacute;sico del Esquema Nacional de Interoperabilidad?";
 choices[63]= new Array();
 choices[63][0] = "Enfoque de soluciones multilaterales";
 choices[63][1] = "Utilizaci&oacute;n de la Red SARA como Red de comunicaciones de las Administraciones p&uacute;blicas espa&ntilde;olas";
 choices[63][2] = "Interoperabilidad sem&aacute;ntica";
 choices[63][3] = "Ninguno de los anteriores";
 answers[63] = choices[63][0];
 units[63] = "43";
 comments[63] = "Id Pregunta: 8945. NULL";


//  Id pregunta: 9066 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre el expediente electr&oacute;nico es FALSO seg&uacute;n el RD 1671/2009?";
 choices[64]= new Array();
 choices[64][0] = "Los expedientes electr&oacute;nicos podr&aacute;n incluir otros expedientes electr&oacute;nicos";
 choices[64][1] = "El foliado de los expedientes electr&oacute;nicos se llevar&aacute; a cabo mediante un &iacute;ndice electr&oacute;nico, firmado electr&oacute;nicamente mediante firma electr&oacute;nica avanzada";
 choices[64][2] = "La estructura y formato de los expedientes de los expedientes electr&oacute;nicos se ajustar&aacute;n a lo que diga el Esquema Nacional de Interoperabilidad";
 choices[64][3] = "Los expedientes electr&oacute;nicos dispondr&aacute;n de un c&oacute;digo que permita su identificaci&oacute;n un&iacute;voca por cualquier &oacute;rgano de la Administraci&oacute;n";
 answers[64] = choices[64][1];
 units[64] = "43";
 comments[64] = "Id Pregunta: 9066. Art. 53.2b  El foliado de los expedientes electr&oacute;nicos se llevar&aacute; a cabo mediante un &iacute;ndice electr&oacute;nico, firmado electr&oacute;nicamente mediante los sistemas previstos en la Ley 11/2007.";


//  Id pregunta: 9071 AÃ±o de creación de pregunta: 2013-01-01
 questions[65]= "66)  Se&ntilde;ale la afirmaci&oacute;n FALSA:";
 choices[65]= new Array();
 choices[65][0] = "El acr&oacute;nimo XAG se refiere a XML Accesibility Guidelines. ";
 choices[65][1] = "En las normas WCAG 2.0, el nivel se otorga a nivel de procesos y subprocesos. ";
 choices[65][2] = "El W3C publica gram&aacute;ticas HTML que deben satisfacerse para lograr el nivel AA en las normas WCAG 2.0. ";
 choices[65][3] = "WAI-ARIA es un acr&oacute;nimo que significa Web Accesibility Initiative - Accesible Rich Internet Applications. ";
 answers[65] = choices[65][1];
 units[65] = "39";
 comments[65] = "Id Pregunta: 9071. ";


//  Id pregunta: 9168 AÃ±o de creación de pregunta: 2013-01-01
 questions[66]= "67)  Modos de funcionamiento de la tecnolog&iacute;a NFC(near field communicator):";
 choices[66]= new Array();
 choices[66][0] = "Independiente/Infraestructura";
 choices[66][1] = "Activo/Pasivo";
 choices[66][2] = "Manual/Continuo";
 choices[66][3] = "Modo voz/Modo voz + datos";
 answers[66] = choices[66][1];
 units[66] = "70";
 comments[66] = "Id Pregunta: 9168. Examen TIC A2 2011";


//  Id pregunta: 9592 AÃ±o de creación de pregunta: 2013-01-01
 questions[67]= "68)  El c&oacute;mputo de plazos, imputables tanto a los interesados como a las Administraciones P&uacute;blicas, seg&uacute;n se establece en el art&iacute;culo 26 de la Ley 11/2007 se fija por:";
 choices[67]= new Array();
 choices[67][0] = "La fecha y hora oficial de la sede electr&oacute;nica de los servicios centrales, que deber&aacute; contar con las medidas de seguridad necesarias para garantizar su integridad y figurar visible";
 choices[67][1] = "La fecha y hora oficial de la sede electr&oacute;nica de acceso, que deber&aacute; contar con las medidas de seguridad necesarias para garantizar su integridad y figurar visible";
 choices[67][2] = "La fecha y hora oficial del Real Instituto y Observatorio de la Armada, que deber&aacute; contar con las medidas de seguridad necesarias para garantizar su integridad y figurar visible.";
 choices[67][3] = "La fecha y hora oficial de la sede electr&oacute;nica del Ministerio de Pol&iacute;tica Territorial y Administraci&oacute;n P&uacute;blica, que deber&aacute; contar con las medidas de seguridad necesarias para garantizar su integridad y figurar visible";
 answers[67] = choices[67][1];
 units[67] = "43";
 comments[67] = "Id Pregunta: 9592. Examen TIC A2 2011 interna";


//  Id pregunta: 9593 AÃ±o de creación de pregunta: 2013-01-01
 questions[68]= "69)  El Real Decreto 1671/2009, por el que se desarrolla parcialmente la Ley 11/2007, establece el contenido m&iacute;nimo de las sedes electr&oacute;nicas. Entre dicho contenido m&iacute;nimo est&aacute;:";
 choices[68]= new Array();
 choices[68][0] = "Medios disponibles para la formulaci&oacute;n de sugerencias y quejas.";
 choices[68][1] = "Identificaci&oacute;n de la direcci&oacute;n electr&oacute;nica del responsable t&eacute;cnico de la sede.";
 choices[68][2] = "&Aacute;mbito de aplicaci&oacute;n de la sede, que no podr&aacute; ser la totalidad del Ministerio u organismo p&uacute;blico.";
 choices[68][3] = "Identificaci&oacute;n de los canales de acceso a los servicios disponibles en la sede, los cuales no podr&aacute;n tratarse, en ning&uacute;n caso, de tel&eacute;fonos y oficinas, sino de canales exclusivamente electr&oacute;nicos. ";
 answers[68] = choices[68][0];
 units[68] = "43";
 comments[68] = "Id Pregunta: 9593. Examen TIC A2 2011 interna";


//  Id pregunta: 9808 AÃ±o de creación de pregunta: 2014-01-01
 questions[69]= "70)  Se&ntilde;alar el nombre de la aplicaci&oacute;n de generaci&oacute;n de copia aut&eacute;ntica en papel de documentos con firma electr&oacute;nica y de justificantes de firma electr&oacute;nica, que el Ministerio de Hacienda y AAPP ofrece en modelo federado:";
 choices[69]= new Array();
 choices[69][0] = "STORK";
 choices[69][1] = "eDocument";
 choices[69][2] = "eSign";
 choices[69][3] = "eVisor";
 answers[69] = choices[69][3];
 units[69] = "44";
 comments[69] = "Id Pregunta: 9808. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9962 AÃ±o de creación de pregunta: 2014-01-01
 questions[70]= "71)  Los dos componentes principales de ADO.NET para el acceso a los datos y su manipulaci&oacute;n son:";
 choices[70]= new Array();
 choices[70][0] = ".NET Framework Data Connectivity y ADO.NET DataSet";
 choices[70][1] = ".NET Framework Data Providers y ADO.NET ResultSet";
 choices[70][2] = ".NET Framework Data Connectivity y ADO.NET ResultSet";
 choices[70][3] = ".NET Framework Data Providers y ADO.NET DataSet";
 answers[70] = choices[70][3];
 units[70] = "59,115";
 comments[70] = "Id Pregunta: 9962. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";


//  Id pregunta: 9978 AÃ±o de creación de pregunta: 2014-01-01
 questions[71]= "72)  En el desarrollo de aplicaciones en .NET Framework disponemos de un Garbage Collector (recolector de basura). Indique cu&aacute;l de las siguientes afirmaciones es FALSA ";
 choices[71]= new Array();
 choices[71][0] = "La liberaci&oacute;n de un objeto en memoria es perfectamente posible sin intervenci&oacute;n expl&iacute;cita por parte del usuario ";
 choices[71][1] = "Para la liberaci&oacute;n expl&iacute;cita de memoria existen m&eacute;todos de finalizaci&oacute;n como Finalize() y Dispose()";
 choices[71][2] = "Se suele utilizar Dispose() cuando el objeto no se va a utilizar m&aacute;s definitivamente ";
 choices[71][3] = "Si se invoca expl&iacute;citamente el m&eacute;todo Dispose() de un objeto, este ser&aacute; liberado inmediatamente ";
 answers[71] = choices[71][3];
 units[71] = "59";
 comments[71] = "Id Pregunta: 9978. Examen TICA2, Xunta de GaliciA, 2011";


//  Id pregunta: 10158 AÃ±o de creación de pregunta: 2014-01-01
 questions[72]= "73)  El servicio que da respuesta a la implementaci&oacute;n de la medida CORA 3.00.002.8, &quot;Concentraci&oacute;n de la gesti&oacute;n, producci&oacute;n, impresi&oacute;n y distribuci&oacute;n de las notificaciones y comunicaciones postales en centros de impresi&oacute;n y ensobrado con dimensi&oacute;n &oacute;ptima&quot; se denomina:";
 choices[72]= new Array();
 choices[72][0] = "SNE";
 choices[72][1] = "NoTe";
 choices[72][2] = "Notific@";
 choices[72][3] = "GESNOTE";
 answers[72] = choices[72][2];
 units[72] = "44";
 comments[72] = "Id Pregunta: 10158. ";


//  Id pregunta: 10224 AÃ±o de creación de pregunta: 2014-01-01
 questions[73]= "74)  Para que la siguiente sentencia compile:float a = 100.21;I)&nbsp; Necesita hacer un casting a float: float a = (float) 100.21;II)&nbsp; Hay que colocar una f tras el valor num&eacute;rico: float a = 100.21f;III)&nbsp; Hay que prescindir de la fracci&oacute;n decimal: float a = 100;";
 choices[73]= new Array();
 choices[73][0] = "Compila bien sin cambios";
 choices[73][1] = "No compila, pero ninguna de las anteriores permite compilar";
 choices[73][2] = "S&oacute;lo es v&aacute;lida I)";
 choices[73][3] = "I), II) y III) son v&aacute;lidas";
 answers[73] = choices[73][3];
 units[73] = "60";
 comments[73] = "Id Pregunta: 10224. NULL";


//  Id pregunta: 10474 AÃ±o de creación de pregunta: 2014-01-01
 questions[74]= "75)  En el &aacute;mbito de los certificados X.509:";
 choices[74]= new Array();
 choices[74][0] = "La CA de la PKI debe proporcional protocolos de gesti&oacute;n de certificados (registro, recuperaci&oacute;n de claves, etc) dsiponibles online.";
 choices[74][1] = "Una CRL es una lista de certificados revocados con un timestamp que determina su fecha de emisi&oacute;n y firmada en todo caso por la CA que emite los certificados.";
 choices[74][2] = "Una CRL tiene un alcance que define el tipo de certificados que incluir&aacute; dicha lista.";
 choices[74][3] = "Un certificado se a&ntilde;ade a la CRL en la siguiente actualizaci&oacute;n seg&uacute;n la pol&iacute;tica de actualizaciones definida.";
 answers[74] = choices[74][3];
 units[74] = "73";
 comments[74] = "Id Pregunta: 10474. ";


//  Id pregunta: 10573 AÃ±o de creación de pregunta: 2015-01-01
 questions[75]= "76)  &iquest;A qu&eacute; corresponden las siglas STORK?";
 choices[75]= new Array();
 choices[75][0] = "Secure Transport Over bRoad toKens";
 choices[75][1] = "Security idenTity acrOss boRders linKed";
 choices[75][2] = "Safe idenTity fOr Roaming Knowledge";
 choices[75][3] = "Safe noTes stOring encRypted Keys";
 answers[75] = choices[75][1];
 units[75] = "44";
 comments[75] = "Id Pregunta: 10573. ";


//  Id pregunta: 10577 AÃ±o de creación de pregunta: 2015-01-01
 questions[76]= "77)  El Esquema Nacional de Interoperabilidad:";
 choices[76]= new Array();
 choices[76][0] = "Incluye criterios y recomendaciones de seguridad.";
 choices[76][1] = "Es parte del Esquema Nacional de Seguridad.";
 choices[76][2] = "Fue elaborado por la Conferencia Sectorial de Administraci&oacute;n P&uacute;blica.";
 choices[76][3] = "Considera la utilizaci&oacute;n de est&aacute;ndares cerrados o de uso limitado por los ciudadanos.";
 answers[76] = choices[76][0];
 units[76] = "44";
 comments[76] = "Id Pregunta: 10577. Art&iacute;culo 42, Ley 11/2007.";


//  Id pregunta: 10578 AÃ±o de creación de pregunta: 2015-01-01
 questions[77]= "78)  La red SARA:";
 choices[77]= new Array();
 choices[77][0] = "S&oacute;lo interconecta las Administraciones P&uacute;blicas Espa&ntilde;olas.";
 choices[77][1] = "S&oacute;lo interconecta la Administraci&oacute;n General del Estado.";
 choices[77][2] = "S&oacute;lo interconecta las Comunidades Aut&oacute;nomas entre s&iacute;.";
 choices[77][3] = "Interconecta las Administraciones P&uacute;blicas Espa&ntilde;olas e instituciones europeas.";
 answers[77] = choices[77][3];
 units[77] = "44";
 comments[77] = "Id Pregunta: 10578. ";


//  Id pregunta: 10604 AÃ±o de creación de pregunta: 2015-01-01
 questions[78]= "79)  SET es:";
 choices[78]= new Array();
 choices[78][0] = "Una tecnolog&iacute;a definida por MasterCard con el fin de verificar la identidad de los titulares que efect&uacute;an compras por Internet.";
 choices[78][1] = "Un sistema de micropagos.";
 choices[78][2] = "Un protocolo est&aacute;ndar para el pago remoto con tarjetas de cr&eacute;dito.";
 choices[78][3] = "Un negocio de comercio electr&oacute;nico que permite realizar pagos o transferencias monetarias a trav&eacute;s de Internet.";
 answers[78] = choices[78][2];
 units[78] = "70";
 comments[78] = "Id Pregunta: 10604. ";


//  Id pregunta: 10701 AÃ±o de creación de pregunta: 2015-01-01
 questions[79]= "80)  Seg&uacute;n la NTI de Documento Electr&oacute;nico &iquest;Se pueden utilizar formatos diferentes a los establecidos en la Norma T&eacute;cnica de Interoperabilidad de Cat&aacute;logo de est&aacute;ndares?";
 choices[79]= new Array();
 choices[79][0] = "Cuando existan particularidades que lo justifiquen.";
 choices[79][1] = "Cuando sea necesario para asegurar el valor probatorio del documento electr&oacute;nico.";
 choices[79][2] = "En ambos casos.";
 choices[79][3] = "En ning&uacute;n caso.";
 answers[79] = choices[79][2];
 units[79] = "43";
 comments[79] = "Id Pregunta: 10701. ";


//  Id pregunta: 10732 AÃ±o de creación de pregunta: 2015-01-01
 questions[80]= "81)  &iquest;En qu&eacute; a&ntilde;o se public&oacute; la Norma T&eacute;cnica de Interoperabilidad de Reutilizaci&oacute;n de recursos de la informaci&oacute;n?";
 choices[80]= new Array();
 choices[80][0] = "2010";
 choices[80][1] = "2011";
 choices[80][2] = "2013";
 choices[80][3] = "2015";
 answers[80] = choices[80][2];
 units[80] = "43";
 comments[80] = "Id Pregunta: 10732. ";


//  Id pregunta: 10804 AÃ±o de creación de pregunta: 2015-01-01
 questions[81]= "82)  &iquest;Cu&aacute;l de los siguientes conjuntos est&aacute; integrado en su totalidad por etiquetas que han sido incorporadas como novedad en el lenguaje HTML5?";
 choices[81]= new Array();
 choices[81][0] = "&lt;header&gt;, &lt;article&gt; y &lt;bdi&gt;";
 choices[81][1] = "&lt;head&gt;, &lt;foot&gt; y &lt;nav&gt;";
 choices[81][2] = "&lt;canvas&gt;, &lt;img&gt; y &lt;audio&gt;";
 choices[81][3] = "&lt;video&gt;, &lt;canvas&gt; y &lt;bdo&gt;";
 answers[81] = choices[81][0];
 units[81] = "69";
 comments[81] = "Id Pregunta: 10804. Examen GSI 2014";


//  Id pregunta: 10850 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  Los proveedores de datos .NET Framework incluyen un objeto DbConnection para conectarse al origen de datos. Se&ntilde;ale, entre las siguientes clases, cu&aacute;l NO pertenece a un proveedor de datos incluido en el .NET Framework 4.5:";
 choices[82]= new Array();
 choices[82][0] = "EntityConnection.";
 choices[82][1] = "SqlConnection.";
 choices[82][2] = "SqlCeConnection.";
 choices[82][3] = "OleOdbcConnection.";
 answers[82] = choices[82][3];
 units[82] = "59, 115";
 comments[82] = "Id Pregunta: 10850. Examen GSI 2014";


//  Id pregunta: 10887 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  &iquest;Cu&aacute;l de los siguientes protocolos permite conocer en tiempo real si un certificado ha sido o no revocado?";
 choices[83]= new Array();
 choices[83][0] = "OCSP";
 choices[83][1] = "CRL";
 choices[83][2] = "PKCS#10";
 choices[83][3] = "HTTPS";
 answers[83] = choices[83][0];
 units[83] = "73, 74";
 comments[83] = "Id Pregunta: 10887. Examen GSI 2014";


//  Id pregunta: 10933 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  Las entidades locales adheridas al servicio com&uacute;n denominado &ldquo;Emprende en 3&rdquo;:";
 choices[84]= new Array();
 choices[84][0] = "Aceptar&aacute;n y utilizar&aacute;n el modelo tipo de declaraci&oacute;n responsable de conformidad con la normativa que regula el proyecto.";
 choices[84][1] = "Podr&aacute;n rechazar las declaraciones responsables recibidas si no vienen acompa&ntilde;adas de la documentaci&oacute;n obligatoria para la puesta en marcha de la empresa.";
 choices[84][2] = "Podr&aacute;n rechazar las declaraciones responsables recibidas si no vienen acompa&ntilde;adas de la documentaci&oacute;n obligatoria para la puesta en marcha de la empresa.";
 choices[84][3] = "La tramitaci&oacute;n de las declaraciones responsables recibidas por &ldquo;Emprende en 3&rdquo; debe ser finalizada antes de los 5 d&iacute;as h&aacute;biles desde su presentaci&oacute;n.";
 answers[84] = choices[84][0];
 units[84] = "44";
 comments[84] = "Id Pregunta: 10933. TIC A1 AGE 2014";


//  Id pregunta: 11008 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  El proyecto SCSP, del Ministerio de Hacienda y Administraciones P&uacute;blicas:";
 choices[85]= new Array();
 choices[85][0] = "Es un conjunto de especificaciones orientadas al intercambio de datos entre Administraciones P&uacute;blicas con el objetivo de eliminar los certificados administrativos en papel.";
 choices[85][1] = "Es un cat&aacute;logo de interfaces de interoperabilidad para el consumo de datos del Directorio Com&uacute;n de Organismos y Oficinas.";
 choices[85][2] = "Permite la conexi&oacute;n en tiempo real de m&uacute;ltiples salas de videconferencia.";
 choices[85][3] = "Es un diagramador de procedimientos administrativos, para su integraci&oacute;n en las sedes electr&oacute;nicas.";
 answers[85] = choices[85][0];
 units[85] = "44";
 comments[85] = "Id Pregunta: 11008. TIC A1 AGE 2014";


//  Id pregunta: 11021 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  &iquest;Cu&aacute;l de las siguientes afirmaciones acerca de las WCAG 2.0 NO es cierta?";
 choices[86]= new Array();
 choices[86][0] = "Est&aacute;n organizadas en 4 principios";
 choices[86][1] = "Dentro de cada principio se encuentran las pautas de accesibilidad";
 choices[86][2] = "Cada pauta contiene una serie de criterios de conformidad";
 choices[86][3] = "Se definen niveles de prioridad para los diferentes criterios";
 answers[86] = choices[86][3];
 units[86] = "39";
 comments[86] = "Id Pregunta: 11021. En las WCAG 2.0 se habla de niveles de conformidad y no de niveles de prioridad";


//  Id pregunta: 11028 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  &iquest;Cu&aacute;l es una soluci&oacute;n de servicio en la nube para el registro en las administraciones?";
 choices[87]= new Array();
 choices[87][0] = "ORVE";
 choices[87][1] = "GEISER";
 choices[87][2] = "Las 2 anteriores";
 choices[87][3] = "Ambas son soluciones, pero no en la nube";
 answers[87] = choices[87][2];
 units[87] = "44";
 comments[87] = "Id Pregunta: 11028. ";


//  Id pregunta: 11049 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  &iquest;Cu&aacute;l es una plataforma electr&oacute;nica de contrataci&oacute;n que permite la contrataci&oacute;n de todos los valores en circulaci&oacute;n del Tesoro P&uacute;blico?";
 choices[88]= new Array();
 choices[88][0] = "SEND";
 choices[88][1] = "FACTURAE";
 choices[88][2] = "COMPRAE";
 choices[88][3] = "TESORO-E";
 answers[88] = choices[88][0];
 units[88] = "70";
 comments[88] = "Id Pregunta: 11049. ";


//  Id pregunta: 11061 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  &iquest;Cu&aacute;l de los siguientes es un protocolo para el pago seguro en red?";
 choices[89]= new Array();
 choices[89][0] = "XMLDSig";
 choices[89][1] = "3D-Secure";
 choices[89][2] = "SSL";
 choices[89][3] = "SHA256";
 answers[89] = choices[89][1];
 units[89] = "70";
 comments[89] = "Id Pregunta: 11061. ";


//  Id pregunta: 11145 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  &iquest;Cu&aacute;l de los siguientes es el formato oficial de facturaci&oacute;n electr&oacute;nica de la Administraci&oacute;n General del Estado?";
 choices[90]= new Array();
 choices[90][0] = "GS2-XML";
 choices[90][1] = "UBL";
 choices[90][2] = "Facturae";
 choices[90][3] = "Eb-XML";
 answers[90] = choices[90][2];
 units[90] = "70";
 comments[90] = "Id Pregunta: 11145. ";


//  Id pregunta: 11147 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;Cu&aacute;l es el est&aacute;ndar de la ITU-T para infraestructuras de claves p&uacute;blicas?";
 choices[91]= new Array();
 choices[91][0] = "X.500";
 choices[91][1] = "X.509v3";
 choices[91][2] = "X.CRL";
 choices[91][3] = "OCSP";
 answers[91] = choices[91][1];
 units[91] = "73";
 comments[91] = "Id Pregunta: 11147. ";


//  Id pregunta: 11214 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Respecto a los componentes de Java Platform SE cual de las siguientes afirmaciones es falsa:";
 choices[92]= new Array();
 choices[92][0] = "El JDK contiene todos los niveles, incluyendo JRE y adem&aacute;s herramientas como compiladores y depuradores de errores (debuggers).";
 choices[92][1] = "JRE no incluye la JVM.";
 choices[92][2] = "Las Java SE APIs est&aacute;n basadas en especificaciones JSR (Java Specification Request) las cuales son aprobadas dentro del Java CommunityProcess (JCP).";
 choices[92][3] = "La JVM es propiedad de Oracle.";
 answers[92] = choices[92][1];
 units[92] = "60";
 comments[92] = "Id Pregunta: 11214. ";


//  Id pregunta: 11221 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Cu&aacute;l es el nombre de la biblioteca de clases del Framework de .NET?";
 choices[93]= new Array();
 choices[93][0] = "FCL";
 choices[93][1] = "CLR";
 choices[93][2] = "CLS";
 choices[93][3] = "JIT";
 answers[93] = choices[93][0];
 units[93] = "59";
 comments[93] = "Id Pregunta: 11221. ";


//  Id pregunta: 11252 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Seg&uacute;n el Principio de Reconocimiento Mutuo que establece el Reglamento 910/2014, se reconocer&aacute; en un Estado miembro, a efectos de la autenticaci&oacute;n transfronteriza para un servicio en l&iacute;nea, el medio de identificaci&oacute;n electr&oacute;nica expedido en otro Estado miembro, siempre que:";
 choices[94]= new Array();
 choices[94][0] = "El nivel de seguridad de este medio de identificaci&oacute;n electr&oacute;nica corresponda a un nivel igual o superior al requerido por el organismo del sector p&uacute;blico para acceder a dicho servicio en l&iacute;nea, independientemente del nivel de seguridad del medio de identificaci&oacute;n.";
 choices[94][1] = "El medio de identificaci&oacute;n est&eacute; expedido seg&uacute;n los incluidos en la lista publicada por la Comisi&oacute;n.";
 choices[94][2] = "Las respuestas A) y B) son correctas.";
 choices[94][3] = "Este reconocimiento se producir&aacute; a m&aacute;s tardar 6 meses despu&eacute;s de que la Comisi&oacute;n publique la lista.";
 answers[94] = choices[94][1];
 units[94] = "73";
 comments[94] = "Id Pregunta: 11252. ";


//  Id pregunta: 11261 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Cu&aacute;les son los niveles de seguridad de los sistemas de autenticaci&oacute;n que define el Reglamento 910/2014?";
 choices[95]= new Array();
 choices[95][0] = "Bajo, medio y alto.";
 choices[95][1] = "B&aacute;sico, medio y alto.";
 choices[95][2] = "B&aacute;sico, sustancial y alto.";
 choices[95][3] = "Bajo, sustancial y alto.";
 answers[95] = choices[95][3];
 units[95] = "73";
 comments[95] = "Id Pregunta: 11261. ";


//  Id pregunta: 11346 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  De los siguientes, indique la opci&oacute;n que contiene los modelos correctos contemplados por LDAP";
 choices[96]= new Array();
 choices[96][0] = "informaci&oacute;n; direccionamiento; observable; estructural";
 choices[96][1] = "informaci&oacute;n; direccionamiento; objetivable; estructural";
 choices[96][2] = "informaci&oacute;n; direccionamiento; seguridad; estructural";
 choices[96][3] = "informaci&oacute;n; direccionamiento; seguridad; funcional";
 answers[96] = choices[96][3];
 units[96] = "73";
 comments[96] = "Id Pregunta: 11346. ";


//  Id pregunta: 11594 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  El metadato m&iacute;nimo obligatorio 'Origen' de un documento electr&oacute;nico indica:";
 choices[97]= new Array();
 choices[97][0] = "El &oacute;rgano generador del documento o que realiza la captura del mismo.";
 choices[97][1] = "La naturaleza del documento; esto es, si se trata de un original o una copia electr&oacute;nica.";
 choices[97][2] = "Si el contenido del documento fue creado por un ciudadano o por una administraci&oacute;n";
 choices[97][3] = "El lugar de procedencia del documento.";
 answers[97] = choices[97][2];
 units[97] = "43";
 comments[97] = "Id Pregunta: 11594. ";


//  Id pregunta: 11600 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  De acuerdo al Real Decreto 806/2014, el informe t&eacute;cnico preceptivo de la memoria y los pliegos de prescripciones t&eacute;cnicas de las contrataciones de bienes y servicios inform&aacute;ticos se emitir&aacute; en el plazo m&aacute;ximo de: ";
 choices[98]= new Array();
 choices[98][0] = "Diez d&iacute;as h&aacute;biles posteriores al d&iacute;a en que la unidad TIC registr&oacute; la documentaci&oacute;n completa del expediente de contrataci&oacute;n.";
 choices[98][1] = "Diez d&iacute;as naturales posteriores al d&iacute;a en que la unidad TIC registr&oacute; la documentaci&oacute;n completa del expediente de contrataci&oacute;n.";
 choices[98][2] = "Quince d&iacute;as h&aacute;biles posteriores al d&iacute;a en que la unidad TIC registr&oacute; la documentaci&oacute;n completa del expediente de contrataci&oacute;n.";
 choices[98][3] = "Quince d&iacute;as naturales posteriores al d&iacute;a en que la unidad TIC registr&oacute; la documentaci&oacute;n completa del expediente de contrataci&oacute;n.";
 answers[98] = choices[98][0];
 units[98] = "43";
 comments[98] = "Id Pregunta: 11600. ";


//  Id pregunta: 11766 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Los servicios compartidos...Seleccione una:";
 choices[99]= new Array();
 choices[99][0] = "est&aacute;n declarado de contrataci&oacute;n centralizada";
 choices[99][1] = "tienen car&aacute;cter obligatorio&nbsp;";
 choices[99][2] = "est&aacute;n disponibles en el CTT (Centro de Transferencia de Tecnolog&iacute;a)";
 choices[99][3] = "son gestionados por la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y de las Comunicaciones";
 answers[99] = choices[99][1];
 units[99] = "44";
 comments[99] = "Id Pregunta: 11766. ";


