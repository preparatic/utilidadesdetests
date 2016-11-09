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

//  Id pregunta: 773 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no se corresponden con un sistema de workflow?";
 choices[0]= new Array();
 choices[0][0] = "Facilidad de enrutamiento";
 choices[0][1] = "Monitorizaci&oacute;n y control";
 choices[0][2] = "Gesti&oacute;n de procedimintos";
 choices[0][3] = "Control de responsabilidades";
 answers[0] = choices[0][3];
 units[0] = "72";
 comments[0] = "Id Pregunta: 773. ";


//  Id pregunta: 783 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  &iquest;Cu&aacute;l de los siguientes algoritmos criptogr&aacute;ficos es de tipo asim&eacute;trico?";
 choices[1]= new Array();
 choices[1][0] = "Triple DES (TDES)";
 choices[1][1] = "Rinjdael (AES)";
 choices[1][2] = "Diffie-Hellman";
 choices[1][3] = "IDEA (International Data Encription Algorithm)";
 answers[1] = choices[1][2];
 units[1] = "72";
 comments[1] = "Id Pregunta: 783. SS-A 2004";


//  Id pregunta: 830 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  Comparando la criptograf&iacute;a de clave secreta frente a la criptograf&iacute;a asim&eacute;trica. &iquest;C&uacute;al de los dos tipos de criptograf&iacute;a es m&aacute;s segura, suponiendo igual longitud de clave?:";
 choices[2]= new Array();
 choices[2][0] = "La de clave secreta";
 choices[2][1] = "La asim&eacute;trica";
 choices[2][2] = "Son igual de seguras";
 choices[2][3] = "Depende del lenguaje de programaci&oacute;n empleado";
 answers[2] = choices[2][0];
 units[2] = "72";
 comments[2] = "Id Pregunta: 830. ";


//  Id pregunta: 838 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto al uso de mecanismos criptogr&aacute;ficos?:";
 choices[3]= new Array();
 choices[3][0] = "El uso de mecanismos criptogr&aacute;ficos puede aumentar la latencia de las comunicaciones";
 choices[3][1] = "El uso de mecanismos criptogr&aacute;ficos puede aumentar la confidencialidad";
 choices[3][2] = "El uso de mecanismos criptogr&aacute;ficos puede implementarse por software o por hardware";
 choices[3][3] = "El uso de mecanismos criptogr&aacute;ficos no puede proporcionar integridad en las comunicaciones";
 answers[3] = choices[3][3];
 units[3] = "72";
 comments[3] = "Id Pregunta: 838. ";


//  Id pregunta: 840 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;Cu&aacute;l de las siguientes afirmaciones referentes a un sistema criptogr&aacute;fico de clave p&uacute;blica o asim&eacute;trico es falsa?:";
 choices[4]= new Array();
 choices[4][0] = "Cada usuario posee dos claves denominadas p&uacute;blica y privada, independientes entre s&iacute;. La clave privada es la usada en el servicio de confidencialidad (cifrado)";
 choices[4][1] = "La criptograf&iacute;a de clave p&uacute;blica se usa para la implantaci&oacute;n de servicios de seguridad avanzados como: autenticidad (firma digital), no repudio, prueba de entrega e integridad, entre otros";
 choices[4][2] = "El uso de criptograf&iacute;a de clave p&uacute;blica, por ejemplo RSA, para servicios de confidencialidad (cifrado) proporciona un rendimiento muy inferior (caracteres cifrados/segundo) al proporcionado por los algoritmos sim&eacute;tricos como el DES";
 choices[4][3] = "La gesti&oacute;n de claves de los sistemas criptogr&aacute;ficos asim&eacute;tricos es sencilla, comparada con la existente en los sistemas convencionales sim&eacute;tricos de clave secreta";
 answers[4] = choices[4][0];
 units[4] = "72";
 comments[4] = "Id Pregunta: 840. ";


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


//  Id pregunta: 960 AÃ±o de creación de pregunta: 2005-01-01
 questions[6]= "7)  Con respecto a X.500 y LDAP, indicar la respuesta incorrecta:";
 choices[6]= new Array();
 choices[6][0] = "X.500 utiliza ASN.1 para la formaci&oacute;n de los mensajes, y LDAP utiliza cadenas de caracteres simples para la representaci&oacute;n de Distinguished Names ";
 choices[6][1] = "LDAP no posee el servicio de modificaci&oacute;n REMOVE perteneciente a DAP";
 choices[6][2] = "X.500 y LDAP funcionan sobre la pila de protocolos OSI y TCP/IP respectivamente";
 choices[6][3] = "Un dominio de gesti&oacute;n de directorio est&aacute; formado, como m&iacute;nimo, por: 1 DSA, 1 DUA y 1 esquema (visi&oacute;n externa del dominio)";
 answers[6] = choices[6][3];
 units[6] = "73";
 comments[6] = "Id Pregunta: 960. ";


//  Id pregunta: 1016 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  El ganador del concurso p&uacute;blico para reemplazar al algoritmo DES es:";
 choices[7]= new Array();
 choices[7][0] = "RC6";
 choices[7][1] = "Twofish";
 choices[7][2] = "Serpent";
 choices[7][3] = "Rijndael";
 answers[7] = choices[7][3];
 units[7] = "72";
 comments[7] = "Id Pregunta: 1016. ";


