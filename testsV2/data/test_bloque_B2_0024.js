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

//  Id pregunta: 692 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  Del &aacute;mbito de la Ley 34/2002 de servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico quedan excluidos los servicios prestados por:";
 choices[0]= new Array();
 choices[0][0] = "Los notarios y registradores de la propiedad en el ejercicio de sus respectivas funciones privadas";
 choices[0][1] = "Los abogados y procuradores en el ejercicio de sus funciones de representaci&oacute;n y juicio";
 choices[0][2] = "Los notarios y registradores de la propiedad y mercantiles en el ejercicio de sus respectivas funciones privadas";
 choices[0][3] = "Funcionarios del Estado";
 answers[0] = choices[0][1];
 units[0] = "30";
 comments[0] = "Id Pregunta: 692. Ley 34/2002, art&iacute;culo 5";


//  Id pregunta: 722 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no corresponde a la tecnolog&iacute;a de procedimiento anal&iacute;tico en l&iacute;nea (OLAP)?";
 choices[1]= new Array();
 choices[1][0] = "Proporciona respuestas r&aacute;pidas a consultas anal&iacute;ticas complejas e iterativas.";
 choices[1][1] = "Utiliza modelos de datos multidimensionales.";
 choices[1][2] = "Proporciona la velocidad y flexibilidad necesarias en tiempo real.";
 choices[1][3] = "Est&aacute; basado en modelos de datos jer&aacute;rquicos.";
 answers[1] = choices[1][3];
 units[1] = "68";
 comments[1] = "Id Pregunta: 722. Examen TIC MAP B 2004";


//  Id pregunta: 743 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  Dentro del campo de los almacenes de datos, los supermercados de datos o Data Marts:";
 choices[2]= new Array();
 choices[2][0] = "Son muy vol&aacute;tiles dada la gran frecuencia de actualizaci&oacute;n.";
 choices[2][1] = "son una versi&oacute;n especial de Data Warehouse, duplicados en varias m&aacute;quinas para agilizar el acceso a los mismos, que contienen los datos muy resumidos en una arquitectura distribuida por niveles.";
 choices[2][2] = "S&oacute;lo pueden ser accedidos por el departamento al que pertenecen los datos.";
 choices[2][3] = "Ninguna de las anteriores.";
 answers[2] = choices[2][1];
 units[2] = "68";
 comments[2] = "Id Pregunta: 743. Similar a examen TIC SS A 2003";


//  Id pregunta: 750 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  De las estructuras de archivos propuestas a continuaci&oacute;n, indique cu&aacute;l implica que un Sistema Operativo tenga la m&aacute;xima flexibilidad: &quot;Aquella estructura en la que el archivo es un/una: &quot;";
 choices[3]= new Array();
 choices[3][0] = "Secuencia de registros de longitud fija";
 choices[3][1] = "Secuencia de bytes de tama&ntilde;o variable";
 choices[3][2] = "&Aacute;rbol de registros, todos ellos de igual longitud";
 choices[3][3] = "&Aacute;rbol de registros, que pueden ser de distinta longitud";
 answers[3] = choices[3][1];
 units[3] = "52";
 comments[3] = "Id Pregunta: 750. Examen TIC MAP B 2004";


//  Id pregunta: 772 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  Qu&eacute; significan las siglas JNI";
 choices[4]= new Array();
 choices[4][0] = "Interfaz para llamar m&eacute;todos nativos ";
 choices[4][1] = "Sistema de directorio";
 choices[4][2] = "Sistema para datamining";
 choices[4][3] = "ninguna de las anteriores";
 answers[4] = choices[4][0];
 units[4] = "60";
 comments[4] = "Id Pregunta: 772. NULL";


//  Id pregunta: 826 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;C&oacute;mo se llama al m&oacute;dulo, del cual una &uacute;nica copia cargada en memoria puede ser utilizada simult&aacute;neamente por  varios usuarios?:";
 choices[5]= new Array();
 choices[5][0] = "M&oacute;dulo concurrente";
 choices[5][1] = "M&oacute;dulo compartido";
 choices[5][2] = "M&oacute;dulo reentrante";
 choices[5][3] = "M&oacute;dulo reusable";
 answers[5] = choices[5][2];
 units[5] = "52";
 comments[5] = "Id Pregunta: 826. ";


//  Id pregunta: 885 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Cu&aacute;l es la diferencia de los comandos del sistema, tales como la orden de listado de directorio (dir &oacute; ls) en MSDOS y LINUX?:";
 choices[6]= new Array();
 choices[6][0] = "En MSDOS, los programas del sistema estaban contenidos en el nucleo, y en LINUX son archivos ejecutables";
 choices[6][1] = "En LINUX, los programas del sistema estan contenidos en el nucleo, y en MSDOS eran archivos ejecutables";
 choices[6][2] = "No existe diferencia, salvo de nombre en esos programas";
 choices[6][3] = "Todas son falsas";
 answers[6] = choices[6][0];
 units[6] = "54";
 comments[6] = "Id Pregunta: 885. NULL";


//  Id pregunta: 890 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Cu&aacute;les de las siguientes son caracter&iacute;sticas de los sistemas expertos?:";
 choices[7]= new Array();
 choices[7][0] = "Conocimiento del sistema superior al del experto";
 choices[7][1] = "Procesado de informaci&oacute;n simb&oacute;lica y num&eacute;rica y capacidad de incorporar gradualmente conocimiento al sistema";
 choices[7][2] = "Funcionamiento no uniforme y de dif&iacute;cil reproducci&oacute;n";
 choices[7][3] = "Todas las anteriores";
 answers[7] = choices[7][1];
 units[7] = "64";
 comments[7] = "Id Pregunta: 890. ";


//  Id pregunta: 944 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Qu&eacute; significa RACF?:";
 choices[8]= new Array();
 choices[8][0] = "Resource Access Control Facility";
 choices[8][1] = "Relationship Access Control Facility";
 choices[8][2] = "Resource Aknowledgement Control Facility";
 choices[8][3] = "Ninguna de las anteriores es cierta";
 answers[8] = choices[8][0];
 units[8] = "52";
 comments[8] = "Id Pregunta: 944. ";


//  Id pregunta: 945 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  Bill Inmon, padre del Data Warehousing, define &eacute;ste como:";
 choices[9]= new Array();
 choices[9][0] = "Una colecci&oacute;n de datos orientada a materias, integrada, no vol&aacute;til y variante en el tiempo, destinada a ayudar a la toma de decisiones de gesti&oacute;n.";
 choices[9][1] = "Un sistema autom&aacute;tico de ayuda a la decisi&oacute;n que implanta la teor&iacute;a de la decisi&oacute;n multicriterio discreta.";
 choices[9][2] = "Una secuencia convergente de refinamientos sobre un conjunto diverso de soluciones a un problema de gesti&oacute;n.";
 choices[9][3] = "Ninguna de las afirmaciones anteriores es correcta.";
 answers[9] = choices[9][0];
 units[9] = "68";
 comments[9] = "Id Pregunta: 945. ";


//  Id pregunta: 951 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  COM:";
 choices[10]= new Array();
 choices[10][0] = "Es la extensi&oacute;n del sistema MS/DOS ligada a ejecutables de menos de 64 Kb";
 choices[10][1] = "Es el TLD asociado a organizaciones comerciales de EEUU";
 choices[10][2] = "Son las siglas de Component Object Model, arquitectura de desarrollo de Microsoft, previa a .NET";
 choices[10][3] = "Todas las respuestas anteriores son ciertas";
 answers[10] = choices[10][3];
 units[10] = "116";
 comments[10] = "Id Pregunta: 951. ";


//  Id pregunta: 981 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  De los siguientes algoritmos cript&oacute;graficos se&ntilde;ale cu&aacute;l es de clave p&uacute;blica:";
 choices[11]= new Array();
 choices[11][0] = "DES (Data Encryption Standard)";
 choices[11][1] = "RSA (Rivest, Shamir, Adelman)";
 choices[11][2] = "IDEA (International Data Encryption Algorithm)";
 choices[11][3] = "LOKI";
 answers[11] = choices[11][1];
 units[11] = "72";
 comments[11] = "Id Pregunta: 981. ";


//  Id pregunta: 993 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Diffie y Hellman inventaron:";
 choices[12]= new Array();
 choices[12][0] = "Un algoritmo criptogr&aacute;fico";
 choices[12][1] = "Un mecanismo de intercambio de claves";
 choices[12][2] = "Las infraestructuras de clave p&uacute;blica (PKI))";
 choices[12][3] = "Las funciones resumen";
 answers[12] = choices[12][1];
 units[12] = "72";
 comments[12] = "Id Pregunta: 993. ";


