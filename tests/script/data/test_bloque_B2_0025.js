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

//  Id pregunta: 684 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  El informe WITSA se refiere a:";
 choices[0]= new Array();
 choices[0][0] = "Gobierno y Administraci&oacute;n electr&oacute;nica";
 choices[0][1] = "Evoluci&oacute;n de la I+D en cada pa&iacute;s";
 choices[0][2] = "Implantaci&oacute;n de las tecnolog&iacute;as de banda ancha inal&aacute;mbricas en cada pa&iacute;s";
 choices[0][3] = "No existe tal informe";
 answers[0] = choices[0][0];
 units[0] = "44";
 comments[0] = "Id Pregunta: 684. ";


//  Id pregunta: 756 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  Respecto a los &quot;web services&quot;, &iquest;cu&aacute;l de las siguientes afirmaciones es falsa?";
 choices[1]= new Array();
 choices[1][0] = "Se describen mediante el lenguaje WSDL";
 choices[1][1] = "Para usarlos han de publicarse siempre en un registro UDDI";
 choices[1][2] = "Pueden interaccionar clientes  y servicios de distintas tecnolog&iacute;as";
 choices[1][3] = "Utilizan el protocolo SOAP";
 answers[1] = choices[1][1];
 units[1] = "51";
 comments[1] = "Id Pregunta: 756. NULL";


//  Id pregunta: 757 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  &iquest;De las siguientes API's cual no es un API de desarrollo de tarjetas inteligentes?";
 choices[2]= new Array();
 choices[2][0] = "CryptoAPI";
 choices[2][1] = "PKCS#7";
 choices[2][2] = "PKCS#11";
 choices[2][3] = "JCE/JCA";
 answers[2] = choices[2][1];
 units[2] = "74";
 comments[2] = "Id Pregunta: 757. NULL";


//  Id pregunta: 798 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;Qu&eacute; tienen en com&uacute;n Sony, Philips, Nokia, Panasonic, HP y Microsoft?:";
 choices[3]= new Array();
 choices[3][0] = "Fueron las &uacute;nicas multinacionales en el sector TIC con beneficios en 2002";
 choices[3][1] = "Todas se caracterizan por su pol&iacute;tica monopol&iacute;stica";
 choices[3][2] = "Todas fabrican perif&eacute;ricos m&oacute;viles ";
 choices[3][3] = "Todas pertenecen, entre otras, al DHWG (Digital Home Working Group)";
 answers[3] = choices[3][3];
 units[3] = "48";
 comments[3] = "Id Pregunta: 798. ";


//  Id pregunta: 843 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre ingenier&iacute;a del conocimiento es falsa?:";
 choices[4]= new Array();
 choices[4][0] = "S&oacute;lo trata problemas de tipo heur&iacute;stico";
 choices[4][1] = "No utiliza enfoques algor&iacute;tmicos";
 choices[4][2] = "Requiere una estructura eminentemente declarativa";
 choices[4][3] = "Los programas que generan son primordialmente procedimentales";
 answers[4] = choices[4][3];
 units[4] = "64";
 comments[4] = "Id Pregunta: 843. ";


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


//  Id pregunta: 900 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Es posible averiguar el peso de un cuerpo a partir de una imagen o conjunto de im&aacute;genes?:";
 choices[6]= new Array();
 choices[6][0] = "No, ya que faltan magnitudes que no pueden obtenerse de una imagen.";
 choices[6][1] = "No, ya que aunque se dispongan de todos los datos el peso no se relaciona en nada con sus dimensiones.";
 choices[6][2] = "S&iacute;, mediante sencillos c&aacute;lculos aritm&eacute;ticos sobre los p&iacute;xeles, viendo c&oacute;mo var&iacute;a su tonalidad.";
 choices[6][3] = "S&iacute;, mediante t&eacute;cnicas de triangulaci&oacute;n y de c&aacute;lculo de tiempos de vuelo de se&ntilde;ales sonda se obtienen las dimensiones (por consiguiente el volumen), y mediante las im&aacute;genes de c&aacute;maras infrarrojas su densidad, obteniendo a partir de estas 2 magnitudes el peso.";
 answers[6] = choices[6][3];
 units[6] = "67";
 comments[6] = "Id Pregunta: 900. NULL";


//  Id pregunta: 914 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Qu&eacute; diferencia hay entre las arquitecturas peer-to-peer y cliente/servidor?:";
 choices[7]= new Array();
 choices[7][0] = "En una arquitectura peer-to-peer un PC puede actuar simult&aacute;neamente como servidor y cliente";
 choices[7][1] = "En una arquitectura peer-to-peer las aplicaciones residen completamente en cada ordenador";
 choices[7][2] = "En una arquitectura cliente/servidor s&oacute;lo la presentaci&oacute;n reside en el cliente";
 choices[7][3] = "No hay diferencia; son la misma arquitectura";
 answers[7] = choices[7][0];
 units[7] = "50";
 comments[7] = "Id Pregunta: 914. ";


//  Id pregunta: 916 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Qu&eacute; es 'slice &amp; dice'?";
 choices[8]= new Array();
 choices[8][0] = "Una utilidad de las hojas de c&aacute;lculo para seleccionar filas y columnas.";
 choices[8][1] = "Una t&eacute;cnica OLAP que permite obtener subconjuntos de las vistas multidimensionales.";
 choices[8][2] = "Una t&eacute;cnica de representaci&oacute;n gr&aacute;fica de un sistema de informaci&oacute;n geogr&aacute;fica de acuerdo al modelo r&aacute;ster.";
 choices[8][3] = "Una t&eacute;cnica para redistribuir los flujos convergentes en un sistema de workflow.";
 answers[8] = choices[8][1];
 units[8] = "68";
 comments[8] = "Id Pregunta: 916. ";


//  Id pregunta: 921 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Qu&eacute; es el 'swapping'?:";
 choices[9]= new Array();
 choices[9][0] = "Un algoritmo para planificaci&oacute;n del uso de la CPU";
 choices[9][1] = "Un mecanismo para mover procesos de ejecuci&oacute;n desde/hacia la memoria principal a/desde disco respectivamente";
 choices[9][2] = "Un tipo especial de organizaci&oacute;n de los sistemas de ficheros";
 choices[9][3] = "El tiempo medio necesario para mover un programa desde disco a la memoria principal";
 answers[9] = choices[9][1];
 units[9] = "52";
 comments[9] = "Id Pregunta: 921. ";


//  Id pregunta: 931 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Qu&eacute; es un applet de Java?:";
 choices[10]= new Array();
 choices[10][0] = "Una aplicaci&oacute;n escrita en Java";
 choices[10][1] = "Un control ActiveX";
 choices[10][2] = "Un programa de Java incrustado en una p&aacute;gina HTML";
 choices[10][3] = "Ninguna de las anteriores";
 answers[10] = choices[10][2];
 units[10] = "60";
 comments[10] = "Id Pregunta: 931. Se especifica en la pregunta que sea de Java, porque Flash tambi&eacute;n es un applet";


//  Id pregunta: 943 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  &iquest;Qu&eacute; servicio proporciona a los usuarios el servicio de directorio X.500?:";
 choices[11]= new Array();
 choices[11][0] = "Dar facilidades para consultar informaci&oacute;n acerca de objetos accesibles en una red";
 choices[11][1] = "Facilitar direcciones y nombre de usuarios accesibles en una red";
 choices[11][2] = "Realizar las funciones de direccionamiento y nomenclatura de usuarios de un sistema de tratamiento de mensajes seg&uacute;n la norma X.400";
 choices[11][3] = "Controlar las peticiones de registro de usuario por medio de agentes de sistema (DSA) y mantenimiento de la base de informaci&oacute;n de directorio (DIB)";
 answers[11] = choices[11][0];
 units[11] = "72";
 comments[11] = "Id Pregunta: 943. ";


