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

//  Id pregunta: 26 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;C&oacute;mo se llama la licencia bajo la que se distribuye el software del proyecto GNU?:";
 choices[0]= new Array();
 choices[0][0] = "MPL";
 choices[0][1] = "BSD";
 choices[0][2] = "GPL";
 choices[0][3] = "PPL";
 answers[0] = choices[0][2];
 units[0] = "61";
 comments[0] = "Id Pregunta: 26. ";


//  Id pregunta: 705 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  Cu&aacute;l no es una caracter&iacute;stica del software libre:";
 choices[1]= new Array();
 choices[1][0] = "Libertad de distribuir copias";
 choices[1][1] = "Gratuidad";
 choices[1][2] = "Libertad de realizar modificaciones particulares y mantenerlas para uso privado";
 choices[1][3] = "C&oacute;digo abierto";
 answers[1] = choices[1][1];
 units[1] = "61";
 comments[1] = "Id Pregunta: 705. Similar a examen TIC MAP A 2004";


//  Id pregunta: 751 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  El lenguaje Java Script:";
 choices[2]= new Array();
 choices[2][0] = "Permite escribir c&oacute;digo que se compila en el servidor para su ejecuci&oacute;n en el cliente";
 choices[2][1] = "Es interpretado por el navegador cuando se abre un fichero virtual en el que se encuentra c&oacute;digo javascript embebido";
 choices[2][2] = "S&oacute;lo puede ser compilado si el cliente tiene instalada una m&aacute;quina virtual java (JVM)";
 choices[2][3] = "Se ejecuta en la m&aacute;quina cliente una vez que ha sido descargado en forma de applets, ejecutables en cualquier m&aacute;quina";
 answers[2] = choices[2][1];
 units[2] = "61";
 comments[2] = "Id Pregunta: 751. Examen TIC MAP B 2004";


//  Id pregunta: 753 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  Un ejemplo de herramienta Open Source de administraci&oacute;n remota de sistemas Unix/Linux es:";
 choices[3]= new Array();
 choices[3][0] = "WebMin";
 choices[3][1] = "WMI (Web Management &amp; Instrumentation)";
 choices[3][2] = "syslog";
 choices[3][3] = "Performance Monitor";
 answers[3] = choices[3][0];
 units[3] = "53,61,62";
 comments[3] = "Id Pregunta: 753. ";


//  Id pregunta: 779 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  Indique una caracter&iacute;stica del software libre:";
 choices[4]= new Array();
 choices[4][0] = "Los usuarios pueden usar el software como deseen, para lo que deseen y en tantos ordenadores como deseen";
 choices[4][1] = "Los usuarios pueden redistribuir el software a otros usuarios";
 choices[4][2] = "Los usuarios deben tener acceso al c&oacute;digo fuente, escrito generalmente en un lenguaje de alto nivel";
 choices[4][3] = "Todas las respuestas son correctas";
 answers[4] = choices[4][3];
 units[4] = "61";
 comments[4] = "Id Pregunta: 779. ";


//  Id pregunta: 791 AÃ±o de creación de pregunta: 2004-01-01
 questions[5]= "6)  Seg&uacute;n la licencia GNU GPL (General Public License), &iquest;cu&aacute;l de las siguientes sentencias no es correcta?";
 choices[5]= new Array();
 choices[5][0] = "Disponemos de la libertad de estudiar c&oacute;mo funciona el programa y adaptarlo seg&uacute;n nuestras necesidades";
 choices[5][1] = "Nuestro derecho de autor queda salvaguardado";
 choices[5][2] = "Podemos redistribuir todas las copias que queramos";
 choices[5][3] = "No se puede cobrar dinero por el software libre.";
 answers[5] = choices[5][3];
 units[5] = "61";
 comments[5] = "Id Pregunta: 791. ";


//  Id pregunta: 799 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  &iquest;Qu&eacute; tipo de aplicaciones son Vuze, eMule, eDonkey&hellip;?:";
 choices[6]= new Array();
 choices[6][0] = "Chat";
 choices[6][1] = "Correo electr&oacute;nico";
 choices[6][2] = "Peer to Peer";
 choices[6][3] = "B2C";
 answers[6] = choices[6][2];
 units[6] = "62";
 comments[6] = "Id Pregunta: 799. ";


//  Id pregunta: 822 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  Un programa shareware:";
 choices[7]= new Array();
 choices[7][0] = "Es software que podemos utilizar libremente";
 choices[7][1] = "Es software que podemos vender libremente";
 choices[7][2] = "Es software que podemos probar libremente";
 choices[7][3] = "No existe este concepto";
 answers[7] = choices[7][2];
 units[7] = "61";
 comments[7] = "Id Pregunta: 822. ";


//  Id pregunta: 891 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  &iquest;Cu&aacute;les son las tecnolog&iacute;as b&aacute;sicas usadas en la gesti&oacute;n de entornos distribuidos?:";
 choices[8]= new Array();
 choices[8][0] = "Agentes inteligentes";
 choices[8][1] = "Agentes propietarios, est&aacute;ndar y proxys";
 choices[8][2] = "Protocolos SNMP y CMIP";
 choices[8][3] = "Las tres respuestas anteriores son correctas";
 answers[8] = choices[8][2];
 units[8] = "62,98";
 comments[8] = "Id Pregunta: 891. ";


//  Id pregunta: 917 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Qu&eacute; es Apache?:";
 choices[9]= new Array();
 choices[9][0] = "Una versi&oacute;n del sistema operativo Linux";
 choices[9][1] = "Un servidor web propiedad de Microsoft";
 choices[9][2] = "Una autoridad de certificaci&oacute;n ampliamente utilizada en Espa&ntilde;a";
 choices[9][3] = "Un servidor web del tipo &quot;software libre&quot;";
 answers[9] = choices[9][3];
 units[9] = "62";
 comments[9] = "Id Pregunta: 917. ";


//  Id pregunta: 918 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Qu&eacute; es el abandonware?:";
 choices[10]= new Array();
 choices[10][0] = "Consiste en retomar proyectos software interesantes, que fueron abandonados en su momento por falta de rentabilidad";
 choices[10][1] = "Consiste en recopilar SW ya anticuado, cuyo soporte ha sido abandonado por la empresa/persona creadora, y que normalmente podr&aacute; obtenerse gratuitamente al estar descatalogado";
 choices[10][2] = "Consiste en estudiar el SW que circula por la red &quot;sin due&ntilde;o&quot; y que carece de las correspondientes licencias de distribuci&oacute;n";
 choices[10][3] = "Nada de lo anterior es cierto";
 answers[10] = choices[10][1];
 units[10] = "61";
 comments[10] = "Id Pregunta: 918. ";


//  Id pregunta: 1006 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  El concepto de adware implica que:";
 choices[11]= new Array();
 choices[11][0] = "Normalmente no existe coste por ser un a&ntilde;adido sencillo a otro software ya existente";
 choices[11][1] = "Es un software que se vende a empresas de publicidad para que &eacute;stas puedan usarlo en sus campa&ntilde;as de lanzamiento de productos";
 choices[11][2] = "Es un parche que se puede descargar f&aacute;cilmente de la web normalmente para solucionar fallos puntuales de funcionamiento de programas de pago";
 choices[11][3] = "Es un software cuyo &uacute;nico coste de adquisici&oacute;n es 'soportar' la inclusi&oacute;n de banners y pop-ups publicitarios cada vez que se ejecute";
 answers[11] = choices[11][3];
 units[11] = "61";
 comments[11] = "Id Pregunta: 1006. ";


//  Id pregunta: 1112 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  En la terminolog&iacute;a de software libre:";
 choices[12]= new Array();
 choices[12][0] = "El software libre no tiene porque ser gratis";
 choices[12][1] = "Las licencias existentes no ponen ning&uacute;n tipo de limitaciones a su modificaci&oacute;n";
 choices[12][2] = "A la hora de redistribuir el software, s&oacute;lo podemos redistribuir las fuentes";
 choices[12][3] = "El uso de software considerado como libre s&oacute;lo est&aacute; disponible para determinadas plataformas, por incompatibilidades t&eacute;cnicas";
 answers[12] = choices[12][0];
 units[12] = "61";
 comments[12] = "Id Pregunta: 1112. ";


