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

//  Id pregunta: 757 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  &iquest;De las siguientes API's cual no es un API de desarrollo de tarjetas inteligentes?";
 choices[0]= new Array();
 choices[0][0] = "CryptoAPI";
 choices[0][1] = "PKCS#7";
 choices[0][2] = "PKCS#11";
 choices[0][3] = "JCE/JCA";
 answers[0] = choices[0][1];
 units[0] = "74";
 comments[0] = "Id Pregunta: 757. NULL";


//  Id pregunta: 889 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;C&uacute;al o c&uacute;ales de los siguientes sistemas de criptograf&iacute;a pueden encontrarse dentro de la criptograf&iacute;a sim&eacute;trica?:";
 choices[1]= new Array();
 choices[1][0] = "De bloques (block cipher),  de flujos (stream cipher) y de res&uacute;men (hash function)";
 choices[1][1] = "De flujos (stream cipher), de res&uacute;men (hash function) y de sigilo (stealth cipher)";
 choices[1][2] = "De bloques (block cipher),  de ocultamiento (conceal cipher) y de sellado de tiempo (time stamping cipher)";
 choices[1][3] = "Las respuestas &lsquo;b&rsquo; y &lsquo;c&rsquo; son correctas";
 answers[1] = choices[1][0];
 units[1] = "72";
 comments[1] = "Id Pregunta: 889. ";


//  Id pregunta: 939 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;Qu&eacute; se entiende por autoridad de certificaci&oacute;n?:";
 choices[2]= new Array();
 choices[2][0] = "Un juez";
 choices[2][1] = "Una compa&ntilde;&iacute;a que certifica la seguridad de sus sistemas En la actualidad s&oacute;lo puede considerarse a Microsoft como tal,";
 choices[2][2] = "Son &oacute;rganos administrativos dependientes del Consejo Superior de Inform&aacute;tica que dictan las normas de certificaci&oacute;n digital, de acuerdo a las Directivas de la Uni&oacute;n Europea";
 choices[2][3] = "Son entidades que expiden certificados digitales de manera que garantizan la correspondencia entre la identidad de un usuario y su par de claves";
 answers[2] = choices[2][3];
 units[2] = "74";
 comments[2] = "Id Pregunta: 939. NULL";


//  Id pregunta: 981 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  De los siguientes algoritmos cript&oacute;graficos se&ntilde;ale cu&aacute;l es de clave p&uacute;blica:";
 choices[3]= new Array();
 choices[3][0] = "DES (Data Encryption Standard)";
 choices[3][1] = "RSA (Rivest, Shamir, Adelman)";
 choices[3][2] = "IDEA (International Data Encryption Algorithm)";
 choices[3][3] = "LOKI";
 answers[3] = choices[3][1];
 units[3] = "72";
 comments[3] = "Id Pregunta: 981. ";


//  Id pregunta: 991 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  Dentro del proyecto CERES, es posible disponer de tarjetas criptogr&aacute;ficas para entregar a los ciudadanos &iquest;Qu&eacute; funcionalidades proporcionan dichas tarjetas desde el punto de vista de la seguridad?:";
 choices[4]= new Array();
 choices[4][0] = "Autenticaci&oacute;n e integridad, &uacute;nicamente";
 choices[4][1] = "Autenticaci&oacute;n, integridad y confidencialidad, &uacute;nicamente";
 choices[4][2] = "Autenticaci&oacute;n, integridad y confidencialidad y no repudio en origen";
 choices[4][3] = "Autenticaci&oacute;n, integridad y confidencialidad y no repudio en destino";
 answers[4] = choices[4][2];
 units[4] = "74";
 comments[4] = "Id Pregunta: 991. NULL";


//  Id pregunta: 1002 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  El cifrado DES - EDE (Encrypt-Decrypt-Encrypt) es:";
 choices[5]= new Array();
 choices[5][0] = "Un cifrado doble con 2 claves que aumentan el tama&ntilde;o de la clave DES a 112 bits";
 choices[5][1] = "Un cifrado triple con 2 claves que aumenta el tama&ntilde;o de la clave DES a 112 bits";
 choices[5][2] = "Un cifrado triple con una clave de 56 bits";
 choices[5][3] = "No existe";
 answers[5] = choices[5][2];
 units[5] = "72";
 comments[5] = "Id Pregunta: 1002. Pregunta capciosa";


//  Id pregunta: 1054 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  El sistema de encriptaci&oacute;n RSA (Rivest, Shamir y Adleman, 1978)&hellip;:";
 choices[6]= new Array();
 choices[6][0] = "El receptor del mensaje debe conocer la clave p&uacute;blica para descifrarlo";
 choices[6][1] = "Se basa en la seguridad que confiere la dificultad de factorizar n&uacute;meros grandes";
 choices[6][2] = "Es un sistema de encriptaci&oacute;n sim&eacute;trico";
 choices[6][3] = "Garantiza la seguridad a&uacute;n utilizando n&uacute;meros primos de menos de veinte cifras";
 answers[6] = choices[6][1];
 units[6] = "72";
 comments[6] = "Id Pregunta: 1054. ";


//  Id pregunta: 1203 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  Kerberos utiliza algoritmos de cifrado:";
 choices[7]= new Array();
 choices[7][0] = "No utiliza algoritmos de cifrado, porque no cifra nada";
 choices[7][1] = "Utiliza algoritmos de cifrado RSA";
 choices[7][2] = "Utiliza algoritmos de cifrado tipo DES";
 choices[7][3] = "Lo &uacute;nico que utiliza es firma electr&oacute;nica";
 answers[7] = choices[7][2];
 units[7] = "72";
 comments[7] = "Id Pregunta: 1203. ";


//  Id pregunta: 1287 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Marcar la correcta respecto de los algoritmos criptogr&aacute;ficos:";
 choices[8]= new Array();
 choices[8][0] = "El algoritmo de cifra de Merkle-Hellman es de clave dispersa";
 choices[8][1] = "El algoritmo de cifra de Merkle-Hellman es de clave &uacute;nica";
 choices[8][2] = "El algoritmo DES es de clave p&uacute;blica";
 choices[8][3] = "El algoritmo DES es de clave sim&eacute;trica";
 answers[8] = choices[8][3];
 units[8] = "72";
 comments[8] = "Id Pregunta: 1287. ";


//  Id pregunta: 1299 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  Para la comunicaci&oacute;n web segura, la norma de seguridad independiente del protocolo de aplicaci&oacute;n y, por tanto, v&aacute;lida para http, ftp, telnet&hellip; es la siguiente:";
 choices[9]= new Array();
 choices[9][0] = "DNS";
 choices[9][1] = "SSL";
 choices[9][2] = "XAdES-A";
 choices[9][3] = "WML";
 answers[9] = choices[9][1];
 units[9] = "73";
 comments[9] = "Id Pregunta: 1299. ";


//  Id pregunta: 1345 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  Se&ntilde;ale la afirmaci&oacute;n err&oacute;nea respecto a los algoritmos de cifrado:";
 choices[10]= new Array();
 choices[10][0] = "Si utilizamos el sistema de cifrado mediante clave p&uacute;blica en una red local de N nodos, para poder comunicarse con todos los dem&aacute;s, cada nodo deber&aacute; conocer N - 1 claves, y ser&aacute;n necesarias un total de N! / 2 x (N - 2)! parejas de claves";
 choices[10][1] = "Si utilizamos el sistema de cifrado mediante clave sim&eacute;trica en una red local de N nodos, para poder comunicarse con todos los dem&aacute;s, cada nodo deber&aacute; conocer N - 1 claves, y ser&aacute;n necesarias un total de N*(N-1)/2 claves";
 choices[10][2] = "Si utilizamos el sistema de cifrado mediante clave sim&eacute;trica en una red local de 10 nodos, para poder comunicarse con todos los dem&aacute;s, cada nodo deber&aacute; conocer 9 claves, y ser&aacute;n necesarias un total de 45 claves";
 choices[10][3] = "Los algoritmos de cifrado mediante clave sim&eacute;trica DES, RC-2 y RC-4 son p&uacute;blicos.  A partir de un bloque de caracteres &ldquo;en claro&rdquo;, estos algoritmos generan un bloque de caracteres ininteligible (cifrado) mediante un n&uacute;mero de sustituciones y permutaciones";
 answers[10] = choices[10][0];
 units[10] = "72";
 comments[10] = "Id Pregunta: 1345. ";


//  Id pregunta: 1377 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  TTP:";
 choices[11]= new Array();
 choices[11][0] = "La Top Testing Policy es una pol&iacute;tica que se implanta en organizaciones con un fuerte desarrollo de la calidad del software, para hacer de las pruebas algo fundamental";
 choices[11][1] = "Training To Practise es un tipo de trabajo en equipo que acelera el tiempo en que un empleado nuevo puede comenzar a desempe&ntilde;ar su funci&oacute;n.";
 choices[11][2] = "Una Trusted Third Party es una tercera parte de confianza, es decir una entidad en la que confiamos, y de la que aceptaremos todo lo que firme";
 choices[11][3] = "Todas son falsas";
 answers[11] = choices[11][2];
 units[11] = "74";
 comments[11] = "Id Pregunta: 1377. NULL";


