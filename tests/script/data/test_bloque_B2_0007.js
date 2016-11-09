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

//  Id pregunta: 751 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  El lenguaje Java Script:";
 choices[0]= new Array();
 choices[0][0] = "Permite escribir c&oacute;digo que se compila en el servidor para su ejecuci&oacute;n en el cliente";
 choices[0][1] = "Es interpretado por el navegador cuando se abre un fichero virtual en el que se encuentra c&oacute;digo javascript embebido";
 choices[0][2] = "S&oacute;lo puede ser compilado si el cliente tiene instalada una m&aacute;quina virtual java (JVM)";
 choices[0][3] = "Se ejecuta en la m&aacute;quina cliente una vez que ha sido descargado en forma de applets, ejecutables en cualquier m&aacute;quina";
 answers[0] = choices[0][1];
 units[0] = "61";
 comments[0] = "Id Pregunta: 751. Examen TIC MAP B 2004";


//  Id pregunta: 763 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  SOAP (Simple Object Access protocol):";
 choices[1]= new Array();
 choices[1][0] = "En un protocolo de programaci&oacute;n orientado a la plataforma .net de Microsoft (COM)";
 choices[1][1] = "Es un protocolo de intercambio electr&oacute;nico de datos EDI ya en desuso y que se utiliz&oacute; en redes orientados a paquetes del tipo X.25";
 choices[1][2] = "Es un protocolo basado en XML que permite invocar m&eacute;todos, servicios, componentes y objetos sobre servidores remotos utilizando HTTP";
 choices[1][3] = "Es un protocolo de acceso a bases de datos orientadas a objetos con el cual Microsoft Corporation ha anunciado recientemente sque se incorporar&aacute; a la comunidad SW de fuentes abiertas";
 answers[1] = choices[1][2];
 units[1] = "52";
 comments[1] = "Id Pregunta: 763. ";


//  Id pregunta: 788 AÃ±o de creación de pregunta: 2009-01-01
 questions[2]= "3)  Seg&uacute;n la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, los datos de tr&aacute;fico deben retenerse por un periodo de:";
 choices[2]= new Array();
 choices[2][0] = "doce meses computados desde la fecha en que se haya producido la comunicaci&oacute;n. Reglamentariamente, previa consulta a los operadores, se podr&aacute; ampliar o reducir el plazo de conservaci&oacute;n para determinados datos o una categor&iacute;a de datos hasta un m&aacute;ximo de dos a&ntilde;os o un m&iacute;nimo de seis meses.";
 choices[2][1] = "doce meses computados desde la fecha en que se haya producido la comunicaci&oacute;n. Reglamentariamente, previa consulta a los operadores, se podr&aacute; ampliar o reducir el plazo de conservaci&oacute;n para determinados datos o una categor&iacute;a de datos hasta un m&aacute;ximo de dieciocho meses o un m&iacute;nimo de seis meses.";
 choices[2][2] = "La Ley lo fijar&aacute; reglamentariamente";
 choices[2][3] = "12 meses m&iacute;nimo para los proveedores de redes (carriers) y 24 meses m&iacute;nimo para los proveedores de acceso a internet y de alojamiento";
 answers[2] = choices[2][0];
 units[2] = "30";
 comments[2] = "Id Pregunta: 788. articulo 5";


//  Id pregunta: 794 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;Qu&eacute; significan las siglas ASIC en el mundo de la arquitectura de computadores?:";
 choices[3]= new Array();
 choices[3][0] = "Circuitos integrados especializados";
 choices[3][1] = "Advanced Set Instructions Complex";
 choices[3][2] = "Nada";
 choices[3][3] = "Procesadores generales";
 answers[3] = choices[3][0];
 units[3] = "45";
 comments[3] = "Id Pregunta: 794. ";


//  Id pregunta: 824 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;A qu&eacute; hace referencia el est&aacute;ndar LDAP?:";
 choices[4]= new Array();
 choices[4][0] = "Comprensi&oacute;n de datos";
 choices[4][1] = "Directorio electr&oacute;nico";
 choices[4][2] = "Comprensi&oacute;n de datos";
 choices[4][3] = "Protocolo de transporte OSI";
 answers[4] = choices[4][1];
 units[4] = "73";
 comments[4] = "Id Pregunta: 824. ";


//  Id pregunta: 863 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;Cu&aacute;l de los siguientes entornos UNIX  no puede ser considerado como SVR4?:";
 choices[5]= new Array();
 choices[5][0] = "4.2 BSD";
 choices[5][1] = "Solaris 2.3";
 choices[5][2] = "Unixware";
 choices[5][3] = "HP-UX";
 answers[5] = choices[5][0];
 units[5] = "53";
 comments[5] = "Id Pregunta: 863. ";


//  Id pregunta: 932 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Qu&eacute; es un monitor de teleproceso?:";
 choices[6]= new Array();
 choices[6][0] = "Un sistema operativo de proceso de transacciones";
 choices[6][1] = "Un sistema de gesti&oacute;n de la configuraci&oacute;n";
 choices[6][2] = "Una herramienta de monitorizaci&oacute;n del rendimiento";
 choices[6][3] = "Un sistema de procesamiento as&iacute;ncrono";
 answers[6] = choices[6][0];
 units[6] = "50";
 comments[6] = "Id Pregunta: 932. ";


//  Id pregunta: 1009 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  El control de la ejecuci&oacute;n de un programa JCL se realiza por medio de:";
 choices[7]= new Array();
 choices[7][0] = "El subsistema del control de trabajos del sistema operativo";
 choices[7][1] = "El cortafuegos";
 choices[7][2] = "El subsistema de seguridad Kerberos";
 choices[7][3] = "El filtro de paquetes IP";
 answers[7] = choices[7][0];
 units[7] = "52";
 comments[7] = "Id Pregunta: 1009. ";


//  Id pregunta: 1013 AÃ±o de creación de pregunta: 2003-01-01
 questions[8]= "9)  El Directorio Activo de Windows 2003:";
 choices[8]= new Array();
 choices[8][0] = "Permite crear repositorios virtuales en el mismo disco duro de un &uacute;nico servidor activo";
 choices[8][1] = "Permite crear vol&uacute;menes virtuales que pueden estar repartidos en varios discos de distintos ordenadores";
 choices[8][2] = "Permite crear un repositorio en el cual almacenar todala informaci&oacute;n relevante de la empresa en cuanto a su estructura";
 choices[8][3] = "Permite crear un volumen virtual que se active por requerimiento de los directivos de la empresa";
 answers[8] = choices[8][2];
 units[8] = "56";
 comments[8] = "Id Pregunta: 1013. ";


//  Id pregunta: 1017 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  El Gartner Group:";
 choices[9]= new Array();
 choices[9][0] = "Es una organizaci&oacute;n de expertos que analiza las diferentes tendencias en base a estimaciones porcentuales.";
 choices[9][1] = "Es una organizaci&oacute;n de normalizaci&oacute;n en tecnolog&iacute;as de la informaci&oacute;n.";
 choices[9][2] = "Est&aacute; constitu&iacute;da como una organizaci&oacute;n de usuarios Unix que analiza y eval&uacute;a los productos que aparecen en el mercado sobre dicho sistema operativo.";
 choices[9][3] = "Es una organizaci&oacute;n que presenta benchmarks sobre equipos Unix.";
 answers[9] = choices[9][0];
 units[9] = "";
 comments[9] = "Id Pregunta: 1017. ";


//  Id pregunta: 1080 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  En el entorno de Bases de Datos, los &iacute;ndices son de vital importancia en las transacciones de acceso &iquest;Cu&aacute;l de las siguientes afirmaciones no es cierta?:";
 choices[10]= new Array();
 choices[10][0] = "El &iacute;ndice tambi&eacute;n es una tabla almacenada en disco";
 choices[10][1] = "Las tablas de &iacute;ndices se actualizan cuando se actualizan las tablas de datos";
 choices[10][2] = "La actualizaci&oacute;n de las tablas de &iacute;ndices es transparente al usuario";
 choices[10][3] = "Las actualizaciones de &iacute;ndices no consumen recursos";
 answers[10] = choices[10][3];
 units[10] = "57";
 comments[10] = "Id Pregunta: 1080. ";


