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

//  Id pregunta: 670 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  Seg&uacute;n el R.D. 209/2003:";
 choices[0]= new Array();
 choices[0][0] = "la Administraci&oacute;n P&uacute;blica proporcionar&aacute; al ciudadano una direcci&oacute;n &uacute;nica mediante la que &eacute;ste deber&aacute; realizar la tramitaci&oacute;n electr&oacute;nica pertinente una vez se disponga de los medios adecuados";
 choices[0][1] = "Se podr&aacute;n realizar por los organismos competentes copias firmadas de los documentos electr&oacute;nicos, de la misma manera que se pueden compulsar y sellar copias de los documentos en papel";
 choices[0][2] = "Los c&oacute;mputos de los plazos de entrega a efectos legales podr&aacute;n incluir d&iacute;as inh&aacute;biles, al estar los registros electr&oacute;nicos funcionando 24 horas al d&iacute;a y 7 d&iacute;as a la semana";
 choices[0][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[0] = choices[0][3];
 units[0] = "30";
 comments[0] = "Id Pregunta: 670. NULL";


//  Id pregunta: 672 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  Teniendo en cuenta el RD 209/2003, indique cu&aacute;l de los siguientes requisitos no es preciso asegurar en la transmisi&oacute;n o recepci&oacute;n de comunicaciones entre la Administraci&oacute;n del Estado y cualquier persona f&iacute;sica o jur&iacute;dica?:";
 choices[1]= new Array();
 choices[1][0] = "Garant&iacute;a de disponibilidad y acceso";
 choices[1][1] = "Existencia de compatibilidad entre emisor y receptor";
 choices[1][2] = "Existencia de medidas de seguridad tendentes a evitar la interceptaci&oacute;n y alteraci&oacute;n de comunicaciones as&iacute; como los accesos no autorizados";
 choices[1][3] = "Garant&iacute;a de comunicaci&oacute;n multicanal entre emisor y receptor";
 answers[1] = choices[1][3];
 units[1] = "30";
 comments[1] = "Id Pregunta: 672. ";


//  Id pregunta: 705 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  Cu&aacute;l no es una caracter&iacute;stica del software libre:";
 choices[2]= new Array();
 choices[2][0] = "Libertad de distribuir copias";
 choices[2][1] = "Gratuidad";
 choices[2][2] = "Libertad de realizar modificaciones particulares y mantenerlas para uso privado";
 choices[2][3] = "C&oacute;digo abierto";
 answers[2] = choices[2][1];
 units[2] = "61";
 comments[2] = "Id Pregunta: 705. Similar a examen TIC MAP A 2004";


//  Id pregunta: 719 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  Para realizar un programa que accede a una base de datos para presentar el resultado de una b&uacute;squeda, se utilizar&aacute;:";
 choices[3]= new Array();
 choices[3][0] = "Sentencias de lectura de los ficheros que componen la base de datos";
 choices[3][1] = "SQL embebido en un lenguaje de programaci&oacute;n";
 choices[3][2] = "SQL din&aacute;mico, ya que es m&aacute;s eficiente que el SQL est&aacute;tico";
 choices[3][3] = "SQL, escrito directamente sobre una sesi&oacute;n de la base de datos";
 answers[3] = choices[3][1];
 units[3] = "58";
 comments[3] = "Id Pregunta: 719. Examen TIC MAP B 2004";


//  Id pregunta: 727 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  &iquest;Cu&aacute;l de los siguientes conceptos se clasifica dentro de la tipolog&iacute;a de &quot;Estructuras de datos no lineales&quot;?";
 choices[4]= new Array();
 choices[4][0] = "Pilas";
 choices[4][1] = "Listas";
 choices[4][2] = "Colas";
 choices[4][3] = "&Aacute;rboles";
 answers[4] = choices[4][3];
 units[4] = "57";
 comments[4] = "Id Pregunta: 727. Examen TIC MAP B 2004";


//  Id pregunta: 746 AÃ±o de creación de pregunta: 2004-01-01
 questions[5]= "6)  La ciencia que trata de descifrar mensajes cifrados sin conocer los c&oacute;digos se denomina:";
 choices[5]= new Array();
 choices[5][0] = "Criptoan&aacute;lisis o an&aacute;lisis criptogr&aacute;fico";
 choices[5][1] = "Ingenier&iacute;a social";
 choices[5][2] = "Fuerza Bruta";
 choices[5][3] = "Criptograf&iacute;a";
 answers[5] = choices[5][0];
 units[5] = "72";
 comments[5] = "Id Pregunta: 746. Similar a examen TIC SS A 2003";


//  Id pregunta: 765 AÃ±o de creación de pregunta: 2004-01-01
 questions[6]= "7)  con respecto a la seguridad";
 choices[6]= new Array();
 choices[6][0] = "PGP basa su modelo en la existencia de una entidad de certificacion ";
 choices[6][1] = "si la entidad de certificaci&oacute;n es de reconocido prestigio, no se necesita entidad de registro en PKI";
 choices[6][2] = "El certificado digital contiene s&oacute;lo la clave p&uacute;blica, no los datos del sujeto";
 choices[6][3] = "Ninguna de las anteriores";
 answers[6] = choices[6][3];
 units[6] = "73";
 comments[6] = "Id Pregunta: 765. ";


//  Id pregunta: 799 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Qu&eacute; tipo de aplicaciones son Vuze, eMule, eDonkey&hellip;?:";
 choices[7]= new Array();
 choices[7][0] = "Chat";
 choices[7][1] = "Correo electr&oacute;nico";
 choices[7][2] = "Peer to Peer";
 choices[7][3] = "B2C";
 answers[7] = choices[7][2];
 units[7] = "62";
 comments[7] = "Id Pregunta: 799. ";


//  Id pregunta: 855 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Cu&aacute;l de las siguientes proposiciones es falsa respecto de WML?:";
 choices[8]= new Array();
 choices[8][0] = "El significado de las siglas WML es Wireless Mask Language";
 choices[8][1] = "El lenguaje WML est&aacute; basado en el est&aacute;ndar XML";
 choices[8][2] = "La DTD puede estar en la red o puede almacenarse localmente";
 choices[8][3] = "El lenguaje WML no s&oacute;lo permite texto sino que tambi&eacute;n permite im&aacute;genes";
 answers[8] = choices[8][0];
 units[8] = "69";
 comments[8] = "Id Pregunta: 855. NULL";


//  Id pregunta: 922 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Qu&eacute; es el UART?:";
 choices[9]= new Array();
 choices[9][0] = "Universal Asynchronous Receiver Transmitter. Es un microprocesador que act&uacute;a de interfaz entre el bus (paralelo) de la CPU y el puerto serie";
 choices[9][1] = "Universal Asynchronous Receiver Transmitter. Es un dispositivo que adapta terminales as&iacute;ncronos a una red X.25";
 choices[9][2] = "Universal Audio Receiver Transmitter. Es un microprocesador incluido en la tarjeta de sonido que act&uacute;a como receptor y transmisor de las se&ntilde;ales de audio";
 choices[9][3] = "Ninguna de las respuestas anteriores es cierta";
 answers[9] = choices[9][0];
 units[9] = "47";
 comments[9] = "Id Pregunta: 922. ";


//  Id pregunta: 938 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Qu&eacute; relaci&oacute;n existe entre SGML y HTML?:";
 choices[10]= new Array();
 choices[10][0] = "HTML es un subconjunto de SGML";
 choices[10][1] = "SGML es un subconjunto de HTML";
 choices[10][2] = "SGML se inspir&oacute; en HTML";
 choices[10][3] = "No tienen relaci&oacute;n";
 answers[10] = choices[10][0];
 units[10] = "69";
 comments[10] = "Id Pregunta: 938. NULL";


//  Id pregunta: 994 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  DIMM y SIMM son:";
 choices[11]= new Array();
 choices[11][0] = "2 formas de paralelismo en ordenadores (Distributed y Single)";
 choices[11][1] = "2 formas de gesti&oacute;n de memoria (Memory Management)";
 choices[11][2] = "2 tipos de encapsulado de memoria (Dual y Single)";
 choices[11][3] = "2 organismos de estandarizaci&oacute;n para Internet (Internet &amp; MultiMedia)";
 answers[11] = choices[11][2];
 units[11] = "47";
 comments[11] = "Id Pregunta: 994. ";


//  Id pregunta: 997 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  EDSAC y ENIAC son ejemplos de:";
 choices[12]= new Array();
 choices[12][0] = "comit&eacute;s reguladores de auditor&iacute;as inform&aacute;ticas";
 choices[12][1] = "algoritmos criptogr&aacute;ficos de clave sim&eacute;trica";
 choices[12][2] = "est&aacute;ndares de tecnolog&iacute;as de almacenamiento";
 choices[12][3] = "ordenadores de mediados del siglo XX";
 answers[12] = choices[12][3];
 units[12] = "47";
 comments[12] = "Id Pregunta: 997. ";


//  Id pregunta: 1022 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  El Kernel del sistema objetivo del proyecto GNU es:";
 choices[13]= new Array();
 choices[13][0] = "El kernel 'Linux', mantenido por Linus Torvalds";
 choices[13][1] = "El kernel de Minix, de Andrew S. Tanembaum";
 choices[13][2] = "El kernel Hurd";
 choices[13][3] = "Todas son falsas";
 answers[13] = choices[13][2];
 units[13] = "53";
 comments[13] = "Id Pregunta: 1022. ";


//  Id pregunta: 1083 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  En el lenguaje Java a las variables de clase (class variables) se les denomina tambi&eacute;n:";
 choices[14]= new Array();
 choices[14][0] = "Private o privadas";
 choices[14][1] = "Static o est&aacute;ticas";
 choices[14][2] = "Final o final";
 choices[14][3] = "System o sistema";
 answers[14] = choices[14][1];
 units[14] = "60";
 comments[14] = "Id Pregunta: 1083. NULL";


//  Id pregunta: 1112 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  En la terminolog&iacute;a de software libre:";
 choices[15]= new Array();
 choices[15][0] = "El software libre no tiene porque ser gratis";
 choices[15][1] = "Las licencias existentes no ponen ning&uacute;n tipo de limitaciones a su modificaci&oacute;n";
 choices[15][2] = "A la hora de redistribuir el software, s&oacute;lo podemos redistribuir las fuentes";
 choices[15][3] = "El uso de software considerado como libre s&oacute;lo est&aacute; disponible para determinadas plataformas, por incompatibilidades t&eacute;cnicas";
 answers[15] = choices[15][0];
 units[15] = "61";
 comments[15] = "Id Pregunta: 1112. ";


//  Id pregunta: 1124 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  En programaci&oacute;n concurrente, el problema de la exclusi&oacute;n mutua consiste en:";
 choices[16]= new Array();
 choices[16][0] = "2 procesos no pueden estar a la vez en la secci&oacute;n cr&iacute;tica";
 choices[16][1] = "Todo proceso debe de poder entrar en la seccion critica";
 choices[16][2] = "Un proceso de fuera de la secci&oacute;n critica no puede bloquear el acceso a otro";
 choices[16][3] = "Todas son ciertas";
 answers[16] = choices[16][3];
 units[16] = "52";
 comments[16] = "Id Pregunta: 1124. ";


//  Id pregunta: 1140 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  En un perif&eacute;rico de la CPU se distinguen:";
 choices[17]= new Array();
 choices[17][0] = "Las se&ntilde;ales de control y el acceso directo a memoria (DMA)";
 choices[17][1] = "Se&ntilde;ales de direcci&oacute;n y de datos";
 choices[17][2] = "E/S y acceso directo a memoria (DMA)";
 choices[17][3] = "Dispositivo perif&eacute;rico y controlador del perif&eacute;rico";
 answers[17] = choices[17][3];
 units[17] = "47";
 comments[17] = "Id Pregunta: 1140. ";


//  Id pregunta: 1157 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  En Unix el comando  pwd sirve para:";
 choices[18]= new Array();
 choices[18][0] = "Introducir la contrase&ntilde;a al sistema";
 choices[18][1] = "Saber cu&aacute;l es directorio donde se est&aacute; situado";
 choices[18][2] = "Cambiar nuestra contrase&ntilde;a";
 choices[18][3] = "Saber cu&aacute;l es nuestra impresora asignada";
 answers[18] = choices[18][1];
 units[18] = "54";
 comments[18] = "Id Pregunta: 1157. NULL";


//  Id pregunta: 1160 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  En Unix un proceso puede crear otro proceso Unix si:";
 choices[19]= new Array();
 choices[19][0] = "Tiene privilegios suficientes";
 choices[19][1] = "Tiene mayor prioridad que un determinado umbral";
 choices[19][2] = "Tiene suficientes recursos disponibles";
 choices[19][3] = "No puede ";
 answers[19] = choices[19][2];
 units[19] = "53";
 comments[19] = "Id Pregunta: 1160. ";


//  Id pregunta: 1197 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Java ME es:";
 choices[20]= new Array();
 choices[20][0] = "Una versi&oacute;n de Java que permite explotar las capacidades multimedia de los nuevos procesadores";
 choices[20][1] = "Una versi&oacute;n reducida de Java dise&ntilde;ada para ser ejecutada en dispositivos m&oacute;viles o embebidos.";
 choices[20][2] = "Una versi&oacute;n de Java que permite varias ejecuciones simult&aacute;neas y multiplexadas de un programa para ejecuci&oacute;n en procesadores en paralelo";
 choices[20][3] = "Una versi&oacute;n de Java optimizada para Macintosh";
 answers[20] = choices[20][1];
 units[20] = "60";
 comments[20] = "Id Pregunta: 1197. NULL";


//  Id pregunta: 1198 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  Java ME:";
 choices[21]= new Array();
 choices[21][0] = "Es una versi&oacute;n de la tecnolog&iacute;a Java2 para plataformas m&oacute;viles";
 choices[21][1] = "Es una version de la tecnolog&iacute;a Java2 orientada a electrodom&eacute;sticos";
 choices[21][2] = "Es una version de la tecnolog&iacute;a Java2 orientada a sistemas dom&oacute;ticos";
 choices[21][3] = "Todas las anteriores respuestas son falsas";
 answers[21] = choices[21][0];
 units[21] = "60";
 comments[21] = "Id Pregunta: 1198. NULL";


//  Id pregunta: 1211 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  La cla&uacute;sula GROUP BY se utiliza para:";
 choices[22]= new Array();
 choices[22][0] = "Agrupar varios atributos para formar una clave";
 choices[22][1] = "Formar una vista con elementos de varias tablas";
 choices[22][2] = "Agrupar usuarios para asignar privilegio";
 choices[22][3] = "Obtener en una sentencia SELECT grupos de tuplas en lugar de tuplas individuales";
 answers[22] = choices[22][3];
 units[22] = "58";
 comments[22] = "Id Pregunta: 1211. ";


//  Id pregunta: 1305 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Para Unix un archivo de compone de:";
 choices[23]= new Array();
 choices[23][0] = "Un conjunto de i-nodos m&aacute;s un conjunto de bloques de datos";
 choices[23][1] = "Una secuencia de bytes";
 choices[23][2] = "Un conjunto de bloques de datos m&aacute;s la estructura de punteros que determina d&oacute;nde se encuentran &eacute;stos";
 choices[23][3] = "Un bloque de datos m&aacute;s una cabecera de direccionamiento";
 answers[23] = choices[23][1];
 units[23] = "53";
 comments[23] = "Id Pregunta: 1305. ";


//  Id pregunta: 1346 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Se&ntilde;ale la alternativa que contiene los operadores que, juntos, componen el operador &lsquo;join&rsquo; del &aacute;lgebra relacional:";
 choices[24]= new Array();
 choices[24][0] = "Selecci&oacute;n, proyecci&oacute;n y diferencia";
 choices[24][1] = "Selecci&oacute;n, proyecci&oacute;n y producto cartesiano";
 choices[24][2] = "Proyecci&oacute;n, producto cartesiano y diferencia";
 choices[24][3] = "Proyecci&oacute;n, producto cartesiano y uni&oacute;n";
 answers[24] = choices[24][1];
 units[24] = "58";
 comments[24] = "Id Pregunta: 1346. ";


//  Id pregunta: 1351 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Se&ntilde;ale la respuesta falsa. El Lenguaje Modula 2:";
 choices[25]= new Array();
 choices[25][0] = "Surgi&oacute; del lenguaje Pascal.";
 choices[25][1] = "Es orientado a objetos.";
 choices[25][2] = "Fue dise&ntilde;ado por Wirth.";
 choices[25][3] = "Es fuertemente tipado.";
 answers[25] = choices[25][1];
 units[25] = "";
 comments[25] = "Id Pregunta: 1351. ";


//  Id pregunta: 1449 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  &iquest;Cu&aacute;l de las siguientes licencias no es compatible con la licencia General Public License (GPL)?:";
 choices[26]= new Array();
 choices[26][0] = "Lesser General Public License (LGPL)";
 choices[26][1] = "Modified BSD License";
 choices[26][2] = "Mozilla Public License (MPL)";
 choices[26][3] = "X11 License";
 answers[26] = choices[26][2];
 units[26] = "61,62";
 comments[26] = "Id Pregunta: 1449. ";


//  Id pregunta: 1490 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  El creador de JAVA es:";
 choices[27]= new Array();
 choices[27][0] = "Microsoft";
 choices[27][1] = "IBM";
 choices[27][2] = "SUN Microsystems";
 choices[27][3] = "CERN";
 answers[27] = choices[27][2];
 units[27] = "116";
 comments[27] = "Id Pregunta: 1490. ";


//  Id pregunta: 1521 AÃ±o de creación de pregunta: 2003-01-01
 questions[28]= "29)  C&oacute;mo se llama la licencia bajo la que se distribuye el software del proyecto GNU";
 choices[28]= new Array();
 choices[28][0] = "MPL";
 choices[28][1] = "BSD";
 choices[28][2] = "GPL";
 choices[28][3] = "PPL";
 answers[28] = choices[28][2];
 units[28] = "61";
 comments[28] = "Id Pregunta: 1521. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 1672 AÃ±o de creación de pregunta: 2004-01-01
 questions[29]= "30)  &iquest;Qu&eacute; es un cluster?";
 choices[29]= new Array();
 choices[29][0] = "Un sistema paralelo distribuido de &aacute;mbito local";
 choices[29][1] = "Un sistema paralelo distribuido de &aacute;mbito global";
 choices[29][2] = "Un sistema distribuido paralelo de &aacute;mbito local";
 choices[29][3] = "Un sistema distribuido paralelo de &aacute;mbito global";
 answers[29] = choices[29][0];
 units[29] = "45";
 comments[29] = "Id Pregunta: 1672. ";


//  Id pregunta: 1675 AÃ±o de creación de pregunta: 2004-01-01
 questions[30]= "31)  &iquest;Cu&aacute;l NO es uno de los principios de Codd?";
 choices[30]= new Array();
 choices[30][0] = "Acceso garantizado";
 choices[30][1] = "Independencia f&iacute;sica de los datos";
 choices[30][2] = "Gesti&oacute;n de una BDR";
 choices[30][3] = "Actualizaci&oacute;n de tablas";
 answers[30] = choices[30][3];
 units[30] = "58";
 comments[30] = "Id Pregunta: 1675. ";


//  Id pregunta: 1711 AÃ±o de creación de pregunta: 2006-01-01
 questions[31]= "32)  Un mainframe:";
 choices[31]= new Array();
 choices[31][0] = "Es equivalente a una supercomputadora cara";
 choices[31][1] = "utiliza toda su potencia en ejecutar unos pocos programas lo m&aacute;s r&aacute;pidamente posible";
 choices[31][2] = "es multitarea y multiproceso, pero monousuario";
 choices[31][3] = "utiliza su potencia para ejecutar muchos programas concurrentemente";
 answers[31] = choices[31][3];
 units[31] = "49";
 comments[31] = "Id Pregunta: 1711. ";


//  Id pregunta: 1712 AÃ±o de creación de pregunta: 2006-01-01
 questions[32]= "33)  Ordene de menor a mayor seg&uacute;n el n&uacute;mero de usuarios y carga de trabajo esperado:";
 choices[32]= new Array();
 choices[32][0] = "PDA, PC, estaci&oacute;n de trabajo, miniordenador, mainframe";
 choices[32][1] = "PDA, miniordenador, PC, estaci&oacute;n de trabajo, mainframe";
 choices[32][2] = "PDA, PC, miniordenador, estaci&oacute;n de trabajo, mainframe";
 choices[32][3] = "miniordenador, PDA, PC, estaci&oacute;n de trabajo, mainframe";
 answers[32] = choices[32][0];
 units[32] = "49";
 comments[32] = "Id Pregunta: 1712. ";


//  Id pregunta: 1724 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  El estandar 1003.9 especifica:";
 choices[33]= new Array();
 choices[33][0] = "Extensiones para la seguridad";
 choices[33][1] = " Administraci&oacute;n del Sistema";
 choices[33][2] = " Lenguaje Fortran.";
 choices[33][3] = "Acceso transparente a archivos.";
 answers[33] = choices[33][2];
 units[33] = "53";
 comments[33] = "Id Pregunta: 1724. ";


//  Id pregunta: 1726 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  Las partes del sistema operativo que acceden directamente a los recursos hardware";
 choices[34]= new Array();
 choices[34][0] = "Se ejecutan en modo usuario";
 choices[34][1] = "Se desarrollan por los usuarios";
 choices[34][2] = "Se desarrollan de forma gen&eacute;rica";
 choices[34][3] = "Se ejcutan en modo protegido";
 answers[34] = choices[34][3];
 units[34] = "54";
 comments[34] = "Id Pregunta: 1726. NULL";


//  Id pregunta: 1750 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  qu&eacute; es JDBC";
 choices[35]= new Array();
 choices[35][0] = "un modelo de objetos ActiveX";
 choices[35][1] = "Una interfaz a nivel de llamadas (CLI) dise&ntilde;ada para programas escritos en C";
 choices[35][2] = "Un controlador de planificaci&oacute;n de procesos en monitores transaccionales (Job Database Control).";
 choices[35][3] = "Una interfaz de programaci&oacute;n de aplicaciones (API) Java para ejecutar sentencias SQL.";
 answers[35] = choices[35][3];
 units[35] = "58";
 comments[35] = "Id Pregunta: 1750. ";


//  Id pregunta: 1782 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  Se&ntilde;ale la definici&oacute;n m&aacute;s correcta para el producto XEN:";
 choices[36]= new Array();
 choices[36][0] = "Entorno de ejecuci&oacute;n .NET sobre Linux, al estilo de Mono";
 choices[36][1] = "Hoja de c&aacute;lculo para KDE";
 choices[36][2] = "Sistema gestor de redes empresariales extendidas";
 choices[36][3] = "Sistema de virtualizaci&oacute;n de sistemas operativos, de fuente abierta";
 answers[36] = choices[36][3];
 units[36] = "61,62";
 comments[36] = "Id Pregunta: 1782. ";


//  Id pregunta: 1783 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  En el proyecto RHODAS del MAP, para la renovaci&oacute;n del parque ofim&aacute;tico del ministerio mediante puestos de trabajo equipados con software libre, indique qu&eacute; entorno de escritorio fue elegido en la arquitectura de referencia:";
 choices[37]= new Array();
 choices[37][0] = "KDE";
 choices[37][1] = "Wine";
 choices[37][2] = "GNOME";
 choices[37][3] = "Konkeror";
 answers[37] = choices[37][0];
 units[37] = "61,62";
 comments[37] = "Id Pregunta: 1783. ";


//  Id pregunta: 1794 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  Para representaci&oacute;n del conocimiento, las redes sem&aacute;nticas";
 choices[38]= new Array();
 choices[38][0] = "Utilizan redes donde los nodos son ideas y los arcos relaciones entre ellas";
 choices[38][1] = "Utilizan slots donde cada slot se corresponde con una idea ";
 choices[38][2] = "Generan nuevas soluciones mediante mutaciones aleatorias de la poblaci&oacute;n";
 choices[38][3] = "Utilizan redes donde cada nodo tiene un valor y cada arco un sentido y un valor.";
 answers[38] = choices[38][0];
 units[38] = "64";
 comments[38] = "Id Pregunta: 1794. ";


//  Id pregunta: 1854 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  Las aplicaciones fundamentales de la criptograf&iacute;a asim&eacute;trica son:";
 choices[39]= new Array();
 choices[39][0] = "El cifrado eficiente y la firma digital";
 choices[39][1] = "El intercambio seguro  de claves privadas o de sesi&oacute;n y la firma digital";
 choices[39][2] = "El intercambio seguro de claves  privadas o de sesi&oacute;n y el cifrado eficiente";
 choices[39][3] = "Todas las anteriores";
 answers[39] = choices[39][1];
 units[39] = "72";
 comments[39] = "Id Pregunta: 1854. ";


//  Id pregunta: 1864 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  &iquest;En qu&eacute; nivel de la pila OSI se sit&uacute;a el protocolo LDAP?";
 choices[40]= new Array();
 choices[40][0] = "Aplicaci&oacute;n";
 choices[40][1] = "Transporte";
 choices[40][2] = "Red";
 choices[40][3] = "Sesi&oacute;n";
 answers[40] = choices[40][0];
 units[40] = "74";
 comments[40] = "Id Pregunta: 1864. NULL";


//  Id pregunta: 1867 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  En el protocolo LDAP:";
 choices[41]= new Array();
 choices[41][0] = "La operaci&oacute;n bind permite autenticar al cliente frente al  directorio";
 choices[41][1] = "SASL se a&ntilde;adi&oacute; en LDAP v3";
 choices[41][2] = "La operaci&oacute;n unbind cierra la conexi&oacute;n con el servidor LDAP";
 choices[41][3] = "Todas las anteriores";
 answers[41] = choices[41][3];
 units[41] = "74";
 comments[41] = "Id Pregunta: 1867. NULL";


//  Id pregunta: 1904 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  Copia &quot;cercana&quot; de datos que permite un acceso m&aacute;s r&aacute;pido que el almacenamiento habitual";
 choices[42]= new Array();
 choices[42][0] = "registro";
 choices[42][1] = "cache";
 choices[42][2] = "buffer";
 choices[42][3] = "pipelining";
 answers[42] = choices[42][1];
 units[42] = "47";
 comments[42] = "Id Pregunta: 1904. ";


//  Id pregunta: 1936 AÃ±o de creación de pregunta: 2006-01-01
 questions[43]= "44)  En JDBC &iquest;qu&eacute; tipo de driver no permite trabajar con applets?";
 choices[43]= new Array();
 choices[43][0] = "Driver Tipo 1";
 choices[43][1] = "Driver Tipo 2";
 choices[43][2] = "Driver Tipo 3";
 choices[43][3] = "Driver Tipo 4";
 answers[43] = choices[43][0];
 units[43] = "60";
 comments[43] = "Id Pregunta: 1936. NULL";


//  Id pregunta: 2921 AÃ±o de creación de pregunta: 2003-01-01
 questions[44]= "45)  El tiempo de respuesta en teor&iacute;a de colas es:";
 choices[44]= new Array();
 choices[44][0] = "Tiempo de servicio de un dispositivo para un usuario";
 choices[44][1] = "Tiempo de espera mas tiempo de servicio";
 choices[44][2] = "Tiempo que el usuario espera en la cola atendiendo a otros usuarios hasta que le toca el turno";
 choices[44][3] = "Tiempo en que un dispositivo est&aacute; ocupado en atender al sistema operativo";
 answers[44] = choices[44][1];
 units[44] = "53";
 comments[44] = "Id Pregunta: 2921. ";


//  Id pregunta: 4345 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  Mayte ha tecleado desde la l&iacute;nea de comandos del shell de su sistema operativo &ldquo;nslookup www.map.es [enter]&rdquo;. Este comando le dar&aacute; como respuesta en su pantalla:";
 choices[45]= new Array();
 choices[45][0] = "La direcci&oacute;n Ethernet del ordenador de Mayte.";
 choices[45][1] = "El tiempo que tarda un paquete de datos desde la m&aacute;quina de Mayte hasta el servidor del MAP.";
 choices[45][2] = "La direcci&oacute;n IP del MAP.";
 choices[45][3] = "La lista de directorios y archivos del directorio ra&iacute;z del MAP";
 answers[45] = choices[45][2];
 units[45] = "100";
 comments[45] = "Id Pregunta: 4345. ";


//  Id pregunta: 4467 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  El DNI digital permitir&aacute;:";
 choices[46]= new Array();
 choices[46][0] = "Firmar y cifrar.";
 choices[46][1] = "Solo firmar.";
 choices[46][2] = "Solo cifrar.";
 choices[46][3] = "Solo funciones 3DES";
 answers[46] = choices[46][1];
 units[46] = "74";
 comments[46] = "Id Pregunta: 4467. NULL";


//  Id pregunta: 4534 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  &iquest;Cu&aacute;l de las siguientes no es una herramienta de la Oracle Developer Suite? ";
 choices[47]= new Array();
 choices[47][0] = "Forms.";
 choices[47][1] = "Reports.";
 choices[47][2] = "Designer.";
 choices[47][3] = "Fusion.";
 answers[47] = choices[47][3];
 units[47] = "57,58";
 comments[47] = "Id Pregunta: 4534. ";


//  Id pregunta: 4568 AÃ±o de creación de pregunta: 2007-01-01
 questions[48]= "49)  Indique cual de los siguientes no es un lenguaje relacional:";
 choices[48]= new Array();
 choices[48][0] = "RQL";
 choices[48][1] = "QUEL";
 choices[48][2] = "QBE";
 choices[48][3] = "SQL";
 answers[48] = choices[48][0];
 units[48] = "58";
 comments[48] = "Id Pregunta: 4568. ";


//  Id pregunta: 4574 AÃ±o de creación de pregunta: 2007-01-01
 questions[49]= "50)  &iquest;Cual de los siguientes tipos de sistemas de ficheros, lo es de red?";
 choices[49]= new Array();
 choices[49][0] = "ext2";
 choices[49][1] = "swap";
 choices[49][2] = "SMB";
 choices[49][3] = "MSB";
 answers[49] = choices[49][2];
 units[49] = "56";
 comments[49] = "Id Pregunta: 4574. ";


//  Id pregunta: 4685 AÃ±o de creación de pregunta: 2007-01-01
 questions[50]= "51)  En el &aacute;mbito de la miner&iacute;a de datos &iquest;c&oacute;mo se llama la herramienta con la que se establecen relaciones entre elementos?";
 choices[50]= new Array();
 choices[50][0] = "Clasificaci&oacute;n.";
 choices[50][1] = "Asociaci&oacute;n.";
 choices[50][2] = "Agrupaci&oacute;n.";
 choices[50][3] = "Secuenciaci&oacute;n.";
 answers[50] = choices[50][2];
 units[50] = "68";
 comments[50] = "Id Pregunta: 4685. Examen 2006 JCYL";


//  Id pregunta: 4912 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  Seg&uacute;n la arquitectura est&aacute;ndar de los SGBD, ANSI/X3/SPARC &iquest;en qu&eacute; nivel se define el esquema de la base dedatos?:";
 choices[51]= new Array();
 choices[51][0] = "Nivel conceptual.";
 choices[51][1] = "Nivel f&iacute;sico.";
 choices[51][2] = "Nivel de aplicaci&oacute;n.";
 choices[51][3] = "Nivel l&oacute;gico.";
 answers[51] = choices[51][0];
 units[51] = "57";
 comments[51] = "Id Pregunta: 4912. Examen TIC B 2007";


//  Id pregunta: 4920 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  Los algoritmos &ldquo;no supervisados&rdquo; en Miner&iacute;a de Datos:";
 choices[52]= new Array();
 choices[52][0] = "Se llaman tambi&eacute;n 'predictivos'.";
 choices[52][1] = "Utilizan la t&eacute;cnica de '&aacute;rboles de decisi&oacute;n'.";
 choices[52][2] = "Sirven para descubrir patrones y tendencias en los datos actuales.";
 choices[52][3] = "Predicen el valor de un atributo de un conjunto de datos, conocidos otros atributos.";
 answers[52] = choices[52][2];
 units[52] = "68";
 comments[52] = "Id Pregunta: 4920. Examen TIC B 2007";


//  Id pregunta: 4952 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  &iquest;Qu&eacute; proporciona el proyecto MONO?:";
 choices[53]= new Array();
 choices[53][0] = "Software libre para desarrollar y ejecutar aplicaciones .NET.";
 choices[53][1] = "Un entorno de desarrollo integrado de software libre para aplicaciones J2EE 5.0.";
 choices[53][2] = "Software libre para una soluci&oacute;n integrada de movilidad para correo electr&oacute;nico y agendas.";
 choices[53][3] = "Un ESB (Entreprise Service Bus) y plataforma de integraci&oacute;n de software libre para la constituci&oacute;n de arquitectura. SOA.";
 answers[53] = choices[53][0];
 units[53] = "62";
 comments[53] = "Id Pregunta: 4952. Examen TIC B 2007";


//  Id pregunta: 5075 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  El XML (Extensible Markup Language) ha sido desarrollado por el W3C. Indique cu&aacute;l de las siguientesafirmaciones es falsa:";
 choices[54]= new Array();
 choices[54][0] = "Proviene del SGML";
 choices[54][1] = "Pretende ser un est&aacute;ndar para el intercambio de informaci&oacute;n entre plataformas no circunscritoexclusivamente a Internet";
 choices[54][2] = "Dada su extensibilidad no se soporta en bases de datos sino que requiere formatos de texto plano";
 choices[54][3] = "No es un lenguaje propiamente dicho sino un metalenguaje creado para definir lenguages que cubrandiferentes necesidades";
 answers[54] = choices[54][2];
 units[54] = "69";
 comments[54] = "Id Pregunta: 5075. Examen TIC A 2007";


//  Id pregunta: 5500 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no corresponde a la tecnolog&iacute;a de procedimiento anal&iacute;tico en l&iacute;nea (OLAP)?";
 choices[55]= new Array();
 choices[55][0] = "Proporciona respuestas r&aacute;pidas a consultas anal&iacute;ticas complejas e iterativas.";
 choices[55][1] = "Utiliza modelos de datos multidimensionales.";
 choices[55][2] = "Recuperan un dato individual con un alto rendimiento.";
 choices[55][3] = "Ofrece ventajas sobre las BBDD Relacionales a la hora de trabajar sobre datos agregados.";
 answers[55] = choices[55][2];
 units[55] = "68";
 comments[55] = "Id Pregunta: 5500. ";


//  Id pregunta: 5673 AÃ±o de creación de pregunta: 2003-01-01
 questions[56]= "57)  Indique la respuesta correcta en las siguientes afirmaciones respecto al Directorio Activo:";
 choices[56]= new Array();
 choices[56][0] = "Cuando un dominio se une a un &aacute;rbol dedominio se establece autom&aacute;ticamente una relaci&oacute;n de confianza transitiva unidireccional entre el dominio y su primario del &aacute;rbol";
 choices[56][1] = "Cuando un dominio se une a un &aacute;rbol dedominio no se establece autom&aacute;ticamente una relaci&oacute;n de confianza transitivabidireccional entre el dominio y su primario del &aacute;rbol";
 choices[56][2] = "El sistema de replicaci&oacute;n de Active Directory utiliza n&uacute;meros de secuencia de actualizaciones";
 choices[56][3] = "Para la propagaci&oacute;n de actualizaciones de Active Directory, Windows Server 2003proporciona sincronizaci&oacute;n temporal distribuida.";
 answers[56] = choices[56][2];
 units[56] = "56";
 comments[56] = "Id Pregunta: 5673. ";


//  Id pregunta: 5678 AÃ±o de creación de pregunta: 2003-01-01
 questions[57]= "58)  En cuanto a Agentes Software y la Comunicaci&oacute;n y Coordinaci&oacute;n entre agentes, indique la respuesta no correcta:";
 choices[57]= new Array();
 choices[57][0] = "En el sistema de pizarra existe una estructura de datos global, la pizarra que es gestionada y arbitrada por todos los agentes";
 choices[57][1] = "En la red de contratos en cada tarea existen dos roles diferentes: el del contratista, que es responsable de la gesti&oacute;n de una tarea y el del oferente, que se encarga de la ejecuci&oacute;n real de la tarea.";
 choices[57][2] = "KQML  es un  lenguaje de comunicaci&oacute;n entre agentes software.";
 choices[57][3] = "Ninguna de las anteriores es correcta";
 answers[57] = choices[57][0];
 units[57] = "63";
 comments[57] = "Id Pregunta: 5678. ";


//  Id pregunta: 5709 AÃ±o de creación de pregunta: 2009-01-01
 questions[58]= "59)  Como se denomina al conjunto de servicios y protocolos de los servicios web:";
 choices[58]= new Array();
 choices[58][0] = "Web Service Protocol Stack.";
 choices[58][1] = "Web Service Protocol Set.";
 choices[58][2] = "UDDI (Universal Description, Discovery and Integration).";
 choices[58][3] = "SOAP (Simple Object Access Protocol).";
 answers[58] = choices[58][0];
 units[58] = "51";
 comments[58] = "Id Pregunta: 5709. MAP 2008 A2";


//  Id pregunta: 6069 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  Sobre la representaci&oacute;n del conocimiento:";
 choices[59]= new Array();
 choices[59][0] = "Los algoritmos gen&eacute;ticos usan representaci&oacute;n param&eacute;trica";
 choices[59][1] = "Las redes neuronales usan representaci&oacute;n simb&oacute;lica";
 choices[59][2] = "Las dos respuestas anteriores son correctas";
 choices[59][3] = "Todas las respuestas anteriores no son correctas";
 answers[59] = choices[59][0];
 units[59] = "63,64";
 comments[59] = "Id Pregunta: 6069. ";


//  Id pregunta: 6116 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  En un sistema de base de datos relacional, la regla de integridad de las entidades consiste en que:";
 choices[60]= new Array();
 choices[60][0] = "Una relaci&oacute;n debe tener al menos una clave primaria.";
 choices[60][1] = "Ning&uacute;n componente de la clave primaria de una relaci&oacute;n puede aceptar nulos.";
 choices[60][2] = "La clave primaria de una relaci&oacute;n es la &uacute;nica forma de identificar un&iacute;vocamente a una tupla.";
 choices[60][3] = "Si existen varias claves candidatas, la clave primaria es la que tiene menos campos.";
 answers[60] = choices[60][1];
 units[60] = "58";
 comments[60] = "Id Pregunta: 6116. TIC A 2009";


//  Id pregunta: 6140 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  Acerca del protocolo Kerberos v. 5 (IETF RFC 4120):";
 choices[61]= new Array();
 choices[61][0] = "Tiene extensiones que permiten el empleo de criptograf&iacute;a de clave p&uacute;blica y secreta.";
 choices[61][1] = "Los tickets expiran tras un tiempo predeterminado en el protocolo.";
 choices[61][2] = "El servidor de autenticaci&oacute;n cifra el ticket que remite al cliente con una clave que obtiene a partir del nombre y la contrase&ntilde;a del usuario.";
 choices[61][3] = "Utiliza los algoritmos de cifrado bajo el modo de operaci&oacute;n denominado CBC (Cipher block chaining).";
 answers[61] = choices[61][0];
 units[61] = "74";
 comments[61] = "Id Pregunta: 6140. TIC A 2009";


//  Id pregunta: 6174 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  Indique cual de entre los cuales NO es una funci&oacute;n del LMS:";
 choices[62]= new Array();
 choices[62][0] = "Seguimiento de la actividad del alumno.";
 choices[62][1] = "Publicaci&oacute;n de contenidos de formaci&oacute;n";
 choices[62][2] = "Comunicaci&oacute;n profesor-alumno.";
 choices[62][3] = "Matriculaci&oacute;n en cursos.";
 answers[62] = choices[62][1];
 units[62] = "66";
 comments[62] = "Id Pregunta: 6174. NULL";


//  Id pregunta: 6322 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no es propia del modelo relacional?";
 choices[63]= new Array();
 choices[63][0] = "Los datos se perciben como tablas.";
 choices[63][1] = "Los operadores que se utilizan toman como entrada tablas y a su salida presentan entidades.";
 choices[63][2] = "Los operadores que se utilizan toman como entrada tablas y como salida tablas.";
 choices[63][3] = "Dispone de una fuerte componente matem&aacute;tica que le da soporte.";
 answers[63] = choices[63][1];
 units[63] = "58";
 comments[63] = "Id Pregunta: 6322. NULL";


//  Id pregunta: 6432 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  &iquest;Cu&aacute;l de las siguientes aplicaciones es un motor de b&uacute;squeda apoyado por el Apache Software Foundation?";
 choices[64]= new Array();
 choices[64][0] = "Apache WatchDog";
 choices[64][1] = "Apache Velocity";
 choices[64][2] = "Apache Tomcat";
 choices[64][3] = "Apache Lucene";
 answers[64] = choices[64][3];
 units[64] = "62";
 comments[64] = "Id Pregunta: 6432. NULL";


//  Id pregunta: 7168 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  &iquest;Cu&aacute;l de los siguientes NO es uno de los libros que componente MAGERIT v2?";
 choices[65]= new Array();
 choices[65][0] = "M&eacute;todo";
 choices[65][1] = "Cat&aacute;logo de Elementos";
 choices[65][2] = "Cat&aacute;logo de Riesgos";
 choices[65][3] = "Gu&iacute;a de T&eacute;cnicas";
 answers[65] = choices[65][2];
 units[65] = "33";
 comments[65] = "Id Pregunta: 7168. Examen TIC B 2009";


//  Id pregunta: 8305 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  &iquest;Cu&aacute;l de los siguientes perfiles de XAdES incluye los certificados y listas de revocaci&oacute;n (consultas OCSP o CRLs) para poder verificar el documento firmado en el futuro incluso si las fuentes originales no estuvieran disponibles?";
 choices[66]= new Array();
 choices[66][0] = "XAdES-X.";
 choices[66][1] = "XAdES-X-L.";
 choices[66][2] = "XAdES-C. ";
 choices[66][3] = "Esta funcionalidad no se soporta en XAdES.";
 answers[66] = choices[66][1];
 units[66] = "72, 73, 74";
 comments[66] = "Id Pregunta: 8305. Examen TIC A2 2010";


//  Id pregunta: 8373 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  &iquest;Cu&aacute;l de los siguientes niveles de aislamiento previene de los problemas de lecturas sucias y lecturas no  repetibles, pero NO evita las lecturas fantasmas?";
 choices[67]= new Array();
 choices[67][0] = "Read Commited (lectura confirmada).";
 choices[67][1] = "Serializable.";
 choices[67][2] = "Read uncornmited (lectura no confirmada),";
 choices[67][3] = "Repeatable read (lectura repetible).";
 answers[67] = choices[67][3];
 units[67] = "57,58";
 comments[67] = "Id Pregunta: 8373. Examen TIC A2 2010";


//  Id pregunta: 8377 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre iSCSI es FALSA?:";
 choices[68]= new Array();
 choices[68][0] = "Es un est&aacute;ndar de la IETF.";
 choices[68][1] = "Utiliza por defecto los puertos TCP 860 y TCP 3260.";
 choices[68][2] = "Necesita una arquitectura de cableado independiente.";
 choices[68][3] = "Usa CHAP como principal m&eacute;todo de autenticaci&oacute;n.";
 answers[68] = choices[68][2];
 units[68] = "48";
 comments[68] = "Id Pregunta: 8377. Examen TIC A2 2010";


//  Id pregunta: 8409 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  Si en un sistema UNIX, se quiere que el archivo test.txt pueda ser le&iacute;do, modificado (escrito) y ejecutado por su propietario, le&iacute;do y ejecutado por los usuarios que pertenecen al mismo grupo que el propietario, y tan s&oacute;lo le&iacute;do por el resto, &iquest;qu&eacute; instrucci&oacute;n de las siguientes se debe ejecutar?";
 choices[69]= new Array();
 choices[69][0] = "chmod 652 test.txt ";
 choices[69][1] = "chmod 754 test.txt ";
 choices[69][2] = "chmod 654 test.txt ";
 choices[69][3] = "chmod 752 test.txt ";
 answers[69] = choices[69][1];
 units[69] = "53, 54";
 comments[69] = "Id Pregunta: 8409. Examen TIC A2 2010";


//  Id pregunta: 8640 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  Si tenemos las dependencias funcionales (A, B) -&gt; C, B -&gt; D y la siguiente relaci&oacute;n (A, B, C, D) donde (A, B) es la clave candidata. &iquest;Cu&aacute;l seria el resultado de aplicar la 2&ordf; forma normal?";
 choices[70]= new Array();
 choices[70][0] = "(A, B, C), (A, B, D).";
 choices[70][1] = "(A, B, C), (B, D).";
 choices[70][2] = "(A, B, C),  (A, D).";
 choices[70][3] = "Ya est&aacute; en 2FN.";
 answers[70] = choices[70][1];
 units[70] = "57, 58";
 comments[70] = "Id Pregunta: 8640. Examen TIC A2 2010 interna";


//  Id pregunta: 8840 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)   Los conceptos de switch zoning y LUN masking en una red de almacenamiento FC (Fiber Channel)";
 choices[71]= new Array();
 choices[71][0] = " Permiten restringir la conectividad de red entre clientes FC, y gestionar su m&aacute;scara de red din&aacute;micamente ";
 choices[71][1] = " Son utilizados en la administraci&oacute;n de rob&oacute;ticas LTO para copias de seguridad de los discos virtuales";
 choices[71][2] = " Permiten al administrador restringir la visibilidad entre clientes por puerto o WWN, as&iacute; como el acceso a un disco virtual ";
 choices[71][3] = "Ambos conceptos son incompatibles en una red FC ";
 answers[71] = choices[71][2];
 units[71] = "48";
 comments[71] = "Id Pregunta: 8840. Examen UC3M 2010";


//  Id pregunta: 8865 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  Que algoritmo de ordenaci&oacute;n consiste en comparar pares de elementos adyacentes e intercambiarlos entre s&iacute; hasta que est&eacute;n todos ordenados:";
 choices[72]= new Array();
 choices[72][0] = "Insercci&oacute;n";
 choices[72][1] = "Burbuja";
 choices[72][2] = "Selecci&oacute;n";
 choices[72][3] = "Combinaci&oacute;n";
 answers[72] = choices[72][1];
 units[72] = "63, 64";
 comments[72] = "Id Pregunta: 8865. Analista Ayto. Madrid 2010";


//  Id pregunta: 8928 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  La especificaci&oacute;n para crear un CDROM autoarrancable se denomina:";
 choices[73]= new Array();
 choices[73][0] = "UDF.";
 choices[73][1] = "Joliet.";
 choices[73][2] = "El Torito.";
 choices[73][3] = "Autorun";
 answers[73] = choices[73][2];
 units[73] = "48";
 comments[73] = "Id Pregunta: 8928. Operador Ayto. Madrid 2010";


//  Id pregunta: 8960 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  Los pilares de CRM son:";
 choices[74]= new Array();
 choices[74][0] = "Estrategia, personas, servicios, tecnologias";
 choices[74][1] = "Estrategia, personas, gestion, tecnologias";
 choices[74][2] = "Estrategia, clientes, servicios, tecnologias";
 choices[74][3] = "Estrategias, personas, procesos, tecnologias";
 answers[74] = choices[74][3];
 units[74] = "65";
 comments[74] = "Id Pregunta: 8960. ";


//  Id pregunta: 9039 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  &iquest;Qu&eacute; es en java una inner class?";
 choices[75]= new Array();
 choices[75][0] = "Es lo mismo que una clase abstracta";
 choices[75][1] = "Una clase declarada dentro de otra";
 choices[75][2] = "Una clase que no puede ser heredada";
 choices[75][3] = "Ninguno de los anteriores";
 answers[75] = choices[75][1];
 units[75] = "60";
 comments[75] = "Id Pregunta: 9039. NULL";


//  Id pregunta: 9101 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  En el lenguaje ODRL, &iquest;c&oacute;mo se identifica de forma &uacute;nica el contenido digital a proteger?";
 choices[76]= new Array();
 choices[76][0] = "Mediante el elemento Assets.";
 choices[76][1] = "Mediante el elemento Permission.";
 choices[76][2] = "Mediante el elemento Constraints.";
 choices[76][3] = "Todas son falsas.";
 answers[76] = choices[76][0];
 units[76] = "37";
 comments[76] = "Id Pregunta: 9101. ";


//  Id pregunta: 9158 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  NO se encuentra entre las iniciativas de IMS:";
 choices[77]= new Array();
 choices[77][0] = "Empaquetado de metadatos";
 choices[77][1] = "Interoperabilidad de preguntas y tests";
 choices[77][2] = "Empaquetado de informaci&oacute;n del alumno";
 choices[77][3] = "Empaquetado de contenidos";
 answers[77] = choices[77][0];
 units[77] = "66";
 comments[77] = "Id Pregunta: 9158. ";


//  Id pregunta: 9193 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  &iquest;Se pueden proteger las ideas que sirven de base a los programas de ordenador?";
 choices[78]= new Array();
 choices[78][0] = "S&oacute;lo las que sirvan de base para el desarrollo de interfaces";
 choices[78][1] = "S&oacute;lo las que sirvan de base para crear un nuevo programa";
 choices[78][2] = "S&oacute;lo las que sirvan de base para crear un nuevo programa y adem&aacute;s sean originales";
 choices[78][3] = "Todas las anteriores son falsas";
 answers[78] = choices[78][3];
 units[78] = "36";
 comments[78] = "Id Pregunta: 9193. ";


//  Id pregunta: 9221 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  &iquest;Qu&eacute; es el Fabric/switch/port binding?";
 choices[79]= new Array();
 choices[79][0] = "Un mecanismo de seguridad adicional ofrecido por las redes SAN.";
 choices[79][1] = "Puede limitar la conectividad de un determinado equipo a un determinado puerto de un switch dentro del fabric.";
 choices[79][2] = "El dispositivo s&oacute;lo podr&aacute; acceder a la SAN si se conecta f&iacute;sicamente al puerto permitido y s&oacute;lo un dispositivo con el WWN indicado puede conectarse a dicho puerto.";
 choices[79][3] = "Todas son correctas.";
 answers[79] = choices[79][3];
 units[79] = "48";
 comments[79] = "Id Pregunta: 9221. ";


//  Id pregunta: 9603 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  De las siguientes bases de datos &iquest;cual sigue un esquema noSQL?";
 choices[80]= new Array();
 choices[80][0] = "MariaBD";
 choices[80][1] = "Apache Cassandra";
 choices[80][2] = "Heidi";
 choices[80][3] = "Ingres";
 answers[80] = choices[80][1];
 units[80] = "58";
 comments[80] = "Id Pregunta: 9603. NULL";


//  Id pregunta: 9665 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  Cu&aacute;l de las siguientes caracter&iacute;sticas no pertenece a un sistema multiprocesador o mainframe:";
 choices[81]= new Array();
 choices[81][0] = "Son soluciones altamente propietarias para entornos no heterog&eacute;neos.";
 choices[81][1] = "La forma de trabajo predominante en este tipo de sistemas es el BATCH.";
 choices[81][2] = "Se paralelizan sistem&aacute;ticamente las tareas y procesos, aprovechando su alto n&uacute;mero de procesadores.";
 choices[81][3] = "En el mercado hay un gran n&uacute;mero de fabricantes de dichos sistemas.";
 answers[81] = choices[81][3];
 units[81] = "45";
 comments[81] = "Id Pregunta: 9665. ";


//  Id pregunta: 9679 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  En la comparaci&oacute;n en una proyecci&oacute;n Mercator del un &aacute;rea del Atl&aacute;ntico Norte, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[82]= new Array();
 choices[82][0] = "El rumbo loxodr&oacute;mico se toma seg&uacute;n el c&iacute;rculo m&aacute;ximo terrestre o distancia m&aacute;s corta curva en el mapa.";
 choices[82][1] = "El rumbo ortodr&oacute;mico se toma seg&uacute;n los puntos cardinales, l&iacute;nea recta en el mapa.";
 choices[82][2] = "El rumbo loxodr&oacute;mico se toma seg&uacute;n los puntos cardinales, l&iacute;nea recta en el mapa.";
 choices[82][3] = "No existen tales conceptos en la proyecci&oacute;n de Mercator.";
 answers[82] = choices[82][2];
 units[82] = "67";
 comments[82] = "Id Pregunta: 9679. NULL";


//  Id pregunta: 9720 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  Se&ntilde;ale cu&aacute;l de las siguientes formas de actuaci&oacute;n es la especificada para los sistemas de validaci&oacute;n de certificados de clave p&uacute;blica ITU-T X.509 v3.";
 choices[83]= new Array();
 choices[83][0] = "Si el sistema no reconoce una extensi&oacute;n cr&iacute;tica, debe ignorar la extensi&oacute;n y emitir un mensaje advirtiendo la existencia de una extensi&oacute;n cr&iacute;tica no procesable.";
 choices[83][1] = "Si el sistema reconoce una extensi&oacute;n no cr&iacute;tica, debe procesar la extensi&oacute;n y emitir un mensaje indicando su cumplimiento o no.";
 choices[83][2] = "Si el sistema no reconoce una extensi&oacute;n no cr&iacute;tica, debe ignorar la extensi&oacute;n.";
 choices[83][3] = "Si el sistema reconoce una extensi&oacute;n no cr&iacute;tica, es aceptable tanto ignorar como procesar la extensi&oacute;n (depender&aacute; de la implementaci&oacute;n concreta del sistema).";
 answers[83] = choices[83][2];
 units[83] = "73";
 comments[83] = "Id Pregunta: 9720. Examen TIC-A1 2013";


//  Id pregunta: 9773 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  Podremos almacenar un fichero de 6 GB en un dispositivo, si el sistema de ficheros con el que est&aacute; formateado es:";
 choices[84]= new Array();
 choices[84][0] = "FAT32.";
 choices[84][1] = "NTFS. ";
 choices[84][2] = "HPFS";
 choices[84][3] = "ISO 9660:1988 Level 2. ";
 answers[84] = choices[84][1];
 units[84] = "52";
 comments[84] = "Id Pregunta: 9773. Examen TIC A2 2013";


//  Id pregunta: 9774 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  TinyOS, cuyo dise&ntilde;o est&aacute; orientado a sistemas embebidos inal&aacute;mbricos de baja potencia, est&aacute; escrito en el lenguaje:";
 choices[85]= new Array();
 choices[85][0] = "Java ";
 choices[85][1] = "Python ";
 choices[85][2] = ".Net";
 choices[85][3] = "nesC ";
 answers[85] = choices[85][3];
 units[85] = "52";
 comments[85] = "Id Pregunta: 9774. Examen TIC A2 2013";


//  Id pregunta: 10246 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Juan desarrolla un software y publica el c&oacute;digo fuente bajo la licencia GPL. Antonio quiere distribuir el software, junto a m&oacute;dulos de terceros que tienen la siguiente licencia:Este c&oacute;digo puede ser libremente modificado, copiado y distribuido, mientras que no se aplique un pago por ello.&iquest;Representa esto una violaci&oacute;n de la licencia GPL?";
 choices[86]= new Array();
 choices[86][0] = "S&iacute;, porque la licencia GPL requiere que modificaciones de sofware bajo licencia GPL sean publicadas bajo licencia GPL";
 choices[86][1] = "S&iacute;, porque la licencia GPL no permite restricciones adicionales sobre una parte cualquiera del c&oacute;digo";
 choices[86][2] = "No, porque el nuevo c&oacute;digo est&aacute; enlazado con el c&oacute;digo de Juan, no copiado dentro de &eacute;l";
 choices[86][3] = "No, porque el resultado tambi&eacute;n puede ser distribuido de forma gratuita";
 answers[86] = choices[86][1];
 units[86] = "61";
 comments[86] = "Id Pregunta: 10246. ";


//  Id pregunta: 10277 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  En cuanto a las estrategias de inferencia en marcos";
 choices[87]= new Array();
 choices[87][0] = "La estrategia en Z intenta deducir el valor del slot primero a nivel local";
 choices[87][1] = "La estrategia en N intenta deducir el valor del slot primero usando una &uacute;nica faceta ascendiendo por la jerarqu&iacute;a";
 choices[87][2] = "Ambas son ciertas";
 choices[87][3] = "Ninguna es cierta";
 answers[87] = choices[87][2];
 units[87] = "64";
 comments[87] = "Id Pregunta: 10277. NULL";


//  Id pregunta: 10303 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  Internet Small Computer Systems Interface (iSCSI) seg&uacute;n el RFC 3720 es un protocolo de:";
 choices[88]= new Array();
 choices[88][0] = "Enlace.";
 choices[88][1] = "Red.";
 choices[88][2] = "Transporte.";
 choices[88][3] = "Aplicaci&oacute;n.";
 answers[88] = choices[88][2];
 units[88] = "48";
 comments[88] = "Id Pregunta: 10303. TIC A2, libre, examen 2013";


//  Id pregunta: 10307 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  Si queremos restringir el almacenamiento en disco en Linux a determinados usuarios o grupos, &iquest;cu&aacute;l de los siguientes m&eacute;todos podemos usar?";
 choices[89]= new Array();
 choices[89][0] = "Mediante cuotas de disco.";
 choices[89][1] = "Mediante el editor de directivas de grupo.";
 choices[89][2] = "No se puede restringir el almacenamiento a usuarios.";
 choices[89][3] = "No se puede restringir el almacenamiento por grupos.";
 answers[89] = choices[89][0];
 units[89] = "54";
 comments[89] = "Id Pregunta: 10307. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10373 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  El ataque criptogr&aacute;fico llamado &quot;birthday attack&quot; est&aacute; basado en la paradoja del cumplea&ntilde;os. &iquest;Cu&aacute;l es su objetivo?";
 choices[90]= new Array();
 choices[90][0] = "Capturar pares de claves de funciones resumen (hash) con el mismo resultado, ya que es estad&iacute;sticamente m&aacute;s probable el ataque probando de dos en dos.";
 choices[90][1] = "Robar la clave privada del dni electr&oacute;nico del usuario cuando est&aacute; realizando alguna gesti&oacute;n con el mismo, ya que se extrae dicha clave conociendo parte de la informaci&oacute;n contenida, como la fecha de nacimiento del sujeto.";
 choices[90][2] = "Averiguar la clave de acceso al facebook de un usuario sabiendo cu&aacute;ndo cumple a&ntilde;os ya que la gente es muy descuidada y usa esa informaci&oacute;n como pregunta secreta.";
 choices[90][3] = "Encontrar una clave en toda las aplicaciones que usa generalmente un usuario (correo, facebook, twitter, etc.) que coincida con su fecha de cumplea&ntilde;os y a partir de ah&iacute; hacerse con el resto de contrase&ntilde;as.";
 answers[90] = choices[90][0];
 units[90] = "72";
 comments[90] = "Id Pregunta: 10373. ";


//  Id pregunta: 10442 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  &iquest;Cu&aacute;l de las siguientes aplicaciones, incluida en KOffice, se emplea para generaci&oacute;n de informes? ";
 choices[91]= new Array();
 choices[91][0] = "Kexi.";
 choices[91][1] = "Kivio.";
 choices[91][2] = "Konqueror.";
 choices[91][3] = "Kugar.";
 answers[91] = choices[91][3];
 units[91] = "54";
 comments[91] = "Id Pregunta: 10442. Examen TIC A1 2013";


//  Id pregunta: 10501 AÃ±o de creación de pregunta: 2014-01-01
 questions[92]= "93)  &iquest;Cual de las siguientes etiquetas fue introducida en HTML5?";
 choices[92]= new Array();
 choices[92][0] = "&lt;head&gt;";
 choices[92][1] = "&lt;video&gt;";
 choices[92][2] = "&lt;music&gt;";
 choices[92][3] = "&lt;background&gt;";
 answers[92] = choices[92][1];
 units[92] = "69";
 comments[92] = "Id Pregunta: 10501. http://es.wikipedia.org/wiki/HTML5";


//  Id pregunta: 10502 AÃ±o de creación de pregunta: 2014-01-01
 questions[93]= "94)  &iquest;Quien es considerado el creador del Lenguaje HTML?";
 choices[93]= new Array();
 choices[93][0] = "Dan Connolly";
 choices[93][1] = "Hank Thomas-Lee";
 choices[93][2] = "Conway Berners-Lee";
 choices[93][3] = "Tim Berners-Lee";
 answers[93] = choices[93][3];
 units[93] = "69";
 comments[93] = "Id Pregunta: 10502. NULL";


//  Id pregunta: 10798 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Apache Cassandra es:";
 choices[94]= new Array();
 choices[94][0] = "Un servidor de comunicaciones.";
 choices[94][1] = "Una base de datos NoSQL distribuida.";
 choices[94][2] = "Un sistema de claves privadas.";
 choices[94][3] = "Un protocolo de comunicaciones.";
 answers[94] = choices[94][1];
 units[94] = "57";
 comments[94] = "Id Pregunta: 10798. Examen GSI 2014";


//  Id pregunta: 10938 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Los switches FC (Fibre Channel) de las redes SAN (Storage Area Network) permiten en la actualidad el uso de &oacute;pticas SFP (Small Form-factor Pluggable) de:";
 choices[95]= new Array();
 choices[95][0] = "4 Gb/s, 8Gb/s, 16 Gb/s";
 choices[95][1] = "8 Gb/s, 16 Gb/s, 32 Gb/s";
 choices[95][2] = "16Gb/s, 32 Gb/s, 64Gb/s";
 choices[95][3] = "1Gbs, 10Gbs, 100Gbs";
 answers[95] = choices[95][0];
 units[95] = "48";
 comments[95] = "Id Pregunta: 10938. TIC A1 AGE 2014";


//  Id pregunta: 11044 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Cu&aacute;l de las siguientes NO es una soluci&oacute;n comercial de ERP?";
 choices[96]= new Array();
 choices[96][0] = "Microsoft Dynamics";
 choices[96][1] = "HP LoadRunner";
 choices[96][2] = "Oracle E-Business Suite";
 choices[96][3] = "SAP";
 answers[96] = choices[96][1];
 units[96] = "65";
 comments[96] = "Id Pregunta: 11044. ";


//  Id pregunta: 11218 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Cu&aacute;l de las siguientes respuestas es falsa:";
 choices[97]= new Array();
 choices[97][0] = "Los compiladores nativos eliminan la independencia de la plataforma del c&oacute;digo compilado a cambio de proporcionar un mayor rendimiento.";
 choices[97][1] = "Los compiladores nativos AOT (Ahead-Of-time) compilan a c&oacute;digo m&aacute;quina nativo antes de la ejecuci&oacute;n de la aplicaci&oacute;n.";
 choices[97][2] = "Los compiladores JIT (Just in Time) compilan durante la ejecuci&oacute;n.";
 choices[97][3] = "Todas son verdaderas.";
 answers[97] = choices[97][3];
 units[97] = "60";
 comments[97] = "Id Pregunta: 11218. ";


//  Id pregunta: 11260 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Los requisitos de seguridad aplicables a los prestadores de servicios de confianza:";
 choices[98]= new Array();
 choices[98][0] = "Son los mismos para tanto para los prestadores de servicios de confianza cualificados como no cualificados";
 choices[98][1] = "Notificar&aacute;n al Ministerio de Industria en un plazo m&aacute;ximo de 48 horas, de cualquier violaci&oacute;n de seguridad o p&eacute;rdida de integridad.";
 choices[98][2] = "En caso de que una violaci&oacute;n de la seguridad afecte a dos o m&aacute;s Estados miembros, el organismo de supervisi&oacute;n notificado informar&aacute; al respecto a los organismos de supervisi&oacute;n de los dem&aacute;s Estados miembros y a ENISA.";
 choices[98][3] = "Todas son verdaderas.";
 answers[98] = choices[98][2];
 units[98] = "73";
 comments[98] = "Id Pregunta: 11260. ";


//  Id pregunta: 11525 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  En un entorno de computaci&oacute;n Grid, &iquest;qu&eacute; nombre reciben las agrupaciones din&aacute;micas de diferentes organizaciones f&iacute;sicas o individuos que comparten recursos y colaboran con el fin de lograr un objetivo com&uacute;n?";
 choices[99]= new Array();
 choices[99][0] = "Virtual Organizations (VO).";
 choices[99][1] = "Grid Domain Resources (GDR)";
 choices[99][2] = "Domain Group Policy (DGP).";
 choices[99][3] = "Organization Resource Group (ORG)";
 answers[99] = choices[99][0];
 units[99] = "45";
 comments[99] = "Id Pregunta: 11525. Examen TIC Servicio Extreme&ntilde;o de Salud 2014";


