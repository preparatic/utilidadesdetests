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

//  Id pregunta: 6 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de los siguientes organismos no corresponde a la estructura organizativa t&eacute;cnica de la normalizaci&oacute;n comunitaria?:";
 choices[0]= new Array();
 choices[0][0] = "ETSI (Instituto Europeo de Normalizaci&oacute;n de Telecomunicaciones)";
 choices[0][1] = "CENELEC (Comit&eacute; Europeo de Electr&oacute;nica)";
 choices[0][2] = "SITAR (Instituto Internacional de Tratamiento de la Informaci&oacute;n)";
 choices[0][3] = "CEPT (Confederaci&oacute;n Europea de Administraciones de Correos y Telecomunicaciones)";
 answers[0] = choices[0][2];
 units[0] = "42";
 comments[0] = "Id Pregunta: 6. ";


//  Id pregunta: 68 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Qu&eacute; m&eacute;todo de ordenaci&oacute;n de alternativas atiende &uacute;nicamente al criterio de mayor peso y mayor puntuaci&oacute;n, resolviendo los empates con el siguiente de mayor peso?:";
 choices[1]= new Array();
 choices[1][0] = "Concordancia";
 choices[1][1] = "M&eacute;todo lexicogr&aacute;fico";
 choices[1][2] = "Ponderaci&oacute;n lineal";
 choices[1][3] = "Ninguno de los anteriores";
 answers[1] = choices[1][1];
 units[1] = "34";
 comments[1] = "Id Pregunta: 68. NULL";


//  Id pregunta: 206 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  En el modelo de Donovan las organizaciones se clasifican en:";
 choices[2]= new Array();
 choices[2][0] = "Dinosaurio, gran hermano, mano vigilante, network, cluster";
 choices[2][1] = "Dinosaurio, gran hermano, perro vigilante, network, cluster";
 choices[2][2] = "Dinosaurio, gran hermano, mano amiga, perro vigilante, network";
 choices[2][3] = "Dinosaurio, gran hermano, mano amiga, perro vigilante, cluster";
 answers[2] = choices[2][2];
 units[2] = "22";
 comments[2] = "Id Pregunta: 206. donovan - nolan";


//  Id pregunta: 242 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  En un sistema de informaci&oacute;n:";
 choices[3]= new Array();
 choices[3][0] = "En el nivel t&aacute;ctico se implementan las decisiones mediante un procedimiento automatizado";
 choices[3][1] = "En el nivel operacional se realiza el grueso del tratamiento de los datos";
 choices[3][2] = "En el nivel estrat&eacute;gico las decisiones dependen de fuentes de informaci&oacute;n externa";
 choices[3][3] = "Todas las anteriores son correctas";
 answers[3] = choices[3][3];
 units[3] = "21";
 comments[3] = "Id Pregunta: 242. ";


//  Id pregunta: 300 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  La duraci&oacute;n total de un proyecto es:";
 choices[4]= new Array();
 choices[4][0] = "La del camino cr&iacute;tico del gr&aacute;fico de PERT.";
 choices[4][1] = "La del camino del gr&aacute;fico de PERT que m&aacute;s tareas realiza.";
 choices[4][2] = "La suma de la duraci&oacute;n de todas las tareas de un proyecto, como se refleja en el gr&aacute;fico de PERT.";
 choices[4][3] = "La de la tarea cr&iacute;tica, como se refleja en el gr&aacute;fico de PERT.";
 answers[4] = choices[4][0];
 units[4] = "27";
 comments[4] = "Id Pregunta: 300. ";


//  Id pregunta: 331 AÃ±o de creación de pregunta: 2004-01-01
 questions[5]= "6)  De acuerdo al RDL 1/1996, la protecci&oacute;n de los programas de ordenador:";
 choices[5]= new Array();
 choices[5][0] = "Cuando el autor sea una persona natural, para el caso m&aacute;s general, los derechos de explotaci&oacute;n durar&aacute;n toda su vida, y 70 a&ntilde;os despu&eacute;s de su muerte o declaraci&oacute;n de fallecimiento.";
 choices[5][1] = "Cuando el autor sea una persona jur&iacute;dica, la duraci&oacute;n de los derechos de explotaci&oacute;n ser&aacute; de 70 a&ntilde;os, computados desde el d&iacute;a 1 de enero del a&ntilde;o siguiente al de la divulgaci&oacute;n l&iacute;cita del programa o al de su creaci&oacute;n si no se hubiera divulgado.";
 choices[5][2] = "a y b son correctas";
 choices[5][3] = "a y b son incorrectas";
 answers[5] = choices[5][2];
 units[5] = "37";
 comments[5] = "Id Pregunta: 331. ";


//  Id pregunta: 341 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  La red de comunicaci&oacute;n en rueda de una organizaci&oacute;n es:";
 choices[6]= new Array();
 choices[6][0] = "Comunicaci&oacute;n ascendente donde dos subordinados reportan a su jefe sobre un asunto";
 choices[6][1] = "Esquema descendente en jerarqu&iacute;a absoluta";
 choices[6][2] = "Las respuestas &lsquo;a&rsquo;, &lsquo;b&rsquo; y &lsquo;d&rsquo; son falsas";
 choices[6][3] = "Se establece con dos interlocutores en cada caso, interactuando con los m&aacute;s cercanos a uno";
 answers[6] = choices[6][2];
 units[6] = "23";
 comments[6] = "Id Pregunta: 341. ";


//  Id pregunta: 361 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  Las t&eacute;cnicas de Gantt y Pert ayudan a:";
 choices[7]= new Array();
 choices[7][0] = "Fijar la duraci&oacute;n de cada etapa";
 choices[7][1] = "Estimar cu&aacute;l ser&aacute; la tarea cr&iacute;tica de un proyecto";
 choices[7][2] = "Estimar la duraci&oacute;n de un proyecto";
 choices[7][3] = "Estimar el costo de cada etapa";
 answers[7] = choices[7][2];
 units[7] = "28";
 comments[7] = "Id Pregunta: 361. ";


//  Id pregunta: 454 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Se&ntilde;ale la opci&oacute;n que es uno de los objetivos fundamentales de los sistemas abiertos seg&uacute;n X/Open:";
 choices[8]= new Array();
 choices[8][0] = "Portabilidad de aplicaciones en c&oacute;digo fuente";
 choices[8][1] = "Conectividad de aplicaciones a trav&eacute;s de servicios portables de red, independientes de los protocolos subyacentes y soporte de protocolos comunes";
 choices[8][2] = "Consistencia de la interfaz de usuario";
 choices[8][3] = "Todas son objetivos fundamentales";
 answers[8] = choices[8][3];
 units[8] = "40";
 comments[8] = "Id Pregunta: 454. ";


//  Id pregunta: 473 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  Uno de las siguientes no entra dentro de las diversas modalidades de auditor&iacute;a:";
 choices[9]= new Array();
 choices[9][0] = "Correctiva";
 choices[9][1] = "Detectiva";
 choices[9][2] = "Preventiva";
 choices[9][3] = "Adaptativa";
 answers[9] = choices[9][3];
 units[9] = "31, 32, 33";
 comments[9] = "Id Pregunta: 473. ";


//  Id pregunta: 868 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  &iquest;Cu&aacute;l de los siguientes no es un grupo de &aacute;reas de aplicaci&oacute;n de la inteligencia artifical?";
 choices[10]= new Array();
 choices[10][0] = "juegos, sistemas expertos, demostraci&oacute;n de teoremas";
 choices[10][1] = "lenguaje natural, razonamiento autom&aacute;tico, redes neuronales";
 choices[10][2] = "algoritmos gen&eacute;ticos, modelizaci&oacute;n del comportamiento humano, rob&oacute;tica";
 choices[10][3] = "todas son &aacute;reas de aplicaci&oacute;n de la inteligencia artificial";
 answers[10] = choices[10][3];
 units[10] = "63";
 comments[10] = "Id Pregunta: 868. ";


//  Id pregunta: 1010 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  El creador de HTML fue:";
 choices[11]= new Array();
 choices[11][0] = "Tim Berners-Lee";
 choices[11][1] = "Ivar Jacobson";
 choices[11][2] = "Grady Booch";
 choices[11][3] = "Todas son falsas";
 answers[11] = choices[11][0];
 units[11] = "69";
 comments[11] = "Id Pregunta: 1010. NULL";


//  Id pregunta: 1064 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  El workflow es una categor&iacute;a de aplicaciones dentro del trabajo en grupo o groupware que permite:";
 choices[12]= new Array();
 choices[12][0] = "Desarrollo de aplicaciones multiusuario";
 choices[12][1] = "Desarrollo de aplicaciones de coordinaci&oacute;n de procesos";
 choices[12][2] = "Desarrollo de aplicaciones de flujo de datos";
 choices[12][3] = "Desarrollo de aplicaciones de mail inteligente";
 answers[12] = choices[12][1];
 units[12] = "71";
 comments[12] = "Id Pregunta: 1064. ";