//  Id pregunta: 1029 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Firmar un mensaje electr&oacute;nico:";
 choices[8]= new Array();
 choices[8][0] = "Es lo mismo que cifrarlo";
 choices[8][1] = "Es lo mismo que codificarlo";
 choices[8][2] = "Garantiza la confidencialidad";
 choices[8][3] = "Garantiza la integridad, autenticaci&oacute;n y no repudio";
 answers[8] = choices[8][3];
 units[8] = "72";
 comments[8] = "Id Pregunta: 1029. ";


//  Id pregunta: 1377 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  TTP:";
 choices[9]= new Array();
 choices[9][0] = "La Top Testing Policy es una pol&iacute;tica que se implanta en organizaciones con un fuerte desarrollo de la calidad del software, para hacer de las pruebas algo fundamental";
 choices[9][1] = "Training To Practise es un tipo de trabajo en equipo que acelera el tiempo en que un empleado nuevo puede comenzar a desempe&ntilde;ar su funci&oacute;n.";
 choices[9][2] = "Una Trusted Third Party es una tercera parte de confianza, es decir una entidad en la que confiamos, y de la que aceptaremos todo lo que firme";
 choices[9][3] = "Todas son falsas";
 answers[9] = choices[9][2];
 units[9] = "74";
 comments[9] = "Id Pregunta: 1377. NULL";


//  Id pregunta: 1486 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Cu&aacute;l de las siguientes afirmaciones no es verdadera respecto a la criptograf&iacute;a?:";
 choices[10]= new Array();
 choices[10][0] = "Los algoritmos &quot;stream&quot; son los mas rapidos";
 choices[10][1] = "Los algoritmos &quot;stream&quot; y &quot;block&quot; son equiparables";
 choices[10][2] = "La  velocidad no tiene ninguna correlaci&oacute;n con la longitud de clave ";
 choices[10][3] = "3DES es m&aacute;s seguro y lento que DES";
 answers[10] = choices[10][1];
 units[10] = "73";
 comments[10] = "Id Pregunta: 1486. ";


//  Id pregunta: 1535 AÃ±o de creación de pregunta: 2003-01-01
 questions[11]= "12)  &iquest; Cu&aacute;l de los siguientes t&eacute;rminos no est&aacute; relacionado con un directorio LDAP ?";
 choices[11]= new Array();
 choices[11][0] = "DIT";
 choices[11][1] = "WMI";
 choices[11][2] = "DN";
 choices[11][3] = "RDN";
 answers[11] = choices[11][1];
 units[11] = "74";
 comments[11] = "Id Pregunta: 1535. NULL";


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


//  Id pregunta: 1563 AÃ±o de creación de pregunta: 2003-01-01
 questions[13]= "14)  &iquest;Cu&aacute;l de los siguientes tipos de informaci&oacute;n no est&aacute; contenida obligatoriamente en un certificado digital X.509?:";
 choices[13]= new Array();
 choices[13][0] = "La clave p&uacute;blica del titular.";
 choices[13][1] = "Datos personales de identificaci&oacute;n del titular.";
 choices[13][2] = "La URL del directorio LDAP contenedor de claves p&uacute;blicas.";
 choices[13][3] = "La firma electr&oacute;nica de la Autoridad de Certificaci&oacute;n que emiti&oacute; el certificado.";
 answers[13] = choices[13][2];
 units[13] = "73";
 comments[13] = "Id Pregunta: 1563. Junta Andaluc&iacute;a";


//  Id pregunta: 1565 AÃ±o de creación de pregunta: 2009-01-01
 questions[14]= "15)  &iquest;C&uacute;al es la afirmaci&oacute;n falsa si hablamos de LDAP?";
 choices[14]= new Array();
 choices[14][0] = "Usa TCP/IP";
 choices[14][1] = "Reemplaza a X.500";
 choices[14][2] = "El protocolo usa ASN.1 y los mensajes se codifican y transmiten usando BER ";
 choices[14][3] = "Permite la operaci&oacute;n MODIFY";
 answers[14] = choices[14][1];
 units[14] = "74";
 comments[14] = "Id Pregunta: 1565. RFC 4511";


//  Id pregunta: 1615 AÃ±o de creación de pregunta: 2003-01-01
 questions[15]= "16)  Las t&eacute;cnicas orientadas a garantizar la seguridad en las operaciones relacionadas con los servicios de certificaci&oacute;n y firma electr&oacute;nica, deben cumplir los principios de:";
 choices[15]= new Array();
 choices[15][0] = "Confidencialidad, Seguridad, Integridad, y Autenticaci&oacute;n.";
 choices[15][1] = "Confidencialidad, Integridad, Autenticaci&oacute;n, y No Repudio.";
 choices[15][2] = "Disponibilidad, Integridad, Autenticaci&oacute;n, y No Repudio.";
 choices[15][3] = "Disponibilidad, Seguridad, Integridad, y Autenticaci&oacute;n.";
 answers[15] = choices[15][1];
 units[15] = "72";
 comments[15] = "Id Pregunta: 1615. Junta Andaluc&iacute;a";


//  Id pregunta: 1850 AÃ±o de creación de pregunta: 2006-01-01
 questions[16]= "17)  &iquest;Cu&aacute;l de los siguientes algoritmos no sirve de base para la definici&oacute;n de algoritmos de criptograf&iacute;a asim&eacute;trica?";
 choices[16]= new Array();
 choices[16][0] = "Problema de sustituci&oacute;n af&iacute;n";
 choices[16][1] = "Problema de factorizaci&oacute;n entera";
 choices[16][2] = "Problema de logaritmo discreto";
 choices[16][3] = "Problema de logaritmo discreto el&iacute;ptico";
 answers[16] = choices[16][0];
 units[16] = "72";
 comments[16] = "Id Pregunta: 1850. ";


