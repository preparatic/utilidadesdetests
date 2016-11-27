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

//  Id pregunta: 8 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de los siguientes puntos de verificaci&oacute;n de WAI (en la norma WCAG 1.0) no es de prioridad 1?";
 choices[0]= new Array();
 choices[0][0] = "&quot;Titule cada marco para facilitar la identificaci&oacute;n y navegaci&oacute;n de los mismos&quot;";
 choices[0][1] = "&quot;En las tablas de datos, identifique los encabezamientos de fila y columna&quot;";
 choices[0][2] = "&quot;Asegure que toda la informaci&oacute;n transmitida a trav&eacute;s de los colores tambi&eacute;n est&eacute; disponible sin color, por ejemplo mediante el contexto o por marcadores&quot;";
 choices[0][3] = "&quot;Utilice hojas de estilo para controlar la maquetaci&oacute;n y la presentaci&oacute;n&quot;";
 answers[0] = choices[0][3];
 units[0] = "39";
 comments[0] = "Id Pregunta: 8. ";


//  Id pregunta: 24 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;C&oacute;mo se denomina la posibilidad de funcionamiento en distintas plataformas sin necesidad de cambios  en el aplicativo?:";
 choices[1]= new Array();
 choices[1][0] = "Interoperatividad";
 choices[1][1] = "Compatibilidad";
 choices[1][2] = "Portabilidad";
 choices[1][3] = "Normalizaci&oacute;n";
 answers[1] = choices[1][2];
 units[1] = "40";
 comments[1] = "Id Pregunta: 24. ";


//  Id pregunta: 25 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;C&oacute;mo se denominan los distintos niveles de adecuaci&oacute;n contemplados en WAI?";
 choices[2]= new Array();
 choices[2][0] = "A, B, C y D";
 choices[2][1] = "A, AA y AAA";
 choices[2][2] = "A1, A2 y A3";
 choices[2][3] = "1, 2, 3 y 4";
 answers[2] = choices[2][1];
 units[2] = "39";
 comments[2] = "Id Pregunta: 25. ";


//  Id pregunta: 36 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;Cu&aacute;l de las siguientes no es una implementaci&oacute;n de POSIX (IEEE 1003)?:";
 choices[3]= new Array();
 choices[3][0] = "HP-UX";
 choices[3][1] = "MINIX";
 choices[3][2] = "Solaris";
 choices[3][3] = "Las 3 anteriores son implementaciones de POSIX";
 answers[3] = choices[3][3];
 units[3] = "40";
 comments[3] = "Id Pregunta: 36. ";


//  Id pregunta: 43 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;Cu&aacute;l de los siguientes componentes, incluido en la guia de portabilidad XPG4 est&aacute; tambi&eacute;n en la XPG3?:";
 choices[4]= new Array();
 choices[4][0] = "Servicio de directorio X.500";
 choices[4][1] = "X Window System Application Interface";
 choices[4][2] = "Gateway X.400";
 choices[4][3] = "Servidor NFS";
 answers[4] = choices[4][1];
 units[4] = "40";
 comments[4] = "Id Pregunta: 43. ";


//  Id pregunta: 63 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;Qu&eacute; es la WAI?";
 choices[5]= new Array();
 choices[5][0] = "una asociaci&oacute;n mundial de defensa de los internautas";
 choices[5][1] = "una iniciativa para la automatizaci&oacute;n de las tareas de organizaci&oacute;n web";
 choices[5][2] = "una iniciativa para facilitar el acceso a la web de los discapacitados";
 choices[5][3] = "una iniciativa para el desarrollo de aplicaciones inal&aacute;mbricas";
 answers[5] = choices[5][2];
 units[5] = "39";
 comments[5] = "Id Pregunta: 63. ";


//  Id pregunta: 415 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Se define como interoperabilidad la posibilidad de:";
 choices[6]= new Array();
 choices[6][0] = "Manejar un ordenador desde cualquier puesto de trabajo de la red";
 choices[6][1] = "Transmitir datos entre dos ordenadores distintos";
 choices[6][2] = "Compartir procesos y datos entre distintos procesadores";
 choices[6][3] = "Ejecutar la misma aplicaci&oacute;n en plataformas de diferentes fabricantes";
 answers[6] = choices[6][2];
 units[6] = "40";
 comments[6] = "Id Pregunta: 415. ";


//  Id pregunta: 645 AÃ±o de creación de pregunta: 2006-01-01
 questions[7]= "8)  Cu&aacute;l de las siguientes no es una excepci&oacute;n admitida por la Decisi&oacute;n 87/95/CEE para la utilizaci&oacute;n de especificaciones no normalizadas:";
 choices[7]= new Array();
 choices[7][0] = "Por cuestiones de continuidad de funcionamiento, pero con la existencia de un plan estrat&eacute;gico de transici&oacute;n.";
 choices[7][1] = "Por la existencia de una norma 'de facto' ampliamente aceptada.";
 choices[7][2] = "Si se demuestra que la satisfacci&oacute;n de la norma tiene un coste excesivo.";
 choices[7][3] = "Por cuestiones de Innovaci&oacute;n.";
 answers[7] = choices[7][1];
 units[7] = "40";
 comments[7] = "Id Pregunta: 645. ";


//  Id pregunta: 687 AÃ±o de creación de pregunta: 2005-01-01
 questions[8]= "9)  La &uacute;nica empresa u organismo en Espa&ntilde;a que proporciona certificados digitales es la FNMT:";
 choices[8]= new Array();
 choices[8][0] = "Es completamente cierto";
 choices[8][1] = "Es cierto para certificados servidor";
 choices[8][2] = "Es completamente falso";
 choices[8][3] = "Es cierto s&oacute;lo para certificados de empleado p&uacute;blico, sede electr&oacute;nica y sello electr&oacute;nico";
 answers[8] = choices[8][2];
 units[8] = "73";
 comments[8] = "Id Pregunta: 687. ";


//  Id pregunta: 702 AÃ±o de creación de pregunta: 2004-01-01
 questions[9]= "10)  Cu&aacute;l de las siguientes l&iacute;neas ser&iacute;a v&aacute;lida en XHTML:";
 choices[9]= new Array();
 choices[9][0] = "&lt;br/&gt;&lt;hr&gt;&lt;/hr&gt;";
 choices[9][1] = "&lt;br/&gt;&lt;hr/&gt;";
 choices[9][2] = "&lt;hr&gt;&lt;/hr&gt;";
 choices[9][3] = "Todas son v&aacute;lidas";
 answers[9] = choices[9][3];
 units[9] = "69";
 comments[9] = "Id Pregunta: 702. Similar a examen TIC MAP A 2004. La C no ser&iacute;a v&aacute;lida en HTML 4.0";


//  Id pregunta: 913 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Qu&eacute; define la norma X.500?:";
 choices[10]= new Array();
 choices[10][0] = "Servicio de directorio";
 choices[10][1] = "Sistema de tratamiento de mensajes";
 choices[10][2] = "Servicio de transferencia de ficheros";
 choices[10][3] = "Sistema de gesti&oacute;n de red";
 answers[10] = choices[10][0];
 units[10] = "73";
 comments[10] = "Id Pregunta: 913. ";


//  Id pregunta: 1100 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  En Java, al mecanismo que permite agrupar un conjunto de clases relacionadas se le denomina";
 choices[11]= new Array();
 choices[11][0] = "Superset o superconjunto";
 choices[11][1] = "Package o paquete";
 choices[11][2] = "Superclass o Superclase";
 choices[11][3] = "Colection o Colecci&oacute;n";
 answers[11] = choices[11][1];
 units[11] = "60";
 comments[11] = "Id Pregunta: 1100. JCED - Preparatic XVII";


//  Id pregunta: 1271 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Los certificados digitales o 'digital IDs' est&aacute;n definidos en:";
 choices[12]= new Array();
 choices[12][0] = "RSA Public Key Structure";
 choices[12][1] = "X.509v3 de ITU";
 choices[12][2] = "RFC 1661 de IAB";
 choices[12][3] = "Verisign doc 1992/21";
 answers[12] = choices[12][1];
 units[12] = "73";
 comments[12] = "Id Pregunta: 1271. ";


//  Id pregunta: 1299 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Para la comunicaci&oacute;n web segura, la norma de seguridad independiente del protocolo de aplicaci&oacute;n y, por tanto, v&aacute;lida para http, ftp, telnet&hellip; es la siguiente:";
 choices[13]= new Array();
 choices[13][0] = "DNS";
 choices[13][1] = "SSL";
 choices[13][2] = "XAdES-A";
 choices[13][3] = "WML";
 answers[13] = choices[13][1];
 units[13] = "73";
 comments[13] = "Id Pregunta: 1299. ";


//  Id pregunta: 1317 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  Respecto a los DTDs es falso que:";
 choices[14]= new Array();
 choices[14][0] = "est&aacute;n escritos en una sintaxis diferente de XML";
 choices[14][1] = "representan la &uacute;nica manera de definir un documento XML, y su ausencia implica que la definici&oacute;n del documento se saca del contexto";
 choices[14][2] = "no son obligatorios, y los documentos XML correctos pero sin DTD se denominan &quot;bien formados&quot;";
 choices[14][3] = "est&aacute;n muy extendidos y existen muchas herramientas y expertos en su utilizaci&oacute;n y desarrollo";
 answers[14] = choices[14][1];
 units[14] = "69";
 comments[14] = "Id Pregunta: 1317. NULL";


//  Id pregunta: 1563 AÃ±o de creación de pregunta: 2003-01-01
 questions[15]= "16)  &iquest;Cu&aacute;l de los siguientes tipos de informaci&oacute;n no est&aacute; contenida obligatoriamente en un certificado digital X.509?:";
 choices[15]= new Array();
 choices[15][0] = "La clave p&uacute;blica del titular.";
 choices[15][1] = "Datos personales de identificaci&oacute;n del titular.";
 choices[15][2] = "La URL del directorio LDAP contenedor de claves p&uacute;blicas.";
 choices[15][3] = "La firma electr&oacute;nica de la Autoridad de Certificaci&oacute;n que emiti&oacute; el certificado.";
 answers[15] = choices[15][2];
 units[15] = "73";
 comments[15] = "Id Pregunta: 1563. Junta Andaluc&iacute;a";