//  Id pregunta: 1559 AÃ±o de creación de pregunta: 2003-01-01
 questions[12]= "13)  &iquest;Cu&aacute;l de los siguientes algoritmos no es de criptograf&iacute;a sim&eacute;trica de flujos?";
 choices[12]= new Array();
 choices[12][0] = "WAKE";
 choices[12][1] = "RC-4 ";
 choices[12][2] = "SEAL";
 choices[12][3] = "MD5";
 answers[12] = choices[12][3];
 units[12] = "72";
 comments[12] = "Id Pregunta: 1559. ";


//  Id pregunta: 1566 AÃ±o de creación de pregunta: 2003-01-01
 questions[13]= "14)  &iquest;Cu&aacute;l no es una caracter&iacute;stica de la Huella Digital?";
 choices[13]= new Array();
 choices[13][0] = "Dos mensajes iguales producen la misma huella digital";
 choices[13][1] = "Conocido un mensaje M1 y su resumen R, ser&aacute; computacionalmente imposible encontrar otro mensaje M2 cuyo resumen sea tambi&eacute;n R";
 choices[13][2] = " Dos mensajes parecidos producen huellas digitales diferentes";
 choices[13][3] = " La funci&oacute;n hash es reversible";
 answers[13] = choices[13][3];
 units[13] = "73";
 comments[13] = "Id Pregunta: 1566. ";


//  Id pregunta: 1850 AÃ±o de creación de pregunta: 2006-01-01
 questions[14]= "15)  &iquest;Cu&aacute;l de los siguientes algoritmos no sirve de base para la definici&oacute;n de algoritmos de criptograf&iacute;a asim&eacute;trica?";
 choices[14]= new Array();
 choices[14][0] = "Problema de sustituci&oacute;n af&iacute;n";
 choices[14][1] = "Problema de factorizaci&oacute;n entera";
 choices[14][2] = "Problema de logaritmo discreto";
 choices[14][3] = "Problema de logaritmo discreto el&iacute;ptico";
 answers[14] = choices[14][0];
 units[14] = "72";
 comments[14] = "Id Pregunta: 1850. ";


//  Id pregunta: 1851 AÃ±o de creación de pregunta: 2006-01-01
 questions[15]= "16)  Indicar la respuesta falsa:";
 choices[15]= new Array();
 choices[15][0] = "IDEA es un algoritmo de clave sim&eacute;trica";
 choices[15][1] = "RIPMED utiliza claves de 128 bits";
 choices[15][2] = "SHA-1 utiliza claves de 160 bits";
 choices[15][3] = "La seguridad de una funci&oacute;n hash radica en su car&aacute;cter unidireccional";
 answers[15] = choices[15][1];
 units[15] = "72";
 comments[15] = "Id Pregunta: 1851. ";


//  Id pregunta: 1859 AÃ±o de creación de pregunta: 2006-01-01
 questions[16]= "17)  En relaci&oacute;n al protocolo OCSP (Online Certificate Status Protocol): ";
 choices[16]= new Array();
 choices[16][0] = "Se utiliza para conocer el estado de revocaci&oacute;n de un certificado X.509";
 choices[16][1] = "Los mensajes enviados v&iacute;a OCSP se codifican en ASN.1";
 choices[16][2] = "Se define en el RFC 2560";
 choices[16][3] = "Todas las anteriores respuestas son ciertas";
 answers[16] = choices[16][3];
 units[16] = "74";
 comments[16] = "Id Pregunta: 1859. NULL";


//  Id pregunta: 1862 AÃ±o de creación de pregunta: 2009-01-01
 questions[17]= "18)  Relativo a la firma digital, indique la opci&oacute;n incorrecta:";
 choices[17]= new Array();
 choices[17][0] = "XMLDSig es una sintaxis XML para la generaci&oacute;n de firma digital";
 choices[17][1] = "XMLDSig s&oacute;lo se utiliza para firmar documentos XML";
 choices[17][2] = "XML Advanced Electronic Signatures (XAdES) cumple la directiva europea sobre firma electr&oacute;nica 1999/93/CE";
 choices[17][3] = "Las respuestas 'a' y 'c' son verdaderas";
 answers[17] = choices[17][1];
 units[17] = "74";
 comments[17] = "Id Pregunta: 1862. NULL";


//  Id pregunta: 1866 AÃ±o de creación de pregunta: 2006-01-01
 questions[18]= "19)  Los documentos de la serie PKCS son especificaciones producidas por los Laboratorios RSA. Se&ntilde;ale la falsa: ";
 choices[18]= new Array();
 choices[18][0] = "PKCS#3 Protocolo de acuerdo de claves  Diffie-Hellman";
 choices[18][1] = "PKCS#11 Cryptoki";
 choices[18][2] = "PKCS#1 Standard de encriptaci&oacute;n RSA";
 choices[18][3] = "La primera es falsa";
 answers[18] = choices[18][3];
 units[18] = "74";
 comments[18] = "Id Pregunta: 1866. NULL";


//  Id pregunta: 1867 AÃ±o de creación de pregunta: 2006-01-01
 questions[19]= "20)  En el protocolo LDAP:";
 choices[19]= new Array();
 choices[19][0] = "La operaci&oacute;n bind permite autenticar al cliente frente al  directorio";
 choices[19][1] = "SASL se a&ntilde;adi&oacute; en LDAP v3";
 choices[19][2] = "La operaci&oacute;n unbind cierra la conexi&oacute;n con el servidor LDAP";
 choices[19][3] = "Todas las anteriores";
 answers[19] = choices[19][3];
 units[19] = "74";
 comments[19] = "Id Pregunta: 1867. NULL";


//  Id pregunta: 1907 AÃ±o de creación de pregunta: 2006-01-01
 questions[20]= "21)  El elemento del DNI que no permite por si solo autenticar a una persona es";
 choices[20]= new Array();
 choices[20][0] = "El nombre";
 choices[20][1] = "La foto";
 choices[20][2] = "La firma";
 choices[20][3] = "La huella dactilar";
 answers[20] = choices[20][0];
 units[20] = "74";
 comments[20] = "Id Pregunta: 1907. NULL";


//  Id pregunta: 2932 AÃ±o de creación de pregunta: 2004-01-01
 questions[21]= "22)  Respecto al est&aacute;ndar de criterios comunes Common Criteria ISO 15408-1 puede decirse que:";
 choices[21]= new Array();
 choices[21][0] = "El nivel de evaluaci&oacute;n EAL3 equivale en ITSEC al nivel de evaluaci&oacute;n E4";
 choices[21][1] = "El nivel de evaluaci&oacute;n EAL3 implica que se ha dise&ntilde;ado, probado y revisado met&oacute;dicamente";
 choices[21][2] = "El nivel de evaluaci&oacute;n EAL4 implica dise&ntilde;o y pruebas semi-formales";
 choices[21][3] = "Es un intento internacional por unificar los criterios utilizados en Estados Unidos y Europa, TCSEC e ITSEC";
 answers[21] = choices[21][3];
 units[21] = "111";
 comments[21] = "Id Pregunta: 2932. Similar a examen TIC MAP A 2004";


//  Id pregunta: 3007 AÃ±o de creación de pregunta: 2004-01-01
 questions[22]= "23)  &iquest;Cu&aacute;l de las siguiente definiciones se corresponde con la vulnerabilidad DDoS que puede producirse sobre nuestros sistemas?";
 choices[22]= new Array();
 choices[22][0] = "Suplantaci&oacute;n de la direcci&oacute;n IP";
 choices[22][1] = "Escuchas en red";
 choices[22][2] = "Denegaci&oacute;n de servicio Distribuido";
 choices[22][3] = "Ataques de desbordamiento de buffer";
 answers[22] = choices[22][2];
 units[22] = "111";
 comments[22] = "Id Pregunta: 3007. NULL";


//  Id pregunta: 3021 AÃ±o de creación de pregunta: 2004-01-01
 questions[23]= "24)  &iquest;Qu&eacute; diferencia, entre otras, hay entre S-HTTP y SSL?";
 choices[23]= new Array();
 choices[23][0] = "El protocolo SSL fue desarrollado por Enterprise Integration Technologies (EIT) y el S-HTTP por Netscape";
 choices[23][1] = "S-HTTP permite el cifrado pero no la autenticaci&oacute;n digital, SSL permite tanto el cifrado como la autenticaci&oacute;n digital";
 choices[23][2] = "S-HTTP funciona entre la capa TCP y la capa de aplicaci&oacute;n, SSL funciona en la de aplicaci&oacute;n";
 choices[23][3] = "S-HTTP solamente sirve para la navegaci&oacute;n web, mientras que SSL sirve para cualquier comunicaci&oacute;n";
 answers[23] = choices[23][3];
 units[23] = "111";
 comments[23] = "Id Pregunta: 3021. TAI 2004";


