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

//  Id pregunta: 25 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;C&oacute;mo se denominan los distintos niveles de adecuaci&oacute;n contemplados en WAI?";
 choices[0]= new Array();
 choices[0][0] = "A, B, C y D";
 choices[0][1] = "A, AA y AAA";
 choices[0][2] = "A1, A2 y A3";
 choices[0][3] = "1, 2, 3 y 4";
 answers[0] = choices[0][1];
 units[0] = "39";
 comments[0] = "Id Pregunta: 25. ";


//  Id pregunta: 97 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  A un sistema de informaci&oacute;n definido como &quot; Sistemas orientados a la ayuda en la toma de decisiones espor&aacute;dicas u ocasionales &quot; corresponde al tipo de sistema de informaci&oacute;n:";
 choices[1]= new Array();
 choices[1][0] = "Sistemas orientados a la gesti&oacute;n de empresa o Management Information Systems (MIS)";
 choices[1][1] = "Sistemas orientados al proceso de transacciones o Transaction Processing Systems";
 choices[1][2] = "Sistemas de apoyo a la toma de decisiones o Decision Support Systems (DSS)";
 choices[1][3] = "Sistemas de apoyo a la direcci&oacute;n o Executive Support Systems (ESS)";
 answers[1] = choices[1][2];
 units[1] = "21";
 comments[1] = "Id Pregunta: 97. NULL";


//  Id pregunta: 105 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  Andrea Zerilli realiz&oacute; estudios sobre:";
 choices[2]= new Array();
 choices[2][0] = "Teor&iacute;a de redes";
 choices[2][1] = "Investigaci&oacute;n operativa y teletr&aacute;fico";
 choices[2][2] = "Metodolog&iacute;a de desarrollo";
 choices[2][3] = "Organizaci&oacute;n de empresas";
 answers[2] = choices[2][3];
 units[2] = "22";
 comments[2] = "Id Pregunta: 105. NULL";


//  Id pregunta: 193 AÃ±o de creación de pregunta: 2004-01-01
 questions[3]= "4)  &iquest;Cu&aacute;l de las siguientes tareas no es posible realizar utilizando las herramientas PERT o CPM?";
 choices[3]= new Array();
 choices[3][0] = "Establecer las dimensiones de tiempo m&aacute;s probables para las tareas individuales aplicando modelos estad&iacute;sticos.";
 choices[3][1] = "Determinar el camino cr&iacute;tico, la cadena de tareas que determina la duraci&oacute;n del proyecto.";
 choices[3][2] = "Dimensionar las necesidades de personal en cada fase del proyecto.";
 choices[3][3] = "Calcular las limitaciones de tiempo que definen una ventana de tiempo de una tarea determinada (y las holguras).";
 answers[3] = choices[3][2];
 units[3] = "27";
 comments[3] = "Id Pregunta: 193. Examen TIC MAP B 2004";


//  Id pregunta: 204 AÃ±o de creación de pregunta: 2004-01-01
 questions[4]= "5)  La teor&iacute;a de la decisi&oacute;n multicriterio discreta";
 choices[4]= new Array();
 choices[4][0] = "tiene problemas con una incorrecta asignaci&oacute;n de pesos";
 choices[4][1] = "es usada en la elecci&oacute;n de contratos por parte de la administraci&oacute;n en ocasiones";
 choices[4][2] = "la normalizaci&oacute;n de las puntuaciones puede hacer perder la proporcionalidad";
 choices[4][3] = "todas las anteriores";
 answers[4] = choices[4][3];
 units[4] = "34";
 comments[4] = "Id Pregunta: 204. ";


//  Id pregunta: 336 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  La primera fase a la hora de seleccionar un paquete o aplicaci&oacute;n est&aacute;ndar es:";
 choices[5]= new Array();
 choices[5][0] = "Llevar a cabo una investigaci&oacute;n preliminar";
 choices[5][1] = "Entrar en contacto con los suministradores";
 choices[5][2] = "Definir los requisitos del usuario";
 choices[5][3] = "Personalizar e implantar el paquete";
 answers[5] = choices[5][2];
 units[5] = "40";
 comments[5] = "Id Pregunta: 336. ";


//  Id pregunta: 414 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Respecto del ETSI (European Telecommunication Standards Institute, Instituto Europeo de Normas de Telecomunicaci&oacute;n), podemos decir:";
 choices[6]= new Array();
 choices[6][0] = "No est&aacute; reconocida oficialmente por la Comisi&oacute;n Europea como una organizaci&oacute;n de normalizaci&oacute;n.";
 choices[6][1] = "Depende funcionalmente de ITU-T y de CCITT";
 choices[6][2] = "Ninguna de las respuestas anteriores es correcta";
 choices[6][3] = "Las 2 primeras respuestas son correctas";
 answers[6] = choices[6][2];
 units[6] = "42";
 comments[6] = "Id Pregunta: 414. ";


//  Id pregunta: 456 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  Si el camino cr&iacute;tico de un proyecto est&aacute; formado por las tareas A(2,4,6); B( 6,15,30); y C (4,7,16); la duraci&oacute;n prevista del proyecto ser&aacute;:";
 choices[7]= new Array();
 choices[7][0] = "26";
 choices[7][1] = "31";
 choices[7][2] = "28";
 choices[7][3] = "25";
 answers[7] = choices[7][2];
 units[7] = "28";
 comments[7] = "Id Pregunta: 456. ";


//  Id pregunta: 775 AÃ±o de creación de pregunta: 2004-01-01
 questions[8]= "9)  Los sistema multiagentes";
 choices[8]= new Array();
 choices[8][0] = "trabajan siempre asociados a arquitecturas de pizarra";
 choices[8][1] = "tienen un control centralizado por lo que no tienen autonom&iacute;a en los agentes";
 choices[8][2] = "cada uno de los agentes es capaz de decidir por si mismo";
 choices[8][3] = "Ninguna de las anteriores";
 answers[8] = choices[8][2];
 units[8] = "63";
 comments[8] = "Id Pregunta: 775. ";


//  Id pregunta: 788 AÃ±o de creación de pregunta: 2009-01-01
 questions[9]= "10)  Seg&uacute;n la Ley 25/2007, de 18 de octubre, de conservaci&oacute;n de datos relativos a las comunicaciones electr&oacute;nicas y a las redes p&uacute;blicas de comunicaciones, los datos de tr&aacute;fico deben retenerse por un periodo de:";
 choices[9]= new Array();
 choices[9][0] = "doce meses computados desde la fecha en que se haya producido la comunicaci&oacute;n. Reglamentariamente, previa consulta a los operadores, se podr&aacute; ampliar o reducir el plazo de conservaci&oacute;n para determinados datos o una categor&iacute;a de datos hasta un m&aacute;ximo de dos a&ntilde;os o un m&iacute;nimo de seis meses.";
 choices[9][1] = "doce meses computados desde la fecha en que se haya producido la comunicaci&oacute;n. Reglamentariamente, previa consulta a los operadores, se podr&aacute; ampliar o reducir el plazo de conservaci&oacute;n para determinados datos o una categor&iacute;a de datos hasta un m&aacute;ximo de dieciocho meses o un m&iacute;nimo de seis meses.";
 choices[9][2] = "La Ley lo fijar&aacute; reglamentariamente";
 choices[9][3] = "12 meses m&iacute;nimo para los proveedores de redes (carriers) y 24 meses m&iacute;nimo para los proveedores de acceso a internet y de alojamiento";
 answers[9] = choices[9][0];
 units[9] = "30";
 comments[9] = "Id Pregunta: 788. articulo 5";


//  Id pregunta: 976 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  De acuerdo al modelo vectorial, &iquest;cu&aacute;l de los siguientes datos no se representa en un sistema de informaci&oacute;n geogr&aacute;fica?:";
 choices[10]= new Array();
 choices[10][0] = "Arcos circulares.";
 choices[10][1] = "Pol&iacute;gonos.";
 choices[10][2] = "L&iacute;neas.";
 choices[10][3] = "Matrices de celdas.";
 answers[10] = choices[10][3];
 units[10] = "67";
 comments[10] = "Id Pregunta: 976. NULL";


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


