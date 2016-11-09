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

//  Id pregunta: 36 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de las siguientes no es una implementaci&oacute;n de POSIX (IEEE 1003)?:";
 choices[0]= new Array();
 choices[0][0] = "HP-UX";
 choices[0][1] = "MINIX";
 choices[0][2] = "Solaris";
 choices[0][3] = "Las 3 anteriores son implementaciones de POSIX";
 answers[0] = choices[0][3];
 units[0] = "40";
 comments[0] = "Id Pregunta: 36. ";


//  Id pregunta: 71 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Qu&eacute; m&eacute;todo de ordenaci&oacute;n de alternativas ignora la cuant&iacute;a de la diferencia y s&oacute;lo se&ntilde;ala si existe o no?:";
 choices[1]= new Array();
 choices[1][0] = "M&eacute;todo Promethee";
 choices[1][1] = "Utilidad multiatributo";
 choices[1][2] = "Permutaci&oacute;n";
 choices[1][3] = "Ninguno de los anteriores";
 answers[1] = choices[1][0];
 units[1] = "34";
 comments[1] = "Id Pregunta: 71. ";


//  Id pregunta: 100 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  En relaci&oacute;n con las pruebas de conformidad,  si la comprobaci&oacute;n de que el producto satisface o no los requerimientos t&eacute;cnicos definidos en una norma es realizada por el consumidor, nos estamos refiriendo a:";
 choices[2]= new Array();
 choices[2][0] = "Comprobaci&oacute;n de pimera parte o &ldquo;first party testing&rdquo;";
 choices[2][1] = "Comprobaci&oacute;n de segunda parte o &ldquo; second party testing&rdquo;";
 choices[2][2] = "Comprobaci&oacute;n de tercera parte  o &ldquo; third party testing&rdquo;";
 choices[2][3] = "Las pruebas de conformidad no pueden ser realizadas por los consumidores";
 answers[2] = choices[2][1];
 units[2] = "42";
 comments[2] = "Id Pregunta: 100. ";


//  Id pregunta: 181 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  En el control de integridad de los datos no entra el control de:";
 choices[3]= new Array();
 choices[3][0] = "Fallos en la disponibilidad de los datos";
 choices[3][1] = "La p&eacute;rdida de los datos";
 choices[3][2] = "Duplicaciones de datos";
 choices[3][3] = "Alteraci&oacute;n del significado de los datos";
 answers[3] = choices[3][0];
 units[3] = "21";
 comments[3] = "Id Pregunta: 181. ";


//  Id pregunta: 209 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  En general, lo m&aacute;s &uacute;til en determinadas &aacute;reas de la organizaci&oacute;n altamente normalizadas (ofim&aacute;tica, contabilidad, inventarios,&hellip;) es utilizar:";
 choices[4]= new Array();
 choices[4][0] = "Aplicaciones a medida realizadas mediante programaci&oacute;n propia.";
 choices[4][1] = "Aplicaciones a medida realizadas mediante programaci&oacute;n externa.";
 choices[4][2] = "Aplicaciones a medida realizadas mediante programaci&oacute;n propia y externa.";
 choices[4][3] = "Aplicaciones est&aacute;ndar o paquetes.";
 answers[4] = choices[4][3];
 units[4] = "27";
 comments[4] = "Id Pregunta: 209. ";


//  Id pregunta: 228 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  En las estrategias de negociaci&oacute;n:";
 choices[5]= new Array();
 choices[5][0] = "La estrategia de ganar-ganar es la que por lo general deja m&aacute;s satisfechos a las 2 partes";
 choices[5][1] = "La estrategia de perder-perder suele llevar a un equilibrio inestable que provoca que tarde o temprano tenga que volverse a retomar la negociaci&oacute;n";
 choices[5][2] = "Las 2 respuestas anteriores son correctas";
 choices[5][3] = "Ninguna de las respuestas anteriores son correctas";
 answers[5] = choices[5][2];
 units[5] = "28";
 comments[5] = "Id Pregunta: 228. negociaci&oacute;n";


//  Id pregunta: 328 AÃ±o de creación de pregunta: 2009-01-01
 questions[6]= "7)  Los ficheros con datos de car&aacute;cter personal de &aacute;mbito departamental, usualmente soportados por herramientas ofim&aacute;ticas de usuario final:";
 choices[6]= new Array();
 choices[6][0] = "Precisan ser declarados por el organismo pero no inscritos en el registro de ficheros de la agencia de protecci&oacute;n de datos.";
 choices[6][1] = "No precisan ser declarados pero s&iacute; ser inscritos en el registro de la agencia de protecci&oacute;n de datos.";
 choices[6][2] = "Se caracterizan como de nivel b&aacute;sico en el RD 1720/2007 por las plataformas en las que se soportan.";
 choices[6][3] = "Se tratan a todos los efectos como el resto de ficheros de datos de car&aacute;cter personal con las consideraciones introducidas por el RD 1720/2007.";
 answers[6] = choices[6][3];
 units[6] = "29";
 comments[6] = "Id Pregunta: 328. NULL";


//  Id pregunta: 474 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  Uno de los principales impulsores del concepto de organizaci&oacute;n basada en la informaci&oacute;n ha sido:";
 choices[7]= new Array();
 choices[7][0] = "Elton Mayo";
 choices[7][1] = "Peter Drucker";
 choices[7][2] = "Lynda Applegate";
 choices[7][3] = "Pigrogine";
 answers[7] = choices[7][1];
 units[7] = "22";
 comments[7] = "Id Pregunta: 474. ";


//  Id pregunta: 662 AÃ±o de creación de pregunta: 2006-01-01
 questions[8]= "9)  &iquest;Cu&aacute;les de los siguientes ficheros de datos personales se rigen por su legislaci&oacute;n espec&iacute;fica y no por la LOPD?:";
 choices[8]= new Array();
 choices[8][0] = "Los derivados del Registro Civil";
 choices[8][1] = "Los ficheros establecidos para la investigaci&oacute;n del terrorismo y de formas graves de la delincuencia organizada";
 choices[8][2] = "Los derivados de im&aacute;genes y sonidos obtenidos mediante la utilizaci&oacute;n de videoc&aacute;maras";
 choices[8][3] = "Los ficheros de las Grandes Compa&ntilde;&iacute;as de Seguros, cuando lo comuniquen previamente a la Agencia de Protecci&oacute;n de Datos";
 answers[8] = choices[8][0];
 units[8] = "29";
 comments[8] = "Id Pregunta: 662. ";


//  Id pregunta: 865 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l de los siguientes es un modelo de inteligencia artificial distribuida?:";
 choices[9]= new Array();
 choices[9][0] = "Modelo de actores";
 choices[9][1] = "Modelo de puntos de funci&oacute;n";
 choices[9][2] = "Modelo de regresi&oacute;n m&uacute;ltiple";
 choices[9][3] = "Modelo de Nashville";
 answers[9] = choices[9][0];
 units[9] = "63";
 comments[9] = "Id Pregunta: 865. ";


//  Id pregunta: 1601 AÃ±o de creación de pregunta: 2003-01-01
 questions[10]= "11)  En un sistema de workflow no es una funci&oacute;n b&aacute;sica:";
 choices[10]= new Array();
 choices[10][0] = "Monitorizaci&oacute;n y control";
 choices[10][1] = "Gesti&oacute;n de procedimientos";
 choices[10][2] = "Interoperabilidad entre aplicaciones";
 choices[10][3] = "Autorizaciones y asignaci&oacute;n de responsabilidades";
 answers[10] = choices[10][2];
 units[10] = "71";
 comments[10] = "Id Pregunta: 1601. Pregunta no perteneciente al test &nbsp;del ex&aacute;men 2003 de SS (aunque en este ex&aacute;men hubo una pregunta de Worflow)";


//  Id pregunta: 1763 AÃ±o de creación de pregunta: 2006-01-01
 questions[11]= "12)  El AWT de Java es";
 choices[11]= new Array();
 choices[11][0] = "Una interfaz gr&aacute;fica de usuario (GUI) plenamente independiente del SO";
 choices[11][1] = "Driver para conectarse a una base de datos";
 choices[11][2] = "Interfaz gr&aacute;fica pesada y dependiente del SO";
 choices[11][3] = "Paquete de desarrollo Java";
 answers[11] = choices[11][2];
 units[11] = "60";
 comments[11] = "Id Pregunta: 1763. NULL";


//  Id pregunta: 1774 AÃ±o de creación de pregunta: 2006-01-01
 questions[12]= "13)  El Software Libre es bueno para las Administraciones P&uacute;blicas porque&hellip; Se&ntilde;ale la respuesta FALSA";
 choices[12]= new Array();
 choices[12][0] = "Es gratis";
 choices[12][1] = "Permite conocer exactamente el funcionamiento de los programas";
 choices[12][2] = "Facilita la conservaci&oacute;n de la informaci&oacute;n p&uacute;blica, libre de patentes y formatos propietarios";
 choices[12][3] = "Abre la posibilidad de contratar soporte t&eacute;cnico en un mercado en competencia";
 answers[12] = choices[12][0];
 units[12] = "61,62";
 comments[12] = "Id Pregunta: 1774. ";


