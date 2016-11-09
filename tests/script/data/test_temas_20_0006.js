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

//  Id pregunta: 767 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  Los tipos de tarjetas inteligentes son ";
 choices[0]= new Array();
 choices[0][0] = "de acoplamiento";
 choices[0][1] = "de vecindad";
 choices[0][2] = "de proximidad";
 choices[0][3] = "todas las anteriores";
 answers[0] = choices[0][3];
 units[0] = "74";
 comments[0] = "Id Pregunta: 767. NULL";


//  Id pregunta: 773 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no se corresponden con un sistema de workflow?";
 choices[1]= new Array();
 choices[1][0] = "Facilidad de enrutamiento";
 choices[1][1] = "Monitorizaci&oacute;n y control";
 choices[1][2] = "Gesti&oacute;n de procedimintos";
 choices[1][3] = "Control de responsabilidades";
 answers[1] = choices[1][3];
 units[1] = "72";
 comments[1] = "Id Pregunta: 773. ";


//  Id pregunta: 840 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;Cu&aacute;l de las siguientes afirmaciones referentes a un sistema criptogr&aacute;fico de clave p&uacute;blica o asim&eacute;trico es falsa?:";
 choices[2]= new Array();
 choices[2][0] = "Cada usuario posee dos claves denominadas p&uacute;blica y privada, independientes entre s&iacute;. La clave privada es la usada en el servicio de confidencialidad (cifrado)";
 choices[2][1] = "La criptograf&iacute;a de clave p&uacute;blica se usa para la implantaci&oacute;n de servicios de seguridad avanzados como: autenticidad (firma digital), no repudio, prueba de entrega e integridad, entre otros";
 choices[2][2] = "El uso de criptograf&iacute;a de clave p&uacute;blica, por ejemplo RSA, para servicios de confidencialidad (cifrado) proporciona un rendimiento muy inferior (caracteres cifrados/segundo) al proporcionado por los algoritmos sim&eacute;tricos como el DES";
 choices[2][3] = "La gesti&oacute;n de claves de los sistemas criptogr&aacute;ficos asim&eacute;tricos es sencilla, comparada con la existente en los sistemas convencionales sim&eacute;tricos de clave secreta";
 answers[2] = choices[2][0];
 units[2] = "72";
 comments[2] = "Id Pregunta: 840. ";


//  Id pregunta: 874 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;Cu&aacute;l de los siguientes sistemas de cifrado no es una alternativa aceptable para DES (Data Encryption Standard)?:";
 choices[3]= new Array();
 choices[3][0] = "RC-4";
 choices[3][1] = "IDEA";
 choices[3][2] = "Triple DES";
 choices[3][3] = "RSA";
 answers[3] = choices[3][3];
 units[3] = "72";
 comments[3] = "Id Pregunta: 874. ";


//  Id pregunta: 915 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;Qu&eacute; elemento no forma parte del Servicio X.500 de OSI?:";
 choices[4]= new Array();
 choices[4][0] = "Agente de usuario del directorio (DUA)";
 choices[4][1] = "Agentes del sistema de directorio (DSA)";
 choices[4][2] = "&Aacute;rbol de informaci&oacute;n del directorio (DIT)";
 choices[4][3] = "Sistema de almacenamiento del directorio (DMS)";
 answers[4] = choices[4][3];
 units[4] = "73";
 comments[4] = "Id Pregunta: 915. ";


//  Id pregunta: 943 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;Qu&eacute; servicio proporciona a los usuarios el servicio de directorio X.500?:";
 choices[5]= new Array();
 choices[5][0] = "Dar facilidades para consultar informaci&oacute;n acerca de objetos accesibles en una red";
 choices[5][1] = "Facilitar direcciones y nombre de usuarios accesibles en una red";
 choices[5][2] = "Realizar las funciones de direccionamiento y nomenclatura de usuarios de un sistema de tratamiento de mensajes seg&uacute;n la norma X.400";
 choices[5][3] = "Controlar las peticiones de registro de usuario por medio de agentes de sistema (DSA) y mantenimiento de la base de informaci&oacute;n de directorio (DIB)";
 answers[5] = choices[5][0];
 units[5] = "72";
 comments[5] = "Id Pregunta: 943. ";


//  Id pregunta: 985 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Dentro de los criptosistemas el Data Encryption Standard es el m&aacute;s conocido por su f&aacute;cil implementaci&oacute;n. Indicar cu&aacute;l de las siguientes afirmaciones no le es aplicable:";
 choices[6]= new Array();
 choices[6][0] = "La clave es &uacute;nica y debe ser conocida por receptor y emisor";
 choices[6][1] = "La longitud de la clave es de 56 bits";
 choices[6][2] = "El ciclo de permutaci&oacute;n y sustituci&oacute;n se repite 16 veces";
 choices[6][3] = "Este m&eacute;todo de cifrado se conoce como de clave p&uacute;blica";
 answers[6] = choices[6][3];
 units[6] = "72";
 comments[6] = "Id Pregunta: 985. ";


//  Id pregunta: 1000 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  El &aacute;rbol formado por las entradas del directorio, en LDAP, se llama:";
 choices[7]= new Array();
 choices[7][0] = "Ltree";
 choices[7][1] = "LDS";
 choices[7][2] = "DIT";
 choices[7][3] = "Todas son falsas";
 answers[7] = choices[7][2];
 units[7] = "74";
 comments[7] = "Id Pregunta: 1000. NULL";


