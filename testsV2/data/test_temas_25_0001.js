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

//  Id pregunta: 10 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l es la decisi&oacute;n del Consejo de las Comunidades Europeas que fija la pol&iacute;tica comunitaria sobre las compras p&uacute;blicas en el sector de la tecnolog&iacute;a de la informaci&oacute;n y de las comunicaciones?:";
 choices[0]= new Array();
 choices[0][0] = "Decisi&oacute;n 87-95-CEE";
 choices[0][1] = "Decreto 88-91-CEE";
 choices[0][2] = "Decreto 88-90-CEE";
 choices[0][3] = "Decisi&oacute;n 91-88-CEE";
 answers[0] = choices[0][0];
 units[0] = "40";
 comments[0] = "Id Pregunta: 10. ";


//  Id pregunta: 56 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Cu&aacute;ntos niveles de prioridad hay definidos en WAI?";
 choices[1]= new Array();
 choices[1][0] = "2";
 choices[1][1] = "3";
 choices[1][2] = "4";
 choices[1][3] = "5";
 answers[1] = choices[1][1];
 units[1] = "39";
 comments[1] = "Id Pregunta: 56. ";


//  Id pregunta: 235 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  En relaci&oacute;n con la gu&iacute;a de portabilidad X/Open XPG4, el perfil XPG4 Base:";
 choices[2]= new Array();
 choices[2][0] = "No existe";
 choices[2][1] = "Supone la base de un servidor de base de datos";
 choices[2][2] = "Es equivalente al XPG3 y la base para el resto de los perfiles";
 choices[2][3] = "Para obtenerlo, es necesario certificar el componente XPG4 BSFT";
 answers[2] = choices[2][2];
 units[2] = "40";
 comments[2] = "Id Pregunta: 235. XPG";


//  Id pregunta: 309 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  La gu&iacute;a XPG 4 de X/OPEN apareci&oacute; en:";
 choices[3]= new Array();
 choices[3][0] = "1989";
 choices[3][1] = "1990";
 choices[3][2] = "1991";
 choices[3][3] = "1992";
 answers[3] = choices[3][3];
 units[3] = "40";
 comments[3] = "Id Pregunta: 309. XPG";


//  Id pregunta: 639 AÃ±o de creación de pregunta: 2006-01-01
 questions[4]= "5)  Cu&aacute;l de las siguientes frases es cierta sobre las pautas de accesibilidad WAI en la versi&oacute;n WCAG 2.0:";
 choices[4]= new Array();
 choices[4][0] = "La Prioridad 1 es para los puntos de verificaci&oacute;n que el desarrollador debe satisfacer.";
 choices[4][1] = "Las pautas WAI son una especificaci&oacute;n de W3C, al igual que HTML, CSS, XML y SGML";
 choices[4][2] = "La Prioridad 3 el desarrollador puede satisfacerla; de lo contrario, algunas personas hallar&aacute;n dificultades para acceder a la informaci&oacute;n.";
 choices[4][3] = "El nivel de adecuaci&oacute;n &quot;Doble A&quot; (AA) incluye los puntos de verificaci&oacute;n de prioridad 1 y al menos uno de prioridad 2.";
 answers[4] = choices[4][2];
 units[4] = "39";
 comments[4] = "Id Pregunta: 639. ";


//  Id pregunta: 643 AÃ±o de creación de pregunta: 2006-01-01
 questions[5]= "6)  Cu&aacute;l de las siguientes afirmaciones sobre X/OPEN es incorrecta:";
 choices[5]= new Array();
 choices[5][0] = "POSIX (Portable Operating System Interface), creado por X/OPEN, consite en la creaci&oacute;n de interfaces est&aacute;ndares de sistema operativo.";
 choices[5][1] = "CAE (common Application Enviroment), creado por X/OPEN, est&aacute; basado en est&aacute;ndares internacionales y de hecho.";
 choices[5][2] = "XPG es la gu&iacute;a de portabilidad de X/OPEN";
 choices[5][3] = "X/Open es una compa&ntilde;&iacute;a independiente, sin &aacute;nimo de lucro, compuesta por usuarios, vendedores independientes de software y vendedores de sistemas inform&aacute;ticos de todo el mundo.";
 answers[5] = choices[5][0];
 units[5] = "40";
 comments[5] = "Id Pregunta: 643. ";


//  Id pregunta: 666 AÃ±o de creación de pregunta: 2006-01-01
 questions[6]= "7)  El est&aacute;ndar  de servicios de directorio recogido en la arquitectura Open Systems Interconnection, para la Interconexi&oacute;n de Sistemas Abiertos es";
 choices[6]= new Array();
 choices[6][0] = "X.600";
 choices[6][1] = "Open LDAP";
 choices[6][2] = "X.400";
 choices[6][3] = "X.500";
 answers[6] = choices[6][3];
 units[6] = "40";
 comments[6] = "Id Pregunta: 666. ";


//  Id pregunta: 824 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;A qu&eacute; hace referencia el est&aacute;ndar LDAP?:";
 choices[7]= new Array();
 choices[7][0] = "Comprensi&oacute;n de datos";
 choices[7][1] = "Directorio electr&oacute;nico";
 choices[7][2] = "Comprensi&oacute;n de datos";
 choices[7][3] = "Protocolo de transporte OSI";
 answers[7] = choices[7][1];
 units[7] = "73";
 comments[7] = "Id Pregunta: 824. ";


//  Id pregunta: 866 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Cu&aacute;l de los siguientes es un protocolo de directorio?:";
 choices[8]= new Array();
 choices[8][0] = "MIME";
 choices[8][1] = "LDAP";
 choices[8][2] = "SMNP";
 choices[8][3] = "BGP";
 answers[8] = choices[8][1];
 units[8] = "73";
 comments[8] = "Id Pregunta: 866. ";


//  Id pregunta: 895 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;En qu&eacute; conjunto de caracteres est&aacute; basado XML?:";
 choices[9]= new Array();
 choices[9][0] = "Unicode";
 choices[9][1] = "ITU 396-4";
 choices[9][2] = "ANSI 328";
 choices[9][3] = "Ninguno de los anteriores";
 answers[9] = choices[9][0];
 units[9] = "69";
 comments[9] = "Id Pregunta: 895. NULL";


//  Id pregunta: 938 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Qu&eacute; relaci&oacute;n existe entre SGML y HTML?:";
 choices[10]= new Array();
 choices[10][0] = "HTML es un subconjunto de SGML";
 choices[10][1] = "SGML es un subconjunto de HTML";
 choices[10][2] = "SGML se inspir&oacute; en HTML";
 choices[10][3] = "No tienen relaci&oacute;n";
 answers[10] = choices[10][0];
 units[10] = "69";
 comments[10] = "Id Pregunta: 938. NULL";


//  Id pregunta: 1195 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Indique una caracter&iacute;stica falsa de Java:";
 choices[11]= new Array();
 choices[11][0] = "Es interpretado y portable a distintas plataformas";
 choices[11][1] = "Soporta programaci&oacute;n multihilo (multithreading)";
 choices[11][2] = "Es un entorno seguro porque el sistema runtime incorpora protecci&oacute;n contra virus y alteraciones de c&oacute;digo";
 choices[11][3] = "Todas las anteriores son caracter&iacute;sticas de Java";
 answers[11] = choices[11][3];
 units[11] = "60";
 comments[11] = "Id Pregunta: 1195. JCED - Preparatic XVII";


//  Id pregunta: 1198 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Java ME:";
 choices[12]= new Array();
 choices[12][0] = "Es una versi&oacute;n de la tecnolog&iacute;a Java2 para plataformas m&oacute;viles";
 choices[12][1] = "Es una version de la tecnolog&iacute;a Java2 orientada a electrodom&eacute;sticos";
 choices[12][2] = "Es una version de la tecnolog&iacute;a Java2 orientada a sistemas dom&oacute;ticos";
 choices[12][3] = "Todas las anteriores respuestas son falsas";
 answers[12] = choices[12][0];
 units[12] = "60";
 comments[12] = "Id Pregunta: 1198. NULL";


//  Id pregunta: 1496 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Indicar cu&aacute;l de las siguientes afirmaciones no es cierta acerca del lenguaje HTML:";
 choices[13]= new Array();
 choices[13][0] = "Es un lenguaje de programaci&oacute;n";
 choices[13][1] = "Permite referencias a otros documentos o recursos de la red";
 choices[13][2] = "Permite la inclusi&oacute;n de marcas (tags) para controlar los aspectos de la presentaci&oacute;n";
 choices[13][3] = "Para escribir en HTML se necesita al menos un editor ASCII";
 answers[13] = choices[13][0];
 units[13] = "69";
 comments[13] = "Id Pregunta: 1496. NULL";


//  Id pregunta: 1653 AÃ±o de creación de pregunta: 2004-01-01
 questions[14]= "15)  &iquest;Cu&aacute;l de los siguientes protocolos se puede considerar como menos seguro para la realizaci&oacute;n de una transacci&oacute;n de comercio electr&oacute;nico?";
 choices[14]= new Array();
 choices[14][0] = "SET";
 choices[14][1] = "SSL";
 choices[14][2] = "3D-Secure";
 choices[14][3] = "SPA/UCAF";
 answers[14] = choices[14][1];
 units[14] = "70";
 comments[14] = "Id Pregunta: 1653. NULL";


