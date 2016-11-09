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


//  Id pregunta: 73 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Qu&eacute; m&eacute;todo de ordenaci&oacute;n de alternativas se basa en la comparaci&oacute;n binaria de las alternativas?:";
 choices[1]= new Array();
 choices[1][0] = "Concordancia";
 choices[1][1] = "M&eacute;todo lexicogr&aacute;fico";
 choices[1][2] = "Ponderaci&oacute;n lineal";
 choices[1][3] = "Ninguno de los anteriores";
 answers[1] = choices[1][0];
 units[1] = "34";
 comments[1] = "Id Pregunta: 73. ";


//  Id pregunta: 91 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  A efectos de la LOPD,  la persona f&iacute;sica o jur&iacute;dica, de naturaleza p&uacute;blica o privada, u &oacute;rgano administrativo, que decida sobre la finalidad, contenido y uso del tratamiento, es el:";
 choices[2]= new Array();
 choices[2][0] = "Encargado del tratamiento";
 choices[2][1] = "Afectado o interesado";
 choices[2][2] = "Responsable del fichero o tratamiento";
 choices[2][3] = "Decisor del tratamiento";
 answers[2] = choices[2][2];
 units[2] = "29";
 comments[2] = "Id Pregunta: 91. ";


//  Id pregunta: 137 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  El Consejo Consultivo de la Agencia de Protecci&oacute;n de Datos:";
 choices[3]= new Array();
 choices[3][0] = "Es un &oacute;rgano colegiado de asesoramiento del Director de la Agencia";
 choices[3][1] = "Emite informes en todas las cuestiones que le somete el Director";
 choices[3][2] = "Formula propuestas en temas relacionados con las competencias de la Agencia";
 choices[3][3] = "Todas son correctas";
 answers[3] = choices[3][3];
 units[3] = "29";
 comments[3] = "Id Pregunta: 137. ";


//  Id pregunta: 168 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  El valor econ&oacute;mico del producto software en sistemas complejos es:";
 choices[4]= new Array();
 choices[4][0] = "Despreciable, ya que el proveedor suele regalarlo con el hardware";
 choices[4][1] = "Independiente del n&uacute;mero de usuarios";
 choices[4][2] = "Generalmente mayor que el del producto hardware";
 choices[4][3] = "Menor que su coste de mantenimiento anual";
 answers[4] = choices[4][2];
 units[4] = "35";
 comments[4] = "Id Pregunta: 168. NULL";


//  Id pregunta: 221 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  En la planificaci&oacute;n de sistemas, la demanda latente produce:";
 choices[5]= new Array();
 choices[5][0] = "Un crecimiento reprimido.";
 choices[5][1] = "Un crecimiento evolutivo.";
 choices[5][2] = "Un crecimiento gradual.";
 choices[5][3] = "Un crecimiento no gradual.";
 answers[5] = choices[5][3];
 units[5] = "27";
 comments[5] = "Id Pregunta: 221. ";


//  Id pregunta: 225 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  En la teor&iacute;a de la decisi&oacute;n multicriterio, un criterio es:";
 choices[6]= new Array();
 choices[6][0] = "Las diversas opciones entre las que queremos seleccionar una";
 choices[6][1] = "Aspectos que nos interesan de cada opci&oacute;n";
 choices[6][2] = "Las evaluaciones que damos a cada opci&oacute;n";
 choices[6][3] = "La importancia que le damos a cada aspecto seg&uacute;n nuestro criterio";
 answers[6] = choices[6][1];
 units[6] = "34";
 comments[6] = "Id Pregunta: 225. ";


//  Id pregunta: 240 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  En un gr&aacute;fico PERT los nodos representan:";
 choices[7]= new Array();
 choices[7][0] = "Actividades.";
 choices[7][1] = "Sucesos.";
 choices[7][2] = "El camino cr&iacute;tico.";
 choices[7][3] = "La holgura de una actividad.";
 answers[7] = choices[7][1];
 units[7] = "27";
 comments[7] = "Id Pregunta: 240. ";


//  Id pregunta: 243 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  En un sistema de informaci&oacute;n:";
 choices[8]= new Array();
 choices[8][0] = "En el nivel operacional se toman decisiones a plazo relativamente corto";
 choices[8][1] = "En el nivel estrat&eacute;gico se toman decisiones a plazo relativamente corto";
 choices[8][2] = "En el nivel operacional se recogen datos del sistema real";
 choices[8][3] = "En el nivel t&aacute;ctico se toman decisiones a largo plazo";
 answers[8] = choices[8][2];
 units[8] = "21";
 comments[8] = "Id Pregunta: 243. ";


//  Id pregunta: 258 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  Es caracter&iacute;stico de las organizaciones basadas en la informaci&oacute;n:";
 choices[9]= new Array();
 choices[9][0] = "Especialistas que adquieren poder mediante el control de la informaci&oacute;n";
 choices[9][1] = "Gestores que adquieren poder mediante la informaci&oacute;n que les llega";
 choices[9][2] = "Grupos de personas que trabajan juntas para resolver un problema y luego se dispersan cuando el trabajo est&aacute; hecho";
 choices[9][3] = "Especialistas que dirigen y organizan su trabajo mediante interacci&oacute;n con sus colegas";
 answers[9] = choices[9][2];
 units[9] = "22";
 comments[9] = "Id Pregunta: 258. ";


//  Id pregunta: 285 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  La certificaci&oacute;n es:";
 choices[10]= new Array();
 choices[10][0] = "Actividad que tiene por objeto la evaluaci&oacute;n de conformidad de dise&ntilde;os, productos software, procesos o sistema";
 choices[10][1] = "Proceso por el que el sistema de calidad de una empresa es auditado para comprobar el cumplimiento de determinadas normas";
 choices[10][2] = "Descripci&oacute;n completa de un producto software y las interrelaciones de sus elementos";
 choices[10][3] = "Estructura organizativa, procedimientos, actividades, capacidades y recursos que juntos aseguran que los productos software satisfacen las necesidades impl&iacute;citas o establecidas en contrato por los clientes";
 answers[10] = choices[10][1];
 units[10] = "42";
 comments[10] = "Id Pregunta: 285. NULL";


//  Id pregunta: 291 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  La Decisi&oacute;n del Consejo 87/95/CEE:";
 choices[11]= new Array();
 choices[11][0] = "Se refiere a normas de tecnolog&iacute;as de la informaci&oacute;n y las comunicaciones relativas al intercambio de informaci&oacute;n y de datos y a la interoperabilidad de los sistemas";
 choices[11][1] = "Ha sido derogada por la Ley de Contratos de las Administraciones P&uacute;blicas";
 choices[11][2] = "Afecta a todas las Administraciones P&uacute;blicas";
 choices[11][3] = "No puede aplicarse directamente por los poderes adjudicadores, siendo necesario su trasposici&oacute;n al ordenamiento jur&iacute;dico espa&ntilde;ol";
 answers[11] = choices[11][0];
 units[11] = "40";
 comments[11] = "Id Pregunta: 291. ";


//  Id pregunta: 336 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  La primera fase a la hora de seleccionar un paquete o aplicaci&oacute;n est&aacute;ndar es:";
 choices[12]= new Array();
 choices[12][0] = "Llevar a cabo una investigaci&oacute;n preliminar";
 choices[12][1] = "Entrar en contacto con los suministradores";
 choices[12][2] = "Definir los requisitos del usuario";
 choices[12][3] = "Personalizar e implantar el paquete";
 answers[12] = choices[12][2];
 units[12] = "40";
 comments[12] = "Id Pregunta: 336. ";


//  Id pregunta: 366 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  Los datos de car&aacute;cter personal que hagan referencia al origen racial, a la salud y a la vida sexual s&oacute;lo podr&aacute;n ser recabados, tratados y cedidos cuando:";
 choices[13]= new Array();
 choices[13][0] = "Cuando lo disponga una Ley";
 choices[13][1] = "Si el afectado consiente expresamente.";
 choices[13][2] = "En los supuestos 'a' o 'b' o por razones de inter&eacute;s general.";
 choices[13][3] = "Nunca";
 answers[13] = choices[13][2];
 units[13] = "29";
 comments[13] = "Id Pregunta: 366. NULL";


//  Id pregunta: 392 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  Para determinar el nivel aceptable de seguridad hay que llegar a un equilibrio entre:";
 choices[14]= new Array();
 choices[14][0] = "El coste de los da&ntilde;os versus el coste de sus consecuencias";
 choices[14][1] = "El coste de las medidas de seguridad versus el presupuesto disponible";
 choices[14][2] = "Los costes y la probabilidad de los da&ntilde;os versus el coste de las medidas y seguridad para evitarlos";
 choices[14][3] = "El coste de los da&ntilde;os versus los da&ntilde;os que somos capaces de aceptar";
 answers[14] = choices[14][2];
 units[14] = "33";
 comments[14] = "Id Pregunta: 392. ";


//  Id pregunta: 395 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  Para planificaci&oacute;n de la capacidad de los sistemas se usan las metodolog&iacute;as:";
 choices[15]= new Array();
 choices[15][0] = "Proyecci&oacute;n lineal y teor&iacute;a de colas";
 choices[15][1] = "Simulaci&oacute;n";
 choices[15][2] = "Benchmark";
 choices[15][3] = "Todas las anteriores";
 answers[15] = choices[15][3];
 units[15] = "35";
 comments[15] = "Id Pregunta: 395. NULL";


