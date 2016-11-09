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

//  Id pregunta: 5 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de los siguientes no se considera un motivo para ordenar una auditor&iacute;a?:";
 choices[0]= new Array();
 choices[0][0] = "Para determinar el origen del malfuncionamiento de una aplicaci&oacute;n";
 choices[0][1] = "Para determinar el estado del sistema ante un cambio importante";
 choices[0][2] = "Para determinar cual es el motivo del malfuncionamiento del sistema";
 choices[0][3] = "Para determinar si los proyectos transcurren seg&uacute;n lo establecido, en cuanto a recursos, objetivos etc";
 answers[0] = choices[0][0];
 units[0] = "31,32,33";
 comments[0] = "Id Pregunta: 5. ";


//  Id pregunta: 75 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Qu&eacute; m&eacute;todo de ordenaci&oacute;n de alternativas utiliza &uacute;nicamente la componente subjetiva del decisor?:";
 choices[1]= new Array();
 choices[1][0] = "Concordancia";
 choices[1][1] = "M&eacute;todo lexicogr&aacute;fico";
 choices[1][2] = "Ponderaci&oacute;n lineal";
 choices[1][3] = "Ninguno de las anteriores respuestas es correcta";
 answers[1] = choices[1][3];
 units[1] = "34";
 comments[1] = "Id Pregunta: 75. ";


//  Id pregunta: 96 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  A todos los efectos se consideraran normas europeas las producidas por los organismos:";
 choices[2]= new Array();
 choices[2][0] = "CEN, CENELEC o CEPT/ETSI";
 choices[2][1] = "CENELEC, ETSI o IEC";
 choices[2][2] = "ISO, CEPT o CENELEC";
 choices[2][3] = "AENOR, CEPT o CEN";
 answers[2] = choices[2][0];
 units[2] = "42";
 comments[2] = "Id Pregunta: 96. ";


//  Id pregunta: 271 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  Indicar la verdadera respecto a la estructura de un sistema de informaci&oacute;n:";
 choices[3]= new Array();
 choices[3][0] = "En la estructura horizontal, y dentro de cada nivel, las funciones de un sistema de informaci&oacute;n se subdividen en aplicaciones o  procedimientos";
 choices[3][1] = "En la estructura horizontal, y dentro de cada nivel, las funciones de un sistema de informaci&oacute;n se subdividen en aplicaciones y procedimientos";
 choices[3][2] = "En la estructura vertical, y dentro de cada nivel, las funciones de un sistema de informaci&oacute;n se subdividen en aplicaciones o procedimientos";
 choices[3][3] = "En la estructura vertical, y dentro de cada nivel, las funciones de un sistema de informaci&oacute;n se subdividen en aplicaciones y procedimientos";
 answers[3] = choices[3][0];
 units[3] = "21";
 comments[3] = "Id Pregunta: 271. ";


//  Id pregunta: 287 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  La clasificaci&oacute;n de las tareas realizadas en la oficina en cuatro tipos b&aacute;sicos (mensajes, gesti&oacute;n de informaci&oacute;n personal y acceso a la informaci&oacute;n) fue realizada por:";
 choices[4]= new Array();
 choices[4][0] = "Carter  y Huzan";
 choices[4][1] = "Kent";
 choices[4][2] = "Price";
 choices[4][3] = "Panki";
 answers[4] = choices[4][2];
 units[4] = "22";
 comments[4] = "Id Pregunta: 287. ";


//  Id pregunta: 328 AÃ±o de creación de pregunta: 2009-01-01
 questions[5]= "6)  Los ficheros con datos de car&aacute;cter personal de &aacute;mbito departamental, usualmente soportados por herramientas ofim&aacute;ticas de usuario final:";
 choices[5]= new Array();
 choices[5][0] = "Precisan ser declarados por el organismo pero no inscritos en el registro de ficheros de la agencia de protecci&oacute;n de datos.";
 choices[5][1] = "No precisan ser declarados pero s&iacute; ser inscritos en el registro de la agencia de protecci&oacute;n de datos.";
 choices[5][2] = "Se caracterizan como de nivel b&aacute;sico en el RD 1720/2007 por las plataformas en las que se soportan.";
 choices[5][3] = "Se tratan a todos los efectos como el resto de ficheros de datos de car&aacute;cter personal con las consideraciones introducidas por el RD 1720/2007.";
 answers[5] = choices[5][3];
 units[5] = "29";
 comments[5] = "Id Pregunta: 328. NULL";


//  Id pregunta: 416 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Se define la escalabilidad como:";
 choices[6]= new Array();
 choices[6][0] = "La posibilidad de que aplicaciones de distintos desarrolladores funcionen en m&aacute;quinas de distintos fabricantes";
 choices[6][1] = "La posibilidad de ampliar la capacidad de almacenamiento de un equipo sin necesidad de recurrir a piezas del fabricante que lo construy&oacute;";
 choices[6][2] = "La posibilidad de enlazar en una red, ordenadores de la misma gama, con la seguridad de que funcionar&aacute;n como un &uacute;nico sistema";
 choices[6][3] = "La posibilidad de utilizar el mismo entorno se software en diferentes gamas de ordenadores, desde ordenadores de sobremesa hasta mainframes";
 answers[6] = choices[6][3];
 units[6] = "40";
 comments[6] = "Id Pregunta: 416. ";


//  Id pregunta: 978 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  De las siguientes afirmaciones, indique la correcta respecto a los lenguajes procedimentales:";
 choices[7]= new Array();
 choices[7][0] = "En un lenguaje procedimental, se indica c&oacute;mo hay que realizar la acci&oacute;n";
 choices[7][1] = "En un lenguaje procedimental, se indica que resultado se quiere obtener";
 choices[7][2] = "Los lenguajes procedimentales son lenguajes de cuarta generaci&oacute;n";
 choices[7][3] = "Es cierto &lsquo;a&rsquo; y &lsquo;c&rsquo;";
 answers[7] = choices[7][0];
 units[7] = "63";
 comments[7] = "Id Pregunta: 978. ";


//  Id pregunta: 1101 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  En Java, cuando un programa deja de utilizar un objeto:";
 choices[8]= new Array();
 choices[8][0] = "El &quot;garbage collector&quot; lo elimina inmediatamente de la memoria";
 choices[8][1] = "Es necesario codificar la destrucci&oacute;n del objeto";
 choices[8][2] = "El objeto se destruye a s&iacute; mismo";
 choices[8][3] = "Ninguna de las anteriores";
 answers[8] = choices[8][3];
 units[8] = "60";
 comments[8] = "Id Pregunta: 1101. JCED - Preparatic XVII. El obj puede eliminarse cuando no hay referencias a &eacute;l.";


//  Id pregunta: 1218 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  La especificaci&oacute;n XSLT define:";
 choices[9]= new Array();
 choices[9][0] = "El formato de visualizaci&oacute;n de los documentos XML";
 choices[9][1] = "El formato de ordenaci&oacute;n de etiquetas o tags de documentos XML";
 choices[9][2] = "La definici&oacute;n de datos en los documentos XML";
 choices[9][3] = "La estructura de enlace en los documentos XML";
 answers[9] = choices[9][0];
 units[9] = "69";
 comments[9] = "Id Pregunta: 1218. NULL";


//  Id pregunta: 1431 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  Uno de los siguientes grupos de componentes no pertenece al conjunto de componentes s&iacute;ncronos de groupware. Indicar cu&aacute;l:";
 choices[10]= new Array();
 choices[10][0] = "video, audio, editor texto";
 choices[10][1] = "gestor de tr&aacute;fico, control de estado, punteros";
 choices[10][2] = "bases de datos de objetos, motores workflow, notas post-it";
 choices[10][3] = "compartidor de aplicaciones, chat, pizarras";
 answers[10] = choices[10][2];
 units[10] = "71";
 comments[10] = "Id Pregunta: 1431. ";


//  Id pregunta: 1535 AÃ±o de creación de pregunta: 2003-01-01
 questions[11]= "12)  &iquest; Cu&aacute;l de los siguientes t&eacute;rminos no est&aacute; relacionado con un directorio LDAP ?";
 choices[11]= new Array();
 choices[11][0] = "DIT";
 choices[11][1] = "WMI";
 choices[11][2] = "DN";
 choices[11][3] = "RDN";
 answers[11] = choices[11][1];
 units[11] = "74";
 comments[11] = "Id Pregunta: 1535. NULL";


//  Id pregunta: 1597 AÃ±o de creación de pregunta: 2003-01-01
 questions[12]= "13)  En relaci&oacute;n con la interfaz ODBC, se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es falsa:";
 choices[12]= new Array();
 choices[12][0] = "Es la implementaci&oacute;n realizada por Microsoft de las especificaciones CLI (Call Level Interface) para el acceso desde aplicaciones a sistemas gestores de base de datos";
 choices[12][1] = "La idea que sustenta el desarrollo de ODBC es la de permitir que una misma aplicaci&oacute;n pueda interactuar con distintos sistemas gestores de base de datos";
 choices[12][2] = "Dispone de flexibilidad como interfaz pero impide aprovechar las ventajas de la arquitectura cliente servidor";
 choices[12][3] = "Permite que lo que un sistema gestor pueda hacerle sea transparente a la aplicaci&oacute;n, aunque no implementa nuevas capacidades";
 answers[12] = choices[12][2];
 units[12] = "58";
 comments[12] = "Id Pregunta: 1597. NULL";


