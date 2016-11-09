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

//  Id pregunta: 21 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;les son las caracter&iacute;sticas fundamentales establecidas por X/Open en el entorno de los sistemas abiertos?: ";
 choices[0]= new Array();
 choices[0][0] = "Interoperabilidad, seguridad y portabilidad";
 choices[0][1] = "Portabilidad, interconectividad e interoperabilidad";
 choices[0][2] = "Portabilidad, escalabilidad e interoperabilidad";
 choices[0][3] = "Integridad, interconectivilidad e interoperabilidad";
 answers[0] = choices[0][2];
 units[0] = "40";
 comments[0] = "Id Pregunta: 21. ";


//  Id pregunta: 39 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Cu&aacute;l de las siguientes respuestas no puede considerarse como un est&aacute;ndar abierto?:";
 choices[1]= new Array();
 choices[1][0] = "SNA";
 choices[1][1] = "C++";
 choices[1][2] = "SQL";
 choices[1][3] = "TCP/IP";
 answers[1] = choices[1][0];
 units[1] = "40";
 comments[1] = "Id Pregunta: 39. ";


//  Id pregunta: 284 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  La caracter&iacute;stica que poseen los sistemas abiertos de permitir la utilizaci&oacute;n del mismo entorno de &quot;software&quot; en diferentes equipos f&iacute;sicos, desde ordenadores personales hasta grandes ordenadores, se denomina:";
 choices[2]= new Array();
 choices[2][0] = "Conectividad";
 choices[2][1] = "Integrabilidad";
 choices[2][2] = "Escalabilidad";
 choices[2][3] = "Interoperabilidad";
 answers[2] = choices[2][2];
 units[2] = "40";
 comments[2] = "Id Pregunta: 284. ";


//  Id pregunta: 291 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  La Decisi&oacute;n del Consejo 87/95/CEE:";
 choices[3]= new Array();
 choices[3][0] = "Se refiere a normas de tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones relativas al intercambio de informaci&oacute;n y de datos y a la interoperabilidad de los sistemas";
 choices[3][1] = "Ha sido derogada por la Ley de Contratos de las Administraciones P&uacute;blicas";
 choices[3][2] = "Afecta a todas las Administraciones P&uacute;blicas";
 choices[3][3] = "No puede aplicarse directamente por los poderes adjudicadores, siendo necesario su trasposici&oacute;n al ordenamiento jur&iacute;dico espa&ntilde;ol";
 answers[3] = choices[3][0];
 units[3] = "40";
 comments[3] = "Id Pregunta: 291. ";


//  Id pregunta: 403 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  Respecto a las caracter&iacute;sticas de un sistema abierto (es decir, aqu&eacute;l que cumple con las especificaciones de OSI), podemos decir que:";
 choices[4]= new Array();
 choices[4][0] = "Interoperabilidad es la posibilidad de enlazar ordenadores de distintas marcas con la seguridad de que han de trabajar conjuntamente, dando la sensaci&oacute;n de que funcionan como un &uacute;nico sistema";
 choices[4][1] = "Portabilidad es la posibilidad de que aplicaciones de distintos desarrolladores de software funcionen en m&aacute;quinas de diversos fabricantes";
 choices[4][2] = "Escalabilidad o capacidad de crecimiento es la posibilidad de utilizar el mismo entorno de software en diferentes gamas de ordenadores, desde ordenadores de sobremesa hasta mainframes";
 choices[4][3] = "Todas las respuestas anteriores son correctas";
 answers[4] = choices[4][3];
 units[4] = "40";
 comments[4] = "Id Pregunta: 403. ";


//  Id pregunta: 461 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  Son excepciones a las normas de contrataci&oacute;n establecidas en la Directiva 87/95 CE:";
 choices[5]= new Array();
 choices[5][0] = "La necesidad de una continuidad en el funcionamiento de los Sistemas existentes";
 choices[5][1] = "La naturaleza innovadora de algunos proyectos";
 choices[5][2] = "a y b son correctas";
 choices[5][3] = "Ninguna de las anteriores es correcta";
 answers[5] = choices[5][2];
 units[5] = "40";
 comments[5] = "Id Pregunta: 461. ";


//  Id pregunta: 506 AÃ±o de creación de pregunta: 2003-01-01
 questions[6]= "7)  La Decisi&oacute;n 87/95 /CEE cubre:";
 choices[6]= new Array();
 choices[6][0] = "Las especificaciones t&eacute;cnicas para equipos terminales conectados a redes p&uacute;blicas de tlecomunicaci&oacute;n";
 choices[6][1] = "Las especificaciones funcionales de los servicios ofrecidos sobre redes p&uacute;blicas de telecomunicaci&oacute;n";
 choices[6][2] = "Las especificaciones de los equipos que formen parte de las redes de telecomunicaci&oacute;n en s&iacute; mismas";
 choices[6][3] = "Ninguna de las repuestas anteriores es cierta";
 answers[6] = choices[6][1];
 units[6] = "40";
 comments[6] = "Id Pregunta: 506. ";


//  Id pregunta: 541 AÃ±o de creación de pregunta: 2004-01-01
 questions[7]= "8)  Respecto a las pautas de accesibilidad de la  iniciativa de acesibilidad web WAI del W3C se puede afirmar que ...";
 choices[7]= new Array();
 choices[7][0] = "El nivel de adecuaci&oacute;n A es el m&aacute;s exigente";
 choices[7][1] = "El nivel de adecuaci&oacute;n AA incluye los puntos de verificaci&oacute;n de prioridades 1 y 2";
 choices[7][2] = "La satisfacci&oacute;n de los puntos de verificaci&oacute;n de prioridad 1 es opcional";
 choices[7][3] = "Todas las anteriores afirmaciones son falsas";
 answers[7] = choices[7][1];
 units[7] = "39";
 comments[7] = "Id Pregunta: 541. ";


//  Id pregunta: 641 AÃ±o de creación de pregunta: 2006-01-01
 questions[8]= "9)  Cu&aacute;l de las siguientes afirmaciones sobre sistemas abiertos es incorrecta:";
 choices[8]= new Array();
 choices[8][0] = "Portabilidad consiste en la posibilidad de utilizar el mismo entorno de software en diferentes gamas de ordenadores, desde ordenadores de sobremesa hasta mainframes.";
 choices[8][1] = "lnteroperabilidad consiste en la posibilidad de enlazar distintos ordenadores.";
 choices[8][2] = "Una de las principales ventajas de usar sistemas abiertos consiste en proteger la inversi&oacute;n en equipos f&iacute;sicos, software, formaci&oacute;n y usuarios.";
 choices[8][3] = "Con la utilizaci&oacute;n de sistemas abiertos se persigue evitar el 's&iacute;ndrome de cliente cautivo'.";
 answers[8] = choices[8][0];
 units[8] = "40";
 comments[8] = "Id Pregunta: 641. ";


//  Id pregunta: 754 AÃ±o de creación de pregunta: 2004-01-01
 questions[9]= "10)  Indicar la afirmaci&oacute;n INCORRECTA respecto MS ASP.NET";
 choices[9]= new Array();
 choices[9][0] = "ASP.NET puede utilizar cualquier lenguaje de programaci&oacute;n soportado por .NET";
 choices[9][1] = "Es compatible con p&aacute;ginas ASP existentes";
 choices[9][2] = "Necesita el .NET Framework para su ejecuci&oacute;n";
 choices[9][3] = "Se puede utilizar con servidores web que no sean IIS, como Apache o nginx";
 answers[9] = choices[9][3];
 units[9] = "59";
 comments[9] = "Id Pregunta: 754. NULL";


//  Id pregunta: 772 AÃ±o de creación de pregunta: 2004-01-01
 questions[10]= "11)  Qu&eacute; significan las siglas JNI";
 choices[10]= new Array();
 choices[10][0] = "Interfaz para llamar m&eacute;todos nativos ";
 choices[10][1] = "Sistema de directorio";
 choices[10][2] = "Sistema para datamining";
 choices[10][3] = "ninguna de las anteriores";
 answers[10] = choices[10][0];
 units[10] = "60";
 comments[10] = "Id Pregunta: 772. NULL";


//  Id pregunta: 776 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  En telecomunicaciones, EFT son las siglas de:";
 choices[11]= new Array();
 choices[11][0] = "Enhanced Fiber Transmission, Transmisi&oacute;n mejorada por fibra &oacute;ptica";
 choices[11][1] = "Electronic Funds Transfer, Transferencia electr&oacute;nica de fondos";
 choices[11][2] = "Enhanced File Transfer, Transmisi&oacute;n mejorada de ficheros";
 choices[11][3] = "Electronic Forms Transfer, Transferencia electr&oacute;nica de formularios";
 answers[11] = choices[11][1];
 units[11] = "70";
 comments[11] = "Id Pregunta: 776. NULL";


//  Id pregunta: 795 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  &iquest;Qu&eacute; son los midlets?:";
 choices[12]= new Array();
 choices[12][0] = "Son aplicaciones Java para la capa de middleware";
 choices[12][1] = "Son aplicaciones Java igualmente v&aacute;lidas para cliente o para servidor";
 choices[12][2] = "Son applets que s&oacute;lo se ejecutan bajo ciertas condiciones";
 choices[12][3] = "Son aplicaciones Java J2ME para dispositivos m&oacute;viles";
 answers[12] = choices[12][3];
 units[12] = "60";
 comments[12] = "Id Pregunta: 795. NULL";