//  Id pregunta: 404 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  Respecto a los derechos de rectificaci&oacute;n y cancelaci&oacute;n:";
 choices[16]= new Array();
 choices[16][0] = "El plazo para hacer efectiva la rectificaci&oacute;n o cancelaci&oacute;n solicitada por el afectado, es de 1 a&ntilde;o";
 choices[16][1] = "La cancelaci&oacute;n se ejecutar&aacute; mediante supresi&oacute;n de los datos";
 choices[16][2] = "Los datos cancelados no podr&aacute;n ser conservados en ning&uacute;n caso";
 choices[16][3] = "La cancelaci&oacute;n de los datos se ejecutar&aacute; mediante bloqueo de los datos, conserv&aacute;ndose los mismos &uacute;nicamente a disposici&oacute;n de los Tribunales o de las AAPP";
 answers[16] = choices[16][3];
 units[16] = "29";
 comments[16] = "Id Pregunta: 404. ";


//  Id pregunta: 433 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Seg&uacute;n la ISO se entiende como Sistema abierto:";
 choices[17]= new Array();
 choices[17][0] = "Un sistema inform&aacute;tico conectado de alguna manera con otros sistemas";
 choices[17][1] = "Un sistema inform&aacute;tico capaz de dialogar con el resto de su entorno seg&uacute;n las normas definidas por su fabricante";
 choices[17][2] = "Un sistema inform&aacute;tico capaz de interconectarse con otros de acuerdo con unas normas establecidas";
 choices[17][3] = "Un sistema al cual se pueden incorporar sucesivos m&oacute;dulos de ampliaci&oacute;n sin que su estructura se vea afectada";
 answers[17] = choices[17][2];
 units[17] = "40";
 comments[17] = "Id Pregunta: 433. ";


//  Id pregunta: 492 AÃ±o de creación de pregunta: 2003-01-01
 questions[18]= "19)  &iquest;Cuales son las t&eacute;cnicas utilizadas para la auditor&iacute;a de econom&iacute;a de los sistemas de informaci&oacute;n?";
 choices[18]= new Array();
 choices[18][0] = "Cuestionarios y entrevistas";
 choices[18][1] = "An&aacute;lisis  de inversiones e inventario de sistemas de informaci&oacute;n";
 choices[18][2] = "Informes econ&oacute;micos de inversiones en sistemas de informaci&oacute;n y an&aacute;lisis de rendimiento";
 choices[18][3] = "Informes de la organizaci&oacute;n, datos de proyectos y contratos, an&aacute;lisis costo-beneficio";
 answers[18] = choices[18][3];
 units[18] = "31, 32, 33";
 comments[18] = "Id Pregunta: 492. Pregunta similar a la del ex&aacute;men de SS del 2003 salvo en las opciones";


//  Id pregunta: 497 AÃ±o de creación de pregunta: 2003-01-01
 questions[19]= "20)  De acuerdo con la Ley Org&aacute;nica de Protecci&oacute;n de Datos, Ley 15/1999 del 13 de Diciembre, para ejercer los derechos de rectificaci&oacute;n y/o cancelaci&oacute;n se necesita:";
 choices[19]= new Array();
 choices[19][0] = "Nada, se ejercen gratuitamente";
 choices[19][1] = "Pagar solo los gastos ocasionados por la rectificaci&oacute;n";
 choices[19][2] = "Se necesita un notario";
 choices[19][3] = "Ninguna de las respuestas anteriores es cierta";
 answers[19] = choices[19][0];
 units[19] = "29";
 comments[19] = "Id Pregunta: 497. ";


//  Id pregunta: 521 AÃ±o de creación de pregunta: 2004-01-01
 questions[20]= "21)  En relaci&oacute;n con el control de riesgos, &iquest;Qu&eacute;  funci&oacute;n puede no estar segregada de la de analista de sistemas?";
 choices[20]= new Array();
 choices[20][0] = "Programador de aplicaciones";
 choices[20][1] = "Usuario final";
 choices[20][2] = "Administrador de base de datos";
 choices[20][3] = "Aseguramiento de la calidad";
 answers[20] = choices[20][0];
 units[20] = "31, 32, 33";
 comments[20] = "Id Pregunta: 521. Auditor&iacute;a Inform&aacute;tica";


//  Id pregunta: 554 AÃ±o de creación de pregunta: 2004-01-01
 questions[21]= "22)  Una de las siguientes afirmaciones referentes a la normalizaci&oacute;n es falsa:";
 choices[21]= new Array();
 choices[21][0] = "Las normas espa&ntilde;olas se conocen por las siglas UNE (Una Norma Espa&ntilde;ola).";
 choices[21][1] = "Las normas europeas comienzan por las siglas EN.";
 choices[21][2] = "Las normas previas son las que se emiten cuando se considera que es prematuro promulgar formalmente una norma EN. Su codificaci&oacute;n comienza por las siglas ENV.";
 choices[21][3] = "AENOR es uno de los organismos oficiales normalizadores espa&ntilde;oles.";
 answers[21] = choices[21][3];
 units[21] = "42";
 comments[21] = "Id Pregunta: 554. ";


//  Id pregunta: 578 AÃ±o de creación de pregunta: 2006-01-01
 questions[22]= "23)  La empresa Du Pont inici&oacute; un estudio sobre t&eacute;cnicas de aplicaci&oacute;n de ordenadores a la planificaci&oacute;n y programaci&oacute;n de proyectos, que recibi&oacute; el nombre de:";
 choices[22]= new Array();
 choices[22][0] = "CPM (Critical Path Method).";
 choices[22][1] = "PERT.";
 choices[22][2] = "Diagrama de Gant.";
 choices[22][3] = "PROPS.";
 answers[22] = choices[22][0];
 units[22] = "27";
 comments[22] = "Id Pregunta: 578. ";


//  Id pregunta: 582 AÃ±o de creación de pregunta: 2006-01-01
 questions[23]= "24)  Cual de las siguiente subareas no pertenece tradicionalmente a sistemas";
 choices[23]= new Array();
 choices[23][0] = "Sistemas Operativos, Software Base y Sistemas Corporativos:";
 choices[23][1] = "Microinform&aacute;tica:";
 choices[23][2] = "Desarrollo";
 choices[23][3] = "Integraci&oacute;n de Sistemas:";
 answers[23] = choices[23][2];
 units[23] = "26";
 comments[23] = "Id Pregunta: 582. ";


//  Id pregunta: 592 AÃ±o de creación de pregunta: 2006-01-01
 questions[24]= "25)  El retraso de una actividad:";
 choices[24]= new Array();
 choices[24][0] = "supone un retraso siempre en el proyecto";
 choices[24][1] = "supondr&aacute; un retraso si no pertenece al camino cr&iacute;tico";
 choices[24][2] = "no supone retraso alguno si no pertenece al camino critico y la actividad no pasa a formar parte de este al alargar su duraci&oacute;n";
 choices[24][3] = "no supone retraso nunca";
 answers[24] = choices[24][2];
 units[24] = "28";
 comments[24] = "Id Pregunta: 592. ";


//  Id pregunta: 593 AÃ±o de creación de pregunta: 2006-01-01
 questions[25]= "26)  La duraci&oacute;n total de un proyecto es:";
 choices[25]= new Array();
 choices[25][0] = "La del camino del gr&aacute;fico de Pert que m&aacute;s tareas realiza";
 choices[25][1] = "La de la tarea cr&iacute;tica";
 choices[25][2] = "La suma de la duraci&oacute;n de todas las tareas de un proyecto";
 choices[25][3] = "la del camino critico en el gr&aacute;fico de Pert";
 answers[25] = choices[25][3];
 units[25] = "28";
 comments[25] = "Id Pregunta: 593. ";


//  Id pregunta: 621 AÃ±o de creación de pregunta: 2006-01-01
 questions[26]= "27)  Los criterios comunes (criterios de evaluaci&oacute;n unificados para la seguridad de los productos IT) se corresponden con la norma:";
 choices[26]= new Array();
 choices[26][0] = "ISO 15408";
 choices[26][1] = "ANSI 14508";
 choices[26][2] = "CEN 15408";
 choices[26][3] = "IEEE 14508";
 answers[26] = choices[26][0];
 units[26] = "33";
 comments[26] = "Id Pregunta: 621. ";


//  Id pregunta: 655 AÃ±o de creación de pregunta: 2006-01-01
 questions[27]= "28)  &iquest;Por qu&eacute; no puede considerarse cierto que la correcta aplicaci&oacute;n y gesti&oacute;n de parches es la soluci&oacute;n a la mayor&iacute;a de los problemas de seguridad?";
 choices[27]= new Array();
 choices[27][0] = "Los parches siempre abren nuevas vulnerabilidades";
 choices[27][1] = "Los parches crean problemas de interoperatibilidad";
 choices[27][2] = "Los parches solo tratan los fallos software conocidos";
 choices[27][3] = "Los parches pueden arreglar problemas de mala configuraci&oacute;n";
 answers[27] = choices[27][2];
 units[27] = "31";
 comments[27] = "Id Pregunta: 655. ";


//  Id pregunta: 4409 AÃ±o de creación de pregunta: 2007-01-01
 questions[28]= "29)  Indique cu&aacute;l de las siguientes afirmaciones es falsa en relaci&oacute;n a la planificaci&oacute;n de la capacidad de los sistemas de informaci&oacute;n:";
 choices[28]= new Array();
 choices[28][0] = "Se configura en torno a una situaci&oacute;n real y actual, sin hacer referencias a evoluciones futuras.";
 choices[28][1] = "Sirve para conocer y predecir el conjunto de recursos (instalaciones, m&aacute;quinas, equipos, etc.) necesarios para atender la carga de trabajo esperada en el futuro.";
 choices[28][2] = "Es un proceso sistem&aacute;tico.";
 choices[28][3] = "Determina las necesidades de recursos para suministrar el nivel de servicio requerido, actual y futuro.";
 answers[28] = choices[28][0];
 units[28] = "";
 comments[28] = "Id Pregunta: 4409. ";