//  Id pregunta: 982 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Dentro de la Inteligencia Artificial Distribuir&aacute;n indicar qu&eacute; significan las siglas KIF:";
 choices[12]= new Array();
 choices[12][0] = "Knowledge Interchange File";
 choices[12][1] = "Knowledge Intermediate Format";
 choices[12][2] = "Knowledge Intermediate File";
 choices[12][3] = "Knowledge Interchange Format";
 answers[12] = choices[12][3];
 units[12] = "63";
 comments[12] = "Id Pregunta: 982. ";


//  Id pregunta: 1050 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  El Registro de Instrucciones es un &oacute;rgano de control del procesador que sirve para:";
 choices[13]= new Array();
 choices[13][0] = "Llevar el control de las instrucciones m&aacute;quina que se van ejecutando";
 choices[13][1] = "Almacenar la instrucci&oacute;n que se ha de decodificar y ejecutar";
 choices[13][2] = "Es un contador que se va incrementado con los pulsos del reloj maestro";
 choices[13][3] = "Almacenar la direcci&oacute;n de la instrucci&oacute;n que se va a ejecutar";
 answers[13] = choices[13][1];
 units[13] = "47";
 comments[13] = "Id Pregunta: 1050. ";


//  Id pregunta: 1078 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  En el editor vi de Unix para escribir el fichero que se est&aacute; editando y salir se utiliza el mandato:";
 choices[14]= new Array();
 choices[14][0] = "ww";
 choices[14][1] = "zz";
 choices[14][2] = "Ctrl + w (presionar simult&aacute;neamente la tecla Control y la w)";
 choices[14][3] = "F10 (la tecla de funci&oacute;n F10)";
 answers[14] = choices[14][1];
 units[14] = "54";
 comments[14] = "Id Pregunta: 1078. Tambi&eacute;n se puede utilizar :wq";


//  Id pregunta: 1122 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  En los m&eacute;todos de b&uacute;squeda heur&iacute;stica:";
 choices[15]= new Array();
 choices[15][0] = "El proceso de soluci&oacute;n se plantea como la b&uacute;squeda de estados que contiene todas las posibles soluciones";
 choices[15][1] = "Las estrategias de b&uacute;squeda en anchura pertenecen a la heur&iacute;stica deductiva";
 choices[15][2] = "La amplitud del espacio de estados en un problema dado, dif&iacute;cilmente puede dar lugar a una explosi&oacute;n combinatoria al tratar de enumerar todas las posibilidades";
 choices[15][3] = "En un caso extremo, una b&uacute;squeda ciega (sin funci&oacute;n heur&iacute;stica), obligar&aacute; a realizar una exploraci&oacute;n exhaustiva (en anchura o en profundidad)";
 answers[15] = choices[15][3];
 units[15] = "63";
 comments[15] = "Id Pregunta: 1122. ";


//  Id pregunta: 1123 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  En los ordenadores, por lo general, los programas que realizan tareas de arranque de la m&aacute;quina y de diagn&oacute;sticos se almacenan en:";
 choices[16]= new Array();
 choices[16][0] = "RAM";
 choices[16][1] = "ROM";
 choices[16][2] = "memoria interna del procesador";
 choices[16][3] = "disco duro asociado a la UAL y la UC";
 answers[16] = choices[16][1];
 units[16] = "47";
 comments[16] = "Id Pregunta: 1123. ";


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


//  Id pregunta: 1168 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Entre las operaciones de desplazamiento existe la de desplazamiento l&oacute;gico, que consiste en:";
 choices[18]= new Array();
 choices[18][0] = "Los bits desplazados por un extremo se insertan por el otro.";
 choices[18][1] = "Los bits reemplazos son sustituidos por bits iguales al m&aacute;s cercano.";
 choices[18][2] = "Es igual a del desplazamiento aritm&eacute;tico.";
 choices[18][3] = "Ninguna de las respuestas anteriores es correcta.";
 answers[18] = choices[18][3];
 units[18] = "";
 comments[18] = "Id Pregunta: 1168. ";


//  Id pregunta: 1196 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  Java EE es:";
 choices[19]= new Array();
 choices[19][0] = "Un producto";
 choices[19][1] = "Un servicio";
 choices[19][2] = "Un conjunto de especificaciones";
 choices[19][3] = "Nada de lo anterior";
 answers[19] = choices[19][2];
 units[19] = "60.116";
 comments[19] = "Id Pregunta: 1196. NULL";


//  Id pregunta: 1279 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Los procedimientos b&aacute;sicos para realizar una transferencia elemental entre la UCP y un perif&eacute;rico son:";
 choices[20]= new Array();
 choices[20][0] = "E/S programada, acceso directo a memoria y canal de E/S";
 choices[20][1] = "E/S programada, interrupciones y acceso directo a memoria";
 choices[20][2] = "Memoria multipuerta y robo de ciclo";
 choices[20][3] = "Canal selector para perif&eacute;ricos r&aacute;pidos y canal multiplexor para perif&eacute;ricos lentos";
 answers[20] = choices[20][1];
 units[20] = "47";
 comments[20] = "Id Pregunta: 1279. ";


//  Id pregunta: 1281 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  Los programas fuente Java:";
 choices[21]= new Array();
 choices[21][0] = "Se compilan siempre";
 choices[21][1] = "Nunca se compilan, excepto para las m&aacute;quinas con procesador Java";
 choices[21][2] = "Siempre se interpretan para que puedan ejecutarse en m&aacute;quinas con diferente procesador, excepto para las m&aacute;quinas con procesador Java en que son ejecutables directamente";
 choices[21][3] = "Hay partes compiladas y partes interpretadas";
 answers[21] = choices[21][0];
 units[21] = "60";
 comments[21] = "Id Pregunta: 1281. Siempre se compilan a Bytecode.";


//  Id pregunta: 1286 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Los tipos de entidad dentro de un modelo entidad/asociaci&oacute;n son: ";
 choices[22]= new Array();
 choices[22][0] = "Regulares y d&eacute;biles";
 choices[22][1] = "Regulares e irregulares";
 choices[22][2] = "Externas, internas, regulares y d&eacute;biles";
 choices[22][3] = "Ninguna de las anteriores.";
 answers[22] = choices[22][0];
 units[22] = "58";
 comments[22] = "Id Pregunta: 1286. ";


//  Id pregunta: 1301 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Para prestaciones, capacidades y funcionalidades equivalentes entre Linux y Windows XP, &iquest;qu&eacute; afirmaci&oacute;n es cierta?:";
 choices[23]= new Array();
 choices[23][0] = "Un PC con Linux necesita m&aacute;s memoria que uno con Windows XP";
 choices[23][1] = "Un PC con Linux necesita aproximadamente la misma memoria que uno con Windows XP";
 choices[23][2] = "Un PC con Linux necesita menos memoria que uno con Windows XP";
 choices[23][3] = "Linux no puede instalarse en PCs";
 answers[23] = choices[23][2];
 units[23] = "53,56";
 comments[23] = "Id Pregunta: 1301. ";


//  Id pregunta: 1316 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Respecto a las memorias RAM:";
 choices[24]= new Array();
 choices[24][0] = "las RAM est&aacute;ticas no son m&aacute;s r&aacute;pidas que las din&aacute;micas";
 choices[24][1] = "SDRAM (Synchronous Dynamic) es generalmente m&aacute;s r&aacute;pida que EDORAM (Extended Data Output)";
 choices[24][2] = "las RAM no pueden ser usadas para simular discos duros debido a su velocidad de acceso";
 choices[24][3] = "las PBSRAM (pipeline burst static) no pueden proporcionar acceso simult&aacute;neo por la propia concepci&oacute;n de la m&aacute;quina de Von Neumann ";
 answers[24] = choices[24][1];
 units[24] = "47";
 comments[24] = "Id Pregunta: 1316. ";


//  Id pregunta: 1334 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Se puede decir que una base de datos es:";
 choices[25]= new Array();
 choices[25][0] = "Un elemento f&iacute;sico (hardware)";
 choices[25][1] = "Un dispositivo de almacenamiento";
 choices[25][2] = "Un conjunto de datos interrelacionados";
 choices[25][3] = "Una colecci&oacute;n de ficheros independientes entre s&iacute;";
 answers[25] = choices[25][2];
 units[25] = "57";
 comments[25] = "Id Pregunta: 1334. ";


