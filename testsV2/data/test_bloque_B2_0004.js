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

//  Id pregunta: 683 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Qu&eacute; son empresas spin-off?";
 choices[0]= new Array();
 choices[0][0] = "Empresas dedicadas al SW libre.";
 choices[0][1] = "Empresas vinculadas a la Universidad y que se dedican a tareas de I+D.";
 choices[0][2] = "Empresas de aceleraci&oacute;n de electrones para la producci&oacute;n de energ&iacute;a.";
 choices[0][3] = "No existen.";
 answers[0] = choices[0][1];
 units[0] = "21";
 comments[0] = "Id Pregunta: 683. ";


//  Id pregunta: 699 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  La principal ventaja de un sistema RAID-5 sobre otros sistemas RAID es:";
 choices[1]= new Array();
 choices[1][0] = "Ofrece la m&aacute;xima velocidad posible tanto en lectura como escritura.";
 choices[1][1] = "Ofrece la m&aacute;xima seguridad de los datos almacenados.";
 choices[1][2] = "Ofrece cierta seguridad y buena velocidad en lectura.";
 choices[1][3] = "Ofrece cierta seguridad y buena velocidad en escrituras aleatorias cortas.";
 answers[1] = choices[1][3];
 units[1] = "48";
 comments[1] = "Id Pregunta: 699. ";


//  Id pregunta: 711 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  Seg&uacute;n el RD 209/2003 por el que se regulan los registros y las notificaciones telem&aacute;ticas, as&iacute; como la utilizaci&oacute;n de medios telem&aacute;ticos para la sustituci&oacute;n de la aportaci&oacute;n de certificados por los ciudadanos";
 choices[2]= new Array();
 choices[2][0] = "La AGE pondr&aacute; a disposici&oacute;n del ciudadano un buz&oacute;n de correo electr&oacute;nico para notificaciones";
 choices[2][1] = "Dicho buz&oacute;n ser&aacute; v&aacute;lido para todas las notificaciones de la AGE ";
 choices[2][2] = "Cuando existiendo constancia de la recepci&oacute;n de la notificaci&oacute;n en la direcci&oacute;n electr&oacute;nica, transcurrieran diez d&iacute;as naturales sin que se lea a su contenido, se iniciar&aacute; el procedimiento administrativo.";
 choices[2][3] = "Cuando existiendo constancia de la recepci&oacute;n de la notificaci&oacute;n en la direcci&oacute;n electr&oacute;nica, transcurrieran diez d&iacute;as naturales sin que se acceda a su contenido, se entender&aacute; que la notificaci&oacute;n ha sido rechazada.";
 answers[2] = choices[2][3];
 units[2] = "30";
 comments[2] = "Id Pregunta: 711. Similar a examen TIC SS A 2003";


//  Id pregunta: 712 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  En un CPD se hacen back-ups de 240 GB. Se hacen 4 al a&ntilde;o. Si se quiere tener la informaci&oacute;n de los 5 a&ntilde;os anteriores, &iquest;Cu&aacute;ntas cintas de 60 GB hacen falta?";
 choices[3]= new Array();
 choices[3][0] = "60";
 choices[3][1] = "80";
 choices[3][2] = "90";
 choices[3][3] = "70";
 answers[3] = choices[3][1];
 units[3] = "48";
 comments[3] = "Id Pregunta: 712. Similar a examen TIC SS A 2003";


//  Id pregunta: 715 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  Una base de datos relacional est&aacute; en tercera forma normal, si adem&aacute;s de estar en segunda forma normal";
 choices[4]= new Array();
 choices[4][0] = "Todos sus atributos no primos dependen no transitivamente de la llave primaria";
 choices[4][1] = "Los atributos no primos dependen funcionalmente de la llave primaria";
 choices[4][2] = "Por cada rengl&oacute;n columna contiene valores at&oacute;micos.";
 choices[4][3] = "No contiene ning&uacute;n grupo repetitivo";
 answers[4] = choices[4][0];
 units[4] = "58";
 comments[4] = "Id Pregunta: 715. Similar a examen TIC SS A 2003";


//  Id pregunta: 725 AÃ±o de creación de pregunta: 2004-01-01
 questions[5]= "6)  Seg&uacute;n su comportamiento durante la ejecuci&oacute;n de un programa, las estructuras de datos se pueden clasificar en:";
 choices[5]= new Array();
 choices[5][0] = "Est&aacute;ticas y din&aacute;micas";
 choices[5][1] = "De clase y de objeto";
 choices[5][2] = "De iteraci&oacute;n, de recursi&oacute;n y de bifurcaci&oacute;n";
 choices[5][3] = "De flujo de control y de flujo de datos";
 answers[5] = choices[5][0];
 units[5] = "57";
 comments[5] = "Id Pregunta: 725. Examen TIC MAP B 2004";


//  Id pregunta: 760 AÃ±o de creación de pregunta: 2004-01-01
 questions[6]= "7)  En tecnolog&iacute;a microsoft, para trabajar con bases de datos,utilizaremos";
 choices[6]= new Array();
 choices[6][0] = "ODBC";
 choices[6][1] = "ADO";
 choices[6][2] = "OLE DB";
 choices[6][3] = "Cualquiera de los anteriores";
 answers[6] = choices[6][3];
 units[6] = "59";
 comments[6] = "Id Pregunta: 760. ";


//  Id pregunta: 821 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  Un elemento clave en la integraci&oacute;n de los sistemas de informaci&oacute;n, que permite hacer relaciones y operaciones interactivas sobre todos los datos de la organizaci&oacute;n para efectuar labores de planificaci&oacute;n, control y operaci&oacute;n son los llamados:";
 choices[7]= new Array();
 choices[7][0] = "Optical Character Readers (OCR)";
 choices[7][1] = "Diccionarios de Recursos de Informaci&oacute;n (DRI)";
 choices[7][2] = "Servidores de red local";
 choices[7][3] = "Ninguno de las anteriores respuestas es correcta";
 answers[7] = choices[7][1];
 units[7] = "57";
 comments[7] = "Id Pregunta: 821. ";


//  Id pregunta: 825 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;C&oacute;mo se denomina en Java el miniprograma que corre solamente bajo un navegador y es descargado autom&aacute;ticamente como parte de una p&aacute;gina web?:";
 choices[8]= new Array();
 choices[8][0] = "JavaScript";
 choices[8][1] = "Applet";
 choices[8][2] = "Servlet";
 choices[8][3] = "XML";
 answers[8] = choices[8][1];
 units[8] = "60";
 comments[8] = "Id Pregunta: 825. JCED - Preparatic XVII";


//  Id pregunta: 940 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Qu&eacute; se entiende por modo supervisor?:";
 choices[9]= new Array();
 choices[9][0] = "Sistema en el que no se precisa 'password' para acceder al sistema, por tratarse del supervisor";
 choices[9][1] = "Sistema en el que la palabra clave de acceso al sistema permite acceder a todos los elementos del sistema inform&aacute;tico";
 choices[9][2] = "Dispositivos que pueden modificar el modo de operaci&oacute;n y prohibir determinadas ejecuciones importantes";
 choices[9][3] = "Es un modo del sistema operativo mediante el cual s&oacute;lo &eacute;l es capaz de acceder a los recursos del ordenador mediante instrucciones que no est&aacute;n disponibles para los programas de usuario";
 answers[9] = choices[9][3];
 units[9] = "52";
 comments[9] = "Id Pregunta: 940. ";


//  Id pregunta: 947 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  CICS";
 choices[10]= new Array();
 choices[10][0] = "Es un ordenador con un conjunto de instrucciones complejo";
 choices[10][1] = "Es un servidor de directorio x500";
 choices[10][2] = "Es un monitor transaccional";
 choices[10][3] = "Es un servidor de directorio LDAP";
 answers[10] = choices[10][2];
 units[10] = "50";
 comments[10] = "Id Pregunta: 947. ";


//  Id pregunta: 1021 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  El inventor del primer sistema de conmutacion telef&oacute;nica fue:";
 choices[11]= new Array();
 choices[11][0] = "Claude Chapp&eacute;.";
 choices[11][1] = "Samuel Morse.";
 choices[11][2] = "Almond A. Strowger.";
 choices[11][3] = "Alexander G. Bell.";
 answers[11] = choices[11][2];
 units[11] = "";
 comments[11] = "Id Pregunta: 1021. ";


