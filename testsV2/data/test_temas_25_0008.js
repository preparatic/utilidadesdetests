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

//  Id pregunta: 301 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  La escalabilidad es:";
 choices[0]= new Array();
 choices[0][0] = "Un caso particular de la portabilidad";
 choices[0][1] = "La capacidad de utilizar el mismo entorno de software en diferentes clases de ordenadores";
 choices[0][2] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son correctas";
 choices[0][3] = "Una propiedad que se da &uacute;nicamente en el mundo Unix";
 answers[0] = choices[0][2];
 units[0] = "40";
 comments[0] = "Id Pregunta: 301. ";


//  Id pregunta: 646 AÃ±o de creación de pregunta: 2006-01-01
 questions[1]= "2)  Cu&aacute;l de los siguientes grupos no forma parte de la estructura del Sistema Europeo de Normalizaci&oacute;n:";
 choices[1]= new Array();
 choices[1][0] = "El Consejo europeo de Normalizaci&oacute;n.";
 choices[1][1] = "El Comit&eacute; europeo de Normalizaci&oacute;n.";
 choices[1][2] = "Los &Oacute;rganos internacionales de Normalizaci&oacute;n.";
 choices[1][3] = "Los &Oacute;rganos europeos de Normalizaci&oacute;n.";
 answers[1] = choices[1][2];
 units[1] = "40";
 comments[1] = "Id Pregunta: 646. ";


//  Id pregunta: 706 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  DTD se emplea para:";
 choices[2]= new Array();
 choices[2][0] = "Crear documentos XML bien formados";
 choices[2][1] = "Formatear documentos XML";
 choices[2][2] = "Transformar documentos HTML en XML";
 choices[2][3] = "Validar documentos XML";
 answers[2] = choices[2][3];
 units[2] = "69";
 comments[2] = "Id Pregunta: 706. Similar a examen TIC SS A 2004";


//  Id pregunta: 825 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;C&oacute;mo se denomina en Java el miniprograma que corre solamente bajo un navegador y es descargado autom&aacute;ticamente como parte de una p&aacute;gina web?:";
 choices[3]= new Array();
 choices[3][0] = "JavaScript";
 choices[3][1] = "Applet";
 choices[3][2] = "Servlet";
 choices[3][3] = "XML";
 answers[3] = choices[3][1];
 units[3] = "60";
 comments[3] = "Id Pregunta: 825. JCED - Preparatic XVII";


//  Id pregunta: 931 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;Qu&eacute; es un applet de Java?:";
 choices[4]= new Array();
 choices[4][0] = "Una aplicaci&oacute;n escrita en Java";
 choices[4][1] = "Un control ActiveX";
 choices[4][2] = "Un programa de Java incrustado en una p&aacute;gina HTML";
 choices[4][3] = "Ninguna de las anteriores";
 answers[4] = choices[4][2];
 units[4] = "60";
 comments[4] = "Id Pregunta: 931. Se especifica en la pregunta que sea de Java, porque Flash tambi&eacute;n es un applet";


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


//  Id pregunta: 1083 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  En el lenguaje Java a las variables de clase (class variables) se les denomina tambi&eacute;n:";
 choices[6]= new Array();
 choices[6][0] = "Private o privadas";
 choices[6][1] = "Static o est&aacute;ticas";
 choices[6][2] = "Final o final";
 choices[6][3] = "System o sistema";
 answers[6] = choices[6][1];
 units[6] = "60";
 comments[6] = "Id Pregunta: 1083. NULL";


//  Id pregunta: 1103 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  En Java, al declarar una variable de tipo array";
 choices[7]= new Array();
 choices[7][0] = "No es necesario indicar la longitud del objeto";
 choices[7][1] = "Es necesario indicar la longitud m&aacute;xima del objeto";
 choices[7][2] = "Es necesario indicar la longitud exacta del objeto";
 choices[7][3] = "Ninguna de las anteriores";
 answers[7] = choices[7][0];
 units[7] = "60";
 comments[7] = "Id Pregunta: 1103. JCED - Preparatic XVII. Solo se debe indicar la long max de cada dimensi&oacute;n del array si no se asigna en ese momento.";


//  Id pregunta: 1298 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Para especificar localizadores en XML se usa:";
 choices[8]= new Array();
 choices[8][0] = "s&oacute;lo el est&aacute;ndar Xlink";
 choices[8][1] = "s&oacute;lo el est&aacute;ndar Xpointer";
 choices[8][2] = "los est&aacute;ndares Xlink y Xpointer";
 choices[8][3] = "ninguno de los anteriores";
 answers[8] = choices[8][2];
 units[8] = "69";
 comments[8] = "Id Pregunta: 1298. NULL";


//  Id pregunta: 1678 AÃ±o de creación de pregunta: 2004-01-01
 questions[9]= "10)  Indique la afirmaci&oacute;n verdadera respecta a ADO.NET";
 choices[9]= new Array();
 choices[9][0] = "Utiliza el objeto DATASET, estructura relacional que puede ser le&iacute;da, escrita y serializada usando XML";
 choices[9][1] = "Potencia el acceso a datos desconectados usando XML";
 choices[9][2] = "El DATASET de ADO.NET accede a los datos con independencia de la fuente de datos que lo aprovisiona";
 choices[9][3] = "Todas son ciertas";
 answers[9] = choices[9][3];
 units[9] = "59";
 comments[9] = "Id Pregunta: 1678. ";


//  Id pregunta: 1754 AÃ±o de creación de pregunta: 2006-01-01
 questions[10]= "11)  &iquest;Qu&eacute; es el CLR?";
 choices[10]= new Array();
 choices[10][0] = "Un lenguaje de programaci&oacute;n para .Net";
 choices[10][1] = "El entorno de ejecuci&oacute;n de .Net";
 choices[10][2] = "Una biblioteca de clases de objetos";
 choices[10][3] = "Un motor de bases de datos para dispositivos m&oacute;viles";
 answers[10] = choices[10][1];
 units[10] = "59";
 comments[10] = "Id Pregunta: 1754. ";


//  Id pregunta: 1762 AÃ±o de creación de pregunta: 2006-01-01
 questions[11]= "12)  Se&ntilde;alar la afirmaci&oacute;n FALSA sobre los APPLETS de Java";
 choices[11]= new Array();
 choices[11][0] = "Programa Java que proporciona funcionalidad avanzada a una p&aacute;gina web";
 choices[11][1] = "S&oacute;lo utiliza recursos del cliente, no interviene nada el servidor.";
 choices[11][2] = "No puede leer o escribir ficheros en la m&aacute;quina local en la que se ejecute";
 choices[11][3] = "Todas las afirmaciones anteriores son verdaderas";
 answers[11] = choices[11][3];
 units[11] = "60";
 comments[11] = "Id Pregunta: 1762. B es falsa. Usa recursos del servidor para descargar el propio Applet y, en su caso, hacer consultas.";


//  Id pregunta: 1770 AÃ±o de creación de pregunta: 2006-01-01
 questions[12]= "13)  Respecto a los drivers utilizados en JDBC";
 choices[12]= new Array();
 choices[12][0] = "El driver de tipo 1 utiliza c&oacute;digo Java para hacer llamadas a una API nativa que debe estar en la m&aacute;quina que accede a la base de datos.";
 choices[12][1] = "El driver de tipo III no requiere ninguna instalaci&oacute;n adicional en la m&aacute;quina cliente, pero obliga a la existencia del middleware.";
 choices[12][2] = "La ventaja del driver tipo II es que da acceso a pr&aacute;cticamente todos los sistemas de gesti&oacute;n de base de datos del mercado";
 choices[12][3] = "todas son falsas";
 answers[12] = choices[12][1];
 units[12] = "60";
 comments[12] = "Id Pregunta: 1770. NULL";


//  Id pregunta: 1779 AÃ±o de creación de pregunta: 2006-01-01
 questions[13]= "14)  &iquest;Cu&aacute;l de los siguientes no es un servidor de aplicaciones J2EE?";
 choices[13]= new Array();
 choices[13][0] = "Tomcat";
 choices[13][1] = "Geronimo";
 choices[13][2] = "JBoss";
 choices[13][3] = "Los 3 lo son";
 answers[13] = choices[13][0];
 units[13] = "60";
 comments[13] = "Id Pregunta: 1779. De la especificaci&oacute;n JEE, Tomcat no cumple la especificaci&oacute;n EJB, solo servlets.";


//  Id pregunta: 1780 AÃ±o de creación de pregunta: 2006-01-01
 questions[14]= "15)  Se&ntilde;ale cual de estos entornos de desarrollo en Java no es gratuito";
 choices[14]= new Array();
 choices[14][0] = "Jdeveloper";
 choices[14][1] = "Eclipse";
 choices[14][2] = "JBuilder";
 choices[14][3] = "NetBeans";
 answers[14] = choices[14][2];
 units[14] = "60";
 comments[14] = "Id Pregunta: 1780. NULL";


//  Id pregunta: 1861 AÃ±o de creación de pregunta: 2006-01-01
 questions[15]= "16)  Se&ntilde;ale la correcta:";
 choices[15]= new Array();
 choices[15][0] = "El protocolo X500 es un est&aacute;ndar de la IETF";
 choices[15][1] = "El  est&aacute;ndar de certificados digitales X509v3 introdujo el concepto de extensi&oacute;n";
 choices[15][2] = "El protocolo de la ITU LDAP dispone su informaci&oacute;n relacionada jer&aacute;rquicamente.";
 choices[15][3] = "Ninguna de las anteriores";
 answers[15] = choices[15][1];
 units[15] = "73";
 comments[15] = "Id Pregunta: 1861. ";