//  Id pregunta: 1759 AÃ±o de creación de pregunta: 2006-01-01
 questions[16]= "17)  En el entorno Microsoft.NET:";
 choices[16]= new Array();
 choices[16][0] = "MS SQL Server CompactEs una base datos empotrada, adaptada a aplicaciones m&oacute;viles u ocasionalmente conectadas.";
 choices[16][1] = "MS Web Deploy 3.0Es una herramienta para despliegue, gesti&oacute;n y migraci&oacute;on de aplicaciones complejas distribuidas compuestas por m&uacute;ltiples sitios, servidores o aplicaciones web.";
 choices[16][2] = "BizTalk ServerEs un ESB que permite la automatizacion de procesos de negocio, comunicando diferentes sistemas mediante mensajes en XML.";
 choices[16][3] = "Todas son correctas";
 answers[16] = choices[16][3];
 units[16] = "59";
 comments[16] = "Id Pregunta: 1759. ";


//  Id pregunta: 1769 AÃ±o de creación de pregunta: 2006-01-01
 questions[17]= "18)  Los applets de JAVA:";
 choices[17]= new Array();
 choices[17][0] = "Se puede incluir en una p&aacute;gina HTML de forma mediante una etiqueta especial &lt;add_applet&gt;";
 choices[17][1] = "Un applet nunca puede hacer conexiones a la m&aacute;quina de la que se descarg&oacute;.";
 choices[17][2] = "El navegador invoca el m&eacute;todo init() sobre un applet cada vez que se va a mostrar la p&aacute;gina que contiene &eacute;ste.";
 choices[17][3] = "Para firmar un applet se tiene que crear un fichero de archivo JAR con las clases que componen el applet, un fichero de metainformaci&oacute;n y el fichero de firma.";
 answers[17] = choices[17][3];
 units[17] = "60";
 comments[17] = "Id Pregunta: 1769. NULL";


//  Id pregunta: 1771 AÃ±o de creación de pregunta: 2006-01-01
 questions[18]= "19)  Respecto a JNI";
 choices[18]= new Array();
 choices[18][0] = "Se sigue conservando la portabilidad universal";
 choices[18][1] = "Es la interfaz est&aacute;ndar de programaci&oacute;n para llamar a m&eacute;todos nativos escritos en otros lenguajes como C o C++.";
 choices[18][2] = " permite utilizar clases java desde aplicaciones nativas.";
 choices[18][3] = "B y C son correctas";
 answers[18] = choices[18][3];
 units[18] = "60";
 comments[18] = "Id Pregunta: 1771. NULL";


//  Id pregunta: 1840 AÃ±o de creación de pregunta: 2006-01-01
 questions[19]= "20)  Se&ntilde;ale cu&aacute;l de las siguientes tecnolog&iacute;as no est&aacute; relacionada con el comercio electr&oacute;nico:";
 choices[19]= new Array();
 choices[19][0] = "EDIFACT";
 choices[19][1] = "ODETTE";
 choices[19][2] = "ANSI X13";
 choices[19][3] = "XML";
 answers[19] = choices[19][2];
 units[19] = "70";
 comments[19] = "Id Pregunta: 1840. NULL";


//  Id pregunta: 1919 AÃ±o de creación de pregunta: 2006-01-01
 questions[20]= "21)  Seg&uacute;n la recomendaci&oacute;n X.509 v.3:";
 choices[20]= new Array();
 choices[20][0] = "La autenticaci&oacute;n simple conlleva el uso exclusivo de contrase&ntilde;as transmitidas en claro";
 choices[20][1] = "La autenticaci&oacute;n robusta (strong) de un sentido conlleva siempre el empleo de funciones resumen (hash)";
 choices[20][2] = "La autenticaci&oacute;n robusta (strong) de dos sentidos comporta siempre el uso de credenciales obtenidas mediante t&eacute;cnicas criptogr&aacute;ficas";
 choices[20][3] = "La autenticaci&oacute;n robusta (strong) de tres sentidos debe incorporar siempre sellos de tiempo";
 answers[20] = choices[20][2];
 units[20] = "73";
 comments[20] = "Id Pregunta: 1919. ";


//  Id pregunta: 4322 AÃ±o de creación de pregunta: 2007-01-01
 questions[21]= "22)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre PostScript y el formato PDF no es correcta?";
 choices[21]= new Array();
 choices[21][0] = "PostScript es un lenguaje de programaci&oacute;n, y PDF no";
 choices[21][1] = "Tanto PostScript como PDF comparten el mismo Modelo de Imagen, describiendo las p&aacute;ginas mediante los mismos mecanismos";
 choices[21][2] = "Tanto en PostScript como en PDF es posible definir bucles.";
 choices[21][3] = "PostScript es interpretado y ejecutado. PDF es interpretado, pero no ejecutado en sentido estricto.";
 answers[21] = choices[21][2];
 units[21] = "40";
 comments[21] = "Id Pregunta: 4322. ";


//  Id pregunta: 4366 AÃ±o de creación de pregunta: 2007-01-01
 questions[22]= "23)  La etiqueta en HTML para indicar el comienzo de una celda con datos en una tabla es:";
 choices[22]= new Array();
 choices[22][0] = "&lt;table&gt;";
 choices[22][1] = "&lt;tr&gt;";
 choices[22][2] = "&lt;th&gt;";
 choices[22][3] = "&lt;td&gt;";
 answers[22] = choices[22][3];
 units[22] = "69";
 comments[22] = "Id Pregunta: 4366. NULL";


//  Id pregunta: 4482 AÃ±o de creación de pregunta: 2007-01-01
 questions[23]= "24)  Si consideramos el framework de Net &iquest;Que entender&iacute;amos por CTS( Common Type System, o Sistema de Tipos Com&uacute;n)?";
 choices[23]= new Array();
 choices[23][0] = "Es un est&aacute;ndar que establece como se representan los tipos de datos en memoria, independientemente del lenguaje que los defina.";
 choices[23][1] = "Es un sistema tipificado de Software";
 choices[23][2] = "Es un sistema com&uacute;n de tipos que permite interoperar entre distintas plataformas.";
 choices[23][3] = "Ninguna de las anteriores";
 answers[23] = choices[23][0];
 units[23] = "59";
 comments[23] = "Id Pregunta: 4482. ";


//  Id pregunta: 4601 AÃ±o de creación de pregunta: 2007-01-01
 questions[24]= "25)  La organizaci&oacute;n de la informaci&oacute;n en un servicio de directorio es:";
 choices[24]= new Array();
 choices[24][0] = "relacional";
 choices[24][1] = "indexada";
 choices[24][2] = "jer&aacute;rquica";
 choices[24][3] = "en colas";
 answers[24] = choices[24][2];
 units[24] = "73";
 comments[24] = "Id Pregunta: 4601. ";


//  Id pregunta: 4726 AÃ±o de creación de pregunta: 2007-01-01
 questions[25]= "26)  Cual de las siguientes afirmaciones es correcta cuando hablamos de XML:";
 choices[25]= new Array();
 choices[25][0] = "Cocoon es un parser XML de c&oacute;digo abierto";
 choices[25][1] = "Los parsers XML sin validaci&oacute;n necesitan el dtd asociado al documento xml";
 choices[25][2] = "Xerces es un parser XML basado en java";
 choices[25][3] = "XSLT es un esquema para XML utilizado en lugar de los DTD";
 answers[25] = choices[25][2];
 units[25] = "69";
 comments[25] = "Id Pregunta: 4726. Examen 2006 JCYL";


//  Id pregunta: 4755 AÃ±o de creación de pregunta: 2007-01-01
 questions[26]= "27)  La definici&oacute;n de usabilidad seg&uacute;n el est&aacute;ndar ISO 9241-11:1998 es la siguiente:";
 choices[26]= new Array();
 choices[26][0] = "Grado en que un producto puede ser usado por una persona con alg&uacute;n tipo de discapacidad (f&iacute;sica, cognitiva o tecnol&oacute;gica) respecto a c&oacute;mo lo usar&iacute;a una persona sin discapacidad";
 choices[26][1] = "Capacidad de uso, es decir, caracter&iacute;stica que distingue a los objetos dise&ntilde;ados para su utilizaci&oacute;n de los que no.";
 choices[26][2] = "Grado en que un producto puede ser usado por los usuarios especificados para obtener los resultados especificados con efectividad, eficiencia, y satisfacci&oacute;n en un contexto de uso especificado";
 choices[26][3] = "Ninguna de las anteriores";
 answers[26] = choices[26][2];
 units[26] = "39";
 comments[26] = "Id Pregunta: 4755. ";


//  Id pregunta: 4870 AÃ±o de creación de pregunta: 2007-01-01
 questions[27]= "28)  Seg&uacute;n la recomendaci&oacute;n X.509 v.3, las Listas de certificados revocados (CRL)";
 choices[27]= new Array();
 choices[27][0] = "Permiten conocer el estado de un certificado en el instante de la consulta";
 choices[27][1] = "Para cada certificado revocado indican, entre otros, el nombre del titular del certificado y la correspondienteclave p&uacute;blica";
 choices[27][2] = "Pueden contener certificados revocados por diversas Autoridades de Certificaci&oacute;n";
 choices[27][3] = "Las delta CRL son los subconjuntos en los que se divide una CRL y que instaladas en m&aacute;quinas distintasfacilitan su tratamiento";
 answers[27] = choices[27][2];
 units[27] = "73";
 comments[27] = "Id Pregunta: 4870. ";


//  Id pregunta: 5077 AÃ±o de creación de pregunta: 2003-01-01
 questions[28]= "29)  &iquest;Cual de los siguientes es un est&aacute;ndar de W3C que permite referenciar partes de un documento XML?:";
 choices[28]= new Array();
 choices[28][0] = "XSL-FO";
 choices[28][1] = "Xpath";
 choices[28][2] = "XSLT";
 choices[28][3] = "Xforms";
 answers[28] = choices[28][1];
 units[28] = "69";
 comments[28] = "Id Pregunta: 5077. Examen TIC A 2007";


