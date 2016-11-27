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

//  Id pregunta: 27 AÃ±o de creación de pregunta: 2002-01-01
 questions[0]= "1)  &iquest;Cu&aacute;l de entre las siguientes es una condici&oacute;n indispensable para la creaci&oacute;n de un fichero de las Administraciones P&uacute;blicas?:";
 choices[0]= new Array();
 choices[0][0] = "La existencia de un C&oacute;digo Tipo regulando su uso";
 choices[0][1] = "La aprobaci&oacute;n de dicha creaci&oacute;n mediante Acuerdo del Consejo de Ministros";
 choices[0][2] = "La publicaci&oacute;n de una disposici&oacute;n general en el &quot;Bolet&iacute;n Oficial del Estado&quot; o diario oficial correspondiente";
 choices[0][3] = "Una resoluci&oacute;n del Director de la Agencia de Protecci&oacute;n de Datos autoriz&aacute;ndola";
 answers[0] = choices[0][2];
 units[0] = "29";
 comments[0] = "Id Pregunta: 27. ";


//  Id pregunta: 52 AÃ±o de creación de pregunta: 2002-01-01
 questions[1]= "2)  &iquest;Cu&aacute;les son los instrumentos b&aacute;sicos de un sistema de ayuda a la decisi&oacute;n orientado a datos?:";
 choices[1]= new Array();
 choices[1][0] = "Consultas predefinidas, consultas ad hoc, informes de excepci&oacute;n y presentaciones gr&aacute;ficas";
 choices[1][1] = "Informes resumen, consultas predefinidas, informes de excepci&oacute;n y presentaciones gr&aacute;ficas";
 choices[1][2] = "Informes resumen, consultas ad hoc, informes de excepci&oacute;n y Consultas predefinidas";
 choices[1][3] = "Informes resumen, consultas ad hoc, informes de excepci&oacute;n y presentaciones gr&aacute;ficas";
 answers[1] = choices[1][3];
 units[1] = "21";
 comments[1] = "Id Pregunta: 52. NULL";


//  Id pregunta: 63 AÃ±o de creación de pregunta: 2002-01-01
 questions[2]= "3)  &iquest;Qu&eacute; es la WAI?";
 choices[2]= new Array();
 choices[2][0] = "una asociaci&oacute;n mundial de defensa de los internautas";
 choices[2][1] = "una iniciativa para la automatizaci&oacute;n de las tareas de organizaci&oacute;n web";
 choices[2][2] = "una iniciativa para facilitar el acceso a la web de los discapacitados";
 choices[2][3] = "una iniciativa para el desarrollo de aplicaciones inal&aacute;mbricas";
 answers[2] = choices[2][2];
 units[2] = "39";
 comments[2] = "Id Pregunta: 63. ";


//  Id pregunta: 68 AÃ±o de creación de pregunta: 2002-01-01
 questions[3]= "4)  &iquest;Qu&eacute; m&eacute;todo de ordenaci&oacute;n de alternativas atiende &uacute;nicamente al criterio de mayor peso y mayor puntuaci&oacute;n, resolviendo los empates con el siguiente de mayor peso?:";
 choices[3]= new Array();
 choices[3][0] = "Concordancia";
 choices[3][1] = "M&eacute;todo lexicogr&aacute;fico";
 choices[3][2] = "Ponderaci&oacute;n lineal";
 choices[3][3] = "Ninguno de los anteriores";
 answers[3] = choices[3][1];
 units[3] = "34";
 comments[3] = "Id Pregunta: 68. NULL";


//  Id pregunta: 98 AÃ±o de creación de pregunta: 2002-01-01
 questions[4]= "5)  Al hablar de &quot;Metodolog&iacute;a de planificaci&oacute;n de capacidad&quot;, indicar cu&aacute;l de las siguientes afirmaciones es correcta:";
 choices[4]= new Array();
 choices[4][0] = "La metodolog&iacute;a Bench-Mark se usa para comparar distintos sistemas inform&aacute;ticos frente a una carga caracter&iacute;stica de una instalaci&oacute;n concreta que permite realizar mediciones en el ambiente real";
 choices[4][1] = "La metodolog&iacute;a de proyecci&oacute;n lineal se basa en leyes como las de Parkinson y Murphy";
 choices[4][2] = "La metodolog&iacute;a de proyecci&oacute;n lineal se puede aplicar para explicar fen&oacute;menos de comportamiento no lineal";
 choices[4][3] = "La metodolog&iacute;a Bench-Mark se basa en la utilizaci&oacute;n de programas para simular la realidad ";
 answers[4] = choices[4][0];
 units[4] = "25";
 comments[4] = "Id Pregunta: 98. ";


//  Id pregunta: 145 AÃ±o de creación de pregunta: 2002-01-01
 questions[5]= "6)  El estudio de la informaci&oacute;n, su calidad, flujo y seguridad es caracter&iacute;stico de:";
 choices[5]= new Array();
 choices[5][0] = "La auditor&iacute;a inform&aacute;tica";
 choices[5][1] = "La planificaci&oacute;n estrat&eacute;gica";
 choices[5][2] = "La planificaci&oacute;n de capacidad del sistema";
 choices[5][3] = "Las t&eacute;cnicas de control de proyectos";
 answers[5] = choices[5][0];
 units[5] = "31,32,33";
 comments[5] = "Id Pregunta: 145. ";


//  Id pregunta: 162 AÃ±o de creación de pregunta: 2002-01-01
 questions[6]= "7)  El representante de Estados Unidos en la ISO es:";
 choices[6]= new Array();
 choices[6][0] = "AENOR";
 choices[6][1] = "BSI";
 choices[6][2] = "IEEE";
 choices[6][3] = "ANSI";
 answers[6] = choices[6][3];
 units[6] = "42";
 comments[6] = "Id Pregunta: 162. ";


//  Id pregunta: 187 AÃ±o de creación de pregunta: 2004-01-01
 questions[7]= "8)  Cu&aacute;l de las siguientes no es una funci&oacute;n del auditor de Sistemas de Informaci&oacute;n";
 choices[7]= new Array();
 choices[7][0] = "An&aacute;lisis de requisitos y especificaci&oacute;n funcional";
 choices[7][1] = "Evaluaci&oacute;n de los planes de implantaci&oacute;n de sistemas y mejoras de los existentes.";
 choices[7][2] = "Evaluaci&oacute;n de riesgos";
 choices[7][3] = "Evaluaci&oacute;n de controles en los sistemas de informaci&oacute;n";
 answers[7] = choices[7][0];
 units[7] = "31,32,33";
 comments[7] = "Id Pregunta: 187. Similar a examen TIC SS A 2003";


//  Id pregunta: 193 AÃ±o de creación de pregunta: 2004-01-01
 questions[8]= "9)  &iquest;Cu&aacute;l de las siguientes tareas no es posible realizar utilizando las herramientas PERT o CPM?";
 choices[8]= new Array();
 choices[8][0] = "Establecer las dimensiones de tiempo m&aacute;s probables para las tareas individuales aplicando modelos estad&iacute;sticos.";
 choices[8][1] = "Determinar el camino cr&iacute;tico, la cadena de tareas que determina la duraci&oacute;n del proyecto.";
 choices[8][2] = "Dimensionar las necesidades de personal en cada fase del proyecto.";
 choices[8][3] = "Calcular las limitaciones de tiempo que definen una ventana de tiempo de una tarea determinada (y las holguras).";
 answers[8] = choices[8][2];
 units[8] = "27";
 comments[8] = "Id Pregunta: 193. Examen TIC MAP B 2004";


//  Id pregunta: 246 AÃ±o de creación de pregunta: 2002-01-01
 questions[9]= "10)  En una organizaci&oacute;n de tipo dinosaurio:";
 choices[9]= new Array();
 choices[9][0] = "El HW est&aacute; distribuido, y no se descentraliza la capacidad de realizar SW ni las decisiones";
 choices[9][1] = "El HW est&aacute; distribuido y el desarrollo tambi&eacute;n, pero no las decisiones";
 choices[9][2] = "El HW, el desarrollo y las decisiones no se descentralizan";
 choices[9][3] = "El HW no est&aacute; distribuido y se descentraliza la capacidad de realizar SW y las decisiones";
 answers[9] = choices[9][2];
 units[9] = "22";
 comments[9] = "Id Pregunta: 246. ";


//  Id pregunta: 251 AÃ±o de creación de pregunta: 2002-01-01
 questions[10]= "11)  Entre las funciones de un auditor inform&aacute;tico est&aacute;n:";
 choices[10]= new Array();
 choices[10][0] = "Revisi&oacute;n de sistemas bajo desarrollo, instalaciones inform&aacute;ticas y aplicaciones";
 choices[10][1] = "Soporte a auditores no inform&aacute;ticos";
 choices[10][2] = "La a) y la b) son correctas";
 choices[10][3] = "La a) y la b) son incorrectas";
 answers[10] = choices[10][2];
 units[10] = "31,32,33";
 comments[10] = "Id Pregunta: 251. ";


//  Id pregunta: 314 AÃ±o de creación de pregunta: 2002-01-01
 questions[11]= "12)  La Ley Org&aacute;nica 15/1999, de Protecci&oacute;n de Datos de Car&aacute;cter Personal (LOPD) tiene por objeto:";
 choices[11]= new Array();
 choices[11][0] = "Garantizar y proteger, en lo que concierne al tratamiento de los datos personales, las libertades p&uacute;blicas y los derechos fundamentales de las personas f&iacute;sicas";
 choices[11][1] = "Proteger el honor y la intimidad personal y familiar";
 choices[11][2] = "Proteger todas las libertades p&uacute;blicas y derechos fundamentales reconocidos en la Constituci&oacute;n espa&ntilde;ola";
 choices[11][3] = "Hacer frente a las amenazas o agresiones contra los derechos y libertades  p&uacute;blicas, provenientes del tratamiento automatizado de datos personales";
 answers[11] = choices[11][0];
 units[11] = "29";
 comments[11] = "Id Pregunta: 314. ";


//  Id pregunta: 317 AÃ±o de creación de pregunta: 2009-01-01
 questions[12]= "13)  La LOPD no es de aplicaci&oacute;n a:";
 choices[12]= new Array();
 choices[12][0] = "Los ficheros creados por las fuerzas y cuerpos de seguridad recogidos para fines administrativos";
 choices[12][1] = "Los datos recogidos o elaborados por las Administraciones P&uacute;blicas para el desempe&ntilde;o de sus atribuciones legalmente establecidas";
 choices[12][2] = "Los ficheros automatizados con datos personales de car&aacute;cter tributario";
 choices[12][3] = "Los ficheros sometidos a la normativa sobre protecci&oacute;n de materias clasificadas";
 answers[12] = choices[12][3];
 units[12] = "29";
 comments[12] = "Id Pregunta: 317. ";