//  Id pregunta: 1353 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Se&ntilde;ale la respuesta falsa. Frente a RAID 1, RAID 5:";
 choices[13]= new Array();
 choices[13][0] = "Es m&aacute;s r&aacute;pido en escritura";
 choices[13][1] = "Utiliza m&aacute;s discos";
 choices[13][2] = "Ofrece menos espacio utilizable en relaci&oacute;n con el tama&ntilde;o total de los discos";
 choices[13][3] = "Todas las respuestas anteriores son falsas";
 answers[13] = choices[13][1];
 units[13] = "48";
 comments[13] = "Id Pregunta: 1353. ";


//  Id pregunta: 1475 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  Respecto a los formatos de compresi&oacute;n de video de la familia H.26x, es falso que:";
 choices[14]= new Array();
 choices[14][0] = "H.261 est&aacute; orientado a caudal constante, m&aacute;s id&oacute;neo para video sobre RDSI";
 choices[14][1] = "H.263 es m&aacute;s eficiente que H.261 y est&aacute; orientado a video sobre internet, con caudal variable";
 choices[14][2] = "No ofrecen compresi&oacute;n temporal, aunque s&iacute; compresi&oacute;n espacial";
 choices[14][3] = "Todo lo anterior es falso";
 answers[14] = choices[14][3];
 units[14] = "117";
 comments[14] = "Id Pregunta: 1475. ";


//  Id pregunta: 1592 AÃ±o de creación de pregunta: 2003-01-01
 questions[15]= "16)  En los lenguajes de marca, HTML y XML, las etiquetas finales se representan con la siguiente simbolog&iacute;a, donde TITLE es el texto que indica la etiqueta";
 choices[15]= new Array();
 choices[15][0] = "&lt;/TITLE&gt;";
 choices[15][1] = "&lt;TITLE&gt;";
 choices[15][2] = "/&lt;TITLE&gt;";
 choices[15][3] = "/TITLE";
 answers[15] = choices[15][0];
 units[15] = "69";
 comments[15] = "Id Pregunta: 1592. NULL";


//  Id pregunta: 1619 AÃ±o de creación de pregunta: 2003-01-01
 questions[16]= "17)  Qu&eacute; capas se pueden distinguir en la arquitectura de ODBC";
 choices[16]= new Array();
 choices[16][0] = "Cuatro: Aplicaci&oacute;n, administrador de or&iacute;genes de datos, controladores ODBC y or&iacute;genes de datos";
 choices[16][1] = "Tres: Aplicaci&oacute;n, ficherosy controlador basado en archivos";
 choices[16][2] = "Tres: Aplicaci&oacute;n, administrador y controlador ODBC basado en un sistema gestor de bases de datos";
 choices[16][3] = "Cuatro: Aplicaci&oacute;n, procesador, ficheros y controlador Driver Manager";
 answers[16] = choices[16][0];
 units[16] = "58";
 comments[16] = "Id Pregunta: 1619. ";


//  Id pregunta: 1642 AÃ±o de creación de pregunta: 2004-01-01
 questions[17]= "18)  &iquest;Cu&aacute;l de estas acciones se permite ejecutar en Java a un applet no firmado descargado de Internet?";
 choices[17]= new Array();
 choices[17][0] = "Leer ficheros locales";
 choices[17][1] = "Cargar librer&iacute;as nativas";
 choices[17][2] = "Conectarse a la m&aacute;quina desde la que se descarg&oacute;";
 choices[17][3] = "Llamar a m&eacute;todos privados de otoas applets de la misma p&aacute;gina";
 answers[17] = choices[17][2];
 units[17] = "60";
 comments[17] = "Id Pregunta: 1642. NULL";


//  Id pregunta: 1755 AÃ±o de creación de pregunta: 2006-01-01
 questions[18]= "19)  &iquest;Qu&eacute; es el Proyecto Mono?";
 choices[18]= new Array();
 choices[18][0] = "Iniciativa para portar el entorno .Net a Linux";
 choices[18][1] = "Completa enciclopedia de animales creada por Microsoft";
 choices[18][2] = "Herramienta de Software Libre para la educaci&oacute;n de los ni&ntilde;os en las escuelas";
 choices[18][3] = "Programa de dibujo";
 answers[18] = choices[18][0];
 units[18] = "61,62";
 comments[18] = "Id Pregunta: 1755. ";


//  Id pregunta: 1767 AÃ±o de creación de pregunta: 2006-01-01
 questions[19]= "20)  En Java a una colecci&oacute;n de clases relacionadas se denomina:";
 choices[19]= new Array();
 choices[19][0] = "Superset o superconjunto.";
 choices[19][1] = "Package o paquete.";
 choices[19][2] = "Superclass o Superclase.";
 choices[19][3] = "Colection o Colecci&oacute;n.";
 answers[19] = choices[19][1];
 units[19] = "60";
 comments[19] = "Id Pregunta: 1767. NULL";


//  Id pregunta: 1839 AÃ±o de creación de pregunta: 2006-01-01
 questions[20]= "21)  &iquest;A qu&eacute; hacen referencia las siglas NRC en un sistema de pasarela de pagos?";
 choices[20]= new Array();
 choices[20][0] = "N&uacute;mero de Registro de Control";
 choices[20][1] = "N&uacute;mero de Referencia de Control";
 choices[20][2] = "N&uacute;mero de Referencia Completo";
 choices[20][3] = "N&uacute;mero de Registro Completo";
 answers[20] = choices[20][2];
 units[20] = "70";
 comments[20] = "Id Pregunta: 1839. NULL";


//  Id pregunta: 2036 AÃ±o de creación de pregunta: 2004-01-01
 questions[21]= "22)  Sean: a) ac&uacute;stico, b) fon&eacute;tico, c) fonol&oacute;gico, d) l&eacute;xico-sint&aacute;ctico, e) pros&oacute;dico, f) sem&aacute;ntico-pragm&aacute;tico, &iquest;cu&aacute;l ser&iacute;a la ordenaci&oacute;n correcta en funci&oacute;n de la menor a mayor inteligencia...";
 choices[21]= new Array();
 choices[21][0] = "a c b d e f";
 choices[21][1] = "a b c d e f";
 choices[21][2] = "a c b e d f";
 choices[21][3] = "a b c e d f";
 answers[21] = choices[21][1];
 units[21] = "94";
 comments[21] = "Id Pregunta: 2036. Similar a examen TIC MAP A 2004";


//  Id pregunta: 2041 AÃ±o de creación de pregunta: 2004-01-01
 questions[22]= "23)  Un &quot;walkthrough&quot; es:";
 choices[22]= new Array();
 choices[22][0] = "Un tipo de auditor&iacute;a de calidad";
 choices[22][1] = "Una actividad de garant&iacute;a de calidad";
 choices[22][2] = "Un tipo de revisi&oacute;n";
 choices[22][3] = "La verificaci&oacute;n formal de la calidad del software";
 answers[22] = choices[22][2];
 units[22] = "92";
 comments[22] = "Id Pregunta: 2041. NULL";


//  Id pregunta: 2341 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  En orientaci&oacute;n a objetos, &iquest;c&oacute;mo se define la cohesi&oacute;n fuerte?:";
 choices[23]= new Array();
 choices[23][0] = "Aislamiento de los m&eacute;todos de una clase frente a las dem&aacute;s";
 choices[23][1] = "Los operadores que aparecen en la interfaz son los &uacute;nicos que pueden acceder o alterar los datos internos a la clase";
 choices[23][2] = "Es la medida en la que las tareas que desempe&ntilde;a una clase est&aacute;n estrechamente relacionadas";
 choices[23][3] = "Ninguna de las anteriores define la cohesi&oacute;n";
 answers[23] = choices[23][2];
 units[23] = "82";
 comments[23] = "Id Pregunta: 2341. ";


//  Id pregunta: 2599 AÃ±o de creación de pregunta: 2003-01-01
 questions[24]= "25)  Seg&uacute;n METRICA V3, &iquest;cu&aacute;l de las siguientes no se considera una tarea propia de la etapa de Implantaci&oacute;n y Aceptaci&oacute;n de Sistemas de informaci&oacute;n (IAS)?:";
 choices[24]= new Array();
 choices[24][0] = "Establecimiento del Plan de Implantaci&oacute;n";
 choices[24][1] = "Elaboraci&oacute;n de los manuales de usuario.";
 choices[24][2] = "Incorporaci&oacute;n del Sistema a entorno de operaci&oacute;n.";
 choices[24][3] = " Paso a Producci&oacute;n.";
 answers[24] = choices[24][1];
 units[24] = "86";
 comments[24] = "Id Pregunta: 2599. Junta Andaluc&iacute;a";