//  Id pregunta: 1337 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  Seg&uacute;n el est&aacute;ndar SQL, una transacci&oacute;n es una secuencia de operaciones que:";
 choices[26]= new Array();
 choices[26][0] = "Se inicia con una sentencia BEGIN TRANSACTION y termina con una sentencia END TRANSACTION";
 choices[26][1] = "Si se termina con un sentencia ROLLBACK, todos los cambios realizados por las diferentes transacciones desde el inicio de la sesi&oacute;n son cancelados";
 choices[26][2] = "Puede iniciarse con la ejecuci&oacute;n de una sentencia DML y se finaliza con una sentencia COMMIT o ROLLBACK";
 choices[26][3] = "Si no finaliza con una sentencia COMMIT, el sistema debe devolver un mensaje de error";
 answers[26] = choices[26][2];
 units[26] = "58";
 comments[26] = "Id Pregunta: 1337. ";


//  Id pregunta: 1352 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  Se&ntilde;ale la respuesta falsa. El sistema de ficheros en Unix:";
 choices[27]= new Array();
 choices[27][0] = "Est&aacute; formado por i-nodos";
 choices[27][1] = "Se utiliza para acceder a los perif&eacute;ricos";
 choices[27][2] = "Tiene una estructura no basada en jerarqu&iacute;as";
 choices[27][3] = "Est&aacute; basado en listas enlazadas, con varios niveles de indireccion";
 answers[27] = choices[27][2];
 units[27] = "53";
 comments[27] = "Id Pregunta: 1352. ";


//  Id pregunta: 1407 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  Una asociaci&oacute;n entre entidades es reflexiva cuando:";
 choices[28]= new Array();
 choices[28][0] = "El n&uacute;mero de entidades que participan en la asociaci&oacute;n es mayor que 2";
 choices[28][1] = "La cardinalidad de la asociaci&oacute;n es l";
 choices[28][2] = "Tiene &uacute;nicamente un atributo principal como clave";
 choices[28][3] = "Una entidad se relaciona con ella misma";
 answers[28] = choices[28][3];
 units[28] = "58";
 comments[28] = "Id Pregunta: 1407. ";


//  Id pregunta: 1438 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  &iquest;Qu&eacute; es una API?:";
 choices[29]= new Array();
 choices[29][0] = "Entorno de desarrollo que permite la compatibilidad binaria entre m&aacute;quinas";
 choices[29][1] = "Una herramienta CASE que facilita el desarrollo de aplicaciones";
 choices[29][2] = "Monitor est&aacute;ndar de transacciones en el sistema operativo Unix";
 choices[29][3] = "Application Programming Interface: Interfaz de la aplicaci&oacute;n con otros componentes software, por ejemplo con el sistema operativo o con el interfaz gr&aacute;fico";
 answers[29] = choices[29][3];
 units[29] = "55";
 comments[29] = "Id Pregunta: 1438. ";


//  Id pregunta: 1469 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  Los c&oacute;decs DivX permiten:";
 choices[30]= new Array();
 choices[30][0] = "Escuchar la radio en un PC";
 choices[30][1] = "Ver la TV en un PC";
 choices[30][2] = "Conectar cualquier dispositivo Bluetooth a un PC";
 choices[30][3] = "Ver v&iacute;deos en un PC";
 answers[30] = choices[30][3];
 units[30] = "48";
 comments[30] = "Id Pregunta: 1469. ";


//  Id pregunta: 1525 AÃ±o de creación de pregunta: 2003-01-01
 questions[31]= "32)  Dentro de las t&eacute;cnicas de representaci&oacute;n del conocimiento indicar a que modelo pertenecen los algoritmos gen&eacute;ticos";
 choices[31]= new Array();
 choices[31][0] = "Modelo Simb&oacute;lico";
 choices[31][1] = " Modelo de conocimiento profundo";
 choices[31][2] = " Modelo Param&eacute;trico";
 choices[31][3] = "Razonamiento multinivel";
 answers[31] = choices[31][2];
 units[31] = "64";
 comments[31] = "Id Pregunta: 1525. ";


//  Id pregunta: 1568 AÃ±o de creación de pregunta: 2003-01-01
 questions[32]= "33)  &iquest;C&uacute;al no es una funci&oacute;n de Workflow?";
 choices[32]= new Array();
 choices[32][0] = "Enrutamiento";
 choices[32][1] = "Asignaci&oacute;n de responsabilidades";
 choices[32][2] = "Generaci&oacute;n de formularios ";
 choices[32][3] = "Gesti&oacute;n de procedimiento";
 answers[32] = choices[32][2];
 units[32] = "71";
 comments[32] = "Id Pregunta: 1568. ";


//  Id pregunta: 1570 AÃ±o de creación de pregunta: 2013-01-01
 questions[33]= "34)  &iquest;Cu&aacute;ntos dispositivos se pueden conectar simult&aacute;neamente a un puerto USB versi&oacute;n 3?:";
 choices[33]= new Array();
 choices[33][0] = "63.";
 choices[33][1] = "127.";
 choices[33][2] = "256.";
 choices[33][3] = " 1024.";
 answers[33] = choices[33][1];
 units[33] = "47";
 comments[33] = "Id Pregunta: 1570. Similar Junta Andaluc&iacute;a";


//  Id pregunta: 1594 AÃ±o de creación de pregunta: 2003-01-01
 questions[34]= "35)  En los GIS, el formato empleado para almacenamiento de la informaci&oacute;n gr&aacute;fica mediante la t&eacute;cnica de descomponer cada objeto en una matriz de celdas de id&eacute;ntico tama&ntilde;o (pixel) se corresponde con el formato:";
 choices[34]= new Array();
 choices[34][0] = "Vectorial.";
 choices[34][1] = "Shape.";
 choices[34][2] = "Mapa de bits.";
 choices[34][3] = "R&aacute;ster.";
 answers[34] = choices[34][3];
 units[34] = "67";
 comments[34] = "Id Pregunta: 1594. Junta Andaluc&iacute;a";


//  Id pregunta: 1625 AÃ±o de creación de pregunta: 2003-01-01
 questions[35]= "36)  Si en un texto de inform&aacute;tica encontr&aacute;ramos la expresi&oacute;n &quot;memoria de ferrita&rdquo;, sabr&iacute;amos que estamos leyendo un libro de:";
 choices[35]= new Array();
 choices[35][0] = "Dispositivos optoelectr&oacute;nicos.";
 choices[35][1] = "Historia de la inform&aacute;tica.";
 choices[35][2] = "Dispositivos perif&eacute;ricos.";
 choices[35][3] = " Inteligencia artificial.";
 answers[35] = choices[35][1];
 units[35] = "47";
 comments[35] = "Id Pregunta: 1625. Junta Andaluc&iacute;a";


//  Id pregunta: 1660 AÃ±o de creación de pregunta: 2004-01-01
 questions[36]= "37)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es falsa:";
 choices[36]= new Array();
 choices[36][0] = "Los servicios OLAP son una herramienta de proceso anal&iacute;tico en l&iacute;nea.";
 choices[36][1] = "Pertenece al dominio de los almacenes de datos y se encuentra dentro del &aacute;mbito,  m&aacute;s amplio, de los sistemas de toma de decisiones (DSS) y de los sistemas de informaci&oacute;n ejecutiva (EIS).";
 choices[36][2] = "Una de sus principales metas es incrementar la velocidad de recuperaci&oacute;n de datos.";
 choices[36][3] = "Los servicios OLAP son una herramienta de proceso transaccional en l&iacute;nea.";
 answers[36] = choices[36][3];
 units[36] = "68";
 comments[36] = "Id Pregunta: 1660. MAP-B 2003";


//  Id pregunta: 1790 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  Se&ntilde;ale de qu&eacute; etapa del desarrollo de la inteligencia artifical son propias las t&eacute;cnicas de b&uacute;squeda heur&iacute;stica";
 choices[37]= new Array();
 choices[37][0] = "Difusi&oacute;n actual";
 choices[37][1] = "Etapa de prototipos";
 choices[37][2] = "Sistemas expertos";
 choices[37][3] = "Etapa inicial";
 answers[37] = choices[37][0];
 units[37] = "63";
 comments[37] = "Id Pregunta: 1790. ";