//  Id pregunta: 324 AÃ±o de creación de pregunta: 2002-01-01
 questions[13]= "14)  La organizaci&oacute;n t&iacute;pica de un entorno de producci&oacute;n es la:";
 choices[13]= new Array();
 choices[13][0] = "Organizaci&oacute;n proyecto-funcional";
 choices[13][1] = "Organizaci&oacute;n funcional";
 choices[13][2] = "Organizaci&oacute;n proyecto-staff";
 choices[13][3] = "Organizaci&oacute;n por aplicaciones";
 answers[13] = choices[13][1];
 units[13] = "26";
 comments[13] = "Id Pregunta: 324. organizaci&oacute;n estructural";


//  Id pregunta: 331 AÃ±o de creación de pregunta: 2004-01-01
 questions[14]= "15)  De acuerdo al RDL 1/1996, la protecci&oacute;n de los programas de ordenador:";
 choices[14]= new Array();
 choices[14][0] = "Cuando el autor sea una persona natural, para el caso m&aacute;s general, los derechos de explotaci&oacute;n durar&aacute;n toda su vida, y 70 a&ntilde;os despu&eacute;s de su muerte o declaraci&oacute;n de fallecimiento.";
 choices[14][1] = "Cuando el autor sea una persona jur&iacute;dica, la duraci&oacute;n de los derechos de explotaci&oacute;n ser&aacute; de 70 a&ntilde;os, computados desde el d&iacute;a 1 de enero del a&ntilde;o siguiente al de la divulgaci&oacute;n l&iacute;cita del programa o al de su creaci&oacute;n si no se hubiera divulgado.";
 choices[14][2] = "a y b son correctas";
 choices[14][3] = "a y b son incorrectas";
 answers[14] = choices[14][2];
 units[14] = "37";
 comments[14] = "Id Pregunta: 331. ";


//  Id pregunta: 333 AÃ±o de creación de pregunta: 2004-01-01
 questions[15]= "16)  Las organizaciones basadas en la informaci&oacute;n. Indique la respuesta FALSA:";
 choices[15]= new Array();
 choices[15][0] = "En los a&ntilde;os 20 las organizaciones se basaban en el mando-control. A partir de los a&ntilde;os 70 la informaci&oacute;n comenz&oacute; a ser un elemento estructural importante y se dio paso a las organizaciones basadas en la informaci&oacute;n.";
 choices[15][1] = "Seg&uacute;n Peter Drucker, uno de los gur&uacute;s de la gerencia de empresas, una de las caracter&iacute;sticas propias de las organizaciones basadas en la informaci&oacute;n es la reducci&oacute;n hasta un tercio del n&uacute;mero de ejecutivos.";
 choices[15][2] = "Una organizaci&oacute;n basada en la informaci&oacute;n obligatoriamente debe emplear nuevas tecnolog&iacute;as, ya que si no es imposible manejar el gran volumen de informaci&oacute;n generada e intercambiada.";
 choices[15][3] = "En una organizaci&oacute;n basada en el conocimiento los distintos especialistas dirigen y organizan su trabajo mediante la interacci&oacute;n con sus colegas, con un funcionamiento similar al de una orquesta.";
 answers[15] = choices[15][2];
 units[15] = "22";
 comments[15] = "Id Pregunta: 333. ";


//  Id pregunta: 351 AÃ±o de creación de pregunta: 2002-01-01
 questions[16]= "17)  La utilizaci&oacute;n de sistemas abiertos permite una serie de ventajas. Se&ntilde;ale cual de las siguientes no es una de ellas:";
 choices[16]= new Array();
 choices[16][0] = "Mejorar, en general, precio/rendimiento";
 choices[16][1] = "Simplificar el mantenimiento debido al reducido n&uacute;mero de posibles proveedores";
 choices[16][2] = "Garantizar la libertad de elecci&oacute;n";
 choices[16][3] = "Proteger la inversi&oacute;n realizada en equipo f&iacute;sico";
 answers[16] = choices[16][1];
 units[16] = "40";
 comments[16] = "Id Pregunta: 351. ";


//  Id pregunta: 363 AÃ±o de creación de pregunta: 2002-01-01
 questions[17]= "18)  Los beneficios en las inversiones en tecnolog&iacute;as de la informaci&oacute;n se pueden dividir en:";
 choices[17]= new Array();
 choices[17][0] = "Mejoras de productividad y mejoras financieras";
 choices[17][1] = "Mejoras de gesti&oacute;n, mejoras de organizaci&oacute;n y mejoras de competitividad";
 choices[17][2] = "Todas las anteriores son correctas";
 choices[17][3] = "Ninguna de las anteriores es correcta";
 answers[17] = choices[17][2];
 units[17] = "38";
 comments[17] = "Id Pregunta: 363. ";


//  Id pregunta: 375 AÃ±o de creación de pregunta: 2002-01-01
 questions[18]= "19)  Los par&aacute;metros de seguridad de la informaci&oacute;n pueden resumirse en:";
 choices[18]= new Array();
 choices[18][0] = "Disponibilidad, integridad, confidencialidad";
 choices[18][1] = "Integridad, autenticaci&oacute;n, confidencialidad";
 choices[18][2] = "Disponibilidad, confidencialidad, autenticaci&oacute;n";
 choices[18][3] = "Autenticaci&oacute;n, disponibilidad, integridad";
 answers[18] = choices[18][0];
 units[18] = "31,32,33";
 comments[18] = "Id Pregunta: 375. ";


//  Id pregunta: 448 AÃ±o de creación de pregunta: 2002-01-01
 questions[19]= "20)  Se&ntilde;alar la afirmaci&oacute;n incorrecta respecto al control de proyectos:";
 choices[19]= new Array();
 choices[19][0] = "El diagrama de PERT permite evaluar el retraso de un proyecto";
 choices[19][1] = "Un retraso en la fecha de finalizaci&oacute;n de una etapa provoca un retraso de la fecha final del proyecto";
 choices[19][2] = "La fecha de finalizaci&oacute;n del proyecto se ve afectada por las fechas de finalizaci&oacute;n de las etapas que constituyen el camino cr&iacute;tico";
 choices[19][3] = "La duraci&oacute;n total del proyecto viene determinada por el camino cr&iacute;tico";
 answers[19] = choices[19][1];
 units[19] = "28";
 comments[19] = "Id Pregunta: 448. ";


//  Id pregunta: 450 AÃ±o de creación de pregunta: 2002-01-01
 questions[20]= "21)  Se&ntilde;alar la opci&oacute;n falsa. Seg&uacute;n la Ley de Protecci&oacute;n de Datos no ser&aacute; necesario el consentimiento del afectado para la cesi&oacute;n de sus datos personales cuando:";
 choices[20]= new Array();
 choices[20][0] = "Hayan sido obtenidos de fuentes accesibles al p&uacute;blico";
 choices[20][1] = "La cesi&oacute;n es a los tribunales en el ejercicio de sus potestades";
 choices[20][2] = "No son utilizados para los fines para los que fueron recabados";
 choices[20][3] = "La cesi&oacute;n es para la realizaci&oacute;n de estudios epidemiol&oacute;gicos";
 answers[20] = choices[20][2];
 units[20] = "29";
 comments[20] = "Id Pregunta: 450. ";


//  Id pregunta: 508 AÃ±o de creación de pregunta: 2003-01-01
 questions[21]= "22)  La Ley Org&aacute;nica 15/1999 establece, en el apartado 2 del art&iacute;culo 22, las condiciones bajo las que las Fuerzas y Cuerpos de Seguridad pueden tratar datos personales con fines policiales sin estar sujetos a la ley:";
 choices[21]= new Array();
 choices[21][0] = "Cuando cuenten con la preceptiva autorizaci&oacute;n del Ministerio del Interior";
 choices[21][1] = "No existen excepciones. Se requiere obligatoriamente el consentimiento expreso del afectado";
 choices[21][2] = "Cuando resulte necesario para la prevenci&oacute;n de un peligro real para la seguridad p&uacute;blica o para la represi&oacute;n de infracciones penales";
 choices[21][3] = "Cuando lo autorice un juez";
 answers[21] = choices[21][2];
 units[21] = "29";
 comments[21] = "Id Pregunta: 508. ";


//  Id pregunta: 517 AÃ±o de creación de pregunta: 2003-01-01
 questions[22]= "23)  SSD-AAPP es una herramienta para";
 choices[22]= new Array();
 choices[22][0] = "Mejorar el desarrollo de los sistemas de informaci&oacute;n";
 choices[22][1] = "Reducir el gasto de adquisici&oacute;n de equipos inform&aacute;ticos";
 choices[22][2] = "Permitir la implantaci&oacute;n de proyectos de Tecnolog&iacute;as de la Informaci&oacute;n y la Comunicaci&oacute;n en la Administraci&oacute;n";
 choices[22][3] = "Permitir al comprador evaluar las ofertas para la adquisici&oacute;n de bienes y servicios inform&aacute;ticos";
 answers[22] = choices[22][3];
 units[22] = "34";
 comments[22] = "Id Pregunta: 517. Modificado enunciado (antes SSD-CIABSI) por JCED Preparatic XVII";


//  Id pregunta: 530 AÃ±o de creación de pregunta: 2004-01-01
 questions[23]= "24)  Un auditor inform&aacute;tico deber&aacute; verificar:";
 choices[23]= new Array();
 choices[23][0] = "Cumplimiento de objetivos de la organizaci&oacute;n";
 choices[23][1] = "Adecuaci&oacute;n de procedimientos de control";
 choices[23][2] = "Uso de metodolog&iacute;as seg&uacute;n est&aacute;ndares de la organizaci&oacute;n";
 choices[23][3] = "Todas";
 answers[23] = choices[23][3];
 units[23] = "31, 32, 33";
 comments[23] = "Id Pregunta: 530. Auditor&iacute;a Inform&aacute;tica";


//  Id pregunta: 544 AÃ±o de creación de pregunta: 2004-01-01
 questions[24]= "25)  &iquest;Existe el concepto de 'copia privada' en la actual legislaci&oacute;n de propiedad intelectual?";
 choices[24]= new Array();
 choices[24][0] = "Si, es un derecho por el cual no es necesaria la autorizaci&oacute;n del creador de una obra ya divulgada para proceder a la reproducci&oacute;n de la misma para uso privado del copista, siempre que no vaya a ser objeto de utilizaci&oacute;n colectiva ni lucrativa";
 choices[24][1] = "Si, pero no como copia leg&iacute;tima";
 choices[24][2] = "Si, es un derecho por el cual, previa autorizaci&oacute;n del creador de una obra ya divulgada, se procede a la reproducci&oacute;n de la misma para uso privado del copista, siempre que no vaya a ser objeto de utilizaci&oacute;n colectiva ni lucrativa";
 choices[24][3] = "No";
 answers[24] = choices[24][0];
 units[24] = "36,37";
 comments[24] = "Id Pregunta: 544. LPI de 1996";


