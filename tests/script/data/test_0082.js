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


//  Id pregunta: 18 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Cu&aacute;l no es una metodolog&iacute;a para la planificaci&oacute;n de la capacidad de un sistema inform&aacute;tico?:";
 choices[1]= new Array();
 choices[1][0] = "Simulaci&oacute;n";
 choices[1][1] = "La programaci&oacute;n lineal";
 choices[1][2] = "las reglas basadas en la experiencia";
 choices[1][3] = "La teor&iacute;a de colas";
 answers[1] = choices[1][1];
 units[1] = "25";
 comments[1] = "Id Pregunta: 18. planificaci&oacute;n de la capacidad de los sistemas";


//  Id pregunta: 175 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  En el &aacute;mbito de la evoluci&oacute;n de la inform&aacute;tica en las organizaciones, se debe a Donovan un modelo que utiliza como variable:";
 choices[2]= new Array();
 choices[2][0] = "El presupuesto empleado en inform&aacute;tica";
 choices[2][1] = "La estructura organizativa";
 choices[2][2] = "El grado de distribuci&oacute;n";
 choices[2][3] = "El nivel de complejidad organizativa";
 answers[2] = choices[2][2];
 units[2] = "22";
 comments[2] = "Id Pregunta: 175. donovan - nolan";


//  Id pregunta: 283 AÃ±o de creación de pregunta: 2009-01-01
 questions[3]= "4)  La calidad de los datos a la que hacen referencia las leyes de protecci&oacute;n de datos no incluye uno de los aspectos siguientes:";
 choices[3]= new Array();
 choices[3][0] = "Tipicidad";
 choices[3][1] = "Veracidad";
 choices[3][2] = "Finalidad";
 choices[3][3] = "Pertinencia";
 answers[3] = choices[3][0];
 units[3] = "29";
 comments[3] = "Id Pregunta: 283. ";


//  Id pregunta: 342 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  La red de comunicaci&oacute;n en Y de una organizaci&oacute;n es:";
 choices[4]= new Array();
 choices[4][0] = "Comunicaci&oacute;n ascendente donde dos subordinados reportan a su jefe sobre un asunto";
 choices[4][1] = "Esquema descendente en jerarqu&iacute;a absoluta";
 choices[4][2] = "Cada sujeto se comunica con todos los restantes";
 choices[4][3] = "Se establece con dos interlocutores en cada caso, interactuando con los m&aacute;s cercanos a uno";
 answers[4] = choices[4][0];
 units[4] = "23";
 comments[4] = "Id Pregunta: 342. ";


//  Id pregunta: 357 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  Las leyes de protecci&oacute;n de datos que pretenden prevenir la invasi&oacute;n de la intimidad del individuo frente al abuso de la informaci&oacute;n computarizada son las conocidas como:";
 choices[5]= new Array();
 choices[5][0] = "Leyes de primera generaci&oacute;n";
 choices[5][1] = "Leyes de segunda generaci&oacute;n";
 choices[5][2] = "Leyes de tercera generaci&oacute;n";
 choices[5][3] = "No se aplica esta clasificaci&oacute;n a este tipo de leyes";
 answers[5] = choices[5][2];
 units[5] = "36";
 comments[5] = "Id Pregunta: 357. ";


//  Id pregunta: 413 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  Respecto de la Agencia de Protecci&oacute;n de Datos, es falso que:";
 choices[6]= new Array();
 choices[6][0] = "Su consejo consultivo haya contado inicialmente con 9 miembros";
 choices[6][1] = "Que los inspectores de datos tengan la consideraci&oacute;n de autoridad p&uacute;blica en el desempe&ntilde;o de sus funciones";
 choices[6][2] = "Que los c&oacute;digos tipo deban ser inscritos en el Registro General de Protecci&oacute;n de Datos";
 choices[6][3] = "Que sea necesaria la autorizaci&oacute;n del Director de la Agencia para toda transferencia internacional de datos de car&aacute;cter personal mediante tratamientos automatizados";
 answers[6] = choices[6][3];
 units[6] = "29";
 comments[6] = "Id Pregunta: 413. ";


//  Id pregunta: 461 AÃ±o de creación de pregunta: 2002-01-01
 questions[7]= "8)  Son excepciones a las normas de contrataci&oacute;n establecidas en la Directiva 87/95 CE:";
 choices[7]= new Array();
 choices[7][0] = "La necesidad de una continuidad en el funcionamiento de los Sistemas existentes";
 choices[7][1] = "La naturaleza innovadora de algunos proyectos";
 choices[7][2] = "a y b son correctas";
 choices[7][3] = "Ninguna de las anteriores es correcta";
 answers[7] = choices[7][2];
 units[7] = "40";
 comments[7] = "Id Pregunta: 461. ";


//  Id pregunta: 479 AÃ±o de creación de pregunta: 2002-01-01
 questions[8]= "9)  Las caracter&iacute;sticas fundamentales que se buscan con los sistemas abiertos son :";
 choices[8]= new Array();
 choices[8][0] = "Interoperabilidad, escalabilidad y portabilidad";
 choices[8][1] = "Sistemas multiproceso, multiusuario y multitarea compuestos por componentes de diversos fabricantes";
 choices[8][2] = "Poder pasar de un ordenador de sobremesa a un gran mainframe sin tener que cambiar de entorno de trabajo";
 choices[8][3] = "Interconexi&oacute;n de sistemas bajo un mismo sistema operativo, conectividad de perif&eacute;ricos, un entorno consistente en productos y tecnolog&iacute;as y un mejor posicionamiento desde el punto de vista econ&oacute;mico";
 answers[8] = choices[8][0];
 units[8] = "40";
 comments[8] = "Id Pregunta: 479. ";


//  Id pregunta: 605 AÃ±o de creación de pregunta: 2006-01-01
 questions[9]= "10)  El art. 11 del Estatuto establece la estructura org&aacute;nica de la Agencia enumerando los siguientes &oacute;rganos:";
 choices[9]= new Array();
 choices[9][0] = "El Director de la Agencia de Protecci&oacute;n de Datos,el Consejo Consultivo, el Registro General de Protecci&oacute;n de Datos, la Inspecci&oacute;n de Datos y la Secretar&iacute;a General.";
 choices[9][1] = "El Director de la Agencia de Protecci&oacute;n de Datos,el Comite Consultivo, el Registro General de Protecci&oacute;n de Datos, la Inspecci&oacute;n de Datos y la Subsecretar&iacute;a General.";
 choices[9][2] = "El Director de la Agencia de Protecci&oacute;n de Datos,el Comite Consultivo, el Registro General de Protecci&oacute;n de Datos, la Inspecci&oacute;n de Datos y la Secretar&iacute;a General.";
 choices[9][3] = "El Director de la Agencia de Protecci&oacute;n de Datos,el Consejo Consultivo, el Registro General de Protecci&oacute;n de Datos, la Inspecci&oacute;n de Datos y la Subsecretar&iacute;a General.";
 answers[9] = choices[9][0];
 units[9] = "29";
 comments[9] = "Id Pregunta: 605. ";


//  Id pregunta: 653 AÃ±o de creación de pregunta: 2006-01-01
 questions[10]= "11)  &iquest;Cu&aacute;l es la diferencia entre una auditor&iacute;a de vulnerabilidades y un test de penetraci&oacute;n?";
 choices[10]= new Array();
 choices[10][0] = "Un test de penetraci&oacute;n identifica los servicios en ejecuci&oacute;n. Una auditor&iacute;a de vulnerabilidades proporciona una mayor informaci&oacute;n sobre las vulnerabilidades.";
 choices[10][1] = "Un test de penetraci&oacute;n enumera los recursos, una auditor&iacute;a de vulnerabilidaes enumera las vulnerabilidades.";
 choices[10][2] = "Un test de penetraci&oacute;n aprovecha las vulnerabilidades, una auditor&iacute;a de vulnerabilidades encuentra las vulnerabilidades.";
 choices[10][3] = "Los dos son lo mismo.";
 answers[10] = choices[10][2];
 units[10] = "31";
 comments[10] = "Id Pregunta: 653. ";


//  Id pregunta: 1173 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  Identifique las dos versiones hist&oacute;ricas generadas de Unix al final de los a&ntilde;os 80, motivadas por la coexistencia de dos desarrollos en paralelo:";
 choices[11]= new Array();
 choices[11][0] = "System V y BSD";
 choices[11][1] = "System IV y System V";
 choices[11][2] = "System V y Posix";
 choices[11][3] = "Posix y Motif";
 answers[11] = choices[11][0];
 units[11] = "53";
 comments[11] = "Id Pregunta: 1173. ";


