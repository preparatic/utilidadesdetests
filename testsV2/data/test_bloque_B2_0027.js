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

//  Id pregunta: 674 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  La firma electr&oacute;nica se regula seg&uacute;n la base normativa descrita en:";
 choices[0]= new Array();
 choices[0][0] = "Real Decreto Ley Firma Electr&oacute;nica 213/2001";
 choices[0][1] = "Ley Firma Electr&oacute;nica 59/2003";
 choices[0][2] = "Real Decreto Ley Firma Electr&oacute;nica 15/1999";
 choices[0][3] = "Real Decreto Ley Firma Electr&oacute;nica 30/1998";
 answers[0] = choices[0][1];
 units[0] = "30";
 comments[0] = "Id Pregunta: 674. Ley 59/2003";


//  Id pregunta: 729 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  En el lenguaje XML, el t&eacute;rmino que se utiliza para definir &quot;Las reglas que determinan el conjunto de marcas y su sintaxis&quot; es:";
 choices[1]= new Array();
 choices[1][0] = "DXL (Document eXtended Language)";
 choices[1][1] = "DTD (Document Type Definition)";
 choices[1][2] = "DOM (Document Object Model)";
 choices[1][3] = "DML (Document Markup Language)";
 answers[1] = choices[1][1];
 units[1] = "69";
 comments[1] = "Id Pregunta: 729. Examen TIC MAP B 2004";


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


//  Id pregunta: 769 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  Dada la arquitectura de supercomputaci&oacute;n MPP, &iquest;cu&aacute;l de las siguientes afirmaciones es verdadera?";
 choices[3]= new Array();
 choices[3][0] = "Distintas CPU acceden a la misma &aacute;rea de memoria";
 choices[3][1] = "Distintas CPU acceden a sus propias &aacute;reas de memoria";
 choices[3][2] = "Cada CPU puede acceder tanto a su propia &aacute;rea de memoria como a un &aacute;rea com&uacute;n";
 choices[3][3] = "ninguna de las anteriores";
 answers[3] = choices[3][1];
 units[3] = "45";
 comments[3] = "Id Pregunta: 769. ";


//  Id pregunta: 774 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  Indique cu&aacute;l de las siguientes afirmaciones relativas a los conceptos SMP(Symmetric MultiProcessing) y MPP (Massively Paralleling MultiProcessing) es falsa:";
 choices[4]= new Array();
 choices[4][0] = "En MPP todas las CPU comparten la misma memoria mientras que en SMP no";
 choices[4][1] = "La programaci&oacute;n con MPP es mucho m&aacute;s compleja ya que el programa que se ejecuta debe ser dividido en segmentos que se comuniquen entre s&iacute;";
 choices[4][2] = "MPP no sufre el cuello de botella que sufre SMP en el acceso a memoria";
 choices[4][3] = "Un cluster est&aacute; compuesto por dos o m&aacute;s ordenadores que se comportan coo una sola m&aacute;quina";
 answers[4] = choices[4][0];
 units[4] = "45";
 comments[4] = "Id Pregunta: 774. TAI 2004";


//  Id pregunta: 795 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;Qu&eacute; son los midlets?:";
 choices[5]= new Array();
 choices[5][0] = "Son aplicaciones Java para la capa de middleware";
 choices[5][1] = "Son aplicaciones Java igualmente v&aacute;lidas para cliente o para servidor";
 choices[5][2] = "Son applets que s&oacute;lo se ejecutan bajo ciertas condiciones";
 choices[5][3] = "Son aplicaciones Java J2ME para dispositivos m&oacute;viles";
 answers[5] = choices[5][3];
 units[5] = "60";
 comments[5] = "Id Pregunta: 795. NULL";


//  Id pregunta: 797 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Qu&eacute; tiene de particular una c&aacute;mara o sala anecoica?";
 choices[6]= new Array();
 choices[6][0] = "Las paredes son espejos reflectantes que permiten ver de fuera a dentro pero no de dentro a fuera.";
 choices[6][1] = "Las paredes tienen formas geom&eacute;tricas a lo largo de su superficie que evitan que rebote el sonido.";
 choices[6][2] = "Su electricidad est&aacute;tica hace que se comporte como una jaula de Faraday.";
 choices[6][3] = "Se mantiene completamente isoterma gracias al material de sus revestimientos.";
 answers[6] = choices[6][1];
 units[6] = "";
 comments[6] = "Id Pregunta: 797. ";


//  Id pregunta: 801 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Recuerda los nombres de los inventores del lenguaje C?:";
 choices[7]= new Array();
 choices[7][0] = "Hewlett y Packard";
 choices[7][1] = "Ritchie y Kernighan";
 choices[7][2] = "Stalling y Black";
 choices[7][3] = "Bell Laboratories";
 answers[7] = choices[7][1];
 units[7] = "53";
 comments[7] = "Id Pregunta: 801. ";


//  Id pregunta: 810 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Acerca de las memoria de lectura y escritura, &iquest;cu&aacute;l de las siguientes afirmaciones es falsa?:";
 choices[8]= new Array();
 choices[8][0] = "Se basan en puntos de memoria de tipo biestable, que mantienen su estado siempre que no se interrumpa la alimentaci&oacute;n";
 choices[8][1] = "Las RAM din&aacute;micas son vol&aacute;tiles, requieren refresco, con un periodo del orden de unos pocos milisegundos";
 choices[8][2] = "Las RAM din&aacute;micas consumen m&aacute;s que las RAM est&aacute;ticas";
 choices[8][3] = "Las RAM est&aacute;ticas son mucho m&aacute;s econ&oacute;micas que las RAM din&aacute;micas";
 answers[8] = choices[8][3];
 units[8] = "47";
 comments[8] = "Id Pregunta: 810. ";


//  Id pregunta: 820 AÃ±o de creación de pregunta: 2009-01-01
 questions[9]= "10)  Seg&uacute;n la Ley 34/2002, podr&aacute;n adoptarse las medidas legales necesarias para que se interrumpa la prestaci&oacute;n de un servicio que atente contra los siguientes principios. Se&ntilde;alar la respuesta incorrecta:";
 choices[9]= new Array();
 choices[9][0] = "Salvaguarda del orden p&uacute;blico";
 choices[9][1] = "Salvaguarda del inter&eacute;s general";
 choices[9][2] = "Respeto a la dignidad de la persona";
 choices[9][3] = "Protecci&oacute;n de la salud p&uacute;blica";
 answers[9] = choices[9][1];
 units[9] = "30";
 comments[9] = "Id Pregunta: 820. Ley 34/2002, art&iacute;culo 8";


//  Id pregunta: 837 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa respecto a Linux?:";
 choices[10]= new Array();
 choices[10][0] = "Est&aacute; constituido por un n&uacute;cleo Kernel, y cada usuario debe construirse las librer&iacute;as y programas para poderlo utilizar";
 choices[10][1] = "Es un sistema operativo compatible con Unix";
 choices[10][2] = "Es software libre";
 choices[10][3] = "El sistema viene acompa&ntilde;ado del c&oacute;digo fuente";
 answers[10] = choices[10][0];
 units[10] = "52, 53";
 comments[10] = "Id Pregunta: 837. ";


//  Id pregunta: 926 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Qu&eacute; es la l&oacute;gica borrosa o difusa -fuzzy logic-?:";
 choices[11]= new Array();
 choices[11][0] = "Es una rama de la l&oacute;gica binaria que invierte los conceptos para que el ordenador realice operaciones m&aacute;s eficientemente en l&oacute;gica negativa aunque para el ser humano se pierda comprensi&oacute;n";
 choices[11][1] = "Es una rama de la ingenier&iacute;a que trata la l&oacute;gica booleana mediante transformaciones puntuales de cambios de base para introducir variables auxiliares a conveniencia";
 choices[11][2] = "Es una rama de la ingenier&iacute;a que simplifica ecuaciones muy complejas para resolverlas mediante aproximaciones de los valores de la soluci&oacute;n seg&uacute;n grados de pertenencia a conjuntos m&aacute;s o menos subjetivos y probabil&iacute;sticos";
 choices[11][3] = "Nada de lo anterior es cierto";
 answers[11] = choices[11][2];
 units[11] = "63";
 comments[11] = "Id Pregunta: 926. ";