//  Id pregunta: 1198 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Java ME:";
 choices[12]= new Array();
 choices[12][0] = "Es una versi&oacute;n de la tecnolog&iacute;a Java2 para plataformas m&oacute;viles";
 choices[12][1] = "Es una version de la tecnolog&iacute;a Java2 orientada a electrodom&eacute;sticos";
 choices[12][2] = "Es una version de la tecnolog&iacute;a Java2 orientada a sistemas dom&oacute;ticos";
 choices[12][3] = "Todas las anteriores respuestas son falsas";
 answers[12] = choices[12][0];
 units[12] = "60";
 comments[12] = "Id Pregunta: 1198. NULL";


//  Id pregunta: 1209 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  La capacidad efectiva de informaci&oacute;n &uacute;til de un disco es:";
 choices[13]= new Array();
 choices[13][0] = "El tama&ntilde;o en pulgadas del disco";
 choices[13][1] = "El n&uacute;mero de bits que pueden almacenarse en el disco sin formatar";
 choices[13][2] = "El n&uacute;mero de bit que pueden almacenarse en el disco formatado";
 choices[13][3] = "El n&uacute;mero de bit que pueden almacenarse en una pista";
 answers[13] = choices[13][2];
 units[13] = "48";
 comments[13] = "Id Pregunta: 1209. ";


//  Id pregunta: 1382 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  Un Data Mart es:";
 choices[14]= new Array();
 choices[14][0] = "Un proveedor de datos de pago v&iacute;a Internet.";
 choices[14][1] = "Una versi&oacute;n reducida del datawarehouse, adscrita a un solo departamento de la organizaci&oacute;n.";
 choices[14][2] = "Una aplicaci&oacute;n para el mantenimiento de la coherencia de los datos.";
 choices[14][3] = "Ninguna de las anteriores respuestas es correcta.";
 answers[14] = choices[14][1];
 units[14] = "68";
 comments[14] = "Id Pregunta: 1382. ";


//  Id pregunta: 1568 AÃ±o de creación de pregunta: 2003-01-01
 questions[15]= "16)  &iquest;C&uacute;al no es una funci&oacute;n de Workflow?";
 choices[15]= new Array();
 choices[15][0] = "Enrutamiento";
 choices[15][1] = "Asignaci&oacute;n de responsabilidades";
 choices[15][2] = "Generaci&oacute;n de formularios ";
 choices[15][3] = "Gesti&oacute;n de procedimiento";
 answers[15] = choices[15][2];
 units[15] = "71";
 comments[15] = "Id Pregunta: 1568. ";


//  Id pregunta: 1675 AÃ±o de creación de pregunta: 2004-01-01
 questions[16]= "17)  &iquest;Cu&aacute;l NO es uno de los principios de Codd?";
 choices[16]= new Array();
 choices[16][0] = "Acceso garantizado";
 choices[16][1] = "Independencia f&iacute;sica de los datos";
 choices[16][2] = "Gesti&oacute;n de una BDR";
 choices[16][3] = "Actualizaci&oacute;n de tablas";
 answers[16] = choices[16][3];
 units[16] = "58";
 comments[16] = "Id Pregunta: 1675. ";


//  Id pregunta: 1805 AÃ±o de creación de pregunta: 2006-01-01
 questions[17]= "18)  La iniciativa ADL (Advanced Distributed Learning) public&oacute; en el a&ntilde;o 2000 un modelo que trata de estandarizar los contenidos formativos digitales y que se conoce como";
 choices[17]= new Array();
 choices[17][0] = "SCORM";
 choices[17][1] = "B-Learning";
 choices[17][2] = "DFC";
 choices[17][3] = "ADL 2000";
 answers[17] = choices[17][0];
 units[17] = "66";
 comments[17] = "Id Pregunta: 1805. ";


//  Id pregunta: 1863 AÃ±o de creación de pregunta: 2006-01-01
 questions[18]= "19)  &iquest;Cu&aacute;l de los siguientes no es un sistema operativo utilizado en la arquitectura de un sistema de tarjeta inteligente?";
 choices[18]= new Array();
 choices[18][0] = "MultOS";
 choices[18][1] = "Jini";
 choices[18][2] = "Java Card";
 choices[18][3] = "SCfW";
 answers[18] = choices[18][1];
 units[18] = "74";
 comments[18] = "Id Pregunta: 1863. NULL";


//  Id pregunta: 1949 AÃ±o de creación de pregunta: 2006-01-01
 questions[19]= "20)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones sobre el paquete javax.microedition.lcdui de J2ME es cierta";
 choices[19]= new Array();
 choices[19][0] = "Es un subconjunto del paquete Swing de J2SE";
 choices[19][1] = "Define las aplicaciones MIDP y su comportamiento con respecto al entorno de ejecuci&oacute;n";
 choices[19][2] = "Proporciona clases asociadas a la gesti&oacute;n del ciclo de vida de las MIDLETS";
 choices[19][3] = "Proporciona clases para el desarrollo de elementos gr&aacute;ficos de la API MIDP para entornos m&oacute;viles";
 answers[19] = choices[19][3];
 units[19] = "60";
 comments[19] = "Id Pregunta: 1949. NULL";


//  Id pregunta: 2026 AÃ±o de creación de pregunta: 2004-01-01
 questions[20]= "21)  En el &aacute;mbito de las tecnolog&iacute;as multimedia, se&ntilde;ale cu&aacute;l de los siguientes formatos corresponder&iacute;a a una imagen con &quot;formato de gr&aacute;fico vectorial&quot;:";
 choices[20]= new Array();
 choices[20][0] = "Graphical Interchange Format (GIF)";
 choices[20][1] = "Windows Metafile Format (WMF)";
 choices[20][2] = "Portable Network Graphics (PNG)";
 choices[20][3] = "Windows Bitmap (BMP)";
 answers[20] = choices[20][1];
 units[20] = "93";
 comments[20] = "Id Pregunta: 2026. Examen TIC MAP B 2004";


//  Id pregunta: 2065 AÃ±o de creación de pregunta: 2004-01-01
 questions[21]= "22)  Dentro de las m&eacute;tricas orientadas al SW no se encuetra";
 choices[21]= new Array();
 choices[21][0] = "M&eacute;tricas de productividad";
 choices[21][1] = "M&eacute;tricas de fiabilidad";
 choices[21][2] = "M&eacute;tricas de rendimiento";
 choices[21][3] = "M&eacute;tricas de Complejidad";
 answers[21] = choices[21][2];
 units[21] = "88";
 comments[21] = "Id Pregunta: 2065. ";


//  Id pregunta: 2106 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  Una de las caracter&iacute;sticas especiales de las bases de datos documentales, con respecto a otros tipos de bases de datos es que:";
 choices[22]= new Array();
 choices[22][0] = "Est&aacute;n integradas por campos";
 choices[22][1] = "Son adecuadas para una informaci&oacute;n muy estructurada";
 choices[22][2] = "Est&aacute;n basadas en sistemas de archivo y ficheros inversos";
 choices[22][3] = "Se almacenan en tablas";
 answers[22] = choices[22][2];
 units[22] = "96";
 comments[22] = "Id Pregunta: 2106. ";


//  Id pregunta: 2175 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  La definici&oacute;n: &ldquo;Es el proceso de analizar un sistema para identificar los componentes y las interrelaciones entre ellos, creando representaciones del sistema en otra forma distinta a la original o bien a un nivel superior de abstracci&oacute;n&rdquo;, corresponde a:";
 choices[23]= new Array();
 choices[23][0] = "Restructuraci&oacute;n (Restructuring).";
 choices[23][1] = "Ingenier&iacute;a Inversa (Reverse Engineering).";
 choices[23][2] = "Ingenier&iacute;a hacia adelante (Forward Engineering).";
 choices[23][3] = "Reingenier&iacute;a (Reengineering).";
 answers[23] = choices[23][1];
 units[23] = "91";
 comments[23] = "Id Pregunta: 2175. ";


//  Id pregunta: 2743 AÃ±o de creación de pregunta: 2006-01-01
 questions[24]= "25)  En el modelo entidad-relaci&oacute;n extendido el grado es:";
 choices[24]= new Array();
 choices[24][0] = "El n&uacute;mero de entidades que participan en una relaci&oacute;n";
 choices[24][1] = "Es el n&uacute;mero m&aacute;ximo de ocurrencias de cada tipo de entidad que pueden intervenir en una ocurrencia de la relaci&oacute;n que se est&aacute; tratando";
 choices[24][2] = "El n&uacute;mero de columnas de una tabla";
 choices[24][3] = "Es una propiedad o caracter&iacute;stica de un tipo de entidad";
 answers[24] = choices[24][0];
 units[24] = "58,80";
 comments[24] = "Id Pregunta: 2743. ";


