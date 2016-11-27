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

//  Id pregunta: 746 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  La ciencia que trata de descifrar mensajes cifrados sin conocer los c&oacute;digos se denomina:";
 choices[0]= new Array();
 choices[0][0] = "Criptoan&aacute;lisis o an&aacute;lisis criptogr&aacute;fico";
 choices[0][1] = "Ingenier&iacute;a social";
 choices[0][2] = "Fuerza Bruta";
 choices[0][3] = "Criptograf&iacute;a";
 answers[0] = choices[0][0];
 units[0] = "72";
 comments[0] = "Id Pregunta: 746. Similar a examen TIC SS A 2003";


//  Id pregunta: 747 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  La criptograf&iacute;a sirve para codificar:";
 choices[1]= new Array();
 choices[1][0] = "Lenguaje manuscrito";
 choices[1][1] = "Lenguaje manuscrito y datos";
 choices[1][2] = "Datos exclusivamente, al no poder aplicar t&eacute;cnicas inform&aacute;ticas al lenguaje manuscrito.";
 choices[1][3] = "La criptograf&iacute;a no se usa para codificar, sino s&oacute;lo para decodificar";
 answers[1] = choices[1][1];
 units[1] = "72";
 comments[1] = "Id Pregunta: 747. Similar a examen TIC SS A 2003";


//  Id pregunta: 748 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  En relaci&oacute;n con la huella digital y las funciones hash, se&ntilde;alar la opci&oacute;n falsa:";
 choices[2]= new Array();
 choices[2][0] = "Dos mensajes id&eacute;nticos, producen la misma huella";
 choices[2][1] = "Dada una huella es computacionalmente imposible encontrar un mensaje que produzca esa huella";
 choices[2][2] = "Si dos huellas son id&eacute;nticas, s&oacute;lo pueden haber sido originadas con el mismo mensaje";
 choices[2][3] = "Si dos huellas son id&eacute;nticas, pueden haber sido originadas por distintos mensajes con muy poca probabilidad";
 answers[2] = choices[2][2];
 units[2] = "72";
 comments[2] = "Id Pregunta: 748. Similar a examen TIC SS A 2003";


//  Id pregunta: 781 AÃ±o de creación de pregunta: 2005-01-01
 questions[3]= "4)  La captura de los datos de una tarjeta de cr&eacute;dito por un tercero, en una transacci&oacute;n econ&oacute;mica realizada a trav&eacute;s de internet entre un comprador y una tienda de comercio electr&oacute;nico afecta a:";
 choices[3]= new Array();
 choices[3][0] = "La dimensi&oacute;n de integridad de la informaci&oacute;n en tr&aacute;nsito";
 choices[3][1] = "La dimensi&oacute;n de autenticaci&oacute;n del destinatario de la informaci&oacute;n en tr&aacute;nsito";
 choices[3][2] = "La dimensi&oacute;n de confidencialidad de la informaci&oacute;n en tr&aacute;nsito";
 choices[3][3] = "La dimensi&oacute;n de disponibilidad de la informaci&oacute;n en tr&aacute;nsito";
 answers[3] = choices[3][2];
 units[3] = "72";
 comments[3] = "Id Pregunta: 781. segurida y cifrado";


//  Id pregunta: 830 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  Comparando la criptograf&iacute;a de clave secreta frente a la criptograf&iacute;a asim&eacute;trica. &iquest;C&uacute;al de los dos tipos de criptograf&iacute;a es m&aacute;s segura, suponiendo igual longitud de clave?:";
 choices[4]= new Array();
 choices[4][0] = "La de clave secreta";
 choices[4][1] = "La asim&eacute;trica";
 choices[4][2] = "Son igual de seguras";
 choices[4][3] = "Depende del lenguaje de programaci&oacute;n empleado";
 answers[4] = choices[4][0];
 units[4] = "72";
 comments[4] = "Id Pregunta: 830. ";


//  Id pregunta: 856 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;Cu&aacute;l de las siguientes respuestas es verdadera respecto a X.500?:";
 choices[5]= new Array();
 choices[5][0] = "X.500 es un protocolo que especifica un modelo para conectar servicios de directorio locales para formar un directorio global distribuido, de forma que el usuario percibe el directorio completo como accesible de su servidor local";
 choices[5][1] = "X.500 fue inicialmente un sistema propietario de Novell, pero en la actualidad ha sido cedido para dominio p&uacute;blico por un procedimiento estrat&eacute;gico de la compa&ntilde;&iacute;a para acabar con sistemas incompatibles desarrollados por empresas rivales";
 choices[5][2] = "X.500 ha sido desarrollado por ANSI para su implementaci&oacute;n en el ej&eacute;rcito americano por petici&oacute;n del DoD, pero en realidad no ha sido utilizado por &eacute;ste por falta de seguridad, y en la actualidad, al ser un protocolo publicado ha sido adoptado por diverso";
 choices[5][3] = "X.500 es el protocolo de directorio m&aacute;s extendido, por lo que puede considerarse un est&aacute;ndar de facto, pero aunque se estima pr&oacute;xima su adopci&oacute;n por ISO para incorporarlo a la definici&oacute;n est&aacute;ndar de OSI, a&uacute;n no se ha dado este paso";
 answers[5] = choices[5][0];
 units[5] = "73";
 comments[5] = "Id Pregunta: 856. ";


//  Id pregunta: 866 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Cu&aacute;l de los siguientes es un protocolo de directorio?:";
 choices[6]= new Array();
 choices[6][0] = "MIME";
 choices[6][1] = "LDAP";
 choices[6][2] = "SMNP";
 choices[6][3] = "BGP";
 answers[6] = choices[6][1];
 units[6] = "73";
 comments[6] = "Id Pregunta: 866. ";


//  Id pregunta: 913 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Qu&eacute; define la norma X.500?:";
 choices[7]= new Array();
 choices[7][0] = "Servicio de directorio";
 choices[7][1] = "Sistema de tratamiento de mensajes";
 choices[7][2] = "Servicio de transferencia de ficheros";
 choices[7][3] = "Sistema de gesti&oacute;n de red";
 answers[7] = choices[7][0];
 units[7] = "73";
 comments[7] = "Id Pregunta: 913. ";


//  Id pregunta: 974 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Dada una tarjeta con microprocesador utilizada en un sistema de control de acceso, &iquest;cu&aacute;l de las siguientes afirmaciones es falsa?:";
 choices[8]= new Array();
 choices[8][0] = "Dispone de un sistema operativo con un juego de instrucciones grabado en memoria ROM";
 choices[8][1] = "Permite realizar algoritmos complejos de cifrado con clave asim&eacute;trica";
 choices[8][2] = "La lectura de su informaci&oacute;n se realiza mediante un diodo de l&aacute;ser";
 choices[8][3] = "Incorpora un microprocesador con memoria";
 answers[8] = choices[8][2];
 units[8] = "74";
 comments[8] = "Id Pregunta: 974. NULL";


//  Id pregunta: 1029 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  Firmar un mensaje electr&oacute;nico:";
 choices[9]= new Array();
 choices[9][0] = "Es lo mismo que cifrarlo";
 choices[9][1] = "Es lo mismo que codificarlo";
 choices[9][2] = "Garantiza la confidencialidad";
 choices[9][3] = "Garantiza la integridad, autenticaci&oacute;n y no repudio";
 answers[9] = choices[9][3];
 units[9] = "72";
 comments[9] = "Id Pregunta: 1029. ";


//  Id pregunta: 1061 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  El test de rachas utilizado en criptograf&iacute;a se basa en:";
 choices[10]= new Array();
 choices[10][0] = "El an&aacute;lisis de la independencia de los elementos de un criptograma";
 choices[10][1] = "La b&uacute;squeda de las posibles dependencias o recursiones de un criptograma";
 choices[10][2] = "La b&uacute;squeda de independencia entre s&iacute;mbolos de un criptograma";
 choices[10][3] = "El an&aacute;lisis de la dependencia entre s&iacute;mbolos de un criptograma";
 answers[10] = choices[10][0];
 units[10] = "72";
 comments[10] = "Id Pregunta: 1061. ";


//  Id pregunta: 1118 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  En las tarjetas inteligentes sin contacto, la comunicaci&oacute;n se realiza mediante tecnolog&iacute;a de radio frecuencia, incorporando las tarjetas una antena de RF. En funci&oacute;n de la distancia que permita la comunicaci&oacute;n, &iquest;qu&eacute; descripci&oacute;n corresponde a las tarjetas?";
 choices[11]= new Array();
 choices[11][0] = "Requiere el contacto f&iacute;sico (&lt;2mm) con  el dispositivo de interfaz, aunque no su inserci&oacute;n, ni usa contactos el&eacute;ctricos";
 choices[11][1] = "Permite una distancia de 10 cm con el dispositivo de interfaz";
 choices[11][2] = "No permite una distancia mayor de 5 cm con dispositivo de interfaz";
 choices[11][3] = "Todas las tarjetas inteligentes sin contacto son de proximidad";
 answers[11] = choices[11][1];
 units[11] = "74";
 comments[11] = "Id Pregunta: 1118. NULL";