//  Id pregunta: 1096 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  En el subsistema de E/S, &iquest;qu&eacute; diferencia a una 'operaci&oacute;n de entrada/salida' de una 'transferencia elemental'?:";
 choices[13]= new Array();
 choices[13][0] = "La primera transfiere uno o varios bloques de datos y la segunda s&oacute;lo mueve un dato o una palabra de control";
 choices[13][1] = "La primera no comprueba el estado del perif&eacute;rico y la segunda s&iacute; lo hace";
 choices[13][2] = "La primera se realiza por hardware y la segunda por software";
 choices[13][3] = "La primera sincroniza la UCP y el controlador del perif&eacute;rico mediante se&ntilde;ales el&eacute;ctricas, y la segunda no lo hace";
 answers[13] = choices[13][0];
 units[13] = "52";
 comments[13] = "Id Pregunta: 1096. ";


//  Id pregunta: 1108 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  En la historia de la computaci&oacute;n, Blaise Pascal destaca por:";
 choices[14]= new Array();
 choices[14][0] = "desarrollar el lenguaje Pascal.";
 choices[14][1] = "realizar la primera m&aacute;quina mec&aacute;nica para realizar adiciones.";
 choices[14][2] = "concebir la arquitectura del ordenador moderno.";
 choices[14][3] = "desarrollar algoritmos de optimizaci&oacute;n de redes.";
 answers[14] = choices[14][1];
 units[14] = "49";
 comments[14] = "Id Pregunta: 1108. ";


//  Id pregunta: 1149 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  En un sistema vectorial:";
 choices[15]= new Array();
 choices[15][0] = "Los MFLOPS pico son mayores que los MIPS";
 choices[15][1] = "Los MIPS pico son los mismos que los MFLOPs pico";
 choices[15][2] = "Ambas variables no tienen relaci&oacute;n directa";
 choices[15][3] = "Depende del lenguaje de programaci&oacute;n empleado";
 answers[15] = choices[15][0];
 units[15] = "45";
 comments[15] = "Id Pregunta: 1149. ";


//  Id pregunta: 1155 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  En una representaci&oacute;n de tipo simb&oacute;lico de un Sistema Experto Basado en el Conocimiento, al conjunto de campos de informaci&oacute;n (ranuras) que describen un objeto se le da el nombre de:";
 choices[16]= new Array();
 choices[16][0] = "Regla de producci&oacute;n";
 choices[16][1] = "Restricci&oacute;n";
 choices[16][2] = "Red sem&aacute;ntica";
 choices[16][3] = "Marco";
 answers[16] = choices[16][3];
 units[16] = "64";
 comments[16] = "Id Pregunta: 1155. ";


//  Id pregunta: 1156 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  En una unidad de disco magn&eacute;tico, el tiempo de acceso a la informaci&oacute;n viene dado por:";
 choices[17]= new Array();
 choices[17][0] = "El tiempo de latencia";
 choices[17][1] = "El tiempo de b&uacute;squeda m&aacute;s el tiempo de latencia";
 choices[17][2] = "El tiempo de b&uacute;squeda m&aacute;s el tiempo de transferencia";
 choices[17][3] = "La longitud de la pista partido por la velocidad de rotaci&oacute;n m&aacute;s el tiempo de posicionamiento de la cabeza";
 answers[17] = choices[17][1];
 units[17] = "48";
 comments[17] = "Id Pregunta: 1156. ";


//  Id pregunta: 1222 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  La funci&oacute;n de planificar la secuencia de realizaci&oacute;n de las distintas tareas por la Unidad Central de Proceso es realizada por:";
 choices[18]= new Array();
 choices[18][0] = "El boot-strap";
 choices[18][1] = "El dispatcher";
 choices[18][2] = "El scheduler";
 choices[18][3] = "Ninguno de los anteriores";
 answers[18] = choices[18][2];
 units[18] = "52";
 comments[18] = "Id Pregunta: 1222. ";


//  Id pregunta: 1225 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  La instrucci&oacute;n &quot;SELECT DISTINCT&quot; en SQL:";
 choices[19]= new Array();
 choices[19][0] = "Devuelve los resultados de la consulta, eliminando los duplicados";
 choices[19][1] = "Devuelve los datos de la tabla que no estaban en la consulta inmediatamente anterior";
 choices[19][2] = "Permite obtener los datos clave que distinguen a una fila de otra";
 choices[19][3] = "Todas las anteriores respuestas son falsas";
 answers[19] = choices[19][0];
 units[19] = "58";
 comments[19] = "Id Pregunta: 1225. ";


//  Id pregunta: 1311 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Que el bus de datos trabaje con 32 bits quiere decir que:";
 choices[20]= new Array();
 choices[20][0] = "Todos los dispositivos conectados al bus acceden a 32 bits en cada impulso de reloj del ordenador";
 choices[20][1] = "Todos los dispositivos conectados al bus acceden a 32 bits en dos impulsos de reloj del ordenador";
 choices[20][2] = "Todos los dispositivos conectados al bus acceden a 32 bits en cuatro impulsos de reloj del ordenador";
 choices[20][3] = "Ninguna de las anteriores, ya que el bus del ordenador puede trabajar a diferente velocidad que la CPU";
 answers[20] = choices[20][3];
 units[20] = "47";
 comments[20] = "Id Pregunta: 1311. ";


//  Id pregunta: 1321 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  RS-232, USB, Centronics, ECP, EPP, SCSI, PS/2&hellip;, son:";
 choices[21]= new Array();
 choices[21][0] = "buses/interfaces internos";
 choices[21][1] = "buses/interfaces externos";
 choices[21][2] = "est&aacute;ndares inal&aacute;mbricos";
 choices[21][3] = "arquitecturas de ordenadores";
 answers[21] = choices[21][1];
 units[21] = "47";
 comments[21] = "Id Pregunta: 1321. ";


//  Id pregunta: 1323 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  RSA es: ";
 choices[22]= new Array();
 choices[22][0] = "Un algoritmo criptogr&aacute;fico";
 choices[22][1] = "Un mecanismo de intercambio de claves";
 choices[22][2] = "Una infraestructura de clave p&uacute;blica (PKI))";
 choices[22][3] = "Una funcion resumen";
 answers[22] = choices[22][0];
 units[22] = "72";
 comments[22] = "Id Pregunta: 1323. ";


//  Id pregunta: 1332 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Se entiende por 'dispatching ':";
 choices[23]= new Array();
 choices[23][0] = "El mecanismo por el que el sistema operativo decide cu&aacute;l es el siguiente proceso que se va a ejecutar";
 choices[23][1] = "El mecanismo que planifica el uso del procesador entre los diversos programas que se est&aacute;n ejecutando";
 choices[23][2] = "El mecanismo que gestiones las distintas colas de peticiones que existen en un ordenador";
 choices[23][3] = "El mecanismo que determina qu&eacute; procesador debe ejecutar una determinada instrucci&oacute;n";
 answers[23] = choices[23][0];
 units[23] = "52";
 comments[23] = "Id Pregunta: 1332. ";


//  Id pregunta: 1363 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Si disponemos de las entidades EMPLEADO y FAMILIAR, y es condici&oacute;n de funcionamiento en la empresa que una vez desaparecidos los datos del empleado deben desaparecer los de sus familiares,  entonces:";
 choices[24]= new Array();
 choices[24][0] = "Se dise&ntilde;&oacute; mal, FAMILIAR no es una entidad";
 choices[24][1] = "FAMILIAR debe estar contenida en EMPLEADO";
 choices[24][2] = "FAMILIAR es una entidad d&eacute;bil";
 choices[24][3] = "FAMILIAR es una entidad dependiente";
 answers[24] = choices[24][2];
 units[24] = "58";
 comments[24] = "Id Pregunta: 1363. ";


//  Id pregunta: 1377 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  TTP:";
 choices[25]= new Array();
 choices[25][0] = "La Top Testing Policy es una pol&iacute;tica que se implanta en organizaciones con un fuerte desarrollo de la calidad del software, para hacer de las pruebas algo fundamental";
 choices[25][1] = "Training To Practise es un tipo de trabajo en equipo que acelera el tiempo en que un empleado nuevo puede comenzar a desempe&ntilde;ar su funci&oacute;n.";
 choices[25][2] = "Una Trusted Third Party es una tercera parte de confianza, es decir una entidad en la que confiamos, y de la que aceptaremos todo lo que firme";
 choices[25][3] = "Todas son falsas";
 answers[25] = choices[25][2];
 units[25] = "74";
 comments[25] = "Id Pregunta: 1377. NULL";