//  Id pregunta: 956 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Con el comando kill de Unix es posible enviar se&ntilde;ales a otros procesos. &iquest;Qu&eacute; se&ntilde;al no puede capturar ni ignorar un proceso, y provoca la terminaci&oacute;n del mismo?:";
 choices[12]= new Array();
 choices[12][0] = "8";
 choices[12][1] = "2";
 choices[12][2] = "15";
 choices[12][3] = "9";
 answers[12] = choices[12][3];
 units[12] = "53";
 comments[12] = "Id Pregunta: 956. ";


//  Id pregunta: 963 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Considere un sistema con memoria virtual cuya CPU tiene una utilizaci&oacute;n del 15% y donde el dispositivo de paginaci&oacute;n est&aacute; ocupado el 97% del tiempo. &iquest;Qu&eacute; indican estas medidas?:";
 choices[13]= new Array();
 choices[13][0] = "El grado de multiprogramaci&oacute;n es demasiado bajo";
 choices[13][1] = "El dispositivo de paginaci&oacute;n es demasiado peque&ntilde;o";
 choices[13][2] = "La CPU es demasiado lenta";
 choices[13][3] = "El grado de multiprogramaci&oacute;n es demasiado alto";
 answers[13] = choices[13][3];
 units[13] = "52";
 comments[13] = "Id Pregunta: 963. ";


//  Id pregunta: 999 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  El algoritmo RSA se emplea para:";
 choices[14]= new Array();
 choices[14][0] = "Cifrar datos con una clave secreta";
 choices[14][1] = "Cifrar datos con una criptograf&iacute;a de clave p&uacute;blica";
 choices[14][2] = "Obtener un resumen (huella digital) de un documento";
 choices[14][3] = "Ninguna de las anteriores";
 answers[14] = choices[14][1];
 units[14] = "72";
 comments[14] = "Id Pregunta: 999. ";


//  Id pregunta: 1134 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  En un desplazamiento c&iacute;clico a la izquierda de un bit, el contenido de &quot;100101&quot; se modifica en:";
 choices[15]= new Array();
 choices[15][0] = "&ldquo;110010&rdquo;.";
 choices[15][1] = "&quot;1010&rdquo;.";
 choices[15][2] = "&ldquo;110011&rdquo;.";
 choices[15][3] = "&ldquo;1011&rdquo;.";
 answers[15] = choices[15][3];
 units[15] = "49";
 comments[15] = "Id Pregunta: 1134. ";


//  Id pregunta: 1158 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  En Unix el comando  vi  es muy utilizado, sirve para:";
 choices[16]= new Array();
 choices[16][0] = "Listar las primeras 10 l&iacute;neas de un fichero";
 choices[16][1] = "Lista todos los procesos en ejecuci&oacute;n con su estado";
 choices[16][2] = "Es un editor de texto";
 choices[16][3] = "Visualiza la cantidad de memoria libre y el tanto por ciento ocupado del procesador";
 answers[16] = choices[16][2];
 units[16] = "54";
 comments[16] = "Id Pregunta: 1158. NULL";


//  Id pregunta: 1193 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Indique la afirmaci&oacute;n falsa, relativa a la arquitectura cliente/servidor:";
 choices[17]= new Array();
 choices[17][0] = "El di&aacute;logo entre cliente y servidor se inicia a requerimiento del servidor";
 choices[17][1] = "El servidor es el equipo que se encarga de suministrar servicios, como consultas a la base de datos, y el cliente es el equipo que muestra y formatea los datos";
 choices[17][2] = "Durante el desarrollo de las aplicaciones que siguen esta estructura, a veces hay que decidir que partes de la aplicaci&oacute;n se ejecutan en el servidor y cu&aacute;les en el cliente";
 choices[17][3] = "Las aplicaciones que se ejecutan en entorno Web siguen esta arquitectura";
 answers[17] = choices[17][0];
 units[17] = "50";
 comments[17] = "Id Pregunta: 1193. ";


//  Id pregunta: 1200 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Javascript:";
 choices[18]= new Array();
 choices[18][0] = "Es una evoluci&oacute;n de Java, dise&ntilde;ada por Sun Microsystems, como lenguaje de script para el cliente";
 choices[18][1] = "Permite el acceso a bases de datos en el lado del cliente";
 choices[18][2] = "Es una evoluci&oacute;n de LiveScript";
 choices[18][3] = "Se utiliza para programar Applets en el cliente";
 answers[18] = choices[18][2];
 units[18] = "114,116";
 comments[18] = "Id Pregunta: 1200. ";


//  Id pregunta: 1223 AÃ±o de creación de pregunta: 2005-01-01
 questions[19]= "20)  Los DN, en LDAP, se representan en:";
 choices[19]= new Array();
 choices[19][0] = "XML";
 choices[19][1] = "HTML";
 choices[19][2] = "Texto plano";
 choices[19][3] = "ASN.1";
 answers[19] = choices[19][2];
 units[19] = "74";
 comments[19] = "Id Pregunta: 1223. RFC 4514";


//  Id pregunta: 1262 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Las rutinas de gesti&oacute;n de trabajos que lleva a cabo un sistema operativo:";
 choices[20]= new Array();
 choices[20][0] = "Proveen una interface l&oacute;gica entre el hardware y el resto del software";
 choices[20][1] = "Permiten que varios procesos puedan ejecutarse en el sistema de forma simult&aacute;nea";
 choices[20][2] = "Supervisan las interrupciones";
 choices[20][3] = "Supervisan las funciones de entrada/salida";
 answers[20] = choices[20][1];
 units[20] = "52";
 comments[20] = "Id Pregunta: 1262. ";


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


//  Id pregunta: 1331 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Se dispone de un ordenador monoprocesador que permite multiprogramaci&oacute;n, para lo cual es preciso:";
 choices[22]= new Array();
 choices[22][0] = "Utilizar t&eacute;cnicas de multiplexaci&oacute;n en el tiempo";
 choices[22][1] = "Utilizar t&eacute;cnicas de ejecuci&oacute;n de programas en tiempo real";
 choices[22][2] = "Utilizar t&eacute;cnicas de ejecuci&oacute;n en tiempo compartido";
 choices[22][3] = "Fragmentar de forma l&oacute;gica la memoria cach&eacute; en tantas partes ccomo programas en ejecuci&oacute;n tengamos";
 answers[22] = choices[22][2];
 units[22] = "52";
 comments[22] = "Id Pregunta: 1331. ";


//  Id pregunta: 1344 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Se&ntilde;ale el modelo de miner&iacute;a de datos que comprueba la validez de las hip&oacute;tesis establecidas por el usuario.";
 choices[23]= new Array();
 choices[23][0] = "Modelo de descubrimiento.";
 choices[23][1] = "Modelo de verificaci&oacute;n.";
 choices[23][2] = "Modelo predictivo.";
 choices[23][3] = "Modelo de resumen.";
 answers[23] = choices[23][1];
 units[23] = "68";
 comments[23] = "Id Pregunta: 1344. ";


//  Id pregunta: 1457 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  &iquest;Podr&iacute;a indicar la organizaci&oacute;n que ha desarrollado el est&aacute;ndar &lsquo;motif&rsquo;?:";
 choices[24]= new Array();
 choices[24][0] = "Sun Microsystems";
 choices[24][1] = "OSF (Open Group)";
 choices[24][2] = "Departamento de Defensa de EE.UU.";
 choices[24][3] = "MIT (Massachusets Institute of Technology)";
 answers[24] = choices[24][1];
 units[24] = "54";
 comments[24] = "Id Pregunta: 1457. NULL";


//  Id pregunta: 1462 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Indique cu&aacute;l de las siguientes afirmaciones es v&aacute;lida para el proceso &quot;Two Phase COMMIT&quot;:";
 choices[25]= new Array();
 choices[25][0] = "Es un programa con 2 versiones de trabajo";
 choices[25][1] = "Es una garant&iacute;a de consistencia entre bases de datos";
 choices[25][2] = "Es una funcionalidad para recuperaci&oacute;n de datos";
 choices[25][3] = "Es un equipo tolerante a fallos";
 answers[25] = choices[25][1];
 units[25] = "58";
 comments[25] = "Id Pregunta: 1462. NULL";


//  Id pregunta: 1478 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  Se entiende por red de almacenamiento (Storage Area Network):";
 choices[26]= new Array();
 choices[26][0] = "El conjunto de ficheros y bases de datos interconectados por una red de area local";
 choices[26][1] = "Un sistema de ordenadores conectados por una WAN que permite el acceso mutuo a sus bases de datos";
 choices[26][2] = "Un sistema de comunicaciones que cuenta con cierta capacidad de memoria en sus encaminadores";
 choices[26][3] = "Un sistema que contempla el almacenamiento de datos e informaciones como un conjunto virtual embebido en una red de comunicaci&oacute;n";
 answers[26] = choices[26][3];
 units[26] = "48";
 comments[26] = "Id Pregunta: 1478. ";