//  Id pregunta: 3415 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  H.320 es el est&aacute;ndar para:";
 choices[25]= new Array();
 choices[25][0] = "transmisi&oacute;n de paquetes multiplexados en redes digitales";
 choices[25][1] = "m&oacute;dems de banda ancha con correcci&oacute;n de errores";
 choices[25][2] = "videoconferencia multipunto sobre RDSI";
 choices[25][3] = "videconferencia multipunto sobre internet";
 answers[25] = choices[25][2];
 units[25] = "103,117";
 comments[25] = "Id Pregunta: 3415. ";


//  Id pregunta: 3770 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  Para videoconferencia en LANs sin QoS (como por ejemplo Internet), se usan las recomendaciones del est&aacute;ndar:";
 choices[26]= new Array();
 choices[26][0] = "H.321";
 choices[26][1] = "H.320";
 choices[26][2] = "H.323";
 choices[26][3] = "H.324";
 answers[26] = choices[26][2];
 units[26] = "117";
 comments[26] = "Id Pregunta: 3770. ";


//  Id pregunta: 3816 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  Se&ntilde;ale cu&aacute;l de los siguientes protocolos realiza asignaci&oacute;n din&aacute;mica de direcciones IP:";
 choices[27]= new Array();
 choices[27][0] = "TCP";
 choices[27][1] = "DNS";
 choices[27][2] = "WINS";
 choices[27][3] = "DHCP";
 answers[27] = choices[27][3];
 units[27] = "113";
 comments[27] = "Id Pregunta: 3816. ";


//  Id pregunta: 3818 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  Se&ntilde;ale entre los siguientes, cu&aacute;l es un par&aacute;metro de calidad en redes RDSI:";
 choices[28]= new Array();
 choices[28][0] = "Grado de servicio";
 choices[28][1] = "Alerting delay";
 choices[28][2] = "Bit error";
 choices[28][3] = "Todos son par&aacute;metros de calidad";
 answers[28] = choices[28][3];
 units[28] = "103";
 comments[28] = "Id Pregunta: 3818. ";


//  Id pregunta: 4184 AÃ±o de creación de pregunta: 2006-01-01
 questions[29]= "30)  Utilizando los 4 pares de un cable categor&iacute;a 5 puedo transmitir";
 choices[29]= new Array();
 choices[29][0] = "Gigabit ethernet";
 choices[29][1] = "2 transmisiones Fast Ethernet simultaneas";
 choices[29][2] = "Fast Ethernet";
 choices[29][3] = "todas las anteriores";
 answers[29] = choices[29][3];
 units[29] = "99";
 comments[29] = "Id Pregunta: 4184. ";


//  Id pregunta: 4308 AÃ±o de creación de pregunta: 2007-01-01
 questions[30]= "31)  Se denomina &ldquo;Partici&oacute;n equivalente&rdquo; a:";
 choices[30]= new Array();
 choices[30][0] = "Una t&eacute;cnica de programaci&oacute;n modular donde el dominio de la aplicaci&oacute;n se subdivide en &aacute;reas funcionales de aproximadamente el mismo tama&ntilde;o";
 choices[30][1] = "Una t&eacute;cnica de pruebas de &ldquo;caja negra&rdquo; que divide el dominio de un programa en clases de datos de las que se pueden derivar casos de prueba.";
 choices[30][2] = "Una t&eacute;cnica de dise&ntilde;o orientado a objetos para mejorar la estructura de los programas reemplazando la herencia con mecanismos de delegaci&oacute;n.";
 choices[30][3] = "Una t&eacute;cnica de gesti&oacute;n del desarrollo de proyectos para la atribuci&oacute;n de la responsabilidad sobre las pruebas de la aplicaci&oacute;n";
 answers[30] = choices[30][1];
 units[30] = "88";
 comments[30] = "Id Pregunta: 4308. NULL";


//  Id pregunta: 4516 AÃ±o de creación de pregunta: 2007-01-01
 questions[31]= "32)  Respecto al software libre:";
 choices[31]= new Array();
 choices[31][0] = "Los usuarios de software libre deben tener Ia libertad de estudiar como funciona el programa y adaptarlo a sus necesidades.";
 choices[31][1] = "El &uacute;nico coste permitido por la distribuci&oacute;n de software libre es el coste de distribuci&oacute;n.";
 choices[31][2] = "Esta permitida la distribuci&oacute;n de software libre pero no su posterior modificaci&oacute;n.";
 choices[31][3] = "Solo basta con incluir el c&oacute;digo fuente, no es necesario incluir documento legal alguno.";
 answers[31] = choices[31][0];
 units[31] = "61";
 comments[31] = "Id Pregunta: 4516. NULL";


//  Id pregunta: 4712 AÃ±o de creación de pregunta: 2007-01-01
 questions[32]= "33)  &iquest;Cu&aacute;l de los siguientes no es un t&eacute;rmino sobre Internet?";
 choices[32]= new Array();
 choices[32][0] = "Cookies.";
 choices[32][1] = "Spam.";
 choices[32][2] = "Netnannies.";
 choices[32][3] = "Brownies.";
 answers[32] = choices[32][3];
 units[32] = "112";
 comments[32] = "Id Pregunta: 4712. Examen 2006 JCYL";


//  Id pregunta: 4753 AÃ±o de creación de pregunta: 2009-01-01
 questions[33]= "34)  En UMTS R99 o R3, la interfaz entre la UTRAN y el SGSN se establece sobre:";
 choices[33]= new Array();
 choices[33][0] = "Frame Relay";
 choices[33][1] = " ATM";
 choices[33][2] = "VPLS";
 choices[33][3] = "Cualquiera";
 answers[33] = choices[33][1];
 units[33] = "108";
 comments[33] = "Id Pregunta: 4753. ";


//  Id pregunta: 4833 AÃ±o de creación de pregunta: 2007-01-01
 questions[34]= "35)  De acuerdo al modelo EFQM (European Foundation for Quality Management) de Excelencia, el subcriterio denominado &quot;Gesti&oacute;n de la Tecnolog&iacute;a&quot; pertenece al criterio:";
 choices[34]= new Array();
 choices[34][0] = "Alianzas y Recursos";
 choices[34][1] = "Pol&iacute;tica y Estrategia";
 choices[34][2] = "Procesos";
 choices[34][3] = "Resultados Clave";
 answers[34] = choices[34][0];
 units[34] = "92";
 comments[34] = "Id Pregunta: 4833. NULL";


//  Id pregunta: 4918 AÃ±o de creación de pregunta: 2003-01-01
 questions[35]= "36)  &iquest;Qu&eacute; afirmaci&oacute;n es incorrecta?:";
 choices[35]= new Array();
 choices[35][0] = "WSDL es un documento XML.";
 choices[35][1] = "XML es un est&aacute;ndar W3C.";
 choices[35][2] = "SOAP requiere de HTTP o SMTP como protocolos de transporte.";
 choices[35][3] = "Las PDAs pueden usar Servicios Web.";
 answers[35] = choices[35][2];
 units[35] = "69";
 comments[35] = "Id Pregunta: 4918. Examen TIC B 2007";


//  Id pregunta: 5052 AÃ±o de creación de pregunta: 2003-01-01
 questions[36]= "37)  La vinculacion din&aacute;mica en el desarrollo orientada a objetos significa que:";
 choices[36]= new Array();
 choices[36][0] = "La verificaci&oacute;n de tipos y la uni&oacute;n entre la llamada al m&eacute;todo y el c&oacute;digo a ejecutar se realizan en tiempo de compilaci&oacute;n";
 choices[36][1] = "La verificaci&oacute;n de tipos se realiza en tiempo de ejecuci&oacute;n y la uni&oacute;n entre la llamada al m&eacute;todo y el c&oacute;digo a ejecutar se tipos se puede realizar en tiempo de ejecuci&oacute;n o en tiempo de compilaci&oacute;n";
 choices[36][2] = "La verificaci&oacute;n de tipos se puede realizar en tiempo de ejecuci&oacute;n o en tiempo de compilaci&oacute;n y la uni&oacute;n entre la llamada al m&eacute;todo y el c&oacute;digo a ejecutar se realizan en tiempo de ejecuci&oacute;n";
 choices[36][3] = "La verificaci&oacute;n de tipos se puede realizar en tiempo de ejecuci&oacute;n o en tiempo de compilaci&oacute;n y la uni&oacute;n entre la llamada al m&eacute;todo y el c&oacute;digo a ejecutar se realizan en tiempo de compilaci&oacute;n";
 answers[36] = choices[36][2];
 units[36] = "82";
 comments[36] = "Id Pregunta: 5052. Examen TIC A 2007";


