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

//  Id pregunta: 691 AÃ±o de creación de pregunta: 2009-01-01
 questions[0]= "1)  De acuerdo con la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, se deber&aacute;n retener los datos de conexi&oacute;n y tr&aacute;fico por un periodo m&aacute;ximo de: ";
 choices[0]= new Array();
 choices[0][0] = "3 meses";
 choices[0][1] = "6 meses";
 choices[0][2] = "12 meses";
 choices[0][3] = "2 a&ntilde;os";
 answers[0] = choices[0][3];
 units[0] = "30";
 comments[0] = "Id Pregunta: 691. reglamentariamente se podr&aacute; reducir a seis meses o ampliar a dos a&ntilde;os, como permite la Directiva 2006/24/CE";


//  Id pregunta: 733 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  El Administrador de una base de datos no tiene las siguientes responsabilidades:";
 choices[1]= new Array();
 choices[1][0] = "Optimizaci&oacute;n de las redundancias del espacio de almacenamiento";
 choices[1][1] = "Garantizar la seguridad f&iacute;sica de los datos ante fallos en el sistema, por ejemplo ca&iacute;das de tensi&oacute;n";
 choices[1][2] = "Participar en el dise&ntilde;o f&iacute;sico de los datos, definiendo la estructura f&iacute;sica de los &eacute;stos a partir del modelo de datos o de clases";
 choices[1][3] = "Determinar la interfaz de conexi&oacute;n con otros sistemas ya existentes";
 answers[1] = choices[1][3];
 units[1] = "57";
 comments[1] = "Id Pregunta: 733. Examen TIC MAP B 2004";


//  Id pregunta: 738 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  El Servicio de Notificaciones Telem&aacute;ticas Seguras, que se basa en la Direcci&oacute;n Electr&oacute;nica &Uacute;nica (actualmente llamada Direcci&oacute;n Electr&oacute;nica Habilitada (DEH)), es un servicio ofrecido por la Administraci&oacute;n del Estado prestado en colaboraci&oacute;n con:";
 choices[2]= new Array();
 choices[2][0] = "Telef&oacute;nica de Espa&ntilde;a, S.A.";
 choices[2][1] = "La entidad p&uacute;blica empresarial Red.es";
 choices[2][2] = "Sociedad Estatal de Correos y Tel&eacute;grafos";
 choices[2][3] = "Microsoft";
 answers[2] = choices[2][2];
 units[2] = "30";
 comments[2] = "Id Pregunta: 738. Examen TIC MAP B 2004";


//  Id pregunta: 783 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  &iquest;Cu&aacute;l de los siguientes algoritmos criptogr&aacute;ficos es de tipo asim&eacute;trico?";
 choices[3]= new Array();
 choices[3][0] = "Triple DES (TDES)";
 choices[3][1] = "Rinjdael (AES)";
 choices[3][2] = "Diffie-Hellman";
 choices[3][3] = "IDEA (International Data Encription Algorithm)";
 answers[3] = choices[3][2];
 units[3] = "72";
 comments[3] = "Id Pregunta: 783. SS-A 2004";


//  Id pregunta: 786 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  Se&ntilde;ale las caracter&iacute;sticas que m&aacute;s se ajustan al est&aacute;ndar IEEE 1394 (Firewire):";
 choices[4]= new Array();
 choices[4][0] = "Hasta 62 dispositivos, 25Mbytes/s";
 choices[4][1] = "Hasta 172 dispositivos, 1.5Mbytes/s";
 choices[4][2] = "Hasta 256 dispositivos, 17Mbytes/s";
 choices[4][3] = "Hasta 1024 dispositivos, 5Mbytes/s";
 answers[4] = choices[4][0];
 units[4] = "47";
 comments[4] = "Id Pregunta: 786. SS-A 2004";


//  Id pregunta: 859 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  &iquest;Cu&aacute;l de los siguientes conceptos no es caracter&iacute;stico de los sistemas expertos?:";
 choices[5]= new Array();
 choices[5][0] = "Base de conocimiento";
 choices[5][1] = "Encadenamiento de reglas";
 choices[5][2] = "Motor de inferencia";
 choices[5][3] = "Proceso algor&iacute;tmico";
 answers[5] = choices[5][3];
 units[5] = "64";
 comments[5] = "Id Pregunta: 859. ";


//  Id pregunta: 871 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Cu&aacute;l de los siguientes principios no forman parte de los doce que Codd estableci&oacute; en 1985 para que una base de datos pueda considerarse relacional si se satisfacen al menos seis de ellos?:";
 choices[6]= new Array();
 choices[6][0] = "Regla de la no subversi&oacute;n";
 choices[6][1] = "Independencia l&oacute;gica de los datos";
 choices[6][2] = "Actualizaci&oacute;n de vistas";
 choices[6][3] = "Consistencia de los datos";
 answers[6] = choices[6][3];
 units[6] = "58";
 comments[6] = "Id Pregunta: 871. ";


//  Id pregunta: 882 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l es el sistema operativo propio de un IBM AS/400?:";
 choices[7]= new Array();
 choices[7][0] = "OS/400";
 choices[7][1] = "Unix";
 choices[7][2] = "AIX";
 choices[7][3] = "MVS";
 answers[7] = choices[7][0];
 units[7] = "49";
 comments[7] = "Id Pregunta: 882. ";