//  Id pregunta: 562 AÃ±o de creación de pregunta: 2006-01-01
 questions[25]= "26)  Seg&uacute;n AlvinToffler las organizaciones tradicionales tienen dos elementos caracter&iacute;sticos";
 choices[25]= new Array();
 choices[25][0] = "jararqu&iacute;as y las relaciones entre las jerarqu&iacute;as";
 choices[25][1] = "los especialistas y los gerentes";
 choices[25][2] = "Cub&iacute;culos y canales";
 choices[25][3] = "controles y procedimientos";
 answers[25] = choices[25][2];
 units[25] = "22";
 comments[25] = "Id Pregunta: 562. ";


//  Id pregunta: 573 AÃ±o de creación de pregunta: 2006-01-01
 questions[26]= "27)  Seg&uacute;n la Ley 30/84 de la Reforma de la Funci&oacute;n P&uacute;blica, los puestos directivos de las subdirecciones TIC podr&aacute;n solo podr&aacute;n ser desempe&ntilde;ados por funcionarios pertenecientes";
 choices[26]= new Array();
 choices[26][0] = "al Cuerpo Superior de Sistemas y Tecnolog&iacute;as de la Informaci&oacute;n y las comunicaciones ";
 choices[26][1] = "al Cuerpo Superior de Tecnicos de la Administraci&oacute;n del Estado";
 choices[26][2] = "Es un cargo de libre disposici&oacute;n al que puede acceder cualquier funcionario";
 choices[26][3] = "Ser&aacute; un funcionario de Grupo A";
 answers[26] = choices[26][3];
 units[26] = "24";
 comments[26] = "Id Pregunta: 573. ";


//  Id pregunta: 594 AÃ±o de creación de pregunta: 2006-01-01
 questions[27]= "28)  Entre las excepciones a la cesi&oacute;n de datos sin necesidad de recabar el consentimiento del interesado no se encuentra de acuerdo al articulo 11 de la LOPD: ";
 choices[27]= new Array();
 choices[27][0] = "Las comunicaciones al Defensor del Pueblo";
 choices[27][1] = "Las comunicaciones al Ministerio Fiscal.";
 choices[27][2] = "Las comunicaciones al Consejo de Estado";
 choices[27][3] = "Las comunicaciones al Tribunal de Cuentas, en las materias que tenga atribuidas";
 answers[27] = choices[27][2];
 units[27] = "29";
 comments[27] = "Id Pregunta: 594. ";


//  Id pregunta: 599 AÃ±o de creación de pregunta: 2006-01-01
 questions[28]= "29)  Seg&uacute;n lo establecido en la ley Org&aacute;nica 15/1999, de 13 de diciembre, de protecci&oacute;n de datos de car&aacute;cter personal (LOPD). &iquest;Cual de los siguientes son principios de protecci&oacute;n de datos?";
 choices[28]= new Array();
 choices[28][0] = "Calidad de datos y derecho de Informaci&oacute;n en la recogida ";
 choices[28][1] = "Acceso, rectificaci&oacute;n y cancelaci&oacute;n ";
 choices[28][2] = "Acceso y calidad de datos";
 choices[28][3] = "Notificaci&oacute;n de ficheros";
 answers[28] = choices[28][0];
 units[28] = "29";
 comments[28] = "Id Pregunta: 599. ";


//  Id pregunta: 622 AÃ±o de creación de pregunta: 2006-01-01
 questions[29]= "30)  En teor&iacute;a de la decisi&oacute;n multicriterio discreta (DMD), el m&eacute;todo QUALIFLEX se basa en:";
 choices[29]= new Array();
 choices[29][0] = "evaluaciones cardinales y pesos cardinales";
 choices[29][1] = "evaluaciones ordinales y pesos cardinales";
 choices[29][2] = "evaluaciones ordinales y pesos ordinales";
 choices[29][3] = "evaluaciones cardinales y pesos ordinales";
 answers[29] = choices[29][1];
 units[29] = "34";
 comments[29] = "Id Pregunta: 622. ";


//  Id pregunta: 630 AÃ±o de creación de pregunta: 2006-01-01
 questions[30]= "31)  Cu&aacute;l de los siguientes derechos de explotaci&oacute;n no precisan la realizaci&oacute;n o autorizaci&oacute;n por parte del titular de un programa de ordenador, seg&uacute;n la ley espa&ntilde;ola de propiedad intelectual:";
 choices[30]= new Array();
 choices[30][0] = "Reproducci&oacute;n total o parcial.";
 choices[30][1] = "La realizaci&oacute;n de una copia de seguridad.";
 choices[30][2] = "Traducci&oacute;n, adaptaci&oacute;n o arreglo.";
 choices[30][3] = "Cualquier forma de distribuci&oacute;n p&uacute;blica.";
 answers[30] = choices[30][1];
 units[30] = "36";
 comments[30] = "Id Pregunta: 630. ";


//  Id pregunta: 631 AÃ±o de creación de pregunta: 2006-01-01
 questions[31]= "32)  Cu&aacute;l de las siguientes afirmaciones permite la legislaci&oacute;n espa&ntilde;ola actual respecto a los programas de ordenador:";
 choices[31]= new Array();
 choices[31][0] = "Los principios que rigen los programas de ordenador pueden ser patentables.";
 choices[31][1] = "Los derechos sobre los programas de ordenador pueden ser inscritos en el Registro de la Propiedad Intelectual.";
 choices[31][2] = "Los programas de ordenador pueden ser patentables.";
 choices[31][3] = "Los programas de ordenador pueden ser inscritos en el Registro de la Propiedad ";
 answers[31] = choices[31][1];
 units[31] = "36";
 comments[31] = "Id Pregunta: 631. ";


//  Id pregunta: 650 AÃ±o de creación de pregunta: 2006-01-01
 questions[32]= "33)  Para que la certificaci&oacute;n ofrezca garant&iacute;as de imparcialidad resulta esencial:";
 choices[32]= new Array();
 choices[32][0] = "Que est&eacute; homologada";
 choices[32][1] = "Que la expida o la controle un organismo independiente";
 choices[32][2] = "Que la controle un organismo administrativo";
 choices[32][3] = "Que la expida AENOR";
 answers[32] = choices[32][1];
 units[32] = "42";
 comments[32] = "Id Pregunta: 650. ";


//  Id pregunta: 2917 AÃ±o de creación de pregunta: 2009-01-01
 questions[33]= "34)  El riesgo es, de acuerdo a MAGERIT V2:";
 choices[33]= new Array();
 choices[33][0] = "Da&ntilde;o producido a una organizaci&oacute;n por un posible incidente";
 choices[33][1] = "Resultado de una agresi&oacute;n";
 choices[33][2] = "Posibilidad de ocurrencia de un incidente";
 choices[33][3] = "el impacto ponderado con la tasa de ocurrencia (o expectativa de materializaci&oacute;n) de la amenaza";
 answers[33] = choices[33][3];
 units[33] = "33";
 comments[33] = "Id Pregunta: 2917. ";


//  Id pregunta: 4249 AÃ±o de creación de pregunta: 2007-01-01
 questions[34]= "35)  Una de las novedades m&aacute;s importantes de la Ley para el acceso electr&oacute;nico de los ciudadanos a las Administraciones P&uacute;blicas consiste en:";
 choices[34]= new Array();
 choices[34][0] = "Se garantiza al ciudadano el acceso a los servicios p&uacute;blicos a trav&eacute;s de Internet y por v&iacute;a telef&oacute;nica, pero no se contemplan en ning&uacute;n caso canales como tel&eacute;fono m&oacute;vil o televisi&oacute;n digital dada su baja madure";
 choices[34][1] = "Aunque existen multitud de antecedentes legislativos de impulso a la administraci&oacute;n electr&oacute;nica en Espa&ntilde;a, por primera vez se reconoce el acceso a las AAPP por medios electr&oacute;nicos como un derecho del ciudadano.";
 choices[34][2] = "No aspira a conceder la misma validez jur&iacute;dica a las comunicaciones electr&oacute;nicas que a las que se realizan en papel.";
 choices[34][3] = "Los servicios electr&oacute;nicos que pongan en marcha las AAPP funcionar&aacute;n en horario de 8 de la ma&ntilde;ana a 8 de la tarde";
 answers[34] = choices[34][1];
 units[34] = "30";
 comments[34] = "Id Pregunta: 4249. Sobre Proyecto LAECAP";


//  Id pregunta: 4395 AÃ±o de creación de pregunta: 2007-01-01
 questions[35]= "36)  &iquest;Cu&aacute;l de las siguientes no se considera una tarea habitual de una administrador de sistemas?";
 choices[35]= new Array();
 choices[35][0] = "Agregar y quitar usuarios.";
 choices[35][1] = "Desarrollo de aplicaciones internas.";
 choices[35][2] = "Realizar copias de seguridad.";
 choices[35][3] = "Monitorizar el sistema.";
 answers[35] = choices[35][1];
 units[35] = "26";
 comments[35] = "Id Pregunta: 4395. Examen TIC MAP B 2006";


//  Id pregunta: 4503 AÃ±o de creación de pregunta: 2007-01-01
 questions[36]= "37)  Como define Ia Norma UNE ISOIIEC 17799 la seguridad de la informaci&oacute;n?";
 choices[36]= new Array();
 choices[36][0] = "La preservaci&oacute;n de la confidencialidad y la integridad";
 choices[36][1] = "La preservaci&oacute;n de Ia confidencialidad, la integridad y la disponibilidad";
 choices[36][2] = "La obtenci&oacute;n de Ia autenticaci&oacute;n y la preservaci&oacute;n de Ia confidencialidad, la integridad y Ia disponibilidad";
 choices[36][3] = "La obtenci&oacute;n de Ia autenticaci&oacute;n y el no repudio y Ia preservaci&oacute;n de Ia confidencialidad, Ia integridad y Ia disponibilidad";
 answers[36] = choices[36][1];
 units[36] = "";
 comments[36] = "Id Pregunta: 4503. ";