//  Id pregunta: 1175 AÃ±o de creación de pregunta: 2002-01-01
 questions[12]= "13)  Indicar cu&aacute;l de las siguientes es una arquitectura cl&aacute;sica de la resoluci&oacute;n distribuida de problemas:";
 choices[12]= new Array();
 choices[12][0] = "Red de contratos";
 choices[12][1] = "Arquitectura de pizarra";
 choices[12][2] = "Las dos primeras son arquitecturas cl&aacute;sicas de la resoluci&oacute;n distribuida de problemas";
 choices[12][3] = "Ninguna de las anteriores son arquitecturas cl&aacute;sicas de la resoluci&oacute;n distribuida de problemas";
 answers[12] = choices[12][2];
 units[12] = "63";
 comments[12] = "Id Pregunta: 1175. ";


//  Id pregunta: 1206 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  La arquitectura centralizada tiene como ventaja respecto a la arquitectura distribuida:";
 choices[13]= new Array();
 choices[13][0] = "Que aporta unas posibilidades de trabajo mucho m&aacute;s flexibles y potentes";
 choices[13][1] = "Una m&iacute;nima dependencia de las comunicaciones";
 choices[13][2] = "Una menor complejidad";
 choices[13][3] = "Todas las anteriores";
 answers[13] = choices[13][2];
 units[13] = "50";
 comments[13] = "Id Pregunta: 1206. ";


//  Id pregunta: 1363 AÃ±o de creación de pregunta: 2002-01-01
 questions[14]= "15)  Si disponemos de las entidades EMPLEADO y FAMILIAR, y es condici&oacute;n de funcionamiento en la empresa que una vez desaparecidos los datos del empleado deben desaparecer los de sus familiares,  entonces:";
 choices[14]= new Array();
 choices[14][0] = "Se dise&ntilde;&oacute; mal, FAMILIAR no es una entidad";
 choices[14][1] = "FAMILIAR debe estar contenida en EMPLEADO";
 choices[14][2] = "FAMILIAR es una entidad d&eacute;bil";
 choices[14][3] = "FAMILIAR es una entidad dependiente";
 answers[14] = choices[14][2];
 units[14] = "58";
 comments[14] = "Id Pregunta: 1363. ";


//  Id pregunta: 1379 AÃ±o de creación de pregunta: 2002-01-01
 questions[15]= "16)  Un almac&eacute;n de datos o &quot;data warehouse&quot;:";
 choices[15]= new Array();
 choices[15][0] = "Integra datos de diferentes sistemas de informaci&oacute;n de la organizaci&oacute;n para permitir su an&aacute;lisis posterior por la Direcci&oacute;n.";
 choices[15][1] = "Recopila datos de diferentes &quot;data marts&quot; para permitir su an&aacute;lisis por la Direcci&oacute;n mediante herramientas OLAP.";
 choices[15][2] = "Integra todas las bases de datos que existen en una organizaci&oacute;n para su consulta por la Direcci&oacute;n.";
 choices[15][3] = "Es una base de datos que contiene metainformaci&oacute;n sobre las bases de datos que existen en la organizaci&oacute;n.";
 answers[15] = choices[15][0];
 units[15] = "68";
 comments[15] = "Id Pregunta: 1379. ";


//  Id pregunta: 1491 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  &iquest;Cu&aacute;ntos niveles RAID est&aacute;ndar existen?:";
 choices[16]= new Array();
 choices[16][0] = "4";
 choices[16][1] = "5";
 choices[16][2] = "6";
 choices[16][3] = "7";
 answers[16] = choices[16][3];
 units[16] = "48";
 comments[16] = "Id Pregunta: 1491. ";


//  Id pregunta: 1496 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Indicar cu&aacute;l de las siguientes afirmaciones no es cierta acerca del lenguaje HTML:";
 choices[17]= new Array();
 choices[17][0] = "Es un lenguaje de programaci&oacute;n";
 choices[17][1] = "Permite referencias a otros documentos o recursos de la red";
 choices[17][2] = "Permite la inclusi&oacute;n de marcas (tags) para controlar los aspectos de la presentaci&oacute;n";
 choices[17][3] = "Para escribir en HTML se necesita al menos un editor ASCII";
 answers[17] = choices[17][0];
 units[17] = "69";
 comments[17] = "Id Pregunta: 1496. NULL";


//  Id pregunta: 1557 AÃ±o de creación de pregunta: 2003-01-01
 questions[18]= "19)  &iquest;Cu&aacute;l de las siguientes operaciones l&oacute;gicas es incorrecta?:";
 choices[18]= new Array();
 choices[18][0] = "complementario de (A+B) = complementario (A) . complementario (B)";
 choices[18][1] = "complementario de (A.B) = complementario (A) + complementario (B)";
 choices[18][2] = "complementario de (A . A) = complementario (A)";
 choices[18][3] = "doble complementario (A) = A";
 answers[18] = choices[18][2];
 units[18] = "";
 comments[18] = "Id Pregunta: 1557. Junta Andaluc&iacute;a";


//  Id pregunta: 1699 AÃ±o de creación de pregunta: 2006-01-01
 questions[19]= "20)  &iquest;Cu&aacute;l ser&iacute;a una caracter&iacute;stica esencial a la hora de valorar un equipo mini?";
 choices[19]= new Array();
 choices[19][0] = "Disponer de microprocesadores RISCs.";
 choices[19][1] = "La modularidad.";
 choices[19][2] = "Disponer de sistemas de almacenamiento basados en RAID.";
 choices[19][3] = "La posibilidad de interconexi&oacute;n al host.";
 answers[19] = choices[19][1];
 units[19] = "47";
 comments[19] = "Id Pregunta: 1699. ";


//  Id pregunta: 1711 AÃ±o de creación de pregunta: 2006-01-01
 questions[20]= "21)  Un mainframe:";
 choices[20]= new Array();
 choices[20][0] = "Es equivalente a una supercomputadora cara";
 choices[20][1] = "utiliza toda su potencia en ejecutar unos pocos programas lo m&aacute;s r&aacute;pidamente posible";
 choices[20][2] = "es multitarea y multiproceso, pero monousuario";
 choices[20][3] = "utiliza su potencia para ejecutar muchos programas concurrentemente";
 answers[20] = choices[20][3];
 units[20] = "49";
 comments[20] = "Id Pregunta: 1711. ";


//  Id pregunta: 1854 AÃ±o de creación de pregunta: 2006-01-01
 questions[21]= "22)  Las aplicaciones fundamentales de la criptograf&iacute;a asim&eacute;trica son:";
 choices[21]= new Array();
 choices[21][0] = "El cifrado eficiente y la firma digital";
 choices[21][1] = "El intercambio seguro  de claves privadas o de sesi&oacute;n y la firma digital";
 choices[21][2] = "El intercambio seguro de claves  privadas o de sesi&oacute;n y el cifrado eficiente";
 choices[21][3] = "Todas las anteriores";
 answers[21] = choices[21][1];
 units[21] = "72";
 comments[21] = "Id Pregunta: 1854. ";


//  Id pregunta: 1964 AÃ±o de creación de pregunta: 2002-01-01
 questions[22]= "23)  &iquest;Cu&aacute;l de estos objetivos no es un objetivo de la iniciativa eEurope?:";
 choices[22]= new Array();
 choices[22][0] = "Conseguir que todos los europeos entren en la era digital y est&eacute;n conectados a la red";
 choices[22][1] = "Crear en Europa una cultura y un esp&iacute;ritu empresarial abiertos a la cultura digital";
 choices[22][2] = "Conseguir que todas las redes administrativas de los distintos estados miembros est&eacute;n interconectadas a trav&eacute;s de TESTA II";
 choices[22][3] = "Garantizar que el proceso no se traduzca en exclusi&oacute;n social";
 answers[22] = choices[22][2];
 units[22] = "30";
 comments[22] = "Id Pregunta: 1964. ";


//  Id pregunta: 1985 AÃ±o de creación de pregunta: 2002-01-01
 questions[23]= "24)  &iquest;Cu&aacute;l de las siguientes respuestas no es un procedimiento para el control de calidad del software seg&uacute;n el PGGC?:";
 choices[23]= new Array();
 choices[23][0] = "Revisiones de aceptaci&oacute;n";
 choices[23][1] = "Auditor&iacute;as";
 choices[23][2] = "Revisiones t&eacute;cnicas formales";
 choices[23][3] = "Evaluaci&oacute;n de prototipos";
 answers[23] = choices[23][0];
 units[23] = "88";
 comments[23] = "Id Pregunta: 1985. Procedimientos de Control de Calidad: Revisiones T&eacute;cnicas Formales, Pruebas, Procedimientos extraordinarios (auditor&iacute;a) y Procedimientos particulares (Evaluaci&oacute;n de Prototipos)";


//  Id pregunta: 2153 AÃ±o de creación de pregunta: 2002-01-01
 questions[24]= "25)  &iquest;Cu&aacute;l de los siguientes no es un instrumento de control contemplado por el Plan General de Garant&iacute;a de Calidad?:";
 choices[24]= new Array();
 choices[24][0] = "Revisiones t&eacute;cnicas formales";
 choices[24][1] = "Guiones de recomendaciones";
 choices[24][2] = "Listas de control";
 choices[24][3] = "Las tres anteriores son instrumentos de control contemplados por el PGGC";
 answers[24] = choices[24][0];
 units[24] = "88";
 comments[24] = "Id Pregunta: 2153. ";