//  Id pregunta: 1190 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Indique cu&aacute;l de las siguientes es una caracter&iacute;stica exclusiva del software libre frente a otros tipos de licencias de software:";
 choices[13]= new Array();
 choices[13][0] = "Fuentes abiertas";
 choices[13][1] = "Gratuidad";
 choices[13][2] = "Libre copia y distribuci&oacute;n del c&oacute;digo fuente";
 choices[13][3] = "Todas las caracteristicas anteriores son exclusivas del software libre";
 answers[13] = choices[13][2];
 units[13] = "61";
 comments[13] = "Id Pregunta: 1190. ";


//  Id pregunta: 1449 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  &iquest;Cu&aacute;l de las siguientes licencias no es compatible con la licencia General Public License (GPL)?:";
 choices[14]= new Array();
 choices[14][0] = "Lesser General Public License (LGPL)";
 choices[14][1] = "Modified BSD License";
 choices[14][2] = "Mozilla Public License (MPL)";
 choices[14][3] = "X11 License";
 answers[14] = choices[14][2];
 units[14] = "61,62";
 comments[14] = "Id Pregunta: 1449. ";


//  Id pregunta: 1514 AÃ±o de creación de pregunta: 2003-01-01
 questions[15]= "16)  &iquest;Se pueden ejecutar programas MS Windows bajo un entorno Linux?";
 choices[15]= new Array();
 choices[15][0] = "Nunca";
 choices[15][1] = "De forma nativa, linux es compatible binario con MS Windows";
 choices[15][2] = "S&iacute;, a trav&eacute;s de programas espec&iacute;fico para ello";
 choices[15][3] = "S&iacute;, a trav&eacute;s del comando SMB";
 answers[15] = choices[15][2];
 units[15] = "53,61";
 comments[15] = "Id Pregunta: 1514. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 1521 AÃ±o de creación de pregunta: 2003-01-01
 questions[16]= "17)  C&oacute;mo se llama la licencia bajo la que se distribuye el software del proyecto GNU";
 choices[16]= new Array();
 choices[16][0] = "MPL";
 choices[16][1] = "BSD";
 choices[16][2] = "GPL";
 choices[16][3] = "PPL";
 answers[16] = choices[16][2];
 units[16] = "61";
 comments[16] = "Id Pregunta: 1521. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 1524 AÃ±o de creación de pregunta: 2003-01-01
 questions[17]= "18)  Cu&aacute;l de las siguientes afirmaciones respecto a LINUX es falsa";
 choices[17]= new Array();
 choices[17][0] = "est&aacute; constituido por un n&uacute;cleo kernel; cada usuario debe construirse las librer&iacute;as y programa para poderlo utilizar";
 choices[17][1] = "es un sistema operativo compatible con UNIX";
 choices[17][2] = "es un software libre";
 choices[17][3] = "el sistema viene acompa&ntilde;ado del c&oacute;digo fuente";
 answers[17] = choices[17][0];
 units[17] = "61,62";
 comments[17] = "Id Pregunta: 1524. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 1532 AÃ±o de creación de pregunta: 2003-01-01
 questions[18]= "19)  &iquest; Cu&aacute;l de las siguientes no es una distribuci&oacute;n de Linux ?";
 choices[18]= new Array();
 choices[18][0] = "Debian";
 choices[18][1] = "Gentoo";
 choices[18][2] = "Max";
 choices[18][3] = "FreeBSD";
 answers[18] = choices[18][3];
 units[18] = "61,62";
 comments[18] = "Id Pregunta: 1532. ";


//  Id pregunta: 1534 AÃ±o de creación de pregunta: 2003-01-01
 questions[19]= "20)  &iquest; Cu&aacute;l de los siguientes no es un SGBD del tipo open source ?";
 choices[19]= new Array();
 choices[19][0] = "MySql";
 choices[19][1] = "PostgreSQL";
 choices[19][2] = "SQLite";
 choices[19][3] = "Zope";
 answers[19] = choices[19][3];
 units[19] = "61,62";
 comments[19] = "Id Pregunta: 1534. ";


//  Id pregunta: 1544 AÃ±o de creación de pregunta: 2003-01-01
 questions[20]= "21)  &iquest;Qu&eacute; es Wine?";
 choices[20]= new Array();
 choices[20][0] = "Un emulador X11 para Windows";
 choices[20][1] = "Un emulador X11 para Linux";
 choices[20][2] = "Una implementaci&oacute;n de c&oacute;digo fuente abierto de la API de Windows que funciona sobre una plataforma X11";
 choices[20][3] = "Nada de lo anterior";
 answers[20] = choices[20][2];
 units[20] = "62";
 comments[20] = "Id Pregunta: 1544. ";


//  Id pregunta: 1545 AÃ±o de creación de pregunta: 2003-01-01
 questions[21]= "22)  &iquest; Qu&eacute; escritorio de software libre utiliza CORBA como mecanismo de IPC ?";
 choices[21]= new Array();
 choices[21][0] = "KDE";
 choices[21][1] = "GNOME";
 choices[21][2] = "ambos ";
 choices[21][3] = "Ninguno de los 2";
 answers[21] = choices[21][1];
 units[21] = "53,61";
 comments[21] = "Id Pregunta: 1545. ";


//  Id pregunta: 1554 AÃ±o de creación de pregunta: 2003-01-01
 questions[22]= "23)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no est&aacute; asociada al concepto de Software Libre?:";
 choices[22]= new Array();
 choices[22][0] = "Redistribuci&oacute;n libre.";
 choices[22][1] = "Acceso al c&oacute;digo fuente del programa.";
 choices[22][2] = "Derecho de modificaci&oacute;n.";
 choices[22][3] = "Distribuci&oacute;n libre del programa pero no de la licencia.";
 answers[22] = choices[22][3];
 units[22] = "61";
 comments[22] = "Id Pregunta: 1554. Junta Andaluc&iacute;a";


//  Id pregunta: 1596 AÃ±o de creación de pregunta: 2003-01-01
 questions[23]= "24)  En que tres bibliotecas esta basado GTK+";
 choices[23]= new Array();
 choices[23][0] = "Bonobo, Nautilus, ATK";
 choices[23][1] = "Gnome-db/libgda";
 choices[23][2] = "Glib, Pango, ATK";
 choices[23][3] = "BCEL, Log4j";
 answers[23] = choices[23][2];
 units[23] = "62";
 comments[23] = "Id Pregunta: 1596. ";


//  Id pregunta: 1605 AÃ±o de creación de pregunta: 2003-01-01
 questions[24]= "25)  Gnutella es un sistema Peer-to-Peer que:";
 choices[24]= new Array();
 choices[24][0] = "Tiene una arquitectura jerarquizada";
 choices[24][1] = "Es tambi&eacute;n un protocolo que consta de cuatro tipos de mensajes";
 choices[24][2] = "Permite el intercambio no centralizado de recetas de cocina.";
 choices[24][3] = "Mantiene una base de datos centralizada que ofrece a sus participantes";
 answers[24] = choices[24][2];
 units[24] = "62";
 comments[24] = "Id Pregunta: 1605. ";


//  Id pregunta: 1626 AÃ±o de creación de pregunta: 2003-01-01
 questions[25]= "26)  Si estamos hablando de GNOME, nos referimos a:";
 choices[25]= new Array();
 choices[25][0] = "Proyecto para generar un nuevo sistema operativo.";
 choices[25][1] = "Un proyecto para crear un entorno de escritorio sobre GNU/ LINUX.";
 choices[25][2] = "Un proyecto ofim&aacute;tico multiplataforma.";
 choices[25][3] = "Un cliente de mensajer&iacute;a instant&aacute;nea.";
 answers[25] = choices[25][1];
 units[25] = "62";
 comments[25] = "Id Pregunta: 1626. Junta Andaluc&iacute;a";