//  Id pregunta: 1609 AÃ±o de creación de pregunta: 2003-01-01
 questions[13]= "14)  La forma normal Boyce-Codd (FNBC):";
 choices[13]= new Array();
 choices[13][0] = " Es mas restrictiva que la 4FN; toda FNBC es 4FN.";
 choices[13][1] = "Es menos restrictiva que la 4FN; toda 4FN es FNBC.";
 choices[13][2] = "Se denomina indistintamente 5FN.";
 choices[13][3] = "Se denomina indistintamente 5FN+ (quinta forma normal ampliada).";
 answers[13] = choices[13][1];
 units[13] = "58";
 comments[13] = "Id Pregunta: 1609. Junta Andaluc&iacute;a";


//  Id pregunta: 1679 AÃ±o de creación de pregunta: 2004-01-01
 questions[14]= "15)  &iquest;Cu&aacute;l de las siguientes NO es una caracter&iacute;stica de un archivo JAR?";
 choices[14]= new Array();
 choices[14][0] = "Fichero que re&uacute;ne clases, im&aacute;genes, sonidos y otros ficheros necesarios para la ejecuci&oacute;n";
 choices[14][1] = "Es dependiente de la plataforma";
 choices[14][2] = "Empaqueta ficheros y los comprime con el algoritmo LZW";
 choices[14][3] = "JAR es el acr&oacute;nimo de Java ARchive";
 answers[14] = choices[14][1];
 units[14] = "60";
 comments[14] = "Id Pregunta: 1679. JCED - Preparatic XVII";


//  Id pregunta: 1773 AÃ±o de creación de pregunta: 2006-01-01
 questions[15]= "16)  &iquest;C&oacute;mo se llama la versi&oacute;n en software libre de la plataforma .Net?";
 choices[15]= new Array();
 choices[15][0] = ".DOT";
 choices[15][1] = ".free";
 choices[15][2] = "Mono";
 choices[15][3] = "Gambas";
 answers[15] = choices[15][2];
 units[15] = "61,62";
 comments[15] = "Id Pregunta: 1773. ";


//  Id pregunta: 1837 AÃ±o de creación de pregunta: 2006-01-01
 questions[16]= "17)  El protocolo SET (Secure Electronic Transaction) se puede transportar sobre:";
 choices[16]= new Array();
 choices[16][0] = "TCP";
 choices[16][1] = "SMTP";
 choices[16][2] = "HTTP";
 choices[16][3] = "Todas las anteriores";
 answers[16] = choices[16][3];
 units[16] = "70";
 comments[16] = "Id Pregunta: 1837. NULL";


//  Id pregunta: 2109 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  &iquest; De los siguientes, cu&aacute;l es un lenguaje orientado a objetos puro?:";
 choices[17]= new Array();
 choices[17][0] = "Dominum";
 choices[17][1] = "PureLisp";
 choices[17][2] = "Eiffel";
 choices[17][3] = "Domino";
 answers[17] = choices[17][2];
 units[17] = "82";
 comments[17] = "Id Pregunta: 2109. ";


//  Id pregunta: 2562 AÃ±o de creación de pregunta: 2004-01-01
 questions[18]= "19)  &iquest;Qu&eacute; significa que una Organizaci&oacute;n esta en el Nivel 2 del CMM?";
 choices[18]= new Array();
 choices[18][0] = "En este nivel se logran establecer las pol&iacute;ticas para adminsitrar un proyecto de software y los procedimientos para lograrlo, esto se realiza en base a la experiencia obtenida en proyectos similares.";
 choices[18][1] = "En este nivel, el proceso est&aacute;ndar para el desarrollo y mantenimiento de software se documenta, tanto desde el punto de vista t&eacute;cnico como administrativo. Se explotan efectivamente pr&aacute;cticas de ingenier&iacute;a de software para estandarizar los procesos.";
 choices[18][2] = "Todas son correctas";
 choices[18][3] = "En este nivel la empresa carece de buenas pr&aacute;cticas de ingenier&iacute;a de software, ni existe una planeaci&oacute;n efectiva. Los proyectos generalmente abandonan los planes realizados en etapas de crisis.";
 answers[18] = choices[18][0];
 units[18] = "87,88,92";
 comments[18] = "Id Pregunta: 2562. ";


//  Id pregunta: 2701 AÃ±o de creación de pregunta: 2003-01-01
 questions[19]= "20)  Rango din&aacute;mico de una imagen es:";
 choices[19]= new Array();
 choices[19][0] = "El tama&ntilde;o de la imagen a escanear en sus dos dimensiones (ancho y alto).";
 choices[19][1] = "El cambio de resoluci&oacute;n de la imagen al ampliar o reducir.";
 choices[19][2] = "El n&uacute;mero m&aacute;ximo de niveles de gris por pixel que ser&iacute;an susceptibles de ser definidos entre el blanco y el negro.";
 choices[19][3] = "Tama&ntilde;o m&aacute;ximo de la imagen producida por los traductores del formato EPS (Postscript) a mapa de bits.";
 answers[19] = choices[19][2];
 units[19] = "93";
 comments[19] = "Id Pregunta: 2701. NULL";


//  Id pregunta: 2735 AÃ±o de creación de pregunta: 2006-01-01
 questions[20]= "21)  Un buen analista debe exhibir los siguientes rasgos de car&aacute;cter";
 choices[20]= new Array();
 choices[20][0] = "Capacidad de captaci&oacute;n de los problemas del entorno de usuario";
 choices[20][1] = "Capacidad de s&iacute;ntesis de los problemas";
 choices[20][2] = "Capacidad de comprensi&oacute;n de conceptos abstractos, reorganizaci&oacute;n en apartados l&oacute;gicos y s&iacute;ntesis de soluciones para cada apartado";
 choices[20][3] = "Todas las anteriores";
 answers[20] = choices[20][3];
 units[20] = "78";
 comments[20] = "Id Pregunta: 2735. ";


//  Id pregunta: 2812 AÃ±o de creación de pregunta: 2006-01-01
 questions[21]= "22)  Est&aacute;dares de Calidad de M&eacute;trica v3";
 choices[21]= new Array();
 choices[21][0] = "Norma ISO 9001";
 choices[21][1] = "norma  ISO 9000-2003";
 choices[21][2] = "normas ISO 9000-2000 y norma ISO 9001-2000";
 choices[21][3] = "norma ISO 9000-2001";
 answers[21] = choices[21][2];
 units[21] = "88";
 comments[21] = "Id Pregunta: 2812. NULL";


//  Id pregunta: 2949 AÃ±o de creación de pregunta: 2004-01-01
 questions[22]= "23)  ActiveX s&oacute;lo puede ejecutarse en:";
 choices[22]= new Array();
 choices[22][0] = "Java";
 choices[22][1] = "UNIX";
 choices[22][2] = "Microsoft/Intel";
 choices[22][3] = "Virtual Machine";
 answers[22] = choices[22][2];
 units[22] = "114";
 comments[22] = "Id Pregunta: 2949. Similar a examen TIC SS A 2003";


//  Id pregunta: 2967 AÃ±o de creación de pregunta: 2004-01-01
 questions[23]= "24)  El sistema cableado del tipo conocido como de Par Trenzado sin Apantallar es:";
 choices[23]= new Array();
 choices[23][0] = "STP";
 choices[23][1] = "UTP";
 choices[23][2] = "FTP";
 choices[23][3] = "OM1";
 answers[23] = choices[23][1];
 units[23] = "99";
 comments[23] = "Id Pregunta: 2967. NULL";


//  Id pregunta: 3069 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Indique la afirmaci&oacute;n incorrecta respecto al correo electr&oacute;nico:";
 choices[24]= new Array();
 choices[24][0] = "Los mensajes se pueden recibir aunque el equipo est&eacute; desconectado";
 choices[24][1] = "No es necesaria la conexi&oacute;n directa emisor-receptor";
 choices[24][2] = "No permite enviar fax";
 choices[24][3] = "Todos los sistemas de correo electr&oacute;nico que cumplan las recomendaciones X.400 de la ITU-T pueden interconectarse a trav&eacute;s de la mensajer&iacute;a p&uacute;blica";
 answers[24] = choices[24][2];
 units[24] = "106";
 comments[24] = "Id Pregunta: 3069. ";


//  Id pregunta: 3073 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  La arquitectura Internet en tres capas diferencia:";
 choices[25]= new Array();
 choices[25][0] = "Nivel de presentaci&oacute;n, de aplicaci&oacute;n y de datos";
 choices[25][1] = "Nivel de navegador, de aplicaci&oacute;n y de datos";
 choices[25][2] = "Nivel de cliente, de servidor  y de navegador";
 choices[25][3] = "Las respuestas &lsquo;a&rsquo;, &lsquo;b&rsquo; y &lsquo;c&rsquo; son falsas";
 answers[25] = choices[25][0];
 units[25] = "113";
 comments[25] = "Id Pregunta: 3073. ";


//  Id pregunta: 3203 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  El algoritmo conocido como Spanning Tree Algorithm se usa:";
 choices[26]= new Array();
 choices[26][0] = "Para optimizar los caminos usados en redes complejas con routers";
 choices[26][1] = "Evitar bucles en redes con puentes transparentes que tienen varios path entre ellos";
 choices[26][2] = "Calcular los cambios a hacer en las configuraciones de los routers cuando alguno de ellos falla";
 choices[26][3] = "Se usa en redes de Token Bus para calcular a quien pasar el testigo (token) en caso de que la siguiente estaci&oacute;n no conteste (puede estar apagada o estropeada)";
 answers[26] = choices[26][1];
 units[26] = "102";
 comments[26] = "Id Pregunta: 3203. ";