//  Id pregunta: 1835 AÃ±o de creación de pregunta: 2006-01-01
 questions[15]= "16)  &iquest;Qu&eacute; es un DTD?";
 choices[15]= new Array();
 choices[15][0] = "Define la forma en que los documentos XML deben conectarse entre s&iacute;";
 choices[15][1] = "Descripci&oacute;n del formato en el que se desea que aparezcan las entidades definidas en un documento";
 choices[15][2] = "Definici&oacute;n de la gram&aacute;tica de un documento";
 choices[15][3] = "Permite controlar el formato de los documentos HTML con descripciones particulares";
 answers[15] = choices[15][2];
 units[15] = "69";
 comments[15] = "Id Pregunta: 1835. NULL";


//  Id pregunta: 1917 AÃ±o de creación de pregunta: 2006-01-01
 questions[16]= "17)  La palabra clave de Visual Basic.NET &quot;overrides&quot; se utiliza para:";
 choices[16]= new Array();
 choices[16][0] = "Heredar todos los miembros no privados de la clase base";
 choices[16][1] = "Especificar qu&eacute; clase no se puede utilizar como clase base";
 choices[16][2] = "Indicar que el procedimiento reemplaza un procedimiento de la clase base";
 choices[16][3] = "Invocar c&oacute;digo escrito en una clase desde la propia clase";
 answers[16] = choices[16][2];
 units[16] = "59";
 comments[16] = "Id Pregunta: 1917. ";


//  Id pregunta: 1951 AÃ±o de creación de pregunta: 2006-01-01
 questions[17]= "18)  &iquest;Qu&eacute; es un &quot;Parser&quot; XML?";
 choices[17]= new Array();
 choices[17][0] = "Un m&oacute;dulo o programa que se ocupa de archivar en local los c&oacute;digos XML";
 choices[17][1] = "Un m&oacute;dulo, biblioteca o programa que se ocupa de transformar un archivo de texto en una representaci&oacute;n externa";
 choices[17][2] = "Un m&oacute;dulo, biblioteca o programa que se ocupa de transformar un archivo de texto en una representaci&oacute;n interna";
 choices[17][3] = "Un m&oacute;dulo o programa que se ocupa de archivar en la correspondiente Base de Datos los c&oacute;digos XML";
 answers[17] = choices[17][2];
 units[17] = "69";
 comments[17] = "Id Pregunta: 1951. NULL";


//  Id pregunta: 4246 AÃ±o de creación de pregunta: 2007-01-01
 questions[18]= "19)  Seg&uacute;n la Ley 11/2007 de Acceso Electr&oacute;nico de los Ciudadanos a los Servicios P&uacute;blicos:";
 choices[18]= new Array();
 choices[18][0] = "Se deja en manos de las propias Administraciones determinar si los ciudadanos van a poder de modo efectivo, o no, relacionarse por medios electr&oacute;nicos con ellas.";
 choices[18][1] = "Afecta s&oacute;lo a la Administraci&oacute;n General del Estado, aunque se espera que el resto de administraciones (auton&oacute;mica y local) adopten algunas de las medidas expresadas en la ley de forma voluntaria.";
 choices[18][2] = "Se garantiza el derecho del ciudadano a no tener que presentar informaci&oacute;n que se encuentre ya en poder de las administraciones.";
 choices[18][3] = "Las Administraciones podr&aacute;n permitir a los ciudadanos que consulten el estado de tramitaci&oacute;n de los procedimientos que se tengan en marcha, pero en ning&uacute;n caso estar&aacute;n obligadas a ello.";
 answers[18] = choices[18][2];
 units[18] = "43";
 comments[18] = "Id Pregunta: 4246. Sobre Proyecto LAECAP";


//  Id pregunta: 4385 AÃ±o de creación de pregunta: 2007-01-01
 questions[19]= "20)  J2EE es:";
 choices[19]= new Array();
 choices[19][0] = "Un producto.";
 choices[19][1] = "Un servicio.";
 choices[19][2] = "Un estandar.";
 choices[19][3] = "Un entorno de desarrollo.";
 answers[19] = choices[19][2];
 units[19] = "60";
 comments[19] = "Id Pregunta: 4385. Es una especificaci&oacute;n que es est&aacute;ndar.";


//  Id pregunta: 4533 AÃ±o de creación de pregunta: 2007-01-01
 questions[20]= "21)  En java, &iquest;como se hace referencia al objeto actual sobre el que ha sido Ilamado el m&eacute;todo que se esta ejecutando?";
 choices[20]= new Array();
 choices[20][0] = "Con Ia referencia this.";
 choices[20][1] = "Con la referencia null.";
 choices[20][2] = "No es posible.";
 choices[20][3] = "Invocando el m&eacute;todo get.";
 answers[20] = choices[20][0];
 units[20] = "60";
 comments[20] = "Id Pregunta: 4533. NULL";


//  Id pregunta: 4569 AÃ±o de creación de pregunta: 2007-01-01
 questions[21]= "22)  Para hacer una Ilamada a un procedimiento almacenado trabajando con JDBC podemos utilizar un objeto CallableStatement. Si el procedimiento almacenado devuelve mas de un conjunto de resultados, &iquest;que m&eacute;todo deberemos invocar?:";
 choices[21]= new Array();
 choices[21][0] = "execute";
 choices[21][1] = "executeQuery";
 choices[21][2] = "executeProcedure";
 choices[21][3] = "executeUpdate";
 answers[21] = choices[21][0];
 units[21] = "60";
 comments[21] = "Id Pregunta: 4569. NULL";


//  Id pregunta: 4954 AÃ±o de creación de pregunta: 2003-01-01
 questions[22]= "23)  &iquest;Qu&eacute; t&eacute;cnica no es aplicable para dise&ntilde;ar un producto web usable y centrado en el usuario?:";
 choices[22]= new Array();
 choices[22][0] = "Card Sorting.";
 choices[22][1] = "L&oacute;gica Fuzzy.";
 choices[22][2] = "Eye Tracking.";
 choices[22][3] = "An&aacute;lisis de Secuencia.";
 answers[22] = choices[22][1];
 units[22] = "39";
 comments[22] = "Id Pregunta: 4954. Examen TIC B 2007";


//  Id pregunta: 4998 AÃ±o de creación de pregunta: 2003-01-01
 questions[23]= "24)  Indique cu&aacute;l de las siguientes afirmaciones es incorrecta en relaci&oacute;n con la m&aacute;quina virtual de Java:";
 choices[23]= new Array();
 choices[23][0] = "La implementaci&oacute;n de la m&aacute;quina virtual de Java es independiente de la plataforma sobre la que se ejecute";
 choices[23][1] = "La principal ventaja que aporta es la portabilidad de las aplicaciones escritas en Java entre diferentesplataformas";
 choices[23][2] = "Existen versiones de m&aacute;quina virtual implantadas por hardware";
 choices[23][3] = "El c&oacute;digo que ejecuta la m&aacute;quina virtual se llama &quot;Java Bytecode&quot;";
 answers[23] = choices[23][0];
 units[23] = "60";
 comments[23] = "Id Pregunta: 4998. Examen TIC A 2007";


//  Id pregunta: 5087 AÃ±o de creación de pregunta: 2003-01-01
 questions[24]= "25)  El est&aacute;ndar conocido como ISO/IEC 9594-1:2008 se corresponde con:";
 choices[24]= new Array();
 choices[24][0] = "LDAP";
 choices[24][1] = "UIT-T X-500";
 choices[24][2] = "HTML";
 choices[24][3] = "SQL";
 answers[24] = choices[24][1];
 units[24] = "73";
 comments[24] = "Id Pregunta: 5087. ";


//  Id pregunta: 5548 AÃ±o de creación de pregunta: 2003-01-01
 questions[25]= "26)  Respecto a las Transmisiones de datos entre Administraciones P&uacute;blicas, se&ntilde;ale la verdadera:";
 choices[25]= new Array();
 choices[25][0] = "Cada Administraci&oacute;n deber&aacute; facilitar, en todo caso, el acceso de las restantes Administraciones a los datos relativos a los interesados, que obren en su poder. ";
 choices[25][1] = "Se facilitar&aacute; dicho acceso &uacute;nicamente cuando una norma con rango de Ley as&iacute; lo determine.";
 choices[25][2] = "Se facilitar&aacute; dicho acceso para los datos en soporte electr&oacute;nico precisando de consentimiento del interesado, que podr&aacute; recabarse de forma electr&oacute;nica, en caso de tratarse de datos de caracter personal.";
 choices[25][3] = "Cada Administraci&oacute;n deber&aacute; facilitar el acceso de las restantes Administraciones a los datos relativos a los interesados que obren en su poder &uacute;nicamente si el interesado da su consentimiento.";
 answers[25] = choices[25][2];
 units[25] = "43";
 comments[25] = "Id Pregunta: 5548. NULL";


//  Id pregunta: 5706 AÃ±o de creación de pregunta: 2003-01-01
 questions[26]= "27)  La ley 11/2007 que regula el acceso electr&oacute;nico de los ciudadanos  a los servicios p&uacute;blicos, transpone aspectos de:";
 choices[26]= new Array();
 choices[26][0] = "De la directiva 200/31/CE relativos a Servicios de la Sociedad de la Informaci&oacute;n.";
 choices[26][1] = "De la Directiva 2006/123/CE relativa a los servicios en el mercado interior.";
 choices[26][2] = "De la Directiva 2002/58/CE sobre la privacidad y las comunicaciones electr&oacute;nicas.";
 choices[26][3] = "No recoge la transposici&oacute;n de articulado relativo a ninguna Directiva.";
 answers[26] = choices[26][1];
 units[26] = "43";
 comments[26] = "Id Pregunta: 5706. NULL";