//  Id pregunta: 5090 AÃ±o de creación de pregunta: 2001-01-01
 questions[29]= "30)  &iquest;Cu&aacute;l de los siguientes no es un m&eacute;todo de actualizaci&oacute;n de CRLs?";
 choices[29]= new Array();
 choices[29][0] = "muestreo de CRLs";
 choices[29][1] = "env&iacute;o de CRL";
 choices[29][2] = "anuncio de CRL";
 choices[29][3] = "verificaci&oacute;n en l&iacute;nea";
 answers[29] = choices[29][1];
 units[29] = "73";
 comments[29] = "Id Pregunta: 5090. ";


//  Id pregunta: 5544 AÃ±o de creación de pregunta: 2003-01-01
 questions[30]= "31)  Se&ntilde;ale la respuesta correcta respecto a la entrada en vigor de la La ley 11/2007 que regula el acceso electr&oacute;nico de los ciudadanos  a los servicios p&uacute;blicos:";
 choices[30]= new Array();
 choices[30][0] = "A partir del d&iacute;a siguiente a su publicaci&oacute;n en el BOE.";
 choices[30][1] = "Los derechos reconocidos en el art 6 de la ley 11/2007, podr&aacute;n ejercerse respecto de los procedimientos y actuaciones adaptados a la misma, desde la entrada en vigor de dicha ley.";
 choices[30][2] = "En el &aacute;mbito de la Administraci&oacute;n General del Estado y para los Organismos Publicos  vinculados o dependientes de &eacute;sta, los derechos reconocidos en el art 6 de dicha ley, podr&aacute;n ejercerse respecto a la totalidad de procedimientos y actuaciones de su competencia, a partir del 31-12-2009.";
 choices[30][3] = "Todas las anteriores son correctas.";
 answers[30] = choices[30][3];
 units[30] = "43";
 comments[30] = "Id Pregunta: 5544. NULL";


//  Id pregunta: 5792 AÃ±o de creación de pregunta: 2009-01-01
 questions[31]= "32)  Indique cu&aacute;l de los siguientes derechos de los ciudadanos al relacionarse con las Administraciones P&uacute;blicas por medios electr&oacute;nicos NO est&aacute; reconocido por la ley 11/2007";
 choices[31]= new Array();
 choices[31][0] = "A la igualdad en el acceso electr&oacute;nico a los servicios de las Administraciones P&uacute;blicas.";
 choices[31][1] = "A conocer por medios electr&oacute;nicos el estado de tramitaci&oacute;n de cualquier procedimiento administrativo.";
 choices[31][2] = "A obtener copias electr&oacute;nicas de los documentos electr&oacute;nicos que formen parte de procedimientos en los que tengan la condici&oacute;n de interesado.";
 choices[31][3] = "A la conservaci&oacute;n en formato electr&oacute;nico por las Administraciones P&uacute;blicas de los documentos electr&oacute;nicos que formen parte de un expediente.";
 answers[31] = choices[31][1];
 units[31] = "43";
 comments[31] = "Id Pregunta: 5792. MAP 2008 A2";


//  Id pregunta: 5795 AÃ±o de creación de pregunta: 2009-01-01
 questions[32]= "33)  Identifique la opci&oacute;n que NO es correcta seg&uacute;n lo especificado en Ley 11/2007. Los ciudadanos podr&aacute;n utilizar los siguientes sistemas de firma electr&oacute;nica para relacionarse con las Administraciones P&uacute;blicas, de acuerdo con lo que cada Administraci&oacute;n determine:";
 choices[32]= new Array();
 choices[32][0] = "En todo caso, los sistemas de firma electr&oacute;nica incorporados al Documento Nacional de Identidad, para personas f&iacute;sicas.";
 choices[32][1] = "Sistemas de firma electr&oacute;nica avanzada basados en certificados electr&oacute;nicos reconocidos emitidos por cualquier prestador de servicios de certificaci&oacute;n.";
 choices[32][2] = "Utilizaci&oacute;n de claves concertadas en un registro previo como usuario, en los t&eacute;rminos y condiciones que en cada caso se determinen.";
 choices[32][3] = "Aportaci&oacute;n de informaci&oacute;n conocida por ambas partes, en los t&eacute;rminos y condiciones que en cada caso se terminen.";
 answers[32] = choices[32][1];
 units[32] = "43";
 comments[32] = "Id Pregunta: 5795. MAP 2008 A2. Actualizada a cambios Ley 15/2014: se deben admitir certificados reconocidos por PSC en lista de confianza publicada en sede-e de MINETUR.";


//  Id pregunta: 5796 AÃ±o de creación de pregunta: 2009-01-01
 questions[33]= "34)  Seg&uacute;n la ley 11/2007 de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, los ciudadanos podr&aacute;n utilizar diferentes sistemas de firma electr&oacute;nica para relacionarse con las Administraciones P&uacute;blicas, de acuerdo con lo que cada Administraci&oacute;n determine. Seleccione la respuesta FALSA:";
 choices[33]= new Array();
 choices[33][0] = "Sistemas de firma electr&oacute;nica avanzada basados en certificados electr&oacute;nicos reconocidos. Las administraciones deber&aacute;n admitir todos los certificados de los prestadores incluidos en la TSL publicada en la sede electr&oacute;nica de MINETUR.";
 choices[33][1] = "En todo caso, los sistemas de firma electr&oacute;nica incorporados al DNI, para personas f&iacute;sicas.";
 choices[33][2] = "Otros sistemas de firma electr&oacute;nica, como la utilizaci&oacute;n de claves concertadas en un registro previo como usuario, la aportaci&oacute;n de informaci&oacute;n conocida por ambas partes u otros sistemas no criptogr&aacute;ficos, en los t&eacute;rminos y condiciones que en cada caso se determinen.";
 choices[33][3] = "Sistemas que permitan la identidad privada mediante un sistema criptogr&aacute;fico de clave publica reconocido por @firma.";
 answers[33] = choices[33][3];
 units[33] = "43";
 comments[33] = "Id Pregunta: 5796. MAP 2008 A2. Actualizada a modificaci&oacute;n art 13 Ley 11/2007 por Ley 15/2014.";


//  Id pregunta: 5825 AÃ±o de creación de pregunta: 2009-01-01
 questions[34]= "35)  &iquest;Cu&aacute;l de las siguientes afirmaciones es INCORRECTA para el programa IDABC?";
 choices[34]= new Array();
 choices[34][0] = "Es gestionado por el Comit&eacute; de Servicios Paneuropeos de Administraci&oacute;n Electr&oacute;nica (CSPAE)";
 choices[34][1] = "Se configura como el instrumento clave para llevar a cabo lo previsto en el Plan de Acci&oacute;n eEurope 2005 y sucesivos sobre el desarrollo de servicios paneuropeos";
 choices[34][2] = "Ejecuta lo previsto en la Decisi&oacute;n 2004/387/CE del Consejo UE y PE";
 choices[34][3] = "El proyecto complementario IDABD extiende esta normativa a particulares y empresas";
 answers[34] = choices[34][3];
 units[34] = "40";
 comments[34] = "Id Pregunta: 5825. MAP 2008 A1";


//  Id pregunta: 5857 AÃ±o de creación de pregunta: 2009-01-01
 questions[35]= "36)  La Web 2.0 se refiere espec&iacute;ficamente a:";
 choices[35]= new Array();
 choices[35][0] = "Webs que generan informaci&oacute;n autom&aacute;ticamente a partir de bases de datos corporativas";
 choices[35][1] = "P&aacute;ginas implementadas con AJAX en las que s&oacute;lo existe un proveedor de contenidos";
 choices[35][2] = "Usar la inteligencia colectiva para proporcionar servicios interactivos en red dando al usuario el control de los datos";
 choices[35][3] = "Programas que procesan la avalancha de informaci&oacute;n existente en la Web";
 answers[35] = choices[35][2];
 units[35] = "69";
 comments[35] = "Id Pregunta: 5857. Pregunta 37";


//  Id pregunta: 5900 AÃ±o de creación de pregunta: 2009-01-01
 questions[36]= "37)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa sobre JPA?";
 choices[36]= new Array();
 choices[36][0] = "El mapeo de los objetos al modelo relacional se puede definir mediante anotaciones en las entidades (clases)";
 choices[36][1] = "El mapeo de los objetos al modelo relacional se puede definir mediante ficheros XML";
 choices[36][2] = "Una misma unidad de persistencia permite acceder a diferentes fuentes de datos";
 choices[36][3] = "Una entidad puede estar mapeada a m&aacute;s de una tabla relacional";
 answers[36] = choices[36][2];
 units[36] = "60";
 comments[36] = "Id Pregunta: 5900. NULL";


//  Id pregunta: 5955 AÃ±o de creación de pregunta: 2009-01-01
 questions[37]= "38)  Se&ntilde;ale la respuesta FALSA. La Ley 11/2007 indica que la Reuni&oacute;n de &Oacute;rganos colegiados por medios electr&oacute;nicos en la Administraci&oacute;n General del Estado se efectuar&aacute; de acuerdo con las siguientes especialidades:";
 choices[37]= new Array();
 choices[37][0] = "Deber&aacute; garantizarse la realizaci&oacute;n efectiva de los principios que la legislaci&oacute;n establece respecto de la convocatoria, acceso a la informaci&oacute;n y comunicaci&oacute;n del orden del d&iacute;a, en donde se especificar&aacute;n los tiempos en los que se organizar&aacute;n los debates, la formulaci&oacute;n y conocimiento de las propuestas y la adopci&oacute;n de acuerdos.";
 choices[37][1] = "Deber&aacute; garantizarse de forma fehaciente el quorum requerido en los t&eacute;rminos establecidos por la Ley 30/1992, de R&eacute;gimen Jur&iacute;dico de las Administraciones P&uacute;blicas y del Procedimiento Administrativo Com&uacute;n por medios electr&oacute;nicos ";
 choices[37][2] = "El r&eacute;gimen de constituci&oacute;n y adopci&oacute;n de acuerdos garantizar&aacute; la participaci&oacute;n de los miembros de acuerdo con las disposiciones propias del &oacute;rgano.";
 choices[37][3] = "Las actas garantizar&aacute;n la constancia de las comunicaciones producidas as&iacute; como el acceso de los miembros al contenido de los acuerdos adoptados.";
 answers[37] = choices[37][1];
 units[37] = "43";
 comments[37] = "Id Pregunta: 5955. Disposici&oacute;n Adicional primera.";