//  Id pregunta: 4659 AÃ±o de creación de pregunta: 2007-01-01
 questions[29]= "30)  &iquest;Cu&aacute;l de las siguientes no es un servicio ofrecido por el DNI electronico?";
 choices[29]= new Array();
 choices[29][0] = "Firma electronica de documentos";
 choices[29][1] = "Identificacion en medios telematicos";
 choices[29][2] = "Acreditar la identidad fisica";
 choices[29][3] = "Tarjeta sanitaria electronica";
 answers[29] = choices[29][3];
 units[29] = "30";
 comments[29] = "Id Pregunta: 4659. RD 1553/2005, art&iacute;culo 1";


//  Id pregunta: 4698 AÃ±o de creación de pregunta: 2007-01-01
 questions[30]= "31)  Una de las primeras personas en desarrollar un concepto de la sociedad de la informaci&oacute;n fue eleconomista";
 choices[30]= new Array();
 choices[30][0] = "Fritz Machlup";
 choices[30][1] = "Charles Babbage";
 choices[30][2] = "Herman Hollerith";
 choices[30][3] = "Howard Aiken";
 answers[30] = choices[30][0];
 units[30] = "30";
 comments[30] = "Id Pregunta: 4698. Examen 2006 JCYL";


//  Id pregunta: 4731 AÃ±o de creación de pregunta: 2007-01-01
 questions[31]= "32)  Cual de los siguientes no es un activo en Magerit:";
 choices[31]= new Array();
 choices[31][0] = "www";
 choices[31][1] = "url";
 choices[31][2] = "anon";
 choices[31][3] = "edi";
 answers[31] = choices[31][1];
 units[31] = "32";
 comments[31] = "Id Pregunta: 4731. Examen 2006 JCYL";


//  Id pregunta: 4755 AÃ±o de creación de pregunta: 2007-01-01
 questions[32]= "33)  La definici&oacute;n de usabilidad seg&uacute;n el est&aacute;ndar ISO 9241-11:1998 es la siguiente:";
 choices[32]= new Array();
 choices[32][0] = "Grado en que un producto puede ser usado por una persona con alg&uacute;n tipo de discapacidad (f&iacute;sica, cognitiva o tecnol&oacute;gica) respecto a c&oacute;mo lo usar&iacute;a una persona sin discapacidad";
 choices[32][1] = "Capacidad de uso, es decir, caracter&iacute;stica que distingue a los objetos dise&ntilde;ados para su utilizaci&oacute;n de los que no.";
 choices[32][2] = "Grado en que un producto puede ser usado por los usuarios especificados para obtener los resultados especificados con efectividad, eficiencia, y satisfacci&oacute;n en un contexto de uso especificado";
 choices[32][3] = "Ninguna de las anteriores";
 answers[32] = choices[32][2];
 units[32] = "39";
 comments[32] = "Id Pregunta: 4755. ";


//  Id pregunta: 4893 AÃ±o de creación de pregunta: 2007-01-01
 questions[33]= "34)  &iquest;A cual de los siguientes entes no les es de aplicaci&oacute;n el RD Legislativo 3/2011 de Contratos del Sector P&uacute;blico?";
 choices[33]= new Array();
 choices[33][0] = "Al Ministerio de Defensa";
 choices[33][1] = "Al INEM";
 choices[33][2] = "A la Seguridad Social";
 choices[33][3] = "Se aplica a todos los anteriores.";
 answers[33] = choices[33][3];
 units[33] = "41";
 comments[33] = "Id Pregunta: 4893. ";


//  Id pregunta: 4896 AÃ±o de creación de pregunta: 2007-01-01
 questions[34]= "35)  Cuando, a causa de su especificidad t&eacute;cnica, el suministro de un producto o la prestaci&oacute;n de un servicio s&oacute;lo pueda encomendarse a un &uacute;nico proveedor, el procedimiento de adjudicaci&oacute;n del contrato ser&aacute;:";
 choices[34]= new Array();
 choices[34][0] = "Negociado";
 choices[34][1] = "Restringido";
 choices[34][2] = "Directo";
 choices[34][3] = "Por subasta";
 answers[34] = choices[34][0];
 units[34] = "41";
 comments[34] = "Id Pregunta: 4896. ";


//  Id pregunta: 4964 AÃ±o de creación de pregunta: 2003-01-01
 questions[35]= "36)  &iquest;Qu&eacute; tecnolog&iacute;a encaminada a proteger la propiedad intelectual en Internet habilita la gesti&oacute;n de loscontenidos en medios digitales a los usuarios identificados que tienen unos derechos determinados y les permiteusar un contenido codificado especialmente para &eacute;l?:";
 choices[35]= new Array();
 choices[35][0] = "Digital Rights Management (DRM).";
 choices[35][1] = "Marcas de agua.";
 choices[35][2] = "Los patrones.";
 choices[35][3] = "Technical Protection Measures (TPM).";
 answers[35] = choices[35][0];
 units[35] = "37";
 comments[35] = "Id Pregunta: 4964. Examen TIC B 2007";


//  Id pregunta: 4976 AÃ±o de creación de pregunta: 2003-01-01
 questions[36]= "37)  &iquest;Cu&aacute;l de los siguientes est&aacute;ndares no ha sido elaborado por W3C (World Wide Web Consortium)?";
 choices[36]= new Array();
 choices[36][0] = "XML (Extensible Markup Language).";
 choices[36][1] = "SOAP (Simple Object Access Protocol).";
 choices[36][2] = "WAI (Web Accessibility Initiative).";
 choices[36][3] = "SSL (Secure Sockets Layer).";
 answers[36] = choices[36][3];
 units[36] = "39";
 comments[36] = "Id Pregunta: 4976. Examen TIC B 2007";


//  Id pregunta: 5415 AÃ±o de creación de pregunta: 2003-01-01
 questions[37]= "38)  La implantaci&oacute;n de controles es en &uacute;ltima instancia una responsabilidad de la direcci&oacute;n, si bien cada directivo en su &aacute;rea es corresponsable de la existencia de controles a su nivel. Luego la diferencia entre control y auditoria interna es:";
 choices[37]= new Array();
 choices[37][0] = "El control en inform&aacute;tica lo realizan los supervisores a diferentes niveles, Jefe de Servicio, Jefe de Proyecto, Jefe de Explotaci&oacute;n, mientras que los Auditores Internos deben asumir un papel bastante ingrato como es el de verificar si los trabajadores act&uacute;an de acuerdo a los est&aacute;ndares de explotaci&oacute;n y desarrollo.";
 choices[37][1] = "El control en inform&aacute;tica lo realizan supervisores nombrados por el jefe de Servicio al efecto, mientras que los Auditores internos realizan inspecciones sorpresa para ver si existen controles eficaces";
 choices[37][2] = "El control en inform&aacute;tica lo realizan los supervisores a diferentes niveles, Jefe de Servicio, Jefe de Proyecto, Jefe de Explotaci&oacute;n, mientras que los Auditores internos verifican la existencia de controles adecuados adem&aacute;s de su eficiencia";
 choices[37][3] = "El control en inform&aacute;tica no es absolutamente necesario. Las funciones de cada empleado p&uacute;blico est&aacute;n en la RPT. Cada cierto tiempo se recomienda que un Auditor Interno un informe con las propuestas pertinentes para mejorar";
 answers[37] = choices[37][2];
 units[37] = "31";
 comments[37] = "Id Pregunta: 5415. Castilla y Le&oacute;n";


//  Id pregunta: 5591 AÃ±o de creación de pregunta: 2003-01-01
 questions[38]= "39)  &iquest;Qu&eacute; sistemas de racionalizaci&oacute;n de compras incluye el RD Legislativo 3/2011 de contratos del sector p&uacute;blico (art&iacute;culo 194)?";
 choices[38]= new Array();
 choices[38][0] = "Acuerdos marco";
 choices[38][1] = "Sistemas din&aacute;micos de adquisici&oacute;n";
 choices[38][2] = "Centrales de contrataci&oacute;n";
 choices[38][3] = "Incluye las tres anteriores";
 answers[38] = choices[38][3];
 units[38] = "41";
 comments[38] = "Id Pregunta: 5591. ";


//  Id pregunta: 5598 AÃ±o de creación de pregunta: 2003-01-01
 questions[39]= "40)  En el RD Legislativo 3/2011 de contratos del sector p&uacute;blico, los contratos de adquisici&oacute;n de programas de ordenador COTS son";
 choices[39]= new Array();
 choices[39][0] = "Contratos de servicios";
 choices[39][1] = "Contratos de licencia sw";
 choices[39][2] = "Contratos de suministro";
 choices[39][3] = "No existe tal cosa";
 answers[39] = choices[39][2];
 units[39] = "41";
 comments[39] = "Id Pregunta: 5598. ";


//  Id pregunta: 5651 AÃ±o de creación de pregunta: 2003-01-01
 questions[40]= "41)  Seg&uacute;n el RD 1720/2007, se implantar&aacute;n, adem&aacute;s de las medidas de nivel b&aacute;sico, las de nivel medio, a los siguientes ficheros:";
 choices[40]= new Array();
 choices[40][0] = "Aquellos de los que sean responsables Administraciones tributaria y se relacionen con el ejercicio de sus potestades";
 choices[40][1] = "Los relativos a la comision de infracciones administrativas o penales";
 choices[40][2] = "Aquellos que contengan datos derivados de la violencia de g&eacute;nero";
 choices[40][3] = "La a) y la b) son correctas";
 answers[40] = choices[40][3];
 units[40] = "29";
 comments[40] = "Id Pregunta: 5651. ";