//  Id pregunta: 5720 AÃ±o de creación de pregunta: 2009-01-01
 questions[27]= "28)  En an&aacute;lisis de XML, indique cu&aacute;l de las siguientes expresiones NO es correcta:";
 choices[27]= new Array();
 choices[27][0] = "El modelo DOM procesa el documento XML completo y lo almacena en memoria";
 choices[27][1] = "En el modelo SAX puede procesar el documento XML a trav&eacute;s de eventos";
 choices[27][2] = "El modelo SAX procesa el documento XML y genera un &aacute;rbol";
 choices[27][3] = "El modelo DOM procesa el documento XML y lo modeliza en forma de &aacute;rbol";
 answers[27] = choices[27][2];
 units[27] = "69";
 comments[27] = "Id Pregunta: 5720. MAP 2008 A1";


//  Id pregunta: 5722 AÃ±o de creación de pregunta: 2009-01-01
 questions[28]= "29)  XML es un lenguaje extensible de marcas. Se&ntilde;ale qu&eacute; significa extensible:";
 choices[28]= new Array();
 choices[28][0] = "No est&aacute; limitado el tama&ntilde;o de los ficheros.";
 choices[28][1] = "Se pueden incorporar nuevas etiquetas, sin tener que cambiar la aplicaci&oacute;n que lo lee.";
 choices[28][2] = "Los datos van formados mediante etiquetas de lo que significan.";
 choices[28][3] = "Si las reglas sint&aacute;cticas del DTD se cumplen, el documento es v&aacute;lido.";
 answers[28] = choices[28][1];
 units[28] = "69";
 comments[28] = "Id Pregunta: 5722. MAP 2008 A2";


//  Id pregunta: 5781 AÃ±o de creación de pregunta: 2009-01-01
 questions[29]= "30)  Se&ntilde;ale cu&aacute;l de los siguientes objetos forma parte de los componentes proveedores de datos .NET Framework de ADO.NET";
 choices[29]= new Array();
 choices[29][0] = "DataSet";
 choices[29][1] = "DataTable";
 choices[29][2] = "DataAdapter";
 choices[29][3] = "RecordSet";
 answers[29] = choices[29][2];
 units[29] = "59";
 comments[29] = "Id Pregunta: 5781. MAP 2008 A2";


//  Id pregunta: 5793 AÃ±o de creación de pregunta: 2009-01-01
 questions[30]= "31)  De acuerdo con la Ley 11/2007 de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, se&ntilde;ale cu&aacute;l de las siguientes definiciones es FALSA:";
 choices[30]= new Array();
 choices[30][0] = "Actuaci&oacute;n administrativa automatizada: Actuaci&oacute;n administrativa producida por un Sistema de informaci&oacute;n adecuadamente programado sin necesidad de intervenci&oacute;n de una persona f&iacute;sica en cada caso singular. Incluye la producci&oacute;n de actos de tr&aacute;mite o resolutorios de procedimientos, as&iacute; como de meros actos de comunicaci&oacute;n.";
 choices[30][1] = "Aplicaci&oacute;n: Programa o conjunto de programas cuyo objeto es la resoluci&oacute;n de un problema mediante el uso de inform&aacute;tica.";
 choices[30][2] = "Aplicaci&oacute;n de fuentes abiertas: Aquella que se distribuye con una licencia que permite la libertad de ejecutarla, de conocer el c&oacute;digo fuente, de modificarla o mejorarla y de redistribuir copias a otros";
 choices[30][3] = "Autenticaci&oacute;n: Capacidad de los sistemas de informaci&oacute;n, y por ende de los procedimientos a los que &eacute;stos dan soporte, de compartir datos y posibilitar el intercambio de informaci&oacute;n y conocimiento entre ellos.";
 answers[30] = choices[30][3];
 units[30] = "43";
 comments[30] = "Id Pregunta: 5793. MAP 2008 A2";


//  Id pregunta: 5891 AÃ±o de creación de pregunta: 2009-01-01
 questions[31]= "32)  &iquest;Qu&eacute; tecnolog&iacute;a Java permite la invocaci&oacute;n de m&eacute;todos de un objeto remoto?";
 choices[31]= new Array();
 choices[31][0] = "RMI";
 choices[31][1] = "JNI";
 choices[31][2] = "JDBC";
 choices[31][3] = "JRM";
 answers[31] = choices[31][0];
 units[31] = "60";
 comments[31] = "Id Pregunta: 5891. NULL";


//  Id pregunta: 5894 AÃ±o de creación de pregunta: 2009-01-01
 questions[32]= "33)  &iquest;Cu&aacute;l de las siguientes no corresponde a una tecnolog&iacute;a est&aacute;ndar Java?";
 choices[32]= new Array();
 choices[32][0] = "JSTL";
 choices[32][1] = "JavaScript";
 choices[32][2] = "JNDI";
 choices[32][3] = "JavaCard";
 answers[32] = choices[32][1];
 units[32] = "60";
 comments[32] = "Id Pregunta: 5894. NULL";


//  Id pregunta: 6119 AÃ±o de creación de pregunta: 2010-01-01
 questions[33]= "34)  De acuerdo con la Ley 11/2007, &iquest;es posible la destrucci&oacute;n de documentos emitidos originalmente en soporte papel y de los que se haya hecho copia electr&oacute;nica?";
 choices[33]= new Array();
 choices[33][0] = "S&iacute;, la Ley lo permite, pero antes cada Administraci&oacute;n debe regular los t&eacute;rminos y condiciones de este proceso.";
 choices[33][1] = "S&iacute;, la Ley lo permite, y no hace falta regular o establecer ninguna condici&oacute;n.";
 choices[33][2] = "No, la Ley no lo permite, porque los documentos en soporte papel est&aacute;n protegidos por ser Patrimonio Hist&oacute;rico Administrativo.";
 choices[33][3] = "S&iacute;, la Ley lo permite, pero s&oacute;lo los documentos no firmados y que no reconozcan derechos subjetivos.";
 answers[33] = choices[33][0];
 units[33] = "43";
 comments[33] = "Id Pregunta: 6119. TIC A 2009";


//  Id pregunta: 6177 AÃ±o de creación de pregunta: 2010-01-01
 questions[34]= "35)  Indique la afirmaci&oacute;n falsa:";
 choices[34]= new Array();
 choices[34][0] = "HTTP es un protocolo sin estado.";
 choices[34][1] = "HTTP es un protocolo estandarizado por IETF.";
 choices[34][2] = "HTTP es un protocolo estandarizado por W3C.";
 choices[34][3] = "La especificaci&oacute;n del protocolo HTTP es la RFC 2616.";
 answers[34] = choices[34][2];
 units[34] = "69";
 comments[34] = "Id Pregunta: 6177. NULL";


//  Id pregunta: 6188 AÃ±o de creación de pregunta: 2010-01-01
 questions[35]= "36)  El Esquema Nacional de Seguridad establece que los sistemas han de ser objeto de una auditor&iacute;a regular ordinaria al menos";
 choices[35]= new Array();
 choices[35][0] = "Cada 6 meses";
 choices[35][1] = "Cada a&ntilde;o";
 choices[35][2] = "Cada 2 a&ntilde;os";
 choices[35][3] = "El Esquema Nacional de Seguridad no especifica nada respecto a auditor&iacute;as";
 answers[35] = choices[35][2];
 units[35] = "43";
 comments[35] = "Id Pregunta: 6188. Art&iacute;culo 34. ";


//  Id pregunta: 6365 AÃ±o de creación de pregunta: 2010-01-01
 questions[36]= "37)  El Esquema Nacional de Seguridad establece que las l&iacute;neas de defensa han de estar constituidas por medidas de distinto tipo, &iquest;Cu&aacute;l de las siguientes no es una de ellos?";
 choices[36]= new Array();
 choices[36][0] = "Organizativa";
 choices[36][1] = "Sem&aacute;ntica";
 choices[36][2] = "L&oacute;gica";
 choices[36][3] = "F&iacute;sica";
 answers[36] = choices[36][1];
 units[36] = "43";
 comments[36] = "Id Pregunta: 6365. Art&iacute;culo 8 ENS";


//  Id pregunta: 6373 AÃ±o de creación de pregunta: 2010-01-01
 questions[37]= "38)  &iquest;Cu&aacute;l de los siguientes no es un grupo de medidas de seguridad de los establecidos en el Esquema Nacional de Seguridad?";
 choices[37]= new Array();
 choices[37][0] = "Marco de gesti&oacute;n";
 choices[37][1] = "Marco organizativo";
 choices[37][2] = "Marco operacional";
 choices[37][3] = "Medidas de protecci&oacute;n";
 answers[37] = choices[37][0];
 units[37] = "43";
 comments[37] = "Id Pregunta: 6373. Anexo II ENS";


//  Id pregunta: 6374 AÃ±o de creación de pregunta: 2010-01-01
 questions[38]= "39)  &iquest;Qu&eacute; Real Decreto define el Esquema Nacional de Interoperabilidad?";
 choices[38]= new Array();
 choices[38][0] = "RD 4/2010";
 choices[38][1] = "RD 1671/2009";
 choices[38][2] = "RD 4/2009";
 choices[38][3] = "RD 1671/2007";
 answers[38] = choices[38][0];
 units[38] = "43";
 comments[38] = "Id Pregunta: 6374. NULL";


