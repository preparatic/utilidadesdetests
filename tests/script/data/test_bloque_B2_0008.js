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

//  Id pregunta: 726 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  En el estudio te&oacute;rico de las Estructuras de Datos, el conocido como &quot;m&eacute;todo de la baraja&quot; responde a un algoritmo de:";
 choices[0]= new Array();
 choices[0][0] = "B&uacute;squeda";
 choices[0][1] = "Ordenaci&oacute;n";
 choices[0][2] = "Iteraci&oacute;n";
 choices[0][3] = "Recursi&oacute;n";
 answers[0] = choices[0][1];
 units[0] = "57";
 comments[0] = "Id Pregunta: 726. Examen TIC MAP B 2004";


//  Id pregunta: 768 AÃ±o de creación de pregunta: 2009-01-01
 questions[1]= "2)  En los servicios de directorio";
 choices[1]= new Array();
 choices[1][0] = "varias entradas pueden compartir un DN";
 choices[1][1] = "las operaciones de actualizaci&oacute;n de LDAP no son at&oacute;micas";
 choices[1][2] = "LDAP utiliza habitualmente la pila de protocolos TCP / IP";
 choices[1][3] = "LDAP no se describe en t&eacute;rminos de ASN.1";
 answers[1] = choices[1][2];
 units[1] = "73";
 comments[1] = "Id Pregunta: 768. RFC 4512 y RFC 4514 ";


//  Id pregunta: 777 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  En teor&iacute;a de colas, &iquest;qu&eacute; se entiende por tiempo de respuesta?:";
 choices[2]= new Array();
 choices[2][0] = "El tiempo que una tarea emplea en un dispositivo del sistema, ya sea us&aacute;ndolo o esperando utilizarlo";
 choices[2][1] = "El tiempo que una tarea emplea usando los componentes del sistema";
 choices[2][2] = "El tiempo que una tarea espera para poder usar un recurso que est&aacute; siendo utilizado por otra";
 choices[2][3] = "La cantidad  de tiempo extra empleado en esperas";
 answers[2] = choices[2][0];
 units[2] = "53";
 comments[2] = "Id Pregunta: 777. ";


//  Id pregunta: 807 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  A la tabla virtual que se deriva de una o varias tablas f&iacute;sicas y aparece como una ventana personalizada para el usuario, se la conoce por el nombre de:";
 choices[3]= new Array();
 choices[3][0] = "Subesquema de grupo";
 choices[3][1] = "Vista";
 choices[3][2] = "Apuntador de &iacute;ndices";
 choices[3][3] = "Modelo f&iacute;sico";
 answers[3] = choices[3][1];
 units[3] = "52,53";
 comments[3] = "Id Pregunta: 807. ";


//  Id pregunta: 897 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;En qu&eacute; consiste el 'refresco' de una memoria din&aacute;mica?:";
 choices[4]= new Array();
 choices[4][0] = "En el proceso de optimizaci&oacute;n de la temperatura de trabajo de este tipo de memorias";
 choices[4][1] = "En la operaci&oacute;n de reescritura peri&oacute;dica que hay que realizar en ellas para que no pierdan la informaci&oacute;n almacenada";
 choices[4][2] = "En la operaci&oacute;n de acceso peri&oacute;dico que hay que realizar a este tipo de memorias, para repetir la &uacute;ltima operaci&oacute;n realizada";
 choices[4][3] = "El refresco no es propio de las memorias din&aacute;micas";
 answers[4] = choices[4][1];
 units[4] = "47";
 comments[4] = "Id Pregunta: 897. ";


//  Id pregunta: 901 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;Para qu&eacute; se usa el comando  tee  en Unix?:";
 choices[5]= new Array();
 choices[5][0] = "Se usa para guardar la salida de una orden en un fichero, adem&aacute;s de llevarla a la salida est&aacute;ndar";
 choices[5][1] = "Se utiliza para guardar o recuperar los archivos de una cinta magn&eacute;tica, un disco flexible o un fichero normal";
 choices[5][2] = "Se emplea para comprimir los datos de un fichero";
 choices[5][3] = "Se usa para visualizar los ficheros que se encuentran en una cola de impresi&oacute;n";
 answers[5] = choices[5][0];
 units[5] = "53";
 comments[5] = "Id Pregunta: 901. ";


//  Id pregunta: 1066 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Elija el tipo de relaciones entre registros que el modelo en red es incapaz de mostrar:";
 choices[6]= new Array();
 choices[6][0] = "1 a 1";
 choices[6][1] = "1 a N";
 choices[6][2] = "N a M";
 choices[6][3] = "Es capaz de mostrar todas";
 answers[6] = choices[6][3];
 units[6] = "57";
 comments[6] = "Id Pregunta: 1066. ";


//  Id pregunta: 1094 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  En el sistema operativo Unix, las tuberias (pipes) son mecanismos de comunicaci&oacute;n que permiten la transferencia de datos entre dos procesos. &iquest;C&oacute;mo podr&iacute;amos crear una tuber&iacute;a con el nombre TUB?:";
 choices[7]= new Array();
 choices[7][0] = "mknod TUB p";
 choices[7][1] = "En Unix no se puede dar una nombre a una tuber&iacute;a";
 choices[7][2] = "mkp TUB";
 choices[7][3] = "mkpipe TUB";
 answers[7] = choices[7][0];
 units[7] = "53";
 comments[7] = "Id Pregunta: 1094. ";


//  Id pregunta: 1097 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  En electr&oacute;nica digital, un conjunto de funciones es completo en un &aacute;lgebra de Boole:";
 choices[8]= new Array();
 choices[8][0] = "Si y s&oacute;lo si cualquier forma booleana puede realizarse con dichas funciones.";
 choices[8][1] = "Si un conjunto m&iacute;nimo puede realizarse con dichas funciones.";
 choices[8][2] = "Si y s&oacute;lo si contiene a todas las funciones l&oacute;gicas siguientes AND, OR, NOT, NAND, XOR.";
 choices[8][3] = "Ninguna de las anteriores es v&aacute;lida.";
 answers[8] = choices[8][0];
 units[8] = "58";
 comments[8] = "Id Pregunta: 1097. ";


//  Id pregunta: 1126 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  En relaci&oacute;n a las diferentes tecnolog&iacute;as de buses:";
 choices[9]= new Array();
 choices[9][0] = "ISA es posterior a MCA";
 choices[9][1] = "AGP es posterior a PCI";
 choices[9][2] = "XT es posterior a ISA";
 choices[9][3] = "EISA es anterior a MCA";
 answers[9] = choices[9][1];
 units[9] = "47";
 comments[9] = "Id Pregunta: 1126. ";


//  Id pregunta: 1231 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  La memoria RAM est&aacute;tica se diferencia de la RAM din&aacute;mica:";
 choices[10]= new Array();
 choices[10][0] = "En que la est&aacute;tica es m&aacute;s r&aacute;pida que la din&aacute;mica";
 choices[10][1] = "En que la est&aacute;tica es de s&oacute;lo lectura y la din&aacute;mica de lectura/escritura";
 choices[10][2] = "En que la est&aacute;tica no pierde su informaci&oacute;n si se interrumpe la alimentaci&oacute;n y la din&aacute;mica s&iacute;,";
 choices[10][3] = "En que la RAM est&aacute;tica no necesita ciclos de refresco y la din&aacute;mica s&iacute;";
 answers[10] = choices[10][3];
 units[10] = "47";
 comments[10] = "Id Pregunta: 1231. ";


//  Id pregunta: 1241 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  La suma de (-19) y (-10) en complemento a 2 es:";
 choices[11]= new Array();
 choices[11][0] = "&quot;100011&quot;";
 choices[11][1] = "Se produce &quot;overflow&quot;";
 choices[11][2] = "&quot;100010&quot;";
 choices[11][3] = "&quot;110010&quot;";
 answers[11] = choices[11][0];
 units[11] = "";
 comments[11] = "Id Pregunta: 1241. ";


//  Id pregunta: 1242 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  La sustituci&oacute;n de una placa en caliente significa:";
 choices[12]= new Array();
 choices[12][0] = "Que el ordenador debe tener energ&iacute;a en el bus";
 choices[12][1] = "Que se puede hacer con el ordenador funcionando, sin alterar su comportamiento";
 choices[12][2] = "Que debe hacerse inmediatamente despu&eacute;s de haber sacado la defectuosa, en menos tiempo del time out de uso de la placa (normalmente menos de 2 minutos)";
 choices[12][3] = "Son falsas todas las respuestas anteriores";
 answers[12] = choices[12][1];
 units[12] = "47";
 comments[12] = "Id Pregunta: 1242. ";