//  Id pregunta: 5774 AÃ±o de creación de pregunta: 2009-01-01
 questions[41]= "42)  Los datos de car&aacute;cter personal recogidos o elaborados por las Administraciones P&uacute;blicas para el desempe&ntilde;o de sus atribuciones";
 choices[41]= new Array();
 choices[41][0] = "Podr&aacute;n comunicarse entre administraciones los datos de car&aacute;cter personal que una Administraci&oacute;n P&uacute;blica obtenga o elabore con destino a otra";
 choices[41][1] = "Las diferentes Administraciones P&uacute;blicas podr&aacute;n cederse entre ellas los datos de car&aacute;cter personal incluso para el ejercicio de competencias diferentes.";
 choices[41][2] = "No podr&aacute;n cederse cuando la comunicaci&oacute;n tenga por objeto el tratamiento de los datos con fines hist&oacute;ricos, estad&iacute;sticos  o cient&iacute;ficos";
 choices[41][3] = "La Ley no trata este particular, sino que lo hace su desarrollo posterior";
 answers[41] = choices[41][0];
 units[41] = "29";
 comments[41] = "Id Pregunta: 5774. MAP 2008 A2";


//  Id pregunta: 5957 AÃ±o de creación de pregunta: 2009-01-01
 questions[42]= "43)  &iquest;Cu&aacute;l no es una caracter&iacute;stica de la Red SARA?";
 choices[42]= new Array();
 choices[42][0] = "Fiabilidad, porque dispone de un Centro de Soporte 24 x 7";
 choices[42][1] = "Seguridad, fundamentalmente por el establecimiento de VPNs";
 choices[42][2] = "Calidad de Servicio (QoS) (porque se basa en tecnolog&iacute;a VPLS)";
 choices[42][3] = "Flexibilidad, proporcionada por una pol&iacute;tica de gesti&oacute;n descentralizada";
 answers[42] = choices[42][3];
 units[42] = "44";
 comments[42] = "Id Pregunta: 5957. NULL";


//  Id pregunta: 5969 AÃ±o de creación de pregunta: 2010-01-01
 questions[43]= "44)  A efectos de la Ley Org&aacute;nica 15/1999, se define dato de car&aacute;cter personal como:";
 choices[43]= new Array();
 choices[43][0] = "Cualquier informaci&oacute;n relativa a una persona f&iacute;sica o jur&iacute;dica";
 choices[43][1] = "Cualquier informaci&oacute;n sobre personas";
 choices[43][2] = "Todos los datos relativos a una persona";
 choices[43][3] = "Cualquier informaci&oacute;n concerniente a personas f&iacute;sicas identificadas o identificables";
 answers[43] = choices[43][3];
 units[43] = "29";
 comments[43] = "Id Pregunta: 5969. Castilla La Mancha 2009";


//  Id pregunta: 5970 AÃ±o de creación de pregunta: 2010-01-01
 questions[44]= "45)  Las medidas de seguridad exigibles a los ficheros y tratamientos se clasifican en:";
 choices[44]= new Array();
 choices[44][0] = "Bajo, medio y alto";
 choices[44][1] = "B&aacute;sico, medio y alto";
 choices[44][2] = "Bajo, aquellos que eval&uacute;an la personalidad, medio y alto";
 choices[44][3] = "Bajo, medio, alto y especialmente protegidos";
 answers[44] = choices[44][1];
 units[44] = "29";
 comments[44] = "Id Pregunta: 5970. Castilla La Mancha 2009";


//  Id pregunta: 5972 AÃ±o de creación de pregunta: 2010-01-01
 questions[45]= "46)  Seg&uacute;n el RD 1720/2007, cu&aacute;l de la siguiente informaci&oacute;n NO es necesaria incluir en la orden de creaci&oacute;n de un fichero de titularidad p&uacute;blica:";
 choices[45]= new Array();
 choices[45][0] = "Los &oacute;rganos responsables del fichero";
 choices[45][1] = "El nivel b&aacute;sico, medio o alto de seguridad que resulte exigible";
 choices[45][2] = "Las transferencias internacionales de datos previstas a terceros pa&iacute;ses, con indicaci&oacute;n, en su caso, de los pa&iacute;ses de destino de los datos";
 choices[45][3] = "El encargado de tratamiento, si lo hubiese";
 answers[45] = choices[45][3];
 units[45] = "29";
 comments[45] = "Id Pregunta: 5972. Similar a Castilla La Mancha 2009";


//  Id pregunta: 5990 AÃ±o de creación de pregunta: 2010-01-01
 questions[46]= "47)  NO corresponde a los principios que deben regir un CAU:";
 choices[46]= new Array();
 choices[46][0] = "Proveer un punto de contacto &uacute;nico al usuario final.";
 choices[46][1] = "Disponer de informaci&oacute;n sobre niveles de servicio para mejorar el servicio proporcionado.";
 choices[46][2] = "Rastrear la organizaci&oacute;n para detectar posibles necesidades no cubiertas.";
 choices[46][3] = "Documentar las soluciones dadas a las incidencias.";
 answers[46] = choices[46][2];
 units[46] = "26";
 comments[46] = "Id Pregunta: 5990. TIC A 2009";


//  Id pregunta: 5994 AÃ±o de creación de pregunta: 2010-01-01
 questions[47]= "48)  NO es un m&eacute;todo din&aacute;mico de estudio de la rentabilidad de inversi&oacute;n:";
 choices[47]= new Array();
 choices[47][0] = "La tasa de rentabilidad media.";
 choices[47][1] = "La tasa de valor actual.";
 choices[47][2] = "La tasa interna de rentabilidad.";
 choices[47][3] = "El &iacute;ndice de rentabilidad.";
 answers[47] = choices[47][0];
 units[47] = "38";
 comments[47] = "Id Pregunta: 5994. TIC A 2009";


//  Id pregunta: 6191 AÃ±o de creación de pregunta: 2010-01-01
 questions[48]= "49)  &iquest;Cu&aacute;l de las siguientes normas t&eacute;cnicas no est&aacute;n contempladas en el Esquema Nacional de Interoperabilidad?";
 choices[48]= new Array();
 choices[48][0] = "Digitalizaci&oacute;n de documentos";
 choices[48][1] = "Pol&iacute;tica de gesti&oacute;n de documentos";
 choices[48][2] = "Copiado aut&eacute;ntico y conversi&oacute;n de documentos";
 choices[48][3] = "Destrucci&oacute;n de documentos en soporte papel";
 answers[48] = choices[48][3];
 units[48] = "43";
 comments[48] = "Id Pregunta: 6191. Disposici&oacute;n adicional primera";


//  Id pregunta: 6237 AÃ±o de creación de pregunta: 2010-01-01
 questions[49]= "50)  En el marco de trabajo de la gesti&oacute;n de proyectos no se realiza:";
 choices[49]= new Array();
 choices[49][0] = "Gesti&oacute;n del tiempo.";
 choices[49][1] = "Gesti&oacute;n de la calidad.";
 choices[49][2] = "Gesti&oacute;n del cambio.";
 choices[49][3] = "Gesti&oacute;n de contenidos.";
 answers[49] = choices[49][3];
 units[49] = "27";
 comments[49] = "Id Pregunta: 6237. TIC B-2009, bloque desarrollo";


//  Id pregunta: 6351 AÃ±o de creación de pregunta: 2010-01-01
 questions[50]= "51)  La ley sobre reutilizaci&oacute;n de la informaci&oacute;n  del sector p&uacute;blico es la ley";
 choices[50]= new Array();
 choices[50][0] = "Ley 37/2007";
 choices[50][1] = "Ley 32/2005";
 choices[50][2] = "Ley 25/2007";
 choices[50][3] = "Ninguna de las anteriores";
 answers[50] = choices[50][0];
 units[50] = "30";
 comments[50] = "Id Pregunta: 6351. Ley 37/2007";


//  Id pregunta: 6361 AÃ±o de creación de pregunta: 2010-01-01
 questions[51]= "52)  &iquest;Qu&eacute; Real Decreto define el Esquema Nacional de Seguridad?";
 choices[51]= new Array();
 choices[51][0] = "RD 4/2010";
 choices[51][1] = "RD 40/2010";
 choices[51][2] = "RD 4/2009";
 choices[51][3] = "RD 3/2010";
 answers[51] = choices[51][3];
 units[51] = "43";
 comments[51] = "Id Pregunta: 6361. NULL";


//  Id pregunta: 6370 AÃ±o de creación de pregunta: 2010-01-01
 questions[52]= "53)  &iquest;Cada cu&aacute;nto tiempo ser&aacute;n objeto de una auditor&iacute;a regular ordinaria los sistemas de informaci&oacute;n a los que se refiere el Esquema Nacional de Seguridad?";
 choices[52]= new Array();
 choices[52][0] = "Cada dos a&ntilde;os";
 choices[52][1] = "Al menos, cada dos a&ntilde;os";
 choices[52][2] = "Cada a&ntilde;o";
 choices[52][3] = "Al menos, una vez al a&ntilde;o";
 answers[52] = choices[52][1];
 units[52] = "43";
 comments[52] = "Id Pregunta: 6370. Art&iacute;culo 34 ENS. Anexo III: para los sistemas de categor&iacute;a B&Aacute;SICA, bastar&aacute; una autoevaluaci&oacute;n.";


//  Id pregunta: 6396 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)  En relaci&oacute;n a las copias electr&oacute;nicas de los documentos electr&oacute;nicos realizadas por la Administraci&oacute;n General del Estado y sus organismos p&uacute;blicos, se&ntilde;ale la opci&oacute;n incorrecta.";
 choices[53]= new Array();
 choices[53][0] = "En caso de cambio del formato original, para que una copia electr&oacute;nica de un documento electr&oacute;nico tenga la condici&oacute;n de copia aut&eacute;ntica, debe incluir su car&aacute;cter de copia entre los metadatos asociados.";
 choices[53][1] = "No se podr&aacute;n generar m&aacute;s copias electr&oacute;nicas aut&eacute;nticas a partir de otras copias electr&oacute;nicas aut&eacute;nticas.";
 choices[53][2] = "Los &oacute;rganos emisores de los documentos administrativos electr&oacute;nicos o receptores de los documentos privados electr&oacute;nicos, o los archivos que reciban los mismos, est&aacute;n obligados a la conservaci&oacute;n de los documentos originales, aunque se hubiere procedido a su copiado.";
 choices[53][3] = "Las copias electr&oacute;nicas generadas que, por ser id&eacute;nticas al documento electr&oacute;nico original no comportan cambio de formato ni de contenido, tendr&aacute;n la eficacia jur&iacute;dica de documento electr&oacute;nico original.";
 answers[53] = choices[53][1];
 units[53] = "43";
 comments[53] = "Id Pregunta: 6396. Art&iacute;culo 43 RD 1671/2009";


