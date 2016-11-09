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

//  Id pregunta: 708 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  Cu&aacute;l de las siguientes tecnolog&iacute;as no est&aacute; relacionada con la identificaci&oacute;n y autentificaci&oacute;n:";
 choices[0]= new Array();
 choices[0][0] = "Certificados";
 choices[0][1] = "Single Sign On";
 choices[0][2] = "Kerberos";
 choices[0][3] = "NetBios";
 answers[0] = choices[0][3];
 units[0] = "73";
 comments[0] = "Id Pregunta: 708. Similar a examen TIC SS A 2004";


//  Id pregunta: 746 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  La ciencia que trata de descifrar mensajes cifrados sin conocer los c&oacute;digos se denomina:";
 choices[1]= new Array();
 choices[1][0] = "Criptoan&aacute;lisis o an&aacute;lisis criptogr&aacute;fico";
 choices[1][1] = "Ingenier&iacute;a social";
 choices[1][2] = "Fuerza Bruta";
 choices[1][3] = "Criptograf&iacute;a";
 answers[1] = choices[1][0];
 units[1] = "72";
 comments[1] = "Id Pregunta: 746. Similar a examen TIC SS A 2003";


//  Id pregunta: 765 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  con respecto a la seguridad";
 choices[2]= new Array();
 choices[2][0] = "PGP basa su modelo en la existencia de una entidad de certificacion ";
 choices[2][1] = "si la entidad de certificaci&oacute;n es de reconocido prestigio, no se necesita entidad de registro en PKI";
 choices[2][2] = "El certificado digital contiene s&oacute;lo la clave p&uacute;blica, no los datos del sujeto";
 choices[2][3] = "Ninguna de las anteriores";
 answers[2] = choices[2][3];
 units[2] = "73";
 comments[2] = "Id Pregunta: 765. ";


//  Id pregunta: 866 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;Cu&aacute;l de los siguientes es un protocolo de directorio?:";
 choices[3]= new Array();
 choices[3][0] = "MIME";
 choices[3][1] = "LDAP";
 choices[3][2] = "SMNP";
 choices[3][3] = "BGP";
 answers[3] = choices[3][1];
 units[3] = "73";
 comments[3] = "Id Pregunta: 866. ";


//  Id pregunta: 913 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;Qu&eacute; define la norma X.500?:";
 choices[4]= new Array();
 choices[4][0] = "Servicio de directorio";
 choices[4][1] = "Sistema de tratamiento de mensajes";
 choices[4][2] = "Servicio de transferencia de ficheros";
 choices[4][3] = "Sistema de gesti&oacute;n de red";
 answers[4] = choices[4][0];
 units[4] = "73";
 comments[4] = "Id Pregunta: 913. ";


//  Id pregunta: 915 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;Qu&eacute; elemento no forma parte del Servicio X.500 de OSI?:";
 choices[5]= new Array();
 choices[5][0] = "Agente de usuario del directorio (DUA)";
 choices[5][1] = "Agentes del sistema de directorio (DSA)";
 choices[5][2] = "&Aacute;rbol de informaci&oacute;n del directorio (DIT)";
 choices[5][3] = "Sistema de almacenamiento del directorio (DMS)";
 answers[5] = choices[5][3];
 units[5] = "73";
 comments[5] = "Id Pregunta: 915. ";


//  Id pregunta: 974 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Dada una tarjeta con microprocesador utilizada en un sistema de control de acceso, &iquest;cu&aacute;l de las siguientes afirmaciones es falsa?:";
 choices[6]= new Array();
 choices[6][0] = "Dispone de un sistema operativo con un juego de instrucciones grabado en memoria ROM";
 choices[6][1] = "Permite realizar algoritmos complejos de cifrado con clave asim&eacute;trica";
 choices[6][2] = "La lectura de su informaci&oacute;n se realiza mediante un diodo de l&aacute;ser";
 choices[6][3] = "Incorpora un microprocesador con memoria";
 answers[6] = choices[6][2];
 units[6] = "74";
 comments[6] = "Id Pregunta: 974. NULL";


//  Id pregunta: 985 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  Dentro de los criptosistemas el Data Encryption Standard es el m&aacute;s conocido por su f&aacute;cil implementaci&oacute;n. Indicar cu&aacute;l de las siguientes afirmaciones no le es aplicable:";
 choices[7]= new Array();
 choices[7][0] = "La clave es &uacute;nica y debe ser conocida por receptor y emisor";
 choices[7][1] = "La longitud de la clave es de 56 bits";
 choices[7][2] = "El ciclo de permutaci&oacute;n y sustituci&oacute;n se repite 16 veces";
 choices[7][3] = "Este m&eacute;todo de cifrado se conoce como de clave p&uacute;blica";
 answers[7] = choices[7][3];
 units[7] = "72";
 comments[7] = "Id Pregunta: 985. ";


//  Id pregunta: 989 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Dentro de los sistemas de criptograf&iacute;a de res&uacute;men podemos encontrar los algoritmos:";
 choices[8]= new Array();
 choices[8][0] = "DES";
 choices[8][1] = "SEAL";
 choices[8][2] = "RC-4";
 choices[8][3] = "MD-5";
 answers[8] = choices[8][3];
 units[8] = "72";
 comments[8] = "Id Pregunta: 989. ";


//  Id pregunta: 999 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  El algoritmo RSA se emplea para:";
 choices[9]= new Array();
 choices[9][0] = "Cifrar datos con una clave secreta";
 choices[9][1] = "Cifrar datos con una criptograf&iacute;a de clave p&uacute;blica";
 choices[9][2] = "Obtener un resumen (huella digital) de un documento";
 choices[9][3] = "Ninguna de las anteriores";
 answers[9] = choices[9][1];
 units[9] = "72";
 comments[9] = "Id Pregunta: 999. ";


//  Id pregunta: 1047 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  El protocolo de acceso al directorio en X.500 es:";
 choices[10]= new Array();
 choices[10][0] = "TCP/IP";
 choices[10][1] = "LDAP";
 choices[10][2] = "IMAP";
 choices[10][3] = "DAP";
 answers[10] = choices[10][3];
 units[10] = "73";
 comments[10] = "Id Pregunta: 1047. ";


//  Id pregunta: 1052 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  El servicio de seguridad que garantiza que la informaci&oacute;n no ha sido mutilada o alterada de manera no autorizada se denomina:";
 choices[11]= new Array();
 choices[11][0] = "Autentificaci&oacute;n";
 choices[11][1] = "Confidencialidad";
 choices[11][2] = "Integridad";
 choices[11][3] = "No repudio";
 answers[11] = choices[11][2];
 units[11] = "72";
 comments[11] = "Id Pregunta: 1052. ";


//  Id pregunta: 1061 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  El test de rachas utilizado en criptograf&iacute;a se basa en:";
 choices[12]= new Array();
 choices[12][0] = "El an&aacute;lisis de la independencia de los elementos de un criptograma";
 choices[12][1] = "La b&uacute;squeda de las posibles dependencias o recursiones de un criptograma";
 choices[12][2] = "La b&uacute;squeda de independencia entre s&iacute;mbolos de un criptograma";
 choices[12][3] = "El an&aacute;lisis de la dependencia entre s&iacute;mbolos de un criptograma";
 answers[12] = choices[12][0];
 units[12] = "72";
 comments[12] = "Id Pregunta: 1061. ";


//  Id pregunta: 1091 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  En el proceso de cifrado basado en el m&eacute;todo DES de criptosistema sim&eacute;trico, en el cu&aacute;l existen n nodos de intercambio de mensajes, &iquest;cu&aacute;ntas claves debe gestionar cada uno de los nodos para comunicarse con el resto?:";
 choices[13]= new Array();
 choices[13][0] = "n";
 choices[13][1] = "n + 1";
 choices[13][2] = "n!";
 choices[13][3] = "Ninguna de las anteriores contestaciones es cierta";
 answers[13] = choices[13][3];
 units[13] = "72";
 comments[13] = "Id Pregunta: 1091. ";


//  Id pregunta: 1223 AÃ±o de creación de pregunta: 2005-01-01
 questions[14]= "15)  Los DN, en LDAP, se representan en:";
 choices[14]= new Array();
 choices[14][0] = "XML";
 choices[14][1] = "HTML";
 choices[14][2] = "Texto plano";
 choices[14][3] = "ASN.1";
 answers[14] = choices[14][2];
 units[14] = "74";
 comments[14] = "Id Pregunta: 1223. RFC 4514";