//  Id pregunta: 1445 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  La notaci&oacute;n sint&aacute;ctica conocida como BNF (Backus Normal Form) especifica:";
 choices[26]= new Array();
 choices[26][0] = "La funci&oacute;n, el formato, las reglas sint&aacute;cticas y generales de cada elemento SQL";
 choices[26][1] = "La sintaxis y la sem&aacute;ntica del SQL-DDL (Lenguaje de Definici&oacute;n de Esquema) y el SQL-DML (Lenguaje de M&oacute;dulos y de Manipulaci&oacute;n de Datos)";
 choices[26][2] = "Las autorizaciones para realizar determinadas funciones en las tablas";
 choices[26][3] = "Las restricciones para prevenir que dos filas tengan los mismos valores en determinadas columnas (unique) o para impedir que determinada columna contenga un valor nulo";
 answers[26] = choices[26][0];
 units[26] = "58";
 comments[26] = "Id Pregunta: 1445. ";


//  Id pregunta: 1566 AÃ±o de creación de pregunta: 2003-01-01
 questions[27]= "28)  &iquest;Cu&aacute;l no es una caracter&iacute;stica de la Huella Digital?";
 choices[27]= new Array();
 choices[27][0] = "Dos mensajes iguales producen la misma huella digital";
 choices[27][1] = "Conocido un mensaje M1 y su resumen R, ser&aacute; computacionalmente imposible encontrar otro mensaje M2 cuyo resumen sea tambi&eacute;n R";
 choices[27][2] = " Dos mensajes parecidos producen huellas digitales diferentes";
 choices[27][3] = " La funci&oacute;n hash es reversible";
 answers[27] = choices[27][3];
 units[27] = "73";
 comments[27] = "Id Pregunta: 1566. ";


//  Id pregunta: 1601 AÃ±o de creación de pregunta: 2003-01-01
 questions[28]= "29)  En un sistema de workflow no es una funci&oacute;n b&aacute;sica:";
 choices[28]= new Array();
 choices[28][0] = "Monitorizaci&oacute;n y control";
 choices[28][1] = "Gesti&oacute;n de procedimientos";
 choices[28][2] = "Interoperabilidad entre aplicaciones";
 choices[28][3] = "Autorizaciones y asignaci&oacute;n de responsabilidades";
 answers[28] = choices[28][2];
 units[28] = "71";
 comments[28] = "Id Pregunta: 1601. Pregunta no perteneciente al test &nbsp;del ex&aacute;men 2003 de SS (aunque en este ex&aacute;men hubo una pregunta de Worflow)";


//  Id pregunta: 1705 AÃ±o de creación de pregunta: 2006-01-01
 questions[29]= "30)  En lo referente a PDAs:";
 choices[29]= new Array();
 choices[29][0] = "Responden a las siglas &quot;Personal Digital Agendas&quot;";
 choices[29][1] = "Tambi&eacute;n son conocidos por agendas electr&oacute;nicas o palmtops";
 choices[29][2] = "En lugar de teclado, utilizan un l&aacute;piz y un reconocedor de caracteres";
 choices[29][3] = "Pueden usarse como tel&eacute;fonos, pero no pueden mandar un fax";
 answers[29] = choices[29][1];
 units[29] = "47";
 comments[29] = "Id Pregunta: 1705. ";


//  Id pregunta: 1708 AÃ±o de creación de pregunta: 2006-01-01
 questions[30]= "31)  Se&ntilde;ale la opci&oacute;n correcta respecto a SAN, Storage Area Network:";
 choices[30]= new Array();
 choices[30][0] = "SAN se sit&uacute;a entre el servidor de aplicaciones y el sistema de ficheros";
 choices[30][1] = "SAN es una red separada de la LAN, de dispositivos de almacenamiento homog&eacute;neos";
 choices[30][2] = "La diferencia entre NAS y SAN es que &eacute;sta &uacute;ltima utiliza fibra &oacute;ptica para sus interconexiones ";
 choices[30][3] = "Todos los dispositivos de almacenamiento de la SAN son accesibles a todos los servidores de la LAN";
 answers[30] = choices[30][3];
 units[30] = "48";
 comments[30] = "Id Pregunta: 1708. ";


//  Id pregunta: 1858 AÃ±o de creación de pregunta: 2006-01-01
 questions[31]= "32)  &iquest;Qu&eacute; elemento no forma parte de la norma X.500 de OSI?";
 choices[31]= new Array();
 choices[31][0] = "Agente de usuario del directorio (DUA)";
 choices[31][1] = "&Aacute;rbol de informaci&oacute;n del directorio (DIT)";
 choices[31][2] = "Dominio de nombres de directorio (DND)";
 choices[31][3] = "Base de informaci&oacute;n del directorio (DIB)";
 answers[31] = choices[31][2];
 units[31] = "73";
 comments[31] = "Id Pregunta: 1858. ";


//  Id pregunta: 1883 AÃ±o de creación de pregunta: 2006-01-01
 questions[32]= "33)  De acuerdo a la ley 34/2002, se&ntilde;ale la falsa:";
 choices[32]= new Array();
 choices[32][0] = "Por la comisi&oacute;n de infracciones muy graves, multa de 150.001 hasta 600.000 euros. ";
 choices[32][1] = "Por la comisi&oacute;n de infracciones graves, multa de 30.001 hasta 150.000 euros";
 choices[32][2] = "Por la comisi&oacute;n de infracciones leves, multa de hasta 30.000 euros.";
 choices[32][3] = "La primera es falsa";
 answers[32] = choices[32][3];
 units[32] = "30";
 comments[32] = "Id Pregunta: 1883. Ley 34/2002, art&iacute;culo 39";


//  Id pregunta: 1919 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  Seg&uacute;n la recomendaci&oacute;n X.509 v.3:";
 choices[33]= new Array();
 choices[33][0] = "La autenticaci&oacute;n simple conlleva el uso exclusivo de contrase&ntilde;as transmitidas en claro";
 choices[33][1] = "La autenticaci&oacute;n robusta (strong) de un sentido conlleva siempre el empleo de funciones resumen (hash)";
 choices[33][2] = "La autenticaci&oacute;n robusta (strong) de dos sentidos comporta siempre el uso de credenciales obtenidas mediante t&eacute;cnicas criptogr&aacute;ficas";
 choices[33][3] = "La autenticaci&oacute;n robusta (strong) de tres sentidos debe incorporar siempre sellos de tiempo";
 answers[33] = choices[33][2];
 units[33] = "73";
 comments[33] = "Id Pregunta: 1919. ";


//  Id pregunta: 4359 AÃ±o de creación de pregunta: 2007-01-01
 questions[34]= "35)  Una de las caracter&iacute;sticas de un sistema OLTP es:";
 choices[34]= new Array();
 choices[34][0] = "Homogeneidad de datos almacenados.";
 choices[34][1] = "Alto rendimiento en las operaciones de inserci&oacute;n y actualizaci&oacute;n.";
 choices[34][2] = "Total organizaci&oacute;n.";
 choices[34][3] = "Facilidad para responder a consultas complejas.";
 answers[34] = choices[34][1];
 units[34] = "68";
 comments[34] = "Id Pregunta: 4359. ";


//  Id pregunta: 4572 AÃ±o de creación de pregunta: 2007-01-01
 questions[35]= "36)  Si exportamos un certificado incluyendo su clave privada desde el navegador MS Internet Explorer 6, que extensi&oacute;n tendr&aacute; el fichero resultante?:";
 choices[35]= new Array();
 choices[35][0] = "p12";
 choices[35][1] = ".cer";
 choices[35][2] = ".jks";
 choices[35][3] = ".pfx";
 answers[35] = choices[35][3];
 units[35] = "74";
 comments[35] = "Id Pregunta: 4572. NULL";


//  Id pregunta: 4584 AÃ±o de creación de pregunta: 2007-01-01
 questions[36]= "37)  Cual de las siguientes opciones NO es un contenedor para Ia arquitectura J2EE";
 choices[36]= new Array();
 choices[36][0] = "contenedor web";
 choices[36][1] = "contenedor EJB";
 choices[36][2] = "contenedor de aplicaci&oacute;n cliente";
 choices[36][3] = "contenedor de base de datos";
 answers[36] = choices[36][3];
 units[36] = "60";
 comments[36] = "Id Pregunta: 4584. NULL";