//  Id pregunta: 960 AÃ±o de creación de pregunta: 2005-01-01
 questions[13]= "14)  Con respecto a X.500 y LDAP, indicar la respuesta incorrecta:";
 choices[13]= new Array();
 choices[13][0] = "X.500 utiliza ASN.1 para la formaci&oacute;n de los mensajes, y LDAP utiliza cadenas de caracteres simples para la representaci&oacute;n de Distinguished Names ";
 choices[13][1] = "LDAP no posee el servicio de modificaci&oacute;n REMOVE perteneciente a DAP";
 choices[13][2] = "X.500 y LDAP funcionan sobre la pila de protocolos OSI y TCP/IP respectivamente";
 choices[13][3] = "Un dominio de gesti&oacute;n de directorio est&aacute; formado, como m&iacute;nimo, por: 1 DSA, 1 DUA y 1 esquema (visi&oacute;n externa del dominio)";
 answers[13] = choices[13][3];
 units[13] = "73";
 comments[13] = "Id Pregunta: 960. ";


//  Id pregunta: 1102 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  En Java:";
 choices[14]= new Array();
 choices[14][0] = "Los programas son applets, que se ejecutan en un navegador";
 choices[14][1] = "Los programas son de l&iacute;nea de comandos o basados en entornos de ventanas, como AWT o Swing";
 choices[14][2] = "Los programas son aplicaciones web de servidor";
 choices[14][3] = "Todas las anteriores respuestas son ciertas";
 answers[14] = choices[14][3];
 units[14] = "60";
 comments[14] = "Id Pregunta: 1102. NULL";


//  Id pregunta: 1189 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  Indique cu&aacute;l de las siguientes afirmaciones sobre directorios no es correcta:";
 choices[15]= new Array();
 choices[15][0] = "La arquitectura X.500 se basa en la r&eacute;plica de bases de datos distribuidas";
 choices[15][1] = "El DAP es el protocolo de acceso al directorio X.500";
 choices[15][2] = "X.500 fue dise&ntilde;ado como una versi&oacute;n simplificada de LDAP";
 choices[15][3] = "Los programas acceden al directorio usando las APIs del X/Open Directory Service";
 answers[15] = choices[15][2];
 units[15] = "73";
 comments[15] = "Id Pregunta: 1189. ";


//  Id pregunta: 1201 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  JDeveloper es:";
 choices[16]= new Array();
 choices[16][0] = "Un entorno de desarrollo integrado (IDE)";
 choices[16][1] = "Una base de datos";
 choices[16][2] = "Un gestor de contenidos";
 choices[16][3] = "Un gestor de informes";
 answers[16] = choices[16][0];
 units[16] = "60";
 comments[16] = "Id Pregunta: 1201. NULL";


//  Id pregunta: 1620 AÃ±o de creación de pregunta: 2003-01-01
 questions[17]= "18)  Que caracter&iacute;stica de Java no es completamente cierta";
 choices[17]= new Array();
 choices[17][0] = "Es independiente del SO";
 choices[17][1] = "Es independiente de la plataforma";
 choices[17][2] = "Es independiente del HW";
 choices[17][3] = "Write once run everywhere ";
 answers[17] = choices[17][3];
 units[17] = "60";
 comments[17] = "Id Pregunta: 1620. El c&oacute;digo puede requerir alguna personalizaci&oacute;n para entorno en que se ejecute.";


//  Id pregunta: 1631 AÃ±o de creación de pregunta: 2003-01-01
 questions[18]= "19)  Un debugger (depurador) de programas :";
 choices[18]= new Array();
 choices[18][0] = "Ensambla los distintos m&oacute;dulos de SW";
 choices[18][1] = "Ayuda a los programadores a localizar errores de programaci&oacute;n";
 choices[18][2] = "Escanea los archivos ejecutables para detectar virus";
 choices[18][3] = "Permite crear un CPU virtual donde ejercer las pruebas de Sw minimizando la penalizaci&oacute;n de rendimientos en la instalaci&oacute;n principal";
 answers[18] = choices[18][1];
 units[18] = "59";
 comments[18] = "Id Pregunta: 1631. ";


//  Id pregunta: 1766 AÃ±o de creación de pregunta: 2006-01-01
 questions[19]= "20)  El lenguaje Java, para las variables de clase, utiliza el modificador";
 choices[19]= new Array();
 choices[19][0] = "extern";
 choices[19][1] = "private";
 choices[19][2] = "final";
 choices[19][3] = "static";
 answers[19] = choices[19][3];
 units[19] = "60";
 comments[19] = "Id Pregunta: 1766. JCED - Preparatic XVII. Variables de clase es otra manera de llamar a las var est&aacute;ticas";


//  Id pregunta: 1768 AÃ±o de creación de pregunta: 2006-01-01
 questions[20]= "21)  Respecto al empaquetado de aplicaciones en JAVA ";
 choices[20]= new Array();
 choices[20][0] = "utiliza el algoritmo de compresi&oacute;n LZW";
 choices[20][1] = "Para facilitar el control y orden de todos estos ficheros es para lo que se han definido los ficheros JAR";
 choices[20][2] = "Un fichero JAR  puede incluir un subdirectorio de metainformaci&oacute;n llamado META-INF";
 choices[20][3] = "Todas son correctas";
 answers[20] = choices[20][3];
 units[20] = "60";
 comments[20] = "Id Pregunta: 1768. NULL";


//  Id pregunta: 1836 AÃ±o de creación de pregunta: 2006-01-01
 questions[21]= "22)  El comercio electr&oacute;nico que se produce cuando se realiza una venta de un producto por Internet se identifica como:";
 choices[21]= new Array();
 choices[21][0] = "B2B";
 choices[21][1] = "B2C";
 choices[21][2] = "B2A";
 choices[21][3] = "B2G";
 answers[21] = choices[21][1];
 units[21] = "70";
 comments[21] = "Id Pregunta: 1836. NULL";


//  Id pregunta: 1916 AÃ±o de creación de pregunta: 2006-01-01
 questions[22]= "23)  Seg&uacute;n la recomendaci&oacute;n X.509 v.3";
 choices[22]= new Array();
 choices[22][0] = "Un usuario puede tener a lo sumo un certificado de atributos por cada certificado de clave p&uacute;blica";
 choices[22][1] = "Los certificados de atributos deben ser generados por Autoridades de Certificaci&oacute;n";
 choices[22][2] = "Para su validez, los certificados de atributos deben estar siempre acompa&ntilde;ados de un certificado de clave p&uacute;blica";
 choices[22][3] = "Los certificados de atributos contienen id&eacute;nticos campos que subcampos tiene el campo de extensiones de los certificados de clave p&uacute;blica";
 answers[22] = choices[22][2];
 units[22] = "73";
 comments[22] = "Id Pregunta: 1916. ";


//  Id pregunta: 1949 AÃ±o de creación de pregunta: 2006-01-01
 questions[23]= "24)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones sobre el paquete javax.microedition.lcdui de J2ME es cierta";
 choices[23]= new Array();
 choices[23][0] = "Es un subconjunto del paquete Swing de J2SE";
 choices[23][1] = "Define las aplicaciones MIDP y su comportamiento con respecto al entorno de ejecuci&oacute;n";
 choices[23][2] = "Proporciona clases asociadas a la gesti&oacute;n del ciclo de vida de las MIDLETS";
 choices[23][3] = "Proporciona clases para el desarrollo de elementos gr&aacute;ficos de la API MIDP para entornos m&oacute;viles";
 answers[23] = choices[23][3];
 units[23] = "60";
 comments[23] = "Id Pregunta: 1949. NULL";


//  Id pregunta: 3964 AÃ±o de creación de pregunta: 2003-01-01
 questions[24]= "25)  Registro basado en XML para listar servicios Web que se ponen a disposici&oacute;n de otros";
 choices[24]= new Array();
 choices[24][0] = " UDDI";
 choices[24][1] = "WSDL";
 choices[24][2] = " SOAP";
 choices[24][3] = " JAXP";
 answers[24] = choices[24][0];
 units[24] = "69";
 comments[24] = "Id Pregunta: 3964. NULL";


//  Id pregunta: 4703 AÃ±o de creación de pregunta: 2007-01-01
 questions[25]= "26)  Un programa escrito Java puede ejecutarse en cualquier plataforma porque &hellip;";
 choices[25]= new Array();
 choices[25][0] = "el lenguaje Java se deriva de C++.";
 choices[25][1] = "la m&aacute;quina virtual de Java (JVM) interpreta el programa para cada sistema operativo";
 choices[25][2] = "el compilador es id&eacute;ntico al de C++.";
 choices[25][3] = "porque la APIs de Java han sido dise&ntilde;adas con ese fin.";
 answers[25] = choices[25][1];
 units[25] = "60";
 comments[25] = "Id Pregunta: 4703. Examen 2006 JCYL";


//  Id pregunta: 4704 AÃ±o de creación de pregunta: 2007-01-01
 questions[26]= "27)  Un applet de Java se ejecutar&aacute; en casi cualquier navegador porque ..";
 choices[26]= new Array();
 choices[26][0] = "el servidor tiene un built-in de JVM.";
 choices[26][1] = "el navegador es capaz de interpretar el c&oacute;digo fuente";
 choices[26][2] = "el navegador tiene un built-in de JVM";
 choices[26][3] = "los applets no necesitan una JVM.";
 answers[26] = choices[26][2];
 units[26] = "60";
 comments[26] = "Id Pregunta: 4704. Examen 2006 JCYL";


