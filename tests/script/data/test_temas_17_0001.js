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

//  Id pregunta: 28 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de estos m&eacute;todos no persigue directamente la reducci&oacute;n del TCO?:";
 choices[0]= new Array();
 choices[0][0] = "Inventario";
 choices[0][1] = "Estandarizaci&oacute;n";
 choices[0][2] = "Control de la configuraci&oacute;n";
 choices[0][3] = "Centralizaci&oacute;n";
 answers[0] = choices[0][3];
 units[0] = "25";
 comments[0] = "Id Pregunta: 28. ";


//  Id pregunta: 37 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Cu&aacute;l de las siguientes no es una metodolog&iacute;a habitual para la planificaci&oacute;n de la capacidad de los sistemas de informaci&oacute;n?:";
 choices[1]= new Array();
 choices[1][0] = "La proyecci&oacute;n lineal";
 choices[1][1] = "La teor&iacute;a de colas";
 choices[1][2] = "Los benchmarks";
 choices[1][3] = "Teor&iacute;a de redes";
 answers[1] = choices[1][3];
 units[1] = "25";
 comments[1] = "Id Pregunta: 37. planificaci&oacute;n de la capacidad de los sistemas";


//  Id pregunta: 47 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;Cu&aacute;l de los siguientes grupos de funciones corresponde a los de un sistema de informaci&oacute;n?:";
 choices[2]= new Array();
 choices[2][0] = "Recogida, elaboraci&oacute;n, evaluaci&oacute;n, almacenamiento, recuperaci&oacute;n, tratamiento y distribuci&oacute;n";
 choices[2][1] = "Recogida, elaboraci&oacute;n, evaluaci&oacute;n, almacenamiento, recuperaci&oacute;n, codificaci&oacute;n y distribuci&oacute;n";
 choices[2][2] = "Recogida, elaboraci&oacute;n, evaluaci&oacute;n, almacenamiento, recuperaci&oacute;n, filtrado y distribuci&oacute;n";
 choices[2][3] = "Recogida, elaboraci&oacute;n, evaluaci&oacute;n, almacenamiento, recuperaci&oacute;n, condensaci&oacute;n y distribuci&oacute;n";
 answers[2] = choices[2][0];
 units[2] = "21";
 comments[2] = "Id Pregunta: 47. NULL";


//  Id pregunta: 79 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;Qu&eacute; red implementa la jerarqu&iacute;a absoluta?:";
 choices[3]= new Array();
 choices[3][0] = "En Y";
 choices[3][1] = "En cadena";
 choices[3][2] = "En c&iacute;rculo";
 choices[3][3] = "En rueda";
 answers[3] = choices[3][1];
 units[3] = "23";
 comments[3] = "Id Pregunta: 79. NULL";


//  Id pregunta: 87 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  &iquest;Qu&eacute; unidad funcional, dentro de las existentes habitualmente en la estructura inform&aacute;tica de un organismo p&uacute;blico, deber&iacute;a ejercer las funciones de control de calidad de los procesos, gesti&oacute;n de red y gesti&oacute;n de seguridad de datos y procesos?:";
 choices[4]= new Array();
 choices[4][0] = "Sistemas";
 choices[4][1] = "Desarrollo";
 choices[4][2] = "Operaciones/explotaci&oacute;n";
 choices[4][3] = "Soporte a usuarios";
 answers[4] = choices[4][0];
 units[4] = "26";
 comments[4] = "Id Pregunta: 87. ";


//  Id pregunta: 97 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  A un sistema de informaci&oacute;n definido como &quot; Sistemas orientados a la ayuda en la toma de decisiones espor&aacute;dicas u ocasionales &quot; corresponde al tipo de sistema de informaci&oacute;n:";
 choices[5]= new Array();
 choices[5][0] = "Sistemas orientados a la gesti&oacute;n de empresa o Management Information Systems (MIS)";
 choices[5][1] = "Sistemas orientados al proceso de transacciones o Transaction Processing Systems";
 choices[5][2] = "Sistemas de apoyo a la toma de decisiones o Decision Support Systems (DSS)";
 choices[5][3] = "Sistemas de apoyo a la direcci&oacute;n o Executive Support Systems (ESS)";
 answers[5] = choices[5][2];
 units[5] = "21";
 comments[5] = "Id Pregunta: 97. NULL";


//  Id pregunta: 98 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Al hablar de &quot;Metodolog&iacute;a de planificaci&oacute;n de capacidad&quot;, indicar cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[6]= new Array();
 choices[6][0] = "La metodolog&iacute;a Bench-Mark se usa para comparar distintos sistemas inform&aacute;ticos frente a una carga caracter&iacute;stica de una instalaci&oacute;n concreta que permite realizar mediciones en el ambiente real";
 choices[6][1] = "La metodolog&iacute;a de proyecci&oacute;n lineal se basa en leyes como las de Parkinson y Murphy";
 choices[6][2] = "La metodolog&iacute;a de proyecci&oacute;n lineal se puede aplicar para explicar fen&oacute;menos de comportamiento no lineal";
 choices[6][3] = "La metodolog&iacute;a Bench-Mark se basa en la utilizaci&oacute;n de programas para simular la realidad ";
 answers[6] = choices[6][0];
 units[6] = "25";
 comments[6] = "Id Pregunta: 98. ";


//  Id pregunta: 103 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  Algunas t&eacute;cnicas de ayuda a la toma de decisiones son:";
 choices[7]= new Array();
 choices[7][0] = "Brain-storming, o tormenta de ideas";
 choices[7][1] = "Teor&iacute;a de grafos y an&aacute;lisis de redes";
 choices[7][2] = "Teor&iacute;a de colas o de l&iacute;neas de espera";
 choices[7][3] = "Todas las anteriores";
 answers[7] = choices[7][3];
 units[7] = "23";
 comments[7] = "Id Pregunta: 103. NULL";


//  Id pregunta: 126 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  El an&aacute;lisis DAFO mide en una empresa:";
 choices[8]= new Array();
 choices[8][0] = "Decisiones, An&aacute;lisis, Fuerzas, Oportunidades";
 choices[8][1] = "Debilidades, Adaptaciones, Fallos, Opciones";
 choices[8][2] = "Decisiones, Amenazas, Fallos, Oportunidades";
 choices[8][3] = "Debilidades, Amenazas, Fuerzas, Oportunidades";
 answers[8] = choices[8][3];
 units[8] = "22";
 comments[8] = "Id Pregunta: 126. NULL";


//  Id pregunta: 150 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  El modelo de Nolan de cuatro etapas si lo representamos gr&aacute;ficamente tiene forma de:";
 choices[9]= new Array();
 choices[9][0] = "s";
 choices[9][1] = "n";
 choices[9][2] = "u";
 choices[9][3] = "z";
 answers[9] = choices[9][0];
 units[9] = "22";
 comments[9] = "Id Pregunta: 150. Nolan";


//  Id pregunta: 158 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  El punto que centraliza las comunicaciones de los usuarios con Sistemas de Informaci&oacute;n suele denominarse:";
 choices[10]= new Array();
 choices[10][0] = "Centro de control de red ";
 choices[10][1] = "Help desk";
 choices[10][2] = "Centro de contingencias";
 choices[10][3] = "Soporte de teleproceso";
 answers[10] = choices[10][1];
 units[10] = "26";
 comments[10] = "Id Pregunta: 158. ";


//  Id pregunta: 173 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  En cuanto al control de proyectos:";
 choices[11]= new Array();
 choices[11][0] = "El gr&aacute;fico de PERT est&aacute; basado en la representaci&oacute;n gr&aacute;fica de las duraciones de las etapas.";
 choices[11][1] = "El gr&aacute;fico de GANTT est&aacute; basado en la representaci&oacute;n gr&aacute;fica de las duraciones de las etapas.";
 choices[11][2] = "El gr&aacute;fico de Gantt consiste en una visualizaci&oacute;n del proyecto basada en las restricciones.";
 choices[11][3] = "Las respuestas 'a' y 'c' son correctas.";
 answers[11] = choices[11][1];
 units[11] = "27";
 comments[11] = "Id Pregunta: 173. ";


//  Id pregunta: 175 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  En el &aacute;mbito de la evoluci&oacute;n de la inform&aacute;tica en las organizaciones, se debe a Donovan un modelo que utiliza como variable:";
 choices[12]= new Array();
 choices[12][0] = "El presupuesto empleado en inform&aacute;tica";
 choices[12][1] = "La estructura organizativa";
 choices[12][2] = "El grado de distribuci&oacute;n";
 choices[12][3] = "El nivel de complejidad organizativa";
 answers[12] = choices[12][2];
 units[12] = "22";
 comments[12] = "Id Pregunta: 175. donovan - nolan";