//  Id pregunta: 5105 AÃ±o de creación de pregunta: 2003-01-01
 questions[37]= "38)  Cu&aacute;l de los siguientes es un modelo de estimaci&oacute;n de proyectos software:";
 choices[37]= new Array();
 choices[37][0] = "CMMI";
 choices[37][1] = "COCOMO";
 choices[37][2] = "M&eacute;todo de Cox";
 choices[37][3] = "El plan de SQA";
 answers[37] = choices[37][1];
 units[37] = "89";
 comments[37] = "Id Pregunta: 5105. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5158 AÃ±o de creación de pregunta: 2003-01-01
 questions[38]= "39)  Indique el est&aacute;ndar en el que se basan las redes Ethernet:";
 choices[38]= new Array();
 choices[38][0] = "IEEE 802.2";
 choices[38][1] = "IEEE 802.3";
 choices[38][2] = "IEEE 802.4";
 choices[38][3] = "IEEE 802.5";
 answers[38] = choices[38][1];
 units[38] = "101";
 comments[38] = "Id Pregunta: 5158. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5224 AÃ±o de creación de pregunta: 2007-01-01
 questions[39]= "40)  Cu&aacute;l de las siguientes actividades no pertenece al proceso Mantenimiento de Sistema de Informaci&oacute;n";
 choices[39]= new Array();
 choices[39][0] = "Seguimiento y Evaluaci&oacute;n de los cambios hasta la aceptaci&oacute;n";
 choices[39][1] = "An&aacute;lisis de la petici&oacute;n";
 choices[39][2] = "Registro de la petici&oacute;n";
 choices[39][3] = "Planificaci&oacute;n de la petici&oacute;n";
 answers[39] = choices[39][3];
 units[39] = "86";
 comments[39] = "Id Pregunta: 5224. NULL";


//  Id pregunta: 5242 AÃ±o de creación de pregunta: 2003-01-01
 questions[40]= "41)  Si una vez determinadas las fortalezas y debilidades, as&iacute; como las amenazas y oportunidades, se define una estrategia defensiva:";
 choices[40]= new Array();
 choices[40][0] = "Significa que la empresa est&aacute; preparada para enfrentarse a las amenazas";
 choices[40][1] = "Significa que la empresa se enfrenta a las amenazas externas sin las fortalezas internas necesarias";
 choices[40][2] = "Significa que la empresa cuenta con las fortalezas internas y adem&aacute;s se le presentan oportunidades externas";
 choices[40][3] = "Significa que a la empresa se le presentan oportunidades pero carece de preparaci&oacute;n para afrontarlas";
 answers[40] = choices[40][0];
 units[40] = "77";
 comments[40] = "Id Pregunta: 5242. ";


//  Id pregunta: 5473 AÃ±o de creación de pregunta: 2003-01-01
 questions[41]= "42)  Cual de los siguientes no es un activo en Magerit";
 choices[41]= new Array();
 choices[41][0] = "www";
 choices[41][1] = "url";
 choices[41][2] = "anon";
 choices[41][3] = "edi";
 answers[41] = choices[41][1];
 units[41] = "33";
 comments[41] = "Id Pregunta: 5473. Castilla y Le&oacute;n";


//  Id pregunta: 5571 AÃ±o de creación de pregunta: 2003-01-01
 questions[42]= "43)  &iquest;Cu&aacute;l de las siguientes opciones NO es necesaria para que una red ethernet pueda funcionar en modo d&uacute;plex completo?";
 choices[42]= new Array();
 choices[42][0] = "El medio f&iacute;sico permite la transmisi&oacute;n d&uacute;plex completa";
 choices[42][1] = "La distancia entre las dos estaciones es menor de 50 m";
 choices[42][2] = "Solo hay dos estaciones conectadas entre s&iacute;";
 choices[42][3] = "Las tarjetas de red de ambos equipos soportan el funcionamiento en modo d&uacute;plex completo";
 answers[42] = choices[42][1];
 units[42] = "102";
 comments[42] = "Id Pregunta: 5571. ";


//  Id pregunta: 5604 AÃ±o de creación de pregunta: 2003-01-01
 questions[43]= "44)  Los sistemas en el segunado nivel troncal trabajan en ";
 choices[43]= new Array();
 choices[43][0] = "La segunda ventana &oacute;ptica (1330nm). Es en estos nodos donde se realiza la inserci&oacute;n de programaci&oacute;n local resultando m&aacute;s econ&oacute;mico que se lleve a cabo a nivel el&eacute;ctrico.";
 choices[43][1] = "La tercera ventana &oacute;ptica (1550nm) con la ventaja de tener un mayor alcance.";
 choices[43][2] = "La segunda ventana &oacute;ptica (1330nm), ya que en dicha ventana existen amplificadores &oacute;pticos comerciales de alto rendimiento ";
 choices[43][3] = "La tercera ventana &oacute;ptica (1550nm) siendo necesario hacer una doble conversi&oacute;n (opto-el&eacute;ctrica y electro-&oacute;ptica)";
 answers[43] = choices[43][0];
 units[43] = "105";
 comments[43] = "Id Pregunta: 5604. ";


//  Id pregunta: 5832 AÃ±o de creación de pregunta: 2009-01-01
 questions[44]= "45)  BSA es:";
 choices[44]= new Array();
 choices[44][0] = "Una organizaci&oacute;n que mide la accesibilidad de las Web";
 choices[44][1] = "Una organizaci&oacute;n que audita las comunicaciones y el flujo de informaci&oacute;n eficiente";
 choices[44][2] = "Una organizaci&oacute;n que intenta controlar la pirater&iacute;a de software";
 choices[44][3] = "Una organizaci&oacute;n que audita la seguridad de datos de un CPD de respaldo";
 answers[44] = choices[44][2];
 units[44] = "37";
 comments[44] = "Id Pregunta: 5832. MAP 2008 A1";


//  Id pregunta: 5943 AÃ±o de creación de pregunta: 2009-01-01
 questions[45]= "46)  En el contexto de la virtualizaci&oacute;n, &iquest;qu&eacute; es el hypervisor?";
 choices[45]= new Array();
 choices[45][0] = "Un m&oacute;dulo en el sistema operativo hu&eacute;sped que monitoriza el uso de recursos del mismo";
 choices[45][1] = "La extensi&oacute;n del gestor de procesos del sistema operativo anfitri&oacute;n que permite compartir memoria a los procesos de distintos sistemas operativos hu&eacute;spedes";
 choices[45][2] = "Es la plataforma que permite ejecutar concurrentemente varios sistemas operativos en una m&aacute;quina";
 choices[45][3] = "Es un m&oacute;dulo en el sistema operativo anfitri&oacute;n que monitoriza el uso de la Virtualization API Standard que realizan los sistemas operativos hu&eacute;spedes";
 answers[45] = choices[45][2];
 units[45] = "119";
 comments[45] = "Id Pregunta: 5943. ";


//  Id pregunta: 5967 AÃ±o de creación de pregunta: 2010-01-01
 questions[46]= "47)  Respecto al an&aacute;lisis y gesti&oacute;n de riesgos:";
 choices[46]= new Array();
 choices[46][0] = "En la gesti&oacute;n de riesgos, ning&uacute;n riesgo identificado puede declararse como asumible ya que la metodolog&iacute;a trata de evitar cualquier da&ntilde;o en nuestra organizaci&oacute;n";
 choices[46][1] = "Si tenemos implementadas salvaguardas en nuestro sistema, no tiene sentido disponer de planes de continuidad pues las amenazas no llegar&aacute;n a materializarse";
 choices[46][2] = "Un led que indique el mal funcionamiento de un disco de un RAID puede considerarse como una salvaguarda";
 choices[46][3] = "Cualquier amenaza afecta a todas las dimensiones de un activo";
 answers[46] = choices[46][2];
 units[46] = "33";
 comments[46] = "Id Pregunta: 5967. Castilla La Mancha 2009";