//  Id pregunta: 6125 AÃ±o de creación de pregunta: 2010-01-01
 questions[38]= "39)  El acr&oacute;nimo RSS responde a:";
 choices[38]= new Array();
 choices[38][0] = "Rich Site Summary.";
 choices[38][1] = "RDF Site Summary.";
 choices[38][2] = "Really Simple Syndication.";
 choices[38][3] = "Todos los anteriores.";
 answers[38] = choices[38][3];
 units[38] = "69";
 comments[38] = "Id Pregunta: 6125. TIC A 2009";


//  Id pregunta: 6179 AÃ±o de creación de pregunta: 2010-01-01
 questions[39]= "40)  Una ventaja del procesado de documentos XML usando SAX (frente a DOM) es:";
 choices[39]= new Array();
 choices[39][0] = "Es posible la modificaci&oacute;n de los datos en memoria.";
 choices[39][1] = "Procesa el documento completo.";
 choices[39][2] = "En el procesado de documentos grandes consume menos memoria.";
 choices[39][3] = "Todas las anteriores son ventajas de SAX frente a DOM.";
 answers[39] = choices[39][2];
 units[39] = "69";
 comments[39] = "Id Pregunta: 6179. NULL";


//  Id pregunta: 6220 AÃ±o de creación de pregunta: 2010-01-01
 questions[40]= "41)  Qu&eacute; subproyecto de 'Apache' basado en servlets permite a los desarrolladores crear r&aacute;pidamente aplicaciones web y permite personalizar el uso de sitios web y restringir el acceso a partes de la aplicaci&oacute;n";
 choices[40]= new Array();
 choices[40][0] = "Watchdog";
 choices[40][1] = "Turbine";
 choices[40][2] = "Lucene";
 choices[40][3] = "Avalon";
 answers[40] = choices[40][1];
 units[40] = "60";
 comments[40] = "Id Pregunta: 6220. TICB-2009, bloque desarrollo";


//  Id pregunta: 6385 AÃ±o de creación de pregunta: 2010-01-01
 questions[41]= "42)  &iquest;D&oacute;nde debe publicarse la orden de creaci&oacute;n de una sede electr&oacute;nica?";
 choices[41]= new Array();
 choices[41][0] = "En la p&aacute;gina web del organismo correspondiente";
 choices[41][1] = "No es necesaria ninguna publicaci&oacute;n";
 choices[41][2] = "En el Bolet&iacute;n Oficial del Estado";
 choices[41][3] = "En dos diarios de tirada nacional";
 answers[41] = choices[41][2];
 units[41] = "43";
 comments[41] = "Id Pregunta: 6385. Art&iacute;culo 3.2 RD 1671/2009";


//  Id pregunta: 6392 AÃ±o de creación de pregunta: 2010-01-01
 questions[42]= "43)  &iquest;Cu&aacute;l de los siguientes contenidos deben contener obligatoriamente los certificados electr&oacute;nicos de sede electr&oacute;nica de la AGE y de sus organismos p&uacute;blicos vinculados o dependientes, de acuerdo al RD 1671/2009?";
 choices[42]= new Array();
 choices[42][0] = "Descripci&oacute;n de la sede electr&oacute;nica.";
 choices[42][1] = "Unidad administrativa suscriptora del certificado.";
 choices[42][2] = "Fechas de validez del certificado.";
 choices[42][3] = "Ninguna de las anteriores.";
 answers[42] = choices[42][1];
 units[42] = "43";
 comments[42] = "Id Pregunta: 6392. Art&iacute;culo 18 RD 1671/2009";


//  Id pregunta: 6397 AÃ±o de creación de pregunta: 2010-01-01
 questions[43]= "44)  &iquest;Cu&aacute;l de las siguientes reglas no deben cumplir los expedientes electr&oacute;nicos que deban ser objeto de remisi&oacute;n o puesta a disposici&oacute;n, de acuerdo a lo establecido en el RD 1671/2009?";
 choices[43]= new Array();
 choices[43][0] = "El foliado de los expedientes electr&oacute;nicos se llevar&aacute; a cabo mediante un &iacute;ndice electr&oacute;nico";
 choices[43][1] = "Los expedientes electr&oacute;nicos dispondr&aacute;n de un c&oacute;digo que permita su identificaci&oacute;n un&iacute;voca por cualquier &oacute;rgano de la Administraci&oacute;n en un entorno de intercambio interadministrativo.";
 choices[43][2] = "Con el fin de garantizar la seguridad de los expedientes, tanto su almacenamiento como las especificaciones de los servicios de remisi&oacute;n y puesta a disposici&oacute;n se sujetar&aacute;n a lo que se establezca al respecto por el Esquema Nacional de Seguridad.";
 choices[43][3] = "Los documentos que se integran en el expediente electr&oacute;nico se ajustar&aacute;n al formato o formatos de larga duraci&oacute;n, accesibles en los t&eacute;rminos que determine el Esquema Nacional de Interoperabilidad.";
 answers[43] = choices[43][2];
 units[43] = "43";
 comments[43] = "Id Pregunta: 6397. Art&iacute;culo 53 RD 1671/2009";


//  Id pregunta: 6417 AÃ±o de creación de pregunta: 2010-01-01
 questions[44]= "45)  El reglamento sobre las condiciones b&aacute;sicas para el acceso de las personas con discapacidad a las tecnolog&iacute;as, productos y servicios relacionados con la sociedad de la informaci&oacute;n y medios de comunicaci&oacute;n social es el:";
 choices[44]= new Array();
 choices[44][0] = "RD 1494/2007";
 choices[44][1] = "RD 1497/2004";
 choices[44][2] = "RD 1449/2007";
 choices[44][3] = "RD 1479/2007";
 answers[44] = choices[44][0];
 units[44] = "39";
 comments[44] = "Id Pregunta: 6417. NULL";


//  Id pregunta: 6418 AÃ±o de creación de pregunta: 2010-01-01
 questions[45]= "46)  &iquest;Cu&aacute;l es la norma que supone la base de la certificaci&oacute;n europea en Accesibilidad Web?";
 choices[45]= new Array();
 choices[45][0] = "CWA 139803:2004";
 choices[45][1] = "CWA 15554:2006";
 choices[45][2] = "CWA 4568:2007";
 choices[45][3] = "CWA 17002:2005";
 answers[45] = choices[45][1];
 units[45] = "39";
 comments[45] = "Id Pregunta: 6418. NULL";


//  Id pregunta: 6517 AÃ±o de creación de pregunta: 2010-01-01
 questions[46]= "47)  Se&ntilde;ale que afirmaci&oacute;n es FALSA en relaci&oacute;n a los archivos jar en java:";
 choices[46]= new Array();
 choices[46][0] = "El algoritmo de compresi&oacute;n que utilizan es LZW.";
 choices[46][1] = "Son independientes de la plataforma y cualquier JVM los interpreta.";
 choices[46][2] = "Todos los ficheros que contienen, tienen la extensi&oacute;n class.";
 choices[46][3] = "Pueden incluir un subdirectorio de metainformaci&oacute;n llamado META-INF.";
 answers[46] = choices[46][2];
 units[46] = "60";
 comments[46] = "Id Pregunta: 6517. NULL";


//  Id pregunta: 6569 AÃ±o de creación de pregunta: 2010-01-01
 questions[47]= "48)  El certificado X.509 no";
 choices[47]= new Array();
 choices[47][0] = "Fue definido por el antes denominado CCITT (actualmente ITU) en la recomendaci&oacute;n X.509";
 choices[47][1] = "En esta recomendaci&oacute;n se define un modelo seguro para suministrar el servicio de autenticaci&oacute;n a los usuarios del Directorio X.500 basado en criptograf&iacute;a de clave p&uacute;blica";
 choices[47][2] = "La recomendaci&oacute;n X.509 [CCI88] define un modelo de certificado en sintaxis ASN.1";
 choices[47][3] = "Todas las respuestas anteriores son ciertas";
 answers[47] = choices[47][3];
 units[47] = "73";
 comments[47] = "Id Pregunta: 6569. NULL";


//  Id pregunta: 6571 AÃ±o de creación de pregunta: 2010-01-01
 questions[48]= "49)  El campo extensions en un certificado X.509 ";
 choices[48]= new Array();
 choices[48][0] = "Permite a&ntilde;adir nuevos campos al certificado sin modificar su definici&oacute;n ASN.1";
 choices[48][1] = "Presentan Informaci&oacute;n sobre claves certificadas y pol&iacute;ticas";
 choices[48][2] = "Presentan informaci&oacute;n adicional sobre el propietario del certificado y sobre su emisor";
 choices[48][3] = "Todas las respuestas anteriores son ciertas";
 answers[48] = choices[48][3];
 units[48] = "73";
 comments[48] = "Id Pregunta: 6571. NULL";


//  Id pregunta: 7314 AÃ±o de creación de pregunta: 2010-01-01
 questions[49]= "50)  La plataforma de servicios de validaci&oacute;n y firma electr&oacute;nica con la que las Administraciones P&uacute;blicas disponen de los instrumentos necesarios para implementar la autenticaci&oacute;n y firma electr&oacute;nica avanzada se denomina:";
 choices[49]= new Array();
 choices[49][0] = "SVF";
 choices[49][1] = "@Firma";
 choices[49][2] = "ValidaFirma";
 choices[49][3] = "VerificaFirma";
 answers[49] = choices[49][1];
 units[49] = "44";
 comments[49] = "Id Pregunta: 7314. NULL";


//  Id pregunta: 7320 AÃ±o de creación de pregunta: 2010-01-01
 questions[50]= "51)  Cu&aacute;l de las siguientes afirmaciones sobre Visual Studio .NET no es cierta:";
 choices[50]= new Array();
 choices[50][0] = "Es un IDE (Entorno Integrado de Desarrollo) desarrollado por Microsoft";
 choices[50][1] = "Permite la programaci&oacute;n WYSIWYG (What You See Is What You Get)";
 choices[50][2] = "Los programas desarrollados con Visual Studio .NET &uacute;nicamente pueden usar SQL Server para el almacenamiento de datos";
 choices[50][3] = "Las versiones Express Editions se ofrecen gratuitamente";
 answers[50] = choices[50][2];
 units[50] = "59";
 comments[50] = "Id Pregunta: 7320. NULL";


