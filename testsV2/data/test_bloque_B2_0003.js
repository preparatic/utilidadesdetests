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

//  Id pregunta: 694 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  Seg&uacute;n la directiva comunitaria 1999/93/CE de firma electr&oacute;nica, las autoridades de certificaci&oacute;n s&oacute;lo pueden ser:";
 choices[0]= new Array();
 choices[0][0] = "Entidades p&uacute;blicas";
 choices[0][1] = "Personas f&iacute;sicas";
 choices[0][2] = "Personas jur&iacute;dicas";
 choices[0][3] = "Entidades p&uacute;blicas, personas f&iacute;sicas o personas jur&iacute;dicas, dependiendo de la legislaci&oacute;n del pa&iacute;s";
 answers[0] = choices[0][3];
 units[0] = "30";
 comments[0] = "Id Pregunta: 694. Similar a examen TIC SS A 2003";


//  Id pregunta: 716 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  En el lenguaje Java, la misi&oacute;n del recolector de basura (garbage collector) es:";
 choices[1]= new Array();
 choices[1][0] = "Limpiar o eliminar los objetos no usados o referenciados";
 choices[1][1] = "En los que en otros entornos de programcaci&oacute;n se llama depurador o debugger";
 choices[1][2] = "Es parte del estandar JDBC para acceder a tablas de bases de datos";
 choices[1][3] = "Java no dispone de tal mecanismo &quot;garbage collector&quot;";
 answers[1] = choices[1][0];
 units[1] = "60";
 comments[1] = "Id Pregunta: 716. Examen TIC MAP B 2004";


//  Id pregunta: 747 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  La criptograf&iacute;a sirve para codificar:";
 choices[2]= new Array();
 choices[2][0] = "Lenguaje manuscrito";
 choices[2][1] = "Lenguaje manuscrito y datos";
 choices[2][2] = "Datos exclusivamente, al no poder aplicar t&eacute;cnicas inform&aacute;ticas al lenguaje manuscrito.";
 choices[2][3] = "La criptograf&iacute;a no se usa para codificar, sino s&oacute;lo para decodificar";
 answers[2] = choices[2][1];
 units[2] = "72";
 comments[2] = "Id Pregunta: 747. Similar a examen TIC SS A 2003";


//  Id pregunta: 778 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  En Unix o compatibles, la parte del sistema operativo que interactua con el usuario, aceptando comandos, interpretando los procedimientos, etc, se denomina gen&eacute;ricamente:";
 choices[3]= new Array();
 choices[3][0] = "Kernel";
 choices[3][1] = "Interfaz de usuario";
 choices[3][2] = "Shell";
 choices[3][3] = "Motif";
 answers[3] = choices[3][2];
 units[3] = "53";
 comments[3] = "Id Pregunta: 778. ";


//  Id pregunta: 809 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  Acerca de la memoria virtual, &iquest;cu&aacute;l de las siguientes afirmaciones es verdadera?:";
 choices[4]= new Array();
 choices[4][0] = "Se distingue el mapa de direcciones l&oacute;gicas o virtual y el mapa de direcciones f&iacute;sicas o reales. Las direcciones f&iacute;sicas y l&oacute;gicas son del mismo tama&ntilde;o";
 choices[4][1] = "Con paginaci&oacute;n se resuelven todos los problemas de fragmentaci&oacute;n de memoria";
 choices[4][2] = "Obliga a tener en memoria principal todo el contenido del programa durante la ejecuci&oacute;n";
 choices[4][3] = "Con memoria segmentada se complica la traducci&oacute;n de direcciones";
 answers[4] = choices[4][3];
 units[4] = "47";
 comments[4] = "Id Pregunta: 809. ";


//  Id pregunta: 853 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;Cu&aacute;l de las siguientes no representan una caracter&iacute;stica de Unix?:";
 choices[5]= new Array();
 choices[5][0] = "Multiusuario y multitarea";
 choices[5][1] = "Sistema jer&aacute;rquico de ficheros";
 choices[5][2] = "Comando de int&eacute;rpretes flexible";
 choices[5][3] = "Portable s&oacute;lo en ordenadores de m&aacute;s de 32 bits";
 answers[5] = choices[5][3];
 units[5] = "52, 53";
 comments[5] = "Id Pregunta: 853. ";


//  Id pregunta: 928 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Qu&eacute; es la WFMC?";
 choices[6]= new Array();
 choices[6][0] = "Una organizaci&oacute;n para promover la investigaci&oacute;n en el campo de la microelectr&oacute;nica y los computadores";
 choices[6][1] = "Un c&oacute;mite de gesti&oacute;n de las distintas organizaciones mundiales existentes en torno al web";
 choices[6][2] = "Un consorcio para coordinar los distintos forums organizados en torno a la tecnolog&iacute;a multimedia emergente";
 choices[6][3] = "Una organizaci&oacute;n cuya misi&oacute;n es promover el uso del workflow";
 answers[6] = choices[6][3];
 units[6] = "71";
 comments[6] = "Id Pregunta: 928. ";