//  Id pregunta: 1529 AÃ±o de creación de pregunta: 2003-01-01
 questions[27]= "28)  El Standard IEEE 1387.2-1995: Software Administration, define el est&aacute;ndar POSIX-7.2:";
 choices[27]= new Array();
 choices[27][0] = "Este est&aacute;ndar provee un conjunto de utilidades de empaquetado y administraci&oacute;n de software que simplifican las labores de distribuci&oacute;n y gesti&oacute;n del software en m&aacute;quinas aisladas pero no en entornos heterog&eacute;neos.";
 choices[27][1] = "Este est&aacute;ndar provee un conjunto de utilidades de empaquetado y administraci&oacute;n de software que simplifican las labores de distribuci&oacute;n y gesti&oacute;n del software en m&aacute;quinas aisladas o en entornos heterog&eacute;neos.";
 choices[27][2] = " POSIX (Portable Operating System Interface) es un grupo de interfaces est&aacute;ndares de sistema operativo, y la 7.2 esta dise&ntilde;ada espec&iacute;ficamente para soportar la portabilidad de aplicaciones en c&oacute;digo fuente.";
 choices[27][3] = "Este est&aacute;ndar provee un entorno de computaci&oacute;n en el cual las aplicaciones pueden ser portadas a todos los productos certificados, que pueden ser de distintos proveedores. Contiene est&aacute;ndares para el sistema operativo, protocolos de red, lenguajes de p";
 answers[27] = choices[27][1];
 units[27] = "53";
 comments[27] = "Id Pregunta: 1529. Junta Andaluc&iacute;a";


//  Id pregunta: 1549 AÃ±o de creación de pregunta: 2003-01-01
 questions[28]= "29)  &iquest;Cu&aacute;l de estas afirmaciones es falsa con respecto al concepto transacci&oacute;n?";
 choices[28]= new Array();
 choices[28][0] = "Todas las operaciones que constituyen una transacci&oacute;n se ejecutan en su totalidad o no se ejecutan en absoluto, es decir constituyen una unidad at&oacute;mica e indivisible.";
 choices[28][1] = "Si la transacci&oacute;n debe ejecutarse en varios servidores y uno de ellos sufre una aver&iacute;a, las transacciones efectuadas en el resto de servidores no tendr&aacute;n efecto al objeto de asegurar la sincronizaci&oacute;n e integridad de los datos.";
 choices[28][2] = "El procedimiento de transacciones de &lsquo;two phase commit&rsquo; consta de una 1&ordf; fase de verificaci&oacute;n de la correcta terminaci&oacute;n de la transacci&oacute;n en cada uno de los sistemas participantes y una 2&ordf; fase de ejecuci&oacute;n o cancelaci&oacute;n de dicha transacci&oacute;n.";
 choices[28][3] = "El procesamiento de transacciones solo puede hacerse en modo no orientado a la conexi&oacute;n, nunca en modo interactivo.";
 answers[28] = choices[28][3];
 units[28] = "56,57";
 comments[28] = "Id Pregunta: 1549. ";


//  Id pregunta: 1652 AÃ±o de creación de pregunta: 2004-01-01
 questions[29]= "30)  &iquest;Las siglas ADL qu&eacute; significan desde la perspectiva del e-learning?";
 choices[29]= new Array();
 choices[29][0] = "Advanced Distributed Learning";
 choices[29][1] = "Advanced Distanced Learning";
 choices[29][2] = "No tienen ning&uacute;n significado desde la perspectiva del e-learning";
 choices[29][3] = "Ninguna de las anteriores";
 answers[29] = choices[29][0];
 units[29] = "66";
 comments[29] = "Id Pregunta: 1652. ";


//  Id pregunta: 1752 AÃ±o de creación de pregunta: 2006-01-01
 questions[30]= "31)  Se&ntilde;ala la falsa referente a SQL";
 choices[30]= new Array();
 choices[30][0] = "Las funciones agregadas devuelven un &uacute;nico valor ";
 choices[30][1] = "La cla&uacute;sula HAVING se utiliza para especificar las condiciones que deben reunir los registros nulos a seleccionar";
 choices[30][2] = "SELF JOIN es una t&eacute;cnica empleada para conseguir el producto cartesiano de una tabla consigo misma";
 choices[30][3] = "La cla&uacute;sula CONSTRAINT permite crear o eliminar &iacute;ndices";
 answers[30] = choices[30][1];
 units[30] = "58";
 comments[30] = "Id Pregunta: 1752. NULL";


//  Id pregunta: 1771 AÃ±o de creación de pregunta: 2006-01-01
 questions[31]= "32)  Respecto a JNI";
 choices[31]= new Array();
 choices[31][0] = "Se sigue conservando la portabilidad universal";
 choices[31][1] = "Es la interfaz est&aacute;ndar de programaci&oacute;n para llamar a m&eacute;todos nativos escritos en otros lenguajes como C o C++.";
 choices[31][2] = " permite utilizar clases java desde aplicaciones nativas.";
 choices[31][3] = "B y C son correctas";
 answers[31] = choices[31][3];
 units[31] = "60";
 comments[31] = "Id Pregunta: 1771. NULL";


//  Id pregunta: 1781 AÃ±o de creación de pregunta: 2006-01-01
 questions[32]= "33)  Cual de los siguientes no forma parte del paquete Open Office";
 choices[32]= new Array();
 choices[32][0] = "Impress";
 choices[32][1] = "Calc";
 choices[32][2] = "Math";
 choices[32][3] = "Text";
 answers[32] = choices[32][3];
 units[32] = "61,62";
 comments[32] = "Id Pregunta: 1781. ";


//  Id pregunta: 1792 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  Los agentes de software inteligentes pueden clasificarse en tres &aacute;reas de acuerdo a sus &aacute;reas de aplicaci&oacute;n. Indique qu&eacute; terna define dichas &aacute;reas:";
 choices[33]= new Array();
 choices[33][0] = "Agentes virtuales, de informaci&oacute;n y de heur&iacute;sticas";
 choices[33][1] = "Agentes de informaci&oacute;n, de interfaz y de heur&iacute;sticas";
 choices[33][2] = "Agentes de interfaz, de informaci&oacute;n, y virtuales";
 choices[33][3] = "Agentes virtuales, de interfaz y de heur&iacute;sticas";
 answers[33] = choices[33][2];
 units[33] = "63";
 comments[33] = "Id Pregunta: 1792. ";


//  Id pregunta: 1821 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  Entre las ventajas de un Datawarehouse no se encuentra:";
 choices[34]= new Array();
 choices[34][0] = "Reducir el tiempo de respuesta de los sistemas operacionales.";
 choices[34][1] = "Presentar una visi&oacute;n &uacute;nica de la informaci&oacute;n de una empresa.";
 choices[34][2] = "Permitir que los usuarios sean autosuficientes para satisfacer sus propias necesidades de informaci&oacute;n. ";
 choices[34][3] = "La informaci&oacute;n de una empresa se mantiene consistente, segura, actualizada y f&aacute;cilmente accesible. ";
 answers[34] = choices[34][0];
 units[34] = "68";
 comments[34] = "Id Pregunta: 1821. ";


//  Id pregunta: 1841 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  Se&ntilde;ale  la correcta:";
 choices[35]= new Array();
 choices[35][0] = "El protocolo de seguridad en comercio electr&oacute;nico  3D Secure es utilizado por Visa y MarterCard";
 choices[35][1] = "Visa utiliza el protocolo Verified by Visa";
 choices[35][2] = "MasterCard Secure Code es el protocolo utilizado por Master Card";
 choices[35][3] = "Todas las anteriores";
 answers[35] = choices[35][3];
 units[35] = "70";
 comments[35] = "Id Pregunta: 1841. NULL";


//  Id pregunta: 1856 AÃ±o de creación de pregunta: 2009-01-01
 questions[36]= "37)  Se&ntilde;ale la falsa:";
 choices[36]= new Array();
 choices[36][0] = "XML Encryption es un lenguaje cuya funci&oacute;n principal es asegurar la confidencialidad de partes de documentos XML a trav&eacute;s de la encriptaci&oacute;n parcial del documento transportado";
 choices[36][1] = "XML Encryption se puede aplicar a cualquier recurso Web, incluyendo contenido que no es XML.";
 choices[36][2] = "XML Encryption establece que es posible cifrar datos a distintos niveles de granularidad, desde elementos simples hasta documentos enteros";
 choices[36][3] = "Ninguna de las anteriores es correcta.";
 answers[36] = choices[36][3];
 units[36] = "72";
 comments[36] = "Id Pregunta: 1856. ";