//  Id pregunta: 3045 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  &iquest;Qu&eacute; afirmaci&oacute;n de las siguientes no es cierta respecto a SSL?";
 choices[24]= new Array();
 choices[24][0] = "Es el acr&oacute;nimo de Secure Sockets Layer, capa segura de interfaz con sockets";
 choices[24][1] = "Es un est&aacute;ndar de facto propuesto por Netscape, ampliamente disponible en servidores y navegadores web";
 choices[24][2] = "En su funcionamiento, se establece primeramente una clave de sesi&oacute;n para conseguir el cifrado del canal (confidencialidad)";
 choices[24][3] = "Es un protocolo cliente-servidor que requiere la autenticaci&oacute;n de ambas partes";
 answers[24] = choices[24][3];
 units[24] = "111";
 comments[24] = "Id Pregunta: 3045. NULL";


//  Id pregunta: 3046 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  &iquest;Qu&eacute; considera menos adecuado para proteger una red de posibles virus?:";
 choices[25]= new Array();
 choices[25][0] = "Ordenadores sin disquetera, con todo el software preinstalado";
 choices[25][1] = "Proteger cada estaci&oacute;n de trabajo mediante explorador de signaturas, explorador de sumas de verificaci&oacute;n y un controlador de actividad residente en memoria";
 choices[25][2] = "Prestar atenci&oacute;n a los ordenadores alquilados o que se vayan a reparar fuera de la empresa";
 choices[25][3] = "Utilizar ordenadores de encendido remoto";
 answers[25] = choices[25][3];
 units[25] = "111";
 comments[25] = "Id Pregunta: 3046. NULL";


//  Id pregunta: 3079 AÃ±o de creación de pregunta: 2005-01-01
 questions[26]= "27)  La inundaci&oacute;n de un buz&oacute;n de correo electr&oacute;nico con un gran n&uacute;mero de mensajes (e-mail spamming) afecta a:";
 choices[26]= new Array();
 choices[26][0] = "La dimensi&oacute;n de confidencialidad de la informaci&oacute;n";
 choices[26][1] = "La dimensi&oacute;n de disponibilidad de la informaci&oacute;n";
 choices[26][2] = "La dimensi&oacute;n de integridad de la informaci&oacute;n";
 choices[26][3] = "Las respuestas &lsquo;c&rsquo; y &lsquo;d&rsquo; son correctas";
 answers[26] = choices[26][1];
 units[26] = "111";
 comments[26] = "Id Pregunta: 3079. NULL";


//  Id pregunta: 3092 AÃ±o de creación de pregunta: 2005-01-01
 questions[27]= "28)  Un ataque del tipo denegaci&oacute;n de servicio (DoS = Denial of Service) a un servidor Web afecta a:";
 choices[27]= new Array();
 choices[27][0] = "Las respuestas 'c' y 'd' son correctas";
 choices[27][1] = "La dimensi&oacute;n de autenticaci&oacute;n de los usuarios";
 choices[27][2] = "La dimensi&oacute;n de integridad de la informaci&oacute;n";
 choices[27][3] = "La dimensi&oacute;n de disponibilidad de la informaci&oacute;n";
 answers[27] = choices[27][3];
 units[27] = "111";
 comments[27] = "Id Pregunta: 3092. NULL";


//  Id pregunta: 4049 AÃ±o de creación de pregunta: 2006-01-01
 questions[28]= "29)  &iquest;Qu&eacute; se suele encontrar en una DMZ?";
 choices[28]= new Array();
 choices[28][0] = "un proxy de  correo";
 choices[28][1] = "un cache web";
 choices[28][2] = "un server web";
 choices[28][3] = "todas las anteriores";
 answers[28] = choices[28][3];
 units[28] = "111";
 comments[28] = "Id Pregunta: 4049. NULL";


//  Id pregunta: 4050 AÃ±o de creación de pregunta: 2006-01-01
 questions[29]= "30)  &iquest;Qu&eacute; no se suele permitir en una DMZ?";
 choices[29]= new Array();
 choices[29][0] = "Conexiones de ordenadores en la DMZ a ordenadores en la red interna";
 choices[29][1] = "Conexiones de ordenadores en la red interna a ordenadores en la dmz";
 choices[29][2] = "Conexiones de ordenadores en la dmz a ordenadores en la red externa";
 choices[29][3] = "Se permiten todas las anteriores";
 answers[29] = choices[29][3];
 units[29] = "111";
 comments[29] = "Id Pregunta: 4050. NULL";


//  Id pregunta: 4137 AÃ±o de creación de pregunta: 2006-01-01
 questions[30]= "31)  El estandar de seguridad ubicado en la capa de procesamiento de paquetes en lugar de en la capa de aplicaci&oacute;n se llama";
 choices[30]= new Array();
 choices[30][0] = "SSL";
 choices[30][1] = "HTTPS";
 choices[30][2] = "FTP pasivo";
 choices[30][3] = "IPSec";
 answers[30] = choices[30][3];
 units[30] = "111";
 comments[30] = "Id Pregunta: 4137. NULL";


//  Id pregunta: 4143 AÃ±o de creación de pregunta: 2006-01-01
 questions[31]= "32)  La intrusi&oacute;n basada en la habilidad del intruso en enga&ntilde;ar a la gente para que rompa los procedimientos normales de seguridad se llama";
 choices[31]= new Array();
 choices[31][0] = "surfeo sobre los hombros (shoulder surfing)";
 choices[31][1] = "huellas del cerebro (brain fingerprinting)";
 choices[31][2] = "ingenier&iacute;a social";
 choices[31][3] = "subterfugio";
 answers[31] = choices[31][2];
 units[31] = "111";
 comments[31] = "Id Pregunta: 4143. NULL";


//  Id pregunta: 4152 AÃ±o de creación de pregunta: 2006-01-01
 questions[32]= "33)  Protocolo cliente/servidor que permite la autenticaci&oacute;n y control de acceso de usuarios PPP";
 choices[32]= new Array();
 choices[32][0] = "ACF2";
 choices[32][1] = "RACF";
 choices[32][2] = "RADIUS";
 choices[32][3] = "Kerberos";
 answers[32] = choices[32][2];
 units[32] = "111";
 comments[32] = "Id Pregunta: 4152. NULL";


//  Id pregunta: 4168 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  Un test de penetraci&oacute;n proporciona todo lo siguiente salvo";
 choices[33]= new Array();
 choices[33][0] = "identificaci&oacute;n de fallos de seguridad";
 choices[33][1] = "demostraci&oacute;n de los efectos de los fallos de seguridad";
 choices[33][2] = "un m&eacute;todo de correcci&oacute;n de los fallos";
 choices[33][3] = "verificaci&oacute;n de los niveles actuales de resistencia a la infiltraci&oacute;n";
 answers[33] = choices[33][1];
 units[33] = "111";
 comments[33] = "Id Pregunta: 4168. NULL";


//  Id pregunta: 4170 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  La pol&iacute;tica de m&iacute;nimo privilegio trata de forzar los derechos de usuario m&aacute;s restrictivos";
 choices[34]= new Array();
 choices[34][0] = "Para ejecutar procesos de sistema";
 choices[34][1] = "En su descripci&oacute;n de puesto de trabajo";
 choices[34][2] = "Para realizar tareas autorizadas";
 choices[34][3] = "En el acceso a servicios de red";
 answers[34] = choices[34][2];
 units[34] = "111";
 comments[34] = "Id Pregunta: 4170. NULL";


//  Id pregunta: 4173 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  Si quiero autenticar a un usuario";
 choices[35]= new Array();
 choices[35][0] = "Le pido su nombre";
 choices[35][1] = "Le pido su DNI";
 choices[35][2] = "Le pido su nombre y lo compruebo en una lista";
 choices[35][3] = "todas las anteriores";
 answers[35] = choices[35][1];
 units[35] = "111";
 comments[35] = "Id Pregunta: 4173. NULL";


//  Id pregunta: 4344 AÃ±o de creación de pregunta: 2007-01-01
 questions[36]= "37)  De entre los siguientes, &iquest;cu&aacute;l no es uno de los servicios de certificaci&oacute;n ofrecidos actualmente por la F&aacute;brica Nacional de Moneda y Timbre?:";
 choices[36]= new Array();
 choices[36][0] = "Fechado digital.";
 choices[36][1] = "Validaci&oacute;n on-line de certificados.";
 choices[36][2] = "Voto electr&oacute;nico en Juntas Generales de Sociedades";
 choices[36][3] = "Login &uacute;nico en sistemas Windows, Linux y Unix";
 answers[36] = choices[36][3];
 units[36] = "74";
 comments[36] = "Id Pregunta: 4344. NULL";