//  Id pregunta: 6382 AÃ±o de creación de pregunta: 2010-01-01
 questions[39]= "40)  Las normas t&eacute;cnicas de interoperabilidad:";
 choices[39]= new Array();
 choices[39][0] = "Las aprobar&aacute; el Ministerio de la Presidencia, a propuesta del Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica  y las publicar&aacute; mediante Resoluci&oacute;n de la Secretaria de Estado para la Funci&oacute;n P&uacute;blica.";
 choices[39][1] = "Las aprobar&aacute;  la Secretaria de Estado para la Funci&oacute;n P&uacute;blica, a propuesta del Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica  y las publicar&aacute; el Ministerio de la Presidencia mediante Orden Ministerial.";
 choices[39][2] = "Las aprobar&aacute; el Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica  y las publicar&aacute; mediante Resoluci&oacute;n de la Secretaria de Estado para la Funci&oacute;n P&uacute;blica.";
 choices[39][3] = "Las aprobar&aacute; el Ministerio de la Presidencia, a propuesta del Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica  y las publicar&aacute; mediante Real Decreto.";
 answers[39] = choices[39][0];
 units[39] = "43";
 comments[39] = "Id Pregunta: 6382. Disposici&oacute;n adicional primera ENI";


//  Id pregunta: 7145 AÃ±o de creación de pregunta: 2010-01-01
 questions[40]= "41)  En la Ley 11/2007 de 22 de Junio, se regula las condiciones de teletrabajo en la Administraci&oacute;n General del Estado. Estas condiciones deber&iacute;an estar establecidas antes del:";
 choices[40]= new Array();
 choices[40][0] = "1 de marzo de 2008";
 choices[40][1] = "1 de abril de 2008";
 choices[40][2] = "31 de diciembre de 2009";
 choices[40][3] = "31 de diciembre de 2008";
 answers[40] = choices[40][0];
 units[40] = "43";
 comments[40] = "Id Pregunta: 7145. Examen TIC B 2009";


//  Id pregunta: 7319 AÃ±o de creación de pregunta: 2010-01-01
 questions[41]= "42)  &iquest;Qu&eacute; significan las siglas ASP de la tecnolog&iacute;a ASP.NET?";
 choices[41]= new Array();
 choices[41][0] = "Active Server Pages";
 choices[41][1] = "Active Side Pages";
 choices[41][2] = "Archive Server Pages";
 choices[41][3] = "Archive Side Pages";
 answers[41] = choices[41][0];
 units[41] = "59";
 comments[41] = "Id Pregunta: 7319. NULL";


//  Id pregunta: 8201 AÃ±o de creación de pregunta: 2011-01-01
 questions[42]= "43)  Indique la afirmaci&oacute;n INCORRECTA acerca de la BCL (Base Class Library) del framework .Net: ";
 choices[42]= new Array();
 choices[42][0] = "Contiene clases para la manipulaci&oacute;n de archivos gr&aacute;ficos. ";
 choices[42][1] = "Se organiza en clases de acceso a datos, de l&oacute;gica de negocio y de presentaci&oacute;n. ";
 choices[42][2] = "No dispone de clases para la gesti&oacute;n de la seguridad. ";
 choices[42][3] = "No depende del lenguaje de programaci&oacute;n utilizado por el desarrollador. ";
 answers[42] = choices[42][2];
 units[42] = "59";
 comments[42] = "Id Pregunta: 8201. Examen TIC A1 2010";


//  Id pregunta: 8405 AÃ±o de creación de pregunta: 2011-01-01
 questions[43]= "44)  Se&ntilde;ale cu&aacute;l de los siguientes servicios NO se ofrece en la plataforma de validaci&oacute;n y firma electr&oacute;nica @Firma: ";
 choices[43]= new Array();
 choices[43][0] = "Sellado de tiempo (TSA) seg&uacute;n la RFC 3161";
 choices[43][1] = "Validaci&oacute;n, conforme a la RFC 3280, de certificados X.509 de todas las Autoridades de Certificaci&oacute;n reconocidas en el pa&iacute;s por el Ministerio de Industria, Turismo y Comercio ";
 choices[43][2] = "Expedici&oacute;n de certificados de firma electr&oacute;nica del personal al servicio de las Administraciones P&uacute;blicas para el cumplimiento de sus funciones";
 choices[43][3] = "Validaci&oacute;n de firma v&iacute;a servicios web (WS) de un elemento firmado. ";
 answers[43] = choices[43][2];
 units[43] = "44";
 comments[43] = "Id Pregunta: 8405. Examen TIC A2 2010";


//  Id pregunta: 8438 AÃ±o de creación de pregunta: 2011-01-01
 questions[44]= "45)  &iquest;Cu&aacute;l de los siguientes elementos no es obligatorio incluir en la disposici&oacute;n de creaci&oacute;n de un registro electr&oacute;nico seg&uacute;n el RD 1671/2009?";
 choices[44]= new Array();
 choices[44][0] = "&Oacute;rgano o unidad responsable de la gesti&oacute;n.";
 choices[44][1] = "Fecha y hora oficial y referencia al calendario de d&iacute;as inh&aacute;biles que sea aplicable.";
 choices[44][2] = "Medios de presentaci&oacute;n de documentaci&oacute;n complementaria a una comunicaci&oacute;n, escrito o solicitud previamente presentada en el registro electr&oacute;nico.";
 choices[44][3] = "Buzones de correo electr&oacute;nico corporativo y/o fax asignado a los empleados p&uacute;blicos o a las distintas unidades y &oacute;rganos.";
 answers[44] = choices[44][3];
 units[44] = "43";
 comments[44] = "Id Pregunta: 8438. ";


//  Id pregunta: 8608 AÃ±o de creación de pregunta: 2011-01-01
 questions[45]= "46)  &iquest;En que norma ISO viene reflejada la usabilidad del software?";
 choices[45]= new Array();
 choices[45][0] = "ISO/IEC 9126";
 choices[45][1] = "ISO 8859";
 choices[45][2] = "ISO 14000";
 choices[45][3] = "ISO/IEC 14496";
 answers[45] = choices[45][0];
 units[45] = "39";
 comments[45] = "Id Pregunta: 8608. Examen TIC A2 2010 interna";


//  Id pregunta: 8732 AÃ±o de creación de pregunta: 2011-01-01
 questions[46]= "47)  Los ciudadanos podr&aacute;n utilizar el siguiente sistema de firma electr&oacute;nica para relacionarse con las Administraciones P&uacute;blicas:";
 choices[46]= new Array();
 choices[46][0] = "Siempre se exigir&aacute; firma electr&oacute;nica reconocida, como garant&iacute;a jur&iacute;dica.";
 choices[46][1] = "&Uacute;nicamente el ser&aacute; v&aacute;lido el DNI electr&oacute;nico, una vez extendido a toda la poblaci&oacute;n";
 choices[46][2] = "Firma electr&oacute;nica avanzada.";
 choices[46][3] = "Est&aacute; pendiente de desarrollo reglamentario el uso efectivo de la firma electr&oacute;nica en esos casos.";
 answers[46] = choices[46][2];
 units[46] = "43";
 comments[46] = "Id Pregunta: 8732. Examen TIC A2 2010 interna";


//  Id pregunta: 8747 AÃ±o de creación de pregunta: 2011-01-01
 questions[47]= "48)  En el &aacute;mbito de la Administraci&oacute;n General del Estado, &iquest;es posible la notificaci&oacute;n mediante recepci&oacute;n en direcci&oacute;n de correo electr&oacute;nico que los ciudadanos elijan?";
 choices[47]= new Array();
 choices[47][0] = "No est&aacute; previsto para tal fin el uso de una direcci&oacute;n de correo electr&oacute;nico que elijan los ciudadanos, sino s&oacute;lo el uso de la denominada direcci&oacute;n electr&oacute;nica habilitada";
 choices[47][1] = "SI, siempre que se genere autom&aacute;ticamente y con independencia de la voluntad del destinatario sendos acuses de salida y recibo, que dejen constancia de su emisi&oacute;n y recepci&oacute;n y que so originen, respectivamente, en el momento del envi&oacute; y de acceso al contenido de la notificaci&oacute;n";
 choices[47][2] = "Si, siempre que se genere autom&aacute;ticamente y con independencia de la voluntad del destinatario un acuse de recibo que deje constancia de su recepci&oacute;n y que se origine en el momento del acceso al contenido de la notificaci&oacute;n.";
 choices[47][3] = "SI, siempre que se genere autom&aacute;ticamente y con independencia de la voluntad del destinatario un acuso de recibo que deje constancia de su recepci&oacute;n y que se origine en el momento del acceso al contenido c&iacute;e la notificaci&oacute;n Asimismo, el ciudadano podr&aacute; solicitar un acuse de salida, que deje constancia de su emisi&oacute;n y que se origine en el momento del env&iacute;o de la notificaci&oacute;n";
 answers[47] = choices[47][2];
 units[47] = "43";
 comments[47] = "Id Pregunta: 8747. Examen TIC A2 2010 interna";


//  Id pregunta: 8793 AÃ±o de creación de pregunta: 2011-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l debe ser la parte local del elemento ra&iacute;z de un documento XHTML 2.0 de conformidad estricta?";
 choices[48]= new Array();
 choices[48][0] = "La parte local del elemento ra&iacute;z del documento debe ser &quot;html&quot;.";
 choices[48][1] = "La parte local del elemento ra&iacute;z del documento debe ser &quot;xhtml&quot;. ";
 choices[48][2] = "La parte local del elemento ra&iacute;z del documento debe ser &quot;xml&quot;. ";
 choices[48][3] = "No puede existir una declaraci&oacute;n DOCTYPE.";
 answers[48] = choices[48][0];
 units[48] = "69";
 comments[48] = "Id Pregunta: 8793. Examen UPM A2 2011";


//  Id pregunta: 8798 AÃ±o de creación de pregunta: 2011-01-01
 questions[49]= "50)  &iquest;Para qu&eacute; se usa el componente ASP.NET?";
 choices[49]= new Array();
 choices[49][0] = "Para construir aplicaciones y servicios Web";
 choices[49][1] = "Para conectar las aplicaciones a las bases de datos";
 choices[49][2] = "Para construir la interface del usuario";
 choices[49][3] = "Para conectar los programas";
 answers[49] = choices[49][0];
 units[49] = "59, 115";
 comments[49] = "Id Pregunta: 8798. Examen UPM A2 2011";


