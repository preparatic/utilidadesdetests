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

//  Id pregunta: 151 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  El Modelo de Referencia para la Interconexi&oacute;n de Sistemas Abiertos queda especificado en la norma ISO:";
 choices[0]= new Array();
 choices[0][0] = "ISO 7498";
 choices[0][1] = "ISO 9735";
 choices[0][2] = "ISO 9075";
 choices[0][3] = "ISO 9945-1";
 answers[0] = choices[0][0];
 units[0] = "40";
 comments[0] = "Id Pregunta: 151. ";


//  Id pregunta: 163 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  El siguiente punto de verificaci&oacute;n de WAI (en la norma WCAG 1.0): &quot;Hasta que las aplicaciones de usuario permitan controlarlo, evite provocar parpadeo en la pantalla&quot;, &iquest;a qu&eacute; nivel de prioridad pertenece?:";
 choices[1]= new Array();
 choices[1][0] = "1";
 choices[1][1] = "2";
 choices[1][2] = "3";
 choices[1][3] = "no es ning&uacute;n punto de verificaci&oacute;n contemplado en WAI";
 answers[1] = choices[1][0];
 units[1] = "39";
 comments[1] = "Id Pregunta: 163. ";


//  Id pregunta: 336 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  La primera fase a la hora de seleccionar un paquete o aplicaci&oacute;n est&aacute;ndar es:";
 choices[2]= new Array();
 choices[2][0] = "Llevar a cabo una investigaci&oacute;n preliminar";
 choices[2][1] = "Entrar en contacto con los suministradores";
 choices[2][2] = "Definir los requisitos del usuario";
 choices[2][3] = "Personalizar e implantar el paquete";
 answers[2] = choices[2][2];
 units[2] = "40";
 comments[2] = "Id Pregunta: 336. ";


//  Id pregunta: 501 AÃ±o de creación de pregunta: 2003-01-01
 questions[3]= "4)  En cuanto a la pol&iacute;tica ergon&oacute;mica y medioambiental:";
 choices[3]= new Array();
 choices[3][0] = "Se aplica resoluci&oacute;n del CSAE de 2004";
 choices[3][1] = "No hay nada indicado al respecto";
 choices[3][2] = "Las partes aprobadas de la NORMA ISO 9241 (asumida como norma EN29241 y como norma UNE-EN29241)";
 choices[3][3] = "La decisi&oacute;n 87/95/CEE";
 answers[3] = choices[3][2];
 units[3] = "39";
 comments[3] = "Id Pregunta: 501. ";


//  Id pregunta: 542 AÃ±o de creación de pregunta: 2003-01-01
 questions[4]= "5)  WAI se refiere a:";
 choices[4]= new Array();
 choices[4][0] = "Accesibilidad de p&aacute;ginas web.";
 choices[4][1] = "Interfaces para redes de &aacute;rea local.";
 choices[4][2] = "Interfaces para redes metropolitanas.";
 choices[4][3] = "Interfaces de acceso Wi-Fi.";
 answers[4] = choices[4][0];
 units[4] = "39";
 comments[4] = "Id Pregunta: 542. ";


//  Id pregunta: 640 AÃ±o de creación de pregunta: 2006-01-01
 questions[5]= "6)  Cu&aacute;l de las siguientes afirmaciones sobre la Iniciativa de Accesibilidad para el contenido en la web (WCAG 1.0) es incorrecta:";
 choices[5]= new Array();
 choices[5][0] = "La especificaci&oacute;n contiene 14 pautas, que son los principios generales para el dise&ntilde;o accesible";
 choices[5][1] = "Cada pauta est&aacute; asociada a uno o m&aacute;s puntos de verificaci&oacute;n que describen c&oacute;mo aplicar esa pauta a las p&aacute;ginas web.";
 choices[5][2] = "Cada punto de verificaci&oacute;n est&aacute; asociado a uno de los tres niveles de adecuaci&oacute;n, los niveles A, AA y AAA";
 choices[5][3] = "El nivel minimo de adecuacion a esta norma lo fija la Ley de Servicios de la Sociedad de la Informaci&oacute;n y del Comercio Electr&oacute;nico y obliga a que las p&aacute;ginas web de la Administraci&oacute;n cumplan al menos con el nivel de adecuaci&oacute;n AA.";
 answers[5] = choices[5][3];
 units[5] = "39";
 comments[5] = "Id Pregunta: 640. ";


//  Id pregunta: 661 AÃ±o de creación de pregunta: 2006-01-01
 questions[6]= "7)  &iquest;Cu&aacute;l de los siguientes componentes de los que se indican a continuaci&oacute;n no es necesario certificar para obtener el perfil XPG4 Base de la Gu&iacute;a de Portabilidad X/Open?";
 choices[6]= new Array();
 choices[6][0] = "XPG4 Base";
 choices[6][1] = "XPG4 Commands and Utilities";
 choices[6][2] = "XPG4 Language";
 choices[6][3] = "XPG4 Internationalised System Calls and Libraries";
 answers[6] = choices[6][2];
 units[6] = "40";
 comments[6] = "Id Pregunta: 661. ";


//  Id pregunta: 697 AÃ±o de creación de pregunta: 2004-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l de las siguientes afirmaciones no es correcta?";
 choices[7]= new Array();
 choices[7][0] = "El elemento b&aacute;sico para la programaci&oacute;n concurrente en Java son los &quot;threads&quot;";
 choices[7][1] = "Java permite la herencia m&uacute;ltiple de clases";
 choices[7][2] = "El modelo de punteros de Java elimina la posibilidad de transformar un entero en un puntero";
 choices[7][3] = "La variable &quot;this&quot; de una clase Java hace referencia a la propia instancia de la clase sobre la que se est&aacute; ejecutando el c&oacute;digo actual";
 answers[7] = choices[7][1];
 units[7] = "60";
 comments[7] = "Id Pregunta: 697. JCED - Preparatic XVII";


//  Id pregunta: 998 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  El acr&oacute;nimo XML corresponde a:";
 choices[8]= new Array();
 choices[8][0] = "Extensible Markup Language";
 choices[8][1] = "Extended Markup Language";
 choices[8][2] = "Expressions Markup Language";
 choices[8][3] = "Extension Markup Language";
 answers[8] = choices[8][0];
 units[8] = "69";
 comments[8] = "Id Pregunta: 998. NULL";


//  Id pregunta: 1047 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  El protocolo de acceso al directorio en X.500 es:";
 choices[9]= new Array();
 choices[9][0] = "TCP/IP";
 choices[9][1] = "LDAP";
 choices[9][2] = "IMAP";
 choices[9][3] = "DAP";
 answers[9] = choices[9][3];
 units[9] = "73";
 comments[9] = "Id Pregunta: 1047. ";