//  Id pregunta: 1924 AÃ±o de creación de pregunta: 2006-01-01
 questions[16]= "17)  Respecto a los servicios de Directorio Electr&oacute;nico, la norma X-500 de la UIT-T define cuatro tipos de clases de objeto de acuerdo a su funcionalidad:";
 choices[16]= new Array();
 choices[16][0] = "Auxiliar, Estructural, Simplificada, Alias";
 choices[16][1] = "Estructural, Simplificada, Auxiliar, Alias";
 choices[16][2] = "Abstracta, Esquem&aacute;tica, Estructural, Alias";
 choices[16][3] = "Abstracta, Estructural, Auxiliar, Alias";
 answers[16] = choices[16][3];
 units[16] = "73";
 comments[16] = "Id Pregunta: 1924. ";


//  Id pregunta: 4130 AÃ±o de creación de pregunta: 2006-01-01
 questions[17]= "18)  Los elementos XML de tipo y atributo deben tener una identidad &uacute;nica en el &aacute;mbito del";
 choices[17]= new Array();
 choices[17][0] = "servidor o sitio";
 choices[17][1] = "espacio de nombres ";
 choices[17][2] = "nombre de dominio";
 choices[17][3] = "nombre de dominio completamente cualificado (FQDM)";
 answers[17] = choices[17][1];
 units[17] = "69";
 comments[17] = "Id Pregunta: 4130. NULL";


//  Id pregunta: 4267 AÃ±o de creación de pregunta: 2007-01-01
 questions[18]= "19)  Indique cu&aacute;l de los siguientes algoritmos criptogr&aacute;ficos se basa en el logaritmo discreto el&iacute;ptico";
 choices[18]= new Array();
 choices[18][0] = "RSA";
 choices[18][1] = "RW";
 choices[18][2] = "Diffie-Hellman";
 choices[18][3] = "DSAE";
 answers[18] = choices[18][3];
 units[18] = "73";
 comments[18] = "Id Pregunta: 4267. ";


//  Id pregunta: 4286 AÃ±o de creación de pregunta: 2007-01-01
 questions[19]= "20)  Los documentos electr&oacute;nicos conformados de acuerdo con la norma XML utilizan el juego de caracteres:";
 choices[19]= new Array();
 choices[19][0] = "ASCII de 16 bits.";
 choices[19][1] = "ASCII de 8 bits.";
 choices[19][2] = "UNICODE.";
 choices[19][3] = "MIME";
 answers[19] = choices[19][2];
 units[19] = "70";
 comments[19] = "Id Pregunta: 4286. NULL";


//  Id pregunta: 4346 AÃ±o de creación de pregunta: 2007-01-01
 questions[20]= "21)  Cu&aacute;l es la longitud de la clave utilizada por el sistema criptogr&aacute;fico sim&eacute;trico DES?";
 choices[20]= new Array();
 choices[20][0] = "56 Bits";
 choices[20][1] = "168 Bits";
 choices[20][2] = "256 Bits.";
 choices[20][3] = "Puede ser cualquiera, pero la habitual es 1.024 Bits.";
 answers[20] = choices[20][0];
 units[20] = "73";
 comments[20] = "Id Pregunta: 4346. ";


//  Id pregunta: 4603 AÃ±o de creación de pregunta: 2007-01-01
 questions[21]= "22)  El driver JDBC-ODBC bridge, se utiliza";
 choices[21]= new Array();
 choices[21][0] = "cuando no existen drivers JDBC nativos.";
 choices[21][1] = "Para garantizar el &eacute;xito de los accesos a la BD.";
 choices[21][2] = "como variable de Ia tecnolog&iacute;a ODBC.";
 choices[21][3] = "para implementar operaciones ODBC, traduci&eacute;ndolas en operaciones JDBC";
 answers[21] = choices[21][0];
 units[21] = "60";
 comments[21] = "Id Pregunta: 4603. NULL";


//  Id pregunta: 4680 AÃ±o de creación de pregunta: 2007-01-01
 questions[22]= "23)  La API JDBC se utiliza:";
 choices[22]= new Array();
 choices[22][0] = "Para efectuar consultas, actualizaciones de la base de datos que tengan los drivers adecuados. Tambi&eacute;n sepueden utilizar procedimientos almacenados y control de transacciones, pr&aacute;cticamente todas las funciones quesoporta un SGBD relacional.";
 choices[22][1] = "La API JDBC s&oacute;lo incorpora unos drivers que soportan las funciones de un SGBD relacional";
 choices[22][2] = "Para efectuar consultas y actualizaciones del SGBD relacional. El control de transacciones y las llamadas aprocedimientos almacenados no est&aacute;n soportados.";
 choices[22][3] = "Para efectuar consultas, actualizaciones de la base de datos que tengan los drivers adecuados y algunas delas funciones que soporta un SGBD relacional.";
 answers[22] = choices[22][0];
 units[22] = "60";
 comments[22] = "Id Pregunta: 4680. Examen 2006 JCYL";


//  Id pregunta: 4885 AÃ±o de creación de pregunta: 2007-01-01
 questions[23]= "24)  En el establecimiento de una comunicaci&oacute;n mediante SSL (Secure Sockets Layer), &iquest;cu&aacute;l es el protocolo queespecifica la forma de encapsular los datos que se van a intercambiar?";
 choices[23]= new Array();
 choices[23][0] = "SSL Handshake";
 choices[23][1] = "SSL Record";
 choices[23][2] = "Cipher Secure Layer";
 choices[23][3] = "Secure Stocker Layer";
 answers[23] = choices[23][1];
 units[23] = "73";
 comments[23] = "Id Pregunta: 4885. ";


//  Id pregunta: 4997 AÃ±o de creación de pregunta: 2003-01-01
 questions[24]= "25)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[24]= new Array();
 choices[24][0] = "El sistema de autenticaci&oacute;n &quot;Kerberos&quot;, utiliza exclusivamente mecanismos de criptograf&iacute;a asim&eacute;trica";
 choices[24][1] = "Para la autenticaci&oacute;n &quot;Kerberos&quot; utiliza mecanismos basados en criptograf&iacute;a sim&eacute;trica y en criptograf&iacute;aasim&eacute;trica";
 choices[24][2] = "Para la autenticaci&oacute;n &quot;Kerberos&quot; utiliza exclusivamente mecanismos basados en critograf&iacute;a sim&eacute;trica";
 choices[24][3] = "Para la autenticaci&oacute;n &quot;Kerberos&quot; utiliza mecanismos de identificaci&oacute;n/password y de criptograf&iacute;a sim&eacute;trica";
 answers[24] = choices[24][3];
 units[24] = "73";
 comments[24] = "Id Pregunta: 4997. Examen TIC A 2007";


//  Id pregunta: 5088 AÃ±o de creación de pregunta: 2003-01-01
 questions[25]= "26)  Un servicio de directorio electr&oacute;nico NO se caracteriza por ";
 choices[25]= new Array();
 choices[25][0] = "ser flexible";
 choices[25][1] = "Aceptar cierta inconsistencia temporal de la informaci&oacute;n en su replicaci&oacute;n";
 choices[25][2] = "Ser est&aacute;tico";
 choices[25][3] = "Poder ser consultado y actualizado en l&iacute;nea";
 answers[25] = choices[25][2];
 units[25] = "73";
 comments[25] = "Id Pregunta: 5088. ";


//  Id pregunta: 5089 AÃ±o de creación de pregunta: 2001-01-01
 questions[26]= "27)  En el est&aacute;ndar X.509,&iquest; qu&eacute; procedimiento de autenticaci&oacute;n utilizar&iacute;a cuando el origen y el destino no tienen relojes sincronizados?";
 choices[26]= new Array();
 choices[26][0] = "autenticaci&oacute;n a 1 v&iacute;a";
 choices[26][1] = "autenticaci&oacute;n a 2 v&iacute;as";
 choices[26][2] = "autenticaci&oacute;n a 3 v&iacute;as ";
 choices[26][3] = "autenticaci&oacute;n a 4 v&iacute;as";
 answers[26] = choices[26][2];
 units[26] = "73";
 comments[26] = "Id Pregunta: 5089. ";


//  Id pregunta: 5495 AÃ±o de creación de pregunta: 2003-01-01
 questions[27]= "28)  Los archivos EAR, seg&uacute;n la tecnolog&iacute;a Java EE:";
 choices[27]= new Array();
 choices[27][0] = "C&oacute;mprime s&oacute;lo archivos .class ";
 choices[27][1] = "Son un tipo de archivo JAR";
 choices[27][2] = "No existen tales archivos. S&oacute;lo hay archivos WAR";
 choices[27][3] = "Es un empaquetado de archivos XML";
 answers[27] = choices[27][1];
 units[27] = "60";
 comments[27] = "Id Pregunta: 5495. NULL";


//  Id pregunta: 5545 AÃ±o de creación de pregunta: 2003-01-01
 questions[28]= "29)  Se&ntilde;ale la respuesta correcta respecto del &aacute;mbito de aplicaci&oacute;n de la ley de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos:";
 choices[28]= new Array();
 choices[28][0] = "La ley 11/2007 aplica a las relaciones de ciudadanos y empresas con las Administraciones P&uacute;blicas y a las relaciones entre las propias Administraciones P&uacute;blicas.";
 choices[28][1] = "La ley 11/2007 aplica a las Administraciones P&uacute;blicas, entendiendo por tales, la Administraci&oacute;n General del Estado, Comunidades Aut&oacute;nomas y Entidades de la Administraci&oacute;n Local, as&iacute; como las entidades de derecho p&uacute;blico o privado vinculadas o dependientes de las mismas.";
 choices[28][2] = "a) y b) son ciertas";
 choices[28][3] = "a) y b) son falsas";
 answers[28] = choices[28][3];
 units[28] = "43";
 comments[28] = "Id Pregunta: 5545. La ley no diferencia &quot;ciudadanos y empresas&quot;, sino que habla de ciudadanos de modo gen&eacute;rico. Adem&aacute;s excluye las entidades de derecho privado.";


