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

//  Id pregunta: 673 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  El &quot;proyecto CERES&quot;:";
 choices[0]= new Array();
 choices[0][0] = "Establece c&oacute;mo deben de ser los certificados que se usen para realizar la firma electr&oacute;nica";
 choices[0][1] = "Hace que se pueda usar a la Fabrica Nacional de la Moneda y Timbre de forma gratuita por todos los espa&ntilde;oles";
 choices[0][2] = "Se define en el &aacute;mbito de la relaci&oacute;n de los ciudadanos con las administraciones y &eacute;stas entre si.";
 choices[0][3] = "Designa a la Fabrica Nacional de la Moneda y Timbre como autoridad de certificaci&oacute;n para cualquier transacci&oacute;n electr&oacute;nica";
 answers[0] = choices[0][2];
 units[0] = "74";
 comments[0] = "Id Pregunta: 673. NULL";


//  Id pregunta: 848 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Cu&aacute;l de las siguientes no es una caracter&iacute;stica de una funci&oacute;n Hash?:";
 choices[1]= new Array();
 choices[1][0] = "Obtiene un resultado unidireccional e irreversible";
 choices[1][1] = "No hace falta una clave pues el texto cifrado depende exclusivamente del texto claro original";
 choices[1][2] = "Se trata de una funci&oacute;n libre de colisiones en sentido estricto";
 choices[1][3] = "La seguridad de la funci&oacute;n Hash radica en su car&aacute;cter bidireccional";
 answers[1] = choices[1][3];
 units[1] = "72";
 comments[1] = "Id Pregunta: 848. ";


//  Id pregunta: 960 AÃ±o de creación de pregunta: 2005-01-01
 questions[2]= "3)  Con respecto a X.500 y LDAP, indicar la respuesta incorrecta:";
 choices[2]= new Array();
 choices[2][0] = "X.500 utiliza ASN.1 para la formaci&oacute;n de los mensajes, y LDAP utiliza cadenas de caracteres simples para la representaci&oacute;n de Distinguished Names ";
 choices[2][1] = "LDAP no posee el servicio de modificaci&oacute;n REMOVE perteneciente a DAP";
 choices[2][2] = "X.500 y LDAP funcionan sobre la pila de protocolos OSI y TCP/IP respectivamente";
 choices[2][3] = "Un dominio de gesti&oacute;n de directorio est&aacute; formado, como m&iacute;nimo, por: 1 DSA, 1 DUA y 1 esquema (visi&oacute;n externa del dominio)";
 answers[2] = choices[2][3];
 units[2] = "73";
 comments[2] = "Id Pregunta: 960. ";


//  Id pregunta: 970 AÃ±o de creación de pregunta: 2005-01-01
 questions[3]= "4)  Cuando se obtiene un certificado electr&oacute;nico, la clave privada generada se queda en:";
 choices[3]= new Array();
 choices[3][0] = "El navegador de internet";
 choices[3][1] = "El proveedor de servicios ";
 choices[3][2] = "Un servidor de certificados";
 choices[3][3] = "La Autoridad de Certificaci&oacute;n";
 answers[3] = choices[3][0];
 units[3] = "74";
 comments[3] = "Id Pregunta: 970. NULL";


//  Id pregunta: 989 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  Dentro de los sistemas de criptograf&iacute;a de res&uacute;men podemos encontrar los algoritmos:";
 choices[4]= new Array();
 choices[4][0] = "DES";
 choices[4][1] = "SEAL";
 choices[4][2] = "RC-4";
 choices[4][3] = "MD-5";
 answers[4] = choices[4][3];
 units[4] = "72";
 comments[4] = "Id Pregunta: 989. ";


//  Id pregunta: 993 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  Diffie y Hellman inventaron:";
 choices[5]= new Array();
 choices[5][0] = "Un algoritmo criptogr&aacute;fico";
 choices[5][1] = "Un mecanismo de intercambio de claves";
 choices[5][2] = "Las infraestructuras de clave p&uacute;blica (PKI))";
 choices[5][3] = "Las funciones resumen";
 answers[5] = choices[5][1];
 units[5] = "72";
 comments[5] = "Id Pregunta: 993. ";


//  Id pregunta: 1016 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  El ganador del concurso p&uacute;blico para reemplazar al algoritmo DES es:";
 choices[6]= new Array();
 choices[6][0] = "RC6";
 choices[6][1] = "Twofish";
 choices[6][2] = "Serpent";
 choices[6][3] = "Rijndael";
 answers[6] = choices[6][3];
 units[6] = "72";
 comments[6] = "Id Pregunta: 1016. ";


//  Id pregunta: 1052 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  El servicio de seguridad que garantiza que la informaci&oacute;n no ha sido mutilada o alterada de manera no autorizada se denomina:";
 choices[7]= new Array();
 choices[7][0] = "Autentificaci&oacute;n";
 choices[7][1] = "Confidencialidad";
 choices[7][2] = "Integridad";
 choices[7][3] = "No repudio";
 answers[7] = choices[7][2];
 units[7] = "72";
 comments[7] = "Id Pregunta: 1052. ";


//  Id pregunta: 1091 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  En el proceso de cifrado basado en el m&eacute;todo DES de criptosistema sim&eacute;trico, en el cu&aacute;l existen n nodos de intercambio de mensajes, &iquest;cu&aacute;ntas claves debe gestionar cada uno de los nodos para comunicarse con el resto?:";
 choices[8]= new Array();
 choices[8][0] = "n";
 choices[8][1] = "n + 1";
 choices[8][2] = "n!";
 choices[8][3] = "Ninguna de las anteriores contestaciones es cierta";
 answers[8] = choices[8][3];
 units[8] = "72";
 comments[8] = "Id Pregunta: 1091. ";


//  Id pregunta: 1153 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  En una operaci&oacute;n de resumen o hash, con h = H(M) :";
 choices[9]= new Array();
 choices[9][0] = "M debe ser de longitud fija";
 choices[9][1] = "no tiene por qu&eacute; conocerse H";
 choices[9][2] = "h debe ser de longitud fija";
 choices[9][3] = "dado M, no siempre se va a poder calcular H(M)";
 answers[9] = choices[9][2];
 units[9] = "72";
 comments[9] = "Id Pregunta: 1153. ";


//  Id pregunta: 1189 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  Indique cu&aacute;l de las siguientes afirmaciones sobre directorios no es correcta:";
 choices[10]= new Array();
 choices[10][0] = "La arquitectura X.500 se basa en la r&eacute;plica de bases de datos distribuidas";
 choices[10][1] = "El DAP es el protocolo de acceso al directorio X.500";
 choices[10][2] = "X.500 fue dise&ntilde;ado como una versi&oacute;n simplificada de LDAP";
 choices[10][3] = "Los programas acceden al directorio usando las APIs del X/Open Directory Service";
 answers[10] = choices[10][2];
 units[10] = "73";
 comments[10] = "Id Pregunta: 1189. ";


//  Id pregunta: 1212 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  La clave p&uacute;blica forma parte de un:";
 choices[11]= new Array();
 choices[11][0] = "Sistema criptogr&aacute;fico sim&eacute;trico";
 choices[11][1] = "Sistema criptogr&aacute;fico anal&oacute;gico";
 choices[11][2] = "Sistema criptogr&aacute;fico asim&eacute;trico";
 choices[11][3] = "Sistema criptogr&aacute;fico propietario de la Administraci&oacute;n P&uacute;blica";
 answers[11] = choices[11][2];
 units[11] = "72";
 comments[11] = "Id Pregunta: 1212. ";


//  Id pregunta: 1357 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  SHA-1 es un algoritmo empleado por la criptograf&iacute;a sim&eacute;trica de:";
 choices[12]= new Array();
 choices[12][0] = "Res&uacute;men";
 choices[12][1] = "Bloques";
 choices[12][2] = "Flujos";
 choices[12][3] = "Las respuestas &lsquo;b&rsquo; y &lsquo;c&rsquo; son correctas";
 answers[12] = choices[12][0];
 units[12] = "72";
 comments[12] = "Id Pregunta: 1357. ";