//  Id pregunta: 1041 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  El objetivo principal de la miner&iacute;a de datos es:";
 choices[12]= new Array();
 choices[12][0] = "Descubrir el conocimiento oculto en grandes vol&uacute;menes de datos y expresarlo de forma inteligible.";
 choices[12][1] = "Reorganizar adecuadamente los grandes vol&uacute;menes de datos.";
 choices[12][2] = "Tener copias de seguridad fiables y r&aacute;pidas de todos y cada uno de los datos de que se dispone.";
 choices[12][3] = "Ninguna de las anteriores respuestas es correcta.";
 answers[12] = choices[12][0];
 units[12] = "68";
 comments[12] = "Id Pregunta: 1041. ";


//  Id pregunta: 1090 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  En el modelo relacional, &iquest;qu&eacute; se entiende por integridad referencial?:";
 choices[13]= new Array();
 choices[13][0] = "Que todos los datos est&eacute;n referenciados por su clave y &eacute;sta sea &uacute;nica";
 choices[13][1] = "Que todo atributo que represente una relaci&oacute;n, o bien sea nulo, o bien exista en la clave primaria del elemento relacionado";
 choices[13][2] = "Que todo conjunto de operaciones que constituya una unidad, o bien progrese en conjunto, bien falle en conjunto, pero que no progrese nunca en situaciones intermedias";
 choices[13][3] = "Que se pueda referenciar la totalidad de la base de datos";
 answers[13] = choices[13][1];
 units[13] = "58";
 comments[13] = "Id Pregunta: 1090. NULL";


//  Id pregunta: 1125 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  En referencia a simplificaci&oacute;n de expresiones booleanas: ";
 choices[14]= new Array();
 choices[14][0] = "Se usa el M&eacute;todo de Karnaugh.";
 choices[14][1] = "Se usa el M&eacute;todo de Shannon.";
 choices[14][2] = "Para funciones de m&aacute;s de 6 estados se usa el M&eacute;todo de Quine-McCluskey.";
 choices[14][3] = "Ninguna de las anteriores es v&aacute;lida.";
 answers[14] = choices[14][2];
 units[14] = "58";
 comments[14] = "Id Pregunta: 1125. ";


//  Id pregunta: 1143 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  En un sistema fuertemente acoplado (tightly coupled):";
 choices[15]= new Array();
 choices[15][0] = "Los procesadores solo pueden acceder a los recursos mas cercanos, que ellos controlan";
 choices[15][1] = "Los procesadores pueden acceder a todos los recursos del sistema, mediante paso de mensajes";
 choices[15][2] = "El acceso es posible directamente para todos los procesadores, a la misma velocidad";
 choices[15][3] = "El acceso es posible directamente para todos los procesadores, pero con variaciones de velocidad seg&uacute;n la memoria accedida";
 answers[15] = choices[15][2];
 units[15] = "52";
 comments[15] = "Id Pregunta: 1143. ";


//  Id pregunta: 1162 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  En Unix, &iquest;qu&eacute; informaci&oacute;n contienen los directorios?:";
 choices[16]= new Array();
 choices[16][0] = "El n&uacute;mero de i-nodo, el nombre del fichero, el uid del propietario, el gid del grupo y los permisos de acceso";
 choices[16][1] = "El n&uacute;mero de i-nodo y el nombre del fichero";
 choices[16][2] = "El nombre del fichero y la direcci&oacute;n del bloque de disco donde comienza el principio de los datos";
 choices[16][3] = "El nombre del fichero y la direcci&oacute;n dentro de la TOC (Table of Contents) del disco donde empieza la concatenaci&oacute;n de asignaci&oacute;n de espacio";
 answers[16] = choices[16][1];
 units[16] = "53";
 comments[16] = "Id Pregunta: 1162. NULL";


//  Id pregunta: 1207 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  La arquitectura RISC:";
 choices[17]= new Array();
 choices[17][0] = "Se emplea sobre todo en estaciones de trabajo debido a sus altas prestaciones para el c&aacute;lculo en coma flotante";
 choices[17][1] = "Permite que con un juego sencillo de instrucciones se pueda disponer de todas las que se necesiten mediante el uso de la microprogramaci&oacute;n";
 choices[17][2] = "No es adaptable al sector de los microordenadores";
 choices[17][3] = "Dificulta el dise&ntilde;o de compiladores optimizados";
 answers[17] = choices[17][3];
 units[17] = "46";
 comments[17] = "Id Pregunta: 1207. ";


//  Id pregunta: 1294 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  OnNow:";
 choices[18]= new Array();
 choices[18][0] = "Es una tecnolog&iacute;a que permite a un PC encenderse r&aacute;pidamente";
 choices[18][1] = "Es una caracter&iacute;stica de los sistemas Z/series de IBM que permite el reemplazo en caliente de todas sus partes y su operaci&oacute;n 24x7";
 choices[18][2] = "Es una caracter&iacute;stica de Linux orientada a aumentar la redundancia y confiabilidad en la operaci&oacute;n del sistema";
 choices[18][3] = "Todas las respuestas anteriores son ciertas";
 answers[18] = choices[18][0];
 units[18] = "47";
 comments[18] = "Id Pregunta: 1294. ";


//  Id pregunta: 1297 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  Para cuantificar el movimiento existente entre la entrada a una base de datos orientada a objetos y la salida se emplean dos sistemas. El denominado 'din&aacute;mica d&eacute;bil' se caracteriza por:";
 choices[19]= new Array();
 choices[19][0] = "Considerar la creaci&oacute;n y destrucci&oacute;n de objetos";
 choices[19][1] = "Definir el tiempo de vida de los objetos como el intervalo de existencia asociado a los mismos";
 choices[19][2] = "Reflejar el movimiento y cambios de valor de los atributos variables";
 choices[19][3] = "Modificar la sociedad de objetos entre s&iacute;, pero no la observabilidad de los mismos";
 answers[19] = choices[19][2];
 units[19] = "57";
 comments[19] = "Id Pregunta: 1297. ";


//  Id pregunta: 1312 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Referente al lenguaje m&aacute;quina de un ordenador, se puede afirmar que:";
 choices[20]= new Array();
 choices[20][0] = "El lenguaje m&aacute;quina es independiente de la CPU del ordenador";
 choices[20][1] = "El lenguaje m&aacute;quina, los datos se proporcionan mediante las direcciones de memoria donde &eacute;stos se encuentran";
 choices[20][2] = "Las instrucciones en lenguaje m&aacute;quina no tienen generalmente formato r&iacute;gido en cuanto a la posici&oacute;n de los distintos campos que las configuran";
 choices[20][3] = "El lenguaje m&aacute;quina era algo propio de los ordenadores de &eacute;pocas pasadas, hoy d&iacute;a la mayoria ejecuta directamente c&oacute;digo C";
 answers[20] = choices[20][1];
 units[20] = "47";
 comments[20] = "Id Pregunta: 1312. ";


//  Id pregunta: 1313 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  Referido a un sistema de disco magn&eacute;tico, indique cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[21]= new Array();
 choices[21][0] = "Todas las pistas de un sector est&aacute;n en el mismo cilindro";
 choices[21][1] = "Un sector est&aacute; constituido por varias pistas";
 choices[21][2] = "Un  cilindro est&aacute; constituido por varias pistas";
 choices[21][3] = "Una pista est&aacute; constituida por varios cilindros";
 answers[21] = choices[21][2];
 units[21] = "48";
 comments[21] = "Id Pregunta: 1313. ";


//  Id pregunta: 1382 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Un Data Mart es:";
 choices[22]= new Array();
 choices[22][0] = "Un proveedor de datos de pago v&iacute;a Internet.";
 choices[22][1] = "Una versi&oacute;n reducida del datawarehouse, adscrita a un solo departamento de la organizaci&oacute;n.";
 choices[22][2] = "Una aplicaci&oacute;n para el mantenimiento de la coherencia de los datos.";
 choices[22][3] = "Ninguna de las anteriores respuestas es correcta.";
 answers[22] = choices[22][1];
 units[22] = "68";
 comments[22] = "Id Pregunta: 1382. ";


//  Id pregunta: 1395 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Un sistema IBM z/Series:";
 choices[23]= new Array();
 choices[23][0] = "Puede ejecutar Linux";
 choices[23][1] = "Puede ejecutar OS/400";
 choices[23][2] = "Puede ejecutar Windows 2000";
 choices[23][3] = "Todas son ciertas";
 answers[23] = choices[23][0];
 units[23] = "45";
 comments[23] = "Id Pregunta: 1395. ";


//  Id pregunta: 1419 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Una microinstrucci&oacute;n:";
 choices[24]= new Array();
 choices[24][0] = "Es una funci&oacute;n que acepta pocos par&aacute;metros en un lenguaje de programaci&oacute;n convencional";
 choices[24][1] = "En unidades de control microprogramadas, cada intrucci&oacute;n es un microprograma formado por microinstrucciones";
 choices[24][2] = "Son comandos del sistema operativo que tienen peque&ntilde;o tama&ntilde;o y que siempre se encuentran en memoria";
 choices[24][3] = "Todas son falsas";
 answers[24] = choices[24][1];
 units[24] = "47";
 comments[24] = "Id Pregunta: 1419. ";