//  Id pregunta: 6409 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  &iquest;Qu&eacute; significa DRM?";
 choices[54]= new Array();
 choices[54][0] = "Digital Rights Management";
 choices[54][1] = "Direct Rights Management";
 choices[54][2] = "Direct Restriction Management";
 choices[54][3] = "Digital Restrictions Management";
 answers[54] = choices[54][0];
 units[54] = "37";
 comments[54] = "Id Pregunta: 6409. NULL";


//  Id pregunta: 6414 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  Las posibilidades de usar el mecanismo de comprobaci&oacute;n de la legalidad del software, conocido como huella digital se clasifican en diferentes grupos que han aparecido a lo largo del tiempo , &iquest;Cu&aacute;l de los siguientes no es uno de ellos?";
 choices[55]= new Array();
 choices[55][0] = "Sim&eacute;trica";
 choices[55][1] = "Asim&eacute;trica";
 choices[55][2] = "An&oacute;nima";
 choices[55][3] = "Esteganogr&aacute;fica";
 answers[55] = choices[55][3];
 units[55] = "37";
 comments[55] = "Id Pregunta: 6414. NULL";


//  Id pregunta: 7328 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  &iquest;Qu&eacute; instituci&oacute;n representa a Espa&ntilde;a en ISO?";
 choices[56]= new Array();
 choices[56][0] = "SETSI";
 choices[56][1] = "Red.es";
 choices[56][2] = "AENOR";
 choices[56][3] = "INTECO";
 answers[56] = choices[56][2];
 units[56] = "42";
 comments[56] = "Id Pregunta: 7328. NULL";


//  Id pregunta: 8601 AÃ±o de creación de pregunta: 2011-01-01
 questions[57]= "58)  &iquest;Cu&aacute;l de las siguientes caracter&iacute;sticas NO es un principio del Dise&ntilde;o Universal?";
 choices[57]= new Array();
 choices[57][0] = "Uso equiparable";
 choices[57][1] = "Uso flexible";
 choices[57][2] = "Que exija poco esfuerzo f&iacute;sico";
 choices[57][3] = "Robusto";
 answers[57] = choices[57][3];
 units[57] = "39";
 comments[57] = "Id Pregunta: 8601. Examen TIC A2 2010 interna";


//  Id pregunta: 8737 AÃ±o de creación de pregunta: 2011-01-01
 questions[58]= "59)  Una empresa crea legalmente un fichero de datos personales que utiliza para su tratamiento, pero sin llevar a cabo una correcta actualizaci&oacute;n cuando se producen cambios en los mismos. De entre los &quot;principios de protecci&oacute;n de datos&quot; incluidos en la Ley 15/1999 de Protecci&oacute;n de Datos de Car&aacute;cter Personal, &iquest;cu&aacute;l se estar&iacute;a incumpliendo?";
 choices[58]= new Array();
 choices[58][0] = "Calidad de los datos";
 choices[58][1] = "Veracidad de la informaci&oacute;n.";
 choices[58][2] = "Actualizaci&oacute;n peri&oacute;dica";
 choices[58][3] = "Seguimiento de los datos.";
 answers[58] = choices[58][0];
 units[58] = "29";
 comments[58] = "Id Pregunta: 8737. Examen TIC A2 2010 interna";


//  Id pregunta: 8742 AÃ±o de creación de pregunta: 2011-01-01
 questions[59]= "60)  En relaci&oacute;n con la inscripci&oacute;n de ficheros en el Registro General de Protecci&oacute;n de datos, la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos:";
 choices[59]= new Array();
 choices[59][0] = "Tiene 1 mes de plazo para resolver la solicitud de inscripci&oacute;n y en caso de no contestar en tal plazo, se entender&aacute; inscrito a todos los efectos";
 choices[59][1] = "Tiene 1 mes de plazo para resolver la solicitud de inscripci&oacute;n y en caso de no contestar en tal plazo, se entender&aacute; desestimada la solicitud, con posibilidad de Interposici&oacute;n del correspondiente recurso especial en materia de protecci&oacute;n de datos de car&aacute;cter personal.";
 choices[59][2] = "Debe contestar en el plazo m&aacute;ximo de 10 d&iacute;as, prorrogables hasta 1 mes, por motivos justificados, con obligaci&oacute;n de resolver. En caso de no contestar en tal plazo, se entender&aacute; Inscrito a todos los efectos.";
 choices[59][3] = "No realiza la inscripci&oacute;n en el Registro General de Protecci&oacute;n de Datos sino que emite un Informe preceptivo y no vinculante, en un plazo de 1 mes, sobre la adecuaci&oacute;n de la solicitud. En el caso de no emitirlo en dicho plazo se entender&aacute; como favorable a todos los efectos.";
 answers[59] = choices[59][0];
 units[59] = "29";
 comments[59] = "Id Pregunta: 8742. Examen TIC A2 2010 interna";


//  Id pregunta: 8747 AÃ±o de creación de pregunta: 2011-01-01
 questions[60]= "61)  En el &aacute;mbito de la Administraci&oacute;n General del Estado, &iquest;es posible la notificaci&oacute;n mediante recepci&oacute;n en direcci&oacute;n de correo electr&oacute;nico que los ciudadanos elijan?";
 choices[60]= new Array();
 choices[60][0] = "No est&aacute; previsto para tal fin el uso de una direcci&oacute;n de correo electr&oacute;nico que elijan los ciudadanos, sino s&oacute;lo el uso de la denominada direcci&oacute;n electr&oacute;nica habilitada";
 choices[60][1] = "SI, siempre que se genere autom&aacute;ticamente y con independencia de la voluntad del destinatario sendos acuses de salida y recibo, que dejen constancia de su emisi&oacute;n y recepci&oacute;n y que so originen, respectivamente, en el momento del envi&oacute; y de acceso al contenido de la notificaci&oacute;n";
 choices[60][2] = "Si, siempre que se genere autom&aacute;ticamente y con independencia de la voluntad del destinatario un acuse de recibo que deje constancia de su recepci&oacute;n y que se origine en el momento del acceso al contenido de la notificaci&oacute;n.";
 choices[60][3] = "SI, siempre que se genere autom&aacute;ticamente y con independencia de la voluntad del destinatario un acuso de recibo que deje constancia de su recepci&oacute;n y que se origine en el momento del acceso al contenido c&iacute;e la notificaci&oacute;n Asimismo, el ciudadano podr&aacute; solicitar un acuse de salida, que deje constancia de su emisi&oacute;n y que se origine en el momento del env&iacute;o de la notificaci&oacute;n";
 answers[60] = choices[60][2];
 units[60] = "43";
 comments[60] = "Id Pregunta: 8747. Examen TIC A2 2010 interna";


//  Id pregunta: 8903 AÃ±o de creación de pregunta: 2011-01-01
 questions[61]= "62)  Seg&uacute;n la Ley Org&aacute;nica 15/1999, de Protecci&oacute;n de Datos de Car&aacute;cter Personal, no es una fuente accesible al p&uacute;blico:";
 choices[61]= new Array();
 choices[61][0] = "El padr&oacute;n municipal.";
 choices[61][1] = "Los diarios oficiales.";
 choices[61][2] = "El censo promocional.";
 choices[61][3] = "Los medios de comunicaci&oacute;n";
 answers[61] = choices[61][0];
 units[61] = "29";
 comments[61] = "Id Pregunta: 8903. Operador Ayto. Madrid 2010";


//  Id pregunta: 8935 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  De acuerdo con la ley 18/2011, &iquest;cu&aacute;l no es un derecho de los profesionales de la justicia en relaci&oacute;n con la utilizaci&oacute;n de los medios electr&oacute;nicos en la actividad judicial?";
 choices[62]= new Array();
 choices[62][0] = "A obtener copias electr&oacute;nicas de los documentos que formen parte de procedimientos en los que sean representantes procesales de la parte personada";
 choices[62][1] = "A utilizar los sistemas de firma electr&oacute;nica del Documento Nacional de Identidad o cualquier otro reconocido, siempre que dicho sistema le identifique de forma un&iacute;voca como profesional";
 choices[62][2] = "A obtener copias electr&oacute;nicas de los documentos electr&oacute;nicos que formen parte de procedimientos en los que acrediten inter&eacute;s leg&iacute;timo";
 choices[62][3] = "Todos los anteriores lo son";
 answers[62] = choices[62][0];
 units[62] = "43";
 comments[62] = "Id Pregunta: 8935. ";


