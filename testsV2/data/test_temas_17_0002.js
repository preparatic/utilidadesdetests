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

//  Id pregunta: 32 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de las siguientes frases identificar&iacute;a a un buen directivo?:";
 choices[0]= new Array();
 choices[0][0] = "Es capaz de controlarlo todo de tal forma que la organizaci&oacute;n no puede pasar ni un d&iacute;a sin &eacute;l";
 choices[0][1] = "No intenta controlarlo todo, e intenta ser uno m&aacute;s en la cadena, la organizaci&oacute;n podr&iacute;a funcionar sin &eacute;l si se ausentara";
 choices[0][2] = "Divide su tiempo entre la operativa diaria y los proyectos de innovaci&oacute;n. Delega gran parte de los trabajos rutinarios, los que son m&aacute;s aburridos y tediosos para no desperdiciar su iniciativa";
 choices[0][3] = "Ha organizado su trabajo de tal forma que puede atender otros temas que no son la operativa diaria. La organizaci&oacute;n podr&iacute;a funcionar un tiempo sin &eacute;l, pero necesita de su capacidad de innovaci&oacute;n";
 answers[0] = choices[0][3];
 units[0] = "25";
 comments[0] = "Id Pregunta: 32. ";


//  Id pregunta: 80 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Qu&eacute; se considera m&aacute;s id&oacute;neo para un directivo?:";
 choices[1]= new Array();
 choices[1][0] = "Cuando se trate de un tema complejo, confiar en los expertos y decidir de acuerdo con sus informes";
 choices[1][1] = "Dedicar tiempos tasados a cada uno de los temas";
 choices[1][2] = "Tomar las decisiones lo m&aacute;s r&aacute;pidamente posible";
 choices[1][3] = "Conseguir que sus colaboradores le aprecien";
 answers[1] = choices[1][1];
 units[1] = "25";
 comments[1] = "Id Pregunta: 80. ";


//  Id pregunta: 85 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;Qu&eacute; significa la ley de Pareto del 80 / 20?:";
 choices[2]= new Array();
 choices[2][0] = "Con el 20 % del esfuerzo se resuelven el 80 % de los problemas";
 choices[2][1] = "El 80 % de los problemas son originados por el 20 % de la plantilla";
 choices[2][2] = "Con el 80 % del esfuerzo se resuelve el 20 % de los problemas, los m&aacute;s graves";
 choices[2][3] = "El 20 % de los problemas se resuelven autom&aacute;ticamente resolviendo primero el 80 % de ellos";
 answers[2] = choices[2][0];
 units[2] = "25";
 comments[2] = "Id Pregunta: 85. ";


//  Id pregunta: 88 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;Qui&eacute;n dijo que uno de los elementos necesarios en una organizaci&oacute;n es la existencia de un fin com&uacute;n?:";
 choices[3]= new Array();
 choices[3][0] = "Richard Nolan";
 choices[3][1] = "Stephen P. Robbins";
 choices[3][2] = "Andrea Zerilli";
 choices[3][3] = "James C. Emery";
 answers[3] = choices[3][2];
 units[3] = "22";
 comments[3] = "Id Pregunta: 88. NULL";


//  Id pregunta: 106 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  Con el 20% del esfuerzo se resuelven el 80% de los problemas de una organizaci&oacute;n, y con el restante 80% del esfuerzo se resuelven el restante 20 % de los problemas  seg&uacute;n la:";
 choices[4]= new Array();
 choices[4][0] = "Ley de Parkinson";
 choices[4][1] = "Ley de Fink";
 choices[4][2] = "Ley de Murphy";
 choices[4][3] = "Ley de Pareto";
 answers[4] = choices[4][3];
 units[4] = "25";
 comments[4] = "Id Pregunta: 106. ";


//  Id pregunta: 116 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  De las siguientes estructuras organizativas de un departamento de sistemas de informaci&oacute;n se&ntilde;ale la que considere m&aacute;s correcta:";
 choices[5]= new Array();
 choices[5][0] = "Establecer una estructura funcional en el departamento de sistemas y una sectorial en el de desarrollo";
 choices[5][1] = "Establecer una estructura sectorial en sistemas y una matricial en desarrollo";
 choices[5][2] = "Establecer una estructura matricial en sistemas y una matricial en desarrollo";
 choices[5][3] = "Establecer una estructura matricial en sistemas y una por proyectos en desarrollo";
 answers[5] = choices[5][0];
 units[5] = "22";
 comments[5] = "Id Pregunta: 116. ";


//  Id pregunta: 148 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  El m&eacute;todo Delphi para la toma de decisiones es un procedimiento basado en:";
 choices[6]= new Array();
 choices[6][0] = "Series hist&oacute;ricas conocidas que permiten predecir el comportamiento futuro";
 choices[6][1] = "C&aacute;lculo de probabilidades de ocurrencia de cada suceso sobre el que se quiere tomar la decisi&oacute;n";
 choices[6][2] = "Consultar la opini&oacute;n de expertos";
 choices[6][3] = "S&oacute;lo se aplica para la realizaci&oacute;n de proyectos y permite identificar las actividades que forman el camino cr&iacute;tico";
 answers[6] = choices[6][2];
 units[6] = "23";
 comments[6] = "Id Pregunta: 148. NULL";


//  Id pregunta: 152 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  El modelo modificado en 6 etapas de Nolan:";
 choices[7]= new Array();
 choices[7][0] = "Iniciaci&oacute;n, expansi&oacute;n, control, integraci&oacute;n, administraci&oacute;n de datos y madurez";
 choices[7][1] = "Iniciaci&oacute;n, contagio, control, integraci&oacute;n, almacenamiento de datos y madurez";
 choices[7][2] = "Iniciaci&oacute;n, contagio, control, integraci&oacute;n, administraci&oacute;n de datos y madurez";
 choices[7][3] = "Iniciaci&oacute;n, expansi&oacute;n, control, integraci&oacute;n, almacenamiento de datos y madurez";
 answers[7] = choices[7][2];
 units[7] = "22";
 comments[7] = "Id Pregunta: 152. Nolan";


//  Id pregunta: 155 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  El objetivo fundamental de un sistema de informaci&oacute;n para la alta direcci&oacute;n de una organizaci&oacute;n debe ser:";
 choices[8]= new Array();
 choices[8][0] = "Conseguir que los directivos de la misma logren acceder a toda la informaci&oacute;n contenida en las bases de datos de la organizaci&oacute;n";
 choices[8][1] = "Poner a disposici&oacute;n de los directivos herramientas de investigaci&oacute;n operativa que permitan simular problemas relacionados con el sector a que pertenezca la empresa a partir de datos obtenidos de otras empresas";
 choices[8][2] = "Lograr un subproducto del sistema de informaci&oacute;n corporativo e integrado con &eacute;ste, susceptible de ser tratado con herramientas de simulaci&oacute;n";
 choices[8][3] = "Elaborar los procesos batch necesarios que cubran el nivel de informaci&oacute;n desagregada fijado por la direcci&oacute;n";
 answers[8] = choices[8][2];
 units[8] = "21";
 comments[8] = "Id Pregunta: 155. ";


//  Id pregunta: 192 AÃ±o de creación de pregunta: 2004-01-01
 questions[9]= "10)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas no se corresponde con una soluci&oacute;n ERP (Enterprise Resource Planning)?";
 choices[9]= new Array();
 choices[9][0] = "Alto grado de modularidad";
 choices[9][1] = "Homogeneizaci&oacute;n de Procesos Corporativos";
 choices[9][2] = "Facilidad de implementaci&oacute;n en corto plazo";
 choices[9][3] = "Integraci&oacute;n total de &aacute;reas organizativas";
 answers[9] = choices[9][2];
 units[9] = "21";
 comments[9] = "Id Pregunta: 192. Examen TIC MAP B 2004";


//  Id pregunta: 193 AÃ±o de creación de pregunta: 2004-01-01
 questions[10]= "11)  &iquest;Cu&aacute;l de las siguientes tareas no es posible realizar utilizando las herramientas PERT o CPM?";
 choices[10]= new Array();
 choices[10][0] = "Establecer las dimensiones de tiempo m&aacute;s probables para las tareas individuales aplicando modelos estad&iacute;sticos.";
 choices[10][1] = "Determinar el camino cr&iacute;tico, la cadena de tareas que determina la duraci&oacute;n del proyecto.";
 choices[10][2] = "Dimensionar las necesidades de personal en cada fase del proyecto.";
 choices[10][3] = "Calcular las limitaciones de tiempo que definen una ventana de tiempo de una tarea determinada (y las holguras).";
 answers[10] = choices[10][2];
 units[10] = "27";
 comments[10] = "Id Pregunta: 193. Examen TIC MAP B 2004";


//  Id pregunta: 194 AÃ±o de creación de pregunta: 2004-01-01
 questions[11]= "12)  El An&aacute;lisis Coste-Beneficio es una t&eacute;cnica empleada en el estudio de viabilidad de un nuevo sistema de informaci&oacute;n. &iquest;Cu&aacute;l de las siguientes no es una utilidad del An&aacute;lisis Coste-Beneficio?";
 choices[11]= new Array();
 choices[11][0] = "Valorar la necesidad y oportunidad de acometer la realizaci&oacute;n del proyecto.";
 choices[11][1] = "Calcular el punto de amortizaci&oacute;n del proyecto.";
 choices[11][2] = "Seleccionar la alternativa m&aacute;s beneficiosa.";
 choices[11][3] = "Estimar adecuadamente los recursos econ&oacute;micos necesarios.";
 answers[11] = choices[11][1];
 units[11] = "27";
 comments[11] = "Id Pregunta: 194. Examen TIC MAP B 2004";