//  Id pregunta: 8799 AÃ±o de creación de pregunta: 2011-01-01
 questions[50]= "51)  &iquest;Con qu&eacute; siglas se identifica el Common Language Runtime de la plataforma .NET?";
 choices[50]= new Array();
 choices[50][0] = "CLRUN";
 choices[50][1] = "CLRNET";
 choices[50][2] = "COLR";
 choices[50][3] = "CLR";
 answers[50] = choices[50][3];
 units[50] = "59, 115";
 comments[50] = "Id Pregunta: 8799. Examen UPM A2 2011";


//  Id pregunta: 8839 AÃ±o de creación de pregunta: 2011-01-01
 questions[51]= "52)  De acuerdo con la Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los Servicios P&uacute;blicos, son derechos de los ciudadanos en relaci&oacute;n con la utilizaci&oacute;n de los medios electr&oacute;nicos en la actividad administrativa:";
 choices[51]= new Array();
 choices[51][0] = "Que los servicios p&uacute;blicos se presten por medios electr&oacute;nicos, aunque sea con menor calidad que los medios presenciales ";
 choices[51][1] = "Que las personas jur&iacute;dicas puedan utilizar en todo caso los sistemas de firma electr&oacute;nica del Documento Nacional de Identidad para cualquier tr&aacute;mite electr&oacute;nico con cualquier Administraci&oacute;n P&uacute;blica, pero no as&iacute; las personas f&iacute;sicas.";
 choices[51][2] = "Que las personas f&iacute;sicas puedan utilizar en todo caso los sistemas de firma electr&oacute;nica del Documento Nacional de Identidad para cualquier tr&aacute;mite electr&oacute;nico con cualquier Administraci&oacute;n P&uacute;blica, excluy&eacute;ndose otros sistemas de firma";
 choices[51][3] = "Que puedan elegir, entre aquellos que en cada momento se encuentren disponibles, el canal a trav&eacute;s del cual relacionarse por medios electr&oacute;nicos con las Administraciones P&uacute;blicas";
 answers[51] = choices[51][3];
 units[51] = "43";
 comments[51] = "Id Pregunta: 8839. Examen UC3M 2010";


//  Id pregunta: 8861 AÃ±o de creación de pregunta: 2011-01-01
 questions[52]= "53)  El lenguaje Java Script:";
 choices[52]= new Array();
 choices[52][0] = "Permite escribir c&oacute;digo que se compila en el servidor para su ejecuci&oacute;n en el cliente";
 choices[52][1] = "Es interpretado por el navegador cuando se abre un fichero virtual en el que se encuentra c&oacute;digo javascript embebido";
 choices[52][2] = "S&oacute;lo puede ser compilado si el cliente tiene instalada una m&aacute;quina virtual java (JVM)";
 choices[52][3] = "Solamente puede ser compilado si el servidor tiene instalada una m&aacute;quina virtual java (JVM)";
 answers[52] = choices[52][1];
 units[52] = "69";
 comments[52] = "Id Pregunta: 8861. Analista Ayto. Madrid 2010";


//  Id pregunta: 8939 AÃ±o de creación de pregunta: 2011-01-01
 questions[53]= "54)  Las sedes judiciales electr&oacute;nicas no est&aacute;n obligadas a poner a disposici&oacute;n de los ciudadanos y profesionales el servicio:";
 choices[53]= new Array();
 choices[53][0] = "Carta de servicios electr&oacute;nicos";
 choices[53][1] = "Carta de servicios";
 choices[53][2] = "Carta de Derechos de los Ciudadanos ante la Justicia";
 choices[53][3] = "Debe disponer de todos los anteriores";
 answers[53] = choices[53][3];
 units[53] = "43";
 comments[53] = "Id Pregunta: 8939. ";


//  Id pregunta: 8940 AÃ±o de creación de pregunta: 2011-01-01
 questions[54]= "55)  El responsable de la veracidad e integridad de un contenido incluido en la sede judicial electr&oacute;nica ser&aacute;:";
 choices[54]= new Array();
 choices[54][0] = "El &oacute;rgano titular de la sede";
 choices[54][1] = "El &oacute;rgano u &oacute;rganos administrativos encargados de la gesti&oacute;n";
 choices[54][2] = "Los dos anteriores";
 choices[54][3] = "Ninguno de los anteriores";
 answers[54] = choices[54][3];
 units[54] = "43";
 comments[54] = "Id Pregunta: 8940. ";


//  Id pregunta: 9054 AÃ±o de creación de pregunta: 2011-01-01
 questions[55]= "56)  &iquest;Cual de las siguientes NO es una actividad del estadard ISO 13407?";
 choices[55]= new Array();
 choices[55][0] = "Generaci&oacute;n de las soluciones de dise&ntilde;o";
 choices[55][1] = "Di&aacute;logo simple y natural";
 choices[55][2] = "Producci&oacute;n de soluciones de dise&ntilde;o";
 choices[55][3] = "Entender y especificar el contexto de uso.";
 answers[55] = choices[55][0];
 units[55] = "39";
 comments[55] = "Id Pregunta: 9054. NULL";


//  Id pregunta: 9056 AÃ±o de creación de pregunta: 2011-01-01
 questions[56]= "57)  &iquest;Cual de las siguientes ISO tiene definici&oacute;n de usabilidad?";
 choices[56]= new Array();
 choices[56][0] = "ISO/IEC 9126";
 choices[56][1] = "ISO/IEC 9241";
 choices[56][2] = "Las dos anteriores";
 choices[56][3] = "Ninguna de las anteriores";
 answers[56] = choices[56][2];
 units[56] = "39";
 comments[56] = "Id Pregunta: 9056. NULL";


//  Id pregunta: 9067 AÃ±o de creación de pregunta: 2011-01-01
 questions[57]= "58)  Seg&uacute;n el RD 1671/2009 cu&aacute;l de los siguientes elementos no es un contenido obligatorio del recibo electr&oacute;nico que deber&aacute;n emitir los registros electr&oacute;nicos";
 choices[57]= new Array();
 choices[57][0] = "N&uacute;mero de entrada de registro";
 choices[57][1] = "Informaci&oacute;n del plazo m&aacute;ximo establecido para la resoluci&oacute;n del procedimiento";
 choices[57][2] = "Copia del escrito, comunicaci&oacute;n o solicitud presentada y de los documentos adjuntos";
 choices[57][3] = "Todos las respuestas anteriores forman parte del contenido que debe tener el recibo de un registro electr&oacute;nico ";
 answers[57] = choices[57][2];
 units[57] = "43";
 comments[57] = "Id Pregunta: 9067. NULL";


//  Id pregunta: 9078 AÃ±o de creación de pregunta: 2013-01-01
 questions[58]= "59)  &quot;Ayuda a la entrada de datos&quot; es una pauta enmarcada en el principio:";
 choices[58]= new Array();
 choices[58][0] = "Perceptible. ";
 choices[58][1] = "Operable. ";
 choices[58][2] = "Comprensible.";
 choices[58][3] = "Robusto.";
 answers[58] = choices[58][2];
 units[58] = "39";
 comments[58] = "Id Pregunta: 9078. ";


//  Id pregunta: 9079 AÃ±o de creación de pregunta: 2013-01-01
 questions[59]= "60)  Para cumplir el nivel AA en la pauta &quot;Ayuda a la entrada de datos&quot;, respecto a los formularios de entrada de datos que tengan consecuencias legales, cu&aacute;l de las siguientes opciones NO se exige:";
 choices[59]= new Array();
 choices[59][0] = "Tipograf&iacute;a clara y legible. ";
 choices[59][1] = "Verificaci&oacute;n por parte del usuario.";
 choices[59][2] = "Reversibilidad. ";
 choices[59][3] = "Confirmaci&oacute;n.";
 answers[59] = choices[59][0];
 units[59] = "39";
 comments[59] = "Id Pregunta: 9079. ";


//  Id pregunta: 9171 AÃ±o de creación de pregunta: 2013-01-01
 questions[60]= "61)  Cu&aacute;l de los siguientes productos de UN/CEFACT es un est&aacute;ndar:";
 choices[60]= new Array();
 choices[60][0] = "UN/CCL (Core Components Library)";
 choices[60][1] = "ebXML CCTS (Core Components Technical Specification)";
 choices[60][2] = "XML Naming and Design Rules";
 choices[60][3] = "UNECE TDED ISO 7273";
 answers[60] = choices[60][0];
 units[60] = "70";
 comments[60] = "Id Pregunta: 9171. ";


//  Id pregunta: 9279 AÃ±o de creación de pregunta: 2013-01-01
 questions[61]= "62)  &iquest;Cu&aacute;l de los siguientes es un principio del programa IDABC?";
 choices[61]= new Array();
 choices[61][0] = "Alianzas.";
 choices[61][1] = "Compartici&oacute;n de recursos.";
 choices[61][2] = "Subsidiariedad.";
 choices[61][3] = "Ninguno de los anteriores.";
 answers[61] = choices[61][2];
 units[61] = "40";
 comments[61] = "Id Pregunta: 9279. ";


