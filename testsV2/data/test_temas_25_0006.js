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

//  Id pregunta: 41 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de las siguientes respuestas sobre el sistema operativo Unix es falsa?:";
 choices[0]= new Array();
 choices[0][0] = "Fue escrito en los laboratorios Bell de ATT por Ken Thompson en 1969";
 choices[0][1] = "Ultrix es una versi&oacute;n modificada del Unix comercializada por un determinado fabricante de sistemas inform&aacute;ticos ";
 choices[0][2] = "Es el sistema operativo con mayor cantidad de software ofim&aacute;tico desarrollado para &eacute;l";
 choices[0][3] = "La Universidad de Berkeley adapt&oacute; una versi&oacute;n ampliamente utilizada en los primeros a&ntilde;os en los ambientes universitarios";
 answers[0] = choices[0][2];
 units[0] = "40";
 comments[0] = "Id Pregunta: 41. ";


//  Id pregunta: 208 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  En general la portabilidad de aplicaciones no exige:";
 choices[1]= new Array();
 choices[1][0] = "Utilizaci&oacute;n de lenguajes de programaci&oacute;n estandarizados";
 choices[1][1] = "Limitaci&oacute;n de las llamadas al S.O. desde el marco de una API estandarizada";
 choices[1][2] = "Limitaci&oacute;n de la interacci&oacute;n directa entre los programas y los componentes f&iacute;sicos";
 choices[1][3] = "Utilizaci&oacute;n de microprocesadores de similares caracter&iacute;sticas";
 answers[1] = choices[1][3];
 units[1] = "40";
 comments[1] = "Id Pregunta: 208. ";


//  Id pregunta: 266 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  Indicar cu&aacute;l de los siguientes no es uno de los objetivos de la Decisi&oacute;n 87/95/CEE:";
 choices[2]= new Array();
 choices[2][0] = "Contribuir a la integraci&oacute;n del mercado interior de la Comunidad en el sector de las tecnolog&iacute;as de la informaci&oacute;n y de las telecomunicaciones";
 choices[2][1] = "Facilitar los intercambios de informaci&oacute;n en toda la Comunidad";
 choices[2][2] = "Garantizar que se tomen en cuenta las necesidades de los usuarios";
 choices[2][3] = "Todos los anteriores son objetivos de la Decisi&oacute;n 87/95/CEE";
 answers[2] = choices[2][3];
 units[2] = "40";
 comments[2] = "Id Pregunta: 266. ";


//  Id pregunta: 359 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  Las normas b&aacute;sicas para constituir un interfaz com&uacute;n de todos los sistemas Unix con las aplicaciones se denominan:";
 choices[3]= new Array();
 choices[3][0] = "OSI";
 choices[3][1] = "ISO";
 choices[3][2] = "POSIX";
 choices[3][3] = "XENIX";
 answers[3] = choices[3][2];
 units[3] = "40";
 comments[3] = "Id Pregunta: 359. ";


//  Id pregunta: 423 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  Seg&uacute;n el Consejo Superior de Administraci&oacute;n Electr&oacute;nica, &iquest;cu&aacute;les son las principales fuentes de normas de sistemas abiertos que se deben aplicar?:";
 choices[4]= new Array();
 choices[4][0] = "ISO, POSIX y est&aacute;ndares de facto";
 choices[4][1] = "ISO, X/OPEN (gu&iacute;as XPG) y est&aacute;ndares de facto";
 choices[4][2] = "ISO, X/OPEN (gu&iacute;as XPG) y EPHOS";
 choices[4][3] = "ISO, POSIX y X/OPEN (gu&iacute;as XPG)";
 answers[4] = choices[4][2];
 units[4] = "40";
 comments[4] = "Id Pregunta: 423. ";


//  Id pregunta: 433 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  Seg&uacute;n la ISO se entiende como Sistema abierto:";
 choices[5]= new Array();
 choices[5][0] = "Un sistema inform&aacute;tico conectado de alguna manera con otros sistemas";
 choices[5][1] = "Un sistema inform&aacute;tico capaz de dialogar con el resto de su entorno seg&uacute;n las normas definidas por su fabricante";
 choices[5][2] = "Un sistema inform&aacute;tico capaz de interconectarse con otros de acuerdo con unas normas establecidas";
 choices[5][3] = "Un sistema al cual se pueden incorporar sucesivos m&oacute;dulos de ampliaci&oacute;n sin que su estructura se vea afectada";
 answers[5] = choices[5][2];
 units[5] = "40";
 comments[5] = "Id Pregunta: 433. ";


//  Id pregunta: 642 AÃ±o de creación de pregunta: 2006-01-01
 questions[6]= "7)  Cu&aacute;l de las siguientes afirmaciones sobre sistemas abiertos es incorrecta:";
 choices[6]= new Array();
 choices[6][0] = "El modelo b&aacute;sico de referencia para la Interconexi&oacute;n de Sistemas Abiertos de ISO consiste en la arquitectura OSI, que se basa en las especificaciones de IEEE.";
 choices[6][1] = "La instituci&oacute;n p&uacute;blica IEEE genera las normas m&aacute;s avanzados dentro del campo de estandarizaci&oacute;n de redes locales.";
 choices[6][2] = "El programa IDABC tiene como uno de sus fines promover la colaboraci&oacute;n entre las administraciones p&uacute;blicas de los distintos pa&iacute;ses europeos.";
 choices[6][3] = "NIST fija los est&aacute;ndares federales de tratamiento de la informaci&oacute;n que las agencias gubernamentales deben seguir en la contrataci&oacute;n de software y hardware.";
 answers[6] = choices[6][1];
 units[6] = "40";
 comments[6] = "Id Pregunta: 642. ";


//  Id pregunta: 680 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes operaciones se realiza a trav&eacute;s de servicios de transferencia electr&oacute;nica de fondos?:";
 choices[7]= new Array();
 choices[7][0] = "Autorizaci&oacute;n y control de transacciones con pago por tarjeta de cr&eacute;dito o d&eacute;bito";
 choices[7][1] = "Consultas de estado de cuenta";
 choices[7][2] = "Consulta o acceso a bancos de datos";
 choices[7][3] = "Todas las anteriores";
 answers[7] = choices[7][3];
 units[7] = "70";
 comments[7] = "Id Pregunta: 680. hay una errata en lugar de servidos ser&iacute;a servicios.";


//  Id pregunta: 744 AÃ±o de creación de pregunta: 2004-01-01
 questions[8]= "9)  Las aplicaciones Java son comprobadas:";
 choices[8]= new Array();
 choices[8][0] = "en tiempo de compilaci&oacute;n";
 choices[8][1] = "en tiempo de ejecuci&oacute;n";
 choices[8][2] = "en tiempo de compilaci&oacute;n y en tiempo de ejecuci&oacute;n";
 choices[8][3] = "en tiempo de compilaci&oacute;n siempre y en tiempo de ejecuci&oacute;n s&oacute;lo si se trata de un programa que no requiera ejecuci&oacute;n en tiempo real";
 answers[8] = choices[8][2];
 units[8] = "60";
 comments[8] = "Id Pregunta: 744. Similar a examen TIC SS A 2003";


//  Id pregunta: 760 AÃ±o de creación de pregunta: 2004-01-01
 questions[9]= "10)  En tecnolog&iacute;a microsoft, para trabajar con bases de datos,utilizaremos";
 choices[9]= new Array();
 choices[9][0] = "ODBC";
 choices[9][1] = "ADO";
 choices[9][2] = "OLE DB";
 choices[9][3] = "Cualquiera de los anteriores";
 answers[9] = choices[9][3];
 units[9] = "59";
 comments[9] = "Id Pregunta: 760. ";


//  Id pregunta: 768 AÃ±o de creación de pregunta: 2009-01-01
 questions[10]= "11)  En los servicios de directorio";
 choices[10]= new Array();
 choices[10][0] = "varias entradas pueden compartir un DN";
 choices[10][1] = "las operaciones de actualizaci&oacute;n de LDAP no son at&oacute;micas";
 choices[10][2] = "LDAP utiliza habitualmente la pila de protocolos TCP / IP";
 choices[10][3] = "LDAP no se describe en t&eacute;rminos de ASN.1";
 answers[10] = choices[10][2];
 units[10] = "73";
 comments[10] = "Id Pregunta: 768. RFC 4512 y RFC 4514 ";


//  Id pregunta: 855 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Cu&aacute;l de las siguientes proposiciones es falsa respecto de WML?:";
 choices[11]= new Array();
 choices[11][0] = "El significado de las siglas WML es Wireless Mask Language";
 choices[11][1] = "El lenguaje WML est&aacute; basado en el est&aacute;ndar XML";
 choices[11][2] = "La DTD puede estar en la red o puede almacenarse localmente";
 choices[11][3] = "El lenguaje WML no s&oacute;lo permite texto sino que tambi&eacute;n permite im&aacute;genes";
 answers[11] = choices[11][0];
 units[11] = "69";
 comments[11] = "Id Pregunta: 855. NULL";


//  Id pregunta: 1101 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  En Java, cuando un programa deja de utilizar un objeto:";
 choices[12]= new Array();
 choices[12][0] = "El &quot;garbage collector&quot; lo elimina inmediatamente de la memoria";
 choices[12][1] = "Es necesario codificar la destrucci&oacute;n del objeto";
 choices[12][2] = "El objeto se destruye a s&iacute; mismo";
 choices[12][3] = "Ninguna de las anteriores";
 answers[12] = choices[12][3];
 units[12] = "60";
 comments[12] = "Id Pregunta: 1101. JCED - Preparatic XVII. El obj puede eliminarse cuando no hay referencias a &eacute;l.";


//  Id pregunta: 1199 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Java es un lenguaje de programaci&oacute;n que surgi&oacute; tras realizar pruebas fallidas para dise&ntilde;ar un sistema de programaci&oacute;n de electrodom&eacute;sticos. &iquest;Qu&eacute; empresa cre&oacute; este lenguaje?:";
 choices[13]= new Array();
 choices[13][0] = "Siemens";
 choices[13][1] = "Sun Microsystems";
 choices[13][2] = "General Electric";
 choices[13][3] = "IBM";
 answers[13] = choices[13][1];
 units[13] = "60";
 comments[13] = "Id Pregunta: 1199. NULL";


