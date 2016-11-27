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

//  Id pregunta: 0 AÃ±o de creación de pregunta: 2011-01-01
 questions[0]= "1)  Identifique la infracci&oacute;n considerada como grave por la Ley de Protecci&oacute;n de Datos:";
 choices[0]= new Array();
 choices[0][0] = "No solicitar la inscripci&oacute;n del fichero de datos de car&aacute;cter personal en el Registro General de Protecci&oacute;n de Datos. ";
 choices[0][1] = "La recogida de datos en forma enga&ntilde;osa y fraudulenta";
 choices[0][2] = "El impedimento o la obstaculizaci&oacute;n del ejercicio de los derechos de acceso, rectificaci&oacute;n, cancelaci&oacute;n y oposici&oacute;n.";
 choices[0][3] = "No cesar en el tratamiento il&iacute;cito de datos de car&aacute;cter personal cuando existiese un previo requerimiento del Director en la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos para ello. ";
 answers[0] = choices[0][2];
 units[0] = "29";
 comments[0] = "Id Pregunta: 0. ";


//  Id pregunta: 6 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Cu&aacute;l de los siguientes organismos no corresponde a la estructura organizativa t&eacute;cnica de la normalizaci&oacute;n comunitaria?:";
 choices[1]= new Array();
 choices[1][0] = "ETSI (Instituto Europeo de Normalizaci&oacute;n de Telecomunicaciones)";
 choices[1][1] = "CENELEC (Comit&eacute; Europeo de Electr&oacute;nica)";
 choices[1][2] = "SITAR (Instituto Internacional de Tratamiento de la Informaci&oacute;n)";
 choices[1][3] = "CEPT (Confederaci&oacute;n Europea de Administraciones de Correos y Telecomunicaciones)";
 answers[1] = choices[1][2];
 units[1] = "42";
 comments[1] = "Id Pregunta: 6. ";


//  Id pregunta: 39 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;Cu&aacute;l de las siguientes respuestas no puede considerarse como un est&aacute;ndar abierto?:";
 choices[2]= new Array();
 choices[2][0] = "SNA";
 choices[2][1] = "C++";
 choices[2][2] = "SQL";
 choices[2][3] = "TCP/IP";
 answers[2] = choices[2][0];
 units[2] = "40";
 comments[2] = "Id Pregunta: 39. ";


//  Id pregunta: 72 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;Qu&eacute; m&eacute;todo de ordenaci&oacute;n de alternativas incorpora la posibilidad de valorar el riesgo y la incertidumbre?:";
 choices[3]= new Array();
 choices[3][0] = "M&eacute;todo Promethee";
 choices[3][1] = "Utilidad multiatributo";
 choices[3][2] = "Permutaci&oacute;n";
 choices[3][3] = "Ninguno de los anteriores";
 answers[3] = choices[3][1];
 units[3] = "34";
 comments[3] = "Id Pregunta: 72. ";


//  Id pregunta: 139 AÃ±o de creación de pregunta: 2009-01-01
 questions[4]= "5)  El derecho de informaci&oacute;n en la recogida de datos define la informaci&oacute;n que, obligatoriamente y con car&aacute;cter previo, se debe comunicar al afectado al que se le requiera para suministrar cualquier dato personal. Entre dicha informaci&oacute;n consta:";
 choices[4]= new Array();
 choices[4][0] = "El car&aacute;cter voluntario u obligatorio de las respuestas y de las consecuencias de la negativa a proporcionarlas";
 choices[4][1] = "El plazo de almacenamiento de la informaci&oacute;n";
 choices[4][2] = "El n&uacute;mero de cesiones que se van a realizar";
 choices[4][3] = "S&oacute;lo es necesario comunicar al afectado que se va a crear el fichero";
 answers[4] = choices[4][0];
 units[4] = "29";
 comments[4] = "Id Pregunta: 139. ";


//  Id pregunta: 152 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  El modelo modificado en 6 etapas de Nolan:";
 choices[5]= new Array();
 choices[5][0] = "Iniciaci&oacute;n, expansi&oacute;n, control, integraci&oacute;n, administraci&oacute;n de datos y madurez";
 choices[5][1] = "Iniciaci&oacute;n, contagio, control, integraci&oacute;n, almacenamiento de datos y madurez";
 choices[5][2] = "Iniciaci&oacute;n, contagio, control, integraci&oacute;n, administraci&oacute;n de datos y madurez";
 choices[5][3] = "Iniciaci&oacute;n, expansi&oacute;n, control, integraci&oacute;n, almacenamiento de datos y madurez";
 answers[5] = choices[5][2];
 units[5] = "22";
 comments[5] = "Id Pregunta: 152. Nolan";


//  Id pregunta: 182 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  En el estudio de la capacidad de los sistemas de informaci&oacute;n:";
 choices[6]= new Array();
 choices[6][0] = "La demanda latente es el trabajo frenado por la falta de recursos";
 choices[6][1] = "La teor&iacute;a de colas es un m&eacute;todo emp&iacute;rico, no matem&aacute;tico";
 choices[6][2] = "La frecuencia de swapping es el n&uacute;mero de fallos de p&aacute;gina que se producen por unidad de tiempo en un sistema de memoria virtual paginada";
 choices[6][3] = "Ninguna de las anteriores respuestas es correcta";
 answers[6] = choices[6][0];
 units[6] = "35";
 comments[6] = "Id Pregunta: 182. NULL";


//  Id pregunta: 191 AÃ±o de creación de pregunta: 2004-01-01
 questions[7]= "8)  En relaci&oacute;n a la protecci&oacute;n jur&iacute;dica de los programas de ordenador se&ntilde;arlar la respuesta falsa:";
 choices[7]= new Array();
 choices[7][0] = "Est&aacute; protegidos mediante los derechos de autor cualquier forma de expresi&oacute;n de un programa de ordenador, salvo aquellas creadas con el fin de ocasionar efectos nocivos a un sistema inform&aacute;tico";
 choices[7][1] = "Est&aacute;n protegidos mediante los derechos de autor las ideas y principios en los que se base un programa, incluidos los que sirven de fundamento a sus interfaces";
 choices[7][2] = "La primera venta de una copia de un programa por el titular de los derechos o con su consentimiento, agotar&aacute; el derecho de distribuci&oacute;n de dicha copia";
 choices[7][3] = "La duraci&oacute;n de los derechos de explotaci&oacute;n de un programa de ordenador ser&aacute;: para una persona natural toda la vida del autor y 70 a&ntilde;os despu&eacute;s de su muerte; para una persona jur&iacute;dica 70 a&ntilde;os";
 answers[7] = choices[7][1];
 units[7] = "36";
 comments[7] = "Id Pregunta: 191. Similar a examen TIC SS A 2003";


//  Id pregunta: 209 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  En general, lo m&aacute;s &uacute;til en determinadas &aacute;reas de la organizaci&oacute;n altamente normalizadas (ofim&aacute;tica, contabilidad, inventarios,&hellip;) es utilizar:";
 choices[8]= new Array();
 choices[8][0] = "Aplicaciones a medida realizadas mediante programaci&oacute;n propia.";
 choices[8][1] = "Aplicaciones a medida realizadas mediante programaci&oacute;n externa.";
 choices[8][2] = "Aplicaciones a medida realizadas mediante programaci&oacute;n propia y externa.";
 choices[8][3] = "Aplicaciones est&aacute;ndar o paquetes.";
 answers[8] = choices[8][3];
 units[8] = "27";
 comments[8] = "Id Pregunta: 209. ";


//  Id pregunta: 211 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  En la dimensi&oacute;n horizontal de un sistema de informaci&oacute;n, dentro de cada nivel las funciones se dividen en:";
 choices[9]= new Array();
 choices[9][0] = "Aplicaciones y procedimientos";
 choices[9][1] = "Aplicaciones y tareas";
 choices[9][2] = "Aplicaciones o procedimientos";
 choices[9][3] = "Aplicaciones o tareas";
 answers[9] = choices[9][2];
 units[9] = "21";
 comments[9] = "Id Pregunta: 211. ";


//  Id pregunta: 236 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  En su dimensi&oacute;n vertical, el sistema de informaci&oacute;n tiene tres niveles jer&aacute;rquicos:";
 choices[10]= new Array();
 choices[10][0] = "Entradas, procesos y salidas";
 choices[10][1] = "Operacional, t&aacute;ctico y estrat&eacute;gico";
 choices[10][2] = "De an&aacute;lisis, de construcci&oacute;n y de implantaci&oacute;n";
 choices[10][3] = "Jer&aacute;rquico, de gesti&oacute;n y operativo";
 answers[10] = choices[10][1];
 units[10] = "21";
 comments[10] = "Id Pregunta: 236. ";


//  Id pregunta: 238 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  En un An&aacute;lisis de Criticidad los elementos cr&iacute;ticos de un Sistema se clasifican seg&uacute;n:";
 choices[11]= new Array();
 choices[11][0] = "La probabilidad de mal funcionamiento de uno de ellos";
 choices[11][1] = "La estimaci&oacute;n de los costes de los da&ntilde;os derivados de su mal funcionamiento";
 choices[11][2] = "El tiempo durante el cu&aacute;l se puede asumir su carencia o mal funcionamiento";
 choices[11][3] = "El n&uacute;mero de elementos alternativos a cada elemento cr&iacute;tico";
 answers[11] = choices[11][2];
 units[11] = "33";
 comments[11] = "Id Pregunta: 238. ";


//  Id pregunta: 274 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Indique cu&aacute;l de las siguientes alternativas se refiere a una de las consecuencias organizativas de la transformaci&oacute;n de una organizaci&oacute;n tradicional en una organizaci&oacute;n basada en la informaci&oacute;n:";
 choices[12]= new Array();
 choices[12][0] = "Esa transformaci&oacute;n no tiene consecuencias organizativas";
 choices[12][1] = "El empleo de nuevas tecnolog&iacute;as";
 choices[12][2] = "El aumento del n&uacute;mero de gestores";
 choices[12][3] = "La reducci&oacute;n del n&uacute;mero de niveles jer&aacute;rquicos";
 answers[12] = choices[12][3];
 units[12] = "22";
 comments[12] = "Id Pregunta: 274. ";