//  Id pregunta: 9280 AÃ±o de creación de pregunta: 2013-01-01
 questions[62]= "63)  Se&ntilde;ale la FALSA respecto a los criterios de seguridad, normalizaci&oacute;n y conservaci&oacute;n.";
 choices[62]= new Array();
 choices[62][0] = "Son las recomendaciones sobre normalizaci&oacute;n e interoperabilidad seguidas por la administraci&oacute;n.";
 choices[62][1] = "Fueron elaboradas por el Consejo Superior de Inform&aacute;tica a ra&iacute;z del RD 209/2003.";
 choices[62][2] = "Consta de tres libros o gu&iacute;as: criterios de seguridad, de normalizaci&oacute;n y de conservaci&oacute;n.";
 choices[62][3] = "Todas son verdaderas. ";
 answers[62] = choices[62][3];
 units[62] = "40";
 comments[62] = "Id Pregunta: 9280. ";


//  Id pregunta: 9574 AÃ±o de creación de pregunta: 2013-01-01
 questions[63]= "64)  Al hablar de software libre y de su uso en la Administraci&oacute;n se&ntilde;ale la frase correcta:";
 choices[63]= new Array();
 choices[63][0] = "La Ley 11/2007 obliga a las administraciones p&uacute;blicas a poner las aplicaciones de cuyos derechos de propiedad son titulares a disposici&oacute;n de cualquier otra Administraci&oacute;n Auton&oacute;mica.";
 choices[63][1] = "Una licencia de c&oacute;digo de fuente abierta seg&uacute;n la FSF obliga a hacer p&uacute;blicas todas las mejoras, poni&eacute;ndolas a disposici&oacute;n de la comunidad.";
 choices[63][2] = "Una licencia LGPL no restringe la posibilidad de incluir el software protegido por la licencia en productos protegidos por licencias no GPL.";
 choices[63][3] = "El Real Decreto 4/2010 del Esquema Nacional de Interoperabilidad prev&eacute; un cat&aacute;logo &uacute;nicamente de est&aacute;ndares abiertos de uso obligatorio por las administraciones p&uacute;blicas.";
 answers[63] = choices[63][2];
 units[63] = "43, 61, 62";
 comments[63] = "Id Pregunta: 9574. Examen TIC A1 2011";


//  Id pregunta: 9587 AÃ±o de creación de pregunta: 2013-01-01
 questions[64]= "65)  &iquest;A cu&aacute;l de los siguientes &aacute;mbitos establecidos en el art&iacute;culo 2 de la Ley 11/2007 NO aplica el Esquema Nacional de Seguridad (ENS)?:";
 choices[64]= new Array();
 choices[64][0] = "A la Administraci&oacute;n General del Estado, Administraciones de las Comunidades Aut&oacute;nomas y las Entidades que integran la Administraci&oacute;n Local, as&iacute; como las entidades de derecho p&uacute;blico vinculadas o dependientes de las mismas.";
 choices[64][1] = "A los ciudadanos en sus relaciones con las Administraciones P&uacute;blicas.";
 choices[64][2] = "A las relaciones entre las distintas Administraciones P&uacute;blicas.";
 choices[64][3] = "Sistemas que tratan informaci&oacute;n clasificada regulada por Ley 9/1968 de 5 de abril. ";
 answers[64] = choices[64][3];
 units[64] = "43";
 comments[64] = "Id Pregunta: 9587. Examen TIC A2 2011";


//  Id pregunta: 9594 AÃ±o de creación de pregunta: 2013-01-01
 questions[65]= "66)  En una arquitectura web en .NET, indique cu&aacute;l es la opci&oacute;n correcta que define una Biblioteca de Clases Base (BCB):";
 choices[65]= new Array();
 choices[65][0] = "La Biblioteca de Clases Base es una API de alto nivel para permitir accedera los servicios que ofrece el CLR (Common Language Runtime) a trav&eacute;s de objetos en una jerarqu&iacute;a denominada espacio de nombres.";
 choices[65][1] = "La Biblioteca de Clases Base es una API de bajo nivel para permitir accedera los datos que ofrece el ASP.NET a trav&eacute;s de objetos en una jerarqu&iacute;a denominada espacio de nombres";
 choices[65][2] = "La Biblioteca de Clases Base es un conjunto de librer&iacute;as que permiten realizar las operaciones de acceso a datos.";
 choices[65][3] = "La Biblioteca de Clases Base es un conjunto de clases, interfaces y tipos valor que son la base para la compilaci&oacute;n del c&oacute;digo fuente a un c&oacute;digo intermedio denominado CIL (Common Intermediate Language).";
 answers[65] = choices[65][0];
 units[65] = "59";
 comments[65] = "Id Pregunta: 9594. Xunta Libre 2011";


//  Id pregunta: 9709 AÃ±o de creación de pregunta: 2014-01-01
 questions[66]= "67)  La programaci&oacute;n funcional limita el uso de";
 choices[66]= new Array();
 choices[66][0] = "estados mutables.";
 choices[66][1] = "expresiones lambda.";
 choices[66][2] = "procedimientos como par&aacute;metros.";
 choices[66][3] = "lenguajes como Erlang, F# o Scala.";
 answers[66] = choices[66][0];
 units[66] = "60";
 comments[66] = "Id Pregunta: 9709. Examen TIC-A1 2013";


//  Id pregunta: 9876 AÃ±o de creación de pregunta: 2014-01-01
 questions[67]= "68)  De acuerdo con lo establecido en el RD 3/2010 de 8 de enero por el que se regula el Esquema Nacional de Seguridad,";
 choices[67]= new Array();
 choices[67][0] = "todos los sistemas de informaci&oacute;n ser&aacute;n objeto de una auditor&iacute;a regular ordinaria con car&aacute;cter anual";
 choices[67][1] = "los sistemas de informaci&oacute;n de categor&iacute;a b&aacute;sica no precisan ser auditados";
 choices[67][2] = "la auditor&iacute;a de los sistemas de categor&iacute;a media puede ser sustituida por una autoevaluaci&oacute;n realizada por el mismo personal que administra el sistema";
 choices[67][3] = "no es necesario que los informes de autoevaluaci&oacute;n sean conocidos por el responsable de seguridad competente. Basta con que los conozca el responsable del sistema.";
 answers[67] = choices[67][1];
 units[67] = "43";
 comments[67] = "Id Pregunta: 9876. TIC A1, Examen 2013";


//  Id pregunta: 9964 AÃ±o de creación de pregunta: 2014-01-01
 questions[68]= "69)  En la plataforma .NET, &iquest;cu&aacute;l es el est&aacute;ndar que define como se declaran, usan y administran los tipos de datos en el Common Language Runtime (CLR) y que es una parte importante para que m&uacute;ltiples lenguajes sean soportados?";
 choices[68]= new Array();
 choices[68][0] = "System Data Type (SDT)";
 choices[68][1] = "Common Type System (CTS)";
 choices[68][2] = "Common Data Integration (CDI)";
 choices[68][3] = "Data Type Core (DTC)";
 answers[68] = choices[68][1];
 units[68] = "59,115";
 comments[68] = "Id Pregunta: 9964. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";


//  Id pregunta: 10023 AÃ±o de creación de pregunta: 2014-01-01
 questions[69]= "70)  Throwable es la superclase de todos los errores y excepciones de Java SE 7. &iquest;A qu&eacute; paquete de Java pertenece Throwable?";
 choices[69]= new Array();
 choices[69][0] = "java.lang";
 choices[69][1] = "java.error";
 choices[69][2] = "java.util";
 choices[69][3] = "Throwable no es una clase, es un interface, y &eacute;ste pertenece al paquete java.io.";
 answers[69] = choices[69][0];
 units[69] = "60";
 comments[69] = "Id Pregunta: 10023. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10155 AÃ±o de creación de pregunta: 2014-01-01
 questions[70]= "71)  Seg&uacute;n el ENS cu&aacute;l de las siguientes afirmaciones es incorrecta";
 choices[70]= new Array();
 choices[70][0] = "Si la dimensi&oacute;n de confidencialidad de un sistema se considera de categor&iacute;a alta la informaci&oacute;n se cifrar&aacute; tanto durante su almacenamiento como durante su transmisi&oacute;n. S&oacute;lo estar&aacute; en claro mientras se est&aacute; haciendo uso de ella. ";
 choices[70][1] = "Si un sistema es de categor&iacute;a b&aacute;sica es necesario realizar un an&aacute;lisis de riesgos informal.";
 choices[70][2] = "Si la dimensi&oacute;n de confidencialidad de un sistema se considera de categor&iacute;a alta se emplear&aacute;n, preferentemente, dispositivos hw en el establecimiento y utilizaci&oacute;n de la VPN.";
 choices[70][3] = "Para aquellos sistemas cuya dimensi&oacute;n de trazabilidad sea media es necesario llevar un registro de la actividad de los usuarios y protecci&oacute;n de los registros de actividad. ";
 answers[70] = choices[70][3];
 units[70] = "43";
 comments[70] = "Id Pregunta: 10155. ";


//  Id pregunta: 10359 AÃ±o de creación de pregunta: 2014-01-01
 questions[71]= "72)  En relaci&oacute;n con los sistemas abiertos, se&ntilde;ale la respuesta err&oacute;nea:";
 choices[71]= new Array();
 choices[71][0] = "Un sistema abierto es aquel cuyas especificaciones est&aacute;n aprobadas, publicadas y respaldadas por organismos independientes de normalizaci&oacute;n";
 choices[71][1] = "Un sistema abierto es aquel capaz de interconectarse con otros de acuerdo con unas normas establecidas";
 choices[71][2] = "Los sistemas abiertos se caracterizan por su interopeabilidad, portabilidad y escalabilidad";
 choices[71][3] = "Los sistemas abiertos deben hacer uso de est&aacute;ndares abiertos";
 answers[71] = choices[71][3];
 units[71] = "40";
 comments[71] = "Id Pregunta: 10359. Un sistema puede ser abierto pero no hacer uso de est&aacute;ndares abiertos";