//  Id pregunta: 3306 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  &iquest;Qu&eacute; punto de referencia es el interfaz f&iacute;sico y l&oacute;gico entre Terminales dise&ntilde;ados para conectarse directamente a la RDSI como los tel&eacute;fonos digitales RDSI, &oacute; Adaptadores de Terminal, con una Terminaci&oacute;n de Red de tipo 2?:";
 choices[27]= new Array();
 choices[27][0] = "R";
 choices[27][1] = "S";
 choices[27][2] = "T";
 choices[27][3] = "U";
 answers[27] = choices[27][1];
 units[27] = "103";
 comments[27] = "Id Pregunta: 3306. ";


//  Id pregunta: 3376 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  El est&aacute;ndar ITU-T para audio digital no comprimido en el sonido telef&oacute;nico es:";
 choices[28]= new Array();
 choices[28][0] = "Q.932";
 choices[28][1] = "G.722";
 choices[28][2] = "G.711";
 choices[28][3] = "Q.931";
 answers[28] = choices[28][2];
 units[28] = "117";
 comments[28] = "Id Pregunta: 3376. ";


//  Id pregunta: 3548 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  En RDSI BA al decir que las interfaces son sim&eacute;tricas, nos referimos a:";
 choices[29]= new Array();
 choices[29][0] = "Igualdad de interfaces entre emisor y receptor";
 choices[29][1] = "Igual velocidad de entrada que de salida";
 choices[29][2] = "Igual velocidad de entrada que de salida, pero solo interfaces el&eacute;ctricas";
 choices[29][3] = "Igual velocidad de entrada que de salida, pero solo interfaces &oacute;pticas";
 answers[29] = choices[29][1];
 units[29] = "103";
 comments[29] = "Id Pregunta: 3548. ";


//  Id pregunta: 3620 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  La norma IEEE 802.11a define una velocidad m&aacute;xima de transferencia de:";
 choices[30]= new Array();
 choices[30][0] = "11 Mbps";
 choices[30][1] = "11 MBps";
 choices[30][2] = "54 Mbps";
 choices[30][3] = "54 MBps";
 answers[30] = choices[30][2];
 units[30] = "101,107";
 comments[30] = "Id Pregunta: 3620. ";


//  Id pregunta: 3995 AÃ±o de creación de pregunta: 2006-01-01
 questions[31]= "32)  En SNMP:";
 choices[31]= new Array();
 choices[31][0] = "El agente env&iacute;a al cliente comandos Get Response";
 choices[31][1] = "El origen de SNMP es SGMP";
 choices[31][2] = "Su arquitectura consiste en agente, objetos y cliente";
 choices[31][3] = "Todas son verdaderas";
 answers[31] = choices[31][3];
 units[31] = "104";
 comments[31] = "Id Pregunta: 3995. ";


//  Id pregunta: 4093 AÃ±o de creación de pregunta: 2006-01-01
 questions[32]= "33)  Que es TRAM";
 choices[32]= new Array();
 choices[32][0] = "Una arquitectura web basada en software libre";
 choices[32][1] = "Una arquitectura web basada en j2ee";
 choices[32][2] = "Una arquitectura web basada en .Net";
 choices[32][3] = "Ninguna de las anteriores";
 answers[32] = choices[32][3];
 units[32] = "114,115, 116";
 comments[32] = "Id Pregunta: 4093. NULL";


//  Id pregunta: 4108 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  Existen varias formas de acceder al servicio de correo electr&oacute;nico:";
 choices[33]= new Array();
 choices[33][0] = "B&aacute;sicamente dos, a trav&eacute;s de webmail o a trav&eacute;s de programas de correo electr&oacute;nico especializado.";
 choices[33][1] = "B&aacute;sicamente dos, a trav&eacute;s de webmail o a trav&eacute;s de programas denominados P2P (Peer To Peer).";
 choices[33][2] = "El correo electr&oacute;nico es en todo caso un servicio de pago.";
 choices[33][3] = "Ninguna de las anteriores es correcta";
 answers[33] = choices[33][0];
 units[33] = "112";
 comments[33] = "Id Pregunta: 4108. ";


//  Id pregunta: 4128 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  Lenguaje utilizado para describir los servicios web ofrecidos a los usuarios";
 choices[34]= new Array();
 choices[34][0] = "XML";
 choices[34][1] = "Xerces";
 choices[34][2] = "UDDI";
 choices[34][3] = "WSDL";
 answers[34] = choices[34][3];
 units[34] = "112,51";
 comments[34] = "Id Pregunta: 4128. ";


//  Id pregunta: 4282 AÃ±o de creación de pregunta: 2007-01-01
 questions[35]= "36)  En miner&iacute;a de datos, un Esquema Estrella:";
 choices[35]= new Array();
 choices[35][0] = "No tiene en cuenta elementos temporales tales como la fecha asociada a la informaci&oacute;n.";
 choices[35][1] = "Es una forma de representar la arquitectura f&iacute;sica del sistema OLAP.";
 choices[35][2] = "Es una t&eacute;cnica de dise&ntilde;o de bases de datos relacionales que sirve para simular el funcionamiento de bases de datos multidimensionales.";
 choices[35][3] = "Representa la centralizaci&oacute;n de la informaci&oacute;n en un solo SGBD para posibilitar su explotaci&oacute;n ndimensional.";
 answers[35] = choices[35][2];
 units[35] = "68";
 comments[35] = "Id Pregunta: 4282. ";


//  Id pregunta: 4329 AÃ±o de creación de pregunta: 2007-01-01
 questions[36]= "37)  Un centro alternativo de tratamiento de la informaci&oacute;n:";
 choices[36]= new Array();
 choices[36][0] = "Debe ser identificable desde el exterior, para que sea f&aacute;cilmente localizado en caso de emergencia.";
 choices[36][1] = "Debe tener las mismas restricciones de acceso f&iacute;sico que la instalaci&oacute;n principal.";
 choices[36][2] = "Debe estar ubicado en las proximidades de la instalaci&oacute;n principal, as&iacute; se puede poner en operaci&oacute;n inmediatamente.";
 choices[36][3] = "No necesita disponer del mismo nivel de supervisi&oacute;n ni controles ambientales que la instalaci&oacute;n principal, porque los costes ser&iacute;an prohibitivos.";
 answers[36] = choices[36][1];
 units[36] = "33";
 comments[36] = "Id Pregunta: 4329. ";


//  Id pregunta: 4342 AÃ±o de creación de pregunta: 2007-01-01
 questions[37]= "38)  Seg&uacute;n la Ley 59/2003 de Firma Electr&oacute;nica, un dispositivo seguro de creaci&oacute;n de firma electr&oacute;nica es aquel que al menos ofrece una serie de garant&iacute;as. &iquest;Cu&aacute;l de las siguientes no es una garant&iacute;a exigida para dichos dispositivos?";
 choices[37]= new Array();
 choices[37][0] = "Que los datos utilizados para la generaci&oacute;n de firma pueden producirse s&oacute;lo una vez y asegura razonablemente su secreto.";
 choices[37][1] = "Que existe una seguridad razonable de que los datos utilizados para la generaci&oacute;n de firma no pueden ser derivados de los de verificaci&oacute;n de firma o de la propia firma.";
 choices[37][2] = "Que los datos de creaci&oacute;n de firma pueden ser protegidos de forma fiable por el firmante contra su utilizaci&oacute;n por terceros";
 choices[37][3] = "Que el dispositivo de creaci&oacute;n de firma est&eacute; certificado al menos con el nivel de seguridad EAL4+.";
 answers[37] = choices[37][3];
 units[37] = "30";
 comments[37] = "Id Pregunta: 4342. Ley 59/2003, art&iacute;culo 24";


//  Id pregunta: 4640 AÃ±o de creación de pregunta: 2007-01-01
 questions[38]= "39)  Los diagramas de flujo de datos se componen de";
 choices[38]= new Array();
 choices[38][0] = "actores y casos de uso";
 choices[38][1] = "procesos y tablas";
 choices[38][2] = "entidad externa, proceso, almac&eacute;n de datos y flujo de datos";
 choices[38][3] = "modulo, conexi&oacute;n, par&aacute;metro, almac&eacute;n de datos y dispositivos f&iacute;sicos";
 answers[38] = choices[38][2];
 units[38] = "81";
 comments[38] = "Id Pregunta: 4640. ";


//  Id pregunta: 4662 AÃ±o de creación de pregunta: 2007-01-01
 questions[39]= "40)  Tasa M&aacute;xima de Transferencia  de Informaci&oacute;n alcanzable con la tecnolog&iacute;a HSDPA ";
 choices[39]= new Array();
 choices[39][0] = "7.2Mbps";
 choices[39][1] = "14.4Mbps";
 choices[39][2] = "4.8Mbps";
 choices[39][3] = "10.7Mbps";
 answers[39] = choices[39][1];
 units[39] = "108";
 comments[39] = "Id Pregunta: 4662. ";


//  Id pregunta: 4743 AÃ±o de creación de pregunta: 2007-01-01
 questions[40]= "41)  El American Nacional Standard Institute (ANSI)";
 choices[40]= new Array();
 choices[40][0] = "Ha desarrollado el est&aacute;ndar FDDI";
 choices[40][1] = "Representa a Estados Unidos en la ISO";
 choices[40][2] = "Las respuestas a y b son ciertas";
 choices[40][3] = "las respuestas a y b son falsas";
 answers[40] = choices[40][2];
 units[40] = "42";
 comments[40] = "Id Pregunta: 4743. Examen 2006 JCYL";


