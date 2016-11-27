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

//  Id pregunta: 700 AÃ±o de creación de pregunta: 2009-01-01
 questions[0]= "1)  Respecto a la LSSI puede decirse que:";
 choices[0]= new Array();
 choices[0][0] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico";
 choices[0][1] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico u otro medio de comunicaci&oacute;n electr&oacute;nica equivalente";
 choices[0][2] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico u otro medio de comunicaci&oacute;n electr&oacute;nica equivalente que previamente no hubieran sido solicitadas o expresamente autorizadas por los remitentes de las misma";
 choices[0][3] = "Queda prohibido el env&iacute;o de comunicaciones publicitarias o promocionales por correo electr&oacute;nico u otro medio de comunicaci&oacute;n electr&oacute;nica equivalente que previamente no hubieran sido solicitadas o expresamente autorizadas por los destinatarios de las misma";
 answers[0] = choices[0][3];
 units[0] = "30";
 comments[0] = "Id Pregunta: 700. Ley 34/2002, art&iacute;culo 21";


//  Id pregunta: 701 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  Seg&uacute;n la Ley 59/2003 de Firma electr&oacute;nica, la firma equivalente a la manuscrita es:";
 choices[1]= new Array();
 choices[1][0] = "Firma electr&oacute;nica avanzada";
 choices[1][1] = "Firma electr&oacute;nica reconocida";
 choices[1][2] = "Firma electr&oacute;nica avanzada s&oacute;lo si ha sido generada mediante un dispositivo seguro de creaci&oacute;n de firma.";
 choices[1][3] = "Ninguna de las anteriores";
 answers[1] = choices[1][1];
 units[1] = "30";
 comments[1] = "Id Pregunta: 701. Similar a examen TIC MAP A 2004. (Ley 59/2003, art&Iacute;culo 3)";


//  Id pregunta: 702 AÃ±o de creación de pregunta: 2004-01-01
 questions[2]= "3)  Cu&aacute;l de las siguientes l&iacute;neas ser&iacute;a v&aacute;lida en XHTML:";
 choices[2]= new Array();
 choices[2][0] = "&lt;br/&gt;&lt;hr&gt;&lt;/hr&gt;";
 choices[2][1] = "&lt;br/&gt;&lt;hr/&gt;";
 choices[2][2] = "&lt;hr&gt;&lt;/hr&gt;";
 choices[2][3] = "Todas son v&aacute;lidas";
 answers[2] = choices[2][3];
 units[2] = "69";
 comments[2] = "Id Pregunta: 702. Similar a examen TIC MAP A 2004. La C no ser&iacute;a v&aacute;lida en HTML 4.0";


//  Id pregunta: 771 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  &iquest;Qu&eacute; significado tienen las siguientes siglas COLD?";
 choices[3]= new Array();
 choices[3][0] = "Computer Output to laser Disk";
 choices[3][1] = "Computer on line disk";
 choices[3][2] = "Computer Optical Laser Disk";
 choices[3][3] = "ninguna de las anteriores";
 answers[3] = choices[3][0];
 units[3] = "48";
 comments[3] = "Id Pregunta: 771. ";


//  Id pregunta: 808 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  A la vista de la tabla siguiente: VENTAS (COD_PIEZA, COD_ALMACEN, CANTIDAD, FECHA, DIRECCION_ALMACEN), donde la clave principal es  COD_PIEZA y COD_ALMACEN, podemos decir que:";
 choices[4]= new Array();
 choices[4][0] = "Cumple con la segunda forma normal";
 choices[4][1] = "Cumple con la segunda pero no con la tercera forma normal";
 choices[4][2] = "Cumple hasta la tercera forma normal pero no con la cuarta formal";
 choices[4][3] = "No cumple la segunda forma normal";
 answers[4] = choices[4][3];
 units[4] = "58";
 comments[4] = "Id Pregunta: 808. ";


//  Id pregunta: 815 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  Arquitectura &ldquo;fault tolerant&rdquo; significa:";
 choices[5]= new Array();
 choices[5][0] = "Que el sistema tiene elementos redundantes activos";
 choices[5][1] = "Que el sistema es capaz de funcionar correctamente a&uacute;n en el caso de fallo de algunos elementos";
 choices[5][2] = "Que el sistema tiene elementos redundantes pasivos";
 choices[5][3] = "Todas las anteriores son ciertas";
 answers[5] = choices[5][1];
 units[5] = "48";
 comments[5] = "Id Pregunta: 815. ";


//  Id pregunta: 822 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Un programa shareware:";
 choices[6]= new Array();
 choices[6][0] = "Es software que podemos utilizar libremente";
 choices[6][1] = "Es software que podemos vender libremente";
 choices[6][2] = "Es software que podemos probar libremente";
 choices[6][3] = "No existe este concepto";
 answers[6] = choices[6][2];
 units[6] = "61";
 comments[6] = "Id Pregunta: 822. ";


//  Id pregunta: 861 AÃ±o de creación de pregunta: 2003-01-01
 questions[7]= "8)  &iquest;Cu&aacute;l de los siguientes ejemplos de tipos de aprendizaje en miner&iacute;a de datos es no supervisado?";
 choices[7]= new Array();
 choices[7][0] = "Modelado y control.";
 choices[7][1] = "Sistemas de predicci&oacute;n.";
 choices[7][2] = "Descubrimiento de patrones.";
 choices[7][3] = "&Aacute;rboles de predicci&oacute;n.";
 answers[7] = choices[7][2];
 units[7] = "68";
 comments[7] = "Id Pregunta: 861. ";


//  Id pregunta: 965 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Cronol&oacute;gicamente, la aparici&oacute;n de CGI, applets y servlets ocurri&oacute; en el siguiente orden:";
 choices[8]= new Array();
 choices[8][0] = "CGI-&gt;servlets-&gt;applets";
 choices[8][1] = "Applets-&gt;servlets-&gt;CGI";
 choices[8][2] = "CGI-&gt;applets-&gt;servlets";
 choices[8][3] = "Servlets-&gt;CGI-&gt;applets";
 answers[8] = choices[8][2];
 units[8] = "60.116";
 comments[8] = "Id Pregunta: 965. NULL";


//  Id pregunta: 991 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  Dentro del proyecto CERES, es posible disponer de tarjetas criptogr&aacute;ficas para entregar a los ciudadanos &iquest;Qu&eacute; funcionalidades proporcionan dichas tarjetas desde el punto de vista de la seguridad?:";
 choices[9]= new Array();
 choices[9][0] = "Autenticaci&oacute;n e integridad, &uacute;nicamente";
 choices[9][1] = "Autenticaci&oacute;n, integridad y confidencialidad, &uacute;nicamente";
 choices[9][2] = "Autenticaci&oacute;n, integridad y confidencialidad y no repudio en origen";
 choices[9][3] = "Autenticaci&oacute;n, integridad y confidencialidad y no repudio en destino";
 answers[9] = choices[9][2];
 units[9] = "74";
 comments[9] = "Id Pregunta: 991. NULL";


//  Id pregunta: 1025 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  Entre las siguientes caract&eacute;risticas del HTML (Hyper Text Markup Language) hay una incorrecta. Se&ntilde;&aacute;lela:";
 choices[10]= new Array();
 choices[10][0] = "No se necesita ning&uacute;n compilador especial para realizar p&aacute;gina Web";
 choices[10][1] = "Los tipos de letra (fuentes o fonts) vienen declarados dentro del texto en 'claro'";
 choices[10][2] = "La &uacute;ltima especificaci&oacute;n de este lenguaje es la HTML 2.0";
 choices[10][3] = "Las p&aacute;gina Web, pueden interactuar con los usuarios a trav&eacute;s de los CGI (Common Gateway Interfaces) o de los applets de Java";
 answers[10] = choices[10][2];
 units[10] = "69";
 comments[10] = "Id Pregunta: 1025. NULL";


//  Id pregunta: 1055 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  El sistema operativo Linux puede ejecutarse en muchas plataformas diferentes. Esto se debe a:";
 choices[11]= new Array();
 choices[11][0] = "El uso de una m&aacute;quina virtual que encapsula el sistema operativo, abstrayendolo de las peculiaridades del hardware subyacente";
 choices[11][1] = "El uso de una aquitectura microkernel que permite una portabilidad sin precedentes";
 choices[11][2] = "Simplemente el sistema se vuelve a compilar cada vez que se cambia de plataforma";
 choices[11][3] = "La difusi&oacute;n del juego de instrucciones x86, para el que existe soporte en gran cantidad de sistemas";
 answers[11] = choices[11][2];
 units[11] = "53";
 comments[11] = "Id Pregunta: 1055. ";