//  Id pregunta: 177 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  En el &aacute;rea de los sistemas de informaci&oacute;n, &iquest;cu&aacute;l es el significado de las siglas MIS?:";
 choices[13]= new Array();
 choices[13][0] = "Manufacturing In Sequence";
 choices[13][1] = "Manufacturing Information System";
 choices[13][2] = "Management Information System";
 choices[13][3] = "Modelling Input System";
 answers[13] = choices[13][2];
 units[13] = "21";
 comments[13] = "Id Pregunta: 177. ";


//  Id pregunta: 185 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  En el modelo de Donovan la expresi&oacute;n 'mano amiga' se refiere a:";
 choices[14]= new Array();
 choices[14][0] = "Empresas que han optado por instalar de forma distribuida el hardware, y el usuario tiene poder de decisi&oacute;n";
 choices[14][1] = "Empresas en las que se ha descentralizado el hardware y el usuario tiene poder de decisi&oacute;n";
 choices[14][2] = "Empresas en las que se ha descentralizado el hardware y el desarrollo, pero el usuario no tiene poder de decisi&oacute;n";
 choices[14][3] = "Empresas en las que se ha descentralizado el hardware y el desarrollo y el usuario tiene poder de decisi&oacute;n";
 answers[14] = choices[14][1];
 units[14] = "22";
 comments[14] = "Id Pregunta: 185. donovan - nolan";


//  Id pregunta: 189 AÃ±o de creación de pregunta: 2004-01-01
 questions[15]= "16)  &iquest;Cu&aacute;l de las siguientes no es una t&eacute;cnica para la toma de decisiones individuales?";
 choices[15]= new Array();
 choices[15][0] = "Delphi";
 choices[15][1] = "Programaci&oacute;n lineal";
 choices[15][2] = "Teor&iacute;a de l&iacute;neas de espera";
 choices[15][3] = "An&aacute;lisis de redes";
 answers[15] = choices[15][0];
 units[15] = "23";
 comments[15] = "Id Pregunta: 189. Similar a examen TIC SS A 2003";


//  Id pregunta: 197 AÃ±o de creación de pregunta: 2004-01-01
 questions[16]= "17)  El t&eacute;rmino COBIT es un acr&oacute;nimo angl&oacute;fono que procede de los siguientes t&eacute;rminos, o significa lo siguiente en el idioma ingl&eacute;s:";
 choices[16]= new Array();
 choices[16][0] = "Computer Building Information Technology";
 choices[16][1] = "Computational Binary Translation";
 choices[16][2] = "Control Objetives for Information and Related Technology";
 choices[16][3] = "Committee of Business Information Technique";
 answers[16] = choices[16][2];
 units[16] = "21";
 comments[16] = "Id Pregunta: 197. Examen TIC MAP B 2004";


//  Id pregunta: 214 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  En la estructuraci&oacute;n vertical de un sistema de informaci&oacute;n:";
 choices[17]= new Array();
 choices[17][0] = "Se dispone de 3 niveles: operacional (procedimientos de rutina, grueso de tratamiento de datos), estrat&eacute;gico (toma de decisiones a corto-medio plazo) y t&aacute;ctico (toma de decisiones a largo plazo)";
 choices[17][1] = "Se dispone de 4 niveles: operacional, funcional, t&aacute;ctico y estrat&eacute;gico";
 choices[17][2] = "Se dispone de 3 niveles: operacional (decisiones que afectan a la rutina de tratamiento de datos), funcional (decisiones que afectan al funcionamiento de los subsistemas que componen el sistema) y estrat&eacute;gico (decisiones que afectan a la estrategia social";
 choices[17][3] = "Ninguna de las anteriores";
 answers[17] = choices[17][3];
 units[17] = "21";
 comments[17] = "Id Pregunta: 214. ";


//  Id pregunta: 221 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  En la planificaci&oacute;n de sistemas, la demanda latente produce:";
 choices[18]= new Array();
 choices[18][0] = "Un crecimiento reprimido.";
 choices[18][1] = "Un crecimiento evolutivo.";
 choices[18][2] = "Un crecimiento gradual.";
 choices[18][3] = "Un crecimiento no gradual.";
 answers[18] = choices[18][3];
 units[18] = "27";
 comments[18] = "Id Pregunta: 221. ";


//  Id pregunta: 229 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  En las t&eacute;cnicas de negociaci&oacute;n y de resoluci&oacute;n de conflictos, el 'empowerment' consiste en:";
 choices[19]= new Array();
 choices[19][0] = "Potenciar el di&aacute;logo con reuniones peri&oacute;dicas";
 choices[19][1] = "Establecer una pauta a seguir como norma general indiscutible";
 choices[19][2] = "Dar poder a los subordinados para que se impliquen en la organizaci&oacute;n";
 choices[19][3] = "Nada de lo anterior es correcto";
 answers[19] = choices[19][2];
 units[19] = "28";
 comments[19] = "Id Pregunta: 229. negociaci&oacute;n";


//  Id pregunta: 240 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  En un gr&aacute;fico PERT los nodos representan:";
 choices[20]= new Array();
 choices[20][0] = "Actividades.";
 choices[20][1] = "Sucesos.";
 choices[20][2] = "El camino cr&iacute;tico.";
 choices[20][3] = "La holgura de una actividad.";
 answers[20] = choices[20][1];
 units[20] = "27";
 comments[20] = "Id Pregunta: 240. ";


//  Id pregunta: 241 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  En un sistema de informaci&oacute;n:";
 choices[21]= new Array();
 choices[21][0] = "La integraci&oacute;n permite mayor eficiencia conjunta e interrelaci&oacute;n m&aacute;s efectiva de actividades";
 choices[21][1] = "La integraci&oacute;n no presenta vulnerabilidades a incertidumbres por la flexibilidad que ofrece";
 choices[21][2] = "Se debe primar en todo momento la integraci&oacute;n frente a la independencia";
 choices[21][3] = "Se debe primar en todo momento la independencia frente a la integraci&oacute;n";
 answers[21] = choices[21][0];
 units[21] = "21";
 comments[21] = "Id Pregunta: 241. ";


//  Id pregunta: 243 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  En un sistema de informaci&oacute;n:";
 choices[22]= new Array();
 choices[22][0] = "En el nivel operacional se toman decisiones a plazo relativamente corto";
 choices[22][1] = "En el nivel estrat&eacute;gico se toman decisiones a plazo relativamente corto";
 choices[22][2] = "En el nivel operacional se recogen datos del sistema real";
 choices[22][3] = "En el nivel t&aacute;ctico se toman decisiones a largo plazo";
 answers[22] = choices[22][2];
 units[22] = "21";
 comments[22] = "Id Pregunta: 243. ";


//  Id pregunta: 255 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Entre los problemas que genera el actuar sobre las cosas (acting on) en lugar de actuar con las cosas (acting with) se encuentran:";
 choices[23]= new Array();
 choices[23][0] = "Necesidad de establecer relaciones entre s&iacute;mbolos y realidad";
 choices[23][1] = "Aislamiento emocional e intelectual del trabajador";
 choices[23][2] = "Las 2 anteriores";
 choices[23][3] = "Ninguna de las anteriores";
 answers[23] = choices[23][2];
 units[23] = "24";
 comments[23] = "Id Pregunta: 255. ";


//  Id pregunta: 258 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Es caracter&iacute;stico de las organizaciones basadas en la informaci&oacute;n:";
 choices[24]= new Array();
 choices[24][0] = "Especialistas que adquieren poder mediante el control de la informaci&oacute;n";
 choices[24][1] = "Gestores que adquieren poder mediante la informaci&oacute;n que les llega";
 choices[24][2] = "Grupos de personas que trabajan juntas para resolver un problema y luego se dispersan cuando el trabajo est&aacute; hecho";
 choices[24][3] = "Especialistas que dirigen y organizan su trabajo mediante interacci&oacute;n con sus colegas";
 answers[24] = choices[24][2];
 units[24] = "22";
 comments[24] = "Id Pregunta: 258. ";


//  Id pregunta: 267 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  Indicar cu&aacute;l no es una t&eacute;cnica para la toma individual de decisiones:";
 choices[25]= new Array();
 choices[25][0] = "T&eacute;cnica Delphi";
 choices[25][1] = "An&aacute;lisis de redes";
 choices[25][2] = "Teor&iacute;a de probabilidad";
 choices[25][3] = "Programaci&oacute;n lineal";
 answers[25] = choices[25][0];
 units[25] = "23";
 comments[25] = "Id Pregunta: 267. ";


//  Id pregunta: 288 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  La comunicaci&oacute;n descendente se da en uno de los modelos de comunicaci&oacute;n siguientes:";
 choices[26]= new Array();
 choices[26][0] = "Comunicaci&oacute;n en rueda";
 choices[26][1] = "Comunicaci&oacute;n en Y";
 choices[26][2] = "Comunicaci&oacute;n en cadena";
 choices[26][3] = "Comunicaci&oacute;n en c&iacute;rculo";
 answers[26] = choices[26][2];
 units[26] = "23";
 comments[26] = "Id Pregunta: 288. ";


