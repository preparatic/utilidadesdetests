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


//  Id pregunta: 687 AÃ±o de creación de pregunta: 2005-01-01
 questions[1]= "2)  La &uacute;nica empresa u organismo en Espa&ntilde;a que proporciona certificados digitales es la FNMT:";
 choices[1]= new Array();
 choices[1][0] = "Es completamente cierto";
 choices[1][1] = "Es cierto para certificados servidor";
 choices[1][2] = "Es completamente falso";
 choices[1][3] = "Es cierto s&oacute;lo para certificados de empleado p&uacute;blico, sede electr&oacute;nica y sello electr&oacute;nico";
 answers[1] = choices[1][2];
 units[1] = "73";
 comments[1] = "Id Pregunta: 687. ";


//  Id pregunta: 745 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  Los algoritmos de cifrado que utilizaban los antiguos romanos eran de clave:";
 choices[2]= new Array();
 choices[2][0] = "sim&eacute;trica";
 choices[2][1] = "asim&eacute;trica";
 choices[2][2] = "diferencial";
 choices[2][3] = "clave sim&eacute;trica o asim&eacute;trica, dependiendo del algoritmo";
 answers[2] = choices[2][0];
 units[2] = "72";
 comments[2] = "Id Pregunta: 745. Similar a examen TIC SS A 2003";


//  Id pregunta: 767 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  Los tipos de tarjetas inteligentes son ";
 choices[3]= new Array();
 choices[3][0] = "de acoplamiento";
 choices[3][1] = "de vecindad";
 choices[3][2] = "de proximidad";
 choices[3][3] = "todas las anteriores";
 answers[3] = choices[3][3];
 units[3] = "74";
 comments[3] = "Id Pregunta: 767. NULL";


//  Id pregunta: 768 AÃ±o de creación de pregunta: 2009-01-01
 questions[4]= "5)  En los servicios de directorio";
 choices[4]= new Array();
 choices[4][0] = "varias entradas pueden compartir un DN";
 choices[4][1] = "las operaciones de actualizaci&oacute;n de LDAP no son at&oacute;micas";
 choices[4][2] = "LDAP utiliza habitualmente la pila de protocolos TCP / IP";
 choices[4][3] = "LDAP no se describe en t&eacute;rminos de ASN.1";
 answers[4] = choices[4][2];
 units[4] = "73";
 comments[4] = "Id Pregunta: 768. RFC 4512 y RFC 4514 ";


//  Id pregunta: 781 AÃ±o de creación de pregunta: 2005-01-01
 questions[5]= "6)  La captura de los datos de una tarjeta de cr&eacute;dito por un tercero, en una transacci&oacute;n econ&oacute;mica realizada a trav&eacute;s de internet entre un comprador y una tienda de comercio electr&oacute;nico afecta a:";
 choices[5]= new Array();
 choices[5][0] = "La dimensi&oacute;n de integridad de la informaci&oacute;n en tr&aacute;nsito";
 choices[5][1] = "La dimensi&oacute;n de autenticaci&oacute;n del destinatario de la informaci&oacute;n en tr&aacute;nsito";
 choices[5][2] = "La dimensi&oacute;n de confidencialidad de la informaci&oacute;n en tr&aacute;nsito";
 choices[5][3] = "La dimensi&oacute;n de disponibilidad de la informaci&oacute;n en tr&aacute;nsito";
 answers[5] = choices[5][2];
 units[5] = "72";
 comments[5] = "Id Pregunta: 781. segurida y cifrado";


//  Id pregunta: 824 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;A qu&eacute; hace referencia el est&aacute;ndar LDAP?:";
 choices[6]= new Array();
 choices[6][0] = "Comprensi&oacute;n de datos";
 choices[6][1] = "Directorio electr&oacute;nico";
 choices[6][2] = "Comprensi&oacute;n de datos";
 choices[6][3] = "Protocolo de transporte OSI";
 answers[6] = choices[6][1];
 units[6] = "73";
 comments[6] = "Id Pregunta: 824. ";


//  Id pregunta: 939 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Qu&eacute; se entiende por autoridad de certificaci&oacute;n?:";
 choices[7]= new Array();
 choices[7][0] = "Un juez";
 choices[7][1] = "Una compa&ntilde;&iacute;a que certifica la seguridad de sus sistemas En la actualidad s&oacute;lo puede considerarse a Microsoft como tal,";
 choices[7][2] = "Son &oacute;rganos administrativos dependientes del Consejo Superior de Inform&aacute;tica que dictan las normas de certificaci&oacute;n digital, de acuerdo a las Directivas de la Uni&oacute;n Europea";
 choices[7][3] = "Son entidades que expiden certificados digitales de manera que garantizan la correspondencia entre la identidad de un usuario y su par de claves";
 answers[7] = choices[7][3];
 units[7] = "74";
 comments[7] = "Id Pregunta: 939. NULL";


//  Id pregunta: 946 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Cada vez que un ciudadano utilice su tarjeta criptogr&aacute;fica CERES para firmar documentos que debe entregar a la Administraci&oacute;n, se&ntilde;ale qu&eacute; utilizaci&oacute;n estar&aacute; haciendo de las claves de cifrado:";
 choices[8]= new Array();
 choices[8][0] = "Cifrar&aacute; con su clave p&uacute;blica";
 choices[8][1] = "Cifrar&aacute; con la clave p&uacute;blica de la Administraci&oacute;n";
 choices[8][2] = "Cifrara con el certificado ra&iacute;z de la FNMT";
 choices[8][3] = "Cifrar&aacute; con su clave privada";
 answers[8] = choices[8][3];
 units[8] = "74";
 comments[8] = "Id Pregunta: 946. NULL";


//  Id pregunta: 970 AÃ±o de creación de pregunta: 2005-01-01
 questions[9]= "10)  Cuando se obtiene un certificado electr&oacute;nico, la clave privada generada se queda en:";
 choices[9]= new Array();
 choices[9][0] = "El navegador de internet";
 choices[9][1] = "El proveedor de servicios ";
 choices[9][2] = "Un servidor de certificados";
 choices[9][3] = "La Autoridad de Certificaci&oacute;n";
 answers[9] = choices[9][0];
 units[9] = "74";
 comments[9] = "Id Pregunta: 970. NULL";


//  Id pregunta: 981 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  De los siguientes algoritmos cript&oacute;graficos se&ntilde;ale cu&aacute;l es de clave p&uacute;blica:";
 choices[10]= new Array();
 choices[10][0] = "DES (Data Encryption Standard)";
 choices[10][1] = "RSA (Rivest, Shamir, Adelman)";
 choices[10][2] = "IDEA (International Data Encryption Algorithm)";
 choices[10][3] = "LOKI";
 answers[10] = choices[10][1];
 units[10] = "72";
 comments[10] = "Id Pregunta: 981. ";


//  Id pregunta: 993 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Diffie y Hellman inventaron:";
 choices[11]= new Array();
 choices[11][0] = "Un algoritmo criptogr&aacute;fico";
 choices[11][1] = "Un mecanismo de intercambio de claves";
 choices[11][2] = "Las infraestructuras de clave p&uacute;blica (PKI))";
 choices[11][3] = "Las funciones resumen";
 answers[11] = choices[11][1];
 units[11] = "72";
 comments[11] = "Id Pregunta: 993. ";


//  Id pregunta: 1002 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  El cifrado DES - EDE (Encrypt-Decrypt-Encrypt) es:";
 choices[12]= new Array();
 choices[12][0] = "Un cifrado doble con 2 claves que aumentan el tama&ntilde;o de la clave DES a 112 bits";
 choices[12][1] = "Un cifrado triple con 2 claves que aumenta el tama&ntilde;o de la clave DES a 112 bits";
 choices[12][2] = "Un cifrado triple con una clave de 56 bits";
 choices[12][3] = "No existe";
 answers[12] = choices[12][2];
 units[12] = "72";
 comments[12] = "Id Pregunta: 1002. Pregunta capciosa";


//  Id pregunta: 1027 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Entrust:";
 choices[13]= new Array();
 choices[13][0] = "Un algoritmo criptogr&aacute;fico";
 choices[13][1] = "Un mecanismo de intercambio de claves";
 choices[13][2] = "Una infraestructura de clave p&uacute;blica (PKI))";
 choices[13][3] = "Una funcion resumen";
 answers[13] = choices[13][2];
 units[13] = "74";
 comments[13] = "Id Pregunta: 1027. NULL";


//  Id pregunta: 1054 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  El sistema de encriptaci&oacute;n RSA (Rivest, Shamir y Adleman, 1978)&hellip;:";
 choices[14]= new Array();
 choices[14][0] = "El receptor del mensaje debe conocer la clave p&uacute;blica para descifrarlo";
 choices[14][1] = "Se basa en la seguridad que confiere la dificultad de factorizar n&uacute;meros grandes";
 choices[14][2] = "Es un sistema de encriptaci&oacute;n sim&eacute;trico";
 choices[14][3] = "Garantiza la seguridad a&uacute;n utilizando n&uacute;meros primos de menos de veinte cifras";
 answers[14] = choices[14][1];
 units[14] = "72";
 comments[14] = "Id Pregunta: 1054. ";