//  Id pregunta: 2145 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  &iquest;Cu&aacute;l de los siguientes es un lenguaje orientado a objetos puro?:";
 choices[13]= new Array();
 choices[13][0] = "Visual Basic";
 choices[13][1] = "C++";
 choices[13][2] = "Smalltalk";
 choices[13][3] = "Todos son h&iacute;bridos";
 answers[13] = choices[13][2];
 units[13] = "82";
 comments[13] = "Id Pregunta: 2145. ";


//  Id pregunta: 2670 AÃ±o de creación de pregunta: 2003-01-01
 questions[14]= "15)  En im&aacute;genes multiespectrales o multitemporales se emplean las operaciones aritm&eacute;ticas para:";
 choices[14]= new Array();
 choices[14][0] = "Eliminar ruidos.";
 choices[14][1] = "Detectar cambios.";
 choices[14][2] = "Todas las anteriores.";
 choices[14][3] = "Ninguna de las anteriores.";
 answers[14] = choices[14][2];
 units[14] = "93";
 comments[14] = "Id Pregunta: 2670. NULL";


//  Id pregunta: 2810 AÃ±o de creación de pregunta: 2006-01-01
 questions[15]= "16)  La Teor&iacute;a CALIDAD/COSTE establece que...";
 choices[15]= new Array();
 choices[15][0] = "El coste es constante e independiente de la calidad del Producto.";
 choices[15][1] = "El coste de producci&oacute;n disminuye linealmente con el aumento de calidad.";
 choices[15][2] = "El coste de producci&oacute;n aumenta exponencialmente con el aumento de calidad.";
 choices[15][3] = "La relaci&oacute;n entre el coste y la calidad representada gr&aacute;ficamente da lugar a una curva c&oacute;ncava con un m&iacute;nimo.";
 answers[15] = choices[15][2];
 units[15] = "88";
 comments[15] = "Id Pregunta: 2810. NULL";


//  Id pregunta: 2840 AÃ±o de creación de pregunta: 2006-01-01
 questions[16]= "17)  &iquest;En el modelo EFQM qu&eacute; porcentaje se da al liderazgo?";
 choices[16]= new Array();
 choices[16][0] = "15";
 choices[16][1] = "10";
 choices[16][2] = "20";
 choices[16][3] = "9";
 answers[16] = choices[16][1];
 units[16] = "92";
 comments[16] = "Id Pregunta: 2840. NULL";


//  Id pregunta: 2850 AÃ±o de creación de pregunta: 2006-01-01
 questions[17]= "18)  Entre los factores de complejidad del Habla no se encuentra";
 choices[17]= new Array();
 choices[17][0] = "el locutor";
 choices[17][1] = "el vocabulario";
 choices[17][2] = "la Gram&aacute;tica";
 choices[17][3] = "todos los anteriores son factores de complejidad del Habla";
 answers[17] = choices[17][3];
 units[17] = "94";
 comments[17] = "Id Pregunta: 2850. ";


//  Id pregunta: 2909 AÃ±o de creación de pregunta: 2009-01-01
 questions[18]= "19)  El impacto es, de acuerdo a MAGERIT v2:";
 choices[18]= new Array();
 choices[18][0] = "Da&ntilde;o sobre el activo derivado de la materializaci&oacute;n de la amenaza";
 choices[18][1] = "Lo que podr&iacute;a pasar";
 choices[18][2] = "Las respuestas 'a' y 'b' son correctas";
 choices[18][3] = "Lo que probablemente pase ";
 answers[18] = choices[18][2];
 units[18] = "33";
 comments[18] = "Id Pregunta: 2909. ";


//  Id pregunta: 2953 AÃ±o de creación de pregunta: 2004-01-01
 questions[19]= "20)  &iquest;Cu&aacute;l es el m&eacute;todo de acceso del est&aacute;ndar IEEE 802.4?";
 choices[19]= new Array();
 choices[19][0] = "CSMA/CD";
 choices[19][1] = "Token bus";
 choices[19][2] = "Token Ring";
 choices[19][3] = "Aloha ranurado";
 answers[19] = choices[19][1];
 units[19] = "101, 102";
 comments[19] = "Id Pregunta: 2953. Similar a examen TIC SS A 2003";


//  Id pregunta: 3351 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Cuando una estaci&oacute;n Token Ring detecta un problema serio en la red:";
 choices[20]= new Array();
 choices[20][0] = "La estaci&oacute;n que lo detecta envia una trama de advertencia ('beacon') que define el dominio del fallo";
 choices[20][1] = "La estaci&oacute;n espera que el servidor local m&aacute;s cercano reconfigure las tablas de direcciones";
 choices[20][2] = "La estaci&oacute;n transmite mensajes exploratorios a sus siguientes vecinos activos ";
 choices[20][3] = "La estaci&oacute;n escucha por tr&aacute;fico y si no oye nada, manda testigos a todas las estaciones activas locales (en el anillo)";
 answers[20] = choices[20][0];
 units[20] = "102";
 comments[20] = "Id Pregunta: 3351. ";


//  Id pregunta: 3442 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  El protocolo CSMA/CD utilizado en el subnivel MAC de las LAN es propio de las redes:";
 choices[21]= new Array();
 choices[21][0] = "Ethernet";
 choices[21][1] = "Token ring";
 choices[21][2] = "Token bus";
 choices[21][3] = "Se puede emplear en cualquiera de las anteriores";
 answers[21] = choices[21][0];
 units[21] = "101";
 comments[21] = "Id Pregunta: 3442. ";


//  Id pregunta: 3478 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  El tipo de fibra &oacute;ptica que permite la transmisi&oacute;n a m&aacute;s velocidad es:";
 choices[22]= new Array();
 choices[22][0] = "&Iacute;ndice gradual";
 choices[22][1] = "Multimodo";
 choices[22][2] = "Fibra &oacute;ptica de salto de &iacute;ndice";
 choices[22][3] = "Monomodo";
 answers[22] = choices[22][3];
 units[22] = "99";
 comments[22] = "Id Pregunta: 3478. ";


//  Id pregunta: 3668 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Una centralita telef&oacute;nica digital privada para RDSI, o un &ldquo;bridge&rdquo; &oacute; &ldquo;router&rdquo; de red de &aacute;rea local con puerto RDSI es un dispositivo:";
 choices[23]= new Array();
 choices[23][0] = "ET1";
 choices[23][1] = "ET2";
 choices[23][2] = "TR2";
 choices[23][3] = "AT";
 answers[23] = choices[23][2];
 units[23] = "103";
 comments[23] = "Id Pregunta: 3668. ";


//  Id pregunta: 3758 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Para conectar una intranet dispersa geogr&aacute;ficamente con aplicaciones cr&iacute;ticas, la mejor opci&oacute;n es:";
 choices[24]= new Array();
 choices[24][0] = "El acceso telef&oacute;nico conmutado";
 choices[24][1] = "Utilizar la t&eacute;cnica de Tunneling";
 choices[24][2] = "Utilizar l&iacute;neas privadas";
 choices[24][3] = "Utilizar Internet como mecanismo de interconexi&oacute;n de los equipos de la intranet";
 answers[24] = choices[24][1];
 units[24] = "113";
 comments[24] = "Id Pregunta: 3758. ";


//  Id pregunta: 3978 AÃ±o de creación de pregunta: 2006-01-01
 questions[25]= "26)  Se&ntilde;ale la respuesta falsa sobre el coaxial tipo &quot;thick&quot;:";
 choices[25]= new Array();
 choices[25][0] = "Utiliza un conector BNC.";
 choices[25][1] = "Su impedancia es de 50 Ohm";
 choices[25][2] = "La longitud m&aacute;xima del segmento es de 500 m.";
 choices[25][3] = "Todas son falsas";
 answers[25] = choices[25][0];
 units[25] = "99";
 comments[25] = "Id Pregunta: 3978. ";


//  Id pregunta: 4136 AÃ±o de creación de pregunta: 2006-01-01
 questions[26]= "27)  El mecanismo usado para garantizar que solo los usuarios autorizados pueden usar o copiar aplicaciones software espec&iacute;ficas se llama";
 choices[26]= new Array();
 choices[26][0] = "informe de an&aacute;lisis de programa autorizado";
 choices[26][1] = "clave";
 choices[26][2] = "acuerdo de nivel de servicio (SLA)";
 choices[26][3] = "dongle";
 answers[26] = choices[26][3];
 units[26] = "37";
 comments[26] = "Id Pregunta: 4136. ";