//  Id pregunta: 1426 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Una transacci&oacute;n es un conjunto de acciones impregnadas de propiedades ACID, lo que significa:";
 choices[25]= new Array();
 choices[25][0] = "Atomicidad, consistencia, aislamiento y durabilidad";
 choices[25][1] = "Acci&oacute;n, correcci&oacute;n, integridad y dependencia";
 choices[25][2] = "Atomicidad, coexistencia, integridad y permanencia";
 choices[25][3] = "Actividad, convergencia, aislamiento y dependencia";
 answers[25] = choices[25][0];
 units[25] = "57";
 comments[25] = "Id Pregunta: 1426. ";


//  Id pregunta: 1451 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  &iquest;Cu&aacute;l de las siguientes respuestas no est&aacute; relacionada con los interfaces de usuario?:";
 choices[26]= new Array();
 choices[26][0] = "Free Windows";
 choices[26][1] = "WYSIWYG";
 choices[26][2] = "X Windows";
 choices[26][3] = "Motif";
 answers[26] = choices[26][0];
 units[26] = "47";
 comments[26] = "Id Pregunta: 1451. ";


//  Id pregunta: 1530 AÃ±o de creación de pregunta: 2003-01-01
 questions[27]= "28)  &iquest;Cu&aacute;l de las siguientes afirmaciones  pertenece al RD 209/2003 ?";
 choices[27]= new Array();
 choices[27][0] = "Se podr&aacute; utilizar una direcci&oacute;n de correo ordinario para recibir avisos de env&iacute;os la direcci&oacute;n de correo &uacute;nica, no consider&aacute;ndose la notificaci&oacute;n enviada si no se ha recibido ese aviso";
 choices[27][1] = "Si el usuario lo escoge la administraci&oacute;n estar&aacute; obligada a avisar al ciudadano de que tiene una notificaci&oacute;n mediante una mensaje SMS";
 choices[27][2] = "Si el usuario al cabo de 10 d&iacute;as desde que ha recibido la notificaci&oacute;n, no la abre, se pasa a considerar otro tipo de notificaci&oacute;n, con otro plazo para la misma";
 choices[27][3] = "Si el cliente al cabo de 10 desde que ha recibido la notificaci&oacute;n, no la abre, se considera que la notificaci&oacute;n ha sido rechazada";
 answers[27] = choices[27][3];
 units[27] = "30";
 comments[27] = "Id Pregunta: 1530. ";


//  Id pregunta: 1590 AÃ±o de creación de pregunta: 2003-01-01
 questions[28]= "29)  En la arquitectura de tres niveles para el dise&ntilde;o de bases de datos establecida por el ANSI, &iquest;qu&eacute; nivel se ocupa de las reglas de integridad, claves e &iacute;ndices?";
 choices[28]= new Array();
 choices[28][0] = "Nivel f&iacute;sico.";
 choices[28][1] = "Nivel conceptual.";
 choices[28][2] = "Nivel Externo.";
 choices[28][3] = "Ninguno de los tres niveles se ocupa de las reglas de integridad, claves e &iacute;ndices, lo hace el administrador de la base de datos.";
 answers[28] = choices[28][0];
 units[28] = "57";
 comments[28] = "Id Pregunta: 1590. ";


//  Id pregunta: 1617 AÃ±o de creación de pregunta: 2003-01-01
 questions[29]= "30)  Los thin clients son:";
 choices[29]= new Array();
 choices[29][0] = "Ordenadores sin disco duro que acceden a las aplicaciones a trav&eacute;s de un servidor.";
 choices[29][1] = "CD arrancable con una colecci&oacute;n de programas GNU/ LINUX.";
 choices[29][2] = "Una plataforma e-learning desarrollada por la universidad de Lovaina.";
 choices[29][3] = "Colecci&oacute;n de utilidades que permiten llevar a cabo un proceso de votaci&oacute;n electr&oacute;nica.";
 answers[29] = choices[29][0];
 units[29] = "50";
 comments[29] = "Id Pregunta: 1617. Junta Andaluc&iacute;a";


//  Id pregunta: 1635 AÃ±o de creación de pregunta: 2003-01-01
 questions[30]= "31)  Indique la afirmaci&oacute;n correcta:";
 choices[30]= new Array();
 choices[30][0] = "Los dispositivos DVD usan un l&aacute;ser de longitud de onda m&aacute;s corta que el empleado en los CD-ROM. El l&aacute;ser usado en el DVD es de luz roja";
 choices[30][1] = "Los dispositivos DVD usan un l&aacute;ser de longitud de onda m&aacute;s larga que el empleado en los CD-ROM. El l&aacute;ser usado en el DVD es de luz roja";
 choices[30][2] = "Los dispositivos DVD usan un l&aacute;ser de longitud de onda m&aacute;s corta que el empleado en los CD-ROM. El l&aacute;ser usado en el DVD es de luz infrarroja";
 choices[30][3] = "Los dispositivos DVD usan un l&aacute;ser de longitud de onda m&aacute;s larga que el empleado en los CD-ROM. El l&aacute;ser usado en el DVD es de luz infrarroja";
 answers[30] = choices[30][0];
 units[30] = "48";
 comments[30] = "Id Pregunta: 1635. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 1639 AÃ±o de creación de pregunta: 2004-01-01
 questions[31]= "32)  &iquest;Cu&aacute;l no es una funci&oacute;n del Administrador de Base de Datos?";
 choices[31]= new Array();
 choices[31][0] = "Dise&ntilde;o de la base de datos";
 choices[31][1] = "Supervisi&oacute;n del funcionamiento de la base de datos";
 choices[31][2] = "Correci&oacute;n de errores de entrada de datos";
 choices[31][3] = "Ninguna de las anteriores";
 answers[31] = choices[31][2];
 units[31] = "57";
 comments[31] = "Id Pregunta: 1639. ";


//  Id pregunta: 1651 AÃ±o de creación de pregunta: 2004-01-01
 questions[32]= "33)  &iquest;Cu&aacute;l de los siguientes t&eacute;rminos no son herramientas o plataformas de e-learning ?";
 choices[32]= new Array();
 choices[32][0] = "aTutor";
 choices[32][1] = "WebCT";
 choices[32][2] = "eSchool";
 choices[32][3] = "Blackboard";
 answers[32] = choices[32][2];
 units[32] = "66";
 comments[32] = "Id Pregunta: 1651. ";


//  Id pregunta: 1679 AÃ±o de creación de pregunta: 2004-01-01
 questions[33]= "34)  &iquest;Cu&aacute;l de las siguientes NO es una caracter&iacute;stica de un archivo JAR?";
 choices[33]= new Array();
 choices[33][0] = "Fichero que re&uacute;ne clases, im&aacute;genes, sonidos y otros ficheros necesarios para la ejecuci&oacute;n";
 choices[33][1] = "Es dependiente de la plataforma";
 choices[33][2] = "Empaqueta ficheros y los comprime con el algoritmo LZW";
 choices[33][3] = "JAR es el acr&oacute;nimo de Java ARchive";
 answers[33] = choices[33][1];
 units[33] = "60";
 comments[33] = "Id Pregunta: 1679. JCED - Preparatic XVII";


//  Id pregunta: 1779 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  &iquest;Cu&aacute;l de los siguientes no es un servidor de aplicaciones J2EE?";
 choices[34]= new Array();
 choices[34][0] = "Tomcat";
 choices[34][1] = "Geronimo";
 choices[34][2] = "JBoss";
 choices[34][3] = "Los 3 lo son";
 answers[34] = choices[34][0];
 units[34] = "60";
 comments[34] = "Id Pregunta: 1779. De la especificaci&oacute;n JEE, Tomcat no cumple la especificaci&oacute;n EJB, solo servlets.";


//  Id pregunta: 1799 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  En sistemas de representaci&oacute;n del conocimiento mediante reglas, el disparo de una regla en el mecanismo de inferencia con encadenamiento hacia delante:";
 choices[35]= new Array();
 choices[35][0] = "Produce en general cambios en la base de hechos, de forma que reglas que se pod&iacute;an disparar dejan de poder hacerlo y otras pasan a verificar su antecedente";
 choices[35][1] = "Produce en general cambios en la base de hechos, de forma que reglas que se pod&iacute;an disparar pueden seguir haci&eacute;ndolo y otras pasan tambi&eacute;n a verificar su antecedente";
 choices[35][2] = "El antecedente de la regla seleccionada est&aacute; formado por hechos que son consi-derados ahora como subobjetivos iniciando de nuevo el proceso";
 choices[35][3] = "La idea es partir del objetivo, seleccionar una regla y entonces elegir como otro u otros subobjetivos los hechos que est&aacute;n en el antecedente de la regla seleccionada, repitiendo el proceso de selecci&oacute;n de regla hasta alcanzar los datos";
 answers[35] = choices[35][0];
 units[35] = "64";
 comments[35] = "Id Pregunta: 1799. ";