//  Id pregunta: 206 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  En el modelo de Donovan las organizaciones se clasifican en:";
 choices[12]= new Array();
 choices[12][0] = "Dinosaurio, gran hermano, mano vigilante, network, cluster";
 choices[12][1] = "Dinosaurio, gran hermano, perro vigilante, network, cluster";
 choices[12][2] = "Dinosaurio, gran hermano, mano amiga, perro vigilante, network";
 choices[12][3] = "Dinosaurio, gran hermano, mano amiga, perro vigilante, cluster";
 answers[12] = choices[12][2];
 units[12] = "22";
 comments[12] = "Id Pregunta: 206. donovan - nolan";


//  Id pregunta: 207 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  En esencia, la partici&oacute;n descompone un problema en sus partes constituyentes:";
 choices[13]= new Array();
 choices[13][0] = "Incrementando los detalles, movi&eacute;ndonos verticalmente en la jerarqu&iacute;a";
 choices[13][1] = "Descomponiendo funcionalmente el problema, movi&eacute;ndonos horizontalmente en la jerarqu&iacute;a";
 choices[13][2] = "Las dos primeras respuestas son ciertas";
 choices[13][3] = "Las dos primeras respuestas son falsas";
 answers[13] = choices[13][2];
 units[13] = "28";
 comments[13] = "Id Pregunta: 207. ";


//  Id pregunta: 213 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  En la estructura de un sistema de informaci&oacute;n:";
 choices[14]= new Array();
 choices[14][0] = "En la dimensi&oacute;n vertical las funciones se subdividen en aplicaciones o procedimientos";
 choices[14][1] = "En la dimensi&oacute;n horizontal las funciones se subdividen en aplicaciones o procedimientos";
 choices[14][2] = "La dimensi&oacute;n vertical se subdivide en los niveles operacional, t&aacute;ctico y estrat&eacute;gico";
 choices[14][3] = "Las respuestas &lsquo;b&rsquo; y &lsquo;c&rsquo; son correctas";
 answers[14] = choices[14][3];
 units[14] = "21";
 comments[14] = "Id Pregunta: 213. ";


//  Id pregunta: 215 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  En la funci&oacute;n de almacenamiento de datos de un sistema de informaci&oacute;n no es necesario tener en cuenta:";
 choices[15]= new Array();
 choices[15][0] = "El papel de la base de datos";
 choices[15][1] = "La organizaci&oacute;n de la base de datos";
 choices[15][2] = "Almacenamiento en l&iacute;nea versus fuera de l&iacute;nea";
 choices[15][3] = "Enfoque integrado, capturando s&oacute;lo una vez un elemento dado de datos";
 answers[15] = choices[15][3];
 units[15] = "21";
 comments[15] = "Id Pregunta: 215. ";


//  Id pregunta: 216 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  En la funci&oacute;n de entrada de datos de un sistema de informaci&oacute;n no es necesario tener en cuenta:";
 choices[16]= new Array();
 choices[16][0] = "La interactividad con el operador";
 choices[16][1] = "La organizaci&oacute;n de la base de datos";
 choices[16][2] = "Control de errores";
 choices[16][3] = "Enfoque integrado";
 answers[16] = choices[16][1];
 units[16] = "21";
 comments[16] = "Id Pregunta: 216. ";


//  Id pregunta: 220 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  En la planificaci&oacute;n de proyectos:";
 choices[17]= new Array();
 choices[17][0] = "Los diagramas de red (entre ellos PERT, ADM &ndash;actividad flecha-, y PDM &ndash;actividad nodo-)  presentan dependencias pero no informaci&oacute;n temporal.";
 choices[17][1] = "Los diagramas de red (entre ellos PERT, ADM &ndash;actividad flecha-, y PDM &ndash;actividad nodo-)  presentan dependencias e informaci&oacute;n temporal.";
 choices[17][2] = "Los gr&aacute;ficos de barras o de Gantt representan las dependencias entre tareas.";
 choices[17][3] = "El camino cr&iacute;tico en un proyecto ha de ser necesariamente &uacute;nico.";
 answers[17] = choices[17][0];
 units[17] = "27";
 comments[17] = "Id Pregunta: 220. La informaci&oacute;n temporal puede aparecer pero no siempre aparece";


//  Id pregunta: 223 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  En la planificaci&oacute;n f&iacute;sica de un centro de proceso de datos es esencial tener en cuenta el aspecto siguiente:";
 choices[18]= new Array();
 choices[18][0] = "Debe asegurarse el suministro de energ&iacute;a el&eacute;ctrica haciendo un contrato con m&aacute;s de un suministrador o instalando generadores";
 choices[18][1] = "Debe estar situado junto a una v&iacute;a r&aacute;pida de comunicaci&oacute;n";
 choices[18][2] = "El edificio no debe tener m&aacute;s de cuatro plantas";
 choices[18][3] = "En la azotea deben instalarse paneles solares";
 answers[18] = choices[18][0];
 units[18] = "26";
 comments[18] = "Id Pregunta: 223. ";


//  Id pregunta: 228 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  En las estrategias de negociaci&oacute;n:";
 choices[19]= new Array();
 choices[19][0] = "La estrategia de ganar-ganar es la que por lo general deja m&aacute;s satisfechos a las 2 partes";
 choices[19][1] = "La estrategia de perder-perder suele llevar a un equilibrio inestable que provoca que tarde o temprano tenga que volverse a retomar la negociaci&oacute;n";
 choices[19][2] = "Las 2 respuestas anteriores son correctas";
 choices[19][3] = "Ninguna de las respuestas anteriores son correctas";
 answers[19] = choices[19][2];
 units[19] = "28";
 comments[19] = "Id Pregunta: 228. negociaci&oacute;n";


//  Id pregunta: 242 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  En un sistema de informaci&oacute;n:";
 choices[20]= new Array();
 choices[20][0] = "En el nivel t&aacute;ctico se implementan las decisiones mediante un procedimiento automatizado";
 choices[20][1] = "En el nivel operacional se realiza el grueso del tratamiento de los datos";
 choices[20][2] = "En el nivel estrat&eacute;gico las decisiones dependen de fuentes de informaci&oacute;n externa";
 choices[20][3] = "Todas las anteriores son correctas";
 answers[20] = choices[20][3];
 units[20] = "21";
 comments[20] = "Id Pregunta: 242. ";


//  Id pregunta: 247 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  En una organizaci&oacute;n de tipo gran hermano:";
 choices[21]= new Array();
 choices[21][0] = "El HW est&aacute; distribuido, y no se descentraliza la capacidad de realizar SW ni las decisiones";
 choices[21][1] = "El HW est&aacute; distribuido y el desarrollo tambi&eacute;n, pero no las decisiones";
 choices[21][2] = "El HW no est&aacute; distribuido y se descentraliza la capacidad de realizar SW y las decisiones";
 choices[21][3] = "El HW, el desarrollo y las decisiones se descentralizan";
 answers[21] = choices[21][0];
 units[21] = "22";
 comments[21] = "Id Pregunta: 247. ";


//  Id pregunta: 248 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  En una organizaci&oacute;n de tipo perro vigilante:";
 choices[22]= new Array();
 choices[22][0] = "El HW est&aacute; distribuido, y no se descentraliza la capacidad de realizar SW ni las decisiones";
 choices[22][1] = "El HW est&aacute; distribuido y el desarrollo tambi&eacute;n, pero no las decisiones";
 choices[22][2] = "El HW no est&aacute; distribuido y se descentraliza la capacidad de realizar SW y las decisiones";
 choices[22][3] = "El HW, el desarrollo y las decisiones se descentralizan";
 answers[22] = choices[22][1];
 units[22] = "22";
 comments[22] = "Id Pregunta: 248. ";


//  Id pregunta: 249 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Entendemos por sistema de informaci&oacute;n:";
 choices[23]= new Array();
 choices[23][0] = "Conjunto de procedimientos autom&aacute;ticos y de funciones dirigidas a la recogida, elaboraci&oacute;n, evaluaci&oacute;n, almacenamiento, recuperaci&oacute;n, condensaci&oacute;n y distribuci&oacute;n de informaciones dentro de una organizaci&oacute;n";
 choices[23][1] = "Conjunto de procedimientos manuales y de funciones dirigidas a la recogida, elaboraci&oacute;n, evaluaci&oacute;n, almacenamiento, recuperaci&oacute;n, condensaci&oacute;n y distribuci&oacute;n de informaciones dentro de una organizaci&oacute;n";
 choices[23][2] = "Conjunto de procedimientos, manuales y autom&aacute;ticos, y de funciones dirigidas a la recogida, elaboraci&oacute;n, almacenamiento, recuperaci&oacute;n, condensaci&oacute;n, distribuci&oacute;n y evaluaci&oacute;n de informaciones dentro de una organizaci&oacute;n";
 choices[23][3] = "Conjunto de procedimientos, manuales y autom&aacute;ticos, y de funciones dirigidas a la recogida, elaboraci&oacute;n, evaluaci&oacute;n, almacenamiento, recuperaci&oacute;n, condensaci&oacute;n y distribuci&oacute;n de informaciones dentro de una organizaci&oacute;n";
 answers[23] = choices[23][3];
 units[23] = "21";
 comments[23] = "Id Pregunta: 249. ";


//  Id pregunta: 264 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Indicar cual de las siguientes no es una funci&oacute;n b&aacute;sica del tratamiento de la informaci&oacute;n:";
 choices[24]= new Array();
 choices[24][0] = "Entrada de datos";
 choices[24][1] = "Almacenamiento de datos";
 choices[24][2] = "Copias de seguridad de datos";
 choices[24][3] = "C&aacute;lculos y transformaciones de datos";
 answers[24] = choices[24][2];
 units[24] = "21";
 comments[24] = "Id Pregunta: 264. ";