//  Id pregunta: 1277 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Los operadores fundamentales del &aacute;lgebra relacional utilizada en los lenguajes relacionales de los SGBDR:";
 choices[13]= new Array();
 choices[13][0] = "Pueden combinarse para dar lugar a otros";
 choices[13][1] = "Permiten obtener cualquier subconjunto de los datos contenidos en una base de datos";
 choices[13][2] = "Son cinco: selecci&oacute;n, proyecci&oacute;n, uni&oacute;n, diferencia y producto cartesiano";
 choices[13][3] = "Todas las anteriores respuestas son correctas";
 answers[13] = choices[13][3];
 units[13] = "58";
 comments[13] = "Id Pregunta: 1277. ";


//  Id pregunta: 1288 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  MIGRA";
 choices[14]= new Array();
 choices[14][0] = "Es una norma del CSIAE, que desarrolla SICRES en detalle.";
 choices[14][1] = "Es un proyecto de AENOR para intercambio de informacion entre SIG.";
 choices[14][2] = "Es una herramienta software del los ministerios de Administraciones P&uacute;blicas e Interior que permite el control de la inmigraci&oacute;n ilegal a nuestro pais.";
 choices[14][3] = "Ninguna de las anteriores.";
 answers[14] = choices[14][1];
 units[14] = "67";
 comments[14] = "Id Pregunta: 1288. NULL";


//  Id pregunta: 1290 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  MPI:";
 choices[15]= new Array();
 choices[15][0] = "Es una librer&iacute;a para programaci&oacute;n por paso de mensajes, en entornos distribuidos";
 choices[15][1] = "Es una m&aacute;quina virtual que ejecuta los programas, independientemente del lenguaje con el que se escribieran";
 choices[15][2] = "Es una manera de llamar a todas las aplicaciones que hacen uso de SOAP sobre HTTP";
 choices[15][3] = "Todas son falsas";
 answers[15] = choices[15][0];
 units[15] = "50";
 comments[15] = "Id Pregunta: 1290. JCED - Preparatic XVII";


