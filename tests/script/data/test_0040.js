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

//  Id pregunta: 41 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de las siguientes respuestas sobre el sistema operativo Unix es falsa?:";
 choices[0]= new Array();
 choices[0][0] = "Fue escrito en los laboratorios Bell de ATT por Ken Thompson en 1969";
 choices[0][1] = "Ultrix es una versi&oacute;n modificada del Unix comercializada por un determinado fabricante de sistemas inform&aacute;ticos ";
 choices[0][2] = "Es el sistema operativo con mayor cantidad de software ofim&aacute;tico desarrollado para &eacute;l";
 choices[0][3] = "La Universidad de Berkeley adapt&oacute; una versi&oacute;n ampliamente utilizada en los primeros a&ntilde;os en los ambientes universitarios";
 answers[0] = choices[0][2];
 units[0] = "40";
 comments[0] = "Id Pregunta: 41. ";


//  Id pregunta: 49 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Cu&aacute;l de los siguientes no es un m&eacute;todo para la ordenaci&oacute;n de alternativas en la selecci&oacute;n de bienes y servicios?:";
 choices[1]= new Array();
 choices[1][0] = "M&eacute;todo lexicogr&aacute;fico";
 choices[1][1] = "M&eacute;todo de Promethee";
 choices[1][2] = "M&eacute;todo Qualiflex";
 choices[1][3] = "M&eacute;todo heur&iacute;stico";
 answers[1] = choices[1][3];
 units[1] = "34";
 comments[1] = "Id Pregunta: 49. NULL";


//  Id pregunta: 76 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;Qu&eacute; organizaci&oacute;n se encarga de fijar los est&aacute;ndares federales de trantamiento de informaci&oacute;n que las agencias gubernamentales USA deben seguir en la contrataci&oacute;n de software y hardware?:";
 choices[2]= new Array();
 choices[2][0] = "ANSI";
 choices[2][1] = "IEEE";
 choices[2][2] = "NIST";
 choices[2][3] = "GOSIP";
 answers[2] = choices[2][2];
 units[2] = "42";
 comments[2] = "Id Pregunta: 76. ";


//  Id pregunta: 175 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  En el &aacute;mbito de la evoluci&oacute;n de la inform&aacute;tica en las organizaciones, se debe a Donovan un modelo que utiliza como variable:";
 choices[3]= new Array();
 choices[3][0] = "El presupuesto empleado en inform&aacute;tica";
 choices[3][1] = "La estructura organizativa";
 choices[3][2] = "El grado de distribuci&oacute;n";
 choices[3][3] = "El nivel de complejidad organizativa";
 answers[3] = choices[3][2];
 units[3] = "22";
 comments[3] = "Id Pregunta: 175. donovan - nolan";


//  Id pregunta: 220 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  En la planificaci&oacute;n de proyectos:";
 choices[4]= new Array();
 choices[4][0] = "Los diagramas de red (entre ellos PERT, ADM &ndash;actividad flecha-, y PDM &ndash;actividad nodo-)  presentan dependencias pero no informaci&oacute;n temporal.";
 choices[4][1] = "Los diagramas de red (entre ellos PERT, ADM &ndash;actividad flecha-, y PDM &ndash;actividad nodo-)  presentan dependencias e informaci&oacute;n temporal.";
 choices[4][2] = "Los gr&aacute;ficos de barras o de Gantt representan las dependencias entre tareas.";
 choices[4][3] = "El camino cr&iacute;tico en un proyecto ha de ser necesariamente &uacute;nico.";
 answers[4] = choices[4][0];
 units[4] = "27";
 comments[4] = "Id Pregunta: 220. La informaci&oacute;n temporal puede aparecer pero no siempre aparece";


//  Id pregunta: 243 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  En un sistema de informaci&oacute;n:";
 choices[5]= new Array();
 choices[5][0] = "En el nivel operacional se toman decisiones a plazo relativamente corto";
 choices[5][1] = "En el nivel estrat&eacute;gico se toman decisiones a plazo relativamente corto";
 choices[5][2] = "En el nivel operacional se recogen datos del sistema real";
 choices[5][3] = "En el nivel t&aacute;ctico se toman decisiones a largo plazo";
 answers[5] = choices[5][2];
 units[5] = "21";
 comments[5] = "Id Pregunta: 243. ";


//  Id pregunta: 330 AÃ±o de creación de pregunta: 2004-01-01
 questions[6]= "7)  La Comisi&oacute;n Interministerial para actuar contra las actividades vulneradoras de los derechos de propiedad intelectual e industrial (Comisi&oacute;n antipirater&iacute;a) fue creada por:";
 choices[6]= new Array();
 choices[6][0] = "RD 1228/2005, de 13 de octubre";
 choices[6][1] = "RDL 1/1996, de 12 de abril.";
 choices[6][2] = "RD 428/1993, de 26 de marzo.";
 choices[6][3] = "RD 114/2000, de 28 de enero.";
 answers[6] = choices[6][0];
 units[6] = "37";
 comments[6] = "Id Pregunta: 330. ";


//  Id pregunta: 363 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  Los beneficios en las inversiones en tecnolog&iacute;as de la informaci&oacute;n se pueden dividir en:";
 choices[7]= new Array();
 choices[7][0] = "Mejoras de productividad y mejoras financieras";
 choices[7][1] = "Mejoras de gesti&oacute;n, mejoras de organizaci&oacute;n y mejoras de competitividad";
 choices[7][2] = "Todas las anteriores son correctas";
 choices[7][3] = "Ninguna de las anteriores es correcta";
 answers[7] = choices[7][2];
 units[7] = "38";
 comments[7] = "Id Pregunta: 363. ";


//  Id pregunta: 463 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Supongamos que en un proyecto representado mediante un diagrama PERT una de las actividades sufre un retraso con respecto a la duraci&oacute;n inicialmente programada En tal caso:";
 choices[8]= new Array();
 choices[8][0] = "Se incrementa la duraci&oacute;n del camino cr&iacute;tico";
 choices[8][1] = "El camino cr&iacute;tico seguir&aacute; siendo el mismo";
 choices[8][2] = "No se puede afirmar con seguridad que le suceder&aacute; al camino cr&iacute;tico";
 choices[8][3] = "La fecha de finalizaci&oacute;n prevista podr&aacute; mantenerse s&oacute;lo si otra actividad ve acortada su duraci&oacute;n";
 answers[8] = choices[8][2];
 units[8] = "28";
 comments[8] = "Id Pregunta: 463. ";


//  Id pregunta: 469 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  Una amenaza es, de acuerdo a MAGERIT:";
 choices[9]= new Array();
 choices[9][0] = "Da&ntilde;o producido a una organizaci&oacute;n por un posible incidente";
 choices[9][1] = "Resultado de una agresi&oacute;n";
 choices[9][2] = "Evento que puede desencadenar un incidente en la organizaci&oacute;n, produciendo da&ntilde;os materiales o p&eacute;rdidas inmateriales";
 choices[9][3] = "Posibilidad de ocurrencia de un incidente";
 answers[9] = choices[9][2];
 units[9] = "31, 32, 33";
 comments[9] = "Id Pregunta: 469. ";


//  Id pregunta: 630 AÃ±o de creación de pregunta: 2006-01-01
 questions[10]= "11)  Cu&aacute;l de los siguientes derechos de explotaci&oacute;n no precisan la realizaci&oacute;n o autorizaci&oacute;n por parte del titular de un programa de ordenador, seg&uacute;n la ley espa&ntilde;ola de propiedad intelectual:";
 choices[10]= new Array();
 choices[10][0] = "Reproducci&oacute;n total o parcial.";
 choices[10][1] = "La realizaci&oacute;n de una copia de seguridad.";
 choices[10][2] = "Traducci&oacute;n, adaptaci&oacute;n o arreglo.";
 choices[10][3] = "Cualquier forma de distribuci&oacute;n p&uacute;blica.";
 answers[10] = choices[10][1];
 units[10] = "36";
 comments[10] = "Id Pregunta: 630. ";


//  Id pregunta: 950 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Codd  estableci&oacute; en 1986 doce principios, de los cuales al menos seis deben satisfacerse para que una base de datos pueda considerarse totalmente relacional. Entre ellos est&aacute;n:";
 choices[11]= new Array();
 choices[11][0] = "Acceso garantizado, cat&aacute;logo din&aacute;mico e independencia f&iacute;sica de los datos";
 choices[11][1] = "Gesti&oacute;n de una base de datos relacional, representaci&oacute;n de la informaci&oacute;n y regla de inversi&oacute;n";
 choices[11][2] = "Independencia de integridad, distribuci&oacute;n dependiente y sublenguaje global de datos";
 choices[11][3] = "Actualizaci&oacute;n de vistas, inserciones de alto nivel y n&uacute;cleo funcional independiente";
 answers[11] = choices[11][0];
 units[11] = "58";
 comments[11] = "Id Pregunta: 950. ";


//  Id pregunta: 1007 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  El concepto de trabajo en grupo o groupware se construy&oacute; alrededor de:";
 choices[12]= new Array();
 choices[12][0] = "Los productos de correo electr&oacute;nico";
 choices[12][1] = "Los procesadores de texto";
 choices[12][2] = "Las redes locales de &aacute;mbito de oficina";
 choices[12][3] = "Las hojas de c&aacute;lculo";
 answers[12] = choices[12][0];
 units[12] = "71";
 comments[12] = "Id Pregunta: 1007. ";