//  Id pregunta: 292 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  La decisi&oacute;n sobre si la estructura inform&aacute;tica de una organizaci&oacute;n debe ser centralizada o descentralizada, debe tomarse en la etapa de:";
 choices[27]= new Array();
 choices[27][0] = "Planificaci&oacute;n del sistema";
 choices[27][1] = "Especificaci&oacute;n del sistema";
 choices[27][2] = "Dise&ntilde;o del sistema";
 choices[27][3] = "Codificaci&oacute;n del sistema";
 answers[27] = choices[27][0];
 units[27] = "21";
 comments[27] = "Id Pregunta: 292. ";


//  Id pregunta: 334 AÃ±o de creación de pregunta: 2004-01-01
 questions[28]= "29)  NO es un modelo para la toma grupal de decisiones:";
 choices[28]= new Array();
 choices[28][0] = "Tormenta de ideas";
 choices[28][1] = "An&aacute;lisis de redes";
 choices[28][2] = "T&eacute;cnica nominal de grupo";
 choices[28][3] = "T&eacute;cnica Delphi";
 answers[28] = choices[28][1];
 units[28] = "23";
 comments[28] = "Id Pregunta: 334. ";


//  Id pregunta: 346 AÃ±o de creación de pregunta: 2002-01-01
 questions[29]= "30)  La t&eacute;cnica de direcci&oacute;n en la etapa de madurez es:";
 choices[29]= new Array();
 choices[29][0] = "Orientada a ventas";
 choices[29][1] = "Informal";
 choices[29][2] = "Orientada a los recursos";
 choices[29][3] = "Orientada al control";
 answers[29] = choices[29][2];
 units[29] = "22";
 comments[29] = "Id Pregunta: 346. ";


//  Id pregunta: 361 AÃ±o de creación de pregunta: 2002-01-01
 questions[30]= "31)  Las t&eacute;cnicas de Gantt y Pert ayudan a:";
 choices[30]= new Array();
 choices[30][0] = "Fijar la duraci&oacute;n de cada etapa";
 choices[30][1] = "Estimar cu&aacute;l ser&aacute; la tarea cr&iacute;tica de un proyecto";
 choices[30][2] = "Estimar la duraci&oacute;n de un proyecto";
 choices[30][3] = "Estimar el costo de cada etapa";
 answers[30] = choices[30][2];
 units[30] = "28";
 comments[30] = "Id Pregunta: 361. ";


//  Id pregunta: 365 AÃ±o de creación de pregunta: 2002-01-01
 questions[31]= "32)  Los criterios de Savage, Wald, Laplace, Hurwicz&hellip;, est&aacute;n relacionados con:";
 choices[31]= new Array();
 choices[31][0] = "Teor&iacute;as de medici&oacute;n del coste del HW y SW";
 choices[31][1] = "Teor&iacute;as de optimizaci&oacute;n de los recursos humanos";
 choices[31][2] = "Teor&iacute;as de la decisi&oacute;n ";
 choices[31][3] = "Teor&iacute;as de calidad del SW";
 answers[31] = choices[31][2];
 units[31] = "21";
 comments[31] = "Id Pregunta: 365. ";


//  Id pregunta: 371 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  Los gr&aacute;ficos de Gantt son representaciones gr&aacute;ficas en las que en el eje horizontal se representa el tiempo, y en el vertical las diferentes tareas  con el tiempo de inicio, ejecuci&oacute;n y final, y se denominan as&iacute; debido a:";
 choices[32]= new Array();
 choices[32][0] = "Son las siglas de Global Approach Near Tasks Timing, t&eacute;cnica desarrollada por General Electric";
 choices[32][1] = "Procede de su dise&ntilde;ador Henry Laurence Gantt. Ingeniero estadounidense (1861-1919) que lo utiliz&oacute; para la programaci&oacute;n de tareas en la costrucci&oacute;n de buques durante la primera guerra mundial";
 choices[32][2] = "Procede del desarrollo de t&eacute;cnicas del Pent&aacute;gono y se dise&ntilde;&oacute; como subconjunto de los gr&aacute;ficos PERT en el proyecto del misil POLARIS";
 choices[32][3] = "Es un subconjunto de los diagramas utilizados en las t&eacute;cnicas CPM y su nombre procede de la ciudad donde estaba ubicada la base de desarrollo militar donde se utilizaron por primera vez. (Gantt - Nevada)";
 answers[32] = choices[32][1];
 units[32] = "28";
 comments[32] = "Id Pregunta: 371. ";


//  Id pregunta: 389 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  No es un instrumento b&aacute;sico de un DSS orientado a datos:";
 choices[33]= new Array();
 choices[33][0] = "Informe resumen";
 choices[33][1] = "Informe de relaci&oacute;n";
 choices[33][2] = "Informe de excepci&oacute;n";
 choices[33][3] = "Informe gr&aacute;fico";
 answers[33] = choices[33][1];
 units[33] = "21";
 comments[33] = "Id Pregunta: 389. ";


//  Id pregunta: 410 AÃ±o de creación de pregunta: 2002-01-01
 questions[34]= "35)  Respecto al funcionamiento de un Centro de Sistemas de Informaci&oacute;n:";
 choices[34]= new Array();
 choices[34][0] = "En la organizaci&oacute;n funcional existe un &uacute;nico m&eacute;todo generalmente aceptado de establecer la organizaci&oacute;n de funciones: an&aacute;lisis, dise&ntilde;o, programaci&oacute;n e instalaci&oacute;n";
 choices[34][1] = "El prop&oacute;sito de una organizaci&oacute;n proyecto-funcional es conseguir las ventajas de una organizaci&oacute;n funcional evitando sus desventajas";
 choices[34][2] = "La organizaci&oacute;n proyecto-staff es adecuada para grandes &aacute;reas de desarrollo";
 choices[34][3] = "Todas las anteriores";
 answers[34] = choices[34][1];
 units[34] = "26";
 comments[34] = "Id Pregunta: 410. ";


//  Id pregunta: 426 AÃ±o de creación de pregunta: 2002-01-01
 questions[35]= "36)  Seg&uacute;n el modelo de Nolan en cuatro etapas sobre la evoluci&oacute;n de la inform&aacute;tica en las organizaciones, las t&eacute;cnicas de direcci&oacute;n que se aplican en la fase de expansi&oacute;n son:";
 choices[35]= new Array();
 choices[35][0] = "Orientadas a ventas";
 choices[35][1] = "Orientadas al control";
 choices[35][2] = "Orientadas a los recursos";
 choices[35][3] = "Informales";
 answers[35] = choices[35][0];
 units[35] = "22";
 comments[35] = "Id Pregunta: 426. nolan";


//  Id pregunta: 430 AÃ±o de creación de pregunta: 2002-01-01
 questions[36]= "37)  Seg&uacute;n Elton Mayo, el v&iacute;nculo que permite unificar los esfuerzos de los trabajadores en la consecuci&oacute;n de un fin com&uacute;n es:";
 choices[36]= new Array();
 choices[36][0] = "La autoridad";
 choices[36][1] = "La motivaci&oacute;n";
 choices[36][2] = "El deseo de autorrealizaci&oacute;n";
 choices[36][3] = "La comunicaci&oacute;n";
 answers[36] = choices[36][3];
 units[36] = "22";
 comments[36] = "Id Pregunta: 430. ";


//  Id pregunta: 431 AÃ±o de creación de pregunta: 2002-01-01
 questions[37]= "38)  Seg&uacute;n la clasificaci&oacute;n de directivos establecida por Lawrence Milier, el tipo de directivo id&oacute;neo para la creaci&oacute;n inicial de una empresa es el:";
 choices[37]= new Array();
 choices[37][0] = "B&aacute;rbaro";
 choices[37][1] = "Profeta";
 choices[37][2] = "Administrador";
 choices[37][3] = "Gestor";
 answers[37] = choices[37][1];
 units[37] = "22";
 comments[37] = "Id Pregunta: 431. ";


//  Id pregunta: 458 AÃ±o de creación de pregunta: 2002-01-01
 questions[38]= "39)  Si se desea una estructura organizacional caracterizada por su orientaci&oacute;n a los usuarios se establecer&aacute; una organizaci&oacute;n:";
 choices[38]= new Array();
 choices[38][0] = "Funcional";
 choices[38][1] = "Proyecto-staff";
 choices[38][2] = "Proyecto-funcional";
 choices[38][3] = "Por aplicaciones";
 answers[38] = choices[38][3];
 units[38] = "26";
 comments[38] = "Id Pregunta: 458. ";


//  Id pregunta: 460 AÃ±o de creación de pregunta: 2002-01-01
 questions[39]= "40)  Si una tarea dentro de un diagrama PERT excede su duraci&oacute;n en un tiempo:";
 choices[39]= new Array();
 choices[39][0] = "La duraci&oacute;n del camino cr&iacute;tico no variar&aacute;";
 choices[39][1] = "La duraci&oacute;n del camino cr&iacute;tico variar&aacute; en la misma magnitud";
 choices[39][2] = "No se puede afirmar qu&eacute; ocurrir&aacute; con la duraci&oacute;n del camino cr&iacute;tico";
 choices[39][3] = "Se necesita que otra tarea disminuya su duraci&oacute;n en la misma magnitud para que la duracci&oacute;n del proyecto no varie";
 answers[39] = choices[39][2];
 units[39] = "28";
 comments[39] = "Id Pregunta: 460. ";