//  Id pregunta: 1852 AÃ±o de creación de pregunta: 2006-01-01
 questions[17]= "18)  Al ataque criptogr&aacute;fico consistente en el barrido del espacio de claves se le denomina:";
 choices[17]= new Array();
 choices[17][0] = "Fuerza bruta";
 choices[17][1] = "Criptoan&aacute;lisis diferencial";
 choices[17][2] = "Criptoan&aacute;lisis lineal";
 choices[17][3] = "An&aacute;lisis de temporizaci&oacute;n";
 answers[17] = choices[17][0];
 units[17] = "72";
 comments[17] = "Id Pregunta: 1852. ";


//  Id pregunta: 1865 AÃ±o de creación de pregunta: 2006-01-01
 questions[18]= "19)  &iquest;Qu&eacute; es falso respecto a LDAP?";
 choices[18]= new Array();
 choices[18][0] = "Cada entrada cuenta con un nombre DN";
 choices[18][1] = "Representa todos los campos mediante ASN.1";
 choices[18][2] = "Ha eliminado opciones respecto a DAP";
 choices[18][3] = "Las entradas se pueden organizar en &aacute;rbol";
 answers[18] = choices[18][1];
 units[18] = "74";
 comments[18] = "Id Pregunta: 1865. RFC 4514";


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


//  Id pregunta: 1896 AÃ±o de creación de pregunta: 2006-01-01
 questions[20]= "21)  En la protecci&oacute;n de contrase&ntilde;as, la cadena aleatoria de datos usada para modificar el hash de contrase&ntilde;a se llama";
 choices[20]= new Array();
 choices[20][0] = "sal";
 choices[20][1] = "dongle";
 choices[20][2] = "semilla";
 choices[20][3] = "marca de agua";
 answers[20] = choices[20][0];
 units[20] = "74";
 comments[20] = "Id Pregunta: 1896. NULL";


//  Id pregunta: 1907 AÃ±o de creación de pregunta: 2006-01-01
 questions[21]= "22)  El elemento del DNI que no permite por si solo autenticar a una persona es";
 choices[21]= new Array();
 choices[21][0] = "El nombre";
 choices[21][1] = "La foto";
 choices[21][2] = "La firma";
 choices[21][3] = "La huella dactilar";
 answers[21] = choices[21][0];
 units[21] = "74";
 comments[21] = "Id Pregunta: 1907. NULL";


//  Id pregunta: 4266 AÃ±o de creación de pregunta: 2007-01-01
 questions[22]= "23)  Indique cu&aacute;l de los siguientes no es un servicio LDAP";
 choices[22]= new Array();
 choices[22][0] = "READ";
 choices[22][1] = "COMPARE";
 choices[22][2] = "ADD";
 choices[22][3] = "ABANDON";
 answers[22] = choices[22][0];
 units[22] = "74";
 comments[22] = "Id Pregunta: 4266. NULL";


//  Id pregunta: 4572 AÃ±o de creación de pregunta: 2007-01-01
 questions[23]= "24)  Si exportamos un certificado incluyendo su clave privada desde el navegador MS Internet Explorer 6, que extensi&oacute;n tendr&aacute; el fichero resultante?:";
 choices[23]= new Array();
 choices[23][0] = "p12";
 choices[23][1] = ".cer";
 choices[23][2] = ".jks";
 choices[23][3] = ".pfx";
 answers[23] = choices[23][3];
 units[23] = "74";
 comments[23] = "Id Pregunta: 4572. NULL";


//  Id pregunta: 4600 AÃ±o de creación de pregunta: 2007-01-01
 questions[24]= "25)  Respecto al protocolo de seguridad IKE, cual de las siguientes respuestas es falsa:";
 choices[24]= new Array();
 choices[24][0] = "recrea las claves cada cierto tiempo";
 choices[24][1] = "permite utilizar certificados digitales";
 choices[24][2] = "se necesita una asociaci&oacute;n de seguridad IKE Para cada conexi&oacute;n IPSEC.";
 choices[24][3] = "esta basado en Oakley.";
 answers[24] = choices[24][2];
 units[24] = "74";
 comments[24] = "Id Pregunta: 4600. NULL";


//  Id pregunta: 4770 AÃ±o de creación de pregunta: 2007-01-01
 questions[25]= "26)  Si Alice quiere transmitir un documento cifrado (sin autentcaci&oacute;n) hacia Bob utilizando un algoritmo de clave asim&eacute;trica";
 choices[25]= new Array();
 choices[25][0] = "Debe cifrarlo con la clave p&uacute;blica de Bob";
 choices[25][1] = "Debe cifrarlo con la clave privada de Bob";
 choices[25][2] = "Debe cifrarlo con la clave privada de Alice";
 choices[25][3] = "Debe cifrarlo con la clave p&uacute;blica de Alice";
 answers[25] = choices[25][0];
 units[25] = "74";
 comments[25] = "Id Pregunta: 4770. NULL";


//  Id pregunta: 4870 AÃ±o de creación de pregunta: 2007-01-01
 questions[26]= "27)  Seg&uacute;n la recomendaci&oacute;n X.509 v.3, las Listas de certificados revocados (CRL)";
 choices[26]= new Array();
 choices[26][0] = "Permiten conocer el estado de un certificado en el instante de la consulta";
 choices[26][1] = "Para cada certificado revocado indican, entre otros, el nombre del titular del certificado y la correspondienteclave p&uacute;blica";
 choices[26][2] = "Pueden contener certificados revocados por diversas Autoridades de Certificaci&oacute;n";
 choices[26][3] = "Las delta CRL son los subconjuntos en los que se divide una CRL y que instaladas en m&aacute;quinas distintasfacilitan su tratamiento";
 answers[26] = choices[26][2];
 units[26] = "73";
 comments[26] = "Id Pregunta: 4870. ";