//  Id pregunta: 8942 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  &iquest;Cu&aacute;les de las siguientes no tendr&aacute;n la consideraci&oacute;n de copias aut&eacute;nticas seg&uacute;n la ley 18/2011?";
 choices[63]= new Array();
 choices[63][0] = "Las copias realizadas en soporte papel de documentos judiciales electr&oacute;nicos y firmados electr&oacute;nicamente por el secretario judicial que incluyan la impresi&oacute;n de un c&oacute;digo seguro de verificaci&oacute;n que permita contrastar su autenticidad";
 choices[63][1] = "Las copias realizadas por las oficinas judiciales, utilizando medios electr&oacute;nicos, de documentos emitidos originalmente por ellas en soporte papel";
 choices[63][2] = "Las copias realizadas por las oficinas judiciales, utilizando medios electr&oacute;nicos, de documentos emitidos por el interesado en soporte papel";
 choices[63][3] = "Las copias realizadas por medios electr&oacute;nicos de documentos electr&oacute;nicos emitidos por el propio interesado estando el documento electr&oacute;nico original en poder de la oficina judicial donde haya sido originado o incorporado y que la informaci&oacute;n de firma electr&oacute;nica y, en su caso, de sellado de tiempo permitan comprobar la coincidencia con dicho documento";
 answers[63] = choices[63][2];
 units[63] = "43";
 comments[63] = "Id Pregunta: 8942. ";


//  Id pregunta: 8992 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  La ley de econom&iacute;a sostenible ha modificado las cuant&iacute;as de las sanciones fijadas en la LOPD &iquest;C&oacute;mo?";
 choices[64]= new Array();
 choices[64][0] = "Ha aumentado todas";
 choices[64][1] = "Ha disminuido todas";
 choices[64][2] = "Ha disminuido la m&iacute;nima y aumentado la m&aacute;xima";
 choices[64][3] = "Ha aumentado la m&iacute;nima y disminuido la m&aacute;xima";
 answers[64] = choices[64][3];
 units[64] = "29";
 comments[64] = "Id Pregunta: 8992. ";


//  Id pregunta: 9004 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  No es una infracci&oacute;n grave seg&uacute;n la LOPD:";
 choices[65]= new Array();
 choices[65][0] = "El incumplimiento de los restantes deberes de notificaci&oacute;n o requerimiento al afectado impuestos por esta Ley y sus disposiciones de desarrollo.";
 choices[65][1] = "Proceder a la creaci&oacute;n de ficheros de titularidad privada o iniciar la recogida de datos de car&aacute;cter personal para los mismos con finalidades distintas de las queconstituyen el objeto leg&iacute;timo de la empresa o entidad.";
 choices[65][2] = "Mantener los ficheros, locales, programas o equipos que contengan datos de car&aacute;cter personal sin las debidas condiciones de seguridad que por v&iacute;a reglamentaria se determinen.";
 choices[65][3] = "Tratar datos de car&aacute;cter personal sin recabar el consentimiento de las personas afectadas, cuando el mismo sea necesario conforme a lo dispuesto en esta Ley y sus disposiciones de desarrollo.";
 answers[65] = choices[65][1];
 units[65] = "29";
 comments[65] = "Id Pregunta: 9004. ";


//  Id pregunta: 9061 AÃ±o de creación de pregunta: 2011-01-01
 questions[66]= "67)  &iquest;Cu&aacute;l de las siguientes no es una infracci&oacute;n grave seg&uacute;n la ley 15/1999 de protecci&oacute;n de datos de car&aacute;cter personal?";
 choices[66]= new Array();
 choices[66][0] = "No remitir a la Agencia de Protecci&oacute;n de Datos las notificaciones previstas en esta Ley o en sus disposiciones de desarrollo";
 choices[66][1] = "La vulneraci&oacute;n del deber de guardar secreto acerca del tratamiento de los datos de car&aacute;cter personal por parte del responsable del fichero";
 choices[66][2] = "La obstrucci&oacute;n al ejercicio de la funci&oacute;n inspectora";
 choices[66][3] = "El incumplimiento del deber de informaci&oacute;n al afectado acerca del tratamiento de sus datos de car&aacute;cter personal cuando los datos no hayan sido recabados del propio interesado";
 answers[66] = choices[66][0];
 units[66] = "29";
 comments[66] = "Id Pregunta: 9061. NULL";


//  Id pregunta: 9066 AÃ±o de creación de pregunta: 2011-01-01
 questions[67]= "68)  &iquest;Cu&aacute;l de las siguientes afirmaciones sobre el expediente electr&oacute;nico es FALSO seg&uacute;n el RD 1671/2009?";
 choices[67]= new Array();
 choices[67][0] = "Los expedientes electr&oacute;nicos podr&aacute;n incluir otros expedientes electr&oacute;nicos";
 choices[67][1] = "El foliado de los expedientes electr&oacute;nicos se llevar&aacute; a cabo mediante un &iacute;ndice electr&oacute;nico, firmado electr&oacute;nicamente mediante firma electr&oacute;nica avanzada";
 choices[67][2] = "La estructura y formato de los expedientes de los expedientes electr&oacute;nicos se ajustar&aacute;n a lo que diga el Esquema Nacional de Interoperabilidad";
 choices[67][3] = "Los expedientes electr&oacute;nicos dispondr&aacute;n de un c&oacute;digo que permita su identificaci&oacute;n un&iacute;voca por cualquier &oacute;rgano de la Administraci&oacute;n";
 answers[67] = choices[67][1];
 units[67] = "43";
 comments[67] = "Id Pregunta: 9066. Art. 53.2b  El foliado de los expedientes electr&oacute;nicos se llevar&aacute; a cabo mediante un &iacute;ndice electr&oacute;nico, firmado electr&oacute;nicamente mediante los sistemas previstos en la Ley 11/2007.";


//  Id pregunta: 9280 AÃ±o de creación de pregunta: 2013-01-01
 questions[68]= "69)  Se&ntilde;ale la FALSA respecto a los criterios de seguridad, normalizaci&oacute;n y conservaci&oacute;n.";
 choices[68]= new Array();
 choices[68][0] = "Son las recomendaciones sobre normalizaci&oacute;n e interoperabilidad seguidas por la administraci&oacute;n.";
 choices[68][1] = "Fueron elaboradas por el Consejo Superior de Inform&aacute;tica a ra&iacute;z del RD 209/2003.";
 choices[68][2] = "Consta de tres libros o gu&iacute;as: criterios de seguridad, de normalizaci&oacute;n y de conservaci&oacute;n.";
 choices[68][3] = "Todas son verdaderas. ";
 answers[68] = choices[68][3];
 units[68] = "40";
 comments[68] = "Id Pregunta: 9280. ";


//  Id pregunta: 9285 AÃ±o de creación de pregunta: 2013-01-01
 questions[69]= "70)  En los contratos de colaboraci&oacute;n entre el sector p&uacute;blico y sector privado, una Administraci&oacute;n encarga a una entidad de derecho privado la realizaci&oacute;n de una actuaci&oacute;n global, que no puede durar m&aacute;s de...";
 choices[69]= new Array();
 choices[69][0] = "10 a&ntilde;os.";
 choices[69][1] = "30 a&ntilde;os.";
 choices[69][2] = "20 a&ntilde;os.";
 choices[69][3] = "15 a&ntilde;os.";
 answers[69] = choices[69][2];
 units[69] = "41";
 comments[69] = "Id Pregunta: 9285. NULL";


//  Id pregunta: 9286 AÃ±o de creación de pregunta: 2013-01-01
 questions[70]= "71)  Se&ntilde;ale la afirmaci&oacute;n FALSA sobre el Consejo Superior de Administraci&oacute;n Electr&oacute;nica.";
 choices[70]= new Array();
 choices[70][0] = "Es un &oacute;rgano colegiado. ";
 choices[70][1] = "Supervisa la actividad del Observatorio de la Administraci&oacute;n Electr&oacute;nica.";
 choices[70][2] = "Coordina la actuaci&oacute;n administrativa en el &aacute;mbito de las TIC y dirige las contrataciones.";
 choices[70][3] = "Difunde est&aacute;ndares, como M&eacute;trica, Sicres o Magerit. ";
 answers[70] = choices[70][1];
 units[70] = "41";
 comments[70] = "Id Pregunta: 9286. ";


//  Id pregunta: 9288 AÃ±o de creación de pregunta: 2013-01-01
 questions[71]= "72)  Se&ntilde;ale la afirmaci&oacute;n FALSA respecto a la contrataci&oacute;n precomercial.";
 choices[71]= new Array();
 choices[71][0] = "Son contratos de investigaci&oacute;n y desarrollo remunerados por la empresa adjudicataria, siempre que el &oacute;rgano de contrataci&oacute;n comparta con &eacute;stas los riesgos y los beneficios de la investigaci&oacute;n cient&iacute;fica y t&eacute;cnica necesaria para desarrollar soluciones innovadoras que superen las disponibles en el mercado. ";
 choices[71][1] = "Establecen condiciones para la comercializaci&oacute;n y asimilaci&oacute;n de la I+D, mediante su normalizaci&oacute;n. ";
 choices[71][2] = "La Agenda Digital para Europa los recomienda como forma de atraer inversi&oacute;n privada para la investigaci&oacute;n en tiempos de crisis. ";
 choices[71][3] = "En Espa&ntilde;a han sido introducidos por la LES, y est&aacute;n fuera del &aacute;mbito de aplicaci&oacute;n de la Ley de Contratos. ";
 answers[71] = choices[71][0];
 units[71] = "41";
 comments[71] = "Id Pregunta: 9288. NULL";


//  Id pregunta: 9299 AÃ±o de creación de pregunta: 2013-01-01
 questions[72]= "73)  El riesgo se puede:";
 choices[72]= new Array();
 choices[72][0] = "Eliminar, reducir, asumir o transferir. ";
 choices[72][1] = "Eliminar, reducir pero no asegurar.";
 choices[72][2] = "Reducir, asumir, transferir pero nunca se puede eliminar del todo.";
 choices[72][3] = "Eliminar, reducir, asumir, transferir o asegurar.";
 answers[72] = choices[72][3];
 units[72] = "32";
 comments[72] = "Id Pregunta: 9299. ";