//  Id pregunta: 280 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  La auditoria es:";
 choices[13]= new Array();
 choices[13][0] = "Actividad que tiene por objeto la evaluaci&oacute;n de conformidad de dise&ntilde;os, productos software, procesos o sistema";
 choices[13][1] = "Proceso por el que el sistema de calidad de una empresa es auditado para comprobar el cumplimiento de determinadas normas";
 choices[13][2] = "Descripci&oacute;n completa de un producto software y las interrrelaciones de sus elementos";
 choices[13][3] = "Estructura organizativa, procedimientos, actividades y recursos que juntos aseguran que los productos software satisfacen las necesidades impl&iacute;citas o establecidas en contrato por los clientes";
 answers[13] = choices[13][0];
 units[13] = "31";
 comments[13] = "Id Pregunta: 280. ";


//  Id pregunta: 307 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  La fidelidad con que un modelo representa la realidad depende fundamentalmente de:";
 choices[14]= new Array();
 choices[14][0] = "La precisi&oacute;n de los valores previstos de variables incontrolables";
 choices[14][1] = "La calidad de los datos";
 choices[14][2] = "El tratamiento de la incertidumbre";
 choices[14][3] = "Todas las respuestas anteriores son correctas";
 answers[14] = choices[14][3];
 units[14] = "34";
 comments[14] = "Id Pregunta: 307. ";


//  Id pregunta: 316 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  La Ley Org&aacute;nica de Protecci&oacute;n de Datos de car&aacute;cter personal es la ley:";
 choices[15]= new Array();
 choices[15][0] = "14/1999";
 choices[15][1] = "994/1999";
 choices[15][2] = "15/1999";
 choices[15][3] = "14/1997";
 answers[15] = choices[15][2];
 units[15] = "29";
 comments[15] = "Id Pregunta: 316. ";


//  Id pregunta: 325 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  La planificaci&oacute;n de la capacidad de un sistema debe tener en cuenta los factores:";
 choices[16]= new Array();
 choices[16][0] = "Caracter&iacute;sticas de la carga de trabajo, caracter&iacute;sticas de funcionamiento de los recursos, disponibilidad del sistema y requisitos de servicio del usuario";
 choices[16][1] = "Caracter&iacute;sticas de la carga de trabajo, utilizaci&oacute;n de los recursos, disponibilidad del sistema y horas de trabajo de los usuarios";
 choices[16][2] = "Caracter&iacute;sticas de la carga de trabajo, utilizaci&oacute;n de los recursos, disponibilidad del sistema y requisitos de servicio de los usuarios";
 choices[16][3] = "Caracter&iacute;sticas de la carga de trabajo, utilizaci&oacute;n de los recursos, disponibilidad de los recursos y requisitos de servicio de los usuarios";
 answers[16] = choices[16][2];
 units[16] = "35";
 comments[16] = "Id Pregunta: 325. NULL";


//  Id pregunta: 328 AÃ±o de creación de pregunta: 2009-01-01
 questions[17]= "18)  Los ficheros con datos de car&aacute;cter personal de &aacute;mbito departamental, usualmente soportados por herramientas ofim&aacute;ticas de usuario final:";
 choices[17]= new Array();
 choices[17][0] = "Precisan ser declarados por el organismo pero no inscritos en el registro de ficheros de la agencia de protecci&oacute;n de datos.";
 choices[17][1] = "No precisan ser declarados pero s&iacute; ser inscritos en el registro de la agencia de protecci&oacute;n de datos.";
 choices[17][2] = "Se caracterizan como de nivel b&aacute;sico en el RD 1720/2007 por las plataformas en las que se soportan.";
 choices[17][3] = "Se tratan a todos los efectos como el resto de ficheros de datos de car&aacute;cter personal con las consideraciones introducidas por el RD 1720/2007.";
 answers[17] = choices[17][3];
 units[17] = "29";
 comments[17] = "Id Pregunta: 328. NULL";


//  Id pregunta: 371 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Los gr&aacute;ficos de Gantt son representaciones gr&aacute;ficas en las que en el eje horizontal se representa el tiempo, y en el vertical las diferentes tareas  con el tiempo de inicio, ejecuci&oacute;n y final, y se denominan as&iacute; debido a:";
 choices[18]= new Array();
 choices[18][0] = "Son las siglas de Global Approach Near Tasks Timing, t&eacute;cnica desarrollada por General Electric";
 choices[18][1] = "Procede de su dise&ntilde;ador Henry Laurence Gantt. Ingeniero estadounidense (1861-1919) que lo utiliz&oacute; para la programaci&oacute;n de tareas en la costrucci&oacute;n de buques durante la primera guerra mundial";
 choices[18][2] = "Procede del desarrollo de t&eacute;cnicas del Pent&aacute;gono y se dise&ntilde;&oacute; como subconjunto de los gr&aacute;ficos PERT en el proyecto del misil POLARIS";
 choices[18][3] = "Es un subconjunto de los diagramas utilizados en las t&eacute;cnicas CPM y su nombre procede de la ciudad donde estaba ubicada la base de desarrollo militar donde se utilizaron por primera vez. (Gantt - Nevada)";
 answers[18] = choices[18][1];
 units[18] = "28";
 comments[18] = "Id Pregunta: 371. ";


//  Id pregunta: 406 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  Respecto a los Ficheros y Registros de Poblaci&oacute;n de las Administraciones P&uacute;blicas, la Ley de Protecci&oacute;n de Datos se&ntilde;ala:";
 choices[19]= new Array();
 choices[19][0] = "Para su creaci&oacute;n es necesario el consentimiento del interesado";
 choices[19][1] = "Podr&aacute; solicitar su creaci&oacute;n cualquier persona interesada";
 choices[19][2] = "S&oacute;lo lo puede solicitar la Administraci&oacute;n General del Estado";
 choices[19][3] = "Estar&aacute;n formados con los datos del nombre, apellidos, domicilio, sexo y fecha de nacimiento";
 answers[19] = choices[19][3];
 units[19] = "29";
 comments[19] = "Id Pregunta: 406. ";


//  Id pregunta: 410 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Respecto al funcionamiento de un Centro de Sistemas de Informaci&oacute;n:";
 choices[20]= new Array();
 choices[20][0] = "En la organizaci&oacute;n funcional existe un &uacute;nico m&eacute;todo generalmente aceptado de establecer la organizaci&oacute;n de funciones: an&aacute;lisis, dise&ntilde;o, programaci&oacute;n e instalaci&oacute;n";
 choices[20][1] = "El prop&oacute;sito de una organizaci&oacute;n proyecto-funcional es conseguir las ventajas de una organizaci&oacute;n funcional evitando sus desventajas";
 choices[20][2] = "La organizaci&oacute;n proyecto-staff es adecuada para grandes &aacute;reas de desarrollo";
 choices[20][3] = "Todas las anteriores";
 answers[20] = choices[20][1];
 units[20] = "26";
 comments[20] = "Id Pregunta: 410. ";


//  Id pregunta: 414 AÃ±o de creación de pregunta: 2002-01-01
 questions[21]= "22)  Respecto del ETSI (European Telecommunication Standards Institute, Instituto Europeo de Normas de Telecomunicaci&oacute;n), podemos decir:";
 choices[21]= new Array();
 choices[21][0] = "No est&aacute; reconocida oficialmente por la Comisi&oacute;n Europea como una organizaci&oacute;n de normalizaci&oacute;n.";
 choices[21][1] = "Depende funcionalmente de ITU-T y de CCITT";
 choices[21][2] = "Ninguna de las respuestas anteriores es correcta";
 choices[21][3] = "Las 2 primeras respuestas son correctas";
 answers[21] = choices[21][2];
 units[21] = "42";
 comments[21] = "Id Pregunta: 414. ";


//  Id pregunta: 435 AÃ±o de creación de pregunta: 2009-01-01
 questions[22]= "23)  Seg&uacute;n la Ley org&aacute;nica 15/1999:";
 choices[22]= new Array();
 choices[22][0] = "existen derechos de cancelaci&oacute;n, rectificaci&oacute;n, acceso y oposici&oacute;n, sobre los que se podr&aacute; exigir contraprestaci&oacute;n en los casos que proceda";
 choices[22][1] = "los ficheros creados por las Fuerzas y Cuerpos de Seguridad que contengan datos de car&aacute;cter personal que, por haber sido recogidos para fines administrativos, deban ser objeto de registro permanente, estar&aacute;n sujetos al regimen general de la ley";
 choices[22][2] = "la Agencia de Protecci&oacute;n de Datos es un ente de derecho p&uacute;blico con personalidad jur&iacute;dica propia y que depende de las Administraciones P&uacute;blicas en el ejercicio de sus funciones";
 choices[22][3] = "Todas las respuestas anteriores son correctas";
 answers[22] = choices[22][1];
 units[22] = "29";
 comments[22] = "Id Pregunta: 435. ";


//  Id pregunta: 458 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  Si se desea una estructura organizacional caracterizada por su orientaci&oacute;n a los usuarios se establecer&aacute; una organizaci&oacute;n:";
 choices[23]= new Array();
 choices[23][0] = "Funcional";
 choices[23][1] = "Proyecto-staff";
 choices[23][2] = "Proyecto-funcional";
 choices[23][3] = "Por aplicaciones";
 answers[23] = choices[23][3];
 units[23] = "26";
 comments[23] = "Id Pregunta: 458. ";


//  Id pregunta: 461 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  Son excepciones a las normas de contrataci&oacute;n establecidas en la Directiva 87/95 CE:";
 choices[24]= new Array();
 choices[24][0] = "La necesidad de una continuidad en el funcionamiento de los Sistemas existentes";
 choices[24][1] = "La naturaleza innovadora de algunos proyectos";
 choices[24][2] = "a y b son correctas";
 choices[24][3] = "Ninguna de las anteriores es correcta";
 answers[24] = choices[24][2];
 units[24] = "40";
 comments[24] = "Id Pregunta: 461. ";


//  Id pregunta: 491 AÃ±o de creación de pregunta: 2003-01-01
 questions[25]= "26)  &iquest;Cu&aacute;l de las siguientes se puede decir que no es una caracter&iacute;stica de los Benchmark?";
 choices[25]= new Array();
 choices[25][0] = "Pruebas entre productos de distintas compa&ntilde;&iacute;as";
 choices[25][1] = "Suelen basarse en el tiempo necesario para la ejecuci&oacute;n de un programa";
 choices[25][2] = "Metodolog&iacute;a para comparar distintos sistemas inform&aacute;ticos";
 choices[25][3] = "Una herramienta para la mejora de rendimiento de un sistema";
 answers[25] = choices[25][3];
 units[25] = "35";
 comments[25] = "Id Pregunta: 491. NULL";