//  Id pregunta: 1813 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  Los modelos digitales del terreno (MDT) son conjuntos de datos de gran utilidad, y t&iacute;picamente representados mediante un modelo de datos:";
 choices[36]= new Array();
 choices[36][0] = "Vectorial.";
 choices[36][1] = "R&aacute;ster.";
 choices[36][2] = "Alfanum&eacute;rico.";
 choices[36][3] = "De cotas u elevaciones.";
 answers[36] = choices[36][1];
 units[36] = "67";
 comments[36] = "Id Pregunta: 1813. NULL";


//  Id pregunta: 1830 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  &iquest;Qu&eacute; son los Datamarts o supermercados de datos?";
 choices[37]= new Array();
 choices[37][0] = "Proporcionan informaci&oacute;n de c&oacute;mo se ha construido el almac&eacute;n de datos.";
 choices[37][1] = "Son datos muy resumidos para consultas frecuentes.";
 choices[37][2] = "Son lugares de Internet donde por una peque&ntilde;a cuota se puede obtener la  informaci&oacute;n solicitada.";
 choices[37][3] = "Son datos que est&aacute;n disponibles bajo una licencia Creative Commons.";
 answers[37] = choices[37][1];
 units[37] = "68";
 comments[37] = "Id Pregunta: 1830. ";


//  Id pregunta: 1886 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  Al pasar al modelo f&iacute;sico de datos las relaciones M:N entre clases se transforman en...";
 choices[38]= new Array();
 choices[38][0] = "Se propagan las claves.";
 choices[38][1] = "Dos tablas";
 choices[38][2] = "Una tabla";
 choices[38][3] = "Tres tablas";
 answers[38] = choices[38][2];
 units[38] = "80";
 comments[38] = "Id Pregunta: 1886. ";


//  Id pregunta: 1894 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  La tecnolog&iacute;a utilizada para medir y analizar caracter&iacute;sticas del cuerpo humano con prop&oacute;sitos de autenticaci&oacute;n se llama";
 choices[39]= new Array();
 choices[39][0] = "huella";
 choices[39][1] = "biom&eacute;trica";
 choices[39][2] = "JBOD";
 choices[39][3] = "antropomorfismo";
 answers[39] = choices[39][1];
 units[39] = "74";
 comments[39] = "Id Pregunta: 1894. NULL";


//  Id pregunta: 1923 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa sobre el formato JAR?";
 choices[40]= new Array();
 choices[40][0] = "Utiliza el mismo algoritmo de compresi&oacute;n que los archivos .ZIP";
 choices[40][1] = "Es compatible con los sistemas de distribuci&oacute;n autom&aacute;tica";
 choices[40][2] = "Los ficheros con este formato son independientes de la plataforma";
 choices[40][3] = "Un fichero con este formato debe incluir obligatoriamente las firmas digitales de los fichero que contiene";
 answers[40] = choices[40][3];
 units[40] = "60";
 comments[40] = "Id Pregunta: 1923. NULL";


//  Id pregunta: 1941 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  La Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica, en relaci&oacute;n con los certificados electr&oacute;nicos de personas jur&iacute;dicas, establece que:";
 choices[41]= new Array();
 choices[41][0] = "La custodia de los datos de creaci&oacute;n de firma asociados a cada certificado electr&oacute;nico de persona jur&iacute;dica ser&aacute; responsabilidad de los administradores";
 choices[41][1] = "S&oacute;lo podr&aacute;n solicitar certificados electr&oacute;nicos de personas jur&iacute;dicas sus administradores";
 choices[41][2] = "La custodia de los datos de creaci&oacute;n de firma asociados a cada certificado electr&oacute;nico de persona jur&iacute;dica ser&aacute; responsabilidad de la persona f&iacute;sica solicitante";
 choices[41][3] = "Si la firma se utiliza transgrediendo los l&iacute;mites mencionados en la Ley, la persona jur&iacute;dica quedar&aacute; vinculada frente a terceros en todo caso";
 answers[41] = choices[41][2];
 units[41] = "30";
 comments[41] = "Id Pregunta: 1941. Ley 59/2003, art&iacute;culo 7";


//  Id pregunta: 1952 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  En el entorno de la arquitectura GNOME, seleccione la afirmaci&oacute;n correcta en relaci&oacute;n con DII:";
 choices[42]= new Array();
 choices[42][0] = "Es un lenguaje para implementar interfaces CORBA";
 choices[42][1] = "Es un servicio que ofrece objetos persistentes que representan la informaci&oacute;n IDL de los interfaces disponibles en CORBA";
 choices[42][2] = "Es un protocolo de comunicaciones de CORBA";
 choices[42][3] = "Es una interfaz que nos permite la construcci&oacute;n din&aacute;mica de invocaciones para un determinado objeto";
 answers[42] = choices[42][3];
 units[42] = "54";
 comments[42] = "Id Pregunta: 1952. ";


//  Id pregunta: 4285 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  &iquest;Qu&eacute; s&iacute;mbolo es utilizado para direccionar el resultado de la ejecuci&oacute;n de un comando del sistema operativo Unix sustituyendo el contenido de un fichero?";
 choices[43]= new Array();
 choices[43][0] = "&lt;";
 choices[43][1] = "&gt;";
 choices[43][2] = "&lt;&lt;";
 choices[43][3] = "&gt;&gt;";
 answers[43] = choices[43][1];
 units[43] = "54";
 comments[43] = "Id Pregunta: 4285. ";


//  Id pregunta: 4466 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  El algoritmo de cifrado Rijndael puede ser especificado por una clave:";
 choices[44]= new Array();
 choices[44][0] = "Fija de 256 bits";
 choices[44][1] = "Con un m&iacute;nimo de 128 bits y un m&aacute;ximo de 256 bits";
 choices[44][2] = "Fija de 128 bits";
 choices[44][3] = "Con un m&iacute;nimo de 256 bits y un m&aacute;ximo de 1024 bits";
 answers[44] = choices[44][1];
 units[44] = "72";
 comments[44] = "Id Pregunta: 4466. ";


//  Id pregunta: 4601 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  La organizaci&oacute;n de la informaci&oacute;n en un servicio de directorio es:";
 choices[45]= new Array();
 choices[45][0] = "relacional";
 choices[45][1] = "indexada";
 choices[45][2] = "jer&aacute;rquica";
 choices[45][3] = "en colas";
 answers[45] = choices[45][2];
 units[45] = "73";
 comments[45] = "Id Pregunta: 4601. ";


//  Id pregunta: 5047 AÃ±o de creación de pregunta: 2003-01-01
 questions[46]= "47)  &iquest;Cu&aacute;l es el periodo m&aacute;ximo de validez de los certificados del DNIe?:";
 choices[46]= new Array();
 choices[46][0] = "24 meses";
 choices[46][1] = "5 a&ntilde;os";
 choices[46][2] = "30 meses";
 choices[46][3] = "4 a&ntilde;os";
 answers[46] = choices[46][2];
 units[46] = "30";
 comments[46] = "Id Pregunta: 5047. Examen TIC A 2007 (RD 1553/2005, art&iacute;culo 12)";


//  Id pregunta: 5061 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  En Java 2 el operador &gt;&gt;:";
 choices[47]= new Array();
 choices[47][0] = "Desplaza bits del operando hacia la izquierda las posiciones indicadas";
 choices[47][1] = "Desplaza bits del operando hacia la derecha las posiciones indicadas (sin signo)";
 choices[47][2] = "Desplaza bits del operando hacia la derecha las posiciones indicadas (con signo)";
 choices[47][3] = "Realiza una operaci&oacute;n l&oacute;gica OR exclusiva entre los dos operandos";
 answers[47] = choices[47][2];
 units[47] = "60";
 comments[47] = "Id Pregunta: 5061. Examen TIC A 2007";


//  Id pregunta: 5101 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  Se regir&aacute;n por su normativa espec&iacute;fica, seg&uacute;n la ley 34/2002, las siguientes actividades y servicios de la sociedad de la informaci&oacute;n, excepto:";
 choices[48]= new Array();
 choices[48][0] = "Notarios";
 choices[48][1] = "Registradores";
 choices[48][2] = "Agentes de bolsa";
 choices[48][3] = "Procuradores";
 answers[48] = choices[48][2];
 units[48] = "30";
 comments[48] = "Id Pregunta: 5101. Ley 34/2002, art&iacute;culo 5";