//  Id pregunta: 9473 AÃ±o de creación de pregunta: 2013-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l de los siguientes no es un factor de riesgo a la hora de analizar la rentabilidad de un proyecto?";
 choices[73]= new Array();
 choices[73][0] = "Factores econ&oacute;micos";
 choices[73][1] = "Factores pol&iacute;ticos";
 choices[73][2] = "Factores sociales";
 choices[73][3] = "Factores organizativos";
 answers[73] = choices[73][2];
 units[73] = "38";
 comments[73] = "Id Pregunta: 9473. ";


//  Id pregunta: 9480 AÃ±o de creación de pregunta: 2013-01-01
 questions[74]= "75)  Se&ntilde;ale la afirmaci&oacute;n correcta:";
 choices[74]= new Array();
 choices[74][0] = "Cuando una inversi&oacute;n tiene VAN positivo, la TIR es superior al coste de capital invertido";
 choices[74][1] = "Cuando una inversi&oacute;n tiene VAN negativo, la TIR es inferior al coste de capital invertido";
 choices[74][2] = "VAN y TIR son m&eacute;todos din&aacute;micos de selecci&oacute;n de inversiones";
 choices[74][3] = "Todas las afirmaciones anteriores son correctas";
 answers[74] = choices[74][3];
 units[74] = "38";
 comments[74] = "Id Pregunta: 9480. ";


//  Id pregunta: 9540 AÃ±o de creación de pregunta: 2013-01-01
 questions[75]= "76)  La publicaci&oacute;n del BOE en su sede electr&oacute;nica:";
 choices[75]= new Array();
 choices[75][0] = "No tiene car&aacute;cter de oficial y aut&eacute;ntica, constituyendo lo publicado una mera manifestaci&oacute;n de servicio p&uacute;blico, ya que lo que tiene valor de oficial y aut&eacute;ntica es su edici&oacute;n impresa.";
 choices[75][1] = "Tendr&aacute; car&aacute;cter de oficial y aut&eacute;ntica, al igual que la publicaci&oacute;n del resto de diarios oficiales de las CC.AA, a partir del 1 de enero de 2013.";
 choices[75][2] = "Tiene car&aacute;cter de oficial y aut&eacute;ntica, deriv&aacute;ndose de dicha publicaci&oacute;n los efectos previstos en el t&iacute;tulo preliminar del C&oacute;digo Civil y en las restantes normas aplicables.";
 choices[75][3] = "Tiene car&aacute;cter de oficial y aut&eacute;ntica desde el d&iacute;a 1 de enero de 2011, excepto el contenido de la Secci&oacute;n de Anuncios, que se rige por su normativa espec&iacute;fica.";
 answers[75] = choices[75][2];
 units[75] = "30";
 comments[75] = "Id Pregunta: 9540. Examen TIC A1 2011 (Ley 11/2007, art&iacute;culo 11.2)";


//  Id pregunta: 9760 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  La aplicaci&oacute;n para la presentaci&oacute;n telem&aacute;tica de proposiciones a los procedimientos de adopci&oacute;n de tipo de bienes y serviciosde adquisici&oacute;n centralizada, se denomina:";
 choices[76]= new Array();
 choices[76][0] = "CONECTA-PATRIMONIO";
 choices[76][1] = "PITER";
 choices[76][2] = "CONECTA-CENTRALIZACI&Oacute;N";
 choices[76][3] = "No existe tal aplicaci&oacute;n";
 answers[76] = choices[76][2];
 units[76] = "41";
 comments[76] = "Id Pregunta: 9760. EHA/1049/2008, Disposici&oacute;n adicional &uacute;nica. Tramitaci&oacute;n de solicitudes a trav&eacute;s de CONECTA  CENTRALIZACI&Oacute;N.";


//  Id pregunta: 9799 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  En la Ley 59/2003, de firma electr&oacute;nica, se indica que la prestaci&oacute;n de servicios de certificaci&oacute;n:";
 choices[77]= new Array();
 choices[77][0] = "Est&aacute; sujeta a autorizaci&oacute;n previa por parte del Ministro de Hacienda. ";
 choices[77][1] = "Est&aacute; sujeta a autorizaci&oacute;n previa por parte del Consejo de Ministros. ";
 choices[77][2] = "No est&aacute; sujeta a autorizaci&oacute;n previa.";
 choices[77][3] = "Es una competencia auton&oacute;mica.";
 answers[77] = choices[77][2];
 units[77] = "30";
 comments[77] = "Id Pregunta: 9799. Examen TIC-A2 2013-Libre (Ley 59/2003, art&iacute;culo 5)";


//  Id pregunta: 9800 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  Seg&uacute;n la Ley 59/2003 de Firma electr&oacute;nica, los prestadores de servicios de certificaci&oacute;n que expidan certificados reconocidos deber&aacute;n conservar registrada por cualquier medio seguro toda la informaci&oacute;n y documentaci&oacute;n relativa a un certificado reconocido al menos durante:";
 choices[78]= new Array();
 choices[78][0] = "5 a&ntilde;os.";
 choices[78][1] = "10 a&ntilde;os.";
 choices[78][2] = "Permanentemente.";
 choices[78][3] = "15 a&ntilde;os.";
 answers[78] = choices[78][3];
 units[78] = "30";
 comments[78] = "Id Pregunta: 9800. Examen TIC-A2 2013-Libre (Ley 59/2003, art&iacute;culo 20.f)";


//  Id pregunta: 9943 AÃ±o de creación de pregunta: 2014-01-01
 questions[79]= "80)  El establecimiento obligatorio de un sistema de registro de entrada de soportes que permita conocer, entre otros datos, el tipo de documento, fecha y hora, emisor y la persona autorizada responsables de la recepci&oacute;n, es una medida de seguridad de protecci&oacute;n de datos de car&aacute;cter personal de nivel";
 choices[79]= new Array();
 choices[79][0] = "b&aacute;sico.";
 choices[79][1] = "medio.";
 choices[79][2] = "alto.";
 choices[79][3] = "de auditor&iacute;a.";
 answers[79] = choices[79][1];
 units[79] = "29";
 comments[79] = "Id Pregunta: 9943. TIC A1, Examen 2013";


//  Id pregunta: 10256 AÃ±o de creación de pregunta: 2014-01-01
 questions[80]= "81)  La comunicaci&oacute;n de datos de car&aacute;cter personal al Miniterio Fiscal";
 choices[80]= new Array();
 choices[80][0] = "Puede hacerse en cualquier caso, sin consentimiento del interesado";
 choices[80][1] = "Puede hacerse sin consentimiento del interesado cuando sea en el ejercicio de las competencias propias del Ministerio Fiscal";
 choices[80][2] = "Puede hacerse sin consentimiento del afectado s&oacute;lo en los casos especificados en el reglamento de desarrollo de la Ley";
 choices[80][3] = "No puede hacerse en ning&uacute;n caso sin consentimiento del interesado";
 answers[80] = choices[80][1];
 units[80] = "29";
 comments[80] = "Id Pregunta: 10256. Art&iacute;culo 11.2 d) de la Ley 15/1999";


//  Id pregunta: 10367 AÃ±o de creación de pregunta: 2014-01-01
 questions[81]= "82)  &iquest;Qu&eacute; tipos de holguras puede tener una actividad en un proyecto?";
 choices[81]= new Array();
 choices[81][0] = "Dos: Holgura libre y Holgura total";
 choices[81][1] = "Dos: Holgura independiente y holgura dependiente";
 choices[81][2] = "Tres: Holgura libre, Holgura Independiente y Holgura Total";
 choices[81][3] = "Cuatro: Holgura independentiente, holgura dependiente, holgura libre y holgura total";
 answers[81] = choices[81][2];
 units[81] = "27";
 comments[81] = "Id Pregunta: 10367. ";


//  Id pregunta: 10550 AÃ±o de creación de pregunta: 2014-01-01
 questions[82]= "83)  &iquest;Cu&aacute;l de las siguientes amenazas de seguridad de Internet podr&iacute;a comprometer la integridad?";
 choices[82]= new Array();
 choices[82][0] = "Robo de los datos desde el cliente ";
 choices[82][1] = "Exposici&oacute;n de la informaci&oacute;n de configuraci&oacute;n de red ";
 choices[82][2] = "Un troyano en el navegador";
 choices[82][3] = "Escuchas ilegales en la red";
 answers[82] = choices[82][2];
 units[82] = "31, 32, 33";
 comments[82] = "Id Pregunta: 10550. NULL";


//  Id pregunta: 10589 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  Son principios del programa europeo ISA:";
 choices[83]= new Array();
 choices[83][0] = "La privacidad, la apertura y la seguridad.";
 choices[83][1] = "La neutralidad tecnol&oacute;gica y la reutilizaci&oacute;n.";
 choices[83][2] = "La protecci&oacute;n de los datos personales y la adaptabilidad.";
 choices[83][3] = "Todas las anteriores.";
 answers[83] = choices[83][3];
 units[83] = "30";
 comments[83] = "Id Pregunta: 10589. ";


//  Id pregunta: 10695 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  La Ley 39/2015 prevee Registros Electr&oacute;nicos de Apoderamientos:";
 choices[84]= new Array();
 choices[84][0] = "Este Registro Electr&oacute;nico ser&aacute; &uacute;nico para todas las Administraciones P&uacute;blicas.";
 choices[84][1] = "Este Registro Electr&oacute;nico ser&aacute; &uacute;nico para toda la Administraci&oacute;n General del Estado.";
 choices[84][2] = "La Ley &uacute;nicamente establece la creaci&oacute;n de dichos Registros.";
 choices[84][3] = "Esta Ley no se&ntilde;ala nada sobre dichos Registros.";
 answers[84] = choices[84][1];
 units[84] = "30";
 comments[84] = "Id Pregunta: 10695. ";


