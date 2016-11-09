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

//  Id pregunta: 713 AÃ±o de creación de pregunta: 2004-01-01
 questions[0]= "1)  En UNIX, &iquest;qui&eacute;n es el due&ntilde;o del proceso una vez ejecutada la instrucci&oacute;n lpr?";
 choices[0]= new Array();
 choices[0][0] = "root";
 choices[0][1] = "el usuario que la ha ejecutado";
 choices[0][2] = "el programa de control de la cola de impresora";
 choices[0][3] = "scheduler";
 answers[0] = choices[0][2];
 units[0] = "52, 53";
 comments[0] = "Id Pregunta: 713. Similar a examen TIC SS A 2003";


//  Id pregunta: 714 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  En UNIX, &iquest;qu&eacute; elemento traduce los comandos de usuario en instrucciones para el Kernel?";
 choices[1]= new Array();
 choices[1][0] = "Shell";
 choices[1][1] = "Kernel";
 choices[1][2] = "Shell o Kernel, dependiendo de la secuencia de comandos";
 choices[1][3] = "Ninguno de los anteriores";
 answers[1] = choices[1][0];
 units[1] = "52, 53";
 comments[1] = "Id Pregunta: 714. Similar a examen TIC SS A 2003";


//  Id pregunta: 718 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  Entre los distintos niveles de abstracci&oacute;n de una base de datos &iquest;con cu&aacute;l de los siguientes conceptos se identifica el &quot;usuario final&quot;?";
 choices[2]= new Array();
 choices[2][0] = "Esquema externo";
 choices[2][1] = "Esquema conceptual";
 choices[2][2] = "Esquema interno";
 choices[2][3] = "Esquema global";
 answers[2] = choices[2][0];
 units[2] = "57";
 comments[2] = "Id Pregunta: 718. Examen TIC MAP B 2004";


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


//  Id pregunta: 821 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  Un elemento clave en la integraci&oacute;n de los sistemas de informaci&oacute;n, que permite hacer relaciones y operaciones interactivas sobre todos los datos de la organizaci&oacute;n para efectuar labores de planificaci&oacute;n, control y operaci&oacute;n son los llamados:";
 choices[4]= new Array();
 choices[4][0] = "Optical Character Readers (OCR)";
 choices[4][1] = "Diccionarios de Recursos de Informaci&oacute;n (DRI)";
 choices[4][2] = "Servidores de red local";
 choices[4][3] = "Ninguno de las anteriores respuestas es correcta";
 answers[4] = choices[4][1];
 units[4] = "57";
 comments[4] = "Id Pregunta: 821. ";


//  Id pregunta: 835 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;Cu&aacute;l de las siguientes afirmaciones es correcta sobre el &aacute;lgebra relacional?:";
 choices[5]= new Array();
 choices[5][0] = "El &aacute;lgebra relacional es un lenguaje procedimental";
 choices[5][1] = "Los operadores de selecci&oacute;n, proyecci&oacute;n, uni&oacute;n y diferencia forman un conjunto relacionalmente completo";
 choices[5][2] = "Todos los operadores de consulta son derivables de los operadores fundamentales";
 choices[5][3] = "El &lsquo;join&rsquo; es un operador de compuesto de selecci&oacute;n y proyecci&oacute;n";
 answers[5] = choices[5][0];
 units[5] = "57";
 comments[5] = "Id Pregunta: 835. ";


//  Id pregunta: 901 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Para qu&eacute; se usa el comando  tee  en Unix?:";
 choices[6]= new Array();
 choices[6][0] = "Se usa para guardar la salida de una orden en un fichero, adem&aacute;s de llevarla a la salida est&aacute;ndar";
 choices[6][1] = "Se utiliza para guardar o recuperar los archivos de una cinta magn&eacute;tica, un disco flexible o un fichero normal";
 choices[6][2] = "Se emplea para comprimir los datos de un fichero";
 choices[6][3] = "Se usa para visualizar los ficheros que se encuentran en una cola de impresi&oacute;n";
 answers[6] = choices[6][0];
 units[6] = "53";
 comments[6] = "Id Pregunta: 901. ";


//  Id pregunta: 921 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Qu&eacute; es el 'swapping'?:";
 choices[7]= new Array();
 choices[7][0] = "Un algoritmo para planificaci&oacute;n del uso de la CPU";
 choices[7][1] = "Un mecanismo para mover procesos de ejecuci&oacute;n desde/hacia la memoria principal a/desde disco respectivamente";
 choices[7][2] = "Un tipo especial de organizaci&oacute;n de los sistemas de ficheros";
 choices[7][3] = "El tiempo medio necesario para mover un programa desde disco a la memoria principal";
 answers[7] = choices[7][1];
 units[7] = "52";
 comments[7] = "Id Pregunta: 921. ";


//  Id pregunta: 956 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Con el comando kill de Unix es posible enviar se&ntilde;ales a otros procesos. &iquest;Qu&eacute; se&ntilde;al no puede capturar ni ignorar un proceso, y provoca la terminaci&oacute;n del mismo?:";
 choices[8]= new Array();
 choices[8][0] = "8";
 choices[8][1] = "2";
 choices[8][2] = "15";
 choices[8][3] = "9";
 answers[8] = choices[8][3];
 units[8] = "53";
 comments[8] = "Id Pregunta: 956. ";


//  Id pregunta: 968 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  Cuando en las entidades descritas en el modelo de datos existe una dependencia funcional de los atributos de todos los atributos que componen la clave, se dice que el modelo est&aacute; normalizado:";
 choices[9]= new Array();
 choices[9][0] = "En segunda forma normal";
 choices[9][1] = "En primera forma normal";
 choices[9][2] = "En tercera forma normal";
 choices[9][3] = "En cuarta forma normal";
 answers[9] = choices[9][0];
 units[9] = "58";
 comments[9] = "Id Pregunta: 968. ";


//  Id pregunta: 1014 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  El factor de utilizaci&oacute;n de los componentes de un sistema es:";
 choices[10]= new Array();
 choices[10][0] = "Relaci&oacute;n entre el tiempo de proceso requerido por una petici&oacute;n y el tiempo de reflexi&oacute;n del usuario";
 choices[10][1] = "Porcentaje de tiempo durante el cual est&aacute; siendo utilizado un componente del sistema inform&aacute;tico";
 choices[10][2] = "Porcentaje de tiempo durante el cual dos o m&aacute;s componentes del sistema est&aacute;n siendo utilizados simult&aacute;neamente";
 choices[10][3] = "Porcentaje de tiempo que los distintos dispositivos del sistema est&aacute;n siendo utilizados en tareas del sistema, no directamente imputables a ninguno de los trabajos en curso";
 answers[10] = choices[10][1];
 units[10] = "52";
 comments[10] = "Id Pregunta: 1014. ";


//  Id pregunta: 1026 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Entre los componentes de un sistema inform&aacute;tico:";
 choices[11]= new Array();
 choices[11][0] = "Dentro del subsistema l&oacute;gico, el software de tiempo real se considera software de base";
 choices[11][1] = "Los montadores/cargadores unen un programa compilado en c&oacute;digo objeto con subrutinas del sistema y del usuario";
 choices[11][2] = "La arquitectura distribuida se divide en SISD, SIMD, MISD, MIMD";
 choices[11][3] = "Overlap o solapamiento es el porcentaje de tiempo de CPU en que la CPU atiende al sistema operativo y a las funciones de supervisi&oacute;n y no a las funciones de usuario";
 answers[11] = choices[11][1];
 units[11] = "52";
 comments[11] = "Id Pregunta: 1026. ";


//  Id pregunta: 1032 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  El mecanismo de overlay,  utilizado para poder ejecutar programas de mayor tama&ntilde;o que la memoria principal se caracteriza por:";
 choices[12]= new Array();
 choices[12][0] = "Es un mecanismo que permite al programador no preocuparse por el tama&ntilde;o de los programas";
 choices[12][1] = "El programador debe partir los programas en trozos de tama&ntilde;os similares";
 choices[12][2] = "No es necesario que los programas contengan instrucciones que gestionen el proceso de cargar en memoria el c&oacute;digo que se va a ejecutar en un momento dado";
 choices[12][3] = "Sustituy&oacute; al proceso de paginaci&oacute;n a lo largo de los a&ntilde;os 60";
 answers[12] = choices[12][1];
 units[12] = "52";
 comments[12] = "Id Pregunta: 1032. ";