//  Id pregunta: 1627 AÃ±o de creación de pregunta: 2003-01-01
 questions[26]= "27)  Si un programa se distribuye con licencia GPL, la empresa que lo modifica puede:";
 choices[26]= new Array();
 choices[26][0] = "No puede venderlo";
 choices[26][1] = "Integrarlo en otro SW y venderlo como propietario ";
 choices[26][2] = "Venderlo a otra empresa como software libre";
 choices[26][3] = "Venderlo a otra empresa como software propietario";
 answers[26] = choices[26][2];
 units[26] = "61";
 comments[26] = "Id Pregunta: 1627. ";


//  Id pregunta: 1628 AÃ±o de creación de pregunta: 2003-01-01
 questions[27]= "28)  Si utilizamos los t&eacute;rminos IceWM, Fluxbox, fvwm, nos estamos refiriendo a:";
 choices[27]= new Array();
 choices[27][0] = "Sistemas de ayuda de KDE.";
 choices[27][1] = "Interfaz gr&aacute;fica del usuario.";
 choices[27][2] = "Entorno de escritorio.";
 choices[27][3] = "Administradores de ventanas en LINUX.";
 answers[27] = choices[27][3];
 units[27] = "62";
 comments[27] = "Id Pregunta: 1628. Junta Andaluc&iacute;a";


//  Id pregunta: 1629 AÃ±o de creación de pregunta: 2003-01-01
 questions[28]= "29)  Sobre el entorno WINE de Linux se puede decir que:";
 choices[28]= new Array();
 choices[28][0] = "Es un emulador de Windows";
 choices[28][1] = "Es una implementaci&oacute;n de c&oacute;digo fuente abierto de la API de Windows que funciona sobre una plataforma X11";
 choices[28][2] = "Permite ejecutar todas las aplicaciones de Windows 32 sobre Linux";
 choices[28][3] = "Es un sistema de gesti&oacute;n de ventanas para Linux con la apariencia de Windows";
 answers[28] = choices[28][1];
 units[28] = "62";
 comments[28] = "Id Pregunta: 1629. ";


//  Id pregunta: 1633 AÃ±o de creación de pregunta: 2003-01-01
 questions[29]= "30)  &iquest;Cu&aacute;l es un navegador propietario?";
 choices[29]= new Array();
 choices[29][0] = "Lynx";
 choices[29][1] = "Epiphany";
 choices[29][2] = "Firefox";
 choices[29][3] = "Internet Explorer";
 answers[29] = choices[29][3];
 units[29] = "62";
 comments[29] = "Id Pregunta: 1633. ";


//  Id pregunta: 1648 AÃ±o de creación de pregunta: 2004-01-01
 questions[30]= "31)  &iquest;Cu&aacute;l de las siguientes afirmaciones de proyectos java open source es correcta?";
 choices[30]= new Array();
 choices[30][0] = "JBoss es un contenedor de servlets y Tomcat es un servidor de aplicaciones";
 choices[30][1] = "Struts es un framework de programaci&oacute;n orientada a aspectos";
 choices[30][2] = "Lucene es un motor de b&uacute;squeda";
 choices[30][3] = "Ninguna de las anteriores es cierta";
 answers[30] = choices[30][2];
 units[30] = "62";
 comments[30] = "Id Pregunta: 1648. ";


//  Id pregunta: 1682 AÃ±o de creación de pregunta: 2004-01-01
 questions[31]= "32)  Respecto al software gratuito y al software libre podemos decir que";
 choices[31]= new Array();
 choices[31][0] = "El software gratuito siempre es libre";
 choices[31][1] = "El software libre siempre es gratuito";
 choices[31][2] = "El software libre y el software gratuito son dos terminos equivalentes";
 choices[31][3] = "Ninguna de las afirmaciones anteriores es correcta";
 answers[31] = choices[31][3];
 units[31] = "61";
 comments[31] = "Id Pregunta: 1682. ";


//  Id pregunta: 1744 AÃ±o de creación de pregunta: 2006-01-01
 questions[32]= "33)  Indique cu&aacute;l de las siguientes afirmaciones es falsa en relaci&oacute;n al software libre";
 choices[32]= new Array();
 choices[32][0] = "El kernel de linux es estable a pesar de sus continuas modificaciones";
 choices[32][1] = "El software libre es apto para usuarios no t&eacute;cnicos";
 choices[32][2] = "El SL puede funcionar con software propietario (interoperable)";
 choices[32][3] = "El software libre carece en la actualidad de un soporte adecuado";
 answers[32] = choices[32][3];
 units[32] = "61";
 comments[32] = "Id Pregunta: 1744. ";


//  Id pregunta: 1755 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  &iquest;Qu&eacute; es el Proyecto Mono?";
 choices[33]= new Array();
 choices[33][0] = "Iniciativa para portar el entorno .Net a Linux";
 choices[33][1] = "Completa enciclopedia de animales creada por Microsoft";
 choices[33][2] = "Herramienta de Software Libre para la educaci&oacute;n de los ni&ntilde;os en las escuelas";
 choices[33][3] = "Programa de dibujo";
 answers[33] = choices[33][0];
 units[33] = "61,62";
 comments[33] = "Id Pregunta: 1755. ";


//  Id pregunta: 1773 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  &iquest;C&oacute;mo se llama la versi&oacute;n en software libre de la plataforma .Net?";
 choices[34]= new Array();
 choices[34][0] = ".DOT";
 choices[34][1] = ".free";
 choices[34][2] = "Mono";
 choices[34][3] = "Gambas";
 answers[34] = choices[34][2];
 units[34] = "61,62";
 comments[34] = "Id Pregunta: 1773. ";


//  Id pregunta: 1774 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  El Software Libre es bueno para las Administraciones P&uacute;blicas porque&hellip; Se&ntilde;ale la respuesta FALSA";
 choices[35]= new Array();
 choices[35][0] = "Es gratis";
 choices[35][1] = "Permite conocer exactamente el funcionamiento de los programas";
 choices[35][2] = "Facilita la conservaci&oacute;n de la informaci&oacute;n p&uacute;blica, libre de patentes y formatos propietarios";
 choices[35][3] = "Abre la posibilidad de contratar soporte t&eacute;cnico en un mercado en competencia";
 answers[35] = choices[35][0];
 units[35] = "61,62";
 comments[35] = "Id Pregunta: 1774. ";


//  Id pregunta: 1775 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  &iquest;Qu&eacute; es falso respecto a la licencia GPL?";
 choices[36]= new Array();
 choices[36][0] = "Los programas con licencia GPL carecen de derechos de autor";
 choices[36][1] = "Exige que los fuentes est&eacute;n a disposici&oacute;n de quien disponga de los binarios";
 choices[36][2] = "No permite su integraci&oacute;n con software propietario";
 choices[36][3] = "Permite modificaciones y redistribuci&oacute;n de estas";
 answers[36] = choices[36][0];
 units[36] = "61,62";
 comments[36] = "Id Pregunta: 1775. ";


//  Id pregunta: 1776 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  El modelo de proceso de desarrollo de fuente abierta, b&aacute;sicamente descentralizado y caracter&iacute;stico de productos como Linux, Apache, Mozilla, Perl y Lisp/Emacs, se ha dado en llamar:";
 choices[37]= new Array();
 choices[37][0] = "Mercado";
 choices[37][1] = "Bazar";
 choices[37][2] = "Catedral";
 choices[37][3] = "Iglesia";
 answers[37] = choices[37][1];
 units[37] = "61,62";
 comments[37] = "Id Pregunta: 1776. ";