//  Id pregunta: 10467 AÃ±o de creación de pregunta: 2014-01-01
 questions[72]= "73)  &iquest;Cu&aacute;l es el DOCTYPE que se usa en HTML5?";
 choices[72]= new Array();
 choices[72][0] = "&lt;!DOCTYPE html&gt;";
 choices[72][1] = "&lt;!DOCTYPE html5&gt;";
 choices[72][2] = "&lt;!DOCTYPE&gt; y &lt;!DOCTYPE html5&gt;";
 choices[72][3] = "&lt;!DOCTYPE html&gt; y &lt;!DOCTYPE html5&gt;";
 answers[72] = choices[72][0];
 units[72] = "69";
 comments[72] = "Id Pregunta: 10467. NULL";


//  Id pregunta: 10476 AÃ±o de creación de pregunta: 2014-01-01
 questions[73]= "74)  Completa la frase: A diferencia de NIS, LDAP &hellip;";
 choices[73]= new Array();
 choices[73][0] = "No est&aacute; restringido a redes unix";
 choices[73][1] = "Usa notaci&oacute;n ASN.1";
 choices[73][2] = "No soporta implementaciones de software libre";
 choices[73][3] = "Se usa sobre TCP/IP";
 answers[73] = choices[73][0];
 units[73] = "73";
 comments[73] = "Id Pregunta: 10476. ";


//  Id pregunta: 10501 AÃ±o de creación de pregunta: 2014-01-01
 questions[74]= "75)  &iquest;Cual de las siguientes etiquetas fue introducida en HTML5?";
 choices[74]= new Array();
 choices[74][0] = "&lt;head&gt;";
 choices[74][1] = "&lt;video&gt;";
 choices[74][2] = "&lt;music&gt;";
 choices[74][3] = "&lt;background&gt;";
 answers[74] = choices[74][1];
 units[74] = "69";
 comments[74] = "Id Pregunta: 10501. http://es.wikipedia.org/wiki/HTML5";


//  Id pregunta: 10502 AÃ±o de creación de pregunta: 2014-01-01
 questions[75]= "76)  &iquest;Quien es considerado el creador del Lenguaje HTML?";
 choices[75]= new Array();
 choices[75][0] = "Dan Connolly";
 choices[75][1] = "Hank Thomas-Lee";
 choices[75][2] = "Conway Berners-Lee";
 choices[75][3] = "Tim Berners-Lee";
 answers[75] = choices[75][3];
 units[75] = "69";
 comments[75] = "Id Pregunta: 10502. NULL";


//  Id pregunta: 10572 AÃ±o de creación de pregunta: 2015-01-01
 questions[76]= "77)  El servicio de verificaci&oacute;n y consulta de datos no tiene por objetivo:";
 choices[76]= new Array();
 choices[76][0] = "Dar respuesta al art&iacute;culo 6 de la Ley 11/2007, por el que se reconoce el derecho a no aportar los datos y documentos que ya obren en poder de la Administraci&oacute;n.";
 choices[76][1] = "Simplificar la tramitaci&oacute;n de los procedimientos administrativos.";
 choices[76][2] = "Facilitar al ciudadano la aportaci&oacute;n de los documentos en papel que acrediten su identidad en los procedimientos administrativos.";
 choices[76][3] = "Dar cumplimiento a los derechos recogidos en la Ley 30/1992, de R&eacute;gimen Jur&iacute;dico de las Administraciones P&uacute;blicas y Procedimiento Administrativo Com&uacute;n.";
 answers[76] = choices[76][2];
 units[76] = "44";
 comments[76] = "Id Pregunta: 10572. ";


//  Id pregunta: 10699 AÃ±o de creación de pregunta: 2015-01-01
 questions[77]= "78)  &iquest;Cu&aacute;l de los siguientes no es un metadato obligatorio establecido en la NTI de Documento Electr&oacute;nico?";
 choices[77]= new Array();
 choices[77][0] = "Versi&oacute;n NTI.";
 choices[77][1] = "&Oacute;rgano.";
 choices[77][2] = "Estado de elaboraci&oacute;n.";
 choices[77][3] = "Todos los anteriores son metadatos obligatorios.";
 answers[77] = choices[77][3];
 units[77] = "43";
 comments[77] = "Id Pregunta: 10699. ";


//  Id pregunta: 10707 AÃ±o de creación de pregunta: 2015-01-01
 questions[78]= "79)  &iquest;Cu&aacute;l no es un componente del &iacute;ndice del expediente electr&oacute;nico?";
 choices[78]= new Array();
 choices[78][0] = "Fecha de generaci&oacute;n del &iacute;ndice.";
 choices[78][1] = "Descripci&oacute;n de los documentos electr&oacute;nicos.";
 choices[78][2] = "Disposici&oacute;n de los documentos en carpetas.";
 choices[78][3] = "Identificadores de los documentos electr&oacute;nicos.";
 answers[78] = choices[78][1];
 units[78] = "43";
 comments[78] = "Id Pregunta: 10707. ";


//  Id pregunta: 10717 AÃ±o de creación de pregunta: 2015-01-01
 questions[79]= "80)  &iquest;Qu&eacute; aspecto no es necesario incluir en una pol&iacute;tica de firma basada en certificados seg&uacute;n la NTI de firma electr&oacute;nica?";
 choices[79]= new Array();
 choices[79][0] = "Definici&oacute;n del alcance y &aacute;mbito de aplicaci&oacute;n.";
 choices[79][1] = "Datos para la identificaci&oacute;n del documento y del responsable de su gesti&oacute;n.";
 choices[79][2] = "Reglas de confianza, que incluir&aacute;n los requisitos establecidos para certificados, sellos de tiempo y firmas longevas.";
 choices[79][3] = "Todas las anteriores se deben incluir.";
 answers[79] = choices[79][3];
 units[79] = "43";
 comments[79] = "Id Pregunta: 10717. ";


//  Id pregunta: 10719 AÃ±o de creación de pregunta: 2015-01-01
 questions[80]= "81)  &iquest;Cu&aacute;l de los siguientes no es un est&aacute;ndar de firma contemplado en la NTI de firma electr&oacute;nica?";
 choices[80]= new Array();
 choices[80][0] = "XAdES";
 choices[80][1] = "CAdES";
 choices[80][2] = "PAdES";
 choices[80][3] = "MAdES";
 answers[80] = choices[80][3];
 units[80] = "43";
 comments[80] = "Id Pregunta: 10719. ";


//  Id pregunta: 10726 AÃ±o de creación de pregunta: 2015-01-01
 questions[81]= "82)  &iquest;Qu&eacute; versi&oacute;n del protocolo SCSP (Sustituci&oacute;n de Certificados en Soporte Papel) se considera como utilizaci&oacute;n de forma general en la NTI de Protocolos de Intermediaci&oacute;n?";
 choices[81]= new Array();
 choices[81][0] = "1.0";
 choices[81][1] = "2.0";
 choices[81][2] = "3.0";
 choices[81][3] = "4.0";
 answers[81] = choices[81][2];
 units[81] = "43";
 comments[81] = "Id Pregunta: 10726. ";


//  Id pregunta: 10733 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  &iquest;Qu&eacute; Ley menciona en su pre&aacute;mbulo la Norma T&eacute;cnica de Interoperabilidad de Reutilizaci&oacute;n de recursos de la informaci&oacute;n?";
 choices[82]= new Array();
 choices[82][0] = "Ley 14/2007";
 choices[82][1] = "Ley 37/2007";
 choices[82][2] = "Ley 30/1992";
 choices[82][3] = "Ley 53/1999";
 answers[82] = choices[82][1];
 units[82] = "43";
 comments[82] = "Id Pregunta: 10733. ";


//  Id pregunta: 10736 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  Seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Reutilizaci&oacute;n de recursos de la informaci&oacute;n, &iquest;qu&eacute; se utilizar&aacute; para facilitar la reutilizaci&oacute;n de vocabularios?";
 choices[83]= new Array();
 choices[83][0] = "El Centro de Interoperabilidad Sem&aacute;ntica de la Administraci&oacute;n";
 choices[83][1] = "El formato SCSP";
 choices[83][2] = "El Intercambio a trav&eacute;s de la Red SARA";
 choices[83][3] = "El Centro de Promoci&oacute;n de la Reutilizaci&oacute;n de la AGE";
 answers[83] = choices[83][0];
 units[83] = "43";
 comments[83] = "Id Pregunta: 10736. ";


//  Id pregunta: 10899 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  &iquest;Cu&aacute;l de los siguientes modos de funcionamiento NO se corresponde con el algoritmo de cifrado DES?";
 choices[84]= new Array();
 choices[84][0] = "Modo ECB (Electronic CodeBook).";
 choices[84][1] = "Modo CBC (Cipher Block Chaining).";
 choices[84][2] = "Modo OFB (Output FeedBack).";
 choices[84][3] = "Modo UBC (Uncipher Block Chaining).";
 answers[84] = choices[84][3];
 units[84] = "73, 74";
 comments[84] = "Id Pregunta: 10899. Examen GSI 2014";


//  Id pregunta: 10952 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  En la estructura de un certificado X.509 v3 NO es obligatorio:";
 choices[85]= new Array();
 choices[85][0] = "El n&uacute;mero de serie.";
 choices[85][1] = "La validez no antes de.";
 choices[85][2] = "El identificador &uacute;nico de emisor.";
 choices[85][3] = "El emisor.";
 answers[85] = choices[85][2];
 units[85] = "73";
 comments[85] = "Id Pregunta: 10952. TIC A1 AGE 2014";