//  Id pregunta: 4557 AÃ±o de creación de pregunta: 2007-01-01
 questions[37]= "38)  Seg&uacute;n Magerit, el conjunto de programas de seguridad que permite materializar las decisiones de gesti&oacute;n de riesgos es el";
 choices[37]= new Array();
 choices[37][0] = "mapa de riesgos";
 choices[37][1] = "informe de insuficiencias";
 choices[37][2] = "cuadro de mando";
 choices[37][3] = "plan de seguridad";
 answers[37] = choices[37][3];
 units[37] = "33";
 comments[37] = "Id Pregunta: 4557. ";


//  Id pregunta: 4563 AÃ±o de creación de pregunta: 2007-01-01
 questions[38]= "39)  Las funciones de mediaci&oacute;n y arbitraje atribuidas por la Ley de Propiedad Intelectual son ejercidas por";
 choices[38]= new Array();
 choices[38][0] = "el Comit&eacute; Mediador y Arbitral de Ia Propiedad intelectual";
 choices[38][1] = "el Comit&eacute; Nacional de la Propiedad Intelectual";
 choices[38][2] = "la Comisi&oacute;n Nacional Mediadora y Arbitral de la Propiedad Intelectual";
 choices[38][3] = "Ia Comisi&oacute;n Mediadora y Arbitral de Ia Propiedad Intelectual";
 answers[38] = choices[38][3];
 units[38] = "36";
 comments[38] = "Id Pregunta: 4563. ";


//  Id pregunta: 4744 AÃ±o de creación de pregunta: 2007-01-01
 questions[39]= "40)  El estudio de las consecuencias que tendr&iacute;a una parada de X tiempo sobre la organizaci&oacute;n se contempla en la metodolog&iacute;a MAGERIT en:";
 choices[39]= new Array();
 choices[39][0] = "An&aacute;lisis de riesgos";
 choices[39][1] = "An&aacute;lisis de impacto";
 choices[39][2] = "Disponibilidad";
 choices[39][3] = "Es una metodolog&iacute;a de desarrollo, en ning&uacute;n caso trata an&aacute;lisis del riesgo";
 answers[39] = choices[39][1];
 units[39] = "32";
 comments[39] = "Id Pregunta: 4744. Examen 2006 JCYL";


//  Id pregunta: 5055 AÃ±o de creación de pregunta: 2003-01-01
 questions[40]= "41)  Seg&uacute;n la legislaci&oacute;n vigente sobre la Propiedad Intelectual, &iquest;cu&aacute;l de las siguientes afirmaciones en relaci&oacute;n con laduraci&oacute;n de la protecci&oacute;n en la explotaci&oacute;n de los derechos de autor de un programa de ordenador, por la personatitular del derecho, es cierta?";
 choices[40]= new Array();
 choices[40][0] = "Si el autor es una persona natural, la duraci&oacute;n de la protecci&oacute;n son 35 a&ntilde;os desde la publicaci&oacute;n delprograma.";
 choices[40][1] = "Si el autor es una persona jur&iacute;dica, la duraci&oacute;n de la protecci&oacute;n ser&aacute; de 99 a&ntilde;os computados desde el 1 deenero del a&ntilde;o siguiente al de divulgaci&oacute;n del programa";
 choices[40][2] = "La protecci&oacute;n es indefinida en el tiempo, desde la creaci&oacute;n del c&oacute;digo objeto del programa";
 choices[40][3] = "Cuando el autor sea una persona natural, durar&aacute;n toda la vida del autor y setenta a&ntilde;os despu&eacute;s de sumuerte o declaraci&oacute;n de fallecimiento";
 answers[40] = choices[40][3];
 units[40] = "36";
 comments[40] = "Id Pregunta: 5055. Examen TIC A 2007";


//  Id pregunta: 5063 AÃ±o de creación de pregunta: 2003-01-01
 questions[41]= "42)  Se&ntilde;ale la respuesta correcta:";
 choices[41]= new Array();
 choices[41][0] = "Las resoluciones de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos son recurribles en alzada ante el Ministrode Industria, Turismo y Comercio";
 choices[41][1] = "Las resoluciones de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos no pueden ser objeto de recurso alguno";
 choices[41][2] = "Las resoluciones de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos agotan la via administrativa";
 choices[41][3] = "Por v&iacute;a reglamentaria se establecer&aacute; el sistema de recursos administrativos ante las resoluciones de laAgencia Espa&ntilde;ola de Protecci&oacute;n de Datos";
 answers[41] = choices[41][2];
 units[41] = "29";
 comments[41] = "Id Pregunta: 5063. Examen TIC A 2007";


//  Id pregunta: 5439 AÃ±o de creación de pregunta: 2003-01-01
 questions[42]= "43)  Una de las primeras personas en desarrollar un concepto de la sociedad de la informaci&oacute;n fue el economista";
 choices[42]= new Array();
 choices[42][0] = "Fritz Machlup";
 choices[42][1] = "Charles Babbage";
 choices[42][2] = "Herman Hollerith";
 choices[42][3] = "Howard Aiken";
 answers[42] = choices[42][0];
 units[42] = "21";
 comments[42] = "Id Pregunta: 5439. Castilla y Le&oacute;n";


//  Id pregunta: 5658 AÃ±o de creación de pregunta: 2003-01-01
 questions[43]= "44)  Seg&uacute;n el RD 1720/2007, cual de los siguientes NO es un requisito del documento de seguridad, para el nivel b&aacute;sico:";
 choices[43]= new Array();
 choices[43][0] = "Ambito de aplicaci&oacute;n del documento con especificacion detallada de los recursos protegidos.";
 choices[43][1] = "Los procedimientos de realizacion de copias de repaldo y de recuperacion de los datos en los ficheros o tratamientos automatizados.";
 choices[43][2] = "La identificacion del responsable o responsables de seguridad.";
 choices[43][3] = "Todos los son.";
 answers[43] = choices[43][2];
 units[43] = "29";
 comments[43] = "Id Pregunta: 5658. ";


//  Id pregunta: 5874 AÃ±o de creación de pregunta: 2009-01-01
 questions[44]= "45)  &iquest;Cu&aacute;l de las siguientes tecnolog&iacute;as es usada espec&iacute;ficamente por el CRM de tipo anal&iacute;tico?";
 choices[44]= new Array();
 choices[44][0] = "Software de gesti&oacute;n de incidencias";
 choices[44][1] = "Software de gesti&oacute;n de correo electr&oacute;nico entrante y saliente";
 choices[44][2] = "Datawarehouse";
 choices[44][3] = "Call-center: software de visi&oacute;n unificada de clientes";
 answers[44] = choices[44][2];
 units[44] = "65";
 comments[44] = "Id Pregunta: 5874. MAP 2008 A1";


//  Id pregunta: 5955 AÃ±o de creación de pregunta: 2009-01-01
 questions[45]= "46)  Se&ntilde;ale la respuesta FALSA. La Ley 11/2007 indica que la Reuni&oacute;n de &Oacute;rganos colegiados por medios electr&oacute;nicos en la Administraci&oacute;n General del Estado se efectuar&aacute; de acuerdo con las siguientes especialidades:";
 choices[45]= new Array();
 choices[45][0] = "Deber&aacute; garantizarse la realizaci&oacute;n efectiva de los principios que la legislaci&oacute;n establece respecto de la convocatoria, acceso a la informaci&oacute;n y comunicaci&oacute;n del orden del d&iacute;a, en donde se especificar&aacute;n los tiempos en los que se organizar&aacute;n los debates, la formulaci&oacute;n y conocimiento de las propuestas y la adopci&oacute;n de acuerdos.";
 choices[45][1] = "Deber&aacute; garantizarse de forma fehaciente el quorum requerido en los t&eacute;rminos establecidos por la Ley 30/1992, de R&eacute;gimen Jur&iacute;dico de las Administraciones P&uacute;blicas y del Procedimiento Administrativo Com&uacute;n por medios electr&oacute;nicos ";
 choices[45][2] = "El r&eacute;gimen de constituci&oacute;n y adopci&oacute;n de acuerdos garantizar&aacute; la participaci&oacute;n de los miembros de acuerdo con las disposiciones propias del &oacute;rgano.";
 choices[45][3] = "Las actas garantizar&aacute;n la constancia de las comunicaciones producidas as&iacute; como el acceso de los miembros al contenido de los acuerdos adoptados.";
 answers[45] = choices[45][1];
 units[45] = "43";
 comments[45] = "Id Pregunta: 5955. Disposici&oacute;n Adicional primera.";


//  Id pregunta: 5956 AÃ±o de creación de pregunta: 2009-01-01
 questions[46]= "47)  Se&ntilde;ale la respuesta err&oacute;nea.";
 choices[46]= new Array();
 choices[46][0] = "El Centro de Transferencia de Tecnolog&iacute;a es la respuesta al mandato de La ley 11/2007, de 22 de Junio, de acceso electr&oacute;nico de los ciudadanos a los servicios p&uacute;blicos, en su art&iacute;culo 46 sobre la necesidad de contar con un directorio general de aplicaciones para su reutilizaci&oacute;n";
 choices[46][1] = "Los principales objetivos del CTT son: crear un repositorio com&uacute;n de software, crear una base de conocimiento, crear un espacio donde se puedan compartir experiencias y cooperar";
 choices[46][2] = "Los proyectos publicados en el portal CTT est&aacute;n dirigidos a las Administraciones P&uacute;blicas y las empresas que trabajan en el &aacute;mbito de las Tecnolog&iacute;as de la Informaci&oacute;n y las Comunicaciones y especialmente en Administraci&oacute;n Electr&oacute;nica";
 choices[46][3] = "El CTT es un portal que publica un directorio general de aplicaciones e informa de los proyectos, servicios, normativa y soluciones que se est&aacute;n desarrollando en materia de Administraci&oacute;n electr&oacute;nica.";
 answers[46] = choices[46][2];
 units[46] = "44";
 comments[46] = "Id Pregunta: 5956. www.ctt.map.es";


//  Id pregunta: 5995 AÃ±o de creación de pregunta: 2010-01-01
 questions[47]= "48)  El Defensor del usuario de la administraci&oacute;n electr&oacute;nica a que hace referencia el art&iacute;culo 7 de la Ley 11/2007 de Acceso Electr&oacute;nico de los Ciudadanos a los Servicios P&uacute;blicos es nombrado por:";
 choices[47]= new Array();
 choices[47][0] = "El Defensor del Pueblo.";
 choices[47][1] = "El Congreso de los Diputados, por mayor&iacute;a simple.";
 choices[47][2] = "El Consejo de Ministros.";
 choices[47][3] = "El Ministro de Industria.";
 answers[47] = choices[47][2];
 units[47] = "43";
 comments[47] = "Id Pregunta: 5995. TIC A 2009";