//  Id pregunta: 1115 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  En las escala de integraci&oacute;n ULSI significa:";
 choices[11]= new Array();
 choices[11][0] = "Ultima Large Scale Integration";
 choices[11][1] = "Under Large Scale Integration";
 choices[11][2] = "Ultra Large Scale Integration";
 choices[11][3] = "Update Large Scale Integration";
 answers[11] = choices[11][2];
 units[11] = "47";
 comments[11] = "Id Pregunta: 1115. ";


//  Id pregunta: 1119 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  En los algoritmos de clave sim&eacute;trica:";
 choices[12]= new Array();
 choices[12][0] = "se pueden distribuir y mantener f&aacute;cilmente las claves";
 choices[12][1] = "tienen alta velocidad de cifrado y descifrado";
 choices[12][2] = "no se ha alcanzado a&uacute;n la perfecci&oacute;n matem&aacute;tica, y existen algoritmos eficaces para reventarlos aparte del de fuerza bruta";
 choices[12][3] = "no pueden ser usados para autenticar a las partes";
 answers[12] = choices[12][1];
 units[12] = "72";
 comments[12] = "Id Pregunta: 1119. ";


//  Id pregunta: 1203 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Kerberos utiliza algoritmos de cifrado:";
 choices[13]= new Array();
 choices[13][0] = "No utiliza algoritmos de cifrado, porque no cifra nada";
 choices[13][1] = "Utiliza algoritmos de cifrado RSA";
 choices[13][2] = "Utiliza algoritmos de cifrado tipo DES";
 choices[13][3] = "Lo &uacute;nico que utiliza es firma electr&oacute;nica";
 answers[13] = choices[13][2];
 units[13] = "72";
 comments[13] = "Id Pregunta: 1203. ";


//  Id pregunta: 1238 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  La principal diferencia entre HTML y XML es que:";
 choices[14]= new Array();
 choices[14][0] = "HTML es un lenguaje orientado a textos, aunque maneja gr&aacute;ficos con dificultad, XML es mucho mas versatil y suple las carencias de HTML";
 choices[14][1] = "XML es un lenguaje de descripci&oacute;n de contenidos, y HTML de presentaci&oacute;n, es posible incluso que documentos XML se transformen en HTML";
 choices[14][2] = "XML es un subconjunto de HTML";
 choices[14][3] = "B y C son ciertas";
 answers[14] = choices[14][1];
 units[14] = "69";
 comments[14] = "Id Pregunta: 1238. NULL";


//  Id pregunta: 1280 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  Los procesadores superescalares:";
 choices[15]= new Array();
 choices[15][0] = "Son siempre procesadores RISC";
 choices[15][1] = "Han de ser necesariamente CISC";
 choices[15][2] = "Suelen ser RISC, pero pueden ser CISC";
 choices[15][3] = "Todas son falsas";
 answers[15] = choices[15][2];
 units[15] = "45";
 comments[15] = "Id Pregunta: 1280. ";


//  Id pregunta: 1287 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  Marcar la correcta respecto de los algoritmos criptogr&aacute;ficos:";
 choices[16]= new Array();
 choices[16][0] = "El algoritmo de cifra de Merkle-Hellman es de clave dispersa";
 choices[16][1] = "El algoritmo de cifra de Merkle-Hellman es de clave &uacute;nica";
 choices[16][2] = "El algoritmo DES es de clave p&uacute;blica";
 choices[16][3] = "El algoritmo DES es de clave sim&eacute;trica";
 answers[16] = choices[16][3];
 units[16] = "72";
 comments[16] = "Id Pregunta: 1287. ";


//  Id pregunta: 1314 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Refiri&eacute;ndonos a los Sistemas de Informaci&oacute;n Geogr&aacute;fica (SIG), podemos afirmar que:";
 choices[17]= new Array();
 choices[17][0] = "Si la informaci&oacute;n est&aacute; almacenada seg&uacute;n el modelo de datos vectorial, las representaciones que se obtienen son menos precisas y de peor calidad que las del modelo r&aacute;ster.";
 choices[17][1] = "Los procedimientos de captura de la informaci&oacute;n gr&aacute;fica son diferentes, seg&uacute;n se trate de entidades planim&eacute;tricas o de entidades topogr&aacute;ficas.";
 choices[17][2] = "Si se va a utilizar en aplicaciones en las que sea esencial el empleo de objetos geogr&aacute;ficos, el modelo de datos r&aacute;ster es el m&aacute;s adecuado.";
 choices[17][3] = "Los atributos alfanum&eacute;ricos, que proporcionan informaci&oacute;n sobre las caracter&iacute;sticas de las entidades gr&aacute;ficas, se almacenan en formato r&aacute;ster.";
 answers[17] = choices[17][1];
 units[17] = "67";
 comments[17] = "Id Pregunta: 1314. NULL";


//  Id pregunta: 1335 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Se puede entender por 'driver':";
 choices[18]= new Array();
 choices[18][0] = "Un tipo especial de programa supervisor";
 choices[18][1] = "Un programa encargado de permitir el manejo de un determinado perif&eacute;rico por parte de una unidad central";
 choices[18][2] = "Un lector/grabador de discos &oacute;pticos";
 choices[18][3] = "Un lector/grabador de discos CD-ROM";
 answers[18] = choices[18][1];
 units[18] = "47";
 comments[18] = "Id Pregunta: 1335. ";


//  Id pregunta: 1367 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  Si se comparan los diferentes sistemas de almacenamiento secundario:";
 choices[19]= new Array();
 choices[19][0] = "La velocidad de transferencia es del mismo orden en una unidad de cinta DAT que en una unidad de disco magn&eacute;tico";
 choices[19][1] = "La capacidad de almacenamiento de una cinta de cartucho normal de 0,25&quot; es similar a la de un CD-ROM de 5&quot; 1/4";
 choices[19][2] = "Los discos WORM y los magneto-opticos ofrecen la posibilidad de borrar y reescribir informaci&oacute;n";
 choices[19][3] = "En las unidades de cinta no se puede intercalar informaci&oacute;n adicional, por el contrario, para hacerlo habr&iacute;a que regrabar todo el resto de la cinta";
 answers[19] = choices[19][3];
 units[19] = "48";
 comments[19] = "Id Pregunta: 1367. ";


//  Id pregunta: 1416 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Una entidad d&eacute;bil es aquella que cumple que:";
 choices[20]= new Array();
 choices[20][0] = "La clave est&aacute; compuesta por atributos de la entidad";
 choices[20][1] = "La clave est&aacute; compuesta por atributos de la entidad y atributos de otras entidades";
 choices[20][2] = "Su existencia depende de la existencia de otra u otras entidades";
 choices[20][3] = "No puede tener relaciones cuya cardinalidad sea uno-a-uno";
 answers[20] = choices[20][2];
 units[20] = "58";
 comments[20] = "Id Pregunta: 1416. ";


//  Id pregunta: 1463 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  ISA, PCI, AGP, IDE, PCMCIA&hellip;, son:";
 choices[21]= new Array();
 choices[21][0] = "buses internos";
 choices[21][1] = "buses externos";
 choices[21][2] = "organismos de estandarizaci&oacute;n  ";
 choices[21][3] = "est&aacute;ndares de almacenamiento";
 answers[21] = choices[21][0];
 units[21] = "47";
 comments[21] = "Id Pregunta: 1463. ";


//  Id pregunta: 1491 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  &iquest;Cu&aacute;ntos niveles RAID est&aacute;ndar existen?:";
 choices[22]= new Array();
 choices[22][0] = "4";
 choices[22][1] = "5";
 choices[22][2] = "6";
 choices[22][3] = "7";
 answers[22] = choices[22][3];
 units[22] = "48";
 comments[22] = "Id Pregunta: 1491. ";