//  Id pregunta: 6107 AÃ±o de creación de pregunta: 2010-01-01
 questions[47]= "48)  Entre las t&eacute;cnicas y pr&aacute;cticas de educci&oacute;n de requisitos utilizadas en la ingenier&iacute;a de requisitos NO se encuentra la siguiente:";
 choices[47]= new Array();
 choices[47][0] = "Brainstorming.";
 choices[47][1] = "Casos de uso.";
 choices[47][2] = "M&eacute;todo Albrecht.";
 choices[47][3] = "Prototipado.";
 answers[47] = choices[47][2];
 units[47] = "78";
 comments[47] = "Id Pregunta: 6107. TIC A 2009";


//  Id pregunta: 6121 AÃ±o de creación de pregunta: 2010-01-01
 questions[48]= "49)  Con respecto a la orquestaci&oacute;n y coreograf&iacute;a de servicios, se&ntilde;ale la respuesta correcta:";
 choices[48]= new Array();
 choices[48][0] = "Un proceso se puede considerar una orquestaci&oacute;n de servicios cuando es controlado totalmente por una &uacute;nica entidad.";
 choices[48][1] = "Un proceso es una coreograf&iacute;a de servicios cuando define las colaboraciones entre cualquier tipo de aplicaciones componentes, independientemente del lenguaje o plataforma en el que est&eacute;n definidas las mismas.";
 choices[48][2] = "A y B son correctas.";
 choices[48][3] = "A y B son incorrectas.";
 answers[48] = choices[48][2];
 units[48] = "51";
 comments[48] = "Id Pregunta: 6121. NULL";


//  Id pregunta: 6125 AÃ±o de creación de pregunta: 2010-01-01
 questions[49]= "50)  El acr&oacute;nimo RSS responde a:";
 choices[49]= new Array();
 choices[49][0] = "Rich Site Summary.";
 choices[49][1] = "RDF Site Summary.";
 choices[49][2] = "Really Simple Syndication.";
 choices[49][3] = "Todos los anteriores.";
 answers[49] = choices[49][3];
 units[49] = "69";
 comments[49] = "Id Pregunta: 6125. TIC A 2009";


//  Id pregunta: 6210 AÃ±o de creación de pregunta: 2010-01-01
 questions[50]= "51)  Respecto a los DFD: &iquest;Cu&aacute;l de las siguientes afirmaciones no es verdadera?";
 choices[50]= new Array();
 choices[50][0] = "No es necesario que los nombres en los almacenes de datos y los de las entidades coincidan";
 choices[50][1] = "Cada almac&eacute;n de los DFD debe corresponder con una entidad, o una relaci&oacute;n o una combinaci&oacute;n de ambos";
 choices[50][2] = "En el caso de utilizar un &uacute;nico diccionario de datos las entradas deber&aacute;n coincidir";
 choices[50][3] = "Deben existir procesos en el DFD para crear y eliminar ocurrencias de cada una de las entidades del modelo de datos";
 answers[50] = choices[50][3];
 units[50] = "81";
 comments[50] = "Id Pregunta: 6210. TICB-2009, bloque desarrollo";


//  Id pregunta: 6274 AÃ±o de creación de pregunta: 2010-01-01
 questions[51]= "52)  &iquest;Qui&eacute;n defini&oacute; el modelo de ciclo de vida en casacada?";
 choices[51]= new Array();
 choices[51][0] = "Roger Pressman";
 choices[51][1] = "Roger Smith";
 choices[51][2] = "Winston Royce ";
 choices[51][3] = "Carma McClure";
 answers[51] = choices[51][2];
 units[51] = "76";
 comments[51] = "Id Pregunta: 6274. ";


//  Id pregunta: 6326 AÃ±o de creación de pregunta: 2010-01-01
 questions[52]= "53)  El comando COUNT:";
 choices[52]= new Array();
 choices[52][0] = "Siempre va acompa&ntilde;ado de *";
 choices[52][1] = "Sirve para contar las ocurrencias del atributo al que acompa&ntilde;e.";
 choices[52][2] = "S&oacute;lo aparece despu&eacute;s del WHERE.";
 choices[52][3] = "Obliga a que aparezca la cl&aacute;usula GROUP BY.";
 answers[52] = choices[52][1];
 units[52] = "58";
 comments[52] = "Id Pregunta: 6326. ";


//  Id pregunta: 6538 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)  En relaci&oacute;n a las t&eacute;cnicas de control de acceso";
 choices[53]= new Array();
 choices[53][0] = "DAC permite a los propietarios de los datos elegir los sujetos que tienen acceso a los mismos";
 choices[53][1] = "MAC usa un sistema de etiquetado";
 choices[53][2] = "El control de acceso no discrecional usa un m&eacute;todo basado en roles para determinar los permisos";
 choices[53][3] = "Todas las respuestas anteriores son correctas";
 answers[53] = choices[53][3];
 units[53] = "111";
 comments[53] = "Id Pregunta: 6538. NULL";


//  Id pregunta: 6578 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  La telefon&iacute;a IP";
 choices[54]= new Array();
 choices[54][0] = "Combina datos, voz y video en un &uacute;nico paquete";
 choices[54][1] = "Separa la red de datos de la voz";
 choices[54][2] = "Los procesos utilizados no dependen del tiempo";
 choices[54][3] = "A y C son correctas";
 answers[54] = choices[54][0];
 units[54] = "117";
 comments[54] = "Id Pregunta: 6578. NULL";


//  Id pregunta: 6614 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  De las siguientes actividades, &iquest;cu&aacute;l forma parte del proceso de An&aacute;lisis del Sistema de Informaci&oacute;n (ASI) de M&eacute;trica?";
 choices[55]= new Array();
 choices[55][0] = "Establecimiento de Requisitos";
 choices[55][1] = "Identificaci&oacute;n de Requisitos";
 choices[55][2] = "Establecimiento de Requisitos de Implantaci&oacute;n";
 choices[55][3] = "Definici&oacute;n de Requisitos del Sistema";
 answers[55] = choices[55][0];
 units[55] = "86";
 comments[55] = "Id Pregunta: 6614. NULL";


//  Id pregunta: 6624 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  &iquest;Cu&aacute;l de las siguientes NO es una norma aplicable a la Calidad del Software?";
 choices[56]= new Array();
 choices[56][0] = "ISO 15.504";
 choices[56][1] = "ISO 19011";
 choices[56][2] = "ISO 9000:2000";
 choices[56][3] = "ISO 15.408";
 answers[56] = choices[56][3];
 units[56] = "87";
 comments[56] = "Id Pregunta: 6624. NULL";


//  Id pregunta: 7139 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  La Ley Org&aacute;nica 15/1999 de Protecci&oacute;n de Datos de Car&aacute;cter Personal, marca el periodo de prescripci&oacute;n de una infracci&oacute;n grave en:";
 choices[57]= new Array();
 choices[57][0] = "1 a&ntilde;o";
 choices[57][1] = "2 a&ntilde;os";
 choices[57][2] = "6 meses";
 choices[57][3] = "10 meses";
 answers[57] = choices[57][1];
 units[57] = "29";
 comments[57] = "Id Pregunta: 7139. Examen TIC B 2009";


//  Id pregunta: 7248 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  En el protocolo IPv6, las direcciones constan de:";
 choices[58]= new Array();
 choices[58][0] = "6 bytes";
 choices[58][1] = "8 bytes";
 choices[58][2] = "16 bytes";
 choices[58][3] = "32 bytes";
 answers[58] = choices[58][2];
 units[58] = "100";
 comments[58] = "Id Pregunta: 7248. Examen TIC B 2009";


//  Id pregunta: 7300 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  En reconocimiento autom&aacute;tico del habla (ASR), se utiliza el siguiente concepto:";
 choices[59]= new Array();
 choices[59][0] = "Trigrama";
 choices[59][1] = "Trifonema";
 choices[59][2] = "Al&oacute;fono";
 choices[59][3] = "Todos son conceptos utilizados en ASR";
 answers[59] = choices[59][3];
 units[59] = "94";
 comments[59] = "Id Pregunta: 7300. NULL";


