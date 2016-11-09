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

//  Id pregunta: 264 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  Indicar cual de las siguientes no es una funci&oacute;n b&aacute;sica del tratamiento de la informaci&oacute;n:";
 choices[0]= new Array();
 choices[0][0] = "Entrada de datos";
 choices[0][1] = "Almacenamiento de datos";
 choices[0][2] = "Copias de seguridad de datos";
 choices[0][3] = "C&aacute;lculos y transformaciones de datos";
 answers[0] = choices[0][2];
 units[0] = "21";
 comments[0] = "Id Pregunta: 264. ";


//  Id pregunta: 436 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  Seg&uacute;n la Ley 1/1996 de Propiedad Intelectual, s&oacute;lo una de las siguientes definiciones es correcta:";
 choices[1]= new Array();
 choices[1][0] = "Obra en colaboraci&oacute;n: aquella resultado de la colaboraci&oacute;n de varios autores, correspondiendo el derecho a todos ellos en la proporci&oacute;n que determinen";
 choices[1][1] = "Obra compuesta: aquella obra nueva que incorpore una obra existente con la colaboraci&oacute;n del autor de &eacute;sta &uacute;ltima";
 choices[1][2] = "Las 2 anteriores son definiciones correctas";
 choices[1][3] = "Las 2 primeras son definiciones incorrectas";
 answers[1] = choices[1][0];
 units[1] = "36";
 comments[1] = "Id Pregunta: 436. ";


//  Id pregunta: 537 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  El desarrollo de una Pol&iacute;tica de Seguridad de los Sistemas de Informaci&oacute;n es responsabilidad de:";
 choices[2]= new Array();
 choices[2][0] = "Departamento de Inform&aacute;tica";
 choices[2][1] = "Comit&eacute; de Seguridad";
 choices[2][2] = "Administrador de seguridad";
 choices[2][3] = "Alta Direcci&oacute;n";
 answers[2] = choices[2][3];
 units[2] = "26";
 comments[2] = "Id Pregunta: 537. ";


//  Id pregunta: 598 AÃ±o de creación de pregunta: 2006-01-01
 questions[3]= "4)  Uno de estos datos personales no es de los denominados &ldquo;especialmente protegidos&rdquo;";
 choices[3]= new Array();
 choices[3][0] = "Origen racial o &eacute;tnico.";
 choices[3][1] = "Afiliaci&oacute;n sindical";
 choices[3][2] = "Infracciones penales .";
 choices[3][3] = "Vida sexual.";
 answers[3] = choices[3][2];
 units[3] = "29";
 comments[3] = "Id Pregunta: 598. ";


//  Id pregunta: 814 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  Apache:";
 choices[4]= new Array();
 choices[4][0] = "Es un servidor web disponible para plataformas Windows";
 choices[4][1] = "Es una licencia para software libre";
 choices[4][2] = "Es el servidor web libre m&aacute;s utilizado en sistemas Unix/Linux";
 choices[4][3] = "Todas las respuestas anteriores son correctas";
 answers[4] = choices[4][3];
 units[4] = "62";
 comments[4] = "Id Pregunta: 814. ";


//  Id pregunta: 1064 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  El workflow es una categor&iacute;a de aplicaciones dentro del trabajo en grupo o groupware que permite:";
 choices[5]= new Array();
 choices[5][0] = "Desarrollo de aplicaciones multiusuario";
 choices[5][1] = "Desarrollo de aplicaciones de coordinaci&oacute;n de procesos";
 choices[5][2] = "Desarrollo de aplicaciones de flujo de datos";
 choices[5][3] = "Desarrollo de aplicaciones de mail inteligente";
 answers[5] = choices[5][1];
 units[5] = "71";
 comments[5] = "Id Pregunta: 1064. ";


//  Id pregunta: 1083 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  En el lenguaje Java a las variables de clase (class variables) se les denomina tambi&eacute;n:";
 choices[6]= new Array();
 choices[6][0] = "Private o privadas";
 choices[6][1] = "Static o est&aacute;ticas";
 choices[6][2] = "Final o final";
 choices[6][3] = "System o sistema";
 answers[6] = choices[6][1];
 units[6] = "60";
 comments[6] = "Id Pregunta: 1083. NULL";


//  Id pregunta: 1119 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  En los algoritmos de clave sim&eacute;trica:";
 choices[7]= new Array();
 choices[7][0] = "se pueden distribuir y mantener f&aacute;cilmente las claves";
 choices[7][1] = "tienen alta velocidad de cifrado y descifrado";
 choices[7][2] = "no se ha alcanzado a&uacute;n la perfecci&oacute;n matem&aacute;tica, y existen algoritmos eficaces para reventarlos aparte del de fuerza bruta";
 choices[7][3] = "no pueden ser usados para autenticar a las partes";
 answers[7] = choices[7][1];
 units[7] = "72";
 comments[7] = "Id Pregunta: 1119. ";


//  Id pregunta: 1196 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Java EE es:";
 choices[8]= new Array();
 choices[8][0] = "Un producto";
 choices[8][1] = "Un servicio";
 choices[8][2] = "Un conjunto de especificaciones";
 choices[8][3] = "Nada de lo anterior";
 answers[8] = choices[8][2];
 units[8] = "60.116";
 comments[8] = "Id Pregunta: 1196. NULL";


//  Id pregunta: 1243 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  La t&eacute;cnica ADPCM:";
 choices[9]= new Array();
 choices[9][0] = "Se utiliza para comprimir im&aacute;genes est&aacute;ticas";
 choices[9][1] = "Se basa en la modelizaci&oacute;n por fractales";
 choices[9][2] = "Tambi&eacute;n es llamada LZW (Lempel, Ziv y Welch), y se usa para compresi&oacute;n de audio";
 choices[9][3] = "Ninguna de las anteriores es verdadera";
 answers[9] = choices[9][3];
 units[9] = "109";
 comments[9] = "Id Pregunta: 1243. ";


//  Id pregunta: 1426 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  Una transacci&oacute;n es un conjunto de acciones impregnadas de propiedades ACID, lo que significa:";
 choices[10]= new Array();
 choices[10][0] = "Atomicidad, consistencia, aislamiento y durabilidad";
 choices[10][1] = "Acci&oacute;n, correcci&oacute;n, integridad y dependencia";
 choices[10][2] = "Atomicidad, coexistencia, integridad y permanencia";
 choices[10][3] = "Actividad, convergencia, aislamiento y dependencia";
 answers[10] = choices[10][0];
 units[10] = "57";
 comments[10] = "Id Pregunta: 1426. ";


//  Id pregunta: 1442 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Considerando de modo gen&eacute;rico una interfaz como un dispositivo de adaptaci&oacute;n a dos entidades distintas, podr&iacute;a decirse que es:";
 choices[11]= new Array();
 choices[11][0] = "Un grupo de especificaciones";
 choices[11][1] = "Una entidad l&oacute;gica";
 choices[11][2] = "Un conjunto de convenios que permite el intercambio de informaci&oacute;n entre dos entidades que pueden ser f&iacute;sicas o no";
 choices[11][3] = "Todas las respuestas son correctas";
 answers[11] = choices[11][3];
 units[11] = "52";
 comments[11] = "Id Pregunta: 1442. ";


//  Id pregunta: 1485 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa cuando hablamos del Modelo de Componentes Distribuidos (DCOM)?:";
 choices[12]= new Array();
 choices[12][0] = "DCOM especifica interfaces entre objetos de componentes dentro de una sola aplicaci&oacute;n o entre aplicaciones";
 choices[12][1] = "Dispone de API para el descubrimiento din&aacute;mico de los interfaces que exporta un objeto";
 choices[12][2] = "El modelo de objetos soporta la herencia m&uacute;ltiple, al igual que CORBA";
 choices[12][3] = "Un componente DCOM es capaz de soportar interfaces m&uacute;ltiples";
 answers[12] = choices[12][2];
 units[12] = "59";
 comments[12] = "Id Pregunta: 1485. JCED - Preparatic XVII";


//  Id pregunta: 2184 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  &iquest;Cu&aacute;l es la versi&oacute;n actual de la m&eacute;todolog&iacute;a M&eacute;trica?:";
 choices[13]= new Array();
 choices[13][0] = "v1";
 choices[13][1] = "v2";
 choices[13][2] = "v2.1";
 choices[13][3] = "v3";
 answers[13] = choices[13][3];
 units[13] = "86";
 comments[13] = "Id Pregunta: 2184. NULL";