//  Id pregunta: 1510 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Respecto a RAID, una de las siguientes afirmaciones es falsa:";
 choices[23]= new Array();
 choices[23][0] = "RAID 0 no ofrece protecci&oacute;n de datos, s&oacute;lo mejora el tiempo de acceso";
 choices[23][1] = "RAID 2 es similar al RAID 1 pero a&ntilde;adiendo redundancia";
 choices[23][2] = "RAID 5 es el m&aacute;s generalizado por su equilibrio de resultados";
 choices[23][3] = "RAID 4 es similar a RAID 0 pero con correcci&oacute;n de errores";
 answers[23] = choices[23][1];
 units[23] = "48";
 comments[23] = "Id Pregunta: 1510. ";


//  Id pregunta: 1512 AÃ±o de creación de pregunta: 2003-01-01
 questions[24]= "25)  &iquest;Qu&eacute; tecnolog&iacute;a sustituy&oacute; a DES tras su ruptura?";
 choices[24]= new Array();
 choices[24][0] = "Rijndael";
 choices[24][1] = "RC-4";
 choices[24][2] = "MD5 ";
 choices[24][3] = "SEAL";
 answers[24] = choices[24][0];
 units[24] = "72";
 comments[24] = "Id Pregunta: 1512. ";


//  Id pregunta: 1604 AÃ±o de creación de pregunta: 2003-01-01
 questions[25]= "26)  Entre los algoritmos que puede utilizar SSL se encuentran:";
 choices[25]= new Array();
 choices[25][0] = "TripleDES, RC4 y SHA-1";
 choices[25][1] = "DES, RC2 y MD5";
 choices[25][2] = "Adem&aacute;s de los anteriores puede usar SKIPJACK y RSA";
 choices[25][3] = "Puede usar todos los anteriores e incluso no usar algoritmo de encriptaci&oacute;n, pero s&iacute; de autenticaci&oacute;n con SHA-1 o MD5 ";
 answers[25] = choices[25][3];
 units[25] = "72";
 comments[25] = "Id Pregunta: 1604. ";


//  Id pregunta: 1615 AÃ±o de creación de pregunta: 2003-01-01
 questions[26]= "27)  Las t&eacute;cnicas orientadas a garantizar la seguridad en las operaciones relacionadas con los servicios de certificaci&oacute;n y firma electr&oacute;nica, deben cumplir los principios de:";
 choices[26]= new Array();
 choices[26][0] = "Confidencialidad, Seguridad, Integridad, y Autenticaci&oacute;n.";
 choices[26][1] = "Confidencialidad, Integridad, Autenticaci&oacute;n, y No Repudio.";
 choices[26][2] = "Disponibilidad, Integridad, Autenticaci&oacute;n, y No Repudio.";
 choices[26][3] = "Disponibilidad, Seguridad, Integridad, y Autenticaci&oacute;n.";
 answers[26] = choices[26][1];
 units[26] = "72";
 comments[26] = "Id Pregunta: 1615. Junta Andaluc&iacute;a";


//  Id pregunta: 1636 AÃ±o de creación de pregunta: 2003-01-01
 questions[27]= "28)  Seg&uacute;n la metodolog&iacute;a Metrica v3 un diagrama de estructura se representa en forma de &aacute;rbol. Indicar, entre las siguientes, cu&aacute;l no corresponde a alguna de las representaciones gr&aacute;ficas que permiten mostrar la secuencia de las llamadas entre m&oacute;dulos";
 choices[27]= new Array();
 choices[27][0] = "Lineal";
 choices[27][1] = "Secuencial";
 choices[27][2] = "Repetitiva";
 choices[27][3] = "Alternativa";
 answers[27] = choices[27][0];
 units[27] = "86";
 comments[27] = "Id Pregunta: 1636. NULL";


//  Id pregunta: 1674 AÃ±o de creación de pregunta: 2004-01-01
 questions[28]= "29)  &iquest;Cu&aacute;l de las siguientes comandos SQL pertenece al DDL (Lenguaje de definici&oacute;n de datos)?";
 choices[28]= new Array();
 choices[28][0] = "SELECT";
 choices[28][1] = "CREATE";
 choices[28][2] = "INSERT";
 choices[28][3] = "UPDATE";
 answers[28] = choices[28][1];
 units[28] = "58";
 comments[28] = "Id Pregunta: 1674. ";


//  Id pregunta: 1739 AÃ±o de creación de pregunta: 2006-01-01
 questions[29]= "30)  En el Directorio Activo, el conjunto de atributos de un objeto dado, se denomina";
 choices[29]= new Array();
 choices[29][0] = "Contenedor";
 choices[29][1] = "Esquema";
 choices[29][2] = "&Aacute;rbol";
 choices[29][3] = "P&aacute;gina";
 answers[29] = choices[29][1];
 units[29] = "56";
 comments[29] = "Id Pregunta: 1739. ";


//  Id pregunta: 1775 AÃ±o de creación de pregunta: 2006-01-01
 questions[30]= "31)  &iquest;Qu&eacute; es falso respecto a la licencia GPL?";
 choices[30]= new Array();
 choices[30][0] = "Los programas con licencia GPL carecen de derechos de autor";
 choices[30][1] = "Exige que los fuentes est&eacute;n a disposici&oacute;n de quien disponga de los binarios";
 choices[30][2] = "No permite su integraci&oacute;n con software propietario";
 choices[30][3] = "Permite modificaciones y redistribuci&oacute;n de estas";
 answers[30] = choices[30][0];
 units[30] = "61,62";
 comments[30] = "Id Pregunta: 1775. ";


//  Id pregunta: 1789 AÃ±o de creación de pregunta: 2006-01-01
 questions[31]= "32)  Se&ntilde;ale qu&eacute; lenguaje intermedio espec&iacute;fico de representaci&oacute;n de conocimiento se utiliza en el &aacute;rea de inteligencia artificial";
 choices[31]= new Array();
 choices[31][0] = "XML";
 choices[31][1] = "STRIPS";
 choices[31][2] = "KIF";
 choices[31][3] = "EXML";
 answers[31] = choices[31][2];
 units[31] = "63";
 comments[31] = "Id Pregunta: 1789. ";


//  Id pregunta: 1827 AÃ±o de creación de pregunta: 2006-01-01
 questions[32]= "33)  La operaci&oacute;n que permite navegar hacia un mayor nivel de agregaci&oacute;n en dimensiones en un Datawarehouse se conoce como:";
 choices[32]= new Array();
 choices[32][0] = "Drill-Down.";
 choices[32][1] = "Roll-Up.";
 choices[32][2] = "Drill-Through.";
 choices[32][3] = "Slice and Dice.";
 answers[32] = choices[32][1];
 units[32] = "68";
 comments[32] = "Id Pregunta: 1827. ";


//  Id pregunta: 1849 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  Un sistema de Workflow seg&uacute;n la WfMC debe incluir necesariamente la funci&oacute;n de:";
 choices[33]= new Array();
 choices[33][0] = "Gesti&oacute;n de notificaciones y colas de trabajo";
 choices[33][1] = "Autorizaciones y asignaci&oacute;n de responsabilidades";
 choices[33][2] = "Facilidades de enrrutamiento";
 choices[33][3] = "Todas las anteriores";
 answers[33] = choices[33][3];
 units[33] = "71";
 comments[33] = "Id Pregunta: 1849. ";


//  Id pregunta: 1850 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  &iquest;Cu&aacute;l de los siguientes algoritmos no sirve de base para la definici&oacute;n de algoritmos de criptograf&iacute;a asim&eacute;trica?";
 choices[34]= new Array();
 choices[34][0] = "Problema de sustituci&oacute;n af&iacute;n";
 choices[34][1] = "Problema de factorizaci&oacute;n entera";
 choices[34][2] = "Problema de logaritmo discreto";
 choices[34][3] = "Problema de logaritmo discreto el&iacute;ptico";
 answers[34] = choices[34][0];
 units[34] = "72";
 comments[34] = "Id Pregunta: 1850. ";