//  Id pregunta: 1361 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  Si comparamos SSL y SET:";
 choices[14]= new Array();
 choices[14][0] = "SSL es un nivel de transporte (uso gen&eacute;rico) mientras que SET es una aplicaci&oacute;n (uso espec&iacute;fico)";
 choices[14][1] = "gozan actualmente de aproximadamente el mismo grado de implantaci&oacute;n en el mercado";
 choices[14][2] = "los datos de una aplicaci&oacute;n SET no pueden circular sobre canales SSL al ser incompatibles";
 choices[14][3] = "SET usa certificados mientras que SSL no los utiliza";
 answers[14] = choices[14][0];
 units[14] = "70";
 comments[14] = "Id Pregunta: 1361. NULL";


//  Id pregunta: 1506 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  Los servicios que ofrece  el protocolo SET (Secure Electronico Transaction) son:";
 choices[15]= new Array();
 choices[15][0] = "Autenticaci&oacute;n, disponibilidad, integridad y gesti&oacute;n de pago";
 choices[15][1] = "Autenticaci&oacute;n, confidencialidad, integridad y gesti&oacute;n de pago";
 choices[15][2] = "Disponibilidad, confidencialidad, autenticaci&oacute;n y gesti&oacute;n de pago";
 choices[15][3] = "Autenticaci&oacute;n, integridad, disponibilidad y confidencialidad";
 answers[15] = choices[15][1];
 units[15] = "70";
 comments[15] = "Id Pregunta: 1506. NULL";


//  Id pregunta: 1566 AÃ±o de creación de pregunta: 2003-01-01
 questions[16]= "17)  &iquest;Cu&aacute;l no es una caracter&iacute;stica de la Huella Digital?";
 choices[16]= new Array();
 choices[16][0] = "Dos mensajes iguales producen la misma huella digital";
 choices[16][1] = "Conocido un mensaje M1 y su resumen R, ser&aacute; computacionalmente imposible encontrar otro mensaje M2 cuyo resumen sea tambi&eacute;n R";
 choices[16][2] = " Dos mensajes parecidos producen huellas digitales diferentes";
 choices[16][3] = " La funci&oacute;n hash es reversible";
 answers[16] = choices[16][3];
 units[16] = "73";
 comments[16] = "Id Pregunta: 1566. ";


//  Id pregunta: 1592 AÃ±o de creación de pregunta: 2003-01-01
 questions[17]= "18)  En los lenguajes de marca, HTML y XML, las etiquetas finales se representan con la siguiente simbolog&iacute;a, donde TITLE es el texto que indica la etiqueta";
 choices[17]= new Array();
 choices[17][0] = "&lt;/TITLE&gt;";
 choices[17][1] = "&lt;TITLE&gt;";
 choices[17][2] = "/&lt;TITLE&gt;";
 choices[17][3] = "/TITLE";
 answers[17] = choices[17][0];
 units[17] = "69";
 comments[17] = "Id Pregunta: 1592. NULL";


//  Id pregunta: 1679 AÃ±o de creación de pregunta: 2004-01-01
 questions[18]= "19)  &iquest;Cu&aacute;l de las siguientes NO es una caracter&iacute;stica de un archivo JAR?";
 choices[18]= new Array();
 choices[18][0] = "Fichero que re&uacute;ne clases, im&aacute;genes, sonidos y otros ficheros necesarios para la ejecuci&oacute;n";
 choices[18][1] = "Es dependiente de la plataforma";
 choices[18][2] = "Empaqueta ficheros y los comprime con el algoritmo LZW";
 choices[18][3] = "JAR es el acr&oacute;nimo de Java ARchive";
 answers[18] = choices[18][1];
 units[18] = "60";
 comments[18] = "Id Pregunta: 1679. JCED - Preparatic XVII";


//  Id pregunta: 1763 AÃ±o de creación de pregunta: 2006-01-01
 questions[19]= "20)  El AWT de Java es";
 choices[19]= new Array();
 choices[19][0] = "Una interfaz gr&aacute;fica de usuario (GUI) plenamente independiente del SO";
 choices[19][1] = "Driver para conectarse a una base de datos";
 choices[19][2] = "Interfaz gr&aacute;fica pesada y dependiente del SO";
 choices[19][3] = "Paquete de desarrollo Java";
 answers[19] = choices[19][2];
 units[19] = "60";
 comments[19] = "Id Pregunta: 1763. NULL";


//  Id pregunta: 1940 AÃ±o de creación de pregunta: 2006-01-01
 questions[20]= "21)  En referencia al lenguaje XML, &iquest;cu&aacute;l de las siguientes opciones es la correcta?";
 choices[20]= new Array();
 choices[20][0] = "Las hojas de estilo CSS no pueden ser utilizadas con HTML";
 choices[20][1] = "XSL puede usarse para transformar datos XML a documentos HTML/CSS en un servidor Web";
 choices[20][2] = "CSS puede ejecutar cualquier l&oacute;gica basada en los datos";
 choices[20][3] = "CSS y XSL no pueden usarse en paralelo";
 answers[20] = choices[20][1];
 units[20] = "69";
 comments[20] = "Id Pregunta: 1940. NULL";


//  Id pregunta: 1945 AÃ±o de creación de pregunta: 2006-01-01
 questions[21]= "22)  Hay dos metalenguajes con los que definir los lenguajes que podemos obtener a partir de XML, &iquest;Cu&aacute;les son?";
 choices[21]= new Array();
 choices[21][0] = "DTD y XML Schema";
 choices[21][1] = "DTL y HTML";
 choices[21][2] = "HTML y API";
 choices[21][3] = "DTD y SGML";
 answers[21] = choices[21][0];
 units[21] = "69";
 comments[21] = "Id Pregunta: 1945. NULL";


//  Id pregunta: 4310 AÃ±o de creación de pregunta: 2007-01-01
 questions[22]= "23)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre la arquitectura .Net no es correcta?:";
 choices[22]= new Array();
 choices[22][0] = "Las aplicaciones .Net s&oacute;lo pueden ejecutarse en los sistemas operativos Windows.";
 choices[22][1] = ".NET soporta la creaci&oacute;n de Servicios Web XML independientes de la plataforma, a trav&eacute;s de SOAP.";
 choices[22][2] = "El proceso de compilaci&oacute;n en .Net produce un fichero ejecutable al que se denomina portable executable (PE).";
 choices[22][3] = "Al c&oacute;digo escrito para ejecutarse en la plataforma .NET se le llama c&oacute;digo gestionado.";
 answers[22] = choices[22][0];
 units[22] = "59";
 comments[22] = "Id Pregunta: 4310. JCED - Preparatic XVII";


//  Id pregunta: 4347 AÃ±o de creación de pregunta: 2007-01-01
 questions[23]= "24)  De entre los siguientes, indique cu&aacute;l no es un sistema criptogr&aacute;fico de clave sim&eacute;trica:";
 choices[23]= new Array();
 choices[23][0] = "DES";
 choices[23][1] = "Triple DES.";
 choices[23][2] = "RSA";
 choices[23][3] = "IDEA";
 answers[23] = choices[23][2];
 units[23] = "73";
 comments[23] = "Id Pregunta: 4347. ";


//  Id pregunta: 4515 AÃ±o de creación de pregunta: 2007-01-01
 questions[24]= "25)  El tipo FLOAT definido por la clase Types de JDBC corresponde al tipo JAVA:";
 choices[24]= new Array();
 choices[24][0] = "double";
 choices[24][1] = "int";
 choices[24][2] = "byte[]";
 choices[24][3] = "Ninguna de las anteriores";
 answers[24] = choices[24][0];
 units[24] = "60";
 comments[24] = "Id Pregunta: 4515. JCED - Preparatic XVII";


//  Id pregunta: 4571 AÃ±o de creación de pregunta: 2007-01-01
 questions[25]= "26)  En HTML podemos referenciar una marca dentro de un documento con la directiva &lt;A&gt;, indicando el nombre de documento y el nombre de la marca, y separando ambos nombres con el car&aacute;cter:";
 choices[25]= new Array();
 choices[25][0] = "@";
 choices[25][1] = "$";
 choices[25][2] = "&amp;";
 choices[25][3] = "#";
 answers[25] = choices[25][3];
 units[25] = "69";
 comments[25] = "Id Pregunta: 4571. NULL";


//  Id pregunta: 4624 AÃ±o de creación de pregunta: 2007-01-01
 questions[26]= "27)  &iquest;En que lenguaje esta basado XML? ";
 choices[26]= new Array();
 choices[26][0] = "HTML";
 choices[26][1] = "XSL";
 choices[26][2] = "SGML";
 choices[26][3] = "XTML";
 answers[26] = choices[26][2];
 units[26] = "69";
 comments[26] = "Id Pregunta: 4624. ";


//  Id pregunta: 4701 AÃ±o de creación de pregunta: 2007-01-01
 questions[27]= "28)  &iquest;C&oacute;mo se puede describir el formato de los datos en XML?";
 choices[27]= new Array();
 choices[27][0] = "Usando XSL";
 choices[27][1] = "Usando un DTD";
 choices[27][2] = "Usando un Nodo de Descripci&oacute;n (Description Node)";
 choices[27][3] = "Usando XSLT";
 answers[27] = choices[27][1];
 units[27] = "69";
 comments[27] = "Id Pregunta: 4701. Examen 2006 JCYL";


//  Id pregunta: 4722 AÃ±o de creación de pregunta: 2007-01-01
 questions[28]= "29)  El uso de Sistemas Abiertos permite una serie de ventajas, indique cual de ellas no lo es.";
 choices[28]= new Array();
 choices[28][0] = "Mejorar, en general, la relaci&oacute;n precio/rendimiento.";
 choices[28][1] = "Garantiza la libertad de elecci&oacute;n.";
 choices[28][2] = "Facilita la gesti&oacute;n del sistema frente a los complejos sistemas propietarios";
 choices[28][3] = "Protege la inversi&oacute;n realizada en el equipo f&iacute;sico";
 answers[28] = choices[28][2];
 units[28] = "40";
 comments[28] = "Id Pregunta: 4722. Examen 2006 JCYL";