//  Id pregunta: 1318 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Respecto al algoritmo RSA:";
 choices[8]= new Array();
 choices[8][0] = "Reduce el problema de la distribuci&oacute;n de claves respecto a los criptosistemas cl&aacute;sicos";
 choices[8][1] = "Pertenece a la categor&iacute;a de criptosistemas sim&eacute;tricos";
 choices[8][2] = "Se basa en la utilizaci&oacute;n de grandes series de n&uacute;meros primos de tama&ntilde;o peque&ntilde;o  ";
 choices[8][3] = "Se basa en la transposici&oacute;n y sustituci&oacute;n de s&iacute;mbolos a trav&eacute;s de m&uacute;ltiples iteraciones";
 answers[8] = choices[8][0];
 units[8] = "72";
 comments[8] = "Id Pregunta: 1318. ";


//  Id pregunta: 1327 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  Se define como criptosistema asim&eacute;trico lo siguiente:";
 choices[9]= new Array();
 choices[9][0] = "algoritmo basado en clave &uacute;nica";
 choices[9][1] = "algoritmo basado en 2 claves, una de cifrado y otra de descifrado, siendo una p&uacute;blica y otra privada";
 choices[9][2] = "algoritmo basado en 2 claves, una de cifrado y otra de descifrado, siendo ambas privadas";
 choices[9][3] = "Ninguna de las anteriores";
 answers[9] = choices[9][1];
 units[9] = "72";
 comments[9] = "Id Pregunta: 1327. ";


//  Id pregunta: 1392 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  Un registro MX, en un servidor DNS, &iquest;a qu&eacute; hace referencia?:";
 choices[10]= new Array();
 choices[10][0] = "Al servidor DNS principal";
 choices[10][1] = "Al servidor web asociado al dominio";
 choices[10][2] = "Al servidor de correo asociado al dominio";
 choices[10][3] = "Al servidor seguro asociado al dominio";
 answers[10] = choices[10][2];
 units[10] = "73";
 comments[10] = "Id Pregunta: 1392. ";


//  Id pregunta: 1538 AÃ±o de creación de pregunta: 2003-01-01
 questions[11]= "12)  &iquest; Cu&aacute;l no es una aplicaci&oacute;n de LDAP ?";
 choices[11]= new Array();
 choices[11][0] = "Gesti&oacute;n de configuraci&oacute;n";
 choices[11][1] = "Seguridad";
 choices[11][2] = "Correo Electr&oacute;nico";
 choices[11][3] = "Transmisi&oacute;n de ficheros";
 answers[11] = choices[11][3];
 units[11] = "74";
 comments[11] = "Id Pregunta: 1538. NULL";


//  Id pregunta: 1565 AÃ±o de creación de pregunta: 2009-01-01
 questions[12]= "13)  &iquest;C&uacute;al es la afirmaci&oacute;n falsa si hablamos de LDAP?";
 choices[12]= new Array();
 choices[12][0] = "Usa TCP/IP";
 choices[12][1] = "Reemplaza a X.500";
 choices[12][2] = "El protocolo usa ASN.1 y los mensajes se codifican y transmiten usando BER ";
 choices[12][3] = "Permite la operaci&oacute;n MODIFY";
 answers[12] = choices[12][1];
 units[12] = "74";
 comments[12] = "Id Pregunta: 1565. RFC 4511";


//  Id pregunta: 1582 AÃ±o de creación de pregunta: 2004-01-01
 questions[13]= "14)  La criptograf&iacute;a cu&aacute;ntica es una t&eacute;cnica basada en";
 choices[13]= new Array();
 choices[13][0] = "Polarizaci&oacute;n de la luz";
 choices[13][1] = "Propiedades de los campos magn&eacute;ticos";
 choices[13][2] = "Ultrasonidos";
 choices[13][3] = "Transmisi&oacute;n de datos a muy alta frecuencia";
 answers[13] = choices[13][0];
 units[13] = "72";
 comments[13] = "Id Pregunta: 1582. Tanenbaum";


//  Id pregunta: 1856 AÃ±o de creación de pregunta: 2009-01-01
 questions[14]= "15)  Se&ntilde;ale la falsa:";
 choices[14]= new Array();
 choices[14][0] = "XML Encryption es un lenguaje cuya funci&oacute;n principal es asegurar la confidencialidad de partes de documentos XML a trav&eacute;s de la encriptaci&oacute;n parcial del documento transportado";
 choices[14][1] = "XML Encryption se puede aplicar a cualquier recurso Web, incluyendo contenido que no es XML.";
 choices[14][2] = "XML Encryption establece que es posible cifrar datos a distintos niveles de granularidad, desde elementos simples hasta documentos enteros";
 choices[14][3] = "Ninguna de las anteriores es correcta.";
 answers[14] = choices[14][3];
 units[14] = "72";
 comments[14] = "Id Pregunta: 1856. ";


//  Id pregunta: 1858 AÃ±o de creación de pregunta: 2006-01-01
 questions[15]= "16)  &iquest;Qu&eacute; elemento no forma parte de la norma X.500 de OSI?";
 choices[15]= new Array();
 choices[15][0] = "Agente de usuario del directorio (DUA)";
 choices[15][1] = "&Aacute;rbol de informaci&oacute;n del directorio (DIT)";
 choices[15][2] = "Dominio de nombres de directorio (DND)";
 choices[15][3] = "Base de informaci&oacute;n del directorio (DIB)";
 answers[15] = choices[15][2];
 units[15] = "73";
 comments[15] = "Id Pregunta: 1858. ";


