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

//  Id pregunta: 687 AÃ±o de creación de pregunta: 2005-01-01
 questions[0]= "1)  La &uacute;nica empresa u organismo en Espa&ntilde;a que proporciona certificados digitales es la FNMT:";
 choices[0]= new Array();
 choices[0][0] = "Es completamente cierto";
 choices[0][1] = "Es cierto para certificados servidor";
 choices[0][2] = "Es completamente falso";
 choices[0][3] = "Es cierto s&oacute;lo para certificados de empleado p&uacute;blico, sede electr&oacute;nica y sello electr&oacute;nico";
 answers[0] = choices[0][2];
 units[0] = "73";
 comments[0] = "Id Pregunta: 687. ";


//  Id pregunta: 708 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  Cu&aacute;l de las siguientes tecnolog&iacute;as no est&aacute; relacionada con la identificaci&oacute;n y autentificaci&oacute;n:";
 choices[1]= new Array();
 choices[1][0] = "Certificados";
 choices[1][1] = "Single Sign On";
 choices[1][2] = "Kerberos";
 choices[1][3] = "NetBios";
 answers[1] = choices[1][3];
 units[1] = "73";
 comments[1] = "Id Pregunta: 708. Similar a examen TIC SS A 2004";


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


//  Id pregunta: 765 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  con respecto a la seguridad";
 choices[3]= new Array();
 choices[3][0] = "PGP basa su modelo en la existencia de una entidad de certificacion ";
 choices[3][1] = "si la entidad de certificaci&oacute;n es de reconocido prestigio, no se necesita entidad de registro en PKI";
 choices[3][2] = "El certificado digital contiene s&oacute;lo la clave p&uacute;blica, no los datos del sujeto";
 choices[3][3] = "Ninguna de las anteriores";
 answers[3] = choices[3][3];
 units[3] = "73";
 comments[3] = "Id Pregunta: 765. ";


//  Id pregunta: 783 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  &iquest;Cu&aacute;l de los siguientes algoritmos criptogr&aacute;ficos es de tipo asim&eacute;trico?";
 choices[4]= new Array();
 choices[4][0] = "Triple DES (TDES)";
 choices[4][1] = "Rinjdael (AES)";
 choices[4][2] = "Diffie-Hellman";
 choices[4][3] = "IDEA (International Data Encription Algorithm)";
 answers[4] = choices[4][2];
 units[4] = "72";
 comments[4] = "Id Pregunta: 783. SS-A 2004";


//  Id pregunta: 824 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;A qu&eacute; hace referencia el est&aacute;ndar LDAP?:";
 choices[5]= new Array();
 choices[5][0] = "Comprensi&oacute;n de datos";
 choices[5][1] = "Directorio electr&oacute;nico";
 choices[5][2] = "Comprensi&oacute;n de datos";
 choices[5][3] = "Protocolo de transporte OSI";
 answers[5] = choices[5][1];
 units[5] = "73";
 comments[5] = "Id Pregunta: 824. ";


//  Id pregunta: 999 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  El algoritmo RSA se emplea para:";
 choices[6]= new Array();
 choices[6][0] = "Cifrar datos con una clave secreta";
 choices[6][1] = "Cifrar datos con una criptograf&iacute;a de clave p&uacute;blica";
 choices[6][2] = "Obtener un resumen (huella digital) de un documento";
 choices[6][3] = "Ninguna de las anteriores";
 answers[6] = choices[6][1];
 units[6] = "72";
 comments[6] = "Id Pregunta: 999. ";


//  Id pregunta: 1120 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  En los criptosistemas asim&eacute;tricos:";
 choices[7]= new Array();
 choices[7][0] = "El emisor cifra con la clave p&uacute;blica del receptor y el receptor descifra con la clave p&uacute;blica del emisor";
 choices[7][1] = "El emisor cifra con su clave p&uacute;blica y el receptor descifra con su clave privada";
 choices[7][2] = "El emisor cifra con la clave p&uacute;blica del receptor y el receptor descifra con su clave privada";
 choices[7][3] = "El emisor cifra con su clave privada y el receptor descifra con su clave p&uacute;blica";
 answers[7] = choices[7][2];
 units[7] = "72";
 comments[7] = "Id Pregunta: 1120. ";


//  Id pregunta: 1217 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  La definici&oacute;n de PKI, seg&uacute;n IETF - PKIX es:";
 choices[8]= new Array();
 choices[8][0] = "El conjunto de hardware, software, pol&iacute;ticas y procedimientos necesarios para crear, gestionar, almacenar, distribuir y revocar certificados basados en criptograf&iacute;a de clave p&uacute;blica";
 choices[8][1] = "El conjunto de hardware, software, personal, pol&iacute;ticas y procedimientos necesarios para crear, gestionar y almacenarcertificados basados en criptograf&iacute;a de clave p&uacute;blica";
 choices[8][2] = "El conjunto de hardware, software, personal, pol&iacute;ticas y procedimientos necesarios para crear, gestionar, almacenar, distribuir y revocar certificados basados en criptograf&iacute;a de clave p&uacute;blica";
 choices[8][3] = "El conjunto de pol&iacute;ticas y procedimientos necesarios para crear, gestionar, almacenar, distribuir y revocar certificados basados en criptograf&iacute;a de clave p&uacute;blica";
 answers[8] = choices[8][2];
 units[8] = "74";
 comments[8] = "Id Pregunta: 1217. NULL";


//  Id pregunta: 1269 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  Los algoritmos de clave p&uacute;blica o asim&eacute;trica:";
 choices[9]= new Array();
 choices[9][0] = "no han alcanzado la perfecci&oacute;n matem&aacute;tica, hay ataques m&aacute;s eficaces que la fuerza bruta";
 choices[9][1] = "presentan altas tasas de cifrado y descifrado";
 choices[9][2] = "su distribuci&oacute;n usando directorios p&uacute;blicos es compleja";
 choices[9][3] = "no son compatibles con el concepto de certificado";
 answers[9] = choices[9][0];
 units[9] = "72";
 comments[9] = "Id Pregunta: 1269. ";