//  Id pregunta: 5086 AÃ±o de creación de pregunta: 2001-01-01
 questions[27]= "28)  &iquest;Cu&aacute;l de los siguientes algoritmos se basa en el problema de factorizaci&oacute;n entera?";
 choices[27]= new Array();
 choices[27][0] = "el algoritmo RIPEMD-160";
 choices[27][1] = "los algoritmos RSA y RW";
 choices[27][2] = "los algoritmos DHE y DSAE";
 choices[27][3] = "el algoritmo Rijndael";
 answers[27] = choices[27][1];
 units[27] = "72";
 comments[27] = "Id Pregunta: 5086. ";


//  Id pregunta: 5092 AÃ±o de creación de pregunta: 2003-01-01
 questions[28]= "29)  Las dimensiones del DNI electr&oacute;nico son:";
 choices[28]= new Array();
 choices[28][0] = "85,60 mm de ancho X 53,98 mm de alto";
 choices[28][1] = "8,6 mm de ancho X 5,9 mm de alto";
 choices[28][2] = "60 mm de ancho X 58 mm de alto";
 choices[28][3] = "85,60 mm de alto X 53,98 mm de ancho";
 answers[28] = choices[28][0];
 units[28] = "74";
 comments[28] = "Id Pregunta: 5092. NULL";


//  Id pregunta: 5272 AÃ±o de creación de pregunta: 2003-01-01
 questions[29]= "30)  El DNIe recoge los siguientes datos biom&eacute;tricos";
 choices[29]= new Array();
 choices[29][0] = "Huellas dactilares";
 choices[29][1] = "Iris del ojo";
 choices[29][2] = "Patr&oacute;n facial";
 choices[29][3] = "Ninguna de las anteriores";
 answers[29] = choices[29][3];
 units[29] = "74";
 comments[29] = "Id Pregunta: 5272. no recoge huella dactilar completa, s&oacute;lo las minucias";


//  Id pregunta: 5274 AÃ±o de creación de pregunta: 2003-01-01
 questions[30]= "31)  Un est&aacute;ndar para tarjeta inteligente sin contacto que haya de poder comunicarse con dispositivos a una distancia mayor de 50 cm es ";
 choices[30]= new Array();
 choices[30][0] = "ISO 15693";
 choices[30][1] = "ISO 10536";
 choices[30][2] = "ISO 14443";
 choices[30][3] = "ISO 9001";
 answers[30] = choices[30][0];
 units[30] = "74";
 comments[30] = "Id Pregunta: 5274. NULL";


//  Id pregunta: 5475 AÃ±o de creación de pregunta: 2003-01-01
 questions[31]= "32)  Los registros glue de una zona DNS son aquellos que";
 choices[31]= new Array();
 choices[31][0] = "Son los registros que mantienen la resoluci&oacute;n inversa";
 choices[31][1] = "Son los registros que mantienen el espacio de nombres de la zona";
 choices[31][2] = "Son los registros que permiten intercambiar informaci&oacute;n entre las diferentes zonas/subzonas";
 choices[31][3] = "Son los registros que permiten la consulta delegada de otros sistemas dns";
 answers[31] = choices[31][1];
 units[31] = "73";
 comments[31] = "Id Pregunta: 5475. Castilla y Le&oacute;n";


//  Id pregunta: 5688 AÃ±o de creación de pregunta: 2003-01-01
 questions[32]= "33)  Se&ntilde;ale donde se encuentran los datos biom&eacute;tricos y de identidad en el chip criptogr&aacute;fico del DNI electr&oacute;nico:";
 choices[32]= new Array();
 choices[32][0] = "Zona de seguridad";
 choices[32][1] = "Zona p&uacute;blica";
 choices[32][2] = "Zona privada";
 choices[32][3] = "Zona confidencial";
 answers[32] = choices[32][0];
 units[32] = "74";
 comments[32] = "Id Pregunta: 5688. NULL";


//  Id pregunta: 5691 AÃ±o de creación de pregunta: 2003-01-01
 questions[33]= "34)  Dentro del chip criptogr&aacute;fico del DNI electr&oacute;nico podemos encontrar tres zonas de datos diferenciadas. Una de las zonas s&oacute;lo es accesible por la Direcci&oacute;n General de la Polic&iacute;a. Se&ntilde;ale su nombre: ";
 choices[33]= new Array();
 choices[33][0] = "Zona p&uacute;blica";
 choices[33][1] = "Zona de seguridad";
 choices[33][2] = "Zona privada";
 choices[33][3] = "Zona confidencial";
 answers[33] = choices[33][1];
 units[33] = "74";
 comments[33] = "Id Pregunta: 5691. NULL";


//  Id pregunta: 5739 AÃ±o de creación de pregunta: 2009-01-01
 questions[34]= "35)  &iquest;Qu&eacute; caracter&iacute;sticas debe reunir, entre otras, la firma electr&oacute;nica reconocida?";
 choices[34]= new Array();
 choices[34][0] = "Tener una clave privada de 512 bits o superior";
 choices[34][1] = "Usar un certificado reconocido";
 choices[34][2] = "Usar el algoritmo RSA";
 choices[34][3] = "Usar certificados con periodo de validez superior a dos a&ntilde;os";
 answers[34] = choices[34][1];
 units[34] = "72";
 comments[34] = "Id Pregunta: 5739. ";