//  Id pregunta: 1070 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Elija la respuesta falsa. Un tablet PC se caracteriza por:";
 choices[12]= new Array();
 choices[12][0] = "Reconocer la escritura humana";
 choices[12][1] = "Ser portatil";
 choices[12][2] = "Caber en la palma de la mano";
 choices[12][3] = "Utilizar un sistema operativo de Microsoft";
 answers[12] = choices[12][2];
 units[12] = "47";
 comments[12] = "Id Pregunta: 1070. ";


//  Id pregunta: 1131 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  En relaci&oacute;n con las caracter&iacute;sticas de una tabla de estructura relacional, indique cu&aacute;l de las siguientes afirmaciones es cierta:";
 choices[13]= new Array();
 choices[13][0] = "Cada columna debe estar identificada por un nombre espec&iacute;fico";
 choices[13][1] = "Un mismo dominio podr&aacute; servir para definir los valores de varias columnas diferentes";
 choices[13][2] = "Cada columna debe extraer sus valores de un dominio";
 choices[13][3] = "Todas las respuestas anteriores son ciertas";
 answers[13] = choices[13][3];
 units[13] = "58";
 comments[13] = "Id Pregunta: 1131. ";


//  Id pregunta: 1138 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  En un marco, al pedir el valor de un slot:";
 choices[14]= new Array();
 choices[14][0] = "Primero se dar&aacute; el valor por defecto, si este no existiera, el valor en curso, y si este no existiera, se ejecutar&aacute; el procedimiento if-required";
 choices[14][1] = "Primero se dar&aacute; el valor en curso, si este no existiera, el valor por defecto, y si este no existiera, se ejecutar&aacute; el procedimiento if-required";
 choices[14][2] = "Primero se ejecutar&aacute; if-required, y si no finaliza con &eacute;xito, se dar&aacute; el valor por defecto, y si este no existiera, el valor en curso, Sini, se termina con error.";
 choices[14][3] = "Primero se dar&aacute; el valor en curso, si este no existiera, el valor por defecto, y si este no existiera, se ejecutar&aacute; el procedimiento if-needed";
 answers[14] = choices[14][3];
 units[14] = "64";
 comments[14] = "Id Pregunta: 1138. ";


//  Id pregunta: 1171 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  HTTL significa:";
 choices[15]= new Array();
 choices[15][0] = "L&oacute;gica Transistor-Transistor de alta velocidad.";
 choices[15][1] = "Lenguaje de transferencia HiperTexto.";
 choices[15][2] = "Lenguaje de Tokens HiperTexto.";
 choices[15][3] = "Ninguna de las anteriores es v&aacute;lida.";
 answers[15] = choices[15][0];
 units[15] = "46";
 comments[15] = "Id Pregunta: 1171. ";


//  Id pregunta: 1181 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  Indicar cu&aacute;l de los siguientes no es un modelo de miner&iacute;a de datos:";
 choices[16]= new Array();
 choices[16][0] = "De verificaci&oacute;n.";
 choices[16][1] = "De descubrimiento.";
 choices[16][2] = "De predicci&oacute;n.";
 choices[16][3] = "De validaci&oacute;n.";
 answers[16] = choices[16][3];
 units[16] = "68";
 comments[16] = "Id Pregunta: 1181. ";


//  Id pregunta: 1189 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Indique cu&aacute;l de las siguientes afirmaciones sobre directorios no es correcta:";
 choices[17]= new Array();
 choices[17][0] = "La arquitectura X.500 se basa en la r&eacute;plica de bases de datos distribuidas";
 choices[17][1] = "El DAP es el protocolo de acceso al directorio X.500";
 choices[17][2] = "X.500 fue dise&ntilde;ado como una versi&oacute;n simplificada de LDAP";
 choices[17][3] = "Los programas acceden al directorio usando las APIs del X/Open Directory Service";
 answers[17] = choices[17][2];
 units[17] = "73";
 comments[17] = "Id Pregunta: 1189. ";


//  Id pregunta: 1272 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Los criptosistemas irreversibles:";
 choices[18]= new Array();
 choices[18][0] = "No existen actualmente dada la potencia de los sistemas actuales y la potencia de la computaci&oacute;n distribuida";
 choices[18][1] = "Se utilizan sobre todo para la autenticaci&oacute;n de entidades";
 choices[18][2] = "Se basan en funciones matem&aacute;ticas no invertibles computacionalmente, o carentes de inversa";
 choices[18][3] = "B y C son ciertas";
 answers[18] = choices[18][3];
 units[18] = "72";
 comments[18] = "Id Pregunta: 1272. ";


//  Id pregunta: 1378 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  Un &quot;service pack&quot; en el entorno del sistema operativo Windows 2000:";
 choices[19]= new Array();
 choices[19][0] = "Es una aplicaci&oacute;n auxiliar que amplia las funcionalidades del sistema operativo";
 choices[19][1] = "Es un componente del servicio de paquetes";
 choices[19][2] = "Es un paquete integrado que incluye el sistema operativo y programas de aplicaci&oacute;n";
 choices[19][3] = "Es un conjunto de correcciones o partes del sistema operativo que corrige fallos o vulnerabilidades de seguridad y tambi&eacute;n puede ampliar las funcionalidades de dicho sistema";
 answers[19] = choices[19][3];
 units[19] = "56";
 comments[19] = "Id Pregunta: 1378. ";


//  Id pregunta: 1436 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  &iquest;Qu&eacute; empresa desarroll&oacute; el primer rat&oacute;n como perif&eacute;rico de los ordenadores?:";
 choices[20]= new Array();
 choices[20][0] = "LaCie";
 choices[20][1] = "Toshiba";
 choices[20][2] = "Apple";
 choices[20][3] = "Rank Xerox";
 answers[20] = choices[20][3];
 units[20] = "47";
 comments[20] = "Id Pregunta: 1436. ";


//  Id pregunta: 1476 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  SCSI responde a las siglas de:";
 choices[21]= new Array();
 choices[21][0] = "Smart Computer System Interface, Interfaz elegante para sistemas de computadora";
 choices[21][1] = "Small Computer System Interface, Interfaz para peque&ntilde;os sistemas de computadora";
 choices[21][2] = "Synchonized Computer Serial Interface, Interfaz serie para ordenadores sincronizados";
 choices[21][3] = "Superb Computation Scale- Integration, escala de integraci&oacute;n para computaci&oacute;n s&uacute;per";
 answers[21] = choices[21][1];
 units[21] = "48";
 comments[21] = "Id Pregunta: 1476. ";


//  Id pregunta: 1496 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Indicar cu&aacute;l de las siguientes afirmaciones no es cierta acerca del lenguaje HTML:";
 choices[22]= new Array();
 choices[22][0] = "Es un lenguaje de programaci&oacute;n";
 choices[22][1] = "Permite referencias a otros documentos o recursos de la red";
 choices[22][2] = "Permite la inclusi&oacute;n de marcas (tags) para controlar los aspectos de la presentaci&oacute;n";
 choices[22][3] = "Para escribir en HTML se necesita al menos un editor ASCII";
 answers[22] = choices[22][0];
 units[22] = "69";
 comments[22] = "Id Pregunta: 1496. NULL";


//  Id pregunta: 1514 AÃ±o de creación de pregunta: 2003-01-01
 questions[23]= "24)  &iquest;Se pueden ejecutar programas MS Windows bajo un entorno Linux?";
 choices[23]= new Array();
 choices[23][0] = "Nunca";
 choices[23][1] = "De forma nativa, linux es compatible binario con MS Windows";
 choices[23][2] = "S&iacute;, a trav&eacute;s de programas espec&iacute;fico para ello";
 choices[23][3] = "S&iacute;, a trav&eacute;s del comando SMB";
 answers[23] = choices[23][2];
 units[23] = "53,61";
 comments[23] = "Id Pregunta: 1514. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 1535 AÃ±o de creación de pregunta: 2003-01-01
 questions[24]= "25)  &iquest; Cu&aacute;l de los siguientes t&eacute;rminos no est&aacute; relacionado con un directorio LDAP ?";
 choices[24]= new Array();
 choices[24][0] = "DIT";
 choices[24][1] = "WMI";
 choices[24][2] = "DN";
 choices[24][3] = "RDN";
 answers[24] = choices[24][1];
 units[24] = "74";
 comments[24] = "Id Pregunta: 1535. NULL";