//  Id pregunta: 4667 AÃ±o de creación de pregunta: 2007-01-01
 questions[37]= "38)  En el contexto de SOA, las siglas ESB son el acr&oacute;nimo de:";
 choices[37]= new Array();
 choices[37][0] = "Execution Service Base";
 choices[37][1] = "Execution Service Board";
 choices[37][2] = "Enterprise Service Bus";
 choices[37][3] = "Enterprise Service Board";
 answers[37] = choices[37][2];
 units[37] = "51";
 comments[37] = "Id Pregunta: 4667. NULL";


//  Id pregunta: 4801 AÃ±o de creación de pregunta: 2007-01-01
 questions[38]= "39)  En el modelo de miner&iacute;a de datos de &aacute;rboles de decisi&oacute;n (ID3) de Quinlan:";
 choices[38]= new Array();
 choices[38][0] = "Se obtiene un nuevo conjunto de reglas a partir de uno previo, utilizando mecanismos de deducci&oacute;n basadosen la entrop&iacute;a";
 choices[38][1] = "Se obtiene un conjunto de reglas a partir de un conjunto de ejemplos, clasificados a priori, utilizandomecanismos de inducci&oacute;n";
 choices[38][2] = "Se obtiene un nuevo conjunto de reglas que agrupan, por similaridad, un conjunto de ejemplos, utilizandoaprendizaje no supervisado";
 choices[38][3] = "Se obtiene un nuevo conjunto de reglas a partir de uno previo, mediante eliminaci&oacute;n de reglas incorrectas einclusi&oacute;n de reglas necesarias, utilizando un conjunto de ejemplos para dicha depuraci&oacute;n";
 answers[38] = choices[38][1];
 units[38] = "64";
 comments[38] = "Id Pregunta: 4801. ";


//  Id pregunta: 4907 AÃ±o de creación de pregunta: 2003-01-01
 questions[39]= "40)  En el &aacute;mbito de los sistemas operativos, entre los algoritmos de planificaci&oacute;n de procesos que utilizan &ldquo;quantum&rdquo; NO se incluye:";
 choices[39]= new Array();
 choices[39][0] = "Round Robin.";
 choices[39][1] = "Planificaci&oacute;n con colas de niveles m&uacute;ltiples.";
 choices[39][2] = "Planificaci&oacute;n con colas de retroalimentaci&oacute;n de niveles m&uacute;ltiples.";
 choices[39][3] = "Planificaci&oacute;n del tiempo restante m&aacute;s corto (SRT).";
 answers[39] = choices[39][3];
 units[39] = "52";
 comments[39] = "Id Pregunta: 4907. Examen TIC B 2007";


//  Id pregunta: 5034 AÃ±o de creación de pregunta: 2003-01-01
 questions[40]= "41)  &iquest;Cu&aacute;l de los siguientes es un componente de la versi&oacute;n 2 del &quot;framework&quot; .NET de Microsoft?";
 choices[40]= new Array();
 choices[40][0] = "Visual Studio";
 choices[40][1] = "CLR (Common Language Runtime)";
 choices[40][2] = "BizTalk";
 choices[40][3] = "SQL Server";
 answers[40] = choices[40][1];
 units[40] = "59";
 comments[40] = "Id Pregunta: 5034. Examen TIC A 2007";


//  Id pregunta: 5068 AÃ±o de creación de pregunta: 2003-01-01
 questions[41]= "42)  &iquest;Cu&aacute;l de las siguientes afirmaciones con respecto a los XML Schemas es incorrecta?:";
 choices[41]= new Array();
 choices[41][0] = "Los XML Schemas utilizan sintaxis XML";
 choices[41][1] = "Es imposible referenciar m&uacute;ltiples XML Schemas desde el mismo documento XML";
 choices[41][2] = "Los XML Schemas soportan namespaces";
 choices[41][3] = "Los XML Schemas permiten definir tipos de datos";
 answers[41] = choices[41][1];
 units[41] = "69";
 comments[41] = "Id Pregunta: 5068. Examen TIC A 2007";


//  Id pregunta: 5086 AÃ±o de creación de pregunta: 2001-01-01
 questions[42]= "43)  &iquest;Cu&aacute;l de los siguientes algoritmos se basa en el problema de factorizaci&oacute;n entera?";
 choices[42]= new Array();
 choices[42][0] = "el algoritmo RIPEMD-160";
 choices[42][1] = "los algoritmos RSA y RW";
 choices[42][2] = "los algoritmos DHE y DSAE";
 choices[42][3] = "el algoritmo Rijndael";
 answers[42] = choices[42][1];
 units[42] = "72";
 comments[42] = "Id Pregunta: 5086. ";


//  Id pregunta: 5122 AÃ±o de creación de pregunta: 2003-01-01
 questions[43]= "44)  Si examinamos el modelo relacional dentro del marco de la arquitectura ANSI, podemos afirmar que:";
 choices[43]= new Array();
 choices[43][0] = "El modelo relacional no especifica nada respecto al esquema interno.";
 choices[43][1] = "En el nivel externo se encuentran las relaciones base, tambi&eacute;n denominadas tablas reales.";
 choices[43][2] = "En el nivel conceptual se encuentran las vistas.";
 choices[43][3] = "El modelo relacional define los tres niveles de la arquitectura ANSI.";
 answers[43] = choices[43][0];
 units[43] = "57";
 comments[43] = "Id Pregunta: 5122. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5274 AÃ±o de creación de pregunta: 2003-01-01
 questions[44]= "45)  Un est&aacute;ndar para tarjeta inteligente sin contacto que haya de poder comunicarse con dispositivos a una distancia mayor de 50 cm es ";
 choices[44]= new Array();
 choices[44][0] = "ISO 15693";
 choices[44][1] = "ISO 10536";
 choices[44][2] = "ISO 14443";
 choices[44][3] = "ISO 9001";
 answers[44] = choices[44][0];
 units[44] = "74";
 comments[44] = "Id Pregunta: 5274. NULL";


//  Id pregunta: 5497 AÃ±o de creación de pregunta: 2003-01-01
 questions[45]= "46)  Indica la afirmaci&oacute;n correcta sobre la tecnolog&iacute;a JavaServer Faces:";
 choices[45]= new Array();
 choices[45][0] = "Ha quedado obsoleta por el framework Spring";
 choices[45][1] = "Es la nueva API Java para desarrollo de transacciones distribuidas";
 choices[45][2] = "Es una novedad del Java 2";
 choices[45][3] = "Es un framework de la capa de presentaci&oacute;n para desarrollo de aplicaciones Web";
 answers[45] = choices[45][3];
 units[45] = "116";
 comments[45] = "Id Pregunta: 5497. ";


//  Id pregunta: 5498 AÃ±o de creación de pregunta: 2003-01-01
 questions[46]= "47)  Es posible que cada programador defina sus librer&iacute;as de etiquetas JSP mediante: ";
 choices[46]= new Array();
 choices[46][0] = "La extensi&oacute;n de  la clase Servlet";
 choices[46][1] = "La especificaci&oacute;n JSTL";
 choices[46][2] = "El uso de scriptlets";
 choices[46][3] = "Ninguna de las anteriores";
 answers[46] = choices[46][1];
 units[46] = "116";
 comments[46] = "Id Pregunta: 5498. ";


//  Id pregunta: 5580 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  &iquest;Qu&eacute; es el blended learning?";
 choices[47]= new Array();
 choices[47][0] = "Un modelo de referencia del e-learning";
 choices[47][1] = "Una modalidad de e-learning que incluye ense&ntilde;anza presencial";
 choices[47][2] = "Una inciativa para estandarizar el e-learning";
 choices[47][3] = "Una clase de ense&ntilde;anza virtual";
 answers[47] = choices[47][1];
 units[47] = "66";
 comments[47] = "Id Pregunta: 5580. ";


//  Id pregunta: 5782 AÃ±o de creación de pregunta: 2009-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l de los siguientes objetos no forma parte del proveedor de datos del modelo de objetos ADO.NET?";
 choices[48]= new Array();
 choices[48][0] = "Connection.";
 choices[48][1] = "Command.";
 choices[48][2] = "DataAdapter.";
 choices[48][3] = "DataSet.";
 answers[48] = choices[48][3];
 units[48] = "59";
 comments[48] = "Id Pregunta: 5782. MAP 2008 A2";