//  Id pregunta: 2681 AÃ±o de creación de pregunta: 2003-01-01
 questions[25]= "26)  Indique la afirmaci&oacute;n verdadera:";
 choices[25]= new Array();
 choices[25][0] = "La informaci&oacute;n recogida por la c&eacute;lula fotoel&eacute;ctrica del esc&aacute;ner es de tipo anal&oacute;gica.";
 choices[25][1] = "En el caso de los esc&aacute;neres de color, el sistema de detecci&oacute;n consiste en separar los componentes de color en sus valores b&aacute;sicos: rojo, verde y azul.";
 choices[25][2] = "La exploraci&oacute;n se realiza mediante c&eacute;lulas fotoel&eacute;ctricas o fotodiodos y el resultado es una informaci&oacute;n que hay que digitalizar antes de que se pueda transmitir al ordenador, que es capaz de procesarla mediante sistemas gr&aacute;ficos y software especial.";
 choices[25][3] = "Todas las anteriores.";
 answers[25] = choices[25][3];
 units[25] = "93";
 comments[25] = "Id Pregunta: 2681. NULL";


//  Id pregunta: 2689 AÃ±o de creación de pregunta: 2004-01-01
 questions[26]= "27)  Los niveles de comportamiento contemplados en el modelo CMM (Capacity Maturity Model) para el desarrollo de software son ...";
 choices[26]= new Array();
 choices[26][0] = "Ca&oacute;tico, inicial, repetible, definido, gestionado y optimizado";
 choices[26][1] = "Inicial, repetible, definido, gestionado y mecanizado";
 choices[26][2] = "Inicial, repetible, definido, gestionado y optimizado";
 choices[26][3] = "Ninguna de las anteriores";
 answers[26] = choices[26][2];
 units[26] = "87,88,92";
 comments[26] = "Id Pregunta: 2689. ";


//  Id pregunta: 2814 AÃ±o de creación de pregunta: 2006-01-01
 questions[27]= "28)  En el modelo EFQM la suma de puntuaci&oacute;n m&aacute;xima de todos los criterios es 1000. &iquest;C&uacute;al de los siguientes criterios da m&aacute;s puntuaci&oacute;n?";
 choices[27]= new Array();
 choices[27][0] = "Impacto social";
 choices[27][1] = "Resultado global del negocio";
 choices[27][2] = "Satisfacci&oacute;n de los clientes";
 choices[27][3] = "Procesos";
 answers[27] = choices[27][2];
 units[27] = "88";
 comments[27] = "Id Pregunta: 2814. NULL";


//  Id pregunta: 2986 AÃ±o de creación de pregunta: 2004-01-01
 questions[28]= "29)  La direcci&oacute;n ip 127.0.0.1 representa a";
 choices[28]= new Array();
 choices[28][0] = "El router de la red";
 choices[28][1] = "Toda la red";
 choices[28][2] = "El propio equipo";
 choices[28][3] = "Usualmente el servidor";
 answers[28] = choices[28][2];
 units[28] = "100";
 comments[28] = "Id Pregunta: 2986. NULL";


//  Id pregunta: 3004 AÃ±o de creación de pregunta: 2004-01-01
 questions[29]= "30)  Una de las caracter&iacute;sticas b&aacute;sicas de ATM (Modelo de transferencia as&iacute;ncrono) es:";
 choices[29]= new Array();
 choices[29][0] = "Utiliza un formato de celda de longitud fija";
 choices[29][1] = "El tama&ntilde;o de la celda se negocia en el nivel de enlace";
 choices[29][2] = "El tama&ntilde;o de la celda se negocia a trav&eacute;s de red";
 choices[29][3] = "El tama&ntilde;o de la celda se negocia a trav&eacute;s de transorte";
 answers[29] = choices[29][0];
 units[29] = "109";
 comments[29] = "Id Pregunta: 3004. ";


//  Id pregunta: 3006 AÃ±o de creación de pregunta: 2004-01-01
 questions[30]= "31)  En qu&eacute; tipos se divide la fibra &oacute;ptica en funci&oacute;n de la forma de variaci&oacute;n del &iacute;ndice de refracci&oacute;n desde el eje de la fibra al exterior";
 choices[30]= new Array();
 choices[30][0] = "f.o. monomodo y multimodo";
 choices[30][1] = "f.o. de salto de &iacute;ndice y de &iacute;ndice gradual";
 choices[30][2] = "f.o. de emisores LED y emisores l&aacute;ser";
 choices[30][3] = "f.o. de &iacute;ndice anal&oacute;gico y digital";
 answers[30] = choices[30][1];
 units[30] = "99";
 comments[30] = "Id Pregunta: 3006. NULL";


//  Id pregunta: 3051 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  &iquest;Qu&eacute; objetos intervienen en el nivel de aplicaci&oacute;n de la arquitectura internet de 3 capas?:";
 choices[31]= new Array();
 choices[31][0] = "P&aacute;ginas HTML";
 choices[31][1] = "Objetos de negocio";
 choices[31][2] = "Componentes de base de datos";
 choices[31][3] = "Todas intervienen";
 answers[31] = choices[31][1];
 units[31] = "113";
 comments[31] = "Id Pregunta: 3051. ";


//  Id pregunta: 3230 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  &iquest;Cu&aacute;l de los siguientes podr&iacute;a ser usado en un sistema aut&oacute;nomo para enrutamiento?:";
 choices[32]= new Array();
 choices[32][0] = "BGP (Border Gateway Protocol)";
 choices[32][1] = "EGP (Exterior Gateway Protocol)";
 choices[32][2] = "AGP (Autonomous Gateway Protocol)";
 choices[32][3] = "RIP (Routing Information Protocol)";
 answers[32] = choices[32][3];
 units[32] = "102";
 comments[32] = "Id Pregunta: 3230. ";


//  Id pregunta: 3573 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  En una conexi&oacute;n V.90:";
 choices[33]= new Array();
 choices[33][0] = "Los m&oacute;dems siempre han de sincronizarse a 56k.";
 choices[33][1] = "Los m&oacute;dems no establecen protocolo de negociaci&oacute;n de par&aacute;metros previo a la conexi&oacute;n.";
 choices[33][2] = "La negociaci&oacute;n se hace v&iacute;a protocolos TCP.";
 choices[33][3] = "La velocidad de conexi&oacute;n se negocia entre los dos m&oacute;dem de acuerdo a las caracter&iacute;sticas de la l&iacute;nea.";
 answers[33] = choices[33][3];
 units[33] = "100, 103";
 comments[33] = "Id Pregunta: 3573. modems";


//  Id pregunta: 3646 AÃ±o de creación de pregunta: 2002-01-01
 questions[34]= "35)  La tecnolog&iacute;a de red de &aacute;rea local 10Base-T:";
 choices[34]= new Array();
 choices[34][0] = "Requiere cableado coaxial delgado";
 choices[34][1] = "Requiere cableado de pares trenzados de categor&iacute;a 5 como m&iacute;nimo";
 choices[34][2] = "Cumple el est&aacute;ndar IEEE 802.3";
 choices[34][3] = "Son ciertas las respuestas 'b' y 'c'";
 answers[34] = choices[34][2];
 units[34] = "101";
 comments[34] = "Id Pregunta: 3646. ";


//  Id pregunta: 3669 AÃ±o de creación de pregunta: 2002-01-01
 questions[35]= "36)  Una de las capas o niveles del modelo de referencia de interconexi&oacute;n de sistemas abiertos (OSI) no corresponde a la operaci&oacute;n de los dispositivos mencionados. &iquest;Cual?:";
 choices[35]= new Array();
 choices[35][0] = "F&iacute;sico - Repetidor (&ldquo;repeater&rdquo;), Concentrador (&ldquo;hub&rdquo;), M&oacute;dem, TR1, AT";
 choices[35][1] = "Enlace - Puente (&ldquo;bridge&rdquo;), Conmutador (&ldquo;switch&rdquo;)";
 choices[35][2] = "Enlace - Conector V.24, Conector V.35";
 choices[35][3] = "Red - Encaminador (&ldquo;router&rdquo;)";
 answers[35] = choices[35][2];
 units[35] = "100,101";
 comments[35] = "Id Pregunta: 3669. ";


//  Id pregunta: 3992 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  Se&ntilde;ale la respuesta correcta:";
 choices[36]= new Array();
 choices[36][0] = "IDABC tiene como objetivo la identificaci&oacute;n, promoci&oacute;n y desarrollo de servicios paneuropeos de e-administraci&oacute;n para los ciudadanos, las empresas y las administraciones, as&iacute; como de las infraestructuras y servicios necesarios para el despliegue.";
 choices[36][1] = "El comit&eacute; de gesti&oacute;n del programa se denomina Comit&eacute; de Servicios Paneuropeos de Administraci&oacute;n Electr&oacute;nica (CSPAE). ";
 choices[36][2] = "Sus antecesores son los programas IDA II (1999-2004) e IDA I (1995-1998)";
 choices[36][3] = "Todas son verdaderas";
 answers[36] = choices[36][3];
 units[36] = "103";
 comments[36] = "Id Pregunta: 3992. ";