//  Id pregunta: 1223 AÃ±o de creación de pregunta: 2005-01-01
 questions[12]= "13)  Los DN, en LDAP, se representan en:";
 choices[12]= new Array();
 choices[12][0] = "XML";
 choices[12][1] = "HTML";
 choices[12][2] = "Texto plano";
 choices[12][3] = "ASN.1";
 answers[12] = choices[12][2];
 units[12] = "74";
 comments[12] = "Id Pregunta: 1223. RFC 4514";


//  Id pregunta: 1239 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  La propiedad de una funci&oacute;n res&uacute;men por la que dado un mensaje (x), es computacionalmente imposible encontrar otro mensaje (x&rsquo;) cuya funci&oacute;n resumen sea igual a la funci&oacute;n res&uacute;men del primer mensaje (x), corresponde a:";
 choices[13]= new Array();
 choices[13][0] = "Resistencia a la preimagen";
 choices[13][1] = "Resistencia a la segunda preimagen";
 choices[13][2] = "Resistencia a colisi&oacute;n";
 choices[13][3] = "Resistencia a la igualdad";
 answers[13] = choices[13][1];
 units[13] = "72";
 comments[13] = "Id Pregunta: 1239. ";


//  Id pregunta: 1308 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  PGP son una siglas muy conocidad dentro del mundo del cifrado y de la seguridad. &iquest;A qu&eacute; corresponden?:";
 choices[14]= new Array();
 choices[14][0] = "Pretty Good Privacy";
 choices[14][1] = "Personal General Privacity";
 choices[14][2] = "Privacity Generator Program";
 choices[14][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[14] = choices[14][0];
 units[14] = "72";
 comments[14] = "Id Pregunta: 1308. ";


//  Id pregunta: 1323 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  RSA es: ";
 choices[15]= new Array();
 choices[15][0] = "Un algoritmo criptogr&aacute;fico";
 choices[15][1] = "Un mecanismo de intercambio de claves";
 choices[15][2] = "Una infraestructura de clave p&uacute;blica (PKI))";
 choices[15][3] = "Una funcion resumen";
 answers[15] = choices[15][0];
 units[15] = "72";
 comments[15] = "Id Pregunta: 1323. ";


//  Id pregunta: 1512 AÃ±o de creación de pregunta: 2003-01-01
 questions[16]= "17)  &iquest;Qu&eacute; tecnolog&iacute;a sustituy&oacute; a DES tras su ruptura?";
 choices[16]= new Array();
 choices[16][0] = "Rijndael";
 choices[16][1] = "RC-4";
 choices[16][2] = "MD5 ";
 choices[16][3] = "SEAL";
 answers[16] = choices[16][0];
 units[16] = "72";
 comments[16] = "Id Pregunta: 1512. ";


//  Id pregunta: 1551 AÃ±o de creación de pregunta: 2003-01-01
 questions[17]= "18)  &iquest;Cu&aacute;l de estos tipos NO es un tipo de middleware?";
 choices[17]= new Array();
 choices[17][0] = "RPC.";
 choices[17][1] = "X-500.";
 choices[17][2] = "ORB.";
 choices[17][3] = "Conversaciones o di&aacute;logos continuos entre dos o m&aacute;s sistemas sobre una conexi&oacute;n l&oacute;gica.";
 answers[17] = choices[17][1];
 units[17] = "73";
 comments[17] = "Id Pregunta: 1551. ";


//  Id pregunta: 1575 AÃ±o de creación de pregunta: 2003-01-01
 questions[18]= "19)  &iquest;Qu&eacute; es lo que la Firma Digital no garantiza por si sola?";
 choices[18]= new Array();
 choices[18][0] = "Autenticaci&oacute;n";
 choices[18][1] = "Integridad";
 choices[18][2] = "Disponibilidad";
 choices[18][3] = "No repudio";
 answers[18] = choices[18][2];
 units[18] = "72";
 comments[18] = "Id Pregunta: 1575. ";


//  Id pregunta: 1581 AÃ±o de creación de pregunta: 2004-01-01
 questions[19]= "20)  El algoritmo de cifrado Rijndael";
 choices[19]= new Array();
 choices[19][0] = "Compite con AES por ser el est&aacute;ndar de criptograf&iacute;a dominante";
 choices[19][1] = "Es un algoritmo de clave p&uacute;blica";
 choices[19][2] = "Es un desarrollo propietario de IBM";
 choices[19][3] = "Se basa en la teor&iacute;a de campos de Galois";
 answers[19] = choices[19][3];
 units[19] = "72";
 comments[19] = "Id Pregunta: 1581. Tanenbaum";


//  Id pregunta: 1610 AÃ±o de creación de pregunta: 2003-01-01
 questions[20]= "21)  La t&eacute;cnica criptogr&aacute;fica basada en un conjunto de m&eacute;todos que permiten tener comunicaci&oacute;n segura entre las partes, siempre y cuando previamente ambas partes hayan intercambiado una clave privada, se denomina:";
 choices[20]= new Array();
 choices[20][0] = "Criptograf&iacute;a asim&eacute;trica.";
 choices[20][1] = "Criptograf&iacute;a sim&eacute;trica.";
 choices[20][2] = "Criptograf&iacute;a de clave p&uacute;blica.";
 choices[20][3] = "Criptograf&iacute;a paralela.";
 answers[20] = choices[20][1];
 units[20] = "72";
 comments[20] = "Id Pregunta: 1610. Junta Andaluc&iacute;a";


//  Id pregunta: 1852 AÃ±o de creación de pregunta: 2006-01-01
 questions[21]= "22)  Al ataque criptogr&aacute;fico consistente en el barrido del espacio de claves se le denomina:";
 choices[21]= new Array();
 choices[21][0] = "Fuerza bruta";
 choices[21][1] = "Criptoan&aacute;lisis diferencial";
 choices[21][2] = "Criptoan&aacute;lisis lineal";
 choices[21][3] = "An&aacute;lisis de temporizaci&oacute;n";
 answers[21] = choices[21][0];
 units[21] = "72";
 comments[21] = "Id Pregunta: 1852. ";


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


//  Id pregunta: 1895 AÃ±o de creación de pregunta: 2006-01-01
 questions[23]= "24)  La t&eacute;cnica de ocultar un mensaje secreto dentro de un mensaje ordinario y extraerlo en destino se llama";
 choices[23]= new Array();
 choices[23][0] = "algoritmo de clave secreta";
 choices[23][1] = "bytecode";
 choices[23][2] = "esteganograf&iacute;a";
 choices[23][3] = "spyware";
 answers[23] = choices[23][2];
 units[23] = "74";
 comments[23] = "Id Pregunta: 1895. NULL";


//  Id pregunta: 1919 AÃ±o de creación de pregunta: 2006-01-01
 questions[24]= "25)  Seg&uacute;n la recomendaci&oacute;n X.509 v.3:";
 choices[24]= new Array();
 choices[24][0] = "La autenticaci&oacute;n simple conlleva el uso exclusivo de contrase&ntilde;as transmitidas en claro";
 choices[24][1] = "La autenticaci&oacute;n robusta (strong) de un sentido conlleva siempre el empleo de funciones resumen (hash)";
 choices[24][2] = "La autenticaci&oacute;n robusta (strong) de dos sentidos comporta siempre el uso de credenciales obtenidas mediante t&eacute;cnicas criptogr&aacute;ficas";
 choices[24][3] = "La autenticaci&oacute;n robusta (strong) de tres sentidos debe incorporar siempre sellos de tiempo";
 answers[24] = choices[24][2];
 units[24] = "73";
 comments[24] = "Id Pregunta: 1919. ";


//  Id pregunta: 1924 AÃ±o de creación de pregunta: 2006-01-01
 questions[25]= "26)  Respecto a los servicios de Directorio Electr&oacute;nico, la norma X-500 de la UIT-T define cuatro tipos de clases de objeto de acuerdo a su funcionalidad:";
 choices[25]= new Array();
 choices[25][0] = "Auxiliar, Estructural, Simplificada, Alias";
 choices[25][1] = "Estructural, Simplificada, Auxiliar, Alias";
 choices[25][2] = "Abstracta, Esquem&aacute;tica, Estructural, Alias";
 choices[25][3] = "Abstracta, Estructural, Auxiliar, Alias";
 answers[25] = choices[25][3];
 units[25] = "73";
 comments[25] = "Id Pregunta: 1924. ";


//  Id pregunta: 3020 AÃ±o de creación de pregunta: 2004-01-01
 questions[26]= "27)  Los cortafuegos de nivel 7 de la capa OSI, esto es, nivel de aplicaci&oacute;n:";
 choices[26]= new Array();
 choices[26][0] = "No existen";
 choices[26][1] = "Tratan con n&uacute;meros de secuencias de paquetes TCP/IP";
 choices[26][2] = "Pueden ser considerados como filtros de paquetes";
 choices[26][3] = "Act&uacute;an a modo de proxy para las distintas aplicaciones que van a controlar";
 answers[26] = choices[26][3];
 units[26] = "111";
 comments[26] = "Id Pregunta: 3020. TAI 2004";


//  Id pregunta: 3407 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  Existen varios procedimientos de ataques en internet, como el &quot;hijacking&quot;. &iquest;En qu&eacute; consiste &eacute;ste?:";
 choices[27]= new Array();
 choices[27][0] = "Suplantaci&oacute;n de la direcci&oacute;n IP origen";
 choices[27][1] = "Repudiaci&oacute;n de la auditor&iacute;a del mensaje";
 choices[27][2] = "secuestro de una conexi&oacute;n TCP/IP por ejemplo durante una sesi&oacute;n Telnet permitiendo a un atacante inyectar comandos o realizar un DoS durante dicha sesi&oacute;n.";
 choices[27][3] = "Escucha de una comunicaci&oacute;n y grabaci&oacute;n de su contenido";
 answers[27] = choices[27][2];
 units[27] = "111";
 comments[27] = "Id Pregunta: 3407. NULL";


//  Id pregunta: 3564 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  En un firewall de paquetes IP, los paquetes entrantes:";
 choices[28]= new Array();
 choices[28][0] = "Primero se filtran, luego se hace el NAT";
 choices[28][1] = "Primero se hace NAT y luego se filtran";
 choices[28][2] = "Es igual que para los paquetes salientes";
 choices[28][3] = "Depende de la interfaz";
 answers[28] = choices[28][1];
 units[28] = "111";
 comments[28] = "Id Pregunta: 3564. NULL";


//  Id pregunta: 3586 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  La actividad conocida como spamming es:";
 choices[29]= new Array();
 choices[29][0] = "uso de una direcci&oacute;n IP falsa para suplantar identidades en Internet";
 choices[29][1] = "uso de mecanismos de proxy para ocultar identidades y direcciones en Internet";
 choices[29][2] = "uso del correo electr&oacute;nico para enviar publicidad no solicitada";
 choices[29][3] = "uso de algoritmos de rastreo en Internet para localizar bases de datos y servidores";
 answers[29] = choices[29][2];
 units[29] = "111";
 comments[29] = "Id Pregunta: 3586. NULL";


//  Id pregunta: 3829 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  S-HTTP:";
 choices[30]= new Array();
 choices[30][0] = "es lo mismo que HTTPS (HTTP + SSL)";
 choices[30][1] = "responde por Secure-HTTP, y est&aacute; escasamente implantado";
 choices[30][2] = "Est&aacute; dise&ntilde;ado por los creadores del protocolo HTTP";
 choices[30][3] = "Es un protocolo del nivel de transporte";
 answers[30] = choices[30][1];
 units[30] = "111";
 comments[30] = "Id Pregunta: 3829. NULL";


//  Id pregunta: 3839 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  Sobre los algoritmos Hash o funci&oacute;n resumen:";
 choices[31]= new Array();
 choices[31][0] = "Todos tienen una clave de longitud de 160 bits";
 choices[31][1] = "La longitud de la clave depender&aacute; del algoritmo utilizado";
 choices[31][2] = "Es imposible que la longitud de la clave sea menos de 160";
 choices[31][3] = "Da igual la longitud de clave";
 answers[31] = choices[31][1];
 units[31] = "111";
 comments[31] = "Id Pregunta: 3839. NULL";


//  Id pregunta: 3853 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  WTLS:";
 choices[32]= new Array();
 choices[32][0] = "est&aacute; basado en el protocolo TLS, pero optimizado para dispositivos m&oacute;viles";
 choices[32][1] = "proporciona mayor seguridad que TLS";
 choices[32][2] = "es independiente de TLS, un protocolo dise&ntilde;ado espec&iacute;ficamente para redes inal&aacute;mbricas";
 choices[32][3] = "ningunas de las anteriores";
 answers[32] = choices[32][0];
 units[32] = "111";
 comments[32] = "Id Pregunta: 3853. NULL";


//  Id pregunta: 3856 AÃ±o de creación de pregunta: 2003-01-01
 questions[33]= "34)  El ataque de denegaci&oacute;n de servicio llamado Smurf consiste en:";
 choices[33]= new Array();
 choices[33][0] = "Dejar una conexi&oacute;n en estado semiabierto y no llegar a realizarse el paso final para establecer una conexi&oacute;n";
 choices[33][1] = "Se trata de mandar a un puerto abierto del servidor un paquete hecho con la direcci&oacute;n y puerto origen igual que la direcci&oacute;n y puerto destino";
 choices[33][2] = "Consiste en recolectar direcciones BroadCast para despu&eacute;s mandar una petici&oacute;n ICMP cada una de ellas, falsificando la direcci&oacute;n IP de origen";
 choices[33][3] = "Se trata de saturar la red mediante una cantidad repetitiva y enorme de peticiones de conexi&oacute;n";
 answers[33] = choices[33][2];
 units[33] = "111";
 comments[33] = "Id Pregunta: 3856. NULL";


//  Id pregunta: 3865 AÃ±o de creación de pregunta: 2003-01-01
 questions[34]= "35)  &iquest;Qu&eacute; son los IDS?";
 choices[34]= new Array();
 choices[34][0] = "Sistemas que permiten a los hackers rastrear puertos";
 choices[34][1] = "Sistemas que permiten detectar actividad inadecuada, incorrecta o an&oacute;mala en un sistema";
 choices[34][2] = "Sistemas que simulan uno o m&aacute;s sistemas f&aacute;ciles de atacar con el fin de tentar a los intrusos";
 choices[34][3] = "Ninguno de los anteriores";
 answers[34] = choices[34][1];
 units[34] = "111";
 comments[34] = "Id Pregunta: 3865. NULL";


//  Id pregunta: 3869 AÃ±o de creación de pregunta: 2003-01-01
 questions[35]= "36)  &iquest;C&uacute;al de las siguientes afirmaciones sobre el virus Blaster es correcta?";
 choices[35]= new Array();
 choices[35][0] = "Es un gusano que inspecciona la agenda de direcciones y env&iacute;a un mensaje replicado a todas ellas";
 choices[35][1] = "Es un gusano que usa una vulnerabilidad de Windows por la que el atacante puede tener permisos de ejecuci&oacute;n locales";
 choices[35][2] = "Es un gusano que se propaga a trav&eacute;s del correo electr&oacute;nico en un mensaje escrito en ingl&eacute;s de caracter&iacute;sticas variables, as&iacute; como a trav&eacute;s de los programas de intercambio de ficheros punto a punto ";
 choices[35][3] = "Es un gusano que busca en todas las unidades de disco direcciones de correo electr&oacute;nico y se autoenv&iacute;a a ellas utilizando su propio motor SMTP";
 answers[35] = choices[35][1];
 units[35] = "111";
 comments[35] = "Id Pregunta: 3869. NULL";


//  Id pregunta: 4051 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  Si tenemos un web server en la DMZ &iquest;Qu&eacute; puerto t&iacute;picamente debemos abrir en el firewall?";
 choices[36]= new Array();
 choices[36][0] = "El primer puerto libre del firewall";
 choices[36][1] = "El puerto 80";
 choices[36][2] = "El primer puerto libre desde el 80";
 choices[36][3] = "No es necesario abrir puerto alguno";
 answers[36] = choices[36][1];
 units[36] = "111";
 comments[36] = "Id Pregunta: 4051. NULL";


//  Id pregunta: 4053 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  En referencia a las amenazas que afectan a la seguridad en las redes de comunicaciones, se&ntilde;ale la respuesta incorrecta";
 choices[37]= new Array();
 choices[37][0] = "La interrupci&oacute;n puede ser tanto f&iacute;sica como l&oacute;gica";
 choices[37][1] = "El llamado sniffing es un tipo de intercepci&oacute;n";
 choices[37][2] = "Los ataques de tipo pasivo son f&aacute;ciles de detectar";
 choices[37][3] = "Los ataques pueden ser activos y pasivos";
 answers[37] = choices[37][2];
 units[37] = "111";
 comments[37] = "Id Pregunta: 4053. NULL";


//  Id pregunta: 4146 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  Una aplicaci&oacute;n que se localiza en un servidor con el fin de ofrecer seguridad a la red interna, por lo que ha sido especialmente configurado para la recepci&oacute;n de ataques es un...";
 choices[38]= new Array();
 choices[38][0] = "cortafuegos";
 choices[38][1] = "sonda";
 choices[38][2] = "honeypot";
 choices[38][3] = "basti&oacute;n";
 answers[38] = choices[38][3];
 units[38] = "111";
 comments[38] = "Id Pregunta: 4146. NULL";


//  Id pregunta: 4148 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  Cada uno de los equipos comprometidos y utilizados para lanzar un ataque de denegaci&oacute;n de servicio distribuido contra un objetivo concreto se llama";
 choices[39]= new Array();
 choices[39][0] = "dongle";
 choices[39][1] = "token";
 choices[39][2] = "repetidor";
 choices[39][3] = "zombie";
 answers[39] = choices[39][3];
 units[39] = "111";
 comments[39] = "Id Pregunta: 4148. NULL";


//  Id pregunta: 4162 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  &iquest;Qu&eacute; termino define mejor una credencial Kerberos?";
 choices[40]= new Array();
 choices[40][0] = "Un ticket de autenticaci&oacute;n";
 choices[40][1] = "Un ticket de autorizaci&oacute;n";
 choices[40][2] = "Cada uno de los servicios y aplicaciones de una red que soportan Kerberos";
 choices[40][3] = "Un dominio, formado por usuarios, equipos y servicios registrados en un servidor Kerberos";
 answers[40] = choices[40][1];
 units[40] = "111";
 comments[40] = "Id Pregunta: 4162. NULL";


//  Id pregunta: 4272 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  Los comandos y distribuci&oacute;n de memoria de una tarjeta criptogr&aacute;fica se especifican en el est&aacute;ndar";
 choices[41]= new Array();
 choices[41][0] = "ISO 7816-2";
 choices[41][1] = "ISO 7816-3";
 choices[41][2] = "ISO 7816-4";
 choices[41][3] = "ISO 7816-5";
 answers[41] = choices[41][2];
 units[41] = "74";
 comments[41] = "Id Pregunta: 4272. NULL";


//  Id pregunta: 4494 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  El protocolo L2TP es com&uacute;nmente utilizado por las VPN (Redes Privadas Virtuales) para:";
 choices[42]= new Array();
 choices[42][0] = "Efectuar el proceso de encriptado de los datos transmitidos a trav&eacute;s de Ia red publica.";
 choices[42][1] = "Efectuar Ia autentificaci&oacute;n de los usuarios.";
 choices[42][2] = "Crear t&uacute;neles de nivel OSI 2 que encapsulan los datagramas IP transmitidos a trav&eacute;s de Ia red publica.";
 choices[42][3] = "Filtrar los datos recibidos por cada usuario.";
 answers[42] = choices[42][2];
 units[42] = "111";
 comments[42] = "Id Pregunta: 4494. NULL";


//  Id pregunta: 4604 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  Ignorar quien accede a que dato y cuando lo hace, afecta a Ia dimensi&oacute;n de la seguridad denominada";
 choices[43]= new Array();
 choices[43][0] = "confidencialidad";
 choices[43][1] = "disponibilidad";
 choices[43][2] = "integridad";
 choices[43][3] = "trazabilidad";
 answers[43] = choices[43][3];
 units[43] = "111";
 comments[43] = "Id Pregunta: 4604. NULL";


//  Id pregunta: 4707 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  T&eacute;cnica de cifrado utilizada por los clientes de correo-electr&oacute;nico";
 choices[44]= new Array();
 choices[44][0] = "MD5";
 choices[44][1] = "IDEA";
 choices[44][2] = "Curva El&iacute;ptica";
 choices[44][3] = "S/MIME";
 answers[44] = choices[44][2];
 units[44] = "72";
 comments[44] = "Id Pregunta: 4707. Examen 2006 JCYL";


//  Id pregunta: 4740 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  Firmar un mensaje electr&oacute;nico";
 choices[45]= new Array();
 choices[45][0] = "Es lo mismo que cifrarlo";
 choices[45][1] = "Garantiza la confidencialidad";
 choices[45][2] = "Es lo mismo que codificarlo";
 choices[45][3] = "Garantiza la integridad, autenticaci&oacute;n y no repudio";
 answers[45] = choices[45][3];
 units[45] = "72";
 comments[45] = "Id Pregunta: 4740. Examen 2006 JCYL";


//  Id pregunta: 4885 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  En el establecimiento de una comunicaci&oacute;n mediante SSL (Secure Sockets Layer), &iquest;cu&aacute;l es el protocolo queespecifica la forma de encapsular los datos que se van a intercambiar?";
 choices[46]= new Array();
 choices[46][0] = "SSL Handshake";
 choices[46][1] = "SSL Record";
 choices[46][2] = "Cipher Secure Layer";
 choices[46][3] = "Secure Stocker Layer";
 answers[46] = choices[46][1];
 units[46] = "73";
 comments[46] = "Id Pregunta: 4885. ";


//  Id pregunta: 5086 AÃ±o de creación de pregunta: 2001-01-01
 questions[47]= "48)  &iquest;Cu&aacute;l de los siguientes algoritmos se basa en el problema de factorizaci&oacute;n entera?";
 choices[47]= new Array();
 choices[47][0] = "el algoritmo RIPEMD-160";
 choices[47][1] = "los algoritmos RSA y RW";
 choices[47][2] = "los algoritmos DHE y DSAE";
 choices[47][3] = "el algoritmo Rijndael";
 answers[47] = choices[47][1];
 units[47] = "72";
 comments[47] = "Id Pregunta: 5086. ";


//  Id pregunta: 5169 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  El protocolo que contiene las especificaciones para garantizar la integridad y seguridad en mensajer&iacute;a de Servicios Web es:";
 choices[48]= new Array();
 choices[48][0] = "RSA";
 choices[48][1] = "WS-Security (WSS)";
 choices[48][2] = "X.509";
 choices[48][3] = "Kerberos";
 answers[48] = choices[48][1];
 units[48] = "111";
 comments[48] = "Id Pregunta: 5169. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5172 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  En el protocolo IPSEC, una asociaci&oacute;n de seguridad (SA) queda un&iacute;vocamente identificada por medio de:";
 choices[49]= new Array();
 choices[49][0] = "Una direcci&oacute;n IP";
 choices[49][1] = "Un &iacute;ndice de par&aacute;metro de seguridad (SPI)";
 choices[49][2] = "Un &iacute;ndice de par&aacute;metro de seguridad (SPI) y un puerto de comunicaci&oacute;n TCP.";
 choices[49][3] = "Una direcci&oacute;n IP y un &Iacute;ndice de Par&aacute;metro de Seguridad (SPI).";
 answers[49] = choices[49][3];
 units[49] = "111";
 comments[49] = "Id Pregunta: 5172. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5614 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  La especificaci&oacute;n PKCS que define el formato de las claves privadas es:";
 choices[50]= new Array();
 choices[50][0] = "PKCS 1";
 choices[50][1] = "PKCS 5";
 choices[50][2] = "PKCS 8";
 choices[50][3] = "PKCS 6";
 answers[50] = choices[50][2];
 units[50] = "111";
 comments[50] = "Id Pregunta: 5614. NULL";


//  Id pregunta: 5626 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  De los siguientes ataques, cu&aacute;l se corresponde con la obtenci&oacute;n de informaci&oacute;n de una red sin modificar la informaci&oacute;n ";
 choices[51]= new Array();
 choices[51][0] = "Explot";
 choices[51][1] = "Snooping";
 choices[51][2] = "Wardriving";
 choices[51][3] = "Teardrop";
 answers[51] = choices[51][1];
 units[51] = "111";
 comments[51] = "Id Pregunta: 5626. NULL";


//  Id pregunta: 5692 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  Una de las zonas de datos que se encuentran dentro del chip criptogr&aacute;fico del DNI electr&oacute;nico es la denominada zona de seguridad. Esta zona que almacena, entre otros, los datos biom&eacute;tricos, es accesible por:";
 choices[52]= new Array();
 choices[52][0] = "El ciudadano";
 choices[52][1] = "El ciudadano y la Direcci&oacute;n General de la Polic&iacute;a";
 choices[52][2] = " La Direcci&oacute;n General de la Polic&iacute;a";
 choices[52][3] = "Es una zona p&uacute;blica";
 answers[52] = choices[52][2];
 units[52] = "74";
 comments[52] = "Id Pregunta: 5692. NULL";


//  Id pregunta: 5693 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  Dentro del chip criptogr&aacute;fico del DNI electr&oacute;nico podemos encontrar tres zonas de datos diferenciadas. Se&ntilde;ale cu&aacute;l de las siguientes no es una de ellas:";
 choices[53]= new Array();
 choices[53][0] = "Zona p&uacute;blica";
 choices[53][1] = " Zona de seguridad";
 choices[53][2] = "Zona privada";
 choices[53][3] = "Zona confidencial";
 answers[53] = choices[53][3];
 units[53] = "74";
 comments[53] = "Id Pregunta: 5693. NULL";


//  Id pregunta: 5695 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  La firma realizada a trav&eacute;s del DNI electr&oacute;nico:";
 choices[54]= new Array();
 choices[54][0] = "Tiene valor jur&iacute;dico, pero no equivale a la firma manuscrita";
 choices[54][1] = " Tiene el mismo valor jur&iacute;dico que la firma manuscrita";
 choices[54][2] = "No tiene valor jur&iacute;dico";
 choices[54][3] = "Su valor jur&iacute;dico queda a discreci&oacute;n de un juez";
 answers[54] = choices[54][1];
 units[54] = "74";
 comments[54] = "Id Pregunta: 5695. NULL";


//  Id pregunta: 5698 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  Respecto a la validez de los certificados del DNI electr&oacute;nico, se&ntilde;ale la falsa:";
 choices[55]= new Array();
 choices[55][0] = "La p&eacute;rdida de validez del DNI implica su p&eacute;rdida de validez";
 choices[55][1] = " La renovaci&oacute;n implica la expedici&oacute;n de nuevos certificados";
 choices[55][2] = "La expedici&oacute;n de duplicados implica la expedici&oacute;n de nuevos certificados";
 choices[55][3] = "La caducidad de los certificados implica la renovaci&oacute;n del DNI";
 answers[55] = choices[55][3];
 units[55] = "74";
 comments[55] = "Id Pregunta: 5698. NULL";


//  Id pregunta: 5739 AÃ±o de creación de pregunta: 2009-01-01
 questions[56]= "57)  &iquest;Qu&eacute; caracter&iacute;sticas debe reunir, entre otras, la firma electr&oacute;nica reconocida?";
 choices[56]= new Array();
 choices[56][0] = "Tener una clave privada de 512 bits o superior";
 choices[56][1] = "Usar un certificado reconocido";
 choices[56][2] = "Usar el algoritmo RSA";
 choices[56][3] = "Usar certificados con periodo de validez superior a dos a&ntilde;os";
 answers[56] = choices[56][1];
 units[56] = "72";
 comments[56] = "Id Pregunta: 5739. ";


//  Id pregunta: 5747 AÃ±o de creación de pregunta: 2009-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l es la longitud del resumen de la funci&oacute;n SHA-1?";
 choices[57]= new Array();
 choices[57][0] = "64 bits";
 choices[57][1] = "128 bits";
 choices[57][2] = "160 bits";
 choices[57][3] = "224 bits";
 answers[57] = choices[57][2];
 units[57] = "72";
 comments[57] = "Id Pregunta: 5747. ";


//  Id pregunta: 5753 AÃ±o de creación de pregunta: 2009-01-01
 questions[58]= "59)  &iquest;Por qu&eacute; el algoritmo DSA no sirve para cifrar?";
 choices[58]= new Array();
 choices[58][0] = "Porque al realizar funciones modulo x (donde x es uno de los valores p&uacute;blicos del sistema) no se puede realizar su inversi&oacute;n";
 choices[58][1] = "Porque realiza un hash del mensaje, por tanto no es recuperable";
 choices[58][2] = "Porque tendr&iacute;amos que enviar la clave privada";
 choices[58][3] = "No es cierto, el algoritmo DSA s&iacute; sirve para cifrar";
 answers[58] = choices[58][1];
 units[58] = "72";
 comments[58] = "Id Pregunta: 5753. ";


//  Id pregunta: 5859 AÃ±o de creación de pregunta: 2009-01-01
 questions[59]= "60)  Indique la ventaja de los sistemas RFID (Radio Frecuency Identification) de baja frecuencia:";
 choices[59]= new Array();
 choices[59][0] = "Soportan la lectura simult&aacute;nea de varias etiquetas";
 choices[59][1] = "El coste de las etiquetas es bajo debido al peque&ntilde;o tama&ntilde;o de su antena";
 choices[59][2] = "Poseen alta tasas de transmisi&oacute;n";
 choices[59][3] = "Su se&ntilde;al atraviesa materiales tales como el agua, la madera y el aluminio";
 answers[59] = choices[59][3];
 units[59] = "74";
 comments[59] = "Id Pregunta: 5859. Pregunta 39";


//  Id pregunta: 5872 AÃ±o de creación de pregunta: 2009-01-01
 questions[60]= "61)  Indique cu&aacute;l de las siguientes afirmaciones es CIERTA:";
 choices[60]= new Array();
 choices[60][0] = "Las funciones hash se utilizan en los mecanismos de cifrado/descifrado de mensajes";
 choices[60][1] = "Las funciones hash se pueden utilizar para garantizar la integridad de los mensajes transmitidos";
 choices[60][2] = "Las funciones hash generan valores cuya longitud, en bits, depende de la longitud del mensaje original";
 choices[60][3] = "Las funciones hash requieren el uso de claves de cifrado";
 answers[60] = choices[60][1];
 units[60] = "72";
 comments[60] = "Id Pregunta: 5872. MAP 2008 A1";


//  Id pregunta: 5887 AÃ±o de creación de pregunta: 2009-01-01
 questions[61]= "62)  Los cifrados de clave p&uacute;blica:";
 choices[61]= new Array();
 choices[61][0] = "De Diffie-Hellman basan su fortaleza en la dificultad de resolver el problema de los logaritmos discretos";
 choices[61][1] = "A igualdad de longitud de clave los basados en curvas el&iacute;pticas son tan robustos como los basados en la aritm&eacute;tica modular";
 choices[61][2] = "La llegada de los ordenadores cu&aacute;nticos no los har&aacute; m&aacute;s vulnerables a los m&eacute;todos criptoanal&iacute;ticos empleados ahora";
 choices[61][3] = "Basados en el RSA requieren m&aacute;s tiempo para descifrar que para generar sus pares de claves";
 answers[61] = choices[61][0];
 units[61] = "72";
 comments[61] = "Id Pregunta: 5887. MAP 2008 A1";


//  Id pregunta: 6056 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  La norma ISO/IEC 15408 Evaluation Criteria for IT Security (informalmente conocida como Common Criteria):";
 choices[62]= new Array();
 choices[62][0] = "Establece una escala creciente de confianza en la seguridad del producto evaluado, que va desde el Evaluation Assurement Level (EAL) 0 al EAL 7.";
 choices[62][1] = "Establece perfiles de protecci&oacute;n, que deben ser elaborados por ISO/IEC.";
 choices[62][2] = "Permite certificar sistemas, productos y algoritmos criptogr&aacute;ficos.";
 choices[62][3] = "Figura como criterio de evaluaci&oacute;n en la Orden PRE/2740/2007 por la que se aprueba el Reglamento de evaluaci&oacute;n y certificaci&oacute;n de la seguridad de las TI.";
 answers[62] = choices[62][3];
 units[62] = "74";
 comments[62] = "Id Pregunta: 6056. TIC A 2009";


//  Id pregunta: 6115 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  Indique cu&aacute;l de las siguientes clasificaciones NO es aplicable a las etiquetas RFID (Radio Frecuency Identification):";
 choices[63]= new Array();
 choices[63][0] = "Activas.";
 choices[63][1] = "Pasivas.";
 choices[63][2] = "Hiperactivas.";
 choices[63][3] = "Semipasivas.";
 answers[63] = choices[63][2];
 units[63] = "74";
 comments[63] = "Id Pregunta: 6115. TIC A 2009";


//  Id pregunta: 6140 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  Acerca del protocolo Kerberos v. 5 (IETF RFC 4120):";
 choices[64]= new Array();
 choices[64][0] = "Tiene extensiones que permiten el empleo de criptograf&iacute;a de clave p&uacute;blica y secreta.";
 choices[64][1] = "Los tickets expiran tras un tiempo predeterminado en el protocolo.";
 choices[64][2] = "El servidor de autenticaci&oacute;n cifra el ticket que remite al cliente con una clave que obtiene a partir del nombre y la contrase&ntilde;a del usuario.";
 choices[64][3] = "Utiliza los algoritmos de cifrado bajo el modo de operaci&oacute;n denominado CBC (Cipher block chaining).";
 answers[64] = choices[64][0];
 units[64] = "74";
 comments[64] = "Id Pregunta: 6140. TIC A 2009";


//  Id pregunta: 6491 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  Respecto a los servicios de directorio se puede afirmar que:";
 choices[65]= new Array();
 choices[65][0] = "LDAP define el modelo completo de servicio de directorio";
 choices[65][1] = "X.500 es un protocolo de acceso a un servicio de directorio LDAP";
 choices[65][2] = "LDAP es un protocolo de acceso a servicios de directorio X.500";
 choices[65][3] = "Ninguna de las anteriores es correcta";
 answers[65] = choices[65][2];
 units[65] = "74";
 comments[65] = "Id Pregunta: 6491. Castilla La Mancha 2009";


//  Id pregunta: 6546 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  Deficiencias dentro del sistema Kerberos";
 choices[66]= new Array();
 choices[66][0] = "El centro de distribuci&oacute;n de claves es un &uacute;nico punto de fallo";
 choices[66][1] = "Privacidad";
 choices[66][2] = "Integridad";
 choices[66][3] = "Todas las respuestas anteriores son incorrectos";
 answers[66] = choices[66][0];
 units[66] = "111";
 comments[66] = "Id Pregunta: 6546. NULL";


//  Id pregunta: 6548 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  &iquest;C&oacute;mo se utiliza un protocolo reto/respuesta con una implementaci&oacute;n con un dispositivo de tokens?";
 choices[67]= new Array();
 choices[67][0] = "Este protocolo no se usa, se usa la criptograf&iacute;a";
 choices[67][1] = "El servicio de autenticaci&oacute;n genera un reto y el dispositivo inteligente genera una respuesta basado en el reto";
 choices[67][2] = "El dispositivo pide el usuario y la contrase&ntilde;a";
 choices[67][3] = "El dispositivo compara la contrase&ntilde;a del usuario contra una base de datos de credenciales";
 answers[67] = choices[67][1];
 units[67] = "111";
 comments[67] = "Id Pregunta: 6548. NULL";


//  Id pregunta: 6571 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)  El campo extensions en un certificado X.509 ";
 choices[68]= new Array();
 choices[68][0] = "Permite a&ntilde;adir nuevos campos al certificado sin modificar su definici&oacute;n ASN.1";
 choices[68][1] = "Presentan Informaci&oacute;n sobre claves certificadas y pol&iacute;ticas";
 choices[68][2] = "Presentan informaci&oacute;n adicional sobre el propietario del certificado y sobre su emisor";
 choices[68][3] = "Todas las respuestas anteriores son ciertas";
 answers[68] = choices[68][3];
 units[68] = "73";
 comments[68] = "Id Pregunta: 6571. NULL";


//  Id pregunta: 7174 AÃ±o de creación de pregunta: 2010-01-01
 questions[69]= "70)  A la hora de atacar un texto cifrado, el m&eacute;todo que explota las debilidades del algoritmo de cifrado o sus puntos menos fuertes para intentar deducir un texto nativo o deducir la clave de cifrado se denomina:";
 choices[69]= new Array();
 choices[69][0] = "Ataque por Fuerza Bruta";
 choices[69][1] = "CriptoAn&aacute;lisis";
 choices[69][2] = "An&aacute;lisis Diferencia de Cifrado";
 choices[69][3] = "CriptoCifrado";
 answers[69] = choices[69][1];
 units[69] = "72";
 comments[69] = "Id Pregunta: 7174. Examen TIC B 2009";


//  Id pregunta: 8527 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  En un cortafuegos en modo SPI (Stateful Packet Inspection), se&ntilde;ale la opci&oacute;n verdadera:";
 choices[70]= new Array();
 choices[70][0] = "Trabaja exclusivamente en el nivel 3 de OSI.";
 choices[70][1] = "Permitir&aacute; el paso de un paquete solo si se dirige al puerto 80 de nuestro servidor.";
 choices[70][2] = "Tiene en cuenta la negociaci&oacute;n en 3 pasos (3 way handshake) del protocolo TCP/IP.";
 choices[70][3] = "No permite la conexi&oacute;n SSH ya que est&aacute; cifrada.";
 answers[70] = choices[70][2];
 units[70] = "111";
 comments[70] = "Id Pregunta: 8527. Examen TIC A2 2010 interna";


//  Id pregunta: 8777 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  La solicitud de certificaci&oacute;n de una clave p&uacute;blica remitida a la autoridad de certificaci&oacute;n correspondiente deber&aacute; ser generada en formato:";
 choices[71]= new Array();
 choices[71][0] = "PKCS#10";
 choices[71][1] = "PKCS#12";
 choices[71][2] = "X.500";
 choices[71][3] = "X.509";
 answers[71] = choices[71][0];
 units[71] = "74";
 comments[71] = "Id Pregunta: 8777. Examen UPM A2 2011";


//  Id pregunta: 8910 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  Los sistemas de cifrado sim&eacute;trico se basan en:";
 choices[72]= new Array();
 choices[72][0] = "Cifrar con la clave privada y descifrar con la clave p&uacute;blica, para garantizar la autenticidad del emisor.";
 choices[72][1] = "Cifrar con una sola clave, y no descifrar en el destino, para salvaguardar la integridad.";
 choices[72][2] = "Cifrar y descifrar con la misma clave.";
 choices[72][3] = "Cifrar con la clave p&uacute;blica y descifrar con la privada, para garantizar la confidencialidad";
 answers[72] = choices[72][2];
 units[72] = "72";
 comments[72] = "Id Pregunta: 8910. Operador Ayto. Madrid 2010";


//  Id pregunta: 8995 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  El protocolo SSL (Secure Sockets Layer)";
 choices[73]= new Array();
 choices[73][0] = "Proporciona conexiones seguras s&oacute;lo en redes privadas y siempre que el cliente y el servidor pertenezcan a la misma subred IP.";
 choices[73][1] = "No garantiza la integridad de la informaci&oacute;n intercambiada entre el cliente y el servidor.";
 choices[73][2] = "Es una capa de seguridad que opera siempre sobre protocolo UDP.";
 choices[73][3] = "Proporciona conexiones seguras sobre una red insegura garantizando la integridad de los datos transmitidos, privacidad de la conexi&oacute;n y autentificaci&oacute;n del cliente y servidor.";
 answers[73] = choices[73][3];
 units[73] = "111";
 comments[73] = "Id Pregunta: 8995. Examen UPM A2 2011";


//  Id pregunta: 9791 AÃ±o de creación de pregunta: 2014-01-01
 questions[74]= "75)  En el contexto de la seguridad, el shoulder surfing consiste en:";
 choices[74]= new Array();
 choices[74][0] = "Espiar a los usuarios modificando los navegadores web para obtener sus claves de acceso.";
 choices[74][1] = "Uso de aplicaciones intermedias llamadas shoulders para la obtenci&oacute;n de los datos de navegaci&oacute;n.";
 choices[74][2] = "Espiar f&iacute;sicamente a los usuarios, para obtener generalmente claves de acceso al sistema.";
 choices[74][3] = "Es un sin&oacute;nimo del ataque man in the middle ";
 answers[74] = choices[74][2];
 units[74] = "111";
 comments[74] = "Id Pregunta: 9791. Examen TIC A2 2013";


//  Id pregunta: 9859 AÃ±o de creación de pregunta: 2014-01-01
 questions[75]= "76)  La informaci&oacute;n contenida en el chip del DNI electr&oacute;nico est&aacute; contenida en tres zonas con diferentes niveles de acceso. Indique qu&eacute; informaci&oacute;n est&aacute; contenida en la Zona de seguridad:";
 choices[75]= new Array();
 choices[75][0] = "Certificado de autenticaci&oacute;n";
 choices[75][1] = "Datos de filiaci&oacute;n del ciudadano.";
 choices[75][2] = "Claves Diffie-Hellman.";
 choices[75][3] = "Certificados X-509 de componente.";
 answers[75] = choices[75][1];
 units[75] = "111";
 comments[75] = "Id Pregunta: 9859. Examen TIC del Servicio de Salud de Extremadura 2014";


//  Id pregunta: 10074 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  Se&ntilde;ale cuales de las siguiente afirmaciones NO es una caracter&iacute;stica del protocolo EAP-TTLS:";
 choices[76]= new Array();
 choices[76][0] = "En la creaci&oacute;n del t&uacute;nel TLS el servidor se autentica mediante certificado.";
 choices[76][1] = "El cliente puede usar un m&eacute;todo de autenticaci&oacute;n distinto a EAP.";
 choices[76][2] = "Est&aacute; soportado de forma nativa en sistemas operativos Windows 7.";
 choices[76][3] = "Los mensajes de autenticaci&oacute;n del cliente son enviados cifrados al servidor.";
 answers[76] = choices[76][2];
 units[76] = "111";
 comments[76] = "Id Pregunta: 10074. TIC A2, libre, examen 2013";


//  Id pregunta: 10317 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  CRAM-MD5 definido en el RFC 2195 es una t&eacute;cnica criptogr&aacute;fica que consiste en:";
 choices[77]= new Array();
 choices[77][0] = "Un mecanismo de autenticaci&oacute;n challenge-response para autenticaci&oacute;n de usuarios POP e IMAP, entre otros.";
 choices[77][1] = "Un mecanismo de cifrado sim&eacute;trico de bloque basado en una clave compartida y derivaci&oacute;n de subclaves usando MD5.";
 choices[77][2] = "Un algoritmo de firma electr&oacute;nica basado en MD5, ideado para escenarios en los que no puede usarse criptograf&iacute;a asim&eacute;trica.";
 choices[77][3] = "Un algoritmo de cifrado sim&eacute;trico de flujo (stream) basado una clave compartida, en MD5 y un LFSR predeterminado.";
 answers[77] = choices[77][0];
 units[77] = "72";
 comments[77] = "Id Pregunta: 10317. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10372 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  &iquest;Qu&eacute; es Kleopatra?";
 choices[78]= new Array();
 choices[78][0] = "El equivalente en Android al servicio Kerberos de Windows";
 choices[78][1] = "Una aplicaci&oacute;n de gesti&oacute;n criptogr&aacute;fica basada en GPG";
 choices[78][2] = "Un navegador del entorno KDE";
 choices[78][3] = "La &uacute;ltima versi&oacute;n de Debian";
 answers[78] = choices[78][1];
 units[78] = "72";
 comments[78] = "Id Pregunta: 10372. ";


//  Id pregunta: 10373 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  El ataque criptogr&aacute;fico llamado &quot;birthday attack&quot; est&aacute; basado en la paradoja del cumplea&ntilde;os. &iquest;Cu&aacute;l es su objetivo?";
 choices[79]= new Array();
 choices[79][0] = "Capturar pares de claves de funciones resumen (hash) con el mismo resultado, ya que es estad&iacute;sticamente m&aacute;s probable el ataque probando de dos en dos.";
 choices[79][1] = "Robar la clave privada del dni electr&oacute;nico del usuario cuando est&aacute; realizando alguna gesti&oacute;n con el mismo, ya que se extrae dicha clave conociendo parte de la informaci&oacute;n contenida, como la fecha de nacimiento del sujeto.";
 choices[79][2] = "Averiguar la clave de acceso al facebook de un usuario sabiendo cu&aacute;ndo cumple a&ntilde;os ya que la gente es muy descuidada y usa esa informaci&oacute;n como pregunta secreta.";
 choices[79][3] = "Encontrar una clave en toda las aplicaciones que usa generalmente un usuario (correo, facebook, twitter, etc.) que coincida con su fecha de cumplea&ntilde;os y a partir de ah&iacute; hacerse con el resto de contrase&ntilde;as.";
 answers[79] = choices[79][0];
 units[79] = "72";
 comments[79] = "Id Pregunta: 10373. ";


//  Id pregunta: 10376 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  Si un intruso intenta cotillear (eavesdropping) durante el proceso de generaci&oacute;n de las claves generadas por criptograf&iacute;a cu&aacute;ntica:";
 choices[80]= new Array();
 choices[80][0] = "El sistema lo rechaza";
 choices[80][1] = "Las claves generadas se ve alteradas y el intruso es informado de que su intento de interceptaci&oacute;n no ha tenido &eacute;xito";
 choices[80][2] = "Al intentar usar las claves interceptadas le propone el sistema un challenge o desaf&iacute;o adicional";
 choices[80][3] = "S&oacute;lo puede hacerlo si se usan cifradores de flujo";
 answers[80] = choices[80][1];
 units[80] = "72";
 comments[80] = "Id Pregunta: 10376. ";


//  Id pregunta: 10475 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  Si usamos el m&eacute;todo de comprobaci&oacute;n de la validez de un certificado mediante CRL en vez de OCSP puede ocurrir que (marcar la correcta respecto a CRL que no ocurrir&iacute;a usando OCSP)&hellip;";
 choices[81]= new Array();
 choices[81][0] = "El certificado que estamos validando est&eacute; malformado";
 choices[81][1] = "La autoridad de certificaci&oacute;n que emiti&oacute; el certificado sea incorrecta";
 choices[81][2] = "El certificado haya sido revocado desde la anterior emisi&oacute;n de CRL pero la consulta lo d&eacute; por v&aacute;lido";
 choices[81][3] = "El certificado haya expirado pero no se pueda verificar  la fecha de fin de validez y la comprobaci&oacute;n lo d&eacute; por v&aacute;lido cuando est&aacute; expirado.";
 answers[81] = choices[81][2];
 units[81] = "73";
 comments[81] = "Id Pregunta: 10475. ";


//  Id pregunta: 10476 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  Completa la frase: A diferencia de NIS, LDAP &hellip;";
 choices[82]= new Array();
 choices[82][0] = "No est&aacute; restringido a redes unix";
 choices[82][1] = "Usa notaci&oacute;n ASN.1";
 choices[82][2] = "No soporta implementaciones de software libre";
 choices[82][3] = "Se usa sobre TCP/IP";
 answers[82] = choices[82][0];
 units[82] = "73";
 comments[82] = "Id Pregunta: 10476. ";


//  Id pregunta: 10654 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  Se&ntilde;ale cu&aacute;l de estas entidades no pertenece a una arquitectura SAML:";
 choices[83]= new Array();
 choices[83][0] = "AP (Authentication Provider)";
 choices[83][1] = "SP (Service Provider)";
 choices[83][2] = "IdP (Identity Provider) ";
 choices[83][3] = "Todos los anteriores son componentes de la arquitectura SAML.";
 answers[83] = choices[83][0];
 units[83] = "111";
 comments[83] = "Id Pregunta: 10654. ";


//  Id pregunta: 10887 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  &iquest;Cu&aacute;l de los siguientes protocolos permite conocer en tiempo real si un certificado ha sido o no revocado?";
 choices[84]= new Array();
 choices[84][0] = "OCSP";
 choices[84][1] = "CRL";
 choices[84][2] = "PKCS#10";
 choices[84][3] = "HTTPS";
 answers[84] = choices[84][0];
 units[84] = "73, 74";
 comments[84] = "Id Pregunta: 10887. Examen GSI 2014";


//  Id pregunta: 10943 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  La Estrategia de Ciberseguridad Nacional fue aprobada por el Consejo Nacional de Seguridad en:";
 choices[85]= new Array();
 choices[85][0] = "Septiembre de 2012.";
 choices[85][1] = "Diciembre de 2013.";
 choices[85][2] = "Enero de 2014.";
 choices[85][3] = "Enero de 2011.";
 answers[85] = choices[85][1];
 units[85] = "111";
 comments[85] = "Id Pregunta: 10943. TIC A1 AGE 2014";


//  Id pregunta: 10957 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  Los certificados electr&oacute;nicos contenidos en el DNI electr&oacute;nico tienen una vigencia de:";
 choices[86]= new Array();
 choices[86][0] = "30 meses.";
 choices[86][1] = "48 meses.";
 choices[86][2] = "24 meses.";
 choices[86][3] = "36 meses.";
 answers[86] = choices[86][0];
 units[86] = "74";
 comments[86] = "Id Pregunta: 10957. TIC A1 AGE 2014";


//  Id pregunta: 10970 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  Respecto a las tarjetas de identificaci&oacute;n con circuitos integrados, la norma ISO/IEC 7816-4:2013 NO especifica:";
 choices[87]= new Array();
 choices[87][0] = "Las dimensiones y tolerancias de la tarjeta de identificaci&oacute;n.";
 choices[87][1] = "M&eacute;todos de acceso a los ficheros e informaci&oacute;n.";
 choices[87][2] = "M&eacute;todos para la securizaci&oacute;n de los mensajes.";
 choices[87][3] = "M&eacute;todos para la recuperaci&oacute;n de informaci&oacute;n.";
 answers[87] = choices[87][0];
 units[87] = "74";
 comments[87] = "Id Pregunta: 10970. TIC A1 AGE 2014";


//  Id pregunta: 10978 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  Respecto al algoritmo de cifrado RC5, se&ntilde;ale la respuesta correcta:";
 choices[88]= new Array();
 choices[88][0] = "Se trata de un algoritmo de cifrado asim&eacute;trico.";
 choices[88][1] = "No utiliza rotaciones dependientes de los datos para su proceso.";
 choices[88][2] = "Posee un n&uacute;mero fijo de rotaciones para su proceso.";
 choices[88][3] = "Posee tama&ntilde;o variable de clave.";
 answers[88] = choices[88][3];
 units[88] = "72";
 comments[88] = "Id Pregunta: 10978. TIC A1 AGE 2014";


//  Id pregunta: 10995 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  Para prevenir un ataque de SQL Injection:";
 choices[89]= new Array();
 choices[89][0] = "Debe detenerse la base de datos para evitar su infecci&oacute;n por el c&oacute;digo malicioso.";
 choices[89][1] = "Debe evitarse el uso de procedimientos almacenados en la base de datos.";
 choices[89][2] = "Debe eliminarse del equipo del usuario el c&oacute;digo SQL descargado, para evitar su propagaci&oacute;n.";
 choices[89][3] = "Debe utilizarse instrucciones SQL parametrizadas.";
 answers[89] = choices[89][3];
 units[89] = "111";
 comments[89] = "Id Pregunta: 10995. TIC A1 AGE 2014";


//  Id pregunta: 11150 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  &iquest;Cu&aacute;l de lo siguientes sistemas de firma electr&oacute;nica utilizan las Administraciones P&uacute;blicas para la actuaci&oacute;n administrativa automatizada, con objeto de su identificaci&oacute;n electr&oacute;nica y para la autenticaci&oacute;n de los documentos electr&oacute;nicos que produzcan?";
 choices[90]= new Array();
 choices[90][0] = "Sello electr&oacute;nico";
 choices[90][1] = "C&oacute;digo seguro de verificaci&oacute;n";
 choices[90][2] = "Todos los anteriores";
 choices[90][3] = "Ninguno de los anteriores";
 answers[90] = choices[90][2];
 units[90] = "73";
 comments[90] = "Id Pregunta: 11150. ";


//  Id pregunta: 11152 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;Cu&aacute;l de los siguientes es un requisito de seguridad aplicable a los prestadores de servicios de confianza TSP?";
 choices[91]= new Array();
 choices[91][0] = "Adoptar&aacute;n las medidas t&eacute;cnicas y organizativas adecuadas para gestionar los riesgos para la seguridad de los servicios de confianza que prestan.";
 choices[91][1] = "En un plazo m&aacute;ximo de 48 horas tras tener conocimiento de ellas, notificar&aacute;n al Ministerio de Industria como organismo supervisor y al organismo nacional competente en materia de seguridad de la informaci&oacute;n, o la autoridad de protecci&oacute;n de datos, cualquier violaci&oacute;n de la seguridad o p&eacute;rdida de la integridad que tenga un impacto significativo en el servicio de confianza prestado o en los datos personales correspondientes.";
 choices[91][2] = "Cuando la violaci&oacute;n de seguridad o la p&eacute;rdida de integridad puedan atentar contra una persona f&iacute;sica o jur&iacute;dica a la que se ha prestado el servicio de confianza, el TSP notificar&aacute; tambi&eacute;n a la persona, en un plazo de 72 horas, la violaci&oacute;n de seguridad o la p&eacute;rdida de integridad.";
 choices[91][3] = "Si una violaci&oacute;n de la seguridad o p&eacute;rdida de la integridad afecta a dos o m&aacute;s Estados miembros, el organismo de supervisi&oacute;n notificado informar&aacute; al respecto &uacute;nicamente a los organismos de supervisi&oacute;n de los dem&aacute;s Estados miembros de que se trate.";
 answers[91] = choices[91][0];
 units[91] = "74";
 comments[91] = "Id Pregunta: 11152. ";


//  Id pregunta: 11188 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l de los siguientes es un protocolo de autenticaci&oacute;n PPP (Point to Point)?";
 choices[92]= new Array();
 choices[92][0] = "RADIUS &ndash; Remote Authentication Dial In User Service";
 choices[92][1] = "Kerberos";
 choices[92][2] = "CHAP Challenge Handshake Authentication Protocol";
 choices[92][3] = "Todos los anteriores";
 answers[92] = choices[92][2];
 units[92] = "111";
 comments[92] = "Id Pregunta: 11188. ";


//  Id pregunta: 11264 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Seleccione la opci&oacute;n correcta m&aacute;s precisa sobre las obligaciones previas a la expedici&oacute;n de certificados reconocidos incluida en la ley de firma electr&oacute;nica:";
 choices[93]= new Array();
 choices[93][0] = "Asegurarse de que el firmante est&aacute; en posesi&oacute;n de los datos de creaci&oacute;n de firma correspondientes a los de verificaci&oacute;n que constan en el certificado.";
 choices[93][1] = "Asegurarse de que el firmante tiene el control exclusivo sobre el uso de los datos de creaci&oacute;n de firma correspondientes a los de verificaci&oacute;n que constan en el certificado.";
 choices[93][2] = "La respuesta B) es correcta, la cual fue a&ntilde;adida por la ley 25/2015 de reducci&oacute;n de la carga financiera y otras medidas de orden social, que introduc&iacute;a cambios en la Ley 59/2003 de firma electr&oacute;nica para dar soporte jur&iacute;dico a la denominada firma en la nube.";
 choices[93][3] = "La respuesta A) es correcta, ya que la &uacute;ltima modificaci&oacute;n a la ley de firma electr&oacute;nica fue realizada por  la ley 9/2014 General de Telecomunicaciones, que ampliaba el periodo de validez de los certificados reconocidos a 5 a&ntilde;os.";
 answers[93] = choices[93][2];
 units[93] = "73";
 comments[93] = "Id Pregunta: 11264. ";


//  Id pregunta: 11312 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Se&ntilde;ale de entre los siguientes, cu&aacute;l no es un ataque en una red";
 choices[94]= new Array();
 choices[94][0] = "Ping de la muerte";
 choices[94][1] = "ARP poisoning";
 choices[94][2] = "Smurf";
 choices[94][3] = "Snicker";
 answers[94] = choices[94][3];
 units[94] = "111";
 comments[94] = "Id Pregunta: 11312. ";


//  Id pregunta: 11514 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  De entre los siguientes est&aacute;ndares XML del W3C, &iquest;Cu&aacute;l define pol&iacute;ticas de control de acceso de usuarios?";
 choices[95]= new Array();
 choices[95][0] = "DSML";
 choices[95][1] = "XrML";
 choices[95][2] = "XKMS";
 choices[95][3] = "XACML";
 answers[95] = choices[95][3];
 units[95] = "72";
 comments[95] = "Id Pregunta: 11514. NULL";


//  Id pregunta: 11518 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Qu&eacute; afirmaci&oacute;n respecto al protocolo SSL NO es cierta?";
 choices[96]= new Array();
 choices[96][0] = "Responde por Secure Socket Layer.";
 choices[96][1] = "Es un est&aacute;ndar de facto propuesto por Netscape, ampliamente disponible en servidores y navegadores web.";
 choices[96][2] = "En su funcionamiento se establece primeramente una clave de sesi&oacute;n para conseguir el cifrado del canal. (confidencialidad)";
 choices[96][3] = "Es un protocolo cliente-servidor que requiere la autenticaci&oacute;n de ambas partes.";
 answers[96] = choices[96][3];
 units[96] = "111";
 comments[96] = "Id Pregunta: 11518. NULL";


//  Id pregunta: 11665 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Las dimensiones can&oacute;nicas de la seguridad son:";
 choices[97]= new Array();
 choices[97][0] = "Disponibilidad, confidencialidad y trazabilidad";
 choices[97][1] = "Confidencialidad, autenticidad y disponibilidad";
 choices[97][2] = "Integridad, trazabilidad y autenticidad";
 choices[97][3] = "Confidencialidad, integridad y disponibilidad";
 answers[97] = choices[97][3];
 units[97] = "111";
 comments[97] = "Id Pregunta: 11665. ";


//  Id pregunta: 11691 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  En el contexto de NAT IP,&iquest; qu&eacute; direcci&oacute;n se usa para representar equipos internos en el exterior?";
 choices[98]= new Array();
 choices[98][0] = "Local interna";
 choices[98][1] = "Global interna";
 choices[98][2] = "Local externa";
 choices[98][3] = "Global interna";
 answers[98] = choices[98][1];
 units[98] = "111";
 comments[98] = "Id Pregunta: 11691. NULL";


//  Id pregunta: 11708 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Qu&eacute; amenaza de seguridad se trata de SW que se adhiere a otro SW para ejecutar funciones no deseadas?";
 choices[99]= new Array();
 choices[99][0] = "Virus";
 choices[99][1] = "Gusano";
 choices[99][2] = "Caballo de Troya Proxy";
 choices[99][3] = "Caballo de Troya de denegaci&oacute;n de servicio";
 answers[99] = choices[99][0];
 units[99] = "111";
 comments[99] = "Id Pregunta: 11708. NULL";