//  Id pregunta: 499 AÃ±o de creación de pregunta: 2003-01-01
 questions[26]= "27)  El nivel EAL4 de Criterios Comunes considera el dise&ntilde;o del producto";
 choices[26]= new Array();
 choices[26][0] = "S&iacute;";
 choices[26][1] = "No, es el EAL2 el que lo considera";
 choices[26][2] = "No, es el EAL3 el que lo considera";
 choices[26][3] = "Ninguna de las anteriores respuestas es cierta";
 answers[26] = choices[26][0];
 units[26] = "31,32,33";
 comments[26] = "Id Pregunta: 499. ";


//  Id pregunta: 503 AÃ±o de creación de pregunta: 2003-01-01
 questions[27]= "28)  En la metodolog&iacute;a MAGERIT la definici&oacute;n &quot;eventos que pueden desencadenar un incidente en la organizaci&oacute;n&quot; corresponde a:";
 choices[27]= new Array();
 choices[27][0] = "Riesgo";
 choices[27][1] = "Impacto";
 choices[27][2] = "Amenaza";
 choices[27][3] = "Vulnerabilidad";
 answers[27] = choices[27][2];
 units[27] = "31, 32, 33";
 comments[27] = "Id Pregunta: 503. ";


//  Id pregunta: 504 AÃ±o de creación de pregunta: 2003-01-01
 questions[28]= "29)  En la planificaci&oacute;n de un  Proyecto lo cierto es";
 choices[28]= new Array();
 choices[28][0] = "El diagrama de Gantt expresa el camino cr&iacute;tico";
 choices[28][1] = "Una tarea no perteneciente al camino cr&iacute;tico puede retrasar la finalizaci&oacute;n del proyecto";
 choices[28][2] = "En el diagrama de PERT los arcos no son dirigidos";
 choices[28][3] = "El gr&aacute;fico de Gant se basa en la representaci&oacute;n de restricciones";
 answers[28] = choices[28][1];
 units[28] = "28";
 comments[28] = "Id Pregunta: 504. ";


//  Id pregunta: 512 AÃ±o de creación de pregunta: 2003-01-01
 questions[29]= "30)  Respecto a la ley 1/1996 de propiedad intelectual es falso que proteja:";
 choices[29]= new Array();
 choices[29][0] = "Los derechos de explotaci&oacute;n";
 choices[29][1] = "Los programas de ordenador";
 choices[29][2] = "La documentaci&oacute;n";
 choices[29][3] = "Las ideas que subyacen en los programas de ordenador ";
 answers[29] = choices[29][3];
 units[29] = "36";
 comments[29] = "Id Pregunta: 512. ";


//  Id pregunta: 526 AÃ±o de creación de pregunta: 2004-01-01
 questions[30]= "31)  La propiedad de los datos recae normalmente en:";
 choices[30]= new Array();
 choices[30][0] = "Administrador de base de datos";
 choices[30][1] = "Analista de sistemas";
 choices[30][2] = "Operador";
 choices[30][3] = "Usuario final";
 answers[30] = choices[30][3];
 units[30] = "31, 32, 33";
 comments[30] = "Id Pregunta: 526. Auditor&iacute;a Inform&aacute;tica";


//  Id pregunta: 531 AÃ±o de creación de pregunta: 2004-01-01
 questions[31]= "32)  &iquest;Qu&eacute; tipo de centro de respaldo ante desastres ofrece la respuesta m&aacute;s inmediata?";
 choices[31]= new Array();
 choices[31][0] = "Hot site";
 choices[31][1] = "Warm site";
 choices[31][2] = "Instant site";
 choices[31][3] = "Cold site";
 answers[31] = choices[31][0];
 units[31] = "31, 32, 33";
 comments[31] = "Id Pregunta: 531. ";


//  Id pregunta: 566 AÃ±o de creación de pregunta: 2006-01-01
 questions[32]= "33)  Las organizaciones basadas en el conocimiento, seg&uacute;n Berenguer. Se&ntilde;ale la correcta.";
 choices[32]= new Array();
 choices[32][0] = "Consideran el tiempo como un factor cr&iacute;tico";
 choices[32][1] = "Tienen claro que la tecnolog&iacute;a vuelve a una organizaci&oacute;n m&aacute;s competitiva";
 choices[32][2] = "Poseen una cultura organizacional basada en compartir conocimientos y valorar los resultados a corto plazo";
 choices[32][3] = "Todas son caracter&iacute;siticas propias de las organizaciones basadas en el conocimiento";
 answers[32] = choices[32][0];
 units[32] = "22";
 comments[32] = "Id Pregunta: 566. ";


//  Id pregunta: 572 AÃ±o de creación de pregunta: 2006-01-01
 questions[33]= "34)  Seg&uacute;n Zerilli ";
 choices[33]= new Array();
 choices[33][0] = "la direcci&oacute;n se entiende como: &quot;El proceso de gu&iacute;a y constante adaptaci&oacute;n de unaorganizaci&oacute;n, a trav&eacute;s de un preciso esquema l&oacute;gico de acci&oacute;n, para la consecuci&oacute;n en el m&aacute;ximo grado y con la m&aacute;ximaeficiencia de los objetivos de dicha organizaci&oacute;n&quot;.";
 choices[33][1] = "&quot;...un sistema de informaci&oacute;n que empieza a explotar el potencial del tratamiento de lainformaci&oacute;n que no quedar&aacute; reducido al papel de soporte administrativo del tratamiento de datos de rutina. En realidad,se convertir&aacute; en un recurso estrat&eacute;gico";
 choices[33][2] = "&quot;...un sistema de informaci&oacute;n que empieza a explotar el potencial del tratamiento de lainformaci&oacute;n que tiene como fin  el  soporte administrativo del tratamiento de datos de rutina. En realidad,se convertir&aacute; en un recurso estrat&eacute;gico";
 choices[33][3] = "la direcci&oacute;n se entiende como: &quot;El proceso de gu&iacute;a y constante adaptaci&oacute;n de unaorganizaci&oacute;n, a trav&eacute;s de la actitud proactiva del individuo, para la consecuci&oacute;n en el m&aacute;ximo grado y con la m&aacute;ximaeficiencia de los objetivos de dicha organizaci&oacute;n&quot;.";
 answers[33] = choices[33][0];
 units[33] = "23";
 comments[33] = "Id Pregunta: 572. ";


//  Id pregunta: 597 AÃ±o de creación de pregunta: 2006-01-01
 questions[34]= "35)  Cual de las siguientes fuentes no tiene consideraci&oacute;n de fuente de acceso p&uacute;blico seg&uacute;n laLOPD:";
 choices[34]= new Array();
 choices[34][0] = "El censo promocional.";
 choices[34][1] = "Los repertorios telef&oacute;nicos sin restricciones.";
 choices[34][2] = "Los diarios y boletines oficiales.";
 choices[34][3] = "Medios de comunicaci&oacute;n.";
 answers[34] = choices[34][1];
 units[34] = "29";
 comments[34] = "Id Pregunta: 597. ";


//  Id pregunta: 600 AÃ±o de creación de pregunta: 2006-01-01
 questions[35]= "36)  Seg&uacute;n lo establecido en la LOPD &iquest;Cual de los siguientes son derechos de las personas?";
 choices[35]= new Array();
 choices[35][0] = "Secreto profesional y control previo de los tratamientos";
 choices[35][1] = "Consentimiento expreso para el tratamiento de datos especialmente protegidos y derecho de Informaci&oacute;n";
 choices[35][2] = "Acceso, rectificaci&oacute;n, cancelaci&oacute;n, oposici&oacute;n e impugnaci&oacute;n ";
 choices[35][3] = "Confidencialidad e integridad de la Informaci&oacute;n";
 answers[35] = choices[35][2];
 units[35] = "29";
 comments[35] = "Id Pregunta: 600. ";


//  Id pregunta: 629 AÃ±o de creación de pregunta: 2006-01-01
 questions[36]= "37)  Qu&eacute; derecho de explotaci&oacute;n no reconoce expl&iacute;citamente la ley espa&ntilde;ola de propiedad intelectual:";
 choices[36]= new Array();
 choices[36][0] = "Derecho de integridad";
 choices[36][1] = "Derecho de distribuci&oacute;n.";
 choices[36][2] = "Derecho de reproducci&oacute;n.";
 choices[36][3] = "Derecho de comunicaci&oacute;n p&uacute;blica.";
 answers[36] = choices[36][0];
 units[36] = "36";
 comments[36] = "Id Pregunta: 629. ";


//  Id pregunta: 648 AÃ±o de creación de pregunta: 2006-01-01
 questions[37]= "38)  Cu&aacute;l de las siguientes relaciones entre Organismos internacionales y europeos es incorrecta:";
 choices[37]= new Array();
 choices[37][0] = "ITU-T - ETSI";
 choices[37][1] = "IEC - CENELEC";
 choices[37][2] = "Comit&eacute; conjunto JTC-1 (ISO - CEN/CENELEC)";
 choices[37][3] = "ISO -CEN";
 answers[37] = choices[37][2];
 units[37] = "42";
 comments[37] = "Id Pregunta: 648. ";


//  Id pregunta: 2909 AÃ±o de creación de pregunta: 2009-01-01
 questions[38]= "39)  El impacto es, de acuerdo a MAGERIT v2:";
 choices[38]= new Array();
 choices[38][0] = "Da&ntilde;o sobre el activo derivado de la materializaci&oacute;n de la amenaza";
 choices[38][1] = "Lo que podr&iacute;a pasar";
 choices[38][2] = "Las respuestas 'a' y 'b' son correctas";
 choices[38][3] = "Lo que probablemente pase ";
 answers[38] = choices[38][2];
 units[38] = "33";
 comments[38] = "Id Pregunta: 2909. ";