//  Id pregunta: 4091 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  En .NET el c&oacute;digo fuente se compila a un lenguaje intermedio";
 choices[37]= new Array();
 choices[37][0] = "que se llama Bytecode, igual que en Jaba";
 choices[37][1] = "denominado IL, Lenguaje intermedio";
 choices[37][2] = "No se compila, sino que el c&oacute;digo es interpretado directamente por un int&eacute;rprete CLR";
 choices[37][3] = "que depende de la m&aacute;quina en la que se va a ejecutar";
 answers[37] = choices[37][1];
 units[37] = "115";
 comments[37] = "Id Pregunta: 4091. ";


//  Id pregunta: 4109 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  Webmail es:";
 choices[38]= new Array();
 choices[38][0] = "Una soluci&oacute;n de correo electr&oacute;nico a trav&eacute;s de Internet en la que s&oacute;lo necesitas un programa de correo electr&oacute;nico especializado que accede a trav&eacute;s del protocolo POP3.";
 choices[38][1] = "Una soluci&oacute;n de correo electr&oacute;nico a trav&eacute;s de Internet en la que s&oacute;lo necesitas un Navegador.";
 choices[38][2] = "a) y b) son ciertas";
 choices[38][3] = "a) y b) son falsas";
 answers[38] = choices[38][1];
 units[38] = "112";
 comments[38] = "Id Pregunta: 4109. ";


//  Id pregunta: 4128 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  Lenguaje utilizado para describir los servicios web ofrecidos a los usuarios";
 choices[39]= new Array();
 choices[39][0] = "XML";
 choices[39][1] = "Xerces";
 choices[39][2] = "UDDI";
 choices[39][3] = "WSDL";
 answers[39] = choices[39][3];
 units[39] = "112,51";
 comments[39] = "Id Pregunta: 4128. ";


//  Id pregunta: 4307 AÃ±o de creación de pregunta: 2007-01-01
 questions[40]= "41)  &iquest;Cu&aacute;l de las siguientes opciones no es una heur&iacute;stica de dise&ntilde;o aplicable a los Diagramas de Estructura preliminares?:";
 choices[40]= new Array();
 choices[40][0] = "Aislar el centro de transformaci&oacute;n especificando los l&iacute;mites del flujo de entrada y salida.";
 choices[40][1] = "No utilizar variables globales.";
 choices[40][2] = "Optimizar los grados de entrada y salida de los m&oacute;dulos.";
 choices[40][3] = "No dejar que un dato se obtenga en un m&oacute;dulo lejano al m&oacute;dulo donde se utiliza.";
 answers[40] = choices[40][0];
 units[40] = "81";
 comments[40] = "Id Pregunta: 4307. ";


//  Id pregunta: 4362 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  &iquest;Cu&aacute;l de los siguientes no es un operador en el an&aacute;lisis de los almacenes de datos multidimensionales?";
 choices[41]= new Array();
 choices[41][0] = "Duck.";
 choices[41][1] = "Drill.";
 choices[41][2] = "Roll.";
 choices[41][3] = "Slice &amp; dice.";
 answers[41] = choices[41][0];
 units[41] = "68";
 comments[41] = "Id Pregunta: 4362. ";


//  Id pregunta: 4423 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  En relaci&oacute;n con la Ley 59/2003, de firma electr&oacute;nica, se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[42]= new Array();
 choices[42][0] = "El prestador de servicios de certificaci&oacute;n ha de ser una persona jur&iacute;dica.";
 choices[42][1] = "Por resoluci&oacute;n administrativa puede suspenderse, pero no extinguirse, la vigencia de los certificados electr&oacute;nicos.";
 choices[42][2] = "Los certificados reconocidos deben incluir necesariamente, entre otros datos, la firma electr&oacute;nica avanzada del prestador de servicios de certificaci&oacute;n que expide el certificado.";
 choices[42][3] = "El DNI electr&oacute;nico acredita electr&oacute;nicamente la identidad personal de su titular, pero no permite la firma electr&oacute;nica de documentos.";
 answers[42] = choices[42][2];
 units[42] = "30";
 comments[42] = "Id Pregunta: 4423. Ley 59/2003, art&iacute;culo 11";


//  Id pregunta: 4438 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  En el an&aacute;lisis de los requisitos de un sistema de informaci&oacute;n, para representar los distintos datos y sus relaciones, la &ldquo;t&eacute;cnica&rdquo; m&aacute;s adecuada:";
 choices[43]= new Array();
 choices[43][0] = "Seudoc&oacute;digo.";
 choices[43][1] = "Modelo Entidad-Relaci&oacute;n.";
 choices[43][2] = "Diagramas de transici&oacute;n de estados.";
 choices[43][3] = "DFD (Diagrama de Flujo de Datos).";
 answers[43] = choices[43][1];
 units[43] = "78";
 comments[43] = "Id Pregunta: 4438. ";


//  Id pregunta: 4439 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  Se&ntilde;ale la que no sea una de las t&eacute;cnicas especificas para el an&aacute;lisis de riesgos que establece MAGERIT.";
 choices[44]= new Array();
 choices[44][0] = "An&aacute;lisis de procesos.";
 choices[44][1] = "An&aacute;lisis mediante tablas.";
 choices[44][2] = "An&aacute;lisis algor&iacute;tmico.";
 choices[44][3] = "&Aacute;rboles de ataque.";
 answers[44] = choices[44][0];
 units[44] = "33";
 comments[44] = "Id Pregunta: 4439. ";


//  Id pregunta: 4522 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  En el modelo de Ciclo de vida en cascada pura, &iquest;que sucede si Ia revisi&oacute;n del paso a Ia siguiente etapa del proyecto no es satisfactoria?";
 choices[45]= new Array();
 choices[45][0] = "Se continua con Ia etapa siguiente.";
 choices[45][1] = "Se retrocede a Ia etapa anterior.";
 choices[45][2] = "Se permanece en la etapa actual hasta que este preparada.";
 choices[45][3] = "Se comienza otra vez con Ia primera etapa.";
 answers[45] = choices[45][2];
 units[45] = "76";
 comments[45] = "Id Pregunta: 4522. ";


//  Id pregunta: 4550 AÃ±o de creación de pregunta: 2007-01-01
 questions[46]= "47)  El Sistema de Comunicaciones Moviles Europeo de Tercera Generacion recibe el nombre de:";
 choices[46]= new Array();
 choices[46][0] = "UMTS";
 choices[46][1] = "EDGE";
 choices[46][2] = "DCS-1800.";
 choices[46][3] = "PHS";
 answers[46] = choices[46][0];
 units[46] = "108";
 comments[46] = "Id Pregunta: 4550. ";


//  Id pregunta: 4666 AÃ±o de creación de pregunta: 2007-01-01
 questions[47]= "48)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares no est&aacute; relacionado con procesos de negocio?";
 choices[47]= new Array();
 choices[47][0] = "BPMN";
 choices[47][1] = "BPEL";
 choices[47][2] = "XPDL";
 choices[47][3] = "WSDL";
 answers[47] = choices[47][3];
 units[47] = "51";
 comments[47] = "Id Pregunta: 4666. NULL";


//  Id pregunta: 4680 AÃ±o de creación de pregunta: 2007-01-01
 questions[48]= "49)  La API JDBC se utiliza:";
 choices[48]= new Array();
 choices[48][0] = "Para efectuar consultas, actualizaciones de la base de datos que tengan los drivers adecuados. Tambi&eacute;n sepueden utilizar procedimientos almacenados y control de transacciones, pr&aacute;cticamente todas las funciones quesoporta un SGBD relacional.";
 choices[48][1] = "La API JDBC s&oacute;lo incorpora unos drivers que soportan las funciones de un SGBD relacional";
 choices[48][2] = "Para efectuar consultas y actualizaciones del SGBD relacional. El control de transacciones y las llamadas aprocedimientos almacenados no est&aacute;n soportados.";
 choices[48][3] = "Para efectuar consultas, actualizaciones de la base de datos que tengan los drivers adecuados y algunas delas funciones que soporta un SGBD relacional.";
 answers[48] = choices[48][0];
 units[48] = "60";
 comments[48] = "Id Pregunta: 4680. Examen 2006 JCYL";


//  Id pregunta: 4884 AÃ±o de creación de pregunta: 2007-01-01
 questions[49]= "50)  &iquest;Cu&aacute;l de las siguientes afirmaciones respecto a la gesti&oacute;n de redes NO es cierta?";
 choices[49]= new Array();
 choices[49][0] = "La base de informaci&oacute;n de administraci&oacute;n (MIB) tiene una estructura de base de datos y reside en laestaci&oacute;n de monitorizaci&oacute;n";
 choices[49][1] = "Uno de los modos de monitorizaci&oacute;n de SNMP (Simple Network Management Protocol) es el de sondeo, queconsiste en la interrupci&oacute;n por parte del agente SNMP a trav&eacute;s del puerto 162 de UDP (User DatagramProtocol)";
 choices[49][2] = "SNMPv3 (SNMP version 3) introduce capacidades de seguridad frente a las versiones anteriores, tales comocontrol de acceso, autenticaci&oacute;n y privacidad";
 choices[49][3] = "RMONv2 (Remote Monitoring version 2) permite la monitorizaci&oacute;n de segmentos de redes de &aacute;rea local y elchequeo de trafico a nivel de red y aplicaci&oacute;n";
 answers[49] = choices[49][0];
 units[49] = "104";
 comments[49] = "Id Pregunta: 4884. ";