//  Id pregunta: 5547 AÃ±o de creación de pregunta: 2003-01-01
 questions[29]= "30)  Entre los derechos reconocidos por la Ley de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos NO se encuentra:";
 choices[29]= new Array();
 choices[29][0] = "El Derecho a la Igualdad en el acceso electr&oacute;nico a los servicios de las Administraciones P&uacute;blicas.";
 choices[29][1] = "El Derecho a la Conservaci&oacute;n en formato electr&oacute;nico por las Administraciones P&uacute;blicas, de los documentos electr&oacute;nicos que formen parte de un expediente.";
 choices[29][2] = "El Derecho a obtener los medios de identificaci&oacute;n electr&oacute;nica necesarios.";
 choices[29][3] = "El Derecho a la libre utilizaci&oacute;n de cualquier sistema de firma electr&oacute;nica.";
 answers[29] = choices[29][3];
 units[29] = "43";
 comments[29] = "Id Pregunta: 5547. NULL";


//  Id pregunta: 5784 AÃ±o de creación de pregunta: 2009-01-01
 questions[30]= "31)  En el framework .NET, &iquest;qu&eacute; c&oacute;digo se genera como salida del compilador just in time?";
 choices[30]= new Array();
 choices[30][0] = "Bytecode";
 choices[30][1] = "IL (intemediate language)";
 choices[30][2] = "C&oacute;digo m&aacute;quina";
 choices[30][3] = "C&oacute;digo ensamblador";
 answers[30] = choices[30][2];
 units[30] = "59";
 comments[30] = "Id Pregunta: 5784. MAP 2008 A2";


//  Id pregunta: 5926 AÃ±o de creación de pregunta: 2009-01-01
 questions[31]= "32)  Para aumentar las posibilidades de interacci&oacute;n con la Web, se promueven tecnolog&iacute;as como JavaScript, applets, ActiveX,..., de entre las afirmaciones siguientes, &iquest;cu&aacute;l se refiere a los &quot;applets de Java&quot;?:";
 choices[31]= new Array();
 choices[31][0] = "Son programas residentes en el servidor, que se ejecutan en el mismo bajo solicitud de un cliente, para recoger o enviar alg&uacute;n tipo de informaci&oacute;n especial del cliente";
 choices[31][1] = "Son programas que se ejecutan bajo el entorno Java del navegador, en un espacio de memoria aparte, llamado &quot;Sandbox&quot;";
 choices[31][2] = "Son trozos de c&oacute;digo que se a&ntilde;aden a los browsers para obtener nuevos servicios y cuya fiabilidad queda garantizada por la obligatoriedad del uso de la tecnologia &quot;authenticode&quot;";
 choices[31][3] = "La forma de controlar la fiabilidad y seguridad de esta tecnolog&iacute;a consiste &uacute;nicamente en el sistema de verificaci&oacute;n digital y de firmas electr&oacute;nicas";
 answers[31] = choices[31][1];
 units[31] = "60";
 comments[31] = "Id Pregunta: 5926. MAP 2008 A1";


//  Id pregunta: 6059 AÃ±o de creación de pregunta: 2010-01-01
 questions[32]= "33)  Los servicios web son:";
 choices[32]= new Array();
 choices[32][0] = "Dependientes de la plataforma en que se encuentran desplegados y dependientes del lenguaje en que han sido desarrollados.";
 choices[32][1] = "Dependientes de la plataforma en que se encuentran desplegados e independientes del lenguaje en que han sido desarrollados.";
 choices[32][2] = "Independientes de la plataforma en que se encuentran desplegados y dependientes del lenguaje en que han sido desarrollados.";
 choices[32][3] = "Independientes de la plataforma en que se encuentran desplegados e independientes del lenguaje en que han sido desarrollados.";
 answers[32] = choices[32][3];
 units[32] = "51,69";
 comments[32] = "Id Pregunta: 6059. TIC A 2009";


//  Id pregunta: 6061 AÃ±o de creación de pregunta: 2010-01-01
 questions[33]= "34)  HTML est&aacute; estandarizado por:";
 choices[33]= new Array();
 choices[33][0] = "World Wide Web Consortium - W3C.";
 choices[33][1] = "Internet Engineering Task Force - IETF.";
 choices[33][2] = "Institute os Management Accountants - IMA.";
 choices[33][3] = "International Accounting Standard Board - IASB.";
 answers[33] = choices[33][0];
 units[33] = "69";
 comments[33] = "Id Pregunta: 6061. TIC A 2009";


//  Id pregunta: 6133 AÃ±o de creación de pregunta: 2010-01-01
 questions[34]= "35)  ADO.NET es:";
 choices[34]= new Array();
 choices[34][0] = "Un conjunto de componentes software de la capa de l&oacute;gica de negocio.";
 choices[34][1] = "Un lenguaje de programaci&oacute;n para el entorno .NET.";
 choices[34][2] = "Un conjunto de componentes para el acceso a datos.";
 choices[34][3] = "Una biblioteca de clases b&aacute;sica de la capa de presentaci&oacute;n.";
 answers[34] = choices[34][2];
 units[34] = "59";
 comments[34] = "Id Pregunta: 6133. TIC A 2009";


//  Id pregunta: 6178 AÃ±o de creación de pregunta: 2010-01-01
 questions[35]= "36)  Se&ntilde;ale la informaci&oacute;n falsa sobre AJAX:";
 choices[35]= new Array();
 choices[35][0] = "Las aplicaciones desarrolladas con AJAX usan Javascript y XML.";
 choices[35][1] = "Las aplicaciones desarrolladas con AJAX tienen una mejor experiencia de usuario.";
 choices[35][2] = "AJAX es la base de las Rich Internet Applications.";
 choices[35][3] = "Las aplicaciones AJAX son de tipo pull.";
 answers[35] = choices[35][3];
 units[35] = "69";
 comments[35] = "Id Pregunta: 6178. NULL";


//  Id pregunta: 6187 AÃ±o de creación de pregunta: 2010-01-01
 questions[36]= "37)  Seg&uacute;n el Real Decreto 3/2010, los sistemas existentes a la entrada en vigor del Real Decreto disponen de un plazo de adecuaci&oacute;n de";
 choices[36]= new Array();
 choices[36][0] = "Doce meses desde la entrada en vigor";
 choices[36][1] = "Doce meses desde la entrada en vigor, pudiendo ampliarse hasta 48 meses desde la entrada en vigor";
 choices[36][2] = "Doce meses desde la entrada en vigor, pudiendo ampliarse hasta 48 meses adicionales";
 choices[36][3] = "Doce meses desde la entrada en vigor, pudiendo ampliarse hasta 48 meses desde la aprobaci&oacute;n del plan de adecuaci&oacute;n";
 answers[36] = choices[36][1];
 units[36] = "43";
 comments[36] = "Id Pregunta: 6187. Disposicion transitoria";


//  Id pregunta: 6191 AÃ±o de creación de pregunta: 2010-01-01
 questions[37]= "38)  &iquest;Cu&aacute;l de las siguientes normas t&eacute;cnicas no est&aacute;n contempladas en el Esquema Nacional de Interoperabilidad?";
 choices[37]= new Array();
 choices[37][0] = "Digitalizaci&oacute;n de documentos";
 choices[37][1] = "Pol&iacute;tica de gesti&oacute;n de documentos";
 choices[37][2] = "Copiado aut&eacute;ntico y conversi&oacute;n de documentos";
 choices[37][3] = "Destrucci&oacute;n de documentos en soporte papel";
 answers[37] = choices[37][3];
 units[37] = "43";
 comments[37] = "Id Pregunta: 6191. Disposici&oacute;n adicional primera";


//  Id pregunta: 6192 AÃ±o de creación de pregunta: 2010-01-01
 questions[38]= "39)  &iquest;Qu&eacute; norma es derogada por el Real Decreto 1671/2009?";
 choices[38]= new Array();
 choices[38][0] = "Real Decreto 263/1996";
 choices[38][1] = "Real Decreto 209/2003";
 choices[38][2] = "Real Decreto 1553/2005";
 choices[38][3] = "El Real Decreto 1671/2009 no deroga ninguna norma";
 answers[38] = choices[38][0];
 units[38] = "43";
 comments[38] = "Id Pregunta: 6192. Disposici&oacute;n derogatoria &uacute;nica";


//  Id pregunta: 6361 AÃ±o de creación de pregunta: 2010-01-01
 questions[39]= "40)  &iquest;Qu&eacute; Real Decreto define el Esquema Nacional de Seguridad?";
 choices[39]= new Array();
 choices[39][0] = "RD 4/2010";
 choices[39][1] = "RD 40/2010";
 choices[39][2] = "RD 4/2009";
 choices[39][3] = "RD 3/2010";
 answers[39] = choices[39][3];
 units[39] = "43";
 comments[39] = "Id Pregunta: 6361. NULL";


//  Id pregunta: 6366 AÃ±o de creación de pregunta: 2010-01-01
 questions[40]= "41)  &iquest;Cu&aacute;l de los siguientes no es un requisito m&iacute;nimo de seguridad de los definidos en el Esquema Nacional de Seguridad?";
 choices[40]= new Array();
 choices[40][0] = "Gesti&oacute;n de personal.";
 choices[40][1] = "Integridad y actualizaci&oacute;n del sistema.";
 choices[40][2] = "Prevenci&oacute;n ante la continuidad de la actividad.";
 choices[40][3] = "Incidentes de seguridad.";
 answers[40] = choices[40][2];
 units[40] = "43";
 comments[40] = "Id Pregunta: 6366. Art&iacute;culo 11 ENS";