//  Id pregunta: 1778 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  &iquest;Cual de los siguientes ser&iacute;a uno de los productos equivalentes a Excel en el software libre?";
 choices[38]= new Array();
 choices[38][0] = "Konqueror";
 choices[38][1] = "Kspread";
 choices[38][2] = "Apache";
 choices[38][3] = "Evolution";
 answers[38] = choices[38][1];
 units[38] = "61,62";
 comments[38] = "Id Pregunta: 1778. ";


//  Id pregunta: 1781 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  Cual de los siguientes no forma parte del paquete Open Office";
 choices[39]= new Array();
 choices[39][0] = "Impress";
 choices[39][1] = "Calc";
 choices[39][2] = "Math";
 choices[39][3] = "Text";
 answers[39] = choices[39][3];
 units[39] = "61,62";
 comments[39] = "Id Pregunta: 1781. ";


//  Id pregunta: 1782 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  Se&ntilde;ale la definici&oacute;n m&aacute;s correcta para el producto XEN:";
 choices[40]= new Array();
 choices[40][0] = "Entorno de ejecuci&oacute;n .NET sobre Linux, al estilo de Mono";
 choices[40][1] = "Hoja de c&aacute;lculo para KDE";
 choices[40][2] = "Sistema gestor de redes empresariales extendidas";
 choices[40][3] = "Sistema de virtualizaci&oacute;n de sistemas operativos, de fuente abierta";
 answers[40] = choices[40][3];
 units[40] = "61,62";
 comments[40] = "Id Pregunta: 1782. ";


//  Id pregunta: 1784 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  Indique aquel conjunto de programas que no guardan relaci&oacute;n en cuanto a su funcionalidad";
 choices[41]= new Array();
 choices[41][0] = "Gnumeric, kspread";
 choices[41][1] = "Firefox, Epiphany";
 choices[41][2] = "Thunderbird, Konqueror";
 choices[41][3] = "Dia, kivio";
 answers[41] = choices[41][2];
 units[41] = "61,62";
 comments[41] = "Id Pregunta: 1784. ";


//  Id pregunta: 2404 AÃ±o de creación de pregunta: 2002-01-01
 questions[42]= "43)  &iquest;Qu&eacute; es EMACS?:";
 choices[42]= new Array();
 choices[42][0] = "Una plataforma de intercambio de ideas sobre mejoras futuras de ordenadores Apple";
 choices[42][1] = "Un editor ASCII con indentaciones autom&aacute;ticas y coloreado sint&aacute;ctico seg&uacute;n lenguaje";
 choices[42][2] = "Un est&aacute;ndar de facto de plataformas de comercio electr&oacute;nico";
 choices[42][3] = "Nada de lo anterior es correcto";
 answers[42] = choices[42][1];
 units[42] = "62";
 comments[42] = "Id Pregunta: 2404. ";


//  Id pregunta: 4074 AÃ±o de creación de pregunta: 2006-01-01
 questions[43]= "44)  &iquest;Qu&eacute; tipo de software es m&aacute;s costoso cuando lo compramos?";
 choices[43]= new Array();
 choices[43][0] = "El libre";
 choices[43][1] = "El comercial";
 choices[43][2] = "Los dos anteriores son igual de  costosos";
 choices[43][3] = "No hay una respuesta en terminos generales y depende casi siempre del software concreto del que hablemos";
 answers[43] = choices[43][1];
 units[43] = "61";
 comments[43] = "Id Pregunta: 4074. ";


//  Id pregunta: 4092 AÃ±o de creación de pregunta: 2006-01-01
 questions[44]= "45)  Que es LAMP";
 choices[44]= new Array();
 choices[44][0] = "Una arquitectura web basada en software libre";
 choices[44][1] = "Una arquitectura web basada en j2ee";
 choices[44][2] = "Una arquitectura web basada en .Net";
 choices[44][3] = "Ninguna de las anteriores";
 answers[44] = choices[44][0];
 units[44] = "62";
 comments[44] = "Id Pregunta: 4092. ";


//  Id pregunta: 4309 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  Ernesto es un jefe de proyecto que en una nueva aplicaci&oacute;n que est&aacute; realizando en su Ministerio ha decidido emplear la tecnolog&iacute;a CORBA de objetos distribuidos. La raz&oacute;n m&aacute;s probable por la que Ernesto ha decidido utilizar CORBA es";
 choices[45]= new Array();
 choices[45][0] = "CORBA es la tecnolog&iacute;a de objetos distribuidos m&aacute;s sencilla";
 choices[45][1] = "CORBA es multilenguaje, con interfaces Fortran, Java, Lisp, Ada, etc.";
 choices[45][2] = "CORBA es ideal para sistemas cerrados Java";
 choices[45][3] = "CORBA es una tecnolog&iacute;a de Microsoft, y se adapta muy bien para desarrollos en Visual Basic y J++";
 answers[45] = choices[45][1];
 units[45] = "62";
 comments[45] = "Id Pregunta: 4309. ";


//  Id pregunta: 4516 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  Respecto al software libre:";
 choices[46]= new Array();
 choices[46][0] = "Los usuarios de software libre deben tener Ia libertad de estudiar como funciona el programa y adaptarlo a sus necesidades.";
 choices[46][1] = "El &uacute;nico coste permitido por la distribuci&oacute;n de software libre es el coste de distribuci&oacute;n.";
 choices[46][2] = "Esta permitida la distribuci&oacute;n de software libre pero no su posterior modificaci&oacute;n.";
 choices[46][3] = "Solo basta con incluir el c&oacute;digo fuente, no es necesario incluir documento legal alguno.";
 answers[46] = choices[46][0];
 units[46] = "61";
 comments[46] = "Id Pregunta: 4516. NULL";


//  Id pregunta: 4839 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  En relaci&oacute;n con las licencias de software libre, &iquest;cu&aacute;l de las siguientes afirmaciones es cierta?";
 choices[47]= new Array();
 choices[47][0] = "La licencia GPL (General Public License) de software libre obliga a publicar las modificaciones realizadassobre el software";
 choices[47][1] = "En un producto distribuido bajo licencia GPL es obligatorio incluir un fichero que contenga &uacute;nicamente lost&eacute;rminos concretos de la licencia y un aviso de que los derechos de copia son establecidos por el autor delproducto";
 choices[47][2] = "La licencia LGPL (Lesser General Public License) permite la inclusi&oacute;n del software que ampara enprogramas distribuidos bajo licencia no GPL";
 choices[47][3] = "La licencia LGPL no es compatible con la definici&oacute;n del software distribuido bajo el tipo licencia &quot;Copyleft&quot;";
 answers[47] = choices[47][2];
 units[47] = "61";
 comments[47] = "Id Pregunta: 4839. ";


//  Id pregunta: 4952 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  &iquest;Qu&eacute; proporciona el proyecto MONO?:";
 choices[48]= new Array();
 choices[48][0] = "Software libre para desarrollar y ejecutar aplicaciones .NET.";
 choices[48][1] = "Un entorno de desarrollo integrado de software libre para aplicaciones J2EE 5.0.";
 choices[48][2] = "Software libre para una soluci&oacute;n integrada de movilidad para correo electr&oacute;nico y agendas.";
 choices[48][3] = "Un ESB (Entreprise Service Bus) y plataforma de integraci&oacute;n de software libre para la constituci&oacute;n de arquitectura. SOA.";
 answers[48] = choices[48][0];
 units[48] = "62";
 comments[48] = "Id Pregunta: 4952. Examen TIC B 2007";


//  Id pregunta: 5069 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  &iquest;Cu&aacute;l de las siguientes aplicaciones de software libre se utiliza para la edici&oacute;n de im&aacute;genes?:";
 choices[49]= new Array();
 choices[49][0] = "GIMP";
 choices[49][1] = "Jetspeed";
 choices[49][2] = "Konqueror";
 choices[49][3] = "Eclipse";
 answers[49] = choices[49][0];
 units[49] = "62";
 comments[49] = "Id Pregunta: 5069. Examen TIC A 2007";