//  Id pregunta: 265 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Indicar cual de los siguientes instrumentos de informaci&oacute;n es un sistema de ayuda orientado a modelos:";
 choices[25]= new Array();
 choices[25][0] = "Informes de excepci&oacute;n";
 choices[25][1] = "Informes resumen";
 choices[25][2] = "Procesos prueba-error";
 choices[25][3] = "Consultas ad-hoc";
 answers[25] = choices[25][2];
 units[25] = "21";
 comments[25] = "Id Pregunta: 265. ";


//  Id pregunta: 269 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  Indicar la afirmaci&oacute;n que no corresponde entre los objetivos fundamentales de un DSS orientado a datos:";
 choices[26]= new Array();
 choices[26][0] = "Presentar al usuario una informaci&oacute;n seleccionada para la toma de decisiones";
 choices[26][1] = "Confrontar m&uacute;ltiples criterios de decisi&oacute;n y buscar un modelo en el sistema para predecir las consecuencias de una acci&oacute;n propuesta";
 choices[26][2] = "Facilitar el conocimiento estructural del problema que permite el posterior desarrollo de un modelo formal de decisi&oacute;n";
 choices[26][3] = "Proporcionar un medio f&aacute;cil al usuario para jugar con los datos";
 answers[26] = choices[26][1];
 units[26] = "21";
 comments[26] = "Id Pregunta: 269. ";


//  Id pregunta: 270 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  Indicar la respuesta verdadera respecto al concepto de un sistema de informaci&oacute;n:";
 choices[27]= new Array();
 choices[27][0] = "Es el conjunto de procedimientos, manuales y automatizados dirigidos a la recogida, elaboraci&oacute;n, evaluaci&oacute;n, almacenamiento, recuperaci&oacute;n y distribuci&oacute;n de informaciones dentro de una organizaci&oacute;n";
 choices[27][1] = "Es el conjunto de procedimientos, manuales y automatizados dirigidos a la recogida, elaboraci&oacute;n, almacenamiento, recuperaci&oacute;n, condensaci&oacute;n y distribuci&oacute;n de informaciones dentro de una organizaci&oacute;n";
 choices[27][2] = "Es el conjunto de procedimientos, manuales y automatizados y de funciones dirigidas a la recogida, elaboraci&oacute;n, almacenamiento, recuperaci&oacute;n  y distribuci&oacute;n de informaciones dentro de una organizaci&oacute;n";
 choices[27][3] = "Es el conjunto de procedimientos, manuales y automatizados y de funciones dirigidas a la recogida, elaboraci&oacute;n, evaluaci&oacute;n, almacenamiento, recuperaci&oacute;n, condensaci&oacute;n y distribuci&oacute;n de informaciones dentro de una organizaci&oacute;n";
 answers[27] = choices[27][3];
 units[27] = "21";
 comments[27] = "Id Pregunta: 270. ";


//  Id pregunta: 271 AÃ±o de creación de pregunta: 2002-01-01
 questions[28]= "29)  Indicar la verdadera respecto a la estructura de un sistema de informaci&oacute;n:";
 choices[28]= new Array();
 choices[28][0] = "En la estructura horizontal, y dentro de cada nivel, las funciones de un sistema de informaci&oacute;n se subdividen en aplicaciones o  procedimientos";
 choices[28][1] = "En la estructura horizontal, y dentro de cada nivel, las funciones de un sistema de informaci&oacute;n se subdividen en aplicaciones y procedimientos";
 choices[28][2] = "En la estructura vertical, y dentro de cada nivel, las funciones de un sistema de informaci&oacute;n se subdividen en aplicaciones o procedimientos";
 choices[28][3] = "En la estructura vertical, y dentro de cada nivel, las funciones de un sistema de informaci&oacute;n se subdividen en aplicaciones y procedimientos";
 answers[28] = choices[28][0];
 units[28] = "21";
 comments[28] = "Id Pregunta: 271. ";


//  Id pregunta: 274 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  Indique cu&aacute;l de las siguientes alternativas se refiere a una de las consecuencias organizativas de la transformaci&oacute;n de una organizaci&oacute;n tradicional en una organizaci&oacute;n basada en la informaci&oacute;n:";
 choices[29]= new Array();
 choices[29][0] = "Esa transformaci&oacute;n no tiene consecuencias organizativas";
 choices[29][1] = "El empleo de nuevas tecnolog&iacute;as";
 choices[29][2] = "El aumento del n&uacute;mero de gestores";
 choices[29][3] = "La reducci&oacute;n del n&uacute;mero de niveles jer&aacute;rquicos";
 answers[29] = choices[29][3];
 units[29] = "22";
 comments[29] = "Id Pregunta: 274. ";


//  Id pregunta: 293 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  La definici&oacute;n de organizaci&oacute;n como &quot;combinaci&oacute;n de medios humanos y materiales disponibles para la consecuci&oacute;n de un fin seg&uacute;n un esquema preciso de dependencias e interrelaciones&quot; es debida a: ";
 choices[30]= new Array();
 choices[30][0] = "Andrea Zerilli";
 choices[30][1] = "Stephen Robbins";
 choices[30][2] = "James Emery";
 choices[30][3] = "Robert Gibson";
 answers[30] = choices[30][0];
 units[30] = "22";
 comments[30] = "Id Pregunta: 293. ";


//  Id pregunta: 300 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  La duraci&oacute;n total de un proyecto es:";
 choices[31]= new Array();
 choices[31][0] = "La del camino cr&iacute;tico del gr&aacute;fico de PERT.";
 choices[31][1] = "La del camino del gr&aacute;fico de PERT que m&aacute;s tareas realiza.";
 choices[31][2] = "La suma de la duraci&oacute;n de todas las tareas de un proyecto, como se refleja en el gr&aacute;fico de PERT.";
 choices[31][3] = "La de la tarea cr&iacute;tica, como se refleja en el gr&aacute;fico de PERT.";
 answers[31] = choices[31][0];
 units[31] = "27";
 comments[31] = "Id Pregunta: 300. ";


//  Id pregunta: 304 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  La estructura organizacional  proyecto-funcional de un &aacute;rea de desarrollo:";
 choices[32]= new Array();
 choices[32][0] = "Se caracteriza por un mejor aprovechamiento de los recursos humanos, al no estar adjudicados a un &uacute;nico proyecto";
 choices[32][1] = "Se caracteriza por que no es necesaria una coordinaci&oacute;n excesiva a alto nivel ya que cada departamento es independiente";
 choices[32][2] = "Es equivalente a una organizaci&oacute;n matricial";
 choices[32][3] = "Ninguna de las respuestas anteriores es correcta";
 answers[32] = choices[32][2];
 units[32] = "26";
 comments[32] = "Id Pregunta: 304. estructura organizacional";


//  Id pregunta: 313 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  La Ley de Pareto:";
 choices[33]= new Array();
 choices[33][0] = "Se conoce como &lsquo;ley del 90/10&rsquo;";
 choices[33][1] = "Se conoce como &lsquo;ley del 80/20&rsquo;";
 choices[33][2] = "Dice que con el 90% de esfuerzo se resuelven el 10% de los problemas";
 choices[33][3] = "Las respuestas &lsquo;a&rsquo; y &lsquo;c&rsquo; correctas";
 answers[33] = choices[33][1];
 units[33] = "25";
 comments[33] = "Id Pregunta: 313. ";


//  Id pregunta: 324 AÃ±o de creación de pregunta: 2002-01-01
 questions[34]= "35)  La organizaci&oacute;n t&iacute;pica de un entorno de producci&oacute;n es la:";
 choices[34]= new Array();
 choices[34][0] = "Organizaci&oacute;n proyecto-funcional";
 choices[34][1] = "Organizaci&oacute;n funcional";
 choices[34][2] = "Organizaci&oacute;n proyecto-staff";
 choices[34][3] = "Organizaci&oacute;n por aplicaciones";
 answers[34] = choices[34][1];
 units[34] = "26";
 comments[34] = "Id Pregunta: 324. organizaci&oacute;n estructural";


//  Id pregunta: 339 AÃ±o de creación de pregunta: 2002-01-01
 questions[35]= "36)  La red de comunicaci&oacute;n en cadena de una organizaci&oacute;n es:";
 choices[35]= new Array();
 choices[35][0] = "Comunicaci&oacute;n ascendente donde dos subordinados reportan a su jefe sobre un asunto";
 choices[35][1] = "Esquema descendente en jerarqu&iacute;a absoluta";
 choices[35][2] = "Cada sujeto se comunica con todos los restantes";
 choices[35][3] = "Se establece con dos interlocutores en cada caso, interactuando con los m&aacute;s cercanos a uno";
 answers[35] = choices[35][1];
 units[35] = "23";
 comments[35] = "Id Pregunta: 339. ";


//  Id pregunta: 354 AÃ±o de creación de pregunta: 2002-01-01
 questions[36]= "37)  Las actuales teor&iacute;as del conflicto en las organizaciones parten de:";
 choices[36]= new Array();
 choices[36][0] = "Peter Drucker";
 choices[36][1] = "Mary Parker Follet";
 choices[36][2] = "John Simpson";
 choices[36][3] = "Adam Smith";
 answers[36] = choices[36][1];
 units[36] = "22";
 comments[36] = "Id Pregunta: 354. ";


//  Id pregunta: 356 AÃ±o de creación de pregunta: 2002-01-01
 questions[37]= "38)  Las cuatro etapas del modelo inicial de Nolan son:";
 choices[37]= new Array();
 choices[37][0] = "Iniciaci&oacute;n, contagio, control y madurez";
 choices[37][1] = "Iniciaci&oacute;n, expansi&oacute;n, control y madurez";
 choices[37][2] = "Iniciaci&oacute;n, contagio, formalizaci&oacute;n y madurez";
 choices[37][3] = "Iniciaci&oacute;n, expansi&oacute;n, formalizaci&oacute;n y madurez";
 answers[37] = choices[37][3];
 units[37] = "22";
 comments[37] = "Id Pregunta: 356. nolan";