//  Id pregunta: 7328 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  &iquest;Qu&eacute; instituci&oacute;n representa a Espa&ntilde;a en ISO?";
 choices[60]= new Array();
 choices[60][0] = "SETSI";
 choices[60][1] = "Red.es";
 choices[60][2] = "AENOR";
 choices[60][3] = "INTECO";
 answers[60] = choices[60][2];
 units[60] = "42";
 comments[60] = "Id Pregunta: 7328. NULL";


//  Id pregunta: 8165 AÃ±o de creación de pregunta: 2011-01-01
 questions[61]= "62)  &iquest;Cu&aacute;l es la vigencia temporal de los certificados electr&oacute;nicos contenidos en el DNIe?:";
 choices[61]= new Array();
 choices[61][0] = "Ilimitada.";
 choices[61][1] = "No podr&aacute; ser superior a 5 a&ntilde;os.";
 choices[61][2] = "30 meses.";
 choices[61][3] = "El certificado de autenticidad 24 meses y el de firma 18.";
 answers[61] = choices[61][1];
 units[61] = "74";
 comments[61] = "Id Pregunta: 8165. Examen TIC A1 2010. RD 414/2015 que modifica el RD 1553/2005 de expedici&oacute;n del DNI.";


//  Id pregunta: 8333 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  &iquest;Cu&aacute;l de las siguientes no es una metodolog&iacute;a &aacute;gil de desarrollo?";
 choices[62]= new Array();
 choices[62][0] = "Programaci&oacute;n Extrema (XP).";
 choices[62][1] = "SCRUM.";
 choices[62][2] = "RDS.";
 choices[62][3] = "Feature-Driven Development (FDD).";
 answers[62] = choices[62][2];
 units[62] = "79";
 comments[62] = "Id Pregunta: 8333. Examen TIC A2 2010";


//  Id pregunta: 8432 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  De los siguientes algoritmos de asignaci&oacute;n del turno de ejecuci&oacute;n de los procesos, &iquest;Cu&aacute;l de ellos consiste en asignar a cada proceso un intervalo de tiempo de ejecuci&oacute;n (llamado time-slice), y cada vez que se vence ese intervalo se copia el contexto del proceso a un lugar seguro y se le asigna su turno a otro proceso?";
 choices[63]= new Array();
 choices[63][0] = "SJF (Shortest Job First)";
 choices[63][1] = "FIFO (First In First Out";
 choices[63][2] = "Por prioridad";
 choices[63][3] = "Round Robin";
 answers[63] = choices[63][3];
 units[63] = "52";
 comments[63] = "Id Pregunta: 8432. ";


//  Id pregunta: 8434 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  &iquest;Cu&aacute;l de las siguientes normativas no regula la factura electr&oacute;nica?";
 choices[64]= new Array();
 choices[64][0] = "Orden EHA/962/2007";
 choices[64][1] = "Orden PRE/2971/2007";
 choices[64][2] = "Ley 30/2007";
 choices[64][3] = "Ley 59/2003";
 answers[64] = choices[64][3];
 units[64] = "70";
 comments[64] = "Id Pregunta: 8434. NULL";


//  Id pregunta: 8435 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  &iquest;Qu&eacute; proyecto europeo pretende establecer una plataforma de interoperabilidad y reconocimiento mutuo transfronterizo entre las identidades electr&oacute;nicas existentes en cada Estado Europeo?";
 choices[65]= new Array();
 choices[65][0] = "Conecta";
 choices[65][1] = "Robinson";
 choices[65][2] = "Stork";
 choices[65][3] = "Interoperability card";
 answers[65] = choices[65][2];
 units[65] = "118";
 comments[65] = "Id Pregunta: 8435. ";


//  Id pregunta: 8464 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  El .NET Framework 3.5, facilita tareas de programaci&oacute;n de gesti&oacute;n de cadenas de texto, colecciones de datos, conectividad con base de datos, acceso a fichero, entre otros; adem&aacute;s incluye tipos para soportar varios escenarios de desarrollo especializado. &iquest;Cu&aacute;l de los siguientes servicios o aplicaciones pueden desarrollarse sobre .NET Framework?:";
 choices[66]= new Array();
 choices[66][0] = "Windows Forms";
 choices[66][1] = "Web Services";
 choices[66][2] = "Ambos";
 choices[66][3] = "Ninguno";
 answers[66] = choices[66][2];
 units[66] = "115";
 comments[66] = "Id Pregunta: 8464. Analista Ayto. Madrid 2010";


//  Id pregunta: 8616 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  El mantenimiento que tiene por objeto adelantarse al deterioro de los equipos como consecuencia del uso y del paso del tiempo, se denomina:";
 choices[67]= new Array();
 choices[67][0] = "Mantenimiento adaptativo";
 choices[67][1] = "Mantenimiento preventivo";
 choices[67][2] = "Mantenimiento correctivo";
 choices[67][3] = "Mantenimiento evolutivo";
 answers[67] = choices[67][1];
 units[67] = "86";
 comments[67] = "Id Pregunta: 8616. Examen TIC A2 2010 interna";


//  Id pregunta: 8672 AÃ±o de creación de pregunta: 2011-01-01
 questions[68]= "69)  Indique cu&aacute;l de las siguientes no es una entidad definida dentro de IP m&oacute;vil:";
 choices[68]= new Array();
 choices[68][0] = "Nodo local (Home Nodo)";
 choices[68][1] = "Agente local (Home Agent)";
 choices[68][2] = "Direcci&oacute;n de auxilio (Care-of-Address)";
 choices[68][3] = "Nodo m&oacute;vil (Mobile Nodo)";
 answers[68] = choices[68][0];
 units[68] = "100,109";
 comments[68] = "Id Pregunta: 8672. Examen UPM A2 2011";


//  Id pregunta: 8769 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  La m&aacute;xima longitud de un datagrama IP es:";
 choices[69]= new Array();
 choices[69][0] = "128 Kbytes";
 choices[69][1] = "64 Kbytes.";
 choices[69][2] = "32 Kbytes";
 choices[69][3] = "No tiene longitud m&aacute;xima";
 answers[69] = choices[69][1];
 units[69] = "100";
 comments[69] = "Id Pregunta: 8769. Examen TIC A2 2010 interna";


//  Id pregunta: 8793 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  &iquest;Cu&aacute;l debe ser la parte local del elemento ra&iacute;z de un documento XHTML 2.0 de conformidad estricta?";
 choices[70]= new Array();
 choices[70][0] = "La parte local del elemento ra&iacute;z del documento debe ser &quot;html&quot;.";
 choices[70][1] = "La parte local del elemento ra&iacute;z del documento debe ser &quot;xhtml&quot;. ";
 choices[70][2] = "La parte local del elemento ra&iacute;z del documento debe ser &quot;xml&quot;. ";
 choices[70][3] = "No puede existir una declaraci&oacute;n DOCTYPE.";
 answers[70] = choices[70][0];
 units[70] = "69";
 comments[70] = "Id Pregunta: 8793. Examen UPM A2 2011";


//  Id pregunta: 8799 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  &iquest;Con qu&eacute; siglas se identifica el Common Language Runtime de la plataforma .NET?";
 choices[71]= new Array();
 choices[71][0] = "CLRUN";
 choices[71][1] = "CLRNET";
 choices[71][2] = "COLR";
 choices[71][3] = "CLR";
 answers[71] = choices[71][3];
 units[71] = "59, 115";
 comments[71] = "Id Pregunta: 8799. Examen UPM A2 2011";


//  Id pregunta: 8954 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  &iquest;Para qu&eacute; se utiliza el comando fdisk?:";
 choices[72]= new Array();
 choices[72][0] = "Para formatear una partici&oacute;n";
 choices[72][1] = "Para formatear un disco completo";
 choices[72][2] = "Para crear una partici&oacute;n";
 choices[72][3] = "Para crear i-nodos";
 answers[72] = choices[72][2];
 units[72] = "53,54";
 comments[72] = "Id Pregunta: 8954. ";


//  Id pregunta: 8967 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l de los siguientes lenguajes de programaci&oacute;n es fuertemente tipado?";
 choices[73]= new Array();
 choices[73][0] = "Lisp.";
 choices[73][1] = "Perl.";
 choices[73][2] = "Php.";
 choices[73][3] = "Python.";
 answers[73] = choices[73][3];
 units[73] = "80,81,82,83,84";
 comments[73] = "Id Pregunta: 8967. ";