//  Id pregunta: 4757 AÃ±o de creación de pregunta: 2007-01-01
 questions[27]= "28)  &iquest;Cu&aacute;l de los siguientes no es un control de prioridad 1 de las directrices de Accesibilidad para el Contenido Web (WCAG 1.0) del W3C?";
 choices[27]= new Array();
 choices[27][0] = "Para cualquier presentaci&oacute;n multimedia basada en tiempo (p.ej., una pel&iacute;cula o animaci&oacute;n), sincronice alternativas equivalentes (p.ej., subt&iacute;tulos o descripciones auditivas de la pista visual) con la presentaci&oacute;n";
 choices[27][1] = "Use hojas de estilo para controlar la composici&oacute;n y la presentaci&oacute;n.";
 choices[27][2] = "Identifique claramente los cambios en el lenguaje natural del texto de un documento y de cualquier equivalente de texto (p.ej., subt&iacute;tulos).";
 choices[27][3] = "Para tablas de datos, identifique encabezados de fila y columna.";
 answers[27] = choices[27][1];
 units[27] = "39";
 comments[27] = "Id Pregunta: 4757. ";


//  Id pregunta: 4923 AÃ±o de creación de pregunta: 2003-01-01
 questions[28]= "29)  Los DTD (Document Type Definition) en tecnolog&iacute;a XML:";
 choices[28]= new Array();
 choices[28][0] = "Definen la estructura del documento XML.";
 choices[28][1] = "Sirven para dar formato a la informaci&oacute;n.";
 choices[28][2] = "Siempre han de estar incluidos en el XML.";
 choices[28][3] = "Contienen elementos y atributos.";
 answers[28] = choices[28][0];
 units[28] = "69";
 comments[28] = "Id Pregunta: 4923. Examen TIC B 2007";


//  Id pregunta: 5442 AÃ±o de creación de pregunta: 2003-01-01
 questions[29]= "30)  &iquest;C&oacute;mo se puede describir el formato de los datos en XML?";
 choices[29]= new Array();
 choices[29][0] = "Usando XSL";
 choices[29][1] = "Usando un DTD";
 choices[29][2] = "Usando un Nodo de Descripci&oacute;n (Description Node)";
 choices[29][3] = "Usando XSLT";
 answers[29] = choices[29][1];
 units[29] = "69";
 comments[29] = "Id Pregunta: 5442. Castilla y Le&oacute;n";


//  Id pregunta: 5494 AÃ±o de creación de pregunta: 2003-01-01
 questions[30]= "31)  SWT (Standard Widget Toolkit)";
 choices[30]= new Array();
 choices[30][0] = "El rendimiento de la librer&iacute;a AWT es mejor que la de SWT";
 choices[30][1] = "Es una librer&iacute;a que proporciona funcionalidades de componentes gr&aacute;ficos  para la plataforma Eclipse.";
 choices[30][2] = "a y b son ciertas";
 choices[30][3] = "Se ha desarrollado puramente en Java";
 answers[30] = choices[30][1];
 units[30] = "60";
 comments[30] = "Id Pregunta: 5494. NULL";


//  Id pregunta: 5496 AÃ±o de creación de pregunta: 2003-01-01
 questions[31]= "32)  &iquest;Cu&aacute;les son los contenedores de la tecnolog&iacute;a Java EE?";
 choices[31]= new Array();
 choices[31][0] = "EJB Container y Web Container";
 choices[31][1] = "EJB Container, Web Container y Application Client Container";
 choices[31][2] = "b) y Applet Container";
 choices[31][3] = "Ninguna de las anteriores";
 answers[31] = choices[31][2];
 units[31] = "60";
 comments[31] = "Id Pregunta: 5496. NULL";


//  Id pregunta: 5505 AÃ±o de creación de pregunta: 2003-01-01
 questions[32]= "33)  C&uacute;al es la respuesta correcta respecto a XBRL (eXtensible Business Reporting Language)?:";
 choices[32]= new Array();
 choices[32][0] = "Es un lenguaje basado en XML";
 choices[32][1] = "Permite el intercambio de informaci&oacute;n financiera de las empresas";
 choices[32][2] = "Es posible establecer taxonom&iacute;as que clasifiquen los datos seg&uacute;n etiquetas definidas";
 choices[32][3] = "Todas son correctas";
 answers[32] = choices[32][3];
 units[32] = "69";
 comments[32] = "Id Pregunta: 5505. NULL";


//  Id pregunta: 5507 AÃ±o de creación de pregunta: 2003-01-01
 questions[33]= "34)  Qu&eacute; formato se emplea para la emision de facturas electr&oacute;nicas por parte de la AGE?";
 choices[33]= new Array();
 choices[33][0] = "XBRL";
 choices[33][1] = "ebXML";
 choices[33][2] = "UBL";
 choices[33][3] = "Facturae";
 answers[33] = choices[33][3];
 units[33] = "70";
 comments[33] = "Id Pregunta: 5507. NULL";


//  Id pregunta: 5549 AÃ±o de creación de pregunta: 2003-01-01
 questions[34]= "35)  La Ley 11/2007, deroga:";
 choices[34]= new Array();
 choices[34][0] = "Los reglamentos de desarrollo de los art&iacute;culos relativos a Registros de las Administraciones P&uacute;blicas, Notificaciones Administrativas e Incorporaci&oacute;n de medios t&eacute;cnicos en la actividad administrativa (art. 38, 59, 45 respectivamente), de la Ley del R&eacute;gimen Jur&iacute;dico y del Procedimiento Administrativo Com&uacute;n (Ley 30/1992).";
 choices[34][1] = "Los art&iacute;culos 38, 59 y 45 de la Ley 30/1992 y su disposici&oacute;n adicional decimooctava.";
 choices[34][2] = "El Real Decreto 209/2003 y la Orden PRE/1551/2003.";
 choices[34][3] = "Modifica los art&iacute;culos 38, 45 y 59 de la Ley 30/1992 y deroga su disposici&oacute;n adicional 18&ordf; as&iacute; como todo aquello que contradiga la Ley 11/2007 en los Reglamentos de desarrollo de dichos art&iacute;culos.";
 answers[34] = choices[34][3];
 units[34] = "43";
 comments[34] = "Id Pregunta: 5549. NULL";


//  Id pregunta: 5714 AÃ±o de creación de pregunta: 2009-01-01
 questions[35]= "36)  La Ley 11/2007, de Acceso Electr&oacute;nico de los Ciudadanos a los Servicios P&uacute;blicos, determin&oacute; que el Esquema Nacional de Interoperabilidad ser&iacute;a aprobado por Real Decreto del Gobierno a propuesta de:";
 choices[35]= new Array();
 choices[35][0] = "Consejo Superior de Administraci&oacute;n Electr&oacute;nica (actual Comisi&oacute;n Estrategia TIC)";
 choices[35][1] = "Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n";
 choices[35][2] = "Secretar&iacute;a de Estado de Inform&aacute;tica P&uacute;blica";
 choices[35][3] = "Conferencia Sectorial de Administraci&oacute;n P&uacute;blica";
 answers[35] = choices[35][3];
 units[35] = "43";
 comments[35] = "Id Pregunta: 5714. ENI ya aprobado por RD 4/2010.";


//  Id pregunta: 5780 AÃ±o de creación de pregunta: 2009-01-01
 questions[36]= "37)  Se&ntilde;ale c&oacute;mo se denomina el conjunto de reglas que deben de seguir los lenguajes de programaci&oacute;n para que sean compatibles con .NET se denomina:";
 choices[36]= new Array();
 choices[36][0] = "CLS";
 choices[36][1] = "MSIL";
 choices[36][2] = "Bytecode";
 choices[36][3] = "JIT";
 answers[36] = choices[36][0];
 units[36] = "59";
 comments[36] = "Id Pregunta: 5780. MAP 2008 A2";


//  Id pregunta: 5869 AÃ±o de creación de pregunta: 2009-01-01
 questions[37]= "38)  Las p&aacute;ginas de internet de las administraciones p&uacute;blicas o con financiaci&oacute;n p&uacute;blica existentes a la entrada en vigor del RD 1494/2007 por el que se aprueba el Reglamento sobre las condiciones b&aacute;sicas para el acceso de las personas con discapacidad a las tecnolog&iacute;as de la informaci&oacute;n, deben adaptarse a la norma:";
 choices[37]= new Array();
 choices[37][0] = "Tres meses desde la entrada en vigor del RD.";
 choices[37][1] = "Seis meses desde la entrada en vigor del RD.";
 choices[37][2] = "El d&iacute;a de entrada en vigor del RD.";
 choices[37][3] = "Antes del 31 de diciembre de 2008";
 answers[37] = choices[37][1];
 units[37] = "39";
 comments[37] = "Id Pregunta: 5869. MAP 2008 A1";