//  Id pregunta: 5039 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  Seg&uacute;n el est&aacute;ndar ISO 7816-2 sobre contactos del chip en las tarjetas inteligentes, &iquest;cu&aacute;l de los siguientescontactos se utiliza para la se&ntilde;al de reloj?:";
 choices[50]= new Array();
 choices[50][0] = "C2";
 choices[50][1] = "C3";
 choices[50][2] = "C5";
 choices[50][3] = "C6";
 answers[50] = choices[50][1];
 units[50] = "74";
 comments[50] = "Id Pregunta: 5039. Examen TIC A 2007";


//  Id pregunta: 5183 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  En el modelo E/R, las relaciones d&eacute;biles:";
 choices[51]= new Array();
 choices[51][0] = "Relacionan una entidad fuerte con dos o m&aacute;s entidades, fuertes o d&eacute;biles";
 choices[51][1] = "Relacionan dos entidades d&eacute;biles";
 choices[51][2] = "Relacionan una entidad d&eacute;bil con una fuerte";
 choices[51][3] = "Ninguna de las anteriores";
 answers[51] = choices[51][2];
 units[51] = "80";
 comments[51] = "Id Pregunta: 5183. ";


//  Id pregunta: 5239 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  Una de las siguientes caracter&iacute;sticas no es propia de la planificaci&oacute;n estrat&eacute;gica:";
 choices[52]= new Array();
 choices[52][0] = "Su alcance, afecta generalmente a toda la organizaci&oacute;n";
 choices[52][1] = "Detalla los recursos para alcanzar las formulaciones fijadas en los planes estrat&eacute;gicos";
 choices[52][2] = "La alta direcci&oacute;n est&aacute; implicada en la planificaci&oacute;n estrat&eacute;gica";
 choices[52][3] = "Proceso de evaluaci&oacute;n sistem&aacute;tica de la naturaleza de un negocio, definiendo objetivos a largo plazo";
 answers[52] = choices[52][1];
 units[52] = "77";
 comments[52] = "Id Pregunta: 5239. ";


//  Id pregunta: 5584 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  &iquest;Qu&eacute; tipos de contratos se regulan en el RD Legislativo 3/2011 de contratos del sector p&uacute;blico?";
 choices[53]= new Array();
 choices[53][0] = "Obras, gesti&oacute;n de servicios p&uacute;blicos, consultor&iacute;a y asistencia y servicios, y concesi&oacute;n de obras p&uacute;blicas";
 choices[53][1] = "Obras, concesi&oacute;n de obras p&uacute;blicas, gesti&oacute;n de servicios p&uacute;blicos, suministro, servicios, y de colaboraci&oacute;n entre el sector p&uacute;blico y el sector privado";
 choices[53][2] = "Obras, suministros, consultor&iacute;a y asistencia, y gesti&oacute;n p&uacute;blica de servicios privados";
 choices[53][3] = "ninguno de los anteriores es correcto";
 answers[53] = choices[53][1];
 units[53] = "41";
 comments[53] = "Id Pregunta: 5584. ";


//  Id pregunta: 5837 AÃ±o de creación de pregunta: 2009-01-01
 questions[54]= "55)  &iquest;Cu&aacute;l de las afirmaciones siguientes NO es uno de los principios incluidos en el &quot;Manifiesto &Aacute;gil&quot; (Manifiesto por elDesarrollo &Aacute;gil de Software)?";
 choices[54]= new Array();
 choices[54][0] = "Aceptamos requisitos cambiantes, excepto en etapas avanzadas";
 choices[54][1] = "Entregamos software frecuentemente, con una periodicidad desde un par de semanas a un par de meses, con preferencia por los periodos m&aacute;s cortos posibles";
 choices[54][2] = "Las mejores arquitecturas, requisitos y dise&ntilde;os surgen de equipos que se auto organizan";
 choices[54][3] = "El m&eacute;todo m&aacute;s eficiente y efectivo de comunicar la informaci&oacute;n a un equipo de desarrollo y entre los miembros del mismo es la conversaci&oacute;n cara a cara";
 answers[54] = choices[54][0];
 units[54] = "79";
 comments[54] = "Id Pregunta: 5837. MAP 2008 A1";


//  Id pregunta: 5909 AÃ±o de creación de pregunta: 2009-01-01
 questions[55]= "56)  &iquest;Qu&eacute; tipo de miembros NO existen en el Instituto Europeo de Normas de Telecomunicaci&oacute;n (ETSI)?";
 choices[55]= new Array();
 choices[55][0] = "Miembros Plenos";
 choices[55][1] = "Miembros Coordinadores";
 choices[55][2] = "Miembros Asociados";
 choices[55][3] = "Miembros Consejeros";
 answers[55] = choices[55][1];
 units[55] = "42";
 comments[55] = "Id Pregunta: 5909. MAP 2008 A1";


//  Id pregunta: 5911 AÃ±o de creación de pregunta: 2009-01-01
 questions[56]= "57)  Los fabricantes e investigadores hacen referencia a diversos factores determinantes en la calidad de la trasmisi&oacute;n de la voz; de entre los siguientes, determine el &quot;cr&iacute;tico&quot; para aplicaciones de tiempo real como la voz y el video sobre IP:";
 choices[56]= new Array();
 choices[56][0] = "Jitter";
 choices[56][1] = "Throughput";
 choices[56][2] = "Delay";
 choices[56][3] = "Packet Loss";
 answers[56] = choices[56][0];
 units[56] = "109";
 comments[56] = "Id Pregunta: 5911. MAP 2008 A1";


//  Id pregunta: 5924 AÃ±o de creación de pregunta: 2009-01-01
 questions[57]= "58)  De acuerdo con la Metodolog&iacute;a M&eacute;trica Versi&oacute;n 3, indique el concepto que NO es necesario tener en cuenta en el c&aacute;lculo del &quot;Retorno de la Inversi&oacute;n&quot;:";
 choices[57]= new Array();
 choices[57][0] = "Beneficio Neto Anual";
 choices[57][1] = "Inversi&oacute;n Promedio";
 choices[57][2] = "Coste desarrollo anualizado";
 choices[57][3] = "Periodo de Amortizaci&oacute;n";
 answers[57] = choices[57][3];
 units[57] = "86";
 comments[57] = "Id Pregunta: 5924. MAP 2008 A1";


//  Id pregunta: 5977 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  El protocolo de encaminamiento m&aacute;s adecuado a utilizar en un punto neutro de interconexi&oacute;n en el que varios proveedores de Internet intercambian tr&aacute;fico es:";
 choices[58]= new Array();
 choices[58][0] = "OSPF.";
 choices[58][1] = "No es adecuado usar encaminamiento din&aacute;mico, se recurre a tablas est&aacute;ticas.";
 choices[58][2] = "RIP.";
 choices[58][3] = "BGP-4.";
 answers[58] = choices[58][3];
 units[58] = "102";
 comments[58] = "Id Pregunta: 5977. TIC A 2009";


//  Id pregunta: 6097 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  El sistema operativo MSDOS es:";
 choices[59]= new Array();
 choices[59][0] = "Multiprocesador asim&eacute;trico.";
 choices[59][1] = "Multiprocesador sim&eacute;trico.";
 choices[59][2] = "Multiusuario.";
 choices[59][3] = "Monoprocesador.";
 answers[59] = choices[59][3];
 units[59] = "52";
 comments[59] = "Id Pregunta: 6097. TIC A 2009";


//  Id pregunta: 6244 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  La norma UNE 139801:2003 establece requisitos de accesibilidad del hardware de los ordenadores para las personas con discapacidad, agrupados en:";
 choices[60]= new Array();
 choices[60][0] = "5 categor&iacute;as: botones e interruptores, teclas y teclados, pantalla, audio, unidades de disco y medios de almacenamiento extra&iacute;bles";
 choices[60][1] = "3 categor&iacute;as: elementos de procesamiento, elementos de almacenamiento, perif&eacute;ricos";
 choices[60][2] = "9 categor&iacute;as: botones e interruptores, teclas y teclados, pantalla, audio, unidades de disco y medios de almacenamiento extra&iacute;bles, conexiones externas, tiempo, documentaci&oacute;n, otros";
 choices[60][3] = "2 categor&iacute;as: elementos centrales y perif&eacute;ricos";
 answers[60] = choices[60][2];
 units[60] = "39";
 comments[60] = "Id Pregunta: 6244. TICB-2009";


//  Id pregunta: 6299 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  &iquest;C&oacute;mo se denomina cada uno de los objetos individuales pertenecientes a una clase?";
 choices[61]= new Array();
 choices[61][0] = "Ente";
 choices[61][1] = "Participaci&oacute;n";
 choices[61][2] = "Instancia";
 choices[61][3] = "Abstracci&oacute;n";
 answers[61] = choices[61][2];
 units[61] = "82";
 comments[61] = "Id Pregunta: 6299. ";