//  Id pregunta: 386 AÃ±o de creación de pregunta: 2002-01-01
 questions[38]= "39)  No es caracter&iacute;stico de un cambio organizativo a un esquema basado en la informaci&oacute;n:";
 choices[38]= new Array();
 choices[38][0] = "Que se emplee siempre las &uacute;ltimas tecnolog&iacute;as de la informaci&oacute;n";
 choices[38][1] = "Un cambio radical en la forma que las cosas son hechas";
 choices[38][2] = "La implementaci&oacute;n de cambios de la estructura de organizaci&oacute;n";
 choices[38][3] = "Nuevos problemas de direcci&oacute;n";
 answers[38] = choices[38][0];
 units[38] = "22";
 comments[38] = "Id Pregunta: 386. ";


//  Id pregunta: 448 AÃ±o de creación de pregunta: 2002-01-01
 questions[39]= "40)  Se&ntilde;alar la afirmaci&oacute;n incorrecta respecto al control de proyectos:";
 choices[39]= new Array();
 choices[39][0] = "El diagrama de PERT permite evaluar el retraso de un proyecto";
 choices[39][1] = "Un retraso en la fecha de finalizaci&oacute;n de una etapa provoca un retraso de la fecha final del proyecto";
 choices[39][2] = "La fecha de finalizaci&oacute;n del proyecto se ve afectada por las fechas de finalizaci&oacute;n de las etapas que constituyen el camino cr&iacute;tico";
 choices[39][3] = "La duraci&oacute;n total del proyecto viene determinada por el camino cr&iacute;tico";
 answers[39] = choices[39][1];
 units[39] = "28";
 comments[39] = "Id Pregunta: 448. ";


//  Id pregunta: 457 AÃ±o de creación de pregunta: 2002-01-01
 questions[40]= "41)  Si el camino cr&iacute;tico de un proyecto est&aacute; formado por las tareas A(3,12,21) y B( 6,15,30), la desviaci&oacute;n critica del proyecto ser&aacute;:";
 choices[40]= new Array();
 choices[40][0] = "9";
 choices[40][1] = "5";
 choices[40][2] = "7";
 choices[40][3] = "4";
 answers[40] = choices[40][1];
 units[40] = "28";
 comments[40] = "Id Pregunta: 457. ";


//  Id pregunta: 476 AÃ±o de creación de pregunta: 2002-01-01
 questions[41]= "42)  Utilizando el m&eacute;todo PERT y suponiendo un proyecto con una actividad con una duraci&oacute;n estimada optimista de 8 d&iacute;as, pesimista de 16 d&iacute;as y m&aacute;s probable de 9 d&iacute;as, &iquest;cu&aacute;l es el tiempo PERT o duraci&oacute;n esperada de dicha actividad?:";
 choices[41]= new Array();
 choices[41][0] = "12";
 choices[41][1] = "11";
 choices[41][2] = "10";
 choices[41][3] = "9";
 answers[41] = choices[41][2];
 units[41] = "28";
 comments[41] = "Id Pregunta: 476. ";


//  Id pregunta: 533 AÃ±o de creación de pregunta: 2003-01-01
 questions[42]= "43)  Los diagrmas de Gantt o de tiempo son una t&eacute;cnica de:";
 choices[42]= new Array();
 choices[42][0] = "Gesti&oacute;n de proyectos";
 choices[42][1] = "Programaci&oacute;n orientada a objetos";
 choices[42][2] = "An&aacute;lisis diferencialde aplicaciones";
 choices[42][3] = "Programaci&oacute;n estructurada";
 answers[42] = choices[42][0];
 units[42] = "28";
 comments[42] = "Id Pregunta: 533. ";


//  Id pregunta: 537 AÃ±o de creación de pregunta: 2004-01-01
 questions[43]= "44)  El desarrollo de una Pol&iacute;tica de Seguridad de los Sistemas de Informaci&oacute;n es responsabilidad de:";
 choices[43]= new Array();
 choices[43][0] = "Departamento de Inform&aacute;tica";
 choices[43][1] = "Comit&eacute; de Seguridad";
 choices[43][2] = "Administrador de seguridad";
 choices[43][3] = "Alta Direcci&oacute;n";
 answers[43] = choices[43][3];
 units[43] = "26";
 comments[43] = "Id Pregunta: 537. ";


//  Id pregunta: 558 AÃ±o de creación de pregunta: 2006-01-01
 questions[44]= "45)  Cualquier sistema de informaci&oacute;n:";
 choices[44]= new Array();
 choices[44][0] = "No es independiente de los objetivos de la organizaci&oacute;n.";
 choices[44][1] = "Debe estar interrelacionado con los dem&aacute;s sistemas de la organizaci&oacute;n.";
 choices[44][2] = "No es independiente de las estrategias de la organizaci&oacute;n.";
 choices[44][3] = "Son correctas todas las afirmaciones anteriores.";
 answers[44] = choices[44][3];
 units[44] = "21";
 comments[44] = "Id Pregunta: 558. ";


//  Id pregunta: 561 AÃ±o de creación de pregunta: 2006-01-01
 questions[45]= "46)  Los modelos de optimizaci&oacute;n tratan de problemas";
 choices[45]= new Array();
 choices[45][0] = "bien comprendidos con sus caracter&iacute;sticas  cualitativas bien determinadas";
 choices[45][1] = "Debe definirse un objetivo impl&iacute;cto &uacute;nico";
 choices[45][2] = "Puede existir un procedimiento (algoritmo) viable de c&aacute;lculo, para encontrar el valor &oacute;ptimo de la funci&oacute;n objetivo";
 choices[45][3] = "En general, nunca es posibleencontrar el verdadero &oacute;ptimo global optando por encontrar una soluci&oacute;n sub&oacute;ptima que determine los valores de s&oacute;lounas pocas variables de decisi&oacute;n, al tiempo que trata a las dem&aacute;s como restricciones fijas.";
 answers[45] = choices[45][3];
 units[45] = "21";
 comments[45] = "Id Pregunta: 561. ";


//  Id pregunta: 565 AÃ±o de creación de pregunta: 2006-01-01
 questions[46]= "47)  A qui&eacute;n se debe la &quot;Teor&iacute;a de Recursos y Capacidades&quot;";
 choices[46]= new Array();
 choices[46][0] = "Laurence Prusak";
 choices[46][1] = "Peter Drucker";
 choices[46][2] = "Davenport";
 choices[46][3] = "Ninguno de los anteriores";
 answers[46] = choices[46][3];
 units[46] = "22";
 comments[46] = "Id Pregunta: 565. ";


//  Id pregunta: 566 AÃ±o de creación de pregunta: 2006-01-01
 questions[47]= "48)  Las organizaciones basadas en el conocimiento, seg&uacute;n Berenguer. Se&ntilde;ale la correcta.";
 choices[47]= new Array();
 choices[47][0] = "Consideran el tiempo como un factor cr&iacute;tico";
 choices[47][1] = "Tienen claro que la tecnolog&iacute;a vuelve a una organizaci&oacute;n m&aacute;s competitiva";
 choices[47][2] = "Poseen una cultura organizacional basada en compartir conocimientos y valorar los resultados a corto plazo";
 choices[47][3] = "Todas son caracter&iacute;siticas propias de las organizaciones basadas en el conocimiento";
 answers[47] = choices[47][0];
 units[47] = "22";
 comments[47] = "Id Pregunta: 566. ";


//  Id pregunta: 567 AÃ±o de creación de pregunta: 2006-01-01
 questions[48]= "49)  En el modelo de Anthony de pir&aacute;mide de niveles directivos, en el nivel estrat&eacute;gico. &iquest;Qu&eacute; grado de utilizaci&oacute;n debe tener la informaci&oacute;n interna de la organizaci&oacute;n?";
 choices[48]= new Array();
 choices[48][0] = "Alto. Este tipo de informaci&oacute;n ayudar&aacute; a planificar la estrategia a largo plazo";
 choices[48][1] = "Bajo. Este tipo de informaci&oacute;n deber&iacute;a ser procesado en el nivel medio de la pir&aacute;mide";
 choices[48][2] = "Muy alto. Esta informaci&oacute;n es imprescindible para planificar la estrategia a largo plazo";
 choices[48][3] = "Medio. En funci&oacute;n del tipo de organizaci&oacute;n";
 answers[48] = choices[48][1];
 units[48] = "22";
 comments[48] = "Id Pregunta: 567. ";


//  Id pregunta: 569 AÃ±o de creación de pregunta: 2006-01-01
 questions[49]= "50)  Qu&eacute; se entiende como conocimiento t&aacute;cito";
 choices[49]= new Array();
 choices[49][0] = "Es un tipo de conocimiento formalizado, necesario para realizar una correcta &quot;gesti&oacute;n del conocimiento&quot; en las organizaciones";
 choices[49][1] = "Es el conocimiento objetivo y racional que puede ser expresado en palabras, oraciones, n&uacute;meros o f&oacute;rmulas, en general independiente de contexto alguno";
 choices[49][2] = "Es conocimiento altamente personal y f&iacute;cilmente transferible o comunicable. ";
 choices[49][3] = "Es aquel que se encuentra en la mente de las personas producto de la experiencia, la sabidur&iacute;a, la creatividad";
 answers[49] = choices[49][3];
 units[49] = "22";
 comments[49] = "Id Pregunta: 569. ";