//  Id pregunta: 4346 AÃ±o de creación de pregunta: 2007-01-01
 questions[37]= "38)  Cu&aacute;l es la longitud de la clave utilizada por el sistema criptogr&aacute;fico sim&eacute;trico DES?";
 choices[37]= new Array();
 choices[37][0] = "56 Bits";
 choices[37][1] = "168 Bits";
 choices[37][2] = "256 Bits.";
 choices[37][3] = "Puede ser cualquiera, pero la habitual es 1.024 Bits.";
 answers[37] = choices[37][0];
 units[37] = "73";
 comments[37] = "Id Pregunta: 4346. ";


//  Id pregunta: 4348 AÃ±o de creación de pregunta: 2007-01-01
 questions[38]= "39)  El protocolo de comunicaciones seguras en que el cliente genera aleatoriamente una clave sim&eacute;trica, y la cifra con la clave p&uacute;blica del servidor receptor de la informaci&oacute;n, envi&aacute;ndosela cifrada a &eacute;ste, y posteriormente el servidor la descifra, con lo cual ambas partes ya poseen la clave sim&eacute;trica y se pueden comunicar con confidencialidad, es:";
 choices[38]= new Array();
 choices[38][0] = "IPSec (IP Security).";
 choices[38][1] = "SSL/TSL (Secure sockets Layer/Transport Layer Security).";
 choices[38][2] = "RSA (Rivest-Shamir-Adleman).";
 choices[38][3] = "WEP (Wired Equivalent Privacy).";
 answers[38] = choices[38][1];
 units[38] = "73";
 comments[38] = "Id Pregunta: 4348. ";


//  Id pregunta: 4380 AÃ±o de creación de pregunta: 2007-01-01
 questions[39]= "40)  Un sistema pide a los usuarios c&oacute;digo de usuario y clave para identificarse. Los datos de los usuarios se almacenan en la base de datos, a excepci&oacute;n de las claves que se guardan en un fichero encriptado del sistema, que se actualiza cuando los usuarios cambian su clave. Este sistema ha demostrado ser lento y poco seguro. Se&ntilde;ale la opci&oacute;n m&aacute;s adecuada para mejorarlo:";
 choices[39]= new Array();
 choices[39][0] = "Indexar el fichero para que el acceso sea m&aacute;s r&aacute;pido.";
 choices[39][1] = "Guardar las claves encriptadas en un campo de la tabla de usuarios.";
 choices[39][2] = "Dividir el fichero en varios ficheros para mejorar el acceso, guardando en un campo de la tabla de usuarios el nombre del fichero donde reside la clave de cada usuario.";
 choices[39][3] = "No guardar la clave, gener&aacute;ndola mediante una funci&oacute;n hash aplicada al c&oacute;digo.";
 answers[39] = choices[39][1];
 units[39] = "73";
 comments[39] = "Id Pregunta: 4380. ";


//  Id pregunta: 4427 AÃ±o de creación de pregunta: 2007-01-01
 questions[40]= "41)  La firma digital de un mensaje o documento, garantiza:";
 choices[40]= new Array();
 choices[40][0] = "La autenticaci&oacute;n del emisor e integridad del mensaje.";
 choices[40][1] = "La autenticaci&oacute;n del emisor y confidencialidad del env&iacute;o.";
 choices[40][2] = "Autenticaci&oacute;n, confidencialidad e integridad.";
 choices[40][3] = "Confidencialidad del env&iacute;o e integridad del mensaje.";
 answers[40] = choices[40][0];
 units[40] = "74";
 comments[40] = "Id Pregunta: 4427. NULL";


//  Id pregunta: 4521 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  En una infraestructura PKI, Ia revocaci&oacute;n de un certificado requiere la presencia del usuario en:";
 choices[41]= new Array();
 choices[41][0] = "El proveedor de servicios de certificaci&oacute;n.";
 choices[41][1] = "En la F&aacute;brica Nacional de Moneda y Timbre.";
 choices[41][2] = "No hace falta, se puede hacer desde Internet.";
 choices[41][3] = "En una oficina de registro.";
 answers[41] = choices[41][3];
 units[41] = "74";
 comments[41] = "Id Pregunta: 4521. NULL";


//  Id pregunta: 4547 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  Los denominados cortafuegos &oacute; firewalls de filtrado de paquetes, se caracterizan porque:";
 choices[42]= new Array();
 choices[42][0] = "Analizan &uacute;nicamente la informaci&oacute;n incluida en la cabecera TCP/IP de cada paquete.";
 choices[42][1] = "Analizan la carga &uacute;til de datos de cada paquete.";
 choices[42][2] = "Autentifican los usuarios que acceden a la red.";
 choices[42][3] = "No permiten filtrar paquetes en funci&oacute;n del puerto destino de la comunicaci&oacute;n saliente.";
 answers[42] = choices[42][0];
 units[42] = "111";
 comments[42] = "Id Pregunta: 4547. NULL";


//  Id pregunta: 4601 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  La organizaci&oacute;n de la informaci&oacute;n en un servicio de directorio es:";
 choices[43]= new Array();
 choices[43][0] = "relacional";
 choices[43][1] = "indexada";
 choices[43][2] = "jer&aacute;rquica";
 choices[43][3] = "en colas";
 answers[43] = choices[43][2];
 units[43] = "73";
 comments[43] = "Id Pregunta: 4601. ";


//  Id pregunta: 4748 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  Indique la afirmaci&oacute;n cierta.";
 choices[44]= new Array();
 choices[44][0] = "El resultado de cifrar de nuevo un texto cifrado con otro algoritmo aporta una seguridad adicional, eso s&iacute;, implicando una carga extra de trabajo tanto para cifrar como para luego descifrar el texto";
 choices[44][1] = "Los cifradores de flujo no aportan informaci&oacute;n alguna al criptoanalista que observa el texto cifrado";
 choices[44][2] = "La calidad del algoritmo HASH es independiente de la calidad de la dispersi&oacute;n obtenida en dicho algoritmo";
 choices[44][3] = "El ataque del cumplea&ntilde;os no es aplicable a las funciones HASH, ya que no son reversibles";
 answers[44] = choices[44][1];
 units[44] = "72";
 comments[44] = "Id Pregunta: 4748. ";


//  Id pregunta: 4850 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  &iquest;Cu&aacute;l de los siguientes NO es un modo de operaci&oacute;n del algoritmo de cifrado DES (Data Encryption Standard)?";
 choices[45]= new Array();
 choices[45][0] = "Modo ECB (Electronic Code Book Mode)";
 choices[45][1] = "Modo CFB (Cipher Feedback Mode)";
 choices[45][2] = "Modo BBM (Bit Block Mode)";
 choices[45][3] = "Modo CBC (Cipher Block Chaining Mode)";
 answers[45] = choices[45][2];
 units[45] = "72";
 comments[45] = "Id Pregunta: 4850. ";


//  Id pregunta: 4880 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  &iquest;Cu&aacute;l de los siguientes apartados de la especificaci&oacute;n 7816 de ISO/IEC (International Standards Organization /International Electrotechnical Commission) relativa a tarjetas inteligentes recoge sus especificaciones el&eacute;ctricas yprotocolos de comunicaci&oacute;n?";
 choices[46]= new Array();
 choices[46][0] = "7816-2";
 choices[46][1] = "7816-3";
 choices[46][2] = "7816-4";
 choices[46][3] = "7816-5";
 answers[46] = choices[46][1];
 units[46] = "73";
 comments[46] = "Id Pregunta: 4880. ";


//  Id pregunta: 4958 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  Pedro es administrador corporativo de seguridad. Para &eacute;l, la Intranet y la DMZ son:";
 choices[47]= new Array();
 choices[47][0] = "El conjunto de aplicaciones que son de uso interno del personal del Organismo.";
 choices[47][1] = "El conjunto de servicios y personal que no son directamente accedidos desde el exterior.";
 choices[47][2] = "Dominios de seguridad, entendidos como el conjunto de m&aacute;quinas cuya configuraci&oacute;n es responsabilidad de undepartamento interno.";
 choices[47][3] = "El conjunto de ordenadores que no tienen acceso directo al exterior.";
 answers[47] = choices[47][2];
 units[47] = "111";
 comments[47] = "Id Pregunta: 4958. Examen TIC B 2007";