//  Id pregunta: 1807 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  Se&ntilde;ale la opci&oacute;n que enumera tres de las especificaciones m&aacute;s robustas en el sector del e-learning";
 choices[38]= new Array();
 choices[38][0] = "AICC, IMS y SCORM";
 choices[38][1] = "AICC, EL-XML y SCORM";
 choices[38][2] = "ELEARN, FCC y SCORM";
 choices[38][3] = "SCORM, ELEARN y AICC";
 answers[38] = choices[38][0];
 units[38] = "66";
 comments[38] = "Id Pregunta: 1807. ";


//  Id pregunta: 1811 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  Google Earth es un sistema que permite el acceso a informaci&oacute;n geogr&aacute;fica, y que emplea un modelo de datos:";
 choices[39]= new Array();
 choices[39][0] = "&Uacute;nicamente r&aacute;ster.";
 choices[39][1] = "R&aacute;ster y vectorial.";
 choices[39][2] = "&Uacute;nicamente vectorial.";
 choices[39][3] = "Representaci&oacute;n de tipo streaming.";
 answers[39] = choices[39][1];
 units[39] = "67";
 comments[39] = "Id Pregunta: 1811. NULL";


//  Id pregunta: 1870 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  La firma electr&oacute;nica avanzada es aquella que cumple que:";
 choices[40]= new Array();
 choices[40][0] = "Est&aacute; vinculada al firmante de manera &uacute;nica, permite su identificaci&oacute;n y est&aacute; creada por un dispositivo de control de firma seguro.";
 choices[40][1] = "Est&aacute; vinculada al firmante de manera &uacute;nica, permite su identificaci&oacute;n, est&aacute; creada por un dispositivo de control de firma seguro, tiene control exclusivo del firmante al crearla y no est&aacute; vinculada a los datos.";
 choices[40][2] = "Est&aacute; vinculada al firmante de manera &uacute;nica, permite su identificaci&oacute;n, tiene control exclusivo del firmante al crearla y est&aacute; vinculada a los datos.";
 choices[40][3] = "Est&aacute; vinculada al firmante de manera &uacute;nica, permite su identificaci&oacute;n, tiene control exclusivo de firmante al crearla y est&aacute; basada en un certificado reconocido.";
 answers[40] = choices[40][2];
 units[40] = "30";
 comments[40] = "Id Pregunta: 1870. Ley 59/2003, art&iacute;culo 3";


//  Id pregunta: 1918 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  Marque cu&aacute;l de las siguientes afirmaciones es cierta con respecto al sistema de ficheros en red NFS";
 choices[41]= new Array();
 choices[41][0] = "Proporciona una visi&oacute;n id&eacute;ntica del espacio de nombres para todos los usuarios del sistema con independencia de su localizaci&oacute;n";
 choices[41][1] = "Una vez realizado el montaje remoto, proporciona transparencia de la localizaci&oacute;n en el nombrado de ficheros";
 choices[41][2] = "Proporciona una sem&aacute;ntica igual a la que ofrece el sistema Unix en el acceso concurrente a los ficheros";
 choices[41][3] = "Proporciona transparencia de la replicaci&oacute;n";
 answers[41] = choices[41][1];
 units[41] = "53";
 comments[41] = "Id Pregunta: 1918. ";


//  Id pregunta: 1920 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  &iquest;Cu&aacute;l de los siguientes modelos de ciclo de vida del software favorece la reutilizaci&oacute;n del software existente?";
 choices[42]= new Array();
 choices[42][0] = "Modelo en cascada";
 choices[42][1] = "Modelo de prototipado";
 choices[42][2] = "Modelo de transformaci&oacute;n";
 choices[42][3] = "Modelo en espiral";
 answers[42] = choices[42][3];
 units[42] = "76";
 comments[42] = "Id Pregunta: 1920. ";


//  Id pregunta: 1942 AÃ±o de creación de pregunta: 2006-01-01
 questions[43]= "44)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es correcta con respecto a los procesos arrancados por el superusuario (root) en un sistema operativo Linux";
 choices[43]= new Array();
 choices[43][0] = "Su c&oacute;digo se ejecuta con el procesador en modo n&uacute;cleo (kernel)";
 choices[43][1] = "Pueden ejecutarse con menos prioridad de planificaci&oacute;n que un proceso de usuario normal";
 choices[43][2] = "Tiene acceso directo a los dispositivos de E/S";
 choices[43][3] = "Acceden directamente al mapa de memoria de otros procesos";
 answers[43] = choices[43][1];
 units[43] = "54";
 comments[43] = "Id Pregunta: 1942. ";


//  Id pregunta: 4312 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  Identifique cu&aacute;l de las siguientes alternativas sobre lenguajes de comandos o de control de &oacute;rdenes del Sistema UNIX es correcta:";
 choices[44]= new Array();
 choices[44][0] = "Bourne Shell (desarrollado por AT&amp;T).";
 choices[44][1] = "Korn Shell (desarrollado por Berkeley y Korn).";
 choices[44][2] = "C Shell (desarrollado por AT&amp;T)";
 choices[44][3] = "Korn Shell (desarrollado por Korn).";
 answers[44] = choices[44][0];
 units[44] = "54";
 comments[44] = "Id Pregunta: 4312. ";


//  Id pregunta: 4412 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  En el campo de la evaluaci&oacute;n de la seguridad de los sistemas de informaci&oacute;n, destacan los criterios TCSEC Indique cu&aacute;l es el nivel de protecci&oacute;n obligatoria conocido como &ldquo;Dominios de Seguridad&rdquo;:";
 choices[45]= new Array();
 choices[45][0] = "D";
 choices[45][1] = "C";
 choices[45][2] = "B1";
 choices[45][3] = "B3";
 answers[45] = choices[45][3];
 units[45] = "";
 comments[45] = "Id Pregunta: 4412. ";


//  Id pregunta: 4457 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  Para usar la utilidad &quot;Shadow Copies for Shared Folders&quot; en un sistema Windows Server 2003 R2 se necesita";
 choices[46]= new Array();
 choices[46][0] = "Un volumen FAT.";
 choices[46][1] = "Un volumen NTFS dedicado en exclusiva a esta funci&oacute;n.";
 choices[46][2] = "Un volumen FAT dedicado en exclusiva a esta funci&oacute;n.";
 choices[46][3] = "Un volumen NTFS";
 answers[46] = choices[46][3];
 units[46] = "56";
 comments[46] = "Id Pregunta: 4457. ";


//  Id pregunta: 4565 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  &iquest;Cual de las siguientes no es una distribuci&oacute;n comercial de Linux?:";
 choices[47]= new Array();
 choices[47][0] = "Debian";
 choices[47][1] = "Red Hat";
 choices[47][2] = "SuSE";
 choices[47][3] = "Caldera";
 answers[47] = choices[47][0];
 units[47] = "53";
 comments[47] = "Id Pregunta: 4565. ";


//  Id pregunta: 4904 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones corresponde a una de las caracter&iacute;sticas de los procesadores paralelos (MIMD):";
 choices[48]= new Array();
 choices[48][0] = "Todas las unidades de ejecuci&oacute;n paralela est&aacute;n sincronizadas y todas responden a una sola instrucci&oacute;n que emana de un &uacute;nico contador de programa.";
 choices[48][1] = "Una memoria central contiene los programas y una unidad de control centralizada se encarga de extraer cada instrucci&oacute;n y ejecutarla.";
 choices[48][2] = "Son &uacute;tiles para las operaciones que repiten los mismos c&aacute;lculos en un conjunto de datos (vectores).";
 choices[48][3] = "Se trata de un grupo de procesadores independientes cada uno de ellos con su propio contador de programa y sus propios datos.";
 answers[48] = choices[48][3];
 units[48] = "45";
 comments[48] = "Id Pregunta: 4904. Examen TIC B 2007";