//  Id pregunta: 5504 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  Se&ntilde;ala la caracter&iacute;sitca incorrecta respecto a AJAX:";
 choices[49]= new Array();
 choices[49][0] = "Incorpora caracter&iacute;sticas propias de aplicaciones tipo push";
 choices[49][1] = "Requiere Flash para su ejecuci&oacute;n";
 choices[49][2] = "Se basa en JavaScript y XML";
 choices[49][3] = "Actualiza los datos de la interfaz de forma espontanea";
 answers[49] = choices[49][1];
 units[49] = "69";
 comments[49] = "Id Pregunta: 5504. NULL";


//  Id pregunta: 5622 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  En un sistema operativo UNIX queremos que un fichero pueda ser actualizado &uacute;nicamente por su propietario y por los usuarios que pertenecen al mismo grupo que el propietario. Indicar cuales ser&iacute;an los permisos adecuados:";
 choices[50]= new Array();
 choices[50][0] = "755";
 choices[50][1] = "740";
 choices[50][2] = "760";
 choices[50][3] = "777";
 answers[50] = choices[50][2];
 units[50] = "53";
 comments[50] = "Id Pregunta: 5622. ";


//  Id pregunta: 5638 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  Indique cu&aacute;l de las siguientes opciones es err&oacute;nea:";
 choices[51]= new Array();
 choices[51][0] = "Un sistema de almacenamiento NAS tiene la ventaja de que no sobrecarga la red";
 choices[51][1] = "En un sistema de almacenamiento DAS se aprovechan los excedentes de los nodos";
 choices[51][2] = "Las siglas SAN hacen referencia a &quot;Storage Area Network&quot;";
 choices[51][3] = "Un dispositivo NAS comparte ficheros, mientras que en una SAN se comparten dispositivos de bloques";
 answers[51] = choices[51][0];
 units[51] = "48";
 comments[51] = "Id Pregunta: 5638. ";


//  Id pregunta: 5707 AÃ±o de creación de pregunta: 2009-01-01
 questions[52]= "53)  Se&ntilde;ale cu&aacute;l de los siguientes conceptos NO est&aacute; ligado al desarrollo de aplicaciones basadas en servicios web:";
 choices[52]= new Array();
 choices[52][0] = "JAXB";
 choices[52][1] = "AWT";
 choices[52][2] = "AXIS";
 choices[52][3] = "WSE";
 answers[52] = choices[52][1];
 units[52] = "51";
 comments[52] = "Id Pregunta: 5707. MAP 2008 A2";


//  Id pregunta: 5831 AÃ±o de creación de pregunta: 2009-01-01
 questions[53]= "54)  El sub-proyecto de &quot;Apache&quot; que incluye funcionalidades de indexaci&oacute;n y b&uacute;squeda en los &iacute;ndices creados es:";
 choices[53]= new Array();
 choices[53][0] = "Watchdog";
 choices[53][1] = "Turbine";
 choices[53][2] = "Lucene";
 choices[53][3] = "Avalon";
 answers[53] = choices[53][2];
 units[53] = "62";
 comments[53] = "Id Pregunta: 5831. MAP 2008 A1";


//  Id pregunta: 5986 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  Las arquitecturas orientadas a servicios est&aacute;n basadas en una serie de principios b&aacute;sicos, uno de los cu&aacute;les es:";
 choices[54]= new Array();
 choices[54][0] = "Los servicios usan una arquitectura &quot;hub-in-spoke&quot;";
 choices[54][1] = "Se integran en sistemas SGDBR";
 choices[54][2] = "Los cambios en la implementaci&oacute;n afectan a los consumidores del servicio";
 choices[54][3] = "Deben estar accesibles y deben poder ser localizados para su consumo";
 answers[54] = choices[54][3];
 units[54] = "51";
 comments[54] = "Id Pregunta: 5986. TIC A 2009";


//  Id pregunta: 6125 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  El acr&oacute;nimo RSS responde a:";
 choices[55]= new Array();
 choices[55][0] = "Rich Site Summary.";
 choices[55][1] = "RDF Site Summary.";
 choices[55][2] = "Really Simple Syndication.";
 choices[55][3] = "Todos los anteriores.";
 answers[55] = choices[55][3];
 units[55] = "69";
 comments[55] = "Id Pregunta: 6125. TIC A 2009";


//  Id pregunta: 6176 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  Se&ntilde;ale cual de los siguientes no se corresponde con ning&uacute;n libro SCORM";
 choices[56]= new Array();
 choices[56][0] = "Scorm Content Aggregation Model.";
 choices[56][1] = "Scorm Shareable Content Objects.";
 choices[56][2] = "Scorm Run-Time Environment.";
 choices[56][3] = "Scorm Sequencing and Navigation.";
 answers[56] = choices[56][1];
 units[56] = "66";
 comments[56] = "Id Pregunta: 6176. ";


//  Id pregunta: 6252 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  El algoritmo ID3 es una t&eacute;cnica de miner&iacute;a de datos que se clasifica en el grupo de:";
 choices[57]= new Array();
 choices[57][0] = "Los m&oacute;delos estad&iacute;sticos";
 choices[57][1] = "Agrupamiento";
 choices[57][2] = "Los &aacute;rboles de decisi&oacute;n";
 choices[57][3] = "Las redes neuronales";
 answers[57] = choices[57][2];
 units[57] = "64";
 comments[57] = "Id Pregunta: 6252. TICB-2009, bloque desarrollo";


//  Id pregunta: 6456 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  Comparando las dos arquitecturas diferentes para los sistemas OLAP: relacional y multidimensional es cierto que:";
 choices[58]= new Array();
 choices[58][0] = "Los sistemas multidimensionales delegan la informaci&oacute;n entre tiempo de respuesta y el proceso batch al dise&ntilde;o del sistema.";
 choices[58][1] = "Los sistemas multidimensionales generalmente son adecuados para diez o menos dimensiones.";
 choices[58][2] = "Los sistemas multidimensionales soportan an&aacute;lisis OLAP contra grandes vol&uacute;menes de datos elementales.";
 choices[58][3] = "Los sistemas multidimensionales pueden crecer hasta un gran n&uacute;mero de dimensiones.";
 answers[58] = choices[58][1];
 units[58] = "68";
 comments[58] = "Id Pregunta: 6456. Castilla La Mancha 2009";


//  Id pregunta: 6593 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  Un tipo de software libre que lleva al cabo una auditor&iacute;a de todo el software y hardware que se encuentra en una red de una manera sencilla, adem&aacute;s de eficiente es";
 choices[59]= new Array();
 choices[59][0] = "MAPILab Reports:";
 choices[59][1] = "Network Inventory Advisor";
 choices[59][2] = "Visual audit. X4";
 choices[59][3] = "Todas las respuestas anteriores son correctas";
 answers[59] = choices[59][3];
 units[59] = "75";
 comments[59] = "Id Pregunta: 6593. NULL";


//  Id pregunta: 7166 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  En Oracle, un tablespace es:";
 choices[60]= new Array();
 choices[60][0] = "El espacio que ocupa un fichero en donde reside un &iacute;ndice";
 choices[60][1] = "El espacio f&iacute;sico de almacenamiento de datos";
 choices[60][2] = "El espacio que ocupa un fichero en donde reside una tabla";
 choices[60][3] = "El espacio l&oacute;gico de almacenamiento de datos";
 answers[60] = choices[60][3];
 units[60] = "58";
 comments[60] = "Id Pregunta: 7166. Examen TIC B 2009";


//  Id pregunta: 7297 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  Indique cu&aacute;l de los siguientes es SW libre para miner&iacute;a de datos:";
 choices[61]= new Array();
 choices[61][0] = "SAS.";
 choices[61][1] = "Clementine.";
 choices[61][2] = "Weka.";
 choices[61][3] = "SPSS.";
 answers[61] = choices[61][2];
 units[61] = "68";
 comments[61] = "Id Pregunta: 7297. NULL";


//  Id pregunta: 7338 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  ASCII es el acr&oacute;nimo de:";
 choices[62]= new Array();
 choices[62][0] = "American Standard Code for Information Integration";
 choices[62][1] = "Alliance Standard Code Interchange Integration";
 choices[62][2] = "American Standard Code for Information Interchange";
 choices[62][3] = "All sugar can injure igloos";
 answers[62] = choices[62][2];
 units[62] = "72";
 comments[62] = "Id Pregunta: 7338. NULL";