//  Id pregunta: 4997 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[48]= new Array();
 choices[48][0] = "El sistema de autenticaci&oacute;n &quot;Kerberos&quot;, utiliza exclusivamente mecanismos de criptograf&iacute;a asim&eacute;trica";
 choices[48][1] = "Para la autenticaci&oacute;n &quot;Kerberos&quot; utiliza mecanismos basados en criptograf&iacute;a sim&eacute;trica y en criptograf&iacute;aasim&eacute;trica";
 choices[48][2] = "Para la autenticaci&oacute;n &quot;Kerberos&quot; utiliza exclusivamente mecanismos basados en critograf&iacute;a sim&eacute;trica";
 choices[48][3] = "Para la autenticaci&oacute;n &quot;Kerberos&quot; utiliza mecanismos de identificaci&oacute;n/password y de criptograf&iacute;a sim&eacute;trica";
 answers[48] = choices[48][3];
 units[48] = "73";
 comments[48] = "Id Pregunta: 4997. Examen TIC A 2007";


//  Id pregunta: 5049 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  El algoritmo de cifrado IDEA es del tipo:";
 choices[49]= new Array();
 choices[49][0] = "Asim&eacute;trico";
 choices[49][1] = "Sim&eacute;trico por bloques";
 choices[49][2] = "Sim&eacute;trico de flujo";
 choices[49][3] = "Sim&eacute;trico de resumen (hash)";
 answers[49] = choices[49][1];
 units[49] = "111";
 comments[49] = "Id Pregunta: 5049. Examen TIC A 2007";


//  Id pregunta: 5168 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  En una VPN (Virtual Private Network) de acceso remoto,";
 choices[50]= new Array();
 choices[50][0] = "Al tratarse de una red privada, no es necesario ning&uacute;n tipo de encapsulamiento de los paquetes de datos para protegerlos de posibles ataques.";
 choices[50][1] = "No es necesario verificar la identidad de los usuarios";
 choices[50][2] = "No permite cifrado de datos.";
 choices[50][3] = "Los paquetes de datos viajan por un tunel definido en la red p&uacute;blica";
 answers[50] = choices[50][3];
 units[50] = "111";
 comments[50] = "Id Pregunta: 5168. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5482 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  Firmar un mensaje electr&oacute;nico";
 choices[51]= new Array();
 choices[51][0] = "Es lo mismo que cifrarlo";
 choices[51][1] = "Garantiza la confidencialidad";
 choices[51][2] = "Es lo mismo que codificarlo";
 choices[51][3] = "Garantiza la integridad, autenticaci&oacute;n y no repudio";
 answers[51] = choices[51][3];
 units[51] = "72";
 comments[51] = "Id Pregunta: 5482. Castilla y Le&oacute;n";


//  Id pregunta: 5623 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  En el protocolo SSL, el paso &quot;Server Key Exchange&quot; o Intercambio de clave del servidor es:";
 choices[52]= new Array();
 choices[52][0] = "Obligatorio";
 choices[52][1] = "Opcional, &uacute;nicamente cuando no existe certificado";
 choices[52][2] = "Nunca es necesario";
 choices[52][3] = "Ninguna de las anteriores";
 answers[52] = choices[52][1];
 units[52] = "111";
 comments[52] = "Id Pregunta: 5623. NULL";


//  Id pregunta: 5624 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  Indique cu&aacute;l es el n&uacute;mero de protocolo ESP (Encapsulating Security Payload)";
 choices[53]= new Array();
 choices[53][0] = "51";
 choices[53][1] = "50";
 choices[53][2] = "49";
 choices[53][3] = "Ninguno de los anteriores";
 answers[53] = choices[53][1];
 units[53] = "111";
 comments[53] = "Id Pregunta: 5624. NULL";


//  Id pregunta: 5667 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  Cual de los siguientes sistemas est&aacute; colocado tradicionalmente en la DMZ de una red";
 choices[54]= new Array();
 choices[54][0] = "Servidor de aplicaciones";
 choices[54][1] = "Proxy";
 choices[54][2] = "Servidor LDAP";
 choices[54][3] = "Servidor de base de datos";
 answers[54] = choices[54][1];
 units[54] = "111";
 comments[54] = "Id Pregunta: 5667. NULL";


//  Id pregunta: 5690 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  &iquest;Qui&eacute;n expide los certificados del DNI electr&oacute;nico?";
 choices[55]= new Array();
 choices[55][0] = "El Ministerio de Administraciones P&uacute;blicas";
 choices[55][1] = "La plataforma @firma";
 choices[55][2] = "La Entidad P&uacute;blica Red.es";
 choices[55][3] = "La Direcci&oacute;n General de la Polic&iacute;a";
 answers[55] = choices[55][3];
 units[55] = "74";
 comments[55] = "Id Pregunta: 5690. NULL";


//  Id pregunta: 5737 AÃ±o de creación de pregunta: 2009-01-01
 questions[56]= "57)  &iquest;Qu&eacute; caracter&iacute;sticas debe reunir, entre otras, la firma electr&oacute;nica avanzada?";
 choices[56]= new Array();
 choices[56][0] = "Usar un certificado X.509";
 choices[56][1] = "Usar medios de criptograf&iacute;a asim&eacute;trica";
 choices[56][2] = "Que el firmante tenga bajo su exclusivo control los medios de creaci&oacute;n de firma";
 choices[56][3] = "Que el canal de comunicaci&oacute;n por el que se transfiere la firma sea seguro";
 answers[56] = choices[56][2];
 units[56] = "72";
 comments[56] = "Id Pregunta: 5737. ";


//  Id pregunta: 5748 AÃ±o de creación de pregunta: 2009-01-01
 questions[57]= "58)  &iquest;Qu&eacute; es una firma secuencial?";
 choices[57]= new Array();
 choices[57][0] = "Un documento que incluye las firmas de varios usuarios, todas ellas sobre el mismo documento original";
 choices[57][1] = "Un documento que incluye las firmas de varios usuarios, cada una de ellas incluyendo las firmas anteriores en el tiempo";
 choices[57][2] = "Un documento que incluye la firma de un usuario, y uno o varios documentos originales";
 choices[57][3] = "Un documento que contiene un documento original, la firma de uno o varios usuarios, y uno o varios sellos de tiempo";
 answers[57] = choices[57][1];
 units[57] = "74";
 comments[57] = "Id Pregunta: 5748. NULL";


//  Id pregunta: 5875 AÃ±o de creación de pregunta: 2009-01-01
 questions[58]= "59)  En el protocolo Secure Socket Layer (SSL) el subprotocolo de negociaci&oacute;n (handsake) negocia las claves de sesi&oacute;n mediante el esquema de Diffie-Hellman (D-H) o RSA. Indique la respuesta correcta:";
 choices[58]= new Array();
 choices[58][0] = "D-H an&oacute;nimo es susceptible de ataques por hombre interpuesto";
 choices[58][1] = "D-H ef&iacute;mero no requiere certificado del servidor ni del cliente";
 choices[58][2] = "D-H constante no precisa certificado del cliente";
 choices[58][3] = "RSA necesita la generaci&oacute;n de un n&uacute;mero aleatorio por el servidor que es enviado al cliente cifrado con la clave p&uacute;blica de &eacute;ste";
 answers[58] = choices[58][0];
 units[58] = "72";
 comments[58] = "Id Pregunta: 5875. MAP 2008 A1";


//  Id pregunta: 5980 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  En un sistema con 10 usuarios se plantea el uso de un sistema criptogr&aacute;fico para asegurar las transferencias de datos entretodos ellos. &iquest;Cu&aacute;l ser&iacute;a la diferencia entre usar sistemas de claves sim&eacute;tricas o asim&eacute;tricas?";
 choices[59]= new Array();
 choices[59][0] = "No existe diferencia, en ambos casos se necesitar&aacute;n 20 claves.";
 choices[59][1] = "Con el sistema asim&eacute;trico hacen falta 20 claves y con el sim&eacute;trico el doble, ya que todas son secretas.";
 choices[59][2] = "Con el sistema asim&eacute;trico hacen falta 20 claves y con el sim&eacute;trico s&oacute;lo 10, una por cada usuario.";
 choices[59][3] = "Con el sistema asim&eacute;trico hacen falta 20 claves y con el sim&eacute;trico 45 claves.";
 answers[59] = choices[59][3];
 units[59] = "72";
 comments[59] = "Id Pregunta: 5980. TIC A 2009";


//  Id pregunta: 6104 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  &iquest;Cu&aacute;l de los siguientes NO es un procedimiento adecuado para la consulta de la validez de un certificado digital emitido por un prestador de servicios de certificaci&oacute;n?";
 choices[60]= new Array();
 choices[60][0] = "Declaraci&oacute;n de pr&aacute;cticas de certificaci&oacute;n.";
 choices[60][1] = "Listas de certificados revocados.";
 choices[60][2] = "LDAP.";
 choices[60][3] = "OCSP.";
 answers[60] = choices[60][0];
 units[60] = "74";
 comments[60] = "Id Pregunta: 6104. TIC A 2009";