//  Id pregunta: 6367 AÃ±o de creación de pregunta: 2010-01-01
 questions[41]= "42)  Se&ntilde;ale la sentencia correcta, en relaci&oacute;n a la seguridad por defecto definida en el Esquema Nacional de Seguridad:";
 choices[41]= new Array();
 choices[41][0] = "En un sistema de explotaci&oacute;n se eliminar&aacute;n o desactivar&aacute;n, mediante el control de la configuraci&oacute;n, las funciones que no sean de inter&eacute;s, sean innecesarias e, incluso, aquellas que sean inadecuadas al fin que se persigue.";
 choices[41][1] = "El sistema proporcionar&aacute; la funcionalidad requerida para que la organizaci&oacute;n alcance sus objetivos, proveyendo toda funcionalidad adicional posible.";
 choices[41][2] = "Las funciones de operaci&oacute;n, administraci&oacute;n y registro de actividad ser&aacute;n las m&aacute;ximas posibles, y se asegurar&aacute; que s&oacute;lo son accesibles por las personas, o desde emplazamientos o equipos, autorizados, pudiendo exigirse en su caso restricciones de horario y puntos de acceso facultados.";
 choices[41][3] = "Todas las anteriores";
 answers[41] = choices[41][0];
 units[41] = "43";
 comments[41] = "Id Pregunta: 6367. Art&iacute;culo 19 ENS";


//  Id pregunta: 6370 AÃ±o de creación de pregunta: 2010-01-01
 questions[42]= "43)  &iquest;Cada cu&aacute;nto tiempo ser&aacute;n objeto de una auditor&iacute;a regular ordinaria los sistemas de informaci&oacute;n a los que se refiere el Esquema Nacional de Seguridad?";
 choices[42]= new Array();
 choices[42][0] = "Cada dos a&ntilde;os";
 choices[42][1] = "Al menos, cada dos a&ntilde;os";
 choices[42][2] = "Cada a&ntilde;o";
 choices[42][3] = "Al menos, una vez al a&ntilde;o";
 answers[42] = choices[42][1];
 units[42] = "43";
 comments[42] = "Id Pregunta: 6370. Art&iacute;culo 34 ENS. Anexo III: para los sistemas de categor&iacute;a B&Aacute;SICA, bastar&aacute; una autoevaluaci&oacute;n.";


//  Id pregunta: 6393 AÃ±o de creación de pregunta: 2010-01-01
 questions[43]= "44)  La creaci&oacute;n de sellos electr&oacute;nicos se realizar&aacute;, seg&uacute;n lo dispuesto en el RD 1671/2009, mediante... ";
 choices[43]= new Array();
 choices[43][0] = "Orden del Ministerio de Presidencia";
 choices[43][1] = "Resoluci&oacute;n del Ministro o titular del organismo p&uacute;blico competente";
 choices[43][2] = "Orden del Ministerio o titular del organismo p&uacute;blico competente";
 choices[43][3] = "Resoluci&oacute;n de la Subsecretar&iacute;a del Ministerio o titular del organismo p&uacute;blico competente";
 answers[43] = choices[43][3];
 units[43] = "43";
 comments[43] = "Id Pregunta: 6393. Art&iacute;culo 19 RD 1671/2009";


//  Id pregunta: 6416 AÃ±o de creación de pregunta: 2010-01-01
 questions[44]= "45)  &iquest;Cu&aacute;l de los siguientes no es un principio del WCAG 2.0?";
 choices[44]= new Array();
 choices[44][0] = "Perceptible";
 choices[44][1] = "Operable";
 choices[44][2] = "Robusto";
 choices[44][3] = "Usable";
 answers[44] = choices[44][3];
 units[44] = "39";
 comments[44] = "Id Pregunta: 6416. NULL";


//  Id pregunta: 6421 AÃ±o de creación de pregunta: 2010-01-01
 questions[45]= "46)  &iquest;Cu&aacute;l de las siguientes pautas no corresponde al principio de Perceptibilidad de WCAG 2.0?";
 choices[45]= new Array();
 choices[45][0] = "Navegable";
 choices[45][1] = "Alternativas Textuales";
 choices[45][2] = "Adaptable";
 choices[45][3] = "Distinguible";
 answers[45] = choices[45][0];
 units[45] = "39";
 comments[45] = "Id Pregunta: 6421. NULL";


//  Id pregunta: 6461 AÃ±o de creación de pregunta: 2010-01-01
 questions[46]= "47)  Seg&uacute;n la Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de los ciudadanos a los Servicios P&uacute;blicos 'La publicaci&oacute;n de actos y comunicaciones que deban publicarse en tabl&oacute;n de anuncios o edictos':";
 choices[46]= new Array();
 choices[46][0] = "Deber&aacute; ser sustituida por su publicaci&oacute;n en la sede electr&oacute;nica del organismo correspondiente";
 choices[46][1] = "No podr&aacute; ser sustituida por su publicaci&oacute;n en la sede electr&oacute;nica del organismo correspondiente";
 choices[46][2] = "Podr&aacute; ser sustituida o complementada por su publicaci&oacute;n en la sede electr&oacute;nica del organismo correspondiente";
 choices[46][3] = "Deber&aacute; ser complementada con su publicaci&oacute;n en la sede electr&oacute;nica del organismo correspondiente";
 answers[46] = choices[46][2];
 units[46] = "43";
 comments[46] = "Id Pregunta: 6461. Castilla La Mancha 2009";


//  Id pregunta: 7325 AÃ±o de creación de pregunta: 2010-01-01
 questions[47]= "48)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones no es correcta respecto a 'facturae':";
 choices[47]= new Array();
 choices[47][0] = "Es el formato a utilizar para la facturaci&oacute;n electr&oacute;nica a las Administraciones P&uacute;blicas";
 choices[47][1] = "Se trata de un formato basado en el est&aacute;ndar XML (Extensible Markup Language)";
 choices[47][2] = "Puede hacer uso de firma electr&oacute;nica avanzada para garantizar la autenticidad e integridad";
 choices[47][3] = "No permite el uso de XADES para la firma electr&oacute;nica avanzada";
 answers[47] = choices[47][3];
 units[47] = "70";
 comments[47] = "Id Pregunta: 7325. NULL";


//  Id pregunta: 8171 AÃ±o de creación de pregunta: 2011-01-01
 questions[48]= "49)  Respecto a AJAX. &iquest;Cu&aacute;l de las siguientes afirmaciones NO es cierta?:";
 choices[48]= new Array();
 choices[48][0] = "En lo referente a &quot;cross-scripting&quot; (ejecuci&oacute;n de c&oacute;digo de diferente dominio), est&aacute; sujeto a la pol&iacute;tica &quot;same origin&quot; implementada en la sandbox del navegador.";
 choices[48][1] = "Realizar una petici&oacute;n v&iacute;a XMLHttpRequest (XHR) no modifica el historial del navegador.";
 choices[48][2] = "No ha sido estandarizado por una Recomendaci&oacute;n del World Wide Web Consortium (W3C).";
 choices[48][3] = "Su uso obliga a refrescar una parte de la p&aacute;gina del navegador.";
 answers[48] = choices[48][3];
 units[48] = "69";
 comments[48] = "Id Pregunta: 8171. Examen TIC A1 2010";


//  Id pregunta: 8209 AÃ±o de creación de pregunta: 2011-01-01
 questions[49]= "50)  El establecimiento de un directorio de direcciones de red IP, a partir del cual cada entidad u organismo de la AGE pueda establecer de manera independiente sus planes de numeraci&oacute;n IP, se incluye en:";
 choices[49]= new Array();
 choices[49][0] = "El Plan AVANZA.";
 choices[49][1] = "El Plan de direccionamiento e interconexi&oacute;n de redes en la Administraci&oacute;n.";
 choices[49][2] = "El Plan Estrat&eacute;gico para el desarrollo de la administraci&oacute;n electr&oacute;nica.";
 choices[49][3] = "El Plan de evaluaci&oacute;n de impacto de la Ley 11/2007.";
 answers[49] = choices[49][1];
 units[49] = "44";
 comments[49] = "Id Pregunta: 8209. Examen TIC A1 2010";


//  Id pregunta: 8222 AÃ±o de creación de pregunta: 2010-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l es el nivel m&iacute;nimo de accesibilidad que deben cumplir las p&aacute;ginas de Internet de las Administraciones P&uacute;blicas o financiadas con fondos p&uacute;blicos?:";
 choices[50]= new Array();
 choices[50][0] = "No existe m&iacute;nimo alguno fijado por la normativa.";
 choices[50][1] = "El definido en las prioridades 1 y 2 de la norma UNE 139803: 2004.";
 choices[50][2] = "El m&aacute;s alto que permita el estado de la t&eacute;cnica en cada momento.";
 choices[50][3] = "El definido en la norma UNE 14009 :2006, apartados 2 y 3.";
 answers[50] = choices[50][1];
 units[50] = "39";
 comments[50] = "Id Pregunta: 8222. Examen TIC A1 2010";


//  Id pregunta: 8272 AÃ±o de creación de pregunta: 2011-01-01
 questions[51]= "52)  Dentro del est&aacute;ndar del metalenguaje XML se&ntilde;ale la afirmaci&oacute;n INCORRECTA:";
 choices[51]= new Array();
 choices[51][0] = "Un DTD es un documento escrito en XML para definir el contenido y estructura de documentos XML.";
 choices[51][1] = "Los XML Schemas y los DTD permiten validar documentos XML.";
 choices[51][2] = "Los XML Schemas soportan herencia entre tipos de datos.";
 choices[51][3] = "Los DTD no est&aacute;n basados en el uso de &quot;namespaces&quot;.";
 answers[51] = choices[51][0];
 units[51] = "69";
 comments[51] = "Id Pregunta: 8272. Examen TIC A1 2010";