//  Id pregunta: 2200 AÃ±o de creación de pregunta: 2002-01-01
 questions[25]= "26)  &iquest;En qu&eacute; consiste la teor&iacute;a libre aplicada a la implantaci&oacute;n de la calidad?:";
 choices[25]= new Array();
 choices[25][0] = "El coste es constante e independiente de la calidad del producto";
 choices[25][1] = "El coste es constante pero dependiente de la calidad del producto";
 choices[25][2] = "El coste es constante s&oacute;lo en algunos casos";
 choices[25][3] = "El coste es independiente de la calidad del producto, aunque no se considera fijo";
 answers[25] = choices[25][0];
 units[25] = "88";
 comments[25] = "Id Pregunta: 2200. NULL";


//  Id pregunta: 2291 AÃ±o de creación de pregunta: 2002-01-01
 questions[26]= "27)  El modelo entidad/relaci&oacute;n de Chen es:";
 choices[26]= new Array();
 choices[26][0] = "Una t&eacute;cnica para la modelizaci&oacute;n sem&aacute;ntica de datos";
 choices[26][1] = "Una herramienta automatizada de an&aacute;lisis de requisitos";
 choices[26][2] = "Una t&eacute;cnica para el modelado de procesos";
 choices[26][3] = "Una metodolog&iacute;a para el desarrollo de sistemas de informaci&oacute;n";
 answers[26] = choices[26][0];
 units[26] = "80";
 comments[26] = "Id Pregunta: 2291. ";


//  Id pregunta: 2541 AÃ±o de creación de pregunta: 2002-01-01
 questions[27]= "28)  Los distintos tipos de sintetizadores de voz existentes se pueden clasificar en:";
 choices[27]= new Array();
 choices[27][0] = "Sintetizadores articulatorios. Sintetizadores de formantes. Sintetizadores por concatenaci&oacute;n controlada";
 choices[27][1] = "Sintetizadores autom&aacute;ticos. Sintetizadores manuales. Sintetizadores programables";
 choices[27][2] = "Sintetizadores programables. Sintetizadores de formantes. Sintetizadores por concatenaci&oacute;n controlada";
 choices[27][3] = "Sintetizadores de formantes. Sintetizadores por concatenaci&oacute;n controlada";
 answers[27] = choices[27][0];
 units[27] = "94";
 comments[27] = "Id Pregunta: 2541. ";


//  Id pregunta: 2653 AÃ±o de creación de pregunta: 2003-01-01
 questions[28]= "29)  La versi&oacute;n cocomo II guarda alg&uacute;n tipo de compatibilidad con la versi&oacute;n anterior";
 choices[28]= new Array();
 choices[28][0] = "No, es radicalmente diferente pues las t&eacute;cnicas de desarrollo SW han cambiado drasticamente desde la primera versi&oacute;n";
 choices[28][1] = "S&iacute; se ha guardado la compatibilidad con la versi&oacute;n anterior recogiendo los cambios actuales en desarrollo SW, por ejemplo la reutilizaci&oacute;n y el desarrollo con componentes";
 choices[28][2] = "S&iacute;, y lo &uacute;nico diferentes es la inclusi&oacute;n de nuevas variables explicativas en el modelo intermedio para reflejar los cambios en el desarrollo SW actual";
 choices[28][3] = "No existe la versi&oacute;n II de cocomo";
 answers[28] = choices[28][1];
 units[28] = "89";
 comments[28] = "Id Pregunta: 2653. NULL";


//  Id pregunta: 2662 AÃ±o de creación de pregunta: 2003-01-01
 questions[29]= "30)  De acuerdo con la informaci&oacute;n contenida los servicios de informaci&oacute;n electr&oacute;nica pueden clasificarse en:";
 choices[29]= new Array();
 choices[29][0] = "Servicios referenciales y servicios fuente.";
 choices[29][1] = "Servicios num&eacute;ricos y servicios textuales.";
 choices[29][2] = "Servicios de banda ancha y servicios de banda estrecha.";
 choices[29][3] = "Servicios portadores y servicios de valor a&ntilde;adido.";
 answers[29] = choices[29][0];
 units[29] = "96";
 comments[29] = "Id Pregunta: 2662. NULL";


//  Id pregunta: 2700 AÃ±o de creación de pregunta: 2003-01-01
 questions[30]= "31)  Principal inconveniente del teletexto:";
 choices[30]= new Array();
 choices[30][0] = "El juego de colores es reducido.";
 choices[30][1] = "Carece de interactividad real.";
 choices[30][2] = "La resoluci&oacute;n gr&aacute;fica no es buena.";
 choices[30][3] = "Necesita un decodificador caro y voluminoso.";
 answers[30] = choices[30][1];
 units[30] = "93";
 comments[30] = "Id Pregunta: 2700. NULL";


//  Id pregunta: 2740 AÃ±o de creación de pregunta: 2006-01-01
 questions[31]= "32)  Las pruebas de cobertura de sentencias pasando por todas ellas y probando todas las bifurcaciones programadas son las pruebas de:";
 choices[31]= new Array();
 choices[31][0] = "Caja blanca";
 choices[31][1] = "Caja negra";
 choices[31][2] = "Integraci&oacute;n";
 choices[31][3] = "Aceptaci&oacute;n";
 answers[31] = choices[31][0];
 units[31] = "79";
 comments[31] = "Id Pregunta: 2740. ";


//  Id pregunta: 3157 AÃ±o de creación de pregunta: 2002-01-01
 questions[32]= "33)  &iquest;Cu&aacute;l de las siguientes afirmaciones no corresponde a la tecnolog&iacute;a ATM?:";
 choices[32]= new Array();
 choices[32][0] = "Es tecnolog&iacute;a de conmutaci&oacute;n de tipo 'Frame-Relay'";
 choices[32][1] = "Es tecnolog&iacute;a orientada a conexi&oacute;n, con tama&ntilde;o de paquete fijo de 53 bytes";
 choices[32][2] = "Permite multiplexar diferentes tipos de tr&aacute;fico, por ejemplo voz, datos y v&iacute;deo en circuitos virtuales";
 choices[32][3] = "Usa t&eacute;cnicas de multiplexaci&oacute;n estad&iacute;stica, pudiendo conmutar interfaces individuales de hasta 622 Mbit/s en la actualidad";
 answers[32] = choices[32][0];
 units[32] = "109";
 comments[32] = "Id Pregunta: 3157. ";


//  Id pregunta: 3334 AÃ±o de creación de pregunta: 2002-01-01
 questions[33]= "34)  BGP es un 'exterior gateway protocol'. &iquest;Qu&eacute; significa esto?:";
 choices[33]= new Array();
 choices[33][0] = "Usa algoritmos propietarios para calcular la ruta &oacute;ptima";
 choices[33][1] = "Es un protocolo que se utiliza para acceder dentro de Internet y ser reconocido por los firewalls";
 choices[33][2] = "Filtra el tr&aacute;fico de las fuentes exteriores antes de encaminarlo";
 choices[33][3] = "Encamina o enruta el tr&aacute;fico entre sistemas aut&oacute;nomos diferentes";
 answers[33] = choices[33][3];
 units[33] = "100";
 comments[33] = "Id Pregunta: 3334. NULL";


//  Id pregunta: 3471 AÃ±o de creación de pregunta: 2002-01-01
 questions[34]= "35)  El servicio para navegar usando men&uacute;s que predominaba en Internet antes de la aparici&oacute;n de WWW se denomina:";
 choices[34]= new Array();
 choices[34][0] = "WAIS";
 choices[34][1] = "Gopher";
 choices[34][2] = "Archie";
 choices[34][3] = "Teletex";
 answers[34] = choices[34][1];
 units[34] = "112";
 comments[34] = "Id Pregunta: 3471. ";


//  Id pregunta: 3596 AÃ±o de creación de pregunta: 2002-01-01
 questions[35]= "36)  La direcci&oacute;n IP 192.168.42.127:";
 choices[35]= new Array();
 choices[35][0] = "Es una direcci&oacute;n de la red Internet";
 choices[35][1] = "Es una direcci&oacute;n de la red Internet, clase C";
 choices[35][2] = "Es una direcci&oacute;n de una red IP privada";
 choices[35][3] = "Es una direcci&oacute;n de la red Internet, clase B";
 answers[35] = choices[35][2];
 units[35] = "100";
 comments[35] = "Id Pregunta: 3596. NULL";


//  Id pregunta: 3598 AÃ±o de creación de pregunta: 2002-01-01
 questions[36]= "37)  La direcci&oacute;n IPv4 172.30.20.20:";
 choices[36]= new Array();
 choices[36][0] = "Es una direcci&oacute;n privada";
 choices[36][1] = "Es una direcci&oacute;n p&uacute;blica";
 choices[36][2] = "Es una direcci&oacute;n de clase C";
 choices[36][3] = "Es una direcci&oacute;n de clase D";
 answers[36] = choices[36][0];
 units[36] = "100";
 comments[36] = "Id Pregunta: 3598. NULL";