//  Id pregunta: 6541 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  Una tarjeta de memoria";
 choices[61]= new Array();
 choices[61][0] = "Puede procesar informaci&oacute;n";
 choices[61][1] = "Dependiendo de los tipos, puede o no procesar informaci&oacute;n";
 choices[61][2] = "Nunca puede procesar informaci&oacute;n";
 choices[61][3] = "Son un tipo de tarjeta inteligente";
 answers[61] = choices[61][2];
 units[61] = "111";
 comments[61] = "Id Pregunta: 6541. NULL";


//  Id pregunta: 6551 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  Revisar los logs de seguridad es un tipo de seguridad";
 choices[62]= new Array();
 choices[62][0] = "Preventiva";
 choices[62][1] = "De detecci&oacute;n";
 choices[62][2] = "Disuasoria";
 choices[62][3] = "Correctiva";
 answers[62] = choices[62][1];
 units[62] = "111";
 comments[62] = "Id Pregunta: 6551. NULL";


//  Id pregunta: 6553 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  PKCS#7 se centra en";
 choices[63]= new Array();
 choices[63][0] = "El formato del sobre digital";
 choices[63][1] = "La especificaci&oacute;n de un interfaz de acceso a dispositivos que almacenan informaci&oacute;n";
 choices[63][2] = "Especifica un formato portable para almacenar o transportar las claves privadas de un usuario";
 choices[63][3] = "Todas las respuestas anteriores son correctas";
 answers[63] = choices[63][0];
 units[63] = "74";
 comments[63] = "Id Pregunta: 6553. NULL";


//  Id pregunta: 6555 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  PKCS#10 define ";
 choices[64]= new Array();
 choices[64][0] = "Especifica un formato portable para almacenar o transportar las claves privadas de un usuario";
 choices[64][1] = "Sintaxis para las peticiones de certificados";
 choices[64][2] = "El formato del sobre digital";
 choices[64][3] = "La especificaci&oacute;n de un interfaz de acceso a dispositivos que almacenan informaci&oacute;n";
 answers[64] = choices[64][1];
 units[64] = "74";
 comments[64] = "Id Pregunta: 6555. NULL";


//  Id pregunta: 6570 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  El Directorio X.500 ";
 choices[65]= new Array();
 choices[65][0] = "Es una base de datos centralizada y accesible desde cualquier punto";
 choices[65][1] = "Es una base de datos distribuida y accesible desde cualquier punto";
 choices[65][2] = "Est&aacute; dise&ntilde;ado para guardar nombres, direcciones,  pero no la informaci&oacute;n necesaria para localizar y establecer comunicaci&oacute;n con una persona o recurso";
 choices[65][3] = "B y C son ciertas";
 answers[65] = choices[65][1];
 units[65] = "73";
 comments[65] = "Id Pregunta: 6570. NULL";


//  Id pregunta: 6577 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  El filtrado de paquetes no proporciona";
 choices[66]= new Array();
 choices[66][0] = "Bajo nivel de seguridad";
 choices[66][1] = "Protecci&oacute;n sobre la capa de red";
 choices[66][2] = "Alto rendimiento y escalabilidad";
 choices[66][3] = "Todas las respuestas anteriores son correctas";
 answers[66] = choices[66][1];
 units[66] = "111";
 comments[66] = "Id Pregunta: 6577. NULL";


//  Id pregunta: 7269 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  El Centro Criptol&oacute;gico Nacional (CCN) es el organismo responsable de velar por la seguridad de las TIC en las administraciones p&uacute;blicas, y de formar en este campo a sus profesionales. El CCN depende de:";
 choices[67]= new Array();
 choices[67][0] = "El Consejo Superior para la Administraci&oacute;n Electr&oacute;nica (Ministerio de la Presidencia)";
 choices[67][1] = "La F&aacute;brica Nacional de Moneda y Timbre (Ministerio de Econom&iacute;a y Hacienda)";
 choices[67][2] = "La Direcci&oacute;n General de la Polic&iacute;a y la Guardia Civil (Ministerio del Interior)";
 choices[67][3] = "El Centro Nacional de Inteligencia (Ministerio de Defensa)";
 answers[67] = choices[67][3];
 units[67] = "111";
 comments[67] = "Id Pregunta: 7269. Examen TIC B 2009";


//  Id pregunta: 7270 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)  Los cortafuegos de filtrado de paquetes:";
 choices[68]= new Array();
 choices[68][0] = "Funcionan a nivel de red";
 choices[68][1] = "Funcionan a a nivel de aplicaci&oacute;n";
 choices[68][2] = "Funcionan a nivel de enlace";
 choices[68][3] = "Funcionan a nivel de sesi&oacute;n";
 answers[68] = choices[68][0];
 units[68] = "111";
 comments[68] = "Id Pregunta: 7270. Examen TIC B 2009";


//  Id pregunta: 8302 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  La especificaci&oacute;n PKCS#3 de RSA se refiere a: ";
 choices[69]= new Array();
 choices[69][0] = "El est&aacute;ndar criptogr&aacute;fico RSA. ";
 choices[69][1] = "La sintaxis de la informaci&oacute;n de clave privada.";
 choices[69][2] = "El intercambio de claves Diffie-Hellman.";
 choices[69][3] = "La sintaxis del mensaje criptogr&aacute;fico. ";
 answers[69] = choices[69][2];
 units[69] = "72";
 comments[69] = "Id Pregunta: 8302. Examen TIC A2 2010";


//  Id pregunta: 8305 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  &iquest;Cu&aacute;l de los siguientes perfiles de XAdES incluye los certificados y listas de revocaci&oacute;n (consultas OCSP o CRLs) para poder verificar el documento firmado en el futuro incluso si las fuentes originales no estuvieran disponibles?";
 choices[70]= new Array();
 choices[70][0] = "XAdES-X.";
 choices[70][1] = "XAdES-X-L.";
 choices[70][2] = "XAdES-C. ";
 choices[70][3] = "Esta funcionalidad no se soporta en XAdES.";
 answers[70] = choices[70][1];
 units[70] = "72, 73, 74";
 comments[70] = "Id Pregunta: 8305. Examen TIC A2 2010";


//  Id pregunta: 8322 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  Un sistema compuesto por 15 usuarios intercambian informaci&oacute;n cifrada mediante AES. Si los canales de comunicaci&oacute;n entre usuarios es 2 a 2 (es decir, todos intercambian informaci&oacute;n con todos) &iquest;cu&aacute;ntas claves son necesarias?";
 choices[71]= new Array();
 choices[71][0] = "15.";
 choices[71][1] = "105.";
 choices[71][2] = "210.";
 choices[71][3] = "30. ";
 answers[71] = choices[71][1];
 units[71] = "72";
 comments[71] = "Id Pregunta: 8322. Examen TIC A2 2010";


//  Id pregunta: 8684 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  Indique el puerto utilizado por el protocolo ldap sobre SSL:";
 choices[72]= new Array();
 choices[72][0] = "563";
 choices[72][1] = "443";
 choices[72][2] = "336";
 choices[72][3] = "636";
 answers[72] = choices[72][3];
 units[72] = "74";
 comments[72] = "Id Pregunta: 8684. Examen UPM A2 2011";


//  Id pregunta: 8733 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  Elija la afirmaci&oacute;n correcta, en relaci&oacute;n con el contenido de la tarjeta chip del DNI electr&oacute;nico:";
 choices[73]= new Array();
 choices[73][0] = "Se incluye un certificado electr&oacute;nico &uacute;nico, personal e intransferible, con la doble funcionalidad de firma electr&oacute;nica y de autenticaci&oacute;n.";
 choices[73][1] = "Se incluyen, entre otros los datos de filiaci&oacute;n del ciudadano (los mismos que est&aacute;n impresos en el soporte f&iacute;sico del DNI), junto con una imagen de la fotograf&iacute;a";
 choices[73][2] = "Los datos contenidos, en todo caso, s&oacute;lo son accesibles en lectura por el ciudadano, mediante la utilizaci&oacute;n de la Clave Personal de Acceso o PIN. como garant&iacute;a de confidencialidad";
 choices[73][3] = "No se incluye una imagen de la fotograf&iacute;a";
 answers[73] = choices[73][1];
 units[73] = "74";
 comments[73] = "Id Pregunta: 8733. Examen TIC A2 2010 interna";


//  Id pregunta: 8736 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  La tarjeta DNIe tiene capacidad para la realizaci&oacute;n de firmas electr&oacute;nicas en:";
 choices[74]= new Array();
 choices[74][0] = "Modo raw y modo relleno PKCS#11";
 choices[74][1] = "&Uacute;nicamente en modo raw.";
 choices[74][2] = "&Uacute;nicamente en modo relleno PKCS#11";
 choices[74][3] = "Ninguna de las anteriores.";
 answers[74] = choices[74][0];
 units[74] = "74";
 comments[74] = "Id Pregunta: 8736. Examen TIC A2 2010 interna";