//  Id pregunta: 1928 AÃ±o de creación de pregunta: 2006-01-01
 questions[16]= "17)  En el &aacute;mbito de las tarjetas con chip integrado, &iquest;cu&aacute;l es el apartado de la norma ISO 7816 que recoge las especificaciones el&eacute;ctricas y los protocolos de comunicaci&oacute;n?";
 choices[16]= new Array();
 choices[16][0] = "ISO 7816-1";
 choices[16][1] = "ISO 7816-2";
 choices[16][2] = "ISO 7816-3";
 choices[16][3] = "ISO 7816-4";
 answers[16] = choices[16][2];
 units[16] = "74";
 comments[16] = "Id Pregunta: 1928. NULL";


//  Id pregunta: 3054 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  De las vulnerabilidades del software respecto a la seguridad inform&aacute;tica es falso que:";
 choices[17]= new Array();
 choices[17][0] = "el ataque de buffer overflow se basa en desbordar un buffer de memoria a la pila del sistema y forzar un retorno de una funci&oacute;n al sitio deseado";
 choices[17][1] = "el ataque m&aacute;s famoso en internet (gusano de internet) se basaba en fallo del software de los servidores HTTP en la entrega de p&aacute;ginas";
 choices[17][2] = "el ataque de IP spoofing consiste en falsificar la direcci&oacute;n IP para suplantar la identidad";
 choices[17][3] = "DDOS es un m&eacute;todo de ataque de denegaci&oacute;n del servicio de forma distribuida";
 answers[17] = choices[17][1];
 units[17] = "111";
 comments[17] = "Id Pregunta: 3054. NULL";


//  Id pregunta: 3101 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Los sistemas de recuperaci&oacute;n de fallos hardware se basan siempre en:";
 choices[18]= new Array();
 choices[18][0] = "La redundancia del equipo o empleo de equipos fault-tolerant";
 choices[18][1] = "El establecimiento de una pol&iacute;tica de respaldo rigurosa";
 choices[18][2] = "Una pol&iacute;tica de mantenimiento de equipos adecuada";
 choices[18][3] = "Evitar manipulaciones indebidas en la instalaci&oacute;n inform&aacute;tica";
 answers[18] = choices[18][0];
 units[18] = "111";
 comments[18] = "Id Pregunta: 3101. NULL";


//  Id pregunta: 3353 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  De IPSec, una de las siguientes afirmaciones no es cierta. Indicar cu&aacute;l:";
 choices[19]= new Array();
 choices[19][0] = "Para transmitir IPSec, tanto en modo transporte como en modo t&uacute;nel se ha de incluir una cabecera justo delante de la cabecera IP original y una cola detr&aacute;s de los datos";
 choices[19][1] = "En modo transporte, IPSec se tiene entre los sistemas finales, mientras en modo t&uacute;nel se tiene IPSec entre routers pero IP en los tramos routers-sistemas finales";
 choices[19][2] = "El protocolo por defecto para la gesti&oacute;n de claves en IPSec se denomina IKE (Internet Key Exchange)";
 choices[19][3] = "Entre otros, IPSec proporciona mecanismos anti-replay, autenticaci&oacute;n, control de acceso y confidencialidad de datos";
 answers[19] = choices[19][0];
 units[19] = "111";
 comments[19] = "Id Pregunta: 3353. NULL";


//  Id pregunta: 3357 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  De los protocolos para proporcionar seguridad en internet es cierto que:";
 choices[20]= new Array();
 choices[20][0] = "IPSec no es transparente a las aplicaciones";
 choices[20][1] = "PPP asegura s&oacute;lo un enlace, pero no la conexi&oacute;n completa";
 choices[20][2] = "WTLS es m&aacute;s complejo que TLS ya que se adapta al entorno inal&aacute;mbrico";
 choices[20][3] = "Los protocolos a nivel de aplicaci&oacute;n son comunes a grupos de aplicaciones seg&uacute;n su funcionalidad";
 answers[20] = choices[20][1];
 units[20] = "111";
 comments[20] = "Id Pregunta: 3357. NULL";


//  Id pregunta: 3527 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  En la arquitectura de cortafuegos &quot;screened subnet&quot; o subred apantallada:";
 choices[21]= new Array();
 choices[21][0] = "se dispone de un &uacute;nico router, estando el basti&oacute;n y los dem&aacute;s componentes en la red interna";
 choices[21][1] = "se dispone de 2 routers, interno y externo, y tanto el basti&oacute;n como los dem&aacute;s componentes est&aacute;n en la red interna";
 choices[21][2] = "se dispone de 2 routers, interno y externo, y el basti&oacute;n est&aacute; en una red intermedia desmilitarizada o DMZ";
 choices[21][3] = "no se dispone de ning&uacute;n router, sino de un basti&oacute;n con funciones de proxy que apantalla la red interna y alberga los servidores p&uacute;blicos";
 answers[21] = choices[21][2];
 units[21] = "111";
 comments[21] = "Id Pregunta: 3527. NULL";


//  Id pregunta: 3722 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Los cortafuegos de filtrado de paquetes:";
 choices[22]= new Array();
 choices[22][0] = "analizan el tr&aacute;fico de la red fundamentalmente en la capa 3";
 choices[22][1] = "generalmente se usan formando 2 listas de reglas: una con acciones permitidas y otra con acciones denegadas";
 choices[22][2] = "son &uacute;tiles contra ataques de denegaci&oacute;n de servicio, y destacan por su rapidez transparencia y flexibilidad";
 choices[22][3] = "Todas las respuestas anteriores son correctas";
 answers[22] = choices[22][3];
 units[22] = "111";
 comments[22] = "Id Pregunta: 3722. NULL";