//  Id pregunta: 5974 AÃ±o de creación de pregunta: 2010-01-01
 questions[49]= "50)  Dadas las siguientes relaciones: A={ax,ay,az,by,bz,cx,cy} y B={x,z} &iquest;Cu&aacute;l ser&iacute;a el resultado de la operaci&oacute;n A dividido entre B?";
 choices[49]= new Array();
 choices[49][0] = "{a,b,c}.";
 choices[49][1] = "{ax,az,bz,cx}.";
 choices[49][2] = "{ay,by,cy}.";
 choices[49][3] = "{a}.";
 answers[49] = choices[49][3];
 units[49] = "58";
 comments[49] = "Id Pregunta: 5974. TIC A 2009";


//  Id pregunta: 6088 AÃ±o de creación de pregunta: 2010-01-01
 questions[50]= "51)  &iquest;Cu&aacute;les de los siguientes est&aacute;ndares y protocolos relacionados con los Servicios Web son est&aacute;ndares W3C?";
 choices[50]= new Array();
 choices[50][0] = "XML, SOAP y WSDL";
 choices[50][1] = "XML, SOAP y UDDI";
 choices[50][2] = "XML, WSDL y UDDI";
 choices[50][3] = "SOAP, WSDL y UDDI";
 answers[50] = choices[50][0];
 units[50] = "51";
 comments[50] = "Id Pregunta: 6088. NULL";


//  Id pregunta: 6095 AÃ±o de creación de pregunta: 2010-01-01
 questions[51]= "52)  &iquest;Cu&aacute;l de las siguientes corresponde a una de las categor&iacute;as de ordenadores contempladas en la taxonom&iacute;a de Flynn?";
 choices[51]= new Array();
 choices[51][0] = "SIDI.";
 choices[51][1] = "SDSP.";
 choices[51][2] = "SIMD.";
 choices[51][3] = "MIMP.";
 answers[51] = choices[51][2];
 units[51] = "45";
 comments[51] = "Id Pregunta: 6095. TIC A 2009";


//  Id pregunta: 6258 AÃ±o de creación de pregunta: 2010-01-01
 questions[52]= "53)  &iquest;Cu&aacute;l de la lista siguiente responde a patrones creacionales de GoF (Gang of Four)?";
 choices[52]= new Array();
 choices[52][0] = "Facade, Composite, Bridge";
 choices[52][1] = "Strategy, Proxy, Iterator";
 choices[52][2] = "Builder, Abstract Factory, Prototype";
 choices[52][3] = "MVC, Session, Router";
 answers[52] = choices[52][2];
 units[52] = "60";
 comments[52] = "Id Pregunta: 6258. TICB-2009, bloque desarrollo";


//  Id pregunta: 6495 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)  &iquest;Cu&aacute;l de las siguientes es una Learning Management System liberada bajo licencia GPL?";
 choices[53]= new Array();
 choices[53][0] = "Lucus";
 choices[53][1] = "Raxor";
 choices[53][2] = "Esprat";
 choices[53][3] = "Leat";
 answers[53] = choices[53][0];
 units[53] = "66";
 comments[53] = "Id Pregunta: 6495. Castilla La Mancha 2009";


//  Id pregunta: 6503 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l de los siguientes es un proyecto de estandarizaci&oacute;n de UNIX?";
 choices[54]= new Array();
 choices[54][0] = "GNU";
 choices[54][1] = "GPL";
 choices[54][2] = "POSIX";
 choices[54][3] = "Emacs";
 answers[54] = choices[54][2];
 units[54] = "53";
 comments[54] = "Id Pregunta: 6503. NULL";


//  Id pregunta: 7316 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  Cu&aacute;l de las siguientes no es una tecnolog&iacute;a de acceso a datos de Microsoft:";
 choices[55]= new Array();
 choices[55][0] = "ADO.NET";
 choices[55][1] = "OLEDB";
 choices[55][2] = "DEA";
 choices[55][3] = "DAO";
 answers[55] = choices[55][2];
 units[55] = "59";
 comments[55] = "Id Pregunta: 7316. NULL";


//  Id pregunta: 7342 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  &iquest;Cu&aacute;l de los siguientes NO es un modo de operaci&oacute;n del algoritmo DES?";
 choices[56]= new Array();
 choices[56][0] = "ECB";
 choices[56][1] = "OCB";
 choices[56][2] = "CBC";
 choices[56][3] = "OFB";
 answers[56] = choices[56][1];
 units[56] = "72";
 comments[56] = "Id Pregunta: 7342. NULL";


//  Id pregunta: 8218 AÃ±o de creación de pregunta: 2011-01-01
 questions[57]= "58)  La distancia de Hamming entre las palabras 01000 y 01010 es:";
 choices[57]= new Array();
 choices[57][0] = "1";
 choices[57][1] = "2";
 choices[57][2] = "3";
 choices[57][3] = "4";
 answers[57] = choices[57][0];
 units[57] = "45";
 comments[57] = "Id Pregunta: 8218. Examen TIC A1 2010";


//  Id pregunta: 8272 AÃ±o de creación de pregunta: 2011-01-01
 questions[58]= "59)  Dentro del est&aacute;ndar del metalenguaje XML se&ntilde;ale la afirmaci&oacute;n INCORRECTA:";
 choices[58]= new Array();
 choices[58][0] = "Un DTD es un documento escrito en XML para definir el contenido y estructura de documentos XML.";
 choices[58][1] = "Los XML Schemas y los DTD permiten validar documentos XML.";
 choices[58][2] = "Los XML Schemas soportan herencia entre tipos de datos.";
 choices[58][3] = "Los DTD no est&aacute;n basados en el uso de &quot;namespaces&quot;.";
 answers[58] = choices[58][0];
 units[58] = "69";
 comments[58] = "Id Pregunta: 8272. Examen TIC A1 2010";


//  Id pregunta: 8274 AÃ±o de creación de pregunta: 2011-01-01
 questions[59]= "60)  En relaci&oacute;n con la seguridad en UNIX y particularmente con la auditor&iacute;a del sistema, cu&aacute;l de los siguientes archivos de registro de equipos UNIX se guardan en texto claro, y pueden visualizarse con una orden como cat o similares:";
 choices[59]= new Array();
 choices[59][0] = "syslog, wtmp, lastlog, sulog. ";
 choices[59][1] = "syslogd, utmpx, faillog, loginlog. ";
 choices[59][2] = "syslog, debug, sulog, loginlog. ";
 choices[59][3] = "syslog, btmp, lastlog, loginlog. ";
 answers[59] = choices[59][2];
 units[59] = "53, 54";
 comments[59] = "Id Pregunta: 8274. Examen TIC A1 2010";


//  Id pregunta: 8434 AÃ±o de creación de pregunta: 2011-01-01
 questions[60]= "61)  &iquest;Cu&aacute;l de las siguientes normativas no regula la factura electr&oacute;nica?";
 choices[60]= new Array();
 choices[60][0] = "Orden EHA/962/2007";
 choices[60][1] = "Orden PRE/2971/2007";
 choices[60][2] = "Ley 30/2007";
 choices[60][3] = "Ley 59/2003";
 answers[60] = choices[60][3];
 units[60] = "70";
 comments[60] = "Id Pregunta: 8434. NULL";


//  Id pregunta: 8520 AÃ±o de creación de pregunta: 2011-01-01
 questions[61]= "62)  Tenemos las entidades &quot;opositor&quot; y &quot;oposici&oacute;n&quot; y sabemos que a los opositores se les permite apuntarse a varias oposiciones distintas. Si se quisiera crear el modelo conceptual de base de datos, &iquest;qu&eacute; relaci&oacute;n crear&iacute;a?:";
 choices[61]= new Array();
 choices[61][0] = "Una relaci&oacute;n N:M.";
 choices[61][1] = "Una relaci&oacute;n 1:N.";
 choices[61][2] = "Una relaci&oacute;n 1:1.";
 choices[61][3] = "El modelo conceptual no admite relaciones, s&oacute;lo el modelo relacional lo permite. ";
 answers[61] = choices[61][0];
 units[61] = "57, 58";
 comments[61] = "Id Pregunta: 8520. Examen TIC A2 2010 interna";


//  Id pregunta: 8752 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  &iquest;En qu&eacute; generaci&oacute;n de ordenadores se empez&oacute; a utilizar el transistor?";
 choices[62]= new Array();
 choices[62][0] = "En la primera generaci&oacute;n,";
 choices[62][1] = "En la segunda generaci&oacute;n";
 choices[62][2] = "En la tercera generaci&oacute;n.";
 choices[62][3] = "En la cuarta generaci&oacute;n";
 answers[62] = choices[62][1];
 units[62] = "45";
 comments[62] = "Id Pregunta: 8752. Examen TIC A2 2010 interna";