//  Id pregunta: 5480 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  El modelo de desarrollo conocido como el bazar";
 choices[50]= new Array();
 choices[50][0] = "Fue promulgado por Linus Torvald";
 choices[50][1] = "No se aplica a desarrollos comerciales";
 choices[50][2] = "Se basa en la metodolog&iacute;a Extreme Programming";
 choices[50][3] = "Todas las respuestas anteriores son incorrectas";
 answers[50] = choices[50][3];
 units[50] = "61";
 comments[50] = "Id Pregunta: 5480. Castilla y Le&oacute;n";


//  Id pregunta: 5758 AÃ±o de creación de pregunta: 2009-01-01
 questions[51]= "52)  En cuanto a la licencia LGPL, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[51]= new Array();
 choices[51][0] = "Un software con licencia LGPL puede ser modificado y redistribuido como software propietario siempre que se trate del driver de un dispositivo.";
 choices[51][1] = "Un software con licencia LGPL puede ser modificado y redistribuido como software propietario siempre que se trate de una librer&iacute;a sin interfaz con el usuario.";
 choices[51][2] = "Un software con licencia LGPL puede utilizar librer&iacute;as propietarias, y el conjunto tener la licencia LGPL.";
 choices[51][3] = "Un software propietario puede utilizar librer&iacute;as LGPL sin dejar de ser propietario.";
 answers[51] = choices[51][3];
 units[51] = "61";
 comments[51] = "Id Pregunta: 5758. ";


//  Id pregunta: 5759 AÃ±o de creación de pregunta: 2009-01-01
 questions[52]= "53)  &iquest;Cu&aacute;l de las siguientes no es un sistema operativo de la familia BSD?";
 choices[52]= new Array();
 choices[52][0] = "SecureBSD";
 choices[52][1] = "NetBSD";
 choices[52][2] = "DesktopBSD";
 choices[52][3] = "DragonflyBSD";
 answers[52] = choices[52][0];
 units[52] = "61";
 comments[52] = "Id Pregunta: 5759. ";


//  Id pregunta: 5760 AÃ±o de creación de pregunta: 2009-01-01
 questions[53]= "54)  Acerca de OpenOffice, &iquest;cu&aacute;l de las siguientes afirmaciones es falsa?";
 choices[53]= new Array();
 choices[53][0] = "Gracias a la ingenier&iacute;a inversa, puede manejar archivos .doc de Microsoft Office.";
 choices[53][1] = "Se puede utilizar en la mayor&iacute;a de sistemas de tipo UNIX salvo en Mac OS X.";
 choices[53][2] = "Sun Microsystems financia su desarrollo.";
 choices[53][3] = "Su antecesor fue StarOffice.";
 answers[53] = choices[53][1];
 units[53] = "62";
 comments[53] = "Id Pregunta: 5760. ";


//  Id pregunta: 5761 AÃ±o de creación de pregunta: 2009-01-01
 questions[54]= "55)  &iquest;Qu&eacute; versi&oacute;n de KDE introdujo los plasmoides?";
 choices[54]= new Array();
 choices[54][0] = "4.0";
 choices[54][1] = "5.3";
 choices[54][2] = "5.5";
 choices[54][3] = "6.0";
 answers[54] = choices[54][0];
 units[54] = "62";
 comments[54] = "Id Pregunta: 5761. ";


//  Id pregunta: 5831 AÃ±o de creación de pregunta: 2009-01-01
 questions[55]= "56)  El sub-proyecto de &quot;Apache&quot; que incluye funcionalidades de indexaci&oacute;n y b&uacute;squeda en los &iacute;ndices creados es:";
 choices[55]= new Array();
 choices[55][0] = "Watchdog";
 choices[55][1] = "Turbine";
 choices[55][2] = "Lucene";
 choices[55][3] = "Avalon";
 answers[55] = choices[55][2];
 units[55] = "62";
 comments[55] = "Id Pregunta: 5831. MAP 2008 A1";


//  Id pregunta: 5912 AÃ±o de creación de pregunta: 2009-01-01
 questions[56]= "57)  El proyecto GNU fue concebido por:";
 choices[56]= new Array();
 choices[56][0] = "Tim O'Reilly";
 choices[56][1] = "Richard Stallman";
 choices[56][2] = "Tim Berners-Lee";
 choices[56][3] = "Robert Cailliau";
 answers[56] = choices[56][1];
 units[56] = "61";
 comments[56] = "Id Pregunta: 5912. MAP 2008 A1";


//  Id pregunta: 6057 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes utilidades NO se corresponde con software de c&oacute;digo abierto?";
 choices[57]= new Array();
 choices[57][0] = "Thunderbird.";
 choices[57][1] = "Adobe Reader.";
 choices[57][2] = "OpenOffice.";
 choices[57][3] = "Firefox.";
 answers[57] = choices[57][1];
 units[57] = "62";
 comments[57] = "Id Pregunta: 6057. TIC A 2009";


//  Id pregunta: 6352 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  &iquest;Cu&aacute;l de las siguientes sentencias relativas al software libre es verdadera?";
 choices[58]= new Array();
 choices[58][0] = "El software libre es por definici&oacute;n gratuito";
 choices[58][1] = "Es lo mismo que el software de fuentes abiertas";
 choices[58][2] = "No existe software libre para Windows";
 choices[58][3] = "Ninguna de las anteriores";
 answers[58] = choices[58][3];
 units[58] = "61";
 comments[58] = "Id Pregunta: 6352. ";


//  Id pregunta: 6425 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  &iquest;Cu&aacute;l de las siguientes aplicaciones no se incluye en la suite ofim&aacute;tica OpenOffice.org ?";
 choices[59]= new Array();
 choices[59][0] = "Writer";
 choices[59][1] = "Calc";
 choices[59][2] = "Draw";
 choices[59][3] = "Spread";
 answers[59] = choices[59][3];
 units[59] = "62";
 comments[59] = "Id Pregunta: 6425. NULL";


//  Id pregunta: 6426 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  &iquest;Cu&aacute;l de las siguientes aplicaciones de software libre sirve para la edici&oacute;n profesional de im&aacute;genes?";
 choices[60]= new Array();
 choices[60][0] = "GIMP";
 choices[60][1] = "Celtx";
 choices[60][2] = "Nvu";
 choices[60][3] = "Rhythmbox";
 answers[60] = choices[60][0];
 units[60] = "62";
 comments[60] = "Id Pregunta: 6426. NULL";


//  Id pregunta: 6427 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  De las siguientes aplicaciones, &iquest;Cu&aacute;l no es un servidor de aplicaciones?";
 choices[61]= new Array();
 choices[61][0] = "Apache Geronimo";
 choices[61][1] = "Jboss";
 choices[61][2] = "eXo";
 choices[61][3] = "Resin";
 answers[61] = choices[61][2];
 units[61] = "62";
 comments[61] = "Id Pregunta: 6427. NULL";


//  Id pregunta: 6428 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  Jboss es un servidor de aplicaciones desarrollado por:";
 choices[62]= new Array();
 choices[62][0] = "Red Hat";
 choices[62][1] = "Canonical";
 choices[62][2] = "Apache";
 choices[62][3] = "GNU";
 answers[62] = choices[62][0];
 units[62] = "62";
 comments[62] = "Id Pregunta: 6428. NULL";


//  Id pregunta: 6429 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  &iquest;Cu&aacute;l de los siguientes es un servidor de aplicaciones de software libre?";
 choices[63]= new Array();
 choices[63][0] = "Websphere";
 choices[63][1] = "WebLogic";
 choices[63][2] = "GlassFish";
 choices[63][3] = "Synaptic";
 answers[63] = choices[63][2];
 units[63] = "62";
 comments[63] = "Id Pregunta: 6429. NULL";


