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

//  Id pregunta: 768 AÃ±o de creación de pregunta: 2009-01-01
 questions[0]= "1)  En los servicios de directorio";
 choices[0]= new Array();
 choices[0][0] = "varias entradas pueden compartir un DN";
 choices[0][1] = "las operaciones de actualizaci&oacute;n de LDAP no son at&oacute;micas";
 choices[0][2] = "LDAP utiliza habitualmente la pila de protocolos TCP / IP";
 choices[0][3] = "LDAP no se describe en t&eacute;rminos de ASN.1";
 answers[0] = choices[0][2];
 units[0] = "73";
 comments[0] = "Id Pregunta: 768. RFC 4512 y RFC 4514 ";


//  Id pregunta: 838 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto al uso de mecanismos criptogr&aacute;ficos?:";
 choices[1]= new Array();
 choices[1][0] = "El uso de mecanismos criptogr&aacute;ficos puede aumentar la latencia de las comunicaciones";
 choices[1][1] = "El uso de mecanismos criptogr&aacute;ficos puede aumentar la confidencialidad";
 choices[1][2] = "El uso de mecanismos criptogr&aacute;ficos puede implementarse por software o por hardware";
 choices[1][3] = "El uso de mecanismos criptogr&aacute;ficos no puede proporcionar integridad en las comunicaciones";
 answers[1] = choices[1][3];
 units[1] = "72";
 comments[1] = "Id Pregunta: 838. ";


//  Id pregunta: 946 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  Cada vez que un ciudadano utilice su tarjeta criptogr&aacute;fica CERES para firmar documentos que debe entregar a la Administraci&oacute;n, se&ntilde;ale qu&eacute; utilizaci&oacute;n estar&aacute; haciendo de las claves de cifrado:";
 choices[2]= new Array();
 choices[2][0] = "Cifrar&aacute; con su clave p&uacute;blica";
 choices[2][1] = "Cifrar&aacute; con la clave p&uacute;blica de la Administraci&oacute;n";
 choices[2][2] = "Cifrara con el certificado ra&iacute;z de la FNMT";
 choices[2][3] = "Cifrar&aacute; con su clave privada";
 answers[2] = choices[2][3];
 units[2] = "74";
 comments[2] = "Id Pregunta: 946. NULL";


//  Id pregunta: 1027 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  Entrust:";
 choices[3]= new Array();
 choices[3][0] = "Un algoritmo criptogr&aacute;fico";
 choices[3][1] = "Un mecanismo de intercambio de claves";
 choices[3][2] = "Una infraestructura de clave p&uacute;blica (PKI))";
 choices[3][3] = "Una funcion resumen";
 answers[3] = choices[3][2];
 units[3] = "74";
 comments[3] = "Id Pregunta: 1027. NULL";


//  Id pregunta: 1047 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  El protocolo de acceso al directorio en X.500 es:";
 choices[4]= new Array();
 choices[4][0] = "TCP/IP";
 choices[4][1] = "LDAP";
 choices[4][2] = "IMAP";
 choices[4][3] = "DAP";
 answers[4] = choices[4][3];
 units[4] = "73";
 comments[4] = "Id Pregunta: 1047. ";


//  Id pregunta: 1119 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  En los algoritmos de clave sim&eacute;trica:";
 choices[5]= new Array();
 choices[5][0] = "se pueden distribuir y mantener f&aacute;cilmente las claves";
 choices[5][1] = "tienen alta velocidad de cifrado y descifrado";
 choices[5][2] = "no se ha alcanzado a&uacute;n la perfecci&oacute;n matem&aacute;tica, y existen algoritmos eficaces para reventarlos aparte del de fuerza bruta";
 choices[5][3] = "no pueden ser usados para autenticar a las partes";
 answers[5] = choices[5][1];
 units[5] = "72";
 comments[5] = "Id Pregunta: 1119. ";


//  Id pregunta: 1271 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Los certificados digitales o 'digital IDs' est&aacute;n definidos en:";
 choices[6]= new Array();
 choices[6][0] = "RSA Public Key Structure";
 choices[6][1] = "X.509v3 de ITU";
 choices[6][2] = "RFC 1661 de IAB";
 choices[6][3] = "Verisign doc 1992/21";
 answers[6] = choices[6][1];
 units[6] = "73";
 comments[6] = "Id Pregunta: 1271. ";


//  Id pregunta: 1272 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  Los criptosistemas irreversibles:";
 choices[7]= new Array();
 choices[7][0] = "No existen actualmente dada la potencia de los sistemas actuales y la potencia de la computaci&oacute;n distribuida";
 choices[7][1] = "Se utilizan sobre todo para la autenticaci&oacute;n de entidades";
 choices[7][2] = "Se basan en funciones matem&aacute;ticas no invertibles computacionalmente, o carentes de inversa";
 choices[7][3] = "B y C son ciertas";
 answers[7] = choices[7][3];
 units[7] = "72";
 comments[7] = "Id Pregunta: 1272. ";


//  Id pregunta: 1309 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Pilar quier enviar un mensaje confidencial a Antonio, en un sistema de clave p&uacute;blica, por lo tanto existen las claves Pilar-privada / Pilar p&uacute;blica y Antonio privada / Antonio p&uacute;blica.  Pilar genera su mensaje, &iquest;con qu&eacute; clave de las cuatro lo cifrar&aacute;?:";
 choices[8]= new Array();
 choices[8][0] = "Pilar-privada";
 choices[8][1] = "Pilar-p&uacute;blica";
 choices[8][2] = "Antonio-privada";
 choices[8][3] = "Antonio-p&uacute;blica";
 answers[8] = choices[8][3];
 units[8] = "72";
 comments[8] = "Id Pregunta: 1309. ";


//  Id pregunta: 1322 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  RSA es:";
 choices[9]= new Array();
 choices[9][0] = "un algoritmo de clave privada";
 choices[9][1] = "un algoritmo de clave p&uacute;blica";
 choices[9][2] = "un m&eacute;todo de criptoan&aacute;lisis diferencial";
 choices[9][3] = "una infraestructura de clave p&uacute;blica";
 answers[9] = choices[9][1];
 units[9] = "72";
 comments[9] = "Id Pregunta: 1322. ";


//  Id pregunta: 1326 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  Se define Autoridad de certificaci&oacute;n como aquella en la conf&iacute;an uno o m&aacute;s usuarios y cuya actividad principal es la certificaci&oacute;n de la autenticidad de:";
 choices[10]= new Array();
 choices[10][0] = "Los usuarios";
 choices[10][1] = "Los datos";
 choices[10][2] = "Los documentos";
 choices[10][3] = "Los mensajes";
 answers[10] = choices[10][0];
 units[10] = "74";
 comments[10] = "Id Pregunta: 1326. NULL";


//  Id pregunta: 1486 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Cu&aacute;l de las siguientes afirmaciones no es verdadera respecto a la criptograf&iacute;a?:";
 choices[11]= new Array();
 choices[11][0] = "Los algoritmos &quot;stream&quot; son los mas rapidos";
 choices[11][1] = "Los algoritmos &quot;stream&quot; y &quot;block&quot; son equiparables";
 choices[11][2] = "La  velocidad no tiene ninguna correlaci&oacute;n con la longitud de clave ";
 choices[11][3] = "3DES es m&aacute;s seguro y lento que DES";
 answers[11] = choices[11][1];
 units[11] = "73";
 comments[11] = "Id Pregunta: 1486. ";


//  Id pregunta: 1555 AÃ±o de creación de pregunta: 2003-01-01
 questions[12]= "13)  &iquest;Cu&aacute;l de las siguientes no es una propiedad que debe cumplir una funci&oacute;n resumen (hash) ?";
 choices[12]= new Array();
 choices[12][0] = "Resistencia a la preimagen";
 choices[12][1] = "Resistencia a la colisi&oacute;n Fuerte";
 choices[12][2] = "Resistencia a la colisi&oacute;n Suave";
 choices[12][3] = "Resistencia a la no colisi&oacute;n";
 answers[12] = choices[12][3];
 units[12] = "72";
 comments[12] = "Id Pregunta: 1555. ";