//  Id pregunta: 8854 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  La vulneraci&oacute;n de una restricci&oacute;n de integridad referencial es detectada por el servidor de base de datos de acuerdo a la declaraci&oacute;n de la:";
 choices[63]= new Array();
 choices[63][0] = "PRIMARY KEY";
 choices[63][1] = "FOREIGN KEY";
 choices[63][2] = "CANDIDATE KEY";
 choices[63][3] = "SUPERKEY";
 answers[63] = choices[63][1];
 units[63] = "58";
 comments[63] = "Id Pregunta: 8854. Analista Ayto. Madrid 2010";


//  Id pregunta: 9042 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  Se&ntilde;ale la afirmaci&oacute;n correcta";
 choices[64]= new Array();
 choices[64][0] = "La &uacute;nica manera de implementar SOA es con un Enterprise Service Bus";
 choices[64][1] = "La &uacute;nica manera de implementar SOA es a trav&eacute;s de servicios Web";
 choices[64][2] = "SOA es un concepto que puede ser implementado de varias formas";
 choices[64][3] = "Todas son incorrectas";
 answers[64] = choices[64][2];
 units[64] = "51";
 comments[64] = "Id Pregunta: 9042. NULL";


//  Id pregunta: 9054 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  &iquest;Cual de las siguientes NO es una actividad del estadard ISO 13407?";
 choices[65]= new Array();
 choices[65][0] = "Generaci&oacute;n de las soluciones de dise&ntilde;o";
 choices[65][1] = "Di&aacute;logo simple y natural";
 choices[65][2] = "Producci&oacute;n de soluciones de dise&ntilde;o";
 choices[65][3] = "Entender y especificar el contexto de uso.";
 answers[65] = choices[65][0];
 units[65] = "39";
 comments[65] = "Id Pregunta: 9054. NULL";


//  Id pregunta: 9141 AÃ±o de creación de pregunta: 2013-01-01
 questions[66]= "67)  &iquest;De qu&eacute; tipo de registros puede disponer un procesador?";
 choices[66]= new Array();
 choices[66][0] = "Opacos";
 choices[66][1] = "Transparentes";
 choices[66][2] = "De control";
 choices[66][3] = "Ninguna respuesta es v&aacute;lida.";
 answers[66] = choices[66][1];
 units[66] = "47";
 comments[66] = "Id Pregunta: 9141. ";


//  Id pregunta: 9174 AÃ±o de creación de pregunta: 2013-01-01
 questions[67]= "68)  Si hablamos de UBL, &iquest;cu&aacute;l de las siguientes afirmaciones es INCORRECTA?";
 choices[67]= new Array();
 choices[67][0] = "Fue desarrollado por OASIS";
 choices[67][1] = "Es una librer&iacute;a est&aacute;ndar de documentos XML dedicada a la representaci&oacute;n de facturas ";
 choices[67][2] = "Est&aacute; basada en el concepto de Core Components";
 choices[67][3] = "El desarrollo de su variante NES, NESUBL, es la base del proyecto PEPPOL de contrataci&oacute;n online paneuropea";
 answers[67] = choices[67][1];
 units[67] = "70";
 comments[67] = "Id Pregunta: 9174. ";


//  Id pregunta: 9238 AÃ±o de creación de pregunta: 2013-01-01
 questions[68]= "69)  &iquest;Qu&eacute; caracter&iacute;sticas tiene shorewall?";
 choices[68]= new Array();
 choices[68][0] = "Es una herramienta de configuraci&oacute;n de gateway/firewall para GNU/Linux";
 choices[68][1] = "Se publicita como &ldquo;iptables f&aacute;cil&rdquo;";
 choices[68][2] = "Si se quiere configurar el firewall para Ipv6 se debe instalar shorewall6.";
 choices[68][3] = "Todas las anteriores son correctas.";
 answers[68] = choices[68][3];
 units[68] = "53";
 comments[68] = "Id Pregunta: 9238. ";


//  Id pregunta: 9251 AÃ±o de creación de pregunta: 2013-01-01
 questions[69]= "70)  &iquest;Qu&eacute; es UMS?";
 choices[69]= new Array();
 choices[69][0] = "Una tecnolog&iacute;a m&oacute;vil";
 choices[69][1] = "User Mode Scheduling.";
 choices[69][2] = "Permite separar en dos partes el hilo de usuario entre la parte del proceso que se ejecuta en modo usuario y el hilo que se ejecuta en modo kernel.";
 choices[69][3] = "La B) y la C) son correctas.";
 answers[69] = choices[69][3];
 units[69] = "56";
 comments[69] = "Id Pregunta: 9251. ";


//  Id pregunta: 9267 AÃ±o de creación de pregunta: 2013-01-01
 questions[70]= "71)  &iquest;Con qu&eacute; dispositivo se relaciona la tecnolog&iacute;a de reconocimiento de pulso ac&uacute;stico?";
 choices[70]= new Array();
 choices[70][0] = "Memoria RAM";
 choices[70][1] = "Pantalla t?ctil.";
 choices[70][2] = "Tarjeta de sonido.";
 choices[70][3] = "Disco duro. ";
 answers[70] = choices[70][1];
 units[70] = "47";
 comments[70] = "Id Pregunta: 9267. Examen TICA2-2011";


//  Id pregunta: 9273 AÃ±o de creación de pregunta: 2013-01-01
 questions[71]= "72)  Indique la frase acertada sobre la gesti&oacute;n de procesos en los sistemas UNIX.";
 choices[71]= new Array();
 choices[71][0] = "El estado de un proceso en un sistema Unix se codifica usando 3 bits,";
 choices[71][1] = "El control de procesos en Unix permite la comunicaci&oacute;n s&iacute;ncrona entre procesos mediante paso de mensajes";
 choices[71][2] = "Los procesos &ldquo;daemon&rdquo; son procesos interactivos del usuario root.";
 choices[71][3] = "Los sistemas Unix permiten variar la prioridad de un proceso en tiempo de ejecuci&oacute;n pero no los permisos con que se ejecuta";
 answers[71] = choices[71][1];
 units[71] = "53";
 comments[71] = "Id Pregunta: 9273. Examen TIC-A1 2011";


//  Id pregunta: 9597 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  En el desarrollo de aplicaciones en .NET Framework, &iquest;cu&aacute;l de los siguientes no es un componente del marco .NET Framework?";
 choices[72]= new Array();
 choices[72][0] = "El entorno de ejecuci&oacute;n de lenguaje com&uacute;n (CLR) ";
 choices[72][1] = "La biblioteca de clases base (.NET Framework Base Classes) ";
 choices[72][2] = "El lenguaje de definici&oacute;n de la interfaz (IDL)";
 choices[72][3] = "El motor de generaci&oacute;n de la interfaz de usuario ";
 answers[72] = choices[72][2];
 units[72] = "59";
 comments[72] = "Id Pregunta: 9597. Xunta A2 2011";


//  Id pregunta: 9600 AÃ±o de creación de pregunta: 2014-01-01
 questions[73]= "74)  Marcar la respuesta correcta:";
 choices[73]= new Array();
 choices[73][0] = "UNIX se desarroll&oacute; a partir del sistema MINIX.";
 choices[73][1] = "El lenguaje original de desarrollo de UNIX era el B, posteriormente se desarroll&oacute; en C";
 choices[73][2] = " El n&uacute;cleo original del sistema operativo UNIX fue dise&ntilde;ado por A. Tanenbaum.";
 choices[73][3] = "Todas las anteriores son incorrectas";
 answers[73] = choices[73][1];
 units[73] = "53";
 comments[73] = "Id Pregunta: 9600. ";


//  Id pregunta: 9605 AÃ±o de creación de pregunta: 2014-01-01
 questions[74]= "75)  &iquest;Qu&eacute; base de datos usa un formato de almacenamiento XML?";
 choices[74]= new Array();
 choices[74][0] = "Oracle";
 choices[74][1] = "MongoDB";
 choices[74][2] = "eXist";
 choices[74][3] = "Redis";
 answers[74] = choices[74][2];
 units[74] = "58";
 comments[74] = "Id Pregunta: 9605. NULL";