//  Id pregunta: 1884 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  De acuerdo a la ley 34/2002, se&ntilde;ale la verdadera:";
 choices[37]= new Array();
 choices[37][0] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico u otro medio de comunicaci&oacute;n electr&oacute;nica equivalente previamente no solicitadas o expresamente autorizadas por los destinatarios de las mismas";
 choices[37][1] = "Es posible el env&iacute;o de comunicaciones publicitarias si existe relaci&oacute;n contractual previa ";
 choices[37][2] = "Para que sea v&aacute;lida la celebraci&oacute;n de contratos por v&iacute;a electr&oacute;nica no ser&aacute; necesario el previo acuerdo de las partes sobre la utilizaci&oacute;n de medios electr&oacute;nicos.";
 choices[37][3] = "Todas son verdaderas";
 answers[37] = choices[37][3];
 units[37] = "30";
 comments[37] = "Id Pregunta: 1884. NULL";


//  Id pregunta: 1903 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  Ejecuci&oacute;n continua y en parte solapada de instrucciones por parte del procesador";
 choices[38]= new Array();
 choices[38][0] = "flujo de datos";
 choices[38][1] = "multiplexado";
 choices[38][2] = "clustering";
 choices[38][3] = "pipelining";
 answers[38] = choices[38][3];
 units[38] = "46";
 comments[38] = "Id Pregunta: 1903. ";


//  Id pregunta: 1908 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  Se&ntilde;ale la afirmaci&oacute;n correcta respecto de la Taxonom&iacute;a de Flynn:";
 choices[39]= new Array();
 choices[39][0] = "Se trata de una clasificaci&oacute;n de arquitecturas de computadores en funci&oacute;n del tipo de acceso a memoria.";
 choices[39][1] = "Se trata de una clasificaci&oacute;n de arquitecturas de computadores en funci&oacute;n de la tipolog&iacute;a de flujos de datos e instrucciones.";
 choices[39][2] = "Se trata de una clasificaci&oacute;n de arquitecturas de computadores en funci&oacute;n de la capacidad de procesamiento.";
 choices[39][3] = "Se trata de una clasificaci&oacute;n de arquitecturas de computadores en funci&oacute;n del acoplamiento entre los distintos procesadores.";
 answers[39] = choices[39][1];
 units[39] = "45";
 comments[39] = "Id Pregunta: 1908. ";


//  Id pregunta: 1921 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  &iquest; Cu&aacute;l de las siguientes funciones no es compatible con un lenguaje de programamci&oacute;n orientado a objetos?";
 choices[40]= new Array();
 choices[40][0] = "Encapsulaci&oacute;n";
 choices[40][1] = "Herencia";
 choices[40][2] = "Polimorfismo";
 choices[40][3] = "Historicismo";
 answers[40] = choices[40][3];
 units[40] = "82";
 comments[40] = "Id Pregunta: 1921. ";


//  Id pregunta: 1926 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  El est&aacute;ndar DMI";
 choices[41]= new Array();
 choices[41][0] = "Permite la monitorizaci&oacute;n de determinadas funciones del PC";
 choices[41][1] = "Permite el control de las diferentes funciones de ahorro de energ&iacute;a de un PC";
 choices[41][2] = "Es un est&aacute;ndar de gesti&oacute;n de energ&iacute;a desarrollado por Intel, Microsoft y Toshiba";
 choices[41][3] = "Es una norma dirigida a dispositivos de alta velocidad";
 answers[41] = choices[41][0];
 units[41] = "47";
 comments[41] = "Id Pregunta: 1926. ";


//  Id pregunta: 1937 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  La Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica, establece como sanci&oacute;n por la comisi&oacute;n de infracciones graves:";
 choices[42]= new Array();
 choices[42][0] = "Multa de 30.001 a 150.000 euros";
 choices[42][1] = "Multa por importe m&aacute;ximo de 50.000 euros";
 choices[42][2] = "Multa de 150.001 a 600.000 euros";
 choices[42][3] = "Multa de 30.001 a 100.000 euros como m&aacute;ximo";
 answers[42] = choices[42][0];
 units[42] = "30";
 comments[42] = "Id Pregunta: 1937. Ley 59/2003, art&iacute;culo 32";


//  Id pregunta: 4275 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  &iquest;Cu&aacute;l de los siguientes sistemas operativos es un sistema orientado a objetos?";
 choices[43]= new Array();
 choices[43][0] = "Windows.";
 choices[43][1] = "Linux.";
 choices[43][2] = "OS/400.";
 choices[43][3] = "VMS";
 answers[43] = choices[43][2];
 units[43] = "52";
 comments[43] = "Id Pregunta: 4275. ";


//  Id pregunta: 4308 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  Se denomina &ldquo;Partici&oacute;n equivalente&rdquo; a:";
 choices[44]= new Array();
 choices[44][0] = "Una t&eacute;cnica de programaci&oacute;n modular donde el dominio de la aplicaci&oacute;n se subdivide en &aacute;reas funcionales de aproximadamente el mismo tama&ntilde;o";
 choices[44][1] = "Una t&eacute;cnica de pruebas de &ldquo;caja negra&rdquo; que divide el dominio de un programa en clases de datos de las que se pueden derivar casos de prueba.";
 choices[44][2] = "Una t&eacute;cnica de dise&ntilde;o orientado a objetos para mejorar la estructura de los programas reemplazando la herencia con mecanismos de delegaci&oacute;n.";
 choices[44][3] = "Una t&eacute;cnica de gesti&oacute;n del desarrollo de proyectos para la atribuci&oacute;n de la responsabilidad sobre las pruebas de la aplicaci&oacute;n";
 answers[44] = choices[44][1];
 units[44] = "88";
 comments[44] = "Id Pregunta: 4308. NULL";


//  Id pregunta: 4320 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  &iquest;Cu&aacute;l de los siguientes elementos se pueden anexar a archivos como una protecci&oacute;n contra los virus?";
 choices[45]= new Array();
 choices[45][0] = "Bloqueadores de conducta.";
 choices[45][1] = "Verificadores de redundancia c&iacute;clica (CRC)";
 choices[45][2] = "Inmunizadores.";
 choices[45][3] = "Monitores activos.";
 answers[45] = choices[45][2];
 units[45] = "";
 comments[45] = "Id Pregunta: 4320. ";


//  Id pregunta: 4343 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  Indique cu&aacute;l de las siguientes acciones no es funci&oacute;n de la Firma Electr&oacute;nica, de acuerdo con lo establecido en la Ley 59/2003:";
 choices[46]= new Array();
 choices[46][0] = "Identificar al remitente de un mensaje de manera fidedigna, asegurando su imputabilidad.";
 choices[46][1] = "Evitar accesos indeseados a su propio ordenador, por parte de terceros.";
 choices[46][2] = "Verificar que el mensaje no ha sido manipulado";
 choices[46][3] = "Almacenar la clave privada en el propio ordenador o una tarjeta criptogr&aacute;fica.";
 answers[46] = choices[46][1];
 units[46] = "30";
 comments[46] = "Id Pregunta: 4343. NULL";


//  Id pregunta: 4423 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  En relaci&oacute;n con la Ley 59/2003, de firma electr&oacute;nica, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[47]= new Array();
 choices[47][0] = "El prestador de servicios de certificaci&oacute;n ha de ser una persona jur&iacute;dica.";
 choices[47][1] = "Por resoluci&oacute;n administrativa puede suspenderse, pero no extinguirse, la vigencia de los certificados electr&oacute;nicos.";
 choices[47][2] = "Los certificados reconocidos deben incluir necesariamente, entre otros datos, la firma electr&oacute;nica avanzada del prestador de servicios de certificaci&oacute;n que expide el certificado.";
 choices[47][3] = "El DNI electr&oacute;nico acredita electr&oacute;nicamente la identidad personal de su titular, pero no permite la firma electr&oacute;nica de documentos.";
 answers[47] = choices[47][2];
 units[47] = "30";
 comments[47] = "Id Pregunta: 4423. Ley 59/2003, art&iacute;culo 11";