//  Id pregunta: 3966 AÃ±o de creación de pregunta: 2003-01-01
 questions[37]= "38)  Respecto de Java y JavaScript se puede decir";
 choices[37]= new Array();
 choices[37][0] = "Los dos son lenguajes interpretados";
 choices[37][1] = "Java es compilado en tiempo de ejecuci&oacute;n y JavaScript interpretado                                                           ";
 choices[37][2] = "JavaScript es compilado en tiempo de ejecuci&oacute;n y Java interpretado";
 choices[37][3] = "Ambos son compilados";
 answers[37] = choices[37][1];
 units[37] = "114";
 comments[37] = "Id Pregunta: 3966. ";


//  Id pregunta: 4121 AÃ±o de creación de pregunta: 2006-01-01
 questions[38]= "39)  Un protocolo usado espec&iacute;ficamente para controlar el backup de datos entre el almacenamiento primario y el centro de respaldo es";
 choices[38]= new Array();
 choices[38][0] = "Common Management Information Protocol (CMIP)";
 choices[38][1] = "Network Data Management Protocol (NDMP)";
 choices[38][2] = "Point-to-Point Protocol (PPP)";
 choices[38][3] = "Bootstrap Protocol (BOOTP)";
 answers[38] = choices[38][1];
 units[38] = "97";
 comments[38] = "Id Pregunta: 4121. NULL";


//  Id pregunta: 4161 AÃ±o de creación de pregunta: 2006-01-01
 questions[39]= "40)  En seguridad, que elemento no forma parte de los servicios de AAA";
 choices[39]= new Array();
 choices[39][0] = "Registro (accounting)";
 choices[39][1] = "Autorizaci&oacute;n";
 choices[39][2] = "Adaptaci&oacute;n";
 choices[39][3] = "Autenticaci&oacute;n";
 answers[39] = choices[39][2];
 units[39] = "111";
 comments[39] = "Id Pregunta: 4161. NULL";


//  Id pregunta: 4330 AÃ±o de creación de pregunta: 2007-01-01
 questions[40]= "41)  Los objetivos de alto nivel de la auditoria inform&aacute;tica son, con car&aacute;cter general: I) Dar a la Direcci&oacute;n garant&iacute;a suficiente del cumplimiento de los objetivos de control. II) Sustanciar los riesgos resultantes, si se detectan debilidades de control significativas. III) Aconsejar a la Direcci&oacute;n sobre el curso de acciones correctivas.";
 choices[40]= new Array();
 choices[40][0] = "S&oacute;lo I";
 choices[40][1] = "S&oacute;lo II.";
 choices[40][2] = "I y II.";
 choices[40][3] = "I, II y III";
 answers[40] = choices[40][3];
 units[40] = "31";
 comments[40] = "Id Pregunta: 4330. ";


//  Id pregunta: 4516 AÃ±o de creación de pregunta: 2007-01-01
 questions[41]= "42)  Respecto al software libre:";
 choices[41]= new Array();
 choices[41][0] = "Los usuarios de software libre deben tener Ia libertad de estudiar como funciona el programa y adaptarlo a sus necesidades.";
 choices[41][1] = "El &uacute;nico coste permitido por la distribuci&oacute;n de software libre es el coste de distribuci&oacute;n.";
 choices[41][2] = "Esta permitida la distribuci&oacute;n de software libre pero no su posterior modificaci&oacute;n.";
 choices[41][3] = "Solo basta con incluir el c&oacute;digo fuente, no es necesario incluir documento legal alguno.";
 answers[41] = choices[41][0];
 units[41] = "61";
 comments[41] = "Id Pregunta: 4516. NULL";


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


//  Id pregunta: 4608 AÃ±o de creación de pregunta: 2007-01-01
 questions[43]= "44)  &iquest;En cual de las siguientes fases del modelo de ciclo de vida de un proyecto de tecnolog&iacute;as de Ia informaci&oacute;n se asignan los recursos materiales para cada una de las funciones?";
 choices[43]= new Array();
 choices[43][0] = "fase de definici&oacute;n";
 choices[43][1] = "fase de dise&ntilde;o";
 choices[43][2] = "fase de construccion";
 choices[43][3] = "fase de operaci&oacute;n";
 answers[43] = choices[43][1];
 units[43] = "76";
 comments[43] = "Id Pregunta: 4608. ";


//  Id pregunta: 4651 AÃ±o de creación de pregunta: 2007-01-01
 questions[44]= "45)  Cual de las siguientes no es una caracter&iacute;stica de DAB:";
 choices[44]= new Array();
 choices[44][0] = "utiliza m&uacute;ltiples portadoras en el mismo canal.";
 choices[44][1] = "permite emitir en redes de frecuencia &uacute;nica";
 choices[44][2] = "ofrece un canal radio de retorno";
 choices[44][3] = "ofrecer servicios de datos";
 answers[44] = choices[44][2];
 units[44] = "";
 comments[44] = "Id Pregunta: 4651. ";


//  Id pregunta: 4844 AÃ±o de creación de pregunta: 2007-01-01
 questions[45]= "46)  El protocolo DHCP (Dynamic Host Configuration Protocol) es una mejora o actualizaci&oacute;n de uno de los siguientesprotocolos:";
 choices[45]= new Array();
 choices[45][0] = "ARP (Address Resolution Protocol)";
 choices[45][1] = "RARP (Reverse Address Resolution Protocol)";
 choices[45][2] = "BOOTP (Bootstrap Protocol)";
 choices[45][3] = "IGMP (Internet Group Management Protocol)";
 answers[45] = choices[45][2];
 units[45] = "100";
 comments[45] = "Id Pregunta: 4844. ";


//  Id pregunta: 4921 AÃ±o de creación de pregunta: 2003-01-01
 questions[46]= "47)  En el UNIX System V, los i-nodos tienen una tabla de direcciones con:";
 choices[46]= new Array();
 choices[46][0] = "11 entradas.";
 choices[46][1] = "12 entradas.";
 choices[46][2] = "13 entradas.";
 choices[46][3] = "14 entradas.";
 answers[46] = choices[46][2];
 units[46] = "53,54";
 comments[46] = "Id Pregunta: 4921. Examen TIC B 2007";


//  Id pregunta: 5072 AÃ±o de creación de pregunta: 2003-01-01
 questions[47]= "48)  &iquest;Qu&eacute; elemento NO forma parte de un diagrama de flujo de datos (DFD)?:";
 choices[47]= new Array();
 choices[47][0] = "Entidad externa";
 choices[47][1] = "Proceso";
 choices[47][2] = "Funci&oacute;n";
 choices[47][3] = "Almac&eacute;n de datos";
 answers[47] = choices[47][2];
 units[47] = "81";
 comments[47] = "Id Pregunta: 5072. Examen TIC A 2007";


//  Id pregunta: 5103 AÃ±o de creación de pregunta: 2003-01-01
 questions[48]= "49)  Los elementos b&aacute;sicos de un sistema de informaci&oacute;n son:";
 choices[48]= new Array();
 choices[48][0] = "Los procedimiento y las pr&aacute;cticas hatituales de trabajo; la informaci&oacute;n; los usuarios; el equipo de soporte para la comunicaci&oacute;n, el procesamiento y el almacenamiento de la informaci&oacute;n.";
 choices[48][1] = "Los procedimientos y las pr&aacute;cticas habituales de trabajo; la informaci&oacute;n; el eqipo de soporte para la comunicaci&oacute;n, el procesamiento y el almacenamiento de la informaci&oacute;n.";
 choices[48][2] = "Los procedimientos y las pr&aacute;cticas habituales de trabajo; la informaci&oacute;n; los usuarios.";
 choices[48][3] = "La informaci&oacute;n; el equipo de soporte para la comunicaci&oacute;n, el procesamiento y el almacenamiento de la informaci&oacute;n.";
 answers[48] = choices[48][0];
 units[48] = "21";
 comments[48] = "Id Pregunta: 5103. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5126 AÃ±o de creación de pregunta: 2003-01-01
 questions[49]= "50)  &iquest;Cu&aacute;l de los siguientes formatos gr&aacute;ficos soporta internamente datos de georeferenciaci&oacute;n?";
 choices[49]= new Array();
 choices[49][0] = ".jpeg.";
 choices[49][1] = ".tiff.";
 choices[49][2] = ".png.";
 choices[49][3] = ".bmp.";
 answers[49] = choices[49][1];
 units[49] = "67";
 comments[49] = "Id Pregunta: 5126. Examen TIC A Castilla La Mancha 2007";