//  Id pregunta: 4756 AÃ±o de creación de pregunta: 2007-01-01
 questions[29]= "30)  &iquest;Cu&aacute;l de las siguientes no es una directriz de Accesibilidad para el Contenido Web (WCAG 1.0) del W3C?";
 choices[29]= new Array();
 choices[29][0] = "Asegure el control del usuario de los cambios de contenido que dependen del tiempo";
 choices[29][1] = "Utilice soluciones provisionales";
 choices[29][2] = "Aseg&uacute;rese de que los documentos son claros y simples";
 choices[29][3] = "Todas lo son";
 answers[29] = choices[29][3];
 units[29] = "39";
 comments[29] = "Id Pregunta: 4756. ";


//  Id pregunta: 4789 AÃ±o de creación de pregunta: 2007-01-01
 questions[30]= "31)  &iquest;Qu&eacute; principio de los que se indican a continuaci&oacute;n NO est&aacute; recogido en el Marco Europeo de Interoperabilidad?";
 choices[30]= new Array();
 choices[30][0] = "Multiling&uuml;ismo";
 choices[30][1] = "Subsidiariedad";
 choices[30][2] = "Eficiencia";
 choices[30][3] = "Accesibilidad";
 answers[30] = choices[30][2];
 units[30] = "40";
 comments[30] = "Id Pregunta: 4789. ";


//  Id pregunta: 4830 AÃ±o de creación de pregunta: 2007-01-01
 questions[31]= "32)  En relaci&oacute;n a los lenguajes XML (eXtensible Markup Language) y RDF (Resource Description Framework), &iquest;cu&aacute;l delas siguientes afirmaciones es cierta?";
 choices[31]= new Array();
 choices[31][0] = "XML Schema proporciona soporte para la interoperabilidad sem&aacute;ntica";
 choices[31][1] = "RDF utiliza XML como sintaxis com&uacute;n para el intercambio de metadatos";
 choices[31][2] = "RDF est&aacute; compuesto &uacute;nicamente de propiedades y enunciados";
 choices[31][3] = "XML Schema no tiene tipos predefinidos";
 answers[31] = choices[31][1];
 units[31] = "69";
 comments[31] = "Id Pregunta: 4830. NULL";


//  Id pregunta: 4918 AÃ±o de creación de pregunta: 2003-01-01
 questions[32]= "33)  &iquest;Qu&eacute; afirmaci&oacute;n es incorrecta?:";
 choices[32]= new Array();
 choices[32][0] = "WSDL es un documento XML.";
 choices[32][1] = "XML es un est&aacute;ndar W3C.";
 choices[32][2] = "SOAP requiere de HTTP o SMTP como protocolos de transporte.";
 choices[32][3] = "Las PDAs pueden usar Servicios Web.";
 answers[32] = choices[32][2];
 units[32] = "69";
 comments[32] = "Id Pregunta: 4918. Examen TIC B 2007";


//  Id pregunta: 5721 AÃ±o de creación de pregunta: 2009-01-01
 questions[33]= "34)  El XSLT transforma:";
 choices[33]= new Array();
 choices[33][0] = "S&oacute;lo de XML a XML";
 choices[33][1] = "De XML a otro documento";
 choices[33][2] = "S&oacute;lo de XML a HTML";
 choices[33][3] = "De un documento a XML";
 answers[33] = choices[33][1];
 units[33] = "69";
 comments[33] = "Id Pregunta: 5721. MAP 2008 A1";


//  Id pregunta: 5778 AÃ±o de creación de pregunta: 2009-01-01
 questions[34]= "35)  En referencia a la arquitectura .NET, seleccione cu&aacute;l de las expresiones siguientes es FALSA:";
 choices[34]= new Array();
 choices[34][0] = "Las versiones 1.0, 1.1 y 2.0. de .NET Framework son totalmente independientes unas de otras, por lo que se pueden instalar en cualquier orden";
 choices[34][1] = "Cuando las versiones 1.0, 1.1 y 2.0 est&aacute;n en el mismo equipo, comparten un &uacute;nico Common Language Runtime";
 choices[34][2] = ".NET Framework 4.5 es la &uacute;ltima versi&oacute;n disponible del framework .NET";
 choices[34][3] = "Common Language Specification (CLS) es un conjunto de reglas pensado para promover la interoperabilidad entre los lenguajes";
 answers[34] = choices[34][1];
 units[34] = "59";
 comments[34] = "Id Pregunta: 5778. MAP 2008 A1";


//  Id pregunta: 5898 AÃ±o de creación de pregunta: 2009-01-01
 questions[35]= "36)  &iquest;Cu&aacute;l de las siguientes corresponde a una tecnolog&iacute;a Java para acceder a bases de datos relacionales?";
 choices[35]= new Array();
 choices[35][0] = "JRDB";
 choices[35][1] = "JPA";
 choices[35][2] = "ORM";
 choices[35][3] = "Ninguna de las anteriores";
 answers[35] = choices[35][1];
 units[35] = "60";
 comments[35] = "Id Pregunta: 5898. NULL";


//  Id pregunta: 5925 AÃ±o de creación de pregunta: 2009-01-01
 questions[36]= "37)  &iquest;Cu&aacute;l de las siguientes NO es una pauta WAI de accesibilidad para diferentes componentes?";
 choices[36]= new Array();
 choices[36][0] = "ATAG";
 choices[36][1] = "UAAG";
 choices[36][2] = "WCED";
 choices[36][3] = "WCAG";
 answers[36] = choices[36][2];
 units[36] = "39";
 comments[36] = "Id Pregunta: 5925. MAP 2008 A1";


//  Id pregunta: 5954 AÃ±o de creación de pregunta: 2009-01-01
 questions[37]= "38)  Respecto al uso de Lenguas Oficiales, la Ley 11/2007 de AECSP, especifica lo siguiente:";
 choices[37]= new Array();
 choices[37][0] = "Las sedes electr&oacute;nicas cuyo titular sit&uacute;e su domicilio social sobre territorios con r&eacute;gimen de cooficialidad ling&uuml;&iacute;stica posibilitar&aacute;n el acceso a sus contenidos y servicios en las lenguas correspondientes";
 choices[37][1] = "Se podr&aacute; permitir el uso de las lenguas oficiales del Estado en las relaciones por medios electr&oacute;nicos de los ciudadanos con las Administraciones P&uacute;blicas, en los t&eacute;rminos previstos en la Ley 30/1992, de R&eacute;gimen Jur&iacute;dico de las Administraciones P&uacute;blicas y del Procedimiento Administrativo Com&uacute;n y en la normativa que en cada caso resulte de aplicaci&oacute;n.";
 choices[37][2] = "Los sistemas y aplicaciones utilizados en la gesti&oacute;n electr&oacute;nica de los procedimientos se adaptar&aacute;n a lo dispuesto en cuanto al uso de lenguas cooficiales en el art&iacute;culo 36 de la Ley 30/1992, de R&eacute;gimen Jur&iacute;dico de las Administraciones P&uacute;blicas y el Procedimiento Administrativo Com&uacute;n.";
 choices[37][3] = "Cada Administraci&oacute;n P&uacute;blica afectada determinar&aacute; el calendario para el cumplimiento progresivo de lo previsto en la presente disposici&oacute;n, debiendo garantizar su cumplimiento total a partir del 31 de diciembre de 2009";
 answers[37] = choices[37][2];
 units[37] = "43";
 comments[37] = "Id Pregunta: 5954. Disposici&oacute;n Adicional sexta. ";


//  Id pregunta: 5957 AÃ±o de creación de pregunta: 2009-01-01
 questions[38]= "39)  &iquest;Cu&aacute;l no es una caracter&iacute;stica de la Red SARA?";
 choices[38]= new Array();
 choices[38][0] = "Fiabilidad, porque dispone de un Centro de Soporte 24 x 7";
 choices[38][1] = "Seguridad, fundamentalmente por el establecimiento de VPNs";
 choices[38][2] = "Calidad de Servicio (QoS) (porque se basa en tecnolog&iacute;a VPLS)";
 choices[38][3] = "Flexibilidad, proporcionada por una pol&iacute;tica de gesti&oacute;n descentralizada";
 answers[38] = choices[38][3];
 units[38] = "44";
 comments[38] = "Id Pregunta: 5957. NULL";


//  Id pregunta: 6098 AÃ±o de creación de pregunta: 2010-01-01
 questions[39]= "40)  &iquest;Cu&aacute;les son las dimensiones de la interoperabilidad seg&uacute;n el Marco Europeo de Interoperabilidad?";
 choices[39]= new Array();
 choices[39][0] = "Organizativa, sem&aacute;ntica y t&eacute;cnica.";
 choices[39][1] = "Legal, sem&aacute;ntica y econ&oacute;mica.";
 choices[39][2] = "Organizativa, ling&uuml;&iacute;stica e inform&aacute;tica.";
 choices[39][3] = "Ninguna, porque el Marco Europeo de Interoperabilidad no est&aacute; todav&iacute;a adoptado por la Comisi&oacute;n Europea.";
 answers[39] = choices[39][0];
 units[39] = "40";
 comments[39] = "Id Pregunta: 6098. TIC A 2009";


//  Id pregunta: 6129 AÃ±o de creación de pregunta: 2010-01-01
 questions[40]= "41)  En la arquitectura Java, &iquest;qu&eacute; se entiende por JSR?";
 choices[40]= new Array();
 choices[40][0] = "Un applet.";
 choices[40][1] = "Es una especificaci&oacute;n en la que se describe una tecnolog&iacute;a, sus partes, las relaciones entre las mismas y los roles de las personas que usar&aacute;n dicha tecnolog&iacute;a.";
 choices[40][2] = "Es una especificaci&oacute;n que describe la manera en que la parte servidora atender&aacute; las peticiones hechas por un applet o un javascript. Es el acr&oacute;nimo de Java Server Request.";
 choices[40][3] = "Un JavaBean.";
 answers[40] = choices[40][1];
 units[40] = "60";
 comments[40] = "Id Pregunta: 6129. TIC A 2009";