//  Id pregunta: 4821 AÃ±o de creación de pregunta: 2007-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l de las siguientes infracciones NO est&aacute; tipificada como muy grave seg&uacute;n la Ley 34/2002, de 11 de julio, deservicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico?";
 choices[48]= new Array();
 choices[48][0] = "El incumplimiento significativo de la obligaci&oacute;n de retener los datos de tr&aacute;fico generados por las comunicacionestablecidas durante la prestaci&oacute;n de un servicio de la sociedad de la informaci&oacute;n, prevista en el art&iacute;culo 12 dedicha Ley";
 choices[48][1] = "La utilizaci&oacute;n de los datos retenidos, en cumplimiento del art&iacute;culo 12 de dicha Ley, para fines distintos de losse&ntilde;alados en &eacute;l";
 choices[48][2] = "El incumplimiento de la obligaci&oacute;n de suspender la transmisi&oacute;n, el alojamiento de datos, el acceso a la red o laprestaci&oacute;n de cualquier otro servicio equivalente de intermediaci&oacute;n, cuando un &oacute;rgano administrativo competelo ordene, en virtud de lo dispuesto en el art&iacute;culo 11 de dicha Ley";
 choices[48][3] = "El env&iacute;o masivo de comunicaciones comerciales por correo electr&oacute;nico u otro medio de comunicaci&oacute;n electr&oacute;nequivalente o el env&iacute;o, en el plazo de un a&ntilde;o, de m&aacute;s de tres comunicaciones comerciales por los mediosaludidos a un mismo destinatario, cuando en dichos env&iacute;os no se cumplan los requisitos establecidos en elart&iacute;culo 21 de dicha Ley";
 answers[48] = choices[48][3];
 units[48] = "30";
 comments[48] = "Id Pregunta: 4821. Ley 34/2002, art&iacute;culo 38";


//  Id pregunta: 4826 AÃ±o de creación de pregunta: 2007-01-01
 questions[49]= "50)  En una aplicaci&oacute;n sobre arquitectura de tres capas, &iquest;d&oacute;nde se encuentran ubicadas las reglas de negocio?";
 choices[49]= new Array();
 choices[49][0] = "En el servidor de aplicaciones";
 choices[49][1] = "En el servidor de datos";
 choices[49][2] = "En el Cliente";
 choices[49][3] = "En el servidor http/ssl (Hipertext Transfer Protocol / Secure Sockets Layer)";
 answers[49] = choices[49][0];
 units[49] = "50";
 comments[49] = "Id Pregunta: 4826. ";


//  Id pregunta: 5057 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  &iquest;Qu&eacute; tipos de certificado est&aacute;n incluidos en el DNIe?:";
 choices[50]= new Array();
 choices[50][0] = "Autenticaci&oacute;n y firma";
 choices[50][1] = "Cifrado y firma";
 choices[50][2] = "Firma";
 choices[50][3] = "Cifrado, firma y autenticaci&oacute;n";
 answers[50] = choices[50][0];
 units[50] = "30";
 comments[50] = "Id Pregunta: 5057. Examen TIC A 2007 (RD 1553/2005, art&iacute;culo 11)";


//  Id pregunta: 5059 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  &iquest;Cu&aacute;l es el m&iacute;nimo n&uacute;mero de discos necesario para un sistema RAID 0+1?:";
 choices[51]= new Array();
 choices[51][0] = "2";
 choices[51][1] = "3";
 choices[51][2] = "4";
 choices[51][3] = "5";
 answers[51] = choices[51][2];
 units[51] = "48";
 comments[51] = "Id Pregunta: 5059. Examen TIC A 2007";


//  Id pregunta: 5070 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  &iquest;Cu&aacute;l de las afirmaciones siguientes es cierta con respecto a la t&eacute;cnica de gesti&oacute;n de memoria conocida como&quot;paginaci&oacute;n&quot;?:";
 choices[52]= new Array();
 choices[52][0] = "Consiste en determinar que espacio vac&iacute;o en la memoria principal es el mas indicado para ser asignado a unproceso";
 choices[52][1] = "El espacio de memoria se divide en secciones f&iacute;sicas de igual tama&ntilde;o llamadas marcos de pagina, lascuales sirven como unidad de almacenamiento de informaci&oacute;n";
 choices[52][2] = "Es la memoria que queda desperdiciada al usar los m&eacute;todos de gesti&oacute;n de memoria tales como laasignaci&oacute;n";
 choices[52][3] = "Es un esquema de manejo de memoria mediante el cual la estructura del programa refleja su divisi&oacute;n l&oacute;gica;llev&aacute;ndose a cabo una agrupaci&oacute;n l&oacute;gica de la informaci&oacute;n en bloques de tama&ntilde;o variable denominadossegmentos";
 answers[52] = choices[52][1];
 units[52] = "52";
 comments[52] = "Id Pregunta: 5070. Examen TIC A 2007";


//  Id pregunta: 5496 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  &iquest;Cu&aacute;les son los contenedores de la tecnolog&iacute;a Java EE?";
 choices[53]= new Array();
 choices[53][0] = "EJB Container y Web Container";
 choices[53][1] = "EJB Container, Web Container y Application Client Container";
 choices[53][2] = "b) y Applet Container";
 choices[53][3] = "Ninguna de las anteriores";
 answers[53] = choices[53][2];
 units[53] = "60";
 comments[53] = "Id Pregunta: 5496. NULL";


//  Id pregunta: 5631 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  Una soluci&oacute;n RISC se caracteriza por:";
 choices[54]= new Array();
 choices[54][0] = "Pocos formatos de instrucci&oacute;n (longitud fija)";
 choices[54][1] = "Muchos modos de direccionamiento";
 choices[54][2] = "Dos instrucciones de almacenamiento (load/store)";
 choices[54][3] = "Tanto a) como c)";
 answers[54] = choices[54][3];
 units[54] = "46";
 comments[54] = "Id Pregunta: 5631. ";


//  Id pregunta: 5634 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  Se&ntilde;ale cu&aacute;l de las siguientes opciones es correcta:";
 choices[55]= new Array();
 choices[55][0] = "El bus ISA es posterior al bus PCI";
 choices[55][1] = "El bus EISA es anterior al bus ISA";
 choices[55][2] = "El bus PCI es anterior al bus AGP";
 choices[55][3] = "El bus USB es posterior al bus AGP";
 answers[55] = choices[55][2];
 units[55] = "47";
 comments[55] = "Id Pregunta: 5634. ";


//  Id pregunta: 5642 AÃ±o de creación de pregunta: 2003-01-01
 questions[56]= "57)  Se&ntilde;ale cu&aacute;l de los siguientes es el protocolo utilizado para el registro y publicaci&oacute;n de servicios web:";
 choices[56]= new Array();
 choices[56][0] = "SOAP";
 choices[56][1] = "UDDI";
 choices[56][2] = "WSDL";
 choices[56][3] = "UDIT";
 answers[56] = choices[56][1];
 units[56] = "51";
 comments[56] = "Id Pregunta: 5642. NULL";


//  Id pregunta: 5685 AÃ±o de creación de pregunta: 2003-01-01
 questions[57]= "58)  &iquest;En qu&eacute; consiste el eRecord Management?";
 choices[57]= new Array();
 choices[57][0] = "Gesti&oacute;n de documentos de tipo registro";
 choices[57][1] = "Destrucci&oacute;n controlada de informaci&oacute;n electr&oacute;nica";
 choices[57][2] = "Gesti&oacute;n de documentos importantes para una organizaci&oacute;n";
 choices[57][3] = "Almacenamiento con codificaci&oacute;n sim&eacute;trica de registros";
 answers[57] = choices[57][2];
 units[57] = "95";
 comments[57] = "Id Pregunta: 5685. NULL";


//  Id pregunta: 6084 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  &iquest;Qu&eacute; se entiende por SOI (Infraestructura Orientada a Servicios)?";
 choices[58]= new Array();
 choices[58][0] = "Una colecci&oacute;n de recursos de hardware y software que soportan la implantaci&oacute;n y el desarrollo de la arquitectura SOA.";
 choices[58][1] = "Se trata de una colecci&oacute;n de recursos de hardware y software que suponen una alternativa a SOA.";
 choices[58][2] = "Se trata de un concepto para el que &quot;The Open Group&quot; ha abierto un proyecto dentro del grupo de trabajo de SOA.";
 choices[58][3] = "Tanto A y C son correctas.";
 answers[58] = choices[58][3];
 units[58] = "51";
 comments[58] = "Id Pregunta: 6084. NULL";