//  Id pregunta: 5956 AÃ±o de creación de pregunta: 2009-01-01
 questions[38]= "39)  Se&ntilde;ale la respuesta err&oacute;nea.";
 choices[38]= new Array();
 choices[38][0] = "El Centro de Transferencia de Tecnolog&iacute;a es la respuesta al mandato de La ley 11/2007, de 22 de Junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, en su art&iacute;culo 46 sobre la necesidad de contar con un directorio general de aplicaciones para su reutilizaci&oacute;n";
 choices[38][1] = "Los principales objetivos del CTT son: crear un repositorio com&uacute;n de software, crear una base de conocimiento, crear un espacio donde se puedan compartir experiencias y cooperar";
 choices[38][2] = "Los proyectos publicados en el portal CTT est&aacute;n dirigidos a las Administraciones P&uacute;blicas y las empresas que trabajan en el &aacute;mbito de las Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones y especialmente en Administraci&oacute;n Electr&oacute;nica";
 choices[38][3] = "El CTT es un portal que publica un directorio general de aplicaciones e informa de los proyectos, servicios, normativa y soluciones que se est&aacute;n desarrollando en materia de Administraci&oacute;n electr&oacute;nica.";
 answers[38] = choices[38][2];
 units[38] = "44";
 comments[38] = "Id Pregunta: 5956. www.ctt.map.es";


//  Id pregunta: 5995 AÃ±o de creación de pregunta: 2010-01-01
 questions[39]= "40)  El Defensor del usuario de la administraci&oacute;n electr&oacute;nica a que hace referencia el art&iacute;culo 7 de la Ley 11/2007 de Acceso Electr&oacute;nico de los Ciudadanos a los Servicios P&uacute;blicos es nombrado por:";
 choices[39]= new Array();
 choices[39][0] = "El Defensor del Pueblo.";
 choices[39][1] = "El Congreso de los Diputados, por mayor&iacute;a simple.";
 choices[39][2] = "El Consejo de Ministros.";
 choices[39][3] = "El Ministro de Industria.";
 answers[39] = choices[39][2];
 units[39] = "43";
 comments[39] = "Id Pregunta: 5995. TIC A 2009";


//  Id pregunta: 6005 AÃ±o de creación de pregunta: 2010-01-01
 questions[40]= "41)  El est&aacute;ndar WSDL:";
 choices[40]= new Array();
 choices[40][0] = "Es el protocolo para efectuar llamadas a m&eacute;todos de objetos remotos mediante peticiones XML.";
 choices[40][1] = "Describe la interfaz de servicio";
 choices[40][2] = "Es el registro p&uacute;blico de servicios.";
 choices[40][3] = "Es el protocolo de transporte.";
 answers[40] = choices[40][1];
 units[40] = "69";
 comments[40] = "Id Pregunta: 6005. TIC A 2009";


//  Id pregunta: 6089 AÃ±o de creación de pregunta: 2010-01-01
 questions[41]= "42)  NO corresponde actualmente a una infraestructura o servicio com&uacute;n de la Administraci&oacute;n General del Estado:";
 choices[41]= new Array();
 choices[41][0] = "El servicio de verificaci&oacute;n de datos de identidad o residencia.";
 choices[41][1] = "La pasarela de pagos telem&aacute;ticos.";
 choices[41][2] = "La recepci&oacute;n de facturas electr&oacute;nicas.";
 choices[41][3] = "Todas las anteriores corresponden a infraestructuras o servicio comunes de la Administraci&oacute;n General del Estado";
 answers[41] = choices[41][3];
 units[41] = "44";
 comments[41] = "Id Pregunta: 6089. TIC A 2009. Modificada 2014";


//  Id pregunta: 6180 AÃ±o de creación de pregunta: 2010-01-01
 questions[42]= "43)  RMI, DCOM, CORBA y RPC se consideran:";
 choices[42]= new Array();
 choices[42][0] = "Precursores de los Servicios Web.";
 choices[42][1] = "Formas de comunicar aplicaciones distribuidas.";
 choices[42][2] = "Formas de comunicar aplicaciones heterog&eacute;neas.";
 choices[42][3] = "Todas las anteriores son respuestas correctas.";
 answers[42] = choices[42][3];
 units[42] = "69";
 comments[42] = "Id Pregunta: 6180. NULL";


//  Id pregunta: 6189 AÃ±o de creación de pregunta: 2010-01-01
 questions[43]= "44)  El Esquema Nacional de Interoperabilidad establece que los sistemas han de ser objeto de una auditor&iacute;a regular ordinaria al menos";
 choices[43]= new Array();
 choices[43][0] = "Cada 6 meses";
 choices[43][1] = "Cada a&ntilde;o";
 choices[43][2] = "Cada 2 a&ntilde;os";
 choices[43][3] = "El Esquema Nacional de Interoperabilidad no especifica nada respecto a auditor&iacute;as";
 answers[43] = choices[43][3];
 units[43] = "43";
 comments[43] = "Id Pregunta: 6189. NULL";


//  Id pregunta: 6193 AÃ±o de creación de pregunta: 2010-01-01
 questions[44]= "45)  La Orden PRE/878/2010 regula";
 choices[44]= new Array();
 choices[44][0] = "El Registro Electr&oacute;nico Com&uacute;n";
 choices[44][1] = "Los contenidos y servicios m&iacute;nimos de las sedes electr&oacute;nicas";
 choices[44][2] = "El uso de certificados de empleado p&uacute;blico";
 choices[44][3] = "La direcci&oacute;n electr&oacute;nica habilitada";
 answers[44] = choices[44][3];
 units[44] = "43";
 comments[44] = "Id Pregunta: 6193. Orden PRE/878/2010, previsto en el art&iacute;culo 38.2 del Real Decreto 1671/2009, de 6 de noviembre.";


//  Id pregunta: 6372 AÃ±o de creación de pregunta: 2010-01-01
 questions[45]= "46)  En relaci&oacute;n a lo dispuesto en el Esquema Nacional de Seguridad, un sistema de informaci&oacute;n ser&aacute; de categor&iacute;a MEDIA cuando:";
 choices[45]= new Array();
 choices[45][0] = "Las dimensiones de seguridad definidas como cr&iacute;ticas son, en su mayor&iacute;a, de nivel MEDIO.";
 choices[45][1] = "Alguna de sus dimensiones de seguridad alcanza el nivel MEDIO, y ninguna es de nivel inferior.";
 choices[45][2] = "Alguna de sus dimensiones de seguridad alcanza el nivel MEDIO, y ninguna alcanza un nivel superior.";
 choices[45][3] = "Las dimensiones de seguridad son, en su mayor&iacute;a, de nivel MEDIO.";
 answers[45] = choices[45][2];
 units[45] = "43";
 comments[45] = "Id Pregunta: 6372. Anexo I ENS";


//  Id pregunta: 6378 AÃ±o de creación de pregunta: 2010-01-01
 questions[46]= "47)  El Esquema Nacional de Interoperabilidad establece que las Administraciones p&uacute;blicas utilizar&aacute;n preferentemente la Red de comunicaciones de las Administraciones p&uacute;blicas espa&ntilde;olas para comunicarse entre s&iacute;. La red que prestar&aacute; este servicio recibe el nombre de:";
 choices[46]= new Array();
 choices[46][0] = "InterAdmon";
 choices[46][1] = "TESTA";
 choices[46][2] = "SARA";
 choices[46][3] = "El Esquema Nacional de Interoperabilidad no establece el uso de una red determinada.";
 answers[46] = choices[46][2];
 units[46] = "43";
 comments[46] = "Id Pregunta: 6378. Art&iacute;culo 13 ENI";


//  Id pregunta: 6380 AÃ±o de creación de pregunta: 2010-01-01
 questions[47]= "48)  En el Esquema Nacional de Interoperabilidad, se establece que los sistemas o aplicaciones implicados en la provisi&oacute;n de un servicio p&uacute;blico por v&iacute;a electr&oacute;nica se sincronizar&aacute;n con la hora oficial de:";
 choices[47]= new Array();
 choices[47][0] = "El reloj de la Puerta del Sol";
 choices[47][1] = "El Instituto Europeo de Medici&oacute;n Horaria";
 choices[47][2] = "La Agencia Espa&ntilde;ola de Meteorologia";
 choices[47][3] = "El Real Instituto y Observatorio de la Armada";
 answers[47] = choices[47][3];
 units[47] = "43";
 comments[47] = "Id Pregunta: 6380. Art&iacute;culo 15 ENI";


//  Id pregunta: 6394 AÃ±o de creación de pregunta: 2010-01-01
 questions[48]= "49)  &iquest;Es posible establecer la obligaci&oacute;n de comunicarse electr&oacute;nicamente con los &oacute;rganos de la Administraci&oacute;n General del Estado o sus organismos p&uacute;blicos vinculados o dependientes?";
 choices[48]= new Array();
 choices[48][0] = "S&iacute;, en cualquier caso";
 choices[48][1] = "No, en ning&uacute;n caso";
 choices[48][2] = "S&iacute;, en determinados casos previstos y mediante orden ministerial";
 choices[48][3] = "S&iacute;, en determinados casos previstos y mediante resoluci&oacute;n de la Subsecretar&iacute;a del Ministerio o titular del organismo p&uacute;blico competente";
 answers[48] = choices[48][2];
 units[48] = "43";
 comments[48] = "Id Pregunta: 6394. Art&iacute;culo 32 RD 1671/2009";


//  Id pregunta: 6422 AÃ±o de creación de pregunta: 2010-01-01
 questions[49]= "50)  Proporcionar a los usuarios el tiempo suficiente para leer y usar el contenido es una pauta que corresponde, &iquest;a qu&eacute; principio de WCAG 2.0?";
 choices[49]= new Array();
 choices[49][0] = "Perceptible";
 choices[49][1] = "Operable";
 choices[49][2] = "Robusto";
 choices[49][3] = "Comprensible";
 answers[49] = choices[49][1];
 units[49] = "39";
 comments[49] = "Id Pregunta: 6422. NULL";