//  Id pregunta: 934 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Qu&eacute; es VMS?:";
 choices[7]= new Array();
 choices[7][0] = "Un sistema de almacenamiento de voz, fax o datos cuando el usuario no puede atender dichas llamadas (buz&oacute;n)";
 choices[7][1] = "Un sistema operativo tipo Unix originalmente desarrollado por DEC para sus m&aacute;quinas VAX";
 choices[7][2] = "Las 2 respuestas anteriores son correctas";
 choices[7][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[7] = choices[7][2];
 units[7] = "52";
 comments[7] = "Id Pregunta: 934. ";


//  Id pregunta: 960 AÃ±o de creación de pregunta: 2005-01-01
 questions[8]= "9)  Con respecto a X.500 y LDAP, indicar la respuesta incorrecta:";
 choices[8]= new Array();
 choices[8][0] = "X.500 utiliza ASN.1 para la formaci&oacute;n de los mensajes, y LDAP utiliza cadenas de caracteres simples para la representaci&oacute;n de Distinguished Names ";
 choices[8][1] = "LDAP no posee el servicio de modificaci&oacute;n REMOVE perteneciente a DAP";
 choices[8][2] = "X.500 y LDAP funcionan sobre la pila de protocolos OSI y TCP/IP respectivamente";
 choices[8][3] = "Un dominio de gesti&oacute;n de directorio est&aacute; formado, como m&iacute;nimo, por: 1 DSA, 1 DUA y 1 esquema (visi&oacute;n externa del dominio)";
 answers[8] = choices[8][3];
 units[8] = "73";
 comments[8] = "Id Pregunta: 960. ";


//  Id pregunta: 1003 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  El CLR de Microsoft.net es:";
 choices[9]= new Array();
 choices[9][0] = "Una librer&iacute;a para acceso a base de datos heterogeneas, empleando ADO.NET";
 choices[9][1] = "El encargado de compilar a un CIL (Common Intermediate Language)";
 choices[9][2] = "Una nueva estrategia de Microsoft, que defiende &quot;cero fallos&quot; en sus pr&oacute;ximos desarrollos software";
 choices[9][3] = "El mecanismo que se utiliza para enviar las peticiones SOAP a los servidores de aplicaciones remotos";
 answers[9] = choices[9][1];
 units[9] = "59";
 comments[9] = "Id Pregunta: 1003. ";


//  Id pregunta: 1016 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  El ganador del concurso p&uacute;blico para reemplazar al algoritmo DES es:";
 choices[10]= new Array();
 choices[10][0] = "RC6";
 choices[10][1] = "Twofish";
 choices[10][2] = "Serpent";
 choices[10][3] = "Rijndael";
 answers[10] = choices[10][3];
 units[10] = "72";
 comments[10] = "Id Pregunta: 1016. ";


//  Id pregunta: 1044 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  El primer boceto de la arquitectura de un ordenador fue propuesto por:";
 choices[11]= new Array();
 choices[11][0] = "Clive Sinclair";
 choices[11][1] = "John Von Neumann";
 choices[11][2] = "Edsger Dijkstra";
 choices[11][3] = "Steve Jobs";
 answers[11] = choices[11][1];
 units[11] = "47";
 comments[11] = "Id Pregunta: 1044. ";


//  Id pregunta: 1047 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  El protocolo de acceso al directorio en X.500 es:";
 choices[12]= new Array();
 choices[12][0] = "TCP/IP";
 choices[12][1] = "LDAP";
 choices[12][2] = "IMAP";
 choices[12][3] = "DAP";
 answers[12] = choices[12][3];
 units[12] = "73";
 comments[12] = "Id Pregunta: 1047. ";


//  Id pregunta: 1106 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  En la estructura del sistema operativo Unix:";
 choices[13]= new Array();
 choices[13][0] = "Una de las funciones del kernel o n&uacute;cleo es la de gestionar el sistema de archivos";
 choices[13][1] = "El tratamiento de cualquier dispositivo perif&eacute;rico como un archivo";
 choices[13][2] = "La shell muestra la interfaz entre el Unix y el usuario, incorpora una serie de utilidades para realizar las tareas solicitadas por el usuario";
 choices[13][3] = "Dentro del kernel existen dos subsistemas: la interfaz de llamadas al sistema, y el planificador (scheduler)";
 answers[13] = choices[13][1];
 units[13] = "53";
 comments[13] = "Id Pregunta: 1106. ";


//  Id pregunta: 1170 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  GNU:";
 choices[14]= new Array();
 choices[14][0] = "Es un acr&oacute;nimo de 'GNU is Not Unix'";
 choices[14][1] = "Fue fundado en 1984 por Richard M. Stallman para crear un sistema operativo Unix completo, basado en software libre.";
 choices[14][2] = "Es el autor de las licencias de software libre GPL y LGPL";
 choices[14][3] = "Todas son ciertas";
 answers[14] = choices[14][3];
 units[14] = "53";
 comments[14] = "Id Pregunta: 1170. ";


//  Id pregunta: 1232 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  La memoria virtual:";
 choices[15]= new Array();
 choices[15][0] = "Tambi&eacute;n se denomina antememoria o memoria cach&eacute;";
 choices[15][1] = "Es una memoria de s&oacute;lo lectura";
 choices[15][2] = "Obliga a diferenciar entre el mapa de direcciones l&oacute;gicas y el de direcciones f&iacute;sicas";
 choices[15][3] = " Se organiza, siguiendo la t&eacute;cnica 'pipe-line', en un conjunto de elementos, llamados segmentos,que forman una unidad l&oacute;gica desde el punto de vista del software";
 answers[15] = choices[15][2];
 units[15] = "52";
 comments[15] = "Id Pregunta: 1232. ";


//  Id pregunta: 1250 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  La ventaja fundamental de las memorias cache es:";
 choices[16]= new Array();
 choices[16][0] = "Su alta velocidad";
 choices[16][1] = "Su seguridad";
 choices[16][2] = "La ampliaci&oacute;n de memoria principal que generan";
 choices[16][3] = "Su gran capacidad de direccionamiento";
 answers[16] = choices[16][0];
 units[16] = "47";
 comments[16] = "Id Pregunta: 1250. ";


//  Id pregunta: 1253 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Las aplicaciones cliente/servidor suelen clasificarse en:";
 choices[17]= new Array();
 choices[17][0] = "Aplicaciones de presentaci&oacute;n, de negocio o de gesti&oacute;n de datos";
 choices[17][1] = "Aplicaciones distribuidas o centralizadas";
 choices[17][2] = "Aplicaciones middleware y OLTP";
 choices[17][3] = "Aplicaciones de dos niveles y aplicaciones de tres niveles";
 answers[17] = choices[17][3];
 units[17] = "50";
 comments[17] = "Id Pregunta: 1253. ";


//  Id pregunta: 1304 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Para trabajar con una vista que contenga tuplas de varias tablas se utilizar&aacute; la sentencia SQL:";
 choices[18]= new Array();
 choices[18][0] = "CREATE TABLE";
 choices[18][1] = "CREATE VIEW";
 choices[18][2] = "ALTER TABLE";
 choices[18][3] = "ALTER VIEW";
 answers[18] = choices[18][1];
 units[18] = "58";
 comments[18] = "Id Pregunta: 1304. ";


//  Id pregunta: 1306 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  Peque&ntilde;as aplicaciones que pueden formar parte de la p&aacute;gina Web, y que pueden viajar a trav&eacute;s de Intenet para ejecutarse en el ordenador que las reciba se denominan:";
 choices[19]= new Array();
 choices[19][0] = "Controles Java";
 choices[19][1] = "Applets";
 choices[19][2] = "Servlets";
 choices[19][3] = "Aplicaciones CGI";
 answers[19] = choices[19][1];
 units[19] = "60";
 comments[19] = "Id Pregunta: 1306. NULL";


//  Id pregunta: 1329 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Se dice que el conocimiento, independientemente del paradigma de representaci&oacute;n utilizado, tiene una doble componente:";
 choices[20]= new Array();
 choices[20][0] = "Los hechos constatables y los mecanismos de inferencia";
 choices[20][1] = "Los procedimientos y los mecanismos de deducci&oacute;n";
 choices[20][2] = "Los objetos y las relaciones entre los mismos";
 choices[20][3] = "El componente simb&oacute;lico y el componente procedimental";
 answers[20] = choices[20][0];
 units[20] = "64";
 comments[20] = "Id Pregunta: 1329. ";


//  Id pregunta: 1333 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  Se puede acceder directamente a la memoria principal del ordenador por varios m&eacute;todos. Entre ellos se encuentra:";
 choices[21]= new Array();
 choices[21][0] = "Bus multiplexado";
 choices[21][1] = "Robo de ciclo";
 choices[21][2] = "Memoria segmentada";
 choices[21][3] = "Accesos aleatorios";
 answers[21] = choices[21][1];
 units[21] = "52";
 comments[21] = "Id Pregunta: 1333. ";


//  Id pregunta: 1347 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Se&ntilde;ale la respuesta correcta. El software de base comprende:";
 choices[22]= new Array();
 choices[22][0] = "El sistema operativo, el sistema de gesti&oacute;n de datos , el software de comunicaciones y las utilidades";
 choices[22][1] = "El sistema operativo,  el software de comunicaciones y las utilidades";
 choices[22][2] = "El sistema operativo, el sistema de gesti&oacute;n de datos  y las utilidades";
 choices[22][3] = "El sistema operativo y las utilidades";
 answers[22] = choices[22][0];
 units[22] = "55";
 comments[22] = "Id Pregunta: 1347. ";


//  Id pregunta: 1372 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Sobre el uso que hacen XML y HTML de etiquetas y atributos:";
 choices[23]= new Array();
 choices[23][0] = "HTML y XML especifican lo que significa cada etiqueta y atributo";
 choices[23][1] = "XML usa las etiquetas s&oacute;lo para delimitar segmentos de datos y deja la interpretaci&oacute;n de los datos a la aplicaci&oacute;n que los lee";
 choices[23][2] = "Ninguna de las respuestas anteriores es correcta";
 choices[23][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son correctas";
 answers[23] = choices[23][1];
 units[23] = "69";
 comments[23] = "Id Pregunta: 1372. NULL";


//  Id pregunta: 1381 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Un conjunto de instrucciones dedicadas a la ejecuci&oacute;n de una tarea espec&iacute;fica sobre una base de datos en tiempo real recibe el nombre de:";
 choices[24]= new Array();
 choices[24][0] = "M&oacute;dulo";
 choices[24][1] = "M&oacute;dulo reentrante";
 choices[24][2] = "Transacci&oacute;n";
 choices[24][3] = "Actualizaci&oacute;n";
 answers[24] = choices[24][2];
 units[24] = "56,57";
 comments[24] = "Id Pregunta: 1381. ";


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


//  Id pregunta: 1424 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  Una relaci&oacute;n se dice que est&aacute; en tercera forma normal (3FN) de Boyce y Codd si:";
 choices[26]= new Array();
 choices[26][0] = "Est&aacute; en primera forma normal y adem&aacute;s cualquiera de sus atributos no primarios tienen una dependencia plena con cada una de las claves";
 choices[26][1] = "No contiene dependendencias multievaluadas";
 choices[26][2] = "Ninguno de sus atributos no primarios tiene dependencias transitivas respecto de las claves";
 choices[26][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[26] = choices[26][3];
 units[26] = "58";
 comments[26] = "Id Pregunta: 1424. ";


//  Id pregunta: 1428 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  Uno de los conectores mas utilizados en inform&aacute;tica es el conector RJ45. &iquest;Cu&aacute;ntos contactos tiene?:";
 choices[27]= new Array();
 choices[27][0] = "4";
 choices[27][1] = "6";
 choices[27][2] = "8";
 choices[27][3] = "15";
 answers[27] = choices[27][2];
 units[27] = "47";
 comments[27] = "Id Pregunta: 1428. ";


//  Id pregunta: 1506 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  Los servicios que ofrece  el protocolo SET (Secure Electronico Transaction) son:";
 choices[28]= new Array();
 choices[28][0] = "Autenticaci&oacute;n, disponibilidad, integridad y gesti&oacute;n de pago";
 choices[28][1] = "Autenticaci&oacute;n, confidencialidad, integridad y gesti&oacute;n de pago";
 choices[28][2] = "Disponibilidad, confidencialidad, autenticaci&oacute;n y gesti&oacute;n de pago";
 choices[28][3] = "Autenticaci&oacute;n, integridad, disponibilidad y confidencialidad";
 answers[28] = choices[28][1];
 units[28] = "70";
 comments[28] = "Id Pregunta: 1506. NULL";


//  Id pregunta: 1581 AÃ±o de creación de pregunta: 2004-01-01
 questions[29]= "30)  El algoritmo de cifrado Rijndael";
 choices[29]= new Array();
 choices[29][0] = "Compite con AES por ser el est&aacute;ndar de criptograf&iacute;a dominante";
 choices[29][1] = "Es un algoritmo de clave p&uacute;blica";
 choices[29][2] = "Es un desarrollo propietario de IBM";
 choices[29][3] = "Se basa en la teor&iacute;a de campos de Galois";
 answers[29] = choices[29][3];
 units[29] = "72";
 comments[29] = "Id Pregunta: 1581. Tanenbaum";


//  Id pregunta: 1589 AÃ±o de creación de pregunta: 2003-01-01
 questions[30]= "31)  En el sistema operativo UNIX los estados en los que puede estar un proceso :";
 choices[30]= new Array();
 choices[30][0] = "Son dos,   donde el proceso 0 corresponde al proceso intercambiador";
 choices[30][1] = "Son 8, donde el proceso 0 se denimina init, y es el antecesor de todos los procesos";
 choices[30][2] = "Son 9, entre los que se encuentran los procesos ejecuci&oacute;n en modo de usuario y ejecuci&oacute;n en modo n&uacute;cleo";
 choices[30][3] = "Son 8, entre ellos el proceso cerrado o nonato que significa que est&aacute; aguardando un suceso y tiene que intercambiarse desde la memoria secundaria";
 answers[30] = choices[30][2];
 units[30] = "53";
 comments[30] = "Id Pregunta: 1589. ";


//  Id pregunta: 1614 AÃ±o de creación de pregunta: 2003-01-01
 questions[31]= "32)  Las l&iacute;neas de un bus se pueden clasificar en grupos funcionales de:";
 choices[31]= new Array();
 choices[31][0] = "L&iacute;neas de direcci&oacute;n y de control.";
 choices[31][1] = "L&iacute;neas de entrada y salida.";
 choices[31][2] = "L&iacute;neas de datos, l&iacute;neas de direcci&oacute;n y l&iacute;neas de control.";
 choices[31][3] = "L&iacute;neas de control de operaci&oacute;n y de salida.";
 answers[31] = choices[31][2];
 units[31] = "47";
 comments[31] = "Id Pregunta: 1614. Junta Andaluc&iacute;a";


//  Id pregunta: 1647 AÃ±o de creación de pregunta: 2004-01-01
 questions[32]= "33)  &iquest;Cu&aacute;l de los siguientes son subsistemas usuales en un sistema de e-learning?";
 choices[32]= new Array();
 choices[32][0] = "LCMS (Learning Content Management System)";
 choices[32][1] = "LOMS (Learning Objects Management System)";
 choices[32][2] = "CRM (Customer Relationship Management)";
 choices[32][3] = "Todos los anteriores";
 answers[32] = choices[32][0];
 units[32] = "66";
 comments[32] = "Id Pregunta: 1647. ";


//  Id pregunta: 1676 AÃ±o de creación de pregunta: 2004-01-01
 questions[33]= "34)  Indique la afirmaci&oacute;n correcta";
 choices[33]= new Array();
 choices[33][0] = "Una relaci&oacute;n est&aacute; en 4&ordf;FN si no incluye dependencias combinacionales";
 choices[33][1] = "Una relaci&oacute;n est&aacute; en 2&ordf;FN si no incluye grupos repetitivos y sus atributos no primarios tienen una dependencia plena respecto a cada una de las claves y no con partes de estas";
 choices[33][2] = "Una relaci&oacute;n est&aacute; en 1&ordf;FN si incluye alg&uacute;n grupo repetitivo";
 choices[33][3] = "Una relaci&oacute;n est&aacute; en 3&ordf;FN si y solo si est&aacute; en 1&ordf;FN pero no en 2&ordf;FN";
 answers[33] = choices[33][1];
 units[33] = "58";
 comments[33] = "Id Pregunta: 1676. ";


//  Id pregunta: 1678 AÃ±o de creación de pregunta: 2004-01-01
 questions[34]= "35)  Indique la afirmaci&oacute;n verdadera respecta a ADO.NET";
 choices[34]= new Array();
 choices[34][0] = "Utiliza el objeto DATASET, estructura relacional que puede ser le&iacute;da, escrita y serializada usando XML";
 choices[34][1] = "Potencia el acceso a datos desconectados usando XML";
 choices[34][2] = "El DATASET de ADO.NET accede a los datos con independencia de la fuente de datos que lo aprovisiona";
 choices[34][3] = "Todas son ciertas";
 answers[34] = choices[34][3];
 units[34] = "59";
 comments[34] = "Id Pregunta: 1678. ";


//  Id pregunta: 1701 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  Cuando se utilizan t&eacute;cnicas de implementaci&oacute;n de elementos de procesamiento basadas enpipelining se dice que:";
 choices[35]= new Array();
 choices[35][0] = "El paralelismo sucede a nivel de procesador.";
 choices[35][1] = "El paralelismo sucede a nivel de multiprocesador.";
 choices[35][2] = "El paralelismo sucede a nivel de multicomputador.";
 choices[35][3] = "Ninguna de las anteriores.";
 answers[35] = choices[35][0];
 units[35] = "46";
 comments[35] = "Id Pregunta: 1701. ";


//  Id pregunta: 1780 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  Se&ntilde;ale cual de estos entornos de desarrollo en Java no es gratuito";
 choices[36]= new Array();
 choices[36][0] = "Jdeveloper";
 choices[36][1] = "Eclipse";
 choices[36][2] = "JBuilder";
 choices[36][3] = "NetBeans";
 answers[36] = choices[36][2];
 units[36] = "60";
 comments[36] = "Id Pregunta: 1780. NULL";


//  Id pregunta: 1834 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  El formato PDF/A";
 choices[37]= new Array();
 choices[37][0] = "Es la &uacute;ltima versi&oacute;n que ha publicado Adobe de su formato PDF";
 choices[37][1] = "Es una versi&oacute;n estandarizada por ISO para el almacenamiento de archivos a largo plazo";
 choices[37][2] = "Es una versi&oacute;n de PDF que se ha publicado bajo una licencia CC";
 choices[37][3] = "Es la primera versi&oacute;n PDF que public&oacute; Adobe y la m&aacute;s extendida";
 answers[37] = choices[37][1];
 units[37] = "93";
 comments[37] = "Id Pregunta: 1834. NULL";


//  Id pregunta: 1871 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  &iquest;Qu&eacute; norma se utiliza para la certificaci&oacute;n de dispositivos seguros de creaci&oacute;n de firma?";
 choices[38]= new Array();
 choices[38][0] = "ISO 17799";
 choices[38][1] = "CWA 14169";
 choices[38][2] = "UNE 71502";
 choices[38][3] = "EIA 568 B2";
 answers[38] = choices[38][1];
 units[38] = "30";
 comments[38] = "Id Pregunta: 1871. Decisi&oacute;n de la Comisi&oacute;n de 14 de julio de 2003, Anexo B";


//  Id pregunta: 1899 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  En un centro de llamadas, gestionar las necesidades del usuario la primera vez que llama, evitando la necesidad de una segunda llamada";
 choices[39]= new Array();
 choices[39][0] = "Soporte electr&oacute;nico";
 choices[39][1] = "Solicitud autom&aacute;tica de repetici&oacute;n (ARQ)";
 choices[39][2] = "Calidad de servicio";
 choices[39][3] = "Resoluci&oacute;n de primera llamada";
 answers[39] = choices[39][3];
 units[39] = "26";
 comments[39] = "Id Pregunta: 1899. ";


//  Id pregunta: 1914 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  El entorno de escritorio KDE:";
 choices[40]= new Array();
 choices[40][0] = "Utiliza como gestor de ventanas uno propio";
 choices[40][1] = "No posee gestor de ventanas propio";
 choices[40][2] = "Define sus interfaces mediante tecnolog&iacute;a CORBA";
 choices[40][3] = "No proporciona diferentes configuraciones para distintos idiomas";
 answers[40] = choices[40][0];
 units[40] = "54";
 comments[40] = "Id Pregunta: 1914. KDE Windows Manager es el gestor de ventanas propio de KDE";


//  Id pregunta: 4236 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  &iquest;Cu&aacute;l es el nombre del paquete open source Java que se utiliza para la generaci&oacute;n de informes?";
 choices[41]= new Array();
 choices[41][0] = "iReport";
 choices[41][1] = "SaintReport";
 choices[41][2] = "JasperReports";
 choices[41][3] = "xStream";
 answers[41] = choices[41][2];
 units[41] = "60.116";
 comments[41] = "Id Pregunta: 4236. NULL";


//  Id pregunta: 4245 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  &iquest;Para que sirve XPath (XML Path language)?";
 choices[42]= new Array();
 choices[42][0] = "Para identificar(y seleccionar)elementos de un documento XML.";
 choices[42][1] = "Para gestionar claves en XML";
 choices[42][2] = "Para hacer consultas en documentos XML";
 choices[42][3] = "Para definir documentos XML";
 answers[42] = choices[42][0];
 units[42] = "69";
 comments[42] = "Id Pregunta: 4245. NULL";


//  Id pregunta: 4278 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  Qu&eacute; son las restricciones de integridad?";
 choices[43]= new Array();
 choices[43][0] = "Son condiciones sobre el almacenamiento f&iacute;sico de los datos de la base de datos.";
 choices[43][1] = "Son condiciones que deben cumplir los datos almacenados en la base de datos relacional.";
 choices[43][2] = "Son las restricciones que el sistema de gesti&oacute;n de base de datos impone a los ficheros de la base de datos.";
 choices[43][3] = "Son una serie de caracter&iacute;sticas que deben cumplir las transacciones.";
 answers[43] = choices[43][1];
 units[43] = "58";
 comments[43] = "Id Pregunta: 4278. ";


//  Id pregunta: 4367 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  &iquest;Cu&aacute;l de los siguientes no es un objetivo de la tecnolog&iacute;a de procesadores NUMA (No Uniform Memory Access)?";
 choices[44]= new Array();
 choices[44][0] = "Acceso a m&uacute;ltiples memorias de forma equivalente.";
 choices[44][1] = "Facilidad de programaci&oacute;n.";
 choices[44][2] = "Escalabilidad.";
 choices[44][3] = "Procesamiento paralelo.";
 answers[44] = choices[44][0];
 units[44] = "45";
 comments[44] = "Id Pregunta: 4367. ";


//  Id pregunta: 4386 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  En el entorno .NET se han desarrollado una serie de lenguajes de programaci&oacute;n para que sean compatibles con el marco de trabajo .NET. &iquest;Cu&aacute;l de los siguientes no es uno de esos lenguajes?";
 choices[45]= new Array();
 choices[45][0] = "Java";
 choices[45][1] = "C#";
 choices[45][2] = "Visual Basic";
 choices[45][3] = "C++";
 answers[45] = choices[45][0];
 units[45] = "59";
 comments[45] = "Id Pregunta: 4386. ";


//  Id pregunta: 4424 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  Indique la respuesta correcta en relaci&oacute;n con el Real Decreto 209/2003, de 21 de febrero, por el que se regula los registros y las notificaciones telem&aacute;ticas, as&iacute; como la utilizaci&oacute;n de medios telem&aacute;ticos para la sustituci&oacute;n de la aportaci&oacute;n de certificados por los ciudadanos:";
 choices[46]= new Array();
 choices[46][0] = "Los registros telem&aacute;ticos realizar&aacute;n y anotar&aacute;n salidas de escritos y comunicaciones durante las 24 horas de todos los d&iacute;as del a&ntilde;o.";
 choices[46][1] = "La presentaci&oacute;n obligatoria de solicitudes por medios telem&aacute;ticos requiere que as&iacute; lo disponga el Gobierno mediante Real Decreto.";
 choices[46][2] = "La creaci&oacute;n de registros telem&aacute;ticos se efect&uacute;a mediante orden ministerial, que deber&aacute; ser publicada, en todo caso, en el BOE.";
 choices[46][3] = "Los registros telem&aacute;ticos pueden realizar funciones de expedici&oacute;n de copias selladas o compulsadas de los documentos que se tramiten junto con la solicitud.";
 answers[46] = choices[46][2];
 units[46] = "30";
 comments[46] = "Id Pregunta: 4424. ";


//  Id pregunta: 4618 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  En UNIX SVR4 para ejecutar una instrucci&oacute;n en segundo plano, escribimos Ia instrucci&oacute;n, un espacio en blanco y a continuaci&oacute;n el s&iacute;mbolo:";
 choices[47]= new Array();
 choices[47][0] = "!";
 choices[47][1] = "&amp;";
 choices[47][2] = "#";
 choices[47][3] = "@";
 answers[47] = choices[47][1];
 units[47] = "53";
 comments[47] = "Id Pregunta: 4618. ";


//  Id pregunta: 4885 AÃ±o de creación de pregunta: 2007-01-01
 questions[48]= "49)  En el establecimiento de una comunicaci&oacute;n mediante SSL (Secure Sockets Layer), &iquest;cu&aacute;l es el protocolo queespecifica la forma de encapsular los datos que se van a intercambiar?";
 choices[48]= new Array();
 choices[48][0] = "SSL Handshake";
 choices[48][1] = "SSL Record";
 choices[48][2] = "Cipher Secure Layer";
 choices[48][3] = "Secure Stocker Layer";
 answers[48] = choices[48][1];
 units[48] = "73";
 comments[48] = "Id Pregunta: 4885. ";


//  Id pregunta: 4922 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  Sea el array [10, 3, 15, 2, 1, 18]. &iquest;Cu&aacute;ntas iteraciones deber&aacute; ejecutarse del algoritmo de ordenaci&oacute;n porselecci&oacute;n para que quede totalmente ordenado en sentido ascendente?:";
 choices[49]= new Array();
 choices[49][0] = "2.";
 choices[49][1] = "4.";
 choices[49][2] = "6.";
 choices[49][3] = "8.";
 answers[49] = choices[49][1];
 units[49] = "";
 comments[49] = "Id Pregunta: 4922. Examen TIC B 2007";


//  Id pregunta: 4983 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  Los certificados electr&oacute;nicos reconocidos incorporados al Documento Nacional de Identidad tendr&aacute;n, deacuerdo con el Real Decreto 1553/2005, de 23 de diciembre, por la que se regula la expedici&oacute;n del DNI y suscertificados de firma electr&oacute;nica, un periodo de vigencia de:";
 choices[50]= new Array();
 choices[50][0] = "4 a&ntilde;os.";
 choices[50][1] = "24 meses.";
 choices[50][2] = "3 a&ntilde;os.";
 choices[50][3] = "30 meses.";
 answers[50] = choices[50][3];
 units[50] = "30";
 comments[50] = "Id Pregunta: 4983. Examen TIC B 2007 (RD 1553/2005, art&iacute;culo 12)";


//  Id pregunta: 5088 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  Un servicio de directorio electr&oacute;nico NO se caracteriza por ";
 choices[51]= new Array();
 choices[51][0] = "ser flexible";
 choices[51][1] = "Aceptar cierta inconsistencia temporal de la informaci&oacute;n en su replicaci&oacute;n";
 choices[51][2] = "Ser est&aacute;tico";
 choices[51][3] = "Poder ser consultado y actualizado en l&iacute;nea";
 answers[51] = choices[51][2];
 units[51] = "73";
 comments[51] = "Id Pregunta: 5088. ";


//  Id pregunta: 5132 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  Seg&uacute;n la normativa de firma electr&oacute;nica de firma electr&oacute;nica, el per&iacute;odo de validez de los certificados reconocidos no podr&aacute; ser superior a:";
 choices[52]= new Array();
 choices[52][0] = "Un a&ntilde;o";
 choices[52][1] = "Dos a&ntilde;os";
 choices[52][2] = "Tres a&ntilde;os";
 choices[52][3] = "Cinco a&ntilde;os";
 answers[52] = choices[52][3];
 units[52] = "30";
 comments[52] = "Id Pregunta: 5132. Examen TIC A Castilla La Mancha 2007. Modificada seg&uacute;n Ley 9/2014";


//  Id pregunta: 5616 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  En UNIX, los procesos que se ejecutan en background se llaman:";
 choices[53]= new Array();
 choices[53][0] = "DAEMONS";
 choices[53][1] = "SOCKETS";
 choices[53][2] = "BACKGROUND PROCESS";
 choices[53][3] = "En UNIX no se ejecutan procesos en background ya que es un sistema operativo multiusuario";
 answers[53] = choices[53][0];
 units[53] = "53";
 comments[53] = "Id Pregunta: 5616. ";


//  Id pregunta: 5620 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  En UNIX, al primer proceso que se ejecuta (process 0) se le llama:";
 choices[54]= new Array();
 choices[54][0] = "Kernel";
 choices[54][1] = "Swapper";
 choices[54][2] = "Shell";
 choices[54][3] = "Page daemon";
 answers[54] = choices[54][1];
 units[54] = "53";
 comments[54] = "Id Pregunta: 5620. ";


//  Id pregunta: 5699 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  Se&ntilde;ale cual de las siguientes medidas de seguridad del DNI electr&oacute;nico es falsa:";
 choices[55]= new Array();
 choices[55][0] = "Tintas visibles con luz ultravioleta para evitar su falsificaci&oacute;n";
 choices[55][1] = " Chip RFID";
 choices[55][2] = "Encriptaci&oacute;n de los datos del chip";
 choices[55][3] = "Acceso a la funcionalidad del DNI electr&oacute;nico mediante clave personal de acceso (PIN)";
 answers[55] = choices[55][1];
 units[55] = "74";
 comments[55] = "Id Pregunta: 5699. NULL";


//  Id pregunta: 5719 AÃ±o de creación de pregunta: 2009-01-01
 questions[56]= "57)  &iquest;En cu&aacute;l de los siguientes archivos de un sistema GNU/Linux se encuentra la asignaci&oacute;n entre particiones de disco duro y directorios donde son montadas?";
 choices[56]= new Array();
 choices[56][0] = "mountd.conf";
 choices[56][1] = "fstab";
 choices[56][2] = "filesystems";
 choices[56][3] = ".mnt-conf";
 answers[56] = choices[56][1];
 units[56] = "54";
 comments[56] = "Id Pregunta: 5719. ";


//  Id pregunta: 6056 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  La norma ISO/IEC 15408 Evaluation Criteria for IT Security (informalmente conocida como Common Criteria):";
 choices[57]= new Array();
 choices[57][0] = "Establece una escala creciente de confianza en la seguridad del producto evaluado, que va desde el Evaluation Assurement Level (EAL) 0 al EAL 7.";
 choices[57][1] = "Establece perfiles de protecci&oacute;n, que deben ser elaborados por ISO/IEC.";
 choices[57][2] = "Permite certificar sistemas, productos y algoritmos criptogr&aacute;ficos.";
 choices[57][3] = "Figura como criterio de evaluaci&oacute;n en la Orden PRE/2740/2007 por la que se aprueba el Reglamento de evaluaci&oacute;n y certificaci&oacute;n de la seguridad de las TI.";
 answers[57] = choices[57][3];
 units[57] = "74";
 comments[57] = "Id Pregunta: 6056. TIC A 2009";


//  Id pregunta: 6082 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  Cu&aacute;l de los siguientes NO es un principio arquitect&oacute;nico b&aacute;sico intr&iacute;nsicamente aplicable a arquitecturas SOA:";
 choices[58]= new Array();
 choices[58][0] = "Encapsulaci&oacute;n";
 choices[58][1] = "D&eacute;bil acoplamiento";
 choices[58][2] = "Composici&oacute;n";
 choices[58][3] = "Polimorfismo";
 answers[58] = choices[58][3];
 units[58] = "51";
 comments[58] = "Id Pregunta: 6082. NULL";


//  Id pregunta: 6113 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones sobre &quot;grid computing&quot; es FALSA:";
 choices[59]= new Array();
 choices[59][0] = "La escalabilidad parametrizable es una caracter&iacute;stica muy importante de esta arquitectura.";
 choices[59][1] = "Son sistemas homog&eacute;neos.";
 choices[59][2] = "Los nodos no tienen que estar dedicados.";
 choices[59][3] = "Se puede conseguir cerca de un 100 % de utilizaci&oacute;n de la CPU.";
 answers[59] = choices[59][1];
 units[59] = "45";
 comments[59] = "Id Pregunta: 6113. TIC A 2009";


//  Id pregunta: 6207 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  &iquest;Cu&aacute;l de los siguientes no es un servidor de aplicaciones J2EE?";
 choices[60]= new Array();
 choices[60][0] = "WebLogic";
 choices[60][1] = "WebSphere";
 choices[60][2] = "Apache Tomcat";
 choices[60][3] = "Jboss";
 answers[60] = choices[60][2];
 units[60] = "60";
 comments[60] = "Id Pregunta: 6207. TICB-2009, bloque desarrollo";


//  Id pregunta: 6220 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  Qu&eacute; subproyecto de 'Apache' basado en servlets permite a los desarrolladores crear r&aacute;pidamente aplicaciones web y permite personalizar el uso de sitios web y restringir el acceso a partes de la aplicaci&oacute;n";
 choices[61]= new Array();
 choices[61][0] = "Watchdog";
 choices[61][1] = "Turbine";
 choices[61][2] = "Lucene";
 choices[61][3] = "Avalon";
 answers[61] = choices[61][1];
 units[61] = "60";
 comments[61] = "Id Pregunta: 6220. TICB-2009, bloque desarrollo";


//  Id pregunta: 6240 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  &iquest;Cu&aacute;l de las siguientes es una propiedad del modelo conceptual?";
 choices[62]= new Array();
 choices[62][0] = "Complejo";
 choices[62][1] = "M&aacute;ximo";
 choices[62][2] = "Expl&iacute;cito en todas sus restricciones";
 choices[62][3] = "Informal";
 answers[62] = choices[62][2];
 units[62] = "57";
 comments[62] = "Id Pregunta: 6240. TICB-2009, bloque desarrollo";


//  Id pregunta: 6338 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  Si se dispone correctamente una soluci&oacute;n CRM, &iquest;qu&eacute; ventajas puede reportar?. Se&ntilde;ale la falsa:";
 choices[63]= new Array();
 choices[63][0] = "Reducci&oacute;n de los costes del centro de contacto.";
 choices[63][1] = "Aumento de la satisfacci&oacute;n de los clientes y de los porcentajes de conversi&oacute;n de las ventas.";
 choices[63][2] = "Mejora de los resultados de ventas en todos los canales (directos, indirectos y a trav&eacute;s de socios).";
 choices[63][3] = "Aumento de los costes de las operaciones del servicio &ldquo;in situ&rdquo;. ";
 answers[63] = choices[63][3];
 units[63] = "65";
 comments[63] = "Id Pregunta: 6338. ";


//  Id pregunta: 6505 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  El kernel desarrollado por el proyecto GNU es conocido como:";
 choices[64]= new Array();
 choices[64][0] = "Hurd";
 choices[64][1] = "Linux";
 choices[64][2] = "Emacs";
 choices[64][3] = "Debian";
 answers[64] = choices[64][0];
 units[64] = "53";
 comments[64] = "Id Pregunta: 6505. NULL";


//  Id pregunta: 6512 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  NO es una distribuci&oacute;n Linux:";
 choices[65]= new Array();
 choices[65][0] = "Knoppix";
 choices[65][1] = "Suse";
 choices[65][2] = "Red Hot";
 choices[65][3] = "Fedora";
 answers[65] = choices[65][2];
 units[65] = "54";
 comments[65] = "Id Pregunta: 6512. ";


//  Id pregunta: 6582 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  &iquest;A qu&eacute; ficheros de los enumerados a continuaci&oacute;n corresponde no aplicar las medidas de nivel medio?";
 choices[66]= new Array();
 choices[66][0] = "A los recabados con fines policiales sin consentimiento de las personas afectadas";
 choices[66][1] = "A los relativos a la comisi&oacute;n de infracciones administrativas y penales";
 choices[66][2] = "A los de las Administraciones tributarias y que se relacionen con el ejercicio de sus potestades tributarias";
 choices[66][3] = "Todos los ficheros mencionados anteriormente deben aplicar medidas de seguridad de nivel medio.";
 answers[66] = choices[66][3];
 units[66] = "29";
 comments[66] = "Id Pregunta: 6582. NULL";


//  Id pregunta: 7161 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  Se&ntilde;ale cu&aacute;l de las siguientes distribuciones no se basa en Debian:";
 choices[67]= new Array();
 choices[67][0] = "Ubuntu";
 choices[67][1] = "Knoppix";
 choices[67][2] = "Fedora";
 choices[67][3] = "Guadalinex";
 answers[67] = choices[67][2];
 units[67] = "53";
 comments[67] = "Id Pregunta: 7161. Examen TIC B 2009";


//  Id pregunta: 8227 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  Indique cu&aacute;l de las siguientes afirmaciones es FALSA:";
 choices[68]= new Array();
 choices[68][0] = "A temperatura ambiente y bajo condiciones normales de atm&oacute;sfera, el valor de la banda de energ&iacute;a denominada GAP es de 1'12 eV para el Silicio y 1'42 eV para el Arseniuro de Galio.";
 choices[68][1] = "Un semiconductor intr&iacute;nseco es aqu&eacute;l que contiene elevadas cantidades de impurezas en comparaci&oacute;n con las cantidades de electrones y huecos generados t&eacute;rmicamente.";
 choices[68][2] = "El nivel de Fermi es el nivel de energ&iacute;a en el cu&aacute;l la probabilidad de ocupaci&oacute;n del mismo por un electr&oacute;n es exactamente 1/2.";
 choices[68][3] = "Un dispositivo bipolar es un dispositivo semiconductor en el que tanto huecos como electrones participan en el proceso de conducci&oacute;n.";
 answers[68] = choices[68][1];
 units[68] = "45";
 comments[68] = "Id Pregunta: 8227. Examen TIC A1 2010";


//  Id pregunta: 8371 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  Una de las funciones primordiales del Sistema Operativo es:";
 choices[69]= new Array();
 choices[69][0] = "Gestionar la comunicaci&oacute;n con los servidores de correo.";
 choices[69][1] = "Proporcionar las herramientas ofim&aacute;ticas b&aacute;sicas.";
 choices[69][2] = "Facilitar, al menos, un navegador.";
 choices[69][3] = "Crear la interfaz del hardware con el usuario.";
 answers[69] = choices[69][3];
 units[69] = "52";
 comments[69] = "Id Pregunta: 8371. Examen TIC A2 2010";


//  Id pregunta: 8407 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas NO corresponde a una unidad de estado s&oacute;lido (SSD)? ";
 choices[70]= new Array();
 choices[70][0] = "No contiene partes m&oacute;viles. ";
 choices[70][1] = "Son discos menos ruidosos que los magn&eacute;ticos. ";
 choices[70][2] = "El precio por MB es menor que en los discos magn&eacute;ticos";
 choices[70][3] = "Existen para varias &iacute;nterfaces (SATA, PATA, etc.)";
 answers[70] = choices[70][2];
 units[70] = "48";
 comments[70] = "Id Pregunta: 8407. Examen TIC A2 2010";


//  Id pregunta: 8432 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  De los siguientes algoritmos de asignaci&oacute;n del turno de ejecuci&oacute;n de los procesos, &iquest;Cu&aacute;l de ellos consiste en asignar a cada proceso un intervalo de tiempo de ejecuci&oacute;n (llamado time-slice), y cada vez que se vence ese intervalo se copia el contexto del proceso a un lugar seguro y se le asigna su turno a otro proceso?";
 choices[71]= new Array();
 choices[71][0] = "SJF (Shortest Job First)";
 choices[71][1] = "FIFO (First In First Out";
 choices[71][2] = "Por prioridad";
 choices[71][3] = "Round Robin";
 answers[71] = choices[71][3];
 units[71] = "52";
 comments[71] = "Id Pregunta: 8432. ";


//  Id pregunta: 8624 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  &iquest;Qu&eacute; es el World Wide Name (WWN)?";
 choices[72]= new Array();
 choices[72][0] = "Un identificador &uacute;nico de 8 byles en una red de almacenamiento";
 choices[72][1] = "Uno de los servidores DNS ra&iacute;z";
 choices[72][2] = "Un nuevo dominio de Internet basado en IPv6 que va a sustituir los actuales dominios basados en IPv4.";
 choices[72][3] = "Un protocolo que permite identificar un equipo y sus recursos con independencia del tipo de red y sistema operativo";
 answers[72] = choices[72][0];
 units[72] = "48";
 comments[72] = "Id Pregunta: 8624. Examen TIC A2 2010 interna";


//  Id pregunta: 8929 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l de las siguientes es una operaci&oacute;n que implica un cambio en el n&uacute;mero de dimensiones contempladas en la visi&oacute;n de un sistema OLAP?";
 choices[73]= new Array();
 choices[73][0] = "Drill-Across.";
 choices[73][1] = "Drill-In.";
 choices[73][2] = "Roll-Up.";
 choices[73][3] = "Rotaci&oacute;n.";
 answers[73] = choices[73][2];
 units[73] = "68";
 comments[73] = "Id Pregunta: 8929. ";


//  Id pregunta: 8953 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  KDE puede arrancar un n&uacute;mero m&aacute;ximo de escritorios virtuales &iquest;cu&aacute;l es ese n&uacute;mero?:";
 choices[74]= new Array();
 choices[74][0] = "16";
 choices[74][1] = "8";
 choices[74][2] = "4";
 choices[74][3] = "6";
 answers[74] = choices[74][1];
 units[74] = "53,54";
 comments[74] = "Id Pregunta: 8953. ";


//  Id pregunta: 8956 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  En Inteligencia artificial existe varias clasificaciones en cuanto a los m&eacute;todos de b&uacute;squeda. De lso siguientes &iquest;cu&aacute;l pertenece  a la clasificaci&oacute;n  de Mejora Iterativa?";
 choices[75]= new Array();
 choices[75][0] = "B&uacute;squeda Greedy";
 choices[75][1] = "B&uacute;squeda en profundidad iterativa";
 choices[75][2] = "Algoritmo A*";
 choices[75][3] = "Escalada por m&aacute;xima pendiente";
 answers[75] = choices[75][3];
 units[75] = "63";
 comments[75] = "Id Pregunta: 8956. ";


//  Id pregunta: 8998 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  En un sistema de segmentaci&oacute;n, los segmentos que necesitan los programas pueden no estar residentes en la memoria principal. Esta situaci&oacute;n se indica haciendo uso del:";
 choices[76]= new Array();
 choices[76][0] = "Bit de segmentaci&oacute;n.";
 choices[76][1] = "Bit de ausencia.";
 choices[76][2] = "Bit de presencia.";
 choices[76][3] = "Bit de petici&oacute;n.";
 answers[76] = choices[76][2];
 units[76] = "45";
 comments[76] = "Id Pregunta: 8998. Examen UPM A2 2011";


//  Id pregunta: 9103 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  &iquest;En que lenguaje est&aacute; basado el lenguaje de expresi&oacute;n de derechos REL?";
 choices[77]= new Array();
 choices[77][0] = "XcML";
 choices[77][1] = "XrML";
 choices[77][2] = "XMCL";
 choices[77][3] = "XsML";
 answers[77] = choices[77][1];
 units[77] = "37";
 comments[77] = "Id Pregunta: 9103. ";


//  Id pregunta: 9119 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  Con respecto a los datos en los sistemas SMP o MMC se pueden distinguir los siguientes tipos en funci&oacute;n de su alcance";
 choices[78]= new Array();
 choices[78][0] = "Datos de alcance s&iacute;ncrono y as&iacute;ncrono";
 choices[78][1] = "Datos de alcance global y local";
 choices[78][2] = "Datos de alcance externo e interno";
 choices[78][3] = "No existe la arquitectura MMC";
 answers[78] = choices[78][1];
 units[78] = "45";
 comments[78] = "Id Pregunta: 9119. ";


//  Id pregunta: 9133 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  &iquest;C&oacute;mo se pueden clasificar los perif&eacute;ricos seg&uacute;n su funci&oacute;n?";
 choices[79]= new Array();
 choices[79][0] = "de entrada";
 choices[79][1] = "de salida";
 choices[79][2] = "Que realizan funciones de almacenamiento auxiliar";
 choices[79][3] = "Todas las anteriores";
 answers[79] = choices[79][3];
 units[79] = "47";
 comments[79] = "Id Pregunta: 9133. ";


//  Id pregunta: 9140 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  &iquest;En qu&eacute; &iacute;ndices se puede medir la potencia de un ordenador?";
 choices[80]= new Array();
 choices[80][0] = "Miles de instrucciones por segundo (MIPS)";
 choices[80][1] = "SPEC. Ejecuta en el procesador un conjunto de programas y combina las medidas de prestaciones de &eacute;stos con la media aritm&eacute;tica o geom&eacute;trica.";
 choices[80][2] = "SPECint y SpeCfp. &Iacute;ndices que miden las velocidades en operaciones con enteros y comas flotantes. La medida resultante se denomina SPECifp";
 choices[80][3] = "Por el n&uacute;mero de cores que tenga el procesador";
 answers[80] = choices[80][1];
 units[80] = "47";
 comments[80] = "Id Pregunta: 9140. ";


//  Id pregunta: 9154 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  Indique cu&aacute;l de las siguientes es una soluci&oacute;n de software libre de eLearning:";
 choices[81]= new Array();
 choices[81][0] = "Ganesha";
 choices[81][1] = "OpenSCORM";
 choices[81][2] = "Blackboard";
 choices[81][3] = "WebCT";
 answers[81] = choices[81][0];
 units[81] = "66";
 comments[81] = "Id Pregunta: 9154. ";


//  Id pregunta: 9192 AÃ±o de creación de pregunta: 2013-01-01
 questions[82]= "83)  &iquest;C&oacute;mo se realiza la protecci&oacute;n de un programa de ordenador?";
 choices[82]= new Array();
 choices[82][0] = "A la hora de crear el programa, el autor debe decidir qu&eacute; tipo de protecci&oacute;n quiere otorgarle, si a trav&eacute;s de la ley de patentes o a trav&eacute;s de la ley de propiedad intelectual";
 choices[82][1] = "A traves de la ley de patentes";
 choices[82][2] = "Nunca puede realizarse a trav&eacute;s de la ley de patentes";
 choices[82][3] = "Si el programa forma parte de una patente, tambi&eacute;n estar&aacute; protegido por la ley de propiedad intelectual";
 answers[82] = choices[82][3];
 units[82] = "36";
 comments[82] = "Id Pregunta: 9192. ";


//  Id pregunta: 9214 AÃ±o de creación de pregunta: 2013-01-01
 questions[83]= "84)  &iquest;C&oacute;mo es SAN iSCSI respecto a FC?";
 choices[83]= new Array();
 choices[83][0] = "A nivel funcional pueden ofrecer las mismas capacidades pero es m&aacute;s cara.";
 choices[83][1] = "Igual";
 choices[83][2] = "A nivel funcional pueden ofrecer las mismas capacidades pero es m&aacute;s barata";
 choices[83][3] = "SCSI se utiliza en tecnolog&iacute;as NAS y no en SAN.";
 answers[83] = choices[83][2];
 units[83] = "48";
 comments[83] = "Id Pregunta: 9214. ";


//  Id pregunta: 9272 AÃ±o de creación de pregunta: 2013-01-01
 questions[84]= "85)  El tama&ntilde;o m&aacute;ximo de archivos que puede manejar FAT32 es: ";
 choices[84]= new Array();
 choices[84][0] = "32MB";
 choices[84][1] = "1GB";
 choices[84][2] = "2GB";
 choices[84][3] = "4GB";
 answers[84] = choices[84][3];
 units[84] = "54";
 comments[84] = "Id Pregunta: 9272. Examen TICA2-2011";


//  Id pregunta: 9596 AÃ±o de creación de pregunta: 2013-01-01
 questions[85]= "86)  En una arquitectura web en J2EE, indique cu&aacute;l es la opci&oacute;n correcta que representa la capa a la que pertenece la soluci&oacute;n JCA (J2EE Connector Architecture)";
 choices[85]= new Array();
 choices[85][0] = "Capa de cliente";
 choices[85][1] = "Capa de l&oacute;gica de negocio";
 choices[85][2] = "Capa de integraci&oacute;n";
 choices[85][3] = "Capa de sistemas de informaci&oacute;n";
 answers[85] = choices[85][3];
 units[85] = "60";
 comments[85] = "Id Pregunta: 9596. Xunta Libre 2011. JCE conecta un servidor JEE con un Sistema de Informaci&oacute;n Empresarial (EIS)";


//  Id pregunta: 9779 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  CODASYL, modelo de Sistemas Gestores de Bases de datos en red, es acr&oacute;nimo de:";
 choices[86]= new Array();
 choices[86][0] = "Conference on Data Systems Languages. ";
 choices[86][1] = "Concurrent Database Systems Languages. ";
 choices[86][2] = "Coherent Data Symmetric Location. ";
 choices[86][3] = "CODe And Systematic Language. ";
 answers[86] = choices[86][0];
 units[86] = "57";
 comments[86] = "Id Pregunta: 9779. Examen TIC A2 2013";


//  Id pregunta: 9811 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  La velocidad del est&aacute;ndar USB 3.0 es:";
 choices[87]= new Array();
 choices[87][0] = "Similar a la de USB 2.0.";
 choices[87][1] = "10 veces superior a la de USB 2.0.";
 choices[87][2] = "480 Mbps.";
 choices[87][3] = "15 veces superior a la de USB 2.0.";
 answers[87] = choices[87][1];
 units[87] = "46";
 comments[87] = "Id Pregunta: 9811. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9890 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  De entre los siguientes procedimientos de b&uacute;squeda, &iquest;cu&aacute;l utiliza un m&eacute;todo heur&iacute;stico?";
 choices[88]= new Array();
 choices[88][0] = "B&uacute;squeda primero el mejor.";
 choices[88][1] = "B&uacute;squeda bidireccional";
 choices[88][2] = "B&uacute;squeda primero en anchura";
 choices[88][3] = "B&uacute;squeda primero en profundidad";
 answers[88] = choices[88][0];
 units[88] = "63";
 comments[88] = "Id Pregunta: 9890. TIC A1, Examen 2013";


//  Id pregunta: 9919 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  Dentro del dise&ntilde;o conceptual de datos, en una jerarqu&iacute;a de generalizaci&oacute;n se dice que un subconjunto (caso particular de generalizaci&oacute;n con una sola entidad como subentidad) siempre es una jerarqu&iacute;a:";
 choices[89]= new Array();
 choices[89][0] = "Total y exclusiva.";
 choices[89][1] = "Parcial y superpuesta.";
 choices[89][2] = "Parcial y exclusiva.";
 choices[89][3] = "Total y superpuesta.";
 answers[89] = choices[89][2];
 units[89] = "58";
 comments[89] = "Id Pregunta: 9919. TIC A2, Examen 2013";


//  Id pregunta: 9997 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  Desde el punto de vista del &ldquo;Cloud Computing&rdquo;, Gmail es un ejemplo de";
 choices[90]= new Array();
 choices[90][0] = "PaaS (&ldquo;Platform as a Service&rdquo;).";
 choices[90][1] = "CaaS (&ldquo;Communication as a Service&rdquo;).";
 choices[90][2] = "IaaS (&ldquo;Infrastructure as a Service&rdquo;).";
 choices[90][3] = "SaaS (&ldquo;Software as a Service&rdquo;).";
 answers[90] = choices[90][3];
 units[90] = "47";
 comments[90] = "Id Pregunta: 9997. ";


//  Id pregunta: 10188 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  Entre los modelos de bases de datos prerelacionales, se verifica que:";
 choices[91]= new Array();
 choices[91][0] = "El modelo jer&aacute;rquico es incapaz de representar las relaciones reflexivas o las relaciones N:M";
 choices[91][1] = "Los modelos jer&aacute;rquico y CODASYL son en esencia modelos de datos en red, que aplican ciertas restricciones";
 choices[91][2] = "El Conjunto o SET es uno de los elementos m&aacute;s importantes del modelo CODASYL, como elemento b&aacute;sico para la representaci&oacute;n de interrelaciones 1:N y por tanto 1:1.";
 choices[91][3] = "Todas las anteriores";
 answers[91] = choices[91][3];
 units[91] = "57";
 comments[91] = "Id Pregunta: 10188. ";


//  Id pregunta: 10375 AÃ±o de creación de pregunta: 2014-01-01
 questions[92]= "93)  La rotura de la m&aacute;quina de cifrado Enigma es un ejemplo de:";
 choices[92]= new Array();
 choices[92][0] = "Criptograf&iacute;a asim&eacute;trica o de clave p&uacute;blica";
 choices[92][1] = "Cifrado C&eacute;sar";
 choices[92][2] = "Criptoan&aacute;lisis";
 choices[92][3] = "Criptograf&iacute;a cu&aacute;ntica";
 answers[92] = choices[92][2];
 units[92] = "72";
 comments[92] = "Id Pregunta: 10375. ";


//  Id pregunta: 10613 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Indique cu&aacute;l es el orden correcto de las siguientes tecnolog&iacute;as de disco, de mayor a menor tiempo de latencia:";
 choices[93]= new Array();
 choices[93][0] = "SCSI, IDE y SATA.";
 choices[93][1] = "SATA, SSD y FC.";
 choices[93][2] = "SSD, SCSI e IDE.";
 choices[93][3] = "IDE, SSD y SAS.";
 answers[93] = choices[93][2];
 units[93] = "48";
 comments[93] = "Id Pregunta: 10613. ";


//  Id pregunta: 10628 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Se&ntilde;ale cu&aacute;l de estas caracter&iacute;sticas no se corresponde con un agente inteligente:";
 choices[94]= new Array();
 choices[94][0] = "Pueden dar soluciones a diferentes problemas.";
 choices[94][1] = "Poseen capacidad de an&aacute;lisis.";
 choices[94][2] = "Tienen capacidad de aprender y mejorar a trav&eacute;s de la interacci&oacute;n.";
 choices[94][3] = "Ejecutan la misma acci&oacute;n de forma peri&oacute;dica.";
 answers[94] = choices[94][3];
 units[94] = "63";
 comments[94] = "Id Pregunta: 10628. ";


//  Id pregunta: 11039 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Cu&aacute;l de las siguientes afirmaciones acerca del modelo l&oacute;gico relacional es correcta?";
 choices[95]= new Array();
 choices[95][0] = "Fue creado por Peter Chen";
 choices[95][1] = "Est&aacute; basado en la teor&iacute;a de conjuntos y la l&oacute;gica de predicados";
 choices[95][2] = "Las estructuras de datos son complejas";
 choices[95][3] = "No permite incorporar aspectos sem&aacute;nticos mediante el establecimiento de reglas de integridad";
 answers[95] = choices[95][1];
 units[95] = "58";
 comments[95] = "Id Pregunta: 11039. ";


//  Id pregunta: 11222 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  La tecnolog&iacute;a LINQ en el Framework .NET:";
 choices[96]= new Array();
 choices[96][0] = "Es el acr&oacute;nimo&nbsp;de Language Integrated Query.";
 choices[96][1] = "Permite realizar consultas a distintas fuentes de datos.";
 choices[96][2] = "No es compatible con ADO.NET Entity Framework.";
 choices[96][3] = "A) y B) son correctas.";
 answers[96] = choices[96][0];
 units[96] = "59";
 comments[96] = "Id Pregunta: 11222. ";


//  Id pregunta: 11284 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Situar una posici&oacute;n en el mapa empleando una referencia catastral es un ejemplo de?";
 choices[97]= new Array();
 choices[97][0] = "Georreferenciaci&oacute;n directa";
 choices[97][1] = "Sistema de Proyecci&oacute;n (SRS)";
 choices[97][2] = "Georreferenciaci&oacute;n discreta";
 choices[97][3] = "a y c son ciertas";
 answers[97] = choices[97][2];
 units[97] = "67";
 comments[97] = "Id Pregunta: 11284. ";


//  Id pregunta: 11344 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  En relaci&oacute;n con la taxonom&iacute;a de Flynn, una de las siguientes asociaciones no es correcta";
 choices[98]= new Array();
 choices[98][0] = "SISD - Monoprocesador";
 choices[98][1] = "MISD - Arquitectura sist&oacute;lica";
 choices[98][2] = "SIMD - Multiproceso";
 choices[98][3] = "SMP - Sistemas multicomputador";
 answers[98] = choices[98][3];
 units[98] = "46";
 comments[98] = "Id Pregunta: 11344. ";


//  Id pregunta: 11608 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  La privacidad de la informaci&oacute;n en el uso de cloud computing supone un tipo de riesgo:";
 choices[99]= new Array();
 choices[99][0] = "Contractual";
 choices[99][1] = "Legal";
 choices[99][2] = "Organizativo";
 choices[99][3] = "T&eacute;cnico";
 answers[99] = choices[99][1];
 units[99] = "47";
 comments[99] = "Id Pregunta: 11608. ";