//  Id pregunta: 6181 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  Indique la afirmaci&oacute;n verdadera";
 choices[59]= new Array();
 choices[59][0] = "El resultado de una modelizaci&oacute;n de procesos en BPMN debe ser expresado en BPML, BPEL o XPDL.";
 choices[59][1] = "El resultado de una modelizaci&oacute;n de procesos en BPML debe ser expresado en BPMN, BPEL o XPDL.";
 choices[59][2] = "El resultado de una modelizaci&oacute;n de procesos en BPEL debe ser expresado en BPML, BPMN o XPDL.";
 choices[59][3] = "El resultado de una modelizaci&oacute;n de procesos en XPDL debe ser expresado en BPML, BPEL o BPMN.";
 answers[59] = choices[59][0];
 units[59] = "71";
 comments[59] = "Id Pregunta: 6181. ";


//  Id pregunta: 6247 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  &iquest;Qu&eacute; m&oacute;dulo de Apache se incluye para aportar seguridad a Axis2?";
 choices[60]= new Array();
 choices[60][0] = "My Sql";
 choices[60][1] = "Php";
 choices[60][2] = "Rampart";
 choices[60][3] = "Addressing";
 answers[60] = choices[60][2];
 units[60] = "60";
 comments[60] = "Id Pregunta: 6247. TICB-2009, bloque desarrollo";


//  Id pregunta: 6426 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  &iquest;Cu&aacute;l de las siguientes aplicaciones de software libre sirve para la edici&oacute;n profesional de im&aacute;genes?";
 choices[61]= new Array();
 choices[61][0] = "GIMP";
 choices[61][1] = "Celtx";
 choices[61][2] = "Nvu";
 choices[61][3] = "Rhythmbox";
 answers[61] = choices[61][0];
 units[61] = "62";
 comments[61] = "Id Pregunta: 6426. NULL";


//  Id pregunta: 6553 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  PKCS#7 se centra en";
 choices[62]= new Array();
 choices[62][0] = "El formato del sobre digital";
 choices[62][1] = "La especificaci&oacute;n de un interfaz de acceso a dispositivos que almacenan informaci&oacute;n";
 choices[62][2] = "Especifica un formato portable para almacenar o transportar las claves privadas de un usuario";
 choices[62][3] = "Todas las respuestas anteriores son correctas";
 answers[62] = choices[62][0];
 units[62] = "74";
 comments[62] = "Id Pregunta: 6553. NULL";


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


//  Id pregunta: 7299 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  Indique cu&aacute;l de las siguientes es una medida de centralidad en una red social:";
 choices[64]= new Array();
 choices[64][0] = "Grado (degree)";
 choices[64][1] = "Cercan&iacute;a (closeness)";
 choices[64][2] = "Intermediaci&oacute;n (betweenness)";
 choices[64][3] = "Todas son medidas de centralidad";
 answers[64] = choices[64][3];
 units[64] = "63";
 comments[64] = "Id Pregunta: 7299. ";


//  Id pregunta: 8196 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  Se&ntilde;ale cu&aacute;l NO es uno de los conjuntos de metadatos que manejan los SIG (Sistemas de Informaci&oacute;n Geogr&aacute;fica): ";
 choices[65]= new Array();
 choices[65][0] = "Metadatos de explotaci&oacute;n. ";
 choices[65][1] = "Metadatos de descubrimiento. ";
 choices[65][2] = "Metadatos de exploraci&oacute;n. ";
 choices[65][3] = "Metadatos de representaci&oacute;n.";
 answers[65] = choices[65][3];
 units[65] = "67";
 comments[65] = "Id Pregunta: 8196. Examen TIC A1 2010";


//  Id pregunta: 8252 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  Cuando existe particionado a nivel de byte, m&aacute;s un disco de paridad dedicado, se trata de:";
 choices[66]= new Array();
 choices[66][0] = "RAID 3.";
 choices[66][1] = "RAID 4.";
 choices[66][2] = "RAID 5.";
 choices[66][3] = "RAID 6.";
 answers[66] = choices[66][0];
 units[66] = "48";
 comments[66] = "Id Pregunta: 8252. Examen TIC A1 2010";


//  Id pregunta: 8410 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  &iquest;Cu&aacute;l de las siguientes pol&iacute;ticas de planificaci&oacute;n es de tipo preemptive? ";
 choices[67]= new Array();
 choices[67][0] = "Shortest Job First (SJF)";
 choices[67][1] = "Shortest Remaining Time First (SRTF). ";
 choices[67][2] = "First-come, first-served (FCFS)";
 choices[67][3] = "Shortest Process Next (SPN). ";
 answers[67] = choices[67][1];
 units[67] = "52";
 comments[67] = "Id Pregunta: 8410. Examen TIC A2 2010";


//  Id pregunta: 8617 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  &iquest;Cu&aacute;l de las siguientes NO es una funci&oacute;n del administrador de bases de datos?";
 choices[68]= new Array();
 choices[68][0] = "Dise&ntilde;ar la arquitectura de balanceo de carga de las aplicaciones instaladas en una granja de servidores.";
 choices[68][1] = "Balancear la distribuci&oacute;n de los datos entre los dispositivos de almacenamiento";
 choices[68][2] = "Optimizar las cargas masivas de datos, ya sean iniciales o parciales.";
 choices[68][3] = "Gestionar permisos y roles de usuarios para que sean los necesarios para sus funciones y se garantice la confidencialidad e integridad de los datos";
 answers[68] = choices[68][0];
 units[68] = "57,58";
 comments[68] = "Id Pregunta: 8617. Examen TIC A2 2010 interna";


//  Id pregunta: 8630 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  &iquest;Cu&aacute;l de las siguientes es una regla de Codd?";
 choices[69]= new Array();
 choices[69][0] = "Regla de la no subversi&oacute;n.";
 choices[69][1] = "Regla de la no concurrencia.";
 choices[69][2] = "Regla de la restricci&oacute;n.";
 choices[69][3] = "Regla de la no replicaci&oacute;n de Informaci&oacute;n.";
 answers[69] = choices[69][0];
 units[69] = "57, 58";
 comments[69] = "Id Pregunta: 8630. Examen TIC A2 2010 interna";


//  Id pregunta: 8896 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  &iquest;Qu&eacute; grupos de operaciones est&aacute;n definidas en el modelo funcional de LDAP?";
 choices[70]= new Array();
 choices[70][0] = "De consulta, de actualizaci&oacute;n y de b&uacute;squeda";
 choices[70][1] = "De b&uacute;squeda, de actualizaci&oacute;n y de control";
 choices[70][2] = "De consulta, de actualizaci&oacute;n y de autenticaci&oacute;n y control";
 choices[70][3] = "De comparaci&oacute;n, de consulta y de b&uacute;squeda";
 answers[70] = choices[70][1];
 units[70] = "74";
 comments[70] = "Id Pregunta: 8896. NULL";


//  Id pregunta: 8908 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  La unidad Aritm&eacute;tico-L&oacute;gica (ALU):";
 choices[71]= new Array();
 choices[71][0] = "Contiene las instrucciones del programa.";
 choices[71][1] = "Contienen los datos de la aplicaci&oacute;n.";
 choices[71][2] = "Realiza las operaciones matem&aacute;ticas.";
 choices[71][3] = "Controla los dispositivos l&oacute;gicos a los que accede la CPU";
 answers[71] = choices[71][2];
 units[71] = "47";
 comments[71] = "Id Pregunta: 8908. Operador Ayto. Madrid 2010";


//  Id pregunta: 8917 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  &iquest;Cu&aacute;ndo una relaci&oacute;n est&aacute; en Tercera Forma Normal?:";
 choices[72]= new Array();
 choices[72][0] = "Cuando est&aacute; en Segunda Forma Normal y adem&aacute;s no tiene grupos repetitivos.";
 choices[72][1] = "Cuando est&aacute; en Segunda Forma Normal y adem&aacute;s todos los atributos que no forman parte de la clave primaria tienen dependencia funcional completa respecto de cada una de las claves.";
 choices[72][2] = "Cuando est&aacute; en Segunda Forma Normal y adem&aacute;s no hay dependencias funcionales transitivas respecto de la clave primaria.";
 choices[72][3] = "Cuando est&aacute; en Segunda Forma Normal y la clave primaria no est&aacute; formada por un &uacute;nico atributo";
 answers[72] = choices[72][2];
 units[72] = "58";
 comments[72] = "Id Pregunta: 8917. Operador Ayto. Madrid 2010";