//  Id pregunta: 1892 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  Tres discos duros con una direcci&oacute;n de red &uacute;nica y propia y sirviendo ficheros a usuarios de estaciones de trabajo en LAN es una";
 choices[35]= new Array();
 choices[35][0] = "SAN";
 choices[35][1] = "NAS";
 choices[35][2] = "RAID";
 choices[35][3] = "cabina de discos";
 answers[35] = choices[35][1];
 units[35] = "48";
 comments[35] = "Id Pregunta: 1892. ";


//  Id pregunta: 1938 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  Dentro del kernel de Unix, el n&uacute;cleo dependiente";
 choices[36]= new Array();
 choices[36][0] = "Controla la ejecuci&oacute;n de procesos";
 choices[36][1] = "Asigna memoria principal a un proceso de ejecuci&oacute;n";
 choices[36][2] = "Permite el acceso controlado de los procesos a los perif&eacute;ricos";
 choices[36][3] = "Se encarga de las interrupciones";
 answers[36] = choices[36][3];
 units[36] = "53";
 comments[36] = "Id Pregunta: 1938. ";


//  Id pregunta: 1945 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  Hay dos metalenguajes con los que definir los lenguajes que podemos obtener a partir de XML, &iquest;Cu&aacute;les son?";
 choices[37]= new Array();
 choices[37][0] = "DTD y XML Schema";
 choices[37][1] = "DTL y HTML";
 choices[37][2] = "HTML y API";
 choices[37][3] = "DTD y SGML";
 answers[37] = choices[37][0];
 units[37] = "69";
 comments[37] = "Id Pregunta: 1945. NULL";


//  Id pregunta: 1951 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  &iquest;Qu&eacute; es un &quot;Parser&quot; XML?";
 choices[38]= new Array();
 choices[38][0] = "Un m&oacute;dulo o programa que se ocupa de archivar en local los c&oacute;digos XML";
 choices[38][1] = "Un m&oacute;dulo, biblioteca o programa que se ocupa de transformar un archivo de texto en una representaci&oacute;n externa";
 choices[38][2] = "Un m&oacute;dulo, biblioteca o programa que se ocupa de transformar un archivo de texto en una representaci&oacute;n interna";
 choices[38][3] = "Un m&oacute;dulo o programa que se ocupa de archivar en la correspondiente Base de Datos los c&oacute;digos XML";
 answers[38] = choices[38][2];
 units[38] = "69";
 comments[38] = "Id Pregunta: 1951. NULL";


//  Id pregunta: 4361 AÃ±o de creación de pregunta: 2007-01-01
 questions[39]= "40)  Cuando sobre un Data Warehouse llevamos a cabo un proceso de Data-Minig, donde la b&uacute;squeda se dirige hacia la categorizaci&oacute;n de los registros en grupos para detectar patrones aplicables, o extraer relaciones impl&iacute;citas en los datos, estamos aplicando un modelo...";
 choices[39]= new Array();
 choices[39][0] = "De validaci&oacute;n.";
 choices[39][1] = "De verificaci&oacute;n.";
 choices[39][2] = "De descubrimiento.";
 choices[39][3] = "Predictivo.";
 answers[39] = choices[39][2];
 units[39] = "68";
 comments[39] = "Id Pregunta: 4361. ";


//  Id pregunta: 4389 AÃ±o de creación de pregunta: 2007-01-01
 questions[40]= "41)  En el entorno de base de datos, los &iacute;ndices son de vital importancia en las transacciones de acceso, &iquest;Cu&aacute;l de las siguientes afirmaciones no es correcta?";
 choices[40]= new Array();
 choices[40][0] = "El &iacute;ndice es tambi&eacute;n una tabla almacenada en un disco.";
 choices[40][1] = "Las tablas de &iacute;ndices se actualizan cuando se actualizan las tablas de datos.";
 choices[40][2] = "La actualizaci&oacute;n de las tablas de &iacute;ndices es transparente al usuario.";
 choices[40][3] = "Las actualizaciones de los &iacute;ndices no consumen recursos.";
 answers[40] = choices[40][3];
 units[40] = "58";
 comments[40] = "Id Pregunta: 4389. ";


//  Id pregunta: 4398 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  En el modelo relacional, &iquest;qu&eacute; se entiende por integridad referencial?";
 choices[41]= new Array();
 choices[41][0] = "Que todos los datos est&eacute;n referenciados por su clave y &eacute;sta sea &uacute;nica.";
 choices[41][1] = "Que todo atributo que represente una relaci&oacute;n sea nulo, o bien exista en la clave primaria del elemento relacionado.";
 choices[41][2] = "Que todo conjunto de operaciones que constituya una unidad, progrese en conjunto o bien falle en conjunto, pero que no progrese nunca en situaciones intermedias";
 choices[41][3] = "Que se pueda referenciar la totalidad de la base de datos.";
 answers[41] = choices[41][1];
 units[41] = "58";
 comments[41] = "Id Pregunta: 4398. ";


//  Id pregunta: 4440 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  Dentro de Ia tecnolog&iacute;a de Sistemas de Informaci&oacute;n Geogr&aacute;fica, si la realidad se representa mediante figuras elementales geom&eacute;tricas, normalmente cuadradas, que forman un mosaico regular, estamos hablando de:";
 choices[42]= new Array();
 choices[42][0] = "Proyecci&oacute;n.";
 choices[42][1] = "R&aacute;ster.";
 choices[42][2] = "Vector.";
 choices[42][3] = "Imagen multiespectral.";
 answers[42] = choices[42][1];
 units[42] = "67";
 comments[42] = "Id Pregunta: 4440. NULL";


//  Id pregunta: 4481 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  &iquest;Cual de los siguientes paquetes de Java contiene las clases b&aacute;sicas utilizadas habitualmente en la mayor&iacute;a de los programas Java?";
 choices[43]= new Array();
 choices[43][0] = "java.lang";
 choices[43][1] = "java.beans";
 choices[43][2] = "java.sql";
 choices[43][3] = "java.util";
 answers[43] = choices[43][0];
 units[43] = "60";
 comments[43] = "Id Pregunta: 4481. JCED - Preparatic XVII";


//  Id pregunta: 4512 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  Los dispositivos NAS utilizan como protocolo para suministrar los archivos a los clientes:";
 choices[44]= new Array();
 choices[44][0] = "ADSL";
 choices[44][1] = "IP";
 choices[44][2] = "SCSI";
 choices[44][3] = "Fiber SCSI";
 answers[44] = choices[44][1];
 units[44] = "48";
 comments[44] = "Id Pregunta: 4512. ";


//  Id pregunta: 4626 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  Que comando se utiliza para convertir un sistema de ficheros ext2 a ext3 en las ultimas versiones de Suse Linux?";
 choices[45]= new Array();
 choices[45][0] = "tune2fs -c ldev/hdbX";
 choices[45][1] = "tune2fs -j /dev/hdbX";
 choices[45][2] = "make2fs /devlhdbX";
 choices[45][3] = "mount -t ext3 /dev/hdbX /mountpoint";
 answers[45] = choices[45][1];
 units[45] = "53";
 comments[45] = "Id Pregunta: 4626. ";


//  Id pregunta: 4644 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  Una vez inicializada una aplicaci&oacute;n forms Builder preparada para Web , &iquest;que m&eacute;todos hacen posible transferir, desde el servidor de aplicaci&oacute;n al navegador del usuario, archivos de clase Java adicionales a medida que sean necesarios?";
 choices[46]= new Array();
 choices[46][0] = "tiempo real y diferido.";
 choices[46][1] = "incremental y decremental.";
 choices[46][2] = "incremental y Bundled.";
 choices[46][3] = "los archivos de clases java se transfieren solo al inicio de la aplicaci&oacute;n junto con el cliente Forms.";
 answers[46] = choices[46][2];
 units[46] = "";
 comments[46] = "Id Pregunta: 4644. ";