//  Id pregunta: 6076 AÃ±o de creación de pregunta: 2010-01-01
 questions[48]= "49)  &iquest;En cu&aacute;ntos 'niveles de madurez' se agrupan las &aacute;reas de Proceso del modelo de capacidad y madurez CMM?";
 choices[48]= new Array();
 choices[48][0] = "4.";
 choices[48][1] = "5.";
 choices[48][2] = "3.";
 choices[48][3] = "No existe tal concepto.";
 answers[48] = choices[48][1];
 units[48] = "27";
 comments[48] = "Id Pregunta: 6076. ";


//  Id pregunta: 6119 AÃ±o de creación de pregunta: 2010-01-01
 questions[49]= "50)  De acuerdo con la Ley 11/2007, &iquest;es posible la destrucci&oacute;n de documentos emitidos originalmente en soporte papel y de los que se haya hecho copia electr&oacute;nica?";
 choices[49]= new Array();
 choices[49][0] = "S&iacute;, la Ley lo permite, pero antes cada Administraci&oacute;n debe regular los t&eacute;rminos y condiciones de este proceso.";
 choices[49][1] = "S&iacute;, la Ley lo permite, y no hace falta regular o establecer ninguna condici&oacute;n.";
 choices[49][2] = "No, la Ley no lo permite, porque los documentos en soporte papel est&aacute;n protegidos por ser Patrimonio Hist&oacute;rico Administrativo.";
 choices[49][3] = "S&iacute;, la Ley lo permite, pero s&oacute;lo los documentos no firmados y que no reconozcan derechos subjetivos.";
 answers[49] = choices[49][0];
 units[49] = "43";
 comments[49] = "Id Pregunta: 6119. TIC A 2009";


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


//  Id pregunta: 6197 AÃ±o de creación de pregunta: 2010-01-01
 questions[51]= "52)  Para la firma electr&oacute;nica por parte de personal al servicio de las Administraciones P&uacute;blicas NO se contempla el uso de";
 choices[51]= new Array();
 choices[51][0] = "Sello electr&oacute;nico";
 choices[51][1] = "DNI electr&oacute;nico";
 choices[51][2] = "Certificado de empleado p&uacute;blico";
 choices[51][3] = "Sistemas de c&oacute;digo seguro de verificaci&oacute;n";
 answers[51] = choices[51][0];
 units[51] = "43";
 comments[51] = "Id Pregunta: 6197. Articulo 21 RD 1671/2009";


//  Id pregunta: 6367 AÃ±o de creación de pregunta: 2010-01-01
 questions[52]= "53)  Se&ntilde;ale la sentencia correcta, en relaci&oacute;n a la seguridad por defecto definida en el Esquema Nacional de Seguridad:";
 choices[52]= new Array();
 choices[52][0] = "En un sistema de explotaci&oacute;n se eliminar&aacute;n o desactivar&aacute;n, mediante el control de la configuraci&oacute;n, las funciones que no sean de inter&eacute;s, sean innecesarias e, incluso, aquellas que sean inadecuadas al fin que se persigue.";
 choices[52][1] = "El sistema proporcionar&aacute; la funcionalidad requerida para que la organizaci&oacute;n alcance sus objetivos, proveyendo toda funcionalidad adicional posible.";
 choices[52][2] = "Las funciones de operaci&oacute;n, administraci&oacute;n y registro de actividad ser&aacute;n las m&aacute;ximas posibles, y se asegurar&aacute; que s&oacute;lo son accesibles por las personas, o desde emplazamientos o equipos, autorizados, pudiendo exigirse en su caso restricciones de horario y puntos de acceso facultados.";
 choices[52][3] = "Todas las anteriores";
 answers[52] = choices[52][0];
 units[52] = "43";
 comments[52] = "Id Pregunta: 6367. Art&iacute;culo 19 ENS";


//  Id pregunta: 6391 AÃ±o de creación de pregunta: 2010-01-01
 questions[53]= "54)  &iquest;C&oacute;mo se regula el funcionamiento del registro de funcionarios habilitados? ";
 choices[53]= new Array();
 choices[53][0] = "Mediante Orden HAP/7/2014";
 choices[53][1] = "Mediante RD 7/2014";
 choices[53][2] = "Mediante Ley Org&aacute;nica 7/2014";
 choices[53][3] = "Mediante resoluci&oacute;n de la Secretaria de Estado de Funci&oacute;n P&uacute;blica.";
 answers[53] = choices[53][0];
 units[53] = "43";
 comments[53] = "Id Pregunta: 6391. Art&iacute;culo 16 RD 1671/2009";


//  Id pregunta: 6411 AÃ±o de creación de pregunta: 2010-01-01
 questions[54]= "55)  De acuerdo a lo dispuesto en la ley de servicios de la sociedad de la informaci&oacute;n y comercio electr&oacute;nico, &iquest;Cu&aacute;l es la sanci&oacute;n correspondiente por la comisi&oacute;n de infracciones muy graves?";
 choices[54]= new Array();
 choices[54][0] = "150.001 hasta 600.000 euros";
 choices[54][1] = "150.001 hasta 300.000 euros";
 choices[54][2] = "300.001 hasta 600.000 euros";
 choices[54][3] = "600.001 hasta 1,000.000 euros";
 answers[54] = choices[54][0];
 units[54] = "30";
 comments[54] = "Id Pregunta: 6411. Ley 34/2002, art&iacute;culo 39";


//  Id pregunta: 6412 AÃ±o de creación de pregunta: 2010-01-01
 questions[55]= "56)  &iquest;Cu&aacute;l de los siguientes no es un eje de actuaci&oacute;n del Plan Avanza 2?";
 choices[55]= new Array();
 choices[55][0] = "Desarrollo del sector TIC";
 choices[55][1] = "Capacitaci&oacute;n TIC";
 choices[55][2] = " Servicios P&uacute;blicos Digitales";
 choices[55][3] = "Desarrollo I+D+i";
 answers[55] = choices[55][3];
 units[55] = "30";
 comments[55] = "Id Pregunta: 6412. NULL";


//  Id pregunta: 6419 AÃ±o de creación de pregunta: 2010-01-01
 questions[56]= "57)  Las pautas de accesibilidad de agentes de usuario WAI-W3C, se conocen como:";
 choices[56]= new Array();
 choices[56][0] = "WCAG";
 choices[56][1] = "UAAG";
 choices[56][2] = "ATAG";
 choices[56][3] = "TAW";
 answers[56] = choices[56][1];
 units[56] = "39";
 comments[56] = "Id Pregunta: 6419. NULL";


//  Id pregunta: 6601 AÃ±o de creación de pregunta: 2010-01-01
 questions[57]= "58)  Un contrato de servicios de la entidad p&uacute;blica empresarial Red.es estar&aacute; sujeto a regulaci&oacute;n armonizada si su valor estimado es: ";
 choices[57]= new Array();
 choices[57][0] = "Superior a 134.000 euros";
 choices[57][1] = "Superior a 125.000";
 choices[57][2] = "Superior a 206.000";
 choices[57][3] = "Superior a 207.000 euros.";
 answers[57] = choices[57][3];
 units[57] = "41";
 comments[57] = "Id Pregunta: 6601. ";


//  Id pregunta: 7334 AÃ±o de creación de pregunta: 2010-01-01
 questions[58]= "59)  Las RFC (Request for Comments) son publicadas por";
 choices[58]= new Array();
 choices[58][0] = "W3C";
 choices[58][1] = "IEEE";
 choices[58][2] = "IETF";
 choices[58][3] = "IEC";
 answers[58] = choices[58][2];
 units[58] = "42";
 comments[58] = "Id Pregunta: 7334. NULL";


//  Id pregunta: 7336 AÃ±o de creación de pregunta: 2010-01-01
 questions[59]= "60)  Es un organismo europeo de normalizaci&oacute;n, de acuerdo a la Directiva 98/34/CE";
 choices[59]= new Array();
 choices[59][0] = "CEN";
 choices[59][1] = "ICANN";
 choices[59][2] = "SETSI";
 choices[59][3] = "GNU";
 answers[59] = choices[59][0];
 units[59] = "42";
 comments[59] = "Id Pregunta: 7336. NULL";


//  Id pregunta: 8183 AÃ±o de creación de pregunta: 2011-01-01
 questions[60]= "61)  En un contrato de suministro de car&aacute;cter inform&aacute;tico, &iquest;es posible pagar el precio de los bienes adquiridos mediante una parte en dinero y la otra con la entrega de bienes de la misma clase?:";
 choices[60]= new Array();
 choices[60][0] = "No, en ning&uacute;n caso al estar prohibido el pago parcial en especie por las leyes.";
 choices[60][1] = "S&iacute;, siempre es posible. La ley lo admite para todo tipo de contratos.";
 choices[60][2] = "No, salvo autorizaci&oacute;n expresa de la Comisi&oacute;n Ministerial de Administraci&oacute;n Electr&oacute;nica, que el bien entregado no supere los 100.000 euros, y que el adjudicatario del contrato consienta.";
 choices[60][3] = "S&iacute;, siempre que existan razones t&eacute;cnicas o econ&oacute;micas que lo aconsejen, y que el importe de los bienes a entregar no supere el 50 % del total del contrato.";
 answers[60] = choices[60][3];
 units[60] = "41";
 comments[60] = "Id Pregunta: 8183. Examen TIC A1 2010";


//  Id pregunta: 8200 AÃ±o de creación de pregunta: 2011-01-01
 questions[61]= "62)  En una valoraci&oacute;n de tres ofertas inform&aacute;ticas, nos encontramos que en un criterio a maximizar, las puntuaciones son : 5, 7 y 10. &iquest;Cu&aacute;les ser&iacute;an sus puntuaciones normalizadas por el m&eacute;todo de fracci&oacute;n del ideal?:";
 choices[61]= new Array();
 choices[61][0] = "0,5 ; 0,7 ; 1 ";
 choices[61][1] = "0,227 ; 0,318 ; 0,454 ";
 choices[61][2] = "0; 0,4; 1 ";
 choices[61][3] = "1 ; 1,4 ; 2 ";
 answers[61] = choices[61][2];
 units[61] = "41";
 comments[61] = "Id Pregunta: 8200. Examen TIC A1 2010";