//  Id pregunta: 6190 AÃ±o de creación de pregunta: 2010-01-01
 questions[41]= "42)  Seg&uacute;n el Esquema Nacional de Interoperabilidad, la interoperabilidad se entender&aacute; contemplando las dimensiones";
 choices[41]= new Array();
 choices[41][0] = "T&eacute;cnica, sem&aacute;ntica y organizativa";
 choices[41][1] = "T&eacute;cnica, sem&aacute;ntica y funcional";
 choices[41][2] = "Funcional, sem&aacute;ntica y organizativa";
 choices[41][3] = "T&eacute;cnica, funcional y organizativa";
 answers[41] = choices[41][0];
 units[41] = "43";
 comments[41] = "Id Pregunta: 6190. Art&iacute;culo 6";


//  Id pregunta: 6196 AÃ±o de creación de pregunta: 2010-01-01
 questions[42]= "43)  Respecto a los certificados de sede electr&oacute;nica y sello electr&oacute;nico";
 choices[42]= new Array();
 choices[42][0] = "El certificado de sede electr&oacute;nica permite la firma de documentos";
 choices[42][1] = "El certificado de sede electr&oacute;nica no permite la firma de documentos";
 choices[42][2] = "El certificado de sello electr&oacute;nico no permite el establecimiento de comunicaciones seguras";
 choices[42][3] = "El certificado de sello electr&oacute;nico permite la identificaci&oacute;n de una sede electr&oacute;nica";
 answers[42] = choices[42][1];
 units[42] = "43";
 comments[42] = "Id Pregunta: 6196. Articulos 18 y 19. El sello electronico SI permite establecer comunicaciones electronicas";


//  Id pregunta: 6197 AÃ±o de creación de pregunta: 2010-01-01
 questions[43]= "44)  Para la firma electr&oacute;nica por parte de personal al servicio de las Administraciones P&uacute;blicas NO se contempla el uso de";
 choices[43]= new Array();
 choices[43][0] = "Sello electr&oacute;nico";
 choices[43][1] = "DNI electr&oacute;nico";
 choices[43][2] = "Certificado de empleado p&uacute;blico";
 choices[43][3] = "Sistemas de c&oacute;digo seguro de verificaci&oacute;n";
 answers[43] = choices[43][0];
 units[43] = "43";
 comments[43] = "Id Pregunta: 6197. Articulo 21 RD 1671/2009";


//  Id pregunta: 6198 AÃ±o de creación de pregunta: 2010-01-01
 questions[44]= "45)  &iquest;Cu&aacute;l es el framework para aplicaciones desarrolladas con Spring, asociado con el control y la gesti&oacute;n de la seguridad?";
 choices[44]= new Array();
 choices[44][0] = "Spring Security";
 choices[44][1] = "JSF";
 choices[44][2] = "Struts";
 choices[44][3] = "Jbuilder";
 answers[44] = choices[44][0];
 units[44] = "60, 116";
 comments[44] = "Id Pregunta: 6198. TIC-B 2009 bloque desarrollo";


//  Id pregunta: 6207 AÃ±o de creación de pregunta: 2010-01-01
 questions[45]= "46)  &iquest;Cu&aacute;l de los siguientes no es un servidor de aplicaciones J2EE?";
 choices[45]= new Array();
 choices[45][0] = "WebLogic";
 choices[45][1] = "WebSphere";
 choices[45][2] = "Apache Tomcat";
 choices[45][3] = "Jboss";
 answers[45] = choices[45][2];
 units[45] = "60";
 comments[45] = "Id Pregunta: 6207. TICB-2009, bloque desarrollo";


//  Id pregunta: 6386 AÃ±o de creación de pregunta: 2010-01-01
 questions[46]= "47)  El &aacute;mbito de aplicaci&oacute;n de una sede electr&oacute;nica podr&aacute; ser:";
 choices[46]= new Array();
 choices[46][0] = "La totalidad del Ministerio u organismo p&uacute;blico, o uno o varios de sus &oacute;rganos con rango, al menos, de subdirecci&oacute;n general.";
 choices[46][1] = "La totalidad del Ministerio u organismo p&uacute;blico, o uno o varios de sus &oacute;rganos con rango, al menos, de direcci&oacute;n general.";
 choices[46][2] = "La totalidad del Ministerio u organismo p&uacute;blico, o uno o varios de sus &oacute;rganos con rango, al menos, de secretar&iacute;a de estado.";
 choices[46][3] = "La totalidad del Ministerio u organismo p&uacute;blico.";
 answers[46] = choices[46][1];
 units[46] = "43";
 comments[46] = "Id Pregunta: 6386. Art&iacute;culo 3.2 RD 1671/2009";


//  Id pregunta: 6389 AÃ±o de creación de pregunta: 2010-01-01
 questions[47]= "48)  &iquest;C&uacute;al de los siguientes no es un contenido m&iacute;nimo de una sede electr&oacute;nica?";
 choices[47]= new Array();
 choices[47][0] = "Informaci&oacute;n relacionada con la protecci&oacute;n de datos de car&aacute;cter personal, incluyendo un enlace con la sede electr&oacute;nica de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos.";
 choices[47][1] = "Identificaci&oacute;n de la sede, as&iacute; como del &oacute;rgano u &oacute;rganos titulares y de los responsables de la gesti&oacute;n y de los servicios puestos a disposici&oacute;n en la misma y, en su caso, de las subsedes de ella derivadas.";
 choices[47][2] = "Informaci&oacute;n necesaria para la correcta utilizaci&oacute;n de la sede incluyendo el mapa de la sede electr&oacute;nica o informaci&oacute;n equivalente, con especificaci&oacute;n de la estructura de navegaci&oacute;n y las distintas secciones disponibles, as&iacute; como la relacionada con propiedad intelectual.";
 choices[47][3] = "Todos son contenidos m&iacute;nimos de una sede electr&oacute;nica.";
 answers[47] = choices[47][3];
 units[47] = "43";
 comments[47] = "Id Pregunta: 6389. Art&iacute;culo 6 RD 1671/2009";


//  Id pregunta: 6390 AÃ±o de creación de pregunta: 2010-01-01
 questions[48]= "49)  Los ciudadanos podr&aacute;n utilizar para relacionarse con la Administraci&oacute;n General del Estado, los sistemas de firma electr&oacute;nica incorporados al Documento Nacional de Identidad";
 choices[48]= new Array();
 choices[48][0] = "Cuando as&iacute; lo permita el tr&aacute;mite pertinente";
 choices[48][1] = "En todo caso";
 choices[48][2] = "En ning&uacute;n caso";
 choices[48][3] = "Cuando lo autorice el responsable del proceso";
 answers[48] = choices[48][1];
 units[48] = "43";
 comments[48] = "Id Pregunta: 6390. Art&iacute;culo 10 RD 1671/2009";


//  Id pregunta: 6515 AÃ±o de creación de pregunta: 2010-01-01
 questions[49]= "50)  Se&ntilde;ale la afirmaci&oacute;n INCORRECTA con respecto al lenguaje de programaci&oacute;n Java:";
 choices[49]= new Array();
 choices[49][0] = "Una clase 'final' no puede tener clases que hereden de ella.";
 choices[49][1] = "Una clase abstracta (abstract) es una clase que puede tener clases que hereden de ella, pero no puede ser instanciada.";
 choices[49][2] = "Las variables y m&eacute;todos de instancia privados s&oacute;lo pueden ser accedidos desde dentro de la clase y desde las subclases. ";
 choices[49][3] = "No se permite herencia m&uacute;ltiple.";
 answers[49] = choices[49][2];
 units[49] = "60";
 comments[49] = "Id Pregunta: 6515. NULL";


//  Id pregunta: 7315 AÃ±o de creación de pregunta: 2010-01-01
 questions[50]= "51)  Entre los servicios comunes que se ofrecen en la plataforma de intermediaci&oacute;n de servicios se encuentran:";
 choices[50]= new Array();
 choices[50][0] = "Servicio de validaci&oacute;n de normas y est&aacute;ndares";
 choices[50][1] = "Servicio de autenticaci&oacute;n de informes";
 choices[50][2] = "Servicio de verificaci&oacute;n de Datos de Identidad y Residencia";
 choices[50][3] = "Todas las anteriores son correctas";
 answers[50] = choices[50][2];
 units[50] = "44";
 comments[50] = "Id Pregunta: 7315. NULL";


//  Id pregunta: 7771 AÃ±o de creación de pregunta: 2010-01-01
 questions[51]= "52)   El Sistema de Soporte a la Decisi&oacute;n SSD-AAPP es una aplicaci&oacute;n inform&aacute;tica dise&ntilde;ada para:";
 choices[51]= new Array();
 choices[51][0] = " Ayudar a la selecci&oacute;n de la mejor oferta posible de entre las obtenidas en cualquier proceso de contrataci&oacute;n p&uacute;blica relacionada con Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones.";
 choices[51][1] = " Ayudar a la selecci&oacute;n de la mejor oferta posible de entre las obtenidas en cualquier proceso de contrataci&oacute;n p&uacute;blica a trav&eacute;s del Cat&aacute;logo de Bienes de Adquisici&oacute;n Centralizada.";
 choices[51][2] = " Ayudar a la selecci&oacute;n de la mejor oferta posible de entre las obtenidas en cualquier proceso de contrataci&oacute;n p&uacute;blica.";
 choices[51][3] = " Ayudar a la selecci&oacute;n de la mejor oferta posible de entre las obtenidas en un proceso de contrataci&oacute;n p&uacute;blica a trav&eacute;s de un procedimiento negociado por exclusividad.";
 answers[51] = choices[51][2];
 units[51] = "44";
 comments[51] = "Id Pregunta: 7771. Map 2005";