//  Id pregunta: 8951 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  &iquest;Qu&eacute; situaci&oacute;n se da si la direcci&oacute;n virtual y su correspondiente f&iacute;sica coincide?";
 choices[73]= new Array();
 choices[73][0] = "El sistema carece de memoria virtual";
 choices[73][1] = "El sistema no es multiprogramado";
 choices[73][2] = "El espacio l&oacute;gico y el f&iacute;sico del proceso es el mismo";
 choices[73][3] = "Todas las anteriores son falsas";
 answers[73] = choices[73][2];
 units[73] = "53,54";
 comments[73] = "Id Pregunta: 8951. ";


//  Id pregunta: 8961 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  Se&ntilde;ale cu&aacute;l de los siguientes no se corresponde con un est&aacute;ndar de Sistemas Geogr&aacute;ficos de Informaci&oacute;n:";
 choices[74]= new Array();
 choices[74][0] = "ISO 19115.";
 choices[74][1] = "ISO 19130.";
 choices[74][2] = "ISO 23950.";
 choices[74][3] = "Todos son est&aacute;ndares de sistemas SIG.";
 answers[74] = choices[74][3];
 units[74] = "67";
 comments[74] = "Id Pregunta: 8961. NULL";


//  Id pregunta: 8962 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  En los Esquemas de copo de nieve:";
 choices[75]= new Array();
 choices[75][0] = "Existe redundancia.";
 choices[75][1] = "No se ahorra espacio.";
 choices[75][2] = "No existe una tabla de hechos central.";
 choices[75][3] = "Las tablas est&aacute;n normalizadas.";
 answers[75] = choices[75][3];
 units[75] = "68";
 comments[75] = "Id Pregunta: 8962. ";


//  Id pregunta: 9095 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  Cuando un trabajador asalariado crea un programa de ordenador, en el ejercicio de sus funciones:";
 choices[76]= new Array();
 choices[76][0] = "Los derechos de explotaci&oacute;n pertenecen al trabajador salvo pacto en contrario";
 choices[76][1] = "Los derechos de explotaci&oacute;n pertenecen al empresario salvo pacto en contrario";
 choices[76][2] = "Los derechos morales pertenecen al trabajador salvo pacto en contrario";
 choices[76][3] = "Los derechos morales pertenecen al empresario salvo pacto en contrario";
 answers[76] = choices[76][1];
 units[76] = "36";
 comments[76] = "Id Pregunta: 9095. ";


//  Id pregunta: 9102 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  &iquest;Cu&aacute;l de los siguientes es un tipo de huella digital?";
 choices[77]= new Array();
 choices[77][0] = "Huella sim&eacute;trica.";
 choices[77][1] = "Huella asim&eacute;trica.";
 choices[77][2] = "Huella an&oacute;nima.";
 choices[77][3] = "Todas las anteriores son verdaderas.";
 answers[77] = choices[77][3];
 units[77] = "37";
 comments[77] = "Id Pregunta: 9102. ";


//  Id pregunta: 9135 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  &iquest;Para qu&eacute; se tiene instalado el software b&aacute;sico que se denomina BIOS?";
 choices[78]= new Array();
 choices[78][0] = "Es un software que se almacena en EPROM pero que no se puede considerar b&aacute;sico";
 choices[78][1] = "Se refresca cada vez que arranca el PC";
 choices[78][2] = "Es el primer software que se ejecuta en el proceso de arranque de una placa base";
 choices[78][3] = "No se puede reprogramar";
 answers[78] = choices[78][2];
 units[78] = "47";
 comments[78] = "Id Pregunta: 9135. ";


//  Id pregunta: 9147 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  &iquest;Por qu&eacute; la memorias flash de tipo es mucho m&aacute;s r&aacute;pida que las EEPROM convencionales?";
 choices[79]= new Array();
 choices[79][0] = "Es falso. Las memorias EEPROM convencionales son mucho m&aacute;s r&aacute;pidas";
 choices[79][1] = "Se escriben bloques enteros para agilizar el proceso";
 choices[79][2] = "Para el borrado, se limpian bloques enteros para agilizar el proceso, ya que es la parte m&aacute;s lenta del proceso.";
 choices[79][3] = "Borran bit a bit.";
 answers[79] = choices[79][2];
 units[79] = "47";
 comments[79] = "Id Pregunta: 9147. ";


//  Id pregunta: 9169 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  Una empresa tiene una p&aacute;gina web con informaci&oacute;n sobre su actividad, productos, y servicios que vende, pero &eacute;stos no se pueden comprar a trav&eacute;s de su p&aacute;gina web. &iquest;Le afectan a la empresa las obligaciones establecidas en la Ley de Servicios de la Sociedad de la Informaci&oacute;n para los prestadores de servicios?";
 choices[80]= new Array();
 choices[80][0] = "S&iacute;, ya que se trata de una actividad con trascendencia econ&oacute;mica que se realiza por medios electr&oacute;nicos";
 choices[80][1] = "No, al no haber venta directa de productos por medios electr&oacute;nicos";
 choices[80][2] = "Si, cualquier servicio que se preste a trav&eacute;s de internet incurre en estas obligaciones";
 choices[80][3] = "No, la ley no establece obligaciones para los prestadores de servicios";
 answers[80] = choices[80][0];
 units[80] = "70";
 comments[80] = "Id Pregunta: 9169. Examen TIC A2 2011";


//  Id pregunta: 9173 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  Respecto a la normativa de facturaci&oacute;n, se&ntilde;ale la respuesta INCORRECTA:";
 choices[81]= new Array();
 choices[81][0] = "El Real Decreto 1619/2012 regula las obligaciones de facturaci&oacute;n desde el 1 de enero de 2014";
 choices[81][1] = "No se exigir&aacute; la obligaci&oacute;n de expedir factura en el caso de determinadas prestaciones de servicios financieros y de seguros, salvo cuando dichas operaciones se entiendan realizadas en el territorio de aplicaci&oacute;n del Impuesto, o en otro Estado miembro de la Uni&oacute;n Europea, y est&eacute;n sujetas y no exentas.";
 choices[81][2] = "Se establece un sistema de facturaci&oacute;n basado en dos tipos de facturas: la factura completa u ordinaria y la factura simplificada, que viene a sustituir a los denominados tiques.";
 choices[81][3] = "Todas son verdaderas";
 answers[81] = choices[81][0];
 units[81] = "70";
 comments[81] = "Id Pregunta: 9173. ";


//  Id pregunta: 9206 AÃ±o de creación de pregunta: 2013-01-01
 questions[82]= "83)  &iquest;En que lenguaje est&aacute; basado el lenguaje de expresi&oacute;n de derechos REL?";
 choices[82]= new Array();
 choices[82][0] = "XcML";
 choices[82][1] = "XrML";
 choices[82][2] = "XMCL";
 choices[82][3] = "XsML";
 answers[82] = choices[82][1];
 units[82] = "37";
 comments[82] = "Id Pregunta: 9206. ";


//  Id pregunta: 9627 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  En el sistema operativo UNIX la expresi&oacute;n &ldquo;daemon&rdquo; se refiere a un proceso del sistema que:";
 choices[83]= new Array();
 choices[83][0] = "Siempre se ejecuta en segundo plano (background)";
 choices[83][1] = "Siempre es de corta duraci&oacute;n";
 choices[83][2] = "Est&aacute; siempre ejecut&aacute;ndose";
 choices[83][3] = "nunca se ejecuta bajo control de los subsistemas de temporarizaci&oacute;n. ";
 answers[83] = choices[83][0];
 units[83] = "53";
 comments[83] = "Id Pregunta: 9627. Examen TIC A1 2013";


//  Id pregunta: 9688 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  Un almac&eacute;n de datos almacena:";
 choices[84]= new Array();
 choices[84][0] = "S&oacute;lo informaci&oacute;n actual.";
 choices[84][1] = "Informaci&oacute;n no vol&aacute;til.";
 choices[84][2] = "Informaci&oacute;n actual e hist&oacute;rica.";
 choices[84][3] = "B y C son correctas.";
 answers[84] = choices[84][2];
 units[84] = "68";
 comments[84] = "Id Pregunta: 9688. ";


//  Id pregunta: 9743 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Se&ntilde;ale, entre los siguientes, cu&aacute;l es un cliente WebDAV de l&iacute;nea de comandos para entornos Unix:";
 choices[85]= new Array();
 choices[85][0] = "cadaver";
 choices[85][1] = "audacity";
 choices[85][2] = "mahout";
 choices[85][3] = "CalDAV";
 answers[85] = choices[85][0];
 units[85] = "54";
 comments[85] = "Id Pregunta: 9743. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9778 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  &iquest;Con qu&eacute; directiva se declara una p&aacute;gina maestra en ASP.Net?";
 choices[86]= new Array();
 choices[86][0] = "Master";
 choices[86][1] = "MasterPage";
 choices[86][2] = "Master.Page";
 choices[86][3] = "Page ";
 answers[86] = choices[86][0];
 units[86] = "59, 115";
 comments[86] = "Id Pregunta: 9778. Examen TIC A2 2013";