//  Id pregunta: 8178 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  WS-BPEL (Web Service Business Process Execution Language), versi&oacute;n 2.0:";
 choices[63]= new Array();
 choices[63][0] = "Consta de una notaci&oacute;n gr&aacute;fica standard y de un lenguaje ejecutable para especificar interacciones entre servicios web.";
 choices[63][1] = "Permite la especificaci&oacute;n de procesos de negocio abstractos, pero no de procesos de negocio ejecutables.";
 choices[63][2] = "Utiliza XML Schema y WSDL 1.1 para la definici&oacute;n de tipos de datos e interfaces de servicios en la definici&oacute;n de procesos.";
 choices[63][3] = "Es una notaci&oacute;n gr&aacute;fica para la definici&oacute;n de servicios web.";
 answers[63] = choices[63][2];
 units[63] = "71";
 comments[63] = "Id Pregunta: 8178. Examen TIC A1 2010";


//  Id pregunta: 8286 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  Un prestador de servicios de certificaci&oacute;n, &iquest;durante qu&eacute; per&iacute;odo de tiempo tiene que conservar la informaci&oacute;n relativa a los certificados reconocidos expedidos, de manera que puedan verificarse las firmas efectuadas con los mismos, de acuerdo a lo dispuesto en la Ley 59/2003, de 19 de diciembre, de Firma electr&oacute;nica? ";
 choices[64]= new Array();
 choices[64][0] = "Al menos durante 15 a&ntilde;os contados desde la fecha de fin de validez del certificado,";
 choices[64][1] = "Al menos durante 15 a&ntilde;os contados desde el momento de su expedici&oacute;n";
 choices[64][2] = "Un m&aacute;ximo de 15 a&ntilde;os contados desde la fecha de fin de validez del certificado.";
 choices[64][3] = "Un m&aacute;ximo de 15 a&ntilde;os contados desde el momento de su expedici&oacute;n. ";
 answers[64] = choices[64][1];
 units[64] = "74";
 comments[64] = "Id Pregunta: 8286. Examen TIC A2 2010";


//  Id pregunta: 8321 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  &iquest;Cu&aacute;l de las siguientes sentencias JCL (Job Control language) marca el final de un trabajo? ";
 choices[65]= new Array();
 choices[65][0] = "//";
 choices[65][1] = "// JOB ";
 choices[65][2] = "//*";
 choices[65][3] = "// DD ";
 answers[65] = choices[65][0];
 units[65] = "50";
 comments[65] = "Id Pregunta: 8321. Examen TIC A2 2010";


//  Id pregunta: 8456 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  Entre las ventajas de un Datawarehouse NO se encuentra:";
 choices[66]= new Array();
 choices[66][0] = "Reducir el tiempo de respuesta de los sistemas operacionales.";
 choices[66][1] = "Presentar una visi&oacute;n &uacute;nica de la informaci&oacute;n de una empresa.";
 choices[66][2] = "Permitir que los usuarios sean autosuficientes para satisfacer sus propias necesidades de informaci&oacute;n.";
 choices[66][3] = "Facilitar la implementaci&oacute;n de cuadros de mando.";
 answers[66] = choices[66][0];
 units[66] = "68";
 comments[66] = "Id Pregunta: 8456. Analista Ayto. Madrid 2010";


//  Id pregunta: 8470 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  La regla 2 de Codd es la del:";
 choices[67]= new Array();
 choices[67][0] = "Tratamiento sistem&aacute;tico de valores nulos";
 choices[67][1] = "Acceso garantizado";
 choices[67][2] = "Actualizaci&oacute;n de vistas";
 choices[67][3] = "Integridad referencial";
 answers[67] = choices[67][1];
 units[67] = "57,58";
 comments[67] = "Id Pregunta: 8470. Analista Ayto. Madrid 2010";


//  Id pregunta: 8733 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  Elija la afirmaci&oacute;n correcta, en relaci&oacute;n con el contenido de la tarjeta chip del DNI electr&oacute;nico:";
 choices[68]= new Array();
 choices[68][0] = "Se incluye un certificado electr&oacute;nico &uacute;nico, personal e intransferible, con la doble funcionalidad de firma electr&oacute;nica y de autenticaci&oacute;n.";
 choices[68][1] = "Se incluyen, entre otros los datos de filiaci&oacute;n del ciudadano (los mismos que est&aacute;n impresos en el soporte f&iacute;sico del DNI), junto con una imagen de la fotograf&iacute;a";
 choices[68][2] = "Los datos contenidos, en todo caso, s&oacute;lo son accesibles en lectura por el ciudadano, mediante la utilizaci&oacute;n de la Clave Personal de Acceso o PIN. como garant&iacute;a de confidencialidad";
 choices[68][3] = "No se incluye una imagen de la fotograf&iacute;a";
 answers[68] = choices[68][1];
 units[68] = "74";
 comments[68] = "Id Pregunta: 8733. Examen TIC A2 2010 interna";


//  Id pregunta: 8866 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  Un dato espacial es una variable asociada a una localizaci&oacute;n del espacio. Normalmente se utilizan datos vectoriales, los cuales pueden ser expresados mediante tres tipos de objetos espaciales:";
 choices[69]= new Array();
 choices[69][0] = "Puntos, l&iacute;neas, pol&iacute;gonos.";
 choices[69][1] = "Coordenadas, l&iacute;neas, pol&iacute;gonos.";
 choices[69][2] = "Puntos, vectores, pol&iacute;gonos.";
 choices[69][3] = "Puntos, arcos, rectas.";
 answers[69] = choices[69][0];
 units[69] = "67";
 comments[69] = "Id Pregunta: 8866. Analista Ayto. Madrid 2010";


//  Id pregunta: 8927 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  En la mayor&iacute;a de los sistemas Linux, el directorio /home contiene:";
 choices[70]= new Array();
 choices[70][0] = "los directorios de trabajo de los usuarios.";
 choices[70][1] = "los sistemas de archivos montados temporalmente.";
 choices[70][2] = "el c&oacute;digo fuente del kernel.";
 choices[70][3] = "los ficheros de los controladores de dispositivos";
 answers[70] = choices[70][0];
 units[70] = "53, 54";
 comments[70] = "Id Pregunta: 8927. Operador Ayto. Madrid 2010";


//  Id pregunta: 8982 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  &iquest;Qu&eacute; es procfs en Unix?";
 choices[71]= new Array();
 choices[71][0] = "Un sistema de ficheros especial con informaci&oacute;n sobre procesos y otros recursos del sistema";
 choices[71][1] = "&quot;La versi&oacute;n profesional del sistema de ficheros &quot;&quot;C&quot;&quot; (cfs)&quot;";
 choices[71][2] = "Un comando que devuelve informaci&oacute;n sobre los procesos relacionados con el sistema de ficheros";
 choices[71][3] = "Nada de lo anterior";
 answers[71] = choices[71][0];
 units[71] = "54";
 comments[71] = "Id Pregunta: 8982. ";


//  Id pregunta: 9112 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  &iquest;Cu&aacute;l no es caracter&iacute;stica de los sistemas de mainframe o sistemas multiprocesor?";
 choices[72]= new Array();
 choices[72][0] = "La forma de trabajo predominante en este tipo de sistemas es el BATCH o procesamiento sin interacci&oacute;n";
 choices[72][1] = "El m&eacute;todo utilizado para dotar a estos sistemas de altas prestaciones";
 choices[72][2] = "Se trata de soluciones altamente propietarias, concebidas para entornos cerrados, no heterog&eacute;neos.";
 choices[72][3] = "Existen muy pocos fabricantes en el mercado que desarrollen este tipo de sistemas";
 answers[72] = choices[72][1];
 units[72] = "45";
 comments[72] = "Id Pregunta: 9112. ";


//  Id pregunta: 9155 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  En relaci&oacute;n a las gu&iacute;as AGR de la AICC sobre eLearning, se&ntilde;ale la FALSA:";
 choices[73]= new Array();
 choices[73][0] = "La gu&iacute;a AGR007 se refiere al intercambio de cursos entre plataformas";
 choices[73][1] = "La gu&iacute;a AGR010 est&aacute; dedicada a la interoperabilidad entre plataformas web de formaci&oacute;n y sus cursos";
 choices[73][2] = "La gu&iacute;a AGR008 ofrece recomendaciones acerca de los videos digitales";
 choices[73][3] = "La gu&iacute;a AGR009 contiene las recomendaciones referentes a los archivos de audio digital";
 answers[73] = choices[73][3];
 units[73] = "66";
 comments[73] = "Id Pregunta: 9155. ";