//  Id pregunta: 4680 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  La API JDBC se utiliza:";
 choices[47]= new Array();
 choices[47][0] = "Para efectuar consultas, actualizaciones de la base de datos que tengan los drivers adecuados. Tambi&eacute;n sepueden utilizar procedimientos almacenados y control de transacciones, pr&aacute;cticamente todas las funciones quesoporta un SGBD relacional.";
 choices[47][1] = "La API JDBC s&oacute;lo incorpora unos drivers que soportan las funciones de un SGBD relacional";
 choices[47][2] = "Para efectuar consultas y actualizaciones del SGBD relacional. El control de transacciones y las llamadas aprocedimientos almacenados no est&aacute;n soportados.";
 choices[47][3] = "Para efectuar consultas, actualizaciones de la base de datos que tengan los drivers adecuados y algunas delas funciones que soporta un SGBD relacional.";
 answers[47] = choices[47][0];
 units[47] = "60";
 comments[47] = "Id Pregunta: 4680. Examen 2006 JCYL";


//  Id pregunta: 4849 AÃ±o de creación de pregunta: 2007-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l de las siguientes afirmaciones NO es cierta?";
 choices[48]= new Array();
 choices[48][0] = "La aplicaci&oacute;n WINE es un emulador que permite ejecutar aplicaciones Windows en un entorno de software libre Linux";
 choices[48][1] = "El entorno de escritorio KDE no utiliza CORBA como arquitectura de comunicaciones entre procesos";
 choices[48][2] = "La biblioteca de componentes gr&aacute;ficos GTK+ se basa en las librer&iacute;as Glib, Pango y ATK";
 choices[48][3] = "La arquitectura actual de componentes de GNOME se denomina Bonobo";
 answers[48] = choices[48][0];
 units[48] = "53";
 comments[48] = "Id Pregunta: 4849. ";


//  Id pregunta: 5011 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  &iquest;Cu&aacute;l de los siguientes es un requisito de seguridad en una transacci&oacute;n electr&oacute;nica en la que intervenga un mediode pago?:";
 choices[49]= new Array();
 choices[49][0] = "Simultaneidad";
 choices[49][1] = "Interactividad";
 choices[49][2] = "No repudio";
 choices[49][3] = "Automatizaci&oacute;n";
 answers[49] = choices[49][2];
 units[49] = "70";
 comments[49] = "Id Pregunta: 5011. Examen TIC A 2007";


//  Id pregunta: 5121 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  Con un tama&ntilde;o de bloque de 1 KB, &iquest;cu&aacute;l es el tama&ntilde;o m&aacute;ximo de un fichero con el sistema de archivos ext3?";
 choices[50]= new Array();
 choices[50][0] = "64GB";
 choices[50][1] = "32GB";
 choices[50][2] = "16GB";
 choices[50][3] = "8GB";
 answers[50] = choices[50][2];
 units[50] = "52";
 comments[50] = "Id Pregunta: 5121. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5128 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  &iquest;Cu&aacute;l es el modelo conceptual m&aacute;s extendido para los almacenes de datos?";
 choices[51]= new Array();
 choices[51][0] = "Relacional.";
 choices[51][1] = "Multidimensional.";
 choices[51][2] = "Espacial.";
 choices[51][3] = "Temporal.";
 answers[51] = choices[51][1];
 units[51] = "68";
 comments[51] = "Id Pregunta: 5128. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5475 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  Los registros glue de una zona DNS son aquellos que";
 choices[52]= new Array();
 choices[52][0] = "Son los registros que mantienen la resoluci&oacute;n inversa";
 choices[52][1] = "Son los registros que mantienen el espacio de nombres de la zona";
 choices[52][2] = "Son los registros que permiten intercambiar informaci&oacute;n entre las diferentes zonas/subzonas";
 choices[52][3] = "Son los registros que permiten la consulta delegada de otros sistemas dns";
 answers[52] = choices[52][1];
 units[52] = "73";
 comments[52] = "Id Pregunta: 5475. Castilla y Le&oacute;n";


//  Id pregunta: 5599 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  Indicar la respuesta verdadera sobre los mecanismos de inferencia";
 choices[53]= new Array();
 choices[53][0] = "En las redes sem&aacute;nticas la inferencia se hace mediante herencia y emparejamiento";
 choices[53][1] = "En los marcos la inferencia se hace mediante deducci&oacute;n de valores de slots, actualizaci&oacute;n de valores de slots y equiparaci&oacute;n de marcos";
 choices[53][2] = "En las reglas la inferencia se hace mediante encadenamiento hacia delante y hacia atr&aacute;s";
 choices[53][3] = "Todas las respuestas anteriores son v&aacute;lidas";
 answers[53] = choices[53][3];
 units[53] = "64";
 comments[53] = "Id Pregunta: 5599. ";


//  Id pregunta: 5889 AÃ±o de creación de pregunta: 2009-01-01
 questions[54]= "55)  En Inteligencia Artificial, la hip&oacute;tesis del mundo cerrado consiste en:";
 choices[54]= new Array();
 choices[54][0] = "Suponer falso todo lo que no est&aacute; almacenado en la base de hechos";
 choices[54][1] = "Suponer cierto todo lo que est&aacute; almacenado en la base de hechos";
 choices[54][2] = "Suponer unas veces cierto y otras falso la informaci&oacute;n almacenada en la base de hechos";
 choices[54][3] = "Ninguna de las anteriores";
 answers[54] = choices[54][0];
 units[54] = "63";
 comments[54] = "Id Pregunta: 5889. MAP 2008 A1";


//  Id pregunta: 6425 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  &iquest;Cu&aacute;l de las siguientes aplicaciones no se incluye en la suite ofim&aacute;tica OpenOffice.org ?";
 choices[55]= new Array();
 choices[55][0] = "Writer";
 choices[55][1] = "Calc";
 choices[55][2] = "Draw";
 choices[55][3] = "Spread";
 answers[55] = choices[55][3];
 units[55] = "62";
 comments[55] = "Id Pregunta: 6425. NULL";


//  Id pregunta: 6558 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  Servicios de una Autoridad de Certificaci&oacute;n esenciales son:";
 choices[56]= new Array();
 choices[56][0] = "Generaci&oacute;n y gesti&oacute;n de claves criptogr&aacute;ficas";
 choices[56][1] = "Servicios de directorio";
 choices[56][2] = "Registro de usuarios mediante el que se acredita la identidad";
 choices[56][3] = "Todas las respuestas anteriores son correctas";
 answers[56] = choices[56][3];
 units[56] = "74";
 comments[56] = "Id Pregunta: 6558. NULL";


//  Id pregunta: 7160 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  Seleccione la afirmaci&oacute;n cierta respecto al Sistema Operativo UNIX";
 choices[57]= new Array();
 choices[57][0] = "UNIX no permite la comunicaci&oacute;n entre procesos";
 choices[57][1] = "loctl es un comando que permite crear un fichero";
 choices[57][2] = "Las normas POSIX definen la organizaci&oacute;n de la memoria";
 choices[57][3] = "Cada fichero lleva asociada una estructura llamada nodo-i (inode)";
 answers[57] = choices[57][3];
 units[57] = "53";
 comments[57] = "Id Pregunta: 7160. Examen TIC B 2009";


//  Id pregunta: 7324 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  Se&ntilde;ala cu&aacute;l de las siguientes no es una tecnolog&iacute;a empleada en el pago a trav&eacute;s de Internet:";
 choices[58]= new Array();
 choices[58][0] = "3D Secure";
 choices[58][1] = "UCAF";
 choices[58][2] = "Urbinet ";
 choices[58][3] = "SET ";
 answers[58] = choices[58][2];
 units[58] = "70";
 comments[58] = "Id Pregunta: 7324. NULL";


//  Id pregunta: 7340 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  La autenticaci&oacute;n consiste en:";
 choices[59]= new Array();
 choices[59][0] = "Comprobar los permisos del usuario";
 choices[59][1] = "Comprobar que los datos no han sido alterados en una comunicaci&oacute;n";
 choices[59][2] = "Garantizar que ninguna de las partes pueda negar una operaci&oacute;n realizada";
 choices[59][3] = "Comprobar la identidad del usuario";
 answers[59] = choices[59][3];
 units[59] = "72";
 comments[59] = "Id Pregunta: 7340. NULL";