//  Id pregunta: 8789 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  Al aplicar el algoritmo SHA-1 sobre una cadena de texto inicial obtendremos siempre un resultado:";
 choices[75]= new Array();
 choices[75][0] = "De menor longitud que la cadena inicial";
 choices[75][1] = "De la misma longitud que la cadena inicial";
 choices[75][2] = "De mayor longitud que la cadena inicial";
 choices[75][3] = "Ninguna de las anteriores";
 answers[75] = choices[75][3];
 units[75] = "72";
 comments[75] = "Id Pregunta: 8789. Examen UPM A2 2011";


//  Id pregunta: 8965 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  Aquel est&aacute;ndar de la W3C de XMLDSig cuya XMLSignature se encuentra envolviendo el documento firmado es:";
 choices[76]= new Array();
 choices[76][0] = "Enveloped";
 choices[76][1] = "Detached";
 choices[76][2] = "Enveloping";
 choices[76][3] = "Todos los documentos firmados con XMLDSig est&aacute;n envueltos por la XMLDSig";
 answers[76] = choices[76][2];
 units[76] = "73";
 comments[76] = "Id Pregunta: 8965. ";


//  Id pregunta: 9720 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  Se&ntilde;ale cu&aacute;l de las siguientes formas de actuaci&oacute;n es la especificada para los sistemas de validaci&oacute;n de certificados de clave p&uacute;blica ITU-T X.509 v3.";
 choices[77]= new Array();
 choices[77][0] = "Si el sistema no reconoce una extensi&oacute;n cr&iacute;tica, debe ignorar la extensi&oacute;n y emitir un mensaje advirtiendo la existencia de una extensi&oacute;n cr&iacute;tica no procesable.";
 choices[77][1] = "Si el sistema reconoce una extensi&oacute;n no cr&iacute;tica, debe procesar la extensi&oacute;n y emitir un mensaje indicando su cumplimiento o no.";
 choices[77][2] = "Si el sistema no reconoce una extensi&oacute;n no cr&iacute;tica, debe ignorar la extensi&oacute;n.";
 choices[77][3] = "Si el sistema reconoce una extensi&oacute;n no cr&iacute;tica, es aceptable tanto ignorar como procesar la extensi&oacute;n (depender&aacute; de la implementaci&oacute;n concreta del sistema).";
 answers[77] = choices[77][2];
 units[77] = "73";
 comments[77] = "Id Pregunta: 9720. Examen TIC-A1 2013";


//  Id pregunta: 9844 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  Indique cu&aacute;l de las siguientes afirmaciones es VERDADERA:";
 choices[78]= new Array();
 choices[78][0] = "En un criptosistema sim&eacute;trico el conocimiento de la clave p&uacute;blica no permite calcular la clave privada";
 choices[78][1] = "En un criptosistema de clave p&uacute;blica el conocimiento de la clave p&uacute;blica permite calcular la clave privada.";
 choices[78][2] = "En un criptosistema de clave privada el conocimiento de la clave p&uacute;blica permite calcular la clave privada.";
 choices[78][3] = "En un criptosistema asim&eacute;trico el conocimiento de la clave p&uacute;blica no permite calcular la clave privada.";
 answers[78] = choices[78][3];
 units[78] = "111";
 comments[78] = "Id Pregunta: 9844. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Extremadura 2014";


//  Id pregunta: 9848 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  Indique cu&aacute;l de las siguientes afirmaciones relacionadas con IPsec es FALSA:";
 choices[79]= new Array();
 choices[79][0] = "IPv6 incluye expl&iacute;citamente la posibilidad de utilizarlo.";
 choices[79][1] = "Puede operar en modo t&uacute;nel o en modo transporte.";
 choices[79][2] = "El protocolo AH proporciona confidencialidad.";
 choices[79][3] = "El protocolo ESP proporciona autenticaci&oacute;n.";
 answers[79] = choices[79][2];
 units[79] = "111";
 comments[79] = "Id Pregunta: 9848. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Extremadura 2014";


//  Id pregunta: 10374 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  El Teorema Chino del Resto es un m&eacute;todo matem&aacute;tico de resoluci&oacute;n de ecuaciones en aritm&eacute;tica modular que tiene aplicaci&oacute;n principalmente en:";
 choices[80]= new Array();
 choices[80][0] = "Criptograf&iacute;a asim&eacute;trica o de clave p&uacute;blica";
 choices[80][1] = "Criptograf&iacute;a sim&eacute;trica";
 choices[80][2] = "C&aacute;lculo de impedancias de cables coaxiales";
 choices[80][3] = "Junto con el teorema de Euler se usa en resoluci&oacute;n de caminos en grafos, teniendo su aplicaci&oacute;n pr&aacute;ctica en la resoluci&oacute;n de enrutamientos en comunicaciones.";
 answers[80] = choices[80][0];
 units[80] = "72";
 comments[80] = "Id Pregunta: 10374. ";


//  Id pregunta: 10470 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  Respecto a los certificados X.509 y las PKI, indique la respuesta correcta:";
 choices[81]= new Array();
 choices[81][0] = "Exigen el uso de X.500 o LDAP  para la distribuci&oacute;n de certificados y CRLs.";
 choices[81][1] = "Cuando el estado de revocaci&oacute;n se proporciona mediante CRLs, la Autoridad de Certificaci&oacute;n es tambi&eacute;n la emisora de las CRLs.";
 choices[81][2] = "La emisi&oacute;n de CRLs es un mecanismo obligatorio de consulta de estado de los certificados.";
 choices[81][3] = "Una CRL completa lista todos los certificados no expirados dentro su alcance revocados por los motivos de revocaci&oacute;n dentro del alcance de la CRL.";
 answers[81] = choices[81][3];
 units[81] = "73";
 comments[81] = "Id Pregunta: 10470. ";


//  Id pregunta: 10477 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  La diferencia entre la cofirma y la contrafirma estriba en que:";
 choices[82]= new Array();
 choices[82][0] = "La cofirma ocurre cuando el documento a firmar se considera validado con la firma de uno s&oacute;lo de los dos firmantes  y la contrafirma cuando el documento es v&aacute;lido s&oacute;lo si lo firman los dos a la vez";
 choices[82][1] = "La cofirma y la contrafirma son iguales si se hacen de forma electr&oacute;nica ya que no hay manera de determinar en el tiempo el orden de los firmantes, s&oacute;lo que hayan firmado";
 choices[82][2] = "En la cofirma los dos firmantes pueden firmar en cualquier momento y se supone que est&aacute;n al mismo nivel de responsabilidad respecto de la firma del documento (por ejemplo, una pareja que se compra una casa y firma la hipoteca) mientras que en la contrafirma el orden de los firmantes es relevante y el que firma &uacute;ltimo valida la firma del que ha firmado primero (por ejemplo, un jefe que valida el acto administrativo que firma un subordinado)";
 choices[82][3] = "La cofirma requiere de la firma de dos sujetos f&iacute;sicos o jur&iacute;dicos mientras que la contrafirma requiere de la firma de la aplicaci&oacute;n que genera los certificados del documento (portafirmas)";
 answers[82] = choices[82][2];
 units[82] = "73";
 comments[82] = "Id Pregunta: 10477. ";


//  Id pregunta: 10481 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  El certificado de firma del DNI electr&oacute;nico es un certificado (seg&uacute;n la ley de Firma Electr&oacute;nica):";
 choices[83]= new Array();
 choices[83][0] = "Avanzado";
 choices[83][1] = "Reconocido";
 choices[83][2] = "Seguro";
 choices[83][3] = "Exportable";
 answers[83] = choices[83][1];
 units[83] = "74";
 comments[83] = "Id Pregunta: 10481. NULL";


//  Id pregunta: 10609 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  &iquest;Cu&aacute;l de estas es la codificaci&oacute;n en formato binario de un certificado X.509v3?";
 choices[84]= new Array();
 choices[84][0] = "DER";
 choices[84][1] = "CERT";
 choices[84][2] = "PEM";
 choices[84][3] = "Ninguno de los anteriores.";
 answers[84] = choices[84][0];
 units[84] = "73";
 comments[84] = "Id Pregunta: 10609. ";


//  Id pregunta: 10774 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  Seg&uacute;n se establece en la pol&iacute;tica de certificaci&oacute;n de la DGP para el DNI electr&oacute;nico (DNIe) en lo relativo a las autoridades de certificaci&oacute;n (AC) ra&iacute;z y subordinadas, &iquest;cu&aacute;l es el tama&ntilde;o de esas claves?";
 choices[85]= new Array();
 choices[85][0] = "El tama&ntilde;o de las claves de la AC Ra&iacute;z es de 2048 bits y el de claves de las AC subordinadas ser&aacute; de 4096 bits.";
 choices[85][1] = "Las claves de la AC Ra&iacute;z y de las AC subordinadas ser&aacute;n de 2048 bits.";
 choices[85][2] = "El tama&ntilde;o de las claves es: 4096 bits para la AC Ra&iacute;z y 2048 bits para las AC Subordinadas.";
 choices[85][3] = "El tama&ntilde;o de las claves de la AC Ra&iacute;z es 8192 bits para la ra&iacute;z y 4096 bits para las AC subordinadas.";
 answers[85] = choices[85][2];
 units[85] = "74";
 comments[85] = "Id Pregunta: 10774. Examen GSI 2014";