//  Id pregunta: 1239 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  La propiedad de una funci&oacute;n res&uacute;men por la que dado un mensaje (x), es computacionalmente imposible encontrar otro mensaje (x&rsquo;) cuya funci&oacute;n resumen sea igual a la funci&oacute;n res&uacute;men del primer mensaje (x), corresponde a:";
 choices[15]= new Array();
 choices[15][0] = "Resistencia a la preimagen";
 choices[15][1] = "Resistencia a la segunda preimagen";
 choices[15][2] = "Resistencia a colisi&oacute;n";
 choices[15][3] = "Resistencia a la igualdad";
 answers[15] = choices[15][1];
 units[15] = "72";
 comments[15] = "Id Pregunta: 1239. ";


//  Id pregunta: 1272 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  Los criptosistemas irreversibles:";
 choices[16]= new Array();
 choices[16][0] = "No existen actualmente dada la potencia de los sistemas actuales y la potencia de la computaci&oacute;n distribuida";
 choices[16][1] = "Se utilizan sobre todo para la autenticaci&oacute;n de entidades";
 choices[16][2] = "Se basan en funciones matem&aacute;ticas no invertibles computacionalmente, o carentes de inversa";
 choices[16][3] = "B y C son ciertas";
 answers[16] = choices[16][3];
 units[16] = "72";
 comments[16] = "Id Pregunta: 1272. ";


//  Id pregunta: 1287 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Marcar la correcta respecto de los algoritmos criptogr&aacute;ficos:";
 choices[17]= new Array();
 choices[17][0] = "El algoritmo de cifra de Merkle-Hellman es de clave dispersa";
 choices[17][1] = "El algoritmo de cifra de Merkle-Hellman es de clave &uacute;nica";
 choices[17][2] = "El algoritmo DES es de clave p&uacute;blica";
 choices[17][3] = "El algoritmo DES es de clave sim&eacute;trica";
 answers[17] = choices[17][3];
 units[17] = "72";
 comments[17] = "Id Pregunta: 1287. ";


//  Id pregunta: 1323 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  RSA es: ";
 choices[18]= new Array();
 choices[18][0] = "Un algoritmo criptogr&aacute;fico";
 choices[18][1] = "Un mecanismo de intercambio de claves";
 choices[18][2] = "Una infraestructura de clave p&uacute;blica (PKI))";
 choices[18][3] = "Una funcion resumen";
 answers[18] = choices[18][0];
 units[18] = "72";
 comments[18] = "Id Pregunta: 1323. ";


//  Id pregunta: 1357 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  SHA-1 es un algoritmo empleado por la criptograf&iacute;a sim&eacute;trica de:";
 choices[19]= new Array();
 choices[19][0] = "Res&uacute;men";
 choices[19][1] = "Bloques";
 choices[19][2] = "Flujos";
 choices[19][3] = "Las respuestas &lsquo;b&rsquo; y &lsquo;c&rsquo; son correctas";
 answers[19] = choices[19][0];
 units[19] = "72";
 comments[19] = "Id Pregunta: 1357. ";


//  Id pregunta: 1538 AÃ±o de creación de pregunta: 2003-01-01
 questions[20]= "21)  &iquest; Cu&aacute;l no es una aplicaci&oacute;n de LDAP ?";
 choices[20]= new Array();
 choices[20][0] = "Gesti&oacute;n de configuraci&oacute;n";
 choices[20][1] = "Seguridad";
 choices[20][2] = "Correo Electr&oacute;nico";
 choices[20][3] = "Transmisi&oacute;n de ficheros";
 answers[20] = choices[20][3];
 units[20] = "74";
 comments[20] = "Id Pregunta: 1538. NULL";


//  Id pregunta: 1604 AÃ±o de creación de pregunta: 2003-01-01
 questions[21]= "22)  Entre los algoritmos que puede utilizar SSL se encuentran:";
 choices[21]= new Array();
 choices[21][0] = "TripleDES, RC4 y SHA-1";
 choices[21][1] = "DES, RC2 y MD5";
 choices[21][2] = "Adem&aacute;s de los anteriores puede usar SKIPJACK y RSA";
 choices[21][3] = "Puede usar todos los anteriores e incluso no usar algoritmo de encriptaci&oacute;n, pero s&iacute; de autenticaci&oacute;n con SHA-1 o MD5 ";
 answers[21] = choices[21][3];
 units[21] = "72";
 comments[21] = "Id Pregunta: 1604. ";


//  Id pregunta: 1853 AÃ±o de creación de pregunta: 2006-01-01
 questions[22]= "23)  Se&ntilde;ale la correcta:";
 choices[22]= new Array();
 choices[22][0] = "TDES es un algoritmo de cifrado asim&eacute;trico que consiste en aplicar tres veces DES";
 choices[22][1] = "AES es un algoritmo muy vers&aacute;til porque puede usarse com algoritmo de bloque, como algoritmo de flujo,como funci&oacute;n resumen y como generador de n&uacute;meros pseudo-aleatorios. ";
 choices[22][2] = "Las caracter&iacute;sticas de las funciones hash son: resistencia a la preimagen, resistencia a la postimagen y resistencia a la colisi&oacute;n";
 choices[22][3] = "Todas las anteriores";
 answers[22] = choices[22][1];
 units[22] = "72";
 comments[22] = "Id Pregunta: 1853. ";


//  Id pregunta: 1855 AÃ±o de creación de pregunta: 2006-01-01
 questions[23]= "24)  Se&ntilde;ale la falsa:";
 choices[23]= new Array();
 choices[23][0] = "CRL son las siglas en ingl&eacute;s de la lista de certificados revocados";
 choices[23][1] = "OCSP son las siglas en ingl&eacute;s del protocolo de estado de certificados en l&iacute;nea";
 choices[23][2] = "PKCS#7 corresponde al est&aacute;ndar del formato del sobre digital";
 choices[23][3] = "PKCS#11 corresponde al algoritmo RSA";
 answers[23] = choices[23][3];
 units[23] = "72";
 comments[23] = "Id Pregunta: 1855. ";


//  Id pregunta: 1857 AÃ±o de creación de pregunta: 2006-01-01
 questions[24]= "25)  En relaci&oacute;n a los certificados X.509:";
 choices[24]= new Array();
 choices[24][0] = "Se codifican mediante la notaci&oacute;n ASN.1";
 choices[24][1] = "Permite el uso en sus campos de nombres X.500 y DNS";
 choices[24][2] = "Se han definido extensiones que permiten incluir informaci&oacute;n espec&iacute;fica";
 choices[24][3] = "Todas las anteriores son ciertas";
 answers[24] = choices[24][3];
 units[24] = "73";
 comments[24] = "Id Pregunta: 1857. ";


//  Id pregunta: 1858 AÃ±o de creación de pregunta: 2006-01-01
 questions[25]= "26)  &iquest;Qu&eacute; elemento no forma parte de la norma X.500 de OSI?";
 choices[25]= new Array();
 choices[25][0] = "Agente de usuario del directorio (DUA)";
 choices[25][1] = "&Aacute;rbol de informaci&oacute;n del directorio (DIT)";
 choices[25][2] = "Dominio de nombres de directorio (DND)";
 choices[25][3] = "Base de informaci&oacute;n del directorio (DIB)";
 answers[25] = choices[25][2];
 units[25] = "73";
 comments[25] = "Id Pregunta: 1858. ";


//  Id pregunta: 1859 AÃ±o de creación de pregunta: 2006-01-01
 questions[26]= "27)  En relaci&oacute;n al protocolo OCSP (Online Certificate Status Protocol): ";
 choices[26]= new Array();
 choices[26][0] = "Se utiliza para conocer el estado de revocaci&oacute;n de un certificado X.509";
 choices[26][1] = "Los mensajes enviados v&iacute;a OCSP se codifican en ASN.1";
 choices[26][2] = "Se define en el RFC 2560";
 choices[26][3] = "Todas las anteriores respuestas son ciertas";
 answers[26] = choices[26][3];
 units[26] = "74";
 comments[26] = "Id Pregunta: 1859. NULL";