//  Id pregunta: 485 AÃ±o de creación de pregunta: 2002-01-01
 questions[40]= "41)  &iquest;D&oacute;nde ubicar&iacute;a al Centro de Control y Gesti&oacute;n de Red (Network Management System)?:";
 choices[40]= new Array();
 choices[40][0] = "Dentro del staff del director de sistemas de informaci&oacute;n";
 choices[40][1] = "Dentro del departamento de an&aacute;lisis y programaci&oacute;n";
 choices[40][2] = "En el departamento de explotaci&oacute;n";
 choices[40][3] = "En el departamento de planificaci&oacute;n";
 answers[40] = choices[40][2];
 units[40] = "26";
 comments[40] = "Id Pregunta: 485. ";


//  Id pregunta: 504 AÃ±o de creación de pregunta: 2003-01-01
 questions[41]= "42)  En la planificaci&oacute;n de un  Proyecto lo cierto es";
 choices[41]= new Array();
 choices[41][0] = "El diagrama de Gantt expresa el camino cr&iacute;tico";
 choices[41][1] = "Una tarea no perteneciente al camino cr&iacute;tico puede retrasar la finalizaci&oacute;n del proyecto";
 choices[41][2] = "En el diagrama de PERT los arcos no son dirigidos";
 choices[41][3] = "El gr&aacute;fico de Gant se basa en la representaci&oacute;n de restricciones";
 answers[41] = choices[41][1];
 units[41] = "28";
 comments[41] = "Id Pregunta: 504. ";


//  Id pregunta: 535 AÃ±o de creación de pregunta: 2004-01-01
 questions[42]= "43)  &iquest;Cu&aacute;l es la variable m&aacute;s importante en un modelo PERT?";
 choices[42]= new Array();
 choices[42][0] = "riesgo";
 choices[42][1] = "coste";
 choices[42][2] = "impacto";
 choices[42][3] = "tiempo";
 answers[42] = choices[42][3];
 units[42] = "28";
 comments[42] = "Id Pregunta: 535. ";


//  Id pregunta: 538 AÃ±o de creación de pregunta: 2004-01-01
 questions[43]= "44)  La propiedad de un proyecto y de los aplicativos resultantes del ciclo de vida del software corresponde a:";
 choices[43]= new Array();
 choices[43][0] = "Departamento de Inform&aacute;tica";
 choices[43][1] = "Direcci&oacute;n del Departamento usuario";
 choices[43][2] = "Comit&eacute; de Direcci&oacute;n del Proyecto";
 choices[43][3] = "Compartido por todos";
 answers[43] = choices[43][1];
 units[43] = "26";
 comments[43] = "Id Pregunta: 538. ";


//  Id pregunta: 552 AÃ±o de creación de pregunta: 2004-01-01
 questions[44]= "45)  El presupuesto de un proyecto inform&aacute;tico nunca se calcula en base a:";
 choices[44]= new Array();
 choices[44][0] = "Aproximaciones lineales de proyectos diferentes";
 choices[44][1] = "Proyectos similares previos abordados por la organizaci&oacute;n";
 choices[44][2] = "Consultas a empresas significativas del mercado";
 choices[44][3] = "Costes separados de inversi&oacute;n en m&aacute;quinas, licencias de software y meses/hombre";
 answers[44] = choices[44][0];
 units[44] = "28";
 comments[44] = "Id Pregunta: 552. MAP-B 2003";


//  Id pregunta: 560 AÃ±o de creación de pregunta: 2006-01-01
 questions[45]= "46)  Cual de las siguientes opciones no es una ventaja de un sistema integrado";
 choices[45]= new Array();
 choices[45][0] = "Mayor eficiencia conjunta y una interrelaci&oacute;n m&aacute;s efectiva de actividades entre subsistemas.";
 choices[45][1] = "Incorporaci&oacute;n de h&aacute;bitos para compartir ampliamente los recursos, obteniendo beneficios potenciales, debidos aeconom&iacute;as de escala y especializaci&oacute;n.";
 choices[45][2] = "Posibilidad de abordar las decisiones desde la perspectiva del sistema com&uacute;n conjunto en vez de sobre una basesub&oacute;ptima que utilice solamente informaci&oacute;n y objetivos locales.";
 choices[45][3] = "Sistemas mas simples evitando riesgos a&ntilde;adidos";
 answers[45] = choices[45][3];
 units[45] = "21";
 comments[45] = "Id Pregunta: 560. ";


//  Id pregunta: 562 AÃ±o de creación de pregunta: 2006-01-01
 questions[46]= "47)  Seg&uacute;n AlvinToffler las organizaciones tradicionales tienen dos elementos caracter&iacute;sticos";
 choices[46]= new Array();
 choices[46][0] = "jararqu&iacute;as y las relaciones entre las jerarqu&iacute;as";
 choices[46][1] = "los especialistas y los gerentes";
 choices[46][2] = "Cub&iacute;culos y canales";
 choices[46][3] = "controles y procedimientos";
 answers[46] = choices[46][2];
 units[46] = "22";
 comments[46] = "Id Pregunta: 562. ";


//  Id pregunta: 563 AÃ±o de creación de pregunta: 2006-01-01
 questions[47]= "48)  La organizaciones dentro de las administraciones p&uacute;blicas necesitan directivos que";
 choices[47]= new Array();
 choices[47][0] = "Sean ante todo jefes que se sustenten en la legalidad estatutaria";
 choices[47][1] = "Sean l&iacute;deres que se sustenten en la legalidad estatutaria";
 choices[47][2] = "Lideres que permitan el desarrollo de la misi&oacute;n  y visi&oacute;n de la administraci&oacute;n";
 choices[47][3] = "Jefes que en periodo de cambio sean coherentes con el prop&oacute;sito de la organizaci&oacute;n";
 answers[47] = choices[47][2];
 units[47] = "22";
 comments[47] = "Id Pregunta: 563. ";


//  Id pregunta: 564 AÃ±o de creación de pregunta: 2006-01-01
 questions[48]= "49)  En las organizaciones basadas en la informaci&oacute;n, los informes";
 choices[48]= new Array();
 choices[48][0] = "No ser&aacute;n necesarios dado que el control vendr&aacute; implicito en los propios sistemas";
 choices[48][1] = "Los mandos intermedios tendr&aacute;n la oportunidad de realizar informes m&aacute;s fiables";
 choices[48][2] = "Los mandos intermedios podr&aacute;n proporcionar datos m&aacute;s fiables  y exactos";
 choices[48][3] = "permitir&aacute;n avanzar en los aspectos de creatividad, motivaci&oacute;n y calidad.";
 answers[48] = choices[48][3];
 units[48] = "22";
 comments[48] = "Id Pregunta: 564. ";


//  Id pregunta: 570 AÃ±o de creación de pregunta: 2006-01-01
 questions[49]= "50)  Seg&uacute;n Stephen P. Robbins cual de los siguientes no es un paso en el proceso de planificaci&oacute;n estrat&eacute;gica";
 choices[49]= new Array();
 choices[49][0] = "Definir las misiones de la empresa seg&uacute;n las estrategias";
 choices[49][1] = "Establecer objetivos";
 choices[49][2] = "Instrumentar la estrategia.";
 choices[49][3] = "Examinar el ambiente";
 answers[49] = choices[49][0];
 units[49] = "23";
 comments[49] = "Id Pregunta: 570. ";


//  Id pregunta: 571 AÃ±o de creación de pregunta: 2006-01-01
 questions[50]= "51)   Stephen P. Robbins aport&oacute; a los sistemas de informaci&oacute;n";
 choices[50]= new Array();
 choices[50][0] = "Algoritmos de ordenaci&oacute;n num&eacute;rica";
 choices[50][1] = "Una m&eacute;todo de  de gesti&oacute;n de colas";
 choices[50][2] = "Estudios sobre planificaci&oacute;n estrat&eacute;gica";
 choices[50][3] = "Un m&eacute;todo de planificaci&oacute;n de procesos";
 answers[50] = choices[50][2];
 units[50] = "23";
 comments[50] = "Id Pregunta: 571. ";


//  Id pregunta: 578 AÃ±o de creación de pregunta: 2006-01-01
 questions[51]= "52)  La empresa Du Pont inici&oacute; un estudio sobre t&eacute;cnicas de aplicaci&oacute;n de ordenadores a la planificaci&oacute;n y programaci&oacute;n de proyectos, que recibi&oacute; el nombre de:";
 choices[51]= new Array();
 choices[51][0] = "CPM (Critical Path Method).";
 choices[51][1] = "PERT.";
 choices[51][2] = "Diagrama de Gant.";
 choices[51][3] = "PROPS.";
 answers[51] = choices[51][0];
 units[51] = "27";
 comments[51] = "Id Pregunta: 578. ";