//  Id pregunta: 4327 AÃ±o de creación de pregunta: 2007-01-01
 questions[39]= "40)  Entre los objetivos a conseguir por el Administrador de una Base de Datos, no se encuentra...";
 choices[39]= new Array();
 choices[39][0] = "Mantener la disponibilidad de los datos (procedimientos de recuperaci&oacute;n de la Base de Datos da&ntilde;ada).";
 choices[39][1] = "Garantizar el mantenimiento (asegurando que no se produce ning&uacute;n tipo de cambio en el Sistema de Base de Datos).";
 choices[39][2] = "Mantener la seguridad de los datos (proteger la Base de Datos de usos mal intencionados o no autorizados).";
 choices[39][3] = "Garantizar la integridad de los datos (mantener la consistencia de la Base de Datos).";
 answers[39] = choices[39][1];
 units[39] = "26";
 comments[39] = "Id Pregunta: 4327. ";


//  Id pregunta: 4441 AÃ±o de creación de pregunta: 2007-01-01
 questions[40]= "41)  Seg&uacute;n el RD Legislativo 3/2011 de Contratos del Sector P&uacute;blico, el procedimiento de adjudicaci&oacute;n en el que solo podr&aacute;n participar los empresarios que, a su solicitud y en atenci&oacute;n a su solvencia, hayan sido seleccionados por el &oacute;rgano de contrataci&oacute;n, se llama:";
 choices[40]= new Array();
 choices[40][0] = "Procedimiento Negociado.";
 choices[40][1] = "Procedimiento Restringido.";
 choices[40][2] = "Procedimiento Cerrado";
 choices[40][3] = "Procedimiento Abierto.";
 answers[40] = choices[40][1];
 units[40] = "41";
 comments[40] = "Id Pregunta: 4441. ";


//  Id pregunta: 4443 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  &iquest;Que parte del expediente de contrataci&oacute;n incluye los pactos y condiciones que definen los derechos y obligaciones de cada una de las partes del contrato?";
 choices[41]= new Array();
 choices[41][0] = "El Pliego de Prescripciones T&eacute;cnicas";
 choices[41][1] = "El Pliego T&eacute;cnico de Referencia";
 choices[41][2] = "El Pliego de Cl&aacute;usulas Administrativas";
 choices[41][3] = "La Memoria Justificativa";
 answers[41] = choices[41][2];
 units[41] = "41";
 comments[41] = "Id Pregunta: 4443. ";


//  Id pregunta: 4607 AÃ±o de creación de pregunta: 2007-01-01
 questions[42]= "43)  El atributo que NO forma parte de los que utiliza la t&eacute;cnica de estimaci&oacute;n del M&eacute;todo Albrecht para el An&aacute;lisis de los Puntos Funci&oacute;n es";
 choices[42]= new Array();
 choices[42][0] = "gran uso de Ia configuraci&oacute;n";
 choices[42][1] = "dise&ntilde;o para la eficacia del usuario final";
 choices[42][2] = "velocidad de las transacciones";
 choices[42][3] = "prestaciones";
 answers[42] = choices[42][1];
 units[42] = "89";
 comments[42] = "Id Pregunta: 4607. ";


//  Id pregunta: 4895 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  Seg&uacute;n el RD Legislativo 3/2011 de contratos del sector p&uacute;blico, son procedimientos de adjudicaci&oacute;n de los contratos:";
 choices[43]= new Array();
 choices[43][0] = "El ordinario, el de urgencia y el de emergencia.";
 choices[43][1] = "La adjudicaci&oacute;n directa, el concurso y la subasta.";
 choices[43][2] = "El procedimiento abierto, el restringido y el negociado.";
 choices[43][3] = "El procedimiento general y el simplificado";
 answers[43] = choices[43][2];
 units[43] = "41";
 comments[43] = "Id Pregunta: 4895. ";


//  Id pregunta: 4961 AÃ±o de creación de pregunta: 2003-01-01
 questions[44]= "45)  &iquest;Cu&aacute;l de estas medidas de seguridad de las instalaciones contra incendios en los centro de proceso de datos no es adecuada?:";
 choices[44]= new Array();
 choices[44][0] = "Utilizaci&oacute;n de tabicados de hormig&oacute;n en su construcci&oacute;n.";
 choices[44][1] = "Utilizaci&oacute;n de un mecanismo para cortar la alimentaci&oacute;n el&eacute;ctrica.";
 choices[44][2] = "Utilizaci&oacute;n de agentes extintores como el gas HAL&Oacute;N.";
 choices[44][3] = "Utilizaci&oacute;n de contenedores de papel con tapa met&aacute;lica que cierre autom&aacute;ticamente.";
 answers[44] = choices[44][2];
 units[44] = "32";
 comments[44] = "Id Pregunta: 4961. Examen TIC B 2007";


//  Id pregunta: 4966 AÃ±o de creación de pregunta: 2003-01-01
 questions[45]= "46)  La selecci&oacute;n de proyectos alternativos mediante t&eacute;cnicas tipo VAN:";
 choices[45]= new Array();
 choices[45][0] = "Calcula el valor actual neto de cada proyecto, computando los flujos de gastos e ingresos.";
 choices[45][1] = "Itera los valores esperados de cada proyecto hasta alcanzar un ranking objetivo mediante el algoritmo ValueAdded Nested.";
 choices[45][2] = "Establece una red (Virtual Area Network) parametrizada que analiza el impacto de cada proyecto en laOrganizaci&oacute;n.";
 choices[45][3] = "Establece una serie de ratios entre los gastos previstos de Cap&iacute;tulo 6 y Cap&iacute;tulo 2 para minimizar las potencialestransferencias futuras y evitar problemas con la Intervenci&oacute;n Delegada de Hacienda.";
 answers[45] = choices[45][0];
 units[45] = "38";
 comments[45] = "Id Pregunta: 4966. Examen TIC B 2007";


//  Id pregunta: 5029 AÃ±o de creación de pregunta: 2003-01-01
 questions[46]= "47)  Elija la opci&oacute;n correcta con respecto al funcionamiento de los registros telem&aacute;ticos en d&iacute;as inh&aacute;biles, seg&uacute;n el RD209/2003, de 21 de febrero:";
 choices[46]= new Array();
 choices[46][0] = "Los registros telem&aacute;ticos no estar&aacute;n en funcionamiento los d&iacute;as inh&aacute;biles";
 choices[46][1] = "La entrada de las solicitudes, escritos y comunicaciones recibidas en un d&iacute;a inh&aacute;bil para el registrotelem&aacute;tico se entender&aacute; efectuada en la primera hora del primer d&iacute;a h&aacute;bil siguiente";
 choices[46][2] = "La entrada de las solicitudes, escritos y comunicaciones recibidas en un d&iacute;a inh&aacute;bil para el registrotelem&aacute;tico se entender&aacute; efectuada en la &uacute;ltima hora del &uacute;ltimo d&iacute;a h&aacute;bil anterior";
 choices[46][3] = "No se permitir&aacute; la entrada de solicitudes, escritos y comunicaciones en un d&iacute;a inh&aacute;bil, y por consiguiente laentrada de las solicitudes, escritos y comunicaciones recibidas en un d&iacute;a inh&aacute;bil para el registro telem&aacute;ticono se entender&aacute; efectuada";
 answers[46] = choices[46][1];
 units[46] = "30";
 comments[46] = "Id Pregunta: 5029. Examen TIC A 2007";


//  Id pregunta: 5587 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  &iquest;Cu&aacute;les son los procedimientos de adjudicaci&oacute;n que contempla el RD legislativo 3/2011 de contratos del sector p&uacute;blico?";
 choices[47]= new Array();
 choices[47][0] = "Abierto, restringido y negociado";
 choices[47][1] = "Abierto, restringido, negociado y dedicado";
 choices[47][2] = "Abierto, restringido, negociado y por di&aacute;logo competitivo";
 choices[47][3] = "Ninguno de los anteriores es correcto";
 answers[47] = choices[47][2];
 units[47] = "41";
 comments[47] = "Id Pregunta: 5587. ";


//  Id pregunta: 5663 AÃ±o de creación de pregunta: 2009-01-01
 questions[48]= "49)  Seg&uacute;n el RD 1720/2007, los derechos de acceso, rectificaci&oacute;n, cancelaci&oacute;n y oposici&oacute;n:";
 choices[48]= new Array();
 choices[48][0] = "son derechos independientes, de tal forma que no puede entenderse que el ejercicio de ninguno de ellos sea requisito previo para el ejercicio de otro";
 choices[48][1] = "son derechos dependientes, por lo que debe entenderse la necesidad de establecer un orden entre estos para su ejercicio";
 choices[48][2] = "son derechos dependientes, por lo que deben ejercerse es el oreden citado (acceso, rectificaci&oacute;n, cancelaci&oacute;n y oposici&oacute;n)";
 choices[48][3] = "El RD 1720/2007 no trata de estos derechos";
 answers[48] = choices[48][0];
 units[48] = "29";
 comments[48] = "Id Pregunta: 5663. ";


//  Id pregunta: 5776 AÃ±o de creación de pregunta: 2009-01-01
 questions[49]= "50)  &iquest;Qu&eacute; car&aacute;cter tendr&aacute;n los C&oacute;digos Tipo descritos en el art&iacute;culo 32 de la Ley Org&aacute;nica 15/1999, de 13 de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter Personal?";
 choices[49]= new Array();
 choices[49][0] = "De legislaci&oacute;n de desarrollo de la Ley Org&aacute;nica 15/1999.";
 choices[49][1] = "Sustitutivo de las regulaciones legales sobre protecci&oacute;n de datos para aquellos sectores que los adopten.";
 choices[49][2] = "Obligatorio para todas aquellas administraciones P&uacute;blicas que prevean la realizaci&oacute;n de transferencias internacionales de datos personales a terceros pa&iacute;ses que no garanticen un nivel adecuado de protecci&oacute;n.";
 choices[49][3] = "C&oacute;digos deontol&oacute;gicos o de buena pr&aacute;ctica profesional.";
 answers[49] = choices[49][3];
 units[49] = "29";
 comments[49] = "Id Pregunta: 5776. ";