//  Id pregunta: 5747 AÃ±o de creación de pregunta: 2009-01-01
 questions[35]= "36)  &iquest;Cu&aacute;l es la longitud del resumen de la funci&oacute;n SHA-1?";
 choices[35]= new Array();
 choices[35][0] = "64 bits";
 choices[35][1] = "128 bits";
 choices[35][2] = "160 bits";
 choices[35][3] = "224 bits";
 answers[35] = choices[35][2];
 units[35] = "72";
 comments[35] = "Id Pregunta: 5747. ";


//  Id pregunta: 5748 AÃ±o de creación de pregunta: 2009-01-01
 questions[36]= "37)  &iquest;Qu&eacute; es una firma secuencial?";
 choices[36]= new Array();
 choices[36][0] = "Un documento que incluye las firmas de varios usuarios, todas ellas sobre el mismo documento original";
 choices[36][1] = "Un documento que incluye las firmas de varios usuarios, cada una de ellas incluyendo las firmas anteriores en el tiempo";
 choices[36][2] = "Un documento que incluye la firma de un usuario, y uno o varios documentos originales";
 choices[36][3] = "Un documento que contiene un documento original, la firma de uno o varios usuarios, y uno o varios sellos de tiempo";
 answers[36] = choices[36][1];
 units[36] = "74";
 comments[36] = "Id Pregunta: 5748. NULL";


//  Id pregunta: 5750 AÃ±o de creación de pregunta: 2009-01-01
 questions[37]= "38)  Entre SHA-1 y MD5 &iquest;cu&aacute;l se considera m&aacute;s resistente a colisiones?";
 choices[37]= new Array();
 choices[37][0] = "El SHA-1 porque produce un resumen m&aacute;s largo";
 choices[37][1] = "El SHA-1 porque produce un resumen m&aacute;s corto";
 choices[37][2] = "El MD5 porque produce un resumen m&aacute;s largo";
 choices[37][3] = "El MD5 porque produce un resumen m&aacute;s corto";
 answers[37] = choices[37][0];
 units[37] = "72";
 comments[37] = "Id Pregunta: 5750. ";


//  Id pregunta: 5751 AÃ±o de creación de pregunta: 2009-01-01
 questions[38]= "39)  &iquest;Cu&aacute;l es la longitud efectiva aproximada de clave del algoritmo Triple DES?";
 choices[38]= new Array();
 choices[38][0] = "112 (2x56) bits";
 choices[38][1] = "128 (2x64) bits";
 choices[38][2] = "168 (3x56) bits";
 choices[38][3] = "192 (3x64) bits";
 answers[38] = choices[38][0];
 units[38] = "72";
 comments[38] = "Id Pregunta: 5751. ";


//  Id pregunta: 5980 AÃ±o de creación de pregunta: 2010-01-01
 questions[39]= "40)  En un sistema con 10 usuarios se plantea el uso de un sistema criptogr&aacute;fico para asegurar las transferencias de datos entretodos ellos. &iquest;Cu&aacute;l ser&iacute;a la diferencia entre usar sistemas de claves sim&eacute;tricas o asim&eacute;tricas?";
 choices[39]= new Array();
 choices[39][0] = "No existe diferencia, en ambos casos se necesitar&aacute;n 20 claves.";
 choices[39][1] = "Con el sistema asim&eacute;trico hacen falta 20 claves y con el sim&eacute;trico el doble, ya que todas son secretas.";
 choices[39][2] = "Con el sistema asim&eacute;trico hacen falta 20 claves y con el sim&eacute;trico s&oacute;lo 10, una por cada usuario.";
 choices[39][3] = "Con el sistema asim&eacute;trico hacen falta 20 claves y con el sim&eacute;trico 45 claves.";
 answers[39] = choices[39][3];
 units[39] = "72";
 comments[39] = "Id Pregunta: 5980. TIC A 2009";


//  Id pregunta: 6491 AÃ±o de creación de pregunta: 2010-01-01
 questions[40]= "41)  Respecto a los servicios de directorio se puede afirmar que:";
 choices[40]= new Array();
 choices[40][0] = "LDAP define el modelo completo de servicio de directorio";
 choices[40][1] = "X.500 es un protocolo de acceso a un servicio de directorio LDAP";
 choices[40][2] = "LDAP es un protocolo de acceso a servicios de directorio X.500";
 choices[40][3] = "Ninguna de las anteriores es correcta";
 answers[40] = choices[40][2];
 units[40] = "74";
 comments[40] = "Id Pregunta: 6491. Castilla La Mancha 2009";


//  Id pregunta: 6597 AÃ±o de creación de pregunta: 2010-01-01
 questions[41]= "42)  Una auditor&iacute;a de acuerdo al RD 1720/2007, implica el llevar a cabo:";
 choices[41]= new Array();
 choices[41][0] = "An&aacute;lisis de la red de comunicaciones";
 choices[41][1] = "An&aacute;lisis de los sistemas operativos";
 choices[41][2] = "An&aacute;lisis de los ficheros automatizados";
 choices[41][3] = "Todas las respuestas anteriores son correctas";
 answers[41] = choices[41][3];
 units[41] = "75";
 comments[41] = "Id Pregunta: 6597. NULL";