//  Id pregunta: 573 AÃ±o de creación de pregunta: 2006-01-01
 questions[50]= "51)  Seg&uacute;n la Ley 30/84 de la Reforma de la Funci&oacute;n P&uacute;blica, los puestos directivos de las subdirecciones TIC podr&aacute;n solo podr&aacute;n ser desempe&ntilde;ados por funcionarios pertenecientes";
 choices[50]= new Array();
 choices[50][0] = "al Cuerpo Superior de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n y las comunicaciones ";
 choices[50][1] = "al Cuerpo Superior de Tecnicos de la Administraci&oacute;n del Estado";
 choices[50][2] = "Es un cargo de libre disposici&oacute;n al que puede acceder cualquier funcionario";
 choices[50][3] = "Ser&aacute; un funcionario de Grupo A";
 answers[50] = choices[50][3];
 units[50] = "24";
 comments[50] = "Id Pregunta: 573. ";


//  Id pregunta: 575 AÃ±o de creación de pregunta: 2006-01-01
 questions[51]= "52)  Steve Smith (2000) propone el modelo de cambio Quest cuyas componentes son:";
 choices[51]= new Array();
 choices[51][0] = "Experiencia, Estrategia, L&iacute;deres, Clientes, Procesos, Gente, Disciplina y Energ&iacute;a.";
 choices[51][1] = "Creencia (Visi&oacute;n), Estrategia, L&iacute;deres, Clientes, Procesos, Gente, Disciplina y Energ&iacute;a.";
 choices[51][2] = "Creencia (Visi&oacute;n), Estrategia, L&iacute;deres, Clientes, Procesos, Gente, Disciplina y Energ&iacute;a.";
 choices[51][3] = "Creencia (Visi&oacute;n), Estrategia, Jefes, Usuarios, Procesos, Gente, Disciplina y Energ&iacute;a.";
 answers[51] = choices[51][1];
 units[51] = "24";
 comments[51] = "Id Pregunta: 575. ";


//  Id pregunta: 579 AÃ±o de creación de pregunta: 2006-01-01
 questions[52]= "53)  Cual de las siguientes afirmaciones no es una ventaja de una organizaci&oacute;n estructurada de forma funcional";
 choices[52]= new Array();
 choices[52][0] = "Se aprovechan mucho mejor los recursos humanos al no estar adjudicados a un &uacute;nico proyecto.";
 choices[52][1] = "Se conoce mejor la organizaci&oacute;n desde arriba";
 choices[52][2] = "Al trabajar los empleados  en diferentes aplicaciones se expecializan en ellas";
 choices[52][3] = "Se evita el riesgo de la dependencia excesiva de unos pocos expertos";
 answers[52] = choices[52][2];
 units[52] = "26";
 comments[52] = "Id Pregunta: 579. ";


//  Id pregunta: 580 AÃ±o de creación de pregunta: 2006-01-01
 questions[53]= "54)  Desde el punto de vista funcional la organizaci&oacute;n reticular se caracteriza por";
 choices[53]= new Array();
 choices[53][0] = "prescindir casitotalmente de los formalismos.";
 choices[53][1] = "Lascomunicaciones son de todos con todos, sobre todo por niveles.";
 choices[53][2] = "Las comunicaciones suelen estar muy formalizadas y documentadas deacuerdo a normas estrictas.";
 choices[53][3] = "La mayor&iacute;a de las comunicaciones, por no decir todas, se producen de jefe a subordinados";
 answers[53] = choices[53][1];
 units[53] = "26";
 comments[53] = "Id Pregunta: 580. ";


//  Id pregunta: 582 AÃ±o de creación de pregunta: 2006-01-01
 questions[54]= "55)  Cual de las siguiente subareas no pertenece tradicionalmente a sistemas";
 choices[54]= new Array();
 choices[54][0] = "Sistemas Operativos, Software Base y Sistemas Corporativos:";
 choices[54][1] = "Microinform&aacute;tica:";
 choices[54][2] = "Desarrollo";
 choices[54][3] = "Integraci&oacute;n de Sistemas:";
 answers[54] = choices[54][2];
 units[54] = "26";
 comments[54] = "Id Pregunta: 582. ";


//  Id pregunta: 583 AÃ±o de creación de pregunta: 2006-01-01
 questions[55]= "56)  Cual de las siguientes funciones corresponde al &aacute;rea de Sistemas Operativos, Software Base y Sistemas Corporativos";
 choices[55]= new Array();
 choices[55][0] = "Control y monitorizaci&oacute;n de la plataforma";
 choices[55][1] = "Optimizaci&oacute;n de la operativa diaria";
 choices[55][2] = "Salvaguarda de datos.";
 choices[55][3] = "Todas ellas";
 answers[55] = choices[55][3];
 units[55] = "26";
 comments[55] = "Id Pregunta: 583. ";


//  Id pregunta: 585 AÃ±o de creación de pregunta: 2006-01-01
 questions[56]= "57)  Para mantener una buena gesti&oacute;n en las relaciones con los usuarios es necesario:";
 choices[56]= new Array();
 choices[56][0] = "No generar falsas expectativas";
 choices[56][1] = "Informar al usuario cual es el problema t&eacute;cnico.";
 choices[56][2] = "Adaptarse a las necesidades y calendario del usuario";
 choices[56][3] = "Aceptar todas las nuevas demandas del usuario";
 answers[56] = choices[56][0];
 units[56] = "26";
 comments[56] = "Id Pregunta: 585. ";


//  Id pregunta: 588 AÃ±o de creación de pregunta: 2006-01-01
 questions[57]= "58)  De acuerdo con David y Olson 'Management lnformation System: Conceptual Foundations, Structure and Development, Mc Graw Hill, 1985' un estudio de viabilidad debe abarcar cinco aspectos. Estos son:";
 choices[57]= new Array();
 choices[57][0] = "T&eacute;cnico, operacional, econ&oacute;mico, planificaci&oacute;n y sociol&oacute;gico.";
 choices[57][1] = "T&eacute;cnico, operacional, econ&oacute;mico, planificaci&oacute;n y pol&iacute;tico.";
 choices[57][2] = "T&eacute;cnico, sociol&oacute;gico, econ&oacute;mico, planificaci&oacute;n y motivacional.";
 choices[57][3] = "T&eacute;cnico, operacional, econ&oacute;mico, planificaci&oacute;n y motivacional.";
 answers[57] = choices[57][3];
 units[57] = "27";
 comments[57] = "Id Pregunta: 588. ";


//  Id pregunta: 591 AÃ±o de creación de pregunta: 2006-01-01
 questions[58]= "59)  Entre las t&eacute;cnicas de control deL avance de los proyectos cabe citar:";
 choices[58]= new Array();
 choices[58][0] = "Informes de avance peri&oacute;dicos";
 choices[58][1] = "Puntos de control al final de cada etapa";
 choices[58][2] = "a) y b) son ciertas";
 choices[58][3] = "a) y b) son falsas";
 answers[58] = choices[58][2];
 units[58] = "28";
 comments[58] = "Id Pregunta: 591. ";


//  Id pregunta: 592 AÃ±o de creación de pregunta: 2006-01-01
 questions[59]= "60)  El retraso de una actividad:";
 choices[59]= new Array();
 choices[59][0] = "supone un retraso siempre en el proyecto";
 choices[59][1] = "supondr&aacute; un retraso si no pertenece al camino cr&iacute;tico";
 choices[59][2] = "no supone retraso alguno si no pertenece al camino critico y la actividad no pasa a formar parte de este al alargar su duraci&oacute;n";
 choices[59][3] = "no supone retraso nunca";
 answers[59] = choices[59][2];
 units[59] = "28";
 comments[59] = "Id Pregunta: 592. ";


//  Id pregunta: 1899 AÃ±o de creación de pregunta: 2006-01-01
 questions[60]= "61)  En un centro de llamadas, gestionar las necesidades del usuario la primera vez que llama, evitando la necesidad de una segunda llamada";
 choices[60]= new Array();
 choices[60][0] = "Soporte electr&oacute;nico";
 choices[60][1] = "Solicitud autom&aacute;tica de repetici&oacute;n (ARQ)";
 choices[60][2] = "Calidad de servicio";
 choices[60][3] = "Resoluci&oacute;n de primera llamada";
 answers[60] = choices[60][3];
 units[60] = "26";
 comments[60] = "Id Pregunta: 1899. ";


//  Id pregunta: 2220 AÃ±o de creación de pregunta: 2002-01-01
 questions[61]= "62)  &iquest;Qu&eacute; tipo de organizaci&oacute;n es tambi&eacute;n conocida por &quot;organizaci&oacute;n matricial&quot;?:";
 choices[61]= new Array();
 choices[61][0] = "Organizaci&oacute;n proyecto-funcional";
 choices[61][1] = "Organizaci&oacute;n funcional";
 choices[61][2] = "Organizaci&oacute;n proyecto-staff";
 choices[61][3] = "Organizaci&oacute;n por aplicaciones";
 answers[61] = choices[61][0];
 units[61] = "26";
 comments[61] = "Id Pregunta: 2220. ";


//  Id pregunta: 4296 AÃ±o de creación de pregunta: 2007-01-01
 questions[62]= "63)  Para contemplar la plena ocupaci&oacute;n de todos los recursos, en un diagrama de Gantt:";
 choices[62]= new Array();
 choices[62][0] = "Puede asignarse a un recurso distintas tarea.";
 choices[62][1] = "S&oacute;lo debe asignarse a cada recurso una tarea.";
 choices[62][2] = "Se puede asignar la misma tarea a varios recursos.";
 choices[62][3] = "No es necesario que los trabajos se descompongan hasta la unidad m&iacute;nima de tratamiento.";
 answers[62] = choices[62][0];
 units[62] = "27";
 comments[62] = "Id Pregunta: 4296. Examen TIC MAP B 2005";