//  Id pregunta: 6430 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  &iquest;Cu&aacute;l de las siguientes no es una suite ofim&aacute;tica de software libre?";
 choices[64]= new Array();
 choices[64][0] = "iWork";
 choices[64][1] = "Koffice";
 choices[64][2] = "OpenOffice.org";
 choices[64][3] = "Todas las anteriores son suites ofim&aacute;ticas de software libre";
 answers[64] = choices[64][0];
 units[64] = "62";
 comments[64] = "Id Pregunta: 6430. NULL";


//  Id pregunta: 6431 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  &iquest;Qu&eacute; es Putty?";
 choices[65]= new Array();
 choices[65][0] = "Un cliente SSH";
 choices[65][1] = "Un software de virtualizaci&oacute;n";
 choices[65][2] = "Una suite ofim&aacute;tica";
 choices[65][3] = "Ninguna de las anteriores";
 answers[65] = choices[65][0];
 units[65] = "62";
 comments[65] = "Id Pregunta: 6431. NULL";


//  Id pregunta: 6432 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  &iquest;Cu&aacute;l de las siguientes aplicaciones es un motor de b&uacute;squeda apoyado por el Apache Software Foundation?";
 choices[66]= new Array();
 choices[66][0] = "Apache WatchDog";
 choices[66][1] = "Apache Velocity";
 choices[66][2] = "Apache Tomcat";
 choices[66][3] = "Apache Lucene";
 answers[66] = choices[66][3];
 units[66] = "62";
 comments[66] = "Id Pregunta: 6432. NULL";


//  Id pregunta: 6452 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  &iquest;C&oacute;mo se denomina la herramienta de presentaciones de Open Office 3.0?";
 choices[67]= new Array();
 choices[67][0] = "DRAW";
 choices[67][1] = "IMPRESS";
 choices[67][2] = "POWEPOINT";
 choices[67][3] = "IMAGE";
 answers[67] = choices[67][1];
 units[67] = "62";
 comments[67] = "Id Pregunta: 6452. Castilla La Mancha 2009";


//  Id pregunta: 6498 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)  NO corresponde a una libertad del software libre, seg&uacute;n la FSF:";
 choices[68]= new Array();
 choices[68][0] = "La libertad de usar el programa, con cualquier prop&oacute;sito";
 choices[68][1] = "La libertad de estudiar c&oacute;mo funciona el programa, y adaptarlo a sus necesidades";
 choices[68][2] = "La libertad de distribuir copias, con la autorizaci&oacute;n expl&iacute;cita del autor";
 choices[68][3] = "La libertad de mejorar el programa y hacer p&uacute;blicas las mejoras a los dem&aacute;s, de modo que toda la comunidad se beneficie";
 answers[68] = choices[68][2];
 units[68] = "61";
 comments[68] = "Id Pregunta: 6498. ";


//  Id pregunta: 6499 AÃ±o de creación de pregunta: 2010-01-01
 questions[69]= "70)  GPL es el acr&oacute;nimo de:";
 choices[69]= new Array();
 choices[69][0] = "GNU Public License";
 choices[69][1] = "Geek Public License";
 choices[69][2] = "General Propietary License";
 choices[69][3] = "General Public License";
 answers[69] = choices[69][3];
 units[69] = "61";
 comments[69] = "Id Pregunta: 6499. ";


//  Id pregunta: 6500 AÃ±o de creación de pregunta: 2010-01-01
 questions[70]= "71)  Seg&uacute;n Eric Raymond, los dos modelos caracter&iacute;sticos de desarrollo del Software Libre se conocen como:";
 choices[70]= new Array();
 choices[70][0] = "Catedral y Torre";
 choices[70][1] = "Catedral y Bazar";
 choices[70][2] = "Bazar y Torre";
 choices[70][3] = "Torre y Lineal";
 answers[70] = choices[70][1];
 units[70] = "61";
 comments[70] = "Id Pregunta: 6500. ";


//  Id pregunta: 6501 AÃ±o de creación de pregunta: 2010-01-01
 questions[71]= "72)  &iquest;Qu&eacute; navegador de Internet est&aacute; licenciado bajo la licencia MPL?";
 choices[71]= new Array();
 choices[71][0] = "Google Chrome";
 choices[71][1] = "Mozilla Firefox";
 choices[71][2] = "Mosaic";
 choices[71][3] = "Netscape Navigator";
 answers[71] = choices[71][1];
 units[71] = "61";
 comments[71] = "Id Pregunta: 6501. ";


//  Id pregunta: 6502 AÃ±o de creación de pregunta: 2010-01-01
 questions[72]= "73)  Es una licencia compatible con GPL:";
 choices[72]= new Array();
 choices[72][0] = "NPL";
 choices[72][1] = "MPL";
 choices[72][2] = "BSD Original";
 choices[72][3] = "Ninguna de las anteriores";
 answers[72] = choices[72][3];
 units[72] = "61";
 comments[72] = "Id Pregunta: 6502. ";


//  Id pregunta: 7167 AÃ±o de creación de pregunta: 2010-01-01
 questions[73]= "74)  Se&ntilde;ale cu&aacute;l de las siguientes licencias es la &uacute;nica que puede considerarse licencia de software libre compatible con la GNU GPL:";
 choices[73]= new Array();
 choices[73][0] = "Sun Community Source License";
 choices[73][1] = "Apache License. Version 2.0";
 choices[73][2] = "Microsoft Public License (MS-OL)";
 choices[73][3] = "GNU Lesser General Public License (LGPL)";
 answers[73] = choices[73][3];
 units[73] = "61";
 comments[73] = "Id Pregunta: 7167. Examen TIC B 2009";


//  Id pregunta: 8166 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  AGNUBIS, aplicaci&oacute;n del entorno de escritorio de GNOME, es:";
 choices[74]= new Array();
 choices[74][0] = "Un interfaz gr&aacute;fico para el dibujo de gr&aacute;ficos y manipulaciones estad&iacute;sticas.";
 choices[74][1] = "Un programa de presentaciones similar a MS POWER POINT.";
 choices[74][2] = "Un programa de dibujo vectorial que puede trabajar con archivos 5VG.";
 choices[74][3] = "El gestor de archivos oficial de GNOME.";
 answers[74] = choices[74][1];
 units[74] = "62";
 comments[74] = "Id Pregunta: 8166. Examen TIC A1 2010";


//  Id pregunta: 8514 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  Algunas Comunidades Aut&oacute;nomas han realizado de forma gratuita y totalmente personalizada distribuciones de software libre. Indique la asociaci&oacute;n INCORRECTA: ";
 choices[75]= new Array();
 choices[75][0] = "Lluirex - Valencia";
 choices[75][1] = "MAX - Madrid";
 choices[75][2] = "LinKat - Catalu&ntilde;a";
 choices[75][3] = "mEDUxa - Baleares";
 answers[75] = choices[75][3];
 units[75] = "61";
 comments[75] = "Id Pregunta: 8514. Examen TIC A2 2010";


//  Id pregunta: 8822 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  Al modificar un programa protegido por licencia GPL, el resultado deberemos protegerlo con una licencia:";
 choices[76]= new Array();
 choices[76][0] = "GPL";
 choices[76][1] = "BSD";
 choices[76][2] = "EULA";
 choices[76][3] = "GNU";
 answers[76] = choices[76][0];
 units[76] = "61";
 comments[76] = "Id Pregunta: 8822. Examen UPM A2 2011";


//  Id pregunta: 9574 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  Al hablar de software libre y de su uso en la Administraci&oacute;n se&ntilde;ale la frase correcta:";
 choices[77]= new Array();
 choices[77][0] = "La Ley 11/2007 obliga a las administraciones p&uacute;blicas a poner las aplicaciones de cuyos derechos de propiedad son titulares a disposici&oacute;n de cualquier otra Administraci&oacute;n Auton&oacute;mica.";
 choices[77][1] = "Una licencia de c&oacute;digo de fuente abierta seg&uacute;n la FSF obliga a hacer p&uacute;blicas todas las mejoras, poni&eacute;ndolas a disposici&oacute;n de la comunidad.";
 choices[77][2] = "Una licencia LGPL no restringe la posibilidad de incluir el software protegido por la licencia en productos protegidos por licencias no GPL.";
 choices[77][3] = "El Real Decreto 4/2010 del Esquema Nacional de Interoperabilidad prev&eacute; un cat&aacute;logo &uacute;nicamente de est&aacute;ndares abiertos de uso obligatorio por las administraciones p&uacute;blicas.";
 answers[77] = choices[77][2];
 units[77] = "43, 61, 62";
 comments[77] = "Id Pregunta: 9574. Examen TIC A1 2011";