//  Id pregunta: 7323 AÃ±o de creación de pregunta: 2010-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l de los siguientes no es un est&aacute;ndar utilizado para el intercambio de datos relativos al comercio electr&oacute;nico?";
 choices[50]= new Array();
 choices[50][0] = "EDIFACT";
 choices[50][1] = "ebXML";
 choices[50][2] = "XMT ";
 choices[50][3] = "UBL";
 answers[50] = choices[50][2];
 units[50] = "70";
 comments[50] = "Id Pregunta: 7323. NULL";


//  Id pregunta: 8354 AÃ±o de creación de pregunta: 2011-01-01
 questions[51]= "52)  A partir de ASP.NET 2.0, &iquest;en qu&eacute; carpeta se guarda el c&oacute;digo compilado para controles, componentes y otro c&oacute;digo que pueda ser referenciado por la aplicaci&oacute;n (los archivos dll)?";
 choices[51]= new Array();
 choices[51][0] = "App_Data.";
 choices[51][1] = "Bin.";
 choices[51][2] = "App_WebReferences";
 choices[51][3] = "Compilation";
 answers[51] = choices[51][1];
 units[51] = "59,115";
 comments[51] = "Id Pregunta: 8354. Examen TIC A2 2010";


//  Id pregunta: 8370 AÃ±o de creación de pregunta: 2011-01-01
 questions[52]= "53)  La norma UNE 139802:2003 establece requisitos de accesibilidad del software de los ordenadores para !as personas con discapacidad, agrupados en:";
 choices[52]= new Array();
 choices[52][0] = "7 categor&iacute;as: Teclado, dispositivos apuntadores, pantalla, sonido y rnultimedia, notificaci&oacute;n al usuario, informaci&oacute;n de objetos, tiempo.";
 choices[52][1] = "8 categor&iacute;as: Teclado, dispositivos apuntadores, pantalla, sonido y rnultimedia, notificaci&oacute;n al usuario, informaci&oacute;n de objetos, tiempo, documentaci&oacute;n.";
 choices[52][2] = "11 categor&iacute;as: Principios generales, teclado, dispositivos apuntadores, pantalla, sonido, multimedia, notificaci&oacute;n al usuario, informaci&oacute;n de objetos, tiempo, documentaci&oacute;n, otros";
 choices[52][3] = "10 categor&iacute;as: Principios generales, teclado, dispositivos apuntadores, pantalla, sonido y multimedia, notificaci&oacute;n al usuario, informaci&oacute;n de objetos, tiempo, documentaci&oacute;n, otros.";
 answers[52] = choices[52][3];
 units[52] = "39";
 comments[52] = "Id Pregunta: 8370. Examen TIC A2 2010";


//  Id pregunta: 8403 AÃ±o de creación de pregunta: 2011-01-01
 questions[53]= "54)  Indique cu&aacute;l NO es una de las condiciones que debe cumplir un documento electr&oacute;nico para ser considerado copia electr&oacute;nica aut&eacute;ntica:";
 choices[53]= new Array();
 choices[53][0] = "Que sea autorizada mediante firma electr&oacute;nica.";
 choices[53][1] = "Que incorpore un sello automatizado que refleje el car&aacute;cter de copia en la impresi&oacute;n del documento. ";
 choices[53][2] = "Que la copia sea obtenida conforme a las normas de competencia y procedimiento. ";
 choices[53][3] = "Que el documento electr&oacute;nico original se encuentre en poder de la Administraci&oacute;n.";
 answers[53] = choices[53][1];
 units[53] = "43";
 comments[53] = "Id Pregunta: 8403. Examen TIC A2 2010";


//  Id pregunta: 8423 AÃ±o de creación de pregunta: 2011-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l de los siguientes principios b&aacute;sicos no aparece en el Esquema Nacional de Seguridad, Real Decreto 3/2010 del 8 de enero?";
 choices[54]= new Array();
 choices[54][0] = "Seguridad integral";
 choices[54][1] = "An&aacute;lisis de riesgos";
 choices[54][2] = "Reevaluaci&oacute;n peri&oacute;dica";
 choices[54][3] = "Funci&oacute;n diferenciada";
 answers[54] = choices[54][1];
 units[54] = "43";
 comments[54] = "Id Pregunta: 8423. El principio es gesti&oacute;n de riesgos, no an&aacute;lisis de riesgos.";


//  Id pregunta: 8425 AÃ±o de creación de pregunta: 2011-01-01
 questions[55]= "56)  &iquest;Cu&aacute;l de los siguientes principios b&aacute;sicos no aparece en el Esquema Nacional de Interoperabilidad, Real Decreto 4/2010 del 8 de enero?";
 choices[55]= new Array();
 choices[55][0] = "La interoperabilidad como cualidad integral";
 choices[55][1] = "La reutilizaci&oacute;n y la transferencia tecnol&oacute;gica";
 choices[55][2] = "El car&aacute;cter multidimensional de la interoperabilidad";
 choices[55][3] = "El enfoque de soluciones multilaterales";
 answers[55] = choices[55][1];
 units[55] = "43";
 comments[55] = "Id Pregunta: 8425. ";


//  Id pregunta: 8426 AÃ±o de creación de pregunta: 2011-01-01
 questions[56]= "57)  &iquest;Cu&aacute;l de las siguientes normas t&eacute;cnicas de interoperabilidad no est&aacute; contemplada en el Desarrollo del Esquema Nacional de Interoperabilidad (disposici&oacute;n adicional primera), en el Real Decreto 4/2010 del 8 de enero?";
 choices[56]= new Array();
 choices[56][0] = "Cat&aacute;logo de est&aacute;ndares";
 choices[56][1] = "Documento electr&oacute;nico";
 choices[56][2] = "Expediente electr&oacute;nico";
 choices[56][3] = "Sede electr&oacute;nica";
 answers[56] = choices[56][3];
 units[56] = "43";
 comments[56] = "Id Pregunta: 8426. ";


//  Id pregunta: 8744 AÃ±o de creación de pregunta: 2011-01-01
 questions[57]= "58)  El impulso de la factura electr&oacute;nica, como obligatoria en el marco de la contrataci&oacute;n en el sector p&uacute;blico estatal se establece en la ley:";
 choices[57]= new Array();
 choices[57][0] = "34/2002, de 11 de Julio, de Servicios de la Sociedad de la Informaci&oacute;n y de Comercio Electr&oacute;nico.";
 choices[57][1] = "56/2007, de 28 de diciembre, de Medidas de Impulso de la Sociedad de la Informaci&oacute;n";
 choices[57][2] = "59/2003, de 19 de diciembre, de Firma Electr&oacute;nica.";
 choices[57][3] = "11/2007. de 22 de junio, de Acceso Electr&oacute;nico de los Ciudadanos a los Servicios P&uacute;blicos";
 answers[57] = choices[57][1];
 units[57] = "70";
 comments[57] = "Id Pregunta: 8744. Examen TIC A2 2010 interna";


//  Id pregunta: 8745 AÃ±o de creación de pregunta: 2011-01-01
 questions[58]= "59)  &iquest;C&oacute;mo se define la sede electr&oacute;nica en la Ley 11/2007, de 22 de junio, de Acceso Electr&oacute;nico de los Ciudadanos a los Servicios P&uacute;blicos, LAECSP?";
 choices[58]= new Array();
 choices[58][0] = "La sede electr&oacute;nica no se define en la LAECSP, sino en la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Informaci&oacute;n y de Comercio Electr&oacute;nico, tanto para el sector p&uacute;blico como el privado.";
 choices[58][1] = "Es aquella direcci&oacute;n electr&oacute;nica disponible para los ciudadanos a trav&eacute;s de redes de telecomunicaciones cuya titularidad, gesti&oacute;n y administraci&oacute;n corresponde a una Administraci&oacute;n P&uacute;blica &oacute;rgano o entidad administrativa en el ejercicio de sus competencias";
 choices[58][2] = "Se establece simplemente como nueva denominaci&oacute;n para el registro telem&aacute;tico, ya definido en la Ley 30/1992. de 26 de noviembre de R&eacute;gimen Jur&iacute;dico de las Administraciones P&uacute;blicas y del Procedimiento Administrativo Com&uacute;n, LRJPAC";
 choices[58][3] = "Es el centro de proceso de datos correspondiente a cada &oacute;rgano p&uacute;blico, d&oacute;nde se localizan los aplicativos mediante los cuales aqu&eacute;l ejerce sus competencias.";
 answers[58] = choices[58][1];
 units[58] = "43";
 comments[58] = "Id Pregunta: 8745. Examen TIC A2 2010 interna";


//  Id pregunta: 8941 AÃ±o de creación de pregunta: 2011-01-01
 questions[59]= "60)  Los certificados de sello electr&oacute;nico contemplados en la ley 18/2011 tendr&aacute;n al menos:";
 choices[59]= new Array();
 choices[59][0] = "N&uacute;mero de identificaci&oacute;n fiscal del suscriptor";
 choices[59][1] = "Actuaciones y documentos en los que podr&aacute;n ser utilizados";
 choices[59][2] = "N&uacute;mero de identificaci&oacute;n judicial";
 choices[59][3] = "Ninguno de los anteriores";
 answers[59] = choices[59][2];
 units[59] = "43";
 comments[59] = "Id Pregunta: 8941. ";