//  Id pregunta: 9022 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  Un CSS (Cent Call Second) se emplea en telefon&iacute;a como una medida de tr&aacute;fico telef&oacute;nico (volumen de tr&aacute;fico). Un CCS es el tr&aacute;fico telef&oacute;nico causado por una llamada de 100 segundos de duraci&oacute;n. &iquest;Cuantos CSS tiene un Erlang?";
 choices[74]= new Array();
 choices[74][0] = "1 CSS.";
 choices[74][1] = "100 CSS.";
 choices[74][2] = "36 CSS.";
 choices[74][3] = "10 CSS";
 answers[74] = choices[74][2];
 units[74] = "104";
 comments[74] = "Id Pregunta: 9022. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9025 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  En una centralita que se une a la red p&uacute;blica mediante un primario RDSI:";
 choices[75]= new Array();
 choices[75][0] = "Se pueden establecer 30 comunicaciones en total (entre entrantes y salientes) de forma simult&aacute;nea con la red p&uacute;blica.";
 choices[75][1] = "Se pueden establecer 30 comunicaciones entrantes y 30 salientes simult&aacute;neas con la red p&uacute;blica.";
 choices[75][2] = "Se pueden establecer 32 comunicaciones totales: 30 entrantes y 2 salientes, de forma simult&aacute;nea con la red p&uacute;blica.";
 choices[75][3] = "Se pueden establecer 32 comunicaciones totales: 16 entrantes y 16 salientes, de forma simult&aacute;nea con la red p&uacute;blica.";
 answers[75] = choices[75][0];
 units[75] = "103";
 comments[75] = "Id Pregunta: 9025. Teleco Ayto. Madrid 2010";


//  Id pregunta: 9054 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  &iquest;Cual de las siguientes NO es una actividad del estadard ISO 13407?";
 choices[76]= new Array();
 choices[76][0] = "Generaci&oacute;n de las soluciones de dise&ntilde;o";
 choices[76][1] = "Di&aacute;logo simple y natural";
 choices[76][2] = "Producci&oacute;n de soluciones de dise&ntilde;o";
 choices[76][3] = "Entender y especificar el contexto de uso.";
 answers[76] = choices[76][0];
 units[76] = "39";
 comments[76] = "Id Pregunta: 9054. NULL";


//  Id pregunta: 9118 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  &iquest;C&oacute;mo se pueden clasificar los sistemas SIMD?";
 choices[77]= new Array();
 choices[77][0] = "Con CPU particionada";
 choices[77][1] = "Con m&uacute;ltiples ALUS";
 choices[77][2] = "Como A) y como B)";
 choices[77][3] = "Ninguna respuesta es correcta";
 answers[77] = choices[77][2];
 units[77] = "45";
 comments[77] = "Id Pregunta: 9118. ";


//  Id pregunta: 9197 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  &iquest;Est&aacute;n protegidos los manuales de uso de un programa de ordenador?";
 choices[78]= new Array();
 choices[78][0] = "Los manuales de uso de un programa de ordeandor no est&aacute;n protegidos.";
 choices[78][1] = "Si, como obra literaria.";
 choices[78][2] = "Como obra literaria, pero s&oacute;lo si tienen suficiente calidad artistica.";
 choices[78][3] = "Si, como parte integrante del concepto &quot;programa de ordenador&quot;.";
 answers[78] = choices[78][3];
 units[78] = "36";
 comments[78] = "Id Pregunta: 9197. ";


//  Id pregunta: 9210 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  &iquest;C&oacute;mo son las conexiones FC?";
 choices[79]= new Array();
 choices[79][0] = "Punto a punto";
 choices[79][1] = "Bucle arbitrado";
 choices[79][2] = "Red Conmutada";
 choices[79][3] = "Todas son v&aacute;lidas";
 answers[79] = choices[79][3];
 units[79] = "48";
 comments[79] = "Id Pregunta: 9210. ";


//  Id pregunta: 9331 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  Acerca de las ventanas de transmision en las fibras opticas, se puede afirmar";
 choices[80]= new Array();
 choices[80][0] = "son provocadas por la presencia del ion hidroxilo OH-";
 choices[80][1] = "la mas amplia es la primera ventana, entre los 0,8 y 0,9 micras";
 choices[80][2] = "alrededor de los 1550 nm existe una ventana de transmision.";
 choices[80][3] = "la tercera ventana obliga a usar transmisiones monomodo";
 answers[80] = choices[80][2];
 units[80] = "99";
 comments[80] = "Id Pregunta: 9331. NULL";


//  Id pregunta: 9380 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  &iquest;De qu&eacute; est&aacute;ndar se estar&iacute;a hablando si se menciona una Interfaz aerea avanzada con velocidades de transmisi&oacute;n de 100 Mbps para dispositivos fijos y 1 Gbps para dispositivos m&oacute;viles?";
 choices[81]= new Array();
 choices[81][0] = "802.16e";
 choices[81][1] = "802.11-2012";
 choices[81][2] = "802.16m";
 choices[81][3] = "802.11ac";
 answers[81] = choices[81][2];
 units[81] = "101";
 comments[81] = "Id Pregunta: 9380. ";


//  Id pregunta: 9393 AÃ±o de creación de pregunta: 2013-01-01
 questions[82]= "83)  Ordene, de menor a mayor velocidad m&aacute;xima de transmisi&oacute;n de datos, las siguientes tecnolog&iacute;as de comunicaciones m&oacute;viles:";
 choices[82]= new Array();
 choices[82][0] = "GSM, GPRS, EDGE, HSPA+.";
 choices[82][1] = "GSM. GPRS, UMTS, HSCSD.";
 choices[82][2] = "GSM, HSUPA, GPRS, UMTS.";
 choices[82][3] = "Ninguna de las respuestas es correcta.";
 answers[82] = choices[82][0];
 units[82] = "108";
 comments[82] = "Id Pregunta: 9393. Examen Teleco Ayto Madrid 2010.";


//  Id pregunta: 9921 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  En M&eacute;trica v3, en relaci&oacute;n al modelo entidad/relaci&oacute;n extendido, dentro de las relaciones d&eacute;biles, &iquest;qu&eacute; dos divisiones se distinguen?";
 choices[83]= new Array();
 choices[83][0] = "Dependencia en existencia y dependencia en identificaci&oacute;n.";
 choices[83][1] = "Dependencia en composici&oacute;n y dependencia en identificaci&oacute;n.";
 choices[83][2] = "Dependencia en existencia y dependencia en discriminaci&oacute;n.";
 choices[83][3] = "Dependencia en composici&oacute;n y dependencia en discriminaci&oacute;n.";
 answers[83] = choices[83][0];
 units[83] = "86,58";
 comments[83] = "Id Pregunta: 9921. TIC A2, Examen 2013";


//  Id pregunta: 10122 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  En el encaminamiento por estado de los enlaces cada router:";
 choices[84]= new Array();
 choices[84][0] = "Env&iacute;a una tabla a sus routers vecinos con la distancia de &eacute;l a todos los destinos. ";
 choices[84][1] = "Env&iacute;a una tabla a todos los routers con la distancia de &eacute;l a todos los destinos.";
 choices[84][2] = "Env&iacute;a una tabla a sus routers vecinos con la distancia de &eacute;l a todos sus vecinos.";
 choices[84][3] = "Env&iacute;a una tabla a todos los routers con la distancia de &eacute;l a todos sus vecinos.";
 answers[84] = choices[84][3];
 units[84] = "102";
 comments[84] = "Id Pregunta: 10122. ";


//  Id pregunta: 10199 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  &iquest;Qu&eacute; grupo de trabajo del IEEE estandariza el mecanismo de seguridad WPA2 (Wireless Protective Access 2)?";
 choices[85]= new Array();
 choices[85][0] = "802.11f";
 choices[85][1] = "802.11h";
 choices[85][2] = "802.11i";
 choices[85][3] = "802.11r";
 answers[85] = choices[85][2];
 units[85] = "107";
 comments[85] = "Id Pregunta: 10199. NULL";