//  Id pregunta: 1064 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  El workflow es una categor&iacute;a de aplicaciones dentro del trabajo en grupo o groupware que permite:";
 choices[13]= new Array();
 choices[13][0] = "Desarrollo de aplicaciones multiusuario";
 choices[13][1] = "Desarrollo de aplicaciones de coordinaci&oacute;n de procesos";
 choices[13][2] = "Desarrollo de aplicaciones de flujo de datos";
 choices[13][3] = "Desarrollo de aplicaciones de mail inteligente";
 answers[13] = choices[13][1];
 units[13] = "71";
 comments[13] = "Id Pregunta: 1064. ";


//  Id pregunta: 1240 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  La resoluci&oacute;n distribuida de problemas (RDP) estudia sistemas inteligentes distribuidos, cuyos agentes cumplen unas caracter&iacute;sticas m&iacute;nimas de:";
 choices[14]= new Array();
 choices[14][0] = "Benevolencia, objetivos compartidos, dise&ntilde;o central";
 choices[14][1] = "Benevolencia, objetivos compartidos, dise&ntilde;o distribuido";
 choices[14][2] = "Benevolencia, objetivos propios. dise&ntilde;o distribuido";
 choices[14][3] = "Benevolencia,  objetivos propios, dise&ntilde;o central";
 answers[14] = choices[14][0];
 units[14] = "63";
 comments[14] = "Id Pregunta: 1240. ";


//  Id pregunta: 1520 AÃ±o de creación de pregunta: 2003-01-01
 questions[15]= "16)  C&oacute;mo objetos de una base de datos ORACLE, &iquest;cu&aacute;l es la diferencia principal entre una funci&oacute;n y un procedimiento?:";
 choices[15]= new Array();
 choices[15][0] = "Una funci&oacute;n no puede ejecutarse de forma nativa; un procedimiento si.";
 choices[15][1] = "Una funci&oacute;n puede invocar otra funci&oacute;n; un procedimiento no.";
 choices[15][2] = "Una funci&oacute;n est&aacute; almacenada en la base de datos; un procedimiento no.";
 choices[15][3] = "Una funci&oacute;n puede devolver un valor al programa que la invoca; un procedimiento no.";
 answers[15] = choices[15][3];
 units[15] = "58";
 comments[15] = "Id Pregunta: 1520. Junta Andaluc&iacute;a";


//  Id pregunta: 1769 AÃ±o de creación de pregunta: 2006-01-01
 questions[16]= "17)  Los applets de JAVA:";
 choices[16]= new Array();
 choices[16][0] = "Se puede incluir en una p&aacute;gina HTML de forma mediante una etiqueta especial &lt;add_applet&gt;";
 choices[16][1] = "Un applet nunca puede hacer conexiones a la m&aacute;quina de la que se descarg&oacute;.";
 choices[16][2] = "El navegador invoca el m&eacute;todo init() sobre un applet cada vez que se va a mostrar la p&aacute;gina que contiene &eacute;ste.";
 choices[16][3] = "Para firmar un applet se tiene que crear un fichero de archivo JAR con las clases que componen el applet, un fichero de metainformaci&oacute;n y el fichero de firma.";
 answers[16] = choices[16][3];
 units[16] = "60";
 comments[16] = "Id Pregunta: 1769. NULL";


//  Id pregunta: 1777 AÃ±o de creación de pregunta: 2006-01-01
 questions[17]= "18)  Se&ntilde;ale aqu&eacute;l tipo de software que se aleja m&aacute;s del concepto de software libre:";
 choices[17]= new Array();
 choices[17][0] = "Software de dominio p&uacute;blico";
 choices[17][1] = "Software bajo licencia GPL";
 choices[17][2] = "Shareware";
 choices[17][3] = "Software de descarga gratuita";
 answers[17] = choices[17][2];
 units[17] = "si";
 comments[17] = "Id Pregunta: 1777. ";


//  Id pregunta: 1836 AÃ±o de creación de pregunta: 2006-01-01
 questions[18]= "19)  El comercio electr&oacute;nico que se produce cuando se realiza una venta de un producto por Internet se identifica como:";
 choices[18]= new Array();
 choices[18][0] = "B2B";
 choices[18][1] = "B2C";
 choices[18][2] = "B2A";
 choices[18][3] = "B2G";
 answers[18] = choices[18][1];
 units[18] = "70";
 comments[18] = "Id Pregunta: 1836. NULL";


//  Id pregunta: 1844 AÃ±o de creación de pregunta: 2006-01-01
 questions[19]= "20)  Indique la respuesta falsa en relaci&oacute;n a las ventajas aportadas por una herramienta de Workflow:";
 choices[19]= new Array();
 choices[19][0] = "Incremento de la productividad";
 choices[19][1] = "Monitorizaci&oacute;n del estado de cualquier proceso";
 choices[19][2] = "Reducci&oacute;n de los tiempos muertos";
 choices[19][3] = "Todas las anteriores son ciertas";
 answers[19] = choices[19][3];
 units[19] = "71";
 comments[19] = "Id Pregunta: 1844. ";


//  Id pregunta: 2034 AÃ±o de creación de pregunta: 2004-01-01
 questions[20]= "21)  Cu&aacute;l de los siguientes es un formato de sonido:";
 choices[20]= new Array();
 choices[20][0] = "gif";
 choices[20][1] = "blob";
 choices[20][2] = "wcm";
 choices[20][3] = "rar";
 answers[20] = choices[20][2];
 units[20] = "94,95";
 comments[20] = "Id Pregunta: 2034. Similar a examen TIC SS A 2003";


//  Id pregunta: 2243 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  Cuando se ejecuta un programa OO (Orientado a Objetos) ocurren tres tipos de sucesos, identifique el incorrecto:";
 choices[21]= new Array();
 choices[21][0] = "Se crean objetos cuando se necesitan.";
 choices[21][1] = "Los mensajes se mueven de un objeto a otro, o desde un usuario a un objeto, seg&uacute;n se va procesando informaci&oacute;n o respondiendo a entradas de usuario.";
 choices[21][2] = "Se borran los objetos cuando ya no son necesarios.";
 choices[21][3] = "Se renombran los objetos cuando ya no son necesarios.";
 answers[21] = choices[21][3];
 units[21] = "82,84";
 comments[21] = "Id Pregunta: 2243. ";


//  Id pregunta: 2626 AÃ±o de creación de pregunta: 2003-01-01
 questions[22]= "23)  &iquest;En el Modelo Entidad Relaci&oacute;n, qu&eacute; es el tipo de correspondencia?";
 choices[22]= new Array();
 choices[22][0] = "Es el n&uacute;mero de entidades que participan en una asociaci&oacute;n.";
 choices[22][1] = "Representa el tipo de entidades que participan en una asociaci&oacute;n";
 choices[22][2] = "Es el n&uacute;mero m&iacute;nimo y m&aacute;ximo de ocurrencias de una entidad que pueden estar asociadas con una ocurrencia de otra u otras entidades participantes en la asociaci&oacute;n.";
 choices[22][3] = "Es el n&uacute;mero m&aacute;ximo de ocurrencias de cada entidad conectada que pueden intervenir en una ocurrencia de la asociaci&oacute;n.";
 answers[22] = choices[22][3];
 units[22] = "80";
 comments[22] = "Id Pregunta: 2626. ";


//  Id pregunta: 2811 AÃ±o de creación de pregunta: 2006-01-01
 questions[23]= "24)  Las Pruebas modulares en SW se pueden realizar";
 choices[23]= new Array();
 choices[23][0] = "Top-down, o de arriba abajo";
 choices[23][1] = "Bottom-up, o de abajo a arriba";
 choices[23][2] = "a) y b) son correctas";
 choices[23][3] = "Ninguna de las anteriores definiciones es correcta";
 answers[23] = choices[23][3];
 units[23] = "88";
 comments[23] = "Id Pregunta: 2811. NULL";


//  Id pregunta: 2837 AÃ±o de creación de pregunta: 2006-01-01
 questions[24]= "25)  En el modelo EFQM el atributo de calidad que recibe mayor ponderaci&oacute;n es:";
 choices[24]= new Array();
 choices[24][0] = "Resultados en cliente";
 choices[24][1] = "Procesos";
 choices[24][2] = "Liderazgo";
 choices[24][3] = "Gesti&oacute;n del Personal";
 answers[24] = choices[24][0];
 units[24] = "92";
 comments[24] = "Id Pregunta: 2837. NULL";


//  Id pregunta: 2908 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Dentro de  la metodolog&iacute;a MAGERIT V2 la definici&oacute;n: &quot;es el da&ntilde;o sobre el activo derivado de la materializaci&oacute;n de la amenaza&quot;, corresponde a:";
 choices[25]= new Array();
 choices[25][0] = "Amenazas";
 choices[25][1] = "Vulnerabilidad";
 choices[25][2] = "Impacto";
 choices[25][3] = "Riesgo";
 answers[25] = choices[25][2];
 units[25] = "33";
 comments[25] = "Id Pregunta: 2908. ";