//  Id pregunta: 1292 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  ODBC:";
 choices[16]= new Array();
 choices[16][0] = "Es un conjunto de drivers que permiten el acceso a datos heterog&eacute;neos";
 choices[16][1] = "Son drivers, exclusivos de Windows, para el acceso a base de datos";
 choices[16][2] = "Es la tecnologia empleada por Microsoft Access para gestionar los datos";
 choices[16][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[16] = choices[16][0];
 units[16] = "58";
 comments[16] = "Id Pregunta: 1292. ";


//  Id pregunta: 1302 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Para saber en Unix los ficheros que cuelgan de un directorio se utiliza el comando:";
 choices[17]= new Array();
 choices[17][0] = "ldir";
 choices[17][1] = "ls";
 choices[17][2] = "pwd";
 choices[17][3] = "ps";
 answers[17] = choices[17][1];
 units[17] = "52,53";
 comments[17] = "Id Pregunta: 1302. ";


//  Id pregunta: 1322 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  RSA es:";
 choices[18]= new Array();
 choices[18][0] = "un algoritmo de clave privada";
 choices[18][1] = "un algoritmo de clave p&uacute;blica";
 choices[18][2] = "un m&eacute;todo de criptoan&aacute;lisis diferencial";
 choices[18][3] = "una infraestructura de clave p&uacute;blica";
 answers[18] = choices[18][1];
 units[18] = "72";
 comments[18] = "Id Pregunta: 1322. ";


//  Id pregunta: 1402 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  Un sistema que reparte un quantum de procesador entre sus usuarios interactivos podr&iacute;a calificarse de:";
 choices[19]= new Array();
 choices[19][0] = "Tiempo compartido";
 choices[19][1] = "Tiempo real";
 choices[19][2] = "Batch";
 choices[19][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[19] = choices[19][0];
 units[19] = "52";
 comments[19] = "Id Pregunta: 1402. ";


//  Id pregunta: 1412 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Una de las caracter&iacute;sticas de un sistema OLTP es: ";
 choices[20]= new Array();
 choices[20][0] = "Homogeneidad de datos almacenados.";
 choices[20][1] = "Alto rendimiento en las operaciones de inserci&oacute;n y actualizaci&oacute;n.";
 choices[20][2] = "Total organizaci&oacute;n.";
 choices[20][3] = "Facilidad para responder a consultas complejas.";
 answers[20] = choices[20][1];
 units[20] = "68";
 comments[20] = "Id Pregunta: 1412. ";


//  Id pregunta: 1497 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  La aplicaci&oacute;n que permite conocer si un sistema est&aacute; accesible es:";
 choices[21]= new Array();
 choices[21][0] = "traceroute";
 choices[21][1] = "ping";
 choices[21][2] = "wake";
 choices[21][3] = "setup";
 answers[21] = choices[21][1];
 units[21] = "52,55";
 comments[21] = "Id Pregunta: 1497. ";


//  Id pregunta: 1507 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Para una corporaci&oacute;n bancaria con un potente mainframe el principal cuello de botella suele ser:";
 choices[22]= new Array();
 choices[22][0] = "Los canales de comunicaciones";
 choices[22][1] = "La memoria del sistema central";
 choices[22][2] = "La velocidad de acceso a los datos";
 choices[22][3] = "La velocidad de los operadores humanos que introducen la informaci&oacute;n";
 answers[22] = choices[22][2];
 units[22] = "46";
 comments[22] = "Id Pregunta: 1507. ";


//  Id pregunta: 1532 AÃ±o de creación de pregunta: 2003-01-01
 questions[23]= "24)  &iquest; Cu&aacute;l de las siguientes no es una distribuci&oacute;n de Linux ?";
 choices[23]= new Array();
 choices[23][0] = "Debian";
 choices[23][1] = "Gentoo";
 choices[23][2] = "Max";
 choices[23][3] = "FreeBSD";
 answers[23] = choices[23][3];
 units[23] = "61,62";
 comments[23] = "Id Pregunta: 1532. ";


//  Id pregunta: 1575 AÃ±o de creación de pregunta: 2003-01-01
 questions[24]= "25)  &iquest;Qu&eacute; es lo que la Firma Digital no garantiza por si sola?";
 choices[24]= new Array();
 choices[24][0] = "Autenticaci&oacute;n";
 choices[24][1] = "Integridad";
 choices[24][2] = "Disponibilidad";
 choices[24][3] = "No repudio";
 answers[24] = choices[24][2];
 units[24] = "72";
 comments[24] = "Id Pregunta: 1575. ";


//  Id pregunta: 1580 AÃ±o de creación de pregunta: 2004-01-01
 questions[25]= "26)  Sobre el algoritmo de cifrado RSA en no es cierto que";
 choices[25]= new Array();
 choices[25][0] = "Es utilizado para firmar digitalmente";
 choices[25][1] = "Fue propuesto por Diffie y Hellman";
 choices[25][2] = "Lo que se cifra con la clave privada se descifra con la p&uacute;blica";
 choices[25][3] = "Lo que se cifra con la clave p&uacute;blica se descifra con la privada";
 answers[25] = choices[25][1];
 units[25] = "72";
 comments[25] = "Id Pregunta: 1580. Tanenbaum";


//  Id pregunta: 1582 AÃ±o de creación de pregunta: 2004-01-01
 questions[26]= "27)  La criptograf&iacute;a cu&aacute;ntica es una t&eacute;cnica basada en";
 choices[26]= new Array();
 choices[26][0] = "Polarizaci&oacute;n de la luz";
 choices[26][1] = "Propiedades de los campos magn&eacute;ticos";
 choices[26][2] = "Ultrasonidos";
 choices[26][3] = "Transmisi&oacute;n de datos a muy alta frecuencia";
 answers[26] = choices[26][0];
 units[26] = "72";
 comments[26] = "Id Pregunta: 1582. Tanenbaum";


//  Id pregunta: 1642 AÃ±o de creación de pregunta: 2004-01-01
 questions[27]= "28)  &iquest;Cu&aacute;l de estas acciones se permite ejecutar en Java a un applet no firmado descargado de Internet?";
 choices[27]= new Array();
 choices[27][0] = "Leer ficheros locales";
 choices[27][1] = "Cargar librer&iacute;as nativas";
 choices[27][2] = "Conectarse a la m&aacute;quina desde la que se descarg&oacute;";
 choices[27][3] = "Llamar a m&eacute;todos privados de otoas applets de la misma p&aacute;gina";
 answers[27] = choices[27][2];
 units[27] = "60";
 comments[27] = "Id Pregunta: 1642. NULL";


//  Id pregunta: 1702 AÃ±o de creación de pregunta: 2006-01-01
 questions[28]= "29)  Las memorias cach&eacute; sirven para:";
 choices[28]= new Array();
 choices[28][0] = "Representar un sistema de almacenamiento secundario basado en jerarqu&iacute;a.";
 choices[28][1] = "Representar un sistema de almacenamiento auxiliar basado en jerarqu&iacute;a.";
 choices[28][2] = "Representar un sistema de almacenamiento secundario basado en la rapidez.";
 choices[28][3] = "Representar un sistema de almacenamiento basado en la rapidez.";
 answers[28] = choices[28][3];
 units[28] = "47";
 comments[28] = "Id Pregunta: 1702. ";


//  Id pregunta: 1729 AÃ±o de creación de pregunta: 2006-01-01
 questions[29]= "30)  El comando de Unix tee";
 choices[29]= new Array();
 choices[29][0] = "Muestra el archivo byte a byte incluyendo caracteres no imprimibles";
 choices[29][1] = "Descompone la entrada en 2 flujos de salida, una es la salida est&aacute;ndar y la otra un archivo";
 choices[29][2] = "no existe";
 choices[29][3] = "Busca un patr&oacute;n en uno o m&aacute;s archivos";
 answers[29] = choices[29][1];
 units[29] = "54";
 comments[29] = "Id Pregunta: 1729. NULL";


//  Id pregunta: 1734 AÃ±o de creación de pregunta: 2006-01-01
 questions[30]= "31)  Un sistema operativo trata de obtener el m&aacute;ximo rendimiento del hardware que controla. La multitarea y la existencia de varios procesadores son algunas herramientas para conseguirlo. Se&ntilde;ale qu&eacute; afirmaci&oacute;n es cierta:";
 choices[30]= new Array();
 choices[30][0] = "No existe incompatibilidad en emplear multiprogramaci&oacute;n y tiempo compartido en un sistema multiprocesador.";
 choices[30][1] = "Una transacci&oacute;n se inicia con la petici&oacute;n de un terminal y acaba con la respuesta de la CPU.";
 choices[30][2] = "En un sistema con time-sharing, la asignaci&oacute;n de prioridades a unos procesos respecto de otros no mejora el rendimiento.";
 choices[30][3] = "El sistema operativo no es responsable de la sincronizaci&oacute;n de procesos, son las aplicaciones quienes se encargan de esa tarea.";
 answers[30] = choices[30][0];
 units[30] = "55";
 comments[30] = "Id Pregunta: 1734. ";


//  Id pregunta: 1737 AÃ±o de creación de pregunta: 2006-01-01
 questions[31]= "32)  El sistema operativo WindowsNT se basaba en una estructura de n&uacute;cleo de sistema operativo";
 choices[31]= new Array();
 choices[31][0] = "Microkernel";
 choices[31][1] = "Monol&iacute;tico";
 choices[31][2] = "Anillo";
 choices[31][3] = "Red";
 answers[31] = choices[31][0];
 units[31] = "56";
 comments[31] = "Id Pregunta: 1737. ";


//  Id pregunta: 1769 AÃ±o de creación de pregunta: 2006-01-01
 questions[32]= "33)  Los applets de JAVA:";
 choices[32]= new Array();
 choices[32][0] = "Se puede incluir en una p&aacute;gina HTML de forma mediante una etiqueta especial &lt;add_applet&gt;";
 choices[32][1] = "Un applet nunca puede hacer conexiones a la m&aacute;quina de la que se descarg&oacute;.";
 choices[32][2] = "El navegador invoca el m&eacute;todo init() sobre un applet cada vez que se va a mostrar la p&aacute;gina que contiene &eacute;ste.";
 choices[32][3] = "Para firmar un applet se tiene que crear un fichero de archivo JAR con las clases que componen el applet, un fichero de metainformaci&oacute;n y el fichero de firma.";
 answers[32] = choices[32][3];
 units[32] = "60";
 comments[32] = "Id Pregunta: 1769. NULL";


//  Id pregunta: 1772 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  &iquest;Qu&eacute; es un fichero JAR?";
 choices[33]= new Array();
 choices[33][0] = "Es el fichero que proporciona el entorno de ejecuci&oacute;n de java,  as&iacute; como una API gr&aacute;fica para el desarrollo de aplicaciones y applets.";
 choices[33][1] = "Es el fichero que empaqueta el entorno de ejecuci&oacute;n de java.";
 choices[33][2] = "Es el fichero que contiene el c&oacute;digo intermedio de java.";
 choices[33][3] = "Es un fichero en el que se re&uacute;nen las clases, im&aacute;genes, sonidos y otros ficheros necesarios para la ejecuci&oacute;n de un applet o una aplicaci&oacute;n Java.";
 answers[33] = choices[33][3];
 units[33] = "60";
 comments[33] = "Id Pregunta: 1772. NULL";


//  Id pregunta: 1824 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  Las herramientas para la elaboraci&oacute;n de informes y listados, tanto en detalle como sobre informaci&oacute;n agregada, a partir de la informaci&oacute;n de los Datawarehouse y datamarts se conocen como herramientas de:";
 choices[34]= new Array();
 choices[34][0] = "OLAP.";
 choices[34][1] = "Query &amp; reporting.";
 choices[34][2] = "Cuadro de mando anal&iacute;tico.";
 choices[34][3] = "Datamining.";
 answers[34] = choices[34][1];
 units[34] = "68";
 comments[34] = "Id Pregunta: 1824. ";


//  Id pregunta: 1888 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  Se&ntilde;ale la afirmaci&oacute;n verdadera:";
 choices[35]= new Array();
 choices[35][0] = "Una copia de seguridad diaria incluye todos los archivos seleccionados que se hayan modificado, desactivando el atributo de modificado";
 choices[35][1] = "Una copia de seguridad intermedia incluye todos los archivos pero no los marca individualmente como copiados (es decir, no desactiva el atributo de modificado)";
 choices[35][2] = "Una copia de seguridad diferencial s&oacute;lo copia los archivos creados o modificados desde la &uacute;ltima copia de seguridad normal o incremental";
 choices[35][3] = "Ninguna de las anteriores";
 answers[35] = choices[35][1];
 units[35] = "97";
 comments[35] = "Id Pregunta: 1888. NULL";


//  Id pregunta: 1890 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no corresponde a un sistema de alimentaci&oacute;n ininterrumpida?";
 choices[36]= new Array();
 choices[36][0] = "Dispone de bater&iacute;as.";
 choices[36][1] = "Tiene capacidad limitada para salvaguardar informaci&oacute;n y apagado del sistema.";
 choices[36][2] = "Convierte energ&iacute;a mec&aacute;nica en energ&iacute;a el&eacute;ctrica.";
 choices[36][3] = "Generalmente se utiliza con servidores, dispositivos de almacenamiento y de comunicaciones.";
 answers[36] = choices[36][2];
 units[36] = "97";
 comments[36] = "Id Pregunta: 1890. NULL";


//  Id pregunta: 1896 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  En la protecci&oacute;n de contrase&ntilde;as, la cadena aleatoria de datos usada para modificar el hash de contrase&ntilde;a se llama";
 choices[37]= new Array();
 choices[37][0] = "sal";
 choices[37][1] = "dongle";
 choices[37][2] = "semilla";
 choices[37][3] = "marca de agua";
 answers[37] = choices[37][0];
 units[37] = "74";
 comments[37] = "Id Pregunta: 1896. NULL";


//  Id pregunta: 1910 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  Respecto de la SSI (Single System Image) de un cluster, es falso que:";
 choices[38]= new Array();
 choices[38][0] = "Es generada por un middleware que se situa entre el entorno de usuario y el sistema operativo.";
 choices[38][1] = "Podemos encontrar SSIs hardware, a nivel de kernel de sistema operativo y de aplicaci&oacute;n.";
 choices[38][2] = "La soluci&oacute;n de SSI m&aacute;s eficiente en cuanto a tiempos de ejecuci&oacute;n es la implementada en el kernel del sistema operativo.";
 choices[38][3] = "Genera una apariencia de recurso unificado a partir de un grupo de computadores interconectados.";
 answers[38] = choices[38][2];
 units[38] = "45";
 comments[38] = "Id Pregunta: 1910. ";


//  Id pregunta: 4314 AÃ±o de creación de pregunta: 2007-01-01
 questions[39]= "40)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre granjas de servidores (web farms) no es correcta?";
 choices[39]= new Array();
 choices[39][0] = "Una granja es un tipo de sistema de procesamiento distribuido, que consiste en un grupo de servidores interconectados trabajando de forma conjunta como un &uacute;nico recurso de computaci&oacute;n integrado.";
 choices[39][1] = "En una granja de servidores, los servidores pueden tener sistemas operativos individuales o compartidos, y tambi&eacute;n debe ser instalados para proporcionar el balanceo de la carga cuando hay muchas peticiones al servidor";
 choices[39][2] = "La decisi&oacute;n para distribuir la carga a un servidor en particular debe ser una opci&oacute;n preprogramada est&aacute;ticamente, pues es imposible la reconfiguraci&oacute;n din&aacute;mica.";
 choices[39][3] = "La red es la parte m&aacute;s cr&iacute;tica de una granja. Su capacidad y funcionamiento influyen en el rendimiento del sistema completo";
 answers[39] = choices[39][2];
 units[39] = "49";
 comments[39] = "Id Pregunta: 4314. ";


//  Id pregunta: 4453 AÃ±o de creación de pregunta: 2007-01-01
 questions[40]= "41)  La utilidad de Microsoft para sincronizar los contenidos de un Pocket PC y una estaci&oacute;n Windows XP se denomina:";
 choices[40]= new Array();
 choices[40][0] = "MS PowerSync";
 choices[40][1] = "MS Syncronizer";
 choices[40][2] = "MS ActiveSync";
 choices[40][3] = "MS PocketSync";
 answers[40] = choices[40][2];
 units[40] = "56";
 comments[40] = "Id Pregunta: 4453. ";


//  Id pregunta: 4459 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  El uso de mecanismos como JDBC u ODBC:";
 choices[41]= new Array();
 choices[41][0] = "Proporciona independencia respecto al SGBD utilizado.";
 choices[41][1] = "Proporcionan generalmente un mayor rendimiento y funcionalidad que las APIs nativas de los SGBD.";
 choices[41][2] = "Tienen poca importancia en sistemas donde se acceden a SGBD heterog&eacute;neos.";
 choices[41][3] = "Se utilizan &uacute;nicamente en arquitecturas cliente-servidor, no en entornos de aplicaciones WEB.";
 answers[41] = choices[41][0];
 units[41] = "58";
 comments[41] = "Id Pregunta: 4459. ";


//  Id pregunta: 4528 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  &iquest;Que son las siguientes herramientas comerciales: DESIGNER de Oracle, EASY CASE de Evergreen, PREDICT CASE de Software AG y ROSE de Rational?";
 choices[42]= new Array();
 choices[42][0] = "Herramientas CASE de pruebas y generaci&oacute;n de c&oacute;digo.";
 choices[42][1] = "Herramientas de gesti&oacute;n de configuraci&oacute;n.";
 choices[42][2] = "Herramientas para Ia m&eacute;trica de software.";
 choices[42][3] = "Herramientas CASE de an&aacute;lisis y dise&ntilde;o.";
 answers[42] = choices[42][3];
 units[42] = "";
 comments[42] = "Id Pregunta: 4528. ";


//  Id pregunta: 4603 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  El driver JDBC-ODBC bridge, se utiliza";
 choices[43]= new Array();
 choices[43][0] = "cuando no existen drivers JDBC nativos.";
 choices[43][1] = "Para garantizar el &eacute;xito de los accesos a la BD.";
 choices[43][2] = "como variable de Ia tecnolog&iacute;a ODBC.";
 choices[43][3] = "para implementar operaciones ODBC, traduci&eacute;ndolas en operaciones JDBC";
 answers[43] = choices[43][0];
 units[43] = "60";
 comments[43] = "Id Pregunta: 4603. NULL";


//  Id pregunta: 4800 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  En una base de datos relacional en la cual K es una clave primaria simple de una relaci&oacute;n R1, y el atributo A, perteneciente a una clave compuesta de una relaci&oacute;n R2, est&aacute; definido en el mismo dominio que K, &iquest;cu&aacute;l de las afirmaciones NO es cierta?";
 choices[44]= new Array();
 choices[44][0] = "Si la clave compuesta de la relaci&oacute;n R2 a la que pertenece A es primaria, puede existir un valor de K en R1 cuyo valor sea igual al valor de A";
 choices[44][1] = "Si la clave compuesta de la relaci&oacute;n R2 a la que pertenece A no es primaria, A puede tener un valor diferente a los posibles valores de K";
 choices[44][2] = "Si la clave compuesta de la relaci&oacute;n R2 a la que pertenece A es primaria, A no puede tener un valor nulo";
 choices[44][3] = "Si la clave compuesta de la relaci&oacute;n R2 a la que pertenece A no es primaria, A puede tener un valor nulo";
 answers[44] = choices[44][1];
 units[44] = "57";
 comments[44] = "Id Pregunta: 4800. ";


//  Id pregunta: 5054 AÃ±o de creación de pregunta: 2003-01-01
 questions[45]= "46)  RDF (Resource Description Framework) es un:";
 choices[45]= new Array();
 choices[45][0] = "Lenguaje del W3C para representar informaci&oacute;n sobre recursos en la Web";
 choices[45][1] = "Est&aacute;ndar del W3C para la definici&oacute;n de datos";
 choices[45][2] = "Est&aacute;ndar para la creaci&oacute;n de p&aacute;ginas web accesibles";
 choices[45][3] = "Est&aacute;ndar para la descripci&oacute;n de los recursos inform&aacute;ticos de una organizaci&oacute;n";
 answers[45] = choices[45][0];
 units[45] = "39";
 comments[45] = "Id Pregunta: 5054. Examen TIC A 2007";


//  Id pregunta: 5097 AÃ±o de creación de pregunta: 2003-01-01
 questions[46]= "47)  Seg&uacute;n la Directiva comunitaria 1999/93/CE de firma electr&oacute;nica, NO es un requisito de los proveedores de servicios de certificaci&oacute;n que expiden certificados reconocidos:";
 choices[46]= new Array();
 choices[46][0] = "Comprobar debidamente, de conformidad con el Derecho nacional, la identidad y, si procede, cualesquiera atributos espec&iacute;ficos de la persona a la que se expide un certificado reconocido";
 choices[46][1] = "Utilizar sistemas y productos fiables que est&eacute;n protegidos contra toda alteraci&oacute;n y que garanticen la seguridad t&eacute;cnica y criptogr&aacute;fica de los procedimientos con que trabajan";
 choices[46][2] = "Almacenar o copiar los datos de creaci&oacute;n de firma de la persona a la que el proveedor de servicios de certificaci&oacute;n ha prestado servicios de gesti&oacute;n de claves";
 choices[46][3] = "Disponer de recursos econ&oacute;micos suficientes para operar de conformidad con lo dispuesto en la presente Directiva, en particular para afrontar el riesgo de responsabilidad por da&ntilde;os y perjuicios, por ejemplo contratando un seguro apropiado";
 answers[46] = choices[46][2];
 units[46] = "30";
 comments[46] = "Id Pregunta: 5097. ";


//  Id pregunta: 5098 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  Una multa de 60.000 euros podr&iacute;a corresponder, seg&uacute;n la ley de firma electr&oacute;nica, a la comisi&oacute;n de una infracci&oacute;n:";
 choices[47]= new Array();
 choices[47][0] = "Muy grave";
 choices[47][1] = "Grave";
 choices[47][2] = "Leve ";
 choices[47][3] = "No est&aacute; tipificado tal importe";
 answers[47] = choices[47][1];
 units[47] = "30";
 comments[47] = "Id Pregunta: 5098. Ley 59/2003, art&iacute;culo 32";


//  Id pregunta: 5434 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  &iquest;En que se diferencia la firma electr&oacute;nica reconocida de la firma electr&oacute;nica avanzada?";
 choices[48]= new Array();
 choices[48][0] = "En que la segunda ha supuesto un mayor refinamiento en los niveles de seguridad";
 choices[48][1] = "En el tipo de certificado digital implicado";
 choices[48][2] = "En el tipo de dispositivo criptogr&aacute;fico utilizado para la custodia del certificado digital";
 choices[48][3] = "En que la segunda es completamente equivalente a la firma manuscrita";
 answers[48] = choices[48][2];
 units[48] = "30";
 comments[48] = "Id Pregunta: 5434. Castilla y Le&oacute;n (Ley 59/2003, art&iacute;culo 3)";


//  Id pregunta: 5460 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  El sello de oro del modelo EFQM se obtiene a partir de una evaluaci&oacute;n de:";
 choices[49]= new Array();
 choices[49][0] = "400 puntos sobre 1000";
 choices[49][1] = "500 puntos sobre 1000";
 choices[49][2] = "700 puntos sobre 1000";
 choices[49][3] = "900 puntos sobre 1000";
 answers[49] = choices[49][1];
 units[49] = "88";
 comments[49] = "Id Pregunta: 5460. Castilla y Le&oacute;n";


//  Id pregunta: 5494 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  SWT (Standard Widget Toolkit)";
 choices[50]= new Array();
 choices[50][0] = "El rendimiento de la librer&iacute;a AWT es mejor que la de SWT";
 choices[50][1] = "Es una librer&iacute;a que proporciona funcionalidades de componentes gr&aacute;ficos  para la plataforma Eclipse.";
 choices[50][2] = "a y b son ciertas";
 choices[50][3] = "Se ha desarrollado puramente en Java";
 answers[50] = choices[50][1];
 units[50] = "60";
 comments[50] = "Id Pregunta: 5494. NULL";


//  Id pregunta: 5640 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  Acerca de los sistemas operativos, se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[51]= new Array();
 choices[51][0] = "Un  S.O. en Red da la visi&oacute;n de estar ejecut&aacute;ndose en una &uacute;nica m&aacute;quina, no en m&aacute;quinas independientes";
 choices[51][1] = "Los S.O. Distribuidos se ejecutan sobre un conjunto de nodos independientes conectados en red, pero no hacen creer al usuario que se trate de un sistema centralizado   ";
 choices[51][2] = "En un S.O. en Red cada m&aacute;quina ejecuta una copia del S.O. ";
 choices[51][3] = "Los sistemas operativos distribuidos fueron el punto de partida para la implementaci&oacute;n de sistemas operativos centralizados";
 answers[51] = choices[51][2];
 units[51] = "50";
 comments[51] = "Id Pregunta: 5640. ";


//  Id pregunta: 5672 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  Indique la respuesta incorrecta en las siguientes afirmaciones respecto al Directorio Activo:";
 choices[52]= new Array();
 choices[52][0] = "El modelo de datos de Active Directory deriva del modelo de datos X.500";
 choices[52][1] = "Active Directory utiliza DNS como servicio de ubicaci&oacute;n";
 choices[52][2] = "El identificador &uacute;nico global de objetos, GUID, es un n&uacute;mero de 64 bitsdel que se garantiza su unicidad, y que se asigna a los objetos cuando secrean.";
 choices[52][3] = "En la lista de protocolos compatibles se incluye LDAP, en sus versiones 2 y 3.";
 answers[52] = choices[52][2];
 units[52] = "56";
 comments[52] = "Id Pregunta: 5672. ";


//  Id pregunta: 5688 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  Se&ntilde;ale donde se encuentran los datos biom&eacute;tricos y de identidad en el chip criptogr&aacute;fico del DNI electr&oacute;nico:";
 choices[53]= new Array();
 choices[53][0] = "Zona de seguridad";
 choices[53][1] = "Zona p&uacute;blica";
 choices[53][2] = "Zona privada";
 choices[53][3] = "Zona confidencial";
 answers[53] = choices[53][0];
 units[53] = "74";
 comments[53] = "Id Pregunta: 5688. NULL";


//  Id pregunta: 5697 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  &iquest;C&oacute;mo se conecta el DNI electr&oacute;nico al ordenador personal del ciudadano?";
 choices[54]= new Array();
 choices[54][0] = "Es necesario un lector de tarjetas espec&iacute;fico dise&ntilde;ado por la Direcci&oacute;n General de la Polic&iacute;a, que se puede obtener en las comisar&iacute;as";
 choices[54][1] = " A trav&eacute;s de un lector de tarjetas que cumpla el standard ISO-7816";
 choices[54][2] = "Con un lector de tarjetas espec&iacute;fico dise&ntilde;ado por la Direcci&oacute;n General de la Polic&iacute;a, que se puede obtener en establecimientos comerciales";
 choices[54][3] = "No es posible conectarlo a ordenadores personales, s&oacute;lo los especialmente habilitados para ello por la Direcci&oacute;n General de la Polic&iacute;a";
 answers[54] = choices[54][1];
 units[54] = "74";
 comments[54] = "Id Pregunta: 5697. NULL";


//  Id pregunta: 5711 AÃ±o de creación de pregunta: 2009-01-01
 questions[55]= "56)  &iquest;Cu&aacute;l de los siguientes no es un tipo de modelo de datos multidimensional?";
 choices[55]= new Array();
 choices[55][0] = "HOLAP.";
 choices[55][1] = "DOLAP.";
 choices[55][2] = "MOLAP.";
 choices[55][3] = "ROLAP.";
 answers[55] = choices[55][1];
 units[55] = "68";
 comments[55] = "Id Pregunta: 5711. ";


//  Id pregunta: 5756 AÃ±o de creación de pregunta: 2009-01-01
 questions[56]= "57)  En el contexto de la Inteligencia Artifical, &iquest;cu&aacute;l de los siguientes es un tipo de Red Neuronal?";
 choices[56]= new Array();
 choices[56][0] = "Fenomenol&oacute;gica";
 choices[56][1] = "Facial";
 choices[56][2] = "De Bradley";
 choices[56][3] = "Perceptr&oacute;n";
 answers[56] = choices[56][3];
 units[56] = "63";
 comments[56] = "Id Pregunta: 5756. ";


//  Id pregunta: 5893 AÃ±o de creación de pregunta: 2009-01-01
 questions[57]= "58)  &iquest;Qu&eacute; es JNI?";
 choices[57]= new Array();
 choices[57][0] = "Un API de Java para acceder a servicios de nombre y directorio";
 choices[57][1] = "Un API de Java para invocar m&eacute;todos escritos en otros lenguajes";
 choices[57][2] = "Un API de Java para crear interfaces gr&aacute;ficas de usuario";
 choices[57][3] = "Ninguna de las anteriores";
 answers[57] = choices[57][1];
 units[57] = "60";
 comments[57] = "Id Pregunta: 5893. NULL";


//  Id pregunta: 6061 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  HTML est&aacute; estandarizado por:";
 choices[58]= new Array();
 choices[58][0] = "World Wide Web Consortium - W3C.";
 choices[58][1] = "Internet Engineering Task Force - IETF.";
 choices[58][2] = "Institute os Management Accountants - IMA.";
 choices[58][3] = "International Accounting Standard Board - IASB.";
 answers[58] = choices[58][0];
 units[58] = "69";
 comments[58] = "Id Pregunta: 6061. TIC A 2009";


//  Id pregunta: 6317 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  &iquest;Cu&aacute;l de las siguientes sentencias es cierta respecto a las bases de datos relacionales?";
 choices[59]= new Array();
 choices[59][0] = "Soportan las interrelaciones l&oacute;gicas entre los datos.";
 choices[59][1] = "No soportan el acceso directo a un registro espec&iacute;fico.";
 choices[59][2] = "Es complicado el acceso a varios registros relacionados con un registro simple.";
 choices[59][3] = "El acceso a los datos es l&oacute;gico, dependiente de las t&eacute;cnicas de instrumentaci&oacute;n f&iacute;sica.";
 answers[59] = choices[59][0];
 units[59] = "58";
 comments[59] = "Id Pregunta: 6317. ";


//  Id pregunta: 6323 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  Toda sentencia SQL tiene al menos los siguientes elementos:";
 choices[60]= new Array();
 choices[60][0] = "SELECT, FROM";
 choices[60][1] = "SELECT, FROM y WHERE";
 choices[60][2] = "SELECT, FROM, o bien WHERE o bien HAVING";
 choices[60][3] = "SELECT, FROM y ORDER BY";
 answers[60] = choices[60][0];
 units[60] = "58";
 comments[60] = "Id Pregunta: 6323. ";


//  Id pregunta: 6324 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  La cl&aacute;usula INSERT para inserci&oacute;n de datos";
 choices[61]= new Array();
 choices[61][0] = "Tan s&oacute;lo permite la inserci&oacute;n de una tupla cada vez.";
 choices[61][1] = "Puede permitir la inserci&oacute;n de m&aacute;s de una tupla al mismo tiempo.";
 choices[61][2] = "No permite insertar valores nulos.";
 choices[61][3] = "Obliga a que la inserci&oacute;n de los valores sea en el orden en que se cre&oacute; la tabla.";
 answers[61] = choices[61][1];
 units[61] = "58";
 comments[61] = "Id Pregunta: 6324. ";


//  Id pregunta: 6325 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  Para modificar la estructura de una tabla en SQL";
 choices[62]= new Array();
 choices[62][0] = "No se puede modificar la estuctura de la tabla despu&eacute;s de que se ha puesto en producci&oacute;n.";
 choices[62][1] = "Las tablas se modifican con el comando UPDATE.";
 choices[62][2] = "Las tablas se modifican con el comando ALTER.";
 choices[62][3] = "Existen distintos comandos, pero lo importante es que la tabla est&eacute; vacia.";
 answers[62] = choices[62][2];
 units[62] = "58";
 comments[62] = "Id Pregunta: 6325. ";


//  Id pregunta: 6431 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  &iquest;Qu&eacute; es Putty?";
 choices[63]= new Array();
 choices[63][0] = "Un cliente SSH";
 choices[63][1] = "Un software de virtualizaci&oacute;n";
 choices[63][2] = "Una suite ofim&aacute;tica";
 choices[63][3] = "Ninguna de las anteriores";
 answers[63] = choices[63][0];
 units[63] = "62";
 comments[63] = "Id Pregunta: 6431. NULL";


//  Id pregunta: 6506 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  El sistema operativo Ubuntu est&aacute; desarrollado por:";
 choices[64]= new Array();
 choices[64][0] = "Red Hat";
 choices[64][1] = "Novell";
 choices[64][2] = "Canonical";
 choices[64][3] = "MIT";
 answers[64] = choices[64][2];
 units[64] = "53";
 comments[64] = "Id Pregunta: 6506. NULL";


//  Id pregunta: 6592 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  Un tipo de software que lleva al cabo una auditor&iacute;a de todo el software y hardware que se encuentra en una red de una manera sencilla, adem&aacute;s de eficiente es";
 choices[65]= new Array();
 choices[65][0] = "RFFLow Flowchart";
 choices[65][1] = "Network Inventory Advisor";
 choices[65][2] = "Tcpdump";
 choices[65][3] = "Todas las respuestas anteriores son incorrectas";
 answers[65] = choices[65][3];
 units[65] = "75";
 comments[65] = "Id Pregunta: 6592. NULL";


//  Id pregunta: 6597 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  Una auditor&iacute;a de acuerdo al RD 1720/2007, implica el llevar a cabo:";
 choices[66]= new Array();
 choices[66][0] = "An&aacute;lisis de la red de comunicaciones";
 choices[66][1] = "An&aacute;lisis de los sistemas operativos";
 choices[66][2] = "An&aacute;lisis de los ficheros automatizados";
 choices[66][3] = "Todas las respuestas anteriores son correctas";
 answers[66] = choices[66][3];
 units[66] = "75";
 comments[66] = "Id Pregunta: 6597. NULL";


//  Id pregunta: 7159 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  En relaci&oacute;n a la administraci&oacute;n de procesos de los sistemas operativos, &iquest;en qu&eacute; consiste la planificaci&oacute;n round-robin?";
 choices[67]= new Array();
 choices[67][0] = "En asignar un tiempo de ejecuci&oacute;n a cada proceso";
 choices[67][1] = "En ejecutar primero el proceso m&aacute;s corto";
 choices[67][2] = "En asignar a cada proceso una prioridad y ejecutar el proceso que m&aacute;s prioridad tenga";
 choices[67][3] = "En ejecutar los procesos de forma aleatoria";
 answers[67] = choices[67][0];
 units[67] = "52";
 comments[67] = "Id Pregunta: 7159. Examen TIC B 2009";


//  Id pregunta: 7320 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)  Cu&aacute;l de las siguientes afirmaciones sobre Visual Studio .NET no es cierta:";
 choices[68]= new Array();
 choices[68][0] = "Es un IDE (Entorno Integrado de Desarrollo) desarrollado por Microsoft";
 choices[68][1] = "Permite la programaci&oacute;n WYSIWYG (What You See Is What You Get)";
 choices[68][2] = "Los programas desarrollados con Visual Studio .NET &uacute;nicamente pueden usar SQL Server para el almacenamiento de datos";
 choices[68][3] = "Las versiones Express Editions se ofrecen gratuitamente";
 answers[68] = choices[68][2];
 units[68] = "59";
 comments[68] = "Id Pregunta: 7320. NULL";


//  Id pregunta: 8166 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  AGNUBIS, aplicaci&oacute;n del entorno de escritorio de GNOME, es:";
 choices[69]= new Array();
 choices[69][0] = "Un interfaz gr&aacute;fico para el dibujo de gr&aacute;ficos y manipulaciones estad&iacute;sticas.";
 choices[69][1] = "Un programa de presentaciones similar a MS POWER POINT.";
 choices[69][2] = "Un programa de dibujo vectorial que puede trabajar con archivos 5VG.";
 choices[69][3] = "El gestor de archivos oficial de GNOME.";
 answers[69] = choices[69][1];
 units[69] = "62";
 comments[69] = "Id Pregunta: 8166. Examen TIC A1 2010";


//  Id pregunta: 8459 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  &iquest;Cu&aacute;l de estos benchmarks se emplea para medir la capacidad de OLTP para una determinada configuraci&oacute;n hardware y software?";
 choices[70]= new Array();
 choices[70][0] = "TPC-C.";
 choices[70][1] = "TPC-R.";
 choices[70][2] = "TPC-H.";
 choices[70][3] = "TPC-A.";
 answers[70] = choices[70][0];
 units[70] = "68";
 comments[70] = "Id Pregunta: 8459. Analista Ayto. Madrid 2010";


//  Id pregunta: 8514 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  Algunas Comunidades Aut&oacute;nomas han realizado de forma gratuita y totalmente personalizada distribuciones de software libre. Indique la asociaci&oacute;n INCORRECTA: ";
 choices[71]= new Array();
 choices[71][0] = "Lluirex - Valencia";
 choices[71][1] = "MAX - Madrid";
 choices[71][2] = "LinKat - Catalu&ntilde;a";
 choices[71][3] = "mEDUxa - Baleares";
 answers[71] = choices[71][3];
 units[71] = "61";
 comments[71] = "Id Pregunta: 8514. Examen TIC A2 2010";


//  Id pregunta: 8641 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  En la arquitectura ANSI SQL la capacidad do modificar el esquema interno sin tener que alterar el esquema conceptual (o los externos) es lo que se conoce como:";
 choices[72]= new Array();
 choices[72][0] = "Independencia f&iacute;sica.";
 choices[72][1] = "Independencia L&oacute;gica.";
 choices[72][2] = "Integridad de la entidad";
 choices[72][3] = "Integridad referencial.";
 answers[72] = choices[72][0];
 units[72] = "57, 58";
 comments[72] = "Id Pregunta: 8641. Examen TIC A2 2010 interna";


//  Id pregunta: 8857 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  Si en fichero de estilos.css, se incluye: #inner { float: right; width: 130px; color: blue }, &iquest;c&oacute;mo se utilizar&iacute;a el estilo indicado en un p&aacute;rrafo de home.html?";
 choices[73]= new Array();
 choices[73][0] = "&lt;P style=&rdquo;inner&rdquo;&gt;";
 choices[73][1] = "&lt;P id=&rdquo;inner&rdquo;&gt;";
 choices[73][2] = "&lt;P class=&rdquo;inner&rdquo;&gt;";
 choices[73][3] = "&lt;P font=inner&gt;";
 answers[73] = choices[73][1];
 units[73] = "69";
 comments[73] = "Id Pregunta: 8857. Analista Ayto. Madrid 2010";


//  Id pregunta: 8881 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  ODBC son las siglas de:";
 choices[74]= new Array();
 choices[74][0] = "Open DataBase Consortium";
 choices[74][1] = "Open Data Business Connectivity";
 choices[74][2] = "Open DataBase Connectivity";
 choices[74][3] = "Object DataBase Consortium";
 answers[74] = choices[74][2];
 units[74] = "57, 58";
 comments[74] = "Id Pregunta: 8881. Examen UPM A2 2011";


//  Id pregunta: 9040 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  &iquest;Cu&aacute;l de los siguientes es un motor para la creaci&oacute;n de servicios Web en Java?";
 choices[75]= new Array();
 choices[75][0] = "Apache Axis2";
 choices[75][1] = "Hibernate";
 choices[75][2] = "Struts";
 choices[75][3] = "TopLink";
 answers[75] = choices[75][0];
 units[75] = "60";
 comments[75] = "Id Pregunta: 9040. NULL";


//  Id pregunta: 9089 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  &iquest;C&oacute;mo se realiza la protecci&oacute;n de un programa de ordenador?";
 choices[76]= new Array();
 choices[76][0] = "A la hora de crear el programa, el autor debe decidir qu&eacute; tipo de protecci&oacute;n quiere otorgarle, si a trav&eacute;s de la ley de patentes o a trav&eacute;s de la ley de propiedad intelectual";
 choices[76][1] = "A traves de la ley de patentes";
 choices[76][2] = "Nunca puede realizarse a trav&eacute;s de la ley de patentes";
 choices[76][3] = "Si el programa forma parte de una patente, tambi&eacute;n estar&aacute; protegido por la ley de propiedad intelectual";
 answers[76] = choices[76][3];
 units[76] = "36";
 comments[76] = "Id Pregunta: 9089. ";


//  Id pregunta: 9157 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  De acuerdo a AGR010, un sistema CMI (Computer Managed Instruction) con un entorno basado en web, no tiene por qu&eacute; cumplir con:";
 choices[77]= new Array();
 choices[77][0] = "Comunicaci&oacute;n HTTP (HACP Binding)";
 choices[77][1] = "Comunicaci&oacute;n mediante API (API Binding)";
 choices[77][2] = "Definici&oacute;n de la estructura del curso (File Binding)";
 choices[77][3] = "Definici&oacute;n de los tipos de datos del curso (Data Binding) ";
 answers[77] = choices[77][3];
 units[77] = "66";
 comments[77] = "Id Pregunta: 9157. ";


//  Id pregunta: 9225 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  Un conjunto de procesadores interconectados por redes que ocultan dicha caracter&iacute;stica mostrando una visi&oacute;n al usuario de &ldquo;uniprocesador virtual&rdquo; es:";
 choices[78]= new Array();
 choices[78][0] = "S. O. Distribuido";
 choices[78][1] = "S.O. Cooperativos o basados en Middlewares";
 choices[78][2] = "S. O. En Red";
 choices[78][3] = "S.O. Centralizados";
 answers[78] = choices[78][0];
 units[78] = "50";
 comments[78] = "Id Pregunta: 9225. ";


//  Id pregunta: 9278 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  Indique la frase EQUIVOCADA acerca del sistema de archivos de Windows";
 choices[79]= new Array();
 choices[79][0] = "NTFS es el sistema de archivo por defecto en Windows XP y Windows 7 y utiliza direcciones de bloques (LCN) de 64 bits";
 choices[79][1] = "Los archivos NTFS presentan varios atributos, cada uno de los cuales se representan con una secuencia de bytes.";
 choices[79][2] = "Una partici&oacute;n de disco NTFS se organiza como una secuencia lineal de bloques de tama&ntilde;o fijo.";
 choices[79][3] = "Un volumen NTFS cuenta con dos tablas MFT, una para describir los archivos (MTF-F) y otra para los directorios (MTF-D).";
 answers[79] = choices[79][3];
 units[79] = "56";
 comments[79] = "Id Pregunta: 9278. Examen TIC-A1 2011";


//  Id pregunta: 9709 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  La programaci&oacute;n funcional limita el uso de";
 choices[80]= new Array();
 choices[80][0] = "estados mutables.";
 choices[80][1] = "expresiones lambda.";
 choices[80][2] = "procedimientos como par&aacute;metros.";
 choices[80][3] = "lenguajes como Erlang, F# o Scala.";
 answers[80] = choices[80][0];
 units[80] = "60";
 comments[80] = "Id Pregunta: 9709. Examen TIC-A1 2013";


//  Id pregunta: 9727 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  Los grandes sistemas, tambi&eacute;n llamados mainframe";
 choices[81]= new Array();
 choices[81][0] = "son desarrollados por muchos fabricantes.";
 choices[81][1] = "usan memoria distribuida y no compartida.";
 choices[81][2] = "son soluciones altamente propietarias.";
 choices[81][3] = "son sistemas d&eacute;bilmente acoplados.";
 answers[81] = choices[81][2];
 units[81] = "46";
 comments[81] = "Id Pregunta: 9727. Examen TIC-A1 2013";


//  Id pregunta: 9742 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  Con respecto al Entity Framework &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[82]= new Array();
 choices[82][0] = "Para usar Entity framework se requiere una versi&oacute;n del framework de .Net de 2.0, o superior.";
 choices[82][1] = "Entity framework es la implementaci&oacute;n del Modelo Vista Controlador (MVC) en .NET.";
 choices[82][2] = "El contexto en el Entity Framework es el punto de arranque dentro del espacio de nombres.";
 choices[82][3] = "Entity es una clase u objeto que representa los datos de la aplicaci&oacute;n.";
 answers[82] = choices[82][3];
 units[82] = "59";
 comments[82] = "Id Pregunta: 9742. Examen TIC-A2 2013-Libre";


//  Id pregunta: 10057 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  El algoritmo SHA-1 (RFC 3174) produce un resumen de salida de:";
 choices[83]= new Array();
 choices[83][0] = "128 bits ";
 choices[83][1] = "160 bits";
 choices[83][2] = "224 bits ";
 choices[83][3] = "256 bits";
 answers[83] = choices[83][1];
 units[83] = "72";
 comments[83] = "Id Pregunta: 10057. TIC A2, promoci&oacute;n interna, Examen 2013";


//  Id pregunta: 10228 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  Se&ntilde;ala las respuestas correctas sobre los objetos java.util.Vector y java.util.Hashtable:";
 choices[84]= new Array();
 choices[84][0] = "Un Vector puede almacenar referencias de objetos y tipos de datos primitivos";
 choices[84][1] = "Un Vector almacena referencias de objetos en el orden en que son a&ntilde;adidas";
 choices[84][2] = "A y B son ciertas";
 choices[84][3] = "La Hashtable almacena referencias de objetos en el orden en que son a&ntilde;adidas";
 answers[84] = choices[84][2];
 units[84] = "60";
 comments[84] = "Id Pregunta: 10228. La A es cierta tambi&eacute;n. As&iacute; que se cambia la C por la respuesta actual.";


//  Id pregunta: 10281 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  &iquest;Cu&aacute;l NO es una sentencia del lenguaje JCL (Job Control Language)?";
 choices[85]= new Array();
 choices[85][0] = "EXEC";
 choices[85][1] = "DD";
 choices[85][2] = "JOB";
 choices[85][3] = "CALL";
 answers[85] = choices[85][3];
 units[85] = "55";
 comments[85] = "Id Pregunta: 10281. TIC A2, libre, examen 2013";


//  Id pregunta: 10431 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  En la arquitectura SOA (Arquitectura Orientada a Servicios)";
 choices[86]= new Array();
 choices[86][0] = "se hace incompatible el uso de servicios web.";
 choices[86][1] = "los servicios encapsulan sus funcionalidades. ";
 choices[86][2] = "los servicios mantienen un fuerte acoplamiento.";
 choices[86][3] = "os servicios dependen fuertemente de la plataforma subyacente.";
 answers[86] = choices[86][1];
 units[86] = "51";
 comments[86] = "Id Pregunta: 10431. Examen TIC A1 2013";


//  Id pregunta: 10477 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  La diferencia entre la cofirma y la contrafirma estriba en que:";
 choices[87]= new Array();
 choices[87][0] = "La cofirma ocurre cuando el documento a firmar se considera validado con la firma de uno s&oacute;lo de los dos firmantes  y la contrafirma cuando el documento es v&aacute;lido s&oacute;lo si lo firman los dos a la vez";
 choices[87][1] = "La cofirma y la contrafirma son iguales si se hacen de forma electr&oacute;nica ya que no hay manera de determinar en el tiempo el orden de los firmantes, s&oacute;lo que hayan firmado";
 choices[87][2] = "En la cofirma los dos firmantes pueden firmar en cualquier momento y se supone que est&aacute;n al mismo nivel de responsabilidad respecto de la firma del documento (por ejemplo, una pareja que se compra una casa y firma la hipoteca) mientras que en la contrafirma el orden de los firmantes es relevante y el que firma &uacute;ltimo valida la firma del que ha firmado primero (por ejemplo, un jefe que valida el acto administrativo que firma un subordinado)";
 choices[87][3] = "La cofirma requiere de la firma de dos sujetos f&iacute;sicos o jur&iacute;dicos mientras que la contrafirma requiere de la firma de la aplicaci&oacute;n que genera los certificados del documento (portafirmas)";
 answers[87] = choices[87][2];
 units[87] = "73";
 comments[87] = "Id Pregunta: 10477. ";


//  Id pregunta: 10603 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  Amazon EC2 y Rackpace son ejemplos de:";
 choices[88]= new Array();
 choices[88][0] = "SaaS";
 choices[88][1] = "IaaS";
 choices[88][2] = "PaaS";
 choices[88][3] = "Nube h&iacute;bridas";
 answers[88] = choices[88][1];
 units[88] = "47";
 comments[88] = "Id Pregunta: 10603. ";


//  Id pregunta: 10620 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  Indique la respuesta incorrecta:";
 choices[89]= new Array();
 choices[89][0] = "Java es independiente de la plataforma.";
 choices[89][1] = "El entorno de ejecuci&oacute;n de Java es el responsable de gestionar el ciclo de vida de los objetos.";
 choices[89][2] = "El Global Interpreter Lock (GIL) permite la concurrencia del lenguaje Java.";
 choices[89][3] = "Un programa desarrollado en Java requiere una m&aacute;quina virtual para ejecutarse.";
 answers[89] = choices[89][2];
 units[89] = "60";
 comments[89] = "Id Pregunta: 10620. El GIL es un mecanismo de Python. Java s&iacute; es concurrente.";


//  Id pregunta: 10629 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  BPMN (Business Process Model and Notation)...";
 choices[90]= new Array();
 choices[90][0] = "&hellip; es una notaci&oacute;n gr&aacute;fica.";
 choices[90][1] = "&hellip; es una notaci&oacute;n basada en etiquetas de texto.";
 choices[90][2] = "&hellip; es una metodolog&iacute;a para el modelado de procesos de negocio.";
 choices[90][3] = "&hellip; est&aacute; destinado &uacute;nicamente a los analistas de negocio.";
 answers[90] = choices[90][0];
 units[90] = "71";
 comments[90] = "Id Pregunta: 10629. ";


//  Id pregunta: 10873 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Respecto a la tecnolog&iacute;a de almacenamiento InnoDB se&ntilde;ale la respuesta afirmativa:";
 choices[91]= new Array();
 choices[91][0] = "InnoDB es una tecnolog&iacute;a de almacenamiento de datos de c&oacute;digo abierto para la base de datos Oracle.";
 choices[91][1] = "Es la tecnolog&iacute;a de almacenamiento de datos por defecto por el sistema administrador de bases de datos relacionales MySQL.";
 choices[91][2] = "Se basa en el c&oacute;digo ISAM.";
 choices[91][3] = "No permite las b&uacute;squedas denominadas full-text, que para conjuntos de datos grandes son mucho m&aacute;s eficientes.";
 answers[91] = choices[91][1];
 units[91] = "57";
 comments[91] = "Id Pregunta: 10873. Examen GSI 2014";


//  Id pregunta: 10917 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  La tasa de transferencia m&aacute;xima que soporta el Serial Advanced Technology Attachment Express (SATA Express) es de hasta:";
 choices[92]= new Array();
 choices[92][0] = "6 Gbps.";
 choices[92][1] = "16 Gbps.";
 choices[92][2] = "8 Gbps.";
 choices[92][3] = "3 Gbps.";
 answers[92] = choices[92][1];
 units[92] = "46, 48";
 comments[92] = "Id Pregunta: 10917. Examen GSI 2014";


//  Id pregunta: 10978 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Respecto al algoritmo de cifrado RC5, se&ntilde;ale la respuesta correcta:";
 choices[93]= new Array();
 choices[93][0] = "Se trata de un algoritmo de cifrado asim&eacute;trico.";
 choices[93][1] = "No utiliza rotaciones dependientes de los datos para su proceso.";
 choices[93][2] = "Posee un n&uacute;mero fijo de rotaciones para su proceso.";
 choices[93][3] = "Posee tama&ntilde;o variable de clave.";
 answers[93] = choices[93][3];
 units[93] = "72";
 comments[93] = "Id Pregunta: 10978. TIC A1 AGE 2014";


//  Id pregunta: 11141 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l de los siguientes no es un lenguaje de construcci&oacute;n de la Web Sem&aacute;ntica?";
 choices[94]= new Array();
 choices[94][0] = "OWL";
 choices[94][1] = "MADL";
 choices[94][2] = "XML";
 choices[94][3] = "RDF";
 answers[94] = choices[94][1];
 units[94] = "63";
 comments[94] = "Id Pregunta: 11141. ";


//  Id pregunta: 11145 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Cu&aacute;l de los siguientes es el formato oficial de facturaci&oacute;n electr&oacute;nica de la Administraci&oacute;n General del Estado?";
 choices[95]= new Array();
 choices[95][0] = "GS2-XML";
 choices[95][1] = "UBL";
 choices[95][2] = "Facturae";
 choices[95][3] = "Eb-XML";
 answers[95] = choices[95][2];
 units[95] = "70";
 comments[95] = "Id Pregunta: 11145. ";


//  Id pregunta: 11253 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Entre los requisitos de la firma electr&oacute;nica avanzada no se encuentra:";
 choices[96]= new Array();
 choices[96][0] = "Que est&eacute; vinculada al firmante de manera &uacute;nica y permita su identificaci&oacute;n.";
 choices[96][1] = "Que haya sido creada utilizando datos de creaci&oacute;n de la firma electr&oacute;nica que el firmante puede utilizar, con un alto nivel de confianza, bajo su control exclusivo.";
 choices[96][2] = "Que haya sido creada utilizando datos de creaci&oacute;n de la firma electr&oacute;nica que el firmante puede utilizar, siempre bajo su control exclusivo.";
 choices[96][3] = "Que est&eacute; vinculada con los datos firmados de modo que detecte cualquier modificaci&oacute;n ulterior.";
 answers[96] = choices[96][2];
 units[96] = "73";
 comments[96] = "Id Pregunta: 11253. ";


//  Id pregunta: 11273 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Indique la respuesta INCORRECTA sobre VxLAN:";
 choices[97]= new Array();
 choices[97][0] = "Son las siglas en ingl&eacute;s de Virtual eXtended Local Area Network.";
 choices[97][1] = "Es un protocolo de encapsulamiento para crear redes de nivel 2 sobre el nivel 3.";
 choices[97][2] = "Al disponer de un identificador de segmento de red de 24 bits, permite una mayor escalabilidad que el est&aacute;ndar 802.1q.";
 choices[97][3] = "Permite direccionar hasta 16 millones de segmentos.";
 answers[97] = choices[97][0];
 units[97] = "47";
 comments[97] = "Id Pregunta: 11273. ";


//  Id pregunta: 11320 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Cu&aacute;l de las siguientes caracter&iacute;sticas responde a las que posee un disco de tipo SSD (Solid State Drive)";
 choices[98]= new Array();
 choices[98][0] = "Usan la misma interfaz que los discos duros convencionales y son por tanto f&aacute;cilmente intercambiables sin necesidades de tarjetas adicionales";
 choices[98][1] = "Usan platos giratorios magn&eacute;ticos";
 choices[98][2] = "Son m&aacute;s sensibles a los golpes que los discos convencionales";
 choices[98][3] = "";
 answers[98] = choices[98][0];
 units[98] = "47";
 comments[98] = "Id Pregunta: 11320. ";


//  Id pregunta: 11780 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Se&ntilde;ale la correcta en lo relativo a discos RAID:";
 choices[99]= new Array();
 choices[99][0] = "Un RAID 2 divide los datos a nivel de bloques y usa un c&oacute;digo de Hamming para la correcci&oacute;n de errores.";
 choices[99][1] = "Un RAID 4 usa divisi&oacute;n a nivel de byte con un disco de paridad dedicado.";
 choices[99][2] = "Un RAID 3 usa divisi&oacute;n a nivel de bytes con un disco de paridad dedicado.";
 choices[99][3] = "Un RAID 5 requiere al menos 4 unidades de disco para ser implementado.";
 answers[99] = choices[99][1];
 units[99] = "48";
 comments[99] = "Id Pregunta: 11780. ";