//  Id pregunta: 8943 AÃ±o de creación de pregunta: 2011-01-01
 questions[60]= "61)  El Comit&eacute; t&eacute;cnico estatal de la Administraci&oacute;n judicial electr&oacute;nica no estar&aacute; integrado por:";
 choices[60]= new Array();
 choices[60][0] = "Una representaci&oacute;n del Consejo Superior de Administraci&oacute;n Electr&oacute;nica";
 choices[60][1] = "Los representantes que al efecto podr&aacute; designar la Fiscal&iacute;a General del Estado";
 choices[60][2] = "Una representaci&oacute;n del Ministerio de Justicia";
 choices[60][3] = "Estar&aacute; integrado por todos los anteriores";
 answers[60] = choices[60][0];
 units[60] = "43";
 comments[60] = "Id Pregunta: 8943. ";


//  Id pregunta: 8947 AÃ±o de creación de pregunta: 2011-01-01
 questions[61]= "62)  Seg&uacute;n el Esquema Nacional de Seguridad, &iquest;cu&aacute;ndo se deben registrar todas las actividades de los usuarios en el sistema?";
 choices[61]= new Array();
 choices[61][0] = "Cuando la categor&iacute;a del sistema sea alta";
 choices[61][1] = "Cuando as&iacute; lo decida el responsable de los servidores";
 choices[61][2] = "Cuando la dimensi&oacute;n de trazabilidad sea de nivel alto";
 choices[61][3] = "En todos los casos anteriores";
 answers[61] = choices[61][2];
 units[61] = "43";
 comments[61] = "Id Pregunta: 8947. ";


//  Id pregunta: 8986 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  &iquest;Cu&aacute;l de las siguientes es una recomendaci&oacute;n del formato Facturae";
 choices[62]= new Array();
 choices[62][0] = "Formato de firma XMLDSig ENVELOPED";
 choices[62][1] = "Algoritmo de canonicalizaci&oacute;n C14N";
 choices[62][2] = "Algoritmo de firma RSA sobre SHA1";
 choices[62][3] = "Todas las anteriores";
 answers[62] = choices[62][3];
 units[62] = "70";
 comments[62] = "Id Pregunta: 8986. NULL";


//  Id pregunta: 9055 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  &iquest;Cual de los siguientes NO es un principio del dise&ntilde;o universal ?";
 choices[63]= new Array();
 choices[63][0] = "Escaso esfuerzo f&iacute;sico";
 choices[63][1] = "Simple e intuitivo.";
 choices[63][2] = "Informaci&oacute;n f&aacute;cil de percibir";
 choices[63][3] = "universalidad";
 answers[63] = choices[63][3];
 units[63] = "39";
 comments[63] = "Id Pregunta: 9055. NULL";


//  Id pregunta: 9070 AÃ±o de creación de pregunta: 2013-01-01
 questions[64]= "65)  &iquest;Cu&aacute;ntas gu&iacute;as de accesibilidad del WAI existen actualmente (abril de 2013)?";
 choices[64]= new Array();
 choices[64][0] = "Tres: ATAG, WCAG y UUAG. ";
 choices[64][1] = "Seis: ATAG, WCAG, UAAG, XAG, FCAG y WAI-RIA. ";
 choices[64][2] = "Cuatro: ATAG, WCAG, UAAG y XAG. ";
 choices[64][3] = "Cinco: ATAG, WCAG, UAAG, XAG y WAI-RIA. ";
 answers[64] = choices[64][3];
 units[64] = "39";
 comments[64] = "Id Pregunta: 9070. ";


//  Id pregunta: 9576 AÃ±o de creación de pregunta: 2013-01-01
 questions[65]= "66)  Seg&uacute;n el art&iacute;culo 4 de la Ley 11/2007, de 22 de junio, de Acceso electr&oacute;nico de los ciudadanos a los Servicios P&uacute;blicos, el principio de igualdad en la utilizaci&oacute;n de tecnolog&iacute;as de la informaci&oacute;n se refiere a:";
 choices[65]= new Array();
 choices[65][0] = "La exigencia de id&eacute;ntico nivel de garant&iacute;as y seguridad que el que se requiere para la utilizaci&oacute;n de medios no electr&oacute;nicos en la actividad administrativa.";
 choices[65][1] = "Que en ning&uacute;n caso el uso de medios electr&oacute;nicos pueda implicar la existencia de restricciones o discriminaciones para los ciudadanos que se relacionen con las Administraciones P&uacute;blicas por medios no electr&oacute;nicos.";
 choices[65][2] = "La garant&iacute;a de la accesibilidad universal y el dise&ntilde;o adaptado para todas las personas de los soportes, canales y entornos con objeto de que todos los ciudadanos puedan ejercer sus derechos en igualdad de condiciones.";
 choices[65][3] = "Que el uso de medios electr&oacute;nicos debe garantizar por igual a todos los ciudadanos la m&aacute;xima difusi&oacute;n, publicidad y transparencia de las actuaciones administrativas.";
 answers[65] = choices[65][1];
 units[65] = "43";
 comments[65] = "Id Pregunta: 9576. Examen TIC A1 2011";


//  Id pregunta: 9742 AÃ±o de creación de pregunta: 2014-01-01
 questions[66]= "67)  Con respecto al Entity Framework &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[66]= new Array();
 choices[66][0] = "Para usar Entity framework se requiere una versi&oacute;n del framework de .Net de 2.0, o superior.";
 choices[66][1] = "Entity framework es la implementaci&oacute;n del Modelo Vista Controlador (MVC) en .NET.";
 choices[66][2] = "El contexto en el Entity Framework es el punto de arranque dentro del espacio de nombres.";
 choices[66][3] = "Entity es una clase u objeto que representa los datos de la aplicaci&oacute;n.";
 answers[66] = choices[66][3];
 units[66] = "59";
 comments[66] = "Id Pregunta: 9742. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9784 AÃ±o de creación de pregunta: 2014-01-01
 questions[67]= "68)  En un documento XML los valores de un atributo:";
 choices[67]= new Array();
 choices[67][0] = "Deben ir siempre entre comillas.";
 choices[67][1] = "Deben ir entre comillas si no son n&uacute;meros o fechas.";
 choices[67][2] = "No deben ir entre comillas.";
 choices[67][3] = "Deben ir entre comillas si son n&uacute;meros o fechas.";
 answers[67] = choices[67][0];
 units[67] = "69";
 comments[67] = "Id Pregunta: 9784. Examen TIC A2 2013";


//  Id pregunta: 9883 AÃ±o de creación de pregunta: 2014-01-01
 questions[68]= "69)  El protocolo SET (Secure Electronic Transaction)";
 choices[68]= new Array();
 choices[68][0] = "Fue desarrollado en 1990 mediante acuerdo bilateral entre Visa e IBM.";
 choices[68][1] = "impide que el vendedor acceda a la informaci&oacute;n de pago.";
 choices[68][2] = "permite que el banco acceda a los datos del pedido para tramitar el pago.";
 choices[68][3] = "no abarca ni liquidaciones de pagos ni anulaciones.";
 answers[68] = choices[68][1];
 units[68] = "70";
 comments[68] = "Id Pregunta: 9883. TIC A1, Examen 2013";


//  Id pregunta: 9942 AÃ±o de creación de pregunta: 2014-01-01
 questions[69]= "70)  El Real Decreto 695/2013 crea la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y de las Comunicaciones. &iquest;Cu&aacute;l es el rango de esta Direcci&oacute;n?";
 choices[69]= new Array();
 choices[69][0] = "Direcci&oacute;n General.";
 choices[69][1] = "Subdirecci&oacute;n General.";
 choices[69][2] = "Subsecretar&iacute;a.";
 choices[69][3] = "Secretar&iacute;a de Estado.";
 answers[69] = choices[69][2];
 units[69] = "44";
 comments[69] = "Id Pregunta: 9942. TIC A1, Examen 2013";


//  Id pregunta: 9992 AÃ±o de creación de pregunta: 2014-01-01
 questions[70]= "71)  &iquest;Cu&aacute;l de las siguientes no es una forma de pago admitida por la Pasarela de Pagos de la Agencia Tributaria?";
 choices[70]= new Array();
 choices[70][0] = "Pago mediante cargo en cuenta";
 choices[70][1] = "Pago con tarjeta";
 choices[70][2] = "Pago por cargo en cuenta de terceras personas, previo apoderamiento registrado en &ldquo;Registro de apoderamientos&rdquo;";
 choices[70][3] = "Pago mediante remesa de importaci&oacute;n para obligados contribuyentes con residencia en el extranjero";
 answers[70] = choices[70][3];
 units[70] = "70";
 comments[70] = "Id Pregunta: 9992. NULL";


//  Id pregunta: 10000 AÃ±o de creación de pregunta: 2014-01-01
 questions[71]= "72)  Las siglas &ldquo;SOAP&rdquo;, en el marco de los servicios web, corresponden a";
 choices[71]= new Array();
 choices[71][0] = "Service Oriented Architecture Protocol.";
 choices[71][1] = "Simple Oriented Access Paradigm.";
 choices[71][2] = "Service Object Architecture Paradigm.";
 choices[71][3] = "Simple Object Access Protocol.";
 answers[71] = choices[71][3];
 units[71] = "69";
 comments[71] = "Id Pregunta: 10000. ";