//  Id pregunta: 1561 AÃ±o de creación de pregunta: 2003-01-01
 questions[13]= "14)  &iquest;Cu&aacute;l de los siguientes no es un SO para tarjetas?";
 choices[13]= new Array();
 choices[13][0] = " Scfw";
 choices[13][1] = "MultOs";
 choices[13][2] = "Java Card";
 choices[13][3] = " Open Card ";
 answers[13] = choices[13][3];
 units[13] = "74";
 comments[13] = "Id Pregunta: 1561. ";


//  Id pregunta: 1563 AÃ±o de creación de pregunta: 2003-01-01
 questions[14]= "15)  &iquest;Cu&aacute;l de los siguientes tipos de informaci&oacute;n no est&aacute; contenida obligatoriamente en un certificado digital X.509?:";
 choices[14]= new Array();
 choices[14][0] = "La clave p&uacute;blica del titular.";
 choices[14][1] = "Datos personales de identificaci&oacute;n del titular.";
 choices[14][2] = "La URL del directorio LDAP contenedor de claves p&uacute;blicas.";
 choices[14][3] = "La firma electr&oacute;nica de la Autoridad de Certificaci&oacute;n que emiti&oacute; el certificado.";
 answers[14] = choices[14][2];
 units[14] = "73";
 comments[14] = "Id Pregunta: 1563. Junta Andaluc&iacute;a";


//  Id pregunta: 1577 AÃ±o de creación de pregunta: 2004-01-01
 questions[15]= "16)  Respecto a SSL";
 choices[15]= new Array();
 choices[15][0] = "Es un protocolo promovido por IETF";
 choices[15][1] = "Se diferencia de TSL en las t&eacute;cnicas criptogr&aacute;ficas empleadas";
 choices[15][2] = "Cuando HTTP se usa sobre un canal SSL se denomina HTTPS";
 choices[15][3] = "Est&aacute; restringido a su uso en browsers";
 answers[15] = choices[15][2];
 units[15] = "111";
 comments[15] = "Id Pregunta: 1577. Tanenbaum";


//  Id pregunta: 1604 AÃ±o de creación de pregunta: 2003-01-01
 questions[16]= "17)  Entre los algoritmos que puede utilizar SSL se encuentran:";
 choices[16]= new Array();
 choices[16][0] = "TripleDES, RC4 y SHA-1";
 choices[16][1] = "DES, RC2 y MD5";
 choices[16][2] = "Adem&aacute;s de los anteriores puede usar SKIPJACK y RSA";
 choices[16][3] = "Puede usar todos los anteriores e incluso no usar algoritmo de encriptaci&oacute;n, pero s&iacute; de autenticaci&oacute;n con SHA-1 o MD5 ";
 answers[16] = choices[16][3];
 units[16] = "72";
 comments[16] = "Id Pregunta: 1604. ";


//  Id pregunta: 1855 AÃ±o de creación de pregunta: 2006-01-01
 questions[17]= "18)  Se&ntilde;ale la falsa:";
 choices[17]= new Array();
 choices[17][0] = "CRL son las siglas en ingl&eacute;s de la lista de certificados revocados";
 choices[17][1] = "OCSP son las siglas en ingl&eacute;s del protocolo de estado de certificados en l&iacute;nea";
 choices[17][2] = "PKCS#7 corresponde al est&aacute;ndar del formato del sobre digital";
 choices[17][3] = "PKCS#11 corresponde al algoritmo RSA";
 answers[17] = choices[17][3];
 units[17] = "72";
 comments[17] = "Id Pregunta: 1855. ";


//  Id pregunta: 1860 AÃ±o de creación de pregunta: 2006-01-01
 questions[18]= "19)  Se&ntilde;ale la falsa:";
 choices[18]= new Array();
 choices[18][0] = "XML Signature asegura la integridad de partes de documentos XML transportados";
 choices[18][1] = "XML Signature puede aplicarse a cualquier contenido digital (objeto de datos), incluyendo XML";
 choices[18][2] = "XML Key Management es un protocolo para distribuir y registrar claves p&uacute;blicas. Lo que hace es ocultar la parte compleja que surge con PKI. Est&aacute; compuesto de: el registro de la clave p&uacute;blica (X-KRSS) y la informaci&oacute;n de clave p&uacute;blica (X-KISS).";
 choices[18][3] = "Todas las anteriores son falsas";
 answers[18] = choices[18][3];
 units[18] = "74";
 comments[18] = "Id Pregunta: 1860. NULL";


//  Id pregunta: 1864 AÃ±o de creación de pregunta: 2006-01-01
 questions[19]= "20)  &iquest;En qu&eacute; nivel de la pila OSI se sit&uacute;a el protocolo LDAP?";
 choices[19]= new Array();
 choices[19][0] = "Aplicaci&oacute;n";
 choices[19][1] = "Transporte";
 choices[19][2] = "Red";
 choices[19][3] = "Sesi&oacute;n";
 answers[19] = choices[19][0];
 units[19] = "74";
 comments[19] = "Id Pregunta: 1864. NULL";


//  Id pregunta: 1894 AÃ±o de creación de pregunta: 2006-01-01
 questions[20]= "21)  La tecnolog&iacute;a utilizada para medir y analizar caracter&iacute;sticas del cuerpo humano con prop&oacute;sitos de autenticaci&oacute;n se llama";
 choices[20]= new Array();
 choices[20][0] = "huella";
 choices[20][1] = "biom&eacute;trica";
 choices[20][2] = "JBOD";
 choices[20][3] = "antropomorfismo";
 answers[20] = choices[20][1];
 units[20] = "74";
 comments[20] = "Id Pregunta: 1894. NULL";


//  Id pregunta: 1950 AÃ±o de creación de pregunta: 2006-01-01
 questions[21]= "22)  El protocolo SSL v.3";
 choices[21]= new Array();
 choices[21][0] = "Trabaja tanto sobre TCP como sobre UDP";
 choices[21][1] = "Hasta hace pocos a&ntilde;os los navegadores que incorporaban SSL ten&iacute;an su exportaci&oacute;n desde EE UU limitada a claves de 128 bits";
 choices[21][2] = "Es id&eacute;ntico al protocolo TLS, aunque este &uacute;ltimo est&aacute; normalizado por el IETF mediante un RFC";
 choices[21][3] = "Intercambia las claves secretas mediante el ensobrado digital (digital envelopment) o mediante Diffie-Hellman";
 answers[21] = choices[21][3];
 units[21] = "72";
 comments[21] = "Id Pregunta: 1950. ";


//  Id pregunta: 3048 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  &iquest;Qu&eacute; es el spyware?:";
 choices[22]= new Array();
 choices[22][0] = "SW de alto secreto usado por los servicios de inteligencia de cada pa&iacute;s";
 choices[22][1] = "SW que diversas compa&ntilde;&iacute;as introducen en tu ordenador cuando te descargas algo de internet, para ver tus programas y tus usos y sacar estudios de mercado";
 choices[22][2] = "Es otro nombre de las conocidas cookies";
 choices[22][3] = "La denominaci&oacute;n es err&oacute;nea, no se refiere a nada";
 answers[22] = choices[22][1];
 units[22] = "111";
 comments[22] = "Id Pregunta: 3048. NULL";