//  Id pregunta: 8217 AÃ±o de creación de pregunta: 2011-01-01
 questions[52]= "53)  En relaci&oacute;n a la facturaci&oacute;n electr&oacute;nica, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[52]= new Array();
 choices[52][0] = "La AEAT pone a disposici&oacute;n de los usuarios software distribuible para generar PDF417.";
 choices[52][1] = "El formato &quot;Facturae&quot; permite la inclusi&oacute;n de extensiones a nivel de l&iacute;nea, de factura o de lote de facturas.";
 choices[52][2] = "El certificado a usar para firmar la factura electr&oacute;nica y que &eacute;sta tenga validez ha de ser en todo caso el del obligado tributario.";
 choices[52][3] = "La Orden EHA/962/2007 dice que la obligaci&oacute;n de remisi&oacute;n y conservaci&oacute;n de facturas o documentos sustitutivos se cumplir&aacute; para la facturaci&oacute;n electr&oacute;nica mediante el uso de firma electr&oacute;nica reconocida.";
 answers[52] = choices[52][1];
 units[52] = "70";
 comments[52] = "Id Pregunta: 8217. Examen TIC A1 2010";


//  Id pregunta: 8399 AÃ±o de creación de pregunta: 2011-01-01
 questions[53]= "54)  Las comunicaciones efectuadas a ciudadanos a trav&eacute;s de medios electr&oacute;nicos ser&aacute;n v&aacute;lidas de acuerdo al art&iacute;culo 27 de la Ley 11/2007, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, siempre que:";
 choices[53]= new Array();
 choices[53][0] = "Exista constancia de la transmisi&oacute;n y recepci&oacute;n, de sus fechas y se identifique fldedignamente al destinatario de las mismas";
 choices[53][1] = "Exista constancia de la transmisi&oacute;n y recepci&oacute;n, de sus fechas y se identifique fidedignarnente al remitente y al destinatario de las mismas. ";
 choices[53][2] = "Exista constancia de la transmisi&oacute;n y recepci&oacute;n, de sus fechas, del contenido &iacute;ntegro de las comunicaciones y se identifique fidedignamente al remitente y al destinatario de las mismas. ";
 choices[53][3] = "Exista constancia de la transmisi&oacute;n y recepci&oacute;n, de sus fechas, del contenido &iacute;ntegro de las comunicaciones, se identifique fidedignarnente al remitente y al destinatario de las mismas y una norma con rango de Ley permita el uso de un medio electr&oacute;nico en el procedimiento";
 answers[53] = choices[53][2];
 units[53] = "43";
 comments[53] = "Id Pregunta: 8399. Examen TIC A2 2010";


//  Id pregunta: 8401 AÃ±o de creación de pregunta: 2011-01-01
 questions[54]= "55)  Dentro del contenido m&iacute;nimo de una Sede Electr&oacute;nica NO se encuentra: ";
 choices[54]= new Array();
 choices[54][0] = "Identificaci&oacute;n, &oacute;rgano titular y responsables de gesti&oacute;n. ";
 choices[54][1] = "Sistemas de firma electr&oacute;nica que sean admitidos o utilizados en la Sede. ";
 choices[54][2] = "Sistemas de verificaci&oacute;n de los certificados de la Sede. ";
 choices[54][3] = "Relaci&oacute;n de funcionarios habilitados para actuar ante la Sede";
 answers[54] = choices[54][3];
 units[54] = "43";
 comments[54] = "Id Pregunta: 8401. Examen TIC A2 2010";


//  Id pregunta: 8422 AÃ±o de creación de pregunta: 2011-01-01
 questions[55]= "56)  &iquest;Cu&aacute;l de los siguientes principios b&aacute;sicos no aparece en el Esquema Nacional de Seguridad, Real Decreto 3/2010 del 8 de enero?";
 choices[55]= new Array();
 choices[55][0] = "Seguridad transversal";
 choices[55][1] = "Gesti&oacute;n de riesgos";
 choices[55][2] = "L&iacute;neas de defensa";
 choices[55][3] = "Funci&oacute;n diferenciada";
 answers[55] = choices[55][0];
 units[55] = "43";
 comments[55] = "Id Pregunta: 8422. NULL";


//  Id pregunta: 8439 AÃ±o de creación de pregunta: 2011-01-01
 questions[56]= "57)  &iquest;Bajo cu&aacute;les de las siguientes circunstancias no pueden ser rechazados los documentos electr&oacute;nicos presentados en un registro electr&oacute;nico seg&uacute;n el RD 1671/2009?";
 choices[56]= new Array();
 choices[56][0] = "Que se trate de documentos dirigidos a &oacute;rganos u organismos fuera del &aacute;mbito de la Administraci&oacute;n General del Estado.";
 choices[56][1] = "Que se trate de documentos que de acuerdo con lo establecido en los art&iacute;culos 14 y 32 deban presentarse en registros electr&oacute;nicos espec&iacute;ficos.";
 choices[56][2] = "Que contengan c&oacute;digo malicioso o dispositivo susceptible de afectar a la integridad o seguridad del sistema.";
 choices[56][3] = "En el caso de utilizaci&oacute;n de documentos normalizados.";
 answers[56] = choices[56][3];
 units[56] = "43";
 comments[56] = "Id Pregunta: 8439. ";


//  Id pregunta: 8748 AÃ±o de creación de pregunta: 2011-01-01
 questions[57]= "58)  Un ciudadano quiere remitir un escrito con una sugerencia de servicio a un organismo con oficinas de atenci&oacute;n al p&uacute;blico, &iquest;est&aacute; contemplada en la Ley 11/2007, de Acceso Electr&oacute;nico de los Ciudadanos a los Servicios P&uacute;blicos, LAECSP, la posibilidad de que remita ese escrito, con un formato libre, a trav&eacute;s del registro electr&oacute;nico del organismo destinatario del mismo?";
 choices[57]= new Array();
 choices[57][0] = "Si, est&aacute; prevista tal posibilidad para cualquier solicitud, escrito o comunicaci&oacute;n dirigida a cualquier &oacute;rgano o entidad del &aacute;mbito de la administraci&oacute;n titular del registro";
 choices[57][1] = "No, porque s&oacute;lo se prev&eacute; la recepci&oacute;n de documentos normalizados, que est&eacute;n predeterminados en la normativa de creaci&oacute;n del registro, nunca un escrito no normalizado como el del enunciado";
 choices[57][2] = "Se prev&eacute; tal recepci&oacute;n, pero con car&aacute;cter informativo &uacute;nicamente, debiendo complementar el envi&oacute; con el escrito en papel, a trav&eacute;s de un registro f&iacute;sico, en un plazo definido en la normativa de desarrollo";
 choices[57][3] = "S&iacute;, porque cumple con el requisito indispensable de tratarse del registro del organismo destinatario del registro";
 answers[57] = choices[57][0];
 units[57] = "43";
 comments[57] = "Id Pregunta: 8748. Examen TIC A2 2010 interna";


//  Id pregunta: 8751 AÃ±o de creación de pregunta: 2011-01-01
 questions[58]= "59)  El Real Decreto 3/2010, de 8 de enero, regula el Esquema Nacional de Seguridad (ENS) en el &aacute;mbito de la Administraci&oacute;n Electr&oacute;nica. En el mismo, la seguridad se entender&aacute; como:";
 choices[58]= new Array();
 choices[58][0] = "Un proceso espec&iacute;ficamente tecnol&oacute;gico, contemplando exclusivamente elementos t&eacute;cnicos";
 choices[58][1] = "Un proceso integral te&oacute;rico que comprende &uacute;nicamente tas medidas de prevenci&oacute;n y detecci&oacute;n de amenazas, quedando fuera del &aacute;mbito del ENS las de correcci&oacute;n, a implantar particularmente en cada caso.";
 choices[58][2] = "Un proceso espec&iacute;ficamente tecnol&oacute;gico, que comprende &uacute;nicamente las medidas concretas de detecci&oacute;n y correcci&oacute;n de amenazas, quedando fuera del &aacute;mbito del ENS las de prevenci&oacute;n, como propias de cada caso particular";
 choices[58][3] = "Un proceso integral constituido por elementos t&eacute;cnicos, humanos, materiales y organizativos";
 answers[58] = choices[58][3];
 units[58] = "43";
 comments[58] = "Id Pregunta: 8751. Examen TIC A2 2010 interna";


//  Id pregunta: 8900 AÃ±o de creación de pregunta: 2011-01-01
 questions[59]= "60)  Se&ntilde;ale la respuesta correcta";
 choices[59]= new Array();
 choices[59][0] = "XML fue dise&ntilde;ado para transportar datos, no para mostrarlos";
 choices[59][1] = "Las etiquetas de XML son todas predefinidas";
 choices[59][2] = "XML es una recomendaci&oacute;n del UIT";
 choices[59][3] = "XML significa Extralarge Markup Language";
 answers[59] = choices[59][0];
 units[59] = "69";
 comments[59] = "Id Pregunta: 8900. NULL";


//  Id pregunta: 9036 AÃ±o de creación de pregunta: 2011-01-01
 questions[60]= "61)  Seg&uacute;n el  RD 1671/2009, &iquest;cu&aacute;ndo se pueden destruir documentos en soporte papel?";
 choices[60]= new Array();
 choices[60][0] = "Siempre";
 choices[60][1] = "Nunca";
 choices[60][2] = "Cuando no se trate de documentos  con valor hist&oacute;rico, art&iacute;sticos o con car&aacute;cter relevante";
 choices[60][3] = "Cuando ya exista una copia en formato papel ";
 answers[60] = choices[60][2];
 units[60] = "43";
 comments[60] = "Id Pregunta: 9036. NULL";


//  Id pregunta: 9068 AÃ±o de creación de pregunta: 2013-01-01
 questions[61]= "62)  Se&ntilde;ale la afirmaci&oacute;n FALSA respecto a las normas WCAG 2.0:";
 choices[61]= new Array();
 choices[61][0] = "Una de las mejoras respecto a WCAG 1.0 es la posibilidad de evaluarlas de manera autom&aacute;tica. ";
 choices[61][1] = "En Espa&ntilde;a se incorporan mediante la norma UNE 139803. ";
 choices[61][2] = "Constan de 14 pautas. ";
 choices[61][3] = "La pauta Adaptable dentro del principio Perceptible se refiere a &quot;Contenido presentado de diferentes formas sin perder informaci&oacute;n o estructura&quot;. ";
 answers[61] = choices[61][2];
 units[61] = "39";
 comments[61] = "Id Pregunta: 9068. ";