//  Id pregunta: 4400 AÃ±o de creación de pregunta: 2007-01-01
 questions[63]= "64)  La gesti&oacute;n proactiva de un sistema permite";
 choices[63]= new Array();
 choices[63][0] = "Solucionar todas las posibles incidencias.";
 choices[63][1] = "Detectar los problemas con anterioridad a la percepci&oacute;n de los mismos por parte del usuario.";
 choices[63][2] = "Corregir los problemas antes de que estos se produzcan.";
 choices[63][3] = "Mantener a todos los usuarios informados del estado de los sistemas.";
 answers[63] = choices[63][1];
 units[63] = "24";
 comments[63] = "Id Pregunta: 4400. ";


//  Id pregunta: 4413 AÃ±o de creación de pregunta: 2007-01-01
 questions[64]= "65)  &iquest;Cu&aacute;l de las siguientes no es una t&eacute;cnica de selecci&oacute;n de inversiones?";
 choices[64]= new Array();
 choices[64][0] = "El m&eacute;todo del Payback.";
 choices[64][1] = "El m&eacute;todo del retorno de la inversi&oacute;n.";
 choices[64][2] = "El m&eacute;todo del Valor Actual Neto.";
 choices[64][3] = "El m&eacute;todo del Indicador Alternativo de Variabilidad del Precio de Mercado.";
 answers[64] = choices[64][3];
 units[64] = "27";
 comments[64] = "Id Pregunta: 4413. Examen TIC MAP B 2006";


//  Id pregunta: 4510 AÃ±o de creación de pregunta: 2007-01-01
 questions[65]= "66)  &iquest;Cu&aacute;l de los siguientes m&eacute;todos se utiliza para determinar la viabilidad del proyecto en el an&aacute;lisis coste-beneficio?";
 choices[65]= new Array();
 choices[65][0] = "Inversi&oacute;n promedio.";
 choices[65][1] = "Coste de desarrollo actualizado.";
 choices[65][2] = "Beneficio neto.";
 choices[65][3] = "Valor actual.";
 answers[65] = choices[65][3];
 units[65] = "27";
 comments[65] = "Id Pregunta: 4510. Castilla la Mancha 06";


//  Id pregunta: 4553 AÃ±o de creación de pregunta: 2007-01-01
 questions[66]= "67)  En gesti&oacute;n de proyectos de tecnolog&iacute;as de la informaci&oacute;n indicar cu&aacute;l de los siguientes diagramas es de red y tiene una representaci&oacute;n gr&aacute;fica m&aacute;s sencilla no incluyendo actividades virtuales.";
 choices[66]= new Array();
 choices[66][0] = "Diagrama PERT (Program Evaluation and Review Technique).";
 choices[66][1] = "Diagrama PDM (Precedence Diagramming Method).";
 choices[66][2] = "Diagrama ADM (Arrow Diagramming Method).";
 choices[66][3] = "Ninguno de los anteriores.";
 answers[66] = choices[66][1];
 units[66] = "27";
 comments[66] = "Id Pregunta: 4553. Castilla la Mancha B 06";


//  Id pregunta: 5103 AÃ±o de creación de pregunta: 2003-01-01
 questions[67]= "68)  Los elementos b&aacute;sicos de un sistema de informaci&oacute;n son:";
 choices[67]= new Array();
 choices[67][0] = "Los procedimiento y las pr&aacute;cticas hatituales de trabajo; la informaci&oacute;n; los usuarios; el equipo de soporte para la comunicaci&oacute;n, el procesamiento y el almacenamiento de la informaci&oacute;n.";
 choices[67][1] = "Los procedimientos y las pr&aacute;cticas habituales de trabajo; la informaci&oacute;n; el eqipo de soporte para la comunicaci&oacute;n, el procesamiento y el almacenamiento de la informaci&oacute;n.";
 choices[67][2] = "Los procedimientos y las pr&aacute;cticas habituales de trabajo; la informaci&oacute;n; los usuarios.";
 choices[67][3] = "La informaci&oacute;n; el equipo de soporte para la comunicaci&oacute;n, el procesamiento y el almacenamiento de la informaci&oacute;n.";
 answers[67] = choices[67][0];
 units[67] = "21";
 comments[67] = "Id Pregunta: 5103. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5108 AÃ±o de creación de pregunta: 2003-01-01
 questions[68]= "69)  El modelo CMMI:";
 choices[68]= new Array();
 choices[68][0] = "Es una metodolog&iacute;a de desarrollo software.";
 choices[68][1] = "Es una pr&aacute;ctica para estimaci&oacute;n de complejidad de software.";
 choices[68][2] = "Permite obtener un diagn&oacute;stico de la madurez de los procesos relacionados con las tecnolog&iacute;as de la informaci&oacute;n de una organizaci&oacute;n.";
 choices[68][3] = "Permite la obtenci&oacute;n de un modelo l&oacute;gico de procesos que represente el sistema, con independencia de las restricciones f&iacute;sicas del entorno.";
 answers[68] = choices[68][2];
 units[68] = "27";
 comments[68] = "Id Pregunta: 5108. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5450 AÃ±o de creación de pregunta: 2003-01-01
 questions[69]= "70)  &iquest;Qu&eacute; no es sociedad de la informaci&oacute;n?";
 choices[69]= new Array();
 choices[69][0] = "Un estadio social y econ&oacute;mico de desarrollo";
 choices[69][1] = "La posibilidad de obtener y compartir &ldquo;cualquier&rdquo; informaci&oacute;n de manera instant&aacute;nea desde cualquier lugar";
 choices[69][2] = "Una situaci&oacute;n en la que la mayor parte de los empleos est&aacute;n asociados a la producci&oacute;n de bienes tangibles";
 choices[69][3] = "El cambio de los medios de generaci&oacute;n de riqueza desde los sectores industriales a los sectores de servicios";
 answers[69] = choices[69][2];
 units[69] = "21";
 comments[69] = "Id Pregunta: 5450. Castilla y Le&oacute;n";


//  Id pregunta: 5915 AÃ±o de creación de pregunta: 2009-01-01
 questions[70]= "71)  En el modelo de Evoluci&oacute;n de los Sistemas de Informaci&oacute;n de Gibson y Nolan se distinguen cuatro etapas distintas en el crecimiento de todo sistema de informaci&oacute;n en una empresa. &iquest;Cu&aacute;l es el orden cronol&oacute;gico correcto de dichas etapas?";
 choices[70]= new Array();
 choices[70][0] = "Iniciaci&oacute;n, formalizaci&oacute;n, expansi&oacute;n y madurez";
 choices[70][1] = "Iniciaci&oacute;n, expansi&oacute;n, madurez y formalizaci&oacute;n";
 choices[70][2] = "Iniciaci&oacute;n, expansi&oacute;n, formalizaci&oacute;n y madurez";
 choices[70][3] = "Iniciaci&oacute;n, formalizaci&oacute;n, madurez y expansi&oacute;n";
 answers[70] = choices[70][2];
 units[70] = "21";
 comments[70] = "Id Pregunta: 5915. MAP 2008 A1";


//  Id pregunta: 5990 AÃ±o de creación de pregunta: 2010-01-01
 questions[71]= "72)  NO corresponde a los principios que deben regir un CAU:";
 choices[71]= new Array();
 choices[71][0] = "Proveer un punto de contacto &uacute;nico al usuario final.";
 choices[71][1] = "Disponer de informaci&oacute;n sobre niveles de servicio para mejorar el servicio proporcionado.";
 choices[71][2] = "Rastrear la organizaci&oacute;n para detectar posibles necesidades no cubiertas.";
 choices[71][3] = "Documentar las soluciones dadas a las incidencias.";
 answers[71] = choices[71][2];
 units[71] = "26";
 comments[71] = "Id Pregunta: 5990. TIC A 2009";


//  Id pregunta: 6076 AÃ±o de creación de pregunta: 2010-01-01
 questions[72]= "73)  &iquest;En cu&aacute;ntos 'niveles de madurez' se agrupan las &aacute;reas de Proceso del modelo de capacidad y madurez CMM?";
 choices[72]= new Array();
 choices[72][0] = "4.";
 choices[72][1] = "5.";
 choices[72][2] = "3.";
 choices[72][3] = "No existe tal concepto.";
 answers[72] = choices[72][1];
 units[72] = "27";
 comments[72] = "Id Pregunta: 6076. ";


//  Id pregunta: 6079 AÃ±o de creación de pregunta: 2010-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l de las siguientes NO es una salida del proceso de Selecci&oacute;n de Vendedores dentro de la Gesti&oacute;n de las Adquisiciones del Proyecto?";
 choices[73]= new Array();
 choices[73][0] = "Contrato.";
 choices[73][1] = "Plan de gesti&oacute;n del contrato.";
 choices[73][2] = "Disponibilidad de recursos.";
 choices[73][3] = "Lista de vendedores calificados.";
 answers[73] = choices[73][3];
 units[73] = "27";
 comments[73] = "Id Pregunta: 6079. ";


//  Id pregunta: 6136 AÃ±o de creación de pregunta: 2010-01-01
 questions[74]= "75)  Dado un CAU de tres niveles, &iquest;d&oacute;nde ubicar&iacute;a en el proceso de soporte al personal inform&aacute;tico de un centro perif&eacute;rico?";
 choices[74]= new Array();
 choices[74][0] = "Entre el primer nivel (CAU) y el segundo nivel (otras &aacute;reas del centro TIC)";
 choices[74][1] = "Entre el segundo nivel (otras &aacute;reas del centro TIC) y el tercer nivel (proveedores y empresas de mantenimiento)";
 choices[74][2] = "Como &lsquo;nivel 0&rsquo;, atendiendo todas las incidencias del centro perif&eacute;rico y escal&aacute;ndolas al nivel 1 (CAU)";
 choices[74][3] = "Fuera del proceso de soporte, habr&iacute;a que reubicar al personal en otras tareas";
 answers[74] = choices[74][0];
 units[74] = "26";
 comments[74] = "Id Pregunta: 6136. ";