//  Id pregunta: 10019 AÃ±o de creación de pregunta: 2014-01-01
 questions[72]= "73)  Se&ntilde;ale de entre los siguientes cu&aacute;l NO es un framework de pruebas unitarias para Microsoft .NET:";
 choices[72]= new Array();
 choices[72][0] = "xUnit";
 choices[72][1] = "xUnit.net";
 choices[72][2] = "NUnit";
 choices[72][3] = "csUnit";
 answers[72] = choices[72][0];
 units[72] = "59";
 comments[72] = "Id Pregunta: 10019. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10159 AÃ±o de creación de pregunta: 2014-01-01
 questions[73]= "74)  El conjunto de especificaciones orientadas al intercambio de datos entre Administraciones P&uacute;blicas con el objetivo de eliminar los certificados administrativos en papel se denomina:";
 choices[73]= new Array();
 choices[73][0] = "SCCD";
 choices[73][1] = "SCSP";
 choices[73][2] = "Plataforma de intermedicaci&oacute;n";
 choices[73][3] = "Ninguno de los anteriores";
 answers[73] = choices[73][1];
 units[73] = "44";
 comments[73] = "Id Pregunta: 10159. ";


//  Id pregunta: 10227 AÃ±o de creación de pregunta: 2014-01-01
 questions[74]= "75)  Cual de los siguientes m&eacute;todos son m&eacute;todosde la clase Thread:";
 choices[74]= new Array();
 choices[74][0] = "sleep(long msec);";
 choices[74][1] = "start();";
 choices[74][2] = "wait();";
 choices[74][3] = "A y B son correctas.";
 answers[74] = choices[74][3];
 units[74] = "60";
 comments[74] = "Id Pregunta: 10227. start() es un m&eacute;todo de Thread. Se cambia la opci&oacute;n D, notifyAll, por la actual.";


//  Id pregunta: 10241 AÃ±o de creación de pregunta: 2014-01-01
 questions[75]= "76)  Teniendo el siguiente c&oacute;digo, despu&eacute;s de ejecutarse &iquest;que respuestas son correctas?:int [] x = new int[25];";
 choices[75]= new Array();
 choices[75][0] = "x[24] es 0";
 choices[75][1] = "x[24] es indefinido";
 choices[75][2] = "x[25] es 0";
 choices[75][3] = "x[0] es igual a null";
 answers[75] = choices[75][0];
 units[75] = "60";
 comments[75] = "Id Pregunta: 10241. NULL";


//  Id pregunta: 10468 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  &iquest;Cu&aacute;les son los nuevos elementos de HTML5?";
 choices[76]= new Array();
 choices[76][0] = "header y footer.";
 choices[76][1] = "nav.";
 choices[76][2] = "sections y articles.";
 choices[76][3] = "Todas las anteriores.";
 answers[76] = choices[76][3];
 units[76] = "69";
 comments[76] = "Id Pregunta: 10468. NULL";


//  Id pregunta: 10472 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  Respecto a los certificados X.509 v3:";
 choices[77]= new Array();
 choices[77][0] = "Las extensiones se clasifican en cr&iacute;ticas, no criticas y recomendables.";
 choices[77][1] = "Las extensiones no cr&iacute;ticas pueden ignorarse si no se pueden procesar o se decide no hacerlo.";
 choices[77][2] = "Un certificado s&oacute;lo puede contener una extensi&oacute;n de un determinado tipo.";
 choices[77][3] = "No pueden definirse extensiones para uso privado.";
 answers[77] = choices[77][1];
 units[77] = "73";
 comments[77] = "Id Pregunta: 10472. ";


//  Id pregunta: 10475 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  Si usamos el m&eacute;todo de comprobaci&oacute;n de la validez de un certificado mediante CRL en vez de OCSP puede ocurrir que (marcar la correcta respecto a CRL que no ocurrir&iacute;a usando OCSP)&hellip;";
 choices[78]= new Array();
 choices[78][0] = "El certificado que estamos validando est&eacute; malformado";
 choices[78][1] = "La autoridad de certificaci&oacute;n que emiti&oacute; el certificado sea incorrecta";
 choices[78][2] = "El certificado haya sido revocado desde la anterior emisi&oacute;n de CRL pero la consulta lo d&eacute; por v&aacute;lido";
 choices[78][3] = "El certificado haya expirado pero no se pueda verificar  la fecha de fin de validez y la comprobaci&oacute;n lo d&eacute; por v&aacute;lido cuando est&aacute; expirado.";
 answers[78] = choices[78][2];
 units[78] = "73";
 comments[78] = "Id Pregunta: 10475. ";


//  Id pregunta: 10580 AÃ±o de creación de pregunta: 2015-01-01
 questions[79]= "80)  No es objetivo de la Ley 11/2007:";
 choices[79]= new Array();
 choices[79][0] = "Reconocer el derecho de los ciudadanos a relacionarse con las Administraciones P&uacute;blicas por medios electr&oacute;nicos.";
 choices[79][1] = "Garantizar el acceso a todos los servicios electr&oacute;nicos.";
 choices[79][2] = "Aumentar la utilizaci&oacute;n del DNI electr&oacute;nico por los ciudadanos.";
 choices[79][3] = "Impulsar el uso de los servicios electr&oacute;nicos.";
 answers[79] = choices[79][2];
 units[79] = "43";
 comments[79] = "Id Pregunta: 10580. ";


//  Id pregunta: 10583 AÃ±o de creación de pregunta: 2015-01-01
 questions[80]= "81)  El empleo de algoritmos de firma electr&oacute;nica acreditados por el Centro Criptol&oacute;gico Nacional:";
 choices[80]= new Array();
 choices[80][0] = "Es una medida del Esquema Nacional de Seguridad para la dimensi&oacute;n de confidencialidad.";
 choices[80][1] = "Es una medida de nivel medio del Esquema Nacional de Seguridad.";
 choices[80][2] = "Es una recomendaci&oacute;n de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 choices[80][3] = "Ninguna de las anteriores.";
 answers[80] = choices[80][1];
 units[80] = "43";
 comments[80] = "Id Pregunta: 10583. ";


//  Id pregunta: 10601 AÃ±o de creación de pregunta: 2015-01-01
 questions[81]= "82)  En materia de accesibilidad, las Administraciones P&uacute;blicas deben cumplir:";
 choices[81]= new Array();
 choices[81][0] = "El Real Decreto 1494/2007";
 choices[81][1] = "Los niveles A y AA de la norma UNE 139803:2012";
 choices[81][2] = "Los niveles A y AA de las WCAG 2.0";
 choices[81][3] = "Todas las anteriores.";
 answers[81] = choices[81][3];
 units[81] = "39";
 comments[81] = "Id Pregunta: 10601. ";


//  Id pregunta: 10711 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  &iquest;Qu&eacute; especificaci&oacute;n de SICRES se incluye en la Norma T&eacute;cnica de Interoperabilidad de Modelo de Datos para el Intercambio de asientos entre las entidades registrales?";
 choices[82]= new Array();
 choices[82][0] = "1";
 choices[82][1] = "2";
 choices[82][2] = "3";
 choices[82][3] = "4";
 answers[82] = choices[82][1];
 units[82] = "43";
 comments[82] = "Id Pregunta: 10711. ";


//  Id pregunta: 10751 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  &iquest;Cu&aacute;l de los siguientes no es un principio rector de la Estrategia de Ciberseguridad Nacional?";
 choices[83]= new Array();
 choices[83][0] = "Liderazgo internacional y coordinaci&oacute;n de esfuerzos";
 choices[83][1] = "Responsabilidad compartida";
 choices[83][2] = "Proporcionalidad racionalidad y eficacia";
 choices[83][3] = "Cooperaci&oacute;n Internacional";
 answers[83] = choices[83][0];
 units[83] = "43";
 comments[83] = "Id Pregunta: 10751. ";


//  Id pregunta: 10756 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  &iquest;C&oacute;mo se denomina la Comisi&oacute;n Delegada del Gobierno para la Seguridad Nacional que asiste al Presidente del Gobierno en la direcci&oacute;n de la Pol&iacute;tica de Seguridad Nacional?";
 choices[84]= new Array();
 choices[84][0] = "El Consejo de Seguridad Nacional.";
 choices[84][1] = "El Comit&eacute; Especializado de Ciberseguridad.";
 choices[84][2] = "El Comit&eacute; Especializado de Situaci&oacute;n.";
 choices[84][3] = "El Consejo Ejecutivo de Ciberseguridad.";
 answers[84] = choices[84][0];
 units[84] = "43";
 comments[84] = "Id Pregunta: 10756. ";


//  Id pregunta: 10760 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  &iquest;Qu&eacute; serie CCN-STIC establece las pol&iacute;ticas y procedimientos adecuados para la implementaci&oacute;n de las medidas contempladas en el Esquema Nacional de Seguridad?";
 choices[85]= new Array();
 choices[85][0] = "500";
 choices[85][1] = "600";
 choices[85][2] = "700";
 choices[85][3] = "800";
 answers[85] = choices[85][3];
 units[85] = "43";
 comments[85] = "Id Pregunta: 10760. ";


//  Id pregunta: 10762 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  Seg&uacute;n las definiciones establecidas en las gu&iacute;as CCN-STIC &iquest;Qu&eacute; es la &quot;Manifestaci&oacute;n  escrita  de  los  &oacute;rganos  o  entidades  de derecho  p&uacute;blico,  firmada  por  su responsable, mediante la que se da publicidad que los sistemas a que  se refieren cumplen con  las  exigencias  del  Esquema  Nacional  de  Seguridad  aprobado  por  Real  Decreto 3/2010, de 8 de enero&quot;?";
 choices[86]= new Array();
 choices[86][0] = "Informe de auditor&iacute;a";
 choices[86][1] = "Declaraci&oacute;n de conformidad";
 choices[86][2] = "Aceptaci&oacute;n del esquema de seguridad";
 choices[86][3] = "Formalizaci&oacute;n de la conformidad";
 answers[86] = choices[86][1];
 units[86] = "43";
 comments[86] = "Id Pregunta: 10762. ";