//  Id pregunta: 2230 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  Al esfuerzo requeriddo para transferir un programa desde una cierta configuraci&oacute;n hardware o entorno operativo a otro se llama:";
 choices[14]= new Array();
 choices[14][0] = "Portabilidad";
 choices[14][1] = "Reusabilidad";
 choices[14][2] = "Interoperatividad";
 choices[14][3] = "Mantenibilidad";
 answers[14] = choices[14][0];
 units[14] = "89";
 comments[14] = "Id Pregunta: 2230. NULL";


//  Id pregunta: 2424 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  El tipo de indizaci&oacute;n por descriptores consistente en realizar una selecci&oacute;n de los conceptos m&aacute;s significativos mediante el an&aacute;lisis de frecuencias de los t&eacute;rminos existentes, se denomina:";
 choices[15]= new Array();
 choices[15][0] = "M&eacute;todo estad&iacute;stico";
 choices[15][1] = "M&eacute;todo por asignaci&oacute;n de los conceptos clave del documento";
 choices[15][2] = "M&eacute;todo sint&aacute;ctico";
 choices[15][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[15] = choices[15][0];
 units[15] = "96";
 comments[15] = "Id Pregunta: 2424. NULL";


//  Id pregunta: 2730 AÃ±o de creación de pregunta: 2006-01-01
 questions[16]= "17)  &iquest;Cu&aacute;l de los siguientes no es un objetivo del Plan de Sistemas de Informaci&oacute;n en una organizaci&oacute;n?";
 choices[16]= new Array();
 choices[16][0] = "Establecer pol&iacute;ticas y objetivos coherentes";
 choices[16][1] = "Definir los requerimientos t&eacute;cnicos necesarios y suficientes";
 choices[16][2] = "Seleccionar los suministradores de las distintos elementos";
 choices[16][3] = "Conocer con cierta aproximaci&oacute;n y de forma anticipada las inversiones, los costes de funcionamiento y los resultados esperados";
 answers[16] = choices[16][2];
 units[16] = "77";
 comments[16] = "Id Pregunta: 2730. ";


//  Id pregunta: 2853 AÃ±o de creación de pregunta: 2006-01-01
 questions[17]= "18)  Una Base de Datos documental ";
 choices[17]= new Array();
 choices[17][0] = "presenta un modelo de recuperaci&oacute;n de informaci&oacute;n probabil&iacute;stica";
 choices[17][1] = "presenta un &iacute;ndice de incertidumbre en la respuesta";
 choices[17][2] = "las dos anteriores";
 choices[17][3] = "ninguna de las anteriores";
 answers[17] = choices[17][2];
 units[17] = "95,96";
 comments[17] = "Id Pregunta: 2853. ";


//  Id pregunta: 2933 AÃ±o de creación de pregunta: 2004-01-01
 questions[18]= "19)  ECMAscript, con cu&aacute;l de los siguientes lenguajes de script se relaciona:";
 choices[18]= new Array();
 choices[18][0] = "JavaScript";
 choices[18][1] = "VBScript";
 choices[18][2] = "Jscript";
 choices[18][3] = "Perlscript";
 answers[18] = choices[18][0];
 units[18] = "114";
 comments[18] = "Id Pregunta: 2933. Similar a examen TIC MAP A 2004";


//  Id pregunta: 2934 AÃ±o de creación de pregunta: 2004-01-01
 questions[19]= "20)  &iquest;Qu&eacute; protocolo de correo permite acceder al correo electr&oacute;nico, manteniendo los mensajes en el servidor, de forma que pueda accederse al correo desde distintos terminales?";
 choices[19]= new Array();
 choices[19][0] = "POP-3";
 choices[19][1] = "SMTP";
 choices[19][2] = "IMAP";
 choices[19][3] = "MIME";
 answers[19] = choices[19][2];
 units[19] = "106";
 comments[19] = "Id Pregunta: 2934. Similar a examen TIC MAP A 2004";


//  Id pregunta: 2971 AÃ±o de creación de pregunta: 2004-01-01
 questions[20]= "21)  Dada la m&aacute;scara de red 255.240.0.0, &iquest;Cu&aacute;nta subredes ser&iacute;a posible incluir dentro de una red tipo A?";
 choices[20]= new Array();
 choices[20][0] = "Ninguna";
 choices[20][1] = "16";
 choices[20][2] = "14";
 choices[20][3] = "8";
 answers[20] = choices[20][2];
 units[20] = "100";
 comments[20] = "Id Pregunta: 2971. Examen Julio 2003 Se aplica la formula  2^N -2 donde N es la cantidad de bits que tenemosque robarle a la porci&oacute;n de host asignada por defecto a una clase A";


//  Id pregunta: 2992 AÃ±o de creación de pregunta: 2004-01-01
 questions[21]= "22)  Su ordenador tiene la direcci&oacute;n IP 10.2.40.16 y m&aacute;scara de subred de 26 bits. Indique cu&aacute;l de las siguientes direcciones IP puede corresponderse con su router por defecto";
 choices[21]= new Array();
 choices[21][0] = "10.2.40.64";
 choices[21][1] = "10.2.41.45";
 choices[21][2] = "10.2.40.63";
 choices[21][3] = "10.2.40.62";
 answers[21] = choices[21][3];
 units[21] = "100";
 comments[21] = "Id Pregunta: 2992. ";


//  Id pregunta: 3090 AÃ±o de creación de pregunta: 2005-01-01
 questions[22]= "23)  Seg&uacute;n la terminolog&iacute;a usual, la intrusi&oacute;n de un cracker en un servidor web, en el peor de los casos, puede afectar a:";
 choices[22]= new Array();
 choices[22][0] = "La dimensi&oacute;n de confidencialidad de la informaci&oacute;n";
 choices[22][1] = "La dimensi&oacute;n de disponibilidad de la informaci&oacute;n";
 choices[22][2] = "La dimensi&oacute;n de integridad de la informaci&oacute;n";
 choices[22][3] = "Todas las anteriores";
 answers[22] = choices[22][3];
 units[22] = "111";
 comments[22] = "Id Pregunta: 3090. NULL";


//  Id pregunta: 3416 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  HDLC es un protocolo:";
 choices[23]= new Array();
 choices[23][0] = "De enlace, orientado a car&aacute;cter";
 choices[23][1] = "De enlace orientado a bit";
 choices[23][2] = "F&iacute;sico, en serie";
 choices[23][3] = "F&iacute;sico, en paralelo";
 answers[23] = choices[23][1];
 units[23] = "100";
 comments[23] = "Id Pregunta: 3416. NULL";


//  Id pregunta: 3500 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  En el modelo de referencia OSI, los problemas planteados por la falta de fiabilidad de los circuitos como consecuencia de errores en los datos recibidos se resuelven en:";
 choices[24]= new Array();
 choices[24][0] = "El nivel f&iacute;sico";
 choices[24][1] = "El nivel de enlace";
 choices[24][2] = "El nivel de red";
 choices[24][3] = "El nivel de transporte";
 answers[24] = choices[24][1];
 units[24] = "100";
 comments[24] = "Id Pregunta: 3500. NULL";


//  Id pregunta: 3757 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Para aplicaciones de media streaming es m&aacute;s adecuado:";
 choices[25]= new Array();
 choices[25][0] = "UDP";
 choices[25][1] = "TCP";
 choices[25][2] = "tanto TCP como UDP son adecuados ya que proporcionan un nivel de transporte a la aplicaci&oacute;n de video";
 choices[25][3] = "ni TCP ni UDP son adecuados ya que no garantizan la velocidad adecuada suficiente";
 answers[25] = choices[25][0];
 units[25] = "100";
 comments[25] = "Id Pregunta: 3757. NULL";


//  Id pregunta: 3790 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  Respecto a los cortafuegos de filtrado de paquetes:";
 choices[26]= new Array();
 choices[26][0] = "act&uacute;an como routers inteligentes o screening routers";
 choices[26][1] = "se componen de un conjunto de aplicaciones intermedias, una por servicio";
 choices[26][2] = "desempe&ntilde;an funciones de proxy";
 choices[26][3] = "ninguna de las anteriores respuestas es correcta";
 answers[26] = choices[26][0];
 units[26] = "111";
 comments[26] = "Id Pregunta: 3790. NULL";


//  Id pregunta: 3793 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  Respecto a los enrutadores, encaminadores o 'routers' se puede afirmar que:";
 choices[27]= new Array();
 choices[27][0] = "En la red de &aacute;rea local, son imprescindibles entre los ordenadores personales y su servidor";
 choices[27][1] = "Facilitan la uni&oacute;n a nivel f&iacute;sico entre dos redes distintas 10baseT y SNA";
 choices[27][2] = "Unen dos redes locales a nivel de red , ya que se suele decir que son equipos h&iacute;bridos";
 choices[27][3] = "Unen las redes WAN o MAN que tienen igual subnivel de control LLC";
 answers[27] = choices[27][2];
 units[27] = "102";
 comments[27] = "Id Pregunta: 3793. ";


//  Id pregunta: 4057 AÃ±o de creación de pregunta: 2006-01-01
 questions[28]= "29)  Existen experiencias de uso real de VoIP en Espa&ntilde;a";
 choices[28]= new Array();
 choices[28][0] = "Si";
 choices[28][1] = "No";
 choices[28][2] = "Si, pero solo en las AAPP";
 choices[28][3] = "No, porque a&uacute;n no hay regulaci&oacute;n que lo permita";
 answers[28] = choices[28][0];
 units[28] = "112";
 comments[28] = "Id Pregunta: 4057. ";


//  Id pregunta: 4094 AÃ±o de creación de pregunta: 2006-01-01
 questions[29]= "30)  &iquest;En que se basa AJAX?";
 choices[29]= new Array();
 choices[29][0] = "En JavaScript";
 choices[29][1] = "En Java";
 choices[29][2] = "En JSP";
 choices[29][3] = "En JSF";
 answers[29] = choices[29][0];
 units[29] = "116";
 comments[29] = "Id Pregunta: 4094. ";


//  Id pregunta: 4108 AÃ±o de creación de pregunta: 2006-01-01
 questions[30]= "31)  Existen varias formas de acceder al servicio de correo electr&oacute;nico:";
 choices[30]= new Array();
 choices[30][0] = "B&aacute;sicamente dos, a trav&eacute;s de webmail o a trav&eacute;s de programas de correo electr&oacute;nico especializado.";
 choices[30][1] = "B&aacute;sicamente dos, a trav&eacute;s de webmail o a trav&eacute;s de programas denominados P2P (Peer To Peer).";
 choices[30][2] = "El correo electr&oacute;nico es en todo caso un servicio de pago.";
 choices[30][3] = "Ninguna de las anteriores es correcta";
 answers[30] = choices[30][0];
 units[30] = "112";
 comments[30] = "Id Pregunta: 4108. ";


//  Id pregunta: 4124 AÃ±o de creación de pregunta: 2006-01-01
 questions[31]= "32)  La tecnolog&iacute;a que permite varios canales independientes en una &uacute;nica fibra &oacute;ptica mediante el uso de diferentes frecuencias de luz se llama";
 choices[31]= new Array();
 choices[31][0] = "Multiplexado por divisi&oacute;n de frecuencia (FDM)";
 choices[31][1] = "Multiplexado por divisi&oacute;n de tiempo (TDM)";
 choices[31][2] = "Multiplexado por divisi&oacute;n densa de la longitud de onda (DWDM)";
 choices[31][3] = "Multiplexado tradicional (MUX)";
 answers[31] = choices[31][2];
 units[31] = "105";
 comments[31] = "Id Pregunta: 4124. ";


//  Id pregunta: 4234 AÃ±o de creación de pregunta: 2006-01-01
 questions[32]= "33)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre GPRS no es v&aacute;lida?";
 choices[32]= new Array();
 choices[32][0] = "Las velocidades de conexi&oacute;n pueden llegar hasta 192 Kbps";
 choices[32][1] = "Los usuarios permanecen conectados aunque no reciban o envien datos";
 choices[32][2] = "Se pueden realizar o recibir llamadas de voz mientras se est&aacute; conectado";
 choices[32][3] = "La tarificaci&oacute;n es por el volumen de datos transferidos";
 answers[32] = choices[32][0];
 units[32] = "108";
 comments[32] = "Id Pregunta: 4234. ";


//  Id pregunta: 4251 AÃ±o de creación de pregunta: 2007-01-01
 questions[33]= "34)  Respecto a la iniciativa i2010 de la Comisi&oacute;n Europea:";
 choices[33]= new Array();
 choices[33][0] = "La iniciativa nace en el a&ntilde;o 2005, como respuesta a la revisi&oacute;n de la estrategia de Lisboa para el crecimiento y el empleo.";
 choices[33][1] = "Una de las tres prioridades que se plantea es &ldquo;el refuerzo de la innovaci&oacute;n y la inversi&oacute;n en la investigaci&oacute;n sobre las TIC con el fin de fomentar el crecimiento y la creaci&oacute;n de m&aacute;s empleos y de m&aacute;s de calidad&rdquo;";
 choices[33][2] = "La tercera prioridad de la Comisi&oacute;n consiste en &ldquo;el logro de una sociedad europea de la informaci&oacute;n basada en la inclusi&oacute;n que fomenta el crecimiento y el empleo de una manera coherente con el desarrollo sostenible y que da la prioridad a la mejora de los servicios p&uacute;blicos y de la calidad de vida&rdquo;.";
 choices[33][3] = "Todas las anteriores son ciertas";
 answers[33] = choices[33][3];
 units[33] = "30";
 comments[33] = "Id Pregunta: 4251. Esta pregunta es antigua, pero nunca se sabe. M&aacute;s informaci&oacute;n en: http://europa.eu/legislation_summaries/information_society/strategies/c11328_es.htm";


//  Id pregunta: 4432 AÃ±o de creación de pregunta: 2007-01-01
 questions[34]= "35)  &iquest;Cu&aacute;l de los siguientes no es un posible mecanismo de transmisi&oacute;n de voz sobre paquetes de datos?";
 choices[34]= new Array();
 choices[34][0] = "Voz sobre IP (VoIP).";
 choices[34][1] = "Voz sobre TCP (VoTCP).";
 choices[34][2] = "Voz sobre celdas (VoATM).";
 choices[34][3] = "Voz sobre tramas (VoFR).";
 answers[34] = choices[34][1];
 units[34] = "100";
 comments[34] = "Id Pregunta: 4432. NULL";


//  Id pregunta: 4450 AÃ±o de creación de pregunta: 2007-01-01
 questions[35]= "36)  Una de las medidas que se utiliza para cuantificar la rentabilidad de las inversiones en los proyectos TIC, es el VAN (valor actual neto), que se podr&iacute;a definir como:";
 choices[35]= new Array();
 choices[35][0] = "Ratio ente ingreso neto y costes";
 choices[35][1] = "Tiempo necesario para que el proyecto recupere el capital invertido.";
 choices[35][2] = "Tasa de descuento necesaria para que el valor actual sea cero.";
 choices[35][3] = "El valor actual de todos los ingresos menos el valor actual de todos los desembolsos de un proyecto, supuesto un determinado tipo de inter&eacute;s.";
 answers[35] = choices[35][3];
 units[35] = "35";
 comments[35] = "Id Pregunta: 4450. NULL";


//  Id pregunta: 4527 AÃ±o de creación de pregunta: 2007-01-01
 questions[36]= "37)  &iquest;Cual es el tipo de mantenimiento que supone un conjunto de actividades para facilitar el mantenimiento futuro del sistema?";
 choices[36]= new Array();
 choices[36][0] = "Mantenimiento perfectivo.";
 choices[36][1] = "Mantenimiento adaptativo.";
 choices[36][2] = "Mantenimiento correctivo.";
 choices[36][3] = "Mantenimiento preventivo.";
 answers[36] = choices[36][3];
 units[36] = "86";
 comments[36] = "Id Pregunta: 4527. NULL";


//  Id pregunta: 4586 AÃ±o de creación de pregunta: 2007-01-01
 questions[37]= "38)  Las siglas HSDPA corresponden a:";
 choices[37]= new Array();
 choices[37][0] = "High-Speed Dynamic Packet Access";
 choices[37][1] = "High-Speed Downlink Packet Access";
 choices[37][2] = "High-Speed Data Packet Access";
 choices[37][3] = "Ninguna de las anteriores";
 answers[37] = choices[37][1];
 units[37] = "108";
 comments[37] = "Id Pregunta: 4586. ";


//  Id pregunta: 4611 AÃ±o de creación de pregunta: 2007-01-01
 questions[38]= "39)  Seg&uacute;n la Norma UNE-ISO/IEC 17799:2000 cual de los siguientes aspectos NO esta incluido en el control de accesos";
 choices[38]= new Array();
 choices[38][0] = "seguridad de los servicios de red";
 choices[38][1] = "sincronizaci&oacute;n de relojes";
 choices[38][2] = "responsabilidades del usuario";
 choices[38][3] = "control de acceso a la librer&iacute;a de programa as fuente";
 answers[38] = choices[38][3];
 units[38] = "33";
 comments[38] = "Id Pregunta: 4611. ISO 17799 actualmente es ISO 27002";


//  Id pregunta: 4621 AÃ±o de creación de pregunta: 2007-01-01
 questions[39]= "40)  &iquest;Como se denomina la licencia bajo la que se distribuye la mayor&iacute;a de los programas del proyecto GNU?:";
 choices[39]= new Array();
 choices[39][0] = "FDL";
 choices[39][1] = "GSL";
 choices[39][2] = "GPL";
 choices[39][3] = "GLL";
 answers[39] = choices[39][2];
 units[39] = "36";
 comments[39] = "Id Pregunta: 4621. ";


//  Id pregunta: 4662 AÃ±o de creación de pregunta: 2007-01-01
 questions[40]= "41)  Tasa M&aacute;xima de Transferencia  de Informaci&oacute;n alcanzable con la tecnolog&iacute;a HSDPA ";
 choices[40]= new Array();
 choices[40][0] = "7.2Mbps";
 choices[40][1] = "14.4Mbps";
 choices[40][2] = "4.8Mbps";
 choices[40][3] = "10.7Mbps";
 answers[40] = choices[40][1];
 units[40] = "108";
 comments[40] = "Id Pregunta: 4662. ";


//  Id pregunta: 4692 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  &iquest;Qu&eacute; no es una ventaja de los sistemas abiertos seg&uacute;n la Estrategia de Sistemas Abiertos de la Administraci&oacute;n del Estado?";
 choices[41]= new Array();
 choices[41][0] = "Libertad de elecci&oacute;n";
 choices[41][1] = "Protecci&oacute;n de la inversi&oacute;n";
 choices[41][2] = "Mejor relaci&oacute;n calidad/precio";
 choices[41][3] = "Garant&iacute;a de comunicaci&oacute;n e interoperabilidad de los sistemas";
 answers[41] = choices[41][2];
 units[41] = "40";
 comments[41] = "Id Pregunta: 4692. Examen 2006 JCYL";


//  Id pregunta: 4809 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  Entre las arquitecturas de redes de comunicaciones para interconexi&oacute;n de sistemas NO se encuentra:";
 choices[42]= new Array();
 choices[42][0] = "OSI (Open System Interconnection) de ISO (International Standards Organization)";
 choices[42][1] = "DNA (Digital Network Architecture), de la antigua DEC (Digital Equipment Corporation)";
 choices[42][2] = "SNA (System Network Architecture), de IBM";
 choices[42][3] = "ONS (Open Network Standard) del ITU-T (International Telecommunications Union - Telecommunications)";
 answers[42] = choices[42][3];
 units[42] = "102";
 comments[42] = "Id Pregunta: 4809. ";


//  Id pregunta: 4840 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  &iquest;Cu&aacute;l de las siguientes afirmaciones en relaci&oacute;n a la firma digital es cierta?";
 choices[43]= new Array();
 choices[43][0] = "Ofrece plenas garant&iacute;as de la integridad, confidencialidad y no repudio del documento firmado";
 choices[43][1] = "Se puede conseguir mediante protocolos de cifrado de clave secreta";
 choices[43][2] = "El DSS (Digital Signature Standard) est&aacute; adoptado como una norma por ISO/IEC (International StandardsOrganization / International Electrotechnical Commission)";
 choices[43][3] = "La firma ciega (Blind signature) se obtiene firmando directamente el correspondiente mensaje, en vez delresumen de &eacute;ste";
 answers[43] = choices[43][1];
 units[43] = "74";
 comments[43] = "Id Pregunta: 4840. ";


//  Id pregunta: 4901 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  En el caso de que &eacute;sta sea exigida &iquest;A cu&aacute;nto asciende la garant&iacute;a provisional que deben depositar los contratistas (art&iacute;culo 103 RD Legislativo 3/2011)?";
 choices[44]= new Array();
 choices[44][0] = "Del 2% del importe de licitaci&oacute;n";
 choices[44][1] = "No podr&aacute; ser superior a un 3% del presupuesto del contrato, excluido el Impuesto sobre el Valor A&ntilde;adido";
 choices[44][2] = "Del 2% del importe del contrato";
 choices[44][3] = "10%";
 answers[44] = choices[44][1];
 units[44] = "41";
 comments[44] = "Id Pregunta: 4901. ";


//  Id pregunta: 4938 AÃ±o de creación de pregunta: 2003-01-01
 questions[45]= "46)  La notaci&oacute;n de un diagrama Entidad-Relaci&oacute;n no permite representar:";
 choices[45]= new Array();
 choices[45][0] = "Jerarqu&iacute;as de tipos de objetos de datos.";
 choices[45][1] = "Asociaci&oacute;n de objetos de datos.";
 choices[45][2] = "Transformaciones de objetos de datos.";
 choices[45][3] = "La relaci&oacute;n entre objetos de datos.";
 answers[45] = choices[45][2];
 units[45] = "80";
 comments[45] = "Id Pregunta: 4938. Examen TIC B 2007";


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


//  Id pregunta: 5196 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[47]= new Array();
 choices[47][0] = "El fan-out de un m&oacute;dulo es usado como medida de complejidad.";
 choices[47][1] = "El fan-out es el n&uacute;mero de superiores inmediatos de un m&oacute;dulo.";
 choices[47][2] = "El fan-out de un m&oacute;dulo es una medida de reusabilidad.";
 choices[47][3] = "Todas las anteriores son ciertas.";
 answers[47] = choices[47][0];
 units[47] = "84";
 comments[47] = "Id Pregunta: 5196. ";


//  Id pregunta: 5206 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  En M&eacute;trica v.3 la actividad &ldquo;Revisi&oacute;n de la formaci&oacute;n a usuarios finales&rdquo; del Aseguramiento de la Calidad corresponde al proceso:";
 choices[48]= new Array();
 choices[48][0] = "An&aacute;lisis del Sistema de Informaci&oacute;n";
 choices[48][1] = "Construcci&oacute;n del Sistema de Informaci&oacute;n";
 choices[48][2] = "Implantaci&oacute;n y aceptaci&oacute;n del Sistema";
 choices[48][3] = "Mantenimiento del Sistema de informaci&oacute;n";
 answers[48] = choices[48][1];
 units[48] = "86";
 comments[48] = "Id Pregunta: 5206. NULL";


//  Id pregunta: 5552 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  Se&ntilde;ale la afirmaci&oacute;n incorrecta:";
 choices[49]= new Array();
 choices[49][0] = "Las pautas WAI  se encuentran agrupadas en WCAG, ATAG, UAAG.";
 choices[49][1] = "Las pautas WAI se basan en la utilizaci&oacute;n de est&aacute;ndares del W3C.";
 choices[49][2] = "Las WCAG 1.0  tienen 15 pautas, cada una de ellas con uno o m&aacute;s puntos de verificaci&oacute;n.";
 choices[49][3] = "Cada punto de verificaci&oacute;n tiene una prioridad asignada. El cumplimiento de los puntos de prioridad 1 asegura el cumplimiento del nivel de accesibilidad web A.";
 answers[49] = choices[49][2];
 units[49] = "39";
 comments[49] = "Id Pregunta: 5552. ";


//  Id pregunta: 5798 AÃ±o de creación de pregunta: 2009-01-01
 questions[50]= "51)  Indique cuales son las funciones fundamentales del Comit&eacute; Sectorial de Administraci&oacute;n electr&oacute;nica.";
 choices[50]= new Array();
 choices[50][0] = "Asegurar la compatibilidad e interoperabilidad de los sistemas y aplicaciones usados por las Administraciones P&uacute;blicas. Preparar planes de acci&oacute;n conjuntos y programas, para fomentar el desarrollo de la administraci&oacute;n electr&oacute;nica en Espa&ntilde;a.";
 choices[50][1] = "Desarrollar servicios centrados en los ciudadanos";
 choices[50][2] = "La reutilizaci&oacute;n de los desarrollos y soluciones por todas las Comunidades Aut&oacute;nomas.";
 choices[50][3] = "Incorporar a todas las Comunidades Aut&oacute;nomas a la red de atenci&oacute;n integral a los ciudadanos, Red 060.";
 answers[50] = choices[50][0];
 units[50] = "30";
 comments[50] = "Id Pregunta: 5798. MAP 2008 A2";


//  Id pregunta: 5866 AÃ±o de creación de pregunta: 2009-01-01
 questions[51]= "52)  El protocolo Secure Shell, definido en la RFC (IETF Request for Comment) 4251:";
 choices[51]= new Array();
 choices[51][0] = "Permite la negociaci&oacute;n de los algoritmos criptogr&aacute;ficos a usar";
 choices[51][1] = "Proporciona, entre otros, los servicios de confidencialidad, no repudio e integridad";
 choices[51][2] = "Opcionalmente admite compresi&oacute;n, que en este caso debe aplicarse tras el cifrado del paquete";
 choices[51][3] = "Trabaja tanto sobre TCP como sobre UDP";
 answers[51] = choices[51][0];
 units[51] = "111";
 comments[51] = "Id Pregunta: 5866. MAP 2008 A1";


//  Id pregunta: 5963 AÃ±o de creación de pregunta: 2010-01-01
 questions[52]= "53)  Seg&uacute;n la Norma ISO 9000:2000, la expresi&oacute;n formal por la Direcci&oacute;n de las intenciones globales y orientaci&oacute;n de una organizaci&oacute;n relativas a la calidad, se denomina:";
 choices[52]= new Array();
 choices[52][0] = "Gesti&oacute;n de la calidad";
 choices[52][1] = "Norma de la calidad";
 choices[52][2] = "Pol&iacute;tica de la calidad";
 choices[52][3] = "Direcci&oacute;n de la calidad";
 answers[52] = choices[52][2];
 units[52] = "87";
 comments[52] = "Id Pregunta: 5963. Castilla La Mancha 2009";


//  Id pregunta: 6132 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)  La creaci&oacute;n de una vista l&oacute;gica unificada de los datos, a&uacute;n cuando &eacute;stos est&eacute;n dispersos entre varias bases de datos f&iacute;sicas, para as&iacute; disponer de un &uacute;nico modelo de trabajo de los datos de la organizaci&oacute;n, es una manera de definir:";
 choices[53]= new Array();
 choices[53][0] = "Un almac&eacute;n de datos.";
 choices[53][1] = "Un sistema OLAP.";
 choices[53][2] = "Un sistema de informaci&oacute;n a la direcci&oacute;n.";
 choices[53][3] = "Una base de datos.";
 answers[53] = choices[53][0];
 units[53] = "68";
 comments[53] = "Id Pregunta: 6132. TIC A 2009";


//  Id pregunta: 6170 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  Indique el nivel, que normalmente se corresponde con un jefe de &aacute;rea:";
 choices[54]= new Array();
 choices[54][0] = "26.";
 choices[54][1] = "27.";
 choices[54][2] = "28.";
 choices[54][3] = "29.";
 answers[54] = choices[54][2];
 units[54] = "24";
 comments[54] = "Id Pregunta: 6170. ";


//  Id pregunta: 6236 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  &iquest;C&oacute;mo se denominan las interfaces de servicio de la implementaci&oacute;n del servicio de directorio de Microsoft en una red distribuida de computadores?";
 choices[55]= new Array();
 choices[55][0] = "ADSI";
 choices[55][1] = "LDAP";
 choices[55][2] = "AD";
 choices[55][3] = "ADIS";
 answers[55] = choices[55][0];
 units[55] = "115";
 comments[55] = "Id Pregunta: 6236. ";


//  Id pregunta: 6340 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  &iquest;Qui&eacute;n acu&ntilde;&oacute; el t&eacute;rmino 'Web 2.0'?";
 choices[56]= new Array();
 choices[56][0] = "Tim Berners-Lee";
 choices[56][1] = "Tim O'Reilly";
 choices[56][2] = "Vinton Cerf";
 choices[56][3] = "Richard Stallman";
 answers[56] = choices[56][1];
 units[56] = "120";
 comments[56] = "Id Pregunta: 6340. NULL";


//  Id pregunta: 6497 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  El kernel de Linux fue desarrollado por:";
 choices[57]= new Array();
 choices[57][0] = "Linus Torvalds";
 choices[57][1] = "Benjamin Linus";
 choices[57][2] = "Richard Stallman";
 choices[57][3] = "Steve Jobs";
 answers[57] = choices[57][0];
 units[57] = "53";
 comments[57] = "Id Pregunta: 6497. NULL";


//  Id pregunta: 6507 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  De que tarea NO se encarga el n&uacute;cleo independiente del kernel de UNIX:";
 choices[58]= new Array();
 choices[58][0] = "Interrupciones";
 choices[58][1] = "Ejecuci&oacute;n de procesos";
 choices[58][2] = "Planificar los procesos para su realizaci&oacute;n por la CPU";
 choices[58][3] = "Asignar memoria principal a un proceso en ejecuci&oacute;n";
 answers[58] = choices[58][0];
 units[58] = "53";
 comments[58] = "Id Pregunta: 6507. NULL";


//  Id pregunta: 7246 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  &iquest;Qu&eacute; valor tiene el primer n&uacute;mero de una red de clase C en internet?";
 choices[59]= new Array();
 choices[59][0] = "Menor o igual que 127";
 choices[59][1] = "Entre 192 y 223";
 choices[59][2] = "Mayor o igual que 224";
 choices[59][3] = "Entre 128 y 191";
 answers[59] = choices[59][1];
 units[59] = "100";
 comments[59] = "Id Pregunta: 7246. Examen TIC B 2009";


//  Id pregunta: 7262 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  &quot;&iquest;Cu&aacute;l es el est&aacute;ndar WIMAX que permite movilidad conocido como &quot;&quot;WIMAX m&oacute;vil&quot;&quot;?&quot;";
 choices[60]= new Array();
 choices[60][0] = "802.16d";
 choices[60][1] = "802.16";
 choices[60][2] = "802.16h";
 choices[60][3] = "802.16e";
 answers[60] = choices[60][3];
 units[60] = "107";
 comments[60] = "Id Pregunta: 7262. Examen TIC B 2009";


//  Id pregunta: 7827 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)   Sobre la implementaci&oacute;n .NET de la seguridad basada en roles, escoja la afirmaci&oacute;n correcta:";
 choices[61]= new Array();
 choices[61][0] = " Se basa en cuentas/seguridad de Windows para identificar a los usuarios.";
 choices[61][1] = " El motor de ejecuci&oacute;n dispone de funciones para que los administradores puedan crear y gestionar la asignaci&oacute;n de cuentas de usuario de Windows a roles de aplicaci&oacute;n.";
 choices[61][2] = " Es necesario que los usuarios est&eacute;n asociados a cuentas de usuario de Windows.";
 choices[61][3] = " La seguridad basada en roles de la estructura .NET es incompatible con la de COM+ 1.0.";
 answers[61] = choices[61][1];
 units[61] = "NULL";
 comments[61] = "Id Pregunta: 7827. Map 2005";


//  Id pregunta: 7906 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)   &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas NO es aplicable en una aplicaci&oacute;n desarrollada con la tecnolog&iacute;a Java Web Start?";
 choices[62]= new Array();
 choices[62][0] = " Permite ejecutar aplicaciones independientemente de cu&aacute;l sea la plataforma cliente.";
 choices[62][1] = " Soporta m&uacute;ltiples versiones de entornos de ejecuci&oacute;n Java en el cliente.";
 choices[62][2] = " Se requiere la firma de las aplicaciones que vayan a ejecutarse en ese entorno para garantizar la seguridad del cliente.";
 choices[62][3] = " La actualizaci&oacute;n de las aplicaciones se hace en el servidor, y el cliente s&oacute;lo precisa descargar los componentes actualizados.";
 answers[62] = choices[62][2];
 units[62] = "NULL";
 comments[62] = "Id Pregunta: 7906. Map 2006";


//  Id pregunta: 7957 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)   &iquest;Cu&aacute;l de los siguientes apartados de la especificaci&oacute;n 7816 de ISO/IEC (International Standards Organization/International Electrotechnical Commission) relativa a tarjetas inteligentes recoge sus especificaciones el&eacute;ctricas y protocolos de comunicaci&oacute;n?";
 choices[63]= new Array();
 choices[63][0] = " 7816.";
 choices[63][1] = " 7816-3.";
 choices[63][2] = " 7816-4.";
 choices[63][3] = " 7816-5.";
 answers[63] = choices[63][1];
 units[63] = "NULL";
 comments[63] = "Id Pregunta: 7957. Map 2006";


//  Id pregunta: 8023 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)   En el modelo de referencia fijado por Open System Interconection, de la International Standars Organization, el nivel que realiza la funci&oacute;n de seleccionar la mejor ruta para la comunicaci&oacute;n entre m&aacute;quinas ubicadas en redes geogr&aacute;ficas distintas es el:";
 choices[64]= new Array();
 choices[64][0] = " Nivel 2.";
 choices[64][1] = " Nivel 3.";
 choices[64][2] = " Nivel 4.";
 choices[64][3] = " Nivel 5.";
 answers[64] = choices[64][1];
 units[64] = "NULL";
 comments[64] = "Id Pregunta: 8023. Map 2007";


//  Id pregunta: 8220 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  En CORBA la invocaci&oacute;n de un objeto para su ejecuci&oacute;n sigue el siguiente camino:";
 choices[65]= new Array();
 choices[65][0] = "Cliente - IDL Stub - ORB (Object Request Broker) - IDL Skeleton -Servidor.";
 choices[65][1] = "Cliente - ORB (Object Request Broker) - Servidor.";
 choices[65][2] = "Cliente - IDL Stub - Servidor.";
 choices[65][3] = "Cliente - IDL Skeleton - ORB (Object Request Broker) - IDL Stub - Servidor.";
 answers[65] = choices[65][0];
 units[65] = "82";
 comments[65] = "Id Pregunta: 8220. Examen TIC A1 2010";


//  Id pregunta: 8225 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  En relaci&oacute;n con el modelo EFQM, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta?";
 choices[66]= new Array();
 choices[66][0] = "El modelo EFQM se compone de 9 criterios, de los cuales 4 son agentes facilitadores y 5 son resultados.";
 choices[66][1] = "El modelo EFQM tom&oacute; como referencia otros modelos de calidad, tales como Malcom Baldrige y Deming.";
 choices[66][2] = "Los resultados del modelo EFQM son: resultados clave, resultados en la sociedad, resultados en los proveedores, resultados en los clientes y resultados en las personas.";
 choices[66][3] = "Los agentes facilitadores del modelo EFQM son: liderazgo, personas, procesos, pol&iacute;tica y estrategia.";
 answers[66] = choices[66][1];
 units[66] = "92";
 comments[66] = "Id Pregunta: 8225. Examen TIC A1 2010";


//  Id pregunta: 8479 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  &iquest;Cu&aacute;l de las siguientes operaciones se incorpora en SNMP v2?";
 choices[67]= new Array();
 choices[67][0] = "SetRequest";
 choices[67][1] = "GetBulkRequest";
 choices[67][2] = "GetNextRequest";
 choices[67][3] = "Trap";
 answers[67] = choices[67][1];
 units[67] = "104";
 comments[67] = "Id Pregunta: 8479. Examen TIC A2 2010 interna";


//  Id pregunta: 8615 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  En un entorno controlado de sistemas de informaci&oacute;n, la tarea de administraci&oacute;n de base de datos NO deber&iacute;a compatibilizarse con la de:";
 choices[68]= new Array();
 choices[68][0] = "Administraci&oacute;n de seguridad";
 choices[68][1] = "Programaci&oacute;n de aplicaciones";
 choices[68][2] = "Gesti&oacute;n de librer&iacute;as de cintas";
 choices[68][3] = "Aseguramiento de la calidad";
 answers[68] = choices[68][1];
 units[68] = "26";
 comments[68] = "Id Pregunta: 8615. Examen TIC A2 2010 interna";


//  Id pregunta: 8651 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  &iquest;Cu&aacute;l de las siguientes actividades se engloba, en M&eacute;trica v3. en el proceso de Construcci&oacute;n del sistema?";
 choices[69]= new Array();
 choices[69][0] = "Carga de Datos al entorno de operaci&oacute;n.";
 choices[69][1] = "Elaboraci&oacute;n de los manuales de usuario.";
 choices[69][2] = "Establecimiento del Acuerdo de Nivel de Servicio.";
 choices[69][3] = "Elaboraci&oacute;n del modelo de datos.";
 answers[69] = choices[69][1];
 units[69] = "86";
 comments[69] = "Id Pregunta: 8651. Examen TIC A2 2010 interna";


//  Id pregunta: 8743 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  &iquest;Cu&aacute;l de las siguientes es una funci&oacute;n de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos, seg&uacute;n lo establecido en la LOPD?";
 choices[70]= new Array();
 choices[70][0] = "Redactar una memoria anual y remitirla al Ministerio del Interior";
 choices[70][1] = "Proporcionar aplicaciones inform&aacute;ticas para la gesti&oacute;n de datos de car&aacute;cter personal.";
 choices[70][2] = "Investigar posibles incumplimientos de la LOPD e informar a la autoridad con potestad sancionadora, seg&uacute;n el caso";
 choices[70][3] = "Redactar una memoria anual y remitirla al Ministerio de Justicia";
 answers[70] = choices[70][3];
 units[70] = "29";
 comments[70] = "Id Pregunta: 8743. Examen TIC A2 2010 interna";


//  Id pregunta: 8911 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  &iquest;C&oacute;mo se expresan habitualmente las direcciones MAC?:";
 choices[71]= new Array();
 choices[71][0] = "En notaci&oacute;n decimal.";
 choices[71][1] = "En notaci&oacute;n hexadecimal.";
 choices[71][2] = "En notaci&oacute;n octal.";
 choices[71][3] = "En notaci&oacute;n binaria";
 answers[71] = choices[71][1];
 units[71] = "101";
 comments[71] = "Id Pregunta: 8911. Operador Ayto. Madrid 2010";


//  Id pregunta: 8979 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  &iquest;Cu&aacute;l de las siguientes no es una tecnolog&iacute;a de virtualizaci&oacute;n?";
 choices[72]= new Array();
 choices[72][0] = "XEN";
 choices[72][1] = "KVM";
 choices[72][2] = "UML";
 choices[72][3] = "Todas lo son";
 answers[72] = choices[72][3];
 units[72] = "119";
 comments[72] = "Id Pregunta: 8979. ";


//  Id pregunta: 9008 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  Dado que el espectro radioel&eacute;ctrico es considerado un recurso escaso por la Ley 9/2014, de 9 de mayo, General de Telecomunicaciones, el procedimiento para el otorgamiento de t&iacute;tulos habilitantes de uso privativo del espectro radioel&eacute;ctrico es:";
 choices[73]= new Array();
 choices[73][0] = "Es competencia de la Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n el otorgamiento de los t&iacute;tulos habilitantes salvo en los supuestos de otorgamiento por procedimiento de licitaci&oacute;n contemplado en el art&iacute;culo 63.";
 choices[73][1] = "La licitaci&oacute;n p&uacute;blica de las frecuencias para la obtenci&oacute;n de la concesi&oacute;n administrativa sujeta a los principios de publicidad, concurrencia y no discriminaci&oacute;n.";
 choices[73][2] = "Las dos anteriores son ciertas.";
 choices[73][3] = "Ninguna de las anteriores.";
 answers[73] = choices[73][2];
 units[73] = "110";
 comments[73] = "Id Pregunta: 9008. Teleco Ayto. Madrid 2010. Modificada seg&uacute;n Ley 9/2014";


//  Id pregunta: 9021 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  Un articulista est&aacute; escribiendo sobre las ventajas econ&oacute;micas de los sistemas WDM (Wavelength-Division Multiplexing), que se manifiestan principalmente en los sistemas:";
 choices[74]= new Array();
 choices[74][0] = "De baja capacidad y elevado alcance.";
 choices[74][1] = "De alta capacidad y reducido alcance.";
 choices[74][2] = "De alta capacidad y elevado alcance.";
 choices[74][3] = "Ninguna de las anteriores";
 answers[74] = choices[74][2];
 units[74] = "99";
 comments[74] = "Id Pregunta: 9021. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9043 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  Cu&aacute;l no es una implementaci&oacute;n de Linux";
 choices[75]= new Array();
 choices[75][0] = "Debian";
 choices[75][1] = "Ubuntu";
 choices[75][2] = "Red Hat";
 choices[75][3] = "Mono";
 answers[75] = choices[75][3];
 units[75] = "53";
 comments[75] = "Id Pregunta: 9043. ";


//  Id pregunta: 9056 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  &iquest;Cual de las siguientes ISO tiene definici&oacute;n de usabilidad?";
 choices[76]= new Array();
 choices[76][0] = "ISO/IEC 9126";
 choices[76][1] = "ISO/IEC 9241";
 choices[76][2] = "Las dos anteriores";
 choices[76][3] = "Ninguna de las anteriores";
 answers[76] = choices[76][2];
 units[76] = "39";
 comments[76] = "Id Pregunta: 9056. NULL";


//  Id pregunta: 9081 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  Indique cu&aacute;l es el n&uacute;mero de protocolo para IPv6";
 choices[77]= new Array();
 choices[77][0] = "17";
 choices[77][1] = "41";
 choices[77][2] = "47";
 choices[77][3] = "50";
 answers[77] = choices[77][1];
 units[77] = "111";
 comments[77] = "Id Pregunta: 9081. Consultar en wikipedia List_of_IP_protocol_numbers";


//  Id pregunta: 9085 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  En relaci&oacute;n a la matriz DAFO, se&ntilde;ale la afirmaci&oacute;n CORRECTA.";
 choices[78]= new Array();
 choices[78][0] = "Las fortalezas y las debilidades hacen referencia a aspectos internos de la organizaci&oacute;n";
 choices[78][1] = "Las fortalezas hacen referencia a aspectos externos a la organizaci&oacute;n y las debilidades a aspectos internos";
 choices[78][2] = "Las fortalezas hacen referencia a aspectos internos a la organizaci&oacute;n y las debilidades a aspectos externos";
 choices[78][3] = "Las fortalezas y las debilidades hacen referencia a aspectos externos de la organizaci&oacute;n";
 answers[78] = choices[78][0];
 units[78] = "77";
 comments[78] = "Id Pregunta: 9085. ";


//  Id pregunta: 9088 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  Indicar el requisito imprescindible para que un programa de ordenador sea protegible.";
 choices[79]= new Array();
 choices[79][0] = "Estar documentado correctamente";
 choices[79][1] = "Estar desarrollado por una persona f&iacute;sica";
 choices[79][2] = "Ser la primera versi&oacute;n de un programa, ya que las sucesivas no est&aacute;n protegidas";
 choices[79][3] = "Ser original";
 answers[79] = choices[79][3];
 units[79] = "36";
 comments[79] = "Id Pregunta: 9088. ";


//  Id pregunta: 9168 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  Modos de funcionamiento de la tecnolog&iacute;a NFC(near field communicator):";
 choices[80]= new Array();
 choices[80][0] = "Independiente/Infraestructura";
 choices[80][1] = "Activo/Pasivo";
 choices[80][2] = "Manual/Continuo";
 choices[80][3] = "Modo voz/Modo voz + datos";
 answers[80] = choices[80][1];
 units[80] = "70";
 comments[80] = "Id Pregunta: 9168. Examen TIC A2 2011";


//  Id pregunta: 9211 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  Con relaci&oacute;n al bucle arbitrado y red conmutada en las conexiones FC, es cierto que...";
 choices[81]= new Array();
 choices[81][0] = "mediante bucle arbitrado se pueden conectar hasta 50 dispositivos en un anillo en el que se comparte el ancho de banda entre todos ellos.";
 choices[81][1] = "La red conmutada utiliza switches para construir una NAS.";
 choices[81][2] = "En la red conmutada no se comparte el ancho de banda";
 choices[81][3] = "Bucle arbitrado y red conmutada no son formas v&aacute;lidas de conexi&oacute;n FC.";
 answers[81] = choices[81][2];
 units[81] = "48";
 comments[81] = "Id Pregunta: 9211. ";


//  Id pregunta: 9216 AÃ±o de creación de pregunta: 2013-01-01
 questions[82]= "83)  Para extender las redes SAN qu&eacute; tipo de interconexiones se suelen utilizar:";
 choices[82]= new Array();
 choices[82][0] = "Sonet/SDH, WDM, ATM";
 choices[82][1] = "Sonet/SDH, WDM, ATM, iSCSI, FCIP, iFCP";
 choices[82][2] = "CWDM, DWDM, ATM, iSCSCI, FCIP, iFCP";
 choices[82][3] = "Sonet/SDN, WDM, ATM, iSCSI";
 answers[82] = choices[82][1];
 units[82] = "48";
 comments[82] = "Id Pregunta: 9216. ";


//  Id pregunta: 9223 AÃ±o de creación de pregunta: 2013-01-01
 questions[83]= "84)  La replicaci&oacute;n continua de datos (o copia en tiempo real)";
 choices[83]= new Array();
 choices[83][0] = "Es un sistema mucho m&aacute;s ventajoso que la replicaci&oacute;n discreta porque permite recuperar la informaci&oacute;n existente en cualquier momento del tiempo de forma mucho m&aacute;s r&aacute;pida";
 choices[83][1] = "Es un sistema mucho menos ventajoso que la replicaci&oacute;n discreta o backups porque requiere mucha m&aacute;s capacidad de almacenamiento";
 choices[83][2] = "Puede ser s&iacute;ncrona o as&iacute;ncrona. En el segundo caso es equivalente a replicaci&oacute;n discreta.";
 choices[83][3] = "No sirve por s&iacute; misma para garantizar la integridad de la informaci&oacute;n frente a determinadas situaciones";
 answers[83] = choices[83][3];
 units[83] = "48";
 comments[83] = "Id Pregunta: 9223. Examen TIC-A1 2011";


//  Id pregunta: 10177 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  &iquest;Qu&eacute; afirmaci&oacute;n es cierta en relaci&oacute;n con la orientaci&oacute;n a objetos?";
 choices[84]= new Array();
 choices[84][0] = "La encapsulaci&oacute;n permite captar las caracter&iacute;sticas esenciales que distinguen a un objeto de otros tipos de objetos, en funci&oacute;n de la perspectiva del observador, y obtener as&iacute; una descripci&oacute;n de la clase de objetos que enfatiza unos detalles y suprimer otros";
 choices[84][1] = "Seg&uacute;n Grady Booch, un objeto o instancia de una clase tiene estado, comportamiento e identidad";
 choices[84][2] = "Los lenguajes OO son lenguajes fuertemente tipados que no soportan el enlace din&aacute;mico en tiempo de ejecuci&oacute;n, para invocar operaciones en objetos obviando el tipo actual de &eacute;stos";
 choices[84][3] = "El polimorfismo se expresa &uacute;nicamente a trav&eacute;s del uso de un mismo nombre de m&eacute;todo o funci&oacute;n con distintos argumentos o un mismo operador con distintas funcionalidades";
 answers[84] = choices[84][1];
 units[84] = "82";
 comments[84] = "Id Pregunta: 10177. ";


//  Id pregunta: 10193 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  En relaci&oacute;n a las t&eacute;cnicas para el reconocimiento &oacute;ptico de caracteres, indique la frase incorrecta:";
 choices[85]= new Array();
 choices[85][0] = "El histograma horizontal permite dividir un p&aacute;rrafo en l&iacute;neas";
 choices[85][1] = "El proceso de kerning aplicado por un procesador de textos dificulta el segmentado de palabras";
 choices[85][2] = "Los m&eacute;todos de Zadeh usan mecanismos basados en l&oacute;gica borrosa";
 choices[85][3] = "Los m&eacute;todos de comparaci&oacute;n de plantillas usan matrices bidimensionales";
 answers[85] = choices[85][1];
 units[85] = "94";
 comments[85] = "Id Pregunta: 10193. ";


//  Id pregunta: 10255 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Seg&uacute;n el art&iacute;culo 10 de la Ley 15/1999, LOPD, el deber de secreto: ";
 choices[86]= new Array();
 choices[86][0] = "Afecta a todos los que intervengan en el tratamiento de datos, por tiempo indefinido";
 choices[86][1] = "Afecta a todos los que intervengan en el tratamiento de datos, s&oacute;lo mientras dure dicho tratamiento";
 choices[86][2] = "Afecta s&oacute;lo al responsable del fichero y al encargado del tratamiento, por tiempo indefinido";
 choices[86][3] = "Afecta s&oacute;lo al responsable del fichero y al encargado del tratamiento, s&oacute;lo mientras dure dicho tratamiento";
 answers[86] = choices[86][0];
 units[86] = "29";
 comments[86] = "Id Pregunta: 10255. Art&iacute;culo 10 de la Ley 15/1999";


//  Id pregunta: 10256 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  La comunicaci&oacute;n de datos de car&aacute;cter personal al Miniterio Fiscal";
 choices[87]= new Array();
 choices[87][0] = "Puede hacerse en cualquier caso, sin consentimiento del interesado";
 choices[87][1] = "Puede hacerse sin consentimiento del interesado cuando sea en el ejercicio de las competencias propias del Ministerio Fiscal";
 choices[87][2] = "Puede hacerse sin consentimiento del afectado s&oacute;lo en los casos especificados en el reglamento de desarrollo de la Ley";
 choices[87][3] = "No puede hacerse en ning&uacute;n caso sin consentimiento del interesado";
 answers[87] = choices[87][1];
 units[87] = "29";
 comments[87] = "Id Pregunta: 10256. Art&iacute;culo 11.2 d) de la Ley 15/1999";


//  Id pregunta: 10257 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  En referencia al tratamiento de datos de car&aacute;cter personal, el ejercicio de los derechos de acceso, rectificaci&oacute;n, cancelaci&oacute;n y oposici&oacute;n";
 choices[88]= new Array();
 choices[88][0] = "El responsable al que se dirija la petici&oacute;n puede no contestar, entendi&eacute;ndose en ese caso que no obran en su poder datos personales del solicitante";
 choices[88][1] = "El responsable al que se dirija la petici&oacute;n puede no contestar, entendi&eacute;ndose en ese caso que, de obrar en su poder datos personales del solicitante, &eacute;stos no son datos especialmente protegidos";
 choices[88][2] = "El responsable al que se dirija la petici&oacute;n debe contestar en todo caso";
 choices[88][3] = "El responsable al que se dirija la petici&oacute;n debe contestar en todo caso si los datos se refieren a menores, no siendo obligatorio responder en otros casos";
 answers[88] = choices[88][2];
 units[88] = "29";
 comments[88] = "Id Pregunta: 10257. Art&iacute;culo 25.2 del RD 1720/2007";


//  Id pregunta: 10374 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  El Teorema Chino del Resto es un m&eacute;todo matem&aacute;tico de resoluci&oacute;n de ecuaciones en aritm&eacute;tica modular que tiene aplicaci&oacute;n principalmente en:";
 choices[89]= new Array();
 choices[89][0] = "Criptograf&iacute;a asim&eacute;trica o de clave p&uacute;blica";
 choices[89][1] = "Criptograf&iacute;a sim&eacute;trica";
 choices[89][2] = "C&aacute;lculo de impedancias de cables coaxiales";
 choices[89][3] = "Junto con el teorema de Euler se usa en resoluci&oacute;n de caminos en grafos, teniendo su aplicaci&oacute;n pr&aacute;ctica en la resoluci&oacute;n de enrutamientos en comunicaciones.";
 answers[89] = choices[89][0];
 units[89] = "72";
 comments[89] = "Id Pregunta: 10374. ";


//  Id pregunta: 10819 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  &iquest;Cu&aacute;l de las siguientes NO es una metodolog&iacute;a de desarrollo?";
 choices[90]= new Array();
 choices[90][0] = "MERISE.";
 choices[90][1] = "SDM (Structured Development Method).";
 choices[90][2] = "RUP (Rational Unified Process).";
 choices[90][3] = "SCRUM.";
 answers[90] = choices[90][1];
 units[90] = "79";
 comments[90] = "Id Pregunta: 10819. Examen GSI 2014";


//  Id pregunta: 10904 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;A qu&eacute; se refiere el t&eacute;rmino mashup?";
 choices[91]= new Array();
 choices[91][0] = "Plataforma de desarrollo Web que define la base de datos (MySQL), el servidor Web (Apache), el sistema operativo (Solaris), y el lenguaje de programaci&oacute;n (Haskell).";
 choices[91][1] = "Peque&ntilde;a secci&oacute;n de la ventana del navegador que muestra un mensaje de texto que se desplaza a trav&eacute;s de la pantalla.";
 choices[91][2] = "Conjunto de t&eacute;cnicas y recomendaciones para conseguir que una p&aacute;gina web aparezca en los primeros resultados de los buscadores para unas determinadas palabras clave (keywords).";
 choices[91][3] = "Aplicaciones web que combinan datos y contenido de distintas fuentes para dar una experiencia de usuario integrada.";
 answers[91] = choices[91][3];
 units[91] = "0";
 comments[91] = "Id Pregunta: 10904. Examen GSI 2014";


//  Id pregunta: 10988 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  La Comisi&oacute;n Nacional de los Mercados y la Competencia (CNMC), en relaci&oacute;n con las telecomunicaciones:";
 choices[92]= new Array();
 choices[92][0] = "Autoriza operadores de telecomunicaciones.";
 choices[92][1] = "Autoriza distribuidores de equipamiento de redes y servicios de la sociedad de la informaci&oacute;n.";
 choices[92][2] = "Define los mercados de referencia relativos a redes y servicios electr&oacute;nicos.";
 choices[92][3] = "Define las actuaciones de los operadores, en relaci&oacute;n con los posibles conflictos de los anchos de banda en el espacio radioel&eacute;ctrico.";
 answers[92] = choices[92][2];
 units[92] = "110";
 comments[92] = "Id Pregunta: 10988. TIC A1 AGE 2014";


//  Id pregunta: 10996 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  En el caso de un fichero de datos relativo a la comisi&oacute;n de infracciones administrativas o penales, indique los niveles de seguridad que deber&aacute;n implantarse:";
 choices[93]= new Array();
 choices[93][0] = "S&oacute;lo las medidas de seguridad de nivel b&aacute;sico.";
 choices[93][1] = "Adem&aacute;s de las medidas de seguridad de nivel b&aacute;sico, las medidas de nivel medio y alto.";
 choices[93][2] = "Adem&aacute;s de las medidas de seguridad de nivel b&aacute;sico, las medidas de nivel medio.";
 choices[93][3] = "Adem&aacute;s de las medidas de seguridad de nivel b&aacute;sico, las medidas de nivel alto.";
 answers[93] = choices[93][2];
 units[93] = "29";
 comments[93] = "Id Pregunta: 10996. TIC A1 AGE 2014";


//  Id pregunta: 10999 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  En relaci&oacute;n con jquery, se&ntilde;ale la respuesta correcta:";
 choices[94]= new Array();
 choices[94][0] = "Es una biblioteca disponible en Java 6 y 7 que facilita la realizaci&oacute;n de consultas a bases de datos relacionales.";
 choices[94][1] = "Es una biblioteca de Javascript para simplificar la interacci&oacute;n con p&aacute;ginas web.";
 choices[94][2] = "Es un est&aacute;ndar abierto que facilita la realizaci&oacute;n de consultas a bases de datos relacionales.";
 choices[94][3] = "Es una biblioteca para el acceso a almacenes de datos y big data, que permite la interacci&oacute;n del usuario final con los datos agregados y de detalle.";
 answers[94] = choices[94][1];
 units[94] = "114";
 comments[94] = "Id Pregunta: 10999. TIC A1 AGE 2014";


//  Id pregunta: 11051 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Qu&eacute; algoritmo genera un Hash de mayor longitud?";
 choices[95]= new Array();
 choices[95][0] = "MD5";
 choices[95][1] = "SHA-1";
 choices[95][2] = "SHA-384";
 choices[95][3] = "WHIRLPOOL";
 answers[95] = choices[95][3];
 units[95] = "72";
 comments[95] = "Id Pregunta: 11051. WHIRLPOOL produce un Hash de 512 bits";


//  Id pregunta: 11093 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  En una estructura de tres niveles de un CAU, seleccione la opci&oacute;n verdadera.";
 choices[96]= new Array();
 choices[96][0] = "El nivel 2 deber&aacute; tener acceso a la base de incidencias ya que la incidencia reportada puede haberse producido anteriormente.";
 choices[96][1] = "Todas las incidencias deben estar documentadas una vez resueltas.";
 choices[96][2] = "Todas las incidencias comienzan por una recepci&oacute;n y finalizan con un cierre.";
 choices[96][3] = "Todas las anteriores son verdaderas";
 answers[96] = choices[96][3];
 units[96] = "26";
 comments[96] = "Id Pregunta: 11093. ";


//  Id pregunta: 11136 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Cu&aacute;l de los siguientes no es un lenguaje para interactuar con la SGBD?";
 choices[97]= new Array();
 choices[97][0] = "DDL - Data Definition Language";
 choices[97][1] = "DML - Data Manipulation Language";
 choices[97][2] = "DCL - Data Control Language";
 choices[97][3] = "Todos los anteriores son lenguajes para interactuar con la SGBD";
 answers[97] = choices[97][3];
 units[97] = "57";
 comments[97] = "Id Pregunta: 11136. ";


//  Id pregunta: 11698 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Una WAN Frame-Relay est&aacute;ndar corresponde a una red f&iacute;sica:";
 choices[98]= new Array();
 choices[98][0] = "Punto a punto";
 choices[98][1] = "Broadcast multi-acceso";
 choices[98][2] = "No broadcast multi-acceso";
 choices[98][3] = "Broadcast punto a multipunto";
 answers[98] = choices[98][2];
 units[98] = "102";
 comments[98] = "Id Pregunta: 11698. NULL";


//  Id pregunta: 11731 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Cu&aacute;l es el perfil de metrica v3 al que pertenece el Responsable de Seguridad?  ";
 choices[99]= new Array();
 choices[99][0] = "Analista";
 choices[99][1] = "Jefe de proyecto";
 choices[99][2] = "Consultor";
 choices[99][3] = "Analista-programador";
 answers[99] = choices[99][1];
 units[99] = "29";
 comments[99] = "Id Pregunta: 11731. ";