//  Id pregunta: 1860 AÃ±o de creación de pregunta: 2006-01-01
 questions[27]= "28)  Se&ntilde;ale la falsa:";
 choices[27]= new Array();
 choices[27][0] = "XML Signature asegura la integridad de partes de documentos XML transportados";
 choices[27][1] = "XML Signature puede aplicarse a cualquier contenido digital (objeto de datos), incluyendo XML";
 choices[27][2] = "XML Key Management es un protocolo para distribuir y registrar claves p&uacute;blicas. Lo que hace es ocultar la parte compleja que surge con PKI. Est&aacute; compuesto de: el registro de la clave p&uacute;blica (X-KRSS) y la informaci&oacute;n de clave p&uacute;blica (X-KISS).";
 choices[27][3] = "Todas las anteriores son falsas";
 answers[27] = choices[27][3];
 units[27] = "74";
 comments[27] = "Id Pregunta: 1860. NULL";


//  Id pregunta: 1861 AÃ±o de creación de pregunta: 2006-01-01
 questions[28]= "29)  Se&ntilde;ale la correcta:";
 choices[28]= new Array();
 choices[28][0] = "El protocolo X500 es un est&aacute;ndar de la IETF";
 choices[28][1] = "El  est&aacute;ndar de certificados digitales X509v3 introdujo el concepto de extensi&oacute;n";
 choices[28][2] = "El protocolo de la ITU LDAP dispone su informaci&oacute;n relacionada jer&aacute;rquicamente.";
 choices[28][3] = "Ninguna de las anteriores";
 answers[28] = choices[28][1];
 units[28] = "73";
 comments[28] = "Id Pregunta: 1861. ";


//  Id pregunta: 1862 AÃ±o de creación de pregunta: 2009-01-01
 questions[29]= "30)  Relativo a la firma digital, indique la opci&oacute;n incorrecta:";
 choices[29]= new Array();
 choices[29][0] = "XMLDSig es una sintaxis XML para la generaci&oacute;n de firma digital";
 choices[29][1] = "XMLDSig s&oacute;lo se utiliza para firmar documentos XML";
 choices[29][2] = "XML Advanced Electronic Signatures (XAdES) cumple la directiva europea sobre firma electr&oacute;nica 1999/93/CE";
 choices[29][3] = "Las respuestas 'a' y 'c' son verdaderas";
 answers[29] = choices[29][1];
 units[29] = "74";
 comments[29] = "Id Pregunta: 1862. NULL";


//  Id pregunta: 1864 AÃ±o de creación de pregunta: 2006-01-01
 questions[30]= "31)  &iquest;En qu&eacute; nivel de la pila OSI se sit&uacute;a el protocolo LDAP?";
 choices[30]= new Array();
 choices[30][0] = "Aplicaci&oacute;n";
 choices[30][1] = "Transporte";
 choices[30][2] = "Red";
 choices[30][3] = "Sesi&oacute;n";
 answers[30] = choices[30][0];
 units[30] = "74";
 comments[30] = "Id Pregunta: 1864. NULL";


//  Id pregunta: 1916 AÃ±o de creación de pregunta: 2006-01-01
 questions[31]= "32)  Seg&uacute;n la recomendaci&oacute;n X.509 v.3";
 choices[31]= new Array();
 choices[31][0] = "Un usuario puede tener a lo sumo un certificado de atributos por cada certificado de clave p&uacute;blica";
 choices[31][1] = "Los certificados de atributos deben ser generados por Autoridades de Certificaci&oacute;n";
 choices[31][2] = "Para su validez, los certificados de atributos deben estar siempre acompa&ntilde;ados de un certificado de clave p&uacute;blica";
 choices[31][3] = "Los certificados de atributos contienen id&eacute;nticos campos que subcampos tiene el campo de extensiones de los certificados de clave p&uacute;blica";
 answers[31] = choices[31][2];
 units[31] = "73";
 comments[31] = "Id Pregunta: 1916. ";


//  Id pregunta: 1919 AÃ±o de creación de pregunta: 2006-01-01
 questions[32]= "33)  Seg&uacute;n la recomendaci&oacute;n X.509 v.3:";
 choices[32]= new Array();
 choices[32][0] = "La autenticaci&oacute;n simple conlleva el uso exclusivo de contrase&ntilde;as transmitidas en claro";
 choices[32][1] = "La autenticaci&oacute;n robusta (strong) de un sentido conlleva siempre el empleo de funciones resumen (hash)";
 choices[32][2] = "La autenticaci&oacute;n robusta (strong) de dos sentidos comporta siempre el uso de credenciales obtenidas mediante t&eacute;cnicas criptogr&aacute;ficas";
 choices[32][3] = "La autenticaci&oacute;n robusta (strong) de tres sentidos debe incorporar siempre sellos de tiempo";
 answers[32] = choices[32][2];
 units[32] = "73";
 comments[32] = "Id Pregunta: 1919. ";


//  Id pregunta: 4272 AÃ±o de creación de pregunta: 2007-01-01
 questions[33]= "34)  Los comandos y distribuci&oacute;n de memoria de una tarjeta criptogr&aacute;fica se especifican en el est&aacute;ndar";
 choices[33]= new Array();
 choices[33][0] = "ISO 7816-2";
 choices[33][1] = "ISO 7816-3";
 choices[33][2] = "ISO 7816-4";
 choices[33][3] = "ISO 7816-5";
 answers[33] = choices[33][2];
 units[33] = "74";
 comments[33] = "Id Pregunta: 4272. NULL";


//  Id pregunta: 4346 AÃ±o de creación de pregunta: 2007-01-01
 questions[34]= "35)  Cu&aacute;l es la longitud de la clave utilizada por el sistema criptogr&aacute;fico sim&eacute;trico DES?";
 choices[34]= new Array();
 choices[34][0] = "56 Bits";
 choices[34][1] = "168 Bits";
 choices[34][2] = "256 Bits.";
 choices[34][3] = "Puede ser cualquiera, pero la habitual es 1.024 Bits.";
 answers[34] = choices[34][0];
 units[34] = "73";
 comments[34] = "Id Pregunta: 4346. ";


//  Id pregunta: 4347 AÃ±o de creación de pregunta: 2007-01-01
 questions[35]= "36)  De entre los siguientes, indique cu&aacute;l no es un sistema criptogr&aacute;fico de clave sim&eacute;trica:";
 choices[35]= new Array();
 choices[35][0] = "DES";
 choices[35][1] = "Triple DES.";
 choices[35][2] = "RSA";
 choices[35][3] = "IDEA";
 answers[35] = choices[35][2];
 units[35] = "73";
 comments[35] = "Id Pregunta: 4347. ";


//  Id pregunta: 4427 AÃ±o de creación de pregunta: 2007-01-01
 questions[36]= "37)  La firma digital de un mensaje o documento, garantiza:";
 choices[36]= new Array();
 choices[36][0] = "La autenticaci&oacute;n del emisor e integridad del mensaje.";
 choices[36][1] = "La autenticaci&oacute;n del emisor y confidencialidad del env&iacute;o.";
 choices[36][2] = "Autenticaci&oacute;n, confidencialidad e integridad.";
 choices[36][3] = "Confidencialidad del env&iacute;o e integridad del mensaje.";
 answers[36] = choices[36][0];
 units[36] = "74";
 comments[36] = "Id Pregunta: 4427. NULL";


//  Id pregunta: 4465 AÃ±o de creación de pregunta: 2007-01-01
 questions[37]= "38)  El algoritmo MD5:";
 choices[37]= new Array();
 choices[37][0] = "Es un algoritmo de cifrado asim&eacute;trico.";
 choices[37][1] = "Es un algoritmo de cifrado sim&eacute;trico.";
 choices[37][2] = "Es un algoritmo de funci&oacute;n hash.";
 choices[37][3] = "Es un algoritmo de almacenamiento de la clave privada";
 answers[37] = choices[37][2];
 units[37] = "72";
 comments[37] = "Id Pregunta: 4465. ";