//  Id pregunta: 5792 AÃ±o de creación de pregunta: 2009-01-01
 questions[50]= "51)  Indique cu&aacute;l de los siguientes derechos de los ciudadanos al relacionarse con las Administraciones P&uacute;blicas por medios electr&oacute;nicos NO est&aacute; reconocido por la ley 11/2007";
 choices[50]= new Array();
 choices[50][0] = "A la igualdad en el acceso electr&oacute;nico a los servicios de las Administraciones P&uacute;blicas.";
 choices[50][1] = "A conocer por medios electr&oacute;nicos el estado de tramitaci&oacute;n de cualquier procedimiento administrativo.";
 choices[50][2] = "A obtener copias electr&oacute;nicas de los documentos electr&oacute;nicos que formen parte de procedimientos en los que tengan la condici&oacute;n de interesado.";
 choices[50][3] = "A la conservaci&oacute;n en formato electr&oacute;nico por las Administraciones P&uacute;blicas de los documentos electr&oacute;nicos que formen parte de un expediente.";
 answers[50] = choices[50][1];
 units[50] = "43";
 comments[50] = "Id Pregunta: 5792. MAP 2008 A2";


//  Id pregunta: 6170 AÃ±o de creación de pregunta: 2010-01-01
 questions[51]= "52)  Indique el nivel, que normalmente se corresponde con un jefe de &aacute;rea:";
 choices[51]= new Array();
 choices[51][0] = "26.";
 choices[51][1] = "27.";
 choices[51][2] = "28.";
 choices[51][3] = "29.";
 answers[51] = choices[51][2];
 units[51] = "24";
 comments[51] = "Id Pregunta: 6170. ";


//  Id pregunta: 6394 AÃ±o de creación de pregunta: 2010-01-01
 questions[52]= "53)  &iquest;Es posible establecer la obligaci&oacute;n de comunicarse electr&oacute;nicamente con los &oacute;rganos de la Administraci&oacute;n General del Estado o sus organismos p&uacute;blicos vinculados o dependientes?";
 choices[52]= new Array();
 choices[52][0] = "S&iacute;, en cualquier caso";
 choices[52][1] = "No, en ning&uacute;n caso";
 choices[52][2] = "S&iacute;, en determinados casos previstos y mediante orden ministerial";
 choices[52][3] = "S&iacute;, en determinados casos previstos y mediante resoluci&oacute;n de la Subsecretar&iacute;a del Ministerio o titular del organismo p&uacute;blico competente";
 answers[52] = choices[52][2];
 units[52] = "43";
 comments[52] = "Id Pregunta: 6394. Art&iacute;culo 32 RD 1671/2009";


//  Id pregunta: 6600 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)  Un contrato de suministros del Ministerio del Interior estar&aacute; sujeto a regulaci&oacute;n armonizada si su valor estimado es: ";
 choices[53]= new Array();
 choices[53][0] = "Superior a 134.000 euros";
 choices[53][1] = "Superior a 125.000";
 choices[53][2] = "Superior a 206.000";
 choices[53][3] = "Superior a 193.000";
 answers[53] = choices[53][0];
 units[53] = "41";
 comments[53] = "Id Pregunta: 6600. Art&iacute;culo 15.1.a) RD Legislativo 3/2011. Cifra modificada por Orden HAP/2425/2013.";


//  Id pregunta: 7143 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  Se&ntilde;ala la opci&oacute;n que NO se encuentra en los objetivos de MAGERIT v2:";
 choices[54]= new Array();
 choices[54][0] = "Concienciar a los responsables de los sistemas de informaci&oacute;n de la existencia de riesgos y de la necesidad de atajarlos a tiempo";
 choices[54][1] = "Ofrecer un m&eacute;todo sistem&aacute;tico para analizar los riesgos siguiendo el Libro Blanco de Buenas Pr&aacute;cticas en Materia de Seguridad para la Administraci&oacute;n Europea";
 choices[54][2] = "Ayudar a descubrir y planificar las medidas oportunas para mantener los riesgos bajo control";
 choices[54][3] = "Apoyar la preparaci&oacute;n a la Organizaci&oacute;n para procesos de evaluaci&oacute;n, auditoria, certificaci&oacute;n o acreditaci&oacute;n";
 answers[54] = choices[54][1];
 units[54] = "33";
 comments[54] = "Id Pregunta: 7143. Examen TIC B 2009";


//  Id pregunta: 7327 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  &iquest;En qu&eacute; categor&iacute;as se dividen los miembros de ISO?";
 choices[55]= new Array();
 choices[55][0] = "Natos, Correspondientes y Suscritos";
 choices[55][1] = "Natos, Asociados y Suscritos";
 choices[55][2] = "Natos, Asociados, Correspondientes y Suscritos";
 choices[55][3] = "Natos, de Pleno Derecho y Asociados";
 answers[55] = choices[55][0];
 units[55] = "42";
 comments[55] = "Id Pregunta: 7327. NULL";


//  Id pregunta: 7330 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  &iquest;Qu&eacute; tipos de miembro tiene AENOR?";
 choices[56]= new Array();
 choices[56][0] = "Natos, Corporativos, Adheridos y de Honor";
 choices[56][1] = "Adheridos, de Pleno Derecho y Suscritos";
 choices[56][2] = "Correspondientes, Individuales, Corporativos y de Honor";
 choices[56][3] = "Corporativos, Adheridos, Individuales y de Honor";
 answers[56] = choices[56][3];
 units[56] = "42";
 comments[56] = "Id Pregunta: 7330. www.aenor.es";


//  Id pregunta: 8398 AÃ±o de creación de pregunta: 2011-01-01
 questions[57]= "58)  Seg&uacute;n el Real Decreto 1671/2009, las sedes electr&oacute;nicas de la Administraci&oacute;n General del Estado se crean: ";
 choices[57]= new Array();
 choices[57][0] = "Por Orden Ministerial o Resoluci&oacute;n del titular del organismo. ";
 choices[57][1] = "Por Real Decreto del Presidente del Gobierno. ";
 choices[57][2] = "Por Orden Conjunta del Ministerio de la Presidencia y del Ministerio del que se trate. ";
 choices[57][3] = "Por Acuerdo del Consejo Superior de Administraci&oacute;n Electr&oacute;nica. ";
 answers[57] = choices[57][0];
 units[57] = "43";
 comments[57] = "Id Pregunta: 8398. Examen TIC A2 2010";


//  Id pregunta: 8506 AÃ±o de creación de pregunta: 2011-01-01
 questions[58]= "59)  La segunda versi&oacute;n de la Metodolog&iacute;a de An&aacute;lisis y Gesti&oacute;n de Riesgos de los Sistemas de Informaci&oacute;n (MAGERIT v2) define un conjunto de procesos para realizar el an&aacute;lisis y gesti&oacute;n de riesgos, &iquest;Cu&aacute;l de las siguientes actividades pertenece al proceso P1 &quot;Planificaci&oacute;n&quot;? ";
 choices[58]= new Array();
 choices[58][0] = "Lanzamiento del proyecto. ";
 choices[58][1] = "Toma de decisiones. ";
 choices[58][2] = "Ejecuci&oacute;n del plan. ";
 choices[58][3] = "Estimaci&oacute;n del estado de riesgo. ";
 answers[58] = choices[58][0];
 units[58] = "32";
 comments[58] = "Id Pregunta: 8506. Examen TIC A2 2010";


//  Id pregunta: 8507 AÃ±o de creación de pregunta: 2011-01-01
 questions[59]= "60)  Seg&uacute;n MAGERlT /2 los activos se agrupan en capas que van de la capa 1 a la capa 5. &iquest;En qu&eacute; capa se encuentra el Hardware? ";
 choices[59]= new Array();
 choices[59][0] = "Capa 1";
 choices[59][1] = "Capa 2";
 choices[59][2] = "Capa 3";
 choices[59][3] = "Capa 4";
 answers[59] = choices[59][1];
 units[59] = "32";
 comments[59] = "Id Pregunta: 8507. Examen TIC A2 2010";


//  Id pregunta: 8741 AÃ±o de creación de pregunta: 2011-01-01
 questions[60]= "61)  En un organismo p&uacute;blico se gestionan datos personales relativos a la comisi&oacute;n de infracciones administrativas, pero, en ning&uacute;n caso, infracciones penales, &iquest;deben cifrar las transmisiones que puedan hacer de esos datos, a trav&eacute;s de redes p&uacute;blicas?";
 choices[60]= new Array();
 choices[60][0] = "NO en todos los casos. Como no se trata de infracciones penales las medidas de seguridad requeridas son las de nivel bajo, siempre que esos datos queden en el &aacute;mbito de la Administraci&oacute;n";
 choices[60][1] = "Si, se trata de datos de infracciones, que requieren por tanto medidas de nivel alto, aunque el cifrado se puede sustituir por cualquier otro mecanismo que garantice que la informaci&oacute;n no sea inteligible ni manipulada por terceros";
 choices[60][2] = "NO se requiere tal cifrado, pues las medidas que requieren ese tipo de datos son las de nivel medio y el mencionado cifrado es una medida de seguridad de nivel alto.";
 choices[60][3] = "Si. El cifrado a trav&eacute;s de redes p&uacute;blicas, a diferencia del realizado a trav&eacute;s de redes inal&aacute;mbricas es una medida de nivel medio, requerida en el caso planteado.";
 answers[60] = choices[60][2];
 units[60] = "29";
 comments[60] = "Id Pregunta: 8741. Examen TIC A2 2010 interna";


//  Id pregunta: 8750 AÃ±o de creación de pregunta: 2011-01-01
 questions[61]= "62)  Dentro del contexto que marca la Ley 11/2007, un expediente electr&oacute;nico es:";
 choices[61]= new Array();
 choices[61][0] = "La copia electr&oacute;nica de un expediente en papel, que es el que conservar&aacute; la eficacia jur&iacute;dica, foliado mediante un &Iacute;ndice electr&oacute;nico y firmado electr&oacute;nicamente";
 choices[61][1] = "El conjunto de documentos electr&oacute;nicos correspondientes a alguno de los procedimientos administrativos incluidos en la normativa de creaci&oacute;n de la sede electr&oacute;nica";
 choices[61][2] = "El conjunto de documentos electr&oacute;nicos correspondientes a un procedimiento administrativo, cualquiera que sea el Upo de informaci&oacute;n que contengan";
 choices[61][3] = "Una aplicaci&oacute;n inform&aacute;tica para la gesti&oacute;n automatizada de expedientes en el &aacute;mbito de la Administraci&oacute;n General del Estado.";
 answers[61] = choices[61][2];
 units[61] = "43";
 comments[61] = "Id Pregunta: 8750. Examen TIC A2 2010 interna";