//  Id pregunta: 8241 AÃ±o de creación de pregunta: 2011-01-01
 questions[62]= "63)  De las siguientes sentencias, indicar la correcta: ";
 choices[62]= new Array();
 choices[62][0] = "Cuanto mayor sea el Payback de un sistema, m&aacute;s atractivo ser&aacute; para la organizaci&oacute;n acometer su implantaci&oacute;n.";
 choices[62][1] = "Cuanto menor sea el Payback de un sistema, m&aacute;s atractivo ser&aacute; para la organizaci&oacute;n acometer su implantaci&oacute;n. ";
 choices[62][2] = "Cuando el Payback es mayor que el m&aacute;ximo per&iacute;odo definido por la empresa, entonces se debe aceptar el proyecto. ";
 choices[62][3] = "El Payback de un sistema, no muestra si es atractivo o no para la organizaci&oacute;n acometer su implantaci&oacute;n.";
 answers[62] = choices[62][1];
 units[62] = "38";
 comments[62] = "Id Pregunta: 8241. Examen TIC A2 2010";


//  Id pregunta: 8430 AÃ±o de creación de pregunta: 2011-01-01
 questions[63]= "64)  Seg&uacute;n la nueva estrategia para el crecimiento y el empleo Europa 2020, &iquest;Cu&aacute;les de las siguientes prioridades no se encuentra entre las 3 fundamentales definidas en la misma?";
 choices[63]= new Array();
 choices[63][0] = "Crecimiento tecnol&oacute;gico";
 choices[63][1] = "Crecimiento inteligente";
 choices[63][2] = "Crecimiento sostenible";
 choices[63][3] = "Crecimiento integrador";
 answers[63] = choices[63][0];
 units[63] = "30";
 comments[63] = "Id Pregunta: 8430. ";


//  Id pregunta: 8975 AÃ±o de creación de pregunta: 2011-01-01
 questions[64]= "65)  Seg&uacute;n el R.D. 1720/2007, &ldquo;El afectado podr&aacute; revocar su consentimiento a trav&eacute;s de un medio sencillo, gratuito y que no implique...";
 choices[64]= new Array();
 choices[64][0] = "...gasto alguno para el afectado&rdquo;";
 choices[64][1] = "...esfuerzos desproporcionados para el afectado&rdquo;";
 choices[64][2] = "...ingreso alguno para el responsable del fichero o tratamiento&rdquo;";
 choices[64][3] = "...ning&uacute;n tipo de discriminaci&oacute;n&rdquo;";
 answers[64] = choices[64][2];
 units[64] = "29";
 comments[64] = "Id Pregunta: 8975. ";


//  Id pregunta: 9067 AÃ±o de creación de pregunta: 2011-01-01
 questions[65]= "66)  Seg&uacute;n el RD 1671/2009 cu&aacute;l de los siguientes elementos no es un contenido obligatorio del recibo electr&oacute;nico que deber&aacute;n emitir los registros electr&oacute;nicos";
 choices[65]= new Array();
 choices[65][0] = "N&uacute;mero de entrada de registro";
 choices[65][1] = "Informaci&oacute;n del plazo m&aacute;ximo establecido para la resoluci&oacute;n del procedimiento";
 choices[65][2] = "Copia del escrito, comunicaci&oacute;n o solicitud presentada y de los documentos adjuntos";
 choices[65][3] = "Todos las respuestas anteriores forman parte del contenido que debe tener el recibo de un registro electr&oacute;nico ";
 answers[65] = choices[65][2];
 units[65] = "43";
 comments[65] = "Id Pregunta: 9067. NULL";


//  Id pregunta: 9279 AÃ±o de creación de pregunta: 2013-01-01
 questions[66]= "67)  &iquest;Cu&aacute;l de los siguientes es un principio del programa IDABC?";
 choices[66]= new Array();
 choices[66][0] = "Alianzas.";
 choices[66][1] = "Compartici&oacute;n de recursos.";
 choices[66][2] = "Subsidiariedad.";
 choices[66][3] = "Ninguno de los anteriores.";
 answers[66] = choices[66][2];
 units[66] = "40";
 comments[66] = "Id Pregunta: 9279. ";


//  Id pregunta: 9297 AÃ±o de creación de pregunta: 2013-01-01
 questions[67]= "68)  &iquest;Cu&aacute;l es el dominio de CobiT m&aacute;s afectado de cara a la Continuidad del Negocio?";
 choices[67]= new Array();
 choices[67][0] = "Planificaci&oacute;n y Organizaci&oacute;n.";
 choices[67][1] = "Adquisici&oacute;n e implementaci&oacute;n.";
 choices[67][2] = "Entrega y Soporte.";
 choices[67][3] = "Supervisi&oacute;n y Evaluaci&oacute;n.";
 answers[67] = choices[67][2];
 units[67] = "32";
 comments[67] = "Id Pregunta: 9297. ";


//  Id pregunta: 9410 AÃ±o de creación de pregunta: 2013-01-01
 questions[68]= "69)  Cu&aacute;l de las siguientes no es una funci&oacute;n de car&aacute;cter esencialmente estrat&eacute;gico en las organizaciones TIC?";
 choices[68]= new Array();
 choices[68][0] = "Definici&oacute;n de pol&iacute;ticas de seguridad";
 choices[68][1] = "Definici&oacute;n de la arquitectura TIC";
 choices[68][2] = "Definici&oacute;n de la estrategia TIC";
 choices[68][3] = "Oficina de gesti&oacute;n de proyectos";
 answers[68] = choices[68][3];
 units[68] = "26";
 comments[68] = "Id Pregunta: 9410. ";


//  Id pregunta: 9801 AÃ±o de creación de pregunta: 2014-01-01
 questions[69]= "70)  Seg&uacute;n la Ley Org&aacute;nica 15/1999 de protecci&oacute;n de datos, cuando se trata de ficheros de titularidad p&uacute;blica, el plazo para comunicar a la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos la inscripci&oacute;n de ficheros en el Registro General (RGPD) es:";
 choices[69]= new Array();
 choices[69][0] = "No hace falta dicha comunicaci&oacute;n al tratarse de ficheros de titularidad p&uacute;blica. ";
 choices[69][1] = "De 10 d&iacute;as desde que se publica su norma o acuerdo de creaci&oacute;n en el diario oficial correspondiente. ";
 choices[69][2] = "De 3 meses desde que se publica su norma o acuerdo de creaci&oacute;n en el diario oficial correspondiente. ";
 choices[69][3] = "De 30 d&iacute;as desde que se publica su norma o acuerdo de creaci&oacute;n en el diario oficial correspondiente. ";
 answers[69] = choices[69][3];
 units[69] = "29";
 comments[69] = "Id Pregunta: 9801. Examen TIC-A2 2013-Libre";


//  Id pregunta: 10212 AÃ±o de creación de pregunta: 2014-01-01
 questions[70]= "71)  &iquest;Cu&aacute;l de los siguientes m&eacute;todos de ordenaci&oacute;n de alternativas de la Decisi&oacute;n Multicriterio Discreta est&aacute; basado en relaciones de superaci&oacute;n?";
 choices[70]= new Array();
 choices[70][0] = "M&eacute;todo PROMETHEE";
 choices[70][1] = "M&eacute;todo T.O.P.S.I.S. o de la programaci&oacute;n compromiso";
 choices[70][2] = "M&eacute;todo lexicogr&aacute;fico";
 choices[70][3] = "M&eacute;todo de la ponderaci&oacute;n lineal con &iacute;ndices econ&oacute;micos";
 answers[70] = choices[70][0];
 units[70] = "34";
 comments[70] = "Id Pregunta: 10212. ";


//  Id pregunta: 10253 AÃ±o de creación de pregunta: 2014-01-01
 questions[71]= "72)  Cuando sea preciso recabar el consentimiento del interesado para tratar sus datos personales:";
 choices[71]= new Array();
 choices[71][0] = "Ser&aacute; preciso que el responsable del tratamiento pueda probar la existencia de dicho consentimiento, s&oacute;lo en el caso de los datos especialmente protegidos";
 choices[71][1] = "Ser&aacute; preciso que el responsable del tratamiento pueda probar la existencia de dicho consentimiento, en todo caso y durante un periodo m&aacute;ximo de 12 meses";
 choices[71][2] = "Ser&aacute; preciso que el responsable del tratamiento pueda probar la existencia de dicho consentimiento, en todo caso y mientras dure dicho tratamiento";
 choices[71][3] = "No ser&aacute; necesario que el responsable del tratamiento pruebe la existencia del consentimiento para el mismo";
 answers[71] = choices[71][2];
 units[71] = "29";
 comments[71] = "Id Pregunta: 10253. Art&iacute;culo 12.3 del RD 1720/2007";


//  Id pregunta: 10353 AÃ±o de creación de pregunta: 2014-01-01
 questions[72]= "73)  &iquest;Cu&aacute;l es el &aacute;mbito de aplicaci&oacute;n del Real Decreto 1494/2007 de accesibilidad a la sociedad de la informaci&oacute;n y medios de comunicaci&oacute;n social?";
 choices[72]= new Array();
 choices[72][0] = "Los portales web de la Administraciones P&uacute;blicas";
 choices[72][1] = "Administraciones P&uacute;blicas, operadores de telecomunicaciones, prestadores de servicios de la sociedad de la informaci&oacute;n, y medios de comunicaci&oacute;n social";
 choices[72][2] = "Administraciones P&uacute;blicas y medios de comunicaci&oacute;n social, ya que los operadores de telecomunicaciones se rigen por lo dispuesto en la Ley General de Telecomunicaciones";
 choices[72][3] = "Es el mismo que se establece en la norma UNE 139803:2012";
 answers[72] = choices[72][1];
 units[72] = "39";
 comments[72] = "Id Pregunta: 10353. Consultar Art. 2 del Real Decreto";


//  Id pregunta: 10446 AÃ±o de creación de pregunta: 2014-01-01
 questions[73]= "74)  De acuerdo con la Ley Org&aacute;nica 15/1999, de protecci&oacute;n de datos de car&aacute;cter personal, los ficheros creados por las Fuerzas y Cuerpos de Seguridad que contengan datos de car&aacute;cter personal ";
 choices[73]= new Array();
 choices[73][0] = "est&aacute;n en su totalidad excluidos del r&eacute;gimen general de esa Ley.";
 choices[73][1] = "no pueden recoger m&aacute;s datos que los autorizados por el Juez instructor de la causa penal. ";
 choices[73][2] = "pueden recoger datos personales sin consentimiento del afectado para la represi&oacute;n de infracciones penales. ";
 choices[73][3] = "no permiten la cancelaci&oacute;n de los datos personales en ellos registrados con fines policiales. ";
 answers[73] = choices[73][2];
 units[73] = "29";
 comments[73] = "Id Pregunta: 10446. Examen TIC A1 2013";