//  Id pregunta: 7343 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  Se&ntilde;ale la afirmaci&oacute;n INCORRECTA con respecto a las funciones hash:";
 choices[60]= new Array();
 choices[60][0] = "El algoritmo SHA-1 produce una salida resumen de 160 bits";
 choices[60][1] = "Las funciones hash son usadas, principalmente, para resolver el problema de la confidencialidad de los mensajes";
 choices[60][2] = "Resistencia a la preimagen significa que dada cualquier imagen y, es computacionalmente imposible encontrar un mensaje x tal que h(x)=y";
 choices[60][3] = "Resistencia a colisi&oacute;n significa que es computacionalmente imposible encontrar dos diferentes mensajes x, x&rsquo; tal que h(x)=h(x&rsquo;)";
 answers[60] = choices[60][1];
 units[60] = "72";
 comments[60] = "Id Pregunta: 7343. NULL";


//  Id pregunta: 7345 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  El est&aacute;ndar de sintaxis de intercambio de informaci&oacute;n personal es:";
 choices[61]= new Array();
 choices[61][0] = "PKCS#7";
 choices[61][1] = "PKCS#9";
 choices[61][2] = "PKCS#12";
 choices[61][3] = "PKCS#14";
 answers[61] = choices[61][2];
 units[61] = "72";
 comments[61] = "Id Pregunta: 7345. NULL";


//  Id pregunta: 8284 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  El m&eacute;todo de b&uacute;squeda informado que tiene en cuenta el coste m&iacute;nimo necesario para llegar al estado soluci&oacute;n pasando por el estado X, es el denominado:";
 choices[62]= new Array();
 choices[62][0] = "M&eacute;todo de b&uacute;squeda bidireccional.";
 choices[62][1] = "B&uacute;squeda &aacute;vida (Greedy search).";
 choices[62][2] = "B&uacute;squeda con adversario.";
 choices[62][3] = "M&eacute;todo Escalada simple (&quot;Hill-climbing&quot; search).";
 answers[62] = choices[62][1];
 units[62] = "63";
 comments[62] = "Id Pregunta: 8284. Examen TIC A1 2010";


//  Id pregunta: 8366 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  Sobre un Data Warehouse con informaci&oacute;n de las ventas nacionales de una compa&ntilde;&iacute;a, se quiere consultar los datos pero a nivel de ventas provinciales. &iquest;Qu&eacute; operaci&oacute;n debemos realizar en el almac&eacute;n de datos para obtener dichos datos?";
 choices[63]= new Array();
 choices[63][0] = "Drill-Down.";
 choices[63][1] = "Slice &amp; Dice.";
 choices[63][2] = "Roll-Up,";
 choices[63][3] = "Drill-Through.";
 answers[63] = choices[63][0];
 units[63] = "68";
 comments[63] = "Id Pregunta: 8366. Examen TIC A2 2010";


//  Id pregunta: 8395 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  &iquest;Cu&aacute;l de los siguientes t&eacute;rminos NO es una t&eacute;cnica empleada en Miner&iacute;a de Datos?";
 choices[64]= new Array();
 choices[64][0] = "Las redes neuronales.";
 choices[64][1] = "Look and Find.";
 choices[64][2] = "Los &aacute;rboles de decisi&oacute;n.";
 choices[64][3] = "Las redes bayesianas.";
 answers[64] = choices[64][1];
 units[64] = "71";
 comments[64] = "Id Pregunta: 8395. Examen TIC A2 2010";


//  Id pregunta: 8461 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  &iquest;Cu&aacute;l de estos NO es un est&aacute;ndar del W3C para Web Services?:";
 choices[65]= new Array();
 choices[65][0] = "UDDI";
 choices[65][1] = "SOAP";
 choices[65][2] = "WSDL";
 choices[65][3] = "XML";
 answers[65] = choices[65][0];
 units[65] = "51";
 comments[65] = "Id Pregunta: 8461. Analista Ayto. Madrid 2010";


//  Id pregunta: 8505 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  &iquest;C&oacute;mo se comenta una l&iacute;nea en XML (eXtensible Markup Language)? ";
 choices[66]= new Array();
 choices[66][0] = "/* Esto es un comentario */";
 choices[66][1] = "// Esto es un comentario ";
 choices[66][2] = "# Esto es un comentario";
 choices[66][3] = "&lt;!-- Esto es un comentario --&gt;";
 answers[66] = choices[66][3];
 units[66] = "69";
 comments[66] = "Id Pregunta: 8505. Examen TIC A2 2010";


//  Id pregunta: 8637 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  Una relaci&oacute;n muchos a muchos traducida desde un esquema entidad/relaci&oacute;n a un esquema relacional:";
 choices[67]= new Array();
 choices[67][0] = "No tiene claves.";
 choices[67][1] = "Impl&iacute;citamente, contiene una agrupaci&oacute;n de las claves primarias de las entidades relacionadas.";
 choices[67][2] = "No puedo admitir atributos que no pertenezcan a una de las entidades asociadas.";
 choices[67][3] = "Conserva la clave de la entidad fuerte.";
 answers[67] = choices[67][1];
 units[67] = "57, 58";
 comments[67] = "Id Pregunta: 8637. Examen TIC A2 2010 interna";


//  Id pregunta: 8684 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  Indique el puerto utilizado por el protocolo ldap sobre SSL:";
 choices[68]= new Array();
 choices[68][0] = "563";
 choices[68][1] = "443";
 choices[68][2] = "336";
 choices[68][3] = "636";
 answers[68] = choices[68][3];
 units[68] = "74";
 comments[68] = "Id Pregunta: 8684. Examen UPM A2 2011";


//  Id pregunta: 9115 AÃ±o de creación de pregunta: 2013-01-01
 questions[69]= "70)  &iquest;Qu&eacute; no presentan las soluciones SISD (Single Instruction stream, Single Data stream)";
 choices[69]= new Array();
 choices[69][0] = "Concurrencia y paralelizaci&oacute;n.";
 choices[69][1] = "S&oacute;lo concurrencia.";
 choices[69][2] = "&Uacute;nicamente paralelizaci&oacute;n.";
 choices[69][3] = "No existe SISD";
 answers[69] = choices[69][0];
 units[69] = "45";
 comments[69] = "Id Pregunta: 9115. ";


//  Id pregunta: 9137 AÃ±o de creación de pregunta: 2013-01-01
 questions[70]= "71)  &iquest;Qu&eacute; debe proporcionar c&oacute;mo m&iacute;nimo cualquier placa base en la actualidad?";
 choices[70]= new Array();
 choices[70][0] = "Un chipset";
 choices[70][1] = "Dos chipsets para vincular microprocesador y memoria";
 choices[70][2] = "Tres chipsets";
 choices[70][3] = "Dos chipsets, uno para vincular microprocesador y memoria y otro para vincular microprocesador y subsistema de E/S";
 answers[70] = choices[70][3];
 units[70] = "47";
 comments[70] = "Id Pregunta: 9137. ";


//  Id pregunta: 9142 AÃ±o de creación de pregunta: 2013-01-01
 questions[71]= "72)  &iquest;Cu&aacute;l se considera fase de ejecuci&oacute;n de instrucci&oacute;n en un procesador?";
 choices[71]= new Array();
 choices[71][0] = "Prefetch, fetch, decodificaci&oacute;n, ejecuci&oacute;n, escritura de resultados en memoria principal";
 choices[71][1] = "Fetch, decodificaci&oacute;n, ejecuci&oacute;n, escritura de resultados en memoria ppal";
 choices[71][2] = "Prefetch, fetch, decodificaci&oacute;n, ejecuci&oacute;n, escritura de resultados en memoria principal o en los registros";
 choices[71][3] = "Fetch, ejecuci&oacute;n, escritura de resultados en memoria ppal";
 answers[71] = choices[71][2];
 units[71] = "47";
 comments[71] = "Id Pregunta: 9142. ";