//  Id pregunta: 4484 AÃ±o de creación de pregunta: 2007-01-01
 questions[38]= "39)  El protocolo SSL (Secure Sockets Layer):";
 choices[38]= new Array();
 choices[38][0] = "Es una capa de seguridad que opera siempre sobre el protocolo UDP.";
 choices[38][1] = "No garantiza la integridad de Ia informaci&oacute;n intercambiada entre el cliente y el servidor.";
 choices[38][2] = "Proporciona conexiones seguras solo en redes privadas y siempre que el cliente y el servidor pertenezcan a la misma subred IP.";
 choices[38][3] = "Proporciona conexiones seguras sobre una red insegura garantizando, entre otros aspectos, integridad de datos transmitidos, privacidad de Ia conexi&oacute;n y autentificaci&oacute;n del cliente y del servidor.";
 answers[38] = choices[38][3];
 units[38] = "72";
 comments[38] = "Id Pregunta: 4484. ";


//  Id pregunta: 4521 AÃ±o de creación de pregunta: 2007-01-01
 questions[39]= "40)  En una infraestructura PKI, Ia revocaci&oacute;n de un certificado requiere la presencia del usuario en:";
 choices[39]= new Array();
 choices[39][0] = "El proveedor de servicios de certificaci&oacute;n.";
 choices[39][1] = "En la F&aacute;brica Nacional de Moneda y Timbre.";
 choices[39][2] = "No hace falta, se puede hacer desde Internet.";
 choices[39][3] = "En una oficina de registro.";
 answers[39] = choices[39][3];
 units[39] = "74";
 comments[39] = "Id Pregunta: 4521. NULL";


//  Id pregunta: 4707 AÃ±o de creación de pregunta: 2007-01-01
 questions[40]= "41)  T&eacute;cnica de cifrado utilizada por los clientes de correo-electr&oacute;nico";
 choices[40]= new Array();
 choices[40][0] = "MD5";
 choices[40][1] = "IDEA";
 choices[40][2] = "Curva El&iacute;ptica";
 choices[40][3] = "S/MIME";
 answers[40] = choices[40][2];
 units[40] = "72";
 comments[40] = "Id Pregunta: 4707. Examen 2006 JCYL";


//  Id pregunta: 4987 AÃ±o de creación de pregunta: 2003-01-01
 questions[41]= "42)  De acuerdo con el modelo de arquitectura de seguridad de OSI, definido en la norma ISO/IEC 7498-2, indique cu&aacute;lde las siguientes afirmaciones es correcta:";
 choices[41]= new Array();
 choices[41][0] = "Un mecanismo de seguridad puede ser suministrado por varios servicios de seguridad";
 choices[41][1] = "Cada servicio de seguridad debe ser suministrado por el mecanismo correspondiente";
 choices[41][2] = "Todos los mecanismos de seguridad que se definen en el modelo se basan en algoritmos criptogr&aacute;ficos";
 choices[41][3] = "Un mismo servicio de seguridad puede ser suministrado por varios mecanismos de seguridad";
 answers[41] = choices[41][3];
 units[41] = "74";
 comments[41] = "Id Pregunta: 4987. Examen TIC A 2007";


//  Id pregunta: 5039 AÃ±o de creación de pregunta: 2003-01-01
 questions[42]= "43)  Seg&uacute;n el est&aacute;ndar ISO 7816-2 sobre contactos del chip en las tarjetas inteligentes, &iquest;cu&aacute;l de los siguientescontactos se utiliza para la se&ntilde;al de reloj?:";
 choices[42]= new Array();
 choices[42][0] = "C2";
 choices[42][1] = "C3";
 choices[42][2] = "C5";
 choices[42][3] = "C6";
 answers[42] = choices[42][1];
 units[42] = "74";
 comments[42] = "Id Pregunta: 5039. Examen TIC A 2007";


//  Id pregunta: 5087 AÃ±o de creación de pregunta: 2003-01-01
 questions[43]= "44)  El est&aacute;ndar conocido como ISO/IEC 9594-1:2008 se corresponde con:";
 choices[43]= new Array();
 choices[43][0] = "LDAP";
 choices[43][1] = "UIT-T X-500";
 choices[43][2] = "HTML";
 choices[43][3] = "SQL";
 answers[43] = choices[43][1];
 units[43] = "73";
 comments[43] = "Id Pregunta: 5087. ";


//  Id pregunta: 5091 AÃ±o de creación de pregunta: 2003-01-01
 questions[44]= "45)  La informaci&oacute;n en el chip del DNI est&aacute; distribuida en tres zonas, con diferentes niveles y condiciones de acceso. &iquest;Cu&aacute;l no es una de ellas?";
 choices[44]= new Array();
 choices[44][0] = "Zona privada";
 choices[44][1] = "Zona de control";
 choices[44][2] = "Zona de seguridad";
 choices[44][3] = "Zona p&uacute;blica";
 answers[44] = choices[44][1];
 units[44] = "74";
 comments[44] = "Id Pregunta: 5091. NULL";


//  Id pregunta: 5093 AÃ±o de creación de pregunta: 2003-01-01
 questions[45]= "46)  Los algoritmos de autenticaci&oacute;n y firma utilizados en el DNI se basan en:";
 choices[45]= new Array();
 choices[45][0] = "Cuatro pares de claves RSA";
 choices[45][1] = "Dos pares de claves DES";
 choices[45][2] = "Dos pares de claves DSA";
 choices[45][3] = "Dos pares de claves RSA";
 answers[45] = choices[45][3];
 units[45] = "74";
 comments[45] = "Id Pregunta: 5093. NULL";


//  Id pregunta: 5687 AÃ±o de creación de pregunta: 2003-01-01
 questions[46]= "47)  Se&ntilde;ale cual de los siguientes datos se encuentra en la zona p&uacute;blica del chip criptogr&aacute;fico del DNI electr&oacute;nico:";
 choices[46]= new Array();
 choices[46][0] = "Certificado de autenticaci&oacute;n";
 choices[46][1] = "Certificados de la autoridad de certificaci&oacute;n";
 choices[46][2] = "Datos biom&eacute;tricos";
 choices[46][3] = "Claves privadas del ciudadano";
 answers[46] = choices[46][1];
 units[46] = "74";
 comments[46] = "Id Pregunta: 5687. NULL";


//  Id pregunta: 5694 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  Se&ntilde;ale cual de los siguientes datos no se almacena en la zona privada del chip criptogr&aacute;fico del DNI electr&oacute;nico:";
 choices[47]= new Array();
 choices[47][0] = "Claves privadas del ciudadano";
 choices[47][1] = "Certificado de autenticaci&oacute;n";
 choices[47][2] = "Claves p&uacute;blicas del ciudadano";
 choices[47][3] = "Certificado de firma";
 answers[47] = choices[47][2];
 units[47] = "74";
 comments[47] = "Id Pregunta: 5694. NULL";


//  Id pregunta: 5697 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  &iquest;C&oacute;mo se conecta el DNI electr&oacute;nico al ordenador personal del ciudadano?";
 choices[48]= new Array();
 choices[48][0] = "Es necesario un lector de tarjetas espec&iacute;fico dise&ntilde;ado por la Direcci&oacute;n General de la Polic&iacute;a, que se puede obtener en las comisar&iacute;as";
 choices[48][1] = " A trav&eacute;s de un lector de tarjetas que cumpla el standard ISO-7816";
 choices[48][2] = "Con un lector de tarjetas espec&iacute;fico dise&ntilde;ado por la Direcci&oacute;n General de la Polic&iacute;a, que se puede obtener en establecimientos comerciales";
 choices[48][3] = "No es posible conectarlo a ordenadores personales, s&oacute;lo los especialmente habilitados para ello por la Direcci&oacute;n General de la Polic&iacute;a";
 answers[48] = choices[48][1];
 units[48] = "74";
 comments[48] = "Id Pregunta: 5697. NULL";


//  Id pregunta: 5699 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  Se&ntilde;ale cual de las siguientes medidas de seguridad del DNI electr&oacute;nico es falsa:";
 choices[49]= new Array();
 choices[49][0] = "Tintas visibles con luz ultravioleta para evitar su falsificaci&oacute;n";
 choices[49][1] = " Chip RFID";
 choices[49][2] = "Encriptaci&oacute;n de los datos del chip";
 choices[49][3] = "Acceso a la funcionalidad del DNI electr&oacute;nico mediante clave personal de acceso (PIN)";
 answers[49] = choices[49][1];
 units[49] = "74";
 comments[49] = "Id Pregunta: 5699. NULL";


