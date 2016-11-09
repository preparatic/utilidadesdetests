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

//  Id pregunta: 20 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;les de los siguientes son objetivos importantes que persigue la pol&iacute;tica comunitaria en materia de normalizaci&oacute;n?:";
 choices[0]= new Array();
 choices[0][0] = "Crear un entorno competitivo y defender y proteger la inversi&oacute;n de los usuarios en las tecnolog&iacute;as de la informaci&oacute;n";
 choices[0][1] = "Crear un entorno de trabajo uniforme y normalizado en todas las administraciones europeas y conseguir la plena movilidad de funcionarios a trav&eacute;s de las distintas instituciones de toda la UE";
 choices[0][2] = "Suprimir las barreras de comercio en el sector de tecnolog&iacute;as de informaci&oacute;n en el mercado &uacute;nico con vistas a proteger la industria europea de la materia";
 choices[0][3] = "Las respuestas a) y b) en conjunto";
 answers[0] = choices[0][3];
 units[0] = "40";
 comments[0] = "Id Pregunta: 20. ";


//  Id pregunta: 55 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Cu&aacute;ntos niveles de adecuaci&oacute;n hay en WAI?";
 choices[1]= new Array();
 choices[1][0] = "3";
 choices[1][1] = "4";
 choices[1][2] = "5";
 choices[1][3] = "6";
 answers[1] = choices[1][0];
 units[1] = "39";
 comments[1] = "Id Pregunta: 55. ";


//  Id pregunta: 58 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;En qu&eacute; fuentes se encuentran las normas a aplicar sobre sistemas abiertos en la Administraci&oacute;n?:";
 choices[2]= new Array();
 choices[2][0] = "CIABSI y CSI";
 choices[2][1] = "MAP y MJI";
 choices[2][2] = "Normas ISO, X/OPEN y EPHOS";
 choices[2][3] = "ANSI, AENOR, DIN e IRANOR";
 answers[2] = choices[2][2];
 units[2] = "40";
 comments[2] = "Id Pregunta: 58. ";


//  Id pregunta: 101 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  En relaci&oacute;n con los sistemas abiertos, indique la afirmaci&oacute;n que no es correcta:";
 choices[3]= new Array();
 choices[3][0] = "Los sistemas abiertos son aqu&eacute;llos cuyas especificaciones est&aacute;n aprobadas por organismos independientes de normalizaci&oacute;n";
 choices[3][1] = "En lo tocante a sistemas operativos, sistema abierto es sin&oacute;nimo de Unix";
 choices[3][2] = "Sistemas abiertos son aqu&eacute;llos que pueden ser adquiridos de fuentes distintas en un mercado competitivo";
 choices[3][3] = "Un sistema definido como abierto es capaz de interconectarse con otro de acuerdo con unas normas establecidas";
 answers[3] = choices[3][1];
 units[3] = "40";
 comments[3] = "Id Pregunta: 101. ";


//  Id pregunta: 102 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  En relaci&oacute;n con los sistemas abiertos, las caracter&iacute;sticas t&eacute;cnicas m&aacute;s comunmente citadas son:";
 choices[4]= new Array();
 choices[4][0] = "Interoperabilidad, consistencia y escalabilidad";
 choices[4][1] = "Interoperabilidad, conectividad e  integrabilidad";
 choices[4][2] = "Consistencia, portabilidad e integrabilidad";
 choices[4][3] = "Interoperabilidad, portabilidad y escalabilidad";
 answers[4] = choices[4][3];
 units[4] = "40";
 comments[4] = "Id Pregunta: 102. ";


//  Id pregunta: 112 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  De  acuerdo a la Decisi&oacute;n  87/95/CEE del Consejo de las CC.EE., &iquest;en qu&eacute; circunstancias excepcionales el sector p&uacute;blico puede adquirir bienes y servicios relativos al campo de las TIC utilizando especificaciones no normalizadas?:";
 choices[5]= new Array();
 choices[5][0] = "Continuidad de funcionamiento";
 choices[5][1] = "Innovaci&oacute;n";
 choices[5][2] = "Coste excesivo";
 choices[5][3] = "Todas las anteriores";
 answers[5] = choices[5][3];
 units[5] = "40";
 comments[5] = "Id Pregunta: 112. ";


//  Id pregunta: 294 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  La definici&oacute;n de un entorno com&uacute;n para portabilidad de Aplicaciones fuente (Homogeneidad de Compiladores, APIs&hellip;) es una de las preocupaciones fundamentales del X/Open (actualmente Open Group) que se conoce como:";
 choices[6]= new Array();
 choices[6][0] = "XTI";
 choices[6][1] = "CAE";
 choices[6][2] = "APA";
 choices[6][3] = "GOSIP";
 answers[6] = choices[6][1];
 units[6] = "40";
 comments[6] = "Id Pregunta: 294. ";


//  Id pregunta: 479 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  Las caracter&iacute;sticas fundamentales que se buscan con los sistemas abiertos son :";
 choices[7]= new Array();
 choices[7][0] = "Interoperabilidad, escalabilidad y portabilidad";
 choices[7][1] = "Sistemas multiproceso, multiusuario y multitarea compuestos por componentes de diversos fabricantes";
 choices[7][2] = "Poder pasar de un ordenador de sobremesa a un gran mainframe sin tener que cambiar de entorno de trabajo";
 choices[7][3] = "Interconexi&oacute;n de sistemas bajo un mismo sistema operativo, conectividad de perif&eacute;ricos, un entorno consistente en productos y tecnolog&iacute;as y un mejor posicionamiento desde el punto de vista econ&oacute;mico";
 answers[7] = choices[7][0];
 units[7] = "40";
 comments[7] = "Id Pregunta: 479. ";


//  Id pregunta: 684 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  El informe WITSA se refiere a:";
 choices[8]= new Array();
 choices[8][0] = "Gobierno y Administraci&oacute;n electr&oacute;nica";
 choices[8][1] = "Evoluci&oacute;n de la I+D en cada pa&iacute;s";
 choices[8][2] = "Implantaci&oacute;n de las tecnolog&iacute;as de banda ancha inal&aacute;mbricas en cada pa&iacute;s";
 choices[8][3] = "No existe tal informe";
 answers[8] = choices[8][0];
 units[8] = "44";
 comments[8] = "Id Pregunta: 684. ";


//  Id pregunta: 708 AÃ±o de creación de pregunta: 2004-01-01
 questions[9]= "10)  Cu&aacute;l de las siguientes tecnolog&iacute;as no est&aacute; relacionada con la identificaci&oacute;n y autentificaci&oacute;n:";
 choices[9]= new Array();
 choices[9][0] = "Certificados";
 choices[9][1] = "Single Sign On";
 choices[9][2] = "Kerberos";
 choices[9][3] = "NetBios";
 answers[9] = choices[9][3];
 units[9] = "73";
 comments[9] = "Id Pregunta: 708. Similar a examen TIC SS A 2004";


//  Id pregunta: 716 AÃ±o de creación de pregunta: 2004-01-01
 questions[10]= "11)  En el lenguaje Java, la misi&oacute;n del recolector de basura (garbage collector) es:";
 choices[10]= new Array();
 choices[10][0] = "Limpiar o eliminar los objetos no usados o referenciados";
 choices[10][1] = "En los que en otros entornos de programcaci&oacute;n se llama depurador o debugger";
 choices[10][2] = "Es parte del estandar JDBC para acceder a tablas de bases de datos";
 choices[10][3] = "Java no dispone de tal mecanismo &quot;garbage collector&quot;";
 answers[10] = choices[10][0];
 units[10] = "60";
 comments[10] = "Id Pregunta: 716. Examen TIC MAP B 2004";


//  Id pregunta: 765 AÃ±o de creación de pregunta: 2004-01-01
 questions[11]= "12)  con respecto a la seguridad";
 choices[11]= new Array();
 choices[11][0] = "PGP basa su modelo en la existencia de una entidad de certificacion ";
 choices[11][1] = "si la entidad de certificaci&oacute;n es de reconocido prestigio, no se necesita entidad de registro en PKI";
 choices[11][2] = "El certificado digital contiene s&oacute;lo la clave p&uacute;blica, no los datos del sujeto";
 choices[11][3] = "Ninguna de las anteriores";
 answers[11] = choices[11][3];
 units[11] = "73";
 comments[11] = "Id Pregunta: 765. ";


//  Id pregunta: 827 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  &iquest;C&oacute;mo son los tipos de datos en Java?:";
 choices[12]= new Array();
 choices[12][0] = "Pese a estar orientado a objetos el lenguaje, los tipos no est&aacute;n orientados a objetos";
 choices[12][1] = "Al estar orientado a objetos el lenguaje, los tipos est&aacute;n orientados a objetos";
 choices[12][2] = "Algunos de los tipos son orientados a objetos y otros no";
 choices[12][3] = "Debido a las peculiares caracteristicas de Java , los tipos de datos no pueden clasificarse en ninguna de las dos categor&iacute;as.";
 answers[12] = choices[12][2];
 units[12] = "60";
 comments[12] = "Id Pregunta: 827. String es un tipo de dato objeto";


//  Id pregunta: 1010 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  El creador de HTML fue:";
 choices[13]= new Array();
 choices[13][0] = "Tim Berners-Lee";
 choices[13][1] = "Ivar Jacobson";
 choices[13][2] = "Grady Booch";
 choices[13][3] = "Todas son falsas";
 answers[13] = choices[13][0];
 units[13] = "69";
 comments[13] = "Id Pregunta: 1010. NULL";


//  Id pregunta: 1165 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  Entre las caracter&iacute;sticas de JAVA que se describen a continuaci&oacute;n s&oacute;lo una es cierta. Se&ntilde;&aacute;lela:";
 choices[14]= new Array();
 choices[14][0] = "JAVA es similar a C++ pero m&aacute;s complejo que &eacute;ste";
 choices[14][1] = "La portabilidad de los programas JAVA no requiere recompilar.";
 choices[14][2] = "JAVA es del orden de 10 veces m&aacute;s r&aacute;pido que C++";
 choices[14][3] = "Todas las anteriores son ciertas";
 answers[14] = choices[14][1];
 units[14] = "60";
 comments[14] = "Id Pregunta: 1165. JCED - Preparatic XVII";