//  Id pregunta: 1564 AÃ±o de creación de pregunta: 2003-01-01
 questions[25]= "26)  &iquest;Cu&aacute;l de los soportes que se indican a continuaci&oacute;n tiene una capacidad m&aacute;xima de 18 gigaoctetos en 2 capas y 2 caras?:";
 choices[25]= new Array();
 choices[25][0] = "DVD-R.";
 choices[25][1] = "DVD+R.";
 choices[25][2] = "DVD-ROM.";
 choices[25][3] = "DVD-RAM.";
 answers[25] = choices[25][2];
 units[25] = "48";
 comments[25] = "Id Pregunta: 1564. Junta Andaluc&iacute;a";


//  Id pregunta: 1569 AÃ±o de creación de pregunta: 2003-01-01
 questions[26]= "27)  &iquest;Cu&aacute;l no es un modelo de extracci&oacute;n de datos en miner&iacute;a de datos?";
 choices[26]= new Array();
 choices[26][0] = " De verificaci&oacute;n.";
 choices[26][1] = " De descubrimiento.";
 choices[26][2] = "Jer&aacute;rquico.";
 choices[26][3] = "Predictivo.";
 answers[26] = choices[26][2];
 units[26] = "68";
 comments[26] = "Id Pregunta: 1569. ";


//  Id pregunta: 1577 AÃ±o de creación de pregunta: 2004-01-01
 questions[27]= "28)  Respecto a SSL";
 choices[27]= new Array();
 choices[27][0] = "Es un protocolo promovido por IETF";
 choices[27][1] = "Se diferencia de TSL en las t&eacute;cnicas criptogr&aacute;ficas empleadas";
 choices[27][2] = "Cuando HTTP se usa sobre un canal SSL se denomina HTTPS";
 choices[27][3] = "Est&aacute; restringido a su uso en browsers";
 answers[27] = choices[27][2];
 units[27] = "111";
 comments[27] = "Id Pregunta: 1577. Tanenbaum";


//  Id pregunta: 1633 AÃ±o de creación de pregunta: 2003-01-01
 questions[28]= "29)  &iquest;Cu&aacute;l es un navegador propietario?";
 choices[28]= new Array();
 choices[28][0] = "Lynx";
 choices[28][1] = "Epiphany";
 choices[28][2] = "Firefox";
 choices[28][3] = "Internet Explorer";
 answers[28] = choices[28][3];
 units[28] = "62";
 comments[28] = "Id Pregunta: 1633. ";


//  Id pregunta: 1648 AÃ±o de creación de pregunta: 2004-01-01
 questions[29]= "30)  &iquest;Cu&aacute;l de las siguientes afirmaciones de proyectos java open source es correcta?";
 choices[29]= new Array();
 choices[29][0] = "JBoss es un contenedor de servlets y Tomcat es un servidor de aplicaciones";
 choices[29][1] = "Struts es un framework de programaci&oacute;n orientada a aspectos";
 choices[29][2] = "Lucene es un motor de b&uacute;squeda";
 choices[29][3] = "Ninguna de las anteriores es cierta";
 answers[29] = choices[29][2];
 units[29] = "62";
 comments[29] = "Id Pregunta: 1648. ";


//  Id pregunta: 1665 AÃ±o de creación de pregunta: 2004-01-01
 questions[30]= "31)  Indique la respuesta correcta. El firewire...";
 choices[30]= new Array();
 choices[30][0] = "es conocido tambi&eacute;n como i.Link o IEEE1394";
 choices[30][1] = "permite la conexi&oacute;n &quot;en caliente&quot;";
 choices[30][2] = "Las opciones A) y B) son correctas";
 choices[30][3] = "Ninguna de las anteriores";
 answers[30] = choices[30][2];
 units[30] = "47";
 comments[30] = "Id Pregunta: 1665. ";


//  Id pregunta: 1692 AÃ±o de creación de pregunta: 2006-01-01
 questions[31]= "32)  &iquest;Cu&aacute;l de las siguientes afirmaciones se aproxima a la definici&oacute;n de FLOPs?:";
 choices[31]= new Array();
 choices[31][0] = "Expresa la velocidad de ejecuci&oacute;n de las instrucciones de una m&aacute;quina.";
 choices[31][1] = "Expresa la potencia en generaci&oacute;n de c&aacute;lculos cient&iacute;fico-t&eacute;cnicos.";
 choices[31][2] = "Expresa la velocidad para realizar operaciones en coma flotante por unidad de tiempo.";
 choices[31][3] = "Expresa la velocidad para realizar operaciones en coma flotante por segundo.";
 answers[31] = choices[31][3];
 units[31] = "45";
 comments[31] = "Id Pregunta: 1692. ";


//  Id pregunta: 1700 AÃ±o de creación de pregunta: 2006-01-01
 questions[32]= "33)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no es propia de la memoria principal (RAM) de unordenador?";
 choices[32]= new Array();
 choices[32][0] = "Volatilidad.";
 choices[32][1] = "Estructuraci&oacute;n.";
 choices[32][2] = "Jerarquizaci&oacute;n.";
 choices[32][3] = "Dinamismo.";
 answers[32] = choices[32][2];
 units[32] = "47";
 comments[32] = "Id Pregunta: 1700. ";


//  Id pregunta: 1764 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  Se&ntilde;ale la afirmaci&oacute;n FALSA sobre los ficheros .jar de Java";
 choices[33]= new Array();
 choices[33][0] = "Est&aacute;ndar de empaquetado de ficheros compilados, para facilitar su distribuci&oacute;n y reutilizaci&oacute;n";
 choices[33][1] = "Utiliza para la compresi&oacute;n el algoritmo LZW";
 choices[33][2] = "Son ficheros independientes de la plataforma y cualquier JVM (Java Virtual Machine) ser&aacute; capaz de interpretarlos";
 choices[33][3] = "Todas las afirmaciones anteriores son verdaderas";
 answers[33] = choices[33][3];
 units[33] = "60";
 comments[33] = "Id Pregunta: 1764. A es falsa. Tambi&eacute;n puede incluir im&aacute;genes y otro tipo de archivos. Los .class no son compilados en el sentido estricto.";


//  Id pregunta: 1801 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  &iquest;Para que se utiliza un LMS?";
 choices[34]= new Array();
 choices[34][0] = "Para crear cursos de e-learning";
 choices[34][1] = "Para cachear los cursos de e-learning en el web server";
 choices[34][2] = "Es un Content Management System especializado en e-learning";
 choices[34][3] = "Ninguna de las anteriores";
 answers[34] = choices[34][3];
 units[34] = "66";
 comments[34] = "Id Pregunta: 1801. Los cursos se crean mediante un LCMS. El LMS se utiliza para administrar esos cursos/objetos de aprendizajes ya existentes.";


//  Id pregunta: 1819 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  El fen&oacute;meno por el que se encuentran huecos entre las tablas de datos multidimensionales se conoce como:";
 choices[35]= new Array();
 choices[35][0] = "Data sparsity.";
 choices[35][1] = "Data cleansing.";
 choices[35][2] = "Data mining.";
 choices[35][3] = "Data explosion.";
 answers[35] = choices[35][0];
 units[35] = "68";
 comments[35] = "Id Pregunta: 1819. ";


//  Id pregunta: 1847 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  Se&ntilde;ale la falsa:";
 choices[36]= new Array();
 choices[36][0] = "Bonita es un motor de workflow de sw libre que implementa las especificaciones de la WfMC.";
 choices[36][1] = "Evolution es un cliente para correo electr&oacute;nico y workgroup para sistemas Linux.";
 choices[36][2] = "JoNAS es un servidor de aplicaciones de SW libre";
 choices[36][3] = "Todas son incorrectas";
 answers[36] = choices[36][3];
 units[36] = "71";
 comments[36] = "Id Pregunta: 1847. ";


//  Id pregunta: 1885 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  Se&ntilde;ale la falsa:";
 choices[37]= new Array();
 choices[37][0] = "La Ley  General de Telecomunicaciones introduce modificaciones a la ley 34/2002";
 choices[37][1] = "La ley de firma Electr&oacute;nica 59/2003 introduce modificaciones a la ley 34/2002";
 choices[37][2] = "La Ley 56/2007, de Medidas de Impulso de la Sociedad de la Informaci&oacute;n, introduce modificaciones a la ley 34/2002";
 choices[37][3] = "Son falsas las tres anteriores";
 answers[37] = choices[37][3];
 units[37] = "30";
 comments[37] = "Id Pregunta: 1885. Las tres restantes son correctas";