//  Id pregunta: 5737 AÃ±o de creación de pregunta: 2009-01-01
 questions[50]= "51)  &iquest;Qu&eacute; caracter&iacute;sticas debe reunir, entre otras, la firma electr&oacute;nica avanzada?";
 choices[50]= new Array();
 choices[50][0] = "Usar un certificado X.509";
 choices[50][1] = "Usar medios de criptograf&iacute;a asim&eacute;trica";
 choices[50][2] = "Que el firmante tenga bajo su exclusivo control los medios de creaci&oacute;n de firma";
 choices[50][3] = "Que el canal de comunicaci&oacute;n por el que se transfiere la firma sea seguro";
 answers[50] = choices[50][2];
 units[50] = "72";
 comments[50] = "Id Pregunta: 5737. ";


//  Id pregunta: 5745 AÃ±o de creación de pregunta: 2009-01-01
 questions[51]= "52)  Respecto al algoritmo DSA, &iquest;cu&aacute;l de estas afirmaciones es falsa?";
 choices[51]= new Array();
 choices[51][0] = "Sirve para firmar documentos";
 choices[51][1] = "Sirve para autenticar";
 choices[51][2] = "Sirve para cifrar";
 choices[51][3] = "Es un est&aacute;ndar de FIPS para firmas digitales";
 answers[51] = choices[51][2];
 units[51] = "73";
 comments[51] = "Id Pregunta: 5745. ";


//  Id pregunta: 5746 AÃ±o de creación de pregunta: 2009-01-01
 questions[52]= "53)  &iquest;Qu&eacute; es el efecto avalancha en una funci&oacute;n hash?";
 choices[52]= new Array();
 choices[52][0] = "Una peque&ntilde;a variaci&oacute;n en la longitud del mensaje debe producir una gran variaci&oacute;n en la longitud del resumen";
 choices[52][1] = "Una peque&ntilde;a variaci&oacute;n del contenido del mensaje debe producir una gran variaci&oacute;n en la longitud del resumen";
 choices[52][2] = "Una peque&ntilde;a variaci&oacute;n en el contenido del mensaje debe producir una peque&ntilde;a variaci&oacute;n en la longitud del resumen";
 choices[52][3] = "Una peque&ntilde;a variaci&oacute;n en el contenido del mensaje debe producir una gran variaci&oacute;n en el contenido del resumen";
 answers[52] = choices[52][3];
 units[52] = "72";
 comments[52] = "Id Pregunta: 5746. ";


//  Id pregunta: 5753 AÃ±o de creación de pregunta: 2009-01-01
 questions[53]= "54)  &iquest;Por qu&eacute; el algoritmo DSA no sirve para cifrar?";
 choices[53]= new Array();
 choices[53][0] = "Porque al realizar funciones modulo x (donde x es uno de los valores p&uacute;blicos del sistema) no se puede realizar su inversi&oacute;n";
 choices[53][1] = "Porque realiza un hash del mensaje, por tanto no es recuperable";
 choices[53][2] = "Porque tendr&iacute;amos que enviar la clave privada";
 choices[53][3] = "No es cierto, el algoritmo DSA s&iacute; sirve para cifrar";
 answers[53] = choices[53][1];
 units[53] = "72";
 comments[53] = "Id Pregunta: 5753. ";


//  Id pregunta: 5872 AÃ±o de creación de pregunta: 2009-01-01
 questions[54]= "55)  Indique cu&aacute;l de las siguientes afirmaciones es CIERTA:";
 choices[54]= new Array();
 choices[54][0] = "Las funciones hash se utilizan en los mecanismos de cifrado/descifrado de mensajes";
 choices[54][1] = "Las funciones hash se pueden utilizar para garantizar la integridad de los mensajes transmitidos";
 choices[54][2] = "Las funciones hash generan valores cuya longitud, en bits, depende de la longitud del mensaje original";
 choices[54][3] = "Las funciones hash requieren el uso de claves de cifrado";
 answers[54] = choices[54][1];
 units[54] = "72";
 comments[54] = "Id Pregunta: 5872. MAP 2008 A1";


//  Id pregunta: 5875 AÃ±o de creación de pregunta: 2009-01-01
 questions[55]= "56)  En el protocolo Secure Socket Layer (SSL) el subprotocolo de negociaci&oacute;n (handsake) negocia las claves de sesi&oacute;n mediante el esquema de Diffie-Hellman (D-H) o RSA. Indique la respuesta correcta:";
 choices[55]= new Array();
 choices[55][0] = "D-H an&oacute;nimo es susceptible de ataques por hombre interpuesto";
 choices[55][1] = "D-H ef&iacute;mero no requiere certificado del servidor ni del cliente";
 choices[55][2] = "D-H constante no precisa certificado del cliente";
 choices[55][3] = "RSA necesita la generaci&oacute;n de un n&uacute;mero aleatorio por el servidor que es enviado al cliente cifrado con la clave p&uacute;blica de &eacute;ste";
 answers[55] = choices[55][0];
 units[55] = "72";
 comments[55] = "Id Pregunta: 5875. MAP 2008 A1";


//  Id pregunta: 6100 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  Acerca de las Autoridades de sellado de tiempo:";
 choices[56]= new Array();
 choices[56][0] = "Para expedir su certificado precisan conocer en su integridad el documento.";
 choices[56][1] = "En el modo de registros encadenados aplican iterativamente una funci&oacute;n resumen (hash) a la concatenaci&oacute;n del resumen del mensaje a sellar con el resultado de la iteraci&oacute;n anterior.";
 choices[56][2] = "En el modo de firma digital firman la concatenaci&oacute;n de los mensajes a sellar con el tiempo.";
 choices[56][3] = "No pueden ser simult&aacute;neamente Prestadores de Servicios de Certificaci&oacute;n seg&uacute;n la definici&oacute;n que de &eacute;stos da la Ley 59/2003 de firma electr&oacute;nica.";
 answers[56] = choices[56][1];
 units[56] = "74";
 comments[56] = "Id Pregunta: 6100. TIC A 2009";


//  Id pregunta: 6104 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l de los siguientes NO es un procedimiento adecuado para la consulta de la validez de un certificado digital emitido por un prestador de servicios de certificaci&oacute;n?";
 choices[57]= new Array();
 choices[57][0] = "Declaraci&oacute;n de pr&aacute;cticas de certificaci&oacute;n.";
 choices[57][1] = "Listas de certificados revocados.";
 choices[57][2] = "LDAP.";
 choices[57][3] = "OCSP.";
 answers[57] = choices[57][0];
 units[57] = "74";
 comments[57] = "Id Pregunta: 6104. TIC A 2009";


//  Id pregunta: 6140 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  Acerca del protocolo Kerberos v. 5 (IETF RFC 4120):";
 choices[58]= new Array();
 choices[58][0] = "Tiene extensiones que permiten el empleo de criptograf&iacute;a de clave p&uacute;blica y secreta.";
 choices[58][1] = "Los tickets expiran tras un tiempo predeterminado en el protocolo.";
 choices[58][2] = "El servidor de autenticaci&oacute;n cifra el ticket que remite al cliente con una clave que obtiene a partir del nombre y la contrase&ntilde;a del usuario.";
 choices[58][3] = "Utiliza los algoritmos de cifrado bajo el modo de operaci&oacute;n denominado CBC (Cipher block chaining).";
 answers[58] = choices[58][0];
 units[58] = "74";
 comments[58] = "Id Pregunta: 6140. TIC A 2009";


//  Id pregunta: 6571 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  El campo extensions en un certificado X.509 ";
 choices[59]= new Array();
 choices[59][0] = "Permite a&ntilde;adir nuevos campos al certificado sin modificar su definici&oacute;n ASN.1";
 choices[59][1] = "Presentan Informaci&oacute;n sobre claves certificadas y pol&iacute;ticas";
 choices[59][2] = "Presentan informaci&oacute;n adicional sobre el propietario del certificado y sobre su emisor";
 choices[59][3] = "Todas las respuestas anteriores son ciertas";
 answers[59] = choices[59][3];
 units[59] = "73";
 comments[59] = "Id Pregunta: 6571. NULL";