//  Id pregunta: 8353 AÃ±o de creación de pregunta: 2011-01-01
 questions[51]= "52)  Indique cu&aacute;l de las siguientes definiciones se corresponde con Biztalk:";
 choices[51]= new Array();
 choices[51][0] = "Es un servidor que permite gestionar procesos de negocio por medio de adaptadores dise&ntilde;ados al efecto, capacit&aacute;ndolo para operar diferentes tipos de software.";
 choices[51][1] = "Es una libreria de .NET que permite la comunicaci&oacute;n por IRC facilitando la implementaci&oacute;n de chats.";
 choices[51][2] = "Es un servidor web de .NET especialmente adaptado para tecnolog&iacute;as m&oacute;viles";
 choices[51][3] = "Es un componente que pertenece al CLR de .NET y que facilita la ejecuci&oacute;n de la aplicaci&oacute;n.";
 answers[51] = choices[51][0];
 units[51] = "59,115";
 comments[51] = "Id Pregunta: 8353. Examen TIC A2 2010";


//  Id pregunta: 8400 AÃ±o de creación de pregunta: 2011-01-01
 questions[52]= "53)  Respeto a los c&oacute;mputos de plazos, la ley 11/2007, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, dispone que:";
 choices[52]= new Array();
 choices[52][0] = "Se consideran h&aacute;biles los 365 d&iacute;as del a&ntilde;o, debiendo estar operativos los registros 365x24.";
 choices[52][1] = "Cada sede electr&oacute;nica en la que est&eacute; disponible un registro electr&oacute;nico determinar&aacute;, atendiendo al &aacute;mbito territorial en el que ejerece sus competencias el titular de aquella, los d&iacute;as que se considerar&aacute;n inh&aacute;biles";
 choices[52][2] = "Ser&aacute;n h&aacute;biles todos los d&iacute;as, con excepci&oacute;n de las fiestas de la Constituci&oacute;n, Navidad, y A&ntilde;o nuevo. ";
 choices[52][3] = "Ser&aacute;n h&aacute;biles todos los d&iacute;as, excepto aquellos en que en el Registro se hagan labores de mantenimiento inform&aacute;tico que impidan su servicio ";
 answers[52] = choices[52][1];
 units[52] = "43";
 comments[52] = "Id Pregunta: 8400. Examen TIC A2 2010";


//  Id pregunta: 8434 AÃ±o de creación de pregunta: 2011-01-01
 questions[53]= "54)  &iquest;Cu&aacute;l de las siguientes normativas no regula la factura electr&oacute;nica?";
 choices[53]= new Array();
 choices[53][0] = "Orden EHA/962/2007";
 choices[53][1] = "Orden PRE/2971/2007";
 choices[53][2] = "Ley 30/2007";
 choices[53][3] = "Ley 59/2003";
 answers[53] = choices[53][3];
 units[53] = "70";
 comments[53] = "Id Pregunta: 8434. NULL";


//  Id pregunta: 8600 AÃ±o de creación de pregunta: 2011-01-01
 questions[54]= "55)  Con el objetivo de garantizar la calidad en los servicios p&uacute;blicos se ha creado:";
 choices[54]= new Array();
 choices[54][0] = "La Agencia Estatal de Evaluaci&oacute;n de las Pol&iacute;ticas P&uacute;blicas y la Calidad de los Servicios (AEVAL) perteneciente al Ministerio de Presidencia";
 choices[54][1] = "La Direcci&oacute;n General de Aseguramiento de la Calidad e Infraestructuras perteneciente al Ministerio de Industria Turismo y Comercio";
 choices[54][2] = "El Consejo Superior de Aseguramiento de la Calidad e Infraestructuras perteneciente al Ministerio de Presidencia.";
 choices[54][3] = "La Agencia Estatal de Evaluaci&oacute;n de las Pol&iacute;ticas P&uacute;blicas y la Calidad de los Servicios (AEVAL) perteneciente al Ministerio de Pol&iacute;tica Territorial.";
 answers[54] = choices[54][0];
 units[54] = "43";
 comments[54] = "Id Pregunta: 8600. Examen TIC A2 2010 interna";


//  Id pregunta: 8746 AÃ±o de creación de pregunta: 2011-01-01
 questions[55]= "56)  En el contexto de la Ley 11/2007, de Acceso Electr&oacute;nico de los Ciudadanos a los Servicios P&uacute;blicos, un ciudadano es:";
 choices[55]= new Array();
 choices[55][0] = "Es siempre una persona f&iacute;sica o una persona jur&iacute;dica";
 choices[55][1] = "Siempre es una persona f&iacute;sica, aunque sea representando a una persona jur&iacute;dica.";
 choices[55][2] = "Siempre son personas jur&iacute;dicas, y las personas f&iacute;sicas se entienden como entes sin personalidad.";
 choices[55][3] = "Una persona f&iacute;sica, una persona jur&iacute;dica o. incluso, un ente sin personalidad";
 answers[55] = choices[55][3];
 units[55] = "43";
 comments[55] = "Id Pregunta: 8746. Examen TIC A2 2010 interna";


//  Id pregunta: 8855 AÃ±o de creación de pregunta: 2011-01-01
 questions[56]= "57)  &iquest;Qu&eacute; tipo de driver JDBC conecta a la base de datos directamente usando su protocolo nativo?";
 choices[56]= new Array();
 choices[56][0] = "Type 1 JDBC Driver";
 choices[56][1] = "Type 2 JDBC Driver";
 choices[56][2] = "Type 3 JDBC Driver";
 choices[56][3] = "Type 4 JDBC Driver";
 answers[56] = choices[56][3];
 units[56] = "58, 60";
 comments[56] = "Id Pregunta: 8855. Analista Ayto. Madrid 2010";


//  Id pregunta: 8944 AÃ±o de creación de pregunta: 2011-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes no es una dimensi&oacute;n de la seguridad judicial electr&oacute;nica de acuerdo a la ley 18/2011?";
 choices[57]= new Array();
 choices[57][0] = "Conservaci&oacute;n";
 choices[57][1] = "Confidencialidad";
 choices[57][2] = "Trazabilidad";
 choices[57][3] = "Todas las anteriores lo son";
 answers[57] = choices[57][3];
 units[57] = "43";
 comments[57] = "Id Pregunta: 8944. ";


//  Id pregunta: 9035 AÃ±o de creación de pregunta: 2011-01-01
 questions[58]= "59)  En qu&eacute; t&iacute;tulo de la ley 11/2007 se habla sobre los registros electr&oacute;nicos";
 choices[58]= new Array();
 choices[58][0] = "T&iacute;tulo I";
 choices[58][1] = "T&iacute;tulo II";
 choices[58][2] = "T&iacute;tulo III";
 choices[58][3] = "T&iacute;tulo IV";
 answers[58] = choices[58][1];
 units[58] = "43";
 comments[58] = "Id Pregunta: 9035. NULL";


//  Id pregunta: 9040 AÃ±o de creación de pregunta: 2011-01-01
 questions[59]= "60)  &iquest;Cu&aacute;l de los siguientes es un motor para la creaci&oacute;n de servicios Web en Java?";
 choices[59]= new Array();
 choices[59][0] = "Apache Axis2";
 choices[59][1] = "Hibernate";
 choices[59][2] = "Struts";
 choices[59][3] = "TopLink";
 answers[59] = choices[59][0];
 units[59] = "60";
 comments[59] = "Id Pregunta: 9040. NULL";


//  Id pregunta: 9053 AÃ±o de creación de pregunta: 2016-01-01
 questions[60]= "61)  &iquest;Cual de las siguientes NO es un fase de desarrollo web?";
 choices[60]= new Array();
 choices[60][0] = "An&aacute;lisis de requisitos";
 choices[60][1] = "Finalizaci&oacute;n";
 choices[60][2] = "Lanzamiento";
 choices[60][3] = "Desarrollo";
 answers[60] = choices[60][1];
 units[60] = "39";
 comments[60] = "Id Pregunta: 9053. ";


//  Id pregunta: 9057 AÃ±o de creación de pregunta: 2011-01-01
 questions[61]= "62)  &iquest;Cual de las siguientes NO es una herramienta de revisi&oacute;n de la usabilidad ?";
 choices[61]= new Array();
 choices[61][0] = "ACCWarning";
 choices[61][1] = "A-PRompt";
 choices[61][2] = "HiCaption";
 choices[61][3] = "MAGPie";
 answers[61] = choices[61][0];
 units[61] = "39";
 comments[61] = "Id Pregunta: 9057. NULL";


//  Id pregunta: 9172 AÃ±o de creación de pregunta: 2013-01-01
 questions[62]= "63)  La norma que regula las obligaciones de facturaci&oacute;n es:";
 choices[62]= new Array();
 choices[62][0] = "Orden PRE/2971/2007";
 choices[62][1] = "Real Decreto 1496/2003";
 choices[62][2] = "Real Decreto 1619/2012";
 choices[62][3] = "Real Decreto 1783/2012";
 answers[62] = choices[62][2];
 units[62] = "70";
 comments[62] = "Id Pregunta: 9172. ";


//  Id pregunta: 9173 AÃ±o de creación de pregunta: 2013-01-01
 questions[63]= "64)  Respecto a la normativa de facturaci&oacute;n, se&ntilde;ale la respuesta INCORRECTA:";
 choices[63]= new Array();
 choices[63][0] = "El Real Decreto 1619/2012 regula las obligaciones de facturaci&oacute;n desde el 1 de enero de 2014";
 choices[63][1] = "No se exigir&aacute; la obligaci&oacute;n de expedir factura en el caso de determinadas prestaciones de servicios financieros y de seguros, salvo cuando dichas operaciones se entiendan realizadas en el territorio de aplicaci&oacute;n del Impuesto, o en otro Estado miembro de la Uni&oacute;n Europea, y est&eacute;n sujetas y no exentas.";
 choices[63][2] = "Se establece un sistema de facturaci&oacute;n basado en dos tipos de facturas: la factura completa u ordinaria y la factura simplificada, que viene a sustituir a los denominados tiques.";
 choices[63][3] = "Todas son verdaderas";
 answers[63] = choices[63][0];
 units[63] = "70";
 comments[63] = "Id Pregunta: 9173. ";