//  Id pregunta: 10011 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  &iquest;Que disposici&oacute;n legal determina el procedimiento para la expedici&oacute;n del DNI electr&oacute;nico y sus certificados de firma electr&oacute;nica?";
 choices[87]= new Array();
 choices[87][0] = "Ley 11/2007, de 22 de junio.";
 choices[87][1] = "RD 4/2010, de 8 de enero.";
 choices[87][2] = "RD 1553/2005, de 23 de diciembre.";
 choices[87][3] = "Ley 26/2007, de 28 de diciembre.";
 answers[87] = choices[87][2];
 units[87] = "70";
 comments[87] = "Id Pregunta: 10011. ";


//  Id pregunta: 10172 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  Respecto los distintos tipos de drivers JDBC, se verifica que:";
 choices[88]= new Array();
 choices[88][0] = "Los drivers JDBC de tipo III son recomendables si la aplicaci&oacute;n Java ha de acceder a diferentes bases de datos o se desconoce el SGBD destino";
 choices[88][1] = "El uso de drivers JDBC de tipo IV evita problemas de dependencia tecnol&oacute;gica del fabricante";
 choices[88][2] = "Al permitir que la aplicaci&oacute;n Java interact&uacute;e con diferentes SGBD, un driver de tipo III no es 100% Java, ya que incluye c&oacute;digo espec&iacute;fico o nativo de cada SGBD";
 choices[88][3] = "Todas las anteriores";
 answers[88] = choices[88][0];
 units[88] = "58";
 comments[88] = "Id Pregunta: 10172. ";


//  Id pregunta: 10275 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  Los agentes inteligentes, seg&uacute;n su capacidad para resolver problemas, pueden ser:";
 choices[89]= new Array();
 choices[89][0] = "Reactivos";
 choices[89][1] = "Predictivos";
 choices[89][2] = "Ambas";
 choices[89][3] = "Ninguna";
 answers[89] = choices[89][0];
 units[89] = "63";
 comments[89] = "Id Pregunta: 10275. NULL";


//  Id pregunta: 10467 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  &iquest;Cu&aacute;l es el DOCTYPE que se usa en HTML5?";
 choices[90]= new Array();
 choices[90][0] = "&lt;!DOCTYPE html&gt;";
 choices[90][1] = "&lt;!DOCTYPE html5&gt;";
 choices[90][2] = "&lt;!DOCTYPE&gt; y &lt;!DOCTYPE html5&gt;";
 choices[90][3] = "&lt;!DOCTYPE html&gt; y &lt;!DOCTYPE html5&gt;";
 answers[90] = choices[90][0];
 units[90] = "69";
 comments[90] = "Id Pregunta: 10467. NULL";


//  Id pregunta: 10532 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  &iquest;Cu&aacute;l de los siguientes grupos de propiedades son caracter&iacute;sticos de Cloud Computing?";
 choices[91]= new Array();
 choices[91][0] = "tenencia m&uacute;ltiple, escalabilidad, elasticidad, independencia de la localizaci&oacute;n";
 choices[91][1] = "A) m&aacute;s reusabilidad";
 choices[91][2] = "B) m&aacute;s interoperabilidad";
 choices[91][3] = "C) m&aacute;s desacoplamiento";
 answers[91] = choices[91][0];
 units[91] = "47";
 comments[91] = "Id Pregunta: 10532. NULL";


//  Id pregunta: 10872 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Qu&eacute; es Navicat Premium en el entorno de administraci&oacute;n de bases de datos?";
 choices[92]= new Array();
 choices[92][0] = "Es un conjunto de herramientas multiplataforma de software libre creado para ayudar a los administradores y desarrolladores de aplicaciones de bases de datos Oracle. Tambi&eacute;n suministra soporte para MySQL y PostgreSQL.";
 choices[92][1] = "Es una herramienta de IBM que permite realizar administraci&oacute;n remota de bases de datos.";
 choices[92][2] = "Es una base de datos NoSQL distribuida y basada en un modelo de almacenamiento de clave-valor, escrita en Java.";
 choices[92][3] = "Es un administrador de bases de datos propietario, de m&uacute;ltiples conexiones, que permite conectarse a diversas bases de datos como MySQL, MariaDB, SQL Server, etc. Simult&aacute;neamente en una sola aplicaci&oacute;n.";
 answers[92] = choices[92][3];
 units[92] = "57";
 comments[92] = "Id Pregunta: 10872. Examen GSI 2014";


//  Id pregunta: 10962 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Respecto al formato de factura electr&oacute;nica Facturae 3.2, se&ntilde;ale la respuesta correcta:";
 choices[93]= new Array();
 choices[93][0] = "Es de tipo PDF-A, para facilitar su impresi&oacute;n.";
 choices[93][1] = "Es un formato certificado con la Norma SICRES 3.0, para la compatibilidad e interconexi&oacute;n de los Registros Contables de Facturas.";
 choices[93][2] = "Es un formato no estructurado compuesto por dos bloques obligatorios y cuatro opcionales.";
 choices[93][3] = "Incluye firma Electr&oacute;nica en XML Advanced Electronic Signature (XADES)";
 answers[93] = choices[93][3];
 units[93] = "70";
 comments[93] = "Id Pregunta: 10962. TIC A1 AGE 2014";


//  Id pregunta: 11053 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l NO es una extensi&oacute;n v&aacute;lida para certificados?";
 choices[94]= new Array();
 choices[94][0] = ".PFX";
 choices[94][1] = ".DER";
 choices[94][2] = ".P7B";
 choices[94][3] = "Todos lo son";
 answers[94] = choices[94][3];
 units[94] = "73";
 comments[94] = "Id Pregunta: 11053. ";


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


//  Id pregunta: 11217 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  En relaci&oacute;n con las interfaces de programaci&oacute;n para crear GUI en Java:";
 choices[96]= new Array();
 choices[96][0] = "La&nbsp;Java Foundation Classes&nbsp;(JFC) es un framework gr&aacute;fico para construir interfaces gr&aacute;ficas de usuario (GUIs)  basadas en&nbsp;Java y est&aacute; compuesto por AWT,Swing&nbsp;y&nbsp;Java 2D.";
 choices[96][1] = "Aunque Swing est&aacute; basado en AWT, se trata de una implementaci&oacute;n de controles gr&aacute;ficos en Java puro.";
 choices[96][2] = "JavaFX, aunque est&aacute; incluido en el JDK/JRE, no est&aacute; basado en ninguna especificaci&oacute;n est&aacute;ndar JSR sino que es un producto de Oracle.";
 choices[96][3] = "Todas las respuestas son verdaderas.";
 answers[96] = choices[96][3];
 units[96] = "60";
 comments[96] = "Id Pregunta: 11217. ";


//  Id pregunta: 11509 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Cu&aacute;l de los siguientes NO hace referencia a un proyecto de Big Data?";
 choices[97]= new Array();
 choices[97][0] = "Flume";
 choices[97][1] = "Cassandra";
 choices[97][2] = "Galenicum";
 choices[97][3] = "Hbase";
 answers[97] = choices[97][2];
 units[97] = "68";
 comments[97] = "Id Pregunta: 11509. NULL";


//  Id pregunta: 11604 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  La versi&oacute;n de Android 6.0 recibe el nombre de:";
 choices[98]= new Array();
 choices[98][0] = "Lollipop";
 choices[98][1] = "Marshmallow";
 choices[98][2] = "McFlurry";
 choices[98][3] = "Cupcake";
 answers[98] = choices[98][1];
 units[98] = "46";
 comments[98] = "Id Pregunta: 11604. ";


//  Id pregunta: 11679 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  El comando top de Linux permite:";
 choices[99]= new Array();
 choices[99][0] = "Moverse por una b&uacute;squeda";
 choices[99][1] = "Acceder al directorio inmediatamente inferior";
 choices[99][2] = "Conocer el consumo de CPU de todos los procesos";
 choices[99][3] = "Todas las anteriores son falsas";
 answers[99] = choices[99][2];
 units[99] = "53, 54";
 comments[99] = "Id Pregunta: 11679. ";