//  Id pregunta: 6598 AÃ±o de creación de pregunta: 2010-01-01
 questions[42]= "43)  El documento de seguridad de obligado cumplimiento para el personal con acceso a los ficheros automatizados y no automatizados de car&aacute;cter personal y a los sistemas de informaci&oacute;n, debo incluir:";
 choices[42]= new Array();
 choices[42][0] = "&Aacute;mbito de aplicaci&oacute;n del documento con especificaci&oacute;n detallada de los recursos protegidos";
 choices[42][1] = "Estructura de los ficheros con datos de car&aacute;cter personal y descripci&oacute;n de los sistemas de informaci&oacute;n que los tratan";
 choices[42][2] = "Procedimiento de notificaci&oacute;n, gesti&oacute;n y respuesta ante incidencias";
 choices[42][3] = "Todas las respuestas anteriores son correctas";
 answers[42] = choices[42][3];
 units[42] = "75";
 comments[42] = "Id Pregunta: 6598. NULL";


//  Id pregunta: 7178 AÃ±o de creación de pregunta: 2010-01-01
 questions[43]= "44)  En un esquema de certificaci&oacute;n y seguridad basado en clave p&uacute;blica (PKI), la 'tercera parte confiable' se denomina:";
 choices[43]= new Array();
 choices[43][0] = "Autoridad de Certificaci&oacute;n";
 choices[43][1] = "Autoridad de Registro";
 choices[43][2] = "Centro de Confianza";
 choices[43][3] = "Autoridad de Revocaci&oacute;n";
 answers[43] = choices[43][0];
 units[43] = "74";
 comments[43] = "Id Pregunta: 7178. Examen TIC B 2009";


//  Id pregunta: 7339 AÃ±o de creación de pregunta: 2010-01-01
 questions[44]= "45)  Uno de los objetivos de la seguridad es evitar que alteren los datos durante una transmisi&oacute;n, esto es conocido como:";
 choices[44]= new Array();
 choices[44][0] = "Integridad";
 choices[44][1] = "Confidencialidad";
 choices[44][2] = "No Repudio";
 choices[44][3] = "Disponibilidad";
 answers[44] = choices[44][0];
 units[44] = "72";
 comments[44] = "Id Pregunta: 7339. NULL";


//  Id pregunta: 7341 AÃ±o de creación de pregunta: 2010-01-01
 questions[45]= "46)  Se&ntilde;ale la afirmaci&oacute;n CORRECTA:";
 choices[45]= new Array();
 choices[45][0] = "DES es un algoritmo de cifrado asim&eacute;trico";
 choices[45][1] = "RSA es un algoritmo de cifrado sim&eacute;trico";
 choices[45][2] = "AES es implementable tanto en hardware como en software";
 choices[45][3] = "Todas las anteriores son FALSAS.";
 answers[45] = choices[45][2];
 units[45] = "72";
 comments[45] = "Id Pregunta: 7341. NULL";


//  Id pregunta: 7344 AÃ±o de creación de pregunta: 2010-01-01
 questions[46]= "47)  El grupo de est&aacute;ndares de criptograf&iacute;a de clave p&uacute;blica, PKCS (Public Key Cryptography Standars), son publicados por:";
 choices[46]= new Array();
 choices[46][0] = "IEEE";
 choices[46][1] = "IETF";
 choices[46][2] = "RSA";
 choices[46][3] = "DES";
 answers[46] = choices[46][2];
 units[46] = "72";
 comments[46] = "Id Pregunta: 7344. NULL";


//  Id pregunta: 8165 AÃ±o de creación de pregunta: 2011-01-01
 questions[47]= "48)  &iquest;Cu&aacute;l es la vigencia temporal de los certificados electr&oacute;nicos contenidos en el DNIe?:";
 choices[47]= new Array();
 choices[47][0] = "Ilimitada.";
 choices[47][1] = "No podr&aacute; ser superior a 5 a&ntilde;os.";
 choices[47][2] = "30 meses.";
 choices[47][3] = "El certificado de autenticidad 24 meses y el de firma 18.";
 answers[47] = choices[47][1];
 units[47] = "74";
 comments[47] = "Id Pregunta: 8165. Examen TIC A1 2010. RD 414/2015 que modifica el RD 1553/2005 de expedici&oacute;n del DNI.";


//  Id pregunta: 8302 AÃ±o de creación de pregunta: 2011-01-01
 questions[48]= "49)  La especificaci&oacute;n PKCS#3 de RSA se refiere a: ";
 choices[48]= new Array();
 choices[48][0] = "El est&aacute;ndar criptogr&aacute;fico RSA. ";
 choices[48][1] = "La sintaxis de la informaci&oacute;n de clave privada.";
 choices[48][2] = "El intercambio de claves Diffie-Hellman.";
 choices[48][3] = "La sintaxis del mensaje criptogr&aacute;fico. ";
 answers[48] = choices[48][2];
 units[48] = "72";
 comments[48] = "Id Pregunta: 8302. Examen TIC A2 2010";


//  Id pregunta: 8896 AÃ±o de creación de pregunta: 2011-01-01
 questions[49]= "50)  &iquest;Qu&eacute; grupos de operaciones est&aacute;n definidas en el modelo funcional de LDAP?";
 choices[49]= new Array();
 choices[49][0] = "De consulta, de actualizaci&oacute;n y de b&uacute;squeda";
 choices[49][1] = "De b&uacute;squeda, de actualizaci&oacute;n y de control";
 choices[49][2] = "De consulta, de actualizaci&oacute;n y de autenticaci&oacute;n y control";
 choices[49][3] = "De comparaci&oacute;n, de consulta y de b&uacute;squeda";
 answers[49] = choices[49][1];
 units[49] = "74";
 comments[49] = "Id Pregunta: 8896. NULL";