//  Id pregunta: 10222 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Conociendo que la variable es de tipo byte y su valor es 12, cual ser&aacute; el resultado de la sentencia:System.out.println(busca == 6 + 6 ? &quot;true&quot; : &quot;false&quot;);";
 choices[86]= new Array();
 choices[86][0] = "Da un error de compilaci&oacute;n";
 choices[86][1] = "TRUE";
 choices[86][2] = "FALSE";
 choices[86][3] = "12";
 answers[86] = choices[86][1];
 units[86] = "60";
 comments[86] = "Id Pregunta: 10222. NULL";


//  Id pregunta: 10232 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  &iquest;Cual de las siguientes clases o interfaces es usado para recuperar informaci&oacute;n de la sesi&oacute;n asociada con el usuario?:";
 choices[87]= new Array();
 choices[87][0] = "GenericServlet";
 choices[87][1] = "ServletConfig";
 choices[87][2] = "ServletContext";
 choices[87][3] = "HttpServletRequest";
 answers[87] = choices[87][3];
 units[87] = "116";
 comments[87] = "Id Pregunta: 10232. NULL";


//  Id pregunta: 10259 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  El derecho de oposici&oacute;n al tratamiento de datos de car&aacute;cter personal tiene sentido:";
 choices[88]= new Array();
 choices[88][0] = "Para los ficheros mencionados en b) y c)";
 choices[88][1] = "Para ficheros que recojan datos de car&aacute;cter personal y no sea preciso el consentimiento del afectado para realizar el tratamiento";
 choices[88][2] = "Para ficheros que recojan datos de car&aacute;cter personal y tengan por objeto realizar actividades de prospecci&oacute;n comercial";
 choices[88][3] = "Para todo tipo de ficheros que recojan datos de car&aacute;cter personal";
 answers[88] = choices[88][0];
 units[88] = "29";
 comments[88] = "Id Pregunta: 10259. Art&iacute;culo 34 a) y b) del RD 1720/2007";


//  Id pregunta: 10443 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  Seg&uacute;n la metodolog&iacute;a M&eacute;trica V3 indicar en cu&aacute;l de las siguientes tareas de la Planificaci&oacute;n de Sistemas de Informaci&oacute;n NO participa el Comit&eacute; de Direcci&oacute;n. ";
 choices[89]= new Array();
 choices[89][0] = "Identificaci&oacute;n del Alcance del Plan de Sistemas de Informaci&oacute;n.";
 choices[89][1] = "Comunicaci&oacute;n del Plan de Trabajo.";
 choices[89][2] = "Selecci&oacute;n de la Arquitectura Tecnol&oacute;gica. ";
 choices[89][3] = "Evaluaci&oacute;n y Mejora de la Propuesta.";
 answers[89] = choices[89][2];
 units[89] = "86";
 comments[89] = "Id Pregunta: 10443. Examen TIC A1 2013";


//  Id pregunta: 10543 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  El plan de telecomunicaciones y redes ultrarr&aacute;pidas, dise&ntilde;ado para dar cumplimiento a los objetivos de banda ancha fijados por la Agenda Digital para Europa, fija como objetivos para el 2015:";
 choices[90]= new Array();
 choices[90][0] = "50% de la poblaci&oacute;n con cobertura de m&aacute;s de 100 Mbps.";
 choices[90][1] = "25% de hogares conectados a redes NGA";
 choices[90][2] = "75% de la poblaci&oacute;n con cobertura 4G";
 choices[90][3] = "Todas las anteriores ";
 answers[90] = choices[90][3];
 units[90] = "30";
 comments[90] = "Id Pregunta: 10543. http://www.agendadigital.gob.es/planes-actuaciones/Paginas/plan-telecomunicaciones-redes.aspx";


//  Id pregunta: 10695 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  La Ley 39/2015 prevee Registros Electr&oacute;nicos de Apoderamientos:";
 choices[91]= new Array();
 choices[91][0] = "Este Registro Electr&oacute;nico ser&aacute; &uacute;nico para todas las Administraciones P&uacute;blicas.";
 choices[91][1] = "Este Registro Electr&oacute;nico ser&aacute; &uacute;nico para toda la Administraci&oacute;n General del Estado.";
 choices[91][2] = "La Ley &uacute;nicamente establece la creaci&oacute;n de dichos Registros.";
 choices[91][3] = "Esta Ley no se&ntilde;ala nada sobre dichos Registros.";
 answers[91] = choices[91][1];
 units[91] = "30";
 comments[91] = "Id Pregunta: 10695. ";


//  Id pregunta: 11094 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l de los siguientes no es un nivel del modelo de Capacidad y Madurez (CMM)?";
 choices[92]= new Array();
 choices[92][0] = "Repetible";
 choices[92][1] = "Verificado";
 choices[92][2] = "Gestionado";
 choices[92][3] = "Optimizado";
 answers[92] = choices[92][1];
 units[92] = "27";
 comments[92] = "Id Pregunta: 11094. ";


//  Id pregunta: 11204 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Cu&aacute;ntos objetivos tiene la Agenda Digital Espa&ntilde;ola?";
 choices[93]= new Array();
 choices[93][0] = "6";
 choices[93][1] = "7";
 choices[93][2] = "8";
 choices[93][3] = "9";
 answers[93] = choices[93][0];
 units[93] = "30";
 comments[93] = "Id Pregunta: 11204. ";


//  Id pregunta: 11238 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Entre los principios del texto refundido de la ley de contratos del sector p&uacute;blico no se encuentra:";
 choices[94]= new Array();
 choices[94][0] = "Libertad de acceso a las licitaciones.";
 choices[94][1] = "Publicidad y transparencia de los procedimientos.";
 choices[94][2] = "No discriminaci&oacute;n e igualdad de trato entre los candidatos.";
 choices[94][3] = "Mejorar la competencia.";
 answers[94] = choices[94][3];
 units[94] = "41";
 comments[94] = "Id Pregunta: 11238. ";


//  Id pregunta: 11312 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Se&ntilde;ale de entre los siguientes, cu&aacute;l no es un ataque en una red";
 choices[95]= new Array();
 choices[95][0] = "Ping de la muerte";
 choices[95][1] = "ARP poisoning";
 choices[95][2] = "Smurf";
 choices[95][3] = "Snicker";
 answers[95] = choices[95][3];
 units[95] = "111";
 comments[95] = "Id Pregunta: 11312. ";


//  Id pregunta: 11327 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  En MPLS, c&oacute;mo se llama el router que no es de frontera";
 choices[96]= new Array();
 choices[96][0] = "LSR";
 choices[96][1] = "LER";
 choices[96][2] = "LSP";
 choices[96][3] = "FEC";
 answers[96] = choices[96][0];
 units[96] = "100";
 comments[96] = "Id Pregunta: 11327. ";


//  Id pregunta: 11377 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de los siguientes atributos debe entregar un servicio de TI a los clientes?";
 choices[97]= new Array();
 choices[97][0] = "Capacidades";
 choices[97][1] = "Coste";
 choices[97][2] = "Riesgo";
 choices[97][3] = "Valor";
 answers[97] = choices[97][3];
 units[97] = "98";
 comments[97] = "Id Pregunta: 11377. ";


//  Id pregunta: 11390 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;l de las siguientes afirmaciones es correcta para todos los procesos?";
 choices[98]= new Array();
 choices[98][0] = "Definen funciones como parte de su dise&ntilde;o";
 choices[98][1] = "Entregan resultados al cliente o a interesados";
 choices[98][2] = "Son llevados a cabo por un proveedor de servicios externo, en apoyo a un cliente";
 choices[98][3] = "Son unidades de organizaciones responsables de resultados espec&iacute;ficos";
 answers[98] = choices[98][1];
 units[98] = "98";
 comments[98] = "Id Pregunta: 11390. ";


//  Id pregunta: 11459 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Seg&uacute;n la Ley 9/2014, el Gobierno, en relaci&oacute;n a la administraci&oacute;n del dominio p&uacute;blico radioel&eacute;ctrico, establecer&aacute;:";
 choices[99]= new Array();
 choices[99][0] = "La adecuada utilizaci&oacute;n del espectro mediante el empleo de equipos p&uacute;blicos.";
 choices[99][1] = "La correcta utilizaci&oacute;n de frecuencias por parte de los operadores.";
 choices[99][2] = "La inspecci&oacute;n por un ente privado del nivel radioel&eacute;ctrico tolerable.";
 choices[99][3] = "Ninguna de las anteriores.";
 answers[99] = choices[99][3];
 units[99] = "110";
 comments[99] = "Id Pregunta: 11459. ";