//  Id pregunta: 9151 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  &iquest;Qu&eacute; era Meego?";
 choices[72]= new Array();
 choices[72][0] = "la uni&oacute;n de los sistemas operativos Maemo y Moblin, con el que Intel y Google pretend&iacute;ann competir con el sistema iOs de Apple. Fue el inicio del sistema Android.";
 choices[72][1] = "Est&aacute; auspiciado por la Linux Foundation";
 choices[72][2] = "Una competencia al Android de Google.";
 choices[72][3] = "La B) y la C) son correctas.";
 answers[72] = choices[72][3];
 units[72] = "47";
 comments[72] = "Id Pregunta: 9151. ";


//  Id pregunta: 9164 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  Entre los servicios m&iacute;nimos que toda IDE debe respetar seg&uacute;n el OGC no se encuentra:";
 choices[73]= new Array();
 choices[73][0] = "El servicio de coberturas en web (WCS)";
 choices[73][1] = "El servicio de cat&aacute;logos de datos (CSW)";
 choices[73][2] = "El servicio de procesamientos (WPS)";
 choices[73][3] = "El servicio de conversi&oacute;n de coordenadas";
 answers[73] = choices[73][3];
 units[73] = "67";
 comments[73] = "Id Pregunta: 9164. NULL";


//  Id pregunta: 9219 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  &iquest;Qu&eacute; es LUN Masking?";
 choices[74]= new Array();
 choices[74][0] = "La cabina presenta una LUN a un servidor y este puede acceder.";
 choices[74][1] = "Se evita que un servidor pueda acceder a una LUN que pertenece a otro servidor.";
 choices[74][2] = "Es un m&eacute;todo de seguridad en red SAN de la interfaz SCSCI.";
 choices[74][3] = "Todos son v&aacute;lidas";
 answers[74] = choices[74][3];
 units[74] = "48";
 comments[74] = "Id Pregunta: 9219. ";


//  Id pregunta: 9259 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  &iquest;Cu&aacute;l es el sistema operativo auspiciado por la Linux Foundation como un sistema preparado para funcionar en netbooks, dispositivos port&aacute;tiles, sistemas en veh&iacute;culos, televisiones y tel&eacute;fonos multimedia?";
 choices[75]= new Array();
 choices[75][0] = "Meego. ";
 choices[75][1] = "Android. ";
 choices[75][2] = "Chrome OS. ";
 choices[75][3] = "Symbian OS. ";
 answers[75] = choices[75][0];
 units[75] = "47";
 comments[75] = "Id Pregunta: 9259. Examen TICA2-2011";


//  Id pregunta: 9619 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  &iquest;En qu&eacute; parte del SO Windows se encuentra el Dispatcher?";
 choices[76]= new Array();
 choices[76][0] = "Ejecutivo";
 choices[76][1] = "Microkernel";
 choices[76][2] = "HAL";
 choices[76][3] = "Drivers";
 answers[76] = choices[76][1];
 units[76] = "56";
 comments[76] = "Id Pregunta: 9619. ";


//  Id pregunta: 9971 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  En el &aacute;mbito de SAP ERP, un Centro de Coste o CeCo:";
 choices[77]= new Array();
 choices[77][0] = "Es la unidad organizativa, dentro de una sociedad CO, que representa un emplazamiento claramente delimitado donde se producen costes.";
 choices[77][1] = "Corresponde a una posici&oacute;n en el plan de cuentas relevante para el coste.";
 choices[77][2] = "Es el nivel jer&aacute;rquico m&aacute;s alto en el Sistema SAP.";
 choices[77][3] = "Es una lista de todas las cuentas de mayor utilizadas por una o varias sociedades.";
 answers[77] = choices[77][0];
 units[77] = "65";
 comments[77] = "Id Pregunta: 9971. Examen Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n, Servicio sanitario Extremadura, 2014";


//  Id pregunta: 10273 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  Referente al m&eacute;todo de b&uacute;squeda con adversario aplicado a juegos, &iquest;cu&aacute;l de las siguientes afirmaciones es falsa?";
 choices[78]= new Array();
 choices[78][0] = "Los dos jugadores disponen de informaci&oacute;n completa sobre el estado del juego";
 choices[78][1] = "La estrategia del oponente es desconocida";
 choices[78][2] = "Interviene el azar";
 choices[78][3] = "Al acabar, cada jugador pierde, gana o empata";
 answers[78] = choices[78][2];
 units[78] = "63";
 comments[78] = "Id Pregunta: 10273. NULL";


//  Id pregunta: 10284 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  Indique qu&eacute; soluci&oacute;n de las siguientes NO est&aacute; relacionada con los Sistemas Gestores de Base de Datos (SGBD):";
 choices[79]= new Array();
 choices[79][0] = "MongoDB";
 choices[79][1] = "MariaDB";
 choices[79][2] = "HeidiSQL";
 choices[79][3] = "MarcoDB";
 answers[79] = choices[79][3];
 units[79] = "57";
 comments[79] = "Id Pregunta: 10284. TIC A2, libre, examen 2013";


//  Id pregunta: 10466 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  &iquest;Qu&eacute; tecnolog&iacute;as agrupa HTML5?";
 choices[80]= new Array();
 choices[80][0] = "HTML+Javascript";
 choices[80][1] = "HTML+CSS3+Flash";
 choices[80][2] = "HTML+CSS3+Javascript";
 choices[80][3] = "HTML+CSS3";
 answers[80] = choices[80][2];
 units[80] = "69";
 comments[80] = "Id Pregunta: 10466. NULL";


//  Id pregunta: 10480 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  La Autoridad de Certificaci&oacute;n de los certificados emitidos para el DNI electr&oacute;nico es:";
 choices[81]= new Array();
 choices[81][0] = "La F&aacute;brica Nacional de Moneda y Timbre";
 choices[81][1] = "El Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[81][2] = "El CCN (Centro Criptol&oacute;gico Nacional)";
 choices[81][3] = "El Ministerio del Interior - Direcci&oacute;n General de la Polic&iacute;a";
 answers[81] = choices[81][3];
 units[81] = "74";
 comments[81] = "Id Pregunta: 10480. NULL";


//  Id pregunta: 10530 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  Seleccione la afirmaci&oacute;n correcta:";
 choices[82]= new Array();
 choices[82][0] = "los buses paralelos permiten enviar mayor cantidad de informaci&oacute;n por unidad de tiempo que los buses serie";
 choices[82][1] = "el bus MCA (Micro Channel Architecture) empleado en los IBM PS/2 ten&iacute;a un ancho de palabra m&aacute;ximo de 16 bits";
 choices[82][2] = "los buses paralelos presentan una limitaci&oacute;n de velocidad relacionada con la variaci&oacute;n de retardo o jitter entre los diferentes bits de su ancho de palabra";
 choices[82][3] = "el bus PCI es un bus paralelo pero sus evoluciones posteriores, PCI-X y PCIe son buses serie";
 answers[82] = choices[82][2];
 units[82] = "46";
 comments[82] = "Id Pregunta: 10530. NULL";


//  Id pregunta: 10606 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  Son principios arquitect&oacute;nicos de dise&ntilde;o de SOA:";
 choices[83]= new Array();
 choices[83][0] = "Encapsulaci&oacute;n, autonom&iacute;a y m&aacute;xima dependencia entre servicios.";
 choices[83][1] = "Optimizaci&oacute;n, abstracci&oacute;n y fiabilidad.";
 choices[83][2] = "Composici&oacute;n, descubrimiento y reutilizaci&oacute;n.";
 choices[83][3] = "Fuerte acoplamiento, contrato y madurez.";
 answers[83] = choices[83][2];
 units[83] = "51";
 comments[83] = "Id Pregunta: 10606. ";


//  Id pregunta: 10615 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  Marque la herramienta que no es una soluci&oacute;n ORM (Object-Relational Mapping):";
 choices[84]= new Array();
 choices[84][0] = "IBATIS";
 choices[84][1] = "Hibernate";
 choices[84][2] = "CODD";
 choices[84][3] = "Todas lo son.";
 answers[84] = choices[84][2];
 units[84] = "58";
 comments[84] = "Id Pregunta: 10615. ";