//  Id pregunta: 6147 AÃ±o de creación de pregunta: 2010-01-01
 questions[75]= "76)  El ADM (M&eacute;todo de diagramaci&oacute;n con flechas):";
 choices[75]= new Array();
 choices[75][0] = "Es un m&eacute;todo para crear un diagrama de red del cronograma del proyecto que utiliza casillas o rect&aacute;ngulos, denominados nodos, para representar actividades, que se conectan con flechas que muestran las dependencias.";
 choices[75][1] = "A y C son correctas.";
 choices[75][2] = "Es un m&eacute;todo para crear un diagrama de red del cronograma del proyecto que utiliza flechas para representar las actividades, que se conectan en nodos para mostrar sus dependencias.";
 choices[75][3] = "Ninguna de las anteriores es correcta";
 answers[75] = choices[75][2];
 units[75] = "28";
 comments[75] = "Id Pregunta: 6147. ";


//  Id pregunta: 6150 AÃ±o de creación de pregunta: 2010-01-01
 questions[76]= "77)  &iquest;Cu&aacute;les son algunos modelos de mejora de procesos relacionados con la gesti&oacute;n de la calidad en un proyecto?";
 choices[76]= new Array();
 choices[76][0] = "Malcolm Baldrige, CMM, CMMISM y ASQ.";
 choices[76][1] = "Malcolm Baldrige, AMD y CMMISM.";
 choices[76][2] = "Malcolm Baldrige, CMM, CMMISM y AMD.";
 choices[76][3] = "Malcolm Baldrige, CMM y CMMISM.";
 answers[76] = choices[76][3];
 units[76] = "28";
 comments[76] = "Id Pregunta: 6150. ";


//  Id pregunta: 6166 AÃ±o de creación de pregunta: 2010-01-01
 questions[77]= "78)  Se&ntilde;ale cual es el flujo general de informaci&oacute;n dentro de la organizaci&oacute;n:";
 choices[77]= new Array();
 choices[77][0] = "Entrada, procesado, almacenamiento, difusi&oacute;n y utilizaci&oacute;n.";
 choices[77][1] = "Entrada, almacenamiento, utilizaci&oacute;n, procesado y difusi&oacute;n.";
 choices[77][2] = "Entrada, procesado, almacenamiento, utilizaci&oacute;n y difusi&oacute;n.";
 choices[77][3] = "Entrada, almacenamiento, procesado, difusi&oacute;n y utilizaci&oacute;n.";
 answers[77] = choices[77][3];
 units[77] = "21";
 comments[77] = "Id Pregunta: 6166. ";


//  Id pregunta: 8253 AÃ±o de creación de pregunta: 2011-01-01
 questions[78]= "79)  Seg&uacute;n el est&aacute;ndar IEEE 610.12, la l&iacute;nea base:";
 choices[78]= new Array();
 choices[78][0] = "Es la l&iacute;nea que marca en la planificaci&oacute;n en que momento nos encontramos.";
 choices[78][1] = "Es la situaci&oacute;n en que se encuentra en cada momento el desarrollo.";
 choices[78][2] = "Es el momento de salida de la planificaci&oacute;n.";
 choices[78][3] = "Ha sido acordada formalmente.";
 answers[78] = choices[78][3];
 units[78] = "27,28";
 comments[78] = "Id Pregunta: 8253. Examen TIC A1 2010";


//  Id pregunta: 8298 AÃ±o de creación de pregunta: 2011-01-01
 questions[79]= "80)  &iquest;Cu&aacute;l de las siguientes definiciones explica de mejor manera lo que es el throughput de un sistema inform&aacute;tico? ";
 choices[79]= new Array();
 choices[79][0] = "La cantidad de trabajo &uacute;til ejecutada por unidad de tiempo en un entorno de carga determinado.";
 choices[79][1] = "Es la m&aacute;xima cantidad de trabajo &uacute;til que se puede ejecutar por unidad de tiempo en un entorno de carga determinado.";
 choices[79][2] = "Es el porcentaje de tiempo durante el cual dos o m&aacute;s componentes del sistema est&aacute;n utilizados simult&aacute;neamente.";
 choices[79][3] = "Es el porcentaje de tiempo durante el cual se est&aacute; utilizando un componente del sistema inform&aacute;tico.";
 answers[79] = choices[79][0];
 units[79] = "26";
 comments[79] = "Id Pregunta: 8298. Examen TIC A2 2010";


//  Id pregunta: 8615 AÃ±o de creación de pregunta: 2011-01-01
 questions[80]= "81)  En un entorno controlado de sistemas de informaci&oacute;n, la tarea de administraci&oacute;n de base de datos NO deber&iacute;a compatibilizarse con la de:";
 choices[80]= new Array();
 choices[80][0] = "Administraci&oacute;n de seguridad";
 choices[80][1] = "Programaci&oacute;n de aplicaciones";
 choices[80][2] = "Gesti&oacute;n de librer&iacute;as de cintas";
 choices[80][3] = "Aseguramiento de la calidad";
 answers[80] = choices[80][1];
 units[80] = "26";
 comments[80] = "Id Pregunta: 8615. Examen TIC A2 2010 interna";


//  Id pregunta: 8620 AÃ±o de creación de pregunta: 2011-01-01
 questions[81]= "82)  El tipo de mantenimiento de equipos que se realiza en las instalaciones del prestador del servicio de mantenimiento y NO en las Instalaciones del cliente, se denomina:";
 choices[81]= new Array();
 choices[81][0] = "Out-side";
 choices[81][1] = "Off-side";
 choices[81][2] = "In-site";
 choices[81][3] = "On-site";
 answers[81] = choices[81][3];
 units[81] = "26";
 comments[81] = "Id Pregunta: 8620. Examen TIC A2 2010 interna";


//  Id pregunta: 8645 AÃ±o de creación de pregunta: 2011-01-01
 questions[82]= "83)  Indique cu&aacute;l es la respuesta correcta con respecto a los diagramas PERT:";
 choices[82]= new Array();
 choices[82][0] = "Los arcos del grafo representan los sucesos, y los v&eacute;rtices las actividades.";
 choices[82][1] = "En la matriz de encadenamientos aquellas columnas en las que no aparece ninguna X indican las actividades que no tienen ninguna actividad siguiente, es decir, aquellas actividades cuyo suceso final coincide con el suceso fin del proyecto.";
 choices[82][2] = "El cuadro de prelaciones est&eacute; formado por tres columnas En la primera columna est&aacute;n representadas todas las actividades en que se ha descompuesto el proyecto. En la segunda columna figuran las actividades precedentes de su hom&oacute;loga en la primera columna y en la &uacute;ltima columna se muestran las actividades posteriores.";
 choices[82][3] = "La matriz de encadenamientos consiste en una matriz cuadrada cuya dimensi&oacute;n es igual al n&uacute;mero de sucesos en que se ha descompuesto el proyecto.";
 answers[82] = choices[82][1];
 units[82] = "28";
 comments[82] = "Id Pregunta: 8645. Examen TIC A2 2010 interna";


//  Id pregunta: 9409 AÃ±o de creación de pregunta: 2013-01-01
 questions[83]= "84)  Qui&eacute;n deber&iacute;a cerrar siempre las incidencias?";
 choices[83]= new Array();
 choices[83][0] = "El nivel 1 (CAU)";
 choices[83][1] = "El nivel 2 (resto de &aacute;reas del centro TIC)";
 choices[83][2] = "El nivel 3 (proveedores)";
 choices[83][3] = "Aquel nivel que resuelva la incidencia";
 answers[83] = choices[83][0];
 units[83] = "26";
 comments[83] = "Id Pregunta: 9409. ";


//  Id pregunta: 9769 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  Seg&uacute;n la Ley 37/2007 de Reutilizaci&oacute;n de Informaci&oacute;n del Sector P&uacute;blico, son infracciones muy graves:";
 choices[84]= new Array();
 choices[84][0] = "La reutilizaci&oacute;n de documentaci&oacute;n sin haber obtenido la correspondiente licencia en los casos en que &eacute;sta sea requerida.";
 choices[84][1] = "La reutilizaci&oacute;n de la informaci&oacute;n para una finalidad distinta a la que se concedi&oacute;.";
 choices[84][2] = "La desnaturalizaci&oacute;n del sentido de la informaci&oacute;n para cuya reutilizaci&oacute;n se haya concedido una licencia.";
 choices[84][3] = "La ausencia de cita de la fuente.";
 answers[84] = choices[84][2];
 units[84] = "22";
 comments[84] = "Id Pregunta: 9769. ";


//  Id pregunta: 9771 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  Seg&uacute;n la Ley 37/2007 de Reutilizaci&oacute;n de Informaci&oacute;n del Sector P&uacute;blico, la funci&oacute;n sancionadora es competencia de:";
 choices[85]= new Array();
 choices[85][0] = "MITyC";
 choices[85][1] = "Ministerio de Hacienda y Administraciones P&uacute;blicas";
 choices[85][2] = "Ministro del ministerio que ofrezca los datos si las infracciones son muy graves y un rango m&iacute;nimo de Direcci&oacute;n General para infracciones graves y leves";
 choices[85][3] = "Direcci&oacute;n General que haya publicado los datos.";
 answers[85] = choices[85][2];
 units[85] = "22";
 comments[85] = "Id Pregunta: 9771. ";


//  Id pregunta: 10007 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  En la direcci&oacute;n de proyectos de Tecnolog&iacute;as de la Informaci&oacute;n, es fundamental la gesti&oacute;n del alcance del proyecto. Ello supone";
 choices[86]= new Array();
 choices[86][0] = "estimar la duraci&oacute;n de las actividades.";
 choices[86][1] = "definir la secuencia entre las actividades.";
 choices[86][2] = "asegurar que el proyecto incluya todo el trabajo requerido, y s&oacute;lo el trabajo requerido.";
 choices[86][3] = "preparar el presupuesto de costes.";
 answers[86] = choices[86][2];
 units[86] = "27";
 comments[86] = "Id Pregunta: 10007. ";