//  Id pregunta: 4785 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  El modelo espiral WinWin define los siguientes hitos en el proceso:";
 choices[41]= new Array();
 choices[41][0] = "Objetivos del ciclo de vida, arquitectura del ciclo de vida y capacidad operativa iniclal.";
 choices[41][1] = "Alcance del sistema y tama&ntilde;o del sistema.";
 choices[41][2] = "Verificaci&oacute;n de requisitos, verificaci&oacute;n de funcionalidades y verificaci&oacute;n de codigo";
 choices[41][3] = "El modelo espiral WinWin no define hitos en el proceso";
 answers[41] = choices[41][3];
 units[41] = "76";
 comments[41] = "Id Pregunta: 4785. ";


//  Id pregunta: 4938 AÃ±o de creación de pregunta: 2003-01-01
 questions[42]= "43)  La notaci&oacute;n de un diagrama Entidad-Relaci&oacute;n no permite representar:";
 choices[42]= new Array();
 choices[42][0] = "Jerarqu&iacute;as de tipos de objetos de datos.";
 choices[42][1] = "Asociaci&oacute;n de objetos de datos.";
 choices[42][2] = "Transformaciones de objetos de datos.";
 choices[42][3] = "La relaci&oacute;n entre objetos de datos.";
 answers[42] = choices[42][2];
 units[42] = "80";
 comments[42] = "Id Pregunta: 4938. Examen TIC B 2007";


//  Id pregunta: 5017 AÃ±o de creación de pregunta: 2003-01-01
 questions[43]= "44)  &iquest;Cu&aacute;l es una caracter&iacute;stica de los sistemas de informaci&oacute;n geogr&aacute;fica basados en formato r&aacute;ster?:";
 choices[43]= new Array();
 choices[43][0] = "Utiliza puntos, l&iacute;neas y pol&iacute;gonos para almacenar la informaci&oacute;n.";
 choices[43][1] = "La precisi&oacute;n de localizaci&oacute;n es mayor que en la de otros formatos.";
 choices[43][2] = "Se construye utilizando ret&iacute;culas de tama&ntilde;o regular.";
 choices[43][3] = "No es adecuado para modelos que incluyan evoluci&oacute;n temporal.";
 answers[43] = choices[43][2];
 units[43] = "67";
 comments[43] = "Id Pregunta: 5017. Examen TIC A 2007";


//  Id pregunta: 5045 AÃ±o de creación de pregunta: 2003-01-01
 questions[44]= "45)  En el modelo de referencia fijado por Open System Interconection, de la International Standars Organization, el nivelque realiza la funci&oacute;n de seleccionar la mejor ruta para la comunicaci&oacute;n entre m&aacute;quinas ubicadas en redesgeogr&aacute;ficas distintas es el:";
 choices[44]= new Array();
 choices[44][0] = "Nivel 2";
 choices[44][1] = "Nivel 3";
 choices[44][2] = "Nivel 4";
 choices[44][3] = "Nivel 5";
 answers[44] = choices[44][1];
 units[44] = "100";
 comments[44] = "Id Pregunta: 5045. Examen TIC A 2007";


//  Id pregunta: 5082 AÃ±o de creación de pregunta: 2003-01-01
 questions[45]= "46)  Seg&uacute;n el m&eacute;todo del c&aacute;mino cr&iacute;tico, &iquest;cu&aacute;l de las siguientes afirmaciones NO es cierta?:";
 choices[45]= new Array();
 choices[45][0] = "El camino cr&iacute;tico determina el tiempo m&aacute;s corto que podemos tardar en hacer el proyecto si se dispone detodos los recursos necesarios";
 choices[45][1] = "Las actividades cr&iacute;ticas no tienen holgura.";
 choices[45][2] = "Una actividad es cr&iacute;tica cuando no se puede cambiar sus instantes de comienzo y finalizaci&oacute;n sin modificarla duraci&oacute;n total del proyecto.";
 choices[45][3] = "La concatenaci&oacute;n de las todas las actividades de un proyecto es el camino cr&iacute;tico.";
 answers[45] = choices[45][3];
 units[45] = "77";
 comments[45] = "Id Pregunta: 5082. Examen TIC A 2007";


//  Id pregunta: 5220 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  La tarea &quot;Diagn&oacute;stico del Sistema Actual&quot; a qu&eacute; actividad del procesos Planificaci&oacute;n de Sistemas de Informaci&oacute;n pertenece";
 choices[46]= new Array();
 choices[46][0] = "Estudio de la informaci&oacute;n relevante";
 choices[46][1] = "Estudio de los Sistemas de Informaci&oacute;n Actuales";
 choices[46][2] = "Identificaci&oacute;n de Requisitos";
 choices[46][3] = "Dise&ntilde;o del modelo de Sistemas de Informaci&oacute;n";
 answers[46] = choices[46][3];
 units[46] = "86";
 comments[46] = "Id Pregunta: 5220. NULL";


//  Id pregunta: 5511 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  Indique cu&aacute;l de los siguientes no es un elemento de la arquitectura de la red europea TESTA-II:";
 choices[47]= new Array();
 choices[47][0] = "LocalDomain";
 choices[47][1] = "EuroDomain";
 choices[47][2] = "EuroNet";
 choices[47][3] = "EuroGate";
 answers[47] = choices[47][2];
 units[47] = "103";
 comments[47] = "Id Pregunta: 5511. ";


//  Id pregunta: 5525 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  Las siglas OCR responden a";
 choices[48]= new Array();
 choices[48][0] = "Optical Character Recognition";
 choices[48][1] = "Optical Computer Redefinition";
 choices[48][2] = "Optimal Character Recognition";
 choices[48][3] = "Online Character Recognition";
 answers[48] = choices[48][0];
 units[48] = "94";
 comments[48] = "Id Pregunta: 5525. ";


//  Id pregunta: 5561 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  De las siguientes afirmaciones se&ntilde;ale aquella que supone un inconveniente para la protecci&oacute;n de derechos de autor comparado con la protecci&oacute;n por patentes:";
 choices[49]= new Array();
 choices[49][0] = "Los derechos de autor nacen en el mismo momento de la creaci&oacute;n de la obra.";
 choices[49][1] = "S&oacute;lo se exige que la obra sea de creaci&oacute;n original.";
 choices[49][2] = "Se protege la forma de expresi&oacute;n de las ideas.";
 choices[49][3] = "Todas las anteriores son ventajas.";
 answers[49] = choices[49][2];
 units[49] = "37";
 comments[49] = "Id Pregunta: 5561. ";


//  Id pregunta: 5594 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  &iquest;Qu&eacute; figura se incluy&oacute; en la ley de contratos del sector p&uacute;blico, 30/2007?";
 choices[50]= new Array();
 choices[50][0] = "El representante de adjudicaci&oacute;n";
 choices[50][1] = "El responsable de adjudicaci&oacute;n";
 choices[50][2] = "El responsable del contrato";
 choices[50][3] = "El representante de contrato";
 answers[50] = choices[50][2];
 units[50] = "41";
 comments[50] = "Id Pregunta: 5594. ";


//  Id pregunta: 5863 AÃ±o de creación de pregunta: 2009-01-01
 questions[51]= "52)  Determine cu&aacute;l de las afirmaciones siguiente NO se corresponde con una caracter&iacute;stica definitoria de la tecnolog&iacute;a ATM:";
 choices[51]= new Array();
 choices[51][0] = "Las redes ATM est&aacute;n orientadas a la conexi&oacute;n, requiriendo del establecimiento de un circuito virtual antes de la trasferencia de informaci&oacute;n entre dos extremos";
 choices[51][1] = "ATM es independiente del trasporte f&iacute;sico, las celdas ATM pueden ser trasportadas en redes SONET, SDH, T3/E3 &Oacute; T1/E1";
 choices[51][2] = "ATM puede utilizarse tanto como plataforma de interconexi&oacute;n de redes, como una red para proporcionar servicios de banda ancha";
 choices[51][3] = "Las celdas son de longitud variable, con un m&aacute;ximo de 53 bytes, de los cuales 5 son de cabecera y los restantes son portadores de la informaci&oacute;n de usuario, gesti&oacute;n y se&ntilde;alizaci&oacute;n";
 answers[51] = choices[51][3];
 units[51] = "109";
 comments[51] = "Id Pregunta: 5863. MAP 2008 A1";


//  Id pregunta: 5907 AÃ±o de creación de pregunta: 2009-01-01
 questions[52]= "53)  &iquest;En cu&aacute;l de las siguientes metodolog&iacute;as de desarrollo de software NO se utilizan Diagramas de Flujo de Datos?";
 choices[52]= new Array();
 choices[52][0] = "De Marco";
 choices[52][1] = "Jackson";
 choices[52][2] = "Gane &amp; Sarson";
 choices[52][3] = "Yourdon/Constantine";
 answers[52] = choices[52][1];
 units[52] = "79";
 comments[52] = "Id Pregunta: 5907. MAP 2008 A1";


//  Id pregunta: 5919 AÃ±o de creación de pregunta: 2009-01-01
 questions[53]= "54)  &iquest;Cu&aacute;l de las siguientes paquetes software se usa para construir grids?:";
 choices[53]= new Array();
 choices[53][0] = "Globus Toolkit";
 choices[53][1] = "Grid Squema Toolkit";
 choices[53][2] = "EYEE Toolkit";
 choices[53][3] = "WS-DAI";
 answers[53] = choices[53][0];
 units[53] = "45";
 comments[53] = "Id Pregunta: 5919. MAP 2008 A1";