//  Id pregunta: 8731 AÃ±o de creación de pregunta: 2011-01-01
 questions[52]= "53)  Se considera documento electr&oacute;nico de acuerdo a la ley 11/2007 a:";
 choices[52]= new Array();
 choices[52][0] = "La informaci&oacute;n de naturaleza administrativa, &uacute;nicamente en forma electr&oacute;nica, archivada en soporte electr&oacute;nico seg&uacute;n un formato determinado y susceptible de identificaci&oacute;n y tratamiento diferenciado.";
 choices[52][1] = "La informaci&oacute;n de naturaleza administrativa, &uacute;nicamente en forma electr&oacute;nica, archivada en soporte electr&oacute;nico, o impresa en papel, siempre seg&uacute;n un formato determinado y susceptible de identificaci&oacute;n y tratamiento diferenciado.";
 choices[52][2] = "La informaci&oacute;n de cualquier naturaleza en forma electr&oacute;nica, archivada en soporte electr&oacute;nico o en formato papel, siempre que se haya firmado con un certificado electr&oacute;nico reconocido";
 choices[52][3] = "La informaci&oacute;n de cualquier naturaleza en forma electr&oacute;nica, archivada en un soporte electr&oacute;nico seg&uacute;n un formato determinado y susceptible de identificaci&oacute;n y tratamiento diferenciado.";
 answers[52] = choices[52][3];
 units[52] = "43";
 comments[52] = "Id Pregunta: 8731. Examen TIC A2 2010 interna";


//  Id pregunta: 8749 AÃ±o de creación de pregunta: 2011-01-01
 questions[53]= "54)  Un organismo est&aacute; evaluando la posibilidad de obligar al uso exclusivo de medios electr&oacute;nicos a las personas Jur&iacute;dicas, cuando se comuniquen con el mismo, &iquest;podr&iacute;a hacerlo?";
 choices[53]= new Array();
 choices[53][0] = "No, en ning&uacute;n caso, los medios electr&oacute;nicos siempre ser&aacute;n opcionales, aunque puedan ser preferentes";
 choices[53][1] = "Podr&aacute; hacerlo s&oacute;lo si, reglamentariamente, la Administraci&oacute;n a la que pertenezca el organismo ha establecido tal obligatoriedad";
 choices[53][2] = "Si, siempre para el caso de personas jur&iacute;dicas, eliminando la Ley 11/2007, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, LAECSP. cualquier requisito normativo previo";
 choices[53][3] = "Podr&aacute; hacerlo contando siempre con el consentimiento del interesado, si, reglamentariamente, la Administraci&oacute;n a la que pertenezca el organismo ha establecido tal obligatoriedad.";
 answers[53] = choices[53][1];
 units[53] = "43";
 comments[53] = "Id Pregunta: 8749. Examen TIC A2 2010 interna";


//  Id pregunta: 8794 AÃ±o de creación de pregunta: 2011-01-01
 questions[54]= "55)  &iquest;En qu&eacute; est&aacute;ndar se define el lenguaje SGML?";
 choices[54]= new Array();
 choices[54][0] = "ISO 8879";
 choices[54][1] = "RFC 8879";
 choices[54][2] = "IEEE 8879";
 choices[54][3] = "Ninguna de las anteriores";
 answers[54] = choices[54][0];
 units[54] = "69, 114";
 comments[54] = "Id Pregunta: 8794. Examen UPM A2 2011";


//  Id pregunta: 8809 AÃ±o de creación de pregunta: 2011-01-01
 questions[55]= "56)  La clase XPathNavigator de la biblioteca de clases de .NET, &iquest;para qu&eacute; sirve?:";
 choices[55]= new Array();
 choices[55][0] = "Para leer datos de cualquier almac&eacute;n de datos mediante un modelo de cursor";
 choices[55][1] = "Para proporcionar un iterador para un conjunto de nodos seleccionados";
 choices[55][2] = "Para encapsular una expresi&oacute;n XPath compilada";
 choices[55][3] = "Todas las anteriores son falsas";
 answers[55] = choices[55][0];
 units[55] = "59, 115";
 comments[55] = "Id Pregunta: 8809. Examen UPM A2 2011";


//  Id pregunta: 8948 AÃ±o de creación de pregunta: 2011-01-01
 questions[56]= "57)  &iquest;En qu&eacute; caso ser&iacute;a suficiente una autoevaluaci&oacute;n como auditor&iacute;a al sistema de informaci&oacute;n seg&uacute;n el RD 3/2010?";
 choices[56]= new Array();
 choices[56][0] = "En sistemas de informaci&oacute;n de categor&iacute;a b&aacute;sica";
 choices[56][1] = "En sistemas de informaci&oacute;n de categor&iacute;a b&aacute;sica o inferior";
 choices[56][2] = "En sistemas de informaci&oacute;n de categor&iacute;a b&aacute;sica o media";
 choices[56][3] = "Cuando as&iacute; lo decida el responsable de seguridad competente";
 answers[56] = choices[56][1];
 units[56] = "43";
 comments[56] = "Id Pregunta: 8948. ";


//  Id pregunta: 8949 AÃ±o de creación de pregunta: 2011-01-01
 questions[57]= "58)  &iquest;A qui&eacute;n corresponde aprobar la relaci&oacute;n de prestadores de servicios de certificaci&oacute;n admitidos?";
 choices[57]= new Array();
 choices[57][0] = "Al Ministerio de Industria Turismo y Comercio";
 choices[57][1] = "Al Ministerio de la Presidencia";
 choices[57][2] = "Al Consejo Superior de Administraci&oacute;n Electr&oacute;nica";
 choices[57][3] = "Ninguna de las anteriores es cierta";
 answers[57] = choices[57][3];
 units[57] = "43";
 comments[57] = "Id Pregunta: 8949. ";


//  Id pregunta: 8976 AÃ±o de creación de pregunta: 2011-01-01
 questions[58]= "59)  &iquest;Cu&aacute;l de los siguientes no es un derecho reconocido a los ciudadanos por la ley 11/2007?";
 choices[58]= new Array();
 choices[58][0] = "A la igualdad en el acceso electr&oacute;nico a los servicios de las Administraciones P&uacute;blicas.";
 choices[58][1] = "A la utilizaci&oacute;n de otros sistemas de firma electr&oacute;nica admitidos en el &aacute;mbito de las Administraciones P&uacute;blicas";
 choices[58][2] = "A la calidad de los servicios p&uacute;blicos prestados por medios electr&oacute;nicos";
 choices[58][3] = "Todos los anteriores son derechos reconocidos a los ciudadanos por la ley 11/2007";
 answers[58] = choices[58][3];
 units[58] = "43";
 comments[58] = "Id Pregunta: 8976. ";


//  Id pregunta: 9571 AÃ±o de creación de pregunta: 2013-01-01
 questions[59]= "60)  En la pr&aacute;ctica de notificaciones por medios electr&oacute;nicos a que se refiere el art&iacute;culo 28 de la Ley 11/2007, de 22 de junio, de Acceso electr&oacute;nico de los ciudadanos a los Servicios p&uacute;blicos:";
 choices[59]= new Array();
 choices[59][0] = "Se requerir&aacute; en todo caso que el interesado lo haya solicitado previamente por escrito en el Registro del &oacute;rgano que ha de resolver.";
 choices[59][1] = "Cuando no pueda acreditarse por el sistema la fecha y hora en que se produzca, se entender&aacute;, a efectos de ulterior recurso, practicada el &uacute;ltimo d&iacute;a del plazo en que deb&iacute;a practicarse.";
 choices[59][2] = "Cuando, existiendo constancia de la puesta a disposici&oacute;n de la notificaci&oacute;n transcurrieran diez d&iacute;as naturales sin que se acceda a su contenido, se entender&aacute; que la notificaci&oacute;n ha sido rechazada con los efectos previstos en el art&iacute;culo 59.4 de la LRJPAC.";
 choices[59][3] = "Cuando, existiendo constancia de la puesta a disposici&oacute;n de la notificaci&oacute;n transcurrieran diez d&iacute;as h&aacute;biles sin que se acceda a su contenido, se entender&aacute; que la notificaci&oacute;n ha sido debidamente practicada y surtir&aacute; los efectos previstos en el art&iacute;culo 2.";
 answers[59] = choices[59][2];
 units[59] = "43";
 comments[59] = "Id Pregunta: 9571. Examen TIC A1 2011";


//  Id pregunta: 9581 AÃ±o de creación de pregunta: 2013-01-01
 questions[60]= "61)  Seg&uacute;n el RD 1671/2009 de 6 de noviembre, las copias electr&oacute;nicas id&eacute;nticas al documento electr&oacute;nico original que no comportan cambio de formato se considerar&aacute;n:";
 choices[60]= new Array();
 choices[60][0] = "Copia aut&eacute;ntica del documento original.";
 choices[60][1] = "Copia compulsada del documento original.";
 choices[60][2] = "Documento original.";
 choices[60][3] = "No tendr&aacute;n validez.";
 answers[60] = choices[60][2];
 units[60] = "43";
 comments[60] = "Id Pregunta: 9581. Examen TIC A1 2011";