//  Id pregunta: 1432 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  XML:";
 choices[10]= new Array();
 choices[10][0] = "Es un lenguaje de presentaci&oacute;n, similar a HTML, pero m&aacute;s avanzado";
 choices[10][1] = "Est&aacute; orientado a especificar la estructura de los datos, no la forma de presentarlos";
 choices[10][2] = "Es similar a HTML pero con una orientaci&oacute;n hacia el mundo del dise&ntilde;o dado que permite realizar maginas web mas vistosas y din&aacute;micas";
 choices[10][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[10] = choices[10][1];
 units[10] = "69";
 comments[10] = "Id Pregunta: 1432. NULL";


//  Id pregunta: 1758 AÃ±o de creación de pregunta: 2006-01-01
 questions[11]= "12)  En la arquitectura de la plataforma .NET ";
 choices[11]= new Array();
 choices[11][0] = "CLR es el entorno de ejecuci&oacute;n para .NET";
 choices[11][1] = "CLS  define las reglas que debe cumplir todo lenguaje que quiera trabajar con .NET.";
 choices[11][2] = "WebForms se utiliza para el desarrollo de aplicaciones dirigidas a Internet";
 choices[11][3] = "Todas son correctas";
 answers[11] = choices[11][3];
 units[11] = "59";
 comments[11] = "Id Pregunta: 1758. ";


//  Id pregunta: 1772 AÃ±o de creación de pregunta: 2006-01-01
 questions[12]= "13)  &iquest;Qu&eacute; es un fichero JAR?";
 choices[12]= new Array();
 choices[12][0] = "Es el fichero que proporciona el entorno de ejecuci&oacute;n de java,  as&iacute; como una API gr&aacute;fica para el desarrollo de aplicaciones y applets.";
 choices[12][1] = "Es el fichero que empaqueta el entorno de ejecuci&oacute;n de java.";
 choices[12][2] = "Es el fichero que contiene el c&oacute;digo intermedio de java.";
 choices[12][3] = "Es un fichero en el que se re&uacute;nen las clases, im&aacute;genes, sonidos y otros ficheros necesarios para la ejecuci&oacute;n de un applet o una aplicaci&oacute;n Java.";
 answers[12] = choices[12][3];
 units[12] = "60";
 comments[12] = "Id Pregunta: 1772. NULL";


//  Id pregunta: 1837 AÃ±o de creación de pregunta: 2006-01-01
 questions[13]= "14)  El protocolo SET (Secure Electronic Transaction) se puede transportar sobre:";
 choices[13]= new Array();
 choices[13][0] = "TCP";
 choices[13][1] = "SMTP";
 choices[13][2] = "HTTP";
 choices[13][3] = "Todas las anteriores";
 answers[13] = choices[13][3];
 units[13] = "70";
 comments[13] = "Id Pregunta: 1837. NULL";


//  Id pregunta: 1841 AÃ±o de creación de pregunta: 2006-01-01
 questions[14]= "15)  Se&ntilde;ale  la correcta:";
 choices[14]= new Array();
 choices[14][0] = "El protocolo de seguridad en comercio electr&oacute;nico  3D Secure es utilizado por Visa y MarterCard";
 choices[14][1] = "Visa utiliza el protocolo Verified by Visa";
 choices[14][2] = "MasterCard Secure Code es el protocolo utilizado por Master Card";
 choices[14][3] = "Todas las anteriores";
 answers[14] = choices[14][3];
 units[14] = "70";
 comments[14] = "Id Pregunta: 1841. NULL";


//  Id pregunta: 1923 AÃ±o de creación de pregunta: 2006-01-01
 questions[15]= "16)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa sobre el formato JAR?";
 choices[15]= new Array();
 choices[15][0] = "Utiliza el mismo algoritmo de compresi&oacute;n que los archivos .ZIP";
 choices[15][1] = "Es compatible con los sistemas de distribuci&oacute;n autom&aacute;tica";
 choices[15][2] = "Los ficheros con este formato son independientes de la plataforma";
 choices[15][3] = "Un fichero con este formato debe incluir obligatoriamente las firmas digitales de los fichero que contiene";
 answers[15] = choices[15][3];
 units[15] = "60";
 comments[15] = "Id Pregunta: 1923. NULL";


//  Id pregunta: 1936 AÃ±o de creación de pregunta: 2006-01-01
 questions[16]= "17)  En JDBC &iquest;qu&eacute; tipo de driver no permite trabajar con applets?";
 choices[16]= new Array();
 choices[16][0] = "Driver Tipo 1";
 choices[16][1] = "Driver Tipo 2";
 choices[16][2] = "Driver Tipo 3";
 choices[16][3] = "Driver Tipo 4";
 answers[16] = choices[16][0];
 units[16] = "60";
 comments[16] = "Id Pregunta: 1936. NULL";


//  Id pregunta: 1953 AÃ±o de creación de pregunta: 2006-01-01
 questions[17]= "18)  En relaci&oacute;n al lenguaje Java, la clase THROWABLE tiene dos subclases:";
 choices[17]= new Array();
 choices[17][0] = "Error y Exception";
 choices[17][1] = "Error y Catch";
 choices[17][2] = "Throw y Finally";
 choices[17][3] = "Error y Throw";
 answers[17] = choices[17][0];
 units[17] = "60";
 comments[17] = "Id Pregunta: 1953. NULL";


//  Id pregunta: 3555 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  En sistemas de informaci&oacute;n y comunicaciones, SOAP es acr&oacute;nimo de:";
 choices[18]= new Array();
 choices[18][0] = "Services Oriented Architecture Protocol";
 choices[18][1] = "Simple Object Access Protocol";
 choices[18][2] = "Ninguna de las anteriores es v&aacute;lida";
 choices[18][3] = "Las respuestas 'a' y 'b' son ciertas";
 answers[18] = choices[18][1];
 units[18] = "69";
 comments[18] = "Id Pregunta: 3555. NULL";


//  Id pregunta: 3656 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  Un applet de Java es:";
 choices[19]= new Array();
 choices[19][0] = "Un int&eacute;rprete del lenguaje Java";
 choices[19][1] = "Una rutina Java que se ejecuta en el servidor recibiendo datos del browser o navegador";
 choices[19][2] = "Un programa Java, generalmente referenciado en una p&aacute;gina HTML, que se ejecuta en el cliente";
 choices[19][3] = "Un programa Java que accede a una base de datos relacional";
 answers[19] = choices[19][2];
 units[19] = "60";
 comments[19] = "Id Pregunta: 3656. NULL";


//  Id pregunta: 4369 AÃ±o de creación de pregunta: 2007-01-01
 questions[20]= "21)  Cu&aacute;l de las siguientes afirmaciones sobre la tecnolog&iacute;a de acceso a bases de datos ADO.NET no es correcta?";
 choices[20]= new Array();
 choices[20][0] = "El modelo de objetos ADO.NET provee una estructura de acceso a distintos or&iacute;genes de datos. Tiene 2 componentes principales: El Dataset y el proveedor de Datos .NET";
 choices[20][1] = "ADO.NET utiliza XML como formato para transmitir datos desde y hacia su base de datos y su aplicaci&oacute;n Web.";
 choices[20][2] = "ADO.NET es un conjunto de clases que se utiliza para acceder y manipular or&iacute;genes de datos como por ejemplo, una base de datos de SQL Server o una planilla Excel.";
 choices[20][3] = "ADO.NET utiliza un modelo de acceso pensando para entornos permanentemente conectados. Esto quiere decir que la aplicaci&oacute;n y el origen de datos deben estar en comunicaci&oacute;n permanente.";
 answers[20] = choices[20][3];
 units[20] = "59";
 comments[20] = "Id Pregunta: 4369. ";


//  Id pregunta: 4386 AÃ±o de creación de pregunta: 2007-01-01
 questions[21]= "22)  En el entorno .NET se han desarrollado una serie de lenguajes de programaci&oacute;n para que sean compatibles con el marco de trabajo .NET. &iquest;Cu&aacute;l de los siguientes no es uno de esos lenguajes?";
 choices[21]= new Array();
 choices[21][0] = "Java";
 choices[21][1] = "C#";
 choices[21][2] = "Visual Basic";
 choices[21][3] = "C++";
 answers[21] = choices[21][0];
 units[21] = "59";
 comments[21] = "Id Pregunta: 4386. ";


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


//  Id pregunta: 4584 AÃ±o de creación de pregunta: 2007-01-01
 questions[23]= "24)  Cual de las siguientes opciones NO es un contenedor para Ia arquitectura J2EE";
 choices[23]= new Array();
 choices[23][0] = "contenedor web";
 choices[23][1] = "contenedor EJB";
 choices[23][2] = "contenedor de aplicaci&oacute;n cliente";
 choices[23][3] = "contenedor de base de datos";
 answers[23] = choices[23][3];
 units[23] = "60";
 comments[23] = "Id Pregunta: 4584. NULL";


//  Id pregunta: 4692 AÃ±o de creación de pregunta: 2007-01-01
 questions[24]= "25)  &iquest;Qu&eacute; no es una ventaja de los sistemas abiertos seg&uacute;n la Estrategia de Sistemas Abiertos de la Administraci&oacute;n del Estado?";
 choices[24]= new Array();
 choices[24][0] = "Libertad de elecci&oacute;n";
 choices[24][1] = "Protecci&oacute;n de la inversi&oacute;n";
 choices[24][2] = "Mejor relaci&oacute;n calidad/precio";
 choices[24][3] = "Garant&iacute;a de comunicaci&oacute;n e interoperabilidad de los sistemas";
 answers[24] = choices[24][2];
 units[24] = "40";
 comments[24] = "Id Pregunta: 4692. Examen 2006 JCYL";


//  Id pregunta: 4860 AÃ±o de creación de pregunta: 2007-01-01
 questions[25]= "26)  Los certificados de clave p&uacute;blica:";
 choices[25]= new Array();
 choices[25][0] = "Que se ajustan a la recomendaci&oacute;n X.509 v.2 no admiten extensiones";
 choices[25][1] = "Ocupan m&aacute;s de 100 kbytes";
 choices[25][2] = "Que se ajustan a la recomendaci&oacute;n X.509 v.3 s&oacute;lo admiten como algoritmo de cifrado el RSA (Rivest ShamirAdleman)";
 choices[25][3] = "Fueron propuestos por Diffie y Hellman en su art&iacute;culo en que establecieron las bases de los criptosistemasde clave p&uacute;blica";
 answers[25] = choices[25][0];
 units[25] = "73";
 comments[25] = "Id Pregunta: 4860. ";


//  Id pregunta: 5011 AÃ±o de creación de pregunta: 2003-01-01
 questions[26]= "27)  &iquest;Cu&aacute;l de los siguientes es un requisito de seguridad en una transacci&oacute;n electr&oacute;nica en la que intervenga un mediode pago?:";
 choices[26]= new Array();
 choices[26][0] = "Simultaneidad";
 choices[26][1] = "Interactividad";
 choices[26][2] = "No repudio";
 choices[26][3] = "Automatizaci&oacute;n";
 answers[26] = choices[26][2];
 units[26] = "70";
 comments[26] = "Id Pregunta: 5011. Examen TIC A 2007";


//  Id pregunta: 5074 AÃ±o de creación de pregunta: 2003-01-01
 questions[27]= "28)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa?:";
 choices[27]= new Array();
 choices[27][0] = "El W3C tiene una sede en Espa&ntilde;a";
 choices[27][1] = "W3C es un organismo estadounidense";
 choices[27][2] = "El Ministerio de Administraciones P&uacute;blicas es miembro del W3C";
 choices[27][3] = "W3C ha desarrollado mecanismos para evaluar el nivel de accesibilidad de los sitios Web";
 answers[27] = choices[27][1];
 units[27] = "39";
 comments[27] = "Id Pregunta: 5074. Examen TIC A 2007";


//  Id pregunta: 5075 AÃ±o de creación de pregunta: 2003-01-01
 questions[28]= "29)  El XML (Extensible Markup Language) ha sido desarrollado por el W3C. Indique cu&aacute;l de las siguientesafirmaciones es falsa:";
 choices[28]= new Array();
 choices[28][0] = "Proviene del SGML";
 choices[28][1] = "Pretende ser un est&aacute;ndar para el intercambio de informaci&oacute;n entre plataformas no circunscritoexclusivamente a Internet";
 choices[28][2] = "Dada su extensibilidad no se soporta en bases de datos sino que requiere formatos de texto plano";
 choices[28][3] = "No es un lenguaje propiamente dicho sino un metalenguaje creado para definir lenguages que cubrandiferentes necesidades";
 answers[28] = choices[28][2];
 units[28] = "69";
 comments[28] = "Id Pregunta: 5075. Examen TIC A 2007";


//  Id pregunta: 5123 AÃ±o de creación de pregunta: 2003-01-01
 questions[29]= "30)  &iquest;Qu&eacute; tipo de driver JDBC es aquel que convierte las llamadas JDBC a llamadas nativas de la base de datos?";
 choices[29]= new Array();
 choices[29][0] = "Tipo 1";
 choices[29][1] = "Tipo 2";
 choices[29][2] = "Tipo 3";
 choices[29][3] = "Tipo 4";
 answers[29] = choices[29][1];
 units[29] = "60";
 comments[29] = "Id Pregunta: 5123. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5264 AÃ±o de creación de pregunta: 2003-01-01
 questions[30]= "31)  En la LAECSP se hace referencia a una serie de aspectos a reconsiderar a la hora de aplicar medios electr&oacute;nicos en la gesti&oacute;n de procedimientos. Entre dichos aspectos figura:";
 choices[30]= new Array();
 choices[30][0] = "Obligar al uso del DNIe a los ciudadanos";
 choices[30][1] = "Supresi&oacute;n o reducci&oacute;n de la documentaci&oacute;n requerida a los ciudadanos";
 choices[30][2] = "Integrar en los mismos el uso del correo electr&oacute;nico";
 choices[30][3] = "Ninguno de los anteriores";
 answers[30] = choices[30][1];
 units[30] = "43";
 comments[30] = "Id Pregunta: 5264. Art&iacute;culo 34 Ley 1172007";


//  Id pregunta: 5464 AÃ±o de creación de pregunta: 2003-01-01
 questions[31]= "32)  En el directorio activo de Microsoft la definici&oacute;n de todas las definiciones de clases de todos los objetos y atributos del directorio activo se encuentra en el";
 choices[31]= new Array();
 choices[31][0] = "Schema Naming Context";
 choices[31][1] = "Active Directory Schema MMC";
 choices[31][2] = "Configuration Naming Context";
 choices[31][3] = "Domain Naming Context";
 answers[31] = choices[31][0];
 units[31] = "73";
 comments[31] = "Id Pregunta: 5464. Castilla y Le&oacute;n";


//  Id pregunta: 5493 AÃ±o de creación de pregunta: 2003-01-01
 questions[32]= "33)  Indica la afirmaci&oacute;n correcta respecto a CLS o Common Language Specification:";
 choices[32]= new Array();
 choices[32][0] = "Es el conjunto de clases que se manejan en .NET";
 choices[32][1] = "Recoge la especificacion que debe cumplir todo lenguaje que se ejecuta sobre el framework .NET";
 choices[32][2] = "Es la especificacion del framework .NET";
 choices[32][3] = "Todas son falsas";
 answers[32] = choices[32][1];
 units[32] = "59";
 comments[32] = "Id Pregunta: 5493. ";


//  Id pregunta: 5551 AÃ±o de creación de pregunta: 2003-01-01
 questions[33]= "34)  &iquest;Qu&eacute; considera que NO es una ventaja de la construcci&oacute;n de portales accesibles?";
 choices[33]= new Array();
 choices[33][0] = "Aumento de la usabilidad";
 choices[33][1] = "Facilita la independencia de dispositivo";
 choices[33][2] = "Simplifica el desarrollo";
 choices[33][3] = "Todas las anteriores son correctas.";
 answers[33] = choices[33][3];
 units[33] = "39";
 comments[33] = "Id Pregunta: 5551. ";


//  Id pregunta: 5553 AÃ±o de creación de pregunta: 2003-01-01
 questions[34]= "35)  La clara identificaci&oacute;n de cualquier cambio de idioma que se pueda producir en el texto de un documento, ser&iacute;a un ejemplo de punto de verificaci&oacute;n de accesibilidad de prioridad: ";
 choices[34]= new Array();
 choices[34][0] = "1";
 choices[34][1] = "2";
 choices[34][2] = "3";
 choices[34][3] = "4";
 answers[34] = choices[34][0];
 units[34] = "39";
 comments[34] = "Id Pregunta: 5553. ";


//  Id pregunta: 5554 AÃ±o de creación de pregunta: 2003-01-01
 questions[35]= "36)  Los documentos ATAG:";
 choices[35]= new Array();
 choices[35][0] = "Muestran c&oacute;mo hacer que las herramientas de autor sean accesibles para personas con discapacidad.";
 choices[35][1] = "Muestran c&oacute;mo hacer  que los reproductores multimedia sean accesibles a personas con discapacidad.";
 choices[35][2] = "Est&aacute;n pensados para el contenido web.";
 choices[35][3] = "Todas las anteriores son correctas.";
 answers[35] = choices[35][0];
 units[35] = "39";
 comments[35] = "Id Pregunta: 5554. ";


//  Id pregunta: 5749 AÃ±o de creación de pregunta: 2009-01-01
 questions[36]= "37)  &iquest;Cu&aacute;l de los siguientes elementos no es obligatorio en una firma CAdES-BES?";
 choices[36]= new Array();
 choices[36][0] = "Definici&oacute;n del tipo de contenido";
 choices[36][1] = "Resumen del mensaje";
 choices[36][2] = "Sello de tiempo";
 choices[36][3] = "Atributos identificativos del certificado del firmante";
 answers[36] = choices[36][2];
 units[36] = "73";
 comments[36] = "Id Pregunta: 5749. ";


//  Id pregunta: 5782 AÃ±o de creación de pregunta: 2009-01-01
 questions[37]= "38)  &iquest;Cu&aacute;l de los siguientes objetos no forma parte del proveedor de datos del modelo de objetos ADO.NET?";
 choices[37]= new Array();
 choices[37][0] = "Connection.";
 choices[37][1] = "Command.";
 choices[37][2] = "DataAdapter.";
 choices[37][3] = "DataSet.";
 answers[37] = choices[37][3];
 units[37] = "59";
 comments[37] = "Id Pregunta: 5782. MAP 2008 A2";


//  Id pregunta: 5893 AÃ±o de creación de pregunta: 2009-01-01
 questions[38]= "39)  &iquest;Qu&eacute; es JNI?";
 choices[38]= new Array();
 choices[38][0] = "Un API de Java para acceder a servicios de nombre y directorio";
 choices[38][1] = "Un API de Java para invocar m&eacute;todos escritos en otros lenguajes";
 choices[38][2] = "Un API de Java para crear interfaces gr&aacute;ficas de usuario";
 choices[38][3] = "Ninguna de las anteriores";
 answers[38] = choices[38][1];
 units[38] = "60";
 comments[38] = "Id Pregunta: 5893. NULL";


//  Id pregunta: 5946 AÃ±o de creación de pregunta: 2009-01-01
 questions[39]= "40)  &iquest;qu&eacute; est&aacute;ndar define usuabilidad como &ldquo;La efectividad, eficiencia y satisfacci&oacute;n con la que un producto permite alcanzar objetivos espec&iacute;ficos a usuarios espec&iacute;ficos en un contexto de uso espec&iacute;fico&rdquo;?";
 choices[39]= new Array();
 choices[39][0] = "ISO/IEC 9241-5";
 choices[39][1] = "ISO/IEC 9241-11";
 choices[39][2] = "ISO/IEC 9243-5";
 choices[39][3] = "ISO/IEC 9243-11";
 answers[39] = choices[39][1];
 units[39] = "39";
 comments[39] = "Id Pregunta: 5946. ";


//  Id pregunta: 6007 AÃ±o de creación de pregunta: 2010-01-01
 questions[40]= "41)  La accesibilidad universal:";
 choices[40]= new Array();
 choices[40][0] = "Es un principio recogido y definido en la legislaci&oacute;n espa&ntilde;ola.";
 choices[40][1] = "Es un t&eacute;rmino utilizado en la documentaci&oacute;n sobre accesibilidad, pero no tiene una definici&oacute;n formal en Espa&ntilde;a.";
 choices[40][2] = "Se trata de un concepto que s&oacute;lo se aplica a las personas del medio rural.";
 choices[40][3] = "Es un concepto equivalente a la definici&oacute;n de usabilidad que se da en la ISO/IEC 9241.";
 answers[40] = choices[40][0];
 units[40] = "39";
 comments[40] = "Id Pregunta: 6007. TIC A 2009";


//  Id pregunta: 6247 AÃ±o de creación de pregunta: 2010-01-01
 questions[41]= "42)  &iquest;Qu&eacute; m&oacute;dulo de Apache se incluye para aportar seguridad a Axis2?";
 choices[41]= new Array();
 choices[41][0] = "My Sql";
 choices[41][1] = "Php";
 choices[41][2] = "Rampart";
 choices[41][3] = "Addressing";
 answers[41] = choices[41][2];
 units[41] = "60";
 comments[41] = "Id Pregunta: 6247. TICB-2009, bloque desarrollo";


//  Id pregunta: 6369 AÃ±o de creación de pregunta: 2010-01-01
 questions[42]= "43)  &iquest;A qui&eacute;n corresponde, de acuerdo al Esquema Nacional de Seguridad, elaborar las Gu&iacute;as de Seguridad?";
 choices[42]= new Array();
 choices[42][0] = "A la Secretaria de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n (SETSI)";
 choices[42][1] = "Al Instituto Nacional de Tecnolog&iacute;as de la Comunicaci&oacute;n (INTECO)";
 choices[42][2] = "Al Instituto Nacional de Administraci&oacute;n P&uacute;blica (INAP)";
 choices[42][3] = "Al Centro Criptol&oacute;gico Nacional (CCN)";
 answers[42] = choices[42][3];
 units[42] = "43";
 comments[42] = "Id Pregunta: 6369. Art&iacute;culo 29 ENS. Serie de gu&iacute;as CCN-STIC 800.";


//  Id pregunta: 6377 AÃ±o de creación de pregunta: 2010-01-01
 questions[43]= "44)  &iquest;Cu&aacute;l de los siguientes no es un principio b&aacute;sico del Esquema Nacional de Interoperabilidad?";
 choices[43]= new Array();
 choices[43][0] = "La interoperabilidad como cualidad integral.";
 choices[43][1] = "Car&aacute;cter multidimensional de la interoperabilidad.";
 choices[43][2] = "Enfoque de soluciones multilaterales.";
 choices[43][3] = "Todos los anteriores son principios b&aacute;sicos del Esquema Nacional de Interoperabilidad.";
 answers[43] = choices[43][3];
 units[43] = "43";
 comments[43] = "Id Pregunta: 6377. Art&iacute;culo 4 ENI";


//  Id pregunta: 6383 AÃ±o de creación de pregunta: 2010-01-01
 questions[44]= "45)  Las disposiciones del RD 1671/2009 ser&aacute;n de aplicaci&oacute;n a:";
 choices[44]= new Array();
 choices[44][0] = "Al sector p&uacute;blico en su conjunto.";
 choices[44][1] = "A todas las Administraciones P&uacute;blicas , as&iacute; como de los organismos p&uacute;blicos vinculados o dependientes de las mismas.";
 choices[44][2] = "A las relaciones entre las Administraciones P&uacute;blicas.";
 choices[44][3] = "A la actividad de la Administraci&oacute;n General del Estado, as&iacute; como de los organismos p&uacute;blicos vinculados o dependientes de la misma.";
 answers[44] = choices[44][3];
 units[44] = "43";
 comments[44] = "Id Pregunta: 6383. Art&iacute;culo 1 RD 1671/2009";


//  Id pregunta: 6396 AÃ±o de creación de pregunta: 2010-01-01
 questions[45]= "46)  En relaci&oacute;n a las copias electr&oacute;nicas de los documentos electr&oacute;nicos realizadas por la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos, se&ntilde;ale la opci&oacute;n incorrecta.";
 choices[45]= new Array();
 choices[45][0] = "En caso de cambio del formato original, para que una copia electr&oacute;nica de un documento electr&oacute;nico tenga la condici&oacute;n de copia aut&eacute;ntica, debe incluir su car&aacute;cter de copia entre los metadatos asociados.";
 choices[45][1] = "No se podr&aacute;n generar m&aacute;s copias electr&oacute;nicas aut&eacute;nticas a partir de otras copias electr&oacute;nicas aut&eacute;nticas.";
 choices[45][2] = "Los &oacute;rganos emisores de los documentos administrativos electr&oacute;nicos o receptores de los documentos privados electr&oacute;nicos, o los archivos que reciban los mismos, est&aacute;n obligados a la conservaci&oacute;n de los documentos originales, aunque se hubiere procedido a su copiado.";
 choices[45][3] = "Las copias electr&oacute;nicas generadas que, por ser id&eacute;nticas al documento electr&oacute;nico original no comportan cambio de formato ni de contenido, tendr&aacute;n la eficacia jur&iacute;dica de documento electr&oacute;nico original.";
 answers[45] = choices[45][1];
 units[45] = "43";
 comments[45] = "Id Pregunta: 6396. Art&iacute;culo 43 RD 1671/2009";


//  Id pregunta: 6443 AÃ±o de creación de pregunta: 2010-01-01
 questions[46]= "47)  La posibilidad de que las aplicaciones software puedan funcionar en m&aacute;quinas de distintos fabricantes y arquitecturas se denomina:";
 choices[46]= new Array();
 choices[46][0] = "Adaptabilidad";
 choices[46][1] = "Portabilidad";
 choices[46][2] = "Interoperabilidad";
 choices[46][3] = "Escalabilidad";
 answers[46] = choices[46][1];
 units[46] = "40";
 comments[46] = "Id Pregunta: 6443. Castilla La Mancha 2009";


//  Id pregunta: 6516 AÃ±o de creación de pregunta: 2010-01-01
 questions[47]= "48)  El c&oacute;digo intermedio que se ejecuta en una m&aacute;quina virtual java (JVM) se denomina:";
 choices[47]= new Array();
 choices[47][0] = "bytecode";
 choices[47][1] = "class";
 choices[47][2] = "jar";
 choices[47][3] = "applet";
 answers[47] = choices[47][0];
 units[47] = "60";
 comments[47] = "Id Pregunta: 6516. NULL";


//  Id pregunta: 7147 AÃ±o de creación de pregunta: 2010-01-01
 questions[48]= "49)  El Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica, &oacute;rgano t&eacute;cnico de cooperaci&oacute;n de la Administraci&oacute;n General del Estado, de las Administraciones de las Comunidades Aut&oacute;nomas y de las entidades que integran la Administraci&oacute;n Local en materia de Administraci&oacute;n Electr&oacute;nica, depende de:";
 choices[48]= new Array();
 choices[48][0] = "La Conferencia Sectorial de Administraci&oacute;n P&uacute;blica";
 choices[48][1] = "El Consejo Superior de Administraci&oacute;n Electr&oacute;nica";
 choices[48][2] = "La Direcci&oacute;n General para el Impulso de la Administraci&oacute;n Electr&oacute;nica";
 choices[48][3] = "Del Vicepresidente Tercero del Gobierno y Ministro de Cooperaci&oacute;n Territorial";
 answers[48] = choices[48][0];
 units[48] = "44";
 comments[48] = "Id Pregunta: 7147. Examen TIC B 2009";


//  Id pregunta: 7311 AÃ±o de creación de pregunta: 2010-01-01
 questions[49]= "50)  La Ley 11/2007, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos (LAECSP) regula la &ldquo;Cooperaci&oacute;n entre administraciones para el impulso de la administraci&oacute;n electr&oacute;nica&rdquo; en el:";
 choices[49]= new Array();
 choices[49][0] = "T&iacute;tulo I";
 choices[49][1] = "T&iacute;tulo II";
 choices[49][2] = "T&iacute;tulo III";
 choices[49][3] = "T&iacute;tulo IV";
 answers[49] = choices[49][3];
 units[49] = "44";
 comments[49] = "Id Pregunta: 7311. NULL";


//  Id pregunta: 7312 AÃ±o de creación de pregunta: 2010-01-01
 questions[50]= "51)  La Ley 11/2007, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos (LAECSP), en su art&iacute;culo 42 establece que el esquema Nacional de Interoperabilidad y el Esquema Nacional de Seguridad se aprobar&aacute;n por:";
 choices[50]= new Array();
 choices[50][0] = "Real Decreto del Gobierno, a propuesta de la Conferencia Sectorial de Administraci&oacute;n P&uacute;blica y previo informe de la Comisi&oacute;n Nacional de Administraci&oacute;n Local";
 choices[50][1] = "Ley Org&aacute;nica, a propuesta de la Conferencia Sectorial de Administraci&oacute;n P&uacute;blica y previo informe de la Comisi&oacute;n Nacional de Administraci&oacute;n Local";
 choices[50][2] = "Real Decreto del Gobierno, a propuesta de la Comisi&oacute;n del Mercado de Telecomunicaciones y previo informe de la Comisi&oacute;n Nacional de Administraci&oacute;n Local";
 choices[50][3] = "Ley Org&aacute;nica, a propuesta de la Comisi&oacute;n del Mercado de Telecomunicaciones y previo informe de la Comisi&oacute;n Nacional de Administraci&oacute;n Local";
 answers[50] = choices[50][0];
 units[50] = "44";
 comments[50] = "Id Pregunta: 7312. NULL";


//  Id pregunta: 8223 AÃ±o de creación de pregunta: 2011-01-01
 questions[51]= "52)  En un Ministerio de la Administraci&oacute;n General del Estado, &iquest;cu&aacute;l es el rango administrativo m&iacute;nimo de una sede electr&oacute;nica?:";
 choices[51]= new Array();
 choices[51][0] = "Una Secretar&iacute;a de Estado.";
 choices[51][1] = "Una Subsecretar&iacute;a.";
 choices[51][2] = "Una Subdirecci&oacute;n General.";
 choices[51][3] = "Una Direcci&oacute;n General.";
 answers[51] = choices[51][3];
 units[51] = "43";
 comments[51] = "Id Pregunta: 8223. Examen TIC A1 2010";


//  Id pregunta: 8226 AÃ±o de creación de pregunta: 2011-01-01
 questions[52]= "53)  Se&ntilde;ale la afirmaci&oacute;n NO correcta en relaci&oacute;n con el Registro Electr&oacute;nico Com&uacute;n (REC) de la Administraci&oacute;n General del Estado:";
 choices[52]= new Array();
 choices[52][0] = "REC posibilita la presentaci&oacute;n de cualesquiera solicitudes, escritos y comunicaciones dirigidas a la Administraci&oacute;n General del Estado y a sus Organismos p&uacute;blicos.";
 choices[52][1] = "La Direcci&oacute;n General de Impulso de la Administraci&oacute;n Electr&oacute;nica del Ministerio de la Presidencia, es la responsable de la custodia y manejo de los escritos presentados.";
 choices[52][2] = "Los formatos de los documentos electr&oacute;nicos y de las im&aacute;genes electr&oacute;nicas de los documentos, se establecen en el marco del Esquema Nacional de Interoperabilidad.";
 choices[52][3] = "El acuse de recibo electr&oacute;nico emitido por REC da constancia de la presentaci&oacute;n, pero no implica el inicio del c&oacute;mputo de plazos a los restantes efectos.";
 answers[52] = choices[52][1];
 units[52] = "44";
 comments[52] = "Id Pregunta: 8226. Examen TIC A1 2010";


//  Id pregunta: 8281 AÃ±o de creación de pregunta: 2011-01-01
 questions[53]= "54)  El Esquema Nacional de Interoperatibilidad (ENI) se&ntilde;ala que las condiciones de licenciamiento de las aplicaciones y documentaci&oacute;n asociada tendr&aacute;n en cuenta que el fin perseguido es el aprovechamiento y la reutilizaci&oacute;n. Para este fin, &iquest;qu&eacute; tipo de licenciamiento indica expresamente el ENI que se procurar&aacute; aplicar?:";
 choices[53]= new Array();
 choices[53][0] = "Licencia IDABC.";
 choices[53][1] = "Licencia de C&oacute;digo Abierto del Consejo Superior de Administraci&oacute;n Electr&oacute;nica.";
 choices[53][2] = "Licencia P&uacute;blica de la Uni&oacute;n Europea.";
 choices[53][3] = "Licencia Shareware.";
 answers[53] = choices[53][2];
 units[53] = "43";
 comments[53] = "Id Pregunta: 8281. Examen TIC A1 2010";


//  Id pregunta: 8361 AÃ±o de creación de pregunta: 2011-01-01
 questions[54]= "55)  En el contexto de herramientas de evaluaci&oacute;n de la accesibilidad web, se&ntilde;ale la herramienta INCORRECTA: ";
 choices[54]= new Array();
 choices[54][0] = "WAVE.";
 choices[54][1] = "TrueCrypt.";
 choices[54][2] = "CSS Analyser.";
 choices[54][3] = "TAW.";
 answers[54] = choices[54][1];
 units[54] = "39";
 comments[54] = "Id Pregunta: 8361. Examen TIC A2 2010";


//  Id pregunta: 8601 AÃ±o de creación de pregunta: 2011-01-01
 questions[55]= "56)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas NO es un principio del Dise&ntilde;o Universal?";
 choices[55]= new Array();
 choices[55][0] = "Uso equiparable";
 choices[55][1] = "Uso flexible";
 choices[55][2] = "Que exija poco esfuerzo f&iacute;sico";
 choices[55][3] = "Robusto";
 answers[55] = choices[55][3];
 units[55] = "39";
 comments[55] = "Id Pregunta: 8601. Examen TIC A2 2010 interna";


//  Id pregunta: 8857 AÃ±o de creación de pregunta: 2011-01-01
 questions[56]= "57)  Si en fichero de estilos.css, se incluye: #inner { float: right; width: 130px; color: blue }, &iquest;c&oacute;mo se utilizar&iacute;a el estilo indicado en un p&aacute;rrafo de home.html?";
 choices[56]= new Array();
 choices[56][0] = "&lt;P style=&rdquo;inner&rdquo;&gt;";
 choices[56][1] = "&lt;P id=&rdquo;inner&rdquo;&gt;";
 choices[56][2] = "&lt;P class=&rdquo;inner&rdquo;&gt;";
 choices[56][3] = "&lt;P font=inner&gt;";
 answers[56] = choices[56][1];
 units[56] = "69";
 comments[56] = "Id Pregunta: 8857. Analista Ayto. Madrid 2010";


//  Id pregunta: 8864 AÃ±o de creación de pregunta: 2011-01-01
 questions[57]= "58)  XML es un lenguaje extensible de marcas. Se&ntilde;ale qu&eacute; significa extensible:";
 choices[57]= new Array();
 choices[57][0] = "No est&aacute; limitado el tama&ntilde;o de los ficheros";
 choices[57][1] = "Se pueden incorporar nuevas etiquetas, sin tener que cambiar la aplicaci&oacute;n que lo lee";
 choices[57][2] = "Se puede modelar datos a cualquier nivel de complejidad";
 choices[57][3] = "El uso de los ficheros se puede extender a cualquier plataforma";
 answers[57] = choices[57][1];
 units[57] = "69";
 comments[57] = "Id Pregunta: 8864. Analista Ayto. Madrid 2010";


//  Id pregunta: 8938 AÃ±o de creación de pregunta: 2011-01-01
 questions[58]= "59)  Una sede judicial electr&oacute;nica puede no disponer de:";
 choices[58]= new Array();
 choices[58][0] = "Identificaci&oacute;n de la empresa contratada para su gesti&oacute;n, en su caso";
 choices[58][1] = "Informaci&oacute;n necesaria para su correcta utilizaci&oacute;n";
 choices[58][2] = "Informaci&oacute;n relacionada con la protecci&oacute;n de datos de car&aacute;cter personal";
 choices[58][3] = "Debe disponer de todas las anteriores";
 answers[58] = choices[58][0];
 units[58] = "43";
 comments[58] = "Id Pregunta: 8938. ";


//  Id pregunta: 8965 AÃ±o de creación de pregunta: 2011-01-01
 questions[59]= "60)  Aquel est&aacute;ndar de la W3C de XMLDSig cuya XMLSignature se encuentra envolviendo el documento firmado es:";
 choices[59]= new Array();
 choices[59][0] = "Enveloped";
 choices[59][1] = "Detached";
 choices[59][2] = "Enveloping";
 choices[59][3] = "Todos los documentos firmados con XMLDSig est&aacute;n envueltos por la XMLDSig";
 answers[59] = choices[59][2];
 units[59] = "73";
 comments[59] = "Id Pregunta: 8965. ";


//  Id pregunta: 9170 AÃ±o de creación de pregunta: 2013-01-01
 questions[60]= "61)  Se&ntilde;ale cu&aacute;l de los siguientes no es un bloque de primer nivel en una factura en formato Facturae;";
 choices[60]= new Array();
 choices[60][0] = "Datos del emisor";
 choices[60][1] = "Detalle de la factura";
 choices[60][2] = "Importe de la factura";
 choices[60][3] = "Datos de la firma electr&oacute;nica ";
 answers[60] = choices[60][2];
 units[60] = "70";
 comments[60] = "Id Pregunta: 9170. ";


//  Id pregunta: 9175 AÃ±o de creación de pregunta: 2013-01-01
 questions[61]= "62)  Se&ntilde;ale la afirmaci&oacute;n CORRECTA respecto a la Ley 34/2002:";
 choices[61]= new Array();
 choices[61][0] = "Los operadores de redes y servicios de comunicaciones electr&oacute;nicas, los proveedores de acceso a redes de telecomunicaciones y los prestadores de servicios de alojamiento de datos deber&aacute;n retener los datos de conexi&oacute;n y tr&aacute;fico generados por las comunicaciones establecidas durante la prestaci&oacute;n de un servicio de la sociedad de la informaci&oacute;n por un per&iacute;odo m&aacute;ximo de doce meses.";
 choices[61][1] = "Los contratos celebrados por v&iacute;a electr&oacute;nica en los que intervenga como parte un consumidor se presumir&aacute;n celebrados en el lugar en que el prestador de servicios tenga establecido su domicilio fiscal.";
 choices[61][2] = "El Real Decreto-ley 13/2012 traspone al ordenamiento jur&iacute;dico espa&ntilde;ol la Directiva 2009/136/CE que modifica la anterior Directiva 2002/58/CE.";
 choices[61][3] = "Las comunicaciones comerciales y las ofertas promocionales se regir&aacute;n en todos sus t&eacute;rminos por la Ley 34/2002";
 answers[61] = choices[61][2];
 units[61] = "70";
 comments[61] = "Id Pregunta: 9175. ";


//  Id pregunta: 9580 AÃ±o de creación de pregunta: 2013-01-01
 questions[62]= "63)  Seg&uacute;n el RD 1671/2009 de 6 de noviembre, &iquest;cu&aacute;l de las siguientes condiciones NO es requisito necesario para el uso de CSV como sistema de firma electr&oacute;nica?";
 choices[62]= new Array();
 choices[62][0] = "Car&aacute;cter &uacute;nico del c&oacute;digo del documento.";
 choices[62][1] = "Utilizaci&oacute;n de generadores aleatorios tomando como semillas la identidad del firmante y el contenido del documento.";
 choices[62][2] = "Posibilidad de verificar el documento por el tiempo que se establezca.";
 choices[62][3] = "Para su utilizaci&oacute;n, se requiere una orden del Ministro competente o resoluci&oacute;n del titular del organismo p&uacute;blico, publicada en la sede electr&oacute;nica.";
 answers[62] = choices[62][1];
 units[62] = "43";
 comments[62] = "Id Pregunta: 9580. Examen TIC A1 2011";


//  Id pregunta: 9589 AÃ±o de creación de pregunta: 2013-01-01
 questions[63]= "64)  El Real Decreto 1671/2009 obliga a incluir unos contenidos m&iacute;nimos en los certificados de sello electr&oacute;nico, entre los que NO se incluye:";
 choices[63]= new Array();
 choices[63][0] = "Descripci&oacute;n del tipo de certificado, con la denominaci&oacute;n sello electr&oacute;nico.";
 choices[63][1] = "Actuaciones y procedimientos en los que podr&aacute; ser utilizado. ";
 choices[63][2] = "N&uacute;mero de identificaci&oacute;n fiscal del suscriptor. ";
 choices[63][3] = "Nombre del suscriptor.";
 answers[63] = choices[63][1];
 units[63] = "43";
 comments[63] = "Id Pregunta: 9589. Examen TIC A2 2011";


//  Id pregunta: 9596 AÃ±o de creación de pregunta: 2013-01-01
 questions[64]= "65)  En una arquitectura web en J2EE, indique cu&aacute;l es la opci&oacute;n correcta que representa la capa a la que pertenece la soluci&oacute;n JCA (J2EE Connector Architecture)";
 choices[64]= new Array();
 choices[64][0] = "Capa de cliente";
 choices[64][1] = "Capa de l&oacute;gica de negocio";
 choices[64][2] = "Capa de integraci&oacute;n";
 choices[64][3] = "Capa de sistemas de informaci&oacute;n";
 answers[64] = choices[64][3];
 units[64] = "60";
 comments[64] = "Id Pregunta: 9596. Xunta Libre 2011. JCE conecta un servidor JEE con un Sistema de Informaci&oacute;n Empresarial (EIS)";


//  Id pregunta: 9597 AÃ±o de creación de pregunta: 2013-01-01
 questions[65]= "66)  En el desarrollo de aplicaciones en .NET Framework, &iquest;cu&aacute;l de los siguientes no es un componente del marco .NET Framework?";
 choices[65]= new Array();
 choices[65][0] = "El entorno de ejecuci&oacute;n de lenguaje com&uacute;n (CLR) ";
 choices[65][1] = "La biblioteca de clases base (.NET Framework Base Classes) ";
 choices[65][2] = "El lenguaje de definici&oacute;n de la interfaz (IDL)";
 choices[65][3] = "El motor de generaci&oacute;n de la interfaz de usuario ";
 answers[65] = choices[65][2];
 units[65] = "59";
 comments[65] = "Id Pregunta: 9597. Xunta A2 2011";


//  Id pregunta: 9749 AÃ±o de creación de pregunta: 2014-01-01
 questions[66]= "67)  &iquest;En qu&eacute; ley se exige que se establezcan las medidas necesarias para incentivar el acceso a las telecomunicaciones en lengua de signos espa&ntilde;ola?";
 choices[66]= new Array();
 choices[66][0] = "Ley 30/92";
 choices[66][1] = "Ley 27/2007";
 choices[66][2] = "Ley 11/2007";
 choices[66][3] = "Ley 34/2002";
 answers[66] = choices[66][1];
 units[66] = "39";
 comments[66] = "Id Pregunta: 9749. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9807 AÃ±o de creación de pregunta: 2014-01-01
 questions[67]= "68)  Seg&uacute;n el Real Decreto 1671/2009, la obligatoriedad de comunicarse por medios electr&oacute;nicos con los &oacute;rganos de la Administraci&oacute;n General del Estado o sus organismos p&uacute;blicos vinculados o dependientes, en los supuestos previstos en la Ley 11/2007, podr&aacute; establecerse mediante:";
 choices[67]= new Array();
 choices[67][0] = "Ley ordinaria.";
 choices[67][1] = "Orden Ministerial.";
 choices[67][2] = "Ley org&aacute;nica.";
 choices[67][3] = "Comunicaci&oacute;n en la sede electr&oacute;nica.";
 answers[67] = choices[67][1];
 units[67] = "43";
 comments[67] = "Id Pregunta: 9807. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9959 AÃ±o de creación de pregunta: 2014-01-01
 questions[68]= "69)  ASP.NET proporciona varios modos de persistencia para las variables de sesi&oacute;n. Indique cu&aacute;l de las respuestas NO es un modo v&aacute;lido:";
 choices[68]= new Array();
 choices[68][0] = "InProc";
 choices[68][1] = "StateServer";
 choices[68][2] = "ClusterServer";
 choices[68][3] = "SqlServer";
 answers[68] = choices[68][2];
 units[68] = "59,115";
 comments[68] = "Id Pregunta: 9959. Examen T&eacute;cnico Superior TIC. Instituciones Sanitarias del Servicio Extreme&ntilde;o de Salud, 2014";


//  Id pregunta: 10011 AÃ±o de creación de pregunta: 2014-01-01
 questions[69]= "70)  &iquest;Que disposici&oacute;n legal determina el procedimiento para la expedici&oacute;n del DNI electr&oacute;nico y sus certificados de firma electr&oacute;nica?";
 choices[69]= new Array();
 choices[69][0] = "Ley 11/2007, de 22 de junio.";
 choices[69][1] = "RD 4/2010, de 8 de enero.";
 choices[69][2] = "RD 1553/2005, de 23 de diciembre.";
 choices[69][3] = "Ley 26/2007, de 28 de diciembre.";
 answers[69] = choices[69][2];
 units[69] = "70";
 comments[69] = "Id Pregunta: 10011. ";


//  Id pregunta: 10152 AÃ±o de creación de pregunta: 2014-01-01
 questions[70]= "71)  El registro electr&oacute;nico que permite hacer constar y gestionar las representaciones que los interesados otorguen a terceros, con el fin de que &eacute;stos puedan actuar en su nombre de forma electr&oacute;nica ante la Administraci&oacute;n General del Estado y/o sus organismos p&uacute;blicos vinculados o dependientes:";
 choices[70]= new Array();
 choices[70][0] = "se crea en el RD 1671/2009 (art. 15) ";
 choices[70][1] = "se denomina REA (Registro Electr&oacute;nico de Apoderamiento)";
 choices[70][2] = "est&aacute; regulado por la Orden HAP/1637/2012";
 choices[70][3] = "Todas las anteriores son ciertas";
 answers[70] = choices[70][3];
 units[70] = "43";
 comments[70] = "Id Pregunta: 10152. ";


//  Id pregunta: 10236 AÃ±o de creación de pregunta: 2014-01-01
 questions[71]= "72)  El objeto PreparedStatement de la api java.sql se utiliza para:";
 choices[71]= new Array();
 choices[71][0] = "Ejecutar una sentencia SQL de forma repetida variando los par&aacute;metros de la misma";
 choices[71][1] = "Nos permite acceder a procedimientos almacenados en la base de datos";
 choices[71][2] = "Es &uacute;til a la hora de trabajar con el metadata de la base de datos";
 choices[71][3] = "ninguna de las anteriores";
 answers[71] = choices[71][0];
 units[71] = "60";
 comments[71] = "Id Pregunta: 10236. NULL";


//  Id pregunta: 10240 AÃ±o de creación de pregunta: 2014-01-01
 questions[72]= "73)  Una vez creado un objeto StringTokenizer, cu&aacute;l es el m&eacute;todo que nos permite ir avanzando hasta el siguiente elemento del String:";
 choices[72]= new Array();
 choices[72][0] = "next()";
 choices[72][1] = "nextValue()";
 choices[72][2] = "nextToken()";
 choices[72][3] = "Ninguno de los anteriores";
 answers[72] = choices[72][2];
 units[72] = "60";
 comments[72] = "Id Pregunta: 10240. NULL";


//  Id pregunta: 10350 AÃ±o de creación de pregunta: 2014-01-01
 questions[73]= "74)  En relaci&oacute;n con las pautas de accesibilidad WCAG 2.0, indique la respuesta correcta:";
 choices[73]= new Array();
 choices[73][0] = "Para cumplir nivel A, las p&aacute;ginas no pueden contener ning&uacute;n elemento que destelle m&aacute;s de 3 veces por segundo";
 choices[73][1] = "Lo anterior es cierto, pero para nivel AA";
 choices[73][2] = "Lo anterior es cierto, pero para nivel AAA";
 choices[73][3] = "Lo anterior es cierto, pero a&ntilde;adiendo que adem&aacute;s el destello debe estar por debajo del umbral de destello general y de rojo";
 answers[73] = choices[73][2];
 units[73] = "39";
 comments[73] = "Id Pregunta: 10350. Consultar WCAG Pauta 2.3 Convulsiones";


//  Id pregunta: 10352 AÃ±o de creación de pregunta: 2014-01-01
 questions[74]= "75)  &iquest;Cu&aacute;l de las siguientes no es una herramienta de evaluaci&oacute;n autom&aacute;tica de la accesibilidad de p&aacute;ginas web?";
 choices[74]= new Array();
 choices[74][0] = "ZEUS";
 choices[74][1] = "HERA";
 choices[74][2] = "BOBBY";
 choices[74][3] = "TAW";
 answers[74] = choices[74][0];
 units[74] = "39";
 comments[74] = "Id Pregunta: 10352. Otras herramientas pueden ser eXaminator, Wave o EvalAccess";


//  Id pregunta: 10457 AÃ±o de creación de pregunta: 2014-01-01
 questions[75]= "76)  &iquest;Cu&aacute;l de los siguientes elementos no forma parte de HTML 5?";
 choices[75]= new Array();
 choices[75][0] = "&lt;canvas&gt;";
 choices[75][1] = "&lt;applet&gt;";
 choices[75][2] = "&lt;keygen&gt;";
 choices[75][3] = "&lt;audio&gt;";
 answers[75] = choices[75][1];
 units[75] = "69";
 comments[75] = "Id Pregunta: 10457. NULL";


//  Id pregunta: 10471 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  En una PKI:";
 choices[76]= new Array();
 choices[76][0] = "Un certificado se a&ntilde;ade a una CRL en cuanto se tiene conocimiento de que hay motivos para su revocaci&oacute;n.";
 choices[76][1] = "Las CRLs incluyen todos los certificados emitidos por una CA.";
 choices[76][2] = "Un certificado revocado es eliminado de una CRL en cuanto se emite un nuevo certificado de las mismas caracter&iacute;sticas para el titular del certificado revocado. ";
 choices[76][3] = "No es obligatorio que una CA emita CRLs si proporciona otro mecanismo de consulta del estado de los certificados.";
 answers[76] = choices[76][3];
 units[76] = "73";
 comments[76] = "Id Pregunta: 10471. ";


//  Id pregunta: 10585 AÃ±o de creación de pregunta: 2015-01-01
 questions[77]= "78)  Seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Reutilizaci&oacute;n de recursos de la informaci&oacute;n, las URIs:";
 choices[77]= new Array();
 choices[77][0] = "Deben cumplir el principio de persistencia.";
 choices[77][1] = "Deben utilizar el protocolo FTP.";
 choices[77][2] = "Deben exponer informaci&oacute;n sobre la implementaci&oacute;n t&eacute;cnica de sus recursos.";
 choices[77][3] = "Deben usar una estructura consistente y fija.";
 answers[77] = choices[77][0];
 units[77] = "43";
 comments[77] = "Id Pregunta: 10585. Anexo II (Esquema de URI)";


//  Id pregunta: 10620 AÃ±o de creación de pregunta: 2015-01-01
 questions[78]= "79)  Indique la respuesta incorrecta:";
 choices[78]= new Array();
 choices[78][0] = "Java es independiente de la plataforma.";
 choices[78][1] = "El entorno de ejecuci&oacute;n de Java es el responsable de gestionar el ciclo de vida de los objetos.";
 choices[78][2] = "El Global Interpreter Lock (GIL) permite la concurrencia del lenguaje Java.";
 choices[78][3] = "Un programa desarrollado en Java requiere una m&aacute;quina virtual para ejecutarse.";
 answers[78] = choices[78][2];
 units[78] = "60";
 comments[78] = "Id Pregunta: 10620. El GIL es un mecanismo de Python. Java s&iacute; es concurrente.";


//  Id pregunta: 10705 AÃ±o de creación de pregunta: 2015-01-01
 questions[79]= "80)  &iquest;Cu&aacute;l de los siguientes no es considerado un metadato m&iacute;nimo del expediente electr&oacute;nico?";
 choices[79]= new Array();
 choices[79][0] = "Versi&oacute;n NTI.";
 choices[79][1] = "Identificador.";
 choices[79][2] = "N&uacute;mero de documentos incluidos.";
 choices[79][3] = "Tipo de firma.";
 answers[79] = choices[79][2];
 units[79] = "43";
 comments[79] = "Id Pregunta: 10705. ";


//  Id pregunta: 10713 AÃ±o de creación de pregunta: 2015-01-01
 questions[80]= "81)  &iquest;Cu&aacute;l no es seg&uacute;n la NTI de Modelo de Datos para el Intercambio de asientos entre las entidades registrales un componente de la plataforma de intercambio?";
 choices[80]= new Array();
 choices[80][0] = "Origen";
 choices[80][1] = "Destino";
 choices[80][2] = "Gestor de intercambio";
 choices[80][3] = "Sistema de intercambio";
 answers[80] = choices[80][3];
 units[80] = "43";
 comments[80] = "Id Pregunta: 10713. ";


//  Id pregunta: 10730 AÃ±o de creación de pregunta: 2015-01-01
 questions[81]= "82)  Seg&uacute;n la NTI de requisitos de conexi&oacute;n a la red de comunicaciones de las Administraciones P&uacute;blicas espa&ntilde;olas &iquest;cual de los siguientes no es un tipo de Punto de Presencia (PdP) de la Red SARA?";
 choices[81]= new Array();
 choices[81][0] = "Proveedores de Acceso a la Red SARA (PAS).";
 choices[81][1] = "Centros de Proceso de Datos (CPD) de SARA.";
 choices[81][2] = "Red sTESTA (secure Trans-European Services for Telematics between Administrations).";
 choices[81][3] = "Todos los anteriores son tipos de PdP.";
 answers[81] = choices[81][3];
 units[81] = "43";
 comments[81] = "Id Pregunta: 10730. ";


//  Id pregunta: 10753 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  &iquest;Cu&aacute;l no se una l&iacute;nea de acci&oacute;n de la Estrategia de Ciberseguridad Nacional?";
 choices[82]= new Array();
 choices[82][0] = "Capacidad de prevenci&oacute;n, detecci&oacute;n, respuesta y recuperaci&oacute;n ante las ciberamenazas.";
 choices[82][1] = "Seguridad de los Sistemas de Informaci&oacute;n y Telecomunicaciones que soportan las Administraciones P&uacute;blicas.";
 choices[82][2] = "Seguridad de los Sistemas de Informaci&oacute;n y Telecomunicaciones que soportan las Infraestructuras Cr&iacute;ticas.";
 choices[82][3] = "Colaboraci&oacute;n con las entidades privadas para establecer un marco de seguridad nacional.";
 answers[82] = choices[82][3];
 units[82] = "43";
 comments[82] = "Id Pregunta: 10753. ";


//  Id pregunta: 10754 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  &iquest;Qui&eacute;n dirige a los tres componentes de la Estructura de Ciberseguridad Nacional (el Consejo de Seguridad Nacional; el Comit&eacute; Especializado de Ciberseguridad; el Comit&eacute; Especializado de Situaci&oacute;n?";
 choices[83]= new Array();
 choices[83][0] = "El Presidente del Gobierno.";
 choices[83][1] = "El Ministro de Hacienda y Administraciones P&uacute;blicas.";
 choices[83][2] = "El Ministro de Defensa.";
 choices[83][3] = "El CIO de la AGE.";
 answers[83] = choices[83][0];
 units[83] = "43";
 comments[83] = "Id Pregunta: 10754. ";


//  Id pregunta: 10784 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  Se&ntilde;ale la opci&oacute;n correcta dentro de la siguiente relaci&oacute;n de infraestructura/servicio com&uacute;n de la Administraci&oacute;n y su definici&oacute;n:";
 choices[84]= new Array();
 choices[84][0] = "ORVE - Soluci&oacute;n integral de registro para organismos p&uacute;blicos, que cubre la gesti&oacute;n tanto de sus oficinas de registro como de las unidades tramitadoras destinatarias de la documentaci&oacute;n.";
 choices[84][1] = "Sistema de informaci&oacute;n REINA - proporciona un Inventario unificado y com&uacute;n a toda la Administraci&oacute;n de las unidades org&aacute;nicas / organismos p&uacute;blicos, sus oficinas asociadas y unidades de gesti&oacute;n econ&oacute;mica - presupuestaria, facilitando el mantenimiento distribuido y corresponsable de la informaci&oacute;n.";
 choices[84][2] = "GEISER - Permite a las diferentes Administraciones P&uacute;blicas consultar y gestionar los apoderamientos otorgados por un ciudadano para sus procedimientos.";
 choices[84][3] = "CIRCABC - Herramienta de trabajo en grupo basada en tecnolog&iacute;as de Internet y en software de fuentes abiertas desarrollada por el Programa ISA de la Comisi&oacute;n de la Comunidad Europea y dirigido a necesidades de las Administraciones P&uacute;blicas, Ciudadanos y Empresas.";
 answers[84] = choices[84][3];
 units[84] = "44";
 comments[84] = "Id Pregunta: 10784. Examen GSI 2014";


//  Id pregunta: 10851 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  La plataforma inform&aacute;tica y de servicios en Internet hospedada en centros de datos administrados o respaldados por Microsoft se llama:";
 choices[85]= new Array();
 choices[85][0] = "Bajoo.";
 choices[85][1] = "Azure.";
 choices[85][2] = "Heroku.";
 choices[85][3] = "Adrive.";
 answers[85] = choices[85][1];
 units[85] = "59, 115";
 comments[85] = "Id Pregunta: 10851. Examen GSI 2014";


//  Id pregunta: 10855 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  En cuanto a las especificaciones MTOM y XOP, &iquest;cu&aacute;l de las siguientes sentencias NO es correcta?";
 choices[86]= new Array();
 choices[86][0] = "XOP es un acr&oacute;nimo de XML-binary Optimized Packaging.";
 choices[86][1] = "MTOM/XOP son recomendaciones desarrolladas por la IETF.";
 choices[86][2] = "MTOM optimiza la transferencia de datos binarios sobre SOAP.";
 choices[86][3] = "MTOM normalmente usa XOP para serializar el mensaje que contiene datos binarios.";
 answers[86] = choices[86][1];
 units[86] = "69";
 comments[86] = "Id Pregunta: 10855. Examen GSI 2014";


//  Id pregunta: 10856 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  La herramienta que incluye JAXB para convertir un XML Schema a representaciones de clases Java se denomina:";
 choices[87]= new Array();
 choices[87][0] = "jconverter";
 choices[87][1] = "schemagen";
 choices[87][2] = "xjc";
 choices[87][3] = "jaxbws";
 answers[87] = choices[87][2];
 units[87] = "69";
 comments[87] = "Id Pregunta: 10856. Examen GSI 2014";


//  Id pregunta: 10971 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  Respecto al Registro de Funcionarios Habilitados, se&ntilde;ale la respuesta correcta:";
 choices[88]= new Array();
 choices[88][0] = "Podr&aacute;n ser habilitados los funcionarios de carrera en situaci&oacute;n de servicio activo e inscritos en el Registro Electr&oacute;nico de Apoderamientos.";
 choices[88][1] = "El registro permite la descarga, bajo petici&oacute;n, de un fichero que con todas las habilitaciones vigentes para los tr&aacute;mites y actuaciones por medios electr&oacute;nicos de los que el &oacute;rgano peticionario sea competente.";
 choices[88][2] = "Las habilitaciones inscritas en el Registro deber&aacute;n ser efectivas en el plazo m&aacute;ximo de 5 d&iacute;as h&aacute;biles.";
 choices[88][3] = "La habilitaci&oacute;n se otorgar&aacute; por tiempo m&aacute;ximo de 2 a&ntilde;os, siendo necesaria su renovaci&oacute;n por parte del Departamento competente.";
 answers[88] = choices[88][1];
 units[88] = "43";
 comments[88] = "Id Pregunta: 10971. TIC A1 AGE 2014";


//  Id pregunta: 10973 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  &iquest;En virtud de qu&eacute; instrumento jur&iacute;dico se aprueban y publican las Normas T&eacute;cnicas de Interoperabilidad?";
 choices[89]= new Array();
 choices[89][0] = "Orden Ministerial del Ministro de Hacienda y Administraciones P&uacute;blicas.";
 choices[89][1] = "Resoluci&oacute;n del Secretario de Estado de Presidencia.";
 choices[89][2] = "Resoluci&oacute;n del Secretario de Estado de Administraciones P&uacute;blicas.";
 choices[89][3] = "Reglamento del Ministerio de Hacienda y Administraciones P&uacute;blicas.";
 answers[89] = choices[89][2];
 units[89] = "43";
 comments[89] = "Id Pregunta: 10973. TIC A1 AGE 2014";


//  Id pregunta: 10980 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  LINQ (Language-Integrated Query) es:";
 choices[90]= new Array();
 choices[90][0] = "Es una librer&iacute;a de Javascript para la integraci&oacute;n de aplicaciones con HTML5.";
 choices[90][1] = "Es la tecnolog&iacute;a que permite la integraci&oacute;n de elementos Java dentro de una aplicaci&oacute;n .NET y viceversa.";
 choices[90][2] = "Facilita el acceso a bases de datos y ficheros XML desde una aplicaci&oacute;n .NET.";
 choices[90][3] = "Es el API de integraci&oacute;n de la red social profesional Linkedin, basado en OAuth.";
 answers[90] = choices[90][2];
 units[90] = "59";
 comments[90] = "Id Pregunta: 10980. TIC A1 AGE 2014";


//  Id pregunta: 10981 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  De la Red SARA (Sistemas de Aplicaciones y Redes para las Administraciones) podemos afirmar que:";
 choices[91]= new Array();
 choices[91][0] = "Permite acceder a la plataforma de validaci&oacute;n de firma electr&oacute;nica @firma.";
 choices[91][1] = "No admite IPv6. Tampoco admite tr&aacute;fico cifrado.";
 choices[91][2] = "Su implantaci&oacute;n se establece como una recomendaci&oacute;n en el art&iacute;culo 43 de la Ley 11/2007 LAECSP.";
 choices[91][3] = "A&uacute;n se encuentra en fase beta y no se encuentra afectada por el ENS (Esquema Nacional de Seguridad).";
 answers[91] = choices[91][0];
 units[91] = "44";
 comments[91] = "Id Pregunta: 10981. TIC A1 AGE 2014";


//  Id pregunta: 10987 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Al desarrollar una aplicaci&oacute;n para Android, respecto al fichero AndroidManifest.xml se&ntilde;ale la respuesta correcta:";
 choices[92]= new Array();
 choices[92][0] = "Debe renombrarse en el momento de la publicaci&oacute;n de la aplicaci&oacute;n en Google Play, con un identificador &uacute;nico.";
 choices[92][1] = "Declara los permisos que debe tener la aplicaci&oacute;n para acceder a las partes protegidas del API.";
 choices[92][2] = "Debe posicionarse en el directorio \etc\manifest.";
 choices[92][3] = "Establece las condiciones legales que el usuario debe aceptar para poder acceder a la aplicaci&oacute;n.";
 answers[92] = choices[92][1];
 units[92] = "60";
 comments[92] = "Id Pregunta: 10987. TIC A1 AGE 2014";


//  Id pregunta: 11043 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;En qu&eacute; patr&oacute;n de dise&ntilde;o est&aacute; basada la arquitectura de Swing?";
 choices[93]= new Array();
 choices[93][0] = "Modelo-Vista-Controlador (MVC)";
 choices[93][1] = "Singleton";
 choices[93][2] = "Observer";
 choices[93][3] = "Facade";
 answers[93] = choices[93][0];
 units[93] = "60";
 comments[93] = "Id Pregunta: 11043. ";


//  Id pregunta: 11120 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l de los siguientes no es un contenido m&iacute;nimo que deben tener las sedes electr&oacute;nicas de acuerdo con el art&iacute;culo 6 del RD 1671/2009?";
 choices[94]= new Array();
 choices[94][0] = "Sistema de verificaci&oacute;n de los certificados de la sede, accesible de forma directa y gratuita";
 choices[94][1] = "Informaci&oacute;n relacionada con la protecci&oacute;n de datos de car&aacute;cter personal, incluyendo un enlace con la sede electr&oacute;nica de la AEPD.";
 choices[94][2] = "Servicios de asesoramiento electr&oacute;nico al usuario para la correcta utilizaci&oacute;n de la sede";
 choices[94][3] = "Todos los anteriores son contenidos m&iacute;nimos de las sedes electr&oacute;nicas.";
 answers[94] = choices[94][3];
 units[94] = "43";
 comments[94] = "Id Pregunta: 11120. ";


//  Id pregunta: 11148 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  De acuerdo con la Ley 9/2014 General de Telecomunicaciones, &iquest;cu&aacute;l es el plazo m&aacute;ximo de validez de los certificados reconocidos para firma electr&oacute;nica?";
 choices[95]= new Array();
 choices[95][0] = "3 a&ntilde;os";
 choices[95][1] = "4 a&ntilde;os";
 choices[95][2] = "5 a&ntilde;os";
 choices[95][3] = "6 a&ntilde;os";
 answers[95] = choices[95][2];
 units[95] = "73";
 comments[95] = "Id Pregunta: 11148. ";


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


//  Id pregunta: 11220 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Cu&aacute;l de las siguientes no es una tecnolog&iacute;a de Microsoft .NET?";
 choices[97]= new Array();
 choices[97][0] = "Servicios: ASP.NET y WCF.";
 choices[97][1] = "Aplicaciones de escritorio: WinForms, WPF.";
 choices[97][2] = "Aplicaciones para dispositivos m&oacute;viles: Silverlait, WinFX.";
 choices[97][3] = "Aplicaciones en la nube: Azure.";
 answers[97] = choices[97][2];
 units[97] = "59";
 comments[97] = "Id Pregunta: 11220. ";


//  Id pregunta: 11482 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Seg&uacute;n el art&iacute;culo 6 de la Ley de Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas 39/2015, relativo a los registros electr&oacute;nicos de apoderamientos, los poderes inscritos en dicho registro tendr&aacute;n una validez m&aacute;xima";
 choices[98]= new Array();
 choices[98][0] = "De 5 a&ntilde;os a contar desde la fecha de inscripci&oacute;n.";
 choices[98][1] = "De 4 a&ntilde;os a contar desde la fecha de inscripci&oacute;n.";
 choices[98][2] = "De 2 a&ntilde;os a contar desde la fecha de inscripci&oacute;n.";
 choices[98][3] = "De 10 a&ntilde;os a contar desde la fecha de inscripci&oacute;n.";
 answers[98] = choices[98][0];
 units[98] = "43";
 comments[98] = "Id Pregunta: 11482. NULL";


//  Id pregunta: 11532 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  En .NET, la biblioteca de clases ";
 choices[99]= new Array();
 choices[99][0] = "S&oacute;lo implementa funciones para la capa de l&oacute;gica de negocio.";
 choices[99][1] = "S&oacute;lo implementa funciones para la capa de l&oacute;gica de negocio y acceso a datos.";
 choices[99][2] = "Es &uacute;nica para todos los lenguajes de la plataforma.";
 choices[99][3] = "Todas las anteriores son falsas.";
 answers[99] = choices[99][2];
 units[99] = "59";
 comments[99] = "Id Pregunta: 11532. NULL";