//  Id pregunta: 8898 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  Se&ntilde;ale la respuesta correcta relativa a m&eacute;todos de asignaci&oacute;n de pesos a los criterios";
 choices[62]= new Array();
 choices[62][0] = "El m&eacute;todo Delphi es un m&eacute;todo de asignaci&oacute;n indirecta";
 choices[62][1] = "El m&eacute;todo de las Utilidades Relativas es un m&eacute;todo de asignaci&oacute;n directa y el m&eacute;todo de AHP es un m&eacute;todo de asignaci&oacute;n indirecta";
 choices[62][2] = "Tanto el m&eacute;todo de las Utilidades Relativas como el m&eacute;todo AHP son m&eacute;todos de asignaci&oacute;n directa";
 choices[62][3] = "El m&eacute;todo Delphi es un m&eacute;todo de asignaci&oacute;n directa y el m&eacute;todo AHP es un m&eacute;todo de asignaci&oacute;n indirecta";
 answers[62] = choices[62][3];
 units[62] = "34";
 comments[62] = "Id Pregunta: 8898. ";


//  Id pregunta: 9071 AÃ±o de creación de pregunta: 2013-01-01
 questions[63]= "64)  Se&ntilde;ale la afirmaci&oacute;n FALSA:";
 choices[63]= new Array();
 choices[63][0] = "El acr&oacute;nimo XAG se refiere a XML Accesibility Guidelines. ";
 choices[63][1] = "En las normas WCAG 2.0, el nivel se otorga a nivel de procesos y subprocesos. ";
 choices[63][2] = "El W3C publica gram&aacute;ticas HTML que deben satisfacerse para lograr el nivel AA en las normas WCAG 2.0. ";
 choices[63][3] = "WAI-ARIA es un acr&oacute;nimo que significa Web Accesibility Initiative - Accesible Rich Internet Applications. ";
 answers[63] = choices[63][1];
 units[63] = "39";
 comments[63] = "Id Pregunta: 9071. ";


//  Id pregunta: 9079 AÃ±o de creación de pregunta: 2013-01-01
 questions[64]= "65)  Para cumplir el nivel AA en la pauta &quot;Ayuda a la entrada de datos&quot;, respecto a los formularios de entrada de datos que tengan consecuencias legales, cu&aacute;l de las siguientes opciones NO se exige:";
 choices[64]= new Array();
 choices[64][0] = "Tipograf&iacute;a clara y legible. ";
 choices[64][1] = "Verificaci&oacute;n por parte del usuario.";
 choices[64][2] = "Reversibilidad. ";
 choices[64][3] = "Confirmaci&oacute;n.";
 answers[64] = choices[64][0];
 units[64] = "39";
 comments[64] = "Id Pregunta: 9079. ";


//  Id pregunta: 9282 AÃ±o de creación de pregunta: 2013-01-01
 questions[65]= "66)  NO es un principio general del Texto Refundido de la Ley de Contratos del Sector P&uacute;blico:";
 choices[65]= new Array();
 choices[65][0] = "Libertad de acceso a las licitaciones.";
 choices[65][1] = "No discriminaci&oacute;n e igualdad de trato entre los candidatos. ";
 choices[65][2] = "Utilizaci&oacute;n eficiente de los fondos destinados a contratos p&uacute;blicos. ";
 choices[65][3] = "Riesgo y ventura del contratante en la ejecuci&oacute;n de las obras.";
 answers[65] = choices[65][3];
 units[65] = "41";
 comments[65] = "Id Pregunta: 9282. ";


//  Id pregunta: 9320 AÃ±o de creación de pregunta: 2013-01-01
 questions[66]= "67)  Cu&aacute;l de las siguientes no es un requisito que debe cumplir una evidencia";
 choices[66]= new Array();
 choices[66][0] = "Suficiente";
 choices[66][1] = "Eficiente";
 choices[66][2] = "Relevante";
 choices[66][3] = "Competente";
 answers[66] = choices[66][1];
 units[66] = "31";
 comments[66] = "Id Pregunta: 9320. ";


//  Id pregunta: 9378 AÃ±o de creación de pregunta: 2013-01-01
 questions[67]= "68)  &iquest;Qu&eacute; m&eacute;todo de ordenaci&oacute;n de alternativas no soporta la herramienta inform&aacute;tica SSD-AAPP?";
 choices[67]= new Array();
 choices[67][0] = "ELECTRE";
 choices[67][1] = "PROMETHEE";
 choices[67][2] = "TOPSIS";
 choices[67][3] = "M&eacute;todo Lexicogr&aacute;fico";
 answers[67] = choices[67][0];
 units[67] = "34";
 comments[67] = "Id Pregunta: 9378. ";


//  Id pregunta: 9407 AÃ±o de creación de pregunta: 2013-01-01
 questions[68]= "69)  Cu&aacute;l es el prop&oacute;sito fundamental de una Oficina de Gesti&oacute;n de Proyectos (PMO)";
 choices[68]= new Array();
 choices[68][0] = "Gestionar de forma centralizada los proyectos TIC en la organizaci&oacute;n";
 choices[68][1] = "Orientar al CIO en la identificaci&oacute;n y definici&oacute;n de futuros proyectos TIC";
 choices[68][2] = "Definir y mantener est&aacute;ndares de gesti&oacute;n de proyectos TIC en la organizaci&oacute;n";
 choices[68][3] = "Llevar la gesti&oacute;n de los proveedores externos";
 answers[68] = choices[68][2];
 units[68] = "26";
 comments[68] = "Id Pregunta: 9407. ";


//  Id pregunta: 9546 AÃ±o de creación de pregunta: 2013-01-01
 questions[69]= "70)  Seg&uacute;n la LSSI,  Los prestadores de servicios de la sociedad de la informaci&oacute;n que faciliten enlaces a otros contenidos o incluyan en los suyos directorios o instrumentos de b&uacute;squeda de contenidos no ser&aacute;n responsables por la informaci&oacute;n a la que dirijan a los destinatarios de sus servicios, siempre que ";
 choices[69]= new Array();
 choices[69][0] = "No tengan conocimiento efectivo de que la actividad o la informaci&oacute;n a la que remiten o recomiendan es il&iacute;cita o de que lesiona bienes o derechos de un tercero susceptibles de indemnizaci&oacute;n";
 choices[69][1] = "A&uacute;n teniendo conocimiento de lo estipulado en la respuesta a), act&uacute;en con diligencia para suprimir o inutilizar el enlace correspondiente.";
 choices[69][2] = "Las respuestas a) y b) son correctas";
 choices[69][3] = "Ninguna de las anteriores";
 answers[69] = choices[69][2];
 units[69] = "30";
 comments[69] = "Id Pregunta: 9546. Ley 34/2002, art&iacute;culo 17";


//  Id pregunta: 9645 AÃ±o de creación de pregunta: 2014-01-01
 questions[70]= "71)  Entre los &oacute;rganos consultivos, referidos en el RD Legislativo 3/2011, no se encuentra:";
 choices[70]= new Array();
 choices[70][0] = "Mesas de contrataci&oacute;n";
 choices[70][1] = "Junta Consultiva de Contrataci&oacute;n Administrativa del Estado";
 choices[70][2] = "&Oacute;rganos consultivos en las CCAA";
 choices[70][3] = "Todos los anteriores";
 answers[70] = choices[70][0];
 units[70] = "41";
 comments[70] = "Id Pregunta: 9645. Art. 324, Art. 325 RD Legislativo 3/2011";


//  Id pregunta: 9736 AÃ±o de creación de pregunta: 2014-01-01
 questions[71]= "72)  Si un equipo tiene una aver&iacute;a &iquest;cu&aacute;l de los siguientes indicadores nos da informaci&oacute;n sobre el tiempo medio requerido para reparar dicha aver&iacute;a?";
 choices[71]= new Array();
 choices[71][0] = "MTBF";
 choices[71][1] = "MTBR";
 choices[71][2] = "MTTR";
 choices[71][3] = "MTTF";
 answers[71] = choices[71][2];
 units[71] = "32";
 comments[71] = "Id Pregunta: 9736. Examen TIC-A2 2013-Libre";


//  Id pregunta: 9998 AÃ±o de creación de pregunta: 2014-01-01
 questions[72]= "73)  El recurso especial en materia de contrataci&oacute;n permite la impugnaci&oacute;n, previa alrecurso contencioso-administrativo, de";
 choices[72]= new Array();
 choices[72][0] = "los actos de tr&aacute;mite que no resuelven la licitaci&oacute;n.";
 choices[72][1] = "las penalizaciones impuestas por ejecuci&oacute;n defectuosa.";
 choices[72][2] = "los acuerdos de adjudicaci&oacute;n.";
 choices[72][3] = "la resoluci&oacute;n del recurso de Alzada.";
 answers[72] = choices[72][2];
 units[72] = "41";
 comments[72] = "Id Pregunta: 9998. ";


//  Id pregunta: 10151 AÃ±o de creación de pregunta: 2014-01-01
 questions[73]= "74)  Seg&uacute;n la ley 25/2007, &iquest;cu&aacute;l de las siguientes es una infracci&oacute;n muy grave?";
 choices[73]= new Array();
 choices[73][0] = "La no conservaci&oacute;n reiterada o sistem&aacute;tica de los datos a los que se refiere el art&iacute;culo 3.";
 choices[73][1] = "la no conservaci&oacute;n en ning&uacute;n momento de los datos a los que se refiere el art&iacute;culo 3.";
 choices[73][2] = "La conservaci&oacute;n de los datos por un per&iacute;odo inferior al establecido en el art&iacute;culo 5.";
 choices[73][3] = "El incumplimiento deliberado de las obligaciones de protecci&oacute;n y seguridad de los datos establecidas en el art&iacute;culo 8";
 answers[73] = choices[73][1];
 units[73] = "30";
 comments[73] = "Id Pregunta: 10151. ";