//  Id pregunta: 581 AÃ±o de creación de pregunta: 2006-01-01
 questions[52]= "53)  Dentro del an&aacute;lisis de un sistema de informaci&oacute;n automatizado, de una aplicaci&oacute;n o de un proceso no serealiza b&aacute;sicamente, dentro de un esquema de modelo conceptual de datos, la siguiente tarea:";
 choices[52]= new Array();
 choices[52][0] = "Estudio del sistema de informaci&oacute;n preexistente";
 choices[52][1] = "Descripci&oacute;n procedural de cada unidad de tratamiento (programa).";
 choices[52][2] = "Dise&ntilde;o racional y normalizado del nuevo sistema de informaci&oacute;n";
 choices[52][3] = "Descripci&oacute;n generalizada de cada proceso.";
 answers[52] = choices[52][1];
 units[52] = "26";
 comments[52] = "Id Pregunta: 581. ";


//  Id pregunta: 584 AÃ±o de creación de pregunta: 2006-01-01
 questions[53]= "54)  &iquest;En qu&eacute; situaciones es necesario un equipo de integraci&oacute;n de sistemas?";
 choices[53]= new Array();
 choices[53][0] = "En entorno de microinform&aacute;tica";
 choices[53][1] = "Cuando se trabaja con m&aacute;quinas virtuales separadas";
 choices[53][2] = "Cuando se engloban varios componentes o varios sistemas sobre una misma plataforma";
 choices[53][3] = "Cuando se sube a producci&oacute;n sistemas especialmente cr&iacute;ticos";
 answers[53] = choices[53][2];
 units[53] = "26";
 comments[53] = "Id Pregunta: 584. ";


//  Id pregunta: 587 AÃ±o de creación de pregunta: 2006-01-01
 questions[54]= "55)  Puede una incidencia pasar del nivel 1 al nivel 3 ";
 choices[54]= new Array();
 choices[54][0] = "No, siempre tiene que pasar por el nivel 2";
 choices[54][1] = "S&oacute;lo si no hay nadie disponible en el nivel 2";
 choices[54][2] = "En aquellos casos acordados en los tres niveles";
 choices[54][3] = "Siempre que as&iacute; lo consideren desde el nivel 1";
 answers[54] = choices[54][2];
 units[54] = "26";
 comments[54] = "Id Pregunta: 587. ";


//  Id pregunta: 589 AÃ±o de creación de pregunta: 2006-01-01
 questions[55]= "56)  &iquest;Cu&aacute;l de las siguientes no es una herramienta de control de proyectos?";
 choices[55]= new Array();
 choices[55][0] = "Wrike.";
 choices[55][1] = "Microsoft Project.";
 choices[55][2] = "Openproj.";
 choices[55][3] = "Stradis.";
 answers[55] = choices[55][3];
 units[55] = "27";
 comments[55] = "Id Pregunta: 589. ";


//  Id pregunta: 590 AÃ±o de creación de pregunta: 2006-01-01
 questions[56]= "57)  Entre las actividades de planificaci&oacute;n de proyectos no se encuentra:";
 choices[56]= new Array();
 choices[56][0] = "An&aacute;lisis operacional.";
 choices[56][1] = "Dise&ntilde;o t&eacute;cnico.";
 choices[56][2] = "An&aacute;lisis de riesgos.";
 choices[56][3] = "Definici&oacute;n de los requerimientos.";
 answers[56] = choices[56][1];
 units[56] = "27";
 comments[56] = "Id Pregunta: 590. ";


//  Id pregunta: 593 AÃ±o de creación de pregunta: 2006-01-01
 questions[57]= "58)  La duraci&oacute;n total de un proyecto es:";
 choices[57]= new Array();
 choices[57][0] = "La del camino del gr&aacute;fico de Pert que m&aacute;s tareas realiza";
 choices[57][1] = "La de la tarea cr&iacute;tica";
 choices[57][2] = "La suma de la duraci&oacute;n de todas las tareas de un proyecto";
 choices[57][3] = "la del camino critico en el gr&aacute;fico de Pert";
 answers[57] = choices[57][3];
 units[57] = "28";
 comments[57] = "Id Pregunta: 593. ";


//  Id pregunta: 1898 AÃ±o de creación de pregunta: 2006-01-01
 questions[58]= "59)  &iquest;Cual es la tecnica basada en software que permite a un CAU telef&oacute;nico tomar el control del ordenador de un usuario para mostrarle algo?";
 choices[58]= new Array();
 choices[58][0] = "despertar remoto (remote wakeup)";
 choices[58][1] = "navegaci&oacute;n colaborativa";
 choices[58][2] = "Invocaci&oacute;n Remota de M&eacute;todo (RMI)";
 choices[58][3] = "Control de visualizaci&oacute;n";
 answers[58] = choices[58][1];
 units[58] = "26";
 comments[58] = "Id Pregunta: 1898. ";


//  Id pregunta: 2045 AÃ±o de creación de pregunta: 2004-01-01
 questions[59]= "60)  Una Organizaci&oacute;n que este en el nivel 1 (Inicial) del Modelo de Capacidad de Madurez (CMM: Computer Capability Model) en el desarrollo del software, est&aacute;:";
 choices[59]= new Array();
 choices[59][0] = "En una fase preliminar de determinaci&oacute;n de la viabilidad del proyecto";
 choices[59][1] = "En una situaci&oacute;n donde el proyecto esta conforme a sus especificaciones originales y no ha sufrido todav&iacute;a modificaciones";
 choices[59][2] = "En una situaci&oacute;n ideal, con altos estandares de gesti&oacute;n y calidad implementados";
 choices[59][3] = "En una situaci&oacute;n en la que no se hace ning&uacute;n esfuerzo en la garant&iacute;a de calidad y gesti&oacute;n de proyectos";
 answers[59] = choices[59][3];
 units[59] = "27";
 comments[59] = "Id Pregunta: 2045. Pregunta TIC-B 2003";


//  Id pregunta: 2169 AÃ±o de creación de pregunta: 2002-01-01
 questions[60]= "61)  Indique la afirmaci&oacute;n verdadera relativa a la Gesti&oacute;n de la Documentaci&oacute;n de un proyecto o sistema:";
 choices[60]= new Array();
 choices[60][0] = "La gesti&oacute;n de configuraci&oacute;n y control de versiones se refiere &uacute;nicamente al producto software y no a la documentaci&oacute;n";
 choices[60][1] = "La documentaci&oacute;n producida durante el desarrollo de un proyecto es independiente de la metodolog&iacute;a empleada";
 choices[60][2] = "El documento de requisitos de sistema es anterior al documento de requisitos de usuario";
 choices[60][3] = "La documentaci&oacute;n debe entenderse como todos los productos resultantes de las tareas realizadas, ya sean informes, programas, juegos de pruebas, gr&aacute;ficos, etc";
 answers[60] = choices[60][3];
 units[60] = "95,28";
 comments[60] = "Id Pregunta: 2169. ";


//  Id pregunta: 2476 AÃ±o de creación de pregunta: 2002-01-01
 questions[61]= "62)  Para evaluar el comportamiento de un sistema inform&aacute;tico se utilizan diferentes variables. Una de las siguientes no es utilizada para este fin:";
 choices[61]= new Array();
 choices[61][0] = "Factor de cola";
 choices[61][1] = "Overhead";
 choices[61][2] = "Swapping";
 choices[61][3] = "Triggers";
 answers[61] = choices[61][3];
 units[61] = "26";
 comments[61] = "Id Pregunta: 2476. Preparatic XVII";


//  Id pregunta: 3604 AÃ±o de creación de pregunta: 2002-01-01
 questions[62]= "63)  La f&oacute;rmula de Little es:";
 choices[62]= new Array();
 choices[62][0] = "El producto del n&uacute;mero de usuarios por su tiempo en el sistema";
 choices[62][1] = "El producto de tiempo medio de servicio y n&uacute;mero de usuarios que llegan al sistema";
 choices[62][2] = "El producto de tiempo medio de espera y n&uacute;mero de usuarios que llegan al sistema por unidad de tiempo";
 choices[62][3] = "Ninguna de las anteriores es v&aacute;lida";
 answers[62] = choices[62][2];
 units[62] = "26";
 comments[62] = "Id Pregunta: 3604. *: Formula de LITTLE";


//  Id pregunta: 4325 AÃ±o de creación de pregunta: 2007-01-01
 questions[63]= "64)  Entre las capacidades que deben ser consideradas por el Administrador de una base de datos para evaluar la seguridad e integridad de los datos de un SGBD, no se encuentra...";
 choices[63]= new Array();
 choices[63][0] = "Control de concurrencia";
 choices[63][1] = "Control de herencia.";
 choices[63][2] = "Control de acceso.";
 choices[63][3] = "Las facilidades de cifrado.";
 answers[63] = choices[63][1];
 units[63] = "26,57";
 comments[63] = "Id Pregunta: 4325. ";