//  Id pregunta: 954 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Comparando los conceptos de Groupware y CSCW (Computer Supported Cooperative Work):";
 choices[8]= new Array();
 choices[8][0] = "Groupware se refiere m&aacute;s a aspectos sociol&oacute;gicos y psicol&oacute;gicos";
 choices[8][1] = "CSCW aborda la tem&aacute;tica desde una perspectiva mucho m&aacute;s concreta y espec&iacute;fica";
 choices[8][2] = "Groupware se centra en las connotaciones tecnol&oacute;gicas, en aplicaciones concretas y en actividades grupales";
 choices[8][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[8] = choices[8][2];
 units[8] = "71";
 comments[8] = "Id Pregunta: 954. ";


//  Id pregunta: 984 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  Dentro de las arquitecturas que podemos encontrar en el mundo del ordenador personal, en la denominada ISA (Industry Standard Architecture ) su bus de datos trabaja con:";
 choices[9]= new Array();
 choices[9][0] = "32 bits";
 choices[9][1] = "8 bits";
 choices[9][2] = "16 bits";
 choices[9][3] = "64 bits";
 answers[9] = choices[9][2];
 units[9] = "47";
 comments[9] = "Id Pregunta: 984. ";


//  Id pregunta: 1067 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  Elija la respuesta falsa respecto de OLAP.";
 choices[10]= new Array();
 choices[10][0] = "Implica el uso de t&eacute;cnicas multidimensionales.";
 choices[10][1] = "Realiza el an&aacute;lisis Offline de los datos.";
 choices[10][2] = "Puede utilizar bases de datos relacionales.";
 choices[10][3] = "Puede presentar vistas de los datos en un numero reducido de dimensiones.";
 answers[10] = choices[10][1];
 units[10] = "68";
 comments[10] = "Id Pregunta: 1067. ";


//  Id pregunta: 1079 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  En el entorno cliente/servidor, TUXEDO es muy conocido como:";
 choices[11]= new Array();
 choices[11][0] = "Un monitor de proceso de transacciones";
 choices[11][1] = "Programa de sesi&oacute;n de IBM en los sistemas MVS";
 choices[11][2] = "Aplicaci&oacute;n para tranferencia de ficheros en sistemas Unix";
 choices[11][3] = "No existe la aplicaci&oacute;n TUXEDO";
 answers[11] = choices[11][0];
 units[11] = "50";
 comments[11] = "Id Pregunta: 1079. ";


//  Id pregunta: 1089 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  En el Modelo de Referencia para la estandarizaci&oacute;n de los Sistemas de Gesti&oacute;n de Bases de Datos, basado en la arquitectura de tres niveles de ANSI, las funciones de insertar y borrar se realizan mediante:";
 choices[12]= new Array();
 choices[12][0] = "El esquema interno";
 choices[12][1] = "El diccionario central de datos";
 choices[12][2] = "El lenguaje de definici&oacute;n de datos";
 choices[12][3] = "El lenguaje de manipulaci&oacute;n de datos";
 answers[12] = choices[12][3];
 units[12] = "57";
 comments[12] = "Id Pregunta: 1089. ";


//  Id pregunta: 1129 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  En relaci&oacute;n con la gesti&oacute;n de prioridades entre perif&eacute;ricos para acceder a un recurso com&uacute;n,  cu&aacute;l de las siguientes sentencias es correcta?:";
 choices[13]= new Array();
 choices[13][0] = "La gesti&oacute;n de prioridad distribuida es la m&aacute;s utilizada cuando los dispositivos est&aacute;n conectados mediante bus al recurso com&uacute;n";
 choices[13][1] = "La gesti&oacute;n de prioridad distribuida es la m&aacute;s conveniente cuando la conexi&oacute;n de los dispositivos es mediante multiplexor";
 choices[13][2] = "La gesti&oacute;n de prioridad programada es la m&aacute;s conveniente cuando la conexi&oacute;n de los dispositivos es mediante multiplexor";
 choices[13][3] = "La gesti&oacute;n de prioridad h&iacute;brida emplea simult&aacute;neamente los conceptos de gesti&oacute;n distribuida y programada";
 answers[13] = choices[13][0];
 units[13] = "52";
 comments[13] = "Id Pregunta: 1129. ";


//  Id pregunta: 1146 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  En un sistema operativo Linux, el runlevel 6:";
 choices[14]= new Array();
 choices[14][0] = "Pone a la m&aacute;quina en modo multiusuario";
 choices[14][1] = "Pone a la m&aacute;quina en modo monousuario";
 choices[14][2] = "Prepara a la m&aacute;quina para reiniciar";
 choices[14][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[14] = choices[14][2];
 units[14] = "53";
 comments[14] = "Id Pregunta: 1146. ";


//  Id pregunta: 1154 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  En una red neuronal feedforward supervisada el m&eacute;todo de aprendizaje que intenta adaptar los pesos para minimizar el error cuadr&aacute;tico medio para el conjunto de patrones de entrenamiento se denomina:";
 choices[15]= new Array();
 choices[15][0] = "M&eacute;todo de la varianza";
 choices[15][1] = "M&eacute;todo de encadenamiento hacia atr&aacute;s";
 choices[15][2] = "M&eacute;todo de retropropagaci&oacute;n";
 choices[15][3] = "M&eacute;todo de Kohonen";
 answers[15] = choices[15][2];
 units[15] = "64";
 comments[15] = "Id Pregunta: 1154. ";


//  Id pregunta: 1172 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  HURD:";
 choices[16]= new Array();
 choices[16][0] = "Es el sistema operativo GNU por definici&oacute;n";
 choices[16][1] = "Utiliza arquitectura Microkernel";
 choices[16][2] = "Las respuestas 'a' y 'b' son correctas";
 choices[16][3] = "Las respuestas 'a' y 'b' son falsas";
 answers[16] = choices[16][2];
 units[16] = "53";
 comments[16] = "Id Pregunta: 1172. ";


//  Id pregunta: 1221 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  La estructuraci&oacute;n en niveles l&oacute;gicos de E/S de un sistema inform&aacute;tico puede hacerse de la siguiente forma:";
 choices[17]= new Array();
 choices[17][0] = "Transferencia elemental, transferencia compleja, transferencia m&uacute;ltiple";
 choices[17][1] = "Lenguaje de alto nivel, instrucciones de m&aacute;quina y macroinstrucciones";
 choices[17][2] = "Rutinas de entrada-salida, sistemas operativos, ensambladores";
 choices[17][3] = "Transferencia elemental, de bloque, operaci&oacute;n de entrada/salida";
 answers[17] = choices[17][3];
 units[17] = "52";
 comments[17] = "Id Pregunta: 1221. ";


//  Id pregunta: 1248 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  La Unidad de Control (UC) puede construirse con diferentes m&eacute;todos:";
 choices[18]= new Array();
 choices[18][0] = "L&oacute;gica cableada, se construye mediante puertas l&oacute;gicas y es m&aacute;s r&aacute;pida que la l&oacute;gica programada";
 choices[18][1] = "La UC microprogramada se suele utilizar en ordenadores de tama&ntilde;o medio, en los grandes es demasiado lenta";
 choices[18][2] = "La microprogramaci&oacute;n permite introducir instrucciones complejas, pero las modificaciones y correcciones son dif&iacute;ciles de implementar";
 choices[18][3] = "El dise&ntilde;o en microprogramaci&oacute;n es m&aacute;s laborioso y costoso";
 answers[18] = choices[18][1];
 units[18] = "47";
 comments[18] = "Id Pregunta: 1248. ";


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


//  Id pregunta: 1278 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Los problemas de exclusi&oacute;n mutua entre procesos:";
 choices[20]= new Array();
 choices[20][0] = "Se centran en tres grandes &aacute;reas : la exclusi&oacute;n mutua, el manejo de interrupciones y el 'dead lock'";
 choices[20][1] = "Los resuelve el n&uacute;cleo del sistema operativo mediante la funci&oacute;n de dispatching";
 choices[20][2] = "Afectan a la protecci&oacute;n de datos en memoria y se resuelven dotando al hardware de una serie de instrucciones privilegiadas que gestiona el n&uacute;cleo del sistema operativo";
 choices[20][3] = "Se resuelven mediante la implementaci&oacute;n de sem&aacute;foros";
 answers[20] = choices[20][3];
 units[20] = "52";
 comments[20] = "Id Pregunta: 1278. ";


//  Id pregunta: 1317 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  Respecto a los DTDs es falso que:";
 choices[21]= new Array();
 choices[21][0] = "est&aacute;n escritos en una sintaxis diferente de XML";
 choices[21][1] = "representan la &uacute;nica manera de definir un documento XML, y su ausencia implica que la definici&oacute;n del documento se saca del contexto";
 choices[21][2] = "no son obligatorios, y los documentos XML correctos pero sin DTD se denominan &quot;bien formados&quot;";
 choices[21][3] = "est&aacute;n muy extendidos y existen muchas herramientas y expertos en su utilizaci&oacute;n y desarrollo";
 answers[21] = choices[21][1];
 units[21] = "69";
 comments[21] = "Id Pregunta: 1317. NULL";


//  Id pregunta: 1354 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Se&ntilde;ale la respuesta falsa. Una pasarela de pagos:";
 choices[22]= new Array();
 choices[22][0] = "Permite a un comercio en internet cobrar a sus clientes, efectuando la transacci&oacute;n por medio de un tercero de confianza";
 choices[22][1] = "Es un aplicativo software que permite conectar al cliente con el comercio de forma segura";
 choices[22][2] = "Es un dispositivo hardware que se instala en el servidor web de la tienda viertual";
 choices[22][3] = "Abstrae el manejo de los pagos de la l&oacute;gica de la aplicaci&oacute;n de la tienda";
 answers[22] = choices[22][2];
 units[22] = "70";
 comments[22] = "Id Pregunta: 1354. NULL";


//  Id pregunta: 1386 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Un ordenador con multiprocesamiento sim&eacute;trico (SMP). Dentro de la clasificaci&oacute;n de M.J. Flinn se clasificar&iacute;a como:";
 choices[23]= new Array();
 choices[23][0] = "SISD";
 choices[23][1] = "MIMD";
 choices[23][2] = "MISD";
 choices[23][3] = "SIMD";
 answers[23] = choices[23][1];
 units[23] = "45";
 comments[23] = "Id Pregunta: 1386. ";


//  Id pregunta: 1406 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Un tesauro es lineal cuando:";
 choices[24]= new Array();
 choices[24][0] = "Las relaciones entre descriptores constituyen una estructura de red";
 choices[24][1] = "Los descriptores se clasifican jer&aacute;rquicamente con un cierto criterio";
 choices[24][2] = "Se componen de una relaci&oacute;n de palabras o descriptores sin conexiones entre ellos";
 choices[24][3] = "Los descriptores se clasifican formando una estructura en anillo";
 answers[24] = choices[24][2];
 units[24] = "64";
 comments[24] = "Id Pregunta: 1406. ";


//  Id pregunta: 1504 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Los d&iacute;gitos de un teclado DTMF son:";
 choices[25]= new Array();
 choices[25][0] = "los n&uacute;meros del 0 al 9";
 choices[25][1] = "los n&uacute;meros del 0 al 9 m&aacute;s la tecla '*'";
 choices[25][2] = "los n&uacute;meros del 0 al 9 m&aacute;s la tecla '#'";
 choices[25][3] = "los n&uacute;meros del 0 al 9 m&aacute;s las teclas '*' y '#'";
 answers[25] = choices[25][3];
 units[25] = "47";
 comments[25] = "Id Pregunta: 1504. ";


//  Id pregunta: 1634 AÃ±o de creación de pregunta: 2003-01-01
 questions[26]= "27)  &iquest;Qu&eacute; son las funciones primitivas en un Diagrama de Flujo de Datos?";
 choices[26]= new Array();
 choices[26][0] = "Son aquellas funciones que no responden a eventos del sistema, que se describen en un Diagrama de Flujo de Datos para mejorar su legibilidad.";
 choices[26][1] = "Son aquellos procesos de un Diagrama de Flujo de Datos que no se descomponen m&aacute;s.";
 choices[26][2] = "  Son los procesos que aparecen en el Diagrama de Contexto.";
 choices[26][3] = " Son las funciones que se conectan con los almacenes de datos en un Diagrama de Flujo de Datos.";
 answers[26] = choices[26][1];
 units[26] = "81";
 comments[26] = "Id Pregunta: 1634. ";


//  Id pregunta: 1655 AÃ±o de creación de pregunta: 2004-01-01
 questions[27]= "28)  &iquest;Cu&aacute;les de los siguientes no son modos de operaci&oacute;n para algoritmos de cifrado por bloques?";
 choices[27]= new Array();
 choices[27][0] = "CTR";
 choices[27][1] = "CBC";
 choices[27][2] = "CFB";
 choices[27][3] = "DFB";
 answers[27] = choices[27][3];
 units[27] = "72";
 comments[27] = "Id Pregunta: 1655. ";


//  Id pregunta: 1673 AÃ±o de creación de pregunta: 2004-01-01
 questions[28]= "29)  &iquest;Qu&eacute; se conoce como grado de una relaci&oacute;n?";
 choices[28]= new Array();
 choices[28][0] = "Un conjunto de valores";
 choices[28][1] = "El n&uacute;mero de tuplas";
 choices[28][2] = "El n&uacute;mero de atributos";
 choices[28][3] = "El n&uacute;mero de vistas";
 answers[28] = choices[28][2];
 units[28] = "58";
 comments[28] = "Id Pregunta: 1673. ";


//  Id pregunta: 1709 AÃ±o de creación de pregunta: 2006-01-01
 questions[29]= "30)  &iquest;cu&aacute;l de los siguientes sistemas operativos es un sistema orientado a objetos?";
 choices[29]= new Array();
 choices[29][0] = "Windows";
 choices[29][1] = "Linux";
 choices[29][2] = "OS/400";
 choices[29][3] = "VMS";
 answers[29] = choices[29][2];
 units[29] = "49";
 comments[29] = "Id Pregunta: 1709. ";


//  Id pregunta: 1717 AÃ±o de creación de pregunta: 2006-01-01
 questions[30]= "31)  La posibilidad de un sistema operativo de ejecutar diferentes partes de un programa simult&aacute;neamente, se denomina:";
 choices[30]= new Array();
 choices[30][0] = "Multitasking";
 choices[30][1] = "Multithreading";
 choices[30][2] = "Multiuser";
 choices[30][3] = "Multiprocessing";
 answers[30] = choices[30][1];
 units[30] = "52";
 comments[30] = "Id Pregunta: 1717. ";


//  Id pregunta: 1722 AÃ±o de creación de pregunta: 2006-01-01
 questions[31]= "32)  En los sistemas operativos actuales, cada nodo-i dispone de los siguientes apuntadores o &iacute;ndices:";
 choices[31]= new Array();
 choices[31][0] = "12 apuntadores directos, un indirecto simple, un indirecto doble y un indirecto triple ";
 choices[31][1] = "10 apuntadores directos, 1 indirecto simle y 1 indirecto doble ";
 choices[31][2] = "20 apuntadores directos, uno simple y uno doble";
 choices[31][3] = "todas son falsas";
 answers[31] = choices[31][0];
 units[31] = "53";
 comments[31] = "Id Pregunta: 1722. ";


//  Id pregunta: 1727 AÃ±o de creación de pregunta: 2006-01-01
 questions[32]= "33)  Cu&aacute;l de los siguientes gestores de ventanas utiliza GNOME por defecto";
 choices[32]= new Array();
 choices[32][0] = "GNOME es tambi&eacute;n un gestor de ventanas";
 choices[32][1] = "Puede utilizar cualquiera, pero por defecto es KDE";
 choices[32][2] = "A partir de la versi&oacute;n GNOME 3.0 es Mutter";
 choices[32][3] = "X11 es el gestor por defecto";
 answers[32] = choices[32][2];
 units[32] = "54";
 comments[32] = "Id Pregunta: 1727. Desactualizada";


//  Id pregunta: 1770 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  Respecto a los drivers utilizados en JDBC";
 choices[33]= new Array();
 choices[33][0] = "El driver de tipo 1 utiliza c&oacute;digo Java para hacer llamadas a una API nativa que debe estar en la m&aacute;quina que accede a la base de datos.";
 choices[33][1] = "El driver de tipo III no requiere ninguna instalaci&oacute;n adicional en la m&aacute;quina cliente, pero obliga a la existencia del middleware.";
 choices[33][2] = "La ventaja del driver tipo II es que da acceso a pr&aacute;cticamente todos los sistemas de gesti&oacute;n de base de datos del mercado";
 choices[33][3] = "todas son falsas";
 answers[33] = choices[33][1];
 units[33] = "60";
 comments[33] = "Id Pregunta: 1770. NULL";


//  Id pregunta: 1787 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  Las siglas  STRIPS se corresponden a";
 choices[34]= new Array();
 choices[34][0] = "Stanford Research Institute Problem Solver";
 choices[34][1] = "St. Luis Robotics Institute Private Software";
 choices[34][2] = "San Francisco Tech Robots Institute Practical Seasons";
 choices[34][3] = "Science, Tech and Research International Patented System";
 answers[34] = choices[34][0];
 units[34] = "63";
 comments[34] = "Id Pregunta: 1787. ";


//  Id pregunta: 1802 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  &iquest;Qu&eacute; categoria de software  no se incluye tipicamente en un producto de gesti&oacute;n del conocimiento?";
 choices[35]= new Array();
 choices[35][0] = "Buscador / Indexador";
 choices[35][1] = "Categorizador automatico";
 choices[35][2] = "Repositorio de documentos";
 choices[35][3] = "LMS";
 answers[35] = choices[35][3];
 units[35] = "64";
 comments[35] = "Id Pregunta: 1802. ";


//  Id pregunta: 1816 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  &iquest;Para qu&eacute; se utiliza  principalmente el algoritmo k-medias?";
 choices[36]= new Array();
 choices[36][0] = "Clustering.";
 choices[36][1] = "Categorizaci&oacute;n.";
 choices[36][2] = "Predicci&oacute;n.";
 choices[36][3] = "Detecci&oacute;n de fraude.";
 answers[36] = choices[36][0];
 units[36] = "68";
 comments[36] = "Id Pregunta: 1816. ";


//  Id pregunta: 1842 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  La directiva 2002/38/CE:";
 choices[37]= new Array();
 choices[37][0] = "Ha regulado el fen&oacute;meno del comercio electr&oacute;nico en lo que se refiere al IVA";
 choices[37][1] = "Est&aacute;  incluida en el denominado paquete Telecom";
 choices[37][2] = "Es relativa a la protecci&oacute;n de datos personales y a la protecci&oacute;n de la intimidad en el sector de las comunicaciones electr&oacute;nicas";
 choices[37][3] = "Ninguna de las anteriores";
 answers[37] = choices[37][0];
 units[37] = "70";
 comments[37] = "Id Pregunta: 1842. NULL";


//  Id pregunta: 1857 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  En relaci&oacute;n a los certificados X.509:";
 choices[38]= new Array();
 choices[38][0] = "Se codifican mediante la notaci&oacute;n ASN.1";
 choices[38][1] = "Permite el uso en sus campos de nombres X.500 y DNS";
 choices[38][2] = "Se han definido extensiones que permiten incluir informaci&oacute;n espec&iacute;fica";
 choices[38][3] = "Todas las anteriores son ciertas";
 answers[38] = choices[38][3];
 units[38] = "73";
 comments[38] = "Id Pregunta: 1857. ";


//  Id pregunta: 1940 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  En referencia al lenguaje XML, &iquest;cu&aacute;l de las siguientes opciones es la correcta?";
 choices[39]= new Array();
 choices[39][0] = "Las hojas de estilo CSS no pueden ser utilizadas con HTML";
 choices[39][1] = "XSL puede usarse para transformar datos XML a documentos HTML/CSS en un servidor Web";
 choices[39][2] = "CSS puede ejecutar cualquier l&oacute;gica basada en los datos";
 choices[39][3] = "CSS y XSL no pueden usarse en paralelo";
 answers[39] = choices[39][1];
 units[39] = "69";
 comments[39] = "Id Pregunta: 1940. NULL";


//  Id pregunta: 4496 AÃ±o de creación de pregunta: 2007-01-01
 questions[40]= "41)  Metacity";
 choices[40]= new Array();
 choices[40][0] = "Es el gestor de eventos de GNOME 2";
 choices[40][1] = "Es el gestor de ventanas de GNOME 2";
 choices[40][2] = "Es el gestor de eventos de KDE";
 choices[40][3] = "Es el gestor de eventos de MOLINUX";
 answers[40] = choices[40][1];
 units[40] = "54";
 comments[40] = "Id Pregunta: 4496. ";


//  Id pregunta: 4567 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  &iquest;Cual de las siguientes afirmaciones es correcta sobre el recurso Quorum de un cluster?";
 choices[41]= new Array();
 choices[41][0] = "contiene datos del firmware del hardware del fabricante de los servidores que forman el cluster.";
 choices[41][1] = "contiene los &Uacute;ltimos datos accedidos par el usuario.";
 choices[41][2] = "ofrece una configuraci&oacute;n consistente del cluster.";
 choices[41][3] = "no existe el recurso Quorum en un cluster.";
 answers[41] = choices[41][2];
 units[41] = "45";
 comments[41] = "Id Pregunta: 4567. ";


//  Id pregunta: 4828 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  &iquest;Cu&aacute;l de las siguientes NO es una caracter&iacute;stica del interfaz Serial ATA (Advanced Technology Attachment)?";
 choices[42]= new Array();
 choices[42][0] = "No precisa se&ntilde;al de reloj externa";
 choices[42][1] = "Por restricciones el&eacute;ctricas, el cable de conexi&oacute;n no puede exceder de 50 cent&iacute;metros";
 choices[42][2] = "Cada se&ntilde;al de datos se transmite por diferencia de voltajes entre dos l&iacute;neas";
 choices[42][3] = "La conexi&oacute;n entre puerto y dispositivo se hace en modo punto a punto y no mediante bus";
 answers[42] = choices[42][1];
 units[42] = "48";
 comments[42] = "Id Pregunta: 4828. ";


//  Id pregunta: 4997 AÃ±o de creación de pregunta: 2003-01-01
 questions[43]= "44)  Indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[43]= new Array();
 choices[43][0] = "El sistema de autenticaci&oacute;n &quot;Kerberos&quot;, utiliza exclusivamente mecanismos de criptograf&iacute;a asim&eacute;trica";
 choices[43][1] = "Para la autenticaci&oacute;n &quot;Kerberos&quot; utiliza mecanismos basados en criptograf&iacute;a sim&eacute;trica y en criptograf&iacute;aasim&eacute;trica";
 choices[43][2] = "Para la autenticaci&oacute;n &quot;Kerberos&quot; utiliza exclusivamente mecanismos basados en critograf&iacute;a sim&eacute;trica";
 choices[43][3] = "Para la autenticaci&oacute;n &quot;Kerberos&quot; utiliza mecanismos de identificaci&oacute;n/password y de criptograf&iacute;a sim&eacute;trica";
 answers[43] = choices[43][3];
 units[43] = "73";
 comments[43] = "Id Pregunta: 4997. Examen TIC A 2007";


//  Id pregunta: 5089 AÃ±o de creación de pregunta: 2001-01-01
 questions[44]= "45)  En el est&aacute;ndar X.509,&iquest; qu&eacute; procedimiento de autenticaci&oacute;n utilizar&iacute;a cuando el origen y el destino no tienen relojes sincronizados?";
 choices[44]= new Array();
 choices[44][0] = "autenticaci&oacute;n a 1 v&iacute;a";
 choices[44][1] = "autenticaci&oacute;n a 2 v&iacute;as";
 choices[44][2] = "autenticaci&oacute;n a 3 v&iacute;as ";
 choices[44][3] = "autenticaci&oacute;n a 4 v&iacute;as";
 answers[44] = choices[44][2];
 units[44] = "73";
 comments[44] = "Id Pregunta: 5089. ";


//  Id pregunta: 5455 AÃ±o de creación de pregunta: 2003-01-01
 questions[45]= "46)  Una Importante cuesti&oacute;n a considerar en la elecci&oacute;n de una sentencia SQL es";
 choices[45]= new Array();
 choices[45][0] = "N&uacute;mero de CPUs en el servidor";
 choices[45][1] = "Grado de paralelismo de las tablas";
 choices[45][2] = "Uso de &iacute;ndices de mapas de bits";
 choices[45][3] = "Calidad de las optimizaciones de las sentencias SQL";
 answers[45] = choices[45][3];
 units[45] = "58";
 comments[45] = "Id Pregunta: 5455. Castilla y Le&oacute;n";


//  Id pregunta: 5691 AÃ±o de creación de pregunta: 2003-01-01
 questions[46]= "47)  Dentro del chip criptogr&aacute;fico del DNI electr&oacute;nico podemos encontrar tres zonas de datos diferenciadas. Una de las zonas s&oacute;lo es accesible por la Direcci&oacute;n General de la Polic&iacute;a. Se&ntilde;ale su nombre: ";
 choices[46]= new Array();
 choices[46][0] = "Zona p&uacute;blica";
 choices[46][1] = "Zona de seguridad";
 choices[46][2] = "Zona privada";
 choices[46][3] = "Zona confidencial";
 answers[46] = choices[46][1];
 units[46] = "74";
 comments[46] = "Id Pregunta: 5691. NULL";


//  Id pregunta: 5692 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  Una de las zonas de datos que se encuentran dentro del chip criptogr&aacute;fico del DNI electr&oacute;nico es la denominada zona de seguridad. Esta zona que almacena, entre otros, los datos biom&eacute;tricos, es accesible por:";
 choices[47]= new Array();
 choices[47][0] = "El ciudadano";
 choices[47][1] = "El ciudadano y la Direcci&oacute;n General de la Polic&iacute;a";
 choices[47][2] = " La Direcci&oacute;n General de la Polic&iacute;a";
 choices[47][3] = "Es una zona p&uacute;blica";
 answers[47] = choices[47][2];
 units[47] = "74";
 comments[47] = "Id Pregunta: 5692. NULL";


//  Id pregunta: 5701 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  BPEL se corresponde con:";
 choices[48]= new Array();
 choices[48][0] = "Un lenguaje estandarizado por OASIS para la composici&oacute;n de servicios web";
 choices[48][1] = "Un formato XML que se utiliza para describir servicios Web";
 choices[48][2] = "Un protocolo est&aacute;ndar creado por Microsoft, IBM y otros, que define c&oacute;mo dos objetos en diferentes procesos pueden comunicarse por medio de intercambio de datos XML";
 choices[48][3] = "Un consorcio internacional sin fines de lucro que orienta el desarrollo, la convergencia y la adopci&oacute;n de los est&aacute;ndares e-business";
 answers[48] = choices[48][0];
 units[48] = "51";
 comments[48] = "Id Pregunta: 5701. NULL";


//  Id pregunta: 5742 AÃ±o de creación de pregunta: 2009-01-01
 questions[49]= "50)  En el &aacute;mbito de la Uni&oacute;n Europea, &iquest;tiene validez jur&iacute;dica la firma electr&oacute;nica?";
 choices[49]= new Array();
 choices[49][0] = "Solamente si es firma reconocida";
 choices[49][1] = "Solamente si es firma avanzada";
 choices[49][2] = "Siempre ser&aacute; admisible como prueba en el procedimiento judicial";
 choices[49][3] = "Ninguna de las anteriores es correcta";
 answers[49] = choices[49][2];
 units[49] = "30";
 comments[49] = "Id Pregunta: 5742. Directiva 1999/93/CE y Reglamento 910/2014, consideraci&oacute;n 61)";


//  Id pregunta: 5878 AÃ±o de creación de pregunta: 2009-01-01
 questions[50]= "51)  Indique cu&aacute;l de las siguientes afirmaciones es una caracter&iacute;stica de la tecnolog&iacute;a de Grid Computing:";
 choices[50]= new Array();
 choices[50][0] = "Los nodos tienen que estar dedicados";
 choices[50][1] = "Todos los sistemas deben ser homog&eacute;neos";
 choices[50][2] = "La escalabilidad es parametrizable";
 choices[50][3] = "Los recursos no se localizan din&aacute;micamente";
 answers[50] = choices[50][2];
 units[50] = "45";
 comments[50] = "Id Pregunta: 5878. MAP 2008 A1";


//  Id pregunta: 6104 AÃ±o de creación de pregunta: 2010-01-01
 questions[51]= "52)  &iquest;Cu&aacute;l de los siguientes NO es un procedimiento adecuado para la consulta de la validez de un certificado digital emitido por un prestador de servicios de certificaci&oacute;n?";
 choices[51]= new Array();
 choices[51][0] = "Declaraci&oacute;n de pr&aacute;cticas de certificaci&oacute;n.";
 choices[51][1] = "Listas de certificados revocados.";
 choices[51][2] = "LDAP.";
 choices[51][3] = "OCSP.";
 answers[51] = choices[51][0];
 units[51] = "74";
 comments[51] = "Id Pregunta: 6104. TIC A 2009";


//  Id pregunta: 6133 AÃ±o de creación de pregunta: 2010-01-01
 questions[52]= "53)  ADO.NET es:";
 choices[52]= new Array();
 choices[52][0] = "Un conjunto de componentes software de la capa de l&oacute;gica de negocio.";
 choices[52][1] = "Un lenguaje de programaci&oacute;n para el entorno .NET.";
 choices[52][2] = "Un conjunto de componentes para el acceso a datos.";
 choices[52][3] = "Una biblioteca de clases b&aacute;sica de la capa de presentaci&oacute;n.";
 answers[52] = choices[52][2];
 units[52] = "59";
 comments[52] = "Id Pregunta: 6133. TIC A 2009";


//  Id pregunta: 6498 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)  NO corresponde a una libertad del software libre, seg&uacute;n la FSF:";
 choices[53]= new Array();
 choices[53][0] = "La libertad de usar el programa, con cualquier prop&oacute;sito";
 choices[53][1] = "La libertad de estudiar c&oacute;mo funciona el programa, y adaptarlo a sus necesidades";
 choices[53][2] = "La libertad de distribuir copias, con la autorizaci&oacute;n expl&iacute;cita del autor";
 choices[53][3] = "La libertad de mejorar el programa y hacer p&uacute;blicas las mejoras a los dem&aacute;s, de modo que toda la comunidad se beneficie";
 answers[53] = choices[53][2];
 units[53] = "61";
 comments[53] = "Id Pregunta: 6498. ";


//  Id pregunta: 6500 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  Seg&uacute;n Eric Raymond, los dos modelos caracter&iacute;sticos de desarrollo del Software Libre se conocen como:";
 choices[54]= new Array();
 choices[54][0] = "Catedral y Torre";
 choices[54][1] = "Catedral y Bazar";
 choices[54][2] = "Bazar y Torre";
 choices[54][3] = "Torre y Lineal";
 answers[54] = choices[54][1];
 units[54] = "61";
 comments[54] = "Id Pregunta: 6500. ";


//  Id pregunta: 6502 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  Es una licencia compatible con GPL:";
 choices[55]= new Array();
 choices[55][0] = "NPL";
 choices[55][1] = "MPL";
 choices[55][2] = "BSD Original";
 choices[55][3] = "Ninguna de las anteriores";
 answers[55] = choices[55][3];
 units[55] = "61";
 comments[55] = "Id Pregunta: 6502. ";


//  Id pregunta: 6513 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  &iquest;Cu&aacute;l no es un entorno de escritorio para Linux?";
 choices[56]= new Array();
 choices[56][0] = "KDE";
 choices[56][1] = "GNOME";
 choices[56][2] = "XCFE";
 choices[56][3] = "SUSE";
 answers[56] = choices[56][3];
 units[56] = "54";
 comments[56] = "Id Pregunta: 6513. ";


//  Id pregunta: 6552 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  Dentro de los Est&aacute;ndares de Criptograf&iacute;a de Clave P&uacute;blica (PKCS)";
 choices[57]= new Array();
 choices[57][0] = "PKCS#1: Corresponde al algoritmo RSA";
 choices[57][1] = "PKCS#3: Corresponde al algoritmo Diffie-Hellman";
 choices[57][2] = "PKCS#5: Cifrado con clave privada";
 choices[57][3] = "Todas las respuestas anteriores son correctas";
 answers[57] = choices[57][3];
 units[57] = "74";
 comments[57] = "Id Pregunta: 6552. NULL";


//  Id pregunta: 6554 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  PKCS#12";
 choices[58]= new Array();
 choices[58][0] = "Especifica un formato portable para almacenar o transportar las claves privadas de un usuario";
 choices[58][1] = "Especifica una API, por la que los dispositivos que contienen informaci&oacute;n criptogr&aacute;fica realizan funciones criptogr&aacute;ficas";
 choices[58][2] = "El formato del sobre digital";
 choices[58][3] = "La especificaci&oacute;n de un interfaz de acceso a dispositivos que almacenan informaci&oacute;n";
 answers[58] = choices[58][0];
 units[58] = "74";
 comments[58] = "Id Pregunta: 6554. NULL";


//  Id pregunta: 7157 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  &iquest;Cu&aacute;l de las siguientes funciones no las realiza el Sistema Operativo?";
 choices[59]= new Array();
 choices[59][0] = "Gesti&oacute;n de memoria";
 choices[59][1] = "Administraci&oacute;n de procesos";
 choices[59][2] = "Arranque de la m&aacute;quina";
 choices[59][3] = "Administraci&oacute;n del sistema de E/S";
 answers[59] = choices[59][2];
 units[59] = "52";
 comments[59] = "Id Pregunta: 7157. Examen TIC B 2009";


//  Id pregunta: 7178 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  En un esquema de certificaci&oacute;n y seguridad basado en clave p&uacute;blica (PKI), la 'tercera parte confiable' se denomina:";
 choices[60]= new Array();
 choices[60][0] = "Autoridad de Certificaci&oacute;n";
 choices[60][1] = "Autoridad de Registro";
 choices[60][2] = "Centro de Confianza";
 choices[60][3] = "Autoridad de Revocaci&oacute;n";
 answers[60] = choices[60][0];
 units[60] = "74";
 comments[60] = "Id Pregunta: 7178. Examen TIC B 2009";


//  Id pregunta: 7769 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)   Seg&uacute;n la recomendaci&oacute;n X.509 v.3:";
 choices[61]= new Array();
 choices[61][0] = " Un usuario puede tener a lo sumo un certificado de atributos por cada certificado de clave p&uacute;blica.";
 choices[61][1] = " Los certificados de atributos deben ser generados por Autoridades de Certificaci&oacute;n.";
 choices[61][2] = " Para su validez, los certificados de atributos deben estar siempre acompa&ntilde;ados de un certificado de clave p&uacute;blica.";
 choices[61][3] = " Los certificados de atributos contienen id&eacute;nticos campos que subcampos tiene el campo de extensiones de los certificados de clave p&uacute;blica.";
 answers[61] = choices[61][2];
 units[61] = "73";
 comments[61] = "Id Pregunta: 7769. Map 2005";


//  Id pregunta: 7779 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)   Seg&uacute;n la recomendaci&oacute;n X.509 v.3:";
 choices[62]= new Array();
 choices[62][0] = " La autenticaci&oacute;n simple conlleva el uso exclusivo de contrase&ntilde;as transmitidas en claro.";
 choices[62][1] = " La autenticaci&oacute;n robusta (strong) de un sentido conlleva siempre el empleo de funciones resumen (hash).";
 choices[62][2] = " La autenticaci&oacute;n robusta (strong) de dos sentidos comporta siempre el uso de credenciales obtenidas mediante t&eacute;cnicas criptogr&aacute;ficas.";
 choices[62][3] = " La autenticaci&oacute;n robusta (strong) de tres sentidos debe incorporar siempre sellos de tiempo.";
 answers[62] = choices[62][2];
 units[62] = "73";
 comments[62] = "Id Pregunta: 7779. Map 2005";


//  Id pregunta: 8185 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  La tabla ESTUDIANTES(DNI#, Nombre, Apellido 1, Apellido 2, DNITutor, NombreTutor):";
 choices[63]= new Array();
 choices[63][0] = "No est&aacute; en primera forma normal.";
 choices[63][1] = "Est&aacute; en primera forma normal pero no en segunda forma normal.";
 choices[63][2] = "Est&aacute; en segunda forma normal pero no en tercera forma normal.";
 choices[63][3] = "Est&aacute; en tercera forma normal pero no en forma normal de Boyce Codd.";
 answers[63] = choices[63][2];
 units[63] = "58";
 comments[63] = "Id Pregunta: 8185. Examen TIC A1 2010";


//  Id pregunta: 8191 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  Indique cu&aacute;l de los siguientes sistemas NO permite direccionar ficheros de un Terabyte:";
 choices[64]= new Array();
 choices[64][0] = "AdvFS";
 choices[64][1] = "MFS";
 choices[64][2] = "JFS2 ";
 choices[64][3] = "XFS";
 answers[64] = choices[64][1];
 units[64] = "48, 52";
 comments[64] = "Id Pregunta: 8191. Examen TIC A1 2010";


//  Id pregunta: 8192 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  Indique la afirmaci&oacute;n correcta que aplica al DNI electr&oacute;nico: ";
 choices[65]= new Array();
 choices[65][0] = "La PKI adoptada para el DNI electr&oacute;nico asigna las funciones de Autoridad de Validaci&oacute;n a las entidades Autoridad de Certificaci&oacute;n, con objeto de tener conocimiento de la vigencia o caducidad de certificados de un determinado titular.";
 choices[65][1] = "La clave personal de acceso (PIN) podr&aacute; contener signos de puntuaci&oacute;n.";
 choices[65][2] = "Todos los certificados emitidos por DNIe contienen la extensi&oacute;n &lsquo;Key Usage&rsquo; con al menos los siguientes usos &quot;contentCommitment&quot;, &quot;Digital Signature&quot; y &quot;dataEncipherment&quot;.";
 choices[65][3] = "El tama&ntilde;o de las claves de los certificados de autenticaci&oacute;n y firma contenidos en el DNIe, es de 4096 bits. ";
 answers[65] = choices[65][1];
 units[65] = "74";
 comments[65] = "Id Pregunta: 8192. Examen TIC A1 2010";


//  Id pregunta: 8322 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  Un sistema compuesto por 15 usuarios intercambian informaci&oacute;n cifrada mediante AES. Si los canales de comunicaci&oacute;n entre usuarios es 2 a 2 (es decir, todos intercambian informaci&oacute;n con todos) &iquest;cu&aacute;ntas claves son necesarias?";
 choices[66]= new Array();
 choices[66][0] = "15.";
 choices[66][1] = "105.";
 choices[66][2] = "210.";
 choices[66][3] = "30. ";
 answers[66] = choices[66][1];
 units[66] = "72";
 comments[66] = "Id Pregunta: 8322. Examen TIC A2 2010";


//  Id pregunta: 8417 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  En el contexto del PL-SQL, &iquest;cu&aacute;l es el nombre que se da a los segmentos de memoria utilizados para realizar operaciones con los registros devueltos tras ejecutar una sentencia SELECT? ";
 choices[67]= new Array();
 choices[67][0] = "Row Trigger ";
 choices[67][1] = "Statement Trigger. ";
 choices[67][2] = "Cursor";
 choices[67][3] = "Puntero";
 answers[67] = choices[67][2];
 units[67] = "58";
 comments[67] = "Id Pregunta: 8417. Examen TIC A2 2010";


//  Id pregunta: 8812 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  Las extensiones del Data Mining son:";
 choices[68]= new Array();
 choices[68][0] = "Web Mining y Text Mining.";
 choices[68][1] = "Web Mining, Text Mining e Hipertext Mining.";
 choices[68][2] = "Text Mining e Hipertext Mining.";
 choices[68][3] = "Web Mining e Hipertext Mining.";
 answers[68] = choices[68][0];
 units[68] = "68";
 comments[68] = "Id Pregunta: 8812. Examen UPM A2 2011";


//  Id pregunta: 8920 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  Las siglas SOAP significan";
 choices[69]= new Array();
 choices[69][0] = "Simple Object Access Protocol, o protocolo simple de acceso a objetos";
 choices[69][1] = "Single Object Access Protocol, o protocolo de acceso a objetos individuales";
 choices[69][2] = "Single Object Authorization Protocolo, o protocolo de autorizaci&oacute;n de objetos individuales";
 choices[69][3] = "Sevice Oriented Access Protocol, o protocolo de acceso orientado a servicios";
 answers[69] = choices[69][0];
 units[69] = "51";
 comments[69] = "Id Pregunta: 8920. Operador Ayto. Madrid 2010";


//  Id pregunta: 8963 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  Uno de los instrumentos b&aacute;sicos de los Decision Support Systems orientados a modelos es:";
 choices[70]= new Array();
 choices[70][0] = "Procesos prueba-error.";
 choices[70][1] = "Informes resumen.";
 choices[70][2] = "Informes de excepci&oacute;n.";
 choices[70][3] = "Consultas ad-hoc.";
 answers[70] = choices[70][0];
 units[70] = "68";
 comments[70] = "Id Pregunta: 8963. ";


//  Id pregunta: 8981 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  &iquest;Qu&eacute; es Synaptics en el entorno Linux?";
 choices[71]= new Array();
 choices[71][0] = "Un editor de texto avanzado";
 choices[71][1] = "Un front-end del sistema de gesti&oacute;n de paquetes de software";
 choices[71][2] = "Un sistema de monitorizaci&oacute;n de recursos";
 choices[71][3] = "Un gestor de cuentas de usuario";
 answers[71] = choices[71][1];
 units[71] = "54";
 comments[71] = "Id Pregunta: 8981. ";


//  Id pregunta: 9114 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  &iquest;Qu&eacute; se entiende como flujo de instrucciones?";
 choices[72]= new Array();
 choices[72][0] = "Conjunto de instrucciones en paralelo que son ejecutadas por varios procesadores.";
 choices[72][1] = "Conjunto de instrucciones secuenciales que son ejecutadas entre varios procesadores";
 choices[72][2] = "Flujo secuencial de instrucciones requeridas por el flujo de datos";
 choices[72][3] = "Conjunto de instrucciones secuenciales ejecutadas por un &uacute;nico procesador.";
 answers[72] = choices[72][3];
 units[72] = "45";
 comments[72] = "Id Pregunta: 9114. ";


//  Id pregunta: 9127 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  La taxonom&iacute;a de Flynn clasifica los ordenadores en funci&oacute;n de";
 choices[73]= new Array();
 choices[73][0] = "la relaci&oacute;n mayor o menor entre memoria principal y almacenamiento externo";
 choices[73][1] = "el flujo que siguen los datos dentro de la m&aacute;quina y de las instrucciones sobre esos datos";
 choices[73][2] = "el m&eacute;todo de acceso a los dispositivos de almacenamiento externo";
 choices[73][3] = "la relaci&oacute;n entre la velocidad de acceso a datos seg&uacute;n est&eacute;n en memoria o almacenamiento externo";
 answers[73] = choices[73][1];
 units[73] = "45";
 comments[73] = "Id Pregunta: 9127. Examen TIC-A1 2011";


//  Id pregunta: 9131 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  Indique la frase correcta acerca de las arquitecturas de microprocesadores";
 choices[74]= new Array();
 choices[74][0] = "La arquitectura CISC es m&aacute;s moderna que la arquitectura RISC y busca ampliar el conjunto de instrucciones de &eacute;sta.";
 choices[74][1] = "La arquitectura RISC dispone de un n&uacute;mero reducido de instrucciones y gran variedad de registros de uso dedicado.";
 choices[74][2] = "La arquitectura RISC maneja instrucciones con forma to regular y complejos modos de direccionamiento";
 choices[74][3] = "La arquitectura CISC dispone de instrucciones complejas y dependiendo de ellas maneja diferentes longitues de palabra.";
 answers[74] = choices[74][3];
 units[74] = "46";
 comments[74] = "Id Pregunta: 9131. Examen TIC-A1 2011";


//  Id pregunta: 9138 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  &iquest;Cu&aacute;l no es una funci&oacute;n l&oacute;gica que suele integrar cualquiera de los chipsets actuales?";
 choices[75]= new Array();
 choices[75][0] = "soporte para el microprocesador";
 choices[75][1] = "Controlador de memoria (MMU, Memory Management Unit)";
 choices[75][2] = "Reloj de Tiempo Real (RTC)";
 choices[75][3] = "Controlador de temperatura.";
 answers[75] = choices[75][3];
 units[75] = "47";
 comments[75] = "Id Pregunta: 9138. ";


//  Id pregunta: 9150 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  &iquest;Qu&eacute; tipo de conexi&oacute;n inal&aacute;mbrica se suele distinguir en la conexi&oacute;n de los ratones al PC?";
 choices[76]= new Array();
 choices[76][0] = "Radio Frecuencia (banda de 5 Ghz), Infrarrojo, Bluetooth";
 choices[76][1] = "Radio Frecuencia (banda de 2,4 Ghz) e Infrarrojo.";
 choices[76][2] = "Radio Frecuencia (banda de 2,4 Ghz), Infrarrojo y Bluetooth.";
 choices[76][3] = "No se utilizan las conexiones inal&aacute;mbricas para los ratones al no considerarse suficientemente estables";
 answers[76] = choices[76][2];
 units[76] = "47";
 comments[76] = "Id Pregunta: 9150. ";


//  Id pregunta: 9159 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  No es una forma de presentar contenidos en un LMS:";
 choices[77]= new Array();
 choices[77][0] = "Estructura lineal";
 choices[77][1] = "Estructura matricial";
 choices[77][2] = "Estructura jer&aacute;rquica";
 choices[77][3] = "Estructura en red";
 answers[77] = choices[77][1];
 units[77] = "66";
 comments[77] = "Id Pregunta: 9159. ";


//  Id pregunta: 9246 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  &iquest;Qu&eacute; es ntoskrnl.exe?";
 choices[78]= new Array();
 choices[78][0] = "Un virus que tuvo mucha incidencia en equipos en el 2012.";
 choices[78][1] = "El n&uacute;cleo del sistema operativo Windows 7.";
 choices[78][2] = "Es el programa en modo Kernel NTOS";
 choices[78][3] = "Proporciona los nuevos interfaces de llamadas al sistema de Windows.";
 answers[78] = choices[78][2];
 units[78] = "56";
 comments[78] = "Id Pregunta: 9246. ";


//  Id pregunta: 9252 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  &iquest;Cu&aacute;l es la relaci&oacute;n entre trabajos, procesos, hilos y fibras en Windows?";
 choices[79]= new Array();
 choices[79][0] = "Los trabajos contienen procesos.";
 choices[79][1] = "Los procesos contienen hilos.";
 choices[79][2] = "Los hilos contienen fibras.";
 choices[79][3] = "Todas son correctas.";
 answers[79] = choices[79][3];
 units[79] = "56";
 comments[79] = "Id Pregunta: 9252. ";


//  Id pregunta: 9598 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  La arquitectura original de Linux es de tipo:";
 choices[80]= new Array();
 choices[80][0] = "Microkernel";
 choices[80][1] = "Monol&iacute;tica";
 choices[80][2] = "Modular";
 choices[80][3] = "H&iacute;brida";
 answers[80] = choices[80][1];
 units[80] = "53";
 comments[80] = "Id Pregunta: 9598. ";


//  Id pregunta: 9656 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  &iquest;Cu&aacute;l no es un requisitos de los MOOC (Massive Open Online Course)?";
 choices[81]= new Array();
 choices[81][0] = "Ser un curso";
 choices[81][1] = "Tener car&aacute;cter masivo";
 choices[81][2] = "Online";
 choices[81][3] = "Todas las anteriores";
 answers[81] = choices[81][3];
 units[81] = "66";
 comments[81] = "Id Pregunta: 9656. ";


//  Id pregunta: 9751 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  &iquest;Cu&aacute;l de las siguientes NO es una palabra reservada de MDX (MultiDimensional eXpressions) en SQL Server 2012?";
 choices[82]= new Array();
 choices[82][0] = "SELECT";
 choices[82][1] = "DRILL";
 choices[82][2] = "CUBE ";
 choices[82][3] = "MEMBER";
 answers[82] = choices[82][1];
 units[82] = "57";
 comments[82] = "Id Pregunta: 9751. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9784 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  En un documento XML los valores de un atributo:";
 choices[83]= new Array();
 choices[83][0] = "Deben ir siempre entre comillas.";
 choices[83][1] = "Deben ir entre comillas si no son n&uacute;meros o fechas.";
 choices[83][2] = "No deben ir entre comillas.";
 choices[83][3] = "Deben ir entre comillas si son n&uacute;meros o fechas.";
 answers[83] = choices[83][0];
 units[83] = "69";
 comments[83] = "Id Pregunta: 9784. Examen TIC A2 2013";


//  Id pregunta: 10014 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  El t&eacute;rmino anglosaj&oacute;n &quot;ACID&quot; relacionado con una transacci&oacute;n de base de datos se corresponde con las propiedades:";
 choices[84]= new Array();
 choices[84][0] = "Autentication, Consistency, Integrity, Durability.";
 choices[84][1] = "Atomicity, Confidentiality, Identification, Durability.";
 choices[84][2] = "Atomicity, Consistency, Isolation, Durability.";
 choices[84][3] = "Availability, Consistency, Isolation, Durability.";
 answers[84] = choices[84][2];
 units[84] = "57";
 comments[84] = "Id Pregunta: 10014. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10219 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Las variables declaradas en un interface deben ser:";
 choices[85]= new Array();
 choices[85][0] = "public, static y final";
 choices[85][1] = "private static y final";
 choices[85][2] = "S&oacute;lo protected";
 choices[85][3] = "En un interface no se deben incluir variables";
 answers[85] = choices[85][0];
 units[85] = "60";
 comments[85] = "Id Pregunta: 10219. NULL";


//  Id pregunta: 10280 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Se&ntilde;ale la afirmaci&oacute;n falsa en relaci&oacute;n a las redes neuronales";
 choices[86]= new Array();
 choices[86][0] = "Son un m&eacute;todo de representaci&oacute;n del conocimiento param&eacute;trico";
 choices[86][1] = "La unidad de representaci&oacute;n de m&aacute;s alto nivel es la neurona";
 choices[86][2] = "Las neuronas se conectan mediante arcos";
 choices[86][3] = "Las neuronas se agrupan en capas";
 answers[86] = choices[86][1];
 units[86] = "64";
 comments[86] = "Id Pregunta: 10280. NULL";


//  Id pregunta: 10462 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  Respecto a REST, indique qu&eacute; afirmaci&oacute;n es falsa:";
 choices[87]= new Array();
 choices[87][0] = "Permite una generalizaci&oacute;n de las interfaces entre recursos.";
 choices[87][1] = "Facilita el desarrollo de los clientes de los servicios.";
 choices[87][2] = "Su uso est&aacute; indicado para aplicaciones en las que la gesti&oacute;n del estado es compleja.";
 choices[87][3] = "La funcionalidad de las aplicaciones se representa mediante recursos.";
 answers[87] = choices[87][2];
 units[87] = "51";
 comments[87] = "Id Pregunta: 10462. ";


//  Id pregunta: 10473 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  Una CRL completa:";
 choices[88]= new Array();
 choices[88][0] = "Lista todos los certificados no expirados emitidos por la CA revocados por cualquier raz&oacute;n.";
 choices[88][1] = "Lista los certificados cuyo estado de revocaci&oacute;n ha cambiado desde la anterior CRL completa.";
 choices[88][2] = "Se emite con la periodicidad definida en la politica de actualizaciones, pero siempre que hayan transcurrido menos de 24 horas desde la &uacute;ltima emisi&oacute;n.";
 choices[88][3] = "Lista todos los certificados no expirados revocados por los motivos de revocaci&oacute;n dentro del alcance de la CRL.";
 answers[88] = choices[88][3];
 units[88] = "73";
 comments[88] = "Id Pregunta: 10473. ";


//  Id pregunta: 10616 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  El algoritmo Rijndael:";
 choices[89]= new Array();
 choices[89][0] = "Tiene un tama&ntilde;o de clave fijo de 128 bits.";
 choices[89][1] = "Tiene un tama&ntilde;o de bloque fijo de 256 bits.";
 choices[89][2] = "Tiene un tama&ntilde;o de clave de 128, 192 o 256 bits.";
 choices[89][3] = "Tiene un tama&ntilde;o de clave m&uacute;ltiplo de 32 bits.";
 answers[89] = choices[89][3];
 units[89] = "72";
 comments[89] = "Id Pregunta: 10616. AES tiene un tama&ntilde;o de clave de 128, 192 o 256 bits. Rijndael, en el que est&aacute; basado, tiene un tama&ntilde;o de clave m&uacute;ltiplo de 32 bits (m&iacute;nimo 128 bits y m&aacute;ximo 256 bits).";


//  Id pregunta: 10862 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  Seg&uacute;n la definici&oacute;n de DataWarehouse de William Inmon, se&ntilde;ale cu&aacute;l de las siguientes opciones NO es una caracter&iacute;stica de este tipo de sistemas:";
 choices[90]= new Array();
 choices[90][0] = "Integrado: los datos deben integrarse en una estructura consistente.";
 choices[90][1] = "Tem&aacute;tico: los datos se organizan por temas.";
 choices[90][2] = "Hist&oacute;rico: una variable puede tomar distintos valores en el tiempo.";
 choices[90][3] = "Vol&aacute;til: los datos no son permanentes en el sistema.";
 answers[90] = choices[90][3];
 units[90] = "68, 71";
 comments[90] = "Id Pregunta: 10862. Examen GSI 2014";


//  Id pregunta: 10887 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;Cu&aacute;l de los siguientes protocolos permite conocer en tiempo real si un certificado ha sido o no revocado?";
 choices[91]= new Array();
 choices[91][0] = "OCSP";
 choices[91][1] = "CRL";
 choices[91][2] = "PKCS#10";
 choices[91][3] = "HTTPS";
 answers[91] = choices[91][0];
 units[91] = "73, 74";
 comments[91] = "Id Pregunta: 10887. Examen GSI 2014";


//  Id pregunta: 10905 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  El lenguaje de consulta sobre RDF que permite hacer b&uacute;squedas sobre los recursos de la Web Sem&aacute;ntica utilizando distintas fuentes de datos es:";
 choices[92]= new Array();
 choices[92][0] = "OWL";
 choices[92][1] = "RQUERY";
 choices[92][2] = "JQUERY";
 choices[92][3] = "SPARQL";
 answers[92] = choices[92][3];
 units[92] = "69, 22";
 comments[92] = "Id Pregunta: 10905. Examen GSI 2014";


//  Id pregunta: 10987 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Al desarrollar una aplicaci&oacute;n para Android, respecto al fichero AndroidManifest.xml se&ntilde;ale la respuesta correcta:";
 choices[93]= new Array();
 choices[93][0] = "Debe renombrarse en el momento de la publicaci&oacute;n de la aplicaci&oacute;n en Google Play, con un identificador &uacute;nico.";
 choices[93][1] = "Declara los permisos que debe tener la aplicaci&oacute;n para acceder a las partes protegidas del API.";
 choices[93][2] = "Debe posicionarse en el directorio \etc\manifest.";
 choices[93][3] = "Establece las condiciones legales que el usuario debe aceptar para poder acceder a la aplicaci&oacute;n.";
 answers[93] = choices[93][1];
 units[93] = "60";
 comments[93] = "Id Pregunta: 10987. TIC A1 AGE 2014";


//  Id pregunta: 11149 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Qu&eacute; versi&oacute;n del PKCS define una interfaz para el acceso a dispositivos que contienen informaci&oacute;n criptogr&aacute;fica como Tokens o Tarjetas?";
 choices[94]= new Array();
 choices[94][0] = "PKCS 1";
 choices[94][1] = "PKCS 7";
 choices[94][2] = "PCKCS 9";
 choices[94][3] = "PKCS 11";
 answers[94] = choices[94][3];
 units[94] = "73";
 comments[94] = "Id Pregunta: 11149. ";


//  Id pregunta: 11223 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  En el Framework de .NET, los servicios web:";
 choices[95]= new Array();
 choices[95][0] = "Se definen en ficheros de extensi&oacute;n .asmx incluyendo la directiva WebService.";
 choices[95][1] = "ASP.NET no se puede integrar f&aacute;cilmente con tecnolog&iacute;as como AJAX para construir aplicaciones RIA.";
 choices[95][2] = "Los servicios Web WCF pueden ser SOAP o REST, aunque no soportan un formato no XML como JSON.";
 choices[95][3] = "Los servicios WCF (Windows Communication Foundation) siempre se ejecutan directamente sobre TCP.";
 answers[95] = choices[95][0];
 units[95] = "59";
 comments[95] = "Id Pregunta: 11223. ";


//  Id pregunta: 11299 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  De entre las siguientes, escoge la falsa en relaci&oacute;n con SQL:";
 choices[96]= new Array();
 choices[96][0] = "Las relaciones participantes en un producto cartesiano, deben tener el mismo grado.";
 choices[96][1] = "Para todas las operaciones de &aacute;lgebra relacional, las 2 relaciones deben tener el mismo grado, excepto en el producto cartesiano.";
 choices[96][2] = "El SQL es estandarizado por ISO/IEC JTC1 Subcomit&eacute; 21.";
 choices[96][3] = "En SQL embebido los c&oacute;digos de retorno con signo negativo son errores.";
 answers[96] = choices[96][0];
 units[96] = "58";
 comments[96] = "Id Pregunta: 11299. El producto cartesiano es la &uacute;nica operaci&oacute;n del &aacute;lgebra relacional, que no necesita que las relaciones tengan el mismo grado, es decir el mismo n&uacute;mero de columnas.";


//  Id pregunta: 11522 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Cu&aacute;l de las siguientes corresponde al Framework multimedia de KDE?";
 choices[97]= new Array();
 choices[97][0] = "Phonon";
 choices[97][1] = "Decibel";
 choices[97][2] = "Plasma";
 choices[97][3] = "Ninguna de las afirmaciones restantes.";
 answers[97] = choices[97][0];
 units[97] = "54";
 comments[97] = "Id Pregunta: 11522. NULL";


//  Id pregunta: 11529 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Cu&aacute;l de las siguientes no es una caracter&iacute;stica esencial de los sistemas de altas prestaciones?";
 choices[98]= new Array();
 choices[98][0] = "Arquitectura altamente paralela.";
 choices[98][1] = "Gran capacidad de c&oacute;mputo.";
 choices[98][2] = "Tiempo compartido.";
 choices[98][3] = "Elevado coste.";
 answers[98] = choices[98][2];
 units[98] = "45";
 comments[98] = "Id Pregunta: 11529. NULL";


//  Id pregunta: 11618 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Un ejemplo de cliente de correo electr&oacute;nico de SW libre es:";
 choices[99]= new Array();
 choices[99][0] = "Amarok";
 choices[99][1] = "Firefox";
 choices[99][2] = "KeePass";
 choices[99][3] = "Thunderbird";
 answers[99] = choices[99][3];
 units[99] = "62";
 comments[99] = "Id Pregunta: 11618. ";