//  Id pregunta: 10552 AÃ±o de creación de pregunta: 2014-01-01
 questions[74]= "75)  La evaluaci&oacute;n del riesgo es:";
 choices[74]= new Array();
 choices[74][0] = "subjetiva";
 choices[74][1] = "objetiva";
 choices[74][2] = "Matem&aacute;tica";
 choices[74][3] = "Estad&iacute;stica";
 answers[74] = choices[74][0];
 units[74] = "31, 32, 33";
 comments[74] = "Id Pregunta: 10552. Todas las metodolog&iacute;as de evaluaci&oacute;n de riesgos se basan en juicios subjetivos en alg&uacute;n momento en el proceso (por ej, para asignar ponderaciones a los distintos par&aacute;metros)";


//  Id pregunta: 10556 AÃ±o de creación de pregunta: 2014-01-01
 questions[75]= "76)  Cual de las siguientes certificaciones profesionales NO pertenecen a ISACA";
 choices[75]= new Array();
 choices[75][0] = "CISSP";
 choices[75][1] = "CISA";
 choices[75][2] = "CRISC ";
 choices[75][3] = "CISM";
 answers[75] = choices[75][0];
 units[75] = "31, 32, 33";
 comments[75] = "Id Pregunta: 10556. CISSP pertenece a ISC2";


//  Id pregunta: 10557 AÃ±o de creación de pregunta: 2014-01-01
 questions[76]= "77)  Cual es la &uacute;ltima versi&oacute;n de COBIT";
 choices[76]= new Array();
 choices[76][0] = "v4";
 choices[76][1] = "V4.1";
 choices[76][2] = "v5";
 choices[76][3] = "v6";
 answers[76] = choices[76][2];
 units[76] = "31, 32, 33";
 comments[76] = "Id Pregunta: 10557. Isaca lanz&oacute; el 10 de abril del 2012 COBIT 5";


//  Id pregunta: 10558 AÃ±o de creación de pregunta: 2014-01-01
 questions[77]= "78)  COBIT 5 Incluye";
 choices[77]= new Array();
 choices[77][0] = "4 principios y 6 procesos habilitadores";
 choices[77][1] = "5 principios y 7 procesos habilitadores";
 choices[77][2] = "4 principios y 7 procesos habilitadores";
 choices[77][3] = "5 principios y 6 procesos habilitadores";
 answers[77] = choices[77][1];
 units[77] = "31, 32, 33";
 comments[77] = "Id Pregunta: 10558. ";


//  Id pregunta: 10563 AÃ±o de creación de pregunta: 2014-01-01
 questions[78]= "79)  Los controles correctivos tienen como objeto:";
 choices[78]= new Array();
 choices[78][0] = "reducir el riesgo ante una debilidad existente";
 choices[78][1] = "Predecir problemas potenciales antes de que ocurran";
 choices[78][2] = "Solucionar problemas detectados por controles detectivos";
 choices[78][3] = "Reportar errores";
 answers[78] = choices[78][2];
 units[78] = "31, 32, 33";
 comments[78] = "Id Pregunta: 10563. ";


//  Id pregunta: 10575 AÃ±o de creación de pregunta: 2015-01-01
 questions[79]= "80)  Son mecanismos que facilitan la interoperabilidad:";
 choices[79]= new Array();
 choices[79][0] = "SCSP, SIR, SOAP y REST.";
 choices[79][1] = "SCSP, SIR y SAML.";
 choices[79][2] = "A y B son correctas.";
 choices[79][3] = "A y B son incorrectas.";
 answers[79] = choices[79][2];
 units[79] = "44";
 comments[79] = "Id Pregunta: 10575. ";


//  Id pregunta: 10578 AÃ±o de creación de pregunta: 2015-01-01
 questions[80]= "81)  La red SARA:";
 choices[80]= new Array();
 choices[80][0] = "S&oacute;lo interconecta las Administraciones P&uacute;blicas Espa&ntilde;olas.";
 choices[80][1] = "S&oacute;lo interconecta la Administraci&oacute;n General del Estado.";
 choices[80][2] = "S&oacute;lo interconecta las Comunidades Aut&oacute;nomas entre s&iacute;.";
 choices[80][3] = "Interconecta las Administraciones P&uacute;blicas Espa&ntilde;olas e instituciones europeas.";
 answers[80] = choices[80][3];
 units[80] = "44";
 comments[80] = "Id Pregunta: 10578. ";


//  Id pregunta: 10585 AÃ±o de creación de pregunta: 2015-01-01
 questions[81]= "82)  Seg&uacute;n la Norma T&eacute;cnica de Interoperabilidad de Reutilizaci&oacute;n de recursos de la informaci&oacute;n, las URIs:";
 choices[81]= new Array();
 choices[81][0] = "Deben cumplir el principio de persistencia.";
 choices[81][1] = "Deben utilizar el protocolo FTP.";
 choices[81][2] = "Deben exponer informaci&oacute;n sobre la implementaci&oacute;n t&eacute;cnica de sus recursos.";
 choices[81][3] = "Deben usar una estructura consistente y fija.";
 answers[81] = choices[81][0];
 units[81] = "43";
 comments[81] = "Id Pregunta: 10585. Anexo II (Esquema de URI)";


//  Id pregunta: 10691 AÃ±o de creación de pregunta: 2015-01-01
 questions[82]= "83)  La Ley 39/2015 impone:";
 choices[82]= new Array();
 choices[82][0] = "La obligaci&oacute;n de las Administraciones P&uacute;blicas de contar con un registro u otro sistema equivalente";
 choices[82][1] = "La obligaci&oacute;n de las Administraciones P&uacute;blicas de contar con una red para el intercambio de informaci&oacute;n entre las Administraciones P&uacute;blicas.";
 choices[82][2] = "Ambas";
 choices[82][3] = "Ninguna de las anteriores.";
 answers[82] = choices[82][0];
 units[82] = "30";
 comments[82] = "Id Pregunta: 10691. ";


//  Id pregunta: 10719 AÃ±o de creación de pregunta: 2015-01-01
 questions[83]= "84)  &iquest;Cu&aacute;l de los siguientes no es un est&aacute;ndar de firma contemplado en la NTI de firma electr&oacute;nica?";
 choices[83]= new Array();
 choices[83][0] = "XAdES";
 choices[83][1] = "CAdES";
 choices[83][2] = "PAdES";
 choices[83][3] = "MAdES";
 answers[83] = choices[83][3];
 units[83] = "43";
 comments[83] = "Id Pregunta: 10719. ";


//  Id pregunta: 10722 AÃ±o de creación de pregunta: 2015-01-01
 questions[84]= "85)  Seg&uacute;n la NTI de Gesti&oacute;n de Pol&iacute;tica de gesti&oacute;n de documentos electr&oacute;nicos. &iquest;Qui&eacute;n impulsar&aacute; la pol&iacute;tica de gesti&oacute;n de documentos electr&oacute;nicos?";
 choices[84]= new Array();
 choices[84][0] = "La alta direcci&oacute;n.";
 choices[84][1] = "Los responsables de procesos de gesti&oacute;n.";
 choices[84][2] = "El Presidente del Gobierno.";
 choices[84][3] = "El Consejo de Ministros.";
 answers[84] = choices[84][0];
 units[84] = "43";
 comments[84] = "Id Pregunta: 10722. ";


//  Id pregunta: 10745 AÃ±o de creación de pregunta: 2015-01-01
 questions[85]= "86)  &iquest;Con qu&eacute; frecuencia m&iacute;nima se reunir&aacute; el Comit&eacute; Ejecutivo de la comisi&oacute;n de estrategia TIC?";
 choices[85]= new Array();
 choices[85][0] = "Mensual";
 choices[85][1] = "Semestral";
 choices[85][2] = "Trimestral";
 choices[85][3] = "Anual";
 answers[85] = choices[85][0];
 units[85] = "24";
 comments[85] = "Id Pregunta: 10745. ";


//  Id pregunta: 10773 AÃ±o de creación de pregunta: 2015-01-01
 questions[86]= "87)  Se&ntilde;ale la respuesta correcta. Seg&uacute;n se establece en la Ley de Firma Electr&oacute;nica 59/2003 en su art&iacute;culo 32, las multas establecidas al infractor ser&aacute;n de:";
 choices[86]= new Array();
 choices[86][0] = "Por la comisi&oacute;n de infracciones muy graves, multa de 150.001 a 600.000 euros, por la comisi&oacute;n de infracciones graves, se impondr&aacute; al infractor multa de 30.001 a 150.000 euros y por la comisi&oacute;n de infracciones leves, se impondr&aacute; al infractor una multa por importe de hasta 30.000 euros.";
 choices[86][1] = "Por la comisi&oacute;n de infracciones muy graves, multa de 60.001 a 600.000 euros, por la comisi&oacute;n de infracciones graves, se impondr&aacute; al infractor multa de 6.001 a 60.000 euros y por la comisi&oacute;n de infracciones leves, se impondr&aacute; al infractor una multa por importe de hasta 6.000 euros.";
 choices[86][2] = "Por la comisi&oacute;n de infracciones muy graves, multa de 120.001 a 600.000 euros, por la comisi&oacute;n de infracciones graves, se impondr&aacute; al infractor multa de 12.001 a 120.000 euros y por la comisi&oacute;n de infracciones leves, se impondr&aacute; al infractor una multa por importe de hasta 12.000 euros.";
 choices[86][3] = "Por la comisi&oacute;n de infracciones muy graves, multa de 150.001 a 600.000 euros, por la comisi&oacute;n de infracciones graves, se impondr&aacute; al infractor multa de 15.001 a 150.000 euros y por la comisi&oacute;n de infracciones leves, se impondr&aacute; al infractor una multa por importe de hasta 15.000 euros.";
 answers[86] = choices[86][0];
 units[86] = "30";
 comments[86] = "Id Pregunta: 10773. Examen GSI 2014";


//  Id pregunta: 10780 AÃ±o de creación de pregunta: 2015-01-01
 questions[87]= "88)  Seg&uacute;n el art&iacute;culo 18 del Real Decreto 1671/2009, sobre certificados de sede electr&oacute;nica de la Administraci&oacute;n General del Estado y de sus organismos p&uacute;blicos vinculados o dependientes, &iquest;cu&aacute;l de los siguientes NO es uno de los contenidos m&iacute;nimos a incluir en un certificado electr&oacute;nico de sede electr&oacute;nica?";
 choices[87]= new Array();
 choices[87][0] = "Nombre descriptivo de la sede electr&oacute;nica.";
 choices[87][1] = "N&uacute;mero de identificaci&oacute;n fiscal de la entidad suscriptora.";
 choices[87][2] = "Descripci&oacute;n del tipo de certificado, con la denominaci&oacute;n &laquo;sede electr&oacute;nica&raquo;.";
 choices[87][3] = "Direcci&oacute;n f&iacute;sica de la entidad suscriptora.";
 answers[87] = choices[87][3];
 units[87] = "43";
 comments[87] = "Id Pregunta: 10780. Examen GSI 2014";