//  Id pregunta: 1037 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  El modelo de referencia ANSI/SPARC para la estandarizaci&oacute;n de los SGBD:";
 choices[13]= new Array();
 choices[13][0] = "El n&uacute;cleo de la arquitectura lo constituye el diccionario de datos";
 choices[13][1] = "Los metadatos no forman parte del diccionario";
 choices[13][2] = "Indica la forma de instrumentar las interacciones del SGBD";
 choices[13][3] = "La administraci&oacute;n de la empresa dise&ntilde;a los esquemas externos";
 answers[13] = choices[13][0];
 units[13] = "57";
 comments[13] = "Id Pregunta: 1037. ";


//  Id pregunta: 1089 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  En el Modelo de Referencia para la estandarizaci&oacute;n de los Sistemas de Gesti&oacute;n de Bases de Datos, basado en la arquitectura de tres niveles de ANSI, las funciones de insertar y borrar se realizan mediante:";
 choices[14]= new Array();
 choices[14][0] = "El esquema interno";
 choices[14][1] = "El diccionario central de datos";
 choices[14][2] = "El lenguaje de definici&oacute;n de datos";
 choices[14][3] = "El lenguaje de manipulaci&oacute;n de datos";
 answers[14] = choices[14][3];
 units[14] = "57";
 comments[14] = "Id Pregunta: 1089. ";


//  Id pregunta: 1129 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  En relaci&oacute;n con la gesti&oacute;n de prioridades entre perif&eacute;ricos para acceder a un recurso com&uacute;n,  cu&aacute;l de las siguientes sentencias es correcta?:";
 choices[15]= new Array();
 choices[15][0] = "La gesti&oacute;n de prioridad distribuida es la m&aacute;s utilizada cuando los dispositivos est&aacute;n conectados mediante bus al recurso com&uacute;n";
 choices[15][1] = "La gesti&oacute;n de prioridad distribuida es la m&aacute;s conveniente cuando la conexi&oacute;n de los dispositivos es mediante multiplexor";
 choices[15][2] = "La gesti&oacute;n de prioridad programada es la m&aacute;s conveniente cuando la conexi&oacute;n de los dispositivos es mediante multiplexor";
 choices[15][3] = "La gesti&oacute;n de prioridad h&iacute;brida emplea simult&aacute;neamente los conceptos de gesti&oacute;n distribuida y programada";
 answers[15] = choices[15][0];
 units[15] = "52";
 comments[15] = "Id Pregunta: 1129. ";


//  Id pregunta: 1144 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  En un sistema monoprocesador con mezcla de procesos de c&aacute;lculo puro y procesos intensivos en E/S, el uso de una politica de planificaci&oacute;n FIFO provoca:";
 choices[16]= new Array();
 choices[16][0] = "Un tiempo de ejecuci&oacute;n excelente para los procesos con E/S intensiva o interactiva";
 choices[16][1] = "Una gran ineficiencia, ya que los procesos de calculo intensivo se adue&ntilde;an de la CPU";
 choices[16][2] = "Una respuesta equilibrada, sin aprovechar el sistema en su totalidad";
 choices[16][3] = "Todas son falsas";
 answers[16] = choices[16][1];
 units[16] = "52";
 comments[16] = "Id Pregunta: 1144. ";


//  Id pregunta: 1147 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  En un sistema operativo Unix System V, &iquest;qu&eacute; tipo de informaci&oacute;n contiene un nodo-i?:";
 choices[17]= new Array();
 choices[17][0] = "Informaci&oacute;n sobre el tama&ntilde;o y nombre del sistema de ficheros";
 choices[17][1] = "Informaci&oacute;n sobre los derechos de acceso al fichero";
 choices[17][2] = "Datos del usuario";
 choices[17][3] = "Informaci&oacute;n sobre los usuarios del fichero";
 answers[17] = choices[17][1];
 units[17] = "53";
 comments[17] = "Id Pregunta: 1147. ";