//  Id pregunta: 5997 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  El derecho moral sobre un programa de ordenador implica que:";
 choices[54]= new Array();
 choices[54][0] = "El que tiene este derecho lo puede ceder o transmitir, con o sin contraprestaci&oacute;n econ&oacute;mica.";
 choices[54][1] = "El que tiene este derecho tambi&eacute;n posee el derecho de explotaci&oacute;n, reproducci&oacute;n, distribuci&oacute;n, comunicaci&oacute;n p&uacute;blica ytransformaci&oacute;n.";
 choices[54][2] = "El que tiene este derecho no lo puede ceder, ni transmitir, ni siquiera renunciar a &eacute;l.";
 choices[54][3] = "El que tiene este derecho puede exigir el derecho de remuneraci&oacute;n por copia privada.";
 answers[54] = choices[54][2];
 units[54] = "36";
 comments[54] = "Id Pregunta: 5997. TIC A 2009";


//  Id pregunta: 6005 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  El est&aacute;ndar WSDL:";
 choices[55]= new Array();
 choices[55][0] = "Es el protocolo para efectuar llamadas a m&eacute;todos de objetos remotos mediante peticiones XML.";
 choices[55][1] = "Describe la interfaz de servicio";
 choices[55][2] = "Es el registro p&uacute;blico de servicios.";
 choices[55][3] = "Es el protocolo de transporte.";
 answers[55] = choices[55][1];
 units[55] = "69";
 comments[55] = "Id Pregunta: 6005. TIC A 2009";


//  Id pregunta: 6133 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  ADO.NET es:";
 choices[56]= new Array();
 choices[56][0] = "Un conjunto de componentes software de la capa de l&oacute;gica de negocio.";
 choices[56][1] = "Un lenguaje de programaci&oacute;n para el entorno .NET.";
 choices[56][2] = "Un conjunto de componentes para el acceso a datos.";
 choices[56][3] = "Una biblioteca de clases b&aacute;sica de la capa de presentaci&oacute;n.";
 answers[56] = choices[56][2];
 units[56] = "59";
 comments[56] = "Id Pregunta: 6133. TIC A 2009";


//  Id pregunta: 6140 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  Acerca del protocolo Kerberos v. 5 (IETF RFC 4120):";
 choices[57]= new Array();
 choices[57][0] = "Tiene extensiones que permiten el empleo de criptograf&iacute;a de clave p&uacute;blica y secreta.";
 choices[57][1] = "Los tickets expiran tras un tiempo predeterminado en el protocolo.";
 choices[57][2] = "El servidor de autenticaci&oacute;n cifra el ticket que remite al cliente con una clave que obtiene a partir del nombre y la contrase&ntilde;a del usuario.";
 choices[57][3] = "Utiliza los algoritmos de cifrado bajo el modo de operaci&oacute;n denominado CBC (Cipher block chaining).";
 answers[57] = choices[57][0];
 units[57] = "74";
 comments[57] = "Id Pregunta: 6140. TIC A 2009";


//  Id pregunta: 6220 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  Qu&eacute; subproyecto de 'Apache' basado en servlets permite a los desarrolladores crear r&aacute;pidamente aplicaciones web y permite personalizar el uso de sitios web y restringir el acceso a partes de la aplicaci&oacute;n";
 choices[58]= new Array();
 choices[58][0] = "Watchdog";
 choices[58][1] = "Turbine";
 choices[58][2] = "Lucene";
 choices[58][3] = "Avalon";
 answers[58] = choices[58][1];
 units[58] = "60";
 comments[58] = "Id Pregunta: 6220. TICB-2009, bloque desarrollo";


//  Id pregunta: 6243 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas acerca de OLAP es correcta?";
 choices[59]= new Array();
 choices[59][0] = "La principal caracter&iacute;stica que potencia a OLAP, es que es lo m&aacute;s r&aacute;pido a la hora de ejecutar sentencias SQL de tipo UPDATE, en contraposici&oacute;n con OLTP que es la mejor opci&oacute;n para operaciones de tipo DELETE.";
 choices[59][1] = "La principal caracter&iacute;stica que potencia a OLAP, es que es lo m&aacute;s r&aacute;pido a la hora de ejecutar sentencias SQL de tipo SELECT, en contraposici&oacute;n con OLTP que es la mejor opci&oacute;n para operaciones de tipo INSERT, UPDATE, DELETE.";
 choices[59][2] = "La principal caracter&iacute;stica que potencia a OLAP, es que es lo m&aacute;s r&aacute;pido a la hora de ejecutar sentencias SQL de tipo DELETE, en contraposici&oacute;n con OLTP que es la mejor opci&oacute;n para operaciones de tipo UPDATE.";
 choices[59][3] = "La principal caracter&iacute;stica que potencia a OLAP, es que es lo m&aacute;s r&aacute;pido a la hora de ejecutar sentencias SQL de tipo DELETE, en contraposici&oacute;n con OLTP que es la mejor opci&oacute;n para operaciones de tipo SELECT, INSERT y UPDATE.";
 answers[59] = choices[59][1];
 units[59] = "68";
 comments[59] = "Id Pregunta: 6243. TICB-2009, bloque desarrollo";


//  Id pregunta: 6255 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  &iquest;Cu&aacute; de las siguientes afirmaciones referentes a tipos de mantenimiento es falsa?";
 choices[60]= new Array();
 choices[60][0] = "Mantenimiento Correctivo comprende aquellos cambios necesarios para corregir errores del producto software";
 choices[60][1] = "Mantenimiento Evolutivo se refiere a las modificaciones necesarias para adaptar el sistema y el entorno a una nueva versi&oacute;n del producto";
 choices[60][2] = "Mantenimiento Adaptativo engloba las modificaciones que afectan a los entornos en los que el sistema opera: cambios de configuraci&oacute;n del hardware, software de base, gestores de base de datos, comunicaciones, etc.";
 choices[60][3] = "Mantenimiento Perfectivo son acciones llevadas a cabo para mejorar la calidad interna de los sistemas en cualquiera de sus aspectos: reestructuraci&oacute;n del c&oacute;digo, definici&oacute;n m&aacute;s clara del sistema y optimizaci&oacute;n del rendimiento y eficiencia";
 answers[60] = choices[60][1];
 units[60] = "87";
 comments[60] = "Id Pregunta: 6255. TICB-2009, bloque desarrollo";


//  Id pregunta: 6268 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  El &ldquo;Plan&rdquo; cuyo objetivo es conseguir la continuidad en las funciones estrat&eacute;gicas de una organizaci&oacute;n desempe&ntilde;adas en sus instalaciones corporativas se denomina:";
 choices[61]= new Array();
 choices[61][0] = "Plan de continuidad de operaciones.";
 choices[61][1] = "Plan de continuidad de negocio.";
 choices[61][2] = "Plan de contingencia.";
 choices[61][3] = "Plan de emergencia.";
 answers[61] = choices[61][0];
 units[61] = "32";
 comments[61] = "Id Pregunta: 6268. ";


//  Id pregunta: 6300 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  &iquest;C&oacute;mo se denomina la clase que no tiene instancias?";
 choices[62]= new Array();
 choices[62][0] = "No existen clases sin instancias";
 choices[62][1] = "Invisible";
 choices[62][2] = "Hu&eacute;rfana";
 choices[62][3] = "Abstracta";
 answers[62] = choices[62][3];
 units[62] = "82";
 comments[62] = "Id Pregunta: 6300. ";


//  Id pregunta: 6419 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  Las pautas de accesibilidad de agentes de usuario WAI-W3C, se conocen como:";
 choices[63]= new Array();
 choices[63][0] = "WCAG";
 choices[63][1] = "UAAG";
 choices[63][2] = "ATAG";
 choices[63][3] = "TAW";
 answers[63] = choices[63][1];
 units[63] = "39";
 comments[63] = "Id Pregunta: 6419. NULL";


//  Id pregunta: 6545 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  La autenticaci&oacute;n fuerte requiere dos de los tres atributos de autenticaci&oacute;n, de entre los que se encuentran";
 choices[64]= new Array();
 choices[64][0] = "Algo que alguien sabe";
 choices[64][1] = "Algo que alguien tiene";
 choices[64][2] = "A y B son correctas";
 choices[64][3] = "A y B son incorrectas";
 answers[64] = choices[64][2];
 units[64] = "111";
 comments[64] = "Id Pregunta: 6545. NULL";


//  Id pregunta: 7157 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  &iquest;Cu&aacute;l de las siguientes funciones no las realiza el Sistema Operativo?";
 choices[65]= new Array();
 choices[65][0] = "Gesti&oacute;n de memoria";
 choices[65][1] = "Administraci&oacute;n de procesos";
 choices[65][2] = "Arranque de la m&aacute;quina";
 choices[65][3] = "Administraci&oacute;n del sistema de E/S";
 answers[65] = choices[65][2];
 units[65] = "52";
 comments[65] = "Id Pregunta: 7157. Examen TIC B 2009";