//  Id pregunta: 5470 AÃ±o de creación de pregunta: 2003-01-01
 questions[50]= "51)  La primera fase del desarrollo software seg&uacute;n M&eacute;trica Versi&oacute;n 3 es:";
 choices[50]= new Array();
 choices[50][0] = "Estudio de Viabilidad del Sistema";
 choices[50][1] = "Planificaci&oacute;n de Sistemas de Informaci&oacute;n";
 choices[50][2] = "Definici&oacute;n del Sistema";
 choices[50][3] = "Estudio del Sistema Actual";
 answers[50] = choices[50][0];
 units[50] = "86";
 comments[50] = "Id Pregunta: 5470. Castilla y Le&oacute;n";


//  Id pregunta: 5551 AÃ±o de creación de pregunta: 2003-01-01
 questions[51]= "52)  &iquest;Qu&eacute; considera que NO es una ventaja de la construcci&oacute;n de portales accesibles?";
 choices[51]= new Array();
 choices[51][0] = "Aumento de la usabilidad";
 choices[51][1] = "Facilita la independencia de dispositivo";
 choices[51][2] = "Simplifica el desarrollo";
 choices[51][3] = "Todas las anteriores son correctas.";
 answers[51] = choices[51][3];
 units[51] = "39";
 comments[51] = "Id Pregunta: 5551. ";


//  Id pregunta: 5624 AÃ±o de creación de pregunta: 2003-01-01
 questions[52]= "53)  Indique cu&aacute;l es el n&uacute;mero de protocolo ESP (Encapsulating Security Payload)";
 choices[52]= new Array();
 choices[52][0] = "51";
 choices[52][1] = "50";
 choices[52][2] = "49";
 choices[52][3] = "Ninguno de los anteriores";
 answers[52] = choices[52][1];
 units[52] = "111";
 comments[52] = "Id Pregunta: 5624. NULL";


//  Id pregunta: 5694 AÃ±o de creación de pregunta: 2003-01-01
 questions[53]= "54)  Se&ntilde;ale cual de los siguientes datos no se almacena en la zona privada del chip criptogr&aacute;fico del DNI electr&oacute;nico:";
 choices[53]= new Array();
 choices[53][0] = "Claves privadas del ciudadano";
 choices[53][1] = "Certificado de autenticaci&oacute;n";
 choices[53][2] = "Claves p&uacute;blicas del ciudadano";
 choices[53][3] = "Certificado de firma";
 answers[53] = choices[53][2];
 units[53] = "74";
 comments[53] = "Id Pregunta: 5694. NULL";


//  Id pregunta: 5774 AÃ±o de creación de pregunta: 2009-01-01
 questions[54]= "55)  Los datos de car&aacute;cter personal recogidos o elaborados por las Administraciones P&uacute;blicas para el desempe&ntilde;o de sus atribuciones";
 choices[54]= new Array();
 choices[54][0] = "Podr&aacute;n comunicarse entre administraciones los datos de car&aacute;cter personal que una Administraci&oacute;n P&uacute;blica obtenga o elabore con destino a otra";
 choices[54][1] = "Las diferentes Administraciones P&uacute;blicas podr&aacute;n cederse entre ellas los datos de car&aacute;cter personal incluso para el ejercicio de competencias diferentes.";
 choices[54][2] = "No podr&aacute;n cederse cuando la comunicaci&oacute;n tenga por objeto el tratamiento de los datos con fines hist&oacute;ricos, estad&iacute;sticos  o cient&iacute;ficos";
 choices[54][3] = "La Ley no trata este particular, sino que lo hace su desarrollo posterior";
 answers[54] = choices[54][0];
 units[54] = "29";
 comments[54] = "Id Pregunta: 5774. MAP 2008 A2";


//  Id pregunta: 5845 AÃ±o de creación de pregunta: 2009-01-01
 questions[55]= "56)  En referencia a los grupos de trabajo IEEE 802, indique cu&aacute;l de los siguientes grupos est&aacute; relacionado con las redes m&oacute;viles inal&aacute;mbricas de banda ancha (MBWA):";
 choices[55]= new Array();
 choices[55][0] = "802.3";
 choices[55][1] = "802.11";
 choices[55][2] = "802.15";
 choices[55][3] = "802.20";
 answers[55] = choices[55][3];
 units[55] = "101";
 comments[55] = "Id Pregunta: 5845. MAP 2008 A1";


//  Id pregunta: 5945 AÃ±o de creación de pregunta: 2009-01-01
 questions[56]= "57)  &iquest;Cu&aacute;l de los siguientes no facilita la ergonom&iacute;a de un sitio Web 2.0?";
 choices[56]= new Array();
 choices[56][0] = "Universos Netvibes";
 choices[56][1] = "gadgets sociales";
 choices[56][2] = "widgets";
 choices[56][3] = "Mashups";
 answers[56] = choices[56][1];
 units[56] = "120";
 comments[56] = "Id Pregunta: 5945. ";


//  Id pregunta: 6106 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  Indicar cu&aacute;l de los siguientes NO est&aacute; entre los objetivos que persigue MAGERIT v2:";
 choices[57]= new Array();
 choices[57][0] = "Ofrecer un m&eacute;todo sistem&aacute;tico para analizar los riesgos que afectan a los sistemas de informaci&oacute;n.";
 choices[57][1] = "Ayudar a descubrir y planificar las medidas oportunas para mantener los riesgos bajo control.";
 choices[57][2] = "Establecer una norma de obligado cumplimiento para todos los organismos de las Administraciones P&uacute;blicas espa&ntilde;olas a la hora de analizar y gestionar los riesgos.";
 choices[57][3] = "Preparar a las organizaciones para procesos de evaluaci&oacute;n, auditoria, certificaci&oacute;n o acreditaci&oacute;n.";
 answers[57] = choices[57][2];
 units[57] = "33";
 comments[57] = "Id Pregunta: 6106. TIC A 2009";


//  Id pregunta: 6134 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  En relaci&oacute;n con el funcionamiento de un CAU (Centro de Atenci&oacute;n de Usuarios) no es correcto que:";
 choices[58]= new Array();
 choices[58][0] = "Toda llamada que se reciba en el CAU debe quedar registrada como incidencia";
 choices[58][1] = "En el caso que el CAU no pueda resolver la incidencia debe escalarla a un segundo nivel, que se corresponde a otras &aacute;reas del centro TIC";
 choices[58][2] = "Si el segundo nivel no puede resolver la incidencia, escalar&aacute; la incidencia al tercer nivel, compuesto en general por proveedores y empresas de mantenimiento";
 choices[58][3] = "Es responsabilidad de cada uno de los niveles documentar la incidencia, cerrarla y comunicarlo al usuario";
 answers[58] = choices[58][3];
 units[58] = "26";
 comments[58] = "Id Pregunta: 6134. ";


//  Id pregunta: 6155 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  &iquest;C&oacute;mo fue renombrado el protocolo SMB por Microsoft?";
 choices[59]= new Array();
 choices[59][0] = "SAMBA";
 choices[59][1] = "CIFS";
 choices[59][2] = "MSRPC";
 choices[59][3] = "Ninguna de las anteriores.";
 answers[59] = choices[59][1];
 units[59] = "112";
 comments[59] = "Id Pregunta: 6155. ";


//  Id pregunta: 6221 AÃ±o de creación de pregunta: 2010-01-01
 questions[60]= "61)  Respecto a los diagramas de flujo de datos &iquest;Cu&aacute;l de las siguientes es falsa?";
 choices[60]= new Array();
 choices[60][0] = "Un diagrama de flujo de datos se compone de los siguientes elementos: entidad externa, proceso, almac&eacute;n de datos y flujo de datos";
 choices[60][1] = "Un proceso como origen de datos puede hacer las funciones de un almacen de datos";
 choices[60][2] = "Los flujos de datos que comunican procesos con almacenes pueden ser de los tipos: consulta, actualizaci&oacute;n y di&aacute;logo";
 choices[60][3] = "Elementos a&ntilde;adidos al diagrama de flujo de datos para sistemas especiales: proceso de control y flujo de control";
 answers[60] = choices[60][1];
 units[60] = "81";
 comments[60] = "Id Pregunta: 6221. TICB-2009, bloque desarrollo";


//  Id pregunta: 6224 AÃ±o de creación de pregunta: 2010-01-01
 questions[61]= "62)  &iquest;Cu&aacute;les son las JSRs de las versiones v1 y v2 de la Java Portlet Specification?";
 choices[61]= new Array();
 choices[61][0] = "JSR 186 y JSR 268";
 choices[61][1] = "JSR 618 y JSR 628";
 choices[61][2] = "JSR 681 y JSR 682";
 choices[61][3] = "JSR 168 y JSR 286";
 answers[61] = choices[61][3];
 units[61] = "114";
 comments[61] = "Id Pregunta: 6224. ";


//  Id pregunta: 6277 AÃ±o de creación de pregunta: 2010-01-01
 questions[62]= "63)  No es una ventaja de los modelos de ciclo de vida basada en prototipos:";
 choices[62]= new Array();
 choices[62][0] = "Los sistemas se desarrollan con m&aacute;s rapidez";
 choices[62][1] = "El prototipo coincide exactamente con el producto final";
 choices[62][2] = "Se facilita la comunicaci&oacute;n con los usuarios";
 choices[62][3] = "Los requisitos de usuario son m&aacute;s f&aacute;ciles de determinar";
 answers[62] = choices[62][1];
 units[62] = "76";
 comments[62] = "Id Pregunta: 6277. ";