//  Id pregunta: 9584 AÃ±o de creación de pregunta: 2013-01-01
 questions[61]= "62)  Los certificados incorporados al DNI-e:";
 choices[61]= new Array();
 choices[61][0] = "Son dos: de autenticaci&oacute;n y de firma del ciudadano.";
 choices[61][1] = "Los usuarios finales pueden validarlos en la Direcci&oacute;n General de la Polic&iacute;a, que est&aacute; constituida como Autoridad de Validaci&oacute;n.";
 choices[61][2] = "Est&aacute;n basados en la recomendaci&oacute;n X. 509 v.3 sin extensi&oacute;n alguna.";
 choices[61][3] = "Est&aacute;n integrados en un chip certificado en el nivel de seguridad EAL4+ definido en la norma ISO/IEC 15408.";
 answers[61] = choices[61][3];
 units[61] = "43, 74";
 comments[61] = "Id Pregunta: 9584. Examen TIC A1 2011";


//  Id pregunta: 9590 AÃ±o de creación de pregunta: 2013-01-01
 questions[62]= "63)  Seg&uacute;n se dispone en la Ley 11/2007, de acceso electr&oacute;nico de los ciudadanos a los Servicios P&uacute;blicos, los registros electr&oacute;nicos permitir&aacute;n la presentaci&oacute;n de solicitudes:";
 choices[62]= new Array();
 choices[62][0] = "Exclusivamente en los mismos horarios que los registros presenciales.";
 choices[62][1] = "Exclusivamente los d&iacute;as laborables del a&ntilde;o, durante las 24 horas. ";
 choices[62][2] = "Todos los d&iacute;as del a&ntilde;o, durante las 24 horas. ";
 choices[62][3] = "Exclusivamente los d&iacute;as h&aacute;biles del a&ntilde;o, durante las 24 horas.";
 answers[62] = choices[62][2];
 units[62] = "43";
 comments[62] = "Id Pregunta: 9590. Examen TIC A2 2011 interna";


//  Id pregunta: 9720 AÃ±o de creación de pregunta: 2014-01-01
 questions[63]= "64)  Se&ntilde;ale cu&aacute;l de las siguientes formas de actuaci&oacute;n es la especificada para los sistemas de validaci&oacute;n de certificados de clave p&uacute;blica ITU-T X.509 v3.";
 choices[63]= new Array();
 choices[63][0] = "Si el sistema no reconoce una extensi&oacute;n cr&iacute;tica, debe ignorar la extensi&oacute;n y emitir un mensaje advirtiendo la existencia de una extensi&oacute;n cr&iacute;tica no procesable.";
 choices[63][1] = "Si el sistema reconoce una extensi&oacute;n no cr&iacute;tica, debe procesar la extensi&oacute;n y emitir un mensaje indicando su cumplimiento o no.";
 choices[63][2] = "Si el sistema no reconoce una extensi&oacute;n no cr&iacute;tica, debe ignorar la extensi&oacute;n.";
 choices[63][3] = "Si el sistema reconoce una extensi&oacute;n no cr&iacute;tica, es aceptable tanto ignorar como procesar la extensi&oacute;n (depender&aacute; de la implementaci&oacute;n concreta del sistema).";
 answers[63] = choices[63][2];
 units[63] = "73";
 comments[63] = "Id Pregunta: 9720. Examen TIC-A1 2013";


//  Id pregunta: 9900 AÃ±o de creación de pregunta: 2014-01-01
 questions[64]= "65)  De acuerdo con la Ley 11/2007, de 22 de junio, de acceso electr&oacute;nico de losciudadanos a los Servicios P&uacute;blicos, el principio de neutralidad tecnol&oacute;gica y de adaptabilidad al progreso significa que las Administraciones P&uacute;blicas";
 choices[64]= new Array();
 choices[64][0] = "utilizar&aacute;n est&aacute;ndares abiertos o de uso generalizado por los ciudadanos.";
 choices[64][1] = "utilizar&aacute;n procedimientos electr&oacute;nicos para sus tr&aacute;mites.";
 choices[64][2] = "no admitir&aacute;n el uso de esos medios m&aacute;s que de forma gratuita.";
 choices[64][3] = "utilizar&aacute;n medios que permitan la m&aacute;xima difusi&oacute;n sin coste.";
 answers[64] = choices[64][0];
 units[64] = "43";
 comments[64] = "Id Pregunta: 9900. TIC A1, Examen 2013";


//  Id pregunta: 9939 AÃ±o de creación de pregunta: 2014-01-01
 questions[65]= "66)  De acuerdo con el programa IDABC, entre los principios que define el Marco Europeo de Interoperabilidad NO se encuentra:";
 choices[65]= new Array();
 choices[65][0] = "el multiling&uuml;ismo.";
 choices[65][1] = "la accesibilidad.";
 choices[65][2] = "el procedimiento compartido.";
 choices[65][3] = "la subsidiaridad.";
 answers[65] = choices[65][2];
 units[65] = "40";
 comments[65] = "Id Pregunta: 9939. TIC A1, Examen 2013";


//  Id pregunta: 9944 AÃ±o de creación de pregunta: 2014-01-01
 questions[66]= "67)  Se&ntilde;ale la respuesta correcta. En la programaci&oacute;n orientada a objetos en Java, s&iacute; una clase hereda de otra clase un m&eacute;todo abstracto:";
 choices[66]= new Array();
 choices[66][0] = "Tiene que implementar ese m&eacute;todo, si no es as&iacute;,la clase que hereda deber&aacute; ser definida abstracta. ";
 choices[66][1] = "Puede usar el m&eacute;todo de la clase de la que ha heredado.";
 choices[66][2] = "Puede usar el m&eacute;todo de la clase de la que ha heredado siempre que est&eacute; declarado como public. ";
 choices[66][3] = "No se puede heredar de una clase que tenga alg&uacute;n m&eacute;todo abstracto. ";
 answers[66] = choices[66][0];
 units[66] = "82, 60";
 comments[66] = "Id Pregunta: 9944. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 9991 AÃ±o de creación de pregunta: 2014-01-01
 questions[67]= "68)  &iquest;Cu&aacute;l es el formato al que se tienen que ajustar las facturas electr&oacute;nicas que se remitan a las Administraciones P&uacute;blicas, de acuerdo con la ley 25/2013, de 27 de diciembre, de impulso de la factura electr&oacute;nica y creaci&oacute;n del registro contable de facturas en el Sector P&uacute;blico?";
 choices[67]= new Array();
 choices[67][0] = "e-Factura, versi&oacute;n 2.3";
 choices[67][1] = "Facturae, versi&oacute;n 3.2, y versiones sucesivas que publique el Ministerio de Industria, Turismo y Comercio.";
 choices[67][2] = "Facturae, versi&oacute;n 3.2 y 3.2.1, seg&uacute;n resoluci&oacute;n 21 de marzo de 2014";
 choices[67][3] = "ebXML, versi&oacute;n 2.0, hasta que se apruebe la Ley que transpone la Directiva 2006/123/CE sobre actividades de servicio en el mercado interior.";
 answers[67] = choices[67][2];
 units[67] = "70";
 comments[67] = "Id Pregunta: 9991. NULL";


//  Id pregunta: 10026 AÃ±o de creación de pregunta: 2014-01-01
 questions[68]= "69)  El Entity Framework es:";
 choices[68]= new Array();
 choices[68][0] = "Un framework ORM (object-relational mapper) desarrollado por Microsoft e integrado en la plataforma .NET.";
 choices[68][1] = "Una utilidad que permite identificar las funcionalidades de un sistema inform&aacute;tico.";
 choices[68][2] = "Una herramienta de planificaci&oacute;n y gesti&oacute;n del software desarrollado por Microsoft.";
 choices[68][3] = "Un framework orientado a la realizaci&oacute;n de aplicaciones web implementado por Microsoft que respecta el modelo vista controlador.";
 answers[68] = choices[68][0];
 units[68] = "59";
 comments[68] = "Id Pregunta: 10026. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10156 AÃ±o de creación de pregunta: 2014-01-01
 questions[69]= "70)  Seg&uacute;n la  Norma T&eacute;cnica de Interoperabilidad de Protocolos de intermediaci&oacute;n de datos, cu&aacute;l de las siguientes afirmaciones es incorrecta:";
 choices[69]= new Array();
 choices[69][0] = "En el acceso a la Plataforma de intermediaci&oacute;n de datos del Ministerio de Hacienda y Administraciones P&uacute;blicas se utilizar&aacute; la Red SARA";
 choices[69][1] = "La Plataforma de intermediaci&oacute;n del Ministerio de Hacienda y Administraciones P&uacute;blicas garantizar&aacute; interoperabilidad, disponibilidad, fiabilidad y seguridad";
 choices[69][2] = "La Plataforma de intermediaci&oacute;n del Ministerio de Hacienda y Administraciones P&uacute;blicas almacenar&aacute; el contenido del intercambio para garantizar la trazabilidad";
 choices[69][3] = "El Cedente podr&aacute; auditar la cesi&oacute;n de datos para comprobar el cumplimiento de los requisitos a que pudiera &eacute;sta estar sujeta";
 answers[69] = choices[69][2];
 units[69] = "43";
 comments[69] = "Id Pregunta: 10156. ";


//  Id pregunta: 10229 AÃ±o de creación de pregunta: 2014-01-01
 questions[70]= "71)  Cuales de los siguientes objetos son interfaces:";
 choices[70]= new Array();
 choices[70][0] = "java.util.List";
 choices[70][1] = "java.util.TreeMap";
 choices[70][2] = "java.util.AbstractList";
 choices[70][3] = "java.util.Collections";
 answers[70] = choices[70][0];
 units[70] = "60";
 comments[70] = "Id Pregunta: 10229. NULL";