//  Id pregunta: 4987 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  De acuerdo con el modelo de arquitectura de seguridad de OSI, definido en la norma ISO/IEC 7498-2, indique cu&aacute;lde las siguientes afirmaciones es correcta:";
 choices[49]= new Array();
 choices[49][0] = "Un mecanismo de seguridad puede ser suministrado por varios servicios de seguridad";
 choices[49][1] = "Cada servicio de seguridad debe ser suministrado por el mecanismo correspondiente";
 choices[49][2] = "Todos los mecanismos de seguridad que se definen en el modelo se basan en algoritmos criptogr&aacute;ficos";
 choices[49][3] = "Un mismo servicio de seguridad puede ser suministrado por varios mecanismos de seguridad";
 answers[49] = choices[49][3];
 units[49] = "74";
 comments[49] = "Id Pregunta: 4987. Examen TIC A 2007";


//  Id pregunta: 4998 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  Indique cu&aacute;l de las siguientes afirmaciones es incorrecta en relaci&oacute;n con la m&aacute;quina virtual de Java:";
 choices[50]= new Array();
 choices[50][0] = "La implementaci&oacute;n de la m&aacute;quina virtual de Java es independiente de la plataforma sobre la que se ejecute";
 choices[50][1] = "La principal ventaja que aporta es la portabilidad de las aplicaciones escritas en Java entre diferentesplataformas";
 choices[50][2] = "Existen versiones de m&aacute;quina virtual implantadas por hardware";
 choices[50][3] = "El c&oacute;digo que ejecuta la m&aacute;quina virtual se llama &quot;Java Bytecode&quot;";
 answers[50] = choices[50][0];
 units[50] = "60";
 comments[50] = "Id Pregunta: 4998. Examen TIC A 2007";


//  Id pregunta: 5069 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  &iquest;Cu&aacute;l de las siguientes aplicaciones de software libre se utiliza para la edici&oacute;n de im&aacute;genes?:";
 choices[51]= new Array();
 choices[51][0] = "GIMP";
 choices[51][1] = "Jetspeed";
 choices[51][2] = "Konqueror";
 choices[51][3] = "Eclipse";
 answers[51] = choices[51][0];
 units[51] = "62";
 comments[51] = "Id Pregunta: 5069. Examen TIC A 2007";


//  Id pregunta: 5123 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  &iquest;Qu&eacute; tipo de driver JDBC es aquel que convierte las llamadas JDBC a llamadas nativas de la base de datos?";
 choices[52]= new Array();
 choices[52][0] = "Tipo 1";
 choices[52][1] = "Tipo 2";
 choices[52][2] = "Tipo 3";
 choices[52][3] = "Tipo 4";
 answers[52] = choices[52][1];
 units[52] = "60";
 comments[52] = "Id Pregunta: 5123. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5451 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  The Bourne-again shell (bash) ";
 choices[53]= new Array();
 choices[53][0] = "es conocido como el shell original de UNIX";
 choices[53][1] = "combina buenas caracter&iacute;sticas interactivas con una sintaxis de programaci&oacute;n en shell sencilla";
 choices[53][2] = "no se usa habitualmente, por la dificultad que ofrece su shell m&aacute;s complicado";
 choices[53][3] = "es una extensi&oacute;n mejorada de la original";
 answers[53] = choices[53][3];
 units[53] = "54";
 comments[53] = "Id Pregunta: 5451. Castilla y Le&oacute;n";


//  Id pregunta: 5454 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l de las siguientes es una caracter&iacute;stica importante de las bases de datos relacionales y SQL?";
 choices[54]= new Array();
 choices[54][0] = "La independencia de relaciones entre las tablas";
 choices[54][1] = "Elevada velocidad del SQL";
 choices[54][2] = "Potentes entornos de desarrollo";
 choices[54][3] = "F&aacute;ciles de instalar y usar";
 answers[54] = choices[54][0];
 units[54] = "58";
 comments[54] = "Id Pregunta: 5454. Castilla y Le&oacute;n";


//  Id pregunta: 5509 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  &iquest;C&oacute;mo se garantiza la integridad de la factura electr&oacute;nica?";
 choices[55]= new Array();
 choices[55][0] = "Con firma electr&oacute;nica avanzada basada en un certificado reconocido";
 choices[55][1] = "Mediante sello electr&oacute;nico avanzado basado en un certificado reconocido que identifique a la persona jur&iacute;dica o entidad sin personalidad jur&iacute;dica que selle la factura electr&oacute;nica, a trav&eacute;s de su denominaci&oacute;n o raz&oacute;n social y su n&uacute;mero de identificaci&oacute;n fiscal.";
 choices[55][2] = "A y B son correctas";
 choices[55][3] = "No es necesario garantizar la integridad de la factura pues ya se ve en el remitente";
 answers[55] = choices[55][2];
 units[55] = "70";
 comments[55] = "Id Pregunta: 5509. NULL";


//  Id pregunta: 6052 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  &iquest;Cu&aacute;l es una infraestructura de integraci&oacute;n para la construcci&oacute;n de arquitecturas SOA?";
 choices[56]= new Array();
 choices[56][0] = "SAML";
 choices[56][1] = "UDDI (Universal Description, Discovery and Integration)";
 choices[56][2] = "CASE (Computer-Aided Software Engineering)";
 choices[56][3] = "ESB (Enterprise Service Bus)";
 answers[56] = choices[56][3];
 units[56] = "51";
 comments[56] = "Id Pregunta: 6052. TIC A 2009";


//  Id pregunta: 6115 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  Indique cu&aacute;l de las siguientes clasificaciones NO es aplicable a las etiquetas RFID (Radio Frecuency Identification):";
 choices[57]= new Array();
 choices[57][0] = "Activas.";
 choices[57][1] = "Pasivas.";
 choices[57][2] = "Hiperactivas.";
 choices[57][3] = "Semipasivas.";
 answers[57] = choices[57][2];
 units[57] = "74";
 comments[57] = "Id Pregunta: 6115. TIC A 2009";


//  Id pregunta: 6429 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  &iquest;Cu&aacute;l de los siguientes es un servidor de aplicaciones de software libre?";
 choices[58]= new Array();
 choices[58][0] = "Websphere";
 choices[58][1] = "WebLogic";
 choices[58][2] = "GlassFish";
 choices[58][3] = "Synaptic";
 answers[58] = choices[58][2];
 units[58] = "62";
 comments[58] = "Id Pregunta: 6429. NULL";


//  Id pregunta: 6449 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  En referencia a Sistemas Operativos multiproceso tipo UNIX &iquest;qu&eacute; se entiende por proceso zombi?";
 choices[59]= new Array();
 choices[59][0] = "Un proceso padre que se ha quedado bloqueado a la espera de que sus hijos acaben sus tareas pendientes";
 choices[59][1] = "Un par de procesos en el que el primero est&aacute; a la espera de que el segundo proceso acabe y este segundo est&aacute; la espera de que el primer proceso acabe";
 choices[59][2] = "Un proceso que ha completado su ejecuci&oacute;n pero a&uacute;n contin&uacute;a consumiendo recursos";
 choices[59][3] = "Un proceso hijo que est&aacute; bloqueado a la espera de que el proceso padre le env&iacute;e datos que necesita";
 answers[59] = choices[59][2];
 units[59] = "53";
 comments[59] = "Id Pregunta: 6449. Castilla La Mancha 2009";


//  Id pregunta: 6509 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  &iquest;Cu&aacute;l de las siguientes propiedades NO se almacena en el i-node de un archivo?";
 choices[60]= new Array();
 choices[60][0] = "Permisos";
 choices[60][1] = "Propietario";
 choices[60][2] = "Grupo";
 choices[60][3] = "Nombre del fichero";
 answers[60] = choices[60][3];
 units[60] = "53";
 comments[60] = "Id Pregunta: 6509. NULL";