//  Id pregunta: 9584 AÃ±o de creación de pregunta: 2013-01-01
 questions[50]= "51)  Los certificados incorporados al DNI-e:";
 choices[50]= new Array();
 choices[50][0] = "Son dos: de autenticaci&oacute;n y de firma del ciudadano.";
 choices[50][1] = "Los usuarios finales pueden validarlos en la Direcci&oacute;n General de la Polic&iacute;a, que est&aacute; constituida como Autoridad de Validaci&oacute;n.";
 choices[50][2] = "Est&aacute;n basados en la recomendaci&oacute;n X. 509 v.3 sin extensi&oacute;n alguna.";
 choices[50][3] = "Est&aacute;n integrados en un chip certificado en el nivel de seguridad EAL4+ definido en la norma ISO/IEC 15408.";
 answers[50] = choices[50][3];
 units[50] = "43, 74";
 comments[50] = "Id Pregunta: 9584. Examen TIC A1 2011";


//  Id pregunta: 10049 AÃ±o de creación de pregunta: 2014-01-01
 questions[51]= "52)  Un archivo .PFX, de uso en certificados electr&oacute;nicos:";
 choices[51]= new Array();
 choices[51][0] = "Contiene la clave privada.";
 choices[51][1] = "Cumple la sintaxis PKCS #21.";
 choices[51][2] = "Est&aacute; codificado en un formato no binario.";
 choices[51][3] = "No se puede convertir a formato .PEM.";
 answers[51] = choices[51][0];
 units[51] = "72";
 comments[51] = "Id Pregunta: 10049. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10051 AÃ±o de creación de pregunta: 2014-01-01
 questions[52]= "53)  Un archivo .PFX, de uso en certificados electr&oacute;nicos:";
 choices[52]= new Array();
 choices[52][0] = "Contiene la clave privada.";
 choices[52][1] = "Cumple la sintaxis PKCS #21.";
 choices[52][2] = "Est&aacute; codificado en un formato no binario.";
 choices[52][3] = "No se puede convertir a formato .PEM.";
 answers[52] = choices[52][0];
 units[52] = "72";
 comments[52] = "Id Pregunta: 10051. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10374 AÃ±o de creación de pregunta: 2014-01-01
 questions[53]= "54)  El Teorema Chino del Resto es un m&eacute;todo matem&aacute;tico de resoluci&oacute;n de ecuaciones en aritm&eacute;tica modular que tiene aplicaci&oacute;n principalmente en:";
 choices[53]= new Array();
 choices[53][0] = "Criptograf&iacute;a asim&eacute;trica o de clave p&uacute;blica";
 choices[53][1] = "Criptograf&iacute;a sim&eacute;trica";
 choices[53][2] = "C&aacute;lculo de impedancias de cables coaxiales";
 choices[53][3] = "Junto con el teorema de Euler se usa en resoluci&oacute;n de caminos en grafos, teniendo su aplicaci&oacute;n pr&aacute;ctica en la resoluci&oacute;n de enrutamientos en comunicaciones.";
 answers[53] = choices[53][0];
 units[53] = "72";
 comments[53] = "Id Pregunta: 10374. ";


//  Id pregunta: 10480 AÃ±o de creación de pregunta: 2014-01-01
 questions[54]= "55)  La Autoridad de Certificaci&oacute;n de los certificados emitidos para el DNI electr&oacute;nico es:";
 choices[54]= new Array();
 choices[54][0] = "La F&aacute;brica Nacional de Moneda y Timbre";
 choices[54][1] = "El Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[54][2] = "El CCN (Centro Criptol&oacute;gico Nacional)";
 choices[54][3] = "El Ministerio del Interior - Direcci&oacute;n General de la Polic&iacute;a";
 answers[54] = choices[54][3];
 units[54] = "74";
 comments[54] = "Id Pregunta: 10480. NULL";


//  Id pregunta: 10610 AÃ±o de creación de pregunta: 2015-01-01
 questions[55]= "56)  &iquest;Seg&uacute;n el Reglamento 910/2014 del Parlamento Europeo y del Consejo, cu&aacute;l de &eacute;stos son requisitos de seguridad de los TSP (Trust Service Providers)?";
 choices[55]= new Array();
 choices[55][0] = "Notificar las violaciones al MINETUR y el organismo correspondiente en m&aacute;ximo 24 horas.";
 choices[55][1] = "Mantener una base de datos de certificados";
 choices[55][2] = "Publicar las revocaciones en un m&aacute;ximo de 24 horas tras la solicitud.";
 choices[55][3] = "Todas las anteriores.";
 answers[55] = choices[55][0];
 units[55] = "74";
 comments[55] = "Id Pregunta: 10610. B y C son exclusivamente para QTSPs";


//  Id pregunta: 10612 AÃ±o de creación de pregunta: 2015-01-01
 questions[56]= "57)  El DNIe 3.0:";
 choices[56]= new Array();
 choices[56][0] = "Permite la lectura sin PIN del certificado de firma.";
 choices[56][1] = "Incorpora tecnolog&iacute;a de lectura sin contacto.";
 choices[56][2] = "Reduce la vigencia de los certificados de identificaci&oacute;n y firma a 5 a&ntilde;os.";
 choices[56][3] = "Todas las anteriores.";
 answers[56] = choices[56][1];
 units[56] = "74";
 comments[56] = "Id Pregunta: 10612. A. Permite la lectura sin PIN del certificado de identificaci&oacute;n, no de firma.C. Amplia la vigencia de los certificados (antes 30 meses).";