//  Id pregunta: 3842 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  SSL utiliza, entre otros, el siguiente algoritmo de cifrado sim&eacute;trico:";
 choices[23]= new Array();
 choices[23][0] = "AES";
 choices[23][1] = "LUCIFER";
 choices[23][2] = "2DES";
 choices[23][3] = "Ninguno de las anteriores";
 answers[23] = choices[23][0];
 units[23] = "111";
 comments[23] = "Id Pregunta: 3842. NULL";


//  Id pregunta: 3934 AÃ±o de creación de pregunta: 2003-01-01
 questions[24]= "25)  &iquest;En que nivel del modelo OSI se realiza el cifrado?";
 choices[24]= new Array();
 choices[24][0] = "1";
 choices[24][1] = "5";
 choices[24][2] = "7";
 choices[24][3] = "6";
 answers[24] = choices[24][3];
 units[24] = "72";
 comments[24] = "Id Pregunta: 3934. NULL";


//  Id pregunta: 4055 AÃ±o de creación de pregunta: 2006-01-01
 questions[25]= "26)  Un mensaje se puede cifrar";
 choices[25]= new Array();
 choices[25][0] = "Mediante mecanismos de cifrado sim&eacute;trico y asim&eacute;trico";
 choices[25][1] = "S&oacute;lo mediante mecanismos de cifrado sim&eacute;trico como DES";
 choices[25][2] = "S&oacute;lo mediante mecanismos de cifrado asim&eacute;trico como RSA";
 choices[25][3] = "Se puede cifrar con mecanismos de cifrado sim&eacute;trico, aunque por velocidad es preferible cifrar con criptograf&iacute;a de clave asim&eacute;trica";
 answers[25] = choices[25][0];
 units[25] = "111";
 comments[25] = "Id Pregunta: 4055. NULL";


//  Id pregunta: 4139 AÃ±o de creación de pregunta: 2006-01-01
 questions[26]= "27)  La transmisi&oacute;n de datos a trav&eacute;s de la red p&uacute;blica de forma que los nodos de enrutado no sean conscientes de que la transmisi&oacute;n es parte de una red privada se llama";
 choices[26]= new Array();
 choices[26][0] = "Tunel";
 choices[26][1] = "Red Privada Virtual (VPN)";
 choices[26][2] = "IPSec";
 choices[26][3] = "SSL";
 answers[26] = choices[26][0];
 units[26] = "111";
 comments[26] = "Id Pregunta: 4139. NULL";


//  Id pregunta: 4147 AÃ±o de creación de pregunta: 2006-01-01
 questions[27]= "28)  Cada uno de los equipos que, dentro de un servicio distribuido de detecci&oacute;n de intrusi&oacute;n, se instalan en los diferentes segmentos de red se llama";
 choices[27]= new Array();
 choices[27][0] = "cortafuegos";
 choices[27][1] = "sonda";
 choices[27][2] = "honeypot";
 choices[27][3] = "basti&oacute;n";
 answers[27] = choices[27][1];
 units[27] = "111";
 comments[27] = "Id Pregunta: 4147. NULL";


//  Id pregunta: 4150 AÃ±o de creación de pregunta: 2006-01-01
 questions[28]= "29)  Sniffer de paquetes desarrollado por el FBI para la monitorizaci&oacute;n de las transmisiones electr&oacute;nicas de criminales";
 choices[28]= new Array();
 choices[28][0] = "Carnivore";
 choices[28][1] = "Internet Key Exchange (IKE)";
 choices[28][2] = "Kerberos";
 choices[28][3] = "SSL";
 answers[28] = choices[28][0];
 units[28] = "111";
 comments[28] = "Id Pregunta: 4150. NULL";


//  Id pregunta: 4266 AÃ±o de creación de pregunta: 2007-01-01
 questions[29]= "30)  Indique cu&aacute;l de los siguientes no es un servicio LDAP";
 choices[29]= new Array();
 choices[29][0] = "READ";
 choices[29][1] = "COMPARE";
 choices[29][2] = "ADD";
 choices[29][3] = "ABANDON";
 answers[29] = choices[29][0];
 units[29] = "74";
 comments[29] = "Id Pregunta: 4266. NULL";


//  Id pregunta: 4267 AÃ±o de creación de pregunta: 2007-01-01
 questions[30]= "31)  Indique cu&aacute;l de los siguientes algoritmos criptogr&aacute;ficos se basa en el logaritmo discreto el&iacute;ptico";
 choices[30]= new Array();
 choices[30][0] = "RSA";
 choices[30][1] = "RW";
 choices[30][2] = "Diffie-Hellman";
 choices[30][3] = "DSAE";
 answers[30] = choices[30][3];
 units[30] = "73";
 comments[30] = "Id Pregunta: 4267. ";


//  Id pregunta: 4572 AÃ±o de creación de pregunta: 2007-01-01
 questions[31]= "32)  Si exportamos un certificado incluyendo su clave privada desde el navegador MS Internet Explorer 6, que extensi&oacute;n tendr&aacute; el fichero resultante?:";
 choices[31]= new Array();
 choices[31][0] = "p12";
 choices[31][1] = ".cer";
 choices[31][2] = ".jks";
 choices[31][3] = ".pfx";
 answers[31] = choices[31][3];
 units[31] = "74";
 comments[31] = "Id Pregunta: 4572. NULL";