//  Id pregunta: 6313 AÃ±o de creación de pregunta: 2010-01-01
 questions[63]= "64)  No es un tipo de cohesi&oacute;n:";
 choices[63]= new Array();
 choices[63][0] = "Cohesi&oacute;n com&uacute;n.";
 choices[63][1] = "Cohesi&oacute;n funcional.";
 choices[63][2] = "Cohesi&oacute;n comunicacional.";
 choices[63][3] = "Cohesi&oacute;n l&oacute;gica.";
 answers[63] = choices[63][0];
 units[63] = "84";
 comments[63] = "Id Pregunta: 6313. ";


//  Id pregunta: 6372 AÃ±o de creación de pregunta: 2010-01-01
 questions[64]= "65)  En relaci&oacute;n a lo dispuesto en el Esquema Nacional de Seguridad, un sistema de informaci&oacute;n ser&aacute; de categor&iacute;a MEDIA cuando:";
 choices[64]= new Array();
 choices[64][0] = "Las dimensiones de seguridad definidas como cr&iacute;ticas son, en su mayor&iacute;a, de nivel MEDIO.";
 choices[64][1] = "Alguna de sus dimensiones de seguridad alcanza el nivel MEDIO, y ninguna es de nivel inferior.";
 choices[64][2] = "Alguna de sus dimensiones de seguridad alcanza el nivel MEDIO, y ninguna alcanza un nivel superior.";
 choices[64][3] = "Las dimensiones de seguridad son, en su mayor&iacute;a, de nivel MEDIO.";
 answers[64] = choices[64][2];
 units[64] = "43";
 comments[64] = "Id Pregunta: 6372. Anexo I ENS";


//  Id pregunta: 6619 AÃ±o de creación de pregunta: 2010-01-01
 questions[65]= "66)  Seg&uacute;n M&eacute;trica la Definici&oacute;n de la Formaci&oacute;n de los Usuarios Finales:";
 choices[65]= new Array();
 choices[65][0] = "Se realiza en el proceso de An&aacute;lisis (ASI), conjuntamente con el Plan de Pruebas";
 choices[65][1] = "Se realiza en el proceso de Dise&ntilde;o (DSI), cuando se establecen los Requisitos de Implantaci&oacute;n";
 choices[65][2] = "Se realiza en el proceso de Construcci&oacute;n (CSI), en paralelo a la ejecuci&oacute;n de las Pruebas del Sistema";
 choices[65][3] = "Se realiza en el proceso de Implantaci&oacute;n y Aceptaci&oacute;n (IAS), antes de las Pruebas de Aceptaci&oacute;n";
 answers[65] = choices[65][2];
 units[65] = "86";
 comments[65] = "Id Pregunta: 6619. NULL";


//  Id pregunta: 7146 AÃ±o de creación de pregunta: 2010-01-01
 questions[66]= "67)  &iquest;Qu&eacute; art&iacute;culo de la Ley 11/2007 de 22 de Junio hace referencia a los Esquemas Nacionales de Interoperabilidad y Seguridad?";
 choices[66]= new Array();
 choices[66][0] = "Art&iacute;culo 52";
 choices[66][1] = "Art&iacute;culo 44";
 choices[66][2] = "Art&iacute;culo 42";
 choices[66][3] = "Art&iacute;culo 50";
 answers[66] = choices[66][2];
 units[66] = "43";
 comments[66] = "Id Pregunta: 7146. Examen TIC B 2009";


//  Id pregunta: 7299 AÃ±o de creación de pregunta: 2010-01-01
 questions[67]= "68)  Indique cu&aacute;l de las siguientes es una medida de centralidad en una red social:";
 choices[67]= new Array();
 choices[67][0] = "Grado (degree)";
 choices[67][1] = "Cercan&iacute;a (closeness)";
 choices[67][2] = "Intermediaci&oacute;n (betweenness)";
 choices[67][3] = "Todas son medidas de centralidad";
 answers[67] = choices[67][3];
 units[67] = "63";
 comments[67] = "Id Pregunta: 7299. ";


//  Id pregunta: 7325 AÃ±o de creación de pregunta: 2010-01-01
 questions[68]= "69)  Se&ntilde;ale cu&aacute;l de las siguientes afirmaciones no es correcta respecto a 'facturae':";
 choices[68]= new Array();
 choices[68][0] = "Es el formato a utilizar para la facturaci&oacute;n electr&oacute;nica a las Administraciones P&uacute;blicas";
 choices[68][1] = "Se trata de un formato basado en el est&aacute;ndar XML (Extensible Markup Language)";
 choices[68][2] = "Puede hacer uso de firma electr&oacute;nica avanzada para garantizar la autenticidad e integridad";
 choices[68][3] = "No permite el uso de XADES para la firma electr&oacute;nica avanzada";
 answers[68] = choices[68][3];
 units[68] = "70";
 comments[68] = "Id Pregunta: 7325. NULL";


//  Id pregunta: 7910 AÃ±o de creación de pregunta: 2010-01-01
 questions[69]= "70)   De acuerdo al modelo EFQM (European Foundation for Quality Management) de Excelencia, el subcriterio denominado &laquo;Gesti&oacute;n de la Tecnolog&iacute;a&raquo; pertenece al criterio:";
 choices[69]= new Array();
 choices[69][0] = " Alianzas y recursos.";
 choices[69][1] = " Pol&iacute;tica y estrategia.";
 choices[69][2] = " Procesos.";
 choices[69][3] = " Resultados clave.";
 answers[69] = choices[69][0];
 units[69] = "NULL";
 comments[69] = "Id Pregunta: 7910. Map 2006";


//  Id pregunta: 7998 AÃ±o de creación de pregunta: 2010-01-01
 questions[70]= "71)   &iquest;Cu&aacute;l de las siguientes afirmaciones define el tipo de procesamiento conocido como OLAP?";
 choices[70]= new Array();
 choices[70][0] = " Procesamiento transaccional en tiempo real que consiste en realizar transacciones, es decir actualizaciones y consultas a la base de datos con un objetivo operacional.";
 choices[70][1] = " Procesamiento anal&iacute;tico en tiempo real que engloba un conjunto de operaciones, exclusivamente de consulta, en las que se requiere agregar y cruzar gran cantidad de informaci&oacute;n.";
 choices[70][2] = " Procesamiento anal&iacute;tico en tiempo real que engloba un conjunto de operaciones, de consulta y actualizaci&oacute;n, en las que se requiere agregar y cruzar gran cantidad de informaci&oacute;n.";
 choices[70][3] = " Procesamiento transaccional en tiempo real que engloba un conjunto de operaciones, de consulta y actualizaci&oacute;n, con el objetivo de realizar informes y res&uacute;menes para el apoyo en la toma de decisiones.";
 answers[70] = choices[70][1];
 units[70] = "NULL";
 comments[70] = "Id Pregunta: 7998. Map 2007";


//  Id pregunta: 8401 AÃ±o de creación de pregunta: 2011-01-01
 questions[71]= "72)  Dentro del contenido m&iacute;nimo de una Sede Electr&oacute;nica NO se encuentra: ";
 choices[71]= new Array();
 choices[71][0] = "Identificaci&oacute;n, &oacute;rgano titular y responsables de gesti&oacute;n. ";
 choices[71][1] = "Sistemas de firma electr&oacute;nica que sean admitidos o utilizados en la Sede. ";
 choices[71][2] = "Sistemas de verificaci&oacute;n de los certificados de la Sede. ";
 choices[71][3] = "Relaci&oacute;n de funcionarios habilitados para actuar ante la Sede";
 answers[71] = choices[71][3];
 units[71] = "43";
 comments[71] = "Id Pregunta: 8401. Examen TIC A2 2010";


//  Id pregunta: 8453 AÃ±o de creación de pregunta: 2011-01-01
 questions[72]= "73)  Un puente se caracteriza por:";
 choices[72]= new Array();
 choices[72][0] = "Operar en capa 3 del modelo OSI y utiliza direcciones MAC para tomar decisiones";
 choices[72][1] = "Opera en capa 2 del modelo OSI y utiliza direcciones MAC para tomar decisiones";
 choices[72][2] = "Operar en capa 3 del modelo OSI y utiliza direcciones IP para tomar decisiones";
 choices[72][3] = "Operar en capa 4 del modelo OSI y utiliza puertos TCP para tomar decisiones";
 answers[72] = choices[72][1];
 units[72] = "102";
 comments[72] = "Id Pregunta: 8453. Analista Ayto. Madrid 2010";