//  Id pregunta: 4286 AÃ±o de creación de pregunta: 2007-01-01
 questions[27]= "28)  Los documentos electr&oacute;nicos conformados de acuerdo con la norma XML utilizan el juego de caracteres:";
 choices[27]= new Array();
 choices[27][0] = "ASCII de 16 bits.";
 choices[27][1] = "ASCII de 8 bits.";
 choices[27][2] = "UNICODE.";
 choices[27][3] = "MIME";
 answers[27] = choices[27][2];
 units[27] = "70";
 comments[27] = "Id Pregunta: 4286. NULL";


//  Id pregunta: 4457 AÃ±o de creación de pregunta: 2007-01-01
 questions[28]= "29)  Para usar la utilidad &quot;Shadow Copies for Shared Folders&quot; en un sistema Windows Server 2003 R2 se necesita";
 choices[28]= new Array();
 choices[28][0] = "Un volumen FAT.";
 choices[28][1] = "Un volumen NTFS dedicado en exclusiva a esta funci&oacute;n.";
 choices[28][2] = "Un volumen FAT dedicado en exclusiva a esta funci&oacute;n.";
 choices[28][3] = "Un volumen NTFS";
 answers[28] = choices[28][3];
 units[28] = "56";
 comments[28] = "Id Pregunta: 4457. ";


//  Id pregunta: 4646 AÃ±o de creación de pregunta: 2007-01-01
 questions[29]= "30)  Dentro del protocolo de Ia capa de transporte TCP (Transmision Control Protocol&quot;) cual de las siguientes primitivas no es de solicitud de servicio:";
 choices[29]= new Array();
 choices[29][0] = "Active open";
 choices[29][1] = "Send";
 choices[29][2] = "Open success";
 choices[29][3] = "Allocate";
 answers[29] = choices[29][2];
 units[29] = "100";
 comments[29] = "Id Pregunta: 4646. ";


//  Id pregunta: 4664 AÃ±o de creación de pregunta: 2007-01-01
 questions[30]= "31)  HSDPA corresponde a la generaci&oacute;n m&oacute;vil";
 choices[30]= new Array();
 choices[30][0] = "4G";
 choices[30][1] = "3.5G";
 choices[30][2] = "5G";
 choices[30][3] = "Ninguna de las anteriores";
 answers[30] = choices[30][1];
 units[30] = "108";
 comments[30] = "Id Pregunta: 4664. ";


//  Id pregunta: 4732 AÃ±o de creación de pregunta: 2007-01-01
 questions[31]= "32)  En el servidor http Apache al configurarlo como HostnameLookUps On lo que hacemos es:";
 choices[31]= new Array();
 choices[31][0] = "Ver si la petici&oacute;n origen proviene de un sistema conocido a trav&eacute;s del fichero /etc/hosts para almacenar el nombre en el fichero de log";
 choices[31][1] = "Ver si la petici&oacute;n origen proviene de un sistema conocido a trav&eacute;s del servicio dns inverso para almacenar el nombre en el fichero de log";
 choices[31][2] = "Ver si la petici&oacute;n origen tiene un nombre asociado a trav&eacute;s del o los servicios de resoluci&oacute;n de nombres ip para almacenar el nombre en el fichero del log";
 choices[31][3] = "Almacena en el log la ip y tambi&eacute;n el nombre del sistema origen de la petici&oacute;n http";
 answers[31] = choices[31][2];
 units[31] = "112";
 comments[31] = "Id Pregunta: 4732. Examen 2006 JCYL";


//  Id pregunta: 4769 AÃ±o de creación de pregunta: 2007-01-01
 questions[32]= "33)  En el marco de las redes telem&aacute;ticas transeruopeas, la red s-TESTA";
 choices[32]= new Array();
 choices[32][0] = "Es la red Transversal Espa&ntilde;ola de Servicios Telem&aacute;ticos entre Administraciones, encargada de interconectar las distintas administraciones auton&oacute;micas";
 choices[32][1] = "Es una red IP aislada de Internet que interconecta las redes administrativas de los Estados miembros y de las Agencias e Instituciones europeas";
 choices[32][2] = "Es una red basada en tecnolog&iacute;a inal&aacute;mbrica, que pretende dar cobertura para el aacceso libre a Internet a todos los ciudadanos de la Uni&oacute;n Europea";
 choices[32][3] = "Ninguna de las anteriores";
 answers[32] = choices[32][1];
 units[32] = "103";
 comments[32] = "Id Pregunta: 4769. ";


//  Id pregunta: 4836 AÃ±o de creación de pregunta: 2007-01-01
 questions[33]= "34)  En ADO.NET para mostrar datos en un control DataGrid:";
 choices[33]= new Array();
 choices[33][0] = "Hay que vincular el control DataGrid a un objeto DataView, seleccionar &quot;Permitir ordenaci&oacute;n&quot; en elGenerador de propiedades y generar una rutina de tratamiento del evento SortCommand";
 choices[33][1] = "Hay que establecer la propiedad DataSource y DataMember del control Datalist y definir los datos vinculadospor cada control en las plantillas del control DataList";
 choices[33][2] = "Hay que asignar el objeto DataSource y opcionalmente el objeto DataKeyField en el Generador depropiedades";
 choices[33][3] = "Hay que seleccionar una opci&oacute;n de paginado del panel Paginaci&oacute;n del Generador de propiedades del controlDataGrid";
 answers[33] = choices[33][2];
 units[33] = "115";
 comments[33] = "Id Pregunta: 4836. ";


//  Id pregunta: 4937 AÃ±o de creación de pregunta: 2003-01-01
 questions[34]= "35)  En el Modelo E/R de Chen del universo de discurso del departamento de RRHH de una cierta organizaci&oacute;n,existe la restricci&oacute;n, en base a un criterio fijado por la Direcci&oacute;n, de que el atributo &ldquo;mes&rdquo; de la entidad&ldquo;vacaciones&rdquo; s&oacute;lo podr&aacute; tomar los valores &lsquo;Junio&rsquo;, &lsquo;Julio&rsquo; y &lsquo;Agosto&rsquo;. Esta restricci&oacute;n o limitaci&oacute;n deintegridad es de tipo:";
 choices[34]= new Array();
 choices[34][0] = "Sint&aacute;ctica.";
 choices[34][1] = "Sem&aacute;ntica estructural.";
 choices[34][2] = "Sem&aacute;ntica de usuario sobre los valores.";
 choices[34][3] = "Sem&aacute;ntica de usuario sobre la asociaci&oacute;n.";
 answers[34] = choices[34][2];
 units[34] = "80";
 comments[34] = "Id Pregunta: 4937. Examen TIC B 2007";


//  Id pregunta: 4960 AÃ±o de creación de pregunta: 2003-01-01
 questions[35]= "36)  En la ejecuci&oacute;n de un proyecto de auditor&iacute;a inform&aacute;tica sobre un sistema de informaci&oacute;n, el uso de procedimientos estad&iacute;sticos de muestreo ayudar&aacute; a minimizar el riesgo:";
 choices[35]= new Array();
 choices[35][0] = "De muestreo.";
 choices[35][1] = "De detecci&oacute;n.";
 choices[35][2] = "Inherente.";
 choices[35][3] = "De control.";
 answers[35] = choices[35][1];
 units[35] = "33";
 comments[35] = "Id Pregunta: 4960. Examen TIC B 2007";


//  Id pregunta: 5008 AÃ±o de creación de pregunta: 2003-01-01
 questions[36]= "37)  Indique cu&aacute;l de las siguientes afirmaciones sobre JDBC es incorrecta:";
 choices[36]= new Array();
 choices[36][0] = "Es independiente del lenguaje de programaci&oacute;n";
 choices[36][1] = "Es independiente del sistema operativo";
 choices[36][2] = "Es independiente de la base de datos";
 choices[36][3] = "Es un tipo de API";
 answers[36] = choices[36][0];
 units[36] = "58";
 comments[36] = "Id Pregunta: 5008. Examen TIC A 2007";


//  Id pregunta: 5024 AÃ±o de creación de pregunta: 2003-01-01
 questions[37]= "38)  Cual de los siguientes no es un m&eacute;todo de ordenaci&oacute;n de alternativas disponible en el sistema SSD-AAPP v.3.0";
 choices[37]= new Array();
 choices[37][0] = "Ponderaci&oacute;n Lineal";
 choices[37][1] = "Permutaci&oacute;n";
 choices[37][2] = "Prometh&eacute;e";
 choices[37][3] = "Distancia al Ideal (TOPSIS)";
 answers[37] = choices[37][1];
 units[37] = "34";
 comments[37] = "Id Pregunta: 5024. Examen TIC A 2007";


//  Id pregunta: 5033 AÃ±o de creación de pregunta: 2003-01-01
 questions[38]= "39)  En la planificaci&oacute;n de un proyecto representada por un diagrama de Pert, una actividad critica es una actividad:";
 choices[38]= new Array();
 choices[38][0] = "con un alto riesgo de incrementar su duraci&oacute;n";
 choices[38][1] = "con dependencia de otra actividad y de la que depende al menos una actividad";
 choices[38][2] = "en el camino cr&iacute;tico";
 choices[38][3] = "cuya duraci&oacute;n no puede modificarse";
 answers[38] = choices[38][2];
 units[38] = "77";
 comments[38] = "Id Pregunta: 5033. Examen TIC A 2007";