//  Id pregunta: 2917 AÃ±o de creación de pregunta: 2009-01-01
 questions[26]= "27)  El riesgo es, de acuerdo a MAGERIT V2:";
 choices[26]= new Array();
 choices[26][0] = "Da&ntilde;o producido a una organizaci&oacute;n por un posible incidente";
 choices[26][1] = "Resultado de una agresi&oacute;n";
 choices[26][2] = "Posibilidad de ocurrencia de un incidente";
 choices[26][3] = "el impacto ponderado con la tasa de ocurrencia (o expectativa de materializaci&oacute;n) de la amenaza";
 answers[26] = choices[26][3];
 units[26] = "33";
 comments[26] = "Id Pregunta: 2917. ";


//  Id pregunta: 3310 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  &iquest;Qu&eacute; se entiende por 'modem de cable'?:";
 choices[27]= new Array();
 choices[27][0] = "A un cable inversor utilizado para la conexi&oacute;n entre dos dispositivos por el puerto serie";
 choices[27][1] = "A un cable utilizado para unir dos PCs por el puerto paralelo";
 choices[27][2] = "A un dispositivo que permite la transmisi&oacute;n de datos a alta velocidad a trav&eacute;s de una red de cable";
 choices[27][3] = "A un modem que no necesita fuente de alimentaci&oacute;n y que es del tama&ntilde;o de una 'caja de cerillas' que pr&aacute;cticamente que embutido en un cable";
 answers[27] = choices[27][2];
 units[27] = "105";
 comments[27] = "Id Pregunta: 3310. ";


//  Id pregunta: 3330 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  Al est&aacute;ndar de facto para la programaci&oacute;n de aplicaciones que se comunican entre ellos usando un interfaz TCP/IP se le denomina:";
 choices[28]= new Array();
 choices[28][0] = "pipes";
 choices[28][1] = "sockets";
 choices[28][2] = "sem&aacute;foros";
 choices[28][3] = "ninguno de los anteriores";
 answers[28] = choices[28][1];
 units[28] = "113";
 comments[28] = "Id Pregunta: 3330. ";


//  Id pregunta: 3415 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  H.320 es el est&aacute;ndar para:";
 choices[29]= new Array();
 choices[29][0] = "transmisi&oacute;n de paquetes multiplexados en redes digitales";
 choices[29][1] = "m&oacute;dems de banda ancha con correcci&oacute;n de errores";
 choices[29][2] = "videoconferencia multipunto sobre RDSI";
 choices[29][3] = "videconferencia multipunto sobre internet";
 answers[29] = choices[29][2];
 units[29] = "103,117";
 comments[29] = "Id Pregunta: 3415. ";


//  Id pregunta: 3563 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  En un entorno donde m&uacute;ltiples ordenadores cliente experimentan congesti&oacute;n accediendo a ficheros en unservidor centralizado:";
 choices[30]= new Array();
 choices[30][0] = "Un conmutador (switch) con un ancho de banda mayor dedicado a las puertas de los clientes ayudar&aacute; a aliviar la congesti&oacute;n en el servidor";
 choices[30][1] = "Un switch con el mismo ancho de banda para cada puerta asegurar&aacute; que se la carga de trabajo se distribuya";
 choices[30][2] = "Un an&aacute;lisis de las pautas de tr&aacute;fico y de los puntos cuellos de botella ayudar&aacute; a determinar el tipo de conmutador apropiado";
 choices[30][3] = "Un puente multipuerta proporcionar&aacute; acceso dedicado a la puerta del servidor y aliviar&aacute; la congesti&oacute;n";
 answers[30] = choices[30][2];
 units[30] = "102, 104";
 comments[30] = "Id Pregunta: 3563. ";


//  Id pregunta: 3589 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  La capa de acceso al medio en una red de &aacute;rea local se denomina:";
 choices[31]= new Array();
 choices[31][0] = "MAC";
 choices[31][1] = "ADSL";
 choices[31][2] = "BUS";
 choices[31][3] = "LLC";
 answers[31] = choices[31][0];
 units[31] = "101";
 comments[31] = "Id Pregunta: 3589. ";


//  Id pregunta: 3634 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  La RDSI (o ISDN):";
 choices[32]= new Array();
 choices[32][0] = "Implementa todas las capas del modelo OSI";
 choices[32][1] = "Implementa los protocolos TCP/IP";
 choices[32][2] = "Tiene un ancho de banda suficiente para la transmisi&oacute;n de v&iacute;deo sin comprimir";
 choices[32][3] = "Tiene un ancho de banda inferior al t&iacute;pico de las redes locales";
 answers[32] = choices[32][3];
 units[32] = "103";
 comments[32] = "Id Pregunta: 3634. ";


//  Id pregunta: 3922 AÃ±o de creación de pregunta: 2003-01-01
 questions[33]= "34)  Un documento multimedia se define como:";
 choices[33]= new Array();
 choices[33][0] = "Compuestos de audio y v&iacute;deo.";
 choices[33][1] = "Compuestos de se&ntilde;ales ni digitales ni digitalizadas.";
 choices[33][2] = "Compuestos de diferentes fuentes y estructuras que incorpora documentos digitales o digitalizados.";
 choices[33][3] = "Compuestos de diferentes fuentes y estructuras que incorpora no s&oacute;lo documentos digitales o digitalizados, sino tambi&eacute;n a los procedentes de otros tipos de se&ntilde;ales.";
 answers[33] = choices[33][3];
 units[33] = "93";
 comments[33] = "Id Pregunta: 3922. NULL";


//  Id pregunta: 3977 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  En relaci&oacute;n a los cables de par trenzado UTP y STP, indique cu&aacute;l de las siguientes afirmaciones es cierta.";
 choices[34]= new Array();
 choices[34][0] = "Las categor&iacute;as 1 y 2 de UTP se emplean para transmisi&oacute;n de datos X.25";
 choices[34][1] = "La categor&iacute;a 4 de UTP especifica cables hasta 20 MHz, se utilizan para voz y datos hasta 16 Mbps";
 choices[34][2] = "El tipo 6 de cable STP emplea 4 pares trenzados de mayor calibre que los de tipo 1";
 choices[34][3] = "Los cables STP, a pesar de su menor inmunidad a las interferencias, son los de mayor implantaci&oacute;n en los cableados estructurados.";
 answers[34] = choices[34][1];
 units[34] = "99";
 comments[34] = "Id Pregunta: 3977. ";


//  Id pregunta: 4074 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  &iquest;Qu&eacute; tipo de software es m&aacute;s costoso cuando lo compramos?";
 choices[35]= new Array();
 choices[35][0] = "El libre";
 choices[35][1] = "El comercial";
 choices[35][2] = "Los dos anteriores son igual de  costosos";
 choices[35][3] = "No hay una respuesta en terminos generales y depende casi siempre del software concreto del que hablemos";
 answers[35] = choices[35][1];
 units[35] = "61";
 comments[35] = "Id Pregunta: 4074. ";


//  Id pregunta: 4089 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  Cuando hablamos de tecnolog&iacute;a .NET, los interfaces de servicios";
 choices[36]= new Array();
 choices[36][0] = "Se denominan tambi&eacute;n fachadas empresariales";
 choices[36][1] = "permiten exponer el acceso a los datos como un servicio";
 choices[36][2] = "Interaccionan directamente con el usuario";
 choices[36][3] = "Ninguna de las anteriores es correcta";
 answers[36] = choices[36][0];
 units[36] = "115";
 comments[36] = "Id Pregunta: 4089. ";


//  Id pregunta: 4223 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  Indique cual de las siguientes afirmaciones con relaci&oacute;n a la RDSI (Red Digital de Servicios Integrados) no es correcta:";
 choices[37]= new Array();
 choices[37][0] = "Utiliza el sistema de se&ntilde;alizaci&oacute;n por canal comun CCITT n&ordm; 7 (CCS7)";
 choices[37][1] = "Emplea el canal D para el transporte de se&ntilde;alizaci&oacute;n mediante conmutaci&oacute;n de paquetes";
 choices[37][2] = "La velocidad de los canales B tanto en los accesos b&aacute;sicos como en los primarios es de 64 Kbps";
 choices[37][3] = "La velocidad de los canales D tanto en los accesos b&aacute;sicos como en los primarios es de 16 Kbps";
 answers[37] = choices[37][3];
 units[37] = "103";
 comments[37] = "Id Pregunta: 4223. ";


//  Id pregunta: 4300 AÃ±o de creación de pregunta: 2007-01-01
 questions[38]= "39)  &iquest;Qu&eacute; afirmaci&oacute;n es correcta acerca de las diferentes notaciones que se pueden emplear para la especificaci&oacute;n de requisitos del software?:";
 choices[38]= new Array();
 choices[38][0] = "El pseudoc&oacute;digo es una notaci&oacute;n especialmente indicada para describir los requisitos funcionales.";
 choices[38][1] = "El diccionario de datos es la manera m&aacute;s adecuada de describir las transformaciones ocurridas en los datos.";
 choices[38][2] = "El diagrama de flujo de datos se emplea para realizar la especificaci&oacute;n del comportamiento del sistema.";
 choices[38][3] = "El modelo E-R es una notaci&oacute;n gr&aacute;fica en la que se representan los flujos de datos y sus estados.";
 answers[38] = choices[38][2];
 units[38] = "78";
 comments[38] = "Id Pregunta: 4300. ";