//  Id pregunta: 6592 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  Un tipo de software que lleva al cabo una auditor&iacute;a de todo el software y hardware que se encuentra en una red de una manera sencilla, adem&aacute;s de eficiente es";
 choices[60]= new Array();
 choices[60][0] = "RFFLow Flowchart";
 choices[60][1] = "Network Inventory Advisor";
 choices[60][2] = "Tcpdump";
 choices[60][3] = "Todas las respuestas anteriores son incorrectas";
 answers[60] = choices[60][3];
 units[60] = "75";
 comments[60] = "Id Pregunta: 6592. NULL";


//  Id pregunta: 6593 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  Un tipo de software libre que lleva al cabo una auditor&iacute;a de todo el software y hardware que se encuentra en una red de una manera sencilla, adem&aacute;s de eficiente es";
 choices[61]= new Array();
 choices[61][0] = "MAPILab Reports:";
 choices[61][1] = "Network Inventory Advisor";
 choices[61][2] = "Visual audit. X4";
 choices[61][3] = "Todas las respuestas anteriores son correctas";
 answers[61] = choices[61][3];
 units[61] = "75";
 comments[61] = "Id Pregunta: 6593. NULL";


//  Id pregunta: 6594 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  En el trabajo de auditor:";
 choices[62]= new Array();
 choices[62][0] = "Se distinguen de forma general tres etapas";
 choices[62][1] = "Una de las etapas se denomina proceso, donde se realiza el an&aacute;lisis cuantitativo y cualitativo de la informaci&oacute;n recabada.";
 choices[62][2] = "A y B son correctas";
 choices[62][3] = "A y B son incorrectas";
 answers[62] = choices[62][2];
 units[62] = "75";
 comments[62] = "Id Pregunta: 6594. NULL";


//  Id pregunta: 6596 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  El RD 1720/2007 indica que deben aplicarse t&eacute;cnicas de cifrado";
 choices[63]= new Array();
 choices[63][0] = "En la distribuci&oacute;n de soportes para datos personales a los que corresponde aplicar medidas de seguridad de nivel alto";
 choices[63][1] = "Los datos personales en su transmisi&oacute;n a trav&eacute;s de las redes de telecomunicaciones";
 choices[63][2] = "A y B son correctas";
 choices[63][3] = "A y B son incorrectas";
 answers[63] = choices[63][0];
 units[63] = "75";
 comments[63] = "Id Pregunta: 6596. NULL";


//  Id pregunta: 7337 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  &iquest;Qui&eacute;n es el creador del software de cifrado PGP (Pretty Good Privacy)?";
 choices[64]= new Array();
 choices[64][0] = "Richard Stallman";
 choices[64][1] = "Phil Zimmermann";
 choices[64][2] = "Konrad Zuse";
 choices[64][3] = "Alan Turing";
 answers[64] = choices[64][1];
 units[64] = "72";
 comments[64] = "Id Pregunta: 7337. NULL";


//  Id pregunta: 7340 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  La autenticaci&oacute;n consiste en:";
 choices[65]= new Array();
 choices[65][0] = "Comprobar los permisos del usuario";
 choices[65][1] = "Comprobar que los datos no han sido alterados en una comunicaci&oacute;n";
 choices[65][2] = "Garantizar que ninguna de las partes pueda negar una operaci&oacute;n realizada";
 choices[65][3] = "Comprobar la identidad del usuario";
 answers[65] = choices[65][3];
 units[65] = "72";
 comments[65] = "Id Pregunta: 7340. NULL";


//  Id pregunta: 7343 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  Se&ntilde;ale la afirmaci&oacute;n INCORRECTA con respecto a las funciones hash:";
 choices[66]= new Array();
 choices[66][0] = "El algoritmo SHA-1 produce una salida resumen de 160 bits";
 choices[66][1] = "Las funciones hash son usadas, principalmente, para resolver el problema de la confidencialidad de los mensajes";
 choices[66][2] = "Resistencia a la preimagen significa que dada cualquier imagen y, es computacionalmente imposible encontrar un mensaje x tal que h(x)=y";
 choices[66][3] = "Resistencia a colisi&oacute;n significa que es computacionalmente imposible encontrar dos diferentes mensajes x, x&rsquo; tal que h(x)=h(x&rsquo;)";
 answers[66] = choices[66][1];
 units[66] = "72";
 comments[66] = "Id Pregunta: 7343. NULL";


//  Id pregunta: 7346 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  &iquest;Qu&eacute; es HSM?";
 choices[67]= new Array();
 choices[67][0] = "Un dispositivo criptogr&aacute;fico basado en hardware  que genera, almacena y protege claves criptogr&aacute;ficas";
 choices[67][1] = "Un algoritmo de clave p&uacute;blica";
 choices[67][2] = "Un API gen&eacute;rico de acceso a dispositivos criptogr&aacute;ficos";
 choices[67][3] = "Un conjunto de pol&iacute;ticas de seguridad en el &aacute;mbito de la criptograf&iacute;a de clave p&uacute;bica";
 answers[67] = choices[67][0];
 units[67] = "72";
 comments[67] = "Id Pregunta: 7346. NULL";


//  Id pregunta: 8168 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)  Referente a la Recomendaci&oacute;n del W3C &quot;XML Signature Syntax and Processing&quot;, &iquest;cu&aacute;l es la afirmaci&oacute;n INCORRECTA?:";
 choices[68]= new Array();
 choices[68][0] = "S&oacute;lo es posible indicar el uso del algoritmo C14N en el elemento ds:SignedInfo.";
 choices[68][1] = "Explica tres posibles formas de aplicaci&oacute;n de la firma: detached, enveloping y enveloped.";
 choices[68][2] = "Permite firmar documentos en cualquier formato, no s&oacute;lo en formato XML.";
 choices[68][3] = "Es la base para la definici&oacute;n de XAdES.";
 answers[68] = choices[68][0];
 units[68] = "72";
 comments[68] = "Id Pregunta: 8168. Examen TIC A1 2010";


//  Id pregunta: 8192 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  Indique la afirmaci&oacute;n correcta que aplica al DNI electr&oacute;nico: ";
 choices[69]= new Array();
 choices[69][0] = "La PKI adoptada para el DNI electr&oacute;nico asigna las funciones de Autoridad de Validaci&oacute;n a las entidades Autoridad de Certificaci&oacute;n, con objeto de tener conocimiento de la vigencia o caducidad de certificados de un determinado titular.";
 choices[69][1] = "La clave personal de acceso (PIN) podr&aacute; contener signos de puntuaci&oacute;n.";
 choices[69][2] = "Todos los certificados emitidos por DNIe contienen la extensi&oacute;n &lsquo;Key Usage&rsquo; con al menos los siguientes usos &quot;contentCommitment&quot;, &quot;Digital Signature&quot; y &quot;dataEncipherment&quot;.";
 choices[69][3] = "El tama&ntilde;o de las claves de los certificados de autenticaci&oacute;n y firma contenidos en el DNIe, es de 4096 bits. ";
 answers[69] = choices[69][1];
 units[69] = "74";
 comments[69] = "Id Pregunta: 8192. Examen TIC A1 2010";


//  Id pregunta: 8286 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  Un prestador de servicios de certificaci&oacute;n, &iquest;durante qu&eacute; per&iacute;odo de tiempo tiene que conservar la informaci&oacute;n relativa a los certificados reconocidos expedidos, de manera que puedan verificarse las firmas efectuadas con los mismos, de acuerdo a lo dispuesto en la Ley 59/2003, de 19 de diciembre, de Firma electr&oacute;nica? ";
 choices[70]= new Array();
 choices[70][0] = "Al menos durante 15 a&ntilde;os contados desde la fecha de fin de validez del certificado,";
 choices[70][1] = "Al menos durante 15 a&ntilde;os contados desde el momento de su expedici&oacute;n";
 choices[70][2] = "Un m&aacute;ximo de 15 a&ntilde;os contados desde la fecha de fin de validez del certificado.";
 choices[70][3] = "Un m&aacute;ximo de 15 a&ntilde;os contados desde el momento de su expedici&oacute;n. ";
 answers[70] = choices[70][1];
 units[70] = "74";
 comments[70] = "Id Pregunta: 8286. Examen TIC A2 2010";