//  Id pregunta: 1907 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  El elemento del DNI que no permite por si solo autenticar a una persona es";
 choices[38]= new Array();
 choices[38][0] = "El nombre";
 choices[38][1] = "La foto";
 choices[38][2] = "La firma";
 choices[38][3] = "La huella dactilar";
 answers[38] = choices[38][0];
 units[38] = "74";
 comments[38] = "Id Pregunta: 1907. NULL";


//  Id pregunta: 1946 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  Sean en una comunicaci&oacute;n: m=mensaje a transmitir; y=h(m) el c&oacute;digo hash del mensaje m calculado en origen; m&rsquo;=mensaje recibido; y&rsquo;=h(m&acute;) el c&oacute;digo hash del mensaje m&acute; recibido, calculado en destino. Se&ntilde;alar cual de las siguientes afirmaciones es cierta:";
 choices[39]= new Array();
 choices[39][0] = "Si y = y&acute; entonces se puede afirmar que la integridad de m est&aacute; garantizada en m&acute;";
 choices[39][1] = "Si y != y&acute; entonces se puede afirmar que la clave privada ha sido alterada";
 choices[39][2] = "Si m = m&acute; entonces se puede afirmar que la confidencialidad de y est&aacute; garantizada en y&acute;";
 choices[39][3] = "Si y = y&acute; entonces se puede afirmar que la confidencialidad de m est&aacute; garantizada en m&acute;";
 answers[39] = choices[39][0];
 units[39] = "72";
 comments[39] = "Id Pregunta: 1946. ";


//  Id pregunta: 4316 AÃ±o de creación de pregunta: 2007-01-01
 questions[40]= "41)  Indique cu&aacute;l de los siguientes t&eacute;rminos no identifica un gestor de arranque del Sistema Operativo";
 choices[40]= new Array();
 choices[40][0] = "NT OS Loader.";
 choices[40][1] = "LILO (Linux Loader)";
 choices[40][2] = "LIUL (Linux Unified Loader).";
 choices[40][3] = "GRUB (Grand Unified Bootloader).";
 answers[40] = choices[40][2];
 units[40] = "53";
 comments[40] = "Id Pregunta: 4316. ";


//  Id pregunta: 4456 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  &iquest;Que tipo de informaci&oacute;n contienen los inodos?";
 choices[41]= new Array();
 choices[41][0] = "Contienen los contenidos de los archivos.";
 choices[41][1] = "Contienen informaci&oacute;n acerca del procesos de arranque";
 choices[41][2] = "Contienen informaci&oacute;n referente a cada archivo del sistema de archivos";
 choices[41][3] = "Contienen Ia tabla de caracteres ASCII";
 answers[41] = choices[41][2];
 units[41] = "54";
 comments[41] = "Id Pregunta: 4456. ";


//  Id pregunta: 4571 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  En HTML podemos referenciar una marca dentro de un documento con la directiva &lt;A&gt;, indicando el nombre de documento y el nombre de la marca, y separando ambos nombres con el car&aacute;cter:";
 choices[42]= new Array();
 choices[42][0] = "@";
 choices[42][1] = "$";
 choices[42][2] = "&amp;";
 choices[42][3] = "#";
 answers[42] = choices[42][3];
 units[42] = "69";
 comments[42] = "Id Pregunta: 4571. NULL";


//  Id pregunta: 4666 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares no est&aacute; relacionado con procesos de negocio?";
 choices[43]= new Array();
 choices[43][0] = "BPMN";
 choices[43][1] = "BPEL";
 choices[43][2] = "XPDL";
 choices[43][3] = "WSDL";
 answers[43] = choices[43][3];
 units[43] = "51";
 comments[43] = "Id Pregunta: 4666. NULL";


//  Id pregunta: 4683 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  En la arquitectura ANSI/X3 SPARC a tres niveles de BD, indicar cu&aacute;l de los esquemas citados acontinuaci&oacute;n no corresponde a dicha arquitectura";
 choices[44]= new Array();
 choices[44][0] = "Esquema externo";
 choices[44][1] = "Esquema legal";
 choices[44][2] = "Esquema conceptual";
 choices[44][3] = "Esquema interno";
 answers[44] = choices[44][1];
 units[44] = "57";
 comments[44] = "Id Pregunta: 4683. Examen 2006 JCYL";


//  Id pregunta: 4724 AÃ±o de creación de pregunta: 2009-01-01
 questions[45]= "46)  La siguiente instrucci&oacute;n &ldquo;iptables &ndash;L&rdquo; :";
 choices[45]= new Array();
 choices[45][0] = "Habilita el firewall de un equipo basado en iptables.";
 choices[45][1] = "Habilita el interface loopback a traves del firewall iptables.";
 choices[45][2] = "Habilita el paso de paquetes de retorno a trav&eacute;s del firewall iptables.";
 choices[45][3] = "Muestra la lista de reglas del firewall basado en iptables.";
 answers[45] = choices[45][3];
 units[45] = "54,111";
 comments[45] = "Id Pregunta: 4724. ";


//  Id pregunta: 4812 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  &iquest;En cu&aacute;l de los siguientes aspectos NO resulta de aplicaci&oacute;n la Directiva 2000/31/CE, de 8 de junio de 2000,relativa a determinados aspectos jur&iacute;dicos de los servicios de la sociedad de la informaci&oacute;n, en particular elcomercio electr&oacute;nico en el mercado interior?";
 choices[46]= new Array();
 choices[46][0] = "Las actividades de juegos de azar que impliquen apuestas de valor monetario, incluidas loter&iacute;as y apuestas";
 choices[46][1] = "Las comunicaciones comerciales";
 choices[46][2] = "Los acuerdos extrajudiciales para la prestaci&oacute;n de servicios";
 choices[46][3] = "Los contratos por v&iacute;a electr&oacute;nica";
 answers[46] = choices[46][0];
 units[46] = "30";
 comments[46] = "Id Pregunta: 4812. Directiva 2000/31/CE, art&iacute;culo 1.5.d)";


//  Id pregunta: 4870 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  Seg&uacute;n la recomendaci&oacute;n X.509 v.3, las Listas de certificados revocados (CRL)";
 choices[47]= new Array();
 choices[47][0] = "Permiten conocer el estado de un certificado en el instante de la consulta";
 choices[47][1] = "Para cada certificado revocado indican, entre otros, el nombre del titular del certificado y la correspondienteclave p&uacute;blica";
 choices[47][2] = "Pueden contener certificados revocados por diversas Autoridades de Certificaci&oacute;n";
 choices[47][3] = "Las delta CRL son los subconjuntos en los que se divide una CRL y que instaladas en m&aacute;quinas distintasfacilitan su tratamiento";
 answers[47] = choices[47][2];
 units[47] = "73";
 comments[47] = "Id Pregunta: 4870. ";


//  Id pregunta: 4909 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  Identifique cu&aacute;l de los siguientes t&eacute;rminos corresponde a un lenguaje de programaci&oacute;n declarativo:";
 choices[48]= new Array();
 choices[48][0] = "Modula-2.";
 choices[48][1] = "Haskell.";
 choices[48][2] = "Algol.";
 choices[48][3] = "Ada.";
 answers[48] = choices[48][1];
 units[48] = "";
 comments[48] = "Id Pregunta: 4909. Examen TIC B 2007";


//  Id pregunta: 4918 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  &iquest;Qu&eacute; afirmaci&oacute;n es incorrecta?:";
 choices[49]= new Array();
 choices[49][0] = "WSDL es un documento XML.";
 choices[49][1] = "XML es un est&aacute;ndar W3C.";
 choices[49][2] = "SOAP requiere de HTTP o SMTP como protocolos de transporte.";
 choices[49][3] = "Las PDAs pueden usar Servicios Web.";
 answers[49] = choices[49][2];
 units[49] = "69";
 comments[49] = "Id Pregunta: 4918. Examen TIC B 2007";


//  Id pregunta: 4962 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l de los siguientes es un comando de monitorizaci&oacute;n Unix (procesos que se est&aacute;n ejecutando y recursos que se utilizan)?:";
 choices[50]= new Array();
 choices[50][0] = "mount.";
 choices[50][1] = "chmod.";
 choices[50][2] = "top.";
 choices[50][3] = "dd.";
 answers[50] = choices[50][2];
 units[50] = "54";
 comments[50] = "Id Pregunta: 4962. Examen TIC B 2007";