//  Id pregunta: 1358 AÃ±o de creación de pregunta: 2005-01-01
 questions[13]= "14)  &iquest;Qu&eacute; se conoce por SHA-2?:";
 choices[13]= new Array();
 choices[13][0] = "Una funci&oacute;n de compresi&oacute;n";
 choices[13][1] = "Un mecanismo de intercambio de claves";
 choices[13][2] = "Una infraestructura de clave p&uacute;blica (PKI))";
 choices[13][3] = "Un conjunto de funciones resumen";
 answers[13] = choices[13][3];
 units[13] = "72";
 comments[13] = "Id Pregunta: 1358. ";


//  Id pregunta: 1535 AÃ±o de creación de pregunta: 2003-01-01
 questions[14]= "15)  &iquest; Cu&aacute;l de los siguientes t&eacute;rminos no est&aacute; relacionado con un directorio LDAP ?";
 choices[14]= new Array();
 choices[14][0] = "DIT";
 choices[14][1] = "WMI";
 choices[14][2] = "DN";
 choices[14][3] = "RDN";
 answers[14] = choices[14][1];
 units[14] = "74";
 comments[14] = "Id Pregunta: 1535. NULL";


//  Id pregunta: 1655 AÃ±o de creación de pregunta: 2004-01-01
 questions[15]= "16)  &iquest;Cu&aacute;les de los siguientes no son modos de operaci&oacute;n para algoritmos de cifrado por bloques?";
 choices[15]= new Array();
 choices[15][0] = "CTR";
 choices[15][1] = "CBC";
 choices[15][2] = "CFB";
 choices[15][3] = "DFB";
 answers[15] = choices[15][3];
 units[15] = "72";
 comments[15] = "Id Pregunta: 1655. ";


//  Id pregunta: 1854 AÃ±o de creación de pregunta: 2006-01-01
 questions[16]= "17)  Las aplicaciones fundamentales de la criptograf&iacute;a asim&eacute;trica son:";
 choices[16]= new Array();
 choices[16][0] = "El cifrado eficiente y la firma digital";
 choices[16][1] = "El intercambio seguro  de claves privadas o de sesi&oacute;n y la firma digital";
 choices[16][2] = "El intercambio seguro de claves  privadas o de sesi&oacute;n y el cifrado eficiente";
 choices[16][3] = "Todas las anteriores";
 answers[16] = choices[16][1];
 units[16] = "72";
 comments[16] = "Id Pregunta: 1854. ";


//  Id pregunta: 1863 AÃ±o de creación de pregunta: 2006-01-01
 questions[17]= "18)  &iquest;Cu&aacute;l de los siguientes no es un sistema operativo utilizado en la arquitectura de un sistema de tarjeta inteligente?";
 choices[17]= new Array();
 choices[17][0] = "MultOS";
 choices[17][1] = "Jini";
 choices[17][2] = "Java Card";
 choices[17][3] = "SCfW";
 answers[17] = choices[17][1];
 units[17] = "74";
 comments[17] = "Id Pregunta: 1863. NULL";


//  Id pregunta: 1896 AÃ±o de creación de pregunta: 2006-01-01
 questions[18]= "19)  En la protecci&oacute;n de contrase&ntilde;as, la cadena aleatoria de datos usada para modificar el hash de contrase&ntilde;a se llama";
 choices[18]= new Array();
 choices[18][0] = "sal";
 choices[18][1] = "dongle";
 choices[18][2] = "semilla";
 choices[18][3] = "marca de agua";
 answers[18] = choices[18][0];
 units[18] = "74";
 comments[18] = "Id Pregunta: 1896. NULL";


//  Id pregunta: 3025 AÃ±o de creación de pregunta: 2004-01-01
 questions[19]= "20)  &iquest;Qu&eacute; no puede hacer un sistema de detecci&oacute;n de intrusos?";
 choices[19]= new Array();
 choices[19][0] = "Controlar el tr&aacute;fico de red dentro y fuera de los firewall";
 choices[19][1] = "Evitar que salten alarmas falsas";
 choices[19][2] = "Detectar tiempos de acceso anormales";
 choices[19][3] = "Guardar logs de los accesos";
 answers[19] = choices[19][0];
 units[19] = "111";
 comments[19] = "Id Pregunta: 3025. SS-A 2004";


//  Id pregunta: 3029 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Al ataque criptogr&aacute;fico consistente en el barrido del espacio de claves se le denomina:";
 choices[20]= new Array();
 choices[20][0] = "criptoan&aacute;lisis lineal";
 choices[20][1] = "criptoan&aacute;lisis continuo";
 choices[20][2] = "sweep-attack";
 choices[20][3] = "fuerza bruta";
 answers[20] = choices[20][3];
 units[20] = "111";
 comments[20] = "Id Pregunta: 3029. NULL";


//  Id pregunta: 3065 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  En un sistema de alimentaci&oacute;n ininterrumpida, a qu&eacute; se denomina 'red de reserva':";
 choices[21]= new Array();
 choices[21][0] = "A la suministrada por la compa&ntilde;ia el&eacute;ctrica";
 choices[21][1] = "A la que suministra el ondulador (inversor) a la carga";
 choices[21][2] = "A la carga remanente en las bater&iacute;as";
 choices[21][3] = "A la que entrega el rectificador";
 answers[21] = choices[21][0];
 units[21] = "111";
 comments[21] = "Id Pregunta: 3065. NULL";