//  Id pregunta: 8304 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  En los sistemas criptogr&aacute;ficos h&iacute;bridos: ";
 choices[71]= new Array();
 choices[71][0] = "Se prescinde del cifrado sim&eacute;trico.";
 choices[71][1] = "Se cifra la clave de sesi&oacute;n mediante un cifrado sim&eacute;trico ";
 choices[71][2] = "Se cifra la clave de sesi&oacute;n mediante un cifrado asim&eacute;trico";
 choices[71][3] = "Se omite el uso de certificados digitales, cuando se dispone de plataformas PKI.";
 answers[71] = choices[71][2];
 units[71] = "72";
 comments[71] = "Id Pregunta: 8304. Examen TIC A2 2010";


//  Id pregunta: 8305 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  &iquest;Cu&aacute;l de los siguientes perfiles de XAdES incluye los certificados y listas de revocaci&oacute;n (consultas OCSP o CRLs) para poder verificar el documento firmado en el futuro incluso si las fuentes originales no estuvieran disponibles?";
 choices[72]= new Array();
 choices[72][0] = "XAdES-X.";
 choices[72][1] = "XAdES-X-L.";
 choices[72][2] = "XAdES-C. ";
 choices[72][3] = "Esta funcionalidad no se soporta en XAdES.";
 answers[72] = choices[72][1];
 units[72] = "72, 73, 74";
 comments[72] = "Id Pregunta: 8305. Examen TIC A2 2010";


//  Id pregunta: 8545 AÃ±o de creación de pregunta: 2010-01-01
 questions[73]= "74)  La especificaci&oacute;n PKCS#3 de RSA se refiere a:";
 choices[73]= new Array();
 choices[73][0] = "El est&aacute;ndar criptogr&aacute;fico RSA";
 choices[73][1] = "La sintaxis de la informaci&oacute;n de clave privada.";
 choices[73][2] = "El intercambio de claves Diffie-Hellman.";
 choices[73][3] = "La sintaxis del mensaje criptogr&aacute;fico";
 answers[73] = choices[73][2];
 units[73] = "72";
 comments[73] = "Id Pregunta: 8545. Examen TIC A2 2010 interna";


//  Id pregunta: 8673 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  El protocolo OCSP, se utiliza en:";
 choices[74]= new Array();
 choices[74][0] = "la validaci&oacute;n en tiempo real del certificado digital";
 choices[74][1] = "comprobaci&oacute;n de la validez de una trama";
 choices[74][2] = "la comunicaci&oacute;n entre sistemas abiertos";
 choices[74][3] = "la validaci&oacute;n de la direcci&oacute;n de origen de un equipo";
 answers[74] = choices[74][0];
 units[74] = "74";
 comments[74] = "Id Pregunta: 8673. Examen UPM A2 2011";


//  Id pregunta: 8895 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  &iquest;Cu&aacute;l de las siguientes no corresponde a una funci&oacute;n digest?";
 choices[75]= new Array();
 choices[75][0] = "HMAC";
 choices[75][1] = "MD5";
 choices[75][2] = "MD8";
 choices[75][3] = "SHA";
 answers[75] = choices[75][2];
 units[75] = "74";
 comments[75] = "Id Pregunta: 8895. NULL";


//  Id pregunta: 8964 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  Como algoritmos de cifrado sim&eacute;trico de bloque no figura:";
 choices[76]= new Array();
 choices[76][0] = "Lucifer";
 choices[76][1] = "Serpent";
 choices[76][2] = "Seal";
 choices[76][3] = "Shark";
 answers[76] = choices[76][2];
 units[76] = "72";
 comments[76] = "Id Pregunta: 8964. ";


//  Id pregunta: 8965 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  Aquel est&aacute;ndar de la W3C de XMLDSig cuya XMLSignature se encuentra envolviendo el documento firmado es:";
 choices[77]= new Array();
 choices[77][0] = "Enveloped";
 choices[77][1] = "Detached";
 choices[77][2] = "Enveloping";
 choices[77][3] = "Todos los documentos firmados con XMLDSig est&aacute;n envueltos por la XMLDSig";
 answers[77] = choices[77][2];
 units[77] = "73";
 comments[77] = "Id Pregunta: 8965. ";


//  Id pregunta: 9032 AÃ±o de creación de pregunta: 2011-01-01
 questions[78]= "79)  &iquest;Cu&aacute;l de las siguientes algoritmos no es de clave sim&eacute;trica?";
 choices[78]= new Array();
 choices[78][0] = "AES";
 choices[78][1] = "DSA";
 choices[78][2] = "DES";
 choices[78][3] = "BlowFish";
 answers[78] = choices[78][1];
 units[78] = "72";
 comments[78] = "Id Pregunta: 9032. ";


//  Id pregunta: 9037 AÃ±o de creación de pregunta: 2011-01-01
 questions[79]= "80)  Cual de las firmas Xades a&ntilde;ade referencias a datos de verificaci&oacute;n (certificados y listas de revocaci&oacute;n) a los documentos firmados";
 choices[79]= new Array();
 choices[79][0] = "Xades-BES";
 choices[79][1] = "Xades-T";
 choices[79][2] = "Xades-C";
 choices[79][3] = "Xades-EPES";
 answers[79] = choices[79][2];
 units[79] = "72";
 comments[79] = "Id Pregunta: 9037. ";


//  Id pregunta: 9797 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  El uso conjunto de los certificados ubicados en el DNI electr&oacute;nico proporcionan las siguientes garant&iacute;as";
 choices[80]= new Array();
 choices[80][0] = "Disponibilidad, autenticidad de origen,confidencialidad y no repudio de origen. ";
 choices[80][1] = "Disponibilidad, integridad, autenticidad de origen. ";
 choices[80][2] = "Integridad, autenticidad de origen y no repudio de origen.";
 choices[80][3] = "Integridad, confidencialidad, autenticid ad de origen y no repudio de destino. ";
 answers[80] = choices[80][2];
 units[80] = "74";
 comments[80] = "Id Pregunta: 9797. Examen TIC-A2 2013-Libre";


//  Id pregunta: 10053 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  Un archivo .PFX, de uso en certificados electr&oacute;nicos:";
 choices[81]= new Array();
 choices[81][0] = "Contiene la clave privada.";
 choices[81][1] = "Cumple la sintaxis PKCS #21.";
 choices[81][2] = "Est&aacute; codificado en un formato no binario.";
 choices[81][3] = "No se puede convertir a formato .PEM.";
 answers[81] = choices[81][0];
 units[81] = "72";
 comments[81] = "Id Pregunta: 10053. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10317 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  CRAM-MD5 definido en el RFC 2195 es una t&eacute;cnica criptogr&aacute;fica que consiste en:";
 choices[82]= new Array();
 choices[82][0] = "Un mecanismo de autenticaci&oacute;n challenge-response para autenticaci&oacute;n de usuarios POP e IMAP, entre otros.";
 choices[82][1] = "Un mecanismo de cifrado sim&eacute;trico de bloque basado en una clave compartida y derivaci&oacute;n de subclaves usando MD5.";
 choices[82][2] = "Un algoritmo de firma electr&oacute;nica basado en MD5, ideado para escenarios en los que no puede usarse criptograf&iacute;a asim&eacute;trica.";
 choices[82][3] = "Un algoritmo de cifrado sim&eacute;trico de flujo (stream) basado una clave compartida, en MD5 y un LFSR predeterminado.";
 answers[82] = choices[82][0];
 units[82] = "72";
 comments[82] = "Id Pregunta: 10317. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10375 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  La rotura de la m&aacute;quina de cifrado Enigma es un ejemplo de:";
 choices[83]= new Array();
 choices[83][0] = "Criptograf&iacute;a asim&eacute;trica o de clave p&uacute;blica";
 choices[83][1] = "Cifrado C&eacute;sar";
 choices[83][2] = "Criptoan&aacute;lisis";
 choices[83][3] = "Criptograf&iacute;a cu&aacute;ntica";
 answers[83] = choices[83][2];
 units[83] = "72";
 comments[83] = "Id Pregunta: 10375. ";


//  Id pregunta: 10476 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  Completa la frase: A diferencia de NIS, LDAP &hellip;";
 choices[84]= new Array();
 choices[84][0] = "No est&aacute; restringido a redes unix";
 choices[84][1] = "Usa notaci&oacute;n ASN.1";
 choices[84][2] = "No soporta implementaciones de software libre";
 choices[84][3] = "Se usa sobre TCP/IP";
 answers[84] = choices[84][0];
 units[84] = "73";
 comments[84] = "Id Pregunta: 10476. ";