//  Id pregunta: 5005 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  Seg&uacute;n la Ley 59/2003, de 19 de diciembre, de firma electr&oacute;nica, un dispositivo seguro de creaci&oacute;n de firma es undispositivo que debe ofrecer al menos ciertas garant&iacute;as. &iquest;Cu&aacute;l de las siguientes NO es una de ellas?";
 choices[51]= new Array();
 choices[51][0] = "Que los datos utilizados para la generaci&oacute;n de firma puedan producirse s&oacute;lo una vez y asegurarrazonablemente su secreto.";
 choices[51][1] = "Que los datos utilizados para la generaci&oacute;n de firma puedan ser derivados de los de verificaci&oacute;n de firma ode la propia firma";
 choices[51][2] = "Que los datos de creaci&oacute;n de firma puedan ser protegidos de forma fiable por el firmante contra su utilizaci&oacute;npor terceros.";
 choices[51][3] = "Que el dispositivo utilizado no alteren los datos o el documento que deba firmarse ni impidan que &eacute;ste semuestre al firmante antes del proceso de firma.";
 answers[51] = choices[51][1];
 units[51] = "30";
 comments[51] = "Id Pregunta: 5005. Examen TIC A 2007 (Ley 59/2003, art&iacute;culo 24)";


//  Id pregunta: 5060 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  &iquest;C&oacute;mo se denominan los servidores que se implementan en un formato de tarjeta/bandeja en la que se integranmemoria, procesadores y almacenamiento interno, que pueden ser insertados en chasis/bastidores especialessobre los que se comparten elementos comunes (habitualmente conexiones el&eacute;ctricas, conexiones de red de datosfuentes de alimentaci&oacute;n y ventiladores) y que normalmente comparten un sistema de gesti&oacute;n y administraci&oacute;ncom&uacute;n?:";
 choices[52]= new Array();
 choices[52][0] = "Clusters";
 choices[52][1] = "Servidores Grid";
 choices[52][2] = "Servidores Blades";
 choices[52][3] = "Ninguno de los anteriores";
 answers[52] = choices[52][2];
 units[52] = "48";
 comments[52] = "Id Pregunta: 5060. Examen TIC A 2007";


//  Id pregunta: 5076 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  &iquest;Cu&aacute;l de las siguientes sentencias de SQL es una sentencia DDL?:";
 choices[53]= new Array();
 choices[53][0] = "UPDATE TABLE";
 choices[53][1] = "ALTER TABLE";
 choices[53][2] = "REVOKE ALL";
 choices[53][3] = "ROLLBACK";
 answers[53] = choices[53][1];
 units[53] = "58";
 comments[53] = "Id Pregunta: 5076. Examen TIC A 2007";


//  Id pregunta: 5155 AÃ±o de creación de pregunta: 2003-01-01
 questions[54]= "55)  En entornos Oracle, &iquest;cu&aacute;l de los siguientes NO es un componente de las herramientas Forms y Reports?";
 choices[54]= new Array();
 choices[54][0] = "Forms y Reports Developer (desarrollador)";
 choices[54][1] = "Forms y Reports Runtime (tiempo de ejecuci&oacute;n)";
 choices[54][2] = "Forms y Reports Compiler (compilador)";
 choices[54][3] = "Forms y Reports Designer (dise&ntilde;ador)";
 answers[54] = choices[54][3];
 units[54] = "58";
 comments[54] = "Id Pregunta: 5155. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5488 AÃ±o de creación de pregunta: 2003-01-01
 questions[55]= "56)  Un procedimiento almacenado:";
 choices[55]= new Array();
 choices[55][0] = "Es una tabla SQL especial que permite ejecutar procesos batch";
 choices[55][1] = "S&oacute;lo puede ser  usado por el DBA";
 choices[55][2] = "Se define mediante la palabra clave CREATE TRIGGER";
 choices[55][3] = "Es un conjunto de comandos SQL que pueden almacenarse en el servidor";
 answers[55] = choices[55][3];
 units[55] = "58";
 comments[55] = "Id Pregunta: 5488. ";


//  Id pregunta: 5518 AÃ±o de creación de pregunta: 2003-01-01
 questions[56]= "57)  Respecto a la concepci&oacute;n de un sistema operativo como gestor de recursos, un sistema operativo de prop&oacute;sito espec&iacute;fico de control en tiempo real no precisa gestionar:";
 choices[56]= new Array();
 choices[56][0] = "trabajos o procesos";
 choices[56][1] = "memoria principal";
 choices[56][2] = "almacenamiento secundario";
 choices[56][3] = "dispositivos de entrada/salida";
 answers[56] = choices[56][2];
 units[56] = "52";
 comments[56] = "Id Pregunta: 5518. ";


//  Id pregunta: 5621 AÃ±o de creación de pregunta: 2003-01-01
 questions[57]= "58)  Las normas b&aacute;sicas para constituir un interfaz com&uacute;n de sistemas UNIX con las aplicaciones son:";
 choices[57]= new Array();
 choices[57][0] = "OSI";
 choices[57][1] = "ISO";
 choices[57][2] = "POSIX";
 choices[57][3] = "XENIX";
 answers[57] = choices[57][2];
 units[57] = "53";
 comments[57] = "Id Pregunta: 5621. ";


//  Id pregunta: 5703 AÃ±o de creación de pregunta: 2003-01-01
 questions[58]= "59)  Se&ntilde;ale la afirmaci&oacute;n falsa sobre SOAP:";
 choices[58]= new Array();
 choices[58][0] = "Funciona s&oacute;lo sobre HTTP";
 choices[58][1] = "Tiene como base XML";
 choices[58][2] = "La cabecera header es opcional";
 choices[58][3] = "El desarrollo body contiene la informaci&oacute;n principal";
 answers[58] = choices[58][0];
 units[58] = "51";
 comments[58] = "Id Pregunta: 5703. NULL";


//  Id pregunta: 5741 AÃ±o de creación de pregunta: 2009-01-01
 questions[59]= "60)  &iquest;Tiene la firma electr&oacute;nica el mismo valor ante la ley que la firma manuscrita?";
 choices[59]= new Array();
 choices[59][0] = "S&iacute;, siempre";
 choices[59][1] = "No, en ning&uacute;n caso";
 choices[59][2] = "S&iacute;, si es firma electr&oacute;nica avanzada";
 choices[59][3] = "S&iacute;, si es firma electr&oacute;nica reconocida";
 answers[59] = choices[59][3];
 units[59] = "30";
 comments[59] = "Id Pregunta: 5741. Ley 59/2003, art&iacute;culo 3.4";


//  Id pregunta: 5980 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  En un sistema con 10 usuarios se plantea el uso de un sistema criptogr&aacute;fico para asegurar las transferencias de datos entretodos ellos. &iquest;Cu&aacute;l ser&iacute;a la diferencia entre usar sistemas de claves sim&eacute;tricas o asim&eacute;tricas?";
 choices[60]= new Array();
 choices[60][0] = "No existe diferencia, en ambos casos se necesitar&aacute;n 20 claves.";
 choices[60][1] = "Con el sistema asim&eacute;trico hacen falta 20 claves y con el sim&eacute;trico el doble, ya que todas son secretas.";
 choices[60][2] = "Con el sistema asim&eacute;trico hacen falta 20 claves y con el sim&eacute;trico s&oacute;lo 10, una por cada usuario.";
 choices[60][3] = "Con el sistema asim&eacute;trico hacen falta 20 claves y con el sim&eacute;trico 45 claves.";
 answers[60] = choices[60][3];
 units[60] = "72";
 comments[60] = "Id Pregunta: 5980. TIC A 2009";


//  Id pregunta: 6103 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  Indique cual de las siguientes es una caracter&iacute;stica de un servidor &quot;blade&quot;.";
 choices[61]= new Array();
 choices[61][0] = "No contienen fuente de alimentaci&oacute;n propia.";
 choices[61][1] = "Tiene prestaciones m&aacute;s bajas que un servidor tradicional.";
 choices[61][2] = "Solo se puede utilizar en entornos virtualizados.";
 choices[61][3] = "No tiene memoria propia.";
 answers[61] = choices[61][0];
 units[61] = "49";
 comments[61] = "Id Pregunta: 6103. TIC A 2009";


//  Id pregunta: 6128 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  Una red de &aacute;rea de almacenamiento (SAN) es:";
 choices[62]= new Array();
 choices[62][0] = "Una red especial utilizada por algunos proveedores de servicios en internet para ofrecer servicios din&aacute;micos de almacenamiento y mantenimiento de webs corporativas.";
 choices[62][1] = "Una red basada en conexiones de fibra &oacute;ptica (Fibre Channel) que sirve para conectar m&uacute;ltiples dispositivos de almacenamiento en una red m&aacute;s grande ofreciendo una mayor capacidad de almacenamiento, permitiendo la transmisi&oacute;nde datos a alta velocidad.";
 choices[62][2] = "Un bus de datos utilizados en los grandes sistemas departamentales, muy utilizado para comunicar las consultas hacia las bases de datos.";
 choices[62][3] = "Un dispositivo de almacenamiento con direcci&oacute;n IP asignada que se conecta directamente a una LAN.";
 answers[62] = choices[62][1];
 units[62] = "48";
 comments[62] = "Id Pregunta: 6128. TIC A 2009";