//  Id pregunta: 4632 AÃ±o de creación de pregunta: 2007-01-01
 questions[32]= "33)  Con el cifrado se asegura";
 choices[32]= new Array();
 choices[32][0] = "la autenticidad";
 choices[32][1] = "la confidencialidad";
 choices[32][2] = "la integridad, la autenticidad y el no repudio en destino";
 choices[32][3] = "la integridad, la autenticidad y el no repudio en origen";
 answers[32] = choices[32][1];
 units[32] = "72";
 comments[32] = "Id Pregunta: 4632. ";


//  Id pregunta: 4860 AÃ±o de creación de pregunta: 2007-01-01
 questions[33]= "34)  Los certificados de clave p&uacute;blica:";
 choices[33]= new Array();
 choices[33][0] = "Que se ajustan a la recomendaci&oacute;n X.509 v.2 no admiten extensiones";
 choices[33][1] = "Ocupan m&aacute;s de 100 kbytes";
 choices[33][2] = "Que se ajustan a la recomendaci&oacute;n X.509 v.3 s&oacute;lo admiten como algoritmo de cifrado el RSA (Rivest ShamirAdleman)";
 choices[33][3] = "Fueron propuestos por Diffie y Hellman en su art&iacute;culo en que establecieron las bases de los criptosistemasde clave p&uacute;blica";
 answers[33] = choices[33][0];
 units[33] = "73";
 comments[33] = "Id Pregunta: 4860. ";


//  Id pregunta: 4987 AÃ±o de creación de pregunta: 2003-01-01
 questions[34]= "35)  De acuerdo con el modelo de arquitectura de seguridad de OSI, definido en la norma ISO/IEC 7498-2, indique cu&aacute;lde las siguientes afirmaciones es correcta:";
 choices[34]= new Array();
 choices[34][0] = "Un mecanismo de seguridad puede ser suministrado por varios servicios de seguridad";
 choices[34][1] = "Cada servicio de seguridad debe ser suministrado por el mecanismo correspondiente";
 choices[34][2] = "Todos los mecanismos de seguridad que se definen en el modelo se basan en algoritmos criptogr&aacute;ficos";
 choices[34][3] = "Un mismo servicio de seguridad puede ser suministrado por varios mecanismos de seguridad";
 answers[34] = choices[34][3];
 units[34] = "74";
 comments[34] = "Id Pregunta: 4987. Examen TIC A 2007";


//  Id pregunta: 5036 AÃ±o de creación de pregunta: 2003-01-01
 questions[35]= "36)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre el Protocolo SSL (&quot;Secure Socket Layer&quot;) es correcta?:";
 choices[35]= new Array();
 choices[35][0] = "S&oacute;lo proporciona servicios de seguridad para el protocolo HTTP (&quot;HyperText Transfer Protocol&quot;)";
 choices[35][1] = "Utiliza mecanismos de criptograf&iacute;a asim&eacute;trica para garantizar la confidencialidad de los datos a transmitir";
 choices[35][2] = "El protocolo se implementa entre los niveles de Transporte y de Red";
 choices[35][3] = "Los servicios de seguridad que proporciona son transparentes al usuario y a la aplicaci&oacute;n";
 answers[35] = choices[35][3];
 units[35] = "111";
 comments[35] = "Id Pregunta: 5036. Examen TIC A 2007";


//  Id pregunta: 5274 AÃ±o de creación de pregunta: 2003-01-01
 questions[36]= "37)  Un est&aacute;ndar para tarjeta inteligente sin contacto que haya de poder comunicarse con dispositivos a una distancia mayor de 50 cm es ";
 choices[36]= new Array();
 choices[36][0] = "ISO 15693";
 choices[36][1] = "ISO 10536";
 choices[36][2] = "ISO 14443";
 choices[36][3] = "ISO 9001";
 answers[36] = choices[36][0];
 units[36] = "74";
 comments[36] = "Id Pregunta: 5274. NULL";


//  Id pregunta: 5745 AÃ±o de creación de pregunta: 2009-01-01
 questions[37]= "38)  Respecto al algoritmo DSA, &iquest;cu&aacute;l de estas afirmaciones es falsa?";
 choices[37]= new Array();
 choices[37][0] = "Sirve para firmar documentos";
 choices[37][1] = "Sirve para autenticar";
 choices[37][2] = "Sirve para cifrar";
 choices[37][3] = "Es un est&aacute;ndar de FIPS para firmas digitales";
 answers[37] = choices[37][2];
 units[37] = "73";
 comments[37] = "Id Pregunta: 5745. ";


//  Id pregunta: 5984 AÃ±o de creación de pregunta: 2010-01-01
 questions[38]= "39)  El modelo de control de accesos donde es el sistema quien protege los recursos y donde todo recurso del sistema tiene unaetiqueta de seguridad se denomina:";
 choices[38]= new Array();
 choices[38][0] = "De acceso discrecional (DAC)";
 choices[38][1] = "De acceso obligatorio (MAC)";
 choices[38][2] = "Basado en roles (RBAC)";
 choices[38][3] = "De confidencialidad.";
 answers[38] = choices[38][1];
 units[38] = "73";
 comments[38] = "Id Pregunta: 5984. TIC A 2009";