//  Id pregunta: 8522 AÃ±o de creación de pregunta: 2011-01-01
 questions[73]= "74)  &iquest;Cu&aacute;l de los siguientes es un tipo de algoritmo de control de la congesti&oacute;n en redes conmutadas?";
 choices[73]= new Array();
 choices[73][0] = "Estado del enlace.";
 choices[73][1] = "Vector distancia.";
 choices[73][2] = "Inundaci&oacute;n de paquetes.";
 choices[73][3] = "Cubeta con goteo.";
 answers[73] = choices[73][3];
 units[73] = "104";
 comments[73] = "Id Pregunta: 8522. Examen TIC A2 2010 interna";


//  Id pregunta: 8533 AÃ±o de creación de pregunta: 2011-01-01
 questions[74]= "75)  &iquest;Qu&eacute; m&eacute;todo de codificaci&oacute;n de la voz NO realiza compresi&oacute;n?";
 choices[74]= new Array();
 choices[74][0] = "LD-CELP (Low-Delay Code-Excited Linear Prediction).";
 choices[74][1] = "CS-ACELP (Conjugate-Structured Algebraic Code-Excited Linear Prediction)";
 choices[74][2] = "PCM (Pulse-Code Modulation).";
 choices[74][3] = "ADPCM (Adaptative Differential Pulse Code Modulation)";
 answers[74] = choices[74][2];
 units[74] = "117";
 comments[74] = "Id Pregunta: 8533. Examen TIC A2 2010 interna";


//  Id pregunta: 8656 AÃ±o de creación de pregunta: 2011-01-01
 questions[75]= "76)  En la recomendaci&oacute;n X.25, la capa f&iacute;sica en la interfaz est&aacute; definida por el protocolo:";
 choices[75]= new Array();
 choices[75][0] = "V.25";
 choices[75][1] = "V.21";
 choices[75][2] = "X.21";
 choices[75][3] = "X.24";
 answers[75] = choices[75][2];
 units[75] = "103";
 comments[75] = "Id Pregunta: 8656. Examen UPM A2 2011";


//  Id pregunta: 8895 AÃ±o de creación de pregunta: 2011-01-01
 questions[76]= "77)  &iquest;Cu&aacute;l de las siguientes no corresponde a una funci&oacute;n digest?";
 choices[76]= new Array();
 choices[76][0] = "HMAC";
 choices[76][1] = "MD5";
 choices[76][2] = "MD8";
 choices[76][3] = "SHA";
 answers[76] = choices[76][2];
 units[76] = "74";
 comments[76] = "Id Pregunta: 8895. NULL";


//  Id pregunta: 8902 AÃ±o de creación de pregunta: 2011-01-01
 questions[77]= "78)  &iquest;Cu&aacute;les de los siguientes tipos de ficheros est&aacute;n amparados por la Ley Org&aacute;nica 15/1999, de Protecci&oacute;n de Datos de Car&aacute;cter Personal?:";
 choices[77]= new Array();
 choices[77][0] = "Los ficheros sometidos a la normativa sobre protecci&oacute;n de materias clasificadas.";
 choices[77][1] = "El fichero de clientes de una empresa de telecomunicaciones que da servicio de telefon&iacute;a y acceso a Internet.";
 choices[77][2] = "Los ficheros mantenidos por personas f&iacute;sicas a t&iacute;tulo exclusivamente personal o dom&eacute;stico.";
 choices[77][3] = "Ninguno de los anteriores";
 answers[77] = choices[77][1];
 units[77] = "29";
 comments[77] = "Id Pregunta: 8902. Operador Ayto. Madrid 2010";


//  Id pregunta: 8977 AÃ±o de creación de pregunta: 2011-01-01
 questions[78]= "79)  &iquest;Qu&eacute; pantallas t&aacute;ctiles pueden ser manejadas con guantes de lana?";
 choices[78]= new Array();
 choices[78][0] = "las resistivas";
 choices[78][1] = "las capacitivas";
 choices[78][2] = "ambas";
 choices[78][3] = "ninguna";
 answers[78] = choices[78][0];
 units[78] = "47";
 comments[78] = "Id Pregunta: 8977. ";


//  Id pregunta: 9063 AÃ±o de creación de pregunta: 2011-01-01
 questions[79]= "80)  De acuedo a la ley 15/1999, la transmisi&oacute;n de los datos a un encargado del tratamiento sin dar cumplimiento a los deberes formales establecidos en el art&iacute;culo 12 de la ley (Acceso a los datos por cuenta de terceros) se considerar&aacute;:";
 choices[79]= new Array();
 choices[79][0] = "Infracci&oacute;n leve";
 choices[79][1] = "Infracci&oacute;n grave";
 choices[79][2] = "Infracci&oacute;n muy grave";
 choices[79][3] = "No se considerar&aacute; infracci&oacute;n";
 answers[79] = choices[79][0];
 units[79] = "29";
 comments[79] = "Id Pregunta: 9063. NULL";


//  Id pregunta: 9212 AÃ±o de creación de pregunta: 2013-01-01
 questions[80]= "81)  &iquest;C&oacute;mo se identifican los equipos pertenecientes a una red FC?";
 choices[80]= new Array();
 choices[80][0] = "Mediante la MAC";
 choices[80][1] = "Mediante su WWN";
 choices[80][2] = "Mediante una url";
 choices[80][3] = "Mediante un identificador que el administrador configure en el momento de la instalaci&oacute;n.";
 answers[80] = choices[80][1];
 units[80] = "48";
 comments[80] = "Id Pregunta: 9212. ";


//  Id pregunta: 9396 AÃ±o de creación de pregunta: 2013-01-01
 questions[81]= "82)  Las redes ATM emplean celdas de:";
 choices[81]= new Array();
 choices[81][0] = "Tama&ntilde;o variable: entre 5 e 10 bytes de cabecera, m&aacute;s 46 bytes de informaci&oacute;n";
 choices[81][1] = "Tama&ntilde;o fijo: 5 bytes de cabecera, m&aacute;s 48 bytes de informaci&oacute;n";
 choices[81][2] = "Tama&ntilde;o fijo: 8 bytes de cabecera, m&aacute;s 56 bytes de informaci&oacute;n.";
 choices[81][3] = "Tama&ntilde;o variable: 5 bytes de cabecera y entre 48 y 56 bytes de informaci&oacute;n.";
 answers[81] = choices[81][1];
 units[81] = "109";
 comments[81] = "Id Pregunta: 9396. Examen Xunta de Galicia A1 2011";


//  Id pregunta: 9461 AÃ±o de creación de pregunta: 2013-01-01
 questions[82]= "83)  &iquest;Cu&aacute;l de los siguientes diagramas no se usan en UML 2.0?";
 choices[82]= new Array();
 choices[82][0] = "Diagrama de secuencia.";
 choices[82][1] = "Diagrama de comunicaci&oacute;n.";
 choices[82][2] = "Diagrama de transici&oacute;n de estados.";
 choices[82][3] = "Diagrama de elementos.";
 answers[82] = choices[82][3];
 units[82] = "84";
 comments[82] = "Id Pregunta: 9461. NULL";


//  Id pregunta: 9473 AÃ±o de creación de pregunta: 2013-01-01
 questions[83]= "84)  &iquest;Cu&aacute;l de los siguientes no es un factor de riesgo a la hora de analizar la rentabilidad de un proyecto?";
 choices[83]= new Array();
 choices[83][0] = "Factores econ&oacute;micos";
 choices[83][1] = "Factores pol&iacute;ticos";
 choices[83][2] = "Factores sociales";
 choices[83][3] = "Factores organizativos";
 answers[83] = choices[83][2];
 units[83] = "38";
 comments[83] = "Id Pregunta: 9473. ";


//  Id pregunta: 9520 AÃ±o de creación de pregunta: 2013-01-01
 questions[84]= "85)  Indique la afirmaci&oacute;n falsa:";
 choices[84]= new Array();
 choices[84][0] = "JAXP es una API de Java que permite el procesado de documentos XML";
 choices[84][1] = "JAXR es una API de Java que facilita el acceso a UDDI o ebXML";
 choices[84][2] = "SAAJ es una API de Java que permite generar y recoger mensajes SOAP";
 choices[84][3] = "JAX-RPC es una API Java que permite invocar objetos ORBA";
 answers[84] = choices[84][3];
 units[84] = "116";
 comments[84] = "Id Pregunta: 9520. NULL";


//  Id pregunta: 9845 AÃ±o de creación de pregunta: 2014-01-01
 questions[85]= "86)  El algoritmo RSA es un algoritmo:";
 choices[85]= new Array();
 choices[85][0] = "De triple clave.";
 choices[85][1] = "Asim&eacute;trico.";
 choices[85][2] = "De clave privada.";
 choices[85][3] = "Sim&eacute;trico.";
 answers[85] = choices[85][1];
 units[85] = "111";
 comments[85] = "Id Pregunta: 9845. Examen T&eacute;cnico de Gesti&oacute;n de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n del Servicio de Salud de Extremadura 2014";