//  Id pregunta: 1118 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  En las tarjetas inteligentes sin contacto, la comunicaci&oacute;n se realiza mediante tecnolog&iacute;a de radio frecuencia, incorporando las tarjetas una antena de RF. En funci&oacute;n de la distancia que permita la comunicaci&oacute;n, &iquest;qu&eacute; descripci&oacute;n corresponde a las tarjetas?";
 choices[15]= new Array();
 choices[15][0] = "Requiere el contacto f&iacute;sico (&lt;2mm) con  el dispositivo de interfaz, aunque no su inserci&oacute;n, ni usa contactos el&eacute;ctricos";
 choices[15][1] = "Permite una distancia de 10 cm con el dispositivo de interfaz";
 choices[15][2] = "No permite una distancia mayor de 5 cm con dispositivo de interfaz";
 choices[15][3] = "Todas las tarjetas inteligentes sin contacto son de proximidad";
 answers[15] = choices[15][1];
 units[15] = "74";
 comments[15] = "Id Pregunta: 1118. NULL";


//  Id pregunta: 1119 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  En los algoritmos de clave sim&eacute;trica:";
 choices[16]= new Array();
 choices[16][0] = "se pueden distribuir y mantener f&aacute;cilmente las claves";
 choices[16][1] = "tienen alta velocidad de cifrado y descifrado";
 choices[16][2] = "no se ha alcanzado a&uacute;n la perfecci&oacute;n matem&aacute;tica, y existen algoritmos eficaces para reventarlos aparte del de fuerza bruta";
 choices[16][3] = "no pueden ser usados para autenticar a las partes";
 answers[16] = choices[16][1];
 units[16] = "72";
 comments[16] = "Id Pregunta: 1119. ";


//  Id pregunta: 1120 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  En los criptosistemas asim&eacute;tricos:";
 choices[17]= new Array();
 choices[17][0] = "El emisor cifra con la clave p&uacute;blica del receptor y el receptor descifra con la clave p&uacute;blica del emisor";
 choices[17][1] = "El emisor cifra con su clave p&uacute;blica y el receptor descifra con su clave privada";
 choices[17][2] = "El emisor cifra con la clave p&uacute;blica del receptor y el receptor descifra con su clave privada";
 choices[17][3] = "El emisor cifra con su clave privada y el receptor descifra con su clave p&uacute;blica";
 answers[17] = choices[17][2];
 units[17] = "72";
 comments[17] = "Id Pregunta: 1120. ";


//  Id pregunta: 1212 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  La clave p&uacute;blica forma parte de un:";
 choices[18]= new Array();
 choices[18][0] = "Sistema criptogr&aacute;fico sim&eacute;trico";
 choices[18][1] = "Sistema criptogr&aacute;fico anal&oacute;gico";
 choices[18][2] = "Sistema criptogr&aacute;fico asim&eacute;trico";
 choices[18][3] = "Sistema criptogr&aacute;fico propietario de la Administraci&oacute;n P&uacute;blica";
 answers[18] = choices[18][2];
 units[18] = "72";
 comments[18] = "Id Pregunta: 1212. ";


//  Id pregunta: 1217 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  La definici&oacute;n de PKI, seg&uacute;n IETF - PKIX es:";
 choices[19]= new Array();
 choices[19][0] = "El conjunto de hardware, software, pol&iacute;ticas y procedimientos necesarios para crear, gestionar, almacenar, distribuir y revocar certificados basados en criptograf&iacute;a de clave p&uacute;blica";
 choices[19][1] = "El conjunto de hardware, software, personal, pol&iacute;ticas y procedimientos necesarios para crear, gestionar y almacenarcertificados basados en criptograf&iacute;a de clave p&uacute;blica";
 choices[19][2] = "El conjunto de hardware, software, personal, pol&iacute;ticas y procedimientos necesarios para crear, gestionar, almacenar, distribuir y revocar certificados basados en criptograf&iacute;a de clave p&uacute;blica";
 choices[19][3] = "El conjunto de pol&iacute;ticas y procedimientos necesarios para crear, gestionar, almacenar, distribuir y revocar certificados basados en criptograf&iacute;a de clave p&uacute;blica";
 answers[19] = choices[19][2];
 units[19] = "74";
 comments[19] = "Id Pregunta: 1217. NULL";


//  Id pregunta: 1269 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Los algoritmos de clave p&uacute;blica o asim&eacute;trica:";
 choices[20]= new Array();
 choices[20][0] = "no han alcanzado la perfecci&oacute;n matem&aacute;tica, hay ataques m&aacute;s eficaces que la fuerza bruta";
 choices[20][1] = "presentan altas tasas de cifrado y descifrado";
 choices[20][2] = "su distribuci&oacute;n usando directorios p&uacute;blicos es compleja";
 choices[20][3] = "no son compatibles con el concepto de certificado";
 answers[20] = choices[20][0];
 units[20] = "72";
 comments[20] = "Id Pregunta: 1269. ";


//  Id pregunta: 1299 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  Para la comunicaci&oacute;n web segura, la norma de seguridad independiente del protocolo de aplicaci&oacute;n y, por tanto, v&aacute;lida para http, ftp, telnet&hellip; es la siguiente:";
 choices[21]= new Array();
 choices[21][0] = "DNS";
 choices[21][1] = "SSL";
 choices[21][2] = "XAdES-A";
 choices[21][3] = "WML";
 answers[21] = choices[21][1];
 units[21] = "73";
 comments[21] = "Id Pregunta: 1299. ";