//  Id pregunta: 9578 AÃ±o de creación de pregunta: 2013-01-01
 questions[62]= "63)  El Comit&eacute; de Estrategia TIC:";
 choices[62]= new Array();
 choices[62][0] = "Es el &oacute;rgano existente en los departamentos ministeriales, en el &aacute;mbito de la Administraci&oacute;n General del Estado, competente en materia de administraci&oacute;n electr&oacute;nica.";
 choices[62][1] = "Es el &oacute;rgano t&eacute;cnico adscrito a la Comisi&oacute;n Europea que canaliza la colaboraci&oacute;n entre la Administraci&oacute;n General del Estado y el resto de pa&iacute;ses de la Uni&oacute;n Europea en materia de administraci&oacute;n electr&oacute;nica.";
 choices[62][2] = "Es el &oacute;rgano colegiado encargado de la definici&oacute;n y supervisi&oacute;n de la aplicaci&oacute;n de la Estrategia TIC de la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos.";
 choices[62][3] = "Es el &oacute;rgano t&eacute;cnico adscrito a la Comisi&oacute;n Europea encargado de unificar los criterios en materia de tratamiento y protecci&oacute;n de datos de car&aacute;cter personal en el &aacute;mbito de la Uni&oacute;n Europea";
 answers[62] = choices[62][2];
 units[62] = "43";
 comments[62] = "Id Pregunta: 9578. Examen TIC A1 2011, adaptado a RD 806/2014.";


//  Id pregunta: 9595 AÃ±o de creación de pregunta: 2013-01-01
 questions[63]= "64)  Para el concepto de struts, indique cu&aacute;l de las siguientes opciones es correcta:";
 choices[63]= new Array();
 choices[63][0] = "Struts es un framework que se basa en el patr&oacute;n MVC (Model View Controller) ";
 choices[63][1] = "Struts es un framework que se basa en la tecnolog&iacute;a JSF (Java Server Faces)";
 choices[63][2] = "Struts es un patr&oacute;n de dise&ntilde;o para plataformas .NET";
 choices[63][3] = "Struts es un patr&oacute;n de dise&ntilde;o para plataformas JEE ";
 answers[63] = choices[63][0];
 units[63] = "60";
 comments[63] = "Id Pregunta: 9595. Xunta Libre 2011";


//  Id pregunta: 9661 AÃ±o de creación de pregunta: 2014-01-01
 questions[64]= "65)  La Ley 11/2007 tiene en cuenta &quot;Otros sistemas de firma&quot;, que podr&aacute;n ser creados mediante:";
 choices[64]= new Array();
 choices[64][0] = "Real Decreto del Gobierno, previo informe de la CSAE";
 choices[64][1] = "Informe de la CSAE";
 choices[64][2] = "Orden Ministerial o Resoluci&oacute;n, previo informe de la CSAE.";
 choices[64][3] = "No necesita reglamento para su creaci&oacute;n.";
 answers[64] = choices[64][2];
 units[64] = "43";
 comments[64] = "Id Pregunta: 9661. NULL";


//  Id pregunta: 9716 AÃ±o de creación de pregunta: 2014-01-01
 questions[65]= "66)  Dentro del Centro de Transferencia Tecnol&oacute;gica, el Servicio de Oficina Virtual de Registro que permite, entre otros, la remisi&oacute;n de los asientos registrales entre Administraciones P&uacute;blicas, se denomina";
 choices[65]= new Array();
 choices[65][0] = "SIR.";
 choices[65][1] = "ORVE.";
 choices[65][2] = "SICRES 3.0.";
 choices[65][3] = "SVDR.";
 answers[65] = choices[65][1];
 units[65] = "44";
 comments[65] = "Id Pregunta: 9716. Examen TIC-A1 2013";


//  Id pregunta: 9805 AÃ±o de creación de pregunta: 2014-01-01
 questions[66]= "67)  En el supuesto de documentos emitidos originalmente en soporte papel de los que se hayan efectuado copias electr&oacute;nicas, de acuerdo a lo dispuesto en el art 30 de la ley 11/2007, se podr&aacute;:";
 choices[66]= new Array();
 choices[66][0] = "Destruir los originales en los t&eacute;rminos y condiciones que por cada Administraci&oacute;n P&uacute;blica se establezcan. ";
 choices[66][1] = "Destruir los originales, en cualquier caso, al cabo de cinco a&ntilde;os de su presentaci&oacute;n. ";
 choices[66][2] = "Nunca se podr&aacute;n destruir, con car&aacute;cter general para todo el Estado. ";
 choices[66][3] = "Destruir los originales, previo consentimiento del interesado. ";
 answers[66] = choices[66][0];
 units[66] = "43";
 comments[66] = "Id Pregunta: 9805. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9983 AÃ±o de creación de pregunta: 2014-01-01
 questions[67]= "68)  No es cierto sobre la tecnolog&iacute;a de p&aacute;ginas web de Microsoft (ASP y ASP.Net):";
 choices[67]= new Array();
 choices[67][0] = "Una p&aacute;gina ASP puede escribirse con Java Script";
 choices[67][1] = "ASP se ejecuta del lado del servidor bajo IIS o motores PHT compatibles con ASP";
 choices[67][2] = "ASP.NET es una tecnolog&iacute;a orientada o objetos que se ejecuta del lado del servidor";
 choices[67][3] = "Una p&aacute;gina ASP puede escribirse con Visual Basic Script";
 answers[67] = choices[67][1];
 units[67] = "59,115";
 comments[67] = "Id Pregunta: 9983. Examen T&eacute;cnico especialista inform&aacute;tica, Servicio Salud C&aacute;ntabro, 2011";


//  Id pregunta: 10005 AÃ±o de creación de pregunta: 2014-01-01
 questions[68]= "69)  Microsoft ActiveX Data Objects de la plataforma .NET";
 choices[68]= new Array();
 choices[68][0] = "permite trabajar desconectado del origen de datos.";
 choices[68][1] = "no se integra con XML.";
 choices[68][2] = "es el precursor de RDO ( Remote Data Objects).";
 choices[68][3] = "utiliza una forma secuencial de navegaci&oacute;n para acceder a las filas de una tabla.";
 answers[68] = choices[68][0];
 units[68] = "59, 114";
 comments[68] = "Id Pregunta: 10005. ";


//  Id pregunta: 10153 AÃ±o de creación de pregunta: 2014-01-01
 questions[69]= "70)  Cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[69]= new Array();
 choices[69][0] = "Los funcionarios habilitados podr&aacute;n recibir notificaciones postales";
 choices[69][1] = "Los funcionarios habilitados podr&aacute;n recibir notificaciones por comparecencia electr&oacute;nica en la sede";
 choices[69][2] = "Los funcionarios habilitados podr&aacute;n recibir notificaciones en la direcci&oacute;n electr&oacute;nica habilitada del ciudadano";
 choices[69][3] = "Los funcionarios habilitados no podr&aacute;n recibir ning&uacute;n tipo de notificaciones que requieran la identificaci&oacute;n y autenticaci&oacute;n del ciudadano";
 answers[69] = choices[69][1];
 units[69] = "43";
 comments[69] = "Id Pregunta: 10153. ";


//  Id pregunta: 10219 AÃ±o de creación de pregunta: 2014-01-01
 questions[70]= "71)  Las variables declaradas en un interface deben ser:";
 choices[70]= new Array();
 choices[70][0] = "public, static y final";
 choices[70][1] = "private static y final";
 choices[70][2] = "S&oacute;lo protected";
 choices[70][3] = "En un interface no se deben incluir variables";
 answers[70] = choices[70][0];
 units[70] = "60";
 comments[70] = "Id Pregunta: 10219. NULL";


//  Id pregunta: 10223 AÃ±o de creación de pregunta: 2014-01-01
 questions[71]= "72)  Teniendo las siguientes sentencias, el resultado ser&aacute;:byte b1 = 126, b2 = 1;byte b3 = b1 + b2;System.out.println(&quot;b3 vale: &quot; + b3);";
 choices[71]= new Array();
 choices[71][0] = "127";
 choices[71][1] = "Da error, ya que se supera el valor m&aacute;ximo que admite un dato de tipo byte";
 choices[71][2] = "Da error y no compila ya que b3 deber&iacute;a ser de tipo int";
 choices[71][3] = "Da error ya que las variables est&aacute;n mal declaradas";
 answers[71] = choices[71][2];
 units[71] = "60";
 comments[71] = "Id Pregunta: 10223. La suma de la segunda l&iacute;nea solo acepta int. Si se suman bytes debe hacerse casting.";


//  Id pregunta: 10356 AÃ±o de creación de pregunta: 2014-01-01
 questions[72]= "73)  &iquest;C&uacute;al de los siguientes no es un principio del programa ISA (soluciones de interoperabilidad para las administraciones p&uacute;blicas europeas)?";
 choices[72]= new Array();
 choices[72][0] = "Neutralidad con respecto a la tecnolog&iacute;a y adaptabilidad";
 choices[72][1] = "Reutilizaci&oacute;n";
 choices[72][2] = "Privacidad y protecci&oacute;n de los datos personales";
 choices[72][3] = "Fomento del uso de software libre y sistemas abiertos";
 answers[72] = choices[72][3];
 units[72] = "40";
 comments[72] = "Id Pregunta: 10356. El programa ISA se basa en los siguientes principios: neutralidad con respecto a la tecnolog&iacute;a y adaptabilidad, apertura, reutilizaci&oacute;n, privacidad y protecci&oacute;n de los datos personales, seguridad";


//  Id pregunta: 10358 AÃ±o de creación de pregunta: 2014-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l de los siguientes no es un principio del Marco Europeo de Interopeabilidad?";
 choices[73]= new Array();
 choices[73][0] = "Multiling&uuml;ismo";
 choices[73][1] = "Accesibilidad";
 choices[73][2] = "Empleo de soluciones de software libre";
 choices[73][3] = "Uso de est&aacute;ndares abiertos";
 answers[73] = choices[73][2];
 units[73] = "40";
 comments[73] = "Id Pregunta: 10358. Los ocho principios que define el Marco Europeo de Interoperabilidad son: Accesibilidad, Multiling&uuml;ismo, Seguridad, Protecci&oacute;n de datos de car&aacute;cter personal, Subsidiariedad, Uso de est&aacute;ndares abiertos, Valorar los beneficios de software de fuentes abierta";