//  Id pregunta: 6243 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas acerca de OLAP es correcta?";
 choices[63]= new Array();
 choices[63][0] = "La principal caracter&iacute;stica que potencia a OLAP, es que es lo m&aacute;s r&aacute;pido a la hora de ejecutar sentencias SQL de tipo UPDATE, en contraposici&oacute;n con OLTP que es la mejor opci&oacute;n para operaciones de tipo DELETE.";
 choices[63][1] = "La principal caracter&iacute;stica que potencia a OLAP, es que es lo m&aacute;s r&aacute;pido a la hora de ejecutar sentencias SQL de tipo SELECT, en contraposici&oacute;n con OLTP que es la mejor opci&oacute;n para operaciones de tipo INSERT, UPDATE, DELETE.";
 choices[63][2] = "La principal caracter&iacute;stica que potencia a OLAP, es que es lo m&aacute;s r&aacute;pido a la hora de ejecutar sentencias SQL de tipo DELETE, en contraposici&oacute;n con OLTP que es la mejor opci&oacute;n para operaciones de tipo UPDATE.";
 choices[63][3] = "La principal caracter&iacute;stica que potencia a OLAP, es que es lo m&aacute;s r&aacute;pido a la hora de ejecutar sentencias SQL de tipo DELETE, en contraposici&oacute;n con OLTP que es la mejor opci&oacute;n para operaciones de tipo SELECT, INSERT y UPDATE.";
 answers[63] = choices[63][1];
 units[63] = "68";
 comments[63] = "Id Pregunta: 6243. TICB-2009, bloque desarrollo";


//  Id pregunta: 6336 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  Indique la respuesta correcta:";
 choices[64]= new Array();
 choices[64][0] = "Las consultas de OLAP sin ser consultas de data mining permiten la realizaci&oacute;n de informes para soporte a la toma de decisiones.";
 choices[64][1] = "Todas las consultas de OLAP son tambi&eacute;n consultas de data mining.";
 choices[64][2] = "Las consultas de OLAP s&oacute;lo pueden realizarse si se ha implementado un hipercubo.";
 choices[64][3] = "Todas las respuestas son ciertas.";
 answers[64] = choices[64][0];
 units[64] = "68";
 comments[64] = "Id Pregunta: 6336. ";


//  Id pregunta: 6501 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  &iquest;Qu&eacute; navegador de Internet est&aacute; licenciado bajo la licencia MPL?";
 choices[65]= new Array();
 choices[65][0] = "Google Chrome";
 choices[65][1] = "Mozilla Firefox";
 choices[65][2] = "Mosaic";
 choices[65][3] = "Netscape Navigator";
 answers[65] = choices[65][1];
 units[65] = "61";
 comments[65] = "Id Pregunta: 6501. ";


//  Id pregunta: 6584 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  El documento de seguridad";
 choices[66]= new Array();
 choices[66][0] = "debe mantenerse siempre actualizado";
 choices[66][1] = "Es una obligaci&oacute;n de todos los responsables de fichero, y en su caso, para los encargados del tratamiento";
 choices[66][2] = "Debe existir con independencia del nivel de seguridad que sea necesario aplicar";
 choices[66][3] = "Todas las respuestas anteriores son correctas";
 answers[66] = choices[66][3];
 units[66] = "29";
 comments[66] = "Id Pregunta: 6584. NULL";


//  Id pregunta: 7164 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  En una aplicaci&oacute;n desarrollada para el entorno WINDOWS, la posibilidad de cambiar de base de datos relacional a la que se accede sin tener que modificar la aplicaci&oacute;n, est&aacute; garantizada por la utilizaci&oacute;n de";
 choices[67]= new Array();
 choices[67][0] = "Drivers ODBC";
 choices[67][1] = "La tecnolog&iacute;a COM";
 choices[67][2] = "Librer&iacute;as de carga din&aacute;mica (DLL)";
 choices[67][3] = "El API adecuado";
 answers[67] = choices[67][0];
 units[67] = "56";
 comments[67] = "Id Pregunta: 7164. Examen TIC B 2009";


//  Id pregunta: 7318 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)  Se&ntilde;ala cu&aacute;l de los siguientes lenguajes de programaci&oacute;n no tiene alguna implementaci&oacute;n para el Framework .NET:";
 choices[68]= new Array();
 choices[68][0] = "COBOL";
 choices[68][1] = "Fortran";
 choices[68][2] = "Delphi";
 choices[68][3] = "Todos los lenguajes anteriores tienen alguna implementaci&oacute;n para el Framework .NET";
 answers[68] = choices[68][3];
 units[68] = "59";
 comments[68] = "Id Pregunta: 7318. NULL";


//  Id pregunta: 8364 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  Entre las t&eacute;cnicas usadas en miner&iacute;a de datos se encuentran las redes neuronales artificiales, &iquest;cu&aacute;l de los siguientes es uno de sus modelos? ";
 choices[69]= new Array();
 choices[69][0] = "Redes de Shelman.";
 choices[69][1] = "Redes de Coperfield.";
 choices[69][2] = "Redes ART.";
 choices[69][3] = "M&aacute;quina de Gauss.";
 answers[69] = choices[69][2];
 units[69] = "68";
 comments[69] = "Id Pregunta: 8364. Examen TIC A2 2010";


//  Id pregunta: 8375 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  Dentro de las arquitecturas de almacenamiento, las siglas inglesas SSA responden a:";
 choices[70]= new Array();
 choices[70][0] = "Serialized Storage Area.";
 choices[70][1] = "Serial Storage Area.";
 choices[70][2] = "Serial Storage Architecture.";
 choices[70][3] = "Serialized Storage Architecture.";
 answers[70] = choices[70][2];
 units[70] = "48";
 comments[70] = "Id Pregunta: 8375. Examen TIC A2 2010";


//  Id pregunta: 8406 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  Cu&aacute;l de las siguientes afirmaciones en referencia a la arquitectura de computadores CISC (Complex Instruction Set Computer) es FALSA?";
 choices[71]= new Array();
 choices[71][0] = "Se caracteriza por tener un juego de instrucciones muy amplio.";
 choices[71][1] = "Tiene muchos modos de direccionamiento";
 choices[71][2] = "Tiene varios formatos de instrucci&oacute;n (de longitud variable)";
 choices[71][3] = "Su unidad de control es cableada";
 answers[71] = choices[71][3];
 units[71] = "46";
 comments[71] = "Id Pregunta: 8406. Examen TIC A2 2010";


//  Id pregunta: 8665 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  El protocolo MESI:";
 choices[72]= new Array();
 choices[72][0] = "Es utilizado para el inicio de sesi&oacute;n en redes GSM.";
 choices[72][1] = "Permite el establecimiento de conexiones entre iguales &quot;peer to peer&quot; sobre redes IP.";
 choices[72][2] = "Controla las colisiones en redes Token Ring.";
 choices[72][3] = "Controla la coherencia cach&eacute; en algunos procesadores.";
 answers[72] = choices[72][3];
 units[72] = "46, 52";
 comments[72] = "Id Pregunta: 8665. Examen UPM A2 2011";


//  Id pregunta: 8764 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)   En la planificaci&oacute;n por prioridad circular o &quot;Round Robin&quot;:";
 choices[73]= new Array();
 choices[73][0] = "El proceso preparado que pasa a ejecuci&oacute;n corresponde al de tiempo de ejecuci&oacute;n restante m&aacute;s corto";
 choices[73][1] = "De acuerdo a su prioridad, cada proceso preparado pasa a ejecuci&oacute;n durante una cota de tiempo llamada &quot;cuanto&quot;";
 choices[73][2] = "De forma secuencial, cada proceso preparado pasa a ejecuci&oacute;n durante un intervalo de tiempo llamada &quot;cuanto&quot;";
 choices[73][3] = "El proceso preparado que pasa a ejecuci&oacute;n corresponde al de mayor prioridad asignada";
 answers[73] = choices[73][2];
 units[73] = "52";
 comments[73] = "Id Pregunta: 8764. Examen TIC A2 2010 interna";