//  Id pregunta: 9577 AÃ±o de creación de pregunta: 2013-01-01
 questions[64]= "65)  La publicaci&oacute;n del BOE en su sede electr&oacute;nica:";
 choices[64]= new Array();
 choices[64][0] = "No tiene car&aacute;cter de oficial y aut&eacute;ntica, constituyendo lo publicado una mera manifestaci&oacute;n de servicio p&uacute;blico, ya que lo que tiene valor de oficial y aut&eacute;ntica es su edici&oacute;n impresa";
 choices[64][1] = "Tendr&aacute; car&aacute;cter de oficial y aut&eacute;ntica, al igual que la publicaci&oacute;n del resto de diarios oficiales de las CC.AA, a partir del 1 de enero de 2013.";
 choices[64][2] = "Tiene car&aacute;cter de oficial y aut&eacute;ntica, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil y en las restantes normas aplicables.";
 choices[64][3] = "Tiene car&aacute;cter de oficial y aut&eacute;ntica desde el d&iacute;a 1 de enero de 2011, excepto el contenido de la Secci&oacute;n de Anuncios, que se rige por su normativa espec&iacute;fica.";
 answers[64] = choices[64][2];
 units[64] = "43";
 comments[64] = "Id Pregunta: 9577. Examen TIC A1 2011";


//  Id pregunta: 9582 AÃ±o de creación de pregunta: 2013-01-01
 questions[65]= "66)  En el contexto de la firma electr&oacute;nica y su regulaci&oacute;n en Espa&ntilde;a se&ntilde;ale la afirmaci&oacute;n FALSA.";
 choices[65]= new Array();
 choices[65][0] = "Los funcionarios al servicio de las administraciones p&uacute;blicas espa&ntilde;olas pueden firmar en el ejercicio de su cargo utilizando su DNI electr&oacute;nico.";
 choices[65][1] = "Los c&oacute;digos de verificaci&oacute;n segura (CSV) junto con los sellos de &oacute;rgano sirven para dotar de firma electr&oacute;nica reconocida a la actuaci&oacute;n administrativa automatizada.";
 choices[65][2] = "Un dispositivo seguro de creaci&oacute;n de firma debe garantizar que los datos usados para generar la firma pueden producirse s&oacute;lo una vez.";
 choices[65][3] = "Un certificado electr&oacute;nico reconocido ha de incluir la firma electr&oacute;nica avanzada del prestador de servicios de certificaci&oacute;n que lo expide.";
 answers[65] = choices[65][1];
 units[65] = "43, 74";
 comments[65] = "Id Pregunta: 9582. Examen TIC A1 2011";


//  Id pregunta: 9588 AÃ±o de creación de pregunta: 2013-01-01
 questions[66]= "67)  De acuerdo con el Real Decreto 4/2010, por el que se regula el Esquema Nacional de Interoperabilidad, aquella dimensi&oacute;n de la interoperabilidad relativa a que la informaci&oacute;n intercambiada pueda ser interpretable de forma autom&aacute;tica y reutilizable por aplicaciones que no intervinieron en su creaci&oacute;n, es la referente a la:";
 choices[66]= new Array();
 choices[66][0] = "Interoperabilidad, en general.";
 choices[66][1] = "Interoperabilidad organizativa. ";
 choices[66][2] = "Interoperabilidad t&eacute;cnica. ";
 choices[66][3] = "Interoperabilidad sem&aacute;ntica. ";
 answers[66] = choices[66][3];
 units[66] = "43";
 comments[66] = "Id Pregunta: 9588. Examen TIC A2 2011";


//  Id pregunta: 9591 AÃ±o de creación de pregunta: 2013-01-01
 questions[67]= "68)  El Real Decreto 3/2010, en su art&iacute;culo 29, dispone que las gu&iacute;as de seguridad de las tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones para el mejor cumplimiento de lo establecido en el Esquema Nacional de Seguridad las elaborar&aacute; y difundir&aacute;:";
 choices[67]= new Array();
 choices[67][0] = "El Centro Criptol&oacute;gico Nacional.";
 choices[67][1] = "La Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 choices[67][2] = "Cada organismo p&uacute;blico que implante medidas de seguridad de acuerdo con el Esquema Nacional de Seguridad.";
 choices[67][3] = "El Consejo Superior de Administraci&oacute;n Electr&oacute;nica. ";
 answers[67] = choices[67][0];
 units[67] = "43";
 comments[67] = "Id Pregunta: 9591. Examen TIC A2 2011 interna. Serie de gu&iacute;as CCN-STIC 800.";


//  Id pregunta: 9802 AÃ±o de creación de pregunta: 2014-01-01
 questions[68]= "69)  &iquest;Cu&aacute;l es el &aacute;mbito del Registro Electr&oacute;nico Com&uacute;n?";
 choices[68]= new Array();
 choices[68][0] = "Todas las Administraciones P&uacute;blicas.";
 choices[68][1] = "La Administraci&oacute;n General del Estado y la Administraci&oacute;n Auton&oacute;mica. ";
 choices[68][2] = "La Administraci&oacute;n General del Estado y los Organismos P&uacute;blicos adscritos o dependientes de la misma. ";
 choices[68][3] = "La Secretaria de Estado de Administraciones P&uacute;blicas, como responsable de su gesti&oacute;n.";
 answers[68] = choices[68][2];
 units[68] = "44";
 comments[68] = "Id Pregunta: 9802. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9803 AÃ±o de creación de pregunta: 2014-01-01
 questions[69]= "70)  &iquest;Cu&aacute;l de las siguientes medidas de seguridad NO pertenece al grupo &quot;Medidas de protecci&oacute;n [mp]&quot; seg&uacute;n el RD 3/2010 (Esquema Nacional de Seguridad)?";
 choices[69]= new Array();
 choices[69][0] = "Detecci&oacute;n de intrusi&oacute;n.";
 choices[69][1] = "Formaci&oacute;n.";
 choices[69][2] = "Desarrollo.";
 choices[69][3] = "Energ&iacute;a el&eacute;ctrica.";
 answers[69] = choices[69][0];
 units[69] = "43";
 comments[69] = "Id Pregunta: 9803. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9804 AÃ±o de creación de pregunta: 2014-01-01
 questions[70]= "71)  Indique la opci&oacute;n INCORRECTA en relaci&oacute;n con el Esquema Nacional de Seguridad (ENS):";
 choices[70]= new Array();
 choices[70][0] = "Los sistemas de informaci&oacute;n a los que se refiere el ENS ser&aacute;n objeto de una auditor&iacute;a regular ordinaria, al menos cada dos a&ntilde;os, que verifique el cumplimiento de los requerimientos expuestos en el ENS. ";
 choices[70][1] = "Gesti&oacute;n de riesgos, funci&oacute;n diferenciada y reevaluaci&oacute;n peri&oacute;dica son 3 de los principios b&aacute;sicos que deber&aacute;n tenerse en cuenta en las decisiones en materia de seguridad";
 choices[70][2] = "El Instituto Nacional de las Tecnolog&iacute;as de la Informaci&oacute;n (INTECO), en el ejercicio de sus competencias, elaborar&aacute; y difundir&aacute; las correspondientes gu&iacute;as de la seguridad de las tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones. ";
 choices[70][3] = "Si a los 12 meses de la entrada en vigor del ENS hubiera circunstancias que impidan la plena aplicaci&oacute;n de lo exigido en el mismo, se dispondr&aacute; de un plan de adecuaci&oacute;n que marque los plazos de ejecuci&oacute;n, los cuales, en ning&uacute;n caso, ser&aacute;nsuperiores a 48 meses desde la entrada en vigor. ";
 answers[70] = choices[70][2];
 units[70] = "44";
 comments[70] = "Id Pregunta: 9804. NULL";


//  Id pregunta: 9880 AÃ±o de creación de pregunta: 2014-01-01
 questions[71]= "72)  Atendiendo al RD 4/2010 de 8 de enero por el que se regula el Esquema Nacional deInteroperabilidad en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica, la exigencia de que las Administraciones P&uacute;blicas deban usar est&aacute;ndares abiertos y, en su caso, est&aacute;ndares que sean de uso generalizado por los ciudadanos, es un principio de";
 choices[71]= new Array();
 choices[71][0] = "interoperabilidad t&eacute;cnica.";
 choices[71][1] = "interoperabilidad organizativa.";
 choices[71][2] = "gesti&oacute;n de riesgos.";
 choices[71][3] = "auditor&iacute;a de seguridad.";
 answers[71] = choices[71][0];
 units[71] = "43";
 comments[71] = "Id Pregunta: 9880. TIC A1, Examen 2013";


//  Id pregunta: 9893 AÃ±o de creación de pregunta: 2010-01-01
 questions[72]= "73)  En el entorno de las Tecnolog&iacute;as de la Informaci&oacute;n, la Comisi&oacute;n Soto sirvi&oacute; para";
 choices[72]= new Array();
 choices[72][0] = "impulsar la creaci&oacute;n del Consejo Superior de Inform&aacute;tica";
 choices[72][1] = "impulsar el modelo de crecimiento aut&oacute;nomo de cada departamento ministerial en materia de Tecnolog&iacute;as de la Informaci&oacute;n";
 choices[72][2] = "Revisar, en base a la Ley 11/2007, los modelos de organizaci&oacute;n de las Tecnolog&iacute;as de la Informaci&oacute;n creados anteriormente.";
 choices[72][3] = "impulsar el desarrollo de la Sociedad de la Informaci&oacute;n.";
 answers[72] = choices[72][3];
 units[72] = "43";
 comments[72] = "Id Pregunta: 9893. TIC A1, Examen 2013";


//  Id pregunta: 9993 AÃ±o de creación de pregunta: 2014-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l de las siguientes normas no hace referencia a la factura electr&oacute;nica?";
 choices[73]= new Array();
 choices[73][0] = "Ley 11/2007";
 choices[73][1] = "Real Decreto 1619/2012";
 choices[73][2] = "Ley 25/2013";
 choices[73][3] = "Real Decreto Legislativo 3/2011";
 answers[73] = choices[73][0];
 units[73] = "70";
 comments[73] = "Id Pregunta: 9993. NULL";