//  Id pregunta: 1374 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  SSL:";
 choices[10]= new Array();
 choices[10][0] = "Permite a un comercio en internet cobrar a sus clientes, efectuando la transacci&oacute;n por medio de un tercero de confianza (banco)";
 choices[10][1] = "Permite que un tercero cn acceso al tr&aacute;fico entre el servidor y el cliente no pueda romper la confidencialidad";
 choices[10][2] = "Es un algoritmo de cifrado, de un n&uacute;mero de bits variable";
 choices[10][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[10] = choices[10][1];
 units[10] = "72";
 comments[10] = "Id Pregunta: 1374. ";


//  Id pregunta: 1516 AÃ±o de creación de pregunta: 2003-01-01
 questions[11]= "12)  &iquest;Sobre qu&eacute; versa el est&aacute;ndar PKCS7 de criptograf&iacute;a?";
 choices[11]= new Array();
 choices[11][0] = "Formato de certificado digital";
 choices[11][1] = "Formato de sobre digital";
 choices[11][2] = "Cifrado con clave privada";
 choices[11][3] = "Sintaxis de la clave privada";
 answers[11] = choices[11][1];
 units[11] = "74";
 comments[11] = "Id Pregunta: 1516. NULL";


//  Id pregunta: 1580 AÃ±o de creación de pregunta: 2004-01-01
 questions[12]= "13)  Sobre el algoritmo de cifrado RSA en no es cierto que";
 choices[12]= new Array();
 choices[12][0] = "Es utilizado para firmar digitalmente";
 choices[12][1] = "Fue propuesto por Diffie y Hellman";
 choices[12][2] = "Lo que se cifra con la clave privada se descifra con la p&uacute;blica";
 choices[12][3] = "Lo que se cifra con la clave p&uacute;blica se descifra con la privada";
 answers[12] = choices[12][1];
 units[12] = "72";
 comments[12] = "Id Pregunta: 1580. Tanenbaum";


//  Id pregunta: 1615 AÃ±o de creación de pregunta: 2003-01-01
 questions[13]= "14)  Las t&eacute;cnicas orientadas a garantizar la seguridad en las operaciones relacionadas con los servicios de certificaci&oacute;n y firma electr&oacute;nica, deben cumplir los principios de:";
 choices[13]= new Array();
 choices[13][0] = "Confidencialidad, Seguridad, Integridad, y Autenticaci&oacute;n.";
 choices[13][1] = "Confidencialidad, Integridad, Autenticaci&oacute;n, y No Repudio.";
 choices[13][2] = "Disponibilidad, Integridad, Autenticaci&oacute;n, y No Repudio.";
 choices[13][3] = "Disponibilidad, Seguridad, Integridad, y Autenticaci&oacute;n.";
 answers[13] = choices[13][1];
 units[13] = "72";
 comments[13] = "Id Pregunta: 1615. Junta Andaluc&iacute;a";


//  Id pregunta: 1857 AÃ±o de creación de pregunta: 2006-01-01
 questions[14]= "15)  En relaci&oacute;n a los certificados X.509:";
 choices[14]= new Array();
 choices[14][0] = "Se codifican mediante la notaci&oacute;n ASN.1";
 choices[14][1] = "Permite el uso en sus campos de nombres X.500 y DNS";
 choices[14][2] = "Se han definido extensiones que permiten incluir informaci&oacute;n espec&iacute;fica";
 choices[14][3] = "Todas las anteriores son ciertas";
 answers[14] = choices[14][3];
 units[14] = "73";
 comments[14] = "Id Pregunta: 1857. ";


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


//  Id pregunta: 1865 AÃ±o de creación de pregunta: 2006-01-01
 questions[16]= "17)  &iquest;Qu&eacute; es falso respecto a LDAP?";
 choices[16]= new Array();
 choices[16][0] = "Cada entrada cuenta con un nombre DN";
 choices[16][1] = "Representa todos los campos mediante ASN.1";
 choices[16][2] = "Ha eliminado opciones respecto a DAP";
 choices[16][3] = "Las entradas se pueden organizar en &aacute;rbol";
 answers[16] = choices[16][1];
 units[16] = "74";
 comments[16] = "Id Pregunta: 1865. RFC 4514";


//  Id pregunta: 1868 AÃ±o de creación de pregunta: 2006-01-01
 questions[17]= "18)  &iquest;D&oacute;nde se recoge la posici&oacute;n de los contactos del chip enuna tarjetainteligente?";
 choices[17]= new Array();
 choices[17][0] = "ISO 7816-1";
 choices[17][1] = "ISO 7816-2";
 choices[17][2] = "ISO 7816-3";
 choices[17][3] = "ISO 7816-4";
 answers[17] = choices[17][1];
 units[17] = "74";
 comments[17] = "Id Pregunta: 1868. NULL";


//  Id pregunta: 1916 AÃ±o de creación de pregunta: 2006-01-01
 questions[18]= "19)  Seg&uacute;n la recomendaci&oacute;n X.509 v.3";
 choices[18]= new Array();
 choices[18][0] = "Un usuario puede tener a lo sumo un certificado de atributos por cada certificado de clave p&uacute;blica";
 choices[18][1] = "Los certificados de atributos deben ser generados por Autoridades de Certificaci&oacute;n";
 choices[18][2] = "Para su validez, los certificados de atributos deben estar siempre acompa&ntilde;ados de un certificado de clave p&uacute;blica";
 choices[18][3] = "Los certificados de atributos contienen id&eacute;nticos campos que subcampos tiene el campo de extensiones de los certificados de clave p&uacute;blica";
 answers[18] = choices[18][2];
 units[18] = "73";
 comments[18] = "Id Pregunta: 1916. ";


//  Id pregunta: 1946 AÃ±o de creación de pregunta: 2006-01-01
 questions[19]= "20)  Sean en una comunicaci&oacute;n: m=mensaje a transmitir; y=h(m) el c&oacute;digo hash del mensaje m calculado en origen; m&rsquo;=mensaje recibido; y&rsquo;=h(m&acute;) el c&oacute;digo hash del mensaje m&acute; recibido, calculado en destino. Se&ntilde;alar cual de las siguientes afirmaciones es cierta:";
 choices[19]= new Array();
 choices[19][0] = "Si y = y&acute; entonces se puede afirmar que la integridad de m est&aacute; garantizada en m&acute;";
 choices[19][1] = "Si y != y&acute; entonces se puede afirmar que la clave privada ha sido alterada";
 choices[19][2] = "Si m = m&acute; entonces se puede afirmar que la confidencialidad de y est&aacute; garantizada en y&acute;";
 choices[19][3] = "Si y = y&acute; entonces se puede afirmar que la confidencialidad de m est&aacute; garantizada en m&acute;";
 answers[19] = choices[19][0];
 units[19] = "72";
 comments[19] = "Id Pregunta: 1946. ";


//  Id pregunta: 1954 AÃ±o de creación de pregunta: 2006-01-01
 questions[20]= "21)  En lo que concierne a los algoritmos de cifrado, la recomendaci&oacute;n PKCS#7 de la compa&ntilde;&iacute;a RSA se refiere a:";
 choices[20]= new Array();
 choices[20][0] = "Formato del sobre digital";
 choices[20][1] = "Formato del certificado digital";
 choices[20][2] = "Sintaxis de la clave privada";
 choices[20][3] = "Algoritmo Diffie-Hellman";
 answers[20] = choices[20][0];
 units[20] = "72";
 comments[20] = "Id Pregunta: 1954. ";


//  Id pregunta: 3001 AÃ±o de creación de pregunta: 2004-01-01
 questions[21]= "22)  De los siguientes &iquest;Cu&aacute;l es un componente b&aacute;sico de un cortafuegos?";
 choices[21]= new Array();
 choices[21][0] = "El balanceados de carga (o asignador de tareas) que permite la ampliaci&oacute;n horizontal del &quot;basti&oacute;n&quot; mediante la asignaci&oacute;n de tramas IP entre varias subredes o m&aacute;quinas configuradas en forma id&eacute;ntica.";
 choices[21][1] = "Los servicios proxy, entendidos como aplicaciones SW para reenviar o bloquear conexiones a servicios como finger, telnet o ftp";
 choices[21][2] = "el sistema operativo LINUX en sus distribuciones seguras";
 choices[21][3] = "La monitorizaci&oacute;n de servicios de red tipo SMTP, POP3, HTTP, NNTP, PING,&hellip;,  a efectos de disponibilidad y rendimiento (performance)";
 answers[21] = choices[21][1];
 units[21] = "111";
 comments[21] = "Id Pregunta: 3001. NULL";


//  Id pregunta: 3019 AÃ±o de creación de pregunta: 2004-01-01
 questions[22]= "23)  Entre los ataques de seguridad que se producen a trav&eacute;s de redes como internet, aparece el concepto de Phishing. &iquest;Cu&aacute;l de las siguientes definiciones se ajustan a este concepto?";
 choices[22]= new Array();
 choices[22][0] = "Suplantaci&oacute;n de la direcci&oacute;n IP";
 choices[22][1] = "Suplantaci&oacute;n de identidades de organizaciones para conseguir informaci&oacute;n confidencial (contrase&ntilde;as o palabras de acceso)";
 choices[22][2] = "Escuchas en red con el fin de conseguir informaci&oacute;n confidencial (contrase&ntilde;as o palabras de acceso)";
 choices[22][3] = "Ninguna de las anteriores";
 answers[22] = choices[22][1];
 units[22] = "111";
 comments[22] = "Id Pregunta: 3019. NULL";


//  Id pregunta: 3030 AÃ±o de creación de pregunta: 2005-01-01
 questions[23]= "24)  Al instalar un cortafuegos (firewall) para la protecci&oacute;n de un servidor web, a&ntilde;adimos un mecanismo de salvaguarda que incrementa los niveles de:";
 choices[23]= new Array();
 choices[23][0] = "La dimensi&oacute;n de confidencialidad de la informaci&oacute;n";
 choices[23][1] = "La dimensi&oacute;n de disponibilidad de la informaci&oacute;n";
 choices[23][2] = "La dimensi&oacute;n de integridad de la informaci&oacute;n";
 choices[23][3] = "Todas las anteriores";
 answers[23] = choices[23][3];
 units[23] = "111";
 comments[23] = "Id Pregunta: 3030. Magerit V2";


//  Id pregunta: 3036 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  &iquest;Cu&aacute;l de los siguientes ataques afecta a la disponibilidad de la informaci&oacute;n?:";
 choices[24]= new Array();
 choices[24][0] = "e-mail Spamming";
 choices[24][1] = "DoS (Denial of Service)";
 choices[24][2] = "DDoS (Distributed Denial of Service)";
 choices[24][3] = "Todos los anteriores";
 answers[24] = choices[24][3];
 units[24] = "111";
 comments[24] = "Id Pregunta: 3036. NULL";


//  Id pregunta: 3042 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  &iquest;Para que me sirve una sonda de intrusi&oacute;n?:";
 choices[25]= new Array();
 choices[25][0] = "No existe ese concepto";
 choices[25][1] = "Para devolver el ataque";
 choices[25][2] = "Para detectar actividades anormales o sospechosas en la red";
 choices[25][3] = "Para penetrar en un sistema";
 answers[25] = choices[25][2];
 units[25] = "111";
 comments[25] = "Id Pregunta: 3042. NULL";


//  Id pregunta: 3090 AÃ±o de creación de pregunta: 2005-01-01
 questions[26]= "27)  Seg&uacute;n la terminolog&iacute;a usual, la intrusi&oacute;n de un cracker en un servidor web, en el peor de los casos, puede afectar a:";
 choices[26]= new Array();
 choices[26][0] = "La dimensi&oacute;n de confidencialidad de la informaci&oacute;n";
 choices[26][1] = "La dimensi&oacute;n de disponibilidad de la informaci&oacute;n";
 choices[26][2] = "La dimensi&oacute;n de integridad de la informaci&oacute;n";
 choices[26][3] = "Todas las anteriores";
 answers[26] = choices[26][3];
 units[26] = "111";
 comments[26] = "Id Pregunta: 3090. NULL";


//  Id pregunta: 3124 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  &iquest;C&oacute;mo se denominan los 2 modos de utilizaci&oacute;n de IPSec?";
 choices[27]= new Array();
 choices[27][0] = "balanceado y no balanceado";
 choices[27][1] = "t&uacute;nel y abierto";
 choices[27][2] = "datagrama y transporte";
 choices[27][3] = "transporte y t&uacute;nel";
 answers[27] = choices[27][3];
 units[27] = "111";
 comments[27] = "Id Pregunta: 3124. NULL";


//  Id pregunta: 3186 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  &iquest;Cu&aacute;l de las siguientes topolog&iacute;as tiene un mayor nivel de seguridad?:";
 choices[28]= new Array();
 choices[28][0] = "Bus";
 choices[28][1] = "Anillo";
 choices[28][2] = "Estrella";
 choices[28][3] = "Las 3 anteriores topolog&iacute;as tienen un nivel de seguridad similar";
 answers[28] = choices[28][2];
 units[28] = "111";
 comments[28] = "Id Pregunta: 3186. NULL";


//  Id pregunta: 3419 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  Indicar cu&aacute;l de las siguientes desventajas no corresponde al uso de un filtro de paquetes como cortafuegos:";
 choices[29]= new Array();
 choices[29][0] = "Sobrecarga";
 choices[29][1] = "Dificultad de la implementaci&oacute;n de reglas de filtrado";
 choices[29][2] = "Posibilidad de ataques de &quot;IP spoofing&quot;";
 choices[29][3] = "Posibilidad de ataques de &quot;source routing&quot;";
 answers[29] = choices[29][0];
 units[29] = "111";
 comments[29] = "Id Pregunta: 3419. NULL";


//  Id pregunta: 3721 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  Los cortafuegos a nivel de aplicaci&oacute;n:";
 choices[30]= new Array();
 choices[30][0] = "suelen prestar servicios de tipo proxy";
 choices[30][1] = "son generalistas, no bas&aacute;ndose en ning&uacute;n protocolo en concreto";
 choices[30][2] = "no pueden prestar en ning&uacute;n caso servicios de autenticaci&oacute;n de usuarios";
 choices[30][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[30] = choices[30][0];
 units[30] = "111";
 comments[30] = "Id Pregunta: 3721. NULL";


//  Id pregunta: 3857 AÃ±o de creación de pregunta: 2003-01-01
 questions[31]= "32)  El cortafuegos CheckPoint Firewall-1 es:";
 choices[31]= new Array();
 choices[31][0] = "Un cortafuegos de filtrado din&aacute;mico de paquetes";
 choices[31][1] = "Un cortafuegos de inspecci&oacute;n de estado";
 choices[31][2] = "Un cortafuegos h&iacute;brido que intercepta los paquetes entre las capas 3 y4 del modelo OSI";
 choices[31][3] = "No es nada de lo anterior";
 answers[31] = choices[31][1];
 units[31] = "111";
 comments[31] = "Id Pregunta: 3857. NULL";


//  Id pregunta: 4054 AÃ±o de creación de pregunta: 2006-01-01
 questions[32]= "33)  Un buen sistema de gesti&oacute;n de contrase&ntilde;as se caracteriza por";
 choices[32]= new Array();
 choices[32][0] = "El sistema, si procede, permitir&aacute; a los usuarios que seleccionen sus contrase&ntilde;as";
 choices[32][1] = "Las contrase&ntilde;as de los usuarios con m&aacute;s privilegios se cambiar&aacute;n con mayor frecuencia";
 choices[32][2] = "El sistema no mantendr&aacute; un registro de las &uacute;ltimas contrase&ntilde;as usadas, manteniendo s&oacute;lo la actual";
 choices[32][3] = "A y B son correctas";
 answers[32] = choices[32][3];
 units[32] = "111";
 comments[32] = "Id Pregunta: 4054. NULL";


//  Id pregunta: 4144 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  Un programa aparentemente in&oacute;cuo y &uacute;til que al instalarlo el usuario, es utilizado por un tercero para realizar acciones no autorizadas sobre el sistema se llama";
 choices[33]= new Array();
 choices[33][0] = "honeypot";
 choices[33][1] = "bomba l&oacute;gica";
 choices[33][2] = "virus";
 choices[33][3] = "troyano";
 answers[33] = choices[33][3];
 units[33] = "111";
 comments[33] = "Id Pregunta: 4144. NULL";


//  Id pregunta: 4149 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  M&eacute;todo seguro de autorizaci&oacute;n de acceso a un servicio en una red desarrollado en el proyecto Athena del MIT";
 choices[34]= new Array();
 choices[34][0] = "Carnivore";
 choices[34][1] = "Internet Key Exchange (IKE)";
 choices[34][2] = "Kerberos";
 choices[34][3] = "SSL";
 answers[34] = choices[34][2];
 units[34] = "111";
 comments[34] = "Id Pregunta: 4149. NULL";


//  Id pregunta: 4166 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  Qu&eacute; ataque es el m&aacute;s efectivo frente a una VPN IPSec";
 choices[35]= new Array();
 choices[35][0] = "Fuerza bruta";
 choices[35][1] = "Hombre en el medio";
 choices[35][2] = "An&aacute;lisis de tr&aacute;fico";
 choices[35][3] = "Replicaci&oacute;n (replay)";
 answers[35] = choices[35][1];
 units[35] = "111";
 comments[35] = "Id Pregunta: 4166. NULL";


//  Id pregunta: 4467 AÃ±o de creación de pregunta: 2007-01-01
 questions[36]= "37)  El DNI digital permitir&aacute;:";
 choices[36]= new Array();
 choices[36][0] = "Firmar y cifrar.";
 choices[36][1] = "Solo firmar.";
 choices[36][2] = "Solo cifrar.";
 choices[36][3] = "Solo funciones 3DES";
 answers[36] = choices[36][1];
 units[36] = "74";
 comments[36] = "Id Pregunta: 4467. NULL";


//  Id pregunta: 4770 AÃ±o de creación de pregunta: 2007-01-01
 questions[37]= "38)  Si Alice quiere transmitir un documento cifrado (sin autentcaci&oacute;n) hacia Bob utilizando un algoritmo de clave asim&eacute;trica";
 choices[37]= new Array();
 choices[37][0] = "Debe cifrarlo con la clave p&uacute;blica de Bob";
 choices[37][1] = "Debe cifrarlo con la clave privada de Bob";
 choices[37][2] = "Debe cifrarlo con la clave privada de Alice";
 choices[37][3] = "Debe cifrarlo con la clave p&uacute;blica de Alice";
 answers[37] = choices[37][0];
 units[37] = "74";
 comments[37] = "Id Pregunta: 4770. NULL";


//  Id pregunta: 4870 AÃ±o de creación de pregunta: 2007-01-01
 questions[38]= "39)  Seg&uacute;n la recomendaci&oacute;n X.509 v.3, las Listas de certificados revocados (CRL)";
 choices[38]= new Array();
 choices[38][0] = "Permiten conocer el estado de un certificado en el instante de la consulta";
 choices[38][1] = "Para cada certificado revocado indican, entre otros, el nombre del titular del certificado y la correspondienteclave p&uacute;blica";
 choices[38][2] = "Pueden contener certificados revocados por diversas Autoridades de Certificaci&oacute;n";
 choices[38][3] = "Las delta CRL son los subconjuntos en los que se divide una CRL y que instaladas en m&aacute;quinas distintasfacilitan su tratamiento";
 answers[38] = choices[38][2];
 units[38] = "73";
 comments[38] = "Id Pregunta: 4870. ";


//  Id pregunta: 5078 AÃ±o de creación de pregunta: 2003-01-01
 questions[39]= "40)  &iquest;Cu&aacute;l de las opciones siguientes NO se corresponde con servicios ofrecidos por una PKI (Public KeyInfrastructures)? :";
 choices[39]= new Array();
 choices[39][0] = "Registro de claves p&uacute;blicas: emisi&oacute;n de un nuevo certificado para una clave p&uacute;blica";
 choices[39][1] = "Revocaci&oacute;n de certificados: cancelaci&oacute;n de un certificado previamente remitido";
 choices[39][2] = "Evaluaci&oacute;n de la confianza: determinaci&oacute;n sobre si un certificado es v&aacute;lido y qu&eacute; operaciones est&aacute;npermitidas para dicho certificado";
 choices[39][3] = "Realizaci&oacute;n de tr&aacute;mites de forma segura con la Administraci&oacute;n P&uacute;blica a trav&eacute;s de Internet";
 answers[39] = choices[39][3];
 units[39] = "74";
 comments[39] = "Id Pregunta: 5078. Examen TIC A 2007";


//  Id pregunta: 5088 AÃ±o de creación de pregunta: 2003-01-01
 questions[40]= "41)  Un servicio de directorio electr&oacute;nico NO se caracteriza por ";
 choices[40]= new Array();
 choices[40][0] = "ser flexible";
 choices[40][1] = "Aceptar cierta inconsistencia temporal de la informaci&oacute;n en su replicaci&oacute;n";
 choices[40][2] = "Ser est&aacute;tico";
 choices[40][3] = "Poder ser consultado y actualizado en l&iacute;nea";
 answers[40] = choices[40][2];
 units[40] = "73";
 comments[40] = "Id Pregunta: 5088. ";


//  Id pregunta: 5090 AÃ±o de creación de pregunta: 2001-01-01
 questions[41]= "42)  &iquest;Cu&aacute;l de los siguientes no es un m&eacute;todo de actualizaci&oacute;n de CRLs?";
 choices[41]= new Array();
 choices[41][0] = "muestreo de CRLs";
 choices[41][1] = "env&iacute;o de CRL";
 choices[41][2] = "anuncio de CRL";
 choices[41][3] = "verificaci&oacute;n en l&iacute;nea";
 answers[41] = choices[41][1];
 units[41] = "73";
 comments[41] = "Id Pregunta: 5090. ";


//  Id pregunta: 5092 AÃ±o de creación de pregunta: 2003-01-01
 questions[42]= "43)  Las dimensiones del DNI electr&oacute;nico son:";
 choices[42]= new Array();
 choices[42][0] = "85,60 mm de ancho X 53,98 mm de alto";
 choices[42][1] = "8,6 mm de ancho X 5,9 mm de alto";
 choices[42][2] = "60 mm de ancho X 58 mm de alto";
 choices[42][3] = "85,60 mm de alto X 53,98 mm de ancho";
 answers[42] = choices[42][0];
 units[42] = "74";
 comments[42] = "Id Pregunta: 5092. NULL";


//  Id pregunta: 5094 AÃ±o de creación de pregunta: 2003-01-01
 questions[43]= "44)  El &quot;modelo de informaci&oacute;n&quot; del directorio LDAP:";
 choices[43]= new Array();
 choices[43][0] = "Describe c&oacute;mo puede protegerse la informaci&oacute;n contenida en el directorio LDAP frente a accesos no autorizados";
 choices[43][1] = "Describe qu&eacute; operaciones pueden ser realizadas sobre la informaci&oacute;n almacenada en el directorio LDAP";
 choices[43][2] = "Define la estructura de la inforrmaci&oacute;n almacenada en el directorio LDAP";
 choices[43][3] = "Describe c&oacute;mo se organizan y referencian los datos";
 answers[43] = choices[43][2];
 units[43] = "74";
 comments[43] = "Id Pregunta: 5094. NULL";


//  Id pregunta: 5129 AÃ±o de creación de pregunta: 2003-01-01
 questions[44]= "45)  La seguridad de los algoritmos de cifrado debe basarse en:";
 choices[44]= new Array();
 choices[44][0] = "Mantener el funcionamiento de los algoritmos en secreto.";
 choices[44][1] = "Utilizar sistemas propietarios.";
 choices[44][2] = "Demostrar su resistencia desde un punto de vista te&oacute;rico y pr&aacute;ctico.";
 choices[44][3] = "Utilizar tarjeta electr&oacute;nica";
 answers[44] = choices[44][2];
 units[44] = "111";
 comments[44] = "Id Pregunta: 5129. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5130 AÃ±o de creación de pregunta: 2003-01-01
 questions[45]= "46)  &iquest;Cu&aacute;l es la longitud equivalente a una clave RSA de 1024 bits si utiliz&aacute;ramos un algoritmo de clave sim&eacute;trica?";
 choices[45]= new Array();
 choices[45][0] = "132";
 choices[45][1] = "80";
 choices[45][2] = "64";
 choices[45][3] = "512";
 answers[45] = choices[45][1];
 units[45] = "111";
 comments[45] = "Id Pregunta: 5130. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5459 AÃ±o de creación de pregunta: 2003-01-01
 questions[46]= "47)  Una de las ventajas del protocolo PPP respecto al SLIP es:";
 choices[46]= new Array();
 choices[46][0] = "Permite conexiones s&iacute;ncronas y as&iacute;ncronas";
 choices[46][1] = "Permite varios protocolos de red sobre &eacute;l";
 choices[46][2] = "Permite crear redes privadas virtuales";
 choices[46][3] = "Todas las respuestas son correctas";
 answers[46] = choices[46][3];
 units[46] = "100, 101, 107, 111";
 comments[46] = "Id Pregunta: 5459. Castilla y Le&oacute;n";


//  Id pregunta: 5464 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  En el directorio activo de Microsoft la definici&oacute;n de todas las definiciones de clases de todos los objetos y atributos del directorio activo se encuentra en el";
 choices[47]= new Array();
 choices[47][0] = "Schema Naming Context";
 choices[47][1] = "Active Directory Schema MMC";
 choices[47][2] = "Configuration Naming Context";
 choices[47][3] = "Domain Naming Context";
 answers[47] = choices[47][0];
 units[47] = "73";
 comments[47] = "Id Pregunta: 5464. Castilla y Le&oacute;n";


//  Id pregunta: 5475 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  Los registros glue de una zona DNS son aquellos que";
 choices[48]= new Array();
 choices[48][0] = "Son los registros que mantienen la resoluci&oacute;n inversa";
 choices[48][1] = "Son los registros que mantienen el espacio de nombres de la zona";
 choices[48][2] = "Son los registros que permiten intercambiar informaci&oacute;n entre las diferentes zonas/subzonas";
 choices[48][3] = "Son los registros que permiten la consulta delegada de otros sistemas dns";
 answers[48] = choices[48][1];
 units[48] = "73";
 comments[48] = "Id Pregunta: 5475. Castilla y Le&oacute;n";


//  Id pregunta: 5613 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  Se entiende por seguridad de los sistemas de informaci&oacute;n al conjunto de funciones, servicios y mecanismos que permitan garantizar las siguientes premisas:";
 choices[49]= new Array();
 choices[49][0] = "Autenticaci&oacute;n, confidenciabilidad, accesibilidad, servicios de no-repudiaci&oacute;n";
 choices[49][1] = "Accesibilidad, servicios de no-repudiaci&oacute;n, integridad, disponibilidad";
 choices[49][2] = "Integridad, confidencialidad, disponibilidad, servicios de no-repudiaci&oacute;n";
 choices[49][3] = "Autenticacion, confidencialidad, integridad, disponibilidad";
 answers[49] = choices[49][3];
 units[49] = "111";
 comments[49] = "Id Pregunta: 5613. NULL";


//  Id pregunta: 5688 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  Se&ntilde;ale donde se encuentran los datos biom&eacute;tricos y de identidad en el chip criptogr&aacute;fico del DNI electr&oacute;nico:";
 choices[50]= new Array();
 choices[50][0] = "Zona de seguridad";
 choices[50][1] = "Zona p&uacute;blica";
 choices[50][2] = "Zona privada";
 choices[50][3] = "Zona confidencial";
 answers[50] = choices[50][0];
 units[50] = "74";
 comments[50] = "Id Pregunta: 5688. NULL";


//  Id pregunta: 5689 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  &iquest;Es capaz el DNI electr&oacute;nico de identificar biom&eacute;tricamente al ciudadano?";
 choices[51]= new Array();
 choices[51][0] = "S&iacute;, a trav&eacute;s del iris ocular";
 choices[51][1] = "S&iacute;, a trav&eacute;s de la firma manuscrita";
 choices[51][2] = "No, no dispone de esa capacidad";
 choices[51][3] = "S&iacute;, a trav&eacute;s de la huella dactilar";
 answers[51] = choices[51][3];
 units[51] = "74";
 comments[51] = "Id Pregunta: 5689. NULL";


//  Id pregunta: 5691 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  Dentro del chip criptogr&aacute;fico del DNI electr&oacute;nico podemos encontrar tres zonas de datos diferenciadas. Una de las zonas s&oacute;lo es accesible por la Direcci&oacute;n General de la Polic&iacute;a. Se&ntilde;ale su nombre: ";
 choices[52]= new Array();
 choices[52][0] = "Zona p&uacute;blica";
 choices[52][1] = "Zona de seguridad";
 choices[52][2] = "Zona privada";
 choices[52][3] = "Zona confidencial";
 answers[52] = choices[52][1];
 units[52] = "74";
 comments[52] = "Id Pregunta: 5691. NULL";


//  Id pregunta: 5694 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  Se&ntilde;ale cual de los siguientes datos no se almacena en la zona privada del chip criptogr&aacute;fico del DNI electr&oacute;nico:";
 choices[53]= new Array();
 choices[53][0] = "Claves privadas del ciudadano";
 choices[53][1] = "Certificado de autenticaci&oacute;n";
 choices[53][2] = "Claves p&uacute;blicas del ciudadano";
 choices[53][3] = "Certificado de firma";
 answers[53] = choices[53][2];
 units[53] = "74";
 comments[53] = "Id Pregunta: 5694. NULL";


//  Id pregunta: 5743 AÃ±o de creación de pregunta: 2009-01-01
 questions[54]= "55)  En criptograf&iacute;a sim&eacute;trica, &iquest;qu&eacute; es una sustituci&oacute;n monoalfab&eacute;tica?";
 choices[54]= new Array();
 choices[54][0] = "La que cifra los caracteres de uno en uno";
 choices[54][1] = "La que sustituye cada letra por varias letras";
 choices[54][2] = "Aquella en que cada letra es sustituida siempre por la misma dentro de un mismo mensaje";
 choices[54][3] = "La que sustituye las letras en grupos de longitud variable, dependiendo de su posici&oacute;n dentro del mensaje";
 answers[54] = choices[54][2];
 units[54] = "72";
 comments[54] = "Id Pregunta: 5743. ";


//  Id pregunta: 5752 AÃ±o de creación de pregunta: 2009-01-01
 questions[55]= "56)  &iquest;Qu&eacute; longitudes de clave tienen las diferentes versiones del algoritmo AES reconocidas oficialmente por el NIST?";
 choices[55]= new Array();
 choices[55][0] = "64, 128, 256 bits";
 choices[55][1] = "128, 192, 256 bits";
 choices[55][2] = "128, 256, 512 bits";
 choices[55][3] = "128, 256, 384 bits";
 answers[55] = choices[55][1];
 units[55] = "72";
 comments[55] = "Id Pregunta: 5752. ";


//  Id pregunta: 5862 AÃ±o de creación de pregunta: 2009-01-01
 questions[56]= "57)  Con relaci&oacute;n a la especificaci&oacute;n P3P1.1, indique cu&aacute;l de las expresiones siguientes es FALSA:";
 choices[56]= new Array();
 choices[56][0] = "Es una especificaci&oacute;n desarrollada por la W3C";
 choices[56][1] = "P3P permite que los sitios Web muestren sus pr&aacute;cticas de privacidad en un formato est&aacute;ndar";
 choices[56][2] = "P3P est&aacute; basado en CCXML";
 choices[56][3] = "El lenguaje APPEL permite describir colecciones de preferencias relacionadas con las directivas P3P";
 answers[56] = choices[56][2];
 units[56] = "111";
 comments[56] = "Id Pregunta: 5862. MAP 2008 A1";


//  Id pregunta: 5883 AÃ±o de creación de pregunta: 2009-01-01
 questions[57]= "58)  &iquest;Qu&eacute; es WebDAV?";
 choices[57]= new Array();
 choices[57][0] = "Protocolo de acceso y edici&oacute;n de carpetas mediante HTTP";
 choices[57][1] = "Sistema web de creaci&oacute;n de formularios";
 choices[57][2] = "Sistema web seguro de compartici&oacute;n de procesamiento";
 choices[57][3] = "Sistema web de mensajer&iacute;a y alertas";
 answers[57] = choices[57][0];
 units[57] = "73";
 comments[57] = "Id Pregunta: 5883. MAP 2008 A1";


//  Id pregunta: 6488 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  &iquest;Cu&aacute;l de las siguientes es una herramienta IDS?";
 choices[58]= new Array();
 choices[58][0] = "Nessus";
 choices[58][1] = "Snort";
 choices[58][2] = "Nagios";
 choices[58][3] = "NetSaint";
 answers[58] = choices[58][1];
 units[58] = "111";
 comments[58] = "Id Pregunta: 6488. Castilla La Mancha 2009";


//  Id pregunta: 6540 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  En el &aacute;mbito de la biometr&iacute;a";
 choices[59]= new Array();
 choices[59][0] = "Un error Tipo I significa que el sistema ha rechazado a un individuo autorizado";
 choices[59][1] = "Un error Tipo I significa que el sistema ha autorizado a un impostor";
 choices[59][2] = "Un error Tipo II significa que el sistema ha rechazado a un individuo autorizado";
 choices[59][3] = "Un error Tipo III significa que el sistema ha rechazado a un individuo autorizado";
 answers[59] = choices[59][0];
 units[59] = "111";
 comments[59] = "Id Pregunta: 6540. NULL";


//  Id pregunta: 6549 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  &iquest;Qu&eacute; m&eacute;todo de control de acceso est&aacute; dirigida al usuario?";
 choices[60]= new Array();
 choices[60][0] = "No discrecional";
 choices[60][1] = "MAC";
 choices[60][2] = "Basado en identidades";
 choices[60][3] = "DAC";
 answers[60] = choices[60][3];
 units[60] = "111";
 comments[60] = "Id Pregunta: 6549. NULL";


//  Id pregunta: 6552 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  Dentro de los Est&aacute;ndares de Criptograf&iacute;a de Clave P&uacute;blica (PKCS)";
 choices[61]= new Array();
 choices[61][0] = "PKCS#1: Corresponde al algoritmo RSA";
 choices[61][1] = "PKCS#3: Corresponde al algoritmo Diffie-Hellman";
 choices[61][2] = "PKCS#5: Cifrado con clave privada";
 choices[61][3] = "Todas las respuestas anteriores son correctas";
 answers[61] = choices[61][3];
 units[61] = "74";
 comments[61] = "Id Pregunta: 6552. NULL";


//  Id pregunta: 6556 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  El est&aacute;ndar X.509 v3 define los distintos elementos que debe contener un certificado, entre los que destacan:";
 choices[62]= new Array();
 choices[62][0] = "N&uacute;mero de serie del certificado";
 choices[62][1] = "Nombre de la autoridad de certificaci&oacute;n";
 choices[62][2] = "Firma digital de la autoridad  certificadora";
 choices[62][3] = "Todas las respuestas anteriores son correctas";
 answers[62] = choices[62][3];
 units[62] = "74";
 comments[62] = "Id Pregunta: 6556. NULL";


//  Id pregunta: 6569 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  El certificado X.509 no";
 choices[63]= new Array();
 choices[63][0] = "Fue definido por el antes denominado CCITT (actualmente ITU) en la recomendaci&oacute;n X.509";
 choices[63][1] = "En esta recomendaci&oacute;n se define un modelo seguro para suministrar el servicio de autenticaci&oacute;n a los usuarios del Directorio X.500 basado en criptograf&iacute;a de clave p&uacute;blica";
 choices[63][2] = "La recomendaci&oacute;n X.509 [CCI88] define un modelo de certificado en sintaxis ASN.1";
 choices[63][3] = "Todas las respuestas anteriores son ciertas";
 answers[63] = choices[63][3];
 units[63] = "73";
 comments[63] = "Id Pregunta: 6569. NULL";


//  Id pregunta: 7177 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  El n&uacute;mero m&aacute;ximo de certificados que se pueden almacenar en una  tarjeta criptogr&aacute;fica CERES es:";
 choices[64]= new Array();
 choices[64][0] = "4";
 choices[64][1] = "5";
 choices[64][2] = "10";
 choices[64][3] = "7";
 answers[64] = choices[64][2];
 units[64] = "74";
 comments[64] = "Id Pregunta: 7177. Examen TIC B 2009. Seg&uacute;n Proyecto CERES actualizado al a&ntilde;o 2015";


//  Id pregunta: 7178 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  En un esquema de certificaci&oacute;n y seguridad basado en clave p&uacute;blica (PKI), la 'tercera parte confiable' se denomina:";
 choices[65]= new Array();
 choices[65][0] = "Autoridad de Certificaci&oacute;n";
 choices[65][1] = "Autoridad de Registro";
 choices[65][2] = "Centro de Confianza";
 choices[65][3] = "Autoridad de Revocaci&oacute;n";
 answers[65] = choices[65][0];
 units[65] = "74";
 comments[65] = "Id Pregunta: 7178. Examen TIC B 2009";


//  Id pregunta: 7268 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  Un programa que se aloja en el ordenador y permite el acceso a usuarios externos, con el fin de obtener informaci&oacute;n o controlar la m&aacute;quina de forma remota, se denomina:";
 choices[66]= new Array();
 choices[66][0] = "Bot";
 choices[66][1] = "Virus";
 choices[66][2] = "Troyano";
 choices[66][3] = "Gusano";
 answers[66] = choices[66][2];
 units[66] = "111";
 comments[66] = "Id Pregunta: 7268. Examen TIC B 2009";


//  Id pregunta: 7339 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  Uno de los objetivos de la seguridad es evitar que alteren los datos durante una transmisi&oacute;n, esto es conocido como:";
 choices[67]= new Array();
 choices[67][0] = "Integridad";
 choices[67][1] = "Confidencialidad";
 choices[67][2] = "No Repudio";
 choices[67][3] = "Disponibilidad";
 answers[67] = choices[67][0];
 units[67] = "72";
 comments[67] = "Id Pregunta: 7339. NULL";


//  Id pregunta: 7340 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)  La autenticaci&oacute;n consiste en:";
 choices[68]= new Array();
 choices[68][0] = "Comprobar los permisos del usuario";
 choices[68][1] = "Comprobar que los datos no han sido alterados en una comunicaci&oacute;n";
 choices[68][2] = "Garantizar que ninguna de las partes pueda negar una operaci&oacute;n realizada";
 choices[68][3] = "Comprobar la identidad del usuario";
 answers[68] = choices[68][3];
 units[68] = "72";
 comments[68] = "Id Pregunta: 7340. NULL";


//  Id pregunta: 7341 AÃ±o de creación de pregunta: 2010-01-01
 questions[69]= "70)  Se&ntilde;ale la afirmaci&oacute;n CORRECTA:";
 choices[69]= new Array();
 choices[69][0] = "DES es un algoritmo de cifrado asim&eacute;trico";
 choices[69][1] = "RSA es un algoritmo de cifrado sim&eacute;trico";
 choices[69][2] = "AES es implementable tanto en hardware como en software";
 choices[69][3] = "Todas las anteriores son FALSAS.";
 answers[69] = choices[69][2];
 units[69] = "72";
 comments[69] = "Id Pregunta: 7341. NULL";


//  Id pregunta: 7345 AÃ±o de creación de pregunta: 2010-01-01
 questions[70]= "71)  El est&aacute;ndar de sintaxis de intercambio de informaci&oacute;n personal es:";
 choices[70]= new Array();
 choices[70][0] = "PKCS#7";
 choices[70][1] = "PKCS#9";
 choices[70][2] = "PKCS#12";
 choices[70][3] = "PKCS#14";
 answers[70] = choices[70][2];
 units[70] = "72";
 comments[70] = "Id Pregunta: 7345. NULL";


//  Id pregunta: 7779 AÃ±o de creación de pregunta: 2010-01-01
 questions[71]= "72)   Seg&uacute;n la recomendaci&oacute;n X.509 v.3:";
 choices[71]= new Array();
 choices[71][0] = " La autenticaci&oacute;n simple conlleva el uso exclusivo de contrase&ntilde;as transmitidas en claro.";
 choices[71][1] = " La autenticaci&oacute;n robusta (strong) de un sentido conlleva siempre el empleo de funciones resumen (hash).";
 choices[71][2] = " La autenticaci&oacute;n robusta (strong) de dos sentidos comporta siempre el uso de credenciales obtenidas mediante t&eacute;cnicas criptogr&aacute;ficas.";
 choices[71][3] = " La autenticaci&oacute;n robusta (strong) de tres sentidos debe incorporar siempre sellos de tiempo.";
 answers[71] = choices[71][2];
 units[71] = "73";
 comments[71] = "Id Pregunta: 7779. Map 2005";


//  Id pregunta: 8168 AÃ±o de creación de pregunta: 2010-01-01
 questions[72]= "73)  Referente a la Recomendaci&oacute;n del W3C &quot;XML Signature Syntax and Processing&quot;, &iquest;cu&aacute;l es la afirmaci&oacute;n INCORRECTA?:";
 choices[72]= new Array();
 choices[72][0] = "S&oacute;lo es posible indicar el uso del algoritmo C14N en el elemento ds:SignedInfo.";
 choices[72][1] = "Explica tres posibles formas de aplicaci&oacute;n de la firma: detached, enveloping y enveloped.";
 choices[72][2] = "Permite firmar documentos en cualquier formato, no s&oacute;lo en formato XML.";
 choices[72][3] = "Es la base para la definici&oacute;n de XAdES.";
 answers[72] = choices[72][0];
 units[72] = "72";
 comments[72] = "Id Pregunta: 8168. Examen TIC A1 2010";


//  Id pregunta: 8294 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  Un socket necesita, para estar correctamente definido, especificar el protocolo de nivel de: ";
 choices[73]= new Array();
 choices[73][0] = "Enlace.";
 choices[73][1] = "Red.";
 choices[73][2] = "Transporte.";
 choices[73][3] = "Aplicaci&oacute;n.";
 answers[73] = choices[73][2];
 units[73] = "111";
 comments[73] = "Id Pregunta: 8294. Examen TIC A2 2010";


//  Id pregunta: 8304 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  En los sistemas criptogr&aacute;ficos h&iacute;bridos: ";
 choices[74]= new Array();
 choices[74][0] = "Se prescinde del cifrado sim&eacute;trico.";
 choices[74][1] = "Se cifra la clave de sesi&oacute;n mediante un cifrado sim&eacute;trico ";
 choices[74][2] = "Se cifra la clave de sesi&oacute;n mediante un cifrado asim&eacute;trico";
 choices[74][3] = "Se omite el uso de certificados digitales, cuando se dispone de plataformas PKI.";
 answers[74] = choices[74][2];
 units[74] = "72";
 comments[74] = "Id Pregunta: 8304. Examen TIC A2 2010";


//  Id pregunta: 8307 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  Un documento firmado digitalmente incluye la huella digital:";
 choices[75]= new Array();
 choices[75][0] = "De la clave del firmante, cifrada con su clave p&uacute;blica.";
 choices[75][1] = "De la clave p&uacute;blica del firmante, cifrada con su clave privada.";
 choices[75][2] = "Del documento firmado, cifrada con la clave del firmante.";
 choices[75][3] = "Del documento firmado, cifrada con la clave p&uacute;blica del firmante.";
 answers[75] = choices[75][2];
 units[75] = "111";
 comments[75] = "Id Pregunta: 8307. Examen TIC A2 2010";


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


//  Id pregunta: 9032 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  &iquest;Cu&aacute;l de las siguientes algoritmos no es de clave sim&eacute;trica?";
 choices[77]= new Array();
 choices[77][0] = "AES";
 choices[77][1] = "DSA";
 choices[77][2] = "DES";
 choices[77][3] = "BlowFish";
 answers[77] = choices[77][1];
 units[77] = "72";
 comments[77] = "Id Pregunta: 9032. ";


//  Id pregunta: 9583 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  En el contexto de la firma electr&oacute;nica y su regulaci&oacute;n en Espa&ntilde;a se&ntilde;ale la afirmaci&oacute;n FALSA.";
 choices[78]= new Array();
 choices[78][0] = "Los funcionarios al servicio de las administraciones p&uacute;blicas espa&ntilde;olas pueden firmar en el ejercicio de su cargo utilizando su DNI electr&oacute;nico.";
 choices[78][1] = "Los c&oacute;digos de verificaci&oacute;n segura (CSV) junto con los sellos de &oacute;rgano sirven para dotar de firma electr&oacute;nica reconocida a la actuaci&oacute;n administrativa automatizada.";
 choices[78][2] = "Un dispositivo seguro de creaci&oacute;n de firma debe garantizar que los datos usados para generar la firma pueden producirse s&oacute;lo una vez.";
 choices[78][3] = "Un certificado electr&oacute;nico reconocido ha de incluir la firma electr&oacute;nica avanzada del prestador de servicios de certificaci&oacute;n que lo expide.";
 answers[78] = choices[78][1];
 units[78] = "43, 74";
 comments[78] = "Id Pregunta: 9583. Examen TIC A1 2011";


//  Id pregunta: 9584 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  Los certificados incorporados al DNI-e:";
 choices[79]= new Array();
 choices[79][0] = "Son dos: de autenticaci&oacute;n y de firma del ciudadano.";
 choices[79][1] = "Los usuarios finales pueden validarlos en la Direcci&oacute;n General de la Polic&iacute;a, que est&aacute; constituida como Autoridad de Validaci&oacute;n.";
 choices[79][2] = "Est&aacute;n basados en la recomendaci&oacute;n X. 509 v.3 sin extensi&oacute;n alguna.";
 choices[79][3] = "Est&aacute;n integrados en un chip certificado en el nivel de seguridad EAL4+ definido en la norma ISO/IEC 15408.";
 answers[79] = choices[79][3];
 units[79] = "43, 74";
 comments[79] = "Id Pregunta: 9584. Examen TIC A1 2011";


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


//  Id pregunta: 9846 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  El algoritmo DES:";
 choices[81]= new Array();
 choices[81][0] = "Es un algoritmo de cifrado asim&eacute;trico que codifica bloques de 64 bits empleando claves de 32 bits, con una permutaci&oacute;n al principio y otra al final del proceso.";
 choices[81][1] = "Es un algoritmo de cifrado por bloques que codifica bloques de 54 bits, y su estructura consta de 16 etapas.";
 choices[81][2] = "Es un algoritmo de cifrado sim&eacute;trico cuya estructura es una variaci&oacute;n de la red de Feistel.";
 choices[81][3] = "Es un algoritmo de cifrado de flujo que codifica flujos de 64 bits, empleando una clave de 64, aunque s&oacute;lo 56 bits son utilizados. Los 8 bits restantes comprueban la paridad.";
 answers[81] = choices[81][2];
 units[81] = "111";
 comments[81] = "Id Pregunta: 9846. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Extremadura 2014";


//  Id pregunta: 9853 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  &iquest;Cu&aacute;l de las siguientes afirmaciones referentes a un sistema criptogr&aacute;fico de clave p&uacute;blica o asim&eacute;trico es falsa?: ";
 choices[82]= new Array();
 choices[82][0] = "La clave privada del emisor es la usada para garantizar la confidencialidad.";
 choices[82][1] = "La criptograf&iacute;a de clave p&uacute;blica se usa para la implantaci&oacute;n de servicios de seguridad avanzados como: autenticidad (firma digital), no repudio e integridad entre otros. ";
 choices[82][2] = "El uso de criptograf&iacute;a de clave p&uacute;blica, para servicios de confidencialidad, proporciona un rendimiento muy inferior (caracteres cifrados/segundo) al proporcionado por los algoritmos sim&eacute;tricos. ";
 choices[82][3] = "La gesti&oacute;n de claves de los sistemas criptogr&aacute;ficos asim&eacute;tricos es m&aacute;s sencilla que la existente en los sistemas convecionales sim&eacute;tricos de clave secreta. ";
 answers[82] = choices[82][0];
 units[82] = "111";
 comments[82] = "Id Pregunta: 9853. Examen Gesti&oacute;n de Inform&aacute;tica Universidad de Granada 2012";


//  Id pregunta: 9854 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  En seguridad inform&aacute;tica, cu&aacute;l de los siguientes procesos, puede considerarse un m&eacute;todo de hardening de un sistema: ";
 choices[83]= new Array();
 choices[83][0] = "La reducci&oacute;n de software innecesario en el sistema.";
 choices[83][1] = "La instalaci&oacute;n de software para comprobar el estado de la red.";
 choices[83][2] = "La conexi&oacute;n a sistemas de almacenamiento (SAN o NAS).";
 choices[83][3] = "La aplicaci&oacute;n de bonding (agrupaci&oacute;n o trunking) en las interfaces de red.";
 answers[83] = choices[83][0];
 units[83] = "111";
 comments[83] = "Id Pregunta: 9854. Examen Gesti&oacute;n de Inform&aacute;tica Universidad de Granada 2012";


//  Id pregunta: 10049 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  Un archivo .PFX, de uso en certificados electr&oacute;nicos:";
 choices[84]= new Array();
 choices[84][0] = "Contiene la clave privada.";
 choices[84][1] = "Cumple la sintaxis PKCS #21.";
 choices[84][2] = "Est&aacute; codificado en un formato no binario.";
 choices[84][3] = "No se puede convertir a formato .PEM.";
 answers[84] = choices[84][0];
 units[84] = "72";
 comments[84] = "Id Pregunta: 10049. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10473 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Una CRL completa:";
 choices[85]= new Array();
 choices[85][0] = "Lista todos los certificados no expirados emitidos por la CA revocados por cualquier raz&oacute;n.";
 choices[85][1] = "Lista los certificados cuyo estado de revocaci&oacute;n ha cambiado desde la anterior CRL completa.";
 choices[85][2] = "Se emite con la periodicidad definida en la politica de actualizaciones, pero siempre que hayan transcurrido menos de 24 horas desde la &uacute;ltima emisi&oacute;n.";
 choices[85][3] = "Lista todos los certificados no expirados revocados por los motivos de revocaci&oacute;n dentro del alcance de la CRL.";
 answers[85] = choices[85][3];
 units[85] = "73";
 comments[85] = "Id Pregunta: 10473. ";


//  Id pregunta: 10479 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Si quiero cambiar el PIN del DNI electr&oacute;nico:";
 choices[86]= new Array();
 choices[86][0] = "S&oacute;lo puedo hacerlo desde mi casa pero necesito un lector de huella dactilar";
 choices[86][1] = "Puedo hacerlo desde los dispositivos autorizados por la Direcci&oacute;n General de la Polic&iacute;a";
 choices[86][2] = "Puedo hacerlo s&oacute;lo usando mi navegador web";
 choices[86][3] = "S&oacute;lo puedo hacerlo si tengo el PUK";
 answers[86] = choices[86][1];
 units[86] = "74";
 comments[86] = "Id Pregunta: 10479. NULL";


//  Id pregunta: 10480 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  La Autoridad de Certificaci&oacute;n de los certificados emitidos para el DNI electr&oacute;nico es:";
 choices[87]= new Array();
 choices[87][0] = "La F&aacute;brica Nacional de Moneda y Timbre";
 choices[87][1] = "El Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[87][2] = "El CCN (Centro Criptol&oacute;gico Nacional)";
 choices[87][3] = "El Ministerio del Interior - Direcci&oacute;n General de la Polic&iacute;a";
 answers[87] = choices[87][3];
 units[87] = "74";
 comments[87] = "Id Pregunta: 10480. NULL";


//  Id pregunta: 10492 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  &iquest;Cual de los siguientes no es un tipo de ataque ?";
 choices[88]= new Array();
 choices[88][0] = "Ataque por entrop&iacute;a";
 choices[88][1] = "Ataque por fuerza bruta";
 choices[88][2] = "Ataque con Tablas Arcoiris";
 choices[88][3] = "Todos son tipos de ataques";
 answers[88] = choices[88][0];
 units[88] = "111";
 comments[88] = "Id Pregunta: 10492. No hay referencias a ataques por entropia. En la guia CCN-STIC 436, por ejemplo, se pueden encontrar referencias a taques con Tablas Arcoiris, tambien en Wikipedia";


//  Id pregunta: 10497 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  &iquest;Se puede filtrar el tr&aacute;fico, mediante un firewall de nivel 3, entre dos m&aacute;quinas situadas en la misma LAN?";
 choices[89]= new Array();
 choices[89][0] = "Si";
 choices[89][1] = "No";
 choices[89][2] = "Depende de la configuraci&oacute;n del FW";
 choices[89][3] = "Depende de la configuraci&oacute;n de la LAN";
 answers[89] = choices[89][1];
 units[89] = "111";
 comments[89] = "Id Pregunta: 10497. Por definici&oacute;n, un FW de nivel 3 solo puede cortar tr&aacute;fico a ese nivel. Por otro lado, 2 m&aacute;quinas situadas en la misma LAN se encuentran conectadas a nivel 2 y por tanto no es posible el filtrado de tr&aacute;fico a nivel 3 dentro de una misma LAN. En el caso de";


//  Id pregunta: 10610 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  &iquest;Seg&uacute;n el Reglamento 910/2014 del Parlamento Europeo y del Consejo, cu&aacute;l de &eacute;stos son requisitos de seguridad de los TSP (Trust Service Providers)?";
 choices[90]= new Array();
 choices[90][0] = "Notificar las violaciones al MINETUR y el organismo correspondiente en m&aacute;ximo 24 horas.";
 choices[90][1] = "Mantener una base de datos de certificados";
 choices[90][2] = "Publicar las revocaciones en un m&aacute;ximo de 24 horas tras la solicitud.";
 choices[90][3] = "Todas las anteriores.";
 answers[90] = choices[90][0];
 units[90] = "74";
 comments[90] = "Id Pregunta: 10610. B y C son exclusivamente para QTSPs";


//  Id pregunta: 10616 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  El algoritmo Rijndael:";
 choices[91]= new Array();
 choices[91][0] = "Tiene un tama&ntilde;o de clave fijo de 128 bits.";
 choices[91][1] = "Tiene un tama&ntilde;o de bloque fijo de 256 bits.";
 choices[91][2] = "Tiene un tama&ntilde;o de clave de 128, 192 o 256 bits.";
 choices[91][3] = "Tiene un tama&ntilde;o de clave m&uacute;ltiplo de 32 bits.";
 answers[91] = choices[91][3];
 units[91] = "72";
 comments[91] = "Id Pregunta: 10616. AES tiene un tama&ntilde;o de clave de 128, 192 o 256 bits. Rijndael, en el que est&aacute; basado, tiene un tama&ntilde;o de clave m&uacute;ltiplo de 32 bits (m&iacute;nimo 128 bits y m&aacute;ximo 256 bits).";


//  Id pregunta: 10898 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Qui&eacute;n elabor&oacute; la especificaci&oacute;n Transport Layer Security (TLS)?";
 choices[92]= new Array();
 choices[92][0] = "UIT (Uni&oacute;n Internacional de Telecomunicaciones).";
 choices[92][1] = "IETF (Internet Engineering Task Force).";
 choices[92][2] = "Netscape Communications.";
 choices[92][3] = "ETSI (European Telecommunications Standards Institute).";
 answers[92] = choices[92][1];
 units[92] = "111";
 comments[92] = "Id Pregunta: 10898. Examen GSI 2014";


//  Id pregunta: 10934 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Cu&aacute;l de estas afirmaciones NO corresponde al CCN-CERT?";
 choices[93]= new Array();
 choices[93][0] = "El CCN-CERT es la Capacidad de Respuesta a incidentes de Seguridad de la Informaci&oacute;n del Centro Criptol&oacute;gico Nacional.";
 choices[93][1] = "Los servicios del CCN-CERT est&aacute;n dirigidos exclusivamente a la Administraci&oacute;n General del Estado.";
 choices[93][2] = "CARMEN, LUCIA e IN&Eacute;S son herramientas desarrolladas por CCN-CERT.";
 choices[93][3] = "Las funciones del CCN-CERT quedan recogidas en el RD 3/2010, de 8 de enero, regulador del Esquema Nacional de Seguridad.";
 answers[93] = choices[93][1];
 units[93] = "111";
 comments[93] = "Id Pregunta: 10934. TIC A1 AGE 2014";


//  Id pregunta: 11003 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Indique la respuesta FALSA respecto a las autoridades de validaci&oacute;n del DNI electr&oacute;nico:";
 choices[94]= new Array();
 choices[94][0] = "La prestaci&oacute;n de estos servicios de validaci&oacute;n se realiza en base a Online Certificate Status Protocol (OCSP).";
 choices[94][1] = "Para la validaci&oacute;n del DNI electr&oacute;nico se dispone de dos prestadores de Servicios de Validaci&oacute;n.";
 choices[94][2] = "La informaci&oacute;n sobre los certificados electr&oacute;nicos revocados se almacena en las denominadas listas de revocaci&oacute;n de certificados (CRL).";
 choices[94][3] = "En la Infraestructura de Clave P&uacute;blica adoptada para el DNI electr&oacute;nico, se ha optado por asignar a una misma entidad las funciones de Autoridad de Validaci&oacute;n y Certificaci&oacute;n.";
 answers[94] = choices[94][3];
 units[94] = "74";
 comments[94] = "Id Pregunta: 11003. TIC A1 AGE 2014";


//  Id pregunta: 11087 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Indique la afirmaci&oacute;n INCORRECTA sobre el algoritmo DES (Data Encryption Standard)";
 choices[95]= new Array();
 choices[95][0] = "Est&aacute; basado en las redes de Feistel";
 choices[95][1] = "Usa una clave de 56 bits";
 choices[95][2] = "Roto en 1997 mediante b&uacute;squeda exhaustiva";
 choices[95][3] = "Para hacerlo m&aacute;s robusto se utiliza el doble DES 2-DES";
 answers[95] = choices[95][3];
 units[95] = "72";
 comments[95] = "Id Pregunta: 11087. ";


//  Id pregunta: 11255 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  En relaci&oacute;n con los modos de operaci&oacute;n fundamentales de los algoritmos hash:";
 choices[96]= new Array();
 choices[96][0] = "El modo de operaci&oacute;n MDC sirve para la verificaci&oacute;n de integridad de mensajes";
 choices[96][1] = "MAC permite comprobar tanto la integridad como la autenticidad del origen de un mensaje a trav&eacute;s de una clave compartida.";
 choices[96][2] = "HMAC de IPSec es un ejemplo de implementaci&oacute;n de MAC.";
 choices[96][3] = "Todas las respuestas son verdaderas";
 answers[96] = choices[96][3];
 units[96] = "72";
 comments[96] = "Id Pregunta: 11255. ";


//  Id pregunta: 11314 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  En relaci&oacute;n con el servicio de directorio X.500, se&ntilde;alar la falsa.";
 choices[97]= new Array();
 choices[97][0] = "Cada entrada del Directorio, tiene un identificador &uacute;nico que el RDN.";
 choices[97][1] = "La parte com&uacute;n de todas las entradas u objetos, se llama Suffix.";
 choices[97][2] = "El conjunto de objetos, constituyen un DMD o dominio de gesti&oacute;n.";
 choices[97][3] = "X.500 no define nada sobre la interfaz de usuario.";
 answers[97] = choices[97][0];
 units[97] = "73";
 comments[97] = "Id Pregunta: 11314. El identificador &uacute;nico de cada entrada del directorio es el DN, que es como la direcci&oacute;n absoluta de un fichero.";


//  Id pregunta: 11515 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  En el est&aacute;ndar XADES de firma electr&oacute;nica, el perfil que incluye un TimeStamp a las referencias de las CRLs, es:";
 choices[98]= new Array();
 choices[98][0] = "XADES-X";
 choices[98][1] = "XADES-T";
 choices[98][2] = "XADES-XL";
 choices[98][3] = "XADES-C";
 answers[98] = choices[98][0];
 units[98] = "72";
 comments[98] = "Id Pregunta: 11515. NULL";


//  Id pregunta: 11729 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Qu&eacute; dos algoritmos de cifrado se utilizan en IPsec VPN?";
 choices[99]= new Array();
 choices[99][0] = "3DES y AES";
 choices[99][1] = "AES y DH";
 choices[99][2] = "3DES y PSK";
 choices[99][3] = "IKE y PSK";
 answers[99] = choices[99][0];
 units[99] = "111";
 comments[99] = "Id Pregunta: 11729. NULL";