//  Id pregunta: 10970 AÃ±o de creación de pregunta: 2015-01-01
 questions[57]= "58)  Respecto a las tarjetas de identificaci&oacute;n con circuitos integrados, la norma ISO/IEC 7816-4:2013 NO especifica:";
 choices[57]= new Array();
 choices[57][0] = "Las dimensiones y tolerancias de la tarjeta de identificaci&oacute;n.";
 choices[57][1] = "M&eacute;todos de acceso a los ficheros e informaci&oacute;n.";
 choices[57][2] = "M&eacute;todos para la securizaci&oacute;n de los mensajes.";
 choices[57][3] = "M&eacute;todos para la recuperaci&oacute;n de informaci&oacute;n.";
 answers[57] = choices[57][0];
 units[57] = "74";
 comments[57] = "Id Pregunta: 10970. TIC A1 AGE 2014";


//  Id pregunta: 11052 AÃ±o de creación de pregunta: 2015-01-01
 questions[58]= "59)  &iquest;Cu&aacute;l es el plazo m&aacute;ximo de validez de los certificados reconocidos para firma electr&oacute;nica?";
 choices[58]= new Array();
 choices[58][0] = "30 meses";
 choices[58][1] = "4 a&ntilde;os";
 choices[58][2] = "5 a&ntilde;os";
 choices[58][3] = "10 a&ntilde;os";
 answers[58] = choices[58][2];
 units[58] = "73";
 comments[58] = "Id Pregunta: 11052. Modificado por Ley 9/2014";


//  Id pregunta: 11254 AÃ±o de creación de pregunta: 2015-01-01
 questions[59]= "60)  El algoritmo de encriptaci&oacute;n Camellia:";
 choices[59]= new Array();
 choices[59][0] = "Fue desarrollado en EEUU.";
 choices[59][1] = "La longitud de clave es variable entre 128, 192 y 256 bits.";
 choices[59][2] = "Tiene un tama&ntilde;o de bloque de 64 bits.";
 choices[59][3] = "No est&aacute; soportado en TLS/SSL.";
 answers[59] = choices[59][1];
 units[59] = "72";
 comments[59] = "Id Pregunta: 11254. ";


//  Id pregunta: 11263 AÃ±o de creación de pregunta: 2015-01-01
 questions[60]= "61)  Sobre los servicios cualificados de entrega electr&oacute;nica certificada es FALSO que deban cumplir el siguiente requisito t&eacute;cnico:";
 choices[60]= new Array();
 choices[60][0] = "Ser prestados por uno o m&aacute;s prestadores cualificados de servicios de confianza.";
 choices[60][1] = "Asegurar con un alto nivel de fiabilidad la identificaci&oacute;n del remitente.";
 choices[60][2] = "Estar protegidos el env&iacute;o y recepci&oacute;n de datos por una firma electr&oacute;nica cualificada o un sello electr&oacute;nico cualificado de tal forma que se impida la posibilidad de que se modifiquen los datos sin que se detecte.";
 choices[60][3] = "Indicar claramente al emisor y al destinatario de los datos cualquier modificaci&oacute;n de los datos necesarios a efectos del env&iacute;o o recepci&oacute;n de los datos.";
 answers[60] = choices[60][2];
 units[60] = "73";
 comments[60] = "Id Pregunta: 11263. ";


//  Id pregunta: 11264 AÃ±o de creación de pregunta: 2015-01-01
 questions[61]= "62)  Seleccione la opci&oacute;n correcta m&aacute;s precisa sobre las obligaciones previas a la expedici&oacute;n de certificados reconocidos incluida en la ley de firma electr&oacute;nica:";
 choices[61]= new Array();
 choices[61][0] = "Asegurarse de que el firmante est&aacute; en posesi&oacute;n de los datos de creaci&oacute;n de firma correspondientes a los de verificaci&oacute;n que constan en el certificado.";
 choices[61][1] = "Asegurarse de que el firmante tiene el control exclusivo sobre el uso de los datos de creaci&oacute;n de firma correspondientes a los de verificaci&oacute;n que constan en el certificado.";
 choices[61][2] = "La respuesta B) es correcta, la cual fue a&ntilde;adida por la ley 25/2015 de reducci&oacute;n de la carga financiera y otras medidas de orden social, que introduc&iacute;a cambios en la Ley 59/2003 de firma electr&oacute;nica para dar soporte jur&iacute;dico a la denominada firma en la nube.";
 choices[61][3] = "La respuesta A) es correcta, ya que la &uacute;ltima modificaci&oacute;n a la ley de firma electr&oacute;nica fue realizada por  la ley 9/2014 General de Telecomunicaciones, que ampliaba el periodo de validez de los certificados reconocidos a 5 a&ntilde;os.";
 answers[61] = choices[61][2];
 units[61] = "73";
 comments[61] = "Id Pregunta: 11264. ";


//  Id pregunta: 11346 AÃ±o de creación de pregunta: 2015-01-01
 questions[62]= "63)  De los siguientes, indique la opci&oacute;n que contiene los modelos correctos contemplados por LDAP";
 choices[62]= new Array();
 choices[62][0] = "informaci&oacute;n; direccionamiento; observable; estructural";
 choices[62][1] = "informaci&oacute;n; direccionamiento; objetivable; estructural";
 choices[62][2] = "informaci&oacute;n; direccionamiento; seguridad; estructural";
 choices[62][3] = "informaci&oacute;n; direccionamiento; seguridad; funcional";
 answers[62] = choices[62][3];
 units[62] = "73";
 comments[62] = "Id Pregunta: 11346. ";