//  Id pregunta: 4442 AÃ±o de creación de pregunta: 2007-01-01
 questions[64]= "65)  Dentro de las t&eacute;cnicas de planificaci&oacute;n de proyectos, podr&iacute;amos decir que una actividad es cr&iacute;tica si:";
 choices[64]= new Array();
 choices[64][0] = "No se puede cambiar sus instantes de comienzo y finalizaci&oacute;n sin modificar Ia duraci&oacute;n total del proyecto.";
 choices[64][1] = "Es la m&aacute;s corta del proyecto.";
 choices[64][2] = "Indica el fin de Ia fase de verificaci&oacute;n y el inicio de Ia fase de validaci&oacute;n.";
 choices[64][3] = "Requiere el mayor n&uacute;mero de recursos humanos para ser realizada.";
 answers[64] = choices[64][0];
 units[64] = "27";
 comments[64] = "Id Pregunta: 4442. Castilla la mancha 06";


//  Id pregunta: 4697 AÃ±o de creación de pregunta: 2007-01-01
 questions[65]= "66)  Los sistemas colaborativos buscan";
 choices[65]= new Array();
 choices[65][0] = "Que todo el mundo participe en la toma de decisiones";
 choices[65][1] = "La puesta a disposici&oacute;n de un gran volumen de informaci&oacute;n.";
 choices[65][2] = " Integrar el trabajo de muchos usuarios concurrentes en un solo proyecto.";
 choices[65][3] = "El despliegue de un sistema de informaci&oacute;n que abarque a todo el personal de la organizaci&oacute;n.";
 answers[65] = choices[65][2];
 units[65] = "21";
 comments[65] = "Id Pregunta: 4697. Examen 2006 JCYL";


//  Id pregunta: 4725 AÃ±o de creación de pregunta: 2007-01-01
 questions[66]= "67)  &iquest;Cu&aacute;ndo analizar&iacute;amos los recursos de la organizaci&oacute;n?";
 choices[66]= new Array();
 choices[66][0] = "Cuando ejecutemos un desarrollo, para determinar el costo.";
 choices[66][1] = "Al valorar los recursos que se han consumido.";
 choices[66][2] = "Para ver la forma de materializar un desarrollo.";
 choices[66][3] = "Cuando queramos hacer una programaci&oacute;n estrat&eacute;gica.";
 answers[66] = choices[66][3];
 units[66] = "27";
 comments[66] = "Id Pregunta: 4725. Examen 2006 JCYL";


//  Id pregunta: 4786 AÃ±o de creación de pregunta: 2007-01-01
 questions[67]= "68)  Seg&uacute;n La t&eacute;cnica de estimaci&oacute;n Mark II de Puntos Funci&oacute;n, a cada atributo se le asigna un valor entre:";
 choices[67]= new Array();
 choices[67][0] = "1 y 5.";
 choices[67][1] = "1 y 8.";
 choices[67][2] = "0 y 8.";
 choices[67][3] = "0 y 5.";
 answers[67] = choices[67][3];
 units[67] = "27";
 comments[67] = "Id Pregunta: 4786. Castilla la Mancha B 06";


//  Id pregunta: 5418 AÃ±o de creación de pregunta: 2003-01-01
 questions[68]= "69)  La planificaci&oacute;n y gesti&oacute;n de un proyecto se encarga a una persona, que denominaremos &quot;Jefe de proyecto&quot;. El Plan de proyecto contendr&aacute;:";
 choices[68]= new Array();
 choices[68][0] = "Un grafico de Gant para estimar el coste, otro de PERT para las restricciones y usaremos COCOMO para las  etapas.";
 choices[68][1] = "Estrictamente la Metodolog&iacute;a que el Departamento especifique.";
 choices[68][2] = "Un grafico de GANTT para las etapas, un gr&aacute;fico de PERT para la representaci&oacute;n de las restricciones y usaremos COCOMO para estimar el coste.";
 choices[68][3] = "La Metodolog&iacute;a del Departamento que se suministre v&iacute;a web.";
 answers[68] = choices[68][2];
 units[68] = "27";
 comments[68] = "Id Pregunta: 5418. Castilla y Le&oacute;n";


//  Id pregunta: 5439 AÃ±o de creación de pregunta: 2003-01-01
 questions[69]= "70)  Una de las primeras personas en desarrollar un concepto de la sociedad de la informaci&oacute;n fue el economista";
 choices[69]= new Array();
 choices[69][0] = "Fritz Machlup";
 choices[69][1] = "Charles Babbage";
 choices[69][2] = "Herman Hollerith";
 choices[69][3] = "Howard Aiken";
 answers[69] = choices[69][0];
 units[69] = "21";
 comments[69] = "Id Pregunta: 5439. Castilla y Le&oacute;n";


//  Id pregunta: 6060 AÃ±o de creación de pregunta: 2010-01-01
 questions[70]= "71)  El modelo de capacidad y madurez (CMM, Capability Maturity Model) agrupa las &aacute;reas de proceso en 5 niveles de madurez, que son los siguientes:";
 choices[70]= new Array();
 choices[70][0] = "Inicial, repetible, definido, gestionado y optimizado.";
 choices[70][1] = "Inicial, repetible, eficaz, eficiente y optimizado.";
 choices[70][2] = "Inicial, definido, medido, adaptado y optimizado.";
 choices[70][3] = "Inicial, repetible, comprometido, gestionado y optimizado.";
 answers[70] = choices[70][0];
 units[70] = "27";
 comments[70] = "Id Pregunta: 6060. TIC A 2009";


//  Id pregunta: 6077 AÃ±o de creación de pregunta: 2010-01-01
 questions[71]= "72)  &iquest;En qu&eacute; fase del proyecto es mayor el nivel de coste y de personal?";
 choices[71]= new Array();
 choices[71][0] = "Al inicio del proyecto.";
 choices[71][1] = "Al final del proyecto.";
 choices[71][2] = "En las fases intermedias del proyecto.";
 choices[71][3] = "Tanto el coste como el personal debe ser homog&eacute;neo a lo largo del proyecto.";
 answers[71] = choices[71][2];
 units[71] = "27";
 comments[71] = "Id Pregunta: 6077. ";


//  Id pregunta: 6078 AÃ±o de creación de pregunta: 2010-01-01
 questions[72]= "73)  Los procesos de Gesti&oacute;n de las Comunicaciones del Proyecto incluyen lo siguiente:";
 choices[72]= new Array();
 choices[72][0] = "An&aacute;lisis de las Comunicaciones, Dise&ntilde;o de las Comunicaciones, Informar del Rendimiento y Gestionar a los interesados.";
 choices[72][1] = "Planificaci&oacute;n de las Comunicaciones, Distribuci&oacute;n de la Informaci&oacute;n, Informar del Rendimiento y Gestionar a los Interesados.";
 choices[72][2] = "An&aacute;lisis de las Comunicaciones, Dise&ntilde;o de las Comunicaciones y Desarrollo de las Comunicaciones.";
 choices[72][3] = "An&aacute;lisis de las Comunicaciones y Dise&ntilde;o de las Comunicaciones.";
 answers[72] = choices[72][1];
 units[72] = "27";
 comments[72] = "Id Pregunta: 6078. ";


//  Id pregunta: 6146 AÃ±o de creación de pregunta: 2010-01-01
 questions[73]= "74)  &iquest;En el PDM, cu&aacute;l es el tipo de relaci&oacute;n de precedencia m&aacute;s comunmente utilizado?";
 choices[73]= new Array();
 choices[73][0] = "Inicio a fin";
 choices[73][1] = "Final a inicio";
 choices[73][2] = "Final a final";
 choices[73][3] = "Inicio a inicio";
 answers[73] = choices[73][1];
 units[73] = "28";
 comments[73] = "Id Pregunta: 6146. ";


//  Id pregunta: 6149 AÃ±o de creación de pregunta: 2010-01-01
 questions[74]= "75)  &iquest;C&oacute;mo se representan las relaciones &quot;ficticias&quot; en el M&eacute;todo de Diagramaci&oacute;n por Flechas (ADM)?";
 choices[74]= new Array();
 choices[74][0] = "Mediante una l&iacute;nea de puntos";
 choices[74][1] = "En ADM no existe el concepto de relaciones &quot;ficticias&quot;";
 choices[74][2] = "Mediante una flecha convexa";
 choices[74][3] = "Mediante una flecha c&oacute;ncava";
 answers[74] = choices[74][0];
 units[74] = "28";
 comments[74] = "Id Pregunta: 6149. ";


//  Id pregunta: 6151 AÃ±o de creación de pregunta: 2010-01-01
 questions[75]= "76)  Con respecto al control de la calidad, &iquest;cu&aacute;ndo se considera que un resultado es acptable?";
 choices[75]= new Array();
 choices[75][0] = "Si se encuentra dentro de los l&iacute;mites de control.";
 choices[75][1] = "Si se encuentra dentro del rango especificado por la tolerancia.";
 choices[75][2] = "Si se encuentra dentro de los l&iacute;mites de control o dentro del rango especificado por la tolerancia.";
 choices[75][3] = "Si se encuentra dentro de los l&iacute;mites de control y dentro del rango especificado por la tolerancia.";
 answers[75] = choices[75][1];
 units[75] = "28";
 comments[75] = "Id Pregunta: 6151. ";