//  Id pregunta: 6458 AÃ±o de creación de pregunta: 2010-01-01
 questions[39]= "40)  Una infraestructura de clave p&uacute;blica (PKI) es ";
 choices[39]= new Array();
 choices[39][0] = "Un algoritmo de clave p&uacute;blica, cuya firma digital hace uso de funciones hash de 64 bits";
 choices[39][1] = "El conjunto de certificado de autenticaci&oacute;n y certificado de firma reconocida";
 choices[39][2] = "Una tercera parte de confianza que se encarga de la firma digital de los certificados de usuarios de entorno de clave p&uacute;blica";
 choices[39][3] = "Un conjunto de protocolos, servicios y est&aacute;ndares que soportan aplicaciones basadas en criptograf&iacute;a de clave p&uacute;blica";
 answers[39] = choices[39][3];
 units[39] = "74";
 comments[39] = "Id Pregunta: 6458. Castilla La Mancha 2009";


//  Id pregunta: 6547 AÃ±o de creación de pregunta: 2010-01-01
 questions[40]= "41)  Qu&eacute; pol&iacute;tica de control aplica cuando la infraestructura usa un modelo no discrecional?";
 choices[40]= new Array();
 choices[40][0] = "Basado en reglas";
 choices[40][1] = "Basado en roles";
 choices[40][2] = "Basado en identidades";
 choices[40][3] = "MAC";
 answers[40] = choices[40][1];
 units[40] = "111";
 comments[40] = "Id Pregunta: 6547. NULL";


//  Id pregunta: 7176 AÃ±o de creación de pregunta: 2010-01-01
 questions[41]= "42)  &iquest;Cu&aacute;l es el est&aacute;ndar de la tarjeta f&iacute;sica del DNI electr&oacute;nico?";
 choices[41]= new Array();
 choices[41][0] = "ISO-7816-1";
 choices[41][1] = "PCKS#11";
 choices[41][2] = "ISO-17789";
 choices[41][3] = "ISO-7815-1";
 answers[41] = choices[41][0];
 units[41] = "74";
 comments[41] = "Id Pregunta: 7176. Examen TIC B 2009. Cumple est&aacute;ndar 7816-1. Soporta est&aacute;ndar PKCS#11";


//  Id pregunta: 8668 AÃ±o de creación de pregunta: 2011-01-01
 questions[42]= "43)  Los cortafuegos de filtrado de paquetes &iquest;en qu&eacute; capa TCP/IP act&uacute;an?";
 choices[42]= new Array();
 choices[42][0] = "Capa IP";
 choices[42][1] = "Capa de Aplicaci&oacute;n";
 choices[42][2] = "Capa de Sesi&oacute;n";
 choices[42][3] = "Capa de Transporte";
 answers[42] = choices[42][0];
 units[42] = "111";
 comments[42] = "Id Pregunta: 8668. Examen UPM A2 2011";


//  Id pregunta: 9037 AÃ±o de creación de pregunta: 2011-01-01
 questions[43]= "44)  Cual de las firmas Xades a&ntilde;ade referencias a datos de verificaci&oacute;n (certificados y listas de revocaci&oacute;n) a los documentos firmados";
 choices[43]= new Array();
 choices[43][0] = "Xades-BES";
 choices[43][1] = "Xades-T";
 choices[43][2] = "Xades-C";
 choices[43][3] = "Xades-EPES";
 answers[43] = choices[43][2];
 units[43] = "72";
 comments[43] = "Id Pregunta: 9037. ";


//  Id pregunta: 9713 AÃ±o de creación de pregunta: 2014-01-01
 questions[44]= "45)  Se&ntilde;ale la respuesta INCORRECTA respecto a las funciones criptogr&aacute;ficas hash o resumen.";
 choices[44]= new Array();
 choices[44][0] = "MD5 genera un hash de 128 bits.";
 choices[44][1] = "SHA-1 genera un hash de 160 bits.";
 choices[44][2] = "Se conoce por SHA-2 a un conjunto de funciones de la familia SHA que generan hashes de longitud 224, 256, 384 y 512 bits.";
 choices[44][3] = "La longitud m&iacute;nima del hash soportada en SHA-3 es 256 bits.";
 answers[44] = choices[44][3];
 units[44] = "72";
 comments[44] = "Id Pregunta: 9713. Examen TIC-A1 2013";


//  Id pregunta: 9781 AÃ±o de creación de pregunta: 2014-01-01
 questions[45]= "46)  Se&ntilde;ale la afirmaci&oacute;n es correcta respecto a firmar digitalmente mediante XML Signature al usar WS-Security:";
 choices[45]= new Array();
 choices[45][0] = "WS-Security no contempla el uso de XML Signature por no adaptarse bien al modelo petici&oacute;n respuesta de Web Services.";
 choices[45][1] = "WS-Security contemplaba el uso de XML Signature en la versi&oacute;n 1.0 pero se abandon&oacute; en favor de XML DynaSign.";
 choices[45][2] = "WS-Security contempla el uso de XML Signature con algunas limitaciones, como recomendar el no usar Enveloped Signature Transform.";
 choices[45][3] = "WS-Security contempla el uso de XML Signature, sin establecer limitaciones ni extensiones especiales. ";
 answers[45] = choices[45][2];
 units[45] = "111";
 comments[45] = "Id Pregunta: 9781. Examen TIC A2 2013";