//  Id pregunta: 10822 AÃ±o de creación de pregunta: 2015-01-01
 questions[88]= "89)  &iquest;Cu&aacute;l de las siguientes reglas puede aplicarse para determinar el esfuerzo total de un proyecto en la fase de estimaci&oacute;n del mismo?";
 choices[88]= new Array();
 choices[88][0] = "Regla del 80-20.";
 choices[88][1] = "Regla del 30-40-30.";
 choices[88][2] = "Regla del 40-20-40.";
 choices[88][3] = "Regla del 20-60-20.";
 answers[88] = choices[88][2];
 units[88] = "28, 89";
 comments[88] = "Id Pregunta: 10822. Examen GSI 2014";


//  Id pregunta: 10971 AÃ±o de creación de pregunta: 2015-01-01
 questions[89]= "90)  Respecto al Registro de Funcionarios Habilitados, se&ntilde;ale la respuesta correcta:";
 choices[89]= new Array();
 choices[89][0] = "Podr&aacute;n ser habilitados los funcionarios de carrera en situaci&oacute;n de servicio activo e inscritos en el Registro Electr&oacute;nico de Apoderamientos.";
 choices[89][1] = "El registro permite la descarga, bajo petici&oacute;n, de un fichero que con todas las habilitaciones vigentes para los tr&aacute;mites y actuaciones por medios electr&oacute;nicos de los que el &oacute;rgano peticionario sea competente.";
 choices[89][2] = "Las habilitaciones inscritas en el Registro deber&aacute;n ser efectivas en el plazo m&aacute;ximo de 5 d&iacute;as h&aacute;biles.";
 choices[89][3] = "La habilitaci&oacute;n se otorgar&aacute; por tiempo m&aacute;ximo de 2 a&ntilde;os, siendo necesaria su renovaci&oacute;n por parte del Departamento competente.";
 answers[89] = choices[89][1];
 units[89] = "43";
 comments[89] = "Id Pregunta: 10971. TIC A1 AGE 2014";


//  Id pregunta: 11107 AÃ±o de creación de pregunta: 2015-01-01
 questions[90]= "91)  Seleccione la respuesta correcta sobre los derechos morales irrenunciables de un autor de una obra:";
 choices[90]= new Array();
 choices[90][0] = "Derecho a decidir sobre la divulgaci&oacute;n o no de la obra";
 choices[90][1] = "Respeto a la integridad de la obra";
 choices[90][2] = "Derecho a exigir el reconocimiento de su condici&oacute;n de autor";
 choices[90][3] = "Todas las anteriores";
 answers[90] = choices[90][3];
 units[90] = "36";
 comments[90] = "Id Pregunta: 11107. ";


//  Id pregunta: 11115 AÃ±o de creación de pregunta: 2015-01-01
 questions[91]= "92)  El &oacute;rgano competente para la resoluci&oacute;n de un recurso especial en materia de contrataci&oacute;n en la AGE es:";
 choices[91]= new Array();
 choices[91][0] = "El Tribunal Administrativo Central de Recursos Contractuales";
 choices[91][1] = "El Tribunal Contencioso Administrativo";
 choices[91][2] = "El Tribunal de Cuentas";
 choices[91][3] = "La Intervenci&oacute;n General de la Administraci&oacute;n del Estado";
 answers[91] = choices[91][0];
 units[91] = "41";
 comments[91] = "Id Pregunta: 11115. ";


//  Id pregunta: 11125 AÃ±o de creación de pregunta: 2015-01-01
 questions[92]= "93)  &iquest;Cu&aacute;l de los siguientes no es un organismo europeo de normalizaci&oacute;n?";
 choices[92]= new Array();
 choices[92][0] = "CEN";
 choices[92][1] = "UNE";
 choices[92][2] = "CENELEC";
 choices[92][3] = "ETSI";
 answers[92] = choices[92][1];
 units[92] = "42";
 comments[92] = "Id Pregunta: 11125. ";


//  Id pregunta: 11197 AÃ±o de creación de pregunta: 2015-01-01
 questions[93]= "94)  &iquest;Qu&eacute; objetivo de porcentaje de i+d marca la estrategia europea 2020 para la Uni&oacute;n Europea?";
 choices[93]= new Array();
 choices[93][0] = "2% del PIB";
 choices[93][1] = "3%del PIB";
 choices[93][2] = "5% del PIB";
 choices[93][3] = "La estrategia Europa 2020 no marca ning&uacute;n objetivo en materia de i+d";
 answers[93] = choices[93][1];
 units[93] = "30";
 comments[93] = "Id Pregunta: 11197. ";


//  Id pregunta: 11325 AÃ±o de creación de pregunta: 2015-01-01
 questions[94]= "95)  &iquest;Qui&eacute;n tiene la competencia sancionadora en materia de protecci&oacute;n de datos?";
 choices[94]= new Array();
 choices[94][0] = "Ministro de Justicia";
 choices[94][1] = "Secretario de Estado de Justicia";
 choices[94][2] = "La Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos";
 choices[94][3] = "El registro de la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos";
 answers[94] = choices[94][2];
 units[94] = "29";
 comments[94] = "Id Pregunta: 11325. ";


//  Id pregunta: 11486 AÃ±o de creación de pregunta: 2015-01-01
 questions[95]= "96)  Seg&uacute;n el art&iacute;culo 26 de la Ley de Procedimiento Administrativo Com&uacute;n de las Administraciones P&uacute;blicas Ley 39/2015 respecto a la validez de documentos electr&oacute;nicos administrativos, es FALSO que ";
 choices[95]= new Array();
 choices[95][0] = "Deber&aacute;n contener informaci&oacute;n de cualquier naturaleza archivada en un soporte electr&oacute;nico seg&uacute;n un formato determinado susceptible de identificaci&oacute;n y tratamiento diferenciado.";
 choices[95][1] = "Deber&aacute;n incorporar metadatos m&iacute;nimos exigidos.";
 choices[95][2] = "Deber&aacute;n incorporar una referencia temporal del momento en que han sido emitidos.";
 choices[95][3] = "Deber&aacute;n incorporar firma electr&oacute;nica aquellos documentos electr&oacute;nicos que sean publicados por las AA.PP con car&aacute;cter meramente informativo.";
 answers[95] = choices[95][3];
 units[95] = "43";
 comments[95] = "Id Pregunta: 11486. NULL";


//  Id pregunta: 11585 AÃ±o de creación de pregunta: 2015-01-01
 questions[96]= "97)  El m&eacute;todo de normalizaci&oacute;n de puntuaciones que asigna 1 a la puntuaci&oacute;n m&aacute;s alta y que no mantiene la proporcionalidad es:";
 choices[96]= new Array();
 choices[96][0] = "Fracci&oacute;n de la suma";
 choices[96][1] = "Fracci&oacute;n del m&aacute;ximo";
 choices[96][2] = "Fracci&oacute;n del ideal";
 choices[96][3] = "Todas las anteriores son falsas";
 answers[96] = choices[96][2];
 units[96] = "34";
 comments[96] = "Id Pregunta: 11585. ";


//  Id pregunta: 11599 AÃ±o de creación de pregunta: 2015-01-01
 questions[97]= "98)  La entrada en vigor de la Ley 39/2015 es:";
 choices[97]= new Array();
 choices[97][0] = "A los seis meses de su publicaci&oacute;n en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;.";
 choices[97][1] = "Al a&ntilde;o de su publicaci&oacute;n en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;.";
 choices[97][2] = "A los dieciocho meses de su publicaci&oacute;n en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;.";
 choices[97][3] = "A los dos a&ntilde;os de su publicaci&oacute;n en el &laquo;Bolet&iacute;n Oficial del Estado&raquo;.";
 answers[97] = choices[97][1];
 units[97] = "43";
 comments[97] = "Id Pregunta: 11599. ";


//  Id pregunta: 11776 AÃ±o de creación de pregunta: 2015-01-01
 questions[98]= "99)  &iquest;Qu&eacute; consecuencias tiene la declaraci&oacute;n judicial de existencia de cesi&oacute;n ilegal de trabajadores, en caso de que un trabajador de una empresa externa demande judicialmente y obtenga un pronunciamiento en tal sentido?";
 choices[98]= new Array();
 choices[98][0] = "La declaraci&oacute;n de cesi&oacute;n ilegal de trabajadores produce autom&aacute;ticamente la incorporaci&oacute;n del trabajador demandante a la plantilla de la Administraci&oacute;n, como trabajador fijo,&nbsp; manteniendo las condiciones laborales que ten&iacute;a reconocida con la empresa contratista";
 choices[98][1] = "La declaraci&oacute;n de cesi&oacute;n ilegal de trabajadores no produce efectos sobre la relaci&oacute;n laboral entre el trabajador que demande y la empresa contratista, sin perjuicio de las responsabilidades disciplinarias y en su caso penales del funcionario responsable de la irregularidad";
 choices[98][2] = "El trabajador podr&aacute; optar por incorporarse a la plantilla de la Administraci&oacute;n, como trabajador indefinido no fijo, y podr&aacute;n derivarse responsabilidades disciplinarias y penales contra el funcionario responsable de la irregularidad, entre otras posibles consecuencias&nbsp;";
 choices[98][3] = "El trabajador continuar&aacute; prestando servicios en la empresa contratista, si bien tendr&aacute; las mismas condiciones, econ&oacute;micas y de horario, mientras dure la contrata con la Administraci&oacute;n, que el funcionario responsable del servicio externalizado";
 answers[98] = choices[98][2];
 units[98] = "41";
 comments[98] = "Id Pregunta: 11776. ";


//  Id pregunta: 11782 AÃ±o de creación de pregunta: 2015-01-01
 questions[99]= "100)  Seg&uacute;n la ley 19/2013 de transparencia:";
 choices[99]= new Array();
 choices[99][0] = "El Portal de la Transparencia depende del Ministerio de Hacienda y Administraciones P&uacute;blicas.";
 choices[99][1] = "La solicitud de acceso a la informaci&oacute;n no requerir&aacute; la identificaci&oacute;n del solicitante.";
 choices[99][2] = "No se admitir&aacute;n solicitudes de informaci&oacute;n para cuya divulgaci&oacute;n sea necesaria una acci&oacute;n previa de reelaboraci&oacute;n.";
 choices[99][3] = "La resoluci&oacute;n de la petici&oacute;n de acceso deber&aacute; notificarse al solicitante en el plazo m&aacute;ximo de 15 d&iacute;as h&aacute;biles.";
 answers[99] = choices[99][2];
 units[99] = "19";
 comments[99] = "Id Pregunta: 11782. ";