//  Id pregunta: 6586 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  Los ficheros de los operadores de comunicaciones electr&oacute;nicas, respecto de los datos de tr&aacute;fico y localizaci&oacute;n, de acuerdo a la normativa vigente de protecci&oacute;n de datos deben aplicar:";
 choices[61]= new Array();
 choices[61][0] = "S&oacute;lo medidas de seguridad de nivel medio";
 choices[61][1] = "S&oacute;lo medidas de seguridad de nivel medio y b&aacute;sico";
 choices[61][2] = "Medidas de seguridad de nivel b&aacute;sico, medio y deben disponer de un registro de accesos";
 choices[61][3] = "Todas las respuestas anteriores son incorrectas";
 answers[61] = choices[61][2];
 units[61] = "29";
 comments[61] = "Id Pregunta: 6586. NULL";


//  Id pregunta: 7317 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  Cu&aacute;l de los siguientes no forma parte del Framework o Marco de Trabajo .NET:";
 choices[62]= new Array();
 choices[62][0] = "MSIL";
 choices[62][1] = "JVM";
 choices[62][2] = "Biblioteca de Clases Base o BCL";
 choices[62][3] = "CLR (Common Language Runtime)";
 answers[62] = choices[62][1];
 units[62] = "59";
 comments[62] = "Id Pregunta: 7317. NULL";


//  Id pregunta: 8217 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  En relaci&oacute;n a la facturaci&oacute;n electr&oacute;nica, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[63]= new Array();
 choices[63][0] = "La AEAT pone a disposici&oacute;n de los usuarios software distribuible para generar PDF417.";
 choices[63][1] = "El formato &quot;Facturae&quot; permite la inclusi&oacute;n de extensiones a nivel de l&iacute;nea, de factura o de lote de facturas.";
 choices[63][2] = "El certificado a usar para firmar la factura electr&oacute;nica y que &eacute;sta tenga validez ha de ser en todo caso el del obligado tributario.";
 choices[63][3] = "La Orden EHA/962/2007 dice que la obligaci&oacute;n de remisi&oacute;n y conservaci&oacute;n de facturas o documentos sustitutivos se cumplir&aacute; para la facturaci&oacute;n electr&oacute;nica mediante el uso de firma electr&oacute;nica reconocida.";
 answers[63] = choices[63][1];
 units[63] = "70";
 comments[63] = "Id Pregunta: 8217. Examen TIC A1 2010";


//  Id pregunta: 8344 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  &iquest;Cu&aacute;l de las siguientes estructuras de datos requiere m&aacute;s capacidad de almacenamiento de informaci&oacute;n?";
 choices[64]= new Array();
 choices[64][0] = "&Aacute;rbol Binario.";
 choices[64][1] = "Lista.";
 choices[64][2] = "Lista enlazada.";
 choices[64][3] = "&Aacute;rbol-B.";
 answers[64] = choices[64][3];
 units[64] = "64";
 comments[64] = "Id Pregunta: 8344. Examen TIC A2 2010";


//  Id pregunta: 8433 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  Uno de los problemas m&aacute;s serios que se pueden presentar en un ambiente de concurrencia es el &ldquo;abrazo mortal&rdquo; (deadlock), el cu&aacute;l se produce cuando se presentan al mismo tiempo 4 condiciones necesarias. &iquest;Cu&aacute;l de las siguientes no es una de ellas?";
 choices[65]= new Array();
 choices[65][0] = "Condici&oacute;n de no apropiaci&oacute;n";
 choices[65][1] = "Condici&oacute;n de espera circular";
 choices[65][2] = "Condici&oacute;n de exclusi&oacute;n mutua";
 choices[65][3] = "Condici&oacute;n de espera ocupada";
 answers[65] = choices[65][3];
 units[65] = "52";
 comments[65] = "Id Pregunta: 8433. ";


//  Id pregunta: 8519 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  Se&ntilde;ale la respuesta correcta de las siguientes afirmaciones sobre el modelo entidad/relaci&oacute;n extendido:";
 choices[66]= new Array();
 choices[66][0] = "Es un requisito el conocer el SGBD en el que se va a implementar.";
 choices[66][1] = "Es dependiente del entorno f&iacute;sico.";
 choices[66][2] = "Se centra en los datos, independientemente del procesamiento que los transforma";
 choices[66][3] = "Debe proporcionar a los usuarios toda la informaci&oacute;n que necesiten garantizando la eficiencia del proceso.";
 answers[66] = choices[66][2];
 units[66] = "57, 58";
 comments[66] = "Id Pregunta: 8519. Examen TIC A2 2010 interna";


//  Id pregunta: 8602 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  &iquest;Cu&aacute;l de los siguientes es el lenguaje est&aacute;ndar propuesto para la descripci&oacute;n de servicios web bajo protocolo SOAP? ";
 choices[67]= new Array();
 choices[67][0] = "WSDL";
 choices[67][1] = "UDDI";
 choices[67][2] = "XML";
 choices[67][3] = "REST";
 answers[67] = choices[67][0];
 units[67] = "51";
 comments[67] = "Id Pregunta: 8602. Examen TIC A2 2010 interna";


//  Id pregunta: 8606 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  &iquest;Cu&aacute;l de los siguientes NO es un servidor OLAP?";
 choices[68]= new Array();
 choices[68][0] = "Microstrategy OLAP Services.";
 choices[68][1] = "MDX OLAP server.";
 choices[68][2] = "Oracle Database OLAP.";
 choices[68][3] = "Mondrian OLAP Server.";
 answers[68] = choices[68][1];
 units[68] = "68";
 comments[68] = "Id Pregunta: 8606. Examen TIC A2 2010 interna";


//  Id pregunta: 8622 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  Se&ntilde;ale la respuesta correcta respecto a las cintas Ultrium LTO:";
 choices[69]= new Array();
 choices[69][0] = "Tienen un formato propietario";
 choices[69][1] = "Los lectores son compatibles con las cintas AIT de Sony.";
 choices[69][2] = "En su versi&oacute;n LTO 5. alcanza capacidades sin compresi&oacute;n de hasta 1,4 TB.";
 choices[69][3] = "No permiten ning&uacute;n tipo de cifrado.";
 answers[69] = choices[69][2];
 units[69] = "48";
 comments[69] = "Id Pregunta: 8622. Examen TIC A2 2010 interna";


//  Id pregunta: 8629 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre el modelo entidad/relaci&oacute;n es correcta?";
 choices[70]= new Array();
 choices[70][0] = "En la especializaci&oacute;n un supertipo so descompone en uno o varios subtipos, los cuales heredan todos los atributos y relaciones del supertipo.";
 choices[70][1] = "La generalizaci&oacute;n consiste en relacionar dos tipos de entidades que normalmente son de dominios independientes, pero coyunturalmente se asocian.";
 choices[70][2] = "La agregaci&oacute;n permite abstraer un tipo de entidad de nivel superior (supertipo) a partir de varios tipos de entidad (subtipos).";
 choices[70][3] = "La asociaci&oacute;n consiste en construir un nuevo tipo de entidad como composici&oacute;n de otros.";
 answers[70] = choices[70][0];
 units[70] = "57, 58";
 comments[70] = "Id Pregunta: 8629. Examen TIC A2 2010 interna";


//  Id pregunta: 8795 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  &iquest;Qu&eacute; comando de unix no tiene que ver con el control de trabajos de ejecuci&oacute;n?";
 choices[71]= new Array();
 choices[71][0] = "jobs";
 choices[71][1] = "fg";
 choices[71][2] = "pg";
 choices[71][3] = "bg";
 answers[71] = choices[71][2];
 units[71] = "53, 54";
 comments[71] = "Id Pregunta: 8795. Examen UPM A2 2011";


//  Id pregunta: 8918 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  Indicar qu&eacute; es cierto acerca de las interrupciones de Entrada/Salida:";
 choices[72]= new Array();
 choices[72][0] = "Cuando se produce una interrupci&oacute;n, el registro contador de programa de la CPU cambia su valor, apuntando a la direcci&oacute;n de comienzo de la rutina de tratamiento de la interrupci&oacute;n.";
 choices[72][1] = "Los controladores DMA, al acceder directamente a la memoria principal, no hacen uso de interrupciones.";
 choices[72][2] = "Las interrupciones son generadas por la CPU para informar a los dispositivos perif&eacute;ricos de diferentes situaciones excepcionales en la ejecuci&oacute;n de los programas.";
 choices[72][3] = "Ninguna de las anteriores es cierta";
 answers[72] = choices[72][0];
 units[72] = "52";
 comments[72] = "Id Pregunta: 8918. Operador Ayto. Madrid 2010";