//  Id pregunta: 4309 AÃ±o de creación de pregunta: 2007-01-01
 questions[39]= "40)  Ernesto es un jefe de proyecto que en una nueva aplicaci&oacute;n que est&aacute; realizando en su Ministerio ha decidido emplear la tecnolog&iacute;a CORBA de objetos distribuidos. La raz&oacute;n m&aacute;s probable por la que Ernesto ha decidido utilizar CORBA es";
 choices[39]= new Array();
 choices[39][0] = "CORBA es la tecnolog&iacute;a de objetos distribuidos m&aacute;s sencilla";
 choices[39][1] = "CORBA es multilenguaje, con interfaces Fortran, Java, Lisp, Ada, etc.";
 choices[39][2] = "CORBA es ideal para sistemas cerrados Java";
 choices[39][3] = "CORBA es una tecnolog&iacute;a de Microsoft, y se adapta muy bien para desarrollos en Visual Basic y J++";
 answers[39] = choices[39][1];
 units[39] = "62";
 comments[39] = "Id Pregunta: 4309. ";


//  Id pregunta: 4391 AÃ±o de creación de pregunta: 2007-01-01
 questions[40]= "41)  En la elaboraci&oacute;n e los DFD de un Sistema para la Gesti&oacute;n de Concursos de Provisi&oacute;n de Puestos de un Ministerio, &iquest;c&oacute;mo representar&iacute;a la publicaci&oacute;n en el BOE de las bases de concurso?";
 choices[40]= new Array();
 choices[40][0] = "Mediante un flujo de datos desde el proceso &ldquo;Generaci&oacute;n de bases&rdquo; al proceso &ldquo;Publicaci&oacute;n en el BOE&rdquo;.";
 choices[40][1] = "Mediante un flujo de datos desde el almac&eacute;n &ldquo;Bases de Concursos&rdquo; al proceso &ldquo;Publicaci&oacute;n en el BOE&rdquo;.";
 choices[40][2] = "Mediante un flujo de datos desde el almac&eacute;n &ldquo;Bases de Concursos&rdquo; a la entidad externa &ldquo;BOE&rdquo;.";
 choices[40][3] = "Mediante un flujo de datos desde el proceso &ldquo;Generaci&oacute;n de bases&rdquo; a la entidad externa &ldquo;BOE&rdquo;.";
 answers[40] = choices[40][3];
 units[40] = "81";
 comments[40] = "Id Pregunta: 4391. ";


//  Id pregunta: 4393 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  &iquest;Cu&aacute;l de las siguientes afirmaciones es incorrecta, cuando estamos hablando del mantenimiento del software?";
 choices[41]= new Array();
 choices[41][0] = "Un sistema de informaci&oacute;n debe concebirse como algo est&aacute;tico, que permanece invariable desde que se crea hasta su extinci&oacute;n, pues de otro modo, nunca se pueden estabilizar los requisitos funcionales de dicho sistema.";
 choices[41][1] = "Los productos software requieren una evoluci&oacute;n continua durante todo su ciclo de vida para irse adaptando a las nuevas necesidades.";
 choices[41][2] = "La evoluci&oacute;n del sistema de informaci&oacute;n tiene como finalidad &uacute;ltima su adecuaci&oacute;n al entorno, de forma que se adapte para realizar nuevas funciones, trabajar m&aacute;s efectivamente o m&aacute;s correctamente.";
 choices[41][3] = "La necesidad de evoluci&oacute;n de los sistemas de informaci&oacute;n hace muy recomendable utilizar una metodolog&iacute;a fiable que permita gestionar los cambios y evaluar el correcto funcionamiento del sistema una vez realizados los cambios necesarios.";
 answers[41] = choices[41][0];
 units[41] = "76";
 comments[41] = "Id Pregunta: 4393. ";


//  Id pregunta: 4463 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  Respecto a los servicios Web, podemos afirmar que:";
 choices[42]= new Array();
 choices[42][0] = "WDSL define los criterios para los registros basados en Ia red.";
 choices[42][1] = "XML busca Ia definici&oacute;n y descripci&oacute;n de los servicios Web";
 choices[42][2] = "SOAP proporciona una manera estandar de transportar mensajes para el use de servicios Web";
 choices[42][3] = "UUID define un protocolo de comunicaci&oacute;n f&iacute;sica entre ordenadores.";
 answers[42] = choices[42][2];
 units[42] = "51";
 comments[42] = "Id Pregunta: 4463. NULL";


//  Id pregunta: 4487 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  En un sistema de gesti&oacute;n de red, Ia base de datos MIB (Management Information Base):";
 choices[43]= new Array();
 choices[43][0] = "Identifica el elemento de administraci&oacute;n central de Ia red.";
 choices[43][1] = "Especifica los elementos y Ia parte de los datos que un nodo debe conservar, asi Como las operaciones que se permiten sobre cada uno de ellos";
 choices[43][2] = "Establece Ia conexi&oacute;n entre el nodo administrado y la estaci&oacute;n administradora central.";
 choices[43][3] = "Es una Unidad de Datos del Protocolo (6 PDU) de gesti&oacute;n de red.";
 answers[43] = choices[43][1];
 units[43] = "104";
 comments[43] = "Id Pregunta: 4487. ";


//  Id pregunta: 4545 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  Indique cual de las siguientes afirmaciones es falsa:";
 choices[44]= new Array();
 choices[44][0] = "El sistema GPRS permite el env&iacute;o de paquetes de datos sobre la red GSM.";
 choices[44][1] = "El sistema GPRS utiliza los mismos recursos de la interfaz radio del sistema GSM.";
 choices[44][2] = "En una misma celda no pueden coexistir canales GPRS y GSM.";
 choices[44][3] = "Un canal GPRS solo se asigna al usuario cuando se transmiten o reciben paquetes, mientras que un canal GSM se asigna de forma permanente al usuario durante toda la llamada.";
 answers[44] = choices[44][2];
 units[44] = "108";
 comments[44] = "Id Pregunta: 4545. ";


//  Id pregunta: 4552 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  El articulo 60 del RD Legislativo 3/2011 de Contratos del Sector P&uacute;blico establece que en ning&uacute;n caso podr&aacute;n contratar con la Administraci&oacute;n las personas en quienes concurra alguna de las circunstancias siguientes:";
 choices[45]= new Array();
 choices[45][0] = "haber dado lugar, por causa de la que hubiesen sido declarados culpables ,a la suspensi&oacute;n de cualquier contrato celebrado con Ia Administraci&oacute;n";
 choices[45][1] = "no hallarse al corriente en el cumplimiento de las obligaciones tributarias o de Seguridad Social impuestas por las disposiciones vigentes, en los t&eacute;rminos que reglamentariamente se determine.";
 choices[45][2] = "no hallarse debidamente clasificadas, en su caso conforme a lo dispuesto en la Ley de Contratos del Sector P&uacute;blico o no acreditar la suficiente solvencia econ&oacute;mica, practica y t&eacute;cnica.";
 choices[45][3] = "haber incurrido en falsedad al facilitar a la Administraci&oacute;n las declaraciones exigibles en el cumplimiento de las disposiciones de esta Ley y de sus normas de desarrollo.";
 answers[45] = choices[45][1];
 units[45] = "41";
 comments[45] = "Id Pregunta: 4552. ";


//  Id pregunta: 4817 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos de ISOC (Internet Society) tiene la responsabilidad de desarrollar lasespecificaciones de est&aacute;ndares en Internet?";
 choices[46]= new Array();
 choices[46][0] = "IESG (Internet Engineering Steering Group)";
 choices[46][1] = "IETF (Internet Engineering Task Force)";
 choices[46][2] = "IAB (Internet Architecture Board)";
 choices[46][3] = "IANA (Internet Assigned Number Authority)";
 answers[46] = choices[46][1];
 units[46] = "112,42";
 comments[46] = "Id Pregunta: 4817. ";


//  Id pregunta: 5056 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  Indique qu&eacute; informaci&oacute;n de las siguientes NO aporta un URL (Localizador Universal de Recurso) para identificar unrecurso de la web:";
 choices[47]= new Array();
 choices[47][0] = "El nombre del recurso";
 choices[47][1] = "El tipo del recurso";
 choices[47][2] = "Donde se encuentra el recurso";
 choices[47][3] = "El protocolo que hay que usar para obtener el recurso";
 answers[47] = choices[47][1];
 units[47] = "112";
 comments[47] = "Id Pregunta: 5056. Examen TIC A 2007";