//  Id pregunta: 9170 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  Se&ntilde;ale cu&aacute;l de los siguientes no es un bloque de primer nivel en una factura en formato Facturae;";
 choices[74]= new Array();
 choices[74][0] = "Datos del emisor";
 choices[74][1] = "Detalle de la factura";
 choices[74][2] = "Importe de la factura";
 choices[74][3] = "Datos de la firma electr&oacute;nica ";
 answers[74] = choices[74][2];
 units[74] = "70";
 comments[74] = "Id Pregunta: 9170. ";


//  Id pregunta: 9204 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  En el lenguaje ODRL, &iquest;c&oacute;mo se identifica de forma &uacute;nica el contenido digital a proteger?";
 choices[75]= new Array();
 choices[75][0] = "Mediante el elemento Assets.";
 choices[75][1] = "Mendiate el elemento Permission.";
 choices[75][2] = "Mendiante el elemento Constraints.";
 choices[75][3] = "Todas son falsas.";
 answers[75] = choices[75][0];
 units[75] = "37";
 comments[75] = "Id Pregunta: 9204. ";


//  Id pregunta: 9207 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  &iquest;Desde el punto de vista de la cantidad de la velocidad de acceso cu&aacute;l es la diferencia entre cintas y discos?";
 choices[76]= new Array();
 choices[76][0] = "La cinta est&aacute; orientada a almacenamiento de grandes cantidades de datos en los que el tiempo de acceso es cr&iacute;tico.";
 choices[76][1] = "Los discos son adecuados para el almacenamiento de datos con acceso &ldquo;on-line&rdquo;.";
 choices[76][2] = "Las cintas pr&aacute;cticamente ya no se utilizan.";
 choices[76][3] = "Los discos representan el soporte auxiliar de la informaci&oacute;n";
 answers[76] = choices[76][1];
 units[76] = "48";
 comments[76] = "Id Pregunta: 9207. ";


//  Id pregunta: 9211 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  Con relaci&oacute;n al bucle arbitrado y red conmutada en las conexiones FC, es cierto que...";
 choices[77]= new Array();
 choices[77][0] = "mediante bucle arbitrado se pueden conectar hasta 50 dispositivos en un anillo en el que se comparte el ancho de banda entre todos ellos.";
 choices[77][1] = "La red conmutada utiliza switches para construir una NAS.";
 choices[77][2] = "En la red conmutada no se comparte el ancho de banda";
 choices[77][3] = "Bucle arbitrado y red conmutada no son formas v&aacute;lidas de conexi&oacute;n FC.";
 answers[77] = choices[77][2];
 units[77] = "48";
 comments[77] = "Id Pregunta: 9211. ";


//  Id pregunta: 9226 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  &iquest;Cu&aacute;les son los modelos m&aacute;s habituales de Sistemas Distribuidos?";
 choices[78]= new Array();
 choices[78][0] = "Cliente/Servidor";
 choices[78][1] = "Proxy/Cach&eacute;";
 choices[78][2] = "Modelo Peer to Peer";
 choices[78][3] = "Los anteriores y otros modelos como c&oacute;digo M&oacute;vil, Agente M&oacute;vil y Clientes ligeros";
 answers[78] = choices[78][3];
 units[78] = "50";
 comments[78] = "Id Pregunta: 9226. ";


//  Id pregunta: 9242 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  &iquest;Qu&eacute; caracter&iacute;sticas tiene ubuntu tv?";
 choices[79]= new Array();
 choices[79][0] = "No existe.";
 choices[79][1] = "Usa una interfaz que es una modificaci&oacute;n del entorno de escritorio Unity.";
 choices[79][2] = "Va instalado de serie en la mayor&iacute;a de los tv comerciales.";
 choices[79][3] = "Ninguna es correcta.";
 answers[79] = choices[79][1];
 units[79] = "54";
 comments[79] = "Id Pregunta: 9242. ";


//  Id pregunta: 9264 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  Indicad cu&aacute;l de los siguientes sistemas de ficheros se corresponde con un sistema de ficheros de alto rendimiento con soporte transaccional:";
 choices[80]= new Array();
 choices[80][0] = "NFS ";
 choices[80][1] = "CIFS ";
 choices[80][2] = "JFS";
 choices[80][3] = "FAT";
 answers[80] = choices[80][2];
 units[80] = "55";
 comments[80] = "Id Pregunta: 9264. Examen TICA2-2011";


//  Id pregunta: 9265 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  En el editor &quot;vi&quot; el comando &quot;dd&quot; &iquest;Qu&eacute; funci&oacute;n realiza?";
 choices[81]= new Array();
 choices[81][0] = "No realiza ninguna acci&oacute;n.";
 choices[81][1] = "Borra la l&iacute;nea anterior.";
 choices[81][2] = "Borra la l&iacute;nea actual";
 choices[81][3] = "Borra la l&iacute;nea posterior.";
 answers[81] = choices[81][2];
 units[81] = "53";
 comments[81] = "Id Pregunta: 9265. Examen TICA2-2011";


//  Id pregunta: 9655 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  El sistema operativo OS X de Apple se llama:";
 choices[82]= new Array();
 choices[82][0] = "Maverick";
 choices[82][1] = "Mavericks";
 choices[82][2] = "Cocoa";
 choices[82][3] = "Kit Kat";
 answers[82] = choices[82][1];
 units[82] = "56";
 comments[82] = "Id Pregunta: 9655. Maverick es el framework de java para desarrollo web";


//  Id pregunta: 9664 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  Los sistemas multiprocesador:";
 choices[83]= new Array();
 choices[83][0] = "Son sistemas d&eacute;bilmente acoplados.";
 choices[83][1] = "Sus procesadores no dependen unos de otros.";
 choices[83][2] = "Son sistemas fuertemente acoplados.";
 choices[83][3] = "Ninguna de las anteriores.";
 answers[83] = choices[83][2];
 units[83] = "45";
 comments[83] = "Id Pregunta: 9664. ";


//  Id pregunta: 9667 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  La segmentaci&oacute;n o pipelining:";
 choices[84]= new Array();
 choices[84][0] = "Es una t&eacute;cnica de solapamiento de instrucciones mediante la divisi&oacute;n de su ejecuci&oacute;n en etapas para simular paralelizaci&oacute;n.";
 choices[84][1] = "Disminuye el tiempo de ejecuci&oacute;n de cada instrucci&oacute;n.";
 choices[84][2] = "Se trata de dividir el c&oacute;digo en fragmentos para distribuirlos por distintos procesadores.";
 choices[84][3] = "Todas  las anteriores.";
 answers[84] = choices[84][0];
 units[84] = "45";
 comments[84] = "Id Pregunta: 9667. ";


//  Id pregunta: 9812 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  &iquest;Cu&aacute;l de los siguientes nombres NO se corresponde con una versi&oacute;n del sistema operativo Android?";
 choices[85]= new Array();
 choices[85][0] = "Kit Kat.";
 choices[85][1] = "Ice Cream Sandwich.";
 choices[85][2] = "Donut.";
 choices[85][3] = "Candy Marzipan.";
 answers[85] = choices[85][3];
 units[85] = "52,53,54";
 comments[85] = "Id Pregunta: 9812. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9979 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Un sistema que puede emplearse para registrar la relaci&oacute;n del ciudadano con la administraci&oacute;n, anotando todas las relaciones establecidas por &eacute;l, para configurar su personalidad administrativa digital es ";
 choices[86]= new Array();
 choices[86][0] = "Gesti&oacute;n de la Relaci&oacute;n con el Cliente (CRM) ";
 choices[86][1] = "Arquitectura Orientada a Servicios (SOA) ";
 choices[86][2] = "Planificaci&oacute;n de Recursos Empresariales (ERP) ";
 choices[86][3] = "Gesti&oacute;n de Procesos de Negocio (BPM) ";
 answers[86] = choices[86][0];
 units[86] = "65";
 comments[86] = "Id Pregunta: 9979. Examen TICA2, Xunta de GaliciA, 2011";


//  Id pregunta: 10245 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  Juan desarrolla un software y publica el c&oacute;digo fuente bajo la licencia GPL. Antonio realiza modificaciones al mismo y distribuye los archivos binarios desde su web site. &iquest;Cu&aacute;l de las siguientes opciones cumple con las obligaciones de Antonio sobre distribuir el c&oacute;digo fuente del software modificado?I) Puede distribuir el c&oacute;digo fuente original de Juan, mateniendo las notificaciones de copyrightII) Puede distribuir el c&oacute;digo fuente junto a los binariosIII) Puede distribuir los parches aplicados al c&oacute;digo fuente originalIV) Puede distribuir los parches aplicados al c&oacute;digo fuente original, junto con &eacute;ste";
 choices[87]= new Array();
 choices[87][0] = "I o II, y nada m&aacute;s";
 choices[87][1] = "S&oacute;lo II";
 choices[87][2] = "II o IV, pero nada m&aacute;s";
 choices[87][3] = "Cualquiera de las 4";
 answers[87] = choices[87][2];
 units[87] = "61";
 comments[87] = "Id Pregunta: 10245. ";