//  Id pregunta: 7166 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  En Oracle, un tablespace es:";
 choices[66]= new Array();
 choices[66][0] = "El espacio que ocupa un fichero en donde reside un &iacute;ndice";
 choices[66][1] = "El espacio f&iacute;sico de almacenamiento de datos";
 choices[66][2] = "El espacio que ocupa un fichero en donde reside una tabla";
 choices[66][3] = "El espacio l&oacute;gico de almacenamiento de datos";
 answers[66] = choices[66][3];
 units[66] = "58";
 comments[66] = "Id Pregunta: 7166. Examen TIC B 2009";


//  Id pregunta: 7255 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  Seg&uacute;n la RFC 2373 correpondiente a la arquitectura de direccionamiento para IPv6. El prefijo que es usado para direcciones multidifusi&oacute;n (multicast) es";
 choices[67]= new Array();
 choices[67][0] = "3F";
 choices[67][1] = "FE";
 choices[67][2] = "FC";
 choices[67][3] = "FF";
 answers[67] = choices[67][3];
 units[67] = "100";
 comments[67] = "Id Pregunta: 7255. Examen TIC B 2009";


//  Id pregunta: 7898 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)   &iquest;Cu&aacute;l de las siguientes infracciones NO est&aacute; tipificada como muy grave seg&uacute;n la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la informaci&oacute;n y de comercio electr&oacute;nico?";
 choices[68]= new Array();
 choices[68][0] = " El incumplimiento significativo de la obligaci&oacute;n de retener los datos de tr&aacute;fico generados por las comunicaciones establecidas durante la prestaci&oacute;n de un servicio de la sociedad de la informaci&oacute;n, prevista en el art&iacute;culo 12 de dicha Ley.";
 choices[68][1] = " La utilizaci&oacute;n de los datos retenidos, en cumplimiento del art&iacute;culo 12 de dicha Ley, para fines distintos de los se&ntilde;alados en &eacute;l.";
 choices[68][2] = " El incumplimiento de la obligaci&oacute;n de suspender la transmisi&oacute;n, el alojamiento de datos, el acceso a la red o la prestaci&oacute;n de cualquier otro servicio equivalente de intermediaci&oacute;n, cuando un &oacute;rgano administrativo competente lo ordene, en virtud de lo dispuesto en el art&iacute;culo 11 de dicha Ley.";
 choices[68][3] = " El env&iacute;o masivo de comunicaciones comerciales por correo electr&oacute;nico u otro medio de comunicaci&oacute;n electr&oacute;nica equivalente o el env&iacute;o, en el plazo de un a&ntilde;o, de m&aacute;s de tres comunicaciones comerciales por los medios aludidos a un mismo destinatario, cuando en dichos env&iacute;os no se cumplan los requisitos establecidos en el art&iacute;culo 21 de dicha Ley.";
 answers[68] = choices[68][3];
 units[68] = "NULL";
 comments[68] = "Id Pregunta: 7898. Map 2006";


//  Id pregunta: 8173 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  En los sistemas MIMD:";
 choices[69]= new Array();
 choices[69][0] = "Todos los datos est&aacute;n accesibles para todos los procesadores.";
 choices[69][1] = "No todas las instrucciones est&aacute;n disponibles para todos los procesadores.";
 choices[69][2] = "Emplean varios buses de altas prestaciones para transmitir instrucciones y datos simult&aacute;neamente.";
 choices[69][3] = "Pueden trabajar con memoria compartida o con memoria distribuida.";
 answers[69] = choices[69][3];
 units[69] = "45";
 comments[69] = "Id Pregunta: 8173. Examen TIC A1 2010";


//  Id pregunta: 8299 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  Una direcci&oacute;n IP identifica:";
 choices[70]= new Array();
 choices[70][0] = "Una conexi&oacute;n. ";
 choices[70][1] = "Una interfaz de tarjeta de red.";
 choices[70][2] = "Un ordenador.";
 choices[70][3] = "Una aplicaci&oacute;n interactiva. ";
 answers[70] = choices[70][1];
 units[70] = "100";
 comments[70] = "Id Pregunta: 8299. Examen TIC A2 2010";


//  Id pregunta: 8318 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  &iquest;En qu&eacute; banda de frecuencias y hasta qu&eacute; velocidad funciona el est&aacute;ndar 802.11a? ";
 choices[71]= new Array();
 choices[71][0] = "2,4 GHz y hasta 11Mbps. ";
 choices[71][1] = "5 GHz y hasta 54Mbps. ";
 choices[71][2] = "2,4 GHz y hasta 54 Mbps. ";
 choices[71][3] = "5 GHz y hasta 11 Mbps.";
 answers[71] = choices[71][1];
 units[71] = "107";
 comments[71] = "Id Pregunta: 8318. Examen TIC A2 2010";


//  Id pregunta: 8453 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  Un puente se caracteriza por:";
 choices[72]= new Array();
 choices[72][0] = "Operar en capa 3 del modelo OSI y utiliza direcciones MAC para tomar decisiones";
 choices[72][1] = "Opera en capa 2 del modelo OSI y utiliza direcciones MAC para tomar decisiones";
 choices[72][2] = "Operar en capa 3 del modelo OSI y utiliza direcciones IP para tomar decisiones";
 choices[72][3] = "Operar en capa 4 del modelo OSI y utiliza puertos TCP para tomar decisiones";
 answers[72] = choices[72][1];
 units[72] = "102";
 comments[72] = "Id Pregunta: 8453. Analista Ayto. Madrid 2010";


//  Id pregunta: 8465 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l de las siguientes NO es una etiqueta HTML?:";
 choices[73]= new Array();
 choices[73][0] = "&lt;em&gt;&lt;/em&gt;";
 choices[73][1] = "&lt;meta&gt;";
 choices[73][2] = "&lt;tc&gt;&lt;/tc&gt;";
 choices[73][3] = "&lt;body&gt;&lt;/body&gt;";
 answers[73] = choices[73][2];
 units[73] = "69";
 comments[73] = "Id Pregunta: 8465. Analista Ayto. Madrid 2010";


//  Id pregunta: 8646 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  &iquest;Seg&uacute;n M&eacute;trica v3 cu&aacute;l de los siguientes participantes estar&iacute;a encuadrado dentro del perfil &quot;Consultor&quot;?";
 choices[74]= new Array();
 choices[74][0] = "T&eacute;cnico de sistemas.";
 choices[74][1] = "Grupo de Aseguramiento da la Calidad.";
 choices[74][2] = "Equipo de Arquitectura.";
 choices[74][3] = "Administrador de Bases de Datos.";
 answers[74] = choices[74][0];
 units[74] = "86";
 comments[74] = "Id Pregunta: 8646. Examen TIC A2 2010 interna";


//  Id pregunta: 8658 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  En una fibra &oacute;ptica multimodo de &iacute;ndice escalonado:";
 choices[75]= new Array();
 choices[75][0] = "El n&uacute;cleo tiene un &iacute;ndice de refracci&oacute;n constante en toda la secci&oacute;n cil&iacute;ndrica e inferior al del revestimiento";
 choices[75][1] = "El n&uacute;cleo tiene un &iacute;ndice de refracci&oacute;n escalonado en toda la cil&iacute;ndrica e inferior al del revestimiento";
 choices[75][2] = "El n&uacute;cleo tiene un &iacute;ndice de refracci&oacute;n escalonado en toda la cil&iacute;ndrica y superior al del revestimiento";
 choices[75][3] = "El n&uacute;cleo tiene un &iacute;ndice de refracci&oacute;n constante en toda la secci&oacute;n cil&iacute;ndrica y superior al del revestimiento";
 answers[75] = choices[75][3];
 units[75] = "99";
 comments[75] = "Id Pregunta: 8658. Examen UPM A2 2011";


//  Id pregunta: 8679 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  El permiso de Unix 500 pemiite:";
 choices[76]= new Array();
 choices[76][0] = "Lectura y escritura para el propietario del archivo";
 choices[76][1] = "Lectura y ejecuci&oacute;n para el propietario del archivo";
 choices[76][2] = "Lectura y escritura para todos los usuarios";
 choices[76][3] = "Lectura y ejecuci&oacute;n para todos los usuarios del mismo grupo que lo ha creado";
 answers[76] = choices[76][1];
 units[76] = "53";
 comments[76] = "Id Pregunta: 8679. Examen UPM A2 2011";


//  Id pregunta: 8860 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  La principal ventaja de un sistema RAID-5 sobre otros sistemas RAID es:";
 choices[77]= new Array();
 choices[77][0] = "Ofrece la m&aacute;xima velocidad posible tanto en lectura como escritura";
 choices[77][1] = "Ofrece la maxima seguridad de los datos almacenados";
 choices[77][2] = "Ofrece cierta seguridad y buena velocidad en escrituras aleatorias cortas";
 choices[77][3] = "Puede ser implementado tanto en Hardware como en Software";
 answers[77] = choices[77][2];
 units[77] = "48";
 comments[77] = "Id Pregunta: 8860. Analista Ayto. Madrid 2010";


//  Id pregunta: 8906 AÃ±o de creación de pregunta: 2011-01-01
 questions[78]= "79)  Dentro de las categor&iacute;as de cable con est&aacute;ndar oficial, &iquest;cu&aacute;l de las siguientes utilizar&iacute;a para implementar una red de &aacute;rea local con velocidad prevista de transmisi&oacute;n de 100Mbps? :";
 choices[78]= new Array();
 choices[78][0] = "Par trenzado sin apantallar Categor&iacute;a 2.";
 choices[78][1] = "UTP Categor&iacute;a 3.";
 choices[78][2] = "UTP Categor&iacute;a 5.";
 choices[78][3] = "Par trenzado sin apantallar categor&iacute;a 3";
 answers[78] = choices[78][2];
 units[78] = "99, 101";
 comments[78] = "Id Pregunta: 8906. Operador Ayto. Madrid 2010";