//  Id pregunta: 5125 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l de los siguientes acr&oacute;nimos hace referencia a un est&aacute;ndar de modelo de agregaci&oacute;n de contenidos Web para eLearning?";
 choices[48]= new Array();
 choices[48][0] = "CORBA";
 choices[48][1] = "OWR";
 choices[48][2] = "SCORM";
 choices[48][3] = "IQC";
 answers[48] = choices[48][2];
 units[48] = "66";
 comments[48] = "Id Pregunta: 5125. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5206 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  En M&eacute;trica v.3 la actividad &ldquo;Revisi&oacute;n de la formaci&oacute;n a usuarios finales&rdquo; del Aseguramiento de la Calidad corresponde al proceso:";
 choices[49]= new Array();
 choices[49][0] = "An&aacute;lisis del Sistema de Informaci&oacute;n";
 choices[49][1] = "Construcci&oacute;n del Sistema de Informaci&oacute;n";
 choices[49][2] = "Implantaci&oacute;n y aceptaci&oacute;n del Sistema";
 choices[49][3] = "Mantenimiento del Sistema de informaci&oacute;n";
 answers[49] = choices[49][1];
 units[49] = "86";
 comments[49] = "Id Pregunta: 5206. NULL";


//  Id pregunta: 5241 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  Respecto al an&aacute;lisis D.A.F.O indique la opci&oacute;n incorrecta ";
 choices[50]= new Array();
 choices[50][0] = "Herramienta estrat&eacute;gica por excelencia cuyo objetivo es conocer la situaci&oacute;n real de una organizaci&oacute;n, as&iacute; como los riesgos y oportunidades que le brinda el mercado";
 choices[50][1] = "Tambi&eacute;n llamado Matriz TOWS en terminolog&iacute;a anglosajona";
 choices[50][2] = "Las amenazas y oportunidades corresponden al entorno interno de la organizaci&oacute;n, debiendo &eacute;sta a aprovecharlas o superarlas, anticip&aacute;ndose a las mismas";
 choices[50][3] = "Las fortalezas suponen ventaja competitiva que pueden servir para explotar oportunidades";
 answers[50] = choices[50][2];
 units[50] = "77";
 comments[50] = "Id Pregunta: 5241. ";


//  Id pregunta: 5504 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  Se&ntilde;ala la caracter&iacute;sitca incorrecta respecto a AJAX:";
 choices[51]= new Array();
 choices[51][0] = "Incorpora caracter&iacute;sticas propias de aplicaciones tipo push";
 choices[51][1] = "Requiere Flash para su ejecuci&oacute;n";
 choices[51][2] = "Se basa en JavaScript y XML";
 choices[51][3] = "Actualiza los datos de la interfaz de forma espontanea";
 answers[51] = choices[51][1];
 units[51] = "69";
 comments[51] = "Id Pregunta: 5504. NULL";


//  Id pregunta: 5687 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  Se&ntilde;ale cual de los siguientes datos se encuentra en la zona p&uacute;blica del chip criptogr&aacute;fico del DNI electr&oacute;nico:";
 choices[52]= new Array();
 choices[52][0] = "Certificado de autenticaci&oacute;n";
 choices[52][1] = "Certificados de la autoridad de certificaci&oacute;n";
 choices[52][2] = "Datos biom&eacute;tricos";
 choices[52][3] = "Claves privadas del ciudadano";
 answers[52] = choices[52][1];
 units[52] = "74";
 comments[52] = "Id Pregunta: 5687. NULL";


//  Id pregunta: 5737 AÃ±o de creación de pregunta: 2009-01-01
 questions[53]= "54)  &iquest;Qu&eacute; caracter&iacute;sticas debe reunir, entre otras, la firma electr&oacute;nica avanzada?";
 choices[53]= new Array();
 choices[53][0] = "Usar un certificado X.509";
 choices[53][1] = "Usar medios de criptograf&iacute;a asim&eacute;trica";
 choices[53][2] = "Que el firmante tenga bajo su exclusivo control los medios de creaci&oacute;n de firma";
 choices[53][3] = "Que el canal de comunicaci&oacute;n por el que se transfiere la firma sea seguro";
 answers[53] = choices[53][2];
 units[53] = "72";
 comments[53] = "Id Pregunta: 5737. ";


//  Id pregunta: 5798 AÃ±o de creación de pregunta: 2009-01-01
 questions[54]= "55)  Indique cuales son las funciones fundamentales del Comit&eacute; Sectorial de Administraci&oacute;n electr&oacute;nica.";
 choices[54]= new Array();
 choices[54][0] = "Asegurar la compatibilidad e interoperabilidad de los sistemas y aplicaciones usados por las Administraciones P&uacute;blicas. Preparar planes de acci&oacute;n conjuntos y programas, para fomentar el desarrollo de la administraci&oacute;n electr&oacute;nica en Espa&ntilde;a.";
 choices[54][1] = "Desarrollar servicios centrados en los ciudadanos";
 choices[54][2] = "La reutilizaci&oacute;n de los desarrollos y soluciones por todas las Comunidades Aut&oacute;nomas.";
 choices[54][3] = "Incorporar a todas las Comunidades Aut&oacute;nomas a la red de atenci&oacute;n integral a los ciudadanos, Red 060.";
 answers[54] = choices[54][0];
 units[54] = "30";
 comments[54] = "Id Pregunta: 5798. MAP 2008 A2";


//  Id pregunta: 5916 AÃ±o de creación de pregunta: 2009-01-01
 questions[55]= "56)  Con relaci&oacute;n a Internet, cu&aacute;l de las expresiones siguientes es INCORRECTA:";
 choices[55]= new Array();
 choices[55][0] = "Cualquier persona puede enviar memoranda propuestos para ser RFC (Request For Comments)";
 choices[55][1] = "Cada RFC tiene un t&iacute;tulo y un n&uacute;mero asignado, que no puede repetirse ni eliminarse aunque el documento se quede obsoleto";
 choices[55][2] = "Los RFCs se han publicado tradicionalmente en texto ASCII";
 choices[55][3] = "Un STD contiene siempre varios RFCs de protocolos dependientes entre s&iacute;";
 answers[55] = choices[55][3];
 units[55] = "42";
 comments[55] = "Id Pregunta: 5916. MAP 2008 A1";


//  Id pregunta: 5950 AÃ±o de creación de pregunta: 2009-01-01
 questions[56]= "57)  &iquest;Qu&eacute; es un sistema IDM (Identity Manager)?";
 choices[56]= new Array();
 choices[56][0] = "Es una plataforma que permite gestionar desde un s&oacute;lo punto el ciclo de vida de una identidad";
 choices[56][1] = "Es cualquier sistema de gesti&oacute;n de usuarios.";
 choices[56][2] = "Es una plataforma de gesti&oacute;n de PKI para proporcionar tarjetas de identificaci&oacute;n a los empleados de la organizaci&oacute;n.";
 choices[56][3] = "Es una plataforma que impide la descentralizaci&oacute;n de la administraci&oacute;n de los sistemas de control de acceso basados en roles.";
 answers[56] = choices[56][0];
 units[56] = "118";
 comments[56] = "Id Pregunta: 5950. ";


//  Id pregunta: 6007 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  La accesibilidad universal:";
 choices[57]= new Array();
 choices[57][0] = "Es un principio recogido y definido en la legislaci&oacute;n espa&ntilde;ola.";
 choices[57][1] = "Es un t&eacute;rmino utilizado en la documentaci&oacute;n sobre accesibilidad, pero no tiene una definici&oacute;n formal en Espa&ntilde;a.";
 choices[57][2] = "Se trata de un concepto que s&oacute;lo se aplica a las personas del medio rural.";
 choices[57][3] = "Es un concepto equivalente a la definici&oacute;n de usabilidad que se da en la ISO/IEC 9241.";
 answers[57] = choices[57][0];
 units[57] = "39";
 comments[57] = "Id Pregunta: 6007. TIC A 2009";


//  Id pregunta: 6100 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  Acerca de las Autoridades de sellado de tiempo:";
 choices[58]= new Array();
 choices[58][0] = "Para expedir su certificado precisan conocer en su integridad el documento.";
 choices[58][1] = "En el modo de registros encadenados aplican iterativamente una funci&oacute;n resumen (hash) a la concatenaci&oacute;n del resumen del mensaje a sellar con el resultado de la iteraci&oacute;n anterior.";
 choices[58][2] = "En el modo de firma digital firman la concatenaci&oacute;n de los mensajes a sellar con el tiempo.";
 choices[58][3] = "No pueden ser simult&aacute;neamente Prestadores de Servicios de Certificaci&oacute;n seg&uacute;n la definici&oacute;n que de &eacute;stos da la Ley 59/2003 de firma electr&oacute;nica.";
 answers[58] = choices[58][1];
 units[58] = "74";
 comments[58] = "Id Pregunta: 6100. TIC A 2009";