//  Id pregunta: 9626 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  &iquest;Cu&aacute;l de las siguientes aplicaciones, incluida en KOffice, se emplea para generaci&oacute;n de informes?";
 choices[78]= new Array();
 choices[78][0] = "Kexi.";
 choices[78][1] = "Kivio.";
 choices[78][2] = "Konqueror.";
 choices[78][3] = "Kugar.";
 answers[78] = choices[78][3];
 units[78] = "62";
 comments[78] = "Id Pregunta: 9626. Examen TIC A1 2013";


//  Id pregunta: 9729 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  Se&ntilde;ale cu&aacute;l de los siguientes NO es un framework JAVA";
 choices[79]= new Array();
 choices[79][0] = "Bird.";
 choices[79][1] = "Hibernate.";
 choices[79][2] = "Maverick.";
 choices[79][3] = "Spring.";
 answers[79] = choices[79][0];
 units[79] = "61";
 comments[79] = "Id Pregunta: 9729. Examen TIC-A1 2013";


//  Id pregunta: 9747 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  Indique en qu&eacute; consiste el m&eacute;todo QSOS:";
 choices[80]= new Array();
 choices[80][0] = "Est&aacute; destinado a representar la interacci&oacute;n entre los componentes de un sistema.";
 choices[80][1] = "Permite calificar, seleccionar y comparar software Open Source de una manera objetiva.";
 choices[80][2] = "Permite representar a trav&eacute;s de objetos la informaci&oacute;n que contiene una base de datos.";
 choices[80][3] = "Es un modelo matem&aacute;tico que permite calcular las futuras desviaciones en un proyecto software.";
 answers[80] = choices[80][1];
 units[80] = "61";
 comments[80] = "Id Pregunta: 9747. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9792 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  Respecto a las licencias de software libre y su compatibilidad con la GPL, se&ntilde;ale la sentencia correcta:";
 choices[81]= new Array();
 choices[81][0] = "Todas las versiones de la Apache license son incompatibles con las versiones de GPL (v1, v2 y v3). ";
 choices[81][1] = "Las versiones de Apache License anteriores a la v2.0 son incompatibles con GPLv3. ";
 choices[81][2] = "La GPLv2 no es compatible con la Apache License v2 porque tiene algunos requisitos que no est&aacute;n en esa versi&oacute;n de la Apache License, por ejemplo ciertas disposiciones sobre las indemnizaciones y la terminaci&oacute;n por patentes. ";
 choices[81][3] = "Si uso una librer&iacute;a bajo la GPLv3 en un proyecto GPLv2, se puede publicar ese proyecto bajo GPLv2 &uacute;nicamente, ya que solo interact&uacute;a con esa librer&iacute;a mediante mecanismos t&iacute;picos, no copia su c&oacute;digo en el proyecto. ";
 answers[81] = choices[81][1];
 units[81] = "61";
 comments[81] = "Id Pregunta: 9792. Examen TIC A2 2013";


//  Id pregunta: 10018 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares regula el formato de documentos abiertos para aplicaciones de ofim&aacute;tica (OpenDocument)?";
 choices[82]= new Array();
 choices[82][0] = "ISO/IEC 26300:2006 ";
 choices[82][1] = "RFC 2373";
 choices[82][2] = "ISO/IEC 9899:1999";
 choices[82][3] = "ISO 9000";
 answers[82] = choices[82][0];
 units[82] = "62";
 comments[82] = "Id Pregunta: 10018. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10244 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  Juan desarrolla un software y publica el c&oacute;digo fuente bajo la licencia GPL. Antonio regala a un amigo un CD con el ejecutable de Juan. &iquest;Cu&aacute;l de las siguientes opciones no satisface las obligaciones de Antonio de hacer disponible el c&oacute;digo fuente?";
 choices[83]= new Array();
 choices[83][0] = "Puede alojar el c&oacute;digo fuente en su web site e indicar la URL en el CD";
 choices[83][1] = "Puede proveer el c&oacute;digo fuente en el mismo CD que el ejecutable";
 choices[83][2] = "Puede hacer una oferta por escrito para proveer el c&oacute;digo fuente contra el pago de los costes de distribuci&oacute;n";
 choices[83][3] = "Puede hacer una oferta por escrito para proveer el c&oacute;digo fuente gratis en un CD";
 answers[83] = choices[83][0];
 units[83] = "61";
 comments[83] = "Id Pregunta: 10244. ";


//  Id pregunta: 10245 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  Juan desarrolla un software y publica el c&oacute;digo fuente bajo la licencia GPL. Antonio realiza modificaciones al mismo y distribuye los archivos binarios desde su web site. &iquest;Cu&aacute;l de las siguientes opciones cumple con las obligaciones de Antonio sobre distribuir el c&oacute;digo fuente del software modificado?I) Puede distribuir el c&oacute;digo fuente original de Juan, mateniendo las notificaciones de copyrightII) Puede distribuir el c&oacute;digo fuente junto a los binariosIII) Puede distribuir los parches aplicados al c&oacute;digo fuente originalIV) Puede distribuir los parches aplicados al c&oacute;digo fuente original, junto con &eacute;ste";
 choices[84]= new Array();
 choices[84][0] = "I o II, y nada m&aacute;s";
 choices[84][1] = "S&oacute;lo II";
 choices[84][2] = "II o IV, pero nada m&aacute;s";
 choices[84][3] = "Cualquiera de las 4";
 answers[84] = choices[84][2];
 units[84] = "61";
 comments[84] = "Id Pregunta: 10245. ";


//  Id pregunta: 10246 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Juan desarrolla un software y publica el c&oacute;digo fuente bajo la licencia GPL. Antonio quiere distribuir el software, junto a m&oacute;dulos de terceros que tienen la siguiente licencia:Este c&oacute;digo puede ser libremente modificado, copiado y distribuido, mientras que no se aplique un pago por ello.&iquest;Representa esto una violaci&oacute;n de la licencia GPL?";
 choices[85]= new Array();
 choices[85][0] = "S&iacute;, porque la licencia GPL requiere que modificaciones de sofware bajo licencia GPL sean publicadas bajo licencia GPL";
 choices[85][1] = "S&iacute;, porque la licencia GPL no permite restricciones adicionales sobre una parte cualquiera del c&oacute;digo";
 choices[85][2] = "No, porque el nuevo c&oacute;digo est&aacute; enlazado con el c&oacute;digo de Juan, no copiado dentro de &eacute;l";
 choices[85][3] = "No, porque el resultado tambi&eacute;n puede ser distribuido de forma gratuita";
 answers[85] = choices[85][1];
 units[85] = "61";
 comments[85] = "Id Pregunta: 10246. ";


//  Id pregunta: 10247 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Pedro crea una librer&iacute;a (LibPeter) y la publica bajo licencia LGPL. FooCorp distribuye una versi&oacute;n modificada de la misma junto con su software propietario. &iquest;Cu&aacute;l de las siguientes no es una obligaci&oacute;n de FooCorp?";
 choices[86]= new Array();
 choices[86][0] = "FooCorp debe proveer un mecanismo para que su software propietario pueda enlazar con nuevas versiones de LibPeter";
 choices[86][1] = "FooCorp debe proveer el c&oacute;digo fuente completo de la versi&oacute;n modificada de LibPeter";
 choices[86][2] = "FooCorp debe comunicar todas sus modificaciones a LibPeter";
 choices[86][3] = "FooCorp debe publicar el c&oacute;digo fuente de su software propietario";
 answers[86] = choices[86][3];
 units[86] = "61";
 comments[86] = "Id Pregunta: 10247. ";