//  Id pregunta: 8952 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  El manejador de dispositivos es:";
 choices[73]= new Array();
 choices[73][0] = "Un p rograma de usuario final";
 choices[73][1] = "Hardware que controla un dispositivo";
 choices[73][2] = "Software que controla un dispositivo";
 choices[73][3] = "Todas las anteriores son ciertas";
 answers[73] = choices[73][2];
 units[73] = "53,54";
 comments[73] = "Id Pregunta: 8952. ";


//  Id pregunta: 8985 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  En el contexto de web services &iquest;Qu&eacute; quiere decir OASIS?";
 choices[74]= new Array();
 choices[74][0] = "Organization for the Advancement of Structured Information Services";
 choices[74][1] = "Organization for the Advancement of Service Integration Standards";
 choices[74][2] = "Organization for the Advancement of Structured Information Standards";
 choices[74][3] = "Organization for the Application of Structured Information Standards";
 answers[74] = choices[74][2];
 units[74] = "51, 69";
 comments[74] = "Id Pregunta: 8985. NULL";


//  Id pregunta: 9041 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  Sistema de Grid Computing";
 choices[75]= new Array();
 choices[75][0] = "Globus Toolkit";
 choices[75][1] = "Nimbus";
 choices[75][2] = "Eucaliptus";
 choices[75][3] = "Gluster";
 answers[75] = choices[75][0];
 units[75] = "45";
 comments[75] = "Id Pregunta: 9041. ";


//  Id pregunta: 9097 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  &iquest;Cu&aacute;ntas copias de seguridad de un programa de ordenador se pueden realizar seg&uacute;n la legislaci&oacute;n vigente en materia de propiedad intelectual?";
 choices[76]= new Array();
 choices[76][0] = "No se pueden realizar copias de seguridad.";
 choices[76][1] = "La ley premite siempre la realizaci&oacute;n de una copia de seguridad.";
 choices[76][2] = "Una copia de seguridad, siempre que el titular no se oponga expresamente.";
 choices[76][3] = "Una copia de seguridad, pero lo tiene que autorizar expresamente el titular.";
 answers[76] = choices[76][1];
 units[76] = "36";
 comments[76] = "Id Pregunta: 9097. ";


//  Id pregunta: 9125 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  &iquest;Cu&aacute;l de los siguientes NO es un tipo de bus interno paralelo?";
 choices[77]= new Array();
 choices[77][0] = "ISA";
 choices[77][1] = "HTI";
 choices[77][2] = "PCI";
 choices[77][3] = "AGP";
 answers[77] = choices[77][1];
 units[77] = "47";
 comments[77] = "Id Pregunta: 9125. Examen TIC-A1 2011";


//  Id pregunta: 9130 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  &iquest;Qu&eacute; se suelen considerar como ejemplo de mainframe?";
 choices[78]= new Array();
 choices[78][0] = "Z/OS de IBM";
 choices[78][1] = "Superdome de HP";
 choices[78][2] = "Todas las respuestas anteriores";
 choices[78][3] = "Ninguna respuesta es v&aacute;lida";
 answers[78] = choices[78][1];
 units[78] = "46";
 comments[78] = "Id Pregunta: 9130. ";


//  Id pregunta: 9166 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  Entre los elementos que propone la ISO 19113, no se encuentra:";
 choices[79]= new Array();
 choices[79][0] = "Compleci&oacute;n";
 choices[79][1] = "Consistencia topol&oacute;gica";
 choices[79][2] = "Exactitud temporal";
 choices[79][3] = "Exactitud posicional";
 answers[79] = choices[79][1];
 units[79] = "67";
 comments[79] = "Id Pregunta: 9166. NULL";


//  Id pregunta: 9190 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  En relaci&oacute;n a los programas de ordenadro, indicar mediante que ley se protegen.";
 choices[80]= new Array();
 choices[80][0] = "Mediante la Ley 23/2006 por la que se modifica el texto refundido de la Ley de Propiedad Intelectual";
 choices[80][1] = "Mediante la Ley de Propiedad Intelectual";
 choices[80][2] = "Mediante la Directiva de derechos de autor 2001/29";
 choices[80][3] = "Mediante la Ley de Patentes";
 answers[80] = choices[80][1];
 units[80] = "36";
 comments[80] = "Id Pregunta: 9190. ";


//  Id pregunta: 9228 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  En la primitiva send-receive qu&eacute; caracter&iacute;sticas tienen send y receive?";
 choices[81]= new Array();
 choices[81][0] = "Send en bloqueante y Receive es no bloqueante.";
 choices[81][1] = "Ambas son bloqueantes.";
 choices[81][2] = "Ambas son no bloqueantes.";
 choices[81][3] = "Send es no bloqueante y Receive es bloqueante.";
 answers[81] = choices[81][3];
 units[81] = "50";
 comments[81] = "Id Pregunta: 9228. ";


//  Id pregunta: 9237 AÃ±o de creación de pregunta: 2013-01-01
 questions[82]= "83)  &iquest;Qu&eacute; es el n&uacute;cleo denominado &ldquo;vanilla&rdquo;?";
 choices[82]= new Array();
 choices[82][0] = "Kernel sin alteraciones suministrado por Linus Torvalds";
 choices[82][1] = "S&oacute;lo se puede descargar de su sitio oficial en http://www.kernel.org";
 choices[82][2] = "Las distintas distribuciones no se basan en el n&uacute;cleo &ldquo;vanilla&rdquo;";
 choices[82][3] = "Todas las anteriores son correctas.";
 answers[82] = choices[82][0];
 units[82] = "53";
 comments[82] = "Id Pregunta: 9237. ";


//  Id pregunta: 9255 AÃ±o de creación de pregunta: 2013-01-01
 questions[83]= "84)  &iquest;Qu&eacute; es BitLocker?";
 choices[83]= new Array();
 choices[83][0] = "Una funcionalidad de Windows que permite el cifrado de discos duros completos.";
 choices[83][1] = "Se proporciona desde Windows Vista.";
 choices[83][2] = "Con Windows 7 incorpora la funcionalidad de BiLocker-ToGo para dispositivos USB.";
 choices[83][3] = "Todas son correctas";
 answers[83] = choices[83][3];
 units[83] = "56";
 comments[83] = "Id Pregunta: 9255. ";


//  Id pregunta: 9606 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)   En el Modelo de Referencia ANSI  de las Facilidades de usuario (MRFU), las FU se encargan de:";
 choices[84]= new Array();
 choices[84][0] = " Aislar al usuario de detalles concretos sobre las herramientas de gesti&oacute;n de datos (HGD)";
 choices[84][1] = " Transformar una demanda de usuario en una petici&oacute;n funcional para las HGD";
 choices[84][2] = "Trasformar la salida de las HGD en un formato de presentaci&oacute;n para el usuario";
 choices[84][3] = "Todas las anteriores";
 answers[84] = choices[84][3];
 units[84] = "57";
 comments[84] = "Id Pregunta: 9606. ";


//  Id pregunta: 9609 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  &iquest;Qu&eacute; establece el teorema de CAP o de Brewer?";
 choices[85]= new Array();
 choices[85][0] = "El n&uacute;mero medio de clientes en un sistema es igual a la tasa promedio de llegada de clientes al sistema, por el tiempo medio que el cliente est&aacute; en un sistema.";
 choices[85][1] = "En un sistema de computaci&oacute;n distribuida es imposible garantizar simult&aacute;neamente la consistencia, disponibilidad y la tolerancia  a fallos.";
 choices[85][2] = "En una relaci&oacute;n, los valores de una clave externa de una tabla, deben coincidir con los valores de una clave primaria de la otra tabla con la que est&aacute; relacionada o bien ser todos nulos.";
 choices[85][3] = "Todas las respuestas son incorrectas.";
 answers[85] = choices[85][1];
 units[85] = "52";
 comments[85] = "Id Pregunta: 9609. ";