//  Id pregunta: 10469 AÃ±o de creación de pregunta: 2014-01-01
 questions[74]= "75)  Respecto a HTML5, indique la respuesta incorrecta:";
 choices[74]= new Array();
 choices[74][0] = "Existe una API de geolocalizaci&oacute;n.";
 choices[74][1] = "Permite abrir sockets para una comunicaci&oacute;n bidireccional, full duplex con baja latencia y que se basa en el protocolo TCP.";
 choices[74][2] = "No neceita Flash para ver v&iacute;deos.";
 choices[74][3] = "Los Web Workers permiten la ejecuci&oacute;n de un &uacute;nico subproceso.";
 answers[74] = choices[74][3];
 units[74] = "69";
 comments[74] = "Id Pregunta: 10469. NULL";


//  Id pregunta: 10494 AÃ±o de creación de pregunta: 2014-01-01
 questions[75]= "76)  Seg&uacute;n la NTI de requisitos de conexi&oacute;n a la Red SARA. &iquest;Cual de los siguientes no es un tipo de Punto de Presencia?";
 choices[75]= new Array();
 choices[75][0] = "Area de Conexi&oacute;n de la AEAT";
 choices[75][1] = "Red sTESTA";
 choices[75][2] = "Ventanilla Unica empresarial de Melilla";
 choices[75][3] = "Banco de Espa&ntilde;a";
 answers[75] = choices[75][1];
 units[75] = "43";
 comments[75] = "Id Pregunta: 10494. Punto II.1.2 de la NTI de Requisitos de conexi&oacute;n a red sara. Las Ventanillas Unicas son tipos de PdP, pero la Ventanilla Unica de Melilla es un PdP dentro de ese tipo y no un tipo";


//  Id pregunta: 10608 AÃ±o de creación de pregunta: 2015-01-01
 questions[76]= "77)  El formato de redifusi&oacute;n web Atom est&aacute; estandarizado en:";
 choices[76]= new Array();
 choices[76][0] = "IETF RFC 1738";
 choices[76][1] = "IETF RFC 1392";
 choices[76][2] = "IETF RFC 2616";
 choices[76][3] = "IETF RFC 4287";
 answers[76] = choices[76][3];
 units[76] = "69";
 comments[76] = "Id Pregunta: 10608. ";


//  Id pregunta: 10698 AÃ±o de creación de pregunta: 2015-01-01
 questions[77]= "78)  La Norma T&eacute;cnica de Interoperabilidad de documento electr&oacute;nico es aplicable a:";
 choices[77]= new Array();
 choices[77][0] = "Documentos administrativos electr&oacute;nicos.";
 choices[77][1] = "Cualquier otro documento electr&oacute;nico susceptible de formar parte de un expediente electr&oacute;nico.";
 choices[77][2] = "Ambos (los dos anteriores).";
 choices[77][3] = "Todo documento en poder de la administraci&oacute;n.";
 answers[77] = choices[77][2];
 units[77] = "43";
 comments[77] = "Id Pregunta: 10698. ";


//  Id pregunta: 10700 AÃ±o de creación de pregunta: 2015-01-01
 questions[78]= "79)  &iquest;Cu&aacute;l de los siguientes no es considerado un componente de un documento electr&oacute;nico seg&uacute;n la NTI de Documento Electr&oacute;nico?";
 choices[78]= new Array();
 choices[78][0] = "Encabezado.";
 choices[78][1] = "Contenido.";
 choices[78][2] = "Firma electr&oacute;nica.";
 choices[78][3] = "Metadatos.";
 answers[78] = choices[78][0];
 units[78] = "43";
 comments[78] = "Id Pregunta: 10700. ";


//  Id pregunta: 10702 AÃ±o de creación de pregunta: 2015-01-01
 questions[79]= "80)  En referencia a los metadatos del expediente electr&oacute;nico.";
 choices[79]= new Array();
 choices[79][0] = "&Uacute;nicamente podr&aacute;n ser modificados durante la tramitaci&oacute;n de dicho expediente y en ning&uacute;n caso con posterioridad a su finalizaci&oacute;n.";
 choices[79][1] = "No ser&aacute;n modificados en ninguna fase posterior del procedimiento administrativo.";
 choices[79][2] = "No ser&aacute;n modificados en ninguna fase posterior del procedimiento administrativo, a excepci&oacute;n de modificaciones necesarias para la correcci&oacute;n de errores u omisiones en el valor inicialmente asignado.";
 choices[79][3] = "La normativa no establece ning&uacute;n condicionante sobre su posible modificaci&oacute;n.";
 answers[79] = choices[79][2];
 units[79] = "43";
 comments[79] = "Id Pregunta: 10702. ";


//  Id pregunta: 10704 AÃ±o de creación de pregunta: 2015-01-01
 questions[80]= "81)  En el intercambio de expedientes electr&oacute;nicos seg&uacute;n lo establecido en la NTI de documento electr&oacute;nico.";
 choices[80]= new Array();
 choices[80][0] = "Primero se env&iacute;a el esquemas XML para intercambio de expedientes electr&oacute;nicos y posteriormente los documentos.";
 choices[80][1] = "Primero se env&iacute;an los documentos y despu&eacute;s los esquemas XML para intercambio de expedientes electr&oacute;nicos.";
 choices[80][2] = "Es indiferente el orden de env&iacute;o.";
 choices[80][3] = "Se env&iacute;an &uacute;nicamente los documentos ya que los esquemas XML est&aacute;n contenidos en dichos documentos.";
 answers[80] = choices[80][0];
 units[80] = "43";
 comments[80] = "Id Pregunta: 10704. ";


//  Id pregunta: 10710 AÃ±o de creación de pregunta: 2015-01-01
 questions[81]= "82)  &iquest;Cu&aacute;l es un contenido clave de la Norma T&eacute;cnica de Interoperabilidad de Modelo de Datos para el Intercambio de asientos entre las entidades registrales?";
 choices[81]= new Array();
 choices[81][0] = "SICRES";
 choices[81][1] = "Los metadatos";
 choices[81][2] = "ACCEDA";
 choices[81][3] = "HABILITA";
 answers[81] = choices[81][0];
 units[81] = "43";
 comments[81] = "Id Pregunta: 10710. ";


//  Id pregunta: 10714 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  &iquest;Qu&eacute; estructura utiliza SICRES 3?";
 choices[82]= new Array();
 choices[82][0] = "HTML";
 choices[82][1] = "PDF";
 choices[82][2] = "XML";
 choices[82][3] = "Ninguna de las anteriores";
 answers[82] = choices[82][2];
 units[82] = "43";
 comments[82] = "Id Pregunta: 10714. ";


//  Id pregunta: 10718 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  &iquest;Qui&eacute;n no es un actor involucrado en el proceso de creaci&oacute;n y validaci&oacute;n de una firma electr&oacute;nica seg&uacute;n la NTI de firma electr&oacute;nica?";
 choices[83]= new Array();
 choices[83][0] = "Firmante";
 choices[83][1] = "Receptor";
 choices[83][2] = "Verificador";
 choices[83][3] = "PSC";
 answers[83] = choices[83][1];
 units[83] = "43";
 comments[83] = "Id Pregunta: 10718. ";


//  Id pregunta: 10771 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  &iquest;En qu&eacute; a&ntilde;o se aprueba la Norma T&eacute;cnica de Interoperabilidad de requisitos de conexi&oacute;n a la red de comunicaciones de las Administraciones P&uacute;blicas espa&ntilde;olas?";
 choices[84]= new Array();
 choices[84][0] = "2009";
 choices[84][1] = "2011";
 choices[84][2] = "2013";
 choices[84][3] = "2015";
 answers[84] = choices[84][1];
 units[84] = "43";
 comments[84] = "Id Pregunta: 10771. ";


//  Id pregunta: 10800 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  Se&ntilde;ale qu&eacute; tecnolog&iacute;a XML sem&aacute;ntica puede ser usada para la interoperabilidad e intercambio de mensajes electr&oacute;nicos de negocio, mensajes B2B:";
 choices[85]= new Array();
 choices[85][0] = "ecXML";
 choices[85][1] = "ebXML";
 choices[85][2] = "WSDL";
 choices[85][3] = "Xerces";
 answers[85] = choices[85][1];
 units[85] = "69";
 comments[85] = "Id Pregunta: 10800. Examen GSI 2014";


//  Id pregunta: 10848 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  Elija la respuesta correcta respecto Java EE 7:";
 choices[86]= new Array();
 choices[86][0] = "Para crear un nuevo servlet se debe invocar al procedimiento init ().";
 choices[86][1] = "Para destruir un servlet se debe invocar al m&eacute;todo destroy().";
 choices[86][2] = "La clase ServletConfig sirve para pasarle informaci&oacute;n al servlet durante su inicializaci&oacute;n.";
 choices[86][3] = "La clase ServletSession proporciona a las aplicaciones las herramientas para la gesti&oacute;n de la sesi&oacute;n.";
 answers[86] = choices[86][2];
 units[86] = "60, 116";
 comments[86] = "Id Pregunta: 10848. Examen GSI 2014";


//  Id pregunta: 10849 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  Al conjunto de documentos que definen patrones de dise&ntilde;o y pr&aacute;cticas recomendadas en la creaci&oacute;n de aplicaciones utilizando Java Enterprise Edition se denomina:";
 choices[87]= new Array();
 choices[87][0] = "Java BluePrints.";
 choices[87][1] = "Java Specification Request.";
 choices[87][2] = "Java Community Process.";
 choices[87][3] = "Java Pattern Spec.";
 answers[87] = choices[87][0];
 units[87] = "60, 116";
 comments[87] = "Id Pregunta: 10849. Examen GSI 2014";