//  Id pregunta: 9790 AÃ±o de creación de pregunta: 2014-01-01
 questions[46]= "47)  &iquest;Cu&aacute;l es el objetivo principal perseguido por un keylogger?";
 choices[46]= new Array();
 choices[46][0] = "&quot;Intercepci&oacute;n&quot; y captura de datos.";
 choices[46][1] = "Suplantaci&oacute;n de identidad. ";
 choices[46][2] = "Denegaci&oacute;n de servicio.";
 choices[46][3] = "Manipulaci&oacute;n de un recurso. ";
 answers[46] = choices[46][0];
 units[46] = "111";
 comments[46] = "Id Pregunta: 9790. Examen TIC A2 2013";


//  Id pregunta: 9841 AÃ±o de creación de pregunta: 2014-01-01
 questions[47]= "48)  Infraestructura de PKI. La autoridad de certificaci&oacute;n ra&iacute;z:";
 choices[47]= new Array();
 choices[47][0] = "No utiliza certificados digitales.";
 choices[47][1] = "Utiliza un certificado digital firmado por otra autoridad de certificaci&oacute;n.";
 choices[47][2] = "Utiliza un certifica digital autofirmado por ella misma.";
 choices[47][3] = "Utiliza un certificado digital emitido por la Administraci&oacute;n P&uacute;blica.";
 answers[47] = choices[47][2];
 units[47] = "111";
 comments[47] = "Id Pregunta: 9841. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Arag&oacute;n 2013";


//  Id pregunta: 9843 AÃ±o de creación de pregunta: 2014-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l es el m&eacute;todo que se recomienda para proteger los datos en una WLAN?";
 choices[48]= new Array();
 choices[48][0] = "Utilizar el cifrado.";
 choices[48][1] = "Utilizar el SSID de no difusi&oacute;n.";
 choices[48][2] = "Establecer la energ&iacute;a transmitida al ajuste m&aacute;s s&oacute;lido.";
 choices[48][3] = "Utilizar el canal 7 en lugar de cualquier otro canal en los espectros de 2,4 GHz.";
 answers[48] = choices[48][0];
 units[48] = "111";
 comments[48] = "Id Pregunta: 9843. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Arag&oacute;n 2013";


//  Id pregunta: 9849 AÃ±o de creación de pregunta: 2014-01-01
 questions[49]= "50)  &iquest;Cu&aacute;l de las siguientes afirmaciones acerca de una DMZ (DeMilitarized Zone) o red perimetral pone en riesgo nuestra red interna?";
 choices[49]= new Array();
 choices[49][0] = "Las conexiones desde la red interna o privada a la DMZ est&aacute;n permitidas.";
 choices[49][1] = "Las conexiones desde la red externa o p&uacute;blica a la DMZ est&aacute;n permitidas.";
 choices[49][2] = "Las conexiones desde la DMZ a la red interna o privada est&aacute;n permitidas.";
 choices[49][3] = "Las conexiones desde la DMZ a la red externa o p&uacute;blica est&aacute;n permitidas.";
 answers[49] = choices[49][2];
 units[49] = "111";
 comments[49] = "Id Pregunta: 9849. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Extremadura 2014";


//  Id pregunta: 9855 AÃ±o de creación de pregunta: 2014-01-01
 questions[50]= "51)  En lo que se refiere a las Firmas Digitales, &iquest;cu&aacute;l de las siguientes afirmaciones es falsa? ";
 choices[50]= new Array();
 choices[50][0] = "Si una firma digital es v&aacute;lida para un documento es v&aacute;lida para otro distinto. ";
 choices[50][1] = "S&oacute;lo puede ser generada por su leg&iacute;timo titular.";
 choices[50][2] = "Es p&uacute;blicamente verificable.";
 choices[50][3] = "La forma m&aacute;s extendida de calcular firmas digitales consiste en emplear una combinaci&oacute;n de cifrado asim&eacute;trico y funciones resumen. ";
 answers[50] = choices[50][0];
 units[50] = "111";
 comments[50] = "Id Pregunta: 9855. Examen Gesti&oacute;n de Inform&aacute;tica Universidad de Granada 2012";


//  Id pregunta: 9864 AÃ±o de creación de pregunta: 2014-01-01
 questions[51]= "52)  &iquest;A qu&eacute; tipo de ataque pertenece el denominado ping de la muerte?";
 choices[51]= new Array();
 choices[51][0] = "Spoofing.";
 choices[51][1] = "Man in the middle.";
 choices[51][2] = "Denial of Service.";
 choices[51][3] = "Flooding.";
 answers[51] = choices[51][2];
 units[51] = "111";
 comments[51] = "Id Pregunta: 9864. Examen TIC del Servicio de Salud de Extremadura 2014";


//  Id pregunta: 10057 AÃ±o de creación de pregunta: 2014-01-01
 questions[52]= "53)  El algoritmo SHA-1 (RFC 3174) produce un resumen de salida de:";
 choices[52]= new Array();
 choices[52][0] = "128 bits ";
 choices[52][1] = "160 bits";
 choices[52][2] = "224 bits ";
 choices[52][3] = "256 bits";
 answers[52] = choices[52][1];
 units[52] = "72";
 comments[52] = "Id Pregunta: 10057. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10617 AÃ±o de creación de pregunta: 2015-01-01
 questions[53]= "54)  Se&ntilde;ale aquel que se corresponde con un protocolo de establecimiento de claves entre partes:";
 choices[53]= new Array();
 choices[53][0] = "Diffie Hellman";
 choices[53][1] = "RIPEMD";
 choices[53][2] = "Rabbit";
 choices[53][3] = "Blowfish";
 answers[53] = choices[53][0];
 units[53] = "72";
 comments[53] = "Id Pregunta: 10617. ";