//  Id pregunta: 6165 AÃ±o de creación de pregunta: 2010-01-01
 questions[76]= "77)  Se&ntilde;ale la afirmaci&oacute;n correcta";
 choices[76]= new Array();
 choices[76][0] = "Los datos analizados y procesados se convierten en informaci&oacute;n, a la cual si le aporta la experiencia se obtiene el conocimiento.";
 choices[76][1] = "La informaci&oacute;n analizada y procesada se convierte en datos, a los cuales si le aporta la experiencia se obtiene el conocimiento.";
 choices[76][2] = "El conocimiento analizado y procesado se convierte en informaci&oacute;n, a la cual si se le aporta la experiencia se obtienen los datos.";
 choices[76][3] = "Todas las anteriores son correctas.";
 answers[76] = choices[76][0];
 units[76] = "21";
 comments[76] = "Id Pregunta: 6165. ";


//  Id pregunta: 6167 AÃ±o de creación de pregunta: 2010-01-01
 questions[77]= "78)  &iquest;Cu&aacute;l de los siguientes sistemas de informaci&oacute;n esta asociado con el nivel operacional?";
 choices[77]= new Array();
 choices[77][0] = "Executive Information System (E.I.S.)";
 choices[77][1] = "Management Information System (M.I.S.)";
 choices[77][2] = "Transaction Processing System (T.P.S.)";
 choices[77][3] = "Enterprise Resource Planning Solution (E.R.P.)";
 answers[77] = choices[77][2];
 units[77] = "21";
 comments[77] = "Id Pregunta: 6167. ";


//  Id pregunta: 6463 AÃ±o de creación de pregunta: 2010-01-01
 questions[78]= "79)  Indique cu&aacute;l NO es una t&eacute;cnica de planificaci&oacute;n temporal:";
 choices[78]= new Array();
 choices[78][0] = "WBS (Work Breakdown Structure)";
 choices[78][1] = "PERT (Program Evaluation and Review Technique)";
 choices[78][2] = "Diagrama de Gantt";
 choices[78][3] = "CPM (Critical Path Method)";
 answers[78] = choices[78][0];
 units[78] = "28";
 comments[78] = "Id Pregunta: 6463. Castilla La Mancha 2009";


//  Id pregunta: 8253 AÃ±o de creación de pregunta: 2011-01-01
 questions[79]= "80)  Seg&uacute;n el est&aacute;ndar IEEE 610.12, la l&iacute;nea base:";
 choices[79]= new Array();
 choices[79][0] = "Es la l&iacute;nea que marca en la planificaci&oacute;n en que momento nos encontramos.";
 choices[79][1] = "Es la situaci&oacute;n en que se encuentra en cada momento el desarrollo.";
 choices[79][2] = "Es el momento de salida de la planificaci&oacute;n.";
 choices[79][3] = "Ha sido acordada formalmente.";
 answers[79] = choices[79][3];
 units[79] = "27,28";
 comments[79] = "Id Pregunta: 8253. Examen TIC A1 2010";


//  Id pregunta: 8635 AÃ±o de creación de pregunta: 2011-01-01
 questions[80]= "81)  &iquest;Qu&eacute; tipo de diagrama permite estimar la desviaci&oacute;n de un proyecto?";
 choices[80]= new Array();
 choices[80][0] = "Diagrama de Extrapolaci&oacute;n";
 choices[80][1] = "PERT";
 choices[80][2] = "CPM";
 choices[80][3] = "El histograma de recursos";
 answers[80] = choices[80][0];
 units[80] = "28";
 comments[80] = "Id Pregunta: 8635. Examen TIC A2 2010 interna";


//  Id pregunta: 8820 AÃ±o de creación de pregunta: 2011-01-01
 questions[81]= "82)  El objetivo del Plan de Sistemas de Informaci&oacute;n es:";
 choices[81]= new Array();
 choices[81][0] = "Proporcionar un marco estrat&eacute;gico que sirva de referencia para los Sistemas de Informaci&oacute;n de un &aacute;mbito concreto de una organizaci&oacute;n.";
 choices[81][1] = "El an&aacute;lisis de un conjunto concreto de necesidades para proponer una soluci&oacute;n a corto plazo, que tenga en cuenta restricciones econ&oacute;micas, t&eacute;cnicas, legales y operativas.";
 choices[81][2] = "a y b son correctas.";
 choices[81][3] = "Ninguna de las anteriores.";
 answers[81] = choices[81][0];
 units[81] = "27, 86";
 comments[81] = "Id Pregunta: 8820. Examen UPM A2 2011";


//  Id pregunta: 9407 AÃ±o de creación de pregunta: 2013-01-01
 questions[82]= "83)  Cu&aacute;l es el prop&oacute;sito fundamental de una Oficina de Gesti&oacute;n de Proyectos (PMO)";
 choices[82]= new Array();
 choices[82][0] = "Gestionar de forma centralizada los proyectos TIC en la organizaci&oacute;n";
 choices[82][1] = "Orientar al CIO en la identificaci&oacute;n y definici&oacute;n de futuros proyectos TIC";
 choices[82][2] = "Definir y mantener est&aacute;ndares de gesti&oacute;n de proyectos TIC en la organizaci&oacute;n";
 choices[82][3] = "Llevar la gesti&oacute;n de los proveedores externos";
 answers[82] = choices[82][2];
 units[82] = "26";
 comments[82] = "Id Pregunta: 9407. ";


//  Id pregunta: 9408 AÃ±o de creación de pregunta: 2013-01-01
 questions[83]= "84)  A qu&eacute; &aacute;rea pertenece generalmente el departamento de microinform&aacute;tica?";
 choices[83]= new Array();
 choices[83][0] = "Sistemas";
 choices[83][1] = "Log&iacute;stica";
 choices[83][2] = "Comunicaciones";
 choices[83][3] = "Seguridad";
 answers[83] = choices[83][0];
 units[83] = "26";
 comments[83] = "Id Pregunta: 9408. ";


//  Id pregunta: 10366 AÃ±o de creación de pregunta: 2014-01-01
 questions[84]= "85)  Respecto al m&eacute;todo de crashing en la gesti&oacute;n de proyectos es cierto que:";
 choices[84]= new Array();
 choices[84][0] = "No sirve para acortar la duraci&oacute;n de los proyectos cuando es aplicado a las actividades del camino cr&iacute;tico";
 choices[84][1] = "S&oacute;lo sirve para acortar la duraci&oacute;n de los proyectos si lo aplicamos a alguna de las actividades del camino cr&iacute;tico";
 choices[84][2] = "Acorta el tiempo del proyecto tanto si se aplica a las actividades cr&iacute;ticas como a las que no lo son";
 choices[84][3] = "No tiene nada que ver con la duraci&oacute;n del proyecto sino con la inclusi&oacute;n de recursos por fases ";
 answers[84] = choices[84][1];
 units[84] = "27";
 comments[84] = "Id Pregunta: 10366. ";


//  Id pregunta: 10369 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  En relaci&oacute;n con los acuerdos de nivel de servicio, los m&aacute;s importante de cara al seguimiento de los contratos que subscribe la Administraci&oacute;n con los contratistas es que:";
 choices[85]= new Array();
 choices[85][0] = "Los Sindicatos revisen las cla&uacute;sulas del ANS";
 choices[85][1] = "El Contratista proporcione informaci&oacute;n mensual sobre las m&eacute;tricas del ANS";
 choices[85][2] = "Se imponga penalizaciones ejemplares cuando se detecte un incumplimiento en el ANS";
 choices[85][3] = "La Administraci&oacute;n disponga de m&eacute;tricas sobre los puntos acordados en el ANS que puedan ser evaluadas sin la intervenci&oacute;n del propio contratista, para evitar el fraude en dichas evaluaciones";
 answers[85] = choices[85][3];
 units[85] = "28";
 comments[85] = "Id Pregunta: 10369. ";


//  Id pregunta: 10370 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  Al margen de consideraciones ajenas al departamento de TI (pol&iacute;ticas, organizativas, presupuestarias, etc.), la principal causa de fracaso de los proyectos de desarrollo de software es debido a:";
 choices[86]= new Array();
 choices[86][0] = "La mala gesti&oacute;n de los requisitos en la determinaci&oacute;n del alcance en la fase inicial del proyecto y en la gesti&oacute;n de los cambios del alcance una vez est&aacute; el proyecto en ejecuci&oacute;n";
 choices[86][1] = "La falta de buenos desarrolladores en las tecnolog&iacute;as modernas";
 choices[86][2] = "Es dif&iacute;cil realizar una estimaci&oacute;n del esfuerzo del proyecto porque las m&eacute;tricas estaban enfocadas a l&iacute;neas de c&oacute;digo en lenguajes estructurados pero en la actualidad es imposible realizar estimaciones an&aacute;logas con lenguajes modernos (no tiene sentido medir l&iacute;neas de c&oacute;digo en Java)";
 choices[86][3] = "Se abusa de la subcontrataci&oacute;n del software y se realiza mala gesti&oacute;n de proyectos por dicha causa.";
 answers[86] = choices[86][0];
 units[86] = "28";
 comments[86] = "Id Pregunta: 10370. ";