//  Id pregunta: 10255 AÃ±o de creación de pregunta: 2014-01-01
 questions[74]= "75)  Seg&uacute;n el art&iacute;culo 10 de la Ley 15/1999, LOPD, el deber de secreto: ";
 choices[74]= new Array();
 choices[74][0] = "Afecta a todos los que intervengan en el tratamiento de datos, por tiempo indefinido";
 choices[74][1] = "Afecta a todos los que intervengan en el tratamiento de datos, s&oacute;lo mientras dure dicho tratamiento";
 choices[74][2] = "Afecta s&oacute;lo al responsable del fichero y al encargado del tratamiento, por tiempo indefinido";
 choices[74][3] = "Afecta s&oacute;lo al responsable del fichero y al encargado del tratamiento, s&oacute;lo mientras dure dicho tratamiento";
 answers[74] = choices[74][0];
 units[74] = "29";
 comments[74] = "Id Pregunta: 10255. Art&iacute;culo 10 de la Ley 15/1999";


//  Id pregunta: 10257 AÃ±o de creación de pregunta: 2014-01-01
 questions[75]= "76)  En referencia al tratamiento de datos de car&aacute;cter personal, el ejercicio de los derechos de acceso, rectificaci&oacute;n, cancelaci&oacute;n y oposici&oacute;n";
 choices[75]= new Array();
 choices[75][0] = "El responsable al que se dirija la petici&oacute;n puede no contestar, entendi&eacute;ndose en ese caso que no obran en su poder datos personales del solicitante";
 choices[75][1] = "El responsable al que se dirija la petici&oacute;n puede no contestar, entendi&eacute;ndose en ese caso que, de obrar en su poder datos personales del solicitante, &eacute;stos no son datos especialmente protegidos";
 choices[75][2] = "El responsable al que se dirija la petici&oacute;n debe contestar en todo caso";
 choices[75][3] = "El responsable al que se dirija la petici&oacute;n debe contestar en todo caso si los datos se refieren a menores, no siendo obligatorio responder en otros casos";
 answers[75] = choices[75][2];
 units[75] = "29";
 comments[75] = "Id Pregunta: 10257. Art&iacute;culo 25.2 del RD 1720/2007";


//  Id pregunta: 10568 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  Una de las diferencias entre un Plan de Recuperaci&oacute;n ante desastres (PRD o DRP en ingl&eacute;s) y un Plan de Contingencia es que:";
 choices[76]= new Array();
 choices[76][0] = "El PRD debe ser realizado antes que el Plan de Contingencia";
 choices[76][1] = "El Plan de Contingencia debe ser realizado antes que el PRD";
 choices[76][2] = "El Plan de Contingencia realiza acciones para poder continuar con las actividades cr&iacute;ticas del negocio aunque sea en modo manual o semi autom&aacute;tico mientras que el PRD, en paralelo al Plan de Contingencia, trata de recuperar las aplicaciones y la informaci&oacute;n da&ntilde;ada para volver a la normalidad.";
 choices[76][3] = "El PRD realiza acciones para poder continuar con las actividades cr&iacute;ticas del negocio aunque sea en modo manual o semi autom&aacute;tico mientras que el Plan de Contingencia trata de recuperar las aplicaciones y la informaci&oacute;n da&ntilde;ada para volver a la normalidad.";
 answers[76] = choices[76][2];
 units[76] = "32";
 comments[76] = "Id Pregunta: 10568. ";


//  Id pregunta: 10706 AÃ±o de creación de pregunta: 2015-01-01
 questions[77]= "78)  &iquest;Cu&aacute;l no es un componente del expediente electr&oacute;nico?";
 choices[77]= new Array();
 choices[77][0] = "Descripci&oacute;n de los documentos electr&oacute;nicos.";
 choices[77][1] = "&Iacute;ndice electr&oacute;nico.";
 choices[77][2] = "Firma del &Iacute;ndice electr&oacute;nico.";
 choices[77][3] = "Metadatos del expediente electr&oacute;nico.";
 answers[77] = choices[77][0];
 units[77] = "43";
 comments[77] = "Id Pregunta: 10706. ";


//  Id pregunta: 10711 AÃ±o de creación de pregunta: 2015-01-01
 questions[78]= "79)  &iquest;Qu&eacute; especificaci&oacute;n de SICRES se incluye en la Norma T&eacute;cnica de Interoperabilidad de Modelo de Datos para el Intercambio de asientos entre las entidades registrales?";
 choices[78]= new Array();
 choices[78][0] = "1";
 choices[78][1] = "2";
 choices[78][2] = "3";
 choices[78][3] = "4";
 answers[78] = choices[78][1];
 units[78] = "43";
 comments[78] = "Id Pregunta: 10711. ";


//  Id pregunta: 10725 AÃ±o de creación de pregunta: 2015-01-01
 questions[79]= "80)  La utilizaci&oacute;n de qu&eacute; est&aacute;ndares no est&aacute; explicitamente prevista en la NTI de Protocolos de Intermediaci&oacute;n";
 choices[79]= new Array();
 choices[79][0] = "WSDL";
 choices[79][1] = "XML";
 choices[79][2] = "TLS";
 choices[79][3] = "RSS";
 answers[79] = choices[79][3];
 units[79] = "43";
 comments[79] = "Id Pregunta: 10725. ";


//  Id pregunta: 10782 AÃ±o de creación de pregunta: 2015-01-01
 questions[80]= "81)  Respecto al sistema de c&oacute;digo seguro de verificaci&oacute;n, seg&uacute;n el Real Decreto 1671/2009, &iquest;cu&aacute;l de las siguientes es una afirmaci&oacute;n verdadera?";
 choices[80]= new Array();
 choices[80][0] = "Garantiza la confidencialidad de un documento.";
 choices[80][1] = "Garantiza la posibilidad de verificar el documento que tenga asociado por tiempo ilimitado.";
 choices[80][2] = "Su aplicaci&oacute;n requerir&aacute; una orden ministerial del Director General del organismo p&uacute;blico.";
 choices[80][3] = "Garantiza su vinculaci&oacute;n con el documento generado y con el firmante.";
 answers[80] = choices[80][3];
 units[80] = "43";
 comments[80] = "Id Pregunta: 10782. Examen GSI 2014";


//  Id pregunta: 10806 AÃ±o de creación de pregunta: 2015-01-01
 questions[81]= "82)  Seg&uacute;n Magerit v3, &iquest;qu&eacute; concepto se corresponder&iacute;a con la definici&oacute;n: &quot;proceso espec&iacute;fico cuyo objetivo es legitimar al sistema para formar parte de sistemas m&aacute;s amplios&quot;?";
 choices[81]= new Array();
 choices[81][0] = "Auditor&iacute;a.";
 choices[81][1] = "Acreditaci&oacute;n.";
 choices[81][2] = "Certificaci&oacute;n.";
 choices[81][3] = "Evaluaci&oacute;n.";
 answers[81] = choices[81][1];
 units[81] = "33";
 comments[81] = "Id Pregunta: 10806. Examen GSI 2014";


//  Id pregunta: 10807 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  Se&ntilde;ale de las siguientes cu&aacute;l es una t&eacute;cnica espec&iacute;fica dentro de un proyecto de an&aacute;lisis y gesti&oacute;n de riesgos, seg&uacute;n la gu&iacute;a de T&eacute;cnicas de MAGERIT v3:";
 choices[82]= new Array();
 choices[82][0] = "Sesiones de trabajo.";
 choices[82][1] = "Valoraciones Delphi.";
 choices[82][2] = "Histogramas.";
 choices[82][3] = "&Aacute;rboles de ataque.";
 answers[82] = choices[82][3];
 units[82] = "32, 33";
 comments[82] = "Id Pregunta: 10807. Examen GSI 2014";


//  Id pregunta: 10961 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  &iquest;C&uacute;al de las siguientes opciones NO es un plan incluido en la Agenda Digital para Espa&ntilde;a?";
 choices[83]= new Array();
 choices[83][0] = "Contenidos y econom&iacute;a digital.";
 choices[83][1] = "Inclusi&oacute;n digital y empleabilidad.";
 choices[83][2] = "Confianza en el &aacute;mbito digital.";
 choices[83][3] = "Servicios p&uacute;blicos en la nube.";
 answers[83] = choices[83][3];
 units[83] = "30";
 comments[83] = "Id Pregunta: 10961. TIC A1 AGE 2014";


//  Id pregunta: 11013 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  &iquest;Cu&aacute;l es el portal nacional que organiza y gestiona el Cat&aacute;logo de Informaci&oacute;n P&uacute;blica de la Administraci&oacute;n General del Estado?";
 choices[84]= new Array();
 choices[84][0] = "www.datos.gob.es";
 choices[84][1] = "www.rediris.es";
 choices[84][2] = "www.pae.es";
 choices[84][3] = "administracionelectronica.gob.es";
 answers[84] = choices[84][0];
 units[84] = "30";
 comments[84] = "Id Pregunta: 11013. ";


//  Id pregunta: 11026 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  &iquest;Cu&aacute;l de los siguientes se corresponde con el Comit&eacute; T&eacute;cnico en el &aacute;mbito de las Tecnolog&iacute;as de la Informaci&oacute;n dentro de ISO?";
 choices[85]= new Array();
 choices[85][0] = "ISO/TC 1";
 choices[85][1] = "ISO/TC 2";
 choices[85][2] = "ISO/IEC JTC 1";
 choices[85][3] = "ISO/IEC JPC 2";
 answers[85] = choices[85][2];
 units[85] = "42";
 comments[85] = "Id Pregunta: 11026. ";


//  Id pregunta: 11098 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  De acuerdo con la LOPD, seleccione la respuesta verdadera";
 choices[86]= new Array();
 choices[86][0] = "Iniciar la recogida de datos de car&aacute;cter personal sin autorizaci&oacute;n de disposici&oacute;n general publicada en el BOE o diario oficial correspondiente es una infracci&oacute;n GRAVE.";
 choices[86][1] = "No atender, por motivos formales, la solicitud del interesado de rectificaci&oacute;n o cancelaci&oacute;n de los datos personales objeto de tratamiento cuando legalmente proceda es una infracci&oacute;n MUY GRAVE";
 choices[86][2] = "Las respuestas a) y b) son falsas";
 choices[86][3] = "Las respuestas a) y b) son verdaderas";
 answers[86] = choices[86][0];
 units[86] = "29";
 comments[86] = "Id Pregunta: 11098. ";