//  Id pregunta: 3077 AÃ±o de creación de pregunta: 2005-01-01
 questions[22]= "23)  La intrusi&oacute;n de un caballo de troya (Trojan Horse) en un ordenador puede afectar, en primer lugar a:";
 choices[22]= new Array();
 choices[22][0] = "La dimensi&oacute;n de confidencialidad de la informaci&oacute;n almacenada";
 choices[22][1] = "La dimensi&oacute;n de disponibilidad de la informaci&oacute;n almacenada";
 choices[22][2] = "La dimensi&oacute;n de integridad de la informaci&oacute;n almacenada";
 choices[22][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;c&rsquo; son correctas";
 answers[22] = choices[22][0];
 units[22] = "111";
 comments[22] = "Id Pregunta: 3077. NULL";


//  Id pregunta: 3095 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Un sistema, si se desea que controle los intentos de violaci&oacute;n debe incorporar:";
 choices[23]= new Array();
 choices[23][0] = "An&aacute;lisis y validaci&oacute;n de la llamada";
 choices[23][1] = "Registro de la historia y fecha de la contrase&ntilde;a";
 choices[23][2] = "Forzar a que los usuarios cambien la contrase&ntilde;a";
 choices[23][3] = "Todas las respuestas anteriores son ciertas";
 answers[23] = choices[23][3];
 units[23] = "111";
 comments[23] = "Id Pregunta: 3095. NULL";


//  Id pregunta: 3790 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Respecto a los cortafuegos de filtrado de paquetes:";
 choices[24]= new Array();
 choices[24][0] = "act&uacute;an como routers inteligentes o screening routers";
 choices[24][1] = "se componen de un conjunto de aplicaciones intermedias, una por servicio";
 choices[24][2] = "desempe&ntilde;an funciones de proxy";
 choices[24][3] = "ninguna de las anteriores respuestas es correcta";
 answers[24] = choices[24][0];
 units[24] = "111";
 comments[24] = "Id Pregunta: 3790. NULL";


//  Id pregunta: 4172 AÃ±o de creación de pregunta: 2006-01-01
 questions[25]= "26)  Si pido a alguien su nombre le estoy pidiendo";
 choices[25]= new Array();
 choices[25][0] = "Identificaci&oacute;n";
 choices[25][1] = "Autorizaci&oacute;n";
 choices[25][2] = "Autenticaci&oacute;n";
 choices[25][3] = "Ninguna de las anteriores";
 answers[25] = choices[25][0];
 units[25] = "111";
 comments[25] = "Id Pregunta: 4172. NULL";


//  Id pregunta: 4306 AÃ±o de creación de pregunta: 2007-01-01
 questions[26]= "27)  El sistema m&aacute;s econ&oacute;mico y sencillo para proporcionar autenticaci&oacute;n y autorizaci&oacute;n es:";
 choices[26]= new Array();
 choices[26][0] = "Utilizaci&oacute;n de passwords (palabras de paso).";
 choices[26][1] = "Utilizaci&oacute;n de certificados digitales";
 choices[26][2] = "Utilizaci&oacute;n de mecanismos biom&eacute;tricos.";
 choices[26][3] = "Utilizaci&oacute;n de un cortafuego (firewall).";
 answers[26] = choices[26][0];
 units[26] = "74";
 comments[26] = "Id Pregunta: 4306. NULL";


//  Id pregunta: 4347 AÃ±o de creación de pregunta: 2007-01-01
 questions[27]= "28)  De entre los siguientes, indique cu&aacute;l no es un sistema criptogr&aacute;fico de clave sim&eacute;trica:";
 choices[27]= new Array();
 choices[27][0] = "DES";
 choices[27][1] = "Triple DES.";
 choices[27][2] = "RSA";
 choices[27][3] = "IDEA";
 answers[27] = choices[27][2];
 units[27] = "73";
 comments[27] = "Id Pregunta: 4347. ";


//  Id pregunta: 4466 AÃ±o de creación de pregunta: 2007-01-01
 questions[28]= "29)  El algoritmo de cifrado Rijndael puede ser especificado por una clave:";
 choices[28]= new Array();
 choices[28][0] = "Fija de 256 bits";
 choices[28][1] = "Con un m&iacute;nimo de 128 bits y un m&aacute;ximo de 256 bits";
 choices[28][2] = "Fija de 128 bits";
 choices[28][3] = "Con un m&iacute;nimo de 256 bits y un m&aacute;ximo de 1024 bits";
 answers[28] = choices[28][1];
 units[28] = "72";
 comments[28] = "Id Pregunta: 4466. ";


//  Id pregunta: 4484 AÃ±o de creación de pregunta: 2007-01-01
 questions[29]= "30)  El protocolo SSL (Secure Sockets Layer):";
 choices[29]= new Array();
 choices[29][0] = "Es una capa de seguridad que opera siempre sobre el protocolo UDP.";
 choices[29][1] = "No garantiza la integridad de Ia informaci&oacute;n intercambiada entre el cliente y el servidor.";
 choices[29][2] = "Proporciona conexiones seguras solo en redes privadas y siempre que el cliente y el servidor pertenezcan a la misma subred IP.";
 choices[29][3] = "Proporciona conexiones seguras sobre una red insegura garantizando, entre otros aspectos, integridad de datos transmitidos, privacidad de Ia conexi&oacute;n y autentificaci&oacute;n del cliente y del servidor.";
 answers[29] = choices[29][3];
 units[29] = "72";
 comments[29] = "Id Pregunta: 4484. ";


//  Id pregunta: 4600 AÃ±o de creación de pregunta: 2007-01-01
 questions[30]= "31)  Respecto al protocolo de seguridad IKE, cual de las siguientes respuestas es falsa:";
 choices[30]= new Array();
 choices[30][0] = "recrea las claves cada cierto tiempo";
 choices[30][1] = "permite utilizar certificados digitales";
 choices[30][2] = "se necesita una asociaci&oacute;n de seguridad IKE Para cada conexi&oacute;n IPSEC.";
 choices[30][3] = "esta basado en Oakley.";
 answers[30] = choices[30][2];
 units[30] = "74";
 comments[30] = "Id Pregunta: 4600. NULL";


//  Id pregunta: 4655 AÃ±o de creación de pregunta: 2007-01-01
 questions[31]= "32)  Un detector de intrusiones act&uacute;a a: ";
 choices[31]= new Array();
 choices[31][0] = "nivel f&iacute;sico";
 choices[31][1] = "nivel de enlace";
 choices[31][2] = "nivel de red";
 choices[31][3] = "nivel de aplicaci&oacute;n";
 answers[31] = choices[31][3];
 units[31] = "111";
 comments[31] = "Id Pregunta: 4655. NULL";


//  Id pregunta: 4724 AÃ±o de creación de pregunta: 2009-01-01
 questions[32]= "33)  La siguiente instrucci&oacute;n &ldquo;iptables &ndash;L&rdquo; :";
 choices[32]= new Array();
 choices[32][0] = "Habilita el firewall de un equipo basado en iptables.";
 choices[32][1] = "Habilita el interface loopback a traves del firewall iptables.";
 choices[32][2] = "Habilita el paso de paquetes de retorno a trav&eacute;s del firewall iptables.";
 choices[32][3] = "Muestra la lista de reglas del firewall basado en iptables.";
 answers[32] = choices[32][3];
 units[32] = "54,111";
 comments[32] = "Id Pregunta: 4724. ";


//  Id pregunta: 5039 AÃ±o de creación de pregunta: 2003-01-01
 questions[33]= "34)  Seg&uacute;n el est&aacute;ndar ISO 7816-2 sobre contactos del chip en las tarjetas inteligentes, &iquest;cu&aacute;l de los siguientescontactos se utiliza para la se&ntilde;al de reloj?:";
 choices[33]= new Array();
 choices[33][0] = "C2";
 choices[33][1] = "C3";
 choices[33][2] = "C5";
 choices[33][3] = "C6";
 answers[33] = choices[33][1];
 units[33] = "74";
 comments[33] = "Id Pregunta: 5039. Examen TIC A 2007";


//  Id pregunta: 5089 AÃ±o de creación de pregunta: 2001-01-01
 questions[34]= "35)  En el est&aacute;ndar X.509,&iquest; qu&eacute; procedimiento de autenticaci&oacute;n utilizar&iacute;a cuando el origen y el destino no tienen relojes sincronizados?";
 choices[34]= new Array();
 choices[34][0] = "autenticaci&oacute;n a 1 v&iacute;a";
 choices[34][1] = "autenticaci&oacute;n a 2 v&iacute;as";
 choices[34][2] = "autenticaci&oacute;n a 3 v&iacute;as ";
 choices[34][3] = "autenticaci&oacute;n a 4 v&iacute;as";
 answers[34] = choices[34][2];
 units[34] = "73";
 comments[34] = "Id Pregunta: 5089. ";


//  Id pregunta: 5093 AÃ±o de creación de pregunta: 2003-01-01
 questions[35]= "36)  Los algoritmos de autenticaci&oacute;n y firma utilizados en el DNI se basan en:";
 choices[35]= new Array();
 choices[35][0] = "Cuatro pares de claves RSA";
 choices[35][1] = "Dos pares de claves DES";
 choices[35][2] = "Dos pares de claves DSA";
 choices[35][3] = "Dos pares de claves RSA";
 answers[35] = choices[35][3];
 units[35] = "74";
 comments[35] = "Id Pregunta: 5093. NULL";


//  Id pregunta: 5171 AÃ±o de creación de pregunta: 2003-01-01
 questions[36]= "37)  Las VPN's utilizan mecanismos basados en t&uacute;neles para:";
 choices[36]= new Array();
 choices[36][0] = "Habilitar la navegaci&oacute;n por Internet.";
 choices[36][1] = "Encapsular paquetes de un protocolo dentro de otros paquetes pudiendo acomodar as&iacute; protocolos incompatibles.";
 choices[36][2] = "Efectuar una tarificaci&oacute;n a la corporaci&oacute;n que habilita acceso VPN";
 choices[36][3] = "Deshabilitar la seguridad del acceso VPN una vez autenticado el cliente VPN.";
 answers[36] = choices[36][1];
 units[36] = "111";
 comments[36] = "Id Pregunta: 5171. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5272 AÃ±o de creación de pregunta: 2003-01-01
 questions[37]= "38)  El DNIe recoge los siguientes datos biom&eacute;tricos";
 choices[37]= new Array();
 choices[37][0] = "Huellas dactilares";
 choices[37][1] = "Iris del ojo";
 choices[37][2] = "Patr&oacute;n facial";
 choices[37][3] = "Ninguna de las anteriores";
 answers[37] = choices[37][3];
 units[37] = "74";
 comments[37] = "Id Pregunta: 5272. no recoge huella dactilar completa, s&oacute;lo las minucias";


//  Id pregunta: 5615 AÃ±o de creación de pregunta: 2003-01-01
 questions[38]= "39)  &iquest;Qu&eacute; es un SOCKS o un FWTK?";
 choices[38]= new Array();
 choices[38][0] = "Son servidores de contrase&ntilde;as y claves que protegen generalmente informaci&oacute;n vital mediante algoritmos de cifrado";
 choices[38][1] = "Servidores de autenticaci&oacute;n y proxy";
 choices[38][2] = "Servidores de nombres";
 choices[38][3] = "Ninguna de las anteriores";
 answers[38] = choices[38][1];
 units[38] = "111";
 comments[38] = "Id Pregunta: 5615. NULL";


//  Id pregunta: 5687 AÃ±o de creación de pregunta: 2003-01-01
 questions[39]= "40)  Se&ntilde;ale cual de los siguientes datos se encuentra en la zona p&uacute;blica del chip criptogr&aacute;fico del DNI electr&oacute;nico:";
 choices[39]= new Array();
 choices[39][0] = "Certificado de autenticaci&oacute;n";
 choices[39][1] = "Certificados de la autoridad de certificaci&oacute;n";
 choices[39][2] = "Datos biom&eacute;tricos";
 choices[39][3] = "Claves privadas del ciudadano";
 answers[39] = choices[39][1];
 units[39] = "74";
 comments[39] = "Id Pregunta: 5687. NULL";


//  Id pregunta: 5699 AÃ±o de creación de pregunta: 2003-01-01
 questions[40]= "41)  Se&ntilde;ale cual de las siguientes medidas de seguridad del DNI electr&oacute;nico es falsa:";
 choices[40]= new Array();
 choices[40][0] = "Tintas visibles con luz ultravioleta para evitar su falsificaci&oacute;n";
 choices[40][1] = " Chip RFID";
 choices[40][2] = "Encriptaci&oacute;n de los datos del chip";
 choices[40][3] = "Acceso a la funcionalidad del DNI electr&oacute;nico mediante clave personal de acceso (PIN)";
 answers[40] = choices[40][1];
 units[40] = "74";
 comments[40] = "Id Pregunta: 5699. NULL";


//  Id pregunta: 5746 AÃ±o de creación de pregunta: 2009-01-01
 questions[41]= "42)  &iquest;Qu&eacute; es el efecto avalancha en una funci&oacute;n hash?";
 choices[41]= new Array();
 choices[41][0] = "Una peque&ntilde;a variaci&oacute;n en la longitud del mensaje debe producir una gran variaci&oacute;n en la longitud del resumen";
 choices[41][1] = "Una peque&ntilde;a variaci&oacute;n del contenido del mensaje debe producir una gran variaci&oacute;n en la longitud del resumen";
 choices[41][2] = "Una peque&ntilde;a variaci&oacute;n en el contenido del mensaje debe producir una peque&ntilde;a variaci&oacute;n en la longitud del resumen";
 choices[41][3] = "Una peque&ntilde;a variaci&oacute;n en el contenido del mensaje debe producir una gran variaci&oacute;n en el contenido del resumen";
 answers[41] = choices[41][3];
 units[41] = "72";
 comments[41] = "Id Pregunta: 5746. ";


//  Id pregunta: 5750 AÃ±o de creación de pregunta: 2009-01-01
 questions[42]= "43)  Entre SHA-1 y MD5 &iquest;cu&aacute;l se considera m&aacute;s resistente a colisiones?";
 choices[42]= new Array();
 choices[42][0] = "El SHA-1 porque produce un resumen m&aacute;s largo";
 choices[42][1] = "El SHA-1 porque produce un resumen m&aacute;s corto";
 choices[42][2] = "El MD5 porque produce un resumen m&aacute;s largo";
 choices[42][3] = "El MD5 porque produce un resumen m&aacute;s corto";
 answers[42] = choices[42][0];
 units[42] = "72";
 comments[42] = "Id Pregunta: 5750. ";


//  Id pregunta: 5751 AÃ±o de creación de pregunta: 2009-01-01
 questions[43]= "44)  &iquest;Cu&aacute;l es la longitud efectiva aproximada de clave del algoritmo Triple DES?";
 choices[43]= new Array();
 choices[43][0] = "112 (2x56) bits";
 choices[43][1] = "128 (2x64) bits";
 choices[43][2] = "168 (3x56) bits";
 choices[43][3] = "192 (3x64) bits";
 answers[43] = choices[43][0];
 units[43] = "72";
 comments[43] = "Id Pregunta: 5751. ";


//  Id pregunta: 5906 AÃ±o de creación de pregunta: 2009-01-01
 questions[44]= "45)  En el &aacute;mbito de Internet, cuando hablamos de PHISHING nos estamos refiendo a:";
 choices[44]= new Array();
 choices[44][0] = "Un determinado virus inform&aacute;tico";
 choices[44][1] = "Difusi&oacute;n masiva de noticias falsas";
 choices[44][2] = "Suplantaci&oacute;n fraudulenta que intentan conseguir informaci&oacute;n valiosa";
 choices[44][3] = "Reenv&iacute;o de mensajes a mucha gente";
 answers[44] = choices[44][2];
 units[44] = "111";
 comments[44] = "Id Pregunta: 5906. MAP 2008 A1";


//  Id pregunta: 5913 AÃ±o de creación de pregunta: 2009-01-01
 questions[45]= "46)  &iquest;Cu&aacute;l de los siguientes criptosistemas se corresponde con un criptosistema asim&eacute;trico &oacute; de clave p&uacute;blica?";
 choices[45]= new Array();
 choices[45][0] = "IDEA (International Data Encryption Standard)";
 choices[45][1] = "Algoritmo de intercambio de claves de Diffie- Hellman";
 choices[45][2] = "AES (Advanced Encryption Standard)";
 choices[45][3] = "RC-5";
 answers[45] = choices[45][1];
 units[45] = "72";
 comments[45] = "Id Pregunta: 5913. MAP 2008 A1";


//  Id pregunta: 5922 AÃ±o de creación de pregunta: 2009-01-01
 questions[46]= "47)  &iquest;Cu&aacute;l de los siguientes NO es un tipo de ataque activo?";
 choices[46]= new Array();
 choices[46][0] = "Interrupci&oacute;n";
 choices[46][1] = "Interceptaci&oacute;n";
 choices[46][2] = "Modificaci&oacute;n";
 choices[46][3] = "Generaci&oacute;n";
 answers[46] = choices[46][1];
 units[46] = "111";
 comments[46] = "Id Pregunta: 5922. MAP 2008 A1";


//  Id pregunta: 6538 AÃ±o de creación de pregunta: 2010-01-01
 questions[47]= "48)  En relaci&oacute;n a las t&eacute;cnicas de control de acceso";
 choices[47]= new Array();
 choices[47][0] = "DAC permite a los propietarios de los datos elegir los sujetos que tienen acceso a los mismos";
 choices[47][1] = "MAC usa un sistema de etiquetado";
 choices[47][2] = "El control de acceso no discrecional usa un m&eacute;todo basado en roles para determinar los permisos";
 choices[47][3] = "Todas las respuestas anteriores son correctas";
 answers[47] = choices[47][3];
 units[47] = "111";
 comments[47] = "Id Pregunta: 6538. NULL";


//  Id pregunta: 6542 AÃ±o de creación de pregunta: 2010-01-01
 questions[48]= "49)  Un usuario de Kerberos";
 choices[48]= new Array();
 choices[48][0] = "Recibe un ticket para garantizar el acceso TGT";
 choices[48][1] = "El ticket permite al usuario pedir acceso a los distintos recursos";
 choices[48][2] = "El servicio de generaci&oacute;n de tickets TGS genera los tickets con las claves de sesi&oacute;n.";
 choices[48][3] = "Todas las respuestas anteriores son correctas";
 answers[48] = choices[48][3];
 units[48] = "111";
 comments[48] = "Id Pregunta: 6542. NULL";


//  Id pregunta: 6543 AÃ±o de creación de pregunta: 2010-01-01
 questions[49]= "50)  Un ejemplo de ataque al control de acceso es";
 choices[49]= new Array();
 choices[49][0] = "Denegaci&oacute;n de servicio";
 choices[49][1] = "Spoofing";
 choices[49][2] = "Ataques de diccionario";
 choices[49][3] = "Todas las respuestas anteriores son correctas";
 answers[49] = choices[49][3];
 units[49] = "111";
 comments[49] = "Id Pregunta: 6543. NULL";


//  Id pregunta: 6550 AÃ±o de creación de pregunta: 2010-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l es el m&eacute;todo de autenticaci&oacute;n mejor?";
 choices[50]= new Array();
 choices[50][0] = "Algo que alguien sabe";
 choices[50][1] = "Algo que alguien es";
 choices[50][2] = "Algo que alguien tiene";
 choices[50][3] = "Lo que una persona sabe y es";
 answers[50] = choices[50][3];
 units[50] = "111";
 comments[50] = "Id Pregunta: 6550. NULL";


//  Id pregunta: 6557 AÃ±o de creación de pregunta: 2010-01-01
 questions[51]= "52)  Una Autoridad de Validaci&oacute;n (VA) puede realizar distintos tipos de servicios de validaci&oacute;n:";
 choices[51]= new Array();
 choices[51][0] = "Descarga de CRLs";
 choices[51][1] = "Via OCSP";
 choices[51][2] = "A y B son correctas";
 choices[51][3] = "A y B son incorrectas";
 answers[51] = choices[51][2];
 units[51] = "74";
 comments[51] = "Id Pregunta: 6557. NULL";


//  Id pregunta: 6558 AÃ±o de creación de pregunta: 2010-01-01
 questions[52]= "53)  Servicios de una Autoridad de Certificaci&oacute;n esenciales son:";
 choices[52]= new Array();
 choices[52][0] = "Generaci&oacute;n y gesti&oacute;n de claves criptogr&aacute;ficas";
 choices[52][1] = "Servicios de directorio";
 choices[52][2] = "Registro de usuarios mediante el que se acredita la identidad";
 choices[52][3] = "Todas las respuestas anteriores son correctas";
 answers[52] = choices[52][3];
 units[52] = "74";
 comments[52] = "Id Pregunta: 6558. NULL";


//  Id pregunta: 7288 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas es INCORRECTA sobre el protocolo RADIUS (Remote Authentication Dial In User Service):";
 choices[53]= new Array();
 choices[53][0] = "Es un protocolo cliente/servidor que utiliza el protocolo de transporte fiable TCP y el puerto 1813";
 choices[53][1] = "Utiliza el protocolo de nivel de enlace PPP (Point to Point Protocol) para el env&iacute;o de las credenciales de usuario";
 choices[53][2] = "El sucesor de RADIUS es el protocolo DIAMETER";
 choices[53][3] = "Es utilizado a menudo para facilitar itinerancia (roaming) entre proveedores de servicio de internet (ISP)";
 answers[53] = choices[53][0];
 units[53] = "111";
 comments[53] = "Id Pregunta: 7288. Examen TIC B 2009";


//  Id pregunta: 7337 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  &iquest;Qui&eacute;n es el creador del software de cifrado PGP (Pretty Good Privacy)?";
 choices[54]= new Array();
 choices[54][0] = "Richard Stallman";
 choices[54][1] = "Phil Zimmermann";
 choices[54][2] = "Konrad Zuse";
 choices[54][3] = "Alan Turing";
 answers[54] = choices[54][1];
 units[54] = "72";
 comments[54] = "Id Pregunta: 7337. NULL";


//  Id pregunta: 7343 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  Se&ntilde;ale la afirmaci&oacute;n INCORRECTA con respecto a las funciones hash:";
 choices[55]= new Array();
 choices[55][0] = "El algoritmo SHA-1 produce una salida resumen de 160 bits";
 choices[55][1] = "Las funciones hash son usadas, principalmente, para resolver el problema de la confidencialidad de los mensajes";
 choices[55][2] = "Resistencia a la preimagen significa que dada cualquier imagen y, es computacionalmente imposible encontrar un mensaje x tal que h(x)=y";
 choices[55][3] = "Resistencia a colisi&oacute;n significa que es computacionalmente imposible encontrar dos diferentes mensajes x, x&rsquo; tal que h(x)=h(x&rsquo;)";
 answers[55] = choices[55][1];
 units[55] = "72";
 comments[55] = "Id Pregunta: 7343. NULL";


//  Id pregunta: 7769 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)   Seg&uacute;n la recomendaci&oacute;n X.509 v.3:";
 choices[56]= new Array();
 choices[56][0] = " Un usuario puede tener a lo sumo un certificado de atributos por cada certificado de clave p&uacute;blica.";
 choices[56][1] = " Los certificados de atributos deben ser generados por Autoridades de Certificaci&oacute;n.";
 choices[56][2] = " Para su validez, los certificados de atributos deben estar siempre acompa&ntilde;ados de un certificado de clave p&uacute;blica.";
 choices[56][3] = " Los certificados de atributos contienen id&eacute;nticos campos que subcampos tiene el campo de extensiones de los certificados de clave p&uacute;blica.";
 answers[56] = choices[56][2];
 units[56] = "73";
 comments[56] = "Id Pregunta: 7769. Map 2005";


//  Id pregunta: 8165 AÃ±o de creación de pregunta: 2011-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l es la vigencia temporal de los certificados electr&oacute;nicos contenidos en el DNIe?:";
 choices[57]= new Array();
 choices[57][0] = "Ilimitada.";
 choices[57][1] = "No podr&aacute; ser superior a 5 a&ntilde;os.";
 choices[57][2] = "30 meses.";
 choices[57][3] = "El certificado de autenticidad 24 meses y el de firma 18.";
 answers[57] = choices[57][1];
 units[57] = "74";
 comments[57] = "Id Pregunta: 8165. Examen TIC A1 2010. RD 414/2015 que modifica el RD 1553/2005 de expedici&oacute;n del DNI.";


//  Id pregunta: 8192 AÃ±o de creación de pregunta: 2011-01-01
 questions[58]= "59)  Indique la afirmaci&oacute;n correcta que aplica al DNI electr&oacute;nico: ";
 choices[58]= new Array();
 choices[58][0] = "La PKI adoptada para el DNI electr&oacute;nico asigna las funciones de Autoridad de Validaci&oacute;n a las entidades Autoridad de Certificaci&oacute;n, con objeto de tener conocimiento de la vigencia o caducidad de certificados de un determinado titular.";
 choices[58][1] = "La clave personal de acceso (PIN) podr&aacute; contener signos de puntuaci&oacute;n.";
 choices[58][2] = "Todos los certificados emitidos por DNIe contienen la extensi&oacute;n &lsquo;Key Usage&rsquo; con al menos los siguientes usos &quot;contentCommitment&quot;, &quot;Digital Signature&quot; y &quot;dataEncipherment&quot;.";
 choices[58][3] = "El tama&ntilde;o de las claves de los certificados de autenticaci&oacute;n y firma contenidos en el DNIe, es de 4096 bits. ";
 answers[58] = choices[58][1];
 units[58] = "74";
 comments[58] = "Id Pregunta: 8192. Examen TIC A1 2010";


//  Id pregunta: 8290 AÃ±o de creación de pregunta: 2011-01-01
 questions[59]= "60)  Respecto al protocolo ligero de acceso a directorios (LDAPv3):";
 choices[59]= new Array();
 choices[59][0] = "No admite TCP/IP.";
 choices[59][1] = "No es un protocolo abierto.";
 choices[59][2] = "No requiere X.500.";
 choices[59][3] = "Ninguna de las anteriores es correcta.";
 answers[59] = choices[59][2];
 units[59] = "74";
 comments[59] = "Id Pregunta: 8290. Examen TIC A2 2010";


//  Id pregunta: 8306 AÃ±o de creación de pregunta: 2011-01-01
 questions[60]= "61)  EI ataque conocido como &quot;ARP Spoofing&quot;: ";
 choices[60]= new Array();
 choices[60][0] = "Se impide con el uso de conmutadores (switches) en vez de concentradores (hubs).";
 choices[60][1] = "Se efect&uacute;a en el nivel 3 de OSI ya que falsifica direcciones IPs. ";
 choices[60][2] = "Sirve para interceptar tr&aacute;fico en una red de &aacute;rea local (LAN), pero no para modificarlo. ";
 choices[60][3] = "Puede impedirse mediante DHCP snooping.";
 answers[60] = choices[60][3];
 units[60] = "111";
 comments[60] = "Id Pregunta: 8306. Examen TIC A2 2010";


//  Id pregunta: 8545 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  La especificaci&oacute;n PKCS#3 de RSA se refiere a:";
 choices[61]= new Array();
 choices[61][0] = "El est&aacute;ndar criptogr&aacute;fico RSA";
 choices[61][1] = "La sintaxis de la informaci&oacute;n de clave privada.";
 choices[61][2] = "El intercambio de claves Diffie-Hellman.";
 choices[61][3] = "La sintaxis del mensaje criptogr&aacute;fico";
 answers[61] = choices[61][2];
 units[61] = "72";
 comments[61] = "Id Pregunta: 8545. Examen TIC A2 2010 interna";


//  Id pregunta: 8895 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  &iquest;Cu&aacute;l de las siguientes no corresponde a una funci&oacute;n digest?";
 choices[62]= new Array();
 choices[62][0] = "HMAC";
 choices[62][1] = "MD5";
 choices[62][2] = "MD8";
 choices[62][3] = "SHA";
 answers[62] = choices[62][2];
 units[62] = "74";
 comments[62] = "Id Pregunta: 8895. NULL";


//  Id pregunta: 9080 AÃ±o de creación de pregunta: 2013-01-01
 questions[63]= "64)  &iquest;Cu&aacute;l es el est&aacute;ndar PKCS que fue la base para el est&aacute;ndar S/MIME?";
 choices[63]= new Array();
 choices[63][0] = "PKCS#1";
 choices[63][1] = "PKCS#6";
 choices[63][2] = "PKCS#7";
 choices[63][3] = "PKCS#8";
 answers[63] = choices[63][3];
 units[63] = "111";
 comments[63] = "Id Pregunta: 9080. NULL";


//  Id pregunta: 9081 AÃ±o de creación de pregunta: 2013-01-01
 questions[64]= "65)  Indique cu&aacute;l es el n&uacute;mero de protocolo para IPv6";
 choices[64]= new Array();
 choices[64][0] = "17";
 choices[64][1] = "41";
 choices[64][2] = "47";
 choices[64][3] = "50";
 answers[64] = choices[64][1];
 units[64] = "111";
 comments[64] = "Id Pregunta: 9081. Consultar en wikipedia List_of_IP_protocol_numbers";


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


//  Id pregunta: 9847 AÃ±o de creación de pregunta: 2014-01-01
 questions[66]= "67)  &iquest;C&oacute;mo se denomina el m&oacute;dulo criptogr&aacute;fico necesario para poder operar con el DNI electr&oacute;nico en un entorno UNIX?";
 choices[66]= new Array();
 choices[66][0] = "Cryptographic Service Provider (CSP).";
 choices[66][1] = "PKCS#11.";
 choices[66][2] = "PGP.";
 choices[66][3] = "Smart Card Mini-Driver.";
 answers[66] = choices[66][1];
 units[66] = "111";
 comments[66] = "Id Pregunta: 9847. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Extremadura 2014";


//  Id pregunta: 9857 AÃ±o de creación de pregunta: 2014-01-01
 questions[67]= "68)  Respecto a la seguridad en redes, indique qu&eacute; es un exploit.";
 choices[67]= new Array();
 choices[67][0] = "Es un malware dise&ntilde;ado para aprovechar la vulnerabilidad de un software.";
 choices[67][1] = "Persona que accede a datos no autorizados.";
 choices[67][2] = "Adware que modifica la p&aacute;gina de inicio de los navegadores de Internet sin el consentimiento del usuario.";
 choices[67][3] = "Software utilizado para la suplantaci&oacute;n de la identidad de un usuario de la red.";
 answers[67] = choices[67][0];
 units[67] = "111";
 comments[67] = "Id Pregunta: 9857. Examen TIC del Servicio de Salud de Extremadura 2014";


//  Id pregunta: 10050 AÃ±o de creación de pregunta: 2014-01-01
 questions[68]= "69)  Indique la respuesta FALSA, respecto al protocolo IPSEC :";
 choices[68]= new Array();
 choices[68][0] = "El protocolo IPSEC AH garantiza integridad y autenticaci&oacute;n, pero no confidencialidad.";
 choices[68][1] = "El protocolo IPSEC ESP utiliza el n&uacute;mero de protocolo 50 en la cabecera IP.";
 choices[68][2] = "IPSEC utiliza IKE como protocolo de intercambio de claves.";
 choices[68][3] = "IPSEC ESP es incompatible con el modo transporte, s&oacute;lo se puede utilizar en modo t&uacute;nel.";
 answers[68] = choices[68][3];
 units[68] = "111";
 comments[68] = "Id Pregunta: 10050. TIC A2, promoci&oacute;n interna y libre, examen 2013";


//  Id pregunta: 10051 AÃ±o de creación de pregunta: 2014-01-01
 questions[69]= "70)  Un archivo .PFX, de uso en certificados electr&oacute;nicos:";
 choices[69]= new Array();
 choices[69][0] = "Contiene la clave privada.";
 choices[69][1] = "Cumple la sintaxis PKCS #21.";
 choices[69][2] = "Est&aacute; codificado en un formato no binario.";
 choices[69][3] = "No se puede convertir a formato .PEM.";
 answers[69] = choices[69][0];
 units[69] = "72";
 comments[69] = "Id Pregunta: 10051. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10065 AÃ±o de creación de pregunta: 2014-01-01
 questions[70]= "71)  SAFER (Secure And Fast Encryption Routine) es un algoritmo de cifrado:";
 choices[70]= new Array();
 choices[70][0] = "Sim&eacute;trico de bloques.";
 choices[70][1] = "Sim&eacute;trico de flujo.";
 choices[70][2] = "Asim&eacute;trico de factorizaci&oacute;n entera.";
 choices[70][3] = "Asim&eacute;trico de logaritmo discreto.";
 answers[70] = choices[70][0];
 units[70] = "72";
 comments[70] = "Id Pregunta: 10065. TIC A2, libre, Examen 2013";


//  Id pregunta: 10375 AÃ±o de creación de pregunta: 2014-01-01
 questions[71]= "72)  La rotura de la m&aacute;quina de cifrado Enigma es un ejemplo de:";
 choices[71]= new Array();
 choices[71][0] = "Criptograf&iacute;a asim&eacute;trica o de clave p&uacute;blica";
 choices[71][1] = "Cifrado C&eacute;sar";
 choices[71][2] = "Criptoan&aacute;lisis";
 choices[71][3] = "Criptograf&iacute;a cu&aacute;ntica";
 answers[71] = choices[71][2];
 units[71] = "72";
 comments[71] = "Id Pregunta: 10375. ";


//  Id pregunta: 10449 AÃ±o de creación de pregunta: 2014-01-01
 questions[72]= "73)  En relaci&oacute;n a una red privada virtual (VPN, Virtual Private Network), es FALSO que ";
 choices[72]= new Array();
 choices[72][0] = "una VPN permite utilizar la red p&uacute;blica de un operador para construir una red privada dedicada, con funcionalidades de red y de seguridad equivalentes a las que se obtienen con una red privada. ";
 choices[72][1] = "en la actualidad, el concepto de VPN se extiende para incluir las soluciones que permiten el acceso remoto de un equipo a la red de una organizaci&oacute;n a trav&eacute;s de redes p&uacute;blicas, especialmente Internet, mediante la utilizaci&oacute;n de mecanismos de t&uacute;nel y cifrado. ";
 choices[72][2] = "el protocolo MPLS (Multiprotocol Label Switching) permite crear VPNs de nivel 4, utilizando como tecnolog&iacute;as de acceso T1/E1, ATM &oacute; Frame Relay. ";
 choices[72][3] = "VPLS (Virtual Private LAN Switching) es un servicio de red LAN privada virtual, que permite entregar tramas de nivel 2 directamente entre sedes remotas de un mismo organismo  ";
 answers[72] = choices[72][2];
 units[72] = "111";
 comments[72] = "Id Pregunta: 10449. Examen TIC A1 2013";


//  Id pregunta: 10472 AÃ±o de creación de pregunta: 2014-01-01
 questions[73]= "74)  Respecto a los certificados X.509 v3:";
 choices[73]= new Array();
 choices[73][0] = "Las extensiones se clasifican en cr&iacute;ticas, no criticas y recomendables.";
 choices[73][1] = "Las extensiones no cr&iacute;ticas pueden ignorarse si no se pueden procesar o se decide no hacerlo.";
 choices[73][2] = "Un certificado s&oacute;lo puede contener una extensi&oacute;n de un determinado tipo.";
 choices[73][3] = "No pueden definirse extensiones para uso privado.";
 answers[73] = choices[73][1];
 units[73] = "73";
 comments[73] = "Id Pregunta: 10472. ";


//  Id pregunta: 10611 AÃ±o de creación de pregunta: 2015-01-01
 questions[74]= "75)  En una arquitectura PKI, la Autoridad de Validaci&oacute;n:";
 choices[74]= new Array();
 choices[74][0] = "Verifica la identidad del titular antes de la expedici&oacute;n del certificado.";
 choices[74][1] = "Comprueba si un certificado ha sido revocado mediante servicios de directorio, CRL y OCSP.";
 choices[74][2] = "Expide, gestiona y revoca certificados digitales.";
 choices[74][3] = "Procesa solicitudes de revocaci&oacute;n de certificados.";
 answers[74] = choices[74][1];
 units[74] = "74";
 comments[74] = "Id Pregunta: 10611. ";


//  Id pregunta: 10612 AÃ±o de creación de pregunta: 2015-01-01
 questions[75]= "76)  El DNIe 3.0:";
 choices[75]= new Array();
 choices[75][0] = "Permite la lectura sin PIN del certificado de firma.";
 choices[75][1] = "Incorpora tecnolog&iacute;a de lectura sin contacto.";
 choices[75][2] = "Reduce la vigencia de los certificados de identificaci&oacute;n y firma a 5 a&ntilde;os.";
 choices[75][3] = "Todas las anteriores.";
 answers[75] = choices[75][1];
 units[75] = "74";
 comments[75] = "Id Pregunta: 10612. A. Permite la lectura sin PIN del certificado de identificaci&oacute;n, no de firma.C. Amplia la vigencia de los certificados (antes 30 meses).";


//  Id pregunta: 10652 AÃ±o de creación de pregunta: 2015-01-01
 questions[76]= "77)  Indique cu&aacute;l de &eacute;stos no es un m&eacute;todo EAP:";
 choices[76]= new Array();
 choices[76][0] = "PEAP";
 choices[76][1] = "EAP-PSK";
 choices[76][2] = "EAP-PAP";
 choices[76][3] = "EAP-TTLS";
 answers[76] = choices[76][2];
 units[76] = "111";
 comments[76] = "Id Pregunta: 10652. ";


//  Id pregunta: 10653 AÃ±o de creación de pregunta: 2015-01-01
 questions[77]= "78)  La cabecera de autenticaci&oacute;n (AH) de IPSec:";
 choices[77]= new Array();
 choices[77][0] = "Proporciona integridad, no repudio en origen y protecci&oacute;n contra replay.";
 choices[77][1] = "Proporciona confidencialidad, autenticidad de origen e integridad.";
 choices[77][2] = "Crea la asociaci&oacute;n de seguridad.";
 choices[77][3] = "Ninguna de las anteriores.";
 answers[77] = choices[77][0];
 units[77] = "111";
 comments[77] = "Id Pregunta: 10653. ";


//  Id pregunta: 10810 AÃ±o de creación de pregunta: 2015-01-01
 questions[78]= "79)  &iquest;Qu&eacute; tipo de ataque es un &quot;ataque smurf&quot;?";
 choices[78]= new Array();
 choices[78][0] = "Denegaci&oacute;n de servicio.";
 choices[78][1] = "Hombre intermedio.";
 choices[78][2] = "Fuerza Bruta.";
 choices[78][3] = "Ingenier&iacute;a social.";
 answers[78] = choices[78][0];
 units[78] = "111";
 comments[78] = "Id Pregunta: 10810. Examen GSI 2014";


//  Id pregunta: 10900 AÃ±o de creación de pregunta: 2015-01-01
 questions[79]= "80)  Atendiendo &uacute;nicamente a criterios de eficiencia en tiempo, &iquest;cu&aacute;l de los siguientes m&eacute;todos ser&iacute;a el m&aacute;s eficiente para securizar las comunicaciones entre usuarios dentro de una red?";
 choices[79]= new Array();
 choices[79][0] = "Mediante claves sim&eacute;tricas.";
 choices[79][1] = "Mediante claves asim&eacute;tricas.";
 choices[79][2] = "Mediante claves sim&eacute;tricas compartidas peri&oacute;dicamente con claves asim&eacute;tricas.";
 choices[79][3] = "Mediante claves asim&eacute;tricas compartidas peri&oacute;dicamente con claves sim&eacute;tricas.";
 answers[79] = choices[79][0];
 units[79] = "73, 74";
 comments[79] = "Id Pregunta: 10900. Examen GSI 2014";


//  Id pregunta: 10952 AÃ±o de creación de pregunta: 2015-01-01
 questions[80]= "81)  En la estructura de un certificado X.509 v3 NO es obligatorio:";
 choices[80]= new Array();
 choices[80][0] = "El n&uacute;mero de serie.";
 choices[80][1] = "La validez no antes de.";
 choices[80][2] = "El identificador &uacute;nico de emisor.";
 choices[80][3] = "El emisor.";
 answers[80] = choices[80][2];
 units[80] = "73";
 comments[80] = "Id Pregunta: 10952. TIC A1 AGE 2014";


//  Id pregunta: 11000 AÃ±o de creación de pregunta: 2015-01-01
 questions[81]= "82)  En el &aacute;mbito de la ciberseguridad, respecto de las APT (Advanced Persistent Threats), se&ntilde;ale la respuesta correcta:";
 choices[81]= new Array();
 choices[81][0] = "Una APT comprende distintas fases entre las que se encuentra la extracci&oacute;n de datos.";
 choices[81][1] = "Una APT no utiliza t&eacute;cnicas de ingenier&iacute;a social para lograr el acceso al sistema objetivo.";
 choices[81][2] = "Una APT es un conjunto de software malicioso con poca repercusi&oacute;n en el sistema objetivo y de f&aacute;cil detecci&oacute;n por las herramientas antivirus.";
 choices[81][3] = "Una APT consiste en ataques avanzados pr&oacute;ximos en el tiempo hacia objetivos generales e impersonales.";
 answers[81] = choices[81][0];
 units[81] = "111";
 comments[81] = "Id Pregunta: 11000. TIC A1 AGE 2014";


//  Id pregunta: 11050 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  &iquest;Cu&aacute;l es un algoritmo de criptograf&iacute;a sim&eacute;trica de flujo?";
 choices[82]= new Array();
 choices[82][0] = "DES";
 choices[82][1] = "Blowfish";
 choices[82][2] = "SNOW";
 choices[82][3] = "IDEA";
 answers[82] = choices[82][2];
 units[82] = "72";
 comments[82] = "Id Pregunta: 11050. El resto son algoritmos de bloque";


//  Id pregunta: 11054 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  &iquest;Qu&eacute; elemento de X.500 es el conjunto de toda la informaci&oacute;n disponible en el Servicio de Directorio?";
 choices[83]= new Array();
 choices[83][0] = "DIB";
 choices[83][1] = "DSA";
 choices[83][2] = "DUA";
 choices[83][3] = "DISP";
 answers[83] = choices[83][0];
 units[83] = "73";
 comments[83] = "Id Pregunta: 11054. ";


//  Id pregunta: 11086 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  Dado un mensaje, m, y su cifrado mediante OTP (one time pad), c. &iquest;se puede obtener la clave utilizada en el cifrado?";
 choices[84]= new Array();
 choices[84][0] = "No, no se puede";
 choices[84][1] = "S&iacute;, la clave es k = m XOR c";
 choices[84][2] = "S&oacute;lo pueden calcularse la mitad de los bits de la clave";
 choices[84][3] = "S&iacute;, la clave es k = m XOR m";
 answers[84] = choices[84][1];
 units[84] = "72";
 comments[84] = "Id Pregunta: 11086. ";


//  Id pregunta: 11146 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  &iquest;Cu&aacute;l de los siguientes cifrados sim&eacute;tricos es de flujo?";
 choices[85]= new Array();
 choices[85][0] = "RC-4";
 choices[85][1] = "IDEA";
 choices[85][2] = "RC-5";
 choices[85][3] = "AES";
 answers[85] = choices[85][0];
 units[85] = "72";
 comments[85] = "Id Pregunta: 11146. ";


//  Id pregunta: 11151 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  &iquest;Cu&aacute;ntos niveles de seguridad define el proyecto STORK?";
 choices[86]= new Array();
 choices[86][0] = "3";
 choices[86][1] = "4";
 choices[86][2] = "5";
 choices[86][3] = "6";
 answers[86] = choices[86][1];
 units[86] = "73";
 comments[86] = "Id Pregunta: 11151. ";


//  Id pregunta: 11253 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  Entre los requisitos de la firma electr&oacute;nica avanzada no se encuentra:";
 choices[87]= new Array();
 choices[87][0] = "Que est&eacute; vinculada al firmante de manera &uacute;nica y permita su identificaci&oacute;n.";
 choices[87][1] = "Que haya sido creada utilizando datos de creaci&oacute;n de la firma electr&oacute;nica que el firmante puede utilizar, con un alto nivel de confianza, bajo su control exclusivo.";
 choices[87][2] = "Que haya sido creada utilizando datos de creaci&oacute;n de la firma electr&oacute;nica que el firmante puede utilizar, siempre bajo su control exclusivo.";
 choices[87][3] = "Que est&eacute; vinculada con los datos firmados de modo que detecte cualquier modificaci&oacute;n ulterior.";
 answers[87] = choices[87][2];
 units[87] = "73";
 comments[87] = "Id Pregunta: 11253. ";


//  Id pregunta: 11257 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  Sobre la criptograf&iacute;a h&iacute;brida:";
 choices[88]= new Array();
 choices[88][0] = "El transmisor cifra el mensaje con una clave sim&eacute;trica o de sesi&oacute;n, y a su vez cifra esa clave sim&eacute;trica con la clave privada del destinatario.";
 choices[88][1] = "Es utilizada por Pretty Good Privacy.";
 choices[88][2] = "Tambi&eacute;n se conocen como &ldquo;sobre digital&rdquo;.";
 choices[88][3] = "B) y C) son correctas.";
 answers[88] = choices[88][3];
 units[88] = "72";
 comments[88] = "Id Pregunta: 11257. ";


//  Id pregunta: 11258 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  En relaci&oacute;n con los efectos jur&iacute;dicos de las firmas electr&oacute;nicas, indique la respuesta correcta:";
 choices[89]= new Array();
 choices[89][0] = "No se denegar&aacute;n efectos jur&iacute;dicos ni admisibilidad como prueba en procedimientos judiciales a una firma electr&oacute;nica por el mero hecho de ser una firma electr&oacute;nica o porque no cumpla los requisitos de la firma electr&oacute;nica cualificada.";
 choices[89][1] = "Una firma electr&oacute;nica cualificada tendr&aacute; un efecto jur&iacute;dico equivalente al de una firma manuscrita.";
 choices[89][2] = "Una firma electr&oacute;nica b&aacute;sica, como usuario y contrase&ntilde;a, puede ser prueba en juicio.";
 choices[89][3] = "Todas son verdaderas.";
 answers[89] = choices[89][3];
 units[89] = "73";
 comments[89] = "Id Pregunta: 11258. ";


//  Id pregunta: 11260 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  Los requisitos de seguridad aplicables a los prestadores de servicios de confianza:";
 choices[90]= new Array();
 choices[90][0] = "Son los mismos para tanto para los prestadores de servicios de confianza cualificados como no cualificados";
 choices[90][1] = "Notificar&aacute;n al Ministerio de Industria en un plazo m&aacute;ximo de 48 horas, de cualquier violaci&oacute;n de seguridad o p&eacute;rdida de integridad.";
 choices[90][2] = "En caso de que una violaci&oacute;n de la seguridad afecte a dos o m&aacute;s Estados miembros, el organismo de supervisi&oacute;n notificado informar&aacute; al respecto a los organismos de supervisi&oacute;n de los dem&aacute;s Estados miembros y a ENISA.";
 choices[90][3] = "Todas son verdaderas.";
 answers[90] = choices[90][2];
 units[90] = "73";
 comments[90] = "Id Pregunta: 11260. ";


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


//  Id pregunta: 11302 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Se&ntilde;ale la norma que no est&aacute; asociada correctamente a su contenido";
 choices[93]= new Array();
 choices[93][0] = "ISO 15408 - Common criteria";
 choices[93][1] = "RFC 2527 - DPC (Declaraci&oacute;n de Pr&aacute;cticas de Certificaci&oacute;n)";
 choices[93][2] = "CWA 14890 - Protocolo de autenticaci&oacute;n mutua, usado para el certificado de componente del DNI";
 choices[93][3] = "RFC 5246 - IPSEC";
 answers[93] = choices[93][3];
 units[93] = "33,74,111";
 comments[93] = "Id Pregunta: 11302. El RFC 5246 describe TLS. IPSEC es descrito en RFC 4305";


//  Id pregunta: 11513 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Indique cu&aacute;l de los siguientes algoritmos criptogr&aacute;ficos NO ha sido autorizado para uso en el Esquema Nacional de Seguridad seg&uacute;n la gu&iacute;a CCN-STIC 807.";
 choices[94]= new Array();
 choices[94][0] = "MD5";
 choices[94][1] = "TDEA";
 choices[94][2] = "AES";
 choices[94][3] = "RSA";
 answers[94] = choices[94][0];
 units[94] = "72";
 comments[94] = "Id Pregunta: 11513. NULL";


//  Id pregunta: 11516 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  La RFC del IETF que hace referencia al modelo de directorio LDAP es:";
 choices[95]= new Array();
 choices[95][0] = "RFC 3161";
 choices[95][1] = "RFC 4510";
 choices[95][2] = "RFC 4120";
 choices[95][3] = "RFC 6101";
 answers[95] = choices[95][1];
 units[95] = "73";
 comments[95] = "Id Pregunta: 11516. NULL";


//  Id pregunta: 11628 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Las tarjetas de proximidad se encuentran recogidas en el est&aacute;ndar:";
 choices[96]= new Array();
 choices[96][0] = "ISO 10536";
 choices[96][1] = "ISO 14443";
 choices[96][2] = "ISO 15693";
 choices[96][3] = "ISO 16949";
 answers[96] = choices[96][1];
 units[96] = "74";
 comments[96] = "Id Pregunta: 11628. ";


//  Id pregunta: 11706 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;cu&aacute;l es una caracter&iacute;stica de los ataques DoS?";
 choices[97]= new Array();
 choices[97][0] = "Siempre preceden a ataques de acceso";
 choices[97][1] = "Intentan comprometer la disponibilidad de un equipo, red, o aplicaci&oacute;n";
 choices[97][2] = "Un ejemplo de ellos es el escaneo de puertos";
 choices[97][3] = "Un ejemplo de ellos es el &quot;barrido de ping&quot;";
 answers[97] = choices[97][1];
 units[97] = "111";
 comments[97] = "Id Pregunta: 11706. NULL";


//  Id pregunta: 11728 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Cu&aacute;l es uno de los beneficios de la utilizaci&oacute;n de las VPN para el acceso remoto?";
 choices[98]= new Array();
 choices[98][0] = "Menor sobrecarga de protocolo";
 choices[98][1] = "Potencial reducci&oacute;n de los costos de conectividad";
 choices[98][2] = "Aumento de la calidad de servicio";
 choices[98][3] = "Facilidad de soluci&oacute;n de problemas";
 answers[98] = choices[98][1];
 units[98] = "111";
 comments[98] = "Id Pregunta: 11728. NULL";


//  Id pregunta: 11730 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Qu&eacute;  protocolo, en el &aacute;mbito de Ipsec, proporciona confidencialidad de los datos y la autenticaci&oacute;n de paquetes IP?";
 choices[99]= new Array();
 choices[99][0] = "AH";
 choices[99][1] = "RSA";
 choices[99][2] = "IKE";
 choices[99][3] = "ESP";
 answers[99] = choices[99][3];
 units[99] = "111";
 comments[99] = "Id Pregunta: 11730. NULL";