//  Id pregunta: 6322 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no es propia del modelo relacional?";
 choices[62]= new Array();
 choices[62][0] = "Los datos se perciben como tablas.";
 choices[62][1] = "Los operadores que se utilizan toman como entrada tablas y a su salida presentan entidades.";
 choices[62][2] = "Los operadores que se utilizan toman como entrada tablas y como salida tablas.";
 choices[62][3] = "Dispone de una fuerte componente matem&aacute;tica que le da soporte.";
 answers[62] = choices[62][1];
 units[62] = "58";
 comments[62] = "Id Pregunta: 6322. NULL";


//  Id pregunta: 6387 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  &iquest;Es posible crear sedes electr&oacute;nicas compartidas?";
 choices[63]= new Array();
 choices[63][0] = "No";
 choices[63][1] = "S&iacute;, mediante acuerdo del Consejo de Ministros";
 choices[63][2] = "S&iacute;, mediante orden del Ministro de la Presidencia";
 choices[63][3] = "S&iacute;, mediante orden de los Ministros interesados";
 answers[63] = choices[63][2];
 units[63] = "43";
 comments[63] = "Id Pregunta: 6387. Art&iacute;culo 3.3 RD 1671/2009";


//  Id pregunta: 6408 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  &iquest;Cu&aacute;l de los siguientes no ser&aacute; considerada una infracci&oacute;n de los derechos de autor, de acuerdo a la Ley de Propiedad Intelectual?";
 choices[64]= new Array();
 choices[64][0] = "Poner en circulaci&oacute;n una o m&aacute;s copias de un programa de ordenador conociendo o pudiendo presumir su naturaleza ileg&iacute;tima, sin autorizaci&oacute;n del titular de los derechos.";
 choices[64][1] = "Tener con fines comerciales una o m&aacute;s copias de un programa de ordenador, conociendo o pudiendo presumir su naturaleza ileg&iacute;tima, , sin autorizaci&oacute;n del titular de los derechos.";
 choices[64][2] = "Poner en circulaci&oacute;n o tener con fines comerciales cualquier instrumento que tenga, entre otros usos, facilitar la supresi&oacute;n o neutralizaci&oacute;n no autorizadas de cualquier dispositivo t&eacute;cnico utilizado para proteger un programa de ordenador, sin autorizaci&oacute;n del titular de los derechos.";
 choices[64][3] = "Todas las anteriores son consideradas infracciones, seg&uacute;n la Ley de Propiedad Intelectual.";
 answers[64] = choices[64][2];
 units[64] = "36";
 comments[64] = "Id Pregunta: 6408. Art&iacute;culo 102 RDL 1/1996";


//  Id pregunta: 6517 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  Se&ntilde;ale que afirmaci&oacute;n es FALSA en relaci&oacute;n a los archivos jar en java:";
 choices[65]= new Array();
 choices[65][0] = "El algoritmo de compresi&oacute;n que utilizan es LZW.";
 choices[65][1] = "Son independientes de la plataforma y cualquier JVM los interpreta.";
 choices[65][2] = "Todos los ficheros que contienen, tienen la extensi&oacute;n class.";
 choices[65][3] = "Pueden incluir un subdirectorio de metainformaci&oacute;n llamado META-INF.";
 answers[65] = choices[65][2];
 units[65] = "60";
 comments[65] = "Id Pregunta: 6517. NULL";


//  Id pregunta: 6546 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  Deficiencias dentro del sistema Kerberos";
 choices[66]= new Array();
 choices[66][0] = "El centro de distribuci&oacute;n de claves es un &uacute;nico punto de fallo";
 choices[66][1] = "Privacidad";
 choices[66][2] = "Integridad";
 choices[66][3] = "Todas las respuestas anteriores son incorrectos";
 answers[66] = choices[66][0];
 units[66] = "111";
 comments[66] = "Id Pregunta: 6546. NULL";


//  Id pregunta: 6554 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  PKCS#12";
 choices[67]= new Array();
 choices[67][0] = "Especifica un formato portable para almacenar o transportar las claves privadas de un usuario";
 choices[67][1] = "Especifica una API, por la que los dispositivos que contienen informaci&oacute;n criptogr&aacute;fica realizan funciones criptogr&aacute;ficas";
 choices[67][2] = "El formato del sobre digital";
 choices[67][3] = "La especificaci&oacute;n de un interfaz de acceso a dispositivos que almacenan informaci&oacute;n";
 answers[67] = choices[67][0];
 units[67] = "74";
 comments[67] = "Id Pregunta: 6554. NULL";


//  Id pregunta: 6573 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)  De las siguientes afirmaciones, &iquest;cu&aacute;l es la correcta?";
 choices[68]= new Array();
 choices[68][0] = "ARP y RARP son unos protocolos de facto para transmitir datos a trav&eacute;s de Internet";
 choices[68][1] = "ARP traduce la direcci&oacute;n IP a su correspondiente direcci&oacute;n MAC";
 choices[68][2] = "ICMP traduce la direcci&oacute;n MAC a su correspondiente direcci&oacute;n IP";
 choices[68][3] = "Todas las respuestas anteriores son correctas";
 answers[68] = choices[68][1];
 units[68] = "100";
 comments[68] = "Id Pregunta: 6573. NULL";


//  Id pregunta: 6584 AÃ±o de creación de pregunta: 2010-01-01
 questions[69]= "70)  El documento de seguridad";
 choices[69]= new Array();
 choices[69][0] = "debe mantenerse siempre actualizado";
 choices[69][1] = "Es una obligaci&oacute;n de todos los responsables de fichero, y en su caso, para los encargados del tratamiento";
 choices[69][2] = "Debe existir con independencia del nivel de seguridad que sea necesario aplicar";
 choices[69][3] = "Todas las respuestas anteriores son correctas";
 answers[69] = choices[69][3];
 units[69] = "29";
 comments[69] = "Id Pregunta: 6584. NULL";


//  Id pregunta: 6628 AÃ±o de creación de pregunta: 2010-01-01
 questions[70]= "71)  En el modelo CMM de Ingenier&iacute;a de Software, dentro del nivel 'Definido' est&aacute;n las &Aacute;reas Clave:";
 choices[70]= new Array();
 choices[70][0] = "Gesti&oacute;n de Cambios Tecol&oacute;gicos y Gesti&oacute;n de Cambios en los Procesos";
 choices[70][1] = "Aseguramiento de la Calidad y Planificaci&oacute;n del Proyecto";
 choices[70][2] = "Gesti&oacute;n Cuantitativa del Proyecto y Gesti&oacute;n de Calidad del Software";
 choices[70][3] = "Gesti&oacute;n Integrada del Software y Coordinaci&oacute;n Intergrupos";
 answers[70] = choices[70][3];
 units[70] = "87";
 comments[70] = "Id Pregunta: 6628. NULL";


//  Id pregunta: 7320 AÃ±o de creación de pregunta: 2010-01-01
 questions[71]= "72)  Cu&aacute;l de las siguientes afirmaciones sobre Visual Studio .NET no es cierta:";
 choices[71]= new Array();
 choices[71][0] = "Es un IDE (Entorno Integrado de Desarrollo) desarrollado por Microsoft";
 choices[71][1] = "Permite la programaci&oacute;n WYSIWYG (What You See Is What You Get)";
 choices[71][2] = "Los programas desarrollados con Visual Studio .NET &uacute;nicamente pueden usar SQL Server para el almacenamiento de datos";
 choices[71][3] = "Las versiones Express Editions se ofrecen gratuitamente";
 answers[71] = choices[71][2];
 units[71] = "59";
 comments[71] = "Id Pregunta: 7320. NULL";


//  Id pregunta: 8339 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  &iquest;En qu&eacute; se diferencian JRP y JAD?";
 choices[72]= new Array();
 choices[72][0] = "El JRP es una t&eacute;cnica de estimaci&oacute;n y el JAD es una t&eacute;cnica de captura de requisitos.";
 choices[72][1] = "El JRP es un modelo de cido de vida utilizado en el desarrollo de aplicaciones mientras que el JAD es una IDE (Integrated Development Environment) empleada en JAVA.";
 choices[72][2] = "Son distintas herramientas que permiten la gesti&oacute;n de la configuraci&oacute;n del software.";
 choices[72][3] = "Son sesiones de trabajos que permiten identificar los requisitos de un sistema. Se diferencian en los perfiles que act&uacute;an en ellas y en los resultados de &eacute;stas.";
 answers[72] = choices[72][3];
 units[72] = "86";
 comments[72] = "Id Pregunta: 8339. Examen TIC A2 2010";