//  Id pregunta: 3078 AÃ±o de creación de pregunta: 2005-01-01
 questions[23]= "24)  La intrusi&oacute;n de un virus inform&aacute;tico del tipo gusano (worm) en un ordenador puede afectar, en primer lugar, por ocupaci&oacute;n de todo el espacio disponible en disco:";
 choices[23]= new Array();
 choices[23][0] = "La dimensi&oacute;n de confidencialidad de la informaci&oacute;n almacenada";
 choices[23][1] = "La dimensi&oacute;n de disponibilidad de la informaci&oacute;n almacenada";
 choices[23][2] = "La dimensi&oacute;n de integridad de la informaci&oacute;n almacenada";
 choices[23][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;c&rsquo; son correctas";
 answers[23] = choices[23][1];
 units[23] = "111";
 comments[23] = "Id Pregunta: 3078. NULL";


//  Id pregunta: 3091 AÃ±o de creación de pregunta: 2005-01-01
 questions[24]= "25)  Seg&uacute;n la terminolog&iacute;a usual, la intrusi&oacute;n de un hacker en un servidor web afecta a:";
 choices[24]= new Array();
 choices[24][0] = "La dimensi&oacute;n de confidencialidad de la informaci&oacute;n";
 choices[24][1] = "La dimensi&oacute;n de disponibilidad de la informaci&oacute;n";
 choices[24][2] = "La dimensi&oacute;n de integridad de la informaci&oacute;n";
 choices[24][3] = "Las respuestas 'a' y 'c' son correctas";
 answers[24] = choices[24][0];
 units[24] = "111";
 comments[24] = "Id Pregunta: 3091. NULL";


//  Id pregunta: 3362 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Del protocolo IKE de IPSec podemos decir:";
 choices[25]= new Array();
 choices[25][0] = "que su componente OAKLEY usa el m&eacute;todo de Diffie-Helman modificado para la generaci&oacute;n e intercambio de claves";
 choices[25][1] = "que tiene 3 componentes: ISAKMP, SA y OAKLEY";
 choices[25][2] = "que s&oacute;lo se usa en modo t&uacute;nel, ya que el modo transporte no cifra la cabecera IP original";
 choices[25][3] = "nada de lo anterior es cierto";
 answers[25] = choices[25][0];
 units[25] = "111";
 comments[25] = "Id Pregunta: 3362. Consultar rfc 2409";


//  Id pregunta: 3420 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  Indicar cu&aacute;l de las siguientes ventajas corresponde al uso de una pasarela de aplicaci&oacute;n como cortafuegos:";
 choices[26]= new Array();
 choices[26][0] = "Simplicidad";
 choices[26][1] = "Facilidad de control";
 choices[26][2] = "Rapidez";
 choices[26][3] = "Transparencia";
 answers[26] = choices[26][1];
 units[26] = "111";
 comments[26] = "Id Pregunta: 3420. NULL";


//  Id pregunta: 3492 AÃ±o de creación de pregunta: 2005-01-01
 questions[27]= "28)  En el &aacute;mbito de la seguridad de redes, cu&aacute;l de las siguientes afirmaciones es falsa:";
 choices[27]= new Array();
 choices[27][0] = "Los ataques de &quot;buffer overflow&quot; son posibles debido a fallos de programaci&oacute;n";
 choices[27][1] = "Los ataques mediante &quot;spoofing&quot; se basan en la generaci&oacute;n de paquetes de informaci&oacute;n falsa";
 choices[27][2] = "NIS, NFS, DNS o SMTP son protocolos de aplicaci&oacute;n inseguros";
 choices[27][3] = "Los ataques mediante &quot;secuestro de sesi&oacute;n&quot; no pueden prevenirse en la labor de administraci&oacute;n";
 answers[27] = choices[27][3];
 units[27] = "111";
 comments[27] = "Id Pregunta: 3492. NULL";


//  Id pregunta: 3665 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  Un servidor &quot;proxy&quot;:";
 choices[28]= new Array();
 choices[28][0] = "Sirve para traducir direcciones IP";
 choices[28][1] = "Act&uacute;a de intermediario, para acceder a determinados servicios de forma indirecta";
 choices[28][2] = "Permite acceder a cualquier servicio de internet, actuando de intermediario";
 choices[28][3] = "Sirve para realizar pagos on-line";
 answers[28] = choices[28][1];
 units[28] = "111";
 comments[28] = "Id Pregunta: 3665. NULL";


//  Id pregunta: 3800 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  S/MIME utiliza los siguientes algoritmos de  firma:";
 choices[29]= new Array();
 choices[29][0] = "RC2";
 choices[29][1] = "MD5";
 choices[29][2] = "RSA";
 choices[29][3] = "todos los anteriores";
 answers[29] = choices[29][3];
 units[29] = "111";
 comments[29] = "Id Pregunta: 3800. NULL";


//  Id pregunta: 3906 AÃ±o de creación de pregunta: 2003-01-01
 questions[30]= "31)  SSL son las iniciales de Secure Socket Layer, S-HTTP son las siglas de Secure HyperText Transfer Protocol, protocolos para la comunicaci&oacute;n segura entre dos ordenadores, normalmente entre un cliente y un servidor y su objetivo es similar, pero:";
 choices[30]= new Array();
 choices[30][0] = "SSL es m&aacute;s amplio que S-HTTP ya que puede ser utilizado como un intermediario entre el TCP/ IP y cualquier otro protocolo (por ejemplo, el HTTP) para a&ntilde;adir seguridad a cualquier tipo de comunicaci&oacute;n entre un cliente y un servidor.";
 choices[30][1] = "SSL es menos amplio que S-HTTP ya que es una parte de este que puede ser utilizada para a&ntilde;adir seguridad a cualquier tipo de comunicaci&oacute;n http entre un cliente y un servidor.";
 choices[30][2] = "S-HTTP sustituye al protocolo HTTP, aunque el cliente no est&eacute; preparado para utilizar ese nivel de seguridad, lo que no se puede conseguir con SSL, que necesita cliente y servidor preparados para utilizar ese nivel de seguridad.";
 choices[30][3] = "SSL sustituye al protocolo HTTP, aunque el cliente no est&eacute; preparado para utilizar ese nivel de seguridad, lo que no se puede conseguir con S-HTTP, que necesita cliente y servidor preparados para utilizar ese nivel de seguridad.";
 answers[30] = choices[30][0];
 units[30] = "111";
 comments[30] = "Id Pregunta: 3906. Junta Andaluc&iacute;a";


//  Id pregunta: 3914 AÃ±o de creación de pregunta: 2004-01-01
 questions[31]= "32)  En un entorno de red, un pinchado de l&iacute;nea puede causar:";
 choices[31]= new Array();
 choices[31][0] = "Uso excesivo de CPU";
 choices[31][1] = "Acceso no autorizado a datos";
 choices[31][2] = "a) y b)";
 choices[31][3] = "Ninguna de las anteriores";
 answers[31] = choices[31][1];
 units[31] = "111";
 comments[31] = "Id Pregunta: 3914. NULL";


//  Id pregunta: 4145 AÃ±o de creación de pregunta: 2006-01-01
 questions[32]= "33)  Un programa aparentemente in&oacute;cuo y &uacute;til que al instalarlo el usuario comienza a realizar acciones destructivas sobre el sistema en un momento determinado de tiempo o a ra&iacute;z de una acci&oacute;n concreta se llama";
 choices[32]= new Array();
 choices[32][0] = "sniffer";
 choices[32][1] = "bomba l&oacute;gica";
 choices[32][2] = "troyano";
 choices[32][3] = "gusano";
 answers[32] = choices[32][1];
 units[32] = "111";
 comments[32] = "Id Pregunta: 4145. NULL";


//  Id pregunta: 4151 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  El sistema de gesti&oacute;n de la seguridad que autoriza el acceso de usuarios a recursos en entorno OS/390 se llama";
 choices[33]= new Array();
 choices[33][0] = "ACF2";
 choices[33][1] = "RACF";
 choices[33][2] = "RADIUS";
 choices[33][3] = "CICS";
 answers[33] = choices[33][1];
 units[33] = "111";
 comments[33] = "Id Pregunta: 4151. NULL";


//  Id pregunta: 4161 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  En seguridad, que elemento no forma parte de los servicios de AAA";
 choices[34]= new Array();
 choices[34][0] = "Registro (accounting)";
 choices[34][1] = "Autorizaci&oacute;n";
 choices[34][2] = "Adaptaci&oacute;n";
 choices[34][3] = "Autenticaci&oacute;n";
 answers[34] = choices[34][2];
 units[34] = "111";
 comments[34] = "Id Pregunta: 4161. NULL";


//  Id pregunta: 4165 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  Cuando las tareas de operaci&oacute;n y programaci&oacute;n no est&aacute;n segregadas, el responsable de seguridad debe de proveer controles";
 choices[35]= new Array();
 choices[35][0] = "compensatorios";
 choices[35][1] = "administrativos";
 choices[35][2] = "correctivos";
 choices[35][3] = "de acceso";
 answers[35] = choices[35][0];
 units[35] = "111";
 comments[35] = "Id Pregunta: 4165. NULL";


//  Id pregunta: 4174 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  Si quiero autorizar a un usuario";
 choices[36]= new Array();
 choices[36][0] = "Le pido su nombre";
 choices[36][1] = "Le pido su DNI";
 choices[36][2] = "Compruebo la existencia de su nombre en una lista";
 choices[36][3] = "Le pregunto su n&uacute;mero de DNI";
 answers[36] = choices[36][2];
 units[36] = "111";
 comments[36] = "Id Pregunta: 4174. NULL";


//  Id pregunta: 4175 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  Un buen libro de claves podr&iacute;a ser";
 choices[37]= new Array();
 choices[37][0] = "Los n&uacute;meros primos de 128 cifras";
 choices[37][1] = "La gu&iacute;a de Paginas Blancas de Madrid 2005";
 choices[37][2] = "El CD &quot;Hung up&quot; de Madonna";
 choices[37][3] = "todas las anteriores";
 answers[37] = choices[37][3];
 units[37] = "111";
 comments[37] = "Id Pregunta: 4175. ";


//  Id pregunta: 4465 AÃ±o de creación de pregunta: 2007-01-01
 questions[38]= "39)  El algoritmo MD5:";
 choices[38]= new Array();
 choices[38][0] = "Es un algoritmo de cifrado asim&eacute;trico.";
 choices[38][1] = "Es un algoritmo de cifrado sim&eacute;trico.";
 choices[38][2] = "Es un algoritmo de funci&oacute;n hash.";
 choices[38][3] = "Es un algoritmo de almacenamiento de la clave privada";
 answers[38] = choices[38][2];
 units[38] = "72";
 comments[38] = "Id Pregunta: 4465. ";


//  Id pregunta: 4497 AÃ±o de creación de pregunta: 2007-01-01
 questions[39]= "40)  Una caracter&iacute;stica fundamental de XML signature es que:";
 choices[39]= new Array();
 choices[39][0] = " Puede firmar parte o Ia totalidad de un documento XML";
 choices[39][1] = "Puede firmar un documento RTF y convertirlo en un documento XML.";
 choices[39][2] = "Solo puede firmar un documento XML completo.";
 choices[39][3] = "Solo puede firmar documentos RTF.";
 answers[39] = choices[39][0];
 units[39] = "111";
 comments[39] = "Id Pregunta: 4497. NULL";


//  Id pregunta: 4750 AÃ±o de creación de pregunta: 2007-01-01
 questions[40]= "41)  Se&ntilde;ale la opci&oacute;n verdadera en relaci&oacute;n a las infraestructura de clave p&uacute;blica&hellip;";
 choices[40]= new Array();
 choices[40][0] = "Se ha de garantizar que ning&uacute;n usuario, salvo aquel para quien se ha generado una pareja de claves de un certificado, pueda jam&aacute;s llegar a disponer de ellas.";
 choices[40][1] = "La utilizaci&oacute;n de hardware criptogr&aacute;fico (HSM) tiene sentido en las Autoridades de Certificaci&oacute;n (CA) pero no as&iacute; en las Autoridades de Registro (RA)";
 choices[40][2] = "Es importante que la CA disponga de certificaci&oacute;n FIPS 140-2";
 choices[40][3] = "EMV es un tipo de certificado que no responde al est&aacute;ndar X.509";
 answers[40] = choices[40][3];
 units[40] = "74";
 comments[40] = "Id Pregunta: 4750. NULL";


//  Id pregunta: 4792 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  Seg&uacute;n establece la Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica, los certificados electr&oacute;nicos reconocidospueden tener un periodo m&aacute;ximo de validez de:";
 choices[41]= new Array();
 choices[41][0] = "Dos a&ntilde;os";
 choices[41][1] = "Tres a&ntilde;os";
 choices[41][2] = "Cuatro a&ntilde;os";
 choices[41][3] = "Cinco a&ntilde;os";
 answers[41] = choices[41][3];
 units[41] = "74";
 comments[41] = "Id Pregunta: 4792. NULL";


//  Id pregunta: 4840 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  &iquest;Cu&aacute;l de las siguientes afirmaciones en relaci&oacute;n a la firma digital es cierta?";
 choices[42]= new Array();
 choices[42][0] = "Ofrece plenas garant&iacute;as de la integridad, confidencialidad y no repudio del documento firmado";
 choices[42][1] = "Se puede conseguir mediante protocolos de cifrado de clave secreta";
 choices[42][2] = "El DSS (Digital Signature Standard) est&aacute; adoptado como una norma por ISO/IEC (International StandardsOrganization / International Electrotechnical Commission)";
 choices[42][3] = "La firma ciega (Blind signature) se obtiene firmando directamente el correspondiente mensaje, en vez delresumen de &eacute;ste";
 answers[42] = choices[42][1];
 units[42] = "74";
 comments[42] = "Id Pregunta: 4840. ";


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


//  Id pregunta: 5625 AÃ±o de creación de pregunta: 2003-01-01
 questions[45]= "46)  Indique cu&aacute;l de los siguientes no es un ataque en seguridad inform&aacute;tica";
 choices[45]= new Array();
 choices[45][0] = "Pharming";
 choices[45][1] = "Phishing ";
 choices[45][2] = "Gloofing";
 choices[45][3] = "Spoofing";
 answers[45] = choices[45][2];
 units[45] = "111";
 comments[45] = "Id Pregunta: 5625. NULL";


//  Id pregunta: 5696 AÃ±o de creación de pregunta: 2003-01-01
 questions[46]= "47)  Los certificados del DNI electr&oacute;nico:";
 choices[46]= new Array();
 choices[46][0] = "Se expiden voluntariamente a petici&oacute;n del ciudadano";
 choices[46][1] = " Se expiden siempre y vienen activados";
 choices[46][2] = "S&oacute;lo se expiden a quien autorice la Direcci&oacute;n General de la Polic&iacute;a";
 choices[46][3] = "Se expiden siempre, pero se activan voluntariamente con el consentimiento del ciudadano";
 answers[46] = choices[46][3];
 units[46] = "74";
 comments[46] = "Id Pregunta: 5696. NULL";


//  Id pregunta: 5697 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  &iquest;C&oacute;mo se conecta el DNI electr&oacute;nico al ordenador personal del ciudadano?";
 choices[47]= new Array();
 choices[47][0] = "Es necesario un lector de tarjetas espec&iacute;fico dise&ntilde;ado por la Direcci&oacute;n General de la Polic&iacute;a, que se puede obtener en las comisar&iacute;as";
 choices[47][1] = " A trav&eacute;s de un lector de tarjetas que cumpla el standard ISO-7816";
 choices[47][2] = "Con un lector de tarjetas espec&iacute;fico dise&ntilde;ado por la Direcci&oacute;n General de la Polic&iacute;a, que se puede obtener en establecimientos comerciales";
 choices[47][3] = "No es posible conectarlo a ordenadores personales, s&oacute;lo los especialmente habilitados para ello por la Direcci&oacute;n General de la Polic&iacute;a";
 answers[47] = choices[47][1];
 units[47] = "74";
 comments[47] = "Id Pregunta: 5697. NULL";


//  Id pregunta: 5744 AÃ±o de creación de pregunta: 2009-01-01
 questions[48]= "49)  En criptograf&iacute;a sim&eacute;trica, &iquest;qu&eacute; es una sustituci&oacute;n monogr&aacute;mica?";
 choices[48]= new Array();
 choices[48][0] = "La que cifra los caracteres de uno en uno";
 choices[48][1] = "La que sustituye cada letra por varias letras";
 choices[48][2] = "Aquella en que cada letra es sustituidad siempre por la misma dentro de un mismo mensaje";
 choices[48][3] = "La que sustituye las letras en grupos de longitud variable, dependiendo de su posici&oacute;n dentro del mensaje";
 answers[48] = choices[48][0];
 units[48] = "72";
 comments[48] = "Id Pregunta: 5744. ";


//  Id pregunta: 5749 AÃ±o de creación de pregunta: 2009-01-01
 questions[49]= "50)  &iquest;Cu&aacute;l de los siguientes elementos no es obligatorio en una firma CAdES-BES?";
 choices[49]= new Array();
 choices[49][0] = "Definici&oacute;n del tipo de contenido";
 choices[49][1] = "Resumen del mensaje";
 choices[49][2] = "Sello de tiempo";
 choices[49][3] = "Atributos identificativos del certificado del firmante";
 answers[49] = choices[49][2];
 units[49] = "73";
 comments[49] = "Id Pregunta: 5749. ";


//  Id pregunta: 5866 AÃ±o de creación de pregunta: 2009-01-01
 questions[50]= "51)  El protocolo Secure Shell, definido en la RFC (IETF Request for Comment) 4251:";
 choices[50]= new Array();
 choices[50][0] = "Permite la negociaci&oacute;n de los algoritmos criptogr&aacute;ficos a usar";
 choices[50][1] = "Proporciona, entre otros, los servicios de confidencialidad, no repudio e integridad";
 choices[50][2] = "Opcionalmente admite compresi&oacute;n, que en este caso debe aplicarse tras el cifrado del paquete";
 choices[50][3] = "Trabaja tanto sobre TCP como sobre UDP";
 answers[50] = choices[50][0];
 units[50] = "111";
 comments[50] = "Id Pregunta: 5866. MAP 2008 A1";


//  Id pregunta: 5881 AÃ±o de creación de pregunta: 2009-01-01
 questions[51]= "52)  Por IP-SPOOFING entendemos:";
 choices[51]= new Array();
 choices[51][0] = "Captura de passwords";
 choices[51][1] = "Uso fraudulento de direcciones de enlace";
 choices[51][2] = "Suplantaci&oacute;n de direcciones de red";
 choices[51][3] = "Propagaci&oacute;n de virus";
 answers[51] = choices[51][2];
 units[51] = "111";
 comments[51] = "Id Pregunta: 5881. MAP 2008 A1";


//  Id pregunta: 6100 AÃ±o de creación de pregunta: 2010-01-01
 questions[52]= "53)  Acerca de las Autoridades de sellado de tiempo:";
 choices[52]= new Array();
 choices[52][0] = "Para expedir su certificado precisan conocer en su integridad el documento.";
 choices[52][1] = "En el modo de registros encadenados aplican iterativamente una funci&oacute;n resumen (hash) a la concatenaci&oacute;n del resumen del mensaje a sellar con el resultado de la iteraci&oacute;n anterior.";
 choices[52][2] = "En el modo de firma digital firman la concatenaci&oacute;n de los mensajes a sellar con el tiempo.";
 choices[52][3] = "No pueden ser simult&aacute;neamente Prestadores de Servicios de Certificaci&oacute;n seg&uacute;n la definici&oacute;n que de &eacute;stos da la Ley 59/2003 de firma electr&oacute;nica.";
 answers[52] = choices[52][1];
 units[52] = "74";
 comments[52] = "Id Pregunta: 6100. TIC A 2009";


//  Id pregunta: 6539 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)  Cu&aacute;l de las siguientes opciones no es una tecnolog&iacute;a de administraci&oacute;n de seguridad centralizadas?";
 choices[53]= new Array();
 choices[53][0] = "TACACS+";
 choices[53][1] = "Radius";
 choices[53][2] = "Un grupo de trabajo peer-to-peer";
 choices[53][3] = "Diameter";
 answers[53] = choices[53][2];
 units[53] = "111";
 comments[53] = "Id Pregunta: 6539. NULL";


//  Id pregunta: 6544 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  La informaci&oacute;n puede obtenerse a trav&eacute;s de se&ntilde;ales el&eacute;ctricas en las ondas. Una forma de combatirlo es a trav&eacute;s de";
 choices[54]= new Array();
 choices[54][0] = "Tempest";
 choices[54][1] = "Ruido Blanco";
 choices[54][2] = "Zonas de control";
 choices[54][3] = "Todas las respuestas anteriores son correctas";
 answers[54] = choices[54][3];
 units[54] = "111";
 comments[54] = "Id Pregunta: 6544. NULL";


//  Id pregunta: 6545 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  La autenticaci&oacute;n fuerte requiere dos de los tres atributos de autenticaci&oacute;n, de entre los que se encuentran";
 choices[55]= new Array();
 choices[55][0] = "Algo que alguien sabe";
 choices[55][1] = "Algo que alguien tiene";
 choices[55][2] = "A y B son correctas";
 choices[55][3] = "A y B son incorrectas";
 answers[55] = choices[55][2];
 units[55] = "111";
 comments[55] = "Id Pregunta: 6545. NULL";


//  Id pregunta: 6554 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  PKCS#12";
 choices[56]= new Array();
 choices[56][0] = "Especifica un formato portable para almacenar o transportar las claves privadas de un usuario";
 choices[56][1] = "Especifica una API, por la que los dispositivos que contienen informaci&oacute;n criptogr&aacute;fica realizan funciones criptogr&aacute;ficas";
 choices[56][2] = "El formato del sobre digital";
 choices[56][3] = "La especificaci&oacute;n de un interfaz de acceso a dispositivos que almacenan informaci&oacute;n";
 answers[56] = choices[56][0];
 units[56] = "74";
 comments[56] = "Id Pregunta: 6554. NULL";


//  Id pregunta: 7173 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  &iquest;Qu&eacute; algoritmo de cifrado fue designado por la Administraci&oacute;n Federal Americana como est&aacute;ndar de cifrado sucesor del algoritmo DES?";
 choices[57]= new Array();
 choices[57][0] = "Triple DES";
 choices[57][1] = "AES";
 choices[57][2] = "IDEA";
 choices[57][3] = "Blowfish";
 answers[57] = choices[57][1];
 units[57] = "72";
 comments[57] = "Id Pregunta: 7173. Examen TIC B 2009";


//  Id pregunta: 7179 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  Revocar un certificado electr&oacute;nico significa:";
 choices[58]= new Array();
 choices[58][0] = "Extender su validez m&aacute;s all&aacute; del tiempo l&iacute;mite inicialmente establecido";
 choices[58][1] = "Anular su validez antes de la fecha de caducidad que consta en el mismo";
 choices[58][2] = "Agotar su vida &uacute;til al haberse llegado al l&iacute;mite de vigencia del mismo";
 choices[58][3] = "Desacoplar un certificado de la tarjeta criptogr&aacute;fica en la que reside";
 answers[58] = choices[58][1];
 units[58] = "74";
 comments[58] = "Id Pregunta: 7179. Examen TIC B 2009";


//  Id pregunta: 7338 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  ASCII es el acr&oacute;nimo de:";
 choices[59]= new Array();
 choices[59][0] = "American Standard Code for Information Integration";
 choices[59][1] = "Alliance Standard Code Interchange Integration";
 choices[59][2] = "American Standard Code for Information Interchange";
 choices[59][3] = "All sugar can injure igloos";
 answers[59] = choices[59][2];
 units[59] = "72";
 comments[59] = "Id Pregunta: 7338. NULL";


//  Id pregunta: 7342 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  &iquest;Cu&aacute;l de los siguientes NO es un modo de operaci&oacute;n del algoritmo DES?";
 choices[60]= new Array();
 choices[60][0] = "ECB";
 choices[60][1] = "OCB";
 choices[60][2] = "CBC";
 choices[60][3] = "OFB";
 answers[60] = choices[60][1];
 units[60] = "72";
 comments[60] = "Id Pregunta: 7342. NULL";


//  Id pregunta: 7344 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  El grupo de est&aacute;ndares de criptograf&iacute;a de clave p&uacute;blica, PKCS (Public Key Cryptography Standars), son publicados por:";
 choices[61]= new Array();
 choices[61][0] = "IEEE";
 choices[61][1] = "IETF";
 choices[61][2] = "RSA";
 choices[61][3] = "DES";
 answers[61] = choices[61][2];
 units[61] = "72";
 comments[61] = "Id Pregunta: 7344. NULL";


//  Id pregunta: 7346 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  &iquest;Qu&eacute; es HSM?";
 choices[62]= new Array();
 choices[62][0] = "Un dispositivo criptogr&aacute;fico basado en hardware  que genera, almacena y protege claves criptogr&aacute;ficas";
 choices[62][1] = "Un algoritmo de clave p&uacute;blica";
 choices[62][2] = "Un API gen&eacute;rico de acceso a dispositivos criptogr&aacute;ficos";
 choices[62][3] = "Un conjunto de pol&iacute;ticas de seguridad en el &aacute;mbito de la criptograf&iacute;a de clave p&uacute;bica";
 answers[62] = choices[62][0];
 units[62] = "72";
 comments[62] = "Id Pregunta: 7346. NULL";


//  Id pregunta: 8286 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  Un prestador de servicios de certificaci&oacute;n, &iquest;durante qu&eacute; per&iacute;odo de tiempo tiene que conservar la informaci&oacute;n relativa a los certificados reconocidos expedidos, de manera que puedan verificarse las firmas efectuadas con los mismos, de acuerdo a lo dispuesto en la Ley 59/2003, de 19 de diciembre, de Firma electr&oacute;nica? ";
 choices[63]= new Array();
 choices[63][0] = "Al menos durante 15 a&ntilde;os contados desde la fecha de fin de validez del certificado,";
 choices[63][1] = "Al menos durante 15 a&ntilde;os contados desde el momento de su expedici&oacute;n";
 choices[63][2] = "Un m&aacute;ximo de 15 a&ntilde;os contados desde la fecha de fin de validez del certificado.";
 choices[63][3] = "Un m&aacute;ximo de 15 a&ntilde;os contados desde el momento de su expedici&oacute;n. ";
 answers[63] = choices[63][1];
 units[63] = "74";
 comments[63] = "Id Pregunta: 8286. Examen TIC A2 2010";


//  Id pregunta: 8303 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  En relaci&oacute;n a IPSec se&ntilde;ale la opci&oacute;n INCORRECTA:";
 choices[64]= new Array();
 choices[64][0] = "Se defini&oacute; originariamente en las RFCs 1825 y 1829.";
 choices[64][1] = "Tanto AH (Authentication Header) como ESP (Encapsulating Security Payload) proporcionan integridad y autenticaci&oacute;n en la comunicaci&oacute;n.";
 choices[64][2] = "En modo transporte con AH no es posible traducir direcciones mediante NAT transversal.";
 choices[64][3] = "ESP debe implementar obligatoriamente el algoritmo AES-CBC con claves de 128 bits";
 answers[64] = choices[64][2];
 units[64] = "111";
 comments[64] = "Id Pregunta: 8303. Examen TIC A2 2010";


//  Id pregunta: 8305 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  &iquest;Cu&aacute;l de los siguientes perfiles de XAdES incluye los certificados y listas de revocaci&oacute;n (consultas OCSP o CRLs) para poder verificar el documento firmado en el futuro incluso si las fuentes originales no estuvieran disponibles?";
 choices[65]= new Array();
 choices[65][0] = "XAdES-X.";
 choices[65][1] = "XAdES-X-L.";
 choices[65][2] = "XAdES-C. ";
 choices[65][3] = "Esta funcionalidad no se soporta en XAdES.";
 answers[65] = choices[65][1];
 units[65] = "72, 73, 74";
 comments[65] = "Id Pregunta: 8305. Examen TIC A2 2010";


//  Id pregunta: 8511 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  De las siguientes normas, &iquest;cu&aacute;l est&aacute; referida al c&oacute;digo de buenas pr&aacute;cticas en gesti&oacute;n de la seguridad de la Informaci&oacute;n?";
 choices[66]= new Array();
 choices[66][0] = "ISO/lEC 13335-2.";
 choices[66][1] = "ISO/lEC 27002:2013.";
 choices[66][2] = "UNE 71502:2004.";
 choices[66][3] = "ISO 10646.";
 answers[66] = choices[66][1];
 units[66] = "111";
 comments[66] = "Id Pregunta: 8511. Examen TIC A2 2010";


//  Id pregunta: 8513 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  En el contexto de la seguridad l&oacute;gica, si hablamos de una bomba l&oacute;gica &iquest;cu&aacute;l de las siguientes afirmaciones es verdadera? ";
 choices[67]= new Array();
 choices[67][0] = "El c&oacute;digo se replica al activarse";
 choices[67][1] = "Su efecto es retardado. ";
 choices[67][2] = "No se activan por eventos. ";
 choices[67][3] = "Es otra manera de referirse a los troyanos. ";
 answers[67] = choices[67][1];
 units[67] = "111";
 comments[67] = "Id Pregunta: 8513. Examen TIC A2 2010";


//  Id pregunta: 8525 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  Los routers para filtrado de paquetes (&quot;packet filtering&quot;):";
 choices[68]= new Array();
 choices[68][0] = "Son cortafuegos (firewalls) que operan en el nivel de aplicaci&oacute;n en su modalidad &quot;stateful inspection&quot;.";
 choices[68][1] = "Son firewalls que operan en el nivel de aplicaci&oacute;n en su modalidad &quot;stateless inspection&quot;.";
 choices[68][2] = "No son firewalls, sino dispositivos de encaminamiento (&quot;routing&quot;) que se pueden conectar a un cortafuegos como complemento de &eacute;ste";
 choices[68][3] = "Son firewalls que operan en el nivel de red.";
 answers[68] = choices[68][3];
 units[68] = "111";
 comments[68] = "Id Pregunta: 8525. Examen TIC A2 2010 interna";


//  Id pregunta: 8528 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  En IPSec, el modo de funcionamiento en el que s&oacute;lo los datos son cifrados o autenticados, y el enrutamiento permanece intacto por lo que asegura la comunicaci&oacute;n extremo a extremo, se denomina:";
 choices[69]= new Array();
 choices[69][0] = "Modo t&uacute;nel.";
 choices[69][1] = "Modo transporte.";
 choices[69][2] = "Modo encapsulado.";
 choices[69][3] = "Modo transparente.";
 answers[69] = choices[69][1];
 units[69] = "111";
 comments[69] = "Id Pregunta: 8528. Examen TIC A2 2010 interna";


//  Id pregunta: 8669 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  Cu&aacute;l de los siguientes elementos de seguridad opera en el nivel 3 del modelo OSI";
 choices[70]= new Array();
 choices[70][0] = "Proxy";
 choices[70][1] = "Firewall de filtrado de paquetes";
 choices[70][2] = "Antivirus";
 choices[70][3] = "Filtro anti SPAM";
 answers[70] = choices[70][1];
 units[70] = "111";
 comments[70] = "Id Pregunta: 8669. Examen UPM A2 2011";


//  Id pregunta: 8673 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  El protocolo OCSP, se utiliza en:";
 choices[71]= new Array();
 choices[71][0] = "la validaci&oacute;n en tiempo real del certificado digital";
 choices[71][1] = "comprobaci&oacute;n de la validez de una trama";
 choices[71][2] = "la comunicaci&oacute;n entre sistemas abiertos";
 choices[71][3] = "la validaci&oacute;n de la direcci&oacute;n de origen de un equipo";
 answers[71] = choices[71][0];
 units[71] = "74";
 comments[71] = "Id Pregunta: 8673. Examen UPM A2 2011";


//  Id pregunta: 8896 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  &iquest;Qu&eacute; grupos de operaciones est&aacute;n definidas en el modelo funcional de LDAP?";
 choices[72]= new Array();
 choices[72][0] = "De consulta, de actualizaci&oacute;n y de b&uacute;squeda";
 choices[72][1] = "De b&uacute;squeda, de actualizaci&oacute;n y de control";
 choices[72][2] = "De consulta, de actualizaci&oacute;n y de autenticaci&oacute;n y control";
 choices[72][3] = "De comparaci&oacute;n, de consulta y de b&uacute;squeda";
 answers[72] = choices[72][1];
 units[72] = "74";
 comments[72] = "Id Pregunta: 8896. NULL";


//  Id pregunta: 8924 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  Las siglas SSL y TLS se refieren a:";
 choices[73]= new Array();
 choices[73][0] = "Diferentes estados l&oacute;gicos del microprocesador.";
 choices[73][1] = "Protocolos criptogr&aacute;ficos para establecer conexiones seguras a trav&eacute;s de una red.";
 choices[73][2] = "Sistemas de localizaci&oacute;n geod&eacute;sica para GPS.";
 choices[73][3] = "Diferentes tipos de memoria f&iacute;sica";
 answers[73] = choices[73][1];
 units[73] = "111";
 comments[73] = "Id Pregunta: 8924. Operador Ayto. Madrid 2010";


//  Id pregunta: 9767 AÃ±o de creación de pregunta: 2014-01-01
 questions[74]= "75)  El ataque a SSL/TLS que permite extraer informaci&oacute;n sobre los tokens de login, email, etc en 30 segundos se llama:";
 choices[74]= new Array();
 choices[74][0] = "Beast Attack";
 choices[74][1] = "Crime";
 choices[74][2] = "Breach";
 choices[74][3] = "No existe dicho ataque";
 answers[74] = choices[74][2];
 units[74] = "111";
 comments[74] = "Id Pregunta: 9767. NULL";


//  Id pregunta: 9840 AÃ±o de creación de pregunta: 2014-01-01
 questions[75]= "76)  &iquest;Cu&aacute;l de las siguientes opciones est&aacute; considerada como la caracter&iacute;stica m&aacute;s segura de una red WLAN?";
 choices[75]= new Array();
 choices[75][0] = "Configuraci&oacute;n de SSID (Service Ser Identifier).";
 choices[75][1] = "Clave WEP.";
 choices[75][2] = "Selecci&oacute;n del canal.";
 choices[75][3] = "Configuraci&oacute;n de la energ&iacute;a.";
 answers[75] = choices[75][1];
 units[75] = "111";
 comments[75] = "Id Pregunta: 9840. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Arag&oacute;n 2013";


//  Id pregunta: 9845 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  El algoritmo RSA es un algoritmo:";
 choices[76]= new Array();
 choices[76][0] = "De triple clave.";
 choices[76][1] = "Asim&eacute;trico.";
 choices[76][2] = "De clave privada.";
 choices[76][3] = "Sim&eacute;trico.";
 answers[76] = choices[76][1];
 units[76] = "111";
 comments[76] = "Id Pregunta: 9845. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Extremadura 2014";


//  Id pregunta: 9852 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  &iquest;Cu&aacute;l de los siguientes puertos es el puerto est&aacute;ndar de POP3 sobre SSL?";
 choices[77]= new Array();
 choices[77][0] = "995";
 choices[77][1] = "993";
 choices[77][2] = "220";
 choices[77][3] = "465";
 answers[77] = choices[77][0];
 units[77] = "111";
 comments[77] = "Id Pregunta: 9852. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Extremadura 2014";


//  Id pregunta: 9856 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  Un programa malicioso capaz de alojarse en computadoras y permitir el acceso a usuarios externos, a trav&eacute;s de una red local o de Internet, con el fin de recabar informaci&oacute;n o controlar remotamente a la m&aacute;quina anfitriona, se denomina: ";
 choices[78]= new Array();
 choices[78][0] = "Un caballo de Troya.";
 choices[78][1] = "Un virus.";
 choices[78][2] = "Un gusano.";
 choices[78][3] = "El tal&oacute;n de Aquiles.";
 answers[78] = choices[78][0];
 units[78] = "111";
 comments[78] = "Id Pregunta: 9856. Examen Gesti&oacute;n de Inform&aacute;tica Universidad de Granada 2012";


//  Id pregunta: 9858 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  Si el usuario A desea enviar un documento firmado digitalmente por &eacute;l al usuario B:";
 choices[79]= new Array();
 choices[79][0] = "El usuario A debe enviar el documento acompa&ntilde;ado del documento cifrado con la clave p&uacute;blica de B.";
 choices[79][1] = "El usuario A debe enviar el documento acompa&ntilde;ado del resultado de aplicar la funci&oacute;n hash al documento y &eacute;ste cifrado con la clave p&uacute;blica de B.";
 choices[79][2] = "El usuario A debe enviar el documento acompa&ntilde;ado del resultado de aplicar la funci&oacute;n hash al documento y &eacute;ste cifrado con la clave privada de A.";
 choices[79][3] = "El usuario A debe enviar el documento cifrado con la clave p&uacute;blica de B acompa&ntilde;ado del resultado de aplicar la funci&oacute;n hash al documento y todo cifrado con la clave privada de A.";
 answers[79] = choices[79][2];
 units[79] = "111";
 comments[79] = "Id Pregunta: 9858. Examen TIC del Servicio de Salud de Extremadura 2014";


//  Id pregunta: 9894 AÃ±o de creación de pregunta: 2010-01-01
 questions[80]= "81)  Ordene de forma decreciente, en relaci&oacute;n al coste en hardware (puertas l&oacute;gicasequivalentes), las siguientes primitivas criptogr&aacute;ficas: funci&oacute;n resumen (ej. MD5 o SHA-1), cifrado asim&eacute;trico (ej. RSA o curvas el&iacute;pticas) y cifrado sim&eacute;trico (ej. AES o DES).";
 choices[80]= new Array();
 choices[80][0] = "Funci&oacute;n resumen, Cifrado asim&eacute;trico, Cifrado sim&eacute;trico.";
 choices[80][1] = "Funci&oacute;n resumen, Cifrado sim&eacute;trico, Cifrado asim&eacute;trico.";
 choices[80][2] = "Cifrado asim&eacute;trico, Cifrado sim&eacute;trico, Funci&oacute;n resumen.";
 choices[80][3] = "Cifrado asim&eacute;trico, Funci&oacute;n resumen, Cifrado sim&eacute;trico.";
 answers[80] = choices[80][3];
 units[80] = "111";
 comments[80] = "Id Pregunta: 9894. TIC A1, Examen 2013";


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


//  Id pregunta: 10471 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  En una PKI:";
 choices[82]= new Array();
 choices[82][0] = "Un certificado se a&ntilde;ade a una CRL en cuanto se tiene conocimiento de que hay motivos para su revocaci&oacute;n.";
 choices[82][1] = "Las CRLs incluyen todos los certificados emitidos por una CA.";
 choices[82][2] = "Un certificado revocado es eliminado de una CRL en cuanto se emite un nuevo certificado de las mismas caracter&iacute;sticas para el titular del certificado revocado. ";
 choices[82][3] = "No es obligatorio que una CA emita CRLs si proporciona otro mecanismo de consulta del estado de los certificados.";
 answers[82] = choices[82][3];
 units[82] = "73";
 comments[82] = "Id Pregunta: 10471. ";


//  Id pregunta: 10474 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  En el &aacute;mbito de los certificados X.509:";
 choices[83]= new Array();
 choices[83][0] = "La CA de la PKI debe proporcional protocolos de gesti&oacute;n de certificados (registro, recuperaci&oacute;n de claves, etc) dsiponibles online.";
 choices[83][1] = "Una CRL es una lista de certificados revocados con un timestamp que determina su fecha de emisi&oacute;n y firmada en todo caso por la CA que emite los certificados.";
 choices[83][2] = "Una CRL tiene un alcance que define el tipo de certificados que incluir&aacute; dicha lista.";
 choices[83][3] = "Un certificado se a&ntilde;ade a la CRL en la siguiente actualizaci&oacute;n seg&uacute;n la pol&iacute;tica de actualizaciones definida.";
 answers[83] = choices[83][3];
 units[83] = "73";
 comments[83] = "Id Pregunta: 10474. ";


//  Id pregunta: 10496 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  &iquest;Cual de las siguientes es una implementaci&oacute;n del protocolo LDAP?";
 choices[84]= new Array();
 choices[84][0] = "eDirectory";
 choices[84][1] = "iPlanet";
 choices[84][2] = "Active Directory";
 choices[84][3] = "Todos lo son";
 answers[84] = choices[84][3];
 units[84] = "74, 106";
 comments[84] = "Id Pregunta: 10496. eDirectory es la implementaci&oacute;n de Novell, e iPlanet la de Sun";


//  Id pregunta: 10887 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  &iquest;Cu&aacute;l de los siguientes protocolos permite conocer en tiempo real si un certificado ha sido o no revocado?";
 choices[85]= new Array();
 choices[85][0] = "OCSP";
 choices[85][1] = "CRL";
 choices[85][2] = "PKCS#10";
 choices[85][3] = "HTTPS";
 answers[85] = choices[85][0];
 units[85] = "73, 74";
 comments[85] = "Id Pregunta: 10887. Examen GSI 2014";


//  Id pregunta: 10899 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  &iquest;Cu&aacute;l de los siguientes modos de funcionamiento NO se corresponde con el algoritmo de cifrado DES?";
 choices[86]= new Array();
 choices[86][0] = "Modo ECB (Electronic CodeBook).";
 choices[86][1] = "Modo CBC (Cipher Block Chaining).";
 choices[86][2] = "Modo OFB (Output FeedBack).";
 choices[86][3] = "Modo UBC (Uncipher Block Chaining).";
 answers[86] = choices[86][3];
 units[86] = "73, 74";
 comments[86] = "Id Pregunta: 10899. Examen GSI 2014";


//  Id pregunta: 10900 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  Atendiendo &uacute;nicamente a criterios de eficiencia en tiempo, &iquest;cu&aacute;l de los siguientes m&eacute;todos ser&iacute;a el m&aacute;s eficiente para securizar las comunicaciones entre usuarios dentro de una red?";
 choices[87]= new Array();
 choices[87][0] = "Mediante claves sim&eacute;tricas.";
 choices[87][1] = "Mediante claves asim&eacute;tricas.";
 choices[87][2] = "Mediante claves sim&eacute;tricas compartidas peri&oacute;dicamente con claves asim&eacute;tricas.";
 choices[87][3] = "Mediante claves asim&eacute;tricas compartidas peri&oacute;dicamente con claves sim&eacute;tricas.";
 answers[87] = choices[87][0];
 units[87] = "73, 74";
 comments[87] = "Id Pregunta: 10900. Examen GSI 2014";


//  Id pregunta: 10902 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  La arquitectura de cortafuegos que combina un router con un host basti&oacute;n y donde el principal nivel de seguridad proviene del filtrado de paquetes se denomina:";
 choices[88]= new Array();
 choices[88][0] = "Screened Subnet.";
 choices[88][1] = "Dual-Homed Host.";
 choices[88][2] = "Router-Homed Host.";
 choices[88][3] = "Screened Host.";
 answers[88] = choices[88][3];
 units[88] = "111";
 comments[88] = "Id Pregunta: 10902. Examen GSI 2014";


//  Id pregunta: 10983 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  Respecto a los ficheros de firma electr&oacute;nica y los documentos firmados electr&oacute;nicamente, se&ntilde;ale la respuesta correcta:";
 choices[89]= new Array();
 choices[89][0] = "El documento firmado siempre va inclu&iacute;do en el fichero de firma, tanto en XAdES como en CAdES.";
 choices[89][1] = "En CAdES, el documento puede no incluirse en el fichero de firma. Estas firmas se llaman expl&iacute;citas.";
 choices[89][2] = "El documento firmado se incluye en el fichero de firma en XAdES, y no se puede incluir en CAdES.";
 choices[89][3] = "En XAdES, s&oacute;lo se puede firmar de forma impl&iacute;cita, en la que el documento no se incluye en el resultado de firma y solamente se incluye una referencia al lugar en el que se encuentra.";
 answers[89] = choices[89][1];
 units[89] = "72";
 comments[89] = "Id Pregunta: 10983. TIC A1 AGE 2014";


//  Id pregunta: 11053 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  &iquest;Cu&aacute;l NO es una extensi&oacute;n v&aacute;lida para certificados?";
 choices[90]= new Array();
 choices[90][0] = ".PFX";
 choices[90][1] = ".DER";
 choices[90][2] = ".P7B";
 choices[90][3] = "Todos lo son";
 answers[90] = choices[90][3];
 units[90] = "73";
 comments[90] = "Id Pregunta: 11053. ";


//  Id pregunta: 11088 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Sal (salt) en criptograf&iacute;a&hellip;";
 choices[91]= new Array();
 choices[91][0] = "Es un algoritmo de cifrado de bloques";
 choices[91][1] = "Comprende bits aleatorios que se usan como una de las entradas en una funci&oacute;n derivadora de claves.";
 choices[91][2] = "Las sales hacen mucho m&aacute;s lentos los ataques de diccionario y los ataques de fuerza bruta";
 choices[91][3] = "B y C son correctas";
 answers[91] = choices[91][3];
 units[91] = "72";
 comments[91] = "Id Pregunta: 11088. ";


//  Id pregunta: 11256 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l es la equivalencia en criptograf&iacute;a asim&eacute;trica a una longitud de clave de 112 bits en criptograf&iacute;a sim&eacute;trica?";
 choices[92]= new Array();
 choices[92][0] = "1102 bits.";
 choices[92][1] = "1768 bits.";
 choices[92][2] = "2048 bits.";
 choices[92][3] = "3072 bits.";
 answers[92] = choices[92][2];
 units[92] = "72";
 comments[92] = "Id Pregunta: 11256. ";


//  Id pregunta: 11508 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  El tipo de control de acceso a usuarios que establece que todo recurso del sistema tiene una etiqueta de seguridad compuesta por el nivel de seguridad y el recurso al que se quiere acceder, se denomina.";
 choices[93]= new Array();
 choices[93][0] = "DAC";
 choices[93][1] = "RBAC";
 choices[93][2] = "MAC";
 choices[93][3] = "Ninguno de los anteriores.";
 answers[93] = choices[93][2];
 units[93] = "72";
 comments[93] = "Id Pregunta: 11508. NULL";


//  Id pregunta: 11520 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Al instalar un cortafuegos en un servidor web, a&ntilde;adimos un mecanismo de salvaguarda que incrementa los niveles de:";
 choices[94]= new Array();
 choices[94][0] = "Confidencialidad.";
 choices[94][1] = "Disponibilidad.";
 choices[94][2] = "Integridad.";
 choices[94][3] = "Todas las anteriores.";
 answers[94] = choices[94][3];
 units[94] = "72";
 comments[94] = "Id Pregunta: 11520. NULL";


//  Id pregunta: 11667 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  XACML es:";
 choices[95]= new Array();
 choices[95][0] = "Un est&aacute;ndar de firma de documentos.";
 choices[95][1] = "Un est&aacute;ndar que define un esquema XML para el intercambio de autorizaci&oacute;n y autenticaci&oacute;n.";
 choices[95][2] = "Un est&aacute;ndar basado en la especificaci&oacute;n XML para definir pol&iacute;ticas de control de acceso.";
 choices[95][3] = "Especifica un proceso para cifrar datos y representar esa informaci&oacute;n cifrada en XML.";
 answers[95] = choices[95][2];
 units[95] = "111";
 comments[95] = "Id Pregunta: 11667. ";


//  Id pregunta: 11693 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Qu&eacute; es PAT?";
 choices[96]= new Array();
 choices[96][0] = "Port Address Translation";
 choices[96][1] = "Protocol Access Translation";
 choices[96][2] = "Port Acknowledge Timeout";
 choices[96][3] = "PDU access token";
 answers[96] = choices[96][0];
 units[96] = "111";
 comments[96] = "Id Pregunta: 11693. NULL";


//  Id pregunta: 11709 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  En el &aacute;mbito de la seguridad,&iquest;a qu&eacute; atienden las siglas AAA?";
 choices[97]= new Array();
 choices[97][0] = "Authentication, Authorization and Accounting";
 choices[97][1] = "Acknowledge, Authorization and Accounting";
 choices[97][2] = "Authentication, Authorization and Access";
 choices[97][3] = "Authentication, Approval and Accounting";
 answers[97] = choices[97][0];
 units[97] = "111";
 comments[97] = "Id Pregunta: 11709. NULL";


//  Id pregunta: 11722 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Qu&eacute; metodo de acceso es utilizado para establecer conexiones remotas de linea de comandos, manteniendo el ID de usuario, la contrase&ntilde;a y los contenidos de la sesi&oacute;n de manera privada?";
 choices[98]= new Array();
 choices[98][0] = "Telnet";
 choices[98][1] = "Consola";
 choices[98][2] = "Puerto auxiliar";
 choices[98][3] = "SSH";
 answers[98] = choices[98][3];
 units[98] = "111";
 comments[98] = "Id Pregunta: 11722. NULL";


//  Id pregunta: 11727 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Qu&eacute; afirmaci&oacute;n describe una caracter&iacute;stica de IPsec?";
 choices[99]= new Array();
 choices[99][0] = "IPsec puede proteger el tr&aacute;fico en las capas 1 a 3.";
 choices[99][1] = "IPsec funciona independiente del protocolo de capa 2";
 choices[99][2] = "El cifrado puede causar problemas con el enrutamiento.";
 choices[99][3] = "Se trata de una suite propietaria";
 answers[99] = choices[99][1];
 units[99] = "111";
 comments[99] = "Id Pregunta: 11727. NULL";