//  Id pregunta: 10739 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  &iquest;Cu&aacute;l es el &aacute;mbito de referencia de aplicaci&oacute;n se&ntilde;alado en el RD 806/2014?";
 choices[85]= new Array();
 choices[85][0] = "Administraci&oacute;n General del Estado.";
 choices[85][1] = "Administraci&oacute;n General del Estado y sus Organismos P&uacute;blicos.";
 choices[85][2] = "Administraci&oacute;n General del Estado, Comunidades Aut&oacute;nomas y Entidades Locales.";
 choices[85][3] = "Conjunto del Sector P&uacute;blico.";
 answers[85] = choices[85][1];
 units[85] = "24";
 comments[85] = "Id Pregunta: 10739. ";


//  Id pregunta: 10746 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  El Comit&eacute; Ejecutivo de la Comisi&oacute;n de Estrategia TIC estar&aacute; compuesto por:";
 choices[86]= new Array();
 choices[86][0] = "Un m&iacute;nimo de cinco miembros y un m&aacute;ximo de diez miembros.";
 choices[86][1] = "Un m&iacute;nimo de cinco miembros.";
 choices[86][2] = "Un m&aacute;ximo de diez miembros.";
 choices[86][3] = "Un m&iacute;nimo de cinco miembros y un m&aacute;ximo de quince miembros.";
 answers[86] = choices[86][0];
 units[86] = "24";
 comments[86] = "Id Pregunta: 10746. ";


//  Id pregunta: 10756 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  &iquest;C&oacute;mo se denomina la Comisi&oacute;n Delegada del Gobierno para la Seguridad Nacional que asiste al Presidente del Gobierno en la direcci&oacute;n de la Pol&iacute;tica de Seguridad Nacional?";
 choices[87]= new Array();
 choices[87][0] = "El Consejo de Seguridad Nacional.";
 choices[87][1] = "El Comit&eacute; Especializado de Ciberseguridad.";
 choices[87][2] = "El Comit&eacute; Especializado de Situaci&oacute;n.";
 choices[87][3] = "El Consejo Ejecutivo de Ciberseguridad.";
 answers[87] = choices[87][0];
 units[87] = "43";
 comments[87] = "Id Pregunta: 10756. ";


//  Id pregunta: 10771 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  &iquest;En qu&eacute; a&ntilde;o se aprueba la Norma T&eacute;cnica de Interoperabilidad de requisitos de conexi&oacute;n a la red de comunicaciones de las Administraciones P&uacute;blicas espa&ntilde;olas?";
 choices[88]= new Array();
 choices[88][0] = "2009";
 choices[88][1] = "2011";
 choices[88][2] = "2013";
 choices[88][3] = "2015";
 answers[88] = choices[88][1];
 units[88] = "43";
 comments[88] = "Id Pregunta: 10771. ";


//  Id pregunta: 10969 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  RE&Uacute;NETE es el Servicio Com&uacute;n de Reuniones Virtuales de la Red SARA que ofrece herramientas colaborativas a todas las Administraciones P&uacute;blicas. Entre sus funcionalidades NO se encuentra:";
 choices[89]= new Array();
 choices[89][0] = "Correo electr&oacute;nico multidominio.";
 choices[89][1] = "Integraci&oacute;n de salas de videoconferencia tradicional H323/SIP.";
 choices[89][2] = "Soporte on-line para p&aacute;ginas web.";
 choices[89][3] = "Videoconferencia con herramientas de colaboraci&oacute;n.";
 answers[89] = choices[89][0];
 units[89] = "44";
 comments[89] = "Id Pregunta: 10969. TIC A1 AGE 2014";


//  Id pregunta: 10981 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  De la Red SARA (Sistemas de Aplicaciones y Redes para las Administraciones) podemos afirmar que:";
 choices[90]= new Array();
 choices[90][0] = "Permite acceder a la plataforma de validaci&oacute;n de firma electr&oacute;nica @firma.";
 choices[90][1] = "No admite IPv6. Tampoco admite tr&aacute;fico cifrado.";
 choices[90][2] = "Su implantaci&oacute;n se establece como una recomendaci&oacute;n en el art&iacute;culo 43 de la Ley 11/2007 LAECSP.";
 choices[90][3] = "A&uacute;n se encuentra en fase beta y no se encuentra afectada por el ENS (Esquema Nacional de Seguridad).";
 answers[90] = choices[90][0];
 units[90] = "44";
 comments[90] = "Id Pregunta: 10981. TIC A1 AGE 2014";


//  Id pregunta: 11105 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  Seleccione la respuesta verdadera sobre los t&eacute;rminos empleados para definir la estrategia de continuidad y recuperaci&oacute;n en un sistema de informaci&oacute;n.";
 choices[91]= new Array();
 choices[91][0] = "El objetivo de Punto de recuperaci&oacute;n RPO determina la p&eacute;rdida aceptable de datos en caso de interrupci&oacute;n.";
 choices[91][1] = "El objetivo de Tiempo de Recuperaci&oacute;n es el tiempo m&aacute;ximo que el sistema puede estar interrumpido.";
 choices[91][2] = "Cuanto m&aacute;s bajo es el RTO m&aacute;s baja es la tolerancia al desastre y m&aacute;s elevado ser&aacute; el coste de las estrategias de recuperaci&oacute;n.";
 choices[91][3] = "Todas las anteriores son verdaderas";
 answers[91] = choices[91][0];
 units[91] = "32";
 comments[91] = "Id Pregunta: 11105. ";


//  Id pregunta: 11106 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  Seleccione la respuesta correcta sobre las estrategias de recuperaci&oacute;n.";
 choices[92]= new Array();
 choices[92][0] = "Los Cold Sites son instalaciones parcialmente configurados, que permiten la recuperaci&oacute;n en menos de una semana.";
 choices[92][1] = "Las instalaciones redundantes permiten una recuperaci&oacute;n inmediata ante una interrupci&oacute;n";
 choices[92][2] = "Los Hot Sites tienen un coste menor que los Cold Sites";
 choices[92][3] = "La configuraci&oacute;n m&aacute;s adecuada para un Warm Site es de mirroring.";
 answers[92] = choices[92][1];
 units[92] = "32";
 comments[92] = "Id Pregunta: 11106. ";


//  Id pregunta: 11122 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;A que se refiere la gu&iacute;a CCN-STIC 804?";
 choices[93]= new Array();
 choices[93][0] = "Medidas de implantaci&oacute;n del ENS";
 choices[93][1] = "Plan de Adecuaci&oacute;n del ENS";
 choices[93][2] = "Auditor&iacute;a del ENS";
 choices[93][3] = "Normas de seguridad del ENS";
 answers[93] = choices[93][0];
 units[93] = "43";
 comments[93] = "Id Pregunta: 11122. ";


//  Id pregunta: 11503 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Cu&aacute;l de los siguientes NO es un Comit&eacute; creado en el seno de la International Standards Organization (ISO)?";
 choices[94]= new Array();
 choices[94][0] = "DEVCO, Comit&eacute; de Desarrollo";
 choices[94][1] = "COPOLCO, Comit&eacute; de pol&iacute;ticas en materia de consumo";
 choices[94][2] = "QUALCO, Comit&eacute; de calidad";
 choices[94][3] = "CASCO, Comit&eacute; de evaluaci&oacute;n de la conformidad";
 answers[94] = choices[94][2];
 units[94] = "42";
 comments[94] = "Id Pregunta: 11503. NULL";


//  Id pregunta: 11584 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Frente a la recepci&oacute;n de una solicitud de revocaci&oacute;n de consentimiento del tratamiento de datos de car&aacute;cter personal, el responsable cesar&aacute; el tratamiento de los datos en un plazo m&aacute;ximo de:";
 choices[95]= new Array();
 choices[95][0] = "30 d&iacute;as h&aacute;biles";
 choices[95][1] = "30 d&iacute;as naturales";
 choices[95][2] = "10 d&iacute;as h&aacute;biles";
 choices[95][3] = "10 d&iacute;as naturales";
 answers[95] = choices[95][2];
 units[95] = "29";
 comments[95] = "Id Pregunta: 11584. ";


//  Id pregunta: 11590 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  Las RFCs son publicadas por:";
 choices[96]= new Array();
 choices[96][0] = "ITU";
 choices[96][1] = "W3C";
 choices[96][2] = "IAB";
 choices[96][3] = "IETF";
 answers[96] = choices[96][3];
 units[96] = "42";
 comments[96] = "Id Pregunta: 11590. ";


//  Id pregunta: 11597 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  La Ley del Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas es:";
 choices[97]= new Array();
 choices[97][0] = "Ley 39/2015";
 choices[97][1] = "Ley 40/2015";
 choices[97][2] = "Ley 29/2015";
 choices[97][3] = "Ley 30/2015";
 answers[97] = choices[97][0];
 units[97] = "43";
 comments[97] = "Id Pregunta: 11597. ";


//  Id pregunta: 11758 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;C&oacute;mo se llama la plataforma de contrataci&oacute;n de la Administraci&oacute;n General del Estado?";
 choices[98]= new Array();
 choices[98][0] = "Conecta-Patrimonio";
 choices[98][1] = "Conecta-Centralizaci&oacute;n";
 choices[98][2] = "Plataforma-Centraliza";
 choices[98][3] = "Centralizacion-ofertas";
 answers[98] = choices[98][1];
 units[98] = "41";
 comments[98] = "Id Pregunta: 11758. ";


//  Id pregunta: 11767 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  &iquest;Mediante qu&eacute; procedimiento su pueden adjudicar los acuerdos marco?";
 choices[99]= new Array();
 choices[99][0] = "Solo por procedimiento negociado";
 choices[99][1] = "Solo por procedimiento restringido";
 choices[99][2] = "Solo por procedimiento abierto";
 choices[99][3] = "Por procedimiento abierto, restringido o negociado&nbsp;";
 answers[99] = choices[99][3];
 units[99] = "41";
 comments[99] = "Id Pregunta: 11767. ";