//  Id pregunta: 10458 AÃ±o de creación de pregunta: 2014-01-01
 questions[71]= "72)  &iquest;Cu&aacute;l no es una novedad de HTML 5? ";
 choices[71]= new Array();
 choices[71][0] = "Application Cache";
 choices[71][1] = "Elementos sem&aacute;nticos.";
 choices[71][2] = "Web workers";
 choices[71][3] = "Elementos de desarrollo para plataformas m&oacute;viles.";
 answers[71] = choices[71][3];
 units[71] = "69";
 comments[71] = "Id Pregunta: 10458. NULL";


//  Id pregunta: 10465 AÃ±o de creación de pregunta: 2014-01-01
 questions[72]= "73)  &iquest;Cu&aacute;l no es una nueva caracter&iacute;stica de HTML5?";
 choices[72]= new Array();
 choices[72][0] = "Nuevos elementos sem&aacute;nticos.";
 choices[72][1] = "Fuerte soporte a gr&aacute;ficos con &lt;canvas&gt; y &lt;svg&gt;.";
 choices[72][2] = "Fuerte soporte multimedia.";
 choices[72][3] = "Nuevos elementos para soporte a la accesibilidad web.";
 answers[72] = choices[72][3];
 units[72] = "69";
 comments[72] = "Id Pregunta: 10465. NULL";


//  Id pregunta: 10574 AÃ±o de creación de pregunta: 2015-01-01
 questions[73]= "74)  &iquest;Qu&eacute; especificaciones permiten eliminar los certificados administrativos en papel mediante el intercambio electr&oacute;nico de datos entre Administraciones?";
 choices[73]= new Array();
 choices[73][0] = "SCSP";
 choices[73][1] = "SIGP";
 choices[73][2] = "SAML";
 choices[73][3] = "SIR";
 answers[73] = choices[73][0];
 units[73] = "44";
 comments[73] = "Id Pregunta: 10574. Sustituci&oacute;n de Certificados en Soporte Papel ";


//  Id pregunta: 10712 AÃ±o de creación de pregunta: 2015-01-01
 questions[74]= "75)  &iquest;Cu&aacute;l no es seg&uacute;n la NTI de Modelo de Datos para el Intercambio de asientos entre las entidades registrales una caracter&iacute;stica de la misma?";
 choices[74]= new Array();
 choices[74][0] = "Inclusi&oacute;n de metadatos que faciliten el intercambio de asientos.";
 choices[74][1] = "Incorporaci&oacute;n de ficheros adjuntos a los intercambios.";
 choices[74][2] = "Orientaci&oacute;n a arquitecturas de intermediaci&oacute;n.";
 choices[74][3] = "Mejora en los mecanismos de control del intercambio.";
 answers[74] = choices[74][0];
 units[74] = "43";
 comments[74] = "Id Pregunta: 10712. ";


//  Id pregunta: 10722 AÃ±o de creación de pregunta: 2015-01-01
 questions[75]= "76)  Seg&uacute;n la NTI de Gesti&oacute;n de Pol&iacute;tica de gesti&oacute;n de documentos electr&oacute;nicos. &iquest;Qui&eacute;n impulsar&aacute; la pol&iacute;tica de gesti&oacute;n de documentos electr&oacute;nicos?";
 choices[75]= new Array();
 choices[75][0] = "La alta direcci&oacute;n.";
 choices[75][1] = "Los responsables de procesos de gesti&oacute;n.";
 choices[75][2] = "El Presidente del Gobierno.";
 choices[75][3] = "El Consejo de Ministros.";
 answers[75] = choices[75][0];
 units[75] = "43";
 comments[75] = "Id Pregunta: 10722. ";


//  Id pregunta: 10724 AÃ±o de creación de pregunta: 2015-01-01
 questions[76]= "77)  &iquest;Qui&eacute;n es el responsable de la Plataforma de Intermediaci&oacute;n?";
 choices[76]= new Array();
 choices[76][0] = "Ministerio de la Presidencia";
 choices[76][1] = "Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[76][2] = "Ministerio de Econom&iacute;a y Competitividad";
 choices[76][3] = "Ministerio de Educaci&oacute;n, Cultura y Deporte";
 answers[76] = choices[76][1];
 units[76] = "43";
 comments[76] = "Id Pregunta: 10724. ";


//  Id pregunta: 10725 AÃ±o de creación de pregunta: 2015-01-01
 questions[77]= "78)  La utilizaci&oacute;n de qu&eacute; est&aacute;ndares no est&aacute; explicitamente prevista en la NTI de Protocolos de Intermediaci&oacute;n";
 choices[77]= new Array();
 choices[77][0] = "WSDL";
 choices[77][1] = "XML";
 choices[77][2] = "TLS";
 choices[77][3] = "RSS";
 answers[77] = choices[77][3];
 units[77] = "43";
 comments[77] = "Id Pregunta: 10725. ";


//  Id pregunta: 10727 AÃ±o de creación de pregunta: 2015-01-01
 questions[78]= "79)  &iquest;D&oacute;nde se puede encontrar la especificaci&oacute;n del protocolo SCSP (Sustituci&oacute;n de Certificados en Soporte Papel) seg&uacute;n se&ntilde;ala la NTI de protocolos de intermedicaci&oacute;n?";
 choices[78]= new Array();
 choices[78][0] = "En el Portal de Administraci&oacute;n electr&oacute;nica PAE/CTT";
 choices[78][1] = "En la Intranet del Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[78][2] = "En la Intranet del Ministerio de la Presidencia";
 choices[78][3] = "Se debe solicitar dicha informaci&oacute;n a la Direcci&oacute;n TIC";
 answers[78] = choices[78][0];
 units[78] = "43";
 comments[78] = "Id Pregunta: 10727. ";


//  Id pregunta: 10758 AÃ±o de creación de pregunta: 2015-01-01
 questions[79]= "80)  &iquest;Cu&aacute;l es la gu&iacute;a referente a &quot;Auditor&iacute;a del Esquema Nacional de Seguridad&quot;?";
 choices[79]= new Array();
 choices[79][0] = "CCN-STIC-801";
 choices[79][1] = "CCN-STIC-802";
 choices[79][2] = "CCN-STIC-803";
 choices[79][3] = "CCN-STIC-804";
 answers[79] = choices[79][1];
 units[79] = "43";
 comments[79] = "Id Pregunta: 10758. ";


//  Id pregunta: 10759 AÃ±o de creación de pregunta: 2015-01-01
 questions[80]= "81)  &iquest;Cu&aacute;l es la gu&iacute;a referente a &quot;Plan de Adecuaci&oacute;n del Esquema Nacional de Seguridad&quot;?";
 choices[80]= new Array();
 choices[80][0] = "CCN-STIC-803";
 choices[80][1] = "CCN-STIC-805";
 choices[80][2] = "CCN-STIC-806";
 choices[80][3] = "CCN-STIC-807";
 answers[80] = choices[80][2];
 units[80] = "43";
 comments[80] = "Id Pregunta: 10759. ";


//  Id pregunta: 10781 AÃ±o de creación de pregunta: 2015-01-01
 questions[81]= "82)  En el Real Decreto 3/2010, Esquema Nacional de Seguridad, se define como &quot;la propiedad o caracter&iacute;stica consistente en que las actuaciones de una entidad pueden ser imputadas exclusivamente a dicha entidad&quot; a la:";
 choices[81]= new Array();
 choices[81][0] = "Confidencialidad.";
 choices[81][1] = "Integridad.";
 choices[81][2] = "Autenticidad.";
 choices[81][3] = "Trazabilidad.";
 answers[81] = choices[81][3];
 units[81] = "43";
 comments[81] = "Id Pregunta: 10781. Examen GSI 2014";


//  Id pregunta: 10861 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  Indique el principio de la WCAG 2.0 asociado a la pauta &quot;maximizar la compatibilidad&quot;:";
 choices[82]= new Array();
 choices[82][0] = "Operable.";
 choices[82][1] = "Perceptible.";
 choices[82][2] = "Robustez.";
 choices[82][3] = "Comprensible.";
 answers[82] = choices[82][2];
 units[82] = "39";
 comments[82] = "Id Pregunta: 10861. Examen GSI 2014";


//  Id pregunta: 10928 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  La facturaci&oacute;n electr&oacute;nica ser&aacute; obligatoria para las Administraciones P&uacute;blicas en:";
 choices[83]= new Array();
 choices[83][0] = "Enero de 2015.";
 choices[83][1] = "Enero de 2016.";
 choices[83][2] = "Diciembre de 2016.";
 choices[83][3] = "Diciembre de 2015.";
 answers[83] = choices[83][0];
 units[83] = "70";
 comments[83] = "Id Pregunta: 10928. TIC A1 AGE 2014";


//  Id pregunta: 11024 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  &iquest;Cu&aacute;l de las siguientes es un principio de Dise&ntilde;o universal?";
 choices[84]= new Array();
 choices[84][0] = "Cumplimiento de las WCAG 1.0";
 choices[84][1] = "Cumplimiento de las WCAG 2.0";
 choices[84][2] = "Escaso esfuerzo f&iacute;sico";
 choices[84][3] = "Ensayo prueba-error";
 answers[84] = choices[84][2];
 units[84] = "39";
 comments[84] = "Id Pregunta: 11024. ";


//  Id pregunta: 11041 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  &iquest;Qu&eacute; versi&oacute;n de Java incorpora de forma completa la librer&iacute;a JavaFX?";
 choices[85]= new Array();
 choices[85][0] = "5";
 choices[85][1] = "6";
 choices[85][2] = "7";
 choices[85][3] = "8";
 answers[85] = choices[85][3];
 units[85] = "60";
 comments[85] = "Id Pregunta: 11041. Viiene incluida desde la versi&oacute;n 7u6, pero no se incorpora de forma completa hasta la versi&oacute;n 8";