//  Id pregunta: 10782 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  Respecto al sistema de c&oacute;digo seguro de verificaci&oacute;n, seg&uacute;n el Real Decreto 1671/2009, &iquest;cu&aacute;l de las siguientes es una afirmaci&oacute;n verdadera?";
 choices[87]= new Array();
 choices[87][0] = "Garantiza la confidencialidad de un documento.";
 choices[87][1] = "Garantiza la posibilidad de verificar el documento que tenga asociado por tiempo ilimitado.";
 choices[87][2] = "Su aplicaci&oacute;n requerir&aacute; una orden ministerial del Director General del organismo p&uacute;blico.";
 choices[87][3] = "Garantiza su vinculaci&oacute;n con el documento generado y con el firmante.";
 answers[87] = choices[87][3];
 units[87] = "43";
 comments[87] = "Id Pregunta: 10782. Examen GSI 2014";


//  Id pregunta: 10847 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  La especificaci&oacute;n &ldquo;Java Platform, Enterprise Edition 7 (Java EE 7)&rdquo; se encuentra definida en el JSR (Java Specification Request):";
 choices[88]= new Array();
 choices[88][0] = "JSR 342.";
 choices[88][1] = "JSR 366.";
 choices[88][2] = "JSR 324.";
 choices[88][3] = "JSR 224.";
 answers[88] = choices[88][0];
 units[88] = "60, 116";
 comments[88] = "Id Pregunta: 10847. Examen GSI 2014";


//  Id pregunta: 10852 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  En .NET, &iquest;qu&eacute; es el Managed Extensibility Framework (MEF)?";
 choices[89]= new Array();
 choices[89][0] = "Es una arquitectura que proporciona primitivos as&iacute;ncronos de paso de aprobaci&oacute;n de mensajes sin tipo.";
 choices[89][1] = "Es un modelo extensible de programaci&oacute;n, motor y herramientas para generar con rapidez aplicaciones de flujo de trabajo en Windows.";
 choices[89][2] = "Es una biblioteca de clases portable que permite escribir y compilar ensamblados administrados capaces de funcionar en m&uacute;ltiples plataformas de .NET.";
 choices[89][3] = "Es una biblioteca para crear aplicaciones ligeras y extensibles.";
 answers[89] = choices[89][3];
 units[89] = "59, 115";
 comments[89] = "Id Pregunta: 10852. Examen GSI 2014";


//  Id pregunta: 10936 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  Seg&uacute;n lo dispuesto en la Norma T&eacute;cnica de Interoperabilidad de Modelo de Datos para el Intercambio de asientos entre las entidades registrales (SICRES 3.0) es correcto que:";
 choices[90]= new Array();
 choices[90][0] = "El segmento &quot;de internos y control&quot; contiene informaci&oacute;n sobre si el asiento registral incluye documentaci&oacute;n f&iacute;sica requerida para el tr&aacute;mite del procedimiento.";
 choices[90][1] = "El c&oacute;digo de la Entidad Registral de Destino debe incluir un prefijo que identifique al Ministerio (MXX-YYYY), seg&uacute;n se establece en la codificaci&oacute;n de organismos del Directorio Com&uacute;n.";
 choices[90][2] = "El segmento &quot;de anexo&quot; es obligatorio y puede declararse de forma m&uacute;ltiple.";
 choices[90][3] = "En el segmento &quot;de internos y de control&quot; se incluye la firma del documento anexo, como un campo obligatorio.";
 answers[90] = choices[90][0];
 units[90] = "43";
 comments[90] = "Id Pregunta: 10936. TIC A1 AGE 2014";


//  Id pregunta: 11042 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;Cu&aacute;l de las siguientes afirmaciones acerca de los compiladores es correcta?";
 choices[91]= new Array();
 choices[91][0] = "Los compiladores AOT (Ahead-Of-Time) compilan a c&oacute;digo m&aacute;quina nativo antes de la ejecuci&oacute;n de la aplicaci&oacute;n";
 choices[91][1] = "Los compiladores JIT (Just in Time) compilan durante la ejecuci&oacute;n";
 choices[91][2] = "Los 2 respuestas anteriores son correctas";
 choices[91][3] = "Ninguna de las anteriores es correcta";
 answers[91] = choices[91][2];
 units[91] = "60";
 comments[91] = "Id Pregunta: 11042. ";


//  Id pregunta: 11047 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l es la &uacute;ltima versi&oacute;n de HTTP a fecha Octubre 2015?";
 choices[92]= new Array();
 choices[92][0] = "1.1";
 choices[92][1] = "2";
 choices[92][2] = "1.3";
 choices[92][3] = "3";
 answers[92] = choices[92][1];
 units[92] = "69";
 comments[92] = "Id Pregunta: 11047. ";


//  Id pregunta: 11054 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Qu&eacute; elemento de X.500 es el conjunto de toda la informaci&oacute;n disponible en el Servicio de Directorio?";
 choices[93]= new Array();
 choices[93][0] = "DIB";
 choices[93][1] = "DSA";
 choices[93][2] = "DUA";
 choices[93][3] = "DISP";
 answers[93] = choices[93][0];
 units[93] = "73";
 comments[93] = "Id Pregunta: 11054. ";


//  Id pregunta: 11062 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Respecto a la factura electr&oacute;nica:";
 choices[94]= new Array();
 choices[94][0] = "S&oacute;lo es obligatoria en el &aacute;mbito de la AGE";
 choices[94][1] = "Reglamentariamente pueden excluirse las de importe inferior a 5000&euro;";
 choices[94][2] = "No est&aacute;n obligadas las agrupaciones de inter&eacute;s econ&oacute;mico europeas";
 choices[94][3] = "Todas son correctas";
 answers[94] = choices[94][1];
 units[94] = "70";
 comments[94] = "Id Pregunta: 11062. ";


//  Id pregunta: 11124 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Cu&aacute;l de lo siguientes no es un servicio horizontal de la red SARA?";
 choices[95]= new Array();
 choices[95][0] = "Plataforma  de validaci&oacute;n de firma electr&oacute;nica @firma";
 choices[95][1] = "Solicitud de cambio de domicilio";
 choices[95][2] = "Pasarela de pago";
 choices[95][3] = "Registro Central de Personal";
 answers[95] = choices[95][3];
 units[95] = "44";
 comments[95] = "Id Pregunta: 11124. ";


//  Id pregunta: 11218 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Cu&aacute;l de las siguientes respuestas es falsa:";
 choices[96]= new Array();
 choices[96][0] = "Los compiladores nativos eliminan la independencia de la plataforma del c&oacute;digo compilado a cambio de proporcionar un mayor rendimiento.";
 choices[96][1] = "Los compiladores nativos AOT (Ahead-Of-time) compilan a c&oacute;digo m&aacute;quina nativo antes de la ejecuci&oacute;n de la aplicaci&oacute;n.";
 choices[96][2] = "Los compiladores JIT (Just in Time) compilan durante la ejecuci&oacute;n.";
 choices[96][3] = "Todas son verdaderas.";
 answers[96] = choices[96][3];
 units[96] = "60";
 comments[96] = "Id Pregunta: 11218. ";


//  Id pregunta: 11500 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Cu&aacute;l de los siguientes aspectos NO est&aacute; recogido como una Instrucci&oacute;n T&eacute;cnica de Seguridad seg&uacute;n el Esquema Nacional de Seguridad?";
 choices[97]= new Array();
 choices[97][0] = "Informe de Estado de Seguridad";
 choices[97][1] = "Auditor&iacute;a de Seguridad";
 choices[97][2] = "Interconexi&oacute;n en el Esquema Nacional de Seguridad";
 choices[97][3] = "Protocolo de Comunicaciones Seguras";
 answers[97] = choices[97][3];
 units[97] = "43";
 comments[97] = "Id Pregunta: 11500. Instrucci&oacute;n t&eacute;cnica de seguridad introducido por la disp. Adicional 4&ordf; RD 951/2015 que modifica el ENS.";


//  Id pregunta: 11752 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Cu&aacute;l de los siguientes no es un principio de accesibilidad?";
 choices[98]= new Array();
 choices[98][0] = "robusto";
 choices[98][1] = "operable";
 choices[98][2] = "universal";
 choices[98][3] = "perceptible";
 answers[98] = choices[98][2];
 units[98] = "39";
 comments[98] = "Id Pregunta: 11752. ";


//  Id pregunta: 11787 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Se&ntilde;ale cu&aacute;l de las siguientes NO es una gu&iacute;a CCN-STIC:";
 choices[99]= new Array();
 choices[99][0] = "CCN-STIC-804 - Medidas de implantaci&oacute;n del Esquema Nacional de Seguridad";
 choices[99][1] = "CCN-STIC-820 - Protecci&oacute;n Contra Denegaci&oacute;n de Servicio";
 choices[99][2] = "CCN-STIC-823 - Seguridad en entornos Cloud";
 choices[99][3] = "CCN-STIC-830 - Medidas de seguridad en el puesto de trabajo (entorno ofim&aacute;tico).";
 answers[99] = choices[99][3];
 units[99] = "43";
 comments[99] = "Id Pregunta: 11787. ";