//  Id pregunta: 10866 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  Se&ntilde;ale la respuesta FALSA acerca de la tecnolog&iacute;a Java Web Start:";
 choices[88]= new Array();
 choices[88][0] = "El software de Java Web Start permite descargar y ejecutar aplicaciones Java desde la Web.";
 choices[88][1] = "Garantiza que se est&aacute; ejecutando la &uacute;ltima versi&oacute;n de la aplicaci&oacute;n.";
 choices[88][2] = "Incluido en el JDK desde la versi&oacute;n 6, permitiendo instalar aplicaciones a trav&eacute;s de URLs con JMLP (Java Main Launch Protocol).";
 choices[88][3] = "Permite desplegar f&aacute;cilmente aplicaciones standalone de escritorio.";
 answers[88] = choices[88][2];
 units[88] = "60, 116";
 comments[88] = "Id Pregunta: 10866. Examen GSI 2014";


//  Id pregunta: 10923 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  Respecto al Registro Electr&oacute;nico Com&uacute;n (REC), se&ntilde;ale la respuesta correcta:";
 choices[89]= new Array();
 choices[89][0] = "El REC debe admitir cualquier solicitud, escrito o comunicaci&oacute;n dirigida a cualquiera de las Administraciones P&uacute;blicas espa&ntilde;olas.";
 choices[89][1] = "La presentaci&oacute;n de solicitudes dirigidas a entidades que no hayan sido activadas en el REC se tendr&aacute; por no realizada.";
 choices[89][2] = "El REC podr&aacute; ser habilitado para la remisi&oacute;n, recepci&oacute;n e intercambio de solicitudes de la competencia de las Administraciones Auton&oacute;micas y Locales, en la forma que se determine en los correspondientes Convenios.";
 choices[89][3] = "En coordinaci&oacute;n con las Administraciones destinatarias, el Ministerio de Hacienda y Administraciones P&uacute;blicas ser&aacute; responsable de la custodia y manejo de todos los ficheros generados por el REC.";
 answers[89] = choices[89][2];
 units[89] = "44";
 comments[89] = "Id Pregunta: 10923. TIC A1 AGE 2014";


//  Id pregunta: 10993 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  En relaci&oacute;n con el Punto General de Entrada de Facturas Electr&oacute;nicas de la Administraci&oacute;n General del Estado (FACe), se&ntilde;ale la respuesta correcta:";
 choices[90]= new Array();
 choices[90][0] = "Las Comunidades Aut&oacute;nomas y las Entidades Locales deber&aacute;n utilizar FACe, en todos los casos.";
 choices[90][1] = "Las Comunidades Aut&oacute;nomas y Entidades Locales deber&aacute;n crear su propio punto general de facturas electr&oacute;nicas e interoperar con el FACe.";
 choices[90][2] = "Las Comunidades Aut&oacute;nomas y Entidades Locales deber&aacute;n crear su propio punto general de facturas electr&oacute;nicas, sin necesidad de interoperar con FACe.";
 choices[90][3] = "Las Comunidades Aut&oacute;nomas y Entidades Locales podr&aacute;n crear su propio punto general de entrada de facturas electr&oacute;nicas, previa justificaci&oacute;n de su no adhesi&oacute;n a FACe en t&eacute;rminos de eficiencia, y con anterioridad a la realizaci&oacute;n de cualquier inversi&oacute;n al respecto.";
 answers[90] = choices[90][3];
 units[90] = "70";
 comments[90] = "Id Pregunta: 10993. TIC A1 AGE 2014";


//  Id pregunta: 11144 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;Cu&aacute;l de los siguientes no es un protocolo de pago?";
 choices[91]= new Array();
 choices[91][0] = "SET";
 choices[91][1] = "Paypal";
 choices[91][2] = "3-D Secure";
 choices[91][3] = "Mastercard True Payment Protocol";
 answers[91] = choices[91][3];
 units[91] = "70";
 comments[91] = "Id Pregunta: 11144. ";


//  Id pregunta: 11215 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Sobre la  tecnolog&iacute;a Java WebStart es cierto que:";
 choices[92]= new Array();
 choices[92][0] = "Permite la  instalaci&oacute;n de la aplicaci&oacute;n pero no su actualizaci&oacute;n.";
 choices[92][1] = "Permite la distribuci&oacute;n de aplicaciones Java sin instalaci&oacute;n adicional y desde cualquier navegador web.";
 choices[92][2] = "Utiliza JNLP (Java LaunchingProtocol) definido en la JSR-56 y basado en XML.";
 choices[92][3] = "Las dos anteriores son ciertas.";
 answers[92] = choices[92][3];
 units[92] = "60";
 comments[92] = "Id Pregunta: 11215. ";


//  Id pregunta: 11217 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  En relaci&oacute;n con las interfaces de programaci&oacute;n para crear GUI en Java:";
 choices[93]= new Array();
 choices[93][0] = "La&nbsp;Java Foundation Classes&nbsp;(JFC) es un framework gr&aacute;fico para construir interfaces gr&aacute;ficas de usuario (GUIs)  basadas en&nbsp;Java y est&aacute; compuesto por AWT,Swing&nbsp;y&nbsp;Java 2D.";
 choices[93][1] = "Aunque Swing est&aacute; basado en AWT, se trata de una implementaci&oacute;n de controles gr&aacute;ficos en Java puro.";
 choices[93][2] = "JavaFX, aunque est&aacute; incluido en el JDK/JRE, no est&aacute; basado en ninguna especificaci&oacute;n est&aacute;ndar JSR sino que es un producto de Oracle.";
 choices[93][3] = "Todas las respuestas son verdaderas.";
 answers[93] = choices[93][3];
 units[93] = "60";
 comments[93] = "Id Pregunta: 11217. ";


//  Id pregunta: 11223 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  En el Framework de .NET, los servicios web:";
 choices[94]= new Array();
 choices[94][0] = "Se definen en ficheros de extensi&oacute;n .asmx incluyendo la directiva WebService.";
 choices[94][1] = "ASP.NET no se puede integrar f&aacute;cilmente con tecnolog&iacute;as como AJAX para construir aplicaciones RIA.";
 choices[94][2] = "Los servicios Web WCF pueden ser SOAP o REST, aunque no soportan un formato no XML como JSON.";
 choices[94][3] = "Los servicios WCF (Windows Communication Foundation) siempre se ejecutan directamente sobre TCP.";
 answers[94] = choices[94][0];
 units[94] = "59";
 comments[94] = "Id Pregunta: 11223. ";


//  Id pregunta: 11264 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Seleccione la opci&oacute;n correcta m&aacute;s precisa sobre las obligaciones previas a la expedici&oacute;n de certificados reconocidos incluida en la ley de firma electr&oacute;nica:";
 choices[95]= new Array();
 choices[95][0] = "Asegurarse de que el firmante est&aacute; en posesi&oacute;n de los datos de creaci&oacute;n de firma correspondientes a los de verificaci&oacute;n que constan en el certificado.";
 choices[95][1] = "Asegurarse de que el firmante tiene el control exclusivo sobre el uso de los datos de creaci&oacute;n de firma correspondientes a los de verificaci&oacute;n que constan en el certificado.";
 choices[95][2] = "La respuesta B) es correcta, la cual fue a&ntilde;adida por la ley 25/2015 de reducci&oacute;n de la carga financiera y otras medidas de orden social, que introduc&iacute;a cambios en la Ley 59/2003 de firma electr&oacute;nica para dar soporte jur&iacute;dico a la denominada firma en la nube.";
 choices[95][3] = "La respuesta A) es correcta, ya que la &uacute;ltima modificaci&oacute;n a la ley de firma electr&oacute;nica fue realizada por  la ley 9/2014 General de Telecomunicaciones, que ampliaba el periodo de validez de los certificados reconocidos a 5 a&ntilde;os.";
 answers[95] = choices[95][2];
 units[95] = "73";
 comments[95] = "Id Pregunta: 11264. ";


//  Id pregunta: 11486 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Seg&uacute;n el art&iacute;culo 26 de la Ley de Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas Ley 39/2015 respecto a la validez de documentos electr&oacute;nicos administrativos, es FALSO que ";
 choices[96]= new Array();
 choices[96][0] = "Deber&aacute;n contener informaci&oacute;n de cualquier naturaleza archivada en un soporte electr&oacute;nico seg&uacute;n un formato determinado susceptible de identificaci&oacute;n y tratamiento diferenciado.";
 choices[96][1] = "Deber&aacute;n incorporar metadatos m&iacute;nimos exigidos.";
 choices[96][2] = "Deber&aacute;n incorporar una referencia temporal del momento en que han sido emitidos.";
 choices[96][3] = "Deber&aacute;n incorporar firma electr&oacute;nica aquellos documentos electr&oacute;nicos que sean publicados por las AA.PP con car&aacute;cter meramente informativo.";
 answers[96] = choices[96][3];
 units[96] = "43";
 comments[96] = "Id Pregunta: 11486. NULL";


//  Id pregunta: 11516 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  La RFC del IETF que hace referencia al modelo de directorio LDAP es:";
 choices[97]= new Array();
 choices[97][0] = "RFC 3161";
 choices[97][1] = "RFC 4510";
 choices[97][2] = "RFC 4120";
 choices[97][3] = "RFC 6101";
 answers[97] = choices[97][1];
 units[97] = "73";
 comments[97] = "Id Pregunta: 11516. NULL";


//  Id pregunta: 11678 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  UDDI se corresponde con las siglas:";
 choices[98]= new Array();
 choices[98][0] = "Universal Description, Discovery and Integration";
 choices[98][1] = "Uniform Description, Discovery and Integration";
 choices[98][2] = "Universal Description, Discovery and Information";
 choices[98][3] = "Unic Description, Discovery and Information";
 answers[98] = choices[98][0];
 units[98] = "51, 69";
 comments[98] = "Id Pregunta: 11678. ";


//  Id pregunta: 11745 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  como se puede asegurar la accesibilidad en los m&oacute;viles?";
 choices[99]= new Array();
 choices[99][0] = "web responsive";
 choices[99][1] = "WPA";
 choices[99][2] = "Web accesibility";
 choices[99][3] = "WSUS";
 answers[99] = choices[99][0];
 units[99] = "39";
 comments[99] = "Id Pregunta: 11745. ";