//  Id pregunta: 10803 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  Se&ntilde;ale qu&eacute; n&uacute;mero de puerto deber&iacute;a usarse si se quiere configurar un servicio para la autenticaci&oacute;n de redes Kerberos:";
 choices[86]= new Array();
 choices[86][0] = "88";
 choices[86][1] = "42";
 choices[86][2] = "74";
 choices[86][3] = "105";
 answers[86] = choices[86][0];
 units[86] = "111";
 comments[86] = "Id Pregunta: 10803. Examen GSI 2014";


//  Id pregunta: 11052 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  &iquest;Cu&aacute;l es el plazo m&aacute;ximo de validez de los certificados reconocidos para firma electr&oacute;nica?";
 choices[87]= new Array();
 choices[87][0] = "30 meses";
 choices[87][1] = "4 a&ntilde;os";
 choices[87][2] = "5 a&ntilde;os";
 choices[87][3] = "10 a&ntilde;os";
 answers[87] = choices[87][2];
 units[87] = "73";
 comments[87] = "Id Pregunta: 11052. Modificado por Ley 9/2014";


//  Id pregunta: 11147 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  &iquest;Cu&aacute;l es el est&aacute;ndar de la ITU-T para infraestructuras de claves p&uacute;blicas?";
 choices[88]= new Array();
 choices[88][0] = "X.500";
 choices[88][1] = "X.509v3";
 choices[88][2] = "X.CRL";
 choices[88][3] = "OCSP";
 answers[88] = choices[88][1];
 units[88] = "73";
 comments[88] = "Id Pregunta: 11147. ";


//  Id pregunta: 11148 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  De acuerdo con la Ley 9/2014 General de Telecomunicaciones, &iquest;cu&aacute;l es el plazo m&aacute;ximo de validez de los certificados reconocidos para firma electr&oacute;nica?";
 choices[89]= new Array();
 choices[89][0] = "3 a&ntilde;os";
 choices[89][1] = "4 a&ntilde;os";
 choices[89][2] = "5 a&ntilde;os";
 choices[89][3] = "6 a&ntilde;os";
 answers[89] = choices[89][2];
 units[89] = "73";
 comments[89] = "Id Pregunta: 11148. ";


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


//  Id pregunta: 11187 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;Cu&aacute;l de los siguientes ataques se basa en la suplantaci&oacute;n de identidad mediante t&eacute;cnicas de ingenier&iacute;a social?";
 choices[91]= new Array();
 choices[91][0] = "Phishing";
 choices[91][1] = "Man in the middle";
 choices[91][2] = "Eavesdropping";
 choices[91][3] = "Sniffing";
 answers[91] = choices[91][0];
 units[91] = "111";
 comments[91] = "Id Pregunta: 11187. ";


//  Id pregunta: 11252 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Seg&uacute;n el Principio de Reconocimiento Mutuo que establece el Reglamento 910/2014, se reconocer&aacute; en un Estado miembro, a efectos de la autenticaci&oacute;n transfronteriza para un servicio en l&iacute;nea, el medio de identificaci&oacute;n electr&oacute;nica expedido en otro Estado miembro, siempre que:";
 choices[92]= new Array();
 choices[92][0] = "El nivel de seguridad de este medio de identificaci&oacute;n electr&oacute;nica corresponda a un nivel igual o superior al requerido por el organismo del sector p&uacute;blico para acceder a dicho servicio en l&iacute;nea, independientemente del nivel de seguridad del medio de identificaci&oacute;n.";
 choices[92][1] = "El medio de identificaci&oacute;n est&eacute; expedido seg&uacute;n los incluidos en la lista publicada por la Comisi&oacute;n.";
 choices[92][2] = "Las respuestas A) y B) son correctas.";
 choices[92][3] = "Este reconocimiento se producir&aacute; a m&aacute;s tardar 6 meses despu&eacute;s de que la Comisi&oacute;n publique la lista.";
 answers[92] = choices[92][1];
 units[92] = "73";
 comments[92] = "Id Pregunta: 11252. ";


//  Id pregunta: 11254 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  El algoritmo de encriptaci&oacute;n Camellia:";
 choices[93]= new Array();
 choices[93][0] = "Fue desarrollado en EEUU.";
 choices[93][1] = "La longitud de clave es variable entre 128, 192 y 256 bits.";
 choices[93][2] = "Tiene un tama&ntilde;o de bloque de 64 bits.";
 choices[93][3] = "No est&aacute; soportado en TLS/SSL.";
 answers[93] = choices[93][1];
 units[93] = "72";
 comments[93] = "Id Pregunta: 11254. ";


//  Id pregunta: 11261 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Cu&aacute;les son los niveles de seguridad de los sistemas de autenticaci&oacute;n que define el Reglamento 910/2014?";
 choices[94]= new Array();
 choices[94][0] = "Bajo, medio y alto.";
 choices[94][1] = "B&aacute;sico, medio y alto.";
 choices[94][2] = "B&aacute;sico, sustancial y alto.";
 choices[94][3] = "Bajo, sustancial y alto.";
 answers[94] = choices[94][3];
 units[94] = "73";
 comments[94] = "Id Pregunta: 11261. ";


//  Id pregunta: 11346 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  De los siguientes, indique la opci&oacute;n que contiene los modelos correctos contemplados por LDAP";
 choices[95]= new Array();
 choices[95][0] = "informaci&oacute;n; direccionamiento; observable; estructural";
 choices[95][1] = "informaci&oacute;n; direccionamiento; objetivable; estructural";
 choices[95][2] = "informaci&oacute;n; direccionamiento; seguridad; estructural";
 choices[95][3] = "informaci&oacute;n; direccionamiento; seguridad; funcional";
 answers[95] = choices[95][3];
 units[95] = "73";
 comments[95] = "Id Pregunta: 11346. ";


//  Id pregunta: 11581 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Cu&aacute;l de las siguientes funciones de seguridad no ofrece SSL?";
 choices[96]= new Array();
 choices[96][0] = "No repudio";
 choices[96][1] = "Confidencialidad";
 choices[96][2] = "Integridad.";
 choices[96][3] = "Ofrece todas las anteriores";
 answers[96] = choices[96][0];
 units[96] = "111";
 comments[96] = "Id Pregunta: 11581. NULL";


//  Id pregunta: 11707 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Cu&aacute;l es una caracter&iacute;stica de los Caballos de Troya?";
 choices[97]= new Array();
 choices[97][0] = "Un caballo de troya proxy abre el puerto 21 en el sistema objetivo";
 choices[97][1] = "Un caballo de troya es dificil de detectar, porque detiene su ejecuci&oacute;n cuando la aplicaci&oacute;n que lo ejecut&oacute; se cierra.";
 choices[97][2] = "Un caballo de Troya puede cargarse en un virus o un gusano";
 choices[97][3] = "Un caballo de Troya FTP compromete el funcionamiento de cortafuegos";
 answers[97] = choices[97][2];
 units[97] = "111";
 comments[97] = "Id Pregunta: 11707. NULL";


//  Id pregunta: 11718 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Qu&eacute; sucede si se pierde el primer paquete de una transferencia TFTP? ";
 choices[98]= new Array();
 choices[98][0] = "La aplicaci&oacute;n TFTP volver&aacute; a intentar la solicitud si no se recibe una respuesta. ";
 choices[98][1] = "El router del siguiente salto o la puerta de enlace predeterminada proporcionar&aacute;n una respuesta con un c&oacute;digo de error. ";
 choices[98][2] = "El cliente esperar&aacute; indefinidamente la respuesta. ";
 choices[98][3] = " La capa de transporte volver&aacute; a intentar la consulta si no se recibe una respuesta.";
 answers[98] = choices[98][0];
 units[98] = "111";
 comments[98] = "Id Pregunta: 11718. NULL";


//  Id pregunta: 11735 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Diferencia entre un virus y un &ldquo;Caballo de Troya&rdquo;:";
 choices[99]= new Array();
 choices[99][0] = "El virus suele utilizar canales encubiertos.";
 choices[99][1] = "El virus presenta un mecaniso de replicaci&oacute;n.";
 choices[99][2] = "El &ldquo;Caballo de Troya&rdquo; advierte de su presencia.";
 choices[99][3] = "El &ldquo;Caballo de Troya&rdquo; no esconde funciones potencialmente maliciosas.";
 answers[99] = choices[99][1];
 units[99] = "111";
 comments[99] = "Id Pregunta: 11735. ";