//  Id pregunta: 10980 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  LINQ (Language-Integrated Query) es:";
 choices[85]= new Array();
 choices[85][0] = "Es una librer&iacute;a de Javascript para la integraci&oacute;n de aplicaciones con HTML5.";
 choices[85][1] = "Es la tecnolog&iacute;a que permite la integraci&oacute;n de elementos Java dentro de una aplicaci&oacute;n .NET y viceversa.";
 choices[85][2] = "Facilita el acceso a bases de datos y ficheros XML desde una aplicaci&oacute;n .NET.";
 choices[85][3] = "Es el API de integraci&oacute;n de la red social profesional Linkedin, basado en OAuth.";
 answers[85] = choices[85][2];
 units[85] = "59";
 comments[85] = "Id Pregunta: 10980. TIC A1 AGE 2014";


//  Id pregunta: 11031 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  &iquest;Cu&aacute;l se corresponde con el nivel alto de planificaci&oacute;n del procesador?";
 choices[86]= new Array();
 choices[86][0] = "Scheduler";
 choices[86][1] = "Planificator";
 choices[86][2] = "High Planificator";
 choices[86][3] = "Dispatcher";
 answers[86] = choices[86][0];
 units[86] = "52";
 comments[86] = "Id Pregunta: 11031. ";


//  Id pregunta: 11051 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  &iquest;Qu&eacute; algoritmo genera un Hash de mayor longitud?";
 choices[87]= new Array();
 choices[87][0] = "MD5";
 choices[87][1] = "SHA-1";
 choices[87][2] = "SHA-384";
 choices[87][3] = "WHIRLPOOL";
 answers[87] = choices[87][3];
 units[87] = "72";
 comments[87] = "Id Pregunta: 11051. WHIRLPOOL produce un Hash de 512 bits";


//  Id pregunta: 11090 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  El procesador intel i7 utiliza una jerarqu&iacute;a de cache de 3 niveles, L1, L2 y L3. Indicar la respuesta INCORRECTA";
 choices[88]= new Array();
 choices[88][0] = "Respecto al tama&ntilde;o de la memoria, L1&gt;L2&gt;L3";
 choices[88][1] = "Los tres niveles utilizan un tama&ntilde;o de bloque de 64 bytes";
 choices[88][2] = "El nivel 3, L3, es compartido por todos los cores del chip";
 choices[88][3] = "El nivel 1, L1, presenta la latencia m&aacute;s alta ";
 answers[88] = choices[88][3];
 units[88] = "45";
 comments[88] = "Id Pregunta: 11090. ";


//  Id pregunta: 11133 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  &iquest;Cu&aacute;l de las siguientes versiones del sistema de archivos UNIX fue creada por ATT?";
 choices[89]= new Array();
 choices[89][0] = "Virtual File System";
 choices[89][1] = "Fast File System";
 choices[89][2] = "Network File System";
 choices[89][3] = "Remote File System";
 answers[89] = choices[89][2];
 units[89] = "53";
 comments[89] = "Id Pregunta: 11133. ";


//  Id pregunta: 11139 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  &iquest;Cu&aacute;l de las siguientes no es una licencia de c&oacute;digo abierto reconocida por OSI?";
 choices[90]= new Array();
 choices[90][0] = "European Union Public License";
 choices[90][1] = "Apache License";
 choices[90][2] = "Mozilla Public License";
 choices[90][3] = "Google Legal License";
 answers[90] = choices[90][3];
 units[90] = "61";
 comments[90] = "Id Pregunta: 11139. ";


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


//  Id pregunta: 11148 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  De acuerdo con la Ley 9/2014 General de Telecomunicaciones, &iquest;cu&aacute;l es el plazo m&aacute;ximo de validez de los certificados reconocidos para firma electr&oacute;nica?";
 choices[92]= new Array();
 choices[92][0] = "3 a&ntilde;os";
 choices[92][1] = "4 a&ntilde;os";
 choices[92][2] = "5 a&ntilde;os";
 choices[92][3] = "6 a&ntilde;os";
 answers[92] = choices[92][2];
 units[92] = "73";
 comments[92] = "Id Pregunta: 11148. ";


//  Id pregunta: 11216 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  El Java Plug-in:";
 choices[93]= new Array();
 choices[93][0] = " Dispone de un panel que permite configurar ciertos aspectos de seguridad y de gesti&oacute;n de certificados, entre otros.";
 choices[93][1] = "Sirve de puente entre los navegadores y los distintos entornos de ejecuci&oacute;n de java (JRE) que se hayan instalado en la m&aacute;quina cliente.";
 choices[93][2] = "Se incluye dentro del JRE.";
 choices[93][3] = "Todas las respuestas son verdaderas.";
 answers[93] = choices[93][3];
 units[93] = "60";
 comments[93] = "Id Pregunta: 11216. ";


//  Id pregunta: 11220 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l de las siguientes no es una tecnolog&iacute;a de Microsoft .NET?";
 choices[94]= new Array();
 choices[94][0] = "Servicios: ASP.NET y WCF.";
 choices[94][1] = "Aplicaciones de escritorio: WinForms, WPF.";
 choices[94][2] = "Aplicaciones para dispositivos m&oacute;viles: Silverlait, WinFX.";
 choices[94][3] = "Aplicaciones en la nube: Azure.";
 answers[94] = choices[94][2];
 units[94] = "59";
 comments[94] = "Id Pregunta: 11220. ";


//  Id pregunta: 11256 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Cu&aacute;l es la equivalencia en criptograf&iacute;a asim&eacute;trica a una longitud de clave de 112 bits en criptograf&iacute;a sim&eacute;trica?";
 choices[95]= new Array();
 choices[95][0] = "1102 bits.";
 choices[95][1] = "1768 bits.";
 choices[95][2] = "2048 bits.";
 choices[95][3] = "3072 bits.";
 answers[95] = choices[95][2];
 units[95] = "72";
 comments[95] = "Id Pregunta: 11256. ";


//  Id pregunta: 11274 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Indique la respuesta INCORRECTA sobre OpenStack";
 choices[96]= new Array();
 choices[96][0] = "Sus servicios se encuentran disponibles por medio de una API compatible con Amazon EC2/S3.";
 choices[96][1] = "Swift es la Infraestructura de almacenamiento.";
 choices[96][2] = "Cantora es la Infraestructura de c&oacute;mputo.";
 choices[96][3] = "Glance son los  servicios de imagen.";
 answers[96] = choices[96][2];
 units[96] = "47";
 comments[96] = "Id Pregunta: 11274. ";


//  Id pregunta: 11278 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Cu&aacute;l de los siguientes tipos de servicio NO corresponde a un est&aacute;ndar de OGC (Open Geospatial Consortium)?";
 choices[97]= new Array();
 choices[97][0] = "Web Map Service (WMS)";
 choices[97][1] = "Catalogue Service Web (CSW)";
 choices[97][2] = "Tile Map Service (TMS)";
 choices[97][3] = "Web Feature Service (WFS)";
 answers[97] = choices[97][2];
 units[97] = "67";
 comments[97] = "Id Pregunta: 11278. ";


//  Id pregunta: 11535 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  La licencia de la GNU utilizada espec&iacute;ficamente para la documentaci&oacute;n t&eacute;cnica del software es:";
 choices[98]= new Array();
 choices[98][0] = "GFDL";
 choices[98][1] = "GPL";
 choices[98][2] = "Affero GPL";
 choices[98][3] = "EUPL";
 answers[98] = choices[98][0];
 units[98] = "62";
 comments[98] = "Id Pregunta: 11535. NULL";


//  Id pregunta: 11629 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Con respecto al DNIe 3.0, se&ntilde;ale la falsa:";
 choices[99]= new Array();
 choices[99][0] = "Hace uso de la tecnolog&iacute;a NFC.";
 choices[99][1] = "Se basa en comandos ISO 7816.";
 choices[99][2] = "No es posible utilizarlo con lectores de tarjetas inteligentes.";
 choices[99][3] = "Incorpora un chip m&aacute;s r&aacute;pido.";
 answers[99] = choices[99][2];
 units[99] = "74";
 comments[99] = "Id Pregunta: 11629. ";