//  Id pregunta: 8815 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  Los procesos de un Data Warehouse son:";
 choices[74]= new Array();
 choices[74][0] = "Elaboraci&oacute;n, carga, explotaci&oacute;n y an&aacute;lisis.";
 choices[74][1] = "Extracci&oacute;n, elaboraci&oacute;n, carga y explotaci&oacute;n.";
 choices[74][2] = "Extracci&oacute;n, carga, explotaci&oacute;n y an&aacute;lisis.";
 choices[74][3] = "Extracci&oacute;n, elaboraci&oacute;n, carga y an&aacute;lisis.";
 answers[74] = choices[74][1];
 units[74] = "68";
 comments[74] = "Id Pregunta: 8815. Examen TIC B 2007 y examen UPM A2 2011";


//  Id pregunta: 8878 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  La cl&aacute;usula HAVING de SQL:";
 choices[75]= new Array();
 choices[75][0] = "Establece un filtro para seleccionar las filas que se usar&aacute;n en la consulta.";
 choices[75][1] = "Precisa de la presencia de la cl&aacute;usula WHERE en la sentencia.";
 choices[75][2] = "Establece un filtro que se aplica a las tablas agrupadas.";
 choices[75][3] = "Establece una condici&oacute;n que deben cumplir las filas.";
 answers[75] = choices[75][2];
 units[75] = "57, 58";
 comments[75] = "Id Pregunta: 8878. Examen UPM A2 2011";


//  Id pregunta: 8907 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  &iquest;Qu&eacute; relaci&oacute;n existe entre fichero, registro y campo?:";
 choices[76]= new Array();
 choices[76][0] = "El fichero esta formado por varios campos y a cada conjunto de campos con un significado relevante se le conoce como registro.";
 choices[76][1] = "Los registros est&aacute;n compuestos por campos, pero no tienen ninguna relaci&oacute;n con un fichero.";
 choices[76][2] = "Los ficheros contienen registros y los registros est&aacute;n formados por una serie de campos cada uno de los cuales contiene un tipo de informaci&oacute;n sobre dicho registro.";
 choices[76][3] = "Ninguna de las anteriores es correcta";
 answers[76] = choices[76][2];
 units[76] = "52";
 comments[76] = "Id Pregunta: 8907. Operador Ayto. Madrid 2010";


//  Id pregunta: 9055 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  &iquest;Cual de los siguientes NO es un principio del dise&ntilde;o universal ?";
 choices[77]= new Array();
 choices[77][0] = "Escaso esfuerzo f&iacute;sico";
 choices[77][1] = "Simple e intuitivo.";
 choices[77][2] = "Informaci&oacute;n f&aacute;cil de percibir";
 choices[77][3] = "universalidad";
 answers[77] = choices[77][3];
 units[77] = "39";
 comments[77] = "Id Pregunta: 9055. NULL";


//  Id pregunta: 9087 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  En relaci&oacute;n a los programas de ordenadro, indicar mediante que ley se protegen.";
 choices[78]= new Array();
 choices[78][0] = "Mediante la Ley 23/2006 por la que se modifica el texto refundido de la Ley de Propiedad Intelectual";
 choices[78][1] = "Mediante la Ley de Propiedad Intelectual";
 choices[78][2] = "Mediante la Directiva de derechos de autor 2001/29";
 choices[78][3] = "Mediante la Ley de Patentes";
 answers[78] = choices[78][1];
 units[78] = "36";
 comments[78] = "Id Pregunta: 9087. ";


//  Id pregunta: 9118 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  &iquest;C&oacute;mo se pueden clasificar los sistemas SIMD?";
 choices[79]= new Array();
 choices[79][0] = "Con CPU particionada";
 choices[79][1] = "Con m&uacute;ltiples ALUS";
 choices[79][2] = "Como A) y como B)";
 choices[79][3] = "Ninguna respuesta es correcta";
 answers[79] = choices[79][2];
 units[79] = "45";
 comments[79] = "Id Pregunta: 9118. ";


//  Id pregunta: 9126 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  Indique la frase ERR&Oacute;NEA acerca de las t&eacute;cnicas de configuraci&oacute;n de servidores";
 choices[80]= new Array();
 choices[80][0] = "Existen tres tipos de cluster: de alta disponibilidad, de alto rendimiento y de balanceo de carga";
 choices[80][1] = "La principal limitaci&oacute;n t&eacute;cnica para un centro de respaldo en configuraci&oacute;n activo activo es el tiempo de latencia";
 choices[80][2] = "El balanceo de carga solo puede implementarse por software";
 choices[80][3] = "La virtualizaci&oacute;n permite optimizar el uso del procesador y la memoria de los equipos f&iacute;sicos";
 answers[80] = choices[80][2];
 units[80] = "45";
 comments[80] = "Id Pregunta: 9126. Examen TIC-A1 2011";


//  Id pregunta: 9139 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  &iquest;Qu&eacute; suele incorporar un controlador de Entrada/Salida?";
 choices[81]= new Array();
 choices[81][0] = "Una UART";
 choices[81][1] = "El controlador de puerto paralelo";
 choices[81][2] = "Reloj de tiempo real";
 choices[81][3] = "Todas las anteriores";
 answers[81] = choices[81][3];
 units[81] = "47";
 comments[81] = "Id Pregunta: 9139. ";


//  Id pregunta: 9677 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  Son est&aacute;ndares GIS:";
 choices[82]= new Array();
 choices[82][0] = "Para metadatos: FGDC Data Content Standard, ISO 19115 Metadatos, OpenGIS Catalog Service.";
 choices[82][1] = "Para servicio de entidades vectoriales: GML, Geography Markup Language (perfil de XML).";
 choices[82][2] = "Para Web Mapping: Open GIS Web Feature Service, ISO 19125 Simple Feature Access.";
 choices[82][3] = "Para protocolos de almacenamiento y transporte de informaci&oacute;n geogr&aacute;fica: OpenGIS Web Map Service (WMS).";
 answers[82] = choices[82][0];
 units[82] = "67";
 comments[82] = "Id Pregunta: 9677. NULL";


//  Id pregunta: 9750 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  &iquest;Cu&aacute;l de las siguientes respuestas se corresponde con una base de datos no SQL destinada a almacenar enormes cantidades de datos?";
 choices[83]= new Array();
 choices[83][0] = "Citrix";
 choices[83][1] = "Oracle";
 choices[83][2] = "MySql Extend";
 choices[83][3] = "Cassandra";
 answers[83] = choices[83][3];
 units[83] = "58";
 comments[83] = "Id Pregunta: 9750. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9922 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  Sean dos transacciones (T1 y T2), T1 con estampa de tiempo igual a 8 y T2 con estampa de tiempo igual a 10 (T1 es m&aacute;s antiguo que T2). Suponiendo que T2 tiene un bloqueo en un elemento y T1 pide bloqueo para ese mismo elemento, si aplicamos el enfoque WOUND-WAIT para resoluci&oacute;n del conflicto:";
 choices[84]= new Array();
 choices[84][0] = "T1 esperar&aacute; hasta que T2 se completa y libera su bloqueo.";
 choices[84][1] = "T1 se apropia del elemento que ten&iacute;a bloqueo T2. T2 se aborta y se reinicia usando la misma estampa de tiempo.";
 choices[84][2] = "T1 se reinicia con la misma estampa de tiempo y T2 se reprograma usando la misma estampa de tiempo.";
 choices[84][3] = "T1 se apropia del elemento que ten&iacute;a bloqueo T2. T2 se reinicia usando distinta estampa de tiempo.";
 answers[84] = choices[84][1];
 units[84] = "57";
 comments[84] = "Id Pregunta: 9922. TIC A2, Examen 2013";


//  Id pregunta: 10162 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Un dominio en un modelo relacional&hellip;";
 choices[85]= new Array();
 choices[85][0] = "Puede definirse por intensi&oacute;n, es decir, especificando tipo de datos y restricciones";
 choices[85][1] = "Es un conjunto nominado, infinito y homog&eacute;neo de valores at&oacute;micos";
 choices[85][2] = "S&oacute;lo puede definirse por extensi&oacute;n o enumeraci&oacute;n de los posibles valores del dominio";
 choices[85][3] = "Todas las anteriores";
 answers[85] = choices[85][0];
 units[85] = "58";
 comments[85] = "Id Pregunta: 10162. ";