//  Id pregunta: 10371 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  Se&ntilde;ale cu&aacute;l de los siguientes no puede considerarse un riesgo que puede limitar el &eacute;xito un proyecto de ingenier&iacute;a de software:";
 choices[87]= new Array();
 choices[87][0] = "Excesiva rotaci&oacute;n de personal en la division encargada del desarrollo";
 choices[87][1] = "Al servidor de Eclipse le falta un parche de seguridad y pueden atacarlo";
 choices[87][2] = "El cliente no habla nuestro idioma ni el ingl&eacute;s y tenemos un traductor no muy experto, a menudo hay confusi&oacute;n entre lo que nos pide y lo que entendemos.";
 choices[87][3] = "Se va a usar una tecnolog&iacute;a de desarrollo de la que apenas haya conocimiento y referencia de proyectos exitosos con la misma";
 answers[87] = choices[87][1];
 units[87] = "28";
 comments[87] = "Id Pregunta: 10371. ";


//  Id pregunta: 10435 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  &iquest;Existe un Estatuto espec&iacute;fico del personal directivo de la Administraci&oacute;n General del Estado? ";
 choices[88]= new Array();
 choices[88][0] = "S&iacute;. El Estatuto B&aacute;sico del Empleado P&uacute;blico.";
 choices[88][1] = "S&iacute;. La Ley de Altos Cargos de la Administraci&oacute;n General del Estado.";
 choices[88][2] = "No. A&uacute;n no se ha desarrollado la previsi&oacute;n del Estatuto B&aacute;sico del Empleado P&uacute;blico a este respecto.";
 choices[88][3] = "No existe, porque no est&aacute; normativamente previsto.";
 answers[88] = choices[88][2];
 units[88] = "24";
 comments[88] = "Id Pregunta: 10435. Examen TIC A1 2013";


//  Id pregunta: 10599 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  datos.gob.es...";
 choices[89]= new Array();
 choices[89][0] = "&hellip; es una iniciativa con el fin de promocionar la protecci&oacute;n de datos de car&aacute;cter personal en Espa&ntilde;a.";
 choices[89][1] = "&hellip; es una sede electr&oacute;nica para la reutilizaci&oacute;n de la informaci&oacute;n del sector p&uacute;blico.";
 choices[89][2] = "&hellip; aloja el Portal de la Transparencia.";
 choices[89][3] = "&hellip; aloja el Cat&aacute;logo Nacional de datos abiertos.";
 answers[89] = choices[89][3];
 units[89] = "22";
 comments[89] = "Id Pregunta: 10599. ";


//  Id pregunta: 10600 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  La creaci&oacute;n de una Estructura de Desglose del Trabajo (EDT) forma parte de:";
 choices[90]= new Array();
 choices[90][0] = "La gesti&oacute;n de tiempo el proyecto.";
 choices[90][1] = "La denominaci&oacute;n de &ldquo;sede electr&oacute;nica&rdquo; y el n&uacute;mero de identificaci&oacute;n fiscal de la autoridad de certificaci&oacute;n.";
 choices[90][2] = "La gesti&oacute;n de riesgos del proyecto.";
 choices[90][3] = "La gesti&oacute;n de costes del proyecto.";
 answers[90] = choices[90][1];
 units[90] = "28";
 comments[90] = "Id Pregunta: 10600. ";


//  Id pregunta: 10737 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Una &quot;Descripci&oacute;n formal de los conceptos y relaciones que pueden existir sobre agentes o una comunidad. Especificaci&oacute;n consensuada que describe un dominio de informaci&oacute;n.&quot; es:";
 choices[91]= new Array();
 choices[91][0] = "Un metadato";
 choices[91][1] = "Una ontolog&iacute;a";
 choices[91][2] = "Una categor&iacute;a";
 choices[91][3] = "Una forma de representaci&oacute;n de datos estructurados (RDFa)";
 answers[91] = choices[91][1];
 units[91] = "24";
 comments[91] = "Id Pregunta: 10737. ";


//  Id pregunta: 10739 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l es el &aacute;mbito de referencia de aplicaci&oacute;n se&ntilde;alado en el RD 806/2014?";
 choices[92]= new Array();
 choices[92][0] = "Administraci&oacute;n General del Estado.";
 choices[92][1] = "Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos.";
 choices[92][2] = "Administraci&oacute;n General del Estado, Comunidades Aut&oacute;nomas y Entidades Locales.";
 choices[92][3] = "Conjunto del Sector P&uacute;blico.";
 answers[92] = choices[92][1];
 units[92] = "24";
 comments[92] = "Id Pregunta: 10739. ";


//  Id pregunta: 10740 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Cual de las siguientes no se corresponde con una funci&oacute;n correspondiente a la Comisi&oacute;n de Estrategia TIC?";
 choices[93]= new Array();
 choices[93][0] = "Definir las prioridades de inversi&oacute;n en materias TIC de acuerdo con los objetivos establecidos por el Gobierno.";
 choices[93][1] = "Actuar como Observatorio de la Administraci&oacute;n Electr&oacute;nica y Transformaci&oacute;n Digital.";
 choices[93][2] = "Impulsar la colaboraci&oacute;n y cooperaci&oacute;n con las comunidades aut&oacute;nomas y las entidades locales para la puesta en marcha de servicios interadministrativos integrados y la compartici&oacute;n de infraestructuras t&eacute;cnicas y los servicios comunes que permitan la racionalizaci&oacute;n de los recursos TIC a todos los niveles del Estado.";
 choices[93][3] = "Elaborar y trasladar a los &oacute;rganos competentes en materia de contrataci&oacute;n, los criterios y directrices para la agregaci&oacute;n y planificaci&oacute;n de la demanda TIC en la Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos para una mayor eficiencia econ&oacute;mica y su configuraci&oacute;n como cliente &uacute;nico frente a proveedores externos.";
 answers[93] = choices[93][3];
 units[93] = "24";
 comments[93] = "Id Pregunta: 10740. ";


//  Id pregunta: 10745 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Con qu&eacute; frecuencia m&iacute;nima se reunir&aacute; el Comit&eacute; Ejecutivo de la comisi&oacute;n de estrategia TIC?";
 choices[94]= new Array();
 choices[94][0] = "Mensual";
 choices[94][1] = "Semestral";
 choices[94][2] = "Trimestral";
 choices[94][3] = "Anual";
 answers[94] = choices[94][0];
 units[94] = "24";
 comments[94] = "Id Pregunta: 10745. ";


//  Id pregunta: 10746 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  El Comit&eacute; Ejecutivo de la Comisi&oacute;n de Estrategia TIC estar&aacute; compuesto por:";
 choices[95]= new Array();
 choices[95][0] = "Un m&iacute;nimo de cinco miembros y un m&aacute;ximo de diez miembros.";
 choices[95][1] = "Un m&iacute;nimo de cinco miembros.";
 choices[95][2] = "Un m&aacute;ximo de diez miembros.";
 choices[95][3] = "Un m&iacute;nimo de cinco miembros y un m&aacute;ximo de quince miembros.";
 answers[95] = choices[95][0];
 units[95] = "24";
 comments[95] = "Id Pregunta: 10746. ";


//  Id pregunta: 10768 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;Cu&aacute;l de los siguientes servicios no ha sido declarado como servicio compartido?";
 choices[96]= new Array();
 choices[96][0] = "Servicio multicanal de atenci&oacute;n al ciudadano";
 choices[96][1] = "Servicio de gesti&oacute;n de archivo electr&oacute;nico";
 choices[96][2] = "Servicio de videoconferencia";
 choices[96][3] = "Servicio com&uacute;n de gesti&oacute;n econ&oacute;mico-presupuestaria";
 answers[96] = choices[96][2];
 units[96] = "24";
 comments[96] = "Id Pregunta: 10768. ";


//  Id pregunta: 10770 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Cu&aacute;l de los siguientes no es un objetivo estrat&eacute;gico del Plan de Transformaci&oacute;n Digital?";
 choices[97]= new Array();
 choices[97][0] = "Incremento de la productividad y eficacia en el funcionamiento interno de la Administraci&oacute;n";
 choices[97][1] = "El canal digital ha de ser el medio preferido por ciudadanos y empresas para relacionarse con la Administraci&oacute;n";
 choices[97][2] = "Mayor eficiencia en la prestaci&oacute;n de los servicios TIC en el seno de la Administraci&oacute;n";
 choices[97][3] = "Estrategia corporativa de interoperabilidad";
 answers[97] = choices[97][3];
 units[97] = "24";
 comments[97] = "Id Pregunta: 10770. ";


//  Id pregunta: 10820 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  En el PERT, el tiempo last del &uacute;ltimo suceso:";
 choices[98]= new Array();
 choices[98][0] = "Es siempre cero.";
 choices[98][1] = "Es igual a su tiempo early.";
 choices[98][2] = "Es mayor que su tiempo early.";
 choices[98][3] = "Es menor que su tiempo early.";
 answers[98] = choices[98][1];
 units[98] = "28";
 comments[98] = "Id Pregunta: 10820. Examen GSI 2014";


//  Id pregunta: 10905 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  El lenguaje de consulta sobre RDF que permite hacer b&uacute;squedas sobre los recursos de la Web Sem&aacute;ntica utilizando distintas fuentes de datos es:";
 choices[99]= new Array();
 choices[99][0] = "OWL";
 choices[99][1] = "RQUERY";
 choices[99][2] = "JQUERY";
 choices[99][3] = "SPARQL";
 answers[99] = choices[99][3];
 units[99] = "69, 22";
 comments[99] = "Id Pregunta: 10905. Examen GSI 2014";