//  Id pregunta: 10160 AÃ±o de creación de pregunta: 2010-01-01
 questions[74]= "75)  Para el pago de precio p&uacute;blico puede hacerse uso de:";
 choices[74]= new Array();
 choices[74][0] = "La Pasarela de Pagos del MINHAP-AEAT";
 choices[74][1] = "El Servicio de Pago Telem&aacute;tico, de Red.es";
 choices[74][2] = "Los dos anteriores";
 choices[74][3] = "Ninguno de los anteriores";
 answers[74] = choices[74][1];
 units[74] = "44";
 comments[74] = "Id Pregunta: 10160. ";


//  Id pregunta: 10225 AÃ±o de creación de pregunta: 2014-01-01
 questions[75]= "76)  Cual de las siguientes sentencias captura el nombre de la carpeta en la que est&aacute; situado el archivo:";
 choices[75]= new Array();
 choices[75][0] = "String name = File.getParent(&quot;leeme.txt&quot;);";
 choices[75][1] = "String name = (new File(&quot;leeme.txt&quot;)).getParent();";
 choices[75][2] = "String name = (new File(&quot;c:\\leeme.txt&quot;)).getParentName();";
 choices[75][3] = "Directory dir = (new File(&ldquo;leeme.txt&rdquo;)).getParentDir();";
 answers[75] = choices[75][1];
 units[75] = "60";
 comments[75] = "Id Pregunta: 10225. NULL";


//  Id pregunta: 10353 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  &iquest;Cu&aacute;l es el &aacute;mbito de aplicaci&oacute;n del Real Decreto 1494/2007 de accesibilidad a la sociedad de la informaci&oacute;n y medios de comunicaci&oacute;n social?";
 choices[76]= new Array();
 choices[76][0] = "Los portales web de la Administraciones P&uacute;blicas";
 choices[76][1] = "Administraciones P&uacute;blicas, operadores de telecomunicaciones, prestadores de servicios de la sociedad de la informaci&oacute;n, y medios de comunicaci&oacute;n social";
 choices[76][2] = "Administraciones P&uacute;blicas y medios de comunicaci&oacute;n social, ya que los operadores de telecomunicaciones se rigen por lo dispuesto en la Ley General de Telecomunicaciones";
 choices[76][3] = "Es el mismo que se establece en la norma UNE 139803:2012";
 answers[76] = choices[76][1];
 units[76] = "39";
 comments[76] = "Id Pregunta: 10353. Consultar Art. 2 del Real Decreto";


//  Id pregunta: 10355 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  En relaci&oacute;n con el programa ISA (soluciones de interoperabilidad para las administraciones p&uacute;blicas europeas), se&ntilde;ale la respuesta err&oacute;nea:";
 choices[77]= new Array();
 choices[77][0] = "Abarca el per&iacute;odo 2010-2020";
 choices[77][1] = "Actuaciones destacadas dentro del marco del programa ISA son la red transeuropea sTESTA o el apoyo al proyecto STORK";
 choices[77][2] = "Tiene como &aacute;mbito las administraciones p&uacute;blicas europeas, incluidas las administraciones regionales y locales y las instituciones y &oacute;rganos comunitarios";
 choices[77][3] = "Su base legal se recoge en la Decisi&oacute;n 922/2009/CE";
 answers[77] = choices[77][0];
 units[77] = "40";
 comments[77] = "Id Pregunta: 10355. El programa ISA abarca el per&iacute;odo 2010-2015";


//  Id pregunta: 10464 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  &iquest;Qu&eacute; elemento de HTML 5 tiene como finalidad dibujar gr&aacute;ficos 2D on the fly mediante Javascript?";
 choices[78]= new Array();
 choices[78][0] = "&lt;svg&gt;";
 choices[78][1] = "&lt;canvas&gt;";
 choices[78][2] = "&lt;output&gt;";
 choices[78][3] = "&lt;source&gt;";
 answers[78] = choices[78][1];
 units[78] = "69";
 comments[78] = "Id Pregunta: 10464. NULL";


//  Id pregunta: 10466 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  &iquest;Qu&eacute; tecnolog&iacute;as agrupa HTML5?";
 choices[79]= new Array();
 choices[79][0] = "HTML+Javascript";
 choices[79][1] = "HTML+CSS3+Flash";
 choices[79][2] = "HTML+CSS3+Javascript";
 choices[79][3] = "HTML+CSS3";
 answers[79] = choices[79][2];
 units[79] = "69";
 comments[79] = "Id Pregunta: 10466. NULL";


//  Id pregunta: 10576 AÃ±o de creación de pregunta: 2015-01-01
 questions[80]= "81)  Elija la respuesta incorrecta:";
 choices[80]= new Array();
 choices[80][0] = "La utilizaci&oacute;n de infraestructuras y servicios comunes proporciona mayor agilidad en el desarrollo y despliegue de servicios.";
 choices[80][1] = "Las Administraciones P&uacute;blicas pueden utilizar cualquier tecnolog&iacute;a de la informaci&oacute;n en sus relaciones con los ciudadanos.";
 choices[80][2] = "El Comit&eacute; Sectorial de la Administraci&oacute;n Electr&oacute;nica asegura la compatibilidad e interoperabilidad de los sistemas y aplicaciones empleados por las Administraciones P&uacute;blicas.";
 choices[80][3] = "Existe un directorio general de aplicaciones para su reutilizaci&oacute;n en la AGE.";
 answers[80] = choices[80][1];
 units[80] = "44";
 comments[80] = "Id Pregunta: 10576. Art&iacute;culo 41, Ley 11/2007: deben evitar discriminaci&oacute;n.";


//  Id pregunta: 10605 AÃ±o de creación de pregunta: 2015-01-01
 questions[81]= "82)  Para que un organismo utilice la pasarela de pagos de la AEAT:";
 choices[81]= new Array();
 choices[81][0] = "Necesita un certificado de sede electr&oacute;nica.";
 choices[81][1] = "Debe implementar una interfaz REST.";
 choices[81][2] = "Debe poseer un certificado de persona f&iacute;sica, jur&iacute;dica o de componente.";
 choices[81][3] = "La DTIC recomienda que cada organismo implemente su propia pasarela de pagos.";
 answers[81] = choices[81][2];
 units[81] = "70";
 comments[81] = "Id Pregunta: 10605. ";


//  Id pregunta: 10619 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  Se&ntilde;ale cu&aacute;l de estas aplicaciones puede implementarse con el entorno .NET:";
 choices[82]= new Array();
 choices[82][0] = "Aplicaci&oacute;n de escritorio escrita en C++.";
 choices[82][1] = "Sitio web din&aacute;mico.";
 choices[82][2] = "Una plataforma de e-learning.";
 choices[82][3] = "Todas las anteriores.";
 answers[82] = choices[82][3];
 units[82] = "59";
 comments[82] = "Id Pregunta: 10619. ";


//  Id pregunta: 10703 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  En referencia a los metadatos del expediente electr&oacute;nico.";
 choices[83]= new Array();
 choices[83][0] = "No se pueden incluir metadatos complementarios.";
 choices[83][1] = "Se pueden incluir metadatos complementarios.";
 choices[83][2] = "Se pueden incluir metadatos complementarios &uacute;nicamente en caso de intercambio de dichos expedientes.";
 choices[83][3] = "Se pueden incluir metadatos complementarios &uacute;nicamente para facilitar el almacenamiento de los expedientes.";
 answers[83] = choices[83][1];
 units[83] = "43";
 comments[83] = "Id Pregunta: 10703. ";


//  Id pregunta: 10716 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  &iquest;Qu&eacute; aspecto no se define en una pol&iacute;tica de firma seg&uacute;n la NTI de firma electr&oacute;nica?";
 choices[84]= new Array();
 choices[84][0] = "Los procesos de creaci&oacute;n de firmas electr&oacute;nicas.";
 choices[84][1] = "Los procesos de modificaci&oacute;n de firmas electr&oacute;nicas.";
 choices[84][2] = "Los procesos de validaci&oacute;n de firmas electr&oacute;nicas.";
 choices[84][3] = "Los procesos de conservaci&oacute;n de firmas electr&oacute;nicas.";
 answers[84] = choices[84][1];
 units[84] = "43";
 comments[84] = "Id Pregunta: 10716. ";


//  Id pregunta: 10728 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  Seg&uacute;n la NTI de Protocolos de Intermedicaci&oacute;n, &iquest;Cu&aacute;l de la siguiente informaci&oacute;n no debe ser almacenada para la trazabilidad de cada consulta o intercambio?";
 choices[85]= new Array();
 choices[85][0] = "Identificador de la transacci&oacute;n.";
 choices[85][1] = "Contenido del intercambio.";
 choices[85][2] = "Cesionario de la informaci&oacute;n.";
 choices[85][3] = "Fecha y hora de realizaci&oacute;n de la consulta.";
 answers[85] = choices[85][1];
 units[85] = "43";
 comments[85] = "Id Pregunta: 10728. ";


//  Id pregunta: 10731 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  La conexi&oacute;n directa a la Red SARA se proporcionar&aacute; a trav&eacute;s de:";
 choices[86]= new Array();
 choices[86][0] = "Una VPN establecida con cualquiera de los Ministerios.";
 choices[86][1] = "Un &Aacute;rea de Conexi&oacute;n (AC).";
 choices[86][2] = "Un Punto de Presencia situado en el Ministerio de Hacienda y Administraciones P&uacute;blicas.";
 choices[86][3] = "Un punto neutro.";
 answers[86] = choices[86][1];
 units[86] = "43";
 comments[86] = "Id Pregunta: 10731. ";


//  Id pregunta: 10755 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  &iquest;Cu&aacute;l de los siguientes no se incluye en la Estructura Org&aacute;nica definida en la Estrategia de Ciberseguridad Nacional?";
 choices[87]= new Array();
 choices[87][0] = "El Consejo de Seguridad Nacional.";
 choices[87][1] = "El Comit&eacute; Especializado de Ciberseguridad.";
 choices[87][2] = "El Comit&eacute; Especializado de Situaci&oacute;n.";
 choices[87][3] = "El Consejo Ejecutivo de Ciberseguridad.";
 answers[87] = choices[87][3];
 units[87] = "43";
 comments[87] = "Id Pregunta: 10755. ";