//  Id pregunta: 9945 AÃ±o de creación de pregunta: 2014-01-01
 questions[86]= "87)  El modelo de desarrollo RAD (Rapid Application Development) fue descrito inicialmente por:";
 choices[86]= new Array();
 choices[86][0] = "Codd ";
 choices[86][1] = "Boehm ";
 choices[86][2] = "Chen ";
 choices[86][3] = "James Marti";
 answers[86] = choices[86][3];
 units[86] = "76";
 comments[86] = "Id Pregunta: 9945. TIC A2, Promoci&oacute;n Interna, 2013";


//  Id pregunta: 10002 AÃ±o de creación de pregunta: 2014-01-01
 questions[87]= "88)  En el sistema operativo UNIX la expresi&oacute;n &ldquo;daemon&rdquo; se refiere a un proceso delsistema que";
 choices[87]= new Array();
 choices[87][0] = "siempre se ejecuta en segundo plano (background).";
 choices[87][1] = "siempre es de corta duraci&oacute;n.";
 choices[87][2] = "est&aacute; siempre ejecut&aacute;ndose.";
 choices[87][3] = "nunca se ejecuta bajo control de los subsistemas de temporarizaci&oacute;n.";
 answers[87] = choices[87][0];
 units[87] = "53";
 comments[87] = "Id Pregunta: 10002. ";


//  Id pregunta: 10129 AÃ±o de creación de pregunta: 2014-01-01
 questions[88]= "89)  Las siglas CMOT significan:";
 choices[88]= new Array();
 choices[88][0] = "Complex Management Over TCP";
 choices[88][1] = "Common Management Over TCP/IP";
 choices[88][2] = "Complex Management Over TCP/IP";
 choices[88][3] = "Complex Management Of Telecomucation";
 answers[88] = choices[88][1];
 units[88] = "104";
 comments[88] = "Id Pregunta: 10129. ";


//  Id pregunta: 10261 AÃ±o de creación de pregunta: 2014-01-01
 questions[89]= "90)  En cuanto al registro de ficheros en el Registro General de Protecci&oacute;n de Datos";
 choices[89]= new Array();
 choices[89][0] = "S&oacute;lo es obligatorio en el caso de ficheros que contengan datos especialmente protegidos para ficheros de titularidad privada y en todo caso para los de titularidad p&uacute;blica";
 choices[89][1] = "S&oacute;lo es obligatorio en el caso de ficheros que contengan datos especialmente protegidos para ficheros de titularidad p&uacute;blica y en todo caso para los de titularidad privada";
 choices[89][2] = "Es obligatorio para todo fichero que contenga datos de car&aacute;cter personal";
 choices[89][3] = "No es obligatorio en ning&uacute;n caso";
 answers[89] = choices[89][2];
 units[89] = "29";
 comments[89] = "Id Pregunta: 10261. Art&iacute;culo 55.1 y 55.2 del RD 1720/2007";


//  Id pregunta: 10352 AÃ±o de creación de pregunta: 2014-01-01
 questions[90]= "91)  &iquest;Cu&aacute;l de las siguientes no es una herramienta de evaluaci&oacute;n autom&aacute;tica de la accesibilidad de p&aacute;ginas web?";
 choices[90]= new Array();
 choices[90][0] = "ZEUS";
 choices[90][1] = "HERA";
 choices[90][2] = "BOBBY";
 choices[90][3] = "TAW";
 answers[90] = choices[90][0];
 units[90] = "39";
 comments[90] = "Id Pregunta: 10352. Otras herramientas pueden ser eXaminator, Wave o EvalAccess";


//  Id pregunta: 10431 AÃ±o de creación de pregunta: 2014-01-01
 questions[91]= "92)  En la arquitectura SOA (Arquitectura Orientada a Servicios)";
 choices[91]= new Array();
 choices[91][0] = "se hace incompatible el uso de servicios web.";
 choices[91][1] = "los servicios encapsulan sus funcionalidades. ";
 choices[91][2] = "los servicios mantienen un fuerte acoplamiento.";
 choices[91][3] = "os servicios dependen fuertemente de la plataforma subyacente.";
 answers[91] = choices[91][1];
 units[91] = "51";
 comments[91] = "Id Pregunta: 10431. Examen TIC A1 2013";


//  Id pregunta: 10519 AÃ±o de creación de pregunta: 2014-01-01
 questions[92]= "93)  Cu&aacute;l es el periodo m&aacute;ximo de inhabilitaci&oacute;n al que pueden dar lugar las infracciones muy graves:";
 choices[92]= new Array();
 choices[92][0] = "10 a&ntilde;os";
 choices[92][1] = "5 a&ntilde;os";
 choices[92][2] = "3 a&ntilde;os";
 choices[92][3] = "1 a&ntilde;o";
 answers[92] = choices[92][1];
 units[92] = "110";
 comments[92] = "Id Pregunta: 10519. ";


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


//  Id pregunta: 10829 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  Seg&uacute;n M&eacute;trica v3, los flujos de datos de tipo di&aacute;logo, que comunican procesos con almacenes en un DFD (diagrama de flujo de datos) son aquellos que:";
 choices[94]= new Array();
 choices[94][0] = "Representan la utilizaci&oacute;n de los valores de uno o m&aacute;s campos de un almac&eacute;n o la comprobaci&oacute;n de que los valores de los campos seleccionados cumplen unos criterios determinados.";
 choices[94][1] = "Representan una consulta y una actualizaci&oacute;n entre el proceso y el almac&eacute;n.";
 choices[94][2] = "Representan la alteraci&oacute;n de los datos de un almac&eacute;n como consecuencia de la creaci&oacute;n de un nuevo elemento, por eliminaci&oacute;n o modificaci&oacute;n de otros ya existentes.";
 choices[94][3] = "Representan un trigger programado entre el proceso y el almac&eacute;n.";
 answers[94] = choices[94][1];
 units[94] = "86, 81";
 comments[94] = "Id Pregunta: 10829. Examen GSI 2014";


//  Id pregunta: 10835 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Se&ntilde;ale la afirmaci&oacute;n INCORRECTA en relaci&oacute;n a los &aacute;rboles de b&uacute;squeda AVL:";
 choices[95]= new Array();
 choices[95][0] = "Son un tipo de &aacute;rbol de b&uacute;squeda binario.";
 choices[95][1] = "Para cada uno de los nodos, la diferencia de altura entre sus dos sub&aacute;rboles no puede ser superior a uno.";
 choices[95][2] = "Los &aacute;rboles AVL menos profundos son los &aacute;rboles de Fibonacci.";
 choices[95][3] = "Un &aacute;rbol de Fibonacci es el &aacute;rbol AVL m&aacute;s desbalanceado permitido.";
 answers[95] = choices[95][2];
 units[95] = "0";
 comments[95] = "Id Pregunta: 10835. Examen GSI 2014";


//  Id pregunta: 10868 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  En un sistema operativo (S.O) con memoria virtual, cuando un proceso en ejecuci&oacute;n genera un fallo de p&aacute;gina:";
 choices[96]= new Array();
 choices[96][0] = "Se cierran todos los procesos en ejecuci&oacute;n ya que es un error grave del sistema operativo.";
 choices[96][1] = "El S.O busca la p&aacute;gina en memoria secundaria y la carga en memoria principal.";
 choices[96][2] = "El S.O interrumpe la ejecuci&oacute;n del proceso y lo pone en la cola de errores.";
 choices[96][3] = "En un sistema con memoria virtual nunca hay fallos de p&aacute;gina.";
 answers[96] = choices[96][1];
 units[96] = "52";
 comments[96] = "Id Pregunta: 10868. Examen GSI 2014";


//  Id pregunta: 11128 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  Los riesgos del Cloud Computing, de acuerdo con el &uacute;ltimo informe del ENISA pueden clasificarse como:";
 choices[97]= new Array();
 choices[97][0] = "Riesgos pol&iacute;ticos y organizativos, riesgos t&eacute;cnicos y riesgos legales";
 choices[97][1] = "Riesgos propios, riesgos compartidos y riesgos derivados";
 choices[97][2] = "Riesgos de usuarios, de la plataforma y del servicio";
 choices[97][3] = "Ninguna de las anteriores";
 answers[97] = choices[97][0];
 units[97] = "47";
 comments[97] = "Id Pregunta: 11128. ";


//  Id pregunta: 11198 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Qu&eacute; tasa de abandono escolar marca la Estrategia Europa 2020 para la Uni&oacute;n Europea?";
 choices[98]= new Array();
 choices[98][0] = "0.05";
 choices[98][1] = "0.01";
 choices[98][2] = "0.1";
 choices[98][3] = "0.2";
 answers[98] = choices[98][2];
 units[98] = "30";
 comments[98] = "Id Pregunta: 11198. ";


//  Id pregunta: 11683 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Cuando el servidor web envia una respuesta, seg&uacute;n el modelo OSI los datos primero se encapsulan en un";
 choices[99]= new Array();
 choices[99][0] = "Paquete";
 choices[99][1] = "Segmento";
 choices[99][2] = "Trama";
 choices[99][3] = "Frame";
 answers[99] = choices[99][1];
 units[99] = "100";
 comments[99] = "Id Pregunta: 11683. NULL";