//  Id pregunta: 10251 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  FooCorp distribuye un software propietario que enlaza con una librer&iacute;a no modificada que se distribuye mediante la licencia LGPL. &iquest;Obliga LGPL a FooCorp a permitir la ingenier&iacute;a inversa de su software propietario para el uso exclusivo del usuario?";
 choices[88]= new Array();
 choices[88][0] = "Si";
 choices[88][1] = "Si, aunque s&oacute;lo si distribuye el software mediante licencia LGPL";
 choices[88][2] = "No";
 choices[88][3] = "No, LGPL no permite este tipo de usos";
 answers[88] = choices[88][0];
 units[88] = "61";
 comments[88] = "Id Pregunta: 10251. ";


//  Id pregunta: 10433 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  En una base de datos Oracle, &iquest;cu&aacute;l de las siguientes sentencias no est&aacute; relacionada con la asignaci&oacute;n de permisos a usuarios? ";
 choices[89]= new Array();
 choices[89][0] = "CREATE VIEW.";
 choices[89][1] = "GRANT.";
 choices[89][2] = "CREATE PROFILE.";
 choices[89][3] = "CREATE ROLE.";
 answers[89] = choices[89][0];
 units[89] = "58";
 comments[89] = "Id Pregunta: 10433. Examen TIC A1 2013";


//  Id pregunta: 10493 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  &iquest;Qu&eacute; comando Linux permite conocer los archivos que tiene abiertos un proceso?";
 choices[90]= new Array();
 choices[90][0] = "ps -a";
 choices[90][1] = "top";
 choices[90][2] = "fork";
 choices[90][3] = "lsof";
 answers[90] = choices[90][3];
 units[90] = "53";
 comments[90] = "Id Pregunta: 10493. ps y top muestra informaci&oacute;n de los procesos, pero no de los archivos abiertos, solo lsof hace eso";


//  Id pregunta: 10528 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  Se&ntilde;ale la respuesta correcta relacionada con las arquitecturas RISC y CISC de procesadores";
 choices[91]= new Array();
 choices[91][0] = "Las fases t&iacute;picas de ejecuci&oacute;n de una instrucci&oacute;n en un procesador RISC son, en orden: carga de la instrucci&oacute;n, decodificaci&oacute;n de la instrucci&oacute;n, ejecuci&oacute;n de la instrucci&oacute;n, acceso a memoria, escritura a registro";
 choices[91][1] = "CISC es un modelo m&aacute;s moderno que RISC y redujo el conjunto de instrucciones y sus modos de direccionamiento";
 choices[91][2] = "RISC es un modelo m&aacute;s moderno que CISC y redujo el conjunto de instrucciones y sus modos de direccionamiento";
 choices[91][3] = "Las fases t&iacute;picas de ejecuci&oacute;n de una instrucci&oacute;n en un procesador RISC son, en orden: carga de la instrucci&oacute;n, decodificaci&oacute;n de la instrucci&oacute;n, acceso a memoria, ejecuci&oacute;n de la instrucci&oacute;n, escritura a registro";
 answers[91] = choices[91][0];
 units[91] = "45";
 comments[91] = "Id Pregunta: 10528. NULL";


//  Id pregunta: 11003 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Indique la respuesta FALSA respecto a las autoridades de validaci&oacute;n del DNI electr&oacute;nico:";
 choices[92]= new Array();
 choices[92][0] = "La prestaci&oacute;n de estos servicios de validaci&oacute;n se realiza en base a Online Certificate Status Protocol (OCSP).";
 choices[92][1] = "Para la validaci&oacute;n del DNI electr&oacute;nico se dispone de dos prestadores de Servicios de Validaci&oacute;n.";
 choices[92][2] = "La informaci&oacute;n sobre los certificados electr&oacute;nicos revocados se almacena en las denominadas listas de revocaci&oacute;n de certificados (CRL).";
 choices[92][3] = "En la Infraestructura de Clave P&uacute;blica adoptada para el DNI electr&oacute;nico, se ha optado por asignar a una misma entidad las funciones de Autoridad de Validaci&oacute;n y Certificaci&oacute;n.";
 answers[92] = choices[92][3];
 units[92] = "74";
 comments[92] = "Id Pregunta: 11003. TIC A1 AGE 2014";


//  Id pregunta: 11043 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;En qu&eacute; patr&oacute;n de dise&ntilde;o est&aacute; basada la arquitectura de Swing?";
 choices[93]= new Array();
 choices[93][0] = "Modelo-Vista-Controlador (MVC)";
 choices[93][1] = "Singleton";
 choices[93][2] = "Observer";
 choices[93][3] = "Facade";
 answers[93] = choices[93][0];
 units[93] = "60";
 comments[93] = "Id Pregunta: 11043. ";


//  Id pregunta: 11046 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Qu&eacute; Directiva establece las reglas generales para el establecimiento de una Infraestructura de Informaci&oacute;n Espacial en la Comunidad Europea basada en las Infraestructuras de los Estados miembros?";
 choices[94]= new Array();
 choices[94][0] = "INSPIRE";
 choices[94][1] = "SIGPAC";
 choices[94][2] = "SIC";
 choices[94][3] = "SIGMAPA";
 answers[94] = choices[94][0];
 units[94] = "67";
 comments[94] = "Id Pregunta: 11046. ";


//  Id pregunta: 11134 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Cu&aacute;l de las siguientes no es una Shell de Linux?";
 choices[95]= new Array();
 choices[95][0] = "Shell X";
 choices[95][1] = "Shell de Korn";
 choices[95][2] = "Shell de Bourne";
 choices[95][3] = "Shell C";
 answers[95] = choices[95][0];
 units[95] = "54";
 comments[95] = "Id Pregunta: 11134. ";


//  Id pregunta: 11214 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Respecto a los componentes de Java Platform SE cual de las siguientes afirmaciones es falsa:";
 choices[96]= new Array();
 choices[96][0] = "El JDK contiene todos los niveles, incluyendo JRE y adem&aacute;s herramientas como compiladores y depuradores de errores (debuggers).";
 choices[96][1] = "JRE no incluye la JVM.";
 choices[96][2] = "Las Java SE APIs est&aacute;n basadas en especificaciones JSR (Java Specification Request) las cuales son aprobadas dentro del Java CommunityProcess (JCP).";
 choices[96][3] = "La JVM es propiedad de Oracle.";
 answers[96] = choices[96][1];
 units[96] = "60";
 comments[96] = "Id Pregunta: 11214. ";


//  Id pregunta: 11215 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Sobre la  tecnolog&iacute;a Java WebStart es cierto que:";
 choices[97]= new Array();
 choices[97][0] = "Permite la  instalaci&oacute;n de la aplicaci&oacute;n pero no su actualizaci&oacute;n.";
 choices[97][1] = "Permite la distribuci&oacute;n de aplicaciones Java sin instalaci&oacute;n adicional y desde cualquier navegador web.";
 choices[97][2] = "Utiliza JNLP (Java LaunchingProtocol) definido en la JSR-56 y basado en XML.";
 choices[97][3] = "Las dos anteriores son ciertas.";
 answers[97] = choices[97][3];
 units[97] = "60";
 comments[97] = "Id Pregunta: 11215. ";


//  Id pregunta: 11314 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  En relaci&oacute;n con el servicio de directorio X.500, se&ntilde;alar la falsa.";
 choices[98]= new Array();
 choices[98][0] = "Cada entrada del Directorio, tiene un identificador &uacute;nico que el RDN.";
 choices[98][1] = "La parte com&uacute;n de todas las entradas u objetos, se llama Suffix.";
 choices[98][2] = "El conjunto de objetos, constituyen un DMD o dominio de gesti&oacute;n.";
 choices[98][3] = "X.500 no define nada sobre la interfaz de usuario.";
 answers[98] = choices[98][0];
 units[98] = "73";
 comments[98] = "Id Pregunta: 11314. El identificador &uacute;nico de cada entrada del directorio es el DN, que es como la direcci&oacute;n absoluta de un fichero.";


//  Id pregunta: 11516 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  La RFC del IETF que hace referencia al modelo de directorio LDAP es:";
 choices[99]= new Array();
 choices[99][0] = "RFC 3161";
 choices[99][1] = "RFC 4510";
 choices[99][2] = "RFC 4120";
 choices[99][3] = "RFC 6101";
 answers[99] = choices[99][1];
 units[99] = "73";
 comments[99] = "Id Pregunta: 11516. NULL";