//  Id pregunta: 10969 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  RE&Uacute;NETE es el Servicio Com&uacute;n de Reuniones Virtuales de la Red SARA que ofrece herramientas colaborativas a todas las Administraciones P&uacute;blicas. Entre sus funcionalidades NO se encuentra:";
 choices[88]= new Array();
 choices[88][0] = "Correo electr&oacute;nico multidominio.";
 choices[88][1] = "Integraci&oacute;n de salas de videoconferencia tradicional H323/SIP.";
 choices[88][2] = "Soporte on-line para p&aacute;ginas web.";
 choices[88][3] = "Videoconferencia con herramientas de colaboraci&oacute;n.";
 answers[88] = choices[88][0];
 units[88] = "44";
 comments[88] = "Id Pregunta: 10969. TIC A1 AGE 2014";


//  Id pregunta: 10986 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  El 10 de enero de 2013 se public&oacute; una vulnerabilidad de d&iacute;a cero en Java 7 Update 10 y versiones anteriores de Java 7 que permit&iacute;a a un atacante escalar los privilegios de ejecuci&oacute;n de un applet. Se&ntilde;ale la opci&oacute;n INCORRECTA:";
 choices[89]= new Array();
 choices[89][0] = "Las vulnerabilidades de seguridad de Java han llevado a establecer un periodo mensual, los terceros viernes de cada mes, para los Oracle Java SE Critical Patch Updates.";
 choices[89][1] = "Las vulnerabilidades de seguridad de Java han llevado a Oracle a recomendar y facilitar la desactivaci&oacute;n de Java a partir de la versi&oacute;n 7 Update 10.";
 choices[89][2] = "Las vulnerabilidades de seguridad de Java han provocado que Oracle recomiende la desinstalaci&oacute;n de Java 6 de todos los equipos.";
 choices[89][3] = "Las vulnerabilidades de seguridad de Java han provocado que sea obligatorio firmar con un certificado reconocido los applets a partir de Java SE 7u21.";
 answers[89] = choices[89][0];
 units[89] = "60";
 comments[89] = "Id Pregunta: 10986. TIC A1 AGE 2014";


//  Id pregunta: 11060 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  Se&ntilde;ale la respuesta FALSA sobre 3D-Secure";
 choices[90]= new Array();
 choices[90][0] = "Es un protocolo basado en XML ";
 choices[90][1] = "Se utiliza para asegurar el pago con tarjeta en Internet";
 choices[90][2] = "Es susceptible de ataques &quot;man-in-the-middle&quot;";
 choices[90][3] = "Todas son correctas";
 answers[90] = choices[90][3];
 units[90] = "70";
 comments[90] = "Id Pregunta: 11060. ";


//  Id pregunta: 11222 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  La tecnolog&iacute;a LINQ en el Framework .NET:";
 choices[91]= new Array();
 choices[91][0] = "Es el acr&oacute;nimo&nbsp;de Language Integrated Query.";
 choices[91][1] = "Permite realizar consultas a distintas fuentes de datos.";
 choices[91][2] = "No es compatible con ADO.NET Entity Framework.";
 choices[91][3] = "A) y B) son correctas.";
 answers[91] = choices[91][0];
 units[91] = "59";
 comments[91] = "Id Pregunta: 11222. ";


//  Id pregunta: 11253 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Entre los requisitos de la firma electr&oacute;nica avanzada no se encuentra:";
 choices[92]= new Array();
 choices[92][0] = "Que est&eacute; vinculada al firmante de manera &uacute;nica y permita su identificaci&oacute;n.";
 choices[92][1] = "Que haya sido creada utilizando datos de creaci&oacute;n de la firma electr&oacute;nica que el firmante puede utilizar, con un alto nivel de confianza, bajo su control exclusivo.";
 choices[92][2] = "Que haya sido creada utilizando datos de creaci&oacute;n de la firma electr&oacute;nica que el firmante puede utilizar, siempre bajo su control exclusivo.";
 choices[92][3] = "Que est&eacute; vinculada con los datos firmados de modo que detecte cualquier modificaci&oacute;n ulterior.";
 answers[92] = choices[92][2];
 units[92] = "73";
 comments[92] = "Id Pregunta: 11253. ";


//  Id pregunta: 11259 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Los certificados cualificados de firma electr&oacute;nica contendr&aacute;n:";
 choices[93]= new Array();
 choices[93][0] = "Al menos el nombre del firmante o un seud&oacute;nimo; si se usara un seud&oacute;nimo, se indicar&aacute; claramente.";
 choices[93][1] = "Los datos relativos al inicio y final del per&iacute;odo de validez del certificado.";
 choices[93][2] = "La localizaci&oacute;n de los servicios que pueden utilizarse para consultar el estado de validez del certificado cualificado.";
 choices[93][3] = "Todas son verdaderas.";
 answers[93] = choices[93][3];
 units[93] = "73";
 comments[93] = "Id Pregunta: 11259. ";


//  Id pregunta: 11485 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  De entre los siguientes sujetos, &iquest;qui&eacute;n est&aacute; obligado a relacionarse con las Administraciones P&uacute;blicas a trav&eacute;s de medios electr&oacute;nicos para la realizaci&oacute;n de cualquier tr&aacute;mite de un procedimiento administrativo seg&uacute;n el art&iacute;culo 14 de la Ley de Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas 39/2015?";
 choices[94]= new Array();
 choices[94][0] = "Personas jur&iacute;dicas.";
 choices[94][1] = "Entidades sin personalidad jur&iacute;dica.";
 choices[94][2] = "Notarios y registradores de la propiedad y mercantiles.";
 choices[94][3] = "Todos los anteriores.";
 answers[94] = choices[94][3];
 units[94] = "43";
 comments[94] = "Id Pregunta: 11485. NULL";


//  Id pregunta: 11490 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Cada cu&aacute;nto tiempo debe de revisarse el cat&aacute;logo de est&aacute;ndares?";
 choices[95]= new Array();
 choices[95][0] = "2 veces al a&ntilde;o";
 choices[95][1] = "Cada a&ntilde;o";
 choices[95][2] = "Cada 2 a&ntilde;os";
 choices[95][3] = "Cada 3 a&ntilde;os";
 answers[95] = choices[95][1];
 units[95] = "43";
 comments[95] = "Id Pregunta: 11490. NULL";


//  Id pregunta: 11499 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Seg&uacute;n el Esquema Nacional de Seguridad, las Instrucciones T&eacute;cnicas de Seguridad ";
 choices[96]= new Array();
 choices[96][0] = "Son aspectos que pueden ser aplicados por parte de las Administraciones p&uacute;blicas";
 choices[96][1] = "Son aspectos que obligatoriamente deben ser aplicados por parte de las Administraciones P&uacute;blicas ";
 choices[96][2] = "Algunas Instrucciones de Seguridad son de aplicaci&oacute;n preceptiva y otras de aplicaci&oacute;n facultativa.";
 choices[96][3] = "Ninguna de las anteriores.";
 answers[96] = choices[96][1];
 units[96] = "43";
 comments[96] = "Id Pregunta: 11499. Instrucci&oacute;n t&eacute;cnica de seguridad introducido por la disp. Adicional 4&ordf; RD 951/2015 que modifica el ENS.";


//  Id pregunta: 11501 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Seg&uacute;n el Esquema Nacional de Seguridad, la tarea de elaboraci&oacute;n de un Perfil General del Estado de la Seguridad en las Administraciones p&uacute;blicas es competencia de:";
 choices[97]= new Array();
 choices[97][0] = "Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica";
 choices[97][1] = "Centro Criptol&oacute;gico Nacional";
 choices[97][2] = "INCIBE";
 choices[97][3] = "Consejo de Ministros";
 answers[97] = choices[97][0];
 units[97] = "43";
 comments[97] = "Id Pregunta: 11501. RD 951/2015 que modifica el art&iacute;culo 35 del ENS.";


//  Id pregunta: 11626 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Seg&uacute;n la Ley 25/2013:";
 choices[98]= new Array();
 choices[98][0] = "Las facturas electr&oacute;nicas que se remitan a las Administraciones P&uacute;blicas deber&aacute;n tener un formato estructurado y estar firmadas con firma electr&oacute;nica avanzada basada en un certificado reconocido.";
 choices[98][1] = "Las Entidades Locales podr&aacute;n adherirse a la utilizaci&oacute;n del Punto general de entrada de facturas electr&oacute;nicas que proporcione su Diputaci&oacute;n, Comunidad Aut&oacute;noma o el Estado.";
 choices[98][2] = "El Punto general de entrada de facturas electr&oacute;nicas proporcionar&aacute; un servicio autom&aacute;tico de puesta a disposici&oacute;n o de remisi&oacute;n electr&oacute;nica de las mismas a las oficinas contables competentes para su registro.";
 choices[98][3] = "Todas las anteriores son correctas";
 answers[98] = choices[98][3];
 units[98] = "70";
 comments[98] = "Id Pregunta: 11626. ";


//  Id pregunta: 11788 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Seg&uacute;n la gu&iacute;a CCN-STIC-827 Gesti&oacute;n y uso de dispositivos m&oacute;viles:";
 choices[99]= new Array();
 choices[99][0] = "La gesti&oacute;n de dispositivos m&oacute;viles puede realizarse mediante el env&iacute;o de mensajes SMS reconocibles por el software propietario de la marca instalado en el dispositivo o el Sistema Operativo.";
 choices[99][1] = "La gesti&oacute;n de dispositivos m&oacute;viles puede realizarse aplicando Mobile Device Management (MDM) con un producto de terceros.";
 choices[99][2] = "Mobile Application Management (MAM) se dirige a gestionar una o varias aplicaciones espec&iacute;ficas dentro de cada dispositivo m&oacute;vil, en vez de gestionar la totalidad del dispositivo.";
 choices[99][3] = "Todas las anteriores son correctas.";
 answers[99] = choices[99][3];
 units[99] = "43";
 comments[99] = "Id Pregunta: 11788. ";