//  Id pregunta: 8378 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  La longitud de onda alrededor de la cual un medio de transmisi&oacute;n basado en fibra &oacute;ptica se dice que est&aacute; trabajando en 3&ordf; ventana es: ";
 choices[73]= new Array();
 choices[73][0] = "750 nm.";
 choices[73][1] = "820 nm.";
 choices[73][2] = "1310 nm.";
 choices[73][3] = "1550 nm.";
 answers[73] = choices[73][3];
 units[73] = "99";
 comments[73] = "Id Pregunta: 8378. Examen TIC A2 2010";


//  Id pregunta: 8428 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  &iquest;Cu&aacute;l de las siguientes normas del IEEE se utiliza para el control de acceso a red basada en puertos?";
 choices[74]= new Array();
 choices[74][0] = "802.1x";
 choices[74][1] = "802.3.ay";
 choices[74][2] = "802.11";
 choices[74][3] = "802.3.q";
 answers[74] = choices[74][0];
 units[74] = "101";
 comments[74] = "Id Pregunta: 8428. ";


//  Id pregunta: 8477 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  Indique cu&aacute;l de los siguientes es un est&aacute;ndar WiMAX para servicios m&oacute;viles:";
 choices[75]= new Array();
 choices[75][0] = "IEEE 802.16-2004";
 choices[75][1] = "IEEE 802.16d";
 choices[75][2] = "IEEE 802.16e.";
 choices[75][3] = "Wimax no permite acceso a servicios m&oacute;viles.";
 answers[75] = choices[75][2];
 units[75] = "107";
 comments[75] = "Id Pregunta: 8477. Examen TIC A2 2010 interna";


//  Id pregunta: 8484 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  &iquest;Sobre qu&eacute; protocolo se encapsulan los paquetes DHCP?";
 choices[76]= new Array();
 choices[76][0] = "HTTP.";
 choices[76][1] = "UDP.";
 choices[76][2] = "TCP.";
 choices[76][3] = "IP.";
 answers[76] = choices[76][1];
 units[76] = "100";
 comments[76] = "Id Pregunta: 8484. Examen TIC A2 2010 interna";


//  Id pregunta: 8538 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  &iquest;En qu&eacute; banda de frecuencias y hasta qu&eacute; velocidad funciona el est&aacute;ndar 802.11a?";
 choices[77]= new Array();
 choices[77][0] = "2.4 GHz y hasta 11 Mbps";
 choices[77][1] = " 5 GHz y hasta 54Mbps.";
 choices[77][2] = "2.4 GHz y hasta 54 Mbps.";
 choices[77][3] = "5 GHz y hasta 11 Mbps";
 answers[77] = choices[77][1];
 units[77] = "107";
 comments[77] = "Id Pregunta: 8538. Examen TIC A2 2010 interna";


//  Id pregunta: 8592 AÃ±o de creación de pregunta: 2011-01-01
 questions[78]= "79)  En J2EE &iquest;qu&eacute; es un fichero WAR?";
 choices[78]= new Array();
 choices[78][0] = "Contiene los recursos y librer&iacute;as necesarias para compilar un proyecto";
 choices[78][1] = "Contiene la aplicaci&oacute;n web lista para ser desplegada en cualquier contenedor de servlets/jsp.";
 choices[78][2] = "Contiene los m&oacute;dulos EJB de las aplicaciones";
 choices[78][3] = "No existen los ficheros WAR en J2EE";
 answers[78] = choices[78][1];
 units[78] = "116";
 comments[78] = "Id Pregunta: 8592. Examen TIC A2 2010 interna";


//  Id pregunta: 8678 AÃ±o de creación de pregunta: 2011-01-01
 questions[79]= "80)  &iquest;Es posible hacer convivir varios protocolos incompatibles entre s&iacute; sobre una misma red?";
 choices[79]= new Array();
 choices[79][0] = "S&iacute;, utilizando tunneling o encapsulado de protocolos";
 choices[79][1] = "S&iacute;, pero s&oacute;lo si los protocolos pertenecen a la familia OSI";
 choices[79][2] = "S&iacute;, pero s&oacute;lo si los protocolos pertenecen a la familia TCP/IP";
 choices[79][3] = "No";
 answers[79] = choices[79][0];
 units[79] = "102";
 comments[79] = "Id Pregunta: 8678. Examen UPM A2 2011";


//  Id pregunta: 8794 AÃ±o de creación de pregunta: 2011-01-01
 questions[80]= "81)  &iquest;En qu&eacute; est&aacute;ndar se define el lenguaje SGML?";
 choices[80]= new Array();
 choices[80][0] = "ISO 8879";
 choices[80][1] = "RFC 8879";
 choices[80][2] = "IEEE 8879";
 choices[80][3] = "Ninguna de las anteriores";
 answers[80] = choices[80][0];
 units[80] = "69, 114";
 comments[80] = "Id Pregunta: 8794. Examen UPM A2 2011";


//  Id pregunta: 9043 AÃ±o de creación de pregunta: 2011-01-01
 questions[81]= "82)  Cu&aacute;l no es una implementaci&oacute;n de Linux";
 choices[81]= new Array();
 choices[81][0] = "Debian";
 choices[81][1] = "Ubuntu";
 choices[81][2] = "Red Hat";
 choices[81][3] = "Mono";
 answers[81] = choices[81][3];
 units[81] = "53";
 comments[81] = "Id Pregunta: 9043. ";


//  Id pregunta: 9071 AÃ±o de creación de pregunta: 2013-01-01
 questions[82]= "83)  Se&ntilde;ale la afirmaci&oacute;n FALSA:";
 choices[82]= new Array();
 choices[82][0] = "El acr&oacute;nimo XAG se refiere a XML Accesibility Guidelines. ";
 choices[82][1] = "En las normas WCAG 2.0, el nivel se otorga a nivel de procesos y subprocesos. ";
 choices[82][2] = "El W3C publica gram&aacute;ticas HTML que deben satisfacerse para lograr el nivel AA en las normas WCAG 2.0. ";
 choices[82][3] = "WAI-ARIA es un acr&oacute;nimo que significa Web Accesibility Initiative - Accesible Rich Internet Applications. ";
 answers[82] = choices[82][1];
 units[82] = "39";
 comments[82] = "Id Pregunta: 9071. ";


//  Id pregunta: 9121 AÃ±o de creación de pregunta: 2013-01-01
 questions[83]= "84)  &iquest;C&oacute;mo son los nodos de un cluster?";
 choices[83]= new Array();
 choices[83][0] = "Siempre homog&eacute;neos con el mismo sistema operativo.";
 choices[83][1] = "Pueden ser heterogeneos, con distintos sistemas operativos.";
 choices[83][2] = "S&oacute;lo se pueden crear clusters con tecnolog&iacute;a Microsoft.";
 choices[83][3] = "Ninguna respuesta es correcta.";
 answers[83] = choices[83][1];
 units[83] = "45";
 comments[83] = "Id Pregunta: 9121. ";


//  Id pregunta: 9217 AÃ±o de creación de pregunta: 2013-01-01
 questions[84]= "85)  &iquest;Qu&eacute; es iSCSI?";
 choices[84]= new Array();
 choices[84][0] = "Protocolo que permite establecer t&uacute;neles TCP/IP por el que se env&iacute;an tramas FC sin modificar.";
 choices[84][1] = "No transporta las tramas FC entre sedes remotas sino que transporta s&oacute;lo las capas superiores.";
 choices[84][2] = "Utiliza TCP/IP como red de transporte utilizando la misma infraestructura que se utilice para redes de comunicaciones.";
 choices[84][3] = "Ninguna es correcta.";
 answers[84] = choices[84][2];
 units[84] = "48";
 comments[84] = "Id Pregunta: 9217. ";


//  Id pregunta: 9383 AÃ±o de creación de pregunta: 2013-01-01
 questions[85]= "86)  Se&ntilde;ale la respuesta incorrecta en relaci&oacute;n con 4G:";
 choices[85]= new Array();
 choices[85][0] = "Admite la utilizaci&oacute;n de antenas MIMO";
 choices[85][1] = "Para el servicio de voz utiliza el canal VOL, cuyo acceso se negocia previamente a trav&eacute;s del canal VOL-ALLOC";
 choices[85][2] = "Utiliza modulaciones adaptativas para el aprovechamiento &oacute;ptimo del canal.";
 choices[85][3] = "Utiliza multiplexaci&oacute;n estad&iacute;stica en el dominio de la frecuencia.";
 answers[85] = choices[85][1];
 units[85] = "108";
 comments[85] = "Id Pregunta: 9383. NULL";


//  Id pregunta: 9518 AÃ±o de creación de pregunta: 2013-01-01
 questions[86]= "87)  Los EJB de tipo entity pueden ser:";
 choices[86]= new Array();
 choices[86][0] = "De dos tipos: RMP y CMP";
 choices[86][1] = "De dos tipos: BMP y CMP";
 choices[86][2] = "De tres tipos: BMP, CMP y JMP";
 choices[86][3] = "De tres tipos: BMP, CMP y SMP";
 answers[86] = choices[86][1];
 units[86] = "116";
 comments[86] = "Id Pregunta: 9518. NULL";