//  Id pregunta: 1308 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  PGP son una siglas muy conocidad dentro del mundo del cifrado y de la seguridad. &iquest;A qu&eacute; corresponden?:";
 choices[22]= new Array();
 choices[22][0] = "Pretty Good Privacy";
 choices[22][1] = "Personal General Privacity";
 choices[22][2] = "Privacity Generator Program";
 choices[22][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[22] = choices[22][0];
 units[22] = "72";
 comments[22] = "Id Pregunta: 1308. ";


//  Id pregunta: 1322 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  RSA es:";
 choices[23]= new Array();
 choices[23][0] = "un algoritmo de clave privada";
 choices[23][1] = "un algoritmo de clave p&uacute;blica";
 choices[23][2] = "un m&eacute;todo de criptoan&aacute;lisis diferencial";
 choices[23][3] = "una infraestructura de clave p&uacute;blica";
 answers[23] = choices[23][1];
 units[23] = "72";
 comments[23] = "Id Pregunta: 1322. ";


//  Id pregunta: 1327 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Se define como criptosistema asim&eacute;trico lo siguiente:";
 choices[24]= new Array();
 choices[24][0] = "algoritmo basado en clave &uacute;nica";
 choices[24][1] = "algoritmo basado en 2 claves, una de cifrado y otra de descifrado, siendo una p&uacute;blica y otra privada";
 choices[24][2] = "algoritmo basado en 2 claves, una de cifrado y otra de descifrado, siendo ambas privadas";
 choices[24][3] = "Ninguna de las anteriores";
 answers[24] = choices[24][1];
 units[24] = "72";
 comments[24] = "Id Pregunta: 1327. ";


//  Id pregunta: 1392 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Un registro MX, en un servidor DNS, &iquest;a qu&eacute; hace referencia?:";
 choices[25]= new Array();
 choices[25][0] = "Al servidor DNS principal";
 choices[25][1] = "Al servidor web asociado al dominio";
 choices[25][2] = "Al servidor de correo asociado al dominio";
 choices[25][3] = "Al servidor seguro asociado al dominio";
 answers[25] = choices[25][2];
 units[25] = "73";
 comments[25] = "Id Pregunta: 1392. ";


//  Id pregunta: 1516 AÃ±o de creación de pregunta: 2003-01-01
 questions[26]= "27)  &iquest;Sobre qu&eacute; versa el est&aacute;ndar PKCS7 de criptograf&iacute;a?";
 choices[26]= new Array();
 choices[26][0] = "Formato de certificado digital";
 choices[26][1] = "Formato de sobre digital";
 choices[26][2] = "Cifrado con clave privada";
 choices[26][3] = "Sintaxis de la clave privada";
 answers[26] = choices[26][1];
 units[26] = "74";
 comments[26] = "Id Pregunta: 1516. NULL";


//  Id pregunta: 1580 AÃ±o de creación de pregunta: 2004-01-01
 questions[27]= "28)  Sobre el algoritmo de cifrado RSA en no es cierto que";
 choices[27]= new Array();
 choices[27][0] = "Es utilizado para firmar digitalmente";
 choices[27][1] = "Fue propuesto por Diffie y Hellman";
 choices[27][2] = "Lo que se cifra con la clave privada se descifra con la p&uacute;blica";
 choices[27][3] = "Lo que se cifra con la clave p&uacute;blica se descifra con la privada";
 answers[27] = choices[27][1];
 units[27] = "72";
 comments[27] = "Id Pregunta: 1580. Tanenbaum";


//  Id pregunta: 1582 AÃ±o de creación de pregunta: 2004-01-01
 questions[28]= "29)  La criptograf&iacute;a cu&aacute;ntica es una t&eacute;cnica basada en";
 choices[28]= new Array();
 choices[28][0] = "Polarizaci&oacute;n de la luz";
 choices[28][1] = "Propiedades de los campos magn&eacute;ticos";
 choices[28][2] = "Ultrasonidos";
 choices[28][3] = "Transmisi&oacute;n de datos a muy alta frecuencia";
 answers[28] = choices[28][0];
 units[28] = "72";
 comments[28] = "Id Pregunta: 1582. Tanenbaum";


//  Id pregunta: 1610 AÃ±o de creación de pregunta: 2003-01-01
 questions[29]= "30)  La t&eacute;cnica criptogr&aacute;fica basada en un conjunto de m&eacute;todos que permiten tener comunicaci&oacute;n segura entre las partes, siempre y cuando previamente ambas partes hayan intercambiado una clave privada, se denomina:";
 choices[29]= new Array();
 choices[29][0] = "Criptograf&iacute;a asim&eacute;trica.";
 choices[29][1] = "Criptograf&iacute;a sim&eacute;trica.";
 choices[29][2] = "Criptograf&iacute;a de clave p&uacute;blica.";
 choices[29][3] = "Criptograf&iacute;a paralela.";
 answers[29] = choices[29][1];
 units[29] = "72";
 comments[29] = "Id Pregunta: 1610. Junta Andaluc&iacute;a";


//  Id pregunta: 1856 AÃ±o de creación de pregunta: 2009-01-01
 questions[30]= "31)  Se&ntilde;ale la falsa:";
 choices[30]= new Array();
 choices[30][0] = "XML Encryption es un lenguaje cuya funci&oacute;n principal es asegurar la confidencialidad de partes de documentos XML a trav&eacute;s de la encriptaci&oacute;n parcial del documento transportado";
 choices[30][1] = "XML Encryption se puede aplicar a cualquier recurso Web, incluyendo contenido que no es XML.";
 choices[30][2] = "XML Encryption establece que es posible cifrar datos a distintos niveles de granularidad, desde elementos simples hasta documentos enteros";
 choices[30][3] = "Ninguna de las anteriores es correcta.";
 answers[30] = choices[30][3];
 units[30] = "72";
 comments[30] = "Id Pregunta: 1856. ";


//  Id pregunta: 1895 AÃ±o de creación de pregunta: 2006-01-01
 questions[31]= "32)  La t&eacute;cnica de ocultar un mensaje secreto dentro de un mensaje ordinario y extraerlo en destino se llama";
 choices[31]= new Array();
 choices[31][0] = "algoritmo de clave secreta";
 choices[31][1] = "bytecode";
 choices[31][2] = "esteganograf&iacute;a";
 choices[31][3] = "spyware";
 answers[31] = choices[31][2];
 units[31] = "74";
 comments[31] = "Id Pregunta: 1895. NULL";


//  Id pregunta: 1950 AÃ±o de creación de pregunta: 2006-01-01
 questions[32]= "33)  El protocolo SSL v.3";
 choices[32]= new Array();
 choices[32][0] = "Trabaja tanto sobre TCP como sobre UDP";
 choices[32][1] = "Hasta hace pocos a&ntilde;os los navegadores que incorporaban SSL ten&iacute;an su exportaci&oacute;n desde EE UU limitada a claves de 128 bits";
 choices[32][2] = "Es id&eacute;ntico al protocolo TLS, aunque este &uacute;ltimo est&aacute; normalizado por el IETF mediante un RFC";
 choices[32][3] = "Intercambia las claves secretas mediante el ensobrado digital (digital envelopment) o mediante Diffie-Hellman";
 answers[32] = choices[32][3];
 units[32] = "72";
 comments[32] = "Id Pregunta: 1950. ";


//  Id pregunta: 3934 AÃ±o de creación de pregunta: 2003-01-01
 questions[33]= "34)  &iquest;En que nivel del modelo OSI se realiza el cifrado?";
 choices[33]= new Array();
 choices[33][0] = "1";
 choices[33][1] = "5";
 choices[33][2] = "7";
 choices[33][3] = "6";
 answers[33] = choices[33][3];
 units[33] = "72";
 comments[33] = "Id Pregunta: 3934. NULL";


//  Id pregunta: 4267 AÃ±o de creación de pregunta: 2007-01-01
 questions[34]= "35)  Indique cu&aacute;l de los siguientes algoritmos criptogr&aacute;ficos se basa en el logaritmo discreto el&iacute;ptico";
 choices[34]= new Array();
 choices[34][0] = "RSA";
 choices[34][1] = "RW";
 choices[34][2] = "Diffie-Hellman";
 choices[34][3] = "DSAE";
 answers[34] = choices[34][3];
 units[34] = "73";
 comments[34] = "Id Pregunta: 4267. ";


//  Id pregunta: 4306 AÃ±o de creación de pregunta: 2007-01-01
 questions[35]= "36)  El sistema m&aacute;s econ&oacute;mico y sencillo para proporcionar autenticaci&oacute;n y autorizaci&oacute;n es:";
 choices[35]= new Array();
 choices[35][0] = "Utilizaci&oacute;n de passwords (palabras de paso).";
 choices[35][1] = "Utilizaci&oacute;n de certificados digitales";
 choices[35][2] = "Utilizaci&oacute;n de mecanismos biom&eacute;tricos.";
 choices[35][3] = "Utilizaci&oacute;n de un cortafuego (firewall).";
 answers[35] = choices[35][0];
 units[35] = "74";
 comments[35] = "Id Pregunta: 4306. NULL";


//  Id pregunta: 4380 AÃ±o de creación de pregunta: 2007-01-01
 questions[36]= "37)  Un sistema pide a los usuarios c&oacute;digo de usuario y clave para identificarse. Los datos de los usuarios se almacenan en la base de datos, a excepci&oacute;n de las claves que se guardan en un fichero encriptado del sistema, que se actualiza cuando los usuarios cambian su clave. Este sistema ha demostrado ser lento y poco seguro. Se&ntilde;ale la opci&oacute;n m&aacute;s adecuada para mejorarlo:";
 choices[36]= new Array();
 choices[36][0] = "Indexar el fichero para que el acceso sea m&aacute;s r&aacute;pido.";
 choices[36][1] = "Guardar las claves encriptadas en un campo de la tabla de usuarios.";
 choices[36][2] = "Dividir el fichero en varios ficheros para mejorar el acceso, guardando en un campo de la tabla de usuarios el nombre del fichero donde reside la clave de cada usuario.";
 choices[36][3] = "No guardar la clave, gener&aacute;ndola mediante una funci&oacute;n hash aplicada al c&oacute;digo.";
 answers[36] = choices[36][1];
 units[36] = "73";
 comments[36] = "Id Pregunta: 4380. ";


//  Id pregunta: 4466 AÃ±o de creación de pregunta: 2007-01-01
 questions[37]= "38)  El algoritmo de cifrado Rijndael puede ser especificado por una clave:";
 choices[37]= new Array();
 choices[37][0] = "Fija de 256 bits";
 choices[37][1] = "Con un m&iacute;nimo de 128 bits y un m&aacute;ximo de 256 bits";
 choices[37][2] = "Fija de 128 bits";
 choices[37][3] = "Con un m&iacute;nimo de 256 bits y un m&aacute;ximo de 1024 bits";
 answers[37] = choices[37][1];
 units[37] = "72";
 comments[37] = "Id Pregunta: 4466. ";


//  Id pregunta: 4467 AÃ±o de creación de pregunta: 2007-01-01
 questions[38]= "39)  El DNI digital permitir&aacute;:";
 choices[38]= new Array();
 choices[38][0] = "Firmar y cifrar.";
 choices[38][1] = "Solo firmar.";
 choices[38][2] = "Solo cifrar.";
 choices[38][3] = "Solo funciones 3DES";
 answers[38] = choices[38][1];
 units[38] = "74";
 comments[38] = "Id Pregunta: 4467. NULL";


//  Id pregunta: 4601 AÃ±o de creación de pregunta: 2007-01-01
 questions[39]= "40)  La organizaci&oacute;n de la informaci&oacute;n en un servicio de directorio es:";
 choices[39]= new Array();
 choices[39][0] = "relacional";
 choices[39][1] = "indexada";
 choices[39][2] = "jer&aacute;rquica";
 choices[39][3] = "en colas";
 answers[39] = choices[39][2];
 units[39] = "73";
 comments[39] = "Id Pregunta: 4601. ";


//  Id pregunta: 4880 AÃ±o de creación de pregunta: 2007-01-01
 questions[40]= "41)  &iquest;Cu&aacute;l de los siguientes apartados de la especificaci&oacute;n 7816 de ISO/IEC (International Standards Organization /International Electrotechnical Commission) relativa a tarjetas inteligentes recoge sus especificaciones el&eacute;ctricas yprotocolos de comunicaci&oacute;n?";
 choices[40]= new Array();
 choices[40][0] = "7816-2";
 choices[40][1] = "7816-3";
 choices[40][2] = "7816-4";
 choices[40][3] = "7816-5";
 answers[40] = choices[40][1];
 units[40] = "73";
 comments[40] = "Id Pregunta: 4880. ";


//  Id pregunta: 5078 AÃ±o de creación de pregunta: 2003-01-01
 questions[41]= "42)  &iquest;Cu&aacute;l de las opciones siguientes NO se corresponde con servicios ofrecidos por una PKI (Public KeyInfrastructures)? :";
 choices[41]= new Array();
 choices[41][0] = "Registro de claves p&uacute;blicas: emisi&oacute;n de un nuevo certificado para una clave p&uacute;blica";
 choices[41][1] = "Revocaci&oacute;n de certificados: cancelaci&oacute;n de un certificado previamente remitido";
 choices[41][2] = "Evaluaci&oacute;n de la confianza: determinaci&oacute;n sobre si un certificado es v&aacute;lido y qu&eacute; operaciones est&aacute;npermitidas para dicho certificado";
 choices[41][3] = "Realizaci&oacute;n de tr&aacute;mites de forma segura con la Administraci&oacute;n P&uacute;blica a trav&eacute;s de Internet";
 answers[41] = choices[41][3];
 units[41] = "74";
 comments[41] = "Id Pregunta: 5078. Examen TIC A 2007";


//  Id pregunta: 5089 AÃ±o de creación de pregunta: 2001-01-01
 questions[42]= "43)  En el est&aacute;ndar X.509,&iquest; qu&eacute; procedimiento de autenticaci&oacute;n utilizar&iacute;a cuando el origen y el destino no tienen relojes sincronizados?";
 choices[42]= new Array();
 choices[42][0] = "autenticaci&oacute;n a 1 v&iacute;a";
 choices[42][1] = "autenticaci&oacute;n a 2 v&iacute;as";
 choices[42][2] = "autenticaci&oacute;n a 3 v&iacute;as ";
 choices[42][3] = "autenticaci&oacute;n a 4 v&iacute;as";
 answers[42] = choices[42][2];
 units[42] = "73";
 comments[42] = "Id Pregunta: 5089. ";


//  Id pregunta: 5090 AÃ±o de creación de pregunta: 2001-01-01
 questions[43]= "44)  &iquest;Cu&aacute;l de los siguientes no es un m&eacute;todo de actualizaci&oacute;n de CRLs?";
 choices[43]= new Array();
 choices[43][0] = "muestreo de CRLs";
 choices[43][1] = "env&iacute;o de CRL";
 choices[43][2] = "anuncio de CRL";
 choices[43][3] = "verificaci&oacute;n en l&iacute;nea";
 answers[43] = choices[43][1];
 units[43] = "73";
 comments[43] = "Id Pregunta: 5090. ";


//  Id pregunta: 5464 AÃ±o de creación de pregunta: 2003-01-01
 questions[44]= "45)  En el directorio activo de Microsoft la definici&oacute;n de todas las definiciones de clases de todos los objetos y atributos del directorio activo se encuentra en el";
 choices[44]= new Array();
 choices[44][0] = "Schema Naming Context";
 choices[44][1] = "Active Directory Schema MMC";
 choices[44][2] = "Configuration Naming Context";
 choices[44][3] = "Domain Naming Context";
 answers[44] = choices[44][0];
 units[44] = "73";
 comments[44] = "Id Pregunta: 5464. Castilla y Le&oacute;n";


//  Id pregunta: 5482 AÃ±o de creación de pregunta: 2003-01-01
 questions[45]= "46)  Firmar un mensaje electr&oacute;nico";
 choices[45]= new Array();
 choices[45][0] = "Es lo mismo que cifrarlo";
 choices[45][1] = "Garantiza la confidencialidad";
 choices[45][2] = "Es lo mismo que codificarlo";
 choices[45][3] = "Garantiza la integridad, autenticaci&oacute;n y no repudio";
 answers[45] = choices[45][3];
 units[45] = "72";
 comments[45] = "Id Pregunta: 5482. Castilla y Le&oacute;n";


//  Id pregunta: 5689 AÃ±o de creación de pregunta: 2003-01-01
 questions[46]= "47)  &iquest;Es capaz el DNI electr&oacute;nico de identificar biom&eacute;tricamente al ciudadano?";
 choices[46]= new Array();
 choices[46][0] = "S&iacute;, a trav&eacute;s del iris ocular";
 choices[46][1] = "S&iacute;, a trav&eacute;s de la firma manuscrita";
 choices[46][2] = "No, no dispone de esa capacidad";
 choices[46][3] = "S&iacute;, a trav&eacute;s de la huella dactilar";
 answers[46] = choices[46][3];
 units[46] = "74";
 comments[46] = "Id Pregunta: 5689. NULL";


//  Id pregunta: 5690 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  &iquest;Qui&eacute;n expide los certificados del DNI electr&oacute;nico?";
 choices[47]= new Array();
 choices[47][0] = "El Ministerio de Administraciones P&uacute;blicas";
 choices[47][1] = "La plataforma @firma";
 choices[47][2] = "La Entidad P&uacute;blica Red.es";
 choices[47][3] = "La Direcci&oacute;n General de la Polic&iacute;a";
 answers[47] = choices[47][3];
 units[47] = "74";
 comments[47] = "Id Pregunta: 5690. NULL";


//  Id pregunta: 5692 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  Una de las zonas de datos que se encuentran dentro del chip criptogr&aacute;fico del DNI electr&oacute;nico es la denominada zona de seguridad. Esta zona que almacena, entre otros, los datos biom&eacute;tricos, es accesible por:";
 choices[48]= new Array();
 choices[48][0] = "El ciudadano";
 choices[48][1] = "El ciudadano y la Direcci&oacute;n General de la Polic&iacute;a";
 choices[48][2] = " La Direcci&oacute;n General de la Polic&iacute;a";
 choices[48][3] = "Es una zona p&uacute;blica";
 answers[48] = choices[48][2];
 units[48] = "74";
 comments[48] = "Id Pregunta: 5692. NULL";


//  Id pregunta: 5743 AÃ±o de creación de pregunta: 2009-01-01
 questions[49]= "50)  En criptograf&iacute;a sim&eacute;trica, &iquest;qu&eacute; es una sustituci&oacute;n monoalfab&eacute;tica?";
 choices[49]= new Array();
 choices[49][0] = "La que cifra los caracteres de uno en uno";
 choices[49][1] = "La que sustituye cada letra por varias letras";
 choices[49][2] = "Aquella en que cada letra es sustituida siempre por la misma dentro de un mismo mensaje";
 choices[49][3] = "La que sustituye las letras en grupos de longitud variable, dependiendo de su posici&oacute;n dentro del mensaje";
 answers[49] = choices[49][2];
 units[49] = "72";
 comments[49] = "Id Pregunta: 5743. ";


//  Id pregunta: 5913 AÃ±o de creación de pregunta: 2009-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l de los siguientes criptosistemas se corresponde con un criptosistema asim&eacute;trico &oacute; de clave p&uacute;blica?";
 choices[50]= new Array();
 choices[50][0] = "IDEA (International Data Encryption Standard)";
 choices[50][1] = "Algoritmo de intercambio de claves de Diffie- Hellman";
 choices[50][2] = "AES (Advanced Encryption Standard)";
 choices[50][3] = "RC-5";
 answers[50] = choices[50][1];
 units[50] = "72";
 comments[50] = "Id Pregunta: 5913. MAP 2008 A1";


//  Id pregunta: 5984 AÃ±o de creación de pregunta: 2010-01-01
 questions[51]= "52)  El modelo de control de accesos donde es el sistema quien protege los recursos y donde todo recurso del sistema tiene unaetiqueta de seguridad se denomina:";
 choices[51]= new Array();
 choices[51][0] = "De acceso discrecional (DAC)";
 choices[51][1] = "De acceso obligatorio (MAC)";
 choices[51][2] = "Basado en roles (RBAC)";
 choices[51][3] = "De confidencialidad.";
 answers[51] = choices[51][1];
 units[51] = "73";
 comments[51] = "Id Pregunta: 5984. TIC A 2009";


//  Id pregunta: 6458 AÃ±o de creación de pregunta: 2010-01-01
 questions[52]= "53)  Una infraestructura de clave p&uacute;blica (PKI) es ";
 choices[52]= new Array();
 choices[52][0] = "Un algoritmo de clave p&uacute;blica, cuya firma digital hace uso de funciones hash de 64 bits";
 choices[52][1] = "El conjunto de certificado de autenticaci&oacute;n y certificado de firma reconocida";
 choices[52][2] = "Una tercera parte de confianza que se encarga de la firma digital de los certificados de usuarios de entorno de clave p&uacute;blica";
 choices[52][3] = "Un conjunto de protocolos, servicios y est&aacute;ndares que soportan aplicaciones basadas en criptograf&iacute;a de clave p&uacute;blica";
 answers[52] = choices[52][3];
 units[52] = "74";
 comments[52] = "Id Pregunta: 6458. Castilla La Mancha 2009";


//  Id pregunta: 6552 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)  Dentro de los Est&aacute;ndares de Criptograf&iacute;a de Clave P&uacute;blica (PKCS)";
 choices[53]= new Array();
 choices[53][0] = "PKCS#1: Corresponde al algoritmo RSA";
 choices[53][1] = "PKCS#3: Corresponde al algoritmo Diffie-Hellman";
 choices[53][2] = "PKCS#5: Cifrado con clave privada";
 choices[53][3] = "Todas las respuestas anteriores son correctas";
 answers[53] = choices[53][3];
 units[53] = "74";
 comments[53] = "Id Pregunta: 6552. NULL";


//  Id pregunta: 6553 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  PKCS#7 se centra en";
 choices[54]= new Array();
 choices[54][0] = "El formato del sobre digital";
 choices[54][1] = "La especificaci&oacute;n de un interfaz de acceso a dispositivos que almacenan informaci&oacute;n";
 choices[54][2] = "Especifica un formato portable para almacenar o transportar las claves privadas de un usuario";
 choices[54][3] = "Todas las respuestas anteriores son correctas";
 answers[54] = choices[54][0];
 units[54] = "74";
 comments[54] = "Id Pregunta: 6553. NULL";


//  Id pregunta: 6555 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  PKCS#10 define ";
 choices[55]= new Array();
 choices[55][0] = "Especifica un formato portable para almacenar o transportar las claves privadas de un usuario";
 choices[55][1] = "Sintaxis para las peticiones de certificados";
 choices[55][2] = "El formato del sobre digital";
 choices[55][3] = "La especificaci&oacute;n de un interfaz de acceso a dispositivos que almacenan informaci&oacute;n";
 answers[55] = choices[55][1];
 units[55] = "74";
 comments[55] = "Id Pregunta: 6555. NULL";


//  Id pregunta: 6557 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  Una Autoridad de Validaci&oacute;n (VA) puede realizar distintos tipos de servicios de validaci&oacute;n:";
 choices[56]= new Array();
 choices[56][0] = "Descarga de CRLs";
 choices[56][1] = "Via OCSP";
 choices[56][2] = "A y B son correctas";
 choices[56][3] = "A y B son incorrectas";
 answers[56] = choices[56][2];
 units[56] = "74";
 comments[56] = "Id Pregunta: 6557. NULL";


//  Id pregunta: 6558 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  Servicios de una Autoridad de Certificaci&oacute;n esenciales son:";
 choices[57]= new Array();
 choices[57][0] = "Generaci&oacute;n y gesti&oacute;n de claves criptogr&aacute;ficas";
 choices[57][1] = "Servicios de directorio";
 choices[57][2] = "Registro de usuarios mediante el que se acredita la identidad";
 choices[57][3] = "Todas las respuestas anteriores son correctas";
 answers[57] = choices[57][3];
 units[57] = "74";
 comments[57] = "Id Pregunta: 6558. NULL";


//  Id pregunta: 6570 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  El Directorio X.500 ";
 choices[58]= new Array();
 choices[58][0] = "Es una base de datos centralizada y accesible desde cualquier punto";
 choices[58][1] = "Es una base de datos distribuida y accesible desde cualquier punto";
 choices[58][2] = "Est&aacute; dise&ntilde;ado para guardar nombres, direcciones,  pero no la informaci&oacute;n necesaria para localizar y establecer comunicaci&oacute;n con una persona o recurso";
 choices[58][3] = "B y C son ciertas";
 answers[58] = choices[58][1];
 units[58] = "73";
 comments[58] = "Id Pregunta: 6570. NULL";


//  Id pregunta: 6591 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  Algunas de las ventajas a la hora de utilizar software general para la realizaci&oacute;n de las auditor&iacute;as son:";
 choices[59]= new Array();
 choices[59][0] = "Economicidad";
 choices[59][1] = "Coste inicial alto";
 choices[59][2] = "No se verifican procesos particulares sino gen&eacute;ricos";
 choices[59][3] = "Todas las respuestas anteriores son incorrectas";
 answers[59] = choices[59][0];
 units[59] = "75";
 comments[59] = "Id Pregunta: 6591. NULL";


//  Id pregunta: 6599 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  En cuanto al acceso a datos personales a trav&eacute;s de redes de comunicaciones:";
 choices[60]= new Array();
 choices[60][0] = "Debe llevarse a cabo a trav&eacute;s de t&eacute;cnicas de cifrado";
 choices[60][1] = "Deber&aacute;n garantizar un nivel de seguridad equivalente al correspondiente a los accesos en modo local";
 choices[60][2] = "Debe permitir el registro de todos los accesos a los datos, guardando, hora, fecha, usuario y fichero accedido.";
 choices[60][3] = "Todas las respuestas anteriores son correctas";
 answers[60] = choices[60][1];
 units[60] = "75";
 comments[60] = "Id Pregunta: 6599. NULL";


//  Id pregunta: 7176 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  &iquest;Cu&aacute;l es el est&aacute;ndar de la tarjeta f&iacute;sica del DNI electr&oacute;nico?";
 choices[61]= new Array();
 choices[61][0] = "ISO-7816-1";
 choices[61][1] = "PCKS#11";
 choices[61][2] = "ISO-17789";
 choices[61][3] = "ISO-7815-1";
 answers[61] = choices[61][0];
 units[61] = "74";
 comments[61] = "Id Pregunta: 7176. Examen TIC B 2009. Cumple est&aacute;ndar 7816-1. Soporta est&aacute;ndar PKCS#11";


//  Id pregunta: 7177 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  El n&uacute;mero m&aacute;ximo de certificados que se pueden almacenar en una  tarjeta criptogr&aacute;fica CERES es:";
 choices[62]= new Array();
 choices[62][0] = "4";
 choices[62][1] = "5";
 choices[62][2] = "10";
 choices[62][3] = "7";
 answers[62] = choices[62][2];
 units[62] = "74";
 comments[62] = "Id Pregunta: 7177. Examen TIC B 2009. Seg&uacute;n Proyecto CERES actualizado al a&ntilde;o 2015";


//  Id pregunta: 7338 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  ASCII es el acr&oacute;nimo de:";
 choices[63]= new Array();
 choices[63][0] = "American Standard Code for Information Integration";
 choices[63][1] = "Alliance Standard Code Interchange Integration";
 choices[63][2] = "American Standard Code for Information Interchange";
 choices[63][3] = "All sugar can injure igloos";
 answers[63] = choices[63][2];
 units[63] = "72";
 comments[63] = "Id Pregunta: 7338. NULL";


//  Id pregunta: 7345 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  El est&aacute;ndar de sintaxis de intercambio de informaci&oacute;n personal es:";
 choices[64]= new Array();
 choices[64][0] = "PKCS#7";
 choices[64][1] = "PKCS#9";
 choices[64][2] = "PKCS#12";
 choices[64][3] = "PKCS#14";
 answers[64] = choices[64][2];
 units[64] = "72";
 comments[64] = "Id Pregunta: 7345. NULL";


//  Id pregunta: 7769 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)   Seg&uacute;n la recomendaci&oacute;n X.509 v.3:";
 choices[65]= new Array();
 choices[65][0] = " Un usuario puede tener a lo sumo un certificado de atributos por cada certificado de clave p&uacute;blica.";
 choices[65][1] = " Los certificados de atributos deben ser generados por Autoridades de Certificaci&oacute;n.";
 choices[65][2] = " Para su validez, los certificados de atributos deben estar siempre acompa&ntilde;ados de un certificado de clave p&uacute;blica.";
 choices[65][3] = " Los certificados de atributos contienen id&eacute;nticos campos que subcampos tiene el campo de extensiones de los certificados de clave p&uacute;blica.";
 answers[65] = choices[65][2];
 units[65] = "73";
 comments[65] = "Id Pregunta: 7769. Map 2005";


//  Id pregunta: 7779 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)   Seg&uacute;n la recomendaci&oacute;n X.509 v.3:";
 choices[66]= new Array();
 choices[66][0] = " La autenticaci&oacute;n simple conlleva el uso exclusivo de contrase&ntilde;as transmitidas en claro.";
 choices[66][1] = " La autenticaci&oacute;n robusta (strong) de un sentido conlleva siempre el empleo de funciones resumen (hash).";
 choices[66][2] = " La autenticaci&oacute;n robusta (strong) de dos sentidos comporta siempre el uso de credenciales obtenidas mediante t&eacute;cnicas criptogr&aacute;ficas.";
 choices[66][3] = " La autenticaci&oacute;n robusta (strong) de tres sentidos debe incorporar siempre sellos de tiempo.";
 answers[66] = choices[66][2];
 units[66] = "73";
 comments[66] = "Id Pregunta: 7779. Map 2005";


//  Id pregunta: 8322 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  Un sistema compuesto por 15 usuarios intercambian informaci&oacute;n cifrada mediante AES. Si los canales de comunicaci&oacute;n entre usuarios es 2 a 2 (es decir, todos intercambian informaci&oacute;n con todos) &iquest;cu&aacute;ntas claves son necesarias?";
 choices[67]= new Array();
 choices[67][0] = "15.";
 choices[67][1] = "105.";
 choices[67][2] = "210.";
 choices[67][3] = "30. ";
 answers[67] = choices[67][1];
 units[67] = "72";
 comments[67] = "Id Pregunta: 8322. Examen TIC A2 2010";


//  Id pregunta: 8736 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  La tarjeta DNIe tiene capacidad para la realizaci&oacute;n de firmas electr&oacute;nicas en:";
 choices[68]= new Array();
 choices[68][0] = "Modo raw y modo relleno PKCS#11";
 choices[68][1] = "&Uacute;nicamente en modo raw.";
 choices[68][2] = "&Uacute;nicamente en modo relleno PKCS#11";
 choices[68][3] = "Ninguna de las anteriores.";
 answers[68] = choices[68][0];
 units[68] = "74";
 comments[68] = "Id Pregunta: 8736. Examen TIC A2 2010 interna";


//  Id pregunta: 8777 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  La solicitud de certificaci&oacute;n de una clave p&uacute;blica remitida a la autoridad de certificaci&oacute;n correspondiente deber&aacute; ser generada en formato:";
 choices[69]= new Array();
 choices[69][0] = "PKCS#10";
 choices[69][1] = "PKCS#12";
 choices[69][2] = "X.500";
 choices[69][3] = "X.509";
 answers[69] = choices[69][0];
 units[69] = "74";
 comments[69] = "Id Pregunta: 8777. Examen UPM A2 2011";


//  Id pregunta: 8910 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  Los sistemas de cifrado sim&eacute;trico se basan en:";
 choices[70]= new Array();
 choices[70][0] = "Cifrar con la clave privada y descifrar con la clave p&uacute;blica, para garantizar la autenticidad del emisor.";
 choices[70][1] = "Cifrar con una sola clave, y no descifrar en el destino, para salvaguardar la integridad.";
 choices[70][2] = "Cifrar y descifrar con la misma clave.";
 choices[70][3] = "Cifrar con la clave p&uacute;blica y descifrar con la privada, para garantizar la confidencialidad";
 answers[70] = choices[70][2];
 units[70] = "72";
 comments[70] = "Id Pregunta: 8910. Operador Ayto. Madrid 2010";


//  Id pregunta: 9583 AÃ±o de creación de pregunta: 2013-01-01
 questions[71]= "72)  En el contexto de la firma electr&oacute;nica y su regulaci&oacute;n en Espa&ntilde;a se&ntilde;ale la afirmaci&oacute;n FALSA.";
 choices[71]= new Array();
 choices[71][0] = "Los funcionarios al servicio de las administraciones p&uacute;blicas espa&ntilde;olas pueden firmar en el ejercicio de su cargo utilizando su DNI electr&oacute;nico.";
 choices[71][1] = "Los c&oacute;digos de verificaci&oacute;n segura (CSV) junto con los sellos de &oacute;rgano sirven para dotar de firma electr&oacute;nica reconocida a la actuaci&oacute;n administrativa automatizada.";
 choices[71][2] = "Un dispositivo seguro de creaci&oacute;n de firma debe garantizar que los datos usados para generar la firma pueden producirse s&oacute;lo una vez.";
 choices[71][3] = "Un certificado electr&oacute;nico reconocido ha de incluir la firma electr&oacute;nica avanzada del prestador de servicios de certificaci&oacute;n que lo expide.";
 answers[71] = choices[71][1];
 units[71] = "43, 74";
 comments[71] = "Id Pregunta: 9583. Examen TIC A1 2011";


//  Id pregunta: 9713 AÃ±o de creación de pregunta: 2014-01-01
 questions[72]= "73)  Se&ntilde;ale la respuesta INCORRECTA respecto a las funciones criptogr&aacute;ficas hash o resumen.";
 choices[72]= new Array();
 choices[72][0] = "MD5 genera un hash de 128 bits.";
 choices[72][1] = "SHA-1 genera un hash de 160 bits.";
 choices[72][2] = "Se conoce por SHA-2 a un conjunto de funciones de la familia SHA que generan hashes de longitud 224, 256, 384 y 512 bits.";
 choices[72][3] = "La longitud m&iacute;nima del hash soportada en SHA-3 es 256 bits.";
 answers[72] = choices[72][3];
 units[72] = "72";
 comments[72] = "Id Pregunta: 9713. Examen TIC-A1 2013";


//  Id pregunta: 9720 AÃ±o de creación de pregunta: 2014-01-01
 questions[73]= "74)  Se&ntilde;ale cu&aacute;l de las siguientes formas de actuaci&oacute;n es la especificada para los sistemas de validaci&oacute;n de certificados de clave p&uacute;blica ITU-T X.509 v3.";
 choices[73]= new Array();
 choices[73][0] = "Si el sistema no reconoce una extensi&oacute;n cr&iacute;tica, debe ignorar la extensi&oacute;n y emitir un mensaje advirtiendo la existencia de una extensi&oacute;n cr&iacute;tica no procesable.";
 choices[73][1] = "Si el sistema reconoce una extensi&oacute;n no cr&iacute;tica, debe procesar la extensi&oacute;n y emitir un mensaje indicando su cumplimiento o no.";
 choices[73][2] = "Si el sistema no reconoce una extensi&oacute;n no cr&iacute;tica, debe ignorar la extensi&oacute;n.";
 choices[73][3] = "Si el sistema reconoce una extensi&oacute;n no cr&iacute;tica, es aceptable tanto ignorar como procesar la extensi&oacute;n (depender&aacute; de la implementaci&oacute;n concreta del sistema).";
 answers[73] = choices[73][2];
 units[73] = "73";
 comments[73] = "Id Pregunta: 9720. Examen TIC-A1 2013";


//  Id pregunta: 10065 AÃ±o de creación de pregunta: 2014-01-01
 questions[74]= "75)  SAFER (Secure And Fast Encryption Routine) es un algoritmo de cifrado:";
 choices[74]= new Array();
 choices[74][0] = "Sim&eacute;trico de bloques.";
 choices[74][1] = "Sim&eacute;trico de flujo.";
 choices[74][2] = "Asim&eacute;trico de factorizaci&oacute;n entera.";
 choices[74][3] = "Asim&eacute;trico de logaritmo discreto.";
 answers[74] = choices[74][0];
 units[74] = "72";
 comments[74] = "Id Pregunta: 10065. TIC A2, libre, Examen 2013";


//  Id pregunta: 10372 AÃ±o de creación de pregunta: 2014-01-01
 questions[75]= "76)  &iquest;Qu&eacute; es Kleopatra?";
 choices[75]= new Array();
 choices[75][0] = "El equivalente en Android al servicio Kerberos de Windows";
 choices[75][1] = "Una aplicaci&oacute;n de gesti&oacute;n criptogr&aacute;fica basada en GPG";
 choices[75][2] = "Un navegador del entorno KDE";
 choices[75][3] = "La &uacute;ltima versi&oacute;n de Debian";
 answers[75] = choices[75][1];
 units[75] = "72";
 comments[75] = "Id Pregunta: 10372. ";


//  Id pregunta: 10376 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  Si un intruso intenta cotillear (eavesdropping) durante el proceso de generaci&oacute;n de las claves generadas por criptograf&iacute;a cu&aacute;ntica:";
 choices[76]= new Array();
 choices[76][0] = "El sistema lo rechaza";
 choices[76][1] = "Las claves generadas se ve alteradas y el intruso es informado de que su intento de interceptaci&oacute;n no ha tenido &eacute;xito";
 choices[76][2] = "Al intentar usar las claves interceptadas le propone el sistema un challenge o desaf&iacute;o adicional";
 choices[76][3] = "S&oacute;lo puede hacerlo si se usan cifradores de flujo";
 answers[76] = choices[76][1];
 units[76] = "72";
 comments[76] = "Id Pregunta: 10376. ";


//  Id pregunta: 10470 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  Respecto a los certificados X.509 y las PKI, indique la respuesta correcta:";
 choices[77]= new Array();
 choices[77][0] = "Exigen el uso de X.500 o LDAP  para la distribuci&oacute;n de certificados y CRLs.";
 choices[77][1] = "Cuando el estado de revocaci&oacute;n se proporciona mediante CRLs, la Autoridad de Certificaci&oacute;n es tambi&eacute;n la emisora de las CRLs.";
 choices[77][2] = "La emisi&oacute;n de CRLs es un mecanismo obligatorio de consulta de estado de los certificados.";
 choices[77][3] = "Una CRL completa lista todos los certificados no expirados dentro su alcance revocados por los motivos de revocaci&oacute;n dentro del alcance de la CRL.";
 answers[77] = choices[77][3];
 units[77] = "73";
 comments[77] = "Id Pregunta: 10470. ";


//  Id pregunta: 10472 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  Respecto a los certificados X.509 v3:";
 choices[78]= new Array();
 choices[78][0] = "Las extensiones se clasifican en cr&iacute;ticas, no criticas y recomendables.";
 choices[78][1] = "Las extensiones no cr&iacute;ticas pueden ignorarse si no se pueden procesar o se decide no hacerlo.";
 choices[78][2] = "Un certificado s&oacute;lo puede contener una extensi&oacute;n de un determinado tipo.";
 choices[78][3] = "No pueden definirse extensiones para uso privado.";
 answers[78] = choices[78][1];
 units[78] = "73";
 comments[78] = "Id Pregunta: 10472. ";


//  Id pregunta: 10477 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  La diferencia entre la cofirma y la contrafirma estriba en que:";
 choices[79]= new Array();
 choices[79][0] = "La cofirma ocurre cuando el documento a firmar se considera validado con la firma de uno s&oacute;lo de los dos firmantes  y la contrafirma cuando el documento es v&aacute;lido s&oacute;lo si lo firman los dos a la vez";
 choices[79][1] = "La cofirma y la contrafirma son iguales si se hacen de forma electr&oacute;nica ya que no hay manera de determinar en el tiempo el orden de los firmantes, s&oacute;lo que hayan firmado";
 choices[79][2] = "En la cofirma los dos firmantes pueden firmar en cualquier momento y se supone que est&aacute;n al mismo nivel de responsabilidad respecto de la firma del documento (por ejemplo, una pareja que se compra una casa y firma la hipoteca) mientras que en la contrafirma el orden de los firmantes es relevante y el que firma &uacute;ltimo valida la firma del que ha firmado primero (por ejemplo, un jefe que valida el acto administrativo que firma un subordinado)";
 choices[79][3] = "La cofirma requiere de la firma de dos sujetos f&iacute;sicos o jur&iacute;dicos mientras que la contrafirma requiere de la firma de la aplicaci&oacute;n que genera los certificados del documento (portafirmas)";
 answers[79] = choices[79][2];
 units[79] = "73";
 comments[79] = "Id Pregunta: 10477. ";


//  Id pregunta: 10496 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  &iquest;Cual de las siguientes es una implementaci&oacute;n del protocolo LDAP?";
 choices[80]= new Array();
 choices[80][0] = "eDirectory";
 choices[80][1] = "iPlanet";
 choices[80][2] = "Active Directory";
 choices[80][3] = "Todos lo son";
 answers[80] = choices[80][3];
 units[80] = "74, 106";
 comments[80] = "Id Pregunta: 10496. eDirectory es la implementaci&oacute;n de Novell, e iPlanet la de Sun";


//  Id pregunta: 10617 AÃ±o de creación de pregunta: 2015-01-01
 questions[81]= "82)  Se&ntilde;ale aquel que se corresponde con un protocolo de establecimiento de claves entre partes:";
 choices[81]= new Array();
 choices[81][0] = "Diffie Hellman";
 choices[81][1] = "RIPEMD";
 choices[81][2] = "Rabbit";
 choices[81][3] = "Blowfish";
 answers[81] = choices[81][0];
 units[81] = "72";
 comments[81] = "Id Pregunta: 10617. ";


//  Id pregunta: 10774 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  Seg&uacute;n se establece en la pol&iacute;tica de certificaci&oacute;n de la DGP para el DNI electr&oacute;nico (DNIe) en lo relativo a las autoridades de certificaci&oacute;n (AC) ra&iacute;z y subordinadas, &iquest;cu&aacute;l es el tama&ntilde;o de esas claves?";
 choices[82]= new Array();
 choices[82][0] = "El tama&ntilde;o de las claves de la AC Ra&iacute;z es de 2048 bits y el de claves de las AC subordinadas ser&aacute; de 4096 bits.";
 choices[82][1] = "Las claves de la AC Ra&iacute;z y de las AC subordinadas ser&aacute;n de 2048 bits.";
 choices[82][2] = "El tama&ntilde;o de las claves es: 4096 bits para la AC Ra&iacute;z y 2048 bits para las AC Subordinadas.";
 choices[82][3] = "El tama&ntilde;o de las claves de la AC Ra&iacute;z es 8192 bits para la ra&iacute;z y 4096 bits para las AC subordinadas.";
 answers[82] = choices[82][2];
 units[82] = "74";
 comments[82] = "Id Pregunta: 10774. Examen GSI 2014";


//  Id pregunta: 10899 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  &iquest;Cu&aacute;l de los siguientes modos de funcionamiento NO se corresponde con el algoritmo de cifrado DES?";
 choices[83]= new Array();
 choices[83][0] = "Modo ECB (Electronic CodeBook).";
 choices[83][1] = "Modo CBC (Cipher Block Chaining).";
 choices[83][2] = "Modo OFB (Output FeedBack).";
 choices[83][3] = "Modo UBC (Uncipher Block Chaining).";
 answers[83] = choices[83][3];
 units[83] = "73, 74";
 comments[83] = "Id Pregunta: 10899. Examen GSI 2014";


//  Id pregunta: 10983 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  Respecto a los ficheros de firma electr&oacute;nica y los documentos firmados electr&oacute;nicamente, se&ntilde;ale la respuesta correcta:";
 choices[84]= new Array();
 choices[84][0] = "El documento firmado siempre va inclu&iacute;do en el fichero de firma, tanto en XAdES como en CAdES.";
 choices[84][1] = "En CAdES, el documento puede no incluirse en el fichero de firma. Estas firmas se llaman expl&iacute;citas.";
 choices[84][2] = "El documento firmado se incluye en el fichero de firma en XAdES, y no se puede incluir en CAdES.";
 choices[84][3] = "En XAdES, s&oacute;lo se puede firmar de forma impl&iacute;cita, en la que el documento no se incluye en el resultado de firma y solamente se incluye una referencia al lugar en el que se encuentra.";
 answers[84] = choices[84][1];
 units[84] = "72";
 comments[84] = "Id Pregunta: 10983. TIC A1 AGE 2014";


//  Id pregunta: 11003 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  Indique la respuesta FALSA respecto a las autoridades de validaci&oacute;n del DNI electr&oacute;nico:";
 choices[85]= new Array();
 choices[85][0] = "La prestaci&oacute;n de estos servicios de validaci&oacute;n se realiza en base a Online Certificate Status Protocol (OCSP).";
 choices[85][1] = "Para la validaci&oacute;n del DNI electr&oacute;nico se dispone de dos prestadores de Servicios de Validaci&oacute;n.";
 choices[85][2] = "La informaci&oacute;n sobre los certificados electr&oacute;nicos revocados se almacena en las denominadas listas de revocaci&oacute;n de certificados (CRL).";
 choices[85][3] = "En la Infraestructura de Clave P&uacute;blica adoptada para el DNI electr&oacute;nico, se ha optado por asignar a una misma entidad las funciones de Autoridad de Validaci&oacute;n y Certificaci&oacute;n.";
 answers[85] = choices[85][3];
 units[85] = "74";
 comments[85] = "Id Pregunta: 11003. TIC A1 AGE 2014";


//  Id pregunta: 11051 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  &iquest;Qu&eacute; algoritmo genera un Hash de mayor longitud?";
 choices[86]= new Array();
 choices[86][0] = "MD5";
 choices[86][1] = "SHA-1";
 choices[86][2] = "SHA-384";
 choices[86][3] = "WHIRLPOOL";
 answers[86] = choices[86][3];
 units[86] = "72";
 comments[86] = "Id Pregunta: 11051. WHIRLPOOL produce un Hash de 512 bits";


//  Id pregunta: 11086 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  Dado un mensaje, m, y su cifrado mediante OTP (one time pad), c. &iquest;se puede obtener la clave utilizada en el cifrado?";
 choices[87]= new Array();
 choices[87][0] = "No, no se puede";
 choices[87][1] = "S&iacute;, la clave es k = m XOR c";
 choices[87][2] = "S&oacute;lo pueden calcularse la mitad de los bits de la clave";
 choices[87][3] = "S&iacute;, la clave es k = m XOR m";
 answers[87] = choices[87][1];
 units[87] = "72";
 comments[87] = "Id Pregunta: 11086. ";


//  Id pregunta: 11088 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  Sal (salt) en criptograf&iacute;a&hellip;";
 choices[88]= new Array();
 choices[88][0] = "Es un algoritmo de cifrado de bloques";
 choices[88][1] = "Comprende bits aleatorios que se usan como una de las entradas en una funci&oacute;n derivadora de claves.";
 choices[88][2] = "Las sales hacen mucho m&aacute;s lentos los ataques de diccionario y los ataques de fuerza bruta";
 choices[88][3] = "B y C son correctas";
 answers[88] = choices[88][3];
 units[88] = "72";
 comments[88] = "Id Pregunta: 11088. ";


//  Id pregunta: 11146 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  &iquest;Cu&aacute;l de los siguientes cifrados sim&eacute;tricos es de flujo?";
 choices[89]= new Array();
 choices[89][0] = "RC-4";
 choices[89][1] = "IDEA";
 choices[89][2] = "RC-5";
 choices[89][3] = "AES";
 answers[89] = choices[89][0];
 units[89] = "72";
 comments[89] = "Id Pregunta: 11146. ";


//  Id pregunta: 11148 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  De acuerdo con la Ley 9/2014 General de Telecomunicaciones, &iquest;cu&aacute;l es el plazo m&aacute;ximo de validez de los certificados reconocidos para firma electr&oacute;nica?";
 choices[90]= new Array();
 choices[90][0] = "3 a&ntilde;os";
 choices[90][1] = "4 a&ntilde;os";
 choices[90][2] = "5 a&ntilde;os";
 choices[90][3] = "6 a&ntilde;os";
 answers[90] = choices[90][2];
 units[90] = "73";
 comments[90] = "Id Pregunta: 11148. ";


//  Id pregunta: 11150 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;Cu&aacute;l de lo siguientes sistemas de firma electr&oacute;nica utilizan las Administraciones P&uacute;blicas para la actuaci&oacute;n administrativa automatizada, con objeto de su identificaci&oacute;n electr&oacute;nica y para la autenticaci&oacute;n de los documentos electr&oacute;nicos que produzcan?";
 choices[91]= new Array();
 choices[91][0] = "Sello electr&oacute;nico";
 choices[91][1] = "C&oacute;digo seguro de verificaci&oacute;n";
 choices[91][2] = "Todos los anteriores";
 choices[91][3] = "Ninguno de los anteriores";
 answers[91] = choices[91][2];
 units[91] = "73";
 comments[91] = "Id Pregunta: 11150. ";


//  Id pregunta: 11152 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l de los siguientes es un requisito de seguridad aplicable a los prestadores de servicios de confianza TSP?";
 choices[92]= new Array();
 choices[92][0] = "Adoptar&aacute;n las medidas t&eacute;cnicas y organizativas adecuadas para gestionar los riesgos para la seguridad de los servicios de confianza que prestan.";
 choices[92][1] = "En un plazo m&aacute;ximo de 48 horas tras tener conocimiento de ellas, notificar&aacute;n al Ministerio de Industria como organismo supervisor y al organismo nacional competente en materia de seguridad de la informaci&oacute;n, o la autoridad de protecci&oacute;n de datos, cualquier violaci&oacute;n de la seguridad o p&eacute;rdida de la integridad que tenga un impacto significativo en el servicio de confianza prestado o en los datos personales correspondientes.";
 choices[92][2] = "Cuando la violaci&oacute;n de seguridad o la p&eacute;rdida de integridad puedan atentar contra una persona f&iacute;sica o jur&iacute;dica a la que se ha prestado el servicio de confianza, el TSP notificar&aacute; tambi&eacute;n a la persona, en un plazo de 72 horas, la violaci&oacute;n de seguridad o la p&eacute;rdida de integridad.";
 choices[92][3] = "Si una violaci&oacute;n de la seguridad o p&eacute;rdida de la integridad afecta a dos o m&aacute;s Estados miembros, el organismo de supervisi&oacute;n notificado informar&aacute; al respecto &uacute;nicamente a los organismos de supervisi&oacute;n de los dem&aacute;s Estados miembros de que se trate.";
 answers[92] = choices[92][0];
 units[92] = "74";
 comments[92] = "Id Pregunta: 11152. ";


//  Id pregunta: 11255 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  En relaci&oacute;n con los modos de operaci&oacute;n fundamentales de los algoritmos hash:";
 choices[93]= new Array();
 choices[93][0] = "El modo de operaci&oacute;n MDC sirve para la verificaci&oacute;n de integridad de mensajes";
 choices[93][1] = "MAC permite comprobar tanto la integridad como la autenticidad del origen de un mensaje a trav&eacute;s de una clave compartida.";
 choices[93][2] = "HMAC de IPSec es un ejemplo de implementaci&oacute;n de MAC.";
 choices[93][3] = "Todas las respuestas son verdaderas";
 answers[93] = choices[93][3];
 units[93] = "72";
 comments[93] = "Id Pregunta: 11255. ";


//  Id pregunta: 11258 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  En relaci&oacute;n con los efectos jur&iacute;dicos de las firmas electr&oacute;nicas, indique la respuesta correcta:";
 choices[94]= new Array();
 choices[94][0] = "No se denegar&aacute;n efectos jur&iacute;dicos ni admisibilidad como prueba en procedimientos judiciales a una firma electr&oacute;nica por el mero hecho de ser una firma electr&oacute;nica o porque no cumpla los requisitos de la firma electr&oacute;nica cualificada.";
 choices[94][1] = "Una firma electr&oacute;nica cualificada tendr&aacute; un efecto jur&iacute;dico equivalente al de una firma manuscrita.";
 choices[94][2] = "Una firma electr&oacute;nica b&aacute;sica, como usuario y contrase&ntilde;a, puede ser prueba en juicio.";
 choices[94][3] = "Todas son verdaderas.";
 answers[94] = choices[94][3];
 units[94] = "73";
 comments[94] = "Id Pregunta: 11258. ";


//  Id pregunta: 11262 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Para los niveles de seguridad de los sistemas de autenticaci&oacute;n definidos en el Reglamento 910/2014 relativo a la identificaci&oacute;n electr&oacute;nica y los servicios de confianza para las transacciones electr&oacute;nicas en el mercado interior, NO es cierto:";
 choices[95]= new Array();
 choices[95][0] = "Se tienen en cuenta tanto el proyecto europeo STORK como la norma ISO 29115.";
 choices[95][1] = "El nivel sustancial de STORK requiere un registro presencial al menos una vez, y la credencial electr&oacute;nica se entrega como certificado hardware.";
 choices[95][2] = "El modelo QAA (Quality, Authentication, Assurance) diferencia los factores asociados al proceso de registro y entrega de la credencial, y factores asociados al proceso de autenticaci&oacute;n electr&oacute;nica con dicha credencial.";
 choices[95][3] = "El DNIe se corresponde con un nivel 4 de QAA.";
 answers[95] = choices[95][1];
 units[95] = "73";
 comments[95] = "Id Pregunta: 11262. ";


//  Id pregunta: 11515 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  En el est&aacute;ndar XADES de firma electr&oacute;nica, el perfil que incluye un TimeStamp a las referencias de las CRLs, es:";
 choices[96]= new Array();
 choices[96][0] = "XADES-X";
 choices[96][1] = "XADES-T";
 choices[96][2] = "XADES-XL";
 choices[96][3] = "XADES-C";
 answers[96] = choices[96][0];
 units[96] = "72";
 comments[96] = "Id Pregunta: 11515. NULL";


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


//  Id pregunta: 11519 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Qu&eacute; es FALSO si hablamos de SET?";
 choices[98]= new Array();
 choices[98][0] = "Es una aplicaci&oacute;n distribuida que en particular usa canales virtuales seguros y sirve para pagos con tarjetas de cr&eacute;dito.";
 choices[98][1] = "Es un est&aacute;ndar privado propuesto por Visa-Microsoft, Mastercard-Netscape.";
 choices[98][2] = "Es m&aacute;s sencillo de implementar que SSL, lo que contribuye a su r&aacute;pida y progresiva implantaci&oacute;n en el mercado.";
 choices[98][3] = "Es el acr&oacute;nimo de Secure Electronic Transactions, Transacciones Electr&oacute;nicas Seguras";
 answers[98] = choices[98][2];
 units[98] = "72";
 comments[98] = "Id Pregunta: 11519. NULL";


//  Id pregunta: 11628 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Las tarjetas de proximidad se encuentran recogidas en el est&aacute;ndar:";
 choices[99]= new Array();
 choices[99][0] = "ISO 10536";
 choices[99][1] = "ISO 14443";
 choices[99][2] = "ISO 15693";
 choices[99][3] = "ISO 16949";
 answers[99] = choices[99][1];
 units[99] = "74";
 comments[99] = "Id Pregunta: 11628. ";