//  Id pregunta: 9612 AÃ±o de creación de pregunta: 2014-01-01
 questions[75]= "76)  &iquest;Qu&eacute; es una vista materializada?";
 choices[75]= new Array();
 choices[75][0] = "El resultado de una consulta de la base de datos almacenado en el disco duro";
 choices[75][1] = "El resultado de una consulta de la base de datos almacenado en una tabla cach&eacute;";
 choices[75][2] = "El resultado de una consulta de la base de datos realizada mediante procedimientos almacenados";
 choices[75][3] = "El resultado de una operaci&oacute;n de &ldquo;triggers&rdquo;";
 answers[75] = choices[75][1];
 units[75] = "58";
 comments[75] = "Id Pregunta: 9612. NULL";


//  Id pregunta: 9682 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  Son tipos de mapas:";
 choices[76]= new Array();
 choices[76][0] = "Topogr&aacute;fico, topol&oacute;gico, tem&aacute;tico y superficial.";
 choices[76][1] = "Topogr&aacute;fico, azimutal, tem&aacute;tico y plano.";
 choices[76][2] = "Referencial, topol&oacute;gico, tem&aacute;tico y plano. ";
 choices[76][3] = "Cil&iacute;ndrico, azimutal, c&oacute;nico y estereogr&aacute;fico.";
 answers[76] = choices[76][2];
 units[76] = "67";
 comments[76] = "Id Pregunta: 9682. NULL";


//  Id pregunta: 9691 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  &iquest;Cu&aacute;l de las siguientes opciones representa tipos de modelos dimensionales?";
 choices[77]= new Array();
 choices[77][0] = "Modelo en estrella.";
 choices[77][1] = "Modelo Copo de nieve.";
 choices[77][2] = "Constelaciones.";
 choices[77][3] = "Todos son modelos dimensionales.";
 answers[77] = choices[77][3];
 units[77] = "68";
 comments[77] = "Id Pregunta: 9691. ";


//  Id pregunta: 9719 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  En Tecnolog&iacute;as de la Informaci&oacute;n y Comunicaciones, CRUD";
 choices[78]= new Array();
 choices[78][0] = "es el acr&oacute;nimo de Crear, Leer/Obtener, Actualizar y Borrar (Create, Read/Retrieve, Update, Delete).";
 choices[78][1] = "es la base de arquitecturas Web RESTful (basadas en REST).";
 choices[78][2] = "tiene su origen en sentencias de base de datos relacionales.";
 choices[78][3] = "las opciones a, b y c son ciertas.";
 answers[78] = choices[78][3];
 units[78] = "58";
 comments[78] = "Id Pregunta: 9719. Examen TIC-A1 2013";


//  Id pregunta: 9966 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  El subconjunto de datos de un Almac&eacute;n de Datos se denomina:";
 choices[79]= new Array();
 choices[79][0] = "Data Warehouse.";
 choices[79][1] = "OLAP";
 choices[79][2] = "Data Mart.";
 choices[79][3] = "Data Mining.";
 answers[79] = choices[79][2];
 units[79] = "68,71";
 comments[79] = "Id Pregunta: 9966. Examen Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n, Servicio sanitario Extremadura, 2014";


//  Id pregunta: 10015 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  En relaci&oacute;n con la concurrencia en bases de datos, el tama&ntilde;o del elemento de datos adecuado para el bloqueo (granularidad) afecta al grado de concurrencia de forma que, a menor tama&ntilde;o del elemento que es bloqueado:";
 choices[80]= new Array();
 choices[80][0] = "Aumenta el grado de concurrencia, aumenta la carga de trabajo para la gesti&oacute;n de bloqueos y el espacio ocupado por la informaci&oacute;n de bloqueos.";
 choices[80][1] = "Disminuye el grado de concurrencia, aumenta la carga de trabajo para la gesti&oacute;n de bloqueos y el espacio ocupado por la informaci&oacute;n de bloqueos.";
 choices[80][2] = "Disminuye el grado de concurrencia, disminuyendo la carga de trabajo para la gesti&oacute;n de bloqueos y el espacio ocupado por la informaci&oacute;n de bloqueos.";
 choices[80][3] = "Aumenta el grado de concurrencia, disminuyendo la carga de trabajo para la gesti&oacute;n de bloqueos y el espacio ocupado por la informaci&oacute;n de bloqueos.";
 answers[80] = choices[80][0];
 units[80] = "58";
 comments[80] = "Id Pregunta: 10015. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10026 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  El Entity Framework es:";
 choices[81]= new Array();
 choices[81][0] = "Un framework ORM (object-relational mapper) desarrollado por Microsoft e integrado en la plataforma .NET.";
 choices[81][1] = "Una utilidad que permite identificar las funcionalidades de un sistema inform&aacute;tico.";
 choices[81][2] = "Una herramienta de planificaci&oacute;n y gesti&oacute;n del software desarrollado por Microsoft.";
 choices[81][3] = "Un framework orientado a la realizaci&oacute;n de aplicaciones web implementado por Microsoft que respecta el modelo vista controlador.";
 answers[81] = choices[81][0];
 units[81] = "59";
 comments[81] = "Id Pregunta: 10026. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10289 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  &iquest;Cu&aacute;l de los siguientes comandos de Solaris 11 NO devuelve informaci&oacute;n relativa a discos?";
 choices[82]= new Array();
 choices[82][0] = "iostat";
 choices[82][1] = "df";
 choices[82][2] = "sar";
 choices[82][3] = "nc";
 answers[82] = choices[82][3];
 units[82] = "48";
 comments[82] = "Id Pregunta: 10289. TIC A2, libre, examen 2013";


//  Id pregunta: 10308 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  &iquest;Qu&eacute; es Transact-SQL?";
 choices[83]= new Array();
 choices[83][0] = "Un sistema gestor de base de datos de tipo NoSQL.";
 choices[83][1] = "Una extensi&oacute;n propietaria al est&aacute;ndar SQL.";
 choices[83][2] = "Una query que equivale a realizar consultas SELECT por lotes.";
 choices[83][3] = "Una biblioteca de clases para mapear objetos sobre una base de datos relacional.";
 answers[83] = choices[83][1];
 units[83] = "58";
 comments[83] = "Id Pregunta: 10308. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10463 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  Respecto a REST, indique la respuesta correcta:";
 choices[84]= new Array();
 choices[84][0] = "Los m&eacute;todos HEAD, POST, PUT y DELETE definen la interfaz de los recursos.";
 choices[84][1] = "Al igual que SOAP est&aacute; basado en verbos u operaciones para definir la funcionalidad de las aplicaciones.";
 choices[84][2] = "Los servicios web tipo REST permiten el uso de WS-Security.";
 choices[84][3] = "Permiten mayor escalabilidad al no requerir mantenimiento del estado.";
 answers[84] = choices[84][3];
 units[84] = "51";
 comments[84] = "Id Pregunta: 10463. ";


//  Id pregunta: 10464 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  &iquest;Qu&eacute; elemento de HTML 5 tiene como finalidad dibujar gr&aacute;ficos 2D on the fly mediante Javascript?";
 choices[85]= new Array();
 choices[85][0] = "&lt;svg&gt;";
 choices[85][1] = "&lt;canvas&gt;";
 choices[85][2] = "&lt;output&gt;";
 choices[85][3] = "&lt;source&gt;";
 answers[85] = choices[85][1];
 units[85] = "69";
 comments[85] = "Id Pregunta: 10464. NULL";


//  Id pregunta: 10608 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  El formato de redifusi&oacute;n web Atom est&aacute; estandarizado en:";
 choices[86]= new Array();
 choices[86][0] = "IETF RFC 1738";
 choices[86][1] = "IETF RFC 1392";
 choices[86][2] = "IETF RFC 2616";
 choices[86][3] = "IETF RFC 4287";
 answers[86] = choices[86][3];
 units[86] = "69";
 comments[86] = "Id Pregunta: 10608. ";


//  Id pregunta: 10610 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  &iquest;Seg&uacute;n el Reglamento 910/2014 del Parlamento Europeo y del Consejo, cu&aacute;l de &eacute;stos son requisitos de seguridad de los TSP (Trust Service Providers)?";
 choices[87]= new Array();
 choices[87][0] = "Notificar las violaciones al MINETUR y el organismo correspondiente en m&aacute;ximo 24 horas.";
 choices[87][1] = "Mantener una base de datos de certificados";
 choices[87][2] = "Publicar las revocaciones en un m&aacute;ximo de 24 horas tras la solicitud.";
 choices[87][3] = "Todas las anteriores.";
 answers[87] = choices[87][0];
 units[87] = "74";
 comments[87] = "Id Pregunta: 10610. B y C son exclusivamente para QTSPs";