//  Id pregunta: 1251 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  La visi&oacute;n general que la empresa debe tener de toda la base de datos, corresponde al:";
 choices[18]= new Array();
 choices[18][0] = "Esquema conceptual";
 choices[18][1] = "Exquema externo";
 choices[18][2] = "Esquema interno";
 choices[18][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[18] = choices[18][0];
 units[18] = "57";
 comments[18] = "Id Pregunta: 1251. ";


//  Id pregunta: 1267 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  Las vistas de una base de datos:";
 choices[19]= new Array();
 choices[19][0] = "Son tablas virtuales que se definen sobre una o m&aacute;s tablas reales y de las que s&oacute;lo se almacena su definici&oacute;n";
 choices[19][1] = "Son las distintas formas de representaci&oacute;n del modelo conceptual de datos";
 choices[19][2] = "Son las formas en las que se puede almacenar f&iacute;sicamente la informaci&oacute;n, dependiendo de las caracter&iacute;sticas del sistema inform&aacute;tico";
 choices[19][3] = "No se corresponden con nada de lo anterior";
 answers[19] = choices[19][0];
 units[19] = "58";
 comments[19] = "Id Pregunta: 1267. ";


//  Id pregunta: 1301 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Para prestaciones, capacidades y funcionalidades equivalentes entre Linux y Windows XP, &iquest;qu&eacute; afirmaci&oacute;n es cierta?:";
 choices[20]= new Array();
 choices[20][0] = "Un PC con Linux necesita m&aacute;s memoria que uno con Windows XP";
 choices[20][1] = "Un PC con Linux necesita aproximadamente la misma memoria que uno con Windows XP";
 choices[20][2] = "Un PC con Linux necesita menos memoria que uno con Windows XP";
 choices[20][3] = "Linux no puede instalarse en PCs";
 answers[20] = choices[20][2];
 units[20] = "53,56";
 comments[20] = "Id Pregunta: 1301. ";


//  Id pregunta: 1304 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  Para trabajar con una vista que contenga tuplas de varias tablas se utilizar&aacute; la sentencia SQL:";
 choices[21]= new Array();
 choices[21][0] = "CREATE TABLE";
 choices[21][1] = "CREATE VIEW";
 choices[21][2] = "ALTER TABLE";
 choices[21][3] = "ALTER VIEW";
 answers[21] = choices[21][1];
 units[21] = "58";
 comments[21] = "Id Pregunta: 1304. ";


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


//  Id pregunta: 1407 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Una asociaci&oacute;n entre entidades es reflexiva cuando:";
 choices[25]= new Array();
 choices[25][0] = "El n&uacute;mero de entidades que participan en la asociaci&oacute;n es mayor que 2";
 choices[25][1] = "La cardinalidad de la asociaci&oacute;n es l";
 choices[25][2] = "Tiene &uacute;nicamente un atributo principal como clave";
 choices[25][3] = "Una entidad se relaciona con ella misma";
 answers[25] = choices[25][3];
 units[25] = "58";
 comments[25] = "Id Pregunta: 1407. ";


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


//  Id pregunta: 1438 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  &iquest;Qu&eacute; es una API?:";
 choices[27]= new Array();
 choices[27][0] = "Entorno de desarrollo que permite la compatibilidad binaria entre m&aacute;quinas";
 choices[27][1] = "Una herramienta CASE que facilita el desarrollo de aplicaciones";
 choices[27][2] = "Monitor est&aacute;ndar de transacciones en el sistema operativo Unix";
 choices[27][3] = "Application Programming Interface: Interfaz de la aplicaci&oacute;n con otros componentes software, por ejemplo con el sistema operativo o con el interfaz gr&aacute;fico";
 answers[27] = choices[27][3];
 units[27] = "55";
 comments[27] = "Id Pregunta: 1438. ";


//  Id pregunta: 1505 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  Los procesos en UNIX que est&aacute;n en ejecuci&oacute;n:";
 choices[28]= new Array();
 choices[28][0] = "Tienen que residir en memoria";
 choices[28][1] = "Pueden tener p&aacute;ginas en memoria y p&aacute;ginas en disco";
 choices[28][2] = "Tienen que estar en memoria aun cuando no se est&eacute;n ejecutando";
 choices[28][3] = "Ninguna de las anteriores";
 answers[28] = choices[28][1];
 units[28] = "53";
 comments[28] = "Id Pregunta: 1505. ";


//  Id pregunta: 1539 AÃ±o de creación de pregunta: 2003-01-01
 questions[29]= "30)  &iquest; Cu&aacute;l se utiliza para compartir recursos desde un sistema tipo Unix a equipos Windows utilizando el protocolo SMB ?";
 choices[29]= new Array();
 choices[29][0] = "NFS";
 choices[29][1] = "Samba";
 choices[29][2] = "Cualquiera de los 2 indistintamente";
 choices[29][3] = "Ninguno de los 2";
 answers[29] = choices[29][1];
 units[29] = "54";
 comments[29] = "Id Pregunta: 1539. NULL";


//  Id pregunta: 1578 AÃ±o de creación de pregunta: 2003-01-01
 questions[30]= "31)  &iquest;Qu&eacute; ordenador personal fue el primero en utilizar el sistema de ventanas - iconos - rat&oacute;n - puntero (WIMP)?:";
 choices[30]= new Array();
 choices[30][0] = "zx81.";
 choices[30][1] = "IBM XT.";
 choices[30][2] = "APPLE.";
 choices[30][3] = "Amstrad CPC 128.";
 answers[30] = choices[30][2];
 units[30] = "52";
 comments[30] = "Id Pregunta: 1578. Junta Andaluc&iacute;a";


//  Id pregunta: 1587 AÃ±o de creación de pregunta: 2003-01-01
 questions[31]= "32)  En el modelo de datos relacional, al conjunto no vac&iacute;o de atributos de una relaci&oacute;n cuyos valores sirven para referenciar la clave primaria de otra relaci&oacute;n del mismo dominio, se denomina:";
 choices[31]= new Array();
 choices[31][0] = "Superclave.";
 choices[31][1] = "Clave principal.";
 choices[31][2] = "Tupla m&uacute;ltiple.";
 choices[31][3] = "Clave ajena.";
 answers[31] = choices[31][3];
 units[31] = "58";
 comments[31] = "Id Pregunta: 1587. Junta Andaluc&iacute;a";


//  Id pregunta: 1591 AÃ±o de creación de pregunta: 2003-01-01
 questions[32]= "33)  En la creaci&oacute;n de una Base de Datos, &iquest;para qu&eacute; se utiliza el comando &lsquo;ASSERT&rsquo;?";
 choices[32]= new Array();
 choices[32][0] = "Para asignar un &iacute;ndice a una tabla de la Base de Datos.";
 choices[32][1] = "Para establecer reglas de integridad.";
 choices[32][2] = "Para asignar una vista a una o varias tablas de la Base de Datos.";
 choices[32][3] = "Para hacer copias de seguridad de la Base de Datos.";
 answers[32] = choices[32][1];
 units[32] = "58";
 comments[32] = "Id Pregunta: 1591. NULL";


//  Id pregunta: 1600 AÃ±o de creación de pregunta: 2003-01-01
 questions[33]= "34)  En un SGBD (Sistema Gestor de Base de Datos), &iquest;qu&eacute; tipo de bloqueos puede haber?";
 choices[33]= new Array();
 choices[33][0] = "Bloqueo de lectura, de escritura, de registro y de p&aacute;gina.";
 choices[33][1] = "Bloqueo de registro y de p&aacute;gina pero nunca de lectura ni escritura.";
 choices[33][2] = "Bloqueo de lectura y de escritura pero nunca de registro ni de p&aacute;gina.";
 choices[33][3] = "Bloqueo de escritura y de registro pero nunca de lectura ni de p&aacute;gina.";
 answers[33] = choices[33][0];
 units[33] = "58";
 comments[33] = "Id Pregunta: 1600. ";


//  Id pregunta: 1613 AÃ±o de creación de pregunta: 2003-01-01
 questions[34]= "35)  Las herramientas de administraci&oacute;n de datos de un SGBD";
 choices[34]= new Array();
 choices[34][0] = " Est&aacute;n entre  las facilidades de usuario y el sistema central de transformaci&oacute;n de datos ";
 choices[34][1] = " Tienen como interfaces LDU y LD";
 choices[34][2] = " Tienen como interfaces LD y LD-I";
 choices[34][3] = "Est&aacute;n entre el usuario y el sistema central de transformaci&oacute;n de datos ";
 answers[34] = choices[34][0];
 units[34] = "57";
 comments[34] = "Id Pregunta: 1613. ";


//  Id pregunta: 1662 AÃ±o de creación de pregunta: 2004-01-01
 questions[35]= "36)  De entre las siguientes maneras de manipular una base de datos SQL, indique la que no es correcta:";
 choices[35]= new Array();
 choices[35][0] = "Interactivamente, convocando directamente las sentencias SQL.";
 choices[35][1] = "Relacionalmente, invocando paralelamente sentencias SQL.";
 choices[35][2] = "Por m&oacute;dulos, agrupando sentencias SQL en m&oacute;dulos.";
 choices[35][3] = "Por medio de SQL embebido";
 answers[35] = choices[35][1];
 units[35] = "58";
 comments[35] = "Id Pregunta: 1662. MAP-B 2003";


//  Id pregunta: 1710 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  Un sistema multiusuario es:";
 choices[36]= new Array();
 choices[36][0] = "Un sistema que posee varias CPUs y reparte la carga de trabajo de los programas de aplicaci&oacute;n y de sistemas para dar servicio a un n&uacute;mero concurrente de usuarios";
 choices[36][1] = "Un sistema que posee una sola CPU y reparte la carga de trabajo de los programas de aplicaci&oacute;n y de sistemas para dar servicio a un n&uacute;mero concurrente de usuarios";
 choices[36][2] = "Un sistema inform&aacute;tico que da servicio, mediante la utilizaci&oacute;n compartida de sus recursos, a un n&uacute;mero concurrente de usuarios";
 choices[36][3] = "Un sistema inform&aacute;tico que da servicio, mediante la utilizaci&oacute;n compartida de sus recursos, a un n&uacute;mero no concurrente de usuarios";
 answers[36] = choices[36][2];
 units[36] = "52";
 comments[36] = "Id Pregunta: 1710. ";


//  Id pregunta: 1721 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  Cu&aacute;l es la misi&oacute;n del planificador (scheduler) de un SO";
 choices[37]= new Array();
 choices[37][0] = "Seleccionar el proceso que se va a ejecutar a continuaci&oacute;n";
 choices[37][1] = "Poner en ejecuci&oacute;n el proceso seleccionado";
 choices[37][2] = "Controlar la memoria principal";
 choices[37][3] = "Expulsar al proceso en ejecuci&oacute;n";
 answers[37] = choices[37][0];
 units[37] = "52";
 comments[37] = "Id Pregunta: 1721. ";


//  Id pregunta: 1723 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  En los sistemas Unix el superbloque:";
 choices[38]= new Array();
 choices[38][0] = "Contiene informaci&oacute;n para el arranque del sistema";
 choices[38][1] = "Es el bloque 0 en la organizaci&oacute;n de un disco";
 choices[38][2] = "Contiene el n&uacute;mero de i-nodos y el n&uacute;mero de bloques del sistema de archivos";
 choices[38][3] = "todas son correctas";
 answers[38] = choices[38][2];
 units[38] = "53";
 comments[38] = "Id Pregunta: 1723. ";


//  Id pregunta: 1729 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  El comando de Unix tee";
 choices[39]= new Array();
 choices[39][0] = "Muestra el archivo byte a byte incluyendo caracteres no imprimibles";
 choices[39][1] = "Descompone la entrada en 2 flujos de salida, una es la salida est&aacute;ndar y la otra un archivo";
 choices[39][2] = "no existe";
 choices[39][3] = "Busca un patr&oacute;n en uno o m&aacute;s archivos";
 answers[39] = choices[39][1];
 units[39] = "54";
 comments[39] = "Id Pregunta: 1729. NULL";


//  Id pregunta: 1733 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  Entre los siguientes se&ntilde;ale el que no es un sistema de archivos de sistemas operativos de la familia UNIX";
 choices[40]= new Array();
 choices[40][0] = "ZFS";
 choices[40][1] = "XFS";
 choices[40][2] = "CFS";
 choices[40][3] = "NFS";
 answers[40] = choices[40][2];
 units[40] = "54";
 comments[40] = "Id Pregunta: 1733. CFS es Cluster File System";


//  Id pregunta: 1738 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  La gesti&oacute;n de memoria de Windows2003 se caracteriza por";
 choices[41]= new Array();
 choices[41][0] = "No tiene realmente porque Microsoft tiene un sistema propio";
 choices[41][1] = "Es segmentaci&oacute;n paginada";
 choices[41][2] = "Se basa en paginaci&oacute;n apoy&aacute;ndose en el conjunto de trabajo";
 choices[41][3] = "Es un sistema de segmentaci&oacute;n apoy&aacute;ndose en el conjunto de trabajo";
 answers[41] = choices[41][2];
 units[41] = "56";
 comments[41] = "Id Pregunta: 1738. ";


//  Id pregunta: 1750 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  qu&eacute; es JDBC";
 choices[42]= new Array();
 choices[42][0] = "un modelo de objetos ActiveX";
 choices[42][1] = "Una interfaz a nivel de llamadas (CLI) dise&ntilde;ada para programas escritos en C";
 choices[42][2] = "Un controlador de planificaci&oacute;n de procesos en monitores transaccionales (Job Database Control).";
 choices[42][3] = "Una interfaz de programaci&oacute;n de aplicaciones (API) Java para ejecutar sentencias SQL.";
 answers[42] = choices[42][3];
 units[42] = "58";
 comments[42] = "Id Pregunta: 1750. ";


//  Id pregunta: 1752 AÃ±o de creación de pregunta: 2006-01-01
 questions[43]= "44)  Se&ntilde;ala la falsa referente a SQL";
 choices[43]= new Array();
 choices[43][0] = "Las funciones agregadas devuelven un &uacute;nico valor ";
 choices[43][1] = "La cla&uacute;sula HAVING se utiliza para especificar las condiciones que deben reunir los registros nulos a seleccionar";
 choices[43][2] = "SELF JOIN es una t&eacute;cnica empleada para conseguir el producto cartesiano de una tabla consigo misma";
 choices[43][3] = "La cla&uacute;sula CONSTRAINT permite crear o eliminar &iacute;ndices";
 answers[43] = choices[43][1];
 units[43] = "58";
 comments[43] = "Id Pregunta: 1752. NULL";


//  Id pregunta: 1952 AÃ±o de creación de pregunta: 2006-01-01
 questions[44]= "45)  En el entorno de la arquitectura GNOME, seleccione la afirmaci&oacute;n correcta en relaci&oacute;n con DII:";
 choices[44]= new Array();
 choices[44][0] = "Es un lenguaje para implementar interfaces CORBA";
 choices[44][1] = "Es un servicio que ofrece objetos persistentes que representan la informaci&oacute;n IDL de los interfaces disponibles en CORBA";
 choices[44][2] = "Es un protocolo de comunicaciones de CORBA";
 choices[44][3] = "Es una interfaz que nos permite la construcci&oacute;n din&aacute;mica de invocaciones para un determinado objeto";
 answers[44] = choices[44][3];
 units[44] = "54";
 comments[44] = "Id Pregunta: 1952. ";


//  Id pregunta: 2101 AÃ±o de creación de pregunta: 2002-01-01
 questions[45]= "46)  En un sistema transaccional, se liberan los registros intervinientes en una transacci&oacute;n:";
 choices[45]= new Array();
 choices[45][0] = "S&oacute;lo cuando la actualizaci&oacute;n tiene lugar en varias bases de datos.";
 choices[45][1] = "Cuando acaba la rutina que los actualiza.";
 choices[45][2] = "Cuando otra transacci&oacute;n los intenta bloquear para actualizarlos.";
 choices[45][3] = "Cuando la aplicaci&oacute;n indica que la transacci&oacute;n ha terminado.";
 answers[45] = choices[45][3];
 units[45] = "57,58,83";
 comments[45] = "Id Pregunta: 2101. ";


//  Id pregunta: 2646 AÃ±o de creación de pregunta: 2003-01-01
 questions[46]= "47)  En el modelo Entidad/Relaci&oacute;n extendido las relaciones d&eacute;biles:";
 choices[46]= new Array();
 choices[46][0] = "Son las que existen entre entidades d&eacute;biles";
 choices[46][1] = "&Uacute;nicamente las que existen entre una entidad regular y otra entidad d&eacute;bil cuya identificaci&oacute;n depende de la identificaci&oacute;n de la anterior.";
 choices[46][2] = "Son las que existen entre una entidad regular y otra entidad d&eacute;bil, independientemente de que la dependencia sea por identificaci&oacute;n o existencia.";
 choices[46][3] = "Son las que existen entre una entidad regular y otra entidad d&eacute;bil cuya existencia no depende de la existencia de la anterior.";
 answers[46] = choices[46][2];
 units[46] = "58,80";
 comments[46] = "Id Pregunta: 2646. ";


//  Id pregunta: 4388 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  Un conjunto de dispositivos o especificaciones que act&uacute;a como intermediario entre una m&aacute;quina y un ser humano para proporcionarle a este la mejor adaptaci&oacute;n posible ante los mecanismos de entrada y salida de la m&aacute;quina es:";
 choices[47]= new Array();
 choices[47][0] = "Un sistema operativo.";
 choices[47][1] = "Una pasarela o gateway.";
 choices[47][2] = "Una interfaz de usuario.";
 choices[47][3] = "El middleware.";
 answers[47] = choices[47][2];
 units[47] = "55";
 comments[47] = "Id Pregunta: 4388. ";


//  Id pregunta: 4458 AÃ±o de creación de pregunta: 2007-01-01
 questions[48]= "49)  La cl&aacute;usula select en SQL se corresponde a:";
 choices[48]= new Array();
 choices[48][0] = "La operaci&oacute;n de proyecci&oacute;n en el &aacute;lgebra relacional.";
 choices[48][1] = "La operaci&oacute;n de uni&oacute;n en el &aacute;lgebra relacional.";
 choices[48][2] = "La operaci&oacute;n de evaluaci&oacute;n en el &aacute;lgebra relacional.";
 choices[48][3] = "La operaci&oacute;n de agregaci&oacute;n en el &aacute;lgebra relacional.";
 answers[48] = choices[48][0];
 units[48] = "58";
 comments[48] = "Id Pregunta: 4458. ";


//  Id pregunta: 4565 AÃ±o de creación de pregunta: 2007-01-01
 questions[49]= "50)  &iquest;Cual de las siguientes no es una distribuci&oacute;n comercial de Linux?:";
 choices[49]= new Array();
 choices[49][0] = "Debian";
 choices[49][1] = "Red Hat";
 choices[49][2] = "SuSE";
 choices[49][3] = "Caldera";
 answers[49] = choices[49][0];
 units[49] = "53";
 comments[49] = "Id Pregunta: 4565. ";


//  Id pregunta: 4837 AÃ±o de creación de pregunta: 2007-01-01
 questions[50]= "51)  En una situaci&oacute;n donde se ha producido un fallo del sistema que no ha ocasionado da&ntilde;os en la Base de Datos,&iquest;qu&eacute; se utilizar&iacute;a en el proceso de recuperaci&oacute;n?";
 choices[50]= new Array();
 choices[50][0] = "Copias de seguridad y ficheros de punto de sincronismo (checkpoint)";
 choices[50][1] = "Fichero diario (fichero log) para deshacer y rehacer transacciones";
 choices[50][2] = "Rollback de la transacci&oacute;n";
 choices[50][3] = "S&oacute;lo copia de seguridad con p&eacute;rdida de &uacute;ltimas transacciones";
 answers[50] = choices[50][1];
 units[50] = "58";
 comments[50] = "Id Pregunta: 4837. ";


//  Id pregunta: 5032 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  Indicar cu&aacute;l es la afirmaci&oacute;n correcta respecto al modelo de datos relacional:";
 choices[51]= new Array();
 choices[51][0] = "Una clave candidata es el conjunto de atributos cuyos valores han de coincidir con los valores de la claveprimaria de otra relaci&oacute;n";
 choices[51][1] = "Una clave ajena es el conjunto de atributos que determinan un&iacute;voca y m&iacute;nimamente cada tupla";
 choices[51][2] = "En una relaci&oacute;n no pueden existir varias claves candidatas";
 choices[51][3] = "Para las claves ajenas, la regla de integridad referencial establece que los valores de la clave ajena puedenser nulos";
 answers[51] = choices[51][3];
 units[51] = "58";
 comments[51] = "Id Pregunta: 5032. Examen TIC A 2007";


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


//  Id pregunta: 5490 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  Qu&eacute; le ocurre a una transacci&oacute;n si recupera todos los datos que satisfacen una condici&oacute;n y despu&eacute;s otra transacci&oacute;n incorpora nuevos datos que satisfacen dicha condici&oacute;n, cuando repite la lectura inicial";
 choices[53]= new Array();
 choices[53][0] = "Nada";
 choices[53][1] = "Una lectura sucia";
 choices[53][2] = "Una lectura fantasma";
 choices[53][3] = "Una escritura sucia";
 answers[53] = choices[53][2];
 units[53] = "58";
 comments[53] = "Id Pregunta: 5490. ";


//  Id pregunta: 5673 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  Indique la respuesta correcta en las siguientes afirmaciones respecto al Directorio Activo:";
 choices[54]= new Array();
 choices[54][0] = "Cuando un dominio se une a un &aacute;rbol dedominio se establece autom&aacute;ticamente una relaci&oacute;n de confianza transitiva unidireccional entre el dominio y su primario del &aacute;rbol";
 choices[54][1] = "Cuando un dominio se une a un &aacute;rbol dedominio no se establece autom&aacute;ticamente una relaci&oacute;n de confianza transitivabidireccional entre el dominio y su primario del &aacute;rbol";
 choices[54][2] = "El sistema de replicaci&oacute;n de Active Directory utiliza n&uacute;meros de secuencia de actualizaciones";
 choices[54][3] = "Para la propagaci&oacute;n de actualizaciones de Active Directory, Windows Server 2003proporciona sincronizaci&oacute;n temporal distribuida.";
 answers[54] = choices[54][2];
 units[54] = "56";
 comments[54] = "Id Pregunta: 5673. ";


//  Id pregunta: 5726 AÃ±o de creación de pregunta: 2009-01-01
 questions[55]= "56)  Indique la afirmaci&oacute;n correcta. Seg&uacute;n M&eacute;trica v 3, en las Relaciones 1:N se propaga el identificador de la entidad de cardinalidad m&aacute;xima 1 a la que es N, teniendo en cuenta que:";
 choices[55]= new Array();
 choices[55][0] = "Si la relaci&oacute;n es de asociaci&oacute;n, la clave propagada es clave ajena en la tabla a la que se ha propagado.";
 choices[55][1] = "Si la relaci&oacute;n es de asociaci&oacute;n, la clave propagada es la clave primaria en la tabla a la que se ha propagado.";
 choices[55][2] = "Si la relaci&oacute;n es de dependencia, la clave propagada es la clave ajena.";
 choices[55][3] = "Si la relaci&oacute;n es de dependencia la clave propagada es la clave primaria.";
 answers[55] = choices[55][0];
 units[55] = "58";
 comments[55] = "Id Pregunta: 5726. MAP 2008 A2";


//  Id pregunta: 6116 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  En un sistema de base de datos relacional, la regla de integridad de las entidades consiste en que:";
 choices[56]= new Array();
 choices[56][0] = "Una relaci&oacute;n debe tener al menos una clave primaria.";
 choices[56][1] = "Ning&uacute;n componente de la clave primaria de una relaci&oacute;n puede aceptar nulos.";
 choices[56][2] = "La clave primaria de una relaci&oacute;n es la &uacute;nica forma de identificar un&iacute;vocamente a una tupla.";
 choices[56][3] = "Si existen varias claves candidatas, la clave primaria es la que tiene menos campos.";
 answers[56] = choices[56][1];
 units[56] = "58";
 comments[56] = "Id Pregunta: 6116. TIC A 2009";


//  Id pregunta: 6511 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  El comando para cambiar el password de un usuario en UNIX es:";
 choices[57]= new Array();
 choices[57][0] = "passwd";
 choices[57][1] = "pass";
 choices[57][2] = "password";
 choices[57][3] = "chpass";
 answers[57] = choices[57][0];
 units[57] = "54";
 comments[57] = "Id Pregunta: 6511. ";


//  Id pregunta: 7161 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  Se&ntilde;ale cu&aacute;l de las siguientes distribuciones no se basa en Debian:";
 choices[58]= new Array();
 choices[58][0] = "Ubuntu";
 choices[58][1] = "Knoppix";
 choices[58][2] = "Fedora";
 choices[58][3] = "Guadalinex";
 answers[58] = choices[58][2];
 units[58] = "53";
 comments[58] = "Id Pregunta: 7161. Examen TIC B 2009";


//  Id pregunta: 7162 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  La copia de seguridad incremental en Linux:";
 choices[59]= new Array();
 choices[59][0] = "Consiste en copiar todos los elementos que han sido modificados desde la &uacute;ltima copia de seguridad completa o incremental";
 choices[59][1] = "Se centra espec&iacute;ficamente en las carpetas y archivos que han sido modificados desde la &uacute;ltima copia de seguridad completa";
 choices[59][2] = "Consiste en crear una copia de seguridad de todas las carpetas y archivos que se deseen copiar";
 choices[59][3] = "Es implementada habitualmente mediante el comando ntbackup";
 answers[59] = choices[59][0];
 units[59] = "53";
 comments[59] = "Id Pregunta: 7162. Examen TIC B 2009";


//  Id pregunta: 7281 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  Los dos enfoques m&aacute;s habituales de la virtuailzaci&oacute;n de servidores o estaciones de trabajo son:";
 choices[60]= new Array();
 choices[60][0] = "Hospedada y mediante hipervisor (bare metal)";
 choices[60][1] = "Acoplada y mediante hipervisor (bare metal)";
 choices[60][2] = "Paralela y mediante hipervisor (bare metal)";
 choices[60][3] = "Acoplada y mediante CPM (Cross Platform Manager)";
 answers[60] = choices[60][0];
 units[60] = "119";
 comments[60] = "Id Pregunta: 7281. Examen TIC B 2009";


//  Id pregunta: 8371 AÃ±o de creación de pregunta: 2011-01-01
 questions[61]= "62)  Una de las funciones primordiales del Sistema Operativo es:";
 choices[61]= new Array();
 choices[61][0] = "Gestionar la comunicaci&oacute;n con los servidores de correo.";
 choices[61][1] = "Proporcionar las herramientas ofim&aacute;ticas b&aacute;sicas.";
 choices[61][2] = "Facilitar, al menos, un navegador.";
 choices[61][3] = "Crear la interfaz del hardware con el usuario.";
 answers[61] = choices[61][3];
 units[61] = "52";
 comments[61] = "Id Pregunta: 8371. Examen TIC A2 2010";


//  Id pregunta: 8409 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  Si en un sistema UNIX, se quiere que el archivo test.txt pueda ser le&iacute;do, modificado (escrito) y ejecutado por su propietario, le&iacute;do y ejecutado por los usuarios que pertenecen al mismo grupo que el propietario, y tan s&oacute;lo le&iacute;do por el resto, &iquest;qu&eacute; instrucci&oacute;n de las siguientes se debe ejecutar?";
 choices[62]= new Array();
 choices[62][0] = "chmod 652 test.txt ";
 choices[62][1] = "chmod 754 test.txt ";
 choices[62][2] = "chmod 654 test.txt ";
 choices[62][3] = "chmod 752 test.txt ";
 answers[62] = choices[62][1];
 units[62] = "53, 54";
 comments[62] = "Id Pregunta: 8409. Examen TIC A2 2010";


//  Id pregunta: 8416 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  Se dice que un SGBD cumple el ACID test si observa las propiedades de: ";
 choices[63]= new Array();
 choices[63][0] = "(A)tomicidad, (C)onsistencia, (I)ntegridad y (D)urabilidad";
 choices[63][1] = "(A)tomicidad, (C)onfidencialidad, (I)ntegridad y (D)urabilidad";
 choices[63][2] = "(A)tomicidad, (C)onfidencialidad, a(I)slamiento y (D)urabilidad";
 choices[63][3] = "(A)tomicidad, (C)onsistencia, a(I)slamiento y (D)urabilidad";
 answers[63] = choices[63][3];
 units[63] = "57";
 comments[63] = "Id Pregunta: 8416. Examen TIC A2 2010";


//  Id pregunta: 8470 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  La regla 2 de Codd es la del:";
 choices[64]= new Array();
 choices[64][0] = "Tratamiento sistem&aacute;tico de valores nulos";
 choices[64][1] = "Acceso garantizado";
 choices[64][2] = "Actualizaci&oacute;n de vistas";
 choices[64][3] = "Integridad referencial";
 answers[64] = choices[64][1];
 units[64] = "57,58";
 comments[64] = "Id Pregunta: 8470. Analista Ayto. Madrid 2010";


//  Id pregunta: 8549 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  En el contexto de la virtualizaci&oacute;n, &iquest;qu&eacute; es el hypervisor?";
 choices[65]= new Array();
 choices[65][0] = "Un m&oacute;dulo en el sistema operativo hu&eacute;sped que monitoriza el uso de recursosdel mismo.";
 choices[65][1] = "La extensi&oacute;n del gestor de procesos del sistema operativo anfitri&oacute;n que permitecompartir memoria a los procesos de distintos sistemas operativos hu&eacute;spedes.";
 choices[65][2] = "Es la plataforma que permite ejecutar concurrentemente varios sistemasoperativos en una m&aacute;quina.";
 choices[65][3] = "Un m&oacute;dulo en el sistema operativo anfitri&oacute;n que monitoriza el uso de recursosdel mismo.";
 answers[65] = choices[65][2];
 units[65] = "119";
 comments[65] = "Id Pregunta: 8549. Analista Ayto. Madrid 2010";


//  Id pregunta: 8611 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  Si sobre el fichero &quot;ejemplo.txt&quot; queremos dar permisos totales al due&ntilde;o, de lectura y ejecuci&oacute;n al grupo y s&oacute;lo de lectura al resto de usuarios, usaremos la instrucci&oacute;n:";
 choices[66]= new Array();
 choices[66][0] = "chmod 766 ejemplo.txt";
 choices[66][1] = "chmod 751 ejemplo.txt";
 choices[66][2] = "chmod 761 ejemplo.txt";
 choices[66][3] = "chmod 754 ejemplo.txt";
 answers[66] = choices[66][3];
 units[66] = "53,54";
 comments[66] = "Id Pregunta: 8611. Examen TIC A2 2010 interna";


//  Id pregunta: 8618 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  Con el objeto de asegurar la integridad de los datos, es necesario que una de las funciones del sistema gestor de base de datos sea la gesti&oacute;n de las transacciones. &iquest;Qu&eacute; propiedades deben tener &eacute;stas?";
 choices[67]= new Array();
 choices[67][0] = "Autenticaci&oacute;n, confidencialidad, integridad y disponibilidad.";
 choices[67][1] = "Eficiencia, eficacia, rapidez y estabilidad.";
 choices[67][2] = "Atomicidad, consistencia, aislamiento y persistencia.";
 choices[67][3] = "Serializaci&oacute;n, indexaci&oacute;n, independencia y transparencia.";
 answers[67] = choices[67][2];
 units[67] = "57,58";
 comments[67] = "Id Pregunta: 8618. Examen TIC A2 2010 interna";


//  Id pregunta: 8629 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre el modelo entidad/relaci&oacute;n es correcta?";
 choices[68]= new Array();
 choices[68][0] = "En la especializaci&oacute;n un supertipo so descompone en uno o varios subtipos, los cuales heredan todos los atributos y relaciones del supertipo.";
 choices[68][1] = "La generalizaci&oacute;n consiste en relacionar dos tipos de entidades que normalmente son de dominios independientes, pero coyunturalmente se asocian.";
 choices[68][2] = "La agregaci&oacute;n permite abstraer un tipo de entidad de nivel superior (supertipo) a partir de varios tipos de entidad (subtipos).";
 choices[68][3] = "La asociaci&oacute;n consiste en construir un nuevo tipo de entidad como composici&oacute;n de otros.";
 answers[68] = choices[68][0];
 units[68] = "57, 58";
 comments[68] = "Id Pregunta: 8629. Examen TIC A2 2010 interna";


//  Id pregunta: 8637 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  Una relaci&oacute;n muchos a muchos traducida desde un esquema entidad/relaci&oacute;n a un esquema relacional:";
 choices[69]= new Array();
 choices[69][0] = "No tiene claves.";
 choices[69][1] = "Impl&iacute;citamente, contiene una agrupaci&oacute;n de las claves primarias de las entidades relacionadas.";
 choices[69][2] = "No puedo admitir atributos que no pertenezcan a una de las entidades asociadas.";
 choices[69][3] = "Conserva la clave de la entidad fuerte.";
 answers[69] = choices[69][1];
 units[69] = "57, 58";
 comments[69] = "Id Pregunta: 8637. Examen TIC A2 2010 interna";


//  Id pregunta: 8679 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  El permiso de Unix 500 pemiite:";
 choices[70]= new Array();
 choices[70][0] = "Lectura y escritura para el propietario del archivo";
 choices[70][1] = "Lectura y ejecuci&oacute;n para el propietario del archivo";
 choices[70][2] = "Lectura y escritura para todos los usuarios";
 choices[70][3] = "Lectura y ejecuci&oacute;n para todos los usuarios del mismo grupo que lo ha creado";
 answers[70] = choices[70][1];
 units[70] = "53";
 comments[70] = "Id Pregunta: 8679. Examen UPM A2 2011";


//  Id pregunta: 8760 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  Una se&ntilde;al en UNIX es un mecanismo de comunicaci&oacute;n:";
 choices[71]= new Array();
 choices[71][0] = "Bidireccional";
 choices[71][1] = "S&iacute;ncrono.";
 choices[71][2] = "Entre procesos.";
 choices[71][3] = "En el fichero de cabecera &lt;stdio.h&gt; est&aacute;n definidas todas las se&ntilde;ales, n&uacute;mero y nombre.";
 answers[71] = choices[71][2];
 units[71] = "53, 54";
 comments[71] = "Id Pregunta: 8760. Examen TIC A2 2010 interna";


//  Id pregunta: 8775 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  &iquest;Cu&aacute;l de los siguientes comandos se utilizan para crear un cd boot de una instalaci&oacute;n de Linux?";
 choices[72]= new Array();
 choices[72][0] = "mkboot disk.";
 choices[72][1] = "bootfp disk.";
 choices[72][2] = "ww and rawrite.";
 choices[72][3] = "dd and rawrite.";
 answers[72] = choices[72][3];
 units[72] = "53";
 comments[72] = "Id Pregunta: 8775. Examen UPM A2 2011";


//  Id pregunta: 8792 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  El listado que resulta de ejecutar en un sistema GNU/Linux el comando &quot;cat /etc/passwd | cut -d: -f3,7&quot; contendr&aacute; los campos:";
 choices[73]= new Array();
 choices[73][0] = "Nombre de usuario y shell";
 choices[73][1] = "Contrase&ntilde;a de usuario y home";
 choices[73][2] = "uid y shell";
 choices[73][3] = "gid y home";
 answers[73] = choices[73][2];
 units[73] = "53, 54";
 comments[73] = "Id Pregunta: 8792. Examen UPM A2 2011";


//  Id pregunta: 8795 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  &iquest;Qu&eacute; comando de unix no tiene que ver con el control de trabajos de ejecuci&oacute;n?";
 choices[74]= new Array();
 choices[74][0] = "jobs";
 choices[74][1] = "fg";
 choices[74][2] = "pg";
 choices[74][3] = "bg";
 answers[74] = choices[74][2];
 units[74] = "53, 54";
 comments[74] = "Id Pregunta: 8795. Examen UPM A2 2011";


//  Id pregunta: 8907 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  &iquest;Qu&eacute; relaci&oacute;n existe entre fichero, registro y campo?:";
 choices[75]= new Array();
 choices[75][0] = "El fichero esta formado por varios campos y a cada conjunto de campos con un significado relevante se le conoce como registro.";
 choices[75][1] = "Los registros est&aacute;n compuestos por campos, pero no tienen ninguna relaci&oacute;n con un fichero.";
 choices[75][2] = "Los ficheros contienen registros y los registros est&aacute;n formados por una serie de campos cada uno de los cuales contiene un tipo de informaci&oacute;n sobre dicho registro.";
 choices[75][3] = "Ninguna de las anteriores es correcta";
 answers[75] = choices[75][2];
 units[75] = "52";
 comments[75] = "Id Pregunta: 8907. Operador Ayto. Madrid 2010";


//  Id pregunta: 8979 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  &iquest;Cu&aacute;l de las siguientes no es una tecnolog&iacute;a de virtualizaci&oacute;n?";
 choices[76]= new Array();
 choices[76][0] = "XEN";
 choices[76][1] = "KVM";
 choices[76][2] = "UML";
 choices[76][3] = "Todas lo son";
 answers[76] = choices[76][3];
 units[76] = "119";
 comments[76] = "Id Pregunta: 8979. ";


//  Id pregunta: 9230 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  Desde el punto de vista interno el sistema operativo puede concebirse como:";
 choices[77]= new Array();
 choices[77][0] = "un interfaz entre los programas de aplicaci&oacute;n y la m&aacute;quina pura.";
 choices[77][1] = "gestor de recursos.";
 choices[77][2] = "coordinador del funcionamiento de los recursos de c&oacute;mputo y de entrada y salida.";
 choices[77][3] = "B) y C) son correctas.";
 answers[77] = choices[77][3];
 units[77] = "52";
 comments[77] = "Id Pregunta: 9230. ";


//  Id pregunta: 9231 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  &iquest;Qu&eacute; es la barra y la l&iacute;nea en tecnolog&iacute;a mainframe de IBM?";
 choices[78]= new Array();
 choices[78][0] = "Espacio de direccionamiento que alcanza los 64 MB y los 2 GB respectivamente.";
 choices[78][1] = "Espacio de direccionamiento que alcanza los 2 GB y los 64 MB respectivamente";
 choices[78][2] = "Espacio de direccionamiento que alcanza los 2 GB y los 16 MB respectivamente.";
 choices[78][3] = "Ninguna es correcta.";
 answers[78] = choices[78][2];
 units[78] = "52,55";
 comments[78] = "Id Pregunta: 9231. ";


//  Id pregunta: 9238 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  &iquest;Qu&eacute; caracter&iacute;sticas tiene shorewall?";
 choices[79]= new Array();
 choices[79][0] = "Es una herramienta de configuraci&oacute;n de gateway/firewall para GNU/Linux";
 choices[79][1] = "Se publicita como &ldquo;iptables f&aacute;cil&rdquo;";
 choices[79][2] = "Si se quiere configurar el firewall para Ipv6 se debe instalar shorewall6.";
 choices[79][3] = "Todas las anteriores son correctas.";
 answers[79] = choices[79][3];
 units[79] = "53";
 comments[79] = "Id Pregunta: 9238. ";


//  Id pregunta: 9242 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  &iquest;Qu&eacute; caracter&iacute;sticas tiene ubuntu tv?";
 choices[80]= new Array();
 choices[80][0] = "No existe.";
 choices[80][1] = "Usa una interfaz que es una modificaci&oacute;n del entorno de escritorio Unity.";
 choices[80][2] = "Va instalado de serie en la mayor&iacute;a de los tv comerciales.";
 choices[80][3] = "Ninguna es correcta.";
 answers[80] = choices[80][1];
 units[80] = "54";
 comments[80] = "Id Pregunta: 9242. ";


//  Id pregunta: 9247 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  &iquest;Qu&eacute; interfaces admit&iacute;a NT?";
 choices[81]= new Array();
 choices[81][0] = "OS/2";
 choices[81][1] = "POSIX";
 choices[81][2] = "OS/2, POSIX y Win32.";
 choices[81][3] = "Aunque admit&iacute;a OS/2, todav&iacute;a se sigue utilizando en Windows XP.";
 answers[81] = choices[81][2];
 units[81] = "56";
 comments[81] = "Id Pregunta: 9247. ";


//  Id pregunta: 9606 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)   En el Modelo de Referencia ANSI  de las Facilidades de usuario (MRFU), las FU se encargan de:";
 choices[82]= new Array();
 choices[82][0] = " Aislar al usuario de detalles concretos sobre las herramientas de gesti&oacute;n de datos (HGD)";
 choices[82][1] = " Transformar una demanda de usuario en una petici&oacute;n funcional para las HGD";
 choices[82][2] = "Trasformar la salida de las HGD en un formato de presentaci&oacute;n para el usuario";
 choices[82][3] = "Todas las anteriores";
 answers[82] = choices[82][3];
 units[82] = "57";
 comments[82] = "Id Pregunta: 9606. ";


//  Id pregunta: 9607 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  &iquest;C&uacute;al de las siguientes caracter&iacute;sticas es propia de los sistemas de base de datos NoSQL?";
 choices[83]= new Array();
 choices[83][0] = "Soportan operaciones JOIN";
 choices[83][1] = " Garantizan completamente ACID";
 choices[83][2] = "Requieren estructuras fijas, como tablas";
 choices[83][3] = "Escalan bien horizontalmente";
 answers[83] = choices[83][3];
 units[83] = "58";
 comments[83] = "Id Pregunta: 9607. ";


//  Id pregunta: 9631 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  &iquest;Cu&aacute;l de los siguientes NO es un gestor de ventanas de Linux?";
 choices[84]= new Array();
 choices[84][0] = "Metacity de GNOME ";
 choices[84][1] = "KWIN de KDE";
 choices[84][2] = "GTK de CDE";
 choices[84][3] = "Enlightenment de GNOME";
 answers[84] = choices[84][2];
 units[84] = "54";
 comments[84] = "Id Pregunta: 9631. Examen TIC A2 2013";


//  Id pregunta: 9655 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  El sistema operativo OS X de Apple se llama:";
 choices[85]= new Array();
 choices[85][0] = "Maverick";
 choices[85][1] = "Mavericks";
 choices[85][2] = "Cocoa";
 choices[85][3] = "Kit Kat";
 answers[85] = choices[85][1];
 units[85] = "56";
 comments[85] = "Id Pregunta: 9655. Maverick es el framework de java para desarrollo web";


//  Id pregunta: 9772 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Indique cu&aacute;l de los siguientes sistemas de archivos se corresponde con el nuevo desarrollado por Microsoft y que fue presentado junto a Windows Server 2012:";
 choices[86]= new Array();
 choices[86][0] = "ReFS";
 choices[86][1] = "NTFS ";
 choices[86][2] = "HPFS";
 choices[86][3] = "CSFS ";
 answers[86] = choices[86][0];
 units[86] = "56";
 comments[86] = "Id Pregunta: 9772. Examen TIC A2 2013";


//  Id pregunta: 9779 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  CODASYL, modelo de Sistemas Gestores de Bases de datos en red, es acr&oacute;nimo de:";
 choices[87]= new Array();
 choices[87][0] = "Conference on Data Systems Languages. ";
 choices[87][1] = "Concurrent Database Systems Languages. ";
 choices[87][2] = "Coherent Data Symmetric Location. ";
 choices[87][3] = "CODe And Systematic Language. ";
 answers[87] = choices[87][0];
 units[87] = "57";
 comments[87] = "Id Pregunta: 9779. Examen TIC A2 2013";


//  Id pregunta: 9922 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  Sean dos transacciones (T1 y T2), T1 con estampa de tiempo igual a 8 y T2 con estampa de tiempo igual a 10 (T1 es m&aacute;s antiguo que T2). Suponiendo que T2 tiene un bloqueo en un elemento y T1 pide bloqueo para ese mismo elemento, si aplicamos el enfoque WOUND-WAIT para resoluci&oacute;n del conflicto:";
 choices[88]= new Array();
 choices[88][0] = "T1 esperar&aacute; hasta que T2 se completa y libera su bloqueo.";
 choices[88][1] = "T1 se apropia del elemento que ten&iacute;a bloqueo T2. T2 se aborta y se reinicia usando la misma estampa de tiempo.";
 choices[88][2] = "T1 se reinicia con la misma estampa de tiempo y T2 se reprograma usando la misma estampa de tiempo.";
 choices[88][3] = "T1 se apropia del elemento que ten&iacute;a bloqueo T2. T2 se reinicia usando distinta estampa de tiempo.";
 answers[88] = choices[88][1];
 units[88] = "57";
 comments[88] = "Id Pregunta: 9922. TIC A2, Examen 2013";


//  Id pregunta: 10015 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  En relaci&oacute;n con la concurrencia en bases de datos, el tama&ntilde;o del elemento de datos adecuado para el bloqueo (granularidad) afecta al grado de concurrencia de forma que, a menor tama&ntilde;o del elemento que es bloqueado:";
 choices[89]= new Array();
 choices[89][0] = "Aumenta el grado de concurrencia, aumenta la carga de trabajo para la gesti&oacute;n de bloqueos y el espacio ocupado por la informaci&oacute;n de bloqueos.";
 choices[89][1] = "Disminuye el grado de concurrencia, aumenta la carga de trabajo para la gesti&oacute;n de bloqueos y el espacio ocupado por la informaci&oacute;n de bloqueos.";
 choices[89][2] = "Disminuye el grado de concurrencia, disminuyendo la carga de trabajo para la gesti&oacute;n de bloqueos y el espacio ocupado por la informaci&oacute;n de bloqueos.";
 choices[89][3] = "Aumenta el grado de concurrencia, disminuyendo la carga de trabajo para la gesti&oacute;n de bloqueos y el espacio ocupado por la informaci&oacute;n de bloqueos.";
 answers[89] = choices[89][0];
 units[89] = "58";
 comments[89] = "Id Pregunta: 10015. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10306 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  &iquest;Cu&aacute;l de estas instrucciones NO vac&iacute;a el contenido del fichero con nombre 2013 en Linux?";
 choices[90]= new Array();
 choices[90][0] = "true &gt; 2013";
 choices[90][1] = "&gt; 2013";
 choices[90][2] = "cat /dev/null &gt; 2013";
 choices[90][3] = "| &gt; 2013";
 answers[90] = choices[90][3];
 units[90] = "53";
 comments[90] = "Id Pregunta: 10306. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10615 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Marque la herramienta que no es una soluci&oacute;n ORM (Object-Relational Mapping):";
 choices[91]= new Array();
 choices[91][0] = "IBATIS";
 choices[91][1] = "Hibernate";
 choices[91][2] = "CODD";
 choices[91][3] = "Todas lo son.";
 answers[91] = choices[91][2];
 units[91] = "58";
 comments[91] = "Id Pregunta: 10615. ";


//  Id pregunta: 10792 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Para qu&eacute; se utiliza el servicio SMB de Windows?";
 choices[92]= new Array();
 choices[92][0] = "Para configurar un proxy-inverso en la salida a Internet.";
 choices[92][1] = "Para realizar backups remotos y cronificados.";
 choices[92][2] = "Para compartir archivos e impresoras.";
 choices[92][3] = "Para configurar redes wifi.";
 answers[92] = choices[92][2];
 units[92] = "56";
 comments[92] = "Id Pregunta: 10792. Examen GSI 2014";


//  Id pregunta: 10826 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Se&ntilde;ale en qu&eacute; nivel de aislamiento, definido en ANSI/ISO SQL, puede ocurrir el problema de lecturas sucias en un sistema gestor de bases de datos relacional (SGDBR):";
 choices[93]= new Array();
 choices[93][0] = "Serializable.";
 choices[93][1] = "Repeatable Read (lecturas repetibles).";
 choices[93][2] = "Read Committed (lecturas comprometidas).";
 choices[93][3] = "Read Uncommitted (lecturas no comprometidas).";
 answers[93] = choices[93][3];
 units[93] = "57, 58";
 comments[93] = "Id Pregunta: 10826. Examen GSI 2014";


//  Id pregunta: 10868 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  En un sistema operativo (S.O) con memoria virtual, cuando un proceso en ejecuci&oacute;n genera un fallo de p&aacute;gina:";
 choices[94]= new Array();
 choices[94][0] = "Se cierran todos los procesos en ejecuci&oacute;n ya que es un error grave del sistema operativo.";
 choices[94][1] = "El S.O busca la p&aacute;gina en memoria secundaria y la carga en memoria principal.";
 choices[94][2] = "El S.O interrumpe la ejecuci&oacute;n del proceso y lo pone en la cola de errores.";
 choices[94][3] = "En un sistema con memoria virtual nunca hay fallos de p&aacute;gina.";
 answers[94] = choices[94][1];
 units[94] = "52";
 comments[94] = "Id Pregunta: 10868. Examen GSI 2014";


//  Id pregunta: 10869 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  En Linux, guardamos en un fichero llamado log.txt todas las incidencias de una m&aacute;quina con la siguiente estructura fecha#descIncidencia, &iquest;qu&eacute; comando deber&iacute;amos usar para contar el n&uacute;mero de filas que tienen la palabra &quot;error&quot;?";
 choices[95]= new Array();
 choices[95][0] = "grep error log.txt | wc &ndash;l";
 choices[95][1] = "grep wc &ndash;l |error log.txt";
 choices[95][2] = "grep error log.txt | ls -l |cut -r&quot;#&quot; -f2";
 choices[95][3] = "grep cut -r&quot;#&quot; -f2|ls -l | error log.txt";
 answers[95] = choices[95][0];
 units[95] = "53, 54";
 comments[95] = "Id Pregunta: 10869. Examen GSI 2014";


//  Id pregunta: 10871 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Se&ntilde;ale entre las siguientes herramientas el gestor de copia de seguridad en l&iacute;nea utilizado por productos de base de datos Oracle:";
 choices[96]= new Array();
 choices[96][0] = "RFID";
 choices[96][1] = "RSYNC";
 choices[96][2] = "RMAN";
 choices[96][3] = "RMON";
 answers[96] = choices[96][2];
 units[96] = "57";
 comments[96] = "Id Pregunta: 10871. Examen GSI 2014";


//  Id pregunta: 10872 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Qu&eacute; es Navicat Premium en el entorno de administraci&oacute;n de bases de datos?";
 choices[97]= new Array();
 choices[97][0] = "Es un conjunto de herramientas multiplataforma de software libre creado para ayudar a los administradores y desarrolladores de aplicaciones de bases de datos Oracle. Tambi&eacute;n suministra soporte para MySQL y PostgreSQL.";
 choices[97][1] = "Es una herramienta de IBM que permite realizar administraci&oacute;n remota de bases de datos.";
 choices[97][2] = "Es una base de datos NoSQL distribuida y basada en un modelo de almacenamiento de clave-valor, escrita en Java.";
 choices[97][3] = "Es un administrador de bases de datos propietario, de m&uacute;ltiples conexiones, que permite conectarse a diversas bases de datos como MySQL, MariaDB, SQL Server, etc. Simult&aacute;neamente en una sola aplicaci&oacute;n.";
 answers[97] = choices[97][3];
 units[97] = "57";
 comments[97] = "Id Pregunta: 10872. Examen GSI 2014";


//  Id pregunta: 10977 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  En referencia al software &ldquo;Windows Mobile Device Center&rdquo;, se&ntilde;ale la respuesta correcta:";
 choices[98]= new Array();
 choices[98][0] = "Es un software de sincronizaci&oacute;n precursor del ActiveSync.";
 choices[98][1] = "Ofrece un controlador de base incorporado a la interfaz de dispositivos en el explorador de Windows.";
 choices[98][2] = "Permite que un dispositivo m&oacute;vil se sincronice con un pc o un servidor que ejecute Microsoft Exchange Server.";
 choices[98][3] = "Es un programa de sincronizaci&oacute;n desarrollado para su uso con sistemas operativos Linux.";
 answers[98] = choices[98][2];
 units[98] = "56";
 comments[98] = "Id Pregunta: 10977. TIC A1 AGE 2014";


//  Id pregunta: 11137 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Cu&aacute;l de los siguientes es un operador derivado de algebra relacional?";
 choices[99]= new Array();
 choices[99][0] = "Intersecci&oacute;n";
 choices[99][1] = "Uni&oacute;n";
 choices[99][2] = "Proyecci&oacute;n";
 choices[99][3] = "Selecci&oacute;n";
 answers[99] = choices[99][0];
 units[99] = "58";
 comments[99] = "Id Pregunta: 11137. ";