//  Id pregunta: 1197 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  Java ME es:";
 choices[15]= new Array();
 choices[15][0] = "Una versi&oacute;n de Java que permite explotar las capacidades multimedia de los nuevos procesadores";
 choices[15][1] = "Una versi&oacute;n reducida de Java dise&ntilde;ada para ser ejecutada en dispositivos m&oacute;viles o embebidos.";
 choices[15][2] = "Una versi&oacute;n de Java que permite varias ejecuciones simult&aacute;neas y multiplexadas de un programa para ejecuci&oacute;n en procesadores en paralelo";
 choices[15][3] = "Una versi&oacute;n de Java optimizada para Macintosh";
 answers[15] = choices[15][1];
 units[15] = "60";
 comments[15] = "Id Pregunta: 1197. NULL";


//  Id pregunta: 1372 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  Sobre el uso que hacen XML y HTML de etiquetas y atributos:";
 choices[16]= new Array();
 choices[16][0] = "HTML y XML especifican lo que significa cada etiqueta y atributo";
 choices[16][1] = "XML usa las etiquetas s&oacute;lo para delimitar segmentos de datos y deja la interpretaci&oacute;n de los datos a la aplicaci&oacute;n que los lee";
 choices[16][2] = "Ninguna de las respuestas anteriores es correcta";
 choices[16][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son correctas";
 answers[16] = choices[16][1];
 units[16] = "69";
 comments[16] = "Id Pregunta: 1372. NULL";


//  Id pregunta: 1413 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Una de las posibilidades clave de la estrategia .NET de Microsoft es el acceso remoto a objetos utilizando, entre otros protocolos, SOAP sobre HTTP. &iquest;Podr&iacute;a comentar qu&eacute; tecnolog&iacute;a de Microsoft, si bien no sobre HTTP, es la antecesora a .Net en este aspecto?:";
 choices[17]= new Array();
 choices[17][0] = "ODBC";
 choices[17][1] = "Visual Basic";
 choices[17][2] = "DCOM";
 choices[17][3] = "DNA";
 answers[17] = choices[17][2];
 units[17] = "59";
 comments[17] = "Id Pregunta: 1413. ";


//  Id pregunta: 1519 AÃ±o de creación de pregunta: 2003-01-01
 questions[18]= "19)  Caracter&iacute;stica falsa de los archivos .jar";
 choices[18]= new Array();
 choices[18][0] = "Es un acr&oacute;nimo de Java ARchives";
 choices[18][1] = " Puede incluir un subdirectorio META-INF";
 choices[18][2] = " Puede incluir un fichero MANIFEST.MF";
 choices[18][3] = "Puede incluir clases e im&aacute;genes pero no sonidos ";
 answers[18] = choices[18][3];
 units[18] = "60";
 comments[18] = "Id Pregunta: 1519. NULL";


//  Id pregunta: 1642 AÃ±o de creación de pregunta: 2004-01-01
 questions[19]= "20)  &iquest;Cu&aacute;l de estas acciones se permite ejecutar en Java a un applet no firmado descargado de Internet?";
 choices[19]= new Array();
 choices[19][0] = "Leer ficheros locales";
 choices[19][1] = "Cargar librer&iacute;as nativas";
 choices[19][2] = "Conectarse a la m&aacute;quina desde la que se descarg&oacute;";
 choices[19][3] = "Llamar a m&eacute;todos privados de otoas applets de la misma p&aacute;gina";
 answers[19] = choices[19][2];
 units[19] = "60";
 comments[19] = "Id Pregunta: 1642. NULL";


//  Id pregunta: 1688 AÃ±o de creación de pregunta: 2004-01-01
 questions[20]= "21)  &iquest;Qu&eacute; es FALSO respecto al NRC?";
 choices[20]= new Array();
 choices[20][0] = "Es un elemento utilizado en la pasarela de pago PISTA";
 choices[20][1] = "Sus siglas significan: N&uacute;mero de Referencia Completo";
 choices[20][2] = "Se compone del n&uacute;mero de justificante m&aacute;s unos caracteres de control";
 choices[20][3] = "Para obtener los caracteres de control se aplica la funci&oacute;n MAC del algoritmo DES a los datos de la operaci&oacute;n, mediante la clave privada de la entidad";
 answers[20] = choices[20][0];
 units[20] = "70";
 comments[20] = "Id Pregunta: 1688. NULL";


//  Id pregunta: 1833 AÃ±o de creación de pregunta: 2006-01-01
 questions[21]= "22)  Se&ntilde;alar la respuesta falsa";
 choices[21]= new Array();
 choices[21][0] = "HTML es un subconjunto de SGML";
 choices[21][1] = "XHTML es un subconjunto de XML";
 choices[21][2] = "XML es una ampliaci&oacute;n de HTML";
 choices[21][3] = "RTF es un subconjunto de SGML";
 answers[21] = choices[21][2];
 units[21] = "69";
 comments[21] = "Id Pregunta: 1833. NULL";


//  Id pregunta: 1842 AÃ±o de creación de pregunta: 2006-01-01
 questions[22]= "23)  La directiva 2002/38/CE:";
 choices[22]= new Array();
 choices[22][0] = "Ha regulado el fen&oacute;meno del comercio electr&oacute;nico en lo que se refiere al IVA";
 choices[22][1] = "Est&aacute;  incluida en el denominado paquete Telecom";
 choices[22][2] = "Es relativa a la protecci&oacute;n de datos personales y a la protecci&oacute;n de la intimidad en el sector de las comunicaciones electr&oacute;nicas";
 choices[22][3] = "Ninguna de las anteriores";
 answers[22] = choices[22][0];
 units[22] = "70";
 comments[22] = "Id Pregunta: 1842. NULL";


//  Id pregunta: 1858 AÃ±o de creación de pregunta: 2006-01-01
 questions[23]= "24)  &iquest;Qu&eacute; elemento no forma parte de la norma X.500 de OSI?";
 choices[23]= new Array();
 choices[23][0] = "Agente de usuario del directorio (DUA)";
 choices[23][1] = "&Aacute;rbol de informaci&oacute;n del directorio (DIT)";
 choices[23][2] = "Dominio de nombres de directorio (DND)";
 choices[23][3] = "Base de informaci&oacute;n del directorio (DIB)";
 answers[23] = choices[23][2];
 units[23] = "73";
 comments[23] = "Id Pregunta: 1858. ";


//  Id pregunta: 4348 AÃ±o de creación de pregunta: 2007-01-01
 questions[24]= "25)  El protocolo de comunicaciones seguras en que el cliente genera aleatoriamente una clave sim&eacute;trica, y la cifra con la clave p&uacute;blica del servidor receptor de la informaci&oacute;n, envi&aacute;ndosela cifrada a &eacute;ste, y posteriormente el servidor la descifra, con lo cual ambas partes ya poseen la clave sim&eacute;trica y se pueden comunicar con confidencialidad, es:";
 choices[24]= new Array();
 choices[24][0] = "IPSec (IP Security).";
 choices[24][1] = "SSL/TSL (Secure sockets Layer/Transport Layer Security).";
 choices[24][2] = "RSA (Rivest-Shamir-Adleman).";
 choices[24][3] = "WEP (Wired Equivalent Privacy).";
 answers[24] = choices[24][1];
 units[24] = "73";
 comments[24] = "Id Pregunta: 4348. ";


//  Id pregunta: 4481 AÃ±o de creación de pregunta: 2007-01-01
 questions[25]= "26)  &iquest;Cual de los siguientes paquetes de Java contiene las clases b&aacute;sicas utilizadas habitualmente en la mayor&iacute;a de los programas Java?";
 choices[25]= new Array();
 choices[25][0] = "java.lang";
 choices[25][1] = "java.beans";
 choices[25][2] = "java.sql";
 choices[25][3] = "java.util";
 answers[25] = choices[25][0];
 units[25] = "60";
 comments[25] = "Id Pregunta: 4481. JCED - Preparatic XVII";


//  Id pregunta: 4976 AÃ±o de creación de pregunta: 2003-01-01
 questions[26]= "27)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares no ha sido elaborado por W3C (World Wide Web Consortium)?";
 choices[26]= new Array();
 choices[26][0] = "XML (Extensible Markup Language).";
 choices[26][1] = "SOAP (Simple Object Access Protocol).";
 choices[26][2] = "WAI (Web Accessibility Initiative).";
 choices[26][3] = "SSL (Secure Sockets Layer).";
 answers[26] = choices[26][3];
 units[26] = "39";
 comments[26] = "Id Pregunta: 4976. Examen TIC B 2007";


//  Id pregunta: 5034 AÃ±o de creación de pregunta: 2003-01-01
 questions[27]= "28)  &iquest;Cu&aacute;l de los siguientes es un componente de la versi&oacute;n 2 del &quot;framework&quot; .NET de Microsoft?";
 choices[27]= new Array();
 choices[27][0] = "Visual Studio";
 choices[27][1] = "CLR (Common Language Runtime)";
 choices[27][2] = "BizTalk";
 choices[27][3] = "SQL Server";
 answers[27] = choices[27][1];
 units[27] = "59";
 comments[27] = "Id Pregunta: 5034. Examen TIC A 2007";


//  Id pregunta: 5068 AÃ±o de creación de pregunta: 2003-01-01
 questions[28]= "29)  &iquest;Cu&aacute;l de las siguientes afirmaciones con respecto a los XML Schemas es incorrecta?:";
 choices[28]= new Array();
 choices[28][0] = "Los XML Schemas utilizan sintaxis XML";
 choices[28][1] = "Es imposible referenciar m&uacute;ltiples XML Schemas desde el mismo documento XML";
 choices[28][2] = "Los XML Schemas soportan namespaces";
 choices[28][3] = "Los XML Schemas permiten definir tipos de datos";
 answers[28] = choices[28][1];
 units[28] = "69";
 comments[28] = "Id Pregunta: 5068. Examen TIC A 2007";


//  Id pregunta: 5157 AÃ±o de creación de pregunta: 2003-01-01
 questions[29]= "30)  El protocolo SET:";
 choices[29]= new Array();
 choices[29][0] = "Es un protocolo para la realizaci&oacute;n de transacciones de pago seguras a trav&eacute;s de Internet.";
 choices[29][1] = "Es un protocolo para juegos en red.";
 choices[29][2] = "Es un protocolo para la interconexi&oacute;n de chats en Internet.";
 choices[29][3] = "Es un protocolo para la transmisi&oacute;n de voz comprimida a trav&eacute;s de Internet.";
 answers[29] = choices[29][0];
 units[29] = "70";
 comments[29] = "Id Pregunta: 5157. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5283 AÃ±o de creación de pregunta: 2003-01-01
 questions[30]= "31)  En Java la herencia es un mecanismo por el que se pueden crear nuevos objetos definidos en t&eacute;rminos de objetos ya existentes. &iquest;Esta permitida la herencia multiple?";
 choices[30]= new Array();
 choices[30][0] = "Si.";
 choices[30][1] = "No.";
 choices[30][2] = "Si con ciertas restricciones.";
 choices[30][3] = "No con ciertas restricciones.";
 answers[30] = choices[30][1];
 units[30] = "60";
 comments[30] = "Id Pregunta: 5283. NULL";


//  Id pregunta: 5475 AÃ±o de creación de pregunta: 2003-01-01
 questions[31]= "32)  Los registros glue de una zona DNS son aquellos que";
 choices[31]= new Array();
 choices[31][0] = "Son los registros que mantienen la resoluci&oacute;n inversa";
 choices[31][1] = "Son los registros que mantienen el espacio de nombres de la zona";
 choices[31][2] = "Son los registros que permiten intercambiar informaci&oacute;n entre las diferentes zonas/subzonas";
 choices[31][3] = "Son los registros que permiten la consulta delegada de otros sistemas dns";
 answers[31] = choices[31][1];
 units[31] = "73";
 comments[31] = "Id Pregunta: 5475. Castilla y Le&oacute;n";


//  Id pregunta: 5509 AÃ±o de creación de pregunta: 2003-01-01
 questions[32]= "33)  &iquest;C&oacute;mo se garantiza la integridad de la factura electr&oacute;nica?";
 choices[32]= new Array();
 choices[32][0] = "Con firma electr&oacute;nica avanzada basada en un certificado reconocido";
 choices[32][1] = "Mediante sello electr&oacute;nico avanzado basado en un certificado reconocido que identifique a la persona jur&iacute;dica o entidad sin personalidad jur&iacute;dica que selle la factura electr&oacute;nica, a trav&eacute;s de su denominaci&oacute;n o raz&oacute;n social y su n&uacute;mero de identificaci&oacute;n fiscal.";
 choices[32][2] = "A y B son correctas";
 choices[32][3] = "No es necesario garantizar la integridad de la factura pues ya se ve en el remitente";
 answers[32] = choices[32][2];
 units[32] = "70";
 comments[32] = "Id Pregunta: 5509. NULL";


//  Id pregunta: 5552 AÃ±o de creación de pregunta: 2003-01-01
 questions[33]= "34)  Se&ntilde;ale la afirmaci&oacute;n incorrecta:";
 choices[33]= new Array();
 choices[33][0] = "Las pautas WAI  se encuentran agrupadas en WCAG, ATAG, UAAG.";
 choices[33][1] = "Las pautas WAI se basan en la utilizaci&oacute;n de est&aacute;ndares del W3C.";
 choices[33][2] = "Las WCAG 1.0  tienen 15 pautas, cada una de ellas con uno o m&aacute;s puntos de verificaci&oacute;n.";
 choices[33][3] = "Cada punto de verificaci&oacute;n tiene una prioridad asignada. El cumplimiento de los puntos de prioridad 1 asegura el cumplimiento del nivel de accesibilidad web A.";
 answers[33] = choices[33][2];
 units[33] = "39";
 comments[33] = "Id Pregunta: 5552. ";


//  Id pregunta: 5876 AÃ±o de creación de pregunta: 2009-01-01
 questions[34]= "35)  &iquest;Qu&eacute; es Atom?";
 choices[34]= new Array();
 choices[34][0] = "Sistema de an&aacute;lisis XML";
 choices[34][1] = "Tecnolog&iacute;a de sindicaci&oacute;n de contenidos";
 choices[34][2] = "Lenguaje que permite el intercambio de informaci&oacute;n financiera de las empresas";
 choices[34][3] = "Sintaxis de una DTD";
 answers[34] = choices[34][1];
 units[34] = "69";
 comments[34] = "Id Pregunta: 5876. MAP 2008 A1";


//  Id pregunta: 5892 AÃ±o de creación de pregunta: 2009-01-01
 questions[35]= "36)  &iquest;Qu&eacute; es JNDI?";
 choices[35]= new Array();
 choices[35][0] = "Un API de Java para acceder a servicios de nombre y directorio";
 choices[35][1] = "Un API de Java para invocar m&eacute;todos escritos en otros lenguajes";
 choices[35][2] = "Un API de Java para crear interfaces gr&aacute;ficas de usuario";
 choices[35][3] = "Ninguna de las anteriores";
 answers[35] = choices[35][0];
 units[35] = "60";
 comments[35] = "Id Pregunta: 5892. NULL";


//  Id pregunta: 5983 AÃ±o de creación de pregunta: 2010-01-01
 questions[36]= "37)  &iquest;En cu&aacute;l de los siguientes componentes de XML se define la estructura de los datos que va a contener un formulario XML?";
 choices[36]= new Array();
 choices[36][0] = "Manifiestos (XSF).";
 choices[36][1] = "Vistas (XLS).";
 choices[36][2] = "Esquemas (XSD).";
 choices[36][3] = "Datos (XML).";
 answers[36] = choices[36][2];
 units[36] = "69";
 comments[36] = "Id Pregunta: 5983. TIC A 2009";


//  Id pregunta: 5984 AÃ±o de creación de pregunta: 2010-01-01
 questions[37]= "38)  El modelo de control de accesos donde es el sistema quien protege los recursos y donde todo recurso del sistema tiene unaetiqueta de seguridad se denomina:";
 choices[37]= new Array();
 choices[37][0] = "De acceso discrecional (DAC)";
 choices[37][1] = "De acceso obligatorio (MAC)";
 choices[37][2] = "Basado en roles (RBAC)";
 choices[37][3] = "De confidencialidad.";
 answers[37] = choices[37][1];
 units[37] = "73";
 comments[37] = "Id Pregunta: 5984. TIC A 2009";


//  Id pregunta: 6364 AÃ±o de creación de pregunta: 2010-01-01
 questions[38]= "39)  De acuerdo con el Esquema Nacional de Seguridad, el sistema ha de disponer de una estrategia de protecci&oacute;n constituida por m&uacute;ltiples capas de seguridad, dispuesta de forma que, cuando una de las capas falle, permita:";
 choices[38]= new Array();
 choices[38][0] = "Ganar tiempo para una reacci&oacute;n adecuada frente a los incidentes que no han podido evitarse.";
 choices[38][1] = "Reducir la probabilidad de que el sistema sea comprometido en su conjunto.";
 choices[38][2] = "Minimizar el impacto final sobre el mismo.";
 choices[38][3] = "Todas las anteriores";
 answers[38] = choices[38][3];
 units[38] = "43";
 comments[38] = "Id Pregunta: 6364. Art&iacute;culo 8 ENS";


//  Id pregunta: 6368 AÃ±o de creación de pregunta: 2010-01-01
 questions[39]= "40)  &iquest;Cu&aacute;l de los siguientes sistemas NO tiene la consideraci&oacute;n de entorno inseguro, de acuerdo con el Esquema Nacional de Seguridad?";
 choices[39]= new Array();
 choices[39][0] = "Equipos port&aacute;tiles";
 choices[39][1] = "Comunicaciones sobre redes inal&aacute;mbricas, incluso cuando la comunicaci&oacute;n se realice con cifrado fuerte";
 choices[39][2] = "Asistentes personales (PDA)";
 choices[39][3] = "Dispositivos perif&eacute;ricos";
 answers[39] = choices[39][1];
 units[39] = "43";
 comments[39] = "Id Pregunta: 6368. Art&iacute;culo 21 ENS";


//  Id pregunta: 6387 AÃ±o de creación de pregunta: 2010-01-01
 questions[40]= "41)  &iquest;Es posible crear sedes electr&oacute;nicas compartidas?";
 choices[40]= new Array();
 choices[40][0] = "No";
 choices[40][1] = "S&iacute;, mediante acuerdo del Consejo de Ministros";
 choices[40][2] = "S&iacute;, mediante orden del Ministro de la Presidencia";
 choices[40][3] = "S&iacute;, mediante orden de los Ministros interesados";
 answers[40] = choices[40][2];
 units[40] = "43";
 comments[40] = "Id Pregunta: 6387. Art&iacute;culo 3.3 RD 1671/2009";


//  Id pregunta: 6391 AÃ±o de creación de pregunta: 2010-01-01
 questions[41]= "42)  &iquest;C&oacute;mo se regula el funcionamiento del registro de funcionarios habilitados? ";
 choices[41]= new Array();
 choices[41][0] = "Mediante Orden HAP/7/2014";
 choices[41][1] = "Mediante RD 7/2014";
 choices[41][2] = "Mediante Ley Org&aacute;nica 7/2014";
 choices[41][3] = "Mediante resoluci&oacute;n de la Secretaria de Estado de Funci&oacute;n P&uacute;blica.";
 answers[41] = choices[41][0];
 units[41] = "43";
 comments[41] = "Id Pregunta: 6391. Art&iacute;culo 16 RD 1671/2009";


//  Id pregunta: 6570 AÃ±o de creación de pregunta: 2010-01-01
 questions[42]= "43)  El Directorio X.500 ";
 choices[42]= new Array();
 choices[42][0] = "Es una base de datos centralizada y accesible desde cualquier punto";
 choices[42][1] = "Es una base de datos distribuida y accesible desde cualquier punto";
 choices[42][2] = "Est&aacute; dise&ntilde;ado para guardar nombres, direcciones,  pero no la informaci&oacute;n necesaria para localizar y establecer comunicaci&oacute;n con una persona o recurso";
 choices[42][3] = "B y C son ciertas";
 answers[42] = choices[42][1];
 units[42] = "73";
 comments[42] = "Id Pregunta: 6570. NULL";


//  Id pregunta: 7313 AÃ±o de creación de pregunta: 2010-01-01
 questions[43]= "44)  Se&ntilde;ala cual de las siguientes afirmaciones sobre la Red SARA es incorrecta:";
 choices[43]= new Array();
 choices[43][0] = "Es una red privada de comunicaciones que permite transferencias seguras entre las Administraciones P&uacute;blicas";
 choices[43][1] = "La Red permite la interconexi&oacute;n de los Departamentos ministeriales, las Comunidades Aut&oacute;nomas, los Entes Locales y otros organismos p&uacute;blicos espa&ntilde;oles";
 choices[43][2] = "Contiene un enlace con la red transeuropea sTESTA";
 choices[43][3] = "Est&aacute; definida en el art&iacute;culo 31 de la Ley General de Telecomunicaciones";
 answers[43] = choices[43][3];
 units[43] = "44";
 comments[43] = "Id Pregunta: 7313. NULL";


//  Id pregunta: 7316 AÃ±o de creación de pregunta: 2010-01-01
 questions[44]= "45)  Cu&aacute;l de las siguientes no es una tecnolog&iacute;a de acceso a datos de Microsoft:";
 choices[44]= new Array();
 choices[44][0] = "ADO.NET";
 choices[44][1] = "OLEDB";
 choices[44][2] = "DEA";
 choices[44][3] = "DAO";
 answers[44] = choices[44][2];
 units[44] = "59";
 comments[44] = "Id Pregunta: 7316. NULL";


//  Id pregunta: 7321 AÃ±o de creación de pregunta: 2010-01-01
 questions[45]= "46)  Seg&uacute;n la ley 34/2002 de Servicios de la Sociedad de la Informaci&oacute;n y Comercio Electr&oacute;nico cu&aacute;l de los siguientes servicios se encuentra excluidos del &aacute;mbito de aplicaci&oacute;n de la Ley:";
 choices[45]= new Array();
 choices[45][0] = "Los servicios prestados por notarios y registradores de la propiedad y mercantiles en el ejercicio de sus respectivas funciones p&uacute;blicas";
 choices[45][1] = "Los servicios prestados por prestadores de servicios de la sociedad de la informaci&oacute;n establecidos en Espa&ntilde;a";
 choices[45][2] = "Los servicios de la sociedad de la informaci&oacute;n que los prestadores residentes o domiciliados en otro Estado ofrezcan a trav&eacute;s de un establecimiento permanente situado en Espa&ntilde;a";
 choices[45][3] = "Servicios que afecten a derechos de propiedad intelectual o industrial prestados por prestadores de servicios establecidos en otro Estado miembro de la Uni&oacute;n Europea o del Espacio Econ&oacute;mico Europeo cuando el destinatario de los servicios radique en Espa&ntilde;a";
 answers[45] = choices[45][0];
 units[45] = "70";
 comments[45] = "Id Pregunta: 7321. NULL";


//  Id pregunta: 7324 AÃ±o de creación de pregunta: 2010-01-01
 questions[46]= "47)  Se&ntilde;ala cu&aacute;l de las siguientes no es una tecnolog&iacute;a empleada en el pago a trav&eacute;s de Internet:";
 choices[46]= new Array();
 choices[46][0] = "3D Secure";
 choices[46][1] = "UCAF";
 choices[46][2] = "Urbinet ";
 choices[46][3] = "SET ";
 answers[46] = choices[46][2];
 units[46] = "70";
 comments[46] = "Id Pregunta: 7324. NULL";


//  Id pregunta: 8229 AÃ±o de creación de pregunta: 2011-01-01
 questions[47]= "48)  &iquest;Cu&aacute;l de los siguientes principios NO est&aacute; definido en el Marco Europeo de Interoperabilidad?:";
 choices[47]= new Array();
 choices[47][0] = "Seguridad.";
 choices[47][1] = "Subsidiariedad.";
 choices[47][2] = "Compatibilidad del hardware.";
 choices[47][3] = "Protecci&oacute;n de datos de car&aacute;cter personal.";
 answers[47] = choices[47][2];
 units[47] = "40";
 comments[47] = "Id Pregunta: 8229. Examen TIC A1 2010";


//  Id pregunta: 8287 AÃ±o de creación de pregunta: 2011-01-01
 questions[48]= "49)  &iquest;Cu&aacute;ndo se puede utilizar el Servicio de Verificaci&oacute;n de Datos de Identidad para consultar datos de car&aacute;cter personal?";
 choices[48]= new Array();
 choices[48][0] = "Cuando se cuente con el consentimiento del interesado y los datos sean necesarios para el tr&aacute;mite. ";
 choices[48][1] = "S&oacute;lo se puede utilizar para consultar datos que no sean de car&aacute;cter personal";
 choices[48][2] = "S&oacute;lo en caso de que sean datos de nivel de protecci&oacute;n alto. ";
 choices[48][3] = "Se contemplaba un per&iacute;odo de transici&oacute;n, pero a partir del 1 de enero de 2011, el Servicio de Verificaci&oacute;n de Datos de Identidad ser&aacute; obligatorio en todo caso";
 answers[48] = choices[48][0];
 units[48] = "44";
 comments[48] = "Id Pregunta: 8287. Examen TIC A2 2010";


//  Id pregunta: 8351 AÃ±o de creación de pregunta: 2011-01-01
 questions[49]= "50)  &iquest;Qu&eacute; librer&iacute;a de .Net permite aplicar el patr&oacute;n &quot;Inversion of Control&quot;?";
 choices[49]= new Array();
 choices[49][0] = "Unity Application Block,";
 choices[49][1] = "Logging Application Block.";
 choices[49][2] = "Ajax Control Toolkit";
 choices[49][3] = "Cached XML Data Mapper";
 answers[49] = choices[49][0];
 units[49] = "59,115";
 comments[49] = "Id Pregunta: 8351. Examen TIC A2 2010";


//  Id pregunta: 8398 AÃ±o de creación de pregunta: 2011-01-01
 questions[50]= "51)  Seg&uacute;n el Real Decreto 1671/2009, las sedes electr&oacute;nicas de la Administraci&oacute;n General del Estado se crean: ";
 choices[50]= new Array();
 choices[50][0] = "Por Orden Ministerial o Resoluci&oacute;n del titular del organismo. ";
 choices[50][1] = "Por Real Decreto del Presidente del Gobierno. ";
 choices[50][2] = "Por Orden Conjunta del Ministerio de la Presidencia y del Ministerio del que se trate. ";
 choices[50][3] = "Por Acuerdo del Consejo Superior de Administraci&oacute;n Electr&oacute;nica. ";
 answers[50] = choices[50][0];
 units[50] = "43";
 comments[50] = "Id Pregunta: 8398. Examen TIC A2 2010";


//  Id pregunta: 8419 AÃ±o de creación de pregunta: 2011-01-01
 questions[51]= "52)  &iquest;Qu&eacute; tecnolog&iacute;a inal&aacute;mbrica de corto alcance y alta frecuencia permite el intercambio de datos entre dispositivos, siendo su uso m&aacute;s frecuente el pago mediante el m&oacute;vil?";
 choices[51]= new Array();
 choices[51][0] = "Bluetooth";
 choices[51][1] = "PayPal Mobile";
 choices[51][2] = "NFC (Near Field Communication)";
 choices[51][3] = "3D Secure";
 answers[51] = choices[51][2];
 units[51] = "70, 107";
 comments[51] = "Id Pregunta: 8419. ";


//  Id pregunta: 8421 AÃ±o de creación de pregunta: 2011-01-01
 questions[52]= "53)  &iquest;Cu&aacute;l de los siguientes responsables no aparece definido en el Esquema Nacional de Seguridad, Real Decreto 3/2010 del 8 de enero?";
 choices[52]= new Array();
 choices[52][0] = "Responsable del fichero";
 choices[52][1] = "Responsable de la informaci&oacute;n";
 choices[52][2] = "Responsable del servicio";
 choices[52][3] = "Responsable de seguridad";
 answers[52] = choices[52][0];
 units[52] = "43";
 comments[52] = "Id Pregunta: 8421. El responsable del fichero es un concepto relacionado con la LOPD.";


//  Id pregunta: 8437 AÃ±o de creación de pregunta: 2011-01-01
 questions[53]= "54)  Seg&uacute;n el RD 1671/2009, &iquest;Cu&aacute;l de las siguientes afirmaciones referentes a la identificaci&oacute;n y autenticaci&oacute;n en el acceso de los ciudadanos a la AGE y sus OOAA dependientes, no es verdadera?";
 choices[53]= new Array();
 choices[53][0] = "Las personas f&iacute;sicas podr&aacute;n utilizar para relacionarse electr&oacute;nicamente con la Administraci&oacute;n General del Estado y los organismos p&uacute;blicos vinculados o dependientes, los sistemas de firma electr&oacute;nica incorporados al Documento Nacional de Identidad.";
 choices[53][1] = "Las personas jur&iacute;dicas y entidades sin personalidad jur&iacute;dica podr&aacute;n utilizar sistemas de firma electr&oacute;nica de persona jur&iacute;dica o de entidades sin personalidad jur&iacute;dica para todos aquellos procedimientos y actuaciones de la Administraci&oacute;n General del Estado para los que se admitan.";
 choices[53][2] = "En caso de no admisi&oacute;n, la sede electr&oacute;nica correspondiente no deber&aacute; facilitar sistemas alternativos que permitan a las personas jur&iacute;dicas y a las entidades sin personalidad jur&iacute;dica el ejercicio de su derecho a relacionarse electr&oacute;nicamente con la Administraci&oacute;n General del Estado.";
 choices[53][3] = "La admisi&oacute;n de otros sistemas de firma deber&aacute;n aprobarse mediante orden ministerial, o resoluci&oacute;n del titular en el caso de los organismos p&uacute;blicos, previo informe del Consejo Superior de Administraci&oacute;n Electr&oacute;nica.";
 answers[53] = choices[53][2];
 units[53] = "43";
 comments[53] = "Id Pregunta: 8437. ";


//  Id pregunta: 8442 AÃ±o de creación de pregunta: 2011-01-01
 questions[54]= "55)  Seg&uacute;n el RD 1671/2009, en caso de cambio del formato original, para que una copia electr&oacute;nica de un documento electr&oacute;nico tenga la condici&oacute;n de copia aut&eacute;ntica, deber&aacute;n cumplirse una serie de requisitos. &iquest;Cu&aacute;l de los siguientes requisitos no se encuentra entre ellos?";
 choices[54]= new Array();
 choices[54][0] = "Que el documento electr&oacute;nico original, que debe conservarse en todo caso, se encuentre en poder de la Administraci&oacute;n.";
 choices[54][1] = "Que la copia sea obtenida conforme a las normas de competencia y procedimiento que en cada caso se aprueben, incluidas las de obtenci&oacute;n automatizada.";
 choices[54][2] = "Que incluya el sello electr&oacute;nico del organismo.";
 choices[54][3] = "Que sea autorizada mediante firma electr&oacute;nica conforme a los sistemas recogidos en los art&iacute;culos 18 y 19 de la Ley 11/2007, de 22 de junio.";
 answers[54] = choices[54][2];
 units[54] = "43";
 comments[54] = "Id Pregunta: 8442. ";


//  Id pregunta: 8505 AÃ±o de creación de pregunta: 2011-01-01
 questions[55]= "56)  &iquest;C&oacute;mo se comenta una l&iacute;nea en XML (eXtensible Markup Language)? ";
 choices[55]= new Array();
 choices[55][0] = "/* Esto es un comentario */";
 choices[55][1] = "// Esto es un comentario ";
 choices[55][2] = "# Esto es un comentario";
 choices[55][3] = "&lt;!-- Esto es un comentario --&gt;";
 answers[55] = choices[55][3];
 units[55] = "69";
 comments[55] = "Id Pregunta: 8505. Examen TIC A2 2010";


//  Id pregunta: 8804 AÃ±o de creación de pregunta: 2011-01-01
 questions[56]= "57)  &iquest;Cu&aacute;l es el comit&eacute; del W3C encargado de promover y estandarizar la accesibilidad Web?";
 choices[56]= new Array();
 choices[56][0] = "WAI";
 choices[56][1] = "WCAG";
 choices[56][2] = "ATAG";
 choices[56][3] = "UAAG";
 answers[56] = choices[56][0];
 units[56] = "39";
 comments[56] = "Id Pregunta: 8804. Examen UPM A2 2011";


//  Id pregunta: 8904 AÃ±o de creación de pregunta: 2011-01-01
 questions[57]= "58)  Un applet de Java de una p&aacute;gina Web &iquest;d&oacute;nde se ejecuta?:";
 choices[57]= new Array();
 choices[57][0] = "En el navegador del cliente.";
 choices[57][1] = "En el servidor Web.";
 choices[57][2] = "En el proxy.";
 choices[57][3] = "En el servidor de aplicaciones";
 answers[57] = choices[57][0];
 units[57] = "60";
 comments[57] = "Id Pregunta: 8904. Operador Ayto. Madrid 2010";


//  Id pregunta: 8922 AÃ±o de creación de pregunta: 2011-01-01
 questions[58]= "59)  En HTML, &iquest;con qu&eacute; etiqueta indicamos el comienzo de una columna con datos en una tabla?";
 choices[58]= new Array();
 choices[58][0] = "&lt;table&gt;";
 choices[58][1] = "&lt;td&gt;";
 choices[58][2] = "&lt;th&gt;";
 choices[58][3] = "&lt;column&gt;";
 answers[58] = choices[58][1];
 units[58] = "69";
 comments[58] = "Id Pregunta: 8922. Operador Ayto. Madrid 2010";


//  Id pregunta: 8936 AÃ±o de creación de pregunta: 2011-01-01
 questions[59]= "60)  Las sedes judiciales electr&oacute;nicas se crear&aacute;n mediante disposici&oacute;n publicada en:";
 choices[59]= new Array();
 choices[59][0] = "El Bolet&iacute;n Oficial del Estado";
 choices[59][1] = "El Bolet&iacute;n Oficial de la Comunidad Aut&oacute;noma correspondiente";
 choices[59][2] = "En los dos anteriores conjuntamente en los casos indicados en la ley";
 choices[59][3] = "En uno de los dos";
 answers[59] = choices[59][3];
 units[59] = "43";
 comments[59] = "Id Pregunta: 8936. ";


//  Id pregunta: 8942 AÃ±o de creación de pregunta: 2011-01-01
 questions[60]= "61)  &iquest;Cu&aacute;les de las siguientes no tendr&aacute;n la consideraci&oacute;n de copias aut&eacute;nticas seg&uacute;n la ley 18/2011?";
 choices[60]= new Array();
 choices[60][0] = "Las copias realizadas en soporte papel de documentos judiciales electr&oacute;nicos y firmados electr&oacute;nicamente por el secretario judicial que incluyan la impresi&oacute;n de un c&oacute;digo seguro de verificaci&oacute;n que permita contrastar su autenticidad";
 choices[60][1] = "Las copias realizadas por las oficinas judiciales, utilizando medios electr&oacute;nicos, de documentos emitidos originalmente por ellas en soporte papel";
 choices[60][2] = "Las copias realizadas por las oficinas judiciales, utilizando medios electr&oacute;nicos, de documentos emitidos por el interesado en soporte papel";
 choices[60][3] = "Las copias realizadas por medios electr&oacute;nicos de documentos electr&oacute;nicos emitidos por el propio interesado estando el documento electr&oacute;nico original en poder de la oficina judicial donde haya sido originado o incorporado y que la informaci&oacute;n de firma electr&oacute;nica y, en su caso, de sellado de tiempo permitan comprobar la coincidencia con dicho documento";
 answers[60] = choices[60][2];
 units[60] = "43";
 comments[60] = "Id Pregunta: 8942. ";


//  Id pregunta: 8946 AÃ±o de creación de pregunta: 2011-01-01
 questions[61]= "62)  &iquest;Cu&aacute;l de las siguientes medidas se debe aplicar en un sistema de informaci&oacute;n de categor&iacute;a alta seg&uacute;n el Esquema Nacional de Seguridad?";
 choices[61]= new Array();
 choices[61][0] = "Previsi&oacute;n de la provisi&oacute;n del servicio por medios alternativos en caso de indisponibilidad del servicio contratado";
 choices[61][1] = "Asignar un identificador singular para cada entidad que accede al sistema";
 choices[61][2] = "Cifrado de la  informaci&oacute;n tanto durante su almacenamiento como durante su transmisi&oacute;n";
 choices[61][3] = "Todas las anteriores";
 answers[61] = choices[61][1];
 units[61] = "43";
 comments[61] = "Id Pregunta: 8946. ";


//  Id pregunta: 8950 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  El Registro Electr&oacute;nico Com&uacute;n ser&aacute; gestionado por:";
 choices[62]= new Array();
 choices[62][0] = "El Ministerio de la Presidencia";
 choices[62][1] = "Por la Secretar&iacute;a de Estado de Telecomunicaciones y Sistemas de la Informaci&oacute;n";
 choices[62][2] = "Por la Secretar&iacute;a de Estado para la Funci&oacute;n P&uacute;blica";
 choices[62][3] = "Ninguna de las anteriores es cierta";
 answers[62] = choices[62][2];
 units[62] = "43";
 comments[62] = "Id Pregunta: 8950. ";


//  Id pregunta: 9169 AÃ±o de creación de pregunta: 2013-01-01
 questions[63]= "64)  Una empresa tiene una p&aacute;gina web con informaci&oacute;n sobre su actividad, productos, y servicios que vende, pero &eacute;stos no se pueden comprar a trav&eacute;s de su p&aacute;gina web. &iquest;Le afectan a la empresa las obligaciones establecidas en la Ley de Servicios de la Sociedad de la Informaci&oacute;n para los prestadores de servicios?";
 choices[63]= new Array();
 choices[63][0] = "S&iacute;, ya que se trata de una actividad con trascendencia econ&oacute;mica que se realiza por medios electr&oacute;nicos";
 choices[63][1] = "No, al no haber venta directa de productos por medios electr&oacute;nicos";
 choices[63][2] = "Si, cualquier servicio que se preste a trav&eacute;s de internet incurre en estas obligaciones";
 choices[63][3] = "No, la ley no establece obligaciones para los prestadores de servicios";
 answers[63] = choices[63][0];
 units[63] = "70";
 comments[63] = "Id Pregunta: 9169. Examen TIC A2 2011";


//  Id pregunta: 9174 AÃ±o de creación de pregunta: 2013-01-01
 questions[64]= "65)  Si hablamos de UBL, &iquest;cu&aacute;l de las siguientes afirmaciones es INCORRECTA?";
 choices[64]= new Array();
 choices[64][0] = "Fue desarrollado por OASIS";
 choices[64][1] = "Es una librer&iacute;a est&aacute;ndar de documentos XML dedicada a la representaci&oacute;n de facturas ";
 choices[64][2] = "Est&aacute; basada en el concepto de Core Components";
 choices[64][3] = "El desarrollo de su variante NES, NESUBL, es la base del proyecto PEPPOL de contrataci&oacute;n online paneuropea";
 answers[64] = choices[64][1];
 units[64] = "70";
 comments[64] = "Id Pregunta: 9174. ";


//  Id pregunta: 9586 AÃ±o de creación de pregunta: 2013-01-01
 questions[65]= "66)  Seg&uacute;n la norma t&eacute;cnica de interoperabilidad de pol&iacute;tica de firma electr&oacute;nica y de certificados de la administraci&oacute;n del Esquema Nacional de Interoperabilidad:";
 choices[65]= new Array();
 choices[65][0] = "Los formatos para la firma electr&oacute;nica de contenidos ser&aacute;n XAdES, CAdES y PAdES.";
 choices[65][1] = "El perfil m&iacute;nimo de formato que se utilizar&aacute; para la generaci&oacute;n de firmas de contenido en el marco de una pol&iacute;tica ser&aacute; &ndash;A.";
 choices[65][2] = "Los documentos electr&oacute;nicos a los que se aplique firma basada en certificados de cara a su intercambio no se ajustar&aacute;n a las especificaciones de formato y estructura establecidas en la NTI de Documento electr&oacute;nico.";
 choices[65][3] = "El perfil m&iacute;nimo de formato que se utilizar&aacute; para la generaci&oacute;n de firmas de contenido en el marco de una pol&iacute;tica ser&aacute; &ndash;C.";
 answers[65] = choices[65][0];
 units[65] = "43";
 comments[65] = "Id Pregunta: 9586. Examen TIC A1 2011";


//  Id pregunta: 9806 AÃ±o de creación de pregunta: 2014-01-01
 questions[66]= "67)  De las siguientes opciones se&ntilde;alar cu&aacute;l forma parte del contenido m&iacute;nimo que debe contener la norma que crea una sede electr&oacute;nica, de acuerdo con el Real Decreto 1671/2009, de 6 de noviembre:";
 choices[66]= new Array();
 choices[66][0] = "Relaci&oacute;n de los servicios disponibles en la sede.";
 choices[66][1] = "Medios disponibles para la formulaci&oacute;n de sugerencias y quejas. ";
 choices[66][2] = "Mapa de navegaci&oacute;n de la sede electr&oacute;nica. ";
 choices[66][3] = "Carta de servicios electr&oacute;nicos.";
 answers[66] = choices[66][1];
 units[66] = "43";
 comments[66] = "Id Pregunta: 9806. Examen TIC-A2 2013-Libre";


//  Id pregunta: 10004 AÃ±o de creación de pregunta: 2014-01-01
 questions[67]= "68)  XML y HTML5 se caracterizan porque ambos";
 choices[67]= new Array();
 choices[67][0] = "se apoyan en JavaScript.";
 choices[67][1] = "se basan en el protocolo HTTP.";
 choices[67][2] = "son lenguajes de marcado.";
 choices[67][3] = "son conformes a SOAP.";
 answers[67] = choices[67][2];
 units[67] = "69";
 comments[67] = "Id Pregunta: 10004. ";


//  Id pregunta: 10006 AÃ±o de creación de pregunta: 2014-01-01
 questions[68]= "69)  En el &aacute;mbito del Real Decreto 772/1999, de 7 de mayo, en la redacci&oacute;n dada por el Real Decreto 209/2003, de 21 de febrero, por el que se regulan los registros y las notificaciones telem&aacute;ticas, as&iacute; como la utilizaci&oacute;n de medios telem&aacute;ticos para la sustituci&oacute;n de la aportaci&oacute;n de certificados por los ciudadanos, NO es una funci&oacute;n propia de los registros telem&aacute;ticos";
 choices[68]= new Array();
 choices[68][0] = "la recepci&oacute;n de solicitudes, escritos y comunicaciones.";
 choices[68][1] = "la remisi&oacute;n de las solicitudes, escritos y comunicaciones recibidas.";
 choices[68][2] = "la expedici&oacute;n de copias selladas o compulsadas de los documentos que, en su caso, se transmitan junto con la solicitud, escrito o comunicaci&oacute;n.";
 choices[68][3] = "la anotaci&oacute;n de los correspondientes asientos de entrada y salida.";
 answers[68] = choices[68][2];
 units[68] = "43";
 comments[68] = "Id Pregunta: 10006. ";


//  Id pregunta: 10024 AÃ±o de creación de pregunta: 2014-01-01
 questions[69]= "70)  Se&ntilde;ale la afirmaci&oacute;n CORRECTA con respecto a un bean de sesi&oacute;n en JavaEE 7:";
 choices[69]= new Array();
 choices[69][0] = "Una aplicaci&oacute;n requerir&aacute; normalmente menos beans de sesi&oacute;n stateless que stateful para respaldar al mismo n&uacute;mero de clientes.";
 choices[69][1] = "Los stateful permiten compartir estado entre varios clientes.";
 choices[69][2] = "Un bean de sesi&oacute;n singleton es instanciado varias veces, seg&uacute;n necesidad, pero va a existir una copia (el singleton) todo el ciclo de vida de la aplicaci&oacute;n.";
 choices[69][3] = "Los stateful est&aacute;n respaldados por una base de datos y pueden implementar un servicio web.";
 answers[69] = choices[69][0];
 units[69] = "60";
 comments[69] = "Id Pregunta: 10024. TIC A2, Promoci&oacute;n Interna, 2013. Un stateless puede servirle a varios clientes. Stateful suele servir solo a 1 cliente.";


//  Id pregunta: 10154 AÃ±o de creación de pregunta: 2014-01-01
 questions[70]= "71)  Seg&uacute;n el Real Decreto 1671/2009";
 choices[70]= new Array();
 choices[70][0] = "Se puede someter a todos los ciudadanos al r&eacute;gimen de notificaci&oacute;n electr&oacute;nica obligatoria";
 choices[70][1] = "S&oacute;lo pueden someterse al r&eacute;gimen de notificaci&oacute;n electr&oacute;nica obligatoria a las personas jur&iacute;dicas o colectivos de personas f&iacute;sicas que por raz&oacute;n de su capacidad econ&oacute;mica o t&eacute;cnica, dedicaci&oacute;n profesional u otros motivos acreditados tengan garantizado el acceso y disponibilidad de los medios tecnol&oacute;gicos precisos";
 choices[70][2] = "En ning&uacute;n caso puede imponerse la obligaci&oacute;n de que la notificaci&oacute;n sea &uacute;nicamente por medios electr&oacute;nicos";
 choices[70][3] = "Para establecer la obligatoriedad de las notificaciones por medios electr&oacute;nicos ser&aacute; suficiente la publicaci&oacute;n de una circular en la sede electr&oacute;nica del &oacute;rgano u organismo p&uacute;blico de que se trate.";
 answers[70] = choices[70][1];
 units[70] = "43";
 comments[70] = "Id Pregunta: 10154. ";


//  Id pregunta: 10470 AÃ±o de creación de pregunta: 2014-01-01
 questions[71]= "72)  Respecto a los certificados X.509 y las PKI, indique la respuesta correcta:";
 choices[71]= new Array();
 choices[71][0] = "Exigen el uso de X.500 o LDAP  para la distribuci&oacute;n de certificados y CRLs.";
 choices[71][1] = "Cuando el estado de revocaci&oacute;n se proporciona mediante CRLs, la Autoridad de Certificaci&oacute;n es tambi&eacute;n la emisora de las CRLs.";
 choices[71][2] = "La emisi&oacute;n de CRLs es un mecanismo obligatorio de consulta de estado de los certificados.";
 choices[71][3] = "Una CRL completa lista todos los certificados no expirados dentro su alcance revocados por los motivos de revocaci&oacute;n dentro del alcance de la CRL.";
 answers[71] = choices[71][3];
 units[71] = "73";
 comments[71] = "Id Pregunta: 10470. ";


//  Id pregunta: 10495 AÃ±o de creación de pregunta: 2014-01-01
 questions[72]= "73)  &iquest;Cual de los siguientes no es un servicio prestado por Red SARA?";
 choices[72]= new Array();
 choices[72][0] = "DNS";
 choices[72][1] = "SMTP";
 choices[72][2] = "SNMP";
 choices[72][3] = "NTP";
 answers[72] = choices[72][2];
 units[72] = "43";
 comments[72] = "Id Pregunta: 10495. Punto III.1.3 de la NTI de Requisitos de conexi&oacute;n a Red SARA";


//  Id pregunta: 10579 AÃ±o de creación de pregunta: 2015-01-01
 questions[73]= "74)  Seg&uacute;n el criterio de subsidiariedad a la hora de implantar una infraestructura com&uacute;n, es m&aacute;s conveniente:";
 choices[73]= new Array();
 choices[73][0] = "Forzar su utilizaci&oacute;n por todos los entes implicados.";
 choices[73][1] = "Establecer su uso como voluntario.";
 choices[73][2] = "Recomendar la utizaci&oacute;n parcial de la infraestructura.";
 choices[73][3] = "Ninguna de las anteriores.";
 answers[73] = choices[73][1];
 units[73] = "44";
 comments[73] = "Id Pregunta: 10579. ";


//  Id pregunta: 10609 AÃ±o de creación de pregunta: 2015-01-01
 questions[74]= "75)  &iquest;Cu&aacute;l de estas es la codificaci&oacute;n en formato binario de un certificado X.509v3?";
 choices[74]= new Array();
 choices[74][0] = "DER";
 choices[74][1] = "CERT";
 choices[74][2] = "PEM";
 choices[74][3] = "Ninguno de los anteriores.";
 answers[74] = choices[74][0];
 units[74] = "73";
 comments[74] = "Id Pregunta: 10609. ";


//  Id pregunta: 10621 AÃ±o de creación de pregunta: 2015-01-01
 questions[75]= "76)  Se&ntilde;ale la respuesta correcta:";
 choices[75]= new Array();
 choices[75][0] = "Para desarrollar una aplicaci&oacute;n distribuida en Java es imprescindible la utilizaci&oacute;n de un servidor de aplicaciones.";
 choices[75][1] = "Weblogic es un contenedor de servlets.";
 choices[75][2] = "Wildfly es la versi&oacute;n gratuita de Jboss.";
 choices[75][3] = "Spring es un m&oacute;dulo de Java EE.";
//  Id pregunta: 10708 AÃ±o de creación de pregunta: 2015-01-01
 questions[76]= "77)  &iquest;Qu&eacute; dato/s sobre los documentos electr&oacute;nicos no se incluyen en el &iacute;ndice electr&oacute;nico?";
 choices[76]= new Array();
 choices[76][0] = "Identificador del documento.";
 choices[76][1] = "El propio documento electr&oacute;nico.";
 choices[76][2] = "La huella digital del documento.";
 choices[76][3] = "La funci&oacute;n resumen utlizada para la obtenci&oacute;n de la huella digital.";
 answers[76] = choices[76][1];
 units[76] = "43";
 comments[76] = "Id Pregunta: 10708. ";


//  Id pregunta: 10709 AÃ±o de creación de pregunta: 2015-01-01
 questions[77]= "78)  La Norma T&eacute;cnica de Interoperabilidad de Modelo de Datos para el Intercambio de asientos entre las entidades registrales se public&oacute; en:";
 choices[77]= new Array();
 choices[77][0] = "2010";
 choices[77][1] = "2011";
 choices[77][2] = "2013";
 choices[77][3] = "2014";
 answers[77] = choices[77][1];
 units[77] = "43";
 comments[77] = "Id Pregunta: 10709. ";


//  Id pregunta: 10715 AÃ±o de creación de pregunta: 2015-01-01
 questions[78]= "79)  Seg&uacute;n la NTI de Modelo de Datos para el Intercambio de asientos entre entidades registrales &iquest;En qu&eacute; segmento se situa el &quot;idenficador de fichero&quot;?";
 choices[78]= new Array();
 choices[78][0] = "De asunto";
 choices[78][1] = "De origen";
 choices[78][2] = "De destino";
 choices[78][3] = "De anexo";
 answers[78] = choices[78][3];
 units[78] = "43";
 comments[78] = "Id Pregunta: 10715. ";


//  Id pregunta: 10723 AÃ±o de creación de pregunta: 2015-01-01
 questions[79]= "80)  Seg&uacute;n la NTI de Protocolos de intermediaci&oacute;n de datos, dentro del Rol de la Plataforma de intermediaci&oacute;n del Ministerio de Hacienda y Administraciones P&uacute;blicas no se contempla:";
 choices[79]= new Array();
 choices[79][0] = "Gestionar los Cesionarios y Requirentes seg&uacute;n las condiciones establecidas por cada Cedente.";
 choices[79][1] = "Almacenar la informaci&oacute;n personal de cualquier transacci&oacute;n de intercambio de datos.";
 choices[79][2] = "Asegurar la confidencialidad e integridad de la informaci&oacute;n intercambiada a trav&eacute;s de los mecanismos correspondientes.";
 choices[79][3] = "Mantener un portal web informativo con toda la documentaci&oacute;n relativa a la Plataforma.";
 answers[79] = choices[79][1];
 units[79] = "43";
 comments[79] = "Id Pregunta: 10723. ";


//  Id pregunta: 10735 AÃ±o de creación de pregunta: 2015-01-01
 questions[80]= "81)  Seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Reutilizaci&oacute;n de recursos de la informaci&oacute;n, &iquest;qu&eacute; usar&aacute;n los identificadores de recursos uniformes?";
 choices[80]= new Array();
 choices[80][0] = "HTTP o HTTPS";
 choices[80][1] = "XML";
 choices[80][2] = "Formatos libres";
 choices[80][3] = "Licencias Europeas de Libre utilizaci&oacute;n";
 answers[80] = choices[80][0];
 units[80] = "43";
 comments[80] = "Id Pregunta: 10735. ";


//  Id pregunta: 10761 AÃ±o de creación de pregunta: 2015-01-01
 questions[81]= "82)  &iquest;Qu&eacute; serie CCN-STIC constituye un conjunto de normas desarrolladas para entornos basados en el sistema operativo Windows de Microsoft?";
 choices[81]= new Array();
 choices[81][0] = "500";
 choices[81][1] = "600";
 choices[81][2] = "700";
 choices[81][3] = "400";
 answers[81] = choices[81][0];
 units[81] = "43";
 comments[81] = "Id Pregunta: 10761. ";


//  Id pregunta: 10780 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  Seg&uacute;n el art&iacute;culo 18 del Real Decreto 1671/2009, sobre certificados de sede electr&oacute;nica de la Administraci&oacute;n General del Estado y de sus organismos p&uacute;blicos vinculados o dependientes, &iquest;cu&aacute;l de los siguientes NO es uno de los contenidos m&iacute;nimos a incluir en un certificado electr&oacute;nico de sede electr&oacute;nica?";
 choices[82]= new Array();
 choices[82][0] = "Nombre descriptivo de la sede electr&oacute;nica.";
 choices[82][1] = "N&uacute;mero de identificaci&oacute;n fiscal de la entidad suscriptora.";
 choices[82][2] = "Descripci&oacute;n del tipo de certificado, con la denominaci&oacute;n &laquo;sede electr&oacute;nica&raquo;.";
 choices[82][3] = "Direcci&oacute;n f&iacute;sica de la entidad suscriptora.";
 answers[82] = choices[82][3];
 units[82] = "43";
 comments[82] = "Id Pregunta: 10780. Examen GSI 2014";


//  Id pregunta: 10783 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  Seg&uacute;n el art&iacute;culo 40 de la Ley 11/2007, de acceso electr&oacute;nico de los ciudadanos a los Servicios P&uacute;blicos, sobre el Comit&eacute; Sectorial de administraci&oacute;n electr&oacute;nica, &iquest;cu&aacute;l de las siguientes opciones es una funci&oacute;n de dicho &oacute;rgano?";
 choices[83]= new Array();
 choices[83][0] = "Desarrollar la normativa en materia de administraci&oacute;n electr&oacute;nica a nivel nacional.";
 choices[83][1] = "Asegurar la compatibilidad e interoperabilidad de los sistemas y aplicaciones empleados por las Administraciones P&uacute;blicas.";
 choices[83][2] = "Elaborar un informe anual sobre el nivel de avance de la administraci&oacute;n electr&oacute;nica a nivel nacional, auton&oacute;mico y municipal.";
 choices[83][3] = "Estimular el crecimiento en el empleo de la administraci&oacute;n electr&oacute;nica por parte de ciudadanos y empresas.";
 answers[83] = choices[83][1];
 units[83] = "43";
 comments[83] = "Id Pregunta: 10783. Examen GSI 2014";


//  Id pregunta: 10809 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  Indique la afirmaci&oacute;n FALSA respecto a VoiceXML:";
 choices[84]= new Array();
 choices[84][0] = "Es un lenguaje basado en XML.";
 choices[84][1] = "VoiceXML tiene como origen el Phone Markup Language (PML) de AT&amp;T.";
 choices[84][2] = "Es una recomendaci&oacute;n de la W3C.";
 choices[84][3] = "La &uacute;ltima versi&oacute;n es la VoiceXML 2.0.";
 answers[84] = choices[84][3];
 units[84] = "69";
 comments[84] = "Id Pregunta: 10809. Examen GSI 2014";


//  Id pregunta: 10900 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  Atendiendo &uacute;nicamente a criterios de eficiencia en tiempo, &iquest;cu&aacute;l de los siguientes m&eacute;todos ser&iacute;a el m&aacute;s eficiente para securizar las comunicaciones entre usuarios dentro de una red?";
 choices[85]= new Array();
 choices[85][0] = "Mediante claves sim&eacute;tricas.";
 choices[85][1] = "Mediante claves asim&eacute;tricas.";
 choices[85][2] = "Mediante claves sim&eacute;tricas compartidas peri&oacute;dicamente con claves asim&eacute;tricas.";
 choices[85][3] = "Mediante claves asim&eacute;tricas compartidas peri&oacute;dicamente con claves sim&eacute;tricas.";
 answers[85] = choices[85][0];
 units[85] = "73, 74";
 comments[85] = "Id Pregunta: 10900. Examen GSI 2014";


//  Id pregunta: 10905 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  El lenguaje de consulta sobre RDF que permite hacer b&uacute;squedas sobre los recursos de la Web Sem&aacute;ntica utilizando distintas fuentes de datos es:";
 choices[86]= new Array();
 choices[86][0] = "OWL";
 choices[86][1] = "RQUERY";
 choices[86][2] = "JQUERY";
 choices[86][3] = "SPARQL";
 answers[86] = choices[86][3];
 units[86] = "69, 22";
 comments[86] = "Id Pregunta: 10905. Examen GSI 2014";


//  Id pregunta: 10951 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  Respecto a los requisitos a cumplir en la digitalizaci&oacute;n de documentos establecidos por la Norma T&eacute;cnica de Interoperabilidad de Digitalizaci&oacute;n de Documentos es correcto que:";
 choices[87]= new Array();
 choices[87][0] = "El nivel de resoluci&oacute;n m&aacute;ximo para im&aacute;genes electr&oacute;nicas ser&aacute; de 200 p&iacute;xeles por pulgada, tanto para im&aacute;genes obtenidas en blanco y negro, color o escala de grises.";
 choices[87][1] = "La imagen electr&oacute;nica se podr&aacute; optimizar para garantizar su legibilidad, de modo que todo contenido del documento origen pueda apreciarse y sea v&aacute;lido para su gesti&oacute;n.";
 choices[87][2] = "La imagen electr&oacute;nica podr&aacute; contener caracteres o gr&aacute;ficos, siempre que sean incorporados por el funcionario responsable del expediente y adecuadamente identificados mediante sello oficial.";
 choices[87][3] = "La digitalizaci&oacute;n de un documento implicar&aacute;, en todos los casos, la asignaci&oacute;n de los metadatos m&iacute;nimos obligatorios definidos en la Norma T&eacute;cnica de Interoperabilidad de Documento Electr&oacute;nico y la firma de la imagen electr&oacute;nica.";
 answers[87] = choices[87][1];
 units[87] = "43";
 comments[87] = "Id Pregunta: 10951. TIC A1 AGE 2014";


//  Id pregunta: 10998 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  Respecto a HTML5, se&ntilde;ale la respuesta correcta:";
 choices[88]= new Array();
 choices[88][0] = "Su uso est&aacute; recomendado para el desarrollo web de los sitios de la Administraci&oacute;n General del Estado, siempre que no se incumpla la normativa de accesibilidad.";
 choices[88][1] = "En ning&uacute;n caso se recomienda el uso de HTML5 en el desarrollo web de los sitios de la Administraci&oacute;n General del Estado.";
 choices[88][2] = "Simplifica el desarrollo de sitios web porque elimina el uso de CSS (Cascading Style Sheets).";
 choices[88][3] = "No permite incluir v&iacute;deo de forma nativa, siendo necesario recurrir siempre a complementos (plugins) externos.";
 answers[88] = choices[88][0];
 units[88] = "69";
 comments[88] = "Id Pregunta: 10998. TIC A1 AGE 2014";


//  Id pregunta: 11022 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  &iquest;Cu&aacute;l es la &uacute;nica pauta definida dentro del principio de robustez de las WCAG 2.0? ";
 choices[89]= new Array();
 choices[89][0] = "Alternativas textuales";
 choices[89][1] = "Accesible a trav&eacute;s de teclado";
 choices[89][2] = "Compatible";
 choices[89][3] = "Ayuda a la entrada de datos";
 answers[89] = choices[89][2];
 units[89] = "39";
 comments[89] = "Id Pregunta: 11022. ";


//  Id pregunta: 11052 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  &iquest;Cu&aacute;l es el plazo m&aacute;ximo de validez de los certificados reconocidos para firma electr&oacute;nica?";
 choices[90]= new Array();
 choices[90][0] = "30 meses";
 choices[90][1] = "4 a&ntilde;os";
 choices[90][2] = "5 a&ntilde;os";
 choices[90][3] = "10 a&ntilde;os";
 answers[90] = choices[90][2];
 units[90] = "73";
 comments[90] = "Id Pregunta: 11052. Modificado por Ley 9/2014";


//  Id pregunta: 11262 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Para los niveles de seguridad de los sistemas de autenticaci&oacute;n definidos en el Reglamento 910/2014 relativo a la identificaci&oacute;n electr&oacute;nica y los servicios de confianza para las transacciones electr&oacute;nicas en el mercado interior, NO es cierto:";
 choices[91]= new Array();
 choices[91][0] = "Se tienen en cuenta tanto el proyecto europeo STORK como la norma ISO 29115.";
 choices[91][1] = "El nivel sustancial de STORK requiere un registro presencial al menos una vez, y la credencial electr&oacute;nica se entrega como certificado hardware.";
 choices[91][2] = "El modelo QAA (Quality, Authentication, Assurance) diferencia los factores asociados al proceso de registro y entrega de la credencial, y factores asociados al proceso de autenticaci&oacute;n electr&oacute;nica con dicha credencial.";
 choices[91][3] = "El DNIe se corresponde con un nivel 4 de QAA.";
 answers[91] = choices[91][1];
 units[91] = "73";
 comments[91] = "Id Pregunta: 11262. ";


//  Id pregunta: 11263 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Sobre los servicios cualificados de entrega electr&oacute;nica certificada es FALSO que deban cumplir el siguiente requisito t&eacute;cnico:";
 choices[92]= new Array();
 choices[92][0] = "Ser prestados por uno o m&aacute;s prestadores cualificados de servicios de confianza.";
 choices[92][1] = "Asegurar con un alto nivel de fiabilidad la identificaci&oacute;n del remitente.";
 choices[92][2] = "Estar protegidos el env&iacute;o y recepci&oacute;n de datos por una firma electr&oacute;nica cualificada o un sello electr&oacute;nico cualificado de tal forma que se impida la posibilidad de que se modifiquen los datos sin que se detecte.";
 choices[92][3] = "Indicar claramente al emisor y al destinatario de los datos cualquier modificaci&oacute;n de los datos necesarios a efectos del env&iacute;o o recepci&oacute;n de los datos.";
 answers[92] = choices[92][2];
 units[92] = "73";
 comments[92] = "Id Pregunta: 11263. ";


//  Id pregunta: 11483 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  El Plan de Transformaci&oacute;n Digital de la Administraci&oacute;n General del Estado (AGE) y sus Organismos P&uacute;blicos, Estrategia TIC 2015-2020, fue aprobado por";
 choices[93]= new Array();
 choices[93][0] = "La Comisi&oacute;n de Estrategia TIC (CETIC) el 2 de Octubre de 2015.";
 choices[93][1] = "El Consejo de Ministros el 2 de Octubre de 2015.";
 choices[93][2] = "La Direcci&oacute;n TIC (DTIC) el 15 de septiembre de 2015.";
 choices[93][3] = "Por el Consejo Superior de Administraci&oacute;n Electr&oacute;nica (CSAE) el 15 de Septiembre de 2015.";
 answers[93] = choices[93][1];
 units[93] = "44";
 comments[93] = "Id Pregunta: 11483. NULL";


//  Id pregunta: 11484 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  El Derecho de Acceso a la Informaci&oacute;n P&uacute;blica, regulado en la Ley 19/2013 de Transparencia, acceso a la informaci&oacute;n p&uacute;blica y Buen Gobierno";
 choices[94]= new Array();
 choices[94][0] = "Ser&aacute; gratuito, y el plazo m&aacute;ximo de resoluci&oacute;n en el que se conceda o deniegue el acceso es de 1 mes.";
 choices[94][1] = "Ser&aacute; gratuito, y el plazo m&aacute;ximo de resoluci&oacute;n en el que se conceda o deniegue el acceso es de 30 d&iacute;as.";
 choices[94][2] = "Requiere pago de tasa p&uacute;blica, y el plazo m&aacute;ximo de resoluci&oacute;n en el que se conceda o deniegue el acceso es de 30 d&iacute;as.";
 choices[94][3] = "Ser&aacute; gratuito, y el plazo m&aacute;ximo de resoluci&oacute;n en el que se conceda o deniegue el acceso es de 15 d&iacute;as.";
 answers[94] = choices[94][0];
 units[94] = "43";
 comments[94] = "Id Pregunta: 11484. NULL";


//  Id pregunta: 11602 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  La Orden HAP/7/2014 regula:";
 choices[95]= new Array();
 choices[95][0] = "El sistema cl@ve";
 choices[95][1] = "El Registro electr&oacute;nico de apoderamientos";
 choices[95][2] = "El Registro de funcionarios habilitados";
 choices[95][3] = "El sistema AutenticA";
 answers[95] = choices[95][2];
 units[95] = "44";
 comments[95] = "Id Pregunta: 11602. ";


//  Id pregunta: 11624 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Se&ntilde;ale la respuesta incorrecta con respecto al procesado de documentos XML:";
 choices[96]= new Array();
 choices[96][0] = "Los parsers DOM consumen mucha memoria.";
 choices[96][1] = "Los parsers DOM facilitan el acceso a toda la informaci&oacute;n del documento XML.";
 choices[96][2] = "Los parsers SAX permiten la modificaci&oacute;n de datos en memoria.";
 choices[96][3] = "Para los parsers SAX el tama&ntilde;o del documento XML es irrelevante.";
 answers[96] = choices[96][2];
 units[96] = "69";
 comments[96] = "Id Pregunta: 11624. ";


//  Id pregunta: 11744 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Qu&eacute; dimensi&oacute;n de seguridad es obligatoria de evaluar para el responsable del servicio?&nbsp;  ";
 choices[97]= new Array();
 choices[97][0] = "autenticacion";
 choices[97][1] = "trazabilidad";
 choices[97][2] = "integridad";
 choices[97][3] = "disponibilidad";
 answers[97] = choices[97][3];
 units[97] = "43";
 comments[97] = "Id Pregunta: 11744. ";


//  Id pregunta: 11763 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Por qui&eacute;n est&aacute; presidida la Comisi&oacute;n Estrat&eacute;gica TIC?";
 choices[98]= new Array();
 choices[98][0] = "Ministro de Industria, Energ&iacute;a y Turismo";
 choices[98][1] = "Ministro de Fomento";
 choices[98][2] = "Ministro de Econom&iacute;a";
 choices[98][3] = "Ministro de Hacienda";
 answers[98] = choices[98][3];
 units[98] = "43";
 comments[98] = "Id Pregunta: 11763. ";


//  Id pregunta: 11775 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Implementaci&oacute;n de servicios compartidos: Los Organismos que van a utilizar un servicio compartido";
 choices[99]= new Array();
 choices[99][0] = "Deben firmar un convenio con la Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y de la Comunicaci&oacute;n&nbsp;";
 choices[99][1] = "Pueden solicitar prestaciones &quot;ad hoc&quot;";
 choices[99][2] = "Deben usar el presupuesto de la secci&oacute;n 31 para Gastos de&nbsp;Diversos Ministerios";
 choices[99][3] = "Generalmente tienen que contribuir econ&oacute;micamente al servicio";
 answers[99] = choices[99][3];
 units[99] = "44";
 comments[99] = "Id Pregunta: 11775. ";