//  Id pregunta: 9369 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  Ante situaciones de congesti&oacute;n, Resilient Packet Ring:";
 choices[79]= new Array();
 choices[79][0] = "Reacciona descartando paquetes.";
 choices[79][1] = "Utiliza el algoritmo Fairness, que sirve para los servicios de clase A1, B-CIR, B-EIR y C; y que limita el tr&aacute;fico en la red, asign&aacute;ndose diferentes rangos de velocidad a los clientes en base a la cantidad de ancho de banda disponible en el anillo y que se puede reutilizar de las diferentes clases.";
 choices[79][2] = "Utiliza el algoritmo Fairness, que sirve para todos los tipos de tr&aacute;fico y que limita el tr&aacute;fico en la red, asign&aacute;ndose diferentes rangos de velocidad a los clientes en base a la cantidad de ancho de banda disponible en el anillo.";
 choices[79][3] = "No tiene control de congesti&oacute;n.";
 answers[79] = choices[79][1];
 units[79] = "101";
 comments[79] = "Id Pregunta: 9369. ";


//  Id pregunta: 9394 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  Se&ntilde;ale la respuesta falsa con respecto a LTE:";
 choices[80]= new Array();
 choices[80][0] = "Emplea radiocanales de frecuencia fija de 15 Mhz";
 choices[80][1] = "Utiliza canales de ancho de banda adaptativos.";
 choices[80][2] = "Puede trabajar en muchas bandas frecuenciales diferentes";
 choices[80][3] = "Utiliza modulaciones QPSK, 16QAM y 64QAM";
 answers[80] = choices[80][0];
 units[80] = "108";
 comments[80] = "Id Pregunta: 9394. NULL";


//  Id pregunta: 9506 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  En el patr&oacute;n MVC:";
 choices[81]= new Array();
 choices[81][0] = "Modelo son los componentes que se encargan de la l&oacute;gica de negocio, Vista son los componentes que se encargan de la presentaci&oacute;n o interfaz de usuario y Controlador son los componentes que se encargan del flujo de control de la aplicaci&oacute;n";
 choices[81][1] = "Modelo son los componentes que se encargan de la carga de datos, Vista son los componentes que se encargan de la presentaci&oacute;n o interfaz de usuario y Controlador son los componentes que se encargan del flujo de control de la aplicaci&oacute;n";
 choices[81][2] = "Modelo son los componentes que se encargan de la l&oacute;gica de negocio, Vista son los componentes que se encargan de la presentaci&oacute;n o interfaz en el servidor y Controlador son los componentes que se encargan del flujo de control de la aplicaci&oacute;n";
 choices[81][3] = "Modelo son los componentes que se encargan de la l&oacute;gica de negocio, Vista son los componentes que se encargan de la presentaci&oacute;n o interfaz de usuario y Controlador son los componentes que se encargan del flujo de control del personal que accede al servidor";
 answers[81] = choices[81][0];
 units[81] = "116";
 comments[81] = "Id Pregunta: 9506. NULL";


//  Id pregunta: 9548 AÃ±o de creación de pregunta: 2013-01-01
 questions[82]= "83)  Seg&uacute;n la Ley de Firma Electr&oacute;nica, se&ntilde;ale cu&aacute;l NO es un supuesto que exima al prestador de servicios de certificaci&oacute;n de la responsabilidad sobre los posibles da&ntilde;os y perjuicios causados a un firmante:";
 choices[82]= new Array();
 choices[82][0] = "Cuando el firmante no haya proporcionado al prestador informaci&oacute;n veraz, completa y exacta de los datos que deban constar en el certificado en el momento de emitir el mismo";
 choices[82][1] = "Cuado el firmante no haya comunicado al prestador cualquier cambio en las circunstancias reflejadas en el certificado electr&oacute;nico";
 choices[82][2] = "Cuando el firmante haya sido negligente en la conservaci&oacute;n de sus datos de creaci&oacute;n de firma";
 choices[82][3] = "Cuando el firmante utilice un certificado revocado sin que el prestador le haya notificado la suspensi&oacute;n de la vigencia";
 answers[82] = choices[82][3];
 units[82] = "30";
 comments[82] = "Id Pregunta: 9548. Ley 59/2003, art&iacute;culo 23";


//  Id pregunta: 9679 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  En la comparaci&oacute;n en una proyecci&oacute;n Mercator del un &aacute;rea del Atl&aacute;ntico Norte, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[83]= new Array();
 choices[83][0] = "El rumbo loxodr&oacute;mico se toma seg&uacute;n el c&iacute;rculo m&aacute;ximo terrestre o distancia m&aacute;s corta curva en el mapa.";
 choices[83][1] = "El rumbo ortodr&oacute;mico se toma seg&uacute;n los puntos cardinales, l&iacute;nea recta en el mapa.";
 choices[83][2] = "El rumbo loxodr&oacute;mico se toma seg&uacute;n los puntos cardinales, l&iacute;nea recta en el mapa.";
 choices[83][3] = "No existen tales conceptos en la proyecci&oacute;n de Mercator.";
 answers[83] = choices[83][2];
 units[83] = "67";
 comments[83] = "Id Pregunta: 9679. NULL";


//  Id pregunta: 9716 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  Dentro del Centro de Transferencia Tecnol&oacute;gica, el Servicio de Oficina Virtual de Registro que permite, entre otros, la remisi&oacute;n de los asientos registrales entre Administraciones P&uacute;blicas, se denomina";
 choices[84]= new Array();
 choices[84][0] = "SIR.";
 choices[84][1] = "ORVE.";
 choices[84][2] = "SICRES 3.0.";
 choices[84][3] = "SVDR.";
 answers[84] = choices[84][1];
 units[84] = "44";
 comments[84] = "Id Pregunta: 9716. Examen TIC-A1 2013";


//  Id pregunta: 9735 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Seg&uacute;n el Real Decreto 1720/2007, &iquest;cu&aacute;l de las siguientes declaraciones es correcta respecto a pruebas en sistemas con datos de car&aacute;cter personal?";
 choices[85]= new Array();
 choices[85][0] = "Queda terminantemente prohibida la realizaci&oacute;n de pruebas en los sistemas de informaci&oacute;n que traten datos reales en ficheros con datos de car&aacute;cter personal.";
 choices[85][1] = "No existen limitaciones para usar datos reales en ficheros de car&aacute;cter personal si se utilizan para las pruebas anteriores a la implantaci&oacute;n o modificaci&oacute;n de los sistemas de informaci&oacute;n.";
 choices[85][2] = "Las pruebas anteriores a la implantaci&oacute;n o modificaci&oacute;n de los sistemas de informaci&oacute;n que traten ficheros con datos de car&aacute;cter personal no se realizar&aacute;n con datos reales, salvo que se asegure el nivel de seguridad correspondiente al tratamiento realizado y se anote su realizaci&oacute;n en el documento de seguridad.";
 choices[85][3] = "Si para la validaci&oacute;n de un sistema de informaci&oacute;n, es necesario realizar pruebas que traten ficheros con datos de car&aacute;cter personal reales, se proceder&aacute; posteriormente al borrado de dichos ficheros para cumplir la normativa legal vigente.";
 answers[85] = choices[85][2];
 units[85] = "29";
 comments[85] = "Id Pregunta: 9735. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9859 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  La informaci&oacute;n contenida en el chip del DNI electr&oacute;nico est&aacute; contenida en tres zonas con diferentes niveles de acceso. Indique qu&eacute; informaci&oacute;n est&aacute; contenida en la Zona de seguridad:";
 choices[86]= new Array();
 choices[86][0] = "Certificado de autenticaci&oacute;n";
 choices[86][1] = "Datos de filiaci&oacute;n del ciudadano.";
 choices[86][2] = "Claves Diffie-Hellman.";
 choices[86][3] = "Certificados X-509 de componente.";
 answers[86] = choices[86][1];
 units[86] = "111";
 comments[86] = "Id Pregunta: 9859. Examen TIC del Servicio de Salud de Extremadura 2014";


//  Id pregunta: 9915 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  Se&ntilde;ale la opci&oacute;n INCORRECTA en relaci&oacute;n con los DFD (Diagrama de Flujos de Datos) y los DE (Diagramas de Estructura), seg&uacute;n M&eacute;trica v3:";
 choices[87]= new Array();
 choices[87][0] = "El objetivo del DFD es la obtenci&oacute;n de un modelo l&oacute;gico de procesos que represente el sistema, con independencia de las restricciones f&iacute;sicas del entorno.";
 choices[87][1] = "En un DFD, los flujos de control representan movimientos de datos con valores s&iacute;ncronos entre procesos de control.";
 choices[87][2] = "Existen dos estrategias para obtener el DE a partir de un DFD, an&aacute;lisis: de transacci&oacute;n y de transformaci&oacute;n. El uso de una de las dos depender&aacute; de los procesos del DFD.";
 choices[87][3] = "El an&aacute;lisis de transacci&oacute;n se aplica cuando en un DFD existe un proceso que en funci&oacute;n del flujo de llegada, determina la elecci&oacute;n de uno o m&aacute;s flujos de informaci&oacute;n.";
 answers[87] = choices[87][1];
 units[87] = "86";
 comments[87] = "Id Pregunta: 9915. TIC A2, Examen 2013";