//  Id pregunta: 10624 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  Una sistema de gesti&oacute;n de base de datos NoSQL...";
 choices[88]= new Array();
 choices[88][0] = "&hellip; es un sistema de base de datos relacional que no utiliza SQL.";
 choices[88][1] = "&hellip; almacena sus datos en estructuras fijas (tablas).";
 choices[88][2] = "&hellip; garantiza completamente las propiedades ACID.";
 choices[88][3] = "&hellip; tienen como ventaja principal la gran escalabilidad y rendimiento.";
 answers[88] = choices[88][3];
 units[88] = "68";
 comments[88] = "Id Pregunta: 10624. ";


//  Id pregunta: 10800 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  Se&ntilde;ale qu&eacute; tecnolog&iacute;a XML sem&aacute;ntica puede ser usada para la interoperabilidad e intercambio de mensajes electr&oacute;nicos de negocio, mensajes B2B:";
 choices[89]= new Array();
 choices[89][0] = "ecXML";
 choices[89][1] = "ebXML";
 choices[89][2] = "WSDL";
 choices[89][3] = "Xerces";
 answers[89] = choices[89][1];
 units[89] = "69";
 comments[89] = "Id Pregunta: 10800. Examen GSI 2014";


//  Id pregunta: 10863 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  De acuerdo a las operaciones que se requieran desarrollar, los Data Marts pueden adoptar diversas arquitecturas, se&ntilde;ale la caracter&iacute;stica correspondiente a la arquitectura Top-Down:";
 choices[90]= new Array();
 choices[90][0] = "Se definen previamente los Data Marts (DM) y luego se integran en un Data Warehouse (DW) centralizado. Los DM se cargan a trav&eacute;s de procesos ETL.";
 choices[90][1] = "Se define previamente un DW y un DM principal que se cargan a trav&eacute;s de procesos ETL. El DW alimentar&aacute; a otros DW, y el DM principal alimentar&aacute; a otros DM.";
 choices[90][2] = "Se define una base de datos (BD) principal que se carga mediante procesos ETL desde todas las BD corporativas, esta BD alimenta en exclusiva a todos los DM y DW existentes.";
 choices[90][3] = "Primero se define el DW, el cual es cargado a trav&eacute;s de procesos ETL y luego este alimenta a los diferentes DM. Cada DM recibir&aacute; los datos que correspondan al tema/departamento que traten.";
 answers[90] = choices[90][3];
 units[90] = "68, 71";
 comments[90] = "Id Pregunta: 10863. Examen GSI 2014";


//  Id pregunta: 10903 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;Qu&eacute; es SPDY?";
 choices[91]= new Array();
 choices[91][0] = "Es un protocolo que reduce el tiempo de carga de sitios web.";
 choices[91][1] = "Storage Protocol Data Yield, protocolo para el almacenamiento de datos seg&uacute;n la probabilidad de uso de los mismos.";
 choices[91][2] = "Es una medida de rendimiento de CPU utilizada en entornos de altas prestaciones.";
 choices[91][3] = "Es la evoluci&oacute;n de HSUPA con una tasa de transferencia de 5 Gbps reales.";
 answers[91] = choices[91][0];
 units[91] = "0";
 comments[91] = "Id Pregunta: 10903. Examen GSI 2014";


//  Id pregunta: 11136 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l de los siguientes no es un lenguaje para interactuar con la SGBD?";
 choices[92]= new Array();
 choices[92][0] = "DDL - Data Definition Language";
 choices[92][1] = "DML - Data Manipulation Language";
 choices[92][2] = "DCL - Data Control Language";
 choices[92][3] = "Todos los anteriores son lenguajes para interactuar con la SGBD";
 answers[92] = choices[92][3];
 units[92] = "57";
 comments[92] = "Id Pregunta: 11136. ";


//  Id pregunta: 11137 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Cu&aacute;l de los siguientes es un operador derivado de algebra relacional?";
 choices[93]= new Array();
 choices[93][0] = "Intersecci&oacute;n";
 choices[93][1] = "Uni&oacute;n";
 choices[93][2] = "Proyecci&oacute;n";
 choices[93][3] = "Selecci&oacute;n";
 answers[93] = choices[93][0];
 units[93] = "58";
 comments[93] = "Id Pregunta: 11137. ";


//  Id pregunta: 11150 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l de lo siguientes sistemas de firma electr&oacute;nica utilizan las Administraciones P&uacute;blicas para la actuaci&oacute;n administrativa automatizada, con objeto de su identificaci&oacute;n electr&oacute;nica y para la autenticaci&oacute;n de los documentos electr&oacute;nicos que produzcan?";
 choices[94]= new Array();
 choices[94][0] = "Sello electr&oacute;nico";
 choices[94][1] = "C&oacute;digo seguro de verificaci&oacute;n";
 choices[94][2] = "Todos los anteriores";
 choices[94][3] = "Ninguno de los anteriores";
 answers[94] = choices[94][2];
 units[94] = "73";
 comments[94] = "Id Pregunta: 11150. ";


//  Id pregunta: 11285 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Qu&eacute; se entiende por un SIG dual?";
 choices[95]= new Array();
 choices[95][0] = "El que  mantiene  la  informaci&oacute;n  gr&aacute;fica con una clave identificadora &uacute;nica que sirve  para  realizar  b&uacute;squedas  en  el  SGBD  que  contiene la informaci&oacute;n  alfanum&eacute;rica";
 choices[95][1] = "El que contiene  un  modelo  de  comportamiento  a  lo  largo  del tiempo  para  alg&uacute;n  aspecto  de  la  realidad. ";
 choices[95][2] = "El que aplica una concepci&oacute;n orientada  al objeto, en la  que los elementos contengan informaci&oacute;n sobre  sus propiedades, comportamiento etc..";
 choices[95][3] = "El que contempla al mismo tiempo un modelo r&aacute;ster y uno vectorial";
 answers[95] = choices[95][0];
 units[95] = "67";
 comments[95] = "Id Pregunta: 11285. ";


//  Id pregunta: 11508 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  El tipo de control de acceso a usuarios que establece que todo recurso del sistema tiene una etiqueta de seguridad compuesta por el nivel de seguridad y el recurso al que se quiere acceder, se denomina.";
 choices[96]= new Array();
 choices[96][0] = "DAC";
 choices[96][1] = "RBAC";
 choices[96][2] = "MAC";
 choices[96][3] = "Ninguno de los anteriores.";
 answers[96] = choices[96][2];
 units[96] = "72";
 comments[96] = "Id Pregunta: 11508. NULL";


//  Id pregunta: 11512 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Indique la FALSA respecto al concepto MapReduce.";
 choices[97]= new Array();
 choices[97][0] = "Es un paradigma de programaci&oacute;n utilizado en plataformas de Big Data";
 choices[97][1] = "Adem&aacute;s de los procesos Map y Reduce, incorpora una fase intermedia de Shuffle que permite balancear la carga de las tuplas de entrada.";
 choices[97][2] = "El proceso Map consiste en tomar las salidas del proceso Reduce y combina dichas tuplas en un conjunto m&aacute;s peque&ntilde;o.";
 choices[97][3] = "Proceso Map toma un conjunto de datos y lo convierte en otro conjunto, separando los elementos indiviudales en tuplas (pares clave/valor)";
 answers[97] = choices[97][2];
 units[97] = "68";
 comments[97] = "Id Pregunta: 11512. NULL";


//  Id pregunta: 11623 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  En HTML5, para representar la leyenda de una figura se hace uso de la etiqueta:";
 choices[98]= new Array();
 choices[98][0] = "&lt;figure&gt;";
 choices[98][1] = "&lt;figcaption&gt;";
 choices[98][2] = "&lt;footer&gt;";
 choices[98][3] = "&lt;figlegend&gt;";
 answers[98] = choices[98][1];
 units[98] = "69";
 comments[98] = "Id Pregunta: 11623. ";


//  Id pregunta: 11760 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Cu&aacute;l es el formato y la &uacute;ltima versi&oacute;n utillizada para las facturas electr&oacute;nicas a fecha de diciembre de 2015?";
 choices[99]= new Array();
 choices[99][0] = "businessae";
 choices[99][1] = "ubl v2.3";
 choices[99][2] = "facturae v3.1.1";
 choices[99][3] = "Facturae v.3.2.1";
 answers[99] = choices[99][3];
 units[99] = "70";
 comments[99] = "Id Pregunta: 11760. ";