//  Id pregunta: 10250 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  Juan desarrolla un software y publica el c&oacute;digo fuente bajo la licencia GPL. Recibe muchas modificaciones y Juan decide incorporarlas a una nueva versi&oacute;n de su software. Finalmente, Juan decide hacer una versi&oacute;n propietaria de su software, y declara:I) Como el c&oacute;digo fuente original eral GPL, todos los que han hecho mejoras autom&aacute;ticamente asignan el copyright de esas mejoras a Juan, por lo que no necesita solicitar autorizaci&oacute;n para licenciar el c&oacute;digo de otra formaII) Como Juan tiene el copyright, puede licenciar el c&oacute;digo de forma retroactiva, por lo que nadie puede distribuir versiones anteriores bajo GPL";
 choices[87]= new Array();
 choices[87][0] = "I) y II) son verdaderas";
 choices[87][1] = "I) es verdadera, II) es falsa";
 choices[87][2] = "I es falsa, II) es verdadera";
 choices[87][3] = "I) y II) son falsas";
 answers[87] = choices[87][3];
 units[87] = "61";
 comments[87] = "Id Pregunta: 10250. ";


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


//  Id pregunta: 10252 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  FooCorp modifica un software distribu&iacute;do bajo GPL, e incluye una tecnolog&iacute;a patentada por FooCorp. &iquest;Hay alg&uacute;n requisito en la licencia GPL sobre c&oacute;mo licenciar la patente aplicable?";
 choices[89]= new Array();
 choices[89][0] = "No";
 choices[89][1] = "S&iacute;, deben permitir a cualquiera que use la tecnolog&iacute;a patentada para cualquier prop&oacute;sito";
 choices[89][2] = "S&iacute;, deben permitir a cualquiera que utilice el c&oacute;digo GPL modificado para utilizar la tecnolog&iacute;a patentada.";
 choices[89][3] = "Si, deben hacer el c&oacute;digo accesible por todos";
 answers[89] = choices[89][2];
 units[89] = "61";
 comments[89] = "Id Pregunta: 10252. ";


//  Id pregunta: 10805 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  En relaci&oacute;n a OpenDocument (ODF), se&ntilde;ale la respuesta FALSA:";
 choices[90]= new Array();
 choices[90][0] = "Es un formato de archivo abierto y est&aacute;ndar para el almacenamiento de documentos tales como hojas de c&aacute;lculo, textos, gr&aacute;ficas y presentaciones.";
 choices[90][1] = "El tipo MIME para documentos texto de OpenDocument es: application/vnd.openxmlformats-officedocument.wordprocessingml.document.";
 choices[90][2] = "Est&aacute; basado en XML.";
 choices[90][3] = "Las extensiones de los archivos incluyen: odt para documentos de texto, ods para hojas de c&aacute;lculo, odp para presentaciones y odb para bases de datos.";
 answers[90] = choices[90][1];
 units[90] = "62";
 comments[90] = "Id Pregunta: 10805. Examen GSI 2014";


//  Id pregunta: 10811 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Se&ntilde;ale cu&aacute;l de las siguientes respuestas NO se considera una de las libertades esenciales que cumple el software libre:";
 choices[91]= new Array();
 choices[91][0] = "Libertad para ejecutar y usar el software con la &uacute;nica restricci&oacute;n que se debe especificar y aprobar su prop&oacute;sito.";
 choices[91][1] = "Libertad para estudiar el programa y modificarlo, adapt&aacute;ndolo a sus necesidades.";
 choices[91][2] = "Libertad de distribuir copias.";
 choices[91][3] = "Libertad de modificar el programa y liberar las modificaciones al p&uacute;blico.";
 answers[91] = choices[91][0];
 units[91] = "61";
 comments[91] = "Id Pregunta: 10811. Examen GSI 2014";


//  Id pregunta: 10812 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l de las siguientes licencias NO se considera copyleft robusto?";
 choices[92]= new Array();
 choices[92][0] = "EUPL";
 choices[92][1] = "GPL";
 choices[92][2] = "LGPL";
 choices[92][3] = "BSD";
 answers[92] = choices[92][3];
 units[92] = "61";
 comments[92] = "Id Pregunta: 10812. Examen GSI 2014";


//  Id pregunta: 10813 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  Se&ntilde;ale cu&aacute;les de los siguientes formatos de archivo en la actualidad NO se consideran de formato abierto de texto para documentos:";
 choices[93]= new Array();
 choices[93][0] = "PDF";
 choices[93][1] = "EPUB";
 choices[93][2] = "RTF";
 choices[93][3] = "FLAC";
 answers[93] = choices[93][3];
 units[93] = "61, 62";
 comments[93] = "Id Pregunta: 10813. Examen GSI 2014";


//  Id pregunta: 11140 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l es de las siguientes aplicaciones ofim&aacute;ticas permite crear gr&aacute;ficos y diagramas?";
 choices[94]= new Array();
 choices[94][0] = "Draw";
 choices[94][1] = "Impress";
 choices[94][2] = "Base";
 choices[94][3] = "Picture";
 answers[94] = choices[94][0];
 units[94] = "62";
 comments[94] = "Id Pregunta: 11140. ";


//  Id pregunta: 11333 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Distintos gobiernos regionales est&aacute;n desarrollando sus propias distribuciones Linux. Seleccione cu&aacute;l no es una de ellas:";
 choices[95]= new Array();
 choices[95][0] = "LinEx en Extremadura,";
 choices[95][1] = "Augustux en Arag&oacute;n";
 choices[95][2] = "AndaLinex en Andaluc&iacute;a";
 choices[95][3] = "LinuxGlobal en Cantabria";
 answers[95] = choices[95][2];
 units[95] = "61";
 comments[95] = "Id Pregunta: 11333. Es Guadalinex";


//  Id pregunta: 11535 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  La licencia de la GNU utilizada espec&iacute;ficamente para la documentaci&oacute;n t&eacute;cnica del software es:";
 choices[96]= new Array();
 choices[96][0] = "GFDL";
 choices[96][1] = "GPL";
 choices[96][2] = "Affero GPL";
 choices[96][3] = "EUPL";
 answers[96] = choices[96][0];
 units[96] = "62";
 comments[96] = "Id Pregunta: 11535. NULL";


//  Id pregunta: 11536 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  La licencia de la GNU utilizada espec&iacute;ficamente para licenciar Software en la redes de computadores es:";
 choices[97]= new Array();
 choices[97][0] = "GFDL";
 choices[97][1] = "GPL";
 choices[97][2] = "Affero GPL";
 choices[97][3] = "EUPL";
 answers[97] = choices[97][2];
 units[97] = "62";
 comments[97] = "Id Pregunta: 11536. NULL";


//  Id pregunta: 11537 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Al redistribuir una obra derivada de un programa con licencia GPL, &iquest;cu&aacute;l de los siguientes elementos no es necesario incluir?:";
 choices[98]= new Array();
 choices[98][0] = "La licencia.";
 choices[98][1] = "La lista de modificaciones.";
 choices[98][2] = "El autor de las modificaciones.";
 choices[98][3] = "Es obligatorio incluir todos los anteriores.";
 answers[98] = choices[98][3];
 units[98] = "62";
 comments[98] = "Id Pregunta: 11537. NULL";


//  Id pregunta: 11616 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  La libertad de distribuci&oacute;n, seg&uacute;n la definici&oacute;n de SW libre de Richard Stallman se identifica como la libertad n&uacute;mero:";
 choices[99]= new Array();
 choices[99][0] = "0";
 choices[99][1] = "1";
 choices[99][2] = "2";
 choices[99][3] = "3";
 answers[99] = choices[99][2];
 units[99] = "61";
 comments[99] = "Id Pregunta: 11616. ";


