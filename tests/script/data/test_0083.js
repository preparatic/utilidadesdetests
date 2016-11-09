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

//  Id pregunta: 125 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  El American National Standard Institute (ANSI):";
 choices[0]= new Array();
 choices[0][0] = "Es el representante en EE.UU. de la ISO";
 choices[0][1] = "Ha desarrollado el est&aacute;ndar FDDI";
 choices[0][2] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son falsas";
 choices[0][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;b&rsquo; son verdaderas";
 answers[0] = choices[0][0];
 units[0] = "42";
 comments[0] = "Id Pregunta: 125. ";


//  Id pregunta: 188 AÃ±o de creación de pregunta: 2004-01-01
 questions[1]= "2)  En relaci&oacute;n con la auditor&iacute;a inform&aacute;tica se&ntilde;alar cu&aacute;l de las siguientes afirmaciones es falsa";
 choices[1]= new Array();
 choices[1][0] = "El informe final deber&aacute; estar compuesto por las entrevistas en profundidad y datos recopilados durante las fases de revisi&oacute;n y verificaci&oacute;n.";
 choices[1][1] = "Se entrevistar&aacute; al mayor n&uacute;mero de usuarios posible";
 choices[1][2] = "Las entrevistas no tendr&aacute;n una duraci&oacute;n superior a dos horas y media";
 choices[1][3] = "Para la validaci&oacute;n de la carga de trabajo se utilizar&aacute;n cuestionarios y entrevistas planificadas.";
 answers[1] = choices[1][2];
 units[1] = "31,32,33";
 comments[1] = "Id Pregunta: 188. Similar a examen TIC SS A 2003";


//  Id pregunta: 246 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  En una organizaci&oacute;n de tipo dinosaurio:";
 choices[2]= new Array();
 choices[2][0] = "El HW est&aacute; distribuido, y no se descentraliza la capacidad de realizar SW ni las decisiones";
 choices[2][1] = "El HW est&aacute; distribuido y el desarrollo tambi&eacute;n, pero no las decisiones";
 choices[2][2] = "El HW, el desarrollo y las decisiones no se descentralizan";
 choices[2][3] = "El HW no est&aacute; distribuido y se descentraliza la capacidad de realizar SW y las decisiones";
 answers[2] = choices[2][2];
 units[2] = "22";
 comments[2] = "Id Pregunta: 246. ";


//  Id pregunta: 421 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  Se entiende por seguridad inform&aacute;tica el conjunto de t&eacute;cnicas y procedimientos que garantizan:";
 choices[3]= new Array();
 choices[3][0] = "La disponibilidad de la informaci&oacute;n, la exactitud de la informaci&oacute;n y la confidencialidad de los datos";
 choices[3][1] = "La exactitud de la informaci&oacute;n, la integridad del sistema y la confidencialidad de los datos";
 choices[3][2] = "La disponibilidad de la informaci&oacute;n, la integridad del sistema y la confidencialidad de los datos";
 choices[3][3] = "La disponibilidad de la informaci&oacute;n, la integridad del sistema y la exactitud de la informaci&oacute;n";
 answers[3] = choices[3][2];
 units[3] = "33";
 comments[3] = "Id Pregunta: 421. ";


//  Id pregunta: 793 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;Qu&eacute; significado tiene el concepto &ldquo;World Wide Grid&rdquo; (WWG)?:";
 choices[4]= new Array();
 choices[4][0] = "Compartici&oacute;n de informaci&oacute;n a trav&eacute;s de internet";
 choices[4][1] = "Compartici&oacute;n de datos e infraestructuras inform&aacute;ticas entre todas las disciplinas cient&iacute;ficas y todos los campos de la industria entre equipos dispersos";
 choices[4][2] = "La extensi&oacute;n de Internet a todos los rincones del mundo";
 choices[4][3] = "Ninguna de las anteriores";
 answers[4] = choices[4][1];
 units[4] = "45";
 comments[4] = "Id Pregunta: 793. ";


//  Id pregunta: 976 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  De acuerdo al modelo vectorial, &iquest;cu&aacute;l de los siguientes datos no se representa en un sistema de informaci&oacute;n geogr&aacute;fica?:";
 choices[5]= new Array();
 choices[5][0] = "Arcos circulares.";
 choices[5][1] = "Pol&iacute;gonos.";
 choices[5][2] = "L&iacute;neas.";
 choices[5][3] = "Matrices de celdas.";
 answers[5] = choices[5][3];
 units[5] = "67";
 comments[5] = "Id Pregunta: 976. NULL";


//  Id pregunta: 981 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  De los siguientes algoritmos cript&oacute;graficos se&ntilde;ale cu&aacute;l es de clave p&uacute;blica:";
 choices[6]= new Array();
 choices[6][0] = "DES (Data Encryption Standard)";
 choices[6][1] = "RSA (Rivest, Shamir, Adelman)";
 choices[6][2] = "IDEA (International Data Encryption Algorithm)";
 choices[6][3] = "LOKI";
 answers[6] = choices[6][1];
 units[6] = "72";
 comments[6] = "Id Pregunta: 981. ";


//  Id pregunta: 1457 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  &iquest;Podr&iacute;a indicar la organizaci&oacute;n que ha desarrollado el est&aacute;ndar &lsquo;motif&rsquo;?:";
 choices[7]= new Array();
 choices[7][0] = "Sun Microsystems";
 choices[7][1] = "OSF (Open Group)";
 choices[7][2] = "Departamento de Defensa de EE.UU.";
 choices[7][3] = "MIT (Massachusets Institute of Technology)";
 answers[7] = choices[7][1];
 units[7] = "54";
 comments[7] = "Id Pregunta: 1457. NULL";


//  Id pregunta: 1489 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  El conocido est&aacute;ndar FireWire es el est&aacute;ndar IEEE:";
 choices[8]= new Array();
 choices[8][0] = "1284";
 choices[8][1] = "1394";
 choices[8][2] = "1384";
 choices[8][3] = "1294";
 answers[8] = choices[8][1];
 units[8] = "47";
 comments[8] = "Id Pregunta: 1489. ";


//  Id pregunta: 1498 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  La Ley de Servicios de la Sociedad de la Informacion y Comercio Electr&oacute;nico se conoce como:";
 choices[9]= new Array();
 choices[9][0] = "30/1992";
 choices[9][1] = "34/2002";
 choices[9][2] = "30/2002";
 choices[9][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[9] = choices[9][1];
 units[9] = "30";
 comments[9] = "Id Pregunta: 1498. NULL";


//  Id pregunta: 1525 AÃ±o de creación de pregunta: 2003-01-01
 questions[10]= "11)  Dentro de las t&eacute;cnicas de representaci&oacute;n del conocimiento indicar a que modelo pertenecen los algoritmos gen&eacute;ticos";
 choices[10]= new Array();
 choices[10][0] = "Modelo Simb&oacute;lico";
 choices[10][1] = " Modelo de conocimiento profundo";
 choices[10][2] = " Modelo Param&eacute;trico";
 choices[10][3] = "Razonamiento multinivel";
 answers[10] = choices[10][2];
 units[10] = "64";
 comments[10] = "Id Pregunta: 1525. ";


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


//  Id pregunta: 1536 AÃ±o de creación de pregunta: 2003-01-01
 questions[12]= "13)  &iquest; Cu&aacute;l es el t&eacute;rmino con el que se denomina la personalizaci&oacute;n en apariencia y prestaciones de un ordenador ?";
 choices[12]= new Array();
 choices[12][0] = "Mobbing";
 choices[12][1] = "e-learning";
 choices[12][2] = "Modding";
 choices[12][3] = "customizing";
 answers[12] = choices[12][2];
 units[12] = "48";
 comments[12] = "Id Pregunta: 1536. NULL";


//  Id pregunta: 1562 AÃ±o de creación de pregunta: 2003-01-01
 questions[13]= "14)  &iquest;Cu&aacute;l de los siguientes objetivos est&aacute; al margen de la teor&iacute;a de la conmutaci&oacute;n?";
 choices[13]= new Array();
 choices[13][0] = "Obtener los circuitos l&oacute;gicos que representan a las diferentes funciones booleanas.";
 choices[13][1] = "Obtener el circuito de coste m&iacute;nimo.";
 choices[13][2] = "Obtener en un tiempo aceptable un circuito que reproduzca la funci&oacute;n booleana adecuada.";
 choices[13][3] = "Dise&ntilde;ar los circuitos que permitan la transmisi&oacute;n de los datos hasta un receptor situado a una cierta distancia.";
 answers[13] = choices[13][3];
 units[13] = "";
 comments[13] = "Id Pregunta: 1562. Junta Andaluc&iacute;a";


//  Id pregunta: 1635 AÃ±o de creación de pregunta: 2003-01-01
 questions[14]= "15)  Indique la afirmaci&oacute;n correcta:";
 choices[14]= new Array();
 choices[14][0] = "Los dispositivos DVD usan un l&aacute;ser de longitud de onda m&aacute;s corta que el empleado en los CD-ROM. El l&aacute;ser usado en el DVD es de luz roja";
 choices[14][1] = "Los dispositivos DVD usan un l&aacute;ser de longitud de onda m&aacute;s larga que el empleado en los CD-ROM. El l&aacute;ser usado en el DVD es de luz roja";
 choices[14][2] = "Los dispositivos DVD usan un l&aacute;ser de longitud de onda m&aacute;s corta que el empleado en los CD-ROM. El l&aacute;ser usado en el DVD es de luz infrarroja";
 choices[14][3] = "Los dispositivos DVD usan un l&aacute;ser de longitud de onda m&aacute;s larga que el empleado en los CD-ROM. El l&aacute;ser usado en el DVD es de luz infrarroja";
 answers[14] = choices[14][0];
 units[14] = "48";
 comments[14] = "Id Pregunta: 1635. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 1812 AÃ±o de creación de pregunta: 2006-01-01
 questions[15]= "16)  En el campo de los sistemas de informaci&oacute;n geogr&aacute;fica, un IDE es:";
 choices[15]= new Array();
 choices[15][0] = "Un conjunto de tecnolog&iacute;as, est&aacute;ndares y recursos humanos necesarios para adquirir, procesar, almacenar, distribuir y mejorar la utilizaci&oacute;n de la informaci&oacute;n geogr&aacute;fica.";
 choices[15][1] = "Un entorno de desarrollo integrado para la elaboraci&oacute;n de aplicaciones que utilizan informaci&oacute;n geogr&aacute;fica.";
 choices[15][2] = "Una infraestructura de datos empresariales, que permite la unificaci&oacute;n de sistemas de informaci&oacute;n geogr&aacute;fica con topolog&iacute;a distribuida.";
 choices[15][3] = "Un sistema de informaci&oacute;n cartogr&aacute;fica como Arc/Info y Arc/View.";
 answers[15] = choices[15][0];
 units[15] = "67";
 comments[15] = "Id Pregunta: 1812. NULL";


//  Id pregunta: 1908 AÃ±o de creación de pregunta: 2006-01-01
 questions[16]= "17)  Se&ntilde;ale la afirmaci&oacute;n correcta respecto de la Taxonom&iacute;a de Flynn:";
 choices[16]= new Array();
 choices[16][0] = "Se trata de una clasificaci&oacute;n de arquitecturas de computadores en funci&oacute;n del tipo de acceso a memoria.";
 choices[16][1] = "Se trata de una clasificaci&oacute;n de arquitecturas de computadores en funci&oacute;n de la tipolog&iacute;a de flujos de datos e instrucciones.";
 choices[16][2] = "Se trata de una clasificaci&oacute;n de arquitecturas de computadores en funci&oacute;n de la capacidad de procesamiento.";
 choices[16][3] = "Se trata de una clasificaci&oacute;n de arquitecturas de computadores en funci&oacute;n del acoplamiento entre los distintos procesadores.";
 answers[16] = choices[16][1];
 units[16] = "45";
 comments[16] = "Id Pregunta: 1908. ";


//  Id pregunta: 2065 AÃ±o de creación de pregunta: 2004-01-01
 questions[17]= "18)  Dentro de las m&eacute;tricas orientadas al SW no se encuetra";
 choices[17]= new Array();
 choices[17][0] = "M&eacute;tricas de productividad";
 choices[17][1] = "M&eacute;tricas de fiabilidad";
 choices[17][2] = "M&eacute;tricas de rendimiento";
 choices[17][3] = "M&eacute;tricas de Complejidad";
 answers[17] = choices[17][2];
 units[17] = "88";
 comments[17] = "Id Pregunta: 2065. ";


//  Id pregunta: 2088 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  &iquest;Cu&aacute;l no es un requisito para un software de tiempo real?";
 choices[18]= new Array();
 choices[18][0] = "Predecible.";
 choices[18][1] = "Encapsulado.";
 choices[18][2] = "Fiable.";
 choices[18][3] = "F&aacute;cil de mantener.";
 answers[18] = choices[18][1];
 units[18] = "83";
 comments[18] = "Id Pregunta: 2088. ";


//  Id pregunta: 2097 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  En la actualidad existen dos est&aacute;ndares importantes sobre diccionario de recursos de la informaci&oacute;n. Entre los organismos que han participado en su elaboraci&oacute;n est&aacute;:";
 choices[19]= new Array();
 choices[19][0] = "IEEE";
 choices[19][1] = "CENELEC ";
 choices[19][2] = "DELFOS";
 choices[19][3] = "IEC";
 answers[19] = choices[19][3];
 units[19] = "96";
 comments[19] = "Id Pregunta: 2097. NULL";


//  Id pregunta: 2154 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  &iquest;Cu&aacute;l de los siguientes no es un m&eacute;todo para la identificaci&oacute;n de objetos?";
 choices[20]= new Array();
 choices[20][0] = "An&aacute;lisis l&eacute;xico.";
 choices[20][1] = "Tarjetas CRC (Collaboration Rehusabilities Cards).";
 choices[20][2] = "Modelado de informaci&oacute;n.";
 choices[20][3] = "Todos los anteriores son m&eacute;todos de identificaci&oacute;n de objetos.";
 answers[20] = choices[20][3];
 units[20] = "82,84";
 comments[20] = "Id Pregunta: 2154. ";


//  Id pregunta: 2272 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  El diagrama que representa los componentes f&iacute;sicos de una aplicaci&oacute;n y sus relaciones con el entorno es el de:";
 choices[21]= new Array();
 choices[21][0] = "componentes";
 choices[21][1] = "despliegue";
 choices[21][2] = "interacci&oacute;n";
 choices[21][3] = "colaboraci&oacute;n";
 answers[21] = choices[21][0];
 units[21] = "86";
 comments[21] = "Id Pregunta: 2272. NULL";


//  Id pregunta: 2401 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  La modularizaci&oacute;n hace referencia a:";
 choices[22]= new Array();
 choices[22][0] = "Aislar funciones bien definidas.";
 choices[22][1] = "Reflejar la estructura de la organizaci&oacute;n de modo que facilite su comprensi&oacute;n.";
 choices[22][2] = "Correcta definici&oacute;n de las interfaces internas y externas, que permita ignorar la estructura interna de los m&oacute;dulos.";
 choices[22][3] = "Persigue que la arquitectura t&eacute;cnica del sistema se fundamente en m&oacute;dulos de peque&ntilde;o tama&ntilde;o.";
 answers[22] = choices[22][3];
 units[22] = "84";
 comments[22] = "Id Pregunta: 2401. ";


//  Id pregunta: 2429 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  La planificaci&oacute;n de un proyecto inform&aacute;tico debe permitir responder a las preguntas:";
 choices[23]= new Array();
 choices[23][0] = "&iquest;Qu&eacute; tareas hay que realizar, qui&eacute;n debe realizarlas, cu&aacute;ndo se deben realizar?";
 choices[23][1] = "&iquest;Qui&eacute;nes son los miembros del proyecto, cu&aacute;l es su jerarqu&iacute;a, a qu&eacute; unidades pertenecen?";
 choices[23][2] = "&iquest;Qui&eacute;n es el responsable del proyecto, cu&aacute;ntas personas van a participar, cu&aacute;l es su formaci&oacute;n?";
 choices[23][3] = "&iquest;Qui&eacute;nes son los proveedores, cu&aacute;l es su experiencia, de cu&aacute;ntos empleados disponen?";
 answers[23] = choices[23][0];
 units[23] = "77";
 comments[23] = "Id Pregunta: 2429. ";


//  Id pregunta: 2492 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Se&ntilde;alar la definici&oacute;n falsa sobre las m&eacute;tricas de calidad del software:";
 choices[24]= new Array();
 choices[24][0] = "Las m&eacute;tricas de productividad se centran fundamentalmente en el coste del proceso de la ingenier&iacute;a del software";
 choices[24][1] = "Las m&eacute;tricas de fiabilidad tratan de evaluar si el software producido se ajusta a los requerimientos del usuario";
 choices[24][2] = "Las m&eacute;tricas de los factores de calidad basan su evaluaci&oacute;n en la medida de una relaci&oacute;n de factores denominados de calidad del software";
 choices[24][3] = "La m&eacute;tricas de complejidad se orientan esencialmente a evaluar la facilidad de mantenimiento del software";
 answers[24] = choices[24][0];
 units[24] = "88";
 comments[24] = "Id Pregunta: 2492. ";


//  Id pregunta: 2636 AÃ±o de creación de pregunta: 2003-01-01
 questions[25]= "26)  El Mantenimiento de sistemas de Informaci&oacute;n tal como lo define M&eacute;trica V3";
 choices[25]= new Array();
 choices[25][0] = "De tipo perfectivo";
 choices[25][1] = "Requiere &uacute;nicamente la participaci&oacute;n del jefe de proyecto y del equipo y del equipo de mantenimiento";
 choices[25][2] = "Hace uso de la t&eacute;cnica denominada &ldquo;factores cr&iacute;ticos de &eacute;xito&rdquo;";
 choices[25][3] = "Tiene como objetivo la obtenci&oacute;n de una nueva versi&oacute;n de un sistema de informaci&oacute;n desarrollado, a partir de las peticiones de mantenimiento que los usuarios realizan con motivo de un problema detectado";
 answers[25] = choices[25][3];
 units[25] = "86";
 comments[25] = "Id Pregunta: 2636. EXAMEN CASTILLA LA MANCHA";


//  Id pregunta: 2931 AÃ±o de creación de pregunta: 2004-01-01
 questions[26]= "27)  &iquest;Qu&eacute; m&aacute;scara habr&iacute;a que aplicar para crear 8 subredes en una red de clase A?";
 choices[26]= new Array();
 choices[26][0] = "255.240.0.0";
 choices[26][1] = "255.192.0.0";
 choices[26][2] = "255.0.0.0";
 choices[26][3] = "2";
 answers[26] = choices[26][0];
 units[26] = "100";
 comments[26] = "Id Pregunta: 2931. Similar a examen TIC MAP A 2004. Con esa m&aacute;scara tendriamos hasta 14 subredes. Se aplica la formula  2N -2 donde N es la cantidad de bits que tenemosque robarle a la porci&oacute;n de host asignada por defecto a una clase A";


//  Id pregunta: 2947 AÃ±o de creación de pregunta: 2004-01-01
 questions[27]= "28)  La ventaja de utilizar Frame Relay frente a X.25 es:";
 choices[27]= new Array();
 choices[27][0] = "Hace m&aacute;s eficiente el proceso de comunicaci&oacute;n";
 choices[27][1] = "Es necesaria la disponibilidad de l&iacute;nease de alta velocidad";
 choices[27][2] = "La velocidad de acceso puede alcanzar los 64 Kbps frente a los 2 Mbps de X.25";
 choices[27][3] = "Permite realizar el control de errores en cada uno de los enlaces de la red";
 answers[27] = choices[27][0];
 units[27] = "109";
 comments[27] = "Id Pregunta: 2947. Examen TIC MAP B 2004";


//  Id pregunta: 3001 AÃ±o de creación de pregunta: 2004-01-01
 questions[28]= "29)  De los siguientes &iquest;Cu&aacute;l es un componente b&aacute;sico de un cortafuegos?";
 choices[28]= new Array();
 choices[28][0] = "El balanceados de carga (o asignador de tareas) que permite la ampliaci&oacute;n horizontal del &quot;basti&oacute;n&quot; mediante la asignaci&oacute;n de tramas IP entre varias subredes o m&aacute;quinas configuradas en forma id&eacute;ntica.";
 choices[28][1] = "Los servicios proxy, entendidos como aplicaciones SW para reenviar o bloquear conexiones a servicios como finger, telnet o ftp";
 choices[28][2] = "el sistema operativo LINUX en sus distribuciones seguras";
 choices[28][3] = "La monitorizaci&oacute;n de servicios de red tipo SMTP, POP3, HTTP, NNTP, PING,&hellip;,  a efectos de disponibilidad y rendimiento (performance)";
 answers[28] = choices[28][1];
 units[28] = "111";
 comments[28] = "Id Pregunta: 3001. NULL";


//  Id pregunta: 3115 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  &iquest;A qu&eacute; nivel OSI hace referencia la norma RS-232-C?:";
 choices[29]= new Array();
 choices[29][0] = "Nivel 3";
 choices[29][1] = "Nivel 2";
 choices[29][2] = "Nivel 1";
 choices[29][3] = "No se puede identificar con ninguno de los niveles OSI ya que no est&aacute; reconocido como est&aacute;ndar &lsquo;de jure&rsquo;";
 answers[29] = choices[29][2];
 units[29] = "100";
 comments[29] = "Id Pregunta: 3115. NULL";


//  Id pregunta: 3186 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  &iquest;Cu&aacute;l de las siguientes topolog&iacute;as tiene un mayor nivel de seguridad?:";
 choices[30]= new Array();
 choices[30][0] = "Bus";
 choices[30][1] = "Anillo";
 choices[30][2] = "Estrella";
 choices[30][3] = "Las 3 anteriores topolog&iacute;as tienen un nivel de seguridad similar";
 answers[30] = choices[30][2];
 units[30] = "111";
 comments[30] = "Id Pregunta: 3186. NULL";


//  Id pregunta: 3279 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  &iquest;Qu&eacute; elemento de la especificaci&oacute;n de RDSI ser&iacute;a una centralita digital de abonado?:";
 choices[31]= new Array();
 choices[31][0] = "Un TR1";
 choices[31][1] = "Un TR2";
 choices[31][2] = "RDSI no contempla el concepto de central de abonado, por lo que esta ser&iacute;a un equipo terminal (ET1) m&aacute;s";
 choices[31][3] = "RDSI no contempla el concepto de central de abonado, por lo que esta ser&iacute;a un equipo terminal (ET2) m&aacute;s";
 answers[31] = choices[31][1];
 units[31] = "103";
 comments[31] = "Id Pregunta: 3279. ";


//  Id pregunta: 3549 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  En RDSI BA al decir que las interfaces son sim&eacute;tricas, y dependiendo de la velocidad las posibilidades tecnologicas son:";
 choices[32]= new Array();
 choices[32][0] = "Para 155 Mbps las interfaces son el&eacute;ctricas y &oacute;pticas";
 choices[32][1] = "Para 622 Mbps las interfaces son el&eacute;ctricas";
 choices[32][2] = "Para 155 Mbps las interfaces son &oacute;pticas solamente.";
 choices[32][3] = "Para ambas velocidades exclusivamente interfaces &oacute;pticas";
 answers[32] = choices[32][0];
 units[32] = "103";
 comments[32] = "Id Pregunta: 3549. ";


//  Id pregunta: 3616 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  La linea &quot;Connection: Keep Alive&quot;, dentro de un mensaje HTTP significa:";
 choices[33]= new Array();
 choices[33][0] = "Dice al servidor web que cierre la conexi&oacute;n";
 choices[33][1] = "Dice al servidor web que cierre la conexi&oacute;n desues de la peticion del cliente";
 choices[33][2] = "El resultado es el mismo en HTTP 1.0 y HTTP 1.1";
 choices[33][3] = "Le dice al servidor que cierra la conexi&oacute;n cuando el cliente lo pida";
 answers[33] = choices[33][3];
 units[33] = "112";
 comments[33] = "Id Pregunta: 3616. ";


//  Id pregunta: 3635 AÃ±o de creación de pregunta: 2002-01-01
 questions[34]= "35)  La recomendaci&oacute;n RFC-1006 define:";
 choices[34]= new Array();
 choices[34][0] = "Funciones de un protocolo de red";
 choices[34][1] = "El protocolo de transporte TCP";
 choices[34][2] = "El protocolo de transporte UDP";
 choices[34][3] = "Protocolo de convergencia de TCP a TP0";
 answers[34] = choices[34][3];
 units[34] = "100";
 comments[34] = "Id Pregunta: 3635. NULL";


//  Id pregunta: 3706 AÃ±o de creación de pregunta: 2002-01-01
 questions[35]= "36)  Las t&eacute;cnica de acceso utilizada por el segmento de radio terrestre en UMTS es:";
 choices[35]= new Array();
 choices[35][0] = "FDMA";
 choices[35][1] = "TDMA";
 choices[35][2] = "CDMA";
 choices[35][3] = "WCDMA";
 answers[35] = choices[35][3];
 units[35] = "108";
 comments[35] = "Id Pregunta: 3706. ";


//  Id pregunta: 3711 AÃ±o de creación de pregunta: 2002-01-01
 questions[36]= "37)  LMDS es:";
 choices[36]= new Array();
 choices[36][0] = "una tecnolog&iacute;a de banda ancha para un bucle de abonado sin cable";
 choices[36][1] = "una tecnolog&iacute;a de banda estrecha para un bucle de abonado sin cable";
 choices[36][2] = "una tecnolog&iacute;a de realizaci&oacute;n de circuitos monol&iacute;ticos de microondas en banda S";
 choices[36][3] = "un est&aacute;ndar para la programaci&oacute;n de interfaces de dispositivos multimedia";
 answers[36] = choices[36][0];
 units[36] = "108";
 comments[36] = "Id Pregunta: 3711. ";


//  Id pregunta: 3777 AÃ±o de creación de pregunta: 2002-01-01
 questions[37]= "38)  RADIUS es:";
 choices[37]= new Array();
 choices[37][0] = "una herramienta estandarizada de an&aacute;lisis de cobertura radioel&eacute;ctrica";
 choices[37][1] = "un protocolo de acceso inal&aacute;mbrico en la capa de acceso al medio radioel&eacute;ctrico";
 choices[37][2] = "un protocolo de gesti&oacute;n y mantenimiento de redes";
 choices[37][3] = "un protocolo de autenticaci&oacute;n, autorizaci&oacute;n y configuraci&oacute;n de accesos";
 answers[37] = choices[37][3];
 units[37] = "107";
 comments[37] = "Id Pregunta: 3777. NULL";


//  Id pregunta: 3799 AÃ±o de creación de pregunta: 2002-01-01
 questions[38]= "39)  RTP y RTCP son protocolos que habitualmente se situan:";
 choices[38]= new Array();
 choices[38][0] = "justo encima de TCP";
 choices[38][1] = "justo encima de UDP";
 choices[38][2] = "justo debajo de TCP";
 choices[38][3] = "justo debajo de UDP";
 answers[38] = choices[38][1];
 units[38] = "100";
 comments[38] = "Id Pregunta: 3799. NULL";


//  Id pregunta: 4075 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  &iquest;Qu&eacute; beneficios puede tener la distribuci&oacute;n del software en varias maquinas ?";
 choices[39]= new Array();
 choices[39][0] = "Normalmente no presenta beneficios pero en algunas ocasiones es necesario";
 choices[39][1] = "Nunca tiene beneficios";
 choices[39][2] = "Es m&aacute;s optimo que los sistemas SMP";
 choices[39][3] = "Mayor disponibilidad";
 answers[39] = choices[39][3];
 units[39] = "113";
 comments[39] = "Id Pregunta: 4075. ";


//  Id pregunta: 4165 AÃ±o de creación de pregunta: 2006-01-01
 questions[40]= "41)  Cuando las tareas de operaci&oacute;n y programaci&oacute;n no est&aacute;n segregadas, el responsable de seguridad debe de proveer controles";
 choices[40]= new Array();
 choices[40][0] = "compensatorios";
 choices[40][1] = "administrativos";
 choices[40][2] = "correctivos";
 choices[40][3] = "de acceso";
 answers[40] = choices[40][0];
 units[40] = "111";
 comments[40] = "Id Pregunta: 4165. NULL";


//  Id pregunta: 4198 AÃ±o de creación de pregunta: 2006-01-01
 questions[41]= "42)  El estandar 802.11n se centra en";
 choices[41]= new Array();
 choices[41][0] = "Calidad de Servicio (QoS) sobre redes WLAN";
 choices[41][1] = "Autenticaci&oacute;n y cifrado para redes WLAN";
 choices[41][2] = "Nueva generaci&oacute;n de WLAN de redes de, al menos, 100 Mbps (en proceso de definici&oacute;n en 2006)";
 choices[41][3] = "Intercambio de informaci&oacute;n de capacidad entre clientes y puntos de acceso en redes WLAN";
 answers[41] = choices[41][2];
 units[41] = "107";
 comments[41] = "Id Pregunta: 4198. NULL";


//  Id pregunta: 4202 AÃ±o de creación de pregunta: 2006-01-01
 questions[42]= "43)  ADSL2+";
 choices[42]= new Array();
 choices[42][0] = "Soporta una distancia m&aacute;xima de 3,6Km. mayor que VDSL";
 choices[42][1] = "Utiliza frecuencias hasta 2.2 MHz.";
 choices[42][2] = "A la m&aacute;xima distancia tiene un ancho de bajada m&aacute;ximo de 4Mbps";
 choices[42][3] = "Todas las anteriores son correctas";
 answers[42] = choices[42][3];
 units[42] = "107";
 comments[42] = "Id Pregunta: 4202. NULL";


//  Id pregunta: 4281 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  Los sistemas conocidos como OLTP son utilizados para:";
 choices[43]= new Array();
 choices[43][0] = "Hacer consultas complejas sobre distintas Bases de Datos que se han consolidado en una central.";
 choices[43][1] = "Poder realizar informes a la Direcci&oacute;n.";
 choices[43][2] = "Son sistemas t&iacute;picamente utilizados como Sistemas de Informaci&oacute;n Geogr&aacute;fica.";
 choices[43][3] = "Captura de datos a partir de las operaciones diarias de una organizaci&oacute;n.";
 answers[43] = choices[43][3];
 units[43] = "68";
 comments[43] = "Id Pregunta: 4281. ";


//  Id pregunta: 4810 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  &iquest;Cu&aacute;l es la Forma Normal (FN) m&aacute;s avanzada en la que se encuentra la relaci&oacute;n R( {A,B,C,D}, {A--&gt;B; B--&gt;C; C--&gt;D} ) ?";
 choices[44]= new Array();
 choices[44][0] = "Primera FN";
 choices[44][1] = "Segunda FN";
 choices[44][2] = "Tercera FN";
 choices[44][3] = "FNBC (Forma Normal de Boyce-Codd)";
 answers[44] = choices[44][1];
 units[44] = "57";
 comments[44] = "Id Pregunta: 4810. ";


//  Id pregunta: 4825 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  Una red ATM (Asynchronous Transfer Mode):";
 choices[45]= new Array();
 choices[45][0] = "Tiene c&eacute;lulas cuyo tama&ntilde;o es de 48 bytes";
 choices[45][1] = "No es apropiada para tr&aacute;fico con requisitos de tiempo real";
 choices[45][2] = "Tiene los campos VPI (Virtual Path Identifier) y VCI (Virtual Channel Identifier), utilizados para efectuarfunciones de encaminamiento de las c&eacute;lulas";
 choices[45][3] = "No tiene ning&uacute;n mecanismo para detectar la ocurrencia de errores de transmisi&oacute;n en las c&eacute;lulas";
 answers[45] = choices[45][2];
 units[45] = "109";
 comments[45] = "Id Pregunta: 4825. ";


//  Id pregunta: 4860 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  Los certificados de clave p&uacute;blica:";
 choices[46]= new Array();
 choices[46][0] = "Que se ajustan a la recomendaci&oacute;n X.509 v.2 no admiten extensiones";
 choices[46][1] = "Ocupan m&aacute;s de 100 kbytes";
 choices[46][2] = "Que se ajustan a la recomendaci&oacute;n X.509 v.3 s&oacute;lo admiten como algoritmo de cifrado el RSA (Rivest ShamirAdleman)";
 choices[46][3] = "Fueron propuestos por Diffie y Hellman en su art&iacute;culo en que establecieron las bases de los criptosistemasde clave p&uacute;blica";
 answers[46] = choices[46][0];
 units[46] = "73";
 comments[46] = "Id Pregunta: 4860. ";


//  Id pregunta: 4892 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  El plazo de ejecuci&oacute;n de un contrato para el desarrollo de un sistema, figurar&aacute; en:";
 choices[47]= new Array();
 choices[47][0] = "El pliego de prescripciones t&eacute;cnicas.";
 choices[47][1] = "El pliego de cl&aacute;usulas adminsitrativas particulares.";
 choices[47][2] = "Las cl&aacute;usulas especiales de contrataci&oacute;n.";
 choices[47][3] = "Los criterios de adjudicaci&oacute;n del contrato.";
 answers[47] = choices[47][1];
 units[47] = "41";
 comments[47] = "Id Pregunta: 4892. ";


//  Id pregunta: 5052 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  La vinculacion din&aacute;mica en el desarrollo orientada a objetos significa que:";
 choices[48]= new Array();
 choices[48][0] = "La verificaci&oacute;n de tipos y la uni&oacute;n entre la llamada al m&eacute;todo y el c&oacute;digo a ejecutar se realizan en tiempo de compilaci&oacute;n";
 choices[48][1] = "La verificaci&oacute;n de tipos se realiza en tiempo de ejecuci&oacute;n y la uni&oacute;n entre la llamada al m&eacute;todo y el c&oacute;digo a ejecutar se tipos se puede realizar en tiempo de ejecuci&oacute;n o en tiempo de compilaci&oacute;n";
 choices[48][2] = "La verificaci&oacute;n de tipos se puede realizar en tiempo de ejecuci&oacute;n o en tiempo de compilaci&oacute;n y la uni&oacute;n entre la llamada al m&eacute;todo y el c&oacute;digo a ejecutar se realizan en tiempo de ejecuci&oacute;n";
 choices[48][3] = "La verificaci&oacute;n de tipos se puede realizar en tiempo de ejecuci&oacute;n o en tiempo de compilaci&oacute;n y la uni&oacute;n entre la llamada al m&eacute;todo y el c&oacute;digo a ejecutar se realizan en tiempo de compilaci&oacute;n";
 answers[48] = choices[48][2];
 units[48] = "82";
 comments[48] = "Id Pregunta: 5052. Examen TIC A 2007";


//  Id pregunta: 5053 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  Se&ntilde;ale de la siguiente relaci&oacute;n el miembro que NO forma parte del Consejo Consultivo de la Agencia Espa&ntilde;ola deProtecci&oacute;n de Datos";
 choices[49]= new Array();
 choices[49][0] = "Un experto en la materia";
 choices[49][1] = "Un miembro de la Real Academia de la Historia";
 choices[49][2] = "Un representante de la Asociaci&oacute;n de Ingenieros T&eacute;cnicos en Inform&aacute;tica";
 choices[49][3] = "Un representante de la Administraci&oacute;n Local";
 answers[49] = choices[49][2];
 units[49] = "29";
 comments[49] = "Id Pregunta: 5053. Examen TIC A 2007";


//  Id pregunta: 5435 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  &iquest;Cu&aacute;l es el lugar m&aacute;s conveniente para la instalaci&oacute;n de un CPD de respaldo en la ribera del Pisuerga?";
 choices[50]= new Array();
 choices[50][0] = "La planta m&aacute;s elevada del edificio de usos m&uacute;ltiples";
 choices[50][1] = "Una sala aneja al garaje subterr&aacute;neo";
 choices[50][2] = "La primera planta de un edificio de cinco plantas";
 choices[50][3] = "La planta baja";
 answers[50] = choices[50][2];
 units[50] = "26";
 comments[50] = "Id Pregunta: 5435. Castilla y Le&oacute;n";


//  Id pregunta: 5494 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  SWT (Standard Widget Toolkit)";
 choices[51]= new Array();
 choices[51][0] = "El rendimiento de la librer&iacute;a AWT es mejor que la de SWT";
 choices[51][1] = "Es una librer&iacute;a que proporciona funcionalidades de componentes gr&aacute;ficos  para la plataforma Eclipse.";
 choices[51][2] = "a y b son ciertas";
 choices[51][3] = "Se ha desarrollado puramente en Java";
 answers[51] = choices[51][1];
 units[51] = "60";
 comments[51] = "Id Pregunta: 5494. NULL";


//  Id pregunta: 5507 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  Qu&eacute; formato se emplea para la emision de facturas electr&oacute;nicas por parte de la AGE?";
 choices[52]= new Array();
 choices[52][0] = "XBRL";
 choices[52][1] = "ebXML";
 choices[52][2] = "UBL";
 choices[52][3] = "Facturae";
 answers[52] = choices[52][3];
 units[52] = "70";
 comments[52] = "Id Pregunta: 5507. NULL";


//  Id pregunta: 5604 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  Los sistemas en el segunado nivel troncal trabajan en ";
 choices[53]= new Array();
 choices[53][0] = "La segunda ventana &oacute;ptica (1330nm). Es en estos nodos donde se realiza la inserci&oacute;n de programaci&oacute;n local resultando m&aacute;s econ&oacute;mico que se lleve a cabo a nivel el&eacute;ctrico.";
 choices[53][1] = "La tercera ventana &oacute;ptica (1550nm) con la ventaja de tener un mayor alcance.";
 choices[53][2] = "La segunda ventana &oacute;ptica (1330nm), ya que en dicha ventana existen amplificadores &oacute;pticos comerciales de alto rendimiento ";
 choices[53][3] = "La tercera ventana &oacute;ptica (1550nm) siendo necesario hacer una doble conversi&oacute;n (opto-el&eacute;ctrica y electro-&oacute;ptica)";
 answers[53] = choices[53][0];
 units[53] = "105";
 comments[53] = "Id Pregunta: 5604. ";


//  Id pregunta: 6158 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  Indique la afirmaci&oacute;n correcta sobre los diferentes codecs de audio y video en videoconferencia H.323";
 choices[54]= new Array();
 choices[54][0] = "G711 y G722 son codecs de audio mientras que H261 y H263 son codecs  de video";
 choices[54][1] = "G711 y G722 son codecs de video mientras que H261 y H263 son codecs  de audio";
 choices[54][2] = "G711 y H261 son codecs de audio mientras que G722 y H263 son codecs  de video";
 choices[54][3] = "G711 y H261 son codecs de video mientras que G722 y H263 son codecs  de audio";
 answers[54] = choices[54][0];
 units[54] = "117";
 comments[54] = "Id Pregunta: 6158. ";


//  Id pregunta: 6204 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  Un requerimiento se define como una condici&oacute;n o necesidad de un usuario para resolver un problema o alcanzar un objetivo. Un requerimiento debe ser (se&ntilde;ale la correcta):";
 choices[55]= new Array();
 choices[55][0] = "Conciso, ambiguo, verificable";
 choices[55][1] = "Necesario, conciso, inconsistente";
 choices[55][2] = "Conciso, completo, verificable";
 choices[55][3] = "Completo, inconsistente, obvio";
 answers[55] = choices[55][2];
 units[55] = "78";
 comments[55] = "Id Pregunta: 6204. TICB-2009, bloque desarrollo";


//  Id pregunta: 6311 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  &iquest;Cu&aacute;l de los siguientes no es un objetivo del dise&ntilde;o estructurado de un proyecto de ingenier&iacute;a software?";
 choices[56]= new Array();
 choices[56][0] = "Minimizar el coste asociado al mantenimiento.";
 choices[56][1] = "M&aacute;ximo acoplamiento.";
 choices[56][2] = "M&aacute;xima inteligibilidad del sistema.";
 choices[56][3] = "Integraci&oacute;n del sistema.";
 answers[56] = choices[56][1];
 units[56] = "84";
 comments[56] = "Id Pregunta: 6311. ";


//  Id pregunta: 6367 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  Se&ntilde;ale la sentencia correcta, en relaci&oacute;n a la seguridad por defecto definida en el Esquema Nacional de Seguridad:";
 choices[57]= new Array();
 choices[57][0] = "En un sistema de explotaci&oacute;n se eliminar&aacute;n o desactivar&aacute;n, mediante el control de la configuraci&oacute;n, las funciones que no sean de inter&eacute;s, sean innecesarias e, incluso, aquellas que sean inadecuadas al fin que se persigue.";
 choices[57][1] = "El sistema proporcionar&aacute; la funcionalidad requerida para que la organizaci&oacute;n alcance sus objetivos, proveyendo toda funcionalidad adicional posible.";
 choices[57][2] = "Las funciones de operaci&oacute;n, administraci&oacute;n y registro de actividad ser&aacute;n las m&aacute;ximas posibles, y se asegurar&aacute; que s&oacute;lo son accesibles por las personas, o desde emplazamientos o equipos, autorizados, pudiendo exigirse en su caso restricciones de horario y puntos de acceso facultados.";
 choices[57][3] = "Todas las anteriores";
 answers[57] = choices[57][0];
 units[57] = "43";
 comments[57] = "Id Pregunta: 6367. Art&iacute;culo 19 ENS";


//  Id pregunta: 7169 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  Los sistemas OLTP se utilizan para:";
 choices[58]= new Array();
 choices[58][0] = "Almacenar gran cantidad de datos de forma integrada, no vol&aacute;til y variable en el tiempo.";
 choices[58][1] = "Generar informes para la direcci&oacute;n.";
 choices[58][2] = "Captura de datos heterog&eacute;neos y sin organizaci&oacute;n de diferentes fuentes.";
 choices[58][3] = "Agiliza la consulta de grandes vol&uacute;menes de datos.";
 answers[58] = choices[58][2];
 units[58] = "68";
 comments[58] = "Id Pregunta: 7169. Examen TIC B 2009";


//  Id pregunta: 7175 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  La entidad que identifica de forma inequ&iacute;voca al solicitante de un certificado electr&oacute;nico  es la:";
 choices[59]= new Array();
 choices[59][0] = "Autoridad de Registro";
 choices[59][1] = "Autoridad de Certificaci&oacute;n";
 choices[59][2] = "Autoridad de Revocaci&oacute;n";
 choices[59][3] = "Autoridad de Usurpaci&oacute;n";
 answers[59] = choices[59][0];
 units[59] = "73.74";
 comments[59] = "Id Pregunta: 7175. Examen TIC B 2009";


//  Id pregunta: 7247 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  &iquest;Cu&aacute;ntas direcciones IP ser&aacute;n asignadas en la subred 220.8.7.0/28, sin considerar las direcciones de subred y de broadcast?";
 choices[60]= new Array();
 choices[60][0] = "256";
 choices[60][1] = "254";
 choices[60][2] = "14";
 choices[60][3] = "28";
 answers[60] = choices[60][2];
 units[60] = "100";
 comments[60] = "Id Pregunta: 7247. Examen TIC B 2009";


//  Id pregunta: 7267 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  En el &aacute;mbito del Frame Relay, el CIR se refiere";
 choices[61]= new Array();
 choices[61][0] = "Al ratio de ocupaci&oacute;n m&aacute;xima del canal";
 choices[61][1] = "A la velocidad m&iacute;nima comprometida";
 choices[61][2] = "Al porcentaje m&aacute;ximo de tramas err&oacute;neas garantizado";
 choices[61][3] = "A la velocidad m&aacute;xima asegurada";
 answers[61] = choices[61][1];
 units[61] = "109";
 comments[61] = "Id Pregunta: 7267. Examen TIC B 2009";


//  Id pregunta: 7287 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  Las redes de pr&oacute;xima generaci&oacute;n (NGN) son seg&uacute;n la UIT (uni&oacute;n internacional de telecomunicaciones):";
 choices[62]= new Array();
 choices[62][0] = "Las redes que engloban las nuevas tecnolog&iacute;as inal&aacute;mbricas, tambi&eacute;n conocidas como redes de cuarta generaci&oacute;n (4G)";
 choices[62][1] = "Las redes que ser&aacute;n desplegadas para la generaci&oacute;n del siglo XXI, las cuales garantizar&aacute;n una cobertura real del 100%";
 choices[62][2] = "Las redes de los pr&oacute;ximos a&ntilde;os, basadas en el protocolo Internet IP y que ser&aacute;n utilizadas para todo tipo de servicios";
 choices[62][3] = "Las futuras redes basadas en conmutaci&oacute;n de circuitos, que proporcionar&aacute;n una calidad de servicio superior y permitir&aacute;n comunicaciones de voz y datos a altas velocidades";
 answers[62] = choices[62][2];
 units[62] = "100, 107";
 comments[62] = "Id Pregunta: 7287. Examen TIC B 2009";


//  Id pregunta: 7294 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  Ordene de menor a mayor dificultad las siguientes tareas de reconocimiento autom&aacute;tico del habla (ASR):";
 choices[63]= new Array();
 choices[63][0] = "Palabras aisladas, word-spotting, palabras conectadas, habla espont&aacute;nea, habla continua";
 choices[63][1] = "Palabras aisladas, palabras conectadas, word-spotting, habla espont&aacute;nea, habla continua";
 choices[63][2] = "Palabras aisladas, word-spotting, palabras conectadas, habla continua, habla espont&aacute;nea";
 choices[63][3] = "Palabras aisladas, palabras conectadas, word-spotting, habla continua, habla espont&aacute;nea";
 answers[63] = choices[63][2];
 units[63] = "94";
 comments[63] = "Id Pregunta: 7294. NULL";


//  Id pregunta: 7357 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  Se&ntilde;ale la CORRECTA:";
 choices[64]= new Array();
 choices[64][0] = "Los m&eacute;todos din&aacute;micos empleados para analizar la rentabilidad de las inversiones incorporan el factor tiempo, encontraposici&oacute;n a los m&eacute;todos est&aacute;ticos, y tienen en cuenta el hecho de que los capitales tienen distinto valor en funci&oacute;ndel momento en que se generan.";
 choices[64][1] = "El VAN y el TIR son m&eacute;todos din&aacute;micos de an&aacute;lisis de rentabilidad";
 choices[64][2] = "Cuando el VAN es positivo la inversi&oacute;n es rentable";
 choices[64][3] = "Todas son CORRECTAS";
 answers[64] = choices[64][3];
 units[64] = "38";
 comments[64] = "Id Pregunta: 7357. NULL";


//  Id pregunta: 7810 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)   &iquest;A qu&eacute; nivel pertenecen las medidas de seguridad que, de acuerdo con el Reglamento de Medidas de Seguridad para la protecci&oacute;n de datos de car&aacute;cter personal, deben ser adoptadas en los ficheros correspondientes a los servicios financieros, gestionados por Entidades Financieras?";
 choices[65]= new Array();
 choices[65][0] = " Nivel b&aacute;sico.";
 choices[65][1] = " Nivel alto.";
 choices[65][2] = " Nivel medio.";
 choices[65][3] = " Nivel superior.";
 answers[65] = choices[65][2];
 units[65] = "NULL";
 comments[65] = "Id Pregunta: 7810. Map 2005";


//  Id pregunta: 7818 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)   Indique cu&aacute;l de las siguientes afirmaciones sobre los lenguajes RDF y OWL empleados en la web sem&aacute;ntica es cierta:";
 choices[66]= new Array();
 choices[66][0] = " La codificaci&oacute;n de un grafo RDF en forma de sentencias RDF debe ser siempre un documento XML bien formado.";
 choices[66][1] = " La codificaci&oacute;n de un grafo RDF en forma de sentencias RDF debe ser siempre un documento XML v&aacute;lido.";
 choices[66][2] = " En OWL DL, una clase no puede ser instancia de otra clase.";
 choices[66][3] = " OWL Full ofrece garant&iacute;as computacionales de completitud.";
 answers[66] = choices[66][2];
 units[66] = "NULL";
 comments[66] = "Id Pregunta: 7818. Map 2005";


//  Id pregunta: 7822 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)   Indique cu&aacute;l de las siguientes afirmaciones con relaci&oacute;n a la RDSI (Red Digital de Servicios Integrados) no es correcta:";
 choices[67]= new Array();
 choices[67][0] = " Utiliza el sistema de se&ntilde;alizaci&oacute;n por canal com&uacute;n CCITT n.&ordm; 7 (CCS7";
 choices[67][1] = ".";
 choices[67][2] = " Emplea el canal D para el transporte de se&ntilde;alizaci&oacute;n mediante conmutaci&oacute;n de paquetes.";
 choices[67][3] = " La velocidad de los canales B tanto en los accesos b&aacute;sicos como en los primarios es de 64 Kbps.";
 answers[67] = choices[67][3];
 units[67] = "NULL";
 comments[67] = "Id Pregunta: 7822. Map 2005";


//  Id pregunta: 8085 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)   Con respecto a servidores y servicios que permiten conectar el entorno de las LAN con el mundo de Internet, &iquest;cu&aacute;l de las afirmaciones siguientes es CIERTA para un &laquo;servidor NAT&raquo;?";
 choices[68]= new Array();
 choices[68][0] = " Sirve para asignar din&aacute;micamente direcciones IP a los clientes que no las tienen asignadas est&aacute;ticamente en la configuraci&oacute;n inicial, realizando funciones de protecci&oacute;n contra ataques por reproducci&oacute;n.";
 choices[68][1] = " Se utilizan para trasformar una serie de direcciones IP internas, que no pueden ser reconocidas para salir a Internet.";
 choices[68][2] = " Sirven para limitar las direcciones IP/URL&rsquo;s a las que los usuarios de la LAN de una organizaci&oacute;n pueden acceder a trav&eacute;s de Internet, garantizando integridad de los datos y autenticaci&oacute;n de origen v&iacute;a el algoritmo MD5.";
 choices[68][3] = " Guardan informaci&oacute;n sobre las direcciones de los servidores (host) representativos de nombres de dominio sobre los que se tiene autorizaci&oacute;n de acceso, disponiendo de capacidad adicional para consultar informaci&oacute;n de DNS&rsquo;s que tengan los nombres de dominio y host de otros accesos que pudieran realizarse.";
 answers[68] = choices[68][1];
 units[68] = "NULL";
 comments[68] = "Id Pregunta: 8085. Map 2008";


//  Id pregunta: 8243 AÃ±o de creación de pregunta: 2011-01-01
 questions[69]= "70)  &iquest;Cu&aacute;l de las siguientes funciones NO corresponde al Comit&eacute; Sectorial de Administraci&oacute;n Electr&oacute;nica seg&uacute;n lo recogido en la Ley 11/2007 y modificaciones normativas posteriores?:";
 choices[69]= new Array();
 choices[69][0] = "Asegurar la cooperaci&oacute;n entre las administraciones p&uacute;blicas para proporcionar al ciudadano informaci&oacute;n clara, actualizada e inequivoca.";
 choices[69][1] = "Velar por el cumplimiento de los fines y principios establecidos en la Ley 11/2007";
 choices[69][2] = "Proponer planes programas conjuntos de actuaci&oacute;n para impulsar el desarrollo de la Administraci&oacute;n Electr&oacute;nica en Espa&ntilde;a";
 choices[69][3] = "Aprobar los Cat&aacute;logos de determinaci&oacute;n de tipo referidos a bienes y servicios electr&oacute;nicos.";
 answers[69] = choices[69][3];
 units[69] = "43";
 comments[69] = "Id Pregunta: 8243. Examen TIC A1 2010";


//  Id pregunta: 8378 AÃ±o de creación de pregunta: 2011-01-01
 questions[70]= "71)  La longitud de onda alrededor de la cual un medio de transmisi&oacute;n basado en fibra &oacute;ptica se dice que est&aacute; trabajando en 3&ordf; ventana es: ";
 choices[70]= new Array();
 choices[70][0] = "750 nm.";
 choices[70][1] = "820 nm.";
 choices[70][2] = "1310 nm.";
 choices[70][3] = "1550 nm.";
 answers[70] = choices[70][3];
 units[70] = "99";
 comments[70] = "Id Pregunta: 8378. Examen TIC A2 2010";


//  Id pregunta: 8513 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  En el contexto de la seguridad l&oacute;gica, si hablamos de una bomba l&oacute;gica &iquest;cu&aacute;l de las siguientes afirmaciones es verdadera? ";
 choices[71]= new Array();
 choices[71][0] = "El c&oacute;digo se replica al activarse";
 choices[71][1] = "Su efecto es retardado. ";
 choices[71][2] = "No se activan por eventos. ";
 choices[71][3] = "Es otra manera de referirse a los troyanos. ";
 answers[71] = choices[71][1];
 units[71] = "111";
 comments[71] = "Id Pregunta: 8513. Examen TIC A2 2010";


//  Id pregunta: 8785 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  OLAP proporciona mayor velocidad de procesamiento en la sentencia SQL";
 choices[72]= new Array();
 choices[72][0] = "INSERT";
 choices[72][1] = "UPDATE";
 choices[72][2] = "DELETE";
 choices[72][3] = "SELECT";
 answers[72] = choices[72][3];
 units[72] = "57, 58";
 comments[72] = "Id Pregunta: 8785. Examen UPM A2 2011";


//  Id pregunta: 8810 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  El objeto anchor de Javascript indica...";
 choices[73]= new Array();
 choices[73][0] = "Los enlaces internos del documento";
 choices[73][1] = "Los v&iacute;nculos externos del documento";
 choices[73][2] = "Array con todas las anclas del documento";
 choices[73][3] = "El ancho m&aacute;ximo de los elementos de un formulario";
 answers[73] = choices[73][0];
 units[73] = "114";
 comments[73] = "Id Pregunta: 8810. Examen UPM A2 2011";


//  Id pregunta: 8872 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  HDLC define tres tipos de estaciones, dos configuraciones de enlace y tres modos de operaci&oacute;n para la transferencia de los datos. Se&ntilde;ale la respuesta correcta en relaci&oacute;n a dichas definiciones:";
 choices[74]= new Array();
 choices[74][0] = "La Configuraci&oacute;n de Enlace no Balanceada est&aacute; formada por una estaci&oacute;n primaria y una o m&aacute;s estaciones secundarias y &uacute;nicamente se permite la transmisi&oacute;n semi-duplex";
 choices[74][1] = "El modo de respuesta normal (NRM) se utiliza en la configuraci&oacute;n no balanceada";
 choices[74][2] = "El modo de respuesta as&iacute;ncrono (ARM) se utiliza en la configuraci&oacute;n balanceada.";
 choices[74][3] = "Solamente existen dos tipos de estaciones, primaria y secundaria";
 answers[74] = choices[74][1];
 units[74] = "100";
 comments[74] = "Id Pregunta: 8872. Analista Ayto. Madrid 2010";


//  Id pregunta: 8908 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  La unidad Aritm&eacute;tico-L&oacute;gica (ALU):";
 choices[75]= new Array();
 choices[75][0] = "Contiene las instrucciones del programa.";
 choices[75][1] = "Contienen los datos de la aplicaci&oacute;n.";
 choices[75][2] = "Realiza las operaciones matem&aacute;ticas.";
 choices[75][3] = "Controla los dispositivos l&oacute;gicos a los que accede la CPU";
 answers[75] = choices[75][2];
 units[75] = "47";
 comments[75] = "Id Pregunta: 8908. Operador Ayto. Madrid 2010";


//  Id pregunta: 9167 AÃ±o de creación de pregunta: 2013-01-01
 questions[76]= "77)  De los siguientes sistemas, &iquest;cu&aacute;l no se refiere a un sistema de navegaci&oacute;n por sat&eacute;lite?";
 choices[76]= new Array();
 choices[76][0] = "Beidou";
 choices[76][1] = "COMPASS";
 choices[76][2] = "QZSS";
 choices[76][3] = "GNS";
 answers[76] = choices[76][3];
 units[76] = "67";
 comments[76] = "Id Pregunta: 9167. NULL";


//  Id pregunta: 9173 AÃ±o de creación de pregunta: 2013-01-01
 questions[77]= "78)  Respecto a la normativa de facturaci&oacute;n, se&ntilde;ale la respuesta INCORRECTA:";
 choices[77]= new Array();
 choices[77][0] = "El Real Decreto 1619/2012 regula las obligaciones de facturaci&oacute;n desde el 1 de enero de 2014";
 choices[77][1] = "No se exigir&aacute; la obligaci&oacute;n de expedir factura en el caso de determinadas prestaciones de servicios financieros y de seguros, salvo cuando dichas operaciones se entiendan realizadas en el territorio de aplicaci&oacute;n del Impuesto, o en otro Estado miembro de la Uni&oacute;n Europea, y est&eacute;n sujetas y no exentas.";
 choices[77][2] = "Se establece un sistema de facturaci&oacute;n basado en dos tipos de facturas: la factura completa u ordinaria y la factura simplificada, que viene a sustituir a los denominados tiques.";
 choices[77][3] = "Todas son verdaderas";
 answers[77] = choices[77][0];
 units[77] = "70";
 comments[77] = "Id Pregunta: 9173. ";


//  Id pregunta: 9209 AÃ±o de creación de pregunta: 2013-01-01
 questions[78]= "79)  &iquest;C&oacute;mo es el modelo de conectividad interno del almacenamiento?";
 choices[78]= new Array();
 choices[78][0] = "Bus SCSI y bus ATA/IDE de tipo serie";
 choices[78][1] = "SAS es la evoluci&oacute;n de ATA y SATA la evoluci&oacute;n de SCSI.";
 choices[78][2] = "SAS y SATA son evoluciones que modifican las capas bajas de forma que aseguran la compatibilidad a nivel de software.";
 choices[78][3] = "Ante la falta de escalabilidad, problemas de replicaci&oacute;n y redundancia del almacenamiento interno, para entornos empresariales se suele preferir el almacenamiento externo, en forma de una cabina de discos.";
 answers[78] = choices[78][3];
 units[78] = "48";
 comments[78] = "Id Pregunta: 9209. ";


//  Id pregunta: 9244 AÃ±o de creación de pregunta: 2013-01-01
 questions[79]= "80)  &iquest;C&oacute;mo divide el software Ubuntu?";
 choices[79]= new Array();
 choices[79][0] = "En secciones llamadas componentes.";
 choices[79][1] = "Los componentes principales son main, restricted, universe, commercial y multiverse.";
 choices[79][2] = "El componente multiverse contiene los paquetes sin soporte debido a que no cumple los requisitos de Software Libre.";
 choices[79][3] = "Todas son correctas.";
 answers[79] = choices[79][3];
 units[79] = "54";
 comments[79] = "Id Pregunta: 9244. ";


//  Id pregunta: 9474 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  En el contexto de la rentabilidad de la inversi&oacute;n de un proyecto:";
 choices[80]= new Array();
 choices[80][0] = "Una inversi&oacute;n se realiza si su rentabilidad exigida es mayor que su rentabilidad esperada";
 choices[80][1] = "Una inversi&oacute;n se realiza si su rentabilidad exigida es igual que su rentabilidad esperada";
 choices[80][2] = "Una inversi&oacute;n se realiza si su rentabilidad comprometida es igual que su rentabilidad esperada";
 choices[80][3] = "Una inversi&oacute;n se realiza si su rentabilidad esperada es mayor que su rentabilidad exigida";
 answers[80] = choices[80][3];
 units[80] = "38";
 comments[80] = "Id Pregunta: 9474. ";


//  Id pregunta: 9489 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  Las entrevistas son una t&eacute;cnica de bajo nivel de obtenci&oacute;n de requisitos. &iquest;Cu&aacute;l de las siguientes no es una fase de las mismas?";
 choices[81]= new Array();
 choices[81][0] = "Identificaci&oacute;n de candidatos";
 choices[81][1] = "Contacto con candidatos para fijar entrevista";
 choices[81][2] = "Preparaci&oacute;n";
 choices[81][3] = "Ejecuci&oacute;n de la entrevista";
 answers[81] = choices[81][1];
 units[81] = "78";
 comments[81] = "Id Pregunta: 9489. ";


//  Id pregunta: 9998 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  El recurso especial en materia de contrataci&oacute;n permite la impugnaci&oacute;n, previa alrecurso contencioso-administrativo, de";
 choices[82]= new Array();
 choices[82][0] = "los actos de tr&aacute;mite que no resuelven la licitaci&oacute;n.";
 choices[82][1] = "las penalizaciones impuestas por ejecuci&oacute;n defectuosa.";
 choices[82][2] = "los acuerdos de adjudicaci&oacute;n.";
 choices[82][3] = "la resoluci&oacute;n del recurso de Alzada.";
 answers[82] = choices[82][2];
 units[82] = "41";
 comments[82] = "Id Pregunta: 9998. ";


//  Id pregunta: 10254 AÃ±o de creación de pregunta: 2014-01-01
 questions[83]= "84)  En cuanto al tratamiento de  datos personales de menores";
 choices[83]= new Array();
 choices[83][0] = "La legislaci&oacute;n no hace distinciones referentes a la edad de la persona de la que se recaban los datos";
 choices[83][1] = "Con car&aacute;cter general, s&oacute;lo pueden recabarse datos de personas mayores de edad (18 a&ntilde;os)";
 choices[83][2] = "Con car&aacute;cter general, pueden recabarse datos de menores de edad (18 a&ntilde;os) s&oacute;lo con consentimiento de sus padres o tutores";
 choices[83][3] = "Con car&aacute;cter general, pueden recabarse datos de menores de 14 a&ntilde;os s&oacute;lo con consentimiento de sus padres o tutores";
 answers[83] = choices[83][3];
 units[83] = "29";
 comments[83] = "Id Pregunta: 10254. Art&iacute;culo 13.1 del RD 1720/2007";


//  Id pregunta: 10359 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  En relaci&oacute;n con los sistemas abiertos, se&ntilde;ale la respuesta err&oacute;nea:";
 choices[84]= new Array();
 choices[84][0] = "Un sistema abierto es aquel cuyas especificaciones est&aacute;n aprobadas, publicadas y respaldadas por organismos independientes de normalizaci&oacute;n";
 choices[84][1] = "Un sistema abierto es aquel capaz de interconectarse con otros de acuerdo con unas normas establecidas";
 choices[84][2] = "Los sistemas abiertos se caracterizan por su interopeabilidad, portabilidad y escalabilidad";
 choices[84][3] = "Los sistemas abiertos deben hacer uso de est&aacute;ndares abiertos";
 answers[84] = choices[84][3];
 units[84] = "40";
 comments[84] = "Id Pregunta: 10359. Un sistema puede ser abierto pero no hacer uso de est&aacute;ndares abiertos";


//  Id pregunta: 10544 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  El quince de febrero de 2013 el Consejo de Ministros aprob&oacute; la Agenda Digital para Espa&ntilde;a como la estrategia del Gobierno para desarrollar la econom&iacute;a y la sociedad digital en Espa&ntilde;a durante el periodo 2013-2015.";
 choices[85]= new Array();
 choices[85][0] = "Esta estrategia se configura como el paraguas de todas las acciones del Gobierno en materia de Telecomunicaciones y de Sociedad de la Informaci&oacute;n. La Agenda se lidera conjuntamente por el Ministerio de Industria, Energ&iacute;a y Turismo y por el Ministerio de Hacienda y Administraciones P&uacute;blicas.";
 choices[85][1] = "Esta estrategia se configura como el paraguas de todas las acciones del Gobierno en materia de Telecomunicaciones y de Sociedad de la Informaci&oacute;n. La Agenda se lidera conjuntamente por el Ministerio de Industria, Energ&iacute;a y Turismo y por la Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n.";
 choices[85][2] = "Esta estrategia se configura como el paraguas de todas las acciones del Gobierno en materia de Administraci&oacute;n Electr&oacute;nica. La Agenda se lidera conjuntamente por el Ministerio de Industria, Energ&iacute;a y Turismo y por el Ministerio de Hacienda y Administraciones P&uacute;blicas.";
 choices[85][3] = "Esta estrategia se configura como el paraguas de todas las acciones del Gobierno en materia de Administraci&oacute;n Electr&oacute;nica. La Agenda se lidera conjuntamente por el Ministerio de Industria, Energ&iacute;a y Turismo y por la Secretar&iacute;a de Estado de Telecomunicaciones y para la Sociedad de la Informaci&oacute;n.";
 answers[85] = choices[85][0];
 units[85] = "30";
 comments[85] = "Id Pregunta: 10544. http://www.agendadigital.gob.es/agenda-digital/Paginas/agenda-digital.aspx";


//  Id pregunta: 10558 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  COBIT 5 Incluye";
 choices[86]= new Array();
 choices[86][0] = "4 principios y 6 procesos habilitadores";
 choices[86][1] = "5 principios y 7 procesos habilitadores";
 choices[86][2] = "4 principios y 7 procesos habilitadores";
 choices[86][3] = "5 principios y 6 procesos habilitadores";
 answers[86] = choices[86][1];
 units[86] = "31, 32, 33";
 comments[86] = "Id Pregunta: 10558. ";


//  Id pregunta: 10577 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  El Esquema Nacional de Interoperabilidad:";
 choices[87]= new Array();
 choices[87][0] = "Incluye criterios y recomendaciones de seguridad.";
 choices[87][1] = "Es parte del Esquema Nacional de Seguridad.";
 choices[87][2] = "Fue elaborado por la Conferencia Sectorial de Administraci&oacute;n P&uacute;blica.";
 choices[87][3] = "Considera la utilizaci&oacute;n de est&aacute;ndares cerrados o de uso limitado por los ciudadanos.";
 answers[87] = choices[87][0];
 units[87] = "44";
 comments[87] = "Id Pregunta: 10577. Art&iacute;culo 42, Ley 11/2007.";


//  Id pregunta: 10697 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  La Ley 39/2015:";
 choices[88]= new Array();
 choices[88][0] = "Estipula la creaci&oacute;n del Esquema Nacional de Seguridad y el Esquema Nacional de Interoperabilidad.";
 choices[88][1] = "Establece en alguno de sus apartados que deben considerarse las medidas del Esquema Nacional de Seguridad y Esquema Nacional de Interoperabilidad.";
 choices[88][2] = "Establece en alguno de sus apartados que deben considerarse las medidas del Esquema Nacional de Seguridad.";
 choices[88][3] = "No menciona ni el Esquema Nacional de Seguridad ni el Esquema Nacional de Interoperabilidad.";
 answers[88] = choices[88][1];
 units[88] = "30";
 comments[88] = "Id Pregunta: 10697. ";


//  Id pregunta: 10710 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  &iquest;Cu&aacute;l es un contenido clave de la Norma T&eacute;cnica de Interoperabilidad de Modelo de Datos para el Intercambio de asientos entre las entidades registrales?";
 choices[89]= new Array();
 choices[89][0] = "SICRES";
 choices[89][1] = "Los metadatos";
 choices[89][2] = "ACCEDA";
 choices[89][3] = "HABILITA";
 answers[89] = choices[89][0];
 units[89] = "43";
 comments[89] = "Id Pregunta: 10710. ";


//  Id pregunta: 10767 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  &iquest;En qu&eacute; fecha se ha aprobado la Estrategia TIC de la AGE por el Consejo de Ministros?";
 choices[90]= new Array();
 choices[90][0] = "Septiembre de 2014";
 choices[90][1] = "Diciembre de 2014";
 choices[90][2] = "Agosto de 2015";
 choices[90][3] = "Octubre de 2015";
 answers[90] = choices[90][3];
 units[90] = "24";
 comments[90] = "Id Pregunta: 10767. ";


//  Id pregunta: 10894 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  En el protocolo RIP Version 2 (Routing Information Protocol), cuyo algoritmo est&aacute; basado en vector distancia, el l&iacute;mite m&aacute;ximo de saltos a partir del cual se considera una ruta como inalcanzable es:";
 choices[91]= new Array();
 choices[91][0] = "15 saltos.";
 choices[91][1] = "9 saltos.";
 choices[91][2] = "16 saltos.";
 choices[91][3] = "7 saltos.";
 answers[91] = choices[91][0];
 units[91] = "102";
 comments[91] = "Id Pregunta: 10894. Examen GSI 2014";


//  Id pregunta: 10972 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l de las siguientes afirmaciones es verdadera respecto al esquema l&oacute;gico REDER que se encuentra dentro del modelo EFQM?";
 choices[92]= new Array();
 choices[92][0] = "La Evaluaci&oacute;n y Revisi&oacute;n se ocupa de los logros que est&aacute; alcanzando una organizaci&oacute;n.";
 choices[92][1] = "Los Resultados se ocupan de c&oacute;mo una organizaci&oacute;n implanta sistem&aacute;ticamente el enfoque.";
 choices[92][2] = "El Enfoque abarca lo que una organizaci&oacute;n planifica hacer y las razones para ello.";
 choices[92][3] = "El Despliegue aborda lo que hace una organizaci&oacute;n para evaluar, revisar y mejorar el enfoque.";
 answers[92] = choices[92][2];
 units[92] = "92";
 comments[92] = "Id Pregunta: 10972. TIC A1 AGE 2014";


//  Id pregunta: 11052 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Cu&aacute;l es el plazo m&aacute;ximo de validez de los certificados reconocidos para firma electr&oacute;nica?";
 choices[93]= new Array();
 choices[93][0] = "30 meses";
 choices[93][1] = "4 a&ntilde;os";
 choices[93][2] = "5 a&ntilde;os";
 choices[93][3] = "10 a&ntilde;os";
 answers[93] = choices[93][2];
 units[93] = "73";
 comments[93] = "Id Pregunta: 11052. Modificado por Ley 9/2014";


//  Id pregunta: 11124 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l de lo siguientes no es un servicio horizontal de la red SARA?";
 choices[94]= new Array();
 choices[94][0] = "Plataforma  de validaci&oacute;n de firma electr&oacute;nica @firma";
 choices[94][1] = "Solicitud de cambio de domicilio";
 choices[94][2] = "Pasarela de pago";
 choices[94][3] = "Registro Central de Personal";
 answers[94] = choices[94][3];
 units[94] = "44";
 comments[94] = "Id Pregunta: 11124. ";


//  Id pregunta: 11179 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Cu&aacute;l de los siguientes protocolos de encaminamiento es de nivel interno?";
 choices[95]= new Array();
 choices[95][0] = "OSPF";
 choices[95][1] = "IS-IS";
 choices[95][2] = "RIP";
 choices[95][3] = "Todos los anteriores";
 answers[95] = choices[95][3];
 units[95] = "103";
 comments[95] = "Id Pregunta: 11179. ";


//  Id pregunta: 11206 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Seg&uacute;n la Agenda digital Europea, &iquest;cu&aacute;l es el objetivo de las redes ultrarr&aacute;pidas debe alcanzarse en el conjunto de la uni&oacute;n europea en 2020?";
 choices[96]= new Array();
 choices[96][0] = "0.5";
 choices[96][1] = "0.8";
 choices[96][2] = "0.9";
 choices[96][3] = "1";
 answers[96] = choices[96][0];
 units[96] = "30";
 comments[96] = "Id Pregunta: 11206. ";


//  Id pregunta: 11301 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  De las siguientes opciones se&ntilde;ale la que no corresponde a una caracter&iacute;stica de las redes de banda ancha";
 choices[97]= new Array();
 choices[97][0] = "Se cambia la informaci&oacute;n de impulsos digitales por ondas moduladas.";
 choices[97][1] = "Conexion permanente, permitiendo a su vez la utilizacion de otra banda diferente del medio para otros fines";
 choices[97][2] = "Las se&ntilde;ales digitales pueden ser transmitidas directamente sin actuar sobre ellas";
 choices[97][3] = "Se utilizan dos o m&aacute;s canales de datos simult&aacute;neos en una &uacute;nica conexi&oacute;n";
 answers[97] = choices[97][2];
 units[97] = "99";
 comments[97] = "Id Pregunta: 11301. Es una caracter&iacute;stica de la banda base";


//  Id pregunta: 11601 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Para un sistema calificado con nivel sustancial de aseguramiento de la calidad, cl@ve admite como mecanismo v&aacute;lido de registro e identificaci&oacute;n:";
 choices[98]= new Array();
 choices[98][0] = "Cl@ve PIN de varios usos";
 choices[98][1] = "Cl@ve Permanente sin SMS";
 choices[98][2] = "Cl@ve PIN de un solo uso";
 choices[98][3] = "b) y c) son correctos";
 answers[98] = choices[98][2];
 units[98] = "44";
 comments[98] = "Id Pregunta: 11601. ";


//  Id pregunta: 11783 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Seg&uacute;n la ley 19/2013 de transparencia y en lo relativo al ejercicio del derecho de acceso de la informaci&oacute;n p&uacute;blica, se&ntilde;ale la FALSA:";
 choices[99]= new Array();
 choices[99][0] = "Ser&aacute;n motivadas las resoluciones que denieguen el acceso, las que concedan el acceso parcial o a trav&eacute;s de una modalidad distinta a la solicitada y las que permitan el acceso cuando haya habido oposici&oacute;n de un tercero.";
 choices[99][1] = "Transcurrido el plazo m&aacute;ximo para resolver sin que se haya dictado y notificado resoluci&oacute;n expresa se entender&aacute; que la solicitud ha sido desestimada.";
 choices[99][2] = "Las resoluciones dictadas en materia de acceso a la informaci&oacute;n p&uacute;blica no agotan la v&iacute;a administrativa y a&uacute;n son recurribles en alzada ante el Secretario de Estado de Funci&oacute;n P&uacute;blica.";
 choices[99][3] = "El plazo para resolver una solicitud de acceso ser&aacute; de un mes ampliable otro mes si as&iacute; fuera necesario.";
 answers[99] = choices[99][2];
 units[99] = "19";
 comments[99] = "Id Pregunta: 11783. ";