//  Id pregunta: 10170 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  &iquest;En qu&eacute; escenarios puede ser &uacute;til una vista materializada de Oracle?";
 choices[86]= new Array();
 choices[86][0] = "Funcionamiento de aplicaciones sin conexi&oacute;n";
 choices[86][1] = "Reducir tr&aacute;fico de red y desplazar carga soportada por un servidor de base de datos corporativo hacia servidores de bases de datos en delegaciones";
 choices[86][2] = "Replicar informaci&oacute;n restringi&eacute;ndola al &aacute;rea geogr&aacute;fica de inter&eacute;s";
 choices[86][3] = "Todas las anteriores";
 answers[86] = choices[86][3];
 units[86] = "58";
 comments[86] = "Id Pregunta: 10170. ";


//  Id pregunta: 10312 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  En el &aacute;mbito de las redes SAN, &iquest;a qu&eacute; se refiere el t&eacute;rmino LUN?";
 choices[87]= new Array();
 choices[87][0] = "A un switch con conexi&oacute;n de fibra.";
 choices[87][1] = "A la interfaz de red de los servidores para conectarse a la SAN.";
 choices[87][2] = "A una unidad de discos agrupados en una cabina de almacenamiento.";
 choices[87][3] = "Al gateway para conectar una NAS a una red SAN.";
 answers[87] = choices[87][2];
 units[87] = "48";
 comments[87] = "Id Pregunta: 10312. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 10526 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  Seg&uacute;n la taxonomia de Flynn, un procesador vectorial ser&iacute;a considerado como";
 choices[88]= new Array();
 choices[88][0] = "SISD";
 choices[88][1] = "SIMD";
 choices[88][2] = "MISD";
 choices[88][3] = "MIMD";
 answers[88] = choices[88][1];
 units[88] = "45";
 comments[88] = "Id Pregunta: 10526. NULL";


//  Id pregunta: 10605 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  Para que un organismo utilice la pasarela de pagos de la AEAT:";
 choices[89]= new Array();
 choices[89][0] = "Necesita un certificado de sede electr&oacute;nica.";
 choices[89][1] = "Debe implementar una interfaz REST.";
 choices[89][2] = "Debe poseer un certificado de persona f&iacute;sica, jur&iacute;dica o de componente.";
 choices[89][3] = "La DTIC recomienda que cada organismo implemente su propia pasarela de pagos.";
 answers[89] = choices[89][2];
 units[89] = "70";
 comments[89] = "Id Pregunta: 10605. ";


//  Id pregunta: 10623 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  Indique qu&eacute; soluci&oacute;n tiene una mayor rapidez de repuesta para consultas multitabla:";
 choices[90]= new Array();
 choices[90][0] = "OLAP";
 choices[90][1] = "OLTP";
 choices[90][2] = "ETL";
 choices[90][3] = "OLTA";
 answers[90] = choices[90][0];
 units[90] = "68";
 comments[90] = "Id Pregunta: 10623. ";


//  Id pregunta: 10789 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;Cu&aacute;l de las siguientes opciones NO corresponde a un sistema de ficheros empleado en Sistemas Operativos GNU/Linux?";
 choices[91]= new Array();
 choices[91][0] = "ext3";
 choices[91][1] = "mini fs";
 choices[91][2] = "ReiserFS";
 choices[91][3] = "Reiser4";
 answers[91] = choices[91][1];
 units[91] = "53, 54";
 comments[91] = "Id Pregunta: 10789. Examen GSI 2014";


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


//  Id pregunta: 11045 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Cu&aacute;l no es una caracter&iacute;stica de la gesti&oacute;n de Sistemas de Informaci&oacute;n Geogr&aacute;fica?";
 choices[93]= new Array();
 choices[93][0] = "Es muy voluminosa";
 choices[93][1] = "Es borrosa";
 choices[93][2] = "Es din&aacute;mica";
 choices[93][3] = "Todas son caracter&iacute;sticas";
 answers[93] = choices[93][3];
 units[93] = "67";
 comments[93] = "Id Pregunta: 11045. ";


//  Id pregunta: 11088 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Sal (salt) en criptograf&iacute;a&hellip;";
 choices[94]= new Array();
 choices[94][0] = "Es un algoritmo de cifrado de bloques";
 choices[94][1] = "Comprende bits aleatorios que se usan como una de las entradas en una funci&oacute;n derivadora de claves.";
 choices[94][2] = "Las sales hacen mucho m&aacute;s lentos los ataques de diccionario y los ataques de fuerza bruta";
 choices[94][3] = "B y C son correctas";
 answers[94] = choices[94][3];
 units[94] = "72";
 comments[94] = "Id Pregunta: 11088. ";


//  Id pregunta: 11264 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Seleccione la opci&oacute;n correcta m&aacute;s precisa sobre las obligaciones previas a la expedici&oacute;n de certificados reconocidos incluida en la ley de firma electr&oacute;nica:";
 choices[95]= new Array();
 choices[95][0] = "Asegurarse de que el firmante est&aacute; en posesi&oacute;n de los datos de creaci&oacute;n de firma correspondientes a los de verificaci&oacute;n que constan en el certificado.";
 choices[95][1] = "Asegurarse de que el firmante tiene el control exclusivo sobre el uso de los datos de creaci&oacute;n de firma correspondientes a los de verificaci&oacute;n que constan en el certificado.";
 choices[95][2] = "La respuesta B) es correcta, la cual fue a&ntilde;adida por la ley 25/2015 de reducci&oacute;n de la carga financiera y otras medidas de orden social, que introduc&iacute;a cambios en la Ley 59/2003 de firma electr&oacute;nica para dar soporte jur&iacute;dico a la denominada firma en la nube.";
 choices[95][3] = "La respuesta A) es correcta, ya que la &uacute;ltima modificaci&oacute;n a la ley de firma electr&oacute;nica fue realizada por  la ley 9/2014 General de Telecomunicaciones, que ampliaba el periodo de validez de los certificados reconocidos a 5 a&ntilde;os.";
 answers[95] = choices[95][2];
 units[95] = "73";
 comments[95] = "Id Pregunta: 11264. ";


//  Id pregunta: 11286 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Para qu&eacute; sirve un servicio SOS del Open Geospatial Consortium (OGC)?";
 choices[96]= new Array();
 choices[96][0] = "Consulta de cat&aacute;logo de metadatos";
 choices[96][1] = "Localizaci&oacute;n de datos vectoriales";
 choices[96][2] = "Presentaci&oacute;n de coberturas r&aacute;ster";
 choices[96][3] = "Consulta de observaciones de sensores";
 answers[96] = choices[96][3];
 units[96] = "67";
 comments[96] = "Id Pregunta: 11286. ";


//  Id pregunta: 11532 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  En .NET, la biblioteca de clases ";
 choices[97]= new Array();
 choices[97][0] = "S&oacute;lo implementa funciones para la capa de l&oacute;gica de negocio.";
 choices[97][1] = "S&oacute;lo implementa funciones para la capa de l&oacute;gica de negocio y acceso a datos.";
 choices[97][2] = "Es &uacute;nica para todos los lenguajes de la plataforma.";
 choices[97][3] = "Todas las anteriores son falsas.";
 answers[97] = choices[97][2];
 units[97] = "59";
 comments[97] = "Id Pregunta: 11532. NULL";


//  Id pregunta: 11624 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Se&ntilde;ale la respuesta incorrecta con respecto al procesado de documentos XML:";
 choices[98]= new Array();
 choices[98][0] = "Los parsers DOM consumen mucha memoria.";
 choices[98][1] = "Los parsers DOM facilitan el acceso a toda la informaci&oacute;n del documento XML.";
 choices[98][2] = "Los parsers SAX permiten la modificaci&oacute;n de datos en memoria.";
 choices[98][3] = "Para los parsers SAX el tama&ntilde;o del documento XML es irrelevante.";
 answers[98] = choices[98][2];
 units[98] = "69";
 comments[98] = "Id Pregunta: 11624. ";


//  Id pregunta: 11781 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Se&ntilde;ale la FALSA en lo relativo a la tecnolog&iacute;a RAID de discos duros:";
 choices[99]= new Array();
 choices[99][0] = "En RAID 5 los bloques de paridad solo se leen cuando la lectura de un sector de datos provoca un error de CRC.";
 choices[99][1] = "Un RAID 6 ampl&iacute;a el nivel RAID 5 a&ntilde;adiendo otro bloque de paridad.";
 choices[99][2] = "El RAID 6 proporciona protecci&oacute;n contra fallos dobles de discos y contra fallos cuando se est&aacute; reconstruyendo un disco.";
 choices[99][3] = "Un RAID 2 necesitar&iacute;a como m&iacute;nimo 32 discos (los necesarios para formar una palabra).";
 answers[99] = choices[99][3];
 units[99] = "48";
 comments[99] = "Id Pregunta: 11781. ";