//  Id pregunta: 10479 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Si quiero cambiar el PIN del DNI electr&oacute;nico:";
 choices[85]= new Array();
 choices[85][0] = "S&oacute;lo puedo hacerlo desde mi casa pero necesito un lector de huella dactilar";
 choices[85][1] = "Puedo hacerlo desde los dispositivos autorizados por la Direcci&oacute;n General de la Polic&iacute;a";
 choices[85][2] = "Puedo hacerlo s&oacute;lo usando mi navegador web";
 choices[85][3] = "S&oacute;lo puedo hacerlo si tengo el PUK";
 answers[85] = choices[85][1];
 units[85] = "74";
 comments[85] = "Id Pregunta: 10479. NULL";


//  Id pregunta: 10609 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  &iquest;Cu&aacute;l de estas es la codificaci&oacute;n en formato binario de un certificado X.509v3?";
 choices[86]= new Array();
 choices[86][0] = "DER";
 choices[86][1] = "CERT";
 choices[86][2] = "PEM";
 choices[86][3] = "Ninguno de los anteriores.";
 answers[86] = choices[86][0];
 units[86] = "73";
 comments[86] = "Id Pregunta: 10609. ";


//  Id pregunta: 10887 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  &iquest;Cu&aacute;l de los siguientes protocolos permite conocer en tiempo real si un certificado ha sido o no revocado?";
 choices[87]= new Array();
 choices[87][0] = "OCSP";
 choices[87][1] = "CRL";
 choices[87][2] = "PKCS#10";
 choices[87][3] = "HTTPS";
 answers[87] = choices[87][0];
 units[87] = "73, 74";
 comments[87] = "Id Pregunta: 10887. Examen GSI 2014";


//  Id pregunta: 10952 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  En la estructura de un certificado X.509 v3 NO es obligatorio:";
 choices[88]= new Array();
 choices[88][0] = "El n&uacute;mero de serie.";
 choices[88][1] = "La validez no antes de.";
 choices[88][2] = "El identificador &uacute;nico de emisor.";
 choices[88][3] = "El emisor.";
 answers[88] = choices[88][2];
 units[88] = "73";
 comments[88] = "Id Pregunta: 10952. TIC A1 AGE 2014";


//  Id pregunta: 11053 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  &iquest;Cu&aacute;l NO es una extensi&oacute;n v&aacute;lida para certificados?";
 choices[89]= new Array();
 choices[89][0] = ".PFX";
 choices[89][1] = ".DER";
 choices[89][2] = ".P7B";
 choices[89][3] = "Todos lo son";
 answers[89] = choices[89][3];
 units[89] = "73";
 comments[89] = "Id Pregunta: 11053. ";


//  Id pregunta: 11054 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  &iquest;Qu&eacute; elemento de X.500 es el conjunto de toda la informaci&oacute;n disponible en el Servicio de Directorio?";
 choices[90]= new Array();
 choices[90][0] = "DIB";
 choices[90][1] = "DSA";
 choices[90][2] = "DUA";
 choices[90][3] = "DISP";
 answers[90] = choices[90][0];
 units[90] = "73";
 comments[90] = "Id Pregunta: 11054. ";


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


//  Id pregunta: 11149 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Qu&eacute; versi&oacute;n del PKCS define una interfaz para el acceso a dispositivos que contienen informaci&oacute;n criptogr&aacute;fica como Tokens o Tarjetas?";
 choices[92]= new Array();
 choices[92][0] = "PKCS 1";
 choices[92][1] = "PKCS 7";
 choices[92][2] = "PCKCS 9";
 choices[92][3] = "PKCS 11";
 answers[92] = choices[92][3];
 units[92] = "73";
 comments[92] = "Id Pregunta: 11149. ";


//  Id pregunta: 11151 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Cu&aacute;ntos niveles de seguridad define el proyecto STORK?";
 choices[93]= new Array();
 choices[93][0] = "3";
 choices[93][1] = "4";
 choices[93][2] = "5";
 choices[93][3] = "6";
 answers[93] = choices[93][1];
 units[93] = "73";
 comments[93] = "Id Pregunta: 11151. ";


//  Id pregunta: 11256 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l es la equivalencia en criptograf&iacute;a asim&eacute;trica a una longitud de clave de 112 bits en criptograf&iacute;a sim&eacute;trica?";
 choices[94]= new Array();
 choices[94][0] = "1102 bits.";
 choices[94][1] = "1768 bits.";
 choices[94][2] = "2048 bits.";
 choices[94][3] = "3072 bits.";
 answers[94] = choices[94][2];
 units[94] = "72";
 comments[94] = "Id Pregunta: 11256. ";


//  Id pregunta: 11257 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Sobre la criptograf&iacute;a h&iacute;brida:";
 choices[95]= new Array();
 choices[95][0] = "El transmisor cifra el mensaje con una clave sim&eacute;trica o de sesi&oacute;n, y a su vez cifra esa clave sim&eacute;trica con la clave privada del destinatario.";
 choices[95][1] = "Es utilizada por Pretty Good Privacy.";
 choices[95][2] = "Tambi&eacute;n se conocen como &ldquo;sobre digital&rdquo;.";
 choices[95][3] = "B) y C) son correctas.";
 answers[95] = choices[95][3];
 units[95] = "72";
 comments[95] = "Id Pregunta: 11257. ";


//  Id pregunta: 11259 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Los certificados cualificados de firma electr&oacute;nica contendr&aacute;n:";
 choices[96]= new Array();
 choices[96][0] = "Al menos el nombre del firmante o un seud&oacute;nimo; si se usara un seud&oacute;nimo, se indicar&aacute; claramente.";
 choices[96][1] = "Los datos relativos al inicio y final del per&iacute;odo de validez del certificado.";
 choices[96][2] = "La localizaci&oacute;n de los servicios que pueden utilizarse para consultar el estado de validez del certificado cualificado.";
 choices[96][3] = "Todas son verdaderas.";
 answers[96] = choices[96][3];
 units[96] = "73";
 comments[96] = "Id Pregunta: 11259. ";


//  Id pregunta: 11260 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Los requisitos de seguridad aplicables a los prestadores de servicios de confianza:";
 choices[97]= new Array();
 choices[97][0] = "Son los mismos para tanto para los prestadores de servicios de confianza cualificados como no cualificados";
 choices[97][1] = "Notificar&aacute;n al Ministerio de Industria en un plazo m&aacute;ximo de 48 horas, de cualquier violaci&oacute;n de seguridad o p&eacute;rdida de integridad.";
 choices[97][2] = "En caso de que una violaci&oacute;n de la seguridad afecte a dos o m&aacute;s Estados miembros, el organismo de supervisi&oacute;n notificado informar&aacute; al respecto a los organismos de supervisi&oacute;n de los dem&aacute;s Estados miembros y a ENISA.";
 choices[97][3] = "Todas son verdaderas.";
 answers[97] = choices[97][2];
 units[97] = "73";
 comments[97] = "Id Pregunta: 11260. ";


//  Id pregunta: 11314 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  En relaci&oacute;n con el servicio de directorio X.500, se&ntilde;alar la falsa.";
 choices[98]= new Array();
 choices[98][0] = "Cada entrada del Directorio, tiene un identificador &uacute;nico que el RDN.";
 choices[98][1] = "La parte com&uacute;n de todas las entradas u objetos, se llama Suffix.";
 choices[98][2] = "El conjunto de objetos, constituyen un DMD o dominio de gesti&oacute;n.";
 choices[98][3] = "X.500 no define nada sobre la interfaz de usuario.";
 answers[98] = choices[98][0];
 units[98] = "73";
 comments[98] = "Id Pregunta: 11314. El identificador &uacute;nico de cada entrada del directorio es el DN, que es como la direcci&oacute;n absoluta de un fichero.";


//  Id pregunta: 11514 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  De entre los siguientes est&aacute;ndares XML del W3C, &iquest;Cu&aacute;l define pol&iacute;ticas de control de acceso de usuarios?";
 choices[99]= new Array();
 choices[99][0] = "DSML";
 choices[99][1] = "XrML";
 choices[99][2] = "XKMS";
 choices[99][3] = "XACML";
 answers[99] = choices[99][3];
 units[99] = "72";
 comments[99] = "Id Pregunta: 11514. NULL";