//  Id pregunta: 10598 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  Un directivo TIC:";
 choices[87]= new Array();
 choices[87][0] = "No puede ser un funcionario de otro cuerpo.";
 choices[87][1] = "No tiene como funci&oacute;n la gesti&oacute;n del cambio.";
 choices[87][2] = "Entre sus funciones se incluye la planificaci&oacute;n estrat&eacute;gica y la gesti&oacute;n de recursos.";
 choices[87][3] = "Todas las anteriores.";
 answers[87] = choices[87][2];
 units[87] = "24";
 comments[87] = "Id Pregunta: 10598. ";


//  Id pregunta: 10743 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  &iquest;Qui&eacute;n Preside el Pleno de la Comisi&oacute;n de Estrategia TIC?";
 choices[88]= new Array();
 choices[88][0] = "El Presidente del Gobierno.";
 choices[88][1] = "El Ministro de Hacienda y Administraciones P&uacute;blicas.";
 choices[88][2] = "El Director de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones.";
 choices[88][3] = "Aquel componente de la misma elegido en mayor&iacute;a por el pleno con un mandato de 2 a&ntilde;os.";
 answers[88] = choices[88][1];
 units[88] = "24";
 comments[88] = "Id Pregunta: 10743. ";


//  Id pregunta: 10744 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  &iquest;Qui&eacute;n Preside el Comit&eacute; Ejecutivo de la Comisi&oacute;n de Estrategia TIC?";
 choices[89]= new Array();
 choices[89][0] = "El Presidente del Gobierno.";
 choices[89][1] = "El Ministro de Hacienda y Administraciones P&uacute;blicas.";
 choices[89][2] = "El Director de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones.";
 choices[89][3] = "Aquel componente de la misma elegido en mayor&iacute;a por el pleno con un mandato de 2 a&ntilde;os.";
 answers[89] = choices[89][2];
 units[89] = "24";
 comments[89] = "Id Pregunta: 10744. ";


//  Id pregunta: 10747 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  &iquest;Qui&eacute;n preside las Comisiones Ministeriales de Administraci&oacute;n Digital?";
 choices[90]= new Array();
 choices[90][0] = "El Ministro";
 choices[90][1] = "El Secretario de Estado";
 choices[90][2] = "El Subsecretario";
 choices[90][3] = "El Director General";
 answers[90] = choices[90][2];
 units[90] = "24";
 comments[90] = "Id Pregunta: 10747. ";


//  Id pregunta: 10748 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  &iquest;Qui&eacute;n propone la estrategia en materia de tecnolog&iacute;a y comunicaciones?";
 choices[91]= new Array();
 choices[91][0] = "Los ministros de la Presidencia y de Hacienda y Administraciones P&uacute;blicas y de Industria.";
 choices[91][1] = "El ministro de Hacienda y Administraciones P&uacute;blicas.";
 choices[91][2] = "Los ministros de la Presidencia, de Hacienda y Administraciones P&uacute;blicas y de Industria, Energ&iacute;a y Turismo.";
 choices[91][3] = "El CIO de la AGE.";
 answers[91] = choices[91][2];
 units[91] = "24";
 comments[91] = "Id Pregunta: 10748. ";


//  Id pregunta: 10764 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Qu&eacute; rango tiene la La Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones?";
 choices[92]= new Array();
 choices[92][0] = "Subsecretar&iacute;a de Estado";
 choices[92][1] = "Secretar&iacute;a de Estado";
 choices[92][2] = "Direcci&oacute;n General";
 choices[92][3] = "Direcci&oacute;n General T&eacute;cnica";
 answers[92] = choices[92][0];
 units[92] = "24";
 comments[92] = "Id Pregunta: 10764. ";


//  Id pregunta: 10769 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Cu&aacute;l de los siguientes no es un principio de la Estrategia TIC del Gobierno Espa&ntilde;ol?";
 choices[93]= new Array();
 choices[93][0] = "Orientaci&oacute;n al usuario del servicio";
 choices[93][1] = "Unidad y visi&oacute;n integral";
 choices[93][2] = "Colaboraci&oacute;n y alianzas";
 choices[93][3] = "Eficiencia";
 answers[93] = choices[93][3];
 units[93] = "24";
 comments[93] = "Id Pregunta: 10769. ";


//  Id pregunta: 10822 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l de las siguientes reglas puede aplicarse para determinar el esfuerzo total de un proyecto en la fase de estimaci&oacute;n del mismo?";
 choices[94]= new Array();
 choices[94][0] = "Regla del 80-20.";
 choices[94][1] = "Regla del 30-40-30.";
 choices[94][2] = "Regla del 40-20-40.";
 choices[94][3] = "Regla del 20-60-20.";
 answers[94] = choices[94][2];
 units[94] = "28, 89";
 comments[94] = "Id Pregunta: 10822. Examen GSI 2014";


//  Id pregunta: 10997 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Una de las competencias que debe poseer actualmente un directivo TIC es la de liderazgo. El liderazgo autocr&aacute;tico se caracteriza por:";
 choices[95]= new Array();
 choices[95][0] = "Permitir y formentar la participaci&oacute;n de su equipo en la adopci&oacute;n de decisiones.";
 choices[95][1] = "Limitar su intervenci&oacute;n a comunicar el objetivo final del trabajo que ha de realizar su equipo.";
 choices[95][2] = "Utilizar poco el poder y conceder al equipo un alto grado de independencia en sus tareas.";
 choices[95][3] = "Adoptar decisiones de manera unilateral, limitando o excluyendo a los subordinados.";
 answers[95] = choices[95][3];
 units[95] = "24";
 comments[95] = "Id Pregunta: 10997. TIC A1 AGE 2014";


//  Id pregunta: 11010 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;C&oacute;mo se llaman los &oacute;rganos colegiados de &aacute;mbito departamental responsables del impulso y de la coordinaci&oacute;n interna en cada departamento en materia de Administraci&oacute;n digital?";
 choices[96]= new Array();
 choices[96][0] = "Comisiones Ministeriales de Administraci&oacute;n Electr&oacute;nica";
 choices[96][1] = "Comisiones Ministeriales de Administraci&oacute;n Digital";
 choices[96][2] = "Subdirecciones TIC";
 choices[96][3] = "Direcci&oacute;n TIC";
 answers[96] = choices[96][1];
 units[96] = "24";
 comments[96] = "Id Pregunta: 11010. ";


//  Id pregunta: 11011 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Qu&eacute; niveles de Complemento de Destino engloban los puestos del grupo A1?";
 choices[97]= new Array();
 choices[97][0] = "18 a 28";
 choices[97][1] = "18 a 30";
 choices[97][2] = "20 a 30";
 choices[97][3] = "26 a 30";
 answers[97] = choices[97][2];
 units[97] = "24";
 comments[97] = "Id Pregunta: 11011. ";


//  Id pregunta: 11095 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  Seleccione la respuesta falsa respecto al m&eacute;todo de Diagramaci&oacute;n con Flechas (ADM)";
 choices[98]= new Array();
 choices[98][0] = "Es un m&eacute;todo para crear un diagrama de red del cronograma de un proyecto";
 choices[98][1] = "Utiliza Flechas para representar las actividades que se conectan en nodos";
 choices[98][2] = "Todas las actividades tienen que tener un valor de duraci&oacute;n mayor que cero";
 choices[98][3] = "Permite planificar qu&eacute; actividades dependen de la finalizaci&oacute;n de otras en un proyecto.";
 answers[98] = choices[98][2];
 units[98] = "28";
 comments[98] = "Id Pregunta: 11095. ";


//  Id pregunta: 11770 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  La Direcci&oacute;n de Tecnolog&iacute;as de la Informaci&oacute;n y de las Comunicaciones no podr&aacute; informar un expediente de contrataci&oacute;n si la documentaci&oacute;n del mismo no incluye: ";
 choices[99]= new Array();
 choices[99][0] = "Presupuesto, objeto y justificaci&oacute;n de la necesidad&nbsp;";
 choices[99][1] = "Presupuesto, objeto y certificado de exclusividad";
 choices[99][2] = "Pliego de cl&aacute;usulas administrativas y memoria econ&oacute;mica";
 choices[99][3] = "Objeto, justificaci&oacute;n temporal y ratio perfiles/horas";
 answers[99] = choices[99][0];
 units[99] = "24, 41";
 comments[99] = "Id Pregunta: 11770. ";