//  Id pregunta: 10960 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  El &oacute;rgano responsable del sistema Cl@ve, la plataforma com&uacute;n del Sector P&uacute;blico Administrativo Estatal para la identificaci&oacute;n, autenticaci&oacute;n y firma electr&oacute;nica mediante el uso de claves concertadas, ser&aacute;:";
 choices[86]= new Array();
 choices[86][0] = "La Direcci&oacute;n General de la Polic&iacute;a.";
 choices[86][1] = "La Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones.";
 choices[86][2] = "La F&aacute;brica Nacional de Moneda y Timbre-Real Casa de la Moneda.";
 choices[86][3] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 answers[86] = choices[86][1];
 units[86] = "44";
 comments[86] = "Id Pregunta: 10960. TIC A1 AGE 2014";


//  Id pregunta: 11002 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  De las siguientes opciones, se&ntilde;ale cu&aacute;l es la que incluye extensiones que son todas admitidas de acuerdo con lo establecido en la Norma T&eacute;cnica de Interoperabilidad de Cat&aacute;logo de est&aacute;ndares:";
 choices[87]= new Array();
 choices[87][0] = ".xls, .xlsx, .doc, .docx";
 choices[87][1] = ".rar, .zip, .gz";
 choices[87][2] = ".jpg, .gif, .png, .tiff";
 choices[87][3] = ".mp3, .ogg, .mp4";
 answers[87] = choices[87][3];
 units[87] = "43";
 comments[87] = "Id Pregunta: 11002. TIC A1 AGE 2014";


//  Id pregunta: 11048 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  &iquest;Qu&eacute; RFC contiene la especificaci&oacute;n de HTTP/2?";
 choices[88]= new Array();
 choices[88][0] = "6660";
 choices[88][1] = "6978";
 choices[88][2] = "7540";
 choices[88][3] = "8880";
 answers[88] = choices[88][2];
 units[88] = "69";
 comments[88] = "Id Pregunta: 11048. ";


//  Id pregunta: 11118 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  &iquest;Cu&aacute;l de los siguientes no es un derecho de los ciudadanos de acuerdo con la ley 11/2007?";
 choices[89]= new Array();
 choices[89][0] = "A relacionarse directamente con las AAPP.";
 choices[89][1] = "A no aportar datos y documentos que obren en poder de las Administraciones P&uacute;blicas";
 choices[89][2] = "A la conservaci&oacute;n en formato electr&oacute;nico por las Administraciones P&uacute;blicos de los documentos electr&oacute;nicos que formen parte de un expediente por duplicado";
 choices[89][3] = "A elegir en cada momento el canal a trav&eacute;s del cual se relacionen con la Administraci&oacute;n";
 answers[89] = choices[89][2];
 units[89] = "43";
 comments[89] = "Id Pregunta: 11118. ";


//  Id pregunta: 11149 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  &iquest;Qu&eacute; versi&oacute;n del PKCS define una interfaz para el acceso a dispositivos que contienen informaci&oacute;n criptogr&aacute;fica como Tokens o Tarjetas?";
 choices[90]= new Array();
 choices[90][0] = "PKCS 1";
 choices[90][1] = "PKCS 7";
 choices[90][2] = "PCKCS 9";
 choices[90][3] = "PKCS 11";
 answers[90] = choices[90][3];
 units[90] = "73";
 comments[90] = "Id Pregunta: 11149. ";


//  Id pregunta: 11314 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  En relaci&oacute;n con el servicio de directorio X.500, se&ntilde;alar la falsa.";
 choices[91]= new Array();
 choices[91][0] = "Cada entrada del Directorio, tiene un identificador &uacute;nico que el RDN.";
 choices[91][1] = "La parte com&uacute;n de todas las entradas u objetos, se llama Suffix.";
 choices[91][2] = "El conjunto de objetos, constituyen un DMD o dominio de gesti&oacute;n.";
 choices[91][3] = "X.500 no define nada sobre la interfaz de usuario.";
 answers[91] = choices[91][0];
 units[91] = "73";
 comments[91] = "Id Pregunta: 11314. El identificador &uacute;nico de cada entrada del directorio es el DN, que es como la direcci&oacute;n absoluta de un fichero.";


//  Id pregunta: 11328 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  En cuanto a la normativa sobre reutilizaci&oacute;n de la informaci&oacute;n, indique cu&aacute;l de las siguientes opciones no es constitutiva de una infracci&oacute;n grave";
 choices[92]= new Array();
 choices[92][0] = "La reutilizaci&oacute;n de documentaci&oacute;n sin haber obtenido la correspondiente licencia en los casos en que &eacute;sta sea requerida;";
 choices[92][1] = "La reutilizaci&oacute;n de la informaci&oacute;n para una finalidad distinta a la que se concedi&oacute;;";
 choices[92][2] = "La alteraci&oacute;n grave del contenido de la informaci&oacute;n para cuya reutilizaci&oacute;n se haya concedido una licencia;";
 choices[92][3] = "La desnaturalizaci&oacute;n del sentido de la informaci&oacute;n para cuya reutilizaci&oacute;n se haya concedido una licencia;";
 answers[92] = choices[92][3];
 units[92] = "44";
 comments[92] = "Id Pregunta: 11328. ";


//  Id pregunta: 11534 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Seg&uacute;n la Ley 34/2002 de Servicios de la Sociedad de la Informaci&oacute;n y Comercio electr&oacute;nico, el procedimiento de cooperaci&oacute;n intracomunitario en el que se propone la realizaci&oacute;n de acciones urgentes contra un prestador de servicios de la sociedad de la informaci&oacute;n establecido en la U.E que haya incumplido alguno de los preceptos de la Ley, requiere notificaci&oacute;n al Consejo Europeo y al Estado Miembro en el que opera dicho Prestador en un Plazo M&Aacute;XIMO de:";
 choices[93]= new Array();
 choices[93][0] = "1 mes desde la adopci&oacute;n de las acciones urgentes.";
 choices[93][1] = "30 d&iacute;as desde la adopci&oacute;n de las acciones urgentes.";
 choices[93][2] = "15 d&iacute;as desde la adopci&oacute;n de acciones urgentes.";
 choices[93][3] = "Ninguna de las anteriores.";
 answers[93] = choices[93][2];
 units[93] = "70";
 comments[93] = "Id Pregunta: 11534. NULL";


//  Id pregunta: 11591 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  La protecci&oacute;n contra Denegaci&oacute;n de servicio se recoge en la Gu&iacute; CCN-STIC:";
 choices[94]= new Array();
 choices[94][0] = "828";
 choices[94][1] = "817";
 choices[94][2] = "820";
 choices[94][3] = "823";
 answers[94] = choices[94][2];
 units[94] = "43";
 comments[94] = "Id Pregunta: 11591. ";


//  Id pregunta: 11597 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  La Ley del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas es:";
 choices[95]= new Array();
 choices[95][0] = "Ley 39/2015";
 choices[95][1] = "Ley 40/2015";
 choices[95][2] = "Ley 29/2015";
 choices[95][3] = "Ley 30/2015";
 answers[95] = choices[95][0];
 units[95] = "43";
 comments[95] = "Id Pregunta: 11597. ";


//  Id pregunta: 11601 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Para un sistema calificado con nivel sustancial de aseguramiento de la calidad, cl@ve admite como mecanismo v&aacute;lido de registro e identificaci&oacute;n:";
 choices[96]= new Array();
 choices[96][0] = "Cl@ve PIN de varios usos";
 choices[96][1] = "Cl@ve Permanente sin SMS";
 choices[96][2] = "Cl@ve PIN de un solo uso";
 choices[96][3] = "b) y c) son correctos";
 answers[96] = choices[96][2];
 units[96] = "44";
 comments[96] = "Id Pregunta: 11601. ";


//  Id pregunta: 11623 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  En HTML5, para representar la leyenda de una figura se hace uso de la etiqueta:";
 choices[97]= new Array();
 choices[97][0] = "&lt;figure&gt;";
 choices[97][1] = "&lt;figcaption&gt;";
 choices[97][2] = "&lt;footer&gt;";
 choices[97][3] = "&lt;figlegend&gt;";
 answers[97] = choices[97][1];
 units[97] = "69";
 comments[97] = "Id Pregunta: 11623. ";


//  Id pregunta: 11749 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  En los sistemas de identificaci&oacute;n de las Administraciones P&uacute;blicas.";
 choices[98]= new Array();
 choices[98][0] = "Las Administraciones P&uacute;blicas podr&aacute;n identificarse mediante el uso de un sello&nbsp; electr&oacute;nico basado en un certificado electr&oacute;nico avanzado";
 choices[98][1] = "Las Administraciones P&uacute;blicas podr&aacute;n identificarse mediante el uso de una firma electr&oacute;nica basada en un certificado electr&oacute;nico reconocido o cualificado";
 choices[98][2] = "Las Administraciones P&uacute;blicas podr&aacute;n identificarse mediante el uso de un c&oacute;digo seguro de verificaci&oacute;n basado en un certificado electr&oacute;nico reconocido o cualificado";
 choices[98][3] = "Las Administraciones P&uacute;blicas podr&aacute;n identificarse mediante el uso de un sello&nbsp; electr&oacute;nico basado en un certificado electr&oacute;nico reconocido o cualificado";
 answers[98] = choices[98][3];
 units[98] = "43";
 comments[98] = "Id Pregunta: 11749. ";


//  Id pregunta: 11764 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Se ha publicado la Estrategia TIC?";
 choices[99]= new Array();
 choices[99][0] = "No";
 choices[99][1] = "No est&aacute; previsto";
 choices[99][2] = "Si, en septiembre de 2015.";
 choices[99][3] = "Si, en septiembre de 2014.";
 answers[99] = choices[99][2];
 units[99] = "43";
 comments[99] = "Id Pregunta: 11764. ";