//  Id pregunta: 11053 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  &iquest;Cu&aacute;l NO es una extensi&oacute;n v&aacute;lida para certificados?";
 choices[86]= new Array();
 choices[86][0] = ".PFX";
 choices[86][1] = ".DER";
 choices[86][2] = ".P7B";
 choices[86][3] = "Todos lo son";
 answers[86] = choices[86][3];
 units[86] = "73";
 comments[86] = "Id Pregunta: 11053. ";


//  Id pregunta: 11110 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  Seleccione la opci&oacute;n que no indica un principio o pauta de las WCAG 2.0";
 choices[87]= new Array();
 choices[87][0] = "Comprensibilidad";
 choices[87][1] = "Sencillez";
 choices[87][2] = "Operabilidad";
 choices[87][3] = "Robustez";
 answers[87] = choices[87][1];
 units[87] = "39";
 comments[87] = "Id Pregunta: 11110. ";


//  Id pregunta: 11121 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  &iquest;En qu&eacute; situaci&oacute;n pueden las AAPP establecer la obligatoriedad de comunicarse con ellas utilizando s&oacute;lo medios electr&oacute;nicos?";
 choices[88]= new Array();
 choices[88][0] = "Nunca";
 choices[88][1] = "&Uacute;nicamente cuando los interesados sean personas jur&iacute;dicas";
 choices[88][2] = "Cuando los interesados sean personas jur&iacute;dicas o colectivos de personas f&iacute;sicas que tengan garantizado el acceso y disponibilidad de los medios tecnol&oacute;gicos precisos";
 choices[88][3] = "En todo caso";
 answers[88] = choices[88][2];
 units[88] = "43";
 comments[88] = "Id Pregunta: 11121. ";


//  Id pregunta: 11122 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  &iquest;A que se refiere la gu&iacute;a CCN-STIC 804?";
 choices[89]= new Array();
 choices[89][0] = "Medidas de implantaci&oacute;n del ENS";
 choices[89][1] = "Plan de Adecuaci&oacute;n del ENS";
 choices[89][2] = "Auditor&iacute;a del ENS";
 choices[89][3] = "Normas de seguridad del ENS";
 answers[89] = choices[89][0];
 units[89] = "43";
 comments[89] = "Id Pregunta: 11122. ";


//  Id pregunta: 11123 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  &iquest;Cu&aacute;l de las siguientes no es una norma t&eacute;cnica de interoperabilidad?";
 choices[90]= new Array();
 choices[90][0] = "Cat&aacute;logo de est&aacute;ndares";
 choices[90][1] = "Modelo de datos para el intercambio de expedientes y documentos electr&oacute;nicos";
 choices[90][2] = "Procedimiento de copiado aut&eacute;ntico y conversi&oacute;n entre documentos electr&oacute;nicos";
 choices[90][3] = "Reutilizaci&oacute;n de recursos de informaci&oacute;n";
 answers[90] = choices[90][1];
 units[90] = "43";
 comments[90] = "Id Pregunta: 11123. ";


//  Id pregunta: 11258 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  En relaci&oacute;n con los efectos jur&iacute;dicos de las firmas electr&oacute;nicas, indique la respuesta correcta:";
 choices[91]= new Array();
 choices[91][0] = "No se denegar&aacute;n efectos jur&iacute;dicos ni admisibilidad como prueba en procedimientos judiciales a una firma electr&oacute;nica por el mero hecho de ser una firma electr&oacute;nica o porque no cumpla los requisitos de la firma electr&oacute;nica cualificada.";
 choices[91][1] = "Una firma electr&oacute;nica cualificada tendr&aacute; un efecto jur&iacute;dico equivalente al de una firma manuscrita.";
 choices[91][2] = "Una firma electr&oacute;nica b&aacute;sica, como usuario y contrase&ntilde;a, puede ser prueba en juicio.";
 choices[91][3] = "Todas son verdaderas.";
 answers[91] = choices[91][3];
 units[91] = "73";
 comments[91] = "Id Pregunta: 11258. ";


//  Id pregunta: 11260 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Los requisitos de seguridad aplicables a los prestadores de servicios de confianza:";
 choices[92]= new Array();
 choices[92][0] = "Son los mismos para tanto para los prestadores de servicios de confianza cualificados como no cualificados";
 choices[92][1] = "Notificar&aacute;n al Ministerio de Industria en un plazo m&aacute;ximo de 48 horas, de cualquier violaci&oacute;n de seguridad o p&eacute;rdida de integridad.";
 choices[92][2] = "En caso de que una violaci&oacute;n de la seguridad afecte a dos o m&aacute;s Estados miembros, el organismo de supervisi&oacute;n notificado informar&aacute; al respecto a los organismos de supervisi&oacute;n de los dem&aacute;s Estados miembros y a ENISA.";
 choices[92][3] = "Todas son verdaderas.";
 answers[92] = choices[92][2];
 units[92] = "73";
 comments[92] = "Id Pregunta: 11260. ";


//  Id pregunta: 11329 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  En relaci&oacute;n con la plataforma Cl@ve, indique la opci&oacute;n falsa";
 choices[93]= new Array();
 choices[93][0] = "Se desarrolla al hilo de una medida del informe CORA";
 choices[93][1] = "Est&aacute; bajo la titularidad de la DTIC";
 choices[93][2] = "La orden que lo aprueba (MINHAP/1838/2014) se publica seg&uacute;n lo establecido en el art&iacute;culo 11 del RD 1671/2009";
 choices[93][3] = "Plataforma com&uacute;n del sector p&uacute;blico estatal para identificar, autenticar y firmar electr&oacute;nicamente, mediante el uso de claves concertadas";
 answers[93] = choices[93][2];
 units[93] = "43";
 comments[93] = "Id Pregunta: 11329. ";


//  Id pregunta: 11491 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Qu&eacute; norma del CCN hace referencia a la criptograf&iacute;a de empleo en el Esquema Nacional de Seguridad?";
 choices[94]= new Array();
 choices[94][0] = "CCN-STIC-802";
 choices[94][1] = "CCN-STIC-403";
 choices[94][2] = "CCN-STIC-807";
 choices[94][3] = "CCN-STIC-823";
 answers[94] = choices[94][2];
 units[94] = "43";
 comments[94] = "Id Pregunta: 11491. NULL";


//  Id pregunta: 11492 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Cu&aacute;l de los siguientes NO es un agente recogido por la NTI de Protocolo de Intermediaci&oacute;n de Datos?";
 choices[95]= new Array();
 choices[95][0] = "Emisor";
 choices[95][1] = "Remitente";
 choices[95][2] = "Cesionario";
 choices[95][3] = "Cedente";
 answers[95] = choices[95][1];
 units[95] = "43";
 comments[95] = "Id Pregunta: 11492. NULL";


//  Id pregunta: 11593 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Se&ntilde;ale el contenido opcional de un &iacute;ndice de expediente electr&oacute;nico:";
 choices[96]= new Array();
 choices[96][0] = "Huella digital de cada documento electr&oacute;nico";
 choices[96][1] = "Fecha de generaci&oacute;n del &iacute;ndice";
 choices[96][2] = "Fecha de incorporaci&oacute;n al expediente de cada documento electr&oacute;nico";
 choices[96][3] = "Identificador de cada documento electr&oacute;nico";
 answers[96] = choices[96][2];
 units[96] = "43";
 comments[96] = "Id Pregunta: 11593. ";


//  Id pregunta: 11595 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Con respecto a la Comisi&oacute;n de Estrategia TIC, se&ntilde;ale la incorrecta:";
 choices[97]= new Array();
 choices[97][0] = "La Comisi&oacute;n de Estrategia TIC se adscribe al Ministerio de Hacienda y Administraciones P&uacute;blicas a trav&eacute;s de la Secretar&iacute;a de Estado de Administraciones P&uacute;blicas.";
 choices[97][1] = "Una de sus funciones es declarar los medios o servicios compartidos.";
 choices[97][2] = "Las reuniones de su Pleno se celebrar&aacute;n, al menos, cuatro veces al a&ntilde;o por convocatoria de su Presidente, bien a iniciativa propia, bien cuando lo soliciten, al menos, la mitad de sus miembros.";
 choices[97][3] = "Podr&aacute;n constituirse los grupos de trabajo que se requieran para el adecuado desarrollo de sus funciones.";
 answers[97] = choices[97][2];
 units[97] = "43";
 comments[97] = "Id Pregunta: 11595. ";


//  Id pregunta: 11603 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  La soluci&oacute;n integral de registro para cualquier organismo p&uacute;blico, que cubre tanto la gesti&oacute;n de sus oficinas de registro de entrada/salida como la recepci&oacute;n y env&iacute;o de registros en las unidades tramitadoras destinatarias de la documentaci&oacute;n sellama:";
 choices[98]= new Array();
 choices[98][0] = "ORVE";
 choices[98][1] = "SIR";
 choices[98][2] = "GEISER";
 choices[98][3] = "Registro Electr&oacute;nico Com&uacute;n";
 answers[98] = choices[98][2];
 units[98] = "44";
 comments[98] = "Id Pregunta: 11603. ";


//  Id pregunta: 11748 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Cada Administraci&oacute;n P&uacute;blica determinar&aacute; las condiciones e instrumentos de creaci&oacute;n de las sedes electr&oacute;nicas con sujeci&oacute;n a los principios, &iquest;cu&aacute;l no es uno de ellos?:";
 choices[99]= new Array();
 choices[99][0] = "transparencia";
 choices[99][1] = "responsabilidad";
 choices[99][2] = "universalidad";
 choices[99][3] = "publicidad del procedimiento";
 answers[99] = choices[99][2];
 units[99] = "43";
 comments[99] = "Id Pregunta: 11748. ";