//  Id pregunta: 5442 AÃ±o de creación de pregunta: 2003-01-01
 questions[39]= "40)  &iquest;C&oacute;mo se puede describir el formato de los datos en XML?";
 choices[39]= new Array();
 choices[39][0] = "Usando XSL";
 choices[39][1] = "Usando un DTD";
 choices[39][2] = "Usando un Nodo de Descripci&oacute;n (Description Node)";
 choices[39][3] = "Usando XSLT";
 answers[39] = choices[39][1];
 units[39] = "69";
 comments[39] = "Id Pregunta: 5442. Castilla y Le&oacute;n";


//  Id pregunta: 5498 AÃ±o de creación de pregunta: 2003-01-01
 questions[40]= "41)  Es posible que cada programador defina sus librer&iacute;as de etiquetas JSP mediante: ";
 choices[40]= new Array();
 choices[40][0] = "La extensi&oacute;n de  la clase Servlet";
 choices[40][1] = "La especificaci&oacute;n JSTL";
 choices[40][2] = "El uso de scriptlets";
 choices[40][3] = "Ninguna de las anteriores";
 answers[40] = choices[40][1];
 units[40] = "116";
 comments[40] = "Id Pregunta: 5498. ";


//  Id pregunta: 5522 AÃ±o de creación de pregunta: 2003-01-01
 questions[41]= "42)  La medida del n&uacute;mero de bits utilizados para definir cada p&iacute;xel es";
 choices[41]= new Array();
 choices[41][0] = "Resoluci&oacute;n";
 choices[41][1] = "&Aacute;rea de imagen";
 choices[41][2] = "Profundidad de bit o de color";
 choices[41][3] = "Ninguna es verdadera";
 answers[41] = choices[41][2];
 units[41] = "93";
 comments[41] = "Id Pregunta: 5522. NULL";


//  Id pregunta: 5580 AÃ±o de creación de pregunta: 2003-01-01
 questions[42]= "43)  &iquest;Qu&eacute; es el blended learning?";
 choices[42]= new Array();
 choices[42][0] = "Un modelo de referencia del e-learning";
 choices[42][1] = "Una modalidad de e-learning que incluye ense&ntilde;anza presencial";
 choices[42][2] = "Una inciativa para estandarizar el e-learning";
 choices[42][3] = "Una clase de ense&ntilde;anza virtual";
 answers[42] = choices[42][1];
 units[42] = "66";
 comments[42] = "Id Pregunta: 5580. ";


//  Id pregunta: 5688 AÃ±o de creación de pregunta: 2003-01-01
 questions[43]= "44)  Se&ntilde;ale donde se encuentran los datos biom&eacute;tricos y de identidad en el chip criptogr&aacute;fico del DNI electr&oacute;nico:";
 choices[43]= new Array();
 choices[43][0] = "Zona de seguridad";
 choices[43][1] = "Zona p&uacute;blica";
 choices[43][2] = "Zona privada";
 choices[43][3] = "Zona confidencial";
 answers[43] = choices[43][0];
 units[43] = "74";
 comments[43] = "Id Pregunta: 5688. NULL";


//  Id pregunta: 5709 AÃ±o de creación de pregunta: 2009-01-01
 questions[44]= "45)  Como se denomina al conjunto de servicios y protocolos de los servicios web:";
 choices[44]= new Array();
 choices[44][0] = "Web Service Protocol Stack.";
 choices[44][1] = "Web Service Protocol Set.";
 choices[44][2] = "UDDI (Universal Description, Discovery and Integration).";
 choices[44][3] = "SOAP (Simple Object Access Protocol).";
 answers[44] = choices[44][0];
 units[44] = "51";
 comments[44] = "Id Pregunta: 5709. MAP 2008 A2";


//  Id pregunta: 5730 AÃ±o de creación de pregunta: 2003-01-01
 questions[45]= "46)  &iquest;Cual de las siguientes puede ser utilizada para videoconferencia?";
 choices[45]= new Array();
 choices[45][0] = "ATM";
 choices[45][1] = "H.323";
 choices[45][2] = "VRVS";
 choices[45][3] = "Todas las anteriores";
 answers[45] = choices[45][3];
 units[45] = "117";
 comments[45] = "Id Pregunta: 5730. ";


//  Id pregunta: 5799 AÃ±o de creación de pregunta: 2009-01-01
 questions[46]= "47)  El funcionamiento del &quot;Sistema de Verificaci&oacute;n de Datos de Identidad&quot; est&aacute; determinado por el Real Decreto 522/2006 por el que se suprime la aportaci&oacute;n de fotocopias de documentos de identidad en los procedimientos administrativos. Seg&uacute;n dicho Real Decreto, la supresi&oacute;n de la aportaci&oacute;n de fotocopias de documentos de identidad en los procedimientos administrativos es obligatoria para:";
 choices[46]= new Array();
 choices[46][0] = "La Administraci&oacute;n General del Estado y los organismos p&uacute;blicos vinculados o dependientes de aquella.";
 choices[46][1] = "La Administraci&oacute;n General del Estado y las Administraciones Auton&oacute;micas y los organismos p&uacute;blicos vinculados o dependientes de las anteriores.";
 choices[46][2] = "Todas las Administraciones P&uacute;blicas.";
 choices[46][3] = "Todas las Administraciones P&uacute;blicas y cualquier otro, organismo o entidad con personal jur&iacute;dica propia siempre que uno o varios sujetos pertenecientes al sector p&uacute;blico financien mayoritariamente su actividad.";
 answers[46] = choices[46][0];
 units[46] = "30";
 comments[46] = "Id Pregunta: 5799. MAP 2008 A2";


//  Id pregunta: 5900 AÃ±o de creación de pregunta: 2009-01-01
 questions[47]= "48)  &iquest;Cu&aacute;l de las siguientes afirmaciones es falsa sobre JPA?";
 choices[47]= new Array();
 choices[47][0] = "El mapeo de los objetos al modelo relacional se puede definir mediante anotaciones en las entidades (clases)";
 choices[47][1] = "El mapeo de los objetos al modelo relacional se puede definir mediante ficheros XML";
 choices[47][2] = "Una misma unidad de persistencia permite acceder a diferentes fuentes de datos";
 choices[47][3] = "Una entidad puede estar mapeada a m&aacute;s de una tabla relacional";
 answers[47] = choices[47][2];
 units[47] = "60";
 comments[47] = "Id Pregunta: 5900. NULL";