//  Id pregunta: 11103 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  Seleccione la opci&oacute;n verdadera respecto al Servicio de Verificaci&oacute;n de Datos de Identidad";
 choices[87]= new Array();
 choices[87][0] = "Permite confirmar o verificar que un determinado conjunto de datos corresponden al n&uacute;mero de identificaci&oacute;n introducido por el usuario.";
 choices[87][1] = "La validaci&oacute;n de dichos datos se realiza contra las Bases de Datos del organismo que los custodia: Direcci&oacute;n General Polic&iacute;a (DGP).";
 choices[87][2] = "Las respuestas a) y b) son falsas";
 choices[87][3] = "Las respuestas a) y b) son verdaderas";
 answers[87] = choices[87][3];
 units[87] = "30";
 comments[87] = "Id Pregunta: 11103. ";


//  Id pregunta: 11119 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  &iquest;Por qu&eacute; acuerdo marco comprar&iacute;a usted un ordenador personal?";
 choices[88]= new Array();
 choices[88][0] = "AM 2/2013";
 choices[88][1] = "AM 10/2013";
 choices[88][2] = "AM 13/2013";
 choices[88][3] = "AM 5/2013";
 answers[88] = choices[88][0];
 units[88] = "41";
 comments[88] = "Id Pregunta: 11119. ";


//  Id pregunta: 11244 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  En materia de contrataci&oacute;n, es competencia de la DTIC:";
 choices[89]= new Array();
 choices[89][0] = "El informe t&eacute;cnico facultativo de los convenios y encomiendas de gesti&oacute;n que tengan por objeto la adquisici&oacute;n de bienes y servicios inform&aacute;ticos, as&iacute; como de las memorias y pliegos de prescripciones t&eacute;cnicas de contrataciones de bienes y servicios inform&aacute;ticos.";
 choices[89][1] = "A) y para aquellos contratos de cuant&iacute;a de m&aacute;s de 1.000.000 euros, el resto los informa la correspondiente CMAD.";
 choices[89][2] = "El seguimiento de la ejecuci&oacute;n del gasto en materia de tecnolog&iacute;as de la informaci&oacute;n y comunicaciones.";
 choices[89][3] = "Estas competencias las llevar&aacute; a cabo la Divisi&oacute;n de Inversiones TIC dependiente de la Direcci&oacute;n General de Racionalizaci&oacute;n y Contrataci&oacute;n Centralizada.";
 answers[89] = choices[89][2];
 units[89] = "41";
 comments[89] = "Id Pregunta: 11244. ";


//  Id pregunta: 11247 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  En lo Referente a la publicidad de los procedimientos de licitaci&oacute;n de &aacute;mbito estatal, es falso que:";
 choices[90]= new Array();
 choices[90][0] = "En el caso de los procedimientos negociados con publicidad, la publicaci&oacute;n en el perfil del contratante podr&aacute; sustituir a la del BOE.";
 choices[90][1] = "Los contratos no SARA se publican en el BOE y en el Perfil del Contratante.";
 choices[90][2] = "Los contratos SARA se publican en el DOUE, en lugar del BOE, y en el Perfil del Contratante.";
 choices[90][3] = "Ninguna es correcta.";
 answers[90] = choices[90][2];
 units[90] = "41";
 comments[90] = "Id Pregunta: 11247. ";


//  Id pregunta: 11298 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  En relaci&oacute;n con la contrataci&oacute;n administrativa se&ntilde;ale la opci&oacute;n verdadera.";
 choices[91]= new Array();
 choices[91][0] = "Est&aacute; prohibido la realizaci&oacute;n de pactos en cualquier caso.";
 choices[91][1] = "Obliga a entes locales.";
 choices[91][2] = "La perfecci&oacute;n de un contrato, se produce en su adjudicaci&oacute;n provisional.";
 choices[91][3] = "La garant&iacute;a global, responde solamente ante un &oacute;rgano de contrataci&oacute;n.";
 answers[91] = choices[91][1];
 units[91] = "41";
 comments[91] = "Id Pregunta: 11298. Obliga a todas las AAPP";


//  Id pregunta: 11483 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  El Plan de Transformaci&oacute;n Digital de la Administraci&oacute;n General del Estado (AGE) y sus Organismos P&uacute;blicos, Estrategia TIC 2015-2020, fue aprobado por";
 choices[92]= new Array();
 choices[92][0] = "La Comisi&oacute;n de Estrategia TIC (CETIC) el 2 de Octubre de 2015.";
 choices[92][1] = "El Consejo de Ministros el 2 de Octubre de 2015.";
 choices[92][2] = "La Direcci&oacute;n TIC (DTIC) el 15 de septiembre de 2015.";
 choices[92][3] = "Por el Consejo Superior de Administraci&oacute;n Electr&oacute;nica (CSAE) el 15 de Septiembre de 2015.";
 answers[92] = choices[92][1];
 units[92] = "44";
 comments[92] = "Id Pregunta: 11483. NULL";


//  Id pregunta: 11493 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Qu&eacute; contratos de servicio y suministro est&aacute;n sujetos a regulaci&oacute;n armonizada, seg&uacute;n la Ley de Contratos del Sector P&uacute;blico?";
 choices[93]= new Array();
 choices[93][0] = "Todos los contratos de servicio y suministro est&aacute;n sujetos a regulaci&oacute;n armonizada.";
 choices[93][1] = "Aquellos cuyo valor estimado es igual o superior a 134.000 &euro;, si son adjudicados por la Administraci&oacute;n General del Estado, sus Organismos Aut&oacute;nomos o la Seguridad Social, y aquellos cuyo valor estimado es igual o superior a 207.000 &euro; si son adjudicados por los dem&aacute;s entes p&uacute;blicos.";
 choices[93][2] = "Aquellos cuyo valor estimado es igual o superior a 207.000 &euro;, si son adjudicados por la Administraci&oacute;n General del Estado, sus Organismos Aut&oacute;nomos o la Seguridad Social, y aquellos cuyo valor estimado es igual o superior a 134.000 &euro; si son adjudicados por los dem&aacute;s entes p&uacute;blicos.";
 choices[93][3] = "Ning&uacute;n contrato de suministro, ni de servicio, est&aacute; sujeto a regulaci&oacute;n armonizada.";
 answers[93] = choices[93][1];
 units[93] = "41";
 comments[93] = "Id Pregunta: 11493. Orden HAP/2425/2013, de 23 de diciembre, por la que se publican los l&iacute;mites de los distintos tipos de contratos a efectos de la contrataci&oacute;n del sector p&uacute;blico a partir del 1 de enero de 2014";


//  Id pregunta: 11497 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;En qu&eacute; casos puede sustituirse el requisito de solvencia por el de clasifiaci&oacute;n?";
 choices[94]= new Array();
 choices[94][0] = "Contratos de obras cuyo valor estimado sea igual o superior a 500.000 &euro;.";
 choices[94][1] = "Contratos de servicios cuyo valor estimado sea igual o superior a 200.000 &euro;.";
 choices[94][2] = "En los 2 casos anteriores.";
 choices[94][3] = "En ninguno de los casos anteriores.";
 answers[94] = choices[94][2];
 units[94] = "38";
 comments[94] = "Id Pregunta: 11497. NULL";


//  Id pregunta: 11500 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  &iquest;Cu&aacute;l de los siguientes aspectos NO est&aacute; recogido como una Instrucci&oacute;n T&eacute;cnica de Seguridad seg&uacute;n el Esquema Nacional de Seguridad?";
 choices[95]= new Array();
 choices[95][0] = "Informe de Estado de Seguridad";
 choices[95][1] = "Auditor&iacute;a de Seguridad";
 choices[95][2] = "Interconexi&oacute;n en el Esquema Nacional de Seguridad";
 choices[95][3] = "Protocolo de Comunicaciones Seguras";
 answers[95] = choices[95][3];
 units[95] = "43";
 comments[95] = "Id Pregunta: 11500. Instrucci&oacute;n t&eacute;cnica de seguridad introducido por la disp. Adicional 4&ordf; RD 951/2015 que modifica el ENS.";


//  Id pregunta: 11746 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  &iquest;En qu&eacute; medida las entidades privadas tienen que cumplir la Ley de Transparencia?";
 choices[96]= new Array();
 choices[96][0] = "Las entidades privadas que perciban durante el per&iacute;odo de un a&ntilde;o ayudas o subvenciones p&uacute;blicas en una cuant&iacute;a superior a&nbsp;150.000 euros";
 choices[96][1] = "cuando al menos el&nbsp;40?% del total de sus ingresos anuales tengan car&aacute;cter de ayuda o subvenci&oacute;n p&uacute;blica, siempre que alcancen como m&iacute;nimo la cantidad de&nbsp;5.000 euros.";
 choices[96][2] = "No tienen que cumplir la ley de transparencia";
 choices[96][3] = "las cumplir&aacute;n sin ninguna limitaci&oacute;n";
 answers[96] = choices[96][1];
 units[96] = "41";
 comments[96] = "Id Pregunta: 11746. ";


//  Id pregunta: 11752 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  &iquest;Cu&aacute;l de los siguientes no es un principio de accesibilidad?";
 choices[97]= new Array();
 choices[97][0] = "robusto";
 choices[97][1] = "operable";
 choices[97][2] = "universal";
 choices[97][3] = "perceptible";
 answers[97] = choices[97][2];
 units[97] = "39";
 comments[97] = "Id Pregunta: 11752. ";


//  Id pregunta: 11762 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Qu&eacute; es la DTIC?";
 choices[98]= new Array();
 choices[98][0] = "Direcci&oacute;n General de las TI.";
 choices[98][1] = "Direcci&oacute;n con rango de Subsecretar&iacute;a.";
 choices[98][2] = "Subdirecci&oacute;n General de las TI";
 choices[98][3] = "Comit&eacute; t&eacute;cnico de las TI.";
 answers[98] = choices[98][1];
 units[98] = "43";
 comments[98] = "Id Pregunta: 11762. ";


//  Id pregunta: 11772 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Cu&aacute;l de las siguientes circunstancias da lugar necesariamente a la resoluci&oacute;n de un&nbsp;contrato?";
 choices[99]= new Array();
 choices[99][0] = "Ninguna de las anteriores es correcta";
 choices[99][1] = "La apertura de la fase de liquidaci&oacute;n en caso de concurso de acreedores&nbsp;";
 choices[99][2] = "la declaraci&oacute;n de concurso";
 choices[99][3] = "la demora de la Administraci&oacute;n en el pago superior a 6 meses";
 answers[99] = choices[99][1];
 units[99] = "41";
 comments[99] = "Id Pregunta: 11772. ";