//  Id pregunta: 9948 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  En M&eacute;trica v3, para la tarea &quot;GPI 1.1, identificaci&oacute;n de elementos a desarrollar&quot;, el producto de salida espec&iacute;fico en orientaci&oacute;n a objeto es:";
 choices[88]= new Array();
 choices[88][0] = "Cat&aacute;logo de clases. ";
 choices[88][1] = "Cat&aacute;logo de entidades";
 choices[88][2] = "Cat&aacute;logo de miembros. ";
 choices[88][3] = "Cat&aacute;logo de interfaces.";
 answers[88] = choices[88][0];
 units[88] = "86";
 comments[88] = "Id Pregunta: 9948. TIC A2, Promoci&oacute;n Interna, 2013";


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


//  Id pregunta: 10153 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  Cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[90]= new Array();
 choices[90][0] = "Los funcionarios habilitados podr&aacute;n recibir notificaciones postales";
 choices[90][1] = "Los funcionarios habilitados podr&aacute;n recibir notificaciones por comparecencia electr&oacute;nica en la sede";
 choices[90][2] = "Los funcionarios habilitados podr&aacute;n recibir notificaciones en la direcci&oacute;n electr&oacute;nica habilitada del ciudadano";
 choices[90][3] = "Los funcionarios habilitados no podr&aacute;n recibir ning&uacute;n tipo de notificaciones que requieran la identificaci&oacute;n y autenticaci&oacute;n del ciudadano";
 answers[90] = choices[90][1];
 units[90] = "43";
 comments[90] = "Id Pregunta: 10153. ";


//  Id pregunta: 10428 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  De acuerdo con el m&eacute;todo del Valor Actual Neto, &iquest;ser&iacute;a recomendable  realizar una inversi&oacute;n en dos a&ntilde;os, con capital inicial aportado de 1 M&euro; y flujos de caja esperados de 0,1M&euro; y 0,9M&euro; en el primer y segundo a&ntilde;o de inversi&oacute;n, con un tipo de descuento del 1%? ";
 choices[91]= new Array();
 choices[91][0] = "No.";
 choices[91][1] = "No se puede deducir del enunciado";
 choices[91][2] = "Si.";
 choices[91][3] = "Debe mantenerse cuatro a&ntilde;os como m&iacute;nimo";
 answers[91] = choices[91][0];
 units[91] = "38";
 comments[91] = "Id Pregunta: 10428. Examen TIC A1 2013";


//  Id pregunta: 10487 AÃ±o de creación de pregunta: 2014-01-01
 questions[92]= "93)  El ciclo de mejora continua: Plan-Do-Check-Act se conoce tambi&eacute;n por el nombre de";
 choices[92]= new Array();
 choices[92][0] = "Ciclo de Calidad";
 choices[92][1] = "The endless loop";
 choices[92][2] = "Ciclo de Deming";
 choices[92][3] = "Ciclo de ITIL";
 answers[92] = choices[92][2];
 units[92] = "98";
 comments[92] = "Id Pregunta: 10487. NULL";


//  Id pregunta: 10539 AÃ±o de creación de pregunta: 2014-01-01
 questions[93]= "94)  Se&ntilde;ale la respuesta incorrecta respecto a MPLS y VPLS:";
 choices[93]= new Array();
 choices[93][0] = "RSVP-TE y LDP son protocolos de establecimiento de camino";
 choices[93][1] = "en MPLS el camino establecido es bidireccional";
 choices[93][2] = "VPLS permite conexiones muchos a muchos mientras que MPLS es punto a punto";
 choices[93][3] = "el campo de etiqueta en MPLS es de 20 bits";
 answers[93] = choices[93][1];
 units[93] = "100";
 comments[93] = "Id Pregunta: 10539. NULL";


//  Id pregunta: 10635 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l de estas publicaciones no pertenece a ITILv3?";
 choices[94]= new Array();
 choices[94][0] = "Mejora continua del servicio";
 choices[94][1] = "Evoluci&oacute;n del Servicio";
 choices[94][2] = "Dise&ntilde;o del Servicio";
 choices[94][3] = "Operaci&oacute;n del Servicio";
 answers[94] = choices[94][1];
 units[94] = "98";
 comments[94] = "Id Pregunta: 10635. ";


//  Id pregunta: 10960 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  El &oacute;rgano responsable del sistema Cl@ve, la plataforma com&uacute;n del Sector P&uacute;blico Administrativo Estatal para la identificaci&oacute;n, autenticaci&oacute;n y firma electr&oacute;nica mediante el uso de claves concertadas, ser&aacute;:";
 choices[95]= new Array();
 choices[95][0] = "La Direcci&oacute;n General de la Polic&iacute;a.";
 choices[95][1] = "La Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones.";
 choices[95][2] = "La F&aacute;brica Nacional de Moneda y Timbre-Real Casa de la Moneda.";
 choices[95][3] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado.";
 answers[95] = choices[95][1];
 units[95] = "44";
 comments[95] = "Id Pregunta: 10960. TIC A1 AGE 2014";


//  Id pregunta: 11001 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;En qu&eacute; circunstancias los prestadores de servicios de la sociedad de la informaci&oacute;n no son responsables por la informaci&oacute;n que proporcionen a los destinatarios de sus servicios?";
 choices[96]= new Array();
 choices[96][0] = "Cuando el proveedor de contenidos al que se enlace o cuya localizaci&oacute;n se facilite actu&eacute; bajo la direcci&oacute;n, autoridad o control del prestador que facilite la localizaci&oacute;n de esos contenidos.";
 choices[96][1] = "Siempre que tengan conocimiento de la ilicitud de la informaci&oacute;n o de que lesiona derechos o bienes de un tercero susceptible de indemnizaci&oacute;n y aleguen la imposibilidad de suprimir o inutilizar el enlace.";
 choices[96][2] = "Cuando el proveedor de contenidos al que se enlace o cuya localizaci&oacute;n se facilite desconozca el contenido il&iacute;cito de dicha informaci&oacute;n.";
 choices[96][3] = "Siempre que no tengan conocimiento efectivo de la ilicitud de la informaci&oacute;n o de que lesiona derechos o bienes de un tercero susceptible de indemnizaci&oacute;n o si lo tienen, act&uacute;en de forma diligente para suprimir o inutilizar el enlace.";
 answers[96] = choices[96][3];
 units[96] = "30";
 comments[96] = "Id Pregunta: 11001. TIC A1 AGE 2014";


//  Id pregunta: 11152 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Cu&aacute;l de los siguientes es un requisito de seguridad aplicable a los prestadores de servicios de confianza TSP?";
 choices[97]= new Array();
 choices[97][0] = "Adoptar&aacute;n las medidas t&eacute;cnicas y organizativas adecuadas para gestionar los riesgos para la seguridad de los servicios de confianza que prestan.";
 choices[97][1] = "En un plazo m&aacute;ximo de 48 horas tras tener conocimiento de ellas, notificar&aacute;n al Ministerio de Industria como organismo supervisor y al organismo nacional competente en materia de seguridad de la informaci&oacute;n, o la autoridad de protecci&oacute;n de datos, cualquier violaci&oacute;n de la seguridad o p&eacute;rdida de la integridad que tenga un impacto significativo en el servicio de confianza prestado o en los datos personales correspondientes.";
 choices[97][2] = "Cuando la violaci&oacute;n de seguridad o la p&eacute;rdida de integridad puedan atentar contra una persona f&iacute;sica o jur&iacute;dica a la que se ha prestado el servicio de confianza, el TSP notificar&aacute; tambi&eacute;n a la persona, en un plazo de 72 horas, la violaci&oacute;n de seguridad o la p&eacute;rdida de integridad.";
 choices[97][3] = "Si una violaci&oacute;n de la seguridad o p&eacute;rdida de la integridad afecta a dos o m&aacute;s Estados miembros, el organismo de supervisi&oacute;n notificado informar&aacute; al respecto &uacute;nicamente a los organismos de supervisi&oacute;n de los dem&aacute;s Estados miembros de que se trate.";
 answers[97] = choices[97][0];
 units[97] = "74";
 comments[97] = "Id Pregunta: 11152. ";


//  Id pregunta: 11240 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Las pr&oacute;rrogas de los contratos.";
 choices[98]= new Array();
 choices[98][0] = "Se puede incluir en todos los contratos";
 choices[98][1] = "Todos los contratos son prorrogables una vez finalizados.";
 choices[98][2] = "Su duraci&oacute;n no puede ser superior al periodo de licitaci&oacute;n.";
 choices[98][3] = "La pr&oacute;rroga se acordar&aacute; por el &oacute;rgano de contrataci&oacute;n y ser&aacute; confirmada posteriormente por el licitador.";
 answers[98] = choices[98][2];
 units[98] = "41";
 comments[98] = "Id Pregunta: 11240. ";


//  Id pregunta: 11477 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Seg&uacute;n la ley 9/2014, un abonado puede cambiar de operador, conservando su n&uacute;mero, y tiene derecho a que el cambio se haga:";
 choices[99]= new Array();
 choices[99][0] = "En un d&iacute;a laborable.";
 choices[99][1] = "Conservando su n&uacute;mero, se puede tardar m&aacute;s de un d&iacute;a laborable sin recibir compensaci&oacute;n.";
 choices[99][2] = "Un operador puede transferir el usuario a otro operador, incluso en contra de la voluntad del abonado.";
 choices[99][3] = "Ninguna es correcta.";
 answers[99] = choices[99][0];
 units[99] = "110";
 comments[99] = "Id Pregunta: 11477. ";