//  Id pregunta: 9620 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Las fibras (threads) en el SO Windows...";
 choices[86]= new Array();
 choices[86][0] = "Se ejecutan en modo usuario";
 choices[86][1] = "Usan multitarea preemptiva";
 choices[86][2] = "Usan multitarea colaborativa";
 choices[86][3] = "a) y c) son ciertas";
 answers[86] = choices[86][3];
 units[86] = "56";
 comments[86] = "Id Pregunta: 9620. ";


//  Id pregunta: 9635 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  &iquest;Qu&eacute; es IPAM en Windows 2012 Server?";
 choices[87]= new Array();
 choices[87][0] = "IP Address Management";
 choices[87][1] = "Internet Proccess Advanced Management";
 choices[87][2] = "IP Access Management";
 choices[87][3] = "Ninguna de las anteriores";
 answers[87] = choices[87][0];
 units[87] = "56";
 comments[87] = "Id Pregunta: 9635. ";


//  Id pregunta: 9637 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  &iquest;C&oacute;mo puede ejecutarse Windows 2012 Server en procesadores de 32 bits?";
 choices[88]= new Array();
 choices[88][0] = "No puede";
 choices[88][1] = "Con una versi&oacute;n espec&iacute;fica para estos procesadores";
 choices[88][2] = "Con un programa de emulaci&oacute;n";
 choices[88][3] = "Con una m&aacute;quina virtual";
 answers[88] = choices[88][0];
 units[88] = "56";
 comments[88] = "Id Pregunta: 9637. ";


//  Id pregunta: 9673 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  En Grid Computing:";
 choices[89]= new Array();
 choices[89][0] = "Podemos conseguir cerca del 100% de uso de CPU.";
 choices[89][1] = "Los nodos no tienen que estar dedicados, puesto que su caracter&iacute;stica m&aacute;s importante es que la escalabilidad es parametrizable.";
 choices[89][2] = "Son sistemas heterog&eacute;neos.";
 choices[89][3] = "Todas las anteriores.";
 answers[89] = choices[89][3];
 units[89] = "45";
 comments[89] = "Id Pregunta: 9673. ";


//  Id pregunta: 9729 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  Se&ntilde;ale cu&aacute;l de los siguientes NO es un framework JAVA";
 choices[90]= new Array();
 choices[90][0] = "Bird.";
 choices[90][1] = "Hibernate.";
 choices[90][2] = "Maverick.";
 choices[90][3] = "Spring.";
 answers[90] = choices[90][0];
 units[90] = "61";
 comments[90] = "Id Pregunta: 9729. Examen TIC-A1 2013";


//  Id pregunta: 10002 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  En el sistema operativo UNIX la expresi&oacute;n &ldquo;daemon&rdquo; se refiere a un proceso delsistema que";
 choices[91]= new Array();
 choices[91][0] = "siempre se ejecuta en segundo plano (background).";
 choices[91][1] = "siempre es de corta duraci&oacute;n.";
 choices[91][2] = "est&aacute; siempre ejecut&aacute;ndose.";
 choices[91][3] = "nunca se ejecuta bajo control de los subsistemas de temporarizaci&oacute;n.";
 answers[91] = choices[91][0];
 units[91] = "53";
 comments[91] = "Id Pregunta: 10002. ";


//  Id pregunta: 10018 AÃ±o de creación de pregunta: 2014-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares regula el formato de documentos abiertos para aplicaciones de ofim&aacute;tica (OpenDocument)?";
 choices[92]= new Array();
 choices[92][0] = "ISO/IEC 26300:2006 ";
 choices[92][1] = "RFC 2373";
 choices[92][2] = "ISO/IEC 9899:1999";
 choices[92][3] = "ISO 9000";
 answers[92] = choices[92][0];
 units[92] = "62";
 comments[92] = "Id Pregunta: 10018. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10459 AÃ±o de creación de pregunta: 2014-01-01
 questions[93]= "94)  Indique cu&aacute;l es el m&eacute;todo indicado por el W3C para la optimizaci&oacute;n de la transmisi&oacute;n de mensajes SOAP:";
 choices[93]= new Array();
 choices[93][0] = "XOP XML-binary Optimized Protocol";
 choices[93][1] = "XOP XML-binary Optimized Packaging";
 choices[93][2] = "MTOM Message Transmission Optimization Mechanism";
 choices[93][3] = "REST Represantional State Transfer";
 answers[93] = choices[93][2];
 units[93] = "51";
 comments[93] = "Id Pregunta: 10459. NULL";


//  Id pregunta: 10481 AÃ±o de creación de pregunta: 2014-01-01
 questions[94]= "95)  El certificado de firma del DNI electr&oacute;nico es un certificado (seg&uacute;n la ley de Firma Electr&oacute;nica):";
 choices[94]= new Array();
 choices[94][0] = "Avanzado";
 choices[94][1] = "Reconocido";
 choices[94][2] = "Seguro";
 choices[94][3] = "Exportable";
 answers[94] = choices[94][1];
 units[94] = "74";
 comments[94] = "Id Pregunta: 10481. NULL";


//  Id pregunta: 10900 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Atendiendo &uacute;nicamente a criterios de eficiencia en tiempo, &iquest;cu&aacute;l de los siguientes m&eacute;todos ser&iacute;a el m&aacute;s eficiente para securizar las comunicaciones entre usuarios dentro de una red?";
 choices[95]= new Array();
 choices[95][0] = "Mediante claves sim&eacute;tricas.";
 choices[95][1] = "Mediante claves asim&eacute;tricas.";
 choices[95][2] = "Mediante claves sim&eacute;tricas compartidas peri&oacute;dicamente con claves asim&eacute;tricas.";
 choices[95][3] = "Mediante claves asim&eacute;tricas compartidas peri&oacute;dicamente con claves sim&eacute;tricas.";
 answers[95] = choices[95][0];
 units[95] = "73, 74";
 comments[95] = "Id Pregunta: 10900. Examen GSI 2014";


//  Id pregunta: 11037 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Qu&eacute; versi&oacute;n de SQL incorpor&oacute; las reglas de integridad referencial?";
 choices[96]= new Array();
 choices[96][0] = "SQL-86";
 choices[96][1] = "SQL-89";
 choices[96][2] = "SQL-92";
 choices[96][3] = "SQL-1999";
 answers[96] = choices[96][1];
 units[96] = "58";
 comments[96] = "Id Pregunta: 11037. ";


//  Id pregunta: 11048 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Qu&eacute; RFC contiene la especificaci&oacute;n de HTTP/2?";
 choices[97]= new Array();
 choices[97][0] = "6660";
 choices[97][1] = "6978";
 choices[97][2] = "7540";
 choices[97][3] = "8880";
 answers[97] = choices[97][2];
 units[97] = "69";
 comments[97] = "Id Pregunta: 11048. ";


//  Id pregunta: 11126 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  De acuerdo con la Taxonom&iacute;a de Flynn, como se denominan los sistemas de arquitectura serie de Von Neummann?";
 choices[98]= new Array();
 choices[98][0] = "SISD";
 choices[98][1] = "SIMD";
 choices[98][2] = "MISD";
 choices[98][3] = "MIMD";
 answers[98] = choices[98][0];
 units[98] = "45";
 comments[98] = "Id Pregunta: 11126. ";


//  Id pregunta: 11524 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  La arquitectura de un sistema de Grid Computing est&aacute; formada por las siguientes capas o niveles.";
 choices[99]= new Array();
 choices[99][0] = "Persistence Layer, Data Layer, Logic Layer (Business Layer), Service Layer y Presentation Layer";
 choices[99][1] = "Fabric Layer, Connectivity Layer, Resource Layer, Collective Layer y Applications Layer.";
 choices[99][2] = "Provider Layer, Communicator Layer, Mediator Layer, Coordinator Layer y Presenter Layer.";
 choices[99][3] = "Transport Layer, Security Layer, Transaction Layer, Session Layer y Application Layer.";
 answers[99] = choices[99][1];
 units[99] = "45";
 comments[99] = "Id Pregunta: 11524. Examen TIC Servicio Extreme&ntilde;o de Salud 2014";