//  Id pregunta: 6050 AÃ±o de creación de pregunta: 2010-01-01
 questions[48]= "49)  La organizaci&oacute;n que publica los est&aacute;ndares sobre SNMP es:";
 choices[48]= new Array();
 choices[48][0] = "UIT-T";
 choices[48][1] = "IETF";
 choices[48][2] = "ISO/IEC";
 choices[48][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[48] = choices[48][1];
 units[48] = "104";
 comments[48] = "Id Pregunta: 6050. ";


//  Id pregunta: 6110 AÃ±o de creación de pregunta: 2010-01-01
 questions[49]= "50)  El protocolo UDP proporciona servicios a las aplicaciones para:";
 choices[49]= new Array();
 choices[49][0] = "Controlar el flujo extremo a extremo.";
 choices[49][1] = "Eliminar paquetes duplicados.";
 choices[49][2] = "Multiplexar y demultiplexar.";
 choices[49][3] = "Reordenar paquetes.";
 answers[49] = choices[49][2];
 units[49] = "100";
 comments[49] = "Id Pregunta: 6110. TIC A 2009";


//  Id pregunta: 6120 AÃ±o de creación de pregunta: 2010-01-01
 questions[50]= "51)  &iquest;Puede la Agencia de Protecci&oacute;n de Datos, en el ejercicio de sus competencias, inspeccionar un fichero de titularidad p&uacute;blica de un Ministerio, examinando adem&aacute;s el equipo o equipos f&iacute;sicos en el que se halle el fichero?";
 choices[50]= new Array();
 choices[50][0] = "No, porque carece de competencias sobre ficheros de titularidad p&uacute;blica, y s&oacute;lo puede inspeccionar los de titularidad privada.";
 choices[50][1] = "No, porque los Ministerios son autoridades p&uacute;blicas y solo pueden ser inspeccionados por la Inspecci&oacute;n General de Servicios del Ministerio de la Presidencia. ";
 choices[50][2] = "S&iacute;, puede hacer la inspecci&oacute;n, pero s&oacute;lo si lo solicita el Ministerio correspondiente, no siendo admisible una inspecci&oacute;n de oficio.";
 choices[50][3] = "S&iacute;, puede hacer la inspecci&oacute;n conforme a sus competencias.";
 answers[50] = choices[50][3];
 units[50] = "29";
 comments[50] = "Id Pregunta: 6120. TIC A 2009";


//  Id pregunta: 6124 AÃ±o de creación de pregunta: 2010-01-01
 questions[51]= "52)  &iquest;Qu&eacute; son las t&eacute;cnicas esteganogr&aacute;ficas?";
 choices[51]= new Array();
 choices[51][0] = "Son t&eacute;cnicas de firma electr&oacute;nica, tipo XMLDSig.";
 choices[51][1] = "Son t&eacute;cnicas dirigidas a ayudar en las auditorias inform&aacute;ticas y en particular en la optimizaci&oacute;n de los sistemas de impresi&oacute;n.";
 choices[51][2] = "Son t&eacute;cnicas de dise&ntilde;o asistido por ordenador y enfocadas a la producci&oacute;n de material gr&aacute;fico.";
 choices[51][3] = "Son t&eacute;cnicas dirigidas al ocultamiento de mensajes u objetos dentro de otros";
 answers[51] = choices[51][3];
 units[51] = "86";
 comments[51] = "Id Pregunta: 6124. TIC A 2009";


//  Id pregunta: 6206 AÃ±o de creación de pregunta: 2010-01-01
 questions[52]= "53)  Relacionado con el An&aacute;lisis y Dise&ntilde;o Orientado a Objetos, &iquest;Cu&aacute;l de los siguientes patrones de dise&ntilde;o corresponde a la subclasificaci&oacute;n patrones de creaci&oacute;n?";
 choices[52]= new Array();
 choices[52][0] = "Adapter";
 choices[52][1] = "Bridge";
 choices[52][2] = "Singleton";
 choices[52][3] = "Composite";
 answers[52] = choices[52][2];
 units[52] = "82";
 comments[52] = "Id Pregunta: 6206. TICB-2009, bloque desarrollo";


//  Id pregunta: 6228 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)  Entre las metodolog&iacute;as &aacute;giles de desarrollo de software no se encuentra:";
 choices[53]= new Array();
 choices[53][0] = "Adaptive Software Development (ASD)";
 choices[53][1] = "Merisse";
 choices[53][2] = "EXtreme Programming (XP)";
 choices[53][3] = "Feature Driven Development (FDD)";
 answers[53] = choices[53][1];
 units[53] = "79";
 comments[53] = "Id Pregunta: 6228. TICB-2009, bloque desarrollo";


//  Id pregunta: 6234 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  En el framwork .NET, la herramienta de desarrollo compila el c&oacute;digo fuente de cualquiera de los lenguajes soportados por .NET a un c&oacute;digo intermedio, inicialmente conocido como MSIL y actualmente llamado:";
 choices[54]= new Array();
 choices[54][0] = "CIL";
 choices[54][1] = "CLI";
 choices[54][2] = "JIT";
 choices[54][3] = "CLR";
 answers[54] = choices[54][0];
 units[54] = "59,115";
 comments[54] = "Id Pregunta: 6234. ";


//  Id pregunta: 6277 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  No es una ventaja de los modelos de ciclo de vida basada en prototipos:";
 choices[55]= new Array();
 choices[55][0] = "Los sistemas se desarrollan con m&aacute;s rapidez";
 choices[55][1] = "El prototipo coincide exactamente con el producto final";
 choices[55][2] = "Se facilita la comunicaci&oacute;n con los usuarios";
 choices[55][3] = "Los requisitos de usuario son m&aacute;s f&aacute;ciles de determinar";
 answers[55] = choices[55][1];
 units[55] = "76";
 comments[55] = "Id Pregunta: 6277. ";


//  Id pregunta: 6288 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  Seg&uacute;n Pressman, &iquest;cu&aacute;l de los siguientes no es un objetivo que deba cumplir un modelo de an&aacute;lisis (especificaci&oacute;n)?";
 choices[56]= new Array();
 choices[56][0] = "Establecer una base para la creaci&oacute;n de un dise&ntilde;o software";
 choices[56][1] = "Definir el calendario de ejecuci&oacute;n del proyecto";
 choices[56][2] = "Definir un conjunto de requisitos que una vez el sistema est&eacute; construido se puedan validar";
 choices[56][3] = "Describir lo que el cliente quiere";
 answers[56] = choices[56][1];
 units[56] = "78";
 comments[56] = "Id Pregunta: 6288. ";


//  Id pregunta: 6327 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  El operador de agregaci&oacute;n AVG(nombre_atributo) sirve para:";
 choices[57]= new Array();
 choices[57][0] = "Calcular la media de cualquier atributo.";
 choices[57][1] = "Calcular la media de un atributo num&eacute;rico.";
 choices[57][2] = "Calcular la suma de los valores de un atributo.";
 choices[57][3] = "Contar el n&uacute;mero de ocurrencias de un atributo.";
 answers[57] = choices[57][1];
 units[57] = "58";
 comments[57] = "Id Pregunta: 6327. ";


//  Id pregunta: 6342 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  &iquest;Cu&aacute;l de los siguientes servicios o aplicaciones no se asocia a la Web 2.0?";
 choices[58]= new Array();
 choices[58][0] = "Facebook";
 choices[58][1] = "Wikipedia";
 choices[58][2] = "Flickr";
 choices[58][3] = "Geocities";
 answers[58] = choices[58][3];
 units[58] = "120";
 comments[58] = "Id Pregunta: 6342. NULL";


//  Id pregunta: 6416 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  &iquest;Cu&aacute;l de los siguientes no es un principio del WCAG 2.0?";
 choices[59]= new Array();
 choices[59][0] = "Perceptible";
 choices[59][1] = "Operable";
 choices[59][2] = "Robusto";
 choices[59][3] = "Usable";
 answers[59] = choices[59][3];
 units[59] = "39";
 comments[59] = "Id Pregunta: 6416. NULL";


//  Id pregunta: 6487 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  &iquest;Por qu&eacute; se usan celdas de tama&ntilde;o fijo en ATM?";
 choices[60]= new Array();
 choices[60][0] = "Porque se reduce la sobrecarga de cabeceras de protocolo";
 choices[60][1] = "Porque se reduce el tiempo que una trama de alta prioridad deber&aacute; esperar en cola";
 choices[60][2] = "Porque mejora el enrutamiento";
 choices[60][3] = "Por analog&iacute;a con Ethernet";
 answers[60] = choices[60][1];
 units[60] = "109";
 comments[60] = "Id Pregunta: 6487. Castilla La Mancha 2009";


//  Id pregunta: 6548 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  &iquest;C&oacute;mo se utiliza un protocolo reto/respuesta con una implementaci&oacute;n con un dispositivo de tokens?";
 choices[61]= new Array();
 choices[61][0] = "Este protocolo no se usa, se usa la criptograf&iacute;a";
 choices[61][1] = "El servicio de autenticaci&oacute;n genera un reto y el dispositivo inteligente genera una respuesta basado en el reto";
 choices[61][2] = "El dispositivo pide el usuario y la contrase&ntilde;a";
 choices[61][3] = "El dispositivo compara la contrase&ntilde;a del usuario contra una base de datos de credenciales";
 answers[61] = choices[61][1];
 units[61] = "111";
 comments[61] = "Id Pregunta: 6548. NULL";


//  Id pregunta: 6556 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  El est&aacute;ndar X.509 v3 define los distintos elementos que debe contener un certificado, entre los que destacan:";
 choices[62]= new Array();
 choices[62][0] = "N&uacute;mero de serie del certificado";
 choices[62][1] = "Nombre de la autoridad de certificaci&oacute;n";
 choices[62][2] = "Firma digital de la autoridad  certificadora";
 choices[62][3] = "Todas las respuestas anteriores son correctas";
 answers[62] = choices[62][3];
 units[62] = "74";
 comments[62] = "Id Pregunta: 6556. NULL";


//  Id pregunta: 6608 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  En el an&aacute;lisis estructurado, al hablar de diccionario de datos se puede diferenciar entre:";
 choices[63]= new Array();
 choices[63][0] = "Diccionarios Activos y Pasivos";
 choices[63][1] = "Diccionario de Datos y de Procesos";
 choices[63][2] = "Diccionarios Funcionales y Descriptivos";
 choices[63][3] = "En el an&aacute;lisis estructurado no se diferencian tipos de diccionarios";
 answers[63] = choices[63][0];
 units[63] = "81";
 comments[63] = "Id Pregunta: 6608. NULL";


//  Id pregunta: 6625 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  CMM en el campo de la ingenier&iacute;a y calidad del software son las siglas de:";
 choices[64]= new Array();
 choices[64][0] = "Capacity Maturity Model";
 choices[64][1] = "Capability Maturity Model";
 choices[64][2] = "Capacity Management Model";
 choices[64][3] = "Capability Management Model";
 answers[64] = choices[64][1];
 units[64] = "87";
 comments[64] = "Id Pregunta: 6625. NULL";


//  Id pregunta: 7332 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  El WSC (World Standards Cooperation) est&aacute; formado por";
 choices[65]= new Array();
 choices[65][0] = "ISO/IEC/W3C";
 choices[65][1] = "ISO/CEN";
 choices[65][2] = "CEN/CENELEC/ETSI";
 choices[65][3] = "ISO/IEC/ITU-T";
 answers[65] = choices[65][3];
 units[65] = "42";
 comments[65] = "Id Pregunta: 7332. NULL";


//  Id pregunta: 7960 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)   Dentro de un sistema de cableado estructurado el denominado &laquo;subsistema horizontal&raquo; es aquel que:";
 choices[66]= new Array();
 choices[66][0] = " Interconecta las plantas del edificio y los cuadros de distribuci&oacute;n de cada planta.";
 choices[66][1] = " Interconecta las rosetas con el cuadro de distribuci&oacute;n de planta.";
 choices[66][2] = " Interconecta edificios en el entorno de un campus.";
 choices[66][3] = " Interconecta a todo el cableado de un edificio.";
 answers[66] = choices[66][1];
 units[66] = "NULL";
 comments[66] = "Id Pregunta: 7960. Map 2006";


//  Id pregunta: 8199 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  Comparando el m&eacute;todo HTTP GET con el m&eacute;todo HTTP POST, se cumple que: ";
 choices[67]= new Array();
 choices[67][0] = "S&oacute;lo HTTP GET est&aacute; definido como idempotente. ";
 choices[67][1] = "Ambos requieren declaraci&oacute;n expl&iacute;cita al usarlos en un tag HTML form. ";
 choices[67][2] = "S&oacute;lo HTTP POST puede soportar el env&iacute;o de varios par&aacute;metros en un form data set en una misma petici&oacute;n. ";
 choices[67][3] = "S&oacute;lo HTTP POST permite que el agente de usuario haga uso del mecanismo de conexiones persistentes del protocolo.";
 answers[67] = choices[67][0];
 units[67] = "69";
 comments[67] = "Id Pregunta: 8199. Examen TIC A1 2010";


//  Id pregunta: 8212 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  Los equipos &quot;Bluetooth&quot; emplean:";
 choices[68]= new Array();
 choices[68][0] = "Transmisi&oacute;n por espectro expandido mediante secuencia directa.";
 choices[68][1] = "Transmisi&oacute;n por espectro expandido mediante salto de frecuencias.";
 choices[68][2] = "Un algoritmo de control de acceso al medio basado en CDMA/CD.";
 choices[68][3] = "Un algoritmo de control de acceso al medio basado en CDMA/CA.";
 answers[68] = choices[68][1];
 units[68] = "107";
 comments[68] = "Id Pregunta: 8212. Examen TIC A1 2010";


//  Id pregunta: 8245 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  El Texto Refundido de la Ley de Propiedad Intelectual, modificado por la ley 23/2006, define los siguientes derechos de explotaci&oacute;n:";
 choices[69]= new Array();
 choices[69][0] = "Reproducci&oacute;n, Distribuci&oacute;n, Duplicaci&oacute;n y Transformaci&oacute;n.";
 choices[69][1] = "Distribuci&oacute;n, Duplicaci&oacute;n, Comunicaci&oacute;n P&uacute;blica y Transformaci&oacute;n.";
 choices[69][2] = "Reproducci&oacute;n, Duplicaci&oacute;n, Comunicaci&oacute;n P&uacute;blica y Transformaci&oacute;n.";
 choices[69][3] = "Reproducci&oacute;n, Distribuci&oacute;n, Comunicaci&oacute;n P&uacute;blica y Transformaci&oacute;n.";
 answers[69] = choices[69][3];
 units[69] = "36,37";
 comments[69] = "Id Pregunta: 8245. Examen TIC A1 2010";


//  Id pregunta: 8278 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  &iquest;Cu&aacute;l de los siguientes algoritmos de encaminamiento est&aacute; basado en el estado del enlace?:";
 choices[70]= new Array();
 choices[70][0] = "RIP versi&oacute;n 1.";
 choices[70][1] = "OSPF.";
 choices[70][2] = "BGP.";
 choices[70][3] = "RIP versi&oacute;n 2.";
 answers[70] = choices[70][1];
 units[70] = "102";
 comments[70] = "Id Pregunta: 8278. Examen TIC A1 2010";


//  Id pregunta: 8296 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  &iquest;Cu&aacute;ntas direcciones IP ser&aacute;n asignadas en la subred 134.141.0.0/24, sin considerar las direcciones de subred y de broadcast? ";
 choices[71]= new Array();
 choices[71][0] = "256";
 choices[71][1] = "254";
 choices[71][2] = "30";
 choices[71][3] = "64";
 answers[71] = choices[71][1];
 units[71] = "100";
 comments[71] = "Id Pregunta: 8296. Examen TIC A2 2010";


//  Id pregunta: 8298 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  &iquest;Cu&aacute;l de las siguientes definiciones explica de mejor manera lo que es el throughput de un sistema inform&aacute;tico? ";
 choices[72]= new Array();
 choices[72][0] = "La cantidad de trabajo &uacute;til ejecutada por unidad de tiempo en un entorno de carga determinado.";
 choices[72][1] = "Es la m&aacute;xima cantidad de trabajo &uacute;til que se puede ejecutar por unidad de tiempo en un entorno de carga determinado.";
 choices[72][2] = "Es el porcentaje de tiempo durante el cual dos o m&aacute;s componentes del sistema est&aacute;n utilizados simult&aacute;neamente.";
 choices[72][3] = "Es el porcentaje de tiempo durante el cual se est&aacute; utilizando un componente del sistema inform&aacute;tico.";
 answers[72] = choices[72][0];
 units[72] = "26";
 comments[72] = "Id Pregunta: 8298. Examen TIC A2 2010";


//  Id pregunta: 8365 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  &iquest;En qu&eacute; tipo de t&eacute;cnica de miner&iacute;a de datos se utiliza el algoritmo IK-medoids?";
 choices[73]= new Array();
 choices[73][0] = "Predicci&oacute;n.";
 choices[73][1] = "Categorizaci&oacute;n.";
 choices[73][2] = "Clustering.";
 choices[73][3] = "Estad&iacute;sticas.";
 answers[73] = choices[73][2];
 units[73] = "68";
 comments[73] = "Id Pregunta: 8365. Examen TIC A2 2010";


//  Id pregunta: 8472 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  El PID 0 se asigna en Unix/Linux a:";
 choices[74]= new Array();
 choices[74][0] = "Swapper";
 choices[74][1] = "Init";
 choices[74][2] = "Page daemon";
 choices[74][3] = "Load";
 answers[74] = choices[74][0];
 units[74] = "53,54";
 comments[74] = "Id Pregunta: 8472. Analista Ayto. Madrid 2010";


//  Id pregunta: 8650 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  &iquest;Qu&eacute; perfil es el encargado de la tarea de M&eacute;trica v3 &quot;Definici&oacute;n del Esquema de Formaci&oacute;n&quot;?";
 choices[75]= new Array();
 choices[75][0] = "Analista.";
 choices[75][1] = "Consultor.";
 choices[75][2] = "Analista-programador.";
 choices[75][3] = "Programador.";
 answers[75] = choices[75][0];
 units[75] = "86";
 comments[75] = "Id Pregunta: 8650. Examen TIC A2 2010 interna";


//  Id pregunta: 8657 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  La codificaci&oacute;n Manchester-Diferencial se utiliza en:";
 choices[76]= new Array();
 choices[76][0] = "Firma digital";
 choices[76][1] = "Modulaci&oacute;n de se&ntilde;ales";
 choices[76][2] = "T&eacute;cnicas criptogr&aacute;ficas";
 choices[76][3] = "Seguridad Wi-Fi";
 answers[76] = choices[76][1];
 units[76] = "99, 101";
 comments[76] = "Id Pregunta: 8657. Examen UPM A2 2011";


//  Id pregunta: 8762 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  El grado de multiprogramaci&oacute;n en un sistema operativo corresponde a:";
 choices[77]= new Array();
 choices[77][0] = "El n&uacute;mero m&aacute;ximo de programas que realizan operaciones de E/S.";
 choices[77][1] = "El n&uacute;mero m&aacute;ximo de archivos en un directorio";
 choices[77][2] = "El n&uacute;mero m&aacute;ximo de procesos en memoria principal";
 choices[77][3] = "El n&uacute;mero m&aacute;ximo de programas que comparten variables";
 answers[77] = choices[77][2];
 units[77] = "52";
 comments[77] = "Id Pregunta: 8762. Examen TIC A2 2010 interna";


//  Id pregunta: 8817 AÃ±o de creación de pregunta: 2011-01-01
 questions[78]= "79)  Sobre la tecnolog&iacute;a ASP (Active Server Pages) se&ntilde;ale la afirmaci&oacute;n falsa:";
 choices[78]= new Array();
 choices[78][0] = "A diferencia de ASP.net, ASP utiliza el &quot;Common Language Runtime (CLR)&quot; para generar el c&oacute;digo HTML";
 choices[78][1] = "S&oacute;lo es compatible con el servidor IIS (Internet Information Server)";
 choices[78][2] = "Es un lenguaje de script que se incluye en un mismo archivo junto con el c&oacute;digo HTML";
 choices[78][3] = "Permite la utilizaci&oacute;n de diversos lenguajes de programaci&oacute;n, entre ellos Visual Basic Script y JScript";
 answers[78] = choices[78][0];
 units[78] = "115";
 comments[78] = "Id Pregunta: 8817. Examen UPM A2 2011";


//  Id pregunta: 8880 AÃ±o de creación de pregunta: 2011-01-01
 questions[79]= "80)  Un driver JDBC de tipo 4 es aquel que cumple:";
 choices[79]= new Array();
 choices[79][0] = "Es un driver escrito en java que habla con un middleware en el lado del servidor.";
 choices[79][1] = "Es un driver escrito en java que emplea el protocolo nativo de la base de datos.";
 choices[79][2] = "Es un driver que habla con la librer&iacute;a nativa de base de datos en el cliente y esta comunica por red con la base de datos.";
 choices[79][3] = "JDBC solamente tiene drivers de hasta tipo 3 inclusive.";
 answers[79] = choices[79][1];
 units[79] = "57, 58";
 comments[79] = "Id Pregunta: 8880. Examen UPM A2 2011";


//  Id pregunta: 9040 AÃ±o de creación de pregunta: 2011-01-01
 questions[80]= "81)  &iquest;Cu&aacute;l de los siguientes es un motor para la creaci&oacute;n de servicios Web en Java?";
 choices[80]= new Array();
 choices[80][0] = "Apache Axis2";
 choices[80][1] = "Hibernate";
 choices[80][2] = "Struts";
 choices[80][3] = "TopLink";
 answers[80] = choices[80][0];
 units[80] = "60";
 comments[80] = "Id Pregunta: 9040. NULL";


//  Id pregunta: 9117 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  &iquest;C&oacute;mo es el procesamiento en un sistema SIMD?";
 choices[81]= new Array();
 choices[81][0] = "As&iacute;ncrono";
 choices[81][1] = "Secuencial";
 choices[81][2] = "S&iacute;ncrono";
 choices[81][3] = "Ninguna respuesta es correcta";
 answers[81] = choices[81][2];
 units[81] = "45";
 comments[81] = "Id Pregunta: 9117. ";


//  Id pregunta: 9161 AÃ±o de creación de pregunta: 2013-01-01
 questions[82]= "83)  En el &aacute;mbito de los Sistemas de Informaci&oacute;n Geogr&aacute;fica, &iquest;qu&eacute; es un gazeteer?";
 choices[82]= new Array();
 choices[82][0] = "Directorio de referencias geogr&aacute;ficas";
 choices[82][1] = "Capa raster de informaci&oacute;n topol&oacute;gica";
 choices[82][2] = "Capa vectorial de informaci&oacute;n topol&oacute;gica";
 choices[82][3] = "Ninguna de las anteriores es correcta";
 answers[82] = choices[82][0];
 units[82] = "67";
 comments[82] = "Id Pregunta: 9161. NULL";


//  Id pregunta: 9216 AÃ±o de creación de pregunta: 2013-01-01
 questions[83]= "84)  Para extender las redes SAN qu&eacute; tipo de interconexiones se suelen utilizar:";
 choices[83]= new Array();
 choices[83][0] = "Sonet/SDH, WDM, ATM";
 choices[83][1] = "Sonet/SDH, WDM, ATM, iSCSI, FCIP, iFCP";
 choices[83][2] = "CWDM, DWDM, ATM, iSCSCI, FCIP, iFCP";
 choices[83][3] = "Sonet/SDN, WDM, ATM, iSCSI";
 answers[83] = choices[83][1];
 units[83] = "48";
 comments[83] = "Id Pregunta: 9216. ";


//  Id pregunta: 9358 AÃ±o de creación de pregunta: 2013-01-01
 questions[84]= "85)  &iquest;Cu&aacute;l es la nomenclatura que indica la capa f&iacute;sica del est&aacute;ndar IEEE 802.3ba que permite la transmisi&oacute;n a 40 Gbps sobre fibra monomodo?";
 choices[84]= new Array();
 choices[84][0] = "40GBASE-KR4";
 choices[84][1] = "4GBASE-SR40";
 choices[84][2] = "40GBASE-SR4";
 choices[84][3] = "40GBASE-LR4";
 answers[84] = choices[84][3];
 units[84] = "99";
 comments[84] = "Id Pregunta: 9358. Escala de Gesti&oacute;n de Sistemas de Sistemas de Informaci&oacute;n de la Xunta de Galicia. Acceso Libre 2011.";


//  Id pregunta: 9387 AÃ±o de creación de pregunta: 2013-01-01
 questions[85]= "86)  Se&ntilde;ale la respuesta correcta acerca de LTE:";
 choices[85]= new Array();
 choices[85][0] = "El HSS (Home Subscriber Server) es una base de datos distribuida que contiene informaci&oacute;n de los usuarios, sin entrar en funciones de Autenticaci&oacute;n, funci&oacute;n que lleva a cabo el eAUC.";
 choices[85][1] = "El Serving Gateway (SGW) tiene la funci&oacute;n de reenv&iacute;o y enrutado de paquetes de usuario, adem&aacute;s de ser el elemento que gestiona la movilidad entre eNodosB. Tambi&eacute;n gestiona la movilidad entre diferentes tecnolog&iacute;as de 3GPP. ";
 choices[85][2] = "El PGW (PDN Gateway) tiene la funci&oacute;n de reenv&iacute;o y enrutado de paquetes de usuario, adem&aacute;s de ser el elemento que gestiona la movilidad entre eNodosB. Tambi&eacute;n gestiona la movilidad entre diferentes tecnolog&iacute;as de 3GPP. ";
 choices[85][3] = "El MME (Mobility Management Entity) es un elemento responsable del control de la estaci&oacute;n base, siendo el interfaz a la red conmutada de LTE";
 answers[85] = choices[85][1];
 units[85] = "108";
 comments[85] = "Id Pregunta: 9387. NULL";


//  Id pregunta: 9756 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  &iquest;En qu&eacute; actividad de M&eacute;trica v3 se formaliza el Plan de Mantenimiento?";
 choices[86]= new Array();
 choices[86][0] = "IAS.3 Incorporaci&oacute;n del sistema al entorno de operaci&oacute;n";
 choices[86][1] = "IAS.7 Preparaci&oacute;n del Mantenimiento del sistema";
 choices[86][2] = "IAS.8 Establecimiento del acuerdo de nivel de servicio";
 choices[86][3] = "DSI.11 Establecimiento de requisitos de implantaci&oacute;n";
 answers[86] = choices[86][1];
 units[86] = "86";
 comments[86] = "Id Pregunta: 9756. IAS.7.2 Formalizaci&oacute;n del Plan de Mantenimiento";


//  Id pregunta: 9847 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  &iquest;C&oacute;mo se denomina el m&oacute;dulo criptogr&aacute;fico necesario para poder operar con el DNI electr&oacute;nico en un entorno UNIX?";
 choices[87]= new Array();
 choices[87][0] = "Cryptographic Service Provider (CSP).";
 choices[87][1] = "PKCS#11.";
 choices[87][2] = "PGP.";
 choices[87][3] = "Smart Card Mini-Driver.";
 answers[87] = choices[87][1];
 units[87] = "111";
 comments[87] = "Id Pregunta: 9847. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Extremadura 2014";


//  Id pregunta: 9932 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  Indique la opci&oacute;n falsa:";
 choices[88]= new Array();
 choices[88][0] = "En la capa de red, el modelo OSI s&oacute;lo considera comunicaci&oacute;n orientada a conexi&oacute;n.";
 choices[88][1] = "Igualmente, en la capa de transporte se ofrece s&oacute;lo comunicaci&oacute;n orientada a conexi&oacute;n.";
 choices[88][2] = "El modelo TCP/IP en la capa de red s&oacute;lo tiene el modo sin conexi&oacute;n.";
 choices[88][3] = "Todas son verdaderas.";
 answers[88] = choices[88][0];
 units[88] = "100";
 comments[88] = "Id Pregunta: 9932. NULL";


//  Id pregunta: 10150 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  En cumplimiento de la Ley 25/2007, de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones:";
 choices[89]= new Array();
 choices[89][0] = "Los operadores deben conservar el contenido de las comunicaciones";
 choices[89][1] = "El deber de conservaci&oacute;n se extiende a los datos relativos a las llamadas infructuosas";
 choices[89][2] = "La obligaci&oacute;n de conservaci&oacute;n de datos impuesta cesa a los cuatro meses computados desde la fecha en que se haya producido la comunicaci&oacute;n";
 choices[89][3] = "El plazo de ejecuci&oacute;n de la orden de cesi&oacute;n ser&aacute; el fijado por la resoluci&oacute;n judicial. Si no se establece otro plazo distinto, la cesi&oacute;n deber&aacute; efectuarse dentro de las setenta y dos horas contadas a partir de las 8:00 horas del d&iacute;a laborable siguiente a aqu&eacute;l en que el sujeto obligado reciba la orden.";
 answers[89] = choices[89][1];
 units[89] = "30";
 comments[89] = "Id Pregunta: 10150. ";


//  Id pregunta: 10161 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  &iquest;Cu&aacute;l de las siguientes afirmaciones es cierta en relaci&oacute;n con el c&aacute;lculo relacional?";
 choices[90]= new Array();
 choices[90][0] = "Lenguaje formal de consulta / acceso a un modelo relacional basado en la teor&iacute;a de conjuntos";
 choices[90][1] = "Lenguaje te&oacute;rico y de car&aacute;cter procedural que define un conjunto de operaciones aplicables sobre un modelo relacional";
 choices[90][2] = "Formalismo para expresar operaciones de consulta / acceso a un modelo relacional basado en la l&oacute;gica de predicados";
 choices[90][3] = "Ninguna de las anteriores";
 answers[90] = choices[90][2];
 units[90] = "58";
 comments[90] = "Id Pregunta: 10161. ";


//  Id pregunta: 10239 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  Qu&eacute; objetos nos encontramos en un servicio de directorios:";
 choices[91]= new Array();
 choices[91][0] = "EJB home interface";
 choices[91][1] = "Un componente EJB";
 choices[91][2] = "La API EJB";
 choices[91][3] = "Un objeto interface EJB";
 answers[91] = choices[91][0];
 units[91] = "116";
 comments[91] = "Id Pregunta: 10239. NULL";


//  Id pregunta: 10263 AÃ±o de creación de pregunta: 2014-01-01
 questions[92]= "93)  La inscripci&oacute;n de ficheros de titularidad p&uacute;blica en el Registro General de Protecci&oacute;n de Datos";
 choices[92]= new Array();
 choices[92][0] = "Puede hacerse de oficio por el propio registro, sin perjuicio de la obligaci&oacute;n de notificaci&oacute;n, si previamente se ha publicado en el diario oficial  correspondiente la norma o acuerdo que lo regule";
 choices[92][1] = "Puede hacerse de oficio por el propio registro, no siendo ya necesaria la notificaci&oacute;n, si previamente se ha publicado en el diario oficial  correspondiente la norma o acuerdo que lo regule";
 choices[92][2] = "Puede hacerse de oficio por el propio registro, sin perjuicio de la obligaci&oacute;n de notificaci&oacute;n, desde el momento en que se determina la necesidad de crear el fichero";
 choices[92][3] = "Puede hacerse de oficio por el propio registro, no siendo ya necesaria la notificaci&oacute;n, desde el momento en que se determina la necesidad de crear el fichero";
 answers[92] = choices[92][0];
 units[92] = "29";
 comments[92] = "Id Pregunta: 10263. Art&iacute;culo 63.1 y 63.2 del RD 1720/2007";


//  Id pregunta: 10285 AÃ±o de creación de pregunta: 2014-01-01
 questions[93]= "94)  RMAN es:";
 choices[93]= new Array();
 choices[93][0] = "Una especificaci&oacute;n de monitorizaci&oacute;n remota de IETF.";
 choices[93][1] = "Una invocaci&oacute;n de m&eacute;todos remotos utilizada en Java.";
 choices[93][2] = "Una herramienta de Oracle que permite hacer backups online de bases de datos.";
 choices[93][3] = "Una herramienta de IBM que permite realizar administraci&oacute;n remota de bases de datos.";
 answers[93] = choices[93][2];
 units[93] = "58";
 comments[93] = "Id Pregunta: 10285. TIC A2, libre, examen 2013";


//  Id pregunta: 10438 AÃ±o de creación de pregunta: 2014-01-01
 questions[94]= "95)  Para determinar la viabilidad de un proyecto a partir de las estimaciones coste/beneficio, METRICA 3 calcula su rentabilidad a trav&eacute;s de ";
 choices[94]= new Array();
 choices[94][0] = "el m&eacute;todo de la cadena de reemplazo.";
 choices[94][1] = "el m&eacute;todo de la anualidad equivalente.";
 choices[94][2] = "m&eacute;todos de coste total de propiedad (TCO).";
 choices[94][3] = "m&eacute;todos de Retorno de la Inversi&oacute;n o del Valor Actual Neto";
 answers[94] = choices[94][3];
 units[94] = "86";
 comments[94] = "Id Pregunta: 10438. Examen TIC A1 2013";


//  Id pregunta: 10692 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  La Ley 39/2015 es de aplicaci&oacute;n obligatoria:";
 choices[95]= new Array();
 choices[95][0] = "&Uacute;nicamente para la Administraci&oacute;n General del Estado.";
 choices[95][1] = "Para la Administraci&oacute;n General del Estado, Comunidades Aut&oacute;nomas y Administraci&oacute;n Local.";
 choices[95][2] = "Para la Administraci&oacute;n General del Estado, Comunidades Aut&oacute;nomas,  Administraci&oacute;n Local y Sector P&uacute;blico Institucional.";
 choices[95][3] = "Para la Administraci&oacute;n General del Estado, Comunidades Aut&oacute;nomas,  Administraci&oacute;n Local,  Sector P&uacute;blico Institucional y Corporaciones de Derecho P&uacute;blico.";
 answers[95] = choices[95][2];
 units[95] = "30";
 comments[95] = "Id Pregunta: 10692. ";


//  Id pregunta: 11241 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Sobre qu&eacute; actos un licitador puede interponer el recurso especial en materia de contrataci&oacute;n:";
 choices[96]= new Array();
 choices[96][0] = "&Uacute;nicamente los anuncios de licitaci&oacute;n y los pliegos de los contratos SARA.";
 choices[96][1] = "Los acuerdos de licitaci&oacute;n de cualquier contrato, sea o no SARA.";
 choices[96][2] = "Los anuncios de licitaci&oacute;n, los pliegos, los actos de tr&aacute;mite cualificados as&iacute; como los acuerdos de licitaci&oacute;n de los contratos SARA.";
 choices[96][3] = "Ninguna es verdadera.";
 answers[96] = choices[96][2];
 units[96] = "41";
 comments[96] = "Id Pregunta: 11241. ";


//  Id pregunta: 11400 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Seg&uacute;n ITIL v3, &iquest;qu&eacute; fase del ciclo de vida del servicio provee un marco de referencia para evaluar las capacidades del servicio y los perfiles de riesgo antes que un nuevo servicio o un cambio sea desplegado?";
 choices[97]= new Array();
 choices[97][0] = "Estrategia del servicio";
 choices[97][1] = "Mejora continua del servicio";
 choices[97][2] = "Transici&oacute;n del servicio";
 choices[97][3] = "Operaci&oacute;n del servicio";
 answers[97] = choices[97][2];
 units[97] = "98";
 comments[97] = "Id Pregunta: 11400. ";


//  Id pregunta: 11401 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de los siguientes no es un prop&oacute;sito u objetivo de la Gesti&oacute;n de la Disponibilidad?";
 choices[98]= new Array();
 choices[98][0] = "Monitorizar e informar sobre la disponibilidad de componentes";
 choices[98][1] = "Asegurar que la disponibilidad de los servicios se ajusta a las necesidades acordadas del negocio";
 choices[98][2] = "Evaluar el impacto de los cambios sobre el Plan de Disponibilidad";
 choices[98][3] = "Asegurar que los planes de continuidad del negocio est&aacute;n alineados con objetivos del negocio";
 answers[98] = choices[98][3];
 units[98] = "98";
 comments[98] = "Id Pregunta: 11401. ";


//  Id pregunta: 11460 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones es INCORRECTA, en referencia a los derechos de los usuarios finales contenidos en la Ley 9/2014:";
 choices[99]= new Array();
 choices[99][0] = "Los usuarios finales tienen derecho a resolver el contrato con un operador en cualquier momento.";
 choices[99][1] = "Los usuarios finales tienen derecho a la continuidad del servicio y a obtener una compensaci&oacute;n autom&aacute;tica por su interrupci&oacute;n.";
 choices[99][2] = "El plazo de cambio de operador debe ser como m&aacute;ximo de un d&iacute;a.";
 choices[99][3] = "Los usuarios finales tienen derecho a la desconexi&oacute;n de determinados servicios.";
 answers[99] = choices[99][2];
 units[99] = "110";
 comments[99] = "Id Pregunta: 11460. ";