//  Id pregunta: 9545 AÃ±o de creación de pregunta: 2013-01-01
 questions[87]= "88)  Seg&uacute;n la LSSI, entre los elementos que los prestadores de servicios de la Sociedad de la Informaci&oacute;n est&aacute;n obligados a indicar en su p&aacute;gina web NO se encuentra:";
 choices[87]= new Array();
 choices[87][0] = "El nombre o denominiaci&oacute;n social";
 choices[87][1] = "Un n&uacute;mero de tel&eacute;fono de contacto";
 choices[87][2] = "Los datos de su inscripci&oacute;n en el registro mercantil u otro registro p&uacute;blico";
 choices[87][3] = "Los c&oacute;digos de conducta a los que est&eacute; adheridos.";
 answers[87] = choices[87][1];
 units[87] = "30";
 comments[87] = "Id Pregunta: 9545. Ley 34/2002, art&iacute;culo 10";


//  Id pregunta: 9707 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  Seg&uacute;n la metodolog&iacute;a M&eacute;trica V3 Estudio de Viabilidad del Sistema, indicar en qu&eacute; actividad se realiza la tarea &ldquo;Estudio de la Inversi&oacute;n&rdquo;.";
 choices[88]= new Array();
 choices[88][0] = "Estudio de Alternativas de Soluci&oacute;n.";
 choices[88][1] = "Definici&oacute;n de Requisitos del Sistema.";
 choices[88][2] = "Estudio de la Situaci&oacute;n Actual.";
 choices[88][3] = "Valoraci&oacute;n de las Alternativas.";
 answers[88] = choices[88][3];
 units[88] = "86";
 comments[88] = "Id Pregunta: 9707. Examen TIC-A1 2013";


//  Id pregunta: 9725 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  Indique cu&aacute;l de los siguientes procesos se encuadra dentro del libro del ITIL denominado Service Support.";
 choices[89]= new Array();
 choices[89][0] = "Gesti&oacute;n de Problemas.";
 choices[89][1] = "Gesti&oacute;n de la Capacidad.";
 choices[89][2] = "Gesti&oacute;n de la Disponibilidad.";
 choices[89][3] = "Gesti&oacute;n Financiera.";
 answers[89] = choices[89][0];
 units[89] = "98";
 comments[89] = "Id Pregunta: 9725. Examen TIC-A1 2013";


//  Id pregunta: 9844 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  Indique cu&aacute;l de las siguientes afirmaciones es VERDADERA:";
 choices[90]= new Array();
 choices[90][0] = "En un criptosistema sim&eacute;trico el conocimiento de la clave p&uacute;blica no permite calcular la clave privada";
 choices[90][1] = "En un criptosistema de clave p&uacute;blica el conocimiento de la clave p&uacute;blica permite calcular la clave privada.";
 choices[90][2] = "En un criptosistema de clave privada el conocimiento de la clave p&uacute;blica permite calcular la clave privada.";
 choices[90][3] = "En un criptosistema asim&eacute;trico el conocimiento de la clave p&uacute;blica no permite calcular la clave privada.";
 answers[90] = choices[90][3];
 units[90] = "111";
 comments[90] = "Id Pregunta: 9844. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Extremadura 2014";


//  Id pregunta: 9943 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  El establecimiento obligatorio de un sistema de registro de entrada de soportes que permita conocer, entre otros datos, el tipo de documento, fecha y hora, emisor y la persona autorizada responsables de la recepci&oacute;n, es una medida de seguridad de protecci&oacute;n de datos de car&aacute;cter personal de nivel";
 choices[91]= new Array();
 choices[91][0] = "b&aacute;sico.";
 choices[91][1] = "medio.";
 choices[91][2] = "alto.";
 choices[91][3] = "de auditor&iacute;a.";
 answers[91] = choices[91][1];
 units[91] = "29";
 comments[91] = "Id Pregunta: 9943. TIC A1, Examen 2013";


//  Id pregunta: 10012 AÃ±o de creación de pregunta: 2014-01-01
 questions[92]= "93)  En un entorno de base de datos relacional, si se puede afirmar que los valores de una clave ajena coinciden con los valores de la clave primaria a la que hace referencia o son nulos  entonces se est&aacute; cumpliendo:";
 choices[92]= new Array();
 choices[92][0] = "Regla de los nulos.";
 choices[92][1] = "Regla de integridad de la entidad.";
 choices[92][2] = "Regla de la integridad referencial.";
 choices[92][3] = "Regla de los valores ajenos.";
 answers[92] = choices[92][2];
 units[92] = "58";
 comments[92] = "Id Pregunta: 10012. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10031 AÃ±o de creación de pregunta: 2014-01-01
 questions[93]= "94)  Indicar cu&aacute;l de las siguientes direcciones IP puede ser asignada a un host en la siguiente subred 135.26.41.80/28";
 choices[93]= new Array();
 choices[93][0] = "135.26.41.94";
 choices[93][1] = "135.26.41.95";
 choices[93][2] = "135.26.41.96 ";
 choices[93][3] = "135.26.41.97";
 answers[93] = choices[93][0];
 units[93] = "100";
 comments[93] = "Id Pregunta: 10031. TIC A2, promoci&oacute;n interna, examen 2013";


//  Id pregunta: 11113 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Indique qu&eacute; tipos de entidades pueden conectarse a la Red Sara:";
 choices[94]= new Array();
 choices[94][0] = "Organismo p&uacute;blicos";
 choices[94][1] = "Ministerios";
 choices[94][2] = "Comunidades Aut&oacute;nomas";
 choices[94][3] = "Todas las anteriores";
 answers[94] = choices[94][3];
 units[94] = "30";
 comments[94] = "Id Pregunta: 11113. ";


//  Id pregunta: 11210 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Cu&aacute;l de los siguientes planes se refiere al objetivo de Econom&iacute;a Digital e Internacionalizaci&oacute;n de la Agenda Digital Espa&ntilde;ola?";
 choices[95]= new Array();
 choices[95][0] = "Plan TIC en PYMEs y Comercio Electr&oacute;nico";
 choices[95][1] = "Plan de Impulso de Econom&iacute;a Digital y Contenidos Digitales";
 choices[95][2] = "Plan de Internacionalizaci&oacute;n de Empresas Tecnol&oacute;gicas";
 choices[95][3] = "Todos los anteriores";
 answers[95] = choices[95][3];
 units[95] = "30";
 comments[95] = "Id Pregunta: 11210. ";


//  Id pregunta: 11374 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Seg&uacute;n ITIL v3, &iquest;cu&aacute;les de los siguientes conceptos son caracter&iacute;sticas de todo proceso?: 1. Es medible; 2. Entrega un resultado especifico; 3. Entrega sus resultados principales a un cliente o a otros interesados";
 choices[96]= new Array();
 choices[96][0] = "Solo 1 y 3";
 choices[96][1] = "Solo 1 y 2";
 choices[96][2] = "Solo 2 y 3";
 choices[96][3] = "Todos los anteriores";
 answers[96] = choices[96][3];
 units[96] = "98";
 comments[96] = "Id Pregunta: 11374. ";


//  Id pregunta: 11478 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Cu&aacute;l no es una facultad del Gobierno en la administraci&oacute;n del espectro seg&uacute;n la Ley 9/2014?";
 choices[97]= new Array();
 choices[97][0] = "Elaborar los planes de utilizaci&oacute;n del espectro.";
 choices[97][1] = "Gestionar las tasas asociadas a los t&iacute;tulos habilitantes de derechos de uso.";
 choices[97][2] = "Fijar condiciones proporcionadas sobre los t&iacute;tulos habilitantes.";
 choices[97][3] = "Velar por uso adecuado del espectro mediante uso de equipos y aparatos.";
 answers[97] = choices[97][1];
 units[97] = "110";
 comments[97] = "Id Pregunta: 11478. ";


//  Id pregunta: 11535 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  La licencia de la GNU utilizada espec&iacute;ficamente para la documentaci&oacute;n t&eacute;cnica del software es:";
 choices[98]= new Array();
 choices[98][0] = "GFDL";
 choices[98][1] = "GPL";
 choices[98][2] = "Affero GPL";
 choices[98][3] = "EUPL";
 answers[98] = choices[98][0];
 units[98] = "62";
 comments[98] = "Id Pregunta: 11535. NULL";


//  Id pregunta: 11777 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Es siempre necesario acudir a una nueva licitaci&oacute;n para adjudicar los contratos basados en un acuerdo marco?";
 choices[99]= new Array();
 choices[99][0] = "No, solo cuando no todos los t&eacute;rminos del acuerdo est&aacute;n definidos&nbsp;";
 choices[99][1] = "S&iacute;, siempre se debe acudir a una nueva licitaci&oacute;n";
 choices[99][2] = "La ley proh&iacute;be expresamente acudir a una nueva licitaci&oacute;n";
 choices[99][3] = "Depende de lo que establezca el pliego del acuerdo marco";
 answers[99] = choices[99][0];
 units[99] = "41";
 comments[99] = "Id Pregunta: 11777. ";