//  Id pregunta: 6141 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  &iquest;Qu&eacute; es el MOS (Mean Opinion Score)?";
 choices[59]= new Array();
 choices[59][0] = "Es una medida subjetiva de calidad de sonido, que se suele utilizar en sistemas de VoIP";
 choices[59][1] = "Es una de la pr&aacute;cticas que propone M&eacute;trica 3 para las reuniones de trabajo, junto con las reuniones, las entrevistas y el JAD (Joint Application Design)";
 choices[59][2] = "Es una t&eacute;cnica de estimaci&oacute;n de esfuerzo software, que se utiliza, por ejemplo, cuando no hay datos suficientes para estimar puntos funci&oacute;n";
 choices[59][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[59] = choices[59][0];
 units[59] = "100, 109";
 comments[59] = "Id Pregunta: 6141. ";


//  Id pregunta: 6254 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  Una de las tareas de los Analistas en la gesti&oacute;n del proceso de desarrollo es:";
 choices[60]= new Array();
 choices[60][0] = "Dar seguimiento al plan de trabajo y corregir las desviaciones a tiempo";
 choices[60][1] = "Construir el c&oacute;digo que dar&aacute; lugar al producto resultante";
 choices[60][2] = "Fijar el calendario de hitos y entregas";
 choices[60][3] = "Mantener entrevistas y sesiones de trabajo con los responsables de la organizaci&oacute;n y los usuarios";
 answers[60] = choices[60][3];
 units[60] = "79";
 comments[60] = "Id Pregunta: 6254. TICB-2009, bloque desarrollo";


//  Id pregunta: 6304 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  &iquest;Cu&aacute;l de los siguientes no es un componente de CORBA?";
 choices[61]= new Array();
 choices[61][0] = "Dynamic Invocation Interface (DII) ";
 choices[61][1] = "Object Request Broker (ORB) ";
 choices[61][2] = "Dynamic Skeleton Interface (DSI)";
 choices[61][3] = "Todos lo son";
 answers[61] = choices[61][3];
 units[61] = "82";
 comments[61] = "Id Pregunta: 6304. ";


//  Id pregunta: 6405 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  &iquest;Cu&aacute;l es la duraci&oacute;n de los derechos de explotaci&oacute;n, cuando el autor de un programa de ordenador sea una persona jur&iacute;dica?";
 choices[62]= new Array();
 choices[62][0] = "Sesenta a&ntilde;os, computados desde el d&iacute;a 1 de enero del a&ntilde;o siguiente a la muerte del representante de la persona jur&iacute;dica.";
 choices[62][1] = "Sesenta a&ntilde;os, computados desde el d&iacute;a 1 de enero del a&ntilde;o siguiente al de la divulgaci&oacute;n l&iacute;cita del programa";
 choices[62][2] = "Setenta a&ntilde;os, computados desde el d&iacute;a 1 de enero del a&ntilde;o siguiente al de la divulgaci&oacute;n l&iacute;cita del programa";
 choices[62][3] = "Cincuenta a&ntilde;os, computados desde el d&iacute;a 1 de enero del a&ntilde;o siguiente a la muerte del representante de la persona jur&iacute;dica.";
 answers[62] = choices[62][2];
 units[62] = "36";
 comments[62] = "Id Pregunta: 6405. Art&iacute;culo 98 RDL 1/1996";


//  Id pregunta: 6470 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  La metodolog&iacute;a M&eacute;trica V3 plantea la t&eacute;cnica de los casos de uso en la obtenci&oacute;n de requisitos en ASI:";
 choices[63]= new Array();
 choices[63][0] = "Como obligatoria en el desarrollo estructurado y opcional en orientaci&oacute;n a objetos";
 choices[63][1] = "Como opcional en el desarrollo estructurado y obligatoria en orientaci&oacute;n a objetos";
 choices[63][2] = "Como obligatoria, tanto en desarrollo estructurado como en orientaci&oacute;n a objetos";
 choices[63][3] = "Como opcional, tanto en desarrollo estructurado como en orientaci&oacute;n a objetos";
 answers[63] = choices[63][1];
 units[63] = "86";
 comments[63] = "Id Pregunta: 6470. Castilla La Mancha 2009";


//  Id pregunta: 6547 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  Qu&eacute; pol&iacute;tica de control aplica cuando la infraestructura usa un modelo no discrecional?";
 choices[64]= new Array();
 choices[64][0] = "Basado en reglas";
 choices[64][1] = "Basado en roles";
 choices[64][2] = "Basado en identidades";
 choices[64][3] = "MAC";
 answers[64] = choices[64][1];
 units[64] = "111";
 comments[64] = "Id Pregunta: 6547. NULL";


//  Id pregunta: 6581 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  &iquest;Cu&aacute;l es el Reglamento de desarrollo de la LOPD actualmente vigente?";
 choices[65]= new Array();
 choices[65][0] = "RD 994/1999";
 choices[65][1] = "RD 1720/2007";
 choices[65][2] = "A y B son correctas";
 choices[65][3] = "A y B son incorrectas";
 answers[65] = choices[65][1];
 units[65] = "29";
 comments[65] = "Id Pregunta: 6581. NULL";


//  Id pregunta: 6629 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  El modelo CMM de Ingenier&iacute;a de Software ofrece dos representaciones que se denominan:";
 choices[66]= new Array();
 choices[66][0] = "Continua y Discontinua";
 choices[66][1] = "Continua y Por Et&aacute;pas";
 choices[66][2] = "Por &Aacute;reas Clave y Caracter&iacute;sticas";
 choices[66][3] = "Continua y Por &Aacute;reas Clave";
 answers[66] = choices[66][1];
 units[66] = "87";
 comments[66] = "Id Pregunta: 6629. NULL";


//  Id pregunta: 7165 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  &iquest;Cu&aacute;l de las siguientes es una sentencia SQL de tipo DDL (Data Definition Language)?";
 choices[67]= new Array();
 choices[67][0] = "SELECT";
 choices[67][1] = "DROP";
 choices[67][2] = "INSERT";
 choices[67][3] = "DELETE";
 answers[67] = choices[67][1];
 units[67] = "58";
 comments[67] = "Id Pregunta: 7165. Examen TIC B 2009";


//  Id pregunta: 7251 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)  El protocolo FTP es un protocolo:";
 choices[68]= new Array();
 choices[68][0] = "Seguro";
 choices[68][1] = "No orientado a conexi&oacute;n";
 choices[68][2] = "De nivel de aplicaci&oacute;n";
 choices[68][3] = "Dise&ntilde;ado para gestionar se&ntilde;alizaci&oacute;n de red";
 answers[68] = choices[68][2];
 units[68] = "100";
 comments[68] = "Id Pregunta: 7251. Examen TIC B 2009";


//  Id pregunta: 7318 AÃ±o de creación de pregunta: 2010-01-01
 questions[69]= "70)  Se&ntilde;ala cu&aacute;l de los siguientes lenguajes de programaci&oacute;n no tiene alguna implementaci&oacute;n para el Framework .NET:";
 choices[69]= new Array();
 choices[69][0] = "COBOL";
 choices[69][1] = "Fortran";
 choices[69][2] = "Delphi";
 choices[69][3] = "Todos los lenguajes anteriores tienen alguna implementaci&oacute;n para el Framework .NET";
 answers[69] = choices[69][3];
 units[69] = "59";
 comments[69] = "Id Pregunta: 7318. NULL";


//  Id pregunta: 8191 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  Indique cu&aacute;l de los siguientes sistemas NO permite direccionar ficheros de un Terabyte:";
 choices[70]= new Array();
 choices[70][0] = "AdvFS";
 choices[70][1] = "MFS";
 choices[70][2] = "JFS2 ";
 choices[70][3] = "XFS";
 answers[70] = choices[70][1];
 units[70] = "48, 52";
 comments[70] = "Id Pregunta: 8191. Examen TIC A1 2010";


//  Id pregunta: 8206 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  En relaci&oacute;n con los perfiles de participantes, seg&uacute;n M&Eacute;TRICA versi&oacute;n 3, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[71]= new Array();
 choices[71][0] = "Son 5: Directivo, Jefe de Proyecto, Consultor, Analista y Programador.";
 choices[71][1] = "Son 7: Director, Jefe de Proyecto, Equipo de Proyecto y Responsables de Arquitectura, Seguridad, Sistemas yOperaciones.";
 choices[71][2] = "Son 8: Directivo, Jefe de Proyecto, Equipo de Proyecto, Usuarios expertos y Responsables de Arquitectura, Seguridad,Sistemas y Operaciones.";
 choices[71][3] = "Son 5: Directivo, Jefe de Proyecto, Equipo de Proyecto, Usuarios expertos y Responsable de Calidad.";
 answers[71] = choices[71][0];
 units[71] = "86";
 comments[71] = "Id Pregunta: 8206. Examen TIC A1 2010";


//  Id pregunta: 8385 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  &iquest;Cu&aacute;l de los siguientes protocolos de enrutamiento NO soporta VLSM (Variable Length Subnet Mask - M&aacute;scara de subred de tama&ntilde;o variable)?:";
 choices[72]= new Array();
 choices[72][0] = "RIPv2.";
 choices[72][1] = "EIGRP.";
 choices[72][2] = "IGRP.";
 choices[72][3] = "OSPF.";
 answers[72] = choices[72][2];
 units[72] = "112,102";
 comments[72] = "Id Pregunta: 8385. Examen TIC A2 2010";


//  Id pregunta: 8412 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  &iquest;Qu&eacute; realiza la sentencia &quot;df -h | grep / unidad/temporal | grep -v grep I wc -l&quot; en el sistema operativo Linux? ";
 choices[73]= new Array();
 choices[73][0] = "Cuenta el n&uacute;mero de f&iacute;cheros que se llaman temporal. ";
 choices[73][1] = "Lista las unidades extra&iacute;bles del sistema. ";
 choices[73][2] = "Cuenta el n&uacute;mero de filesystems que contienen /unidad/temporal en su path de montaje. ";
 choices[73][3] = "Cuenta el n&uacute;mero de procesos cuyo nombre contiene /unidad/temporal. ";
 answers[73] = choices[73][2];
 units[73] = "53, 54";
 comments[73] = "Id Pregunta: 8412. Examen TIC A2 2010";


//  Id pregunta: 8633 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  &iquest;A qu&eacute; perfil pertenece el Responsable de Calidad seg&uacute;n M&eacute;trica v3?";
 choices[74]= new Array();
 choices[74][0] = "Perfil Jefe de Proyecto.";
 choices[74][1] = "Perfil Consultor.";
 choices[74][2] = "Perfil Analista.";
 choices[74][3] = "Perfil Programador.";
 answers[74] = choices[74][0];
 units[74] = "86";
 comments[74] = "Id Pregunta: 8633. Examen TIC A2 2010 interna";


//  Id pregunta: 8666 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  Indicar entre las siguientes normas del IEEE la que trata sobre redes de fibra &oacute;ptica:";
 choices[75]= new Array();
 choices[75][0] = "802.6";
 choices[75][1] = "802.7";
 choices[75][2] = "802.8";
 choices[75][3] = "802.9";
 answers[75] = choices[75][2];
 units[75] = "101";
 comments[75] = "Id Pregunta: 8666. Examen UPM A2 2011";


//  Id pregunta: 8677 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  &iquest;Cu&aacute;l de las siguientes es una nueva entidad funcional introducida por IP M&oacute;vil (RFC 3344)?";
 choices[76]= new Array();
 choices[76][0] = "Home Agent.";
 choices[76][1] = "Agent Advertisement.";
 choices[76][2] = "Mobility Agent.";
 choices[76][3] = "Agent Discovery.";
 answers[76] = choices[76][0];
 units[76] = "100";
 comments[76] = "Id Pregunta: 8677. Examen UPM A2 2011";


//  Id pregunta: 8759 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  &iquest;Cu&aacute;l de los siguientes NO es un lenguaje orientado a objetos?";
 choices[77]= new Array();
 choices[77][0] = "Java.";
 choices[77][1] = "C.";
 choices[77][2] = "Smalltalk.";
 choices[77][3] = "Ada.";
 answers[77] = choices[77][1];
 units[77] = "82, 84";
 comments[77] = "Id Pregunta: 8759. Examen TIC A2 2010 interna";


//  Id pregunta: 8855 AÃ±o de creación de pregunta: 2011-01-01
 questions[78]= "79)  &iquest;Qu&eacute; tipo de driver JDBC conecta a la base de datos directamente usando su protocolo nativo?";
 choices[78]= new Array();
 choices[78][0] = "Type 1 JDBC Driver";
 choices[78][1] = "Type 2 JDBC Driver";
 choices[78][2] = "Type 3 JDBC Driver";
 choices[78][3] = "Type 4 JDBC Driver";
 answers[78] = choices[78][3];
 units[78] = "58, 60";
 comments[78] = "Id Pregunta: 8855. Analista Ayto. Madrid 2010";


//  Id pregunta: 8922 AÃ±o de creación de pregunta: 2011-01-01
 questions[79]= "80)  En HTML, &iquest;con qu&eacute; etiqueta indicamos el comienzo de una columna con datos en una tabla?";
 choices[79]= new Array();
 choices[79][0] = "&lt;table&gt;";
 choices[79][1] = "&lt;td&gt;";
 choices[79][2] = "&lt;th&gt;";
 choices[79][3] = "&lt;column&gt;";
 answers[79] = choices[79][1];
 units[79] = "69";
 comments[79] = "Id Pregunta: 8922. Operador Ayto. Madrid 2010";


//  Id pregunta: 9048 AÃ±o de creación de pregunta: 2011-01-01
 questions[80]= "81)  Cu&aacute;l es la afirmaci&oacute;n correcta sobre IEEE 802";
 choices[80]= new Array();
 choices[80][0] = "802.8 es el grupo asesor de banda ancha";
 choices[80][1] = "802.7 es el grupo asesor en fibras &oacute;pticas";
 choices[80][2] = "802.10 era el grupo asesor en seguridad";
 choices[80][3] = "802.3 trata sobre el control l&oacute;gico de enlace";
 answers[80] = choices[80][2];
 units[80] = "107";
 comments[80] = "Id Pregunta: 9048. NULL";


//  Id pregunta: 9119 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  Con respecto a los datos en los sistemas SMP o MMC se pueden distinguir los siguientes tipos en funci&oacute;n de su alcance";
 choices[81]= new Array();
 choices[81][0] = "Datos de alcance s&iacute;ncrono y as&iacute;ncrono";
 choices[81][1] = "Datos de alcance global y local";
 choices[81][2] = "Datos de alcance externo e interno";
 choices[81][3] = "No existe la arquitectura MMC";
 answers[81] = choices[81][1];
 units[81] = "45";
 comments[81] = "Id Pregunta: 9119. ";


//  Id pregunta: 9207 AÃ±o de creación de pregunta: 2013-01-01
 questions[82]= "83)  &iquest;Desde el punto de vista de la cantidad de la velocidad de acceso cu&aacute;l es la diferencia entre cintas y discos?";
 choices[82]= new Array();
 choices[82][0] = "La cinta est&aacute; orientada a almacenamiento de grandes cantidades de datos en los que el tiempo de acceso es cr&iacute;tico.";
 choices[82][1] = "Los discos son adecuados para el almacenamiento de datos con acceso &ldquo;on-line&rdquo;.";
 choices[82][2] = "Las cintas pr&aacute;cticamente ya no se utilizan.";
 choices[82][3] = "Los discos representan el soporte auxiliar de la informaci&oacute;n";
 answers[82] = choices[82][1];
 units[82] = "48";
 comments[82] = "Id Pregunta: 9207. ";


//  Id pregunta: 9326 AÃ±o de creación de pregunta: 2013-01-01
 questions[83]= "84)  Qu&eacute; clase de cable, seg&uacute;n la norma ISO 11801, elegir&iacute;a para permitir la transmisi&oacute;n de video en tiempo real?";
 choices[83]= new Array();
 choices[83][0] = "clase D";
 choices[83][1] = "clase F ";
 choices[83][2] = "clase E";
 choices[83][3] = "b) y c) son correctas.";
 answers[83] = choices[83][3];
 units[83] = "99";
 comments[83] = "Id Pregunta: 9326. NULL";


//  Id pregunta: 9388 AÃ±o de creación de pregunta: 2013-01-01
 questions[84]= "85)  De las tecnolog&iacute;as 4G, se puede afirmar:";
 choices[84]= new Array();
 choices[84][0] = "WiMax alcanza velocidades de bajada inferiores a 100 Mbps";
 choices[84][1] = "LTE alcanza velocidades de bajada superiores a las que se alcanzan con WiMax";
 choices[84][2] = "WiMAX puede alcanzar velocidades de bajada superiores a 100 Mbps";
 choices[84][3] = "HSPA+ no puede superar los 25 Mbps de bajada puesto que no mantiene una conexi&oacute;n permanente con la estaci&oacute;n base";
 answers[84] = choices[84][2];
 units[84] = "108";
 comments[84] = "Id Pregunta: 9388. http://en.wikipedia.org/wiki/4G";


//  Id pregunta: 9517 AÃ±o de creación de pregunta: 2013-01-01
 questions[85]= "86)  Respecto a los EJB, indique la afirmaci&oacute;n incorrecta:";
 choices[85]= new Array();
 choices[85][0] = "Son objetos de servidor que encapsulan la l&oacute;gica de negocio de una aplicaci&oacute;n y se pueden ejecutar de forma distribuida";
 choices[85][1] = "S&oacute;lo existen tres tipos: session, entity y message-driven";
 choices[85][2] = "Se ejecutan en contenedores EJB";
 choices[85][3] = "Los EJB de tipo session pueden ser a su vez SLSB y SFSB";
 answers[85] = choices[85][0];
 units[85] = "116";
 comments[85] = "Id Pregunta: 9517. NULL";


//  Id pregunta: 9546 AÃ±o de creación de pregunta: 2013-01-01
 questions[86]= "87)  Seg&uacute;n la LSSI,  Los prestadores de servicios de la sociedad de la informaci&oacute;n que faciliten enlaces a otros contenidos o incluyan en los suyos directorios o instrumentos de b&uacute;squeda de contenidos no ser&aacute;n responsables por la informaci&oacute;n a la que dirijan a los destinatarios de sus servicios, siempre que ";
 choices[86]= new Array();
 choices[86][0] = "No tengan conocimiento efectivo de que la actividad o la informaci&oacute;n a la que remiten o recomiendan es il&iacute;cita o de que lesiona bienes o derechos de un tercero susceptibles de indemnizaci&oacute;n";
 choices[86][1] = "A&uacute;n teniendo conocimiento de lo estipulado en la respuesta a), act&uacute;en con diligencia para suprimir o inutilizar el enlace correspondiente.";
 choices[86][2] = "Las respuestas a) y b) son correctas";
 choices[86][3] = "Ninguna de las anteriores";
 answers[86] = choices[86][2];
 units[86] = "30";
 comments[86] = "Id Pregunta: 9546. Ley 34/2002, art&iacute;culo 17";


//  Id pregunta: 9761 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  En el &aacute;mbito del sector p&uacute;blico estatal, las solicitudes de contratos basados en el acuerdo marco o de adjudicaciones de contratos realizadas en el marco del sistema din&aacute;mico de contrataci&oacute;n se tramitar&aacute;n:";
 choices[87]= new Array();
 choices[87][0] = "De la forma tradicional o a trav&eacute;s de la aplicaci&oacute;n CONECTA-CENTRALIZACI&Oacute;N";
 choices[87][1] = "Exclusivamente, a trav&eacute;s de la aplicaci&oacute;n inform&aacute;tica CONECTA CENTRALIZACI&Oacute;N a partir del 1 de enero de 2014.";
 choices[87][2] = "Mediante solicitud por escrito a la Direcci&oacute;n General de Patrimonio.";
 choices[87][3] = "Ninguna de las anteriores.";
 answers[87] = choices[87][1];
 units[87] = "41";
 comments[87] = "Id Pregunta: 9761. EHA/1049/2008, Disposici&oacute;n adicional &uacute;nica. A&ntilde;adida por la orden HAP/19/2014";


//  Id pregunta: 9791 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  En el contexto de la seguridad, el shoulder surfing consiste en:";
 choices[88]= new Array();
 choices[88][0] = "Espiar a los usuarios modificando los navegadores web para obtener sus claves de acceso.";
 choices[88][1] = "Uso de aplicaciones intermedias llamadas shoulders para la obtenci&oacute;n de los datos de navegaci&oacute;n.";
 choices[88][2] = "Espiar f&iacute;sicamente a los usuarios, para obtener generalmente claves de acceso al sistema.";
 choices[88][3] = "Es un sin&oacute;nimo del ataque man in the middle ";
 answers[88] = choices[88][2];
 units[88] = "111";
 comments[88] = "Id Pregunta: 9791. Examen TIC A2 2013";


//  Id pregunta: 9925 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  Respecto al protocolo HDLC, indique la falsa:";
 choices[89]= new Array();
 choices[89][0] = "Significa High-Level Data Link Control y est&aacute; basado en el ISO 3339.";
 choices[89][1] = "Usa transmisi&oacute;n s&iacute;ncrona y todos los intercambios se realizan a trav&eacute;s de tramas.";
 choices[89][2] = "Utiliza un formato &uacute;nico de tramas, tanto para datos como para informaci&oacute;n de control.";
 choices[89][3] = "Es el protocolo m&aacute;s importante para el enlace de datos, siendo la base para otros protocolos de nivel 2.";
 answers[89] = choices[89][0];
 units[89] = "100";
 comments[89] = "Id Pregunta: 9925. NULL";


//  Id pregunta: 10022 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  Indique cu&aacute;l de los siguientes diagramas de descomposici&oacute;n NO se contempla como t&eacute;cnica en M&eacute;trica v3:";
 choices[90]= new Array();
 choices[90][0] = "Funcional.";
 choices[90][1] = "Organizativo.";
 choices[90][2] = "L&oacute;gico.";
 choices[90][3] = "En Di&aacute;logos.";
 answers[90] = choices[90][2];
 units[90] = "86";
 comments[90] = "Id Pregunta: 10022. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10433 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  En una base de datos Oracle, &iquest;cu&aacute;l de las siguientes sentencias no est&aacute; relacionada con la asignaci&oacute;n de permisos a usuarios? ";
 choices[91]= new Array();
 choices[91][0] = "CREATE VIEW.";
 choices[91][1] = "GRANT.";
 choices[91][2] = "CREATE PROFILE.";
 choices[91][3] = "CREATE ROLE.";
 answers[91] = choices[91][0];
 units[91] = "58";
 comments[91] = "Id Pregunta: 10433. Examen TIC A1 2013";


//  Id pregunta: 10441 AÃ±o de creación de pregunta: 2014-01-01
 questions[92]= "93)  En el &aacute;mbito de COBIT 5, el proceso de Gestionar la Calidad se encuentra encuadrado en el dominio de ";
 choices[92]= new Array();
 choices[92][0] = "Alinear, Planificar y Organizar";
 choices[92][1] = "Monitorizar y Evaluar.";
 choices[92][2] = "Construir, Adquirir e Implementar";
 choices[92][3] = "Monitorizar y Evaluar.";
 answers[92] = choices[92][0];
 units[92] = "98";
 comments[92] = "Id Pregunta: 10441. Examen TIC A1 2013";


//  Id pregunta: 10446 AÃ±o de creación de pregunta: 2014-01-01
 questions[93]= "94)  De acuerdo con la Ley Org&aacute;nica 15/1999, de protecci&oacute;n de datos de car&aacute;cter personal, los ficheros creados por las Fuerzas y Cuerpos de Seguridad que contengan datos de car&aacute;cter personal ";
 choices[93]= new Array();
 choices[93][0] = "est&aacute;n en su totalidad excluidos del r&eacute;gimen general de esa Ley.";
 choices[93][1] = "no pueden recoger m&aacute;s datos que los autorizados por el Juez instructor de la causa penal. ";
 choices[93][2] = "pueden recoger datos personales sin consentimiento del afectado para la represi&oacute;n de infracciones penales. ";
 choices[93][3] = "no permiten la cancelaci&oacute;n de los datos personales en ellos registrados con fines policiales. ";
 answers[93] = choices[93][2];
 units[93] = "29";
 comments[93] = "Id Pregunta: 10446. Examen TIC A1 2013";


//  Id pregunta: 11100 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l de los siguientes es un principio b&aacute;sico del Esquema Nacional de Seguridad?";
 choices[94]= new Array();
 choices[94][0] = "Proporcionalidad";
 choices[94][1] = "Respeto al derecho de protecci&oacute;n de datos de car&aacute;cter personal";
 choices[94][2] = "Derecho a la garant&iacute;a de seguridad y confidencialidad";
 choices[94][3] = "Gesti&oacute;n de riesgos";
 answers[94] = choices[94][3];
 units[94] = "30";
 comments[94] = "Id Pregunta: 11100. ";


//  Id pregunta: 11146 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Cu&aacute;l de los siguientes cifrados sim&eacute;tricos es de flujo?";
 choices[95]= new Array();
 choices[95][0] = "RC-4";
 choices[95][1] = "IDEA";
 choices[95][2] = "RC-5";
 choices[95][3] = "AES";
 answers[95] = choices[95][0];
 units[95] = "72";
 comments[95] = "Id Pregunta: 11146. ";


//  Id pregunta: 11175 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Qu&eacute; organismo es el responsable del est&aacute;ndar X.500?";
 choices[96]= new Array();
 choices[96][0] = "ITU-T";
 choices[96][1] = "ISO";
 choices[96][2] = "IETF";
 choices[96][3] = "IEEE";
 answers[96] = choices[96][2];
 units[96] = "106";
 comments[96] = "Id Pregunta: 11175. ";


//  Id pregunta: 11249 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  La inscripci&oacute;n en el ROLECE acredita la aptitud del licitador frente a los &oacute;rganos de contrataci&oacute;n de:";
 choices[97]= new Array();
 choices[97][0] = "Todo el sector p&uacute;blico estatal.";
 choices[97][1] = "Todo el sector p&uacute;blico.";
 choices[97][2] = "La Administraci&oacute;n General del Estado.";
 choices[97][3] = "La Administraci&oacute;n General del Estado y su Organismos p&uacute;blicos vinculados o dependientes.";
 answers[97] = choices[97][1];
 units[97] = "41";
 comments[97] = "Id Pregunta: 11249. ";


//  Id pregunta: 11268 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Cu&aacute;les son las tres opciones principales en los modelos de dise&ntilde;o de ITIL v3?";
 choices[98]= new Array();
 choices[98][0] = "Modelo tradicional: presupone una mayor estabilidad del servicio.";
 choices[98][1] = "Modelo &Aacute;gil o RAD: principalmente incremental e iterativo que se basa en la creaci&oacute;n de prototipos.";
 choices[98][2] = "Modelo basado en soluciones software est&aacute;ndar ya empaquetadas.";
 choices[98][3] = "Todos son modelos de ITIL versi&oacute;n 3.";
 answers[98] = choices[98][3];
 units[98] = "98";
 comments[98] = "Id Pregunta: 11268. ";


//  Id pregunta: 11422 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Seg&uacute;n la Ley 9/2014, se&ntilde;ale la respuesta correcta:";
 choices[99]= new Array();
 choices[99][0] = "El MINETUR fijar&aacute; las caracter&iacute;sticas y condiciones para la conservaci&oacute;n de n&uacute;meros";
 choices[99][1] = "Los planes nacionales designar&aacute;n los servicios de uso de los n&uacute;meros.";
 choices[99][2] = "La CNMC establece el uso de los recursos num&eacute;ricos.";
 choices[99][3] = "El MINETUR fijar&aacute; por Real Decreto los planes nacionales de numeraci&oacute;n y direccionamiento.";
 answers[99] = choices[99][1];
 units[99] = "110";
 comments[99] = "Id Pregunta: 11422. ";