//  Id pregunta: 10899 AÃ±o de creación de pregunta: 2015-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l de los siguientes modos de funcionamiento NO se corresponde con el algoritmo de cifrado DES?";
 choices[54]= new Array();
 choices[54][0] = "Modo ECB (Electronic CodeBook).";
 choices[54][1] = "Modo CBC (Cipher Block Chaining).";
 choices[54][2] = "Modo OFB (Output FeedBack).";
 choices[54][3] = "Modo UBC (Uncipher Block Chaining).";
 answers[54] = choices[54][3];
 units[54] = "73, 74";
 comments[54] = "Id Pregunta: 10899. Examen GSI 2014";


//  Id pregunta: 11051 AÃ±o de creación de pregunta: 2015-01-01
 questions[55]= "56)  &iquest;Qu&eacute; algoritmo genera un Hash de mayor longitud?";
 choices[55]= new Array();
 choices[55][0] = "MD5";
 choices[55][1] = "SHA-1";
 choices[55][2] = "SHA-384";
 choices[55][3] = "WHIRLPOOL";
 answers[55] = choices[55][3];
 units[55] = "72";
 comments[55] = "Id Pregunta: 11051. WHIRLPOOL produce un Hash de 512 bits";


//  Id pregunta: 11259 AÃ±o de creación de pregunta: 2015-01-01
 questions[56]= "57)  Los certificados cualificados de firma electr&oacute;nica contendr&aacute;n:";
 choices[56]= new Array();
 choices[56][0] = "Al menos el nombre del firmante o un seud&oacute;nimo; si se usara un seud&oacute;nimo, se indicar&aacute; claramente.";
 choices[56][1] = "Los datos relativos al inicio y final del per&iacute;odo de validez del certificado.";
 choices[56][2] = "La localizaci&oacute;n de los servicios que pueden utilizarse para consultar el estado de validez del certificado cualificado.";
 choices[56][3] = "Todas son verdaderas.";
 answers[56] = choices[56][3];
 units[56] = "73";
 comments[56] = "Id Pregunta: 11259. ";


//  Id pregunta: 11300 AÃ±o de creación de pregunta: 2015-01-01
 questions[57]= "58)  En relaci&oacute;n con un Prestador de Servicios de Certificaci&oacute;n (PSC) es cierto que";
 choices[57]= new Array();
 choices[57][0] = "Es una persona jur&iacute;dica que expide certificados";
 choices[57][1] = "Es una persona f&iacute;sica o jur&iacute;dica que expide certificados";
 choices[57][2] = "Es una persona f&iacute;sica o jur&iacute;dica que expide certificados u otros servicios relacionados con la firma electr&oacute;nica";
 choices[57][3] = "Es una persona jur&iacute;dica que expide certificados u otros servicios relacionados con la firma electr&oacute;nica";
 answers[57] = choices[57][2];
 units[57] = "74";
 comments[57] = "Id Pregunta: 11300. ";


//  Id pregunta: 11519 AÃ±o de creación de pregunta: 2015-01-01
 questions[58]= "59)  &iquest;Qu&eacute; es FALSO si hablamos de SET?";
 choices[58]= new Array();
 choices[58][0] = "Es una aplicaci&oacute;n distribuida que en particular usa canales virtuales seguros y sirve para pagos con tarjetas de cr&eacute;dito.";
 choices[58][1] = "Es un est&aacute;ndar privado propuesto por Visa-Microsoft, Mastercard-Netscape.";
 choices[58][2] = "Es m&aacute;s sencillo de implementar que SSL, lo que contribuye a su r&aacute;pida y progresiva implantaci&oacute;n en el mercado.";
 choices[58][3] = "Es el acr&oacute;nimo de Secure Electronic Transactions, Transacciones Electr&oacute;nicas Seguras";
 answers[58] = choices[58][2];
 units[58] = "72";
 comments[58] = "Id Pregunta: 11519. NULL";


//  Id pregunta: 11666 AÃ±o de creación de pregunta: 2015-01-01
 questions[59]= "60)  El perfil de XAdES en el que se a&ntilde;aden los certificados a los documentos firmados es:";
 choices[59]= new Array();
 choices[59][0] = "XAdES-A";
 choices[59][1] = "XAdES-C";
 choices[59][2] = "XAdES-X-L";
 choices[59][3] = "XAdES-X";
 answers[59] = choices[59][2];
 units[59] = "111";
 comments[59] = "Id Pregunta: 11666. ";


//  Id pregunta: 11692 AÃ±o de creación de pregunta: 2015-01-01
 questions[60]= "61)  En qu&eacute; consiste el mecanismo de Sobrecarga NAT";
 choices[60]= new Array();
 choices[60][0] = "En la utilizaci&oacute;n de puertos para traducir una direccion interna local en una direccion interna global.";
 choices[60][1] = "En la utilizaci&oacute;n de puertos para traducir direcciones internas locales en una o m&aacute;s direcciones globales internas.";
 choices[60][2] = "Traduce una direccion local interna en una global interna";
 choices[60][3] = "Traduce una direccion local interna en otra direccion local interna";
 answers[60] = choices[60][1];
 units[60] = "111";
 comments[60] = "Id Pregunta: 11692. NULL";


